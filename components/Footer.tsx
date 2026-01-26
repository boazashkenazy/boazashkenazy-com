import React, { useState } from 'react';
import { handleNewsletterSubmission } from '../utils/newsletter';

const Footer: React.FC = () => {
  const [footerEmail, setFooterEmail] = useState('');
  const [footerLoading, setFooterLoading] = useState(false);
  const [footerMessage, setFooterMessage] = useState('');
  const [footerMessageType, setFooterMessageType] = useState<'success' | 'error' | ''>('');

  const handleFooterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await handleNewsletterSubmission(
      footerEmail,
      (message) => {
        setFooterMessage(message);
        setFooterMessageType('success');
        setFooterEmail(''); // Clear the form
        setTimeout(() => setFooterMessage(''), 5000); // Clear message after 5 seconds
      },
      (message) => {
        setFooterMessage(message);
        setFooterMessageType('error');
        setTimeout(() => setFooterMessage(''), 5000); // Clear message after 5 seconds
      },
      setFooterLoading
    );
  };

  return (
    <footer className="bg-white pb-12">
      <div className="max-w-4xl mx-auto px-6 text-center py-10 border-t border-slate-100">
        <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6">
            Start building an AI-native team.
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10">
            Join leaders designing systems, teams, and networks that turn AI adoption into durable advantage.
        </p>

        <form onSubmit={handleFooterSubmit} className="space-y-3 mb-6">
            <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
                <input 
                type="email" 
                placeholder="Email Address" 
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                required
                disabled={footerLoading}
                className="flex-1 px-5 py-3 rounded-full border border-slate-300 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all disabled:opacity-50"
                />
                <button 
                type="submit"
                disabled={footerLoading || !footerEmail}
                className="px-8 py-3 bg-brand-blue text-white rounded-full font-medium hover:bg-blue-700 transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                {footerLoading ? 'Subscribing...' : 'Subscribe'}
                </button>
            </div>
            {footerMessage && (
                <p className={`text-sm ${footerMessageType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                    {footerMessage}
                </p>
            )}
        </form>
        <p className="text-slate-400 text-xs mb-12">I will never spam or sell your info. Ever.</p>

        <div className="border-t border-slate-100 pt-12">
             <p className="text-slate-800 font-medium mb-4">Want me to bring this to your team?</p>
             <a href="mailto:boaz@boazashkenazy.com?subject=Speaking Inquiry&body=Hi Boaz,%0D%0A%0D%0AI'm interested in having you speak at our event. Please let me know your availability.%0D%0A%0D%0AThanks!" className="inline-block text-sm font-semibold border border-slate-300 px-6 py-2 rounded-md hover:bg-slate-50 transition-colors">
                Invite me to speak
             </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center py-8 border-t border-slate-100 mt-8">
        <div className="text-slate-900 font-bold tracking-tight mb-4 md:mb-0">
            Boaz Ashkenazy
        </div>
        
        <div className="flex space-x-6 text-xs text-slate-500 font-medium">
            <a href="./privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">Privacy Policy</a>
            <a href="mailto:boaz@boazashkenazy.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">Contact</a>
            <a href="https://twitter.com/boazashkenazy" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">Twitter/X</a>
            <a href="https://linkedin.com/in/boazashkenazy" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">LinkedIn</a>
            <a href="https://github.com/boazashkenazy" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;