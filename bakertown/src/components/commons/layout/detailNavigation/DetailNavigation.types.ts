export interface IDetailNavigationPresenterProps {
  heart: () => void;
  onToggleModal: () => void;
  isVisible: boolean;
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
  selectDate: (el: any, index: number) => () => void;
  reservation: () => void;
}

export interface IScheduleReservationProps {
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
  selectDate: (el: any, index: number) => () => void;
  reservation: () => void;
  isVisible: boolean;
}

export interface IScheduleWrapperStylesProps {
  isVisible: boolean;
}
