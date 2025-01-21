export interface TicketProps {
  id: string;
  userId: string | null;
  name: string;
  description: string;
  status: string;
  create_at: Date | null;
  updated_at: Date | null;
}
