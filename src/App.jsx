import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./App.css";
export default function App() {
  const [animation, setAnimation] = useState({
    to: "translateX(0)",
  });
  useEffect(() => {
    gsap.to(".ball", {
      opacity: 1,
      x: 100,
      ease: "bounce.in",
      duration: 6,
      scale: 4,
    });
  }, []);
  useEffect(() => {
    const text = document.querySelector(".text");

    gsap.set(text, {
      transformOrigin: "center center -100px",
      backfaceVisibility: "hidden",
    });

    gsap.to(text, {
      duration: 2,
      rotationX: "360",
      stagger: 0.1,
      onComplete: () => {
        console.log("finished");
      },
    });
    return () => {
      gsap.killTweensOf(text);
    };
  }, []);
  const boxRef = useRef(null);
  useEffect(() => {
    //gsap.fromTo(boxRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);
  const handleClick = () => {
    // gsap.to(boxRef.current, {
    //   x: 100,
    //   duration: 1,
    //   rotateZ: 270,
    //   backgroundColor: "yellow",
    // });
    setAnimation({
      to: " translateX(200px)",
    });
  };

  return (
    <>
      <div className="ball"></div>

      <div
        style={{
          display: "grid",
          placeItems: "flex-start",
          height: "50vh",
          fontWeight: "bold",
          color: "#d7385e",
          fontSize: "calc(2rem + 5vw)",
          perspective: "500px",
        }}
      >
        <div className="text">TEXT</div>
      </div>
      <div
        ref={boxRef}
        style={{
          width: "100px",
          height: "100px",
          background: "red",
          transition: "all 1s ease",
          transform: animation.to,
        }}
      ></div>
      <button onClick={handleClick}>Move</button>
    </>
  );
}
