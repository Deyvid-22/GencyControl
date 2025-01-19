"use client";
import { Container } from "@/components/container";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DashboardHeader() {
  const pathname = usePathname();

  return (
    <Container>
      <header className="w-full flex  items-center border border-zinc-900 my-4 py-3 rounded gap-5 m-auto px-3">
        <Link
          href="/dashboard"
          className={`${
            pathname === "/dashboard" ? "text-green-300" : ""
          } hover:opacity-80 duration-200 `}
        >
          chamados
        </Link>
        <Link
          href="/dashboard/customer"
          className={`${
            pathname === "/dashboard/customer" ||
            pathname === "/dashboard/customer/new"
              ? "text-green-300"
              : ""
          } hover:opacity-80 duration-200 `}
        >
          clientes
        </Link>
      </header>
    </Container>
  );
}
