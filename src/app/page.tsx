import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <main className="
      min-h-screen
      bg-[#FFF8F2]
      px-6
    ">

      <div className="
        max-w-7xl
        mx-auto
      ">

        <Navbar />

        <Hero />

      </div>

    </main>
  );
}