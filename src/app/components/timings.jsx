// components/timings.jsx

export default function Timings() {
  return (
    <section className="relative w-full py-28 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_20%_20%,rgba(255,120,0,0.12),transparent_60%),radial-gradient(40%_40%_at_80%_80%,rgba(0,255,120,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-orange-400 uppercase tracking-widest text-sm mb-4">
            ⏱ Weekly Schedule
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            GYM TIMINGS &{" "}
            <span className="text-orange-500">CLASSES</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Find the perfect time to train. Classes available throughout the
            day with expert instructors.
          </p>
        </div>

        {/* Hours */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl px-10 py-6 text-center">
            <div className="text-sm text-gray-400 mb-1">Weekday Hours</div>
            <div className="text-xl font-extrabold text-orange-400">
              6 AM - 11 PM
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl px-10 py-6 text-center">
            <div className="text-sm text-gray-400 mb-1">Weekend Hours</div>
            <div className="text-xl font-extrabold text-green-400">
              8 AM - 10 PM
            </div>
          </div>
        </div>

        {/* Schedules */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Monday - Friday */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">Monday - Friday</h3>
              <span className="text-xs bg-red-500 px-3 py-1 rounded-full">
                Peak Hours
              </span>
            </div>

            {[
              ["Morning Cardio", "Coach Alex", "6:00 - 7:00 AM"],
              ["Weight Training", "Coach Marcus", "7:30 - 9:00 AM"],
              ["Yoga Flow", "Coach Sarah", "12:00 - 1:00 PM"],
              ["HIIT Blast", "Coach James", "5:30 - 6:30 PM"],
              ["Evening Classes", "Multiple", "7:00 - 10:00 PM"],
            ].map((i) => (
              <div
                key={i[0]}
                className="flex items-center justify-between py-2 border-b border-white/10 last:border-none"
              >
                <div>
                  <div className="text-sm font-semibold">{i[0]}</div>
                  <div className="text-xs text-gray-400">{i[1]}</div>
                </div>
                <div className="text-sm text-orange-400">{i[2]}</div>
              </div>
            ))}
          </div>

          {/* Saturday */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <h3 className="font-bold text-lg mb-4">Saturday</h3>
            {[
              ["Group Training", "Coach Team", "8:00 - 9:30 AM"],
              ["Strength & Power", "Coach Marcus", "10:00 - 11:30 AM"],
              ["Zumba & Dance", "Coach Lisa", "5:00 - 6:00 PM"],
              ["CrossFit WOD", "Coach James", "6:30 - 7:30 PM"],
            ].map((i) => (
              <div
                key={i[0]}
                className="flex items-center justify-between py-2 border-b border-white/10 last:border-none"
              >
                <div>
                  <div className="text-sm font-semibold">{i[0]}</div>
                  <div className="text-xs text-gray-400">{i[1]}</div>
                </div>
                <div className="text-sm text-orange-400">{i[2]}</div>
              </div>
            ))}
          </div>

          {/* Sunday */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <h3 className="font-bold text-lg mb-4">Sunday</h3>
            {[
              ["Recovery Yoga", "Coach Sarah", "9:00 - 10:00 AM"],
              ["Functional Fitness", "Coach Alex", "10:30 - 11:30 AM"],
              ["Meditation & Stretch", "Coach Sarah", "6:00 - 7:00 PM"],
            ].map((i) => (
              <div
                key={i[0]}
                className="flex items-center justify-between py-2 border-b border-white/10 last:border-none"
              >
                <div>
                  <div className="text-sm font-semibold">{i[0]}</div>
                  <div className="text-xs text-gray-400">{i[1]}</div>
                </div>
                <div className="text-sm text-orange-400">{i[2]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Classes */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">
          <h3 className="text-xl font-extrabold mb-8">
            SPECIAL <span className="text-orange-500">CLASSES</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Yoga Sessions",
                desc: "Flexibility and mindfulness training",
                time: "Daily: 12 PM & 6 PM",
                icon: "🧘",
              },
              {
                title: "Zumba Classes",
                desc: "High-energy dance cardio sessions",
                time: "Sat & Sun: 5 PM",
                icon: "💃",
              },
              {
                title: "CrossFit WOD",
                desc: "Functional strength training",
                time: "Sat, Sun & Mon: 6:30 PM",
                icon: "⚡",
              },
            ].map((c) => (
              <div key={c.title} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  {c.icon}
                </div>
                <div>
                  <div className="font-semibold">{c.title}</div>
                  <div className="text-sm text-gray-400">{c.desc}</div>
                  <div className="text-xs text-gray-500 mt-1">{c.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
