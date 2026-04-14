import React from 'react';
import { motion } from 'framer-motion';
import { Scale, CheckCircle2, AlertTriangle, Info } from 'lucide-react';

const TermsOfUse = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using the services provided by Grewox Infotech, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.",
      icon: <CheckCircle2 className="text-accent-blue" size={24} />
    },
    {
      title: "2. Description of Service",
      content: "Grewox Infotech provides users with access to a rich collection of resources, including various communications tools, forums, shopping services, personalized content and branded programming through its network of properties which may be accessed through any medium or device.",
      icon: <Info className="text-accent-blue" size={24} />
    },
    {
      title: "3. User Conduct",
      content: "You understand that all information, data, text, software, music, sound, photographs, graphics, video, messages or other materials, whether publicly posted or privately transmitted, are the sole responsibility of the person from whom such content originated.",
      icon: <AlertTriangle className="text-accent-blue" size={24} />
    },
    {
      title: "4. Intellectual Property Rights",
      content: "All content included on this site, such as text, graphics, logos, button icons, images, and software, is the property of Grewox Infotech or its content suppliers and protected by international copyright laws. The compilation of all content on this site is the exclusive property of Grewox Infotech.",
      icon: <Scale className="text-accent-blue" size={24} />
    }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <section className="px-6 mb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-accent-blue/5 blur-[120px] -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-6 text-primary-dark"
          >
            Terms of <span className="text-gradient-main">Use</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Last Updated: April 11, 2026. Please read these terms carefully before using our services.
          </motion.p>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass-card bg-white border-surface-border"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent-blue/10 rounded-xl text-accent-blue">
                  {section.icon}
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-primary-dark">{section.title}</h2>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {section.content}
              </p>
            </motion.div>
          ))}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 glass-card bg-accent-blue/5 border-accent-blue/20 mt-12"
          >
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              If you have any questions or concerns about these Terms, please reach out to us at <a href="mailto:grewoxinfotech@gmail.com" className="text-accent-blue hover:underline">grewoxinfotech@gmail.com</a>.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;
