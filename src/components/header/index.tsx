"use client";

import Link from "next/link";
import { AvatarUser } from "../avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LogOut, LogIn } from "lucide-react";

import { signOut, signIn, useSession } from "next-auth/react";

export function Header() {
  const { data: session } = useSession();

  return (
    <header className="w-full flex justify-center items-center px-2  shadow-md h-20 overflow-hidden">
      <div className="w-full  flex items-center justify-between max-w-7xl">
        <Link href="/dashboard">
          <h1 className="text-2xl pl-1 font-bold">
            <span className="text-blue-500">Gency</span>Control
          </h1>
        </Link>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="pr-1 border-none">
              <div className="flex gap-2 justify-center items-center">
                <AvatarUser img={session?.user?.image || ""} />
                {!session?.user ? (
                  <p className="text-lg font-semibold">Entrar</p>
                ) : (
                  <p className="text-lg font-semibold">{session?.user?.name}</p>
                )}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-[10px] ">
              <DropdownMenuSeparator />
              {session?.user ? (
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => signOut()}
                >
                  <LogOut />
                  Sair
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => signIn("google")}
                >
                  <LogIn />
                  Entrar
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
