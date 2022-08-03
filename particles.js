import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styled from 'styled-components'

const Container = styled.div`
    .particles{
        position:relative;
        z-index:-99999;
    }
`


const ParticleArea = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
      }
      const particlesLoaded = (container) => {
      }
    return (
        
      <>
      <Container>
        <Particles
            id="tsparticles"
            init={particlesInit} className="particles"
            loaded={particlesLoaded}
            options={{
                background: {
                color: {
                    value: "#1363DF",
                },
                },
                fpsLimit: 120,
                interactivity: {
                events: {
                    onClick: {
                    enable: false,
                    mode: "push",
                    },
                    onHover: {
                    enable: false,
                    mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                    quantity: 6,
                    },
                    repulse: {
                    distance: 200,
                    duration: 0.6,
                    },
                },
                },
                particles: {
                color: {
                    value: "#000",
                },
                links: {
                    color: "#34B3F1",
                    distance: 150,
                    enable: true,
                    opacity: 1,
                    width: 2,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                    default: "bounce",
                    },
                    random: true,
                    speed: 4,
                    straight: false,
                },
                number: {
                    density: {
                    enable: true,
                    area: 500,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
                },
                detectRetina: true,
            }}
            />
            </Container>
      </>
    )
  }
  
  export default ParticleArea