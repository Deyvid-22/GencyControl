"use client";

import { useContext, useRef } from "react";
import { ModalContext } from "@/providers/modal";

export function ModalTicket() {
  const { handleModalVisible, ticket } = useContext(ModalContext);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleModalClick = (event: React.MouseEvent<HTMLElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleModalVisible();
    }
  };

  return (
    <section
      className="absolute w-full min-h-screen bg-gray-900/80"
      onClick={handleModalClick}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="bg-zinc-900 shadow-lg w-4/5 md:w-1/2 max-w-2xl rounded p-3"
          ref={modalRef}
        >
          <div className="flex  items-center justify-between bm-4">
            <h1 className="font-bol md:text-2xl">Detalhes do chamado</h1>
            <button
              className="bg-red-500 p-1 px-2 text-white"
              onClick={handleModalVisible}
            >
              Fechar
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-2">
            <h2 className="font-bold">Nome:</h2>
            <p>{ticket?.ticket.name}</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-2">
            <h2 className="font-bold">Descrição:</h2>
            <p>{ticket?.ticket.description}</p>
          </div>

          <div className="w-full border-b-[1.5px] my-4"></div>
          <div className="font-bold text-lg">Detalhes do cliente</div>

          <div className="flex flex-wrap gap-1 mb-2">
            <h1 className="font-bold">Nome:</h1>
            <p>{ticket?.customer?.name}</p>
          </div>

          <div className="flex flex-wrap gap-1 mb-2">
            <h1 className="font-bold">Telefone:</h1>
            <p>{ticket?.customer?.phone}</p>
          </div>

          <div className="flex flex-wrap gap-1 mb-2">
            <h1 className="font-bold">Email:</h1>
            <p>{ticket?.customer?.email}</p>
          </div>

          {ticket?.customer?.adress && (
            <div className="flex flex-wrap gap-1 mb-2">
              <h1 className="font-bold">Endereço:</h1>
              <p>{ticket?.customer?.adress}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
