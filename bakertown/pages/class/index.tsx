import { withAuth } from "../../src/components/commons/hocs/withAuth";
import ClassListContainer from "../../src/components/units/class/list/ClassList.container";

const ClassListPage = () => {
  return (
    <>
      <ClassListContainer />
    </>
  );
};

export default withAuth(ClassListPage);
