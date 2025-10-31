import { NextApiRequest, NextApiResponse } from "next";
//import { properties } from "@/constants";
import { BOOKINGSAMPLE } from "@/constants/booking";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Simulate fetching data from DB
  res.status(200).json(BOOKINGSAMPLE);
}
