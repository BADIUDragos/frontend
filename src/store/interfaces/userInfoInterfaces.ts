export interface LoginInput {
  username: string;
  password: string;
}

export interface LoginResponse {
  refresh: string;
  access: string;
  id: number;
  username: string;
  email: string;
  permissions: string[];
  token: string;
}

interface UserInfo {
  user: {
    id: number;
    username: string;
    email: string;
    permissions: string[]; 
  } | null;
  tokens: {
    refresh: string;
    access: string;
  } | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export interface UserInfoState {
  userInfo: UserInfo | null;
}