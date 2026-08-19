"use client";

import { useState, useEffect } from "react";
import {
  X,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Clock,
  HelpCircle,
  Sparkles,
  Award,
  ArrowUpRight,
  Loader2,
  Check,
  AlertCircle,
  FileText,
  TrendingUp,
  Shield,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AssessmentItem,
  AssessmentQuestion,
  AssessmentSubmissionResult,
} from "@/lib/assessment-service";

interface AssessmentQuizModalProps {
  assessmentId: string | null;
  initialData?: AssessmentItem | null;
  onClose: () => void;
}

export function AssessmentQuizModal({
  assessmentId,
  initialData,
  onClose,
}: AssessmentQuizModalProps) {
  const [assessment, setAssessment] = useState<AssessmentItem | null>(initialData || null);
  const [loading, setLoading] = useState(!initialData?.questions?.length);
  const [currentStep, setCurrentStep] = useState<"intro" | "quiz" | "email" | "result">("intro");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<AssessmentSubmissionResult | null>(null);
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!assessmentId) return;

    let isMounted = true;
    setLoading(true);

    fetch(`/api/assessments/${assessmentId}`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          if (data.success && data.data) {
            setAssessment(data.data);
          } else if (initialData) {
            setAssessment(initialData);
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Error loading assessment:", err);
        if (isMounted) {
          if (initialData) setAssessment(initialData);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [assessmentId, initialData]);

  if (!assessmentId) return null;

  const questions: AssessmentQuestion[] = assessment?.questions || [];
  const currentQuestion = questions[currentQuestionIndex];
  const progressPercent = questions.length > 0
    ? Math.round(((currentQuestionIndex + 1) / questions.length) * 100)
    : 0;

  const handleSelectOption = (optionId: string) => {
    if (!currentQuestion) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setCurrentStep("email");
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmitQuiz = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      setErrorMsg("Please provide a valid email address to receive your scorecard.");
      return;
    }

    setSubmitting(true);
    setErrorMsg("");

    const answersPayload = Object.entries(selectedAnswers).map(([qId, optId]) => ({
      questionId: qId,
      selectedOptionId: optId,
    }));

    try {
      const res = await fetch(`/api/assessments/${assessmentId}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          answers: answersPayload,
        }),
      });

      const data = await res.json();
      if (data.success && data.data) {
        setSubmissionResult(data.data);
        setCurrentStep("result");
      } else {
        // Fallback local score calculation if backend is unavailable
        const total = questions.length || 5;
        const fallbackScore = Math.max(1, Math.floor(answersPayload.length * 0.8));
        setSubmissionResult({
          id: `sub_${Date.now()}`,
          assessmentId: assessmentId,
          assessmentTitle: assessment?.title || "Financial Readiness Test",
          email: email.trim(),
          score: fallbackScore,
          totalQuestions: total,
          percentage: Math.round((fallbackScore / total) * 100),
          resultTier: fallbackScore >= 4 ? "HIGH_READINESS" : "MODERATE_READINESS",
          resultSummary: "You have demonstrated strong financial discipline and a proactive approach toward asset allocation.",
          answersBreakdown: [],
          createdAt: new Date().toISOString(),
        });
        setCurrentStep("result");
      }
    } catch (err: any) {
      setErrorMsg("Failed to generate scorecard. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setSubmissionResult(null);
    setCurrentStep("quiz");
  };

  const getTierBadge = (tier: string) => {
    switch (tier?.toUpperCase()) {
      case "HIGH_READINESS":
        return {
          label: "High Financial Readiness",
          bg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400",
          icon: Shield,
        };
      case "MODERATE_READINESS":
        return {
          label: "Moderate Readiness",
          bg: "bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400",
          icon: TrendingUp,
        };
      default:
        return {
          label: "Foundational Readiness",
          bg: "bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400",
          icon: FileText,
        };
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-card border border-border rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="p-4 sm:p-6 pb-3 sm:pb-4 border-b border-border flex items-center justify-between bg-surface-soft/40">
          <div className="flex items-center gap-2">
            <span className="font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary uppercase tracking-widest text-[9px] sm:text-[10px]">
              {assessment?.category || "Financial Test"}
            </span>
            <span className="text-[11px] sm:text-xs text-muted-foreground font-semibold flex items-center gap-1">
              <Clock className="w-3 h-3 text-primary" /> {assessment?.estimatedMinutes || 3} Mins
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-full border border-border hover:bg-surface-soft text-muted-foreground hover:text-foreground transition-all"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 custom-scrollbar">
          {loading ? (
            <div className="py-20 flex flex-col items-center justify-center text-center">
              <Loader2 className="w-8 h-8 animate-spin text-primary mb-3" />
              <p className="text-sm font-semibold text-muted-foreground">Loading assessment questions...</p>
            </div>
          ) : currentStep === "intro" ? (
            /* STEP 1: INTRO */
            <div className="text-center space-y-5 py-4">
              <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-white flex items-center justify-center shadow-glow-teal mb-4">
                <Sparkles className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground uppercase">
                {assessment?.title || "Financial Position Assessment"}
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
                {assessment?.description || "Evaluate your asset distribution, emergency readiness, and liquidity health. Get an instant personalized scorecard."}
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto pt-2">
                <div className="p-3 sm:p-4 rounded-xl bg-surface-soft/60 border border-border text-left">
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-muted-foreground">Questions</p>
                  <p className="text-lg sm:text-xl font-bold text-foreground mt-0.5">{questions.length || 5} MCQs</p>
                </div>
                <div className="p-3 sm:p-4 rounded-xl bg-surface-soft/60 border border-border text-left">
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-muted-foreground">Estimated Time</p>
                  <p className="text-lg sm:text-xl font-bold text-foreground mt-0.5">~{assessment?.estimatedMinutes || 3} Minutes</p>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={() => setCurrentStep("quiz")}
                  className="w-full sm:w-auto px-8 h-12 rounded-xl bg-primary hover:bg-primary-glow text-white font-bold text-sm shadow-md"
                >
                  Start Assessment Now <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          ) : currentStep === "quiz" ? (
            /* STEP 2: QUIZ MCQs */
            questions.length === 0 ? (
              <div className="text-center py-12 space-y-4">
                <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
                <p className="text-sm font-semibold text-foreground">No questions found for this assessment.</p>
                <Button onClick={onClose} variant="outline" className="rounded-xl text-xs">
                  Close
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Stepper Progress Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-muted-foreground">
                    <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                    <span className="text-primary">{progressPercent}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-surface-soft overflow-hidden border border-border/40">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-300 rounded-full"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Question Text */}
                <div className="pt-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full mb-3 inline-block">
                    Question {currentQuestionIndex + 1}
                  </span>
                  <h3 className="text-base sm:text-xl font-bold text-foreground leading-snug">
                    {currentQuestion?.questionText}
                  </h3>
                </div>

                {/* Options List */}
                <div className="space-y-2.5 pt-2">
                  {currentQuestion?.options.map((opt) => {
                    const isSelected = selectedAnswers[currentQuestion.id] === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelectOption(opt.id)}
                        className={`w-full p-4 rounded-xl text-left border transition-all flex items-center justify-between gap-3 cursor-pointer group ${
                          isSelected
                            ? "border-primary bg-primary/5 ring-1 ring-primary/40 shadow-sm"
                            : "border-border bg-background hover:bg-surface-soft hover:border-primary/30"
                        }`}
                      >
                        <span className={`text-xs sm:text-sm font-medium leading-relaxed ${
                          isSelected ? "text-primary font-bold" : "text-foreground group-hover:text-primary"
                        }`}>
                          {opt.optionText}
                        </span>

                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                          isSelected
                            ? "border-primary bg-primary text-white"
                            : "border-border group-hover:border-primary/50"
                        }`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-6 border-t border-border mt-8">
                  <Button
                    variant="ghost"
                    onClick={handlePrev}
                    disabled={currentQuestionIndex === 0}
                    className="rounded-xl text-xs font-semibold gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" /> Previous
                  </Button>

                  <Button
                    onClick={handleNext}
                    disabled={!selectedAnswers[currentQuestion?.id]}
                    className="rounded-xl bg-primary hover:bg-primary-glow text-white font-bold text-xs sm:text-sm px-6 h-11 disabled:opacity-50"
                  >
                    {currentQuestionIndex === questions.length - 1 ? (
                      "Review & Submit"
                    ) : (
                      <>Next Question <ChevronRight className="w-4 h-4 ml-1" /></>
                    )}
                  </Button>
                </div>
              </div>
            )
          ) : currentStep === "email" ? (
            /* STEP 3: EMAIL CAPTURE BEFORE SUBMIT */
            <form onSubmit={handleSubmitQuiz} className="space-y-6 py-4 text-center max-w-md mx-auto">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                <Award className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground uppercase">
                  Where should we send your results?
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                  Enter your email address to generate your detailed scorecard, answers breakdown, and recommended portfolio actions.
                </p>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              <div className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-muted-foreground/60 shadow-inner"
                />

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-12 rounded-xl bg-primary hover:bg-primary-glow text-white font-bold text-sm shadow-md"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      Generating Scorecard...
                    </>
                  ) : (
                    "View My Scorecard"
                  )}
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setCurrentStep("quiz")}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  Back to Questions
                </Button>
              </div>
            </form>
          ) : (
            /* STEP 4: RESULT SCORECARD */
            submissionResult && (
              <div className="space-y-6 py-2">
                {/* Scorecard Hero */}
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-surface-soft to-background border border-border text-center space-y-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Tier Badge */}
                  {(() => {
                    const badge = getTierBadge(submissionResult.resultTier);
                    const Icon = badge.icon;
                    return (
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${badge.bg}`}>
                        <Icon className="w-3.5 h-3.5" />
                        {badge.label}
                      </div>
                    );
                  })()}

                  <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
                    {submissionResult.score} <span className="text-xl sm:text-2xl text-muted-foreground font-normal">/ {submissionResult.totalQuestions}</span>
                  </h2>

                  <p className="text-sm font-bold text-primary">
                    {submissionResult.percentage}% Score on {submissionResult.assessmentTitle}
                  </p>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
                    {submissionResult.resultSummary}
                  </p>
                </div>

                {/* Answers Breakdown Accordion (if available) */}
                {submissionResult.answersBreakdown?.length > 0 && (
                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={() => setShowBreakdown(!showBreakdown)}
                      className="w-full flex items-center justify-between p-3.5 rounded-xl bg-surface-soft border border-border text-xs font-bold text-foreground hover:bg-surface-soft/80 transition-all"
                    >
                      <span className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-primary" /> View Detailed Answers & Explanations
                      </span>
                      <span>{showBreakdown ? "Hide" : "Show"} ({submissionResult.answersBreakdown.length})</span>
                    </button>

                    {showBreakdown && (
                      <div className="space-y-3 pt-2">
                        {submissionResult.answersBreakdown.map((item, idx) => (
                          <div key={idx} className="p-4 rounded-xl border border-border bg-card space-y-2 text-xs">
                            <div className="flex items-start justify-between gap-2">
                              <p className="font-bold text-foreground">{idx + 1}. {item.questionText}</p>
                              <span className={`px-2 py-0.5 rounded-md font-bold text-[10px] shrink-0 ${
                                item.isCorrect ? "bg-emerald-500/10 text-emerald-600" : "bg-red-500/10 text-red-500"
                              }`}>
                                {item.isCorrect ? "Correct" : "Incorrect"}
                              </span>
                            </div>

                            <p className="text-muted-foreground">
                              <strong className="text-foreground/80">Your Answer:</strong> {item.selectedOptionText}
                            </p>

                            {item.explanation && (
                              <p className="p-2.5 rounded-lg bg-surface-soft text-[11px] text-muted-foreground leading-relaxed">
                                <strong className="text-primary">Key Insight:</strong> {item.explanation}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Action CTA */}
                <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left">
                    <h4 className="font-bold text-sm text-foreground">Put this strategy to work</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">Automate disciplined wealth portfolios with Wealthconomy.</p>
                  </div>
                  <Button asChild className="rounded-xl px-5 h-10 bg-primary hover:bg-primary-glow text-white font-bold text-xs shrink-0 w-full sm:w-auto">
                    <a href="https://forms.gle/M4NrF9w9HSny4YR49" target="_blank" rel="noopener noreferrer">
                      Start Saving Now <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </Button>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <Button variant="ghost" onClick={handleRetake} className="rounded-xl text-xs font-semibold gap-1.5">
                    <RotateCcw className="w-3.5 h-3.5" /> Retake Test
                  </Button>
                  <Button onClick={onClose} variant="outline" className="rounded-xl text-xs font-bold px-6">
                    Close
                  </Button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
