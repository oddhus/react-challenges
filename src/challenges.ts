import * as React from "react";

const Challenge1 = React.lazy(() => import("./ui/Challenge1"));
const Challenge2 = React.lazy(() => import("./ui/Challenge2"));
const Challenge3 = React.lazy(() => import("./ui/Challenge3"));
const Challenge4 = React.lazy(() => import("./ui/Challenge4"));
const Challenge5 = React.lazy(() => import("./ui/Challenge5"));
const Challenge6 = React.lazy(() => import("./ui/Challenge6"));
const Challenge7 = React.lazy(() => import("./ui/Challenge7"));
const Challenge8 = React.lazy(() => import("./ui/Challenge8"));
const Challenge9 = React.lazy(() => import("./ui/Challenge9"));
const Challenge11 = React.lazy(() => import("./interactivity/Challenge11"));
const Challenge12 = React.lazy(() => import("./interactivity/Challenge12"));
const Challenge13 = React.lazy(() => import("./interactivity/Challenge13"));
const Challenge14 = React.lazy(() => import("./interactivity/Challenge14"));
const Challenge15 = React.lazy(() => import("./interactivity/Challenge15"));
const Challenge16 = React.lazy(() => import("./interactivity/Challenge16"));
const Challenge17 = React.lazy(() => import("./interactivity/Challenge17"));
const Challenge18 = React.lazy(() => import("./interactivity/Challenge18"));
const Challenge19 = React.lazy(() => import("./interactivity/Challenge19"));
const Challenge21 = React.lazy(() => import("./managingState/Challenge21"));
const Challenge22 = React.lazy(() => import("./managingState/Challenge22"));
const Challenge23 = React.lazy(() => import("./managingState/Challenge23"));
const Challenge24 = React.lazy(() => import("./managingState/Challenge24"));
const Challenge31 = React.lazy(() => import("./escapeHatches/Challenge31"));
const Challenge32 = React.lazy(() => import("./escapeHatches/Challenge32"));
const Challenge33 = React.lazy(() => import("./escapeHatches/Challenge33"));
const Challenge34 = React.lazy(() => import("./escapeHatches/Challenge34"));

export const challengesBySection = [
  {
    sectionName: "UI",
    challenges: [
      { component: Challenge1, name: "1" },
      { component: Challenge2, name: "2" },
      { component: Challenge3, name: "3" },
      { component: Challenge4, name: "4" },
      { component: Challenge5, name: "5" },
      { component: Challenge6, name: "6" },
      { component: Challenge7, name: "7" },
      { component: Challenge8, name: "8" },
      { component: Challenge9, name: "9" },
    ],
  },
  {
    sectionName: "Interactivity",
    challenges: [
      { component: Challenge11, name: "11" },
      { component: Challenge12, name: "12" },
      { component: Challenge13, name: "13" },
      { component: Challenge14, name: "14" },
      { component: Challenge15, name: "15" },
      { component: Challenge16, name: "16" },
      { component: Challenge17, name: "17" },
      { component: Challenge18, name: "18" },
      { component: Challenge19, name: "19" },
    ],
  },
  {
    sectionName: "Managing state",
    challenges: [
      { component: Challenge21, name: "21" },
      { component: Challenge22, name: "22" },
      { component: Challenge23, name: "23" },
      { component: Challenge24, name: "24" },
    ],
  },
  {
    sectionName: "Escape hatches",
    challenges: [
      { component: Challenge31, name: "31" },
      { component: Challenge32, name: "32" },
      { component: Challenge33, name: "33" },
      { component: Challenge34, name: "34" },
    ],
  },
];
