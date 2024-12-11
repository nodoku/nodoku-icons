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
export function nameToReactIcon_lu_1(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, LuOrigami, LuPackage2, LuPackageCheck, LuPackageMinus, LuPackageOpen, LuPackagePlus, LuPackageSearch, LuPackageX, LuPackage, LuPaintBucket, LuPaintRoller, LuPaintbrushVertical, LuPaintbrush, LuPalette, LuPanelBottomClose, LuPanelBottomDashed, LuPanelBottomOpen, LuPanelBottom, LuPanelLeftClose, LuPanelLeftDashed, LuPanelLeftOpen, LuPanelLeft, LuPanelRightClose, LuPanelRightDashed, LuPanelRightOpen, LuPanelRight, LuPanelTopClose, LuPanelTopDashed, LuPanelTopOpen, LuPanelTop, LuPanelsLeftBottom, LuPanelsRightBottom, LuPanelsTopLeft, LuPaperclip, LuParentheses, LuParkingMeter, LuPartyPopper, LuPause, LuPawPrint, LuPcCase, LuPenLine, LuPenOff, LuPenTool, LuPen, LuPencilLine, LuPencilOff, LuPencilRuler, LuPencil, LuPentagon, LuPercent, LuPersonStanding, LuPhilippinePeso, LuPhoneCall, LuPhoneForwarded, LuPhoneIncoming, LuPhoneMissed, LuPhoneOff, LuPhoneOutgoing, LuPhone, LuPi, LuPiano, LuPickaxe, LuPictureInPicture2, LuPictureInPicture, LuPiggyBank, LuPilcrowLeft, LuPilcrowRight, LuPilcrow, LuPillBottle, LuPill, LuPinOff, LuPin, LuPipette, LuPizza, LuPlaneLanding, LuPlaneTakeoff, LuPlane, LuPlay, LuPlug2, LuPlugZap, LuPlug, LuPlus, LuPocketKnife, LuPocket, LuPodcast, LuPointerOff, LuPointer, LuPopcorn, LuPopsicle, LuPoundSterling, LuPowerOff, LuPower, LuPresentation, LuPrinterCheck, LuPrinter, LuProjector, LuProportions, LuPuzzle, LuPyramid, LuQrCode, LuQuote, LuRabbit, LuRadar, LuRadiation, LuRadical, LuRadioReceiver, LuRadioTower, LuRadio, LuRadius, LuRailSymbol, LuRainbow, LuRat, LuRatio, LuReceiptCent, LuReceiptEuro, LuReceiptIndianRupee, LuReceiptJapaneseYen, LuReceiptPoundSterling, LuReceiptRussianRuble, LuReceiptSwissFranc, LuReceiptText, LuReceipt, LuRectangleEllipsis, LuRectangleHorizontal, LuRectangleVertical, LuRecycle, LuRedo2, LuRedoDot, LuRedo, LuRefreshCcwDot, LuRefreshCcw, LuRefreshCwOff, LuRefreshCw, LuRefrigerator, LuRegex, LuRemoveFormatting, LuRepeat1, LuRepeat2, LuRepeat, LuReplaceAll, LuReplace, LuReplyAll, LuReply, LuRewind, LuRibbon, LuRocket, LuRockingChair, LuRollerCoaster, LuRotate3D, LuRotateCcwSquare, LuRotateCcw, LuRotateCwSquare, LuRotateCw, LuRouteOff, LuRoute, LuRouter, LuRows2, LuRows3, LuRows4, LuRss, LuRuler, LuRussianRuble, LuSailboat, LuSalad, LuSandwich, LuSatelliteDish, LuSatellite, LuSaveAll, LuSaveOff, LuSave, LuScale3D, LuScale, LuScaling, LuScanBarcode, LuScanEye, LuScanFace, LuScanLine, LuScanQrCode, LuScanSearch, LuScanText, LuScan, LuSchool, LuScissorsLineDashed, LuScissors, LuScreenShareOff, LuScreenShare, LuScrollText, LuScroll, LuSearchCheck, LuSearchCode, LuSearchSlash, LuSearchX, LuSearch, LuSection, LuSendHorizontal, LuSendToBack, LuSend, LuSeparatorHorizontal, LuSeparatorVertical, LuServerCog, LuServerCrash, LuServerOff, LuServer, LuSettings2, LuSettings, LuShapes, LuShare2, LuShare, LuSheet, LuShell, LuShieldAlert, LuShieldBan, LuShieldCheck, LuShieldEllipsis, LuShieldHalf, LuShieldMinus, LuShieldOff, LuShieldPlus, LuShieldQuestion, LuShieldX, LuShield, LuShipWheel, LuShip, LuShirt, LuShoppingBag, LuShoppingBasket, LuShoppingCart, LuShovel, LuShowerHead, LuShrink, LuShrub, LuShuffle, LuSigma, LuSignalHigh, LuSignalLow, LuSignalMedium, LuSignalZero, LuSignal, LuSignature, LuSignpostBig, LuSignpost, LuSiren, LuSkipBack, LuSkipForward, LuSkull, LuSlack, LuSlash, LuSlice, LuSlidersHorizontal, LuSlidersVertical, LuSmartphoneCharging, LuSmartphoneNfc, LuSmartphone, LuSmilePlus, LuSmile, LuSnail, LuSnowflake, LuSofa, LuSoup, LuSpace, LuSpade, LuSparkle, LuSparkles, LuSpeaker, LuSpeech, LuSpellCheck2, LuSpellCheck, LuSpline, LuSplit, LuSprayCan, LuSprout, LuSquareActivity, LuSquareArrowDownLeft, LuSquareArrowDownRight, LuSquareArrowDown, LuSquareArrowLeft, LuSquareArrowOutDownLeft, LuSquareArrowOutDownRight, LuSquareArrowOutUpLeft, LuSquareArrowOutUpRight, LuSquareArrowRight, LuSquareArrowUpLeft, LuSquareArrowUpRight, LuSquareArrowUp, LuSquareAsterisk, LuSquareBottomDashedScissors, LuSquareChartGantt, LuSquareCheckBig, LuSquareCheck, LuSquareChevronDown, LuSquareChevronLeft, LuSquareChevronRight, LuSquareChevronUp, LuSquareCode, LuSquareDashedBottomCode, LuSquareDashedBottom, LuSquareDashedKanban, LuSquareDashedMousePointer, LuSquareDashed, LuSquareDivide, LuSquareDot, LuSquareEqual, LuSquareFunction, LuSquareKanban, LuSquareLibrary, LuSquareM, LuSquareMenu, LuSquareMinus, LuSquareMousePointer, LuSquareParkingOff, LuSquareParking, LuSquarePen, LuSquarePercent, LuSquarePi, LuSquarePilcrow, LuSquarePlay, LuSquarePlus, LuSquarePower, LuSquareRadical, LuSquareScissors, LuSquareSigma, LuSquareSlash, LuSquareSplitHorizontal, LuSquareSplitVertical, LuSquareSquare, LuSquareStack, LuSquareTerminal, LuSquareUserRound, LuSquareUser, LuSquareX, LuSquare, LuSquircle, LuSquirrel, LuStamp, LuStarHalf, LuStarOff, LuStar, LuStepBack, LuStepForward, LuStethoscope, LuSticker, LuStickyNote, LuStore, LuStretchHorizontal, LuStretchVertical, LuStrikethrough, LuSubscript, LuSunDim, LuSunMedium, LuSunMoon, LuSunSnow, LuSun, LuSunrise, LuSunset, LuSuperscript, LuSwatchBook, LuSwissFranc, LuSwitchCamera, LuSword, LuSwords, LuSyringe, LuTable2, LuTableCellsMerge, LuTableCellsSplit, LuTableColumnsSplit, LuTableOfContents, LuTableProperties, LuTableRowsSplit, LuTable, LuTabletSmartphone, LuTablet, LuTablets, LuTag, LuTags, LuTally1, LuTally2, LuTally3, LuTally4, LuTally5, LuTangent, LuTarget, LuTelescope, LuTentTree, LuTent, LuTerminal, LuTestTubeDiagonal, LuTestTube, LuTestTubes, LuTextCursorInput, LuTextCursor, LuTextQuote, LuTextSearch, LuTextSelect, LuText, LuTheater, LuThermometerSnowflake, LuThermometerSun, LuThermometer, LuThumbsDown, LuThumbsUp, LuTicketCheck, LuTicketMinus, LuTicketPercent, LuTicketPlus, LuTicketSlash, LuTicketX, LuTicket, LuTicketsPlane, LuTickets, LuTimerOff, LuTimerReset, LuTimer, LuToggleLeft, LuToggleRight, LuToilet, LuTornado, LuTorus, LuTouchpadOff, LuTouchpad, LuTowerControl, LuToyBrick, LuTractor, LuTrafficCone, LuTrainFrontTunnel, LuTrainFront, LuTrainTrack, LuTramFront, LuTrash2, LuTrash, LuTreeDeciduous, LuTreePalm, LuTreePine, LuTrees, LuTrello, LuTrendingDown, LuTrendingUpDown, LuTrendingUp, LuTriangleAlert, LuTriangleRight, LuTriangle, LuTrophy, LuTruck, LuTurtle, LuTvMinimalPlay, LuTvMinimal, LuTv, LuTwitch, LuTwitter, LuTypeOutline, LuType, LuUmbrellaOff, LuUmbrella, LuUnderline, LuUndo2, LuUndoDot, LuUndo, LuUnfoldHorizontal, LuUnfoldVertical, LuUngroup, LuUniversity, LuUnlink2, LuUnlink, LuUnplug, LuUpload, LuUsb, LuUserCheck, LuUserCog, LuUserMinus, LuUserPen, LuUserPlus, LuUserRoundCheck, LuUserRoundCog, LuUserRoundMinus, LuUserRoundPen, LuUserRoundPlus, LuUserRoundSearch, LuUserRoundX, LuUserRound, LuUserSearch, LuUserX, LuUser, LuUsersRound, LuUsers, LuUtensilsCrossed, LuUtensils, LuUtilityPole, LuVariable, LuVault, LuVegan, LuVenetianMask, LuVibrateOff, LuVibrate, LuVideoOff, LuVideo, LuVideotape, LuView, LuVoicemail, LuVolleyball, LuVolume1, LuVolume2, LuVolumeOff, LuVolumeX, LuVolume, LuVote, LuWalletCards, LuWalletMinimal, LuWallet, LuWallpaper, LuWandSparkles, LuWand, LuWarehouse, LuWashingMachine, LuWatch, LuWaves, LuWaypoints, LuWebcam, LuWebhookOff, LuWebhook, LuWeight, LuWheatOff, LuWheat, LuWholeWord, LuWifiHigh, LuWifiLow, LuWifiOff, LuWifiZero, LuWifi, LuWindArrowDown, LuWind, LuWineOff, LuWine, LuWorkflow, LuWorm, LuWrapText, LuWrench, LuX, LuYoutube, LuZapOff, LuZap, LuZoomIn, LuZoomOut;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "lu:LuOrigami": return [3 /*break*/, 1];
                        case "lu:LuPackage2": return [3 /*break*/, 3];
                        case "lu:LuPackageCheck": return [3 /*break*/, 5];
                        case "lu:LuPackageMinus": return [3 /*break*/, 7];
                        case "lu:LuPackageOpen": return [3 /*break*/, 9];
                        case "lu:LuPackagePlus": return [3 /*break*/, 11];
                        case "lu:LuPackageSearch": return [3 /*break*/, 13];
                        case "lu:LuPackageX": return [3 /*break*/, 15];
                        case "lu:LuPackage": return [3 /*break*/, 17];
                        case "lu:LuPaintBucket": return [3 /*break*/, 19];
                        case "lu:LuPaintRoller": return [3 /*break*/, 21];
                        case "lu:LuPaintbrushVertical": return [3 /*break*/, 23];
                        case "lu:LuPaintbrush": return [3 /*break*/, 25];
                        case "lu:LuPalette": return [3 /*break*/, 27];
                        case "lu:LuPanelBottomClose": return [3 /*break*/, 29];
                        case "lu:LuPanelBottomDashed": return [3 /*break*/, 31];
                        case "lu:LuPanelBottomOpen": return [3 /*break*/, 33];
                        case "lu:LuPanelBottom": return [3 /*break*/, 35];
                        case "lu:LuPanelLeftClose": return [3 /*break*/, 37];
                        case "lu:LuPanelLeftDashed": return [3 /*break*/, 39];
                        case "lu:LuPanelLeftOpen": return [3 /*break*/, 41];
                        case "lu:LuPanelLeft": return [3 /*break*/, 43];
                        case "lu:LuPanelRightClose": return [3 /*break*/, 45];
                        case "lu:LuPanelRightDashed": return [3 /*break*/, 47];
                        case "lu:LuPanelRightOpen": return [3 /*break*/, 49];
                        case "lu:LuPanelRight": return [3 /*break*/, 51];
                        case "lu:LuPanelTopClose": return [3 /*break*/, 53];
                        case "lu:LuPanelTopDashed": return [3 /*break*/, 55];
                        case "lu:LuPanelTopOpen": return [3 /*break*/, 57];
                        case "lu:LuPanelTop": return [3 /*break*/, 59];
                        case "lu:LuPanelsLeftBottom": return [3 /*break*/, 61];
                        case "lu:LuPanelsRightBottom": return [3 /*break*/, 63];
                        case "lu:LuPanelsTopLeft": return [3 /*break*/, 65];
                        case "lu:LuPaperclip": return [3 /*break*/, 67];
                        case "lu:LuParentheses": return [3 /*break*/, 69];
                        case "lu:LuParkingMeter": return [3 /*break*/, 71];
                        case "lu:LuPartyPopper": return [3 /*break*/, 73];
                        case "lu:LuPause": return [3 /*break*/, 75];
                        case "lu:LuPawPrint": return [3 /*break*/, 77];
                        case "lu:LuPcCase": return [3 /*break*/, 79];
                        case "lu:LuPenLine": return [3 /*break*/, 81];
                        case "lu:LuPenOff": return [3 /*break*/, 83];
                        case "lu:LuPenTool": return [3 /*break*/, 85];
                        case "lu:LuPen": return [3 /*break*/, 87];
                        case "lu:LuPencilLine": return [3 /*break*/, 89];
                        case "lu:LuPencilOff": return [3 /*break*/, 91];
                        case "lu:LuPencilRuler": return [3 /*break*/, 93];
                        case "lu:LuPencil": return [3 /*break*/, 95];
                        case "lu:LuPentagon": return [3 /*break*/, 97];
                        case "lu:LuPercent": return [3 /*break*/, 99];
                        case "lu:LuPersonStanding": return [3 /*break*/, 101];
                        case "lu:LuPhilippinePeso": return [3 /*break*/, 103];
                        case "lu:LuPhoneCall": return [3 /*break*/, 105];
                        case "lu:LuPhoneForwarded": return [3 /*break*/, 107];
                        case "lu:LuPhoneIncoming": return [3 /*break*/, 109];
                        case "lu:LuPhoneMissed": return [3 /*break*/, 111];
                        case "lu:LuPhoneOff": return [3 /*break*/, 113];
                        case "lu:LuPhoneOutgoing": return [3 /*break*/, 115];
                        case "lu:LuPhone": return [3 /*break*/, 117];
                        case "lu:LuPi": return [3 /*break*/, 119];
                        case "lu:LuPiano": return [3 /*break*/, 121];
                        case "lu:LuPickaxe": return [3 /*break*/, 123];
                        case "lu:LuPictureInPicture2": return [3 /*break*/, 125];
                        case "lu:LuPictureInPicture": return [3 /*break*/, 127];
                        case "lu:LuPiggyBank": return [3 /*break*/, 129];
                        case "lu:LuPilcrowLeft": return [3 /*break*/, 131];
                        case "lu:LuPilcrowRight": return [3 /*break*/, 133];
                        case "lu:LuPilcrow": return [3 /*break*/, 135];
                        case "lu:LuPillBottle": return [3 /*break*/, 137];
                        case "lu:LuPill": return [3 /*break*/, 139];
                        case "lu:LuPinOff": return [3 /*break*/, 141];
                        case "lu:LuPin": return [3 /*break*/, 143];
                        case "lu:LuPipette": return [3 /*break*/, 145];
                        case "lu:LuPizza": return [3 /*break*/, 147];
                        case "lu:LuPlaneLanding": return [3 /*break*/, 149];
                        case "lu:LuPlaneTakeoff": return [3 /*break*/, 151];
                        case "lu:LuPlane": return [3 /*break*/, 153];
                        case "lu:LuPlay": return [3 /*break*/, 155];
                        case "lu:LuPlug2": return [3 /*break*/, 157];
                        case "lu:LuPlugZap": return [3 /*break*/, 159];
                        case "lu:LuPlug": return [3 /*break*/, 161];
                        case "lu:LuPlus": return [3 /*break*/, 163];
                        case "lu:LuPocketKnife": return [3 /*break*/, 165];
                        case "lu:LuPocket": return [3 /*break*/, 167];
                        case "lu:LuPodcast": return [3 /*break*/, 169];
                        case "lu:LuPointerOff": return [3 /*break*/, 171];
                        case "lu:LuPointer": return [3 /*break*/, 173];
                        case "lu:LuPopcorn": return [3 /*break*/, 175];
                        case "lu:LuPopsicle": return [3 /*break*/, 177];
                        case "lu:LuPoundSterling": return [3 /*break*/, 179];
                        case "lu:LuPowerOff": return [3 /*break*/, 181];
                        case "lu:LuPower": return [3 /*break*/, 183];
                        case "lu:LuPresentation": return [3 /*break*/, 185];
                        case "lu:LuPrinterCheck": return [3 /*break*/, 187];
                        case "lu:LuPrinter": return [3 /*break*/, 189];
                        case "lu:LuProjector": return [3 /*break*/, 191];
                        case "lu:LuProportions": return [3 /*break*/, 193];
                        case "lu:LuPuzzle": return [3 /*break*/, 195];
                        case "lu:LuPyramid": return [3 /*break*/, 197];
                        case "lu:LuQrCode": return [3 /*break*/, 199];
                        case "lu:LuQuote": return [3 /*break*/, 201];
                        case "lu:LuRabbit": return [3 /*break*/, 203];
                        case "lu:LuRadar": return [3 /*break*/, 205];
                        case "lu:LuRadiation": return [3 /*break*/, 207];
                        case "lu:LuRadical": return [3 /*break*/, 209];
                        case "lu:LuRadioReceiver": return [3 /*break*/, 211];
                        case "lu:LuRadioTower": return [3 /*break*/, 213];
                        case "lu:LuRadio": return [3 /*break*/, 215];
                        case "lu:LuRadius": return [3 /*break*/, 217];
                        case "lu:LuRailSymbol": return [3 /*break*/, 219];
                        case "lu:LuRainbow": return [3 /*break*/, 221];
                        case "lu:LuRat": return [3 /*break*/, 223];
                        case "lu:LuRatio": return [3 /*break*/, 225];
                        case "lu:LuReceiptCent": return [3 /*break*/, 227];
                        case "lu:LuReceiptEuro": return [3 /*break*/, 229];
                        case "lu:LuReceiptIndianRupee": return [3 /*break*/, 231];
                        case "lu:LuReceiptJapaneseYen": return [3 /*break*/, 233];
                        case "lu:LuReceiptPoundSterling": return [3 /*break*/, 235];
                        case "lu:LuReceiptRussianRuble": return [3 /*break*/, 237];
                        case "lu:LuReceiptSwissFranc": return [3 /*break*/, 239];
                        case "lu:LuReceiptText": return [3 /*break*/, 241];
                        case "lu:LuReceipt": return [3 /*break*/, 243];
                        case "lu:LuRectangleEllipsis": return [3 /*break*/, 245];
                        case "lu:LuRectangleHorizontal": return [3 /*break*/, 247];
                        case "lu:LuRectangleVertical": return [3 /*break*/, 249];
                        case "lu:LuRecycle": return [3 /*break*/, 251];
                        case "lu:LuRedo2": return [3 /*break*/, 253];
                        case "lu:LuRedoDot": return [3 /*break*/, 255];
                        case "lu:LuRedo": return [3 /*break*/, 257];
                        case "lu:LuRefreshCcwDot": return [3 /*break*/, 259];
                        case "lu:LuRefreshCcw": return [3 /*break*/, 261];
                        case "lu:LuRefreshCwOff": return [3 /*break*/, 263];
                        case "lu:LuRefreshCw": return [3 /*break*/, 265];
                        case "lu:LuRefrigerator": return [3 /*break*/, 267];
                        case "lu:LuRegex": return [3 /*break*/, 269];
                        case "lu:LuRemoveFormatting": return [3 /*break*/, 271];
                        case "lu:LuRepeat1": return [3 /*break*/, 273];
                        case "lu:LuRepeat2": return [3 /*break*/, 275];
                        case "lu:LuRepeat": return [3 /*break*/, 277];
                        case "lu:LuReplaceAll": return [3 /*break*/, 279];
                        case "lu:LuReplace": return [3 /*break*/, 281];
                        case "lu:LuReplyAll": return [3 /*break*/, 283];
                        case "lu:LuReply": return [3 /*break*/, 285];
                        case "lu:LuRewind": return [3 /*break*/, 287];
                        case "lu:LuRibbon": return [3 /*break*/, 289];
                        case "lu:LuRocket": return [3 /*break*/, 291];
                        case "lu:LuRockingChair": return [3 /*break*/, 293];
                        case "lu:LuRollerCoaster": return [3 /*break*/, 295];
                        case "lu:LuRotate3D": return [3 /*break*/, 297];
                        case "lu:LuRotateCcwSquare": return [3 /*break*/, 299];
                        case "lu:LuRotateCcw": return [3 /*break*/, 301];
                        case "lu:LuRotateCwSquare": return [3 /*break*/, 303];
                        case "lu:LuRotateCw": return [3 /*break*/, 305];
                        case "lu:LuRouteOff": return [3 /*break*/, 307];
                        case "lu:LuRoute": return [3 /*break*/, 309];
                        case "lu:LuRouter": return [3 /*break*/, 311];
                        case "lu:LuRows2": return [3 /*break*/, 313];
                        case "lu:LuRows3": return [3 /*break*/, 315];
                        case "lu:LuRows4": return [3 /*break*/, 317];
                        case "lu:LuRss": return [3 /*break*/, 319];
                        case "lu:LuRuler": return [3 /*break*/, 321];
                        case "lu:LuRussianRuble": return [3 /*break*/, 323];
                        case "lu:LuSailboat": return [3 /*break*/, 325];
                        case "lu:LuSalad": return [3 /*break*/, 327];
                        case "lu:LuSandwich": return [3 /*break*/, 329];
                        case "lu:LuSatelliteDish": return [3 /*break*/, 331];
                        case "lu:LuSatellite": return [3 /*break*/, 333];
                        case "lu:LuSaveAll": return [3 /*break*/, 335];
                        case "lu:LuSaveOff": return [3 /*break*/, 337];
                        case "lu:LuSave": return [3 /*break*/, 339];
                        case "lu:LuScale3D": return [3 /*break*/, 341];
                        case "lu:LuScale": return [3 /*break*/, 343];
                        case "lu:LuScaling": return [3 /*break*/, 345];
                        case "lu:LuScanBarcode": return [3 /*break*/, 347];
                        case "lu:LuScanEye": return [3 /*break*/, 349];
                        case "lu:LuScanFace": return [3 /*break*/, 351];
                        case "lu:LuScanLine": return [3 /*break*/, 353];
                        case "lu:LuScanQrCode": return [3 /*break*/, 355];
                        case "lu:LuScanSearch": return [3 /*break*/, 357];
                        case "lu:LuScanText": return [3 /*break*/, 359];
                        case "lu:LuScan": return [3 /*break*/, 361];
                        case "lu:LuSchool": return [3 /*break*/, 363];
                        case "lu:LuScissorsLineDashed": return [3 /*break*/, 365];
                        case "lu:LuScissors": return [3 /*break*/, 367];
                        case "lu:LuScreenShareOff": return [3 /*break*/, 369];
                        case "lu:LuScreenShare": return [3 /*break*/, 371];
                        case "lu:LuScrollText": return [3 /*break*/, 373];
                        case "lu:LuScroll": return [3 /*break*/, 375];
                        case "lu:LuSearchCheck": return [3 /*break*/, 377];
                        case "lu:LuSearchCode": return [3 /*break*/, 379];
                        case "lu:LuSearchSlash": return [3 /*break*/, 381];
                        case "lu:LuSearchX": return [3 /*break*/, 383];
                        case "lu:LuSearch": return [3 /*break*/, 385];
                        case "lu:LuSection": return [3 /*break*/, 387];
                        case "lu:LuSendHorizontal": return [3 /*break*/, 389];
                        case "lu:LuSendToBack": return [3 /*break*/, 391];
                        case "lu:LuSend": return [3 /*break*/, 393];
                        case "lu:LuSeparatorHorizontal": return [3 /*break*/, 395];
                        case "lu:LuSeparatorVertical": return [3 /*break*/, 397];
                        case "lu:LuServerCog": return [3 /*break*/, 399];
                        case "lu:LuServerCrash": return [3 /*break*/, 401];
                        case "lu:LuServerOff": return [3 /*break*/, 403];
                        case "lu:LuServer": return [3 /*break*/, 405];
                        case "lu:LuSettings2": return [3 /*break*/, 407];
                        case "lu:LuSettings": return [3 /*break*/, 409];
                        case "lu:LuShapes": return [3 /*break*/, 411];
                        case "lu:LuShare2": return [3 /*break*/, 413];
                        case "lu:LuShare": return [3 /*break*/, 415];
                        case "lu:LuSheet": return [3 /*break*/, 417];
                        case "lu:LuShell": return [3 /*break*/, 419];
                        case "lu:LuShieldAlert": return [3 /*break*/, 421];
                        case "lu:LuShieldBan": return [3 /*break*/, 423];
                        case "lu:LuShieldCheck": return [3 /*break*/, 425];
                        case "lu:LuShieldEllipsis": return [3 /*break*/, 427];
                        case "lu:LuShieldHalf": return [3 /*break*/, 429];
                        case "lu:LuShieldMinus": return [3 /*break*/, 431];
                        case "lu:LuShieldOff": return [3 /*break*/, 433];
                        case "lu:LuShieldPlus": return [3 /*break*/, 435];
                        case "lu:LuShieldQuestion": return [3 /*break*/, 437];
                        case "lu:LuShieldX": return [3 /*break*/, 439];
                        case "lu:LuShield": return [3 /*break*/, 441];
                        case "lu:LuShipWheel": return [3 /*break*/, 443];
                        case "lu:LuShip": return [3 /*break*/, 445];
                        case "lu:LuShirt": return [3 /*break*/, 447];
                        case "lu:LuShoppingBag": return [3 /*break*/, 449];
                        case "lu:LuShoppingBasket": return [3 /*break*/, 451];
                        case "lu:LuShoppingCart": return [3 /*break*/, 453];
                        case "lu:LuShovel": return [3 /*break*/, 455];
                        case "lu:LuShowerHead": return [3 /*break*/, 457];
                        case "lu:LuShrink": return [3 /*break*/, 459];
                        case "lu:LuShrub": return [3 /*break*/, 461];
                        case "lu:LuShuffle": return [3 /*break*/, 463];
                        case "lu:LuSigma": return [3 /*break*/, 465];
                        case "lu:LuSignalHigh": return [3 /*break*/, 467];
                        case "lu:LuSignalLow": return [3 /*break*/, 469];
                        case "lu:LuSignalMedium": return [3 /*break*/, 471];
                        case "lu:LuSignalZero": return [3 /*break*/, 473];
                        case "lu:LuSignal": return [3 /*break*/, 475];
                        case "lu:LuSignature": return [3 /*break*/, 477];
                        case "lu:LuSignpostBig": return [3 /*break*/, 479];
                        case "lu:LuSignpost": return [3 /*break*/, 481];
                        case "lu:LuSiren": return [3 /*break*/, 483];
                        case "lu:LuSkipBack": return [3 /*break*/, 485];
                        case "lu:LuSkipForward": return [3 /*break*/, 487];
                        case "lu:LuSkull": return [3 /*break*/, 489];
                        case "lu:LuSlack": return [3 /*break*/, 491];
                        case "lu:LuSlash": return [3 /*break*/, 493];
                        case "lu:LuSlice": return [3 /*break*/, 495];
                        case "lu:LuSlidersHorizontal": return [3 /*break*/, 497];
                        case "lu:LuSlidersVertical": return [3 /*break*/, 499];
                        case "lu:LuSmartphoneCharging": return [3 /*break*/, 501];
                        case "lu:LuSmartphoneNfc": return [3 /*break*/, 503];
                        case "lu:LuSmartphone": return [3 /*break*/, 505];
                        case "lu:LuSmilePlus": return [3 /*break*/, 507];
                        case "lu:LuSmile": return [3 /*break*/, 509];
                        case "lu:LuSnail": return [3 /*break*/, 511];
                        case "lu:LuSnowflake": return [3 /*break*/, 513];
                        case "lu:LuSofa": return [3 /*break*/, 515];
                        case "lu:LuSoup": return [3 /*break*/, 517];
                        case "lu:LuSpace": return [3 /*break*/, 519];
                        case "lu:LuSpade": return [3 /*break*/, 521];
                        case "lu:LuSparkle": return [3 /*break*/, 523];
                        case "lu:LuSparkles": return [3 /*break*/, 525];
                        case "lu:LuSpeaker": return [3 /*break*/, 527];
                        case "lu:LuSpeech": return [3 /*break*/, 529];
                        case "lu:LuSpellCheck2": return [3 /*break*/, 531];
                        case "lu:LuSpellCheck": return [3 /*break*/, 533];
                        case "lu:LuSpline": return [3 /*break*/, 535];
                        case "lu:LuSplit": return [3 /*break*/, 537];
                        case "lu:LuSprayCan": return [3 /*break*/, 539];
                        case "lu:LuSprout": return [3 /*break*/, 541];
                        case "lu:LuSquareActivity": return [3 /*break*/, 543];
                        case "lu:LuSquareArrowDownLeft": return [3 /*break*/, 545];
                        case "lu:LuSquareArrowDownRight": return [3 /*break*/, 547];
                        case "lu:LuSquareArrowDown": return [3 /*break*/, 549];
                        case "lu:LuSquareArrowLeft": return [3 /*break*/, 551];
                        case "lu:LuSquareArrowOutDownLeft": return [3 /*break*/, 553];
                        case "lu:LuSquareArrowOutDownRight": return [3 /*break*/, 555];
                        case "lu:LuSquareArrowOutUpLeft": return [3 /*break*/, 557];
                        case "lu:LuSquareArrowOutUpRight": return [3 /*break*/, 559];
                        case "lu:LuSquareArrowRight": return [3 /*break*/, 561];
                        case "lu:LuSquareArrowUpLeft": return [3 /*break*/, 563];
                        case "lu:LuSquareArrowUpRight": return [3 /*break*/, 565];
                        case "lu:LuSquareArrowUp": return [3 /*break*/, 567];
                        case "lu:LuSquareAsterisk": return [3 /*break*/, 569];
                        case "lu:LuSquareBottomDashedScissors": return [3 /*break*/, 571];
                        case "lu:LuSquareChartGantt": return [3 /*break*/, 573];
                        case "lu:LuSquareCheckBig": return [3 /*break*/, 575];
                        case "lu:LuSquareCheck": return [3 /*break*/, 577];
                        case "lu:LuSquareChevronDown": return [3 /*break*/, 579];
                        case "lu:LuSquareChevronLeft": return [3 /*break*/, 581];
                        case "lu:LuSquareChevronRight": return [3 /*break*/, 583];
                        case "lu:LuSquareChevronUp": return [3 /*break*/, 585];
                        case "lu:LuSquareCode": return [3 /*break*/, 587];
                        case "lu:LuSquareDashedBottomCode": return [3 /*break*/, 589];
                        case "lu:LuSquareDashedBottom": return [3 /*break*/, 591];
                        case "lu:LuSquareDashedKanban": return [3 /*break*/, 593];
                        case "lu:LuSquareDashedMousePointer": return [3 /*break*/, 595];
                        case "lu:LuSquareDashed": return [3 /*break*/, 597];
                        case "lu:LuSquareDivide": return [3 /*break*/, 599];
                        case "lu:LuSquareDot": return [3 /*break*/, 601];
                        case "lu:LuSquareEqual": return [3 /*break*/, 603];
                        case "lu:LuSquareFunction": return [3 /*break*/, 605];
                        case "lu:LuSquareKanban": return [3 /*break*/, 607];
                        case "lu:LuSquareLibrary": return [3 /*break*/, 609];
                        case "lu:LuSquareM": return [3 /*break*/, 611];
                        case "lu:LuSquareMenu": return [3 /*break*/, 613];
                        case "lu:LuSquareMinus": return [3 /*break*/, 615];
                        case "lu:LuSquareMousePointer": return [3 /*break*/, 617];
                        case "lu:LuSquareParkingOff": return [3 /*break*/, 619];
                        case "lu:LuSquareParking": return [3 /*break*/, 621];
                        case "lu:LuSquarePen": return [3 /*break*/, 623];
                        case "lu:LuSquarePercent": return [3 /*break*/, 625];
                        case "lu:LuSquarePi": return [3 /*break*/, 627];
                        case "lu:LuSquarePilcrow": return [3 /*break*/, 629];
                        case "lu:LuSquarePlay": return [3 /*break*/, 631];
                        case "lu:LuSquarePlus": return [3 /*break*/, 633];
                        case "lu:LuSquarePower": return [3 /*break*/, 635];
                        case "lu:LuSquareRadical": return [3 /*break*/, 637];
                        case "lu:LuSquareScissors": return [3 /*break*/, 639];
                        case "lu:LuSquareSigma": return [3 /*break*/, 641];
                        case "lu:LuSquareSlash": return [3 /*break*/, 643];
                        case "lu:LuSquareSplitHorizontal": return [3 /*break*/, 645];
                        case "lu:LuSquareSplitVertical": return [3 /*break*/, 647];
                        case "lu:LuSquareSquare": return [3 /*break*/, 649];
                        case "lu:LuSquareStack": return [3 /*break*/, 651];
                        case "lu:LuSquareTerminal": return [3 /*break*/, 653];
                        case "lu:LuSquareUserRound": return [3 /*break*/, 655];
                        case "lu:LuSquareUser": return [3 /*break*/, 657];
                        case "lu:LuSquareX": return [3 /*break*/, 659];
                        case "lu:LuSquare": return [3 /*break*/, 661];
                        case "lu:LuSquircle": return [3 /*break*/, 663];
                        case "lu:LuSquirrel": return [3 /*break*/, 665];
                        case "lu:LuStamp": return [3 /*break*/, 667];
                        case "lu:LuStarHalf": return [3 /*break*/, 669];
                        case "lu:LuStarOff": return [3 /*break*/, 671];
                        case "lu:LuStar": return [3 /*break*/, 673];
                        case "lu:LuStepBack": return [3 /*break*/, 675];
                        case "lu:LuStepForward": return [3 /*break*/, 677];
                        case "lu:LuStethoscope": return [3 /*break*/, 679];
                        case "lu:LuSticker": return [3 /*break*/, 681];
                        case "lu:LuStickyNote": return [3 /*break*/, 683];
                        case "lu:LuStore": return [3 /*break*/, 685];
                        case "lu:LuStretchHorizontal": return [3 /*break*/, 687];
                        case "lu:LuStretchVertical": return [3 /*break*/, 689];
                        case "lu:LuStrikethrough": return [3 /*break*/, 691];
                        case "lu:LuSubscript": return [3 /*break*/, 693];
                        case "lu:LuSunDim": return [3 /*break*/, 695];
                        case "lu:LuSunMedium": return [3 /*break*/, 697];
                        case "lu:LuSunMoon": return [3 /*break*/, 699];
                        case "lu:LuSunSnow": return [3 /*break*/, 701];
                        case "lu:LuSun": return [3 /*break*/, 703];
                        case "lu:LuSunrise": return [3 /*break*/, 705];
                        case "lu:LuSunset": return [3 /*break*/, 707];
                        case "lu:LuSuperscript": return [3 /*break*/, 709];
                        case "lu:LuSwatchBook": return [3 /*break*/, 711];
                        case "lu:LuSwissFranc": return [3 /*break*/, 713];
                        case "lu:LuSwitchCamera": return [3 /*break*/, 715];
                        case "lu:LuSword": return [3 /*break*/, 717];
                        case "lu:LuSwords": return [3 /*break*/, 719];
                        case "lu:LuSyringe": return [3 /*break*/, 721];
                        case "lu:LuTable2": return [3 /*break*/, 723];
                        case "lu:LuTableCellsMerge": return [3 /*break*/, 725];
                        case "lu:LuTableCellsSplit": return [3 /*break*/, 727];
                        case "lu:LuTableColumnsSplit": return [3 /*break*/, 729];
                        case "lu:LuTableOfContents": return [3 /*break*/, 731];
                        case "lu:LuTableProperties": return [3 /*break*/, 733];
                        case "lu:LuTableRowsSplit": return [3 /*break*/, 735];
                        case "lu:LuTable": return [3 /*break*/, 737];
                        case "lu:LuTabletSmartphone": return [3 /*break*/, 739];
                        case "lu:LuTablet": return [3 /*break*/, 741];
                        case "lu:LuTablets": return [3 /*break*/, 743];
                        case "lu:LuTag": return [3 /*break*/, 745];
                        case "lu:LuTags": return [3 /*break*/, 747];
                        case "lu:LuTally1": return [3 /*break*/, 749];
                        case "lu:LuTally2": return [3 /*break*/, 751];
                        case "lu:LuTally3": return [3 /*break*/, 753];
                        case "lu:LuTally4": return [3 /*break*/, 755];
                        case "lu:LuTally5": return [3 /*break*/, 757];
                        case "lu:LuTangent": return [3 /*break*/, 759];
                        case "lu:LuTarget": return [3 /*break*/, 761];
                        case "lu:LuTelescope": return [3 /*break*/, 763];
                        case "lu:LuTentTree": return [3 /*break*/, 765];
                        case "lu:LuTent": return [3 /*break*/, 767];
                        case "lu:LuTerminal": return [3 /*break*/, 769];
                        case "lu:LuTestTubeDiagonal": return [3 /*break*/, 771];
                        case "lu:LuTestTube": return [3 /*break*/, 773];
                        case "lu:LuTestTubes": return [3 /*break*/, 775];
                        case "lu:LuTextCursorInput": return [3 /*break*/, 777];
                        case "lu:LuTextCursor": return [3 /*break*/, 779];
                        case "lu:LuTextQuote": return [3 /*break*/, 781];
                        case "lu:LuTextSearch": return [3 /*break*/, 783];
                        case "lu:LuTextSelect": return [3 /*break*/, 785];
                        case "lu:LuText": return [3 /*break*/, 787];
                        case "lu:LuTheater": return [3 /*break*/, 789];
                        case "lu:LuThermometerSnowflake": return [3 /*break*/, 791];
                        case "lu:LuThermometerSun": return [3 /*break*/, 793];
                        case "lu:LuThermometer": return [3 /*break*/, 795];
                        case "lu:LuThumbsDown": return [3 /*break*/, 797];
                        case "lu:LuThumbsUp": return [3 /*break*/, 799];
                        case "lu:LuTicketCheck": return [3 /*break*/, 801];
                        case "lu:LuTicketMinus": return [3 /*break*/, 803];
                        case "lu:LuTicketPercent": return [3 /*break*/, 805];
                        case "lu:LuTicketPlus": return [3 /*break*/, 807];
                        case "lu:LuTicketSlash": return [3 /*break*/, 809];
                        case "lu:LuTicketX": return [3 /*break*/, 811];
                        case "lu:LuTicket": return [3 /*break*/, 813];
                        case "lu:LuTicketsPlane": return [3 /*break*/, 815];
                        case "lu:LuTickets": return [3 /*break*/, 817];
                        case "lu:LuTimerOff": return [3 /*break*/, 819];
                        case "lu:LuTimerReset": return [3 /*break*/, 821];
                        case "lu:LuTimer": return [3 /*break*/, 823];
                        case "lu:LuToggleLeft": return [3 /*break*/, 825];
                        case "lu:LuToggleRight": return [3 /*break*/, 827];
                        case "lu:LuToilet": return [3 /*break*/, 829];
                        case "lu:LuTornado": return [3 /*break*/, 831];
                        case "lu:LuTorus": return [3 /*break*/, 833];
                        case "lu:LuTouchpadOff": return [3 /*break*/, 835];
                        case "lu:LuTouchpad": return [3 /*break*/, 837];
                        case "lu:LuTowerControl": return [3 /*break*/, 839];
                        case "lu:LuToyBrick": return [3 /*break*/, 841];
                        case "lu:LuTractor": return [3 /*break*/, 843];
                        case "lu:LuTrafficCone": return [3 /*break*/, 845];
                        case "lu:LuTrainFrontTunnel": return [3 /*break*/, 847];
                        case "lu:LuTrainFront": return [3 /*break*/, 849];
                        case "lu:LuTrainTrack": return [3 /*break*/, 851];
                        case "lu:LuTramFront": return [3 /*break*/, 853];
                        case "lu:LuTrash2": return [3 /*break*/, 855];
                        case "lu:LuTrash": return [3 /*break*/, 857];
                        case "lu:LuTreeDeciduous": return [3 /*break*/, 859];
                        case "lu:LuTreePalm": return [3 /*break*/, 861];
                        case "lu:LuTreePine": return [3 /*break*/, 863];
                        case "lu:LuTrees": return [3 /*break*/, 865];
                        case "lu:LuTrello": return [3 /*break*/, 867];
                        case "lu:LuTrendingDown": return [3 /*break*/, 869];
                        case "lu:LuTrendingUpDown": return [3 /*break*/, 871];
                        case "lu:LuTrendingUp": return [3 /*break*/, 873];
                        case "lu:LuTriangleAlert": return [3 /*break*/, 875];
                        case "lu:LuTriangleRight": return [3 /*break*/, 877];
                        case "lu:LuTriangle": return [3 /*break*/, 879];
                        case "lu:LuTrophy": return [3 /*break*/, 881];
                        case "lu:LuTruck": return [3 /*break*/, 883];
                        case "lu:LuTurtle": return [3 /*break*/, 885];
                        case "lu:LuTvMinimalPlay": return [3 /*break*/, 887];
                        case "lu:LuTvMinimal": return [3 /*break*/, 889];
                        case "lu:LuTv": return [3 /*break*/, 891];
                        case "lu:LuTwitch": return [3 /*break*/, 893];
                        case "lu:LuTwitter": return [3 /*break*/, 895];
                        case "lu:LuTypeOutline": return [3 /*break*/, 897];
                        case "lu:LuType": return [3 /*break*/, 899];
                        case "lu:LuUmbrellaOff": return [3 /*break*/, 901];
                        case "lu:LuUmbrella": return [3 /*break*/, 903];
                        case "lu:LuUnderline": return [3 /*break*/, 905];
                        case "lu:LuUndo2": return [3 /*break*/, 907];
                        case "lu:LuUndoDot": return [3 /*break*/, 909];
                        case "lu:LuUndo": return [3 /*break*/, 911];
                        case "lu:LuUnfoldHorizontal": return [3 /*break*/, 913];
                        case "lu:LuUnfoldVertical": return [3 /*break*/, 915];
                        case "lu:LuUngroup": return [3 /*break*/, 917];
                        case "lu:LuUniversity": return [3 /*break*/, 919];
                        case "lu:LuUnlink2": return [3 /*break*/, 921];
                        case "lu:LuUnlink": return [3 /*break*/, 923];
                        case "lu:LuUnplug": return [3 /*break*/, 925];
                        case "lu:LuUpload": return [3 /*break*/, 927];
                        case "lu:LuUsb": return [3 /*break*/, 929];
                        case "lu:LuUserCheck": return [3 /*break*/, 931];
                        case "lu:LuUserCog": return [3 /*break*/, 933];
                        case "lu:LuUserMinus": return [3 /*break*/, 935];
                        case "lu:LuUserPen": return [3 /*break*/, 937];
                        case "lu:LuUserPlus": return [3 /*break*/, 939];
                        case "lu:LuUserRoundCheck": return [3 /*break*/, 941];
                        case "lu:LuUserRoundCog": return [3 /*break*/, 943];
                        case "lu:LuUserRoundMinus": return [3 /*break*/, 945];
                        case "lu:LuUserRoundPen": return [3 /*break*/, 947];
                        case "lu:LuUserRoundPlus": return [3 /*break*/, 949];
                        case "lu:LuUserRoundSearch": return [3 /*break*/, 951];
                        case "lu:LuUserRoundX": return [3 /*break*/, 953];
                        case "lu:LuUserRound": return [3 /*break*/, 955];
                        case "lu:LuUserSearch": return [3 /*break*/, 957];
                        case "lu:LuUserX": return [3 /*break*/, 959];
                        case "lu:LuUser": return [3 /*break*/, 961];
                        case "lu:LuUsersRound": return [3 /*break*/, 963];
                        case "lu:LuUsers": return [3 /*break*/, 965];
                        case "lu:LuUtensilsCrossed": return [3 /*break*/, 967];
                        case "lu:LuUtensils": return [3 /*break*/, 969];
                        case "lu:LuUtilityPole": return [3 /*break*/, 971];
                        case "lu:LuVariable": return [3 /*break*/, 973];
                        case "lu:LuVault": return [3 /*break*/, 975];
                        case "lu:LuVegan": return [3 /*break*/, 977];
                        case "lu:LuVenetianMask": return [3 /*break*/, 979];
                        case "lu:LuVibrateOff": return [3 /*break*/, 981];
                        case "lu:LuVibrate": return [3 /*break*/, 983];
                        case "lu:LuVideoOff": return [3 /*break*/, 985];
                        case "lu:LuVideo": return [3 /*break*/, 987];
                        case "lu:LuVideotape": return [3 /*break*/, 989];
                        case "lu:LuView": return [3 /*break*/, 991];
                        case "lu:LuVoicemail": return [3 /*break*/, 993];
                        case "lu:LuVolleyball": return [3 /*break*/, 995];
                        case "lu:LuVolume1": return [3 /*break*/, 997];
                        case "lu:LuVolume2": return [3 /*break*/, 999];
                        case "lu:LuVolumeOff": return [3 /*break*/, 1001];
                        case "lu:LuVolumeX": return [3 /*break*/, 1003];
                        case "lu:LuVolume": return [3 /*break*/, 1005];
                        case "lu:LuVote": return [3 /*break*/, 1007];
                        case "lu:LuWalletCards": return [3 /*break*/, 1009];
                        case "lu:LuWalletMinimal": return [3 /*break*/, 1011];
                        case "lu:LuWallet": return [3 /*break*/, 1013];
                        case "lu:LuWallpaper": return [3 /*break*/, 1015];
                        case "lu:LuWandSparkles": return [3 /*break*/, 1017];
                        case "lu:LuWand": return [3 /*break*/, 1019];
                        case "lu:LuWarehouse": return [3 /*break*/, 1021];
                        case "lu:LuWashingMachine": return [3 /*break*/, 1023];
                        case "lu:LuWatch": return [3 /*break*/, 1025];
                        case "lu:LuWaves": return [3 /*break*/, 1027];
                        case "lu:LuWaypoints": return [3 /*break*/, 1029];
                        case "lu:LuWebcam": return [3 /*break*/, 1031];
                        case "lu:LuWebhookOff": return [3 /*break*/, 1033];
                        case "lu:LuWebhook": return [3 /*break*/, 1035];
                        case "lu:LuWeight": return [3 /*break*/, 1037];
                        case "lu:LuWheatOff": return [3 /*break*/, 1039];
                        case "lu:LuWheat": return [3 /*break*/, 1041];
                        case "lu:LuWholeWord": return [3 /*break*/, 1043];
                        case "lu:LuWifiHigh": return [3 /*break*/, 1045];
                        case "lu:LuWifiLow": return [3 /*break*/, 1047];
                        case "lu:LuWifiOff": return [3 /*break*/, 1049];
                        case "lu:LuWifiZero": return [3 /*break*/, 1051];
                        case "lu:LuWifi": return [3 /*break*/, 1053];
                        case "lu:LuWindArrowDown": return [3 /*break*/, 1055];
                        case "lu:LuWind": return [3 /*break*/, 1057];
                        case "lu:LuWineOff": return [3 /*break*/, 1059];
                        case "lu:LuWine": return [3 /*break*/, 1061];
                        case "lu:LuWorkflow": return [3 /*break*/, 1063];
                        case "lu:LuWorm": return [3 /*break*/, 1065];
                        case "lu:LuWrapText": return [3 /*break*/, 1067];
                        case "lu:LuWrench": return [3 /*break*/, 1069];
                        case "lu:LuX": return [3 /*break*/, 1071];
                        case "lu:LuYoutube": return [3 /*break*/, 1073];
                        case "lu:LuZapOff": return [3 /*break*/, 1075];
                        case "lu:LuZap": return [3 /*break*/, 1077];
                        case "lu:LuZoomIn": return [3 /*break*/, 1079];
                        case "lu:LuZoomOut": return [3 /*break*/, 1081];
                    }
                    return [3 /*break*/, 1083];
                case 1: return [4 /*yield*/, import("react-icons/lu")];
                case 2:
                    LuOrigami = (_b.sent()).LuOrigami;
                    return [2 /*return*/, LuOrigami];
                case 3: return [4 /*yield*/, import("react-icons/lu")];
                case 4:
                    LuPackage2 = (_b.sent()).LuPackage2;
                    return [2 /*return*/, LuPackage2];
                case 5: return [4 /*yield*/, import("react-icons/lu")];
                case 6:
                    LuPackageCheck = (_b.sent()).LuPackageCheck;
                    return [2 /*return*/, LuPackageCheck];
                case 7: return [4 /*yield*/, import("react-icons/lu")];
                case 8:
                    LuPackageMinus = (_b.sent()).LuPackageMinus;
                    return [2 /*return*/, LuPackageMinus];
                case 9: return [4 /*yield*/, import("react-icons/lu")];
                case 10:
                    LuPackageOpen = (_b.sent()).LuPackageOpen;
                    return [2 /*return*/, LuPackageOpen];
                case 11: return [4 /*yield*/, import("react-icons/lu")];
                case 12:
                    LuPackagePlus = (_b.sent()).LuPackagePlus;
                    return [2 /*return*/, LuPackagePlus];
                case 13: return [4 /*yield*/, import("react-icons/lu")];
                case 14:
                    LuPackageSearch = (_b.sent()).LuPackageSearch;
                    return [2 /*return*/, LuPackageSearch];
                case 15: return [4 /*yield*/, import("react-icons/lu")];
                case 16:
                    LuPackageX = (_b.sent()).LuPackageX;
                    return [2 /*return*/, LuPackageX];
                case 17: return [4 /*yield*/, import("react-icons/lu")];
                case 18:
                    LuPackage = (_b.sent()).LuPackage;
                    return [2 /*return*/, LuPackage];
                case 19: return [4 /*yield*/, import("react-icons/lu")];
                case 20:
                    LuPaintBucket = (_b.sent()).LuPaintBucket;
                    return [2 /*return*/, LuPaintBucket];
                case 21: return [4 /*yield*/, import("react-icons/lu")];
                case 22:
                    LuPaintRoller = (_b.sent()).LuPaintRoller;
                    return [2 /*return*/, LuPaintRoller];
                case 23: return [4 /*yield*/, import("react-icons/lu")];
                case 24:
                    LuPaintbrushVertical = (_b.sent()).LuPaintbrushVertical;
                    return [2 /*return*/, LuPaintbrushVertical];
                case 25: return [4 /*yield*/, import("react-icons/lu")];
                case 26:
                    LuPaintbrush = (_b.sent()).LuPaintbrush;
                    return [2 /*return*/, LuPaintbrush];
                case 27: return [4 /*yield*/, import("react-icons/lu")];
                case 28:
                    LuPalette = (_b.sent()).LuPalette;
                    return [2 /*return*/, LuPalette];
                case 29: return [4 /*yield*/, import("react-icons/lu")];
                case 30:
                    LuPanelBottomClose = (_b.sent()).LuPanelBottomClose;
                    return [2 /*return*/, LuPanelBottomClose];
                case 31: return [4 /*yield*/, import("react-icons/lu")];
                case 32:
                    LuPanelBottomDashed = (_b.sent()).LuPanelBottomDashed;
                    return [2 /*return*/, LuPanelBottomDashed];
                case 33: return [4 /*yield*/, import("react-icons/lu")];
                case 34:
                    LuPanelBottomOpen = (_b.sent()).LuPanelBottomOpen;
                    return [2 /*return*/, LuPanelBottomOpen];
                case 35: return [4 /*yield*/, import("react-icons/lu")];
                case 36:
                    LuPanelBottom = (_b.sent()).LuPanelBottom;
                    return [2 /*return*/, LuPanelBottom];
                case 37: return [4 /*yield*/, import("react-icons/lu")];
                case 38:
                    LuPanelLeftClose = (_b.sent()).LuPanelLeftClose;
                    return [2 /*return*/, LuPanelLeftClose];
                case 39: return [4 /*yield*/, import("react-icons/lu")];
                case 40:
                    LuPanelLeftDashed = (_b.sent()).LuPanelLeftDashed;
                    return [2 /*return*/, LuPanelLeftDashed];
                case 41: return [4 /*yield*/, import("react-icons/lu")];
                case 42:
                    LuPanelLeftOpen = (_b.sent()).LuPanelLeftOpen;
                    return [2 /*return*/, LuPanelLeftOpen];
                case 43: return [4 /*yield*/, import("react-icons/lu")];
                case 44:
                    LuPanelLeft = (_b.sent()).LuPanelLeft;
                    return [2 /*return*/, LuPanelLeft];
                case 45: return [4 /*yield*/, import("react-icons/lu")];
                case 46:
                    LuPanelRightClose = (_b.sent()).LuPanelRightClose;
                    return [2 /*return*/, LuPanelRightClose];
                case 47: return [4 /*yield*/, import("react-icons/lu")];
                case 48:
                    LuPanelRightDashed = (_b.sent()).LuPanelRightDashed;
                    return [2 /*return*/, LuPanelRightDashed];
                case 49: return [4 /*yield*/, import("react-icons/lu")];
                case 50:
                    LuPanelRightOpen = (_b.sent()).LuPanelRightOpen;
                    return [2 /*return*/, LuPanelRightOpen];
                case 51: return [4 /*yield*/, import("react-icons/lu")];
                case 52:
                    LuPanelRight = (_b.sent()).LuPanelRight;
                    return [2 /*return*/, LuPanelRight];
                case 53: return [4 /*yield*/, import("react-icons/lu")];
                case 54:
                    LuPanelTopClose = (_b.sent()).LuPanelTopClose;
                    return [2 /*return*/, LuPanelTopClose];
                case 55: return [4 /*yield*/, import("react-icons/lu")];
                case 56:
                    LuPanelTopDashed = (_b.sent()).LuPanelTopDashed;
                    return [2 /*return*/, LuPanelTopDashed];
                case 57: return [4 /*yield*/, import("react-icons/lu")];
                case 58:
                    LuPanelTopOpen = (_b.sent()).LuPanelTopOpen;
                    return [2 /*return*/, LuPanelTopOpen];
                case 59: return [4 /*yield*/, import("react-icons/lu")];
                case 60:
                    LuPanelTop = (_b.sent()).LuPanelTop;
                    return [2 /*return*/, LuPanelTop];
                case 61: return [4 /*yield*/, import("react-icons/lu")];
                case 62:
                    LuPanelsLeftBottom = (_b.sent()).LuPanelsLeftBottom;
                    return [2 /*return*/, LuPanelsLeftBottom];
                case 63: return [4 /*yield*/, import("react-icons/lu")];
                case 64:
                    LuPanelsRightBottom = (_b.sent()).LuPanelsRightBottom;
                    return [2 /*return*/, LuPanelsRightBottom];
                case 65: return [4 /*yield*/, import("react-icons/lu")];
                case 66:
                    LuPanelsTopLeft = (_b.sent()).LuPanelsTopLeft;
                    return [2 /*return*/, LuPanelsTopLeft];
                case 67: return [4 /*yield*/, import("react-icons/lu")];
                case 68:
                    LuPaperclip = (_b.sent()).LuPaperclip;
                    return [2 /*return*/, LuPaperclip];
                case 69: return [4 /*yield*/, import("react-icons/lu")];
                case 70:
                    LuParentheses = (_b.sent()).LuParentheses;
                    return [2 /*return*/, LuParentheses];
                case 71: return [4 /*yield*/, import("react-icons/lu")];
                case 72:
                    LuParkingMeter = (_b.sent()).LuParkingMeter;
                    return [2 /*return*/, LuParkingMeter];
                case 73: return [4 /*yield*/, import("react-icons/lu")];
                case 74:
                    LuPartyPopper = (_b.sent()).LuPartyPopper;
                    return [2 /*return*/, LuPartyPopper];
                case 75: return [4 /*yield*/, import("react-icons/lu")];
                case 76:
                    LuPause = (_b.sent()).LuPause;
                    return [2 /*return*/, LuPause];
                case 77: return [4 /*yield*/, import("react-icons/lu")];
                case 78:
                    LuPawPrint = (_b.sent()).LuPawPrint;
                    return [2 /*return*/, LuPawPrint];
                case 79: return [4 /*yield*/, import("react-icons/lu")];
                case 80:
                    LuPcCase = (_b.sent()).LuPcCase;
                    return [2 /*return*/, LuPcCase];
                case 81: return [4 /*yield*/, import("react-icons/lu")];
                case 82:
                    LuPenLine = (_b.sent()).LuPenLine;
                    return [2 /*return*/, LuPenLine];
                case 83: return [4 /*yield*/, import("react-icons/lu")];
                case 84:
                    LuPenOff = (_b.sent()).LuPenOff;
                    return [2 /*return*/, LuPenOff];
                case 85: return [4 /*yield*/, import("react-icons/lu")];
                case 86:
                    LuPenTool = (_b.sent()).LuPenTool;
                    return [2 /*return*/, LuPenTool];
                case 87: return [4 /*yield*/, import("react-icons/lu")];
                case 88:
                    LuPen = (_b.sent()).LuPen;
                    return [2 /*return*/, LuPen];
                case 89: return [4 /*yield*/, import("react-icons/lu")];
                case 90:
                    LuPencilLine = (_b.sent()).LuPencilLine;
                    return [2 /*return*/, LuPencilLine];
                case 91: return [4 /*yield*/, import("react-icons/lu")];
                case 92:
                    LuPencilOff = (_b.sent()).LuPencilOff;
                    return [2 /*return*/, LuPencilOff];
                case 93: return [4 /*yield*/, import("react-icons/lu")];
                case 94:
                    LuPencilRuler = (_b.sent()).LuPencilRuler;
                    return [2 /*return*/, LuPencilRuler];
                case 95: return [4 /*yield*/, import("react-icons/lu")];
                case 96:
                    LuPencil = (_b.sent()).LuPencil;
                    return [2 /*return*/, LuPencil];
                case 97: return [4 /*yield*/, import("react-icons/lu")];
                case 98:
                    LuPentagon = (_b.sent()).LuPentagon;
                    return [2 /*return*/, LuPentagon];
                case 99: return [4 /*yield*/, import("react-icons/lu")];
                case 100:
                    LuPercent = (_b.sent()).LuPercent;
                    return [2 /*return*/, LuPercent];
                case 101: return [4 /*yield*/, import("react-icons/lu")];
                case 102:
                    LuPersonStanding = (_b.sent()).LuPersonStanding;
                    return [2 /*return*/, LuPersonStanding];
                case 103: return [4 /*yield*/, import("react-icons/lu")];
                case 104:
                    LuPhilippinePeso = (_b.sent()).LuPhilippinePeso;
                    return [2 /*return*/, LuPhilippinePeso];
                case 105: return [4 /*yield*/, import("react-icons/lu")];
                case 106:
                    LuPhoneCall = (_b.sent()).LuPhoneCall;
                    return [2 /*return*/, LuPhoneCall];
                case 107: return [4 /*yield*/, import("react-icons/lu")];
                case 108:
                    LuPhoneForwarded = (_b.sent()).LuPhoneForwarded;
                    return [2 /*return*/, LuPhoneForwarded];
                case 109: return [4 /*yield*/, import("react-icons/lu")];
                case 110:
                    LuPhoneIncoming = (_b.sent()).LuPhoneIncoming;
                    return [2 /*return*/, LuPhoneIncoming];
                case 111: return [4 /*yield*/, import("react-icons/lu")];
                case 112:
                    LuPhoneMissed = (_b.sent()).LuPhoneMissed;
                    return [2 /*return*/, LuPhoneMissed];
                case 113: return [4 /*yield*/, import("react-icons/lu")];
                case 114:
                    LuPhoneOff = (_b.sent()).LuPhoneOff;
                    return [2 /*return*/, LuPhoneOff];
                case 115: return [4 /*yield*/, import("react-icons/lu")];
                case 116:
                    LuPhoneOutgoing = (_b.sent()).LuPhoneOutgoing;
                    return [2 /*return*/, LuPhoneOutgoing];
                case 117: return [4 /*yield*/, import("react-icons/lu")];
                case 118:
                    LuPhone = (_b.sent()).LuPhone;
                    return [2 /*return*/, LuPhone];
                case 119: return [4 /*yield*/, import("react-icons/lu")];
                case 120:
                    LuPi = (_b.sent()).LuPi;
                    return [2 /*return*/, LuPi];
                case 121: return [4 /*yield*/, import("react-icons/lu")];
                case 122:
                    LuPiano = (_b.sent()).LuPiano;
                    return [2 /*return*/, LuPiano];
                case 123: return [4 /*yield*/, import("react-icons/lu")];
                case 124:
                    LuPickaxe = (_b.sent()).LuPickaxe;
                    return [2 /*return*/, LuPickaxe];
                case 125: return [4 /*yield*/, import("react-icons/lu")];
                case 126:
                    LuPictureInPicture2 = (_b.sent()).LuPictureInPicture2;
                    return [2 /*return*/, LuPictureInPicture2];
                case 127: return [4 /*yield*/, import("react-icons/lu")];
                case 128:
                    LuPictureInPicture = (_b.sent()).LuPictureInPicture;
                    return [2 /*return*/, LuPictureInPicture];
                case 129: return [4 /*yield*/, import("react-icons/lu")];
                case 130:
                    LuPiggyBank = (_b.sent()).LuPiggyBank;
                    return [2 /*return*/, LuPiggyBank];
                case 131: return [4 /*yield*/, import("react-icons/lu")];
                case 132:
                    LuPilcrowLeft = (_b.sent()).LuPilcrowLeft;
                    return [2 /*return*/, LuPilcrowLeft];
                case 133: return [4 /*yield*/, import("react-icons/lu")];
                case 134:
                    LuPilcrowRight = (_b.sent()).LuPilcrowRight;
                    return [2 /*return*/, LuPilcrowRight];
                case 135: return [4 /*yield*/, import("react-icons/lu")];
                case 136:
                    LuPilcrow = (_b.sent()).LuPilcrow;
                    return [2 /*return*/, LuPilcrow];
                case 137: return [4 /*yield*/, import("react-icons/lu")];
                case 138:
                    LuPillBottle = (_b.sent()).LuPillBottle;
                    return [2 /*return*/, LuPillBottle];
                case 139: return [4 /*yield*/, import("react-icons/lu")];
                case 140:
                    LuPill = (_b.sent()).LuPill;
                    return [2 /*return*/, LuPill];
                case 141: return [4 /*yield*/, import("react-icons/lu")];
                case 142:
                    LuPinOff = (_b.sent()).LuPinOff;
                    return [2 /*return*/, LuPinOff];
                case 143: return [4 /*yield*/, import("react-icons/lu")];
                case 144:
                    LuPin = (_b.sent()).LuPin;
                    return [2 /*return*/, LuPin];
                case 145: return [4 /*yield*/, import("react-icons/lu")];
                case 146:
                    LuPipette = (_b.sent()).LuPipette;
                    return [2 /*return*/, LuPipette];
                case 147: return [4 /*yield*/, import("react-icons/lu")];
                case 148:
                    LuPizza = (_b.sent()).LuPizza;
                    return [2 /*return*/, LuPizza];
                case 149: return [4 /*yield*/, import("react-icons/lu")];
                case 150:
                    LuPlaneLanding = (_b.sent()).LuPlaneLanding;
                    return [2 /*return*/, LuPlaneLanding];
                case 151: return [4 /*yield*/, import("react-icons/lu")];
                case 152:
                    LuPlaneTakeoff = (_b.sent()).LuPlaneTakeoff;
                    return [2 /*return*/, LuPlaneTakeoff];
                case 153: return [4 /*yield*/, import("react-icons/lu")];
                case 154:
                    LuPlane = (_b.sent()).LuPlane;
                    return [2 /*return*/, LuPlane];
                case 155: return [4 /*yield*/, import("react-icons/lu")];
                case 156:
                    LuPlay = (_b.sent()).LuPlay;
                    return [2 /*return*/, LuPlay];
                case 157: return [4 /*yield*/, import("react-icons/lu")];
                case 158:
                    LuPlug2 = (_b.sent()).LuPlug2;
                    return [2 /*return*/, LuPlug2];
                case 159: return [4 /*yield*/, import("react-icons/lu")];
                case 160:
                    LuPlugZap = (_b.sent()).LuPlugZap;
                    return [2 /*return*/, LuPlugZap];
                case 161: return [4 /*yield*/, import("react-icons/lu")];
                case 162:
                    LuPlug = (_b.sent()).LuPlug;
                    return [2 /*return*/, LuPlug];
                case 163: return [4 /*yield*/, import("react-icons/lu")];
                case 164:
                    LuPlus = (_b.sent()).LuPlus;
                    return [2 /*return*/, LuPlus];
                case 165: return [4 /*yield*/, import("react-icons/lu")];
                case 166:
                    LuPocketKnife = (_b.sent()).LuPocketKnife;
                    return [2 /*return*/, LuPocketKnife];
                case 167: return [4 /*yield*/, import("react-icons/lu")];
                case 168:
                    LuPocket = (_b.sent()).LuPocket;
                    return [2 /*return*/, LuPocket];
                case 169: return [4 /*yield*/, import("react-icons/lu")];
                case 170:
                    LuPodcast = (_b.sent()).LuPodcast;
                    return [2 /*return*/, LuPodcast];
                case 171: return [4 /*yield*/, import("react-icons/lu")];
                case 172:
                    LuPointerOff = (_b.sent()).LuPointerOff;
                    return [2 /*return*/, LuPointerOff];
                case 173: return [4 /*yield*/, import("react-icons/lu")];
                case 174:
                    LuPointer = (_b.sent()).LuPointer;
                    return [2 /*return*/, LuPointer];
                case 175: return [4 /*yield*/, import("react-icons/lu")];
                case 176:
                    LuPopcorn = (_b.sent()).LuPopcorn;
                    return [2 /*return*/, LuPopcorn];
                case 177: return [4 /*yield*/, import("react-icons/lu")];
                case 178:
                    LuPopsicle = (_b.sent()).LuPopsicle;
                    return [2 /*return*/, LuPopsicle];
                case 179: return [4 /*yield*/, import("react-icons/lu")];
                case 180:
                    LuPoundSterling = (_b.sent()).LuPoundSterling;
                    return [2 /*return*/, LuPoundSterling];
                case 181: return [4 /*yield*/, import("react-icons/lu")];
                case 182:
                    LuPowerOff = (_b.sent()).LuPowerOff;
                    return [2 /*return*/, LuPowerOff];
                case 183: return [4 /*yield*/, import("react-icons/lu")];
                case 184:
                    LuPower = (_b.sent()).LuPower;
                    return [2 /*return*/, LuPower];
                case 185: return [4 /*yield*/, import("react-icons/lu")];
                case 186:
                    LuPresentation = (_b.sent()).LuPresentation;
                    return [2 /*return*/, LuPresentation];
                case 187: return [4 /*yield*/, import("react-icons/lu")];
                case 188:
                    LuPrinterCheck = (_b.sent()).LuPrinterCheck;
                    return [2 /*return*/, LuPrinterCheck];
                case 189: return [4 /*yield*/, import("react-icons/lu")];
                case 190:
                    LuPrinter = (_b.sent()).LuPrinter;
                    return [2 /*return*/, LuPrinter];
                case 191: return [4 /*yield*/, import("react-icons/lu")];
                case 192:
                    LuProjector = (_b.sent()).LuProjector;
                    return [2 /*return*/, LuProjector];
                case 193: return [4 /*yield*/, import("react-icons/lu")];
                case 194:
                    LuProportions = (_b.sent()).LuProportions;
                    return [2 /*return*/, LuProportions];
                case 195: return [4 /*yield*/, import("react-icons/lu")];
                case 196:
                    LuPuzzle = (_b.sent()).LuPuzzle;
                    return [2 /*return*/, LuPuzzle];
                case 197: return [4 /*yield*/, import("react-icons/lu")];
                case 198:
                    LuPyramid = (_b.sent()).LuPyramid;
                    return [2 /*return*/, LuPyramid];
                case 199: return [4 /*yield*/, import("react-icons/lu")];
                case 200:
                    LuQrCode = (_b.sent()).LuQrCode;
                    return [2 /*return*/, LuQrCode];
                case 201: return [4 /*yield*/, import("react-icons/lu")];
                case 202:
                    LuQuote = (_b.sent()).LuQuote;
                    return [2 /*return*/, LuQuote];
                case 203: return [4 /*yield*/, import("react-icons/lu")];
                case 204:
                    LuRabbit = (_b.sent()).LuRabbit;
                    return [2 /*return*/, LuRabbit];
                case 205: return [4 /*yield*/, import("react-icons/lu")];
                case 206:
                    LuRadar = (_b.sent()).LuRadar;
                    return [2 /*return*/, LuRadar];
                case 207: return [4 /*yield*/, import("react-icons/lu")];
                case 208:
                    LuRadiation = (_b.sent()).LuRadiation;
                    return [2 /*return*/, LuRadiation];
                case 209: return [4 /*yield*/, import("react-icons/lu")];
                case 210:
                    LuRadical = (_b.sent()).LuRadical;
                    return [2 /*return*/, LuRadical];
                case 211: return [4 /*yield*/, import("react-icons/lu")];
                case 212:
                    LuRadioReceiver = (_b.sent()).LuRadioReceiver;
                    return [2 /*return*/, LuRadioReceiver];
                case 213: return [4 /*yield*/, import("react-icons/lu")];
                case 214:
                    LuRadioTower = (_b.sent()).LuRadioTower;
                    return [2 /*return*/, LuRadioTower];
                case 215: return [4 /*yield*/, import("react-icons/lu")];
                case 216:
                    LuRadio = (_b.sent()).LuRadio;
                    return [2 /*return*/, LuRadio];
                case 217: return [4 /*yield*/, import("react-icons/lu")];
                case 218:
                    LuRadius = (_b.sent()).LuRadius;
                    return [2 /*return*/, LuRadius];
                case 219: return [4 /*yield*/, import("react-icons/lu")];
                case 220:
                    LuRailSymbol = (_b.sent()).LuRailSymbol;
                    return [2 /*return*/, LuRailSymbol];
                case 221: return [4 /*yield*/, import("react-icons/lu")];
                case 222:
                    LuRainbow = (_b.sent()).LuRainbow;
                    return [2 /*return*/, LuRainbow];
                case 223: return [4 /*yield*/, import("react-icons/lu")];
                case 224:
                    LuRat = (_b.sent()).LuRat;
                    return [2 /*return*/, LuRat];
                case 225: return [4 /*yield*/, import("react-icons/lu")];
                case 226:
                    LuRatio = (_b.sent()).LuRatio;
                    return [2 /*return*/, LuRatio];
                case 227: return [4 /*yield*/, import("react-icons/lu")];
                case 228:
                    LuReceiptCent = (_b.sent()).LuReceiptCent;
                    return [2 /*return*/, LuReceiptCent];
                case 229: return [4 /*yield*/, import("react-icons/lu")];
                case 230:
                    LuReceiptEuro = (_b.sent()).LuReceiptEuro;
                    return [2 /*return*/, LuReceiptEuro];
                case 231: return [4 /*yield*/, import("react-icons/lu")];
                case 232:
                    LuReceiptIndianRupee = (_b.sent()).LuReceiptIndianRupee;
                    return [2 /*return*/, LuReceiptIndianRupee];
                case 233: return [4 /*yield*/, import("react-icons/lu")];
                case 234:
                    LuReceiptJapaneseYen = (_b.sent()).LuReceiptJapaneseYen;
                    return [2 /*return*/, LuReceiptJapaneseYen];
                case 235: return [4 /*yield*/, import("react-icons/lu")];
                case 236:
                    LuReceiptPoundSterling = (_b.sent()).LuReceiptPoundSterling;
                    return [2 /*return*/, LuReceiptPoundSterling];
                case 237: return [4 /*yield*/, import("react-icons/lu")];
                case 238:
                    LuReceiptRussianRuble = (_b.sent()).LuReceiptRussianRuble;
                    return [2 /*return*/, LuReceiptRussianRuble];
                case 239: return [4 /*yield*/, import("react-icons/lu")];
                case 240:
                    LuReceiptSwissFranc = (_b.sent()).LuReceiptSwissFranc;
                    return [2 /*return*/, LuReceiptSwissFranc];
                case 241: return [4 /*yield*/, import("react-icons/lu")];
                case 242:
                    LuReceiptText = (_b.sent()).LuReceiptText;
                    return [2 /*return*/, LuReceiptText];
                case 243: return [4 /*yield*/, import("react-icons/lu")];
                case 244:
                    LuReceipt = (_b.sent()).LuReceipt;
                    return [2 /*return*/, LuReceipt];
                case 245: return [4 /*yield*/, import("react-icons/lu")];
                case 246:
                    LuRectangleEllipsis = (_b.sent()).LuRectangleEllipsis;
                    return [2 /*return*/, LuRectangleEllipsis];
                case 247: return [4 /*yield*/, import("react-icons/lu")];
                case 248:
                    LuRectangleHorizontal = (_b.sent()).LuRectangleHorizontal;
                    return [2 /*return*/, LuRectangleHorizontal];
                case 249: return [4 /*yield*/, import("react-icons/lu")];
                case 250:
                    LuRectangleVertical = (_b.sent()).LuRectangleVertical;
                    return [2 /*return*/, LuRectangleVertical];
                case 251: return [4 /*yield*/, import("react-icons/lu")];
                case 252:
                    LuRecycle = (_b.sent()).LuRecycle;
                    return [2 /*return*/, LuRecycle];
                case 253: return [4 /*yield*/, import("react-icons/lu")];
                case 254:
                    LuRedo2 = (_b.sent()).LuRedo2;
                    return [2 /*return*/, LuRedo2];
                case 255: return [4 /*yield*/, import("react-icons/lu")];
                case 256:
                    LuRedoDot = (_b.sent()).LuRedoDot;
                    return [2 /*return*/, LuRedoDot];
                case 257: return [4 /*yield*/, import("react-icons/lu")];
                case 258:
                    LuRedo = (_b.sent()).LuRedo;
                    return [2 /*return*/, LuRedo];
                case 259: return [4 /*yield*/, import("react-icons/lu")];
                case 260:
                    LuRefreshCcwDot = (_b.sent()).LuRefreshCcwDot;
                    return [2 /*return*/, LuRefreshCcwDot];
                case 261: return [4 /*yield*/, import("react-icons/lu")];
                case 262:
                    LuRefreshCcw = (_b.sent()).LuRefreshCcw;
                    return [2 /*return*/, LuRefreshCcw];
                case 263: return [4 /*yield*/, import("react-icons/lu")];
                case 264:
                    LuRefreshCwOff = (_b.sent()).LuRefreshCwOff;
                    return [2 /*return*/, LuRefreshCwOff];
                case 265: return [4 /*yield*/, import("react-icons/lu")];
                case 266:
                    LuRefreshCw = (_b.sent()).LuRefreshCw;
                    return [2 /*return*/, LuRefreshCw];
                case 267: return [4 /*yield*/, import("react-icons/lu")];
                case 268:
                    LuRefrigerator = (_b.sent()).LuRefrigerator;
                    return [2 /*return*/, LuRefrigerator];
                case 269: return [4 /*yield*/, import("react-icons/lu")];
                case 270:
                    LuRegex = (_b.sent()).LuRegex;
                    return [2 /*return*/, LuRegex];
                case 271: return [4 /*yield*/, import("react-icons/lu")];
                case 272:
                    LuRemoveFormatting = (_b.sent()).LuRemoveFormatting;
                    return [2 /*return*/, LuRemoveFormatting];
                case 273: return [4 /*yield*/, import("react-icons/lu")];
                case 274:
                    LuRepeat1 = (_b.sent()).LuRepeat1;
                    return [2 /*return*/, LuRepeat1];
                case 275: return [4 /*yield*/, import("react-icons/lu")];
                case 276:
                    LuRepeat2 = (_b.sent()).LuRepeat2;
                    return [2 /*return*/, LuRepeat2];
                case 277: return [4 /*yield*/, import("react-icons/lu")];
                case 278:
                    LuRepeat = (_b.sent()).LuRepeat;
                    return [2 /*return*/, LuRepeat];
                case 279: return [4 /*yield*/, import("react-icons/lu")];
                case 280:
                    LuReplaceAll = (_b.sent()).LuReplaceAll;
                    return [2 /*return*/, LuReplaceAll];
                case 281: return [4 /*yield*/, import("react-icons/lu")];
                case 282:
                    LuReplace = (_b.sent()).LuReplace;
                    return [2 /*return*/, LuReplace];
                case 283: return [4 /*yield*/, import("react-icons/lu")];
                case 284:
                    LuReplyAll = (_b.sent()).LuReplyAll;
                    return [2 /*return*/, LuReplyAll];
                case 285: return [4 /*yield*/, import("react-icons/lu")];
                case 286:
                    LuReply = (_b.sent()).LuReply;
                    return [2 /*return*/, LuReply];
                case 287: return [4 /*yield*/, import("react-icons/lu")];
                case 288:
                    LuRewind = (_b.sent()).LuRewind;
                    return [2 /*return*/, LuRewind];
                case 289: return [4 /*yield*/, import("react-icons/lu")];
                case 290:
                    LuRibbon = (_b.sent()).LuRibbon;
                    return [2 /*return*/, LuRibbon];
                case 291: return [4 /*yield*/, import("react-icons/lu")];
                case 292:
                    LuRocket = (_b.sent()).LuRocket;
                    return [2 /*return*/, LuRocket];
                case 293: return [4 /*yield*/, import("react-icons/lu")];
                case 294:
                    LuRockingChair = (_b.sent()).LuRockingChair;
                    return [2 /*return*/, LuRockingChair];
                case 295: return [4 /*yield*/, import("react-icons/lu")];
                case 296:
                    LuRollerCoaster = (_b.sent()).LuRollerCoaster;
                    return [2 /*return*/, LuRollerCoaster];
                case 297: return [4 /*yield*/, import("react-icons/lu")];
                case 298:
                    LuRotate3D = (_b.sent()).LuRotate3D;
                    return [2 /*return*/, LuRotate3D];
                case 299: return [4 /*yield*/, import("react-icons/lu")];
                case 300:
                    LuRotateCcwSquare = (_b.sent()).LuRotateCcwSquare;
                    return [2 /*return*/, LuRotateCcwSquare];
                case 301: return [4 /*yield*/, import("react-icons/lu")];
                case 302:
                    LuRotateCcw = (_b.sent()).LuRotateCcw;
                    return [2 /*return*/, LuRotateCcw];
                case 303: return [4 /*yield*/, import("react-icons/lu")];
                case 304:
                    LuRotateCwSquare = (_b.sent()).LuRotateCwSquare;
                    return [2 /*return*/, LuRotateCwSquare];
                case 305: return [4 /*yield*/, import("react-icons/lu")];
                case 306:
                    LuRotateCw = (_b.sent()).LuRotateCw;
                    return [2 /*return*/, LuRotateCw];
                case 307: return [4 /*yield*/, import("react-icons/lu")];
                case 308:
                    LuRouteOff = (_b.sent()).LuRouteOff;
                    return [2 /*return*/, LuRouteOff];
                case 309: return [4 /*yield*/, import("react-icons/lu")];
                case 310:
                    LuRoute = (_b.sent()).LuRoute;
                    return [2 /*return*/, LuRoute];
                case 311: return [4 /*yield*/, import("react-icons/lu")];
                case 312:
                    LuRouter = (_b.sent()).LuRouter;
                    return [2 /*return*/, LuRouter];
                case 313: return [4 /*yield*/, import("react-icons/lu")];
                case 314:
                    LuRows2 = (_b.sent()).LuRows2;
                    return [2 /*return*/, LuRows2];
                case 315: return [4 /*yield*/, import("react-icons/lu")];
                case 316:
                    LuRows3 = (_b.sent()).LuRows3;
                    return [2 /*return*/, LuRows3];
                case 317: return [4 /*yield*/, import("react-icons/lu")];
                case 318:
                    LuRows4 = (_b.sent()).LuRows4;
                    return [2 /*return*/, LuRows4];
                case 319: return [4 /*yield*/, import("react-icons/lu")];
                case 320:
                    LuRss = (_b.sent()).LuRss;
                    return [2 /*return*/, LuRss];
                case 321: return [4 /*yield*/, import("react-icons/lu")];
                case 322:
                    LuRuler = (_b.sent()).LuRuler;
                    return [2 /*return*/, LuRuler];
                case 323: return [4 /*yield*/, import("react-icons/lu")];
                case 324:
                    LuRussianRuble = (_b.sent()).LuRussianRuble;
                    return [2 /*return*/, LuRussianRuble];
                case 325: return [4 /*yield*/, import("react-icons/lu")];
                case 326:
                    LuSailboat = (_b.sent()).LuSailboat;
                    return [2 /*return*/, LuSailboat];
                case 327: return [4 /*yield*/, import("react-icons/lu")];
                case 328:
                    LuSalad = (_b.sent()).LuSalad;
                    return [2 /*return*/, LuSalad];
                case 329: return [4 /*yield*/, import("react-icons/lu")];
                case 330:
                    LuSandwich = (_b.sent()).LuSandwich;
                    return [2 /*return*/, LuSandwich];
                case 331: return [4 /*yield*/, import("react-icons/lu")];
                case 332:
                    LuSatelliteDish = (_b.sent()).LuSatelliteDish;
                    return [2 /*return*/, LuSatelliteDish];
                case 333: return [4 /*yield*/, import("react-icons/lu")];
                case 334:
                    LuSatellite = (_b.sent()).LuSatellite;
                    return [2 /*return*/, LuSatellite];
                case 335: return [4 /*yield*/, import("react-icons/lu")];
                case 336:
                    LuSaveAll = (_b.sent()).LuSaveAll;
                    return [2 /*return*/, LuSaveAll];
                case 337: return [4 /*yield*/, import("react-icons/lu")];
                case 338:
                    LuSaveOff = (_b.sent()).LuSaveOff;
                    return [2 /*return*/, LuSaveOff];
                case 339: return [4 /*yield*/, import("react-icons/lu")];
                case 340:
                    LuSave = (_b.sent()).LuSave;
                    return [2 /*return*/, LuSave];
                case 341: return [4 /*yield*/, import("react-icons/lu")];
                case 342:
                    LuScale3D = (_b.sent()).LuScale3D;
                    return [2 /*return*/, LuScale3D];
                case 343: return [4 /*yield*/, import("react-icons/lu")];
                case 344:
                    LuScale = (_b.sent()).LuScale;
                    return [2 /*return*/, LuScale];
                case 345: return [4 /*yield*/, import("react-icons/lu")];
                case 346:
                    LuScaling = (_b.sent()).LuScaling;
                    return [2 /*return*/, LuScaling];
                case 347: return [4 /*yield*/, import("react-icons/lu")];
                case 348:
                    LuScanBarcode = (_b.sent()).LuScanBarcode;
                    return [2 /*return*/, LuScanBarcode];
                case 349: return [4 /*yield*/, import("react-icons/lu")];
                case 350:
                    LuScanEye = (_b.sent()).LuScanEye;
                    return [2 /*return*/, LuScanEye];
                case 351: return [4 /*yield*/, import("react-icons/lu")];
                case 352:
                    LuScanFace = (_b.sent()).LuScanFace;
                    return [2 /*return*/, LuScanFace];
                case 353: return [4 /*yield*/, import("react-icons/lu")];
                case 354:
                    LuScanLine = (_b.sent()).LuScanLine;
                    return [2 /*return*/, LuScanLine];
                case 355: return [4 /*yield*/, import("react-icons/lu")];
                case 356:
                    LuScanQrCode = (_b.sent()).LuScanQrCode;
                    return [2 /*return*/, LuScanQrCode];
                case 357: return [4 /*yield*/, import("react-icons/lu")];
                case 358:
                    LuScanSearch = (_b.sent()).LuScanSearch;
                    return [2 /*return*/, LuScanSearch];
                case 359: return [4 /*yield*/, import("react-icons/lu")];
                case 360:
                    LuScanText = (_b.sent()).LuScanText;
                    return [2 /*return*/, LuScanText];
                case 361: return [4 /*yield*/, import("react-icons/lu")];
                case 362:
                    LuScan = (_b.sent()).LuScan;
                    return [2 /*return*/, LuScan];
                case 363: return [4 /*yield*/, import("react-icons/lu")];
                case 364:
                    LuSchool = (_b.sent()).LuSchool;
                    return [2 /*return*/, LuSchool];
                case 365: return [4 /*yield*/, import("react-icons/lu")];
                case 366:
                    LuScissorsLineDashed = (_b.sent()).LuScissorsLineDashed;
                    return [2 /*return*/, LuScissorsLineDashed];
                case 367: return [4 /*yield*/, import("react-icons/lu")];
                case 368:
                    LuScissors = (_b.sent()).LuScissors;
                    return [2 /*return*/, LuScissors];
                case 369: return [4 /*yield*/, import("react-icons/lu")];
                case 370:
                    LuScreenShareOff = (_b.sent()).LuScreenShareOff;
                    return [2 /*return*/, LuScreenShareOff];
                case 371: return [4 /*yield*/, import("react-icons/lu")];
                case 372:
                    LuScreenShare = (_b.sent()).LuScreenShare;
                    return [2 /*return*/, LuScreenShare];
                case 373: return [4 /*yield*/, import("react-icons/lu")];
                case 374:
                    LuScrollText = (_b.sent()).LuScrollText;
                    return [2 /*return*/, LuScrollText];
                case 375: return [4 /*yield*/, import("react-icons/lu")];
                case 376:
                    LuScroll = (_b.sent()).LuScroll;
                    return [2 /*return*/, LuScroll];
                case 377: return [4 /*yield*/, import("react-icons/lu")];
                case 378:
                    LuSearchCheck = (_b.sent()).LuSearchCheck;
                    return [2 /*return*/, LuSearchCheck];
                case 379: return [4 /*yield*/, import("react-icons/lu")];
                case 380:
                    LuSearchCode = (_b.sent()).LuSearchCode;
                    return [2 /*return*/, LuSearchCode];
                case 381: return [4 /*yield*/, import("react-icons/lu")];
                case 382:
                    LuSearchSlash = (_b.sent()).LuSearchSlash;
                    return [2 /*return*/, LuSearchSlash];
                case 383: return [4 /*yield*/, import("react-icons/lu")];
                case 384:
                    LuSearchX = (_b.sent()).LuSearchX;
                    return [2 /*return*/, LuSearchX];
                case 385: return [4 /*yield*/, import("react-icons/lu")];
                case 386:
                    LuSearch = (_b.sent()).LuSearch;
                    return [2 /*return*/, LuSearch];
                case 387: return [4 /*yield*/, import("react-icons/lu")];
                case 388:
                    LuSection = (_b.sent()).LuSection;
                    return [2 /*return*/, LuSection];
                case 389: return [4 /*yield*/, import("react-icons/lu")];
                case 390:
                    LuSendHorizontal = (_b.sent()).LuSendHorizontal;
                    return [2 /*return*/, LuSendHorizontal];
                case 391: return [4 /*yield*/, import("react-icons/lu")];
                case 392:
                    LuSendToBack = (_b.sent()).LuSendToBack;
                    return [2 /*return*/, LuSendToBack];
                case 393: return [4 /*yield*/, import("react-icons/lu")];
                case 394:
                    LuSend = (_b.sent()).LuSend;
                    return [2 /*return*/, LuSend];
                case 395: return [4 /*yield*/, import("react-icons/lu")];
                case 396:
                    LuSeparatorHorizontal = (_b.sent()).LuSeparatorHorizontal;
                    return [2 /*return*/, LuSeparatorHorizontal];
                case 397: return [4 /*yield*/, import("react-icons/lu")];
                case 398:
                    LuSeparatorVertical = (_b.sent()).LuSeparatorVertical;
                    return [2 /*return*/, LuSeparatorVertical];
                case 399: return [4 /*yield*/, import("react-icons/lu")];
                case 400:
                    LuServerCog = (_b.sent()).LuServerCog;
                    return [2 /*return*/, LuServerCog];
                case 401: return [4 /*yield*/, import("react-icons/lu")];
                case 402:
                    LuServerCrash = (_b.sent()).LuServerCrash;
                    return [2 /*return*/, LuServerCrash];
                case 403: return [4 /*yield*/, import("react-icons/lu")];
                case 404:
                    LuServerOff = (_b.sent()).LuServerOff;
                    return [2 /*return*/, LuServerOff];
                case 405: return [4 /*yield*/, import("react-icons/lu")];
                case 406:
                    LuServer = (_b.sent()).LuServer;
                    return [2 /*return*/, LuServer];
                case 407: return [4 /*yield*/, import("react-icons/lu")];
                case 408:
                    LuSettings2 = (_b.sent()).LuSettings2;
                    return [2 /*return*/, LuSettings2];
                case 409: return [4 /*yield*/, import("react-icons/lu")];
                case 410:
                    LuSettings = (_b.sent()).LuSettings;
                    return [2 /*return*/, LuSettings];
                case 411: return [4 /*yield*/, import("react-icons/lu")];
                case 412:
                    LuShapes = (_b.sent()).LuShapes;
                    return [2 /*return*/, LuShapes];
                case 413: return [4 /*yield*/, import("react-icons/lu")];
                case 414:
                    LuShare2 = (_b.sent()).LuShare2;
                    return [2 /*return*/, LuShare2];
                case 415: return [4 /*yield*/, import("react-icons/lu")];
                case 416:
                    LuShare = (_b.sent()).LuShare;
                    return [2 /*return*/, LuShare];
                case 417: return [4 /*yield*/, import("react-icons/lu")];
                case 418:
                    LuSheet = (_b.sent()).LuSheet;
                    return [2 /*return*/, LuSheet];
                case 419: return [4 /*yield*/, import("react-icons/lu")];
                case 420:
                    LuShell = (_b.sent()).LuShell;
                    return [2 /*return*/, LuShell];
                case 421: return [4 /*yield*/, import("react-icons/lu")];
                case 422:
                    LuShieldAlert = (_b.sent()).LuShieldAlert;
                    return [2 /*return*/, LuShieldAlert];
                case 423: return [4 /*yield*/, import("react-icons/lu")];
                case 424:
                    LuShieldBan = (_b.sent()).LuShieldBan;
                    return [2 /*return*/, LuShieldBan];
                case 425: return [4 /*yield*/, import("react-icons/lu")];
                case 426:
                    LuShieldCheck = (_b.sent()).LuShieldCheck;
                    return [2 /*return*/, LuShieldCheck];
                case 427: return [4 /*yield*/, import("react-icons/lu")];
                case 428:
                    LuShieldEllipsis = (_b.sent()).LuShieldEllipsis;
                    return [2 /*return*/, LuShieldEllipsis];
                case 429: return [4 /*yield*/, import("react-icons/lu")];
                case 430:
                    LuShieldHalf = (_b.sent()).LuShieldHalf;
                    return [2 /*return*/, LuShieldHalf];
                case 431: return [4 /*yield*/, import("react-icons/lu")];
                case 432:
                    LuShieldMinus = (_b.sent()).LuShieldMinus;
                    return [2 /*return*/, LuShieldMinus];
                case 433: return [4 /*yield*/, import("react-icons/lu")];
                case 434:
                    LuShieldOff = (_b.sent()).LuShieldOff;
                    return [2 /*return*/, LuShieldOff];
                case 435: return [4 /*yield*/, import("react-icons/lu")];
                case 436:
                    LuShieldPlus = (_b.sent()).LuShieldPlus;
                    return [2 /*return*/, LuShieldPlus];
                case 437: return [4 /*yield*/, import("react-icons/lu")];
                case 438:
                    LuShieldQuestion = (_b.sent()).LuShieldQuestion;
                    return [2 /*return*/, LuShieldQuestion];
                case 439: return [4 /*yield*/, import("react-icons/lu")];
                case 440:
                    LuShieldX = (_b.sent()).LuShieldX;
                    return [2 /*return*/, LuShieldX];
                case 441: return [4 /*yield*/, import("react-icons/lu")];
                case 442:
                    LuShield = (_b.sent()).LuShield;
                    return [2 /*return*/, LuShield];
                case 443: return [4 /*yield*/, import("react-icons/lu")];
                case 444:
                    LuShipWheel = (_b.sent()).LuShipWheel;
                    return [2 /*return*/, LuShipWheel];
                case 445: return [4 /*yield*/, import("react-icons/lu")];
                case 446:
                    LuShip = (_b.sent()).LuShip;
                    return [2 /*return*/, LuShip];
                case 447: return [4 /*yield*/, import("react-icons/lu")];
                case 448:
                    LuShirt = (_b.sent()).LuShirt;
                    return [2 /*return*/, LuShirt];
                case 449: return [4 /*yield*/, import("react-icons/lu")];
                case 450:
                    LuShoppingBag = (_b.sent()).LuShoppingBag;
                    return [2 /*return*/, LuShoppingBag];
                case 451: return [4 /*yield*/, import("react-icons/lu")];
                case 452:
                    LuShoppingBasket = (_b.sent()).LuShoppingBasket;
                    return [2 /*return*/, LuShoppingBasket];
                case 453: return [4 /*yield*/, import("react-icons/lu")];
                case 454:
                    LuShoppingCart = (_b.sent()).LuShoppingCart;
                    return [2 /*return*/, LuShoppingCart];
                case 455: return [4 /*yield*/, import("react-icons/lu")];
                case 456:
                    LuShovel = (_b.sent()).LuShovel;
                    return [2 /*return*/, LuShovel];
                case 457: return [4 /*yield*/, import("react-icons/lu")];
                case 458:
                    LuShowerHead = (_b.sent()).LuShowerHead;
                    return [2 /*return*/, LuShowerHead];
                case 459: return [4 /*yield*/, import("react-icons/lu")];
                case 460:
                    LuShrink = (_b.sent()).LuShrink;
                    return [2 /*return*/, LuShrink];
                case 461: return [4 /*yield*/, import("react-icons/lu")];
                case 462:
                    LuShrub = (_b.sent()).LuShrub;
                    return [2 /*return*/, LuShrub];
                case 463: return [4 /*yield*/, import("react-icons/lu")];
                case 464:
                    LuShuffle = (_b.sent()).LuShuffle;
                    return [2 /*return*/, LuShuffle];
                case 465: return [4 /*yield*/, import("react-icons/lu")];
                case 466:
                    LuSigma = (_b.sent()).LuSigma;
                    return [2 /*return*/, LuSigma];
                case 467: return [4 /*yield*/, import("react-icons/lu")];
                case 468:
                    LuSignalHigh = (_b.sent()).LuSignalHigh;
                    return [2 /*return*/, LuSignalHigh];
                case 469: return [4 /*yield*/, import("react-icons/lu")];
                case 470:
                    LuSignalLow = (_b.sent()).LuSignalLow;
                    return [2 /*return*/, LuSignalLow];
                case 471: return [4 /*yield*/, import("react-icons/lu")];
                case 472:
                    LuSignalMedium = (_b.sent()).LuSignalMedium;
                    return [2 /*return*/, LuSignalMedium];
                case 473: return [4 /*yield*/, import("react-icons/lu")];
                case 474:
                    LuSignalZero = (_b.sent()).LuSignalZero;
                    return [2 /*return*/, LuSignalZero];
                case 475: return [4 /*yield*/, import("react-icons/lu")];
                case 476:
                    LuSignal = (_b.sent()).LuSignal;
                    return [2 /*return*/, LuSignal];
                case 477: return [4 /*yield*/, import("react-icons/lu")];
                case 478:
                    LuSignature = (_b.sent()).LuSignature;
                    return [2 /*return*/, LuSignature];
                case 479: return [4 /*yield*/, import("react-icons/lu")];
                case 480:
                    LuSignpostBig = (_b.sent()).LuSignpostBig;
                    return [2 /*return*/, LuSignpostBig];
                case 481: return [4 /*yield*/, import("react-icons/lu")];
                case 482:
                    LuSignpost = (_b.sent()).LuSignpost;
                    return [2 /*return*/, LuSignpost];
                case 483: return [4 /*yield*/, import("react-icons/lu")];
                case 484:
                    LuSiren = (_b.sent()).LuSiren;
                    return [2 /*return*/, LuSiren];
                case 485: return [4 /*yield*/, import("react-icons/lu")];
                case 486:
                    LuSkipBack = (_b.sent()).LuSkipBack;
                    return [2 /*return*/, LuSkipBack];
                case 487: return [4 /*yield*/, import("react-icons/lu")];
                case 488:
                    LuSkipForward = (_b.sent()).LuSkipForward;
                    return [2 /*return*/, LuSkipForward];
                case 489: return [4 /*yield*/, import("react-icons/lu")];
                case 490:
                    LuSkull = (_b.sent()).LuSkull;
                    return [2 /*return*/, LuSkull];
                case 491: return [4 /*yield*/, import("react-icons/lu")];
                case 492:
                    LuSlack = (_b.sent()).LuSlack;
                    return [2 /*return*/, LuSlack];
                case 493: return [4 /*yield*/, import("react-icons/lu")];
                case 494:
                    LuSlash = (_b.sent()).LuSlash;
                    return [2 /*return*/, LuSlash];
                case 495: return [4 /*yield*/, import("react-icons/lu")];
                case 496:
                    LuSlice = (_b.sent()).LuSlice;
                    return [2 /*return*/, LuSlice];
                case 497: return [4 /*yield*/, import("react-icons/lu")];
                case 498:
                    LuSlidersHorizontal = (_b.sent()).LuSlidersHorizontal;
                    return [2 /*return*/, LuSlidersHorizontal];
                case 499: return [4 /*yield*/, import("react-icons/lu")];
                case 500:
                    LuSlidersVertical = (_b.sent()).LuSlidersVertical;
                    return [2 /*return*/, LuSlidersVertical];
                case 501: return [4 /*yield*/, import("react-icons/lu")];
                case 502:
                    LuSmartphoneCharging = (_b.sent()).LuSmartphoneCharging;
                    return [2 /*return*/, LuSmartphoneCharging];
                case 503: return [4 /*yield*/, import("react-icons/lu")];
                case 504:
                    LuSmartphoneNfc = (_b.sent()).LuSmartphoneNfc;
                    return [2 /*return*/, LuSmartphoneNfc];
                case 505: return [4 /*yield*/, import("react-icons/lu")];
                case 506:
                    LuSmartphone = (_b.sent()).LuSmartphone;
                    return [2 /*return*/, LuSmartphone];
                case 507: return [4 /*yield*/, import("react-icons/lu")];
                case 508:
                    LuSmilePlus = (_b.sent()).LuSmilePlus;
                    return [2 /*return*/, LuSmilePlus];
                case 509: return [4 /*yield*/, import("react-icons/lu")];
                case 510:
                    LuSmile = (_b.sent()).LuSmile;
                    return [2 /*return*/, LuSmile];
                case 511: return [4 /*yield*/, import("react-icons/lu")];
                case 512:
                    LuSnail = (_b.sent()).LuSnail;
                    return [2 /*return*/, LuSnail];
                case 513: return [4 /*yield*/, import("react-icons/lu")];
                case 514:
                    LuSnowflake = (_b.sent()).LuSnowflake;
                    return [2 /*return*/, LuSnowflake];
                case 515: return [4 /*yield*/, import("react-icons/lu")];
                case 516:
                    LuSofa = (_b.sent()).LuSofa;
                    return [2 /*return*/, LuSofa];
                case 517: return [4 /*yield*/, import("react-icons/lu")];
                case 518:
                    LuSoup = (_b.sent()).LuSoup;
                    return [2 /*return*/, LuSoup];
                case 519: return [4 /*yield*/, import("react-icons/lu")];
                case 520:
                    LuSpace = (_b.sent()).LuSpace;
                    return [2 /*return*/, LuSpace];
                case 521: return [4 /*yield*/, import("react-icons/lu")];
                case 522:
                    LuSpade = (_b.sent()).LuSpade;
                    return [2 /*return*/, LuSpade];
                case 523: return [4 /*yield*/, import("react-icons/lu")];
                case 524:
                    LuSparkle = (_b.sent()).LuSparkle;
                    return [2 /*return*/, LuSparkle];
                case 525: return [4 /*yield*/, import("react-icons/lu")];
                case 526:
                    LuSparkles = (_b.sent()).LuSparkles;
                    return [2 /*return*/, LuSparkles];
                case 527: return [4 /*yield*/, import("react-icons/lu")];
                case 528:
                    LuSpeaker = (_b.sent()).LuSpeaker;
                    return [2 /*return*/, LuSpeaker];
                case 529: return [4 /*yield*/, import("react-icons/lu")];
                case 530:
                    LuSpeech = (_b.sent()).LuSpeech;
                    return [2 /*return*/, LuSpeech];
                case 531: return [4 /*yield*/, import("react-icons/lu")];
                case 532:
                    LuSpellCheck2 = (_b.sent()).LuSpellCheck2;
                    return [2 /*return*/, LuSpellCheck2];
                case 533: return [4 /*yield*/, import("react-icons/lu")];
                case 534:
                    LuSpellCheck = (_b.sent()).LuSpellCheck;
                    return [2 /*return*/, LuSpellCheck];
                case 535: return [4 /*yield*/, import("react-icons/lu")];
                case 536:
                    LuSpline = (_b.sent()).LuSpline;
                    return [2 /*return*/, LuSpline];
                case 537: return [4 /*yield*/, import("react-icons/lu")];
                case 538:
                    LuSplit = (_b.sent()).LuSplit;
                    return [2 /*return*/, LuSplit];
                case 539: return [4 /*yield*/, import("react-icons/lu")];
                case 540:
                    LuSprayCan = (_b.sent()).LuSprayCan;
                    return [2 /*return*/, LuSprayCan];
                case 541: return [4 /*yield*/, import("react-icons/lu")];
                case 542:
                    LuSprout = (_b.sent()).LuSprout;
                    return [2 /*return*/, LuSprout];
                case 543: return [4 /*yield*/, import("react-icons/lu")];
                case 544:
                    LuSquareActivity = (_b.sent()).LuSquareActivity;
                    return [2 /*return*/, LuSquareActivity];
                case 545: return [4 /*yield*/, import("react-icons/lu")];
                case 546:
                    LuSquareArrowDownLeft = (_b.sent()).LuSquareArrowDownLeft;
                    return [2 /*return*/, LuSquareArrowDownLeft];
                case 547: return [4 /*yield*/, import("react-icons/lu")];
                case 548:
                    LuSquareArrowDownRight = (_b.sent()).LuSquareArrowDownRight;
                    return [2 /*return*/, LuSquareArrowDownRight];
                case 549: return [4 /*yield*/, import("react-icons/lu")];
                case 550:
                    LuSquareArrowDown = (_b.sent()).LuSquareArrowDown;
                    return [2 /*return*/, LuSquareArrowDown];
                case 551: return [4 /*yield*/, import("react-icons/lu")];
                case 552:
                    LuSquareArrowLeft = (_b.sent()).LuSquareArrowLeft;
                    return [2 /*return*/, LuSquareArrowLeft];
                case 553: return [4 /*yield*/, import("react-icons/lu")];
                case 554:
                    LuSquareArrowOutDownLeft = (_b.sent()).LuSquareArrowOutDownLeft;
                    return [2 /*return*/, LuSquareArrowOutDownLeft];
                case 555: return [4 /*yield*/, import("react-icons/lu")];
                case 556:
                    LuSquareArrowOutDownRight = (_b.sent()).LuSquareArrowOutDownRight;
                    return [2 /*return*/, LuSquareArrowOutDownRight];
                case 557: return [4 /*yield*/, import("react-icons/lu")];
                case 558:
                    LuSquareArrowOutUpLeft = (_b.sent()).LuSquareArrowOutUpLeft;
                    return [2 /*return*/, LuSquareArrowOutUpLeft];
                case 559: return [4 /*yield*/, import("react-icons/lu")];
                case 560:
                    LuSquareArrowOutUpRight = (_b.sent()).LuSquareArrowOutUpRight;
                    return [2 /*return*/, LuSquareArrowOutUpRight];
                case 561: return [4 /*yield*/, import("react-icons/lu")];
                case 562:
                    LuSquareArrowRight = (_b.sent()).LuSquareArrowRight;
                    return [2 /*return*/, LuSquareArrowRight];
                case 563: return [4 /*yield*/, import("react-icons/lu")];
                case 564:
                    LuSquareArrowUpLeft = (_b.sent()).LuSquareArrowUpLeft;
                    return [2 /*return*/, LuSquareArrowUpLeft];
                case 565: return [4 /*yield*/, import("react-icons/lu")];
                case 566:
                    LuSquareArrowUpRight = (_b.sent()).LuSquareArrowUpRight;
                    return [2 /*return*/, LuSquareArrowUpRight];
                case 567: return [4 /*yield*/, import("react-icons/lu")];
                case 568:
                    LuSquareArrowUp = (_b.sent()).LuSquareArrowUp;
                    return [2 /*return*/, LuSquareArrowUp];
                case 569: return [4 /*yield*/, import("react-icons/lu")];
                case 570:
                    LuSquareAsterisk = (_b.sent()).LuSquareAsterisk;
                    return [2 /*return*/, LuSquareAsterisk];
                case 571: return [4 /*yield*/, import("react-icons/lu")];
                case 572:
                    LuSquareBottomDashedScissors = (_b.sent()).LuSquareBottomDashedScissors;
                    return [2 /*return*/, LuSquareBottomDashedScissors];
                case 573: return [4 /*yield*/, import("react-icons/lu")];
                case 574:
                    LuSquareChartGantt = (_b.sent()).LuSquareChartGantt;
                    return [2 /*return*/, LuSquareChartGantt];
                case 575: return [4 /*yield*/, import("react-icons/lu")];
                case 576:
                    LuSquareCheckBig = (_b.sent()).LuSquareCheckBig;
                    return [2 /*return*/, LuSquareCheckBig];
                case 577: return [4 /*yield*/, import("react-icons/lu")];
                case 578:
                    LuSquareCheck = (_b.sent()).LuSquareCheck;
                    return [2 /*return*/, LuSquareCheck];
                case 579: return [4 /*yield*/, import("react-icons/lu")];
                case 580:
                    LuSquareChevronDown = (_b.sent()).LuSquareChevronDown;
                    return [2 /*return*/, LuSquareChevronDown];
                case 581: return [4 /*yield*/, import("react-icons/lu")];
                case 582:
                    LuSquareChevronLeft = (_b.sent()).LuSquareChevronLeft;
                    return [2 /*return*/, LuSquareChevronLeft];
                case 583: return [4 /*yield*/, import("react-icons/lu")];
                case 584:
                    LuSquareChevronRight = (_b.sent()).LuSquareChevronRight;
                    return [2 /*return*/, LuSquareChevronRight];
                case 585: return [4 /*yield*/, import("react-icons/lu")];
                case 586:
                    LuSquareChevronUp = (_b.sent()).LuSquareChevronUp;
                    return [2 /*return*/, LuSquareChevronUp];
                case 587: return [4 /*yield*/, import("react-icons/lu")];
                case 588:
                    LuSquareCode = (_b.sent()).LuSquareCode;
                    return [2 /*return*/, LuSquareCode];
                case 589: return [4 /*yield*/, import("react-icons/lu")];
                case 590:
                    LuSquareDashedBottomCode = (_b.sent()).LuSquareDashedBottomCode;
                    return [2 /*return*/, LuSquareDashedBottomCode];
                case 591: return [4 /*yield*/, import("react-icons/lu")];
                case 592:
                    LuSquareDashedBottom = (_b.sent()).LuSquareDashedBottom;
                    return [2 /*return*/, LuSquareDashedBottom];
                case 593: return [4 /*yield*/, import("react-icons/lu")];
                case 594:
                    LuSquareDashedKanban = (_b.sent()).LuSquareDashedKanban;
                    return [2 /*return*/, LuSquareDashedKanban];
                case 595: return [4 /*yield*/, import("react-icons/lu")];
                case 596:
                    LuSquareDashedMousePointer = (_b.sent()).LuSquareDashedMousePointer;
                    return [2 /*return*/, LuSquareDashedMousePointer];
                case 597: return [4 /*yield*/, import("react-icons/lu")];
                case 598:
                    LuSquareDashed = (_b.sent()).LuSquareDashed;
                    return [2 /*return*/, LuSquareDashed];
                case 599: return [4 /*yield*/, import("react-icons/lu")];
                case 600:
                    LuSquareDivide = (_b.sent()).LuSquareDivide;
                    return [2 /*return*/, LuSquareDivide];
                case 601: return [4 /*yield*/, import("react-icons/lu")];
                case 602:
                    LuSquareDot = (_b.sent()).LuSquareDot;
                    return [2 /*return*/, LuSquareDot];
                case 603: return [4 /*yield*/, import("react-icons/lu")];
                case 604:
                    LuSquareEqual = (_b.sent()).LuSquareEqual;
                    return [2 /*return*/, LuSquareEqual];
                case 605: return [4 /*yield*/, import("react-icons/lu")];
                case 606:
                    LuSquareFunction = (_b.sent()).LuSquareFunction;
                    return [2 /*return*/, LuSquareFunction];
                case 607: return [4 /*yield*/, import("react-icons/lu")];
                case 608:
                    LuSquareKanban = (_b.sent()).LuSquareKanban;
                    return [2 /*return*/, LuSquareKanban];
                case 609: return [4 /*yield*/, import("react-icons/lu")];
                case 610:
                    LuSquareLibrary = (_b.sent()).LuSquareLibrary;
                    return [2 /*return*/, LuSquareLibrary];
                case 611: return [4 /*yield*/, import("react-icons/lu")];
                case 612:
                    LuSquareM = (_b.sent()).LuSquareM;
                    return [2 /*return*/, LuSquareM];
                case 613: return [4 /*yield*/, import("react-icons/lu")];
                case 614:
                    LuSquareMenu = (_b.sent()).LuSquareMenu;
                    return [2 /*return*/, LuSquareMenu];
                case 615: return [4 /*yield*/, import("react-icons/lu")];
                case 616:
                    LuSquareMinus = (_b.sent()).LuSquareMinus;
                    return [2 /*return*/, LuSquareMinus];
                case 617: return [4 /*yield*/, import("react-icons/lu")];
                case 618:
                    LuSquareMousePointer = (_b.sent()).LuSquareMousePointer;
                    return [2 /*return*/, LuSquareMousePointer];
                case 619: return [4 /*yield*/, import("react-icons/lu")];
                case 620:
                    LuSquareParkingOff = (_b.sent()).LuSquareParkingOff;
                    return [2 /*return*/, LuSquareParkingOff];
                case 621: return [4 /*yield*/, import("react-icons/lu")];
                case 622:
                    LuSquareParking = (_b.sent()).LuSquareParking;
                    return [2 /*return*/, LuSquareParking];
                case 623: return [4 /*yield*/, import("react-icons/lu")];
                case 624:
                    LuSquarePen = (_b.sent()).LuSquarePen;
                    return [2 /*return*/, LuSquarePen];
                case 625: return [4 /*yield*/, import("react-icons/lu")];
                case 626:
                    LuSquarePercent = (_b.sent()).LuSquarePercent;
                    return [2 /*return*/, LuSquarePercent];
                case 627: return [4 /*yield*/, import("react-icons/lu")];
                case 628:
                    LuSquarePi = (_b.sent()).LuSquarePi;
                    return [2 /*return*/, LuSquarePi];
                case 629: return [4 /*yield*/, import("react-icons/lu")];
                case 630:
                    LuSquarePilcrow = (_b.sent()).LuSquarePilcrow;
                    return [2 /*return*/, LuSquarePilcrow];
                case 631: return [4 /*yield*/, import("react-icons/lu")];
                case 632:
                    LuSquarePlay = (_b.sent()).LuSquarePlay;
                    return [2 /*return*/, LuSquarePlay];
                case 633: return [4 /*yield*/, import("react-icons/lu")];
                case 634:
                    LuSquarePlus = (_b.sent()).LuSquarePlus;
                    return [2 /*return*/, LuSquarePlus];
                case 635: return [4 /*yield*/, import("react-icons/lu")];
                case 636:
                    LuSquarePower = (_b.sent()).LuSquarePower;
                    return [2 /*return*/, LuSquarePower];
                case 637: return [4 /*yield*/, import("react-icons/lu")];
                case 638:
                    LuSquareRadical = (_b.sent()).LuSquareRadical;
                    return [2 /*return*/, LuSquareRadical];
                case 639: return [4 /*yield*/, import("react-icons/lu")];
                case 640:
                    LuSquareScissors = (_b.sent()).LuSquareScissors;
                    return [2 /*return*/, LuSquareScissors];
                case 641: return [4 /*yield*/, import("react-icons/lu")];
                case 642:
                    LuSquareSigma = (_b.sent()).LuSquareSigma;
                    return [2 /*return*/, LuSquareSigma];
                case 643: return [4 /*yield*/, import("react-icons/lu")];
                case 644:
                    LuSquareSlash = (_b.sent()).LuSquareSlash;
                    return [2 /*return*/, LuSquareSlash];
                case 645: return [4 /*yield*/, import("react-icons/lu")];
                case 646:
                    LuSquareSplitHorizontal = (_b.sent()).LuSquareSplitHorizontal;
                    return [2 /*return*/, LuSquareSplitHorizontal];
                case 647: return [4 /*yield*/, import("react-icons/lu")];
                case 648:
                    LuSquareSplitVertical = (_b.sent()).LuSquareSplitVertical;
                    return [2 /*return*/, LuSquareSplitVertical];
                case 649: return [4 /*yield*/, import("react-icons/lu")];
                case 650:
                    LuSquareSquare = (_b.sent()).LuSquareSquare;
                    return [2 /*return*/, LuSquareSquare];
                case 651: return [4 /*yield*/, import("react-icons/lu")];
                case 652:
                    LuSquareStack = (_b.sent()).LuSquareStack;
                    return [2 /*return*/, LuSquareStack];
                case 653: return [4 /*yield*/, import("react-icons/lu")];
                case 654:
                    LuSquareTerminal = (_b.sent()).LuSquareTerminal;
                    return [2 /*return*/, LuSquareTerminal];
                case 655: return [4 /*yield*/, import("react-icons/lu")];
                case 656:
                    LuSquareUserRound = (_b.sent()).LuSquareUserRound;
                    return [2 /*return*/, LuSquareUserRound];
                case 657: return [4 /*yield*/, import("react-icons/lu")];
                case 658:
                    LuSquareUser = (_b.sent()).LuSquareUser;
                    return [2 /*return*/, LuSquareUser];
                case 659: return [4 /*yield*/, import("react-icons/lu")];
                case 660:
                    LuSquareX = (_b.sent()).LuSquareX;
                    return [2 /*return*/, LuSquareX];
                case 661: return [4 /*yield*/, import("react-icons/lu")];
                case 662:
                    LuSquare = (_b.sent()).LuSquare;
                    return [2 /*return*/, LuSquare];
                case 663: return [4 /*yield*/, import("react-icons/lu")];
                case 664:
                    LuSquircle = (_b.sent()).LuSquircle;
                    return [2 /*return*/, LuSquircle];
                case 665: return [4 /*yield*/, import("react-icons/lu")];
                case 666:
                    LuSquirrel = (_b.sent()).LuSquirrel;
                    return [2 /*return*/, LuSquirrel];
                case 667: return [4 /*yield*/, import("react-icons/lu")];
                case 668:
                    LuStamp = (_b.sent()).LuStamp;
                    return [2 /*return*/, LuStamp];
                case 669: return [4 /*yield*/, import("react-icons/lu")];
                case 670:
                    LuStarHalf = (_b.sent()).LuStarHalf;
                    return [2 /*return*/, LuStarHalf];
                case 671: return [4 /*yield*/, import("react-icons/lu")];
                case 672:
                    LuStarOff = (_b.sent()).LuStarOff;
                    return [2 /*return*/, LuStarOff];
                case 673: return [4 /*yield*/, import("react-icons/lu")];
                case 674:
                    LuStar = (_b.sent()).LuStar;
                    return [2 /*return*/, LuStar];
                case 675: return [4 /*yield*/, import("react-icons/lu")];
                case 676:
                    LuStepBack = (_b.sent()).LuStepBack;
                    return [2 /*return*/, LuStepBack];
                case 677: return [4 /*yield*/, import("react-icons/lu")];
                case 678:
                    LuStepForward = (_b.sent()).LuStepForward;
                    return [2 /*return*/, LuStepForward];
                case 679: return [4 /*yield*/, import("react-icons/lu")];
                case 680:
                    LuStethoscope = (_b.sent()).LuStethoscope;
                    return [2 /*return*/, LuStethoscope];
                case 681: return [4 /*yield*/, import("react-icons/lu")];
                case 682:
                    LuSticker = (_b.sent()).LuSticker;
                    return [2 /*return*/, LuSticker];
                case 683: return [4 /*yield*/, import("react-icons/lu")];
                case 684:
                    LuStickyNote = (_b.sent()).LuStickyNote;
                    return [2 /*return*/, LuStickyNote];
                case 685: return [4 /*yield*/, import("react-icons/lu")];
                case 686:
                    LuStore = (_b.sent()).LuStore;
                    return [2 /*return*/, LuStore];
                case 687: return [4 /*yield*/, import("react-icons/lu")];
                case 688:
                    LuStretchHorizontal = (_b.sent()).LuStretchHorizontal;
                    return [2 /*return*/, LuStretchHorizontal];
                case 689: return [4 /*yield*/, import("react-icons/lu")];
                case 690:
                    LuStretchVertical = (_b.sent()).LuStretchVertical;
                    return [2 /*return*/, LuStretchVertical];
                case 691: return [4 /*yield*/, import("react-icons/lu")];
                case 692:
                    LuStrikethrough = (_b.sent()).LuStrikethrough;
                    return [2 /*return*/, LuStrikethrough];
                case 693: return [4 /*yield*/, import("react-icons/lu")];
                case 694:
                    LuSubscript = (_b.sent()).LuSubscript;
                    return [2 /*return*/, LuSubscript];
                case 695: return [4 /*yield*/, import("react-icons/lu")];
                case 696:
                    LuSunDim = (_b.sent()).LuSunDim;
                    return [2 /*return*/, LuSunDim];
                case 697: return [4 /*yield*/, import("react-icons/lu")];
                case 698:
                    LuSunMedium = (_b.sent()).LuSunMedium;
                    return [2 /*return*/, LuSunMedium];
                case 699: return [4 /*yield*/, import("react-icons/lu")];
                case 700:
                    LuSunMoon = (_b.sent()).LuSunMoon;
                    return [2 /*return*/, LuSunMoon];
                case 701: return [4 /*yield*/, import("react-icons/lu")];
                case 702:
                    LuSunSnow = (_b.sent()).LuSunSnow;
                    return [2 /*return*/, LuSunSnow];
                case 703: return [4 /*yield*/, import("react-icons/lu")];
                case 704:
                    LuSun = (_b.sent()).LuSun;
                    return [2 /*return*/, LuSun];
                case 705: return [4 /*yield*/, import("react-icons/lu")];
                case 706:
                    LuSunrise = (_b.sent()).LuSunrise;
                    return [2 /*return*/, LuSunrise];
                case 707: return [4 /*yield*/, import("react-icons/lu")];
                case 708:
                    LuSunset = (_b.sent()).LuSunset;
                    return [2 /*return*/, LuSunset];
                case 709: return [4 /*yield*/, import("react-icons/lu")];
                case 710:
                    LuSuperscript = (_b.sent()).LuSuperscript;
                    return [2 /*return*/, LuSuperscript];
                case 711: return [4 /*yield*/, import("react-icons/lu")];
                case 712:
                    LuSwatchBook = (_b.sent()).LuSwatchBook;
                    return [2 /*return*/, LuSwatchBook];
                case 713: return [4 /*yield*/, import("react-icons/lu")];
                case 714:
                    LuSwissFranc = (_b.sent()).LuSwissFranc;
                    return [2 /*return*/, LuSwissFranc];
                case 715: return [4 /*yield*/, import("react-icons/lu")];
                case 716:
                    LuSwitchCamera = (_b.sent()).LuSwitchCamera;
                    return [2 /*return*/, LuSwitchCamera];
                case 717: return [4 /*yield*/, import("react-icons/lu")];
                case 718:
                    LuSword = (_b.sent()).LuSword;
                    return [2 /*return*/, LuSword];
                case 719: return [4 /*yield*/, import("react-icons/lu")];
                case 720:
                    LuSwords = (_b.sent()).LuSwords;
                    return [2 /*return*/, LuSwords];
                case 721: return [4 /*yield*/, import("react-icons/lu")];
                case 722:
                    LuSyringe = (_b.sent()).LuSyringe;
                    return [2 /*return*/, LuSyringe];
                case 723: return [4 /*yield*/, import("react-icons/lu")];
                case 724:
                    LuTable2 = (_b.sent()).LuTable2;
                    return [2 /*return*/, LuTable2];
                case 725: return [4 /*yield*/, import("react-icons/lu")];
                case 726:
                    LuTableCellsMerge = (_b.sent()).LuTableCellsMerge;
                    return [2 /*return*/, LuTableCellsMerge];
                case 727: return [4 /*yield*/, import("react-icons/lu")];
                case 728:
                    LuTableCellsSplit = (_b.sent()).LuTableCellsSplit;
                    return [2 /*return*/, LuTableCellsSplit];
                case 729: return [4 /*yield*/, import("react-icons/lu")];
                case 730:
                    LuTableColumnsSplit = (_b.sent()).LuTableColumnsSplit;
                    return [2 /*return*/, LuTableColumnsSplit];
                case 731: return [4 /*yield*/, import("react-icons/lu")];
                case 732:
                    LuTableOfContents = (_b.sent()).LuTableOfContents;
                    return [2 /*return*/, LuTableOfContents];
                case 733: return [4 /*yield*/, import("react-icons/lu")];
                case 734:
                    LuTableProperties = (_b.sent()).LuTableProperties;
                    return [2 /*return*/, LuTableProperties];
                case 735: return [4 /*yield*/, import("react-icons/lu")];
                case 736:
                    LuTableRowsSplit = (_b.sent()).LuTableRowsSplit;
                    return [2 /*return*/, LuTableRowsSplit];
                case 737: return [4 /*yield*/, import("react-icons/lu")];
                case 738:
                    LuTable = (_b.sent()).LuTable;
                    return [2 /*return*/, LuTable];
                case 739: return [4 /*yield*/, import("react-icons/lu")];
                case 740:
                    LuTabletSmartphone = (_b.sent()).LuTabletSmartphone;
                    return [2 /*return*/, LuTabletSmartphone];
                case 741: return [4 /*yield*/, import("react-icons/lu")];
                case 742:
                    LuTablet = (_b.sent()).LuTablet;
                    return [2 /*return*/, LuTablet];
                case 743: return [4 /*yield*/, import("react-icons/lu")];
                case 744:
                    LuTablets = (_b.sent()).LuTablets;
                    return [2 /*return*/, LuTablets];
                case 745: return [4 /*yield*/, import("react-icons/lu")];
                case 746:
                    LuTag = (_b.sent()).LuTag;
                    return [2 /*return*/, LuTag];
                case 747: return [4 /*yield*/, import("react-icons/lu")];
                case 748:
                    LuTags = (_b.sent()).LuTags;
                    return [2 /*return*/, LuTags];
                case 749: return [4 /*yield*/, import("react-icons/lu")];
                case 750:
                    LuTally1 = (_b.sent()).LuTally1;
                    return [2 /*return*/, LuTally1];
                case 751: return [4 /*yield*/, import("react-icons/lu")];
                case 752:
                    LuTally2 = (_b.sent()).LuTally2;
                    return [2 /*return*/, LuTally2];
                case 753: return [4 /*yield*/, import("react-icons/lu")];
                case 754:
                    LuTally3 = (_b.sent()).LuTally3;
                    return [2 /*return*/, LuTally3];
                case 755: return [4 /*yield*/, import("react-icons/lu")];
                case 756:
                    LuTally4 = (_b.sent()).LuTally4;
                    return [2 /*return*/, LuTally4];
                case 757: return [4 /*yield*/, import("react-icons/lu")];
                case 758:
                    LuTally5 = (_b.sent()).LuTally5;
                    return [2 /*return*/, LuTally5];
                case 759: return [4 /*yield*/, import("react-icons/lu")];
                case 760:
                    LuTangent = (_b.sent()).LuTangent;
                    return [2 /*return*/, LuTangent];
                case 761: return [4 /*yield*/, import("react-icons/lu")];
                case 762:
                    LuTarget = (_b.sent()).LuTarget;
                    return [2 /*return*/, LuTarget];
                case 763: return [4 /*yield*/, import("react-icons/lu")];
                case 764:
                    LuTelescope = (_b.sent()).LuTelescope;
                    return [2 /*return*/, LuTelescope];
                case 765: return [4 /*yield*/, import("react-icons/lu")];
                case 766:
                    LuTentTree = (_b.sent()).LuTentTree;
                    return [2 /*return*/, LuTentTree];
                case 767: return [4 /*yield*/, import("react-icons/lu")];
                case 768:
                    LuTent = (_b.sent()).LuTent;
                    return [2 /*return*/, LuTent];
                case 769: return [4 /*yield*/, import("react-icons/lu")];
                case 770:
                    LuTerminal = (_b.sent()).LuTerminal;
                    return [2 /*return*/, LuTerminal];
                case 771: return [4 /*yield*/, import("react-icons/lu")];
                case 772:
                    LuTestTubeDiagonal = (_b.sent()).LuTestTubeDiagonal;
                    return [2 /*return*/, LuTestTubeDiagonal];
                case 773: return [4 /*yield*/, import("react-icons/lu")];
                case 774:
                    LuTestTube = (_b.sent()).LuTestTube;
                    return [2 /*return*/, LuTestTube];
                case 775: return [4 /*yield*/, import("react-icons/lu")];
                case 776:
                    LuTestTubes = (_b.sent()).LuTestTubes;
                    return [2 /*return*/, LuTestTubes];
                case 777: return [4 /*yield*/, import("react-icons/lu")];
                case 778:
                    LuTextCursorInput = (_b.sent()).LuTextCursorInput;
                    return [2 /*return*/, LuTextCursorInput];
                case 779: return [4 /*yield*/, import("react-icons/lu")];
                case 780:
                    LuTextCursor = (_b.sent()).LuTextCursor;
                    return [2 /*return*/, LuTextCursor];
                case 781: return [4 /*yield*/, import("react-icons/lu")];
                case 782:
                    LuTextQuote = (_b.sent()).LuTextQuote;
                    return [2 /*return*/, LuTextQuote];
                case 783: return [4 /*yield*/, import("react-icons/lu")];
                case 784:
                    LuTextSearch = (_b.sent()).LuTextSearch;
                    return [2 /*return*/, LuTextSearch];
                case 785: return [4 /*yield*/, import("react-icons/lu")];
                case 786:
                    LuTextSelect = (_b.sent()).LuTextSelect;
                    return [2 /*return*/, LuTextSelect];
                case 787: return [4 /*yield*/, import("react-icons/lu")];
                case 788:
                    LuText = (_b.sent()).LuText;
                    return [2 /*return*/, LuText];
                case 789: return [4 /*yield*/, import("react-icons/lu")];
                case 790:
                    LuTheater = (_b.sent()).LuTheater;
                    return [2 /*return*/, LuTheater];
                case 791: return [4 /*yield*/, import("react-icons/lu")];
                case 792:
                    LuThermometerSnowflake = (_b.sent()).LuThermometerSnowflake;
                    return [2 /*return*/, LuThermometerSnowflake];
                case 793: return [4 /*yield*/, import("react-icons/lu")];
                case 794:
                    LuThermometerSun = (_b.sent()).LuThermometerSun;
                    return [2 /*return*/, LuThermometerSun];
                case 795: return [4 /*yield*/, import("react-icons/lu")];
                case 796:
                    LuThermometer = (_b.sent()).LuThermometer;
                    return [2 /*return*/, LuThermometer];
                case 797: return [4 /*yield*/, import("react-icons/lu")];
                case 798:
                    LuThumbsDown = (_b.sent()).LuThumbsDown;
                    return [2 /*return*/, LuThumbsDown];
                case 799: return [4 /*yield*/, import("react-icons/lu")];
                case 800:
                    LuThumbsUp = (_b.sent()).LuThumbsUp;
                    return [2 /*return*/, LuThumbsUp];
                case 801: return [4 /*yield*/, import("react-icons/lu")];
                case 802:
                    LuTicketCheck = (_b.sent()).LuTicketCheck;
                    return [2 /*return*/, LuTicketCheck];
                case 803: return [4 /*yield*/, import("react-icons/lu")];
                case 804:
                    LuTicketMinus = (_b.sent()).LuTicketMinus;
                    return [2 /*return*/, LuTicketMinus];
                case 805: return [4 /*yield*/, import("react-icons/lu")];
                case 806:
                    LuTicketPercent = (_b.sent()).LuTicketPercent;
                    return [2 /*return*/, LuTicketPercent];
                case 807: return [4 /*yield*/, import("react-icons/lu")];
                case 808:
                    LuTicketPlus = (_b.sent()).LuTicketPlus;
                    return [2 /*return*/, LuTicketPlus];
                case 809: return [4 /*yield*/, import("react-icons/lu")];
                case 810:
                    LuTicketSlash = (_b.sent()).LuTicketSlash;
                    return [2 /*return*/, LuTicketSlash];
                case 811: return [4 /*yield*/, import("react-icons/lu")];
                case 812:
                    LuTicketX = (_b.sent()).LuTicketX;
                    return [2 /*return*/, LuTicketX];
                case 813: return [4 /*yield*/, import("react-icons/lu")];
                case 814:
                    LuTicket = (_b.sent()).LuTicket;
                    return [2 /*return*/, LuTicket];
                case 815: return [4 /*yield*/, import("react-icons/lu")];
                case 816:
                    LuTicketsPlane = (_b.sent()).LuTicketsPlane;
                    return [2 /*return*/, LuTicketsPlane];
                case 817: return [4 /*yield*/, import("react-icons/lu")];
                case 818:
                    LuTickets = (_b.sent()).LuTickets;
                    return [2 /*return*/, LuTickets];
                case 819: return [4 /*yield*/, import("react-icons/lu")];
                case 820:
                    LuTimerOff = (_b.sent()).LuTimerOff;
                    return [2 /*return*/, LuTimerOff];
                case 821: return [4 /*yield*/, import("react-icons/lu")];
                case 822:
                    LuTimerReset = (_b.sent()).LuTimerReset;
                    return [2 /*return*/, LuTimerReset];
                case 823: return [4 /*yield*/, import("react-icons/lu")];
                case 824:
                    LuTimer = (_b.sent()).LuTimer;
                    return [2 /*return*/, LuTimer];
                case 825: return [4 /*yield*/, import("react-icons/lu")];
                case 826:
                    LuToggleLeft = (_b.sent()).LuToggleLeft;
                    return [2 /*return*/, LuToggleLeft];
                case 827: return [4 /*yield*/, import("react-icons/lu")];
                case 828:
                    LuToggleRight = (_b.sent()).LuToggleRight;
                    return [2 /*return*/, LuToggleRight];
                case 829: return [4 /*yield*/, import("react-icons/lu")];
                case 830:
                    LuToilet = (_b.sent()).LuToilet;
                    return [2 /*return*/, LuToilet];
                case 831: return [4 /*yield*/, import("react-icons/lu")];
                case 832:
                    LuTornado = (_b.sent()).LuTornado;
                    return [2 /*return*/, LuTornado];
                case 833: return [4 /*yield*/, import("react-icons/lu")];
                case 834:
                    LuTorus = (_b.sent()).LuTorus;
                    return [2 /*return*/, LuTorus];
                case 835: return [4 /*yield*/, import("react-icons/lu")];
                case 836:
                    LuTouchpadOff = (_b.sent()).LuTouchpadOff;
                    return [2 /*return*/, LuTouchpadOff];
                case 837: return [4 /*yield*/, import("react-icons/lu")];
                case 838:
                    LuTouchpad = (_b.sent()).LuTouchpad;
                    return [2 /*return*/, LuTouchpad];
                case 839: return [4 /*yield*/, import("react-icons/lu")];
                case 840:
                    LuTowerControl = (_b.sent()).LuTowerControl;
                    return [2 /*return*/, LuTowerControl];
                case 841: return [4 /*yield*/, import("react-icons/lu")];
                case 842:
                    LuToyBrick = (_b.sent()).LuToyBrick;
                    return [2 /*return*/, LuToyBrick];
                case 843: return [4 /*yield*/, import("react-icons/lu")];
                case 844:
                    LuTractor = (_b.sent()).LuTractor;
                    return [2 /*return*/, LuTractor];
                case 845: return [4 /*yield*/, import("react-icons/lu")];
                case 846:
                    LuTrafficCone = (_b.sent()).LuTrafficCone;
                    return [2 /*return*/, LuTrafficCone];
                case 847: return [4 /*yield*/, import("react-icons/lu")];
                case 848:
                    LuTrainFrontTunnel = (_b.sent()).LuTrainFrontTunnel;
                    return [2 /*return*/, LuTrainFrontTunnel];
                case 849: return [4 /*yield*/, import("react-icons/lu")];
                case 850:
                    LuTrainFront = (_b.sent()).LuTrainFront;
                    return [2 /*return*/, LuTrainFront];
                case 851: return [4 /*yield*/, import("react-icons/lu")];
                case 852:
                    LuTrainTrack = (_b.sent()).LuTrainTrack;
                    return [2 /*return*/, LuTrainTrack];
                case 853: return [4 /*yield*/, import("react-icons/lu")];
                case 854:
                    LuTramFront = (_b.sent()).LuTramFront;
                    return [2 /*return*/, LuTramFront];
                case 855: return [4 /*yield*/, import("react-icons/lu")];
                case 856:
                    LuTrash2 = (_b.sent()).LuTrash2;
                    return [2 /*return*/, LuTrash2];
                case 857: return [4 /*yield*/, import("react-icons/lu")];
                case 858:
                    LuTrash = (_b.sent()).LuTrash;
                    return [2 /*return*/, LuTrash];
                case 859: return [4 /*yield*/, import("react-icons/lu")];
                case 860:
                    LuTreeDeciduous = (_b.sent()).LuTreeDeciduous;
                    return [2 /*return*/, LuTreeDeciduous];
                case 861: return [4 /*yield*/, import("react-icons/lu")];
                case 862:
                    LuTreePalm = (_b.sent()).LuTreePalm;
                    return [2 /*return*/, LuTreePalm];
                case 863: return [4 /*yield*/, import("react-icons/lu")];
                case 864:
                    LuTreePine = (_b.sent()).LuTreePine;
                    return [2 /*return*/, LuTreePine];
                case 865: return [4 /*yield*/, import("react-icons/lu")];
                case 866:
                    LuTrees = (_b.sent()).LuTrees;
                    return [2 /*return*/, LuTrees];
                case 867: return [4 /*yield*/, import("react-icons/lu")];
                case 868:
                    LuTrello = (_b.sent()).LuTrello;
                    return [2 /*return*/, LuTrello];
                case 869: return [4 /*yield*/, import("react-icons/lu")];
                case 870:
                    LuTrendingDown = (_b.sent()).LuTrendingDown;
                    return [2 /*return*/, LuTrendingDown];
                case 871: return [4 /*yield*/, import("react-icons/lu")];
                case 872:
                    LuTrendingUpDown = (_b.sent()).LuTrendingUpDown;
                    return [2 /*return*/, LuTrendingUpDown];
                case 873: return [4 /*yield*/, import("react-icons/lu")];
                case 874:
                    LuTrendingUp = (_b.sent()).LuTrendingUp;
                    return [2 /*return*/, LuTrendingUp];
                case 875: return [4 /*yield*/, import("react-icons/lu")];
                case 876:
                    LuTriangleAlert = (_b.sent()).LuTriangleAlert;
                    return [2 /*return*/, LuTriangleAlert];
                case 877: return [4 /*yield*/, import("react-icons/lu")];
                case 878:
                    LuTriangleRight = (_b.sent()).LuTriangleRight;
                    return [2 /*return*/, LuTriangleRight];
                case 879: return [4 /*yield*/, import("react-icons/lu")];
                case 880:
                    LuTriangle = (_b.sent()).LuTriangle;
                    return [2 /*return*/, LuTriangle];
                case 881: return [4 /*yield*/, import("react-icons/lu")];
                case 882:
                    LuTrophy = (_b.sent()).LuTrophy;
                    return [2 /*return*/, LuTrophy];
                case 883: return [4 /*yield*/, import("react-icons/lu")];
                case 884:
                    LuTruck = (_b.sent()).LuTruck;
                    return [2 /*return*/, LuTruck];
                case 885: return [4 /*yield*/, import("react-icons/lu")];
                case 886:
                    LuTurtle = (_b.sent()).LuTurtle;
                    return [2 /*return*/, LuTurtle];
                case 887: return [4 /*yield*/, import("react-icons/lu")];
                case 888:
                    LuTvMinimalPlay = (_b.sent()).LuTvMinimalPlay;
                    return [2 /*return*/, LuTvMinimalPlay];
                case 889: return [4 /*yield*/, import("react-icons/lu")];
                case 890:
                    LuTvMinimal = (_b.sent()).LuTvMinimal;
                    return [2 /*return*/, LuTvMinimal];
                case 891: return [4 /*yield*/, import("react-icons/lu")];
                case 892:
                    LuTv = (_b.sent()).LuTv;
                    return [2 /*return*/, LuTv];
                case 893: return [4 /*yield*/, import("react-icons/lu")];
                case 894:
                    LuTwitch = (_b.sent()).LuTwitch;
                    return [2 /*return*/, LuTwitch];
                case 895: return [4 /*yield*/, import("react-icons/lu")];
                case 896:
                    LuTwitter = (_b.sent()).LuTwitter;
                    return [2 /*return*/, LuTwitter];
                case 897: return [4 /*yield*/, import("react-icons/lu")];
                case 898:
                    LuTypeOutline = (_b.sent()).LuTypeOutline;
                    return [2 /*return*/, LuTypeOutline];
                case 899: return [4 /*yield*/, import("react-icons/lu")];
                case 900:
                    LuType = (_b.sent()).LuType;
                    return [2 /*return*/, LuType];
                case 901: return [4 /*yield*/, import("react-icons/lu")];
                case 902:
                    LuUmbrellaOff = (_b.sent()).LuUmbrellaOff;
                    return [2 /*return*/, LuUmbrellaOff];
                case 903: return [4 /*yield*/, import("react-icons/lu")];
                case 904:
                    LuUmbrella = (_b.sent()).LuUmbrella;
                    return [2 /*return*/, LuUmbrella];
                case 905: return [4 /*yield*/, import("react-icons/lu")];
                case 906:
                    LuUnderline = (_b.sent()).LuUnderline;
                    return [2 /*return*/, LuUnderline];
                case 907: return [4 /*yield*/, import("react-icons/lu")];
                case 908:
                    LuUndo2 = (_b.sent()).LuUndo2;
                    return [2 /*return*/, LuUndo2];
                case 909: return [4 /*yield*/, import("react-icons/lu")];
                case 910:
                    LuUndoDot = (_b.sent()).LuUndoDot;
                    return [2 /*return*/, LuUndoDot];
                case 911: return [4 /*yield*/, import("react-icons/lu")];
                case 912:
                    LuUndo = (_b.sent()).LuUndo;
                    return [2 /*return*/, LuUndo];
                case 913: return [4 /*yield*/, import("react-icons/lu")];
                case 914:
                    LuUnfoldHorizontal = (_b.sent()).LuUnfoldHorizontal;
                    return [2 /*return*/, LuUnfoldHorizontal];
                case 915: return [4 /*yield*/, import("react-icons/lu")];
                case 916:
                    LuUnfoldVertical = (_b.sent()).LuUnfoldVertical;
                    return [2 /*return*/, LuUnfoldVertical];
                case 917: return [4 /*yield*/, import("react-icons/lu")];
                case 918:
                    LuUngroup = (_b.sent()).LuUngroup;
                    return [2 /*return*/, LuUngroup];
                case 919: return [4 /*yield*/, import("react-icons/lu")];
                case 920:
                    LuUniversity = (_b.sent()).LuUniversity;
                    return [2 /*return*/, LuUniversity];
                case 921: return [4 /*yield*/, import("react-icons/lu")];
                case 922:
                    LuUnlink2 = (_b.sent()).LuUnlink2;
                    return [2 /*return*/, LuUnlink2];
                case 923: return [4 /*yield*/, import("react-icons/lu")];
                case 924:
                    LuUnlink = (_b.sent()).LuUnlink;
                    return [2 /*return*/, LuUnlink];
                case 925: return [4 /*yield*/, import("react-icons/lu")];
                case 926:
                    LuUnplug = (_b.sent()).LuUnplug;
                    return [2 /*return*/, LuUnplug];
                case 927: return [4 /*yield*/, import("react-icons/lu")];
                case 928:
                    LuUpload = (_b.sent()).LuUpload;
                    return [2 /*return*/, LuUpload];
                case 929: return [4 /*yield*/, import("react-icons/lu")];
                case 930:
                    LuUsb = (_b.sent()).LuUsb;
                    return [2 /*return*/, LuUsb];
                case 931: return [4 /*yield*/, import("react-icons/lu")];
                case 932:
                    LuUserCheck = (_b.sent()).LuUserCheck;
                    return [2 /*return*/, LuUserCheck];
                case 933: return [4 /*yield*/, import("react-icons/lu")];
                case 934:
                    LuUserCog = (_b.sent()).LuUserCog;
                    return [2 /*return*/, LuUserCog];
                case 935: return [4 /*yield*/, import("react-icons/lu")];
                case 936:
                    LuUserMinus = (_b.sent()).LuUserMinus;
                    return [2 /*return*/, LuUserMinus];
                case 937: return [4 /*yield*/, import("react-icons/lu")];
                case 938:
                    LuUserPen = (_b.sent()).LuUserPen;
                    return [2 /*return*/, LuUserPen];
                case 939: return [4 /*yield*/, import("react-icons/lu")];
                case 940:
                    LuUserPlus = (_b.sent()).LuUserPlus;
                    return [2 /*return*/, LuUserPlus];
                case 941: return [4 /*yield*/, import("react-icons/lu")];
                case 942:
                    LuUserRoundCheck = (_b.sent()).LuUserRoundCheck;
                    return [2 /*return*/, LuUserRoundCheck];
                case 943: return [4 /*yield*/, import("react-icons/lu")];
                case 944:
                    LuUserRoundCog = (_b.sent()).LuUserRoundCog;
                    return [2 /*return*/, LuUserRoundCog];
                case 945: return [4 /*yield*/, import("react-icons/lu")];
                case 946:
                    LuUserRoundMinus = (_b.sent()).LuUserRoundMinus;
                    return [2 /*return*/, LuUserRoundMinus];
                case 947: return [4 /*yield*/, import("react-icons/lu")];
                case 948:
                    LuUserRoundPen = (_b.sent()).LuUserRoundPen;
                    return [2 /*return*/, LuUserRoundPen];
                case 949: return [4 /*yield*/, import("react-icons/lu")];
                case 950:
                    LuUserRoundPlus = (_b.sent()).LuUserRoundPlus;
                    return [2 /*return*/, LuUserRoundPlus];
                case 951: return [4 /*yield*/, import("react-icons/lu")];
                case 952:
                    LuUserRoundSearch = (_b.sent()).LuUserRoundSearch;
                    return [2 /*return*/, LuUserRoundSearch];
                case 953: return [4 /*yield*/, import("react-icons/lu")];
                case 954:
                    LuUserRoundX = (_b.sent()).LuUserRoundX;
                    return [2 /*return*/, LuUserRoundX];
                case 955: return [4 /*yield*/, import("react-icons/lu")];
                case 956:
                    LuUserRound = (_b.sent()).LuUserRound;
                    return [2 /*return*/, LuUserRound];
                case 957: return [4 /*yield*/, import("react-icons/lu")];
                case 958:
                    LuUserSearch = (_b.sent()).LuUserSearch;
                    return [2 /*return*/, LuUserSearch];
                case 959: return [4 /*yield*/, import("react-icons/lu")];
                case 960:
                    LuUserX = (_b.sent()).LuUserX;
                    return [2 /*return*/, LuUserX];
                case 961: return [4 /*yield*/, import("react-icons/lu")];
                case 962:
                    LuUser = (_b.sent()).LuUser;
                    return [2 /*return*/, LuUser];
                case 963: return [4 /*yield*/, import("react-icons/lu")];
                case 964:
                    LuUsersRound = (_b.sent()).LuUsersRound;
                    return [2 /*return*/, LuUsersRound];
                case 965: return [4 /*yield*/, import("react-icons/lu")];
                case 966:
                    LuUsers = (_b.sent()).LuUsers;
                    return [2 /*return*/, LuUsers];
                case 967: return [4 /*yield*/, import("react-icons/lu")];
                case 968:
                    LuUtensilsCrossed = (_b.sent()).LuUtensilsCrossed;
                    return [2 /*return*/, LuUtensilsCrossed];
                case 969: return [4 /*yield*/, import("react-icons/lu")];
                case 970:
                    LuUtensils = (_b.sent()).LuUtensils;
                    return [2 /*return*/, LuUtensils];
                case 971: return [4 /*yield*/, import("react-icons/lu")];
                case 972:
                    LuUtilityPole = (_b.sent()).LuUtilityPole;
                    return [2 /*return*/, LuUtilityPole];
                case 973: return [4 /*yield*/, import("react-icons/lu")];
                case 974:
                    LuVariable = (_b.sent()).LuVariable;
                    return [2 /*return*/, LuVariable];
                case 975: return [4 /*yield*/, import("react-icons/lu")];
                case 976:
                    LuVault = (_b.sent()).LuVault;
                    return [2 /*return*/, LuVault];
                case 977: return [4 /*yield*/, import("react-icons/lu")];
                case 978:
                    LuVegan = (_b.sent()).LuVegan;
                    return [2 /*return*/, LuVegan];
                case 979: return [4 /*yield*/, import("react-icons/lu")];
                case 980:
                    LuVenetianMask = (_b.sent()).LuVenetianMask;
                    return [2 /*return*/, LuVenetianMask];
                case 981: return [4 /*yield*/, import("react-icons/lu")];
                case 982:
                    LuVibrateOff = (_b.sent()).LuVibrateOff;
                    return [2 /*return*/, LuVibrateOff];
                case 983: return [4 /*yield*/, import("react-icons/lu")];
                case 984:
                    LuVibrate = (_b.sent()).LuVibrate;
                    return [2 /*return*/, LuVibrate];
                case 985: return [4 /*yield*/, import("react-icons/lu")];
                case 986:
                    LuVideoOff = (_b.sent()).LuVideoOff;
                    return [2 /*return*/, LuVideoOff];
                case 987: return [4 /*yield*/, import("react-icons/lu")];
                case 988:
                    LuVideo = (_b.sent()).LuVideo;
                    return [2 /*return*/, LuVideo];
                case 989: return [4 /*yield*/, import("react-icons/lu")];
                case 990:
                    LuVideotape = (_b.sent()).LuVideotape;
                    return [2 /*return*/, LuVideotape];
                case 991: return [4 /*yield*/, import("react-icons/lu")];
                case 992:
                    LuView = (_b.sent()).LuView;
                    return [2 /*return*/, LuView];
                case 993: return [4 /*yield*/, import("react-icons/lu")];
                case 994:
                    LuVoicemail = (_b.sent()).LuVoicemail;
                    return [2 /*return*/, LuVoicemail];
                case 995: return [4 /*yield*/, import("react-icons/lu")];
                case 996:
                    LuVolleyball = (_b.sent()).LuVolleyball;
                    return [2 /*return*/, LuVolleyball];
                case 997: return [4 /*yield*/, import("react-icons/lu")];
                case 998:
                    LuVolume1 = (_b.sent()).LuVolume1;
                    return [2 /*return*/, LuVolume1];
                case 999: return [4 /*yield*/, import("react-icons/lu")];
                case 1000:
                    LuVolume2 = (_b.sent()).LuVolume2;
                    return [2 /*return*/, LuVolume2];
                case 1001: return [4 /*yield*/, import("react-icons/lu")];
                case 1002:
                    LuVolumeOff = (_b.sent()).LuVolumeOff;
                    return [2 /*return*/, LuVolumeOff];
                case 1003: return [4 /*yield*/, import("react-icons/lu")];
                case 1004:
                    LuVolumeX = (_b.sent()).LuVolumeX;
                    return [2 /*return*/, LuVolumeX];
                case 1005: return [4 /*yield*/, import("react-icons/lu")];
                case 1006:
                    LuVolume = (_b.sent()).LuVolume;
                    return [2 /*return*/, LuVolume];
                case 1007: return [4 /*yield*/, import("react-icons/lu")];
                case 1008:
                    LuVote = (_b.sent()).LuVote;
                    return [2 /*return*/, LuVote];
                case 1009: return [4 /*yield*/, import("react-icons/lu")];
                case 1010:
                    LuWalletCards = (_b.sent()).LuWalletCards;
                    return [2 /*return*/, LuWalletCards];
                case 1011: return [4 /*yield*/, import("react-icons/lu")];
                case 1012:
                    LuWalletMinimal = (_b.sent()).LuWalletMinimal;
                    return [2 /*return*/, LuWalletMinimal];
                case 1013: return [4 /*yield*/, import("react-icons/lu")];
                case 1014:
                    LuWallet = (_b.sent()).LuWallet;
                    return [2 /*return*/, LuWallet];
                case 1015: return [4 /*yield*/, import("react-icons/lu")];
                case 1016:
                    LuWallpaper = (_b.sent()).LuWallpaper;
                    return [2 /*return*/, LuWallpaper];
                case 1017: return [4 /*yield*/, import("react-icons/lu")];
                case 1018:
                    LuWandSparkles = (_b.sent()).LuWandSparkles;
                    return [2 /*return*/, LuWandSparkles];
                case 1019: return [4 /*yield*/, import("react-icons/lu")];
                case 1020:
                    LuWand = (_b.sent()).LuWand;
                    return [2 /*return*/, LuWand];
                case 1021: return [4 /*yield*/, import("react-icons/lu")];
                case 1022:
                    LuWarehouse = (_b.sent()).LuWarehouse;
                    return [2 /*return*/, LuWarehouse];
                case 1023: return [4 /*yield*/, import("react-icons/lu")];
                case 1024:
                    LuWashingMachine = (_b.sent()).LuWashingMachine;
                    return [2 /*return*/, LuWashingMachine];
                case 1025: return [4 /*yield*/, import("react-icons/lu")];
                case 1026:
                    LuWatch = (_b.sent()).LuWatch;
                    return [2 /*return*/, LuWatch];
                case 1027: return [4 /*yield*/, import("react-icons/lu")];
                case 1028:
                    LuWaves = (_b.sent()).LuWaves;
                    return [2 /*return*/, LuWaves];
                case 1029: return [4 /*yield*/, import("react-icons/lu")];
                case 1030:
                    LuWaypoints = (_b.sent()).LuWaypoints;
                    return [2 /*return*/, LuWaypoints];
                case 1031: return [4 /*yield*/, import("react-icons/lu")];
                case 1032:
                    LuWebcam = (_b.sent()).LuWebcam;
                    return [2 /*return*/, LuWebcam];
                case 1033: return [4 /*yield*/, import("react-icons/lu")];
                case 1034:
                    LuWebhookOff = (_b.sent()).LuWebhookOff;
                    return [2 /*return*/, LuWebhookOff];
                case 1035: return [4 /*yield*/, import("react-icons/lu")];
                case 1036:
                    LuWebhook = (_b.sent()).LuWebhook;
                    return [2 /*return*/, LuWebhook];
                case 1037: return [4 /*yield*/, import("react-icons/lu")];
                case 1038:
                    LuWeight = (_b.sent()).LuWeight;
                    return [2 /*return*/, LuWeight];
                case 1039: return [4 /*yield*/, import("react-icons/lu")];
                case 1040:
                    LuWheatOff = (_b.sent()).LuWheatOff;
                    return [2 /*return*/, LuWheatOff];
                case 1041: return [4 /*yield*/, import("react-icons/lu")];
                case 1042:
                    LuWheat = (_b.sent()).LuWheat;
                    return [2 /*return*/, LuWheat];
                case 1043: return [4 /*yield*/, import("react-icons/lu")];
                case 1044:
                    LuWholeWord = (_b.sent()).LuWholeWord;
                    return [2 /*return*/, LuWholeWord];
                case 1045: return [4 /*yield*/, import("react-icons/lu")];
                case 1046:
                    LuWifiHigh = (_b.sent()).LuWifiHigh;
                    return [2 /*return*/, LuWifiHigh];
                case 1047: return [4 /*yield*/, import("react-icons/lu")];
                case 1048:
                    LuWifiLow = (_b.sent()).LuWifiLow;
                    return [2 /*return*/, LuWifiLow];
                case 1049: return [4 /*yield*/, import("react-icons/lu")];
                case 1050:
                    LuWifiOff = (_b.sent()).LuWifiOff;
                    return [2 /*return*/, LuWifiOff];
                case 1051: return [4 /*yield*/, import("react-icons/lu")];
                case 1052:
                    LuWifiZero = (_b.sent()).LuWifiZero;
                    return [2 /*return*/, LuWifiZero];
                case 1053: return [4 /*yield*/, import("react-icons/lu")];
                case 1054:
                    LuWifi = (_b.sent()).LuWifi;
                    return [2 /*return*/, LuWifi];
                case 1055: return [4 /*yield*/, import("react-icons/lu")];
                case 1056:
                    LuWindArrowDown = (_b.sent()).LuWindArrowDown;
                    return [2 /*return*/, LuWindArrowDown];
                case 1057: return [4 /*yield*/, import("react-icons/lu")];
                case 1058:
                    LuWind = (_b.sent()).LuWind;
                    return [2 /*return*/, LuWind];
                case 1059: return [4 /*yield*/, import("react-icons/lu")];
                case 1060:
                    LuWineOff = (_b.sent()).LuWineOff;
                    return [2 /*return*/, LuWineOff];
                case 1061: return [4 /*yield*/, import("react-icons/lu")];
                case 1062:
                    LuWine = (_b.sent()).LuWine;
                    return [2 /*return*/, LuWine];
                case 1063: return [4 /*yield*/, import("react-icons/lu")];
                case 1064:
                    LuWorkflow = (_b.sent()).LuWorkflow;
                    return [2 /*return*/, LuWorkflow];
                case 1065: return [4 /*yield*/, import("react-icons/lu")];
                case 1066:
                    LuWorm = (_b.sent()).LuWorm;
                    return [2 /*return*/, LuWorm];
                case 1067: return [4 /*yield*/, import("react-icons/lu")];
                case 1068:
                    LuWrapText = (_b.sent()).LuWrapText;
                    return [2 /*return*/, LuWrapText];
                case 1069: return [4 /*yield*/, import("react-icons/lu")];
                case 1070:
                    LuWrench = (_b.sent()).LuWrench;
                    return [2 /*return*/, LuWrench];
                case 1071: return [4 /*yield*/, import("react-icons/lu")];
                case 1072:
                    LuX = (_b.sent()).LuX;
                    return [2 /*return*/, LuX];
                case 1073: return [4 /*yield*/, import("react-icons/lu")];
                case 1074:
                    LuYoutube = (_b.sent()).LuYoutube;
                    return [2 /*return*/, LuYoutube];
                case 1075: return [4 /*yield*/, import("react-icons/lu")];
                case 1076:
                    LuZapOff = (_b.sent()).LuZapOff;
                    return [2 /*return*/, LuZapOff];
                case 1077: return [4 /*yield*/, import("react-icons/lu")];
                case 1078:
                    LuZap = (_b.sent()).LuZap;
                    return [2 /*return*/, LuZap];
                case 1079: return [4 /*yield*/, import("react-icons/lu")];
                case 1080:
                    LuZoomIn = (_b.sent()).LuZoomIn;
                    return [2 /*return*/, LuZoomIn];
                case 1081: return [4 /*yield*/, import("react-icons/lu")];
                case 1082:
                    LuZoomOut = (_b.sent()).LuZoomOut;
                    return [2 /*return*/, LuZoomOut];
                case 1083: return [2 /*return*/];
            }
        });
    });
}
