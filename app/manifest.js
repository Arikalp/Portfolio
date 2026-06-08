export default function manifest() {
  return {
    name: "Sankalp's Portfolio",
    short_name: "Portfolio",
    description:
      "Portfolio of Sankalp Saini, a Full Stack Developer specializing in React, Next.js, Node.js, and modern UI/UX.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/favicon-theme.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}