"use client";

import { useRouter } from "next/navigation";
import { RefreshCcw } from "lucide-react";

export function ButtonRefresh() {
  const router = useRouter();
  return (
    <button onClick={() => router.refresh()}>
      <RefreshCcw size={24} color="#fff" />
    </button>
  );
}
