"use client";

import { createContext, useState, ReactNode } from "react";
import { TicketProps } from "@/utils/tickets-type";
import { CustomerProps } from "@/utils/customer-utils-type";
import { ModalTicket } from "@/components/modal";
interface ModalContextProps {
  visible: boolean;
  handleModalVisible: () => void;
  ticket: TicketInfoProps | null;
  handleDetailTicket: (detail: TicketInfoProps) => void;
}

interface TicketInfoProps {
  ticket: TicketProps;
  customer: CustomerProps | null;
}

export const ModalContext = createContext({} as ModalContextProps);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const [ticket, setTicket] = useState<TicketInfoProps | null>(null);

  function handleModalVisible() {
    setVisible(!visible);
  }

  function handleDetailTicket(detail: TicketInfoProps) {
    setTicket(detail);
  }

  return (
    <ModalContext.Provider
      value={{ visible, handleModalVisible, ticket, handleDetailTicket }}
    >
      {visible && <ModalTicket />}
      {children}
    </ModalContext.Provider>
  );
};
