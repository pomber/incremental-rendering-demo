(function(frames = 200, colWidth = "2px") {
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.right = "10px";
  container.style.top = "0";
  container.style.zIndex = "99999";
  for (let i = 0; i < frames; i++) {
    const fc = document.createElement("div");
    fc.style.background = "red";
    fc.style.width = colWidth;
    fc.style.display = "inline-block";
    fc.style.verticalAlign = "top";
    fc.style.opacity = "0.8";
    container.appendChild(fc);
    fc.style.height = "16px";
  }
  let last = performance.now();
  let i = 0;
  function refresh() {
    const now = performance.now();
    const diff = now - last;
    last = now;
    container.childNodes[i % frames].style.background = "red";
    i++;
    container.childNodes[i % frames].style.background = "black";
    container.childNodes[i % frames].style.height = diff + "px";
    requestAnimationFrame(refresh);
  }
  requestAnimationFrame(refresh);
  document.body.appendChild(container);
})();
