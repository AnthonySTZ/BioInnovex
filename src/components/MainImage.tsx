import { useState, useEffect } from "react";

export default function MainImage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in after component mounts
    setVisible(true);
  }, []);

  return (
    <div
      className="fixed bg-cover bg-center w-full h-screen"
    >
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-30">
        <h1
          className={`relative text-5xl lg:text-6xl font-semibold text-center leading-tight text-blue-700 mx-8 transition-opacity ease-in-out duration-2500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          YOU’VE BUILT VALUE
          <br />
          WE HELP YOU UNLOCK
          <br />
          ITS{" "}
          <span className="text-[rgb(60,199,111)] font-bold">
            FULL POTENTIAL
          </span>
        </h1>
      </div>
    </div>
  );
}
