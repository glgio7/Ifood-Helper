import React, { SetStateAction } from "react";
import { IUserCredentials } from "../../pages/Login/types";

export interface IUser {
	name: string;
	username: string;
	email: string;
	createdAt: string;
	score: number;
	token?: string;
	profileIcon?: string;
}

export interface INewUser {
	email: string;
	password: string;
	name: string;
	username: string;
}

export interface IAuthContext {
	user: IUser | null;
	setUser: React.Dispatch<SetStateAction<IUser | null>>;
	authenticated: boolean;
	setAuthenticated: React.Dispatch<SetStateAction<boolean>>;

	handleRegister: (
		e: React.FormEvent<HTMLFormElement>,
		newUser: INewUser
	) => Promise<void>;

	handleLogin: (
		e: React.FormEvent<HTMLFormElement>,
		userCredentials: IUserCredentials
	) => Promise<void>;

	handleLogout(): void;
}

export type AuthProviderProps = { children: React.ReactNode };
