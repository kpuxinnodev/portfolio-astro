/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    darkMode: ["class"],
    extend: {
      animation: {
        "infinite-scroll": "scroll 25s linear infinite",
        "reverse-infinite-scroll": "rightScroll 10s linear infinite",
        "recommendation-scroll": "leftScroll 20s linear infinite",
      },
      keyframes: {
        scroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        rightScroll: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        leftScroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      maskImage: {
        fade: "linear-gradient(90deg, transparent, white 10%, white 80%, transparent)",
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
