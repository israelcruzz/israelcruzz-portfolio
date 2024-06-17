-- CreateTable
CREATE TABLE "techs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "exp" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "repoUri" TEXT NOT NULL,
    "deployUri" TEXT NOT NULL,
    "thumbUri" TEXT NOT NULL,
    "projectSectionId" TEXT NOT NULL,
    CONSTRAINT "projects_projectSectionId_fkey" FOREIGN KEY ("projectSectionId") REFERENCES "projects_sections" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "projects_sections" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "imageUri" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProjectToTech" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ProjectToTech_A_fkey" FOREIGN KEY ("A") REFERENCES "projects" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProjectToTech_B_fkey" FOREIGN KEY ("B") REFERENCES "techs" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToTech_AB_unique" ON "_ProjectToTech"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToTech_B_index" ON "_ProjectToTech"("B");
