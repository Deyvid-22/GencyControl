import Image from "next/image";

export default function Home() {
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
