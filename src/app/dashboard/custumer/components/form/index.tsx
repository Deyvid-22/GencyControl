"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/input";

const schema = z.object({
  name: z.string().min(1, "O campo nome é obrigatorio"),
  email: z
    .string()
    .email("Email invalido")
    .min(1, "O campo email é obrigatorio"),
  phone: z.string().refine(
    (value) => {
      return (
        /^(?:\(\d{2}\)\s?)?\d{9}$/.test(value) ||
        /^(\d{2})\s\d{9}$/.test(value) ||
        /^\d{11}$/.test(value)
      );
    },
    {
      message: "O número de telefone dev esta r(DD) 999999999",
    }
  ),
  adress: z.string(),
});

type FormData = z.infer<typeof schema>;

export function NewCustomerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function handleRegisterCustomer(data: FormData) {
    console.log(data);
  }

  return (
    <form
      className="flex flex-col mt-6"
      onSubmit={handleSubmit(handleRegisterCustomer)}
    >
      <label className="mb-2 text-lg font-medium">Nome completo</label>
      <Input
        type="text"
        name="name"
        placeholder="Digite seu nome completo"
        error={errors.name?.message}
        register={register}
      />

      <section className="flex gap-2 my-2 flex-col md:flex-row">
        <div className="flex-1">
          <label className="mb-2 text-lg font-medium">Telefone</label>
          <Input
            type="number"
            name="phone"
            placeholder="Ex: (DD) 99999-9999"
            error={errors.phone?.message}
            register={register}
          />
        </div>
        <div className="flex-1">
          <label className="mb-2 text-lg font-medium">Email</label>
          <Input
            type="email"
            name="email"
            placeholder="Ex: (DD) 99999-9999"
            error={errors.email?.message}
            register={register}
          />
        </div>
      </section>
      <label className="mb-2 text-lg font-medium">Endereço completo</label>
      <Input
        type="text"
        name="adress"
        placeholder="Digite o endereço do cliente"
        error={errors.adress?.message}
        register={register}
      />
      <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-700 font-bold px-2 h-11 text-white rounded"
      >
        Cadastrar
      </button>
    </form>
  );
}
