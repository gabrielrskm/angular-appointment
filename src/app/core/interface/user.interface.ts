export interface UserInterface {
  id?: string;
  name: string;
  email: string;
  age?: number;
  role : 'client' | 'admin';
  provider : string;
  login : string;
  tokken : string;
}

export interface UserState {
  users: UserInterface[];
  user : string;
  loading: boolean;
  error: any;
}