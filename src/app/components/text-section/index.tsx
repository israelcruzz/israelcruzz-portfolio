import { Divider } from "../divider";
import { IntroSection } from "../intro-section";

interface TextSectionProps {
  title: string;
  heading: string;
}

export const TextSection = ({ title, heading }: TextSectionProps) => {
  return (
    <section>
      <div className="flex flex-col gap-3">
        <IntroSection title={title} />
        <h1 className="text-3xl leading-9 font-medium text-[#F9FAFB]">
          {heading}
        </h1>
      </div>

      <div className="mt-6 mb-12">
        <Divider />
      </div>
      
    </section>
  );
};
