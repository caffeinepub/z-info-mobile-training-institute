import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Award,
  BarChart3,
  Battery,
  BookOpen,
  Briefcase,
  CheckCircle,
  ChevronRight,
  Clock,
  Cpu,
  Droplets,
  MapPin,
  Menu,
  Monitor,
  Phone,
  Shield,
  Star,
  Store,
  TrendingUp,
  Users,
  Wrench,
  X,
  Youtube,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add("visible");
        }
      },
      { threshold: 0.12 },
    );
    for (const el of document.querySelectorAll(".section-fade")) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
}

const courseTopics = [
  {
    id: 1,
    icon: Wrench,
    title: "Mobile Hardware Repairing",
    hindi:
      "\u092e\u094b\u092c\u093e\u0907\u0932 \u0915\u0947 \u0906\u0902\u0924\u0930\u093f\u0915 \u092a\u0941\u0930\u094d\u091c\u094b\u0902 \u0915\u0940 \u092e\u0930\u092e\u094d\u092e\u0924 \u0938\u0940\u0916\u0947\u0902 \u091c\u0948\u0938\u0947 PCB, IC, \u0914\u0930 \u0915\u0928\u0947\u0915\u094d\u091f\u0930\u0964",
    english:
      "Learn to repair internal mobile components like PCB, ICs, and connectors.",
  },
  {
    id: 2,
    icon: Cpu,
    title: "Mobile Software / Flashing",
    hindi:
      "\u092e\u094b\u092c\u093e\u0907\u0932 \u0938\u0949\u092b\u094d\u091f\u0935\u0947\u092f\u0930 \u0907\u0902\u0938\u094d\u091f\u0949\u0932 \u0914\u0930 \u092b\u094d\u0932\u0948\u0936\u093f\u0902\u0917 \u0915\u0940 \u092a\u0942\u0930\u0940 \u092a\u094d\u0930\u0915\u094d\u0930\u093f\u092f\u093e \u0938\u0940\u0916\u0947\u0902\u0964",
    english:
      "Master the complete process of mobile software installation and flashing.",
  },
  {
    id: 3,
    icon: Zap,
    title: "Motherboard Chip Level Repairing",
    hindi:
      "\u092e\u093e\u0907\u0915\u094d\u0930\u094b\u0938\u094d\u0915\u094b\u092a \u0938\u0947 \u092e\u0926\u0930\u092c\u094b\u0930\u094d\u0921 \u0915\u0947 \u091b\u094b\u091f\u0947-\u091b\u094b\u091f\u0947 \u091a\u093f\u092a \u0915\u0940 \u092e\u0930\u092e\u094d\u092e\u0924 \u0915\u0930\u0928\u093e \u0938\u0940\u0916\u0947\u0902\u0964",
    english:
      "Learn chip-level motherboard repair using microscopes and precision tools.",
  },
  {
    id: 4,
    icon: Droplets,
    title: "Water Damage Repair",
    hindi:
      "\u092a\u093e\u0928\u0940 \u0938\u0947 \u062a\u0631\u093e\u092c \u092e\u094b\u092c\u093e\u0907\u0932 \u0915\u094b \u0920\u0940\u0915 \u0915\u0930\u0928\u0947 \u0915\u0940 \u0924\u0915\u0928\u0940\u0915 \u0938\u0940\u0916\u0947\u0902\u0964",
    english: "Learn techniques to restore water-damaged mobile phones.",
  },
  {
    id: 5,
    icon: Monitor,
    title: "Display & Touch Replacement",
    hindi:
      "\u0921\u093f\u0938\u094d\u092a\u094d\u0932\u0947 \u0914\u0930 \u091f\u091a \u0938\u094d\u0915\u094d\u0930\u0940\u0928 \u092c\u0926\u0932\u0928\u0947 \u0914\u0930 \u0938\u0941\u0927\u093e\u0930\u0928\u0947 \u0915\u0940 \u0915\u0932\u093e \u0938\u0940\u0916\u0947\u0902\u0964",
    english: "Master display and touch screen replacement and calibration.",
  },
  {
    id: 6,
    icon: Battery,
    title: "Battery & Charging Issues",
    hindi:
      "\u092c\u0948\u091f\u0930\u0940 \u0914\u0930 \u091a\u093e\u0930\u094d\u091c\u093f\u0902\u0917 \u0915\u0940 \u0938\u092e\u0938\u094d\u092f\u093e\u0913\u0902 \u0915\u094b \u092a\u0939\u091a\u093e\u0928\u0928\u093e \u0914\u0930 \u0920\u0940\u0915 \u0915\u0930\u0928\u093e \u0938\u0940\u0916\u0947\u0902\u0964",
    english: "Diagnose and fix battery and charging problems professionally.",
  },
  {
    id: 7,
    icon: Briefcase,
    title: "Tools & Equipment Usage",
    hindi:
      "\u092e\u094b\u092c\u093e\u0907\u0932 \u0930\u093f\u092a\u0947\u092f\u0930\u093f\u0902\u0917 \u092e\u0947\u0902 \u0909\u092a\u092f\u094b\u0917 \u0939\u094b\u0928\u0947 \u0935\u093e\u0932\u0947 \u0938\u092d\u0940 \u0909\u092a\u0915\u0930\u0923\u094b\u0902 \u0915\u093e \u092a\u094d\u0930\u092f\u094b\u0917 \u0938\u0940\u0916\u0947\u0902\u0964",
    english:
      "Learn to use all professional tools and equipment used in mobile repair.",
  },
  {
    id: 8,
    icon: Store,
    title: "Business & Shop Management",
    hindi:
      "\u0905\u092a\u0928\u0940 \u062e\u0941\u062f \u0915\u0940 \u092e\u094b\u092c\u093e\u0907\u0932 \u0930\u093f\u092a\u0947\u092f\u0930 \u0915\u0940 \u0926\u0941\u0915\u093e\u0928 \u062e\u094b\u0932\u0928\u0947 \u0914\u0930 \u091a\u0932\u093e\u0928\u0947 \u0915\u0940 \u091c\u093e\u0928\u0915\u093e\u0930\u0940\u0964",
    english: "Learn how to start and run your own mobile repair business.",
  },
];

