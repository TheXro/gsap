import { useRef, useState } from "react";
import "./App.css";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
function App() {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useGSAP(
    () => {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#main",
          start: "50% 50%",
          end: "200% 50%",
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      tl.to(
        ".svg",
        {
          maskSize: "180%",
        },
        "a"
      );

      tl.to(
        ".img",
        {
          backgroundSize: "100%",
        },
        "a"
      );

      tl.to(
        ".svg2",
        {
          maskSize: "180%",
        },
        "b"
      );

      tl.to(
        ".img2",
        {
          backgroundSize: "100%",
          // opacity: 0,
        },
        "b"
      );
    },
    { scope: ref }
  );
  return (
    <>
      <div ref={ref}>
        <div id='main'>
          <div className='svg'>
            <div className='img'>
                <div className='svg2'>
                  <div className='img2'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
