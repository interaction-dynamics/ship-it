'use client'
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import { Cover } from '@/components/ui/cover'

import { Button } from '@/components/ui/button'
import { getRepositoryUrl } from '@/config/repository'
import { cn } from '@/lib/utils'
import { useTranslations } from '@/services/translation'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const { t } = useTranslations('landing')

  return (
    <section className="relative z-10 px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <div
          className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="flex flex-row items-center">
            <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
              <span
                className={cn(
                  'absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]'
                )}
                style={{
                  WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'destination-out',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'subtract',
                  WebkitClipPath: 'padding-box',
                }}
              />
              🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
              <AnimatedGradientText className="text-sm font-medium">
                {t('The most advanced Next')}
              </AnimatedGradientText>
              <ChevronRight
                className="ml-1 size-4 stroke-neutral-500 transition-transform
 duration-300 ease-in-out group-hover:translate-x-0.5"
              />
            </div>
          </div>

          {/* <div className="inline-flex items-center space-x-2 bg-zinc-900 px-4 py-2 rounded-full mb-8 border border-zinc-800">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-zinc-300">
              The most advanced Next.js boilerplate
            </span>
          </div> */}

          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Ship Your Next.js
            <br /> App <Cover>in Minutes</Cover>
          </h1>

          <p className="text-xl text-zinc-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            The ultimate production-ready Next.js boilerplate with
            authentication, database, payments, and everything you need to
            launch your SaaS faster than ever.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Button size="lg" variant="secondary" className="space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" className="space-x-2" asChild>
              <a
                href={getRepositoryUrl()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2"
              >
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>View on GitHub</span>
              </a>
            </Button>
          </div>

          {/* Command Line */}
          {/* <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-zinc-400">
                <Terminal className="w-4 h-4" />
                <span className="font-mono text-sm">
                  npx create-next-app@latest --example
                  {getRepositoryUrl()}
                </span>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(
                    `npx create-next-app@latest --example ${getRepositoryUrl()}`
                  )
                }
                className="p-2 hover:bg-zinc-800 rounded transition-colors"
              >
                {copiedCommand ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
