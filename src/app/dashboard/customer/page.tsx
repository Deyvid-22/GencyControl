import { Container } from "@/components/container";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CardCustomer } from "./components/card";
import { prismaClient } from "@/lib/prisma";
export default async function Custumer() {
  const session = await getServerSession(authOptions);

  if (!session?.user || !session.user) {
    redirect("/");
  }

  const customers = await prismaClient.customer.findMany({
    where: {
      userId: session?.user.id,
    },
  });

  return (
    <Container>
      <main className="mt-9 mb-2">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Meus clientes</h1>
          <Link
            href="/dashboard/customer/new"
            className="bg-blue-500 hover:bg-blue-700 font-bold px-1 rounded"
          >
            Novo cliente
          </Link>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          {customers.map((customer) => (
            <CardCustomer key={customer.id} customer={customer} />
          ))}

          {customers.length === 0 && (
            <p className=" text-gray-400 mt-4">
              você ainda não possui nenhum cliente
            </p>
          )}
        </section>
      </main>
    </Container>
  );
}
