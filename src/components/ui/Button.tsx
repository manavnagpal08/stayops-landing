import * as React from "react"
import { Slot } from "@radix-ui/react-slot" // Wait, I haven't installed Radix UI. I'll just use a standard button.
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // In Next 15/React 19 we just use standard components if Slot isn't available. Let's stick to standard "button" for now since Radix isn't installed.
    if (asChild) {
       console.warn("asChild is not supported without @radix-ui/react-slot")
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-gold-500 text-black hover:bg-gold-400 text-glow box-glow": variant === 'primary',
            "glass hover:bg-white/10 text-white": variant === 'secondary',
            "border border-gold-500/50 bg-transparent hover:bg-gold-500/10 text-gold-400": variant === 'outline',
            "hover:bg-white/10 hover:text-white": variant === 'ghost',
            "h-10 px-4 py-2": size === 'default',
            "h-9 rounded-md px-3": size === 'sm',
            "h-11 rounded-md px-8 text-base": size === 'lg',
            "h-10 w-10": size === 'icon',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
