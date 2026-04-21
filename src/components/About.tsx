import Image from "next/image";
import { Playfair_Display, Space_Mono } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"]
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"]
});

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black md:h-[1000px] py-20 px-8 selection:bg-red-900/30">
      {/* Background Image - untouched */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <Image
          src="/images/pro.webp"
          alt="The Aftermath"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col w-full max-w-[1300px] mt-10 md:mt-15 px-4 md:px-16">
        {/* Title Section */}
        <div className="w-full flex flex-col items-start mb-16 md:mb-24">
          <span className="font-serif text-[9px] md:text-[11px] tracking-[0.3em] text-[#b31b1b] mb-6">
            -- THE PROFILE --
          </span>
          <div className={`${playfair.className} sm:text-3xl  md:text-[6rem] font-black text-[#e4decb] tracking-wider drop-shadow-2xl leading-[0.8] `}>
            PROFILE
          </div>
        </div>

        {/* 2-Column Content Area */}
        <div className="w-full flex flex-col md:flex-row gap-16 md:gap-24 lg:gap-32">

          {/* Left Column */}
          <div className="flex-1 flex flex-col items-start">
            <div className="w-full">
              <div className={`flex items-center text-[#c2ad79] mb-5 ${spaceMono.className} text-[9px] md:text-[10px] tracking-[0.25em] w-full`}>
                <div className="h-[2px] bg-[#c2ad79]/50 flex-grow"></div>
                <span className="whitespace-nowrap px-4 font-bold">SOFTWARE DEVELOPER</span>
                <div className="h-[2px] bg-[#c2ad79]/50 flex-grow"></div>
              </div>
              <div className={`${spaceMono.className} text-[9px] md:text-[10px] tracking-[0.25em] text-[#da0b0b] mb-4`}>
                --MANIFESTO
              </div>
              <p className={`${playfair.className} text-md md:text-2xl text-[#c9c4bb] leading-snug italic font-medium drop-shadow-md`}>
                &quot;I don&apos;t break things.<br />
                I make them <span className="text-[#c2ad79]">disappear</span> —<br />
                clean, quiet, in production.&quot;
              </p>
            </div>
            <div className="hidden md:block w-full flex justify-center md:mt-44">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 md:gap-5 p-3 md:p-4 transition-all duration-500 hover:scale-[1.02] w-fit"
              >
                <div className="absolute inset-0 bg-[#c2ad79] opacity-70 pointer-events-none"
                  style={{
                    clipPath: "polygon(0% 2%, 3% 0%, 7% 3%, 11% 0%, 16% 2%, 22% 0%, 28% 3%, 35% 0%, 42% 2%, 50% 0%, 58% 3%, 65% 0%, 72% 2%, 80% 0%, 88% 3%, 95% 0%, 100% 2%, 98% 15%, 100% 30%, 98% 45%, 100% 60%, 98% 75%, 100% 90%, 98% 100%, 90% 98%, 80% 100%, 70% 98%, 60% 100%, 50% 98%, 40% 100%, 30% 98%, 20% 100%, 10% 98%, 0% 100%, 2% 85%, 0% 70%, 2% 55%, 0% 40%, 2% 25%, 0% 10%)",
                  }}>
                </div>

                <div className="absolute inset-[1.5px] bg-[#0d0d0d] shadow-2xl pointer-events-none"
                  style={{
                    clipPath: "polygon(0% 2%, 3% 0%, 7% 3%, 11% 0%, 16% 2%, 22% 0%, 28% 3%, 35% 0%, 42% 2%, 50% 0%, 58% 3%, 65% 0%, 72% 2%, 80% 0%, 88% 3%, 95% 0%, 100% 2%, 98% 15%, 100% 30%, 98% 45%, 100% 60%, 98% 75%, 100% 90%, 98% 100%, 90% 98%, 80% 100%, 70% 98%, 60% 100%, 50% 98%, 40% 100%, 30% 98%, 20% 100%, 10% 98%, 0% 100%, 2% 85%, 0% 70%, 2% 55%, 0% 40%, 2% 25%, 0% 10%)",
                    backgroundColor: `#0d0d0d`,
                    backgroundImage: `
    radial-gradient(circle at top left, #111111 0%, #0d0d0d 100%),
    linear-gradient(135deg, rgba(255,255,255,0.05) 25%, transparent 25%),
    linear-gradient(225deg, rgba(255,255,255,0.05) 25%, transparent 25%);
  background-size: 200px 200px;
  background-blend-mode: overlay;`
                  }}>
                </div>


                <div className="relative z-10 flex flex-col">
                  <span className="text-sm md:text-xl italic text-[#e4decb] group-hover:text-white transition-colors duration-300">
                    Access Professional <span className="text-[#b31b1b]">Dossier</span>
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="hidden md:block w-[1px] bg-[#c2ad79]/30"></div>
          {/* Right Column */}
          <div className="flex-1 flex flex-col mt-8 md:mt-8">

            <div className={`flex items-center text-[#8a8881] mb-8 ${spaceMono.className} text-[9px] md:text-[10px] tracking-[0.25em]`}>
              <span className="whitespace-nowrap">—— SUMMARY OF OPERATIONS ——</span>
            </div>

            <p className={`${playfair.className} text-sm md:text-base lg:text-[17px] text-[#948e83]  mb-16 drop-shadow-md`}>
              A software developer who walks into the woods of legacy code alone. Tailored stack, sharp instincts, no witnesses left behind. Specializes in clean architecture, ruthless refactors, and shipping features that hit the deadline before the deadline hits back. Every line written is a deliberate choice — the kind made by someone who&apos;s been at the table long enough to know when to speak in code, and when to let the silence ship.
            </p>

            {/* Stats Row */}
            <div className="flex flex-row gap-12 md:gap-24 mb-10 border-b border-[#ffffff10] pb-10">
              <div className="flex flex-col items-center">
                <div className={`${playfair.className} text-4xl md:text-5xl text-[#e4decb] font-bold tracking-tight`}>1</div>
                <div className={`${spaceMono.className} text-[8px] md:text-[9px] tracking-[0.3em] font-bold text-[#6b675e] mt-4`}>YEARS</div>
              </div>
              <div className="flex flex-col">
                <div className={`${playfair.className} text-4xl md:text-5xl text-[#e4decb] font-bold tracking-tight`}>12</div>
                <div className={`${spaceMono.className} text-[8px] md:text-[9px] tracking-[0.3em] font-bold text-[#6b675e] mt-4`}>STACKS</div>
              </div>
              <div className="flex flex-col items-center">
                <div className={`${playfair.className} text-4xl md:text-5xl text-[#e4decb] font-light leading-none`}>∞</div>
                <div className={`${spaceMono.className} text-[8px] md:text-[9px] tracking-[0.3em] font-bold text-[#6b675e] mt-4`}>BUGS BURIED</div>
              </div>
            </div>



          </div>
        </div>

        <div className="md:hidden w-full flex justify-center mt-16 md:mt-24">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 md:gap-5 p-3 md:p-4 transition-all duration-500 hover:scale-[1.02] w-fit"
          >
            <div className="absolute inset-0 bg-[#c2ad79] opacity-70 pointer-events-none"
              style={{
                clipPath: "polygon(0% 2%, 3% 0%, 7% 3%, 11% 0%, 16% 2%, 22% 0%, 28% 3%, 35% 0%, 42% 2%, 50% 0%, 58% 3%, 65% 0%, 72% 2%, 80% 0%, 88% 3%, 95% 0%, 100% 2%, 98% 15%, 100% 30%, 98% 45%, 100% 60%, 98% 75%, 100% 90%, 98% 100%, 90% 98%, 80% 100%, 70% 98%, 60% 100%, 50% 98%, 40% 100%, 30% 98%, 20% 100%, 10% 98%, 0% 100%, 2% 85%, 0% 70%, 2% 55%, 0% 40%, 2% 25%, 0% 10%)",
              }}>
            </div>

            <div className="absolute inset-[1.5px] bg-[#0d0d0d] shadow-2xl pointer-events-none"
              style={{
                clipPath: "polygon(0% 2%, 3% 0%, 7% 3%, 11% 0%, 16% 2%, 22% 0%, 28% 3%, 35% 0%, 42% 2%, 50% 0%, 58% 3%, 65% 0%, 72% 2%, 80% 0%, 88% 3%, 95% 0%, 100% 2%, 98% 15%, 100% 30%, 98% 45%, 100% 60%, 98% 75%, 100% 90%, 98% 100%, 90% 98%, 80% 100%, 70% 98%, 60% 100%, 50% 98%, 40% 100%, 30% 98%, 20% 100%, 10% 98%, 0% 100%, 2% 85%, 0% 70%, 2% 55%, 0% 40%, 2% 25%, 0% 10%)",
                backgroundColor: `#0d0d0d`,
                backgroundImage: `
    radial-gradient(circle at top left, #111111 0%, #0d0d0d 100%),
    linear-gradient(135deg, rgba(255,255,255,0.05) 25%, transparent 25%),
    linear-gradient(225deg, rgba(255,255,255,0.05) 25%, transparent 25%);
  background-size: 200px 200px;
  background-blend-mode: overlay;`
              }}>
            </div>


            <div className="relative z-10 flex flex-col">
              <span className="text-sm md:text-xl italic text-[#e4decb] group-hover:text-white transition-colors duration-300">
                Access Professional <span className="text-[#b31b1b]">Dossier</span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
