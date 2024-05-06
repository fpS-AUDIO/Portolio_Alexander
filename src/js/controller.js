// ----- IMPORTS ----- //

// import these for polyfilling
import "core-js/stable";
import "regenerator-runtime/runtime";

// import modules
import ViewHeader from "./views/view-header.js";

// ----- activate hot module replacement
// if (module.hot) {
//     module.hot.accept();
//   }

// ----- CONTROLLER FUNCTIONS ----- //

// ----- ENTRY POINT FUNCTION ----- //
const init = function () {
  ViewHeader.addHandlerSlowBgVideo();
};
init();
