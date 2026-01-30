'use client'

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface GyroCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  imageUrl?: string
}

export function GyroCard({ children, className, hover = true, imageUrl }: GyroCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" } : {}}
      className={cn(
        "bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 group",
        className
      )}
    >
      {imageUrl && (
        <div className="h-48 relative overflow-hidden">
          <div
            className="w-full h-full bg-gradient-to-br from-gyro-navy to-blue-600 bg-cover bg-center opacity-80 group-hover:scale-110 transition-transform duration-500"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </motion.div>
  )
}
