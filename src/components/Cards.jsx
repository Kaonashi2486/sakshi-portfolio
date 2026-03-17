import { motion } from 'framer-motion';

const TYPE_ICONS = {
  trophy: '🏆',
  award: '🥇',
  internship: '💼',
  hack: '⚡',
};

export function ProjectCard({ project, onClick, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={() => onClick(project)}
      className="card-hover rounded-2xl overflow-hidden cursor-pointer"
      style={{ background: 'rgba(19,19,31,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.accentColor}15 0%, rgba(8,8,16,0.8) 100%)` }}>

        {project.thumbnail ? (
          <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover opacity-80" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-display font-bold text-2xl"
                style={{ background: `${project.accentColor}20`, border: `1px solid ${project.accentColor}40`, color: project.accentColor }}>
                {project.title[0]}
              </div>
              <div className="absolute inset-0 rounded-2xl animate-glow-pulse"
                style={{ background: `radial-gradient(circle, ${project.accentColor}15, transparent)` }} />
            </div>
          </div>
        )}

        {/* Tag strip */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded font-mono text-xs"
              style={{ background: 'rgba(8,8,16,0.8)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3">
        <div>
          <h3 className="font-display font-bold text-lg text-white">{project.title}</h3>
          <p className="font-mono text-xs mt-0.5" style={{ color: project.accentColor }}>{project.subtitle}</p>
        </div>
        <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
          {project.shortDesc}
        </p>
        <div className="flex items-center gap-1 mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
          <span className="font-mono text-xs">View details</span>
          <span className="text-xs">→</span>
        </div>
      </div>
    </motion.div>
  );
}

export function AchievementCard({ item, onClick, index }) {
  const icon = TYPE_ICONS[item.type] || '★';
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={() => onClick(item)}
      className="card-hover rounded-2xl overflow-hidden cursor-pointer"
      style={{ background: 'rgba(19,19,31,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Header strip */}
      <div className="h-2 w-full"
        style={{ background: `linear-gradient(90deg, ${item.accentColor}, transparent)` }} />

      <div className="p-6 flex flex-col gap-4">
        {/* Icon + year */}
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
            style={{ background: `${item.accentColor}12`, border: `1px solid ${item.accentColor}25` }}>
            {icon}
          </div>
          <span className="font-mono text-xs px-2 py-1 rounded-full"
            style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.3)' }}>
            {item.year}
          </span>
        </div>

        {/* Text */}
        <div>
          <h3 className="font-display font-bold text-base text-white leading-tight">{item.title}</h3>
          <p className="font-mono text-xs mt-1" style={{ color: item.accentColor }}>{item.subtitle}</p>
        </div>

        <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
          {item.shortDesc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 pt-1">
          {item.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded font-mono text-xs"
              style={{ background: `${item.accentColor}10`, color: `${item.accentColor}cc`, border: `1px solid ${item.accentColor}20` }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
