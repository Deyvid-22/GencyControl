import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <main className="flex justify-center flex-col items-center min-h-[calc(100vh-5rem)]">
      <h2>Gerencie sua empresa</h2>
      <h1>Atendimentos, clientes e serviços </h1>
      <div className="relative w-full max-w-[600px]">
        <Image
          src="/hero.svg"
          alt="logo"
          layout="responsive"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
      </div>
    </main>
  );
}
