export interface CustomerProps {
  name: string;
  id: string;
  phone: string;
  email: string;
  adress: string | null;
  create_at: Date | null;
  updated_at: Date | null;
  userId: string | null;
}
