import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header";
import Layout from "../components/layout";
import Footer from "../components/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className="text-slate-700 flex flex-col gap-6">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Layout>
  );
}