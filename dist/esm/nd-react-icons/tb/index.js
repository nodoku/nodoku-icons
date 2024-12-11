var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { nameToReactIcon_tb_0 } from "./name-to-react-icon-tb-0";
import { nameToReactIcon_tb_1 } from "./name-to-react-icon-tb-1";
import { nameToReactIcon_tb_2 } from "./name-to-react-icon-tb-2";
import { nameToReactIcon_tb_3 } from "./name-to-react-icon-tb-3";
import { nameToReactIcon_tb_4 } from "./name-to-react-icon-tb-4";
import { nameToReactIcon_tb_5 } from "./name-to-react-icon-tb-5";
export function nameToReactIcon_tb(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0: return [4 /*yield*/, nameToReactIcon_tb_0(iconName)];
                case 1:
                    _e = (_f.sent());
                    if (_e) return [3 /*break*/, 3];
                    return [4 /*yield*/, nameToReactIcon_tb_1(iconName)];
                case 2:
                    _e = (_f.sent());
                    _f.label = 3;
                case 3:
                    _d = _e;
                    if (_d) return [3 /*break*/, 5];
                    return [4 /*yield*/, nameToReactIcon_tb_2(iconName)];
                case 4:
                    _d = (_f.sent());
                    _f.label = 5;
                case 5:
                    _c = _d;
                    if (_c) return [3 /*break*/, 7];
                    return [4 /*yield*/, nameToReactIcon_tb_3(iconName)];
                case 6:
                    _c = (_f.sent());
                    _f.label = 7;
                case 7:
                    _b = _c;
                    if (_b) return [3 /*break*/, 9];
                    return [4 /*yield*/, nameToReactIcon_tb_4(iconName)];
                case 8:
                    _b = (_f.sent());
                    _f.label = 9;
                case 9:
                    _a = _b;
                    if (_a) return [3 /*break*/, 11];
                    return [4 /*yield*/, nameToReactIcon_tb_5(iconName)];
                case 10:
                    _a = (_f.sent());
                    _f.label = 11;
                case 11: return [2 /*return*/, (_a ||
                        undefined)];
            }
        });
    });
}
