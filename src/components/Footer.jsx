import { motion } from 'framer-motion';
import { PROFILE } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="relative py-20 px-8 overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(192,132,252,0.4), rgba(34,211,238,0.4), rgba(251,146,60,0.4), transparent)' }} />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48"
          style={{ background: 'radial-gradient(ellipse, rgba(192,132,252,0.06) 0%, transparent 70%)', filter: 'blur(30px)' }} />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center flex flex-col gap-3"
        >
          <h3 className="font-display font-bold text-3xl text-white">Let's build something.</h3>
          <p className="font-body text-base" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Open to full-time SDE roles. Based in Mumbai, open to remote.
          </p>
        </motion.div>

        {/* Email button */}
        <motion.a
          href={`mailto:${PROFILE.email}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="px-8 py-4 rounded-full font-body font-medium text-base text-white transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(147,51,234,0.3), rgba(6,182,212,0.3))',
            border: '1px solid rgba(192,132,252,0.3)',
            boxShadow: '0 0 30px rgba(147,51,234,0.15)',
          }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 50px rgba(147,51,234,0.3)'; e.currentTarget.style.borderColor = 'rgba(192,132,252,0.6)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 30px rgba(147,51,234,0.15)'; e.currentTarget.style.borderColor = 'rgba(192,132,252,0.3)'; }}
        >
          Say hello ↗
        </motion.a>

        {/* Links */}
        <div className="flex items-center gap-6">
          {[
            { label: 'GitHub', href: PROFILE.github },
            { label: 'LinkedIn', href: PROFILE.linkedin },
            { label: 'Email', href: `mailto:${PROFILE.email}` },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.3)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <p className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.15)' }}>
          built with React + Framer Motion + Spline · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
