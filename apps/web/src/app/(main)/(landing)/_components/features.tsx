import {
  BookText,
  ChartArea,
  CircleDollarSign,
  Contrast,
  Database,
  Globe,
  Languages,
  Lock,
  type LucideProps,
  Mail,
  Sun,
} from 'lucide-react'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import { DarkModeToggle } from '@/components/dark-mode-toggle'
import { LanguageSelector } from '@/components/language-selector'
import { Button } from '@/components/ui/button'
import { WobbleCard } from '@/components/ui/wobble-card'

interface CardProps {
  containerClassName?: string
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
  className?: string
  title: React.ReactNode
  description: React.ReactNode
  children?: React.ReactNode
}

function Card({
  containerClassName,
  className,
  title,
  icon: Icon,
  description,
  children,
}: CardProps) {
  return (
    <WobbleCard containerClassName={containerClassName} className="">
      <div className={className}>
        <h3 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] flex items-center text-white">
          {Icon && <Icon className="h-8 w-8 mr-2" />}
          {title}
        </h3>
        <p className="mt-4 text-left  text-base/6 text-neutral-200">
          {description}
        </p>
      </div>
      {children}
    </WobbleCard>
  )
}

export function Features() {
  return (
    <div className="my-20 px-5 md:px-10 lg:px-20">
      <div className="text-center mb-16">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Everything You Need, Built-In
        </h2>
        <p className="text-xl text-muted-foreground  max-w-3xl mx-auto">
          Stop wasting time on boilerplate code. Focus on what matters -
          building your unique features.
        </p>
        <div className="max-w-7xl m-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card
            containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
            className="max-w-xs"
            icon={Lock}
            title="Authentication"
            description="Clerk authentication with Next.js middleware for secure, server-side rendering."
          >
            {/* <img
              src="/linear.webp"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
            /> */}
          </Card>
          <Card
            containerClassName="col-span-1 min-h-[300px]"
            icon={Languages}
            title="Translations"
            description="Built-in translation support with i18next for seamless localization. Also includes a LLM prompt to translate your app."
          >
            <div className="text-left pt-5 relative z-50">
              <LanguageSelector className="mt-4">
                <Button>
                  Try another language <Globe />
                </Button>
              </LanguageSelector>
            </div>
          </Card>
          {/* <Card
            containerClassName="col-span-3 min-h-[300px]"
            title="Best tech stack ever"
            className="max-w-sm"
            description="The best technologies are already integrated so you can focus on building your app: next.js, react, typescript, tailwindcss, shadcn/ui."
          ></Card> */}
          <Card
            containerClassName="col-span-1 min-h-[300px]"
            icon={Database}
            title="Database"
            className="max-w-sm"
            description="Of course, we have a database. Prisma ORM with SQLite for local development and PostgreSQL for production."
          ></Card>
          <Card
            containerClassName="col-span-1 lg:col-span-2 min-h-[300px] bg-green-900"
            icon={CircleDollarSign}
            title="Payment"
            className="max-w-sm"
            description="You will need to charge your users, so we have integrated Stripe for you."
          ></Card>
          <Card
            containerClassName="col-span-1 lg:col-span-3 min-h-[300px] bg-pink-800"
            icon={BookText}
            title="Content Management"
            className="max-w-sm"
            description="You can manage your content with Sanity, a headless CMS that is easy to use and powerful. If you need a simpler solution, you can use the built-in markdown interpreter."
          ></Card>
          <Card
            containerClassName="col-span-1 min-h-[300px] bg-green-900"
            icon={Mail}
            title="Email"
            className="max-w-sm"
            description="Mailgun is integrated for sending emails, so you can easily communicate with your users."
          ></Card>

          <Card
            containerClassName="col-span-1 min-h-[300px] bg-pink-800"
            icon={ChartArea}
            title="Analytics"
            className="max-w-sm"
            description="We have integrated Google Analytics and Hotjar, so you can easily track user behavior and improve your app."
          ></Card>
          <Card
            containerClassName="col-span-1 min-h-[300px]"
            icon={Contrast}
            title="Dark Mode"
            className="max-w-sm"
            description="All the modern apps have dark mode, so we have integrated it for you. It is easy to use and works out of the box."
          >
            <div className="text-start mt-4 relative z-50">
              <DarkModeToggle>
                <Button>
                  Toggle dark mode <Sun className="ml-2" />
                </Button>
              </DarkModeToggle>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
