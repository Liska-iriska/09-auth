// fetchNotes
// fetchNoteById
import { User } from "@/types/user";
import api from "./api";
import { cookies } from "next/headers";

type CheckSessionRequest = {
  success: boolean;
};

export const checkSession = async () => {
  const cookieStore = await cookies();
  const res = await api.get<CheckSessionRequest>("/auth/session", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res;
};

export const getMe = async () => {
  const { data } = await api.get<User>("/auth/me");
  return data;
};
