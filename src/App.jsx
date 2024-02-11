import React from "react";
import "./index.css";

function App() {
  const [isShown, setIsShown] = React.useState(true);

  const toggleIsShown = () => {
    setIsShown((prevIsShown) => !prevIsShown);
  };

  const textClassName = isShown ? "pt-4" : "hidden";

  return (
    <div className="pl-16 pt-8">
      <p className="text-4xl">Text Hider</p>
      <p className={textClassName}>This is some text</p>
      <button className="bg-yellow-300 px-12" onClick={toggleIsShown}>
        {isShown ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default App;
