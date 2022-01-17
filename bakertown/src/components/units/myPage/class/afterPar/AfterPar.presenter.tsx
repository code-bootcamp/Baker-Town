import * as S from "./AfterPar.styles";
import { v4 as uuidv4 } from "uuid";
import SideNavigationContainer from "../../sideNav/SideNavigation.container";
import WriteReviewContainer from "../../../../commons/writeReview/WriteReview.container";
import { IAfterParPresenter } from "./AfterPar.types";

const AfterParPresenter = (props: IAfterParPresenter) => {
  return (
    <>
      <S.Wrapper>
        <SideNavigationContainer />
        <S.ClassList>
          <S.ListTitle>
            <S.ListTitleText>CLASS | 참여완료</S.ListTitleText>
          </S.ListTitle>
          <S.ListContents>
            {props.userResult.afterPar?.map((el: any, index) => (
              <S.ClassWrapper key={uuidv4()}>
                <S.Class>
                  <S.ClassImage onClick={props.classDetail(el)} />
                  <S.ClassInfoWrapper>
                    <S.ClassPatissier>{el.category}</S.ClassPatissier>
                    <S.ClassName onClick={props.classDetail(el)}>
                      {el.className}
                    </S.ClassName>
                    <S.ClassPeople>
                      수강신청 인원 {el.class.member}명
                    </S.ClassPeople>
                  </S.ClassInfoWrapper>
                  <S.ClassLine></S.ClassLine>
                </S.Class>
                <S.ClassSubWrapper>
                  <S.ClassDate>
                    {el.class.date} {el.class.start}
                  </S.ClassDate>
                  <S.WriteReview onClick={props.onToggleModal}>
                    리뷰 작성하기
                  </S.WriteReview>
                  {props.isOpen && (
                    // <Modal
                    //   title="리뷰 등록"
                    //   visible={props.isOpen}
                    //   onOk={props.onClickReview(index)}
                    //   onCancel={props.onToggleModal}
                    // >
                    <WriteReviewContainer
                      rating={props.rating}
                      setRating={props.setRating}
                      onToggleModal={props.onToggleModal}
                      onClickReview={props.onClickReview}
                      reviewRef={props.reviewRef}
                      index={index}
                    />
                    // </Modal>
                  )}
                  {/* {props.isOpen && (
                    <Modal title="후후" visible={props.isOpen}>
                      <div>하하</div>
                    </Modal>
                  )} */}
                </S.ClassSubWrapper>
              </S.ClassWrapper>
            ))}
          </S.ListContents>
        </S.ClassList>
      </S.Wrapper>
    </>
  );
};

export default AfterParPresenter;
