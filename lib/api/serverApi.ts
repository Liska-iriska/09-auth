// fetchNotes
// fetchNoteById
import { User } from "@/types/user";
import api from "./api";

type CheckSessionRequest = {
  success: boolean;
};

export const checkSession = async () => {
  const res = await api.get<CheckSessionRequest>("/auth/session");
  return res.data.success;
};

export const getMe = async () => {
  const { data } = await api.get<User>("/auth/me");
  return data;
};
