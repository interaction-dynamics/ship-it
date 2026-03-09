import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text
} from '@react-email/components';

interface WelcomeEmailProps {
  url: string;
}

export function WelcomeEmail(props: WelcomeEmailProps) {
  const { url } = props;

  return (
    <Tailwind>
      <Html lang="en" className="bg-black">
        <Head />
        {/*<Preview>Welcome to Ship It!</Preview>*/}
        <Body className="bg-black font-sans">
          <Container className="bg-black mx-auto max-w-[560px] px-5 py-10">
            <Section className="rounded-xl bg-[#111111] px-10 py-12">
              <Text className="m-0 mb-4 text-[28px] font-bold leading-tight text-white">
                Welcome to Ship It!
              </Text>
              <Text className="m-0 mb-8 text-base leading-relaxed text-neutral-400">
                You're all set. Start shipping your next project today.
              </Text>
              <Button
                href={url}
                className="rounded-lg bg-white px-7 py-3.5 text-[15px] font-semibold text-black no-underline"
              >
                Get started
              </Button>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}

export default WelcomeEmail;
