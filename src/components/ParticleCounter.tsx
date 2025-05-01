// import { useEffect, useState } from "react"

// export function ParticleCounter({ value }: { value: number }) {
//     const [displayValue, setDisplayValue] = useState(0)
//     const particles = Array(20).fill(0)
  
//     useEffect(() => {
//       let start = 0
//       const end = value
//       const duration = 2000 // ms
//       const startTime = performance.now()
  
//       const animateValue = (timestamp: number) => {
//         const runtime = timestamp - startTime
//         const progress = Math.min(runtime / duration, 1)
//         setDisplayValue(Math.floor(progress * end))
        
//         if (progress < 1) {
//           requestAnimationFrame(animateValue)
//         } else {
//           // Trigger particle explosion
//         }
//       }
      
//       requestAnimationFrame(animateValue)
//     }, [value])
  
//     return (
//       <div className="relative">
//         <span className="text-6xl font-bold text-fyx-yellow">
//           {displayValue.toLocaleString()}
//         </span>
        
//         {/* Particles */}
//         {particles.map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 rounded-full bg-fyx-yellow"
//             initial={{ x: 0, y: 0, opacity: 1 }}
//             animate={{
//               x: Math.random() * 100 - 50,
//               y: Math.random() * 100 - 50,
//               opacity: 0
//             }}
//             transition={{
//               delay: 2,
//               duration: 1,
//               ease: "circOut"
//             }}
//           />
//         ))}
//       </div>
//     )
//   }