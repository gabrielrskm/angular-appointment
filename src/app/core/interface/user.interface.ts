export interface UserInterface {
  id: string;
  name: string;
  email: string;
  type : 'client' | 'admin';
}