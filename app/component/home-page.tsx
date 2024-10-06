import { ExternalLink, GitBranchIcon, GitCommitIcon, GithubIcon, MailIcon, PhoneIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import React, { JSX, SVGProps } from "react"


// Profile Component
const Profile: React.FC = () => (
  <div className="flex items-center gap-6">
    <div className="rounded-full bg-muted p-1">
      <Image
        src="/145.jpg"
        alt="Молокоедов Михаил"
        width={128}
        height={128}
        className="h-32 w-32 rounded-full object-cover"
      />
    </div>
    <div>
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Молокоедов Михаил</h1>
      <h2 className="text-2xl font-medium text-muted-foreground">НИУ ВШЕ Программная инженерия, 20 лет</h2>
    </div>
  </div>
)

// Contact Info Component
const ContactInfo: React.FC = () => (
  <div className="rounded-lg bg-muted p-4">
    <h3 className="text-lg font-semibold">Связь</h3>
    <div className="mt-2 space-y-1 text-muted-foreground">
      <div className="flex items-center gap-2">
        <MailIcon className="h-5 w-5" />
        <span>mpmolokoedov@edu.hse.ru</span>
      </div>
      <div className="flex items-center gap-2">
        <PhoneIcon className="h-5 w-5" />
        <span>+7(964) 796-79-52</span>
      </div>
      <div className="flex items-center gap-2">
        <GithubIcon className="h-5 w-5" />
        <Link href="https://github.com/molokoedovmp" className="underline">
          https://github.com/molokoedovmp
        </Link>
      </div>
    </div>
  </div>
)

// Skills Component
const Skills: React.FC = () => (
  <div className="rounded-lg bg-muted p-4">
    <h3 className="text-lg font-semibold">Навыки</h3>
    <div className="mt-2 space-y-2 text-muted-foreground">
      {["Python", "Next.js", "SQL", "Machine Learning"].map((skill) => (
        <div key={skill} className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary" />
          <span>{skill}</span>
        </div>
      ))}
    </div>
  </div>
)

// Education Component
const Education: React.FC = () => (
  <div>
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Образование</h2>
    <div className="mt-6 space-y-6">
      <div className="flex items-center gap-4">
        <Image
          src="/hse.png"
          alt="НИУ ВШЕ Логотип"
          width={64}
          height={64}
          className="rounded-full"
        />
        <div>
          <h3 className="text-xl font-semibold">НИУ ВШЕ Пермь</h3>
          <p className="text-muted-foreground">2021 - 2025</p>
          <p className="mt-2 text-muted-foreground">
            Бакалавр, в настоящее время учусь на 4 курсе, специализация: программная инженерия
          </p>
        </div>
      </div>
    </div>
  </div>
)

// Work Experience Component
const WorkExperience: React.FC = () => (
  <div>
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Опыт работы</h2>
    <div className="mt-6 space-y-6">
      <div className="flex items-center gap-4">
        <Image
          src="/hse.png"
          alt="НИУ ВШЕ Лаборатория Логотип"
          width={64}
          height={64}
          className="rounded-full"
        />
        <div>
          <h3 className="text-xl font-semibold">Стажировка в НИУ ВШЕ, Лаборатория междисциплинарных эмпирических исследований</h3>
          <p className="text-muted-foreground">Май 2024 - Июль 2024</p>
          <ul className="mt-2 space-y-2 text-muted-foreground list-disc list-inside">
            <li>Работал над проектом геоинформационное приложение, которое автоматизирует</li>
            <li>преобразование контурных линий из формата GeoJSON в полигоны</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

// Projects Component
const Projects: React.FC = () => (
  <div>
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Проекты</h2>
    <div className="mt-6 space-y-6">
      <ProjectCard
        imageSrc="/aibazar.png"
        title="Собственное решения для ведения коммерческой деятельности"
        description="Создание динамических веб-сайтов для малого бизнеса с использованием Node.js и Next.js"
        githubLink="https://github.com/molokoedovmp/aibazar.git"
        projectLink="https://aibazar.vercel.app"
      />
      <ProjectCard
        imageSrc="/personal.png"
        title="Персональный проект"
        description="Разработал персональный проект веб-приложение для управления задачами"
        githubLink="https://github.com/molokoedovmp/TaskFocus.git"
        projectLink="https://task-focus.vercel.app"
      />
    </div>
  </div>
)

// Project Card Component
interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  githubLink: string;
  projectLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description, githubLink, projectLink }) => (
  <div className="bg-background rounded-lg p-6 shadow-md transition-all hover:shadow-lg">
    <div className="flex flex-col md:flex-row gap-6">
      <Image
        src={imageSrc}
        alt={title}
        width={300}
        height={200}
        className="rounded-lg object-cover"
      />
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <div className="flex items-center gap-2 mt-2">
          <GithubIcon className="h-5 w-5" />
          <Link href={githubLink} className="underline">
            {githubLink}
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <ExternalLink className="h-5 w-5" />
          <Link href={projectLink} className="underline">
            Ссылка на приложение
          </Link>
        </div>
      </div>
    </div>
  </div>
)

