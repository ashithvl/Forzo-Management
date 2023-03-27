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

export { PILL_TYPE, PILL_ICON, STAGE, getRequirementStatus };
