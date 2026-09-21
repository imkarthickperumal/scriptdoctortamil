"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [language, setLanguage] = useState<"tamil" | "english">("tamil");
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [previewImage, setPreviewImage] = useState<"/images/banner.jpg" | "/images/image.jpeg" | null>(null);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name || !formData.phone) {
      alert("Please fill in all checkout fields (Email, Name, and Phone Number).");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsPaymentSuccess(true);
    }, 1500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ScriptDoctortamil@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToCheckout = () => {
    document.getElementById("checkout-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const faqs = [
    {
      q: "How will I receive the E-Book after completing the payment?",
      a: "Immediately upon successful payment of ₹333, an instant download button will appear on screen, and a copy of the PDF (3.07 MB) will be sent directly to your email address."
    },
    {
      q: "Does this include both Tamil and English versions?",
      a: "Yes! The package includes both the Tamil version ('Kudumbangal Kondaadum Gen Z Thiraikathai') and the English version ('Kill the Cat') in one unified digital download."
    },
    {
      q: "Can I read this PDF on my smartphone or tablet?",
      a: "Absolutely. The digital PDF file is fully optimized for all smartphones (Android & iOS), tablets, laptops, and e-readers."
    },
    {
      q: "Who is this E-Book designed for?",
      a: "It is crafted for aspiring feature film screenwriters, short filmmakers, YouTube content creators, and social media creators who want to master Gen Z storytelling."
    },
    {
      q: "What if I face any issue with downloading or payment?",
      a: "You can reach out directly to our dedicated support team at ScriptDoctortamil@gmail.com for instant assistance."
    }
  ];

  const isDark = theme === "dark";

  return (
    <div
      className={`relative min-h-screen overflow-hidden font-sans transition-colors duration-500 ${
        isDark ? "bg-[#0b0f17] text-slate-100" : "bg-[#fffdfa] text-slate-900"
      }`}
    >
      {/* ANNOUNCEMENT TOP BAR */}
      <div className="bg-gradient-to-r from-amber-600 via-rose-600 to-amber-600 text-white text-xs font-bold py-2 px-4 text-center tracking-wide flex items-center justify-center gap-2 shadow-md relative z-50">
        <span className="bg-black/30 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
          🎬 Tamil Cinema Special Edition
        </span>
        <span>
          &ldquo;Kill the Cat / குடும்பங்கள் கொண்டாடும் Gen Z திரைக்கதை&rdquo; E-Book • Get 66% OFF Today!
        </span>
        <button
          onClick={scrollToCheckout}
          className="hidden sm:inline-block underline hover:text-amber-200 transition-colors ml-2 cursor-pointer"
        >
          Claim For ₹333 &rarr;
        </button>
      </div>

      {/* Hero Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] blur-3xl transition-opacity duration-500 ${
            isDark
              ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/20 via-amber-600/5 to-transparent"
              : "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/30 via-amber-200/20 to-transparent"
          }`}
        />
      </div>

      {/* NAVBAR */}
      <header
        className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-colors duration-300 ${
          isDark
            ? "bg-[#0b0f17]/90 border-white/10 shadow-2xl"
            : "bg-[#fffdfa]/90 border-amber-900/10 shadow-sm"
        }`}
      >
        <div className="max-w-6xl mx-auto px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2">
          {/* Logo & Brand Name */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-amber-500/60 shadow-lg shadow-amber-500/20 bg-slate-900 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Script Doctor Tamil Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="min-w-0">
              <span
                className={`font-black tracking-tight text-sm sm:text-lg block leading-tight truncate ${
                  isDark ? "text-gradient-gold" : "text-amber-700"
                }`}
              >
                Script Doctor Tamil
              </span>
              <span
                className={`text-[10px] sm:text-[11px] font-medium tracking-wider uppercase hidden sm:flex items-center gap-1 ${
                  isDark ? "text-amber-400/80" : "text-slate-600"
                }`}
              >
                <span>திரைக்கதை தமிழ்</span> • <span>Gen Z Cinema</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className={`hidden md:flex items-center gap-8 text-sm font-medium ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            <a href="#overview" className="hover:text-amber-500 transition-colors">
              Overview
            </a>
            <a href="#banner-showcase" className="hover:text-amber-500 transition-colors">
              Screenplay Banner
            </a>
            <a href="#preview" className="hover:text-amber-500 transition-colors">
              Book Specs
            </a>
            <a href="#modules" className="hover:text-amber-500 transition-colors">
              What You&apos;ll Learn
            </a>
            <a href="#author" className="hover:text-amber-500 transition-colors">
              Creator
            </a>
            <a href="#faqs" className="hover:text-amber-500 transition-colors">
              FAQs
            </a>
          </nav>

          {/* Header Action Buttons (Theme Toggle & Buy Button) */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark / Light Theme"
              title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
              className={`p-2 sm:p-2.5 rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 shadow-md flex-shrink-0 ${
                isDark
                  ? "bg-slate-900 border-amber-500/40 text-amber-400 hover:bg-slate-800 hover:border-amber-400 shadow-amber-500/10"
                  : "bg-amber-100/90 border-amber-400 text-amber-900 hover:bg-amber-200 hover:border-amber-500 shadow-amber-500/20"
              }`}
            >
              {isDark ? (
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Buy CTA Button - Clean Single Line on Mobile & Web */}
            <button
              onClick={scrollToCheckout}
              className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm shadow-lg shadow-amber-500/25 transition-all transform hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap flex-shrink-0"
            >
              <span>Get E-Book • ₹333</span>
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="overview" className="relative pt-10 pb-16 px-4 sm:px-6 max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Top Pill Tag */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md ${
                isDark
                  ? "bg-amber-500/10 border-amber-500/40 text-amber-400"
                  : "bg-amber-100 border-amber-300 text-amber-900"
              }`}
            >
              <span className="text-base">🎬</span>
              <span>SCENE 01 | TAKE 01 • Instant Digital Download (3.07 MB PDF)</span>
            </div>

            {/* Main Title & Tamil Cinema Headline */}
            <div>
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] ${
                  isDark ? "text-slate-100" : "text-slate-900"
                }`}
              >
                Kill the Cat <br />
                <span className={isDark ? "text-gradient-gold" : "text-amber-600"}>
                  E-Book (Tamil &amp; English)
                </span>
              </h1>
              <p
                className={`mt-3 text-lg font-bold ${
                  isDark ? "text-amber-400" : "text-amber-800"
                }`}
              >
                &ldquo;குடும்பங்கள் கொண்டாடும் Gen Z திரைக்கதை&rdquo;
              </p>
            </div>

            {/* Author Attribution Card */}
            <div
              className={`flex items-center gap-3 px-4 py-2 rounded-2xl border ${
                isDark
                  ? "bg-slate-900/80 border-slate-800 text-slate-300"
                  : "bg-amber-50/90 border-amber-200 text-slate-700 shadow-sm"
              }`}
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-amber-500/50 flex-shrink-0">
                <Image src="/images/logo.png" alt="Script Doctor Tamil" fill className="object-cover" />
              </div>
              <span className="text-sm font-medium">
                Created by <strong className="text-amber-500 font-bold">Script Doctor Tamil</strong>
              </span>
              <span className="bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-md border border-emerald-500/30">
                Verified Director &amp; Screenwriter
              </span>
            </div>

            {/* Dual Language Switcher Box */}
            <div
              className={`w-full rounded-2xl p-5 border shadow-2xl backdrop-blur-md transition-colors ${
                isDark
                  ? "bg-slate-900/90 border-slate-800/80"
                  : "bg-white/95 border-amber-200/90 shadow-amber-500/10"
              }`}
            >
              <div
                className={`flex items-center justify-between pb-3 mb-3 border-b ${
                  isDark ? "border-slate-800" : "border-slate-200"
                }`}
              >
                <span
                  className={`text-xs uppercase font-extrabold tracking-wider flex items-center gap-1.5 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  Language Edition Switcher
                </span>
                
                {/* Language Toggle Buttons */}
                <div
                  className={`flex p-1 rounded-lg border ${
                    isDark ? "bg-slate-950 border-slate-800" : "bg-slate-100 border-slate-200"
                  }`}
                >
                  <button
                    onClick={() => setLanguage("tamil")}
                    className={`px-3.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                      language === "tamil"
                        ? "bg-amber-500 text-slate-950 shadow-md"
                        : isDark
                        ? "text-slate-400 hover:text-slate-200"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    தமிழ் (Tamil)
                  </button>
                  <button
                    onClick={() => setLanguage("english")}
                    className={`px-3.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                      language === "english"
                        ? "bg-amber-500 text-slate-950 shadow-md"
                        : isDark
                        ? "text-slate-400 hover:text-slate-200"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {/* Description Content */}
              {language === "tamil" ? (
                <p
                  className={`text-base leading-relaxed font-normal ${
                    isDark ? "text-slate-200" : "text-slate-800"
                  }`}
                >
                  இந்த <span className="text-amber-500 font-semibold">&ldquo;குடும்பங்கள் கொண்டாடும் Gen Z திரைக்கதை&rdquo;</span>, Ebook தமிழ்- ஐயும் <strong className="text-amber-500">Kill the cat</strong> அப்புடிங்குற பேர்ல English லையும் available ah இருக்கு, இந்த guide மூலமா உங்க film க்கு எப்புடி story and screenplay பண்ணனும், short films க்கு எப்புடி ideas and script எழுதணும், youtube random videos ல ஆரம்பிச்சு, reel videos க்கு கூட எப்புடி script பண்ணனும்னு Detailed ah learn பண்ணலாம்.
                </p>
              ) : (
                <p
                  className={`text-base leading-relaxed font-normal ${
                    isDark ? "text-slate-200" : "text-slate-800"
                  }`}
                >
                  <span className="text-amber-500 font-semibold">&ldquo;Kudumbangal Kondaadum Gen Z Thiraikathai&rdquo;</span> is available as an eBook in Tamil, and the English version is available under the title <strong className="text-amber-500">&ldquo;Kill the Cat.&rdquo;</strong> Through this guide, you’ll learn in detail how to develop stories and screenplays for your films, create ideas and write scripts for short films, and even script everything from random YouTube videos to engaging Reels.
                </p>
              )}
            </div>

            {/* Price & Buy Action Bar */}
            <div className="w-full flex flex-col sm:flex-row items-center gap-4 pt-2">
              <div
                className={`w-full sm:w-auto flex items-baseline gap-3 px-5 py-3.5 rounded-2xl border ${
                  isDark
                    ? "bg-slate-900/80 border-slate-800"
                    : "bg-amber-50 border-amber-200 shadow-sm"
                }`}
              >
                <span className="text-3xl sm:text-4xl font-black text-amber-500">₹333</span>
                <span
                  className={`line-through text-lg ${
                    isDark ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  ₹999
                </span>
                <span className="bg-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-black px-2.5 py-0.5 rounded-md border border-rose-500/30">
                  66% OFF
                </span>
              </div>

              <button
                onClick={scrollToCheckout}
                className="w-full sm:flex-1 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-extrabold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Pay ₹333 & Download Now</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </div>

            {/* Trust Tags */}
            <div
              className={`flex flex-wrap items-center gap-4 text-xs font-medium ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                100% Secure Checkout
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Instant Access After Payment
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Mobile &amp; Tablet Friendly
              </span>
            </div>

          </div>

          {/* Right Hero Column: Grand Banner Image + Book Cover Display */}
          <div className="lg:col-span-5 flex flex-col gap-5 items-center">
            
            {/* Banner Showcase Box (Full 16:9 Display without Crop) */}
            <div className="relative w-full max-w-md group">
              {/* Outer Glow framing effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-rose-500 to-amber-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-700 animate-pulse-glow" />
              
              <div
                className={`relative rounded-2xl p-4 border shadow-2xl overflow-hidden transition-colors ${
                  isDark
                    ? "bg-slate-900 border-amber-500/40"
                    : "bg-white border-amber-300 shadow-amber-500/20"
                }`}
              >
                {/* Tamil Cinema Clapper Header */}
                <div className="bg-black/90 text-amber-400 text-[11px] font-mono font-bold px-3 py-1.5 rounded-lg mb-3 flex items-center justify-between border border-amber-500/30">
                  <span className="flex items-center gap-1.5">
                    <span>🎬</span> SCENE: 01 | TAKE: 1
                  </span>
                  <span className="text-slate-400">SCRIPT DOCTOR TAMIL</span>
                </div>

                {/* Banner Hero Showcase Graphic - Exactly 16:9 Full View */}
                <div
                  onClick={() => setPreviewImage("/images/banner.jpg")}
                  className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border-2 border-amber-500/50 shadow-inner cursor-pointer group/banner mb-4 bg-slate-950"
                >
                  <Image
                    src="/images/banner.jpg"
                    alt="Script Doctor Tamil Banner Image"
                    fill
                    className="object-contain transform group-hover/banner:scale-102 transition-transform duration-500"
                    priority
                  />
                  {/* Subtle Top-Right Expand Badge */}
                  <div className="absolute top-2 right-2 z-10 bg-amber-500/90 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded shadow flex items-center gap-1">
                    🔍 Full View
                  </div>
                </div>

                {/* Main Book Cover Graphic (image.jpeg) - Fitted 9:16 Aspect Ratio */}
                <div
                  onClick={() => setPreviewImage("/images/image.jpeg")}
                  className="relative aspect-[9/12] sm:aspect-[9/13] w-full rounded-xl overflow-hidden bg-slate-950 shadow-inner cursor-pointer group/cover"
                >
                  <Image
                    src="/images/image.jpeg"
                    alt="Kill the Cat E-Book Cover - Script Doctor Tamil"
                    fill
                    className="object-contain transform group-hover/cover:scale-102 transition-transform duration-500"
                    priority
                  />
                </div>

                {/* Book Meta Bar */}
                <div
                  className={`mt-4 pt-3 border-t flex items-center justify-between text-xs ${
                    isDark
                      ? "border-slate-800/80 text-slate-400"
                      : "border-amber-100 text-slate-600"
                  }`}
                >
                  <span className="flex items-center gap-1 font-medium">
                    <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Tamil &amp; English Included
                  </span>
                  <span
                    className={`font-mono font-bold px-2.5 py-0.5 rounded border ${
                      isDark
                        ? "bg-slate-800 text-amber-400 border-slate-700"
                        : "bg-amber-100 text-amber-900 border-amber-200"
                    }`}
                  >
                    3.07 MB PDF
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* DEDICATED TAMIL CINEMA BANNER SHOWCASE SECTION (100% FULL UNCROPPED VIEW) */}
      <section id="banner-showcase" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/40">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs uppercase tracking-widest text-amber-500 font-extrabold block mb-1">
            🎬 Kollywood Screenplay Marquee
          </span>
          <h2 className={`text-3xl sm:text-4xl font-black tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
            Tamil Cinema Screenplay Banner
          </h2>
          <p className={`text-sm sm:text-base mt-2 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Full uncropped official poster banner for &ldquo;Kill the Cat / குடும்பங்கள் கொண்டாடும் Gen Z திரைக்கதை&rdquo;.
          </p>
        </div>

        {/* 35mm Film Strip Marquee Box holding full 16:9 banner.jpg */}
        <div
          className={`rounded-3xl p-4 sm:p-6 border shadow-2xl relative overflow-hidden transition-colors film-strip-border-top ${
            isDark
              ? "glass-card-gold-dark border-amber-500/40"
              : "glass-card-gold-light border-amber-400"
          }`}
        >
          {/* Top Marquee Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-3 border-b border-amber-500/20 text-xs font-mono">
            <span className="text-amber-500 font-bold flex items-center gap-2">
              <span className="animate-ping w-2 h-2 rounded-full bg-amber-500" />
              DIRECTOR&apos;S CUT • SCRIPT DOCTOR TAMIL OFFICIAL BANNER
            </span>
            <span className={isDark ? "text-slate-300" : "text-slate-700"}>
              FORMAT: FEATURE FILM / SHORT FILM / REELS SCRIPT
            </span>
          </div>

          {/* Full Uncropped 16:9 Banner Display */}
          <div
            onClick={() => setPreviewImage("/images/banner.jpg")}
            className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border-2 border-amber-500/60 shadow-2xl cursor-pointer group bg-slate-950"
          >
            <Image
              src="/images/banner.jpg"
              alt="Script Doctor Tamil Main Movie Screenplay Banner"
              fill
              className="object-contain sm:object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
              priority
            />
            
            {/* Hover overlay hint (does NOT block text) */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center pointer-events-none">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-amber-500 text-slate-950 font-black text-xs px-4 py-2 rounded-full shadow-2xl flex items-center gap-1.5 transform group-hover:scale-105">
                🔍 Click to Inspect Full Banner Image
              </span>
            </div>
          </div>

          {/* Clean Footer Bar Under Banner Image */}
          <div className="mt-4 pt-3 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-amber-400 font-semibold">
              <span>🎬</span>
              <span>All details &amp; text inside the banner are 100% visible and uncropped.</span>
            </div>
            <button
              onClick={() => setPreviewImage("/images/banner.jpg")}
              className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 px-4 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1"
            >
              <span>Enlarge Full Screen View</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3h6m0 0v6m0-6L14 10M9 21H3m0 0v-6m0 6l7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ADDITIONAL BOOK VISUAL & SPECS PREVIEW SECTION */}
      <section id="preview" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/40">
        <div
          className={`rounded-3xl p-8 sm:p-12 border relative overflow-hidden transition-colors ${
            isDark
              ? "glass-card-dark border-slate-800"
              : "glass-card-light border-amber-200"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 flex justify-center">
              <div
                onClick={() => setPreviewImage("/images/image.jpeg")}
                className="relative w-full max-w-sm aspect-[9/13] rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl cursor-pointer group bg-slate-950"
              >
                <Image
                  src="/images/image.jpeg"
                  alt="Kill the Cat Full Visual Preview"
                  fill
                  className="object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="bg-amber-500 text-slate-950 text-xs font-black px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 transform group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    Expand Visual Cover
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-amber-500 block">
                Exclusive Screenplay Blueprint
              </span>
              <h2
                className={`text-3xl sm:text-4xl font-extrabold ${
                  isDark ? "text-slate-100" : "text-slate-900"
                }`}
              >
                Inside &ldquo;Kill the Cat&rdquo; (Tamil &amp; English)
              </h2>
              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Designed specifically for Gen Z filmmakers and content creators, this guide breaks down the secret structural blueprints used by top screenwriters. You won&apos;t just read theory — you will gain instant, actionable templates to write stories that hook audiences instantly.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div
                  className={`p-4 rounded-xl border ${
                    isDark
                      ? "bg-slate-900/60 border-slate-800 text-slate-200"
                      : "bg-white/80 border-amber-200 text-slate-800"
                  }`}
                >
                  <div className="text-amber-500 font-bold text-lg">Dual Edition</div>
                  <div className="text-xs text-slate-400">Tamil &amp; English PDF</div>
                </div>

                <div
                  className={`p-4 rounded-xl border ${
                    isDark
                      ? "bg-slate-900/60 border-slate-800 text-slate-200"
                      : "bg-white/80 border-amber-200 text-slate-800"
                  }`}
                >
                  <div className="text-amber-500 font-bold text-lg">3.07 MB File</div>
                  <div className="text-xs text-slate-400">High Resolution PDF</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={scrollToCheckout}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Get Instant Download • ₹333
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN / FEATURES GRID */}
      <section id="modules" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/40">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-amber-500 font-bold mb-2">
            Master Modern Screenwriting
          </h2>
          <p
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? "text-slate-100" : "text-slate-900"
            }`}
          >
            What You Will Learn Inside This Guide
          </p>
          <p className={isDark ? "text-slate-400 text-sm sm:text-base mt-3" : "text-slate-600 text-sm sm:text-base mt-3"}>
            A comprehensive, practical manual designed for creators, short filmmakers, and cinema visionaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Module 1 */}
          <div
            className={`rounded-2xl p-6 border transition-all group ${
              isDark
                ? "glass-card-dark hover:border-amber-500/40"
                : "glass-card-light hover:border-amber-500"
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-5 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h18M3 16h18" />
              </svg>
            </div>
            <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
              Feature Film Screenplays (திரைக்கதை)
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              Understand how to craft solid story arcs, high-stake character motivations, and compelling screenplay structures for full-length feature films.
            </p>
          </div>

          {/* Module 2 */}
          <div
            className={`rounded-2xl p-6 border transition-all group ${
              isDark
                ? "glass-card-dark hover:border-amber-500/40"
                : "glass-card-light hover:border-amber-500"
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-5 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
              Short Film Concepting (குறும்படம்)
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              Transform raw ideas into captivating short film scripts. Learn pacing, character hooks, and twist endings that win film festivals and audiences.
            </p>
          </div>

          {/* Module 3 */}
          <div
            className={`rounded-2xl p-6 border transition-all group ${
              isDark
                ? "glass-card-dark hover:border-amber-500/40"
                : "glass-card-light hover:border-amber-500"
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-5 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
              YouTube Video Scripting
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              From random video concepts to high-retention YouTube scripts. Master narrative hooks, audience retention tricks, and structured video breakdowns.
            </p>
          </div>

          {/* Module 4 */}
          <div
            className={`rounded-2xl p-6 border transition-all group ${
              isDark
                ? "glass-card-dark hover:border-amber-500/40"
                : "glass-card-light hover:border-amber-500"
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-5 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
              Instagram Reels &amp; Gen Z Shorts
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              Script micro-content that grabs modern Gen Z attention in 3 seconds. Learn hook scripting, visual storytelling, and viral reel framing.
            </p>
          </div>

          {/* Module 5 */}
          <div
            className={`rounded-2xl p-6 border transition-all group ${
              isDark
                ? "glass-card-dark hover:border-amber-500/40"
                : "glass-card-light hover:border-amber-500"
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-5 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
              Dual Language Edition (தமிழ் &amp; Eng)
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              Switch effortlessly between Tamil (&ldquo;Kudumbangal Kondaadum Gen Z Thiraikathai&rdquo;) and English (&ldquo;Kill the Cat&rdquo;) within the same package.
            </p>
          </div>

          {/* Module 6 */}
          <div
            className={`rounded-2xl p-6 border transition-all group ${
              isDark
                ? "glass-card-dark hover:border-amber-500/40"
                : "glass-card-light hover:border-amber-500"
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-5 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
              Instant PDF Access (3.07 MB)
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              Get immediate, lifetime download access to the 3.07 MB PDF file right after checkout. Ready to read anywhere on phone or laptop.
            </p>
          </div>

        </div>
      </section>

      {/* CHECKOUT SECTION */}
      <section id="checkout-section" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
        <div
          className={`rounded-3xl p-6 sm:p-10 border shadow-2xl relative overflow-hidden transition-colors ${
            isDark
              ? "glass-card-gold-dark border-amber-500/30"
              : "glass-card-gold-light border-amber-400"
          }`}
        >
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="bg-amber-500/10 text-amber-500 text-xs font-extrabold tracking-wider uppercase px-3.5 py-1 rounded-full border border-amber-500/30 inline-block mb-3">
              Instant Download Checkout
            </span>
            <h2 className={`text-3xl sm:text-4xl font-black ${isDark ? "text-slate-100" : "text-slate-900"}`}>
              Get Your Copy Now
            </h2>
            <p className={isDark ? "text-slate-400 text-sm mt-2" : "text-slate-600 text-sm mt-2"}>
              Fill in your details below to proceed with the secure payment of ₹333.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Order Summary (Left) */}
            <div
              className={`lg:col-span-5 rounded-2xl p-6 border ${
                isDark
                  ? "bg-slate-950/80 border-slate-800"
                  : "bg-amber-50/90 border-amber-200"
              }`}
            >
              <h3
                className={`text-xs uppercase font-extrabold tracking-wider mb-4 pb-3 border-b flex items-center justify-between ${
                  isDark ? "text-slate-400 border-slate-800" : "text-slate-600 border-amber-200"
                }`}
              >
                <span>Order Summary</span>
                <span className="text-amber-500">1 Item</span>
              </h3>

              <div className="flex gap-4 items-center mb-6">
                <div className="relative w-16 h-20 rounded-lg overflow-hidden border border-amber-500/30 flex-shrink-0 bg-slate-900">
                  <Image src="/images/image.jpeg" alt="Kill the Cat" fill className="object-cover" />
                </div>
                <div>
                  <h4 className={`font-bold text-sm sm:text-base leading-snug ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                    Kill the Cat - E Book (Tamil &amp; English)
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">By Script Doctor Tamil</p>
                  <span className="inline-block text-[11px] font-mono font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 mt-1">
                    3.07 MB PDF
                  </span>
                </div>
              </div>

              <div
                className={`space-y-2 text-sm pt-4 border-t ${
                  isDark ? "border-slate-800 text-slate-300" : "border-amber-200 text-slate-700"
                }`}
              >
                <div className="flex justify-between">
                  <span className="text-slate-400">Subtotal</span>
                  <span>₹333.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Delivery</span>
                  <span className="text-emerald-500 font-medium">Instant Digital</span>
                </div>
                <div
                  className={`flex justify-between font-bold text-base pt-2 border-t ${
                    isDark ? "border-slate-800 text-slate-100" : "border-amber-200 text-slate-900"
                  }`}
                >
                  <span>Total Amount</span>
                  <span className="text-amber-500 text-xl font-black">₹333.00</span>
                </div>
              </div>

              {/* Delivery Guarantee Box */}
              <div className="mt-6 p-3.5 bg-amber-500/10 rounded-xl border border-amber-500/20 text-xs text-amber-600 dark:text-amber-300 flex items-start gap-2.5">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>After payment, the download link will open instantly &amp; be emailed to your address.</span>
              </div>
            </div>

            {/* Checkout Form (Right) */}
            <div
              className={`lg:col-span-7 rounded-2xl p-6 sm:p-8 border ${
                isDark
                  ? "bg-slate-900/90 border-slate-800"
                  : "bg-white border-amber-200 shadow-md"
              }`}
            >
              <form onSubmit={handleSubmitCheckout} className="space-y-5">
                
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    Email Address <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all ${
                      isDark
                        ? "bg-slate-950 border-slate-700 text-slate-100 placeholder-slate-500 focus:border-amber-500"
                        : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-amber-500"
                    }`}
                  />
                  <p className="text-[11px] text-slate-500 mt-1">E-Book PDF will be sent to this email address.</p>
                </div>

                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    Full Name <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all ${
                      isDark
                        ? "bg-slate-950 border-slate-700 text-slate-100 placeholder-slate-500 focus:border-amber-500"
                        : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-amber-500"
                    }`}
                  />
                </div>

                {/* Phone Number Field with +91 */}
                <div>
                  <label
                    htmlFor="phone"
                    className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    Phone Number <span className="text-amber-500">*</span>
                  </label>
                  <div className="flex">
                    <span
                      className={`inline-flex items-center px-4 border border-r-0 rounded-l-xl text-sm font-semibold ${
                        isDark ? "bg-slate-800 border-slate-700 text-slate-300" : "bg-slate-100 border-slate-300 text-slate-700"
                      }`}
                    >
                      +91
                    </span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      pattern="[0-9]{10}"
                      placeholder="9876543210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full border rounded-r-xl px-4 py-3 text-sm outline-none transition-all ${
                        isDark
                          ? "bg-slate-950 border-slate-700 text-slate-100 placeholder-slate-500 focus:border-amber-500"
                          : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-amber-500"
                      }`}
                    />
                  </div>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-base py-4 rounded-xl shadow-xl shadow-amber-500/25 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5 animate-spin text-slate-950" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing Secure Payment...
                    </span>
                  ) : (
                    <span>Make Payment • ₹333</span>
                  )}
                </button>

                {/* Payment Icons */}
                <div className={`pt-3 flex flex-wrap items-center justify-center gap-4 text-xs border-t ${isDark ? "border-slate-800 text-slate-500" : "border-slate-200 text-slate-500"}`}>
                  <span>Supported Payments:</span>
                  <span className={`font-semibold ${isDark ? "text-slate-300" : "text-slate-800"}`}>UPI (GPay, PhonePe, Paytm)</span>
                  <span>•</span>
                  <span className={`font-semibold ${isDark ? "text-slate-300" : "text-slate-800"}`}>Cards</span>
                  <span>•</span>
                  <span className={`font-semibold ${isDark ? "text-slate-300" : "text-slate-800"}`}>Net Banking</span>
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* AUTHOR & CREATOR SPOTLIGHT */}
      <section id="author" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
        <div
          className={`rounded-3xl p-8 sm:p-10 border relative overflow-hidden flex flex-col sm:flex-row items-center gap-8 ${
            isDark ? "glass-card-dark border-slate-800" : "glass-card-light border-amber-200"
          }`}
        >
          
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-amber-500/60 shadow-xl shadow-amber-500/20 flex-shrink-0 bg-slate-900">
            <Image src="/images/logo.png" alt="Script Doctor Tamil Logo" fill className="object-cover" />
          </div>

          <div className="text-center sm:text-left flex-1 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-wider">
              Official Creator Profile
            </div>
            <h3 className={`text-2xl sm:text-3xl font-extrabold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
              Script Doctor Tamil
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              Empowering independent Tamil screenwriters, short filmmakers, and Gen Z digital creators with structured storytelling frameworks, film script analysis, and modern screenplay mastery.
            </p>

            {/* Email Contact Button */}
            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <a
                href="mailto:ScriptDoctortamil@gmail.com"
                className={`inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl border transition-colors ${
                  isDark
                    ? "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"
                    : "bg-amber-100 hover:bg-amber-200 text-amber-900 border-amber-300"
                }`}
              >
                <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                ScriptDoctortamil@gmail.com
              </a>

              <button
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl border transition-colors cursor-pointer ${
                  isDark
                    ? "bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-amber-400 border-slate-800"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-amber-700 border-slate-300"
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {copiedEmail ? "Copied!" : "Copy Email"}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section id="faqs" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto border-t border-slate-800/40">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-xs uppercase tracking-widest text-amber-500 font-bold mb-2">Got Questions?</h2>
          <p className={`text-3xl font-extrabold tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
            Frequently Asked Questions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border overflow-hidden transition-all ${
                isDark
                  ? "bg-slate-900/80 border-slate-800"
                  : "bg-white border-amber-200 shadow-sm"
              }`}
            >
              <button
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className={`w-full p-5 text-left font-bold flex items-center justify-between gap-4 cursor-pointer hover:text-amber-500 ${
                  isDark ? "text-slate-100" : "text-slate-900"
                }`}
              >
                <span>{faq.q}</span>
                <span className="text-amber-500 text-xl font-black">
                  {activeFaq === index ? "−" : "+"}
                </span>
              </button>

              {activeFaq === index && (
                <div
                  className={`px-5 pb-5 text-sm leading-relaxed border-t pt-3 ${
                    isDark
                      ? "border-slate-800/60 text-slate-400"
                      : "border-amber-100 text-slate-600"
                  }`}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`py-12 px-4 sm:px-6 border-t text-xs ${
          isDark
            ? "border-slate-800 bg-slate-950 text-slate-400"
            : "border-amber-200 bg-amber-50 text-slate-600"
        }`}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-amber-500/40">
              <Image src="/images/logo.png" alt="Script Doctor Tamil" fill className="object-cover" />
            </div>
            <span className={`font-bold text-sm ${isDark ? "text-slate-200" : "text-slate-900"}`}>
              Script Doctor Tamil
            </span>
          </div>

          <p className="text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Script Doctor Tamil. Kill the Cat - E Book (Tamil &amp; English). All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="mailto:ScriptDoctortamil@gmail.com" className="hover:text-amber-500 transition-colors">
              Support: ScriptDoctortamil@gmail.com
            </a>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX PREVIEW MODAL FOR FEATURED IMAGE / BANNER */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md cursor-pointer animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-slate-900 border border-amber-500/50 rounded-3xl p-4 sm:p-6 max-w-5xl w-full text-center space-y-4 shadow-2xl overflow-hidden"
          >
            <div className={`relative w-full rounded-2xl overflow-hidden bg-slate-950 ${
              previewImage === "/images/banner.jpg" ? "aspect-[16/9]" : "aspect-[9/16] max-h-[75vh]"
            }`}>
              <Image
                src={previewImage}
                alt="Full Visual Preview"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex items-center justify-between text-xs sm:text-sm text-slate-300 px-2 font-bold">
              <span className="text-amber-400">
                {previewImage === "/images/banner.jpg" ? "🎬 Full Official Tamil Screenplay Banner (1200 x 675)" : "📖 Kill the Cat Official Cover"}
              </span>
              <span>High Resolution • 3.07 MB PDF</span>
            </div>
            <button
              onClick={() => setPreviewImage(null)}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black px-6 py-3 rounded-xl transition-colors cursor-pointer"
            >
              Close Full Preview
            </button>
          </div>
        </div>
      )}

      {/* SUCCESS PAYMENT SIMULATION MODAL */}
      {isPaymentSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-slate-900 border border-amber-500/40 rounded-3xl p-8 max-w-md w-full text-center space-y-5 shadow-2xl relative">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-100">Payment Successful!</h3>
              <p className="text-slate-300 text-sm mt-1">
                Thank you <strong className="text-amber-400">{formData.name}</strong>!
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-left text-xs space-y-1.5 text-slate-300">
              <p><strong className="text-slate-400">Order ID:</strong> #SDT-KILLCAT-{Math.floor(100000 + Math.random() * 900000)}</p>
              <p><strong className="text-slate-400">Sent To:</strong> {formData.email}</p>
              <p><strong className="text-slate-400">File:</strong> Kill the Cat E-Book (3.07 MB PDF)</p>
              <p><strong className="text-slate-400">Amount Paid:</strong> ₹333</p>
            </div>

            <a
              href="/images/image.jpeg"
              download="Kill_The_Cat_Ebook_ScriptDoctorTamil.jpeg"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold py-3.5 rounded-xl shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer hover:from-amber-400 hover:to-amber-500 transition-all inline-block"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF E-Book Now (3.07 MB)
            </a>

            <button
              onClick={() => setIsPaymentSuccess(false)}
              className="text-xs text-slate-400 hover:text-slate-200 underline cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

      {/* STICKY MOBILE BOTTOM BUY BAR */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-40 border-t p-3 backdrop-blur-xl flex items-center justify-between gap-3 shadow-2xl ${
          isDark
            ? "bg-slate-950/95 border-amber-500/30"
            : "bg-white/95 border-amber-300"
        }`}
      >
        <div>
          <span className="text-xs text-slate-400 block leading-tight">Kill the Cat E-Book</span>
          <span className="text-lg font-black text-amber-500">₹333</span>
        </div>
        <button
          onClick={scrollToCheckout}
          className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 cursor-pointer"
        >
          Buy Now ₹333
        </button>
      </div>

    </div>
  );
}
