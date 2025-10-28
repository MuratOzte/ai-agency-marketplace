import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Building2, Users, Workflow } from 'lucide-react';

export function HowItWorks() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark/5">
            <div className="max-w-7xl mx-auto text-center relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6 font-playfair tracking-tight">
                    Simple, Transparent, and Efficient
                </h2>

                <div className="relative">
                    {/* bağlantı çizgisi */}
                    <motion.div
                        initial={{ width: '0%' }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{
                            duration: 1.1,
                            ease: 'easeInOut',
                            delay: 0.15,
                        }}
                        className="hidden md:block absolute top-[120px] left-0 right-0 h-[2px] mx-12"
                        style={{
                            background:
                                'linear-gradient(90deg, #0580E8, transparent)',
                        }}
                    />

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Building2 className="h-8 w-8" />,
                                title: 'Post Your Project or Service',
                                description:
                                    'Start by creating a detailed project listing or service profile.',
                            },
                            {
                                icon: <Users className="h-8 w-8" />,
                                title: 'Get Matched',
                                description:
                                    'Our intelligent algorithm connects you with the best agencies based on your needs.',
                            },
                            {
                                icon: <Workflow className="h-8 w-8" />,
                                title: 'Collaborate and Succeed',
                                description:
                                    'Work directly with agencies, track progress, and manage your project on our platform.',
                            },
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    rotateX: -2,
                                    filter: 'blur(6px)',
                                }}
                                whileInView={{
                                    opacity: 1,
                                    rotateX: 0,
                                    filter: 'blur(0px)',
                                }}
                                viewport={{ once: true, amount: 0.45 }}
                                transition={{
                                    duration: 0.55,
                                    ease: 'easeOut',
                                    delay: index * 0.08,
                                }}
                            >
                                {/* Sadece hover’da tilt; trackOnWindow=false, reset=true */}
                                <Tilt
                                    tiltMaxAngleX={10}
                                    tiltMaxAngleY={10}
                                    perspective={900}
                                    transitionSpeed={1000}
                                    transitionEasing="cubic-bezier(.2,.7,.3,1)"
                                    trackOnWindow={false}
                                    gyroscope={false}
                                    glareEnable={false}
                                    reset={true}
                                    className="
                    group relative bg-white px-8 pt-8 pb-10
                    rounded-2xl border border-slate-100
                    shadow-[0_10px_30px_rgba(2,6,23,0.05)]
                    hover:shadow-[0_18px_60px_rgba(2,6,23,0.10)]
                    min-h-[240px]
                  "
                                    style={{
                                        willChange: 'transform',
                                        transformStyle: 'preserve-3d',
                                    }}
                                >
                                    {/* numara rozeti */}
                                    <div
                                        className="absolute -top-4 -left-4 w-10 h-10 rounded-xl grid place-items-center text-white text-sm font-semibold shadow-lg"
                                        style={{
                                            background:
                                                'linear-gradient(135deg, #0580E8 0%, #75B9F2 100%)',
                                        }}
                                    >
                                        {index + 1}
                                    </div>

                                    {/* ikon alanı */}
                                    <div
                                        className="
                      relative w-14 h-14 rounded-2xl grid place-items-center mb-5
                      ring-1 ring-black/5 overflow-hidden
                    "
                                        style={{
                                            background:
                                                'conic-gradient(from 220deg at 50% 50%, rgba(5,128,232,0.18), rgba(5,128,232,0.06), rgba(5,128,232,0.18))',
                                            transform: 'translateZ(14px)',
                                        }}
                                    >
                                        <span className="text-[color:rgb(5,128,232)]">
                                            {step.icon}
                                        </span>
                                    </div>

                                    <h3
                                        className="text-[1.125rem] sm:text-[1.25rem] font-semibold font-playfair text-brand-dark tracking-[-0.01em] leading-snug"
                                        style={{
                                            transform: 'translateZ(16px)',
                                        }}
                                    >
                                        {step.title}
                                    </h3>
                                    <p
                                        className="mt-2 text-[0.98rem] leading-relaxed text-slate-600"
                                        style={{
                                            transform: 'translateZ(10px)',
                                        }}
                                    >
                                        {step.description}
                                    </p>
                                </Tilt>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
