"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  runTextAnimation();
  startMouseFollower();
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

function startMouseFollower() {
  gsap.set(".mouse_follower", { xPercent: -50, yPercent: -50 });

  const ball = document.querySelector(".mouse_follower");
  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };
  const speed = 0.35;

  const xSet = gsap.quickSetter(ball, "x", "px");
  const ySet = gsap.quickSetter(ball, "y", "px");

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });
  gsap.ticker.add(() => {
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    xSet(pos.x);
    ySet(pos.y);
  });
}
