"use client";

import { api } from "@/lib/api";
import { CustomerProps } from "@/utils/customer-utils-type";
import { useRouter } from "next/navigation";

export function CardCustomer({ customer }: { customer: CustomerProps }) {
  const router = useRouter();

  async function handleDeleteCustomer() {
    try {
      await api.delete("/api/customer", {
        params: {
          id: customer.id,
        },
      });

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <article className="flex flex-col border p-2 rounded-xl gap-2 hover:scale-105 duration-300 mt-2">
      <h2>
        <a className="text-gray-200 font-bold">Nome:</a> {customer.name}
      </h2>
      <p>
        <a className="text-gray-200 font-bold">Email:</a> {customer.email}
      </p>
      <p>
        <a className="text-gray-200 font-bold">Telefone:</a> {customer.phone}
      </p>
      <button
        className="bg-red-700 font-bold  px-1 rounded self-start"
        onClick={handleDeleteCustomer}
      >
        Deletar
      </button>
    </article>
  );
}
