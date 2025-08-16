import { useEffect, useState } from "react";
import '../css/loadingscreen.css';
import TextType from '../components/text1.jsx';

const LoadingScreen = ({ onComplete }) => {
  const [index, setIndex] = useState(0);

  const lines = [
    "✔ Loading images and content 🏋🏻‍♀️",
    "✔ Setting up React & Node skills",
    "✔ Tailwind magic incoming ✨",
    "✔ Animating with Framer Motion",
    "✔ Adding personal touch 🎯",
    "✔ Final polish complete",
    "ℹ All systems ready 🏁",
    "Welcome !,let's explore my journey 🚀"
  ];

  useEffect(() => {
    if (index < lines.length) {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setTimeout(onComplete, 11000); 
    }
  }, [index]);

  return (
    <div className="loading-screen">
      <div className="terminal-box">
        <p className="terminal-title">
          <TextType
            text={["> Launching Adithya's Portfolio..."]}
            typingSpeed={35}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </p>

        {lines.slice(0, index).map((line, i) => (
          <p key={i} className="terminal-line">
            {i === lines.length - 1 ? (
              <TextType
                text={[line]}
                typingSpeed={36}
                pauseDuration={0}
                showCursor={true}
                cursorCharacter="|"
              />
            ) : (
              line
            )}
          </p>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
