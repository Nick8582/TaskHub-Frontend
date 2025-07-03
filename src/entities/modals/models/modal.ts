import { atom } from "jotai"

import type { ITask } from "@/src/shared/types/task.types"

export type ModalType = {
  type: "taskCardEdit"
  props: { task: ITask }
}

export const modalAtom = atom<ModalType | null>(null)
