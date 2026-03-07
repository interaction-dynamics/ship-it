import { getPlans } from '@/adapters/payment';
import { Section } from '@/components/section';
import { CheckoutForm } from './_components/checkout-form';

export default async function CheckoutPage() {
  const plans = await getPlans();

  return <Section title="Checkout">{plans && <CheckoutForm plans={plans} />}</Section>;
}
