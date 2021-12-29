import * as S from "./ClassList.styles";

const ClassListPresenter = () => {
  return (
    <>
      <S.Wrapper>
        <S.CreatorSubject>
          <S.SubjectWrapper>
            <S.SubjectTitle>크리에이터 이야기</S.SubjectTitle>
            <S.SubjectView>크리에이터 이야기 전체 보기</S.SubjectView>
          </S.SubjectWrapper>
          <S.ClassesWrapper>
            {new Array(3).fill(1).map((el) => (
              <S.CreatorImage />
            ))}
          </S.ClassesWrapper>
        </S.CreatorSubject>
        <S.PopularSubject>
          <S.SubjectWrapper>
            <S.SubjectTitle>이번주 인기 상품</S.SubjectTitle>
            <S.SubjectView>인기 상품 전체 보기</S.SubjectView>
          </S.SubjectWrapper>
          <S.ClassesWrapper>
            {new Array(3).fill(1).map((el) => (
              <S.ClassWrapper>
                <S.PopularImage />
                <S.ClassPatissier>베이킹 월드</S.ClassPatissier>
                <S.ClassName>크리스마스 특집 과자집 꾸미기 세트</S.ClassName>
                <S.SmallLine></S.SmallLine>
                <S.ClassPrice>23,000 원</S.ClassPrice>
              </S.ClassWrapper>
            ))}
          </S.ClassesWrapper>
        </S.PopularSubject>

        <S.SubjectName>
          <S.SubjectWrapper>
            <S.SubjectTitle>이번 주 새로운 상품</S.SubjectTitle>
            <S.SubjectView>새로운 상품 전체보기</S.SubjectView>
          </S.SubjectWrapper>
          <S.ClassesWrapper>
            {new Array(4).fill(1).map((el) => (
              <S.ClassWrapper>
                <S.ClassImage />
                <S.ClassPatissier>베이킹 월드</S.ClassPatissier>
                <S.ClassName>크리스마스 특집</S.ClassName>
                <S.SmallLine></S.SmallLine>
                <S.ClassPrice>50,000 원</S.ClassPrice>
              </S.ClassWrapper>
            ))}
          </S.ClassesWrapper>
        </S.SubjectName>
        <S.SubjectName>
          <S.SubjectWrapper>
            <S.SubjectTitle>
              손 쉽게 만드는 육즙 가득한 홈파티 요리
            </S.SubjectTitle>
            <S.SubjectView>홈파티 요리 전체보기</S.SubjectView>
          </S.SubjectWrapper>
          <S.ClassesWrapper>
            {new Array(4).fill(1).map((el) => (
              <S.ClassWrapper>
                <S.ClassImage />
                <S.ClassPatissier>잔슨빌</S.ClassPatissier>
                <S.ClassName>
                  [연말 초특가] 육즉 가득 담은 독일 소세지 세트
                </S.ClassName>
                <S.SmallLine></S.SmallLine>
                <S.ClassPrice>50,000 원</S.ClassPrice>
              </S.ClassWrapper>
            ))}
          </S.ClassesWrapper>
        </S.SubjectName>
      </S.Wrapper>
    </>
  );
};

export default ClassListPresenter;
