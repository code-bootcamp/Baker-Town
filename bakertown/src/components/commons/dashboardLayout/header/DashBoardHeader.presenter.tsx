import * as S from "./DashBoardHeader.styles";
import { IDashBoardHeaderPresenterProps } from "./DashBoardHeader.types";

const DashBoardHeaderPresenter = (props: IDashBoardHeaderPresenterProps) => {
  return (
    <>
      <S.Wrapper>
        <S.PageHeader>
          <S.SubTitle>파티셰 페이지</S.SubTitle>
          {/* <S.Title>나중에 여기 사람 타이틀 들어갈것임. 알림창이랑!</S.Title> */}
          <S.Title>
            <S.Name>{props.myUser?.name}</S.Name> 파티셰님 반갑습니다.
          </S.Title>
        </S.PageHeader>
      </S.Wrapper>
    </>
  );
};

export default DashBoardHeaderPresenter;
// https://designrevision.com/demo/shards-dashboard-lite-react/blog-overview
