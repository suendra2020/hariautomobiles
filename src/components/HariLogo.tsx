import React from "react";

interface HariLogoProps {
  className?: string;
  showSlogan?: boolean;
  lightText?: boolean;
}

export default function HariLogo({ className = "h-16 w-auto", showSlogan = true, lightText = true }: HariLogoProps) {
  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 300 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-full"
      >
        {/* Top semi-circle red border with wing endpoints */}
        <path
          d="M 45 80 A 105 105 0 0 1 255 80 M 225 80 H 267 M 33 80 H 75"
          stroke="#e11d48"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Sleek Car Silhouette (Front View) */}
        <g transform="translate(90, 32)">
          {/* Main Car Cab / Windshield */}
          <path
            d="M 33 22 C 38 10, 82 10, 87 22"
            fill="#0f172a"
            stroke={lightText ? "#e2e8f0" : "#1e293b"}
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Dashboard glint inside windshield */}
          <path
            d="M 43 14 C 48 11, 72 11, 77 14"
            stroke="#e11d48"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.8"
          />
          {/* Car Body / Hood & Side Mirrors */}
          <path
            d="M 30 22 C 16 22, 10 32, 12 36 C 14 38, 20 38, 25 36 C 26 34, 28 32, 33 32 H 87 C 92 32, 94 34, 95 36 C 100 38, 106 38, 108 36 C 110 32, 104 22, 90 22 Z"
            fill="#020617"
            stroke={lightText ? "#ffffff" : "#0f172a"}
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Underbody contour shadow / Grille */}
          <path
            d="M 35 32 Q 60 41 85 32"
            stroke="#e11d48"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Headlights */}
          <path
            d="M 17 31 C 19 33, 27 34, 29 28"
            stroke="#e11d48"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 103 31 C 101 33, 93 34, 91 28"
            stroke="#e11d48"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Brand Text: "Hari AutoMobiles" */}
        <text
          x="150"
          y="114"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="24"
          textAnchor="middle"
          letterSpacing="0.2"
        >
          <tspan fill={lightText ? "#ffffff" : "#1e293b"}>Hari </tspan>
          <tspan fill="#e11d48">AutoMobiles</tspan>
        </text>

        {/* Horizontal Separator Line */}
        <line
          x1="25"
          y1="126"
          x2="275"
          y2="126"
          stroke={lightText ? "#ffffff" : "#1e293b"}
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Slogan: "Fix it better and faster" */}
        {showSlogan && (
          <text
            x="150"
            y="144"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontStyle="italic"
            fontWeight="700"
            fontSize="12"
            fill={lightText ? "#cbd5e1" : "#334155"}
            textAnchor="middle"
            letterSpacing="0.5"
          >
            Fix it better and faster
          </text>
        )}

        {/* Bottom semi-circle red border with wing endpoints */}
        <path
          d="M 75 158 A 105 105 0 0 0 225 158 M 53 158 H 105 M 195 158 H 247"
          stroke="#e11d48"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
