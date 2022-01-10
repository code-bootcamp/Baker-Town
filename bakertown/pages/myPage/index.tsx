import { withAuth } from "../../src/components/commons/hocs/withAuth";
import MyPageContainer from "../../src/components/units/myPage/MyPage.container";

const MyPage = () => {
  return <MyPageContainer />;
};

export default withAuth(MyPage);
