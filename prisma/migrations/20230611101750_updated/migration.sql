/*
  Warnings:

  - You are about to drop the column `text` on the `Prompt` table. All the data in the column will be lost.
  - Added the required column `prompt` to the `Prompt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `response` to the `Prompt` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Prompt" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "prompt" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);
INSERT INTO "new_Prompt" ("createdAt", "id", "updatedAt", "userId") SELECT "createdAt", "id", "updatedAt", "userId" FROM "Prompt";
DROP TABLE "Prompt";
ALTER TABLE "new_Prompt" RENAME TO "Prompt";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
