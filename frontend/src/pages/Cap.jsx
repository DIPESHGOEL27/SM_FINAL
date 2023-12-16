import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CapSection from "../components/CapSection";


export default function About() {
    return(
        <>
        <div class="container-xxl bg-white p-0">
        <div class="container-xxl position-relative p-0" id="home">
          <Navbar page="cap"/>
        </div>
        <CapSection />
        {/* <CapForm /> */}
        <Footer />
      </div>
        </>
    );
}