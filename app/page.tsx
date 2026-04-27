'use client';

import { motion } from 'framer-motion';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Focus', href: '#focus' },
  { label: 'Contact', href: '#contact' }
];

const stats = [
  { label: 'Top Ranking', value: 'Top 5%' },
  { label: 'GPA', value: '3.79 / 4.0' },
  { label: 'Scholarships', value: '3 First-Class' },
  { label: 'Users Tested', value: '120+' },
  { label: 'Research Samples', value: '248+' },
  { label: 'Real Interviews', value: '30+' }
];

const projects = [
  {
    title: 'MindScape',
    description:
      'AI-powered multimodal emotional healing system for Gen Z using music generation, visual generation, and user experiments.',
    tags: ['AI Product', 'Emotion Design', 'User Testing']
  },
  {
    title: 'Speak Project',
    description:
      'Women’s health public campaign for Bayer competition with integrated research, branding, and social growth strategy.',
    tags: ['Campaign Strategy', 'Branding', 'Social Growth']
  },
  {
    title: 'Relationship Coping Research',
    description:
      'Latent Profile Analysis in R to identify behavioral patterns and transition dynamics in relationships.',
    tags: ['Behavioral Research', 'R', 'Data Analysis']
  }
];

const strengths = [
  'Human Insight',
  'AI Fluency',
  'Product Thinking',
  'Data Analysis',
  'Taste & Communication',
  'Execution Power'
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-white via-white to-slate-50 text-ink">
      <div className="pointer-events-none fixed left-1/2 top-24 z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-300/20 blur-3xl" />

      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-lg">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#hero" className="text-sm font-semibold tracking-[0.2em] text-slate-900">
            SHERRY DING
          </a>
          <ul className="hidden gap-8 text-sm text-slate-700 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="transition hover:text-accent" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section id="hero" className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col justify-center px-6 pb-24 pt-20">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-sm uppercase tracking-[0.28em] text-slate-500"
        >
          Applied Psychology Student · AI Product Explorer · Researcher · Builder
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-slate-950 md:text-7xl"
        >
          Sherry Ding
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 max-w-2xl text-xl text-slate-700 md:text-2xl"
        >
          Understanding people. Building the future.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-3 text-lg text-slate-500"
        >
          Psychology × AI × Human Potential
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#projects" className="rounded-full bg-slate-950 px-7 py-3 text-sm font-medium text-white transition hover:bg-accent">
            View Work
          </a>
          <a href="#contact" className="rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-medium text-slate-800 transition hover:border-accent hover:text-accent">
            Contact Me
          </a>
        </motion.div>
      </section>

      <section id="about" className="mx-auto w-full max-w-6xl px-6 py-24">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={reveal} transition={{ duration: 0.6 }}>
          <p className="section-label">About</p>
          <h2 className="section-title">A globally minded builder blending science, empathy, and systems thinking.</h2>
          <div className="prose-text mt-8 max-w-3xl space-y-5">
            <p>
              I study psychology, build with AI, and care deeply about how technology can improve real human lives.
            </p>
            <p>
              With a background in behavioral science, research, and product thinking, I explore the intersection of emotion, decision-making, and intelligent systems.
            </p>
            <p>
              I am especially interested in future work, mental wellbeing, and human-centered AI.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{ duration: 0.6 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {stats.map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-premium">
              <p className="text-3xl font-semibold text-slate-900">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
            </article>
          ))}
        </motion.div>
      </section>

      <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-24">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={reveal} transition={{ duration: 0.6 }}>
          <p className="section-label">Featured Projects</p>
          <h2 className="section-title">Research-backed products and narratives designed for real impact.</h2>
        </motion.div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.1, duration: 0.55 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-premium transition"
            >
              <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
              <p className="mt-4 text-slate-600">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={reveal} transition={{ duration: 0.6 }}>
          <p className="section-label">What I Bring</p>
          <h2 className="section-title">Cross-disciplinary capability with premium execution standards.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((item) => (
              <article key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6">
                <div className="mb-4 h-2 w-12 rounded-full bg-accent/70" />
                <p className="text-lg font-medium text-slate-900">{item}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="focus" className="mx-auto w-full max-w-6xl px-6 py-24">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={reveal} transition={{ duration: 0.6 }}>
          <p className="section-label">Current Focus</p>
          <div className="mt-8 grid gap-4 text-lg text-slate-700 md:grid-cols-2">
            <p>— AI-native products</p>
            <p>— Future of work</p>
            <p>— Human behavior in digital systems</p>
            <p>— Building meaningful things early</p>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-24 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-medium italic leading-relaxed text-slate-900 md:text-4xl"
        >
          “Life is not about waiting for the storm to pass, it&apos;s about learning to dance in the rain.”
        </motion.blockquote>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={reveal} transition={{ duration: 0.6 }} className="rounded-3xl border border-slate-200 bg-white p-10 shadow-premium">
          <p className="section-label">Contact</p>
          <h2 className="section-title mt-3">Let&apos;s build something meaningful.</h2>
          <p className="mt-6 text-slate-700">Shanghai / China</p>
          <a className="mt-2 inline-block text-lg font-medium text-accent hover:underline" href="mailto:10223330407@stu.ecnu.edu.cn">
            10223330407@stu.ecnu.edu.cn
          </a>
          <div className="mt-6 flex gap-4 text-sm text-slate-600">
            <a href="#" className="underline-offset-4 hover:text-accent hover:underline">
              LinkedIn
            </a>
            <a href="#" className="underline-offset-4 hover:text-accent hover:underline">
              GitHub
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
