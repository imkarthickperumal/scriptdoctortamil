"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const PAYMENT_URL = "https://superprofile.bio/vp/kill-the-cat--tamil---english-";

export default function Home() {
  const [language, setLanguage] = useState<"tamil" | "english">("tamil");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Video autoplay state & scroll observer refs for 3 videos
  const videoIframeRef1 = useRef<HTMLIFrameElement>(null); // Hero section video (P9T3a2-Onjc)
  const videoIframeRef2 = useRef<HTMLIFrameElement>(null); // Masterclass Video 1 (P9T3a2-Onjc)
  const videoIframeRef3 = useRef<HTMLIFrameElement>(null); // Masterclass Video 2 (bqgbZ_5QM2o)
  const heroVideoSectionRef = useRef<HTMLDivElement>(null);
  
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideo1Muted, setIsVideo1Muted] = useState(true);
  const [isVideo2Muted, setIsVideo2Muted] = useState(true);
  const [isVideo3Muted, setIsVideo3Muted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (videoIframeRef1.current?.contentWindow) {
              videoIframeRef1.current.contentWindow.postMessage(
                JSON.stringify({ event: "command", func: "playVideo", args: "" }),
                "*"
              );
            }
            if (videoIframeRef2.current?.contentWindow) {
              videoIframeRef2.current.contentWindow.postMessage(
                JSON.stringify({ event: "command", func: "playVideo", args: "" }),
                "*"
              );
            }
            if (videoIframeRef3.current?.contentWindow) {
              videoIframeRef3.current.contentWindow.postMessage(
                JSON.stringify({ event: "command", func: "playVideo", args: "" }),
                "*"
              );
            }
            setIsVideoPlaying(true);
          } else {
            if (videoIframeRef1.current?.contentWindow) {
              videoIframeRef1.current.contentWindow.postMessage(
                JSON.stringify({ event: "command", func: "pauseVideo", args: "" }),
                "*"
              );
            }
            if (videoIframeRef2.current?.contentWindow) {
              videoIframeRef2.current.contentWindow.postMessage(
                JSON.stringify({ event: "command", func: "pauseVideo", args: "" }),
                "*"
              );
            }
            if (videoIframeRef3.current?.contentWindow) {
              videoIframeRef3.current.contentWindow.postMessage(
                JSON.stringify({ event: "command", func: "pauseVideo", args: "" }),
                "*"
              );
            }
            setIsVideoPlaying(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (heroVideoSectionRef.current) {
      observer.observe(heroVideoSectionRef.current);
    }

    return () => {
      if (heroVideoSectionRef.current) {
        observer.unobserve(heroVideoSectionRef.current);
      }
    };
  }, []);

  const toggleVideo1Mute = () => {
    if (videoIframeRef1.current?.contentWindow) {
      const command = isVideo1Muted ? "unMute" : "mute";
      videoIframeRef1.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: command, args: "" }),
        "*"
      );
      setIsVideo1Muted(!isVideo1Muted);
    }
  };

  const toggleVideo2Mute = () => {
    if (videoIframeRef2.current?.contentWindow) {
      const command = isVideo2Muted ? "unMute" : "mute";
      videoIframeRef2.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: command, args: "" }),
        "*"
      );
      setIsVideo2Muted(!isVideo2Muted);
    }
  };

  const toggleVideo3Mute = () => {
    if (videoIframeRef3.current?.contentWindow) {
      const command = isVideo3Muted ? "unMute" : "mute";
      videoIframeRef3.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: command, args: "" }),
        "*"
      );
      setIsVideo3Muted(!isVideo3Muted);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ScriptDoctortamil@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Reusable Hero Video Component using P9T3a2-Onjc
  const HeroVideoCard = () => (
    <div className="relative w-full max-w-md lg:max-w-none mx-auto group h-full flex flex-col">
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-rose-400 to-amber-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-700 animate-pulse-glow" />
      
      <div className="relative rounded-2xl p-3 sm:p-4 border shadow-2xl overflow-hidden bg-white border-amber-300 shadow-amber-500/20 h-full flex flex-col justify-between">
        {/* Tamil Cinema Clapper Header */}
        <div className="bg-slate-950 text-amber-400 text-[11px] font-mono font-bold px-3 py-1.5 rounded-lg mb-2.5 flex items-center justify-between border border-amber-500/30 flex-shrink-0">
          <span className="flex items-center gap-1.5 truncate">
            <span>🎬</span> SCENE: 01 | TAKE: 1
          </span>
          <span className="text-slate-400 text-[10px]">SCRIPT DOCTOR TAMIL</span>
        </div>

        {/* Video Status & Sound Toggle Control Bar */}
        <div className="w-full mb-2.5 flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-amber-500/30 text-xs text-white flex-shrink-0">
          <span className="flex items-center gap-1.5 font-semibold text-amber-400 truncate text-[11px] sm:text-xs">
            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${isVideoPlaying ? "bg-emerald-500 animate-pulse" : "bg-slate-500"}`} />
            {isVideoPlaying ? "Autoplay Active" : "Paused"}
          </span>

          <button
            onClick={toggleVideo1Mute}
            className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold px-2.5 py-0.5 rounded-md border border-amber-500/40 transition-colors flex items-center gap-1 cursor-pointer text-[11px] sm:text-xs flex-shrink-0"
          >
            {isVideo1Muted ? "🔊 Sound On" : "🔇 Mute"}
          </button>
        </div>

        {/* YouTube Masterclass Video Player Frame (Stretches to fill full height equal to left column) */}
        <div className="relative flex-1 w-full min-h-[260px] sm:min-h-[300px] lg:min-h-[360px] rounded-xl overflow-hidden border-2 border-amber-500/60 shadow-2xl bg-black my-2">
          <iframe
            ref={videoIframeRef1}
            src="https://www.youtube.com/embed/P9T3a2-Onjc?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=P9T3a2-Onjc&rel=0&controls=1"
            title="Script Doctor Tamil YouTube Masterclass"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Book & Video Meta Bar */}
        <div className="mt-3 pt-2.5 border-t border-amber-100 flex items-center justify-between text-xs text-slate-600 flex-shrink-0">
          <span className="flex items-center gap-1 font-medium text-[11px] sm:text-xs">
            <svg className="w-3.5 h-3.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Tamil &amp; English Editions Included
          </span>
          <span className="font-mono font-bold px-2 py-0.5 rounded border bg-amber-100 text-amber-900 border-amber-200 text-[10px] sm:text-xs">
            3.07 MB PDF
          </span>
        </div>
      </div>
    </div>
  );

  // Reusable Price & Buy Action Bar Component
  const PriceActionBar = () => (
    <div className="w-full flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
      <div className="w-full sm:w-auto flex items-baseline justify-center sm:justify-start gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-2xl border bg-amber-50 border-amber-200 shadow-sm">
        <span className="text-2xl sm:text-4xl font-black text-amber-600">₹333</span>
        <span className="line-through text-sm sm:text-lg text-slate-400 font-bold">
          ₹500
        </span>
        <span className="bg-rose-500/20 text-rose-700 text-[11px] sm:text-xs font-black px-2 py-0.5 rounded-md border border-rose-500/30">
          SAVE ₹167
        </span>
      </div>

      <a
        href={PAYMENT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:flex-1 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-sm sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 sm:gap-3 cursor-pointer whitespace-nowrap"
      >
        <span>Get E-Book • ₹333</span>
        <span className="line-through text-slate-800/60 text-xs sm:text-sm font-semibold">₹500</span>
        <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );

  return (
    <div className="relative min-h-screen overflow-hidden font-sans bg-[#fffdfa] text-slate-900 transition-colors duration-500">
      
      {/* ANNOUNCEMENT TOP BAR */}
      <div className="bg-gradient-to-r from-amber-600 via-rose-600 to-amber-600 text-white text-xs font-bold py-2 px-4 text-center tracking-wide flex items-center justify-center gap-2 shadow-md relative z-50">
        <span className="bg-black/30 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
          🎬 Tamil Cinema Special Edition
        </span>
        <span>
          &ldquo;Kill the Cat / குடும்பங்கள் கொண்டாடும் Gen Z திரைக்கதை&rdquo; E-Book • Special Offer Today!
        </span>
        <a
          href={PAYMENT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs px-3.5 py-1 rounded-full shadow transition-all ml-2 cursor-pointer"
        >
          <span>Get E-Book • ₹333</span>
          <span className="line-through text-slate-800/60 text-[11px] font-semibold">₹500</span>
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      {/* Hero Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] blur-3xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/30 via-amber-200/20 to-transparent" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur-xl border-b border-amber-900/10 bg-[#fffdfa]/95 shadow-sm transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2">
          {/* Logo & Brand Name */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-amber-500/60 shadow-lg shadow-amber-500/20 bg-slate-900 flex-shrink-0">
              <Image
                src="/images/logo.jpeg"
                alt="Script Doctor Tamil Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="min-w-0">
              <span className="font-black tracking-tight text-sm sm:text-lg block leading-tight truncate text-amber-700">
                Script Doctor Tamil
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wider uppercase hidden sm:flex items-center gap-1 text-slate-600">
                <span>திரைக்கதை தமிழ்</span> • <span>Gen Z Cinema</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#overview" className="hover:text-amber-600 transition-colors">
              Overview
            </a>
            <a href="#banner-showcase" className="hover:text-amber-600 transition-colors">
              Screenplay Banner
            </a>
            <a href="#hero-video" className="hover:text-amber-600 transition-colors">
              Masterclass
            </a>
            <a href="#preview" className="hover:text-amber-600 transition-colors">
              Book Specs
            </a>
            <a href="#modules" className="hover:text-amber-600 transition-colors">
              What You&apos;ll Learn
            </a>
            <a href="#author" className="hover:text-amber-600 transition-colors">
              Creator &amp; Rights
            </a>
          </nav>

          {/* Header Action Button */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <a
              href={PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm shadow-lg shadow-amber-500/25 transition-all transform hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap flex-shrink-0"
            >
              <span>Get E-Book • ₹333</span>
              <span className="line-through text-slate-800/60 text-[11px] sm:text-xs font-semibold">₹500</span>
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION - DESKTOP & MOBILE OPTIMIZED ORDER */}
      <section id="overview" className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 max-w-6xl mx-auto z-10">
        
        {/* MOBILE VIEW SPECIFIC ORDER (Shows 1. Video -> 2. Price Button -> 3. Reduced Size Content) */}
        <div className="flex lg:hidden flex-col items-center gap-5">
          {/* 1. YOUTUBE MASTERCLASS VIDEO FIRST ON MOBILE */}
          <div className="w-full">
            <HeroVideoCard />
          </div>

          {/* 2. GET EBOOK PRICE BUTTON SECOND ON MOBILE */}
          <div className="w-full">
            <PriceActionBar />
          </div>

          {/* 3. KILL THE CAT EBOOK CONTENT (COMPACT REDUCED SIZE FOR MOBILE) */}
          <div className="w-full flex flex-col items-start gap-4 pt-2">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-semibold tracking-wide bg-amber-100 border-amber-300 text-amber-900 shadow-sm">
              <span className="text-xs">🎬</span>
              <span>SCENE 01 | TAKE 01 • Instant PDF (3.07 MB)</span>
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-tight leading-snug text-slate-900">
                Kill the Cat <br />
                <span className="text-amber-600 text-xl font-extrabold block">
                  E-Book (Tamil &amp; English)
                </span>
              </h1>
              <p className="mt-1 text-sm font-bold text-amber-800">
                &ldquo;குடும்பங்கள் கொண்டாடும் Gen Z திரைக்கதை&rdquo;
              </p>
            </div>

            {/* Compact Author Tag */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border bg-amber-50/90 border-amber-200 text-slate-700 text-xs">
              <div className="relative w-6 h-6 rounded-full overflow-hidden border border-amber-500/50 flex-shrink-0">
                <Image src="/images/logo.jpeg" alt="Script Doctor Tamil" fill className="object-cover" />
              </div>
              <span>By <strong className="text-amber-700 font-bold">Script Doctor Tamil</strong></span>
              <span className="bg-emerald-500/20 text-emerald-700 text-[9px] uppercase font-extrabold px-1.5 py-0.5 rounded border border-emerald-500/30">
                Verified Director
              </span>
            </div>

            {/* Compact Dual Language Switcher Box for Mobile */}
            <div className="w-full rounded-xl p-3.5 border bg-white border-amber-200 shadow-md">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200">
                <span className="text-[10px] uppercase font-extrabold tracking-wider text-slate-600 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  Language Switcher
                </span>
                
                <div className="flex p-0.5 rounded-lg border bg-slate-100 border-slate-200">
                  <button
                    onClick={() => setLanguage("tamil")}
                    className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                      language === "tamil"
                        ? "bg-amber-500 text-slate-950 shadow-sm"
                        : "text-slate-600"
                    }`}
                  >
                    தமிழ்
                  </button>
                  <button
                    onClick={() => setLanguage("english")}
                    className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                      language === "english"
                        ? "bg-amber-500 text-slate-950 shadow-sm"
                        : "text-slate-600"
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {language === "tamil" ? (
                <p className="text-xs leading-relaxed text-slate-700">
                  இந்த <span className="text-amber-700 font-semibold">&ldquo;Gen Z திரைக்கதை&rdquo;</span> E-book தமிழ் &amp; <strong className="text-amber-700">Kill the Cat</strong> English இரண்டிலும் கிடைக்கிறது. திரைப்பட கதை, குறும்படங்கள், YouTube &amp; Reels script எழுத முழுமையாக கற்றுக்கொள்ளலாம்.
                </p>
              ) : (
                <p className="text-xs leading-relaxed text-slate-700">
                  <span className="text-amber-700 font-semibold">&ldquo;Gen Z Thiraikathai&rdquo;</span> comes in Tamil &amp; <strong className="text-amber-700">&ldquo;Kill the Cat&rdquo;</strong> in English. Learn how to write stories, short films, YouTube scripts &amp; viral Reels.
                </p>
              )}
            </div>

            {/* Compact Trust Tags */}
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium text-slate-600 pt-1">
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                100% Secure Payment
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Instant Access
              </span>
            </div>

          </div>
        </div>

        {/* DESKTOP VIEW LAYOUT (PROPORTIONAL 2-COLUMN SIDE BY SIDE WITH EQUAL HEIGHT) */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-stretch">
          
          {/* Left Hero Text Column */}
          <div className="col-span-7 flex flex-col items-start gap-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-semibold tracking-wide backdrop-blur-md bg-amber-100 border-amber-300 text-amber-900 shadow-sm">
              <span className="text-base">🎬</span>
              <span>SCENE 01 | TAKE 01 • Instant Digital Download (3.07 MB PDF)</span>
            </div>

            <div>
              <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-slate-900">
                Kill the Cat <br />
                <span className="text-amber-600">
                  E-Book (Tamil &amp; English)
                </span>
              </h1>
              <p className="mt-3 text-lg font-bold text-amber-800">
                &ldquo;குடும்பங்கள் கொண்டாடும் Gen Z திரைக்கதை&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 rounded-2xl border bg-amber-50/90 border-amber-200 text-slate-700 shadow-sm">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-amber-500/50 flex-shrink-0">
                <Image src="/images/logo.jpeg" alt="Script Doctor Tamil" fill className="object-cover" />
              </div>
              <span className="text-sm font-medium">
                Created by <strong className="text-amber-600 font-bold">Script Doctor Tamil</strong>
              </span>
              <span className="bg-emerald-500/20 text-emerald-700 text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-md border border-emerald-500/30">
                Verified Director &amp; Screenwriter
              </span>
            </div>

            {/* Dual Language Switcher Box */}
            <div className="w-full rounded-2xl p-5 border shadow-xl bg-white/95 border-amber-200/90 shadow-amber-500/10 transition-colors">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                <span className="text-xs uppercase font-extrabold tracking-wider flex items-center gap-1.5 text-slate-600">
                  <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  Language Edition Switcher
                </span>
                
                <div className="flex p-1 rounded-lg border bg-slate-100 border-slate-200">
                  <button
                    onClick={() => setLanguage("tamil")}
                    className={`px-3.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                      language === "tamil"
                        ? "bg-amber-500 text-slate-950 shadow-md"
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
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {language === "tamil" ? (
                <p className="text-base leading-relaxed font-normal text-slate-800">
                  இந்த <span className="text-amber-600 font-semibold">&ldquo;குடும்பங்கள் கொண்டாடும் Gen Z திரைக்கதை&rdquo;</span> E-book தமிழ் மற்றும் <strong className="text-amber-600">Kill the Cat</strong> என்ற பெயரில் ஆங்கிலத்திலும் கிடைக்கிறது. இந்த வழிகாட்டி மூலம் உங்கள் திரைப்படத்திற்கு எவ்வாறு கதை மற்றும் திரைக்கதை அமைப்பது, குறும்படங்களுக்கு யோசனைகள் மற்றும் ஸ்கிரிப்ட் எழுதுவது, YouTube வீடியோக்கள் மற்றும் Reels வரை எவ்வாறு ஸ்கிரிப்ட் உருவாக்குவது என்பதை விரிவாகக் கற்றுக்கொள்ளலாம்.
                </p>
              ) : (
                <p className="text-base leading-relaxed font-normal text-slate-800">
                  <span className="text-amber-600 font-semibold">&ldquo;Kudumbangal Kondaadum Gen Z Thiraikathai&rdquo;</span> is available as an eBook in Tamil, and the English version is available under the title <strong className="text-amber-600">&ldquo;Kill the Cat.&rdquo;</strong> Through this guide, you’ll learn in detail how to develop stories and screenplays for your films, create ideas and write scripts for short films, and even script everything from random YouTube videos to engaging Reels.
                </p>
              )}
            </div>

            {/* Desktop Price & Buy Action Bar */}
            <PriceActionBar />

            {/* Trust Tags */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                100% Secure Payment
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Instant Download Access
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Mobile &amp; Tablet Ready
              </span>
            </div>

          </div>

          {/* Right Hero Column: YouTube Masterclass Video Card (P9T3a2-Onjc) */}
          <div className="col-span-5 flex flex-col items-center w-full h-full">
            <HeroVideoCard />
          </div>

        </div>
      </section>

      {/* DEDICATED KOLLYWOOD SCREENPLAY MARQUEE SECTION */}
      <section id="banner-showcase" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-amber-500/20 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-amber-600 font-extrabold block mb-1">
            🎬 Kollywood Screenplay Marquee
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Tamil Cinema Screenplay Banner
          </h2>
          <p className="text-sm sm:text-base mt-2 text-slate-600">
            Full official visual guides &amp; screenplay posters for &ldquo;Kill the Cat / குடும்பங்கள் கொண்டாடும் Gen Z திரைக்கதை&rdquo;.
          </p>
        </div>

        {/* 2 Equal-Height Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* FULL IMAGE 1 CARD */}
          <div className="rounded-3xl p-5 border shadow-xl flex flex-col justify-between transition-all film-strip-border-top h-full glass-card-gold-light border-amber-400 bg-white">
            <div
              onClick={() => setPreviewImage("/images/image1.jpeg")}
              className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-2xl cursor-pointer group bg-slate-950 flex-1"
            >
              <Image
                src="/images/image1.jpeg"
                alt="Script Doctor Tamil Screenplay Structure Guide"
                fill
                className="object-contain transform group-hover:scale-[1.02] transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center pointer-events-none">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-amber-500 text-slate-950 font-black text-xs px-4 py-2 rounded-full shadow-2xl flex items-center gap-1.5 transform group-hover:scale-105">
                  🔍 Click to Inspect Full Image
                </span>
              </div>
            </div>
            <div className="w-full mt-4 pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs font-bold text-amber-700 flex-shrink-0">
              <span>Visual Guide 01 • Screenplay Structure</span>
              <span className="text-slate-500 font-mono">100% Equal Height</span>
            </div>
          </div>

          {/* FULL IMAGE 2 CARD */}
          <div className="rounded-3xl p-5 border shadow-xl flex flex-col justify-between transition-all film-strip-border-top h-full glass-card-gold-light border-amber-400 bg-white">
            <div
              onClick={() => setPreviewImage("/images/image2.jpeg")}
              className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-2xl cursor-pointer group bg-slate-950 flex-1"
            >
              <Image
                src="/images/image2.jpeg"
                alt="Script Doctor Tamil Gen Z Storytelling Guide"
                fill
                className="object-contain transform group-hover:scale-[1.02] transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center pointer-events-none">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-amber-500 text-slate-950 font-black text-xs px-4 py-2 rounded-full shadow-2xl flex items-center gap-1.5 transform group-hover:scale-105">
                  🔍 Click to Inspect Full Image
                </span>
              </div>
            </div>
            <div className="w-full mt-4 pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs font-bold text-amber-700 flex-shrink-0">
              <span>Visual Guide 02 • Gen Z Cinema Storytelling</span>
              <span className="text-slate-500 font-mono">100% Equal Height</span>
            </div>
          </div>

        </div>
      </section>

      {/* OFFICIAL YOUTUBE MASTERCLASS SECTION (TWO EQUAL SIZE VIDEO COLUMNS) */}
      <section
        id="hero-video"
        ref={heroVideoSectionRef}
        className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-200 relative z-10 space-y-8"
      >
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 text-rose-600 border border-rose-500/30 text-xs font-bold uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            Official YouTube Masterclasses
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Script Doctor Tamil Masterclass Series
          </h2>
          <p className="text-sm sm:text-base mt-2 text-slate-600">
            Explore our comprehensive video tutorials on screenplay architecture &amp; Gen Z storytelling techniques.
          </p>
        </div>

        {/* TWO EQUAL SIZE VIDEO COLUMNS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* VIDEO 1 CARD (P9T3a2-Onjc) */}
          <div className="rounded-3xl p-5 sm:p-6 border shadow-xl flex flex-col justify-between transition-colors glass-card-gold-light border-amber-300 bg-white h-full">
            <div>
              <div className="w-full mb-3 flex items-center justify-between gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 text-white border border-amber-500/30 text-xs">
                <span className="flex items-center gap-1.5 font-semibold text-amber-400 truncate text-xs">
                  <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${isVideoPlaying ? "bg-emerald-500 animate-pulse" : "bg-slate-500"}`} />
                  {isVideoPlaying ? "Autoplay Active" : "Paused"}
                </span>

                <button
                  onClick={toggleVideo2Mute}
                  className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold px-2.5 py-0.5 rounded-md border border-amber-500/40 transition-colors flex items-center gap-1 cursor-pointer text-xs flex-shrink-0"
                >
                  {isVideo2Muted ? "🔊 Sound On" : "🔇 Mute"}
                </button>
              </div>

              <h3 className="text-base sm:text-lg font-bold mb-2.5 text-slate-900 flex items-center gap-2">
                <span>🎬</span> Masterclass 01 • Story &amp; Screenplay Architecture
              </h3>

              {/* YouTube Video 1 Frame (16:9 Aspect Widescreen) */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border-2 border-amber-500/60 shadow-xl bg-black my-2">
                <iframe
                  ref={videoIframeRef2}
                  src="https://www.youtube.com/embed/P9T3a2-Onjc?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=P9T3a2-Onjc&rel=0&controls=1"
                  title="Script Doctor Tamil Screenplay Architecture Masterclass"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center">
              <span className="text-xs text-slate-500 font-medium">Full Masterclass</span>
              <a
                href={PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black px-4 py-2 rounded-full text-xs shadow-md shadow-amber-500/25 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Get E-Book • ₹333</span>
                <span className="line-through text-slate-800/60 text-xs font-semibold">₹500</span>
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* VIDEO 2 CARD (bqgbZ_5QM2o) */}
          <div className="rounded-3xl p-5 sm:p-6 border shadow-xl flex flex-col justify-between transition-colors glass-card-gold-light border-amber-300 bg-white h-full">
            <div>
              <div className="w-full mb-3 flex items-center justify-between gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 text-white border border-amber-500/30 text-xs">
                <span className="flex items-center gap-1.5 font-semibold text-amber-400 truncate text-xs">
                  <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${isVideoPlaying ? "bg-emerald-500 animate-pulse" : "bg-slate-500"}`} />
                  {isVideoPlaying ? "Autoplay Active" : "Paused"}
                </span>

                <button
                  onClick={toggleVideo3Mute}
                  className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold px-2.5 py-0.5 rounded-md border border-amber-500/40 transition-colors flex items-center gap-1 cursor-pointer text-xs flex-shrink-0"
                >
                  {isVideo3Muted ? "🔊 Sound On" : "🔇 Mute"}
                </button>
              </div>

              <h3 className="text-base sm:text-lg font-bold mb-2.5 text-slate-900 flex items-center gap-2">
                <span>🎬</span> Masterclass 02 • Gen Z Shorts &amp; Reels Scripting
              </h3>

              {/* YouTube Video 2 Frame (16:9 Aspect Widescreen) */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border-2 border-amber-500/60 shadow-xl bg-black my-2">
                <iframe
                  ref={videoIframeRef3}
                  src="https://www.youtube.com/embed/bqgbZ_5QM2o?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=bqgbZ_5QM2o&rel=0&controls=1"
                  title="Script Doctor Tamil Gen Z Shorts & Reels Scripting Masterclass"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center">
              <span className="text-xs text-slate-500 font-medium">Shorts Tutorial</span>
              <a
                href={PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black px-4 py-2 rounded-full text-xs shadow-md shadow-amber-500/25 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Get E-Book • ₹333</span>
                <span className="line-through text-slate-800/60 text-xs font-semibold">₹500</span>
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ADDITIONAL BOOK VISUAL & SPECS PREVIEW SECTION */}
      <section id="preview" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-200">
        <div className="rounded-3xl p-8 sm:p-12 lg:p-14 border relative overflow-hidden transition-colors glass-card-light border-amber-200 bg-white shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 flex justify-center">
              <div
                onClick={() => setPreviewImage("/images/image.jpeg")}
                className="relative w-full max-w-md aspect-[9/13] rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl cursor-pointer group bg-slate-950"
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
              <span className="text-xs uppercase font-extrabold tracking-widest text-amber-600 block">
                Exclusive Screenplay Blueprint
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Inside &ldquo;Kill the Cat&rdquo; (Tamil &amp; English)
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Designed specifically for Gen Z filmmakers and content creators, this guide breaks down the secret structural blueprints used by top screenwriters. You won&apos;t just read theory — you will gain instant, actionable templates to write stories that hook audiences instantly.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border bg-white/80 border-amber-200 text-slate-800 shadow-sm">
                  <div className="text-amber-600 font-bold text-lg">Dual Edition</div>
                  <div className="text-xs text-slate-500">Tamil &amp; English PDF</div>
                </div>

                <div className="p-4 rounded-xl border bg-white/80 border-amber-200 text-slate-800 shadow-sm">
                  <div className="text-amber-600 font-bold text-lg">3.07 MB File</div>
                  <div className="text-xs text-slate-500">High Resolution PDF</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={PAYMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-xl shadow-amber-500/25 transition-all transform hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center gap-2.5"
                >
                  <span>Get E-Book • ₹333</span>
                  <span className="line-through text-slate-800/60 text-xs font-semibold">₹500</span>
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN / FEATURES GRID */}
      <section id="modules" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-amber-600 font-bold mb-2">
            Master Modern Screenwriting
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            What You Will Learn Inside This Guide
          </p>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            A comprehensive, practical manual designed for creators, short filmmakers, and cinema visionaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Module 1 */}
          <div className="rounded-2xl p-6 border transition-all group glass-card-light hover:border-amber-500 bg-white">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 mb-5 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h18M3 16h18" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">
              Feature Film Screenplays (திரைக்கதை)
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Understand how to craft solid story arcs, high-stake character motivations, and compelling screenplay structures for full-length feature films.
            </p>
          </div>

          {/* Module 2 */}
          <div className="rounded-2xl p-6 border transition-all group glass-card-light hover:border-amber-500 bg-white">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 mb-5 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">
              Short Film Concepting (குறும்படம்)
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Transform raw ideas into captivating short film scripts. Learn pacing, character hooks, and twist endings that win film festivals and audiences.
            </p>
          </div>

          {/* Module 3 */}
          <div className="rounded-2xl p-6 border transition-all group glass-card-light hover:border-amber-500 bg-white">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 mb-5 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">
              YouTube Video Scripting
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              From random video concepts to high-retention YouTube scripts. Master narrative hooks, audience retention tricks, and structured video breakdowns.
            </p>
          </div>

          {/* Module 4 */}
          <div className="rounded-2xl p-6 border transition-all group glass-card-light hover:border-amber-500 bg-white">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 mb-5 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">
              Instagram Reels &amp; Gen Z Shorts
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Script micro-content that grabs modern Gen Z attention in 3 seconds. Learn hook scripting, visual storytelling, and viral reel framing.
            </p>
          </div>

          {/* Module 5 */}
          <div className="rounded-2xl p-6 border transition-all group glass-card-light hover:border-amber-500 bg-white">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 mb-5 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">
              Dual Language Edition (தமிழ் &amp; Eng)
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Switch effortlessly between Tamil (&ldquo;Kudumbangal Kondaadum Gen Z Thiraikathai&rdquo;) and English (&ldquo;Kill the Cat&rdquo;) within the same package.
            </p>
          </div>

          {/* Module 6 */}
          <div className="rounded-2xl p-6 border transition-all group glass-card-light hover:border-amber-500 bg-white">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 mb-5 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">
              Instant PDF Access (3.07 MB)
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Get immediate, lifetime download access to the 3.07 MB PDF file right after checkout. Ready to read anywhere on phone or laptop.
            </p>
          </div>

        </div>
      </section>

      {/* CHECKOUT SECTION */}
      <section id="checkout-section" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
        <div className="rounded-3xl p-6 sm:p-10 lg:p-12 border shadow-2xl relative overflow-hidden transition-colors glass-card-gold-light border-amber-400 bg-white">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="bg-amber-500/10 text-amber-700 text-xs font-extrabold tracking-wider uppercase px-3.5 py-1 rounded-full border border-amber-500/30 inline-block mb-3">
              Instant Download Checkout
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Get Your Copy Now
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Click the button below to complete the secure payment of ₹333 and download your E-Book instantly.
            </p>
          </div>

          {/* Centered Order Summary & Payment Card with Increased Width */}
          <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 border bg-amber-50/90 border-amber-200 shadow-xl space-y-8">
            <h3 className="text-xs uppercase font-extrabold tracking-wider pb-3 border-b border-amber-200 flex items-center justify-between text-slate-700">
              <span className="flex items-center gap-2">
                <span>📋</span> Order Summary &amp; Checkout Details
              </span>
              <span className="text-amber-700 font-mono font-bold bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                1 Item Selected
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              {/* Left Column: Product Thumbnail & Guarantee */}
              <div className="md:col-span-6 flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <div className="relative w-20 h-26 rounded-xl overflow-hidden border-2 border-amber-500/40 flex-shrink-0 bg-slate-900 shadow-md">
                    <Image src="/images/image.jpeg" alt="Kill the Cat" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base sm:text-lg leading-snug text-slate-900">
                      Kill the Cat - E Book
                    </h4>
                    <p className="text-xs text-amber-800 font-semibold mt-0.5">
                      &ldquo;குடும்பங்கள் கொண்டாடும் Gen Z திரைக்கதை&rdquo;
                    </p>
                    <p className="text-xs text-slate-500 mt-1">By Script Doctor Tamil</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[11px] font-mono font-bold text-amber-700 bg-amber-500/15 px-2.5 py-0.5 rounded-md border border-amber-500/20">
                        3.07 MB PDF
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                        Tamil &amp; English
                      </span>
                    </div>
                  </div>
                </div>

                {/* Delivery Guarantee Box */}
                <div className="p-3.5 bg-amber-500/10 rounded-xl border border-amber-500/20 text-xs text-amber-800 flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Immediate access: Download link opens instantly upon payment &amp; lifetime access is guaranteed.</span>
                </div>
              </div>

              {/* Right Column: Pricing Breakdown & Payment Button */}
              <div className="md:col-span-6 flex flex-col gap-4 md:border-l md:border-amber-200 md:pl-8">
                <div className="space-y-2 text-sm text-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Original Price</span>
                    <span className="line-through text-slate-400 font-semibold">₹500.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Special Offer Price</span>
                    <span className="text-slate-900 font-bold">₹333.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Delivery Format</span>
                    <span className="text-emerald-600 font-bold">Instant Digital Access</span>
                  </div>
                  <div className="flex justify-between font-bold text-base pt-2.5 border-t border-amber-200 text-slate-900">
                    <span>Total Amount</span>
                    <div className="text-right">
                      <span className="text-amber-600 text-2xl font-black block leading-none">₹333.00</span>
                      <span className="text-[10px] text-emerald-600 font-extrabold uppercase">Save ₹167 Today</span>
                    </div>
                  </div>
                </div>

                {/* MAKE PAYMENT BUTTON */}
                <a
                  href={PAYMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-base sm:text-lg py-4 px-6 rounded-2xl shadow-xl shadow-amber-500/30 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer"
                >
                  <span className="flex items-center gap-2.5 sm:gap-3">
                    <span>Get E-Book • ₹333</span>
                    <span className="line-through text-slate-800/60 text-xs sm:text-sm font-semibold">₹500</span>
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </a>
              </div>

            </div>

            {/* Supported Payments & Security Badges */}
            <div className="pt-4 border-t border-amber-200/80 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <div className="flex flex-wrap items-center justify-center gap-2 font-semibold text-slate-700 text-[11px] sm:text-xs">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  UPI (GPay, PhonePe, Paytm)
                </span>
                <span>•</span>
                <span>Debit / Credit Cards</span>
                <span>•</span>
                <span>Net Banking</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>256-Bit SSL Encryption • 100% Verified</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* AUTHOR & CREATOR SPOTLIGHT */}
      <section id="author" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-200">
        <div className="rounded-3xl p-8 sm:p-12 border relative overflow-hidden flex flex-col lg:flex-row items-center gap-8 lg:gap-12 glass-card-light border-amber-200 bg-white shadow-lg">
          
          {/* Logo / Profile Image */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-amber-500/60 shadow-xl shadow-amber-500/20 flex-shrink-0 bg-slate-900">
            <Image src="/images/logo.jpeg" alt="Script Doctor Tamil Logo" fill className="object-cover" />
          </div>

          <div className="text-center lg:text-left flex-1 space-y-4">
            
            {/* Header pill & Language Switcher for Author */}
            <div className="flex flex-wrap items-center justify-center lg:justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-700 text-xs font-bold uppercase tracking-wider border border-amber-500/20">
                Official Creator &amp; Author Rights Profile
              </div>

              {/* Tamil & English Switcher inside Author Section */}
              <div className="flex p-1 rounded-lg border bg-slate-100 border-slate-200">
                <button
                  onClick={() => setLanguage("tamil")}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                    language === "tamil"
                      ? "bg-amber-500 text-slate-950 shadow-md"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  தமிழ் (Tamil)
                </button>
                <button
                  onClick={() => setLanguage("english")}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                    language === "english"
                      ? "bg-amber-500 text-slate-950 shadow-md"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Script Doctor Tamil
              </h3>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wide">
                Director, Screenwriter &amp; Cinema Educator
              </span>
            </div>

            {/* Bilingual Author Content */}
            {language === "tamil" ? (
              <div className="space-y-2 text-sm leading-relaxed text-slate-700">
                <p>
                  திரைக்கதை ஆசிரியர் மற்றும் இயக்குநர். தமிழ் திரையுலகில் வளரும் புதிய திரைக்கதை எழுத்தாளர்கள், குறும்பட இயக்குநர்கள் மற்றும் Gen Z டிஜிட்டல் படைப்பாளிகளுக்கு தொழில்முறை திரைக்கதை நுட்பங்கள், கதை அமைப்பு முறைகள் மற்றும் Gen Z சினிமா உத்திகளை கற்றுக்கொடுக்கிறது <strong className="text-amber-700">Script Doctor Tamil</strong>.
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  &copy; அனைத்து பதிப்புரிமைகளும் Script Doctor Tamil அமைப்பிற்கு உட்பட்டவை. இந்த &ldquo;Kill the Cat / குடும்பங்கள் கொண்டாடும் Gen Z திரைக்கதை&rdquo; டிஜிட்டல் புத்தகத்தின் உள்ளடக்கங்கள் மற்றும் திரைக்கதை வழிகாட்டிகள் முறையாக பதிவு செய்யப்பட்டுள்ளன.
                </p>
              </div>
            ) : (
              <div className="space-y-2 text-sm leading-relaxed text-slate-700">
                <p>
                  Director &amp; Screenwriter. Dedicated to empowering independent Tamil screenwriters, short filmmakers, and Gen Z digital creators with structured storytelling frameworks, screenplay architecture, and modern cinema techniques. Master feature film screenwriting, short film scripting, YouTube story retention, and Instagram reel hooks with the <strong className="text-amber-700">&ldquo;Kill the Cat&rdquo;</strong> digital guide.
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  &copy; All rights reserved by Script Doctor Tamil. The contents, templates, and screenplay blueprints inside &ldquo;Kill the Cat / Kudumbangal Kondaadum Gen Z Thiraikathai&rdquo; are protected digital publications.
                </p>
              </div>
            )}

            {/* Social links & Email Contact Button */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {/* Instagram link */}
              <a
                href="https://www.instagram.com/scriptdoctor.tamil/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl text-white bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 shadow-md transition-all transform hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>

              {/* YouTube link */}
              <a
                href="https://www.youtube.com/@scriptdoctortamil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl text-white bg-red-600 hover:bg-red-700 shadow-md transition-all transform hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>YouTube</span>
              </a>

              <a
                href="mailto:ScriptDoctortamil@gmail.com"
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl border bg-amber-100 hover:bg-amber-200 text-amber-900 border-amber-300 transition-colors"
              >
                <svg className="w-4 h-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                ScriptDoctortamil@gmail.com
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl border bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-amber-800 border-slate-300 transition-colors cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 002-2v-6a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {copiedEmail ? "Copied!" : "Copy Email"}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 sm:px-6 border-t border-amber-200 bg-amber-50 text-slate-600 text-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-amber-500/40">
              <Image src="/images/logo.jpeg" alt="Script Doctor Tamil" fill className="object-cover" />
            </div>
            <span className="font-bold text-sm text-slate-900">
              Script Doctor Tamil
            </span>
          </div>

          <p className="text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Script Doctor Tamil. Kill the Cat - E Book (Tamil &amp; English). All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">
            <a
              href="https://www.instagram.com/scriptdoctor.tamil/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold hover:opacity-90 transition-opacity"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>

            <a
              href="https://www.youtube.com/@scriptdoctortamil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>YouTube</span>
            </a>

            <a href="mailto:ScriptDoctortamil@gmail.com" className="hover:text-amber-600 transition-colors">
              Support: ScriptDoctortamil@gmail.com
            </a>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX PREVIEW MODAL FOR FEATURED IMAGE / BANNER */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-pointer animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white border border-amber-500/50 rounded-3xl p-4 sm:p-6 max-w-5xl w-full text-center space-y-4 shadow-2xl overflow-hidden"
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
            <div className="flex items-center justify-between text-xs sm:text-sm text-slate-700 px-2 font-bold">
              <span className="text-amber-700">
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

      {/* STICKY MOBILE BOTTOM BUY BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t p-3 backdrop-blur-xl flex items-center justify-between gap-3 shadow-2xl bg-white/95 border-amber-300">
        <div>
          <span className="text-xs text-slate-500 block leading-tight">Kill the Cat E-Book</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-black text-amber-600">₹333</span>
            <span className="line-through text-xs text-slate-400 font-semibold">₹500</span>
          </div>
        </div>
        <a
          href={PAYMENT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs sm:text-sm px-3.5 py-2.5 rounded-xl shadow-lg shadow-amber-500/25 transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap"
        >
          <span>Get E-Book • ₹333</span>
          <span className="line-through text-slate-800/60 text-[11px] sm:text-xs font-semibold">₹500</span>
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

    </div>
  );
}
