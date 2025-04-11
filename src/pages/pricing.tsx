import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import {OneColumn} from "@site/src/components/landing/OneColumn";
import Scripts from "@site/src/components/scripts/Analytic";
import {MainLayout} from "@site/src/components/layout/MainLayout";
import {AppContent} from "@site/src/content/applications/AppCard";

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        Docusaurus Tutorial - 5min ⏱️
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <div className={'bg-stone-900 min-h-screen'}>
            <MainLayout>
                <div className={'w-full'}>
                    <Scripts/>
                    <div className={'flex flex-col items-center justify-center mt-24 text-gray-200'}>
                        <div className={'text-2xl font-bold font-kode'}>
                            <div>Get in touch for pricing details on:</div>
                            <div className={'text-4xl mt-4 text-gray-500'}>
                                private dataset hosting
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    );
}
