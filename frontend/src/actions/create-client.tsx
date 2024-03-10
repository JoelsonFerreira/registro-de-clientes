"use server"

import type { Client } from "@/data/schema";
import { revalidateTag } from "next/cache";

export async function createClient(client: Omit<Client, "id">) {  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/clients`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(client)
  })

  revalidateTag("clients")
  
  return response.json();
}