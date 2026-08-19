import { apiClient } from "./api-client";

export const dynamic = "force-dynamic";

export interface AssessmentOption {
  id: string;
  optionText: string;
}

export interface AssessmentQuestion {
  id: string;
  questionText: string;
  options: AssessmentOption[];
}

export interface AssessmentItem {
  id: string;
  title: string;
  slug?: string;
  description: string;
  estimatedMinutes: number;
  category: string;
  status: string;
  totalQuestions: number;
  createdAt: string;
  questions?: AssessmentQuestion[];
}

export interface AnswerBreakdown {
  questionId: string;
  questionText: string;
  selectedOptionId: string;
  selectedOptionText: string;
  correctOptionId?: string;
  correctOptionText?: string;
  isCorrect?: boolean;
  explanation?: string;
}

export interface AssessmentSubmissionResult {
  id: string;
  assessmentId: string;
  assessmentTitle: string;
  email: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  resultTier: "HIGH_READINESS" | "MODERATE_READINESS" | "LOW_READINESS" | string;
  resultSummary: string;
  answersBreakdown: AnswerBreakdown[];
  createdAt: string;
}

export async function fetchActiveAssessments(): Promise<AssessmentItem[]> {
  try {
    const res = await apiClient<any>("/assessments", { cache: "no-store" });
    if (res.success && res.data) {
      if (Array.isArray(res.data)) {
        return res.data;
      }
      if (Array.isArray(res.data.items)) {
        return res.data.items;
      }
      if (Array.isArray(res.data.assessments)) {
        return res.data.assessments;
      }
      if (Array.isArray(res.data.data)) {
        return res.data.data;
      }
    }
  } catch (error) {
    console.error("Error fetching assessments from API:", error);
  }
  return [];
}

export async function fetchAssessmentById(id: string): Promise<AssessmentItem | null> {
  try {
    const res = await apiClient<any>(`/assessments/${id}`, { cache: "no-store" });
    if (res.success && res.data) {
      if (res.data.assessment) return res.data.assessment;
      return res.data;
    }
  } catch (error) {
    console.error(`Error fetching assessment ${id}:`, error);
  }
  return null;
}

export async function submitAssessmentAnswers(
  assessmentId: string,
  email: string,
  answers: { questionId: string; selectedOptionId: string }[]
): Promise<{ success: boolean; data?: AssessmentSubmissionResult; message?: string; error?: string }> {
  try {
    const res = await apiClient<any>(`/assessments/${assessmentId}/submit`, {
      method: "POST",
      body: JSON.stringify({ email: email.trim(), answers }),
      cache: "no-store",
    });

    return {
      success: res.success,
      data: res.data,
      error: res.error || undefined,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "Failed to submit assessment answers",
    };
  }
}
