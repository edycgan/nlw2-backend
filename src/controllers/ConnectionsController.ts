import { Request, Response } from "express";
import db from "../database/connection";

export default class ConnectionsController {
  async index(req: Request, res: Response) {
    try {
      const totalConnections = await db("connections").count("* as total");

      const { total } = totalConnections[0];

      return res.json({ total });
    } catch (error) {
      console.log(error);

      res
        .status(400)
        .json({ error: "Unexpected error while listing connections." });
    }
  }

  async create(req: Request, res: Response) {
    const { user_id } = req.body;

    try {
      await db("connections").insert({ user_id });
    } catch (error) {
      console.log(error);

      res
        .status(400)
        .json({ error: "Unexpected error while creating new connection." });
    }

    return res.status(201).send();
  }
}
