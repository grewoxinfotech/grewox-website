import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import Button from '../components/Button';

/** Same host in production (Node serves `dist` + API). Dev: Vite proxies `/api` → backend :5000. */
const CONTACT_URL = '/api/contact';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(CONTACT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) {
        setStatus('error');
        return;
      }
      await response.json().catch(() => ({}));
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="pt-20 pb-20">
      <section className="px-6 py-12">
        <SectionHeader
          subtitle="Get In Touch"
          title="Let's Build Something Amazing Together"
          description="Have a question or a project idea? Reach out to us and we'll get back to you within 24 hours."
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="text-gray-400 text-sm max-w-sm">
                We're always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center text-accent-blue shrink-0 group-hover:bg-accent-blue group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-base">Email Us</h4>
                  <p className="text-gray-400 text-sm">grewoxinfotech@gmail.com</p>
                  {/* <p className="text-gray-400 text-sm">support@grewox.com</p> */}
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-accent-blueDark/10 rounded-xl flex items-center justify-center text-accent-blueDark shrink-0 group-hover:bg-accent-blueDark group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-base">Call Us</h4>
                  <p className="text-gray-400 text-sm">+91 96626 43079</p>
                  {/* <p className="text-gray-400 text-sm">+1 (555) 987-6543</p> */}
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center text-accent-blue shrink-0 group-hover:bg-accent-blue group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-base">Visit Us</h4>
                  <p className="text-gray-400 text-sm">Mota Varachha, Surat Gujarat, India</p>
                  {/* <p className="text-gray-400 text-sm">CA 94025, United States</p> */}
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="glass-card p-6 border-accent-blue/20 bg-accent-blue/5">
              <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                <MessageSquare className="text-green-500" size={18} />
                Quick Chat?
              </h4>
              <p className="text-gray-400 text-sm mb-4">Need a faster response? Reach out to us directly on WhatsApp.</p>
              <a
                href="https://wa.me/919662643079"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-primary-dark placeholder:text-gray-400 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-primary-dark placeholder:text-gray-400 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Phone Number (Optional)</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-primary-dark placeholder:text-gray-400 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all"
                  placeholder="+91 88888 88888"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Your Message</label>
                <textarea
                  name="message"
                  required
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-primary-dark placeholder:text-gray-400 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                variant={status === 'success' ? 'secondary' : 'primary'}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : status === 'success' ? (
                  'Message sent'
                ) : (
                  <>
                    Send Message <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">
                  Something went wrong. Email us at{' '}
                  <a href="mailto:grewoxinfotech@gmail.com" className="underline font-medium">
                    grewoxinfotech@gmail.com
                  </a>{' '}
                  or use WhatsApp.
                </p>
              )}
              {status === 'success' && (
                <p className="text-green-600 text-sm text-center">
                  Thanks — your message was sent to our team. We’ll get back to you soon.
                </p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Google Map Mockup */}
        <div className="max-w-7xl mx-auto mt-24 h-[400px] rounded-3xl overflow-hidden glass-card relative group">
          <div className="absolute inset-0 bg-primary-card/20 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
          <iframe
            title="Grewox — Mota Varachha, Surat"
            src="https://www.google.com/maps?q=Mota+Varachha,+Surat,+Gujarat+394101,+India&hl=en&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
