function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('showElement');
      }
  });
}

let options = {threshold: 0.5};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('._animated');
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    observer.observe(element)
}