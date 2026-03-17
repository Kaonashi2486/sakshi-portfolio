import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SKILLS = [
  { label: 'Python', color: '#c084fc' },
  { label: 'React', color: '#22d3ee' },
  { label: 'Node.js', color: '#fb923c' },
  { label: 'Flask', color: '#c084fc' },
  { label: 'Docker', color: '#22d3ee' },
  { label: 'AWS EC2', color: '#fb923c' },
  { label: 'MongoDB', color: '#c084fc' },
  { label: 'MySQL', color: '#22d3ee' },
  { label: 'Redis', color: '#fb923c' },
  { label: 'Socket.io', color: '#c084fc' },
  { label: 'CI/CD', color: '#22d3ee' },
  { label: 'Linux', color: '#fb923c' },
  { label: 'REST APIs', color: '#c084fc' },
  { label: 'Machine Learning', color: '#22d3ee' },
  { label: 'Java', color: '#fb923c' },
  { label: 'Git', color: '#c084fc' },
];

function SkillPill({ label, color, delay }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
      className="px-3 py-1.5 rounded-full font-mono text-xs font-medium"
      style={{
        background: `${color}12`,
        border: `1px solid ${color}30`,
        color: color,
      }}
    >
      {label}
    </motion.span>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative py-32 px-8">
      {/* Section label */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs" style={{ color: 'rgba(192,132,252,0.6)' }}>01.</span>
          <h2 className="font-display font-bold text-4xl text-white">About Me</h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, rgba(192,132,252,0.3), transparent)' }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-2xl p-8 flex flex-col gap-5"
              style={{ background: 'rgba(19,19,31,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}>

              {/* Cat emoji card */}
              <div className="flex items-center gap-3">
                <span className="text-3xl">🐱</span>
                <p className="font-mono text-sm" style={{ color: 'rgba(192,132,252,0.7)' }}>
                  // I code for fun. Also: cats.
                </p>
              </div>

              <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                I'm a final-year B.Tech IT student at <span style={{ color: '#22d3ee' }}>DJSCE, Mumbai</span> with a CGPA of 9.05, graduating in 2026.
                I specialize in full-stack development, AI/ML systems, and DevOps — and I genuinely enjoy all three.
              </p>

              <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                I won <span style={{ color: '#fb923c' }}>Smart India Hackathon 2024</span> at the national level with UDAAN, an AI platform for student dropout prevention.
                I've competed in 6+ hackathons, interned at <span style={{ color: '#c084fc' }}>C-DAC</span>, and ranked in the{' '}
                <span style={{ color: '#22d3ee' }}>top 2%</span> in Amazon ML Challenge 2025.
              </p>

              <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                I'm interested in building AI-native products that solve real problems — and I'm currently open to full-time SDE roles.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { value: '9.05', label: 'CGPA', color: '#c084fc' },
                  { value: '6+', label: 'Hackathons', color: '#22d3ee' },
                  { value: 'Top 2%', label: 'Amazon ML', color: '#fb923c' },
                ].map(({ value, label, color }) => (
                  <div key={label} className="flex flex-col items-center gap-1 p-3 rounded-xl"
                    style={{ background: `${color}08`, border: `1px solid ${color}20` }}>
                    <span className="font-display font-bold text-xl" style={{ color }}>{value}</span>
                    <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl p-8"
              style={{ background: 'rgba(19,19,31,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <p className="font-display font-semibold text-lg text-white mb-6">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill, i) => (
                  <SkillPill key={skill.label} {...skill} delay={i * 0.04} />
                ))}
              </div>

              {/* Currently section */}
              <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <p className="font-mono text-xs mb-3" style={{ color: 'rgba(255,255,255,0.3)' }}>currently_</p>
                <div className="flex flex-col gap-2">
                  {[
                    { dot: '#22d3ee', text: 'Final year at DJSCE, Mumbai' },
                    { dot: '#c084fc', text: 'Building AI-powered products' },
                    { dot: '#fb923c', text: 'Open to SDE roles' },
                  ].map(({ dot, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: dot }} />
                      <span className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
