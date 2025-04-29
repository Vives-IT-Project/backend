-- CreateEnum
CREATE TYPE "CostType" AS ENUM ('OPEX', 'CAPEX');

-- CreateTable
CREATE TABLE "Actor" (
    "id" TEXT NOT NULL,
    "idOrganization" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" INTEGER NOT NULL,

    CONSTRAINT "Actor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Allocation" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3),

    CONSTRAINT "Allocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Benefit" (
    "id" TEXT NOT NULL,
    "idBusinessCase" TEXT NOT NULL,
    "idAllocation" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "estimatedActual" BOOLEAN NOT NULL,
    "type" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Benefit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusinessCase" (
    "id" TEXT NOT NULL,
    "idOrganization" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "idTemplate" TEXT NOT NULL,
    "idProject" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "status" INTEGER NOT NULL,
    "version" INTEGER NOT NULL,
    "isTemplate" BOOLEAN NOT NULL,

    CONSTRAINT "BusinessCase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusinessCaseFeedback" (
    "id" TEXT NOT NULL,
    "givenBy" TEXT NOT NULL,
    "idBusinessCase" TEXT NOT NULL,
    "idFeedbackTarget" TEXT NOT NULL,
    "bcVersion" INTEGER NOT NULL,
    "grade" INTEGER NOT NULL,
    "feedback" TEXT NOT NULL,

    CONSTRAINT "BusinessCaseFeedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cost" (
    "id" TEXT NOT NULL,
    "idCostAllocation" TEXT NOT NULL,
    "idBusinessCase" TEXT NOT NULL,
    "idAllocation" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "estimatedActual" BOOLEAN NOT NULL,
    "type" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "period" TEXT NOT NULL,

    CONSTRAINT "Cost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CostAllocation" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "CostAllocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CostCenter" (
    "id" TEXT NOT NULL,
    "idOrganization" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CostCenter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "idOrganization" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Domain" (
    "id" TEXT NOT NULL,
    "idOrganization" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Domain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EvaluationTopic" (
    "id" TEXT NOT NULL,
    "idOrganization" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "EvaluationTopic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeedbackTarget" (
    "id" TEXT NOT NULL,
    "fieldName" TEXT NOT NULL,

    CONSTRAINT "FeedbackTarget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Goal" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "idOrganization" TEXT NOT NULL,

    CONSTRAINT "Goal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KPIS" (
    "id" TEXT NOT NULL,
    "idOrganization" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "target" DOUBLE PRECISION NOT NULL,
    "measureUnit" TEXT NOT NULL,

    CONSTRAINT "KPIS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Milestone" (
    "id" TEXT NOT NULL,
    "idBusinessCase" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "limitDate" TIMESTAMP(3) NOT NULL,
    "status" INTEGER NOT NULL,
    "concludedAt" TIMESTAMP(3),
    "priority" INTEGER NOT NULL,

    CONSTRAINT "Milestone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Objective" (
    "id" TEXT NOT NULL,
    "idOrganization" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Objective_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organization" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Portfolio" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Portfolio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "idPortfolio" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Risk" (
    "id" TEXT NOT NULL,
    "idBusinessCase" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "impactLevel" INTEGER NOT NULL,
    "probability" DOUBLE PRECISION NOT NULL,
    "mitigationStrategy" TEXT NOT NULL,

    CONSTRAINT "Risk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "idRole" TEXT NOT NULL,
    "idOrganization" TEXT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BusinessCaseActors" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_BusinessCaseActors_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_BusinessCaseToCostCenter" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_BusinessCaseToCostCenter_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_BusinessCaseToDomain" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_BusinessCaseToDomain_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_BusinessCaseToEvaluationTopic" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_BusinessCaseToEvaluationTopic_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_BusinessCaseToGoal" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_BusinessCaseToGoal_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_BusinessCaseToKPIS" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_BusinessCaseToKPIS_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_BusinessCaseToObjective" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_BusinessCaseToObjective_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "CostAllocation_description_key" ON "CostAllocation"("description");

-- CreateIndex
CREATE UNIQUE INDEX "FeedbackTarget_fieldName_key" ON "FeedbackTarget"("fieldName");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "_BusinessCaseActors_B_index" ON "_BusinessCaseActors"("B");

-- CreateIndex
CREATE INDEX "_BusinessCaseToCostCenter_B_index" ON "_BusinessCaseToCostCenter"("B");

-- CreateIndex
CREATE INDEX "_BusinessCaseToDomain_B_index" ON "_BusinessCaseToDomain"("B");

-- CreateIndex
CREATE INDEX "_BusinessCaseToEvaluationTopic_B_index" ON "_BusinessCaseToEvaluationTopic"("B");

-- CreateIndex
CREATE INDEX "_BusinessCaseToGoal_B_index" ON "_BusinessCaseToGoal"("B");

-- CreateIndex
CREATE INDEX "_BusinessCaseToKPIS_B_index" ON "_BusinessCaseToKPIS"("B");

-- CreateIndex
CREATE INDEX "_BusinessCaseToObjective_B_index" ON "_BusinessCaseToObjective"("B");

-- AddForeignKey
ALTER TABLE "Actor" ADD CONSTRAINT "Actor_idOrganization_fkey" FOREIGN KEY ("idOrganization") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Benefit" ADD CONSTRAINT "Benefit_idAllocation_fkey" FOREIGN KEY ("idAllocation") REFERENCES "Allocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Benefit" ADD CONSTRAINT "Benefit_idBusinessCase_fkey" FOREIGN KEY ("idBusinessCase") REFERENCES "BusinessCase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BusinessCase" ADD CONSTRAINT "BusinessCase_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BusinessCase" ADD CONSTRAINT "BusinessCase_idOrganization_fkey" FOREIGN KEY ("idOrganization") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BusinessCase" ADD CONSTRAINT "BusinessCase_idProject_fkey" FOREIGN KEY ("idProject") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BusinessCaseFeedback" ADD CONSTRAINT "BusinessCaseFeedback_givenBy_fkey" FOREIGN KEY ("givenBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BusinessCaseFeedback" ADD CONSTRAINT "BusinessCaseFeedback_idBusinessCase_fkey" FOREIGN KEY ("idBusinessCase") REFERENCES "BusinessCase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BusinessCaseFeedback" ADD CONSTRAINT "BusinessCaseFeedback_idFeedbackTarget_fkey" FOREIGN KEY ("idFeedbackTarget") REFERENCES "FeedbackTarget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cost" ADD CONSTRAINT "Cost_idAllocation_fkey" FOREIGN KEY ("idAllocation") REFERENCES "Allocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cost" ADD CONSTRAINT "Cost_idBusinessCase_fkey" FOREIGN KEY ("idBusinessCase") REFERENCES "BusinessCase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cost" ADD CONSTRAINT "Cost_idCostAllocation_fkey" FOREIGN KEY ("idCostAllocation") REFERENCES "CostAllocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CostCenter" ADD CONSTRAINT "CostCenter_idOrganization_fkey" FOREIGN KEY ("idOrganization") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_idOrganization_fkey" FOREIGN KEY ("idOrganization") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Domain" ADD CONSTRAINT "Domain_idOrganization_fkey" FOREIGN KEY ("idOrganization") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvaluationTopic" ADD CONSTRAINT "EvaluationTopic_idOrganization_fkey" FOREIGN KEY ("idOrganization") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_idOrganization_fkey" FOREIGN KEY ("idOrganization") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KPIS" ADD CONSTRAINT "KPIS_idOrganization_fkey" FOREIGN KEY ("idOrganization") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Milestone" ADD CONSTRAINT "Milestone_idBusinessCase_fkey" FOREIGN KEY ("idBusinessCase") REFERENCES "BusinessCase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Objective" ADD CONSTRAINT "Objective_idOrganization_fkey" FOREIGN KEY ("idOrganization") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_idPortfolio_fkey" FOREIGN KEY ("idPortfolio") REFERENCES "Portfolio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Risk" ADD CONSTRAINT "Risk_idBusinessCase_fkey" FOREIGN KEY ("idBusinessCase") REFERENCES "BusinessCase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_idOrganization_fkey" FOREIGN KEY ("idOrganization") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_idRole_fkey" FOREIGN KEY ("idRole") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BusinessCaseActors" ADD CONSTRAINT "_BusinessCaseActors_A_fkey" FOREIGN KEY ("A") REFERENCES "Actor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BusinessCaseActors" ADD CONSTRAINT "_BusinessCaseActors_B_fkey" FOREIGN KEY ("B") REFERENCES "BusinessCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BusinessCaseToCostCenter" ADD CONSTRAINT "_BusinessCaseToCostCenter_A_fkey" FOREIGN KEY ("A") REFERENCES "BusinessCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BusinessCaseToCostCenter" ADD CONSTRAINT "_BusinessCaseToCostCenter_B_fkey" FOREIGN KEY ("B") REFERENCES "CostCenter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BusinessCaseToDomain" ADD CONSTRAINT "_BusinessCaseToDomain_A_fkey" FOREIGN KEY ("A") REFERENCES "BusinessCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BusinessCaseToDomain" ADD CONSTRAINT "_BusinessCaseToDomain_B_fkey" FOREIGN KEY ("B") REFERENCES "Domain"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BusinessCaseToEvaluationTopic" ADD CONSTRAINT "_BusinessCaseToEvaluationTopic_A_fkey" FOREIGN KEY ("A") REFERENCES "BusinessCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BusinessCaseToEvaluationTopic" ADD CONSTRAINT "_BusinessCaseToEvaluationTopic_B_fkey" FOREIGN KEY ("B") REFERENCES "EvaluationTopic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BusinessCaseToGoal" ADD CONSTRAINT "_BusinessCaseToGoal_A_fkey" FOREIGN KEY ("A") REFERENCES "BusinessCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BusinessCaseToGoal" ADD CONSTRAINT "_BusinessCaseToGoal_B_fkey" FOREIGN KEY ("B") REFERENCES "Goal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BusinessCaseToKPIS" ADD CONSTRAINT "_BusinessCaseToKPIS_A_fkey" FOREIGN KEY ("A") REFERENCES "BusinessCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BusinessCaseToKPIS" ADD CONSTRAINT "_BusinessCaseToKPIS_B_fkey" FOREIGN KEY ("B") REFERENCES "KPIS"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BusinessCaseToObjective" ADD CONSTRAINT "_BusinessCaseToObjective_A_fkey" FOREIGN KEY ("A") REFERENCES "BusinessCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BusinessCaseToObjective" ADD CONSTRAINT "_BusinessCaseToObjective_B_fkey" FOREIGN KEY ("B") REFERENCES "Objective"("id") ON DELETE CASCADE ON UPDATE CASCADE;
