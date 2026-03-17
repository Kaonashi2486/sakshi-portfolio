import { useState } from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../data/portfolio';
import { AchievementCard } from './Cards';
import Modal from './Modal';

export default function Experience() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="experience" className="relative py-32 px-8">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.05) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="font-mono text-xs" style={{ color: 'rgba(251,146,60,0.6)' }}>02.</span>
          <h2 className="font-display font-bold text-4xl text-white">Experience & Achievements</h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, rgba(251,146,60,0.3), transparent)' }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-body text-base mb-16 ml-8"
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          Click any card to read more.
        </motion.p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((item, i) => (
            <AchievementCard key={item.id} item={item} onClick={setSelected} index={i} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <Modal item={selected} type="achievement" onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
