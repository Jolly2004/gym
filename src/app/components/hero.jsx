// app/page.tsx or components/Hero.tsx

export default function Hero() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_30%,rgba(255,0,0,0.15),transparent_60%),radial-gradient(50%_40%_at_80%_70%,rgba(0,255,120,0.12),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 text-red-500 font-semibold tracking-widest text-sm uppercase mb-6">
              <span className="inline-block w-5 h-5 bg-red-500 rounded-sm" />
              Elite Fitness Hub
            </div>

            <h1 className="text-[52px] leading-[1.05] font-extrabold tracking-tight">
              TRANSFORM YOUR <br />
              <span className="text-red-500">BODY</span> <br />
              TRANSFORM YOUR LIFE.
            </h1>

            <p className="mt-6 max-w-xl text-gray-300 leading-relaxed">
              Join thousands of members on their journey to peak fitness.
              State-of-the-art equipment, certified trainers, and programs
              designed for every level.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <button className="px-7 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition font-semibold tracking-wide">
                JOIN NOW
              </button>
              <button className="px-7 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition font-semibold tracking-wide">
                CALCULATE FITNESS
              </button>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="relative h-[420px] rounded-2xl border border-white/10 bg-gradient-to-br from-red-950/60 via-black/40 to-emerald-950/60 backdrop-blur-xl overflow-hidden">
              {/* Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-[320px] h-[320px] rounded-full border border-white/10" />
                <div className="absolute w-[220px] h-[220px] rounded-full border border-white/10" />
                <div className="absolute w-[120px] h-[120px] rounded-full border border-white/10" />
              </div>

              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-10 h-10 text-red-500"
                    fill="currentColor"
                  >
                    <path d="M21 10h-3.17l-1.84-3.68A2 2 0 0 0 14.17 5H9.83a2 2 0 0 0-1.82 1.32L6.17 10H3a1 1 0 1 0 0 2h3.17l1.84 3.68A2 2 0 0 0 9.83 17h4.34a2 2 0 0 0 1.82-1.32L17.83 12H21a1 1 0 1 0 0-2z" />
                  </svg>
                </div>
                <p className="text-gray-300 tracking-wide">
                  Premium Fitness Experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
          {[
            { value: "5000+", label: "Active Members" },
            { value: "250+", label: "Expert Trainers" },
            { value: "15000+", label: "Success Stories" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-red-500 text-3xl font-extrabold tracking-tight">
                {s.value}
              </div>
              <div className="mt-1 text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
