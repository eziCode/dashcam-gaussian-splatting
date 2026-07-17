import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec0c21]/30 disabled:pointer-events-none disabled:opacity-50 active:scale-[.98]', {
  variants: {
    variant: {
      default: 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm',
      brand: 'bg-[#ec0c21] text-white hover:bg-[#cc0a1c] shadow-sm',
      ghost: 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950',
      outline: 'border border-neutral-200 bg-white text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50',
    },
    size: { default: 'h-10 px-4 py-2', sm: 'h-9 rounded-lg px-3', icon: 'h-10 w-10' },
  },
  defaultVariants: { variant: 'default', size: 'default' },
})

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Button.displayName = 'Button'
