import { NextApiRequest, NextApiResponse } from "next";
//import { properties } from "@/constants";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Simulate fetching data from DB
  res.status(200).json(PROPERTYLISTINGSAMPLE);
}
