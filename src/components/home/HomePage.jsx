"use client";

import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Company from "./Company";
import Competencies from "./Competencies";
import Applications from "./Applications";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-900" id="top">
            <Header />
            <Hero />
            <Company />
            <Competencies />
            <Applications />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
}
