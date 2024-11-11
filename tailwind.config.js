/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      primary: "var(--sys-primary)",
      "on-primary": "var(--sys-on-primary)",
      "primary-container": "var(--sys-primary-container)",
      "on-primary-container": "var(--sys-on-primary-container)",
      secondary: "var(--sys-secondary)",
      "on-primary": "var(--sys-on-secondary)",
      "secondary-container": "var(--sys-secondary-container)",
      "on-secondary-container": "var(--sys-on-secondary-container)",
      tertiary: "var(--sys-tertiary)",
      "on-tertiary": "var(--sys-on-tertiary)",
      "tertiary-container": "var(--sys-tertiary-container)",
      "on-tertiary-container": "var(--sys-on-tertiary-container)",
      outline: "var(--sys-outline)",
      "outline-variant": "var(--sys-outline-variant)",
      "surface-container": "var(--sys-surface-container)",
      "surface-container-high": "var(--sys-surface-container-high)",
      "accent": "var(--accent)"
    },
    extend: {},
  },
  plugins: [],
}