# incremental-rendering-demo

Demo showing the usage of the main thread using React (v16) sync and async rendering.  
Also, I'm using this to test my own version of React Fiber (Didact Fiber).

Demos:
- [react-sync](https://pomber.github.io/incremental-rendering-demo/react-sync.html)
- [react-async](https://pomber.github.io/incremental-rendering-demo/react-async.html)
- [didact](https://pomber.github.io/incremental-rendering-demo/didact.html)

Note:
- It's not using the production version of React
- The animation should work without the main thread (it only needs to animate `transform`), but I changed it to animate other properties to depend on it
- Didact only works on browser that have requestIdleCallback, like Chrome
- On iPad (Safari and Chrome) the animation looks good no matter what React is doing
- Didact code is awful, I'm going to refactor it and put it on didact repo