// Achievements Component
const Achievements: React.FC = () => (
  <div>
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Достижения</h2>
    <div className="mt-6 space-y-6">
      <div className="bg-background rounded-lg p-6 shadow-md transition-all hover:shadow-lg">
        <div className="flex flex-col md:flex-row gap-6">
          <Image
            src="/xakaton.png"
            alt="Хакатон НИУ ВШЕ и Контур"
            width={300}
            height={200}
            className="rounded-lg object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold">Победитель хакатона от НИУ ВШЕ и компании Контур</h3>
            <p className="text-muted-foreground">Saas</p>
            <div className="flex items-center gap-2 mt-2">
              <GithubIcon className="h-5 w-5" />
              <Link href="https://github.com/molokoedovmp/consult-ver-2-.git" className="underline">
                https://github.com/molokoedovmp/consult-ver-2-.git
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5" />
              <Link href="https://consult-ver-3.vercel.app" className="underline">
                Ссылка на приложение
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Additional Information Component
const AdditionalInfo: React.FC = () => (
  <div>
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Дополнительная информация</h2>
    <div className="mt-6 space-y-6">
      <div>
        <h2 className="text-2xl font-medium text-muted-foreground">Профессиональные навыки</h2>
      </div>
      <div className="bg-background rounded-lg p-6 shadow-md">
        <ul className="mt-2 space-y-2 text-muted-foreground list-disc list-inside">
          <li>Python (numpy, pandas, matplotlib, sns, sklearn) Machine Learning</li>
          <li className="mt-2">
            <Link href="https://github.com/molokoedovmp/MachineLearning.git" className="underline">
              https://github.com/molokoedovmp/MachineLearning.git
            </Link>
          </li>
          <li>SQL: написание запросов для извлечения, анализа и управления данными из баз данных.</li>
          <li>Диаграммы классов, последовательности, деятельности для описания систем и процессов. 
          Моделирование бизнес-процессов с использованием BPMN</li>
        </ul>
      </div>
    </div>
  </div>
)

// Footer Component
const Footer: React.FC = () => (
  <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
    <p className="text-xs text-muted-foreground">&copy; 2024 Молокоедов Михаил.</p>
  </footer>
)

// Main Component
export function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <title>Резюме - Молокоедов Михаил</title>
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-[1fr_400px] md:gap-16">
            <div>
              <Profile />
              <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl">
                Начинающий разработчик с техническим образованием в программировании, 
                стремящийся применить аналитические навыки для оптимизации бизнес-процессов
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <ContactInfo />
              <Skills />
            </div>
          </div>
        </div>
      </main>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10">
            <Education />
            <WorkExperience />
            <Projects />
            <Achievements />
            <AdditionalInfo />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
