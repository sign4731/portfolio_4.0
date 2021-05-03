"use strict";

window.addEventListener("DOMContentLoaded", start);
gsap.registerPlugin(ScrollTrigger);

function start() {
  runStartTextAnimation();
  aboutSectionFadeInAnimation();
  workSectionFadeInAnimation();
  contactSectionFadeInAnimation();
  loadSVG("codepen");
  loadSVG("github");
  loadSVG("linkedin");
}

function runStartTextAnimation() {
  // To make h1 fade in from bottom and nav links fades in afterwards
  const timeline = gsap.timeline();
  timeline.to("h1", {
    duration: 1.5,
    opacity: 1,
    y: 0,
    ease: "back.out(1)",
  });
  timeline.to("nav a", {
    duration: 0.7,
    opacity: 1,
    y: 0,
    ease: "back.out(1)",
  });
}

function aboutSectionFadeInAnimation() {
  // To make about me section fade in from bottom
  gsap.to(".about_container_to_animate", {
    scrollTrigger: ".about_container_to_animate",
    duration: 2,
    opacity: 1,
    y: 0,
  });
}

function workSectionFadeInAnimation() {
  // To make each figure fade in as user scrolls either up or down the page
  ScrollTrigger.batch("figure", {
    interval: 0.1,
    batchMax: 0,
    onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, stagger: 0.15, overwrite: true }),
    onLeave: (batch) => gsap.set(batch, { autoAlpha: 0, overwrite: true }),
    onEnterBack: (batch) => gsap.to(batch, { autoAlpha: 1, stagger: 0.15, overwrite: true }),
    onLeaveBack: (batch) => gsap.set(batch, { autoAlpha: 0, overwrite: true }),
  });
}

function contactSectionFadeInAnimation() {
  gsap.to("#contact p a", {
    scrollTrigger: "#contact",
    duration: 2,
    backgroundSize: "100% 2px",
  });
}

async function loadSVG(logo) {
  let response = await fetch(`svg/${logo}_logo.svg`);
  let SVG = await response.text();
  document.querySelector(`.${logo}`).innerHTML = SVG;
  document.querySelector(`.${logo}`).style.fill = "#c09fe0";

  hoverOnLogos();
}

function hoverOnLogos() {
  document.querySelectorAll(".logo_container a").forEach((a) => {
    a.addEventListener("mouseover", function () {
      console.log("change color");
      a.style.fill = "white";
    });
  });
  document.querySelectorAll(".logo_container a").forEach((a) => {
    a.addEventListener("mouseout", function () {
      console.log("change color");
      a.style.fill = "#c09fe0";
    });
  });
}
