"use client";

import { useState, useMemo, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Delete, RefreshCw, TrendingUp, Target, Wallet, Calendar, Settings2, HelpCircle, FileText, Divide, X, Minus, Plus, Equal, History } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Decimal from "decimal.js";

// Formatter Helpers
function formatCurrency(val: string | number) {
  const num = Number(val) || 0;
  return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(num);
}
function formatCompactCurrency(value: number) {
  return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", notation: "compact", maximumFractionDigits: 1 }).format(value);
}
function formatNumber(val: string) {
  if (!val) return "0";
  return new Intl.NumberFormat("en-NG").format(Number(val));
}

// ----------------------------------------------------------------------
// STANDARD CALCULATOR LOGIC
// ----------------------------------------------------------------------
type Operator = "+" | "-" | "×" | "÷" | null;
interface HistoryItem { equation: string; result: string; }

// ----------------------------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------------------------
export default function HybridCalculatorPage() {
  const [appMode, setAppMode] = useState<"wealth" | "standard">("wealth");

  // --- STANDARD CALC STATE ---
  const [displayValue, setDisplayValue] = useState("0");
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operator, setOperator] = useState<Operator>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const handleStdNum = (num: string) => {
    if (waitingForOperand) {
      setDisplayValue(num);
      setWaitingForOperand(false);
    } else {
      setDisplayValue(displayValue === "0" ? num : displayValue + num);
    }
  };

  const handleStdDot = () => {
    if (waitingForOperand) {
      setDisplayValue("0.");
      setWaitingForOperand(false);
    } else if (!displayValue.includes(".")) {
      setDisplayValue(displayValue + ".");
    }
  };

  const handleStdDelete = () => {
    if (waitingForOperand) return;
    setDisplayValue(prev => prev.length > 1 ? prev.slice(0, -1) : "0");
  };

  const handleStdClear = () => {
    setDisplayValue("0");
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const calculateStd = (a: string, b: string, op: Operator): string => {
    try {
      const decA = new Decimal(a || "0");
      const decB = new Decimal(b || "0");
      switch(op) {
        case "+": return decA.plus(decB).toString();
        case "-": return decA.minus(decB).toString();
        case "×": return decA.times(decB).toString();
        case "÷": return decB.isZero() ? "0" : decA.dividedBy(decB).toString();
        default: return b;
      }
    } catch {
      return "0";
    }
  };

  const handleStdOp = (nextOperator: Operator) => {
    const inputValue = displayValue || "0";
    
    // If the user just pressed an operator and presses another one, just swap the operator instead of equating.
    if (operator && waitingForOperand) {
      setOperator(nextOperator);
      return;
    }
    
    if (previousValue == null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const currentValue = previousValue || "0";
      const result = calculateStd(currentValue, inputValue, operator);
      
      setDisplayValue(result);
      setPreviousValue(result);
      
      setHistory(prev => [{ equation: `${formatNumber(currentValue)} ${operator} ${formatNumber(inputValue)}`, result: formatNumber(result) }, ...prev]);
    }
    
    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const handleStdEqual = () => {
    if (!operator || previousValue == null) return;
    
    const inputValue = displayValue || "0";
    const currentValue = previousValue || "0";
    const result = calculateStd(currentValue, inputValue, operator);
    
    setDisplayValue(result);
    setHistory(prev => [{ equation: `${formatNumber(currentValue)} ${operator} ${formatNumber(inputValue)}`, result: formatNumber(result) }, ...prev]);
    
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(true);
  };

  // --- WEALTH CALC STATE ---
  const [mode, setMode] = useState<"growth" | "target">("growth");
  const [activeField, setActiveField] = useState<"primary" | "initial" | "rate" | "years">("primary");
  const [interval, setInterval] = useState<"year" | "month" | "week" | "day">("year");
  const [tablePage, setTablePage] = useState(1);
  const rowsPerPage = 20;

  const [values, setValues] = useState({
    growth: { primary: "50000", initial: "100000", rate: "12", years: "5" },
    target: { primary: "5000000", initial: "100000", rate: "12", years: "5" }
  });
  const [inflationRate, setInflationRate] = useState(0); 
  const [taxRate, setTaxRate] = useState(0); 

  const currentValues = values[mode];

  const handleWealthKeyPress = (key: string) => {
    setValues(prev => {
      const modeVals = { ...prev[mode] };
      let current = modeVals[activeField];
      
      if (key === "delete") {
        modeVals[activeField] = current.length > 1 ? current.slice(0, -1) : "0";
      } else if (key === ".") {
        if (!current.includes(".")) modeVals[activeField] = current + ".";
      } else {
        if (current === "0" && key !== "0") modeVals[activeField] = key;
        else if (current.length < 12) modeVals[activeField] = current + key;
      }
      return { ...prev, [mode]: modeVals };
    });
  };

  // Real-time Wealth Calculations using Decimal.js for exact precision
  const data = useMemo(() => {
    const result = [];
    
    // Safely parse user input into Decimal
    let initialDeposit, primaryValue, interestRate, yearsVal;
    try { initialDeposit = new Decimal(currentValues.initial || 0); } catch { initialDeposit = new Decimal(0); }
    try { primaryValue = new Decimal(currentValues.primary || 0); } catch { primaryValue = new Decimal(0); }
    try { interestRate = new Decimal(currentValues.rate || 0); } catch { interestRate = new Decimal(0); }
    try { yearsVal = new Decimal(currentValues.years || 0); } catch { yearsVal = new Decimal(0); }

    const taxRateDec = new Decimal(taxRate || 0).dividedBy(100);
    const inflationRateDec = new Decimal(inflationRate || 0).dividedBy(100);

    const yearsNum = yearsVal.toNumber();
    
    let totalPeriods = 0;
    let periodName = "";
    let ratePerPeriod = new Decimal(0);
    let depositsPerPeriod = new Decimal(0);

    if (interval === "year") { 
      totalPeriods = yearsNum; 
      periodName = "Year"; 
      ratePerPeriod = interestRate.dividedBy(100); 
      depositsPerPeriod = primaryValue.times(12); 
    }
    else if (interval === "month") { 
      totalPeriods = yearsNum * 12; 
      periodName = "Month"; 
      ratePerPeriod = interestRate.dividedBy(100).dividedBy(12); 
      depositsPerPeriod = primaryValue; 
    }
    else if (interval === "week") { 
      totalPeriods = yearsNum * 52; 
      periodName = "Week"; 
      ratePerPeriod = interestRate.dividedBy(100).dividedBy(52); 
      depositsPerPeriod = primaryValue.times(12).dividedBy(52); 
    }
    else if (interval === "day") { 
      totalPeriods = yearsNum * 365; 
      periodName = "Day"; 
      ratePerPeriod = interestRate.dividedBy(100).dividedBy(365); 
      depositsPerPeriod = primaryValue.times(12).dividedBy(365); 
    }

    let effectiveR = ratePerPeriod.times(new Decimal(1).minus(taxRateDec));

    if (mode === "growth") {
      let currentBalance = initialDeposit;
      let totalDeposits = initialDeposit;
      let totalTaxPaid = new Decimal(0);
      
      for (let i = 0; i <= totalPeriods; i++) {
        if (i > 0) {
          currentBalance = currentBalance.plus(depositsPerPeriod);
          totalDeposits = totalDeposits.plus(depositsPerPeriod);
          
          let grossInterest = currentBalance.times(ratePerPeriod);
          let tax = grossInterest.times(taxRateDec);
          let netInterest = grossInterest.minus(tax);
          
          currentBalance = currentBalance.plus(netInterest);
          totalTaxPaid = totalTaxPaid.plus(tax);
        }
        
        let yearsElapsed = i / (totalPeriods / yearsNum || 1);
        let inflationDivisor = new Decimal(1).plus(inflationRateDec).pow(yearsElapsed);
        let realBalance = currentBalance.dividedBy(inflationDivisor);
        
        result.push({
          label: `${periodName} ${i}`,
          nominalBalance: currentBalance.round().toNumber(),
          realBalance: realBalance.round().toNumber(),
          deposits: totalDeposits.round().toNumber(),
          tax: totalTaxPaid.round().toNumber(),
          requiredMonthly: primaryValue.toNumber()
        });
      }
    } else {
      // TARGET MODE (PMT Formula)
      let monthlyR = interestRate.dividedBy(100).dividedBy(12);
      let nMonths = yearsNum * 12;
      let effMonthlyR = monthlyR.times(new Decimal(1).minus(taxRateDec));
      
      let pmt = new Decimal(0);
      if (effMonthlyR.isZero()) {
        pmt = primaryValue.minus(initialDeposit).dividedBy(nMonths || 1);
      } else {
        let compoundingFactor = new Decimal(1).plus(effMonthlyR).pow(nMonths);
        let numerator = primaryValue.minus(initialDeposit.times(compoundingFactor));
        let denominator = compoundingFactor.minus(1).dividedBy(effMonthlyR);
        pmt = numerator.dividedBy(denominator);
      }
      
      if (pmt.isNegative()) pmt = new Decimal(0);
      
      let pmtPerPeriod = new Decimal(0);
      if (interval === "year") pmtPerPeriod = pmt.times(12);
      else if (interval === "month") pmtPerPeriod = pmt;
      else if (interval === "week") pmtPerPeriod = pmt.times(12).dividedBy(52);
      else if (interval === "day") pmtPerPeriod = pmt.times(12).dividedBy(365);

      let currentBalance = initialDeposit;
      let totalDeposits = initialDeposit;
      
      for (let i = 0; i <= totalPeriods; i++) {
        if (i > 0) {
          currentBalance = currentBalance.plus(pmtPerPeriod);
          totalDeposits = totalDeposits.plus(pmtPerPeriod);
          currentBalance = currentBalance.plus(currentBalance.times(effectiveR));
        }
        
        let yearsElapsed = i / (totalPeriods / yearsNum || 1);
        let inflationDivisor = new Decimal(1).plus(inflationRateDec).pow(yearsElapsed);
        
        result.push({
          label: `${periodName} ${i}`,
          nominalBalance: currentBalance.round().toNumber(),
          realBalance: currentBalance.dividedBy(inflationDivisor).round().toNumber(),
          deposits: totalDeposits.round().toNumber(),
          tax: 0,
          requiredMonthly: pmt.round().toNumber()
        });
      }
    }
    
    if (result.length === 0) {
      result.push({ label: "Year 0", nominalBalance: initialDeposit.toNumber(), realBalance: initialDeposit.toNumber(), deposits: initialDeposit.toNumber(), tax: 0, requiredMonthly: 0 });
    }
    return result;
  }, [mode, currentValues, interval, inflationRate, taxRate]);

  // Downsample chart data if too large to prevent SVG crashing
  const chartData = useMemo(() => {
    if (data.length <= 100) return data;
    const step = Math.ceil(data.length / 100);
    return data.filter((_, i) => i % step === 0 || i === data.length - 1);
  }, [data]);

  const finalData = data[data.length - 1];
  const finalBalance = finalData?.nominalBalance || 0;
  const finalRealBalance = finalData?.realBalance || 0;
  const totalDeposits = finalData?.deposits || 0;
  const totalInterest = finalBalance - totalDeposits;
  const requiredMonthly = finalData?.requiredMonthly || 0;

  const pieData = [
    { name: "Total Deposits", value: totalDeposits, color: "#eab308" },
    { name: "Total Interest", value: Math.max(0, totalInterest), color: "#0d9488" }
  ];

  const wealthFields = [
    { id: "primary", label: mode === "growth" ? "Monthly Deposit" : "Target Goal", icon: mode === "growth" ? TrendingUp : Target, prefix: "₦", suffix: "" },
    { id: "initial", label: "Starting Balance", icon: Wallet, prefix: "₦", suffix: "" },
    { id: "rate", label: "Annual Interest", icon: RefreshCw, prefix: "", suffix: "%" },
    { id: "years", label: "Time Horizon", icon: Calendar, prefix: "", suffix: " Yrs" },
  ] as const;

  // Pagination Logic
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginatedData = useMemo(() => {
    const start = (tablePage - 1) * rowsPerPage;
    return data.slice(start, start + rowsPerPage);
  }, [data, tablePage]);

  // Reset page if data length changes
  useMemo(() => setTablePage(1), [data.length]);

  // Keyboard Support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") {
        return;
      }
      
      const key = e.key;
      
      if (appMode === "wealth") {
        if (/^[0-9]$/.test(key)) handleWealthKeyPress(key);
        else if (key === ".") handleWealthKeyPress(".");
        else if (key === "Backspace" || key === "Delete") handleWealthKeyPress("delete");
      } else {
        if (/^[0-9]$/.test(key)) handleStdNum(key);
        else if (key === ".") handleStdDot();
        else if (key === "Backspace" || key === "Delete") handleStdDelete();
        else if (key === "+" || key === "-") handleStdOp(key as Operator);
        else if (key === "*" || key === "x") handleStdOp("×");
        else if (key === "/") { e.preventDefault(); handleStdOp("÷"); }
        else if (key === "Enter" || key === "=") { e.preventDefault(); handleStdEqual(); }
        else if (key === "Escape") handleStdClear();
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <main className="min-h-screen bg-background pt-24 pb-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-center md:text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary mb-6">
              Pro Tools
            </div>
            <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl text-foreground">
              Financial <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Simulator</span>.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Switch between the institutional wealth simulator and the standard arithmetic calculator using the tabs on the phone. You can also use your keyboard.
            </p>
          </div>
          
          {/* User Manual Trigger */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="gap-2 rounded-full border-primary/20 shadow-sm self-center md:self-auto">
                <HelpCircle className="w-4 h-4 text-primary" />
                User Manual
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] border-border bg-card">
              <DialogHeader>
                <DialogTitle className="text-xl font-display text-primary">Simulator Guide</DialogTitle>
                <DialogDescription>
                  How to get the most out of your financial simulator.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4 text-sm text-foreground/80">
                <div>
                  <h4 className="font-bold text-foreground mb-1">Keyboard Shortcuts ⌨️</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Use your numeric keypad to enter numbers quickly.</li>
                    <li>Press <kbd className="bg-muted px-1 py-0.5 rounded text-xs font-mono border border-border">Enter</kbd> or <kbd className="bg-muted px-1 py-0.5 rounded text-xs font-mono border border-border">=</kbd> for equals in Standard mode.</li>
                    <li>Press <kbd className="bg-muted px-1 py-0.5 rounded text-xs font-mono border border-border">Backspace</kbd> or <kbd className="bg-muted px-1 py-0.5 rounded text-xs font-mono border border-border">Delete</kbd> to remove digits.</li>
                    <li>Press <kbd className="bg-muted px-1 py-0.5 rounded text-xs font-mono border border-border">Esc</kbd> to clear all inputs (AC).</li>
                  </ul>
                </div>
                
                <div className="pt-2 border-t border-border/50">
                  <h4 className="font-bold text-foreground mb-1">Wealth Mode 📈</h4>
                  <p className="text-muted-foreground mb-2">Simulate long-term wealth building with compounding interest.</p>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li><strong>Growth:</strong> Calculate future value based on fixed monthly deposits.</li>
                    <li><strong>Target Goal:</strong> Find out exactly how much you need to save monthly to hit a specific financial target.</li>
                    <li><strong>Breakdown Data:</strong> View your growth by year, month, week, or day below the chart.</li>
                  </ul>
                </div>

                <div className="pt-2 border-t border-border/50">
                  <h4 className="font-bold text-foreground mb-1">Standard Mode 🧮</h4>
                  <p className="text-muted-foreground">A fast arithmetic calculator for everyday use. Your history is recorded automatically on the right panel as a receipt tape.</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 items-start">
          
          {/* LEFT: THE INTERACTIVE PHONE (INPUT) */}
          <div className="lg:col-span-4 flex justify-center lg:sticky lg:top-24">
            <div className="relative w-full max-w-[380px] aspect-[1/2.16] rounded-[3rem] border-[8px] border-gray-950 bg-gray-950 shadow-2xl overflow-hidden shadow-primary/20">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-50 flex items-center justify-between px-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500/20" />
                <div className="w-2 h-2 rounded-full bg-blue-500/20" />
              </div>

              <div className="w-full h-full bg-[#0a0a0a] text-white flex flex-col pt-12 pb-6">
                
                {/* Master App Switcher */}
                <div className="px-5 mb-5 mt-2">
                  <div className="flex bg-white/5 p-1 rounded-xl">
                    <button onClick={() => setAppMode("wealth")} className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${appMode === "wealth" ? "bg-primary text-white shadow-glow-teal" : "text-white/40"}`}>
                      Wealth Mode
                    </button>
                    <button onClick={() => setAppMode("standard")} className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${appMode === "standard" ? "bg-white/10 text-white" : "text-white/40"}`}>
                      Standard
                    </button>
                  </div>
                </div>

                {appMode === "wealth" ? (
                  <>
                    {/* Mode Switcher */}
                    <div className="px-5 mb-4">
                      <div className="flex bg-white/5 p-1 rounded-xl">
                        <button onClick={() => setMode("target")} className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${mode === "target" ? "bg-white/10 text-white" : "text-white/40"}`}>Target Goal</button>
                        <button onClick={() => setMode("growth")} className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${mode === "growth" ? "bg-white/10 text-white" : "text-white/40"}`}>Growth</button>
                      </div>
                    </div>

                    <div className="px-5 mb-4">
                      <div className="text-white/50 text-[10px] font-medium uppercase tracking-wider mb-1">
                        {wealthFields.find(f => f.id === activeField)?.label}
                      </div>
                      <div className="font-display text-4xl font-bold tracking-tight text-primary-glow flex items-baseline truncate">
                        {wealthFields.find(f => f.id === activeField)?.prefix}
                        {formatNumber(currentValues[activeField as keyof typeof currentValues])}
                        <span className="text-xl ml-1 text-white/40">{wealthFields.find(f => f.id === activeField)?.suffix}</span>
                        <span className="w-0.5 h-8 bg-primary ml-1 animate-pulse" />
                      </div>
                    </div>

                    <div className="flex-1 px-4 space-y-2 overflow-y-auto pb-2 scrollbar-hide">
                      {wealthFields.map((f) => (
                        <button key={f.id} onClick={() => setActiveField(f.id)} className={`w-full flex items-center justify-between p-3 rounded-2xl transition-all ${activeField === f.id ? "bg-primary/10 border border-primary/20" : "bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04]"}`}>
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-xl ${activeField === f.id ? "bg-primary/20 text-primary" : "bg-white/5 text-white/40"}`}><f.icon className="w-3.5 h-3.5" /></div>
                            <span className={`text-xs font-medium ${activeField === f.id ? "text-white" : "text-white/60"}`}>{f.label}</span>
                          </div>
                          <div className={`text-xs font-semibold ${activeField === f.id ? "text-primary" : "text-white/80"}`}>
                            {f.prefix}{formatNumber(currentValues[f.id as keyof typeof currentValues])}{f.suffix}
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="px-4 mt-auto pt-2 border-t border-white/5">
                      <div className="grid grid-cols-3 gap-2">
                        {["1","2","3","4","5","6","7","8","9",".","0"].map((key) => (
                          <button key={key} onClick={() => handleWealthKeyPress(key)} className="h-12 bg-white/5 hover:bg-white/10 active:bg-white/20 rounded-2xl text-xl font-medium transition-colors flex items-center justify-center">{key}</button>
                        ))}
                        <button onClick={() => handleWealthKeyPress("delete")} className="h-12 bg-white/5 hover:bg-white/10 active:bg-white/20 rounded-2xl flex items-center justify-center transition-colors"><Delete className="w-5 h-5 text-white/70" /></button>
                      </div>
                    </div>
                  </>
                ) : (
                  // STANDARD CALCULATOR UI
                  <div className="flex-1 flex flex-col justify-end px-5 pb-2">
                    <div className="text-right mb-6">
                      <div className="text-white/40 text-sm h-6">
                        {previousValue != null && operator ? `${formatNumber(previousValue)} ${operator}` : ''}
                      </div>
                      <div className="font-display text-5xl font-bold tracking-tight text-white truncate">
                        {formatNumber(displayValue)}
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2.5">
                      <button onClick={handleStdClear} className="h-14 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-full font-medium transition-colors">AC</button>
                      <button onClick={handleStdDelete} className="h-14 bg-white/10 hover:bg-white/20 rounded-full font-medium transition-colors flex items-center justify-center"><Delete className="w-5 h-5 text-white/70" /></button>
                      <button onClick={() => handleStdOp("÷")} className={`h-14 rounded-full font-medium transition-colors flex items-center justify-center ${operator === "÷" ? "bg-white text-black" : "bg-primary/20 text-primary hover:bg-primary/30"}`}><Divide className="w-5 h-5" /></button>
                      <button onClick={() => handleStdOp("×")} className={`h-14 rounded-full font-medium transition-colors flex items-center justify-center ${operator === "×" ? "bg-white text-black" : "bg-primary/20 text-primary hover:bg-primary/30"}`}><X className="w-5 h-5" /></button>
                      
                      <button onClick={() => handleStdNum("7")} className="h-14 bg-white/10 hover:bg-white/20 rounded-full text-xl font-medium transition-colors">7</button>
                      <button onClick={() => handleStdNum("8")} className="h-14 bg-white/10 hover:bg-white/20 rounded-full text-xl font-medium transition-colors">8</button>
                      <button onClick={() => handleStdNum("9")} className="h-14 bg-white/10 hover:bg-white/20 rounded-full text-xl font-medium transition-colors">9</button>
                      <button onClick={() => handleStdOp("-")} className={`h-14 rounded-full font-medium transition-colors flex items-center justify-center ${operator === "-" ? "bg-white text-black" : "bg-primary/20 text-primary hover:bg-primary/30"}`}><Minus className="w-5 h-5" /></button>

                      <button onClick={() => handleStdNum("4")} className="h-14 bg-white/10 hover:bg-white/20 rounded-full text-xl font-medium transition-colors">4</button>
                      <button onClick={() => handleStdNum("5")} className="h-14 bg-white/10 hover:bg-white/20 rounded-full text-xl font-medium transition-colors">5</button>
                      <button onClick={() => handleStdNum("6")} className="h-14 bg-white/10 hover:bg-white/20 rounded-full text-xl font-medium transition-colors">6</button>
                      <button onClick={() => handleStdOp("+")} className={`h-14 rounded-full font-medium transition-colors flex items-center justify-center ${operator === "+" ? "bg-white text-black" : "bg-primary/20 text-primary hover:bg-primary/30"}`}><Plus className="w-5 h-5" /></button>

                      <button onClick={() => handleStdNum("1")} className="h-14 bg-white/10 hover:bg-white/20 rounded-full text-xl font-medium transition-colors">1</button>
                      <button onClick={() => handleStdNum("2")} className="h-14 bg-white/10 hover:bg-white/20 rounded-full text-xl font-medium transition-colors">2</button>
                      <button onClick={() => handleStdNum("3")} className="h-14 bg-white/10 hover:bg-white/20 rounded-full text-xl font-medium transition-colors">3</button>
                      <button onClick={handleStdEqual} className="h-[120px] row-span-2 bg-primary hover:bg-primary-glow text-white rounded-full transition-colors flex items-center justify-center shadow-glow-teal"><Equal className="w-6 h-6" /></button>

                      <button onClick={() => handleStdNum("0")} className="col-span-2 h-14 bg-white/10 hover:bg-white/20 rounded-full text-xl font-medium transition-colors text-left pl-8">0</button>
                      <button onClick={handleStdDot} className="h-14 bg-white/10 hover:bg-white/20 rounded-full text-xl font-medium transition-colors">.</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: THE DASHBOARD (OUTPUT) */}
          <div className="lg:col-span-8 space-y-6">
            
            {appMode === "wealth" ? (
              <div className="animate-in fade-in duration-300 space-y-6">
                {/* Top Stat Cards */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-card border border-border rounded-3xl p-6 shadow-soft">
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                      {mode === "growth" ? "Final Projected Wealth" : "Required Monthly Deposit"}
                    </div>
                    <div className="text-3xl font-bold font-display text-primary truncate">
                      {mode === "growth" ? formatCurrency(finalBalance) : formatCurrency(requiredMonthly)}
                    </div>
                    {inflationRate > 0 && mode === "growth" && (
                      <div className="text-sm font-medium text-destructive mt-2">
                        Real Purchasing Power: <span className="font-bold">{formatCurrency(finalRealBalance)}</span>
                      </div>
                    )}
                    {mode === "target" && (
                      <div className="text-sm font-medium text-foreground mt-2">
                        To reach: <span className="text-primary-glow">{formatCurrency(currentValues.primary)}</span>
                      </div>
                    )}
                  </div>
                  <div className="bg-card border border-border rounded-3xl p-6 shadow-soft">
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Total Deposits</div>
                    <div className="text-3xl font-bold font-display text-foreground truncate">{formatCurrency(totalDeposits)}</div>
                  </div>
                  <div className="bg-card border border-border rounded-3xl p-6 shadow-soft relative overflow-hidden">
                    <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Total Interest</div>
                    <div className="text-3xl font-bold font-display text-primary-glow truncate relative z-10">+{formatCurrency(totalInterest)}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-[2fr_1fr] gap-6">
                  {/* Area Chart */}
                  <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-semibold flex items-center gap-2"><TrendingUp className="w-4 h-4 text-primary" /> Wealth Accumulation</h3>
                    </div>
                    <div className="h-[280px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorNominal" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#0d9488" stopOpacity={0.4}/><stop offset="95%" stopColor="#0d9488" stopOpacity={0}/></linearGradient>
                            <linearGradient id="colorDeposits" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#eab308" stopOpacity={0.4}/><stop offset="95%" stopColor="#eab308" stopOpacity={0}/></linearGradient>
                            <linearGradient id="colorReal" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#ef4444" stopOpacity={0.4}/><stop offset="95%" stopColor="#ef4444" stopOpacity={0}/></linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" opacity={0.5} />
                          <XAxis dataKey="label" stroke="#9ca3af" fontSize={11} tickLine={false} axisLine={false} dy={10} minTickGap={30} />
                          <YAxis stroke="#9ca3af" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(value) => formatCompactCurrency(value)} width={60} />
                          <RechartsTooltip formatter={(value: number) => formatCurrency(value)} contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e5e7eb', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} labelStyle={{ color: '#111827', fontWeight: 600, marginBottom: '8px' }} />
                          <Area type="monotone" dataKey="nominalBalance" name="Nominal Wealth" stroke="#0d9488" strokeWidth={3} fillOpacity={1} fill="url(#colorNominal)" />
                          {inflationRate > 0 && <Area type="monotone" dataKey="realBalance" name="Real Purchasing Power" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" fillOpacity={1} fill="url(#colorReal)" />}
                          <Area type="monotone" dataKey="deposits" name="Total Deposits" stroke="#eab308" strokeWidth={3} fillOpacity={1} fill="url(#colorDeposits)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="space-y-6 flex flex-col">
                    <div className="rounded-3xl border border-border bg-card p-6 shadow-soft flex-1 flex flex-col justify-center items-center relative">
                      <h3 className="font-semibold absolute top-6 left-6 text-sm">Breakdown</h3>
                      <div className="relative h-40 w-full mt-4">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={75} stroke="none" paddingAngle={5} dataKey="value">
                              {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                            </Pie>
                            <RechartsTooltip formatter={(value: number) => formatCurrency(value)} contentStyle={{ backgroundColor: '#111827', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '12px' }} itemStyle={{ color: '#fff' }} />
                          </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                          <span className="text-xs text-muted-foreground font-semibold">Growth</span>
                          <span className="text-lg font-bold text-primary">+{((totalInterest / (totalDeposits || 1)) * 100).toFixed(0)}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-border bg-card p-6 shadow-soft space-y-6">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm"><span className="font-medium text-muted-foreground">Expected Inflation</span><span className="font-bold">{inflationRate}%</span></div>
                        <Slider value={[inflationRate]} onValueChange={(v) => setInflationRate(v[0])} max={25} step={0.5} />
                        {inflationRate > 0 && <div className="text-xs text-primary font-medium">Real Value: {formatCurrency(finalRealBalance)}</div>}
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm"><span className="font-medium text-muted-foreground">Withholding Tax (WHT)</span><span className="font-bold">{taxRate}%</span></div>
                        <Slider value={[taxRate]} onValueChange={(v) => setTaxRate(v[0])} max={40} step={1} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Granular Amortization Table */}
                <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-soft">
                  <div className="p-5 sm:p-6 border-b border-border bg-surface-soft/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <h3 className="font-semibold text-sm uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <FileText className="w-4 h-4" /> Breakdown Data
                    </h3>
                    <div className="flex items-center gap-2 bg-background border border-border rounded-lg p-1 text-sm">
                      <span className="pl-2 pr-1 text-muted-foreground font-medium text-xs">View by:</span>
                      {(["year", "month", "week", "day"] as const).map(inv => (
                        <button 
                          key={inv} onClick={() => setInterval(inv)} 
                          className={`px-3 py-1 rounded-md transition-colors capitalize ${interval === inv ? "bg-primary text-white" : "hover:bg-surface-soft"}`}
                        >{inv}</button>
                      ))}
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-surface-soft text-muted-foreground text-xs uppercase">
                        <tr>
                          <th className="px-6 py-4 font-semibold">Period</th>
                          <th className="px-6 py-4 font-semibold text-right">Deposits</th>
                          <th className="px-6 py-4 font-semibold text-right">Interest</th>
                          <th className="px-6 py-4 font-semibold text-right text-primary">Balance</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/50">
                        {paginatedData.map((row) => (
                          <tr key={row.label} className="hover:bg-surface-soft/30 transition-colors">
                            <td className="px-6 py-4 font-medium text-foreground">{row.label}</td>
                            <td className="px-6 py-4 text-right text-muted-foreground">{formatCurrency(row.deposits)}</td>
                            <td className="px-6 py-4 text-right text-muted-foreground">{formatCurrency(row.nominalBalance - row.deposits)}</td>
                            <td className="px-6 py-4 text-right font-bold text-foreground">{formatCurrency(row.nominalBalance)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  {totalPages > 1 && (
                    <div className="p-4 border-t border-border bg-surface-soft/30 flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Showing {((tablePage - 1) * rowsPerPage) + 1} to {Math.min(tablePage * rowsPerPage, data.length)} of {data.length} periods</span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => setTablePage(p => Math.max(1, p - 1))} disabled={tablePage === 1}>Prev</Button>
                        <Button variant="outline" size="sm" onClick={() => setTablePage(p => Math.min(totalPages, p + 1))} disabled={tablePage === totalPages}>Next</Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              // STANDARD CALCULATOR DASHBOARD (RECEIPT TAPE)
              <div className="animate-in fade-in duration-300 h-full">
                <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft h-[600px] flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
                  
                  <div className="flex items-center justify-between border-b border-border pb-6 mb-6">
                    <h3 className="font-semibold flex items-center gap-2 text-xl">
                      <History className="w-5 h-5 text-primary" /> Calculation History
                    </h3>
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-widest bg-surface-soft px-3 py-1 rounded-full">
                      Receipt Tape
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto space-y-4 pr-4 custom-scrollbar">
                    {history.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-muted-foreground opacity-50">
                        <History className="w-12 h-12 mb-4" />
                        <p>No calculations yet.</p>
                        <p className="text-sm">Use the standard calculator on the phone.</p>
                      </div>
                    ) : (
                      history.map((h, i) => (
                        <div key={i} className="bg-surface-soft/50 rounded-2xl p-4 border border-border/50 flex justify-between items-center animate-in slide-in-from-bottom-2">
                          <span className="text-muted-foreground font-mono">{h.equation} =</span>
                          <span className="text-xl font-bold font-mono text-foreground">{h.result}</span>
                        </div>
                      ))
                    )}
                  </div>
                  
                  {history.length > 0 && (
                    <div className="pt-4 mt-auto border-t border-border">
                      <Button variant="outline" onClick={() => setHistory([])} className="w-full text-muted-foreground">
                        Clear History
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </main>
  );
}
