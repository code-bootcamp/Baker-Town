import { ChangeEvent, LegacyRef, MouseEventHandler } from "react";

export interface IClassDetailPresenterProps {
  ratingAverage: number | undefined;
  isSelectedMap: boolean;
  isSelectedReview: boolean;
  ProgramRef: LegacyRef<HTMLDivElement> | undefined;
  isSelectedProgram: boolean;
  GoReview: MouseEventHandler<HTMLDivElement> | undefined;
  GoMap: MouseEventHandler<HTMLDivElement> | undefined;
  GoProgram: MouseEventHandler<HTMLDivElement> | undefined;
  review: MouseEventHandler<HTMLDivElement> | undefined;
  MapRef: LegacyRef<HTMLDivElement> | undefined;
  ReviewRef: LegacyRef<HTMLDivElement> | undefined;
  myClass: {
    address: string;
    category: string;
    className: string;
    contents: string;
    price: string;
    district: string;
    heart: number;
    images: never[];
    patissier: string;
    remarks: string;
    introduce: string;
    review: any;
    applyClass: {
      classArray: never[];
    };
    patissierId: string;
  };
  reservation: () => void;
  selectDate: (el: any, index: number) => () => void;
  nameInput: (event: ChangeEvent<HTMLInputElement>) => void;
  heart: () => void;
  share: () => void;
  scrollPosition: number;
  goChat: () => void;
  patissierIntroduce: string;
}

export interface IClassDetailStylesProgramProps {
  isSelectedProgram: boolean;
  // isSelectedMap: boolean;
  // isSelectedReview: boolean;
}

export interface IClassDetailStylesMapProps {
  // isSelectedProgram: boolean;
  isSelectedMap: boolean;
  // isSelectedReview: boolean;
}

export interface IClassDetailStylesReviewProps {
  // isSelectedProgram: boolean;
  // isSelectedMap: boolean;
  isSelectedReview: boolean;
}
