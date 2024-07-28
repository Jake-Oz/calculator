"use server";

import { cookies } from "next/headers";

export const changeTheme = async (theme: string) => {
  await setThemePreferenceInCookie(theme);
};

export const convertToNonLocaleString = (value: string) => {
  return value.replace(/[^0-9-.]/g, "");
};

export const getThemePreferenceFromCookie = async () => {
  const cookieStore = cookies();
  const theme = await cookieStore.get("theme");
  return theme?.value;
};

const setThemePreferenceInCookie = async (theme: string) => {
  await cookies().set("theme", theme);
};
