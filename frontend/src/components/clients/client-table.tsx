import { DataTable } from "@/components/sections/data-table/data-table"

import { columns } from "@/data/columns"

async function getClients() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/clients`, { next: { tags: ["clients"] } }) 
  
  return response.json();
}

export async function ClientTable() {
  const clients = await getClients()

  return (
    <DataTable data={clients} columns={columns} />
  )
}
