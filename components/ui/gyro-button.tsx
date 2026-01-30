'use client'

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"
import { ButtonHTMLAttributes, ReactNode } from "react"

interface GyroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  children: ReactNode
  className?: string
}

export function GyroButton({ 
  variant = 'primary', 
  href, 
  children, 
  className,
  ...props 
}: GyroButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 active:scale-95"
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-gyro-gold to-gyro-gold-hover text-white px-8 py-4 shadow-lg hover:shadow-xl hover:scale-105 text-lg",
    secondary: "border-2 border-gyro-navy text-gyro-navy px-8 py-4 hover:bg-gyro-navy hover:text-white text-lg",
    ghost: "text-gyro-navy px-6 py-3 hover:bg-gray-100",
  }

  const combinedClassName = cn(baseStyles, variantStyles[variant], className)

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: variant !== 'ghost' ? 1.05 : 1 }}
      whileTap={{ scale: 0.95 }}
      className={combinedClassName}
      {...props}
    >
      {children}
    </motion.button>
  )
}
