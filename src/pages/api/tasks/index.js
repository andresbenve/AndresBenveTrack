import Dresses from "../../../models/Dresses";
import { dbConnect } from "../../../utils/mongoose";

dbConnect();

async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const tasks = await Dresses.find();
        return res.status(200).json(tasks);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case "POST":
      try {
        console.log("console pase por aca");
        console.log("console req.body", req.body);
        req.body.image = [
          req.body.image,
          req.body.image1,
          req.body.image2,
          req.body.image3,
          req.body.image4,
          req.body.image5,
        ];
        const newTask = new Dresses(req.body);
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
