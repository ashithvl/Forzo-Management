const home = [
  {
    id: 1,
    projectName: "Everify",
    releaseName: "r2.0 - canopy - upgrade",
    planned: null,
    actual: null,
    totalModules: 10,
    toStart: 2,
    wip: 6,
    completed: 2,
    updatedAt: "26-03-2023",
    uat: {
      isUat: false,
      customerDefects: 0,
      internalDefects: 0,
    },
    requirementStatus: 1,
    requirementVersion: 10,
  },
  {
    id: 2,
    projectName: "Dealerline",
    releaseName: "r11.0 - auto-rating",
    planned: 300,
    actual: 100,
    totalModules: 14,
    toStart: 2,
    wip: 10,
    completed: 2,
    updatedAt: "23-03-2023",
    uat: {
      isUat: false,
      customerDefects: 0,
      internalDefects: 0,
    },
    requirementStatus: 2,
    requirementVersion: 10,
  },
  {
    id: 3,
    projectName: "Dealerline",
    releaseName: "r11.5 - carleton",
    planned: 300,
    actual: 400,
    totalModules: 3,
    toStart: 2,
    wip: 0,
    completed: 1,
    updatedAt: "20-03-2023",
    uat: {
      isUat: true,
      customerDefects: 4,
      internalDefects: 11,
    },
    requirementStatus: 1,
    requirementVersion: 10,
  },
  {
    id: 4,
    projectName: "Dealerline",
    releaseName: "r12.0 - sel - trade - val",
    planned: 300,
    actual: 200,
    totalModules: 8,
    toStart: 2,
    wip: 6,
    completed: 0,
    updatedAt: "20-03-2023",
    uat: {
      isUat: false,
      customerDefects: 10,
      internalDefects: 0,
    },
    requirementStatus: 1,
    requirementVersion: 10,
  },
  {
    id: 5,
    projectName: "Dealerline",
    releaseName: "r10.0 - UI - update",
    planned: 300,
    actual: 200,
    totalModules: 8,
    toStart: 0,
    wip: 0,
    completed: 8,
    updatedAt: "20-01-2023",
    uat: {
      isUat: true,
      customerDefects: 0,
      internalDefects: 0,
    },
    requirementStatus: 1,
    requirementVersion: 10,
  },
];

const todoList = [
  {
    id: 1,
    title: "Hellow world",
    description: null,
    dueDate: "10-04-2023",
  },
  {
    id: 2,
    title: "Hellow world",
    description: "This is world",
    dueDate: "6-04-2023",
  },
  {
    id: 3,
    title: "Hellow world",
    description: "This is world",
    dueDate: "13-04-2023",
  },
  {
    id: 4,
    title: "Hellow world",
    description: "This is world",
    dueDate: "20-04-2023",
  },
  {
    id: 5,
    title: "Hellow world",
    description: "This is world",
    dueDate: "20-04-2023",
  },
  {
    id: 6,
    title: "Hellow world",
    description: "This is world",
    dueDate: "20-04-2023",
  },
  {
    id: 7,
    title: "Hellow world",
    description: "This is world",
    dueDate: "20-04-2023",
  },
  {
    id: 8,
    title: "Hellow world",
    description: "This is world",
    dueDate: "20-04-2023",
  },
  {
    id: 9,
    title: "Hellow world",
    description: "This is world",
    dueDate: "20-04-2023",
  },
  {
    id: 10,
    title: "Hellow world",
    description: "This is world",
    dueDate: "20-04-2023",
  },
  {
    id: 11,
    title: "Hellow world",
    description: "This is world",
    dueDate: "20-04-2023",
  },
  {
    id: 12,
    title: "Hellow world",
    description: "This is world",
    dueDate: "20-03-2023",
  },
  {
    id: 13,
    title: "Hellow world",
    description:
      "This is world worldworld world worldworld worldworld worldworld  world worldworldworld",
    dueDate: "20-03-2023",
  },
  {
    id: 14,
    title: "Hellow world",
    description:
      "This is world worldworld world worldworld worldworld worldworld  world worldworldworld",
    dueDate: "20-04-2023",
  },
];

const breadcrumbs = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/project",
    name: "Project",
  },
];

