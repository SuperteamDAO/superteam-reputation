import { Head, Html, Main, NextScript } from 'next/document';

// this prevents white flash on page load
const themeScript = `
(function () {
  var currentTheme;
  function changeTheme(inputTheme) {
    if (inputTheme === "dark") {
      var theme = themeConfig.dark;
      for (var key in theme) {
        setCSSVar(key, theme[key]);
      }
      localStorage.setItem("theme", inputTheme);
    } else {
      var theme = themeConfig.light;
      for (var key in theme) {
        setCSSVar(key, theme[key]);
      }
      localStorage.setItem("theme", inputTheme);
    }
  }
  function setCSSVar(property, color) {
    document.documentElement.style.setProperty(property, color);
  }
  try {
    currentTheme = localStorage.getItem("theme") || "light";
    var themeConfig = {
      dark: {
        "--color-homepage-bg": "#1E222A",
        "--color-text": "#fff",
        "--code": "#ccc",
        "--color-blue": "#f300e0",
        "--color-grey": "#ccc",
      },
      light: {
        "--color-homepage-bg": "#fff",
        "--color-text": "#000",
        "--code": "#f1f1f1",
        "--color-blue": "#0070f3",
        "--color-grey": "#eaeaea",
      },
    };
    changeTheme(currentTheme);
  } catch (err) {
    console.log(err);
  }
})();
`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
