'use client';
import styles from './page.module.scss'
import GSAP from '@/component/GSAP';
import FramerMotion from '@/component/FramerMotion';
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react';
import style from './page.module.scss';

export default function Home() {

    useEffect( () => {
        const lenis = new Lenis()
        
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
    }, [])

    return (
        <main className={styles.main}>
            <GSAP />
            <FramerMotion />
        </main>
    )
}