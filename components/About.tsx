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
          Hi — I'm Boaz. I help enterprise leaders move AI from intention to impact.
        </h2>

        <div className="space-y-8 text-slate-300 text-lg leading-relaxed text-left md:text-center font-light">
          <p>
            Using AI well isn't about chasing tools — and it isn't just about infrastructure either.
            It's about aligning how people work with systems that can actually support AI at scale.
          </p>
          <p>
            For years, I've worked on the application and adoption side of AI — helping teams experiment, build, and integrate AI into real workflows. Today, I'm going deeper into the enterprise stack, focusing on the infrastructure, data, and hybrid environments that make those applications reliable, secure, and sustainable inside large organizations.
          </p>
          <p>
            I've built startups from the ground up, and I've worked inside complex enterprises where progress depends on more than good ideas. What I've learned is this:
          </p>

          <div className="py-6">
            <p className="text-white text-lg">
              AI adoption breaks down when systems aren't ready.<br/>
              Infrastructure investments fall flat when teams don't know how to apply them.
            </p>
            <p className="mt-4 font-serif text-white text-xl italic">
              Real progress happens when those two move together.
            </p>
          </div>

          <p className="font-serif text-white text-xl">
            Effective enterprise AI requires:
          </p>
          <ul className="space-y-3 text-left">
             <li><span className="text-white font-medium">Applied AI that solves real problems</span> — <span className="text-slate-400">embedded in daily workflows, not isolated pilots.</span></li>
             <li><span className="text-white font-medium">Infrastructure and architecture</span> — <span className="text-slate-400">that can support modern AI workloads across cloud, on-prem, and hybrid environments.</span></li>
             <li><span className="text-white font-medium">Data that is accessible, governed, and trusted</span> — <span className="text-slate-400">so teams can move with confidence.</span></li>
             <li><span className="text-white font-medium">Operating models</span> — <span className="text-slate-400">that turn experimentation into repeatable capability, not one-off wins.</span></li>
          </ul>

          <div className="pt-8">
            <p className="font-serif text-white text-xl mb-4">
              When application and infrastructure are aligned, AI becomes leverage:
            </p>
            <ul className="space-y-2 text-left">
               <li><span className="text-white font-medium">Faster cycles</span> — <span className="text-slate-400">moving from idea to production without friction.</span></li>
               <li><span className="text-white font-medium">Safer experimentation</span> — <span className="text-slate-400">innovation without compromising stability or security.</span></li>
               <li><span className="text-white font-medium">Higher-order work</span> — <span className="text-slate-400">less manual effort, more judgment, leadership, and creativity.</span></li>
            </ul>
          </div>

          <div className="pt-8">
            <p className="font-serif text-white text-xl mb-4">
              And then there's the human layer.
            </p>
            <p>
              AI doesn't replace leadership or relationships — it amplifies them.
              Your network, your culture, and your ability to bring people along matter as much as any system design. The most successful organizations invest in both: technical readiness and human readiness.
            </p>
          </div>

          <div className="pt-10 border-t border-slate-800">
             <p className="text-brand-blue text-xl md:text-2xl font-serif">
                At the end of the day, what I care about is simple:
             </p>
             <p className="mt-4 text-white">
                Helping organizations build AI that people actually use, supported by infrastructure that can scale, and led by teams that remain thoughtful, accountable, and deeply human.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;