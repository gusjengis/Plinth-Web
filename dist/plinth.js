'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "canvas[alt=\"winit window\"] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1; /* Places the canvas behind other elements */\n  display: block; /* Removes any default spacing */\n}\n";
styleInject(css_248z);

var ApplyStyling = function () { return true; };

exports.ApplyStyling = ApplyStyling;
//# sourceMappingURL=plinth.js.map
