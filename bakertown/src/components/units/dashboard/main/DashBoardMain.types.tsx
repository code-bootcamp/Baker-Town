export interface IDashBoardProductsProps {
  id: string;
  arg1: string;
  getValue: any;
  params: { getValue: (arg0: any, arg1: string) => any; id: string };
}
