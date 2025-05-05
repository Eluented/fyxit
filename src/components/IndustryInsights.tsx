import { useEffect, useRef, useState } from "react";
import { ParticleCounter } from "./ParticleCounter";
import { motion, useAnimation } from "framer-motion";

export default function IndustryInsights() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  return (
    <section
      ref={sectionRef}
      className={`transition-colors duration-700 ease-in-out py-24 px-6 flex flex-col items-center justify-center font-poppins ${
        inView ? "bg-fyx-blue text-white" : "bg-gray-50 text-fyx-blue"
      }`}
    >
      <div className="max-w-5xl text-center mb-16">
        <motion.div 
          className="relative inline-block"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            The Trades Are Changing
          </h2>
          <motion.div
            className="absolute bottom-[-8px] left-0 h-[3px] bg-fyx-yellow"
            variants={{
              hidden: { width: 0 },
              visible: {
                width: "100%",
                transition: { 
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1]
                }
              }
            }}
          />
        </motion.div>
        
        <motion.p 
          className="relative inline-block"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
        
          className={`mt-4 text-lg font-medium max-w-2xl mx-auto transition-colors duration-500 ${
            inView ? "text-gray-200" : "text-gray-600"
          }`}
        >
          Fyxit was built to meet the moment. These stats show just how vital it is
          for tradespeople to build trust and visibility in the digital world.
          </ motion.p >
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full text-center font-poppins">
        {/* Stat Cards */}
        {[{ val: 67, text: "of UK homeowners use social media to find and research tradespeople." },
          { val: 78, text: "of consumers trust online reviews as much as personal recommendations." },
          { val: 56, text: "of homeowners in England have been affected by cowboy builders." }]
          .map((stat, i) => (
          <div
            key={i}
            className={`rounded-2xl p-8 shadow-2xl hover:scale-105 transition duration-300 ease-in-out ${
              inView ? "bg-white/10 text-slate-200" : "bg-white text-fyx-blue"
            }`}
          >
            <div className="text-6xl font-bold text-fyx-yellow mb-4">
              <ParticleCounter value={stat.val} />%
            </div>
            <p className={`text-lg font-medium ${inView ? "text-white" : "text-gray-700"}`}>
              {stat.text.split(" ").map((word, index) => (
                <span
                  key={index}
                  className={["social", "online", "cowboy"].includes(word.toLowerCase())
                    ? "font-semibold text-fyx-yellow"
                    : ""}
                >
                  {word + " "}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}