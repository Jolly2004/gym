"use client";
import { useState } from "react";

export default function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) return;

    const h = parseFloat(height) / 100; // cm → m
    const w = parseFloat(weight);

    const value = (w / (h * h)).toFixed(1);
    setBmi(value);

    if (value < 18.5) setCategory("Underweight");
    else if (value < 25) setCategory("Normal");
    else if (value < 30) setCategory("Overweight");
    else setCategory("Obese");
  };

  return (
    <section className="relative w-full py-28 bg-black text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_20%_20%,rgba(255,0,0,0.12),transparent_60%),radial-gradient(40%_40%_at_80%_80%,rgba(0,255,120,0.08),transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-red-500 uppercase tracking-widest text-sm mb-4">
            <span>⚡</span> Health Tools
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            BMI <span className="text-red-500">CALCULATOR</span>
          </h2>
          <p className="mt-4 text-gray-300">
            Calculate your Body Mass Index and discover your fitness category
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Height (cm)
              </label>
              <input
                type="number"
                placeholder="170"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none focus:border-red-500/50"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Weight (kg)
              </label>
              <input
                type="number"
                placeholder="70"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none focus:border-red-500/50"
              />
            </div>
          </div>

          <button
            onClick={calculateBMI}
            className="w-full mt-8 py-4 rounded-xl font-semibold tracking-wide bg-gradient-to-r from-red-600 to-orange-500 hover:opacity-90 transition"
          >
            CALCULATE BMI
          </button>

          {/* Result */}
          {bmi && (
            <>
              <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                <div className="text-gray-300 text-sm mb-1">Your BMI</div>
                <div className="text-4xl font-extrabold text-red-500">
                  {bmi}
                </div>
                <div className="mt-1 text-red-400">{category}</div>
              </div>

              <div className="mt-6">
                <div className="text-sm text-gray-300 mb-2">BMI Range</div>
                <div className="h-2 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-red-600" />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>Underweight</span>
                  <span>Normal</span>
                  <span>Overweight</span>
                  <span>Obese</span>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-gray-300">
                <div className="mb-2 font-semibold">BMI Categories:</div>
                <ul className="space-y-1">
                  <li>• Underweight: BMI &lt; 18.5</li>
                  <li>• Normal weight: BMI 18.5 – 24.9</li>
                  <li>• Overweight: BMI 25 – 29.9</li>
                  <li>• Obese: BMI ≥ 30</li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
