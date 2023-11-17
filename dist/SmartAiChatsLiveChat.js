"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var SmartAiChatsLiveChat = function SmartAiChatsLiveChat(_ref) {
  var chatId = _ref.chatId;
  var base_url = 'https://smrtaichats.com';
  (0, _react.useEffect)(function () {
    // Function to load the script
    var loadScript = function loadScript() {
      // Check if the script is already added
      if (!document.getElementById("smartaichats-script")) {
        var script = document.createElement('script');
        script.src = "".concat(base_url, "/chat/").concat(chatId);
        script.async = true;
        script.id = "smartaichats-script";
        document.body.appendChild(script);
      }
    };

    // Load the script when the component mounts
    loadScript();
  }, [chatId]);
  return null; // This component does not render anything itself
};
var _default = exports["default"] = SmartAiChatsLiveChat;