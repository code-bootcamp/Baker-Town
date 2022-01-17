export interface INavigationProps {
  navArray: { text: string; src: string; link: string }[];
  onClickNav: (el: { link: string; text: string }) => () => void;
}
