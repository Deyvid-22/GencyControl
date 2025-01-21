"use client";

import { File, CheckSquare } from "lucide-react";
import { TicketProps } from "@/utils/tickets-type";
import { CustomerProps } from "@/utils/customer-utils-type";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { ModalContext } from "@/providers/modal";

interface TicketItemProps {
  ticket: TicketProps;
  customer: CustomerProps | null;
}

export function TicketsItem({ customer, ticket }: TicketItemProps) {
  const router = useRouter();

  const { handleModalVisible, handleDetailTicket } = useContext(ModalContext);

  async function handleChangeStatus() {
    try {
      await api.put("/api/ticket", {
        id: ticket.id,
      });
      router.refresh();
    } catch (err) {
      console.log(err);
    }
  }

  function handleOpenModal() {
    handleModalVisible();
    handleDetailTicket({
      customer: customer,
      ticket: ticket,
    });
  }

  return (
    <tr className="border-b-2 border-b-slate-200 h-16 last:border-b-0 bg-zinc-900 hover:bg-zinc-800 duration-300">
      <td className="text-left pl-2">{customer?.name}</td>

      <td className="text-left hidden sm:table-cell">
        {ticket.create_at?.toLocaleDateString("pt-br")}
      </td>

      <td className="text-left">
        <span className="text-green-500 rounded">{ticket.status}</span>
      </td>

      <td className="text-left">
        <button aria-label="Excluir ticket" onClick={handleChangeStatus}>
          <CheckSquare size={20} color="gray" />
        </button>
        <button
          aria-label="Ver detalhes do ticket"
          className="ml-2"
          onClick={handleOpenModal}
        >
          <File size={20} color="#3b82f6" />
        </button>
      </td>
    </tr>
  );
}
