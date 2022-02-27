// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Fix to allow testing of leaflet
// See: https://stackoverflow.com/a/54384719/997596
var createElementNSOrig = global.document.createElementNS;
// @ts-ignore
global.document.createElementNS = function (
  namespaceURI: string,
  qualifiedName: string
) {
  if (
    namespaceURI === "http://www.w3.org/2000/svg" &&
    qualifiedName === "svg"
  ) {
    // @ts-ignore
    var element = createElementNSOrig.apply(this, arguments);
    // @ts-ignore
    element.createSVGRect = function () {};
    return element;
  }
  // @ts-ignore
  return createElementNSOrig.apply(this, arguments);
};
