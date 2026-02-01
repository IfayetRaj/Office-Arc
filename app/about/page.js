import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { FaDraftingCompass, FaCouch, FaTruck } from "react-icons/fa";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="px-6 md:px-16 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6`}
          >
            Crafting Workspaces That Inspire
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Office Arc designs and builds modern office furniture that blends
            functionality, comfort, and timeless aesthetics.
          </p>
        </div>
      </section>

    {/* WHO WE ARE SECTION */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className={`${playfair.className} text-3xl font-bold mb-4`}
            >
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Office Arc is a design-driven furniture studio specializing in
              premium office solutions. We believe a workspace should not only
              look good but also enhance productivity and well-being.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From startups to corporate offices, we collaborate closely with
              our clients to deliver furniture that reflects their identity and
              work culture.
            </p>
          </div>

          <div className="relative w-full h-72 md:h-96 bg-gray-200 rounded-xl overflow-hidden">
            <Image
              src="/aboutHero.png"
              alt="Office Arc Workspace"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

    {/* WHAT WE DO SECTION */}
      <section className="px-6 md:px-16 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`${playfair.className} text-3xl font-bold text-center mb-12`}
          >
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Feature
              icon={<FaDraftingCompass />}
              title="Custom Design"
              desc="Tailor-made furniture designed to match your workspace and brand identity."
            />
            <Feature
              icon={<FaCouch />}
              title="Premium Furniture"
              desc="High-quality materials crafted with precision and durability in mind."
            />
            <Feature
              icon={<FaTruck />}
              title="End-to-End Delivery"
              desc="From concept to installation, we manage the entire process seamlessly."
            />
          </div>
        </div>
      </section>

    {/* WHY OFFICE ARC SECTION */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className={`${playfair.className} text-3xl font-bold mb-6`}
          >
            Why Office Arc?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We focus on quality over quantity. Every piece we create is built
            with intention, ensuring comfort, functionality, and long-lasting
            value for modern workspaces.
          </p>
        </div>
      </section>

    {/* PRODUCTS */}
      <section className="px-6 md:px-16 py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`${playfair.className} text-3xl font-bold text-center mb-12`}
          >
            Our Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <Step number="01" title="Consultation" />
            <Step number="02" title="Design & Planning" />
            <Step number="03" title="Production" />
            <Step number="04" title="Delivery & Setup" />
          </div>
        </div>
      </section>

    {/* CALL TO ACTION */}
      <section className="px-6 md:px-16 py-20 text-center">
        <h2
          className={`${playfair.className} text-3xl font-bold mb-6`}
        >
          Let’s Build Your Workspace
        </h2>
        <p className="text-gray-600 mb-8">
          Have a project in mind? Let’s turn your ideas into reality.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}

// COMPONENTS

function Feature({ icon, title, desc }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm text-center">
      <div className="text-3xl mb-4 text-black mx-auto w-fit">
        {icon}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function Step({ number, title }) {
  return (
    <div>
      <p className="text-4xl font-bold opacity-40">{number}</p>
      <h4 className="mt-2 font-semibold">{title}</h4>
    </div>
  );
}