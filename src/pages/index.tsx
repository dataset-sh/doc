import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import {OneColumn} from "@site/src/components/landing/OneColumn";
import Scripts from "@site/src/components/scripts/Analytic";
import {MainLayout} from "@site/src/components/layout/MainLayout";

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

                    {/*<div className={'hidden 3xl:block w-full bg-red-500'}>*/}
                    {/*    <TwoColumn/>*/}
                    {/*</div>*/}
                    <OneColumn/>
                </div>
            </MainLayout>
        </div>
    );
}
