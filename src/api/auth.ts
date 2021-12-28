import { URL_BASE } from "../constants";
import { Credentials } from "../model/Credentials";
import client from "./client";

export const authAPI = {
  login: async (data: Credentials) => {
    return client({ method: "post", baseURL: URL_BASE, url: "/login", data });
  },
};
