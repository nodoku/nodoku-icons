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
export function nameToReactIcon_bs_2(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, BsMedium, BsMegaphoneFill, BsMegaphone, BsMemory, BsMenuAppFill, BsMenuApp, BsMenuButtonFill, BsMenuButtonWideFill, BsMenuButtonWide, BsMenuButton, BsMenuDown, BsMenuUp, BsMessenger, BsMeta, BsMicFill, BsMicMuteFill, BsMicMute, BsMic, BsMicrosoftTeams, BsMicrosoft, BsMinecartLoaded, BsMinecart, BsModemFill, BsModem, BsMoisture, BsMoonFill, BsMoonStarsFill, BsMoonStars, BsMoon, BsMortarboardFill, BsMortarboard, BsMotherboardFill, BsMotherboard, BsMouseFill, BsMouse, BsMouse2Fill, BsMouse2, BsMouse3Fill, BsMouse3, BsMusicNoteBeamed, BsMusicNoteList, BsMusicNote, BsMusicPlayerFill, BsMusicPlayer, BsNewspaper, BsNintendoSwitch, BsNodeMinusFill, BsNodeMinus, BsNodePlusFill, BsNodePlus, BsNoiseReduction, BsNutFill, BsNut, BsNvidia, BsNvmeFill, BsNvme, BsOctagonFill, BsOctagonHalf, BsOctagon, BsOpencollective, BsOpticalAudioFill, BsOpticalAudio, BsOption, BsOutlet, BsPCircleFill, BsPCircle, BsPSquareFill, BsPSquare, BsPaintBucket, BsPaletteFill, BsPalette, BsPalette2, BsPaperclip, BsParagraph, BsPassFill, BsPass, BsPassportFill, BsPassport, BsPatchCheckFill, BsPatchCheck, BsPatchExclamationFill, BsPatchExclamation, BsPatchMinusFill, BsPatchMinus, BsPatchPlusFill, BsPatchPlus, BsPatchQuestionFill, BsPatchQuestion, BsPauseBtnFill, BsPauseBtn, BsPauseCircleFill, BsPauseCircle, BsPauseFill, BsPause, BsPaypal, BsPcDisplayHorizontal, BsPcDisplay, BsPcHorizontal, BsPc, BsPciCardNetwork, BsPciCardSound, BsPciCard, BsPeaceFill, BsPeace, BsPenFill, BsPen, BsPencilFill, BsPencilSquare, BsPencil, BsPentagonFill, BsPentagonHalf, BsPentagon, BsPeopleFill, BsPeople, BsPercent, BsPersonAdd, BsPersonArmsUp, BsPersonBadgeFill, BsPersonBadge, BsPersonBoundingBox, BsPersonCheckFill, BsPersonCheck, BsPersonCircle, BsPersonDashFill, BsPersonDash, BsPersonDown, BsPersonExclamation, BsPersonFillAdd, BsPersonFillCheck, BsPersonFillDash, BsPersonFillDown, BsPersonFillExclamation, BsPersonFillGear, BsPersonFillLock, BsPersonFillSlash, BsPersonFillUp, BsPersonFillX, BsPersonFill, BsPersonGear, BsPersonHeart, BsPersonHearts, BsPersonLinesFill, BsPersonLock, BsPersonPlusFill, BsPersonPlus, BsPersonRaisedHand, BsPersonRolodex, BsPersonSlash, BsPersonSquare, BsPersonStandingDress, BsPersonStanding, BsPersonUp, BsPersonVcardFill, BsPersonVcard, BsPersonVideo, BsPersonVideo2, BsPersonVideo3, BsPersonWalking, BsPersonWheelchair, BsPersonWorkspace, BsPersonXFill, BsPersonX, BsPerson, BsPhoneFill, BsPhoneFlip, BsPhoneLandscapeFill, BsPhoneLandscape, BsPhoneVibrateFill, BsPhoneVibrate, BsPhone, BsPieChartFill, BsPieChart, BsPiggyBankFill, BsPiggyBank, BsPinAngleFill, BsPinAngle, BsPinFill, BsPinMapFill, BsPinMap, BsPin, BsPinterest, BsPipFill, BsPip, BsPlayBtnFill, BsPlayBtn, BsPlayCircleFill, BsPlayCircle, BsPlayFill, BsPlay, BsPlaystation, BsPlugFill, BsPlug, BsPlugin, BsPlusCircleDotted, BsPlusCircleFill, BsPlusCircle, BsPlusLg, BsPlusSlashMinus, BsPlusSquareDotted, BsPlusSquareFill, BsPlusSquare, BsPlus, BsPostageFill, BsPostageHeartFill, BsPostageHeart, BsPostage, BsPostcardFill, BsPostcardHeartFill, BsPostcardHeart, BsPostcard, BsPower, BsPrescription, BsPrescription2, BsPrinterFill, BsPrinter, BsProjectorFill, BsProjector, BsPuzzleFill, BsPuzzle, BsQrCodeScan, BsQrCode, BsQuestionCircleFill, BsQuestionCircle, BsQuestionDiamondFill, BsQuestionDiamond, BsQuestionLg, BsQuestionOctagonFill, BsQuestionOctagon, BsQuestionSquareFill, BsQuestionSquare, BsQuestion, BsQuora, BsQuote, BsRCircleFill, BsRCircle, BsRSquareFill, BsRSquare, BsRadar, BsRadioactive, BsRainbow, BsReceiptCutoff, BsReceipt, BsReception0, BsReception1, BsReception2, BsReception3, BsReception4, BsRecordBtnFill, BsRecordBtn, BsRecordCircleFill, BsRecordCircle, BsRecordFill, BsRecord, BsRecord2Fill, BsRecord2, BsRecycle, BsReddit, BsRegex, BsRepeat1, BsRepeat, BsReplyAllFill, BsReplyAll, BsReplyFill, BsReply, BsRewindBtnFill, BsRewindBtn, BsRewindCircleFill, BsRewindCircle, BsRewindFill, BsRewind, BsRobot, BsRocketFill, BsRocketTakeoffFill, BsRocketTakeoff, BsRocket, BsRouterFill, BsRouter, BsRssFill, BsRss, BsRulers, BsSafeFill, BsSafe, BsSafe2Fill, BsSafe2, BsSaveFill, BsSave, BsSave2Fill, BsSave2, BsScissors, BsScooter, BsScrewdriver, BsSdCardFill, BsSdCard, BsSearchHeartFill, BsSearchHeart, BsSearch, BsSegmentedNav, BsSendArrowDownFill, BsSendArrowDown, BsSendArrowUpFill, BsSendArrowUp, BsSendCheckFill, BsSendCheck, BsSendDashFill, BsSendDash, BsSendExclamationFill, BsSendExclamation, BsSendFill, BsSendPlusFill, BsSendPlus, BsSendSlashFill, BsSendSlash, BsSendXFill, BsSendX, BsSend, BsServer, BsShadows, BsShareFill, BsShare, BsShieldCheck, BsShieldExclamation, BsShieldFillCheck, BsShieldFillExclamation, BsShieldFillMinus, BsShieldFillPlus, BsShieldFillX, BsShieldFill, BsShieldLockFill, BsShieldLock, BsShieldMinus, BsShieldPlus, BsShieldShaded, BsShieldSlashFill, BsShieldSlash, BsShieldX, BsShield, BsShiftFill, BsShift, BsShopWindow, BsShop, BsShuffle, BsSignDeadEndFill, BsSignDeadEnd, BsSignDoNotEnterFill, BsSignDoNotEnter, BsSignIntersectionFill, BsSignIntersectionSideFill, BsSignIntersectionSide, BsSignIntersectionTFill, BsSignIntersectionT, BsSignIntersectionYFill, BsSignIntersectionY, BsSignIntersection, BsSignMergeLeftFill, BsSignMergeLeft, BsSignMergeRightFill, BsSignMergeRight, BsSignNoLeftTurnFill, BsSignNoLeftTurn, BsSignNoParkingFill, BsSignNoParking, BsSignNoRightTurnFill, BsSignNoRightTurn, BsSignRailroadFill, BsSignRailroad, BsSignStopFill, BsSignStopLightsFill, BsSignStopLights, BsSignStop, BsSignTurnLeftFill, BsSignTurnLeft, BsSignTurnRightFill, BsSignTurnRight, BsSignTurnSlightLeftFill, BsSignTurnSlightLeft, BsSignTurnSlightRightFill, BsSignTurnSlightRight, BsSignYieldFill, BsSignYield, BsSignal, BsSignpost2Fill, BsSignpost2, BsSignpostFill, BsSignpostSplitFill, BsSignpostSplit, BsSignpost, BsSimFill, BsSimSlashFill, BsSimSlash, BsSim, BsSinaWeibo, BsSkipBackwardBtnFill, BsSkipBackwardBtn, BsSkipBackwardCircleFill, BsSkipBackwardCircle, BsSkipBackwardFill, BsSkipBackward, BsSkipEndBtnFill, BsSkipEndBtn, BsSkipEndCircleFill, BsSkipEndCircle, BsSkipEndFill, BsSkipEnd, BsSkipForwardBtnFill, BsSkipForwardBtn, BsSkipForwardCircleFill, BsSkipForwardCircle, BsSkipForwardFill, BsSkipForward, BsSkipStartBtnFill, BsSkipStartBtn, BsSkipStartCircleFill, BsSkipStartCircle, BsSkipStartFill, BsSkipStart, BsSkype, BsSlack, BsSlashCircleFill, BsSlashCircle, BsSlashLg, BsSlashSquareFill, BsSlashSquare, BsSlash, BsSliders, BsSliders2Vertical, BsSliders2, BsSmartwatch, BsSnapchat, BsSnow, BsSnow2, BsSnow3, BsSortAlphaDownAlt, BsSortAlphaDown, BsSortAlphaUpAlt, BsSortAlphaUp, BsSortDownAlt, BsSortDown, BsSortNumericDownAlt, BsSortNumericDown, BsSortNumericUpAlt, BsSortNumericUp, BsSortUpAlt, BsSortUp, BsSoundwave, BsSourceforge, BsSpeakerFill, BsSpeaker, BsSpeedometer, BsSpeedometer2, BsSpellcheck, BsSpotify, BsSquareFill, BsSquareHalf, BsSquare, BsStackOverflow, BsStack, BsStarFill, BsStarHalf, BsStar, BsStars, BsSteam, BsStickiesFill, BsStickies, BsStickyFill, BsSticky, BsStopBtnFill, BsStopBtn, BsStopCircleFill, BsStopCircle, BsStopFill, BsStop, BsStoplightsFill, BsStoplights, BsStopwatchFill, BsStopwatch, BsStrava, BsStripe, BsSubscript, BsSubstack, BsSubtract, BsSuitClubFill, BsSuitClub, BsSuitDiamondFill, BsSuitDiamond, BsSuitHeartFill, BsSuitHeart, BsSuitSpadeFill, BsSuitSpade, BsSuitcaseFill, BsSuitcaseLgFill, BsSuitcaseLg, BsSuitcase, BsSuitcase2Fill, BsSuitcase2, BsSunFill, BsSun, BsSunglasses, BsSunriseFill, BsSunrise, BsSunsetFill, BsSunset, BsSuperscript, BsSymmetryHorizontal, BsSymmetryVertical, BsTable, BsTabletFill, BsTabletLandscapeFill, BsTabletLandscape, BsTablet, BsTagFill, BsTag, BsTagsFill, BsTags, BsTaxiFrontFill, BsTaxiFront, BsTelegram, BsTelephoneFill, BsTelephoneForwardFill, BsTelephoneForward, BsTelephoneInboundFill, BsTelephoneInbound, BsTelephoneMinusFill, BsTelephoneMinus, BsTelephoneOutboundFill, BsTelephoneOutbound, BsTelephonePlusFill, BsTelephonePlus, BsTelephoneXFill, BsTelephoneX, BsTelephone, BsTencentQq, BsTerminalDash, BsTerminalFill, BsTerminalPlus, BsTerminalSplit, BsTerminalX, BsTerminal, BsTextCenter, BsTextIndentLeft, BsTextIndentRight, BsTextLeft, BsTextParagraph, BsTextRight, BsTextWrap, BsTextareaResize, BsTextareaT, BsTextarea, BsThermometerHalf, BsThermometerHigh, BsThermometerLow, BsThermometerSnow, BsThermometerSun, BsThermometer, BsThreadsFill, BsThreads, BsThreeDotsVertical, BsThreeDots, BsThunderboltFill, BsThunderbolt, BsTicketDetailedFill, BsTicketDetailed, BsTicketFill, BsTicketPerforatedFill, BsTicketPerforated, BsTicket, BsTiktok, BsToggleOff, BsToggleOn, BsToggle2Off, BsToggle2On, BsToggles, BsToggles2, BsTools, BsTornado, BsTrainFreightFrontFill, BsTrainFreightFront, BsTrainFrontFill, BsTrainFront, BsTrainLightrailFrontFill, BsTrainLightrailFront, BsTranslate, BsTransparency, BsTrashFill, BsTrash, BsTrash2Fill, BsTrash2, BsTrash3Fill, BsTrash3, BsTreeFill, BsTree, BsTrello, BsTriangleFill, BsTriangleHalf, BsTriangle, BsTrophyFill, BsTrophy, BsTropicalStorm, BsTruckFlatbed, BsTruckFrontFill, BsTruckFront, BsTruck, BsTsunami, BsTvFill, BsTv, BsTwitch, BsTwitterX, BsTwitter, BsTypeBold, BsTypeH1, BsTypeH2, BsTypeH3, BsTypeH4, BsTypeH5, BsTypeH6, BsTypeItalic, BsTypeStrikethrough, BsTypeUnderline, BsType, BsUbuntu, BsUiChecksGrid, BsUiChecks, BsUiRadiosGrid, BsUiRadios, BsUmbrellaFill, BsUmbrella, BsUnindent, BsUnion, BsUnity, BsUniversalAccessCircle, BsUniversalAccess, BsUnlockFill, BsUnlock, BsUpcScan, BsUpc, BsUpload, BsUsbCFill, BsUsbC, BsUsbDriveFill, BsUsbDrive, BsUsbFill, BsUsbMicroFill, BsUsbMicro, BsUsbMiniFill, BsUsbMini, BsUsbPlugFill, BsUsbPlug, BsUsbSymbol, BsUsb, BsValentine, BsValentine2, BsVectorPen, BsViewList, BsViewStacked, BsVignette, BsVimeo, BsVinylFill, BsVinyl, BsVirus, BsVirus2, BsVoicemail, BsVolumeDownFill, BsVolumeDown, BsVolumeMuteFill, BsVolumeMute, BsVolumeOffFill, BsVolumeOff, BsVolumeUpFill, BsVolumeUp, BsVr, BsWalletFill, BsWallet, BsWallet2, BsWatch, BsWater, BsWebcamFill, BsWebcam, BsWechat, BsWhatsapp, BsWifi1, BsWifi2, BsWifiOff, BsWifi, BsWikipedia, BsWind, BsWindowDash, BsWindowDesktop, BsWindowDock, BsWindowFullscreen, BsWindowPlus, BsWindowSidebar, BsWindowSplit, BsWindowStack, BsWindowX, BsWindow, BsWindows, BsWordpress, BsWrenchAdjustableCircleFill, BsWrenchAdjustableCircle, BsWrenchAdjustable, BsWrench, BsXCircleFill, BsXCircle, BsXDiamondFill, BsXDiamond, BsXLg, BsXOctagonFill, BsXOctagon, BsXSquareFill, BsXSquare, BsX, BsXbox, BsYelp, BsYinYang, BsYoutube, BsZoomIn, BsZoomOut;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "bs:BsMedium": return [3 /*break*/, 1];
                        case "bs:BsMegaphoneFill": return [3 /*break*/, 3];
                        case "bs:BsMegaphone": return [3 /*break*/, 5];
                        case "bs:BsMemory": return [3 /*break*/, 7];
                        case "bs:BsMenuAppFill": return [3 /*break*/, 9];
                        case "bs:BsMenuApp": return [3 /*break*/, 11];
                        case "bs:BsMenuButtonFill": return [3 /*break*/, 13];
                        case "bs:BsMenuButtonWideFill": return [3 /*break*/, 15];
                        case "bs:BsMenuButtonWide": return [3 /*break*/, 17];
                        case "bs:BsMenuButton": return [3 /*break*/, 19];
                        case "bs:BsMenuDown": return [3 /*break*/, 21];
                        case "bs:BsMenuUp": return [3 /*break*/, 23];
                        case "bs:BsMessenger": return [3 /*break*/, 25];
                        case "bs:BsMeta": return [3 /*break*/, 27];
                        case "bs:BsMicFill": return [3 /*break*/, 29];
                        case "bs:BsMicMuteFill": return [3 /*break*/, 31];
                        case "bs:BsMicMute": return [3 /*break*/, 33];
                        case "bs:BsMic": return [3 /*break*/, 35];
                        case "bs:BsMicrosoftTeams": return [3 /*break*/, 37];
                        case "bs:BsMicrosoft": return [3 /*break*/, 39];
                        case "bs:BsMinecartLoaded": return [3 /*break*/, 41];
                        case "bs:BsMinecart": return [3 /*break*/, 43];
                        case "bs:BsModemFill": return [3 /*break*/, 45];
                        case "bs:BsModem": return [3 /*break*/, 47];
                        case "bs:BsMoisture": return [3 /*break*/, 49];
                        case "bs:BsMoonFill": return [3 /*break*/, 51];
                        case "bs:BsMoonStarsFill": return [3 /*break*/, 53];
                        case "bs:BsMoonStars": return [3 /*break*/, 55];
                        case "bs:BsMoon": return [3 /*break*/, 57];
                        case "bs:BsMortarboardFill": return [3 /*break*/, 59];
                        case "bs:BsMortarboard": return [3 /*break*/, 61];
                        case "bs:BsMotherboardFill": return [3 /*break*/, 63];
                        case "bs:BsMotherboard": return [3 /*break*/, 65];
                        case "bs:BsMouseFill": return [3 /*break*/, 67];
                        case "bs:BsMouse": return [3 /*break*/, 69];
                        case "bs:BsMouse2Fill": return [3 /*break*/, 71];
                        case "bs:BsMouse2": return [3 /*break*/, 73];
                        case "bs:BsMouse3Fill": return [3 /*break*/, 75];
                        case "bs:BsMouse3": return [3 /*break*/, 77];
                        case "bs:BsMusicNoteBeamed": return [3 /*break*/, 79];
                        case "bs:BsMusicNoteList": return [3 /*break*/, 81];
                        case "bs:BsMusicNote": return [3 /*break*/, 83];
                        case "bs:BsMusicPlayerFill": return [3 /*break*/, 85];
                        case "bs:BsMusicPlayer": return [3 /*break*/, 87];
                        case "bs:BsNewspaper": return [3 /*break*/, 89];
                        case "bs:BsNintendoSwitch": return [3 /*break*/, 91];
                        case "bs:BsNodeMinusFill": return [3 /*break*/, 93];
                        case "bs:BsNodeMinus": return [3 /*break*/, 95];
                        case "bs:BsNodePlusFill": return [3 /*break*/, 97];
                        case "bs:BsNodePlus": return [3 /*break*/, 99];
                        case "bs:BsNoiseReduction": return [3 /*break*/, 101];
                        case "bs:BsNutFill": return [3 /*break*/, 103];
                        case "bs:BsNut": return [3 /*break*/, 105];
                        case "bs:BsNvidia": return [3 /*break*/, 107];
                        case "bs:BsNvmeFill": return [3 /*break*/, 109];
                        case "bs:BsNvme": return [3 /*break*/, 111];
                        case "bs:BsOctagonFill": return [3 /*break*/, 113];
                        case "bs:BsOctagonHalf": return [3 /*break*/, 115];
                        case "bs:BsOctagon": return [3 /*break*/, 117];
                        case "bs:BsOpencollective": return [3 /*break*/, 119];
                        case "bs:BsOpticalAudioFill": return [3 /*break*/, 121];
                        case "bs:BsOpticalAudio": return [3 /*break*/, 123];
                        case "bs:BsOption": return [3 /*break*/, 125];
                        case "bs:BsOutlet": return [3 /*break*/, 127];
                        case "bs:BsPCircleFill": return [3 /*break*/, 129];
                        case "bs:BsPCircle": return [3 /*break*/, 131];
                        case "bs:BsPSquareFill": return [3 /*break*/, 133];
                        case "bs:BsPSquare": return [3 /*break*/, 135];
                        case "bs:BsPaintBucket": return [3 /*break*/, 137];
                        case "bs:BsPaletteFill": return [3 /*break*/, 139];
                        case "bs:BsPalette": return [3 /*break*/, 141];
                        case "bs:BsPalette2": return [3 /*break*/, 143];
                        case "bs:BsPaperclip": return [3 /*break*/, 145];
                        case "bs:BsParagraph": return [3 /*break*/, 147];
                        case "bs:BsPassFill": return [3 /*break*/, 149];
                        case "bs:BsPass": return [3 /*break*/, 151];
                        case "bs:BsPassportFill": return [3 /*break*/, 153];
                        case "bs:BsPassport": return [3 /*break*/, 155];
                        case "bs:BsPatchCheckFill": return [3 /*break*/, 157];
                        case "bs:BsPatchCheck": return [3 /*break*/, 159];
                        case "bs:BsPatchExclamationFill": return [3 /*break*/, 161];
                        case "bs:BsPatchExclamation": return [3 /*break*/, 163];
                        case "bs:BsPatchMinusFill": return [3 /*break*/, 165];
                        case "bs:BsPatchMinus": return [3 /*break*/, 167];
                        case "bs:BsPatchPlusFill": return [3 /*break*/, 169];
                        case "bs:BsPatchPlus": return [3 /*break*/, 171];
                        case "bs:BsPatchQuestionFill": return [3 /*break*/, 173];
                        case "bs:BsPatchQuestion": return [3 /*break*/, 175];
                        case "bs:BsPauseBtnFill": return [3 /*break*/, 177];
                        case "bs:BsPauseBtn": return [3 /*break*/, 179];
                        case "bs:BsPauseCircleFill": return [3 /*break*/, 181];
                        case "bs:BsPauseCircle": return [3 /*break*/, 183];
                        case "bs:BsPauseFill": return [3 /*break*/, 185];
                        case "bs:BsPause": return [3 /*break*/, 187];
                        case "bs:BsPaypal": return [3 /*break*/, 189];
                        case "bs:BsPcDisplayHorizontal": return [3 /*break*/, 191];
                        case "bs:BsPcDisplay": return [3 /*break*/, 193];
                        case "bs:BsPcHorizontal": return [3 /*break*/, 195];
                        case "bs:BsPc": return [3 /*break*/, 197];
                        case "bs:BsPciCardNetwork": return [3 /*break*/, 199];
                        case "bs:BsPciCardSound": return [3 /*break*/, 201];
                        case "bs:BsPciCard": return [3 /*break*/, 203];
                        case "bs:BsPeaceFill": return [3 /*break*/, 205];
                        case "bs:BsPeace": return [3 /*break*/, 207];
                        case "bs:BsPenFill": return [3 /*break*/, 209];
                        case "bs:BsPen": return [3 /*break*/, 211];
                        case "bs:BsPencilFill": return [3 /*break*/, 213];
                        case "bs:BsPencilSquare": return [3 /*break*/, 215];
                        case "bs:BsPencil": return [3 /*break*/, 217];
                        case "bs:BsPentagonFill": return [3 /*break*/, 219];
                        case "bs:BsPentagonHalf": return [3 /*break*/, 221];
                        case "bs:BsPentagon": return [3 /*break*/, 223];
                        case "bs:BsPeopleFill": return [3 /*break*/, 225];
                        case "bs:BsPeople": return [3 /*break*/, 227];
                        case "bs:BsPercent": return [3 /*break*/, 229];
                        case "bs:BsPersonAdd": return [3 /*break*/, 231];
                        case "bs:BsPersonArmsUp": return [3 /*break*/, 233];
                        case "bs:BsPersonBadgeFill": return [3 /*break*/, 235];
                        case "bs:BsPersonBadge": return [3 /*break*/, 237];
                        case "bs:BsPersonBoundingBox": return [3 /*break*/, 239];
                        case "bs:BsPersonCheckFill": return [3 /*break*/, 241];
                        case "bs:BsPersonCheck": return [3 /*break*/, 243];
                        case "bs:BsPersonCircle": return [3 /*break*/, 245];
                        case "bs:BsPersonDashFill": return [3 /*break*/, 247];
                        case "bs:BsPersonDash": return [3 /*break*/, 249];
                        case "bs:BsPersonDown": return [3 /*break*/, 251];
                        case "bs:BsPersonExclamation": return [3 /*break*/, 253];
                        case "bs:BsPersonFillAdd": return [3 /*break*/, 255];
                        case "bs:BsPersonFillCheck": return [3 /*break*/, 257];
                        case "bs:BsPersonFillDash": return [3 /*break*/, 259];
                        case "bs:BsPersonFillDown": return [3 /*break*/, 261];
                        case "bs:BsPersonFillExclamation": return [3 /*break*/, 263];
                        case "bs:BsPersonFillGear": return [3 /*break*/, 265];
                        case "bs:BsPersonFillLock": return [3 /*break*/, 267];
                        case "bs:BsPersonFillSlash": return [3 /*break*/, 269];
                        case "bs:BsPersonFillUp": return [3 /*break*/, 271];
                        case "bs:BsPersonFillX": return [3 /*break*/, 273];
                        case "bs:BsPersonFill": return [3 /*break*/, 275];
                        case "bs:BsPersonGear": return [3 /*break*/, 277];
                        case "bs:BsPersonHeart": return [3 /*break*/, 279];
                        case "bs:BsPersonHearts": return [3 /*break*/, 281];
                        case "bs:BsPersonLinesFill": return [3 /*break*/, 283];
                        case "bs:BsPersonLock": return [3 /*break*/, 285];
                        case "bs:BsPersonPlusFill": return [3 /*break*/, 287];
                        case "bs:BsPersonPlus": return [3 /*break*/, 289];
                        case "bs:BsPersonRaisedHand": return [3 /*break*/, 291];
                        case "bs:BsPersonRolodex": return [3 /*break*/, 293];
                        case "bs:BsPersonSlash": return [3 /*break*/, 295];
                        case "bs:BsPersonSquare": return [3 /*break*/, 297];
                        case "bs:BsPersonStandingDress": return [3 /*break*/, 299];
                        case "bs:BsPersonStanding": return [3 /*break*/, 301];
                        case "bs:BsPersonUp": return [3 /*break*/, 303];
                        case "bs:BsPersonVcardFill": return [3 /*break*/, 305];
                        case "bs:BsPersonVcard": return [3 /*break*/, 307];
                        case "bs:BsPersonVideo": return [3 /*break*/, 309];
                        case "bs:BsPersonVideo2": return [3 /*break*/, 311];
                        case "bs:BsPersonVideo3": return [3 /*break*/, 313];
                        case "bs:BsPersonWalking": return [3 /*break*/, 315];
                        case "bs:BsPersonWheelchair": return [3 /*break*/, 317];
                        case "bs:BsPersonWorkspace": return [3 /*break*/, 319];
                        case "bs:BsPersonXFill": return [3 /*break*/, 321];
                        case "bs:BsPersonX": return [3 /*break*/, 323];
                        case "bs:BsPerson": return [3 /*break*/, 325];
                        case "bs:BsPhoneFill": return [3 /*break*/, 327];
                        case "bs:BsPhoneFlip": return [3 /*break*/, 329];
                        case "bs:BsPhoneLandscapeFill": return [3 /*break*/, 331];
                        case "bs:BsPhoneLandscape": return [3 /*break*/, 333];
                        case "bs:BsPhoneVibrateFill": return [3 /*break*/, 335];
                        case "bs:BsPhoneVibrate": return [3 /*break*/, 337];
                        case "bs:BsPhone": return [3 /*break*/, 339];
                        case "bs:BsPieChartFill": return [3 /*break*/, 341];
                        case "bs:BsPieChart": return [3 /*break*/, 343];
                        case "bs:BsPiggyBankFill": return [3 /*break*/, 345];
                        case "bs:BsPiggyBank": return [3 /*break*/, 347];
                        case "bs:BsPinAngleFill": return [3 /*break*/, 349];
                        case "bs:BsPinAngle": return [3 /*break*/, 351];
                        case "bs:BsPinFill": return [3 /*break*/, 353];
                        case "bs:BsPinMapFill": return [3 /*break*/, 355];
                        case "bs:BsPinMap": return [3 /*break*/, 357];
                        case "bs:BsPin": return [3 /*break*/, 359];
                        case "bs:BsPinterest": return [3 /*break*/, 361];
                        case "bs:BsPipFill": return [3 /*break*/, 363];
                        case "bs:BsPip": return [3 /*break*/, 365];
                        case "bs:BsPlayBtnFill": return [3 /*break*/, 367];
                        case "bs:BsPlayBtn": return [3 /*break*/, 369];
                        case "bs:BsPlayCircleFill": return [3 /*break*/, 371];
                        case "bs:BsPlayCircle": return [3 /*break*/, 373];
                        case "bs:BsPlayFill": return [3 /*break*/, 375];
                        case "bs:BsPlay": return [3 /*break*/, 377];
                        case "bs:BsPlaystation": return [3 /*break*/, 379];
                        case "bs:BsPlugFill": return [3 /*break*/, 381];
                        case "bs:BsPlug": return [3 /*break*/, 383];
                        case "bs:BsPlugin": return [3 /*break*/, 385];
                        case "bs:BsPlusCircleDotted": return [3 /*break*/, 387];
                        case "bs:BsPlusCircleFill": return [3 /*break*/, 389];
                        case "bs:BsPlusCircle": return [3 /*break*/, 391];
                        case "bs:BsPlusLg": return [3 /*break*/, 393];
                        case "bs:BsPlusSlashMinus": return [3 /*break*/, 395];
                        case "bs:BsPlusSquareDotted": return [3 /*break*/, 397];
                        case "bs:BsPlusSquareFill": return [3 /*break*/, 399];
                        case "bs:BsPlusSquare": return [3 /*break*/, 401];
                        case "bs:BsPlus": return [3 /*break*/, 403];
                        case "bs:BsPostageFill": return [3 /*break*/, 405];
                        case "bs:BsPostageHeartFill": return [3 /*break*/, 407];
                        case "bs:BsPostageHeart": return [3 /*break*/, 409];
                        case "bs:BsPostage": return [3 /*break*/, 411];
                        case "bs:BsPostcardFill": return [3 /*break*/, 413];
                        case "bs:BsPostcardHeartFill": return [3 /*break*/, 415];
                        case "bs:BsPostcardHeart": return [3 /*break*/, 417];
                        case "bs:BsPostcard": return [3 /*break*/, 419];
                        case "bs:BsPower": return [3 /*break*/, 421];
                        case "bs:BsPrescription": return [3 /*break*/, 423];
                        case "bs:BsPrescription2": return [3 /*break*/, 425];
                        case "bs:BsPrinterFill": return [3 /*break*/, 427];
                        case "bs:BsPrinter": return [3 /*break*/, 429];
                        case "bs:BsProjectorFill": return [3 /*break*/, 431];
                        case "bs:BsProjector": return [3 /*break*/, 433];
                        case "bs:BsPuzzleFill": return [3 /*break*/, 435];
                        case "bs:BsPuzzle": return [3 /*break*/, 437];
                        case "bs:BsQrCodeScan": return [3 /*break*/, 439];
                        case "bs:BsQrCode": return [3 /*break*/, 441];
                        case "bs:BsQuestionCircleFill": return [3 /*break*/, 443];
                        case "bs:BsQuestionCircle": return [3 /*break*/, 445];
                        case "bs:BsQuestionDiamondFill": return [3 /*break*/, 447];
                        case "bs:BsQuestionDiamond": return [3 /*break*/, 449];
                        case "bs:BsQuestionLg": return [3 /*break*/, 451];
                        case "bs:BsQuestionOctagonFill": return [3 /*break*/, 453];
                        case "bs:BsQuestionOctagon": return [3 /*break*/, 455];
                        case "bs:BsQuestionSquareFill": return [3 /*break*/, 457];
                        case "bs:BsQuestionSquare": return [3 /*break*/, 459];
                        case "bs:BsQuestion": return [3 /*break*/, 461];
                        case "bs:BsQuora": return [3 /*break*/, 463];
                        case "bs:BsQuote": return [3 /*break*/, 465];
                        case "bs:BsRCircleFill": return [3 /*break*/, 467];
                        case "bs:BsRCircle": return [3 /*break*/, 469];
                        case "bs:BsRSquareFill": return [3 /*break*/, 471];
                        case "bs:BsRSquare": return [3 /*break*/, 473];
                        case "bs:BsRadar": return [3 /*break*/, 475];
                        case "bs:BsRadioactive": return [3 /*break*/, 477];
                        case "bs:BsRainbow": return [3 /*break*/, 479];
                        case "bs:BsReceiptCutoff": return [3 /*break*/, 481];
                        case "bs:BsReceipt": return [3 /*break*/, 483];
                        case "bs:BsReception0": return [3 /*break*/, 485];
                        case "bs:BsReception1": return [3 /*break*/, 487];
                        case "bs:BsReception2": return [3 /*break*/, 489];
                        case "bs:BsReception3": return [3 /*break*/, 491];
                        case "bs:BsReception4": return [3 /*break*/, 493];
                        case "bs:BsRecordBtnFill": return [3 /*break*/, 495];
                        case "bs:BsRecordBtn": return [3 /*break*/, 497];
                        case "bs:BsRecordCircleFill": return [3 /*break*/, 499];
                        case "bs:BsRecordCircle": return [3 /*break*/, 501];
                        case "bs:BsRecordFill": return [3 /*break*/, 503];
                        case "bs:BsRecord": return [3 /*break*/, 505];
                        case "bs:BsRecord2Fill": return [3 /*break*/, 507];
                        case "bs:BsRecord2": return [3 /*break*/, 509];
                        case "bs:BsRecycle": return [3 /*break*/, 511];
                        case "bs:BsReddit": return [3 /*break*/, 513];
                        case "bs:BsRegex": return [3 /*break*/, 515];
                        case "bs:BsRepeat1": return [3 /*break*/, 517];
                        case "bs:BsRepeat": return [3 /*break*/, 519];
                        case "bs:BsReplyAllFill": return [3 /*break*/, 521];
                        case "bs:BsReplyAll": return [3 /*break*/, 523];
                        case "bs:BsReplyFill": return [3 /*break*/, 525];
                        case "bs:BsReply": return [3 /*break*/, 527];
                        case "bs:BsRewindBtnFill": return [3 /*break*/, 529];
                        case "bs:BsRewindBtn": return [3 /*break*/, 531];
                        case "bs:BsRewindCircleFill": return [3 /*break*/, 533];
                        case "bs:BsRewindCircle": return [3 /*break*/, 535];
                        case "bs:BsRewindFill": return [3 /*break*/, 537];
                        case "bs:BsRewind": return [3 /*break*/, 539];
                        case "bs:BsRobot": return [3 /*break*/, 541];
                        case "bs:BsRocketFill": return [3 /*break*/, 543];
                        case "bs:BsRocketTakeoffFill": return [3 /*break*/, 545];
                        case "bs:BsRocketTakeoff": return [3 /*break*/, 547];
                        case "bs:BsRocket": return [3 /*break*/, 549];
                        case "bs:BsRouterFill": return [3 /*break*/, 551];
                        case "bs:BsRouter": return [3 /*break*/, 553];
                        case "bs:BsRssFill": return [3 /*break*/, 555];
                        case "bs:BsRss": return [3 /*break*/, 557];
                        case "bs:BsRulers": return [3 /*break*/, 559];
                        case "bs:BsSafeFill": return [3 /*break*/, 561];
                        case "bs:BsSafe": return [3 /*break*/, 563];
                        case "bs:BsSafe2Fill": return [3 /*break*/, 565];
                        case "bs:BsSafe2": return [3 /*break*/, 567];
                        case "bs:BsSaveFill": return [3 /*break*/, 569];
                        case "bs:BsSave": return [3 /*break*/, 571];
                        case "bs:BsSave2Fill": return [3 /*break*/, 573];
                        case "bs:BsSave2": return [3 /*break*/, 575];
                        case "bs:BsScissors": return [3 /*break*/, 577];
                        case "bs:BsScooter": return [3 /*break*/, 579];
                        case "bs:BsScrewdriver": return [3 /*break*/, 581];
                        case "bs:BsSdCardFill": return [3 /*break*/, 583];
                        case "bs:BsSdCard": return [3 /*break*/, 585];
                        case "bs:BsSearchHeartFill": return [3 /*break*/, 587];
                        case "bs:BsSearchHeart": return [3 /*break*/, 589];
                        case "bs:BsSearch": return [3 /*break*/, 591];
                        case "bs:BsSegmentedNav": return [3 /*break*/, 593];
                        case "bs:BsSendArrowDownFill": return [3 /*break*/, 595];
                        case "bs:BsSendArrowDown": return [3 /*break*/, 597];
                        case "bs:BsSendArrowUpFill": return [3 /*break*/, 599];
                        case "bs:BsSendArrowUp": return [3 /*break*/, 601];
                        case "bs:BsSendCheckFill": return [3 /*break*/, 603];
                        case "bs:BsSendCheck": return [3 /*break*/, 605];
                        case "bs:BsSendDashFill": return [3 /*break*/, 607];
                        case "bs:BsSendDash": return [3 /*break*/, 609];
                        case "bs:BsSendExclamationFill": return [3 /*break*/, 611];
                        case "bs:BsSendExclamation": return [3 /*break*/, 613];
                        case "bs:BsSendFill": return [3 /*break*/, 615];
                        case "bs:BsSendPlusFill": return [3 /*break*/, 617];
                        case "bs:BsSendPlus": return [3 /*break*/, 619];
                        case "bs:BsSendSlashFill": return [3 /*break*/, 621];
                        case "bs:BsSendSlash": return [3 /*break*/, 623];
                        case "bs:BsSendXFill": return [3 /*break*/, 625];
                        case "bs:BsSendX": return [3 /*break*/, 627];
                        case "bs:BsSend": return [3 /*break*/, 629];
                        case "bs:BsServer": return [3 /*break*/, 631];
                        case "bs:BsShadows": return [3 /*break*/, 633];
                        case "bs:BsShareFill": return [3 /*break*/, 635];
                        case "bs:BsShare": return [3 /*break*/, 637];
                        case "bs:BsShieldCheck": return [3 /*break*/, 639];
                        case "bs:BsShieldExclamation": return [3 /*break*/, 641];
                        case "bs:BsShieldFillCheck": return [3 /*break*/, 643];
                        case "bs:BsShieldFillExclamation": return [3 /*break*/, 645];
                        case "bs:BsShieldFillMinus": return [3 /*break*/, 647];
                        case "bs:BsShieldFillPlus": return [3 /*break*/, 649];
                        case "bs:BsShieldFillX": return [3 /*break*/, 651];
                        case "bs:BsShieldFill": return [3 /*break*/, 653];
                        case "bs:BsShieldLockFill": return [3 /*break*/, 655];
                        case "bs:BsShieldLock": return [3 /*break*/, 657];
                        case "bs:BsShieldMinus": return [3 /*break*/, 659];
                        case "bs:BsShieldPlus": return [3 /*break*/, 661];
                        case "bs:BsShieldShaded": return [3 /*break*/, 663];
                        case "bs:BsShieldSlashFill": return [3 /*break*/, 665];
                        case "bs:BsShieldSlash": return [3 /*break*/, 667];
                        case "bs:BsShieldX": return [3 /*break*/, 669];
                        case "bs:BsShield": return [3 /*break*/, 671];
                        case "bs:BsShiftFill": return [3 /*break*/, 673];
                        case "bs:BsShift": return [3 /*break*/, 675];
                        case "bs:BsShopWindow": return [3 /*break*/, 677];
                        case "bs:BsShop": return [3 /*break*/, 679];
                        case "bs:BsShuffle": return [3 /*break*/, 681];
                        case "bs:BsSignDeadEndFill": return [3 /*break*/, 683];
                        case "bs:BsSignDeadEnd": return [3 /*break*/, 685];
                        case "bs:BsSignDoNotEnterFill": return [3 /*break*/, 687];
                        case "bs:BsSignDoNotEnter": return [3 /*break*/, 689];
                        case "bs:BsSignIntersectionFill": return [3 /*break*/, 691];
                        case "bs:BsSignIntersectionSideFill": return [3 /*break*/, 693];
                        case "bs:BsSignIntersectionSide": return [3 /*break*/, 695];
                        case "bs:BsSignIntersectionTFill": return [3 /*break*/, 697];
                        case "bs:BsSignIntersectionT": return [3 /*break*/, 699];
                        case "bs:BsSignIntersectionYFill": return [3 /*break*/, 701];
                        case "bs:BsSignIntersectionY": return [3 /*break*/, 703];
                        case "bs:BsSignIntersection": return [3 /*break*/, 705];
                        case "bs:BsSignMergeLeftFill": return [3 /*break*/, 707];
                        case "bs:BsSignMergeLeft": return [3 /*break*/, 709];
                        case "bs:BsSignMergeRightFill": return [3 /*break*/, 711];
                        case "bs:BsSignMergeRight": return [3 /*break*/, 713];
                        case "bs:BsSignNoLeftTurnFill": return [3 /*break*/, 715];
                        case "bs:BsSignNoLeftTurn": return [3 /*break*/, 717];
                        case "bs:BsSignNoParkingFill": return [3 /*break*/, 719];
                        case "bs:BsSignNoParking": return [3 /*break*/, 721];
                        case "bs:BsSignNoRightTurnFill": return [3 /*break*/, 723];
                        case "bs:BsSignNoRightTurn": return [3 /*break*/, 725];
                        case "bs:BsSignRailroadFill": return [3 /*break*/, 727];
                        case "bs:BsSignRailroad": return [3 /*break*/, 729];
                        case "bs:BsSignStopFill": return [3 /*break*/, 731];
                        case "bs:BsSignStopLightsFill": return [3 /*break*/, 733];
                        case "bs:BsSignStopLights": return [3 /*break*/, 735];
                        case "bs:BsSignStop": return [3 /*break*/, 737];
                        case "bs:BsSignTurnLeftFill": return [3 /*break*/, 739];
                        case "bs:BsSignTurnLeft": return [3 /*break*/, 741];
                        case "bs:BsSignTurnRightFill": return [3 /*break*/, 743];
                        case "bs:BsSignTurnRight": return [3 /*break*/, 745];
                        case "bs:BsSignTurnSlightLeftFill": return [3 /*break*/, 747];
                        case "bs:BsSignTurnSlightLeft": return [3 /*break*/, 749];
                        case "bs:BsSignTurnSlightRightFill": return [3 /*break*/, 751];
                        case "bs:BsSignTurnSlightRight": return [3 /*break*/, 753];
                        case "bs:BsSignYieldFill": return [3 /*break*/, 755];
                        case "bs:BsSignYield": return [3 /*break*/, 757];
                        case "bs:BsSignal": return [3 /*break*/, 759];
                        case "bs:BsSignpost2Fill": return [3 /*break*/, 761];
                        case "bs:BsSignpost2": return [3 /*break*/, 763];
                        case "bs:BsSignpostFill": return [3 /*break*/, 765];
                        case "bs:BsSignpostSplitFill": return [3 /*break*/, 767];
                        case "bs:BsSignpostSplit": return [3 /*break*/, 769];
                        case "bs:BsSignpost": return [3 /*break*/, 771];
                        case "bs:BsSimFill": return [3 /*break*/, 773];
                        case "bs:BsSimSlashFill": return [3 /*break*/, 775];
                        case "bs:BsSimSlash": return [3 /*break*/, 777];
                        case "bs:BsSim": return [3 /*break*/, 779];
                        case "bs:BsSinaWeibo": return [3 /*break*/, 781];
                        case "bs:BsSkipBackwardBtnFill": return [3 /*break*/, 783];
                        case "bs:BsSkipBackwardBtn": return [3 /*break*/, 785];
                        case "bs:BsSkipBackwardCircleFill": return [3 /*break*/, 787];
                        case "bs:BsSkipBackwardCircle": return [3 /*break*/, 789];
                        case "bs:BsSkipBackwardFill": return [3 /*break*/, 791];
                        case "bs:BsSkipBackward": return [3 /*break*/, 793];
                        case "bs:BsSkipEndBtnFill": return [3 /*break*/, 795];
                        case "bs:BsSkipEndBtn": return [3 /*break*/, 797];
                        case "bs:BsSkipEndCircleFill": return [3 /*break*/, 799];
                        case "bs:BsSkipEndCircle": return [3 /*break*/, 801];
                        case "bs:BsSkipEndFill": return [3 /*break*/, 803];
                        case "bs:BsSkipEnd": return [3 /*break*/, 805];
                        case "bs:BsSkipForwardBtnFill": return [3 /*break*/, 807];
                        case "bs:BsSkipForwardBtn": return [3 /*break*/, 809];
                        case "bs:BsSkipForwardCircleFill": return [3 /*break*/, 811];
                        case "bs:BsSkipForwardCircle": return [3 /*break*/, 813];
                        case "bs:BsSkipForwardFill": return [3 /*break*/, 815];
                        case "bs:BsSkipForward": return [3 /*break*/, 817];
                        case "bs:BsSkipStartBtnFill": return [3 /*break*/, 819];
                        case "bs:BsSkipStartBtn": return [3 /*break*/, 821];
                        case "bs:BsSkipStartCircleFill": return [3 /*break*/, 823];
                        case "bs:BsSkipStartCircle": return [3 /*break*/, 825];
                        case "bs:BsSkipStartFill": return [3 /*break*/, 827];
                        case "bs:BsSkipStart": return [3 /*break*/, 829];
                        case "bs:BsSkype": return [3 /*break*/, 831];
                        case "bs:BsSlack": return [3 /*break*/, 833];
                        case "bs:BsSlashCircleFill": return [3 /*break*/, 835];
                        case "bs:BsSlashCircle": return [3 /*break*/, 837];
                        case "bs:BsSlashLg": return [3 /*break*/, 839];
                        case "bs:BsSlashSquareFill": return [3 /*break*/, 841];
                        case "bs:BsSlashSquare": return [3 /*break*/, 843];
                        case "bs:BsSlash": return [3 /*break*/, 845];
                        case "bs:BsSliders": return [3 /*break*/, 847];
                        case "bs:BsSliders2Vertical": return [3 /*break*/, 849];
                        case "bs:BsSliders2": return [3 /*break*/, 851];
                        case "bs:BsSmartwatch": return [3 /*break*/, 853];
                        case "bs:BsSnapchat": return [3 /*break*/, 855];
                        case "bs:BsSnow": return [3 /*break*/, 857];
                        case "bs:BsSnow2": return [3 /*break*/, 859];
                        case "bs:BsSnow3": return [3 /*break*/, 861];
                        case "bs:BsSortAlphaDownAlt": return [3 /*break*/, 863];
                        case "bs:BsSortAlphaDown": return [3 /*break*/, 865];
                        case "bs:BsSortAlphaUpAlt": return [3 /*break*/, 867];
                        case "bs:BsSortAlphaUp": return [3 /*break*/, 869];
                        case "bs:BsSortDownAlt": return [3 /*break*/, 871];
                        case "bs:BsSortDown": return [3 /*break*/, 873];
                        case "bs:BsSortNumericDownAlt": return [3 /*break*/, 875];
                        case "bs:BsSortNumericDown": return [3 /*break*/, 877];
                        case "bs:BsSortNumericUpAlt": return [3 /*break*/, 879];
                        case "bs:BsSortNumericUp": return [3 /*break*/, 881];
                        case "bs:BsSortUpAlt": return [3 /*break*/, 883];
                        case "bs:BsSortUp": return [3 /*break*/, 885];
                        case "bs:BsSoundwave": return [3 /*break*/, 887];
                        case "bs:BsSourceforge": return [3 /*break*/, 889];
                        case "bs:BsSpeakerFill": return [3 /*break*/, 891];
                        case "bs:BsSpeaker": return [3 /*break*/, 893];
                        case "bs:BsSpeedometer": return [3 /*break*/, 895];
                        case "bs:BsSpeedometer2": return [3 /*break*/, 897];
                        case "bs:BsSpellcheck": return [3 /*break*/, 899];
                        case "bs:BsSpotify": return [3 /*break*/, 901];
                        case "bs:BsSquareFill": return [3 /*break*/, 903];
                        case "bs:BsSquareHalf": return [3 /*break*/, 905];
                        case "bs:BsSquare": return [3 /*break*/, 907];
                        case "bs:BsStackOverflow": return [3 /*break*/, 909];
                        case "bs:BsStack": return [3 /*break*/, 911];
                        case "bs:BsStarFill": return [3 /*break*/, 913];
                        case "bs:BsStarHalf": return [3 /*break*/, 915];
                        case "bs:BsStar": return [3 /*break*/, 917];
                        case "bs:BsStars": return [3 /*break*/, 919];
                        case "bs:BsSteam": return [3 /*break*/, 921];
                        case "bs:BsStickiesFill": return [3 /*break*/, 923];
                        case "bs:BsStickies": return [3 /*break*/, 925];
                        case "bs:BsStickyFill": return [3 /*break*/, 927];
                        case "bs:BsSticky": return [3 /*break*/, 929];
                        case "bs:BsStopBtnFill": return [3 /*break*/, 931];
                        case "bs:BsStopBtn": return [3 /*break*/, 933];
                        case "bs:BsStopCircleFill": return [3 /*break*/, 935];
                        case "bs:BsStopCircle": return [3 /*break*/, 937];
                        case "bs:BsStopFill": return [3 /*break*/, 939];
                        case "bs:BsStop": return [3 /*break*/, 941];
                        case "bs:BsStoplightsFill": return [3 /*break*/, 943];
                        case "bs:BsStoplights": return [3 /*break*/, 945];
                        case "bs:BsStopwatchFill": return [3 /*break*/, 947];
                        case "bs:BsStopwatch": return [3 /*break*/, 949];
                        case "bs:BsStrava": return [3 /*break*/, 951];
                        case "bs:BsStripe": return [3 /*break*/, 953];
                        case "bs:BsSubscript": return [3 /*break*/, 955];
                        case "bs:BsSubstack": return [3 /*break*/, 957];
                        case "bs:BsSubtract": return [3 /*break*/, 959];
                        case "bs:BsSuitClubFill": return [3 /*break*/, 961];
                        case "bs:BsSuitClub": return [3 /*break*/, 963];
                        case "bs:BsSuitDiamondFill": return [3 /*break*/, 965];
                        case "bs:BsSuitDiamond": return [3 /*break*/, 967];
                        case "bs:BsSuitHeartFill": return [3 /*break*/, 969];
                        case "bs:BsSuitHeart": return [3 /*break*/, 971];
                        case "bs:BsSuitSpadeFill": return [3 /*break*/, 973];
                        case "bs:BsSuitSpade": return [3 /*break*/, 975];
                        case "bs:BsSuitcaseFill": return [3 /*break*/, 977];
                        case "bs:BsSuitcaseLgFill": return [3 /*break*/, 979];
                        case "bs:BsSuitcaseLg": return [3 /*break*/, 981];
                        case "bs:BsSuitcase": return [3 /*break*/, 983];
                        case "bs:BsSuitcase2Fill": return [3 /*break*/, 985];
                        case "bs:BsSuitcase2": return [3 /*break*/, 987];
                        case "bs:BsSunFill": return [3 /*break*/, 989];
                        case "bs:BsSun": return [3 /*break*/, 991];
                        case "bs:BsSunglasses": return [3 /*break*/, 993];
                        case "bs:BsSunriseFill": return [3 /*break*/, 995];
                        case "bs:BsSunrise": return [3 /*break*/, 997];
                        case "bs:BsSunsetFill": return [3 /*break*/, 999];
                        case "bs:BsSunset": return [3 /*break*/, 1001];
                        case "bs:BsSuperscript": return [3 /*break*/, 1003];
                        case "bs:BsSymmetryHorizontal": return [3 /*break*/, 1005];
                        case "bs:BsSymmetryVertical": return [3 /*break*/, 1007];
                        case "bs:BsTable": return [3 /*break*/, 1009];
                        case "bs:BsTabletFill": return [3 /*break*/, 1011];
                        case "bs:BsTabletLandscapeFill": return [3 /*break*/, 1013];
                        case "bs:BsTabletLandscape": return [3 /*break*/, 1015];
                        case "bs:BsTablet": return [3 /*break*/, 1017];
                        case "bs:BsTagFill": return [3 /*break*/, 1019];
                        case "bs:BsTag": return [3 /*break*/, 1021];
                        case "bs:BsTagsFill": return [3 /*break*/, 1023];
                        case "bs:BsTags": return [3 /*break*/, 1025];
                        case "bs:BsTaxiFrontFill": return [3 /*break*/, 1027];
                        case "bs:BsTaxiFront": return [3 /*break*/, 1029];
                        case "bs:BsTelegram": return [3 /*break*/, 1031];
                        case "bs:BsTelephoneFill": return [3 /*break*/, 1033];
                        case "bs:BsTelephoneForwardFill": return [3 /*break*/, 1035];
                        case "bs:BsTelephoneForward": return [3 /*break*/, 1037];
                        case "bs:BsTelephoneInboundFill": return [3 /*break*/, 1039];
                        case "bs:BsTelephoneInbound": return [3 /*break*/, 1041];
                        case "bs:BsTelephoneMinusFill": return [3 /*break*/, 1043];
                        case "bs:BsTelephoneMinus": return [3 /*break*/, 1045];
                        case "bs:BsTelephoneOutboundFill": return [3 /*break*/, 1047];
                        case "bs:BsTelephoneOutbound": return [3 /*break*/, 1049];
                        case "bs:BsTelephonePlusFill": return [3 /*break*/, 1051];
                        case "bs:BsTelephonePlus": return [3 /*break*/, 1053];
                        case "bs:BsTelephoneXFill": return [3 /*break*/, 1055];
                        case "bs:BsTelephoneX": return [3 /*break*/, 1057];
                        case "bs:BsTelephone": return [3 /*break*/, 1059];
                        case "bs:BsTencentQq": return [3 /*break*/, 1061];
                        case "bs:BsTerminalDash": return [3 /*break*/, 1063];
                        case "bs:BsTerminalFill": return [3 /*break*/, 1065];
                        case "bs:BsTerminalPlus": return [3 /*break*/, 1067];
                        case "bs:BsTerminalSplit": return [3 /*break*/, 1069];
                        case "bs:BsTerminalX": return [3 /*break*/, 1071];
                        case "bs:BsTerminal": return [3 /*break*/, 1073];
                        case "bs:BsTextCenter": return [3 /*break*/, 1075];
                        case "bs:BsTextIndentLeft": return [3 /*break*/, 1077];
                        case "bs:BsTextIndentRight": return [3 /*break*/, 1079];
                        case "bs:BsTextLeft": return [3 /*break*/, 1081];
                        case "bs:BsTextParagraph": return [3 /*break*/, 1083];
                        case "bs:BsTextRight": return [3 /*break*/, 1085];
                        case "bs:BsTextWrap": return [3 /*break*/, 1087];
                        case "bs:BsTextareaResize": return [3 /*break*/, 1089];
                        case "bs:BsTextareaT": return [3 /*break*/, 1091];
                        case "bs:BsTextarea": return [3 /*break*/, 1093];
                        case "bs:BsThermometerHalf": return [3 /*break*/, 1095];
                        case "bs:BsThermometerHigh": return [3 /*break*/, 1097];
                        case "bs:BsThermometerLow": return [3 /*break*/, 1099];
                        case "bs:BsThermometerSnow": return [3 /*break*/, 1101];
                        case "bs:BsThermometerSun": return [3 /*break*/, 1103];
                        case "bs:BsThermometer": return [3 /*break*/, 1105];
                        case "bs:BsThreadsFill": return [3 /*break*/, 1107];
                        case "bs:BsThreads": return [3 /*break*/, 1109];
                        case "bs:BsThreeDotsVertical": return [3 /*break*/, 1111];
                        case "bs:BsThreeDots": return [3 /*break*/, 1113];
                        case "bs:BsThunderboltFill": return [3 /*break*/, 1115];
                        case "bs:BsThunderbolt": return [3 /*break*/, 1117];
                        case "bs:BsTicketDetailedFill": return [3 /*break*/, 1119];
                        case "bs:BsTicketDetailed": return [3 /*break*/, 1121];
                        case "bs:BsTicketFill": return [3 /*break*/, 1123];
                        case "bs:BsTicketPerforatedFill": return [3 /*break*/, 1125];
                        case "bs:BsTicketPerforated": return [3 /*break*/, 1127];
                        case "bs:BsTicket": return [3 /*break*/, 1129];
                        case "bs:BsTiktok": return [3 /*break*/, 1131];
                        case "bs:BsToggleOff": return [3 /*break*/, 1133];
                        case "bs:BsToggleOn": return [3 /*break*/, 1135];
                        case "bs:BsToggle2Off": return [3 /*break*/, 1137];
                        case "bs:BsToggle2On": return [3 /*break*/, 1139];
                        case "bs:BsToggles": return [3 /*break*/, 1141];
                        case "bs:BsToggles2": return [3 /*break*/, 1143];
                        case "bs:BsTools": return [3 /*break*/, 1145];
                        case "bs:BsTornado": return [3 /*break*/, 1147];
                        case "bs:BsTrainFreightFrontFill": return [3 /*break*/, 1149];
                        case "bs:BsTrainFreightFront": return [3 /*break*/, 1151];
                        case "bs:BsTrainFrontFill": return [3 /*break*/, 1153];
                        case "bs:BsTrainFront": return [3 /*break*/, 1155];
                        case "bs:BsTrainLightrailFrontFill": return [3 /*break*/, 1157];
                        case "bs:BsTrainLightrailFront": return [3 /*break*/, 1159];
                        case "bs:BsTranslate": return [3 /*break*/, 1161];
                        case "bs:BsTransparency": return [3 /*break*/, 1163];
                        case "bs:BsTrashFill": return [3 /*break*/, 1165];
                        case "bs:BsTrash": return [3 /*break*/, 1167];
                        case "bs:BsTrash2Fill": return [3 /*break*/, 1169];
                        case "bs:BsTrash2": return [3 /*break*/, 1171];
                        case "bs:BsTrash3Fill": return [3 /*break*/, 1173];
                        case "bs:BsTrash3": return [3 /*break*/, 1175];
                        case "bs:BsTreeFill": return [3 /*break*/, 1177];
                        case "bs:BsTree": return [3 /*break*/, 1179];
                        case "bs:BsTrello": return [3 /*break*/, 1181];
                        case "bs:BsTriangleFill": return [3 /*break*/, 1183];
                        case "bs:BsTriangleHalf": return [3 /*break*/, 1185];
                        case "bs:BsTriangle": return [3 /*break*/, 1187];
                        case "bs:BsTrophyFill": return [3 /*break*/, 1189];
                        case "bs:BsTrophy": return [3 /*break*/, 1191];
                        case "bs:BsTropicalStorm": return [3 /*break*/, 1193];
                        case "bs:BsTruckFlatbed": return [3 /*break*/, 1195];
                        case "bs:BsTruckFrontFill": return [3 /*break*/, 1197];
                        case "bs:BsTruckFront": return [3 /*break*/, 1199];
                        case "bs:BsTruck": return [3 /*break*/, 1201];
                        case "bs:BsTsunami": return [3 /*break*/, 1203];
                        case "bs:BsTvFill": return [3 /*break*/, 1205];
                        case "bs:BsTv": return [3 /*break*/, 1207];
                        case "bs:BsTwitch": return [3 /*break*/, 1209];
                        case "bs:BsTwitterX": return [3 /*break*/, 1211];
                        case "bs:BsTwitter": return [3 /*break*/, 1213];
                        case "bs:BsTypeBold": return [3 /*break*/, 1215];
                        case "bs:BsTypeH1": return [3 /*break*/, 1217];
                        case "bs:BsTypeH2": return [3 /*break*/, 1219];
                        case "bs:BsTypeH3": return [3 /*break*/, 1221];
                        case "bs:BsTypeH4": return [3 /*break*/, 1223];
                        case "bs:BsTypeH5": return [3 /*break*/, 1225];
                        case "bs:BsTypeH6": return [3 /*break*/, 1227];
                        case "bs:BsTypeItalic": return [3 /*break*/, 1229];
                        case "bs:BsTypeStrikethrough": return [3 /*break*/, 1231];
                        case "bs:BsTypeUnderline": return [3 /*break*/, 1233];
                        case "bs:BsType": return [3 /*break*/, 1235];
                        case "bs:BsUbuntu": return [3 /*break*/, 1237];
                        case "bs:BsUiChecksGrid": return [3 /*break*/, 1239];
                        case "bs:BsUiChecks": return [3 /*break*/, 1241];
                        case "bs:BsUiRadiosGrid": return [3 /*break*/, 1243];
                        case "bs:BsUiRadios": return [3 /*break*/, 1245];
                        case "bs:BsUmbrellaFill": return [3 /*break*/, 1247];
                        case "bs:BsUmbrella": return [3 /*break*/, 1249];
                        case "bs:BsUnindent": return [3 /*break*/, 1251];
                        case "bs:BsUnion": return [3 /*break*/, 1253];
                        case "bs:BsUnity": return [3 /*break*/, 1255];
                        case "bs:BsUniversalAccessCircle": return [3 /*break*/, 1257];
                        case "bs:BsUniversalAccess": return [3 /*break*/, 1259];
                        case "bs:BsUnlockFill": return [3 /*break*/, 1261];
                        case "bs:BsUnlock": return [3 /*break*/, 1263];
                        case "bs:BsUpcScan": return [3 /*break*/, 1265];
                        case "bs:BsUpc": return [3 /*break*/, 1267];
                        case "bs:BsUpload": return [3 /*break*/, 1269];
                        case "bs:BsUsbCFill": return [3 /*break*/, 1271];
                        case "bs:BsUsbC": return [3 /*break*/, 1273];
                        case "bs:BsUsbDriveFill": return [3 /*break*/, 1275];
                        case "bs:BsUsbDrive": return [3 /*break*/, 1277];
                        case "bs:BsUsbFill": return [3 /*break*/, 1279];
                        case "bs:BsUsbMicroFill": return [3 /*break*/, 1281];
                        case "bs:BsUsbMicro": return [3 /*break*/, 1283];
                        case "bs:BsUsbMiniFill": return [3 /*break*/, 1285];
                        case "bs:BsUsbMini": return [3 /*break*/, 1287];
                        case "bs:BsUsbPlugFill": return [3 /*break*/, 1289];
                        case "bs:BsUsbPlug": return [3 /*break*/, 1291];
                        case "bs:BsUsbSymbol": return [3 /*break*/, 1293];
                        case "bs:BsUsb": return [3 /*break*/, 1295];
                        case "bs:BsValentine": return [3 /*break*/, 1297];
                        case "bs:BsValentine2": return [3 /*break*/, 1299];
                        case "bs:BsVectorPen": return [3 /*break*/, 1301];
                        case "bs:BsViewList": return [3 /*break*/, 1303];
                        case "bs:BsViewStacked": return [3 /*break*/, 1305];
                        case "bs:BsVignette": return [3 /*break*/, 1307];
                        case "bs:BsVimeo": return [3 /*break*/, 1309];
                        case "bs:BsVinylFill": return [3 /*break*/, 1311];
                        case "bs:BsVinyl": return [3 /*break*/, 1313];
                        case "bs:BsVirus": return [3 /*break*/, 1315];
                        case "bs:BsVirus2": return [3 /*break*/, 1317];
                        case "bs:BsVoicemail": return [3 /*break*/, 1319];
                        case "bs:BsVolumeDownFill": return [3 /*break*/, 1321];
                        case "bs:BsVolumeDown": return [3 /*break*/, 1323];
                        case "bs:BsVolumeMuteFill": return [3 /*break*/, 1325];
                        case "bs:BsVolumeMute": return [3 /*break*/, 1327];
                        case "bs:BsVolumeOffFill": return [3 /*break*/, 1329];
                        case "bs:BsVolumeOff": return [3 /*break*/, 1331];
                        case "bs:BsVolumeUpFill": return [3 /*break*/, 1333];
                        case "bs:BsVolumeUp": return [3 /*break*/, 1335];
                        case "bs:BsVr": return [3 /*break*/, 1337];
                        case "bs:BsWalletFill": return [3 /*break*/, 1339];
                        case "bs:BsWallet": return [3 /*break*/, 1341];
                        case "bs:BsWallet2": return [3 /*break*/, 1343];
                        case "bs:BsWatch": return [3 /*break*/, 1345];
                        case "bs:BsWater": return [3 /*break*/, 1347];
                        case "bs:BsWebcamFill": return [3 /*break*/, 1349];
                        case "bs:BsWebcam": return [3 /*break*/, 1351];
                        case "bs:BsWechat": return [3 /*break*/, 1353];
                        case "bs:BsWhatsapp": return [3 /*break*/, 1355];
                        case "bs:BsWifi1": return [3 /*break*/, 1357];
                        case "bs:BsWifi2": return [3 /*break*/, 1359];
                        case "bs:BsWifiOff": return [3 /*break*/, 1361];
                        case "bs:BsWifi": return [3 /*break*/, 1363];
                        case "bs:BsWikipedia": return [3 /*break*/, 1365];
                        case "bs:BsWind": return [3 /*break*/, 1367];
                        case "bs:BsWindowDash": return [3 /*break*/, 1369];
                        case "bs:BsWindowDesktop": return [3 /*break*/, 1371];
                        case "bs:BsWindowDock": return [3 /*break*/, 1373];
                        case "bs:BsWindowFullscreen": return [3 /*break*/, 1375];
                        case "bs:BsWindowPlus": return [3 /*break*/, 1377];
                        case "bs:BsWindowSidebar": return [3 /*break*/, 1379];
                        case "bs:BsWindowSplit": return [3 /*break*/, 1381];
                        case "bs:BsWindowStack": return [3 /*break*/, 1383];
                        case "bs:BsWindowX": return [3 /*break*/, 1385];
                        case "bs:BsWindow": return [3 /*break*/, 1387];
                        case "bs:BsWindows": return [3 /*break*/, 1389];
                        case "bs:BsWordpress": return [3 /*break*/, 1391];
                        case "bs:BsWrenchAdjustableCircleFill": return [3 /*break*/, 1393];
                        case "bs:BsWrenchAdjustableCircle": return [3 /*break*/, 1395];
                        case "bs:BsWrenchAdjustable": return [3 /*break*/, 1397];
                        case "bs:BsWrench": return [3 /*break*/, 1399];
                        case "bs:BsXCircleFill": return [3 /*break*/, 1401];
                        case "bs:BsXCircle": return [3 /*break*/, 1403];
                        case "bs:BsXDiamondFill": return [3 /*break*/, 1405];
                        case "bs:BsXDiamond": return [3 /*break*/, 1407];
                        case "bs:BsXLg": return [3 /*break*/, 1409];
                        case "bs:BsXOctagonFill": return [3 /*break*/, 1411];
                        case "bs:BsXOctagon": return [3 /*break*/, 1413];
                        case "bs:BsXSquareFill": return [3 /*break*/, 1415];
                        case "bs:BsXSquare": return [3 /*break*/, 1417];
                        case "bs:BsX": return [3 /*break*/, 1419];
                        case "bs:BsXbox": return [3 /*break*/, 1421];
                        case "bs:BsYelp": return [3 /*break*/, 1423];
                        case "bs:BsYinYang": return [3 /*break*/, 1425];
                        case "bs:BsYoutube": return [3 /*break*/, 1427];
                        case "bs:BsZoomIn": return [3 /*break*/, 1429];
                        case "bs:BsZoomOut": return [3 /*break*/, 1431];
                    }
                    return [3 /*break*/, 1433];
                case 1: return [4 /*yield*/, import("react-icons/bs")];
                case 2:
                    BsMedium = (_b.sent()).BsMedium;
                    return [2 /*return*/, BsMedium];
                case 3: return [4 /*yield*/, import("react-icons/bs")];
                case 4:
                    BsMegaphoneFill = (_b.sent()).BsMegaphoneFill;
                    return [2 /*return*/, BsMegaphoneFill];
                case 5: return [4 /*yield*/, import("react-icons/bs")];
                case 6:
                    BsMegaphone = (_b.sent()).BsMegaphone;
                    return [2 /*return*/, BsMegaphone];
                case 7: return [4 /*yield*/, import("react-icons/bs")];
                case 8:
                    BsMemory = (_b.sent()).BsMemory;
                    return [2 /*return*/, BsMemory];
                case 9: return [4 /*yield*/, import("react-icons/bs")];
                case 10:
                    BsMenuAppFill = (_b.sent()).BsMenuAppFill;
                    return [2 /*return*/, BsMenuAppFill];
                case 11: return [4 /*yield*/, import("react-icons/bs")];
                case 12:
                    BsMenuApp = (_b.sent()).BsMenuApp;
                    return [2 /*return*/, BsMenuApp];
                case 13: return [4 /*yield*/, import("react-icons/bs")];
                case 14:
                    BsMenuButtonFill = (_b.sent()).BsMenuButtonFill;
                    return [2 /*return*/, BsMenuButtonFill];
                case 15: return [4 /*yield*/, import("react-icons/bs")];
                case 16:
                    BsMenuButtonWideFill = (_b.sent()).BsMenuButtonWideFill;
                    return [2 /*return*/, BsMenuButtonWideFill];
                case 17: return [4 /*yield*/, import("react-icons/bs")];
                case 18:
                    BsMenuButtonWide = (_b.sent()).BsMenuButtonWide;
                    return [2 /*return*/, BsMenuButtonWide];
                case 19: return [4 /*yield*/, import("react-icons/bs")];
                case 20:
                    BsMenuButton = (_b.sent()).BsMenuButton;
                    return [2 /*return*/, BsMenuButton];
                case 21: return [4 /*yield*/, import("react-icons/bs")];
                case 22:
                    BsMenuDown = (_b.sent()).BsMenuDown;
                    return [2 /*return*/, BsMenuDown];
                case 23: return [4 /*yield*/, import("react-icons/bs")];
                case 24:
                    BsMenuUp = (_b.sent()).BsMenuUp;
                    return [2 /*return*/, BsMenuUp];
                case 25: return [4 /*yield*/, import("react-icons/bs")];
                case 26:
                    BsMessenger = (_b.sent()).BsMessenger;
                    return [2 /*return*/, BsMessenger];
                case 27: return [4 /*yield*/, import("react-icons/bs")];
                case 28:
                    BsMeta = (_b.sent()).BsMeta;
                    return [2 /*return*/, BsMeta];
                case 29: return [4 /*yield*/, import("react-icons/bs")];
                case 30:
                    BsMicFill = (_b.sent()).BsMicFill;
                    return [2 /*return*/, BsMicFill];
                case 31: return [4 /*yield*/, import("react-icons/bs")];
                case 32:
                    BsMicMuteFill = (_b.sent()).BsMicMuteFill;
                    return [2 /*return*/, BsMicMuteFill];
                case 33: return [4 /*yield*/, import("react-icons/bs")];
                case 34:
                    BsMicMute = (_b.sent()).BsMicMute;
                    return [2 /*return*/, BsMicMute];
                case 35: return [4 /*yield*/, import("react-icons/bs")];
                case 36:
                    BsMic = (_b.sent()).BsMic;
                    return [2 /*return*/, BsMic];
                case 37: return [4 /*yield*/, import("react-icons/bs")];
                case 38:
                    BsMicrosoftTeams = (_b.sent()).BsMicrosoftTeams;
                    return [2 /*return*/, BsMicrosoftTeams];
                case 39: return [4 /*yield*/, import("react-icons/bs")];
                case 40:
                    BsMicrosoft = (_b.sent()).BsMicrosoft;
                    return [2 /*return*/, BsMicrosoft];
                case 41: return [4 /*yield*/, import("react-icons/bs")];
                case 42:
                    BsMinecartLoaded = (_b.sent()).BsMinecartLoaded;
                    return [2 /*return*/, BsMinecartLoaded];
                case 43: return [4 /*yield*/, import("react-icons/bs")];
                case 44:
                    BsMinecart = (_b.sent()).BsMinecart;
                    return [2 /*return*/, BsMinecart];
                case 45: return [4 /*yield*/, import("react-icons/bs")];
                case 46:
                    BsModemFill = (_b.sent()).BsModemFill;
                    return [2 /*return*/, BsModemFill];
                case 47: return [4 /*yield*/, import("react-icons/bs")];
                case 48:
                    BsModem = (_b.sent()).BsModem;
                    return [2 /*return*/, BsModem];
                case 49: return [4 /*yield*/, import("react-icons/bs")];
                case 50:
                    BsMoisture = (_b.sent()).BsMoisture;
                    return [2 /*return*/, BsMoisture];
                case 51: return [4 /*yield*/, import("react-icons/bs")];
                case 52:
                    BsMoonFill = (_b.sent()).BsMoonFill;
                    return [2 /*return*/, BsMoonFill];
                case 53: return [4 /*yield*/, import("react-icons/bs")];
                case 54:
                    BsMoonStarsFill = (_b.sent()).BsMoonStarsFill;
                    return [2 /*return*/, BsMoonStarsFill];
                case 55: return [4 /*yield*/, import("react-icons/bs")];
                case 56:
                    BsMoonStars = (_b.sent()).BsMoonStars;
                    return [2 /*return*/, BsMoonStars];
                case 57: return [4 /*yield*/, import("react-icons/bs")];
                case 58:
                    BsMoon = (_b.sent()).BsMoon;
                    return [2 /*return*/, BsMoon];
                case 59: return [4 /*yield*/, import("react-icons/bs")];
                case 60:
                    BsMortarboardFill = (_b.sent()).BsMortarboardFill;
                    return [2 /*return*/, BsMortarboardFill];
                case 61: return [4 /*yield*/, import("react-icons/bs")];
                case 62:
                    BsMortarboard = (_b.sent()).BsMortarboard;
                    return [2 /*return*/, BsMortarboard];
                case 63: return [4 /*yield*/, import("react-icons/bs")];
                case 64:
                    BsMotherboardFill = (_b.sent()).BsMotherboardFill;
                    return [2 /*return*/, BsMotherboardFill];
                case 65: return [4 /*yield*/, import("react-icons/bs")];
                case 66:
                    BsMotherboard = (_b.sent()).BsMotherboard;
                    return [2 /*return*/, BsMotherboard];
                case 67: return [4 /*yield*/, import("react-icons/bs")];
                case 68:
                    BsMouseFill = (_b.sent()).BsMouseFill;
                    return [2 /*return*/, BsMouseFill];
                case 69: return [4 /*yield*/, import("react-icons/bs")];
                case 70:
                    BsMouse = (_b.sent()).BsMouse;
                    return [2 /*return*/, BsMouse];
                case 71: return [4 /*yield*/, import("react-icons/bs")];
                case 72:
                    BsMouse2Fill = (_b.sent()).BsMouse2Fill;
                    return [2 /*return*/, BsMouse2Fill];
                case 73: return [4 /*yield*/, import("react-icons/bs")];
                case 74:
                    BsMouse2 = (_b.sent()).BsMouse2;
                    return [2 /*return*/, BsMouse2];
                case 75: return [4 /*yield*/, import("react-icons/bs")];
                case 76:
                    BsMouse3Fill = (_b.sent()).BsMouse3Fill;
                    return [2 /*return*/, BsMouse3Fill];
                case 77: return [4 /*yield*/, import("react-icons/bs")];
                case 78:
                    BsMouse3 = (_b.sent()).BsMouse3;
                    return [2 /*return*/, BsMouse3];
                case 79: return [4 /*yield*/, import("react-icons/bs")];
                case 80:
                    BsMusicNoteBeamed = (_b.sent()).BsMusicNoteBeamed;
                    return [2 /*return*/, BsMusicNoteBeamed];
                case 81: return [4 /*yield*/, import("react-icons/bs")];
                case 82:
                    BsMusicNoteList = (_b.sent()).BsMusicNoteList;
                    return [2 /*return*/, BsMusicNoteList];
                case 83: return [4 /*yield*/, import("react-icons/bs")];
                case 84:
                    BsMusicNote = (_b.sent()).BsMusicNote;
                    return [2 /*return*/, BsMusicNote];
                case 85: return [4 /*yield*/, import("react-icons/bs")];
                case 86:
                    BsMusicPlayerFill = (_b.sent()).BsMusicPlayerFill;
                    return [2 /*return*/, BsMusicPlayerFill];
                case 87: return [4 /*yield*/, import("react-icons/bs")];
                case 88:
                    BsMusicPlayer = (_b.sent()).BsMusicPlayer;
                    return [2 /*return*/, BsMusicPlayer];
                case 89: return [4 /*yield*/, import("react-icons/bs")];
                case 90:
                    BsNewspaper = (_b.sent()).BsNewspaper;
                    return [2 /*return*/, BsNewspaper];
                case 91: return [4 /*yield*/, import("react-icons/bs")];
                case 92:
                    BsNintendoSwitch = (_b.sent()).BsNintendoSwitch;
                    return [2 /*return*/, BsNintendoSwitch];
                case 93: return [4 /*yield*/, import("react-icons/bs")];
                case 94:
                    BsNodeMinusFill = (_b.sent()).BsNodeMinusFill;
                    return [2 /*return*/, BsNodeMinusFill];
                case 95: return [4 /*yield*/, import("react-icons/bs")];
                case 96:
                    BsNodeMinus = (_b.sent()).BsNodeMinus;
                    return [2 /*return*/, BsNodeMinus];
                case 97: return [4 /*yield*/, import("react-icons/bs")];
                case 98:
                    BsNodePlusFill = (_b.sent()).BsNodePlusFill;
                    return [2 /*return*/, BsNodePlusFill];
                case 99: return [4 /*yield*/, import("react-icons/bs")];
                case 100:
                    BsNodePlus = (_b.sent()).BsNodePlus;
                    return [2 /*return*/, BsNodePlus];
                case 101: return [4 /*yield*/, import("react-icons/bs")];
                case 102:
                    BsNoiseReduction = (_b.sent()).BsNoiseReduction;
                    return [2 /*return*/, BsNoiseReduction];
                case 103: return [4 /*yield*/, import("react-icons/bs")];
                case 104:
                    BsNutFill = (_b.sent()).BsNutFill;
                    return [2 /*return*/, BsNutFill];
                case 105: return [4 /*yield*/, import("react-icons/bs")];
                case 106:
                    BsNut = (_b.sent()).BsNut;
                    return [2 /*return*/, BsNut];
                case 107: return [4 /*yield*/, import("react-icons/bs")];
                case 108:
                    BsNvidia = (_b.sent()).BsNvidia;
                    return [2 /*return*/, BsNvidia];
                case 109: return [4 /*yield*/, import("react-icons/bs")];
                case 110:
                    BsNvmeFill = (_b.sent()).BsNvmeFill;
                    return [2 /*return*/, BsNvmeFill];
                case 111: return [4 /*yield*/, import("react-icons/bs")];
                case 112:
                    BsNvme = (_b.sent()).BsNvme;
                    return [2 /*return*/, BsNvme];
                case 113: return [4 /*yield*/, import("react-icons/bs")];
                case 114:
                    BsOctagonFill = (_b.sent()).BsOctagonFill;
                    return [2 /*return*/, BsOctagonFill];
                case 115: return [4 /*yield*/, import("react-icons/bs")];
                case 116:
                    BsOctagonHalf = (_b.sent()).BsOctagonHalf;
                    return [2 /*return*/, BsOctagonHalf];
                case 117: return [4 /*yield*/, import("react-icons/bs")];
                case 118:
                    BsOctagon = (_b.sent()).BsOctagon;
                    return [2 /*return*/, BsOctagon];
                case 119: return [4 /*yield*/, import("react-icons/bs")];
                case 120:
                    BsOpencollective = (_b.sent()).BsOpencollective;
                    return [2 /*return*/, BsOpencollective];
                case 121: return [4 /*yield*/, import("react-icons/bs")];
                case 122:
                    BsOpticalAudioFill = (_b.sent()).BsOpticalAudioFill;
                    return [2 /*return*/, BsOpticalAudioFill];
                case 123: return [4 /*yield*/, import("react-icons/bs")];
                case 124:
                    BsOpticalAudio = (_b.sent()).BsOpticalAudio;
                    return [2 /*return*/, BsOpticalAudio];
                case 125: return [4 /*yield*/, import("react-icons/bs")];
                case 126:
                    BsOption = (_b.sent()).BsOption;
                    return [2 /*return*/, BsOption];
                case 127: return [4 /*yield*/, import("react-icons/bs")];
                case 128:
                    BsOutlet = (_b.sent()).BsOutlet;
                    return [2 /*return*/, BsOutlet];
                case 129: return [4 /*yield*/, import("react-icons/bs")];
                case 130:
                    BsPCircleFill = (_b.sent()).BsPCircleFill;
                    return [2 /*return*/, BsPCircleFill];
                case 131: return [4 /*yield*/, import("react-icons/bs")];
                case 132:
                    BsPCircle = (_b.sent()).BsPCircle;
                    return [2 /*return*/, BsPCircle];
                case 133: return [4 /*yield*/, import("react-icons/bs")];
                case 134:
                    BsPSquareFill = (_b.sent()).BsPSquareFill;
                    return [2 /*return*/, BsPSquareFill];
                case 135: return [4 /*yield*/, import("react-icons/bs")];
                case 136:
                    BsPSquare = (_b.sent()).BsPSquare;
                    return [2 /*return*/, BsPSquare];
                case 137: return [4 /*yield*/, import("react-icons/bs")];
                case 138:
                    BsPaintBucket = (_b.sent()).BsPaintBucket;
                    return [2 /*return*/, BsPaintBucket];
                case 139: return [4 /*yield*/, import("react-icons/bs")];
                case 140:
                    BsPaletteFill = (_b.sent()).BsPaletteFill;
                    return [2 /*return*/, BsPaletteFill];
                case 141: return [4 /*yield*/, import("react-icons/bs")];
                case 142:
                    BsPalette = (_b.sent()).BsPalette;
                    return [2 /*return*/, BsPalette];
                case 143: return [4 /*yield*/, import("react-icons/bs")];
                case 144:
                    BsPalette2 = (_b.sent()).BsPalette2;
                    return [2 /*return*/, BsPalette2];
                case 145: return [4 /*yield*/, import("react-icons/bs")];
                case 146:
                    BsPaperclip = (_b.sent()).BsPaperclip;
                    return [2 /*return*/, BsPaperclip];
                case 147: return [4 /*yield*/, import("react-icons/bs")];
                case 148:
                    BsParagraph = (_b.sent()).BsParagraph;
                    return [2 /*return*/, BsParagraph];
                case 149: return [4 /*yield*/, import("react-icons/bs")];
                case 150:
                    BsPassFill = (_b.sent()).BsPassFill;
                    return [2 /*return*/, BsPassFill];
                case 151: return [4 /*yield*/, import("react-icons/bs")];
                case 152:
                    BsPass = (_b.sent()).BsPass;
                    return [2 /*return*/, BsPass];
                case 153: return [4 /*yield*/, import("react-icons/bs")];
                case 154:
                    BsPassportFill = (_b.sent()).BsPassportFill;
                    return [2 /*return*/, BsPassportFill];
                case 155: return [4 /*yield*/, import("react-icons/bs")];
                case 156:
                    BsPassport = (_b.sent()).BsPassport;
                    return [2 /*return*/, BsPassport];
                case 157: return [4 /*yield*/, import("react-icons/bs")];
                case 158:
                    BsPatchCheckFill = (_b.sent()).BsPatchCheckFill;
                    return [2 /*return*/, BsPatchCheckFill];
                case 159: return [4 /*yield*/, import("react-icons/bs")];
                case 160:
                    BsPatchCheck = (_b.sent()).BsPatchCheck;
                    return [2 /*return*/, BsPatchCheck];
                case 161: return [4 /*yield*/, import("react-icons/bs")];
                case 162:
                    BsPatchExclamationFill = (_b.sent()).BsPatchExclamationFill;
                    return [2 /*return*/, BsPatchExclamationFill];
                case 163: return [4 /*yield*/, import("react-icons/bs")];
                case 164:
                    BsPatchExclamation = (_b.sent()).BsPatchExclamation;
                    return [2 /*return*/, BsPatchExclamation];
                case 165: return [4 /*yield*/, import("react-icons/bs")];
                case 166:
                    BsPatchMinusFill = (_b.sent()).BsPatchMinusFill;
                    return [2 /*return*/, BsPatchMinusFill];
                case 167: return [4 /*yield*/, import("react-icons/bs")];
                case 168:
                    BsPatchMinus = (_b.sent()).BsPatchMinus;
                    return [2 /*return*/, BsPatchMinus];
                case 169: return [4 /*yield*/, import("react-icons/bs")];
                case 170:
                    BsPatchPlusFill = (_b.sent()).BsPatchPlusFill;
                    return [2 /*return*/, BsPatchPlusFill];
                case 171: return [4 /*yield*/, import("react-icons/bs")];
                case 172:
                    BsPatchPlus = (_b.sent()).BsPatchPlus;
                    return [2 /*return*/, BsPatchPlus];
                case 173: return [4 /*yield*/, import("react-icons/bs")];
                case 174:
                    BsPatchQuestionFill = (_b.sent()).BsPatchQuestionFill;
                    return [2 /*return*/, BsPatchQuestionFill];
                case 175: return [4 /*yield*/, import("react-icons/bs")];
                case 176:
                    BsPatchQuestion = (_b.sent()).BsPatchQuestion;
                    return [2 /*return*/, BsPatchQuestion];
                case 177: return [4 /*yield*/, import("react-icons/bs")];
                case 178:
                    BsPauseBtnFill = (_b.sent()).BsPauseBtnFill;
                    return [2 /*return*/, BsPauseBtnFill];
                case 179: return [4 /*yield*/, import("react-icons/bs")];
                case 180:
                    BsPauseBtn = (_b.sent()).BsPauseBtn;
                    return [2 /*return*/, BsPauseBtn];
                case 181: return [4 /*yield*/, import("react-icons/bs")];
                case 182:
                    BsPauseCircleFill = (_b.sent()).BsPauseCircleFill;
                    return [2 /*return*/, BsPauseCircleFill];
                case 183: return [4 /*yield*/, import("react-icons/bs")];
                case 184:
                    BsPauseCircle = (_b.sent()).BsPauseCircle;
                    return [2 /*return*/, BsPauseCircle];
                case 185: return [4 /*yield*/, import("react-icons/bs")];
                case 186:
                    BsPauseFill = (_b.sent()).BsPauseFill;
                    return [2 /*return*/, BsPauseFill];
                case 187: return [4 /*yield*/, import("react-icons/bs")];
                case 188:
                    BsPause = (_b.sent()).BsPause;
                    return [2 /*return*/, BsPause];
                case 189: return [4 /*yield*/, import("react-icons/bs")];
                case 190:
                    BsPaypal = (_b.sent()).BsPaypal;
                    return [2 /*return*/, BsPaypal];
                case 191: return [4 /*yield*/, import("react-icons/bs")];
                case 192:
                    BsPcDisplayHorizontal = (_b.sent()).BsPcDisplayHorizontal;
                    return [2 /*return*/, BsPcDisplayHorizontal];
                case 193: return [4 /*yield*/, import("react-icons/bs")];
                case 194:
                    BsPcDisplay = (_b.sent()).BsPcDisplay;
                    return [2 /*return*/, BsPcDisplay];
                case 195: return [4 /*yield*/, import("react-icons/bs")];
                case 196:
                    BsPcHorizontal = (_b.sent()).BsPcHorizontal;
                    return [2 /*return*/, BsPcHorizontal];
                case 197: return [4 /*yield*/, import("react-icons/bs")];
                case 198:
                    BsPc = (_b.sent()).BsPc;
                    return [2 /*return*/, BsPc];
                case 199: return [4 /*yield*/, import("react-icons/bs")];
                case 200:
                    BsPciCardNetwork = (_b.sent()).BsPciCardNetwork;
                    return [2 /*return*/, BsPciCardNetwork];
                case 201: return [4 /*yield*/, import("react-icons/bs")];
                case 202:
                    BsPciCardSound = (_b.sent()).BsPciCardSound;
                    return [2 /*return*/, BsPciCardSound];
                case 203: return [4 /*yield*/, import("react-icons/bs")];
                case 204:
                    BsPciCard = (_b.sent()).BsPciCard;
                    return [2 /*return*/, BsPciCard];
                case 205: return [4 /*yield*/, import("react-icons/bs")];
                case 206:
                    BsPeaceFill = (_b.sent()).BsPeaceFill;
                    return [2 /*return*/, BsPeaceFill];
                case 207: return [4 /*yield*/, import("react-icons/bs")];
                case 208:
                    BsPeace = (_b.sent()).BsPeace;
                    return [2 /*return*/, BsPeace];
                case 209: return [4 /*yield*/, import("react-icons/bs")];
                case 210:
                    BsPenFill = (_b.sent()).BsPenFill;
                    return [2 /*return*/, BsPenFill];
                case 211: return [4 /*yield*/, import("react-icons/bs")];
                case 212:
                    BsPen = (_b.sent()).BsPen;
                    return [2 /*return*/, BsPen];
                case 213: return [4 /*yield*/, import("react-icons/bs")];
                case 214:
                    BsPencilFill = (_b.sent()).BsPencilFill;
                    return [2 /*return*/, BsPencilFill];
                case 215: return [4 /*yield*/, import("react-icons/bs")];
                case 216:
                    BsPencilSquare = (_b.sent()).BsPencilSquare;
                    return [2 /*return*/, BsPencilSquare];
                case 217: return [4 /*yield*/, import("react-icons/bs")];
                case 218:
                    BsPencil = (_b.sent()).BsPencil;
                    return [2 /*return*/, BsPencil];
                case 219: return [4 /*yield*/, import("react-icons/bs")];
                case 220:
                    BsPentagonFill = (_b.sent()).BsPentagonFill;
                    return [2 /*return*/, BsPentagonFill];
                case 221: return [4 /*yield*/, import("react-icons/bs")];
                case 222:
                    BsPentagonHalf = (_b.sent()).BsPentagonHalf;
                    return [2 /*return*/, BsPentagonHalf];
                case 223: return [4 /*yield*/, import("react-icons/bs")];
                case 224:
                    BsPentagon = (_b.sent()).BsPentagon;
                    return [2 /*return*/, BsPentagon];
                case 225: return [4 /*yield*/, import("react-icons/bs")];
                case 226:
                    BsPeopleFill = (_b.sent()).BsPeopleFill;
                    return [2 /*return*/, BsPeopleFill];
                case 227: return [4 /*yield*/, import("react-icons/bs")];
                case 228:
                    BsPeople = (_b.sent()).BsPeople;
                    return [2 /*return*/, BsPeople];
                case 229: return [4 /*yield*/, import("react-icons/bs")];
                case 230:
                    BsPercent = (_b.sent()).BsPercent;
                    return [2 /*return*/, BsPercent];
                case 231: return [4 /*yield*/, import("react-icons/bs")];
                case 232:
                    BsPersonAdd = (_b.sent()).BsPersonAdd;
                    return [2 /*return*/, BsPersonAdd];
                case 233: return [4 /*yield*/, import("react-icons/bs")];
                case 234:
                    BsPersonArmsUp = (_b.sent()).BsPersonArmsUp;
                    return [2 /*return*/, BsPersonArmsUp];
                case 235: return [4 /*yield*/, import("react-icons/bs")];
                case 236:
                    BsPersonBadgeFill = (_b.sent()).BsPersonBadgeFill;
                    return [2 /*return*/, BsPersonBadgeFill];
                case 237: return [4 /*yield*/, import("react-icons/bs")];
                case 238:
                    BsPersonBadge = (_b.sent()).BsPersonBadge;
                    return [2 /*return*/, BsPersonBadge];
                case 239: return [4 /*yield*/, import("react-icons/bs")];
                case 240:
                    BsPersonBoundingBox = (_b.sent()).BsPersonBoundingBox;
                    return [2 /*return*/, BsPersonBoundingBox];
                case 241: return [4 /*yield*/, import("react-icons/bs")];
                case 242:
                    BsPersonCheckFill = (_b.sent()).BsPersonCheckFill;
                    return [2 /*return*/, BsPersonCheckFill];
                case 243: return [4 /*yield*/, import("react-icons/bs")];
                case 244:
                    BsPersonCheck = (_b.sent()).BsPersonCheck;
                    return [2 /*return*/, BsPersonCheck];
                case 245: return [4 /*yield*/, import("react-icons/bs")];
                case 246:
                    BsPersonCircle = (_b.sent()).BsPersonCircle;
                    return [2 /*return*/, BsPersonCircle];
                case 247: return [4 /*yield*/, import("react-icons/bs")];
                case 248:
                    BsPersonDashFill = (_b.sent()).BsPersonDashFill;
                    return [2 /*return*/, BsPersonDashFill];
                case 249: return [4 /*yield*/, import("react-icons/bs")];
                case 250:
                    BsPersonDash = (_b.sent()).BsPersonDash;
                    return [2 /*return*/, BsPersonDash];
                case 251: return [4 /*yield*/, import("react-icons/bs")];
                case 252:
                    BsPersonDown = (_b.sent()).BsPersonDown;
                    return [2 /*return*/, BsPersonDown];
                case 253: return [4 /*yield*/, import("react-icons/bs")];
                case 254:
                    BsPersonExclamation = (_b.sent()).BsPersonExclamation;
                    return [2 /*return*/, BsPersonExclamation];
                case 255: return [4 /*yield*/, import("react-icons/bs")];
                case 256:
                    BsPersonFillAdd = (_b.sent()).BsPersonFillAdd;
                    return [2 /*return*/, BsPersonFillAdd];
                case 257: return [4 /*yield*/, import("react-icons/bs")];
                case 258:
                    BsPersonFillCheck = (_b.sent()).BsPersonFillCheck;
                    return [2 /*return*/, BsPersonFillCheck];
                case 259: return [4 /*yield*/, import("react-icons/bs")];
                case 260:
                    BsPersonFillDash = (_b.sent()).BsPersonFillDash;
                    return [2 /*return*/, BsPersonFillDash];
                case 261: return [4 /*yield*/, import("react-icons/bs")];
                case 262:
                    BsPersonFillDown = (_b.sent()).BsPersonFillDown;
                    return [2 /*return*/, BsPersonFillDown];
                case 263: return [4 /*yield*/, import("react-icons/bs")];
                case 264:
                    BsPersonFillExclamation = (_b.sent()).BsPersonFillExclamation;
                    return [2 /*return*/, BsPersonFillExclamation];
                case 265: return [4 /*yield*/, import("react-icons/bs")];
                case 266:
                    BsPersonFillGear = (_b.sent()).BsPersonFillGear;
                    return [2 /*return*/, BsPersonFillGear];
                case 267: return [4 /*yield*/, import("react-icons/bs")];
                case 268:
                    BsPersonFillLock = (_b.sent()).BsPersonFillLock;
                    return [2 /*return*/, BsPersonFillLock];
                case 269: return [4 /*yield*/, import("react-icons/bs")];
                case 270:
                    BsPersonFillSlash = (_b.sent()).BsPersonFillSlash;
                    return [2 /*return*/, BsPersonFillSlash];
                case 271: return [4 /*yield*/, import("react-icons/bs")];
                case 272:
                    BsPersonFillUp = (_b.sent()).BsPersonFillUp;
                    return [2 /*return*/, BsPersonFillUp];
                case 273: return [4 /*yield*/, import("react-icons/bs")];
                case 274:
                    BsPersonFillX = (_b.sent()).BsPersonFillX;
                    return [2 /*return*/, BsPersonFillX];
                case 275: return [4 /*yield*/, import("react-icons/bs")];
                case 276:
                    BsPersonFill = (_b.sent()).BsPersonFill;
                    return [2 /*return*/, BsPersonFill];
                case 277: return [4 /*yield*/, import("react-icons/bs")];
                case 278:
                    BsPersonGear = (_b.sent()).BsPersonGear;
                    return [2 /*return*/, BsPersonGear];
                case 279: return [4 /*yield*/, import("react-icons/bs")];
                case 280:
                    BsPersonHeart = (_b.sent()).BsPersonHeart;
                    return [2 /*return*/, BsPersonHeart];
                case 281: return [4 /*yield*/, import("react-icons/bs")];
                case 282:
                    BsPersonHearts = (_b.sent()).BsPersonHearts;
                    return [2 /*return*/, BsPersonHearts];
                case 283: return [4 /*yield*/, import("react-icons/bs")];
                case 284:
                    BsPersonLinesFill = (_b.sent()).BsPersonLinesFill;
                    return [2 /*return*/, BsPersonLinesFill];
                case 285: return [4 /*yield*/, import("react-icons/bs")];
                case 286:
                    BsPersonLock = (_b.sent()).BsPersonLock;
                    return [2 /*return*/, BsPersonLock];
                case 287: return [4 /*yield*/, import("react-icons/bs")];
                case 288:
                    BsPersonPlusFill = (_b.sent()).BsPersonPlusFill;
                    return [2 /*return*/, BsPersonPlusFill];
                case 289: return [4 /*yield*/, import("react-icons/bs")];
                case 290:
                    BsPersonPlus = (_b.sent()).BsPersonPlus;
                    return [2 /*return*/, BsPersonPlus];
                case 291: return [4 /*yield*/, import("react-icons/bs")];
                case 292:
                    BsPersonRaisedHand = (_b.sent()).BsPersonRaisedHand;
                    return [2 /*return*/, BsPersonRaisedHand];
                case 293: return [4 /*yield*/, import("react-icons/bs")];
                case 294:
                    BsPersonRolodex = (_b.sent()).BsPersonRolodex;
                    return [2 /*return*/, BsPersonRolodex];
                case 295: return [4 /*yield*/, import("react-icons/bs")];
                case 296:
                    BsPersonSlash = (_b.sent()).BsPersonSlash;
                    return [2 /*return*/, BsPersonSlash];
                case 297: return [4 /*yield*/, import("react-icons/bs")];
                case 298:
                    BsPersonSquare = (_b.sent()).BsPersonSquare;
                    return [2 /*return*/, BsPersonSquare];
                case 299: return [4 /*yield*/, import("react-icons/bs")];
                case 300:
                    BsPersonStandingDress = (_b.sent()).BsPersonStandingDress;
                    return [2 /*return*/, BsPersonStandingDress];
                case 301: return [4 /*yield*/, import("react-icons/bs")];
                case 302:
                    BsPersonStanding = (_b.sent()).BsPersonStanding;
                    return [2 /*return*/, BsPersonStanding];
                case 303: return [4 /*yield*/, import("react-icons/bs")];
                case 304:
                    BsPersonUp = (_b.sent()).BsPersonUp;
                    return [2 /*return*/, BsPersonUp];
                case 305: return [4 /*yield*/, import("react-icons/bs")];
                case 306:
                    BsPersonVcardFill = (_b.sent()).BsPersonVcardFill;
                    return [2 /*return*/, BsPersonVcardFill];
                case 307: return [4 /*yield*/, import("react-icons/bs")];
                case 308:
                    BsPersonVcard = (_b.sent()).BsPersonVcard;
                    return [2 /*return*/, BsPersonVcard];
                case 309: return [4 /*yield*/, import("react-icons/bs")];
                case 310:
                    BsPersonVideo = (_b.sent()).BsPersonVideo;
                    return [2 /*return*/, BsPersonVideo];
                case 311: return [4 /*yield*/, import("react-icons/bs")];
                case 312:
                    BsPersonVideo2 = (_b.sent()).BsPersonVideo2;
                    return [2 /*return*/, BsPersonVideo2];
                case 313: return [4 /*yield*/, import("react-icons/bs")];
                case 314:
                    BsPersonVideo3 = (_b.sent()).BsPersonVideo3;
                    return [2 /*return*/, BsPersonVideo3];
                case 315: return [4 /*yield*/, import("react-icons/bs")];
                case 316:
                    BsPersonWalking = (_b.sent()).BsPersonWalking;
                    return [2 /*return*/, BsPersonWalking];
                case 317: return [4 /*yield*/, import("react-icons/bs")];
                case 318:
                    BsPersonWheelchair = (_b.sent()).BsPersonWheelchair;
                    return [2 /*return*/, BsPersonWheelchair];
                case 319: return [4 /*yield*/, import("react-icons/bs")];
                case 320:
                    BsPersonWorkspace = (_b.sent()).BsPersonWorkspace;
                    return [2 /*return*/, BsPersonWorkspace];
                case 321: return [4 /*yield*/, import("react-icons/bs")];
                case 322:
                    BsPersonXFill = (_b.sent()).BsPersonXFill;
                    return [2 /*return*/, BsPersonXFill];
                case 323: return [4 /*yield*/, import("react-icons/bs")];
                case 324:
                    BsPersonX = (_b.sent()).BsPersonX;
                    return [2 /*return*/, BsPersonX];
                case 325: return [4 /*yield*/, import("react-icons/bs")];
                case 326:
                    BsPerson = (_b.sent()).BsPerson;
                    return [2 /*return*/, BsPerson];
                case 327: return [4 /*yield*/, import("react-icons/bs")];
                case 328:
                    BsPhoneFill = (_b.sent()).BsPhoneFill;
                    return [2 /*return*/, BsPhoneFill];
                case 329: return [4 /*yield*/, import("react-icons/bs")];
                case 330:
                    BsPhoneFlip = (_b.sent()).BsPhoneFlip;
                    return [2 /*return*/, BsPhoneFlip];
                case 331: return [4 /*yield*/, import("react-icons/bs")];
                case 332:
                    BsPhoneLandscapeFill = (_b.sent()).BsPhoneLandscapeFill;
                    return [2 /*return*/, BsPhoneLandscapeFill];
                case 333: return [4 /*yield*/, import("react-icons/bs")];
                case 334:
                    BsPhoneLandscape = (_b.sent()).BsPhoneLandscape;
                    return [2 /*return*/, BsPhoneLandscape];
                case 335: return [4 /*yield*/, import("react-icons/bs")];
                case 336:
                    BsPhoneVibrateFill = (_b.sent()).BsPhoneVibrateFill;
                    return [2 /*return*/, BsPhoneVibrateFill];
                case 337: return [4 /*yield*/, import("react-icons/bs")];
                case 338:
                    BsPhoneVibrate = (_b.sent()).BsPhoneVibrate;
                    return [2 /*return*/, BsPhoneVibrate];
                case 339: return [4 /*yield*/, import("react-icons/bs")];
                case 340:
                    BsPhone = (_b.sent()).BsPhone;
                    return [2 /*return*/, BsPhone];
                case 341: return [4 /*yield*/, import("react-icons/bs")];
                case 342:
                    BsPieChartFill = (_b.sent()).BsPieChartFill;
                    return [2 /*return*/, BsPieChartFill];
                case 343: return [4 /*yield*/, import("react-icons/bs")];
                case 344:
                    BsPieChart = (_b.sent()).BsPieChart;
                    return [2 /*return*/, BsPieChart];
                case 345: return [4 /*yield*/, import("react-icons/bs")];
                case 346:
                    BsPiggyBankFill = (_b.sent()).BsPiggyBankFill;
                    return [2 /*return*/, BsPiggyBankFill];
                case 347: return [4 /*yield*/, import("react-icons/bs")];
                case 348:
                    BsPiggyBank = (_b.sent()).BsPiggyBank;
                    return [2 /*return*/, BsPiggyBank];
                case 349: return [4 /*yield*/, import("react-icons/bs")];
                case 350:
                    BsPinAngleFill = (_b.sent()).BsPinAngleFill;
                    return [2 /*return*/, BsPinAngleFill];
                case 351: return [4 /*yield*/, import("react-icons/bs")];
                case 352:
                    BsPinAngle = (_b.sent()).BsPinAngle;
                    return [2 /*return*/, BsPinAngle];
                case 353: return [4 /*yield*/, import("react-icons/bs")];
                case 354:
                    BsPinFill = (_b.sent()).BsPinFill;
                    return [2 /*return*/, BsPinFill];
                case 355: return [4 /*yield*/, import("react-icons/bs")];
                case 356:
                    BsPinMapFill = (_b.sent()).BsPinMapFill;
                    return [2 /*return*/, BsPinMapFill];
                case 357: return [4 /*yield*/, import("react-icons/bs")];
                case 358:
                    BsPinMap = (_b.sent()).BsPinMap;
                    return [2 /*return*/, BsPinMap];
                case 359: return [4 /*yield*/, import("react-icons/bs")];
                case 360:
                    BsPin = (_b.sent()).BsPin;
                    return [2 /*return*/, BsPin];
                case 361: return [4 /*yield*/, import("react-icons/bs")];
                case 362:
                    BsPinterest = (_b.sent()).BsPinterest;
                    return [2 /*return*/, BsPinterest];
                case 363: return [4 /*yield*/, import("react-icons/bs")];
                case 364:
                    BsPipFill = (_b.sent()).BsPipFill;
                    return [2 /*return*/, BsPipFill];
                case 365: return [4 /*yield*/, import("react-icons/bs")];
                case 366:
                    BsPip = (_b.sent()).BsPip;
                    return [2 /*return*/, BsPip];
                case 367: return [4 /*yield*/, import("react-icons/bs")];
                case 368:
                    BsPlayBtnFill = (_b.sent()).BsPlayBtnFill;
                    return [2 /*return*/, BsPlayBtnFill];
                case 369: return [4 /*yield*/, import("react-icons/bs")];
                case 370:
                    BsPlayBtn = (_b.sent()).BsPlayBtn;
                    return [2 /*return*/, BsPlayBtn];
                case 371: return [4 /*yield*/, import("react-icons/bs")];
                case 372:
                    BsPlayCircleFill = (_b.sent()).BsPlayCircleFill;
                    return [2 /*return*/, BsPlayCircleFill];
                case 373: return [4 /*yield*/, import("react-icons/bs")];
                case 374:
                    BsPlayCircle = (_b.sent()).BsPlayCircle;
                    return [2 /*return*/, BsPlayCircle];
                case 375: return [4 /*yield*/, import("react-icons/bs")];
                case 376:
                    BsPlayFill = (_b.sent()).BsPlayFill;
                    return [2 /*return*/, BsPlayFill];
                case 377: return [4 /*yield*/, import("react-icons/bs")];
                case 378:
                    BsPlay = (_b.sent()).BsPlay;
                    return [2 /*return*/, BsPlay];
                case 379: return [4 /*yield*/, import("react-icons/bs")];
                case 380:
                    BsPlaystation = (_b.sent()).BsPlaystation;
                    return [2 /*return*/, BsPlaystation];
                case 381: return [4 /*yield*/, import("react-icons/bs")];
                case 382:
                    BsPlugFill = (_b.sent()).BsPlugFill;
                    return [2 /*return*/, BsPlugFill];
                case 383: return [4 /*yield*/, import("react-icons/bs")];
                case 384:
                    BsPlug = (_b.sent()).BsPlug;
                    return [2 /*return*/, BsPlug];
                case 385: return [4 /*yield*/, import("react-icons/bs")];
                case 386:
                    BsPlugin = (_b.sent()).BsPlugin;
                    return [2 /*return*/, BsPlugin];
                case 387: return [4 /*yield*/, import("react-icons/bs")];
                case 388:
                    BsPlusCircleDotted = (_b.sent()).BsPlusCircleDotted;
                    return [2 /*return*/, BsPlusCircleDotted];
                case 389: return [4 /*yield*/, import("react-icons/bs")];
                case 390:
                    BsPlusCircleFill = (_b.sent()).BsPlusCircleFill;
                    return [2 /*return*/, BsPlusCircleFill];
                case 391: return [4 /*yield*/, import("react-icons/bs")];
                case 392:
                    BsPlusCircle = (_b.sent()).BsPlusCircle;
                    return [2 /*return*/, BsPlusCircle];
                case 393: return [4 /*yield*/, import("react-icons/bs")];
                case 394:
                    BsPlusLg = (_b.sent()).BsPlusLg;
                    return [2 /*return*/, BsPlusLg];
                case 395: return [4 /*yield*/, import("react-icons/bs")];
                case 396:
                    BsPlusSlashMinus = (_b.sent()).BsPlusSlashMinus;
                    return [2 /*return*/, BsPlusSlashMinus];
                case 397: return [4 /*yield*/, import("react-icons/bs")];
                case 398:
                    BsPlusSquareDotted = (_b.sent()).BsPlusSquareDotted;
                    return [2 /*return*/, BsPlusSquareDotted];
                case 399: return [4 /*yield*/, import("react-icons/bs")];
                case 400:
                    BsPlusSquareFill = (_b.sent()).BsPlusSquareFill;
                    return [2 /*return*/, BsPlusSquareFill];
                case 401: return [4 /*yield*/, import("react-icons/bs")];
                case 402:
                    BsPlusSquare = (_b.sent()).BsPlusSquare;
                    return [2 /*return*/, BsPlusSquare];
                case 403: return [4 /*yield*/, import("react-icons/bs")];
                case 404:
                    BsPlus = (_b.sent()).BsPlus;
                    return [2 /*return*/, BsPlus];
                case 405: return [4 /*yield*/, import("react-icons/bs")];
                case 406:
                    BsPostageFill = (_b.sent()).BsPostageFill;
                    return [2 /*return*/, BsPostageFill];
                case 407: return [4 /*yield*/, import("react-icons/bs")];
                case 408:
                    BsPostageHeartFill = (_b.sent()).BsPostageHeartFill;
                    return [2 /*return*/, BsPostageHeartFill];
                case 409: return [4 /*yield*/, import("react-icons/bs")];
                case 410:
                    BsPostageHeart = (_b.sent()).BsPostageHeart;
                    return [2 /*return*/, BsPostageHeart];
                case 411: return [4 /*yield*/, import("react-icons/bs")];
                case 412:
                    BsPostage = (_b.sent()).BsPostage;
                    return [2 /*return*/, BsPostage];
                case 413: return [4 /*yield*/, import("react-icons/bs")];
                case 414:
                    BsPostcardFill = (_b.sent()).BsPostcardFill;
                    return [2 /*return*/, BsPostcardFill];
                case 415: return [4 /*yield*/, import("react-icons/bs")];
                case 416:
                    BsPostcardHeartFill = (_b.sent()).BsPostcardHeartFill;
                    return [2 /*return*/, BsPostcardHeartFill];
                case 417: return [4 /*yield*/, import("react-icons/bs")];
                case 418:
                    BsPostcardHeart = (_b.sent()).BsPostcardHeart;
                    return [2 /*return*/, BsPostcardHeart];
                case 419: return [4 /*yield*/, import("react-icons/bs")];
                case 420:
                    BsPostcard = (_b.sent()).BsPostcard;
                    return [2 /*return*/, BsPostcard];
                case 421: return [4 /*yield*/, import("react-icons/bs")];
                case 422:
                    BsPower = (_b.sent()).BsPower;
                    return [2 /*return*/, BsPower];
                case 423: return [4 /*yield*/, import("react-icons/bs")];
                case 424:
                    BsPrescription = (_b.sent()).BsPrescription;
                    return [2 /*return*/, BsPrescription];
                case 425: return [4 /*yield*/, import("react-icons/bs")];
                case 426:
                    BsPrescription2 = (_b.sent()).BsPrescription2;
                    return [2 /*return*/, BsPrescription2];
                case 427: return [4 /*yield*/, import("react-icons/bs")];
                case 428:
                    BsPrinterFill = (_b.sent()).BsPrinterFill;
                    return [2 /*return*/, BsPrinterFill];
                case 429: return [4 /*yield*/, import("react-icons/bs")];
                case 430:
                    BsPrinter = (_b.sent()).BsPrinter;
                    return [2 /*return*/, BsPrinter];
                case 431: return [4 /*yield*/, import("react-icons/bs")];
                case 432:
                    BsProjectorFill = (_b.sent()).BsProjectorFill;
                    return [2 /*return*/, BsProjectorFill];
                case 433: return [4 /*yield*/, import("react-icons/bs")];
                case 434:
                    BsProjector = (_b.sent()).BsProjector;
                    return [2 /*return*/, BsProjector];
                case 435: return [4 /*yield*/, import("react-icons/bs")];
                case 436:
                    BsPuzzleFill = (_b.sent()).BsPuzzleFill;
                    return [2 /*return*/, BsPuzzleFill];
                case 437: return [4 /*yield*/, import("react-icons/bs")];
                case 438:
                    BsPuzzle = (_b.sent()).BsPuzzle;
                    return [2 /*return*/, BsPuzzle];
                case 439: return [4 /*yield*/, import("react-icons/bs")];
                case 440:
                    BsQrCodeScan = (_b.sent()).BsQrCodeScan;
                    return [2 /*return*/, BsQrCodeScan];
                case 441: return [4 /*yield*/, import("react-icons/bs")];
                case 442:
                    BsQrCode = (_b.sent()).BsQrCode;
                    return [2 /*return*/, BsQrCode];
                case 443: return [4 /*yield*/, import("react-icons/bs")];
                case 444:
                    BsQuestionCircleFill = (_b.sent()).BsQuestionCircleFill;
                    return [2 /*return*/, BsQuestionCircleFill];
                case 445: return [4 /*yield*/, import("react-icons/bs")];
                case 446:
                    BsQuestionCircle = (_b.sent()).BsQuestionCircle;
                    return [2 /*return*/, BsQuestionCircle];
                case 447: return [4 /*yield*/, import("react-icons/bs")];
                case 448:
                    BsQuestionDiamondFill = (_b.sent()).BsQuestionDiamondFill;
                    return [2 /*return*/, BsQuestionDiamondFill];
                case 449: return [4 /*yield*/, import("react-icons/bs")];
                case 450:
                    BsQuestionDiamond = (_b.sent()).BsQuestionDiamond;
                    return [2 /*return*/, BsQuestionDiamond];
                case 451: return [4 /*yield*/, import("react-icons/bs")];
                case 452:
                    BsQuestionLg = (_b.sent()).BsQuestionLg;
                    return [2 /*return*/, BsQuestionLg];
                case 453: return [4 /*yield*/, import("react-icons/bs")];
                case 454:
                    BsQuestionOctagonFill = (_b.sent()).BsQuestionOctagonFill;
                    return [2 /*return*/, BsQuestionOctagonFill];
                case 455: return [4 /*yield*/, import("react-icons/bs")];
                case 456:
                    BsQuestionOctagon = (_b.sent()).BsQuestionOctagon;
                    return [2 /*return*/, BsQuestionOctagon];
                case 457: return [4 /*yield*/, import("react-icons/bs")];
                case 458:
                    BsQuestionSquareFill = (_b.sent()).BsQuestionSquareFill;
                    return [2 /*return*/, BsQuestionSquareFill];
                case 459: return [4 /*yield*/, import("react-icons/bs")];
                case 460:
                    BsQuestionSquare = (_b.sent()).BsQuestionSquare;
                    return [2 /*return*/, BsQuestionSquare];
                case 461: return [4 /*yield*/, import("react-icons/bs")];
                case 462:
                    BsQuestion = (_b.sent()).BsQuestion;
                    return [2 /*return*/, BsQuestion];
                case 463: return [4 /*yield*/, import("react-icons/bs")];
                case 464:
                    BsQuora = (_b.sent()).BsQuora;
                    return [2 /*return*/, BsQuora];
                case 465: return [4 /*yield*/, import("react-icons/bs")];
                case 466:
                    BsQuote = (_b.sent()).BsQuote;
                    return [2 /*return*/, BsQuote];
                case 467: return [4 /*yield*/, import("react-icons/bs")];
                case 468:
                    BsRCircleFill = (_b.sent()).BsRCircleFill;
                    return [2 /*return*/, BsRCircleFill];
                case 469: return [4 /*yield*/, import("react-icons/bs")];
                case 470:
                    BsRCircle = (_b.sent()).BsRCircle;
                    return [2 /*return*/, BsRCircle];
                case 471: return [4 /*yield*/, import("react-icons/bs")];
                case 472:
                    BsRSquareFill = (_b.sent()).BsRSquareFill;
                    return [2 /*return*/, BsRSquareFill];
                case 473: return [4 /*yield*/, import("react-icons/bs")];
                case 474:
                    BsRSquare = (_b.sent()).BsRSquare;
                    return [2 /*return*/, BsRSquare];
                case 475: return [4 /*yield*/, import("react-icons/bs")];
                case 476:
                    BsRadar = (_b.sent()).BsRadar;
                    return [2 /*return*/, BsRadar];
                case 477: return [4 /*yield*/, import("react-icons/bs")];
                case 478:
                    BsRadioactive = (_b.sent()).BsRadioactive;
                    return [2 /*return*/, BsRadioactive];
                case 479: return [4 /*yield*/, import("react-icons/bs")];
                case 480:
                    BsRainbow = (_b.sent()).BsRainbow;
                    return [2 /*return*/, BsRainbow];
                case 481: return [4 /*yield*/, import("react-icons/bs")];
                case 482:
                    BsReceiptCutoff = (_b.sent()).BsReceiptCutoff;
                    return [2 /*return*/, BsReceiptCutoff];
                case 483: return [4 /*yield*/, import("react-icons/bs")];
                case 484:
                    BsReceipt = (_b.sent()).BsReceipt;
                    return [2 /*return*/, BsReceipt];
                case 485: return [4 /*yield*/, import("react-icons/bs")];
                case 486:
                    BsReception0 = (_b.sent()).BsReception0;
                    return [2 /*return*/, BsReception0];
                case 487: return [4 /*yield*/, import("react-icons/bs")];
                case 488:
                    BsReception1 = (_b.sent()).BsReception1;
                    return [2 /*return*/, BsReception1];
                case 489: return [4 /*yield*/, import("react-icons/bs")];
                case 490:
                    BsReception2 = (_b.sent()).BsReception2;
                    return [2 /*return*/, BsReception2];
                case 491: return [4 /*yield*/, import("react-icons/bs")];
                case 492:
                    BsReception3 = (_b.sent()).BsReception3;
                    return [2 /*return*/, BsReception3];
                case 493: return [4 /*yield*/, import("react-icons/bs")];
                case 494:
                    BsReception4 = (_b.sent()).BsReception4;
                    return [2 /*return*/, BsReception4];
                case 495: return [4 /*yield*/, import("react-icons/bs")];
                case 496:
                    BsRecordBtnFill = (_b.sent()).BsRecordBtnFill;
                    return [2 /*return*/, BsRecordBtnFill];
                case 497: return [4 /*yield*/, import("react-icons/bs")];
                case 498:
                    BsRecordBtn = (_b.sent()).BsRecordBtn;
                    return [2 /*return*/, BsRecordBtn];
                case 499: return [4 /*yield*/, import("react-icons/bs")];
                case 500:
                    BsRecordCircleFill = (_b.sent()).BsRecordCircleFill;
                    return [2 /*return*/, BsRecordCircleFill];
                case 501: return [4 /*yield*/, import("react-icons/bs")];
                case 502:
                    BsRecordCircle = (_b.sent()).BsRecordCircle;
                    return [2 /*return*/, BsRecordCircle];
                case 503: return [4 /*yield*/, import("react-icons/bs")];
                case 504:
                    BsRecordFill = (_b.sent()).BsRecordFill;
                    return [2 /*return*/, BsRecordFill];
                case 505: return [4 /*yield*/, import("react-icons/bs")];
                case 506:
                    BsRecord = (_b.sent()).BsRecord;
                    return [2 /*return*/, BsRecord];
                case 507: return [4 /*yield*/, import("react-icons/bs")];
                case 508:
                    BsRecord2Fill = (_b.sent()).BsRecord2Fill;
                    return [2 /*return*/, BsRecord2Fill];
                case 509: return [4 /*yield*/, import("react-icons/bs")];
                case 510:
                    BsRecord2 = (_b.sent()).BsRecord2;
                    return [2 /*return*/, BsRecord2];
                case 511: return [4 /*yield*/, import("react-icons/bs")];
                case 512:
                    BsRecycle = (_b.sent()).BsRecycle;
                    return [2 /*return*/, BsRecycle];
                case 513: return [4 /*yield*/, import("react-icons/bs")];
                case 514:
                    BsReddit = (_b.sent()).BsReddit;
                    return [2 /*return*/, BsReddit];
                case 515: return [4 /*yield*/, import("react-icons/bs")];
                case 516:
                    BsRegex = (_b.sent()).BsRegex;
                    return [2 /*return*/, BsRegex];
                case 517: return [4 /*yield*/, import("react-icons/bs")];
                case 518:
                    BsRepeat1 = (_b.sent()).BsRepeat1;
                    return [2 /*return*/, BsRepeat1];
                case 519: return [4 /*yield*/, import("react-icons/bs")];
                case 520:
                    BsRepeat = (_b.sent()).BsRepeat;
                    return [2 /*return*/, BsRepeat];
                case 521: return [4 /*yield*/, import("react-icons/bs")];
                case 522:
                    BsReplyAllFill = (_b.sent()).BsReplyAllFill;
                    return [2 /*return*/, BsReplyAllFill];
                case 523: return [4 /*yield*/, import("react-icons/bs")];
                case 524:
                    BsReplyAll = (_b.sent()).BsReplyAll;
                    return [2 /*return*/, BsReplyAll];
                case 525: return [4 /*yield*/, import("react-icons/bs")];
                case 526:
                    BsReplyFill = (_b.sent()).BsReplyFill;
                    return [2 /*return*/, BsReplyFill];
                case 527: return [4 /*yield*/, import("react-icons/bs")];
                case 528:
                    BsReply = (_b.sent()).BsReply;
                    return [2 /*return*/, BsReply];
                case 529: return [4 /*yield*/, import("react-icons/bs")];
                case 530:
                    BsRewindBtnFill = (_b.sent()).BsRewindBtnFill;
                    return [2 /*return*/, BsRewindBtnFill];
                case 531: return [4 /*yield*/, import("react-icons/bs")];
                case 532:
                    BsRewindBtn = (_b.sent()).BsRewindBtn;
                    return [2 /*return*/, BsRewindBtn];
                case 533: return [4 /*yield*/, import("react-icons/bs")];
                case 534:
                    BsRewindCircleFill = (_b.sent()).BsRewindCircleFill;
                    return [2 /*return*/, BsRewindCircleFill];
                case 535: return [4 /*yield*/, import("react-icons/bs")];
                case 536:
                    BsRewindCircle = (_b.sent()).BsRewindCircle;
                    return [2 /*return*/, BsRewindCircle];
                case 537: return [4 /*yield*/, import("react-icons/bs")];
                case 538:
                    BsRewindFill = (_b.sent()).BsRewindFill;
                    return [2 /*return*/, BsRewindFill];
                case 539: return [4 /*yield*/, import("react-icons/bs")];
                case 540:
                    BsRewind = (_b.sent()).BsRewind;
                    return [2 /*return*/, BsRewind];
                case 541: return [4 /*yield*/, import("react-icons/bs")];
                case 542:
                    BsRobot = (_b.sent()).BsRobot;
                    return [2 /*return*/, BsRobot];
                case 543: return [4 /*yield*/, import("react-icons/bs")];
                case 544:
                    BsRocketFill = (_b.sent()).BsRocketFill;
                    return [2 /*return*/, BsRocketFill];
                case 545: return [4 /*yield*/, import("react-icons/bs")];
                case 546:
                    BsRocketTakeoffFill = (_b.sent()).BsRocketTakeoffFill;
                    return [2 /*return*/, BsRocketTakeoffFill];
                case 547: return [4 /*yield*/, import("react-icons/bs")];
                case 548:
                    BsRocketTakeoff = (_b.sent()).BsRocketTakeoff;
                    return [2 /*return*/, BsRocketTakeoff];
                case 549: return [4 /*yield*/, import("react-icons/bs")];
                case 550:
                    BsRocket = (_b.sent()).BsRocket;
                    return [2 /*return*/, BsRocket];
                case 551: return [4 /*yield*/, import("react-icons/bs")];
                case 552:
                    BsRouterFill = (_b.sent()).BsRouterFill;
                    return [2 /*return*/, BsRouterFill];
                case 553: return [4 /*yield*/, import("react-icons/bs")];
                case 554:
                    BsRouter = (_b.sent()).BsRouter;
                    return [2 /*return*/, BsRouter];
                case 555: return [4 /*yield*/, import("react-icons/bs")];
                case 556:
                    BsRssFill = (_b.sent()).BsRssFill;
                    return [2 /*return*/, BsRssFill];
                case 557: return [4 /*yield*/, import("react-icons/bs")];
                case 558:
                    BsRss = (_b.sent()).BsRss;
                    return [2 /*return*/, BsRss];
                case 559: return [4 /*yield*/, import("react-icons/bs")];
                case 560:
                    BsRulers = (_b.sent()).BsRulers;
                    return [2 /*return*/, BsRulers];
                case 561: return [4 /*yield*/, import("react-icons/bs")];
                case 562:
                    BsSafeFill = (_b.sent()).BsSafeFill;
                    return [2 /*return*/, BsSafeFill];
                case 563: return [4 /*yield*/, import("react-icons/bs")];
                case 564:
                    BsSafe = (_b.sent()).BsSafe;
                    return [2 /*return*/, BsSafe];
                case 565: return [4 /*yield*/, import("react-icons/bs")];
                case 566:
                    BsSafe2Fill = (_b.sent()).BsSafe2Fill;
                    return [2 /*return*/, BsSafe2Fill];
                case 567: return [4 /*yield*/, import("react-icons/bs")];
                case 568:
                    BsSafe2 = (_b.sent()).BsSafe2;
                    return [2 /*return*/, BsSafe2];
                case 569: return [4 /*yield*/, import("react-icons/bs")];
                case 570:
                    BsSaveFill = (_b.sent()).BsSaveFill;
                    return [2 /*return*/, BsSaveFill];
                case 571: return [4 /*yield*/, import("react-icons/bs")];
                case 572:
                    BsSave = (_b.sent()).BsSave;
                    return [2 /*return*/, BsSave];
                case 573: return [4 /*yield*/, import("react-icons/bs")];
                case 574:
                    BsSave2Fill = (_b.sent()).BsSave2Fill;
                    return [2 /*return*/, BsSave2Fill];
                case 575: return [4 /*yield*/, import("react-icons/bs")];
                case 576:
                    BsSave2 = (_b.sent()).BsSave2;
                    return [2 /*return*/, BsSave2];
                case 577: return [4 /*yield*/, import("react-icons/bs")];
                case 578:
                    BsScissors = (_b.sent()).BsScissors;
                    return [2 /*return*/, BsScissors];
                case 579: return [4 /*yield*/, import("react-icons/bs")];
                case 580:
                    BsScooter = (_b.sent()).BsScooter;
                    return [2 /*return*/, BsScooter];
                case 581: return [4 /*yield*/, import("react-icons/bs")];
                case 582:
                    BsScrewdriver = (_b.sent()).BsScrewdriver;
                    return [2 /*return*/, BsScrewdriver];
                case 583: return [4 /*yield*/, import("react-icons/bs")];
                case 584:
                    BsSdCardFill = (_b.sent()).BsSdCardFill;
                    return [2 /*return*/, BsSdCardFill];
                case 585: return [4 /*yield*/, import("react-icons/bs")];
                case 586:
                    BsSdCard = (_b.sent()).BsSdCard;
                    return [2 /*return*/, BsSdCard];
                case 587: return [4 /*yield*/, import("react-icons/bs")];
                case 588:
                    BsSearchHeartFill = (_b.sent()).BsSearchHeartFill;
                    return [2 /*return*/, BsSearchHeartFill];
                case 589: return [4 /*yield*/, import("react-icons/bs")];
                case 590:
                    BsSearchHeart = (_b.sent()).BsSearchHeart;
                    return [2 /*return*/, BsSearchHeart];
                case 591: return [4 /*yield*/, import("react-icons/bs")];
                case 592:
                    BsSearch = (_b.sent()).BsSearch;
                    return [2 /*return*/, BsSearch];
                case 593: return [4 /*yield*/, import("react-icons/bs")];
                case 594:
                    BsSegmentedNav = (_b.sent()).BsSegmentedNav;
                    return [2 /*return*/, BsSegmentedNav];
                case 595: return [4 /*yield*/, import("react-icons/bs")];
                case 596:
                    BsSendArrowDownFill = (_b.sent()).BsSendArrowDownFill;
                    return [2 /*return*/, BsSendArrowDownFill];
                case 597: return [4 /*yield*/, import("react-icons/bs")];
                case 598:
                    BsSendArrowDown = (_b.sent()).BsSendArrowDown;
                    return [2 /*return*/, BsSendArrowDown];
                case 599: return [4 /*yield*/, import("react-icons/bs")];
                case 600:
                    BsSendArrowUpFill = (_b.sent()).BsSendArrowUpFill;
                    return [2 /*return*/, BsSendArrowUpFill];
                case 601: return [4 /*yield*/, import("react-icons/bs")];
                case 602:
                    BsSendArrowUp = (_b.sent()).BsSendArrowUp;
                    return [2 /*return*/, BsSendArrowUp];
                case 603: return [4 /*yield*/, import("react-icons/bs")];
                case 604:
                    BsSendCheckFill = (_b.sent()).BsSendCheckFill;
                    return [2 /*return*/, BsSendCheckFill];
                case 605: return [4 /*yield*/, import("react-icons/bs")];
                case 606:
                    BsSendCheck = (_b.sent()).BsSendCheck;
                    return [2 /*return*/, BsSendCheck];
                case 607: return [4 /*yield*/, import("react-icons/bs")];
                case 608:
                    BsSendDashFill = (_b.sent()).BsSendDashFill;
                    return [2 /*return*/, BsSendDashFill];
                case 609: return [4 /*yield*/, import("react-icons/bs")];
                case 610:
                    BsSendDash = (_b.sent()).BsSendDash;
                    return [2 /*return*/, BsSendDash];
                case 611: return [4 /*yield*/, import("react-icons/bs")];
                case 612:
                    BsSendExclamationFill = (_b.sent()).BsSendExclamationFill;
                    return [2 /*return*/, BsSendExclamationFill];
                case 613: return [4 /*yield*/, import("react-icons/bs")];
                case 614:
                    BsSendExclamation = (_b.sent()).BsSendExclamation;
                    return [2 /*return*/, BsSendExclamation];
                case 615: return [4 /*yield*/, import("react-icons/bs")];
                case 616:
                    BsSendFill = (_b.sent()).BsSendFill;
                    return [2 /*return*/, BsSendFill];
                case 617: return [4 /*yield*/, import("react-icons/bs")];
                case 618:
                    BsSendPlusFill = (_b.sent()).BsSendPlusFill;
                    return [2 /*return*/, BsSendPlusFill];
                case 619: return [4 /*yield*/, import("react-icons/bs")];
                case 620:
                    BsSendPlus = (_b.sent()).BsSendPlus;
                    return [2 /*return*/, BsSendPlus];
                case 621: return [4 /*yield*/, import("react-icons/bs")];
                case 622:
                    BsSendSlashFill = (_b.sent()).BsSendSlashFill;
                    return [2 /*return*/, BsSendSlashFill];
                case 623: return [4 /*yield*/, import("react-icons/bs")];
                case 624:
                    BsSendSlash = (_b.sent()).BsSendSlash;
                    return [2 /*return*/, BsSendSlash];
                case 625: return [4 /*yield*/, import("react-icons/bs")];
                case 626:
                    BsSendXFill = (_b.sent()).BsSendXFill;
                    return [2 /*return*/, BsSendXFill];
                case 627: return [4 /*yield*/, import("react-icons/bs")];
                case 628:
                    BsSendX = (_b.sent()).BsSendX;
                    return [2 /*return*/, BsSendX];
                case 629: return [4 /*yield*/, import("react-icons/bs")];
                case 630:
                    BsSend = (_b.sent()).BsSend;
                    return [2 /*return*/, BsSend];
                case 631: return [4 /*yield*/, import("react-icons/bs")];
                case 632:
                    BsServer = (_b.sent()).BsServer;
                    return [2 /*return*/, BsServer];
                case 633: return [4 /*yield*/, import("react-icons/bs")];
                case 634:
                    BsShadows = (_b.sent()).BsShadows;
                    return [2 /*return*/, BsShadows];
                case 635: return [4 /*yield*/, import("react-icons/bs")];
                case 636:
                    BsShareFill = (_b.sent()).BsShareFill;
                    return [2 /*return*/, BsShareFill];
                case 637: return [4 /*yield*/, import("react-icons/bs")];
                case 638:
                    BsShare = (_b.sent()).BsShare;
                    return [2 /*return*/, BsShare];
                case 639: return [4 /*yield*/, import("react-icons/bs")];
                case 640:
                    BsShieldCheck = (_b.sent()).BsShieldCheck;
                    return [2 /*return*/, BsShieldCheck];
                case 641: return [4 /*yield*/, import("react-icons/bs")];
                case 642:
                    BsShieldExclamation = (_b.sent()).BsShieldExclamation;
                    return [2 /*return*/, BsShieldExclamation];
                case 643: return [4 /*yield*/, import("react-icons/bs")];
                case 644:
                    BsShieldFillCheck = (_b.sent()).BsShieldFillCheck;
                    return [2 /*return*/, BsShieldFillCheck];
                case 645: return [4 /*yield*/, import("react-icons/bs")];
                case 646:
                    BsShieldFillExclamation = (_b.sent()).BsShieldFillExclamation;
                    return [2 /*return*/, BsShieldFillExclamation];
                case 647: return [4 /*yield*/, import("react-icons/bs")];
                case 648:
                    BsShieldFillMinus = (_b.sent()).BsShieldFillMinus;
                    return [2 /*return*/, BsShieldFillMinus];
                case 649: return [4 /*yield*/, import("react-icons/bs")];
                case 650:
                    BsShieldFillPlus = (_b.sent()).BsShieldFillPlus;
                    return [2 /*return*/, BsShieldFillPlus];
                case 651: return [4 /*yield*/, import("react-icons/bs")];
                case 652:
                    BsShieldFillX = (_b.sent()).BsShieldFillX;
                    return [2 /*return*/, BsShieldFillX];
                case 653: return [4 /*yield*/, import("react-icons/bs")];
                case 654:
                    BsShieldFill = (_b.sent()).BsShieldFill;
                    return [2 /*return*/, BsShieldFill];
                case 655: return [4 /*yield*/, import("react-icons/bs")];
                case 656:
                    BsShieldLockFill = (_b.sent()).BsShieldLockFill;
                    return [2 /*return*/, BsShieldLockFill];
                case 657: return [4 /*yield*/, import("react-icons/bs")];
                case 658:
                    BsShieldLock = (_b.sent()).BsShieldLock;
                    return [2 /*return*/, BsShieldLock];
                case 659: return [4 /*yield*/, import("react-icons/bs")];
                case 660:
                    BsShieldMinus = (_b.sent()).BsShieldMinus;
                    return [2 /*return*/, BsShieldMinus];
                case 661: return [4 /*yield*/, import("react-icons/bs")];
                case 662:
                    BsShieldPlus = (_b.sent()).BsShieldPlus;
                    return [2 /*return*/, BsShieldPlus];
                case 663: return [4 /*yield*/, import("react-icons/bs")];
                case 664:
                    BsShieldShaded = (_b.sent()).BsShieldShaded;
                    return [2 /*return*/, BsShieldShaded];
                case 665: return [4 /*yield*/, import("react-icons/bs")];
                case 666:
                    BsShieldSlashFill = (_b.sent()).BsShieldSlashFill;
                    return [2 /*return*/, BsShieldSlashFill];
                case 667: return [4 /*yield*/, import("react-icons/bs")];
                case 668:
                    BsShieldSlash = (_b.sent()).BsShieldSlash;
                    return [2 /*return*/, BsShieldSlash];
                case 669: return [4 /*yield*/, import("react-icons/bs")];
                case 670:
                    BsShieldX = (_b.sent()).BsShieldX;
                    return [2 /*return*/, BsShieldX];
                case 671: return [4 /*yield*/, import("react-icons/bs")];
                case 672:
                    BsShield = (_b.sent()).BsShield;
                    return [2 /*return*/, BsShield];
                case 673: return [4 /*yield*/, import("react-icons/bs")];
                case 674:
                    BsShiftFill = (_b.sent()).BsShiftFill;
                    return [2 /*return*/, BsShiftFill];
                case 675: return [4 /*yield*/, import("react-icons/bs")];
                case 676:
                    BsShift = (_b.sent()).BsShift;
                    return [2 /*return*/, BsShift];
                case 677: return [4 /*yield*/, import("react-icons/bs")];
                case 678:
                    BsShopWindow = (_b.sent()).BsShopWindow;
                    return [2 /*return*/, BsShopWindow];
                case 679: return [4 /*yield*/, import("react-icons/bs")];
                case 680:
                    BsShop = (_b.sent()).BsShop;
                    return [2 /*return*/, BsShop];
                case 681: return [4 /*yield*/, import("react-icons/bs")];
                case 682:
                    BsShuffle = (_b.sent()).BsShuffle;
                    return [2 /*return*/, BsShuffle];
                case 683: return [4 /*yield*/, import("react-icons/bs")];
                case 684:
                    BsSignDeadEndFill = (_b.sent()).BsSignDeadEndFill;
                    return [2 /*return*/, BsSignDeadEndFill];
                case 685: return [4 /*yield*/, import("react-icons/bs")];
                case 686:
                    BsSignDeadEnd = (_b.sent()).BsSignDeadEnd;
                    return [2 /*return*/, BsSignDeadEnd];
                case 687: return [4 /*yield*/, import("react-icons/bs")];
                case 688:
                    BsSignDoNotEnterFill = (_b.sent()).BsSignDoNotEnterFill;
                    return [2 /*return*/, BsSignDoNotEnterFill];
                case 689: return [4 /*yield*/, import("react-icons/bs")];
                case 690:
                    BsSignDoNotEnter = (_b.sent()).BsSignDoNotEnter;
                    return [2 /*return*/, BsSignDoNotEnter];
                case 691: return [4 /*yield*/, import("react-icons/bs")];
                case 692:
                    BsSignIntersectionFill = (_b.sent()).BsSignIntersectionFill;
                    return [2 /*return*/, BsSignIntersectionFill];
                case 693: return [4 /*yield*/, import("react-icons/bs")];
                case 694:
                    BsSignIntersectionSideFill = (_b.sent()).BsSignIntersectionSideFill;
                    return [2 /*return*/, BsSignIntersectionSideFill];
                case 695: return [4 /*yield*/, import("react-icons/bs")];
                case 696:
                    BsSignIntersectionSide = (_b.sent()).BsSignIntersectionSide;
                    return [2 /*return*/, BsSignIntersectionSide];
                case 697: return [4 /*yield*/, import("react-icons/bs")];
                case 698:
                    BsSignIntersectionTFill = (_b.sent()).BsSignIntersectionTFill;
                    return [2 /*return*/, BsSignIntersectionTFill];
                case 699: return [4 /*yield*/, import("react-icons/bs")];
                case 700:
                    BsSignIntersectionT = (_b.sent()).BsSignIntersectionT;
                    return [2 /*return*/, BsSignIntersectionT];
                case 701: return [4 /*yield*/, import("react-icons/bs")];
                case 702:
                    BsSignIntersectionYFill = (_b.sent()).BsSignIntersectionYFill;
                    return [2 /*return*/, BsSignIntersectionYFill];
                case 703: return [4 /*yield*/, import("react-icons/bs")];
                case 704:
                    BsSignIntersectionY = (_b.sent()).BsSignIntersectionY;
                    return [2 /*return*/, BsSignIntersectionY];
                case 705: return [4 /*yield*/, import("react-icons/bs")];
                case 706:
                    BsSignIntersection = (_b.sent()).BsSignIntersection;
                    return [2 /*return*/, BsSignIntersection];
                case 707: return [4 /*yield*/, import("react-icons/bs")];
                case 708:
                    BsSignMergeLeftFill = (_b.sent()).BsSignMergeLeftFill;
                    return [2 /*return*/, BsSignMergeLeftFill];
                case 709: return [4 /*yield*/, import("react-icons/bs")];
                case 710:
                    BsSignMergeLeft = (_b.sent()).BsSignMergeLeft;
                    return [2 /*return*/, BsSignMergeLeft];
                case 711: return [4 /*yield*/, import("react-icons/bs")];
                case 712:
                    BsSignMergeRightFill = (_b.sent()).BsSignMergeRightFill;
                    return [2 /*return*/, BsSignMergeRightFill];
                case 713: return [4 /*yield*/, import("react-icons/bs")];
                case 714:
                    BsSignMergeRight = (_b.sent()).BsSignMergeRight;
                    return [2 /*return*/, BsSignMergeRight];
                case 715: return [4 /*yield*/, import("react-icons/bs")];
                case 716:
                    BsSignNoLeftTurnFill = (_b.sent()).BsSignNoLeftTurnFill;
                    return [2 /*return*/, BsSignNoLeftTurnFill];
                case 717: return [4 /*yield*/, import("react-icons/bs")];
                case 718:
                    BsSignNoLeftTurn = (_b.sent()).BsSignNoLeftTurn;
                    return [2 /*return*/, BsSignNoLeftTurn];
                case 719: return [4 /*yield*/, import("react-icons/bs")];
                case 720:
                    BsSignNoParkingFill = (_b.sent()).BsSignNoParkingFill;
                    return [2 /*return*/, BsSignNoParkingFill];
                case 721: return [4 /*yield*/, import("react-icons/bs")];
                case 722:
                    BsSignNoParking = (_b.sent()).BsSignNoParking;
                    return [2 /*return*/, BsSignNoParking];
                case 723: return [4 /*yield*/, import("react-icons/bs")];
                case 724:
                    BsSignNoRightTurnFill = (_b.sent()).BsSignNoRightTurnFill;
                    return [2 /*return*/, BsSignNoRightTurnFill];
                case 725: return [4 /*yield*/, import("react-icons/bs")];
                case 726:
                    BsSignNoRightTurn = (_b.sent()).BsSignNoRightTurn;
                    return [2 /*return*/, BsSignNoRightTurn];
                case 727: return [4 /*yield*/, import("react-icons/bs")];
                case 728:
                    BsSignRailroadFill = (_b.sent()).BsSignRailroadFill;
                    return [2 /*return*/, BsSignRailroadFill];
                case 729: return [4 /*yield*/, import("react-icons/bs")];
                case 730:
                    BsSignRailroad = (_b.sent()).BsSignRailroad;
                    return [2 /*return*/, BsSignRailroad];
                case 731: return [4 /*yield*/, import("react-icons/bs")];
                case 732:
                    BsSignStopFill = (_b.sent()).BsSignStopFill;
                    return [2 /*return*/, BsSignStopFill];
                case 733: return [4 /*yield*/, import("react-icons/bs")];
                case 734:
                    BsSignStopLightsFill = (_b.sent()).BsSignStopLightsFill;
                    return [2 /*return*/, BsSignStopLightsFill];
                case 735: return [4 /*yield*/, import("react-icons/bs")];
                case 736:
                    BsSignStopLights = (_b.sent()).BsSignStopLights;
                    return [2 /*return*/, BsSignStopLights];
                case 737: return [4 /*yield*/, import("react-icons/bs")];
                case 738:
                    BsSignStop = (_b.sent()).BsSignStop;
                    return [2 /*return*/, BsSignStop];
                case 739: return [4 /*yield*/, import("react-icons/bs")];
                case 740:
                    BsSignTurnLeftFill = (_b.sent()).BsSignTurnLeftFill;
                    return [2 /*return*/, BsSignTurnLeftFill];
                case 741: return [4 /*yield*/, import("react-icons/bs")];
                case 742:
                    BsSignTurnLeft = (_b.sent()).BsSignTurnLeft;
                    return [2 /*return*/, BsSignTurnLeft];
                case 743: return [4 /*yield*/, import("react-icons/bs")];
                case 744:
                    BsSignTurnRightFill = (_b.sent()).BsSignTurnRightFill;
                    return [2 /*return*/, BsSignTurnRightFill];
                case 745: return [4 /*yield*/, import("react-icons/bs")];
                case 746:
                    BsSignTurnRight = (_b.sent()).BsSignTurnRight;
                    return [2 /*return*/, BsSignTurnRight];
                case 747: return [4 /*yield*/, import("react-icons/bs")];
                case 748:
                    BsSignTurnSlightLeftFill = (_b.sent()).BsSignTurnSlightLeftFill;
                    return [2 /*return*/, BsSignTurnSlightLeftFill];
                case 749: return [4 /*yield*/, import("react-icons/bs")];
                case 750:
                    BsSignTurnSlightLeft = (_b.sent()).BsSignTurnSlightLeft;
                    return [2 /*return*/, BsSignTurnSlightLeft];
                case 751: return [4 /*yield*/, import("react-icons/bs")];
                case 752:
                    BsSignTurnSlightRightFill = (_b.sent()).BsSignTurnSlightRightFill;
                    return [2 /*return*/, BsSignTurnSlightRightFill];
                case 753: return [4 /*yield*/, import("react-icons/bs")];
                case 754:
                    BsSignTurnSlightRight = (_b.sent()).BsSignTurnSlightRight;
                    return [2 /*return*/, BsSignTurnSlightRight];
                case 755: return [4 /*yield*/, import("react-icons/bs")];
                case 756:
                    BsSignYieldFill = (_b.sent()).BsSignYieldFill;
                    return [2 /*return*/, BsSignYieldFill];
                case 757: return [4 /*yield*/, import("react-icons/bs")];
                case 758:
                    BsSignYield = (_b.sent()).BsSignYield;
                    return [2 /*return*/, BsSignYield];
                case 759: return [4 /*yield*/, import("react-icons/bs")];
                case 760:
                    BsSignal = (_b.sent()).BsSignal;
                    return [2 /*return*/, BsSignal];
                case 761: return [4 /*yield*/, import("react-icons/bs")];
                case 762:
                    BsSignpost2Fill = (_b.sent()).BsSignpost2Fill;
                    return [2 /*return*/, BsSignpost2Fill];
                case 763: return [4 /*yield*/, import("react-icons/bs")];
                case 764:
                    BsSignpost2 = (_b.sent()).BsSignpost2;
                    return [2 /*return*/, BsSignpost2];
                case 765: return [4 /*yield*/, import("react-icons/bs")];
                case 766:
                    BsSignpostFill = (_b.sent()).BsSignpostFill;
                    return [2 /*return*/, BsSignpostFill];
                case 767: return [4 /*yield*/, import("react-icons/bs")];
                case 768:
                    BsSignpostSplitFill = (_b.sent()).BsSignpostSplitFill;
                    return [2 /*return*/, BsSignpostSplitFill];
                case 769: return [4 /*yield*/, import("react-icons/bs")];
                case 770:
                    BsSignpostSplit = (_b.sent()).BsSignpostSplit;
                    return [2 /*return*/, BsSignpostSplit];
                case 771: return [4 /*yield*/, import("react-icons/bs")];
                case 772:
                    BsSignpost = (_b.sent()).BsSignpost;
                    return [2 /*return*/, BsSignpost];
                case 773: return [4 /*yield*/, import("react-icons/bs")];
                case 774:
                    BsSimFill = (_b.sent()).BsSimFill;
                    return [2 /*return*/, BsSimFill];
                case 775: return [4 /*yield*/, import("react-icons/bs")];
                case 776:
                    BsSimSlashFill = (_b.sent()).BsSimSlashFill;
                    return [2 /*return*/, BsSimSlashFill];
                case 777: return [4 /*yield*/, import("react-icons/bs")];
                case 778:
                    BsSimSlash = (_b.sent()).BsSimSlash;
                    return [2 /*return*/, BsSimSlash];
                case 779: return [4 /*yield*/, import("react-icons/bs")];
                case 780:
                    BsSim = (_b.sent()).BsSim;
                    return [2 /*return*/, BsSim];
                case 781: return [4 /*yield*/, import("react-icons/bs")];
                case 782:
                    BsSinaWeibo = (_b.sent()).BsSinaWeibo;
                    return [2 /*return*/, BsSinaWeibo];
                case 783: return [4 /*yield*/, import("react-icons/bs")];
                case 784:
                    BsSkipBackwardBtnFill = (_b.sent()).BsSkipBackwardBtnFill;
                    return [2 /*return*/, BsSkipBackwardBtnFill];
                case 785: return [4 /*yield*/, import("react-icons/bs")];
                case 786:
                    BsSkipBackwardBtn = (_b.sent()).BsSkipBackwardBtn;
                    return [2 /*return*/, BsSkipBackwardBtn];
                case 787: return [4 /*yield*/, import("react-icons/bs")];
                case 788:
                    BsSkipBackwardCircleFill = (_b.sent()).BsSkipBackwardCircleFill;
                    return [2 /*return*/, BsSkipBackwardCircleFill];
                case 789: return [4 /*yield*/, import("react-icons/bs")];
                case 790:
                    BsSkipBackwardCircle = (_b.sent()).BsSkipBackwardCircle;
                    return [2 /*return*/, BsSkipBackwardCircle];
                case 791: return [4 /*yield*/, import("react-icons/bs")];
                case 792:
                    BsSkipBackwardFill = (_b.sent()).BsSkipBackwardFill;
                    return [2 /*return*/, BsSkipBackwardFill];
                case 793: return [4 /*yield*/, import("react-icons/bs")];
                case 794:
                    BsSkipBackward = (_b.sent()).BsSkipBackward;
                    return [2 /*return*/, BsSkipBackward];
                case 795: return [4 /*yield*/, import("react-icons/bs")];
                case 796:
                    BsSkipEndBtnFill = (_b.sent()).BsSkipEndBtnFill;
                    return [2 /*return*/, BsSkipEndBtnFill];
                case 797: return [4 /*yield*/, import("react-icons/bs")];
                case 798:
                    BsSkipEndBtn = (_b.sent()).BsSkipEndBtn;
                    return [2 /*return*/, BsSkipEndBtn];
                case 799: return [4 /*yield*/, import("react-icons/bs")];
                case 800:
                    BsSkipEndCircleFill = (_b.sent()).BsSkipEndCircleFill;
                    return [2 /*return*/, BsSkipEndCircleFill];
                case 801: return [4 /*yield*/, import("react-icons/bs")];
                case 802:
                    BsSkipEndCircle = (_b.sent()).BsSkipEndCircle;
                    return [2 /*return*/, BsSkipEndCircle];
                case 803: return [4 /*yield*/, import("react-icons/bs")];
                case 804:
                    BsSkipEndFill = (_b.sent()).BsSkipEndFill;
                    return [2 /*return*/, BsSkipEndFill];
                case 805: return [4 /*yield*/, import("react-icons/bs")];
                case 806:
                    BsSkipEnd = (_b.sent()).BsSkipEnd;
                    return [2 /*return*/, BsSkipEnd];
                case 807: return [4 /*yield*/, import("react-icons/bs")];
                case 808:
                    BsSkipForwardBtnFill = (_b.sent()).BsSkipForwardBtnFill;
                    return [2 /*return*/, BsSkipForwardBtnFill];
                case 809: return [4 /*yield*/, import("react-icons/bs")];
                case 810:
                    BsSkipForwardBtn = (_b.sent()).BsSkipForwardBtn;
                    return [2 /*return*/, BsSkipForwardBtn];
                case 811: return [4 /*yield*/, import("react-icons/bs")];
                case 812:
                    BsSkipForwardCircleFill = (_b.sent()).BsSkipForwardCircleFill;
                    return [2 /*return*/, BsSkipForwardCircleFill];
                case 813: return [4 /*yield*/, import("react-icons/bs")];
                case 814:
                    BsSkipForwardCircle = (_b.sent()).BsSkipForwardCircle;
                    return [2 /*return*/, BsSkipForwardCircle];
                case 815: return [4 /*yield*/, import("react-icons/bs")];
                case 816:
                    BsSkipForwardFill = (_b.sent()).BsSkipForwardFill;
                    return [2 /*return*/, BsSkipForwardFill];
                case 817: return [4 /*yield*/, import("react-icons/bs")];
                case 818:
                    BsSkipForward = (_b.sent()).BsSkipForward;
                    return [2 /*return*/, BsSkipForward];
                case 819: return [4 /*yield*/, import("react-icons/bs")];
                case 820:
                    BsSkipStartBtnFill = (_b.sent()).BsSkipStartBtnFill;
                    return [2 /*return*/, BsSkipStartBtnFill];
                case 821: return [4 /*yield*/, import("react-icons/bs")];
                case 822:
                    BsSkipStartBtn = (_b.sent()).BsSkipStartBtn;
                    return [2 /*return*/, BsSkipStartBtn];
                case 823: return [4 /*yield*/, import("react-icons/bs")];
                case 824:
                    BsSkipStartCircleFill = (_b.sent()).BsSkipStartCircleFill;
                    return [2 /*return*/, BsSkipStartCircleFill];
                case 825: return [4 /*yield*/, import("react-icons/bs")];
                case 826:
                    BsSkipStartCircle = (_b.sent()).BsSkipStartCircle;
                    return [2 /*return*/, BsSkipStartCircle];
                case 827: return [4 /*yield*/, import("react-icons/bs")];
                case 828:
                    BsSkipStartFill = (_b.sent()).BsSkipStartFill;
                    return [2 /*return*/, BsSkipStartFill];
                case 829: return [4 /*yield*/, import("react-icons/bs")];
                case 830:
                    BsSkipStart = (_b.sent()).BsSkipStart;
                    return [2 /*return*/, BsSkipStart];
                case 831: return [4 /*yield*/, import("react-icons/bs")];
                case 832:
                    BsSkype = (_b.sent()).BsSkype;
                    return [2 /*return*/, BsSkype];
                case 833: return [4 /*yield*/, import("react-icons/bs")];
                case 834:
                    BsSlack = (_b.sent()).BsSlack;
                    return [2 /*return*/, BsSlack];
                case 835: return [4 /*yield*/, import("react-icons/bs")];
                case 836:
                    BsSlashCircleFill = (_b.sent()).BsSlashCircleFill;
                    return [2 /*return*/, BsSlashCircleFill];
                case 837: return [4 /*yield*/, import("react-icons/bs")];
                case 838:
                    BsSlashCircle = (_b.sent()).BsSlashCircle;
                    return [2 /*return*/, BsSlashCircle];
                case 839: return [4 /*yield*/, import("react-icons/bs")];
                case 840:
                    BsSlashLg = (_b.sent()).BsSlashLg;
                    return [2 /*return*/, BsSlashLg];
                case 841: return [4 /*yield*/, import("react-icons/bs")];
                case 842:
                    BsSlashSquareFill = (_b.sent()).BsSlashSquareFill;
                    return [2 /*return*/, BsSlashSquareFill];
                case 843: return [4 /*yield*/, import("react-icons/bs")];
                case 844:
                    BsSlashSquare = (_b.sent()).BsSlashSquare;
                    return [2 /*return*/, BsSlashSquare];
                case 845: return [4 /*yield*/, import("react-icons/bs")];
                case 846:
                    BsSlash = (_b.sent()).BsSlash;
                    return [2 /*return*/, BsSlash];
                case 847: return [4 /*yield*/, import("react-icons/bs")];
                case 848:
                    BsSliders = (_b.sent()).BsSliders;
                    return [2 /*return*/, BsSliders];
                case 849: return [4 /*yield*/, import("react-icons/bs")];
                case 850:
                    BsSliders2Vertical = (_b.sent()).BsSliders2Vertical;
                    return [2 /*return*/, BsSliders2Vertical];
                case 851: return [4 /*yield*/, import("react-icons/bs")];
                case 852:
                    BsSliders2 = (_b.sent()).BsSliders2;
                    return [2 /*return*/, BsSliders2];
                case 853: return [4 /*yield*/, import("react-icons/bs")];
                case 854:
                    BsSmartwatch = (_b.sent()).BsSmartwatch;
                    return [2 /*return*/, BsSmartwatch];
                case 855: return [4 /*yield*/, import("react-icons/bs")];
                case 856:
                    BsSnapchat = (_b.sent()).BsSnapchat;
                    return [2 /*return*/, BsSnapchat];
                case 857: return [4 /*yield*/, import("react-icons/bs")];
                case 858:
                    BsSnow = (_b.sent()).BsSnow;
                    return [2 /*return*/, BsSnow];
                case 859: return [4 /*yield*/, import("react-icons/bs")];
                case 860:
                    BsSnow2 = (_b.sent()).BsSnow2;
                    return [2 /*return*/, BsSnow2];
                case 861: return [4 /*yield*/, import("react-icons/bs")];
                case 862:
                    BsSnow3 = (_b.sent()).BsSnow3;
                    return [2 /*return*/, BsSnow3];
                case 863: return [4 /*yield*/, import("react-icons/bs")];
                case 864:
                    BsSortAlphaDownAlt = (_b.sent()).BsSortAlphaDownAlt;
                    return [2 /*return*/, BsSortAlphaDownAlt];
                case 865: return [4 /*yield*/, import("react-icons/bs")];
                case 866:
                    BsSortAlphaDown = (_b.sent()).BsSortAlphaDown;
                    return [2 /*return*/, BsSortAlphaDown];
                case 867: return [4 /*yield*/, import("react-icons/bs")];
                case 868:
                    BsSortAlphaUpAlt = (_b.sent()).BsSortAlphaUpAlt;
                    return [2 /*return*/, BsSortAlphaUpAlt];
                case 869: return [4 /*yield*/, import("react-icons/bs")];
                case 870:
                    BsSortAlphaUp = (_b.sent()).BsSortAlphaUp;
                    return [2 /*return*/, BsSortAlphaUp];
                case 871: return [4 /*yield*/, import("react-icons/bs")];
                case 872:
                    BsSortDownAlt = (_b.sent()).BsSortDownAlt;
                    return [2 /*return*/, BsSortDownAlt];
                case 873: return [4 /*yield*/, import("react-icons/bs")];
                case 874:
                    BsSortDown = (_b.sent()).BsSortDown;
                    return [2 /*return*/, BsSortDown];
                case 875: return [4 /*yield*/, import("react-icons/bs")];
                case 876:
                    BsSortNumericDownAlt = (_b.sent()).BsSortNumericDownAlt;
                    return [2 /*return*/, BsSortNumericDownAlt];
                case 877: return [4 /*yield*/, import("react-icons/bs")];
                case 878:
                    BsSortNumericDown = (_b.sent()).BsSortNumericDown;
                    return [2 /*return*/, BsSortNumericDown];
                case 879: return [4 /*yield*/, import("react-icons/bs")];
                case 880:
                    BsSortNumericUpAlt = (_b.sent()).BsSortNumericUpAlt;
                    return [2 /*return*/, BsSortNumericUpAlt];
                case 881: return [4 /*yield*/, import("react-icons/bs")];
                case 882:
                    BsSortNumericUp = (_b.sent()).BsSortNumericUp;
                    return [2 /*return*/, BsSortNumericUp];
                case 883: return [4 /*yield*/, import("react-icons/bs")];
                case 884:
                    BsSortUpAlt = (_b.sent()).BsSortUpAlt;
                    return [2 /*return*/, BsSortUpAlt];
                case 885: return [4 /*yield*/, import("react-icons/bs")];
                case 886:
                    BsSortUp = (_b.sent()).BsSortUp;
                    return [2 /*return*/, BsSortUp];
                case 887: return [4 /*yield*/, import("react-icons/bs")];
                case 888:
                    BsSoundwave = (_b.sent()).BsSoundwave;
                    return [2 /*return*/, BsSoundwave];
                case 889: return [4 /*yield*/, import("react-icons/bs")];
                case 890:
                    BsSourceforge = (_b.sent()).BsSourceforge;
                    return [2 /*return*/, BsSourceforge];
                case 891: return [4 /*yield*/, import("react-icons/bs")];
                case 892:
                    BsSpeakerFill = (_b.sent()).BsSpeakerFill;
                    return [2 /*return*/, BsSpeakerFill];
                case 893: return [4 /*yield*/, import("react-icons/bs")];
                case 894:
                    BsSpeaker = (_b.sent()).BsSpeaker;
                    return [2 /*return*/, BsSpeaker];
                case 895: return [4 /*yield*/, import("react-icons/bs")];
                case 896:
                    BsSpeedometer = (_b.sent()).BsSpeedometer;
                    return [2 /*return*/, BsSpeedometer];
                case 897: return [4 /*yield*/, import("react-icons/bs")];
                case 898:
                    BsSpeedometer2 = (_b.sent()).BsSpeedometer2;
                    return [2 /*return*/, BsSpeedometer2];
                case 899: return [4 /*yield*/, import("react-icons/bs")];
                case 900:
                    BsSpellcheck = (_b.sent()).BsSpellcheck;
                    return [2 /*return*/, BsSpellcheck];
                case 901: return [4 /*yield*/, import("react-icons/bs")];
                case 902:
                    BsSpotify = (_b.sent()).BsSpotify;
                    return [2 /*return*/, BsSpotify];
                case 903: return [4 /*yield*/, import("react-icons/bs")];
                case 904:
                    BsSquareFill = (_b.sent()).BsSquareFill;
                    return [2 /*return*/, BsSquareFill];
                case 905: return [4 /*yield*/, import("react-icons/bs")];
                case 906:
                    BsSquareHalf = (_b.sent()).BsSquareHalf;
                    return [2 /*return*/, BsSquareHalf];
                case 907: return [4 /*yield*/, import("react-icons/bs")];
                case 908:
                    BsSquare = (_b.sent()).BsSquare;
                    return [2 /*return*/, BsSquare];
                case 909: return [4 /*yield*/, import("react-icons/bs")];
                case 910:
                    BsStackOverflow = (_b.sent()).BsStackOverflow;
                    return [2 /*return*/, BsStackOverflow];
                case 911: return [4 /*yield*/, import("react-icons/bs")];
                case 912:
                    BsStack = (_b.sent()).BsStack;
                    return [2 /*return*/, BsStack];
                case 913: return [4 /*yield*/, import("react-icons/bs")];
                case 914:
                    BsStarFill = (_b.sent()).BsStarFill;
                    return [2 /*return*/, BsStarFill];
                case 915: return [4 /*yield*/, import("react-icons/bs")];
                case 916:
                    BsStarHalf = (_b.sent()).BsStarHalf;
                    return [2 /*return*/, BsStarHalf];
                case 917: return [4 /*yield*/, import("react-icons/bs")];
                case 918:
                    BsStar = (_b.sent()).BsStar;
                    return [2 /*return*/, BsStar];
                case 919: return [4 /*yield*/, import("react-icons/bs")];
                case 920:
                    BsStars = (_b.sent()).BsStars;
                    return [2 /*return*/, BsStars];
                case 921: return [4 /*yield*/, import("react-icons/bs")];
                case 922:
                    BsSteam = (_b.sent()).BsSteam;
                    return [2 /*return*/, BsSteam];
                case 923: return [4 /*yield*/, import("react-icons/bs")];
                case 924:
                    BsStickiesFill = (_b.sent()).BsStickiesFill;
                    return [2 /*return*/, BsStickiesFill];
                case 925: return [4 /*yield*/, import("react-icons/bs")];
                case 926:
                    BsStickies = (_b.sent()).BsStickies;
                    return [2 /*return*/, BsStickies];
                case 927: return [4 /*yield*/, import("react-icons/bs")];
                case 928:
                    BsStickyFill = (_b.sent()).BsStickyFill;
                    return [2 /*return*/, BsStickyFill];
                case 929: return [4 /*yield*/, import("react-icons/bs")];
                case 930:
                    BsSticky = (_b.sent()).BsSticky;
                    return [2 /*return*/, BsSticky];
                case 931: return [4 /*yield*/, import("react-icons/bs")];
                case 932:
                    BsStopBtnFill = (_b.sent()).BsStopBtnFill;
                    return [2 /*return*/, BsStopBtnFill];
                case 933: return [4 /*yield*/, import("react-icons/bs")];
                case 934:
                    BsStopBtn = (_b.sent()).BsStopBtn;
                    return [2 /*return*/, BsStopBtn];
                case 935: return [4 /*yield*/, import("react-icons/bs")];
                case 936:
                    BsStopCircleFill = (_b.sent()).BsStopCircleFill;
                    return [2 /*return*/, BsStopCircleFill];
                case 937: return [4 /*yield*/, import("react-icons/bs")];
                case 938:
                    BsStopCircle = (_b.sent()).BsStopCircle;
                    return [2 /*return*/, BsStopCircle];
                case 939: return [4 /*yield*/, import("react-icons/bs")];
                case 940:
                    BsStopFill = (_b.sent()).BsStopFill;
                    return [2 /*return*/, BsStopFill];
                case 941: return [4 /*yield*/, import("react-icons/bs")];
                case 942:
                    BsStop = (_b.sent()).BsStop;
                    return [2 /*return*/, BsStop];
                case 943: return [4 /*yield*/, import("react-icons/bs")];
                case 944:
                    BsStoplightsFill = (_b.sent()).BsStoplightsFill;
                    return [2 /*return*/, BsStoplightsFill];
                case 945: return [4 /*yield*/, import("react-icons/bs")];
                case 946:
                    BsStoplights = (_b.sent()).BsStoplights;
                    return [2 /*return*/, BsStoplights];
                case 947: return [4 /*yield*/, import("react-icons/bs")];
                case 948:
                    BsStopwatchFill = (_b.sent()).BsStopwatchFill;
                    return [2 /*return*/, BsStopwatchFill];
                case 949: return [4 /*yield*/, import("react-icons/bs")];
                case 950:
                    BsStopwatch = (_b.sent()).BsStopwatch;
                    return [2 /*return*/, BsStopwatch];
                case 951: return [4 /*yield*/, import("react-icons/bs")];
                case 952:
                    BsStrava = (_b.sent()).BsStrava;
                    return [2 /*return*/, BsStrava];
                case 953: return [4 /*yield*/, import("react-icons/bs")];
                case 954:
                    BsStripe = (_b.sent()).BsStripe;
                    return [2 /*return*/, BsStripe];
                case 955: return [4 /*yield*/, import("react-icons/bs")];
                case 956:
                    BsSubscript = (_b.sent()).BsSubscript;
                    return [2 /*return*/, BsSubscript];
                case 957: return [4 /*yield*/, import("react-icons/bs")];
                case 958:
                    BsSubstack = (_b.sent()).BsSubstack;
                    return [2 /*return*/, BsSubstack];
                case 959: return [4 /*yield*/, import("react-icons/bs")];
                case 960:
                    BsSubtract = (_b.sent()).BsSubtract;
                    return [2 /*return*/, BsSubtract];
                case 961: return [4 /*yield*/, import("react-icons/bs")];
                case 962:
                    BsSuitClubFill = (_b.sent()).BsSuitClubFill;
                    return [2 /*return*/, BsSuitClubFill];
                case 963: return [4 /*yield*/, import("react-icons/bs")];
                case 964:
                    BsSuitClub = (_b.sent()).BsSuitClub;
                    return [2 /*return*/, BsSuitClub];
                case 965: return [4 /*yield*/, import("react-icons/bs")];
                case 966:
                    BsSuitDiamondFill = (_b.sent()).BsSuitDiamondFill;
                    return [2 /*return*/, BsSuitDiamondFill];
                case 967: return [4 /*yield*/, import("react-icons/bs")];
                case 968:
                    BsSuitDiamond = (_b.sent()).BsSuitDiamond;
                    return [2 /*return*/, BsSuitDiamond];
                case 969: return [4 /*yield*/, import("react-icons/bs")];
                case 970:
                    BsSuitHeartFill = (_b.sent()).BsSuitHeartFill;
                    return [2 /*return*/, BsSuitHeartFill];
                case 971: return [4 /*yield*/, import("react-icons/bs")];
                case 972:
                    BsSuitHeart = (_b.sent()).BsSuitHeart;
                    return [2 /*return*/, BsSuitHeart];
                case 973: return [4 /*yield*/, import("react-icons/bs")];
                case 974:
                    BsSuitSpadeFill = (_b.sent()).BsSuitSpadeFill;
                    return [2 /*return*/, BsSuitSpadeFill];
                case 975: return [4 /*yield*/, import("react-icons/bs")];
                case 976:
                    BsSuitSpade = (_b.sent()).BsSuitSpade;
                    return [2 /*return*/, BsSuitSpade];
                case 977: return [4 /*yield*/, import("react-icons/bs")];
                case 978:
                    BsSuitcaseFill = (_b.sent()).BsSuitcaseFill;
                    return [2 /*return*/, BsSuitcaseFill];
                case 979: return [4 /*yield*/, import("react-icons/bs")];
                case 980:
                    BsSuitcaseLgFill = (_b.sent()).BsSuitcaseLgFill;
                    return [2 /*return*/, BsSuitcaseLgFill];
                case 981: return [4 /*yield*/, import("react-icons/bs")];
                case 982:
                    BsSuitcaseLg = (_b.sent()).BsSuitcaseLg;
                    return [2 /*return*/, BsSuitcaseLg];
                case 983: return [4 /*yield*/, import("react-icons/bs")];
                case 984:
                    BsSuitcase = (_b.sent()).BsSuitcase;
                    return [2 /*return*/, BsSuitcase];
                case 985: return [4 /*yield*/, import("react-icons/bs")];
                case 986:
                    BsSuitcase2Fill = (_b.sent()).BsSuitcase2Fill;
                    return [2 /*return*/, BsSuitcase2Fill];
                case 987: return [4 /*yield*/, import("react-icons/bs")];
                case 988:
                    BsSuitcase2 = (_b.sent()).BsSuitcase2;
                    return [2 /*return*/, BsSuitcase2];
                case 989: return [4 /*yield*/, import("react-icons/bs")];
                case 990:
                    BsSunFill = (_b.sent()).BsSunFill;
                    return [2 /*return*/, BsSunFill];
                case 991: return [4 /*yield*/, import("react-icons/bs")];
                case 992:
                    BsSun = (_b.sent()).BsSun;
                    return [2 /*return*/, BsSun];
                case 993: return [4 /*yield*/, import("react-icons/bs")];
                case 994:
                    BsSunglasses = (_b.sent()).BsSunglasses;
                    return [2 /*return*/, BsSunglasses];
                case 995: return [4 /*yield*/, import("react-icons/bs")];
                case 996:
                    BsSunriseFill = (_b.sent()).BsSunriseFill;
                    return [2 /*return*/, BsSunriseFill];
                case 997: return [4 /*yield*/, import("react-icons/bs")];
                case 998:
                    BsSunrise = (_b.sent()).BsSunrise;
                    return [2 /*return*/, BsSunrise];
                case 999: return [4 /*yield*/, import("react-icons/bs")];
                case 1000:
                    BsSunsetFill = (_b.sent()).BsSunsetFill;
                    return [2 /*return*/, BsSunsetFill];
                case 1001: return [4 /*yield*/, import("react-icons/bs")];
                case 1002:
                    BsSunset = (_b.sent()).BsSunset;
                    return [2 /*return*/, BsSunset];
                case 1003: return [4 /*yield*/, import("react-icons/bs")];
                case 1004:
                    BsSuperscript = (_b.sent()).BsSuperscript;
                    return [2 /*return*/, BsSuperscript];
                case 1005: return [4 /*yield*/, import("react-icons/bs")];
                case 1006:
                    BsSymmetryHorizontal = (_b.sent()).BsSymmetryHorizontal;
                    return [2 /*return*/, BsSymmetryHorizontal];
                case 1007: return [4 /*yield*/, import("react-icons/bs")];
                case 1008:
                    BsSymmetryVertical = (_b.sent()).BsSymmetryVertical;
                    return [2 /*return*/, BsSymmetryVertical];
                case 1009: return [4 /*yield*/, import("react-icons/bs")];
                case 1010:
                    BsTable = (_b.sent()).BsTable;
                    return [2 /*return*/, BsTable];
                case 1011: return [4 /*yield*/, import("react-icons/bs")];
                case 1012:
                    BsTabletFill = (_b.sent()).BsTabletFill;
                    return [2 /*return*/, BsTabletFill];
                case 1013: return [4 /*yield*/, import("react-icons/bs")];
                case 1014:
                    BsTabletLandscapeFill = (_b.sent()).BsTabletLandscapeFill;
                    return [2 /*return*/, BsTabletLandscapeFill];
                case 1015: return [4 /*yield*/, import("react-icons/bs")];
                case 1016:
                    BsTabletLandscape = (_b.sent()).BsTabletLandscape;
                    return [2 /*return*/, BsTabletLandscape];
                case 1017: return [4 /*yield*/, import("react-icons/bs")];
                case 1018:
                    BsTablet = (_b.sent()).BsTablet;
                    return [2 /*return*/, BsTablet];
                case 1019: return [4 /*yield*/, import("react-icons/bs")];
                case 1020:
                    BsTagFill = (_b.sent()).BsTagFill;
                    return [2 /*return*/, BsTagFill];
                case 1021: return [4 /*yield*/, import("react-icons/bs")];
                case 1022:
                    BsTag = (_b.sent()).BsTag;
                    return [2 /*return*/, BsTag];
                case 1023: return [4 /*yield*/, import("react-icons/bs")];
                case 1024:
                    BsTagsFill = (_b.sent()).BsTagsFill;
                    return [2 /*return*/, BsTagsFill];
                case 1025: return [4 /*yield*/, import("react-icons/bs")];
                case 1026:
                    BsTags = (_b.sent()).BsTags;
                    return [2 /*return*/, BsTags];
                case 1027: return [4 /*yield*/, import("react-icons/bs")];
                case 1028:
                    BsTaxiFrontFill = (_b.sent()).BsTaxiFrontFill;
                    return [2 /*return*/, BsTaxiFrontFill];
                case 1029: return [4 /*yield*/, import("react-icons/bs")];
                case 1030:
                    BsTaxiFront = (_b.sent()).BsTaxiFront;
                    return [2 /*return*/, BsTaxiFront];
                case 1031: return [4 /*yield*/, import("react-icons/bs")];
                case 1032:
                    BsTelegram = (_b.sent()).BsTelegram;
                    return [2 /*return*/, BsTelegram];
                case 1033: return [4 /*yield*/, import("react-icons/bs")];
                case 1034:
                    BsTelephoneFill = (_b.sent()).BsTelephoneFill;
                    return [2 /*return*/, BsTelephoneFill];
                case 1035: return [4 /*yield*/, import("react-icons/bs")];
                case 1036:
                    BsTelephoneForwardFill = (_b.sent()).BsTelephoneForwardFill;
                    return [2 /*return*/, BsTelephoneForwardFill];
                case 1037: return [4 /*yield*/, import("react-icons/bs")];
                case 1038:
                    BsTelephoneForward = (_b.sent()).BsTelephoneForward;
                    return [2 /*return*/, BsTelephoneForward];
                case 1039: return [4 /*yield*/, import("react-icons/bs")];
                case 1040:
                    BsTelephoneInboundFill = (_b.sent()).BsTelephoneInboundFill;
                    return [2 /*return*/, BsTelephoneInboundFill];
                case 1041: return [4 /*yield*/, import("react-icons/bs")];
                case 1042:
                    BsTelephoneInbound = (_b.sent()).BsTelephoneInbound;
                    return [2 /*return*/, BsTelephoneInbound];
                case 1043: return [4 /*yield*/, import("react-icons/bs")];
                case 1044:
                    BsTelephoneMinusFill = (_b.sent()).BsTelephoneMinusFill;
                    return [2 /*return*/, BsTelephoneMinusFill];
                case 1045: return [4 /*yield*/, import("react-icons/bs")];
                case 1046:
                    BsTelephoneMinus = (_b.sent()).BsTelephoneMinus;
                    return [2 /*return*/, BsTelephoneMinus];
                case 1047: return [4 /*yield*/, import("react-icons/bs")];
                case 1048:
                    BsTelephoneOutboundFill = (_b.sent()).BsTelephoneOutboundFill;
                    return [2 /*return*/, BsTelephoneOutboundFill];
                case 1049: return [4 /*yield*/, import("react-icons/bs")];
                case 1050:
                    BsTelephoneOutbound = (_b.sent()).BsTelephoneOutbound;
                    return [2 /*return*/, BsTelephoneOutbound];
                case 1051: return [4 /*yield*/, import("react-icons/bs")];
                case 1052:
                    BsTelephonePlusFill = (_b.sent()).BsTelephonePlusFill;
                    return [2 /*return*/, BsTelephonePlusFill];
                case 1053: return [4 /*yield*/, import("react-icons/bs")];
                case 1054:
                    BsTelephonePlus = (_b.sent()).BsTelephonePlus;
                    return [2 /*return*/, BsTelephonePlus];
                case 1055: return [4 /*yield*/, import("react-icons/bs")];
                case 1056:
                    BsTelephoneXFill = (_b.sent()).BsTelephoneXFill;
                    return [2 /*return*/, BsTelephoneXFill];
                case 1057: return [4 /*yield*/, import("react-icons/bs")];
                case 1058:
                    BsTelephoneX = (_b.sent()).BsTelephoneX;
                    return [2 /*return*/, BsTelephoneX];
                case 1059: return [4 /*yield*/, import("react-icons/bs")];
                case 1060:
                    BsTelephone = (_b.sent()).BsTelephone;
                    return [2 /*return*/, BsTelephone];
                case 1061: return [4 /*yield*/, import("react-icons/bs")];
                case 1062:
                    BsTencentQq = (_b.sent()).BsTencentQq;
                    return [2 /*return*/, BsTencentQq];
                case 1063: return [4 /*yield*/, import("react-icons/bs")];
                case 1064:
                    BsTerminalDash = (_b.sent()).BsTerminalDash;
                    return [2 /*return*/, BsTerminalDash];
                case 1065: return [4 /*yield*/, import("react-icons/bs")];
                case 1066:
                    BsTerminalFill = (_b.sent()).BsTerminalFill;
                    return [2 /*return*/, BsTerminalFill];
                case 1067: return [4 /*yield*/, import("react-icons/bs")];
                case 1068:
                    BsTerminalPlus = (_b.sent()).BsTerminalPlus;
                    return [2 /*return*/, BsTerminalPlus];
                case 1069: return [4 /*yield*/, import("react-icons/bs")];
                case 1070:
                    BsTerminalSplit = (_b.sent()).BsTerminalSplit;
                    return [2 /*return*/, BsTerminalSplit];
                case 1071: return [4 /*yield*/, import("react-icons/bs")];
                case 1072:
                    BsTerminalX = (_b.sent()).BsTerminalX;
                    return [2 /*return*/, BsTerminalX];
                case 1073: return [4 /*yield*/, import("react-icons/bs")];
                case 1074:
                    BsTerminal = (_b.sent()).BsTerminal;
                    return [2 /*return*/, BsTerminal];
                case 1075: return [4 /*yield*/, import("react-icons/bs")];
                case 1076:
                    BsTextCenter = (_b.sent()).BsTextCenter;
                    return [2 /*return*/, BsTextCenter];
                case 1077: return [4 /*yield*/, import("react-icons/bs")];
                case 1078:
                    BsTextIndentLeft = (_b.sent()).BsTextIndentLeft;
                    return [2 /*return*/, BsTextIndentLeft];
                case 1079: return [4 /*yield*/, import("react-icons/bs")];
                case 1080:
                    BsTextIndentRight = (_b.sent()).BsTextIndentRight;
                    return [2 /*return*/, BsTextIndentRight];
                case 1081: return [4 /*yield*/, import("react-icons/bs")];
                case 1082:
                    BsTextLeft = (_b.sent()).BsTextLeft;
                    return [2 /*return*/, BsTextLeft];
                case 1083: return [4 /*yield*/, import("react-icons/bs")];
                case 1084:
                    BsTextParagraph = (_b.sent()).BsTextParagraph;
                    return [2 /*return*/, BsTextParagraph];
                case 1085: return [4 /*yield*/, import("react-icons/bs")];
                case 1086:
                    BsTextRight = (_b.sent()).BsTextRight;
                    return [2 /*return*/, BsTextRight];
                case 1087: return [4 /*yield*/, import("react-icons/bs")];
                case 1088:
                    BsTextWrap = (_b.sent()).BsTextWrap;
                    return [2 /*return*/, BsTextWrap];
                case 1089: return [4 /*yield*/, import("react-icons/bs")];
                case 1090:
                    BsTextareaResize = (_b.sent()).BsTextareaResize;
                    return [2 /*return*/, BsTextareaResize];
                case 1091: return [4 /*yield*/, import("react-icons/bs")];
                case 1092:
                    BsTextareaT = (_b.sent()).BsTextareaT;
                    return [2 /*return*/, BsTextareaT];
                case 1093: return [4 /*yield*/, import("react-icons/bs")];
                case 1094:
                    BsTextarea = (_b.sent()).BsTextarea;
                    return [2 /*return*/, BsTextarea];
                case 1095: return [4 /*yield*/, import("react-icons/bs")];
                case 1096:
                    BsThermometerHalf = (_b.sent()).BsThermometerHalf;
                    return [2 /*return*/, BsThermometerHalf];
                case 1097: return [4 /*yield*/, import("react-icons/bs")];
                case 1098:
                    BsThermometerHigh = (_b.sent()).BsThermometerHigh;
                    return [2 /*return*/, BsThermometerHigh];
                case 1099: return [4 /*yield*/, import("react-icons/bs")];
                case 1100:
                    BsThermometerLow = (_b.sent()).BsThermometerLow;
                    return [2 /*return*/, BsThermometerLow];
                case 1101: return [4 /*yield*/, import("react-icons/bs")];
                case 1102:
                    BsThermometerSnow = (_b.sent()).BsThermometerSnow;
                    return [2 /*return*/, BsThermometerSnow];
                case 1103: return [4 /*yield*/, import("react-icons/bs")];
                case 1104:
                    BsThermometerSun = (_b.sent()).BsThermometerSun;
                    return [2 /*return*/, BsThermometerSun];
                case 1105: return [4 /*yield*/, import("react-icons/bs")];
                case 1106:
                    BsThermometer = (_b.sent()).BsThermometer;
                    return [2 /*return*/, BsThermometer];
                case 1107: return [4 /*yield*/, import("react-icons/bs")];
                case 1108:
                    BsThreadsFill = (_b.sent()).BsThreadsFill;
                    return [2 /*return*/, BsThreadsFill];
                case 1109: return [4 /*yield*/, import("react-icons/bs")];
                case 1110:
                    BsThreads = (_b.sent()).BsThreads;
                    return [2 /*return*/, BsThreads];
                case 1111: return [4 /*yield*/, import("react-icons/bs")];
                case 1112:
                    BsThreeDotsVertical = (_b.sent()).BsThreeDotsVertical;
                    return [2 /*return*/, BsThreeDotsVertical];
                case 1113: return [4 /*yield*/, import("react-icons/bs")];
                case 1114:
                    BsThreeDots = (_b.sent()).BsThreeDots;
                    return [2 /*return*/, BsThreeDots];
                case 1115: return [4 /*yield*/, import("react-icons/bs")];
                case 1116:
                    BsThunderboltFill = (_b.sent()).BsThunderboltFill;
                    return [2 /*return*/, BsThunderboltFill];
                case 1117: return [4 /*yield*/, import("react-icons/bs")];
                case 1118:
                    BsThunderbolt = (_b.sent()).BsThunderbolt;
                    return [2 /*return*/, BsThunderbolt];
                case 1119: return [4 /*yield*/, import("react-icons/bs")];
                case 1120:
                    BsTicketDetailedFill = (_b.sent()).BsTicketDetailedFill;
                    return [2 /*return*/, BsTicketDetailedFill];
                case 1121: return [4 /*yield*/, import("react-icons/bs")];
                case 1122:
                    BsTicketDetailed = (_b.sent()).BsTicketDetailed;
                    return [2 /*return*/, BsTicketDetailed];
                case 1123: return [4 /*yield*/, import("react-icons/bs")];
                case 1124:
                    BsTicketFill = (_b.sent()).BsTicketFill;
                    return [2 /*return*/, BsTicketFill];
                case 1125: return [4 /*yield*/, import("react-icons/bs")];
                case 1126:
                    BsTicketPerforatedFill = (_b.sent()).BsTicketPerforatedFill;
                    return [2 /*return*/, BsTicketPerforatedFill];
                case 1127: return [4 /*yield*/, import("react-icons/bs")];
                case 1128:
                    BsTicketPerforated = (_b.sent()).BsTicketPerforated;
                    return [2 /*return*/, BsTicketPerforated];
                case 1129: return [4 /*yield*/, import("react-icons/bs")];
                case 1130:
                    BsTicket = (_b.sent()).BsTicket;
                    return [2 /*return*/, BsTicket];
                case 1131: return [4 /*yield*/, import("react-icons/bs")];
                case 1132:
                    BsTiktok = (_b.sent()).BsTiktok;
                    return [2 /*return*/, BsTiktok];
                case 1133: return [4 /*yield*/, import("react-icons/bs")];
                case 1134:
                    BsToggleOff = (_b.sent()).BsToggleOff;
                    return [2 /*return*/, BsToggleOff];
                case 1135: return [4 /*yield*/, import("react-icons/bs")];
                case 1136:
                    BsToggleOn = (_b.sent()).BsToggleOn;
                    return [2 /*return*/, BsToggleOn];
                case 1137: return [4 /*yield*/, import("react-icons/bs")];
                case 1138:
                    BsToggle2Off = (_b.sent()).BsToggle2Off;
                    return [2 /*return*/, BsToggle2Off];
                case 1139: return [4 /*yield*/, import("react-icons/bs")];
                case 1140:
                    BsToggle2On = (_b.sent()).BsToggle2On;
                    return [2 /*return*/, BsToggle2On];
                case 1141: return [4 /*yield*/, import("react-icons/bs")];
                case 1142:
                    BsToggles = (_b.sent()).BsToggles;
                    return [2 /*return*/, BsToggles];
                case 1143: return [4 /*yield*/, import("react-icons/bs")];
                case 1144:
                    BsToggles2 = (_b.sent()).BsToggles2;
                    return [2 /*return*/, BsToggles2];
                case 1145: return [4 /*yield*/, import("react-icons/bs")];
                case 1146:
                    BsTools = (_b.sent()).BsTools;
                    return [2 /*return*/, BsTools];
                case 1147: return [4 /*yield*/, import("react-icons/bs")];
                case 1148:
                    BsTornado = (_b.sent()).BsTornado;
                    return [2 /*return*/, BsTornado];
                case 1149: return [4 /*yield*/, import("react-icons/bs")];
                case 1150:
                    BsTrainFreightFrontFill = (_b.sent()).BsTrainFreightFrontFill;
                    return [2 /*return*/, BsTrainFreightFrontFill];
                case 1151: return [4 /*yield*/, import("react-icons/bs")];
                case 1152:
                    BsTrainFreightFront = (_b.sent()).BsTrainFreightFront;
                    return [2 /*return*/, BsTrainFreightFront];
                case 1153: return [4 /*yield*/, import("react-icons/bs")];
                case 1154:
                    BsTrainFrontFill = (_b.sent()).BsTrainFrontFill;
                    return [2 /*return*/, BsTrainFrontFill];
                case 1155: return [4 /*yield*/, import("react-icons/bs")];
                case 1156:
                    BsTrainFront = (_b.sent()).BsTrainFront;
                    return [2 /*return*/, BsTrainFront];
                case 1157: return [4 /*yield*/, import("react-icons/bs")];
                case 1158:
                    BsTrainLightrailFrontFill = (_b.sent()).BsTrainLightrailFrontFill;
                    return [2 /*return*/, BsTrainLightrailFrontFill];
                case 1159: return [4 /*yield*/, import("react-icons/bs")];
                case 1160:
                    BsTrainLightrailFront = (_b.sent()).BsTrainLightrailFront;
                    return [2 /*return*/, BsTrainLightrailFront];
                case 1161: return [4 /*yield*/, import("react-icons/bs")];
                case 1162:
                    BsTranslate = (_b.sent()).BsTranslate;
                    return [2 /*return*/, BsTranslate];
                case 1163: return [4 /*yield*/, import("react-icons/bs")];
                case 1164:
                    BsTransparency = (_b.sent()).BsTransparency;
                    return [2 /*return*/, BsTransparency];
                case 1165: return [4 /*yield*/, import("react-icons/bs")];
                case 1166:
                    BsTrashFill = (_b.sent()).BsTrashFill;
                    return [2 /*return*/, BsTrashFill];
                case 1167: return [4 /*yield*/, import("react-icons/bs")];
                case 1168:
                    BsTrash = (_b.sent()).BsTrash;
                    return [2 /*return*/, BsTrash];
                case 1169: return [4 /*yield*/, import("react-icons/bs")];
                case 1170:
                    BsTrash2Fill = (_b.sent()).BsTrash2Fill;
                    return [2 /*return*/, BsTrash2Fill];
                case 1171: return [4 /*yield*/, import("react-icons/bs")];
                case 1172:
                    BsTrash2 = (_b.sent()).BsTrash2;
                    return [2 /*return*/, BsTrash2];
                case 1173: return [4 /*yield*/, import("react-icons/bs")];
                case 1174:
                    BsTrash3Fill = (_b.sent()).BsTrash3Fill;
                    return [2 /*return*/, BsTrash3Fill];
                case 1175: return [4 /*yield*/, import("react-icons/bs")];
                case 1176:
                    BsTrash3 = (_b.sent()).BsTrash3;
                    return [2 /*return*/, BsTrash3];
                case 1177: return [4 /*yield*/, import("react-icons/bs")];
                case 1178:
                    BsTreeFill = (_b.sent()).BsTreeFill;
                    return [2 /*return*/, BsTreeFill];
                case 1179: return [4 /*yield*/, import("react-icons/bs")];
                case 1180:
                    BsTree = (_b.sent()).BsTree;
                    return [2 /*return*/, BsTree];
                case 1181: return [4 /*yield*/, import("react-icons/bs")];
                case 1182:
                    BsTrello = (_b.sent()).BsTrello;
                    return [2 /*return*/, BsTrello];
                case 1183: return [4 /*yield*/, import("react-icons/bs")];
                case 1184:
                    BsTriangleFill = (_b.sent()).BsTriangleFill;
                    return [2 /*return*/, BsTriangleFill];
                case 1185: return [4 /*yield*/, import("react-icons/bs")];
                case 1186:
                    BsTriangleHalf = (_b.sent()).BsTriangleHalf;
                    return [2 /*return*/, BsTriangleHalf];
                case 1187: return [4 /*yield*/, import("react-icons/bs")];
                case 1188:
                    BsTriangle = (_b.sent()).BsTriangle;
                    return [2 /*return*/, BsTriangle];
                case 1189: return [4 /*yield*/, import("react-icons/bs")];
                case 1190:
                    BsTrophyFill = (_b.sent()).BsTrophyFill;
                    return [2 /*return*/, BsTrophyFill];
                case 1191: return [4 /*yield*/, import("react-icons/bs")];
                case 1192:
                    BsTrophy = (_b.sent()).BsTrophy;
                    return [2 /*return*/, BsTrophy];
                case 1193: return [4 /*yield*/, import("react-icons/bs")];
                case 1194:
                    BsTropicalStorm = (_b.sent()).BsTropicalStorm;
                    return [2 /*return*/, BsTropicalStorm];
                case 1195: return [4 /*yield*/, import("react-icons/bs")];
                case 1196:
                    BsTruckFlatbed = (_b.sent()).BsTruckFlatbed;
                    return [2 /*return*/, BsTruckFlatbed];
                case 1197: return [4 /*yield*/, import("react-icons/bs")];
                case 1198:
                    BsTruckFrontFill = (_b.sent()).BsTruckFrontFill;
                    return [2 /*return*/, BsTruckFrontFill];
                case 1199: return [4 /*yield*/, import("react-icons/bs")];
                case 1200:
                    BsTruckFront = (_b.sent()).BsTruckFront;
                    return [2 /*return*/, BsTruckFront];
                case 1201: return [4 /*yield*/, import("react-icons/bs")];
                case 1202:
                    BsTruck = (_b.sent()).BsTruck;
                    return [2 /*return*/, BsTruck];
                case 1203: return [4 /*yield*/, import("react-icons/bs")];
                case 1204:
                    BsTsunami = (_b.sent()).BsTsunami;
                    return [2 /*return*/, BsTsunami];
                case 1205: return [4 /*yield*/, import("react-icons/bs")];
                case 1206:
                    BsTvFill = (_b.sent()).BsTvFill;
                    return [2 /*return*/, BsTvFill];
                case 1207: return [4 /*yield*/, import("react-icons/bs")];
                case 1208:
                    BsTv = (_b.sent()).BsTv;
                    return [2 /*return*/, BsTv];
                case 1209: return [4 /*yield*/, import("react-icons/bs")];
                case 1210:
                    BsTwitch = (_b.sent()).BsTwitch;
                    return [2 /*return*/, BsTwitch];
                case 1211: return [4 /*yield*/, import("react-icons/bs")];
                case 1212:
                    BsTwitterX = (_b.sent()).BsTwitterX;
                    return [2 /*return*/, BsTwitterX];
                case 1213: return [4 /*yield*/, import("react-icons/bs")];
                case 1214:
                    BsTwitter = (_b.sent()).BsTwitter;
                    return [2 /*return*/, BsTwitter];
                case 1215: return [4 /*yield*/, import("react-icons/bs")];
                case 1216:
                    BsTypeBold = (_b.sent()).BsTypeBold;
                    return [2 /*return*/, BsTypeBold];
                case 1217: return [4 /*yield*/, import("react-icons/bs")];
                case 1218:
                    BsTypeH1 = (_b.sent()).BsTypeH1;
                    return [2 /*return*/, BsTypeH1];
                case 1219: return [4 /*yield*/, import("react-icons/bs")];
                case 1220:
                    BsTypeH2 = (_b.sent()).BsTypeH2;
                    return [2 /*return*/, BsTypeH2];
                case 1221: return [4 /*yield*/, import("react-icons/bs")];
                case 1222:
                    BsTypeH3 = (_b.sent()).BsTypeH3;
                    return [2 /*return*/, BsTypeH3];
                case 1223: return [4 /*yield*/, import("react-icons/bs")];
                case 1224:
                    BsTypeH4 = (_b.sent()).BsTypeH4;
                    return [2 /*return*/, BsTypeH4];
                case 1225: return [4 /*yield*/, import("react-icons/bs")];
                case 1226:
                    BsTypeH5 = (_b.sent()).BsTypeH5;
                    return [2 /*return*/, BsTypeH5];
                case 1227: return [4 /*yield*/, import("react-icons/bs")];
                case 1228:
                    BsTypeH6 = (_b.sent()).BsTypeH6;
                    return [2 /*return*/, BsTypeH6];
                case 1229: return [4 /*yield*/, import("react-icons/bs")];
                case 1230:
                    BsTypeItalic = (_b.sent()).BsTypeItalic;
                    return [2 /*return*/, BsTypeItalic];
                case 1231: return [4 /*yield*/, import("react-icons/bs")];
                case 1232:
                    BsTypeStrikethrough = (_b.sent()).BsTypeStrikethrough;
                    return [2 /*return*/, BsTypeStrikethrough];
                case 1233: return [4 /*yield*/, import("react-icons/bs")];
                case 1234:
                    BsTypeUnderline = (_b.sent()).BsTypeUnderline;
                    return [2 /*return*/, BsTypeUnderline];
                case 1235: return [4 /*yield*/, import("react-icons/bs")];
                case 1236:
                    BsType = (_b.sent()).BsType;
                    return [2 /*return*/, BsType];
                case 1237: return [4 /*yield*/, import("react-icons/bs")];
                case 1238:
                    BsUbuntu = (_b.sent()).BsUbuntu;
                    return [2 /*return*/, BsUbuntu];
                case 1239: return [4 /*yield*/, import("react-icons/bs")];
                case 1240:
                    BsUiChecksGrid = (_b.sent()).BsUiChecksGrid;
                    return [2 /*return*/, BsUiChecksGrid];
                case 1241: return [4 /*yield*/, import("react-icons/bs")];
                case 1242:
                    BsUiChecks = (_b.sent()).BsUiChecks;
                    return [2 /*return*/, BsUiChecks];
                case 1243: return [4 /*yield*/, import("react-icons/bs")];
                case 1244:
                    BsUiRadiosGrid = (_b.sent()).BsUiRadiosGrid;
                    return [2 /*return*/, BsUiRadiosGrid];
                case 1245: return [4 /*yield*/, import("react-icons/bs")];
                case 1246:
                    BsUiRadios = (_b.sent()).BsUiRadios;
                    return [2 /*return*/, BsUiRadios];
                case 1247: return [4 /*yield*/, import("react-icons/bs")];
                case 1248:
                    BsUmbrellaFill = (_b.sent()).BsUmbrellaFill;
                    return [2 /*return*/, BsUmbrellaFill];
                case 1249: return [4 /*yield*/, import("react-icons/bs")];
                case 1250:
                    BsUmbrella = (_b.sent()).BsUmbrella;
                    return [2 /*return*/, BsUmbrella];
                case 1251: return [4 /*yield*/, import("react-icons/bs")];
                case 1252:
                    BsUnindent = (_b.sent()).BsUnindent;
                    return [2 /*return*/, BsUnindent];
                case 1253: return [4 /*yield*/, import("react-icons/bs")];
                case 1254:
                    BsUnion = (_b.sent()).BsUnion;
                    return [2 /*return*/, BsUnion];
                case 1255: return [4 /*yield*/, import("react-icons/bs")];
                case 1256:
                    BsUnity = (_b.sent()).BsUnity;
                    return [2 /*return*/, BsUnity];
                case 1257: return [4 /*yield*/, import("react-icons/bs")];
                case 1258:
                    BsUniversalAccessCircle = (_b.sent()).BsUniversalAccessCircle;
                    return [2 /*return*/, BsUniversalAccessCircle];
                case 1259: return [4 /*yield*/, import("react-icons/bs")];
                case 1260:
                    BsUniversalAccess = (_b.sent()).BsUniversalAccess;
                    return [2 /*return*/, BsUniversalAccess];
                case 1261: return [4 /*yield*/, import("react-icons/bs")];
                case 1262:
                    BsUnlockFill = (_b.sent()).BsUnlockFill;
                    return [2 /*return*/, BsUnlockFill];
                case 1263: return [4 /*yield*/, import("react-icons/bs")];
                case 1264:
                    BsUnlock = (_b.sent()).BsUnlock;
                    return [2 /*return*/, BsUnlock];
                case 1265: return [4 /*yield*/, import("react-icons/bs")];
                case 1266:
                    BsUpcScan = (_b.sent()).BsUpcScan;
                    return [2 /*return*/, BsUpcScan];
                case 1267: return [4 /*yield*/, import("react-icons/bs")];
                case 1268:
                    BsUpc = (_b.sent()).BsUpc;
                    return [2 /*return*/, BsUpc];
                case 1269: return [4 /*yield*/, import("react-icons/bs")];
                case 1270:
                    BsUpload = (_b.sent()).BsUpload;
                    return [2 /*return*/, BsUpload];
                case 1271: return [4 /*yield*/, import("react-icons/bs")];
                case 1272:
                    BsUsbCFill = (_b.sent()).BsUsbCFill;
                    return [2 /*return*/, BsUsbCFill];
                case 1273: return [4 /*yield*/, import("react-icons/bs")];
                case 1274:
                    BsUsbC = (_b.sent()).BsUsbC;
                    return [2 /*return*/, BsUsbC];
                case 1275: return [4 /*yield*/, import("react-icons/bs")];
                case 1276:
                    BsUsbDriveFill = (_b.sent()).BsUsbDriveFill;
                    return [2 /*return*/, BsUsbDriveFill];
                case 1277: return [4 /*yield*/, import("react-icons/bs")];
                case 1278:
                    BsUsbDrive = (_b.sent()).BsUsbDrive;
                    return [2 /*return*/, BsUsbDrive];
                case 1279: return [4 /*yield*/, import("react-icons/bs")];
                case 1280:
                    BsUsbFill = (_b.sent()).BsUsbFill;
                    return [2 /*return*/, BsUsbFill];
                case 1281: return [4 /*yield*/, import("react-icons/bs")];
                case 1282:
                    BsUsbMicroFill = (_b.sent()).BsUsbMicroFill;
                    return [2 /*return*/, BsUsbMicroFill];
                case 1283: return [4 /*yield*/, import("react-icons/bs")];
                case 1284:
                    BsUsbMicro = (_b.sent()).BsUsbMicro;
                    return [2 /*return*/, BsUsbMicro];
                case 1285: return [4 /*yield*/, import("react-icons/bs")];
                case 1286:
                    BsUsbMiniFill = (_b.sent()).BsUsbMiniFill;
                    return [2 /*return*/, BsUsbMiniFill];
                case 1287: return [4 /*yield*/, import("react-icons/bs")];
                case 1288:
                    BsUsbMini = (_b.sent()).BsUsbMini;
                    return [2 /*return*/, BsUsbMini];
                case 1289: return [4 /*yield*/, import("react-icons/bs")];
                case 1290:
                    BsUsbPlugFill = (_b.sent()).BsUsbPlugFill;
                    return [2 /*return*/, BsUsbPlugFill];
                case 1291: return [4 /*yield*/, import("react-icons/bs")];
                case 1292:
                    BsUsbPlug = (_b.sent()).BsUsbPlug;
                    return [2 /*return*/, BsUsbPlug];
                case 1293: return [4 /*yield*/, import("react-icons/bs")];
                case 1294:
                    BsUsbSymbol = (_b.sent()).BsUsbSymbol;
                    return [2 /*return*/, BsUsbSymbol];
                case 1295: return [4 /*yield*/, import("react-icons/bs")];
                case 1296:
                    BsUsb = (_b.sent()).BsUsb;
                    return [2 /*return*/, BsUsb];
                case 1297: return [4 /*yield*/, import("react-icons/bs")];
                case 1298:
                    BsValentine = (_b.sent()).BsValentine;
                    return [2 /*return*/, BsValentine];
                case 1299: return [4 /*yield*/, import("react-icons/bs")];
                case 1300:
                    BsValentine2 = (_b.sent()).BsValentine2;
                    return [2 /*return*/, BsValentine2];
                case 1301: return [4 /*yield*/, import("react-icons/bs")];
                case 1302:
                    BsVectorPen = (_b.sent()).BsVectorPen;
                    return [2 /*return*/, BsVectorPen];
                case 1303: return [4 /*yield*/, import("react-icons/bs")];
                case 1304:
                    BsViewList = (_b.sent()).BsViewList;
                    return [2 /*return*/, BsViewList];
                case 1305: return [4 /*yield*/, import("react-icons/bs")];
                case 1306:
                    BsViewStacked = (_b.sent()).BsViewStacked;
                    return [2 /*return*/, BsViewStacked];
                case 1307: return [4 /*yield*/, import("react-icons/bs")];
                case 1308:
                    BsVignette = (_b.sent()).BsVignette;
                    return [2 /*return*/, BsVignette];
                case 1309: return [4 /*yield*/, import("react-icons/bs")];
                case 1310:
                    BsVimeo = (_b.sent()).BsVimeo;
                    return [2 /*return*/, BsVimeo];
                case 1311: return [4 /*yield*/, import("react-icons/bs")];
                case 1312:
                    BsVinylFill = (_b.sent()).BsVinylFill;
                    return [2 /*return*/, BsVinylFill];
                case 1313: return [4 /*yield*/, import("react-icons/bs")];
                case 1314:
                    BsVinyl = (_b.sent()).BsVinyl;
                    return [2 /*return*/, BsVinyl];
                case 1315: return [4 /*yield*/, import("react-icons/bs")];
                case 1316:
                    BsVirus = (_b.sent()).BsVirus;
                    return [2 /*return*/, BsVirus];
                case 1317: return [4 /*yield*/, import("react-icons/bs")];
                case 1318:
                    BsVirus2 = (_b.sent()).BsVirus2;
                    return [2 /*return*/, BsVirus2];
                case 1319: return [4 /*yield*/, import("react-icons/bs")];
                case 1320:
                    BsVoicemail = (_b.sent()).BsVoicemail;
                    return [2 /*return*/, BsVoicemail];
                case 1321: return [4 /*yield*/, import("react-icons/bs")];
                case 1322:
                    BsVolumeDownFill = (_b.sent()).BsVolumeDownFill;
                    return [2 /*return*/, BsVolumeDownFill];
                case 1323: return [4 /*yield*/, import("react-icons/bs")];
                case 1324:
                    BsVolumeDown = (_b.sent()).BsVolumeDown;
                    return [2 /*return*/, BsVolumeDown];
                case 1325: return [4 /*yield*/, import("react-icons/bs")];
                case 1326:
                    BsVolumeMuteFill = (_b.sent()).BsVolumeMuteFill;
                    return [2 /*return*/, BsVolumeMuteFill];
                case 1327: return [4 /*yield*/, import("react-icons/bs")];
                case 1328:
                    BsVolumeMute = (_b.sent()).BsVolumeMute;
                    return [2 /*return*/, BsVolumeMute];
                case 1329: return [4 /*yield*/, import("react-icons/bs")];
                case 1330:
                    BsVolumeOffFill = (_b.sent()).BsVolumeOffFill;
                    return [2 /*return*/, BsVolumeOffFill];
                case 1331: return [4 /*yield*/, import("react-icons/bs")];
                case 1332:
                    BsVolumeOff = (_b.sent()).BsVolumeOff;
                    return [2 /*return*/, BsVolumeOff];
                case 1333: return [4 /*yield*/, import("react-icons/bs")];
                case 1334:
                    BsVolumeUpFill = (_b.sent()).BsVolumeUpFill;
                    return [2 /*return*/, BsVolumeUpFill];
                case 1335: return [4 /*yield*/, import("react-icons/bs")];
                case 1336:
                    BsVolumeUp = (_b.sent()).BsVolumeUp;
                    return [2 /*return*/, BsVolumeUp];
                case 1337: return [4 /*yield*/, import("react-icons/bs")];
                case 1338:
                    BsVr = (_b.sent()).BsVr;
                    return [2 /*return*/, BsVr];
                case 1339: return [4 /*yield*/, import("react-icons/bs")];
                case 1340:
                    BsWalletFill = (_b.sent()).BsWalletFill;
                    return [2 /*return*/, BsWalletFill];
                case 1341: return [4 /*yield*/, import("react-icons/bs")];
                case 1342:
                    BsWallet = (_b.sent()).BsWallet;
                    return [2 /*return*/, BsWallet];
                case 1343: return [4 /*yield*/, import("react-icons/bs")];
                case 1344:
                    BsWallet2 = (_b.sent()).BsWallet2;
                    return [2 /*return*/, BsWallet2];
                case 1345: return [4 /*yield*/, import("react-icons/bs")];
                case 1346:
                    BsWatch = (_b.sent()).BsWatch;
                    return [2 /*return*/, BsWatch];
                case 1347: return [4 /*yield*/, import("react-icons/bs")];
                case 1348:
                    BsWater = (_b.sent()).BsWater;
                    return [2 /*return*/, BsWater];
                case 1349: return [4 /*yield*/, import("react-icons/bs")];
                case 1350:
                    BsWebcamFill = (_b.sent()).BsWebcamFill;
                    return [2 /*return*/, BsWebcamFill];
                case 1351: return [4 /*yield*/, import("react-icons/bs")];
                case 1352:
                    BsWebcam = (_b.sent()).BsWebcam;
                    return [2 /*return*/, BsWebcam];
                case 1353: return [4 /*yield*/, import("react-icons/bs")];
                case 1354:
                    BsWechat = (_b.sent()).BsWechat;
                    return [2 /*return*/, BsWechat];
                case 1355: return [4 /*yield*/, import("react-icons/bs")];
                case 1356:
                    BsWhatsapp = (_b.sent()).BsWhatsapp;
                    return [2 /*return*/, BsWhatsapp];
                case 1357: return [4 /*yield*/, import("react-icons/bs")];
                case 1358:
                    BsWifi1 = (_b.sent()).BsWifi1;
                    return [2 /*return*/, BsWifi1];
                case 1359: return [4 /*yield*/, import("react-icons/bs")];
                case 1360:
                    BsWifi2 = (_b.sent()).BsWifi2;
                    return [2 /*return*/, BsWifi2];
                case 1361: return [4 /*yield*/, import("react-icons/bs")];
                case 1362:
                    BsWifiOff = (_b.sent()).BsWifiOff;
                    return [2 /*return*/, BsWifiOff];
                case 1363: return [4 /*yield*/, import("react-icons/bs")];
                case 1364:
                    BsWifi = (_b.sent()).BsWifi;
                    return [2 /*return*/, BsWifi];
                case 1365: return [4 /*yield*/, import("react-icons/bs")];
                case 1366:
                    BsWikipedia = (_b.sent()).BsWikipedia;
                    return [2 /*return*/, BsWikipedia];
                case 1367: return [4 /*yield*/, import("react-icons/bs")];
                case 1368:
                    BsWind = (_b.sent()).BsWind;
                    return [2 /*return*/, BsWind];
                case 1369: return [4 /*yield*/, import("react-icons/bs")];
                case 1370:
                    BsWindowDash = (_b.sent()).BsWindowDash;
                    return [2 /*return*/, BsWindowDash];
                case 1371: return [4 /*yield*/, import("react-icons/bs")];
                case 1372:
                    BsWindowDesktop = (_b.sent()).BsWindowDesktop;
                    return [2 /*return*/, BsWindowDesktop];
                case 1373: return [4 /*yield*/, import("react-icons/bs")];
                case 1374:
                    BsWindowDock = (_b.sent()).BsWindowDock;
                    return [2 /*return*/, BsWindowDock];
                case 1375: return [4 /*yield*/, import("react-icons/bs")];
                case 1376:
                    BsWindowFullscreen = (_b.sent()).BsWindowFullscreen;
                    return [2 /*return*/, BsWindowFullscreen];
                case 1377: return [4 /*yield*/, import("react-icons/bs")];
                case 1378:
                    BsWindowPlus = (_b.sent()).BsWindowPlus;
                    return [2 /*return*/, BsWindowPlus];
                case 1379: return [4 /*yield*/, import("react-icons/bs")];
                case 1380:
                    BsWindowSidebar = (_b.sent()).BsWindowSidebar;
                    return [2 /*return*/, BsWindowSidebar];
                case 1381: return [4 /*yield*/, import("react-icons/bs")];
                case 1382:
                    BsWindowSplit = (_b.sent()).BsWindowSplit;
                    return [2 /*return*/, BsWindowSplit];
                case 1383: return [4 /*yield*/, import("react-icons/bs")];
                case 1384:
                    BsWindowStack = (_b.sent()).BsWindowStack;
                    return [2 /*return*/, BsWindowStack];
                case 1385: return [4 /*yield*/, import("react-icons/bs")];
                case 1386:
                    BsWindowX = (_b.sent()).BsWindowX;
                    return [2 /*return*/, BsWindowX];
                case 1387: return [4 /*yield*/, import("react-icons/bs")];
                case 1388:
                    BsWindow = (_b.sent()).BsWindow;
                    return [2 /*return*/, BsWindow];
                case 1389: return [4 /*yield*/, import("react-icons/bs")];
                case 1390:
                    BsWindows = (_b.sent()).BsWindows;
                    return [2 /*return*/, BsWindows];
                case 1391: return [4 /*yield*/, import("react-icons/bs")];
                case 1392:
                    BsWordpress = (_b.sent()).BsWordpress;
                    return [2 /*return*/, BsWordpress];
                case 1393: return [4 /*yield*/, import("react-icons/bs")];
                case 1394:
                    BsWrenchAdjustableCircleFill = (_b.sent()).BsWrenchAdjustableCircleFill;
                    return [2 /*return*/, BsWrenchAdjustableCircleFill];
                case 1395: return [4 /*yield*/, import("react-icons/bs")];
                case 1396:
                    BsWrenchAdjustableCircle = (_b.sent()).BsWrenchAdjustableCircle;
                    return [2 /*return*/, BsWrenchAdjustableCircle];
                case 1397: return [4 /*yield*/, import("react-icons/bs")];
                case 1398:
                    BsWrenchAdjustable = (_b.sent()).BsWrenchAdjustable;
                    return [2 /*return*/, BsWrenchAdjustable];
                case 1399: return [4 /*yield*/, import("react-icons/bs")];
                case 1400:
                    BsWrench = (_b.sent()).BsWrench;
                    return [2 /*return*/, BsWrench];
                case 1401: return [4 /*yield*/, import("react-icons/bs")];
                case 1402:
                    BsXCircleFill = (_b.sent()).BsXCircleFill;
                    return [2 /*return*/, BsXCircleFill];
                case 1403: return [4 /*yield*/, import("react-icons/bs")];
                case 1404:
                    BsXCircle = (_b.sent()).BsXCircle;
                    return [2 /*return*/, BsXCircle];
                case 1405: return [4 /*yield*/, import("react-icons/bs")];
                case 1406:
                    BsXDiamondFill = (_b.sent()).BsXDiamondFill;
                    return [2 /*return*/, BsXDiamondFill];
                case 1407: return [4 /*yield*/, import("react-icons/bs")];
                case 1408:
                    BsXDiamond = (_b.sent()).BsXDiamond;
                    return [2 /*return*/, BsXDiamond];
                case 1409: return [4 /*yield*/, import("react-icons/bs")];
                case 1410:
                    BsXLg = (_b.sent()).BsXLg;
                    return [2 /*return*/, BsXLg];
                case 1411: return [4 /*yield*/, import("react-icons/bs")];
                case 1412:
                    BsXOctagonFill = (_b.sent()).BsXOctagonFill;
                    return [2 /*return*/, BsXOctagonFill];
                case 1413: return [4 /*yield*/, import("react-icons/bs")];
                case 1414:
                    BsXOctagon = (_b.sent()).BsXOctagon;
                    return [2 /*return*/, BsXOctagon];
                case 1415: return [4 /*yield*/, import("react-icons/bs")];
                case 1416:
                    BsXSquareFill = (_b.sent()).BsXSquareFill;
                    return [2 /*return*/, BsXSquareFill];
                case 1417: return [4 /*yield*/, import("react-icons/bs")];
                case 1418:
                    BsXSquare = (_b.sent()).BsXSquare;
                    return [2 /*return*/, BsXSquare];
                case 1419: return [4 /*yield*/, import("react-icons/bs")];
                case 1420:
                    BsX = (_b.sent()).BsX;
                    return [2 /*return*/, BsX];
                case 1421: return [4 /*yield*/, import("react-icons/bs")];
                case 1422:
                    BsXbox = (_b.sent()).BsXbox;
                    return [2 /*return*/, BsXbox];
                case 1423: return [4 /*yield*/, import("react-icons/bs")];
                case 1424:
                    BsYelp = (_b.sent()).BsYelp;
                    return [2 /*return*/, BsYelp];
                case 1425: return [4 /*yield*/, import("react-icons/bs")];
                case 1426:
                    BsYinYang = (_b.sent()).BsYinYang;
                    return [2 /*return*/, BsYinYang];
                case 1427: return [4 /*yield*/, import("react-icons/bs")];
                case 1428:
                    BsYoutube = (_b.sent()).BsYoutube;
                    return [2 /*return*/, BsYoutube];
                case 1429: return [4 /*yield*/, import("react-icons/bs")];
                case 1430:
                    BsZoomIn = (_b.sent()).BsZoomIn;
                    return [2 /*return*/, BsZoomIn];
                case 1431: return [4 /*yield*/, import("react-icons/bs")];
                case 1432:
                    BsZoomOut = (_b.sent()).BsZoomOut;
                    return [2 /*return*/, BsZoomOut];
                case 1433: return [2 /*return*/];
            }
        });
    });
}