const students = [
  {
    name: "Sakir Bhai",
    location: "Patna",
    initials: "SB",
    quote:
      "\u092f\u0939 \u0915\u094b\u0930\u094d\u0938 \u092e\u0947\u0930\u0940 \u091c\u093f\u0902\u0926\u0917\u0940 \u092c\u0926\u0932 \u0926\u0940!",
    salary: "\u20b945,000/month",
  },
  {
    name: "Arjun Kumar",
    location: "Muzaffarpur",
    initials: "AK",
    quote:
      "\u0905\u092c \u092e\u0947\u0930\u0940 \u0905\u092a\u0928\u0940 \u0926\u0941\u0915\u093e\u0928 \u0939\u0948!",
    salary: "\u20b950,000/month",
  },
  {
    name: "Rahul Singh",
    location: "Hajipur",
    initials: "RS",
    quote:
      "90 \u0926\u093f\u0928\u094b\u0902 \u092e\u0947\u0902 \u0938\u092c \u0938\u0940\u0916 \u0932\u093f\u092f\u093e!",
    salary: "\u20b942,000/month",
  },
  {
    name: "Mohammad Raza",
    location: "Vaishali",
    initials: "MR",
    quote:
      "\u092c\u0947\u0939\u0924\u0930\u0940\u0928 \u092a\u094d\u0930\u0936\u093f\u0915\u094d\u0937\u0923 \u092e\u093f\u0932\u093e \u092f\u0939\u093e\u0901!",
    salary: "\u20b948,000/month",
  },
  {
    name: "Priya Sharma",
    location: "Samastipur",
    initials: "PS",
    quote:
      "\u0932\u0921\u093c\u0915\u093f\u092f\u093e\u0901 \u092d\u0940 \u0915\u0930 \u0938\u0915\u0924\u0940 \u0939\u0948\u0902!",
    salary: "\u20b940,000/month",
  },
  {
    name: "Imran Khan",
    location: "Chapra",
    initials: "IK",
    quote:
      "\u0939\u0941\u0928\u0930 \u0939\u0948 \u0924\u094b \u0915\u0926\u0930 \u0939\u0948 - \u0938\u091a \u0939\u0948!",
    salary: "\u20b952,000/month",
  },
  {
    name: "Deepak Yadav",
    location: "Begusarai",
    initials: "DY",
    quote:
      "\u0938\u0930\u094d\u0935\u093f\u0938 \u0938\u0947\u0902\u091f\u0930 \u062e\u094b\u0932 \u0932\u093f\u092f\u093e!",
    salary: "\u20b946,000/month",
  },
  {
    name: "Farhan Ali",
    location: "Sitamarhi",
    initials: "FA",
    quote:
      "Z.info \u0928\u0947 \u092e\u0947\u0930\u093e \u092d\u0935\u093f\u0937\u094d\u092f \u092c\u0928\u093e\u092f\u093e!",
    salary: "\u20b944,000/month",
  },
];

