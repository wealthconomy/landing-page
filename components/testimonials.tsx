import { Quote } from "lucide-react";

const quotes = [
  { name: "Adaeze O.", role: "Senior Developer", quote: "Wealthconomy didn't just give me an app; it gave me a mentor. I've reached my business goals faster than I ever thought possible.", initial: "A" },
  { name: "Tunde A.", role: "SME Owner", quote: "The WealthGroup feature replaced three messy WhatsApp groups. My contributors trust the process — and so do I.", initial: "T" },
  { name: "Chiamaka U.", role: "Product Designer", quote: "WiseUp turned saving from a chore into a craft. I finally understand my money.", initial: "C" },
  { name: "Femi B.", role: "Investment Analyst", quote: "Discipline used to be a buzzword. With Wealthconomy it's a system that runs while I sleep.", initial: "F" },
  { name: "Ifeoma K.", role: "Founder", quote: "It feels less like a fintech and more like a private wealth coach in my pocket.", initial: "I" },
  { name: "Daniel M.", role: "Consultant", quote: "Clean, structured, intentional. Finally a money app built for serious people.", initial: "D" },
  { name: "Zara P.", role: "Doctor", quote: "I love the culture-first approach. My WealthGroup hit its target in 4 months.", initial: "Z" },
  { name: "Kunle S.", role: "Engineer", quote: "Compounding finally made sense after a 4-minute WiseUp lesson. Game changer.", initial: "K" },
];

function Card({ q }: { q: (typeof quotes)[number] }) {
  return (
    <figure className="mx-3 flex w-[340px] flex-shrink-0 flex-col rounded-3xl border border-border bg-card p-7 shadow-soft">
      <Quote className="h-8 w-8 fill-foreground text-foreground" />
      <blockquote className="mt-5 flex-1">
        <p className="text-sm leading-relaxed text-muted-foreground">{q.quote}</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-display text-lg font-semibold text-primary-foreground">
          {q.initial}
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">{q.name}</div>
          <div className="text-xs text-muted-foreground">{q.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const row1 = [...quotes, ...quotes];
  const row2 = [...quotes.slice().reverse(), ...quotes.slice().reverse()];

  return (
    <section className="overflow-hidden bg-surface-soft py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-widest text-primary">Wealth Builders</div>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            Built by professionals.
            <br />
            For professionals.
          </h2>
          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            We care deeply about our customers' experience, and we work hard to make every interaction feel smooth, supportive, and worthwhile.
          </p>
        </div>
      </div>

      <div className="relative mt-16 space-y-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-surface-soft to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-surface-soft to-transparent" />

        <div className="flex w-max animate-marquee-left">
          {row1.map((q, i) => <Card key={`a-${i}`} q={q} />)}
        </div>
        <div className="flex w-max animate-marquee-right">
          {row2.map((q, i) => <Card key={`b-${i}`} q={q} />)}
        </div>
      </div>
    </section>
  );
}
