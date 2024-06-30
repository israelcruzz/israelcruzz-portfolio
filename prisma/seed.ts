import { IProject, IProjectSection, ITech, db } from "./index";

async function seed() {
  await db.projectSection.deleteMany();
  await db.project.deleteMany();
  await db.tech.deleteMany();

  const technologies: ITech[] = [
    { name: "Html", icon: "FaHtml5", exp: 3 },
    { name: "Css", icon: "FaCss3Alt", exp: 3 },
    { name: "Tailwind", icon: "SiTailwindcss", exp: 3 },
    { name: "Bootstrap", icon: "FaBootstrap", exp: 3 },
    { name: "Javascript", icon: "FaJsSquare", exp: 3 },
    { name: "Typescript", icon: "SiTypescript", exp: 1 },
    { name: "ReactJs", icon: "FaReact", exp: 3 },
    { name: "NextJs", icon: "SiNextdotjs", exp: 1 },
    { name: "ReactNative", icon: "FaReact", exp: 1 },
    { name: "Expo", icon: "SiExpo", exp: 1 },
    { name: "NodeJs", icon: "FaNodeJs", exp: 1 },
    { name: "Bun", icon: "SiBun", exp: 1 },
    { name: "Express", icon: "SiExpress", exp: 1 },
    { name: "Fastify", icon: "SiFastify", exp: 1 },
    { name: "NestJs", icon: "SiNestjs", exp: 1 },
    { name: "Elysia", icon: "SiElysia", exp: 1 },
    { name: "Prisma", icon: "SiPrisma", exp: 1 },
    { name: "MongoDB", icon: "SiMongodb", exp: 1 },
    { name: "Sql", icon: "SiMysql", exp: 3 },
    { name: "Docker", icon: "FaDocker", exp: 1 },
    { name: "Vitest", icon: "SiVitest", exp: 1 },
    { name: "Jest", icon: "SiJest", exp: 1 },
    { name: "Kafka", icon: "SiApachekafka", exp: 1 },
    { name: "Figma", icon: "FaFigma", exp: 3 },
    { name: "Git", icon: "FaGitAlt", exp: 3 },
    { name: "GitHub", icon: "FaGithub", exp: 3 },
    { name: "Php", icon: "FaPhp", exp: 3 },
  ];

  const technologiesCreated: ITech[] = [];
  for (let tech of technologies) {
    const techCreated = await db.tech.create({
      data: tech,
    });

    technologiesCreated.push(techCreated);

    console.log(`Tech ${tech.name} Created`);
  }

  const projects: IProject[] = [
    {
      title: "DuoFinders",
      description: "Uma plataforma fullstack para encontrar parceiros de jogo.",
      repoUri: "https://github.com/israelcruzz/DuoFinders",
      deployUri: "https://my-awesome-project.com",
      thumbUri:
        "https://github.com/israelcruzz/DuoFinders/blob/main/@duofinders-thumb.png?raw=true",
      techs: {
        connect: [
          { id: technologiesCreated[5].id },
          { id: technologiesCreated[7].id },
          { id: technologiesCreated[8].id },
          { id: technologiesCreated[9].id },
          { id: technologiesCreated[10].id },
          { id: technologiesCreated[13].id },
          { id: technologiesCreated[16].id },
          { id: technologiesCreated[18].id },
          { id: technologiesCreated[20].id },
          { id: technologiesCreated[23].id },
          { id: technologiesCreated[2].id },
        ],
      },
    },
    {
      title: "RocketNotes",
      description:
        "Projeto de uma plataforma para notas, podendo criar, deletar, atualizar e deletar.",
      repoUri: "https://github.com/israelcruzz/duoFindersNotesWeb",
      deployUri: "https://my-awesome-project.com",
      thumbUri:
        "https://github.com/israelcruzz/duoFindersNotesWeb/blob/main/src/assets/SignIn.png?raw=true",
      techs: {
        connect: [
          { id: technologiesCreated[0].id },
          { id: technologiesCreated[2].id },
          { id: technologiesCreated[5].id },
          { id: technologiesCreated[6].id },
          { id: technologiesCreated[10].id },
          { id: technologiesCreated[14].id },
          { id: technologiesCreated[16].id },
          { id: technologiesCreated[17].id },
          { id: technologiesCreated[18].id },
          { id: technologiesCreated[20].id },
        ],
      },
    },
    {
      title: "Ai Train App",
      description:
        "O AiTrain é um aplicativo móvel desenvolvido em React Native que permite aos usuários gerar treinos personalizados para a academia.",
      repoUri: "https://github.com/israelcruzz/ai-train-app",
      deployUri: "https://my-awesome-project.com",
      thumbUri:
        "https://github.com/israelcruzz/ai-train-app/blob/main/assets/thumb.png?raw=true",
      techs: {
        connect: [
          { id: technologiesCreated[8].id },
          { id: technologiesCreated[9].id },
        ],
      },
    },
    {
      title: "DevStore",
      description: "E-commerce de camisetas utilizando Next13.",
      repoUri: "https://github.com/israelcruzz/devstore",
      deployUri: "https://my-awesome-project.com",
      thumbUri:
        "https://github.com/israelcruzz/devstore/raw/main/public/home%20(6).png",
      techs: {
        connect: [
          { id: technologiesCreated[7].id },
          { id: technologiesCreated[2].id },
          { id: technologiesCreated[16].id },
        ],
      },
    },
    {
      title: "Teacher Access",
      description:
        "Este projeto desenvolve uma plataforma web que permite que professores criem suas contas, gerenciem seus alunos e cursos, e enviem lições por e-mail. A plataforma visa facilitar a comunicação entre professores e alunos, otimizando o processo de ensino e aprendizagem.",
      repoUri: "https://github.com/israelcruzz/teacherAccess",
      deployUri: "https://my-awesome-project.com",
      thumbUri:
        "https://github.com/israelcruzz/teacherAccess/raw/main/src/assets/Register%20(1).png",
      techs: {
        connect: [
          { id: technologiesCreated[5].id },
          { id: technologiesCreated[6].id },
          { id: technologiesCreated[2].id },
          { id: technologiesCreated[10].id },
          { id: technologiesCreated[12].id },
          { id: technologiesCreated[16].id },
          { id: technologiesCreated[18].id },
          { id: technologiesCreated[19].id },
          { id: technologiesCreated[23].id },
        ],
      },
    },
    {
      title: "Tech Blog",
      description:
        "Este projeto é um blog simples onde os usuários podem visualizar, criar e acessar posts sobre games e tecnologias. Utiliza PHP e MySQL para o backend, e Tailwind CSS para estilização.",
      repoUri: "https://github.com/israelcruzz/tech-blog",
      deployUri: "https://my-awesome-project.com",
      thumbUri:
        "https://github.com/israelcruzz/tech-blog/blob/main/assets/images/create.png?raw=true",
      techs: {
        connect: [
          { id: technologiesCreated[0].id },
          { id: technologiesCreated[2].id },
          { id: technologiesCreated[23].id },
          { id: technologiesCreated[26].id },
        ],
      },
    },
  ];

  const projectsCreated: IProject[] = [];
  for (let project of projects) {
    const proj: IProject = await db.project.create({
      data: project,
    });

    projectsCreated.push(proj);

    console.log(`Project ${project.title} Created`);
  }

  const duoFindersSections: IProjectSection[] = [
    {
      name: "Login Web",
      imageUri:
        "https://github.com/israelcruzz/DuoFinders/blob/main/assets/images/web/image%2012.png?raw=true",
      projectId: projectsCreated[0].id!,
    },
    {
      name: "Home 1 Web",
      imageUri:
        "https://raw.githubusercontent.com/israelcruzz/DuoFinders/main/assets/images/web/image%203.png",
      projectId: projectsCreated[0].id!,
    },
    {
      name: "Home 2 Web",
      imageUri:
        "https://github.com/israelcruzz/DuoFinders/blob/main/assets/images/web/image%204.png?raw=true",
      projectId: projectsCreated[0].id!,
    },
    {
      name: "Games Web",
      imageUri:
        "https://github.com/israelcruzz/DuoFinders/blob/main/assets/images/web/image%205.png?raw=true",
      projectId: projectsCreated[0].id!,
    },
    {
      name: "Pesquisar Games Web",
      imageUri:
        "https://github.com/israelcruzz/DuoFinders/blob/main/assets/images/web/image%2010.png?raw=true",
      projectId: projectsCreated[0].id!,
    },
    {
      name: "Anúncios do Game Web",
      imageUri:
        "https://github.com/israelcruzz/DuoFinders/blob/main/assets/images/web/image%206.png?raw=true",
      projectId: projectsCreated[0].id!,
    },
    {
      name: "Visualizar o Discord Web",
      imageUri:
        "https://github.com/israelcruzz/DuoFinders/blob/main/assets/images/web/image%207.png?raw=true",
      projectId: projectsCreated[0].id!,
    },
    {
      name: "Criar Anúncio Web",
      imageUri:
        "https://github.com/israelcruzz/DuoFinders/blob/main/assets/images/web/image%209.png?raw=true",
      projectId: projectsCreated[0].id!,
    },
    {
      name: "Perfil Web",
      imageUri:
        "https://github.com/israelcruzz/DuoFinders/blob/main/assets/images/web/image%208.png?raw=true",
      projectId: projectsCreated[0].id!,
    },
    {
      name: "Carregando Web",
      imageUri:
        "https://github.com/israelcruzz/DuoFinders/blob/main/assets/images/web/image%2011.png?raw=true",
      projectId: projectsCreated[0].id!,
    },
    {
      name: "Login Mobile",
      imageUri:
        "https://github.com/israelcruzz/DuoFinders/blob/main/assets/images/mobile/Mobile%20Login.png?raw=true",
      projectId: projectsCreated[0].id!,
    },
    {
      name: "Home Mobile",
      imageUri:
        "https://github.com/israelcruzz/DuoFinders/blob/main/assets/images/mobile/Mobile%20Home.png?raw=true",
      projectId: projectsCreated[0].id!,
    },
    {
      name: "Games Mobile",
      imageUri:
        "https://github.com/israelcruzz/DuoFinders/blob/main/assets/images/mobile/Mobile%20Games.png?raw=true",
      projectId: projectsCreated[0].id!,
    },
    {
      name: "Anúncios do Game Mobile",
      imageUri:
        "https://github.com/israelcruzz/DuoFinders/blob/main/assets/images/mobile/Mobile%20adGame.png?raw=true",
      projectId: projectsCreated[0].id!,
    },
    {
      name: "Visualizar o Discord Mobile",
      imageUri:
        "https://github.com/israelcruzz/DuoFinders/blob/main/assets/images/mobile/Mobile%20adGame%20(1).png?raw=true",
      projectId: projectsCreated[0].id!,
    },
    {
      name: "Perfil Mobile",
      imageUri:
        "https://github.com/israelcruzz/DuoFinders/blob/main/assets/images/mobile/Mobile%20Profile.png?raw=true",
      projectId: projectsCreated[0].id!,
    },
  ];

  const rocketNotesSections: IProjectSection[] = [
    {
      name: "Login",
      imageUri:
        "https://github.com/israelcruzz/duoFindersNotesWeb/blob/main/src/assets/SignIn.png?raw=true",
      projectId: projectsCreated[1].id!,
    },
    {
      name: "Registro",
      imageUri:
        "https://github.com/israelcruzz/duoFindersNotesWeb/blob/main/src/assets/SignUp.png?raw=true",
      projectId: projectsCreated[1].id!,
    },
    {
      name: "Home",
      imageUri:
        "https://github.com/israelcruzz/duoFindersNotesWeb/blob/main/src/assets/Home.png?raw=true",
      projectId: projectsCreated[1].id!,
    },
    {
      name: "Perfil",
      imageUri:
        "https://github.com/israelcruzz/duoFindersNotesWeb/blob/main/src/assets/Perfil.png?raw=true",
      projectId: projectsCreated[1].id!,
    },
    {
      name: "Criar Nota",
      imageUri:
        "https://github.com/israelcruzz/duoFindersNotesWeb/blob/main/src/assets/Note%20Create.png?raw=true",
      projectId: projectsCreated[1].id!,
    },
    {
      name: "Visualizar Nota",
      imageUri:
        "https://github.com/israelcruzz/duoFindersNotesWeb/blob/main/src/assets/Note%20Preview.png?raw=true",
      projectId: projectsCreated[1].id!,
    },
  ];

  const aiTrainSections: IProjectSection[] = [
    {
      name: "Início",
      imageUri:
        "https://github.com/israelcruzz/ai-train-app/blob/main/app/assets/Init.png?raw=true",
      projectId: projectsCreated[2].id!,
    },
    {
      name: "Home",
      imageUri:
        "https://github.com/israelcruzz/ai-train-app/blob/main/app/assets/Home.png?raw=true",
      projectId: projectsCreated[2].id!,
    },
    {
      name: "Treino Criado",
      imageUri:
        "https://github.com/israelcruzz/ai-train-app/blob/main/app/assets/Train.png?raw=true",
      projectId: projectsCreated[2].id!,
    },
    {
      name: "Visualizar Treino",
      imageUri:
        "https://github.com/israelcruzz/ai-train-app/blob/main/app/assets/Train%20Screen.png?raw=true",
      projectId: projectsCreated[2].id!,
    },
    {
      name: "Treinos Favoritos",
      imageUri:
        "https://github.com/israelcruzz/ai-train-app/blob/main/app/assets/Favorites.png?raw=true",
      projectId: projectsCreated[2].id!,
    },
  ];

  const devStoreSections: IProjectSection[] = [
    {
      name: "Home",
      imageUri:
        "https://github.com/israelcruzz/devstore/blob/main/public/home.png?raw=true",
      projectId: projectsCreated[3].id!,
    },
    {
      name: "Pesquisa",
      imageUri:
        "https://github.com/israelcruzz/devstore/blob/main/public/search.png?raw=true",
      projectId: projectsCreated[3].id!,
    },
    {
      name: "Comprar Camiseta",
      imageUri:
        "https://github.com/israelcruzz/devstore/blob/main/public/add-to-cart-page.png?raw=true",
      projectId: projectsCreated[3].id!,
    },
  ];

  const teacherAccessSections: IProjectSection[] = [
    {
      name: "Registro",
      imageUri:
        "https://github.com/israelcruzz/teacherAccess/raw/main/src/assets/Register%20(1).png?raw=true",
      projectId: projectsCreated[4].id!,
    },
    {
      name: "Login",
      imageUri:
        "https://github.com/israelcruzz/teacherAccess/blob/main/src/assets/Login.png?raw=true",
      projectId: projectsCreated[4].id!,
    },
    {
      name: "Home",
      imageUri:
        "https://github.com/israelcruzz/teacherAccess/blob/main/src/assets/Home.png?raw=true",
      projectId: projectsCreated[4].id!,
    },
    {
      name: "Enviar Lição",
      imageUri:
        "https://github.com/israelcruzz/teacherAccess/blob/main/src/assets/Send%20Lesson.png?raw=true",
      projectId: projectsCreated[4].id!,
    },
    {
      name: "Criar Estudante",
      imageUri:
        "https://github.com/israelcruzz/teacherAccess/blob/main/src/assets/Create%20Student.png?raw=true",
      projectId: projectsCreated[4].id!,
    },
    {
      name: "Editar Perfil",
      imageUri:
        "https://github.com/israelcruzz/teacherAccess/blob/main/src/assets/Delete%20Student-1.png?raw=true",
      projectId: projectsCreated[4].id!,
    },
    {
      name: "Deletar Estudante",
      imageUri:
        "https://github.com/israelcruzz/teacherAccess/blob/main/src/assets/Delete%20Student.png?raw=true",
      projectId: projectsCreated[4].id!,
    },
    {
      name: "Editar Estudante",
      imageUri:
        "https://github.com/israelcruzz/teacherAccess/blob/main/src/assets/Edit%20Student.png?raw=true",
      projectId: projectsCreated[4].id!,
    },
  ];

  const techBlogSections: IProjectSection[] = [
    {
      name: "Home 1",
      imageUri:
        "https://github.com/israelcruzz/tech-blog/raw/main/assets/images/home.png?raw=true",
      projectId: projectsCreated[5].id!,
    },
    {
      name: "Home 2",
      imageUri:
        "https://github.com/israelcruzz/tech-blog/raw/main/assets/images/home-02.png?raw=true",
      projectId: projectsCreated[5].id!,
    },
    {
      name: "Criar Post",
      imageUri:
        "https://github.com/israelcruzz/tech-blog/raw/main/assets/images/create.png?raw=true",
      projectId: projectsCreated[5].id!,
    },
    {
      name: "Visualizar Post",
      imageUri:
        "https://github.com/israelcruzz/tech-blog/raw/main/assets/images/post.png?raw=true",
      projectId: projectsCreated[5].id!,
    },
  ];

  for (let proj of duoFindersSections) {
    const projCreated = await db.projectSection.create({
      data: proj,
    });

    console.log(`Project Section ${projCreated.name} Created`);
  }

  for (let proj of rocketNotesSections) {
    const projCreated = await db.projectSection.create({
      data: proj,
    });

    console.log(`Project Section ${projCreated.name} Created`);
  }

  for (let proj of aiTrainSections) {
    const projCreated = await db.projectSection.create({
      data: proj,
    });

    console.log(`Project Section ${projCreated.name} Created`);
  }

  for (let proj of devStoreSections) {
    const projCreated = await db.projectSection.create({
      data: proj,
    });

    console.log(`Project Section ${projCreated.name} Created`);
  }

  for (let proj of teacherAccessSections) {
    const projCreated = await db.projectSection.create({
      data: proj,
    });

    console.log(`Project Section ${projCreated.name} Created`);
  }

  for (let proj of techBlogSections) {
    const projCreated = await db.projectSection.create({
      data: proj,
    });

    console.log(`Project Section ${projCreated.name} Created`);
  }
}

seed()
  .catch((err) => console.log("Error in Created Seed: " + err))
  .finally(() => console.log("🐳 Seed Created!"));
