import { ClientTable } from "@/components/clients/client-table";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ClientTable />
    </main>
  );
}
