/* eslint-disable @next/next/no-img-element */
import { Code } from './Code'
import Section from './Section'
import Github from './icons/Github'
import Link from 'next/link'


const Hero = () => {
    return (
        <Section className='flex max-md:flex-col 
           items-start gap-4'>
            <div className='flex-[3] w-full flex flex-col gap-2'>
                <h2 className='font-caption font-bold text-5xl'>Yvan Fotso</h2>
                <h3 className='text-3xl font-caption text-primary'>Software developper and creator</h3>
                <p className='text-base'>I love creating content on
                    <Link href={"/"}>
                        <Code className='inline-flex items-center gap-1'>
                            <Github size={16} className='inline' /> Youtube
                        </Code>
                    </Link>
                    currentlu working at 
                    <Link href={"/"}>
                        <Code className='inline-flex items-center gap-1'>
                            <Github size={16} className='inline' /> Codeline
                        </Code>
                    </Link> living in <Link href={"/"}>
                        <Code className='inline-flex items-center gap-1'>
                            <Github size={16} className='inline' /> Bali
                        </Code>
                    </Link>
                </p>
            </div>
            <div className='flex-[2] max-md:m-auto ml-auto'>
                <img
                    // width={50}
                    // height={50}
                    src="/profile-rounded.png"
                    alt="Landscape picture"
                    className='w-full h-auto max-w-xs max-md:w-56'
                />
            </div>
        </Section>
    )
}

export default Hero
