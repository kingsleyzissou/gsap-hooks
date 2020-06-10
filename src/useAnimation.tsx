import { useCallback } from 'react';
import gsap from 'gsap';

type AnimationFunction = GSAPAnimation | undefined;

export function useAnimation() {
  return useCallback((
    target: HTMLElement,
    method: string,
    args: Array<any>,
  ) : AnimationFunction => {
    return (target)
      ? gsap[method](target, ...args)
      : undefined;
  }, []);
}
