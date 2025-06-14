"use client";

import { useState, useCallback } from "react";


export default function LoveCalculator() {
  const [yourName, setYourName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwnjZwJ1CL6ihjdJrtqhoJiARv8l2InKL-HzMxyIlKSvcoIthgD6P5jivLoqxwLinvI/exec";

  const calculateLove = useCallback(() => {
    setError("");
    setResult("");

    if (!yourName || !partnerName) {
      setError("Please enter both names!");
      return;
    }

    const yourNameLower = yourName.trim().toLowerCase();
    const partnerNameLower = partnerName.trim().toLowerCase();

    if (
      (yourNameLower === "areesha" && partnerNameLower === "wasim") ||
      (yourNameLower === "wasim" && partnerNameLower === "areesha")
    ) {
      setResult("Areesha and Wasim have a 99% love compatibility! 💖");
      return;
    }

    const combinedNames = yourNameLower + partnerNameLower;
    let loveScore = 0;

    for (let i = 0; i < combinedNames.length; i++) {
      loveScore += combinedNames.charCodeAt(i);
    }

    const lovePercentage = (loveScore % 100) + 1;
    setResult(`${yourName} and ${partnerName} have a ${lovePercentage}% love compatibility! 💘`);
  }, [yourName, partnerName]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const form = new FormData(e.currentTarget);

      // Send data to Google Sheets
      fetch(scriptURL, { method: "POST", body: form }).catch((error) =>
        console.error("Error submitting to sheet:", error)
      );

      calculateLove();
    },
    [calculateLove]
  );

  return (
    <>
      
      <div className="text-center flex flex-col items-center justify-center mx-auto my-[clamp(50px,10vw,100px)]">
        <div className="bg-pink-800 text-white p-[clamp(10px,5vw,20px)] rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-[clamp(20px,8vw,40px)] font-bold mb-4">Love Calculator</h1>
          <p className="text-[clamp(14px,5vw,20px)] mb-6">Find out your love percentage!</p>
          <form onSubmit={handleSubmit} className="space-y-4" id="userform">
            <input
              type="text"
              name="name"
              className="w-full p-[clamp(10px,3vw,15px)] rounded-lg bg-white text-black text-[clamp(14px,5vw,20px)] placeholder-gray-500"
              placeholder="Your Name"
              value={yourName}
              onChange={(e) => setYourName(e.target.value)}
            />
            <input
              type="text"
              name="fname"
              className="w-full p-[clamp(10px,3vw,15px)] rounded-lg bg-white text-black text-[clamp(14px,5vw,20px)] placeholder-gray-500"
              placeholder="Partner's Name"
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
            />
            <input type="hidden" name="date" value={date} />
            <input type="hidden" name="time" value={time} />
            <input type="hidden" name="func" value="lovecal" />
            <button
              type="submit"
              className="w-full p-[clamp(10px,3vw,15px)] bg-pink-600 rounded-lg text-[clamp(14px,5vw,20px)] hover:bg-pink-500 transition"
            >
              Calculate
            </button>
          </form>
          {error && (
            <div className="text-red-500 mt-4 text-[clamp(14px,5vw,20px)]">{error}</div>
          )}
          {result && (
            <div className="text-pink-100 mt-6 text-[clamp(16px,6vw,24px)] font-semibold">{result}</div>
          )}
        </div>
      </div>
    </>
  );
}
