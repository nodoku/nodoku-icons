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
export function nameToReactIcon_ci_0(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, CiAirportSign1, CiAlarmOff, CiAlarmOn, CiAlignBottom, CiAlignCenterH, CiAlignCenterV, CiAlignLeft, CiAlignRight, CiAlignTop, CiApple, CiAt, CiAvocado, CiBacon, CiBadgeDollar, CiBag1, CiBandage, CiBank, CiBarcode, CiBaseball, CiBasketball, CiBatteryCharging, CiBatteryEmpty, CiBatteryFull, CiBeaker1, CiBeerMugFull, CiBellOff, CiBellOn, CiBezier, CiBitcoin, CiBluetooth, CiBookmarkCheck, CiBookmarkMinus, CiBookmarkPlus, CiBookmarkRemove, CiBookmark, CiBowlNoodles, CiBoxList, CiBoxes, CiBrightnessDown, CiBrightnessUp, CiBullhorn, CiBurger, CiCalculator1, CiCalculator2, CiCalendarDate, CiCalendar, CiCamera, CiChat1, CiChat2, CiCircleAlert, CiCircleCheck, CiCircleChevDown, CiCircleChevLeft, CiCircleChevRight, CiCircleChevUp, CiCircleInfo, CiCircleList, CiCircleMinus, CiCircleMore, CiCirclePlus, CiCircleQuestion, CiCircleRemove, CiClock1, CiClock2, CiCloudDrizzle, CiCloudMoon, CiCloudOff, CiCloudOn, CiCloudRainbow, CiCloudSun, CiCloud, CiCoffeeBean, CiCoffeeCup, CiCoinInsert, CiCoins1, CiCompass1, CiCreditCard1, CiCreditCard2, CiCreditCardOff, CiCrop, CiDark, CiDatabase, CiDeliveryTruck, CiDesktopMouse1, CiDesktopMouse2, CiDesktop, CiDiscount1, CiDollar, CiDroplet, CiDumbbell, CiEdit, CiEraser, CiExport, CiFaceFrown, CiFaceMeh, CiFaceSmile, CiFacebook, CiFileOff, CiFileOn, CiFilter, CiFlag1, CiFloppyDisk, CiFolderOff, CiFolderOn, CiFootball, CiForkAndKnife, CiFries, CiGift, CiGlass, CiGlobe, CiGps, CiGrid2H, CiGrid2V, CiGrid31, CiGrid32, CiGrid41, CiGrid42, CiHardDrive, CiHashtag, CiHeadphones, CiHeart, CiHome, CiHospital1, CiHotdog, CiIceCream, CiImageOff, CiImageOn, CiImport, CiInboxIn, CiInboxOut, CiIndent, CiInstagram, CiKeyboard, CiLaptop, CiLemon, CiLight, CiLineHeight, CiLink, CiLinkedin, CiLocationArrow1, CiLocationOff, CiLocationOn, CiLock, CiLogin, CiLogout, CiLollipop, CiMail, CiMapPin, CiMap, CiMaximize1, CiMaximize2, CiMedal, CiMedicalCase, CiMedicalClipboard, CiMedicalCross, CiMedicalMask, CiMemoPad, CiMenuBurger, CiMenuFries, CiMenuKebab, CiMicrochip, CiMicrophoneOff, CiMicrophoneOn, CiMinimize1, CiMinimize2, CiMobile1, CiMobile2, CiMobile3, CiMobile4, CiMoneyBill, CiMoneyCheck1, CiMonitor, CiMountain1, CiMug1, CiMusicNote1, CiNoWaitingSign, CiPalette, CiPaperplane, CiParking1, CiPassport1, CiPause1, CiPen, CiPenpot, CiPercent, CiPhone, CiPickerEmpty, CiPickerHalf, CiPill, CiPillsBottle1, CiPizza, CiPlane, CiPlay1, CiPlug1, CiPower, CiRainbow, CiRead, CiReceipt, CiRedo, CiRepeat, CiRollingSuitcase, CiRoute, CiRouter, CiRuler, CiSatellite1, CiSaveDown1, CiSaveDown2, CiSaveUp1, CiSaveUp2, CiSearch, CiServer, CiSettings, CiShare1, CiShare2, CiShirt, CiShop, CiShoppingBasket, CiShoppingCart, CiShoppingTag, CiShuffle, CiSignpostDuo1, CiSignpostL1, CiSignpostR1, CiSliderHorizontal, CiSliderVertical, CiSpeaker, CiSquareAlert, CiSquareCheck, CiSquareChevDown, CiSquareChevLeft, CiSquareChevRight, CiSquareChevUp, CiSquareInfo, CiSquareMinus, CiSquareMore, CiSquarePlus, CiSquareQuestion, CiSquareRemove, CiStar, CiStethoscope, CiStickyNote, CiStop1, CiStopSign1, CiStopwatch, CiStreamOff, CiStreamOn, CiSun, CiTablets1, CiTempHigh, CiTextAlignCenter, CiTextAlignJustify, CiTextAlignLeft, CiTextAlignRight, CiText, CiTimer, CiTrash, CiTrophy, CiTurnL1, CiTurnR1, CiTwitter, CiUmbrella, CiUndo, CiUnlock, CiUnread, CiUsb, CiUser, CiVault, CiVial, CiVideoOff, CiVideoOn, CiViewBoard, CiViewColumn, CiViewList, CiViewTable, CiViewTimeline, CiVirus, CiVoicemail, CiVolumeHigh, CiVolumeMute, CiVolume, CiWallet, CiWarning, CiWavePulse1, CiWheat, CiWifiOff, CiWifiOn, CiYoutube, CiZoomIn, CiZoomOut;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "ci:CiAirportSign1": return [3 /*break*/, 1];
                        case "ci:CiAlarmOff": return [3 /*break*/, 3];
                        case "ci:CiAlarmOn": return [3 /*break*/, 5];
                        case "ci:CiAlignBottom": return [3 /*break*/, 7];
                        case "ci:CiAlignCenterH": return [3 /*break*/, 9];
                        case "ci:CiAlignCenterV": return [3 /*break*/, 11];
                        case "ci:CiAlignLeft": return [3 /*break*/, 13];
                        case "ci:CiAlignRight": return [3 /*break*/, 15];
                        case "ci:CiAlignTop": return [3 /*break*/, 17];
                        case "ci:CiApple": return [3 /*break*/, 19];
                        case "ci:CiAt": return [3 /*break*/, 21];
                        case "ci:CiAvocado": return [3 /*break*/, 23];
                        case "ci:CiBacon": return [3 /*break*/, 25];
                        case "ci:CiBadgeDollar": return [3 /*break*/, 27];
                        case "ci:CiBag1": return [3 /*break*/, 29];
                        case "ci:CiBandage": return [3 /*break*/, 31];
                        case "ci:CiBank": return [3 /*break*/, 33];
                        case "ci:CiBarcode": return [3 /*break*/, 35];
                        case "ci:CiBaseball": return [3 /*break*/, 37];
                        case "ci:CiBasketball": return [3 /*break*/, 39];
                        case "ci:CiBatteryCharging": return [3 /*break*/, 41];
                        case "ci:CiBatteryEmpty": return [3 /*break*/, 43];
                        case "ci:CiBatteryFull": return [3 /*break*/, 45];
                        case "ci:CiBeaker1": return [3 /*break*/, 47];
                        case "ci:CiBeerMugFull": return [3 /*break*/, 49];
                        case "ci:CiBellOff": return [3 /*break*/, 51];
                        case "ci:CiBellOn": return [3 /*break*/, 53];
                        case "ci:CiBezier": return [3 /*break*/, 55];
                        case "ci:CiBitcoin": return [3 /*break*/, 57];
                        case "ci:CiBluetooth": return [3 /*break*/, 59];
                        case "ci:CiBookmarkCheck": return [3 /*break*/, 61];
                        case "ci:CiBookmarkMinus": return [3 /*break*/, 63];
                        case "ci:CiBookmarkPlus": return [3 /*break*/, 65];
                        case "ci:CiBookmarkRemove": return [3 /*break*/, 67];
                        case "ci:CiBookmark": return [3 /*break*/, 69];
                        case "ci:CiBowlNoodles": return [3 /*break*/, 71];
                        case "ci:CiBoxList": return [3 /*break*/, 73];
                        case "ci:CiBoxes": return [3 /*break*/, 75];
                        case "ci:CiBrightnessDown": return [3 /*break*/, 77];
                        case "ci:CiBrightnessUp": return [3 /*break*/, 79];
                        case "ci:CiBullhorn": return [3 /*break*/, 81];
                        case "ci:CiBurger": return [3 /*break*/, 83];
                        case "ci:CiCalculator1": return [3 /*break*/, 85];
                        case "ci:CiCalculator2": return [3 /*break*/, 87];
                        case "ci:CiCalendarDate": return [3 /*break*/, 89];
                        case "ci:CiCalendar": return [3 /*break*/, 91];
                        case "ci:CiCamera": return [3 /*break*/, 93];
                        case "ci:CiChat1": return [3 /*break*/, 95];
                        case "ci:CiChat2": return [3 /*break*/, 97];
                        case "ci:CiCircleAlert": return [3 /*break*/, 99];
                        case "ci:CiCircleCheck": return [3 /*break*/, 101];
                        case "ci:CiCircleChevDown": return [3 /*break*/, 103];
                        case "ci:CiCircleChevLeft": return [3 /*break*/, 105];
                        case "ci:CiCircleChevRight": return [3 /*break*/, 107];
                        case "ci:CiCircleChevUp": return [3 /*break*/, 109];
                        case "ci:CiCircleInfo": return [3 /*break*/, 111];
                        case "ci:CiCircleList": return [3 /*break*/, 113];
                        case "ci:CiCircleMinus": return [3 /*break*/, 115];
                        case "ci:CiCircleMore": return [3 /*break*/, 117];
                        case "ci:CiCirclePlus": return [3 /*break*/, 119];
                        case "ci:CiCircleQuestion": return [3 /*break*/, 121];
                        case "ci:CiCircleRemove": return [3 /*break*/, 123];
                        case "ci:CiClock1": return [3 /*break*/, 125];
                        case "ci:CiClock2": return [3 /*break*/, 127];
                        case "ci:CiCloudDrizzle": return [3 /*break*/, 129];
                        case "ci:CiCloudMoon": return [3 /*break*/, 131];
                        case "ci:CiCloudOff": return [3 /*break*/, 133];
                        case "ci:CiCloudOn": return [3 /*break*/, 135];
                        case "ci:CiCloudRainbow": return [3 /*break*/, 137];
                        case "ci:CiCloudSun": return [3 /*break*/, 139];
                        case "ci:CiCloud": return [3 /*break*/, 141];
                        case "ci:CiCoffeeBean": return [3 /*break*/, 143];
                        case "ci:CiCoffeeCup": return [3 /*break*/, 145];
                        case "ci:CiCoinInsert": return [3 /*break*/, 147];
                        case "ci:CiCoins1": return [3 /*break*/, 149];
                        case "ci:CiCompass1": return [3 /*break*/, 151];
                        case "ci:CiCreditCard1": return [3 /*break*/, 153];
                        case "ci:CiCreditCard2": return [3 /*break*/, 155];
                        case "ci:CiCreditCardOff": return [3 /*break*/, 157];
                        case "ci:CiCrop": return [3 /*break*/, 159];
                        case "ci:CiDark": return [3 /*break*/, 161];
                        case "ci:CiDatabase": return [3 /*break*/, 163];
                        case "ci:CiDeliveryTruck": return [3 /*break*/, 165];
                        case "ci:CiDesktopMouse1": return [3 /*break*/, 167];
                        case "ci:CiDesktopMouse2": return [3 /*break*/, 169];
                        case "ci:CiDesktop": return [3 /*break*/, 171];
                        case "ci:CiDiscount1": return [3 /*break*/, 173];
                        case "ci:CiDollar": return [3 /*break*/, 175];
                        case "ci:CiDroplet": return [3 /*break*/, 177];
                        case "ci:CiDumbbell": return [3 /*break*/, 179];
                        case "ci:CiEdit": return [3 /*break*/, 181];
                        case "ci:CiEraser": return [3 /*break*/, 183];
                        case "ci:CiExport": return [3 /*break*/, 185];
                        case "ci:CiFaceFrown": return [3 /*break*/, 187];
                        case "ci:CiFaceMeh": return [3 /*break*/, 189];
                        case "ci:CiFaceSmile": return [3 /*break*/, 191];
                        case "ci:CiFacebook": return [3 /*break*/, 193];
                        case "ci:CiFileOff": return [3 /*break*/, 195];
                        case "ci:CiFileOn": return [3 /*break*/, 197];
                        case "ci:CiFilter": return [3 /*break*/, 199];
                        case "ci:CiFlag1": return [3 /*break*/, 201];
                        case "ci:CiFloppyDisk": return [3 /*break*/, 203];
                        case "ci:CiFolderOff": return [3 /*break*/, 205];
                        case "ci:CiFolderOn": return [3 /*break*/, 207];
                        case "ci:CiFootball": return [3 /*break*/, 209];
                        case "ci:CiForkAndKnife": return [3 /*break*/, 211];
                        case "ci:CiFries": return [3 /*break*/, 213];
                        case "ci:CiGift": return [3 /*break*/, 215];
                        case "ci:CiGlass": return [3 /*break*/, 217];
                        case "ci:CiGlobe": return [3 /*break*/, 219];
                        case "ci:CiGps": return [3 /*break*/, 221];
                        case "ci:CiGrid2H": return [3 /*break*/, 223];
                        case "ci:CiGrid2V": return [3 /*break*/, 225];
                        case "ci:CiGrid31": return [3 /*break*/, 227];
                        case "ci:CiGrid32": return [3 /*break*/, 229];
                        case "ci:CiGrid41": return [3 /*break*/, 231];
                        case "ci:CiGrid42": return [3 /*break*/, 233];
                        case "ci:CiHardDrive": return [3 /*break*/, 235];
                        case "ci:CiHashtag": return [3 /*break*/, 237];
                        case "ci:CiHeadphones": return [3 /*break*/, 239];
                        case "ci:CiHeart": return [3 /*break*/, 241];
                        case "ci:CiHome": return [3 /*break*/, 243];
                        case "ci:CiHospital1": return [3 /*break*/, 245];
                        case "ci:CiHotdog": return [3 /*break*/, 247];
                        case "ci:CiIceCream": return [3 /*break*/, 249];
                        case "ci:CiImageOff": return [3 /*break*/, 251];
                        case "ci:CiImageOn": return [3 /*break*/, 253];
                        case "ci:CiImport": return [3 /*break*/, 255];
                        case "ci:CiInboxIn": return [3 /*break*/, 257];
                        case "ci:CiInboxOut": return [3 /*break*/, 259];
                        case "ci:CiIndent": return [3 /*break*/, 261];
                        case "ci:CiInstagram": return [3 /*break*/, 263];
                        case "ci:CiKeyboard": return [3 /*break*/, 265];
                        case "ci:CiLaptop": return [3 /*break*/, 267];
                        case "ci:CiLemon": return [3 /*break*/, 269];
                        case "ci:CiLight": return [3 /*break*/, 271];
                        case "ci:CiLineHeight": return [3 /*break*/, 273];
                        case "ci:CiLink": return [3 /*break*/, 275];
                        case "ci:CiLinkedin": return [3 /*break*/, 277];
                        case "ci:CiLocationArrow1": return [3 /*break*/, 279];
                        case "ci:CiLocationOff": return [3 /*break*/, 281];
                        case "ci:CiLocationOn": return [3 /*break*/, 283];
                        case "ci:CiLock": return [3 /*break*/, 285];
                        case "ci:CiLogin": return [3 /*break*/, 287];
                        case "ci:CiLogout": return [3 /*break*/, 289];
                        case "ci:CiLollipop": return [3 /*break*/, 291];
                        case "ci:CiMail": return [3 /*break*/, 293];
                        case "ci:CiMapPin": return [3 /*break*/, 295];
                        case "ci:CiMap": return [3 /*break*/, 297];
                        case "ci:CiMaximize1": return [3 /*break*/, 299];
                        case "ci:CiMaximize2": return [3 /*break*/, 301];
                        case "ci:CiMedal": return [3 /*break*/, 303];
                        case "ci:CiMedicalCase": return [3 /*break*/, 305];
                        case "ci:CiMedicalClipboard": return [3 /*break*/, 307];
                        case "ci:CiMedicalCross": return [3 /*break*/, 309];
                        case "ci:CiMedicalMask": return [3 /*break*/, 311];
                        case "ci:CiMemoPad": return [3 /*break*/, 313];
                        case "ci:CiMenuBurger": return [3 /*break*/, 315];
                        case "ci:CiMenuFries": return [3 /*break*/, 317];
                        case "ci:CiMenuKebab": return [3 /*break*/, 319];
                        case "ci:CiMicrochip": return [3 /*break*/, 321];
                        case "ci:CiMicrophoneOff": return [3 /*break*/, 323];
                        case "ci:CiMicrophoneOn": return [3 /*break*/, 325];
                        case "ci:CiMinimize1": return [3 /*break*/, 327];
                        case "ci:CiMinimize2": return [3 /*break*/, 329];
                        case "ci:CiMobile1": return [3 /*break*/, 331];
                        case "ci:CiMobile2": return [3 /*break*/, 333];
                        case "ci:CiMobile3": return [3 /*break*/, 335];
                        case "ci:CiMobile4": return [3 /*break*/, 337];
                        case "ci:CiMoneyBill": return [3 /*break*/, 339];
                        case "ci:CiMoneyCheck1": return [3 /*break*/, 341];
                        case "ci:CiMonitor": return [3 /*break*/, 343];
                        case "ci:CiMountain1": return [3 /*break*/, 345];
                        case "ci:CiMug1": return [3 /*break*/, 347];
                        case "ci:CiMusicNote1": return [3 /*break*/, 349];
                        case "ci:CiNoWaitingSign": return [3 /*break*/, 351];
                        case "ci:CiPalette": return [3 /*break*/, 353];
                        case "ci:CiPaperplane": return [3 /*break*/, 355];
                        case "ci:CiParking1": return [3 /*break*/, 357];
                        case "ci:CiPassport1": return [3 /*break*/, 359];
                        case "ci:CiPause1": return [3 /*break*/, 361];
                        case "ci:CiPen": return [3 /*break*/, 363];
                        case "ci:CiPenpot": return [3 /*break*/, 365];
                        case "ci:CiPercent": return [3 /*break*/, 367];
                        case "ci:CiPhone": return [3 /*break*/, 369];
                        case "ci:CiPickerEmpty": return [3 /*break*/, 371];
                        case "ci:CiPickerHalf": return [3 /*break*/, 373];
                        case "ci:CiPill": return [3 /*break*/, 375];
                        case "ci:CiPillsBottle1": return [3 /*break*/, 377];
                        case "ci:CiPizza": return [3 /*break*/, 379];
                        case "ci:CiPlane": return [3 /*break*/, 381];
                        case "ci:CiPlay1": return [3 /*break*/, 383];
                        case "ci:CiPlug1": return [3 /*break*/, 385];
                        case "ci:CiPower": return [3 /*break*/, 387];
                        case "ci:CiRainbow": return [3 /*break*/, 389];
                        case "ci:CiRead": return [3 /*break*/, 391];
                        case "ci:CiReceipt": return [3 /*break*/, 393];
                        case "ci:CiRedo": return [3 /*break*/, 395];
                        case "ci:CiRepeat": return [3 /*break*/, 397];
                        case "ci:CiRollingSuitcase": return [3 /*break*/, 399];
                        case "ci:CiRoute": return [3 /*break*/, 401];
                        case "ci:CiRouter": return [3 /*break*/, 403];
                        case "ci:CiRuler": return [3 /*break*/, 405];
                        case "ci:CiSatellite1": return [3 /*break*/, 407];
                        case "ci:CiSaveDown1": return [3 /*break*/, 409];
                        case "ci:CiSaveDown2": return [3 /*break*/, 411];
                        case "ci:CiSaveUp1": return [3 /*break*/, 413];
                        case "ci:CiSaveUp2": return [3 /*break*/, 415];
                        case "ci:CiSearch": return [3 /*break*/, 417];
                        case "ci:CiServer": return [3 /*break*/, 419];
                        case "ci:CiSettings": return [3 /*break*/, 421];
                        case "ci:CiShare1": return [3 /*break*/, 423];
                        case "ci:CiShare2": return [3 /*break*/, 425];
                        case "ci:CiShirt": return [3 /*break*/, 427];
                        case "ci:CiShop": return [3 /*break*/, 429];
                        case "ci:CiShoppingBasket": return [3 /*break*/, 431];
                        case "ci:CiShoppingCart": return [3 /*break*/, 433];
                        case "ci:CiShoppingTag": return [3 /*break*/, 435];
                        case "ci:CiShuffle": return [3 /*break*/, 437];
                        case "ci:CiSignpostDuo1": return [3 /*break*/, 439];
                        case "ci:CiSignpostL1": return [3 /*break*/, 441];
                        case "ci:CiSignpostR1": return [3 /*break*/, 443];
                        case "ci:CiSliderHorizontal": return [3 /*break*/, 445];
                        case "ci:CiSliderVertical": return [3 /*break*/, 447];
                        case "ci:CiSpeaker": return [3 /*break*/, 449];
                        case "ci:CiSquareAlert": return [3 /*break*/, 451];
                        case "ci:CiSquareCheck": return [3 /*break*/, 453];
                        case "ci:CiSquareChevDown": return [3 /*break*/, 455];
                        case "ci:CiSquareChevLeft": return [3 /*break*/, 457];
                        case "ci:CiSquareChevRight": return [3 /*break*/, 459];
                        case "ci:CiSquareChevUp": return [3 /*break*/, 461];
                        case "ci:CiSquareInfo": return [3 /*break*/, 463];
                        case "ci:CiSquareMinus": return [3 /*break*/, 465];
                        case "ci:CiSquareMore": return [3 /*break*/, 467];
                        case "ci:CiSquarePlus": return [3 /*break*/, 469];
                        case "ci:CiSquareQuestion": return [3 /*break*/, 471];
                        case "ci:CiSquareRemove": return [3 /*break*/, 473];
                        case "ci:CiStar": return [3 /*break*/, 475];
                        case "ci:CiStethoscope": return [3 /*break*/, 477];
                        case "ci:CiStickyNote": return [3 /*break*/, 479];
                        case "ci:CiStop1": return [3 /*break*/, 481];
                        case "ci:CiStopSign1": return [3 /*break*/, 483];
                        case "ci:CiStopwatch": return [3 /*break*/, 485];
                        case "ci:CiStreamOff": return [3 /*break*/, 487];
                        case "ci:CiStreamOn": return [3 /*break*/, 489];
                        case "ci:CiSun": return [3 /*break*/, 491];
                        case "ci:CiTablets1": return [3 /*break*/, 493];
                        case "ci:CiTempHigh": return [3 /*break*/, 495];
                        case "ci:CiTextAlignCenter": return [3 /*break*/, 497];
                        case "ci:CiTextAlignJustify": return [3 /*break*/, 499];
                        case "ci:CiTextAlignLeft": return [3 /*break*/, 501];
                        case "ci:CiTextAlignRight": return [3 /*break*/, 503];
                        case "ci:CiText": return [3 /*break*/, 505];
                        case "ci:CiTimer": return [3 /*break*/, 507];
                        case "ci:CiTrash": return [3 /*break*/, 509];
                        case "ci:CiTrophy": return [3 /*break*/, 511];
                        case "ci:CiTurnL1": return [3 /*break*/, 513];
                        case "ci:CiTurnR1": return [3 /*break*/, 515];
                        case "ci:CiTwitter": return [3 /*break*/, 517];
                        case "ci:CiUmbrella": return [3 /*break*/, 519];
                        case "ci:CiUndo": return [3 /*break*/, 521];
                        case "ci:CiUnlock": return [3 /*break*/, 523];
                        case "ci:CiUnread": return [3 /*break*/, 525];
                        case "ci:CiUsb": return [3 /*break*/, 527];
                        case "ci:CiUser": return [3 /*break*/, 529];
                        case "ci:CiVault": return [3 /*break*/, 531];
                        case "ci:CiVial": return [3 /*break*/, 533];
                        case "ci:CiVideoOff": return [3 /*break*/, 535];
                        case "ci:CiVideoOn": return [3 /*break*/, 537];
                        case "ci:CiViewBoard": return [3 /*break*/, 539];
                        case "ci:CiViewColumn": return [3 /*break*/, 541];
                        case "ci:CiViewList": return [3 /*break*/, 543];
                        case "ci:CiViewTable": return [3 /*break*/, 545];
                        case "ci:CiViewTimeline": return [3 /*break*/, 547];
                        case "ci:CiVirus": return [3 /*break*/, 549];
                        case "ci:CiVoicemail": return [3 /*break*/, 551];
                        case "ci:CiVolumeHigh": return [3 /*break*/, 553];
                        case "ci:CiVolumeMute": return [3 /*break*/, 555];
                        case "ci:CiVolume": return [3 /*break*/, 557];
                        case "ci:CiWallet": return [3 /*break*/, 559];
                        case "ci:CiWarning": return [3 /*break*/, 561];
                        case "ci:CiWavePulse1": return [3 /*break*/, 563];
                        case "ci:CiWheat": return [3 /*break*/, 565];
                        case "ci:CiWifiOff": return [3 /*break*/, 567];
                        case "ci:CiWifiOn": return [3 /*break*/, 569];
                        case "ci:CiYoutube": return [3 /*break*/, 571];
                        case "ci:CiZoomIn": return [3 /*break*/, 573];
                        case "ci:CiZoomOut": return [3 /*break*/, 575];
                    }
                    return [3 /*break*/, 577];
                case 1: return [4 /*yield*/, import("react-icons/ci")];
                case 2:
                    CiAirportSign1 = (_b.sent()).CiAirportSign1;
                    return [2 /*return*/, CiAirportSign1];
                case 3: return [4 /*yield*/, import("react-icons/ci")];
                case 4:
                    CiAlarmOff = (_b.sent()).CiAlarmOff;
                    return [2 /*return*/, CiAlarmOff];
                case 5: return [4 /*yield*/, import("react-icons/ci")];
                case 6:
                    CiAlarmOn = (_b.sent()).CiAlarmOn;
                    return [2 /*return*/, CiAlarmOn];
                case 7: return [4 /*yield*/, import("react-icons/ci")];
                case 8:
                    CiAlignBottom = (_b.sent()).CiAlignBottom;
                    return [2 /*return*/, CiAlignBottom];
                case 9: return [4 /*yield*/, import("react-icons/ci")];
                case 10:
                    CiAlignCenterH = (_b.sent()).CiAlignCenterH;
                    return [2 /*return*/, CiAlignCenterH];
                case 11: return [4 /*yield*/, import("react-icons/ci")];
                case 12:
                    CiAlignCenterV = (_b.sent()).CiAlignCenterV;
                    return [2 /*return*/, CiAlignCenterV];
                case 13: return [4 /*yield*/, import("react-icons/ci")];
                case 14:
                    CiAlignLeft = (_b.sent()).CiAlignLeft;
                    return [2 /*return*/, CiAlignLeft];
                case 15: return [4 /*yield*/, import("react-icons/ci")];
                case 16:
                    CiAlignRight = (_b.sent()).CiAlignRight;
                    return [2 /*return*/, CiAlignRight];
                case 17: return [4 /*yield*/, import("react-icons/ci")];
                case 18:
                    CiAlignTop = (_b.sent()).CiAlignTop;
                    return [2 /*return*/, CiAlignTop];
                case 19: return [4 /*yield*/, import("react-icons/ci")];
                case 20:
                    CiApple = (_b.sent()).CiApple;
                    return [2 /*return*/, CiApple];
                case 21: return [4 /*yield*/, import("react-icons/ci")];
                case 22:
                    CiAt = (_b.sent()).CiAt;
                    return [2 /*return*/, CiAt];
                case 23: return [4 /*yield*/, import("react-icons/ci")];
                case 24:
                    CiAvocado = (_b.sent()).CiAvocado;
                    return [2 /*return*/, CiAvocado];
                case 25: return [4 /*yield*/, import("react-icons/ci")];
                case 26:
                    CiBacon = (_b.sent()).CiBacon;
                    return [2 /*return*/, CiBacon];
                case 27: return [4 /*yield*/, import("react-icons/ci")];
                case 28:
                    CiBadgeDollar = (_b.sent()).CiBadgeDollar;
                    return [2 /*return*/, CiBadgeDollar];
                case 29: return [4 /*yield*/, import("react-icons/ci")];
                case 30:
                    CiBag1 = (_b.sent()).CiBag1;
                    return [2 /*return*/, CiBag1];
                case 31: return [4 /*yield*/, import("react-icons/ci")];
                case 32:
                    CiBandage = (_b.sent()).CiBandage;
                    return [2 /*return*/, CiBandage];
                case 33: return [4 /*yield*/, import("react-icons/ci")];
                case 34:
                    CiBank = (_b.sent()).CiBank;
                    return [2 /*return*/, CiBank];
                case 35: return [4 /*yield*/, import("react-icons/ci")];
                case 36:
                    CiBarcode = (_b.sent()).CiBarcode;
                    return [2 /*return*/, CiBarcode];
                case 37: return [4 /*yield*/, import("react-icons/ci")];
                case 38:
                    CiBaseball = (_b.sent()).CiBaseball;
                    return [2 /*return*/, CiBaseball];
                case 39: return [4 /*yield*/, import("react-icons/ci")];
                case 40:
                    CiBasketball = (_b.sent()).CiBasketball;
                    return [2 /*return*/, CiBasketball];
                case 41: return [4 /*yield*/, import("react-icons/ci")];
                case 42:
                    CiBatteryCharging = (_b.sent()).CiBatteryCharging;
                    return [2 /*return*/, CiBatteryCharging];
                case 43: return [4 /*yield*/, import("react-icons/ci")];
                case 44:
                    CiBatteryEmpty = (_b.sent()).CiBatteryEmpty;
                    return [2 /*return*/, CiBatteryEmpty];
                case 45: return [4 /*yield*/, import("react-icons/ci")];
                case 46:
                    CiBatteryFull = (_b.sent()).CiBatteryFull;
                    return [2 /*return*/, CiBatteryFull];
                case 47: return [4 /*yield*/, import("react-icons/ci")];
                case 48:
                    CiBeaker1 = (_b.sent()).CiBeaker1;
                    return [2 /*return*/, CiBeaker1];
                case 49: return [4 /*yield*/, import("react-icons/ci")];
                case 50:
                    CiBeerMugFull = (_b.sent()).CiBeerMugFull;
                    return [2 /*return*/, CiBeerMugFull];
                case 51: return [4 /*yield*/, import("react-icons/ci")];
                case 52:
                    CiBellOff = (_b.sent()).CiBellOff;
                    return [2 /*return*/, CiBellOff];
                case 53: return [4 /*yield*/, import("react-icons/ci")];
                case 54:
                    CiBellOn = (_b.sent()).CiBellOn;
                    return [2 /*return*/, CiBellOn];
                case 55: return [4 /*yield*/, import("react-icons/ci")];
                case 56:
                    CiBezier = (_b.sent()).CiBezier;
                    return [2 /*return*/, CiBezier];
                case 57: return [4 /*yield*/, import("react-icons/ci")];
                case 58:
                    CiBitcoin = (_b.sent()).CiBitcoin;
                    return [2 /*return*/, CiBitcoin];
                case 59: return [4 /*yield*/, import("react-icons/ci")];
                case 60:
                    CiBluetooth = (_b.sent()).CiBluetooth;
                    return [2 /*return*/, CiBluetooth];
                case 61: return [4 /*yield*/, import("react-icons/ci")];
                case 62:
                    CiBookmarkCheck = (_b.sent()).CiBookmarkCheck;
                    return [2 /*return*/, CiBookmarkCheck];
                case 63: return [4 /*yield*/, import("react-icons/ci")];
                case 64:
                    CiBookmarkMinus = (_b.sent()).CiBookmarkMinus;
                    return [2 /*return*/, CiBookmarkMinus];
                case 65: return [4 /*yield*/, import("react-icons/ci")];
                case 66:
                    CiBookmarkPlus = (_b.sent()).CiBookmarkPlus;
                    return [2 /*return*/, CiBookmarkPlus];
                case 67: return [4 /*yield*/, import("react-icons/ci")];
                case 68:
                    CiBookmarkRemove = (_b.sent()).CiBookmarkRemove;
                    return [2 /*return*/, CiBookmarkRemove];
                case 69: return [4 /*yield*/, import("react-icons/ci")];
                case 70:
                    CiBookmark = (_b.sent()).CiBookmark;
                    return [2 /*return*/, CiBookmark];
                case 71: return [4 /*yield*/, import("react-icons/ci")];
                case 72:
                    CiBowlNoodles = (_b.sent()).CiBowlNoodles;
                    return [2 /*return*/, CiBowlNoodles];
                case 73: return [4 /*yield*/, import("react-icons/ci")];
                case 74:
                    CiBoxList = (_b.sent()).CiBoxList;
                    return [2 /*return*/, CiBoxList];
                case 75: return [4 /*yield*/, import("react-icons/ci")];
                case 76:
                    CiBoxes = (_b.sent()).CiBoxes;
                    return [2 /*return*/, CiBoxes];
                case 77: return [4 /*yield*/, import("react-icons/ci")];
                case 78:
                    CiBrightnessDown = (_b.sent()).CiBrightnessDown;
                    return [2 /*return*/, CiBrightnessDown];
                case 79: return [4 /*yield*/, import("react-icons/ci")];
                case 80:
                    CiBrightnessUp = (_b.sent()).CiBrightnessUp;
                    return [2 /*return*/, CiBrightnessUp];
                case 81: return [4 /*yield*/, import("react-icons/ci")];
                case 82:
                    CiBullhorn = (_b.sent()).CiBullhorn;
                    return [2 /*return*/, CiBullhorn];
                case 83: return [4 /*yield*/, import("react-icons/ci")];
                case 84:
                    CiBurger = (_b.sent()).CiBurger;
                    return [2 /*return*/, CiBurger];
                case 85: return [4 /*yield*/, import("react-icons/ci")];
                case 86:
                    CiCalculator1 = (_b.sent()).CiCalculator1;
                    return [2 /*return*/, CiCalculator1];
                case 87: return [4 /*yield*/, import("react-icons/ci")];
                case 88:
                    CiCalculator2 = (_b.sent()).CiCalculator2;
                    return [2 /*return*/, CiCalculator2];
                case 89: return [4 /*yield*/, import("react-icons/ci")];
                case 90:
                    CiCalendarDate = (_b.sent()).CiCalendarDate;
                    return [2 /*return*/, CiCalendarDate];
                case 91: return [4 /*yield*/, import("react-icons/ci")];
                case 92:
                    CiCalendar = (_b.sent()).CiCalendar;
                    return [2 /*return*/, CiCalendar];
                case 93: return [4 /*yield*/, import("react-icons/ci")];
                case 94:
                    CiCamera = (_b.sent()).CiCamera;
                    return [2 /*return*/, CiCamera];
                case 95: return [4 /*yield*/, import("react-icons/ci")];
                case 96:
                    CiChat1 = (_b.sent()).CiChat1;
                    return [2 /*return*/, CiChat1];
                case 97: return [4 /*yield*/, import("react-icons/ci")];
                case 98:
                    CiChat2 = (_b.sent()).CiChat2;
                    return [2 /*return*/, CiChat2];
                case 99: return [4 /*yield*/, import("react-icons/ci")];
                case 100:
                    CiCircleAlert = (_b.sent()).CiCircleAlert;
                    return [2 /*return*/, CiCircleAlert];
                case 101: return [4 /*yield*/, import("react-icons/ci")];
                case 102:
                    CiCircleCheck = (_b.sent()).CiCircleCheck;
                    return [2 /*return*/, CiCircleCheck];
                case 103: return [4 /*yield*/, import("react-icons/ci")];
                case 104:
                    CiCircleChevDown = (_b.sent()).CiCircleChevDown;
                    return [2 /*return*/, CiCircleChevDown];
                case 105: return [4 /*yield*/, import("react-icons/ci")];
                case 106:
                    CiCircleChevLeft = (_b.sent()).CiCircleChevLeft;
                    return [2 /*return*/, CiCircleChevLeft];
                case 107: return [4 /*yield*/, import("react-icons/ci")];
                case 108:
                    CiCircleChevRight = (_b.sent()).CiCircleChevRight;
                    return [2 /*return*/, CiCircleChevRight];
                case 109: return [4 /*yield*/, import("react-icons/ci")];
                case 110:
                    CiCircleChevUp = (_b.sent()).CiCircleChevUp;
                    return [2 /*return*/, CiCircleChevUp];
                case 111: return [4 /*yield*/, import("react-icons/ci")];
                case 112:
                    CiCircleInfo = (_b.sent()).CiCircleInfo;
                    return [2 /*return*/, CiCircleInfo];
                case 113: return [4 /*yield*/, import("react-icons/ci")];
                case 114:
                    CiCircleList = (_b.sent()).CiCircleList;
                    return [2 /*return*/, CiCircleList];
                case 115: return [4 /*yield*/, import("react-icons/ci")];
                case 116:
                    CiCircleMinus = (_b.sent()).CiCircleMinus;
                    return [2 /*return*/, CiCircleMinus];
                case 117: return [4 /*yield*/, import("react-icons/ci")];
                case 118:
                    CiCircleMore = (_b.sent()).CiCircleMore;
                    return [2 /*return*/, CiCircleMore];
                case 119: return [4 /*yield*/, import("react-icons/ci")];
                case 120:
                    CiCirclePlus = (_b.sent()).CiCirclePlus;
                    return [2 /*return*/, CiCirclePlus];
                case 121: return [4 /*yield*/, import("react-icons/ci")];
                case 122:
                    CiCircleQuestion = (_b.sent()).CiCircleQuestion;
                    return [2 /*return*/, CiCircleQuestion];
                case 123: return [4 /*yield*/, import("react-icons/ci")];
                case 124:
                    CiCircleRemove = (_b.sent()).CiCircleRemove;
                    return [2 /*return*/, CiCircleRemove];
                case 125: return [4 /*yield*/, import("react-icons/ci")];
                case 126:
                    CiClock1 = (_b.sent()).CiClock1;
                    return [2 /*return*/, CiClock1];
                case 127: return [4 /*yield*/, import("react-icons/ci")];
                case 128:
                    CiClock2 = (_b.sent()).CiClock2;
                    return [2 /*return*/, CiClock2];
                case 129: return [4 /*yield*/, import("react-icons/ci")];
                case 130:
                    CiCloudDrizzle = (_b.sent()).CiCloudDrizzle;
                    return [2 /*return*/, CiCloudDrizzle];
                case 131: return [4 /*yield*/, import("react-icons/ci")];
                case 132:
                    CiCloudMoon = (_b.sent()).CiCloudMoon;
                    return [2 /*return*/, CiCloudMoon];
                case 133: return [4 /*yield*/, import("react-icons/ci")];
                case 134:
                    CiCloudOff = (_b.sent()).CiCloudOff;
                    return [2 /*return*/, CiCloudOff];
                case 135: return [4 /*yield*/, import("react-icons/ci")];
                case 136:
                    CiCloudOn = (_b.sent()).CiCloudOn;
                    return [2 /*return*/, CiCloudOn];
                case 137: return [4 /*yield*/, import("react-icons/ci")];
                case 138:
                    CiCloudRainbow = (_b.sent()).CiCloudRainbow;
                    return [2 /*return*/, CiCloudRainbow];
                case 139: return [4 /*yield*/, import("react-icons/ci")];
                case 140:
                    CiCloudSun = (_b.sent()).CiCloudSun;
                    return [2 /*return*/, CiCloudSun];
                case 141: return [4 /*yield*/, import("react-icons/ci")];
                case 142:
                    CiCloud = (_b.sent()).CiCloud;
                    return [2 /*return*/, CiCloud];
                case 143: return [4 /*yield*/, import("react-icons/ci")];
                case 144:
                    CiCoffeeBean = (_b.sent()).CiCoffeeBean;
                    return [2 /*return*/, CiCoffeeBean];
                case 145: return [4 /*yield*/, import("react-icons/ci")];
                case 146:
                    CiCoffeeCup = (_b.sent()).CiCoffeeCup;
                    return [2 /*return*/, CiCoffeeCup];
                case 147: return [4 /*yield*/, import("react-icons/ci")];
                case 148:
                    CiCoinInsert = (_b.sent()).CiCoinInsert;
                    return [2 /*return*/, CiCoinInsert];
                case 149: return [4 /*yield*/, import("react-icons/ci")];
                case 150:
                    CiCoins1 = (_b.sent()).CiCoins1;
                    return [2 /*return*/, CiCoins1];
                case 151: return [4 /*yield*/, import("react-icons/ci")];
                case 152:
                    CiCompass1 = (_b.sent()).CiCompass1;
                    return [2 /*return*/, CiCompass1];
                case 153: return [4 /*yield*/, import("react-icons/ci")];
                case 154:
                    CiCreditCard1 = (_b.sent()).CiCreditCard1;
                    return [2 /*return*/, CiCreditCard1];
                case 155: return [4 /*yield*/, import("react-icons/ci")];
                case 156:
                    CiCreditCard2 = (_b.sent()).CiCreditCard2;
                    return [2 /*return*/, CiCreditCard2];
                case 157: return [4 /*yield*/, import("react-icons/ci")];
                case 158:
                    CiCreditCardOff = (_b.sent()).CiCreditCardOff;
                    return [2 /*return*/, CiCreditCardOff];
                case 159: return [4 /*yield*/, import("react-icons/ci")];
                case 160:
                    CiCrop = (_b.sent()).CiCrop;
                    return [2 /*return*/, CiCrop];
                case 161: return [4 /*yield*/, import("react-icons/ci")];
                case 162:
                    CiDark = (_b.sent()).CiDark;
                    return [2 /*return*/, CiDark];
                case 163: return [4 /*yield*/, import("react-icons/ci")];
                case 164:
                    CiDatabase = (_b.sent()).CiDatabase;
                    return [2 /*return*/, CiDatabase];
                case 165: return [4 /*yield*/, import("react-icons/ci")];
                case 166:
                    CiDeliveryTruck = (_b.sent()).CiDeliveryTruck;
                    return [2 /*return*/, CiDeliveryTruck];
                case 167: return [4 /*yield*/, import("react-icons/ci")];
                case 168:
                    CiDesktopMouse1 = (_b.sent()).CiDesktopMouse1;
                    return [2 /*return*/, CiDesktopMouse1];
                case 169: return [4 /*yield*/, import("react-icons/ci")];
                case 170:
                    CiDesktopMouse2 = (_b.sent()).CiDesktopMouse2;
                    return [2 /*return*/, CiDesktopMouse2];
                case 171: return [4 /*yield*/, import("react-icons/ci")];
                case 172:
                    CiDesktop = (_b.sent()).CiDesktop;
                    return [2 /*return*/, CiDesktop];
                case 173: return [4 /*yield*/, import("react-icons/ci")];
                case 174:
                    CiDiscount1 = (_b.sent()).CiDiscount1;
                    return [2 /*return*/, CiDiscount1];
                case 175: return [4 /*yield*/, import("react-icons/ci")];
                case 176:
                    CiDollar = (_b.sent()).CiDollar;
                    return [2 /*return*/, CiDollar];
                case 177: return [4 /*yield*/, import("react-icons/ci")];
                case 178:
                    CiDroplet = (_b.sent()).CiDroplet;
                    return [2 /*return*/, CiDroplet];
                case 179: return [4 /*yield*/, import("react-icons/ci")];
                case 180:
                    CiDumbbell = (_b.sent()).CiDumbbell;
                    return [2 /*return*/, CiDumbbell];
                case 181: return [4 /*yield*/, import("react-icons/ci")];
                case 182:
                    CiEdit = (_b.sent()).CiEdit;
                    return [2 /*return*/, CiEdit];
                case 183: return [4 /*yield*/, import("react-icons/ci")];
                case 184:
                    CiEraser = (_b.sent()).CiEraser;
                    return [2 /*return*/, CiEraser];
                case 185: return [4 /*yield*/, import("react-icons/ci")];
                case 186:
                    CiExport = (_b.sent()).CiExport;
                    return [2 /*return*/, CiExport];
                case 187: return [4 /*yield*/, import("react-icons/ci")];
                case 188:
                    CiFaceFrown = (_b.sent()).CiFaceFrown;
                    return [2 /*return*/, CiFaceFrown];
                case 189: return [4 /*yield*/, import("react-icons/ci")];
                case 190:
                    CiFaceMeh = (_b.sent()).CiFaceMeh;
                    return [2 /*return*/, CiFaceMeh];
                case 191: return [4 /*yield*/, import("react-icons/ci")];
                case 192:
                    CiFaceSmile = (_b.sent()).CiFaceSmile;
                    return [2 /*return*/, CiFaceSmile];
                case 193: return [4 /*yield*/, import("react-icons/ci")];
                case 194:
                    CiFacebook = (_b.sent()).CiFacebook;
                    return [2 /*return*/, CiFacebook];
                case 195: return [4 /*yield*/, import("react-icons/ci")];
                case 196:
                    CiFileOff = (_b.sent()).CiFileOff;
                    return [2 /*return*/, CiFileOff];
                case 197: return [4 /*yield*/, import("react-icons/ci")];
                case 198:
                    CiFileOn = (_b.sent()).CiFileOn;
                    return [2 /*return*/, CiFileOn];
                case 199: return [4 /*yield*/, import("react-icons/ci")];
                case 200:
                    CiFilter = (_b.sent()).CiFilter;
                    return [2 /*return*/, CiFilter];
                case 201: return [4 /*yield*/, import("react-icons/ci")];
                case 202:
                    CiFlag1 = (_b.sent()).CiFlag1;
                    return [2 /*return*/, CiFlag1];
                case 203: return [4 /*yield*/, import("react-icons/ci")];
                case 204:
                    CiFloppyDisk = (_b.sent()).CiFloppyDisk;
                    return [2 /*return*/, CiFloppyDisk];
                case 205: return [4 /*yield*/, import("react-icons/ci")];
                case 206:
                    CiFolderOff = (_b.sent()).CiFolderOff;
                    return [2 /*return*/, CiFolderOff];
                case 207: return [4 /*yield*/, import("react-icons/ci")];
                case 208:
                    CiFolderOn = (_b.sent()).CiFolderOn;
                    return [2 /*return*/, CiFolderOn];
                case 209: return [4 /*yield*/, import("react-icons/ci")];
                case 210:
                    CiFootball = (_b.sent()).CiFootball;
                    return [2 /*return*/, CiFootball];
                case 211: return [4 /*yield*/, import("react-icons/ci")];
                case 212:
                    CiForkAndKnife = (_b.sent()).CiForkAndKnife;
                    return [2 /*return*/, CiForkAndKnife];
                case 213: return [4 /*yield*/, import("react-icons/ci")];
                case 214:
                    CiFries = (_b.sent()).CiFries;
                    return [2 /*return*/, CiFries];
                case 215: return [4 /*yield*/, import("react-icons/ci")];
                case 216:
                    CiGift = (_b.sent()).CiGift;
                    return [2 /*return*/, CiGift];
                case 217: return [4 /*yield*/, import("react-icons/ci")];
                case 218:
                    CiGlass = (_b.sent()).CiGlass;
                    return [2 /*return*/, CiGlass];
                case 219: return [4 /*yield*/, import("react-icons/ci")];
                case 220:
                    CiGlobe = (_b.sent()).CiGlobe;
                    return [2 /*return*/, CiGlobe];
                case 221: return [4 /*yield*/, import("react-icons/ci")];
                case 222:
                    CiGps = (_b.sent()).CiGps;
                    return [2 /*return*/, CiGps];
                case 223: return [4 /*yield*/, import("react-icons/ci")];
                case 224:
                    CiGrid2H = (_b.sent()).CiGrid2H;
                    return [2 /*return*/, CiGrid2H];
                case 225: return [4 /*yield*/, import("react-icons/ci")];
                case 226:
                    CiGrid2V = (_b.sent()).CiGrid2V;
                    return [2 /*return*/, CiGrid2V];
                case 227: return [4 /*yield*/, import("react-icons/ci")];
                case 228:
                    CiGrid31 = (_b.sent()).CiGrid31;
                    return [2 /*return*/, CiGrid31];
                case 229: return [4 /*yield*/, import("react-icons/ci")];
                case 230:
                    CiGrid32 = (_b.sent()).CiGrid32;
                    return [2 /*return*/, CiGrid32];
                case 231: return [4 /*yield*/, import("react-icons/ci")];
                case 232:
                    CiGrid41 = (_b.sent()).CiGrid41;
                    return [2 /*return*/, CiGrid41];
                case 233: return [4 /*yield*/, import("react-icons/ci")];
                case 234:
                    CiGrid42 = (_b.sent()).CiGrid42;
                    return [2 /*return*/, CiGrid42];
                case 235: return [4 /*yield*/, import("react-icons/ci")];
                case 236:
                    CiHardDrive = (_b.sent()).CiHardDrive;
                    return [2 /*return*/, CiHardDrive];
                case 237: return [4 /*yield*/, import("react-icons/ci")];
                case 238:
                    CiHashtag = (_b.sent()).CiHashtag;
                    return [2 /*return*/, CiHashtag];
                case 239: return [4 /*yield*/, import("react-icons/ci")];
                case 240:
                    CiHeadphones = (_b.sent()).CiHeadphones;
                    return [2 /*return*/, CiHeadphones];
                case 241: return [4 /*yield*/, import("react-icons/ci")];
                case 242:
                    CiHeart = (_b.sent()).CiHeart;
                    return [2 /*return*/, CiHeart];
                case 243: return [4 /*yield*/, import("react-icons/ci")];
                case 244:
                    CiHome = (_b.sent()).CiHome;
                    return [2 /*return*/, CiHome];
                case 245: return [4 /*yield*/, import("react-icons/ci")];
                case 246:
                    CiHospital1 = (_b.sent()).CiHospital1;
                    return [2 /*return*/, CiHospital1];
                case 247: return [4 /*yield*/, import("react-icons/ci")];
                case 248:
                    CiHotdog = (_b.sent()).CiHotdog;
                    return [2 /*return*/, CiHotdog];
                case 249: return [4 /*yield*/, import("react-icons/ci")];
                case 250:
                    CiIceCream = (_b.sent()).CiIceCream;
                    return [2 /*return*/, CiIceCream];
                case 251: return [4 /*yield*/, import("react-icons/ci")];
                case 252:
                    CiImageOff = (_b.sent()).CiImageOff;
                    return [2 /*return*/, CiImageOff];
                case 253: return [4 /*yield*/, import("react-icons/ci")];
                case 254:
                    CiImageOn = (_b.sent()).CiImageOn;
                    return [2 /*return*/, CiImageOn];
                case 255: return [4 /*yield*/, import("react-icons/ci")];
                case 256:
                    CiImport = (_b.sent()).CiImport;
                    return [2 /*return*/, CiImport];
                case 257: return [4 /*yield*/, import("react-icons/ci")];
                case 258:
                    CiInboxIn = (_b.sent()).CiInboxIn;
                    return [2 /*return*/, CiInboxIn];
                case 259: return [4 /*yield*/, import("react-icons/ci")];
                case 260:
                    CiInboxOut = (_b.sent()).CiInboxOut;
                    return [2 /*return*/, CiInboxOut];
                case 261: return [4 /*yield*/, import("react-icons/ci")];
                case 262:
                    CiIndent = (_b.sent()).CiIndent;
                    return [2 /*return*/, CiIndent];
                case 263: return [4 /*yield*/, import("react-icons/ci")];
                case 264:
                    CiInstagram = (_b.sent()).CiInstagram;
                    return [2 /*return*/, CiInstagram];
                case 265: return [4 /*yield*/, import("react-icons/ci")];
                case 266:
                    CiKeyboard = (_b.sent()).CiKeyboard;
                    return [2 /*return*/, CiKeyboard];
                case 267: return [4 /*yield*/, import("react-icons/ci")];
                case 268:
                    CiLaptop = (_b.sent()).CiLaptop;
                    return [2 /*return*/, CiLaptop];
                case 269: return [4 /*yield*/, import("react-icons/ci")];
                case 270:
                    CiLemon = (_b.sent()).CiLemon;
                    return [2 /*return*/, CiLemon];
                case 271: return [4 /*yield*/, import("react-icons/ci")];
                case 272:
                    CiLight = (_b.sent()).CiLight;
                    return [2 /*return*/, CiLight];
                case 273: return [4 /*yield*/, import("react-icons/ci")];
                case 274:
                    CiLineHeight = (_b.sent()).CiLineHeight;
                    return [2 /*return*/, CiLineHeight];
                case 275: return [4 /*yield*/, import("react-icons/ci")];
                case 276:
                    CiLink = (_b.sent()).CiLink;
                    return [2 /*return*/, CiLink];
                case 277: return [4 /*yield*/, import("react-icons/ci")];
                case 278:
                    CiLinkedin = (_b.sent()).CiLinkedin;
                    return [2 /*return*/, CiLinkedin];
                case 279: return [4 /*yield*/, import("react-icons/ci")];
                case 280:
                    CiLocationArrow1 = (_b.sent()).CiLocationArrow1;
                    return [2 /*return*/, CiLocationArrow1];
                case 281: return [4 /*yield*/, import("react-icons/ci")];
                case 282:
                    CiLocationOff = (_b.sent()).CiLocationOff;
                    return [2 /*return*/, CiLocationOff];
                case 283: return [4 /*yield*/, import("react-icons/ci")];
                case 284:
                    CiLocationOn = (_b.sent()).CiLocationOn;
                    return [2 /*return*/, CiLocationOn];
                case 285: return [4 /*yield*/, import("react-icons/ci")];
                case 286:
                    CiLock = (_b.sent()).CiLock;
                    return [2 /*return*/, CiLock];
                case 287: return [4 /*yield*/, import("react-icons/ci")];
                case 288:
                    CiLogin = (_b.sent()).CiLogin;
                    return [2 /*return*/, CiLogin];
                case 289: return [4 /*yield*/, import("react-icons/ci")];
                case 290:
                    CiLogout = (_b.sent()).CiLogout;
                    return [2 /*return*/, CiLogout];
                case 291: return [4 /*yield*/, import("react-icons/ci")];
                case 292:
                    CiLollipop = (_b.sent()).CiLollipop;
                    return [2 /*return*/, CiLollipop];
                case 293: return [4 /*yield*/, import("react-icons/ci")];
                case 294:
                    CiMail = (_b.sent()).CiMail;
                    return [2 /*return*/, CiMail];
                case 295: return [4 /*yield*/, import("react-icons/ci")];
                case 296:
                    CiMapPin = (_b.sent()).CiMapPin;
                    return [2 /*return*/, CiMapPin];
                case 297: return [4 /*yield*/, import("react-icons/ci")];
                case 298:
                    CiMap = (_b.sent()).CiMap;
                    return [2 /*return*/, CiMap];
                case 299: return [4 /*yield*/, import("react-icons/ci")];
                case 300:
                    CiMaximize1 = (_b.sent()).CiMaximize1;
                    return [2 /*return*/, CiMaximize1];
                case 301: return [4 /*yield*/, import("react-icons/ci")];
                case 302:
                    CiMaximize2 = (_b.sent()).CiMaximize2;
                    return [2 /*return*/, CiMaximize2];
                case 303: return [4 /*yield*/, import("react-icons/ci")];
                case 304:
                    CiMedal = (_b.sent()).CiMedal;
                    return [2 /*return*/, CiMedal];
                case 305: return [4 /*yield*/, import("react-icons/ci")];
                case 306:
                    CiMedicalCase = (_b.sent()).CiMedicalCase;
                    return [2 /*return*/, CiMedicalCase];
                case 307: return [4 /*yield*/, import("react-icons/ci")];
                case 308:
                    CiMedicalClipboard = (_b.sent()).CiMedicalClipboard;
                    return [2 /*return*/, CiMedicalClipboard];
                case 309: return [4 /*yield*/, import("react-icons/ci")];
                case 310:
                    CiMedicalCross = (_b.sent()).CiMedicalCross;
                    return [2 /*return*/, CiMedicalCross];
                case 311: return [4 /*yield*/, import("react-icons/ci")];
                case 312:
                    CiMedicalMask = (_b.sent()).CiMedicalMask;
                    return [2 /*return*/, CiMedicalMask];
                case 313: return [4 /*yield*/, import("react-icons/ci")];
                case 314:
                    CiMemoPad = (_b.sent()).CiMemoPad;
                    return [2 /*return*/, CiMemoPad];
                case 315: return [4 /*yield*/, import("react-icons/ci")];
                case 316:
                    CiMenuBurger = (_b.sent()).CiMenuBurger;
                    return [2 /*return*/, CiMenuBurger];
                case 317: return [4 /*yield*/, import("react-icons/ci")];
                case 318:
                    CiMenuFries = (_b.sent()).CiMenuFries;
                    return [2 /*return*/, CiMenuFries];
                case 319: return [4 /*yield*/, import("react-icons/ci")];
                case 320:
                    CiMenuKebab = (_b.sent()).CiMenuKebab;
                    return [2 /*return*/, CiMenuKebab];
                case 321: return [4 /*yield*/, import("react-icons/ci")];
                case 322:
                    CiMicrochip = (_b.sent()).CiMicrochip;
                    return [2 /*return*/, CiMicrochip];
                case 323: return [4 /*yield*/, import("react-icons/ci")];
                case 324:
                    CiMicrophoneOff = (_b.sent()).CiMicrophoneOff;
                    return [2 /*return*/, CiMicrophoneOff];
                case 325: return [4 /*yield*/, import("react-icons/ci")];
                case 326:
                    CiMicrophoneOn = (_b.sent()).CiMicrophoneOn;
                    return [2 /*return*/, CiMicrophoneOn];
                case 327: return [4 /*yield*/, import("react-icons/ci")];
                case 328:
                    CiMinimize1 = (_b.sent()).CiMinimize1;
                    return [2 /*return*/, CiMinimize1];
                case 329: return [4 /*yield*/, import("react-icons/ci")];
                case 330:
                    CiMinimize2 = (_b.sent()).CiMinimize2;
                    return [2 /*return*/, CiMinimize2];
                case 331: return [4 /*yield*/, import("react-icons/ci")];
                case 332:
                    CiMobile1 = (_b.sent()).CiMobile1;
                    return [2 /*return*/, CiMobile1];
                case 333: return [4 /*yield*/, import("react-icons/ci")];
                case 334:
                    CiMobile2 = (_b.sent()).CiMobile2;
                    return [2 /*return*/, CiMobile2];
                case 335: return [4 /*yield*/, import("react-icons/ci")];
                case 336:
                    CiMobile3 = (_b.sent()).CiMobile3;
                    return [2 /*return*/, CiMobile3];
                case 337: return [4 /*yield*/, import("react-icons/ci")];
                case 338:
                    CiMobile4 = (_b.sent()).CiMobile4;
                    return [2 /*return*/, CiMobile4];
                case 339: return [4 /*yield*/, import("react-icons/ci")];
                case 340:
                    CiMoneyBill = (_b.sent()).CiMoneyBill;
                    return [2 /*return*/, CiMoneyBill];
                case 341: return [4 /*yield*/, import("react-icons/ci")];
                case 342:
                    CiMoneyCheck1 = (_b.sent()).CiMoneyCheck1;
                    return [2 /*return*/, CiMoneyCheck1];
                case 343: return [4 /*yield*/, import("react-icons/ci")];
                case 344:
                    CiMonitor = (_b.sent()).CiMonitor;
                    return [2 /*return*/, CiMonitor];
                case 345: return [4 /*yield*/, import("react-icons/ci")];
                case 346:
                    CiMountain1 = (_b.sent()).CiMountain1;
                    return [2 /*return*/, CiMountain1];
                case 347: return [4 /*yield*/, import("react-icons/ci")];
                case 348:
                    CiMug1 = (_b.sent()).CiMug1;
                    return [2 /*return*/, CiMug1];
                case 349: return [4 /*yield*/, import("react-icons/ci")];
                case 350:
                    CiMusicNote1 = (_b.sent()).CiMusicNote1;
                    return [2 /*return*/, CiMusicNote1];
                case 351: return [4 /*yield*/, import("react-icons/ci")];
                case 352:
                    CiNoWaitingSign = (_b.sent()).CiNoWaitingSign;
                    return [2 /*return*/, CiNoWaitingSign];
                case 353: return [4 /*yield*/, import("react-icons/ci")];
                case 354:
                    CiPalette = (_b.sent()).CiPalette;
                    return [2 /*return*/, CiPalette];
                case 355: return [4 /*yield*/, import("react-icons/ci")];
                case 356:
                    CiPaperplane = (_b.sent()).CiPaperplane;
                    return [2 /*return*/, CiPaperplane];
                case 357: return [4 /*yield*/, import("react-icons/ci")];
                case 358:
                    CiParking1 = (_b.sent()).CiParking1;
                    return [2 /*return*/, CiParking1];
                case 359: return [4 /*yield*/, import("react-icons/ci")];
                case 360:
                    CiPassport1 = (_b.sent()).CiPassport1;
                    return [2 /*return*/, CiPassport1];
                case 361: return [4 /*yield*/, import("react-icons/ci")];
                case 362:
                    CiPause1 = (_b.sent()).CiPause1;
                    return [2 /*return*/, CiPause1];
                case 363: return [4 /*yield*/, import("react-icons/ci")];
                case 364:
                    CiPen = (_b.sent()).CiPen;
                    return [2 /*return*/, CiPen];
                case 365: return [4 /*yield*/, import("react-icons/ci")];
                case 366:
                    CiPenpot = (_b.sent()).CiPenpot;
                    return [2 /*return*/, CiPenpot];
                case 367: return [4 /*yield*/, import("react-icons/ci")];
                case 368:
                    CiPercent = (_b.sent()).CiPercent;
                    return [2 /*return*/, CiPercent];
                case 369: return [4 /*yield*/, import("react-icons/ci")];
                case 370:
                    CiPhone = (_b.sent()).CiPhone;
                    return [2 /*return*/, CiPhone];
                case 371: return [4 /*yield*/, import("react-icons/ci")];
                case 372:
                    CiPickerEmpty = (_b.sent()).CiPickerEmpty;
                    return [2 /*return*/, CiPickerEmpty];
                case 373: return [4 /*yield*/, import("react-icons/ci")];
                case 374:
                    CiPickerHalf = (_b.sent()).CiPickerHalf;
                    return [2 /*return*/, CiPickerHalf];
                case 375: return [4 /*yield*/, import("react-icons/ci")];
                case 376:
                    CiPill = (_b.sent()).CiPill;
                    return [2 /*return*/, CiPill];
                case 377: return [4 /*yield*/, import("react-icons/ci")];
                case 378:
                    CiPillsBottle1 = (_b.sent()).CiPillsBottle1;
                    return [2 /*return*/, CiPillsBottle1];
                case 379: return [4 /*yield*/, import("react-icons/ci")];
                case 380:
                    CiPizza = (_b.sent()).CiPizza;
                    return [2 /*return*/, CiPizza];
                case 381: return [4 /*yield*/, import("react-icons/ci")];
                case 382:
                    CiPlane = (_b.sent()).CiPlane;
                    return [2 /*return*/, CiPlane];
                case 383: return [4 /*yield*/, import("react-icons/ci")];
                case 384:
                    CiPlay1 = (_b.sent()).CiPlay1;
                    return [2 /*return*/, CiPlay1];
                case 385: return [4 /*yield*/, import("react-icons/ci")];
                case 386:
                    CiPlug1 = (_b.sent()).CiPlug1;
                    return [2 /*return*/, CiPlug1];
                case 387: return [4 /*yield*/, import("react-icons/ci")];
                case 388:
                    CiPower = (_b.sent()).CiPower;
                    return [2 /*return*/, CiPower];
                case 389: return [4 /*yield*/, import("react-icons/ci")];
                case 390:
                    CiRainbow = (_b.sent()).CiRainbow;
                    return [2 /*return*/, CiRainbow];
                case 391: return [4 /*yield*/, import("react-icons/ci")];
                case 392:
                    CiRead = (_b.sent()).CiRead;
                    return [2 /*return*/, CiRead];
                case 393: return [4 /*yield*/, import("react-icons/ci")];
                case 394:
                    CiReceipt = (_b.sent()).CiReceipt;
                    return [2 /*return*/, CiReceipt];
                case 395: return [4 /*yield*/, import("react-icons/ci")];
                case 396:
                    CiRedo = (_b.sent()).CiRedo;
                    return [2 /*return*/, CiRedo];
                case 397: return [4 /*yield*/, import("react-icons/ci")];
                case 398:
                    CiRepeat = (_b.sent()).CiRepeat;
                    return [2 /*return*/, CiRepeat];
                case 399: return [4 /*yield*/, import("react-icons/ci")];
                case 400:
                    CiRollingSuitcase = (_b.sent()).CiRollingSuitcase;
                    return [2 /*return*/, CiRollingSuitcase];
                case 401: return [4 /*yield*/, import("react-icons/ci")];
                case 402:
                    CiRoute = (_b.sent()).CiRoute;
                    return [2 /*return*/, CiRoute];
                case 403: return [4 /*yield*/, import("react-icons/ci")];
                case 404:
                    CiRouter = (_b.sent()).CiRouter;
                    return [2 /*return*/, CiRouter];
                case 405: return [4 /*yield*/, import("react-icons/ci")];
                case 406:
                    CiRuler = (_b.sent()).CiRuler;
                    return [2 /*return*/, CiRuler];
                case 407: return [4 /*yield*/, import("react-icons/ci")];
                case 408:
                    CiSatellite1 = (_b.sent()).CiSatellite1;
                    return [2 /*return*/, CiSatellite1];
                case 409: return [4 /*yield*/, import("react-icons/ci")];
                case 410:
                    CiSaveDown1 = (_b.sent()).CiSaveDown1;
                    return [2 /*return*/, CiSaveDown1];
                case 411: return [4 /*yield*/, import("react-icons/ci")];
                case 412:
                    CiSaveDown2 = (_b.sent()).CiSaveDown2;
                    return [2 /*return*/, CiSaveDown2];
                case 413: return [4 /*yield*/, import("react-icons/ci")];
                case 414:
                    CiSaveUp1 = (_b.sent()).CiSaveUp1;
                    return [2 /*return*/, CiSaveUp1];
                case 415: return [4 /*yield*/, import("react-icons/ci")];
                case 416:
                    CiSaveUp2 = (_b.sent()).CiSaveUp2;
                    return [2 /*return*/, CiSaveUp2];
                case 417: return [4 /*yield*/, import("react-icons/ci")];
                case 418:
                    CiSearch = (_b.sent()).CiSearch;
                    return [2 /*return*/, CiSearch];
                case 419: return [4 /*yield*/, import("react-icons/ci")];
                case 420:
                    CiServer = (_b.sent()).CiServer;
                    return [2 /*return*/, CiServer];
                case 421: return [4 /*yield*/, import("react-icons/ci")];
                case 422:
                    CiSettings = (_b.sent()).CiSettings;
                    return [2 /*return*/, CiSettings];
                case 423: return [4 /*yield*/, import("react-icons/ci")];
                case 424:
                    CiShare1 = (_b.sent()).CiShare1;
                    return [2 /*return*/, CiShare1];
                case 425: return [4 /*yield*/, import("react-icons/ci")];
                case 426:
                    CiShare2 = (_b.sent()).CiShare2;
                    return [2 /*return*/, CiShare2];
                case 427: return [4 /*yield*/, import("react-icons/ci")];
                case 428:
                    CiShirt = (_b.sent()).CiShirt;
                    return [2 /*return*/, CiShirt];
                case 429: return [4 /*yield*/, import("react-icons/ci")];
                case 430:
                    CiShop = (_b.sent()).CiShop;
                    return [2 /*return*/, CiShop];
                case 431: return [4 /*yield*/, import("react-icons/ci")];
                case 432:
                    CiShoppingBasket = (_b.sent()).CiShoppingBasket;
                    return [2 /*return*/, CiShoppingBasket];
                case 433: return [4 /*yield*/, import("react-icons/ci")];
                case 434:
                    CiShoppingCart = (_b.sent()).CiShoppingCart;
                    return [2 /*return*/, CiShoppingCart];
                case 435: return [4 /*yield*/, import("react-icons/ci")];
                case 436:
                    CiShoppingTag = (_b.sent()).CiShoppingTag;
                    return [2 /*return*/, CiShoppingTag];
                case 437: return [4 /*yield*/, import("react-icons/ci")];
                case 438:
                    CiShuffle = (_b.sent()).CiShuffle;
                    return [2 /*return*/, CiShuffle];
                case 439: return [4 /*yield*/, import("react-icons/ci")];
                case 440:
                    CiSignpostDuo1 = (_b.sent()).CiSignpostDuo1;
                    return [2 /*return*/, CiSignpostDuo1];
                case 441: return [4 /*yield*/, import("react-icons/ci")];
                case 442:
                    CiSignpostL1 = (_b.sent()).CiSignpostL1;
                    return [2 /*return*/, CiSignpostL1];
                case 443: return [4 /*yield*/, import("react-icons/ci")];
                case 444:
                    CiSignpostR1 = (_b.sent()).CiSignpostR1;
                    return [2 /*return*/, CiSignpostR1];
                case 445: return [4 /*yield*/, import("react-icons/ci")];
                case 446:
                    CiSliderHorizontal = (_b.sent()).CiSliderHorizontal;
                    return [2 /*return*/, CiSliderHorizontal];
                case 447: return [4 /*yield*/, import("react-icons/ci")];
                case 448:
                    CiSliderVertical = (_b.sent()).CiSliderVertical;
                    return [2 /*return*/, CiSliderVertical];
                case 449: return [4 /*yield*/, import("react-icons/ci")];
                case 450:
                    CiSpeaker = (_b.sent()).CiSpeaker;
                    return [2 /*return*/, CiSpeaker];
                case 451: return [4 /*yield*/, import("react-icons/ci")];
                case 452:
                    CiSquareAlert = (_b.sent()).CiSquareAlert;
                    return [2 /*return*/, CiSquareAlert];
                case 453: return [4 /*yield*/, import("react-icons/ci")];
                case 454:
                    CiSquareCheck = (_b.sent()).CiSquareCheck;
                    return [2 /*return*/, CiSquareCheck];
                case 455: return [4 /*yield*/, import("react-icons/ci")];
                case 456:
                    CiSquareChevDown = (_b.sent()).CiSquareChevDown;
                    return [2 /*return*/, CiSquareChevDown];
                case 457: return [4 /*yield*/, import("react-icons/ci")];
                case 458:
                    CiSquareChevLeft = (_b.sent()).CiSquareChevLeft;
                    return [2 /*return*/, CiSquareChevLeft];
                case 459: return [4 /*yield*/, import("react-icons/ci")];
                case 460:
                    CiSquareChevRight = (_b.sent()).CiSquareChevRight;
                    return [2 /*return*/, CiSquareChevRight];
                case 461: return [4 /*yield*/, import("react-icons/ci")];
                case 462:
                    CiSquareChevUp = (_b.sent()).CiSquareChevUp;
                    return [2 /*return*/, CiSquareChevUp];
                case 463: return [4 /*yield*/, import("react-icons/ci")];
                case 464:
                    CiSquareInfo = (_b.sent()).CiSquareInfo;
                    return [2 /*return*/, CiSquareInfo];
                case 465: return [4 /*yield*/, import("react-icons/ci")];
                case 466:
                    CiSquareMinus = (_b.sent()).CiSquareMinus;
                    return [2 /*return*/, CiSquareMinus];
                case 467: return [4 /*yield*/, import("react-icons/ci")];
                case 468:
                    CiSquareMore = (_b.sent()).CiSquareMore;
                    return [2 /*return*/, CiSquareMore];
                case 469: return [4 /*yield*/, import("react-icons/ci")];
                case 470:
                    CiSquarePlus = (_b.sent()).CiSquarePlus;
                    return [2 /*return*/, CiSquarePlus];
                case 471: return [4 /*yield*/, import("react-icons/ci")];
                case 472:
                    CiSquareQuestion = (_b.sent()).CiSquareQuestion;
                    return [2 /*return*/, CiSquareQuestion];
                case 473: return [4 /*yield*/, import("react-icons/ci")];
                case 474:
                    CiSquareRemove = (_b.sent()).CiSquareRemove;
                    return [2 /*return*/, CiSquareRemove];
                case 475: return [4 /*yield*/, import("react-icons/ci")];
                case 476:
                    CiStar = (_b.sent()).CiStar;
                    return [2 /*return*/, CiStar];
                case 477: return [4 /*yield*/, import("react-icons/ci")];
                case 478:
                    CiStethoscope = (_b.sent()).CiStethoscope;
                    return [2 /*return*/, CiStethoscope];
                case 479: return [4 /*yield*/, import("react-icons/ci")];
                case 480:
                    CiStickyNote = (_b.sent()).CiStickyNote;
                    return [2 /*return*/, CiStickyNote];
                case 481: return [4 /*yield*/, import("react-icons/ci")];
                case 482:
                    CiStop1 = (_b.sent()).CiStop1;
                    return [2 /*return*/, CiStop1];
                case 483: return [4 /*yield*/, import("react-icons/ci")];
                case 484:
                    CiStopSign1 = (_b.sent()).CiStopSign1;
                    return [2 /*return*/, CiStopSign1];
                case 485: return [4 /*yield*/, import("react-icons/ci")];
                case 486:
                    CiStopwatch = (_b.sent()).CiStopwatch;
                    return [2 /*return*/, CiStopwatch];
                case 487: return [4 /*yield*/, import("react-icons/ci")];
                case 488:
                    CiStreamOff = (_b.sent()).CiStreamOff;
                    return [2 /*return*/, CiStreamOff];
                case 489: return [4 /*yield*/, import("react-icons/ci")];
                case 490:
                    CiStreamOn = (_b.sent()).CiStreamOn;
                    return [2 /*return*/, CiStreamOn];
                case 491: return [4 /*yield*/, import("react-icons/ci")];
                case 492:
                    CiSun = (_b.sent()).CiSun;
                    return [2 /*return*/, CiSun];
                case 493: return [4 /*yield*/, import("react-icons/ci")];
                case 494:
                    CiTablets1 = (_b.sent()).CiTablets1;
                    return [2 /*return*/, CiTablets1];
                case 495: return [4 /*yield*/, import("react-icons/ci")];
                case 496:
                    CiTempHigh = (_b.sent()).CiTempHigh;
                    return [2 /*return*/, CiTempHigh];
                case 497: return [4 /*yield*/, import("react-icons/ci")];
                case 498:
                    CiTextAlignCenter = (_b.sent()).CiTextAlignCenter;
                    return [2 /*return*/, CiTextAlignCenter];
                case 499: return [4 /*yield*/, import("react-icons/ci")];
                case 500:
                    CiTextAlignJustify = (_b.sent()).CiTextAlignJustify;
                    return [2 /*return*/, CiTextAlignJustify];
                case 501: return [4 /*yield*/, import("react-icons/ci")];
                case 502:
                    CiTextAlignLeft = (_b.sent()).CiTextAlignLeft;
                    return [2 /*return*/, CiTextAlignLeft];
                case 503: return [4 /*yield*/, import("react-icons/ci")];
                case 504:
                    CiTextAlignRight = (_b.sent()).CiTextAlignRight;
                    return [2 /*return*/, CiTextAlignRight];
                case 505: return [4 /*yield*/, import("react-icons/ci")];
                case 506:
                    CiText = (_b.sent()).CiText;
                    return [2 /*return*/, CiText];
                case 507: return [4 /*yield*/, import("react-icons/ci")];
                case 508:
                    CiTimer = (_b.sent()).CiTimer;
                    return [2 /*return*/, CiTimer];
                case 509: return [4 /*yield*/, import("react-icons/ci")];
                case 510:
                    CiTrash = (_b.sent()).CiTrash;
                    return [2 /*return*/, CiTrash];
                case 511: return [4 /*yield*/, import("react-icons/ci")];
                case 512:
                    CiTrophy = (_b.sent()).CiTrophy;
                    return [2 /*return*/, CiTrophy];
                case 513: return [4 /*yield*/, import("react-icons/ci")];
                case 514:
                    CiTurnL1 = (_b.sent()).CiTurnL1;
                    return [2 /*return*/, CiTurnL1];
                case 515: return [4 /*yield*/, import("react-icons/ci")];
                case 516:
                    CiTurnR1 = (_b.sent()).CiTurnR1;
                    return [2 /*return*/, CiTurnR1];
                case 517: return [4 /*yield*/, import("react-icons/ci")];
                case 518:
                    CiTwitter = (_b.sent()).CiTwitter;
                    return [2 /*return*/, CiTwitter];
                case 519: return [4 /*yield*/, import("react-icons/ci")];
                case 520:
                    CiUmbrella = (_b.sent()).CiUmbrella;
                    return [2 /*return*/, CiUmbrella];
                case 521: return [4 /*yield*/, import("react-icons/ci")];
                case 522:
                    CiUndo = (_b.sent()).CiUndo;
                    return [2 /*return*/, CiUndo];
                case 523: return [4 /*yield*/, import("react-icons/ci")];
                case 524:
                    CiUnlock = (_b.sent()).CiUnlock;
                    return [2 /*return*/, CiUnlock];
                case 525: return [4 /*yield*/, import("react-icons/ci")];
                case 526:
                    CiUnread = (_b.sent()).CiUnread;
                    return [2 /*return*/, CiUnread];
                case 527: return [4 /*yield*/, import("react-icons/ci")];
                case 528:
                    CiUsb = (_b.sent()).CiUsb;
                    return [2 /*return*/, CiUsb];
                case 529: return [4 /*yield*/, import("react-icons/ci")];
                case 530:
                    CiUser = (_b.sent()).CiUser;
                    return [2 /*return*/, CiUser];
                case 531: return [4 /*yield*/, import("react-icons/ci")];
                case 532:
                    CiVault = (_b.sent()).CiVault;
                    return [2 /*return*/, CiVault];
                case 533: return [4 /*yield*/, import("react-icons/ci")];
                case 534:
                    CiVial = (_b.sent()).CiVial;
                    return [2 /*return*/, CiVial];
                case 535: return [4 /*yield*/, import("react-icons/ci")];
                case 536:
                    CiVideoOff = (_b.sent()).CiVideoOff;
                    return [2 /*return*/, CiVideoOff];
                case 537: return [4 /*yield*/, import("react-icons/ci")];
                case 538:
                    CiVideoOn = (_b.sent()).CiVideoOn;
                    return [2 /*return*/, CiVideoOn];
                case 539: return [4 /*yield*/, import("react-icons/ci")];
                case 540:
                    CiViewBoard = (_b.sent()).CiViewBoard;
                    return [2 /*return*/, CiViewBoard];
                case 541: return [4 /*yield*/, import("react-icons/ci")];
                case 542:
                    CiViewColumn = (_b.sent()).CiViewColumn;
                    return [2 /*return*/, CiViewColumn];
                case 543: return [4 /*yield*/, import("react-icons/ci")];
                case 544:
                    CiViewList = (_b.sent()).CiViewList;
                    return [2 /*return*/, CiViewList];
                case 545: return [4 /*yield*/, import("react-icons/ci")];
                case 546:
                    CiViewTable = (_b.sent()).CiViewTable;
                    return [2 /*return*/, CiViewTable];
                case 547: return [4 /*yield*/, import("react-icons/ci")];
                case 548:
                    CiViewTimeline = (_b.sent()).CiViewTimeline;
                    return [2 /*return*/, CiViewTimeline];
                case 549: return [4 /*yield*/, import("react-icons/ci")];
                case 550:
                    CiVirus = (_b.sent()).CiVirus;
                    return [2 /*return*/, CiVirus];
                case 551: return [4 /*yield*/, import("react-icons/ci")];
                case 552:
                    CiVoicemail = (_b.sent()).CiVoicemail;
                    return [2 /*return*/, CiVoicemail];
                case 553: return [4 /*yield*/, import("react-icons/ci")];
                case 554:
                    CiVolumeHigh = (_b.sent()).CiVolumeHigh;
                    return [2 /*return*/, CiVolumeHigh];
                case 555: return [4 /*yield*/, import("react-icons/ci")];
                case 556:
                    CiVolumeMute = (_b.sent()).CiVolumeMute;
                    return [2 /*return*/, CiVolumeMute];
                case 557: return [4 /*yield*/, import("react-icons/ci")];
                case 558:
                    CiVolume = (_b.sent()).CiVolume;
                    return [2 /*return*/, CiVolume];
                case 559: return [4 /*yield*/, import("react-icons/ci")];
                case 560:
                    CiWallet = (_b.sent()).CiWallet;
                    return [2 /*return*/, CiWallet];
                case 561: return [4 /*yield*/, import("react-icons/ci")];
                case 562:
                    CiWarning = (_b.sent()).CiWarning;
                    return [2 /*return*/, CiWarning];
                case 563: return [4 /*yield*/, import("react-icons/ci")];
                case 564:
                    CiWavePulse1 = (_b.sent()).CiWavePulse1;
                    return [2 /*return*/, CiWavePulse1];
                case 565: return [4 /*yield*/, import("react-icons/ci")];
                case 566:
                    CiWheat = (_b.sent()).CiWheat;
                    return [2 /*return*/, CiWheat];
                case 567: return [4 /*yield*/, import("react-icons/ci")];
                case 568:
                    CiWifiOff = (_b.sent()).CiWifiOff;
                    return [2 /*return*/, CiWifiOff];
                case 569: return [4 /*yield*/, import("react-icons/ci")];
                case 570:
                    CiWifiOn = (_b.sent()).CiWifiOn;
                    return [2 /*return*/, CiWifiOn];
                case 571: return [4 /*yield*/, import("react-icons/ci")];
                case 572:
                    CiYoutube = (_b.sent()).CiYoutube;
                    return [2 /*return*/, CiYoutube];
                case 573: return [4 /*yield*/, import("react-icons/ci")];
                case 574:
                    CiZoomIn = (_b.sent()).CiZoomIn;
                    return [2 /*return*/, CiZoomIn];
                case 575: return [4 /*yield*/, import("react-icons/ci")];
                case 576:
                    CiZoomOut = (_b.sent()).CiZoomOut;
                    return [2 /*return*/, CiZoomOut];
                case 577: return [2 /*return*/];
            }
        });
    });
}
