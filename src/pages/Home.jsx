import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Smartphone, Database, Cpu, PieChart, MoveRight, 
  Users, CheckCircle, BarChart, Clock, Settings, Globe, 
  Building2, ShoppingBag, Home as HomeIcon, HeartPulse, 
  GraduationCap, Briefcase, HelpCircle, Plus, Minus, ShieldCheck, Star, Rocket,
  Search, FileText, PenTool
} from 'lucide-react';
import Button from '../components/Button';

const Home = () => {
  const services = [
    {
      icon: <Code2 size={32} />,
      title: "Web Development",
      desc: "Custom high-performance websites built with modern frameworks and pixel-perfect design."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile apps that deliver seamless user experiences."
    },
    {
      icon: <Database size={32} />,
      title: "CRM Development",
      desc: "Tailored CRM solutions to streamline your business operations and customer relations."
    },
    {
      icon: <Cpu size={32} />,
      title: "AI & Automation",
      desc: "Intelligent AI-driven workflows to automate repetitive tasks and boost efficiency."
    },
    {
      icon: <PieChart size={32} />,
      title: "Digital Marketing",
      desc: "Data-driven marketing strategies to grow your brand and reach your target audience."
    },
    {
      icon: <Building2 size={32} />,
      title: "Custom Software Development",
      desc: "End-to-end bespoke software solutions designed to solve your specific business complexities."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Users className="text-accent-blue" />,
      title: "Experienced Development Team",
      desc: "Our engineers bring over a decade of expertise in building complex enterprise systems."
    },
    {
      icon: <BarChart className="text-accent-blueDark" />,
      title: "Agile & Transparent Process",
      desc: "Full visibility through every sprint. We prioritize clear communication and iterative delivery."
    },
    {
      icon: <ShieldCheck className="text-accent-blue" />,
      title: "Scalable & Secure Solutions",
      desc: "Security is baked into our DNA. We build architectures that grow with your user base."
    },
    {
      icon: <Clock className="text-accent-blue" />,
      title: "On-time Delivery",
      desc: "We respect deadlines. Our precise project management ensures we ship on schedule, every time."
    },
    {
      icon: <Settings className="text-accent-blueDark" />,
      title: "Dedicated Support",
      desc: "Our partnership doesn't end at launch. We provide 24/7 technical monitoring and support."
    },
    {
      icon: <PieChart className="text-accent-blue" />,
      title: "Cost-Effective Excellence",
      desc: "We optimize resources to deliver premium quality solutions that fit your business budget."
    }
  ];

  const stats = [
    { label: "Projects Delivered", value: "100+", icon: <CheckCircle /> },
    { label: "Happy Clients", value: "50+", icon: <Users /> },
    { label: "Years Experience", value: "5+", icon: <Briefcase /> },
    { label: "Tech Mastered", value: "10+", icon: <Settings /> }
  ];

  const industries = [
    { name: "Healthcare", icon: <HeartPulse />, desc: "Secure HIPAA-compliant healthcare portals and patient management systems." },
    { name: "E-commerce", icon: <ShoppingBag />, desc: "High-conversion online stores with custom logic and payment integrations." },
    { name: "Real Estate", icon: <HomeIcon />, desc: "Interactive property listing platforms and automated lead tracking tools." },
    { name: "Finance", icon: <BarChart />, desc: "Fintech solutions including banking apps, investment portals, and analytics." },
    { name: "Education", icon: <GraduationCap />, desc: "Learning management systems and school administration software." },
    { name: "Startups", icon: <Rocket />, desc: "Rapid MVP development and scalable infrastructure for growing companies." }
  ];

  const processSteps = [
    { title: "Discovery", icon: <Search />, desc: "Consultation to understand your business goals and user needs." },
    { title: "Planning", icon: <FileText />, desc: "Detailed roadmap, architecture design, and tech stack selection." },
    { title: "Design", icon: <PenTool />, desc: "User-centric UI/UX design with high-fidelity prototypes." },
    { title: "Development", icon: <Code2 />, desc: "Clean coding with agile sprints and continuous integration." },
    { title: "Testing", icon: <ShieldCheck />, desc: "Rigorous quality assurance for security and performance." },
    { title: "Launch & Support", icon: <Rocket />, desc: "Seamless deployment followed by 24/7 dedicated monitoring." }
  ];

  const testimonials = [
    {
      name: "Rajesh Malhotra",
      role: "CEO, FinTech Solutions India",
      content: "Grewox transformed our legacy system into a high-performance cloud platform. Their technical depth and commitment to quality are unmatched.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      rating: 5
    },
    {
      name: "Ananya Sharma",
      role: "CTO, HealthSync Bharat",
      content: "Building HIPAA-compliant software was a challenge until we found Grewox. They understood the complexities and delivered a secure, scalable solution.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      rating: 5
    },
    {
      name: "Vikram Mehta",
      role: "Product Manager, ShopSphere",
      content: "The mobile app Grewox built for us saw a 40% increase in user engagement within the first month. Transparent process and excellent communication.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      rating: 5
    },
    {
      name: "Priya Iyer",
      role: "Founder, EduElevate",
      content: "Working with the Grewox team was a breath of fresh air. They are proactive, technically sound, and delivered well within our tight deadlines.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      rating: 5
    }
  ];

  const [activeAccordion, setActiveAccordion] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const technologies = [
    { name: "Generative AI", icon: <Cpu />, color: "text-[#412991]", isHighlighted: true },
    { name: "Deep Learning", icon: <Database />, color: "text-[#FF6F00]", isHighlighted: true },
    { name: "AI/ML", icon: <Cpu />, color: "text-[#00A4EF]", isHighlighted: true },
    { name: "React", icon: <Code2 />, color: "text-[#61DAFB]" },
    { name: "Next.js", icon: <Globe />, color: "text-primary-dark" },
    { name: "TypeScript", icon: <Code2 />, color: "text-[#3178C6]" },
    { name: "Node.js", icon: <Database />, color: "text-[#339933]" },
    { name: "Flutter", icon: <Smartphone />, color: "text-[#02569B]" },
    { name: "Laravel", icon: <Globe />, color: "text-[#FF2D20]" },
    { name: "Tailwind", icon: <PenTool />, color: "text-[#06B6D4]" },
    { name: "Python", icon: <Code2 />, color: "text-[#3776AB]" },
    { name: "MongoDB", icon: <Database />, color: "text-[#47A248]" },
    { name: "Firebase", icon: <Database />, color: "text-[#FFCA28]" },
    { name: "AWS", icon: <ShieldCheck />, color: "text-[#FF9900]" }
  ];

  const faqs = [
    {
      q: "What is the typical cost of development?",
      a: "Costs vary depending on project complexity. We provide transparent, value-based pricing and fixed-price or time-and-materials models to suit your budget."
    },
    {
      q: "How long does a typical project take?",
      a: "A standard MVP usually takes 8-12 weeks, while larger enterprise systems can span 6+ months. We focus on delivering high-impact features early through agile sprints."
    },
    {
      q: "Do you provide post-launch support?",
      a: "Yes, we offer various support packages including 24/7 monitoring, security updates, and performance optimization to ensure your software stays cutting-edge."
    },
    {
      q: "Which technologies do you specialize in?",
      a: "We are experts in React, Node.js, Flutter, Laravel, and Python for AI/ML. We always choose the best stack for your specific business needs."
    }
  ];

  return (
    <div className="overflow-hidden">
      <Hero />

      {/* Trust Badges Bar */}
      <div className="py-10 bg-surface-muted border-y border-surface-border">
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

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="text-accent-blue mb-2 flex justify-center">{stat.icon}</div>
                    <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-main">{stat.value}</div>
                    <div className="text-gray-500 text-sm font-medium mt-1 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
            ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-primary-card/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
                <SectionHeader 
                    align="left"
                    subtitle="Our Competitive Edge"
                    title="Why Partners Trust Grewox Infotech"
                    description="We don't just write code; we architect business solutions. Our commitment to excellence drives every decision we make."
                />
                <Link to="/about" className="inline-block w-full sm:w-auto mt-4">
                  <Button variant="outline" className="w-full">Learn More About Us</Button>
                </Link>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyChooseUs.map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-2xl bg-white/50 border border-gray-100 hover:border-accent-blue/30 transition-all flex flex-col h-full"
                    >
                        <div className="w-10 h-10 mb-4 flex items-center justify-center bg-white/50 rounded-lg shrink-0">
                            {item.icon}
                        </div>
                        <h4 className="font-bold text-base mb-2">{item.title}</h4>
                        <p className="text-gray-400 text-xs leading-relaxed flex-1">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white/50">
        <SectionHeader 
          subtitle="Our Expertise"
          title="Innovative Solutions for Modern Challenges"
          description="We provide a wide range of services designed to help your business stay ahead in the rapidly evolving digital landscape."
        />

        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-4 md:p-8 hover:border-accent-blue/50 transition-all group flex flex-col"
            >
              <div className="w-10 h-10 md:w-16 md:h-16 bg-accent-blue/10 rounded-xl md:rounded-2xl flex items-center justify-center text-accent-blue mb-4 md:mb-6 group-hover:bg-accent-blue group-hover:text-primary-dark transition-all">
                {service.icon}
              </div>
              <h3 className="text-sm md:text-xl font-bold mb-2 md:mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4 md:mb-6 text-[10px] md:text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                {service.desc}
              </p>
              <div className="mt-auto">
                <a href="/services" className="text-accent-blue font-semibold text-[10px] md:text-sm inline-flex items-center gap-1 md:gap-2 hover:gap-4 transition-all">
                  Learn More <MoveRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding relative">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />
        <SectionHeader 
          subtitle="Impact Across Sectors"
          title="Industries We Empower"
          description="We bring domain-specific expertise to solve unique challenges across diverse industries."
        />
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {industries.map((ind, i) => (
                <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-4 md:p-6 glass-card border-none bg-white hover:bg-surface-muted/70 transition-all"
                >
                    <div className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 flex items-center justify-center text-accent-blue bg-accent-blue/10 rounded-lg md:rounded-xl">
                        {ind.icon}
                    </div>
                    <h4 className="text-sm md:text-lg font-bold mb-2">{ind.name}</h4>
                    <p className="text-gray-400 text-[10px] md:text-xs leading-relaxed line-clamp-2 md:line-clamp-none">
                        {ind.desc}
                    </p>
                </motion.div>
            ))}
        </div>
      </section>

      {/* Process Section - Redesigned */}
      <section className="section-padding bg-primary-card/60 relative">
        <div className="absolute inset-0 bg-accent-blue/5 opacity-30" />
        <SectionHeader 
            subtitle="Execution Framework"
            title="How We Turn Ideas Into Reality"
            description="A systematic, outcome-oriented approach to building software that drives business growth."
        />
        <div className="max-w-7xl mx-auto relative px-6 md:px-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-4 md:gap-x-8">
                {processSteps.map((step, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative flex flex-col items-center text-center group"
                    >
                        {/* Circle & Icon */}
                        <div className="relative mb-4 md:mb-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/50 border border-gray-100 rounded-xl md:rounded-2xl flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-primary-dark transition-all duration-300 relative z-10 shadow-xl group-hover:shadow-accent-blue/20">
                                {React.cloneElement(step.icon, { size: 20 })}
                            </div>
                            {/* Step Number Badge */}
                            <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-6 h-6 md:w-7 md:h-7 bg-white border border-gray-100 rounded-full flex items-center justify-center text-[8px] md:text-[10px] font-black text-primary-dark z-20">
                                0{i + 1}
                            </div>
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-accent-blue/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Text */}
                        <div className="bg-white/50 p-3 md:p-4 rounded-xl border border-gray-50 group-hover:border-gray-100 transition-colors flex flex-col h-full w-full">
                            <h4 className="font-bold text-[11px] md:text-sm mb-1 md:mb-2">{step.title}</h4>
                            <p className="text-gray-500 text-[9px] md:text-[10px] leading-relaxed line-clamp-2 md:line-clamp-none group-hover:text-gray-400 transition-colors flex-1">
                                {step.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white/50 relative overflow-hidden">
        <SectionHeader 
            subtitle="Client Success Stories"
            title="What Our Partners Say"
            description="Our results speak for themselves. We pride ourselves on the long-term relationships we build with our clients."
        />
        <div className="max-w-7xl mx-auto relative px-6">
            {/* Desktop Marquee */}
            <div className="hidden md:block overflow-hidden relative">
                <motion.div 
                    animate={{ x: [0, -1200] }}
                    transition={{ 
                        duration: 30, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                    className="flex gap-8 w-max"
                >
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div 
                            key={i}
                            className="p-8 glass-card bg-white/40 relative flex flex-col h-full w-[350px] shrink-0"
                        >
                            <div className="flex text-yellow-400 mb-4 shrink-0">
                                {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <p className="text-gray-600 italic mb-6 text-sm flex-1">"{t.content}"</p>
                            <div className="flex items-center gap-3 mt-auto shrink-0">
                                <img 
                                    src={t.img} 
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-accent-blue/20"
                                />
                                <div>
                                    <h4 className="font-bold text-sm text-primary-dark">{t.name}</h4>
                                    <p className="text-xs text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary-light to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary-light to-transparent z-10 pointer-events-none" />
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden relative min-h-[300px] flex flex-col items-center">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentTestimonial}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="p-8 glass-card bg-white/40 border-accent-blue/20 relative flex flex-col w-full h-full"
                    >
                        <div className="flex text-yellow-400 mb-4">
                            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                        </div>
                        <p className="text-gray-600 italic mb-8 text-base leading-relaxed">"{testimonials[currentTestimonial].content}"</p>
                        <div className="flex items-center gap-4 mt-auto">
                            <img 
                                src={testimonials[currentTestimonial].img} 
                                alt={testimonials[currentTestimonial].name}
                                className="w-14 h-14 rounded-full object-cover border-2 border-accent-blue/30"
                            />
                            <div>
                                <h4 className="font-bold text-base text-primary-dark">{testimonials[currentTestimonial].name}</h4>
                                <p className="text-xs text-accent-blue/80 font-medium">{testimonials[currentTestimonial].role}</p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Pagination Dots */}
                <div className="flex gap-2 mt-8">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentTestimonial(i)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                currentTestimonial === i ? 'w-8 bg-accent-blue shadow-lg shadow-accent-blue/30' : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Technologies Section - Highlighted */}
      <section className="py-20 relative overflow-hidden bg-white/80">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-blue/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <SectionHeader 
              subtitle="Our Tech Stack"
              title="Technologies We Mastered"
              description="We leverage the latest tools and frameworks to build high-performance, scalable, and future-ready digital solutions."
            />
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                {technologies.map((tech, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -8, scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className={`flex flex-col items-center gap-4 w-[140px] md:w-[180px] p-8 glass-card bg-white transition-all group cursor-default relative
                            ${tech.isHighlighted ? 'border-accent-blue/40 bg-accent-blue/10 shadow-[0_0_20px_rgba(0,164,239,0.15)]' : 'border-gray-50'}
                        `}
                    >
                        {tech.isHighlighted && (
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-main text-primary-light text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg flex items-center gap-1 z-20 whitespace-nowrap">
                                <Star size={8} fill="currentColor" /> Elite
                            </span>
                        )}
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white/50 ${tech.color} group-hover:bg-white/10 transition-all shadow-lg ${tech.isHighlighted ? 'shadow-accent-blue/10 animate-pulse' : 'group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]'}`}>
                            {React.cloneElement(tech.icon, { size: 28 })}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wide text-gray-400 group-hover:text-primary-dark transition-colors text-center leading-tight">
                            {tech.name}
                        </span>
                    </motion.div>
                ))}
            </div>
            
           
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
            <SectionHeader 
                subtitle="Got Questions?"
                title="Frequently Asked Questions"
                description="Everything you need to know about our process, pricing, and technology stack."
            />
            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <div key={i} className="glass-card overflow-hidden border-gray-50 hover:border-gray-100 transition-colors">
                        <button 
                            onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                            className="w-full p-5 flex items-center justify-between text-left"
                        >
                            <span className="font-bold text-sm pr-4">{faq.q}</span>
                            {activeAccordion === i ? <Minus size={16} /> : <Plus size={16} />}
                        </button>
                        <AnimatePresence>
                            {activeAccordion === i && (
                                <motion.div 
                                    initial={{ height: 0 }}
                                    animate={{ height: 'auto' }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-gray-50 pt-4">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Call to Action Section - Upgraded */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-blue/5" />
        <div className="max-w-7xl mx-auto glass-card p-10 md:p-14 text-center relative overflow-hidden bg-gradient-to-br from-accent-blue/5 to-surface-muted border-accent-blue/20">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-accent-blue/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-accent-blueDark/15 rounded-full blur-[100px]" />
            
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-blueDark text-[10px] font-bold uppercase tracking-widest mb-6 border border-accent-blue/20">
                    <Rocket size={12} />
                    Start Your Project Today
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Let’s Build Something <br /> <span className="gradient-text">Amazing Together</span>
                </h2>
                <p className="text-gray-400 text-base md:text-lg mb-10 max-w-2xl mx-auto">
                    Transform your vision into reality with our elite engineering team. Faster time-to-market, business-focused solutions, and dedicated post-launch support.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                    <Link to="/contact" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full" showArrow={true}>
                            Get Started
                        </Button>
                    </Link>
                    <Link to="/contact" className="w-full sm:w-auto">
                        <Button variant="secondary" size="lg" className="w-full" showArrow={true}>
                            Contact Our Experts
                        </Button>
                    </Link>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-gray-100 opacity-60">
                    <div className="flex items-center gap-2 text-xs">
                        <CheckCircle size={14} className="text-green-500" />
                        Free Consultation
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                        <CheckCircle size={14} className="text-green-500" />
                        Fast Response
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                        <CheckCircle size={14} className="text-green-500" />
                        Business Focused
                    </div>
                </div>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
