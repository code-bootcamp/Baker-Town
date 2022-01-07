import { LegacyRef, MouseEventHandler } from "react";

export interface IClassDetailPresenterProps {
  isSelectedMap: any;
  isSelectedReview: any;
  ProgramRef: LegacyRef<HTMLDivElement> | undefined;
  isSelectedProgram: any;
  GoReview: MouseEventHandler<HTMLDivElement> | undefined;
  GoMap: MouseEventHandler<HTMLDivElement> | undefined;
  GoProgram: MouseEventHandler<HTMLDivElement> | undefined;
  review: MouseEventHandler<HTMLDivElement> | undefined;
  MapRef: LegacyRef<HTMLDivElement> | undefined;
  handleIndexClick: MouseEventHandler<HTMLDivElement> | undefined;
  ReviewRef: LegacyRef<HTMLDivElement> | undefined;
  tabRef: any;
  myClass: {
    address: string;
    category: string;
    className: string;
    contents: string;
    patissier: string;
    price: string;
    remarks: string;
  };
}
