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
export function nameToReactIcon_gi_4(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, GiWoodCanoe, GiWoodClub, GiWoodFrame, GiWoodPile, GiWoodStick, GiWoodenChair, GiWoodenClogs, GiWoodenCrate, GiWoodenDoor, GiWoodenFence, GiWoodenHelmet, GiWoodenPegleg, GiWoodenPier, GiWoodenSign, GiWool, GiWorld, GiWormMouth, GiWorms, GiWorriedEyes, GiWrappedHeart, GiWrappedSweet, GiWrappingStar, GiWreckingBall, GiWrench, GiWyvern, GiXylophone, GiYarn, GiYinYang, GiYunluo, GiZBrick, GiZatGun, GiZebraShield, GiZeppelin, GiZeusSword, GiZigArrow, GiZigzagCage, GiZigzagHieroglyph, GiZigzagLeaf, GiZigzagTune, GiZipper;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "gi:GiWoodCanoe": return [3 /*break*/, 1];
                        case "gi:GiWoodClub": return [3 /*break*/, 3];
                        case "gi:GiWoodFrame": return [3 /*break*/, 5];
                        case "gi:GiWoodPile": return [3 /*break*/, 7];
                        case "gi:GiWoodStick": return [3 /*break*/, 9];
                        case "gi:GiWoodenChair": return [3 /*break*/, 11];
                        case "gi:GiWoodenClogs": return [3 /*break*/, 13];
                        case "gi:GiWoodenCrate": return [3 /*break*/, 15];
                        case "gi:GiWoodenDoor": return [3 /*break*/, 17];
                        case "gi:GiWoodenFence": return [3 /*break*/, 19];
                        case "gi:GiWoodenHelmet": return [3 /*break*/, 21];
                        case "gi:GiWoodenPegleg": return [3 /*break*/, 23];
                        case "gi:GiWoodenPier": return [3 /*break*/, 25];
                        case "gi:GiWoodenSign": return [3 /*break*/, 27];
                        case "gi:GiWool": return [3 /*break*/, 29];
                        case "gi:GiWorld": return [3 /*break*/, 31];
                        case "gi:GiWormMouth": return [3 /*break*/, 33];
                        case "gi:GiWorms": return [3 /*break*/, 35];
                        case "gi:GiWorriedEyes": return [3 /*break*/, 37];
                        case "gi:GiWrappedHeart": return [3 /*break*/, 39];
                        case "gi:GiWrappedSweet": return [3 /*break*/, 41];
                        case "gi:GiWrappingStar": return [3 /*break*/, 43];
                        case "gi:GiWreckingBall": return [3 /*break*/, 45];
                        case "gi:GiWrench": return [3 /*break*/, 47];
                        case "gi:GiWyvern": return [3 /*break*/, 49];
                        case "gi:GiXylophone": return [3 /*break*/, 51];
                        case "gi:GiYarn": return [3 /*break*/, 53];
                        case "gi:GiYinYang": return [3 /*break*/, 55];
                        case "gi:GiYunluo": return [3 /*break*/, 57];
                        case "gi:GiZBrick": return [3 /*break*/, 59];
                        case "gi:GiZatGun": return [3 /*break*/, 61];
                        case "gi:GiZebraShield": return [3 /*break*/, 63];
                        case "gi:GiZeppelin": return [3 /*break*/, 65];
                        case "gi:GiZeusSword": return [3 /*break*/, 67];
                        case "gi:GiZigArrow": return [3 /*break*/, 69];
                        case "gi:GiZigzagCage": return [3 /*break*/, 71];
                        case "gi:GiZigzagHieroglyph": return [3 /*break*/, 73];
                        case "gi:GiZigzagLeaf": return [3 /*break*/, 75];
                        case "gi:GiZigzagTune": return [3 /*break*/, 77];
                        case "gi:GiZipper": return [3 /*break*/, 79];
                    }
                    return [3 /*break*/, 81];
                case 1: return [4 /*yield*/, import("react-icons/gi")];
                case 2:
                    GiWoodCanoe = (_b.sent()).GiWoodCanoe;
                    return [2 /*return*/, GiWoodCanoe];
                case 3: return [4 /*yield*/, import("react-icons/gi")];
                case 4:
                    GiWoodClub = (_b.sent()).GiWoodClub;
                    return [2 /*return*/, GiWoodClub];
                case 5: return [4 /*yield*/, import("react-icons/gi")];
                case 6:
                    GiWoodFrame = (_b.sent()).GiWoodFrame;
                    return [2 /*return*/, GiWoodFrame];
                case 7: return [4 /*yield*/, import("react-icons/gi")];
                case 8:
                    GiWoodPile = (_b.sent()).GiWoodPile;
                    return [2 /*return*/, GiWoodPile];
                case 9: return [4 /*yield*/, import("react-icons/gi")];
                case 10:
                    GiWoodStick = (_b.sent()).GiWoodStick;
                    return [2 /*return*/, GiWoodStick];
                case 11: return [4 /*yield*/, import("react-icons/gi")];
                case 12:
                    GiWoodenChair = (_b.sent()).GiWoodenChair;
                    return [2 /*return*/, GiWoodenChair];
                case 13: return [4 /*yield*/, import("react-icons/gi")];
                case 14:
                    GiWoodenClogs = (_b.sent()).GiWoodenClogs;
                    return [2 /*return*/, GiWoodenClogs];
                case 15: return [4 /*yield*/, import("react-icons/gi")];
                case 16:
                    GiWoodenCrate = (_b.sent()).GiWoodenCrate;
                    return [2 /*return*/, GiWoodenCrate];
                case 17: return [4 /*yield*/, import("react-icons/gi")];
                case 18:
                    GiWoodenDoor = (_b.sent()).GiWoodenDoor;
                    return [2 /*return*/, GiWoodenDoor];
                case 19: return [4 /*yield*/, import("react-icons/gi")];
                case 20:
                    GiWoodenFence = (_b.sent()).GiWoodenFence;
                    return [2 /*return*/, GiWoodenFence];
                case 21: return [4 /*yield*/, import("react-icons/gi")];
                case 22:
                    GiWoodenHelmet = (_b.sent()).GiWoodenHelmet;
                    return [2 /*return*/, GiWoodenHelmet];
                case 23: return [4 /*yield*/, import("react-icons/gi")];
                case 24:
                    GiWoodenPegleg = (_b.sent()).GiWoodenPegleg;
                    return [2 /*return*/, GiWoodenPegleg];
                case 25: return [4 /*yield*/, import("react-icons/gi")];
                case 26:
                    GiWoodenPier = (_b.sent()).GiWoodenPier;
                    return [2 /*return*/, GiWoodenPier];
                case 27: return [4 /*yield*/, import("react-icons/gi")];
                case 28:
                    GiWoodenSign = (_b.sent()).GiWoodenSign;
                    return [2 /*return*/, GiWoodenSign];
                case 29: return [4 /*yield*/, import("react-icons/gi")];
                case 30:
                    GiWool = (_b.sent()).GiWool;
                    return [2 /*return*/, GiWool];
                case 31: return [4 /*yield*/, import("react-icons/gi")];
                case 32:
                    GiWorld = (_b.sent()).GiWorld;
                    return [2 /*return*/, GiWorld];
                case 33: return [4 /*yield*/, import("react-icons/gi")];
                case 34:
                    GiWormMouth = (_b.sent()).GiWormMouth;
                    return [2 /*return*/, GiWormMouth];
                case 35: return [4 /*yield*/, import("react-icons/gi")];
                case 36:
                    GiWorms = (_b.sent()).GiWorms;
                    return [2 /*return*/, GiWorms];
                case 37: return [4 /*yield*/, import("react-icons/gi")];
                case 38:
                    GiWorriedEyes = (_b.sent()).GiWorriedEyes;
                    return [2 /*return*/, GiWorriedEyes];
                case 39: return [4 /*yield*/, import("react-icons/gi")];
                case 40:
                    GiWrappedHeart = (_b.sent()).GiWrappedHeart;
                    return [2 /*return*/, GiWrappedHeart];
                case 41: return [4 /*yield*/, import("react-icons/gi")];
                case 42:
                    GiWrappedSweet = (_b.sent()).GiWrappedSweet;
                    return [2 /*return*/, GiWrappedSweet];
                case 43: return [4 /*yield*/, import("react-icons/gi")];
                case 44:
                    GiWrappingStar = (_b.sent()).GiWrappingStar;
                    return [2 /*return*/, GiWrappingStar];
                case 45: return [4 /*yield*/, import("react-icons/gi")];
                case 46:
                    GiWreckingBall = (_b.sent()).GiWreckingBall;
                    return [2 /*return*/, GiWreckingBall];
                case 47: return [4 /*yield*/, import("react-icons/gi")];
                case 48:
                    GiWrench = (_b.sent()).GiWrench;
                    return [2 /*return*/, GiWrench];
                case 49: return [4 /*yield*/, import("react-icons/gi")];
                case 50:
                    GiWyvern = (_b.sent()).GiWyvern;
                    return [2 /*return*/, GiWyvern];
                case 51: return [4 /*yield*/, import("react-icons/gi")];
                case 52:
                    GiXylophone = (_b.sent()).GiXylophone;
                    return [2 /*return*/, GiXylophone];
                case 53: return [4 /*yield*/, import("react-icons/gi")];
                case 54:
                    GiYarn = (_b.sent()).GiYarn;
                    return [2 /*return*/, GiYarn];
                case 55: return [4 /*yield*/, import("react-icons/gi")];
                case 56:
                    GiYinYang = (_b.sent()).GiYinYang;
                    return [2 /*return*/, GiYinYang];
                case 57: return [4 /*yield*/, import("react-icons/gi")];
                case 58:
                    GiYunluo = (_b.sent()).GiYunluo;
                    return [2 /*return*/, GiYunluo];
                case 59: return [4 /*yield*/, import("react-icons/gi")];
                case 60:
                    GiZBrick = (_b.sent()).GiZBrick;
                    return [2 /*return*/, GiZBrick];
                case 61: return [4 /*yield*/, import("react-icons/gi")];
                case 62:
                    GiZatGun = (_b.sent()).GiZatGun;
                    return [2 /*return*/, GiZatGun];
                case 63: return [4 /*yield*/, import("react-icons/gi")];
                case 64:
                    GiZebraShield = (_b.sent()).GiZebraShield;
                    return [2 /*return*/, GiZebraShield];
                case 65: return [4 /*yield*/, import("react-icons/gi")];
                case 66:
                    GiZeppelin = (_b.sent()).GiZeppelin;
                    return [2 /*return*/, GiZeppelin];
                case 67: return [4 /*yield*/, import("react-icons/gi")];
                case 68:
                    GiZeusSword = (_b.sent()).GiZeusSword;
                    return [2 /*return*/, GiZeusSword];
                case 69: return [4 /*yield*/, import("react-icons/gi")];
                case 70:
                    GiZigArrow = (_b.sent()).GiZigArrow;
                    return [2 /*return*/, GiZigArrow];
                case 71: return [4 /*yield*/, import("react-icons/gi")];
                case 72:
                    GiZigzagCage = (_b.sent()).GiZigzagCage;
                    return [2 /*return*/, GiZigzagCage];
                case 73: return [4 /*yield*/, import("react-icons/gi")];
                case 74:
                    GiZigzagHieroglyph = (_b.sent()).GiZigzagHieroglyph;
                    return [2 /*return*/, GiZigzagHieroglyph];
                case 75: return [4 /*yield*/, import("react-icons/gi")];
                case 76:
                    GiZigzagLeaf = (_b.sent()).GiZigzagLeaf;
                    return [2 /*return*/, GiZigzagLeaf];
                case 77: return [4 /*yield*/, import("react-icons/gi")];
                case 78:
                    GiZigzagTune = (_b.sent()).GiZigzagTune;
                    return [2 /*return*/, GiZigzagTune];
                case 79: return [4 /*yield*/, import("react-icons/gi")];
                case 80:
                    GiZipper = (_b.sent()).GiZipper;
                    return [2 /*return*/, GiZipper];
                case 81: return [2 /*return*/];
            }
        });
    });
}
