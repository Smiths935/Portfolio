import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"

export const Code = ({ className, ...props }: ComponentPropsWithoutRef<'span'>) => {
    return <span {...props} className={cn(" bg-accent/30 font-mono hover:bg-accent/50 transition-colors cursor-pointer border border-accent text-primary px-1 py-0.5 mx-0.5 rounded-sm", className)} />
}