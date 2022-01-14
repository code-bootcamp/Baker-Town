import { Modal } from "antd";
import { useState } from "react";

const abcd = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div>aaa</div>
      <button onClick={onToggleModal}>모달을 켜보자!!!</button>
      {isOpen && (
        <Modal title="사랑해요 김모달" visible={isOpen}>
          <div>히히히히</div>
        </Modal>
      )}
    </>
  );
};

export default abcd;
