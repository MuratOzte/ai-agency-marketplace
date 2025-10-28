import { motion, useScroll, useTransform } from 'framer-motion';
import { SheenButton } from '../common/SheenButton';

interface HeroProps {
    isVisible: boolean;
}

export function Hero({ isVisible }: HeroProps) {
    const { scrollY } = useScroll();
    const titleY = useTransform(scrollY, [0, 800], [0, 60]);
    const descY = useTransform(scrollY, [0, 800], [0, 80]);
    const buttonsY = useTransform(scrollY, [0, 800], [0, 100]);
    const blobsY = useTransform(scrollY, [0, 800], [0, 140]);

    const titleDelay = 0.05;
    const btnDelay = 0.38;

    return (
        <header className="relative min-h-screen flex items-center overflow-hidden">
            {/* BG */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "url('https://www.insightvacations.com/wp-content/uploads/2023/01/mike-c-valdivia-kZokA2VTKn4-unsplash.jpg')",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    transform: 'scale(1.06)',
                }}
                aria-hidden
            />
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(135deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.28) 55%, rgba(0,0,0,0.22) 100%)',
                    }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.22)_85%)]" />
            </div>

            {/* Soft blobs */}
            <motion.div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ y: blobsY }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 0.9, scale: 1 }}
                    transition={{ duration: 1.0, delay: 0.2 }}
                    className="absolute w-64 h-64 rounded-full blur-3xl -top-24 -left-24"
                    style={{ backgroundColor: '#0580e81a' }}
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 0.9, scale: 1 }}
                    transition={{ duration: 1.0, delay: 0.6 }}
                    className="absolute w-96 h-96 rounded-full blur-3xl top-1/2 -right-40"
                    style={{ backgroundColor: '#7cd1ff1a' }}
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1
                    style={{ y: titleY }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{
                        duration: 0.7,
                        ease: 'easeOut',
                        delay: titleDelay,
                    }}
                    className="font-playfair font-bold text-white tracking-tight leading-[1.06]
             text-[clamp(2rem,5vw,4.25rem)] sm:text-[clamp(2.5rem,6vw,4.75rem)] mb-6"
                >
                    Connect with the{' '}
                    {/* Sadece bu kelimede tek geçişli sheen */}
                    <span className="relative inline-flex align-baseline overflow-hidden">
                        <span
                            className="relative z-10 px-1 text-white"
                            style={{ textShadow: '0 2px 4px rgba(0,0,0,.35)' }}
                        >
                            Best AI Agencies
                        </span>

                        {/* Sheen: yokluktan gelir, geçer, kaybolur */}
                        <motion.span
                            aria-hidden
                            className="pointer-events-none absolute inset-y-0 my-auto h-full w-1/2 rounded"
                            style={{
                                left: 0,
                                background:
                                    'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.85) 45%, rgba(255,255,255,0) 100%)',
                                mixBlendMode: 'screen',
                                willChange: 'transform, opacity',
                            }}
                            initial={{ x: '120%', opacity: 0 }}
                            animate={{
                                x: ['120%', '-120%'],
                                opacity: [0, 1, 1, 0], // görünmez → görünür → görünür → görünmez
                            }}
                            transition={{
                                delay: 1.2, // biraz gecikme
                                duration: 1.35,
                                ease: 'easeOut',
                                times: [0, 0.15, 0.85, 1], // ilk anda görünmesin, ortada parlak, çıkarken sön
                            }}
                        />
                    </span>{' '}
                    to Transform Your Business
                </motion.h1>

                <motion.p
                    style={{ y: descY }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{
                        duration: 0.65,
                        ease: 'easeOut',
                        delay: 0.22,
                    }}
                    className="text-[1.05rem] sm:text-lg lg:text-xl text-gray-100/95 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    Find top-tier AI service providers, consultants, and
                    solutions tailored to your needs. Streamline your AI
                    projects and drive innovation with the right partners.
                </motion.p>

                <motion.div
                    style={{ y: buttonsY }}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{
                        opacity: isVisible ? 1 : 0,
                        scale: isVisible ? 1 : 0.96,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: 'easeOut',
                        delay: btnDelay,
                    }}
                    className="flex justify-center gap-4"
                >
                    <SheenButton to="/post-project" variant="primary">
                        Post Your Project
                    </SheenButton>
                    <SheenButton to="/register" variant="secondary">
                        Join the Network
                    </SheenButton>
                </motion.div>
            </div>
        </header>
    );
}
