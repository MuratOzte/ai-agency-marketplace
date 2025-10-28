import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'white' | 'outlineWhite';

interface SheenButtonProps {
    to: string;
    children: React.ReactNode;
    variant?: ButtonVariant;
    className?: string;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
    primary:
        'text-white hover:shadow-[0_20px_40px_rgba(5,128,232,0.35)] focus:outline-none focus:ring-2',
    secondary:
        'bg-white/10 backdrop-blur text-white border border-white/30 hover:border-white hover:bg-white/15 focus:outline-none focus:ring-2',
    white: 'bg-white text-[rgb(5,128,232)] hover:bg-gray-100 hover:shadow-xl focus:outline-none focus:ring-2',
    outlineWhite:
        'border-2 border-white text-white hover:bg-white/10 focus:outline-none focus:ring-2',
};

const BASE_BTN =
    'relative inline-flex items-center justify-center whitespace-nowrap rounded-lg ' +
    'px-6 sm:px-7 py-3 font-semibold transition-all will-change-transform overflow-hidden';

const BRAND_BLUE = '#0580E8';

export function SheenButton({
    to,
    children,
    variant = 'primary',
    className = '',
}: SheenButtonProps): JSX.Element {
    return (
        <motion.div
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`group ${className}`}
        >
            <Link
                to={to}
                className={`${BASE_BTN} ${VARIANT_CLASSES[variant]}`}
                style={
                    variant === 'primary'
                        ? { backgroundColor: BRAND_BLUE }
                        : undefined
                }
            >
                <span
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700
           bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)]"
                    aria-hidden
                />
                <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
           shadow-[inset_0_0_30px_rgba(255,255,255,0.12)] rounded-lg"
                    aria-hidden
                />
                <span className="relative">{children}</span>
            </Link>
        </motion.div>
    );
}
