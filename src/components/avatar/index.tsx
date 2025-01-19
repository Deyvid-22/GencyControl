import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
export function AvatarUser({ img }: { img: string }) {
  return (
    <div>
      <Avatar>
        <AvatarImage src={img} />
        <AvatarFallback>
          <User />
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
