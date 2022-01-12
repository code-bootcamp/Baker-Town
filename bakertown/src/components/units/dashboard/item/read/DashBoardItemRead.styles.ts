import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  height: 710px;
  width: 100%;
  margin-top: 100px;
  margin-left: 150px;
  overflow: auto;
`;

export const ItemList = styled.div``;

export const ItemListTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemListTitleText = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const ItemListSelect = styled.select`
  height: 40px;
`;

export const ItemListOption = styled.option``;

export const ItemListContents = styled.div`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ItemWrapper = styled.div``;

export const ItemImage = styled.img`
  width: 220px;
  height: 200px;
  border-radius: 10px;
  background-color: #c4c4c4;
  margin-bottom: 20px;
  opacity: 0.5;
`;

export const Seller = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ItemName = styled.div`
  width: 218px;
  font-size: 18px;
  margin-bottom: 9.5px;
`;

export const Line = styled.div`
  width: 220px;
  border-bottom: 1px solid #b9b9b9;
`;

export const ItemPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const ItemDelete = styled.button`
  height: 40px;
  cursor: pointer;
`;

export const ItemUpdate = styled.button`
  height: 40px;
  cursor: pointer;
`;
