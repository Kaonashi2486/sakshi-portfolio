import { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/portfolio';
import { ProjectCard } from './Cards';
import Modal from './Modal';

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="relative py-32 px-8">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 w-72 h-72 -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)', filter: 'blur(50px)' }} />
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
          <span className="font-mono text-xs" style={{ color: 'rgba(34,211,238,0.6)' }}>03.</span>
          <h2 className="font-display font-bold text-4xl text-white">Projects</h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, rgba(34,211,238,0.3), transparent)' }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-body text-base mb-16 ml-8"
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          Things I've built. Click to explore.
        </motion.p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} onClick={setSelected} index={i} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <Modal item={selected} type="project" onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
