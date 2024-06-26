// Overlay.js
import React, { useState } from 'react';
import { Scroll, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Section = (props) => {
  const sectionClasses = `h-screen flex flex-col justify-center p-10 ${
    props.right ? 'items-end' : 'items-start'
  }`;

  return (
    <section className={sectionClasses} style={{ opacity: props.opacity }}>
      <div className="w-full flex items-center justify-center">
        <div className="max-w-lg w-full">
          <div className="bg-white rounded-lg px-8 py-12">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Hello, I'm Akshaansh
          </h1>
          <p className="text-gray-500">Welcome to my beautiful portfolio</p>
          <p className="mt-3">I know:</p>
          <ul className="leading-9">
            <li>🧑‍💻 How to code</li>
            <li>🧑‍🏫 How to learn</li>
            <li>📦 How to deliver</li>
          </ul>
          <p className="animate-bounce mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection} className= ' mr-10'>
          <h1 className="font-semibold font-serif text-2xl">
            Here are my skillsets 🔥
          </h1>
          <p className="text-gray-500">PS: I never test</p>
          <div className="flex justify-between">
            <div className="mr-4">
              <p>
                <b>Frontend 🚀</b>
              </p>
              <ul className="leading-9">
                <li>ReactJS</li>
                <li>React Native</li>
                <li>VueJS</li>
                <li>Tailwind</li>
              </ul>
            </div>
            <div>
              <p>
                <b>Backend 🔬</b>
              </p>
              <ul className="leading-9">
                <li>NodeJS</li>
                <li>tRPC</li>
                <li>NextJS</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
          <p className="animate-bounce mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
            🤙 Call me maybe?
          </h1>
          <p className="text-gray-500">
            I'm very expensive but you won't regret it
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📞 <a href="tel:(+42) 4242-4242-424242">(+42) 4242-4242-424242</a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
