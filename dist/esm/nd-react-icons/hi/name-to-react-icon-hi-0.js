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
export function nameToReactIcon_hi_0(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, HiAcademicCap, HiAdjustments, HiAnnotation, HiArchive, HiArrowCircleDown, HiArrowCircleLeft, HiArrowCircleRight, HiArrowCircleUp, HiArrowDown, HiArrowLeft, HiArrowNarrowDown, HiArrowNarrowLeft, HiArrowNarrowRight, HiArrowNarrowUp, HiArrowRight, HiArrowSmDown, HiArrowSmLeft, HiArrowSmRight, HiArrowSmUp, HiArrowUp, HiArrowsExpand, HiAtSymbol, HiBackspace, HiBadgeCheck, HiBan, HiBeaker, HiBell, HiBookOpen, HiBookmarkAlt, HiBookmark, HiBriefcase, HiCake, HiCalculator, HiCalendar, HiCamera, HiCash, HiChartBar, HiChartPie, HiChartSquareBar, HiChatAlt2, HiChatAlt, HiChat, HiCheckCircle, HiCheck, HiChevronDoubleDown, HiChevronDoubleLeft, HiChevronDoubleRight, HiChevronDoubleUp, HiChevronDown, HiChevronLeft, HiChevronRight, HiChevronUp, HiChip, HiClipboardCheck, HiClipboardCopy, HiClipboardList, HiClipboard, HiClock, HiCloudDownload, HiCloudUpload, HiCloud, HiCode, HiCog, HiCollection, HiColorSwatch, HiCreditCard, HiCubeTransparent, HiCube, HiCurrencyBangladeshi, HiCurrencyDollar, HiCurrencyEuro, HiCurrencyPound, HiCurrencyRupee, HiCurrencyYen, HiCursorClick, HiDatabase, HiDesktopComputer, HiDeviceMobile, HiDeviceTablet, HiDocumentAdd, HiDocumentDownload, HiDocumentDuplicate, HiDocumentRemove, HiDocumentReport, HiDocumentSearch, HiDocumentText, HiDocument, HiDotsCircleHorizontal, HiDotsHorizontal, HiDotsVertical, HiDownload, HiDuplicate, HiEmojiHappy, HiEmojiSad, HiExclamationCircle, HiExclamation, HiExternalLink, HiEyeOff, HiEye, HiFastForward, HiFilm, HiFilter, HiFingerPrint, HiFire, HiFlag, HiFolderAdd, HiFolderDownload, HiFolderOpen, HiFolderRemove, HiFolder, HiGift, HiGlobeAlt, HiGlobe, HiHand, HiHashtag, HiHeart, HiHome, HiIdentification, HiInboxIn, HiInbox, HiInformationCircle, HiKey, HiLibrary, HiLightBulb, HiLightningBolt, HiLink, HiLocationMarker, HiLockClosed, HiLockOpen, HiLogin, HiLogout, HiMailOpen, HiMail, HiMap, HiMenuAlt1, HiMenuAlt2, HiMenuAlt3, HiMenuAlt4, HiMenu, HiMicrophone, HiMinusCircle, HiMinusSm, HiMinus, HiMoon, HiMusicNote, HiNewspaper, HiOfficeBuilding, HiPaperAirplane, HiPaperClip, HiPause, HiPencilAlt, HiPencil, HiPhoneIncoming, HiPhoneMissedCall, HiPhoneOutgoing, HiPhone, HiPhotograph, HiPlay, HiPlusCircle, HiPlusSm, HiPlus, HiPresentationChartBar, HiPresentationChartLine, HiPrinter, HiPuzzle, HiQrcode, HiQuestionMarkCircle, HiReceiptRefund, HiReceiptTax, HiRefresh, HiReply, HiRewind, HiRss, HiSaveAs, HiSave, HiScale, HiScissors, HiSearchCircle, HiSearch, HiSelector, HiServer, HiShare, HiShieldCheck, HiShieldExclamation, HiShoppingBag, HiShoppingCart, HiSortAscending, HiSortDescending, HiSparkles, HiSpeakerphone, HiStar, HiStatusOffline, HiStatusOnline, HiStop, HiSun, HiSupport, HiSwitchHorizontal, HiSwitchVertical, HiTable, HiTag, HiTemplate, HiTerminal, HiThumbDown, HiThumbUp, HiTicket, HiTranslate, HiTrash, HiTrendingDown, HiTrendingUp, HiTruck, HiUpload, HiUserAdd, HiUserCircle, HiUserGroup, HiUserRemove, HiUser, HiUsers, HiVariable, HiVideoCamera, HiViewBoards, HiViewGridAdd, HiViewGrid, HiViewList, HiVolumeOff, HiVolumeUp, HiWifi, HiXCircle, HiX, HiZoomIn, HiZoomOut, HiOutlineAcademicCap, HiOutlineAdjustments, HiOutlineAnnotation, HiOutlineArchive, HiOutlineArrowCircleDown, HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight, HiOutlineArrowCircleUp, HiOutlineArrowDown, HiOutlineArrowLeft, HiOutlineArrowNarrowDown, HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight, HiOutlineArrowNarrowUp, HiOutlineArrowRight, HiOutlineArrowSmDown, HiOutlineArrowSmLeft, HiOutlineArrowSmRight, HiOutlineArrowSmUp, HiOutlineArrowUp, HiOutlineArrowsExpand, HiOutlineAtSymbol, HiOutlineBackspace, HiOutlineBadgeCheck, HiOutlineBan, HiOutlineBeaker, HiOutlineBell, HiOutlineBookOpen, HiOutlineBookmarkAlt, HiOutlineBookmark, HiOutlineBriefcase, HiOutlineCake, HiOutlineCalculator, HiOutlineCalendar, HiOutlineCamera, HiOutlineCash, HiOutlineChartBar, HiOutlineChartPie, HiOutlineChartSquareBar, HiOutlineChatAlt2, HiOutlineChatAlt, HiOutlineChat, HiOutlineCheckCircle, HiOutlineCheck, HiOutlineChevronDoubleDown, HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight, HiOutlineChevronDoubleUp, HiOutlineChevronDown, HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineChevronUp, HiOutlineChip, HiOutlineClipboardCheck, HiOutlineClipboardCopy, HiOutlineClipboardList, HiOutlineClipboard, HiOutlineClock, HiOutlineCloudDownload, HiOutlineCloudUpload, HiOutlineCloud, HiOutlineCode, HiOutlineCog, HiOutlineCollection, HiOutlineColorSwatch, HiOutlineCreditCard, HiOutlineCubeTransparent, HiOutlineCube, HiOutlineCurrencyBangladeshi, HiOutlineCurrencyDollar, HiOutlineCurrencyEuro, HiOutlineCurrencyPound, HiOutlineCurrencyRupee, HiOutlineCurrencyYen, HiOutlineCursorClick, HiOutlineDatabase, HiOutlineDesktopComputer, HiOutlineDeviceMobile, HiOutlineDeviceTablet, HiOutlineDocumentAdd, HiOutlineDocumentDownload, HiOutlineDocumentDuplicate, HiOutlineDocumentRemove, HiOutlineDocumentReport, HiOutlineDocumentSearch, HiOutlineDocumentText, HiOutlineDocument, HiOutlineDotsCircleHorizontal, HiOutlineDotsHorizontal, HiOutlineDotsVertical, HiOutlineDownload, HiOutlineDuplicate, HiOutlineEmojiHappy, HiOutlineEmojiSad, HiOutlineExclamationCircle, HiOutlineExclamation, HiOutlineExternalLink, HiOutlineEyeOff, HiOutlineEye, HiOutlineFastForward, HiOutlineFilm, HiOutlineFilter, HiOutlineFingerPrint, HiOutlineFire, HiOutlineFlag, HiOutlineFolderAdd, HiOutlineFolderDownload, HiOutlineFolderOpen, HiOutlineFolderRemove, HiOutlineFolder, HiOutlineGift, HiOutlineGlobeAlt, HiOutlineGlobe, HiOutlineHand, HiOutlineHashtag, HiOutlineHeart, HiOutlineHome, HiOutlineIdentification, HiOutlineInboxIn, HiOutlineInbox, HiOutlineInformationCircle, HiOutlineKey, HiOutlineLibrary, HiOutlineLightBulb, HiOutlineLightningBolt, HiOutlineLink, HiOutlineLocationMarker, HiOutlineLockClosed, HiOutlineLockOpen, HiOutlineLogin, HiOutlineLogout, HiOutlineMailOpen, HiOutlineMail, HiOutlineMap, HiOutlineMenuAlt1, HiOutlineMenuAlt2, HiOutlineMenuAlt3, HiOutlineMenuAlt4, HiOutlineMenu, HiOutlineMicrophone, HiOutlineMinusCircle, HiOutlineMinusSm, HiOutlineMinus, HiOutlineMoon, HiOutlineMusicNote, HiOutlineNewspaper, HiOutlineOfficeBuilding, HiOutlinePaperAirplane, HiOutlinePaperClip, HiOutlinePause, HiOutlinePencilAlt, HiOutlinePencil, HiOutlinePhoneIncoming, HiOutlinePhoneMissedCall, HiOutlinePhoneOutgoing, HiOutlinePhone, HiOutlinePhotograph, HiOutlinePlay, HiOutlinePlusCircle, HiOutlinePlusSm, HiOutlinePlus, HiOutlinePresentationChartBar, HiOutlinePresentationChartLine, HiOutlinePrinter, HiOutlinePuzzle, HiOutlineQrcode, HiOutlineQuestionMarkCircle, HiOutlineReceiptRefund, HiOutlineReceiptTax, HiOutlineRefresh, HiOutlineReply, HiOutlineRewind, HiOutlineRss, HiOutlineSaveAs, HiOutlineSave, HiOutlineScale, HiOutlineScissors, HiOutlineSearchCircle, HiOutlineSearch, HiOutlineSelector, HiOutlineServer, HiOutlineShare, HiOutlineShieldCheck, HiOutlineShieldExclamation, HiOutlineShoppingBag, HiOutlineShoppingCart, HiOutlineSortAscending, HiOutlineSortDescending, HiOutlineSparkles, HiOutlineSpeakerphone, HiOutlineStar, HiOutlineStatusOffline, HiOutlineStatusOnline, HiOutlineStop, HiOutlineSun, HiOutlineSupport, HiOutlineSwitchHorizontal, HiOutlineSwitchVertical, HiOutlineTable, HiOutlineTag, HiOutlineTemplate, HiOutlineTerminal, HiOutlineThumbDown, HiOutlineThumbUp, HiOutlineTicket, HiOutlineTranslate, HiOutlineTrash, HiOutlineTrendingDown, HiOutlineTrendingUp, HiOutlineTruck, HiOutlineUpload, HiOutlineUserAdd, HiOutlineUserCircle, HiOutlineUserGroup, HiOutlineUserRemove, HiOutlineUser, HiOutlineUsers, HiOutlineVariable, HiOutlineVideoCamera, HiOutlineViewBoards, HiOutlineViewGridAdd, HiOutlineViewGrid, HiOutlineViewList, HiOutlineVolumeOff, HiOutlineVolumeUp, HiOutlineWifi, HiOutlineXCircle, HiOutlineX, HiOutlineZoomIn, HiOutlineZoomOut;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "hi:HiAcademicCap": return [3 /*break*/, 1];
                        case "hi:HiAdjustments": return [3 /*break*/, 3];
                        case "hi:HiAnnotation": return [3 /*break*/, 5];
                        case "hi:HiArchive": return [3 /*break*/, 7];
                        case "hi:HiArrowCircleDown": return [3 /*break*/, 9];
                        case "hi:HiArrowCircleLeft": return [3 /*break*/, 11];
                        case "hi:HiArrowCircleRight": return [3 /*break*/, 13];
                        case "hi:HiArrowCircleUp": return [3 /*break*/, 15];
                        case "hi:HiArrowDown": return [3 /*break*/, 17];
                        case "hi:HiArrowLeft": return [3 /*break*/, 19];
                        case "hi:HiArrowNarrowDown": return [3 /*break*/, 21];
                        case "hi:HiArrowNarrowLeft": return [3 /*break*/, 23];
                        case "hi:HiArrowNarrowRight": return [3 /*break*/, 25];
                        case "hi:HiArrowNarrowUp": return [3 /*break*/, 27];
                        case "hi:HiArrowRight": return [3 /*break*/, 29];
                        case "hi:HiArrowSmDown": return [3 /*break*/, 31];
                        case "hi:HiArrowSmLeft": return [3 /*break*/, 33];
                        case "hi:HiArrowSmRight": return [3 /*break*/, 35];
                        case "hi:HiArrowSmUp": return [3 /*break*/, 37];
                        case "hi:HiArrowUp": return [3 /*break*/, 39];
                        case "hi:HiArrowsExpand": return [3 /*break*/, 41];
                        case "hi:HiAtSymbol": return [3 /*break*/, 43];
                        case "hi:HiBackspace": return [3 /*break*/, 45];
                        case "hi:HiBadgeCheck": return [3 /*break*/, 47];
                        case "hi:HiBan": return [3 /*break*/, 49];
                        case "hi:HiBeaker": return [3 /*break*/, 51];
                        case "hi:HiBell": return [3 /*break*/, 53];
                        case "hi:HiBookOpen": return [3 /*break*/, 55];
                        case "hi:HiBookmarkAlt": return [3 /*break*/, 57];
                        case "hi:HiBookmark": return [3 /*break*/, 59];
                        case "hi:HiBriefcase": return [3 /*break*/, 61];
                        case "hi:HiCake": return [3 /*break*/, 63];
                        case "hi:HiCalculator": return [3 /*break*/, 65];
                        case "hi:HiCalendar": return [3 /*break*/, 67];
                        case "hi:HiCamera": return [3 /*break*/, 69];
                        case "hi:HiCash": return [3 /*break*/, 71];
                        case "hi:HiChartBar": return [3 /*break*/, 73];
                        case "hi:HiChartPie": return [3 /*break*/, 75];
                        case "hi:HiChartSquareBar": return [3 /*break*/, 77];
                        case "hi:HiChatAlt2": return [3 /*break*/, 79];
                        case "hi:HiChatAlt": return [3 /*break*/, 81];
                        case "hi:HiChat": return [3 /*break*/, 83];
                        case "hi:HiCheckCircle": return [3 /*break*/, 85];
                        case "hi:HiCheck": return [3 /*break*/, 87];
                        case "hi:HiChevronDoubleDown": return [3 /*break*/, 89];
                        case "hi:HiChevronDoubleLeft": return [3 /*break*/, 91];
                        case "hi:HiChevronDoubleRight": return [3 /*break*/, 93];
                        case "hi:HiChevronDoubleUp": return [3 /*break*/, 95];
                        case "hi:HiChevronDown": return [3 /*break*/, 97];
                        case "hi:HiChevronLeft": return [3 /*break*/, 99];
                        case "hi:HiChevronRight": return [3 /*break*/, 101];
                        case "hi:HiChevronUp": return [3 /*break*/, 103];
                        case "hi:HiChip": return [3 /*break*/, 105];
                        case "hi:HiClipboardCheck": return [3 /*break*/, 107];
                        case "hi:HiClipboardCopy": return [3 /*break*/, 109];
                        case "hi:HiClipboardList": return [3 /*break*/, 111];
                        case "hi:HiClipboard": return [3 /*break*/, 113];
                        case "hi:HiClock": return [3 /*break*/, 115];
                        case "hi:HiCloudDownload": return [3 /*break*/, 117];
                        case "hi:HiCloudUpload": return [3 /*break*/, 119];
                        case "hi:HiCloud": return [3 /*break*/, 121];
                        case "hi:HiCode": return [3 /*break*/, 123];
                        case "hi:HiCog": return [3 /*break*/, 125];
                        case "hi:HiCollection": return [3 /*break*/, 127];
                        case "hi:HiColorSwatch": return [3 /*break*/, 129];
                        case "hi:HiCreditCard": return [3 /*break*/, 131];
                        case "hi:HiCubeTransparent": return [3 /*break*/, 133];
                        case "hi:HiCube": return [3 /*break*/, 135];
                        case "hi:HiCurrencyBangladeshi": return [3 /*break*/, 137];
                        case "hi:HiCurrencyDollar": return [3 /*break*/, 139];
                        case "hi:HiCurrencyEuro": return [3 /*break*/, 141];
                        case "hi:HiCurrencyPound": return [3 /*break*/, 143];
                        case "hi:HiCurrencyRupee": return [3 /*break*/, 145];
                        case "hi:HiCurrencyYen": return [3 /*break*/, 147];
                        case "hi:HiCursorClick": return [3 /*break*/, 149];
                        case "hi:HiDatabase": return [3 /*break*/, 151];
                        case "hi:HiDesktopComputer": return [3 /*break*/, 153];
                        case "hi:HiDeviceMobile": return [3 /*break*/, 155];
                        case "hi:HiDeviceTablet": return [3 /*break*/, 157];
                        case "hi:HiDocumentAdd": return [3 /*break*/, 159];
                        case "hi:HiDocumentDownload": return [3 /*break*/, 161];
                        case "hi:HiDocumentDuplicate": return [3 /*break*/, 163];
                        case "hi:HiDocumentRemove": return [3 /*break*/, 165];
                        case "hi:HiDocumentReport": return [3 /*break*/, 167];
                        case "hi:HiDocumentSearch": return [3 /*break*/, 169];
                        case "hi:HiDocumentText": return [3 /*break*/, 171];
                        case "hi:HiDocument": return [3 /*break*/, 173];
                        case "hi:HiDotsCircleHorizontal": return [3 /*break*/, 175];
                        case "hi:HiDotsHorizontal": return [3 /*break*/, 177];
                        case "hi:HiDotsVertical": return [3 /*break*/, 179];
                        case "hi:HiDownload": return [3 /*break*/, 181];
                        case "hi:HiDuplicate": return [3 /*break*/, 183];
                        case "hi:HiEmojiHappy": return [3 /*break*/, 185];
                        case "hi:HiEmojiSad": return [3 /*break*/, 187];
                        case "hi:HiExclamationCircle": return [3 /*break*/, 189];
                        case "hi:HiExclamation": return [3 /*break*/, 191];
                        case "hi:HiExternalLink": return [3 /*break*/, 193];
                        case "hi:HiEyeOff": return [3 /*break*/, 195];
                        case "hi:HiEye": return [3 /*break*/, 197];
                        case "hi:HiFastForward": return [3 /*break*/, 199];
                        case "hi:HiFilm": return [3 /*break*/, 201];
                        case "hi:HiFilter": return [3 /*break*/, 203];
                        case "hi:HiFingerPrint": return [3 /*break*/, 205];
                        case "hi:HiFire": return [3 /*break*/, 207];
                        case "hi:HiFlag": return [3 /*break*/, 209];
                        case "hi:HiFolderAdd": return [3 /*break*/, 211];
                        case "hi:HiFolderDownload": return [3 /*break*/, 213];
                        case "hi:HiFolderOpen": return [3 /*break*/, 215];
                        case "hi:HiFolderRemove": return [3 /*break*/, 217];
                        case "hi:HiFolder": return [3 /*break*/, 219];
                        case "hi:HiGift": return [3 /*break*/, 221];
                        case "hi:HiGlobeAlt": return [3 /*break*/, 223];
                        case "hi:HiGlobe": return [3 /*break*/, 225];
                        case "hi:HiHand": return [3 /*break*/, 227];
                        case "hi:HiHashtag": return [3 /*break*/, 229];
                        case "hi:HiHeart": return [3 /*break*/, 231];
                        case "hi:HiHome": return [3 /*break*/, 233];
                        case "hi:HiIdentification": return [3 /*break*/, 235];
                        case "hi:HiInboxIn": return [3 /*break*/, 237];
                        case "hi:HiInbox": return [3 /*break*/, 239];
                        case "hi:HiInformationCircle": return [3 /*break*/, 241];
                        case "hi:HiKey": return [3 /*break*/, 243];
                        case "hi:HiLibrary": return [3 /*break*/, 245];
                        case "hi:HiLightBulb": return [3 /*break*/, 247];
                        case "hi:HiLightningBolt": return [3 /*break*/, 249];
                        case "hi:HiLink": return [3 /*break*/, 251];
                        case "hi:HiLocationMarker": return [3 /*break*/, 253];
                        case "hi:HiLockClosed": return [3 /*break*/, 255];
                        case "hi:HiLockOpen": return [3 /*break*/, 257];
                        case "hi:HiLogin": return [3 /*break*/, 259];
                        case "hi:HiLogout": return [3 /*break*/, 261];
                        case "hi:HiMailOpen": return [3 /*break*/, 263];
                        case "hi:HiMail": return [3 /*break*/, 265];
                        case "hi:HiMap": return [3 /*break*/, 267];
                        case "hi:HiMenuAlt1": return [3 /*break*/, 269];
                        case "hi:HiMenuAlt2": return [3 /*break*/, 271];
                        case "hi:HiMenuAlt3": return [3 /*break*/, 273];
                        case "hi:HiMenuAlt4": return [3 /*break*/, 275];
                        case "hi:HiMenu": return [3 /*break*/, 277];
                        case "hi:HiMicrophone": return [3 /*break*/, 279];
                        case "hi:HiMinusCircle": return [3 /*break*/, 281];
                        case "hi:HiMinusSm": return [3 /*break*/, 283];
                        case "hi:HiMinus": return [3 /*break*/, 285];
                        case "hi:HiMoon": return [3 /*break*/, 287];
                        case "hi:HiMusicNote": return [3 /*break*/, 289];
                        case "hi:HiNewspaper": return [3 /*break*/, 291];
                        case "hi:HiOfficeBuilding": return [3 /*break*/, 293];
                        case "hi:HiPaperAirplane": return [3 /*break*/, 295];
                        case "hi:HiPaperClip": return [3 /*break*/, 297];
                        case "hi:HiPause": return [3 /*break*/, 299];
                        case "hi:HiPencilAlt": return [3 /*break*/, 301];
                        case "hi:HiPencil": return [3 /*break*/, 303];
                        case "hi:HiPhoneIncoming": return [3 /*break*/, 305];
                        case "hi:HiPhoneMissedCall": return [3 /*break*/, 307];
                        case "hi:HiPhoneOutgoing": return [3 /*break*/, 309];
                        case "hi:HiPhone": return [3 /*break*/, 311];
                        case "hi:HiPhotograph": return [3 /*break*/, 313];
                        case "hi:HiPlay": return [3 /*break*/, 315];
                        case "hi:HiPlusCircle": return [3 /*break*/, 317];
                        case "hi:HiPlusSm": return [3 /*break*/, 319];
                        case "hi:HiPlus": return [3 /*break*/, 321];
                        case "hi:HiPresentationChartBar": return [3 /*break*/, 323];
                        case "hi:HiPresentationChartLine": return [3 /*break*/, 325];
                        case "hi:HiPrinter": return [3 /*break*/, 327];
                        case "hi:HiPuzzle": return [3 /*break*/, 329];
                        case "hi:HiQrcode": return [3 /*break*/, 331];
                        case "hi:HiQuestionMarkCircle": return [3 /*break*/, 333];
                        case "hi:HiReceiptRefund": return [3 /*break*/, 335];
                        case "hi:HiReceiptTax": return [3 /*break*/, 337];
                        case "hi:HiRefresh": return [3 /*break*/, 339];
                        case "hi:HiReply": return [3 /*break*/, 341];
                        case "hi:HiRewind": return [3 /*break*/, 343];
                        case "hi:HiRss": return [3 /*break*/, 345];
                        case "hi:HiSaveAs": return [3 /*break*/, 347];
                        case "hi:HiSave": return [3 /*break*/, 349];
                        case "hi:HiScale": return [3 /*break*/, 351];
                        case "hi:HiScissors": return [3 /*break*/, 353];
                        case "hi:HiSearchCircle": return [3 /*break*/, 355];
                        case "hi:HiSearch": return [3 /*break*/, 357];
                        case "hi:HiSelector": return [3 /*break*/, 359];
                        case "hi:HiServer": return [3 /*break*/, 361];
                        case "hi:HiShare": return [3 /*break*/, 363];
                        case "hi:HiShieldCheck": return [3 /*break*/, 365];
                        case "hi:HiShieldExclamation": return [3 /*break*/, 367];
                        case "hi:HiShoppingBag": return [3 /*break*/, 369];
                        case "hi:HiShoppingCart": return [3 /*break*/, 371];
                        case "hi:HiSortAscending": return [3 /*break*/, 373];
                        case "hi:HiSortDescending": return [3 /*break*/, 375];
                        case "hi:HiSparkles": return [3 /*break*/, 377];
                        case "hi:HiSpeakerphone": return [3 /*break*/, 379];
                        case "hi:HiStar": return [3 /*break*/, 381];
                        case "hi:HiStatusOffline": return [3 /*break*/, 383];
                        case "hi:HiStatusOnline": return [3 /*break*/, 385];
                        case "hi:HiStop": return [3 /*break*/, 387];
                        case "hi:HiSun": return [3 /*break*/, 389];
                        case "hi:HiSupport": return [3 /*break*/, 391];
                        case "hi:HiSwitchHorizontal": return [3 /*break*/, 393];
                        case "hi:HiSwitchVertical": return [3 /*break*/, 395];
                        case "hi:HiTable": return [3 /*break*/, 397];
                        case "hi:HiTag": return [3 /*break*/, 399];
                        case "hi:HiTemplate": return [3 /*break*/, 401];
                        case "hi:HiTerminal": return [3 /*break*/, 403];
                        case "hi:HiThumbDown": return [3 /*break*/, 405];
                        case "hi:HiThumbUp": return [3 /*break*/, 407];
                        case "hi:HiTicket": return [3 /*break*/, 409];
                        case "hi:HiTranslate": return [3 /*break*/, 411];
                        case "hi:HiTrash": return [3 /*break*/, 413];
                        case "hi:HiTrendingDown": return [3 /*break*/, 415];
                        case "hi:HiTrendingUp": return [3 /*break*/, 417];
                        case "hi:HiTruck": return [3 /*break*/, 419];
                        case "hi:HiUpload": return [3 /*break*/, 421];
                        case "hi:HiUserAdd": return [3 /*break*/, 423];
                        case "hi:HiUserCircle": return [3 /*break*/, 425];
                        case "hi:HiUserGroup": return [3 /*break*/, 427];
                        case "hi:HiUserRemove": return [3 /*break*/, 429];
                        case "hi:HiUser": return [3 /*break*/, 431];
                        case "hi:HiUsers": return [3 /*break*/, 433];
                        case "hi:HiVariable": return [3 /*break*/, 435];
                        case "hi:HiVideoCamera": return [3 /*break*/, 437];
                        case "hi:HiViewBoards": return [3 /*break*/, 439];
                        case "hi:HiViewGridAdd": return [3 /*break*/, 441];
                        case "hi:HiViewGrid": return [3 /*break*/, 443];
                        case "hi:HiViewList": return [3 /*break*/, 445];
                        case "hi:HiVolumeOff": return [3 /*break*/, 447];
                        case "hi:HiVolumeUp": return [3 /*break*/, 449];
                        case "hi:HiWifi": return [3 /*break*/, 451];
                        case "hi:HiXCircle": return [3 /*break*/, 453];
                        case "hi:HiX": return [3 /*break*/, 455];
                        case "hi:HiZoomIn": return [3 /*break*/, 457];
                        case "hi:HiZoomOut": return [3 /*break*/, 459];
                        case "hi:HiOutlineAcademicCap": return [3 /*break*/, 461];
                        case "hi:HiOutlineAdjustments": return [3 /*break*/, 463];
                        case "hi:HiOutlineAnnotation": return [3 /*break*/, 465];
                        case "hi:HiOutlineArchive": return [3 /*break*/, 467];
                        case "hi:HiOutlineArrowCircleDown": return [3 /*break*/, 469];
                        case "hi:HiOutlineArrowCircleLeft": return [3 /*break*/, 471];
                        case "hi:HiOutlineArrowCircleRight": return [3 /*break*/, 473];
                        case "hi:HiOutlineArrowCircleUp": return [3 /*break*/, 475];
                        case "hi:HiOutlineArrowDown": return [3 /*break*/, 477];
                        case "hi:HiOutlineArrowLeft": return [3 /*break*/, 479];
                        case "hi:HiOutlineArrowNarrowDown": return [3 /*break*/, 481];
                        case "hi:HiOutlineArrowNarrowLeft": return [3 /*break*/, 483];
                        case "hi:HiOutlineArrowNarrowRight": return [3 /*break*/, 485];
                        case "hi:HiOutlineArrowNarrowUp": return [3 /*break*/, 487];
                        case "hi:HiOutlineArrowRight": return [3 /*break*/, 489];
                        case "hi:HiOutlineArrowSmDown": return [3 /*break*/, 491];
                        case "hi:HiOutlineArrowSmLeft": return [3 /*break*/, 493];
                        case "hi:HiOutlineArrowSmRight": return [3 /*break*/, 495];
                        case "hi:HiOutlineArrowSmUp": return [3 /*break*/, 497];
                        case "hi:HiOutlineArrowUp": return [3 /*break*/, 499];
                        case "hi:HiOutlineArrowsExpand": return [3 /*break*/, 501];
                        case "hi:HiOutlineAtSymbol": return [3 /*break*/, 503];
                        case "hi:HiOutlineBackspace": return [3 /*break*/, 505];
                        case "hi:HiOutlineBadgeCheck": return [3 /*break*/, 507];
                        case "hi:HiOutlineBan": return [3 /*break*/, 509];
                        case "hi:HiOutlineBeaker": return [3 /*break*/, 511];
                        case "hi:HiOutlineBell": return [3 /*break*/, 513];
                        case "hi:HiOutlineBookOpen": return [3 /*break*/, 515];
                        case "hi:HiOutlineBookmarkAlt": return [3 /*break*/, 517];
                        case "hi:HiOutlineBookmark": return [3 /*break*/, 519];
                        case "hi:HiOutlineBriefcase": return [3 /*break*/, 521];
                        case "hi:HiOutlineCake": return [3 /*break*/, 523];
                        case "hi:HiOutlineCalculator": return [3 /*break*/, 525];
                        case "hi:HiOutlineCalendar": return [3 /*break*/, 527];
                        case "hi:HiOutlineCamera": return [3 /*break*/, 529];
                        case "hi:HiOutlineCash": return [3 /*break*/, 531];
                        case "hi:HiOutlineChartBar": return [3 /*break*/, 533];
                        case "hi:HiOutlineChartPie": return [3 /*break*/, 535];
                        case "hi:HiOutlineChartSquareBar": return [3 /*break*/, 537];
                        case "hi:HiOutlineChatAlt2": return [3 /*break*/, 539];
                        case "hi:HiOutlineChatAlt": return [3 /*break*/, 541];
                        case "hi:HiOutlineChat": return [3 /*break*/, 543];
                        case "hi:HiOutlineCheckCircle": return [3 /*break*/, 545];
                        case "hi:HiOutlineCheck": return [3 /*break*/, 547];
                        case "hi:HiOutlineChevronDoubleDown": return [3 /*break*/, 549];
                        case "hi:HiOutlineChevronDoubleLeft": return [3 /*break*/, 551];
                        case "hi:HiOutlineChevronDoubleRight": return [3 /*break*/, 553];
                        case "hi:HiOutlineChevronDoubleUp": return [3 /*break*/, 555];
                        case "hi:HiOutlineChevronDown": return [3 /*break*/, 557];
                        case "hi:HiOutlineChevronLeft": return [3 /*break*/, 559];
                        case "hi:HiOutlineChevronRight": return [3 /*break*/, 561];
                        case "hi:HiOutlineChevronUp": return [3 /*break*/, 563];
                        case "hi:HiOutlineChip": return [3 /*break*/, 565];
                        case "hi:HiOutlineClipboardCheck": return [3 /*break*/, 567];
                        case "hi:HiOutlineClipboardCopy": return [3 /*break*/, 569];
                        case "hi:HiOutlineClipboardList": return [3 /*break*/, 571];
                        case "hi:HiOutlineClipboard": return [3 /*break*/, 573];
                        case "hi:HiOutlineClock": return [3 /*break*/, 575];
                        case "hi:HiOutlineCloudDownload": return [3 /*break*/, 577];
                        case "hi:HiOutlineCloudUpload": return [3 /*break*/, 579];
                        case "hi:HiOutlineCloud": return [3 /*break*/, 581];
                        case "hi:HiOutlineCode": return [3 /*break*/, 583];
                        case "hi:HiOutlineCog": return [3 /*break*/, 585];
                        case "hi:HiOutlineCollection": return [3 /*break*/, 587];
                        case "hi:HiOutlineColorSwatch": return [3 /*break*/, 589];
                        case "hi:HiOutlineCreditCard": return [3 /*break*/, 591];
                        case "hi:HiOutlineCubeTransparent": return [3 /*break*/, 593];
                        case "hi:HiOutlineCube": return [3 /*break*/, 595];
                        case "hi:HiOutlineCurrencyBangladeshi": return [3 /*break*/, 597];
                        case "hi:HiOutlineCurrencyDollar": return [3 /*break*/, 599];
                        case "hi:HiOutlineCurrencyEuro": return [3 /*break*/, 601];
                        case "hi:HiOutlineCurrencyPound": return [3 /*break*/, 603];
                        case "hi:HiOutlineCurrencyRupee": return [3 /*break*/, 605];
                        case "hi:HiOutlineCurrencyYen": return [3 /*break*/, 607];
                        case "hi:HiOutlineCursorClick": return [3 /*break*/, 609];
                        case "hi:HiOutlineDatabase": return [3 /*break*/, 611];
                        case "hi:HiOutlineDesktopComputer": return [3 /*break*/, 613];
                        case "hi:HiOutlineDeviceMobile": return [3 /*break*/, 615];
                        case "hi:HiOutlineDeviceTablet": return [3 /*break*/, 617];
                        case "hi:HiOutlineDocumentAdd": return [3 /*break*/, 619];
                        case "hi:HiOutlineDocumentDownload": return [3 /*break*/, 621];
                        case "hi:HiOutlineDocumentDuplicate": return [3 /*break*/, 623];
                        case "hi:HiOutlineDocumentRemove": return [3 /*break*/, 625];
                        case "hi:HiOutlineDocumentReport": return [3 /*break*/, 627];
                        case "hi:HiOutlineDocumentSearch": return [3 /*break*/, 629];
                        case "hi:HiOutlineDocumentText": return [3 /*break*/, 631];
                        case "hi:HiOutlineDocument": return [3 /*break*/, 633];
                        case "hi:HiOutlineDotsCircleHorizontal": return [3 /*break*/, 635];
                        case "hi:HiOutlineDotsHorizontal": return [3 /*break*/, 637];
                        case "hi:HiOutlineDotsVertical": return [3 /*break*/, 639];
                        case "hi:HiOutlineDownload": return [3 /*break*/, 641];
                        case "hi:HiOutlineDuplicate": return [3 /*break*/, 643];
                        case "hi:HiOutlineEmojiHappy": return [3 /*break*/, 645];
                        case "hi:HiOutlineEmojiSad": return [3 /*break*/, 647];
                        case "hi:HiOutlineExclamationCircle": return [3 /*break*/, 649];
                        case "hi:HiOutlineExclamation": return [3 /*break*/, 651];
                        case "hi:HiOutlineExternalLink": return [3 /*break*/, 653];
                        case "hi:HiOutlineEyeOff": return [3 /*break*/, 655];
                        case "hi:HiOutlineEye": return [3 /*break*/, 657];
                        case "hi:HiOutlineFastForward": return [3 /*break*/, 659];
                        case "hi:HiOutlineFilm": return [3 /*break*/, 661];
                        case "hi:HiOutlineFilter": return [3 /*break*/, 663];
                        case "hi:HiOutlineFingerPrint": return [3 /*break*/, 665];
                        case "hi:HiOutlineFire": return [3 /*break*/, 667];
                        case "hi:HiOutlineFlag": return [3 /*break*/, 669];
                        case "hi:HiOutlineFolderAdd": return [3 /*break*/, 671];
                        case "hi:HiOutlineFolderDownload": return [3 /*break*/, 673];
                        case "hi:HiOutlineFolderOpen": return [3 /*break*/, 675];
                        case "hi:HiOutlineFolderRemove": return [3 /*break*/, 677];
                        case "hi:HiOutlineFolder": return [3 /*break*/, 679];
                        case "hi:HiOutlineGift": return [3 /*break*/, 681];
                        case "hi:HiOutlineGlobeAlt": return [3 /*break*/, 683];
                        case "hi:HiOutlineGlobe": return [3 /*break*/, 685];
                        case "hi:HiOutlineHand": return [3 /*break*/, 687];
                        case "hi:HiOutlineHashtag": return [3 /*break*/, 689];
                        case "hi:HiOutlineHeart": return [3 /*break*/, 691];
                        case "hi:HiOutlineHome": return [3 /*break*/, 693];
                        case "hi:HiOutlineIdentification": return [3 /*break*/, 695];
                        case "hi:HiOutlineInboxIn": return [3 /*break*/, 697];
                        case "hi:HiOutlineInbox": return [3 /*break*/, 699];
                        case "hi:HiOutlineInformationCircle": return [3 /*break*/, 701];
                        case "hi:HiOutlineKey": return [3 /*break*/, 703];
                        case "hi:HiOutlineLibrary": return [3 /*break*/, 705];
                        case "hi:HiOutlineLightBulb": return [3 /*break*/, 707];
                        case "hi:HiOutlineLightningBolt": return [3 /*break*/, 709];
                        case "hi:HiOutlineLink": return [3 /*break*/, 711];
                        case "hi:HiOutlineLocationMarker": return [3 /*break*/, 713];
                        case "hi:HiOutlineLockClosed": return [3 /*break*/, 715];
                        case "hi:HiOutlineLockOpen": return [3 /*break*/, 717];
                        case "hi:HiOutlineLogin": return [3 /*break*/, 719];
                        case "hi:HiOutlineLogout": return [3 /*break*/, 721];
                        case "hi:HiOutlineMailOpen": return [3 /*break*/, 723];
                        case "hi:HiOutlineMail": return [3 /*break*/, 725];
                        case "hi:HiOutlineMap": return [3 /*break*/, 727];
                        case "hi:HiOutlineMenuAlt1": return [3 /*break*/, 729];
                        case "hi:HiOutlineMenuAlt2": return [3 /*break*/, 731];
                        case "hi:HiOutlineMenuAlt3": return [3 /*break*/, 733];
                        case "hi:HiOutlineMenuAlt4": return [3 /*break*/, 735];
                        case "hi:HiOutlineMenu": return [3 /*break*/, 737];
                        case "hi:HiOutlineMicrophone": return [3 /*break*/, 739];
                        case "hi:HiOutlineMinusCircle": return [3 /*break*/, 741];
                        case "hi:HiOutlineMinusSm": return [3 /*break*/, 743];
                        case "hi:HiOutlineMinus": return [3 /*break*/, 745];
                        case "hi:HiOutlineMoon": return [3 /*break*/, 747];
                        case "hi:HiOutlineMusicNote": return [3 /*break*/, 749];
                        case "hi:HiOutlineNewspaper": return [3 /*break*/, 751];
                        case "hi:HiOutlineOfficeBuilding": return [3 /*break*/, 753];
                        case "hi:HiOutlinePaperAirplane": return [3 /*break*/, 755];
                        case "hi:HiOutlinePaperClip": return [3 /*break*/, 757];
                        case "hi:HiOutlinePause": return [3 /*break*/, 759];
                        case "hi:HiOutlinePencilAlt": return [3 /*break*/, 761];
                        case "hi:HiOutlinePencil": return [3 /*break*/, 763];
                        case "hi:HiOutlinePhoneIncoming": return [3 /*break*/, 765];
                        case "hi:HiOutlinePhoneMissedCall": return [3 /*break*/, 767];
                        case "hi:HiOutlinePhoneOutgoing": return [3 /*break*/, 769];
                        case "hi:HiOutlinePhone": return [3 /*break*/, 771];
                        case "hi:HiOutlinePhotograph": return [3 /*break*/, 773];
                        case "hi:HiOutlinePlay": return [3 /*break*/, 775];
                        case "hi:HiOutlinePlusCircle": return [3 /*break*/, 777];
                        case "hi:HiOutlinePlusSm": return [3 /*break*/, 779];
                        case "hi:HiOutlinePlus": return [3 /*break*/, 781];
                        case "hi:HiOutlinePresentationChartBar": return [3 /*break*/, 783];
                        case "hi:HiOutlinePresentationChartLine": return [3 /*break*/, 785];
                        case "hi:HiOutlinePrinter": return [3 /*break*/, 787];
                        case "hi:HiOutlinePuzzle": return [3 /*break*/, 789];
                        case "hi:HiOutlineQrcode": return [3 /*break*/, 791];
                        case "hi:HiOutlineQuestionMarkCircle": return [3 /*break*/, 793];
                        case "hi:HiOutlineReceiptRefund": return [3 /*break*/, 795];
                        case "hi:HiOutlineReceiptTax": return [3 /*break*/, 797];
                        case "hi:HiOutlineRefresh": return [3 /*break*/, 799];
                        case "hi:HiOutlineReply": return [3 /*break*/, 801];
                        case "hi:HiOutlineRewind": return [3 /*break*/, 803];
                        case "hi:HiOutlineRss": return [3 /*break*/, 805];
                        case "hi:HiOutlineSaveAs": return [3 /*break*/, 807];
                        case "hi:HiOutlineSave": return [3 /*break*/, 809];
                        case "hi:HiOutlineScale": return [3 /*break*/, 811];
                        case "hi:HiOutlineScissors": return [3 /*break*/, 813];
                        case "hi:HiOutlineSearchCircle": return [3 /*break*/, 815];
                        case "hi:HiOutlineSearch": return [3 /*break*/, 817];
                        case "hi:HiOutlineSelector": return [3 /*break*/, 819];
                        case "hi:HiOutlineServer": return [3 /*break*/, 821];
                        case "hi:HiOutlineShare": return [3 /*break*/, 823];
                        case "hi:HiOutlineShieldCheck": return [3 /*break*/, 825];
                        case "hi:HiOutlineShieldExclamation": return [3 /*break*/, 827];
                        case "hi:HiOutlineShoppingBag": return [3 /*break*/, 829];
                        case "hi:HiOutlineShoppingCart": return [3 /*break*/, 831];
                        case "hi:HiOutlineSortAscending": return [3 /*break*/, 833];
                        case "hi:HiOutlineSortDescending": return [3 /*break*/, 835];
                        case "hi:HiOutlineSparkles": return [3 /*break*/, 837];
                        case "hi:HiOutlineSpeakerphone": return [3 /*break*/, 839];
                        case "hi:HiOutlineStar": return [3 /*break*/, 841];
                        case "hi:HiOutlineStatusOffline": return [3 /*break*/, 843];
                        case "hi:HiOutlineStatusOnline": return [3 /*break*/, 845];
                        case "hi:HiOutlineStop": return [3 /*break*/, 847];
                        case "hi:HiOutlineSun": return [3 /*break*/, 849];
                        case "hi:HiOutlineSupport": return [3 /*break*/, 851];
                        case "hi:HiOutlineSwitchHorizontal": return [3 /*break*/, 853];
                        case "hi:HiOutlineSwitchVertical": return [3 /*break*/, 855];
                        case "hi:HiOutlineTable": return [3 /*break*/, 857];
                        case "hi:HiOutlineTag": return [3 /*break*/, 859];
                        case "hi:HiOutlineTemplate": return [3 /*break*/, 861];
                        case "hi:HiOutlineTerminal": return [3 /*break*/, 863];
                        case "hi:HiOutlineThumbDown": return [3 /*break*/, 865];
                        case "hi:HiOutlineThumbUp": return [3 /*break*/, 867];
                        case "hi:HiOutlineTicket": return [3 /*break*/, 869];
                        case "hi:HiOutlineTranslate": return [3 /*break*/, 871];
                        case "hi:HiOutlineTrash": return [3 /*break*/, 873];
                        case "hi:HiOutlineTrendingDown": return [3 /*break*/, 875];
                        case "hi:HiOutlineTrendingUp": return [3 /*break*/, 877];
                        case "hi:HiOutlineTruck": return [3 /*break*/, 879];
                        case "hi:HiOutlineUpload": return [3 /*break*/, 881];
                        case "hi:HiOutlineUserAdd": return [3 /*break*/, 883];
                        case "hi:HiOutlineUserCircle": return [3 /*break*/, 885];
                        case "hi:HiOutlineUserGroup": return [3 /*break*/, 887];
                        case "hi:HiOutlineUserRemove": return [3 /*break*/, 889];
                        case "hi:HiOutlineUser": return [3 /*break*/, 891];
                        case "hi:HiOutlineUsers": return [3 /*break*/, 893];
                        case "hi:HiOutlineVariable": return [3 /*break*/, 895];
                        case "hi:HiOutlineVideoCamera": return [3 /*break*/, 897];
                        case "hi:HiOutlineViewBoards": return [3 /*break*/, 899];
                        case "hi:HiOutlineViewGridAdd": return [3 /*break*/, 901];
                        case "hi:HiOutlineViewGrid": return [3 /*break*/, 903];
                        case "hi:HiOutlineViewList": return [3 /*break*/, 905];
                        case "hi:HiOutlineVolumeOff": return [3 /*break*/, 907];
                        case "hi:HiOutlineVolumeUp": return [3 /*break*/, 909];
                        case "hi:HiOutlineWifi": return [3 /*break*/, 911];
                        case "hi:HiOutlineXCircle": return [3 /*break*/, 913];
                        case "hi:HiOutlineX": return [3 /*break*/, 915];
                        case "hi:HiOutlineZoomIn": return [3 /*break*/, 917];
                        case "hi:HiOutlineZoomOut": return [3 /*break*/, 919];
                    }
                    return [3 /*break*/, 921];
                case 1: return [4 /*yield*/, import("react-icons/hi")];
                case 2:
                    HiAcademicCap = (_b.sent()).HiAcademicCap;
                    return [2 /*return*/, HiAcademicCap];
                case 3: return [4 /*yield*/, import("react-icons/hi")];
                case 4:
                    HiAdjustments = (_b.sent()).HiAdjustments;
                    return [2 /*return*/, HiAdjustments];
                case 5: return [4 /*yield*/, import("react-icons/hi")];
                case 6:
                    HiAnnotation = (_b.sent()).HiAnnotation;
                    return [2 /*return*/, HiAnnotation];
                case 7: return [4 /*yield*/, import("react-icons/hi")];
                case 8:
                    HiArchive = (_b.sent()).HiArchive;
                    return [2 /*return*/, HiArchive];
                case 9: return [4 /*yield*/, import("react-icons/hi")];
                case 10:
                    HiArrowCircleDown = (_b.sent()).HiArrowCircleDown;
                    return [2 /*return*/, HiArrowCircleDown];
                case 11: return [4 /*yield*/, import("react-icons/hi")];
                case 12:
                    HiArrowCircleLeft = (_b.sent()).HiArrowCircleLeft;
                    return [2 /*return*/, HiArrowCircleLeft];
                case 13: return [4 /*yield*/, import("react-icons/hi")];
                case 14:
                    HiArrowCircleRight = (_b.sent()).HiArrowCircleRight;
                    return [2 /*return*/, HiArrowCircleRight];
                case 15: return [4 /*yield*/, import("react-icons/hi")];
                case 16:
                    HiArrowCircleUp = (_b.sent()).HiArrowCircleUp;
                    return [2 /*return*/, HiArrowCircleUp];
                case 17: return [4 /*yield*/, import("react-icons/hi")];
                case 18:
                    HiArrowDown = (_b.sent()).HiArrowDown;
                    return [2 /*return*/, HiArrowDown];
                case 19: return [4 /*yield*/, import("react-icons/hi")];
                case 20:
                    HiArrowLeft = (_b.sent()).HiArrowLeft;
                    return [2 /*return*/, HiArrowLeft];
                case 21: return [4 /*yield*/, import("react-icons/hi")];
                case 22:
                    HiArrowNarrowDown = (_b.sent()).HiArrowNarrowDown;
                    return [2 /*return*/, HiArrowNarrowDown];
                case 23: return [4 /*yield*/, import("react-icons/hi")];
                case 24:
                    HiArrowNarrowLeft = (_b.sent()).HiArrowNarrowLeft;
                    return [2 /*return*/, HiArrowNarrowLeft];
                case 25: return [4 /*yield*/, import("react-icons/hi")];
                case 26:
                    HiArrowNarrowRight = (_b.sent()).HiArrowNarrowRight;
                    return [2 /*return*/, HiArrowNarrowRight];
                case 27: return [4 /*yield*/, import("react-icons/hi")];
                case 28:
                    HiArrowNarrowUp = (_b.sent()).HiArrowNarrowUp;
                    return [2 /*return*/, HiArrowNarrowUp];
                case 29: return [4 /*yield*/, import("react-icons/hi")];
                case 30:
                    HiArrowRight = (_b.sent()).HiArrowRight;
                    return [2 /*return*/, HiArrowRight];
                case 31: return [4 /*yield*/, import("react-icons/hi")];
                case 32:
                    HiArrowSmDown = (_b.sent()).HiArrowSmDown;
                    return [2 /*return*/, HiArrowSmDown];
                case 33: return [4 /*yield*/, import("react-icons/hi")];
                case 34:
                    HiArrowSmLeft = (_b.sent()).HiArrowSmLeft;
                    return [2 /*return*/, HiArrowSmLeft];
                case 35: return [4 /*yield*/, import("react-icons/hi")];
                case 36:
                    HiArrowSmRight = (_b.sent()).HiArrowSmRight;
                    return [2 /*return*/, HiArrowSmRight];
                case 37: return [4 /*yield*/, import("react-icons/hi")];
                case 38:
                    HiArrowSmUp = (_b.sent()).HiArrowSmUp;
                    return [2 /*return*/, HiArrowSmUp];
                case 39: return [4 /*yield*/, import("react-icons/hi")];
                case 40:
                    HiArrowUp = (_b.sent()).HiArrowUp;
                    return [2 /*return*/, HiArrowUp];
                case 41: return [4 /*yield*/, import("react-icons/hi")];
                case 42:
                    HiArrowsExpand = (_b.sent()).HiArrowsExpand;
                    return [2 /*return*/, HiArrowsExpand];
                case 43: return [4 /*yield*/, import("react-icons/hi")];
                case 44:
                    HiAtSymbol = (_b.sent()).HiAtSymbol;
                    return [2 /*return*/, HiAtSymbol];
                case 45: return [4 /*yield*/, import("react-icons/hi")];
                case 46:
                    HiBackspace = (_b.sent()).HiBackspace;
                    return [2 /*return*/, HiBackspace];
                case 47: return [4 /*yield*/, import("react-icons/hi")];
                case 48:
                    HiBadgeCheck = (_b.sent()).HiBadgeCheck;
                    return [2 /*return*/, HiBadgeCheck];
                case 49: return [4 /*yield*/, import("react-icons/hi")];
                case 50:
                    HiBan = (_b.sent()).HiBan;
                    return [2 /*return*/, HiBan];
                case 51: return [4 /*yield*/, import("react-icons/hi")];
                case 52:
                    HiBeaker = (_b.sent()).HiBeaker;
                    return [2 /*return*/, HiBeaker];
                case 53: return [4 /*yield*/, import("react-icons/hi")];
                case 54:
                    HiBell = (_b.sent()).HiBell;
                    return [2 /*return*/, HiBell];
                case 55: return [4 /*yield*/, import("react-icons/hi")];
                case 56:
                    HiBookOpen = (_b.sent()).HiBookOpen;
                    return [2 /*return*/, HiBookOpen];
                case 57: return [4 /*yield*/, import("react-icons/hi")];
                case 58:
                    HiBookmarkAlt = (_b.sent()).HiBookmarkAlt;
                    return [2 /*return*/, HiBookmarkAlt];
                case 59: return [4 /*yield*/, import("react-icons/hi")];
                case 60:
                    HiBookmark = (_b.sent()).HiBookmark;
                    return [2 /*return*/, HiBookmark];
                case 61: return [4 /*yield*/, import("react-icons/hi")];
                case 62:
                    HiBriefcase = (_b.sent()).HiBriefcase;
                    return [2 /*return*/, HiBriefcase];
                case 63: return [4 /*yield*/, import("react-icons/hi")];
                case 64:
                    HiCake = (_b.sent()).HiCake;
                    return [2 /*return*/, HiCake];
                case 65: return [4 /*yield*/, import("react-icons/hi")];
                case 66:
                    HiCalculator = (_b.sent()).HiCalculator;
                    return [2 /*return*/, HiCalculator];
                case 67: return [4 /*yield*/, import("react-icons/hi")];
                case 68:
                    HiCalendar = (_b.sent()).HiCalendar;
                    return [2 /*return*/, HiCalendar];
                case 69: return [4 /*yield*/, import("react-icons/hi")];
                case 70:
                    HiCamera = (_b.sent()).HiCamera;
                    return [2 /*return*/, HiCamera];
                case 71: return [4 /*yield*/, import("react-icons/hi")];
                case 72:
                    HiCash = (_b.sent()).HiCash;
                    return [2 /*return*/, HiCash];
                case 73: return [4 /*yield*/, import("react-icons/hi")];
                case 74:
                    HiChartBar = (_b.sent()).HiChartBar;
                    return [2 /*return*/, HiChartBar];
                case 75: return [4 /*yield*/, import("react-icons/hi")];
                case 76:
                    HiChartPie = (_b.sent()).HiChartPie;
                    return [2 /*return*/, HiChartPie];
                case 77: return [4 /*yield*/, import("react-icons/hi")];
                case 78:
                    HiChartSquareBar = (_b.sent()).HiChartSquareBar;
                    return [2 /*return*/, HiChartSquareBar];
                case 79: return [4 /*yield*/, import("react-icons/hi")];
                case 80:
                    HiChatAlt2 = (_b.sent()).HiChatAlt2;
                    return [2 /*return*/, HiChatAlt2];
                case 81: return [4 /*yield*/, import("react-icons/hi")];
                case 82:
                    HiChatAlt = (_b.sent()).HiChatAlt;
                    return [2 /*return*/, HiChatAlt];
                case 83: return [4 /*yield*/, import("react-icons/hi")];
                case 84:
                    HiChat = (_b.sent()).HiChat;
                    return [2 /*return*/, HiChat];
                case 85: return [4 /*yield*/, import("react-icons/hi")];
                case 86:
                    HiCheckCircle = (_b.sent()).HiCheckCircle;
                    return [2 /*return*/, HiCheckCircle];
                case 87: return [4 /*yield*/, import("react-icons/hi")];
                case 88:
                    HiCheck = (_b.sent()).HiCheck;
                    return [2 /*return*/, HiCheck];
                case 89: return [4 /*yield*/, import("react-icons/hi")];
                case 90:
                    HiChevronDoubleDown = (_b.sent()).HiChevronDoubleDown;
                    return [2 /*return*/, HiChevronDoubleDown];
                case 91: return [4 /*yield*/, import("react-icons/hi")];
                case 92:
                    HiChevronDoubleLeft = (_b.sent()).HiChevronDoubleLeft;
                    return [2 /*return*/, HiChevronDoubleLeft];
                case 93: return [4 /*yield*/, import("react-icons/hi")];
                case 94:
                    HiChevronDoubleRight = (_b.sent()).HiChevronDoubleRight;
                    return [2 /*return*/, HiChevronDoubleRight];
                case 95: return [4 /*yield*/, import("react-icons/hi")];
                case 96:
                    HiChevronDoubleUp = (_b.sent()).HiChevronDoubleUp;
                    return [2 /*return*/, HiChevronDoubleUp];
                case 97: return [4 /*yield*/, import("react-icons/hi")];
                case 98:
                    HiChevronDown = (_b.sent()).HiChevronDown;
                    return [2 /*return*/, HiChevronDown];
                case 99: return [4 /*yield*/, import("react-icons/hi")];
                case 100:
                    HiChevronLeft = (_b.sent()).HiChevronLeft;
                    return [2 /*return*/, HiChevronLeft];
                case 101: return [4 /*yield*/, import("react-icons/hi")];
                case 102:
                    HiChevronRight = (_b.sent()).HiChevronRight;
                    return [2 /*return*/, HiChevronRight];
                case 103: return [4 /*yield*/, import("react-icons/hi")];
                case 104:
                    HiChevronUp = (_b.sent()).HiChevronUp;
                    return [2 /*return*/, HiChevronUp];
                case 105: return [4 /*yield*/, import("react-icons/hi")];
                case 106:
                    HiChip = (_b.sent()).HiChip;
                    return [2 /*return*/, HiChip];
                case 107: return [4 /*yield*/, import("react-icons/hi")];
                case 108:
                    HiClipboardCheck = (_b.sent()).HiClipboardCheck;
                    return [2 /*return*/, HiClipboardCheck];
                case 109: return [4 /*yield*/, import("react-icons/hi")];
                case 110:
                    HiClipboardCopy = (_b.sent()).HiClipboardCopy;
                    return [2 /*return*/, HiClipboardCopy];
                case 111: return [4 /*yield*/, import("react-icons/hi")];
                case 112:
                    HiClipboardList = (_b.sent()).HiClipboardList;
                    return [2 /*return*/, HiClipboardList];
                case 113: return [4 /*yield*/, import("react-icons/hi")];
                case 114:
                    HiClipboard = (_b.sent()).HiClipboard;
                    return [2 /*return*/, HiClipboard];
                case 115: return [4 /*yield*/, import("react-icons/hi")];
                case 116:
                    HiClock = (_b.sent()).HiClock;
                    return [2 /*return*/, HiClock];
                case 117: return [4 /*yield*/, import("react-icons/hi")];
                case 118:
                    HiCloudDownload = (_b.sent()).HiCloudDownload;
                    return [2 /*return*/, HiCloudDownload];
                case 119: return [4 /*yield*/, import("react-icons/hi")];
                case 120:
                    HiCloudUpload = (_b.sent()).HiCloudUpload;
                    return [2 /*return*/, HiCloudUpload];
                case 121: return [4 /*yield*/, import("react-icons/hi")];
                case 122:
                    HiCloud = (_b.sent()).HiCloud;
                    return [2 /*return*/, HiCloud];
                case 123: return [4 /*yield*/, import("react-icons/hi")];
                case 124:
                    HiCode = (_b.sent()).HiCode;
                    return [2 /*return*/, HiCode];
                case 125: return [4 /*yield*/, import("react-icons/hi")];
                case 126:
                    HiCog = (_b.sent()).HiCog;
                    return [2 /*return*/, HiCog];
                case 127: return [4 /*yield*/, import("react-icons/hi")];
                case 128:
                    HiCollection = (_b.sent()).HiCollection;
                    return [2 /*return*/, HiCollection];
                case 129: return [4 /*yield*/, import("react-icons/hi")];
                case 130:
                    HiColorSwatch = (_b.sent()).HiColorSwatch;
                    return [2 /*return*/, HiColorSwatch];
                case 131: return [4 /*yield*/, import("react-icons/hi")];
                case 132:
                    HiCreditCard = (_b.sent()).HiCreditCard;
                    return [2 /*return*/, HiCreditCard];
                case 133: return [4 /*yield*/, import("react-icons/hi")];
                case 134:
                    HiCubeTransparent = (_b.sent()).HiCubeTransparent;
                    return [2 /*return*/, HiCubeTransparent];
                case 135: return [4 /*yield*/, import("react-icons/hi")];
                case 136:
                    HiCube = (_b.sent()).HiCube;
                    return [2 /*return*/, HiCube];
                case 137: return [4 /*yield*/, import("react-icons/hi")];
                case 138:
                    HiCurrencyBangladeshi = (_b.sent()).HiCurrencyBangladeshi;
                    return [2 /*return*/, HiCurrencyBangladeshi];
                case 139: return [4 /*yield*/, import("react-icons/hi")];
                case 140:
                    HiCurrencyDollar = (_b.sent()).HiCurrencyDollar;
                    return [2 /*return*/, HiCurrencyDollar];
                case 141: return [4 /*yield*/, import("react-icons/hi")];
                case 142:
                    HiCurrencyEuro = (_b.sent()).HiCurrencyEuro;
                    return [2 /*return*/, HiCurrencyEuro];
                case 143: return [4 /*yield*/, import("react-icons/hi")];
                case 144:
                    HiCurrencyPound = (_b.sent()).HiCurrencyPound;
                    return [2 /*return*/, HiCurrencyPound];
                case 145: return [4 /*yield*/, import("react-icons/hi")];
                case 146:
                    HiCurrencyRupee = (_b.sent()).HiCurrencyRupee;
                    return [2 /*return*/, HiCurrencyRupee];
                case 147: return [4 /*yield*/, import("react-icons/hi")];
                case 148:
                    HiCurrencyYen = (_b.sent()).HiCurrencyYen;
                    return [2 /*return*/, HiCurrencyYen];
                case 149: return [4 /*yield*/, import("react-icons/hi")];
                case 150:
                    HiCursorClick = (_b.sent()).HiCursorClick;
                    return [2 /*return*/, HiCursorClick];
                case 151: return [4 /*yield*/, import("react-icons/hi")];
                case 152:
                    HiDatabase = (_b.sent()).HiDatabase;
                    return [2 /*return*/, HiDatabase];
                case 153: return [4 /*yield*/, import("react-icons/hi")];
                case 154:
                    HiDesktopComputer = (_b.sent()).HiDesktopComputer;
                    return [2 /*return*/, HiDesktopComputer];
                case 155: return [4 /*yield*/, import("react-icons/hi")];
                case 156:
                    HiDeviceMobile = (_b.sent()).HiDeviceMobile;
                    return [2 /*return*/, HiDeviceMobile];
                case 157: return [4 /*yield*/, import("react-icons/hi")];
                case 158:
                    HiDeviceTablet = (_b.sent()).HiDeviceTablet;
                    return [2 /*return*/, HiDeviceTablet];
                case 159: return [4 /*yield*/, import("react-icons/hi")];
                case 160:
                    HiDocumentAdd = (_b.sent()).HiDocumentAdd;
                    return [2 /*return*/, HiDocumentAdd];
                case 161: return [4 /*yield*/, import("react-icons/hi")];
                case 162:
                    HiDocumentDownload = (_b.sent()).HiDocumentDownload;
                    return [2 /*return*/, HiDocumentDownload];
                case 163: return [4 /*yield*/, import("react-icons/hi")];
                case 164:
                    HiDocumentDuplicate = (_b.sent()).HiDocumentDuplicate;
                    return [2 /*return*/, HiDocumentDuplicate];
                case 165: return [4 /*yield*/, import("react-icons/hi")];
                case 166:
                    HiDocumentRemove = (_b.sent()).HiDocumentRemove;
                    return [2 /*return*/, HiDocumentRemove];
                case 167: return [4 /*yield*/, import("react-icons/hi")];
                case 168:
                    HiDocumentReport = (_b.sent()).HiDocumentReport;
                    return [2 /*return*/, HiDocumentReport];
                case 169: return [4 /*yield*/, import("react-icons/hi")];
                case 170:
                    HiDocumentSearch = (_b.sent()).HiDocumentSearch;
                    return [2 /*return*/, HiDocumentSearch];
                case 171: return [4 /*yield*/, import("react-icons/hi")];
                case 172:
                    HiDocumentText = (_b.sent()).HiDocumentText;
                    return [2 /*return*/, HiDocumentText];
                case 173: return [4 /*yield*/, import("react-icons/hi")];
                case 174:
                    HiDocument = (_b.sent()).HiDocument;
                    return [2 /*return*/, HiDocument];
                case 175: return [4 /*yield*/, import("react-icons/hi")];
                case 176:
                    HiDotsCircleHorizontal = (_b.sent()).HiDotsCircleHorizontal;
                    return [2 /*return*/, HiDotsCircleHorizontal];
                case 177: return [4 /*yield*/, import("react-icons/hi")];
                case 178:
                    HiDotsHorizontal = (_b.sent()).HiDotsHorizontal;
                    return [2 /*return*/, HiDotsHorizontal];
                case 179: return [4 /*yield*/, import("react-icons/hi")];
                case 180:
                    HiDotsVertical = (_b.sent()).HiDotsVertical;
                    return [2 /*return*/, HiDotsVertical];
                case 181: return [4 /*yield*/, import("react-icons/hi")];
                case 182:
                    HiDownload = (_b.sent()).HiDownload;
                    return [2 /*return*/, HiDownload];
                case 183: return [4 /*yield*/, import("react-icons/hi")];
                case 184:
                    HiDuplicate = (_b.sent()).HiDuplicate;
                    return [2 /*return*/, HiDuplicate];
                case 185: return [4 /*yield*/, import("react-icons/hi")];
                case 186:
                    HiEmojiHappy = (_b.sent()).HiEmojiHappy;
                    return [2 /*return*/, HiEmojiHappy];
                case 187: return [4 /*yield*/, import("react-icons/hi")];
                case 188:
                    HiEmojiSad = (_b.sent()).HiEmojiSad;
                    return [2 /*return*/, HiEmojiSad];
                case 189: return [4 /*yield*/, import("react-icons/hi")];
                case 190:
                    HiExclamationCircle = (_b.sent()).HiExclamationCircle;
                    return [2 /*return*/, HiExclamationCircle];
                case 191: return [4 /*yield*/, import("react-icons/hi")];
                case 192:
                    HiExclamation = (_b.sent()).HiExclamation;
                    return [2 /*return*/, HiExclamation];
                case 193: return [4 /*yield*/, import("react-icons/hi")];
                case 194:
                    HiExternalLink = (_b.sent()).HiExternalLink;
                    return [2 /*return*/, HiExternalLink];
                case 195: return [4 /*yield*/, import("react-icons/hi")];
                case 196:
                    HiEyeOff = (_b.sent()).HiEyeOff;
                    return [2 /*return*/, HiEyeOff];
                case 197: return [4 /*yield*/, import("react-icons/hi")];
                case 198:
                    HiEye = (_b.sent()).HiEye;
                    return [2 /*return*/, HiEye];
                case 199: return [4 /*yield*/, import("react-icons/hi")];
                case 200:
                    HiFastForward = (_b.sent()).HiFastForward;
                    return [2 /*return*/, HiFastForward];
                case 201: return [4 /*yield*/, import("react-icons/hi")];
                case 202:
                    HiFilm = (_b.sent()).HiFilm;
                    return [2 /*return*/, HiFilm];
                case 203: return [4 /*yield*/, import("react-icons/hi")];
                case 204:
                    HiFilter = (_b.sent()).HiFilter;
                    return [2 /*return*/, HiFilter];
                case 205: return [4 /*yield*/, import("react-icons/hi")];
                case 206:
                    HiFingerPrint = (_b.sent()).HiFingerPrint;
                    return [2 /*return*/, HiFingerPrint];
                case 207: return [4 /*yield*/, import("react-icons/hi")];
                case 208:
                    HiFire = (_b.sent()).HiFire;
                    return [2 /*return*/, HiFire];
                case 209: return [4 /*yield*/, import("react-icons/hi")];
                case 210:
                    HiFlag = (_b.sent()).HiFlag;
                    return [2 /*return*/, HiFlag];
                case 211: return [4 /*yield*/, import("react-icons/hi")];
                case 212:
                    HiFolderAdd = (_b.sent()).HiFolderAdd;
                    return [2 /*return*/, HiFolderAdd];
                case 213: return [4 /*yield*/, import("react-icons/hi")];
                case 214:
                    HiFolderDownload = (_b.sent()).HiFolderDownload;
                    return [2 /*return*/, HiFolderDownload];
                case 215: return [4 /*yield*/, import("react-icons/hi")];
                case 216:
                    HiFolderOpen = (_b.sent()).HiFolderOpen;
                    return [2 /*return*/, HiFolderOpen];
                case 217: return [4 /*yield*/, import("react-icons/hi")];
                case 218:
                    HiFolderRemove = (_b.sent()).HiFolderRemove;
                    return [2 /*return*/, HiFolderRemove];
                case 219: return [4 /*yield*/, import("react-icons/hi")];
                case 220:
                    HiFolder = (_b.sent()).HiFolder;
                    return [2 /*return*/, HiFolder];
                case 221: return [4 /*yield*/, import("react-icons/hi")];
                case 222:
                    HiGift = (_b.sent()).HiGift;
                    return [2 /*return*/, HiGift];
                case 223: return [4 /*yield*/, import("react-icons/hi")];
                case 224:
                    HiGlobeAlt = (_b.sent()).HiGlobeAlt;
                    return [2 /*return*/, HiGlobeAlt];
                case 225: return [4 /*yield*/, import("react-icons/hi")];
                case 226:
                    HiGlobe = (_b.sent()).HiGlobe;
                    return [2 /*return*/, HiGlobe];
                case 227: return [4 /*yield*/, import("react-icons/hi")];
                case 228:
                    HiHand = (_b.sent()).HiHand;
                    return [2 /*return*/, HiHand];
                case 229: return [4 /*yield*/, import("react-icons/hi")];
                case 230:
                    HiHashtag = (_b.sent()).HiHashtag;
                    return [2 /*return*/, HiHashtag];
                case 231: return [4 /*yield*/, import("react-icons/hi")];
                case 232:
                    HiHeart = (_b.sent()).HiHeart;
                    return [2 /*return*/, HiHeart];
                case 233: return [4 /*yield*/, import("react-icons/hi")];
                case 234:
                    HiHome = (_b.sent()).HiHome;
                    return [2 /*return*/, HiHome];
                case 235: return [4 /*yield*/, import("react-icons/hi")];
                case 236:
                    HiIdentification = (_b.sent()).HiIdentification;
                    return [2 /*return*/, HiIdentification];
                case 237: return [4 /*yield*/, import("react-icons/hi")];
                case 238:
                    HiInboxIn = (_b.sent()).HiInboxIn;
                    return [2 /*return*/, HiInboxIn];
                case 239: return [4 /*yield*/, import("react-icons/hi")];
                case 240:
                    HiInbox = (_b.sent()).HiInbox;
                    return [2 /*return*/, HiInbox];
                case 241: return [4 /*yield*/, import("react-icons/hi")];
                case 242:
                    HiInformationCircle = (_b.sent()).HiInformationCircle;
                    return [2 /*return*/, HiInformationCircle];
                case 243: return [4 /*yield*/, import("react-icons/hi")];
                case 244:
                    HiKey = (_b.sent()).HiKey;
                    return [2 /*return*/, HiKey];
                case 245: return [4 /*yield*/, import("react-icons/hi")];
                case 246:
                    HiLibrary = (_b.sent()).HiLibrary;
                    return [2 /*return*/, HiLibrary];
                case 247: return [4 /*yield*/, import("react-icons/hi")];
                case 248:
                    HiLightBulb = (_b.sent()).HiLightBulb;
                    return [2 /*return*/, HiLightBulb];
                case 249: return [4 /*yield*/, import("react-icons/hi")];
                case 250:
                    HiLightningBolt = (_b.sent()).HiLightningBolt;
                    return [2 /*return*/, HiLightningBolt];
                case 251: return [4 /*yield*/, import("react-icons/hi")];
                case 252:
                    HiLink = (_b.sent()).HiLink;
                    return [2 /*return*/, HiLink];
                case 253: return [4 /*yield*/, import("react-icons/hi")];
                case 254:
                    HiLocationMarker = (_b.sent()).HiLocationMarker;
                    return [2 /*return*/, HiLocationMarker];
                case 255: return [4 /*yield*/, import("react-icons/hi")];
                case 256:
                    HiLockClosed = (_b.sent()).HiLockClosed;
                    return [2 /*return*/, HiLockClosed];
                case 257: return [4 /*yield*/, import("react-icons/hi")];
                case 258:
                    HiLockOpen = (_b.sent()).HiLockOpen;
                    return [2 /*return*/, HiLockOpen];
                case 259: return [4 /*yield*/, import("react-icons/hi")];
                case 260:
                    HiLogin = (_b.sent()).HiLogin;
                    return [2 /*return*/, HiLogin];
                case 261: return [4 /*yield*/, import("react-icons/hi")];
                case 262:
                    HiLogout = (_b.sent()).HiLogout;
                    return [2 /*return*/, HiLogout];
                case 263: return [4 /*yield*/, import("react-icons/hi")];
                case 264:
                    HiMailOpen = (_b.sent()).HiMailOpen;
                    return [2 /*return*/, HiMailOpen];
                case 265: return [4 /*yield*/, import("react-icons/hi")];
                case 266:
                    HiMail = (_b.sent()).HiMail;
                    return [2 /*return*/, HiMail];
                case 267: return [4 /*yield*/, import("react-icons/hi")];
                case 268:
                    HiMap = (_b.sent()).HiMap;
                    return [2 /*return*/, HiMap];
                case 269: return [4 /*yield*/, import("react-icons/hi")];
                case 270:
                    HiMenuAlt1 = (_b.sent()).HiMenuAlt1;
                    return [2 /*return*/, HiMenuAlt1];
                case 271: return [4 /*yield*/, import("react-icons/hi")];
                case 272:
                    HiMenuAlt2 = (_b.sent()).HiMenuAlt2;
                    return [2 /*return*/, HiMenuAlt2];
                case 273: return [4 /*yield*/, import("react-icons/hi")];
                case 274:
                    HiMenuAlt3 = (_b.sent()).HiMenuAlt3;
                    return [2 /*return*/, HiMenuAlt3];
                case 275: return [4 /*yield*/, import("react-icons/hi")];
                case 276:
                    HiMenuAlt4 = (_b.sent()).HiMenuAlt4;
                    return [2 /*return*/, HiMenuAlt4];
                case 277: return [4 /*yield*/, import("react-icons/hi")];
                case 278:
                    HiMenu = (_b.sent()).HiMenu;
                    return [2 /*return*/, HiMenu];
                case 279: return [4 /*yield*/, import("react-icons/hi")];
                case 280:
                    HiMicrophone = (_b.sent()).HiMicrophone;
                    return [2 /*return*/, HiMicrophone];
                case 281: return [4 /*yield*/, import("react-icons/hi")];
                case 282:
                    HiMinusCircle = (_b.sent()).HiMinusCircle;
                    return [2 /*return*/, HiMinusCircle];
                case 283: return [4 /*yield*/, import("react-icons/hi")];
                case 284:
                    HiMinusSm = (_b.sent()).HiMinusSm;
                    return [2 /*return*/, HiMinusSm];
                case 285: return [4 /*yield*/, import("react-icons/hi")];
                case 286:
                    HiMinus = (_b.sent()).HiMinus;
                    return [2 /*return*/, HiMinus];
                case 287: return [4 /*yield*/, import("react-icons/hi")];
                case 288:
                    HiMoon = (_b.sent()).HiMoon;
                    return [2 /*return*/, HiMoon];
                case 289: return [4 /*yield*/, import("react-icons/hi")];
                case 290:
                    HiMusicNote = (_b.sent()).HiMusicNote;
                    return [2 /*return*/, HiMusicNote];
                case 291: return [4 /*yield*/, import("react-icons/hi")];
                case 292:
                    HiNewspaper = (_b.sent()).HiNewspaper;
                    return [2 /*return*/, HiNewspaper];
                case 293: return [4 /*yield*/, import("react-icons/hi")];
                case 294:
                    HiOfficeBuilding = (_b.sent()).HiOfficeBuilding;
                    return [2 /*return*/, HiOfficeBuilding];
                case 295: return [4 /*yield*/, import("react-icons/hi")];
                case 296:
                    HiPaperAirplane = (_b.sent()).HiPaperAirplane;
                    return [2 /*return*/, HiPaperAirplane];
                case 297: return [4 /*yield*/, import("react-icons/hi")];
                case 298:
                    HiPaperClip = (_b.sent()).HiPaperClip;
                    return [2 /*return*/, HiPaperClip];
                case 299: return [4 /*yield*/, import("react-icons/hi")];
                case 300:
                    HiPause = (_b.sent()).HiPause;
                    return [2 /*return*/, HiPause];
                case 301: return [4 /*yield*/, import("react-icons/hi")];
                case 302:
                    HiPencilAlt = (_b.sent()).HiPencilAlt;
                    return [2 /*return*/, HiPencilAlt];
                case 303: return [4 /*yield*/, import("react-icons/hi")];
                case 304:
                    HiPencil = (_b.sent()).HiPencil;
                    return [2 /*return*/, HiPencil];
                case 305: return [4 /*yield*/, import("react-icons/hi")];
                case 306:
                    HiPhoneIncoming = (_b.sent()).HiPhoneIncoming;
                    return [2 /*return*/, HiPhoneIncoming];
                case 307: return [4 /*yield*/, import("react-icons/hi")];
                case 308:
                    HiPhoneMissedCall = (_b.sent()).HiPhoneMissedCall;
                    return [2 /*return*/, HiPhoneMissedCall];
                case 309: return [4 /*yield*/, import("react-icons/hi")];
                case 310:
                    HiPhoneOutgoing = (_b.sent()).HiPhoneOutgoing;
                    return [2 /*return*/, HiPhoneOutgoing];
                case 311: return [4 /*yield*/, import("react-icons/hi")];
                case 312:
                    HiPhone = (_b.sent()).HiPhone;
                    return [2 /*return*/, HiPhone];
                case 313: return [4 /*yield*/, import("react-icons/hi")];
                case 314:
                    HiPhotograph = (_b.sent()).HiPhotograph;
                    return [2 /*return*/, HiPhotograph];
                case 315: return [4 /*yield*/, import("react-icons/hi")];
                case 316:
                    HiPlay = (_b.sent()).HiPlay;
                    return [2 /*return*/, HiPlay];
                case 317: return [4 /*yield*/, import("react-icons/hi")];
                case 318:
                    HiPlusCircle = (_b.sent()).HiPlusCircle;
                    return [2 /*return*/, HiPlusCircle];
                case 319: return [4 /*yield*/, import("react-icons/hi")];
                case 320:
                    HiPlusSm = (_b.sent()).HiPlusSm;
                    return [2 /*return*/, HiPlusSm];
                case 321: return [4 /*yield*/, import("react-icons/hi")];
                case 322:
                    HiPlus = (_b.sent()).HiPlus;
                    return [2 /*return*/, HiPlus];
                case 323: return [4 /*yield*/, import("react-icons/hi")];
                case 324:
                    HiPresentationChartBar = (_b.sent()).HiPresentationChartBar;
                    return [2 /*return*/, HiPresentationChartBar];
                case 325: return [4 /*yield*/, import("react-icons/hi")];
                case 326:
                    HiPresentationChartLine = (_b.sent()).HiPresentationChartLine;
                    return [2 /*return*/, HiPresentationChartLine];
                case 327: return [4 /*yield*/, import("react-icons/hi")];
                case 328:
                    HiPrinter = (_b.sent()).HiPrinter;
                    return [2 /*return*/, HiPrinter];
                case 329: return [4 /*yield*/, import("react-icons/hi")];
                case 330:
                    HiPuzzle = (_b.sent()).HiPuzzle;
                    return [2 /*return*/, HiPuzzle];
                case 331: return [4 /*yield*/, import("react-icons/hi")];
                case 332:
                    HiQrcode = (_b.sent()).HiQrcode;
                    return [2 /*return*/, HiQrcode];
                case 333: return [4 /*yield*/, import("react-icons/hi")];
                case 334:
                    HiQuestionMarkCircle = (_b.sent()).HiQuestionMarkCircle;
                    return [2 /*return*/, HiQuestionMarkCircle];
                case 335: return [4 /*yield*/, import("react-icons/hi")];
                case 336:
                    HiReceiptRefund = (_b.sent()).HiReceiptRefund;
                    return [2 /*return*/, HiReceiptRefund];
                case 337: return [4 /*yield*/, import("react-icons/hi")];
                case 338:
                    HiReceiptTax = (_b.sent()).HiReceiptTax;
                    return [2 /*return*/, HiReceiptTax];
                case 339: return [4 /*yield*/, import("react-icons/hi")];
                case 340:
                    HiRefresh = (_b.sent()).HiRefresh;
                    return [2 /*return*/, HiRefresh];
                case 341: return [4 /*yield*/, import("react-icons/hi")];
                case 342:
                    HiReply = (_b.sent()).HiReply;
                    return [2 /*return*/, HiReply];
                case 343: return [4 /*yield*/, import("react-icons/hi")];
                case 344:
                    HiRewind = (_b.sent()).HiRewind;
                    return [2 /*return*/, HiRewind];
                case 345: return [4 /*yield*/, import("react-icons/hi")];
                case 346:
                    HiRss = (_b.sent()).HiRss;
                    return [2 /*return*/, HiRss];
                case 347: return [4 /*yield*/, import("react-icons/hi")];
                case 348:
                    HiSaveAs = (_b.sent()).HiSaveAs;
                    return [2 /*return*/, HiSaveAs];
                case 349: return [4 /*yield*/, import("react-icons/hi")];
                case 350:
                    HiSave = (_b.sent()).HiSave;
                    return [2 /*return*/, HiSave];
                case 351: return [4 /*yield*/, import("react-icons/hi")];
                case 352:
                    HiScale = (_b.sent()).HiScale;
                    return [2 /*return*/, HiScale];
                case 353: return [4 /*yield*/, import("react-icons/hi")];
                case 354:
                    HiScissors = (_b.sent()).HiScissors;
                    return [2 /*return*/, HiScissors];
                case 355: return [4 /*yield*/, import("react-icons/hi")];
                case 356:
                    HiSearchCircle = (_b.sent()).HiSearchCircle;
                    return [2 /*return*/, HiSearchCircle];
                case 357: return [4 /*yield*/, import("react-icons/hi")];
                case 358:
                    HiSearch = (_b.sent()).HiSearch;
                    return [2 /*return*/, HiSearch];
                case 359: return [4 /*yield*/, import("react-icons/hi")];
                case 360:
                    HiSelector = (_b.sent()).HiSelector;
                    return [2 /*return*/, HiSelector];
                case 361: return [4 /*yield*/, import("react-icons/hi")];
                case 362:
                    HiServer = (_b.sent()).HiServer;
                    return [2 /*return*/, HiServer];
                case 363: return [4 /*yield*/, import("react-icons/hi")];
                case 364:
                    HiShare = (_b.sent()).HiShare;
                    return [2 /*return*/, HiShare];
                case 365: return [4 /*yield*/, import("react-icons/hi")];
                case 366:
                    HiShieldCheck = (_b.sent()).HiShieldCheck;
                    return [2 /*return*/, HiShieldCheck];
                case 367: return [4 /*yield*/, import("react-icons/hi")];
                case 368:
                    HiShieldExclamation = (_b.sent()).HiShieldExclamation;
                    return [2 /*return*/, HiShieldExclamation];
                case 369: return [4 /*yield*/, import("react-icons/hi")];
                case 370:
                    HiShoppingBag = (_b.sent()).HiShoppingBag;
                    return [2 /*return*/, HiShoppingBag];
                case 371: return [4 /*yield*/, import("react-icons/hi")];
                case 372:
                    HiShoppingCart = (_b.sent()).HiShoppingCart;
                    return [2 /*return*/, HiShoppingCart];
                case 373: return [4 /*yield*/, import("react-icons/hi")];
                case 374:
                    HiSortAscending = (_b.sent()).HiSortAscending;
                    return [2 /*return*/, HiSortAscending];
                case 375: return [4 /*yield*/, import("react-icons/hi")];
                case 376:
                    HiSortDescending = (_b.sent()).HiSortDescending;
                    return [2 /*return*/, HiSortDescending];
                case 377: return [4 /*yield*/, import("react-icons/hi")];
                case 378:
                    HiSparkles = (_b.sent()).HiSparkles;
                    return [2 /*return*/, HiSparkles];
                case 379: return [4 /*yield*/, import("react-icons/hi")];
                case 380:
                    HiSpeakerphone = (_b.sent()).HiSpeakerphone;
                    return [2 /*return*/, HiSpeakerphone];
                case 381: return [4 /*yield*/, import("react-icons/hi")];
                case 382:
                    HiStar = (_b.sent()).HiStar;
                    return [2 /*return*/, HiStar];
                case 383: return [4 /*yield*/, import("react-icons/hi")];
                case 384:
                    HiStatusOffline = (_b.sent()).HiStatusOffline;
                    return [2 /*return*/, HiStatusOffline];
                case 385: return [4 /*yield*/, import("react-icons/hi")];
                case 386:
                    HiStatusOnline = (_b.sent()).HiStatusOnline;
                    return [2 /*return*/, HiStatusOnline];
                case 387: return [4 /*yield*/, import("react-icons/hi")];
                case 388:
                    HiStop = (_b.sent()).HiStop;
                    return [2 /*return*/, HiStop];
                case 389: return [4 /*yield*/, import("react-icons/hi")];
                case 390:
                    HiSun = (_b.sent()).HiSun;
                    return [2 /*return*/, HiSun];
                case 391: return [4 /*yield*/, import("react-icons/hi")];
                case 392:
                    HiSupport = (_b.sent()).HiSupport;
                    return [2 /*return*/, HiSupport];
                case 393: return [4 /*yield*/, import("react-icons/hi")];
                case 394:
                    HiSwitchHorizontal = (_b.sent()).HiSwitchHorizontal;
                    return [2 /*return*/, HiSwitchHorizontal];
                case 395: return [4 /*yield*/, import("react-icons/hi")];
                case 396:
                    HiSwitchVertical = (_b.sent()).HiSwitchVertical;
                    return [2 /*return*/, HiSwitchVertical];
                case 397: return [4 /*yield*/, import("react-icons/hi")];
                case 398:
                    HiTable = (_b.sent()).HiTable;
                    return [2 /*return*/, HiTable];
                case 399: return [4 /*yield*/, import("react-icons/hi")];
                case 400:
                    HiTag = (_b.sent()).HiTag;
                    return [2 /*return*/, HiTag];
                case 401: return [4 /*yield*/, import("react-icons/hi")];
                case 402:
                    HiTemplate = (_b.sent()).HiTemplate;
                    return [2 /*return*/, HiTemplate];
                case 403: return [4 /*yield*/, import("react-icons/hi")];
                case 404:
                    HiTerminal = (_b.sent()).HiTerminal;
                    return [2 /*return*/, HiTerminal];
                case 405: return [4 /*yield*/, import("react-icons/hi")];
                case 406:
                    HiThumbDown = (_b.sent()).HiThumbDown;
                    return [2 /*return*/, HiThumbDown];
                case 407: return [4 /*yield*/, import("react-icons/hi")];
                case 408:
                    HiThumbUp = (_b.sent()).HiThumbUp;
                    return [2 /*return*/, HiThumbUp];
                case 409: return [4 /*yield*/, import("react-icons/hi")];
                case 410:
                    HiTicket = (_b.sent()).HiTicket;
                    return [2 /*return*/, HiTicket];
                case 411: return [4 /*yield*/, import("react-icons/hi")];
                case 412:
                    HiTranslate = (_b.sent()).HiTranslate;
                    return [2 /*return*/, HiTranslate];
                case 413: return [4 /*yield*/, import("react-icons/hi")];
                case 414:
                    HiTrash = (_b.sent()).HiTrash;
                    return [2 /*return*/, HiTrash];
                case 415: return [4 /*yield*/, import("react-icons/hi")];
                case 416:
                    HiTrendingDown = (_b.sent()).HiTrendingDown;
                    return [2 /*return*/, HiTrendingDown];
                case 417: return [4 /*yield*/, import("react-icons/hi")];
                case 418:
                    HiTrendingUp = (_b.sent()).HiTrendingUp;
                    return [2 /*return*/, HiTrendingUp];
                case 419: return [4 /*yield*/, import("react-icons/hi")];
                case 420:
                    HiTruck = (_b.sent()).HiTruck;
                    return [2 /*return*/, HiTruck];
                case 421: return [4 /*yield*/, import("react-icons/hi")];
                case 422:
                    HiUpload = (_b.sent()).HiUpload;
                    return [2 /*return*/, HiUpload];
                case 423: return [4 /*yield*/, import("react-icons/hi")];
                case 424:
                    HiUserAdd = (_b.sent()).HiUserAdd;
                    return [2 /*return*/, HiUserAdd];
                case 425: return [4 /*yield*/, import("react-icons/hi")];
                case 426:
                    HiUserCircle = (_b.sent()).HiUserCircle;
                    return [2 /*return*/, HiUserCircle];
                case 427: return [4 /*yield*/, import("react-icons/hi")];
                case 428:
                    HiUserGroup = (_b.sent()).HiUserGroup;
                    return [2 /*return*/, HiUserGroup];
                case 429: return [4 /*yield*/, import("react-icons/hi")];
                case 430:
                    HiUserRemove = (_b.sent()).HiUserRemove;
                    return [2 /*return*/, HiUserRemove];
                case 431: return [4 /*yield*/, import("react-icons/hi")];
                case 432:
                    HiUser = (_b.sent()).HiUser;
                    return [2 /*return*/, HiUser];
                case 433: return [4 /*yield*/, import("react-icons/hi")];
                case 434:
                    HiUsers = (_b.sent()).HiUsers;
                    return [2 /*return*/, HiUsers];
                case 435: return [4 /*yield*/, import("react-icons/hi")];
                case 436:
                    HiVariable = (_b.sent()).HiVariable;
                    return [2 /*return*/, HiVariable];
                case 437: return [4 /*yield*/, import("react-icons/hi")];
                case 438:
                    HiVideoCamera = (_b.sent()).HiVideoCamera;
                    return [2 /*return*/, HiVideoCamera];
                case 439: return [4 /*yield*/, import("react-icons/hi")];
                case 440:
                    HiViewBoards = (_b.sent()).HiViewBoards;
                    return [2 /*return*/, HiViewBoards];
                case 441: return [4 /*yield*/, import("react-icons/hi")];
                case 442:
                    HiViewGridAdd = (_b.sent()).HiViewGridAdd;
                    return [2 /*return*/, HiViewGridAdd];
                case 443: return [4 /*yield*/, import("react-icons/hi")];
                case 444:
                    HiViewGrid = (_b.sent()).HiViewGrid;
                    return [2 /*return*/, HiViewGrid];
                case 445: return [4 /*yield*/, import("react-icons/hi")];
                case 446:
                    HiViewList = (_b.sent()).HiViewList;
                    return [2 /*return*/, HiViewList];
                case 447: return [4 /*yield*/, import("react-icons/hi")];
                case 448:
                    HiVolumeOff = (_b.sent()).HiVolumeOff;
                    return [2 /*return*/, HiVolumeOff];
                case 449: return [4 /*yield*/, import("react-icons/hi")];
                case 450:
                    HiVolumeUp = (_b.sent()).HiVolumeUp;
                    return [2 /*return*/, HiVolumeUp];
                case 451: return [4 /*yield*/, import("react-icons/hi")];
                case 452:
                    HiWifi = (_b.sent()).HiWifi;
                    return [2 /*return*/, HiWifi];
                case 453: return [4 /*yield*/, import("react-icons/hi")];
                case 454:
                    HiXCircle = (_b.sent()).HiXCircle;
                    return [2 /*return*/, HiXCircle];
                case 455: return [4 /*yield*/, import("react-icons/hi")];
                case 456:
                    HiX = (_b.sent()).HiX;
                    return [2 /*return*/, HiX];
                case 457: return [4 /*yield*/, import("react-icons/hi")];
                case 458:
                    HiZoomIn = (_b.sent()).HiZoomIn;
                    return [2 /*return*/, HiZoomIn];
                case 459: return [4 /*yield*/, import("react-icons/hi")];
                case 460:
                    HiZoomOut = (_b.sent()).HiZoomOut;
                    return [2 /*return*/, HiZoomOut];
                case 461: return [4 /*yield*/, import("react-icons/hi")];
                case 462:
                    HiOutlineAcademicCap = (_b.sent()).HiOutlineAcademicCap;
                    return [2 /*return*/, HiOutlineAcademicCap];
                case 463: return [4 /*yield*/, import("react-icons/hi")];
                case 464:
                    HiOutlineAdjustments = (_b.sent()).HiOutlineAdjustments;
                    return [2 /*return*/, HiOutlineAdjustments];
                case 465: return [4 /*yield*/, import("react-icons/hi")];
                case 466:
                    HiOutlineAnnotation = (_b.sent()).HiOutlineAnnotation;
                    return [2 /*return*/, HiOutlineAnnotation];
                case 467: return [4 /*yield*/, import("react-icons/hi")];
                case 468:
                    HiOutlineArchive = (_b.sent()).HiOutlineArchive;
                    return [2 /*return*/, HiOutlineArchive];
                case 469: return [4 /*yield*/, import("react-icons/hi")];
                case 470:
                    HiOutlineArrowCircleDown = (_b.sent()).HiOutlineArrowCircleDown;
                    return [2 /*return*/, HiOutlineArrowCircleDown];
                case 471: return [4 /*yield*/, import("react-icons/hi")];
                case 472:
                    HiOutlineArrowCircleLeft = (_b.sent()).HiOutlineArrowCircleLeft;
                    return [2 /*return*/, HiOutlineArrowCircleLeft];
                case 473: return [4 /*yield*/, import("react-icons/hi")];
                case 474:
                    HiOutlineArrowCircleRight = (_b.sent()).HiOutlineArrowCircleRight;
                    return [2 /*return*/, HiOutlineArrowCircleRight];
                case 475: return [4 /*yield*/, import("react-icons/hi")];
                case 476:
                    HiOutlineArrowCircleUp = (_b.sent()).HiOutlineArrowCircleUp;
                    return [2 /*return*/, HiOutlineArrowCircleUp];
                case 477: return [4 /*yield*/, import("react-icons/hi")];
                case 478:
                    HiOutlineArrowDown = (_b.sent()).HiOutlineArrowDown;
                    return [2 /*return*/, HiOutlineArrowDown];
                case 479: return [4 /*yield*/, import("react-icons/hi")];
                case 480:
                    HiOutlineArrowLeft = (_b.sent()).HiOutlineArrowLeft;
                    return [2 /*return*/, HiOutlineArrowLeft];
                case 481: return [4 /*yield*/, import("react-icons/hi")];
                case 482:
                    HiOutlineArrowNarrowDown = (_b.sent()).HiOutlineArrowNarrowDown;
                    return [2 /*return*/, HiOutlineArrowNarrowDown];
                case 483: return [4 /*yield*/, import("react-icons/hi")];
                case 484:
                    HiOutlineArrowNarrowLeft = (_b.sent()).HiOutlineArrowNarrowLeft;
                    return [2 /*return*/, HiOutlineArrowNarrowLeft];
                case 485: return [4 /*yield*/, import("react-icons/hi")];
                case 486:
                    HiOutlineArrowNarrowRight = (_b.sent()).HiOutlineArrowNarrowRight;
                    return [2 /*return*/, HiOutlineArrowNarrowRight];
                case 487: return [4 /*yield*/, import("react-icons/hi")];
                case 488:
                    HiOutlineArrowNarrowUp = (_b.sent()).HiOutlineArrowNarrowUp;
                    return [2 /*return*/, HiOutlineArrowNarrowUp];
                case 489: return [4 /*yield*/, import("react-icons/hi")];
                case 490:
                    HiOutlineArrowRight = (_b.sent()).HiOutlineArrowRight;
                    return [2 /*return*/, HiOutlineArrowRight];
                case 491: return [4 /*yield*/, import("react-icons/hi")];
                case 492:
                    HiOutlineArrowSmDown = (_b.sent()).HiOutlineArrowSmDown;
                    return [2 /*return*/, HiOutlineArrowSmDown];
                case 493: return [4 /*yield*/, import("react-icons/hi")];
                case 494:
                    HiOutlineArrowSmLeft = (_b.sent()).HiOutlineArrowSmLeft;
                    return [2 /*return*/, HiOutlineArrowSmLeft];
                case 495: return [4 /*yield*/, import("react-icons/hi")];
                case 496:
                    HiOutlineArrowSmRight = (_b.sent()).HiOutlineArrowSmRight;
                    return [2 /*return*/, HiOutlineArrowSmRight];
                case 497: return [4 /*yield*/, import("react-icons/hi")];
                case 498:
                    HiOutlineArrowSmUp = (_b.sent()).HiOutlineArrowSmUp;
                    return [2 /*return*/, HiOutlineArrowSmUp];
                case 499: return [4 /*yield*/, import("react-icons/hi")];
                case 500:
                    HiOutlineArrowUp = (_b.sent()).HiOutlineArrowUp;
                    return [2 /*return*/, HiOutlineArrowUp];
                case 501: return [4 /*yield*/, import("react-icons/hi")];
                case 502:
                    HiOutlineArrowsExpand = (_b.sent()).HiOutlineArrowsExpand;
                    return [2 /*return*/, HiOutlineArrowsExpand];
                case 503: return [4 /*yield*/, import("react-icons/hi")];
                case 504:
                    HiOutlineAtSymbol = (_b.sent()).HiOutlineAtSymbol;
                    return [2 /*return*/, HiOutlineAtSymbol];
                case 505: return [4 /*yield*/, import("react-icons/hi")];
                case 506:
                    HiOutlineBackspace = (_b.sent()).HiOutlineBackspace;
                    return [2 /*return*/, HiOutlineBackspace];
                case 507: return [4 /*yield*/, import("react-icons/hi")];
                case 508:
                    HiOutlineBadgeCheck = (_b.sent()).HiOutlineBadgeCheck;
                    return [2 /*return*/, HiOutlineBadgeCheck];
                case 509: return [4 /*yield*/, import("react-icons/hi")];
                case 510:
                    HiOutlineBan = (_b.sent()).HiOutlineBan;
                    return [2 /*return*/, HiOutlineBan];
                case 511: return [4 /*yield*/, import("react-icons/hi")];
                case 512:
                    HiOutlineBeaker = (_b.sent()).HiOutlineBeaker;
                    return [2 /*return*/, HiOutlineBeaker];
                case 513: return [4 /*yield*/, import("react-icons/hi")];
                case 514:
                    HiOutlineBell = (_b.sent()).HiOutlineBell;
                    return [2 /*return*/, HiOutlineBell];
                case 515: return [4 /*yield*/, import("react-icons/hi")];
                case 516:
                    HiOutlineBookOpen = (_b.sent()).HiOutlineBookOpen;
                    return [2 /*return*/, HiOutlineBookOpen];
                case 517: return [4 /*yield*/, import("react-icons/hi")];
                case 518:
                    HiOutlineBookmarkAlt = (_b.sent()).HiOutlineBookmarkAlt;
                    return [2 /*return*/, HiOutlineBookmarkAlt];
                case 519: return [4 /*yield*/, import("react-icons/hi")];
                case 520:
                    HiOutlineBookmark = (_b.sent()).HiOutlineBookmark;
                    return [2 /*return*/, HiOutlineBookmark];
                case 521: return [4 /*yield*/, import("react-icons/hi")];
                case 522:
                    HiOutlineBriefcase = (_b.sent()).HiOutlineBriefcase;
                    return [2 /*return*/, HiOutlineBriefcase];
                case 523: return [4 /*yield*/, import("react-icons/hi")];
                case 524:
                    HiOutlineCake = (_b.sent()).HiOutlineCake;
                    return [2 /*return*/, HiOutlineCake];
                case 525: return [4 /*yield*/, import("react-icons/hi")];
                case 526:
                    HiOutlineCalculator = (_b.sent()).HiOutlineCalculator;
                    return [2 /*return*/, HiOutlineCalculator];
                case 527: return [4 /*yield*/, import("react-icons/hi")];
                case 528:
                    HiOutlineCalendar = (_b.sent()).HiOutlineCalendar;
                    return [2 /*return*/, HiOutlineCalendar];
                case 529: return [4 /*yield*/, import("react-icons/hi")];
                case 530:
                    HiOutlineCamera = (_b.sent()).HiOutlineCamera;
                    return [2 /*return*/, HiOutlineCamera];
                case 531: return [4 /*yield*/, import("react-icons/hi")];
                case 532:
                    HiOutlineCash = (_b.sent()).HiOutlineCash;
                    return [2 /*return*/, HiOutlineCash];
                case 533: return [4 /*yield*/, import("react-icons/hi")];
                case 534:
                    HiOutlineChartBar = (_b.sent()).HiOutlineChartBar;
                    return [2 /*return*/, HiOutlineChartBar];
                case 535: return [4 /*yield*/, import("react-icons/hi")];
                case 536:
                    HiOutlineChartPie = (_b.sent()).HiOutlineChartPie;
                    return [2 /*return*/, HiOutlineChartPie];
                case 537: return [4 /*yield*/, import("react-icons/hi")];
                case 538:
                    HiOutlineChartSquareBar = (_b.sent()).HiOutlineChartSquareBar;
                    return [2 /*return*/, HiOutlineChartSquareBar];
                case 539: return [4 /*yield*/, import("react-icons/hi")];
                case 540:
                    HiOutlineChatAlt2 = (_b.sent()).HiOutlineChatAlt2;
                    return [2 /*return*/, HiOutlineChatAlt2];
                case 541: return [4 /*yield*/, import("react-icons/hi")];
                case 542:
                    HiOutlineChatAlt = (_b.sent()).HiOutlineChatAlt;
                    return [2 /*return*/, HiOutlineChatAlt];
                case 543: return [4 /*yield*/, import("react-icons/hi")];
                case 544:
                    HiOutlineChat = (_b.sent()).HiOutlineChat;
                    return [2 /*return*/, HiOutlineChat];
                case 545: return [4 /*yield*/, import("react-icons/hi")];
                case 546:
                    HiOutlineCheckCircle = (_b.sent()).HiOutlineCheckCircle;
                    return [2 /*return*/, HiOutlineCheckCircle];
                case 547: return [4 /*yield*/, import("react-icons/hi")];
                case 548:
                    HiOutlineCheck = (_b.sent()).HiOutlineCheck;
                    return [2 /*return*/, HiOutlineCheck];
                case 549: return [4 /*yield*/, import("react-icons/hi")];
                case 550:
                    HiOutlineChevronDoubleDown = (_b.sent()).HiOutlineChevronDoubleDown;
                    return [2 /*return*/, HiOutlineChevronDoubleDown];
                case 551: return [4 /*yield*/, import("react-icons/hi")];
                case 552:
                    HiOutlineChevronDoubleLeft = (_b.sent()).HiOutlineChevronDoubleLeft;
                    return [2 /*return*/, HiOutlineChevronDoubleLeft];
                case 553: return [4 /*yield*/, import("react-icons/hi")];
                case 554:
                    HiOutlineChevronDoubleRight = (_b.sent()).HiOutlineChevronDoubleRight;
                    return [2 /*return*/, HiOutlineChevronDoubleRight];
                case 555: return [4 /*yield*/, import("react-icons/hi")];
                case 556:
                    HiOutlineChevronDoubleUp = (_b.sent()).HiOutlineChevronDoubleUp;
                    return [2 /*return*/, HiOutlineChevronDoubleUp];
                case 557: return [4 /*yield*/, import("react-icons/hi")];
                case 558:
                    HiOutlineChevronDown = (_b.sent()).HiOutlineChevronDown;
                    return [2 /*return*/, HiOutlineChevronDown];
                case 559: return [4 /*yield*/, import("react-icons/hi")];
                case 560:
                    HiOutlineChevronLeft = (_b.sent()).HiOutlineChevronLeft;
                    return [2 /*return*/, HiOutlineChevronLeft];
                case 561: return [4 /*yield*/, import("react-icons/hi")];
                case 562:
                    HiOutlineChevronRight = (_b.sent()).HiOutlineChevronRight;
                    return [2 /*return*/, HiOutlineChevronRight];
                case 563: return [4 /*yield*/, import("react-icons/hi")];
                case 564:
                    HiOutlineChevronUp = (_b.sent()).HiOutlineChevronUp;
                    return [2 /*return*/, HiOutlineChevronUp];
                case 565: return [4 /*yield*/, import("react-icons/hi")];
                case 566:
                    HiOutlineChip = (_b.sent()).HiOutlineChip;
                    return [2 /*return*/, HiOutlineChip];
                case 567: return [4 /*yield*/, import("react-icons/hi")];
                case 568:
                    HiOutlineClipboardCheck = (_b.sent()).HiOutlineClipboardCheck;
                    return [2 /*return*/, HiOutlineClipboardCheck];
                case 569: return [4 /*yield*/, import("react-icons/hi")];
                case 570:
                    HiOutlineClipboardCopy = (_b.sent()).HiOutlineClipboardCopy;
                    return [2 /*return*/, HiOutlineClipboardCopy];
                case 571: return [4 /*yield*/, import("react-icons/hi")];
                case 572:
                    HiOutlineClipboardList = (_b.sent()).HiOutlineClipboardList;
                    return [2 /*return*/, HiOutlineClipboardList];
                case 573: return [4 /*yield*/, import("react-icons/hi")];
                case 574:
                    HiOutlineClipboard = (_b.sent()).HiOutlineClipboard;
                    return [2 /*return*/, HiOutlineClipboard];
                case 575: return [4 /*yield*/, import("react-icons/hi")];
                case 576:
                    HiOutlineClock = (_b.sent()).HiOutlineClock;
                    return [2 /*return*/, HiOutlineClock];
                case 577: return [4 /*yield*/, import("react-icons/hi")];
                case 578:
                    HiOutlineCloudDownload = (_b.sent()).HiOutlineCloudDownload;
                    return [2 /*return*/, HiOutlineCloudDownload];
                case 579: return [4 /*yield*/, import("react-icons/hi")];
                case 580:
                    HiOutlineCloudUpload = (_b.sent()).HiOutlineCloudUpload;
                    return [2 /*return*/, HiOutlineCloudUpload];
                case 581: return [4 /*yield*/, import("react-icons/hi")];
                case 582:
                    HiOutlineCloud = (_b.sent()).HiOutlineCloud;
                    return [2 /*return*/, HiOutlineCloud];
                case 583: return [4 /*yield*/, import("react-icons/hi")];
                case 584:
                    HiOutlineCode = (_b.sent()).HiOutlineCode;
                    return [2 /*return*/, HiOutlineCode];
                case 585: return [4 /*yield*/, import("react-icons/hi")];
                case 586:
                    HiOutlineCog = (_b.sent()).HiOutlineCog;
                    return [2 /*return*/, HiOutlineCog];
                case 587: return [4 /*yield*/, import("react-icons/hi")];
                case 588:
                    HiOutlineCollection = (_b.sent()).HiOutlineCollection;
                    return [2 /*return*/, HiOutlineCollection];
                case 589: return [4 /*yield*/, import("react-icons/hi")];
                case 590:
                    HiOutlineColorSwatch = (_b.sent()).HiOutlineColorSwatch;
                    return [2 /*return*/, HiOutlineColorSwatch];
                case 591: return [4 /*yield*/, import("react-icons/hi")];
                case 592:
                    HiOutlineCreditCard = (_b.sent()).HiOutlineCreditCard;
                    return [2 /*return*/, HiOutlineCreditCard];
                case 593: return [4 /*yield*/, import("react-icons/hi")];
                case 594:
                    HiOutlineCubeTransparent = (_b.sent()).HiOutlineCubeTransparent;
                    return [2 /*return*/, HiOutlineCubeTransparent];
                case 595: return [4 /*yield*/, import("react-icons/hi")];
                case 596:
                    HiOutlineCube = (_b.sent()).HiOutlineCube;
                    return [2 /*return*/, HiOutlineCube];
                case 597: return [4 /*yield*/, import("react-icons/hi")];
                case 598:
                    HiOutlineCurrencyBangladeshi = (_b.sent()).HiOutlineCurrencyBangladeshi;
                    return [2 /*return*/, HiOutlineCurrencyBangladeshi];
                case 599: return [4 /*yield*/, import("react-icons/hi")];
                case 600:
                    HiOutlineCurrencyDollar = (_b.sent()).HiOutlineCurrencyDollar;
                    return [2 /*return*/, HiOutlineCurrencyDollar];
                case 601: return [4 /*yield*/, import("react-icons/hi")];
                case 602:
                    HiOutlineCurrencyEuro = (_b.sent()).HiOutlineCurrencyEuro;
                    return [2 /*return*/, HiOutlineCurrencyEuro];
                case 603: return [4 /*yield*/, import("react-icons/hi")];
                case 604:
                    HiOutlineCurrencyPound = (_b.sent()).HiOutlineCurrencyPound;
                    return [2 /*return*/, HiOutlineCurrencyPound];
                case 605: return [4 /*yield*/, import("react-icons/hi")];
                case 606:
                    HiOutlineCurrencyRupee = (_b.sent()).HiOutlineCurrencyRupee;
                    return [2 /*return*/, HiOutlineCurrencyRupee];
                case 607: return [4 /*yield*/, import("react-icons/hi")];
                case 608:
                    HiOutlineCurrencyYen = (_b.sent()).HiOutlineCurrencyYen;
                    return [2 /*return*/, HiOutlineCurrencyYen];
                case 609: return [4 /*yield*/, import("react-icons/hi")];
                case 610:
                    HiOutlineCursorClick = (_b.sent()).HiOutlineCursorClick;
                    return [2 /*return*/, HiOutlineCursorClick];
                case 611: return [4 /*yield*/, import("react-icons/hi")];
                case 612:
                    HiOutlineDatabase = (_b.sent()).HiOutlineDatabase;
                    return [2 /*return*/, HiOutlineDatabase];
                case 613: return [4 /*yield*/, import("react-icons/hi")];
                case 614:
                    HiOutlineDesktopComputer = (_b.sent()).HiOutlineDesktopComputer;
                    return [2 /*return*/, HiOutlineDesktopComputer];
                case 615: return [4 /*yield*/, import("react-icons/hi")];
                case 616:
                    HiOutlineDeviceMobile = (_b.sent()).HiOutlineDeviceMobile;
                    return [2 /*return*/, HiOutlineDeviceMobile];
                case 617: return [4 /*yield*/, import("react-icons/hi")];
                case 618:
                    HiOutlineDeviceTablet = (_b.sent()).HiOutlineDeviceTablet;
                    return [2 /*return*/, HiOutlineDeviceTablet];
                case 619: return [4 /*yield*/, import("react-icons/hi")];
                case 620:
                    HiOutlineDocumentAdd = (_b.sent()).HiOutlineDocumentAdd;
                    return [2 /*return*/, HiOutlineDocumentAdd];
                case 621: return [4 /*yield*/, import("react-icons/hi")];
                case 622:
                    HiOutlineDocumentDownload = (_b.sent()).HiOutlineDocumentDownload;
                    return [2 /*return*/, HiOutlineDocumentDownload];
                case 623: return [4 /*yield*/, import("react-icons/hi")];
                case 624:
                    HiOutlineDocumentDuplicate = (_b.sent()).HiOutlineDocumentDuplicate;
                    return [2 /*return*/, HiOutlineDocumentDuplicate];
                case 625: return [4 /*yield*/, import("react-icons/hi")];
                case 626:
                    HiOutlineDocumentRemove = (_b.sent()).HiOutlineDocumentRemove;
                    return [2 /*return*/, HiOutlineDocumentRemove];
                case 627: return [4 /*yield*/, import("react-icons/hi")];
                case 628:
                    HiOutlineDocumentReport = (_b.sent()).HiOutlineDocumentReport;
                    return [2 /*return*/, HiOutlineDocumentReport];
                case 629: return [4 /*yield*/, import("react-icons/hi")];
                case 630:
                    HiOutlineDocumentSearch = (_b.sent()).HiOutlineDocumentSearch;
                    return [2 /*return*/, HiOutlineDocumentSearch];
                case 631: return [4 /*yield*/, import("react-icons/hi")];
                case 632:
                    HiOutlineDocumentText = (_b.sent()).HiOutlineDocumentText;
                    return [2 /*return*/, HiOutlineDocumentText];
                case 633: return [4 /*yield*/, import("react-icons/hi")];
                case 634:
                    HiOutlineDocument = (_b.sent()).HiOutlineDocument;
                    return [2 /*return*/, HiOutlineDocument];
                case 635: return [4 /*yield*/, import("react-icons/hi")];
                case 636:
                    HiOutlineDotsCircleHorizontal = (_b.sent()).HiOutlineDotsCircleHorizontal;
                    return [2 /*return*/, HiOutlineDotsCircleHorizontal];
                case 637: return [4 /*yield*/, import("react-icons/hi")];
                case 638:
                    HiOutlineDotsHorizontal = (_b.sent()).HiOutlineDotsHorizontal;
                    return [2 /*return*/, HiOutlineDotsHorizontal];
                case 639: return [4 /*yield*/, import("react-icons/hi")];
                case 640:
                    HiOutlineDotsVertical = (_b.sent()).HiOutlineDotsVertical;
                    return [2 /*return*/, HiOutlineDotsVertical];
                case 641: return [4 /*yield*/, import("react-icons/hi")];
                case 642:
                    HiOutlineDownload = (_b.sent()).HiOutlineDownload;
                    return [2 /*return*/, HiOutlineDownload];
                case 643: return [4 /*yield*/, import("react-icons/hi")];
                case 644:
                    HiOutlineDuplicate = (_b.sent()).HiOutlineDuplicate;
                    return [2 /*return*/, HiOutlineDuplicate];
                case 645: return [4 /*yield*/, import("react-icons/hi")];
                case 646:
                    HiOutlineEmojiHappy = (_b.sent()).HiOutlineEmojiHappy;
                    return [2 /*return*/, HiOutlineEmojiHappy];
                case 647: return [4 /*yield*/, import("react-icons/hi")];
                case 648:
                    HiOutlineEmojiSad = (_b.sent()).HiOutlineEmojiSad;
                    return [2 /*return*/, HiOutlineEmojiSad];
                case 649: return [4 /*yield*/, import("react-icons/hi")];
                case 650:
                    HiOutlineExclamationCircle = (_b.sent()).HiOutlineExclamationCircle;
                    return [2 /*return*/, HiOutlineExclamationCircle];
                case 651: return [4 /*yield*/, import("react-icons/hi")];
                case 652:
                    HiOutlineExclamation = (_b.sent()).HiOutlineExclamation;
                    return [2 /*return*/, HiOutlineExclamation];
                case 653: return [4 /*yield*/, import("react-icons/hi")];
                case 654:
                    HiOutlineExternalLink = (_b.sent()).HiOutlineExternalLink;
                    return [2 /*return*/, HiOutlineExternalLink];
                case 655: return [4 /*yield*/, import("react-icons/hi")];
                case 656:
                    HiOutlineEyeOff = (_b.sent()).HiOutlineEyeOff;
                    return [2 /*return*/, HiOutlineEyeOff];
                case 657: return [4 /*yield*/, import("react-icons/hi")];
                case 658:
                    HiOutlineEye = (_b.sent()).HiOutlineEye;
                    return [2 /*return*/, HiOutlineEye];
                case 659: return [4 /*yield*/, import("react-icons/hi")];
                case 660:
                    HiOutlineFastForward = (_b.sent()).HiOutlineFastForward;
                    return [2 /*return*/, HiOutlineFastForward];
                case 661: return [4 /*yield*/, import("react-icons/hi")];
                case 662:
                    HiOutlineFilm = (_b.sent()).HiOutlineFilm;
                    return [2 /*return*/, HiOutlineFilm];
                case 663: return [4 /*yield*/, import("react-icons/hi")];
                case 664:
                    HiOutlineFilter = (_b.sent()).HiOutlineFilter;
                    return [2 /*return*/, HiOutlineFilter];
                case 665: return [4 /*yield*/, import("react-icons/hi")];
                case 666:
                    HiOutlineFingerPrint = (_b.sent()).HiOutlineFingerPrint;
                    return [2 /*return*/, HiOutlineFingerPrint];
                case 667: return [4 /*yield*/, import("react-icons/hi")];
                case 668:
                    HiOutlineFire = (_b.sent()).HiOutlineFire;
                    return [2 /*return*/, HiOutlineFire];
                case 669: return [4 /*yield*/, import("react-icons/hi")];
                case 670:
                    HiOutlineFlag = (_b.sent()).HiOutlineFlag;
                    return [2 /*return*/, HiOutlineFlag];
                case 671: return [4 /*yield*/, import("react-icons/hi")];
                case 672:
                    HiOutlineFolderAdd = (_b.sent()).HiOutlineFolderAdd;
                    return [2 /*return*/, HiOutlineFolderAdd];
                case 673: return [4 /*yield*/, import("react-icons/hi")];
                case 674:
                    HiOutlineFolderDownload = (_b.sent()).HiOutlineFolderDownload;
                    return [2 /*return*/, HiOutlineFolderDownload];
                case 675: return [4 /*yield*/, import("react-icons/hi")];
                case 676:
                    HiOutlineFolderOpen = (_b.sent()).HiOutlineFolderOpen;
                    return [2 /*return*/, HiOutlineFolderOpen];
                case 677: return [4 /*yield*/, import("react-icons/hi")];
                case 678:
                    HiOutlineFolderRemove = (_b.sent()).HiOutlineFolderRemove;
                    return [2 /*return*/, HiOutlineFolderRemove];
                case 679: return [4 /*yield*/, import("react-icons/hi")];
                case 680:
                    HiOutlineFolder = (_b.sent()).HiOutlineFolder;
                    return [2 /*return*/, HiOutlineFolder];
                case 681: return [4 /*yield*/, import("react-icons/hi")];
                case 682:
                    HiOutlineGift = (_b.sent()).HiOutlineGift;
                    return [2 /*return*/, HiOutlineGift];
                case 683: return [4 /*yield*/, import("react-icons/hi")];
                case 684:
                    HiOutlineGlobeAlt = (_b.sent()).HiOutlineGlobeAlt;
                    return [2 /*return*/, HiOutlineGlobeAlt];
                case 685: return [4 /*yield*/, import("react-icons/hi")];
                case 686:
                    HiOutlineGlobe = (_b.sent()).HiOutlineGlobe;
                    return [2 /*return*/, HiOutlineGlobe];
                case 687: return [4 /*yield*/, import("react-icons/hi")];
                case 688:
                    HiOutlineHand = (_b.sent()).HiOutlineHand;
                    return [2 /*return*/, HiOutlineHand];
                case 689: return [4 /*yield*/, import("react-icons/hi")];
                case 690:
                    HiOutlineHashtag = (_b.sent()).HiOutlineHashtag;
                    return [2 /*return*/, HiOutlineHashtag];
                case 691: return [4 /*yield*/, import("react-icons/hi")];
                case 692:
                    HiOutlineHeart = (_b.sent()).HiOutlineHeart;
                    return [2 /*return*/, HiOutlineHeart];
                case 693: return [4 /*yield*/, import("react-icons/hi")];
                case 694:
                    HiOutlineHome = (_b.sent()).HiOutlineHome;
                    return [2 /*return*/, HiOutlineHome];
                case 695: return [4 /*yield*/, import("react-icons/hi")];
                case 696:
                    HiOutlineIdentification = (_b.sent()).HiOutlineIdentification;
                    return [2 /*return*/, HiOutlineIdentification];
                case 697: return [4 /*yield*/, import("react-icons/hi")];
                case 698:
                    HiOutlineInboxIn = (_b.sent()).HiOutlineInboxIn;
                    return [2 /*return*/, HiOutlineInboxIn];
                case 699: return [4 /*yield*/, import("react-icons/hi")];
                case 700:
                    HiOutlineInbox = (_b.sent()).HiOutlineInbox;
                    return [2 /*return*/, HiOutlineInbox];
                case 701: return [4 /*yield*/, import("react-icons/hi")];
                case 702:
                    HiOutlineInformationCircle = (_b.sent()).HiOutlineInformationCircle;
                    return [2 /*return*/, HiOutlineInformationCircle];
                case 703: return [4 /*yield*/, import("react-icons/hi")];
                case 704:
                    HiOutlineKey = (_b.sent()).HiOutlineKey;
                    return [2 /*return*/, HiOutlineKey];
                case 705: return [4 /*yield*/, import("react-icons/hi")];
                case 706:
                    HiOutlineLibrary = (_b.sent()).HiOutlineLibrary;
                    return [2 /*return*/, HiOutlineLibrary];
                case 707: return [4 /*yield*/, import("react-icons/hi")];
                case 708:
                    HiOutlineLightBulb = (_b.sent()).HiOutlineLightBulb;
                    return [2 /*return*/, HiOutlineLightBulb];
                case 709: return [4 /*yield*/, import("react-icons/hi")];
                case 710:
                    HiOutlineLightningBolt = (_b.sent()).HiOutlineLightningBolt;
                    return [2 /*return*/, HiOutlineLightningBolt];
                case 711: return [4 /*yield*/, import("react-icons/hi")];
                case 712:
                    HiOutlineLink = (_b.sent()).HiOutlineLink;
                    return [2 /*return*/, HiOutlineLink];
                case 713: return [4 /*yield*/, import("react-icons/hi")];
                case 714:
                    HiOutlineLocationMarker = (_b.sent()).HiOutlineLocationMarker;
                    return [2 /*return*/, HiOutlineLocationMarker];
                case 715: return [4 /*yield*/, import("react-icons/hi")];
                case 716:
                    HiOutlineLockClosed = (_b.sent()).HiOutlineLockClosed;
                    return [2 /*return*/, HiOutlineLockClosed];
                case 717: return [4 /*yield*/, import("react-icons/hi")];
                case 718:
                    HiOutlineLockOpen = (_b.sent()).HiOutlineLockOpen;
                    return [2 /*return*/, HiOutlineLockOpen];
                case 719: return [4 /*yield*/, import("react-icons/hi")];
                case 720:
                    HiOutlineLogin = (_b.sent()).HiOutlineLogin;
                    return [2 /*return*/, HiOutlineLogin];
                case 721: return [4 /*yield*/, import("react-icons/hi")];
                case 722:
                    HiOutlineLogout = (_b.sent()).HiOutlineLogout;
                    return [2 /*return*/, HiOutlineLogout];
                case 723: return [4 /*yield*/, import("react-icons/hi")];
                case 724:
                    HiOutlineMailOpen = (_b.sent()).HiOutlineMailOpen;
                    return [2 /*return*/, HiOutlineMailOpen];
                case 725: return [4 /*yield*/, import("react-icons/hi")];
                case 726:
                    HiOutlineMail = (_b.sent()).HiOutlineMail;
                    return [2 /*return*/, HiOutlineMail];
                case 727: return [4 /*yield*/, import("react-icons/hi")];
                case 728:
                    HiOutlineMap = (_b.sent()).HiOutlineMap;
                    return [2 /*return*/, HiOutlineMap];
                case 729: return [4 /*yield*/, import("react-icons/hi")];
                case 730:
                    HiOutlineMenuAlt1 = (_b.sent()).HiOutlineMenuAlt1;
                    return [2 /*return*/, HiOutlineMenuAlt1];
                case 731: return [4 /*yield*/, import("react-icons/hi")];
                case 732:
                    HiOutlineMenuAlt2 = (_b.sent()).HiOutlineMenuAlt2;
                    return [2 /*return*/, HiOutlineMenuAlt2];
                case 733: return [4 /*yield*/, import("react-icons/hi")];
                case 734:
                    HiOutlineMenuAlt3 = (_b.sent()).HiOutlineMenuAlt3;
                    return [2 /*return*/, HiOutlineMenuAlt3];
                case 735: return [4 /*yield*/, import("react-icons/hi")];
                case 736:
                    HiOutlineMenuAlt4 = (_b.sent()).HiOutlineMenuAlt4;
                    return [2 /*return*/, HiOutlineMenuAlt4];
                case 737: return [4 /*yield*/, import("react-icons/hi")];
                case 738:
                    HiOutlineMenu = (_b.sent()).HiOutlineMenu;
                    return [2 /*return*/, HiOutlineMenu];
                case 739: return [4 /*yield*/, import("react-icons/hi")];
                case 740:
                    HiOutlineMicrophone = (_b.sent()).HiOutlineMicrophone;
                    return [2 /*return*/, HiOutlineMicrophone];
                case 741: return [4 /*yield*/, import("react-icons/hi")];
                case 742:
                    HiOutlineMinusCircle = (_b.sent()).HiOutlineMinusCircle;
                    return [2 /*return*/, HiOutlineMinusCircle];
                case 743: return [4 /*yield*/, import("react-icons/hi")];
                case 744:
                    HiOutlineMinusSm = (_b.sent()).HiOutlineMinusSm;
                    return [2 /*return*/, HiOutlineMinusSm];
                case 745: return [4 /*yield*/, import("react-icons/hi")];
                case 746:
                    HiOutlineMinus = (_b.sent()).HiOutlineMinus;
                    return [2 /*return*/, HiOutlineMinus];
                case 747: return [4 /*yield*/, import("react-icons/hi")];
                case 748:
                    HiOutlineMoon = (_b.sent()).HiOutlineMoon;
                    return [2 /*return*/, HiOutlineMoon];
                case 749: return [4 /*yield*/, import("react-icons/hi")];
                case 750:
                    HiOutlineMusicNote = (_b.sent()).HiOutlineMusicNote;
                    return [2 /*return*/, HiOutlineMusicNote];
                case 751: return [4 /*yield*/, import("react-icons/hi")];
                case 752:
                    HiOutlineNewspaper = (_b.sent()).HiOutlineNewspaper;
                    return [2 /*return*/, HiOutlineNewspaper];
                case 753: return [4 /*yield*/, import("react-icons/hi")];
                case 754:
                    HiOutlineOfficeBuilding = (_b.sent()).HiOutlineOfficeBuilding;
                    return [2 /*return*/, HiOutlineOfficeBuilding];
                case 755: return [4 /*yield*/, import("react-icons/hi")];
                case 756:
                    HiOutlinePaperAirplane = (_b.sent()).HiOutlinePaperAirplane;
                    return [2 /*return*/, HiOutlinePaperAirplane];
                case 757: return [4 /*yield*/, import("react-icons/hi")];
                case 758:
                    HiOutlinePaperClip = (_b.sent()).HiOutlinePaperClip;
                    return [2 /*return*/, HiOutlinePaperClip];
                case 759: return [4 /*yield*/, import("react-icons/hi")];
                case 760:
                    HiOutlinePause = (_b.sent()).HiOutlinePause;
                    return [2 /*return*/, HiOutlinePause];
                case 761: return [4 /*yield*/, import("react-icons/hi")];
                case 762:
                    HiOutlinePencilAlt = (_b.sent()).HiOutlinePencilAlt;
                    return [2 /*return*/, HiOutlinePencilAlt];
                case 763: return [4 /*yield*/, import("react-icons/hi")];
                case 764:
                    HiOutlinePencil = (_b.sent()).HiOutlinePencil;
                    return [2 /*return*/, HiOutlinePencil];
                case 765: return [4 /*yield*/, import("react-icons/hi")];
                case 766:
                    HiOutlinePhoneIncoming = (_b.sent()).HiOutlinePhoneIncoming;
                    return [2 /*return*/, HiOutlinePhoneIncoming];
                case 767: return [4 /*yield*/, import("react-icons/hi")];
                case 768:
                    HiOutlinePhoneMissedCall = (_b.sent()).HiOutlinePhoneMissedCall;
                    return [2 /*return*/, HiOutlinePhoneMissedCall];
                case 769: return [4 /*yield*/, import("react-icons/hi")];
                case 770:
                    HiOutlinePhoneOutgoing = (_b.sent()).HiOutlinePhoneOutgoing;
                    return [2 /*return*/, HiOutlinePhoneOutgoing];
                case 771: return [4 /*yield*/, import("react-icons/hi")];
                case 772:
                    HiOutlinePhone = (_b.sent()).HiOutlinePhone;
                    return [2 /*return*/, HiOutlinePhone];
                case 773: return [4 /*yield*/, import("react-icons/hi")];
                case 774:
                    HiOutlinePhotograph = (_b.sent()).HiOutlinePhotograph;
                    return [2 /*return*/, HiOutlinePhotograph];
                case 775: return [4 /*yield*/, import("react-icons/hi")];
                case 776:
                    HiOutlinePlay = (_b.sent()).HiOutlinePlay;
                    return [2 /*return*/, HiOutlinePlay];
                case 777: return [4 /*yield*/, import("react-icons/hi")];
                case 778:
                    HiOutlinePlusCircle = (_b.sent()).HiOutlinePlusCircle;
                    return [2 /*return*/, HiOutlinePlusCircle];
                case 779: return [4 /*yield*/, import("react-icons/hi")];
                case 780:
                    HiOutlinePlusSm = (_b.sent()).HiOutlinePlusSm;
                    return [2 /*return*/, HiOutlinePlusSm];
                case 781: return [4 /*yield*/, import("react-icons/hi")];
                case 782:
                    HiOutlinePlus = (_b.sent()).HiOutlinePlus;
                    return [2 /*return*/, HiOutlinePlus];
                case 783: return [4 /*yield*/, import("react-icons/hi")];
                case 784:
                    HiOutlinePresentationChartBar = (_b.sent()).HiOutlinePresentationChartBar;
                    return [2 /*return*/, HiOutlinePresentationChartBar];
                case 785: return [4 /*yield*/, import("react-icons/hi")];
                case 786:
                    HiOutlinePresentationChartLine = (_b.sent()).HiOutlinePresentationChartLine;
                    return [2 /*return*/, HiOutlinePresentationChartLine];
                case 787: return [4 /*yield*/, import("react-icons/hi")];
                case 788:
                    HiOutlinePrinter = (_b.sent()).HiOutlinePrinter;
                    return [2 /*return*/, HiOutlinePrinter];
                case 789: return [4 /*yield*/, import("react-icons/hi")];
                case 790:
                    HiOutlinePuzzle = (_b.sent()).HiOutlinePuzzle;
                    return [2 /*return*/, HiOutlinePuzzle];
                case 791: return [4 /*yield*/, import("react-icons/hi")];
                case 792:
                    HiOutlineQrcode = (_b.sent()).HiOutlineQrcode;
                    return [2 /*return*/, HiOutlineQrcode];
                case 793: return [4 /*yield*/, import("react-icons/hi")];
                case 794:
                    HiOutlineQuestionMarkCircle = (_b.sent()).HiOutlineQuestionMarkCircle;
                    return [2 /*return*/, HiOutlineQuestionMarkCircle];
                case 795: return [4 /*yield*/, import("react-icons/hi")];
                case 796:
                    HiOutlineReceiptRefund = (_b.sent()).HiOutlineReceiptRefund;
                    return [2 /*return*/, HiOutlineReceiptRefund];
                case 797: return [4 /*yield*/, import("react-icons/hi")];
                case 798:
                    HiOutlineReceiptTax = (_b.sent()).HiOutlineReceiptTax;
                    return [2 /*return*/, HiOutlineReceiptTax];
                case 799: return [4 /*yield*/, import("react-icons/hi")];
                case 800:
                    HiOutlineRefresh = (_b.sent()).HiOutlineRefresh;
                    return [2 /*return*/, HiOutlineRefresh];
                case 801: return [4 /*yield*/, import("react-icons/hi")];
                case 802:
                    HiOutlineReply = (_b.sent()).HiOutlineReply;
                    return [2 /*return*/, HiOutlineReply];
                case 803: return [4 /*yield*/, import("react-icons/hi")];
                case 804:
                    HiOutlineRewind = (_b.sent()).HiOutlineRewind;
                    return [2 /*return*/, HiOutlineRewind];
                case 805: return [4 /*yield*/, import("react-icons/hi")];
                case 806:
                    HiOutlineRss = (_b.sent()).HiOutlineRss;
                    return [2 /*return*/, HiOutlineRss];
                case 807: return [4 /*yield*/, import("react-icons/hi")];
                case 808:
                    HiOutlineSaveAs = (_b.sent()).HiOutlineSaveAs;
                    return [2 /*return*/, HiOutlineSaveAs];
                case 809: return [4 /*yield*/, import("react-icons/hi")];
                case 810:
                    HiOutlineSave = (_b.sent()).HiOutlineSave;
                    return [2 /*return*/, HiOutlineSave];
                case 811: return [4 /*yield*/, import("react-icons/hi")];
                case 812:
                    HiOutlineScale = (_b.sent()).HiOutlineScale;
                    return [2 /*return*/, HiOutlineScale];
                case 813: return [4 /*yield*/, import("react-icons/hi")];
                case 814:
                    HiOutlineScissors = (_b.sent()).HiOutlineScissors;
                    return [2 /*return*/, HiOutlineScissors];
                case 815: return [4 /*yield*/, import("react-icons/hi")];
                case 816:
                    HiOutlineSearchCircle = (_b.sent()).HiOutlineSearchCircle;
                    return [2 /*return*/, HiOutlineSearchCircle];
                case 817: return [4 /*yield*/, import("react-icons/hi")];
                case 818:
                    HiOutlineSearch = (_b.sent()).HiOutlineSearch;
                    return [2 /*return*/, HiOutlineSearch];
                case 819: return [4 /*yield*/, import("react-icons/hi")];
                case 820:
                    HiOutlineSelector = (_b.sent()).HiOutlineSelector;
                    return [2 /*return*/, HiOutlineSelector];
                case 821: return [4 /*yield*/, import("react-icons/hi")];
                case 822:
                    HiOutlineServer = (_b.sent()).HiOutlineServer;
                    return [2 /*return*/, HiOutlineServer];
                case 823: return [4 /*yield*/, import("react-icons/hi")];
                case 824:
                    HiOutlineShare = (_b.sent()).HiOutlineShare;
                    return [2 /*return*/, HiOutlineShare];
                case 825: return [4 /*yield*/, import("react-icons/hi")];
                case 826:
                    HiOutlineShieldCheck = (_b.sent()).HiOutlineShieldCheck;
                    return [2 /*return*/, HiOutlineShieldCheck];
                case 827: return [4 /*yield*/, import("react-icons/hi")];
                case 828:
                    HiOutlineShieldExclamation = (_b.sent()).HiOutlineShieldExclamation;
                    return [2 /*return*/, HiOutlineShieldExclamation];
                case 829: return [4 /*yield*/, import("react-icons/hi")];
                case 830:
                    HiOutlineShoppingBag = (_b.sent()).HiOutlineShoppingBag;
                    return [2 /*return*/, HiOutlineShoppingBag];
                case 831: return [4 /*yield*/, import("react-icons/hi")];
                case 832:
                    HiOutlineShoppingCart = (_b.sent()).HiOutlineShoppingCart;
                    return [2 /*return*/, HiOutlineShoppingCart];
                case 833: return [4 /*yield*/, import("react-icons/hi")];
                case 834:
                    HiOutlineSortAscending = (_b.sent()).HiOutlineSortAscending;
                    return [2 /*return*/, HiOutlineSortAscending];
                case 835: return [4 /*yield*/, import("react-icons/hi")];
                case 836:
                    HiOutlineSortDescending = (_b.sent()).HiOutlineSortDescending;
                    return [2 /*return*/, HiOutlineSortDescending];
                case 837: return [4 /*yield*/, import("react-icons/hi")];
                case 838:
                    HiOutlineSparkles = (_b.sent()).HiOutlineSparkles;
                    return [2 /*return*/, HiOutlineSparkles];
                case 839: return [4 /*yield*/, import("react-icons/hi")];
                case 840:
                    HiOutlineSpeakerphone = (_b.sent()).HiOutlineSpeakerphone;
                    return [2 /*return*/, HiOutlineSpeakerphone];
                case 841: return [4 /*yield*/, import("react-icons/hi")];
                case 842:
                    HiOutlineStar = (_b.sent()).HiOutlineStar;
                    return [2 /*return*/, HiOutlineStar];
                case 843: return [4 /*yield*/, import("react-icons/hi")];
                case 844:
                    HiOutlineStatusOffline = (_b.sent()).HiOutlineStatusOffline;
                    return [2 /*return*/, HiOutlineStatusOffline];
                case 845: return [4 /*yield*/, import("react-icons/hi")];
                case 846:
                    HiOutlineStatusOnline = (_b.sent()).HiOutlineStatusOnline;
                    return [2 /*return*/, HiOutlineStatusOnline];
                case 847: return [4 /*yield*/, import("react-icons/hi")];
                case 848:
                    HiOutlineStop = (_b.sent()).HiOutlineStop;
                    return [2 /*return*/, HiOutlineStop];
                case 849: return [4 /*yield*/, import("react-icons/hi")];
                case 850:
                    HiOutlineSun = (_b.sent()).HiOutlineSun;
                    return [2 /*return*/, HiOutlineSun];
                case 851: return [4 /*yield*/, import("react-icons/hi")];
                case 852:
                    HiOutlineSupport = (_b.sent()).HiOutlineSupport;
                    return [2 /*return*/, HiOutlineSupport];
                case 853: return [4 /*yield*/, import("react-icons/hi")];
                case 854:
                    HiOutlineSwitchHorizontal = (_b.sent()).HiOutlineSwitchHorizontal;
                    return [2 /*return*/, HiOutlineSwitchHorizontal];
                case 855: return [4 /*yield*/, import("react-icons/hi")];
                case 856:
                    HiOutlineSwitchVertical = (_b.sent()).HiOutlineSwitchVertical;
                    return [2 /*return*/, HiOutlineSwitchVertical];
                case 857: return [4 /*yield*/, import("react-icons/hi")];
                case 858:
                    HiOutlineTable = (_b.sent()).HiOutlineTable;
                    return [2 /*return*/, HiOutlineTable];
                case 859: return [4 /*yield*/, import("react-icons/hi")];
                case 860:
                    HiOutlineTag = (_b.sent()).HiOutlineTag;
                    return [2 /*return*/, HiOutlineTag];
                case 861: return [4 /*yield*/, import("react-icons/hi")];
                case 862:
                    HiOutlineTemplate = (_b.sent()).HiOutlineTemplate;
                    return [2 /*return*/, HiOutlineTemplate];
                case 863: return [4 /*yield*/, import("react-icons/hi")];
                case 864:
                    HiOutlineTerminal = (_b.sent()).HiOutlineTerminal;
                    return [2 /*return*/, HiOutlineTerminal];
                case 865: return [4 /*yield*/, import("react-icons/hi")];
                case 866:
                    HiOutlineThumbDown = (_b.sent()).HiOutlineThumbDown;
                    return [2 /*return*/, HiOutlineThumbDown];
                case 867: return [4 /*yield*/, import("react-icons/hi")];
                case 868:
                    HiOutlineThumbUp = (_b.sent()).HiOutlineThumbUp;
                    return [2 /*return*/, HiOutlineThumbUp];
                case 869: return [4 /*yield*/, import("react-icons/hi")];
                case 870:
                    HiOutlineTicket = (_b.sent()).HiOutlineTicket;
                    return [2 /*return*/, HiOutlineTicket];
                case 871: return [4 /*yield*/, import("react-icons/hi")];
                case 872:
                    HiOutlineTranslate = (_b.sent()).HiOutlineTranslate;
                    return [2 /*return*/, HiOutlineTranslate];
                case 873: return [4 /*yield*/, import("react-icons/hi")];
                case 874:
                    HiOutlineTrash = (_b.sent()).HiOutlineTrash;
                    return [2 /*return*/, HiOutlineTrash];
                case 875: return [4 /*yield*/, import("react-icons/hi")];
                case 876:
                    HiOutlineTrendingDown = (_b.sent()).HiOutlineTrendingDown;
                    return [2 /*return*/, HiOutlineTrendingDown];
                case 877: return [4 /*yield*/, import("react-icons/hi")];
                case 878:
                    HiOutlineTrendingUp = (_b.sent()).HiOutlineTrendingUp;
                    return [2 /*return*/, HiOutlineTrendingUp];
                case 879: return [4 /*yield*/, import("react-icons/hi")];
                case 880:
                    HiOutlineTruck = (_b.sent()).HiOutlineTruck;
                    return [2 /*return*/, HiOutlineTruck];
                case 881: return [4 /*yield*/, import("react-icons/hi")];
                case 882:
                    HiOutlineUpload = (_b.sent()).HiOutlineUpload;
                    return [2 /*return*/, HiOutlineUpload];
                case 883: return [4 /*yield*/, import("react-icons/hi")];
                case 884:
                    HiOutlineUserAdd = (_b.sent()).HiOutlineUserAdd;
                    return [2 /*return*/, HiOutlineUserAdd];
                case 885: return [4 /*yield*/, import("react-icons/hi")];
                case 886:
                    HiOutlineUserCircle = (_b.sent()).HiOutlineUserCircle;
                    return [2 /*return*/, HiOutlineUserCircle];
                case 887: return [4 /*yield*/, import("react-icons/hi")];
                case 888:
                    HiOutlineUserGroup = (_b.sent()).HiOutlineUserGroup;
                    return [2 /*return*/, HiOutlineUserGroup];
                case 889: return [4 /*yield*/, import("react-icons/hi")];
                case 890:
                    HiOutlineUserRemove = (_b.sent()).HiOutlineUserRemove;
                    return [2 /*return*/, HiOutlineUserRemove];
                case 891: return [4 /*yield*/, import("react-icons/hi")];
                case 892:
                    HiOutlineUser = (_b.sent()).HiOutlineUser;
                    return [2 /*return*/, HiOutlineUser];
                case 893: return [4 /*yield*/, import("react-icons/hi")];
                case 894:
                    HiOutlineUsers = (_b.sent()).HiOutlineUsers;
                    return [2 /*return*/, HiOutlineUsers];
                case 895: return [4 /*yield*/, import("react-icons/hi")];
                case 896:
                    HiOutlineVariable = (_b.sent()).HiOutlineVariable;
                    return [2 /*return*/, HiOutlineVariable];
                case 897: return [4 /*yield*/, import("react-icons/hi")];
                case 898:
                    HiOutlineVideoCamera = (_b.sent()).HiOutlineVideoCamera;
                    return [2 /*return*/, HiOutlineVideoCamera];
                case 899: return [4 /*yield*/, import("react-icons/hi")];
                case 900:
                    HiOutlineViewBoards = (_b.sent()).HiOutlineViewBoards;
                    return [2 /*return*/, HiOutlineViewBoards];
                case 901: return [4 /*yield*/, import("react-icons/hi")];
                case 902:
                    HiOutlineViewGridAdd = (_b.sent()).HiOutlineViewGridAdd;
                    return [2 /*return*/, HiOutlineViewGridAdd];
                case 903: return [4 /*yield*/, import("react-icons/hi")];
                case 904:
                    HiOutlineViewGrid = (_b.sent()).HiOutlineViewGrid;
                    return [2 /*return*/, HiOutlineViewGrid];
                case 905: return [4 /*yield*/, import("react-icons/hi")];
                case 906:
                    HiOutlineViewList = (_b.sent()).HiOutlineViewList;
                    return [2 /*return*/, HiOutlineViewList];
                case 907: return [4 /*yield*/, import("react-icons/hi")];
                case 908:
                    HiOutlineVolumeOff = (_b.sent()).HiOutlineVolumeOff;
                    return [2 /*return*/, HiOutlineVolumeOff];
                case 909: return [4 /*yield*/, import("react-icons/hi")];
                case 910:
                    HiOutlineVolumeUp = (_b.sent()).HiOutlineVolumeUp;
                    return [2 /*return*/, HiOutlineVolumeUp];
                case 911: return [4 /*yield*/, import("react-icons/hi")];
                case 912:
                    HiOutlineWifi = (_b.sent()).HiOutlineWifi;
                    return [2 /*return*/, HiOutlineWifi];
                case 913: return [4 /*yield*/, import("react-icons/hi")];
                case 914:
                    HiOutlineXCircle = (_b.sent()).HiOutlineXCircle;
                    return [2 /*return*/, HiOutlineXCircle];
                case 915: return [4 /*yield*/, import("react-icons/hi")];
                case 916:
                    HiOutlineX = (_b.sent()).HiOutlineX;
                    return [2 /*return*/, HiOutlineX];
                case 917: return [4 /*yield*/, import("react-icons/hi")];
                case 918:
                    HiOutlineZoomIn = (_b.sent()).HiOutlineZoomIn;
                    return [2 /*return*/, HiOutlineZoomIn];
                case 919: return [4 /*yield*/, import("react-icons/hi")];
                case 920:
                    HiOutlineZoomOut = (_b.sent()).HiOutlineZoomOut;
                    return [2 /*return*/, HiOutlineZoomOut];
                case 921: return [2 /*return*/];
            }
        });
    });
}
