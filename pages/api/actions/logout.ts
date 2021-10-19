import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import { destroyCookie } from "../../../utils/cookies";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.all(async (req, res) => {
  destroyCookie(res, "hasura-user-token", {
    httpOnly: false,
    secure: true,
    sameSite: "none",
    maxAge: 0,
    path: "/",
    expires: new Date(0),
  });
  res.status(200).json({ success: true });
});

export default handler;
