export interface UserInterface {
  id: string;
  name: string;
  email: string;
  type : 'client' | 'admin';
}

export interface UserState {
  users: UserInterface[];
  loading: boolean;
  error: any;
}