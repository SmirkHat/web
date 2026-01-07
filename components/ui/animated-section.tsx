"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
    children: ReactNode
    className?: string
    delay?: number
    immediate?: boolean
}

export function AnimatedSection({ children, className, delay = 0, immediate = false }: AnimatedSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={immediate ? { opacity: 1, y: 0 } : undefined}
            whileInView={!immediate ? { opacity: 1, y: 0 } : undefined}
            viewport={!immediate ? { once: true } : undefined}
            transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    )
}
