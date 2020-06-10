import { useEffect, useState } from 'react';
import gsap from 'gsap';

export function useTimeline(): [boolean, GSAPTimeline | void] {
  const timeline: GSAPTimeline = gsap.timeline();
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    setReady(true);
    return (): void => {
      setReady(false);
    };
  }, [setReady]);

  useEffect(() => {
    return (): void => {
      timeline.kill();
    };
  }, [timeline]);

  return [ready, timeline];
}
