import { retirievDataById, retrieveData } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: Boolean;
  statusCode: Number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if(req.query.product![1]){
    const data = await retirievDataById("products", req.query.product![1]);
    res.status(200).json({status: true, statusCode: 200, data});
  }
  const data = await retrieveData("products")
  res.status(200).json({ status: true, statusCode: 200, data });
}
