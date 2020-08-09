import { Request, Response } from "express";
import db from "../database/connection";

export default class StatisticsController {
  async index(req: Request, res: Response) {
    try {
      const teacherPerSubject = await db("classes")
        .select("subject")
        .count("user_id as total")
        .groupBy("subject");

      return res.json({
        teacherPerSubject,
      });
    } catch (error) {
      console.log(error);

      res
        .status(400)
        .json({ error: "Unexpected error while computing statistics." });
    }
  }
}
