"use client";
import { Input } from "@/components/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Search, X } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/container";
import { FormTicket } from "./components/fom-tickt";
import { api } from "@/lib/api";

const schema = z.object({
  email: z
    .string()
    .email("Digite o email para localizar")
    .min(1, "o campo email e obrigatorio"),
});

type FormData = z.infer<typeof schema>;

export interface CustumerDataInfo {
  name: string;
  id: string;
}

export default function OpenTicket() {
  const [custumer, setCustumer] = useState<CustumerDataInfo | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function handleClearCustomer() {
    setCustumer(null);
    setValue("email", "");
  }

  async function handleSearchCustumer(data: FormData) {
    const response = await api.get(`/api/customer`, {
      params: {
        email: data.email,
      },
    });
    console.log("antes", response.data);

    if (response.data == null) {
      console.log("dentro", response.data);
      setError("email", {
        type: "custom",
        message: "Ops, Cliente não foi encontrado!",
      });
      return;
    }

    setCustumer({
      id: response.data.id,
      name: response.data.name,
    });
  }

  return (
    <Container>
      <div className="w-full max-x-2xl mx-auto px-2 ">
        <h1 className="font-bold text-2xl text-center mt-24">Abrir chamado</h1>

        <main className="flex flex-col mt-4 mb-2">
          {custumer ? (
            <div className="h-11 px-2 roudend flex items-center justify-between">
              <p className="text-lg">
                Clinte selecionado
                <strong> {custumer.name}</strong>
              </p>
              <button
                className="bg-red-600 h-11 px-2 flex items-center justify-center gap-2 rounded"
                onClick={handleClearCustomer}
              >
                <X size={24} color="white" />
              </button>
            </div>
          ) : (
            <form
              className=" roudend "
              onSubmit={handleSubmit(handleSearchCustumer)}
            >
              <div className="flex flex-col gap-3">
                <Input
                  name="email"
                  placeholder="Digite o email do cliente"
                  type="email"
                  error={errors.email?.message}
                  register={register}
                />
              </div>

              <button className="w-full flex flex-row px-2 h-11 justify-center items-center bg-blue-500 mt-2 rounded gap-2">
                Procurar cliente
                <Search size={24} color="white" type="submit" />
              </button>
            </form>
          )}
          {custumer !== null && <FormTicket customer={custumer} />}
        </main>
      </div>
    </Container>
  );
}
