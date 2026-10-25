"use client"
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { BsFillMoonStarsFill, BsFillSunFill, BsTwitterX } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import {
  FaArrowUp,
  FaArrowRight,
  FaAws,
  FaMicrosoft,
  FaLinux,
  FaDownload,
  FaEnvelope,
  FaExternalLinkAlt,
  FaCloud,
  FaCogs,
  FaCode,
  FaLightbulb,
  FaBars,
  FaTimes,
  FaCheckCircle,
  FaGraduationCap,
} from "react-icons/fa";
import { SiTerraform, SiDocker, SiKubernetes, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiGit } from "react-icons/si";

/* ---------------- Existing links (preserved) ---------------- */
const RESUME_URL = "/ASHUTOSH%20MOHANTY.pdf";
const GITHUB_URL = "https://github.com/ashutosh-mohanty05";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/ashutosh-mohanty-674392217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
const TWITTER_URL = "https://twitter.com/iashu05?t=2YpXVDN2XigbulhFlabn2A&s=08";
const EMAIL = "ashutoshmohanty005@gmail.com";
const JOBZEE_URL = "https://jobzee-remastered.vercel.app";
const DOCTOR_URL = "https://on-demand-doctor.netlify.app/";
const RESTRO_URL = "https://restaurant-reserve-mern-git-main-ashutoshs-projects-dfbbbd9c.vercel.app/";
const AWS_CERT_URL = "https://www.credly.com/badges/ea663671-a905-436f-b7dc-6bd57e184f4f/public_url";
const AZ_CERT_URL = "https://learn.microsoft.com/en-us/users/ashutoshmohanty-6151/credentials/8f44b9f2c1764875";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const STRIP = [
  { name: "AWS", Icon: FaAws },
  { name: "Azure", Icon: FaMicrosoft },
  { name: "Linux", Icon: FaLinux },
  { name: "Terraform", Icon: SiTerraform },
  { name: "Docker", Icon: SiDocker },
  { name: "Kubernetes", Icon: SiKubernetes },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Git", Icon: SiGit },
];

const SKILL_GROUPS = [
  {
    title: "Cloud",
    Icon: FaCloud,
    items: [
      "AWS: EC2, EBS, S3, IAM, VPC",
      "CloudWatch, CloudTrail",
      "Auto Scaling, ELB, Route 53",
      "Microsoft Azure (AZ-104 certified)",
    ],
  },
  {
    title: "Systems & DevOps",
    Icon: FaCogs,
    items: [
      "Linux administration",
      "Terraform (hands-on)",
      "Docker",
      "Kubernetes (hands-on)",
      "Git, GitHub Actions, CI/CD",
      "Monitoring & incident analysis",
    ],
  },
  {
    title: "Web Development",
    Icon: FaCode,
    items: ["React.js", "Next.js", "Node.js, Express.js", "MongoDB", "REST APIs", "JavaScript, HTML, CSS"],
  },
];

const PROJECTS = [
  {
    kind: "lab",
    badge: "Hands-on Lab",
    title: "AWS Infrastructure Automation",
    desc: "Provisioned AWS networking and compute using Terraform, including VPC, Security Groups and EC2 instances, with version-controlled deployment and teardown using Git.",
    tags: ["Terraform", "AWS", "VPC", "EC2"],
    icons: [SiTerraform, FaAws],
    image: "/aws.png",
  },
  {
    kind: "lab",
    badge: "Hands-on Lab",
    title: "Docker & Kubernetes Deployment",
    desc: "Containerized applications with Docker and deployed workloads on Kubernetes using Deployments, Pods and Services, and practiced pod-level troubleshooting.",
    tags: ["Docker", "Kubernetes"],
    icons: [SiDocker, SiKubernetes],
  },
  {
    kind: "app",
    badge: "Full Stack Project",
    title: "Job Seeking Platform (JobZee)",
    desc: "MERN-based job portal with JWT and Google authentication, resume upload, an employer dashboard and AI-powered job assistance.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: "/jobzee.jpg",
    href: JOBZEE_URL,
  },
  {
    kind: "app",
    badge: "Full Stack Project",
    title: "Doctor Appointment App",
    desc: "MERN stack application with authentication, REST API integration and responsive UI to book appointments with doctors.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/doc-on-call.jpg",
    href: DOCTOR_URL,
  },
  {
    kind: "app",
    badge: "Full Stack Project",
    title: "Restro - Restaurant Reservation",
    desc: "Restaurant table reservation web application built with the MERN stack.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/restro.jpg",
    href: RESTRO_URL,
  },
];

