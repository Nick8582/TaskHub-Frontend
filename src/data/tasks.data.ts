import { Briefcase, Code, FileText } from "lucide-react"

import { MockUsers } from "@/src/data/users.data"
import type { ITask } from "@/src/shared/types/task.types"

export const MockTasks: ITask[] = [
  {
    id: "1",
    title: "Complete development project",
    icon: Code,
    dueDate: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
    users: [MockUsers[0], MockUsers[1], MockUsers[2]],
    subTasks: [
      { id: "1-1", title: "Write unit tests", isCompleted: false },
      { id: "1-2", title: "Conduct code review", isCompleted: true },
      { id: "1-3", title: "Deploy to production", isCompleted: false },
    ],
    comments: [
      "Need to speed up testing phase",
      "Code review completed successfully",
    ],
    resources: ["design-specs.pdf", "requirements.docx"],
    links: ["https://github.com/company/project-repo"],
  },
  {
    id: "2",
    title: "Prepare quarterly presentation",
    icon: FileText,
    dueDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    users: [MockUsers[3], MockUsers[4]],
    subTasks: [
      { id: "2-1", title: "Collect performance data", isCompleted: true },
    ],
    comments: ["Data approved by leadership team"],
    resources: ["q3-stats.xlsx", "presentation-template.pptx"],
    links: [],
  },
  {
    id: "3",
    title: "Client onboarding meeting",
    icon: Briefcase,
    dueDate: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000),
    users: [MockUsers[0], MockUsers[5]],
    subTasks: [
      { id: "3-1", title: "Prepare contract", isCompleted: true },
      { id: "3-2", title: "Confirm meeting time", isCompleted: true },
      { id: "3-3", title: "Prepare demo materials", isCompleted: true },
      { id: "3-4", title: "Share agenda with client", isCompleted: true },
      { id: "3-5", title: "Book meeting room", isCompleted: false },
    ],
    comments: ["Client agreed to terms", "Reschedule signing for next week"],
    resources: ["service-agreement.pdf"],
    links: ["https://clients.company.com/portal"],
  },
]
