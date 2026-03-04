import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Briefcase, Mail, MapPin, Phone } from "lucide-react";


const SKILLS = {
  Languages: [
    { name: "Java", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
  ],
  Databases: [{ name: "SQL", level: "Intermediate" }],
  "AI & Modern Development": [
    { name: "Prompt Engineering", level: "Advanced" },
    { name: "AI-Assisted Development (LLMs – GPT5 Nano)", level: "" },
  ],
  "Tools & Platforms": [
    { name: "Git" },
    { name: "IntelliJ IDEA" },
    { name: "VS Code" },
    { name: "NetBeans" },
    { name: "Replit" },
    { name: "Fuzen" },
    { name: "Lovable.ai" },
    
  ],
};

const PROJECTS = [
  {
    title: "ExamReady Hub",
    period: "2026 – Present",
    role: "Individual Project | Deployed Educational Web Platform",
    bullets: [
      "Designed and developed a structured learning platform for Grade 8–12 learners.",
      "Built secure user registration to manage controlled access to academic resources.",
      "Implemented dynamic content structure for quizzes, exam papers, and memorandums.",
      "Applied AI prompt-assisted development to optimize system design and content generation.",
      "Designed responsive frontend interface and structured backend-ready architecture.",
    ],
  },
  {
    title: "Mzansi ThriftShop",
    period: "2025 – Present",
    role: "Documentation Lead | Full-Stack E-commerce Application (Team of 5)",
    bullets: [
      "Led technical documentation, including backend and frontend workflow design.",
      "Developers initially used dummy data for API communication; frontend was fully functional but not connected to the database.",
      "Currently improving database integration processes to ensure seamless communication between the database, backend, and frontend.",
      "Developed structured technical guides to assist the team in backend integration.",
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative border-b border-border bg-[hsl(220,10%,20%)]">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:py-14">
          <div>
            <h1 className="text-glow font-mono text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Mangaliso Snothando
            </h1>
            <p className="mt-1 text-base text-muted-foreground">
              Application Developer Student · Final Year ICT Diploma
            </p>
          </div>
          <div className="flex flex-col gap-1.5 text-sm text-muted-foreground md:items-end">
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-primary" /> 241177049@mycput.ac.za
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-primary" /> 083 765 9532
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" /> Woodstock, Cape Town
            </span>
          </div>
        </div>
      </header>

      {/* Main Content — Two Column */}
      <main className="mx-auto grid max-w-5xl gap-8 px-4 py-12 md:grid-cols-[2fr_3fr] md:gap-12">
        {/* LEFT COLUMN */}
        <div className="space-y-10">
          {/* Career Objective */}
          <section id="objective">
            <SectionHeading>Career Objective</SectionHeading>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Final-year Diploma in Information and Communication Technology student specializing in
              Software Development, actively exploring opportunities in software development and
              AI-assisted solutions. Seeking a Work-Integrated Learning (WIL) placement, internship,
              or graduate opportunity within a technology-driven organization where I can contribute
              to innovative software systems, apply my knowledge of Java, Python, databases, and AI
              technologies, and continue developing industry-level technical expertise.
            </p>
          </section>

          {/* Education */}
          <section id="education">
            <SectionHeading>Education</SectionHeading>
            <div className="space-y-4">
              <EducationEntry
                title="National Senior Certificate"
                institution="Zwelakhe Senior Secondary School"
                year="2023 (Completed)"
              />
              <EducationEntry
                title="Diploma in ICT"
                institution="Cape Peninsula University of Technology"
                year="2024–2026 (Final Year)"
              />
            </div>
          </section>

          {/* Skills */}
          <section id="skills">
            <SectionHeading>Technical Skills</SectionHeading>
            <div className="space-y-4">
              {Object.entries(SKILLS).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-primary/70">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="border border-border text-xs"
                      >
                        {skill.name}
                        {skill.level && (
                          <span className="ml-1 text-primary/80">· {skill.level}</span>
                        )}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-10">
          {/* Projects */}
          <section id="experience">
            <SectionHeading>Technical Project Experience</SectionHeading>
            <div className="space-y-6">
              {PROJECTS.map((project) => (
                <Card key={project.title} className="border-glow border-border bg-card">
                  <CardContent className="p-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-mono text-base font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <span className="font-mono text-xs text-primary">{project.period}</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{project.role}</p>
                    <ul className="mt-3 space-y-1.5">
                      {project.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* References */}
          <section id="references">
            <SectionHeading>References</SectionHeading>
            <div className="space-y-4">
              <div className="border-l-2 border-primary/30 pl-4">
                <h4 className="text-sm font-semibold text-foreground">Zwelakhe Senior Secondary School</h4>
                <p className="text-sm text-muted-foreground">Siyabonga Gxula</p>
                <p className="text-xs text-muted-foreground">gxusiyabonga@gmail.com</p>
                <p className="text-xs text-muted-foreground">078 766 5384</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © 2026 Mangaliso Snothando. All rights reserved.
      </footer>
    </div>
  );
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <>
    <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-primary">
      {children}
    </h2>
    <Separator className="mb-4 mt-2 bg-primary/20" />
  </>
);

const EducationEntry = ({
  title,
  institution,
  year,
}: {
  title: string;
  institution: string;
  year: string;
}) => (
  <div className="border-l-2 border-primary/30 pl-4">
    <h4 className="text-sm font-semibold text-foreground">{title}</h4>
    <p className="text-xs text-muted-foreground">{institution}</p>
    <p className="font-mono text-xs text-primary/70">{year}</p>
  </div>
);

export default Index;
