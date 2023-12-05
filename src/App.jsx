import React, { useEffect } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import "./app.css";
import "../node_modules/mouse-follower/src/scss/index.scss";
import asta from "./asta.jpg";

function App() {
  let scrollValue;
  MouseFollower.registerGSAP(gsap);
  const cursor = new MouseFollower({
    speed: 0.3,
    className: "mf-cursor color-add",
  });

  useEffect(() => {
    const box = document.querySelector(".sticky-container");
    const el = document.querySelector(".logo-img");
    const bigText = document.querySelector(".big");

    box.addEventListener("mouseenter", () => {
      cursor.setStick(el);
    });

    box.addEventListener("mouseleave", () => {
      cursor.removeStick();
    });

    el.addEventListener("mouseenter", () => {
      cursor.setImg(
        "https://www.digital-lync.com/images/digital-lyncs-devops-python-digital-marketing-training-hyderabad.png"
      );
    });

    el.addEventListener("mouseleave", () => {
      cursor.removeImg();
    });
  }, []);
  //  ------------------------------Scroll
  const handleScroll = () => {
    const firstText = document.querySelector(".one");
    const secondText = document.querySelector(".two");
    const scrollPosition = window.scrollY; // => scroll position
    // console.log(scrollPosition);
    if (scrollPosition > 810 && scrollPosition < 990) {
      let filler = scrollPosition - 810;
      // console.log("one");
      firstText.style.background = `linear-gradient(to right, blue ${filler}%, black 0%)`;
      firstText.style.backgroundClip = "text";
      firstText.style.WebkitBackgroundClip = "text";
    } else if (scrollPosition < 990) {
      let filler = scrollPosition - 990;
      // console.log("two", filler);
      console.log(filler);
      secondText.style.background = `linear-gradient(to right, blue ${filler}%, black 0%)`;
      secondText.style.backgroundClip = "text";
      secondText.style.WebkitBackgroundClip = "text";
    } else if (scrollPosition >= 990) {
      let filler = scrollPosition - 990;
      console.log("two", filler);
      console.log(filler);
      secondText.style.background = `linear-gradient(to right, blue ${filler}%, black 0%)`;
      secondText.style.backgroundClip = "text";
      secondText.style.WebkitBackgroundClip = "text";
    }
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // =====================End Scroll handel

  return (
    <div className="App container-fluid px-0">
      <div className="sticky-container">
        <div className="img-container">
          <img className="logo-img" src={asta} alt="logo" />
        </div>
        <div className="social-media-container"></div>
      </div>
      <div className="container-change">
        <div className="video-container">
          <video
            className="video-player"
            src="assets/hero.mp4"
            loop
            autoPlay
            muted
            type="video/mp4"
          ></video>
        </div>
        <div className="my-info">
          <div>RAJ VARU</div>
          <div className="big">
            <p>
              Fresher <br />
              Looking <br />
              For <br />
              Opportunity
            </p>
          </div>
        </div>
      </div>
      <div className="px-6">
        <span className="sec-text one">I'am a </span>
        <span className="sec-text brown">selectively skilled </span>
        <span className="sec-text two">
          product designer with strong focus on producing high quality <br /> &
          impactful digital experiance
        </span>
      </div>
      <div className="third px-6">
        <span>WHAT I DO</span>
        <div className="special-container">
          <h1>UI/UX - Figma</h1>
        </div>
        <div className="special-container">
          <h1>React JS</h1>
        </div>
        <div className="special-container">
          <h1>Redux-toolkit</h1>
        </div>
        <div className="special-container">
          <h1>Node js</h1>
        </div>
        <div className="special-container">
          <h1>Express js</h1>
        </div>
        <div className="special-container">
          <h1>Mongodb/sql</h1>
        </div>
      </div>
      <div className="forth px-6">
        <span>Eduction</span>
      </div>
      <div className="fifth px-6">
        <span>Project's</span>
        <div className="project-container">
          <div className="project-img-container">
            <img src="assets/netflix.png" alt="netflix-img" />
          </div>
          <div className="project-text-container">
            <h1>Lms Mern Stack App</h1>
            <h1>Feature's</h1>
            <ul>
              <li>SignIn and Signup for user and Admin</li>
              <li>Implimentation of live Webstream service</li>
              <li>Dynamic converting,saving and storing stream's</li>
              <li>user Management</li>
            </ul>
          </div>
        </div>
        <div className="project-container">
          <div className="project-text-container"></div>
          <div className="project-img-container"></div>
        </div>
        <div className="project-container">
          <div className="project-img-container">
            <img src="assets/netflix.png" alt="netflix-img" />
          </div>
          <div className="project-text-container">
            <h1>Netflix Mern stack App</h1>
            <h1>Feature's</h1>
            <ul>
              <li>SignIn and Signup for user and Admin</li>
              <li>play and add movies </li>
              <li>Favorittes section </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sixth px-6">
        <span>Work Experiance</span>
      </div>
      <div className="sixth px-6">
        <span>Contact Me</span>
      </div>
    </div>
  );
}

export default App;
