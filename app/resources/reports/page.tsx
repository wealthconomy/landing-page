"use client";

import { useState, useEffect } from "react";
import { FileText, Download, Search, BookOpen, Video, Eye, Loader2, X, ExternalLink, Play } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LibraryMaterialItem } from "@/lib/library-service";

const filterTypes = [
  { id: "all", label: "All Materials" },
  { id: "document", label: "Documents" },
  { id: "video", label: "Videos" },
];

export default function ReportsPage() {
  const [materials, setMaterials] = useState<LibraryMaterialItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeType, setActiveType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState<LibraryMaterialItem | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetch(`/api/library?type=${encodeURIComponent(activeType)}&q=${encodeURIComponent(searchQuery)}`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          if (data.success && data.items) {
            setMaterials(data.items);
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Error fetching library materials:", err);
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [activeType, searchQuery]);

  const handleDownload = async (item: LibraryMaterialItem) => {
    try {
      await fetch(`/api/library/${item.id}/download`, { method: "POST" });
    } catch (e) {
      console.error("Error recording download:", e);
    }

    if (item.contentType === "video" && item.youtubeUrl) {
      window.open(item.youtubeUrl, "_blank");
      return;
    }

    if (item.documentUrl && item.documentUrl !== "#") {
      setDownloadingId(item.id);

      // Clean filename calculation
      let extension = item.fileType?.toLowerCase() || "pdf";
      if (extension.includes("pdf")) extension = "pdf";
      else if (extension.includes("doc")) extension = "docx";
      else if (extension.includes("mp4")) extension = "mp4";
      
      const sanitizedTitle = (item.title || "wealthconomy_material")
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/\s+/g, "_");
      
      const filename = `${sanitizedTitle}.${extension}`;

      try {
        // 1. Attempt client blob download with proper filename
        const response = await fetch(item.documentUrl);
        if (response.ok) {
          const blob = await response.blob();
          const blobUrl = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = blobUrl;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(blobUrl);
          document.body.removeChild(a);
          setDownloadingId(null);
          return;
        }
      } catch (err) {
        console.warn("Direct blob download restricted (CORS), applying Cloudinary attachment URL fallback:", err);
      }

      // 2. Cloudinary attachment transformation fallback
      let finalUrl = item.documentUrl;
      if (finalUrl.includes("cloudinary.com") && finalUrl.includes("/upload/")) {
        finalUrl = finalUrl.replace("/upload/", `/upload/fl_attachment:${encodeURIComponent(sanitizedTitle)}/`);
      }

      const a = document.createElement("a");
      a.href = finalUrl;
      a.download = filename;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setDownloadingId(null);
    } else {
      setSelectedMaterial(item);
    }
  };

  return (
    <main className="min-h-screen bg-background font-display">
      {/* Hero Section */}
      <section className="bg-surface-soft/40 pt-20 sm:pt-28 pb-14 sm:pb-20 border-b border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] sm:text-xs font-medium uppercase tracking-widest text-primary mb-6">
              <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Research & Resource Library
            </div>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground">
              Market Intelligence & <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Reports</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-muted-foreground leading-relaxed">
              Empower your financial decisions with our deeply researched reports, educational videos, and market analyses focused on wealth creation in emerging economies.
            </p>

            <div className="mt-6 sm:mt-8 flex items-center gap-3 w-full max-w-md bg-background border border-border rounded-full p-1.5 sm:p-2 shadow-soft focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all">
              <Search className="h-4 w-4 text-muted-foreground ml-2.5 shrink-0" />
              <input 
                type="text" 
                placeholder="Search reports and materials..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none flex-1 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground min-w-0"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-muted-foreground hover:text-foreground mr-1 p-1">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-12 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Category Filter Tabs */}
          <div className="flex overflow-x-auto gap-2 mb-10 sm:mb-12 border-b border-border pb-4 -mx-4 px-4 sm:mx-0 sm:px-0" style={{ scrollbarWidth: "none" }}>
            {filterTypes.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveType(tab.id)}
                className={`rounded-full px-4 sm:px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shrink-0 ${
                  activeType === tab.id
                    ? "bg-primary text-primary-foreground shadow-glow-teal"
                    : "bg-surface-soft/60 border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Loading Indicator */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary mb-3" />
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">Loading research materials...</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && materials.length === 0 && (
            <div className="text-center py-20 border border-dashed border-border rounded-2xl sm:rounded-3xl p-6">
              <p className="text-sm text-muted-foreground">No resources available for this category.</p>
              <Button variant="outline" className="mt-4 rounded-full text-xs" onClick={() => { setActiveType("all"); setSearchQuery(""); }}>
                Reset Filters
              </Button>
            </div>
          )}

          {/* Grid */}
          {!loading && materials.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {materials.map((report) => (
                <div key={report.id} className="group flex flex-col rounded-2xl sm:rounded-3xl border border-border bg-card overflow-hidden hover:shadow-glow-teal hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-[16/10] sm:aspect-[16/9] overflow-hidden relative bg-surface-soft">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                    {report.image ? (
                      <Image 
                        src={report.image} 
                        alt={report.title} 
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                        {report.contentType === "video" ? (
                          <Video className="w-12 h-12 text-primary" />
                        ) : (
                          <FileText className="w-12 h-12 text-primary" />
                        )}
                      </div>
                    )}
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-20 flex items-center justify-between">
                      <span className="bg-primary/90 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                        {report.category || report.contentType}
                      </span>
                      <span className="bg-black/60 backdrop-blur-sm text-white/90 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                        {report.readingDuration || report.fileType || (report.contentType === "video" ? "Video" : "PDF")}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {report.title}
                    </h3>
                    <p className="mt-2.5 sm:mt-3 text-muted-foreground text-xs sm:text-sm flex-1 leading-relaxed line-clamp-3">
                      {report.description}
                    </p>
                    
                    <div className="mt-5 sm:mt-6 pt-4 sm:pt-6 border-t border-border flex items-center gap-2.5 sm:gap-3">
                      <Button 
                        variant="outline" 
                        className="flex-1 justify-between rounded-xl group/btn hover:border-primary hover:bg-primary/5 text-xs font-semibold h-10"
                        onClick={() => setSelectedMaterial(report)}
                      >
                        <span className="flex items-center gap-1.5">
                          <Eye className="h-3.5 w-3.5 text-primary" /> View Details
                        </span>
                      </Button>

                      <Button
                        className="rounded-xl bg-primary hover:bg-primary-glow text-white px-3.5 sm:px-4 text-xs font-semibold gap-1.5 h-10"
                        disabled={downloadingId === report.id}
                        onClick={() => handleDownload(report)}
                      >
                        {downloadingId === report.id ? (
                          <>
                            <Loader2 className="h-3.5 w-3.5 animate-spin" /> Downloading...
                          </>
                        ) : report.contentType === "video" ? (
                          <>
                            <Play className="h-3.5 w-3.5 fill-white" /> Watch
                          </>
                        ) : (
                          <>
                            <Download className="h-3.5 w-3.5" /> Download
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Summary / Details Modal */}
      {selectedMaterial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-card border border-border rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden">
            <button
              onClick={() => setSelectedMaterial(null)}
              className="absolute top-5 sm:top-6 right-5 sm:right-6 p-2 rounded-full border border-border hover:bg-surface-soft text-muted-foreground hover:text-foreground transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-widest text-[10px] font-bold">
                {selectedMaterial.category || selectedMaterial.contentType}
              </span>
              <span className="text-xs text-muted-foreground font-medium">
                {selectedMaterial.readingDuration || selectedMaterial.fileSize}
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 leading-snug">
              {selectedMaterial.title}
            </h3>

            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-h-[250px] sm:max-h-[300px] overflow-y-auto pr-2">
              {selectedMaterial.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 sm:pt-6 border-t border-border">
              <div className="text-xs text-muted-foreground">
                {selectedMaterial.downloadsCount !== undefined && selectedMaterial.downloadsCount > 0 && (
                  <span>{selectedMaterial.downloadsCount.toLocaleString()} community downloads</span>
                )}
              </div>
              <div className="flex gap-2.5 sm:gap-3 w-full sm:w-auto">
                <Button variant="outline" onClick={() => setSelectedMaterial(null)} className="rounded-xl flex-1 sm:flex-none text-xs">
                  Close
                </Button>
                <Button 
                  className="rounded-xl bg-primary hover:bg-primary-glow text-white font-bold gap-2 flex-1 sm:flex-none text-xs"
                  onClick={() => {
                    handleDownload(selectedMaterial);
                    setSelectedMaterial(null);
                  }}
                >
                  {selectedMaterial.contentType === "video" ? (
                    <>Watch Video <ExternalLink className="w-3.5 h-3.5" /></>
                  ) : (
                    <>Download File <Download className="w-3.5 h-3.5" /></>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
