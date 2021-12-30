import * as S from "./Store.styles";

const StorePresenter = () => {
  return (
    <>
      <S.Wrapper>
        <S.CreatorSubject>
          <S.SubjectWrapper>
            <S.SubjectTitle>크리에이터 이야기</S.SubjectTitle>
            <S.SubjectView>크리에이터 이야기 전체 보기</S.SubjectView>
          </S.SubjectWrapper>
          <S.StoresWrapper>
            {new Array(3).fill(1).map((el) => (
              <S.CreatorImage />
            ))}
          </S.StoresWrapper>
        </S.CreatorSubject>
        <S.PopularSubject>
          <S.SubjectWrapper>
            <S.SubjectTitle>이번주 인기 상품</S.SubjectTitle>
            <S.SubjectView>인기 상품 전체 보기</S.SubjectView>
          </S.SubjectWrapper>
          <S.StoresWrapper>
            {new Array(3).fill(1).map((el) => (
              <S.StoreWrapper>
                <S.PopularImage />
                <S.Store>베이킹 월드</S.Store>
                <S.StoreName>크리스마스 특집 과자집 꾸미기 세트</S.StoreName>
                <S.SmallLine></S.SmallLine>
                <S.StorePrice>23,000 원</S.StorePrice>
              </S.StoreWrapper>
            ))}
          </S.StoresWrapper>
        </S.PopularSubject>

        <S.SubjectName>
          <S.SubjectWrapper>
            <S.SubjectTitle>이번 주 새로운 상품</S.SubjectTitle>
            <S.SubjectView>새로운 상품 전체보기</S.SubjectView>
          </S.SubjectWrapper>
          <S.StoresWrapper>
            {new Array(4).fill(1).map((el) => (
              <S.StoreWrapper>
                <S.StoreImage />
                <S.Store>베이킹 월드</S.Store>
                <S.StoreName>크리스마스 특집</S.StoreName>
                <S.SmallLine></S.SmallLine>
                <S.StorePrice>50,000 원</S.StorePrice>
              </S.StoreWrapper>
            ))}
          </S.StoresWrapper>
        </S.SubjectName>
        <S.SubjectName>
          <S.SubjectWrapper>
            <S.SubjectTitle>
              손 쉽게 만드는 육즙 가득한 홈파티 요리
            </S.SubjectTitle>
            <S.SubjectView>홈파티 요리 전체보기</S.SubjectView>
          </S.SubjectWrapper>
          <S.StoresWrapper>
            {new Array(4).fill(1).map((el) => (
              <S.StoreWrapper>
                <S.StoreImage />
                <S.Store>잔슨빌</S.Store>
                <S.StoreName>
                  [연말 초특가] 육즉 가득 담은 독일 소세지 세트
                </S.StoreName>
                <S.SmallLine></S.SmallLine>
                <S.StorePrice>50,000 원</S.StorePrice>
              </S.StoreWrapper>
            ))}
          </S.StoresWrapper>
        </S.SubjectName>
      </S.Wrapper>
    </>
  );
};

export default StorePresenter;
