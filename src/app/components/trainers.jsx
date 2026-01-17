// components/trainers.jsx

export default function Trainers() {
  const trainers = [
    {
      name: "Marcus Johnson",
      role: "Strength Training",
      exp: "8 yrs exp",
      rating: "4.9",
      icon: "💪",
      certs: ["NASM", "ACE", "CSCS"],
    },
    {
      name: "Sarah Mitchell",
      role: "Yoga & Flexibility",
      exp: "6 yrs exp",
      rating: "4.8",
      icon: "🧘",
      certs: ["RYT 200", "ACE", "Pilates"],
    },
    {
      name: "James Chen",
      role: "CrossFit & HIIT",
      exp: "7 yrs exp",
      rating: "4.9",
      icon: "⚡",
      certs: ["CrossFit L2", "NASM", "CPR"],
    },
    {
      name: "Alex Rodriguez",
      role: "Cardio & Conditioning",
      exp: "5 yrs exp",
      rating: "4.7",
      icon: "🏃",
      certs: ["ACE", "ISSA", "CPR"],
    },
  ];

  return (
    <section className="relative w-full py-28 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_20%_20%,rgba(255,0,0,0.12),transparent_60%),radial-gradient(40%_40%_at_80%_80%,rgba(0,255,120,0.10),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            MEET OUR <span className="text-green-400">TRAINERS</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Elite professionals dedicated to transforming your fitness journey
            with expertise and motivation
          </p>
        </div>

        {/* Trainers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {trainers.map((t) => (
            <div key={t.name} className="text-center">
              <div className="relative mx-auto w-40 h-40 rounded-full bg-gradient-to-br from-red-600/40 to-orange-500/20 flex items-center justify-center shadow-[0_0_40px_rgba(255,0,0,0.45)]">
                <div className="w-36 h-36 rounded-full bg-black flex items-center justify-center text-5xl">
                  {t.icon}
                </div>

                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-orange-500 text-xs px-3 py-1 rounded-full">
                  {t.exp}
                </div>
              </div>

              <h3 className="mt-6 font-extrabold text-lg">{t.name}</h3>
              <p className="text-red-500 text-sm">{t.role}</p>

              <div className="mt-2 flex items-center justify-center gap-1 text-orange-400 text-sm">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
                <span className="text-gray-400 ml-1">({t.rating})</span>
              </div>

              <ul className="mt-4 space-y-1 text-sm text-gray-300">
                {t.certs.map((c) => (
                  <li key={c} className="flex items-center justify-center gap-2">
                    <span className="text-green-400">✔</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Trainers Excel */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 text-center">
            <h3 className="text-2xl font-extrabold mb-10">
              WHY OUR <span className="text-green-400">TRAINERS EXCEL</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Certified & Experienced",
                  desc:
                    "All trainers hold industry certifications and average 6+ years of experience",
                  icon: "👤",
                  color: "from-red-500 to-orange-500",
                },
                {
                  title: "Goal-Oriented",
                  desc:
                    "Personalized training programs designed to achieve your specific fitness goals",
                  icon: "🎯",
                  color: "from-orange-500 to-red-500",
                },
                {
                  title: "Passionate & Supportive",
                  desc:
                    "Motivating coaching style that pushes you while keeping you safe and healthy",
                  icon: "❤️",
                  color: "from-green-400 to-green-600",
                },
              ].map((b) => (
                <div key={b.title} className="text-center">
                  <div
                    className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${b.color} flex items-center justify-center mb-4`}
                  >
                    {b.icon}
                  </div>
                  <div className="font-semibold mb-2">{b.title}</div>
                  <p className="text-sm text-gray-400">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
