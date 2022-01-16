import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1400px;
  padding-left: 63px;
  padding-right: 63px;

  @media ${breakPoints.mobile} {
    width: 100%;
    margin-left: 5px;
  }
  @media ${breakPoints.tablet} {
    width: 100%;
    margin-left: 2%;
    margin-right: 2%;
    margin-bottom: 20%;
  }
`;

export const CreatorSubject = styled.div`
  margin-top: 72px;

  @media ${breakPoints.mobile} {
    width: 120%;
  }
  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;

export const SubjectWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;

export const SubjectTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;

  @media ${breakPoints.mobile} {
    font-size: 1.3em;
    width: 70%;
  }

  @media ${breakPoints.tablet} {
    font-size: 1.5em;
    width: 76%;
  }
`;

export const SubjectView = styled.div`
  font-size: 16px;
  padding-top: 20px;

  @media ${breakPoints.mobile} {
    padding-top: 0;
    width: 30%;
    font-size: 1em;
  }
  @media ${breakPoints.tablet} {
    padding-top: 0;
    width: 24%;
    font-size: 1em;
  }
`;

export const StoresWrapper2 = styled.div`
  display: flex;
  width: 1274px;
  justify-content: space-between;
  margin-bottom: 120px;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 50%;
    flex-direction: column;
  }

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 90%;
  }
`;

export const CreatorImage = styled.img`
  width: 400px;
  height: 500px;

  background-color: #c4c4c4;
  border-radius: 10px;
  opacity: 0.5;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
  }

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 280px;
    margin-right: 20px;
  }
`;

export const SubjectName = styled.div`
  @media ${breakPoints.mobile} {
    width: 120%;
  }

  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;

export const StoresWrapper = styled.div`
  display: flex;
  width: 1274px;
  justify-content: space-between;
  margin-bottom: 120px;
  @media ${breakPoints.mobile} {
    width: 100%;
  }

  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;

export const StoresWrapper4 = styled.div`
  display: flex;
  width: 1274px;
  justify-content: space-between;
  margin-bottom: 120px;
  @media ${breakPoints.mobile} {
    width: 100%;
    flex-wrap: wrap;
  }

  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;

export const SmallLine = styled.div`
  width: 290px;
  border-bottom: 1px solid #b9b9b9;
  margin-bottom: 9.5px;

  @media ${breakPoints.tablet} {
    width: 90%;
  }
  @media ${breakPoints.mobile} {
    width: 90%;
  }
`;

export const SmallLine2 = styled.div`
  width: 290px;
  border-bottom: 1px solid #b9b9b9;
  margin-bottom: 9.5px;

  @media ${breakPoints.mobile} {
    width: 100%;
  }

  @media ${breakPoints.tablet} {
    width: 90%;
  }
`;

export const StorePrice = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const Store = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;

  @media ${breakPoints.tablet} {
    font-size: 0.9em;
  }
`;

export const StoreName = styled.div`
  width: 268px;
  font-size: 18px;
  margin-bottom: 9.5px;

  @media ${breakPoints.tablet} {
    font-size: 0.9em;
  }
  @media ${breakPoints.mobile} {
    width: 90%;
  }
`;

export const StoreName2 = styled.div`
  width: 268px;
  font-size: 18px;
  margin-bottom: 9.5px;

  @media ${breakPoints.mobile} {
    font-size: 0.7em;
    width: 100%;
  }

  @media ${breakPoints.tablet} {
    font-size: 0.8em;
    width: 90%;
  }
`;

export const StoreWrapper = styled.div`
  @media ${breakPoints.mobile} {
    width: 100%;
  }

  @media ${breakPoints.tablet} {
    /* width: 100% */
  }
`;

export const StoreWrapper2 = styled.div`
  width: 100%;

  @media ${breakPoints.mobile} {
    width: 48%;
  }
`;

// export const StoreWrapper3 = styled.div`
//   width: 100%;
// `;

export const StoreImage = styled.img`
  width: 290px;
  height: 290px;
  border-radius: 10px;
  background-color: #c4c4c4;
  margin-bottom: 20px;
  /* opacity: 0.5; */

  @media ${breakPoints.mobile} {
    width: 88%;
    height: 200px;
    margin-right: 30%;
  }

  @media ${breakPoints.tablet} {
    width: 90%;
    height: 200px;
  }
`;

export const StoreImage2 = styled.img`
  width: 290px;
  height: 290px;
  border-radius: 10px;
  background-color: #c4c4c4;
  margin-bottom: 20px;
  opacity: 0.5;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 200px;
  }

  @media ${breakPoints.tablet} {
    /* margin-right: 20px; */
    width: 90%;
    height: 130%;
  }
`;

export const SliderWrapper = styled.div`
  width: 102.8%;
  height: 400px;

  .slick-next-arrow {
    font-size: 20px;
    position: absolute;
    width: 23px;
    height: 23px;
    top: 130px;
    right: -18px;
    background-image: url("/imgs/rightarrow.png");
    background-size: 100%;
    background-repeat: no-repeat;
    overflow: hidden;

    @media ${breakPoints.mobile} {
      display: none;
      visibility: hidden;
      right: 0;
      width: 0;
    }

    @media ${breakPoints.tablet} {
      position: absolute;
      top: 90px;
    }
  }

  .slick-before-arrow {
    font-size: 20px;
    position: absolute;
    width: 23px;
    height: 23px;
    top: 130px;
    left: -53px;
    background-image: url("/imgs/leftarrow.png");
    background-size: 100%;
    background-repeat: no-repeat;
    overflow: hidden;

    @media ${breakPoints.mobile} {
      display: none;
      visibility: hidden;
      right: 0;
      width: 0;
    }

    @media ${breakPoints.tablet} {
      position: absolute;
      top: 90px;
    }
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const SliderWrapper2 = styled.div`
  width: 102.8%;
  height: 400px;
  display: none;

  .slick-next-arrow {
    font-size: 20px;
    position: absolute;
    width: 23px;
    height: 23px;
    top: 130px;
    right: -18px;
    background-image: url("/imgs/rightarrow.png");
    background-size: 100%;
    background-repeat: no-repeat;
    overflow: hidden;

    @media ${breakPoints.mobile} {
      display: none;
      visibility: hidden;
      right: 0;
      width: 0;
    }
  }

  .slick-before-arrow {
    font-size: 20px;
    position: absolute;
    width: 23px;
    height: 23px;
    top: 130px;
    left: -53px;
    background-image: url("/imgs/leftarrow.png");
    background-size: 100%;
    background-repeat: no-repeat;
    overflow: hidden;

    @media ${breakPoints.mobile} {
      display: none;
      visibility: hidden;
      right: 0;
      width: 0;
    }
  }

  @media ${breakPoints.mobile} {
    display: inline;
    width: 100%;
    height: 100%;
  }
`;
