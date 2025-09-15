import { Section } from '@/components/section'
import { getPlans } from '@/services/payment'
import { CheckoutForm } from './_components/checkout-form'

export default async function CheckoutPage() {
  const plans = await getPlans()

  return (
    <Section title="Checkout">
      {plans && <CheckoutForm plans={plans} />}
    </Section>
  )
}