const projects = [
  {
    projectName: "Dealerline",
    owner: "Srilekha",
    activeReleases: ["website", "blog"],
  },
  {
    projectName: "eVerify",
    owner: "Deepak",
    activeReleases: ["ev-2.5", "ev-3.0"],
  },
  {
    projectName: "eVerify",
    owner: "Deepak",
    activeReleases: ["ev-2.5", "ev-3.0"],
  },
];

const releases = [
  {
    releaseName: "rel-11-auto_rating",
    owner: "Srilekha",
  },
  {
    releaseName: "rel-11.5-SPP",
    owner: "Srilekha",
  },
  {
    releaseName: "rel-12-trade_eval",
    owner: "Srilekha",
  },
];

const backlogs = [
  {
    id: 1,
    releaseName: "rel-12-auto_rating",
    userStory: "Forgot password",
    status: "CLOSED",
  },
  {
    id: 1,
    releaseName: "rel-12-auto_rating",
    userStory: "Forgot password",
    status: "OPEN",
  },
  {
    id: 1,
    releaseName: "rel-12-auto_rating",
    userStory: "Forgot password",
    status: "CLOSED",
  },
  {
    id: 1,
    releaseName: "rel-12-auto_rating",
    userStory: "Forgot password test this forgpt password for lejnth ",
    status: "OPEN",
  },
];

const release = [
  {
    id: 1,
    module: "Requirement",
    plannedStart: "10-4-2023",
    plannedEnd: "10-4-2023",
    actualStart: "10-4-2023",
    actualEnd: "10-4-2023",
    plannedHours: "200",
    actualHours: "200",
    status: "WIP",
    assignedTo: "Deepak",
  },
  {
    id: 2,
    module: "Forgot password",
    plannedStart: "10-4-2023",
    plannedEnd: "10-4-2023",
    actualStart: "10-4-2023",
    actualEnd: "10-4-2023",
    plannedHours: "200",
    actualHours: "200",
    status: "WIP",
    assignedTo: "Ashith",
  },
  {
    id: 3,
    module: "Forgot password",
    plannedStart: "10-4-2023",
    plannedEnd: "10-4-2023",
    actualStart: "10-4-2023",
    actualEnd: "10-4-2023",
    plannedHours: "200",
    actualHours: "200",
    status: "WIP",
    assignedTo: "Ashith",
  },
  {
    id: 4,
    module: "Forgot password",
    plannedStart: "10-4-2023",
    plannedEnd: "10-4-2023",
    actualStart: "10-4-2023",
    actualEnd: "10-4-2023",
    plannedHours: "200",
    actualHours: "200",
    status: "WIP",
    assignedTo: "Ashith",
  },
  {
    id: 5,
    module: "UAT",
    plannedStart: "10-4-2023",
    plannedEnd: "10-4-2023",
    actualStart: "10-4-2023",
    actualEnd: "10-4-2023",
    plannedHours: "200",
    actualHours: "200",
    status: "To Start",
    assignedTo: "Ashith",
  },
];

const driveFolders = [
  {
    name: "Project Plan",
  },
  {
    name: "Requirement",
  },
  {
    name: "Design",
  },
  {
    name: "Development",
  },
  {
    name: "Validation",
  },
  {
    name: "Production Support",
  },
];
const driveFiles = [
  {
    name: "ev-r2-canopy_upgrade-pp-2023.04.12.xlsx",
    lastModified: "2023-04-11",
  },
  {
    name: "ev-r2-canopy_upgrade-pp-2023.04.12.xlsx",
    lastModified: "2023-04-11",
  },
  {
    name: "ev-r2-canopy_upgrade-pp-2023.04.12.xlsx",
    lastModified: "2023-04-11",
  },
  {
    name: "ev-r2-canopy_upgrade-pp-2023.04.12.xlsx",
    lastModified: "2023-04-11",
  },
  {
    name: "ev-r2-canopy_upgrade-pp-2023.04.12.xlsx",
    lastModified: "2023-04-11",
  },
  {
    name: "ev-r2-canopy_upgrade-pp-2023.04.12.xlsx",
    lastModified: "2023-04-11",
  },
  {
    name: "ev-r2-canopy_upgrade-pp-2023.04.12.xlsx",
    lastModified: "2023-04-11",
  },
];

export {
  home,
  todoList,
  breadcrumbs,
  projects,
  releases,
  backlogs,
  release,
  driveFiles,
  driveFolders,
};
