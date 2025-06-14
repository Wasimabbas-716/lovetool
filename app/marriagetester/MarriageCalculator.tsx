"use client";

import { useState, FormEvent } from "react";
// import confetti from "canvas-confetti"; // Uncomment if using confetti 🎉

const MarriageCalculator = () => {
  const [person1, setPerson1] = useState<string>("");
  const [person2, setPerson2] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const time = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();

  const calculateHash = (str: string): number => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash) % 101;
  };

  const calculateChance = () => {
    if (person1.trim() === "" || person2.trim() === "") {
      setResult("Please enter both names!");
      return;
    }

    const combinedNames = person1.trim().toLowerCase() + person2.trim().toLowerCase();
    const chance = calculateHash(combinedNames);

    setResult(`${person1} & ${person2} have a ${chance}% chance of marriage ❤️ in this month`);

    // Optional confetti effect 🎉
    // if (chance >= 90) {
    //   confetti({
    //     particleCount: 100,
    //     spread: 70,
    //     origin: { y: 0.6 },
    //   });
    // }
  };

  const inputform = () => {
    const form = new FormData(document.getElementById("userform") as HTMLFormElement);
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwnjZwJ1CL6ihjdJrtqhoJiARv8l2InKL-HzMxyIlKSvcoIthgD6P5jivLoqxwLinvI/exec";

    fetch(scriptURL, { method: "POST", body: form }).catch((error) =>
      console.log("Error: " + error.message)
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    calculateChance();
    inputform();
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto my-[50px] px-4">
      <div className="bg-pink-700 p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center mb-6">
          This Month Marriage Chances Calculator
        </h1>
        <form id="userform" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={person1}
            name="name"
            onChange={(e) => setPerson1(e.target.value)}
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            required
          />
          <input
            type="text"
            placeholder="Enter Lover's Name"
            value={person2}
            name="fname"
            onChange={(e) => setPerson2(e.target.value)}
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            required
          />
          <input type="hidden" name="date" value={date} />
          <input type="hidden" name="time" value={time} />
          <input type="hidden" name="func" value="merigper" />
          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-semibold py-3 rounded-lg hover:bg-pink-800 transition duration-300"
          >
            Check Chance
          </button>
        </form>
        {result && (
          <div className="mt-6 text-lg sm:text-xl md:text-2xl text-center font-medium text-white animate-fade-in">
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default MarriageCalculator;
