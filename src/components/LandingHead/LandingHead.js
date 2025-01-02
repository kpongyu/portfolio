import React, { Component, useEffect, useRef } from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import '../../css/style.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class LandingHead extends Component {
    componentDidMount() {
        console.log('Component mounted');
         this.initTypewriter();
        
        if (!window.gsap) {
            console.error('GSAP not loaded!');
            return;
        }
        console.log('GSAP loaded successfully');

        setTimeout(() => {
            try {
                const tl = window.gsap.timeline({
                    defaults: { 
                        duration: 0.8,
                        ease: "power3.out"
                    },
                    delay: 1
                });

                // Set different initial positions
                window.gsap.set(".gallery-grid .wide, .gallery-grid .tall", {
                    y: -200,  // Move these up
                    opacity: 0,
                    immediateRender: true
                });
                
                window.gsap.set(".gallery-grid .square, .gallery-grid .vertical, .gallery-grid .horizontal", {
                    y: 200,   // These still come from below
                    opacity: 0,
                    immediateRender: true
                });

                // Animate items with their new directions
                tl.to(".gallery-grid .wide", {
                    y: 0,
                    opacity: 1,
                    duration: 1
                })
                .to(".gallery-grid .tall", {
                    y: 0,
                    opacity: 1,
                    duration: 1
                }, "-=0.6")
                .to(".gallery-grid .square", {
                    y: 0,
                    opacity: 1,
                    duration: 1
                }, "-=0.6")
                .to(".gallery-grid .vertical", {
                    y: 0,
                    opacity: 1,
                    duration: 1
                }, "-=0.6")
                .to(".gallery-grid .horizontal", {
                    y: 0,
                    opacity: 1,
                    duration: 1
                }, "-=0.6");

                console.log('Animation timeline created');
            } catch (error) {
                console.error('Error setting up animations:', error);
            }
        }, 500);

        // Add hover animations
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                window.gsap.to(item.querySelector('.gallery-image'), {
                    scale: 1.05,
                    duration: 0.3
                });
                window.gsap.to(item.querySelector('.gallery-text'), {
                    opacity: 1,
                    y: 0,
                    duration: 0.3
                });
            });

            item.addEventListener('mouseleave', () => {
                window.gsap.to(item.querySelector('.gallery-image'), {
                    scale: 1,
                    duration: 0.3
                });
                window.gsap.to(item.querySelector('.gallery-text'), {
                    opacity: 0,
                    y: 20,
                    duration: 0.3
                });
            });
        });
    }

    initTypewriter() {
        const words = ['Strategic', 'Innovative', 'Impactful'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingSpeed = 150;
        const deletingSpeed = 100;
        const pauseEnd = 2000;

        const type = () => {
            const current = words[wordIndex];
            const typingElement = document.querySelector('.typing-text');
            
            if (!typingElement) return;

            if (isDeleting) {
                typingElement.textContent = current.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = current.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === current.length) {
                // Pause at end of word
                isDeleting = true;
                setTimeout(type, pauseEnd);
                return;
            }

            if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500); // Pause before next word
                return;
            }

            setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        };

        type();
    }

    render() {
        return (
            <div>
                <div className="hero-grid">
                    <div className="hero-content">
                        <div className="d-flex flex-column">
                        <h1 className="hero-title" style={{
                            fontSize: window.innerWidth <= 768 ? "2rem" : "3rem",
                            textAlign: "left",
                            maxWidth: "50vw",
                            marginTop: window.innerWidth <= 768 ? "5vh" : "0"
                        }}>
                        <div style={{color: "#ff6868", fontFamily: "Merriweather", fontSize: window.innerWidth <= 768 ? "3rem" : "4rem", marginBottom: "2rem"}}>
                            Kaipeng Yu</div>
                         Designing Solutions<br/> that are <span className="typing-text">Strategic</span></h1>
                       
                        <Link to="/projects" className="cta-button" style={{
                            maxWidth: "300px",
                            display: "inline-block",
                            padding: "1rem 2rem",
                            marginLeft: window.innerWidth <= 768 ? "0rem" : "3rem",
                            marginTop: "2rem",
                            background: "linear-gradient(45deg, #2196F3, #ECE493)",
                            color: "black",
                            fontSize: "1.2rem",
                            textDecoration: "none",
                            borderRadius: "30px",
                            boxShadow: "0 4px 15px rgba(33, 150, 243, 0.3)",
                            transition: "all 0.3s ease",
                            textAlign: "center",
                            fontWeight: "600",
                            position: "relative",
                            overflow: "hidden",
                        }}>
                            View My Work
                        </Link>
                        </div>
                    </div>
                    <div className="hero-gallery">
                        <div className="gallery-grid">
                            <div className="gallery-item wide">
                                <Link to="/NYCA">
                                    <div className="gallery-image" 
                                        style={{
                                            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/NYCA/NYCA-hero.webp)`,
                                        }}
                                    />
                                    <div className="gallery-text">
                                        <h2>NYCA</h2>
                                    </div>
                                </Link>
                            </div>
                            <div className="gallery-item tall">
                                <Link to="/coswd">
                                    <div className="gallery-image" 
                                        style={{
                                            backgroundImage:  `url(${process.env.PUBLIC_URL}/assets/img/coswd/coswd-home.webp)`,
                                        }}
                                    />
                                    <div className="gallery-text">
                                        <h2>COSWD</h2>
                                    </div>
                                </Link>
                            </div>
                            <div className="gallery-item square">
                                <Link to="/ncbi-virus">
                                    <div className="gallery-image" 
                                        style={{
                                            backgroundImage:  `url(${process.env.PUBLIC_URL}/assets/img/ncbi-virus/ncbi-home.webp)`,
                                        }}
                                    />
                                    <div className="gallery-text">
                                        <h2>NCBI Virus</h2>
                                    </div>
                                </Link>
                            </div>
                            <div className="gallery-item vertical">
                                <Link to="/amazon">
                                    <video 
                                        className="gallery-video"
                                        autoPlay
                                        muted
                                        playsInline
                                        onEnded={(e) => {
                                            setTimeout(() => {
                                                e.target.play();
                                            }, 60000);
                                        }}
                                    >
                                        <source src={`${process.env.PUBLIC_URL}/assets/img/amazon/amazon-home.mp4`} type="video/mp4" />
                                    </video>
                                    <div className="gallery-text">
                                        <h2>Amazon</h2>
                                    </div>
                                </Link>
                            </div>
                            <div className="gallery-item horizontal">
                                <Link to="/socalren">
                                    <div className="gallery-image" 
                                        style={{
                                            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/socalren/socalren-home.webp)`,
                                        }}
                                    />
                                    <div className="gallery-text">
                                        <h2>SocalREN</h2>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                    <style>{`
                         .hero-grid {
                              position: relative;
                              display: grid;
                              grid-template-columns: 1fr 1fr;
                              gap: 2rem;
                              padding: 4rem 2rem;
                              max-width: 100vw;
                              margin: 0 auto;
                              margin-bottom: 100px;
                              position: relative;
                              z-index: 10;
                              background-color: #000000;
                              background-image: 
                                   linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
                              background-size: 100px 1px;
                              background-position: center center;
                              overflow: visible;
                         }

                         .hero-grid::before {
                              content: '';
                              position: absolute;
                              bottom: -100px;
                              left: 0;
                              width: 100%;
                              height: 100px;
                              background: #000000;
                              clip-path: polygon(0 0, 100% 0, 50% 100%);
                              background-image: 
                                   linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
                              background-size: 100px 1px;
                              background-position: center center;
                              z-index: 1;
                         }

                         .hero-grid::after {
                              content: '';
                              position: absolute;
                              top: -50%;
                              left: -50%;
                              right: -50%;
                              bottom: -50%;
                              background: 
                                   radial-gradient(circle at 50% 50%, 
                                        rgba(134, 208, 200, 0.02) 0%, 
                                        transparent 50%);
                              animation: slowRotate 30s linear infinite;
                              pointer-events: none;
                         }

                         @keyframes slowRotate {
                              from {
                                   transform: rotate(0deg);
                              }
                              to {
                                   transform: rotate(360deg);
                              }
                         }

                         .hero-content {
                              display: flex;
                              flex-direction: column;
                              justify-content: center;
                              align-items:center;
                         }

                         .hero-title {
                              font-size: 4rem;
                              margin-bottom: 1rem;
                              margin-left: 3rem;
                              opacity: 0;
                              transform: translateY(20px);
                              animation: fadeInUp 0.6s ease forwards;
                              color: #ffffff;
                         }

                         .hero-subtitle {
                              font-size: 1.5rem;
                              margin-bottom: 2rem;
                              opacity: 0;
                              transform: translateY(20px);
                              animation: fadeInUp 0.6s ease forwards 0.2s;
                              color: #9CA3AF;
                         }

                         .cta-button {
                              display: inline-block;
                              padding: 1rem 2rem;
                              background: #86D0C8;
                              color: #111827;
                              border-radius: 30px;
                              text-decoration: none;
                              font-weight: bold;
                              opacity: 0;
                              transform: translateY(20px);
                              animation: fadeInUp 0.6s ease forwards 0.4s;
                              transition: all 0.3s ease;
                         }

                         .cta-button:hover {
                              transform: translateY(-2px) !important;
                              box-shadow: 0 8px 25px rgba(33, 150, 243, 0.6) !important;
                              background: linear-gradient(45deg, #ECE493, #2196F3) !important;
                              font-size: 1.1em !important;
                         }

                         .gallery-grid {
                              position: relative;
                              display: grid;
                              grid-template-columns: repeat(12, 1fr);
                              grid-template-rows: repeat(12, 1fr);
                              gap: 1rem;
                              height: 100vh;
                              max-height: 800px;
                         }

                         .gallery-item {
                              position: relative;
                              overflow: hidden;
                              border-radius: 12px;
                              height: 100%;
                              will-change: transform, opacity;
                         }

                         .wide {
                              grid-column: 1 / span 8;
                              grid-row: 1 / span 6;
                         }

                         .tall {
                              grid-column: 9 / span 4;
                              grid-row: 1 / span 8;
                         }

                         .square {
                              grid-column: 1 / span 5;
                              grid-row: 7 / span 6;
                         }

                         .vertical {
                              grid-column: 6 / span 3;
                              grid-row: 7 / span 6;
                         }

                         .horizontal {
                              grid-column: 9 / span 4;
                              grid-row: 9 / span 4;
                         }

                         .gallery-image {
                              width: 100%;
                              height: 100%;
                              background-size: cover;
                              background-position: center;
                              transition: transform 0.5s ease;
                              position: absolute;
                              top: 0;
                              left: 0;
                         }

                         .gallery-item:hover .gallery-image {
                              transform: scale(1.05);
                         }

                         .gallery-text {
                              position: absolute;
                              bottom: 0;
                              left: 0;
                              right: 0;
                              padding: 2rem;
                              background: linear-gradient(transparent, rgba(0,0,0,0.9));
                              color: white;
                              opacity: 0;
                              transform: translateY(20px);
                              transition: all 0.3s ease;
                         }

                         .gallery-item:hover .gallery-text {
                              opacity: 1;
                              transform: translateY(0);
                         }

                         .gallery-text h2 {
                              font-size: 1.5rem;
                              margin: 0;
                              font-weight: 600;
                         }

                         @keyframes fadeInUp {
                              to {
                                   opacity: 1;
                                   transform: translateY(0);
                              }
                         }

                         @keyframes scaleIn {
                              to {
                                   opacity: 1;
                                   transform: scale(1);
                              }
                         }

                         @media (max-width: 991px) {
                              .hero-grid {
                                   grid-template-columns: 1fr;
                                   background-size: 30px 1px;
                                   margin-bottom: 50px;
                                   gap: 3rem;
                              }
                              .hero-grid::before {
                                   background-size: 30px 1px;
                                   bottom: -50px;
                                   height: 50px;
                              }

                              .hero-title {
                                   font-size: 3rem;
                                   margin-top: 4rem;
                                   margin-left: 0;
                                   max-width: 100% !important;
                              }

                              .gallery-grid {
                                   display: grid;
                                   grid-template-columns: repeat(4, 1fr);
                                   grid-template-rows: repeat(6, 100px);
                                   gap: 0.5rem;
                                   height: auto;
                                   max-height: 600px;
                              }

                              .wide {
                                   grid-column: 1 / span 4;
                                   grid-row: 1 / span 2;
                              }

                              .tall {
                                   grid-column: 1 / span 2;
                                   grid-row: 3 / span 2;
                              }

                              .square {
                                   grid-column: 3 / span 2;
                                   grid-row: 3 / span 2;
                              }

                              .vertical {
                                   grid-column: 1 / span 2;
                                   grid-row: 5 / span 2;
                              }

                              .horizontal {
                                   grid-column: 3 / span 2;
                                   grid-row: 5 / span 2;
                              }
                         }

                         @media (max-width: 480px) {
                              .gallery-grid {
                                   grid-template-rows: repeat(6, 80px);
                                   max-height: 480px;
                              }

                              .hero-title {
                                   font-size: 2.5rem;
                                   margin-left: 0;
                              }
                         }

                         .typing-text {
                              border-right: 2px solid #2196F3;
                              padding-right: 5px;
                              animation: blink 0.7s infinite;
                         }

                         @keyframes blink {
                              0%, 100% { border-color: transparent }
                              50% { border-color: #2196F3 }
                         }

                         .gallery-video {
                              width: 100%;
                              height: 100%;
                              object-fit: cover;
                              position: absolute;
                              top: 0;
                              left: 0;
                         }
                    `}</style>
                    {/* <ParallaxProvider>
                         <Parallax y={[0, 0]} x={[0, 0]} tagOuter="figure" className="landingHead-frame">
                              <LazyLoadImage effect="blur" placeholderSrc="./assets/img/homepage/background1-alt.webp" src="./assets/img/homepage/background1.webp" className="img-fluid frame hero-bg" />
                         </Parallax>
                         <Parallax y={[-25, 0]} tagOuter="figure" className="landingHead-me">
                              <LazyLoadImage effect="blur" src="./assets/img/homepage/me.webp" placeholderSrc="./assets/img/homepage/me-alt.webp" className="img-fluid" />
                         </Parallax>
                         <Parallax y={[0, 0]} x={[-50, 0]} tagOuter="figure" className="landingHead-dragon">
                              <LazyLoadImage effect="blur" src="./assets/img/homepage/dragon.webp" placeholderSrc="./assets/img/homepage/dragon-alt.webp" className="img-fluid" />
                         </Parallax>
                         <Parallax y={[0, 0]} x={[0, 0]} tagOuter="figure" className="landingHead-frame">
                              <LazyLoadImage effect="blur" src="./assets/img/homepage/background.webp" placeholderSrc="./assets/img/homepage/background-alt.webp" className="img-fluid frame" />
                         </Parallax>
                         <Parallax tagOuter="figure" className="landingHead-ball">
                              <Link to="/projects">
                                   <LazyLoadImage effect="blur" src="./assets/img/homepage/ball.webp" placeholderSrc="./assets/img/homepage/ball-alt.webp" className="ball-image img-fluid" />
                              </Link>
                         </Parallax>
                    </ParallaxProvider> */}
               </div>
          )
     }
}

export default LandingHead