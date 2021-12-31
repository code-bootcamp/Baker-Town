export interface IClassListPresenterProps {
  recent: {};
  sideButton: (el: string) => () => void;
  categoryName: string | string[] | undefined;
  classList: () => void;
}
