import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Smartphone, Database, Cpu, 
  Sparkles, CheckCircle2 
} from 'lucide-react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [text, setText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);
  const [typingSpeed, setTypingSpeed] = React.useState(150);

  const words = ["Web Apps", "Mobile Apps", "CRM Systems", "AI Solutions"];

  React.useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const floatingCards = [
    {
      title: "Web Development",
      icon: <Code2 size={20} />,
      color: "from-[#426dd4] to-[#2563eb]",
      delay: 0,
    },
    {
      title: "Mobile Apps",
      icon: <Smartphone size={20} />,
      color: "from-accent-blue to-[#426dd4]",
      delay: 0.5,
    },
    {
      title: "CRM Systems",
      icon: <Database size={20} />,
      color: "from-[#2563eb] to-accent-blue",
      delay: 1,
    },
    {
      title: "AI Automation",
      icon: <Cpu size={20} />,
      color: "from-accent-blue to-[#1e40af]",
      delay: 1.5,
    }
  ];

  return (
    <section className="relative min-h-[70vh] flex items-center pt-28 pb-10 overflow-hidden bg-primary-light">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/5 blur-[120px] rounded-full animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100">
            <Sparkles size={14} className="text-accent-blue" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Innovation for the Modern Era</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black mb-4 leading-[1.2] tracking-tight min-h-[1.2em]">
            Architecting <span className="text-gradient-main">{text}</span>
            <span className="inline-block w-[3px] h-[0.7em] bg-accent-blue ml-1 animate-pulse" />
          </h1>
          <h2 className="text-lg md:text-xl font-bold text-gray-500 mb-6">
            Digital Solutions for Modern Businesses
          </h2>
          
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl font-medium">
            We build scalable web, mobile, and AI-powered solutions that help modern businesses dominate their markets with technical excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full" showArrow={true}>
                Get Started
              </Button>
            </Link>
            <Link to="/portfolio" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full">
                View Portfolio
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 pt-8 border-t border-gray-100">
             <div className="flex items-center gap-2 opacity-80">
                <CheckCircle2 size={16} className="text-accent-blue shrink-0" />
                <span className="text-xs font-bold text-gray-600">6+ Years Trust</span>
             </div>
             <div className="flex items-center gap-2 opacity-80">
                <CheckCircle2 size={16} className="text-accent-blue shrink-0" />
                <span className="text-xs font-bold text-gray-600">100+ Projects</span>
             </div>
             <div className="flex items-center gap-2 opacity-80 whitespace-nowrap">
                <CheckCircle2 size={16} className="text-accent-blue shrink-0" />
                <span className="text-xs font-bold text-gray-600">50+ Global Clients</span>
             </div>
             <div className="flex items-center gap-2 opacity-80">
                <CheckCircle2 size={16} className="text-accent-blue shrink-0" />
                <span className="text-xs font-bold text-gray-600">10+ Experts</span>
             </div>
          </div>
        </motion.div>

        {/* Right Side: Animated Visual */}
        <div className="relative h-[500px] hidden lg:flex items-center justify-center">
          {/* Main Visual Elements */}
          <div className="relative w-full max-w-md aspect-square">
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -20, 0],
                  x: [0, 10, 0]
                }}
                transition={{ 
                  opacity: { delay: i * 0.2, duration: 0.5 },
                  scale: { delay: i * 0.2, duration: 0.5 },
                  y: { repeat: Infinity, duration: 4, delay: i * 0.5, ease: "easeInOut" },
                  x: { repeat: Infinity, duration: 6, delay: i * 0.5, ease: "easeInOut" }
                }}
                className={`absolute p-6 bg-white border border-gray-100 flex flex-col items-center gap-4 w-48 shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-accent-blue/30 transition-all rounded-2xl cursor-default`}
                style={{
                  top: i === 0 || i === 1 ? '10%' : '50%',
                  left: i === 0 || i === 2 ? '0%' : '50%',
                  zIndex: 10 + i
                }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white shadow-lg`}>
                  {card.icon}
                </div>
                <h3 className="text-sm font-black tracking-tight text-primary-dark">{card.title}</h3>
                <div className="w-10 h-1 bg-gray-100 rounded-full" />
              </motion.div>
            ))}

            {/* Background Decorative Circles */}
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-full h-full border border-accent-blue/5 rounded-full animate-spin-slow" />
               <div className="absolute w-[80%] h-[80%] border border-accent-blue/10 rounded-full animate-spin-reverse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
