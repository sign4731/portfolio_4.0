"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  runTextAnimation();
}

function runTextAnimation() {
  const timeline = gsap.timeline();
  timeline.to("h1", {
    duration: 1.5,
    opacity: 1,
    y: 0,
    ease: "back.out(1)",
  });
  timeline.to("nav li:first-of-type a", {
    duration: 0.7,
    opacity: 1,
    y: 0,
    ease: "back.out(1)",
  });
  timeline.to("nav li:nth-last-of-type(2) a", {
    duration: 0.7,
    opacity: 1,
    y: 0,
    ease: "back.out(1)",
  });
  timeline.to("nav li:last-of-type a", {
    duration: 0.7,
    opacity: 1,
    y: 0,
    ease: "back.out(1)",
  });
}
