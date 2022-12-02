
const body = document.querySelector('body')
const background = document.getElementById('undock')

body.addEventListener('mousemove', (e) => {
  background.style.transform = `translate(
    ${-1 + -1 * e.x / window.innerWidth}%,
    ${-1 + -1 * e.y / window.innerHeight}%
  )`
})