// src/lib/prisma.ts
import { Pool } from "pg"; // Use your database client library driver
import { PrismaPg } from "@prisma/adapter-pg"; // Prisma 7 driver adapter
import { PrismaClient } from "../generated/prisma/client"; // Prisma 7 custom output path

export function createPrismaInstance(databaseUrl: string) {
  // 1. Establish the native database engine connection pool
  const pool = new Pool({ connectionString: databaseUrl });
  
  // 2. Instantiate the Prisma 7 Driver Adapter natively
  const adapter = new PrismaPg(pool);
  
  // 3. Mount the adapter cleanly into Prisma Client
  const prisma = new PrismaClient({ adapter }); // Prisma 7 absolute requirement
  
  return { prisma, pool };
}
