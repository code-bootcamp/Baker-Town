import { ChangeEvent } from "react";

export interface IHeaderProps {
  logo: () => void;
  class: () => void;
  search: () => void;
  keyWord: (event: ChangeEvent<HTMLInputElement>) => void;
  signIn: () => void;
  heartClass: () => void;
  store: () => void;
  enterKey: () => void;
}
