import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarUser() {
  return (
    <div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
