"use client";

import { useState, useMemo } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Calculator, ArrowRight, TrendingUp, Info } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatCompactCurrency(value: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

export default function CalculatorPage() {
  const [initialDeposit, setInitialDeposit] = useState(100000);
  const [monthlyContribution, setMonthlyContribution] = useState(50000);
  const [interestRate, setInterestRate] = useState(12);
  const [years, setYears] = useState(10);

  const data = useMemo(() => {
    const result = [];
    let currentBalance = initialDeposit;
    let totalDeposits = initialDeposit;
    
    for (let i = 0; i <= years; i++) {
      if (i > 0) {
        // Compound monthly
        for (let m = 0; m < 12; m++) {
          currentBalance += monthlyContribution;
          totalDeposits += monthlyContribution;
          currentBalance *= (1 + (interestRate / 100) / 12);
        }
      }
      result.push({
        year: `Year ${i}`,
        balance: Math.round(currentBalance),
        deposits: Math.round(totalDeposits),
      });
    }
    return result;
  }, [initialDeposit, monthlyContribution, interestRate, years]);

  const finalBalance = data[data.length - 1].balance;
  const totalDeposits = data[data.length - 1].deposits;
  const totalInterest = finalBalance - totalDeposits;

  return (
    <main className="min-h-screen bg-background pt-24 pb-32">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary mb-6">
            <Calculator className="h-4 w-4" /> Interactive Tool
          </div>
          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl text-foreground">
            Wealth Projection Calculator
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            See how your money can grow over time with the power of compound interest. Adjust the inputs below to visualize your path to financial freedom.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
          {/* Main Chart Area */}
          <div className="space-y-8">
            <div className="rounded-3xl border border-border bg-surface-soft/40 p-6 md:p-8">
              <h2 className="text-xl font-semibold text-foreground mb-6">Growth Projection</h2>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={data}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0d9488" stopOpacity={0.5}/>
                        <stop offset="95%" stopColor="#0d9488" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorDeposits" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#eab308" stopOpacity={0.5}/>
                        <stop offset="95%" stopColor="#eab308" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis 
                      dataKey="year" 
                      stroke="#6b7280"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      dy={10}
                    />
                    <YAxis 
                      stroke="#6b7280"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => formatCompactCurrency(value)}
                      width={80}
                    />
                    <Tooltip 
                      formatter={(value: number) => formatCurrency(value)}
                      contentStyle={{ 
                        backgroundColor: '#ffffff', 
                        borderColor: '#e5e7eb',
                        borderRadius: '16px',
                        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                        padding: '12px'
                      }}
                      itemStyle={{ color: '#111827', fontWeight: 600 }}
                      labelStyle={{ color: '#6b7280', marginBottom: '8px', fontWeight: 500 }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="balance" 
                      name="Total Wealth"
                      stroke="#0d9488" 
                      strokeWidth={4}
                      fillOpacity={1} 
                      fill="url(#colorBalance)" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="deposits" 
                      name="Total Deposits"
                      stroke="#eab308" 
                      strokeWidth={4}
                      fillOpacity={1} 
                      fill="url(#colorDeposits)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center gap-6 mt-6 pt-6 border-t border-border/50 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Total Wealth</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gold" />
                  <span className="text-muted-foreground">Total Deposits</span>
                </div>
              </div>
            </div>

            {/* Educational snippet */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 flex gap-4 items-start">
              <div className="h-10 w-10 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Info className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">The Magic of Compounding</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Compound interest is the interest on your initial deposit, plus the interest you've already earned. The longer you leave your money invested, the faster it grows.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Controls */}
          <div className="space-y-6">
            {/* Results Summary */}
            <div className="rounded-3xl bg-gradient-to-br from-primary to-[#0e4143] p-8 text-white shadow-xl">
              <div className="mb-2 text-primary-glow font-medium text-sm">Projected Total Wealth</div>
              <div className="font-display text-4xl font-bold tracking-tight">
                {formatCurrency(finalBalance)}
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-white/70 text-sm">Total Deposits</span>
                  <span className="font-semibold">{formatCurrency(totalDeposits)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm">Total Interest Earned</span>
                  <span className="font-semibold text-gold">{formatCurrency(totalInterest)}</span>
                </div>
              </div>

              <Button 
                onClick={() => window.dispatchEvent(new CustomEvent("open-coming-soon-modal"))}
                className="w-full mt-8 bg-white text-primary hover:bg-gray-100 rounded-full h-12"
              >
                Start Saving Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Inputs */}
            <div className="rounded-3xl border border-border bg-background p-8 space-y-8">
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold">Initial Deposit</label>
                  <span className="text-sm text-primary font-mono bg-primary/10 px-2 py-1 rounded">
                    {formatCurrency(initialDeposit)}
                  </span>
                </div>
                <Slider
                  value={[initialDeposit]}
                  onValueChange={(v) => setInitialDeposit(v[0])}
                  max={5000000}
                  step={50000}
                  className="py-4"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold">Monthly Contribution</label>
                  <span className="text-sm text-primary font-mono bg-primary/10 px-2 py-1 rounded">
                    {formatCurrency(monthlyContribution)}
                  </span>
                </div>
                <Slider
                  value={[monthlyContribution]}
                  onValueChange={(v) => setMonthlyContribution(v[0])}
                  max={1000000}
                  step={10000}
                  className="py-4"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold">Expected Annual Return</label>
                  <span className="text-sm text-primary font-mono bg-primary/10 px-2 py-1 rounded">
                    {interestRate}%
                  </span>
                </div>
                <Slider
                  value={[interestRate]}
                  onValueChange={(v) => setInterestRate(v[0])}
                  max={25}
                  min={1}
                  step={1}
                  className="py-4"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold">Time Horizon</label>
                  <span className="text-sm text-primary font-mono bg-primary/10 px-2 py-1 rounded">
                    {years} Years
                  </span>
                </div>
                <Slider
                  value={[years]}
                  onValueChange={(v) => setYears(v[0])}
                  max={40}
                  min={1}
                  step={1}
                  className="py-4"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
