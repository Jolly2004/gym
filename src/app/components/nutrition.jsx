"use client";
import { useState } from "react";

export default function Nutrition() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activity, setActivity] = useState("");
  const [result, setResult] = useState(null);

  const activityMap = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    very: 1.9,
  };

  const calculateCalories = () => {
    if (!height || !weight || !age || !gender || !activity) return;

    const h = parseFloat(height);
    const w = parseFloat(weight);
    const a = parseFloat(age);

    // Mifflin–St Jeor BMR
    let bmr =
      gender === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;

    const maintenance = Math.round(bmr * activityMap[activity]);
    const fatLoss = maintenance - 500;
    const muscleGain = maintenance + 300;

    setResult({ maintenance, fatLoss, muscleGain });
  };

  const levels = [
    { key: "sedentary", label: "Sedentary" },
    { key: "light", label: "Light" },
    { key: "moderate", label: "Moderate" },
    { key: "active", label: "Active" },
    { key: "very", label: "Very Active" },
  ];

  return (
    <section className="relative w-full py-28 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_20%_20%,rgba(255,120,0,0.12),transparent_60%),radial-gradient(40%_40%_at_80%_80%,rgba(0,255,120,0.08),transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-orange-400 uppercase tracking-widest text-sm mb-4">
            🔥 Nutrition Tool
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            DAILY CALORIE{" "}
            <span className="text-orange-500">CALCULATOR</span>
          </h2>
          <p className="mt-4 text-gray-300">
            Calculate your daily caloric needs based on your personal metrics
            and activity level
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Height (cm)
              </label>
              <input
                placeholder="175"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none focus:border-orange-500/50"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Weight (kg)
              </label>
              <input
                placeholder="75"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none focus:border-orange-500/50"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Age (years)
              </label>
              <input
                placeholder="20"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none focus:border-orange-500/50"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Gender
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-sm mb-3 text-gray-300">Activity Level</div>
            <div className="flex flex-wrap gap-3">
              {levels.map((l) => (
                <button
                  key={l.key}
                  onClick={() => setActivity(l.key)}
                  className={`px-5 py-2 rounded-xl border transition ${
                    activity === l.key
                      ? "bg-gradient-to-r from-orange-500 to-red-500 border-transparent"
                      : "border-white/20 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={calculateCalories}
            className="w-full mt-8 py-4 rounded-xl font-semibold tracking-wide bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 transition"
          >
            CALCULATE CALORIES
          </button>

          {result && (
            <>
              <div className="mt-6 text-center text-gray-400 text-sm">
                Based on your metrics and activity level:
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-xl border border-white/10 bg-white/10 p-6 text-center">
                  <div className="text-gray-300 text-sm">Maintenance</div>
                  <div className="text-3xl font-extrabold mt-2">
                    {result.maintenance}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    calories/day
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/10 p-6 text-center">
                  <div className="text-red-500 text-sm">Fat Loss</div>
                  <div className="text-3xl font-extrabold text-red-500 mt-2">
                    {result.fatLoss}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    calories/day
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Lose ~0.5kg per week
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/10 p-6 text-center">
                  <div className="text-green-400 text-sm">Muscle Gain</div>
                  <div className="text-3xl font-extrabold text-green-400 mt-2">
                    {result.muscleGain}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    calories/day
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Gain ~0.3kg per week
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-gray-300">
                <div className="mb-2 font-semibold">💡 Pro Tips</div>
                <ul className="space-y-1 text-gray-400">
                  <li>• Combine calorie targets with strength training</li>
                  <li>• Adjust intake based on progress every 2–4 weeks</li>
                  <li>• Protein: aim for 0.7–1g per pound of body weight</li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

