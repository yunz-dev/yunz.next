import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../lib/mongodb";
import Counter from "../../models/Counter";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connect();

  if (req.method === "GET") {
    try {
      const counter = await Counter.findOne(); // Retrieve the current counter
      console.log(counter)
      res.status(200).json({ count: counter ? counter.count : 0 });
    } catch (error) {
      res.status(500).json({ message: "Error retrieving counter" });
    }
  }

  if (req.method === "POST") {
    try {
      const counter = await Counter.findOne();
      if (counter) {
        counter.count += 1; // Increment the count
        await counter.save();
        res.status(200).json({ count: counter.count });
      } else {
        const newCounter = new Counter({ count: 1 });
        await newCounter.save();
        res.status(200).json({ count: 1 });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating counter" });
    }
  }
}
