-- CreateTable
CREATE TABLE "Complexity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,

    CONSTRAINT "Complexity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusinessCaseComplexity" (
    "id" TEXT NOT NULL,
    "note" INTEGER NOT NULL,
    "final_note" INTEGER NOT NULL,
    "idBusinessCase" TEXT NOT NULL,
    "idComplexity" TEXT NOT NULL,

    CONSTRAINT "BusinessCaseComplexity_pkey" PRIMARY KEY ("id")
);
