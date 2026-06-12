"use client";

import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    title: "Women in Business Grant Summit",
    date: "October 15, 2026",
    location: "The Growth Hub, Akure",
    image: "/images/impact-event.png",
    status: "Upcoming",
  },
  {
    title: "Financial Literacy for Youth",
    date: "November 02, 2026",
    location: "Virtual Event",
    image: "/images/impact-teaching.png",
    status: "Upcoming",
  },
  {
    title: "Community Green Cleanup",
    date: "December 10, 2026",
    location: "Abuja City Center",
    image: "/images/impact-environment.png",
    status: "Upcoming",
  }
];

export function ImpactEvents() {
  return (
    <section className="py-24 px-6 bg-surface-soft relative">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold md:text-5xl mb-6">Upcoming Events</h2>
            <p className="text-muted-foreground text-lg">
              Join us at our next community gathering. We regularly host training sessions, grant awards, and community building events to empower our members and our world.
            </p>
          </div>
          <button className="whitespace-nowrap rounded-full border border-primary text-primary px-6 py-3 font-semibold hover:bg-primary hover:text-white transition-colors">
            View All Events
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl bg-background border border-border transition-all hover:shadow-xl">
              <div className="relative h-[250px] w-full overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 rounded-full bg-background/80 backdrop-blur-md px-4 py-1.5 text-sm font-semibold border border-white/10">
                  {event.status}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{event.title}</h3>
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 shrink-0" />
                    <span className="truncate">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
