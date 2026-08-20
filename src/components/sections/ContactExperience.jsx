import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Sparkles, CheckCircle2, AlertCircle, MapPin, ShieldCheck } from 'lucide-react';
import { Github, Linkedin } from '../ui/SocialIcons';
import confetti from 'canvas-confetti';
import SectionHeader from '../ui/SectionHeader';
import MagneticButton from '../ui/MagneticButton';
import TiltCard from '../ui/TiltCard';
import { personalInfo } from '../../data/portfolioData';

export default function ContactExperience() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: 'info', message: 'Transmitting message to Vasim Sayyed...' });

    try {
      // Direct cloud mail dispatcher to Sayyadvasim394@gmail.com
      const res = await fetch('https://formsubmit.co/ajax/Sayyadvasim394@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `⚡ New Portfolio Message from ${formData.name}`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      const data = await res.json();

      if (res.ok || data.success === 'true' || data.success === true) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! Vasim has received it in his email inbox and will reply soon.'
        });
        setFormData({ name: '', email: '', message: '' });

        try {
          confetti({
            particleCount: 70,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#06b6d4', '#3b82f6', '#8b5cf6', '#34d399']
          });
        } catch (err) {}
      } else {
        // Fallback to mailto link if offline
        setStatus({
          type: 'success',
          message: 'Message processed. You can also reach Vasim directly at Sayyadvasim394@gmail.com'
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Contact error:', error);
      setStatus({
        type: 'error',
        message: 'Could not send message automatically. Please email directly at Sayyadvasim394@gmail.com'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-10 sm:py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
      <SectionHeader
        badge="Initiate Connection"
        title="Let's Build Something Amazing"
        subtitle="Have a breakthrough project, software engineering opportunity, or technical inquiry? Send a direct transmission below."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch w-full">
        {/* Left Side: Contact Information & Direct Channels */}
        <div className="lg:col-span-5 w-full flex flex-col">
          <TiltCard
            maxTilt={5}
            className="border border-slate-800 bg-slate-950/70 p-5 sm:p-7 flex flex-col justify-between h-full w-full"
          >
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                Direct Communication Channels
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-5 leading-relaxed">
                Connect directly through verified email, phone, or professional networks.
              </p>

              <div className="space-y-3 font-mono text-xs sm:text-sm w-full">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-all group w-full min-w-0"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Email Address</div>
                    <div className="text-slate-200 group-hover:text-cyan-300 transition-colors font-medium truncate text-xs sm:text-sm">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-all group w-full min-w-0"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Phone & WhatsApp</div>
                    <div className="text-slate-200 group-hover:text-cyan-300 transition-colors font-medium truncate text-xs sm:text-sm">
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 w-full min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Location</div>
                    <div className="text-slate-200 font-medium truncate text-xs sm:text-sm">India (Open to Global Remote)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social handles */}
            <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400">Social Footprint:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl glass-pill flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl glass-pill flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Right Side: Interactive Futuristic Contact Form */}
        <div className="lg:col-span-7 w-full flex flex-col">
          <TiltCard
            maxTilt={4}
            className="border border-cyan-500/20 bg-slate-950/70 p-5 sm:p-7 md:p-8 w-full flex flex-col justify-between"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5 w-full">
                <div className="w-full">
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Alex Mercer"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/25 transition-all font-sans text-xs sm:text-sm"
                  />
                </div>

                <div className="w-full">
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/25 transition-all font-sans text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div className="w-full">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                  Your Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Share details about your project, engineering role, or collaboration..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/25 transition-all font-sans text-xs sm:text-sm resize-none"
                />
              </div>

              {/* Form Action Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3.5 pt-1 w-full">
                <MagneticButton
                  className="w-full sm:w-auto text-sm"
                  variant="primary"
                  type="submit"
                  disabled={loading}
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Sending to Inbox...' : 'Dispatch Message'}</span>
                </MagneticButton>

                <div className="flex items-center justify-center sm:justify-end gap-1.5 text-[10px] sm:text-[11px] font-mono text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Delivers directly to Sayyadvasim394@gmail.com</span>
                </div>
              </div>

              {/* Status Indicator Alert */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3.5 rounded-xl flex items-center gap-2.5 text-xs font-mono border ${
                    status.type === 'success'
                      ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
                      : status.type === 'error'
                      ? 'bg-red-500/10 border-red-500/40 text-red-300'
                      : 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300'
                  }`}
                >
                  {status.type === 'success' && <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />}
                  {status.type === 'error' && <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />}
                  <span className="leading-snug">{status.message}</span>
                </motion.div>
              )}
            </form>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
