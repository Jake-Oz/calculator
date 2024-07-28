export const changeTheme = (theme: string) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

export const getTheme = () => {
  const theme = localStorage.getItem("theme");
  console.log("Retrieved: ", theme, " from localStorage");
  return theme;
};

export const convertToNonLocaleString = (value: string) => {
  return value.replace(/[^0-9-.]/g, "");
};
