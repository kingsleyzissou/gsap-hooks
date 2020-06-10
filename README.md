# gsap-hooks
React hooks for gsap timeline

## useTimeline hook

```
import { useTimeline } from 'gsap-hooks';

function App() {

  ...

  const [ready, timeline] = useTimeline();

  ...

  if (ready) {
    timeline.add(
      // comma separated animations
      // i.e.
      gsap.fromTo(ref, <your from object>, <your to object>)
    );
  }

  ...

}
```