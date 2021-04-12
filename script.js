"use strict";

window.addEventListener("DOMContentLoaded", start);
gsap.registerPlugin(ScrollTrigger);

function start() {
  runStartTextAnimation();
  aboutSectionFadeInAnimation();
  workSectionFadeInAnimation();
  contactSectionFadeInAnimation();
  loadSVG();
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

async function loadSVG() {
  // Load github logo
  let responseGithub = await fetch("svg/github_logo.svg");
  let githubSVG = await responseGithub.text();
  document.querySelector(".github").innerHTML = githubSVG;
  document.querySelector(".github").style.fill = "#c09fe0";

  // Load linkedin logo
  let responseLinkedin = await fetch("svg/linkedin_logo.svg");
  let linkedinSVG = await responseLinkedin.text();
  document.querySelector(".linkedin").innerHTML = linkedinSVG;
  document.querySelector(".linkedin").style.fill = "#c09fe0";

  // Load codepen logo
  let responseCodepen = await fetch("svg/codepen_logo.svg");
  let codepenSVG = await responseCodepen.text();
  document.querySelector(".codepen").innerHTML = codepenSVG;
  document.querySelector(".codepen").style.fill = "#c09fe0";

  hoverOnLogos();
}

function hoverOnLogos() {
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("mouseover", function () {
      console.log("change color");
      button.style.fill = "white";
    });
  });
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("mouseout", function () {
      console.log("change color");
      button.style.fill = "#c09fe0";
    });
  });
}
