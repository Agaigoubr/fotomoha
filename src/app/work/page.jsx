'use client';
import { useEffect } from 'react';
import Intro from '@/component/Intro';
import Description from '@/component/Description';
import Projects from '@/component/Projects';


export default function Work() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
      <main >
        <Intro />
        <Description />
        <Projects />
      </main>
  )
}