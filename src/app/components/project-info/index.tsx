import Image from "next/image";

interface ProjectInfoProps {
  title: string;
  imageUri: string;
}

export const ProjectInfo = ({ title, imageUri }: ProjectInfoProps) => {
  return (
    <>
      <h1 className="text-3xl font-medium text-gray-300 leading-9 text-center">
        {title}
      </h1>
      <Image
        src={imageUri}
        width={1080}
        height={672}
        alt={`${title} image project`}
        quality={100}
        className="w-full object-cover rounded-lg"
      />
    </>
  );
};
