export default function manifest() {
  return {
    name: "Findr",
    short_name: "Findr",
    description: "Findr",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
