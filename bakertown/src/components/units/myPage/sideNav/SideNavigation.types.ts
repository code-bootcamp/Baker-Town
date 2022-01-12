export interface ISideNavigationPresenterProps {
  onClickSideButton: (el: string) => () => void;
  userResult: {
    name: string;
  };
  goMyPage: () => void;
}