const avatarColors = [
  "#F26A21",
  "#E05A10",
  "#F59E0B",
  "#D97706",
  "#EF4444",
  "#F26A21",
  "#F59E0B",
  "#E05A10",
];

const features = [
  {
    icon: Users,
    title: "Expert Trainers",
    hindi:
      "\u0935\u093f\u0936\u0947\u0937\u091c\u094d\u091e \u092a\u094d\u0930\u0936\u093f\u0915\u094d\u0937\u0915",
    desc: "10+ years of industry experience",
  },
  {
    icon: BookOpen,
    title: "Practical Training",
    hindi:
      "\u092a\u094d\u0930\u093e\u092f\u094b\u0917\u093f\u0915 \u092a\u094d\u0930\u0936\u093f\u0915\u094d\u0937\u0923",
    desc: "Hands-on real device practice",
  },
  {
    icon: Shield,
    title: "100% Job Support",
    hindi:
      "100% \u0928\u094c\u0915\u0930\u0940 \u0938\u0939\u093e\u092f\u0924\u093e",
    desc: "Placement assistance guaranteed",
  },
  {
    icon: BarChart3,
    title: "Modern Equipment",
    hindi:
      "\u0906\u0927\u0941\u0928\u093f\u0915 \u0909\u092a\u0915\u0930\u0923",
    desc: "Latest tools & technology",
  },
];

