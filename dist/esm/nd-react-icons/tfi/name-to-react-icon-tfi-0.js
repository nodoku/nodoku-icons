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
export function nameToReactIcon_tfi_0(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, TfiAgenda, TfiAlarmClock, TfiAlert, TfiAlignCenter, TfiAlignJustify, TfiAlignLeft, TfiAlignRight, TfiAnchor, TfiAndroid, TfiAngleDoubleDown, TfiAngleDoubleLeft, TfiAngleDoubleRight, TfiAngleDoubleUp, TfiAngleDown, TfiAngleLeft, TfiAngleRight, TfiAngleUp, TfiAnnouncement, TfiApple, TfiArchive, TfiArrowCircleDown, TfiArrowCircleLeft, TfiArrowCircleRight, TfiArrowCircleUp, TfiArrowDown, TfiArrowLeft, TfiArrowRight, TfiArrowTopLeft, TfiArrowTopRight, TfiArrowUp, TfiArrow, TfiArrowsCorner, TfiArrowsHorizontal, TfiArrowsVertical, TfiBackLeft, TfiBackRight, TfiBag, TfiBarChartAlt, TfiBarChart, TfiBasketball, TfiBell, TfiBlackboard, TfiBoltAlt, TfiBolt, TfiBook, TfiBookmarkAlt, TfiBookmark, TfiBriefcase, TfiBrushAlt, TfiBrush, TfiCalendar, TfiCamera, TfiCar, TfiCheckBox, TfiCheck, TfiClip, TfiClipboard, TfiClose, TfiCloudDown, TfiCloudUp, TfiCloud, TfiCommentAlt, TfiComment, TfiCommentsSmiley, TfiComments, TfiControlBackward, TfiControlEject, TfiControlForward, TfiControlPause, TfiControlPlay, TfiControlRecord, TfiControlShuffle, TfiControlSkipBackward, TfiControlSkipForward, TfiControlStop, TfiCreditCard, TfiCrown, TfiCss3, TfiCup, TfiCut, TfiDashboard, TfiDesktop, TfiDirectionAlt, TfiDirection, TfiDownload, TfiDribbble, TfiDropboxAlt, TfiDropbox, TfiDrupal, TfiEmail, TfiEnvelope, TfiEraser, TfiExchangeVertical, TfiExport, TfiEye, TfiFaceSad, TfiFaceSmile, TfiFacebook, TfiFile, TfiFiles, TfiFilter, TfiFlagAlt2, TfiFlagAlt, TfiFlag, TfiFlickrAlt, TfiFlickr, TfiFolder, TfiFullscreen, TfiGallery, TfiGame, TfiGift, TfiGithub, TfiGoogle, TfiHandDrag, TfiHandOpen, TfiHandPointDown, TfiHandPointLeft, TfiHandPointRight, TfiHandPointUp, TfiHandStop, TfiHarddrive, TfiHarddrives, TfiHeadphoneAlt, TfiHeadphone, TfiHeartBroken, TfiHeart, TfiHelpAlt, TfiHelp, TfiHome, TfiHtml5, TfiHummer, TfiIdBadge, TfiImage, TfiImport, TfiInfinite, TfiInfoAlt, TfiInfo, TfiInkPen, TfiInstagram, TfiItalic, TfiJoomla, TfiJsfiddle, TfiKey, TfiLayersAlt, TfiLayers, TfiLayoutAccordionList, TfiLayoutAccordionMerged, TfiLayoutAccordionSeparated, TfiLayoutColumn2Alt, TfiLayoutColumn2, TfiLayoutColumn3Alt, TfiLayoutColumn3, TfiLayoutColumn4Alt, TfiLayoutColumn4, TfiLayoutCtaBtnLeft, TfiLayoutCtaBtnRight, TfiLayoutCtaCenter, TfiLayoutCtaLeft, TfiLayoutCtaRight, TfiLayoutGrid2Alt, TfiLayoutGrid2Thumb, TfiLayoutGrid2, TfiLayoutGrid3Alt, TfiLayoutGrid3, TfiLayoutGrid4Alt, TfiLayoutGrid4, TfiLayoutLineSolid, TfiLayoutListLargeImage, TfiLayoutListPost, TfiLayoutListThumbAlt, TfiLayoutListThumb, TfiLayoutMediaCenterAlt, TfiLayoutMediaCenter, TfiLayoutMediaLeftAlt, TfiLayoutMediaLeft, TfiLayoutMediaOverlayAlt2, TfiLayoutMediaOverlayAlt, TfiLayoutMediaOverlay, TfiLayoutMediaRightAlt, TfiLayoutMediaRight, TfiLayoutMenuFull, TfiLayoutMenuSeparated, TfiLayoutMenuV, TfiLayoutMenu, TfiLayoutPlaceholder, TfiLayoutSidebar2, TfiLayoutSidebarLeft, TfiLayoutSidebarNone, TfiLayoutSidebarRight, TfiLayoutSliderAlt, TfiLayoutSlider, TfiLayoutTabMin, TfiLayoutTabV, TfiLayoutTabWindow, TfiLayoutTab, TfiLayoutWidthDefaultAlt, TfiLayoutWidthDefault, TfiLayoutWidthFull, TfiLayout, TfiLightBulb, TfiLineDashed, TfiLineDotted, TfiLineDouble, TfiLink, TfiLinkedin, TfiLinux, TfiListOl, TfiList, TfiLocationArrow, TfiLocationPin, TfiLock, TfiLoop, TfiMagnet, TfiMapAlt, TfiMap, TfiMarkerAlt, TfiMarker, TfiMedallAlt, TfiMedall, TfiMenuAlt, TfiMenu, TfiMicrophoneAlt, TfiMicrophone, TfiMicrosoftAlt, TfiMicrosoft, TfiMinus, TfiMobile, TfiMoney, TfiMoreAlt, TfiMore, TfiMouseAlt, TfiMouse, TfiMusicAlt, TfiMusic, TfiNa, TfiNewWindow, TfiNotepad, TfiPackage, TfiPaintBucket, TfiPaintRoller, TfiPalette, TfiPanel, TfiParagraph, TfiPencilAlt, TfiPencilAlt2, TfiPencil, TfiPieChart, TfiPinAlt, TfiPin, TfiPin2, TfiPinterestAlt, TfiPinterest, TfiPlug, TfiPlus, TfiPowerOff, TfiPrinter, TfiPulse, TfiQuoteLeft, TfiQuoteRight, TfiReceipt, TfiReddit, TfiReload, TfiRocket, TfiRssAlt, TfiRss, TfiRulerAlt2, TfiRulerAlt, TfiRulerPencil, TfiRuler, TfiSaveAlt, TfiSave, TfiSearch, TfiServer, TfiSettings, TfiShareAlt, TfiShare, TfiSharethisAlt, TfiSharethis, TfiShield, TfiShiftLeftAlt, TfiShiftLeft, TfiShiftRightAlt, TfiShiftRight, TfiShine, TfiShoppingCartFull, TfiShoppingCart, TfiShortcode, TfiSignal, TfiSkype, TfiSlice, TfiSmallcap, TfiSoundcloud, TfiSplitH, TfiSplitVAlt, TfiSplitV, TfiSpray, TfiStackOverflow, TfiStamp, TfiStar, TfiStatsDown, TfiStatsUp, TfiSupport, TfiTablet, TfiTag, TfiTarget, TfiText, TfiThemifyFaviconAlt, TfiThemifyFavicon, TfiThemifyLogo, TfiThought, TfiThumbDown, TfiThumbUp, TfiTicket, TfiTime, TfiTimer, TfiTrash, TfiTrello, TfiTruck, TfiTumblrAlt, TfiTumblr, TfiTwitterAlt, TfiTwitter, TfiUnderline, TfiUnlink, TfiUnlock, TfiUpload, TfiUppercase, TfiUser, TfiVector, TfiVideoCamera, TfiVideoClapper, TfiViewGrid, TfiViewListAlt, TfiViewList, TfiVimeoAlt, TfiVimeo, TfiVolume, TfiWallet, TfiWand, TfiWheelchair, TfiWidgetAlt, TfiWidget, TfiWidgetized, TfiWindow, TfiWordpress, TfiWorld, TfiWrite, TfiYahoo, TfiYoutube, TfiZip, TfiZoomIn, TfiZoomOut;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "tfi:TfiAgenda": return [3 /*break*/, 1];
                        case "tfi:TfiAlarmClock": return [3 /*break*/, 3];
                        case "tfi:TfiAlert": return [3 /*break*/, 5];
                        case "tfi:TfiAlignCenter": return [3 /*break*/, 7];
                        case "tfi:TfiAlignJustify": return [3 /*break*/, 9];
                        case "tfi:TfiAlignLeft": return [3 /*break*/, 11];
                        case "tfi:TfiAlignRight": return [3 /*break*/, 13];
                        case "tfi:TfiAnchor": return [3 /*break*/, 15];
                        case "tfi:TfiAndroid": return [3 /*break*/, 17];
                        case "tfi:TfiAngleDoubleDown": return [3 /*break*/, 19];
                        case "tfi:TfiAngleDoubleLeft": return [3 /*break*/, 21];
                        case "tfi:TfiAngleDoubleRight": return [3 /*break*/, 23];
                        case "tfi:TfiAngleDoubleUp": return [3 /*break*/, 25];
                        case "tfi:TfiAngleDown": return [3 /*break*/, 27];
                        case "tfi:TfiAngleLeft": return [3 /*break*/, 29];
                        case "tfi:TfiAngleRight": return [3 /*break*/, 31];
                        case "tfi:TfiAngleUp": return [3 /*break*/, 33];
                        case "tfi:TfiAnnouncement": return [3 /*break*/, 35];
                        case "tfi:TfiApple": return [3 /*break*/, 37];
                        case "tfi:TfiArchive": return [3 /*break*/, 39];
                        case "tfi:TfiArrowCircleDown": return [3 /*break*/, 41];
                        case "tfi:TfiArrowCircleLeft": return [3 /*break*/, 43];
                        case "tfi:TfiArrowCircleRight": return [3 /*break*/, 45];
                        case "tfi:TfiArrowCircleUp": return [3 /*break*/, 47];
                        case "tfi:TfiArrowDown": return [3 /*break*/, 49];
                        case "tfi:TfiArrowLeft": return [3 /*break*/, 51];
                        case "tfi:TfiArrowRight": return [3 /*break*/, 53];
                        case "tfi:TfiArrowTopLeft": return [3 /*break*/, 55];
                        case "tfi:TfiArrowTopRight": return [3 /*break*/, 57];
                        case "tfi:TfiArrowUp": return [3 /*break*/, 59];
                        case "tfi:TfiArrow": return [3 /*break*/, 61];
                        case "tfi:TfiArrowsCorner": return [3 /*break*/, 63];
                        case "tfi:TfiArrowsHorizontal": return [3 /*break*/, 65];
                        case "tfi:TfiArrowsVertical": return [3 /*break*/, 67];
                        case "tfi:TfiBackLeft": return [3 /*break*/, 69];
                        case "tfi:TfiBackRight": return [3 /*break*/, 71];
                        case "tfi:TfiBag": return [3 /*break*/, 73];
                        case "tfi:TfiBarChartAlt": return [3 /*break*/, 75];
                        case "tfi:TfiBarChart": return [3 /*break*/, 77];
                        case "tfi:TfiBasketball": return [3 /*break*/, 79];
                        case "tfi:TfiBell": return [3 /*break*/, 81];
                        case "tfi:TfiBlackboard": return [3 /*break*/, 83];
                        case "tfi:TfiBoltAlt": return [3 /*break*/, 85];
                        case "tfi:TfiBolt": return [3 /*break*/, 87];
                        case "tfi:TfiBook": return [3 /*break*/, 89];
                        case "tfi:TfiBookmarkAlt": return [3 /*break*/, 91];
                        case "tfi:TfiBookmark": return [3 /*break*/, 93];
                        case "tfi:TfiBriefcase": return [3 /*break*/, 95];
                        case "tfi:TfiBrushAlt": return [3 /*break*/, 97];
                        case "tfi:TfiBrush": return [3 /*break*/, 99];
                        case "tfi:TfiCalendar": return [3 /*break*/, 101];
                        case "tfi:TfiCamera": return [3 /*break*/, 103];
                        case "tfi:TfiCar": return [3 /*break*/, 105];
                        case "tfi:TfiCheckBox": return [3 /*break*/, 107];
                        case "tfi:TfiCheck": return [3 /*break*/, 109];
                        case "tfi:TfiClip": return [3 /*break*/, 111];
                        case "tfi:TfiClipboard": return [3 /*break*/, 113];
                        case "tfi:TfiClose": return [3 /*break*/, 115];
                        case "tfi:TfiCloudDown": return [3 /*break*/, 117];
                        case "tfi:TfiCloudUp": return [3 /*break*/, 119];
                        case "tfi:TfiCloud": return [3 /*break*/, 121];
                        case "tfi:TfiCommentAlt": return [3 /*break*/, 123];
                        case "tfi:TfiComment": return [3 /*break*/, 125];
                        case "tfi:TfiCommentsSmiley": return [3 /*break*/, 127];
                        case "tfi:TfiComments": return [3 /*break*/, 129];
                        case "tfi:TfiControlBackward": return [3 /*break*/, 131];
                        case "tfi:TfiControlEject": return [3 /*break*/, 133];
                        case "tfi:TfiControlForward": return [3 /*break*/, 135];
                        case "tfi:TfiControlPause": return [3 /*break*/, 137];
                        case "tfi:TfiControlPlay": return [3 /*break*/, 139];
                        case "tfi:TfiControlRecord": return [3 /*break*/, 141];
                        case "tfi:TfiControlShuffle": return [3 /*break*/, 143];
                        case "tfi:TfiControlSkipBackward": return [3 /*break*/, 145];
                        case "tfi:TfiControlSkipForward": return [3 /*break*/, 147];
                        case "tfi:TfiControlStop": return [3 /*break*/, 149];
                        case "tfi:TfiCreditCard": return [3 /*break*/, 151];
                        case "tfi:TfiCrown": return [3 /*break*/, 153];
                        case "tfi:TfiCss3": return [3 /*break*/, 155];
                        case "tfi:TfiCup": return [3 /*break*/, 157];
                        case "tfi:TfiCut": return [3 /*break*/, 159];
                        case "tfi:TfiDashboard": return [3 /*break*/, 161];
                        case "tfi:TfiDesktop": return [3 /*break*/, 163];
                        case "tfi:TfiDirectionAlt": return [3 /*break*/, 165];
                        case "tfi:TfiDirection": return [3 /*break*/, 167];
                        case "tfi:TfiDownload": return [3 /*break*/, 169];
                        case "tfi:TfiDribbble": return [3 /*break*/, 171];
                        case "tfi:TfiDropboxAlt": return [3 /*break*/, 173];
                        case "tfi:TfiDropbox": return [3 /*break*/, 175];
                        case "tfi:TfiDrupal": return [3 /*break*/, 177];
                        case "tfi:TfiEmail": return [3 /*break*/, 179];
                        case "tfi:TfiEnvelope": return [3 /*break*/, 181];
                        case "tfi:TfiEraser": return [3 /*break*/, 183];
                        case "tfi:TfiExchangeVertical": return [3 /*break*/, 185];
                        case "tfi:TfiExport": return [3 /*break*/, 187];
                        case "tfi:TfiEye": return [3 /*break*/, 189];
                        case "tfi:TfiFaceSad": return [3 /*break*/, 191];
                        case "tfi:TfiFaceSmile": return [3 /*break*/, 193];
                        case "tfi:TfiFacebook": return [3 /*break*/, 195];
                        case "tfi:TfiFile": return [3 /*break*/, 197];
                        case "tfi:TfiFiles": return [3 /*break*/, 199];
                        case "tfi:TfiFilter": return [3 /*break*/, 201];
                        case "tfi:TfiFlagAlt2": return [3 /*break*/, 203];
                        case "tfi:TfiFlagAlt": return [3 /*break*/, 205];
                        case "tfi:TfiFlag": return [3 /*break*/, 207];
                        case "tfi:TfiFlickrAlt": return [3 /*break*/, 209];
                        case "tfi:TfiFlickr": return [3 /*break*/, 211];
                        case "tfi:TfiFolder": return [3 /*break*/, 213];
                        case "tfi:TfiFullscreen": return [3 /*break*/, 215];
                        case "tfi:TfiGallery": return [3 /*break*/, 217];
                        case "tfi:TfiGame": return [3 /*break*/, 219];
                        case "tfi:TfiGift": return [3 /*break*/, 221];
                        case "tfi:TfiGithub": return [3 /*break*/, 223];
                        case "tfi:TfiGoogle": return [3 /*break*/, 225];
                        case "tfi:TfiHandDrag": return [3 /*break*/, 227];
                        case "tfi:TfiHandOpen": return [3 /*break*/, 229];
                        case "tfi:TfiHandPointDown": return [3 /*break*/, 231];
                        case "tfi:TfiHandPointLeft": return [3 /*break*/, 233];
                        case "tfi:TfiHandPointRight": return [3 /*break*/, 235];
                        case "tfi:TfiHandPointUp": return [3 /*break*/, 237];
                        case "tfi:TfiHandStop": return [3 /*break*/, 239];
                        case "tfi:TfiHarddrive": return [3 /*break*/, 241];
                        case "tfi:TfiHarddrives": return [3 /*break*/, 243];
                        case "tfi:TfiHeadphoneAlt": return [3 /*break*/, 245];
                        case "tfi:TfiHeadphone": return [3 /*break*/, 247];
                        case "tfi:TfiHeartBroken": return [3 /*break*/, 249];
                        case "tfi:TfiHeart": return [3 /*break*/, 251];
                        case "tfi:TfiHelpAlt": return [3 /*break*/, 253];
                        case "tfi:TfiHelp": return [3 /*break*/, 255];
                        case "tfi:TfiHome": return [3 /*break*/, 257];
                        case "tfi:TfiHtml5": return [3 /*break*/, 259];
                        case "tfi:TfiHummer": return [3 /*break*/, 261];
                        case "tfi:TfiIdBadge": return [3 /*break*/, 263];
                        case "tfi:TfiImage": return [3 /*break*/, 265];
                        case "tfi:TfiImport": return [3 /*break*/, 267];
                        case "tfi:TfiInfinite": return [3 /*break*/, 269];
                        case "tfi:TfiInfoAlt": return [3 /*break*/, 271];
                        case "tfi:TfiInfo": return [3 /*break*/, 273];
                        case "tfi:TfiInkPen": return [3 /*break*/, 275];
                        case "tfi:TfiInstagram": return [3 /*break*/, 277];
                        case "tfi:TfiItalic": return [3 /*break*/, 279];
                        case "tfi:TfiJoomla": return [3 /*break*/, 281];
                        case "tfi:TfiJsfiddle": return [3 /*break*/, 283];
                        case "tfi:TfiKey": return [3 /*break*/, 285];
                        case "tfi:TfiLayersAlt": return [3 /*break*/, 287];
                        case "tfi:TfiLayers": return [3 /*break*/, 289];
                        case "tfi:TfiLayoutAccordionList": return [3 /*break*/, 291];
                        case "tfi:TfiLayoutAccordionMerged": return [3 /*break*/, 293];
                        case "tfi:TfiLayoutAccordionSeparated": return [3 /*break*/, 295];
                        case "tfi:TfiLayoutColumn2Alt": return [3 /*break*/, 297];
                        case "tfi:TfiLayoutColumn2": return [3 /*break*/, 299];
                        case "tfi:TfiLayoutColumn3Alt": return [3 /*break*/, 301];
                        case "tfi:TfiLayoutColumn3": return [3 /*break*/, 303];
                        case "tfi:TfiLayoutColumn4Alt": return [3 /*break*/, 305];
                        case "tfi:TfiLayoutColumn4": return [3 /*break*/, 307];
                        case "tfi:TfiLayoutCtaBtnLeft": return [3 /*break*/, 309];
                        case "tfi:TfiLayoutCtaBtnRight": return [3 /*break*/, 311];
                        case "tfi:TfiLayoutCtaCenter": return [3 /*break*/, 313];
                        case "tfi:TfiLayoutCtaLeft": return [3 /*break*/, 315];
                        case "tfi:TfiLayoutCtaRight": return [3 /*break*/, 317];
                        case "tfi:TfiLayoutGrid2Alt": return [3 /*break*/, 319];
                        case "tfi:TfiLayoutGrid2Thumb": return [3 /*break*/, 321];
                        case "tfi:TfiLayoutGrid2": return [3 /*break*/, 323];
                        case "tfi:TfiLayoutGrid3Alt": return [3 /*break*/, 325];
                        case "tfi:TfiLayoutGrid3": return [3 /*break*/, 327];
                        case "tfi:TfiLayoutGrid4Alt": return [3 /*break*/, 329];
                        case "tfi:TfiLayoutGrid4": return [3 /*break*/, 331];
                        case "tfi:TfiLayoutLineSolid": return [3 /*break*/, 333];
                        case "tfi:TfiLayoutListLargeImage": return [3 /*break*/, 335];
                        case "tfi:TfiLayoutListPost": return [3 /*break*/, 337];
                        case "tfi:TfiLayoutListThumbAlt": return [3 /*break*/, 339];
                        case "tfi:TfiLayoutListThumb": return [3 /*break*/, 341];
                        case "tfi:TfiLayoutMediaCenterAlt": return [3 /*break*/, 343];
                        case "tfi:TfiLayoutMediaCenter": return [3 /*break*/, 345];
                        case "tfi:TfiLayoutMediaLeftAlt": return [3 /*break*/, 347];
                        case "tfi:TfiLayoutMediaLeft": return [3 /*break*/, 349];
                        case "tfi:TfiLayoutMediaOverlayAlt2": return [3 /*break*/, 351];
                        case "tfi:TfiLayoutMediaOverlayAlt": return [3 /*break*/, 353];
                        case "tfi:TfiLayoutMediaOverlay": return [3 /*break*/, 355];
                        case "tfi:TfiLayoutMediaRightAlt": return [3 /*break*/, 357];
                        case "tfi:TfiLayoutMediaRight": return [3 /*break*/, 359];
                        case "tfi:TfiLayoutMenuFull": return [3 /*break*/, 361];
                        case "tfi:TfiLayoutMenuSeparated": return [3 /*break*/, 363];
                        case "tfi:TfiLayoutMenuV": return [3 /*break*/, 365];
                        case "tfi:TfiLayoutMenu": return [3 /*break*/, 367];
                        case "tfi:TfiLayoutPlaceholder": return [3 /*break*/, 369];
                        case "tfi:TfiLayoutSidebar2": return [3 /*break*/, 371];
                        case "tfi:TfiLayoutSidebarLeft": return [3 /*break*/, 373];
                        case "tfi:TfiLayoutSidebarNone": return [3 /*break*/, 375];
                        case "tfi:TfiLayoutSidebarRight": return [3 /*break*/, 377];
                        case "tfi:TfiLayoutSliderAlt": return [3 /*break*/, 379];
                        case "tfi:TfiLayoutSlider": return [3 /*break*/, 381];
                        case "tfi:TfiLayoutTabMin": return [3 /*break*/, 383];
                        case "tfi:TfiLayoutTabV": return [3 /*break*/, 385];
                        case "tfi:TfiLayoutTabWindow": return [3 /*break*/, 387];
                        case "tfi:TfiLayoutTab": return [3 /*break*/, 389];
                        case "tfi:TfiLayoutWidthDefaultAlt": return [3 /*break*/, 391];
                        case "tfi:TfiLayoutWidthDefault": return [3 /*break*/, 393];
                        case "tfi:TfiLayoutWidthFull": return [3 /*break*/, 395];
                        case "tfi:TfiLayout": return [3 /*break*/, 397];
                        case "tfi:TfiLightBulb": return [3 /*break*/, 399];
                        case "tfi:TfiLineDashed": return [3 /*break*/, 401];
                        case "tfi:TfiLineDotted": return [3 /*break*/, 403];
                        case "tfi:TfiLineDouble": return [3 /*break*/, 405];
                        case "tfi:TfiLink": return [3 /*break*/, 407];
                        case "tfi:TfiLinkedin": return [3 /*break*/, 409];
                        case "tfi:TfiLinux": return [3 /*break*/, 411];
                        case "tfi:TfiListOl": return [3 /*break*/, 413];
                        case "tfi:TfiList": return [3 /*break*/, 415];
                        case "tfi:TfiLocationArrow": return [3 /*break*/, 417];
                        case "tfi:TfiLocationPin": return [3 /*break*/, 419];
                        case "tfi:TfiLock": return [3 /*break*/, 421];
                        case "tfi:TfiLoop": return [3 /*break*/, 423];
                        case "tfi:TfiMagnet": return [3 /*break*/, 425];
                        case "tfi:TfiMapAlt": return [3 /*break*/, 427];
                        case "tfi:TfiMap": return [3 /*break*/, 429];
                        case "tfi:TfiMarkerAlt": return [3 /*break*/, 431];
                        case "tfi:TfiMarker": return [3 /*break*/, 433];
                        case "tfi:TfiMedallAlt": return [3 /*break*/, 435];
                        case "tfi:TfiMedall": return [3 /*break*/, 437];
                        case "tfi:TfiMenuAlt": return [3 /*break*/, 439];
                        case "tfi:TfiMenu": return [3 /*break*/, 441];
                        case "tfi:TfiMicrophoneAlt": return [3 /*break*/, 443];
                        case "tfi:TfiMicrophone": return [3 /*break*/, 445];
                        case "tfi:TfiMicrosoftAlt": return [3 /*break*/, 447];
                        case "tfi:TfiMicrosoft": return [3 /*break*/, 449];
                        case "tfi:TfiMinus": return [3 /*break*/, 451];
                        case "tfi:TfiMobile": return [3 /*break*/, 453];
                        case "tfi:TfiMoney": return [3 /*break*/, 455];
                        case "tfi:TfiMoreAlt": return [3 /*break*/, 457];
                        case "tfi:TfiMore": return [3 /*break*/, 459];
                        case "tfi:TfiMouseAlt": return [3 /*break*/, 461];
                        case "tfi:TfiMouse": return [3 /*break*/, 463];
                        case "tfi:TfiMusicAlt": return [3 /*break*/, 465];
                        case "tfi:TfiMusic": return [3 /*break*/, 467];
                        case "tfi:TfiNa": return [3 /*break*/, 469];
                        case "tfi:TfiNewWindow": return [3 /*break*/, 471];
                        case "tfi:TfiNotepad": return [3 /*break*/, 473];
                        case "tfi:TfiPackage": return [3 /*break*/, 475];
                        case "tfi:TfiPaintBucket": return [3 /*break*/, 477];
                        case "tfi:TfiPaintRoller": return [3 /*break*/, 479];
                        case "tfi:TfiPalette": return [3 /*break*/, 481];
                        case "tfi:TfiPanel": return [3 /*break*/, 483];
                        case "tfi:TfiParagraph": return [3 /*break*/, 485];
                        case "tfi:TfiPencilAlt": return [3 /*break*/, 487];
                        case "tfi:TfiPencilAlt2": return [3 /*break*/, 489];
                        case "tfi:TfiPencil": return [3 /*break*/, 491];
                        case "tfi:TfiPieChart": return [3 /*break*/, 493];
                        case "tfi:TfiPinAlt": return [3 /*break*/, 495];
                        case "tfi:TfiPin": return [3 /*break*/, 497];
                        case "tfi:TfiPin2": return [3 /*break*/, 499];
                        case "tfi:TfiPinterestAlt": return [3 /*break*/, 501];
                        case "tfi:TfiPinterest": return [3 /*break*/, 503];
                        case "tfi:TfiPlug": return [3 /*break*/, 505];
                        case "tfi:TfiPlus": return [3 /*break*/, 507];
                        case "tfi:TfiPowerOff": return [3 /*break*/, 509];
                        case "tfi:TfiPrinter": return [3 /*break*/, 511];
                        case "tfi:TfiPulse": return [3 /*break*/, 513];
                        case "tfi:TfiQuoteLeft": return [3 /*break*/, 515];
                        case "tfi:TfiQuoteRight": return [3 /*break*/, 517];
                        case "tfi:TfiReceipt": return [3 /*break*/, 519];
                        case "tfi:TfiReddit": return [3 /*break*/, 521];
                        case "tfi:TfiReload": return [3 /*break*/, 523];
                        case "tfi:TfiRocket": return [3 /*break*/, 525];
                        case "tfi:TfiRssAlt": return [3 /*break*/, 527];
                        case "tfi:TfiRss": return [3 /*break*/, 529];
                        case "tfi:TfiRulerAlt2": return [3 /*break*/, 531];
                        case "tfi:TfiRulerAlt": return [3 /*break*/, 533];
                        case "tfi:TfiRulerPencil": return [3 /*break*/, 535];
                        case "tfi:TfiRuler": return [3 /*break*/, 537];
                        case "tfi:TfiSaveAlt": return [3 /*break*/, 539];
                        case "tfi:TfiSave": return [3 /*break*/, 541];
                        case "tfi:TfiSearch": return [3 /*break*/, 543];
                        case "tfi:TfiServer": return [3 /*break*/, 545];
                        case "tfi:TfiSettings": return [3 /*break*/, 547];
                        case "tfi:TfiShareAlt": return [3 /*break*/, 549];
                        case "tfi:TfiShare": return [3 /*break*/, 551];
                        case "tfi:TfiSharethisAlt": return [3 /*break*/, 553];
                        case "tfi:TfiSharethis": return [3 /*break*/, 555];
                        case "tfi:TfiShield": return [3 /*break*/, 557];
                        case "tfi:TfiShiftLeftAlt": return [3 /*break*/, 559];
                        case "tfi:TfiShiftLeft": return [3 /*break*/, 561];
                        case "tfi:TfiShiftRightAlt": return [3 /*break*/, 563];
                        case "tfi:TfiShiftRight": return [3 /*break*/, 565];
                        case "tfi:TfiShine": return [3 /*break*/, 567];
                        case "tfi:TfiShoppingCartFull": return [3 /*break*/, 569];
                        case "tfi:TfiShoppingCart": return [3 /*break*/, 571];
                        case "tfi:TfiShortcode": return [3 /*break*/, 573];
                        case "tfi:TfiSignal": return [3 /*break*/, 575];
                        case "tfi:TfiSkype": return [3 /*break*/, 577];
                        case "tfi:TfiSlice": return [3 /*break*/, 579];
                        case "tfi:TfiSmallcap": return [3 /*break*/, 581];
                        case "tfi:TfiSoundcloud": return [3 /*break*/, 583];
                        case "tfi:TfiSplitH": return [3 /*break*/, 585];
                        case "tfi:TfiSplitVAlt": return [3 /*break*/, 587];
                        case "tfi:TfiSplitV": return [3 /*break*/, 589];
                        case "tfi:TfiSpray": return [3 /*break*/, 591];
                        case "tfi:TfiStackOverflow": return [3 /*break*/, 593];
                        case "tfi:TfiStamp": return [3 /*break*/, 595];
                        case "tfi:TfiStar": return [3 /*break*/, 597];
                        case "tfi:TfiStatsDown": return [3 /*break*/, 599];
                        case "tfi:TfiStatsUp": return [3 /*break*/, 601];
                        case "tfi:TfiSupport": return [3 /*break*/, 603];
                        case "tfi:TfiTablet": return [3 /*break*/, 605];
                        case "tfi:TfiTag": return [3 /*break*/, 607];
                        case "tfi:TfiTarget": return [3 /*break*/, 609];
                        case "tfi:TfiText": return [3 /*break*/, 611];
                        case "tfi:TfiThemifyFaviconAlt": return [3 /*break*/, 613];
                        case "tfi:TfiThemifyFavicon": return [3 /*break*/, 615];
                        case "tfi:TfiThemifyLogo": return [3 /*break*/, 617];
                        case "tfi:TfiThought": return [3 /*break*/, 619];
                        case "tfi:TfiThumbDown": return [3 /*break*/, 621];
                        case "tfi:TfiThumbUp": return [3 /*break*/, 623];
                        case "tfi:TfiTicket": return [3 /*break*/, 625];
                        case "tfi:TfiTime": return [3 /*break*/, 627];
                        case "tfi:TfiTimer": return [3 /*break*/, 629];
                        case "tfi:TfiTrash": return [3 /*break*/, 631];
                        case "tfi:TfiTrello": return [3 /*break*/, 633];
                        case "tfi:TfiTruck": return [3 /*break*/, 635];
                        case "tfi:TfiTumblrAlt": return [3 /*break*/, 637];
                        case "tfi:TfiTumblr": return [3 /*break*/, 639];
                        case "tfi:TfiTwitterAlt": return [3 /*break*/, 641];
                        case "tfi:TfiTwitter": return [3 /*break*/, 643];
                        case "tfi:TfiUnderline": return [3 /*break*/, 645];
                        case "tfi:TfiUnlink": return [3 /*break*/, 647];
                        case "tfi:TfiUnlock": return [3 /*break*/, 649];
                        case "tfi:TfiUpload": return [3 /*break*/, 651];
                        case "tfi:TfiUppercase": return [3 /*break*/, 653];
                        case "tfi:TfiUser": return [3 /*break*/, 655];
                        case "tfi:TfiVector": return [3 /*break*/, 657];
                        case "tfi:TfiVideoCamera": return [3 /*break*/, 659];
                        case "tfi:TfiVideoClapper": return [3 /*break*/, 661];
                        case "tfi:TfiViewGrid": return [3 /*break*/, 663];
                        case "tfi:TfiViewListAlt": return [3 /*break*/, 665];
                        case "tfi:TfiViewList": return [3 /*break*/, 667];
                        case "tfi:TfiVimeoAlt": return [3 /*break*/, 669];
                        case "tfi:TfiVimeo": return [3 /*break*/, 671];
                        case "tfi:TfiVolume": return [3 /*break*/, 673];
                        case "tfi:TfiWallet": return [3 /*break*/, 675];
                        case "tfi:TfiWand": return [3 /*break*/, 677];
                        case "tfi:TfiWheelchair": return [3 /*break*/, 679];
                        case "tfi:TfiWidgetAlt": return [3 /*break*/, 681];
                        case "tfi:TfiWidget": return [3 /*break*/, 683];
                        case "tfi:TfiWidgetized": return [3 /*break*/, 685];
                        case "tfi:TfiWindow": return [3 /*break*/, 687];
                        case "tfi:TfiWordpress": return [3 /*break*/, 689];
                        case "tfi:TfiWorld": return [3 /*break*/, 691];
                        case "tfi:TfiWrite": return [3 /*break*/, 693];
                        case "tfi:TfiYahoo": return [3 /*break*/, 695];
                        case "tfi:TfiYoutube": return [3 /*break*/, 697];
                        case "tfi:TfiZip": return [3 /*break*/, 699];
                        case "tfi:TfiZoomIn": return [3 /*break*/, 701];
                        case "tfi:TfiZoomOut": return [3 /*break*/, 703];
                    }
                    return [3 /*break*/, 705];
                case 1: return [4 /*yield*/, import("react-icons/tfi")];
                case 2:
                    TfiAgenda = (_b.sent()).TfiAgenda;
                    return [2 /*return*/, TfiAgenda];
                case 3: return [4 /*yield*/, import("react-icons/tfi")];
                case 4:
                    TfiAlarmClock = (_b.sent()).TfiAlarmClock;
                    return [2 /*return*/, TfiAlarmClock];
                case 5: return [4 /*yield*/, import("react-icons/tfi")];
                case 6:
                    TfiAlert = (_b.sent()).TfiAlert;
                    return [2 /*return*/, TfiAlert];
                case 7: return [4 /*yield*/, import("react-icons/tfi")];
                case 8:
                    TfiAlignCenter = (_b.sent()).TfiAlignCenter;
                    return [2 /*return*/, TfiAlignCenter];
                case 9: return [4 /*yield*/, import("react-icons/tfi")];
                case 10:
                    TfiAlignJustify = (_b.sent()).TfiAlignJustify;
                    return [2 /*return*/, TfiAlignJustify];
                case 11: return [4 /*yield*/, import("react-icons/tfi")];
                case 12:
                    TfiAlignLeft = (_b.sent()).TfiAlignLeft;
                    return [2 /*return*/, TfiAlignLeft];
                case 13: return [4 /*yield*/, import("react-icons/tfi")];
                case 14:
                    TfiAlignRight = (_b.sent()).TfiAlignRight;
                    return [2 /*return*/, TfiAlignRight];
                case 15: return [4 /*yield*/, import("react-icons/tfi")];
                case 16:
                    TfiAnchor = (_b.sent()).TfiAnchor;
                    return [2 /*return*/, TfiAnchor];
                case 17: return [4 /*yield*/, import("react-icons/tfi")];
                case 18:
                    TfiAndroid = (_b.sent()).TfiAndroid;
                    return [2 /*return*/, TfiAndroid];
                case 19: return [4 /*yield*/, import("react-icons/tfi")];
                case 20:
                    TfiAngleDoubleDown = (_b.sent()).TfiAngleDoubleDown;
                    return [2 /*return*/, TfiAngleDoubleDown];
                case 21: return [4 /*yield*/, import("react-icons/tfi")];
                case 22:
                    TfiAngleDoubleLeft = (_b.sent()).TfiAngleDoubleLeft;
                    return [2 /*return*/, TfiAngleDoubleLeft];
                case 23: return [4 /*yield*/, import("react-icons/tfi")];
                case 24:
                    TfiAngleDoubleRight = (_b.sent()).TfiAngleDoubleRight;
                    return [2 /*return*/, TfiAngleDoubleRight];
                case 25: return [4 /*yield*/, import("react-icons/tfi")];
                case 26:
                    TfiAngleDoubleUp = (_b.sent()).TfiAngleDoubleUp;
                    return [2 /*return*/, TfiAngleDoubleUp];
                case 27: return [4 /*yield*/, import("react-icons/tfi")];
                case 28:
                    TfiAngleDown = (_b.sent()).TfiAngleDown;
                    return [2 /*return*/, TfiAngleDown];
                case 29: return [4 /*yield*/, import("react-icons/tfi")];
                case 30:
                    TfiAngleLeft = (_b.sent()).TfiAngleLeft;
                    return [2 /*return*/, TfiAngleLeft];
                case 31: return [4 /*yield*/, import("react-icons/tfi")];
                case 32:
                    TfiAngleRight = (_b.sent()).TfiAngleRight;
                    return [2 /*return*/, TfiAngleRight];
                case 33: return [4 /*yield*/, import("react-icons/tfi")];
                case 34:
                    TfiAngleUp = (_b.sent()).TfiAngleUp;
                    return [2 /*return*/, TfiAngleUp];
                case 35: return [4 /*yield*/, import("react-icons/tfi")];
                case 36:
                    TfiAnnouncement = (_b.sent()).TfiAnnouncement;
                    return [2 /*return*/, TfiAnnouncement];
                case 37: return [4 /*yield*/, import("react-icons/tfi")];
                case 38:
                    TfiApple = (_b.sent()).TfiApple;
                    return [2 /*return*/, TfiApple];
                case 39: return [4 /*yield*/, import("react-icons/tfi")];
                case 40:
                    TfiArchive = (_b.sent()).TfiArchive;
                    return [2 /*return*/, TfiArchive];
                case 41: return [4 /*yield*/, import("react-icons/tfi")];
                case 42:
                    TfiArrowCircleDown = (_b.sent()).TfiArrowCircleDown;
                    return [2 /*return*/, TfiArrowCircleDown];
                case 43: return [4 /*yield*/, import("react-icons/tfi")];
                case 44:
                    TfiArrowCircleLeft = (_b.sent()).TfiArrowCircleLeft;
                    return [2 /*return*/, TfiArrowCircleLeft];
                case 45: return [4 /*yield*/, import("react-icons/tfi")];
                case 46:
                    TfiArrowCircleRight = (_b.sent()).TfiArrowCircleRight;
                    return [2 /*return*/, TfiArrowCircleRight];
                case 47: return [4 /*yield*/, import("react-icons/tfi")];
                case 48:
                    TfiArrowCircleUp = (_b.sent()).TfiArrowCircleUp;
                    return [2 /*return*/, TfiArrowCircleUp];
                case 49: return [4 /*yield*/, import("react-icons/tfi")];
                case 50:
                    TfiArrowDown = (_b.sent()).TfiArrowDown;
                    return [2 /*return*/, TfiArrowDown];
                case 51: return [4 /*yield*/, import("react-icons/tfi")];
                case 52:
                    TfiArrowLeft = (_b.sent()).TfiArrowLeft;
                    return [2 /*return*/, TfiArrowLeft];
                case 53: return [4 /*yield*/, import("react-icons/tfi")];
                case 54:
                    TfiArrowRight = (_b.sent()).TfiArrowRight;
                    return [2 /*return*/, TfiArrowRight];
                case 55: return [4 /*yield*/, import("react-icons/tfi")];
                case 56:
                    TfiArrowTopLeft = (_b.sent()).TfiArrowTopLeft;
                    return [2 /*return*/, TfiArrowTopLeft];
                case 57: return [4 /*yield*/, import("react-icons/tfi")];
                case 58:
                    TfiArrowTopRight = (_b.sent()).TfiArrowTopRight;
                    return [2 /*return*/, TfiArrowTopRight];
                case 59: return [4 /*yield*/, import("react-icons/tfi")];
                case 60:
                    TfiArrowUp = (_b.sent()).TfiArrowUp;
                    return [2 /*return*/, TfiArrowUp];
                case 61: return [4 /*yield*/, import("react-icons/tfi")];
                case 62:
                    TfiArrow = (_b.sent()).TfiArrow;
                    return [2 /*return*/, TfiArrow];
                case 63: return [4 /*yield*/, import("react-icons/tfi")];
                case 64:
                    TfiArrowsCorner = (_b.sent()).TfiArrowsCorner;
                    return [2 /*return*/, TfiArrowsCorner];
                case 65: return [4 /*yield*/, import("react-icons/tfi")];
                case 66:
                    TfiArrowsHorizontal = (_b.sent()).TfiArrowsHorizontal;
                    return [2 /*return*/, TfiArrowsHorizontal];
                case 67: return [4 /*yield*/, import("react-icons/tfi")];
                case 68:
                    TfiArrowsVertical = (_b.sent()).TfiArrowsVertical;
                    return [2 /*return*/, TfiArrowsVertical];
                case 69: return [4 /*yield*/, import("react-icons/tfi")];
                case 70:
                    TfiBackLeft = (_b.sent()).TfiBackLeft;
                    return [2 /*return*/, TfiBackLeft];
                case 71: return [4 /*yield*/, import("react-icons/tfi")];
                case 72:
                    TfiBackRight = (_b.sent()).TfiBackRight;
                    return [2 /*return*/, TfiBackRight];
                case 73: return [4 /*yield*/, import("react-icons/tfi")];
                case 74:
                    TfiBag = (_b.sent()).TfiBag;
                    return [2 /*return*/, TfiBag];
                case 75: return [4 /*yield*/, import("react-icons/tfi")];
                case 76:
                    TfiBarChartAlt = (_b.sent()).TfiBarChartAlt;
                    return [2 /*return*/, TfiBarChartAlt];
                case 77: return [4 /*yield*/, import("react-icons/tfi")];
                case 78:
                    TfiBarChart = (_b.sent()).TfiBarChart;
                    return [2 /*return*/, TfiBarChart];
                case 79: return [4 /*yield*/, import("react-icons/tfi")];
                case 80:
                    TfiBasketball = (_b.sent()).TfiBasketball;
                    return [2 /*return*/, TfiBasketball];
                case 81: return [4 /*yield*/, import("react-icons/tfi")];
                case 82:
                    TfiBell = (_b.sent()).TfiBell;
                    return [2 /*return*/, TfiBell];
                case 83: return [4 /*yield*/, import("react-icons/tfi")];
                case 84:
                    TfiBlackboard = (_b.sent()).TfiBlackboard;
                    return [2 /*return*/, TfiBlackboard];
                case 85: return [4 /*yield*/, import("react-icons/tfi")];
                case 86:
                    TfiBoltAlt = (_b.sent()).TfiBoltAlt;
                    return [2 /*return*/, TfiBoltAlt];
                case 87: return [4 /*yield*/, import("react-icons/tfi")];
                case 88:
                    TfiBolt = (_b.sent()).TfiBolt;
                    return [2 /*return*/, TfiBolt];
                case 89: return [4 /*yield*/, import("react-icons/tfi")];
                case 90:
                    TfiBook = (_b.sent()).TfiBook;
                    return [2 /*return*/, TfiBook];
                case 91: return [4 /*yield*/, import("react-icons/tfi")];
                case 92:
                    TfiBookmarkAlt = (_b.sent()).TfiBookmarkAlt;
                    return [2 /*return*/, TfiBookmarkAlt];
                case 93: return [4 /*yield*/, import("react-icons/tfi")];
                case 94:
                    TfiBookmark = (_b.sent()).TfiBookmark;
                    return [2 /*return*/, TfiBookmark];
                case 95: return [4 /*yield*/, import("react-icons/tfi")];
                case 96:
                    TfiBriefcase = (_b.sent()).TfiBriefcase;
                    return [2 /*return*/, TfiBriefcase];
                case 97: return [4 /*yield*/, import("react-icons/tfi")];
                case 98:
                    TfiBrushAlt = (_b.sent()).TfiBrushAlt;
                    return [2 /*return*/, TfiBrushAlt];
                case 99: return [4 /*yield*/, import("react-icons/tfi")];
                case 100:
                    TfiBrush = (_b.sent()).TfiBrush;
                    return [2 /*return*/, TfiBrush];
                case 101: return [4 /*yield*/, import("react-icons/tfi")];
                case 102:
                    TfiCalendar = (_b.sent()).TfiCalendar;
                    return [2 /*return*/, TfiCalendar];
                case 103: return [4 /*yield*/, import("react-icons/tfi")];
                case 104:
                    TfiCamera = (_b.sent()).TfiCamera;
                    return [2 /*return*/, TfiCamera];
                case 105: return [4 /*yield*/, import("react-icons/tfi")];
                case 106:
                    TfiCar = (_b.sent()).TfiCar;
                    return [2 /*return*/, TfiCar];
                case 107: return [4 /*yield*/, import("react-icons/tfi")];
                case 108:
                    TfiCheckBox = (_b.sent()).TfiCheckBox;
                    return [2 /*return*/, TfiCheckBox];
                case 109: return [4 /*yield*/, import("react-icons/tfi")];
                case 110:
                    TfiCheck = (_b.sent()).TfiCheck;
                    return [2 /*return*/, TfiCheck];
                case 111: return [4 /*yield*/, import("react-icons/tfi")];
                case 112:
                    TfiClip = (_b.sent()).TfiClip;
                    return [2 /*return*/, TfiClip];
                case 113: return [4 /*yield*/, import("react-icons/tfi")];
                case 114:
                    TfiClipboard = (_b.sent()).TfiClipboard;
                    return [2 /*return*/, TfiClipboard];
                case 115: return [4 /*yield*/, import("react-icons/tfi")];
                case 116:
                    TfiClose = (_b.sent()).TfiClose;
                    return [2 /*return*/, TfiClose];
                case 117: return [4 /*yield*/, import("react-icons/tfi")];
                case 118:
                    TfiCloudDown = (_b.sent()).TfiCloudDown;
                    return [2 /*return*/, TfiCloudDown];
                case 119: return [4 /*yield*/, import("react-icons/tfi")];
                case 120:
                    TfiCloudUp = (_b.sent()).TfiCloudUp;
                    return [2 /*return*/, TfiCloudUp];
                case 121: return [4 /*yield*/, import("react-icons/tfi")];
                case 122:
                    TfiCloud = (_b.sent()).TfiCloud;
                    return [2 /*return*/, TfiCloud];
                case 123: return [4 /*yield*/, import("react-icons/tfi")];
                case 124:
                    TfiCommentAlt = (_b.sent()).TfiCommentAlt;
                    return [2 /*return*/, TfiCommentAlt];
                case 125: return [4 /*yield*/, import("react-icons/tfi")];
                case 126:
                    TfiComment = (_b.sent()).TfiComment;
                    return [2 /*return*/, TfiComment];
                case 127: return [4 /*yield*/, import("react-icons/tfi")];
                case 128:
                    TfiCommentsSmiley = (_b.sent()).TfiCommentsSmiley;
                    return [2 /*return*/, TfiCommentsSmiley];
                case 129: return [4 /*yield*/, import("react-icons/tfi")];
                case 130:
                    TfiComments = (_b.sent()).TfiComments;
                    return [2 /*return*/, TfiComments];
                case 131: return [4 /*yield*/, import("react-icons/tfi")];
                case 132:
                    TfiControlBackward = (_b.sent()).TfiControlBackward;
                    return [2 /*return*/, TfiControlBackward];
                case 133: return [4 /*yield*/, import("react-icons/tfi")];
                case 134:
                    TfiControlEject = (_b.sent()).TfiControlEject;
                    return [2 /*return*/, TfiControlEject];
                case 135: return [4 /*yield*/, import("react-icons/tfi")];
                case 136:
                    TfiControlForward = (_b.sent()).TfiControlForward;
                    return [2 /*return*/, TfiControlForward];
                case 137: return [4 /*yield*/, import("react-icons/tfi")];
                case 138:
                    TfiControlPause = (_b.sent()).TfiControlPause;
                    return [2 /*return*/, TfiControlPause];
                case 139: return [4 /*yield*/, import("react-icons/tfi")];
                case 140:
                    TfiControlPlay = (_b.sent()).TfiControlPlay;
                    return [2 /*return*/, TfiControlPlay];
                case 141: return [4 /*yield*/, import("react-icons/tfi")];
                case 142:
                    TfiControlRecord = (_b.sent()).TfiControlRecord;
                    return [2 /*return*/, TfiControlRecord];
                case 143: return [4 /*yield*/, import("react-icons/tfi")];
                case 144:
                    TfiControlShuffle = (_b.sent()).TfiControlShuffle;
                    return [2 /*return*/, TfiControlShuffle];
                case 145: return [4 /*yield*/, import("react-icons/tfi")];
                case 146:
                    TfiControlSkipBackward = (_b.sent()).TfiControlSkipBackward;
                    return [2 /*return*/, TfiControlSkipBackward];
                case 147: return [4 /*yield*/, import("react-icons/tfi")];
                case 148:
                    TfiControlSkipForward = (_b.sent()).TfiControlSkipForward;
                    return [2 /*return*/, TfiControlSkipForward];
                case 149: return [4 /*yield*/, import("react-icons/tfi")];
                case 150:
                    TfiControlStop = (_b.sent()).TfiControlStop;
                    return [2 /*return*/, TfiControlStop];
                case 151: return [4 /*yield*/, import("react-icons/tfi")];
                case 152:
                    TfiCreditCard = (_b.sent()).TfiCreditCard;
                    return [2 /*return*/, TfiCreditCard];
                case 153: return [4 /*yield*/, import("react-icons/tfi")];
                case 154:
                    TfiCrown = (_b.sent()).TfiCrown;
                    return [2 /*return*/, TfiCrown];
                case 155: return [4 /*yield*/, import("react-icons/tfi")];
                case 156:
                    TfiCss3 = (_b.sent()).TfiCss3;
                    return [2 /*return*/, TfiCss3];
                case 157: return [4 /*yield*/, import("react-icons/tfi")];
                case 158:
                    TfiCup = (_b.sent()).TfiCup;
                    return [2 /*return*/, TfiCup];
                case 159: return [4 /*yield*/, import("react-icons/tfi")];
                case 160:
                    TfiCut = (_b.sent()).TfiCut;
                    return [2 /*return*/, TfiCut];
                case 161: return [4 /*yield*/, import("react-icons/tfi")];
                case 162:
                    TfiDashboard = (_b.sent()).TfiDashboard;
                    return [2 /*return*/, TfiDashboard];
                case 163: return [4 /*yield*/, import("react-icons/tfi")];
                case 164:
                    TfiDesktop = (_b.sent()).TfiDesktop;
                    return [2 /*return*/, TfiDesktop];
                case 165: return [4 /*yield*/, import("react-icons/tfi")];
                case 166:
                    TfiDirectionAlt = (_b.sent()).TfiDirectionAlt;
                    return [2 /*return*/, TfiDirectionAlt];
                case 167: return [4 /*yield*/, import("react-icons/tfi")];
                case 168:
                    TfiDirection = (_b.sent()).TfiDirection;
                    return [2 /*return*/, TfiDirection];
                case 169: return [4 /*yield*/, import("react-icons/tfi")];
                case 170:
                    TfiDownload = (_b.sent()).TfiDownload;
                    return [2 /*return*/, TfiDownload];
                case 171: return [4 /*yield*/, import("react-icons/tfi")];
                case 172:
                    TfiDribbble = (_b.sent()).TfiDribbble;
                    return [2 /*return*/, TfiDribbble];
                case 173: return [4 /*yield*/, import("react-icons/tfi")];
                case 174:
                    TfiDropboxAlt = (_b.sent()).TfiDropboxAlt;
                    return [2 /*return*/, TfiDropboxAlt];
                case 175: return [4 /*yield*/, import("react-icons/tfi")];
                case 176:
                    TfiDropbox = (_b.sent()).TfiDropbox;
                    return [2 /*return*/, TfiDropbox];
                case 177: return [4 /*yield*/, import("react-icons/tfi")];
                case 178:
                    TfiDrupal = (_b.sent()).TfiDrupal;
                    return [2 /*return*/, TfiDrupal];
                case 179: return [4 /*yield*/, import("react-icons/tfi")];
                case 180:
                    TfiEmail = (_b.sent()).TfiEmail;
                    return [2 /*return*/, TfiEmail];
                case 181: return [4 /*yield*/, import("react-icons/tfi")];
                case 182:
                    TfiEnvelope = (_b.sent()).TfiEnvelope;
                    return [2 /*return*/, TfiEnvelope];
                case 183: return [4 /*yield*/, import("react-icons/tfi")];
                case 184:
                    TfiEraser = (_b.sent()).TfiEraser;
                    return [2 /*return*/, TfiEraser];
                case 185: return [4 /*yield*/, import("react-icons/tfi")];
                case 186:
                    TfiExchangeVertical = (_b.sent()).TfiExchangeVertical;
                    return [2 /*return*/, TfiExchangeVertical];
                case 187: return [4 /*yield*/, import("react-icons/tfi")];
                case 188:
                    TfiExport = (_b.sent()).TfiExport;
                    return [2 /*return*/, TfiExport];
                case 189: return [4 /*yield*/, import("react-icons/tfi")];
                case 190:
                    TfiEye = (_b.sent()).TfiEye;
                    return [2 /*return*/, TfiEye];
                case 191: return [4 /*yield*/, import("react-icons/tfi")];
                case 192:
                    TfiFaceSad = (_b.sent()).TfiFaceSad;
                    return [2 /*return*/, TfiFaceSad];
                case 193: return [4 /*yield*/, import("react-icons/tfi")];
                case 194:
                    TfiFaceSmile = (_b.sent()).TfiFaceSmile;
                    return [2 /*return*/, TfiFaceSmile];
                case 195: return [4 /*yield*/, import("react-icons/tfi")];
                case 196:
                    TfiFacebook = (_b.sent()).TfiFacebook;
                    return [2 /*return*/, TfiFacebook];
                case 197: return [4 /*yield*/, import("react-icons/tfi")];
                case 198:
                    TfiFile = (_b.sent()).TfiFile;
                    return [2 /*return*/, TfiFile];
                case 199: return [4 /*yield*/, import("react-icons/tfi")];
                case 200:
                    TfiFiles = (_b.sent()).TfiFiles;
                    return [2 /*return*/, TfiFiles];
                case 201: return [4 /*yield*/, import("react-icons/tfi")];
                case 202:
                    TfiFilter = (_b.sent()).TfiFilter;
                    return [2 /*return*/, TfiFilter];
                case 203: return [4 /*yield*/, import("react-icons/tfi")];
                case 204:
                    TfiFlagAlt2 = (_b.sent()).TfiFlagAlt2;
                    return [2 /*return*/, TfiFlagAlt2];
                case 205: return [4 /*yield*/, import("react-icons/tfi")];
                case 206:
                    TfiFlagAlt = (_b.sent()).TfiFlagAlt;
                    return [2 /*return*/, TfiFlagAlt];
                case 207: return [4 /*yield*/, import("react-icons/tfi")];
                case 208:
                    TfiFlag = (_b.sent()).TfiFlag;
                    return [2 /*return*/, TfiFlag];
                case 209: return [4 /*yield*/, import("react-icons/tfi")];
                case 210:
                    TfiFlickrAlt = (_b.sent()).TfiFlickrAlt;
                    return [2 /*return*/, TfiFlickrAlt];
                case 211: return [4 /*yield*/, import("react-icons/tfi")];
                case 212:
                    TfiFlickr = (_b.sent()).TfiFlickr;
                    return [2 /*return*/, TfiFlickr];
                case 213: return [4 /*yield*/, import("react-icons/tfi")];
                case 214:
                    TfiFolder = (_b.sent()).TfiFolder;
                    return [2 /*return*/, TfiFolder];
                case 215: return [4 /*yield*/, import("react-icons/tfi")];
                case 216:
                    TfiFullscreen = (_b.sent()).TfiFullscreen;
                    return [2 /*return*/, TfiFullscreen];
                case 217: return [4 /*yield*/, import("react-icons/tfi")];
                case 218:
                    TfiGallery = (_b.sent()).TfiGallery;
                    return [2 /*return*/, TfiGallery];
                case 219: return [4 /*yield*/, import("react-icons/tfi")];
                case 220:
                    TfiGame = (_b.sent()).TfiGame;
                    return [2 /*return*/, TfiGame];
                case 221: return [4 /*yield*/, import("react-icons/tfi")];
                case 222:
                    TfiGift = (_b.sent()).TfiGift;
                    return [2 /*return*/, TfiGift];
                case 223: return [4 /*yield*/, import("react-icons/tfi")];
                case 224:
                    TfiGithub = (_b.sent()).TfiGithub;
                    return [2 /*return*/, TfiGithub];
                case 225: return [4 /*yield*/, import("react-icons/tfi")];
                case 226:
                    TfiGoogle = (_b.sent()).TfiGoogle;
                    return [2 /*return*/, TfiGoogle];
                case 227: return [4 /*yield*/, import("react-icons/tfi")];
                case 228:
                    TfiHandDrag = (_b.sent()).TfiHandDrag;
                    return [2 /*return*/, TfiHandDrag];
                case 229: return [4 /*yield*/, import("react-icons/tfi")];
                case 230:
                    TfiHandOpen = (_b.sent()).TfiHandOpen;
                    return [2 /*return*/, TfiHandOpen];
                case 231: return [4 /*yield*/, import("react-icons/tfi")];
                case 232:
                    TfiHandPointDown = (_b.sent()).TfiHandPointDown;
                    return [2 /*return*/, TfiHandPointDown];
                case 233: return [4 /*yield*/, import("react-icons/tfi")];
                case 234:
                    TfiHandPointLeft = (_b.sent()).TfiHandPointLeft;
                    return [2 /*return*/, TfiHandPointLeft];
                case 235: return [4 /*yield*/, import("react-icons/tfi")];
                case 236:
                    TfiHandPointRight = (_b.sent()).TfiHandPointRight;
                    return [2 /*return*/, TfiHandPointRight];
                case 237: return [4 /*yield*/, import("react-icons/tfi")];
                case 238:
                    TfiHandPointUp = (_b.sent()).TfiHandPointUp;
                    return [2 /*return*/, TfiHandPointUp];
                case 239: return [4 /*yield*/, import("react-icons/tfi")];
                case 240:
                    TfiHandStop = (_b.sent()).TfiHandStop;
                    return [2 /*return*/, TfiHandStop];
                case 241: return [4 /*yield*/, import("react-icons/tfi")];
                case 242:
                    TfiHarddrive = (_b.sent()).TfiHarddrive;
                    return [2 /*return*/, TfiHarddrive];
                case 243: return [4 /*yield*/, import("react-icons/tfi")];
                case 244:
                    TfiHarddrives = (_b.sent()).TfiHarddrives;
                    return [2 /*return*/, TfiHarddrives];
                case 245: return [4 /*yield*/, import("react-icons/tfi")];
                case 246:
                    TfiHeadphoneAlt = (_b.sent()).TfiHeadphoneAlt;
                    return [2 /*return*/, TfiHeadphoneAlt];
                case 247: return [4 /*yield*/, import("react-icons/tfi")];
                case 248:
                    TfiHeadphone = (_b.sent()).TfiHeadphone;
                    return [2 /*return*/, TfiHeadphone];
                case 249: return [4 /*yield*/, import("react-icons/tfi")];
                case 250:
                    TfiHeartBroken = (_b.sent()).TfiHeartBroken;
                    return [2 /*return*/, TfiHeartBroken];
                case 251: return [4 /*yield*/, import("react-icons/tfi")];
                case 252:
                    TfiHeart = (_b.sent()).TfiHeart;
                    return [2 /*return*/, TfiHeart];
                case 253: return [4 /*yield*/, import("react-icons/tfi")];
                case 254:
                    TfiHelpAlt = (_b.sent()).TfiHelpAlt;
                    return [2 /*return*/, TfiHelpAlt];
                case 255: return [4 /*yield*/, import("react-icons/tfi")];
                case 256:
                    TfiHelp = (_b.sent()).TfiHelp;
                    return [2 /*return*/, TfiHelp];
                case 257: return [4 /*yield*/, import("react-icons/tfi")];
                case 258:
                    TfiHome = (_b.sent()).TfiHome;
                    return [2 /*return*/, TfiHome];
                case 259: return [4 /*yield*/, import("react-icons/tfi")];
                case 260:
                    TfiHtml5 = (_b.sent()).TfiHtml5;
                    return [2 /*return*/, TfiHtml5];
                case 261: return [4 /*yield*/, import("react-icons/tfi")];
                case 262:
                    TfiHummer = (_b.sent()).TfiHummer;
                    return [2 /*return*/, TfiHummer];
                case 263: return [4 /*yield*/, import("react-icons/tfi")];
                case 264:
                    TfiIdBadge = (_b.sent()).TfiIdBadge;
                    return [2 /*return*/, TfiIdBadge];
                case 265: return [4 /*yield*/, import("react-icons/tfi")];
                case 266:
                    TfiImage = (_b.sent()).TfiImage;
                    return [2 /*return*/, TfiImage];
                case 267: return [4 /*yield*/, import("react-icons/tfi")];
                case 268:
                    TfiImport = (_b.sent()).TfiImport;
                    return [2 /*return*/, TfiImport];
                case 269: return [4 /*yield*/, import("react-icons/tfi")];
                case 270:
                    TfiInfinite = (_b.sent()).TfiInfinite;
                    return [2 /*return*/, TfiInfinite];
                case 271: return [4 /*yield*/, import("react-icons/tfi")];
                case 272:
                    TfiInfoAlt = (_b.sent()).TfiInfoAlt;
                    return [2 /*return*/, TfiInfoAlt];
                case 273: return [4 /*yield*/, import("react-icons/tfi")];
                case 274:
                    TfiInfo = (_b.sent()).TfiInfo;
                    return [2 /*return*/, TfiInfo];
                case 275: return [4 /*yield*/, import("react-icons/tfi")];
                case 276:
                    TfiInkPen = (_b.sent()).TfiInkPen;
                    return [2 /*return*/, TfiInkPen];
                case 277: return [4 /*yield*/, import("react-icons/tfi")];
                case 278:
                    TfiInstagram = (_b.sent()).TfiInstagram;
                    return [2 /*return*/, TfiInstagram];
                case 279: return [4 /*yield*/, import("react-icons/tfi")];
                case 280:
                    TfiItalic = (_b.sent()).TfiItalic;
                    return [2 /*return*/, TfiItalic];
                case 281: return [4 /*yield*/, import("react-icons/tfi")];
                case 282:
                    TfiJoomla = (_b.sent()).TfiJoomla;
                    return [2 /*return*/, TfiJoomla];
                case 283: return [4 /*yield*/, import("react-icons/tfi")];
                case 284:
                    TfiJsfiddle = (_b.sent()).TfiJsfiddle;
                    return [2 /*return*/, TfiJsfiddle];
                case 285: return [4 /*yield*/, import("react-icons/tfi")];
                case 286:
                    TfiKey = (_b.sent()).TfiKey;
                    return [2 /*return*/, TfiKey];
                case 287: return [4 /*yield*/, import("react-icons/tfi")];
                case 288:
                    TfiLayersAlt = (_b.sent()).TfiLayersAlt;
                    return [2 /*return*/, TfiLayersAlt];
                case 289: return [4 /*yield*/, import("react-icons/tfi")];
                case 290:
                    TfiLayers = (_b.sent()).TfiLayers;
                    return [2 /*return*/, TfiLayers];
                case 291: return [4 /*yield*/, import("react-icons/tfi")];
                case 292:
                    TfiLayoutAccordionList = (_b.sent()).TfiLayoutAccordionList;
                    return [2 /*return*/, TfiLayoutAccordionList];
                case 293: return [4 /*yield*/, import("react-icons/tfi")];
                case 294:
                    TfiLayoutAccordionMerged = (_b.sent()).TfiLayoutAccordionMerged;
                    return [2 /*return*/, TfiLayoutAccordionMerged];
                case 295: return [4 /*yield*/, import("react-icons/tfi")];
                case 296:
                    TfiLayoutAccordionSeparated = (_b.sent()).TfiLayoutAccordionSeparated;
                    return [2 /*return*/, TfiLayoutAccordionSeparated];
                case 297: return [4 /*yield*/, import("react-icons/tfi")];
                case 298:
                    TfiLayoutColumn2Alt = (_b.sent()).TfiLayoutColumn2Alt;
                    return [2 /*return*/, TfiLayoutColumn2Alt];
                case 299: return [4 /*yield*/, import("react-icons/tfi")];
                case 300:
                    TfiLayoutColumn2 = (_b.sent()).TfiLayoutColumn2;
                    return [2 /*return*/, TfiLayoutColumn2];
                case 301: return [4 /*yield*/, import("react-icons/tfi")];
                case 302:
                    TfiLayoutColumn3Alt = (_b.sent()).TfiLayoutColumn3Alt;
                    return [2 /*return*/, TfiLayoutColumn3Alt];
                case 303: return [4 /*yield*/, import("react-icons/tfi")];
                case 304:
                    TfiLayoutColumn3 = (_b.sent()).TfiLayoutColumn3;
                    return [2 /*return*/, TfiLayoutColumn3];
                case 305: return [4 /*yield*/, import("react-icons/tfi")];
                case 306:
                    TfiLayoutColumn4Alt = (_b.sent()).TfiLayoutColumn4Alt;
                    return [2 /*return*/, TfiLayoutColumn4Alt];
                case 307: return [4 /*yield*/, import("react-icons/tfi")];
                case 308:
                    TfiLayoutColumn4 = (_b.sent()).TfiLayoutColumn4;
                    return [2 /*return*/, TfiLayoutColumn4];
                case 309: return [4 /*yield*/, import("react-icons/tfi")];
                case 310:
                    TfiLayoutCtaBtnLeft = (_b.sent()).TfiLayoutCtaBtnLeft;
                    return [2 /*return*/, TfiLayoutCtaBtnLeft];
                case 311: return [4 /*yield*/, import("react-icons/tfi")];
                case 312:
                    TfiLayoutCtaBtnRight = (_b.sent()).TfiLayoutCtaBtnRight;
                    return [2 /*return*/, TfiLayoutCtaBtnRight];
                case 313: return [4 /*yield*/, import("react-icons/tfi")];
                case 314:
                    TfiLayoutCtaCenter = (_b.sent()).TfiLayoutCtaCenter;
                    return [2 /*return*/, TfiLayoutCtaCenter];
                case 315: return [4 /*yield*/, import("react-icons/tfi")];
                case 316:
                    TfiLayoutCtaLeft = (_b.sent()).TfiLayoutCtaLeft;
                    return [2 /*return*/, TfiLayoutCtaLeft];
                case 317: return [4 /*yield*/, import("react-icons/tfi")];
                case 318:
                    TfiLayoutCtaRight = (_b.sent()).TfiLayoutCtaRight;
                    return [2 /*return*/, TfiLayoutCtaRight];
                case 319: return [4 /*yield*/, import("react-icons/tfi")];
                case 320:
                    TfiLayoutGrid2Alt = (_b.sent()).TfiLayoutGrid2Alt;
                    return [2 /*return*/, TfiLayoutGrid2Alt];
                case 321: return [4 /*yield*/, import("react-icons/tfi")];
                case 322:
                    TfiLayoutGrid2Thumb = (_b.sent()).TfiLayoutGrid2Thumb;
                    return [2 /*return*/, TfiLayoutGrid2Thumb];
                case 323: return [4 /*yield*/, import("react-icons/tfi")];
                case 324:
                    TfiLayoutGrid2 = (_b.sent()).TfiLayoutGrid2;
                    return [2 /*return*/, TfiLayoutGrid2];
                case 325: return [4 /*yield*/, import("react-icons/tfi")];
                case 326:
                    TfiLayoutGrid3Alt = (_b.sent()).TfiLayoutGrid3Alt;
                    return [2 /*return*/, TfiLayoutGrid3Alt];
                case 327: return [4 /*yield*/, import("react-icons/tfi")];
                case 328:
                    TfiLayoutGrid3 = (_b.sent()).TfiLayoutGrid3;
                    return [2 /*return*/, TfiLayoutGrid3];
                case 329: return [4 /*yield*/, import("react-icons/tfi")];
                case 330:
                    TfiLayoutGrid4Alt = (_b.sent()).TfiLayoutGrid4Alt;
                    return [2 /*return*/, TfiLayoutGrid4Alt];
                case 331: return [4 /*yield*/, import("react-icons/tfi")];
                case 332:
                    TfiLayoutGrid4 = (_b.sent()).TfiLayoutGrid4;
                    return [2 /*return*/, TfiLayoutGrid4];
                case 333: return [4 /*yield*/, import("react-icons/tfi")];
                case 334:
                    TfiLayoutLineSolid = (_b.sent()).TfiLayoutLineSolid;
                    return [2 /*return*/, TfiLayoutLineSolid];
                case 335: return [4 /*yield*/, import("react-icons/tfi")];
                case 336:
                    TfiLayoutListLargeImage = (_b.sent()).TfiLayoutListLargeImage;
                    return [2 /*return*/, TfiLayoutListLargeImage];
                case 337: return [4 /*yield*/, import("react-icons/tfi")];
                case 338:
                    TfiLayoutListPost = (_b.sent()).TfiLayoutListPost;
                    return [2 /*return*/, TfiLayoutListPost];
                case 339: return [4 /*yield*/, import("react-icons/tfi")];
                case 340:
                    TfiLayoutListThumbAlt = (_b.sent()).TfiLayoutListThumbAlt;
                    return [2 /*return*/, TfiLayoutListThumbAlt];
                case 341: return [4 /*yield*/, import("react-icons/tfi")];
                case 342:
                    TfiLayoutListThumb = (_b.sent()).TfiLayoutListThumb;
                    return [2 /*return*/, TfiLayoutListThumb];
                case 343: return [4 /*yield*/, import("react-icons/tfi")];
                case 344:
                    TfiLayoutMediaCenterAlt = (_b.sent()).TfiLayoutMediaCenterAlt;
                    return [2 /*return*/, TfiLayoutMediaCenterAlt];
                case 345: return [4 /*yield*/, import("react-icons/tfi")];
                case 346:
                    TfiLayoutMediaCenter = (_b.sent()).TfiLayoutMediaCenter;
                    return [2 /*return*/, TfiLayoutMediaCenter];
                case 347: return [4 /*yield*/, import("react-icons/tfi")];
                case 348:
                    TfiLayoutMediaLeftAlt = (_b.sent()).TfiLayoutMediaLeftAlt;
                    return [2 /*return*/, TfiLayoutMediaLeftAlt];
                case 349: return [4 /*yield*/, import("react-icons/tfi")];
                case 350:
                    TfiLayoutMediaLeft = (_b.sent()).TfiLayoutMediaLeft;
                    return [2 /*return*/, TfiLayoutMediaLeft];
                case 351: return [4 /*yield*/, import("react-icons/tfi")];
                case 352:
                    TfiLayoutMediaOverlayAlt2 = (_b.sent()).TfiLayoutMediaOverlayAlt2;
                    return [2 /*return*/, TfiLayoutMediaOverlayAlt2];
                case 353: return [4 /*yield*/, import("react-icons/tfi")];
                case 354:
                    TfiLayoutMediaOverlayAlt = (_b.sent()).TfiLayoutMediaOverlayAlt;
                    return [2 /*return*/, TfiLayoutMediaOverlayAlt];
                case 355: return [4 /*yield*/, import("react-icons/tfi")];
                case 356:
                    TfiLayoutMediaOverlay = (_b.sent()).TfiLayoutMediaOverlay;
                    return [2 /*return*/, TfiLayoutMediaOverlay];
                case 357: return [4 /*yield*/, import("react-icons/tfi")];
                case 358:
                    TfiLayoutMediaRightAlt = (_b.sent()).TfiLayoutMediaRightAlt;
                    return [2 /*return*/, TfiLayoutMediaRightAlt];
                case 359: return [4 /*yield*/, import("react-icons/tfi")];
                case 360:
                    TfiLayoutMediaRight = (_b.sent()).TfiLayoutMediaRight;
                    return [2 /*return*/, TfiLayoutMediaRight];
                case 361: return [4 /*yield*/, import("react-icons/tfi")];
                case 362:
                    TfiLayoutMenuFull = (_b.sent()).TfiLayoutMenuFull;
                    return [2 /*return*/, TfiLayoutMenuFull];
                case 363: return [4 /*yield*/, import("react-icons/tfi")];
                case 364:
                    TfiLayoutMenuSeparated = (_b.sent()).TfiLayoutMenuSeparated;
                    return [2 /*return*/, TfiLayoutMenuSeparated];
                case 365: return [4 /*yield*/, import("react-icons/tfi")];
                case 366:
                    TfiLayoutMenuV = (_b.sent()).TfiLayoutMenuV;
                    return [2 /*return*/, TfiLayoutMenuV];
                case 367: return [4 /*yield*/, import("react-icons/tfi")];
                case 368:
                    TfiLayoutMenu = (_b.sent()).TfiLayoutMenu;
                    return [2 /*return*/, TfiLayoutMenu];
                case 369: return [4 /*yield*/, import("react-icons/tfi")];
                case 370:
                    TfiLayoutPlaceholder = (_b.sent()).TfiLayoutPlaceholder;
                    return [2 /*return*/, TfiLayoutPlaceholder];
                case 371: return [4 /*yield*/, import("react-icons/tfi")];
                case 372:
                    TfiLayoutSidebar2 = (_b.sent()).TfiLayoutSidebar2;
                    return [2 /*return*/, TfiLayoutSidebar2];
                case 373: return [4 /*yield*/, import("react-icons/tfi")];
                case 374:
                    TfiLayoutSidebarLeft = (_b.sent()).TfiLayoutSidebarLeft;
                    return [2 /*return*/, TfiLayoutSidebarLeft];
                case 375: return [4 /*yield*/, import("react-icons/tfi")];
                case 376:
                    TfiLayoutSidebarNone = (_b.sent()).TfiLayoutSidebarNone;
                    return [2 /*return*/, TfiLayoutSidebarNone];
                case 377: return [4 /*yield*/, import("react-icons/tfi")];
                case 378:
                    TfiLayoutSidebarRight = (_b.sent()).TfiLayoutSidebarRight;
                    return [2 /*return*/, TfiLayoutSidebarRight];
                case 379: return [4 /*yield*/, import("react-icons/tfi")];
                case 380:
                    TfiLayoutSliderAlt = (_b.sent()).TfiLayoutSliderAlt;
                    return [2 /*return*/, TfiLayoutSliderAlt];
                case 381: return [4 /*yield*/, import("react-icons/tfi")];
                case 382:
                    TfiLayoutSlider = (_b.sent()).TfiLayoutSlider;
                    return [2 /*return*/, TfiLayoutSlider];
                case 383: return [4 /*yield*/, import("react-icons/tfi")];
                case 384:
                    TfiLayoutTabMin = (_b.sent()).TfiLayoutTabMin;
                    return [2 /*return*/, TfiLayoutTabMin];
                case 385: return [4 /*yield*/, import("react-icons/tfi")];
                case 386:
                    TfiLayoutTabV = (_b.sent()).TfiLayoutTabV;
                    return [2 /*return*/, TfiLayoutTabV];
                case 387: return [4 /*yield*/, import("react-icons/tfi")];
                case 388:
                    TfiLayoutTabWindow = (_b.sent()).TfiLayoutTabWindow;
                    return [2 /*return*/, TfiLayoutTabWindow];
                case 389: return [4 /*yield*/, import("react-icons/tfi")];
                case 390:
                    TfiLayoutTab = (_b.sent()).TfiLayoutTab;
                    return [2 /*return*/, TfiLayoutTab];
                case 391: return [4 /*yield*/, import("react-icons/tfi")];
                case 392:
                    TfiLayoutWidthDefaultAlt = (_b.sent()).TfiLayoutWidthDefaultAlt;
                    return [2 /*return*/, TfiLayoutWidthDefaultAlt];
                case 393: return [4 /*yield*/, import("react-icons/tfi")];
                case 394:
                    TfiLayoutWidthDefault = (_b.sent()).TfiLayoutWidthDefault;
                    return [2 /*return*/, TfiLayoutWidthDefault];
                case 395: return [4 /*yield*/, import("react-icons/tfi")];
                case 396:
                    TfiLayoutWidthFull = (_b.sent()).TfiLayoutWidthFull;
                    return [2 /*return*/, TfiLayoutWidthFull];
                case 397: return [4 /*yield*/, import("react-icons/tfi")];
                case 398:
                    TfiLayout = (_b.sent()).TfiLayout;
                    return [2 /*return*/, TfiLayout];
                case 399: return [4 /*yield*/, import("react-icons/tfi")];
                case 400:
                    TfiLightBulb = (_b.sent()).TfiLightBulb;
                    return [2 /*return*/, TfiLightBulb];
                case 401: return [4 /*yield*/, import("react-icons/tfi")];
                case 402:
                    TfiLineDashed = (_b.sent()).TfiLineDashed;
                    return [2 /*return*/, TfiLineDashed];
                case 403: return [4 /*yield*/, import("react-icons/tfi")];
                case 404:
                    TfiLineDotted = (_b.sent()).TfiLineDotted;
                    return [2 /*return*/, TfiLineDotted];
                case 405: return [4 /*yield*/, import("react-icons/tfi")];
                case 406:
                    TfiLineDouble = (_b.sent()).TfiLineDouble;
                    return [2 /*return*/, TfiLineDouble];
                case 407: return [4 /*yield*/, import("react-icons/tfi")];
                case 408:
                    TfiLink = (_b.sent()).TfiLink;
                    return [2 /*return*/, TfiLink];
                case 409: return [4 /*yield*/, import("react-icons/tfi")];
                case 410:
                    TfiLinkedin = (_b.sent()).TfiLinkedin;
                    return [2 /*return*/, TfiLinkedin];
                case 411: return [4 /*yield*/, import("react-icons/tfi")];
                case 412:
                    TfiLinux = (_b.sent()).TfiLinux;
                    return [2 /*return*/, TfiLinux];
                case 413: return [4 /*yield*/, import("react-icons/tfi")];
                case 414:
                    TfiListOl = (_b.sent()).TfiListOl;
                    return [2 /*return*/, TfiListOl];
                case 415: return [4 /*yield*/, import("react-icons/tfi")];
                case 416:
                    TfiList = (_b.sent()).TfiList;
                    return [2 /*return*/, TfiList];
                case 417: return [4 /*yield*/, import("react-icons/tfi")];
                case 418:
                    TfiLocationArrow = (_b.sent()).TfiLocationArrow;
                    return [2 /*return*/, TfiLocationArrow];
                case 419: return [4 /*yield*/, import("react-icons/tfi")];
                case 420:
                    TfiLocationPin = (_b.sent()).TfiLocationPin;
                    return [2 /*return*/, TfiLocationPin];
                case 421: return [4 /*yield*/, import("react-icons/tfi")];
                case 422:
                    TfiLock = (_b.sent()).TfiLock;
                    return [2 /*return*/, TfiLock];
                case 423: return [4 /*yield*/, import("react-icons/tfi")];
                case 424:
                    TfiLoop = (_b.sent()).TfiLoop;
                    return [2 /*return*/, TfiLoop];
                case 425: return [4 /*yield*/, import("react-icons/tfi")];
                case 426:
                    TfiMagnet = (_b.sent()).TfiMagnet;
                    return [2 /*return*/, TfiMagnet];
                case 427: return [4 /*yield*/, import("react-icons/tfi")];
                case 428:
                    TfiMapAlt = (_b.sent()).TfiMapAlt;
                    return [2 /*return*/, TfiMapAlt];
                case 429: return [4 /*yield*/, import("react-icons/tfi")];
                case 430:
                    TfiMap = (_b.sent()).TfiMap;
                    return [2 /*return*/, TfiMap];
                case 431: return [4 /*yield*/, import("react-icons/tfi")];
                case 432:
                    TfiMarkerAlt = (_b.sent()).TfiMarkerAlt;
                    return [2 /*return*/, TfiMarkerAlt];
                case 433: return [4 /*yield*/, import("react-icons/tfi")];
                case 434:
                    TfiMarker = (_b.sent()).TfiMarker;
                    return [2 /*return*/, TfiMarker];
                case 435: return [4 /*yield*/, import("react-icons/tfi")];
                case 436:
                    TfiMedallAlt = (_b.sent()).TfiMedallAlt;
                    return [2 /*return*/, TfiMedallAlt];
                case 437: return [4 /*yield*/, import("react-icons/tfi")];
                case 438:
                    TfiMedall = (_b.sent()).TfiMedall;
                    return [2 /*return*/, TfiMedall];
                case 439: return [4 /*yield*/, import("react-icons/tfi")];
                case 440:
                    TfiMenuAlt = (_b.sent()).TfiMenuAlt;
                    return [2 /*return*/, TfiMenuAlt];
                case 441: return [4 /*yield*/, import("react-icons/tfi")];
                case 442:
                    TfiMenu = (_b.sent()).TfiMenu;
                    return [2 /*return*/, TfiMenu];
                case 443: return [4 /*yield*/, import("react-icons/tfi")];
                case 444:
                    TfiMicrophoneAlt = (_b.sent()).TfiMicrophoneAlt;
                    return [2 /*return*/, TfiMicrophoneAlt];
                case 445: return [4 /*yield*/, import("react-icons/tfi")];
                case 446:
                    TfiMicrophone = (_b.sent()).TfiMicrophone;
                    return [2 /*return*/, TfiMicrophone];
                case 447: return [4 /*yield*/, import("react-icons/tfi")];
                case 448:
                    TfiMicrosoftAlt = (_b.sent()).TfiMicrosoftAlt;
                    return [2 /*return*/, TfiMicrosoftAlt];
                case 449: return [4 /*yield*/, import("react-icons/tfi")];
                case 450:
                    TfiMicrosoft = (_b.sent()).TfiMicrosoft;
                    return [2 /*return*/, TfiMicrosoft];
                case 451: return [4 /*yield*/, import("react-icons/tfi")];
                case 452:
                    TfiMinus = (_b.sent()).TfiMinus;
                    return [2 /*return*/, TfiMinus];
                case 453: return [4 /*yield*/, import("react-icons/tfi")];
                case 454:
                    TfiMobile = (_b.sent()).TfiMobile;
                    return [2 /*return*/, TfiMobile];
                case 455: return [4 /*yield*/, import("react-icons/tfi")];
                case 456:
                    TfiMoney = (_b.sent()).TfiMoney;
                    return [2 /*return*/, TfiMoney];
                case 457: return [4 /*yield*/, import("react-icons/tfi")];
                case 458:
                    TfiMoreAlt = (_b.sent()).TfiMoreAlt;
                    return [2 /*return*/, TfiMoreAlt];
                case 459: return [4 /*yield*/, import("react-icons/tfi")];
                case 460:
                    TfiMore = (_b.sent()).TfiMore;
                    return [2 /*return*/, TfiMore];
                case 461: return [4 /*yield*/, import("react-icons/tfi")];
                case 462:
                    TfiMouseAlt = (_b.sent()).TfiMouseAlt;
                    return [2 /*return*/, TfiMouseAlt];
                case 463: return [4 /*yield*/, import("react-icons/tfi")];
                case 464:
                    TfiMouse = (_b.sent()).TfiMouse;
                    return [2 /*return*/, TfiMouse];
                case 465: return [4 /*yield*/, import("react-icons/tfi")];
                case 466:
                    TfiMusicAlt = (_b.sent()).TfiMusicAlt;
                    return [2 /*return*/, TfiMusicAlt];
                case 467: return [4 /*yield*/, import("react-icons/tfi")];
                case 468:
                    TfiMusic = (_b.sent()).TfiMusic;
                    return [2 /*return*/, TfiMusic];
                case 469: return [4 /*yield*/, import("react-icons/tfi")];
                case 470:
                    TfiNa = (_b.sent()).TfiNa;
                    return [2 /*return*/, TfiNa];
                case 471: return [4 /*yield*/, import("react-icons/tfi")];
                case 472:
                    TfiNewWindow = (_b.sent()).TfiNewWindow;
                    return [2 /*return*/, TfiNewWindow];
                case 473: return [4 /*yield*/, import("react-icons/tfi")];
                case 474:
                    TfiNotepad = (_b.sent()).TfiNotepad;
                    return [2 /*return*/, TfiNotepad];
                case 475: return [4 /*yield*/, import("react-icons/tfi")];
                case 476:
                    TfiPackage = (_b.sent()).TfiPackage;
                    return [2 /*return*/, TfiPackage];
                case 477: return [4 /*yield*/, import("react-icons/tfi")];
                case 478:
                    TfiPaintBucket = (_b.sent()).TfiPaintBucket;
                    return [2 /*return*/, TfiPaintBucket];
                case 479: return [4 /*yield*/, import("react-icons/tfi")];
                case 480:
                    TfiPaintRoller = (_b.sent()).TfiPaintRoller;
                    return [2 /*return*/, TfiPaintRoller];
                case 481: return [4 /*yield*/, import("react-icons/tfi")];
                case 482:
                    TfiPalette = (_b.sent()).TfiPalette;
                    return [2 /*return*/, TfiPalette];
                case 483: return [4 /*yield*/, import("react-icons/tfi")];
                case 484:
                    TfiPanel = (_b.sent()).TfiPanel;
                    return [2 /*return*/, TfiPanel];
                case 485: return [4 /*yield*/, import("react-icons/tfi")];
                case 486:
                    TfiParagraph = (_b.sent()).TfiParagraph;
                    return [2 /*return*/, TfiParagraph];
                case 487: return [4 /*yield*/, import("react-icons/tfi")];
                case 488:
                    TfiPencilAlt = (_b.sent()).TfiPencilAlt;
                    return [2 /*return*/, TfiPencilAlt];
                case 489: return [4 /*yield*/, import("react-icons/tfi")];
                case 490:
                    TfiPencilAlt2 = (_b.sent()).TfiPencilAlt2;
                    return [2 /*return*/, TfiPencilAlt2];
                case 491: return [4 /*yield*/, import("react-icons/tfi")];
                case 492:
                    TfiPencil = (_b.sent()).TfiPencil;
                    return [2 /*return*/, TfiPencil];
                case 493: return [4 /*yield*/, import("react-icons/tfi")];
                case 494:
                    TfiPieChart = (_b.sent()).TfiPieChart;
                    return [2 /*return*/, TfiPieChart];
                case 495: return [4 /*yield*/, import("react-icons/tfi")];
                case 496:
                    TfiPinAlt = (_b.sent()).TfiPinAlt;
                    return [2 /*return*/, TfiPinAlt];
                case 497: return [4 /*yield*/, import("react-icons/tfi")];
                case 498:
                    TfiPin = (_b.sent()).TfiPin;
                    return [2 /*return*/, TfiPin];
                case 499: return [4 /*yield*/, import("react-icons/tfi")];
                case 500:
                    TfiPin2 = (_b.sent()).TfiPin2;
                    return [2 /*return*/, TfiPin2];
                case 501: return [4 /*yield*/, import("react-icons/tfi")];
                case 502:
                    TfiPinterestAlt = (_b.sent()).TfiPinterestAlt;
                    return [2 /*return*/, TfiPinterestAlt];
                case 503: return [4 /*yield*/, import("react-icons/tfi")];
                case 504:
                    TfiPinterest = (_b.sent()).TfiPinterest;
                    return [2 /*return*/, TfiPinterest];
                case 505: return [4 /*yield*/, import("react-icons/tfi")];
                case 506:
                    TfiPlug = (_b.sent()).TfiPlug;
                    return [2 /*return*/, TfiPlug];
                case 507: return [4 /*yield*/, import("react-icons/tfi")];
                case 508:
                    TfiPlus = (_b.sent()).TfiPlus;
                    return [2 /*return*/, TfiPlus];
                case 509: return [4 /*yield*/, import("react-icons/tfi")];
                case 510:
                    TfiPowerOff = (_b.sent()).TfiPowerOff;
                    return [2 /*return*/, TfiPowerOff];
                case 511: return [4 /*yield*/, import("react-icons/tfi")];
                case 512:
                    TfiPrinter = (_b.sent()).TfiPrinter;
                    return [2 /*return*/, TfiPrinter];
                case 513: return [4 /*yield*/, import("react-icons/tfi")];
                case 514:
                    TfiPulse = (_b.sent()).TfiPulse;
                    return [2 /*return*/, TfiPulse];
                case 515: return [4 /*yield*/, import("react-icons/tfi")];
                case 516:
                    TfiQuoteLeft = (_b.sent()).TfiQuoteLeft;
                    return [2 /*return*/, TfiQuoteLeft];
                case 517: return [4 /*yield*/, import("react-icons/tfi")];
                case 518:
                    TfiQuoteRight = (_b.sent()).TfiQuoteRight;
                    return [2 /*return*/, TfiQuoteRight];
                case 519: return [4 /*yield*/, import("react-icons/tfi")];
                case 520:
                    TfiReceipt = (_b.sent()).TfiReceipt;
                    return [2 /*return*/, TfiReceipt];
                case 521: return [4 /*yield*/, import("react-icons/tfi")];
                case 522:
                    TfiReddit = (_b.sent()).TfiReddit;
                    return [2 /*return*/, TfiReddit];
                case 523: return [4 /*yield*/, import("react-icons/tfi")];
                case 524:
                    TfiReload = (_b.sent()).TfiReload;
                    return [2 /*return*/, TfiReload];
                case 525: return [4 /*yield*/, import("react-icons/tfi")];
                case 526:
                    TfiRocket = (_b.sent()).TfiRocket;
                    return [2 /*return*/, TfiRocket];
                case 527: return [4 /*yield*/, import("react-icons/tfi")];
                case 528:
                    TfiRssAlt = (_b.sent()).TfiRssAlt;
                    return [2 /*return*/, TfiRssAlt];
                case 529: return [4 /*yield*/, import("react-icons/tfi")];
                case 530:
                    TfiRss = (_b.sent()).TfiRss;
                    return [2 /*return*/, TfiRss];
                case 531: return [4 /*yield*/, import("react-icons/tfi")];
                case 532:
                    TfiRulerAlt2 = (_b.sent()).TfiRulerAlt2;
                    return [2 /*return*/, TfiRulerAlt2];
                case 533: return [4 /*yield*/, import("react-icons/tfi")];
                case 534:
                    TfiRulerAlt = (_b.sent()).TfiRulerAlt;
                    return [2 /*return*/, TfiRulerAlt];
                case 535: return [4 /*yield*/, import("react-icons/tfi")];
                case 536:
                    TfiRulerPencil = (_b.sent()).TfiRulerPencil;
                    return [2 /*return*/, TfiRulerPencil];
                case 537: return [4 /*yield*/, import("react-icons/tfi")];
                case 538:
                    TfiRuler = (_b.sent()).TfiRuler;
                    return [2 /*return*/, TfiRuler];
                case 539: return [4 /*yield*/, import("react-icons/tfi")];
                case 540:
                    TfiSaveAlt = (_b.sent()).TfiSaveAlt;
                    return [2 /*return*/, TfiSaveAlt];
                case 541: return [4 /*yield*/, import("react-icons/tfi")];
                case 542:
                    TfiSave = (_b.sent()).TfiSave;
                    return [2 /*return*/, TfiSave];
                case 543: return [4 /*yield*/, import("react-icons/tfi")];
                case 544:
                    TfiSearch = (_b.sent()).TfiSearch;
                    return [2 /*return*/, TfiSearch];
                case 545: return [4 /*yield*/, import("react-icons/tfi")];
                case 546:
                    TfiServer = (_b.sent()).TfiServer;
                    return [2 /*return*/, TfiServer];
                case 547: return [4 /*yield*/, import("react-icons/tfi")];
                case 548:
                    TfiSettings = (_b.sent()).TfiSettings;
                    return [2 /*return*/, TfiSettings];
                case 549: return [4 /*yield*/, import("react-icons/tfi")];
                case 550:
                    TfiShareAlt = (_b.sent()).TfiShareAlt;
                    return [2 /*return*/, TfiShareAlt];
                case 551: return [4 /*yield*/, import("react-icons/tfi")];
                case 552:
                    TfiShare = (_b.sent()).TfiShare;
                    return [2 /*return*/, TfiShare];
                case 553: return [4 /*yield*/, import("react-icons/tfi")];
                case 554:
                    TfiSharethisAlt = (_b.sent()).TfiSharethisAlt;
                    return [2 /*return*/, TfiSharethisAlt];
                case 555: return [4 /*yield*/, import("react-icons/tfi")];
                case 556:
                    TfiSharethis = (_b.sent()).TfiSharethis;
                    return [2 /*return*/, TfiSharethis];
                case 557: return [4 /*yield*/, import("react-icons/tfi")];
                case 558:
                    TfiShield = (_b.sent()).TfiShield;
                    return [2 /*return*/, TfiShield];
                case 559: return [4 /*yield*/, import("react-icons/tfi")];
                case 560:
                    TfiShiftLeftAlt = (_b.sent()).TfiShiftLeftAlt;
                    return [2 /*return*/, TfiShiftLeftAlt];
                case 561: return [4 /*yield*/, import("react-icons/tfi")];
                case 562:
                    TfiShiftLeft = (_b.sent()).TfiShiftLeft;
                    return [2 /*return*/, TfiShiftLeft];
                case 563: return [4 /*yield*/, import("react-icons/tfi")];
                case 564:
                    TfiShiftRightAlt = (_b.sent()).TfiShiftRightAlt;
                    return [2 /*return*/, TfiShiftRightAlt];
                case 565: return [4 /*yield*/, import("react-icons/tfi")];
                case 566:
                    TfiShiftRight = (_b.sent()).TfiShiftRight;
                    return [2 /*return*/, TfiShiftRight];
                case 567: return [4 /*yield*/, import("react-icons/tfi")];
                case 568:
                    TfiShine = (_b.sent()).TfiShine;
                    return [2 /*return*/, TfiShine];
                case 569: return [4 /*yield*/, import("react-icons/tfi")];
                case 570:
                    TfiShoppingCartFull = (_b.sent()).TfiShoppingCartFull;
                    return [2 /*return*/, TfiShoppingCartFull];
                case 571: return [4 /*yield*/, import("react-icons/tfi")];
                case 572:
                    TfiShoppingCart = (_b.sent()).TfiShoppingCart;
                    return [2 /*return*/, TfiShoppingCart];
                case 573: return [4 /*yield*/, import("react-icons/tfi")];
                case 574:
                    TfiShortcode = (_b.sent()).TfiShortcode;
                    return [2 /*return*/, TfiShortcode];
                case 575: return [4 /*yield*/, import("react-icons/tfi")];
                case 576:
                    TfiSignal = (_b.sent()).TfiSignal;
                    return [2 /*return*/, TfiSignal];
                case 577: return [4 /*yield*/, import("react-icons/tfi")];
                case 578:
                    TfiSkype = (_b.sent()).TfiSkype;
                    return [2 /*return*/, TfiSkype];
                case 579: return [4 /*yield*/, import("react-icons/tfi")];
                case 580:
                    TfiSlice = (_b.sent()).TfiSlice;
                    return [2 /*return*/, TfiSlice];
                case 581: return [4 /*yield*/, import("react-icons/tfi")];
                case 582:
                    TfiSmallcap = (_b.sent()).TfiSmallcap;
                    return [2 /*return*/, TfiSmallcap];
                case 583: return [4 /*yield*/, import("react-icons/tfi")];
                case 584:
                    TfiSoundcloud = (_b.sent()).TfiSoundcloud;
                    return [2 /*return*/, TfiSoundcloud];
                case 585: return [4 /*yield*/, import("react-icons/tfi")];
                case 586:
                    TfiSplitH = (_b.sent()).TfiSplitH;
                    return [2 /*return*/, TfiSplitH];
                case 587: return [4 /*yield*/, import("react-icons/tfi")];
                case 588:
                    TfiSplitVAlt = (_b.sent()).TfiSplitVAlt;
                    return [2 /*return*/, TfiSplitVAlt];
                case 589: return [4 /*yield*/, import("react-icons/tfi")];
                case 590:
                    TfiSplitV = (_b.sent()).TfiSplitV;
                    return [2 /*return*/, TfiSplitV];
                case 591: return [4 /*yield*/, import("react-icons/tfi")];
                case 592:
                    TfiSpray = (_b.sent()).TfiSpray;
                    return [2 /*return*/, TfiSpray];
                case 593: return [4 /*yield*/, import("react-icons/tfi")];
                case 594:
                    TfiStackOverflow = (_b.sent()).TfiStackOverflow;
                    return [2 /*return*/, TfiStackOverflow];
                case 595: return [4 /*yield*/, import("react-icons/tfi")];
                case 596:
                    TfiStamp = (_b.sent()).TfiStamp;
                    return [2 /*return*/, TfiStamp];
                case 597: return [4 /*yield*/, import("react-icons/tfi")];
                case 598:
                    TfiStar = (_b.sent()).TfiStar;
                    return [2 /*return*/, TfiStar];
                case 599: return [4 /*yield*/, import("react-icons/tfi")];
                case 600:
                    TfiStatsDown = (_b.sent()).TfiStatsDown;
                    return [2 /*return*/, TfiStatsDown];
                case 601: return [4 /*yield*/, import("react-icons/tfi")];
                case 602:
                    TfiStatsUp = (_b.sent()).TfiStatsUp;
                    return [2 /*return*/, TfiStatsUp];
                case 603: return [4 /*yield*/, import("react-icons/tfi")];
                case 604:
                    TfiSupport = (_b.sent()).TfiSupport;
                    return [2 /*return*/, TfiSupport];
                case 605: return [4 /*yield*/, import("react-icons/tfi")];
                case 606:
                    TfiTablet = (_b.sent()).TfiTablet;
                    return [2 /*return*/, TfiTablet];
                case 607: return [4 /*yield*/, import("react-icons/tfi")];
                case 608:
                    TfiTag = (_b.sent()).TfiTag;
                    return [2 /*return*/, TfiTag];
                case 609: return [4 /*yield*/, import("react-icons/tfi")];
                case 610:
                    TfiTarget = (_b.sent()).TfiTarget;
                    return [2 /*return*/, TfiTarget];
                case 611: return [4 /*yield*/, import("react-icons/tfi")];
                case 612:
                    TfiText = (_b.sent()).TfiText;
                    return [2 /*return*/, TfiText];
                case 613: return [4 /*yield*/, import("react-icons/tfi")];
                case 614:
                    TfiThemifyFaviconAlt = (_b.sent()).TfiThemifyFaviconAlt;
                    return [2 /*return*/, TfiThemifyFaviconAlt];
                case 615: return [4 /*yield*/, import("react-icons/tfi")];
                case 616:
                    TfiThemifyFavicon = (_b.sent()).TfiThemifyFavicon;
                    return [2 /*return*/, TfiThemifyFavicon];
                case 617: return [4 /*yield*/, import("react-icons/tfi")];
                case 618:
                    TfiThemifyLogo = (_b.sent()).TfiThemifyLogo;
                    return [2 /*return*/, TfiThemifyLogo];
                case 619: return [4 /*yield*/, import("react-icons/tfi")];
                case 620:
                    TfiThought = (_b.sent()).TfiThought;
                    return [2 /*return*/, TfiThought];
                case 621: return [4 /*yield*/, import("react-icons/tfi")];
                case 622:
                    TfiThumbDown = (_b.sent()).TfiThumbDown;
                    return [2 /*return*/, TfiThumbDown];
                case 623: return [4 /*yield*/, import("react-icons/tfi")];
                case 624:
                    TfiThumbUp = (_b.sent()).TfiThumbUp;
                    return [2 /*return*/, TfiThumbUp];
                case 625: return [4 /*yield*/, import("react-icons/tfi")];
                case 626:
                    TfiTicket = (_b.sent()).TfiTicket;
                    return [2 /*return*/, TfiTicket];
                case 627: return [4 /*yield*/, import("react-icons/tfi")];
                case 628:
                    TfiTime = (_b.sent()).TfiTime;
                    return [2 /*return*/, TfiTime];
                case 629: return [4 /*yield*/, import("react-icons/tfi")];
                case 630:
                    TfiTimer = (_b.sent()).TfiTimer;
                    return [2 /*return*/, TfiTimer];
                case 631: return [4 /*yield*/, import("react-icons/tfi")];
                case 632:
                    TfiTrash = (_b.sent()).TfiTrash;
                    return [2 /*return*/, TfiTrash];
                case 633: return [4 /*yield*/, import("react-icons/tfi")];
                case 634:
                    TfiTrello = (_b.sent()).TfiTrello;
                    return [2 /*return*/, TfiTrello];
                case 635: return [4 /*yield*/, import("react-icons/tfi")];
                case 636:
                    TfiTruck = (_b.sent()).TfiTruck;
                    return [2 /*return*/, TfiTruck];
                case 637: return [4 /*yield*/, import("react-icons/tfi")];
                case 638:
                    TfiTumblrAlt = (_b.sent()).TfiTumblrAlt;
                    return [2 /*return*/, TfiTumblrAlt];
                case 639: return [4 /*yield*/, import("react-icons/tfi")];
                case 640:
                    TfiTumblr = (_b.sent()).TfiTumblr;
                    return [2 /*return*/, TfiTumblr];
                case 641: return [4 /*yield*/, import("react-icons/tfi")];
                case 642:
                    TfiTwitterAlt = (_b.sent()).TfiTwitterAlt;
                    return [2 /*return*/, TfiTwitterAlt];
                case 643: return [4 /*yield*/, import("react-icons/tfi")];
                case 644:
                    TfiTwitter = (_b.sent()).TfiTwitter;
                    return [2 /*return*/, TfiTwitter];
                case 645: return [4 /*yield*/, import("react-icons/tfi")];
                case 646:
                    TfiUnderline = (_b.sent()).TfiUnderline;
                    return [2 /*return*/, TfiUnderline];
                case 647: return [4 /*yield*/, import("react-icons/tfi")];
                case 648:
                    TfiUnlink = (_b.sent()).TfiUnlink;
                    return [2 /*return*/, TfiUnlink];
                case 649: return [4 /*yield*/, import("react-icons/tfi")];
                case 650:
                    TfiUnlock = (_b.sent()).TfiUnlock;
                    return [2 /*return*/, TfiUnlock];
                case 651: return [4 /*yield*/, import("react-icons/tfi")];
                case 652:
                    TfiUpload = (_b.sent()).TfiUpload;
                    return [2 /*return*/, TfiUpload];
                case 653: return [4 /*yield*/, import("react-icons/tfi")];
                case 654:
                    TfiUppercase = (_b.sent()).TfiUppercase;
                    return [2 /*return*/, TfiUppercase];
                case 655: return [4 /*yield*/, import("react-icons/tfi")];
                case 656:
                    TfiUser = (_b.sent()).TfiUser;
                    return [2 /*return*/, TfiUser];
                case 657: return [4 /*yield*/, import("react-icons/tfi")];
                case 658:
                    TfiVector = (_b.sent()).TfiVector;
                    return [2 /*return*/, TfiVector];
                case 659: return [4 /*yield*/, import("react-icons/tfi")];
                case 660:
                    TfiVideoCamera = (_b.sent()).TfiVideoCamera;
                    return [2 /*return*/, TfiVideoCamera];
                case 661: return [4 /*yield*/, import("react-icons/tfi")];
                case 662:
                    TfiVideoClapper = (_b.sent()).TfiVideoClapper;
                    return [2 /*return*/, TfiVideoClapper];
                case 663: return [4 /*yield*/, import("react-icons/tfi")];
                case 664:
                    TfiViewGrid = (_b.sent()).TfiViewGrid;
                    return [2 /*return*/, TfiViewGrid];
                case 665: return [4 /*yield*/, import("react-icons/tfi")];
                case 666:
                    TfiViewListAlt = (_b.sent()).TfiViewListAlt;
                    return [2 /*return*/, TfiViewListAlt];
                case 667: return [4 /*yield*/, import("react-icons/tfi")];
                case 668:
                    TfiViewList = (_b.sent()).TfiViewList;
                    return [2 /*return*/, TfiViewList];
                case 669: return [4 /*yield*/, import("react-icons/tfi")];
                case 670:
                    TfiVimeoAlt = (_b.sent()).TfiVimeoAlt;
                    return [2 /*return*/, TfiVimeoAlt];
                case 671: return [4 /*yield*/, import("react-icons/tfi")];
                case 672:
                    TfiVimeo = (_b.sent()).TfiVimeo;
                    return [2 /*return*/, TfiVimeo];
                case 673: return [4 /*yield*/, import("react-icons/tfi")];
                case 674:
                    TfiVolume = (_b.sent()).TfiVolume;
                    return [2 /*return*/, TfiVolume];
                case 675: return [4 /*yield*/, import("react-icons/tfi")];
                case 676:
                    TfiWallet = (_b.sent()).TfiWallet;
                    return [2 /*return*/, TfiWallet];
                case 677: return [4 /*yield*/, import("react-icons/tfi")];
                case 678:
                    TfiWand = (_b.sent()).TfiWand;
                    return [2 /*return*/, TfiWand];
                case 679: return [4 /*yield*/, import("react-icons/tfi")];
                case 680:
                    TfiWheelchair = (_b.sent()).TfiWheelchair;
                    return [2 /*return*/, TfiWheelchair];
                case 681: return [4 /*yield*/, import("react-icons/tfi")];
                case 682:
                    TfiWidgetAlt = (_b.sent()).TfiWidgetAlt;
                    return [2 /*return*/, TfiWidgetAlt];
                case 683: return [4 /*yield*/, import("react-icons/tfi")];
                case 684:
                    TfiWidget = (_b.sent()).TfiWidget;
                    return [2 /*return*/, TfiWidget];
                case 685: return [4 /*yield*/, import("react-icons/tfi")];
                case 686:
                    TfiWidgetized = (_b.sent()).TfiWidgetized;
                    return [2 /*return*/, TfiWidgetized];
                case 687: return [4 /*yield*/, import("react-icons/tfi")];
                case 688:
                    TfiWindow = (_b.sent()).TfiWindow;
                    return [2 /*return*/, TfiWindow];
                case 689: return [4 /*yield*/, import("react-icons/tfi")];
                case 690:
                    TfiWordpress = (_b.sent()).TfiWordpress;
                    return [2 /*return*/, TfiWordpress];
                case 691: return [4 /*yield*/, import("react-icons/tfi")];
                case 692:
                    TfiWorld = (_b.sent()).TfiWorld;
                    return [2 /*return*/, TfiWorld];
                case 693: return [4 /*yield*/, import("react-icons/tfi")];
                case 694:
                    TfiWrite = (_b.sent()).TfiWrite;
                    return [2 /*return*/, TfiWrite];
                case 695: return [4 /*yield*/, import("react-icons/tfi")];
                case 696:
                    TfiYahoo = (_b.sent()).TfiYahoo;
                    return [2 /*return*/, TfiYahoo];
                case 697: return [4 /*yield*/, import("react-icons/tfi")];
                case 698:
                    TfiYoutube = (_b.sent()).TfiYoutube;
                    return [2 /*return*/, TfiYoutube];
                case 699: return [4 /*yield*/, import("react-icons/tfi")];
                case 700:
                    TfiZip = (_b.sent()).TfiZip;
                    return [2 /*return*/, TfiZip];
                case 701: return [4 /*yield*/, import("react-icons/tfi")];
                case 702:
                    TfiZoomIn = (_b.sent()).TfiZoomIn;
                    return [2 /*return*/, TfiZoomIn];
                case 703: return [4 /*yield*/, import("react-icons/tfi")];
                case 704:
                    TfiZoomOut = (_b.sent()).TfiZoomOut;
                    return [2 /*return*/, TfiZoomOut];
                case 705: return [2 /*return*/];
            }
        });
    });
}
