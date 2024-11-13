'use server';

import { GithubRepository } from "@/interfaces/user.interface";
import { BASE_URL } from "@/utils/constants";

export const getRepositoriesByUsername = async (username: string): Promise<GithubRepository[] | null> => {
  const response = await fetch(`${BASE_URL}/users/${username}/repos?per_page=4`);

  if (!response.ok) return null;

  return response.json();
};