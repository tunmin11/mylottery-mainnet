'use client';

import Header from "@/components/layouts/Header";
import NavBar from "@/components/layouts/NavBar";
import Footer from "@/components/layouts/Footer";
import Mint from "@/components/layouts/Mint";

export default function Home() {
  return (
    <main className="bg-white">
      <NavBar mintVisiable={true} />
      <Header />
      <Mint />
      <Footer />
    </main>
  )
}
