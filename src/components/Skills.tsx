import React, { useState } from 'react';
import { SkillCategory, Project } from '../types/portfolio';
import { Search, Code2, Database, Layout, Cpu, Layers, Check } from 'lucide-react';

interface SkillsProps {
  categories: SkillCategory[];
  projects: Project[];
}

export const Skills: React.FC<SkillsProps> = ({ categories, projects }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [highlightedSkill, setHighlightedSkill] = useState<string | null>(null);

  // Flatten all skills for quick search and counting
  const allSkills = categories.flatMap((c) => c.skills.map((s) => ({ ...s, categoryName: c.name })));

  const filteredCategories = categories.map((cat) => {
    return {
      ...cat,
      skills: cat.skills.filter((skill) => {
        const matchesCat = activeCategory === 'All' || cat.name === activeCategory;
        const matchesQuery = searchQuery === '' || 
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesQuery;
      })
    };
  }).filter((cat) => cat.skills.length > 0);

  // Find projects that use the highlighted skill
  const relatedProjects = highlightedSkill
    ? projects.filter((p) =>
        p.technologies.some((t) => t.toLowerCase() === highlightedSkill.toLowerCase())
      )
    : [];

  const getCategoryIcon = (name: string) => {
    if (name.includes('Languages')) return <Code2 className="w-4 h-4 text-neutral-400" />;
    if (name.includes('Frontend')) return <Layout className="w-4 h-4 text-neutral-400" />;
    if (name.includes('Backend')) return <Cpu className="w-4 h-4 text-neutral-400" />;
    return <Database className="w-4 h-4 text-neutral-400" />;
  };

  return (
    <section id="skills" className="py-20 border-b border-neutral-900 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-2">
              Technical Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
              03. Technical Matrix &amp; Stack
            </h2>
          </div>

          {/* Interactive Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack (e.g. Go, React)..."
              className="w-full bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 rounded-lg pl-9 pr-3 py-2 focus:outline-none focus:border-neutral-600 transition-colors font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white text-xs font-mono"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs (Interactive functional buttons) */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-neutral-900 pb-4">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
              activeCategory === 'All'
                ? 'bg-neutral-100 text-neutral-950 font-semibold'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            All Competencies ({allSkills.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                activeCategory === cat.name
                  ? 'bg-neutral-100 text-neutral-950 font-semibold'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Interactive Skill Category Blocks */}
        <div className="space-y-10">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12 border border-neutral-900 rounded-2xl bg-neutral-950">
              <p className="text-neutral-400 text-sm">No skills found matching &quot;{searchQuery}&quot;</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-3 text-xs text-neutral-300 underline"
              >
                Reset filter
              </button>
            </div>
          ) : (
            filteredCategories.map((category) => (
              <div key={category.name} className="space-y-4">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-neutral-200 font-display">
                  {getCategoryIcon(category.name)}
                  <span>{category.name}</span>
                  <span className="text-neutral-600 font-mono text-xs font-normal">
                    ({category.skills.length})
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill) => {
                    const isSelected = highlightedSkill === skill.name;
                    return (
                      <div
                        key={skill.name}
                        onClick={() => setHighlightedSkill(isSelected ? null : skill.name)}
                        className={`p-4 rounded-xl border transition-all duration-150 cursor-pointer text-left space-y-2 group ${
                          isSelected
                            ? 'bg-neutral-900 border-neutral-600 text-white shadow-md'
                            : 'bg-neutral-950/80 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/60'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="font-semibold text-sm text-neutral-100 group-hover:text-white font-mono">
                            {skill.name}
                          </div>
                          <span className="text-[11px] font-mono text-neutral-400 tabular-nums">
                            {skill.experienceYears}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                          <span className="text-neutral-400">{skill.level}</span>
                          <span aria-hidden="true">·</span>
                          <span className="text-neutral-400">Production</span>
                        </div>

                        <p className="text-xs text-neutral-400 font-sans leading-relaxed pt-1">
                          {skill.description}
                        </p>

                        <div className="text-[11px] font-mono text-neutral-500 pt-1 group-hover:text-neutral-400 flex items-center justify-between">
                          <span>Click to see projects</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Skill-Project Connection Drawer if a skill is selected */}
        {highlightedSkill && (
          <div className="mt-8 p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Projects Powered by {highlightedSkill}
                </div>
                <div className="text-sm font-semibold text-white">
                  Found {relatedProjects.length} application{relatedProjects.length === 1 ? '' : 's'} in portfolio
                </div>
              </div>

              <button
                onClick={() => setHighlightedSkill(null)}
                className="text-xs text-neutral-400 hover:text-white font-mono"
              >
                Dismiss
              </button>
            </div>

            {relatedProjects.length === 0 ? (
              <p className="text-xs text-neutral-400 italic">
                {highlightedSkill} is leveraged across private microservices and operational infrastructure.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                {relatedProjects.map((proj) => (
                  <a
                    key={proj.id}
                    href="#projects"
                    className="p-3 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-colors text-xs space-y-1 block"
                  >
                    <div className="font-semibold text-neutral-200">{proj.title}</div>
                    <div className="text-neutral-500 line-clamp-1">{proj.subtitle}</div>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
