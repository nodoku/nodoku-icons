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
export function nameToReactIcon_ri_3(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, RiSunCloudyFill, RiSunCloudyLine, RiSunFill, RiSunFoggyFill, RiSunFoggyLine, RiSunLine, RiTempColdFill, RiTempColdLine, RiTempHotFill, RiTempHotLine, RiThunderstormsFill, RiThunderstormsLine, RiTornadoFill, RiTornadoLine, RiTyphoonFill, RiTyphoonLine, RiWaterPercentFill, RiWaterPercentLine, RiWindyFill, RiWindyLine;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "ri:RiSunCloudyFill": return [3 /*break*/, 1];
                        case "ri:RiSunCloudyLine": return [3 /*break*/, 3];
                        case "ri:RiSunFill": return [3 /*break*/, 5];
                        case "ri:RiSunFoggyFill": return [3 /*break*/, 7];
                        case "ri:RiSunFoggyLine": return [3 /*break*/, 9];
                        case "ri:RiSunLine": return [3 /*break*/, 11];
                        case "ri:RiTempColdFill": return [3 /*break*/, 13];
                        case "ri:RiTempColdLine": return [3 /*break*/, 15];
                        case "ri:RiTempHotFill": return [3 /*break*/, 17];
                        case "ri:RiTempHotLine": return [3 /*break*/, 19];
                        case "ri:RiThunderstormsFill": return [3 /*break*/, 21];
                        case "ri:RiThunderstormsLine": return [3 /*break*/, 23];
                        case "ri:RiTornadoFill": return [3 /*break*/, 25];
                        case "ri:RiTornadoLine": return [3 /*break*/, 27];
                        case "ri:RiTyphoonFill": return [3 /*break*/, 29];
                        case "ri:RiTyphoonLine": return [3 /*break*/, 31];
                        case "ri:RiWaterPercentFill": return [3 /*break*/, 33];
                        case "ri:RiWaterPercentLine": return [3 /*break*/, 35];
                        case "ri:RiWindyFill": return [3 /*break*/, 37];
                        case "ri:RiWindyLine": return [3 /*break*/, 39];
                    }
                    return [3 /*break*/, 41];
                case 1: return [4 /*yield*/, import("react-icons/ri")];
                case 2:
                    RiSunCloudyFill = (_b.sent()).RiSunCloudyFill;
                    return [2 /*return*/, RiSunCloudyFill];
                case 3: return [4 /*yield*/, import("react-icons/ri")];
                case 4:
                    RiSunCloudyLine = (_b.sent()).RiSunCloudyLine;
                    return [2 /*return*/, RiSunCloudyLine];
                case 5: return [4 /*yield*/, import("react-icons/ri")];
                case 6:
                    RiSunFill = (_b.sent()).RiSunFill;
                    return [2 /*return*/, RiSunFill];
                case 7: return [4 /*yield*/, import("react-icons/ri")];
                case 8:
                    RiSunFoggyFill = (_b.sent()).RiSunFoggyFill;
                    return [2 /*return*/, RiSunFoggyFill];
                case 9: return [4 /*yield*/, import("react-icons/ri")];
                case 10:
                    RiSunFoggyLine = (_b.sent()).RiSunFoggyLine;
                    return [2 /*return*/, RiSunFoggyLine];
                case 11: return [4 /*yield*/, import("react-icons/ri")];
                case 12:
                    RiSunLine = (_b.sent()).RiSunLine;
                    return [2 /*return*/, RiSunLine];
                case 13: return [4 /*yield*/, import("react-icons/ri")];
                case 14:
                    RiTempColdFill = (_b.sent()).RiTempColdFill;
                    return [2 /*return*/, RiTempColdFill];
                case 15: return [4 /*yield*/, import("react-icons/ri")];
                case 16:
                    RiTempColdLine = (_b.sent()).RiTempColdLine;
                    return [2 /*return*/, RiTempColdLine];
                case 17: return [4 /*yield*/, import("react-icons/ri")];
                case 18:
                    RiTempHotFill = (_b.sent()).RiTempHotFill;
                    return [2 /*return*/, RiTempHotFill];
                case 19: return [4 /*yield*/, import("react-icons/ri")];
                case 20:
                    RiTempHotLine = (_b.sent()).RiTempHotLine;
                    return [2 /*return*/, RiTempHotLine];
                case 21: return [4 /*yield*/, import("react-icons/ri")];
                case 22:
                    RiThunderstormsFill = (_b.sent()).RiThunderstormsFill;
                    return [2 /*return*/, RiThunderstormsFill];
                case 23: return [4 /*yield*/, import("react-icons/ri")];
                case 24:
                    RiThunderstormsLine = (_b.sent()).RiThunderstormsLine;
                    return [2 /*return*/, RiThunderstormsLine];
                case 25: return [4 /*yield*/, import("react-icons/ri")];
                case 26:
                    RiTornadoFill = (_b.sent()).RiTornadoFill;
                    return [2 /*return*/, RiTornadoFill];
                case 27: return [4 /*yield*/, import("react-icons/ri")];
                case 28:
                    RiTornadoLine = (_b.sent()).RiTornadoLine;
                    return [2 /*return*/, RiTornadoLine];
                case 29: return [4 /*yield*/, import("react-icons/ri")];
                case 30:
                    RiTyphoonFill = (_b.sent()).RiTyphoonFill;
                    return [2 /*return*/, RiTyphoonFill];
                case 31: return [4 /*yield*/, import("react-icons/ri")];
                case 32:
                    RiTyphoonLine = (_b.sent()).RiTyphoonLine;
                    return [2 /*return*/, RiTyphoonLine];
                case 33: return [4 /*yield*/, import("react-icons/ri")];
                case 34:
                    RiWaterPercentFill = (_b.sent()).RiWaterPercentFill;
                    return [2 /*return*/, RiWaterPercentFill];
                case 35: return [4 /*yield*/, import("react-icons/ri")];
                case 36:
                    RiWaterPercentLine = (_b.sent()).RiWaterPercentLine;
                    return [2 /*return*/, RiWaterPercentLine];
                case 37: return [4 /*yield*/, import("react-icons/ri")];
                case 38:
                    RiWindyFill = (_b.sent()).RiWindyFill;
                    return [2 /*return*/, RiWindyFill];
                case 39: return [4 /*yield*/, import("react-icons/ri")];
                case 40:
                    RiWindyLine = (_b.sent()).RiWindyLine;
                    return [2 /*return*/, RiWindyLine];
                case 41: return [2 /*return*/];
            }
        });
    });
}
