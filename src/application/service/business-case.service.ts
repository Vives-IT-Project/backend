import { BusinessCase, BusinessCaseStatus } from "@prisma/client";
import BusinessCaseRepository from "../../infrastructure/repositories/business-case.repo";

export default class BusinessCaseService {
  private businessCaseRepository = new BusinessCaseRepository();

  async getAllBusinessCases() {
    return this.businessCaseRepository.findAll();
  }

  async getAllTemplates() {
    const templates = await this.businessCaseRepository.findAllTemplates();
    return templates.map((template: any) => ({
      ...template,
      createdBy: template.User.name,
    }));
  }

  async getTemplateDataById(id: string) {
    const template =
      await this.businessCaseRepository.getFullTemplateDataById(id);
    if (!template) {
      throw new Error("Template not found");
    }
    return template;
  }

  async getBusinessCaseById(id: string) {
    return this.businessCaseRepository.findById(id);
  }

  async createBusinessCase(data: any) {
    const {
      name,
      description,
      idOrganization,
      idProject,
      isTemplate,
      idTemplate,
      createdBy,
    } = data;

    // Validation for non-template business cases
    if (!isTemplate) {
      if (!idTemplate) {
        throw new Error(
          "Template ID is required for non-template business cases",
        );
      }

      const template = await this.businessCaseRepository.findById(idTemplate);
      if (!template) {
        throw new Error("Template not found");
      }
      if (template.idTemplate) {
        throw new Error("The selected template is invalid");
      }
    }

    // Templates don't rely on aprooval, so they are always approved
    const status = isTemplate
      ? BusinessCaseStatus.APPROVED
      : BusinessCaseStatus.DRAFT;
    const version = 1; // For a new business case, the version is always 1

    return this.businessCaseRepository.create({
      ...data,
      status,
      version,
    });
  }

  async updateBusinessCase(id: string, businessCase: any) {
    return this.businessCaseRepository.update(id, businessCase);
  }
  async deleteBusinessCase(id: string) {
    // Check if the business case is a template and if it has associated business cases
    // If it does, throw an error
    const businessCase = await this.businessCaseRepository.findById(id);
    if (businessCase?.isTemplate) {
      const businessCases = await this.businessCaseRepository.findByTemplateId(
        businessCase.id,
      );
      if (businessCases.length > 0) {
        throw new Error(
          "Cannot delete a template that has associated business cases",
        );
      }
    }
    return this.businessCaseRepository.delete(id);
  }

  async getBusinessCasesByOrganizationId(idOrganization: string) {
    return this.businessCaseRepository.findByOrganizationId(idOrganization);
  }
}
