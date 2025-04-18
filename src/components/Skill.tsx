import React from "react";
import Section from "./Section";
import { Badge } from "./ui/badge";
import ReactIco from "./icons/ReactIco";
import { Code } from "./Code";
import TailWindIco from "./icons/TailWindIco";
import OpenAi from "./icons/OpenAi";

export const Skill = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge className="mb-4" variant={"outline"}>
        Skill
      </Badge>
      <h2 className=" border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on ...
      </h2>
      <div className="flex gap-4 max-md:flex-col">
        <div className="flex flex-col gap-2 flex-1">
          <ReactIco
            size={42}
            className="animate-spin"
            style={{
              animationDuration: "10s",
            }}
          />

          <h3 className=" text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-muted-foreground text-sm">
            My main framework is<Code>React</Code>. I love the component-based
            architecture and the flexibility it offers. I have experience with
            React Router,
            <Code>Redux</Code>, and other libraries in the React ecosystem.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <TailWindIco
            size={42}
            
          />

          <h3 className=" text-2xl font-semibold tracking-tight">TailWindCss</h3>
          <p className="text-muted-foreground text-sm">
            My main framework is<Code>React</Code>. I love the component-based
            architecture and the flexibility it offers. I have experience with
            React Router,
            <Code>Redux</Code>, and other libraries in the React ecosystem.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <OpenAi
            size={42}
           
          />

          <h3 className=" text-2xl font-semibold tracking-tight">Open AI</h3>
          <p className="text-muted-foreground text-sm">
            My main framework is<Code>React</Code>. I love the component-based
            architecture and the flexibility it offers. I have experience with
            React Router,
            <Code>Redux</Code>, and other libraries in the React ecosystem.
          </p>
        </div>
      </div>
    </Section>
  );
};
