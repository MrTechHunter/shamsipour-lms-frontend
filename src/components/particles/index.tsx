import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine, RecursivePartial } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import IOption from './optionInterface';

export function Particle({ children }: Record<string, React.CElement<any, any>>) {
  const customInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded: any = (container: any) => {
    // console.log(container);
  };
  const options: RecursivePartial<IOption> = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 900,
        },
      },
      color: {
        value: '#ffffff',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 1,
          color: '#fff',
        },
        polygon: {
          nb_sides: 0,
        },
      },
      opacity: {
        value: 0.8,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.4,
          sync: false,
        },
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: true,
          speed: 8,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 300,
        color: '#ffffff',
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: 'none',
        random: true,
        straight: true,
        out_mode: 'out',
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: ['grab', 'bubble'],
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 300,
          duration: 0.1,
          opacity: 0.8,
          size: 10,
        },
        bubble: {
          opacity: 0.8,
          size: 10,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          quantity: 2,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <div className="w-full h-full bg-login bg-no-repeat bg-cover bg-center">
      <Particles id="meboka-particle" options={options} init={customInit} loaded={particlesLoaded} />
      {children}
    </div>
  );
}

export default Particle;
