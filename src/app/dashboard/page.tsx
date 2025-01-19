import { Container } from "@/components/container";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { TicketsItem } from "./components/tickets";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session?.user || !session.user) {
    redirect("/");
  }

  return (
    <Container>
      <main className="mt-9 mb-2">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-3xl">Chamados</h1>
          <Link
            href="/dashboard/new"
            className="bg-blue-500 hover:bg-blue-700 font-bold  px-1 rounded"
          >
            Abrir chamados
          </Link>
        </div>

        <table className="min-w-full my-2">
          <thead>
            <tr>
              <th className="font-medium text-left">CLIENTE</th>
              <th className="font-medium text-left hidden sm:block  ">
                DATA CADASTRO
              </th>
              <th className="font-medium text-left">STATUS</th>
              <th className="font-medium text-left">#</th>
            </tr>
          </thead>
          <tbody>
            <TicketsItem />
            <TicketsItem />
          </tbody>
        </table>
      </main>
    </Container>
  );
}
