import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const projects = [
  {
    title: 'FinEdge CRM Suite',
    category: 'Custom CRM',
    result: '35% faster sales cycle',
    desc: 'We built a custom CRM with pipeline automation, reporting dashboards, and role-based access for a fintech client.',
  },
  {
    title: 'MediConnect Platform',
    category: 'Healthcare Web App',
    result: '50k+ monthly users',
    desc: 'A secure healthcare portal for appointments, e-prescriptions, and patient communication with scalable backend architecture.',
  },
  {
    title: 'ShopSprint Mobile',
    category: 'E-commerce App',
    result: '40% increase in repeat orders',
    desc: 'Cross-platform shopping app with personalized recommendations, smooth checkout, and real-time order tracking.',
  },
  {
    title: 'BuildTrack ERP',
    category: 'Enterprise Software',
    result: '28% reduction in operations cost',
    desc: 'Unified ERP system for a construction business, integrating procurement, inventory, workforce, and finance workflows.',
  },
  {
    title: 'EduPilot LMS',
    category: 'Education Platform',
    result: '3x learner engagement',
    desc: 'Modern learning management system with live classes, progress analytics, assessments, and instructor tools.',
  },
  {
    title: 'AutoFlow Support Bot',
    category: 'AI Automation',
    result: '60% fewer repetitive support tickets',
    desc: 'AI-enabled support workflow that classifies tickets, suggests responses, and routes issues to the right team.',
  },
];

const Portfolio = () => {
  return (
    <div className="pt-20 pb-20 overflow-hidden">
      <section className="px-6 py-12 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-accent-blue/5 blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            subtitle="Our Work"
            title="Portfolio That Reflects Measurable Impact"
            description="A snapshot of projects delivered across industries, focused on business value, performance, and long-term scalability."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="glass-card p-6 md:p-7 border border-surface-border hover:border-accent-blue/40 transition-all"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-primary-dark mb-3">{project.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{project.desc}</p>

                <div className="flex items-center gap-2 text-sm font-semibold text-green-600 mb-5">
                  <CheckCircle2 size={16} />
                  {project.result}
                </div>

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue">
                  Case study coming soon <ArrowUpRight size={16} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-5xl mx-auto glass-card p-8 md:p-12 text-center border-accent-blue/20 bg-gradient-to-br from-accent-blue/5 to-surface-muted">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-3">
            Have a project in mind?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Let&apos;s build your next success story
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Share your idea, business goals, and timeline. Our team will help you shape the right
            product roadmap and delivery plan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" showArrow>
              Start Your Project
            </Button>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-semibold text-accent-blue hover:text-accent-blueDark transition-colors"
            >
              Explore Services <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
