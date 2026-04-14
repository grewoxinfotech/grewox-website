import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, CreditCard, Plane, Trophy, Car, Video, 
  Sparkles, Home as HomeIcon, Shirt, ShoppingCart, 
  MessageSquare, HeartPulse, ShieldCheck, Zap, 
  Layers, Globe, ArrowRight 
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Industries = () => {
  const industries = [
    {
      title: "eCommerce App",
      icon: <ShoppingBag size={24} />,
      desc: "Custom multi-vendor marketplaces and retail apps with seamless UX and secure payments.",
      accent: "from-[#426dd4]/20 to-[#2563eb]/20"
    },
    {
      title: "Recharge & Bill Payments",
      icon: <CreditCard size={24} />,
      desc: "Highly secure fintech solutions for instant recharges, utility bills, and digital wallets.",
      accent: "from-[#3b82f6]/20 to-[#426dd4]/20"
    },
    {
      title: "Travel Booking App",
      icon: <Plane size={24} />,
      desc: "Comprehensive platforms for flight, hotel, and holiday bookings with real-time API sync.",
      accent: "from-[#60a5fa]/20 to-[#426dd4]/20"
    },
    {
      title: "Fantasy Sports App",
      icon: <Trophy size={24} />,
      desc: "High-performance gaming apps with real-time drafting, live scores, and secure payouts.",
      accent: "from-[#426dd4]/20 to-[#1e40af]/20"
    },
    {
      title: "Cab Booking App",
      icon: <Car size={24} />,
      desc: "Robust ride-sharing solutions with real-time tracking, driver matching, and fare estimation.",
      accent: "from-[#2563eb]/20 to-[#426dd4]/20"
    },
    {
      title: "Video Sharing App",
      icon: <Video size={24} />,
      desc: "Scalable streaming platforms with high-speed delivery, interactive features, and safe content.",
      accent: "from-[#426dd4]/20 to-[#3b82f6]/20"
    },
    {
      title: "Beauty Services",
      icon: <Sparkles size={24} />,
      desc: "Booking and management platforms for salons, spas, and freelance beauty professionals.",
      accent: "from-[#426dd4]/10 to-[#426dd4]/20"
    },
    {
      title: "On Demand Home Services",
      icon: <HomeIcon size={24} />,
      desc: "Marketplaces for cleaning, repairs, and home maintenance with provider vetting systems.",
      accent: "from-[#1e40af]/20 to-accent-blue/20"
    },
    {
      title: "Laundry Services",
      icon: <Shirt size={24} />,
      desc: "On-demand laundry and dry-cleaning apps with pickup scheduling and order tracking.",
      accent: "from-accent-blue/20 to-[#426dd4]/10"
    },
    {
      title: "Grocery Delivery",
      icon: <ShoppingCart size={24} />,
      desc: "Fast, inventory-syncing apps for local grocery delivery and hyper-local marketplaces.",
      accent: "from-[#426dd4]/20 to-[#60a5fa]/20"
    },
    {
      title: "Chat App Development",
      icon: <MessageSquare size={24} />,
      desc: "Real-time, end-to-end encrypted messaging solutions for enterprise and social needs.",
      accent: "from-[#426dd4]/20 to-[#2563eb]/20"
    },
    {
      title: "Health App Development",
      icon: <HeartPulse size={24} />,
      desc: "Secure telemedicine and health-tracking apps compliant with industry security standards.",
      accent: "from-[#426dd4]/20 to-accent-blue/30"
    }
  ];

  const approaches = [
    {
      title: "Custom Strategy",
      icon: <Zap className="text-accent-blue" />,
      desc: "We dive deep into your specific industry challenges to build a roadmap that aligns with your business goals."
    },
    {
      title: "Compliance Awareness",
      icon: <ShieldCheck className="text-accent-blue" />,
      desc: "Our solutions meet rigorous industry-specific standards, ensuring your data and operations are always secure."
    },
    {
      title: "Scalability First",
      icon: <Layers className="text-accent-blue" />,
      desc: "Built to handle growth, our architectures support millions of users and high-volume transactions."
    },
    {
      title: "Deep Integration",
      icon: <Globe className="text-accent-blue" />,
      desc: "Seamlessly connecting with third-party APIs and legacy systems for a unified business ecosystem."
    }
  ];

  return (
    <div className="pt-20 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="px-6 py-12 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-accent-blue/5 blur-[120px] -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 mb-8">
            <Sparkles size={14} className="text-accent-blue" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Industry Expertise</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-6 text-primary-dark"
          >
            Industries <span className="text-gradient-main">We Serve</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium"
          >
            Delivering tailored technology solutions across diverse industries. From hyper-local delivery to enterprise fintech, we build apps that dominate markets.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
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

      {/* Industries Grid */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-6 glass-card hover:shadow-xl hover:border-accent-blue/20 transition-all flex flex-col h-full"
            >
              <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${industry.accent} flex items-center justify-center text-white shadow-lg`}>
                {industry.icon}
              </div>
              <h3 className="text-base font-bold mb-3 group-hover:text-accent-blue transition-colors">
                {industry.title}
              </h3>
              <p className="text-gray-600 text-[11px] leading-relaxed mb-6 flex-1 font-medium">
                {industry.desc}
              </p>
              <Link to="/contact" className="mt-auto">
                <Button variant="secondary" size="sm" className="w-full justify-between">
                  Build Yours <ArrowRight size={14} />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section className="px-6 mb-32 bg-gray-50 py-20 relative border-y border-gray-100">
        <SectionHeader 
          subtitle="Strategic Execution"
          title="Our Industry Approach"
          description="How we adapt our technical excellence to solve industry-specific challenges."
        />
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {approaches.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group p-4 md:p-0"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 bg-gray-100 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white transition-all shadow-xl group-hover:shadow-accent-blue/20">
                {React.cloneElement(item.icon, { size: 24 })}
              </div>
              <h4 className="font-bold text-sm md:text-lg mb-2 md:mb-3">{item.title}</h4>
              <p className="text-gray-600 text-[10px] md:text-sm leading-relaxed line-clamp-2 md:line-clamp-none font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto p-12 glass-card bg-gradient-main relative overflow-hidden text-center group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] -z-10 group-hover:scale-150 transition-transform duration-700" />
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">Have a project in your industry?</h2>
          <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Leverage our expertise to build a custom solution that sets you apart from the competition.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="w-full sm:w-auto">
              Get Free Consultation
              <ArrowRight size={22} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full">
                Contact Our Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
