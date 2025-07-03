import { useAtom } from "jotai"

import { modalAtom } from "@/src/entities/modals/models/modal"
import { ModalTaskCardUpdate } from "./ui"

export const ModalManager = () => {
  const [modal, setModal] = useAtom(modalAtom)

  if (!modal) return null

  const handleClose = () => setModal(null)

  switch (modal.type) {
    case "taskCardEdit":
      return (
        <ModalTaskCardUpdate
          onClose={handleClose}
          isOpen={true}
          task={modal.props.task}
        />
      )

    default:
      return null
  }
}
