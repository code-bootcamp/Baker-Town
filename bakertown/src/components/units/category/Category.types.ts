export interface ICategoryPresenterProps {
  classArray: { text: string; link: string }[];
  storeArray: { text: string; link: string }[];
  classButton: (el: { link: string }) => () => void;
  storeButton: (el: { link: string }) => () => void;
}
