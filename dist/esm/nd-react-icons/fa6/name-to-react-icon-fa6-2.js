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
export function nameToReactIcon_fa6_2(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, FaRegHeart, FaRegHospital, FaRegHourglassHalf, FaRegHourglass, FaRegIdBadge, FaRegIdCard, FaRegImage, FaRegImages, FaRegKeyboard, FaRegLemon, FaRegLifeRing, FaRegLightbulb, FaRegMap, FaRegMessage, FaRegMoneyBill1, FaRegMoon, FaRegNewspaper, FaRegNoteSticky, FaRegObjectGroup, FaRegObjectUngroup, FaRegPaperPlane, FaRegPaste, FaRegPenToSquare, FaRegRectangleList, FaRegRectangleXmark, FaRegRegistered, FaRegShareFromSquare, FaRegSnowflake, FaRegSquareCaretDown, FaRegSquareCaretLeft, FaRegSquareCaretRight, FaRegSquareCaretUp, FaRegSquareCheck, FaRegSquareFull, FaRegSquareMinus, FaRegSquarePlus, FaRegSquare, FaRegStarHalfStroke, FaRegStarHalf, FaRegStar, FaRegSun, FaRegThumbsDown, FaRegThumbsUp, FaRegTrashCan, FaRegUser, FaRegWindowMaximize, FaRegWindowMinimize, FaRegWindowRestore;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "fa6:FaRegHeart": return [3 /*break*/, 1];
                        case "fa6:FaRegHospital": return [3 /*break*/, 3];
                        case "fa6:FaRegHourglassHalf": return [3 /*break*/, 5];
                        case "fa6:FaRegHourglass": return [3 /*break*/, 7];
                        case "fa6:FaRegIdBadge": return [3 /*break*/, 9];
                        case "fa6:FaRegIdCard": return [3 /*break*/, 11];
                        case "fa6:FaRegImage": return [3 /*break*/, 13];
                        case "fa6:FaRegImages": return [3 /*break*/, 15];
                        case "fa6:FaRegKeyboard": return [3 /*break*/, 17];
                        case "fa6:FaRegLemon": return [3 /*break*/, 19];
                        case "fa6:FaRegLifeRing": return [3 /*break*/, 21];
                        case "fa6:FaRegLightbulb": return [3 /*break*/, 23];
                        case "fa6:FaRegMap": return [3 /*break*/, 25];
                        case "fa6:FaRegMessage": return [3 /*break*/, 27];
                        case "fa6:FaRegMoneyBill1": return [3 /*break*/, 29];
                        case "fa6:FaRegMoon": return [3 /*break*/, 31];
                        case "fa6:FaRegNewspaper": return [3 /*break*/, 33];
                        case "fa6:FaRegNoteSticky": return [3 /*break*/, 35];
                        case "fa6:FaRegObjectGroup": return [3 /*break*/, 37];
                        case "fa6:FaRegObjectUngroup": return [3 /*break*/, 39];
                        case "fa6:FaRegPaperPlane": return [3 /*break*/, 41];
                        case "fa6:FaRegPaste": return [3 /*break*/, 43];
                        case "fa6:FaRegPenToSquare": return [3 /*break*/, 45];
                        case "fa6:FaRegRectangleList": return [3 /*break*/, 47];
                        case "fa6:FaRegRectangleXmark": return [3 /*break*/, 49];
                        case "fa6:FaRegRegistered": return [3 /*break*/, 51];
                        case "fa6:FaRegShareFromSquare": return [3 /*break*/, 53];
                        case "fa6:FaRegSnowflake": return [3 /*break*/, 55];
                        case "fa6:FaRegSquareCaretDown": return [3 /*break*/, 57];
                        case "fa6:FaRegSquareCaretLeft": return [3 /*break*/, 59];
                        case "fa6:FaRegSquareCaretRight": return [3 /*break*/, 61];
                        case "fa6:FaRegSquareCaretUp": return [3 /*break*/, 63];
                        case "fa6:FaRegSquareCheck": return [3 /*break*/, 65];
                        case "fa6:FaRegSquareFull": return [3 /*break*/, 67];
                        case "fa6:FaRegSquareMinus": return [3 /*break*/, 69];
                        case "fa6:FaRegSquarePlus": return [3 /*break*/, 71];
                        case "fa6:FaRegSquare": return [3 /*break*/, 73];
                        case "fa6:FaRegStarHalfStroke": return [3 /*break*/, 75];
                        case "fa6:FaRegStarHalf": return [3 /*break*/, 77];
                        case "fa6:FaRegStar": return [3 /*break*/, 79];
                        case "fa6:FaRegSun": return [3 /*break*/, 81];
                        case "fa6:FaRegThumbsDown": return [3 /*break*/, 83];
                        case "fa6:FaRegThumbsUp": return [3 /*break*/, 85];
                        case "fa6:FaRegTrashCan": return [3 /*break*/, 87];
                        case "fa6:FaRegUser": return [3 /*break*/, 89];
                        case "fa6:FaRegWindowMaximize": return [3 /*break*/, 91];
                        case "fa6:FaRegWindowMinimize": return [3 /*break*/, 93];
                        case "fa6:FaRegWindowRestore": return [3 /*break*/, 95];
                    }
                    return [3 /*break*/, 97];
                case 1: return [4 /*yield*/, import("react-icons/fa6")];
                case 2:
                    FaRegHeart = (_b.sent()).FaRegHeart;
                    return [2 /*return*/, FaRegHeart];
                case 3: return [4 /*yield*/, import("react-icons/fa6")];
                case 4:
                    FaRegHospital = (_b.sent()).FaRegHospital;
                    return [2 /*return*/, FaRegHospital];
                case 5: return [4 /*yield*/, import("react-icons/fa6")];
                case 6:
                    FaRegHourglassHalf = (_b.sent()).FaRegHourglassHalf;
                    return [2 /*return*/, FaRegHourglassHalf];
                case 7: return [4 /*yield*/, import("react-icons/fa6")];
                case 8:
                    FaRegHourglass = (_b.sent()).FaRegHourglass;
                    return [2 /*return*/, FaRegHourglass];
                case 9: return [4 /*yield*/, import("react-icons/fa6")];
                case 10:
                    FaRegIdBadge = (_b.sent()).FaRegIdBadge;
                    return [2 /*return*/, FaRegIdBadge];
                case 11: return [4 /*yield*/, import("react-icons/fa6")];
                case 12:
                    FaRegIdCard = (_b.sent()).FaRegIdCard;
                    return [2 /*return*/, FaRegIdCard];
                case 13: return [4 /*yield*/, import("react-icons/fa6")];
                case 14:
                    FaRegImage = (_b.sent()).FaRegImage;
                    return [2 /*return*/, FaRegImage];
                case 15: return [4 /*yield*/, import("react-icons/fa6")];
                case 16:
                    FaRegImages = (_b.sent()).FaRegImages;
                    return [2 /*return*/, FaRegImages];
                case 17: return [4 /*yield*/, import("react-icons/fa6")];
                case 18:
                    FaRegKeyboard = (_b.sent()).FaRegKeyboard;
                    return [2 /*return*/, FaRegKeyboard];
                case 19: return [4 /*yield*/, import("react-icons/fa6")];
                case 20:
                    FaRegLemon = (_b.sent()).FaRegLemon;
                    return [2 /*return*/, FaRegLemon];
                case 21: return [4 /*yield*/, import("react-icons/fa6")];
                case 22:
                    FaRegLifeRing = (_b.sent()).FaRegLifeRing;
                    return [2 /*return*/, FaRegLifeRing];
                case 23: return [4 /*yield*/, import("react-icons/fa6")];
                case 24:
                    FaRegLightbulb = (_b.sent()).FaRegLightbulb;
                    return [2 /*return*/, FaRegLightbulb];
                case 25: return [4 /*yield*/, import("react-icons/fa6")];
                case 26:
                    FaRegMap = (_b.sent()).FaRegMap;
                    return [2 /*return*/, FaRegMap];
                case 27: return [4 /*yield*/, import("react-icons/fa6")];
                case 28:
                    FaRegMessage = (_b.sent()).FaRegMessage;
                    return [2 /*return*/, FaRegMessage];
                case 29: return [4 /*yield*/, import("react-icons/fa6")];
                case 30:
                    FaRegMoneyBill1 = (_b.sent()).FaRegMoneyBill1;
                    return [2 /*return*/, FaRegMoneyBill1];
                case 31: return [4 /*yield*/, import("react-icons/fa6")];
                case 32:
                    FaRegMoon = (_b.sent()).FaRegMoon;
                    return [2 /*return*/, FaRegMoon];
                case 33: return [4 /*yield*/, import("react-icons/fa6")];
                case 34:
                    FaRegNewspaper = (_b.sent()).FaRegNewspaper;
                    return [2 /*return*/, FaRegNewspaper];
                case 35: return [4 /*yield*/, import("react-icons/fa6")];
                case 36:
                    FaRegNoteSticky = (_b.sent()).FaRegNoteSticky;
                    return [2 /*return*/, FaRegNoteSticky];
                case 37: return [4 /*yield*/, import("react-icons/fa6")];
                case 38:
                    FaRegObjectGroup = (_b.sent()).FaRegObjectGroup;
                    return [2 /*return*/, FaRegObjectGroup];
                case 39: return [4 /*yield*/, import("react-icons/fa6")];
                case 40:
                    FaRegObjectUngroup = (_b.sent()).FaRegObjectUngroup;
                    return [2 /*return*/, FaRegObjectUngroup];
                case 41: return [4 /*yield*/, import("react-icons/fa6")];
                case 42:
                    FaRegPaperPlane = (_b.sent()).FaRegPaperPlane;
                    return [2 /*return*/, FaRegPaperPlane];
                case 43: return [4 /*yield*/, import("react-icons/fa6")];
                case 44:
                    FaRegPaste = (_b.sent()).FaRegPaste;
                    return [2 /*return*/, FaRegPaste];
                case 45: return [4 /*yield*/, import("react-icons/fa6")];
                case 46:
                    FaRegPenToSquare = (_b.sent()).FaRegPenToSquare;
                    return [2 /*return*/, FaRegPenToSquare];
                case 47: return [4 /*yield*/, import("react-icons/fa6")];
                case 48:
                    FaRegRectangleList = (_b.sent()).FaRegRectangleList;
                    return [2 /*return*/, FaRegRectangleList];
                case 49: return [4 /*yield*/, import("react-icons/fa6")];
                case 50:
                    FaRegRectangleXmark = (_b.sent()).FaRegRectangleXmark;
                    return [2 /*return*/, FaRegRectangleXmark];
                case 51: return [4 /*yield*/, import("react-icons/fa6")];
                case 52:
                    FaRegRegistered = (_b.sent()).FaRegRegistered;
                    return [2 /*return*/, FaRegRegistered];
                case 53: return [4 /*yield*/, import("react-icons/fa6")];
                case 54:
                    FaRegShareFromSquare = (_b.sent()).FaRegShareFromSquare;
                    return [2 /*return*/, FaRegShareFromSquare];
                case 55: return [4 /*yield*/, import("react-icons/fa6")];
                case 56:
                    FaRegSnowflake = (_b.sent()).FaRegSnowflake;
                    return [2 /*return*/, FaRegSnowflake];
                case 57: return [4 /*yield*/, import("react-icons/fa6")];
                case 58:
                    FaRegSquareCaretDown = (_b.sent()).FaRegSquareCaretDown;
                    return [2 /*return*/, FaRegSquareCaretDown];
                case 59: return [4 /*yield*/, import("react-icons/fa6")];
                case 60:
                    FaRegSquareCaretLeft = (_b.sent()).FaRegSquareCaretLeft;
                    return [2 /*return*/, FaRegSquareCaretLeft];
                case 61: return [4 /*yield*/, import("react-icons/fa6")];
                case 62:
                    FaRegSquareCaretRight = (_b.sent()).FaRegSquareCaretRight;
                    return [2 /*return*/, FaRegSquareCaretRight];
                case 63: return [4 /*yield*/, import("react-icons/fa6")];
                case 64:
                    FaRegSquareCaretUp = (_b.sent()).FaRegSquareCaretUp;
                    return [2 /*return*/, FaRegSquareCaretUp];
                case 65: return [4 /*yield*/, import("react-icons/fa6")];
                case 66:
                    FaRegSquareCheck = (_b.sent()).FaRegSquareCheck;
                    return [2 /*return*/, FaRegSquareCheck];
                case 67: return [4 /*yield*/, import("react-icons/fa6")];
                case 68:
                    FaRegSquareFull = (_b.sent()).FaRegSquareFull;
                    return [2 /*return*/, FaRegSquareFull];
                case 69: return [4 /*yield*/, import("react-icons/fa6")];
                case 70:
                    FaRegSquareMinus = (_b.sent()).FaRegSquareMinus;
                    return [2 /*return*/, FaRegSquareMinus];
                case 71: return [4 /*yield*/, import("react-icons/fa6")];
                case 72:
                    FaRegSquarePlus = (_b.sent()).FaRegSquarePlus;
                    return [2 /*return*/, FaRegSquarePlus];
                case 73: return [4 /*yield*/, import("react-icons/fa6")];
                case 74:
                    FaRegSquare = (_b.sent()).FaRegSquare;
                    return [2 /*return*/, FaRegSquare];
                case 75: return [4 /*yield*/, import("react-icons/fa6")];
                case 76:
                    FaRegStarHalfStroke = (_b.sent()).FaRegStarHalfStroke;
                    return [2 /*return*/, FaRegStarHalfStroke];
                case 77: return [4 /*yield*/, import("react-icons/fa6")];
                case 78:
                    FaRegStarHalf = (_b.sent()).FaRegStarHalf;
                    return [2 /*return*/, FaRegStarHalf];
                case 79: return [4 /*yield*/, import("react-icons/fa6")];
                case 80:
                    FaRegStar = (_b.sent()).FaRegStar;
                    return [2 /*return*/, FaRegStar];
                case 81: return [4 /*yield*/, import("react-icons/fa6")];
                case 82:
                    FaRegSun = (_b.sent()).FaRegSun;
                    return [2 /*return*/, FaRegSun];
                case 83: return [4 /*yield*/, import("react-icons/fa6")];
                case 84:
                    FaRegThumbsDown = (_b.sent()).FaRegThumbsDown;
                    return [2 /*return*/, FaRegThumbsDown];
                case 85: return [4 /*yield*/, import("react-icons/fa6")];
                case 86:
                    FaRegThumbsUp = (_b.sent()).FaRegThumbsUp;
                    return [2 /*return*/, FaRegThumbsUp];
                case 87: return [4 /*yield*/, import("react-icons/fa6")];
                case 88:
                    FaRegTrashCan = (_b.sent()).FaRegTrashCan;
                    return [2 /*return*/, FaRegTrashCan];
                case 89: return [4 /*yield*/, import("react-icons/fa6")];
                case 90:
                    FaRegUser = (_b.sent()).FaRegUser;
                    return [2 /*return*/, FaRegUser];
                case 91: return [4 /*yield*/, import("react-icons/fa6")];
                case 92:
                    FaRegWindowMaximize = (_b.sent()).FaRegWindowMaximize;
                    return [2 /*return*/, FaRegWindowMaximize];
                case 93: return [4 /*yield*/, import("react-icons/fa6")];
                case 94:
                    FaRegWindowMinimize = (_b.sent()).FaRegWindowMinimize;
                    return [2 /*return*/, FaRegWindowMinimize];
                case 95: return [4 /*yield*/, import("react-icons/fa6")];
                case 96:
                    FaRegWindowRestore = (_b.sent()).FaRegWindowRestore;
                    return [2 /*return*/, FaRegWindowRestore];
                case 97: return [2 /*return*/];
            }
        });
    });
}
