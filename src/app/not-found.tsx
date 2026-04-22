"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="not-found-root">
      {/* Ambient background */}
      <div className="bg-grid" />
      <div className="bg-glow" />

      <main className={`container ${mounted ? "visible" : ""}`}>
        {/* Big 404 */}
        <div className="code-wrap">
          <span className="code-num">4</span>
          <div className="wheel-wrap">
            <svg
              className="wheel"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="45" className="rim" />
              <circle cx="50" cy="50" r="10" className="hub" />
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={50 + 35 * Math.cos((angle * Math.PI) / 180)}
                  y2={50 + 35 * Math.sin((angle * Math.PI) / 180)}
                  className="spoke"
                />
              ))}
              <circle cx="50" cy="50" r="30" className="rim-inner" />
            </svg>
          </div>
          <span className="code-num">4</span>
        </div>

        {/* Text */}
        <p className="tagline">ROAD ENDS HERE</p>
        <h1 className="headline">Page Not Found</h1>
        <p className="sub">
          Looks like you took a wrong turn. The page you&apos;re looking for
          doesn&apos;t exist or has been moved.
        </p>

        {/* CTA */}
        <Link href="/" className="back-btn">
          <span className="btn-text">Back to Home</span>
          <span className="btn-arrow">→</span>
        </Link>
      </main>

      <style jsx>{`
        .not-found-root {
          min-height: 100vh;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Georgia", serif;
          overflow: hidden;
          position: relative;
        }

        /* Grid background */
        .bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            );
          background-size: 60px 60px;
        }

        /* Amber glow */
        .bg-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(202, 138, 4, 0.12) 0%,
            transparent 70%
          );
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .container {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 2rem;
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .container.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* 404 number row */
        .code-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .code-num {
          font-size: clamp(6rem, 18vw, 12rem);
          font-weight: 900;
          font-family: "Georgia", serif;
          color: transparent;
          -webkit-text-stroke: 2px rgba(202, 138, 4, 0.7);
          line-height: 1;
          letter-spacing: -0.02em;
          text-shadow: 0 0 80px rgba(202, 138, 4, 0.2);
        }

        /* Wheel SVG */
        .wheel-wrap {
          width: clamp(80px, 14vw, 140px);
          height: clamp(80px, 14vw, 140px);
          flex-shrink: 0;
        }

        .wheel {
          width: 100%;
          height: 100%;
          animation: spin 4s linear infinite;
        }

        .rim {
          fill: none;
          stroke: #ca8a04;
          stroke-width: 3;
        }

        .rim-inner {
          fill: none;
          stroke: rgba(202, 138, 4, 0.35);
          stroke-width: 1.5;
        }

        .hub {
          fill: #ca8a04;
        }

        .spoke {
          stroke: #ca8a04;
          stroke-width: 2.5;
          stroke-linecap: round;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Text */
        .tagline {
          letter-spacing: 0.4em;
          font-size: 0.7rem;
          color: #ca8a04;
          font-family: "Courier New", monospace;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }

        .headline {
          font-size: clamp(1.6rem, 5vw, 3rem);
          color: #f5f0e8;
          font-weight: 300;
          letter-spacing: 0.05em;
          margin: 0 0 1.25rem;
        }

        .sub {
          color: rgba(245, 240, 232, 0.45);
          font-size: clamp(0.85rem, 2vw, 1rem);
          max-width: 420px;
          margin: 0 auto 2.5rem;
          line-height: 1.7;
          font-family: "Courier New", monospace;
        }

        /* Button */
        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 2.2rem;
          border: 1px solid #ca8a04;
          color: #ca8a04;
          text-decoration: none;
          font-family: "Courier New", monospace;
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          position: relative;
          overflow: hidden;
          transition: color 0.3s ease;
        }

        .back-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          background: #ca8a04;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
          z-index: 0;
        }

        .back-btn:hover::before {
          transform: translateX(0);
        }

        .back-btn:hover {
          color: #0a0a0a;
        }

        .btn-text,
        .btn-arrow {
          position: relative;
          z-index: 1;
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .back-btn:hover .btn-arrow {
          transform: translateX(4px);
        }
      `}</style>
    </div>
  );
}
