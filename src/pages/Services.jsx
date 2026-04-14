import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Smartphone,
  Database,
  Cpu,
  PieChart,
  Building2,
  MoveRight,
  CheckCircle,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const services = [
  {
    icon: <Code2 size={28} />,
    title: 'Web Development',
    desc: 'Fast, scalable websites and web apps built with modern frameworks and conversion-first UX.',
  },
  {
    icon: <Smartphone size={28} />,
    title: 'Mobile App Development',
    desc: 'Cross-platform and native mobile apps with smooth performance, clean UI, and secure APIs.',
  },
  {
    icon: <Database size={28} />,
    title: 'CRM Development',
    desc: 'Custom CRM systems that organize leads, automate pipelines, and improve team productivity.',
  },
  {
    icon: <Cpu size={28} />,
    title: 'AI & Automation',
    desc: 'Smart workflows and AI-assisted features that reduce manual work and increase business speed.',
  },
  {
    icon: <PieChart size={28} />,
    title: 'Digital Marketing',
    desc: 'SEO, paid campaigns, and analytics-backed strategies focused on real growth and ROI.',
  },
  {
    icon: <Building2 size={28} />,
    title: 'Custom Software Development',
    desc: 'Tailored internal tools and enterprise software built around your unique operations.',
  },
];

const engagementModel = [
  'Transparent milestones and weekly updates',
  'Agile delivery with sprint-based planning',
  'Clean, maintainable, and documented code',
  'Security-first approach from day one',
];

const Services = () => {
  return (
    <div className="pt-20 pb-20 overflow-hidden">
      <section className="px-6 py-12 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-accent-blue/5 blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            subtitle="What We Offer"
            title="Services Built for Real Business Outcomes"
            description="From product strategy to launch and support, we deliver end-to-end technology services that help your business move faster."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <article
                key={service.title}
                className="glass-card p-6 md:p-8 border border-surface-border hover:border-accent-blue/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="glass-card p-8 md:p-10 bg-primary-card/40">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">
              How We Work With You
            </h2>
            <p className="text-gray-500 mb-6">
              Every project follows a clear process so your team always knows what is being built,
              why it matters, and when it will be delivered.
            </p>
            <div className="space-y-3">
              {engagementModel.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-600">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 md:p-10 border-accent-blue/20 bg-gradient-to-br from-accent-blue/5 to-surface-muted">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-3">
              Need a custom plan?
            </p>
            <h3 className="text-2xl font-bold text-primary-dark mb-3">
              Let&apos;s discuss your project goals
            </h3>
            <p className="text-gray-500 mb-8">
              Tell us your requirements and we will suggest the right stack, timeline, and delivery
              model for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" showArrow>
                Book Free Consultation
              </Button>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 font-semibold text-accent-blue hover:text-accent-blueDark transition-colors"
              >
                See Portfolio <MoveRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
