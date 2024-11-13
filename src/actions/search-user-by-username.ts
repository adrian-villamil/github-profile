'use server';

import type { User } from "@/interfaces/user.interface";
import { BASE_URL } from "@/utils/constants";

export const searchUserByUsername = async (username: string): Promise<User | null> => {
  const response = await fetch (`${BASE_URL}/users/${username}`);

  if (!response.ok) return null;

  return response.json();
};