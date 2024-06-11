import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "../button";
import { Input } from "../input";
import { IntroSection } from "../intro-section";

export const ContactSection = () => {
  return (
    <main
      id="contact"
      className="bg-gray-800/40 px-[510px] py-[128px] flex flex-col justify-center items-center w-full"
    >
      <IntroSection title="contato" />

      <div className="text-2xl font-medium leading-9 text-gray-300 text-center mt-1 mb-4">
        <h1>Vamos trabalhar juntos?</h1>
        <span>Entre em contato</span>
      </div>

      <form className="w-full flex flex-col">
        <div className="w-full flex flex-col gap-4">
          <Input type="text" placeholder="Digite seu nome..." />
          <Input type="text" placeholder="Digite seu e-mail..." />

          <textarea
            name=""
            id=""
            placeholder="Digite sua mensagem..."
            className="w-full p-4 bg-gray-800 text-base font-normal leading-6 text-gray-400 rounded-lg mb-4"
          />
        </div>

        <Button>
          <h1>Entre em contato</h1>
          <HiArrowNarrowRight size={24} color="#FFFFFF" />
        </Button>
      </form>
    </main>
  );
};
