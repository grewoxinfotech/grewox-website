import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Rocket, ShieldCheck, Target, Zap, Clock, 
  MessageCircle, BarChart3, Briefcase, Handshake, 
  CreditCard, Wallet, Landmark, ArrowRight, CheckCircle2,
  Code2, Smartphone, Database, Cpu, Star, 
  Shield, Globe, MapPin, Building2, Lightbulb, Heart, Sparkles
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { label: "Projects Delivered", value: "100+", icon: <Rocket className="text-accent-blue" /> },
    { label: "Happy Clients", value: "50+", icon: <Users className="text-accent-blue" /> },
    { label: "Years Experience", value: "6+", icon: <Clock className="text-accent-blue" /> },
    { label: "Experts", value: "10+", icon: <Shield className="text-accent-blue" /> }
  ];

  const approach = [
    {
      title: "Work Ethics",
      desc: "Integrity is at our core. We maintain extreme honesty in every line of code we write and every commitment we make.",
      icon: <ShieldCheck size={24} />,
      accent: "from-[#426dd4] to-[#2563eb]"
    },
    {
      title: "Working Principles",
      desc: "Efficiency and innovation. We follow agile principles to ensure rapid delivery without compromising on technical depth.",
      icon: <Zap size={24} />,
      accent: "from-accent-blue to-[#1e40af]"
    },
    {
      title: "Future Vision",
      desc: "To empower every business with enterprise-grade AI and automated solutions that simplify complexity and maximize ROI.",
      icon: <Target size={24} />,
      accent: "from-[#2563eb] to-accent-blue"
    }
  ];

  const values = [
    { name: "Commitment", desc: "Dedicated to your success from project discovery to post-launch scaling." },
    { name: "Innovation", desc: "Constantly evolving with the latest tech stacks to give you a competitive edge." },
    { name: "Community", desc: "Building a culture of shared growth and long-term professional relationships." },
    { name: "Excellence", desc: "A standard that defined Grewox since 2020. No compromises, only perfection." }
  ];

  const whyGrewox = [
    { title: "Scalable Solutions", icon: <BarChart3 className="text-accent-blue" /> },
    { title: "Dedicated Support", icon: <MessageCircle className="text-accent-blue" /> },
    { title: "Agile Process", icon: <Zap className="text-accent-blue" /> },
    { title: "Latest Technology", icon: <Cpu className="text-accent-blue" /> },
    { title: "Transparent Workflow", icon: <ShieldCheck className="text-accent-blue" /> },
    { title: "SLA-Based Services", icon: <CheckCircle2 className="text-accent-blue" /> }
  ];

  const locations = [
    { name: "India", type: "Development Hub", icon: <MapPin className="text-accent-blue" /> },
    { name: "USA", type: "Client Relations", icon: <Globe className="text-accent-blue" /> },
    { name: "UK", type: "Strategic Partner", icon: <Globe className="text-accent-blue" /> },
    { name: "Middle East", type: "Emerging Market", icon: <Globe className="text-accent-blue" /> }
  ];

  return (
    <div className="pt-20 pb-20 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="px-6 py-12 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-accent-blue/5 blur-[120px] -z-10" />
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 mb-8">
            <Sparkles size={14} className="text-accent-blue" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">6+ Years of Shaping Businesses & Building Trust</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-primary-dark"
          >
            Grewox Infotech <span className="text-gradient-main">Profile</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg md:text-xl font-medium tracking-tight mb-10 max-w-2xl mx-auto"
          >
            Since 2020, we have been a trusted technology partner, turning complex digital requirements into high-performance realities for businesses worldwide.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
          >
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full" showArrow={true}>
                Get Started
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full">
                Contact Our Experts
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Company Overview */}
      <section className="px-6 mb-32">
        <div className="max-w-4xl mx-auto glass-card p-10 bg-white border-surface-border relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 blur-[60px] rounded-full group-hover:scale-150 transition-transform duration-700" />
          <h2 className="text-2xl font-black mb-6 text-primary-dark">Redefining Excellence in IT Services</h2>
          <p className="text-gray-400 text-base leading-relaxed mb-6">
            Grewox Infotech is a premier technology partner specializing in high-end Web Development, Mobile Applications, custom CRM systems, and AI-driven automation. Since our inception, we've focused on one thing: helping businesses navigate the complex digital landscape with ease and efficiency.
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            We don't just deliver projects; we build long-term partnerships. Our approach is deeply rooted in problem-solving, ensuring that every technical solution we provide adds tangible value to your bottom line and sets you apart in your industry.
          </p>
        </div>
      </section>

      {/* 3. Stats Section */}
      <section className="px-6 mb-32">
        <SectionHeader 
          subtitle="Proven Excellence"
          title="Grewox By The Numbers"
          description="A track record of success built on technical depth and reliable delivery since 2020."
        />
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 md:p-10 glass-card border-surface-border text-center group bg-white hover:bg-surface-muted/60 transition-all relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 bg-white/5 rounded-2xl flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-accent-blue/20">
                {React.cloneElement(stat.icon, { size: 28 })}
              </div>
              <h3 className="text-3xl md:text-5xl font-black mb-1 text-primary-dark transition-colors group-hover:text-accent-blue">{stat.value}</h3>
              <p className="text-gray-500 group-hover:text-gray-300 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Work Approach */}
      <section className="px-6 mb-32">
        <SectionHeader 
          subtitle="Our Foundation"
          title="How We Operate"
          description="A set of core principles that guide our technical excellence and client partnerships."
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {approach.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 md:p-12 glass-card bg-white border-surface-border hover:border-accent-blue/20 hover:bg-surface-muted/40 transition-all relative overflow-hidden group flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className={`w-14 h-14 md:w-16 md:h-16 mb-6 md:mb-8 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                {React.cloneElement(item.icon, { size: 28 })}
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-4 group-hover:text-accent-blue transition-colors">{item.title}</h3>
              <p className="text-gray-500 group-hover:text-gray-400 text-sm md:text-base leading-relaxed transition-colors">
                {item.desc}
              </p>
              <div className="mt-8 pt-6 border-t border-surface-border group-hover:border-accent-blue/15 transition-colors">
                 <Link to="/contact">
                    <Button variant="secondary" size="sm" className="w-full sm:w-auto" showArrow={true}>
                        Learn More
                    </Button>
                 </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Vision & Mission Section */}
      <section className="px-6 mb-32 py-20 bg-accent-blue/[0.02] border-y border-surface-border relative">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeader 
            title="IT Solutions To Help Businesses & Societies Flourish!"
            description="Our foundational goals are simple: excellence for our clients and progress for the digital world."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 text-left">
            <div className="p-8 glass-card border-surface-border hover:border-accent-blue/20 transition-all">
              <div className="w-10 h-10 mb-6 bg-accent-blue/10 text-accent-blue rounded-lg flex items-center justify-center">
                <Lightbulb size={24} />
              </div>
              <h4 className="text-xl font-black mb-4">Our Vision</h4>
              <p className="text-gray-400 text-sm leading-relaxed italic">
                "To remain at the global peak of IT consultancy, delivering software that doesn't just work, but wows."
              </p>
            </div>
            <div className="p-8 glass-card border-surface-border hover:border-accent-blue/20 transition-all">
              <div className="w-10 h-10 mb-6 bg-accent-blue/10 text-accent-blue rounded-lg flex items-center justify-center">
                <Target size={24} />
              </div>
              <h4 className="text-xl font-black mb-4">Our Mission</h4>
              <p className="text-gray-400 text-sm leading-relaxed italic">
                "Empowering partners with innovation, integrity, and agile solutions that solve real-world complexities."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Core Values Section */}
      <section className="px-6 mb-32">
        <SectionHeader 
          subtitle="Our Foundation"
          title="Where Trust Meets Transparency!"
          description="The 4 pillars that define every single interaction we have at Grewox Infotech."
        />
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 md:p-8 glass-card bg-white border-surface-border text-center group hover:bg-surface-muted/50 transition-all"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 md:mb-6 bg-white/5 rounded-full flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform">
                {React.cloneElement(<Heart />, { size: 20 })}
              </div>
              <h4 className="font-extrabold text-sm md:text-lg mb-2 md:mb-3">{v.name}</h4>
              <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. Why Grewox Section */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6 text-center lg:text-left">
            <h4 className="text-accent-blue text-xs font-black uppercase tracking-widest">Our Edge</h4>
            <h2 className="text-3xl md:text-4xl font-black leading-tight text-primary-dark">Delivering Results, Building Authority.</h2>
            <p className="text-gray-400 text-base leading-relaxed">
              We focus on the metrics that matter most to your business: scalability, security, and speed-to-market.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyGrewox.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-5 glass-card border-surface-border bg-white">
                {item.icon}
                <span className="font-bold text-sm">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Our Promise Section */}
      <section className="px-6 mb-32">
        <div className="max-w-5xl mx-auto p-12 glass-card bg-white border-surface-border border-l-4 border-l-accent-blue text-center md:text-left">
          <h3 className="text-2xl font-black mb-6">Our Promise Since 2020</h3>
          <p className="text-gray-400 text-lg leading-relaxed italic mb-8">
            "At Grewox Infotech, we are your technology partner, not just another vendor. Our promise is simple: we will obsess over your project's success as much as you do. From the first line of code to the final deployment, we prioritize your long-term scalability and business integrity above all else."
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
             <div className="flex items-center gap-2 text-xs font-bold text-accent-blue bg-accent-blue/10 px-4 py-2 rounded-full">
                <ShieldCheck size={14} /> Long-Term Partnership
             </div>
             <div className="flex items-center gap-2 text-xs font-bold text-accent-blue bg-accent-blue/10 px-4 py-2 rounded-full">
                <CheckCircle2 size={14} /> Full Transparency
             </div>
          </div>
        </div>
      </section>

      {/* 9. Global Presence Section */}
      <section className="px-6 mb-32">
        <SectionHeader 
          subtitle="International Footprint"
          title="Our Global Reach"
          description="Grewox serves clients across continents, combining localized support with global technical excellence."
        />
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {locations.map((loc, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-4 md:p-8 glass-card border-surface-border text-center bg-white"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 bg-white/5 rounded-full flex items-center justify-center">
                {React.cloneElement(loc.icon, { size: 20 })}
              </div>
              <h4 className="font-black text-sm md:text-lg mb-1">{loc.name}</h4>
              <p className="text-gray-500 text-[8px] md:text-[10px] font-black uppercase tracking-widest">{loc.type}</p>
            </motion.div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto text-center mt-8 md:mt-12 text-gray-500 text-[10px] md:text-sm leading-relaxed italic px-4">
          With a focus on rapid expansion, we take pride in serving startups and enterprise clients from the USA, UK, Europe, and Asia.
        </div>
      </section>

      {/* 10. Trust Badges Bar — same layout as Home */}
      <div className="py-10 mb-32 bg-surface-muted border-y border-surface-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-accent-gray text-xs font-bold uppercase tracking-[0.25em] mb-6">Trusted by startups &amp; enterprises worldwide</p>
            <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-surface-muted before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-surface-muted after:to-transparent">
                <motion.div 
                    animate={{ x: [0, -1000] }}
                    transition={{ 
                        x: { repeat: Infinity, duration: 20, ease: "linear" }
                    }}
                    className="flex items-center gap-16 whitespace-nowrap w-max"
                >
                    {[ 
                        "FINANCE-GO", "TECH-FLOW", "ZENITH-AI", "RETAIL-PRO", "HEALTH-SYNC", "LOGOIPSUM",
                        "FINANCE-GO", "TECH-FLOW", "ZENITH-AI", "RETAIL-PRO", "HEALTH-SYNC", "LOGOIPSUM"
                    ].map((logo, i) => (
                        <span key={i} className="text-xl font-black italic px-4 uppercase text-accent-gray/50 tracking-widest">{logo}</span>
                    ))}
                </motion.div>
            </div>
        </div>
      </div>

      {/* 11. Final CTA Section */}
      <section className="px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-accent-blue/10 blur-[150px] -z-10" />
        <div className="max-w-5xl mx-auto p-16 glass-card bg-gradient-main text-center relative overflow-hidden group">
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-white/10 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-700" />
          <h2 className="text-3xl md:text-5xl font-black mb-8 text-white">Start Your Digital Journey with Grewox Infotech</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Experience the difference that premium technical expertise and dedicated partnership can make for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="w-fit" showArrow={true}>
              Get Started
            </Button>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Contact Our Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
