import React from 'react';
import { ArrowRight } from 'lucide-react';

const ideas = [
  {
    id: '#204',
    title: "The Confidence Gap: You Don't Need More Skills, You Need One Conversation.",
    publisher: "SuperSmall",
    link: "https://supersmall.substack.com/p/the-confidence-gap?r=6emqfn"
  },
  {
    id: '#203',
    title: "Vibe Coding Overload: Why Building Got Easy and Winning Got Harder.",
    publisher: "SuperSmall",
    link: "https://supersmall.substack.com/p/vibe-coding-overload-why-building?r=6emqfn"
  },
  {
    id: '#202',
    title: "The AI Co-Founder: How to Launch a Business with AI as Your Partner.",
    publisher: "SuperSmall",
    link: "https://supersmall.substack.com/p/the-ai-co-founder?r=6emqfn"
  }
];

const RecentIdeas: React.FC = () => {
  return (
    <section id="articles" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center mb-4">
             <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Recent Ideas</span>
        </div>
        <h2 className="font-serif text-4xl text-center text-slate-900 mb-16">The Augmented Edge</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {ideas.map((idea) => (
            <a key={idea.id} href={idea.link} target="_blank" rel="noopener noreferrer" className="group cursor-pointer bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[280px] no-underline">
              <div>
                <div className="flex justify-between items-center mb-6">
                   <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                       <img src="./headshot-boaz.jpg" className="w-full h-full object-cover" alt="Boaz" />
                   </div>
                   <span className="text-xs font-mono text-slate-400">{idea.publisher}</span>
                </div>
                
                
                <h3 className="font-medium text-slate-800 text-lg leading-snug">
                    {idea.title}
                </h3>
              </div>
              
              <div className="mt-8 flex items-center text-brand-blue font-medium text-sm group-hover:underline">
                Read Issue <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
            <a href="https://substack.com/@boazashkenazy" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-full border border-slate-300 text-slate-600 hover:border-slate-800 hover:text-slate-900 transition-colors">
                Read More Essays
            </a>
        </div>
      </div>
    </section>
  );
};

export default RecentIdeas;
