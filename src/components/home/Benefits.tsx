import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Building2, Users, Workflow, CheckCircle } from 'lucide-react';

type LucideIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface BenefitItemProps {
  title: string;
  Icon: LucideIcon;
  index: number;
}

function BenefitItem({ title, Icon, index }: BenefitItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.4, delay: 0.06 * index, ease: 'easeOut' }}
    >
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        perspective={900}
        transitionSpeed={1000}
        transitionEasing="cubic-bezier(.2,.7,.3,1)"
        gyroscope={false}
        glareEnable={false}
        trackOnWindow={false}
        reset
        className="
          group relative flex items-center gap-4 p-4
          rounded-xl border border-slate-100 bg-white
          shadow-[0_8px_24px_rgba(2,6,23,0.04)]
          hover:shadow-[0_16px_46px_rgba(2,6,23,0.10)]
        "
        style={{ willChange: 'transform', transformStyle: 'preserve-3d' }}
      >
        <div
          className="
            relative grid place-items-center w-12 h-12 rounded-xl
            ring-1 ring-black/5 overflow-hidden
          "
          style={{
            background:
              `conic-gradient(from 220deg at 50% 50%, rgba(5,128,232,0.16), rgba(5,128,232,0.05), rgba(5,128,232,0.16))`,
          }}
        >
          <div className="absolute inset-0 opacity-10" />
          <Icon className="relative w-6 h-6" style={{ color: '#0580E8' }} />
          <span
            className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ boxShadow: `0 0 0 2px #0580E822, 0 8px 20px #0580E833` }}
          />
        </div>

        <div className="flex-1" style={{ transform: 'translateZ(12px)' }}>
          <div className="text-[15px] font-semibold text-brand-dark tracking-[-0.01em]">{title}</div>
        </div>
      </Tilt>
    </motion.div>
  );
}

export function Benefits() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-wider text-[#065aa1] bg-[#e9f4ff] px-3 py-1 rounded-md mb-3">
              Why AIAM
            </div>

            <h2 className="mb-3 font-playfair tracking-tight text-3xl sm:text-4xl font-bold text-brand-dark">
              Power Your Business with AI Solutions
            </h2>

            <div
              className="h-[3px] w-24 mb-6"
              style={{ background: 'linear-gradient(90deg, #0580E8, rgba(5,128,232,0.2))' }}
            />

            <p className="text-[1.05rem] text-brand-dark/75 leading-relaxed mb-7">
              Whether you're looking to automate processes, enhance customer experiences, or leverage
              machine learning, AI Agency Marketplace connects you with the best AI agencies that can bring
              your vision to life.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Find the Right Agency', Icon: CheckCircle },
                { title: 'Tailored Solutions', Icon: Workflow },
                { title: 'Trusted Expertise', Icon: Users },
                { title: 'Seamless Collaboration', Icon: Building2 },
              ].map((item, i) => (
                <BenefitItem key={item.title} title={item.title} Icon={item.Icon} index={i} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.15)]">
              <motion.img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
                initial={{ scale: 1.06, filter: 'blur(6px) grayscale(100%) saturate(0.6) brightness(0.9)' }}
                whileInView={{ scale: 1, filter: 'blur(0px) grayscale(0%) saturate(1) brightness(1)' }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: 'linear-gradient(35deg, rgba(5,128,232,0.12) 0%, transparent 60%)' }}
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5" />
              <div className="pointer-events-none absolute inset-0 z-50">
                {Array.from({ length: 7 }).map((_, i) => {
                  const stripeHeight = 100 / 7;
                  return (
                    <motion.span
                      key={i}
                      initial={{ x: 0 }}
                      whileInView={{ x: '110%' }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.85, delay: 0.12 + i * 0.07, ease: 'easeInOut' }}
                      className="absolute left-0 w-full bg-white"
                      style={{ top: `calc(${i} * ${stripeHeight}%)`, height: `calc(${stripeHeight}% + 1px)` }}
                    />
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
