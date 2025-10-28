import React, { useEffect } from 'react';

import { CTACompact } from '../components/home/CtaCompact';
import { Hero } from '../components/home/Hero';
import { Benefits } from '../components/home/Benefits';
import { HowItWorks } from '../components/home/HowItWorks';

export default function Home(): JSX.Element {
    const [isVisible, setIsVisible] = React.useState<boolean>(false);
    useEffect(() => setIsVisible(true), []);

    return (
        <div className="pt-16">
            <Hero isVisible={isVisible} />
            <Benefits />
            <HowItWorks />
            <CTACompact />
        </div>
    );
}
