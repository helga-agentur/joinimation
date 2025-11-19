import Peekaboo from '../../src/Peekaboo.mjs';

// Clone content
/* global document */
const container = document.querySelector('.container');
const containerContent = container.innerHTML;
for (let i = 0; i < 10; i++) {
    const replaced = containerContent
        .replace(/"trigger"/g, `trigger-${i}`)
        .replace(/"rightTrigger"/g, `trigger-${i}`);
    container.innerHTML += replaced;
}

const peekaboo = new Peekaboo({ isTransitioningClassName: 'is-transitioning' });
peekaboo.add(container);
