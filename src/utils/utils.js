import { MdOutlineTopic } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

const PILL_TYPE = {
  SUCCESS: "success",
  DANGER: "danager",
  MUTED: "muted",
};

const PILL_ICON = {
  REQUIREMENTS: "Requirements",
  ET: "ET",
  BUG: "Bug",
};

const STAGE = {
  TO_START: "To Start",
  WIP: "wip",
  COMPLETED: "completed",
};

const getRequirementStatus = (status) => {
  if (status === 1) return "Requirement";
  if (status === 2) return "Requirement - FTL";
  if (status === 3) return "Requirement - Cus";
};

const navLinks = [
  {
    name: "Dashboard",
    path: "/",
    icon: <RxDashboard size={30} />,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: <MdOutlineTopic size={30} />,
  },
];

const ACTION_TYPE = {
  REQUIREMENT: "requirement",
  HOURS: "hours",
  DEFECT: "defect",
};
export {
  PILL_TYPE,
  PILL_ICON,
  STAGE,
  ACTION_TYPE,
  navLinks,
  getRequirementStatus,
};
