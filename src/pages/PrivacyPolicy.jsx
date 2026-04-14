import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us, such as when you create or modify your account, request services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, and any other information you choose to provide.",
      icon: <Eye className="text-accent-blue" size={24} />
    },
    {
      title: "2. How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, develop new services, and protect Grewox Infotech and our users. We also use this information to offer you tailored content – like giving you more relevant search results and ads.",
      icon: <FileText className="text-accent-blue" size={24} />
    },
    {
      title: "3. Information Sharing and Disclosure",
      content: "We do not share your personal information with companies, organizations, or individuals outside of Grewox Infotech except in the following cases: with your consent, for external processing by trusted partners, or for legal reasons such as meeting any applicable law, regulation, or legal process.",
      icon: <Shield className="text-accent-blue" size={24} />
    },
    {
      title: "4. Data Security",
      content: "We work hard to protect Grewox Infotech and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. In particular: we review our information collection, storage, and processing practices; and we restrict access to personal information.",
      icon: <Lock className="text-accent-blue" size={24} />
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
            Privacy <span className="text-gradient-main">Policy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Last Updated: April 11, 2026. Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
            <h3 className="text-xl font-bold mb-4">Questions?</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              If you have any questions about our Privacy Policy, please contact us at <a href="mailto:grewoxinfotech@gmail.com" className="text-accent-blue hover:underline">grewoxinfotech@gmail.com</a>.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
