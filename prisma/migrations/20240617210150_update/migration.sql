/*
  Warnings:

  - You are about to drop the column `projectSectionId` on the `projects` table. All the data in the column will be lost.
  - Added the required column `projectId` to the `projects_sections` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "repoUri" TEXT NOT NULL,
    "deployUri" TEXT NOT NULL,
    "thumbUri" TEXT NOT NULL
);
INSERT INTO "new_projects" ("deployUri", "description", "id", "repoUri", "thumbUri", "title") SELECT "deployUri", "description", "id", "repoUri", "thumbUri", "title" FROM "projects";
DROP TABLE "projects";
ALTER TABLE "new_projects" RENAME TO "projects";
CREATE TABLE "new_projects_sections" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "imageUri" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    CONSTRAINT "projects_sections_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_projects_sections" ("id", "imageUri", "name") SELECT "id", "imageUri", "name" FROM "projects_sections";
DROP TABLE "projects_sections";
ALTER TABLE "new_projects_sections" RENAME TO "projects_sections";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
