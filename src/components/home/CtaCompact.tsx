import { motion } from 'framer-motion';
import { SheenButton } from '../common/SheenButton';

export function CTACompact() {
  return (
    <section className="relative overflow-hidden text-white" style={{ backgroundColor: '#0580E8' }}>
      <style>{`
        @keyframes liquidMove { 0%{background-position:0% 40%,100% 60%,50% 50%} 50%{background-position:100% 60%,0% 40%,48% 52%} 100%{background-position:0% 40%,100% 60%,50% 50%} }
        @keyframes conicSweep { 0%{transform:translate(-50%,-50%) rotate(0deg) scale(1.05)} 100%{transform:translate(-50%,-50%) rotate(360deg) scale(1.05)} }
        @keyframes waveSlide { 0%{transform:translateX(-30%)} 100%{transform:translateX(30%)} }
        @keyframes grain {
          0%,100% { transform: translate(0,0); }
          10%  { transform: translate(-1%, 1%); }
          20%  { transform: translate(1%, -0.5%); }
          30%  { transform: translate(-0.5%, 1%); }
          40%  { transform: translate(1%, 0.5%); }
          50%  { transform: translate(-1%, -1%); }
          60%  { transform: translate(0.5%, 1%); }
          70%  { transform: translate(-1%, 0.5%); }
          80%  { transform: translate(1%, -1%); }
          90%  { transform: translate(-0.5%, -0.5%); }
        }
      `}</style>

      <div aria-hidden className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, rgba(0,24,56,0.55) 0%, rgba(0,24,56,0.38) 40%, rgba(0,24,56,0.30) 100%)',
        zIndex: 0,
      }} />
      <div aria-hidden className="absolute inset-0 opacity-95" style={{
        zIndex: 0,
        backgroundImage: `
          radial-gradient(42% 60% at 12% 18%, rgba(156,220,255,0.30) 0%, rgba(5,128,232,0.65) 45%, rgba(0,36,84,0.55) 80%, transparent 100%),
          radial-gradient(48% 58% at 88% 28%, rgba(140,210,255,0.25) 0%, rgba(5,128,232,0.60) 42%, rgba(0,36,84,0.55) 78%, transparent 100%),
          radial-gradient(60% 70% at 50% 85%, rgba(5,128,232,0.55) 0%, rgba(0,36,84,0.65) 55%, transparent 100%)
        `,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '140% 140%, 140% 140%, 160% 160%',
        animation: 'liquidMove 14s ease-in-out infinite',
        mixBlendMode: 'overlay',
      }} />
      <div aria-hidden className="absolute left-1/2 top-1/2 w-[120vmax] h-[120vmax] opacity-[0.28]" style={{
        zIndex: 0,
        backgroundImage:
          'conic-gradient(from 0deg, rgba(255,255,255,0.00) 0deg, rgba(255,255,255,0.35) 70deg, rgba(255,255,255,0.00) 120deg, rgba(255,255,255,0.30) 200deg, rgba(255,255,255,0.00) 260deg, rgba(255,255,255,0.35) 320deg, rgba(255,255,255,0.00) 360deg)',
        borderRadius: '50%',
        transform: 'translate(-50%,-50%)',
        animation: 'conicSweep 18s linear infinite',
        filter: 'blur(3px)',
        mixBlendMode: 'screen',
      }} />
      <div aria-hidden className="absolute left-1/2 top-1/2 w-[140%] h-[120%] opacity-[0.22] -rotate-6" style={{
        zIndex: 0,
        background: 'linear-gradient( to right, rgba(255,255,255,0.00) 0%, rgba(255,255,255,0.70) 50%, rgba(255,255,255,0.00) 100% )',
        maskImage: 'radial-gradient(60% 60% at 50% 50%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0) 100%)',
        transform: 'translate(-50%,-50%)',
        animation: 'waveSlide 6s ease-in-out infinite alternate',
        mixBlendMode: 'screen',
      }} />
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(120% 85% at 50% 50%, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.14) 70%, rgba(0,0,0,0.24) 100%)',
        zIndex: 1,
      }} />
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.12]" style={{
        zIndex: 2,
        backgroundImage:
          'url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%2780%27 height=%2780%27 viewBox=%270 0 80 80%27><filter id=%27n%27><feTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%272%27 stitchTiles=%27stitch%27/></filter><rect width=%2780%27 height=%2780%27 filter=%27url(%23n)%27 opacity=%270.7%27/></svg>")',
        backgroundSize: 'auto',
        mixBlendMode: 'overlay',
        animation: 'grain 6s steps(6) infinite',
      }} />

      <div className="relative z-[3] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          whileInView={{ opacity: 0.95, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="mx-auto mb-3 w-max text-[11px] font-medium uppercase tracking-wider text-white/90 bg-white/10 border border-white/25 rounded-md px-2.5 py-0.5 backdrop-blur"
        >
          Kickstart in Minutes
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-center font-playfair tracking-tight text-[clamp(1.6rem,3.4vw,2rem)] font-extrabold"
        >
          Ready to Get Started?
        </motion.h2>

        <div className="relative mx-auto mt-2 mb-6 h-[2px] w-28">
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="absolute inset-0 origin-left"
            style={{
              background:
                'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.55) 65%, transparent 100%)',
            }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.98 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center text-[1rem] sm:text-[1.05rem] leading-relaxed max-w-2xl mx-auto"
        >
          Find a trusted AI partner or grow your agency’s reach—AI Agency Marketplace (AIAM) is your gateway to success.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
          className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5"
        >
          <SheenButton to="/post-project" variant="white">Post Your Project</SheenButton>
          <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.2 }}>
            <SheenButton to="/register" variant="outlineWhite">Join the Network</SheenButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
