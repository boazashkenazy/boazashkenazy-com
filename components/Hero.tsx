import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { handleNewsletterSubmission } from '../utils/newsletter';

const Hero: React.FC = () => {
  const [heroEmail, setHeroEmail] = useState('');
  const [heroLoading, setHeroLoading] = useState(false);
  const [heroMessage, setHeroMessage] = useState('');
  const [heroMessageType, setHeroMessageType] = useState<'success' | 'error' | ''>('');

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await handleNewsletterSubmission(
      heroEmail,
      (message) => {
        setHeroMessage(message);
        setHeroMessageType('success');
        setHeroEmail(''); // Clear the form
        setTimeout(() => setHeroMessage(''), 5000); // Clear message after 5 seconds
      },
      (message) => {
        setHeroMessage(message);
        setHeroMessageType('error');
        setTimeout(() => setHeroMessage(''), 5000); // Clear message after 5 seconds
      },
      setHeroLoading
    );
  };

  return (
    <section className="pt-12 pb-20 md:pt-24 md:pb-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl font-medium text-slate-900 leading-[1.1] mb-16 md:mb-24">
            Turn your team into <br className="hidden md:block" />
            <span className="text-brand-blue">AI-native operators</span>.
          </h1>
          
          <div className="md:flex md:space-x-12 lg:space-x-24">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-serif text-slate-800 mb-4">
                Exec teams want the speed and creativity of a startup without the chaos.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                I help mid- and large-company leaders bring practical AI into their organization so their teams can ship faster, stay lean, and operate like founders.
              </p>
              
              <div className="flex items-center space-x-2 text-sm text-slate-500 font-medium mb-12">
                <span className="flex -space-x-2">
                   {/* Mock avatars */}
                   {[1,2,3].map(i => (
                     <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
                        <img src={`https://picsum.photos/seed/${i + 50}/50/50`} alt="avatar" className="w-full h-full object-cover" />
                     </div>
                   ))}
                </span>
                <span>20,000+ people follow my work on AI.</span>
              </div>
            </div>

            <div className="md:w-1/2 space-y-10">
              {/* Primary CTA */}
              <div>
                <h3 className="text-xl font-serif text-slate-900 mb-2">Join my newsletter</h3>
                <p className="text-slate-500 text-sm mb-4">
                  Get practical, no-fluff insights on AI, entrepreneurship, and networks from the frontlines.
                </p>
                <form onSubmit={handleHeroSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      value={heroEmail}
                      onChange={(e) => setHeroEmail(e.target.value)}
                      required
                      disabled={heroLoading}
                      className="flex-1 px-5 py-3 rounded-full border border-slate-300 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all disabled:opacity-50"
                    />
                    <button 
                      type="submit"
                      disabled={heroLoading || !heroEmail}
                      className="px-6 py-3 bg-brand-blue text-white rounded-full font-medium hover:bg-blue-700 transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {heroLoading ? 'Subscribing...' : 'Subscribe'}
                    </button>
                  </div>
                  {heroMessage && (
                    <p className={`text-sm ${heroMessageType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                      {heroMessage}
                    </p>
                  )}
                </form>
              </div>

              {/* Secondary CTA */}
              <div className="pt-8 border-t border-slate-100">
                <h3 className="text-xl font-serif text-slate-900 mb-2">Book me to speak</h3>
                <p className="text-slate-500 text-sm mb-4">
                  Invite me to energize your next offsite, leadership summit, or company-wide event.
                </p>
                <a href="mailto:boaz@boazashkenazy.com" className="group flex items-center text-slate-900 font-semibold border border-slate-300 px-6 py-3 rounded-full hover:border-slate-900 transition-all">
                  Invite me to speak
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;