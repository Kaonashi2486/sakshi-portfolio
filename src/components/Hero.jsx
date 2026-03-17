import { motion } from 'framer-motion';
import { PROFILE } from '../data/portfolio';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] } },
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-glow-pulse"
          style={{ background: 'radial-gradient(circle, rgba(192,132,252,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full animate-glow-pulse"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)', filter: 'blur(40px)', animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.05) 0%, transparent 70%)', filter: 'blur(30px)' }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pt-24 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-6">
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-xs"
              style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.2)', color: '#22d3ee' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Mumbai, India
            </span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="font-display font-extrabold leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text">{PROFILE.name}</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="font-display text-xl font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>
              {PROFILE.title}
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="font-body text-lg font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '480px' }}>
              {PROFILE.bio}
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="font-mono text-sm" style={{ color: 'rgba(192,132,252,0.7)' }}>
              // {PROFILE.tagline}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-4 pt-2">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 rounded-full font-body font-medium text-sm text-white transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #9333ea, #06b6d4)', boxShadow: '0 0 30px rgba(147,51,234,0.3)' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 40px rgba(147,51,234,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 30px rgba(147,51,234,0.3)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              View My Work
            </button>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-body font-medium text-sm transition-all duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(192,132,252,0.4)'; e.currentTarget.style.color = '#c084fc'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
            >
              GitHub ↗
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-4 pt-1">
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.3)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#22d3ee'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
            >LinkedIn</a>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
            <a href={`mailto:${PROFILE.email}`}
              className="font-mono text-xs transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.3)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fb923c'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
            >Email</a>
          </motion.div>
        </motion.div>

        {/* Right: Floating Cyber Cat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
          className="relative flex flex-col items-center justify-center h-[500px] lg:h-[580px]"
        >
          {/* Ambient glow orb */}
          <div className="absolute animate-glow-pulse" style={{
            width: '380px', height: '380px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(192,132,252,0.18) 0%, rgba(34,211,238,0.08) 50%, transparent 75%)',
            filter: 'blur(25px)', top: '50%', left: '50%', transform: 'translate(-50%, -60%)',
          }} />

          {/* Floating cat */}
          <motion.div
            animate={{ y: [0, -22, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10"
            style={{ width: '320px', height: '320px' }}
          >
            <img
              src="/cyber_cat.png"
              alt="Cyber cat mascot"
              className="w-full h-full object-contain"
              style={{
                filter: 'drop-shadow(0 0 32px rgba(192,132,252,0.7)) drop-shadow(0 0 60px rgba(34,211,238,0.35)) drop-shadow(0 8px 24px rgba(0,0,0,0.5))',
              }}
            />
          </motion.div>

          {/* Ground shadow — breathes inverse to the float */}
          <motion.div
            animate={{ scaleX: [1, 0.65, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '180px', height: '22px', borderRadius: '50%',
              background: 'radial-gradient(ellipse, rgba(192,132,252,0.5) 0%, rgba(34,211,238,0.15) 50%, transparent 80%)',
              filter: 'blur(10px)',
              marginTop: '-8px',
            }}
          />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, rgba(192,132,252,0.5), transparent)' }}
        />
      </motion.div>
    </section>
  );
}
