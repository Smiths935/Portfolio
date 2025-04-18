import React from 'react'
import Section from './Section'
import {  buttonVariants } from './ui/button'
import Github from './icons/Github'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Tiktok from './icons/Tiktok'
import Linkedin from './icons/Linkedin'


const Header = () => {
  return (
    <header className='sticky top-0 py-4'>
      <Section className='flex items-baseline'>
        <h1 className='text-lg font-bold text-primary'>
            yvanFotso.com
        </h1>
        <div className='flex-1'/>
        <ul className='flex items-center gap-2'>
            <Link
            href={'https://github.com'} className={cn(buttonVariants({variant:"outline"}),"size-6 p-0")}>
                <Github size={12} className='text-foreground'/>
            </Link>
            <Link
            href={'https://tiktok.com'} className={cn(buttonVariants({variant:"outline"}),"size-6 p-0")}>
                <Tiktok size={12} className='text-foreground'/>
            </Link>
          
            <Link
            href={'https://linkedin.com'} className={cn(buttonVariants({variant:"outline"}),"size-6 p-0")}>
                <Linkedin size={12} className='text-foreground'/>
            </Link>
        </ul>
      </Section>
    </header>
  )
}

export default Header
