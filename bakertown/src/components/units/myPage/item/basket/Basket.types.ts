export interface IBasketPresenterProps {
  userResult: {
    name: string;
    itemHeart: never[];
  };
  itemDetail: (el: any) => () => void;
}
