// components/programs.jsx

export default function Programs() {
  const programs = [
    {
      title: "WEIGHT TRAINING",
      desc:
        "Build muscle and increase strength with our comprehensive weight training programs.",
      points: [
        "Strength-focused routines",
        "Progressive overload tracking",
        "Personalized rep schemes",
      ],
      icon: "🏋️",
    },
    {
      title: "CARDIO & HIIT",
      desc:
        "Boost your endurance and burn calories with high-intensity interval training.",
      points: [
        "Treadmill & cycling routines",
        "HIIT workout protocols",
        "Cardio intensity scaling",
      ],
      icon: "❤️",
    },
    {
      title: "YOGA & FLEXIBILITY",
      desc:
        "Improve flexibility, balance, and mental clarity through guided yoga sessions.",
      points: [
        "Multiple yoga styles",
        "Flexibility progression",
        "Mindfulness practice",
      ],
      icon: "🧘",
    },
    {
      title: "PERSONAL TRAINING",
      desc:
        "One-on-one coaching from our elite trainers tailored to your specific goals.",
      points: [
        "Customized programs",
        "Performance tracking",
        "Nutritional guidance",
      ],
      icon: "👤",
    },
  ];

  return (
    <section className="relative w-full py-28 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(0,255,120,0.12),transparent_60%),radial-gradient(40%_40%_at_20%_80%,rgba(255,0,0,0.12),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            TRAINING <span className="text-green-400">PROGRAMS</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Choose the perfect program tailored to your fitness goals and
            experience level
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-xl mb-6">
                {p.icon}
              </div>

              <h3 className="font-extrabold text-lg mb-3">{p.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {p.desc}
              </p>

              <ul className="space-y-2 text-sm text-gray-300 flex-1">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full py-2.5 rounded-xl text-sm font-semibold tracking-wide bg-gradient-to-r from-red-700 to-orange-600 hover:opacity-90 transition">
                LEARN MORE
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 text-center">
            <h3 className="text-2xl font-extrabold mb-3">CHOOSE YOUR PATH</h3>
            <p className="text-gray-300 max-w-xl mx-auto">
              Not sure which program is right for you? Our expert trainers can
              help you find the perfect fit.
            </p>

            <button className="mt-8 px-8 py-3 rounded-xl font-semibold tracking-wide bg-green-500 text-black hover:bg-green-400 transition">
              GET FREE CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
