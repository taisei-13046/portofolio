"use client";

import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export const Provider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <ThemeProvider defaultTheme="dark" {...props}>
      {children}
    </ThemeProvider>
  );
};
