import { NextApiRequest, NextApiResponse } from "next";
import { PROPERTYLISTINGSAMPLE } from "@/constants/property";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const property = PROPERTYLISTINGSAMPLE.find(p => p.id === Number(id));

  if (!property) {
    return res.status(404).json({ message: "Property not found" });
  }

  res.status(200).json(property);
}