const careerOpps = [
  "Mobile Technician",
  "Service Center Employee",
  "Own Shop Owner",
  "Online Repair Service",
  "Mobile Accessories Shop",
  "Corporate Repair Services",
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Success Stories", href: "#success" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];

const ORANGE = "oklch(0.648 0.175 42)";
const NAVY = "oklch(0.13 0.05 240)";

export default function App() {
  useScrollReveal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", mobile: "", address: "" });
  const [errors, setErrors] = useState({ name: "", mobile: "", address: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = { name: "", mobile: "", address: "" };
    if (!form.name.trim()) errs.name = "Name is required";
    if (!/^[0-9]{10}$/.test(form.mobile))
      errs.mobile = "Enter valid 10-digit mobile number";
    if (!form.address.trim()) errs.address = "Address is required";
    setErrors(errs);
    if (errs.name || errs.mobile || errs.address) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* STICKY HEADER */}
      <header
        className="fixed top-0 left-0 right-0 z-50 shadow-lg"
        style={{
          background: "oklch(0.13 0.05 240 / 0.97)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2"
            data-ocid="nav.link"
          >
            <div className="flex flex-col">
              <span
                className="text-2xl font-black leading-none"
                style={{ color: ORANGE }}
              >
                Z.info
              </span>
              <span
                className="text-[10px] font-medium leading-none tracking-wider uppercase"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Mobile Training Institute
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{ color: "rgba(255,255,255,0.75)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                }}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              data-ocid="nav.primary_button"
              className="btn-orange hidden sm:flex items-center rounded-full px-5 py-2 text-sm font-semibold"
            >
              Free Demo
            </a>
            <button
              type="button"
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              data-ocid="nav.toggle"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="md:hidden border-t"
            style={{
              background: "oklch(0.12 0.05 240)",
              borderColor: "rgba(255,255,255,0.1)",
            }}
          >
            <nav className="flex flex-col px-4 py-3 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-2 text-sm font-medium transition-colors"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                  onClick={() => setMenuOpen(false)}
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-orange mt-2 block w-full rounded-full py-2 font-semibold text-sm text-center"
                data-ocid="nav.primary_button"
              >
                Free Demo
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="hero-gradient pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white section-fade visible">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: ORANGE }}
              >
                Z.info Mobile Training Institute
              </p>
              <h1
                className="text-4xl sm:text-5xl font-black leading-tight mb-3 font-hind"
                style={{ color: "white" }}
              >
                बने मोबाइल इंजीनियर
                <span className="block" style={{ color: ORANGE }}>
                  मात्र 90 दिनों में
                </span>
              </h1>
              <p
                className="text-xl font-semibold italic mb-4 font-hind"
                style={{ color: "oklch(0.85 0.12 48)" }}
              >
                हुनर है तो कदर है
              </p>
              <p
                className="text-sm flex items-center gap-2 mb-8"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                <MapPin size={14} style={{ color: ORANGE }} />
                Hajipur, Vaishali, Bihar
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  { icon: Clock, text: "90 Days Course" },
                  { icon: Award, text: "100% Job Guarantee" },
                  { icon: TrendingUp, text: "\u20b940K\u201350K+ Salary" },
                  { icon: Star, text: "2 Days Free Demo" },
                ].map(({ icon: Icon, text }) => (
                  <span
                    key={text}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white border"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      borderColor: "rgba(255,255,255,0.18)",
                    }}
                  >
                    <Icon size={12} style={{ color: ORANGE }} />
                    {text}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="btn-orange flex items-center rounded-full px-6 py-3 text-sm font-bold no-underline"
                  style={{ boxShadow: "0 4px 20px rgba(242,106,33,0.45)" }}
                  data-ocid="hero.primary_button"
                >
                  Join Now – Free Demo
                  <ChevronRight size={16} className="ml-1" />
                </a>
                <a
                  href="https://www.youtube.com/@Z.info7771"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-full px-6 py-3 text-sm font-bold text-white border transition-colors hover:bg-white/10 no-underline"
                  style={{
                    background: "transparent",
                    borderColor: "rgba(255,255,255,0.3)",
                  }}
                  data-ocid="hero.secondary_button"
                >
                  <Youtube
                    size={16}
                    className="mr-2"
                    style={{ color: "#EF4444" }}
                  />
                  Watch on YouTube
                </a>
              </div>
            </div>

            {/* Right stat card */}
            <div className="section-fade stagger-2 hidden md:block">
              <div className="relative">
                <div
                  className="rounded-2xl p-8 text-white animate-float"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <div className="text-center mb-6">
                    <div
                      className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4"
                      style={{
                        background: "oklch(0.648 0.175 42 / 0.15)",
                        border: `2px solid ${ORANGE}`,
                      }}
                    >
                      <Phone size={36} style={{ color: ORANGE }} />
                    </div>
                    <h3 className="text-xl font-bold">
                      Z.info Mobile Training
                    </h3>
                    <p
                      className="text-sm mt-1"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      Hajipur, Bihar
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { value: "90 Days", label: "Course Duration" },
                      { value: "100%", label: "Job Guarantee" },
                      { value: "\u20b950K+", label: "Monthly Salary" },
                      { value: "500+", label: "Students Trained" },
                    ].map(({ value, label }) => (
                      <div
                        key={label}
                        className="text-center rounded-xl p-3"
                        style={{ background: "rgba(255,255,255,0.05)" }}
                      >
                        <div
                          className="text-2xl font-black"
                          style={{ color: ORANGE }}
                        >
                          {value}
                        </div>
                        <div
                          className="text-xs mt-0.5"
                          style={{ color: "rgba(255,255,255,0.5)" }}
                        >
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href="tel:8340505173"
                      className="flex items-center gap-2 text-sm transition-colors"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      <Phone size={14} style={{ color: ORANGE }} />
                      8340505173
                    </a>
                    <a
                      href="tel:7970727771"
                      className="flex items-center gap-2 text-sm transition-colors"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      <Phone size={14} style={{ color: ORANGE }} />
                      7970727771
                    </a>
                  </div>
                </div>
                <div
                  className="absolute -top-6 -right-6 w-20 h-20 rounded-full"
                  style={{ background: ORANGE, opacity: 0.15 }}
                />
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full"
                  style={{ background: ORANGE, opacity: 0.1 }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            aria-hidden="true"
          >
            <title>Wave divider</title>
            <path
              d="M0 48L1440 48L1440 12C1200 40 960 48 720 36C480 24 240 0 0 12L0 48Z"
              fill="oklch(0.972 0.005 240)"
            />
          </svg>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 section-fade">
            <span
              className="inline-block mb-3 text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                background: "oklch(0.648 0.175 42 / 0.1)",
                color: "oklch(0.50 0.18 38)",
              }}
            >
              Our Strengths
            </span>
            <h2
              className="text-3xl sm:text-4xl font-black mb-2"
              style={{ color: "oklch(0.16 0.04 240)" }}
            >
              Why Choose Us?
            </h2>
            <p
              className="text-xl font-semibold font-hind"
              style={{ color: ORANGE }}
            >
              हमें क्यों चुनें?
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, hindi, desc }, i) => (
              <div
                key={title}
                className={`section-fade stagger-${i + 1} card-hover bg-card rounded-2xl p-6 text-center shadow-card border border-border`}
                data-ocid={`features.card.${i + 1}`}
              >
                <div
                  className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{ background: "oklch(0.648 0.175 42 / 0.1)" }}
                >
                  <Icon size={26} style={{ color: ORANGE }} />
                </div>
                <h3
                  className="font-bold text-base mb-1"
                  style={{ color: "oklch(0.16 0.04 240)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm font-semibold font-hind mb-2"
                  style={{ color: ORANGE }}
                >
                  {hindi}
                </p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSE TOPICS */}
      <section id="courses" className="py-20" style={{ background: "white" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 section-fade">
            <span
              className="inline-block mb-3 text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                background: "oklch(0.648 0.175 42 / 0.1)",
                color: "oklch(0.50 0.18 38)",
              }}
            >
              What You Learn
            </span>
            <h2
              className="text-3xl sm:text-4xl font-black mb-2"
              style={{ color: "oklch(0.16 0.04 240)" }}
            >
              Course Curriculum
            </h2>
            <p
              className="text-xl font-semibold font-hind"
              style={{ color: ORANGE }}
            >
              कोर्स पाठ्यक्रम
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {courseTopics.map(
              ({ id, icon: Icon, title, hindi, english }, i) => (
                <div
                  key={id}
                  className={`section-fade stagger-${(i % 4) + 1} card-hover rounded-2xl p-5 border border-border shadow-card`}
                  style={{ background: "white" }}
                  data-ocid={`courses.item.${id}`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black text-white"
                      style={{ background: ORANGE }}
                    >
                      {id}
                    </span>
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: "oklch(0.648 0.175 42 / 0.1)" }}
                    >
                      <Icon size={16} style={{ color: ORANGE }} />
                    </div>
                  </div>
                  <h3
                    className="font-bold text-sm mb-2 leading-snug"
                    style={{ color: "oklch(0.16 0.04 240)" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-xs font-hind mb-1.5 leading-relaxed"
                    style={{ color: ORANGE }}
                  >
                    {hindi}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {english}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CAREER SCOPE */}
      <section id="career" className="py-20 navy-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 section-fade">
            <span
              className="inline-block mb-3 text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                background: "oklch(0.648 0.175 42 / 0.2)",
                color: "oklch(0.85 0.12 48)",
              }}
            >
              Career Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
              Mobile Repairing as a Career in India
            </h2>
            <p
              className="text-lg font-semibold font-hind"
              style={{ color: "oklch(0.85 0.12 48)" }}
            >
              भारत में मोबाइल रिपेयरिंग करियर
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {[
              { value: "120 Crore+", label: "Mobile Users in India" },
              { value: "50 Crore+", label: "Repairs / Year" },
              { value: "\u20b940K\u201350K", label: "Monthly Earning" },
              { value: "90 Days", label: "Training Duration" },
            ].map(({ value, label }, i) => (
              <div
                key={label}
                className={`section-fade stagger-${i + 1} text-center rounded-2xl p-6`}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="text-3xl font-black mb-1"
                  style={{ color: ORANGE }}
                >
                  {value}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div
              className="section-fade space-y-4 text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              <p>
                India is home to over{" "}
                <strong className="text-white">1.2 billion mobile users</strong>
                , making it the world&apos;s fastest-growing smartphone market.
                Every day, millions of phones face hardware and software issues
                — creating an enormous and ever-growing demand for skilled
                mobile technicians.
              </p>
              <p>
                Over{" "}
                <strong className="text-white">500 million smartphones</strong>{" "}
                are repaired annually in India. Yet there remains a critical{" "}
                <strong className="text-white">
                  shortage of trained technicians
                </strong>
                . This gap means those with proper skills can command premium
                salaries and build thriving businesses.
              </p>
              <p>
                As a certified mobile repair technician, you can earn{" "}
                <strong className="text-white">
                  ₹40,000–50,000+ per month
                </strong>{" "}
                working at a service center — or earn even more by opening your
                own repair shop with very low investment and high returns.
              </p>
              <p>
                Technology never stops evolving. Mobile repairing is a{" "}
                <strong className="text-white">
                  future-proof, recession-proof career
                </strong>{" "}
                that will remain in demand for decades to come.
              </p>
            </div>
            <div className="section-fade stagger-2">
              <h3 className="text-white font-bold text-lg mb-4">
                Career Opportunities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {careerOpps.map((opp, i) => (
                  <div
                    key={opp}
                    className={`section-fade stagger-${i + 1} flex items-center gap-3 rounded-xl px-4 py-3`}
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <CheckCircle
                      size={16}
                      style={{ color: ORANGE }}
                      className="shrink-0"
                    />
                    <span
                      className="text-sm font-medium"
                      style={{ color: "rgba(255,255,255,0.85)" }}
                    >
                      {opp}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section id="success" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 section-fade">
            <span
              className="inline-block mb-3 text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                background: "oklch(0.648 0.175 42 / 0.1)",
                color: "oklch(0.50 0.18 38)",
              }}
            >
              Testimonials
            </span>
            <h2
              className="text-3xl sm:text-4xl font-black mb-2"
              style={{ color: "oklch(0.16 0.04 240)" }}
            >
              Our Students&apos; Success
            </h2>
            <p
              className="text-xl font-semibold font-hind"
              style={{ color: ORANGE }}
            >
              हमारे छात्रों की सफलता
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {students.map(({ name, location, initials, quote, salary }, i) => (
              <div
                key={name}
                className={`section-fade stagger-${(i % 4) + 1} card-hover bg-card rounded-2xl p-5 shadow-card border border-border flex flex-col`}
                data-ocid={`success.item.${i + 1}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0"
                    style={{ background: avatarColors[i] }}
                  >
                    {initials}
                  </div>
                  <div>
                    <div
                      className="font-bold text-sm"
                      style={{ color: "oklch(0.16 0.04 240)" }}
                    >
                      {name}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin size={10} />
                      {location}
                    </div>
                  </div>
                </div>
                <p
                  className="text-sm font-hind leading-relaxed flex-1 mb-3"
                  style={{ color: "oklch(0.16 0.04 240 / 0.75)" }}
                >
                  “{quote}”
                </p>
                <div
                  className="flex items-center gap-2 rounded-lg px-3 py-2"
                  style={{ background: "oklch(0.648 0.175 42 / 0.08)" }}
                >
                  <TrendingUp size={14} style={{ color: ORANGE }} />
                  <span
                    className="text-xs font-bold"
                    style={{ color: "oklch(0.50 0.18 38)" }}
                  >
                    {salary}
                  </span>
                </div>
                <div
                  className="mt-2 rounded-md px-3 py-1 text-xs text-center font-medium"
                  style={{ background: NAVY, color: "white" }}
                >
                  Course Completed ✓
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section id="contact" className="py-20" style={{ background: "white" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 section-fade">
            <span
              className="inline-block mb-3 text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                background: "oklch(0.648 0.175 42 / 0.1)",
                color: "oklch(0.50 0.18 38)",
              }}
            >
              Get in Touch
            </span>
            <h2
              className="text-3xl sm:text-4xl font-black mb-2"
              style={{ color: "oklch(0.16 0.04 240)" }}
            >
              Contact &amp; Enquiry
            </h2>
            <p
              className="text-lg font-semibold font-hind"
              style={{ color: ORANGE }}
            >
              संपर्क करें
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="section-fade space-y-6">
              <div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "oklch(0.16 0.04 240)" }}
                >
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: MapPin,
                      label: "Address",
                      content: "Hajipur, Vaishali, Bihar",
                      href: undefined,
                    },
                    {
                      icon: Phone,
                      label: "Phone Numbers",
                      content: "8340505173 / 7970727771",
                      href: "tel:8340505173",
                    },
                    {
                      icon: Youtube,
                      label: "YouTube Channel",
                      content: "@Z.info7771",
                      href: "https://www.youtube.com/@Z.info7771",
                    },
                  ].map(({ icon: Icon, label, content, href }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: "oklch(0.648 0.175 42 / 0.1)" }}
                      >
                        <Icon size={18} style={{ color: ORANGE }} />
                      </div>
                      <div>
                        <div
                          className="font-semibold text-sm"
                          style={{ color: "oklch(0.16 0.04 240)" }}
                        >
                          {label}
                        </div>
                        {href ? (
                          <a
                            href={href}
                            target={
                              href.startsWith("http") ? "_blank" : undefined
                            }
                            rel="noopener noreferrer"
                            className="text-sm hover:underline"
                            style={{ color: ORANGE }}
                          >
                            {content}
                          </a>
                        ) : (
                          <div className="text-sm text-muted-foreground">
                            {content}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "oklch(0.648 0.175 42 / 0.06)",
                  border: "1px solid oklch(0.648 0.175 42 / 0.2)",
                }}
              >
                <h4
                  className="font-bold mb-3"
                  style={{ color: "oklch(0.16 0.04 240)" }}
                >
                  Why Join Now?
                </h4>
                <ul className="space-y-2">
                  {[
                    "2 Days FREE Demo Class \u2014 No commitment!",
                    "Complete 90-day professional course",
                    "100% Job Placement Assistance",
                    "Earn \u20b940,000\u201350,000+ per month",
                    "Start your own business with low investment",
                  ].map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: "oklch(0.16 0.04 240 / 0.8)" }}
                    >
                      <CheckCircle
                        size={14}
                        className="shrink-0 mt-0.5"
                        style={{ color: ORANGE }}
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="section-fade stagger-2">
              <div
                className="rounded-2xl p-8 shadow-card border border-border"
                style={{ background: "white" }}
              >
                <h3
                  className="text-xl font-black mb-1"
                  style={{ color: "oklch(0.16 0.04 240)" }}
                >
                  Join Now — Free Demo Available!
                </h3>
                <p
                  className="font-semibold font-hind mb-6 text-sm"
                  style={{ color: ORANGE }}
                >
                  अभी जुड़ें — फ्री डेमो उपलब्ध!
                </p>
                {submitted ? (
                  <div
                    className="rounded-2xl p-8 text-center"
                    style={{
                      background: "oklch(0.648 0.175 42 / 0.06)",
                      border: "2px solid oklch(0.648 0.175 42 / 0.3)",
                    }}
                    data-ocid="enquiry.success_state"
                  >
                    <CheckCircle
                      size={48}
                      className="mx-auto mb-4"
                      style={{ color: ORANGE }}
                    />
                    <p
                      className="font-black text-lg mb-1"
                      style={{ color: "oklch(0.16 0.04 240)" }}
                    >
                      धन्यवाद!
                    </p>
                    <p
                      className="font-semibold font-hind text-sm"
                      style={{ color: "oklch(0.16 0.04 240 / 0.8)" }}
                    >
                      हम जल्द आपसे संपर्क करेंगे।
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Thank you! We will contact you soon.
                    </p>
                    <button
                      type="button"
                      className="btn-orange mt-6 rounded-full px-6 py-2 text-sm font-semibold"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", mobile: "", address: "" });
                      }}
                    >
                      Submit Another
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    data-ocid="enquiry.modal"
                  >
                    <div>
                      <Label
                        className="text-sm font-semibold mb-1.5 block"
                        style={{ color: "oklch(0.16 0.04 240)" }}
                      >
                        Full Name *
                      </Label>
                      <Input
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, name: e.target.value }))
                        }
                        className="input-focus rounded-xl"
                        data-ocid="enquiry.input"
                      />
                      {errors.name && (
                        <p
                          className="text-xs text-red-500 mt-1"
                          data-ocid="enquiry.error_state"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label
                        className="text-sm font-semibold mb-1.5 block"
                        style={{ color: "oklch(0.16 0.04 240)" }}
                      >
                        Mobile Number *
                      </Label>
                      <Input
                        placeholder="10-digit mobile number"
                        value={form.mobile}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, mobile: e.target.value }))
                        }
                        className="input-focus rounded-xl"
                        maxLength={10}
                        data-ocid="enquiry.input"
                      />
                      {errors.mobile && (
                        <p
                          className="text-xs text-red-500 mt-1"
                          data-ocid="enquiry.error_state"
                        >
                          {errors.mobile}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label
                        className="text-sm font-semibold mb-1.5 block"
                        style={{ color: "oklch(0.16 0.04 240)" }}
                      >
                        Address / City *
                      </Label>
                      <Textarea
                        placeholder="Your address or city"
                        value={form.address}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, address: e.target.value }))
                        }
                        className="input-focus rounded-xl resize-none"
                        rows={3}
                        data-ocid="enquiry.textarea"
                      />
                      {errors.address && (
                        <p
                          className="text-xs text-red-500 mt-1"
                          data-ocid="enquiry.error_state"
                        >
                          {errors.address}
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="btn-orange w-full rounded-xl py-3 font-bold text-sm"
                      disabled={submitting}
                      data-ocid="enquiry.submit_button"
                    >
                      {submitting
                        ? "Submitting..."
                        : "Submit Enquiry \u2014 Free Demo!"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12" style={{ background: "oklch(0.12 0.04 240)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div
                className="text-2xl font-black mb-1"
                style={{ color: ORANGE }}
              >
                Z.info
              </div>
              <div
                className="text-xs uppercase tracking-wider mb-3"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Mobile Training Institute
              </div>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Hajipur, Vaishali, Bihar
                <br />
                Professional Mobile Repairing Training
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-xs transition-colors"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                      data-ocid="footer.link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-4">
                Contact Info
              </h4>
              <div className="space-y-2 mb-4">
                <div
                  className="flex items-center gap-2 text-xs"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  <MapPin size={12} style={{ color: ORANGE }} />
                  Hajipur, Vaishali, Bihar
                </div>
                <a
                  href="tel:8340505173"
                  className="flex items-center gap-2 text-xs transition-colors"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  <Phone size={12} style={{ color: ORANGE }} />
                  8340505173
                </a>
                <a
                  href="tel:7970727771"
                  className="flex items-center gap-2 text-xs transition-colors"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  <Phone size={12} style={{ color: ORANGE }} />
                  7970727771
                </a>
              </div>
              <h4 className="text-white font-bold text-sm mb-3">Follow Us</h4>
              <a
                href="https://www.youtube.com/@Z.info7771"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs transition-colors"
                style={{ color: "rgba(255,255,255,0.55)" }}
                data-ocid="footer.link"
              >
                <Youtube size={14} style={{ color: "#EF4444" }} />
                @Z.info7771
              </a>
            </div>
          </div>
          <div
            className="border-t pt-6"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <div
              className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              <span>
                &copy; {new Date().getFullYear()} Z.info Mobile Training
                Institute. All Rights Reserved.
              </span>
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white/60"
              >
                Built with ❤️ using caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING CALL BUTTON */}
      <a
        href="tel:8340505173"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center pulse-btn relative"
        style={{
          background: ORANGE,
          boxShadow: "0 4px 20px rgba(242,106,33,0.45)",
        }}
        aria-label="Call us at 8340505173"
        data-ocid="cta.primary_button"
      >
        <Phone size={26} className="text-white relative z-10" />
      </a>
    </div>
  );
}
