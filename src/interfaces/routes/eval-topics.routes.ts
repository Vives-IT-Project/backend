import { Router } from "express";
import EvaluationTopicController from "../controllers/eval-topics.controller";
import EvaluationTopicService from "../../application/service/eval-topics.service";

const router = Router();
const evaluationTopicController = new EvaluationTopicController(
  new EvaluationTopicService(),
);

router.get("/", evaluationTopicController.getAllEvaluationTopics);
router.get("/:id", evaluationTopicController.getEvaluationTopicById);
router.post("/", evaluationTopicController.createEvaluationTopic);
router.put("/:id", evaluationTopicController.updateEvaluationTopic);
router.delete("/:id", evaluationTopicController.deleteEvaluationTopic);
router.get(
  "/organization/:idOrganization",
  evaluationTopicController.getEvaluationTopicsByOrganizationId,
);

export default router;