const EXP_POINTS = [
  "Managed AWS infrastructure across EC2, EBS, S3, IAM and VPC in production environments.",
  "Troubleshot Linux, AWS and infrastructure issues in production and investigated incidents to root cause.",
  "Monitored infrastructure health using Amazon CloudWatch to support proactive issue detection.",
  "Supported provisioning, patching and configuration changes, and DevOps workflows with Git, Docker and GitHub Actions.",
];

/* ---------------- Helpers ---------------- */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${shown ? "is-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function SectionHead({ n, label, title, accent }) {
  return (
    <Reveal className="mb-10">
      <div className="sec-tag">
        <span className="sec-dot" />
        <span className="sec-n">{n}</span>
        <span>{label}</span>
      </div>
      <h2 className="display sec-title">
        {title} {accent ? <span className="text-accent">{accent}</span> : null}
      </h2>
    </Reveal>
  );
}

function Skyline() {
  const { buildings, windows } = useMemo(() => {
    let seed = 11;
    const rnd = () => {
      seed = (seed * 16807) % 2147483647;
      return seed / 2147483647;
    };
    const b = [];
    const w = [];
    let x = 0;
    while (x < 1600) {
      const bw = 30 + Math.floor(rnd() * 48);
      const bh = 60 + Math.floor(rnd() * 170);
      const top = 260 - bh;
      b.push({ x, w: bw, y: top, h: bh, antenna: rnd() < 0.18 });
      for (let wx = x + 6; wx < x + bw - 8; wx += 12) {
        for (let wy = top + 10; wy < 250; wy += 16) {
          if (rnd() < 0.1) w.push({ x: wx, y: wy, warm: rnd() < 0.7 });
        }
      }
      x += bw + (rnd() < 0.3 ? 6 : 0);
    }
    return { buildings: b, windows: w };
  }, []);

  return (
    <svg className="skyline" viewBox="0 0 1600 260" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <g fill="currentColor">
        {buildings.map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={b.y} width={b.w} height={b.h} />
            {b.antenna ? <rect x={b.x + b.w / 2 - 1} y={b.y - 22} width="2" height="22" /> : null}
          </g>
        ))}
      </g>
      <g>
        {windows.map((w, i) => (
          <rect key={i} x={w.x} y={w.y} width="4" height="6" fill={w.warm ? "#ff7a45" : "#8fb4ff"} opacity="0.65" />
        ))}
      </g>
    </svg>
  );
}

