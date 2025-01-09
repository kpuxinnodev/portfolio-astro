/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    darkMode: 'class',
    extend: {
      animation: {
        "skills-scroll": "rightScroll 10s linear infinite",
        "recommendation-scroll": "leftScroll 20s linear infinite",
      },
      keyframes: {
        rightScroll: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        leftScroll: {
          '0%': { transform: "translateX(0)" },
          '100%': { transform: "translateX(calc(-50% - 1rem))" }, // Ajustamos por el gap
        },
      },
      maskImage: {
        fade: "linear-gradient(90deg, transparent, white 20%, white 70%, transparent)",
      },
    },
    variants: {
      extend: {
        animation: ["responsive"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".mask-fade": {
            "mask-image":
              "linear-gradient(90deg, transparent, white 10%, white 80%, transparent)",
            "-webkit-mask-image":
              "linear-gradient(90deg, transparent, white 10%, white 80%, transparent)",
          },
          ".pause-on-hover:hover": {
            "animation-play-state": "paused",
          },
        },
        ["responsive"]
      );
    },
  ],
};