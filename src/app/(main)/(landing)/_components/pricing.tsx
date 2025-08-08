import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CheckIcon } from 'lucide-react'

const tiers = [
  {
    name: 'Hobby',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: 'Free',
    description: "The perfect plan if you're have a small project.",
    features: [
      'Mailgun integration',
      'Analytics integration',
      'Authentication integration',
      'Github support',
    ],
    featured: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$99',
    description: 'The best plan for large businesses with advanced needs.',
    features: [
      'Database integration',
      'Stripe integration',
      'All the new updates forever',
      'Integrations switch',
      'Priority support',
    ],
    featured: true,
  },
]

export function Pricing() {
  return (
    <section className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Choose the right plan for you
        </h2>
        <p className="text-xl text-muted-foreground  max-w-3xl mx-auto">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={cn(
              tier.featured
                ? 'relative bg-primary shadow-2xl'
                : 'bg-card sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                  ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                  : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10'
            )}
          >
            <h3
              id={tier.id}
              className={cn(
                tier.featured ? 'text-indigo-400' : 'text-indigo-600',
                'text-base/7 font-semibold'
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={cn(
                  tier.featured
                    ? 'text-primary-foreground'
                    : 'text-card-foreground',
                  'text-5xl font-semibold tracking-tight'
                )}
              >
                {tier.priceMonthly}
              </span>
              {/* <span
                className={cn(
                  tier.featured ? 'text-gray-400' : 'text-gray-500',
                  'text-base'
                )}
              >
                /month
              </span> */}
            </p>
            <p
              className={cn(
                tier.featured
                  ? 'text-primary-foreground'
                  : 'text-card-foreground',
                'mt-6 text-base/7'
              )}
            >
              {tier.description}
            </p>
            <ul
              role="list"
              className={cn(
                tier.featured
                  ? 'text-muted-foreground'
                  : 'text-muted-foreground',
                'mt-8 space-y-3 text-sm/6 sm:mt-10'
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={cn(
                      tier.featured ? 'text-indigo-400' : 'text-indigo-600',
                      'h-6 w-5 flex-none'
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              variant={tier.featured ? 'secondary' : 'outline'}
              className="mt-8 w-full"
            >
              Get started today
            </Button>
            {/* <a
              href={tier.href}
              aria-describedby={tier.id}
              className={cn(
                tier.featured
                  ? 'bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500'
                  : 'text-indigo-600 inset-ring inset-ring-indigo-200 hover:inset-ring-indigo-300 focus-visible:outline-indigo-600',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10'
              )}
            >
              Get started today
            </a> */}
          </div>
        ))}
      </div>
    </section>
  )
}
