import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Oluwafemi Adebayo",
    role: "Co-Founder & CEO",
    bio: "Ex-fintech product leader. Obsessed with building systems that automate financial discipline for the next generation.",
    image: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    name: "Sarah Chen",
    role: "Co-Founder & CTO",
    bio: "Former blockchain architect. Designing the unbreakable trust protocols that power our communal savings engine.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    name: "Marcus Johnson",
    role: "Head of Wealth Operations",
    bio: "10+ years in asset management. Ensuring every portfolio rhythm delivers maximum yield with minimum risk.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
  }
];

export function AboutTeam() {
  return (
    <section className="bg-surface-soft/40 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
            Meet the architects of <br />
            <span className="bg-gradient-to-r from-gold to-amber-500 bg-clip-text text-transparent">
              the new economy.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We are a team of engineers, economists, and designers united by a single goal: 
            making wealth generation a structured, inevitable outcome.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="group relative overflow-hidden rounded-3xl border border-border bg-background p-6 transition-all duration-500 hover:shadow-soft">
              <div className="aspect-square w-full overflow-hidden rounded-2xl bg-muted relative">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <h3 className="font-display text-2xl font-bold text-foreground">{member.name}</h3>
                <p className="text-sm font-bold uppercase tracking-widest text-primary mt-1">{member.role}</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
