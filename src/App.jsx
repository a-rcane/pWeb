import { useEffect, useRef, useState } from "react";
import NET from "vanta/src/vanta.net";
import * as THREE from "three"; 
import "./styles.css"; 
import NavBar from "./components/Navbar.jsx";
import TabletDisplay from "./components/TabletDisplay.jsx";


function App() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: window.innerHeight,
          minWidth: window.innerWidth,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x000,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="full-screen">
      <NavBar setSelectedProject={setSelectedProject}/>
      <TabletDisplay selectedProject={selectedProject}/>
    </div>
  );
}

export default App;
