export interface IBeforeParPresenter {
  userResult: {
    name: string;
    beforePar: never[];
  };
  classDetail: (el: any) => () => void;
  cancel: (el: any, index: number) => () => void;
}