/* ---------------- Page ---------------- */
export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState("home");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setIsVisible(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <div className={`cine ${darkMode ? "theme-dark dark" : "theme-light"}`}>
      {/* ---------- Navigation ---------- */}
      <header className={`nav ${scrolled || menuOpen ? "scrolled" : ""}`}>
        <div className="wrap flex items-center justify-between py-4">
          <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
            ASHUTOSH<span className="text-accent">.</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className={`nav-link ${active === n.id ? "active" : ""}`}>
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="avatar hidden sm:block" style={{ width: 38, height: 38 }}>
              <Image src="/profile.png" alt="Ashutosh Mohanty" fill sizes="38px" style={{ objectFit: "cover", objectPosition: "50% 18%" }} />
            </span>
            <button
              type="button"
              className="icon-btn"
              aria-label="Toggle theme"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
            </button>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-red hidden sm:inline-flex">
              <FaDownload /> Resume
            </a>
            <button
              type="button"
              className="icon-btn lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="mobile-menu lg:hidden">
            <div className="wrap py-4 flex flex-col gap-1">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`nav-link py-3 ${active === n.id ? "active" : ""}`}
                  style={{ fontSize: "1rem" }}
                >
                  {n.label}
                </a>
              ))}
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline-red mt-3 sm:hidden">
                <FaDownload /> Resume
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        {/* ---------- Hero ---------- */}
        <section id="home" className="hero">
          <div className="hero-sky" aria-hidden="true" />
          <div className="hero-moon" aria-hidden="true" />
          <div className="hero-bat" aria-hidden="true" />
          <Skyline />
          <div className="hero-vignette" aria-hidden="true" />
          <div className="hero-quote hidden lg:block" aria-hidden="true">
            Good plans<br />Build Better<br />Futures.
          </div>
          <div className="hero-vert hidden lg:block" aria-hidden="true">
            Discipline creates freedom
          </div>

          <div className="wrap hero-inner">
            <div className="max-w-2xl">
              <div className="rise flex items-center gap-4 mb-6" style={{ animationDelay: "0.05s" }}>
                <span className="avatar" style={{ width: 64, height: 64 }}>
                  <Image src="/profile.png" alt="Ashutosh Mohanty" fill sizes="64px" priority style={{ objectFit: "cover", objectPosition: "50% 18%" }} />
                </span>
                <span className="tagline">Same city. Different mission.</span>
              </div>

              <h1 className="display hero-name">
                <span className="rise block" style={{ animationDelay: "0.2s" }}>Ashutosh</span>
                <span className="rise block shimmer" style={{ animationDelay: "0.35s" }}>Mohanty</span>
              </h1>

              <p className="rise mt-6 text-lg sm:text-xl" style={{ animationDelay: "0.5s", color: "var(--soft)" }}>
                Cloud Engineer <span className="text-accent mx-1">|</span> Developer <span className="text-accent mx-1">|</span> Problem Solver
              </p>

              <div className="rise mt-3 text-base sm:text-lg text-accent" style={{ animationDelay: "0.62s", minHeight: "1.8em" }}>
                <TypeAnimation
                  sequence={[
                    "Cloud Engineer",
                    1000,
                    "Web Developer",
                    1000,
                    "Amazon Web Service",
                    1000,
                    "AWS Certified Solutions Architect – Associate",
                    1000,
                    "Azure Administrator Associate (AZ-104)",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                />
              </div>

              <p className="rise mt-5 max-w-lg leading-7" style={{ animationDelay: "0.75s", color: "var(--muted)" }}>
                I build reliable cloud systems, modern web applications, and a better version of myself, one project at a time.
              </p>

              <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.9s" }}>
                <a href="#projects" className="btn btn-primary">
                  View My Work <FaArrowRight />
                </a>
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  <FaDownload /> Download Resume
                </a>
              </div>

              <div className="rise mt-7 flex gap-3" style={{ animationDelay: "1.05s" }}>
                <a className="social" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <AiFillLinkedin />
                </a>
                <a className="social" href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <AiFillGithub />
                </a>
                <a className="social" href={TWITTER_URL} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                  <BsTwitterX />
                </a>
                <a className="social" href={`mailto:${EMAIL}`} aria-label="Email">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Skill strip ---------- */}
        <div className="wrap" style={{ marginTop: "-3.2rem", zIndex: 5 }}>
          <Reveal>
            <div className="glass skillbar" aria-label="Tech stack">
              {STRIP.map(({ name, Icon }) => (
                <span key={name} className="skill-item">
                  <Icon aria-hidden="true" /> {name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ---------- About ---------- */}
        <section id="about" className="sec glow-red">
          <div className="wrap">
            <div className="grid gap-10 lg:grid-cols-12 items-start">
              <div className="lg:col-span-5">
                <SectionHead n="01" label="About Me" title="Building Systems That" accent="Create Impact." />
                <Reveal delay={100}>
                  <p className="leading-8" style={{ color: "var(--soft)" }}>
                    I&apos;m an AWS Certified Cloud Engineer with 2.2+ years of experience in cloud infrastructure, Linux administration and DevOps. I enjoy solving real-world problems and building scalable, reliable and user-friendly applications.
                  </p>
                  <p className="leading-8 mt-4" style={{ color: "var(--muted)" }}>
                    I specialize in <span className="text-accent">AWS Cloud Infrastructure</span>, monitoring, troubleshooting, and maintaining highly available systems. I also have experience with <span className="text-accent">Linux</span>, <span className="text-accent">DevOps practices</span>, and building scalable applications using modern technologies.
                  </p>
                  <a href="#skills" className="btn btn-ghost mt-7">
                    Know More <FaArrowRight />
                  </a>
                </Reveal>
              </div>

              <div className="lg:col-span-7 grid gap-5 sm:grid-cols-2">
                <Reveal delay={80}>
                  <div className="glass lift p-6 h-full">
                    <Image src="/aws.png" alt="AWS logo" width={46} height={46} className="rounded-xl mb-4" />
                    <h3 className="text-lg font-semibold mb-2">AWS Cloud</h3>
                    <p className="text-sm leading-6" style={{ color: "var(--muted)" }}>
                      Experience with AWS cloud infrastructure, monitoring, troubleshooting, and maintaining reliable and scalable cloud environments. AWS Certified Solutions Architect – Associate.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={160}>
                  <div className="glass lift p-6 h-full">
                    <div className="card-icon"><FaCogs /></div>
                    <h3 className="text-lg font-semibold mb-2">DevOps &amp; Automation</h3>
                    <p className="text-sm leading-6" style={{ color: "var(--muted)" }}>
                      Support CI/CD workflows and deployments with Git, GitHub Actions, Docker and Terraform, with hands-on Kubernetes practice.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={240}>
                  <div className="glass lift p-6 h-full">
                    <Image src="/react.png" alt="React logo" width={46} height={46} className="rounded-xl mb-4" />
                    <h3 className="text-lg font-semibold mb-2">React.js Development</h3>
                    <p className="text-sm leading-6" style={{ color: "var(--muted)" }}>
                      Skilled in building modern, responsive, and interactive user interfaces using React with clean architecture and reusable components.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={320}>
                  <div className="glass lift p-6 h-full">
                    <Image src="/next.svg" alt="Next.js logo" width={90} height={46} className="logo-invert mb-4" style={{ height: 46, width: "auto" }} />
                    <h3 className="text-lg font-semibold mb-2">Next.js Framework</h3>
                    <p className="text-sm leading-6" style={{ color: "var(--muted)" }}>
                      Experience in building production-ready applications using Next.js with optimized performance, routing, and deployment on cloud platforms.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Skills ---------- */}
        <section id="skills" className="sec">
          <div className="wrap">
            <SectionHead n="02" label="Skills" title="Tools I" accent="Work With." />
            <div className="grid gap-5 md:grid-cols-3">
              {SKILL_GROUPS.map(({ title, Icon, items }, i) => (
                <Reveal key={title} delay={i * 100}>
                  <div className="glass lift p-6 h-full">
                    <div className="card-icon"><Icon /></div>
                    <h3 className="text-lg font-semibold mb-4">{title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((it) => (
                        <span key={it} className="chip">{it}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Projects ---------- */}
        <section id="projects" className="sec bg-spider">
          <div className="wrap">
            <SectionHead n="03" label="Featured Projects" title="Real Projects." accent="Real Skills." />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {PROJECTS.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) * 100}>
                  <article className="glass lift p-4 h-full flex flex-col">
                    <div className={`proj-img ${p.kind === "lab" ? "lab-art" : ""}`}>
                      <span className="proj-badge">{p.badge}</span>
                      {p.kind === "lab" ? (
                        <>
                          {p.icons.map((Ic, k) => (
                            <Ic key={k} aria-hidden="true" style={{ position: "relative", zIndex: 1 }} />
                          ))}
                        </>
                      ) : (
                        <Image
                          src={p.image}
                          alt={`${p.title} preview`}
                          fill
                          sizes="(min-width: 1280px) 360px, (min-width: 768px) 45vw, 100vw"
                          style={{ objectFit: "cover" }}
                        />
                      )}
                    </div>
                    <div className="pt-5 flex flex-col flex-1">
                      <h3 className="text-lg font-semibold">{p.title}</h3>
                      <p className="text-sm leading-6 mt-2" style={{ color: "var(--muted)" }}>{p.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {p.tags.map((t) => (
                          <span key={t} className="chip">{t}</span>
                        ))}
                      </div>
                      <div className="mt-auto pt-5">
                        {p.href ? (
                          <a href={p.href} target="_blank" rel="noopener noreferrer" className="link-red">
                            Live Demo <FaExternalLinkAlt size={12} />
                          </a>
                        ) : (
                          <span className="text-xs" style={{ color: "var(--muted)" }}>
                            Lab project built for practice (not a deployed app)
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-10">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <AiFillGithub size={18} /> View All Projects
              </a>
            </Reveal>
          </div>
        </section>

        {/* ---------- Experience ---------- */}
        <section id="experience" className="sec bg-heist">
          <div className="wrap">
            <SectionHead n="04" label="Experience" title="Where I" accent="Work." />
            <div className="grid gap-6 lg:grid-cols-12">
              <Reveal className="lg:col-span-8">
                <div className="glass p-6 sm:p-8 h-full">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-xl font-semibold">LTM</h3>
                      <p style={{ color: "var(--muted)" }}>AWS Cloud Engineer</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-sm" style={{ color: "var(--muted)" }}>2024 – Present</span>
                      <span className="pill-red">2.2+ Years</span>
                    </div>
                  </div>
                  <ul className="timeline-list">
                    {EXP_POINTS.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal className="lg:col-span-4" delay={120}>
                <div className="glass p-6 sm:p-8 h-full">
                  <div className="card-icon"><FaGraduationCap /></div>
                  <h3 className="text-lg font-semibold mb-4">Education</h3>
                  <div className="mb-4">
                    <p className="font-medium">Master of Computer Applications (MCA)</p>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>Chandigarh University · 2024 – 2026</p>
                  </div>
                  <div>
                    <p className="font-medium">Bachelor of Computer Applications (BCA)</p>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>MITS School of Biotechnology · 2021 – 2024</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- Certifications ---------- */}
        <section id="certifications" className="sec glow-red">
          <div className="wrap">
            <SectionHead n="05" label="Certifications" title="Proof of" accent="Skills." />
            <div className="grid gap-5 sm:grid-cols-2 max-w-3xl">
              <Reveal>
                <a href={AWS_CERT_URL} target="_blank" rel="noopener noreferrer" className="glass lift p-6 flex items-center gap-5 h-full" style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="card-icon" style={{ width: 64, height: 64, fontSize: "2.1rem", marginBottom: 0 }}><FaAws /></div>
                  <div>
                    <h3 className="font-semibold leading-snug">AWS Certified Solutions Architect – Associate</h3>
                    <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>SAA-C03 · Amazon Web Services</p>
                    <span className="pill-green mt-3"><FaCheckCircle /> Certified</span>
                  </div>
                </a>
              </Reveal>
              <Reveal delay={120}>
                <a href={AZ_CERT_URL} target="_blank" rel="noopener noreferrer" className="glass lift p-6 flex items-center gap-5 h-full" style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="card-icon" style={{ width: 64, height: 64, fontSize: "2.1rem", marginBottom: 0 }}><FaMicrosoft /></div>
                  <div>
                    <h3 className="font-semibold leading-snug">Microsoft Certified: Azure Administrator Associate</h3>
                    <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>AZ-104 · Microsoft</p>
                    <span className="pill-green mt-3"><FaCheckCircle /> Certified</span>
                  </div>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="sec bg-heist">
          <div className="wrap">
            <SectionHead n="06" label="Let's Connect" title="Connect" accent="With Me." />
            <div className="grid gap-6 lg:grid-cols-2">
              <Reveal>
                <div className="glass p-6 sm:p-8 h-full">
                  <div className="card-icon"><FaLightbulb /></div>
                  <p className="leading-8" style={{ color: "var(--soft)" }}>
                    I&apos;m always open to discussing new opportunities, interesting projects or just tech in general.
                  </p>
                  <div className="flex gap-3 mt-6">
                    <a className="social" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><AiFillLinkedin /></a>
                    <a className="social" href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><AiFillGithub /></a>
                    <a className="social" href={TWITTER_URL} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><BsTwitterX /></a>
                    <a className="social" href={`mailto:${EMAIL}`} aria-label="Email"><FaEnvelope /></a>
                  </div>
                  <a href={`mailto:${EMAIL}`} className="btn btn-primary mt-7">
                    Get In Touch <FaArrowRight />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="glass p-6 sm:p-8">
                  <h3 className="text-lg font-semibold mb-5">Send a message</h3>
                  <form action="https://formspree.io/f/mykdjvrq" method="POST">
                    <div className="mb-4">
                      <label htmlFor="fullName" className="block text-sm mb-2" style={{ color: "var(--soft)" }}>Full Name</label>
                      <input type="text" id="fullName" name="fullName" className="field" placeholder="Enter your full name" required />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm mb-2" style={{ color: "var(--soft)" }}>Email</label>
                      <input type="email" id="email" name="email" className="field" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-5">
                      <label htmlFor="message" className="block text-sm mb-2" style={{ color: "var(--soft)" }}>Share Your Queries</label>
                      <textarea id="message" name="message" rows="4" className="field" placeholder="Leave a message..." required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap py-8 text-center text-sm" style={{ color: "var(--muted)", borderTop: "1px solid var(--border)" }}>
        © Ashutosh Mohanty · AWS Cloud Engineer
      </footer>

      <button
        type="button"
        onClick={scrollToTop}
        className="to-top"
        style={{ opacity: isVisible ? 1 : 0, visibility: isVisible ? "visible" : "hidden" }}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={18} />
      </button>
    </div>
  );
}
