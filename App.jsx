import { useEffect } from "react";

export default function LandingPage() {
  useEffect(() => {
    document.title = "Excavator Hire Ireland | Plant Hire Midlands | Grab Hire | CK Plant Ltd";
  }, []);
  const features = [
    {
      title: "Self-Drive Plant Hire",
      description:
        "Reliable excavators and heavy equipment available for flexible hire across Ireland.",
    },
    {
      title: "Attachments & Grabs",
      description:
        "Specialist excavator grabs and attachments for demolition, timber, biomass, and rock armour handling.",
    },
    {
      title: "Nationwide Transport Service",
      description:
        "Our dedicated transport fleet delivers excavators, attachments and machinery safely to sites across all 32 counties of Ireland.",
    },
    {
      title: "Fast, Direct Support",
      description:
        "Talk to a real person quickly for availability, pricing, and machine matching.",
    },
  ];

  const services = [
    "Excavator hire",
    "Demolition grabs",
    "Timber & biomass grabs",
    "Rock armour grabs",
    "Equipment sales",
    "Nationwide plant solutions",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-yellow-500/20 bg-gradient-to-b from-neutral-950 via-black to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(234,179,8,0.10),transparent_24%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:36px_36px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/ck-plant-logo.png"
                alt="CK Plant Ltd - Self Drive Hire & Sales"
                className="h-14 w-auto"
              />
            </div>
            <a
              href="mailto:ckplantltd@gmail.com?subject=Plant%20Hire%20Quote%20Request"
              className="rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-bold text-black shadow-[0_10px_30px_rgba(250,204,21,0.25)] transition hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              Get a Quote
            </a>
          </header>

          <div className="grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-200 shadow-sm backdrop-blur-sm">
                Trusted machinery hire for contractors, demolition, forestry, and site works
              </div>
              <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Plant hire that keeps your job moving.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
                From excavators to specialist grabs and attachments, CK Plant Ltd helps you secure the right machine for the right job — quickly, clearly, and without hassle.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-2xl bg-yellow-400 px-6 py-4 text-center font-bold text-black shadow-[0_12px_30px_rgba(250,204,21,0.25)] transition hover:-translate-y-0.5 hover:bg-yellow-300"
                >
                  Request Availability
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-yellow-500/40 bg-white/5 px-6 py-4 text-center font-semibold text-white transition hover:bg-yellow-400/10"
                >
                  View Services
                </a>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
                {features.map((item) => (
                  <div key={item.title}>
                    {item.title === "Self-Drive Plant Hire" && (
                      <img
                        src="/hitachi-excavator.jpg"
                        alt="Hitachi excavator available for self drive hire"
                        className="mb-4 w-full rounded-2xl border border-yellow-500/20 shadow-2xl"
                      />
                    )}
                    {item.title === "Attachments & Grabs" && (
                      <img
                        src="/excavator-grab.jpg"
                        alt="Excavator demolition grab attachment"
                        className="mb-4 w-full rounded-2xl border border-yellow-500/20 shadow-2xl"
                      />
                    )}
                    {item.title === "Nationwide Transport Service" && (
                      <img
                        src="/plant-transport.jpg"
                        alt="Nationwide machinery transport service"
                        className="mb-4 w-full rounded-2xl border border-yellow-500/20 shadow-2xl"
                      />
                    )}
                    <div className="rounded-2xl border border-yellow-500/20 bg-neutral-950/80 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                      <h3 className="text-sm font-bold text-yellow-400">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-neutral-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pl-10">
              <div className="rounded-[2rem] border border-yellow-500/25 bg-neutral-900 p-8 text-white shadow-2xl shadow-yellow-500/10">
                <div className="rounded-[1.5rem] border border-yellow-500/15 bg-white/5 p-6 backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
                    Why choose CK Plant Ltd
                  </p>
                  <ul className="mt-6 space-y-4 text-sm leading-7 text-neutral-200">
                    <li>• Fast response on plant and attachment enquiries</li>
                    <li>• Specialist equipment for demanding site work</li>
                    <li>• Practical advice on matching machine to application</li>
                    <li>• Trusted by contractors who need dependable support</li>
                  </ul>
                  <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-400 p-5 text-black">
                    <p className="text-sm font-semibold text-black/70">Need a machine urgently?</p>
                    <p className="mt-2 text-2xl font-black">Call 086 265 4388</p>
                    <p className="mt-2 text-sm text-black/80">
                      Speak directly with CK Plant Ltd for current availability and pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">Services</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Equipment solutions built for real site demands
          </h2>
          <p className="mt-4 text-lg text-neutral-300">
            Whether you need a single machine, a specialist attachment, or plant support for an ongoing project, we help you source dependable equipment fast.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-2xl border border-yellow-500/20 bg-neutral-950 p-6 text-base font-semibold text-white shadow-sm transition hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-neutral-900"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-yellow-500/20 bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">Built for action</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              The right equipment, without the runaround.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-neutral-300">
              We focus on practical support, straightforward communication, and equipment that performs when the job cannot slow down.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-yellow-500/20 bg-black p-6">
              <p className="text-4xl font-black text-yellow-400">2T–35T</p>
              <p className="mt-2 text-neutral-300">Grab options and equipment support across a wide operating range</p>
            </div>
            <div className="rounded-2xl border border-yellow-500/20 bg-black p-6">
              <p className="text-4xl font-black text-yellow-400">Direct</p>
              <p className="mt-2 text-neutral-300">No bloated process — just quick answers and practical options</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-yellow-500/20 bg-neutral-950 p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">Coverage</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Covering all 32 counties of Ireland
            </h2>
            <p className="mt-4 text-lg text-neutral-300">
              CK Plant Ltd supplies self drive hire, equipment sales, and specialist attachments nationwide. We support customers across all 32 counties, with our base located in Tullamore, Co. Offaly.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-yellow-500/20 bg-black p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">Nationwide Service</p>
                <p className="mt-2 text-neutral-300">Available across Leinster, Munster, Connacht, and Ulster.</p>
              </div>
              <div className="rounded-2xl border border-yellow-500/20 bg-black p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">Main Base</p>
                <p className="mt-2 text-neutral-300">Tullamore, County Offaly, Ireland.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-yellow-500/20 bg-black p-4 shadow-2xl">
            <div className="relative overflow-hidden rounded-[1.25rem] border border-yellow-500/10 bg-neutral-900 p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">Ireland Coverage Map</p>
                  <p className="mt-2 text-sm text-neutral-400">Serving all 32 counties with a base in the Midlands</p>
                </div>
                <div className="rounded-full border border-yellow-500/30 bg-yellow-400/10 px-3 py-1 text-xs font-bold text-yellow-300">
                  32 Counties Covered
                </div>
              </div>

              <div className="relative flex h-[420px] items-center justify-center rounded-[1.25rem] border border-yellow-500/15 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.10),transparent_45%)]">
                <svg viewBox="0 0 320 420" className="h-full w-full max-w-[320px]" aria-label="Map of Ireland showing CK Plant Ltd coverage and Tullamore location">
                  <path
                    d="M171 22c14 9 29 15 40 28 8 10 18 16 28 24 13 10 19 28 26 43 7 15 20 26 24 43 4 18-5 35-2 53 3 18 18 34 17 53-1 18-13 31-20 47-8 20-11 43-23 61-13 18-33 28-49 42-16 15-29 37-51 45-23 8-47-2-70-4-21-2-43 1-62-7-20-9-31-29-46-44-15-15-34-28-43-47-9-19-7-42-9-63-2-18-14-35-12-54 2-19 18-34 24-52 6-16 4-36 16-49 11-13 31-16 45-25 16-10 27-26 43-34 18-8 39-4 58-8 16-3 30-17 46-12z"
                    fill="#111111"
                    stroke="#facc15"
                    strokeWidth="6"
                  />
                  <path
                    d="M238 77c10 9 24 17 28 31M251 141c8 12 15 24 15 39M241 226c-4 12-4 26-12 37M205 307c-10 10-18 22-31 28M128 350c-18 2-36 5-53-2M82 321c-13-8-25-17-33-30M55 256c-4-12-9-24-7-37M54 166c5-15 14-28 24-39M87 95c12-8 24-16 38-20M150 62c14-3 28-7 41-2"
                    stroke="#facc15"
                    strokeOpacity="0.28"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle cx="160" cy="215" r="78" fill="#facc15" fillOpacity="0.12" />
                  <path
                    d="M160 170c-18 0-32 14-32 32 0 26 32 64 32 64s32-38 32-64c0-18-14-32-32-32z"
                    fill="#facc15"
                    stroke="#000000"
                    strokeWidth="4"
                  />
                  <circle cx="160" cy="202" r="10" fill="#000000" />
                  <text x="178" y="198" fill="#ffffff" fontSize="14" fontWeight="700">Tullamore</text>
                  <text x="178" y="216" fill="#a3a3a3" fontSize="11">Co. Offaly</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-yellow-500/20 bg-neutral-950 p-8 shadow-sm lg:grid-cols-2 lg:p-12">
          <div>
            <img
              src="/out-of-hours-rental.jpg"
              alt="Excavator working at night on motorway job"
              className="mb-6 w-full rounded-2xl border border-yellow-500/20 shadow-2xl"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">Out of Hours Hire</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Flexible equipment hire for night shifts and critical projects
            </h2>
            <p className="mt-5 text-lg text-neutral-300">
              At CK Plant Ltd we understand that many of Ireland’s largest infrastructure projects operate outside normal working hours. From motorway upgrades and rail maintenance to airport works and emergency site operations, contractors often need equipment delivered and collected during night shifts.
            </p>
            <p className="mt-4 text-lg text-neutral-300">
              We specialise in providing flexible out-of-hours plant hire, ensuring our customers have the machines and attachments they need when the job demands it. Working with some of Ireland’s leading contractors means being dependable, responsive, and ready to support operations at any time of day or night.
            </p>
            <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-black p-5">
              <p className="text-yellow-400 font-bold">Night Shift & Emergency Hire Available</p>
              <p className="mt-2 text-neutral-300">Supporting motorway, rail, airport and major infrastructure works across Ireland.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-yellow-500/20 bg-neutral-950 p-8 shadow-sm lg:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">Plant Hire Ireland</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Excavator hire, grab hire and plant solutions across Ireland
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-300">
              CK Plant Ltd provides reliable plant hire in Ireland for contractors, civil engineering firms, demolition specialists, forestry operators and infrastructure projects. Based in Tullamore, Co. Offaly, we supply self drive excavator hire, specialist attachment hire and machinery support for projects throughout the country.
            </p>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Our services are designed for customers who need dependable machines, specialist excavator grabs and responsive support. Whether you are searching for excavator hire in Offaly, plant hire in the Midlands, demolition grab hire in Ireland or flexible machinery rental for major works, CK Plant Ltd delivers practical solutions backed by real industry experience.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-yellow-500/20 bg-black p-6">
              <h3 className="text-xl font-black text-white">Excavator Hire Ireland</h3>
              <p className="mt-3 text-neutral-300">
                Self drive excavator hire for contractors and site teams needing reliable machines delivered fast.
              </p>
            </div>
            <div className="rounded-2xl border border-yellow-500/20 bg-black p-6">
              <h3 className="text-xl font-black text-white">Plant Hire Midlands</h3>
              <p className="mt-3 text-neutral-300">
                Centrally based in Tullamore, we support projects across Offaly and throughout the Midlands region.
              </p>
            </div>
            <div className="rounded-2xl border border-yellow-500/20 bg-black p-6">
              <h3 className="text-xl font-black text-white">Grab Hire Ireland</h3>
              <p className="mt-3 text-neutral-300">
                Specialist grabs for demolition, timber, biomass and rock armour applications from 2 ton to 35 ton.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-yellow-500/20 bg-black p-8 shadow-sm lg:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">Frequently Asked Questions</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Plant hire answers for contractors across Ireland
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-yellow-500/20 bg-neutral-950 p-6">
              <h3 className="text-lg font-black text-white">Do you offer plant hire across Ireland?</h3>
              <p className="mt-3 text-neutral-300">
                Yes. CK Plant Ltd covers all 32 counties of Ireland, supplying machinery, attachments and specialist support for customers nationwide.
              </p>
            </div>
            <div className="rounded-2xl border border-yellow-500/20 bg-neutral-950 p-6">
              <h3 className="text-lg font-black text-white">Where is CK Plant Ltd based?</h3>
              <p className="mt-3 text-neutral-300">
                We are based in Tullamore, County Offaly, giving us a strong central location for plant hire throughout the Midlands and nationwide.
              </p>
            </div>
            <div className="rounded-2xl border border-yellow-500/20 bg-neutral-950 p-6">
              <h3 className="text-lg font-black text-white">What attachments do you supply?</h3>
              <p className="mt-3 text-neutral-300">
                We supply specialist excavator grabs including demolition grabs, timber and biomass grabs, and rock armour grabs across a wide machine range.
              </p>
            </div>
            <div className="rounded-2xl border border-yellow-500/20 bg-neutral-950 p-6">
              <h3 className="text-lg font-black text-white">Do you support out of hours projects?</h3>
              <p className="mt-3 text-neutral-300">
                Yes. We regularly support night shifts, motorway works, rail projects, airport works and urgent contractor requirements outside standard hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-yellow-500/20 bg-neutral-950 p-8 shadow-sm lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">Contact</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Ready to book equipment or request pricing?
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-neutral-300">
              Tell us what machine or attachment you need and we’ll help you move quickly with a suitable option.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-yellow-500/20 bg-black p-8 shadow-md">
            <div className="space-y-5 text-sm">
              <div>
                <p className="font-semibold text-neutral-400">Company</p>
                <p className="mt-1 text-lg font-bold text-white">CK Plant Ltd</p>
              </div>
              <div>
                <p className="font-semibold text-neutral-400">Phone</p>
                <a href="tel:0862654388" className="mt-1 block text-lg font-bold text-yellow-400">
                  086 265 4388
                </a>
              </div>
              <div>
                <p className="font-semibold text-neutral-400">Location</p>
                <p className="mt-1 text-lg font-bold text-white">Tullamore, County Offaly, Ireland</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/353862654388"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 font-bold text-black shadow-2xl transition hover:scale-105"
      >
        <span className="text-lg">💬</span>
        WhatsApp Hire
      </a>
    </div>
  );
}
