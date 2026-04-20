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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black md:h-[1000px] py-20 px-8 relative selection:bg-red-900/30">
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
          <span className={`${spaceMono.className} text-[9px] md:text-[11px] tracking-[0.3em] text-[#991b1b] mb-6`}>
            -- THE PROFILE --
          </span>
          <div className={`${playfair.className}  sm:text-8xl md:text-[8rem] font-black text-[#e4decb] tracking-wider drop-shadow-2xl leading-[0.8] `}>
            PROFILE
          </div>
        </div>

        {/* 2-Column Content Area */}
        <div className="w-full flex flex-col md:flex-row gap-16 md:gap-24 lg:gap-32">

          {/* Left Column */}
          <div className="flex-1 flex flex-col">
            <div className={`flex items-center text-[#c2ad79] mb-5 ${spaceMono.className} text-[9px] md:text-[10px] tracking-[0.25em]`}>
              <div className="h-[1px] bg-[#c2ad79]/30 w-full"></div>
              <span className="whitespace-nowrap pl-4 pr-4">SOFTWARE DEVELOPER</span>
              <div className="h-[1px] bg-[#c2ad79]/30 w-full"></div>
            </div>


            <div className={`${spaceMono.className} text-[9px] md:text-[10px] tracking-[0.25em] text-[#991b1b] mb-4`}>
              + MANIFESTO
            </div>

            <p className={`${playfair.className} text-md md:text-2xl text-[#c9c4bb] leading-snug italic font-medium drop-shadow-md`}>
              "I don't break things.<br />
              I make them <span className="text-[#c2ad79]">disappear</span> —<br />
              clean, quiet, in production."
            </p>
          </div>
          <div className="hidden md:block w-[1px] bg-[#c2ad79]/30"></div>
          {/* Right Column */}
          <div className="flex-[1.2] flex flex-col  mt-8 md:mt-8">

            <div className={`flex items-center text-[#8a8881] mb-8 ${spaceMono.className} text-[9px] md:text-[10px] tracking-[0.25em]`}>
              <span className="whitespace-nowrap">—— SUMMARY OF OPERATIONS ——</span>
            </div>

            <p className={`${playfair.className} text-sm md:text-base lg:text-[17px] text-[#948e83]  mb-16 drop-shadow-md`}>
              A software developer who walks into the woods of legacy code alone. Tailored stack, sharp instincts, no witnesses left behind. Specializes in clean architecture, ruthless refactors, and shipping features that hit the deadline before the deadline hits back. Every line written is a deliberate choice — the kind made by someone who's been at the table long enough to know when to speak in code, and when to let the silence ship.
            </p>

            {/* Stats Row */}
            <div className="flex flex-row gap-12 md:gap-24 mb-10 border-b border-[#ffffff10] pb-10">
              <div className="flex flex-col">
                <div className={`${playfair.className} text-4xl md:text-5xl text-[#e4decb] font-bold tracking-tight`}>01</div>
                <div className={`${spaceMono.className} text-[8px] md:text-[9px] tracking-[0.3em] font-bold text-[#6b675e] mt-4`}>YEARS</div>
              </div>
              <div className="flex flex-col">
                <div className={`${playfair.className} text-4xl md:text-5xl text-[#e4decb] font-bold tracking-tight`}>12</div>
                <div className={`${spaceMono.className} text-[8px] md:text-[9px] tracking-[0.3em] font-bold text-[#6b675e] mt-4`}>STACKS</div>
              </div>
              <div className="flex flex-col items-center">
                <div className={`${playfair.className} text-4xl md:text-5xl text-[#e4decb] font-light leading-none -mt-1`}>∞</div>
                <div className={`${spaceMono.className} text-[8px] md:text-[9px] tracking-[0.3em] font-bold text-[#6b675e] mt-4`}>BUGS BURIED</div>
              </div>
            </div>

            {/* Tech Badges */}
            <div className={`flex flex-wrap gap-2 md:gap-3 ${spaceMono.className} text-[8px] md:text-[9px] tracking-[0.2em]`}>
              {['TYPESCRIPT', 'REACT', 'NODE', 'POSTGRES', 'SYSTEMS'].map((tech) => (
                <div
                  key={tech}
                  className="border border-[#4a4741] px-5 py-2 text-[#7d7970] transition-colors hover:text-[#c2ad79] hover:border-[#c2ad79]/50"
                >
                  {tech}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
