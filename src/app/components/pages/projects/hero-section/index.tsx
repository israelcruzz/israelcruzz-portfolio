import { IntroSection } from "@/app/components/intro-section";
import { ProjectSection } from "@/app/components/project-section";
import { TextLink } from "@/app/components/text-link";
import { IoIosArrowRoundBack } from "react-icons/io";

export const HeroSection = () => {
  return (
    <ProjectSection>
      <section className="text-center">
        <IntroSection title="projetos" />
        <h1 className="text-4xl font-medium leading-9 text-gray-300 mt-3">
          Meus Projetos
        </h1>
        <p className="text-gray-400 text-base font-normal leading-6 mt-6">
          Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à
          vontade e explore os projetos para ver como foram criados, as
          tecnologias utilizadas e as funcionalidades implementadas.
        </p>
      </section>

      <TextLink uri="/">
        <IoIosArrowRoundBack size={24} />
        <span>Voltar para a Home</span>
      </TextLink>
    </ProjectSection>
  );
};
