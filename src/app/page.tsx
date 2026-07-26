"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="wrap">
      {/* =============== HERO =============== */}
      <header className="hero">
        <div className="hero-grid">
          <div className="hero-left">
            <div>
              <h1 className="hello">
                <span className="dim">Hey, I&apos;m Aiman.</span>
                <br />
                I build products
                <br />
                that <span className="grad">run themselves.</span>
              </h1>
              <div className="role">
                Full-stack engineer &times; AI agents, aiming to architect
                systems that scale without headcount.
              </div>
              <div className="hero-ctas">
                <a className="btn-solid" href="#projects">
                  See the proof &darr;
                </a>
                <a className="btn-line" href="mailto:aiman_saharudin@yahoo.com">
                  Email me
                </a>
              </div>
            </div>
            <div className="stat-strip">
              <div className="stat">
                <div className="n">24/7</div>
                <div className="l">national network my platforms keep running</div>
              </div>
              <div className="stat">
                <div className="n">20+</div>
                <div className="l">tools replaced by one AI-agent console</div>
              </div>
              <div className="stat">
                <div className="n">#1</div>
                <div className="l">at Cyberview&apos;s national Gen-AI hackathon</div>
              </div>
            </div>
          </div>
          <div className="card portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/portrait.jpg" alt="Aiman, silhouette portrait" />
          </div>
        </div>
      </header>

      {/* =============== ABOUT =============== */}
      <section className="sec reveal" id="about">
        <div className="sec-label">About me</div>
        <div className="card about-card">
          <div className="about-main">
            <p>
              Software engineer based in <b>Kuala Lumpur, Malaysia</b>. At{" "}
              <b>Bateriku</b> I build enterprise platforms: ops consoles,
              reporting systems, and the plumbing that keeps a national
              roadside-assistance network running. Outside work I sharpen the
              same skills on <b>personal projects</b>: web apps, mobile apps,
              and AI-agent products shipped end to end: design, code, deploy,
              operate. I care about systems that stay simple as they grow.
            </p>
            <div className="socials">
              <a className="soc" href="https://github.com/evoaiman" target="_blank" rel="noreferrer">GitHub</a>
              <a className="soc" href="https://www.linkedin.com/in/aiman-saharudin/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="soc" href="https://dribbble.com/iamaiman" target="_blank" rel="noreferrer">Dribbble</a>
              <a className="soc" href="mailto:aiman_saharudin@yahoo.com">Email</a>
            </div>
          </div>
        </div>
      </section>

      {/* =============== ACHIEVEMENTS =============== */}
      <section className="sec reveal" id="wins">
        <div className="sec-label">Wins</div>
        <div className="wins">
          <div className="card win">
            <div className="place">1st</div>
            <div className="win-body">
              <h4>INNO/Jam by Cyberview &middot; Champion</h4>
              <p>
                Won the Cyberjaya Smart City Gen&nbsp;AI Challenge with
                RM11,000 in prizes: Champion (RM10,000) plus Crowd&apos;s
                Favourite (RM1,000) for a working Gen-AI product built within
                the jam.
              </p>
            </div>
            <div className="win-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/champion.jpg" alt="INNO/Jam by Cyberview winners ceremony" />
            </div>
          </div>
          <div className="card win">
            <div className="place silver">4th</div>
            <div className="win-body">
              <h4>Deriv AI Hackathon 2026 &middot; Finalist</h4>
              <p>
                4th place &amp; RM2,000 prize for outstanding AI innovation
                driving Deriv&apos;s automation vision.
              </p>
            </div>
            <div className="win-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/deriv.jpg" alt="Deriv AI Hackathon 2026 finalist team" />
            </div>
          </div>
        </div>
      </section>

      {/* =============== PROJECTS =============== */}
      <section className="sec reveal" id="projects">
        <div className="sec-label">Projects</div>
        <div>
          <div className="proj-grid">
            <a className="card proj-big" href="https://brace.bateriku.com" target="_blank" rel="noreferrer">
              <div className="shot">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/BRACE Mockup.png" alt="BRACE dashboard mockup" />
              </div>
              <div className="proj-meta">
                <div>
                  <h3>BRACE</h3>
                  <p>
                    Bateriku&apos;s regional affiliate ecosystem: merchant
                    onboarding, B2B orders, warranty claims and nationwide
                    sales analytics in one console.
                  </p>
                </div>
                <span className="arrow">&#8599;</span>
              </div>
            </a>
            <a className="card proj-big" href="https://rakanbateriku.com" target="_blank" rel="noreferrer">
              <div className="shot">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/Ticketing Mockup.png" alt="Event ticketing platform mockup" />
              </div>
              <div className="proj-meta">
                <div>
                  <h3>Ticketing</h3>
                  <p>
                    Event ticketing platform: online sales, QR e-tickets and
                    attendee management, run live at MotorManiac Encore 2023.
                  </p>
                </div>
                <span className="arrow">&#8599;</span>
              </div>
            </a>
          </div>
          <div className="proj-rows">
            <div className="card proj-row">
              <div>
                <h4>Nexa</h4>
                <p>Fraud detection system: AI screening of transactions with case triage for investigators.</p>
              </div>
              <span className="arrow">&#8599;</span>
            </div>
            <div className="card proj-row">
              <div>
                <h4>DoseBase</h4>
                <p>Dose management system built for Institut Kanser Negara clinicians.</p>
              </div>
              <span className="arrow">&#8599;</span>
            </div>
            <div className="card proj-row">
              <div>
                <h4>KinderCare</h4>
                <p>Lesson-planning system that helps kindergarten teachers create classroom-ready plans in minutes.</p>
              </div>
              <span className="arrow">&#8599;</span>
            </div>
          </div>
        </div>
      </section>

      {/* =============== STACK =============== */}
      <section className="sec reveal" id="stack">
        <div className="sec-label">Stack</div>
        <div className="card stack-card">
          <div className="stack-groups">
            <div className="stack-g">
              <h5>Primary</h5>
              <div className="tags">
                <span className="tag">TypeScript</span>
                <span className="tag">Vue / Nuxt</span>
                <span className="tag">React / Next.js</span>
                <span className="tag">Flutter / Dart</span>
                <span className="tag">Python / FastAPI</span>
                <span className="tag">Laravel</span>
              </div>
            </div>
            <div className="stack-g">
              <h5>Data &amp; Infra</h5>
              <div className="tags">
                <span className="tag">PostgreSQL</span>
                <span className="tag">Supabase</span>
                <span className="tag">Redis</span>
                <span className="tag">BigQuery</span>
                <span className="tag">Docker</span>
                <span className="tag">Dokploy</span>
              </div>
            </div>
            <div className="stack-g">
              <h5>AI</h5>
              <div className="tags">
                <span className="tag">LangChain</span>
                <span className="tag">LangGraph</span>
                <span className="tag">Claude / Agent SDK</span>
                <span className="tag">RAG pipelines</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============== CONTACT =============== */}
      <section className="sec reveal" id="contact">
        <div className="sec-label">Contact</div>
        <div className="card contact-card">
          <h2>Let&apos;s build something.</h2>
          <p>
            Got a product to ship, a system to untangle, or an agent to build?
            I usually reply within a day.
          </p>
          <a className="cta" href="mailto:aiman_saharudin@yahoo.com">
            aiman_saharudin@yahoo.com &#8599;
          </a>
        </div>
      </section>

      <footer>© 2026 Aiman Saharudin · Kuala Lumpur · Keep it simple.</footer>
    </div>
  );
}
