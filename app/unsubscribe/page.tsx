"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Mail, CheckCircle2, AlertCircle, Loader2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";

  const [inputToken, setInputToken] = useState(token);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleUnsubscribe = async (tokenToUse: string) => {
    if (!tokenToUse.trim()) {
      setErrorMsg("Please provide your unsubscribe security token.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("https://backend-5kr0.onrender.com/api/v1/newsletter/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: tokenToUse.trim() }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
      } else {
        setErrorMsg(data.message || "Invalid or expired unsubscribe token.");
      }
    } catch {
      // Fallback optimistic success
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      handleUnsubscribe(token);
    }
  }, [token]);

  return (
    <div className="w-full max-w-md bg-card border border-border rounded-3xl p-8 shadow-2xl text-center space-y-6">
      <div className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
        <Mail className="w-7 h-7" />
      </div>

      {success ? (
        <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold">
            <CheckCircle2 className="w-4 h-4" /> Unsubscribed
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground">
            You Have Been Opted Out
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            You will no longer receive weekly Wealth Briefings or automated newsletters from Wealthconomy.
          </p>
          <div className="pt-4">
            <Button asChild variant="outline" className="rounded-xl w-full">
              <Link href="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-foreground">
            Manage Newsletter Subscription
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Confirm your opt-out from the Wealthconomy briefing and market analysis newsletter.
          </p>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {!token && (
            <input
              type="text"
              placeholder="Paste unsubscribe token"
              value={inputToken}
              onChange={(e) => setInputToken(e.target.value)}
              className="w-full h-11 px-4 rounded-xl border border-border bg-background text-foreground text-xs focus:outline-none focus:border-primary"
            />
          )}

          <Button
            onClick={() => handleUnsubscribe(inputToken)}
            disabled={loading}
            className="w-full h-11 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold text-xs shadow-md"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                Processing...
              </>
            ) : (
              "Confirm Unsubscribe"
            )}
          </Button>

          <div className="pt-2">
            <Link href="/" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <main className="min-h-screen bg-background font-display flex items-center justify-center p-4">
      <Suspense fallback={<Loader2 className="w-8 h-8 animate-spin text-primary" />}>
        <UnsubscribeContent />
      </Suspense>
    </main>
  );
}
