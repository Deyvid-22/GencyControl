import { Container } from "@/components/container";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { NewCustomerForm } from "../components/form";

export default async function New() {
  const session = await getServerSession(authOptions);

  if (!session?.user || !session.user) {
    redirect("/");
  }

  console.log(session.user.id);

  return (
    <div>
      <Container>
        <main className="flex flex-col mt-9 mb-2">
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/custumer"
              className="bg-blue-500 hover:bg-blue-700 font-bold px-1 rounded"
            >
              Voltar
            </Link>
            <h1 className="text-3xl font-bold">Novo cliente</h1>
          </div>
          <NewCustomerForm userId={session.user.id} />
        </main>
      </Container>
    </div>
  );
}
