import { useAtom } from "jotai"

import { modalAtom, type ModalType } from "./modal"

export const useModal = () => {
  const [modal, setModal] = useAtom(modalAtom)

  const openModal = <T extends ModalType["type"]>(
    type: T,
    props: Extract<ModalType, { type: T }>["props"]
  ) => {
    setModal({ type, props } as ModalType)
  }

  const closeModal = () => {
    setModal(null)
  }

  return {
    modal,
    openModal: openModal as <T extends ModalType["type"]>(
      type: T,
      props: Extract<ModalType, { type: T }>["props"]
    ) => void,
    closeModal,
  }
}
