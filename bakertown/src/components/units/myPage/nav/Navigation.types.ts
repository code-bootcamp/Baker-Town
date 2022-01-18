export interface INavigationPresenterProps {
  onClickSideButton: (el: string) => () => void;
  handlesSignOut: () => void;
  userResult: {
    name: string;
  };
  goMyPage: () => void;
}
