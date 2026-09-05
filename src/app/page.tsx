"use client";

import { useState } from "react";

function CopyButton({ text }: { text: string }) {
  const [label, setLabel] = useState("Copy");

  const handleClick = () => {
    navigator.clipboard.writeText(text).then(() => {
      setLabel("Copied");
      setTimeout(() => setLabel("Copy"), 1500);
    });
  };

  return (
    <button className="copy-btn" onClick={handleClick}>
      {label}
    </button>
  );
}

export default function Page() {
  return (
    <>
      <style jsx global>{`
        :root {
          --paper: #faf9f5;
          --ink: #17181c;
          --ink-soft: #55575f;
          --blue: #2c4bff;
          --blue-deep: #1b32c7;
          --sage: #7c8e77;
          --sage-bg: #eef1ea;
          --line: #e4e2dc;
          --card: #ffffff;
        }
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          background: var(--paper);
          color: var(--ink);
          font-family: "Space Grotesk", sans-serif;
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
        }
        h1,
        h2,
        h3 {
          font-family: "Fraunces", serif;
          font-weight: 500;
          letter-spacing: -0.01em;
          line-height: 1.08;
        }
        a {
          color: inherit;
        }
        img {
          max-width: 100%;
          display: block;
        }
        .wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 28px;
        }
        ::selection {
          background: var(--blue);
          color: #fff;
        }
        :focus-visible {
          outline: 2px solid var(--blue);
          outline-offset: 3px;
        }

        @media (prefers-reduced-motion: no-preference) {
          .reveal {
            animation: riseIn 0.7s cubic-bezier(0.2, 0.7, 0.3, 1) both;
          }
          .reveal-1 {
            animation-delay: 0.05s;
          }
          .reveal-2 {
            animation-delay: 0.18s;
          }
          .reveal-3 {
            animation-delay: 0.3s;
          }
          .reveal-4 {
            animation-delay: 0.42s;
          }
          @keyframes riseIn {
            from {
              opacity: 0;
              transform: translateY(14px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }

        /* ---------- HEADER ---------- */
        header {
          padding: 22px 0;
          border-bottom: 1px solid var(--line);
        }
        .header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          font-family: "Fraunces", serif;
          font-size: 1.35rem;
          font-weight: 600;
        }
        .logo span {
          color: var(--blue);
        }
        .header-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--ink);
          color: #fff;
          padding: 10px 18px;
          border-radius: 100px;
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.15s ease;
        }
        .header-cta:hover {
          background: var(--blue-deep);
        }

        /* ---------- HERO ---------- */
        .hero {
          padding: 72px 0 64px 56px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 56px;
          align-items: center;
        }
        @media (max-width: 860px) {
          .hero {
            padding-left: 0;
          }
        }
        .eyebrow-line {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.85rem;
          color: var(--sage);
          margin-bottom: 22px;
        }
        .eyebrow-line .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--sage);
        }
        .hero h1 {
          font-size: clamp(2.1rem, 4vw, 3.35rem);
          margin-bottom: 22px;
          max-width: 12ch;
        }
        .hero p.lead {
          font-size: 1.1rem;
          color: var(--ink-soft);
          max-width: 46ch;
          margin-bottom: 32px;
        }
        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 28px;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 24px;
          border-radius: 100px;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid transparent;
          cursor: pointer;
          transition: transform 0.12s ease, background 0.15s ease,
            box-shadow 0.15s ease;
        }
        .btn:active {
          transform: scale(0.98);
        }
        .btn-primary {
          background: var(--blue);
          color: #fff;
        }
        .btn-primary:hover {
          background: var(--blue-deep);
        }
        .btn-outline {
          background: transparent;
          border: 1px solid var(--ink);
          color: var(--ink);
        }
        .btn-outline:hover {
          background: var(--ink);
          color: #fff;
        }
        .btn-whatsapp {
          background: #25d366;
          color: #fff;
        }
        .btn-whatsapp:hover {
          background: #1dae54;
        }

        .trust-row {
          display: flex;
          gap: 22px;
          flex-wrap: wrap;
          font-size: 0.85rem;
          color: var(--ink-soft);
        }
        .trust-row strong {
          color: var(--ink);
        }

        .hero-visual {
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 8px;
        }
        .hero-visual .caption {
          font-size: 0.72rem;
          color: var(--ink-soft);
          text-align: center;
          padding: 8px 6px 4px;
        }

        /* ---------- SECTION GENERIC ---------- */
        section {
          padding: 64px 0;
        }
        .section-head {
          max-width: 60ch;
          margin-bottom: 40px;
        }
        .section-head .kicker {
          font-size: 0.85rem;
          color: var(--sage);
          margin-bottom: 10px;
          display: block;
        }
        .section-head h2 {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
        }
        .section-head p {
          color: var(--ink-soft);
          margin-top: 14px;
          font-size: 1.02rem;
        }

        /* ---------- FEATURES ---------- */
        .features {
          border-top: 1px solid var(--line);
        }
        .feature-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid var(--line);
          border-left: 1px solid var(--line);
        }
        .feature-item {
          padding: 26px 28px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          display: flex;
          gap: 16px;
        }
        .feature-icon {
          flex: 0 0 auto;
          width: 36px;
          height: 36px;
          border-radius: 9px;
          background: var(--sage-bg);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .feature-icon svg {
          width: 18px;
          height: 18px;
        }
        .feature-item h3 {
          font-family: "Space Grotesk", sans-serif;
          font-weight: 600;
          font-size: 1.02rem;
          margin-bottom: 4px;
        }
        .feature-item p {
          font-size: 0.92rem;
          color: var(--ink-soft);
        }

        /* ---------- PRICING ---------- */
        .pricing {
          background: var(--ink);
          color: var(--paper);
        }
        .pricing .section-head p {
          color: #b7b8be;
        }
        .pricing .kicker {
          color: #8fa0ff;
        }
        .price-table {
          border-top: 1px solid #34353b;
        }
        .price-row {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          align-items: center;
          padding: 22px 0;
          border-bottom: 1px solid #34353b;
          gap: 12px;
        }
        .price-row.head {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #8c8d93;
          padding-bottom: 14px;
        }
        .price-row .plan-name {
          font-family: "Fraunces", serif;
          font-size: 1.25rem;
        }
        .price-row .tag {
          display: inline-block;
          margin-left: 10px;
          font-family: "Space Grotesk", sans-serif;
          font-size: 0.68rem;
          font-weight: 600;
          background: var(--blue);
          color: #fff;
          padding: 3px 9px;
          border-radius: 100px;
          vertical-align: middle;
        }
        .price-row .amount {
          font-size: 1.3rem;
          font-weight: 600;
        }
        .price-row .per-slot {
          font-size: 0.85rem;
          color: #9a9ba1;
        }
        .price-row .row-cta {
          justify-self: end;
        }
        .price-cta-btn {
          padding: 10px 18px;
          font-size: 0.85rem;
        }
        @media (max-width: 720px) {
          .price-row {
            grid-template-columns: 1fr;
            text-align: left;
            row-gap: 6px;
          }
          .price-row.head {
            display: none;
          }
          .price-row .row-cta {
            justify-self: start;
            margin-top: 8px;
          }
        }

        /* ---------- HOW IT WORKS ---------- */
        .steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          border-top: 1px solid var(--line);
          padding-top: 44px;
        }
        .step .num {
          font-family: "Fraunces", serif;
          font-size: 1.6rem;
          color: var(--blue);
          margin-bottom: 14px;
        }
        .step h3 {
          font-family: "Space Grotesk", sans-serif;
          font-weight: 600;
          font-size: 1.05rem;
          margin-bottom: 8px;
        }
        .step p {
          font-size: 0.92rem;
          color: var(--ink-soft);
        }

        /* ---------- PAYMENT PANEL ---------- */
        .payment {
          background: var(--sage-bg);
          border-radius: 20px;
          padding: 44px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .payment h2 {
          font-size: 1.7rem;
          margin-bottom: 14px;
        }
        .payment p {
          color: var(--ink-soft);
          margin-bottom: 22px;
          font-size: 0.98rem;
        }
        .bank-card {
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: 14px;
          padding: 26px;
        }
        .bank-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid var(--line);
          font-size: 0.95rem;
        }
        .bank-row:last-child {
          border-bottom: none;
        }
        .bank-row .label {
          color: var(--ink-soft);
          font-size: 0.82rem;
        }
        .bank-row .value {
          font-weight: 600;
        }
        .copy-btn {
          background: none;
          border: 1px solid var(--line);
          border-radius: 8px;
          padding: 5px 11px;
          font-size: 0.75rem;
          font-family: "Space Grotesk", sans-serif;
          cursor: pointer;
          color: var(--ink);
        }
        .copy-btn:hover {
          background: var(--ink);
          color: #fff;
          border-color: var(--ink);
        }
        @media (max-width: 760px) {
          .payment {
            grid-template-columns: 1fr;
            padding: 28px;
          }
        }

        /* ---------- FOOTER ---------- */
        footer {
          border-top: 1px solid var(--line);
          padding: 36px 0 120px;
          font-size: 0.85rem;
          color: var(--ink-soft);
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        /* ---------- FLOATING WHATSAPP ---------- */
        .float-whatsapp {
          position: fixed;
          right: 22px;
          bottom: 22px;
          background: #25d366;
          color: #fff;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 22px rgba(37, 211, 102, 0.4);
          z-index: 999;
          text-decoration: none;
        }
        .float-whatsapp svg {
          width: 28px;
          height: 28px;
        }
        .float-whatsapp .pulse {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #25d366;
          opacity: 0.55;
        }
        @media (prefers-reduced-motion: no-preference) {
          .float-whatsapp .pulse {
            animation: pulse 2.2s ease-out infinite;
          }
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 0.5;
            }
            100% {
              transform: scale(1.9);
              opacity: 0;
            }
          }
        }

        @media (max-width: 860px) {
          .hero {
            grid-template-columns: 1fr;
          }
          .feature-list {
            grid-template-columns: 1fr;
          }
          .steps {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <header>
        <div className="wrap header-row">
          <div className="logo">
            oello<span>.</span>ai
          </div>
          <a href="#pricing" className="header-cta">
            See plans
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero wrap">
        <div>
          <div className="eyebrow-line reveal reveal-1">
            <span className="dot"></span> Google AI Pro, resold honestly
          </div>
          <h1 className="reveal reveal-2">
            18 months of premium Google AI. One payment.
          </h1>
          <p className="lead reveal reveal-3">
            Gemini Pro, Veo 3, 5TB storage and the full Workspace AI suite —
            the toolkit built for creators, developers and anyone doing
            serious work, without the recurring subscription.
          </p>
          <div className="hero-ctas reveal reveal-4">
            <a href="#pricing" className="btn btn-primary">
              View plans &amp; pay
            </a>
            <a
              href="https://wa.me/2348137152040?text=Hi%20Oello%20AI%2C%20I%27d%20like%20to%20activate%20a%20Google%20AI%20Pro%20plan"
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener"
            >
              Message on WhatsApp
            </a>
          </div>
          <div className="trust-row reveal reveal-4">
            <span>
              <strong>18 months</strong> access
            </span>
            <span>
              <strong>Same-day</strong> activation
            </span>
            <span>
              <strong>Limited</strong> slots per batch
            </span>
          </div>
        </div>

        <div className="hero-visual reveal reveal-3">
          <img
            src="https://i.ibb.co/TqThKZ0Y/Gemini-Generated-Image-ahfrq8ahfrq8ahfr.jpg"
            alt="Description of the image"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">What&apos;s inside</span>
            <h2>Every account comes fully loaded</h2>
            <p>
              No stripped-down tier. Every plan you buy — whether it&apos;s
              one account or seven — includes the complete toolkit below.
            </p>
          </div>
        </div>
        <div className="wrap" style={{ padding: 0 }}>
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2C4BFF"
                  strokeWidth="1.8"
                >
                  <path d="M12 3v18M3 12h18" />
                </svg>
              </div>
              <div>
                <h3>Gemini Pro</h3>
                <p>
                  Elite writing, research and coding support with stronger
                  reasoning and broader context understanding.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2C4BFF"
                  strokeWidth="1.8"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                </svg>
              </div>
              <div>
                <h3>5TB Google Drive</h3>
                <p>
                  Massive cloud storage for every project, archive and backup
                  you&apos;re running.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2C4BFF"
                  strokeWidth="1.8"
                >
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
              <div>
                <h3>Veo 3 &amp; Omni Flash</h3>
                <p>
                  Industry-leading premium video generation, built for real
                  production work.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2C4BFF"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="12" r="8" />
                </svg>
              </div>
              <div>
                <h3>Google Whisk</h3>
                <p>
                  High-end image generation for concepts, campaigns and
                  creative work.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2C4BFF"
                  strokeWidth="1.8"
                >
                  <path d="M4 19V5M4 19h16M8 15l4-4 3 3 5-6" />
                </svg>
              </div>
              <div>
                <h3>NotebookLM &amp; Google Studio</h3>
                <p>Deep research tools plus unlimited text-to-speech for reading, faster.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2C4BFF"
                  strokeWidth="1.8"
                >
                  <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
                </svg>
              </div>
              <div>
                <h3>1,000 Flow credits monthly</h3>
                <p>Refreshed every single month for the full length of your plan.</p>
              </div>
            </div>
            <div className="feature-item" style={{ gridColumn: "span 2" }}>
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2C4BFF"
                  strokeWidth="1.8"
                >
                  <path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4 9-4V7" />
                </svg>
              </div>
              <div>
                <h3>AI built into your Workspace</h3>
                <p>
                  Seamless AI directly inside Gmail, Docs, Sheets and Drive —
                  no switching tabs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing" id="pricing">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Plans</span>
            <h2>Pick how many accounts you need</h2>
            <p>
              Every plan runs 18 months. Buying more accounts lowers your
              cost per account — useful if you&apos;re sharing across a team
              or reselling.
            </p>
          </div>

          <div className="price-table">
            <div className="price-row head">
              <div>Plan</div>
              <div>Price</div>
              <div>Per account</div>
              <div></div>
            </div>

            <div className="price-row">
              <div className="plan-name">1 account</div>
              <div className="amount">₦8,000</div>
              <div className="per-slot">₦8,000 / account</div>
              <div className="row-cta">
                <a href="#payment" className="btn btn-primary price-cta-btn">
                  Choose
                </a>
              </div>
            </div>

            <div className="price-row">
              <div className="plan-name">3 accounts</div>
              <div className="amount">₦20,000</div>
              <div className="per-slot">≈ ₦6,666 / account</div>
              <div className="row-cta">
                <a href="#payment" className="btn btn-primary price-cta-btn">
                  Choose
                </a>
              </div>
            </div>

            <div className="price-row">
              <div className="plan-name">
                5 accounts <span className="tag">Best value</span>
              </div>
              <div className="amount">₦30,000</div>
              <div className="per-slot">₦6,000 / account</div>
              <div className="row-cta">
                <a href="#payment" className="btn btn-primary price-cta-btn">
                  Choose
                </a>
              </div>
            </div>

            <div className="price-row">
              <div className="plan-name">7 accounts</div>
              <div className="amount">₦40,000</div>
              <div className="per-slot">≈ ₦5,714 / account</div>
              <div className="row-cta">
                <a href="#payment" className="btn btn-primary price-cta-btn">
                  Choose
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">How it works</span>
            <h2>Three steps to activation</h2>
          </div>
          <div className="steps">
            <div className="step">
              <div className="num">01</div>
              <h3>Choose your plan</h3>
              <p>
                Decide how many accounts you need above — from a single
                account to seven.
              </p>
            </div>
            <div className="step">
              <div className="num">02</div>
              <h3>Pay by transfer</h3>
              <p>
                Send payment to the account details below. Keep your receipt
                or screenshot.
              </p>
            </div>
            <div className="step">
              <div className="num">03</div>
              <h3>Message us on WhatsApp</h3>
              <p>
                Send your proof of payment. Access is activated the same
                day, slots allowing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT */}
      <section id="payment">
        <div className="wrap">
          <div className="payment">
            <div>
              <h2>Ready to activate?</h2>
              <p>
                Pay into the account below, then send your receipt on
                WhatsApp to get your access details the same day.
              </p>
              <a
                href="https://wa.me/2348137152040?text=Hi%20Oello%20AI%2C%20I%27ve%20just%20made%20a%20payment%20%E2%80%94%20here%27s%20my%20receipt"
                className="btn btn-whatsapp"
                target="_blank"
                rel="noopener"
              >
                Send proof of payment
              </a>
            </div>
            <div className="bank-card">
              <div className="bank-row">
                <div>
                  <div className="label">Account name</div>
                  <div className="value">Kelvin Ekhorutomwen</div>
                </div>
                <CopyButton text="Kelvin Ekhorutomwen" />
              </div>
              <div className="bank-row">
                <div>
                  <div className="label">Bank</div>
                  <div className="value">Moniepoint</div>
                </div>
                <CopyButton text="Moniepoint" />
              </div>
              <div className="bank-row">
                <div>
                  <div className="label">Account number</div>
                  <div className="value">8106286358</div>
                </div>
                <CopyButton text="8106286358" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div
          className="wrap"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            width: "100%",
          }}
        >
          <div>oello.ai — Google AI Pro access, 18 months per plan.</div>
          <div>
            Questions before you pay?{" "}
            <a
              href="https://wa.me/2348137152040"
              target="_blank"
              rel="noopener"
              style={{ color: "var(--blue)", fontWeight: 600 }}
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        className="float-whatsapp"
        href="https://wa.me/2348137152040?text=Hi%20Oello%20AI%2C%20I%20have%20a%20question%20about%20your%20plans"
        target="_blank"
        rel="noopener"
        aria-label="Message Oello AI on WhatsApp"
      >
        <span className="pulse" aria-hidden="true"></span>
        <svg viewBox="0 0 32 32" fill="#fff" aria-hidden="true">
          <path d="M16 2C8.3 2 2 8.3 2 16c0 2.8.8 5.5 2.3 7.8L2 30l6.4-2.2C10.6 29.2 13.2 30 16 30c7.7 0 14-6.3 14-14S23.7 2 16 2zm0 25.5c-2.4 0-4.7-.7-6.7-1.9l-.5-.3-4.1 1.4 1.4-4-.3-.5C4.6 20.3 3.9 18.2 3.9 16 3.9 9.3 9.3 3.9 16 3.9S28.1 9.3 28.1 16 22.7 27.5 16 27.5zm7.1-8.4c-.4-.2-2.3-1.1-2.6-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.3-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.5-.6.2-.2.2-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-.9-2.2-1.3-3-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 4c.2.3 2.8 4.2 6.7 5.9.9.4 1.7.6 2.3.8.9.3 1.8.2 2.4.2.7-.1 2.3-.9 2.6-1.9.3-.9.3-1.7.2-1.9-.1-.2-.3-.3-.7-.5z" />
        </svg>
      </a>
    </>
  );
}
