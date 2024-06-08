import Image from "next/image";

export const HeroSection = () => {
  return (
    <main className="grid grid-cols-1 py-6 gap-6 md:grid-cols-2 items-center md:gap-[130px] md:py-12">
      <section>
        <span>Desenvolvedor Fullstack</span>
        <h1>Israel Cruz</h1>

        <p>
          Olá, meu nome é Israel Cruz e sou um desenvolvedor fullstack
          apaixonado por tecnologia. Meu objetivo é criar interfaces de usuário
          bonitas e funcionais, além de liderar equipes técnicas em projetos
          desafiadores. Estou sempre aberto a novas oportunidades e desafios.
        </p>
      </section>

      <section className="flex-1">
        <Image
          src="/images/israelcruzz-photo.jpg"
          quality={100}
          width={420}
          height={404}
          alt="Photo Israel Cruz"
          className="w-full h-full object-cover rounded-lg"
        />
      </section>
    </main>
  );
};
