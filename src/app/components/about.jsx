// components/about.jsx

export default function About() {
  return (
    <section className="relative w-full py-28 bg-black text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_20%_20%,rgba(255,0,0,0.12),transparent_60%),radial-gradient(40%_40%_at_80%_80%,rgba(0,255,120,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            ABOUT <span className="text-red-500">US</span>
          </h2>
          <p className="mt-5 text-gray-300 leading-relaxed">
            We're committed to transforming lives through fitness, offering
            world-class facilities, expert guidance, and a supportive community
            that pushes you beyond your limits.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Certified Trainers",
              desc: "Our experienced and certified trainers are dedicated to crafting personalized training programs that align with your unique goals and fitness level.",
              icon: (
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              ),
            },
            {
              title: "Modern Equipment",
              desc: "Access state-of-the-art fitness equipment from top brands, meticulously maintained and regularly updated to ensure optimal performance.",
              icon: (
                <path d="M7 10h2V7h2v3h2v2h-2v3H9v-3H7v-2zm10 0h-2V7h-2v3h-2v2h2v3h2v-3h2v-2z" />
              ),
            },
            {
              title: "Flexible Plans",
              desc: "Choose from flexible membership plans designed to fit any schedule and budget, with options for every commitment level.",
              icon: (
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h5v-2h-4V6h-2v7z" />
              ),
            },
          ].map((item) => (
            <div
              key={item.title}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-red-500/40 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-6">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                >
                  {item.icon}
                </svg>
              </div>

              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Card */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">
            <h3 className="text-2xl font-extrabold mb-4">OUR MISSION</h3>
            <p className="text-gray-300 leading-relaxed">
              To empower every individual to achieve their fitness goals by
              providing access to premium facilities, expert guidance, and a
              motivating community environment.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Whether you're a beginner taking your first steps or an athlete
              pushing for personal records, we're here to support every stage
              of your transformation journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
