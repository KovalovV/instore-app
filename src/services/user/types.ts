export interface IUser {
  id: string;
  email: string;
  name: string;
  surname: string;
  password?: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export type TAddUser = Pick<IUser, "id" | "email">;
export type TUpdateUser = Omit<IUser, "password">;

export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface IRegister extends ILogin {}

export interface IRegisterResponse extends IUser {}
