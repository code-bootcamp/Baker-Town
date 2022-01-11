import styled from "@emotion/styled";
import { Modal } from "antd";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
  margin-left: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* background-color: salmon; */
`;

export const Title = styled.div`
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: bold;
`;

export const ClassNameWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const ClassNameTitle = styled.div``;

export const ClassName = styled.input`
  width: 900px;
`;

export const ClassPatissierWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const ClassPatissierTitle = styled.div``;

export const ClassPatissier = styled.input`
  width: 900px;
`;

export const ClassCategoryWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const ClassCategoryTitle = styled.div``;

export const ClassCategorySelect = styled.select`
  width: 150px;
`;

export const ClassCategoryOption = styled.option``;

export const ClassRemarksWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const ClassRemarksTitle = styled.div``;

export const ClassRemarks = styled.input`
  width: 900px;
`;

export const ClassContentsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const ClassContentsTitle = styled.div``;

export const ClassContents = styled.input`
  width: 900px;
  height: 500px;
  padding-left: 10px;
  padding-bottom: 450px;
`;

export const ClassPriceWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const ClassPriceTitle = styled.div``;

export const ClassPrice = styled.input`
  width: 900px;
`;

export const AddressWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const AddressTitle = styled.div``;

export const RoadNameWrapper = styled.div``;

export const RoadName = styled.input`
  width: 250px;
`;

export const RoadNameSearchButton = styled.button`
  margin-left: 16px;
`;

export const DetailAddress = styled.input`
  margin-top: 13px;
  width: 900px;
`;

export const RelatedFileWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const RelatedFileTitle = styled.div``;

export const RelatedFile = styled.input``;

export const ChooseScheduleWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const ChooseScheduleTitle = styled.div``;

export const SearchScheduleButton = styled.button`
  width: 250px;
`;

export const ScheduleModal = styled(Modal)`
  /* border: 10px dotted green; */
`;

export const SubmitButton = styled.button`
  width: 110px;
  height: 40px;
  margin-top: 30px;
  margin-left: 400px;
  border: none;
  border-radius: 19px;
  background-color: #662500;
  color: white;
`;
