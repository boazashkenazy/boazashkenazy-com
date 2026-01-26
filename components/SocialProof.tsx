import React from 'react';

const logos = [
  "Meta",
  "UW",
  "Seattle Chamber",
  "Idaho Bankers",
  "GeekWire",
  "ConveyUX",
  "SMX Munich",
  "TechArena"
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-12 border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-x-8 opacity-60 grayscale mb-10 overflow-x-auto">
            {logos.map((logo, idx) => (
                <span key={idx} className="text-lg md:text-xl font-serif font-bold text-slate-400">
                    {logo}
                </span>
            ))}
        </div>
        
        <div className="max-w-3xl mx-auto space-y-2 mt-16">
            <p className="text-sm font-semibold tracking-wide uppercase text-slate-500">
                Senior Director AI Infra @ Redapt | Co-founder Augmented AI Labs, Clause, SuperSmall | Former Meta PM
            </p>
            <p className="text-slate-500 text-sm">
                Keynote speaker at events including WTIA Seattle AI Week Summit, ConveyUX, SMX Munich, and more.
            </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
