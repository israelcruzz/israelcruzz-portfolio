import { ProjectInfo } from "@/app/components/project-info";

export const ProjectInfoSection = () => {
  return (
    <div className="container flex flex-col gap-6">
      {Array.from({ length: 4 }).map((_, i) => {
        return (
          <ProjectInfo title="Login" imageUri="/images/example.png" key={i} />
        );
      })}
    </div>
  );
};
