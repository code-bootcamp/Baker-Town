export interface IClassDetailPresenterProps {
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
