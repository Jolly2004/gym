// components/membership.jsx

export default function Membership() {
  const plans = [
    {
      name: "Basic",
      tag: "Perfect for beginners",
      price: "₹999",
      color: "text-blue-400",
      features: [
        "24/7 Gym Access",
        "All Equipment & Machines",
        "2 Personal Training Sessions/Month",
        "Basic Nutrition Guidance",
        "Community Access",
      ],
      button: "bg-white/10 hover:bg-white/20",
    },
    {
      name: "Pro",
      tag: "For dedicated athletes",
      price: "₹1,999",
      popular: true,
      color: "text-red-500",
      features: [
        "24/7 Gym Access",
        "All Equipment & Classes",
        "8 Personal Training Sessions/Month",
        "Full Nutrition & Meal Planning",
        "Performance Tracking",
        "Priority Class Booking",
        "Monthly Fitness Assessment",
        "Guest Passes (4/month)",
      ],
      button: "bg-gradient-to-r from-red-600 to-orange-500 hover:opacity-90",
    },
    {
      name: "Elite",
      tag: "Premium experience",
      price: "₹3,499",
      color: "text-green-400",
      features: [
        "24/7 Gym Access",
        "All Classes & Facilities",
        "Unlimited Personal Training",
        "Dedicated Personal Trainer",
        "Nutritionist Consultation",
        "Advanced Performance Analytics",
        "Monthly Body Composition Analysis",
        "Unlimited Guest Passes",
        "Recovery & Spa Access",
        "Priority Equipment Access",
      ],
      button: "bg-white/10 hover:bg-white/20",
    },
  ];

  return (
    <section className="relative w-full py-28 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_20%,rgba(255,0,0,0.12),transparent_60%),radial-gradient(40%_40%_at_80%_80%,rgba(0,255,120,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            MEMBERSHIP <span className="text-red-500">PLANS</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan to fit your fitness journey and goals
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 ${
                p.popular ? "ring-2 ring-red-500/40 shadow-[0_0_40px_rgba(255,0,0,0.25)]" : ""
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-xs px-3 py-1 rounded-full font-semibold">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="text-sm text-gray-400 mt-1">{p.tag}</p>

              <div className={`mt-6 text-4xl font-extrabold ${p.color}`}>
                {p.price}
                <span className="text-sm text-gray-400 font-medium">
                  {" "}
                  / month
                </span>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Billed every month
              </div>

              <div className="h-px bg-white/10 my-6" />

              <ul className="space-y-3 text-sm text-gray-300">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 rounded-xl font-semibold tracking-wide transition ${p.button}`}
              >
                GET STARTED
              </button>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center text-sm text-gray-400">
            <p>
              All plans include a 7-day free trial. No credit card required.
            </p>
            <p className="mt-2">
              Want a custom plan? Contact our team for enterprise solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
