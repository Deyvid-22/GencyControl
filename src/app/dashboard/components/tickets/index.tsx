import { Trash2Icon, File } from "lucide-react";

export function TicketsItem() {
  return (
    <tr className="border-b-2 border-b-slate-200 h-16 last:border-b-0 bg-zinc-900 hover:bg-zinc-800 duration-300">
      <td className="text-left pl-2">Mercado Silva</td>

      <td className="text-left hidden sm:table-cell">18/01/2024</td>

      <td className="text-left">
        <span className="text-green-500 rounded">ABERTO</span>
      </td>

      <td className="text-left">
        <button aria-label="Excluir ticket">
          <Trash2Icon size={20} color="#ef4444" />
        </button>
        <button aria-label="Ver detalhes do ticket" className="ml-2">
          <File size={20} color="#3b82f6" />
        </button>
      </td>
    </tr>
  );
}
