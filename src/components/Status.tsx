/* eslint-disable @next/next/no-img-element */
import React from "react";
import Section from "./Section";
import { Card } from "./ui/card";
import {
  Code,
  LucideIcon,
  MessageCircle,
  Rss,
  StickyNote,
  Weight,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { ContactCard } from "./ContactCard";

export default function Status() {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full flex p-4 flex-col gap-2 ">
          <p className="text-lg text-muted-foreground">Side, fun project</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex flex-col flex-[2] gap-2 w-full">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          {WORKS.map((project, index) => (
            <WorkProject key={index} {...project} />
          ))}
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contact me</p>
          <ContactCard
            className="flex-1"
            name="@Smiths935"
            image="/profile-rounded.png"
            mediumImage="data:image/png;base64,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"
            descriptiom="Linkedin"
            url="https://linkedin.com/yvanfotso935@gmail.com"
          />
          <ContactCard
            className="flex-1"
            name="yvanfotso935@gmail.com"
            image="/profile-rounded.png"
            mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjn0-Jlvv5mutNz9knUoo3nJFD0Am-M6sl5Q&s"
            descriptiom="Email me for any inquiries"
            url="mailto:yvanfotso935@gmail.com"
          />
        </Card>
      </div>
    </Section>
  );
}

const SIDE_PROJECTS: SideProps[] = [
  {
    Logo: Code,
    title: "Codeline",
    description:
      "A platform for developers to share and discover code snippets",
    link: "https://codeline.dev",
  },
  {
    Logo: StickyNote,
    title: "Codeline",
    description:
      "A platform for developers to share and discover code snippets",
    link: "https://codeline.dev",
  },
  {
    Logo: Rss,
    title: "Codeline",
    description:
      "A platform for developers to share and discover code snippets",
    link: "https://codeline.dev",
  },
  {
    Logo: MessageCircle,
    title: "Codeline",
    description:
      "A platform for developers to share and discover code snippets",
    link: "https://codeline.dev",
  },
  {
    Logo: Weight,
    title: "Codeline",
    description:
      "A platform for developers to share and discover code snippets",
    link: "https://codeline.dev",
  },
];
type SideProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  link: string;
};

const SideProject = (props: SideProps) => {
  return (
    <Link
      href={props.link}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors cursor-pointer p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
const WORKS: WorkProps[] = [
  {
    role: "Software Engineer",
    img: "https://avatar.iran.liara.run/public",
    title: "Codeline",
    date: "2023 - Present",
    link: "https://codeline.dev",
    freelance: true,
  },
  {
    role: "Software Engineer",
    img: "data:image/jpeg;base64,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",
    title: "Codeline",
    date: "2023 - Present",
    link: "https://codeline.dev",
    freelance: false,
  },
  {
    role: "Software Engineer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTukikCPymHoFJ7hlD_bE_60GfQmbgvkdnWg&s",
    title: "Codeline",
    date: "2023 - Present",
    link: "https://codeline.dev",
    freelance: true,
  },
];
type WorkProps = {
  img: string;
  title: string;
  role: string;
  date: string;
  link: string;
  freelance?: boolean;
};

const WorkProject = (props: WorkProps) => {
  return (
    <Link
      href={props.link}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors cursor-pointer p-1 rounded"
    >
      <img
        src={props.img}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />
      {/* <span className="bg-accent text-accent-foreground p-3 rounded-sm">
      </span> */}
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.freelance && <Badge variant={"outline"}>Mission</Badge>}
        </div>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <p className="text-xs text-muted-foreground text-end">{props.date}</p>
    </Link>
  );
};
