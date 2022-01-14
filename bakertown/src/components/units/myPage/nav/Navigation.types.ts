export interface INavigationPresenterProps {
  onClickSideButton: (el: string) => () => void;
  userResult: {
    name: string;
  };
  goMyPage: () => void;
}
