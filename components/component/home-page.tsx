import { ExternalLink, GitBranchIcon, GitCommitIcon, GithubIcon } from "lucide-react"
import Link from "next/link"
import Head from 'next/head'

export function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <title>Резюме - Молокоедов Михаил</title>
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Resume</span>
        </Link>
      </header>
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-[1fr_400px] md:gap-16">
            <div>
              <div className="flex items-center gap-6">
              <div className="rounded-full bg-muted p-1">
                <img
                  src="/145.jpg"  // Указываем путь от корня 'public'
                  alt="John Doe"
                  width={128}
                  height={128}
                  className="h-32 w-32 rounded-full object-cover"
                  style={{ aspectRatio: "128/128", objectFit: "cover" }}
                />
              </div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Молокоедов Михаил</h1>
                  <h2 className="text-2xl font-medium text-muted-foreground">Программная инженерия, 20 лет</h2>
                </div>
              </div>
              <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl">
                Начинающий бизнес-аналитик с техническим образованием в программировании, 
              стремящийся применить аналитические навыки для оптимизации бизнес-процессов
              </p>
            </div>
            <div className="flex flex-col gap-4">
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
                    <Link href="https://github.com/molokoedovmp" className="underline" prefetch={false}>
                      https://github.com/molokoedovmp
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h3 className="text-lg font-semibold">Навыки</h3>
                <div className="mt-2 space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Python</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Next.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>SQL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Machine Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10">
          <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Образование</h2>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">НИУ ВШЕ</h3>
                  <p className="text-muted-foreground">2021 - 2025</p>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li>Бакалавр, в настоящее время учусь на 4 курсе, специализация: программная инженерия</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Опыт работы</h2>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">Стажировался в НИУ ВШЭ, Лаборатория междисциплинарных эмпирических исследований</h3>
                  <p className="text-muted-foreground">Май 2024 - Июль 2024</p>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li>Работал над проектом геоинформационное приложение, которое автоматизирует </li>
                    <li>преобразование контурных линий из формата GeoJSON в полигоны </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Создание динамических веб-сайтов для малого бизнеса</h3>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li>Создание динамических веб-сайтов для малого бизнеса</li>
                    <li>с использованием Django и Next.js -
                    <Link href="https://github.com/molokoedovmp/Online-shop.git" className="underline" prefetch={false}>
                    https://github.com/molokoedovmp/Online-shop.git
                    </Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Персональный проект</h3>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li>Разработал персональный проект веб-приложение для управления задачами -</li>
                    <div className="flex items-center gap-2">
                    <GithubIcon className="h-5 w-5" />
                    <Link href="https://github.com/molokoedovmp/TaskFocus.git" className="underline" prefetch={false}>
                    https://github.com/molokoedovmp/TaskFocus.git
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-5 w-5" />
                    <Link href="https://task-focus.vercel.app" className="underline" prefetch={false}>
                      Ссылка на приложение
                    </Link>
                  </div>     
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Достижения</h2>
              <div className="mt-6 space-y-6">
                
                <div>
                  <h3 className="text-xl font-semibold">Победитель хакатона от НИУ ВШЕ и компании Контур</h3>
                  <p>Создание MVP</p>
                  <div className="flex items-center gap-2">
                    <GithubIcon className="h-5 w-5" />
                    <Link href="https://github.com/molokoedovmp/consult-ver-2-.git" className="underline" prefetch={false}>
                      https://github.com/molokoedovmp/consult-ver-2-.git
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-5 w-5" />
                    <Link href="https://consult-ver-3.vercel.app" className="underline" prefetch={false}>
                      Ссылка на приложение
                    </Link>
                  </div>                  
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Дополнительная информация</h2>
              <div className="mt-6 space-y-6">
                <div>
                <h2 className="text-2xl font-medium text-muted-foreground">Проффесиональные навыки</h2>
                    
                </div>
                <div>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                  <li>Python  (numpy, pandas,matplotlib, sns, sklern) Machine Learning</li>
                    <Link href="https://github.com/molokoedovmp/MachineLearning.git" className="underline" prefetch={false}>
                    https://github.com/molokoedovmp/MachineLearning.git
                    </Link>
                  </ul>
                </div>
                <div>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                  <li>SQL: написание запросов для извлечения, анализа и управления данными из баз данных.</li>
                  </ul>
                </div>
                <div>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                  <li>Диаграммы классов, последовательности, деятельности для описания систем и процессов. 
                  Моделирование бизнес-процессов с использованием BPMN</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Молокоедов Михаил.</p>
      </footer>
    </div>
  )
}

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}


function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
