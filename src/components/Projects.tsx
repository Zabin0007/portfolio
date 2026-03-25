import { ExternalLink, Code2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Experience",
      description: "A high-performance headless commerce platform with 3D product visualization.",
      tech: ["Next.js", "Three.js", "Shopify"],
    },
    {
      title: "Fintech Dashboard",
      description: "Real-time analytics dashboard with complex data visualization and websockets.",
      tech: ["React", "D3.js", "Node.js"],
    },
    {
      title: "AI Creative Suite",
      description: "Generative AI interface for real-time image manipulation and prompting.",
      tech: ["TypeScript", "WebGL", "Python"],
    },
    {
      title: "Web3 NFT Platform",
      description: "Decentralized marketplace with smart contract integration and wallet connect.",
      tech: ["Solidity", "Ethers.js", "Next.js"],
    }
  ];

  return (
    <section id="work" className="relative min-h-screen bg-[#121212] py-32 px-6 md:px-24 border-t border-white/10 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tight">
          Selected Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-10 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-gray-400">
                  <a href="#" className="hover:text-white transition-colors" aria-label="Github Repo"><Code2 className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-white transition-colors" aria-label="Live Demo"><ExternalLink className="w-5 h-5" /></a>
                </div>
              </div>

              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/5 text-gray-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
