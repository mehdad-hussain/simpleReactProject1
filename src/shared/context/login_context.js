import React, { createContext } from "react";

export const loginContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});
