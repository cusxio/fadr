/**
 * easeOutQuad function
 * https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
 * @param  {Number} t time
 * @param  {Number} b begin
 * @param  {Number} c change
 * @param  {Number} d duration
 * @return {Number}   position
 */
const easeOutQuad = (t, b, c, d) => (-c * (t /= d) * (t - 2)) + b;

const ticker = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;

export default function (direction, element, opts = {}) {
    const ins = direction === 'in';
    const duration = opts.duration || 400;
    const easing = opts.easing || easeOutQuad;
    const display = opts.display || (ins ? 'block' : 'none');
    const complete = opts.complete;

    const begin = ins ? 0 : 1;
    const final = begin === 1 ? 0 : 1;

    let startTime;

    function tick(currTime) {
        if (!startTime) {
            startTime = currTime;
        }

        const elapsedTime = currTime - startTime;

        /**
         * Needed to start the animation. Without it, the display property
         * remains `none`.
         */
        if (ins && elapsedTime === 0) {
            element.style.display = display;
        }

        element.style.opacity = easing(elapsedTime, begin, final - begin, duration);

        elapsedTime < duration ? ticker(tick) : end();
    }

    ticker(tick);

    function end() {
        if (direction === 'out') {
            element.style.display = display;
        }

        if (typeof complete === 'function') {
            complete();
        }
    }
}
