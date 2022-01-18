export interface IDetailNavigationPresenterProps {
  purchase: () => void;
  heart: () => void;
  onToggleModal: () => void;
  isVisible: boolean;
  isOpen: boolean;
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

  myStore: {
    category: string;
    itemName: string;
    price: number;
    images: never[];
  };
  selectDate: (el: any, index: number) => () => void;
  reservation: () => void;
  share: () => void;
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
  onToggleModal: () => void;
}

export interface IScheduleWrapperStylesProps {
  isVisible: boolean;
}
