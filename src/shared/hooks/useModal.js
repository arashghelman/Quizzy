import { useState } from "react";
import Modal from "@components/Modal";

export const useModal = () => {
  const [modalStatus, setModalStatus] = useState({
    heading: "",
    content: null,
    isActive: false,
  });

  const triggerModal = (heading, content) =>
    setModalStatus({ heading: heading, content: content, isActive: true });
  const closeModal = () =>
    setModalStatus({ heading: "", content: null, isActive: false });

  const modal = modalStatus.isActive && (
    <Modal heading={modalStatus.heading} onClose={closeModal}>
      {modalStatus.content}
    </Modal>
  );

  return [modal, triggerModal];
};
