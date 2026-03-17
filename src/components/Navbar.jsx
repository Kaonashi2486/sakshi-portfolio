import { motion } from 'framer-motion';
import { PROFILE } from '../data/portfolio';

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      style={{ backdropFilter: 'blur(12px)', background: 'rgba(8,8,16,0.7)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
    >
      {/* Logo */}
      <button onClick={() => scrollTo('hero')} className="font-display font-bold text-xl tracking-tight gradient-text">
        sakshi<span className="text-white/20">.</span>
      </button>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-8">
        {[['About', 'about'], ['Experience', 'experience'], ['Projects', 'projects']].map(([label, id]) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="font-body text-sm text-white/50 hover:text-white transition-colors duration-200 tracking-wide"
          >
            {label}
          </button>
        ))}
      </div>

      {/* CTA */}
      <a
        href={`mailto:${PROFILE.email}`}
        className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-200"
        style={{ background: 'rgba(192,132,252,0.1)', border: '1px solid rgba(192,132,252,0.25)', color: '#c084fc' }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(192,132,252,0.18)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(192,132,252,0.1)'; }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        Available
      </a>
    </motion.nav>
  );
}
