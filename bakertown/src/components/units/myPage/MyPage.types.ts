import { Dispatch, SetStateAction } from "react";

export interface IMyPageProps {
  deleteAccount: () => void;
  setPassword: Dispatch<SetStateAction<string>>;
  passwordChange: () => void;
  currentUser: any;
  myUser: {
    name: string;
  };
}
