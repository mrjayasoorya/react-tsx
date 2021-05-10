export const routes = {
  // PORTFOLIO
  home: "/",

  // DIARY
  mydiary: "/mydiary",
  professional: "/mydiary/professional",

  // JAVASCRIPT
  javascript: "/mydiary/professional/javascriptConcepts",
  // add routes for learning concepts under javascript here..
  // ex: mydiary/professional/javascriptConcepts/array
  javascriptCocepts: "/mydiary/professional/javascriptConcepts/:id",

  // ABOUT SPA
  spa: "/mydiary/professional/SPA",

  // -- react js --
  reactjs: "/mydiary/professional/reactjs",
  // [ABOUT REACT AND REACT COMPONENT LIFECYCLE , HOOKS , REDUX , HOC , WITHOUT CRA , PWA , OFFLINE ACCESS , NOTIFICATION AND PUSH NOTIFICATIONS , PACKAGE BUNDLERS]
  // add routes for learning concepts under react js here..
  // ex: mydiary/professional/javascriptConcepts/hooks
  reactjsCocepts: "/mydiary/professional/reactjs/:id",
  // -- react js --

  // GIT
  git: "/mydiary/professional/git",

  // DATASTRUCTURES
  datastructures: "/mydiary/professional/datastructures",

  // ALGORITHMS
  algorithms: "/mydiary/professional/algorithms"
};
