import express from "express";
import { SubmitFeedbackUseCase } from "./usecases/SubmitFeedbackUseCase";
import { PrismaFeedbacksRepository } from "./repositories/prisma/PrismaFeedbacksRepository";
import { NodeMailer } from "./adapters/nodemailer/NodeMailer";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const repository = new PrismaFeedbacksRepository();
  const adapters = new NodeMailer();
  const useCase = new SubmitFeedbackUseCase(repository, adapters);

  await useCase.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});
