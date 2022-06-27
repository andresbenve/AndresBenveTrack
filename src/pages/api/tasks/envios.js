import Envios from "../../../models/Envios";
import { dbConnect } from "../../../utils/mongoose";

dbConnect();

async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const tasks = await Envios.find();
        return res.status(200).json(tasks);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case "POST":
      try {
        console.log("console pase por aca");
        console.log("console req.body", req.body);

        const newTask = new Envios(req.body);
        const savedTask = await newTask.save();
        return res.status(201).json(savedTask);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
}

export default handler;
