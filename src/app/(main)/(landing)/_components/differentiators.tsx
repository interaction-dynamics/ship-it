import { getLibraries, simplifyLibraryVersion } from '@/config/repository'
import { cn } from '@/lib/utils'

type CardProps = {
  title: string
  description: string
  icon: React.ReactNode
  version?: string
  className?: string
  containerClassName?: string
  titleClassName?: string
}

function Card({
  title,
  description,
  version,
  icon,
  className,
  containerClassName,
  titleClassName,
}: CardProps) {
  return (
    <div
      className={cn(
        'group relative bg-gradient-to-br border rounded-xl p-6 transition-all duration-300 hover:scale-105',
        containerClassName
      )}
    >
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity',
          className
        )}
      ></div>
      <div className="relative z-10">
        <div
          className={cn(
            'w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform',
            titleClassName
          )}
        >
          <span className="text-white font-bold text-lg">{icon}</span>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">
          {title} {version ? `v${simplifyLibraryVersion(version)}` : ''}
        </h3>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
    </div>
  )
}

export function Differentiators() {
  return (
    <>
      <section className="relative z-10 px-6 py-20 mt-60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Powered differently from <br />
              other boilerplates
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built with the latest technologies and enforcing best practices so
              your project is production-grade ready in no time.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card
              title="Next.js"
              description="React framework with App Router"
              icon="⚛"
              version={getLibraries().next}
              className=" from-blue-500/5 to-cyan-500/5"
              containerClassName="from-blue-500/10 to-cyan-500/10  border-blue-500/20 hover:border-blue-400/40"
              titleClassName="from-blue-400 to-cyan-400 "
            />
            <Card
              title="TypeScript"
              description="Type-safe development"
              icon="TS"
              version={getLibraries().typescript}
              className="from-blue-600/5 to-blue-800/5"
              containerClassName="from-blue-600/10 to-blue-800/10 border-blue-600/20 hover:border-blue-500/40"
              titleClassName="from-blue-500 to-blue-700"
            />
            <Card
              title="Tailwind CSS"
              description="Utility-first styling"
              icon="TW"
              version={getLibraries().tailwindcss}
              className="from-cyan-500/5 to-blue-500/5"
              containerClassName="from-cyan-500/10 to-blue-500/10 border-cyan-500/20 hover:border-cyan-400/40"
              titleClassName="from-cyan-400 to-blue-500"
            />
            <Card
              title="shadcn/ui"
              description="Beautiful components"
              icon="UI"
              className="from-slate-600/5 to-slate-800/5"
              containerClassName="from-slate-600/10 to-slate-800/10 border-slate-600/20 hover:border-slate-500/40"
              titleClassName="from-slate-500 to-slate-700"
            />
            {/* <Card
              title="Prisma ORM"
              description="Type-safe database client"
              icon="🔺"
              className="from-emerald-500/5 to-green-500/5"
              containerClassName="from-emerald-500/10 to-green-500/10 border-emerald-500/20 hover:border-emerald-400/40"
              titleClassName="from-emerald-400 to-green-500"
            />
            <Card
              title="PostgreSQL"
              description="Reliable database"
              icon="🐘"
              className="from-blue-700/5 to-indigo-700/5"
              containerClassName="from-blue-700/10 to-indigo-700/10 border-blue-700/20 hover:border-blue-600/40"
              titleClassName="from-blue-600 to-indigo-600"
            /> */}
            {/* <Card
              title="NextAuth.js"
              description="Complete auth solution"
              icon={<Lock className="w-6 h-6 text-white" />}
              className="from-purple-500/5 to-indigo-500/5"
              containerClassName="from-purple-500/10 to-indigo-500/10 border-purple-500/20 hover:border-purple-400/40"
              titleClassName="from-purple-400 to-indigo-500"
            /> */}
            <Card
              title="Zod"
              description="Schema validation"
              icon="⚡"
              version={getLibraries().zod}
              className="from-yellow-500/5 to-orange-500/5"
              containerClassName="from-yellow-500/10 to-orange-500/10 border-yellow-500/20 hover:border-yellow-400/40"
              titleClassName="from-yellow-400 to-orange-500"
            />
            {/* <Card
              title="React Hook Form"
              description="Performant forms"
              icon="📝"
              className="from-red-500/5 to-pink-500/5"
              containerClassName="from-red-500/10 to-pink-500/10 border-red-500/20 hover:border-red-400/40"
              titleClassName="from-red-400 to-pink-500"
            /> */}
            <Card
              title="Playwright"
              description="End-to-end & accessibility tests"
              icon="PW"
              className="from-violet-500/5 to-purple-500/5"
              containerClassName="from-violet-500/10 to-purple-500/10 border-violet-500/20 hover:border-violet-400/40"
              titleClassName="from-violet-400 to-purple-500"
            />
            <Card
              title="ESLint + Prettier"
              description="Code quality tools"
              icon="ESL"
              className="from-gray-600/5 to-gray-800/5"
              containerClassName="from-gray-600/10 to-gray-800/10 border-gray-600/20 hover:border-gray-500/40"
              titleClassName="from-gray-500 to-gray-700"
            />
            <Card
              title="Git hooks & Commitlink"
              description="Enforce strong processes"
              icon="G"
              className="from-orange-500/5 to-red-500/5"
              containerClassName="from-orange-500/10 to-red-500/10 border-orange-500/20 hover:border-orange-400/40"
              titleClassName="from-orange-400 to-red-500"
            />
            <Card
              title="Vercel Dev Tools"
              description="For a better development experience"
              icon="🚀"
              className="from-blue-500/5 to-cyan-500/5"
              containerClassName="from-blue-500/10 to-cyan-500/10 border-blue-500/20 hover:border-blue-400/40"
              titleClassName="from-blue-400 to-cyan-500"
            />
            <Card
              title="Feature flags"
              description="A/B testing & gradual rollouts"
              icon="⚙️"
              className="from-teal-500/5 to-green-500/5"
              containerClassName="from-teal-500/10 to-green-500/10 border-teal-500/20 hover:border-teal-400/40"
              titleClassName="from-teal-400 to-green-500"
            />
            <Card
              title="Error management"
              description="Sentry for error tracking"
              icon="🛠️"
              className="from-gray-500 /5 to-gray-700/5"
              containerClassName="from-gray-500/10 to-gray-700/10 border-gray-500/20 hover:border-gray-400/40"
              titleClassName="from-gray-400 to-gray-600"
            />
            <Card
              title="Docker"
              description="Containerized development"
              icon="🐳"
              className="from-blue-600/5 to-blue-800/5"
              containerClassName="from-blue-600/10 to-blue-800/10 border-blue-600/20 hover:border-blue-500/40"
              titleClassName="from-blue-500 to-blue-700"
            />
          </div>

          {/* Additional Features Banner */}
          {/* <div className="mt-16 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 border border-purple-500/20 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Plus Many More Integrations
              </h3>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-zinc-300">
                <span className="bg-zinc-800/50 px-3 py-1 rounded-full">
                  Stripe Payments
                </span>
                <span className="bg-zinc-800/50 px-3 py-1 rounded-full">
                  Email Templates
                </span>
                <span className="bg-zinc-800/50 px-3 py-1 rounded-full">
                  Dark Mode
                </span>
                <span className="bg-zinc-800/50 px-3 py-1 rounded-full">
                  SEO Optimized
                </span>
                <span className="bg-zinc-800/50 px-3 py-1 rounded-full">
                  Analytics
                </span>
                <span className="bg-zinc-800/50 px-3 py-1 rounded-full">
                  Error Tracking
                </span>
                <span className="bg-zinc-800/50 px-3 py-1 rounded-full">
                  Testing Setup
                </span>
                <span className="bg-zinc-800/50 px-3 py-1 rounded-full">
                  Docker Support
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  )
}
