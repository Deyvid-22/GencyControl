import { Container } from "@/components/container";
import Link from "next/link";

export function DashboardHeader() {
  return (
    <Container>
      <header className="w-full flex  items-center border border-zinc-900 my-4 py-3 rounded gap-5 m-auto px-3">
        <Link href="/dashboard" className="hover:text-gray-300">
          chamados
        </Link>
        <Link href="/dashboard/custumer">clientes</Link>
      </header>
    </Container>
  );
}
