import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#0B1120] text-white py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Profile Image */}
        <div className="mb-10 flex justify-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-slate-700 shadow-xl">
             <img 
               src="./headshot-boaz.jpg" 
               alt="Boaz" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl mb-6">
          Hi—I’m Boaz. I help leaders bring startup-grade AI and energy into their teams.
        </h2>

        {/* <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-12">
          [ An open letter to leaders who still want to build like founders ]
        </p> */}

        <div className="space-y-8 text-slate-300 text-lg leading-relaxed text-left md:text-center font-light">
          <p>
            Using AI as a leader isn’t about chasing every new tool.
          </p>
          <p>
            It’s about understanding how to leverage the right ones and investing in the relationships that actually move the needle.
          </p>
          <p>
            I’ve spent years in entrepreneurship trying to grow businesses and I know how hard it is to get something off the ground. I’ve also spent time inside big companies, where I saw how much impact a founder mindset can have when the right people and systems are in place.
          </p>
          
          <div className="py-6">
            <p className="font-serif text-white text-xl italic mb-4">Here’s what I’ve learned:</p>
            <p>
                You don’t need a huge team if you have a smart AI stack.<br/>
                You need people who know how to think like builders and use AI as leverage.
            </p>
          </div>

          <p>
            AI should give your team:
          </p>
          <ul className="space-y-2 md:space-y-1">
             <li className="text-white">Speed and leverage – <span className="text-slate-400">turning weeks of work into days or hours.</span></li>
             <li className="text-white">Experimentation and rapid prototyping – <span className="text-slate-400">more bets, less bureaucracy.</span></li>
             <li className="text-white">Higher-order work – <span className="text-slate-400">less grind, more thinking, leading, and creating.</span></li>
          </ul>

          <div className="pt-8">
            <p className="mb-6">
                And then there’s your network.
            </p>
            <p>
                Your network is an operating system, not a Rolodex. Take it seriously. Invest in people where you can give first. Use AI to scale yourself, but recognize that some of the most important conversations can’t be rushed. Sometimes going slower is actually how you have the most impact.
            </p>
          </div>

          <div className="pt-10 border-t border-slate-800">
             <p className="text-brand-blue text-xl md:text-2xl font-serif">
                At the end of the day, what I care about is simple:
             </p>
             <p className="mt-4 text-white">
                Helping you build teams that are lean, leveraged, and deeply human—teams that know how to use AI without losing the relationships and judgment that make the work meaningful.
             </p>
          </div>

          {/* <div className="pt-10 flex justify-center">
            <button className="text-xs uppercase tracking-widest border border-slate-700 px-6 py-3 rounded-full hover:bg-slate-800 transition-colors">
                More About Me
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;