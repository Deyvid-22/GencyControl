"use client";

import { Input } from "@/components/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "@/lib/api";
import { CustumerDataInfo } from "../../page";
const schema = z.object({
  name: z.string().min(1, "O  nome é obrigatorio"),
  description: z.string().min(1, "A descrição é obrigatorio"),
});

interface CustomerProps {
  customer: CustumerDataInfo;
}

type FormData = z.infer<typeof schema>;

export function FormTicket({ customer }: CustomerProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function handleRegister(data: FormData) {
    await api.post("/api/ticket", {
      name: data.name,
      description: data.description,
      customerId: customer.id,
    });
    setValue("name", "");
    setValue("description", "");
  }

  return (
    <form
      className="w-full mt-6  rounded"
      onSubmit={handleSubmit(handleRegister)}
    >
      <label className="mb-3 font-medium "> Nome do chamado</label>
      <Input
        register={register}
        type="text"
        placeholder="Digite o nome do chamado"
        name="name"
        error={errors.name?.message}
      />

      <label className="my-3 font-medium "> Descreva o problema</label>
      <textarea
        {...register("description")}
        className="w-full h-24 rounded border-2 resize-none mb-2 px-2 bg-transparent"
        placeholder="Descreva o problema"
        name="description"
      ></textarea>
      {errors.description?.message && (
        <p className="text-red-500 my-3">{errors.description.message}</p>
      )}

      <button className="w-full bg-blue-500 text-white px-2 py-1" type="submit">
        Cadastrar
      </button>
    </form>
  );
}
