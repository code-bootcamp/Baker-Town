import { withAuth } from "../../../../src/components/commons/hocs/withAuth";
import WishListContainer from "../../../../src/components/units/myPage/class/wishList/WishList.container";

const wishListPage = () => {
  return <WishListContainer />;
};

// export default withAuth(wishListPage);
export default wishListPage;
