"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var RegisterConnector = /** @class */ (function (_super) {
    __extends(RegisterConnector, _super);
    function RegisterConnector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onPress = function () {
            console.log('button pressed');
        };
        return _this;
    }
    RegisterConnector.prototype.render = function () {
        var list = [
            {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
        ];
        return (<react_native_1.View>
        {list.map(function (l, i) { return (<react_native_elements_1.ListItem key={i} leftAvatar={{ source: { uri: l.avatar_url } }} title={l.name} subtitle={l.subtitle}/>); })}
      </react_native_1.View>);
    };
    return RegisterConnector;
}(React.PureComponent));
exports.RegisterConnector = RegisterConnector;
;
