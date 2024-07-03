import Footer from "@/components/Layout/Navigation/Footer/Footer";
import Header from "@/components/Layout/Navigation/Header/Header";
import AutoScroll from "@/components/Scroll/AutoScroll";
import Scroll from "@/components/Scroll/Scroll";
import About from "@/views/About/About";
import { NextPage } from "next";
import React from "react";

const AboutPage: NextPage = () => {
  return (
    <>
      <Header />
      <About />
      <AutoScroll />
      {/* <Scroll /> */}
      <Footer />
    </>
  );
};

export default AboutPage;
