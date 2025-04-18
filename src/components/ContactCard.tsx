/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight } from 'lucide-react';
import React from 'react'
import { Card } from './ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const ContactCard = (props: {
    image: string;
    mediumImage: string;
    name: string;
    descriptiom: string;
    url?:string;
    className?:string
  }) => {
    return (
      <Link href={props.url ? props.url : "#"} target="_blank" rel="noopener noreferrer" className={cn('w-full',props.className)}>
       <Card className="p-3 bg-accent/10 flex flex-row hover:bg-accent/20 transition-colors group cursor-pointer items-center gap-4">
      <div className="relative h-10 w-10">
        <img src={props.image} alt={props.name} className="w-full h-full object-cover rounded-full" />
        <img src={props.mediumImage} alt={props.name} className="h-4 w-4 absolute -bottom-1 -right-1 rounded-full object-contain" />
      </div>
      <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{props.name}</p>
          </div>
          <p className="text-xs text-muted-foreground">{props.descriptiom}</p>
        </div>
        <ArrowUpRight className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" size={16}/>
    </Card></Link>
    );
  };