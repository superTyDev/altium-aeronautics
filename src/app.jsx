import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";

/**
 * This code defines the react app
 *
 * Imports the router functionality to provide page navigation
 * Defines the Home function outlining the content on each page
 * Content specific to each page (Home and About) is defined in their components in /pages
 * Each page content is presented inside the overall structure defined here
 * The router attaches the page components to their paths
 */

// Import and apply CSS stylesheet
import "./styles/styles.css";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";

// The component that adds our Meta tags to the page
import Seo from "./components/seo.jsx";

// Font Awesome (icons)
import "https://kit.fontawesome.com/b02a1c9014.js";

function darkNav() {
  if (window.scrollY > 15) {
    document.querySelector("nav").classList.add("scrolled");
  } else {
    document.querySelector("nav").classList.remove("scrolled");
  }
}

function closeNav(e) {
  e = window.event || e;
  if (document.body === e.target) {
    document.querySelector(".sideNav").classList.remove("expand");
  }
}
function closeNavLink(e) {
  document.querySelector(".sideNav").classList.remove("expand");
}

function linkDelays() {
  var container = document.querySelector(".sideNavInner").children;

  var c = 0;
  for (let elem of container) {
    elem.style.transitionDelay = `${c / 4}s`;
    c++;
  }
}

// Home function that is reflected across the site
export default function Home() {
  addEventListener("scroll", darkNav);
  addEventListener("load", linkDelays);

  return (
    <Router>
      <nav>
        <Link href="/" id="logo">
          <h2>
            <img
              height="24px"
              src="https://cdn.glitch.global/2ed4b08e-aa2f-4ed2-9f56-1225d5edadb6/touch-icon.png?v=1661874307713"
              alt="Eagle Icon"
            />
            Altium Aeronautics
          </h2>
        </Link>
        <a
          href="#menu"
          onClick={(e) => {
            document.querySelector(".sideNav").classList.toggle("expand");
          }}
        >
          ☰
        </a>
        <Link href="/login">Login</Link>
        <Link href="/quote">Buy a Ticket</Link>
      </nav>
      <div className="sideNav">
        <div className="sideNavInner">
          <div>
            <h2>
              Menu
              <span id="closeMenu" onClick={closeNavLink}>
                &#x2715;
              </span>
            </h2>
          </div>
          <div>
            <hr />
          </div>
          <div>
            <Link href="/about" onClick={closeNavLink}>
              About<i className="fa-solid fa-circle-info"></i>
            </Link>
          </div>
          <div>
            <Link href="/services" onClick={closeNavLink}>
              Services<i className="fa-solid fa-handshake-simple"></i>
            </Link>
          </div>
          <div>
            <Link href="/contact" onClick={closeNavLink}>
              Contact <i className="fa-solid fa-phone"></i>
            </Link>
          </div>
          <div>
            <Link href="/login" onClick={closeNavLink}>
              Login <i className="fa-solid fa-circle-user"></i>
            </Link>
          </div>
          <div>
            <Link href="/dashboard" onClick={closeNavLink}>
              Dashboard <i className="fa-solid fa-chart-line"></i>
            </Link>
          </div>
          <div>
            <Link href="/calendar" onClick={closeNavLink}>
              Calendar <i className="fa-solid fa-calendar-day"></i>
            </Link>
          </div>
          <div className="spacer"></div>
        </div>
      </div>
      <Seo />

      <div className="content">
        {/* Router specifies which component to insert here as the main content */}
        <PageRouter />
      </div>
      {/* Footer links to Home and About, Link elements matched in router.jsx */}
      <footer className="footer">
        <div className="title">Altium Aeronautics</div>
        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/login">Login</Link>
          <Link href="/cites">Cites</Link>
          <Link href="/map">Map</Link>
          <Link href="/feedback">Feedback</Link>
          <Link href="/sitemap">Sitemap</Link>
        </div>
        <div className="copyright">
          © Tyson McLaws, Connor Altvater 2022. No Rights Reserved.
        </div>
        <div></div>
      </footer>
    </Router>
  );
}
