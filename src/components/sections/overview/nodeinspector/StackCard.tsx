import React from "react";

interface Skill {
  language: string;
  description: string;
  level: "primary" | "strong" | "familiar";
  proficiency?: number;
}

const stackData: Skill[] = [
  {
    language: "Java",
    description: "Springboot · JDA",
    level: "primary",
    proficiency: 90,
  },
  {
    language: "Javascript / React",
    description: "Typescript",
    level: "strong",
    proficiency: 70,
  },
  {
    language: "SQL",
    description: "Postgres · MySQL",
    level: "strong",
    proficiency: 90,
  },
  {
    language: "HTML / CSS / Tailwind",
    description: "responsive design · UI/UX",
    level: "strong",
    proficiency: 80,
  },
];

const StackCard = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-ink text-sm">STACK PROFICIENCY</h2>
      {stackData.map((skill) => (
        <React.Fragment key={skill.language}>
          <div className="flex items-center justify-between">
            <div className="mt-2 flex items-center gap-4">
              <h2 className="text-sm">{skill.language}</h2>
              <p className="text-ink-faint text-[11px]">{skill.description}</p>
            </div>
            <p className="text-accent text-xs">{skill.level}</p>
          </div>
          <div className="relative">
            <div
              style={{ width: `${skill.proficiency}%` }}
              className="from-accent to-accent-2 absolute top-0 left-0 h-full bg-linear-to-r"
            ></div>
            <div className="bg-bg-3 h-2 w-full"></div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default StackCard;
