import "dotenv/config";
import Database from "better-sqlite3";
import { createCorsair } from "corsair";
import { github } from "@corsair-dev/github";
import { gmail } from "@corsair-dev/gmail";

const db = new Database("corsair.db");

export const corsair = createCorsair({
  plugins: [github(), gmail()],
  database: db,
  kek: process.env.CORSAIR_KEK!,
  multiTenancy: false,
});
