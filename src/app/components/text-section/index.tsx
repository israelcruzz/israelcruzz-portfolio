import { IntroSection } from "../intro-section";

interface TextSectionProps {
  title: string;
  heading: string;
}

export const TextSection = ({ title, heading }: TextSectionProps) => {
  return (
    <section>
      <IntroSection title={title} />
      <h1 className="text-3xl leading-9 font-medium text-[#F9FAFB]">
        {heading}
      </h1>
    </section>
  );
};
