import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function Modal({ item, type, onClose }) {
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!item) return null;

  const isProject = type === 'project';

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        style={{ background: 'rgba(4,4,10,0.85)', backdropFilter: 'blur(16px)' }}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
          onClick={e => e.stopPropagation()}
          className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl flex flex-col"
          style={{ background: '#0f0f1a', border: '1px solid rgba(255,255,255,0.08)', boxShadow: `0 40px 80px rgba(0,0,0,0.6), 0 0 60px ${item.accentColor}15` }}
        >
          {/* Header */}
          <div className="relative p-8 pb-6">
            {/* Accent glow */}
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${item.accentColor}, transparent)` }} />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
            >
              ✕
            </button>

            {/* Icon / Title area */}
            <div className="flex items-start gap-4 pr-10">
              {!isProject && (
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${item.accentColor}15`, border: `1px solid ${item.accentColor}30` }}>
                  {item.type === 'trophy' ? '🏆' : item.type === 'award' ? '🥇' : item.type === 'internship' ? '💼' : '⚡'}
                </div>
              )}
              <div>
                <h2 className="font-display font-bold text-2xl text-white">{item.title}</h2>
                <p className="font-mono text-sm mt-1" style={{ color: item.accentColor }}>{item.subtitle}</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {item.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full font-mono text-xs"
                  style={{ background: `${item.accentColor}10`, color: `${item.accentColor}cc`, border: `1px solid ${item.accentColor}25` }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mx-8 h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />

          {/* Body */}
          <div className="p-8 pt-6 flex flex-col gap-6">
            {/* Description */}
            <div>
              <p className="font-mono text-xs mb-3" style={{ color: 'rgba(255,255,255,0.3)' }}>overview_</p>
              <p className="font-body text-base leading-relaxed whitespace-pre-line" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {item.fullDesc}
              </p>
            </div>

            {/* Highlights (projects only) */}
            {isProject && item.highlights && (
              <div>
                <p className="font-mono text-xs mb-3" style={{ color: 'rgba(255,255,255,0.3)' }}>highlights_</p>
                <ul className="flex flex-col gap-2">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.accentColor }} />
                      <span className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Links (projects) */}
            {isProject && (
              <div className="flex items-center gap-3 pt-2">
                {item.github && (
                  <a href={item.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-200"
                    style={{ background: `${item.accentColor}15`, border: `1px solid ${item.accentColor}35`, color: item.accentColor }}
                    onMouseEnter={e => e.currentTarget.style.background = `${item.accentColor}25`}
                    onMouseLeave={e => e.currentTarget.style.background = `${item.accentColor}15`}
                  >
                    GitHub ↗
                  </a>
                )}
                {item.live && (
                  <a href={item.live} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                  >
                    Youtube ↗
                  </a>
                )}
                {item.post && (
                  <a href={item.post} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                  >
                    Blog ↗
                  </a>
                )}
                {item.paper && (
                  <a href={item.paper} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                  >
                    Research Paper↗
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
