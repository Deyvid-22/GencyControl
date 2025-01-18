import Link from "next/link";
import { AvatarUser } from "../avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LogOut } from "lucide-react";

export function Header() {
  return (
    <header className="w-full flex justify-center items-center px-2  shadow-md h-20 overflow-hidden">
      <div className="w-full  flex items-center justify-between max-w-7xl">
        <Link href="/dashboard">
          <h1 className=" text-2xl pl-1 font-bold">
            <span className="text-blue-500">Gency</span>Control
          </h1>
        </Link>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="pr-1 border-none">
              <AvatarUser />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-[10px] ">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                Login
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer">
                <LogOut />
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
