// lib/getBlurData.ts
import { getPlaiceholder } from "plaiceholder";
import fs from "fs";
import path from "path";

export async function getBlurData(imagePath: string) {
  const filePath = path.join(process.cwd(), "public", imagePath);
  const buffer = fs.readFileSync(filePath);

  const { base64 } = await getPlaiceholder(buffer);
  return base64;
}
