import { ThemeProvider } from "@/lib/ThemeProvider";
import Nav from "@/sections/Nav";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Nav/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}