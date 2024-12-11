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
export function nameToReactIcon_sl_0(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, SlActionRedo, SlActionUndo, SlAnchor, SlArrowDownCircle, SlArrowDown, SlArrowLeftCircle, SlArrowLeft, SlArrowRightCircle, SlArrowRight, SlArrowUpCircle, SlArrowUp, SlBadge, SlBag, SlBan, SlBasketLoaded, SlBasket, SlBell, SlBookOpen, SlBriefcase, SlBubble, SlBubbles, SlBulb, SlCalculator, SlCalender, SlCallEnd, SlCallIn, SlCallOut, SlCamera, SlCamrecorder, SlChart, SlCheck, SlChemistry, SlClock, SlClose, SlCloudDownload, SlCloudUpload, SlCompass, SlControlEnd, SlControlForward, SlControlPause, SlControlPlay, SlControlRewind, SlControlStart, SlCreditCard, SlCrop, SlCup, SlCursorMove, SlCursor, SlDiamond, SlDirection, SlDirections, SlDisc, SlDislike, SlDoc, SlDocs, SlDrawer, SlDrop, SlEarphonesAlt, SlEarphones, SlEmotsmile, SlEnergy, SlEnvelopeOpen, SlEnvolopeLetter, SlEnvolope, SlEqualizer, SlEvent, SlExclamation, SlEye, SlEyeglass, SlFeed, SlFilm, SlFire, SlFlag, SlFolderAlt, SlFolder, SlFrame, SlGameController, SlGhost, SlGlobeAlt, SlGlobe, SlGraduation, SlGraph, SlGrid, SlHandbag, SlHeart, SlHome, SlHourglass, SlInfo, SlKey, SlLayers, SlLike, SlLink, SlList, SlLocationPin, SlLockOpen, SlLock, SlLogin, SlLogout, SlLoop, SlMagicWand, SlMagnet, SlMagnifierAdd, SlMagnifierRemove, SlMagnifier, SlMap, SlMenu, SlMicrophone, SlMinus, SlMouse, SlMusicToneAlt, SlMusicTone, SlMustache, SlNote, SlNotebook, SlOptionsVertical, SlOptions, SlOrganization, SlPaperClip, SlPaperPlane, SlPaypal, SlPencil, SlPeople, SlPhone, SlPicture, SlPieChart, SlPin, SlPlane, SlPlaylist, SlPlus, SlPower, SlPresent, SlPrinter, SlPuzzle, SlQuestion, SlRefresh, SlReload, SlRocket, SlScreenDesktop, SlScreenSmartphone, SlScreenTablet, SlSettings, SlShareAlt, SlShare, SlShield, SlShuffle, SlSizeActual, SlSizeFullscreen, SlSocialBehance, SlSocialDribbble, SlSocialDropbox, SlSocialFacebook, SlSocialFoursqare, SlSocialGithub, SlSocialGoogle, SlSocialInstagram, SlSocialLinkedin, SlSocialPintarest, SlSocialReddit, SlSocialSkype, SlSocialSoundcloud, SlSocialSpotify, SlSocialSteam, SlSocialStumbleupon, SlSocialTumblr, SlSocialTwitter, SlSocialVkontakte, SlSocialYoutube, SlSpeech, SlSpeedometer, SlStar, SlSupport, SlSymbleFemale, SlSymbolMale, SlTag, SlTarget, SlTrash, SlTrophy, SlUmbrella, SlUserFemale, SlUserFollow, SlUserFollowing, SlUserUnfollow, SlUser, SlVector, SlVolume1, SlVolume2, SlVolumeOff, SlWallet, SlWrench;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "sl:SlActionRedo": return [3 /*break*/, 1];
                        case "sl:SlActionUndo": return [3 /*break*/, 3];
                        case "sl:SlAnchor": return [3 /*break*/, 5];
                        case "sl:SlArrowDownCircle": return [3 /*break*/, 7];
                        case "sl:SlArrowDown": return [3 /*break*/, 9];
                        case "sl:SlArrowLeftCircle": return [3 /*break*/, 11];
                        case "sl:SlArrowLeft": return [3 /*break*/, 13];
                        case "sl:SlArrowRightCircle": return [3 /*break*/, 15];
                        case "sl:SlArrowRight": return [3 /*break*/, 17];
                        case "sl:SlArrowUpCircle": return [3 /*break*/, 19];
                        case "sl:SlArrowUp": return [3 /*break*/, 21];
                        case "sl:SlBadge": return [3 /*break*/, 23];
                        case "sl:SlBag": return [3 /*break*/, 25];
                        case "sl:SlBan": return [3 /*break*/, 27];
                        case "sl:SlBasketLoaded": return [3 /*break*/, 29];
                        case "sl:SlBasket": return [3 /*break*/, 31];
                        case "sl:SlBell": return [3 /*break*/, 33];
                        case "sl:SlBookOpen": return [3 /*break*/, 35];
                        case "sl:SlBriefcase": return [3 /*break*/, 37];
                        case "sl:SlBubble": return [3 /*break*/, 39];
                        case "sl:SlBubbles": return [3 /*break*/, 41];
                        case "sl:SlBulb": return [3 /*break*/, 43];
                        case "sl:SlCalculator": return [3 /*break*/, 45];
                        case "sl:SlCalender": return [3 /*break*/, 47];
                        case "sl:SlCallEnd": return [3 /*break*/, 49];
                        case "sl:SlCallIn": return [3 /*break*/, 51];
                        case "sl:SlCallOut": return [3 /*break*/, 53];
                        case "sl:SlCamera": return [3 /*break*/, 55];
                        case "sl:SlCamrecorder": return [3 /*break*/, 57];
                        case "sl:SlChart": return [3 /*break*/, 59];
                        case "sl:SlCheck": return [3 /*break*/, 61];
                        case "sl:SlChemistry": return [3 /*break*/, 63];
                        case "sl:SlClock": return [3 /*break*/, 65];
                        case "sl:SlClose": return [3 /*break*/, 67];
                        case "sl:SlCloudDownload": return [3 /*break*/, 69];
                        case "sl:SlCloudUpload": return [3 /*break*/, 71];
                        case "sl:SlCompass": return [3 /*break*/, 73];
                        case "sl:SlControlEnd": return [3 /*break*/, 75];
                        case "sl:SlControlForward": return [3 /*break*/, 77];
                        case "sl:SlControlPause": return [3 /*break*/, 79];
                        case "sl:SlControlPlay": return [3 /*break*/, 81];
                        case "sl:SlControlRewind": return [3 /*break*/, 83];
                        case "sl:SlControlStart": return [3 /*break*/, 85];
                        case "sl:SlCreditCard": return [3 /*break*/, 87];
                        case "sl:SlCrop": return [3 /*break*/, 89];
                        case "sl:SlCup": return [3 /*break*/, 91];
                        case "sl:SlCursorMove": return [3 /*break*/, 93];
                        case "sl:SlCursor": return [3 /*break*/, 95];
                        case "sl:SlDiamond": return [3 /*break*/, 97];
                        case "sl:SlDirection": return [3 /*break*/, 99];
                        case "sl:SlDirections": return [3 /*break*/, 101];
                        case "sl:SlDisc": return [3 /*break*/, 103];
                        case "sl:SlDislike": return [3 /*break*/, 105];
                        case "sl:SlDoc": return [3 /*break*/, 107];
                        case "sl:SlDocs": return [3 /*break*/, 109];
                        case "sl:SlDrawer": return [3 /*break*/, 111];
                        case "sl:SlDrop": return [3 /*break*/, 113];
                        case "sl:SlEarphonesAlt": return [3 /*break*/, 115];
                        case "sl:SlEarphones": return [3 /*break*/, 117];
                        case "sl:SlEmotsmile": return [3 /*break*/, 119];
                        case "sl:SlEnergy": return [3 /*break*/, 121];
                        case "sl:SlEnvelopeOpen": return [3 /*break*/, 123];
                        case "sl:SlEnvolopeLetter": return [3 /*break*/, 125];
                        case "sl:SlEnvolope": return [3 /*break*/, 127];
                        case "sl:SlEqualizer": return [3 /*break*/, 129];
                        case "sl:SlEvent": return [3 /*break*/, 131];
                        case "sl:SlExclamation": return [3 /*break*/, 133];
                        case "sl:SlEye": return [3 /*break*/, 135];
                        case "sl:SlEyeglass": return [3 /*break*/, 137];
                        case "sl:SlFeed": return [3 /*break*/, 139];
                        case "sl:SlFilm": return [3 /*break*/, 141];
                        case "sl:SlFire": return [3 /*break*/, 143];
                        case "sl:SlFlag": return [3 /*break*/, 145];
                        case "sl:SlFolderAlt": return [3 /*break*/, 147];
                        case "sl:SlFolder": return [3 /*break*/, 149];
                        case "sl:SlFrame": return [3 /*break*/, 151];
                        case "sl:SlGameController": return [3 /*break*/, 153];
                        case "sl:SlGhost": return [3 /*break*/, 155];
                        case "sl:SlGlobeAlt": return [3 /*break*/, 157];
                        case "sl:SlGlobe": return [3 /*break*/, 159];
                        case "sl:SlGraduation": return [3 /*break*/, 161];
                        case "sl:SlGraph": return [3 /*break*/, 163];
                        case "sl:SlGrid": return [3 /*break*/, 165];
                        case "sl:SlHandbag": return [3 /*break*/, 167];
                        case "sl:SlHeart": return [3 /*break*/, 169];
                        case "sl:SlHome": return [3 /*break*/, 171];
                        case "sl:SlHourglass": return [3 /*break*/, 173];
                        case "sl:SlInfo": return [3 /*break*/, 175];
                        case "sl:SlKey": return [3 /*break*/, 177];
                        case "sl:SlLayers": return [3 /*break*/, 179];
                        case "sl:SlLike": return [3 /*break*/, 181];
                        case "sl:SlLink": return [3 /*break*/, 183];
                        case "sl:SlList": return [3 /*break*/, 185];
                        case "sl:SlLocationPin": return [3 /*break*/, 187];
                        case "sl:SlLockOpen": return [3 /*break*/, 189];
                        case "sl:SlLock": return [3 /*break*/, 191];
                        case "sl:SlLogin": return [3 /*break*/, 193];
                        case "sl:SlLogout": return [3 /*break*/, 195];
                        case "sl:SlLoop": return [3 /*break*/, 197];
                        case "sl:SlMagicWand": return [3 /*break*/, 199];
                        case "sl:SlMagnet": return [3 /*break*/, 201];
                        case "sl:SlMagnifierAdd": return [3 /*break*/, 203];
                        case "sl:SlMagnifierRemove": return [3 /*break*/, 205];
                        case "sl:SlMagnifier": return [3 /*break*/, 207];
                        case "sl:SlMap": return [3 /*break*/, 209];
                        case "sl:SlMenu": return [3 /*break*/, 211];
                        case "sl:SlMicrophone": return [3 /*break*/, 213];
                        case "sl:SlMinus": return [3 /*break*/, 215];
                        case "sl:SlMouse": return [3 /*break*/, 217];
                        case "sl:SlMusicToneAlt": return [3 /*break*/, 219];
                        case "sl:SlMusicTone": return [3 /*break*/, 221];
                        case "sl:SlMustache": return [3 /*break*/, 223];
                        case "sl:SlNote": return [3 /*break*/, 225];
                        case "sl:SlNotebook": return [3 /*break*/, 227];
                        case "sl:SlOptionsVertical": return [3 /*break*/, 229];
                        case "sl:SlOptions": return [3 /*break*/, 231];
                        case "sl:SlOrganization": return [3 /*break*/, 233];
                        case "sl:SlPaperClip": return [3 /*break*/, 235];
                        case "sl:SlPaperPlane": return [3 /*break*/, 237];
                        case "sl:SlPaypal": return [3 /*break*/, 239];
                        case "sl:SlPencil": return [3 /*break*/, 241];
                        case "sl:SlPeople": return [3 /*break*/, 243];
                        case "sl:SlPhone": return [3 /*break*/, 245];
                        case "sl:SlPicture": return [3 /*break*/, 247];
                        case "sl:SlPieChart": return [3 /*break*/, 249];
                        case "sl:SlPin": return [3 /*break*/, 251];
                        case "sl:SlPlane": return [3 /*break*/, 253];
                        case "sl:SlPlaylist": return [3 /*break*/, 255];
                        case "sl:SlPlus": return [3 /*break*/, 257];
                        case "sl:SlPower": return [3 /*break*/, 259];
                        case "sl:SlPresent": return [3 /*break*/, 261];
                        case "sl:SlPrinter": return [3 /*break*/, 263];
                        case "sl:SlPuzzle": return [3 /*break*/, 265];
                        case "sl:SlQuestion": return [3 /*break*/, 267];
                        case "sl:SlRefresh": return [3 /*break*/, 269];
                        case "sl:SlReload": return [3 /*break*/, 271];
                        case "sl:SlRocket": return [3 /*break*/, 273];
                        case "sl:SlScreenDesktop": return [3 /*break*/, 275];
                        case "sl:SlScreenSmartphone": return [3 /*break*/, 277];
                        case "sl:SlScreenTablet": return [3 /*break*/, 279];
                        case "sl:SlSettings": return [3 /*break*/, 281];
                        case "sl:SlShareAlt": return [3 /*break*/, 283];
                        case "sl:SlShare": return [3 /*break*/, 285];
                        case "sl:SlShield": return [3 /*break*/, 287];
                        case "sl:SlShuffle": return [3 /*break*/, 289];
                        case "sl:SlSizeActual": return [3 /*break*/, 291];
                        case "sl:SlSizeFullscreen": return [3 /*break*/, 293];
                        case "sl:SlSocialBehance": return [3 /*break*/, 295];
                        case "sl:SlSocialDribbble": return [3 /*break*/, 297];
                        case "sl:SlSocialDropbox": return [3 /*break*/, 299];
                        case "sl:SlSocialFacebook": return [3 /*break*/, 301];
                        case "sl:SlSocialFoursqare": return [3 /*break*/, 303];
                        case "sl:SlSocialGithub": return [3 /*break*/, 305];
                        case "sl:SlSocialGoogle": return [3 /*break*/, 307];
                        case "sl:SlSocialInstagram": return [3 /*break*/, 309];
                        case "sl:SlSocialLinkedin": return [3 /*break*/, 311];
                        case "sl:SlSocialPintarest": return [3 /*break*/, 313];
                        case "sl:SlSocialReddit": return [3 /*break*/, 315];
                        case "sl:SlSocialSkype": return [3 /*break*/, 317];
                        case "sl:SlSocialSoundcloud": return [3 /*break*/, 319];
                        case "sl:SlSocialSpotify": return [3 /*break*/, 321];
                        case "sl:SlSocialSteam": return [3 /*break*/, 323];
                        case "sl:SlSocialStumbleupon": return [3 /*break*/, 325];
                        case "sl:SlSocialTumblr": return [3 /*break*/, 327];
                        case "sl:SlSocialTwitter": return [3 /*break*/, 329];
                        case "sl:SlSocialVkontakte": return [3 /*break*/, 331];
                        case "sl:SlSocialYoutube": return [3 /*break*/, 333];
                        case "sl:SlSpeech": return [3 /*break*/, 335];
                        case "sl:SlSpeedometer": return [3 /*break*/, 337];
                        case "sl:SlStar": return [3 /*break*/, 339];
                        case "sl:SlSupport": return [3 /*break*/, 341];
                        case "sl:SlSymbleFemale": return [3 /*break*/, 343];
                        case "sl:SlSymbolMale": return [3 /*break*/, 345];
                        case "sl:SlTag": return [3 /*break*/, 347];
                        case "sl:SlTarget": return [3 /*break*/, 349];
                        case "sl:SlTrash": return [3 /*break*/, 351];
                        case "sl:SlTrophy": return [3 /*break*/, 353];
                        case "sl:SlUmbrella": return [3 /*break*/, 355];
                        case "sl:SlUserFemale": return [3 /*break*/, 357];
                        case "sl:SlUserFollow": return [3 /*break*/, 359];
                        case "sl:SlUserFollowing": return [3 /*break*/, 361];
                        case "sl:SlUserUnfollow": return [3 /*break*/, 363];
                        case "sl:SlUser": return [3 /*break*/, 365];
                        case "sl:SlVector": return [3 /*break*/, 367];
                        case "sl:SlVolume1": return [3 /*break*/, 369];
                        case "sl:SlVolume2": return [3 /*break*/, 371];
                        case "sl:SlVolumeOff": return [3 /*break*/, 373];
                        case "sl:SlWallet": return [3 /*break*/, 375];
                        case "sl:SlWrench": return [3 /*break*/, 377];
                    }
                    return [3 /*break*/, 379];
                case 1: return [4 /*yield*/, import("react-icons/sl")];
                case 2:
                    SlActionRedo = (_b.sent()).SlActionRedo;
                    return [2 /*return*/, SlActionRedo];
                case 3: return [4 /*yield*/, import("react-icons/sl")];
                case 4:
                    SlActionUndo = (_b.sent()).SlActionUndo;
                    return [2 /*return*/, SlActionUndo];
                case 5: return [4 /*yield*/, import("react-icons/sl")];
                case 6:
                    SlAnchor = (_b.sent()).SlAnchor;
                    return [2 /*return*/, SlAnchor];
                case 7: return [4 /*yield*/, import("react-icons/sl")];
                case 8:
                    SlArrowDownCircle = (_b.sent()).SlArrowDownCircle;
                    return [2 /*return*/, SlArrowDownCircle];
                case 9: return [4 /*yield*/, import("react-icons/sl")];
                case 10:
                    SlArrowDown = (_b.sent()).SlArrowDown;
                    return [2 /*return*/, SlArrowDown];
                case 11: return [4 /*yield*/, import("react-icons/sl")];
                case 12:
                    SlArrowLeftCircle = (_b.sent()).SlArrowLeftCircle;
                    return [2 /*return*/, SlArrowLeftCircle];
                case 13: return [4 /*yield*/, import("react-icons/sl")];
                case 14:
                    SlArrowLeft = (_b.sent()).SlArrowLeft;
                    return [2 /*return*/, SlArrowLeft];
                case 15: return [4 /*yield*/, import("react-icons/sl")];
                case 16:
                    SlArrowRightCircle = (_b.sent()).SlArrowRightCircle;
                    return [2 /*return*/, SlArrowRightCircle];
                case 17: return [4 /*yield*/, import("react-icons/sl")];
                case 18:
                    SlArrowRight = (_b.sent()).SlArrowRight;
                    return [2 /*return*/, SlArrowRight];
                case 19: return [4 /*yield*/, import("react-icons/sl")];
                case 20:
                    SlArrowUpCircle = (_b.sent()).SlArrowUpCircle;
                    return [2 /*return*/, SlArrowUpCircle];
                case 21: return [4 /*yield*/, import("react-icons/sl")];
                case 22:
                    SlArrowUp = (_b.sent()).SlArrowUp;
                    return [2 /*return*/, SlArrowUp];
                case 23: return [4 /*yield*/, import("react-icons/sl")];
                case 24:
                    SlBadge = (_b.sent()).SlBadge;
                    return [2 /*return*/, SlBadge];
                case 25: return [4 /*yield*/, import("react-icons/sl")];
                case 26:
                    SlBag = (_b.sent()).SlBag;
                    return [2 /*return*/, SlBag];
                case 27: return [4 /*yield*/, import("react-icons/sl")];
                case 28:
                    SlBan = (_b.sent()).SlBan;
                    return [2 /*return*/, SlBan];
                case 29: return [4 /*yield*/, import("react-icons/sl")];
                case 30:
                    SlBasketLoaded = (_b.sent()).SlBasketLoaded;
                    return [2 /*return*/, SlBasketLoaded];
                case 31: return [4 /*yield*/, import("react-icons/sl")];
                case 32:
                    SlBasket = (_b.sent()).SlBasket;
                    return [2 /*return*/, SlBasket];
                case 33: return [4 /*yield*/, import("react-icons/sl")];
                case 34:
                    SlBell = (_b.sent()).SlBell;
                    return [2 /*return*/, SlBell];
                case 35: return [4 /*yield*/, import("react-icons/sl")];
                case 36:
                    SlBookOpen = (_b.sent()).SlBookOpen;
                    return [2 /*return*/, SlBookOpen];
                case 37: return [4 /*yield*/, import("react-icons/sl")];
                case 38:
                    SlBriefcase = (_b.sent()).SlBriefcase;
                    return [2 /*return*/, SlBriefcase];
                case 39: return [4 /*yield*/, import("react-icons/sl")];
                case 40:
                    SlBubble = (_b.sent()).SlBubble;
                    return [2 /*return*/, SlBubble];
                case 41: return [4 /*yield*/, import("react-icons/sl")];
                case 42:
                    SlBubbles = (_b.sent()).SlBubbles;
                    return [2 /*return*/, SlBubbles];
                case 43: return [4 /*yield*/, import("react-icons/sl")];
                case 44:
                    SlBulb = (_b.sent()).SlBulb;
                    return [2 /*return*/, SlBulb];
                case 45: return [4 /*yield*/, import("react-icons/sl")];
                case 46:
                    SlCalculator = (_b.sent()).SlCalculator;
                    return [2 /*return*/, SlCalculator];
                case 47: return [4 /*yield*/, import("react-icons/sl")];
                case 48:
                    SlCalender = (_b.sent()).SlCalender;
                    return [2 /*return*/, SlCalender];
                case 49: return [4 /*yield*/, import("react-icons/sl")];
                case 50:
                    SlCallEnd = (_b.sent()).SlCallEnd;
                    return [2 /*return*/, SlCallEnd];
                case 51: return [4 /*yield*/, import("react-icons/sl")];
                case 52:
                    SlCallIn = (_b.sent()).SlCallIn;
                    return [2 /*return*/, SlCallIn];
                case 53: return [4 /*yield*/, import("react-icons/sl")];
                case 54:
                    SlCallOut = (_b.sent()).SlCallOut;
                    return [2 /*return*/, SlCallOut];
                case 55: return [4 /*yield*/, import("react-icons/sl")];
                case 56:
                    SlCamera = (_b.sent()).SlCamera;
                    return [2 /*return*/, SlCamera];
                case 57: return [4 /*yield*/, import("react-icons/sl")];
                case 58:
                    SlCamrecorder = (_b.sent()).SlCamrecorder;
                    return [2 /*return*/, SlCamrecorder];
                case 59: return [4 /*yield*/, import("react-icons/sl")];
                case 60:
                    SlChart = (_b.sent()).SlChart;
                    return [2 /*return*/, SlChart];
                case 61: return [4 /*yield*/, import("react-icons/sl")];
                case 62:
                    SlCheck = (_b.sent()).SlCheck;
                    return [2 /*return*/, SlCheck];
                case 63: return [4 /*yield*/, import("react-icons/sl")];
                case 64:
                    SlChemistry = (_b.sent()).SlChemistry;
                    return [2 /*return*/, SlChemistry];
                case 65: return [4 /*yield*/, import("react-icons/sl")];
                case 66:
                    SlClock = (_b.sent()).SlClock;
                    return [2 /*return*/, SlClock];
                case 67: return [4 /*yield*/, import("react-icons/sl")];
                case 68:
                    SlClose = (_b.sent()).SlClose;
                    return [2 /*return*/, SlClose];
                case 69: return [4 /*yield*/, import("react-icons/sl")];
                case 70:
                    SlCloudDownload = (_b.sent()).SlCloudDownload;
                    return [2 /*return*/, SlCloudDownload];
                case 71: return [4 /*yield*/, import("react-icons/sl")];
                case 72:
                    SlCloudUpload = (_b.sent()).SlCloudUpload;
                    return [2 /*return*/, SlCloudUpload];
                case 73: return [4 /*yield*/, import("react-icons/sl")];
                case 74:
                    SlCompass = (_b.sent()).SlCompass;
                    return [2 /*return*/, SlCompass];
                case 75: return [4 /*yield*/, import("react-icons/sl")];
                case 76:
                    SlControlEnd = (_b.sent()).SlControlEnd;
                    return [2 /*return*/, SlControlEnd];
                case 77: return [4 /*yield*/, import("react-icons/sl")];
                case 78:
                    SlControlForward = (_b.sent()).SlControlForward;
                    return [2 /*return*/, SlControlForward];
                case 79: return [4 /*yield*/, import("react-icons/sl")];
                case 80:
                    SlControlPause = (_b.sent()).SlControlPause;
                    return [2 /*return*/, SlControlPause];
                case 81: return [4 /*yield*/, import("react-icons/sl")];
                case 82:
                    SlControlPlay = (_b.sent()).SlControlPlay;
                    return [2 /*return*/, SlControlPlay];
                case 83: return [4 /*yield*/, import("react-icons/sl")];
                case 84:
                    SlControlRewind = (_b.sent()).SlControlRewind;
                    return [2 /*return*/, SlControlRewind];
                case 85: return [4 /*yield*/, import("react-icons/sl")];
                case 86:
                    SlControlStart = (_b.sent()).SlControlStart;
                    return [2 /*return*/, SlControlStart];
                case 87: return [4 /*yield*/, import("react-icons/sl")];
                case 88:
                    SlCreditCard = (_b.sent()).SlCreditCard;
                    return [2 /*return*/, SlCreditCard];
                case 89: return [4 /*yield*/, import("react-icons/sl")];
                case 90:
                    SlCrop = (_b.sent()).SlCrop;
                    return [2 /*return*/, SlCrop];
                case 91: return [4 /*yield*/, import("react-icons/sl")];
                case 92:
                    SlCup = (_b.sent()).SlCup;
                    return [2 /*return*/, SlCup];
                case 93: return [4 /*yield*/, import("react-icons/sl")];
                case 94:
                    SlCursorMove = (_b.sent()).SlCursorMove;
                    return [2 /*return*/, SlCursorMove];
                case 95: return [4 /*yield*/, import("react-icons/sl")];
                case 96:
                    SlCursor = (_b.sent()).SlCursor;
                    return [2 /*return*/, SlCursor];
                case 97: return [4 /*yield*/, import("react-icons/sl")];
                case 98:
                    SlDiamond = (_b.sent()).SlDiamond;
                    return [2 /*return*/, SlDiamond];
                case 99: return [4 /*yield*/, import("react-icons/sl")];
                case 100:
                    SlDirection = (_b.sent()).SlDirection;
                    return [2 /*return*/, SlDirection];
                case 101: return [4 /*yield*/, import("react-icons/sl")];
                case 102:
                    SlDirections = (_b.sent()).SlDirections;
                    return [2 /*return*/, SlDirections];
                case 103: return [4 /*yield*/, import("react-icons/sl")];
                case 104:
                    SlDisc = (_b.sent()).SlDisc;
                    return [2 /*return*/, SlDisc];
                case 105: return [4 /*yield*/, import("react-icons/sl")];
                case 106:
                    SlDislike = (_b.sent()).SlDislike;
                    return [2 /*return*/, SlDislike];
                case 107: return [4 /*yield*/, import("react-icons/sl")];
                case 108:
                    SlDoc = (_b.sent()).SlDoc;
                    return [2 /*return*/, SlDoc];
                case 109: return [4 /*yield*/, import("react-icons/sl")];
                case 110:
                    SlDocs = (_b.sent()).SlDocs;
                    return [2 /*return*/, SlDocs];
                case 111: return [4 /*yield*/, import("react-icons/sl")];
                case 112:
                    SlDrawer = (_b.sent()).SlDrawer;
                    return [2 /*return*/, SlDrawer];
                case 113: return [4 /*yield*/, import("react-icons/sl")];
                case 114:
                    SlDrop = (_b.sent()).SlDrop;
                    return [2 /*return*/, SlDrop];
                case 115: return [4 /*yield*/, import("react-icons/sl")];
                case 116:
                    SlEarphonesAlt = (_b.sent()).SlEarphonesAlt;
                    return [2 /*return*/, SlEarphonesAlt];
                case 117: return [4 /*yield*/, import("react-icons/sl")];
                case 118:
                    SlEarphones = (_b.sent()).SlEarphones;
                    return [2 /*return*/, SlEarphones];
                case 119: return [4 /*yield*/, import("react-icons/sl")];
                case 120:
                    SlEmotsmile = (_b.sent()).SlEmotsmile;
                    return [2 /*return*/, SlEmotsmile];
                case 121: return [4 /*yield*/, import("react-icons/sl")];
                case 122:
                    SlEnergy = (_b.sent()).SlEnergy;
                    return [2 /*return*/, SlEnergy];
                case 123: return [4 /*yield*/, import("react-icons/sl")];
                case 124:
                    SlEnvelopeOpen = (_b.sent()).SlEnvelopeOpen;
                    return [2 /*return*/, SlEnvelopeOpen];
                case 125: return [4 /*yield*/, import("react-icons/sl")];
                case 126:
                    SlEnvolopeLetter = (_b.sent()).SlEnvolopeLetter;
                    return [2 /*return*/, SlEnvolopeLetter];
                case 127: return [4 /*yield*/, import("react-icons/sl")];
                case 128:
                    SlEnvolope = (_b.sent()).SlEnvolope;
                    return [2 /*return*/, SlEnvolope];
                case 129: return [4 /*yield*/, import("react-icons/sl")];
                case 130:
                    SlEqualizer = (_b.sent()).SlEqualizer;
                    return [2 /*return*/, SlEqualizer];
                case 131: return [4 /*yield*/, import("react-icons/sl")];
                case 132:
                    SlEvent = (_b.sent()).SlEvent;
                    return [2 /*return*/, SlEvent];
                case 133: return [4 /*yield*/, import("react-icons/sl")];
                case 134:
                    SlExclamation = (_b.sent()).SlExclamation;
                    return [2 /*return*/, SlExclamation];
                case 135: return [4 /*yield*/, import("react-icons/sl")];
                case 136:
                    SlEye = (_b.sent()).SlEye;
                    return [2 /*return*/, SlEye];
                case 137: return [4 /*yield*/, import("react-icons/sl")];
                case 138:
                    SlEyeglass = (_b.sent()).SlEyeglass;
                    return [2 /*return*/, SlEyeglass];
                case 139: return [4 /*yield*/, import("react-icons/sl")];
                case 140:
                    SlFeed = (_b.sent()).SlFeed;
                    return [2 /*return*/, SlFeed];
                case 141: return [4 /*yield*/, import("react-icons/sl")];
                case 142:
                    SlFilm = (_b.sent()).SlFilm;
                    return [2 /*return*/, SlFilm];
                case 143: return [4 /*yield*/, import("react-icons/sl")];
                case 144:
                    SlFire = (_b.sent()).SlFire;
                    return [2 /*return*/, SlFire];
                case 145: return [4 /*yield*/, import("react-icons/sl")];
                case 146:
                    SlFlag = (_b.sent()).SlFlag;
                    return [2 /*return*/, SlFlag];
                case 147: return [4 /*yield*/, import("react-icons/sl")];
                case 148:
                    SlFolderAlt = (_b.sent()).SlFolderAlt;
                    return [2 /*return*/, SlFolderAlt];
                case 149: return [4 /*yield*/, import("react-icons/sl")];
                case 150:
                    SlFolder = (_b.sent()).SlFolder;
                    return [2 /*return*/, SlFolder];
                case 151: return [4 /*yield*/, import("react-icons/sl")];
                case 152:
                    SlFrame = (_b.sent()).SlFrame;
                    return [2 /*return*/, SlFrame];
                case 153: return [4 /*yield*/, import("react-icons/sl")];
                case 154:
                    SlGameController = (_b.sent()).SlGameController;
                    return [2 /*return*/, SlGameController];
                case 155: return [4 /*yield*/, import("react-icons/sl")];
                case 156:
                    SlGhost = (_b.sent()).SlGhost;
                    return [2 /*return*/, SlGhost];
                case 157: return [4 /*yield*/, import("react-icons/sl")];
                case 158:
                    SlGlobeAlt = (_b.sent()).SlGlobeAlt;
                    return [2 /*return*/, SlGlobeAlt];
                case 159: return [4 /*yield*/, import("react-icons/sl")];
                case 160:
                    SlGlobe = (_b.sent()).SlGlobe;
                    return [2 /*return*/, SlGlobe];
                case 161: return [4 /*yield*/, import("react-icons/sl")];
                case 162:
                    SlGraduation = (_b.sent()).SlGraduation;
                    return [2 /*return*/, SlGraduation];
                case 163: return [4 /*yield*/, import("react-icons/sl")];
                case 164:
                    SlGraph = (_b.sent()).SlGraph;
                    return [2 /*return*/, SlGraph];
                case 165: return [4 /*yield*/, import("react-icons/sl")];
                case 166:
                    SlGrid = (_b.sent()).SlGrid;
                    return [2 /*return*/, SlGrid];
                case 167: return [4 /*yield*/, import("react-icons/sl")];
                case 168:
                    SlHandbag = (_b.sent()).SlHandbag;
                    return [2 /*return*/, SlHandbag];
                case 169: return [4 /*yield*/, import("react-icons/sl")];
                case 170:
                    SlHeart = (_b.sent()).SlHeart;
                    return [2 /*return*/, SlHeart];
                case 171: return [4 /*yield*/, import("react-icons/sl")];
                case 172:
                    SlHome = (_b.sent()).SlHome;
                    return [2 /*return*/, SlHome];
                case 173: return [4 /*yield*/, import("react-icons/sl")];
                case 174:
                    SlHourglass = (_b.sent()).SlHourglass;
                    return [2 /*return*/, SlHourglass];
                case 175: return [4 /*yield*/, import("react-icons/sl")];
                case 176:
                    SlInfo = (_b.sent()).SlInfo;
                    return [2 /*return*/, SlInfo];
                case 177: return [4 /*yield*/, import("react-icons/sl")];
                case 178:
                    SlKey = (_b.sent()).SlKey;
                    return [2 /*return*/, SlKey];
                case 179: return [4 /*yield*/, import("react-icons/sl")];
                case 180:
                    SlLayers = (_b.sent()).SlLayers;
                    return [2 /*return*/, SlLayers];
                case 181: return [4 /*yield*/, import("react-icons/sl")];
                case 182:
                    SlLike = (_b.sent()).SlLike;
                    return [2 /*return*/, SlLike];
                case 183: return [4 /*yield*/, import("react-icons/sl")];
                case 184:
                    SlLink = (_b.sent()).SlLink;
                    return [2 /*return*/, SlLink];
                case 185: return [4 /*yield*/, import("react-icons/sl")];
                case 186:
                    SlList = (_b.sent()).SlList;
                    return [2 /*return*/, SlList];
                case 187: return [4 /*yield*/, import("react-icons/sl")];
                case 188:
                    SlLocationPin = (_b.sent()).SlLocationPin;
                    return [2 /*return*/, SlLocationPin];
                case 189: return [4 /*yield*/, import("react-icons/sl")];
                case 190:
                    SlLockOpen = (_b.sent()).SlLockOpen;
                    return [2 /*return*/, SlLockOpen];
                case 191: return [4 /*yield*/, import("react-icons/sl")];
                case 192:
                    SlLock = (_b.sent()).SlLock;
                    return [2 /*return*/, SlLock];
                case 193: return [4 /*yield*/, import("react-icons/sl")];
                case 194:
                    SlLogin = (_b.sent()).SlLogin;
                    return [2 /*return*/, SlLogin];
                case 195: return [4 /*yield*/, import("react-icons/sl")];
                case 196:
                    SlLogout = (_b.sent()).SlLogout;
                    return [2 /*return*/, SlLogout];
                case 197: return [4 /*yield*/, import("react-icons/sl")];
                case 198:
                    SlLoop = (_b.sent()).SlLoop;
                    return [2 /*return*/, SlLoop];
                case 199: return [4 /*yield*/, import("react-icons/sl")];
                case 200:
                    SlMagicWand = (_b.sent()).SlMagicWand;
                    return [2 /*return*/, SlMagicWand];
                case 201: return [4 /*yield*/, import("react-icons/sl")];
                case 202:
                    SlMagnet = (_b.sent()).SlMagnet;
                    return [2 /*return*/, SlMagnet];
                case 203: return [4 /*yield*/, import("react-icons/sl")];
                case 204:
                    SlMagnifierAdd = (_b.sent()).SlMagnifierAdd;
                    return [2 /*return*/, SlMagnifierAdd];
                case 205: return [4 /*yield*/, import("react-icons/sl")];
                case 206:
                    SlMagnifierRemove = (_b.sent()).SlMagnifierRemove;
                    return [2 /*return*/, SlMagnifierRemove];
                case 207: return [4 /*yield*/, import("react-icons/sl")];
                case 208:
                    SlMagnifier = (_b.sent()).SlMagnifier;
                    return [2 /*return*/, SlMagnifier];
                case 209: return [4 /*yield*/, import("react-icons/sl")];
                case 210:
                    SlMap = (_b.sent()).SlMap;
                    return [2 /*return*/, SlMap];
                case 211: return [4 /*yield*/, import("react-icons/sl")];
                case 212:
                    SlMenu = (_b.sent()).SlMenu;
                    return [2 /*return*/, SlMenu];
                case 213: return [4 /*yield*/, import("react-icons/sl")];
                case 214:
                    SlMicrophone = (_b.sent()).SlMicrophone;
                    return [2 /*return*/, SlMicrophone];
                case 215: return [4 /*yield*/, import("react-icons/sl")];
                case 216:
                    SlMinus = (_b.sent()).SlMinus;
                    return [2 /*return*/, SlMinus];
                case 217: return [4 /*yield*/, import("react-icons/sl")];
                case 218:
                    SlMouse = (_b.sent()).SlMouse;
                    return [2 /*return*/, SlMouse];
                case 219: return [4 /*yield*/, import("react-icons/sl")];
                case 220:
                    SlMusicToneAlt = (_b.sent()).SlMusicToneAlt;
                    return [2 /*return*/, SlMusicToneAlt];
                case 221: return [4 /*yield*/, import("react-icons/sl")];
                case 222:
                    SlMusicTone = (_b.sent()).SlMusicTone;
                    return [2 /*return*/, SlMusicTone];
                case 223: return [4 /*yield*/, import("react-icons/sl")];
                case 224:
                    SlMustache = (_b.sent()).SlMustache;
                    return [2 /*return*/, SlMustache];
                case 225: return [4 /*yield*/, import("react-icons/sl")];
                case 226:
                    SlNote = (_b.sent()).SlNote;
                    return [2 /*return*/, SlNote];
                case 227: return [4 /*yield*/, import("react-icons/sl")];
                case 228:
                    SlNotebook = (_b.sent()).SlNotebook;
                    return [2 /*return*/, SlNotebook];
                case 229: return [4 /*yield*/, import("react-icons/sl")];
                case 230:
                    SlOptionsVertical = (_b.sent()).SlOptionsVertical;
                    return [2 /*return*/, SlOptionsVertical];
                case 231: return [4 /*yield*/, import("react-icons/sl")];
                case 232:
                    SlOptions = (_b.sent()).SlOptions;
                    return [2 /*return*/, SlOptions];
                case 233: return [4 /*yield*/, import("react-icons/sl")];
                case 234:
                    SlOrganization = (_b.sent()).SlOrganization;
                    return [2 /*return*/, SlOrganization];
                case 235: return [4 /*yield*/, import("react-icons/sl")];
                case 236:
                    SlPaperClip = (_b.sent()).SlPaperClip;
                    return [2 /*return*/, SlPaperClip];
                case 237: return [4 /*yield*/, import("react-icons/sl")];
                case 238:
                    SlPaperPlane = (_b.sent()).SlPaperPlane;
                    return [2 /*return*/, SlPaperPlane];
                case 239: return [4 /*yield*/, import("react-icons/sl")];
                case 240:
                    SlPaypal = (_b.sent()).SlPaypal;
                    return [2 /*return*/, SlPaypal];
                case 241: return [4 /*yield*/, import("react-icons/sl")];
                case 242:
                    SlPencil = (_b.sent()).SlPencil;
                    return [2 /*return*/, SlPencil];
                case 243: return [4 /*yield*/, import("react-icons/sl")];
                case 244:
                    SlPeople = (_b.sent()).SlPeople;
                    return [2 /*return*/, SlPeople];
                case 245: return [4 /*yield*/, import("react-icons/sl")];
                case 246:
                    SlPhone = (_b.sent()).SlPhone;
                    return [2 /*return*/, SlPhone];
                case 247: return [4 /*yield*/, import("react-icons/sl")];
                case 248:
                    SlPicture = (_b.sent()).SlPicture;
                    return [2 /*return*/, SlPicture];
                case 249: return [4 /*yield*/, import("react-icons/sl")];
                case 250:
                    SlPieChart = (_b.sent()).SlPieChart;
                    return [2 /*return*/, SlPieChart];
                case 251: return [4 /*yield*/, import("react-icons/sl")];
                case 252:
                    SlPin = (_b.sent()).SlPin;
                    return [2 /*return*/, SlPin];
                case 253: return [4 /*yield*/, import("react-icons/sl")];
                case 254:
                    SlPlane = (_b.sent()).SlPlane;
                    return [2 /*return*/, SlPlane];
                case 255: return [4 /*yield*/, import("react-icons/sl")];
                case 256:
                    SlPlaylist = (_b.sent()).SlPlaylist;
                    return [2 /*return*/, SlPlaylist];
                case 257: return [4 /*yield*/, import("react-icons/sl")];
                case 258:
                    SlPlus = (_b.sent()).SlPlus;
                    return [2 /*return*/, SlPlus];
                case 259: return [4 /*yield*/, import("react-icons/sl")];
                case 260:
                    SlPower = (_b.sent()).SlPower;
                    return [2 /*return*/, SlPower];
                case 261: return [4 /*yield*/, import("react-icons/sl")];
                case 262:
                    SlPresent = (_b.sent()).SlPresent;
                    return [2 /*return*/, SlPresent];
                case 263: return [4 /*yield*/, import("react-icons/sl")];
                case 264:
                    SlPrinter = (_b.sent()).SlPrinter;
                    return [2 /*return*/, SlPrinter];
                case 265: return [4 /*yield*/, import("react-icons/sl")];
                case 266:
                    SlPuzzle = (_b.sent()).SlPuzzle;
                    return [2 /*return*/, SlPuzzle];
                case 267: return [4 /*yield*/, import("react-icons/sl")];
                case 268:
                    SlQuestion = (_b.sent()).SlQuestion;
                    return [2 /*return*/, SlQuestion];
                case 269: return [4 /*yield*/, import("react-icons/sl")];
                case 270:
                    SlRefresh = (_b.sent()).SlRefresh;
                    return [2 /*return*/, SlRefresh];
                case 271: return [4 /*yield*/, import("react-icons/sl")];
                case 272:
                    SlReload = (_b.sent()).SlReload;
                    return [2 /*return*/, SlReload];
                case 273: return [4 /*yield*/, import("react-icons/sl")];
                case 274:
                    SlRocket = (_b.sent()).SlRocket;
                    return [2 /*return*/, SlRocket];
                case 275: return [4 /*yield*/, import("react-icons/sl")];
                case 276:
                    SlScreenDesktop = (_b.sent()).SlScreenDesktop;
                    return [2 /*return*/, SlScreenDesktop];
                case 277: return [4 /*yield*/, import("react-icons/sl")];
                case 278:
                    SlScreenSmartphone = (_b.sent()).SlScreenSmartphone;
                    return [2 /*return*/, SlScreenSmartphone];
                case 279: return [4 /*yield*/, import("react-icons/sl")];
                case 280:
                    SlScreenTablet = (_b.sent()).SlScreenTablet;
                    return [2 /*return*/, SlScreenTablet];
                case 281: return [4 /*yield*/, import("react-icons/sl")];
                case 282:
                    SlSettings = (_b.sent()).SlSettings;
                    return [2 /*return*/, SlSettings];
                case 283: return [4 /*yield*/, import("react-icons/sl")];
                case 284:
                    SlShareAlt = (_b.sent()).SlShareAlt;
                    return [2 /*return*/, SlShareAlt];
                case 285: return [4 /*yield*/, import("react-icons/sl")];
                case 286:
                    SlShare = (_b.sent()).SlShare;
                    return [2 /*return*/, SlShare];
                case 287: return [4 /*yield*/, import("react-icons/sl")];
                case 288:
                    SlShield = (_b.sent()).SlShield;
                    return [2 /*return*/, SlShield];
                case 289: return [4 /*yield*/, import("react-icons/sl")];
                case 290:
                    SlShuffle = (_b.sent()).SlShuffle;
                    return [2 /*return*/, SlShuffle];
                case 291: return [4 /*yield*/, import("react-icons/sl")];
                case 292:
                    SlSizeActual = (_b.sent()).SlSizeActual;
                    return [2 /*return*/, SlSizeActual];
                case 293: return [4 /*yield*/, import("react-icons/sl")];
                case 294:
                    SlSizeFullscreen = (_b.sent()).SlSizeFullscreen;
                    return [2 /*return*/, SlSizeFullscreen];
                case 295: return [4 /*yield*/, import("react-icons/sl")];
                case 296:
                    SlSocialBehance = (_b.sent()).SlSocialBehance;
                    return [2 /*return*/, SlSocialBehance];
                case 297: return [4 /*yield*/, import("react-icons/sl")];
                case 298:
                    SlSocialDribbble = (_b.sent()).SlSocialDribbble;
                    return [2 /*return*/, SlSocialDribbble];
                case 299: return [4 /*yield*/, import("react-icons/sl")];
                case 300:
                    SlSocialDropbox = (_b.sent()).SlSocialDropbox;
                    return [2 /*return*/, SlSocialDropbox];
                case 301: return [4 /*yield*/, import("react-icons/sl")];
                case 302:
                    SlSocialFacebook = (_b.sent()).SlSocialFacebook;
                    return [2 /*return*/, SlSocialFacebook];
                case 303: return [4 /*yield*/, import("react-icons/sl")];
                case 304:
                    SlSocialFoursqare = (_b.sent()).SlSocialFoursqare;
                    return [2 /*return*/, SlSocialFoursqare];
                case 305: return [4 /*yield*/, import("react-icons/sl")];
                case 306:
                    SlSocialGithub = (_b.sent()).SlSocialGithub;
                    return [2 /*return*/, SlSocialGithub];
                case 307: return [4 /*yield*/, import("react-icons/sl")];
                case 308:
                    SlSocialGoogle = (_b.sent()).SlSocialGoogle;
                    return [2 /*return*/, SlSocialGoogle];
                case 309: return [4 /*yield*/, import("react-icons/sl")];
                case 310:
                    SlSocialInstagram = (_b.sent()).SlSocialInstagram;
                    return [2 /*return*/, SlSocialInstagram];
                case 311: return [4 /*yield*/, import("react-icons/sl")];
                case 312:
                    SlSocialLinkedin = (_b.sent()).SlSocialLinkedin;
                    return [2 /*return*/, SlSocialLinkedin];
                case 313: return [4 /*yield*/, import("react-icons/sl")];
                case 314:
                    SlSocialPintarest = (_b.sent()).SlSocialPintarest;
                    return [2 /*return*/, SlSocialPintarest];
                case 315: return [4 /*yield*/, import("react-icons/sl")];
                case 316:
                    SlSocialReddit = (_b.sent()).SlSocialReddit;
                    return [2 /*return*/, SlSocialReddit];
                case 317: return [4 /*yield*/, import("react-icons/sl")];
                case 318:
                    SlSocialSkype = (_b.sent()).SlSocialSkype;
                    return [2 /*return*/, SlSocialSkype];
                case 319: return [4 /*yield*/, import("react-icons/sl")];
                case 320:
                    SlSocialSoundcloud = (_b.sent()).SlSocialSoundcloud;
                    return [2 /*return*/, SlSocialSoundcloud];
                case 321: return [4 /*yield*/, import("react-icons/sl")];
                case 322:
                    SlSocialSpotify = (_b.sent()).SlSocialSpotify;
                    return [2 /*return*/, SlSocialSpotify];
                case 323: return [4 /*yield*/, import("react-icons/sl")];
                case 324:
                    SlSocialSteam = (_b.sent()).SlSocialSteam;
                    return [2 /*return*/, SlSocialSteam];
                case 325: return [4 /*yield*/, import("react-icons/sl")];
                case 326:
                    SlSocialStumbleupon = (_b.sent()).SlSocialStumbleupon;
                    return [2 /*return*/, SlSocialStumbleupon];
                case 327: return [4 /*yield*/, import("react-icons/sl")];
                case 328:
                    SlSocialTumblr = (_b.sent()).SlSocialTumblr;
                    return [2 /*return*/, SlSocialTumblr];
                case 329: return [4 /*yield*/, import("react-icons/sl")];
                case 330:
                    SlSocialTwitter = (_b.sent()).SlSocialTwitter;
                    return [2 /*return*/, SlSocialTwitter];
                case 331: return [4 /*yield*/, import("react-icons/sl")];
                case 332:
                    SlSocialVkontakte = (_b.sent()).SlSocialVkontakte;
                    return [2 /*return*/, SlSocialVkontakte];
                case 333: return [4 /*yield*/, import("react-icons/sl")];
                case 334:
                    SlSocialYoutube = (_b.sent()).SlSocialYoutube;
                    return [2 /*return*/, SlSocialYoutube];
                case 335: return [4 /*yield*/, import("react-icons/sl")];
                case 336:
                    SlSpeech = (_b.sent()).SlSpeech;
                    return [2 /*return*/, SlSpeech];
                case 337: return [4 /*yield*/, import("react-icons/sl")];
                case 338:
                    SlSpeedometer = (_b.sent()).SlSpeedometer;
                    return [2 /*return*/, SlSpeedometer];
                case 339: return [4 /*yield*/, import("react-icons/sl")];
                case 340:
                    SlStar = (_b.sent()).SlStar;
                    return [2 /*return*/, SlStar];
                case 341: return [4 /*yield*/, import("react-icons/sl")];
                case 342:
                    SlSupport = (_b.sent()).SlSupport;
                    return [2 /*return*/, SlSupport];
                case 343: return [4 /*yield*/, import("react-icons/sl")];
                case 344:
                    SlSymbleFemale = (_b.sent()).SlSymbleFemale;
                    return [2 /*return*/, SlSymbleFemale];
                case 345: return [4 /*yield*/, import("react-icons/sl")];
                case 346:
                    SlSymbolMale = (_b.sent()).SlSymbolMale;
                    return [2 /*return*/, SlSymbolMale];
                case 347: return [4 /*yield*/, import("react-icons/sl")];
                case 348:
                    SlTag = (_b.sent()).SlTag;
                    return [2 /*return*/, SlTag];
                case 349: return [4 /*yield*/, import("react-icons/sl")];
                case 350:
                    SlTarget = (_b.sent()).SlTarget;
                    return [2 /*return*/, SlTarget];
                case 351: return [4 /*yield*/, import("react-icons/sl")];
                case 352:
                    SlTrash = (_b.sent()).SlTrash;
                    return [2 /*return*/, SlTrash];
                case 353: return [4 /*yield*/, import("react-icons/sl")];
                case 354:
                    SlTrophy = (_b.sent()).SlTrophy;
                    return [2 /*return*/, SlTrophy];
                case 355: return [4 /*yield*/, import("react-icons/sl")];
                case 356:
                    SlUmbrella = (_b.sent()).SlUmbrella;
                    return [2 /*return*/, SlUmbrella];
                case 357: return [4 /*yield*/, import("react-icons/sl")];
                case 358:
                    SlUserFemale = (_b.sent()).SlUserFemale;
                    return [2 /*return*/, SlUserFemale];
                case 359: return [4 /*yield*/, import("react-icons/sl")];
                case 360:
                    SlUserFollow = (_b.sent()).SlUserFollow;
                    return [2 /*return*/, SlUserFollow];
                case 361: return [4 /*yield*/, import("react-icons/sl")];
                case 362:
                    SlUserFollowing = (_b.sent()).SlUserFollowing;
                    return [2 /*return*/, SlUserFollowing];
                case 363: return [4 /*yield*/, import("react-icons/sl")];
                case 364:
                    SlUserUnfollow = (_b.sent()).SlUserUnfollow;
                    return [2 /*return*/, SlUserUnfollow];
                case 365: return [4 /*yield*/, import("react-icons/sl")];
                case 366:
                    SlUser = (_b.sent()).SlUser;
                    return [2 /*return*/, SlUser];
                case 367: return [4 /*yield*/, import("react-icons/sl")];
                case 368:
                    SlVector = (_b.sent()).SlVector;
                    return [2 /*return*/, SlVector];
                case 369: return [4 /*yield*/, import("react-icons/sl")];
                case 370:
                    SlVolume1 = (_b.sent()).SlVolume1;
                    return [2 /*return*/, SlVolume1];
                case 371: return [4 /*yield*/, import("react-icons/sl")];
                case 372:
                    SlVolume2 = (_b.sent()).SlVolume2;
                    return [2 /*return*/, SlVolume2];
                case 373: return [4 /*yield*/, import("react-icons/sl")];
                case 374:
                    SlVolumeOff = (_b.sent()).SlVolumeOff;
                    return [2 /*return*/, SlVolumeOff];
                case 375: return [4 /*yield*/, import("react-icons/sl")];
                case 376:
                    SlWallet = (_b.sent()).SlWallet;
                    return [2 /*return*/, SlWallet];
                case 377: return [4 /*yield*/, import("react-icons/sl")];
                case 378:
                    SlWrench = (_b.sent()).SlWrench;
                    return [2 /*return*/, SlWrench];
                case 379: return [2 /*return*/];
            }
        });
    });
}
