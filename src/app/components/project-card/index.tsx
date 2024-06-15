import Image from "next/image";
import Link from "next/link";

export const ProjectCard = () => {
  return (
    <Link href="/" className="w-full h-[416px] bg-gray-800 opacity-70 hover:opacity-100 rounded-lg flex flex-col overflow-hidden transition-all group">
      <div className="w-full h-[192px]">
        <Image
          src="/images/example-project.png"
          className="object-cover w-full h-full group-hover:scale-110"
          alt=""
          quality={100}
          width={350}
          height={192}
        />
      </div>

      <div className="w-full h-full p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-base font-medium text-gray-50 leading-6">
            BookWise
          </h3>
          <p className="text-base font-normal text-gray-400 leading-6">
            BookWise é uma plataforma de avaliação de livros que foi
            desenvolvida durante o bootcamp Ignite da Rocketseat.
          </p>
        </div>

        <span className="text-gray-300 text-sm font-medium leading-5">
          NextJs, ReactJs, NodeJs
        </span>
      </div>
    </Link>
  );
};
