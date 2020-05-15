import { users } from "../dbb.ts";
import { User } from "../models/users.ts";

// @ts-ignore
export const getUsers = ({ response }) => {
  response.body = users;
};

// @ts-ignore
export const addUsers = ({ response }) => {
  const user = new User(1, "Alexis");
  users.push(user);
  response.body = user;
};
