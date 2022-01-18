export interface IStoreDetailPresenterProps {
  myStore: {
    address: string;
    category: string;
    itemName: string;
    contents: string;
    patissier: string;
    price: number;
    shippingTime: string;
    review: [];
    heart: number;
    images: never[];
    itemReview: [];
  };
  purchase: () => void;
  heart: () => void;
  ratingAverage: number | undefined;
  share: () => void;
}
