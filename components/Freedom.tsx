import React from 'react';
import { ArrowDown } from 'lucide-react';

const Freedom: React.FC = () => {
  return (
    <section className="py-10 md:py-16 bg-white text-center">
      <div className="max-w-4xl mx-auto px-6 space-y-12 md:space-y-16">
        <h2 className="text-4xl md:text-6xl font-serif text-slate-900">
            Scale without headcount.
        </h2>
        
        <h2 className="text-4xl md:text-6xl font-serif text-slate-900">
            Put deep work first.
        </h2>
        
        <h2 className="text-4xl md:text-6xl font-serif text-slate-900">
            Experiment endlessly.
        </h2>

        <h2 className="text-4xl md:text-6xl font-serif text-slate-900">
            Build a network that lasts.
        </h2>

        <div className="pt-12 flex justify-center text-slate-300">
            <ArrowDown className="w-12 h-12 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Freedom;
