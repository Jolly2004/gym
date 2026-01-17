// components/contact.jsx

export default function Contact() {
  return (
    <section className="relative w-full py-28 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_20%_20%,rgba(255,0,0,0.12),transparent_60%),radial-gradient(40%_40%_at_80%_80%,rgba(0,255,120,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* CTA */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-red-950/40 via-black/40 to-emerald-950/30 backdrop-blur-xl p-16 text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            START YOUR <br />
            <span className="text-red-500">FITNESS JOURNEY</span> <br />
            TODAY
          </h2>
          <p className="mt-6 text-gray-300 max-w-xl mx-auto">
            Join thousands of members who have already transformed their lives.
            Your success story starts now.
          </p>

          <button className="mt-8 px-8 py-3 rounded-xl font-semibold tracking-wide bg-gradient-to-r from-red-600 to-orange-500 hover:opacity-90 transition">
            CLAIM YOUR FREE TRIAL
          </button>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Form */}
          <div>
            <h3 className="text-lg font-extrabold mb-6">
              GET IN <span className="text-orange-500">TOUCH</span>
            </h3>

            <div className="space-y-5">
              <div>
                <label className="text-xs text-gray-400">Full Name</label>
                <input
                  placeholder="Your Name"
                  className="w-full mt-1 rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-orange-500/50"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400">Phone Number</label>
                <input
                  placeholder="+1 (555) 000-0000"
                  className="w-full mt-1 rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-orange-500/50"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400">Fitness Goal</label>
                <select className="w-full mt-1 rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none">
                  <option>Select your goal</option>
                  <option>Weight Loss</option>
                  <option>Muscle Gain</option>
                  <option>General Fitness</option>
                </select>
              </div>

              <button className="w-full py-3 rounded-xl font-semibold tracking-wide bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 transition">
                SEND MESSAGE
              </button>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-lg font-extrabold mb-6">
              CONTACT <span className="text-red-500">INFO</span>
            </h3>

            <div className="space-y-5">
              {[
                {
                  title: "Location",
                  value: "123 Fitness Avenue\nPower City, PC 12345\nUnited States",
                  icon: "📍",
                },
                {
                  title: "Phone",
                  value: "+1 (555) 123-4567\nMon-Sun, 6 AM - 11 PM",
                  icon: "📞",
                },
                {
                  title: "Email",
                  value: "hello@elitefitnesshub.com\nResponse within 24 hours",
                  icon: "✉️",
                },
              ].map((i) => (
                <div
                  key={i.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                    {i.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{i.title}</div>
                    <div className="text-xs text-gray-400 whitespace-pre-line">
                      {i.value}
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <div className="text-sm mb-3">Follow Us</div>
                <div className="flex gap-3">
                  {["f", "i", "t"].map((s, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer"
                    >
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center text-xs text-gray-400">
          © 2024 Elite Fitness Hub. All rights reserved.
          <div className="mt-2 space-x-4">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Disclaimer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
