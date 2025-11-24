import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { handleNewsletterSubmission } from '../utils/newsletter';

const Services: React.FC = () => {
  const [servicesEmail, setServicesEmail] = useState('');
  const [servicesLoading, setServicesLoading] = useState(false);
  const [servicesMessage, setServicesMessage] = useState('');
  const [servicesMessageType, setServicesMessageType] = useState<'success' | 'error' | ''>('');

  const handleServicesSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await handleNewsletterSubmission(
      servicesEmail,
      (message) => {
        setServicesMessage(message);
        setServicesMessageType('success');
        setServicesEmail(''); // Clear the form
        setTimeout(() => setServicesMessage(''), 5000); // Clear message after 5 seconds
      },
      (message) => {
        setServicesMessage(message);
        setServicesMessageType('error');
        setTimeout(() => setServicesMessage(''), 5000); // Clear message after 5 seconds
      },
      setServicesLoading
    );
  };

  return (
    <section id="services" className="bg-brand-blue text-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Ways I can help <br/>
            your team level up with <span className="text-blue-200">AI</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            
          {/* Empty column for layout balance on large screens if desired, or just use grid flow */}
          <div className="hidden md:block">
            {/* Decorative or intro text could go here, or left empty to mimic the asymmetric layout of the reference */}
            <div className="sticky top-32">
                 <p className="text-blue-100 text-lg opacity-80 max-w-xs">
                    From weekly insights to high-impact keynotes, pick the lane that fits your speed.
                 </p>
            </div>
          </div>

          <div className="space-y-12">
            
            {/* Item 01 */}
            <div className="relative pl-12 md:pl-16 border-l border-blue-400/30">
                <h3 className="text-2xl font-serif font-bold mb-4">The Augmented Edge – Weekly Newsletter</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                    Every week, I share practical guidance to help you and your team become AI-native operators: how to leverage tools, ship experiments, and build networks that compound over time.
                </p>
                <p className="text-blue-100 leading-relaxed mb-8 italic text-sm">
                    No hype, no jargon—just what’s working in the real world.
                </p>
                <form onSubmit={handleServicesSubmit} className="space-y-3">
                    <div className="bg-white/10 p-1 rounded-full flex pl-4 pr-1 py-1 max-w-sm">
                        <input 
                            type="email" 
                            placeholder="Email Address"
                            value={servicesEmail}
                            onChange={(e) => setServicesEmail(e.target.value)}
                            required
                            disabled={servicesLoading}
                            className="bg-transparent border-none focus:ring-0 text-white placeholder-blue-200 flex-1 text-sm disabled:opacity-50"
                        />
                        <button 
                            type="submit"
                            disabled={servicesLoading || !servicesEmail}
                            className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {servicesLoading ? 'Subscribing...' : 'Subscribe'}
                        </button>
                    </div>
                    {servicesMessage && (
                        <p className={`text-sm max-w-sm ${servicesMessageType === 'success' ? 'text-green-200' : 'text-red-200'}`}>
                            {servicesMessage}
                        </p>
                    )}
                </form>
            </div>

            {/* Item 02 */}
            <div className="relative pl-12 md:pl-16 border-l border-blue-400/30">
                <h3 className="text-2xl font-serif font-bold mb-4">Keynotes & Executive Sessions</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                    Bring startup energy and AI expertise to your next event, all-hands, or offsite.
                </p>
                
                <div className="space-y-6 mb-8">
                    <div>
                        <h4 className="font-bold text-white mb-1 text-sm">The Augmented Founder</h4>
                        <p className="text-blue-200 text-xs">Building Leverage with AI to stay lean and move fast.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-1 text-sm">Integrating AI into Your Enterprise</h4>
                        <p className="text-blue-200 text-xs">A practical playbook to experiment without getting stuck.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-1 text-sm">Growing Your Network in the Age of AI</h4>
                        <p className="text-blue-200 text-xs">Why relationships compound faster than technology.</p>
                    </div>
                </div>

                <a href="mailto:boaz@boazashkenazy.com" className="inline-flex items-center bg-white text-brand-blue px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors">
                    Invite me to speak
                    <ArrowRight className="ml-2 w-4 h-4" />
                </a>
            </div>

            {/* Item 03 */}
            <div className="relative pl-12 md:pl-16 border-l border-blue-400/30">
                <h3 className="text-2xl font-serif font-bold mb-4">Shift AI – Podcast & Sponsorships</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                    Shift AI is where operators, founders, and leaders share how they’re actually using AI inside their organizations.
                </p>
                <div className="space-y-4 mb-8">
                     <p className="text-sm text-blue-100"><strong className="text-white">Podcast appearances:</strong> Invite me to your show to talk about AI in business.</p>
                     <p className="text-sm text-blue-100"><strong className="text-white">Sponsor Shift AI:</strong> Put your brand in front of an audience of builders.</p>
                </div>
                
                <button className="inline-flex items-center bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-black transition-colors border border-slate-700">
                    Sponsor Shift AI
                </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
