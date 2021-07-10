export class Ripple {
  start(e, el, className) {
    el = document.createElement(el);
    el.classList.add(className);
    e.target.insertAdjacentElement('beforeend', el);

    const position = e.target.getBoundingClientRect();
    const top = Math.abs(position.top - e.clientY);
    const left = Math.abs(position.left - e.clientX);

    console.log('top:', top, 'left:', left);
    e.target.style.setProperty('--top', `${top}px`);
    e.target.style.setProperty('--left', `${left}px`);
  }
}
