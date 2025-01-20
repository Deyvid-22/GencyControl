import { Container } from "@/components/container";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prismaClient } from "@/lib/prisma";

export default async function NewTicket() {
  const session = await getServerSession(authOptions);

  if (!session?.user || !session.user) {
    redirect("/");
  }

  const customers = await prismaClient.customer.findMany({
    where: {
      userId: session?.user.id,
    },
  });

  async function handleRegisterTicket(data: FormData) {
    "use server";

    const name = data.get("name");
    const description = data.get("description");
    const customerId = data.get("customer");

    if (!name || !description || !customerId) {
      return;
    }
    await prismaClient.ticket.create({
      data: {
        name: name as string,
        description: description as string,
        customerId: customerId as string,
        userId: session?.user.id,
        status: "ABERTO",
      },
    });

    redirect("/dashboard");
  }

  return (
    <Container>
      <main className="mt-9 mb-2">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="text-white px-4 py-1 rounded bg-gray-500 hover:bg-gray-600"
          >
            Voltar
          </Link>
          <h1 className="text-3xl font-bold">Novo chamado</h1>
        </div>

        <form className="flex flex-col mt-6" action={handleRegisterTicket}>
          <label className="mb-1 font-medium text-lg">Nome do chamado:</label>
          <input
            type="text"
            name="name"
            className="w-full h-11 p-2 rounded-md mb-2 bg-transparent"
            placeholder="Nome do chamado"
            required
          />

          <label className="mb-1 font-medium text-lg">
            Descreva o problema:
          </label>
          <textarea
            className="w-full h-24 p-2 rounded-md mb-2 bg-transparent resize-none outline-none border"
            placeholder="Nome do chamado"
            name="description"
            required
          />
          {customers.length !== 0 && (
            <>
              <label className="mb-1 font-medium text-lg">
                Selecione o cliente
              </label>
              <select
                className="w-full border-2  roudend-md h-11 bg-transparent px-1 "
                name="customer"
                required
              >
                {customers.map((customer) => (
                  <option key={customer.id} value={customer.id}>
                    {customer.name}
                  </option>
                ))}
              </select>
            </>
          )}

          {customers.length === 0 && (
            <Link
              href="/dashboard/customer/new"
              className="text-white px-4 py-1 rounded "
            >
              Você ainda não possui nenhum cliente
              <span className="underline text-blue-500">
                Cadastrar um cliente
              </span>
            </Link>
          )}

          <button
            type="submit"
            className="bg-blue-500 h-11 hover:bg-blue-700 rounded-md my-4 px-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={customers.length === 0}
          >
            Cadastrar
          </button>
        </form>
      </main>
    </Container>
  );
}
