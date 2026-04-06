import Navbar from "@/components/Navbar";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <Navbar />
      <div className="flex items-center justify-center min-h-[80vh]">
        <h1 className="text-5xl font-light tracking-tighter text-white/80">Gallery <span className="text-highlight">Coming Soon</span></h1>
      </div>
    </main>
  );
}
