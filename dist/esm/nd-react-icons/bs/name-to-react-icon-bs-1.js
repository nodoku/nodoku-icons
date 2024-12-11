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
export function nameToReactIcon_bs_1(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, BsBuildingFillGear, BsBuildingFillLock, BsBuildingFillSlash, BsBuildingFillUp, BsBuildingFillX, BsBuildingFill, BsBuildingGear, BsBuildingLock, BsBuildingSlash, BsBuildingUp, BsBuildingX, BsBuilding, BsBuildingsFill, BsBuildings, BsBullseye, BsBusFrontFill, BsBusFront, BsCCircleFill, BsCCircle, BsCSquareFill, BsCSquare, BsCakeFill, BsCake, BsCake2Fill, BsCake2, BsCalculatorFill, BsCalculator, BsCalendarCheckFill, BsCalendarCheck, BsCalendarDateFill, BsCalendarDate, BsCalendarDayFill, BsCalendarDay, BsCalendarEventFill, BsCalendarEvent, BsCalendarFill, BsCalendarHeartFill, BsCalendarHeart, BsCalendarMinusFill, BsCalendarMinus, BsCalendarMonthFill, BsCalendarMonth, BsCalendarPlusFill, BsCalendarPlus, BsCalendarRangeFill, BsCalendarRange, BsCalendarWeekFill, BsCalendarWeek, BsCalendarXFill, BsCalendarX, BsCalendar, BsCalendar2CheckFill, BsCalendar2Check, BsCalendar2DateFill, BsCalendar2Date, BsCalendar2DayFill, BsCalendar2Day, BsCalendar2EventFill, BsCalendar2Event, BsCalendar2Fill, BsCalendar2HeartFill, BsCalendar2Heart, BsCalendar2MinusFill, BsCalendar2Minus, BsCalendar2MonthFill, BsCalendar2Month, BsCalendar2PlusFill, BsCalendar2Plus, BsCalendar2RangeFill, BsCalendar2Range, BsCalendar2WeekFill, BsCalendar2Week, BsCalendar2XFill, BsCalendar2X, BsCalendar2, BsCalendar3EventFill, BsCalendar3Event, BsCalendar3Fill, BsCalendar3RangeFill, BsCalendar3Range, BsCalendar3WeekFill, BsCalendar3Week, BsCalendar3, BsCalendar4Event, BsCalendar4Range, BsCalendar4Week, BsCalendar4, BsCameraFill, BsCameraReelsFill, BsCameraReels, BsCameraVideoFill, BsCameraVideoOffFill, BsCameraVideoOff, BsCameraVideo, BsCamera, BsCamera2, BsCapslockFill, BsCapslock, BsCapsulePill, BsCapsule, BsCarFrontFill, BsCarFront, BsCardChecklist, BsCardHeading, BsCardImage, BsCardList, BsCardText, BsCaretDownFill, BsCaretDownSquareFill, BsCaretDownSquare, BsCaretDown, BsCaretLeftFill, BsCaretLeftSquareFill, BsCaretLeftSquare, BsCaretLeft, BsCaretRightFill, BsCaretRightSquareFill, BsCaretRightSquare, BsCaretRight, BsCaretUpFill, BsCaretUpSquareFill, BsCaretUpSquare, BsCaretUp, BsCartCheckFill, BsCartCheck, BsCartDashFill, BsCartDash, BsCartFill, BsCartPlusFill, BsCartPlus, BsCartXFill, BsCartX, BsCart, BsCart2, BsCart3, BsCart4, BsCashCoin, BsCashStack, BsCash, BsCassetteFill, BsCassette, BsCast, BsCcCircleFill, BsCcCircle, BsCcSquareFill, BsCcSquare, BsChatDotsFill, BsChatDots, BsChatFill, BsChatHeartFill, BsChatHeart, BsChatLeftDotsFill, BsChatLeftDots, BsChatLeftFill, BsChatLeftHeartFill, BsChatLeftHeart, BsChatLeftQuoteFill, BsChatLeftQuote, BsChatLeftTextFill, BsChatLeftText, BsChatLeft, BsChatQuoteFill, BsChatQuote, BsChatRightDotsFill, BsChatRightDots, BsChatRightFill, BsChatRightHeartFill, BsChatRightHeart, BsChatRightQuoteFill, BsChatRightQuote, BsChatRightTextFill, BsChatRightText, BsChatRight, BsChatSquareDotsFill, BsChatSquareDots, BsChatSquareFill, BsChatSquareHeartFill, BsChatSquareHeart, BsChatSquareQuoteFill, BsChatSquareQuote, BsChatSquareTextFill, BsChatSquareText, BsChatSquare, BsChatTextFill, BsChatText, BsChat, BsCheckAll, BsCheckCircleFill, BsCheckCircle, BsCheckLg, BsCheckSquareFill, BsCheckSquare, BsCheck, BsCheck2All, BsCheck2Circle, BsCheck2Square, BsCheck2, BsChevronBarContract, BsChevronBarDown, BsChevronBarExpand, BsChevronBarLeft, BsChevronBarRight, BsChevronBarUp, BsChevronCompactDown, BsChevronCompactLeft, BsChevronCompactRight, BsChevronCompactUp, BsChevronContract, BsChevronDoubleDown, BsChevronDoubleLeft, BsChevronDoubleRight, BsChevronDoubleUp, BsChevronDown, BsChevronExpand, BsChevronLeft, BsChevronRight, BsChevronUp, BsCircleFill, BsCircleHalf, BsCircleSquare, BsCircle, BsClipboardCheckFill, BsClipboardCheck, BsClipboardDataFill, BsClipboardData, BsClipboardFill, BsClipboardHeartFill, BsClipboardHeart, BsClipboardMinusFill, BsClipboardMinus, BsClipboardPlusFill, BsClipboardPlus, BsClipboardPulse, BsClipboardXFill, BsClipboardX, BsClipboard, BsClipboard2CheckFill, BsClipboard2Check, BsClipboard2DataFill, BsClipboard2Data, BsClipboard2Fill, BsClipboard2HeartFill, BsClipboard2Heart, BsClipboard2MinusFill, BsClipboard2Minus, BsClipboard2PlusFill, BsClipboard2Plus, BsClipboard2PulseFill, BsClipboard2Pulse, BsClipboard2XFill, BsClipboard2X, BsClipboard2, BsClockFill, BsClockHistory, BsClock, BsCloudArrowDownFill, BsCloudArrowDown, BsCloudArrowUpFill, BsCloudArrowUp, BsCloudCheckFill, BsCloudCheck, BsCloudDownloadFill, BsCloudDownload, BsCloudDrizzleFill, BsCloudDrizzle, BsCloudFill, BsCloudFogFill, BsCloudFog, BsCloudFog2Fill, BsCloudFog2, BsCloudHailFill, BsCloudHail, BsCloudHazeFill, BsCloudHaze, BsCloudHaze2Fill, BsCloudHaze2, BsCloudLightningFill, BsCloudLightningRainFill, BsCloudLightningRain, BsCloudLightning, BsCloudMinusFill, BsCloudMinus, BsCloudMoonFill, BsCloudMoon, BsCloudPlusFill, BsCloudPlus, BsCloudRainFill, BsCloudRainHeavyFill, BsCloudRainHeavy, BsCloudRain, BsCloudSlashFill, BsCloudSlash, BsCloudSleetFill, BsCloudSleet, BsCloudSnowFill, BsCloudSnow, BsCloudSunFill, BsCloudSun, BsCloudUploadFill, BsCloudUpload, BsCloud, BsCloudsFill, BsClouds, BsCloudyFill, BsCloudy, BsCodeSlash, BsCodeSquare, BsCode, BsCoin, BsCollectionFill, BsCollectionPlayFill, BsCollectionPlay, BsCollection, BsColumnsGap, BsColumns, BsCommand, BsCompassFill, BsCompass, BsConeStriped, BsCone, BsController, BsCookie, BsCopy, BsCpuFill, BsCpu, BsCreditCard2BackFill, BsCreditCard2Back, BsCreditCard2FrontFill, BsCreditCard2Front, BsCreditCardFill, BsCreditCard, BsCrop, BsCrosshair, BsCrosshair2, BsCupFill, BsCupHotFill, BsCupHot, BsCupStraw, BsCup, BsCurrencyBitcoin, BsCurrencyDollar, BsCurrencyEuro, BsCurrencyExchange, BsCurrencyPound, BsCurrencyRupee, BsCurrencyYen, BsCursorFill, BsCursorText, BsCursor, BsDashCircleDotted, BsDashCircleFill, BsDashCircle, BsDashLg, BsDashSquareDotted, BsDashSquareFill, BsDashSquare, BsDash, BsDatabaseAdd, BsDatabaseCheck, BsDatabaseDash, BsDatabaseDown, BsDatabaseExclamation, BsDatabaseFillAdd, BsDatabaseFillCheck, BsDatabaseFillDash, BsDatabaseFillDown, BsDatabaseFillExclamation, BsDatabaseFillGear, BsDatabaseFillLock, BsDatabaseFillSlash, BsDatabaseFillUp, BsDatabaseFillX, BsDatabaseFill, BsDatabaseGear, BsDatabaseLock, BsDatabaseSlash, BsDatabaseUp, BsDatabaseX, BsDatabase, BsDeviceHddFill, BsDeviceHdd, BsDeviceSsdFill, BsDeviceSsd, BsDiagram2Fill, BsDiagram2, BsDiagram3Fill, BsDiagram3, BsDiamondFill, BsDiamondHalf, BsDiamond, BsDice1Fill, BsDice1, BsDice2Fill, BsDice2, BsDice3Fill, BsDice3, BsDice4Fill, BsDice4, BsDice5Fill, BsDice5, BsDice6Fill, BsDice6, BsDiscFill, BsDisc, BsDiscord, BsDisplayFill, BsDisplay, BsDisplayportFill, BsDisplayport, BsDistributeHorizontal, BsDistributeVertical, BsDoorClosedFill, BsDoorClosed, BsDoorOpenFill, BsDoorOpen, BsDot, BsDownload, BsDpadFill, BsDpad, BsDribbble, BsDropbox, BsDropletFill, BsDropletHalf, BsDroplet, BsDuffleFill, BsDuffle, BsEarFill, BsEar, BsEarbuds, BsEaselFill, BsEasel, BsEasel2Fill, BsEasel2, BsEasel3Fill, BsEasel3, BsEggFill, BsEggFried, BsEgg, BsEjectFill, BsEject, BsEmojiAngryFill, BsEmojiAngry, BsEmojiAstonishedFill, BsEmojiAstonished, BsEmojiDizzyFill, BsEmojiDizzy, BsEmojiExpressionlessFill, BsEmojiExpressionless, BsEmojiFrownFill, BsEmojiFrown, BsEmojiGrimaceFill, BsEmojiGrimace, BsEmojiGrinFill, BsEmojiGrin, BsEmojiHeartEyesFill, BsEmojiHeartEyes, BsEmojiKissFill, BsEmojiKiss, BsEmojiLaughingFill, BsEmojiLaughing, BsEmojiNeutralFill, BsEmojiNeutral, BsEmojiSmileFill, BsEmojiSmileUpsideDownFill, BsEmojiSmileUpsideDown, BsEmojiSmile, BsEmojiSunglassesFill, BsEmojiSunglasses, BsEmojiSurpriseFill, BsEmojiSurprise, BsEmojiTearFill, BsEmojiTear, BsEmojiWinkFill, BsEmojiWink, BsEnvelopeArrowDownFill, BsEnvelopeArrowDown, BsEnvelopeArrowUpFill, BsEnvelopeArrowUp, BsEnvelopeAtFill, BsEnvelopeAt, BsEnvelopeCheckFill, BsEnvelopeCheck, BsEnvelopeDashFill, BsEnvelopeDash, BsEnvelopeExclamationFill, BsEnvelopeExclamation, BsEnvelopeFill, BsEnvelopeHeartFill, BsEnvelopeHeart, BsEnvelopeOpenFill, BsEnvelopeOpenHeartFill, BsEnvelopeOpenHeart, BsEnvelopeOpen, BsEnvelopePaperFill, BsEnvelopePaperHeartFill, BsEnvelopePaperHeart, BsEnvelopePaper, BsEnvelopePlusFill, BsEnvelopePlus, BsEnvelopeSlashFill, BsEnvelopeSlash, BsEnvelopeXFill, BsEnvelopeX, BsEnvelope, BsEraserFill, BsEraser, BsEscape, BsEthernet, BsEvFrontFill, BsEvFront, BsEvStationFill, BsEvStation, BsExclamationCircleFill, BsExclamationCircle, BsExclamationDiamondFill, BsExclamationDiamond, BsExclamationLg, BsExclamationOctagonFill, BsExclamationOctagon, BsExclamationSquareFill, BsExclamationSquare, BsExclamationTriangleFill, BsExclamationTriangle, BsExclamation, BsExclude, BsExplicitFill, BsExplicit, BsExposure, BsEyeFill, BsEyeSlashFill, BsEyeSlash, BsEye, BsEyedropper, BsEyeglasses, BsFacebook, BsFan, BsFastForwardBtnFill, BsFastForwardBtn, BsFastForwardCircleFill, BsFastForwardCircle, BsFastForwardFill, BsFastForward, BsFeather, BsFeather2, BsFileArrowDownFill, BsFileArrowDown, BsFileArrowUpFill, BsFileArrowUp, BsFileBarGraphFill, BsFileBarGraph, BsFileBinaryFill, BsFileBinary, BsFileBreakFill, BsFileBreak, BsFileCheckFill, BsFileCheck, BsFileCodeFill, BsFileCode, BsFileDiffFill, BsFileDiff, BsFileEarmarkArrowDownFill, BsFileEarmarkArrowDown, BsFileEarmarkArrowUpFill, BsFileEarmarkArrowUp, BsFileEarmarkBarGraphFill, BsFileEarmarkBarGraph, BsFileEarmarkBinaryFill, BsFileEarmarkBinary, BsFileEarmarkBreakFill, BsFileEarmarkBreak, BsFileEarmarkCheckFill, BsFileEarmarkCheck, BsFileEarmarkCodeFill, BsFileEarmarkCode, BsFileEarmarkDiffFill, BsFileEarmarkDiff, BsFileEarmarkEaselFill, BsFileEarmarkEasel, BsFileEarmarkExcelFill, BsFileEarmarkExcel, BsFileEarmarkFill, BsFileEarmarkFontFill, BsFileEarmarkFont, BsFileEarmarkImageFill, BsFileEarmarkImage, BsFileEarmarkLockFill, BsFileEarmarkLock, BsFileEarmarkLock2Fill, BsFileEarmarkLock2, BsFileEarmarkMedicalFill, BsFileEarmarkMedical, BsFileEarmarkMinusFill, BsFileEarmarkMinus, BsFileEarmarkMusicFill, BsFileEarmarkMusic, BsFileEarmarkPdfFill, BsFileEarmarkPdf, BsFileEarmarkPersonFill, BsFileEarmarkPerson, BsFileEarmarkPlayFill, BsFileEarmarkPlay, BsFileEarmarkPlusFill, BsFileEarmarkPlus, BsFileEarmarkPostFill, BsFileEarmarkPost, BsFileEarmarkPptFill, BsFileEarmarkPpt, BsFileEarmarkRichtextFill, BsFileEarmarkRichtext, BsFileEarmarkRuledFill, BsFileEarmarkRuled, BsFileEarmarkSlidesFill, BsFileEarmarkSlides, BsFileEarmarkSpreadsheetFill, BsFileEarmarkSpreadsheet, BsFileEarmarkTextFill, BsFileEarmarkText, BsFileEarmarkWordFill, BsFileEarmarkWord, BsFileEarmarkXFill, BsFileEarmarkX, BsFileEarmarkZipFill, BsFileEarmarkZip, BsFileEarmark, BsFileEaselFill, BsFileEasel, BsFileExcelFill, BsFileExcel, BsFileFill, BsFileFontFill, BsFileFont, BsFileImageFill, BsFileImage, BsFileLockFill, BsFileLock, BsFileLock2Fill, BsFileLock2, BsFileMedicalFill, BsFileMedical, BsFileMinusFill, BsFileMinus, BsFileMusicFill, BsFileMusic, BsFilePdfFill, BsFilePdf, BsFilePersonFill, BsFilePerson, BsFilePlayFill, BsFilePlay, BsFilePlusFill, BsFilePlus, BsFilePostFill, BsFilePost, BsFilePptFill, BsFilePpt, BsFileRichtextFill, BsFileRichtext, BsFileRuledFill, BsFileRuled, BsFileSlidesFill, BsFileSlides, BsFileSpreadsheetFill, BsFileSpreadsheet, BsFileTextFill, BsFileText, BsFileWordFill, BsFileWord, BsFileXFill, BsFileX, BsFileZipFill, BsFileZip, BsFile, BsFilesAlt, BsFiles, BsFiletypeAac, BsFiletypeAi, BsFiletypeBmp, BsFiletypeCs, BsFiletypeCss, BsFiletypeCsv, BsFiletypeDoc, BsFiletypeDocx, BsFiletypeExe, BsFiletypeGif, BsFiletypeHeic, BsFiletypeHtml, BsFiletypeJava, BsFiletypeJpg, BsFiletypeJs, BsFiletypeJson, BsFiletypeJsx, BsFiletypeKey, BsFiletypeM4P, BsFiletypeMd, BsFiletypeMdx, BsFiletypeMov, BsFiletypeMp3, BsFiletypeMp4, BsFiletypeOtf, BsFiletypePdf, BsFiletypePhp, BsFiletypePng, BsFiletypePpt, BsFiletypePptx, BsFiletypePsd, BsFiletypePy, BsFiletypeRaw, BsFiletypeRb, BsFiletypeSass, BsFiletypeScss, BsFiletypeSh, BsFiletypeSql, BsFiletypeSvg, BsFiletypeTiff, BsFiletypeTsx, BsFiletypeTtf, BsFiletypeTxt, BsFiletypeWav, BsFiletypeWoff, BsFiletypeXls, BsFiletypeXlsx, BsFiletypeXml, BsFiletypeYml, BsFilm, BsFilterCircleFill, BsFilterCircle, BsFilterLeft, BsFilterRight, BsFilterSquareFill, BsFilterSquare, BsFilter, BsFingerprint, BsFire, BsFlagFill, BsFlag, BsFloppyFill, BsFloppy, BsFloppy2Fill, BsFloppy2, BsFlower1, BsFlower2, BsFlower3, BsFolderCheck, BsFolderFill, BsFolderMinus, BsFolderPlus, BsFolderSymlinkFill, BsFolderSymlink, BsFolderX, BsFolder, BsFolder2Open, BsFolder2, BsFonts, BsForwardFill, BsForward, BsFront, BsFuelPumpDieselFill, BsFuelPumpDiesel, BsFuelPumpFill, BsFuelPump, BsFullscreenExit, BsFullscreen, BsFunnelFill, BsFunnel, BsGearFill, BsGearWideConnected, BsGearWide, BsGear, BsGem, BsGenderAmbiguous, BsGenderFemale, BsGenderMale, BsGenderNeuter, BsGenderTrans, BsGeoAltFill, BsGeoAlt, BsGeoFill, BsGeo, BsGiftFill, BsGift, BsGit, BsGithub, BsGitlab, BsGlobeAmericas, BsGlobeAsiaAustralia, BsGlobeCentralSouthAsia, BsGlobeEuropeAfrica, BsGlobe, BsGlobe2, BsGooglePlay, BsGoogle, BsGpuCard, BsGraphDownArrow, BsGraphDown, BsGraphUpArrow, BsGraphUp, BsGrid1X2Fill, BsGrid1X2, BsGrid3X2GapFill, BsGrid3X2Gap, BsGrid3X2, BsGrid3X3GapFill, BsGrid3X3Gap, BsGrid3X3, BsGridFill, BsGrid, BsGripHorizontal, BsGripVertical, BsHCircleFill, BsHCircle, BsHSquareFill, BsHSquare, BsHammer, BsHandIndexFill, BsHandIndexThumbFill, BsHandIndexThumb, BsHandIndex, BsHandThumbsDownFill, BsHandThumbsDown, BsHandThumbsUpFill, BsHandThumbsUp, BsHandbagFill, BsHandbag, BsHash, BsHddFill, BsHddNetworkFill, BsHddNetwork, BsHddRackFill, BsHddRack, BsHddStackFill, BsHddStack, BsHdd, BsHdmiFill, BsHdmi, BsHeadphones, BsHeadsetVr, BsHeadset, BsHeartArrow, BsHeartFill, BsHeartHalf, BsHeartPulseFill, BsHeartPulse, BsHeart, BsHeartbreakFill, BsHeartbreak, BsHearts, BsHeptagonFill, BsHeptagonHalf, BsHeptagon, BsHexagonFill, BsHexagonHalf, BsHexagon, BsHighlighter, BsHighlights, BsHospitalFill, BsHospital, BsHourglassBottom, BsHourglassSplit, BsHourglassTop, BsHourglass, BsHouseAddFill, BsHouseAdd, BsHouseCheckFill, BsHouseCheck, BsHouseDashFill, BsHouseDash, BsHouseDoorFill, BsHouseDoor, BsHouseDownFill, BsHouseDown, BsHouseExclamationFill, BsHouseExclamation, BsHouseFill, BsHouseGearFill, BsHouseGear, BsHouseHeartFill, BsHouseHeart, BsHouseLockFill, BsHouseLock, BsHouseSlashFill, BsHouseSlash, BsHouseUpFill, BsHouseUp, BsHouseXFill, BsHouseX, BsHouse, BsHousesFill, BsHouses, BsHr, BsHurricane, BsHypnotize, BsImageAlt, BsImageFill, BsImage, BsImages, BsInboxFill, BsInbox, BsInboxesFill, BsInboxes, BsIncognito, BsIndent, BsInfinity, BsInfoCircleFill, BsInfoCircle, BsInfoLg, BsInfoSquareFill, BsInfoSquare, BsInfo, BsInputCursorText, BsInputCursor, BsInstagram, BsIntersect, BsJournalAlbum, BsJournalArrowDown, BsJournalArrowUp, BsJournalBookmarkFill, BsJournalBookmark, BsJournalCheck, BsJournalCode, BsJournalMedical, BsJournalMinus, BsJournalPlus, BsJournalRichtext, BsJournalText, BsJournalX, BsJournal, BsJournals, BsJoystick, BsJustifyLeft, BsJustifyRight, BsJustify, BsKanbanFill, BsKanban, BsKeyFill, BsKey, BsKeyboardFill, BsKeyboard, BsLadder, BsLampFill, BsLamp, BsLaptopFill, BsLaptop, BsLayerBackward, BsLayerForward, BsLayersFill, BsLayersHalf, BsLayers, BsLayoutSidebarInsetReverse, BsLayoutSidebarInset, BsLayoutSidebarReverse, BsLayoutSidebar, BsLayoutSplit, BsLayoutTextSidebarReverse, BsLayoutTextSidebar, BsLayoutTextWindowReverse, BsLayoutTextWindow, BsLayoutThreeColumns, BsLayoutWtf, BsLifePreserver, BsLightbulbFill, BsLightbulbOffFill, BsLightbulbOff, BsLightbulb, BsLightningChargeFill, BsLightningCharge, BsLightningFill, BsLightning, BsLine, BsLink45Deg, BsLink, BsLinkedin, BsListCheck, BsListColumnsReverse, BsListColumns, BsListNested, BsListOl, BsListStars, BsListTask, BsListUl, BsList, BsLockFill, BsLock, BsLuggageFill, BsLuggage, BsLungsFill, BsLungs, BsMagic, BsMagnetFill, BsMagnet, BsMailboxFlag, BsMailbox, BsMailbox2Flag, BsMailbox2, BsMapFill, BsMap, BsMarkdownFill, BsMarkdown, BsMarkerTip, BsMask, BsMastodon;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "bs:BsBuildingFillGear": return [3 /*break*/, 1];
                        case "bs:BsBuildingFillLock": return [3 /*break*/, 3];
                        case "bs:BsBuildingFillSlash": return [3 /*break*/, 5];
                        case "bs:BsBuildingFillUp": return [3 /*break*/, 7];
                        case "bs:BsBuildingFillX": return [3 /*break*/, 9];
                        case "bs:BsBuildingFill": return [3 /*break*/, 11];
                        case "bs:BsBuildingGear": return [3 /*break*/, 13];
                        case "bs:BsBuildingLock": return [3 /*break*/, 15];
                        case "bs:BsBuildingSlash": return [3 /*break*/, 17];
                        case "bs:BsBuildingUp": return [3 /*break*/, 19];
                        case "bs:BsBuildingX": return [3 /*break*/, 21];
                        case "bs:BsBuilding": return [3 /*break*/, 23];
                        case "bs:BsBuildingsFill": return [3 /*break*/, 25];
                        case "bs:BsBuildings": return [3 /*break*/, 27];
                        case "bs:BsBullseye": return [3 /*break*/, 29];
                        case "bs:BsBusFrontFill": return [3 /*break*/, 31];
                        case "bs:BsBusFront": return [3 /*break*/, 33];
                        case "bs:BsCCircleFill": return [3 /*break*/, 35];
                        case "bs:BsCCircle": return [3 /*break*/, 37];
                        case "bs:BsCSquareFill": return [3 /*break*/, 39];
                        case "bs:BsCSquare": return [3 /*break*/, 41];
                        case "bs:BsCakeFill": return [3 /*break*/, 43];
                        case "bs:BsCake": return [3 /*break*/, 45];
                        case "bs:BsCake2Fill": return [3 /*break*/, 47];
                        case "bs:BsCake2": return [3 /*break*/, 49];
                        case "bs:BsCalculatorFill": return [3 /*break*/, 51];
                        case "bs:BsCalculator": return [3 /*break*/, 53];
                        case "bs:BsCalendarCheckFill": return [3 /*break*/, 55];
                        case "bs:BsCalendarCheck": return [3 /*break*/, 57];
                        case "bs:BsCalendarDateFill": return [3 /*break*/, 59];
                        case "bs:BsCalendarDate": return [3 /*break*/, 61];
                        case "bs:BsCalendarDayFill": return [3 /*break*/, 63];
                        case "bs:BsCalendarDay": return [3 /*break*/, 65];
                        case "bs:BsCalendarEventFill": return [3 /*break*/, 67];
                        case "bs:BsCalendarEvent": return [3 /*break*/, 69];
                        case "bs:BsCalendarFill": return [3 /*break*/, 71];
                        case "bs:BsCalendarHeartFill": return [3 /*break*/, 73];
                        case "bs:BsCalendarHeart": return [3 /*break*/, 75];
                        case "bs:BsCalendarMinusFill": return [3 /*break*/, 77];
                        case "bs:BsCalendarMinus": return [3 /*break*/, 79];
                        case "bs:BsCalendarMonthFill": return [3 /*break*/, 81];
                        case "bs:BsCalendarMonth": return [3 /*break*/, 83];
                        case "bs:BsCalendarPlusFill": return [3 /*break*/, 85];
                        case "bs:BsCalendarPlus": return [3 /*break*/, 87];
                        case "bs:BsCalendarRangeFill": return [3 /*break*/, 89];
                        case "bs:BsCalendarRange": return [3 /*break*/, 91];
                        case "bs:BsCalendarWeekFill": return [3 /*break*/, 93];
                        case "bs:BsCalendarWeek": return [3 /*break*/, 95];
                        case "bs:BsCalendarXFill": return [3 /*break*/, 97];
                        case "bs:BsCalendarX": return [3 /*break*/, 99];
                        case "bs:BsCalendar": return [3 /*break*/, 101];
                        case "bs:BsCalendar2CheckFill": return [3 /*break*/, 103];
                        case "bs:BsCalendar2Check": return [3 /*break*/, 105];
                        case "bs:BsCalendar2DateFill": return [3 /*break*/, 107];
                        case "bs:BsCalendar2Date": return [3 /*break*/, 109];
                        case "bs:BsCalendar2DayFill": return [3 /*break*/, 111];
                        case "bs:BsCalendar2Day": return [3 /*break*/, 113];
                        case "bs:BsCalendar2EventFill": return [3 /*break*/, 115];
                        case "bs:BsCalendar2Event": return [3 /*break*/, 117];
                        case "bs:BsCalendar2Fill": return [3 /*break*/, 119];
                        case "bs:BsCalendar2HeartFill": return [3 /*break*/, 121];
                        case "bs:BsCalendar2Heart": return [3 /*break*/, 123];
                        case "bs:BsCalendar2MinusFill": return [3 /*break*/, 125];
                        case "bs:BsCalendar2Minus": return [3 /*break*/, 127];
                        case "bs:BsCalendar2MonthFill": return [3 /*break*/, 129];
                        case "bs:BsCalendar2Month": return [3 /*break*/, 131];
                        case "bs:BsCalendar2PlusFill": return [3 /*break*/, 133];
                        case "bs:BsCalendar2Plus": return [3 /*break*/, 135];
                        case "bs:BsCalendar2RangeFill": return [3 /*break*/, 137];
                        case "bs:BsCalendar2Range": return [3 /*break*/, 139];
                        case "bs:BsCalendar2WeekFill": return [3 /*break*/, 141];
                        case "bs:BsCalendar2Week": return [3 /*break*/, 143];
                        case "bs:BsCalendar2XFill": return [3 /*break*/, 145];
                        case "bs:BsCalendar2X": return [3 /*break*/, 147];
                        case "bs:BsCalendar2": return [3 /*break*/, 149];
                        case "bs:BsCalendar3EventFill": return [3 /*break*/, 151];
                        case "bs:BsCalendar3Event": return [3 /*break*/, 153];
                        case "bs:BsCalendar3Fill": return [3 /*break*/, 155];
                        case "bs:BsCalendar3RangeFill": return [3 /*break*/, 157];
                        case "bs:BsCalendar3Range": return [3 /*break*/, 159];
                        case "bs:BsCalendar3WeekFill": return [3 /*break*/, 161];
                        case "bs:BsCalendar3Week": return [3 /*break*/, 163];
                        case "bs:BsCalendar3": return [3 /*break*/, 165];
                        case "bs:BsCalendar4Event": return [3 /*break*/, 167];
                        case "bs:BsCalendar4Range": return [3 /*break*/, 169];
                        case "bs:BsCalendar4Week": return [3 /*break*/, 171];
                        case "bs:BsCalendar4": return [3 /*break*/, 173];
                        case "bs:BsCameraFill": return [3 /*break*/, 175];
                        case "bs:BsCameraReelsFill": return [3 /*break*/, 177];
                        case "bs:BsCameraReels": return [3 /*break*/, 179];
                        case "bs:BsCameraVideoFill": return [3 /*break*/, 181];
                        case "bs:BsCameraVideoOffFill": return [3 /*break*/, 183];
                        case "bs:BsCameraVideoOff": return [3 /*break*/, 185];
                        case "bs:BsCameraVideo": return [3 /*break*/, 187];
                        case "bs:BsCamera": return [3 /*break*/, 189];
                        case "bs:BsCamera2": return [3 /*break*/, 191];
                        case "bs:BsCapslockFill": return [3 /*break*/, 193];
                        case "bs:BsCapslock": return [3 /*break*/, 195];
                        case "bs:BsCapsulePill": return [3 /*break*/, 197];
                        case "bs:BsCapsule": return [3 /*break*/, 199];
                        case "bs:BsCarFrontFill": return [3 /*break*/, 201];
                        case "bs:BsCarFront": return [3 /*break*/, 203];
                        case "bs:BsCardChecklist": return [3 /*break*/, 205];
                        case "bs:BsCardHeading": return [3 /*break*/, 207];
                        case "bs:BsCardImage": return [3 /*break*/, 209];
                        case "bs:BsCardList": return [3 /*break*/, 211];
                        case "bs:BsCardText": return [3 /*break*/, 213];
                        case "bs:BsCaretDownFill": return [3 /*break*/, 215];
                        case "bs:BsCaretDownSquareFill": return [3 /*break*/, 217];
                        case "bs:BsCaretDownSquare": return [3 /*break*/, 219];
                        case "bs:BsCaretDown": return [3 /*break*/, 221];
                        case "bs:BsCaretLeftFill": return [3 /*break*/, 223];
                        case "bs:BsCaretLeftSquareFill": return [3 /*break*/, 225];
                        case "bs:BsCaretLeftSquare": return [3 /*break*/, 227];
                        case "bs:BsCaretLeft": return [3 /*break*/, 229];
                        case "bs:BsCaretRightFill": return [3 /*break*/, 231];
                        case "bs:BsCaretRightSquareFill": return [3 /*break*/, 233];
                        case "bs:BsCaretRightSquare": return [3 /*break*/, 235];
                        case "bs:BsCaretRight": return [3 /*break*/, 237];
                        case "bs:BsCaretUpFill": return [3 /*break*/, 239];
                        case "bs:BsCaretUpSquareFill": return [3 /*break*/, 241];
                        case "bs:BsCaretUpSquare": return [3 /*break*/, 243];
                        case "bs:BsCaretUp": return [3 /*break*/, 245];
                        case "bs:BsCartCheckFill": return [3 /*break*/, 247];
                        case "bs:BsCartCheck": return [3 /*break*/, 249];
                        case "bs:BsCartDashFill": return [3 /*break*/, 251];
                        case "bs:BsCartDash": return [3 /*break*/, 253];
                        case "bs:BsCartFill": return [3 /*break*/, 255];
                        case "bs:BsCartPlusFill": return [3 /*break*/, 257];
                        case "bs:BsCartPlus": return [3 /*break*/, 259];
                        case "bs:BsCartXFill": return [3 /*break*/, 261];
                        case "bs:BsCartX": return [3 /*break*/, 263];
                        case "bs:BsCart": return [3 /*break*/, 265];
                        case "bs:BsCart2": return [3 /*break*/, 267];
                        case "bs:BsCart3": return [3 /*break*/, 269];
                        case "bs:BsCart4": return [3 /*break*/, 271];
                        case "bs:BsCashCoin": return [3 /*break*/, 273];
                        case "bs:BsCashStack": return [3 /*break*/, 275];
                        case "bs:BsCash": return [3 /*break*/, 277];
                        case "bs:BsCassetteFill": return [3 /*break*/, 279];
                        case "bs:BsCassette": return [3 /*break*/, 281];
                        case "bs:BsCast": return [3 /*break*/, 283];
                        case "bs:BsCcCircleFill": return [3 /*break*/, 285];
                        case "bs:BsCcCircle": return [3 /*break*/, 287];
                        case "bs:BsCcSquareFill": return [3 /*break*/, 289];
                        case "bs:BsCcSquare": return [3 /*break*/, 291];
                        case "bs:BsChatDotsFill": return [3 /*break*/, 293];
                        case "bs:BsChatDots": return [3 /*break*/, 295];
                        case "bs:BsChatFill": return [3 /*break*/, 297];
                        case "bs:BsChatHeartFill": return [3 /*break*/, 299];
                        case "bs:BsChatHeart": return [3 /*break*/, 301];
                        case "bs:BsChatLeftDotsFill": return [3 /*break*/, 303];
                        case "bs:BsChatLeftDots": return [3 /*break*/, 305];
                        case "bs:BsChatLeftFill": return [3 /*break*/, 307];
                        case "bs:BsChatLeftHeartFill": return [3 /*break*/, 309];
                        case "bs:BsChatLeftHeart": return [3 /*break*/, 311];
                        case "bs:BsChatLeftQuoteFill": return [3 /*break*/, 313];
                        case "bs:BsChatLeftQuote": return [3 /*break*/, 315];
                        case "bs:BsChatLeftTextFill": return [3 /*break*/, 317];
                        case "bs:BsChatLeftText": return [3 /*break*/, 319];
                        case "bs:BsChatLeft": return [3 /*break*/, 321];
                        case "bs:BsChatQuoteFill": return [3 /*break*/, 323];
                        case "bs:BsChatQuote": return [3 /*break*/, 325];
                        case "bs:BsChatRightDotsFill": return [3 /*break*/, 327];
                        case "bs:BsChatRightDots": return [3 /*break*/, 329];
                        case "bs:BsChatRightFill": return [3 /*break*/, 331];
                        case "bs:BsChatRightHeartFill": return [3 /*break*/, 333];
                        case "bs:BsChatRightHeart": return [3 /*break*/, 335];
                        case "bs:BsChatRightQuoteFill": return [3 /*break*/, 337];
                        case "bs:BsChatRightQuote": return [3 /*break*/, 339];
                        case "bs:BsChatRightTextFill": return [3 /*break*/, 341];
                        case "bs:BsChatRightText": return [3 /*break*/, 343];
                        case "bs:BsChatRight": return [3 /*break*/, 345];
                        case "bs:BsChatSquareDotsFill": return [3 /*break*/, 347];
                        case "bs:BsChatSquareDots": return [3 /*break*/, 349];
                        case "bs:BsChatSquareFill": return [3 /*break*/, 351];
                        case "bs:BsChatSquareHeartFill": return [3 /*break*/, 353];
                        case "bs:BsChatSquareHeart": return [3 /*break*/, 355];
                        case "bs:BsChatSquareQuoteFill": return [3 /*break*/, 357];
                        case "bs:BsChatSquareQuote": return [3 /*break*/, 359];
                        case "bs:BsChatSquareTextFill": return [3 /*break*/, 361];
                        case "bs:BsChatSquareText": return [3 /*break*/, 363];
                        case "bs:BsChatSquare": return [3 /*break*/, 365];
                        case "bs:BsChatTextFill": return [3 /*break*/, 367];
                        case "bs:BsChatText": return [3 /*break*/, 369];
                        case "bs:BsChat": return [3 /*break*/, 371];
                        case "bs:BsCheckAll": return [3 /*break*/, 373];
                        case "bs:BsCheckCircleFill": return [3 /*break*/, 375];
                        case "bs:BsCheckCircle": return [3 /*break*/, 377];
                        case "bs:BsCheckLg": return [3 /*break*/, 379];
                        case "bs:BsCheckSquareFill": return [3 /*break*/, 381];
                        case "bs:BsCheckSquare": return [3 /*break*/, 383];
                        case "bs:BsCheck": return [3 /*break*/, 385];
                        case "bs:BsCheck2All": return [3 /*break*/, 387];
                        case "bs:BsCheck2Circle": return [3 /*break*/, 389];
                        case "bs:BsCheck2Square": return [3 /*break*/, 391];
                        case "bs:BsCheck2": return [3 /*break*/, 393];
                        case "bs:BsChevronBarContract": return [3 /*break*/, 395];
                        case "bs:BsChevronBarDown": return [3 /*break*/, 397];
                        case "bs:BsChevronBarExpand": return [3 /*break*/, 399];
                        case "bs:BsChevronBarLeft": return [3 /*break*/, 401];
                        case "bs:BsChevronBarRight": return [3 /*break*/, 403];
                        case "bs:BsChevronBarUp": return [3 /*break*/, 405];
                        case "bs:BsChevronCompactDown": return [3 /*break*/, 407];
                        case "bs:BsChevronCompactLeft": return [3 /*break*/, 409];
                        case "bs:BsChevronCompactRight": return [3 /*break*/, 411];
                        case "bs:BsChevronCompactUp": return [3 /*break*/, 413];
                        case "bs:BsChevronContract": return [3 /*break*/, 415];
                        case "bs:BsChevronDoubleDown": return [3 /*break*/, 417];
                        case "bs:BsChevronDoubleLeft": return [3 /*break*/, 419];
                        case "bs:BsChevronDoubleRight": return [3 /*break*/, 421];
                        case "bs:BsChevronDoubleUp": return [3 /*break*/, 423];
                        case "bs:BsChevronDown": return [3 /*break*/, 425];
                        case "bs:BsChevronExpand": return [3 /*break*/, 427];
                        case "bs:BsChevronLeft": return [3 /*break*/, 429];
                        case "bs:BsChevronRight": return [3 /*break*/, 431];
                        case "bs:BsChevronUp": return [3 /*break*/, 433];
                        case "bs:BsCircleFill": return [3 /*break*/, 435];
                        case "bs:BsCircleHalf": return [3 /*break*/, 437];
                        case "bs:BsCircleSquare": return [3 /*break*/, 439];
                        case "bs:BsCircle": return [3 /*break*/, 441];
                        case "bs:BsClipboardCheckFill": return [3 /*break*/, 443];
                        case "bs:BsClipboardCheck": return [3 /*break*/, 445];
                        case "bs:BsClipboardDataFill": return [3 /*break*/, 447];
                        case "bs:BsClipboardData": return [3 /*break*/, 449];
                        case "bs:BsClipboardFill": return [3 /*break*/, 451];
                        case "bs:BsClipboardHeartFill": return [3 /*break*/, 453];
                        case "bs:BsClipboardHeart": return [3 /*break*/, 455];
                        case "bs:BsClipboardMinusFill": return [3 /*break*/, 457];
                        case "bs:BsClipboardMinus": return [3 /*break*/, 459];
                        case "bs:BsClipboardPlusFill": return [3 /*break*/, 461];
                        case "bs:BsClipboardPlus": return [3 /*break*/, 463];
                        case "bs:BsClipboardPulse": return [3 /*break*/, 465];
                        case "bs:BsClipboardXFill": return [3 /*break*/, 467];
                        case "bs:BsClipboardX": return [3 /*break*/, 469];
                        case "bs:BsClipboard": return [3 /*break*/, 471];
                        case "bs:BsClipboard2CheckFill": return [3 /*break*/, 473];
                        case "bs:BsClipboard2Check": return [3 /*break*/, 475];
                        case "bs:BsClipboard2DataFill": return [3 /*break*/, 477];
                        case "bs:BsClipboard2Data": return [3 /*break*/, 479];
                        case "bs:BsClipboard2Fill": return [3 /*break*/, 481];
                        case "bs:BsClipboard2HeartFill": return [3 /*break*/, 483];
                        case "bs:BsClipboard2Heart": return [3 /*break*/, 485];
                        case "bs:BsClipboard2MinusFill": return [3 /*break*/, 487];
                        case "bs:BsClipboard2Minus": return [3 /*break*/, 489];
                        case "bs:BsClipboard2PlusFill": return [3 /*break*/, 491];
                        case "bs:BsClipboard2Plus": return [3 /*break*/, 493];
                        case "bs:BsClipboard2PulseFill": return [3 /*break*/, 495];
                        case "bs:BsClipboard2Pulse": return [3 /*break*/, 497];
                        case "bs:BsClipboard2XFill": return [3 /*break*/, 499];
                        case "bs:BsClipboard2X": return [3 /*break*/, 501];
                        case "bs:BsClipboard2": return [3 /*break*/, 503];
                        case "bs:BsClockFill": return [3 /*break*/, 505];
                        case "bs:BsClockHistory": return [3 /*break*/, 507];
                        case "bs:BsClock": return [3 /*break*/, 509];
                        case "bs:BsCloudArrowDownFill": return [3 /*break*/, 511];
                        case "bs:BsCloudArrowDown": return [3 /*break*/, 513];
                        case "bs:BsCloudArrowUpFill": return [3 /*break*/, 515];
                        case "bs:BsCloudArrowUp": return [3 /*break*/, 517];
                        case "bs:BsCloudCheckFill": return [3 /*break*/, 519];
                        case "bs:BsCloudCheck": return [3 /*break*/, 521];
                        case "bs:BsCloudDownloadFill": return [3 /*break*/, 523];
                        case "bs:BsCloudDownload": return [3 /*break*/, 525];
                        case "bs:BsCloudDrizzleFill": return [3 /*break*/, 527];
                        case "bs:BsCloudDrizzle": return [3 /*break*/, 529];
                        case "bs:BsCloudFill": return [3 /*break*/, 531];
                        case "bs:BsCloudFogFill": return [3 /*break*/, 533];
                        case "bs:BsCloudFog": return [3 /*break*/, 535];
                        case "bs:BsCloudFog2Fill": return [3 /*break*/, 537];
                        case "bs:BsCloudFog2": return [3 /*break*/, 539];
                        case "bs:BsCloudHailFill": return [3 /*break*/, 541];
                        case "bs:BsCloudHail": return [3 /*break*/, 543];
                        case "bs:BsCloudHazeFill": return [3 /*break*/, 545];
                        case "bs:BsCloudHaze": return [3 /*break*/, 547];
                        case "bs:BsCloudHaze2Fill": return [3 /*break*/, 549];
                        case "bs:BsCloudHaze2": return [3 /*break*/, 551];
                        case "bs:BsCloudLightningFill": return [3 /*break*/, 553];
                        case "bs:BsCloudLightningRainFill": return [3 /*break*/, 555];
                        case "bs:BsCloudLightningRain": return [3 /*break*/, 557];
                        case "bs:BsCloudLightning": return [3 /*break*/, 559];
                        case "bs:BsCloudMinusFill": return [3 /*break*/, 561];
                        case "bs:BsCloudMinus": return [3 /*break*/, 563];
                        case "bs:BsCloudMoonFill": return [3 /*break*/, 565];
                        case "bs:BsCloudMoon": return [3 /*break*/, 567];
                        case "bs:BsCloudPlusFill": return [3 /*break*/, 569];
                        case "bs:BsCloudPlus": return [3 /*break*/, 571];
                        case "bs:BsCloudRainFill": return [3 /*break*/, 573];
                        case "bs:BsCloudRainHeavyFill": return [3 /*break*/, 575];
                        case "bs:BsCloudRainHeavy": return [3 /*break*/, 577];
                        case "bs:BsCloudRain": return [3 /*break*/, 579];
                        case "bs:BsCloudSlashFill": return [3 /*break*/, 581];
                        case "bs:BsCloudSlash": return [3 /*break*/, 583];
                        case "bs:BsCloudSleetFill": return [3 /*break*/, 585];
                        case "bs:BsCloudSleet": return [3 /*break*/, 587];
                        case "bs:BsCloudSnowFill": return [3 /*break*/, 589];
                        case "bs:BsCloudSnow": return [3 /*break*/, 591];
                        case "bs:BsCloudSunFill": return [3 /*break*/, 593];
                        case "bs:BsCloudSun": return [3 /*break*/, 595];
                        case "bs:BsCloudUploadFill": return [3 /*break*/, 597];
                        case "bs:BsCloudUpload": return [3 /*break*/, 599];
                        case "bs:BsCloud": return [3 /*break*/, 601];
                        case "bs:BsCloudsFill": return [3 /*break*/, 603];
                        case "bs:BsClouds": return [3 /*break*/, 605];
                        case "bs:BsCloudyFill": return [3 /*break*/, 607];
                        case "bs:BsCloudy": return [3 /*break*/, 609];
                        case "bs:BsCodeSlash": return [3 /*break*/, 611];
                        case "bs:BsCodeSquare": return [3 /*break*/, 613];
                        case "bs:BsCode": return [3 /*break*/, 615];
                        case "bs:BsCoin": return [3 /*break*/, 617];
                        case "bs:BsCollectionFill": return [3 /*break*/, 619];
                        case "bs:BsCollectionPlayFill": return [3 /*break*/, 621];
                        case "bs:BsCollectionPlay": return [3 /*break*/, 623];
                        case "bs:BsCollection": return [3 /*break*/, 625];
                        case "bs:BsColumnsGap": return [3 /*break*/, 627];
                        case "bs:BsColumns": return [3 /*break*/, 629];
                        case "bs:BsCommand": return [3 /*break*/, 631];
                        case "bs:BsCompassFill": return [3 /*break*/, 633];
                        case "bs:BsCompass": return [3 /*break*/, 635];
                        case "bs:BsConeStriped": return [3 /*break*/, 637];
                        case "bs:BsCone": return [3 /*break*/, 639];
                        case "bs:BsController": return [3 /*break*/, 641];
                        case "bs:BsCookie": return [3 /*break*/, 643];
                        case "bs:BsCopy": return [3 /*break*/, 645];
                        case "bs:BsCpuFill": return [3 /*break*/, 647];
                        case "bs:BsCpu": return [3 /*break*/, 649];
                        case "bs:BsCreditCard2BackFill": return [3 /*break*/, 651];
                        case "bs:BsCreditCard2Back": return [3 /*break*/, 653];
                        case "bs:BsCreditCard2FrontFill": return [3 /*break*/, 655];
                        case "bs:BsCreditCard2Front": return [3 /*break*/, 657];
                        case "bs:BsCreditCardFill": return [3 /*break*/, 659];
                        case "bs:BsCreditCard": return [3 /*break*/, 661];
                        case "bs:BsCrop": return [3 /*break*/, 663];
                        case "bs:BsCrosshair": return [3 /*break*/, 665];
                        case "bs:BsCrosshair2": return [3 /*break*/, 667];
                        case "bs:BsCupFill": return [3 /*break*/, 669];
                        case "bs:BsCupHotFill": return [3 /*break*/, 671];
                        case "bs:BsCupHot": return [3 /*break*/, 673];
                        case "bs:BsCupStraw": return [3 /*break*/, 675];
                        case "bs:BsCup": return [3 /*break*/, 677];
                        case "bs:BsCurrencyBitcoin": return [3 /*break*/, 679];
                        case "bs:BsCurrencyDollar": return [3 /*break*/, 681];
                        case "bs:BsCurrencyEuro": return [3 /*break*/, 683];
                        case "bs:BsCurrencyExchange": return [3 /*break*/, 685];
                        case "bs:BsCurrencyPound": return [3 /*break*/, 687];
                        case "bs:BsCurrencyRupee": return [3 /*break*/, 689];
                        case "bs:BsCurrencyYen": return [3 /*break*/, 691];
                        case "bs:BsCursorFill": return [3 /*break*/, 693];
                        case "bs:BsCursorText": return [3 /*break*/, 695];
                        case "bs:BsCursor": return [3 /*break*/, 697];
                        case "bs:BsDashCircleDotted": return [3 /*break*/, 699];
                        case "bs:BsDashCircleFill": return [3 /*break*/, 701];
                        case "bs:BsDashCircle": return [3 /*break*/, 703];
                        case "bs:BsDashLg": return [3 /*break*/, 705];
                        case "bs:BsDashSquareDotted": return [3 /*break*/, 707];
                        case "bs:BsDashSquareFill": return [3 /*break*/, 709];
                        case "bs:BsDashSquare": return [3 /*break*/, 711];
                        case "bs:BsDash": return [3 /*break*/, 713];
                        case "bs:BsDatabaseAdd": return [3 /*break*/, 715];
                        case "bs:BsDatabaseCheck": return [3 /*break*/, 717];
                        case "bs:BsDatabaseDash": return [3 /*break*/, 719];
                        case "bs:BsDatabaseDown": return [3 /*break*/, 721];
                        case "bs:BsDatabaseExclamation": return [3 /*break*/, 723];
                        case "bs:BsDatabaseFillAdd": return [3 /*break*/, 725];
                        case "bs:BsDatabaseFillCheck": return [3 /*break*/, 727];
                        case "bs:BsDatabaseFillDash": return [3 /*break*/, 729];
                        case "bs:BsDatabaseFillDown": return [3 /*break*/, 731];
                        case "bs:BsDatabaseFillExclamation": return [3 /*break*/, 733];
                        case "bs:BsDatabaseFillGear": return [3 /*break*/, 735];
                        case "bs:BsDatabaseFillLock": return [3 /*break*/, 737];
                        case "bs:BsDatabaseFillSlash": return [3 /*break*/, 739];
                        case "bs:BsDatabaseFillUp": return [3 /*break*/, 741];
                        case "bs:BsDatabaseFillX": return [3 /*break*/, 743];
                        case "bs:BsDatabaseFill": return [3 /*break*/, 745];
                        case "bs:BsDatabaseGear": return [3 /*break*/, 747];
                        case "bs:BsDatabaseLock": return [3 /*break*/, 749];
                        case "bs:BsDatabaseSlash": return [3 /*break*/, 751];
                        case "bs:BsDatabaseUp": return [3 /*break*/, 753];
                        case "bs:BsDatabaseX": return [3 /*break*/, 755];
                        case "bs:BsDatabase": return [3 /*break*/, 757];
                        case "bs:BsDeviceHddFill": return [3 /*break*/, 759];
                        case "bs:BsDeviceHdd": return [3 /*break*/, 761];
                        case "bs:BsDeviceSsdFill": return [3 /*break*/, 763];
                        case "bs:BsDeviceSsd": return [3 /*break*/, 765];
                        case "bs:BsDiagram2Fill": return [3 /*break*/, 767];
                        case "bs:BsDiagram2": return [3 /*break*/, 769];
                        case "bs:BsDiagram3Fill": return [3 /*break*/, 771];
                        case "bs:BsDiagram3": return [3 /*break*/, 773];
                        case "bs:BsDiamondFill": return [3 /*break*/, 775];
                        case "bs:BsDiamondHalf": return [3 /*break*/, 777];
                        case "bs:BsDiamond": return [3 /*break*/, 779];
                        case "bs:BsDice1Fill": return [3 /*break*/, 781];
                        case "bs:BsDice1": return [3 /*break*/, 783];
                        case "bs:BsDice2Fill": return [3 /*break*/, 785];
                        case "bs:BsDice2": return [3 /*break*/, 787];
                        case "bs:BsDice3Fill": return [3 /*break*/, 789];
                        case "bs:BsDice3": return [3 /*break*/, 791];
                        case "bs:BsDice4Fill": return [3 /*break*/, 793];
                        case "bs:BsDice4": return [3 /*break*/, 795];
                        case "bs:BsDice5Fill": return [3 /*break*/, 797];
                        case "bs:BsDice5": return [3 /*break*/, 799];
                        case "bs:BsDice6Fill": return [3 /*break*/, 801];
                        case "bs:BsDice6": return [3 /*break*/, 803];
                        case "bs:BsDiscFill": return [3 /*break*/, 805];
                        case "bs:BsDisc": return [3 /*break*/, 807];
                        case "bs:BsDiscord": return [3 /*break*/, 809];
                        case "bs:BsDisplayFill": return [3 /*break*/, 811];
                        case "bs:BsDisplay": return [3 /*break*/, 813];
                        case "bs:BsDisplayportFill": return [3 /*break*/, 815];
                        case "bs:BsDisplayport": return [3 /*break*/, 817];
                        case "bs:BsDistributeHorizontal": return [3 /*break*/, 819];
                        case "bs:BsDistributeVertical": return [3 /*break*/, 821];
                        case "bs:BsDoorClosedFill": return [3 /*break*/, 823];
                        case "bs:BsDoorClosed": return [3 /*break*/, 825];
                        case "bs:BsDoorOpenFill": return [3 /*break*/, 827];
                        case "bs:BsDoorOpen": return [3 /*break*/, 829];
                        case "bs:BsDot": return [3 /*break*/, 831];
                        case "bs:BsDownload": return [3 /*break*/, 833];
                        case "bs:BsDpadFill": return [3 /*break*/, 835];
                        case "bs:BsDpad": return [3 /*break*/, 837];
                        case "bs:BsDribbble": return [3 /*break*/, 839];
                        case "bs:BsDropbox": return [3 /*break*/, 841];
                        case "bs:BsDropletFill": return [3 /*break*/, 843];
                        case "bs:BsDropletHalf": return [3 /*break*/, 845];
                        case "bs:BsDroplet": return [3 /*break*/, 847];
                        case "bs:BsDuffleFill": return [3 /*break*/, 849];
                        case "bs:BsDuffle": return [3 /*break*/, 851];
                        case "bs:BsEarFill": return [3 /*break*/, 853];
                        case "bs:BsEar": return [3 /*break*/, 855];
                        case "bs:BsEarbuds": return [3 /*break*/, 857];
                        case "bs:BsEaselFill": return [3 /*break*/, 859];
                        case "bs:BsEasel": return [3 /*break*/, 861];
                        case "bs:BsEasel2Fill": return [3 /*break*/, 863];
                        case "bs:BsEasel2": return [3 /*break*/, 865];
                        case "bs:BsEasel3Fill": return [3 /*break*/, 867];
                        case "bs:BsEasel3": return [3 /*break*/, 869];
                        case "bs:BsEggFill": return [3 /*break*/, 871];
                        case "bs:BsEggFried": return [3 /*break*/, 873];
                        case "bs:BsEgg": return [3 /*break*/, 875];
                        case "bs:BsEjectFill": return [3 /*break*/, 877];
                        case "bs:BsEject": return [3 /*break*/, 879];
                        case "bs:BsEmojiAngryFill": return [3 /*break*/, 881];
                        case "bs:BsEmojiAngry": return [3 /*break*/, 883];
                        case "bs:BsEmojiAstonishedFill": return [3 /*break*/, 885];
                        case "bs:BsEmojiAstonished": return [3 /*break*/, 887];
                        case "bs:BsEmojiDizzyFill": return [3 /*break*/, 889];
                        case "bs:BsEmojiDizzy": return [3 /*break*/, 891];
                        case "bs:BsEmojiExpressionlessFill": return [3 /*break*/, 893];
                        case "bs:BsEmojiExpressionless": return [3 /*break*/, 895];
                        case "bs:BsEmojiFrownFill": return [3 /*break*/, 897];
                        case "bs:BsEmojiFrown": return [3 /*break*/, 899];
                        case "bs:BsEmojiGrimaceFill": return [3 /*break*/, 901];
                        case "bs:BsEmojiGrimace": return [3 /*break*/, 903];
                        case "bs:BsEmojiGrinFill": return [3 /*break*/, 905];
                        case "bs:BsEmojiGrin": return [3 /*break*/, 907];
                        case "bs:BsEmojiHeartEyesFill": return [3 /*break*/, 909];
                        case "bs:BsEmojiHeartEyes": return [3 /*break*/, 911];
                        case "bs:BsEmojiKissFill": return [3 /*break*/, 913];
                        case "bs:BsEmojiKiss": return [3 /*break*/, 915];
                        case "bs:BsEmojiLaughingFill": return [3 /*break*/, 917];
                        case "bs:BsEmojiLaughing": return [3 /*break*/, 919];
                        case "bs:BsEmojiNeutralFill": return [3 /*break*/, 921];
                        case "bs:BsEmojiNeutral": return [3 /*break*/, 923];
                        case "bs:BsEmojiSmileFill": return [3 /*break*/, 925];
                        case "bs:BsEmojiSmileUpsideDownFill": return [3 /*break*/, 927];
                        case "bs:BsEmojiSmileUpsideDown": return [3 /*break*/, 929];
                        case "bs:BsEmojiSmile": return [3 /*break*/, 931];
                        case "bs:BsEmojiSunglassesFill": return [3 /*break*/, 933];
                        case "bs:BsEmojiSunglasses": return [3 /*break*/, 935];
                        case "bs:BsEmojiSurpriseFill": return [3 /*break*/, 937];
                        case "bs:BsEmojiSurprise": return [3 /*break*/, 939];
                        case "bs:BsEmojiTearFill": return [3 /*break*/, 941];
                        case "bs:BsEmojiTear": return [3 /*break*/, 943];
                        case "bs:BsEmojiWinkFill": return [3 /*break*/, 945];
                        case "bs:BsEmojiWink": return [3 /*break*/, 947];
                        case "bs:BsEnvelopeArrowDownFill": return [3 /*break*/, 949];
                        case "bs:BsEnvelopeArrowDown": return [3 /*break*/, 951];
                        case "bs:BsEnvelopeArrowUpFill": return [3 /*break*/, 953];
                        case "bs:BsEnvelopeArrowUp": return [3 /*break*/, 955];
                        case "bs:BsEnvelopeAtFill": return [3 /*break*/, 957];
                        case "bs:BsEnvelopeAt": return [3 /*break*/, 959];
                        case "bs:BsEnvelopeCheckFill": return [3 /*break*/, 961];
                        case "bs:BsEnvelopeCheck": return [3 /*break*/, 963];
                        case "bs:BsEnvelopeDashFill": return [3 /*break*/, 965];
                        case "bs:BsEnvelopeDash": return [3 /*break*/, 967];
                        case "bs:BsEnvelopeExclamationFill": return [3 /*break*/, 969];
                        case "bs:BsEnvelopeExclamation": return [3 /*break*/, 971];
                        case "bs:BsEnvelopeFill": return [3 /*break*/, 973];
                        case "bs:BsEnvelopeHeartFill": return [3 /*break*/, 975];
                        case "bs:BsEnvelopeHeart": return [3 /*break*/, 977];
                        case "bs:BsEnvelopeOpenFill": return [3 /*break*/, 979];
                        case "bs:BsEnvelopeOpenHeartFill": return [3 /*break*/, 981];
                        case "bs:BsEnvelopeOpenHeart": return [3 /*break*/, 983];
                        case "bs:BsEnvelopeOpen": return [3 /*break*/, 985];
                        case "bs:BsEnvelopePaperFill": return [3 /*break*/, 987];
                        case "bs:BsEnvelopePaperHeartFill": return [3 /*break*/, 989];
                        case "bs:BsEnvelopePaperHeart": return [3 /*break*/, 991];
                        case "bs:BsEnvelopePaper": return [3 /*break*/, 993];
                        case "bs:BsEnvelopePlusFill": return [3 /*break*/, 995];
                        case "bs:BsEnvelopePlus": return [3 /*break*/, 997];
                        case "bs:BsEnvelopeSlashFill": return [3 /*break*/, 999];
                        case "bs:BsEnvelopeSlash": return [3 /*break*/, 1001];
                        case "bs:BsEnvelopeXFill": return [3 /*break*/, 1003];
                        case "bs:BsEnvelopeX": return [3 /*break*/, 1005];
                        case "bs:BsEnvelope": return [3 /*break*/, 1007];
                        case "bs:BsEraserFill": return [3 /*break*/, 1009];
                        case "bs:BsEraser": return [3 /*break*/, 1011];
                        case "bs:BsEscape": return [3 /*break*/, 1013];
                        case "bs:BsEthernet": return [3 /*break*/, 1015];
                        case "bs:BsEvFrontFill": return [3 /*break*/, 1017];
                        case "bs:BsEvFront": return [3 /*break*/, 1019];
                        case "bs:BsEvStationFill": return [3 /*break*/, 1021];
                        case "bs:BsEvStation": return [3 /*break*/, 1023];
                        case "bs:BsExclamationCircleFill": return [3 /*break*/, 1025];
                        case "bs:BsExclamationCircle": return [3 /*break*/, 1027];
                        case "bs:BsExclamationDiamondFill": return [3 /*break*/, 1029];
                        case "bs:BsExclamationDiamond": return [3 /*break*/, 1031];
                        case "bs:BsExclamationLg": return [3 /*break*/, 1033];
                        case "bs:BsExclamationOctagonFill": return [3 /*break*/, 1035];
                        case "bs:BsExclamationOctagon": return [3 /*break*/, 1037];
                        case "bs:BsExclamationSquareFill": return [3 /*break*/, 1039];
                        case "bs:BsExclamationSquare": return [3 /*break*/, 1041];
                        case "bs:BsExclamationTriangleFill": return [3 /*break*/, 1043];
                        case "bs:BsExclamationTriangle": return [3 /*break*/, 1045];
                        case "bs:BsExclamation": return [3 /*break*/, 1047];
                        case "bs:BsExclude": return [3 /*break*/, 1049];
                        case "bs:BsExplicitFill": return [3 /*break*/, 1051];
                        case "bs:BsExplicit": return [3 /*break*/, 1053];
                        case "bs:BsExposure": return [3 /*break*/, 1055];
                        case "bs:BsEyeFill": return [3 /*break*/, 1057];
                        case "bs:BsEyeSlashFill": return [3 /*break*/, 1059];
                        case "bs:BsEyeSlash": return [3 /*break*/, 1061];
                        case "bs:BsEye": return [3 /*break*/, 1063];
                        case "bs:BsEyedropper": return [3 /*break*/, 1065];
                        case "bs:BsEyeglasses": return [3 /*break*/, 1067];
                        case "bs:BsFacebook": return [3 /*break*/, 1069];
                        case "bs:BsFan": return [3 /*break*/, 1071];
                        case "bs:BsFastForwardBtnFill": return [3 /*break*/, 1073];
                        case "bs:BsFastForwardBtn": return [3 /*break*/, 1075];
                        case "bs:BsFastForwardCircleFill": return [3 /*break*/, 1077];
                        case "bs:BsFastForwardCircle": return [3 /*break*/, 1079];
                        case "bs:BsFastForwardFill": return [3 /*break*/, 1081];
                        case "bs:BsFastForward": return [3 /*break*/, 1083];
                        case "bs:BsFeather": return [3 /*break*/, 1085];
                        case "bs:BsFeather2": return [3 /*break*/, 1087];
                        case "bs:BsFileArrowDownFill": return [3 /*break*/, 1089];
                        case "bs:BsFileArrowDown": return [3 /*break*/, 1091];
                        case "bs:BsFileArrowUpFill": return [3 /*break*/, 1093];
                        case "bs:BsFileArrowUp": return [3 /*break*/, 1095];
                        case "bs:BsFileBarGraphFill": return [3 /*break*/, 1097];
                        case "bs:BsFileBarGraph": return [3 /*break*/, 1099];
                        case "bs:BsFileBinaryFill": return [3 /*break*/, 1101];
                        case "bs:BsFileBinary": return [3 /*break*/, 1103];
                        case "bs:BsFileBreakFill": return [3 /*break*/, 1105];
                        case "bs:BsFileBreak": return [3 /*break*/, 1107];
                        case "bs:BsFileCheckFill": return [3 /*break*/, 1109];
                        case "bs:BsFileCheck": return [3 /*break*/, 1111];
                        case "bs:BsFileCodeFill": return [3 /*break*/, 1113];
                        case "bs:BsFileCode": return [3 /*break*/, 1115];
                        case "bs:BsFileDiffFill": return [3 /*break*/, 1117];
                        case "bs:BsFileDiff": return [3 /*break*/, 1119];
                        case "bs:BsFileEarmarkArrowDownFill": return [3 /*break*/, 1121];
                        case "bs:BsFileEarmarkArrowDown": return [3 /*break*/, 1123];
                        case "bs:BsFileEarmarkArrowUpFill": return [3 /*break*/, 1125];
                        case "bs:BsFileEarmarkArrowUp": return [3 /*break*/, 1127];
                        case "bs:BsFileEarmarkBarGraphFill": return [3 /*break*/, 1129];
                        case "bs:BsFileEarmarkBarGraph": return [3 /*break*/, 1131];
                        case "bs:BsFileEarmarkBinaryFill": return [3 /*break*/, 1133];
                        case "bs:BsFileEarmarkBinary": return [3 /*break*/, 1135];
                        case "bs:BsFileEarmarkBreakFill": return [3 /*break*/, 1137];
                        case "bs:BsFileEarmarkBreak": return [3 /*break*/, 1139];
                        case "bs:BsFileEarmarkCheckFill": return [3 /*break*/, 1141];
                        case "bs:BsFileEarmarkCheck": return [3 /*break*/, 1143];
                        case "bs:BsFileEarmarkCodeFill": return [3 /*break*/, 1145];
                        case "bs:BsFileEarmarkCode": return [3 /*break*/, 1147];
                        case "bs:BsFileEarmarkDiffFill": return [3 /*break*/, 1149];
                        case "bs:BsFileEarmarkDiff": return [3 /*break*/, 1151];
                        case "bs:BsFileEarmarkEaselFill": return [3 /*break*/, 1153];
                        case "bs:BsFileEarmarkEasel": return [3 /*break*/, 1155];
                        case "bs:BsFileEarmarkExcelFill": return [3 /*break*/, 1157];
                        case "bs:BsFileEarmarkExcel": return [3 /*break*/, 1159];
                        case "bs:BsFileEarmarkFill": return [3 /*break*/, 1161];
                        case "bs:BsFileEarmarkFontFill": return [3 /*break*/, 1163];
                        case "bs:BsFileEarmarkFont": return [3 /*break*/, 1165];
                        case "bs:BsFileEarmarkImageFill": return [3 /*break*/, 1167];
                        case "bs:BsFileEarmarkImage": return [3 /*break*/, 1169];
                        case "bs:BsFileEarmarkLockFill": return [3 /*break*/, 1171];
                        case "bs:BsFileEarmarkLock": return [3 /*break*/, 1173];
                        case "bs:BsFileEarmarkLock2Fill": return [3 /*break*/, 1175];
                        case "bs:BsFileEarmarkLock2": return [3 /*break*/, 1177];
                        case "bs:BsFileEarmarkMedicalFill": return [3 /*break*/, 1179];
                        case "bs:BsFileEarmarkMedical": return [3 /*break*/, 1181];
                        case "bs:BsFileEarmarkMinusFill": return [3 /*break*/, 1183];
                        case "bs:BsFileEarmarkMinus": return [3 /*break*/, 1185];
                        case "bs:BsFileEarmarkMusicFill": return [3 /*break*/, 1187];
                        case "bs:BsFileEarmarkMusic": return [3 /*break*/, 1189];
                        case "bs:BsFileEarmarkPdfFill": return [3 /*break*/, 1191];
                        case "bs:BsFileEarmarkPdf": return [3 /*break*/, 1193];
                        case "bs:BsFileEarmarkPersonFill": return [3 /*break*/, 1195];
                        case "bs:BsFileEarmarkPerson": return [3 /*break*/, 1197];
                        case "bs:BsFileEarmarkPlayFill": return [3 /*break*/, 1199];
                        case "bs:BsFileEarmarkPlay": return [3 /*break*/, 1201];
                        case "bs:BsFileEarmarkPlusFill": return [3 /*break*/, 1203];
                        case "bs:BsFileEarmarkPlus": return [3 /*break*/, 1205];
                        case "bs:BsFileEarmarkPostFill": return [3 /*break*/, 1207];
                        case "bs:BsFileEarmarkPost": return [3 /*break*/, 1209];
                        case "bs:BsFileEarmarkPptFill": return [3 /*break*/, 1211];
                        case "bs:BsFileEarmarkPpt": return [3 /*break*/, 1213];
                        case "bs:BsFileEarmarkRichtextFill": return [3 /*break*/, 1215];
                        case "bs:BsFileEarmarkRichtext": return [3 /*break*/, 1217];
                        case "bs:BsFileEarmarkRuledFill": return [3 /*break*/, 1219];
                        case "bs:BsFileEarmarkRuled": return [3 /*break*/, 1221];
                        case "bs:BsFileEarmarkSlidesFill": return [3 /*break*/, 1223];
                        case "bs:BsFileEarmarkSlides": return [3 /*break*/, 1225];
                        case "bs:BsFileEarmarkSpreadsheetFill": return [3 /*break*/, 1227];
                        case "bs:BsFileEarmarkSpreadsheet": return [3 /*break*/, 1229];
                        case "bs:BsFileEarmarkTextFill": return [3 /*break*/, 1231];
                        case "bs:BsFileEarmarkText": return [3 /*break*/, 1233];
                        case "bs:BsFileEarmarkWordFill": return [3 /*break*/, 1235];
                        case "bs:BsFileEarmarkWord": return [3 /*break*/, 1237];
                        case "bs:BsFileEarmarkXFill": return [3 /*break*/, 1239];
                        case "bs:BsFileEarmarkX": return [3 /*break*/, 1241];
                        case "bs:BsFileEarmarkZipFill": return [3 /*break*/, 1243];
                        case "bs:BsFileEarmarkZip": return [3 /*break*/, 1245];
                        case "bs:BsFileEarmark": return [3 /*break*/, 1247];
                        case "bs:BsFileEaselFill": return [3 /*break*/, 1249];
                        case "bs:BsFileEasel": return [3 /*break*/, 1251];
                        case "bs:BsFileExcelFill": return [3 /*break*/, 1253];
                        case "bs:BsFileExcel": return [3 /*break*/, 1255];
                        case "bs:BsFileFill": return [3 /*break*/, 1257];
                        case "bs:BsFileFontFill": return [3 /*break*/, 1259];
                        case "bs:BsFileFont": return [3 /*break*/, 1261];
                        case "bs:BsFileImageFill": return [3 /*break*/, 1263];
                        case "bs:BsFileImage": return [3 /*break*/, 1265];
                        case "bs:BsFileLockFill": return [3 /*break*/, 1267];
                        case "bs:BsFileLock": return [3 /*break*/, 1269];
                        case "bs:BsFileLock2Fill": return [3 /*break*/, 1271];
                        case "bs:BsFileLock2": return [3 /*break*/, 1273];
                        case "bs:BsFileMedicalFill": return [3 /*break*/, 1275];
                        case "bs:BsFileMedical": return [3 /*break*/, 1277];
                        case "bs:BsFileMinusFill": return [3 /*break*/, 1279];
                        case "bs:BsFileMinus": return [3 /*break*/, 1281];
                        case "bs:BsFileMusicFill": return [3 /*break*/, 1283];
                        case "bs:BsFileMusic": return [3 /*break*/, 1285];
                        case "bs:BsFilePdfFill": return [3 /*break*/, 1287];
                        case "bs:BsFilePdf": return [3 /*break*/, 1289];
                        case "bs:BsFilePersonFill": return [3 /*break*/, 1291];
                        case "bs:BsFilePerson": return [3 /*break*/, 1293];
                        case "bs:BsFilePlayFill": return [3 /*break*/, 1295];
                        case "bs:BsFilePlay": return [3 /*break*/, 1297];
                        case "bs:BsFilePlusFill": return [3 /*break*/, 1299];
                        case "bs:BsFilePlus": return [3 /*break*/, 1301];
                        case "bs:BsFilePostFill": return [3 /*break*/, 1303];
                        case "bs:BsFilePost": return [3 /*break*/, 1305];
                        case "bs:BsFilePptFill": return [3 /*break*/, 1307];
                        case "bs:BsFilePpt": return [3 /*break*/, 1309];
                        case "bs:BsFileRichtextFill": return [3 /*break*/, 1311];
                        case "bs:BsFileRichtext": return [3 /*break*/, 1313];
                        case "bs:BsFileRuledFill": return [3 /*break*/, 1315];
                        case "bs:BsFileRuled": return [3 /*break*/, 1317];
                        case "bs:BsFileSlidesFill": return [3 /*break*/, 1319];
                        case "bs:BsFileSlides": return [3 /*break*/, 1321];
                        case "bs:BsFileSpreadsheetFill": return [3 /*break*/, 1323];
                        case "bs:BsFileSpreadsheet": return [3 /*break*/, 1325];
                        case "bs:BsFileTextFill": return [3 /*break*/, 1327];
                        case "bs:BsFileText": return [3 /*break*/, 1329];
                        case "bs:BsFileWordFill": return [3 /*break*/, 1331];
                        case "bs:BsFileWord": return [3 /*break*/, 1333];
                        case "bs:BsFileXFill": return [3 /*break*/, 1335];
                        case "bs:BsFileX": return [3 /*break*/, 1337];
                        case "bs:BsFileZipFill": return [3 /*break*/, 1339];
                        case "bs:BsFileZip": return [3 /*break*/, 1341];
                        case "bs:BsFile": return [3 /*break*/, 1343];
                        case "bs:BsFilesAlt": return [3 /*break*/, 1345];
                        case "bs:BsFiles": return [3 /*break*/, 1347];
                        case "bs:BsFiletypeAac": return [3 /*break*/, 1349];
                        case "bs:BsFiletypeAi": return [3 /*break*/, 1351];
                        case "bs:BsFiletypeBmp": return [3 /*break*/, 1353];
                        case "bs:BsFiletypeCs": return [3 /*break*/, 1355];
                        case "bs:BsFiletypeCss": return [3 /*break*/, 1357];
                        case "bs:BsFiletypeCsv": return [3 /*break*/, 1359];
                        case "bs:BsFiletypeDoc": return [3 /*break*/, 1361];
                        case "bs:BsFiletypeDocx": return [3 /*break*/, 1363];
                        case "bs:BsFiletypeExe": return [3 /*break*/, 1365];
                        case "bs:BsFiletypeGif": return [3 /*break*/, 1367];
                        case "bs:BsFiletypeHeic": return [3 /*break*/, 1369];
                        case "bs:BsFiletypeHtml": return [3 /*break*/, 1371];
                        case "bs:BsFiletypeJava": return [3 /*break*/, 1373];
                        case "bs:BsFiletypeJpg": return [3 /*break*/, 1375];
                        case "bs:BsFiletypeJs": return [3 /*break*/, 1377];
                        case "bs:BsFiletypeJson": return [3 /*break*/, 1379];
                        case "bs:BsFiletypeJsx": return [3 /*break*/, 1381];
                        case "bs:BsFiletypeKey": return [3 /*break*/, 1383];
                        case "bs:BsFiletypeM4P": return [3 /*break*/, 1385];
                        case "bs:BsFiletypeMd": return [3 /*break*/, 1387];
                        case "bs:BsFiletypeMdx": return [3 /*break*/, 1389];
                        case "bs:BsFiletypeMov": return [3 /*break*/, 1391];
                        case "bs:BsFiletypeMp3": return [3 /*break*/, 1393];
                        case "bs:BsFiletypeMp4": return [3 /*break*/, 1395];
                        case "bs:BsFiletypeOtf": return [3 /*break*/, 1397];
                        case "bs:BsFiletypePdf": return [3 /*break*/, 1399];
                        case "bs:BsFiletypePhp": return [3 /*break*/, 1401];
                        case "bs:BsFiletypePng": return [3 /*break*/, 1403];
                        case "bs:BsFiletypePpt": return [3 /*break*/, 1405];
                        case "bs:BsFiletypePptx": return [3 /*break*/, 1407];
                        case "bs:BsFiletypePsd": return [3 /*break*/, 1409];
                        case "bs:BsFiletypePy": return [3 /*break*/, 1411];
                        case "bs:BsFiletypeRaw": return [3 /*break*/, 1413];
                        case "bs:BsFiletypeRb": return [3 /*break*/, 1415];
                        case "bs:BsFiletypeSass": return [3 /*break*/, 1417];
                        case "bs:BsFiletypeScss": return [3 /*break*/, 1419];
                        case "bs:BsFiletypeSh": return [3 /*break*/, 1421];
                        case "bs:BsFiletypeSql": return [3 /*break*/, 1423];
                        case "bs:BsFiletypeSvg": return [3 /*break*/, 1425];
                        case "bs:BsFiletypeTiff": return [3 /*break*/, 1427];
                        case "bs:BsFiletypeTsx": return [3 /*break*/, 1429];
                        case "bs:BsFiletypeTtf": return [3 /*break*/, 1431];
                        case "bs:BsFiletypeTxt": return [3 /*break*/, 1433];
                        case "bs:BsFiletypeWav": return [3 /*break*/, 1435];
                        case "bs:BsFiletypeWoff": return [3 /*break*/, 1437];
                        case "bs:BsFiletypeXls": return [3 /*break*/, 1439];
                        case "bs:BsFiletypeXlsx": return [3 /*break*/, 1441];
                        case "bs:BsFiletypeXml": return [3 /*break*/, 1443];
                        case "bs:BsFiletypeYml": return [3 /*break*/, 1445];
                        case "bs:BsFilm": return [3 /*break*/, 1447];
                        case "bs:BsFilterCircleFill": return [3 /*break*/, 1449];
                        case "bs:BsFilterCircle": return [3 /*break*/, 1451];
                        case "bs:BsFilterLeft": return [3 /*break*/, 1453];
                        case "bs:BsFilterRight": return [3 /*break*/, 1455];
                        case "bs:BsFilterSquareFill": return [3 /*break*/, 1457];
                        case "bs:BsFilterSquare": return [3 /*break*/, 1459];
                        case "bs:BsFilter": return [3 /*break*/, 1461];
                        case "bs:BsFingerprint": return [3 /*break*/, 1463];
                        case "bs:BsFire": return [3 /*break*/, 1465];
                        case "bs:BsFlagFill": return [3 /*break*/, 1467];
                        case "bs:BsFlag": return [3 /*break*/, 1469];
                        case "bs:BsFloppyFill": return [3 /*break*/, 1471];
                        case "bs:BsFloppy": return [3 /*break*/, 1473];
                        case "bs:BsFloppy2Fill": return [3 /*break*/, 1475];
                        case "bs:BsFloppy2": return [3 /*break*/, 1477];
                        case "bs:BsFlower1": return [3 /*break*/, 1479];
                        case "bs:BsFlower2": return [3 /*break*/, 1481];
                        case "bs:BsFlower3": return [3 /*break*/, 1483];
                        case "bs:BsFolderCheck": return [3 /*break*/, 1485];
                        case "bs:BsFolderFill": return [3 /*break*/, 1487];
                        case "bs:BsFolderMinus": return [3 /*break*/, 1489];
                        case "bs:BsFolderPlus": return [3 /*break*/, 1491];
                        case "bs:BsFolderSymlinkFill": return [3 /*break*/, 1493];
                        case "bs:BsFolderSymlink": return [3 /*break*/, 1495];
                        case "bs:BsFolderX": return [3 /*break*/, 1497];
                        case "bs:BsFolder": return [3 /*break*/, 1499];
                        case "bs:BsFolder2Open": return [3 /*break*/, 1501];
                        case "bs:BsFolder2": return [3 /*break*/, 1503];
                        case "bs:BsFonts": return [3 /*break*/, 1505];
                        case "bs:BsForwardFill": return [3 /*break*/, 1507];
                        case "bs:BsForward": return [3 /*break*/, 1509];
                        case "bs:BsFront": return [3 /*break*/, 1511];
                        case "bs:BsFuelPumpDieselFill": return [3 /*break*/, 1513];
                        case "bs:BsFuelPumpDiesel": return [3 /*break*/, 1515];
                        case "bs:BsFuelPumpFill": return [3 /*break*/, 1517];
                        case "bs:BsFuelPump": return [3 /*break*/, 1519];
                        case "bs:BsFullscreenExit": return [3 /*break*/, 1521];
                        case "bs:BsFullscreen": return [3 /*break*/, 1523];
                        case "bs:BsFunnelFill": return [3 /*break*/, 1525];
                        case "bs:BsFunnel": return [3 /*break*/, 1527];
                        case "bs:BsGearFill": return [3 /*break*/, 1529];
                        case "bs:BsGearWideConnected": return [3 /*break*/, 1531];
                        case "bs:BsGearWide": return [3 /*break*/, 1533];
                        case "bs:BsGear": return [3 /*break*/, 1535];
                        case "bs:BsGem": return [3 /*break*/, 1537];
                        case "bs:BsGenderAmbiguous": return [3 /*break*/, 1539];
                        case "bs:BsGenderFemale": return [3 /*break*/, 1541];
                        case "bs:BsGenderMale": return [3 /*break*/, 1543];
                        case "bs:BsGenderNeuter": return [3 /*break*/, 1545];
                        case "bs:BsGenderTrans": return [3 /*break*/, 1547];
                        case "bs:BsGeoAltFill": return [3 /*break*/, 1549];
                        case "bs:BsGeoAlt": return [3 /*break*/, 1551];
                        case "bs:BsGeoFill": return [3 /*break*/, 1553];
                        case "bs:BsGeo": return [3 /*break*/, 1555];
                        case "bs:BsGiftFill": return [3 /*break*/, 1557];
                        case "bs:BsGift": return [3 /*break*/, 1559];
                        case "bs:BsGit": return [3 /*break*/, 1561];
                        case "bs:BsGithub": return [3 /*break*/, 1563];
                        case "bs:BsGitlab": return [3 /*break*/, 1565];
                        case "bs:BsGlobeAmericas": return [3 /*break*/, 1567];
                        case "bs:BsGlobeAsiaAustralia": return [3 /*break*/, 1569];
                        case "bs:BsGlobeCentralSouthAsia": return [3 /*break*/, 1571];
                        case "bs:BsGlobeEuropeAfrica": return [3 /*break*/, 1573];
                        case "bs:BsGlobe": return [3 /*break*/, 1575];
                        case "bs:BsGlobe2": return [3 /*break*/, 1577];
                        case "bs:BsGooglePlay": return [3 /*break*/, 1579];
                        case "bs:BsGoogle": return [3 /*break*/, 1581];
                        case "bs:BsGpuCard": return [3 /*break*/, 1583];
                        case "bs:BsGraphDownArrow": return [3 /*break*/, 1585];
                        case "bs:BsGraphDown": return [3 /*break*/, 1587];
                        case "bs:BsGraphUpArrow": return [3 /*break*/, 1589];
                        case "bs:BsGraphUp": return [3 /*break*/, 1591];
                        case "bs:BsGrid1X2Fill": return [3 /*break*/, 1593];
                        case "bs:BsGrid1X2": return [3 /*break*/, 1595];
                        case "bs:BsGrid3X2GapFill": return [3 /*break*/, 1597];
                        case "bs:BsGrid3X2Gap": return [3 /*break*/, 1599];
                        case "bs:BsGrid3X2": return [3 /*break*/, 1601];
                        case "bs:BsGrid3X3GapFill": return [3 /*break*/, 1603];
                        case "bs:BsGrid3X3Gap": return [3 /*break*/, 1605];
                        case "bs:BsGrid3X3": return [3 /*break*/, 1607];
                        case "bs:BsGridFill": return [3 /*break*/, 1609];
                        case "bs:BsGrid": return [3 /*break*/, 1611];
                        case "bs:BsGripHorizontal": return [3 /*break*/, 1613];
                        case "bs:BsGripVertical": return [3 /*break*/, 1615];
                        case "bs:BsHCircleFill": return [3 /*break*/, 1617];
                        case "bs:BsHCircle": return [3 /*break*/, 1619];
                        case "bs:BsHSquareFill": return [3 /*break*/, 1621];
                        case "bs:BsHSquare": return [3 /*break*/, 1623];
                        case "bs:BsHammer": return [3 /*break*/, 1625];
                        case "bs:BsHandIndexFill": return [3 /*break*/, 1627];
                        case "bs:BsHandIndexThumbFill": return [3 /*break*/, 1629];
                        case "bs:BsHandIndexThumb": return [3 /*break*/, 1631];
                        case "bs:BsHandIndex": return [3 /*break*/, 1633];
                        case "bs:BsHandThumbsDownFill": return [3 /*break*/, 1635];
                        case "bs:BsHandThumbsDown": return [3 /*break*/, 1637];
                        case "bs:BsHandThumbsUpFill": return [3 /*break*/, 1639];
                        case "bs:BsHandThumbsUp": return [3 /*break*/, 1641];
                        case "bs:BsHandbagFill": return [3 /*break*/, 1643];
                        case "bs:BsHandbag": return [3 /*break*/, 1645];
                        case "bs:BsHash": return [3 /*break*/, 1647];
                        case "bs:BsHddFill": return [3 /*break*/, 1649];
                        case "bs:BsHddNetworkFill": return [3 /*break*/, 1651];
                        case "bs:BsHddNetwork": return [3 /*break*/, 1653];
                        case "bs:BsHddRackFill": return [3 /*break*/, 1655];
                        case "bs:BsHddRack": return [3 /*break*/, 1657];
                        case "bs:BsHddStackFill": return [3 /*break*/, 1659];
                        case "bs:BsHddStack": return [3 /*break*/, 1661];
                        case "bs:BsHdd": return [3 /*break*/, 1663];
                        case "bs:BsHdmiFill": return [3 /*break*/, 1665];
                        case "bs:BsHdmi": return [3 /*break*/, 1667];
                        case "bs:BsHeadphones": return [3 /*break*/, 1669];
                        case "bs:BsHeadsetVr": return [3 /*break*/, 1671];
                        case "bs:BsHeadset": return [3 /*break*/, 1673];
                        case "bs:BsHeartArrow": return [3 /*break*/, 1675];
                        case "bs:BsHeartFill": return [3 /*break*/, 1677];
                        case "bs:BsHeartHalf": return [3 /*break*/, 1679];
                        case "bs:BsHeartPulseFill": return [3 /*break*/, 1681];
                        case "bs:BsHeartPulse": return [3 /*break*/, 1683];
                        case "bs:BsHeart": return [3 /*break*/, 1685];
                        case "bs:BsHeartbreakFill": return [3 /*break*/, 1687];
                        case "bs:BsHeartbreak": return [3 /*break*/, 1689];
                        case "bs:BsHearts": return [3 /*break*/, 1691];
                        case "bs:BsHeptagonFill": return [3 /*break*/, 1693];
                        case "bs:BsHeptagonHalf": return [3 /*break*/, 1695];
                        case "bs:BsHeptagon": return [3 /*break*/, 1697];
                        case "bs:BsHexagonFill": return [3 /*break*/, 1699];
                        case "bs:BsHexagonHalf": return [3 /*break*/, 1701];
                        case "bs:BsHexagon": return [3 /*break*/, 1703];
                        case "bs:BsHighlighter": return [3 /*break*/, 1705];
                        case "bs:BsHighlights": return [3 /*break*/, 1707];
                        case "bs:BsHospitalFill": return [3 /*break*/, 1709];
                        case "bs:BsHospital": return [3 /*break*/, 1711];
                        case "bs:BsHourglassBottom": return [3 /*break*/, 1713];
                        case "bs:BsHourglassSplit": return [3 /*break*/, 1715];
                        case "bs:BsHourglassTop": return [3 /*break*/, 1717];
                        case "bs:BsHourglass": return [3 /*break*/, 1719];
                        case "bs:BsHouseAddFill": return [3 /*break*/, 1721];
                        case "bs:BsHouseAdd": return [3 /*break*/, 1723];
                        case "bs:BsHouseCheckFill": return [3 /*break*/, 1725];
                        case "bs:BsHouseCheck": return [3 /*break*/, 1727];
                        case "bs:BsHouseDashFill": return [3 /*break*/, 1729];
                        case "bs:BsHouseDash": return [3 /*break*/, 1731];
                        case "bs:BsHouseDoorFill": return [3 /*break*/, 1733];
                        case "bs:BsHouseDoor": return [3 /*break*/, 1735];
                        case "bs:BsHouseDownFill": return [3 /*break*/, 1737];
                        case "bs:BsHouseDown": return [3 /*break*/, 1739];
                        case "bs:BsHouseExclamationFill": return [3 /*break*/, 1741];
                        case "bs:BsHouseExclamation": return [3 /*break*/, 1743];
                        case "bs:BsHouseFill": return [3 /*break*/, 1745];
                        case "bs:BsHouseGearFill": return [3 /*break*/, 1747];
                        case "bs:BsHouseGear": return [3 /*break*/, 1749];
                        case "bs:BsHouseHeartFill": return [3 /*break*/, 1751];
                        case "bs:BsHouseHeart": return [3 /*break*/, 1753];
                        case "bs:BsHouseLockFill": return [3 /*break*/, 1755];
                        case "bs:BsHouseLock": return [3 /*break*/, 1757];
                        case "bs:BsHouseSlashFill": return [3 /*break*/, 1759];
                        case "bs:BsHouseSlash": return [3 /*break*/, 1761];
                        case "bs:BsHouseUpFill": return [3 /*break*/, 1763];
                        case "bs:BsHouseUp": return [3 /*break*/, 1765];
                        case "bs:BsHouseXFill": return [3 /*break*/, 1767];
                        case "bs:BsHouseX": return [3 /*break*/, 1769];
                        case "bs:BsHouse": return [3 /*break*/, 1771];
                        case "bs:BsHousesFill": return [3 /*break*/, 1773];
                        case "bs:BsHouses": return [3 /*break*/, 1775];
                        case "bs:BsHr": return [3 /*break*/, 1777];
                        case "bs:BsHurricane": return [3 /*break*/, 1779];
                        case "bs:BsHypnotize": return [3 /*break*/, 1781];
                        case "bs:BsImageAlt": return [3 /*break*/, 1783];
                        case "bs:BsImageFill": return [3 /*break*/, 1785];
                        case "bs:BsImage": return [3 /*break*/, 1787];
                        case "bs:BsImages": return [3 /*break*/, 1789];
                        case "bs:BsInboxFill": return [3 /*break*/, 1791];
                        case "bs:BsInbox": return [3 /*break*/, 1793];
                        case "bs:BsInboxesFill": return [3 /*break*/, 1795];
                        case "bs:BsInboxes": return [3 /*break*/, 1797];
                        case "bs:BsIncognito": return [3 /*break*/, 1799];
                        case "bs:BsIndent": return [3 /*break*/, 1801];
                        case "bs:BsInfinity": return [3 /*break*/, 1803];
                        case "bs:BsInfoCircleFill": return [3 /*break*/, 1805];
                        case "bs:BsInfoCircle": return [3 /*break*/, 1807];
                        case "bs:BsInfoLg": return [3 /*break*/, 1809];
                        case "bs:BsInfoSquareFill": return [3 /*break*/, 1811];
                        case "bs:BsInfoSquare": return [3 /*break*/, 1813];
                        case "bs:BsInfo": return [3 /*break*/, 1815];
                        case "bs:BsInputCursorText": return [3 /*break*/, 1817];
                        case "bs:BsInputCursor": return [3 /*break*/, 1819];
                        case "bs:BsInstagram": return [3 /*break*/, 1821];
                        case "bs:BsIntersect": return [3 /*break*/, 1823];
                        case "bs:BsJournalAlbum": return [3 /*break*/, 1825];
                        case "bs:BsJournalArrowDown": return [3 /*break*/, 1827];
                        case "bs:BsJournalArrowUp": return [3 /*break*/, 1829];
                        case "bs:BsJournalBookmarkFill": return [3 /*break*/, 1831];
                        case "bs:BsJournalBookmark": return [3 /*break*/, 1833];
                        case "bs:BsJournalCheck": return [3 /*break*/, 1835];
                        case "bs:BsJournalCode": return [3 /*break*/, 1837];
                        case "bs:BsJournalMedical": return [3 /*break*/, 1839];
                        case "bs:BsJournalMinus": return [3 /*break*/, 1841];
                        case "bs:BsJournalPlus": return [3 /*break*/, 1843];
                        case "bs:BsJournalRichtext": return [3 /*break*/, 1845];
                        case "bs:BsJournalText": return [3 /*break*/, 1847];
                        case "bs:BsJournalX": return [3 /*break*/, 1849];
                        case "bs:BsJournal": return [3 /*break*/, 1851];
                        case "bs:BsJournals": return [3 /*break*/, 1853];
                        case "bs:BsJoystick": return [3 /*break*/, 1855];
                        case "bs:BsJustifyLeft": return [3 /*break*/, 1857];
                        case "bs:BsJustifyRight": return [3 /*break*/, 1859];
                        case "bs:BsJustify": return [3 /*break*/, 1861];
                        case "bs:BsKanbanFill": return [3 /*break*/, 1863];
                        case "bs:BsKanban": return [3 /*break*/, 1865];
                        case "bs:BsKeyFill": return [3 /*break*/, 1867];
                        case "bs:BsKey": return [3 /*break*/, 1869];
                        case "bs:BsKeyboardFill": return [3 /*break*/, 1871];
                        case "bs:BsKeyboard": return [3 /*break*/, 1873];
                        case "bs:BsLadder": return [3 /*break*/, 1875];
                        case "bs:BsLampFill": return [3 /*break*/, 1877];
                        case "bs:BsLamp": return [3 /*break*/, 1879];
                        case "bs:BsLaptopFill": return [3 /*break*/, 1881];
                        case "bs:BsLaptop": return [3 /*break*/, 1883];
                        case "bs:BsLayerBackward": return [3 /*break*/, 1885];
                        case "bs:BsLayerForward": return [3 /*break*/, 1887];
                        case "bs:BsLayersFill": return [3 /*break*/, 1889];
                        case "bs:BsLayersHalf": return [3 /*break*/, 1891];
                        case "bs:BsLayers": return [3 /*break*/, 1893];
                        case "bs:BsLayoutSidebarInsetReverse": return [3 /*break*/, 1895];
                        case "bs:BsLayoutSidebarInset": return [3 /*break*/, 1897];
                        case "bs:BsLayoutSidebarReverse": return [3 /*break*/, 1899];
                        case "bs:BsLayoutSidebar": return [3 /*break*/, 1901];
                        case "bs:BsLayoutSplit": return [3 /*break*/, 1903];
                        case "bs:BsLayoutTextSidebarReverse": return [3 /*break*/, 1905];
                        case "bs:BsLayoutTextSidebar": return [3 /*break*/, 1907];
                        case "bs:BsLayoutTextWindowReverse": return [3 /*break*/, 1909];
                        case "bs:BsLayoutTextWindow": return [3 /*break*/, 1911];
                        case "bs:BsLayoutThreeColumns": return [3 /*break*/, 1913];
                        case "bs:BsLayoutWtf": return [3 /*break*/, 1915];
                        case "bs:BsLifePreserver": return [3 /*break*/, 1917];
                        case "bs:BsLightbulbFill": return [3 /*break*/, 1919];
                        case "bs:BsLightbulbOffFill": return [3 /*break*/, 1921];
                        case "bs:BsLightbulbOff": return [3 /*break*/, 1923];
                        case "bs:BsLightbulb": return [3 /*break*/, 1925];
                        case "bs:BsLightningChargeFill": return [3 /*break*/, 1927];
                        case "bs:BsLightningCharge": return [3 /*break*/, 1929];
                        case "bs:BsLightningFill": return [3 /*break*/, 1931];
                        case "bs:BsLightning": return [3 /*break*/, 1933];
                        case "bs:BsLine": return [3 /*break*/, 1935];
                        case "bs:BsLink45Deg": return [3 /*break*/, 1937];
                        case "bs:BsLink": return [3 /*break*/, 1939];
                        case "bs:BsLinkedin": return [3 /*break*/, 1941];
                        case "bs:BsListCheck": return [3 /*break*/, 1943];
                        case "bs:BsListColumnsReverse": return [3 /*break*/, 1945];
                        case "bs:BsListColumns": return [3 /*break*/, 1947];
                        case "bs:BsListNested": return [3 /*break*/, 1949];
                        case "bs:BsListOl": return [3 /*break*/, 1951];
                        case "bs:BsListStars": return [3 /*break*/, 1953];
                        case "bs:BsListTask": return [3 /*break*/, 1955];
                        case "bs:BsListUl": return [3 /*break*/, 1957];
                        case "bs:BsList": return [3 /*break*/, 1959];
                        case "bs:BsLockFill": return [3 /*break*/, 1961];
                        case "bs:BsLock": return [3 /*break*/, 1963];
                        case "bs:BsLuggageFill": return [3 /*break*/, 1965];
                        case "bs:BsLuggage": return [3 /*break*/, 1967];
                        case "bs:BsLungsFill": return [3 /*break*/, 1969];
                        case "bs:BsLungs": return [3 /*break*/, 1971];
                        case "bs:BsMagic": return [3 /*break*/, 1973];
                        case "bs:BsMagnetFill": return [3 /*break*/, 1975];
                        case "bs:BsMagnet": return [3 /*break*/, 1977];
                        case "bs:BsMailboxFlag": return [3 /*break*/, 1979];
                        case "bs:BsMailbox": return [3 /*break*/, 1981];
                        case "bs:BsMailbox2Flag": return [3 /*break*/, 1983];
                        case "bs:BsMailbox2": return [3 /*break*/, 1985];
                        case "bs:BsMapFill": return [3 /*break*/, 1987];
                        case "bs:BsMap": return [3 /*break*/, 1989];
                        case "bs:BsMarkdownFill": return [3 /*break*/, 1991];
                        case "bs:BsMarkdown": return [3 /*break*/, 1993];
                        case "bs:BsMarkerTip": return [3 /*break*/, 1995];
                        case "bs:BsMask": return [3 /*break*/, 1997];
                        case "bs:BsMastodon": return [3 /*break*/, 1999];
                    }
                    return [3 /*break*/, 2001];
                case 1: return [4 /*yield*/, import("react-icons/bs")];
                case 2:
                    BsBuildingFillGear = (_b.sent()).BsBuildingFillGear;
                    return [2 /*return*/, BsBuildingFillGear];
                case 3: return [4 /*yield*/, import("react-icons/bs")];
                case 4:
                    BsBuildingFillLock = (_b.sent()).BsBuildingFillLock;
                    return [2 /*return*/, BsBuildingFillLock];
                case 5: return [4 /*yield*/, import("react-icons/bs")];
                case 6:
                    BsBuildingFillSlash = (_b.sent()).BsBuildingFillSlash;
                    return [2 /*return*/, BsBuildingFillSlash];
                case 7: return [4 /*yield*/, import("react-icons/bs")];
                case 8:
                    BsBuildingFillUp = (_b.sent()).BsBuildingFillUp;
                    return [2 /*return*/, BsBuildingFillUp];
                case 9: return [4 /*yield*/, import("react-icons/bs")];
                case 10:
                    BsBuildingFillX = (_b.sent()).BsBuildingFillX;
                    return [2 /*return*/, BsBuildingFillX];
                case 11: return [4 /*yield*/, import("react-icons/bs")];
                case 12:
                    BsBuildingFill = (_b.sent()).BsBuildingFill;
                    return [2 /*return*/, BsBuildingFill];
                case 13: return [4 /*yield*/, import("react-icons/bs")];
                case 14:
                    BsBuildingGear = (_b.sent()).BsBuildingGear;
                    return [2 /*return*/, BsBuildingGear];
                case 15: return [4 /*yield*/, import("react-icons/bs")];
                case 16:
                    BsBuildingLock = (_b.sent()).BsBuildingLock;
                    return [2 /*return*/, BsBuildingLock];
                case 17: return [4 /*yield*/, import("react-icons/bs")];
                case 18:
                    BsBuildingSlash = (_b.sent()).BsBuildingSlash;
                    return [2 /*return*/, BsBuildingSlash];
                case 19: return [4 /*yield*/, import("react-icons/bs")];
                case 20:
                    BsBuildingUp = (_b.sent()).BsBuildingUp;
                    return [2 /*return*/, BsBuildingUp];
                case 21: return [4 /*yield*/, import("react-icons/bs")];
                case 22:
                    BsBuildingX = (_b.sent()).BsBuildingX;
                    return [2 /*return*/, BsBuildingX];
                case 23: return [4 /*yield*/, import("react-icons/bs")];
                case 24:
                    BsBuilding = (_b.sent()).BsBuilding;
                    return [2 /*return*/, BsBuilding];
                case 25: return [4 /*yield*/, import("react-icons/bs")];
                case 26:
                    BsBuildingsFill = (_b.sent()).BsBuildingsFill;
                    return [2 /*return*/, BsBuildingsFill];
                case 27: return [4 /*yield*/, import("react-icons/bs")];
                case 28:
                    BsBuildings = (_b.sent()).BsBuildings;
                    return [2 /*return*/, BsBuildings];
                case 29: return [4 /*yield*/, import("react-icons/bs")];
                case 30:
                    BsBullseye = (_b.sent()).BsBullseye;
                    return [2 /*return*/, BsBullseye];
                case 31: return [4 /*yield*/, import("react-icons/bs")];
                case 32:
                    BsBusFrontFill = (_b.sent()).BsBusFrontFill;
                    return [2 /*return*/, BsBusFrontFill];
                case 33: return [4 /*yield*/, import("react-icons/bs")];
                case 34:
                    BsBusFront = (_b.sent()).BsBusFront;
                    return [2 /*return*/, BsBusFront];
                case 35: return [4 /*yield*/, import("react-icons/bs")];
                case 36:
                    BsCCircleFill = (_b.sent()).BsCCircleFill;
                    return [2 /*return*/, BsCCircleFill];
                case 37: return [4 /*yield*/, import("react-icons/bs")];
                case 38:
                    BsCCircle = (_b.sent()).BsCCircle;
                    return [2 /*return*/, BsCCircle];
                case 39: return [4 /*yield*/, import("react-icons/bs")];
                case 40:
                    BsCSquareFill = (_b.sent()).BsCSquareFill;
                    return [2 /*return*/, BsCSquareFill];
                case 41: return [4 /*yield*/, import("react-icons/bs")];
                case 42:
                    BsCSquare = (_b.sent()).BsCSquare;
                    return [2 /*return*/, BsCSquare];
                case 43: return [4 /*yield*/, import("react-icons/bs")];
                case 44:
                    BsCakeFill = (_b.sent()).BsCakeFill;
                    return [2 /*return*/, BsCakeFill];
                case 45: return [4 /*yield*/, import("react-icons/bs")];
                case 46:
                    BsCake = (_b.sent()).BsCake;
                    return [2 /*return*/, BsCake];
                case 47: return [4 /*yield*/, import("react-icons/bs")];
                case 48:
                    BsCake2Fill = (_b.sent()).BsCake2Fill;
                    return [2 /*return*/, BsCake2Fill];
                case 49: return [4 /*yield*/, import("react-icons/bs")];
                case 50:
                    BsCake2 = (_b.sent()).BsCake2;
                    return [2 /*return*/, BsCake2];
                case 51: return [4 /*yield*/, import("react-icons/bs")];
                case 52:
                    BsCalculatorFill = (_b.sent()).BsCalculatorFill;
                    return [2 /*return*/, BsCalculatorFill];
                case 53: return [4 /*yield*/, import("react-icons/bs")];
                case 54:
                    BsCalculator = (_b.sent()).BsCalculator;
                    return [2 /*return*/, BsCalculator];
                case 55: return [4 /*yield*/, import("react-icons/bs")];
                case 56:
                    BsCalendarCheckFill = (_b.sent()).BsCalendarCheckFill;
                    return [2 /*return*/, BsCalendarCheckFill];
                case 57: return [4 /*yield*/, import("react-icons/bs")];
                case 58:
                    BsCalendarCheck = (_b.sent()).BsCalendarCheck;
                    return [2 /*return*/, BsCalendarCheck];
                case 59: return [4 /*yield*/, import("react-icons/bs")];
                case 60:
                    BsCalendarDateFill = (_b.sent()).BsCalendarDateFill;
                    return [2 /*return*/, BsCalendarDateFill];
                case 61: return [4 /*yield*/, import("react-icons/bs")];
                case 62:
                    BsCalendarDate = (_b.sent()).BsCalendarDate;
                    return [2 /*return*/, BsCalendarDate];
                case 63: return [4 /*yield*/, import("react-icons/bs")];
                case 64:
                    BsCalendarDayFill = (_b.sent()).BsCalendarDayFill;
                    return [2 /*return*/, BsCalendarDayFill];
                case 65: return [4 /*yield*/, import("react-icons/bs")];
                case 66:
                    BsCalendarDay = (_b.sent()).BsCalendarDay;
                    return [2 /*return*/, BsCalendarDay];
                case 67: return [4 /*yield*/, import("react-icons/bs")];
                case 68:
                    BsCalendarEventFill = (_b.sent()).BsCalendarEventFill;
                    return [2 /*return*/, BsCalendarEventFill];
                case 69: return [4 /*yield*/, import("react-icons/bs")];
                case 70:
                    BsCalendarEvent = (_b.sent()).BsCalendarEvent;
                    return [2 /*return*/, BsCalendarEvent];
                case 71: return [4 /*yield*/, import("react-icons/bs")];
                case 72:
                    BsCalendarFill = (_b.sent()).BsCalendarFill;
                    return [2 /*return*/, BsCalendarFill];
                case 73: return [4 /*yield*/, import("react-icons/bs")];
                case 74:
                    BsCalendarHeartFill = (_b.sent()).BsCalendarHeartFill;
                    return [2 /*return*/, BsCalendarHeartFill];
                case 75: return [4 /*yield*/, import("react-icons/bs")];
                case 76:
                    BsCalendarHeart = (_b.sent()).BsCalendarHeart;
                    return [2 /*return*/, BsCalendarHeart];
                case 77: return [4 /*yield*/, import("react-icons/bs")];
                case 78:
                    BsCalendarMinusFill = (_b.sent()).BsCalendarMinusFill;
                    return [2 /*return*/, BsCalendarMinusFill];
                case 79: return [4 /*yield*/, import("react-icons/bs")];
                case 80:
                    BsCalendarMinus = (_b.sent()).BsCalendarMinus;
                    return [2 /*return*/, BsCalendarMinus];
                case 81: return [4 /*yield*/, import("react-icons/bs")];
                case 82:
                    BsCalendarMonthFill = (_b.sent()).BsCalendarMonthFill;
                    return [2 /*return*/, BsCalendarMonthFill];
                case 83: return [4 /*yield*/, import("react-icons/bs")];
                case 84:
                    BsCalendarMonth = (_b.sent()).BsCalendarMonth;
                    return [2 /*return*/, BsCalendarMonth];
                case 85: return [4 /*yield*/, import("react-icons/bs")];
                case 86:
                    BsCalendarPlusFill = (_b.sent()).BsCalendarPlusFill;
                    return [2 /*return*/, BsCalendarPlusFill];
                case 87: return [4 /*yield*/, import("react-icons/bs")];
                case 88:
                    BsCalendarPlus = (_b.sent()).BsCalendarPlus;
                    return [2 /*return*/, BsCalendarPlus];
                case 89: return [4 /*yield*/, import("react-icons/bs")];
                case 90:
                    BsCalendarRangeFill = (_b.sent()).BsCalendarRangeFill;
                    return [2 /*return*/, BsCalendarRangeFill];
                case 91: return [4 /*yield*/, import("react-icons/bs")];
                case 92:
                    BsCalendarRange = (_b.sent()).BsCalendarRange;
                    return [2 /*return*/, BsCalendarRange];
                case 93: return [4 /*yield*/, import("react-icons/bs")];
                case 94:
                    BsCalendarWeekFill = (_b.sent()).BsCalendarWeekFill;
                    return [2 /*return*/, BsCalendarWeekFill];
                case 95: return [4 /*yield*/, import("react-icons/bs")];
                case 96:
                    BsCalendarWeek = (_b.sent()).BsCalendarWeek;
                    return [2 /*return*/, BsCalendarWeek];
                case 97: return [4 /*yield*/, import("react-icons/bs")];
                case 98:
                    BsCalendarXFill = (_b.sent()).BsCalendarXFill;
                    return [2 /*return*/, BsCalendarXFill];
                case 99: return [4 /*yield*/, import("react-icons/bs")];
                case 100:
                    BsCalendarX = (_b.sent()).BsCalendarX;
                    return [2 /*return*/, BsCalendarX];
                case 101: return [4 /*yield*/, import("react-icons/bs")];
                case 102:
                    BsCalendar = (_b.sent()).BsCalendar;
                    return [2 /*return*/, BsCalendar];
                case 103: return [4 /*yield*/, import("react-icons/bs")];
                case 104:
                    BsCalendar2CheckFill = (_b.sent()).BsCalendar2CheckFill;
                    return [2 /*return*/, BsCalendar2CheckFill];
                case 105: return [4 /*yield*/, import("react-icons/bs")];
                case 106:
                    BsCalendar2Check = (_b.sent()).BsCalendar2Check;
                    return [2 /*return*/, BsCalendar2Check];
                case 107: return [4 /*yield*/, import("react-icons/bs")];
                case 108:
                    BsCalendar2DateFill = (_b.sent()).BsCalendar2DateFill;
                    return [2 /*return*/, BsCalendar2DateFill];
                case 109: return [4 /*yield*/, import("react-icons/bs")];
                case 110:
                    BsCalendar2Date = (_b.sent()).BsCalendar2Date;
                    return [2 /*return*/, BsCalendar2Date];
                case 111: return [4 /*yield*/, import("react-icons/bs")];
                case 112:
                    BsCalendar2DayFill = (_b.sent()).BsCalendar2DayFill;
                    return [2 /*return*/, BsCalendar2DayFill];
                case 113: return [4 /*yield*/, import("react-icons/bs")];
                case 114:
                    BsCalendar2Day = (_b.sent()).BsCalendar2Day;
                    return [2 /*return*/, BsCalendar2Day];
                case 115: return [4 /*yield*/, import("react-icons/bs")];
                case 116:
                    BsCalendar2EventFill = (_b.sent()).BsCalendar2EventFill;
                    return [2 /*return*/, BsCalendar2EventFill];
                case 117: return [4 /*yield*/, import("react-icons/bs")];
                case 118:
                    BsCalendar2Event = (_b.sent()).BsCalendar2Event;
                    return [2 /*return*/, BsCalendar2Event];
                case 119: return [4 /*yield*/, import("react-icons/bs")];
                case 120:
                    BsCalendar2Fill = (_b.sent()).BsCalendar2Fill;
                    return [2 /*return*/, BsCalendar2Fill];
                case 121: return [4 /*yield*/, import("react-icons/bs")];
                case 122:
                    BsCalendar2HeartFill = (_b.sent()).BsCalendar2HeartFill;
                    return [2 /*return*/, BsCalendar2HeartFill];
                case 123: return [4 /*yield*/, import("react-icons/bs")];
                case 124:
                    BsCalendar2Heart = (_b.sent()).BsCalendar2Heart;
                    return [2 /*return*/, BsCalendar2Heart];
                case 125: return [4 /*yield*/, import("react-icons/bs")];
                case 126:
                    BsCalendar2MinusFill = (_b.sent()).BsCalendar2MinusFill;
                    return [2 /*return*/, BsCalendar2MinusFill];
                case 127: return [4 /*yield*/, import("react-icons/bs")];
                case 128:
                    BsCalendar2Minus = (_b.sent()).BsCalendar2Minus;
                    return [2 /*return*/, BsCalendar2Minus];
                case 129: return [4 /*yield*/, import("react-icons/bs")];
                case 130:
                    BsCalendar2MonthFill = (_b.sent()).BsCalendar2MonthFill;
                    return [2 /*return*/, BsCalendar2MonthFill];
                case 131: return [4 /*yield*/, import("react-icons/bs")];
                case 132:
                    BsCalendar2Month = (_b.sent()).BsCalendar2Month;
                    return [2 /*return*/, BsCalendar2Month];
                case 133: return [4 /*yield*/, import("react-icons/bs")];
                case 134:
                    BsCalendar2PlusFill = (_b.sent()).BsCalendar2PlusFill;
                    return [2 /*return*/, BsCalendar2PlusFill];
                case 135: return [4 /*yield*/, import("react-icons/bs")];
                case 136:
                    BsCalendar2Plus = (_b.sent()).BsCalendar2Plus;
                    return [2 /*return*/, BsCalendar2Plus];
                case 137: return [4 /*yield*/, import("react-icons/bs")];
                case 138:
                    BsCalendar2RangeFill = (_b.sent()).BsCalendar2RangeFill;
                    return [2 /*return*/, BsCalendar2RangeFill];
                case 139: return [4 /*yield*/, import("react-icons/bs")];
                case 140:
                    BsCalendar2Range = (_b.sent()).BsCalendar2Range;
                    return [2 /*return*/, BsCalendar2Range];
                case 141: return [4 /*yield*/, import("react-icons/bs")];
                case 142:
                    BsCalendar2WeekFill = (_b.sent()).BsCalendar2WeekFill;
                    return [2 /*return*/, BsCalendar2WeekFill];
                case 143: return [4 /*yield*/, import("react-icons/bs")];
                case 144:
                    BsCalendar2Week = (_b.sent()).BsCalendar2Week;
                    return [2 /*return*/, BsCalendar2Week];
                case 145: return [4 /*yield*/, import("react-icons/bs")];
                case 146:
                    BsCalendar2XFill = (_b.sent()).BsCalendar2XFill;
                    return [2 /*return*/, BsCalendar2XFill];
                case 147: return [4 /*yield*/, import("react-icons/bs")];
                case 148:
                    BsCalendar2X = (_b.sent()).BsCalendar2X;
                    return [2 /*return*/, BsCalendar2X];
                case 149: return [4 /*yield*/, import("react-icons/bs")];
                case 150:
                    BsCalendar2 = (_b.sent()).BsCalendar2;
                    return [2 /*return*/, BsCalendar2];
                case 151: return [4 /*yield*/, import("react-icons/bs")];
                case 152:
                    BsCalendar3EventFill = (_b.sent()).BsCalendar3EventFill;
                    return [2 /*return*/, BsCalendar3EventFill];
                case 153: return [4 /*yield*/, import("react-icons/bs")];
                case 154:
                    BsCalendar3Event = (_b.sent()).BsCalendar3Event;
                    return [2 /*return*/, BsCalendar3Event];
                case 155: return [4 /*yield*/, import("react-icons/bs")];
                case 156:
                    BsCalendar3Fill = (_b.sent()).BsCalendar3Fill;
                    return [2 /*return*/, BsCalendar3Fill];
                case 157: return [4 /*yield*/, import("react-icons/bs")];
                case 158:
                    BsCalendar3RangeFill = (_b.sent()).BsCalendar3RangeFill;
                    return [2 /*return*/, BsCalendar3RangeFill];
                case 159: return [4 /*yield*/, import("react-icons/bs")];
                case 160:
                    BsCalendar3Range = (_b.sent()).BsCalendar3Range;
                    return [2 /*return*/, BsCalendar3Range];
                case 161: return [4 /*yield*/, import("react-icons/bs")];
                case 162:
                    BsCalendar3WeekFill = (_b.sent()).BsCalendar3WeekFill;
                    return [2 /*return*/, BsCalendar3WeekFill];
                case 163: return [4 /*yield*/, import("react-icons/bs")];
                case 164:
                    BsCalendar3Week = (_b.sent()).BsCalendar3Week;
                    return [2 /*return*/, BsCalendar3Week];
                case 165: return [4 /*yield*/, import("react-icons/bs")];
                case 166:
                    BsCalendar3 = (_b.sent()).BsCalendar3;
                    return [2 /*return*/, BsCalendar3];
                case 167: return [4 /*yield*/, import("react-icons/bs")];
                case 168:
                    BsCalendar4Event = (_b.sent()).BsCalendar4Event;
                    return [2 /*return*/, BsCalendar4Event];
                case 169: return [4 /*yield*/, import("react-icons/bs")];
                case 170:
                    BsCalendar4Range = (_b.sent()).BsCalendar4Range;
                    return [2 /*return*/, BsCalendar4Range];
                case 171: return [4 /*yield*/, import("react-icons/bs")];
                case 172:
                    BsCalendar4Week = (_b.sent()).BsCalendar4Week;
                    return [2 /*return*/, BsCalendar4Week];
                case 173: return [4 /*yield*/, import("react-icons/bs")];
                case 174:
                    BsCalendar4 = (_b.sent()).BsCalendar4;
                    return [2 /*return*/, BsCalendar4];
                case 175: return [4 /*yield*/, import("react-icons/bs")];
                case 176:
                    BsCameraFill = (_b.sent()).BsCameraFill;
                    return [2 /*return*/, BsCameraFill];
                case 177: return [4 /*yield*/, import("react-icons/bs")];
                case 178:
                    BsCameraReelsFill = (_b.sent()).BsCameraReelsFill;
                    return [2 /*return*/, BsCameraReelsFill];
                case 179: return [4 /*yield*/, import("react-icons/bs")];
                case 180:
                    BsCameraReels = (_b.sent()).BsCameraReels;
                    return [2 /*return*/, BsCameraReels];
                case 181: return [4 /*yield*/, import("react-icons/bs")];
                case 182:
                    BsCameraVideoFill = (_b.sent()).BsCameraVideoFill;
                    return [2 /*return*/, BsCameraVideoFill];
                case 183: return [4 /*yield*/, import("react-icons/bs")];
                case 184:
                    BsCameraVideoOffFill = (_b.sent()).BsCameraVideoOffFill;
                    return [2 /*return*/, BsCameraVideoOffFill];
                case 185: return [4 /*yield*/, import("react-icons/bs")];
                case 186:
                    BsCameraVideoOff = (_b.sent()).BsCameraVideoOff;
                    return [2 /*return*/, BsCameraVideoOff];
                case 187: return [4 /*yield*/, import("react-icons/bs")];
                case 188:
                    BsCameraVideo = (_b.sent()).BsCameraVideo;
                    return [2 /*return*/, BsCameraVideo];
                case 189: return [4 /*yield*/, import("react-icons/bs")];
                case 190:
                    BsCamera = (_b.sent()).BsCamera;
                    return [2 /*return*/, BsCamera];
                case 191: return [4 /*yield*/, import("react-icons/bs")];
                case 192:
                    BsCamera2 = (_b.sent()).BsCamera2;
                    return [2 /*return*/, BsCamera2];
                case 193: return [4 /*yield*/, import("react-icons/bs")];
                case 194:
                    BsCapslockFill = (_b.sent()).BsCapslockFill;
                    return [2 /*return*/, BsCapslockFill];
                case 195: return [4 /*yield*/, import("react-icons/bs")];
                case 196:
                    BsCapslock = (_b.sent()).BsCapslock;
                    return [2 /*return*/, BsCapslock];
                case 197: return [4 /*yield*/, import("react-icons/bs")];
                case 198:
                    BsCapsulePill = (_b.sent()).BsCapsulePill;
                    return [2 /*return*/, BsCapsulePill];
                case 199: return [4 /*yield*/, import("react-icons/bs")];
                case 200:
                    BsCapsule = (_b.sent()).BsCapsule;
                    return [2 /*return*/, BsCapsule];
                case 201: return [4 /*yield*/, import("react-icons/bs")];
                case 202:
                    BsCarFrontFill = (_b.sent()).BsCarFrontFill;
                    return [2 /*return*/, BsCarFrontFill];
                case 203: return [4 /*yield*/, import("react-icons/bs")];
                case 204:
                    BsCarFront = (_b.sent()).BsCarFront;
                    return [2 /*return*/, BsCarFront];
                case 205: return [4 /*yield*/, import("react-icons/bs")];
                case 206:
                    BsCardChecklist = (_b.sent()).BsCardChecklist;
                    return [2 /*return*/, BsCardChecklist];
                case 207: return [4 /*yield*/, import("react-icons/bs")];
                case 208:
                    BsCardHeading = (_b.sent()).BsCardHeading;
                    return [2 /*return*/, BsCardHeading];
                case 209: return [4 /*yield*/, import("react-icons/bs")];
                case 210:
                    BsCardImage = (_b.sent()).BsCardImage;
                    return [2 /*return*/, BsCardImage];
                case 211: return [4 /*yield*/, import("react-icons/bs")];
                case 212:
                    BsCardList = (_b.sent()).BsCardList;
                    return [2 /*return*/, BsCardList];
                case 213: return [4 /*yield*/, import("react-icons/bs")];
                case 214:
                    BsCardText = (_b.sent()).BsCardText;
                    return [2 /*return*/, BsCardText];
                case 215: return [4 /*yield*/, import("react-icons/bs")];
                case 216:
                    BsCaretDownFill = (_b.sent()).BsCaretDownFill;
                    return [2 /*return*/, BsCaretDownFill];
                case 217: return [4 /*yield*/, import("react-icons/bs")];
                case 218:
                    BsCaretDownSquareFill = (_b.sent()).BsCaretDownSquareFill;
                    return [2 /*return*/, BsCaretDownSquareFill];
                case 219: return [4 /*yield*/, import("react-icons/bs")];
                case 220:
                    BsCaretDownSquare = (_b.sent()).BsCaretDownSquare;
                    return [2 /*return*/, BsCaretDownSquare];
                case 221: return [4 /*yield*/, import("react-icons/bs")];
                case 222:
                    BsCaretDown = (_b.sent()).BsCaretDown;
                    return [2 /*return*/, BsCaretDown];
                case 223: return [4 /*yield*/, import("react-icons/bs")];
                case 224:
                    BsCaretLeftFill = (_b.sent()).BsCaretLeftFill;
                    return [2 /*return*/, BsCaretLeftFill];
                case 225: return [4 /*yield*/, import("react-icons/bs")];
                case 226:
                    BsCaretLeftSquareFill = (_b.sent()).BsCaretLeftSquareFill;
                    return [2 /*return*/, BsCaretLeftSquareFill];
                case 227: return [4 /*yield*/, import("react-icons/bs")];
                case 228:
                    BsCaretLeftSquare = (_b.sent()).BsCaretLeftSquare;
                    return [2 /*return*/, BsCaretLeftSquare];
                case 229: return [4 /*yield*/, import("react-icons/bs")];
                case 230:
                    BsCaretLeft = (_b.sent()).BsCaretLeft;
                    return [2 /*return*/, BsCaretLeft];
                case 231: return [4 /*yield*/, import("react-icons/bs")];
                case 232:
                    BsCaretRightFill = (_b.sent()).BsCaretRightFill;
                    return [2 /*return*/, BsCaretRightFill];
                case 233: return [4 /*yield*/, import("react-icons/bs")];
                case 234:
                    BsCaretRightSquareFill = (_b.sent()).BsCaretRightSquareFill;
                    return [2 /*return*/, BsCaretRightSquareFill];
                case 235: return [4 /*yield*/, import("react-icons/bs")];
                case 236:
                    BsCaretRightSquare = (_b.sent()).BsCaretRightSquare;
                    return [2 /*return*/, BsCaretRightSquare];
                case 237: return [4 /*yield*/, import("react-icons/bs")];
                case 238:
                    BsCaretRight = (_b.sent()).BsCaretRight;
                    return [2 /*return*/, BsCaretRight];
                case 239: return [4 /*yield*/, import("react-icons/bs")];
                case 240:
                    BsCaretUpFill = (_b.sent()).BsCaretUpFill;
                    return [2 /*return*/, BsCaretUpFill];
                case 241: return [4 /*yield*/, import("react-icons/bs")];
                case 242:
                    BsCaretUpSquareFill = (_b.sent()).BsCaretUpSquareFill;
                    return [2 /*return*/, BsCaretUpSquareFill];
                case 243: return [4 /*yield*/, import("react-icons/bs")];
                case 244:
                    BsCaretUpSquare = (_b.sent()).BsCaretUpSquare;
                    return [2 /*return*/, BsCaretUpSquare];
                case 245: return [4 /*yield*/, import("react-icons/bs")];
                case 246:
                    BsCaretUp = (_b.sent()).BsCaretUp;
                    return [2 /*return*/, BsCaretUp];
                case 247: return [4 /*yield*/, import("react-icons/bs")];
                case 248:
                    BsCartCheckFill = (_b.sent()).BsCartCheckFill;
                    return [2 /*return*/, BsCartCheckFill];
                case 249: return [4 /*yield*/, import("react-icons/bs")];
                case 250:
                    BsCartCheck = (_b.sent()).BsCartCheck;
                    return [2 /*return*/, BsCartCheck];
                case 251: return [4 /*yield*/, import("react-icons/bs")];
                case 252:
                    BsCartDashFill = (_b.sent()).BsCartDashFill;
                    return [2 /*return*/, BsCartDashFill];
                case 253: return [4 /*yield*/, import("react-icons/bs")];
                case 254:
                    BsCartDash = (_b.sent()).BsCartDash;
                    return [2 /*return*/, BsCartDash];
                case 255: return [4 /*yield*/, import("react-icons/bs")];
                case 256:
                    BsCartFill = (_b.sent()).BsCartFill;
                    return [2 /*return*/, BsCartFill];
                case 257: return [4 /*yield*/, import("react-icons/bs")];
                case 258:
                    BsCartPlusFill = (_b.sent()).BsCartPlusFill;
                    return [2 /*return*/, BsCartPlusFill];
                case 259: return [4 /*yield*/, import("react-icons/bs")];
                case 260:
                    BsCartPlus = (_b.sent()).BsCartPlus;
                    return [2 /*return*/, BsCartPlus];
                case 261: return [4 /*yield*/, import("react-icons/bs")];
                case 262:
                    BsCartXFill = (_b.sent()).BsCartXFill;
                    return [2 /*return*/, BsCartXFill];
                case 263: return [4 /*yield*/, import("react-icons/bs")];
                case 264:
                    BsCartX = (_b.sent()).BsCartX;
                    return [2 /*return*/, BsCartX];
                case 265: return [4 /*yield*/, import("react-icons/bs")];
                case 266:
                    BsCart = (_b.sent()).BsCart;
                    return [2 /*return*/, BsCart];
                case 267: return [4 /*yield*/, import("react-icons/bs")];
                case 268:
                    BsCart2 = (_b.sent()).BsCart2;
                    return [2 /*return*/, BsCart2];
                case 269: return [4 /*yield*/, import("react-icons/bs")];
                case 270:
                    BsCart3 = (_b.sent()).BsCart3;
                    return [2 /*return*/, BsCart3];
                case 271: return [4 /*yield*/, import("react-icons/bs")];
                case 272:
                    BsCart4 = (_b.sent()).BsCart4;
                    return [2 /*return*/, BsCart4];
                case 273: return [4 /*yield*/, import("react-icons/bs")];
                case 274:
                    BsCashCoin = (_b.sent()).BsCashCoin;
                    return [2 /*return*/, BsCashCoin];
                case 275: return [4 /*yield*/, import("react-icons/bs")];
                case 276:
                    BsCashStack = (_b.sent()).BsCashStack;
                    return [2 /*return*/, BsCashStack];
                case 277: return [4 /*yield*/, import("react-icons/bs")];
                case 278:
                    BsCash = (_b.sent()).BsCash;
                    return [2 /*return*/, BsCash];
                case 279: return [4 /*yield*/, import("react-icons/bs")];
                case 280:
                    BsCassetteFill = (_b.sent()).BsCassetteFill;
                    return [2 /*return*/, BsCassetteFill];
                case 281: return [4 /*yield*/, import("react-icons/bs")];
                case 282:
                    BsCassette = (_b.sent()).BsCassette;
                    return [2 /*return*/, BsCassette];
                case 283: return [4 /*yield*/, import("react-icons/bs")];
                case 284:
                    BsCast = (_b.sent()).BsCast;
                    return [2 /*return*/, BsCast];
                case 285: return [4 /*yield*/, import("react-icons/bs")];
                case 286:
                    BsCcCircleFill = (_b.sent()).BsCcCircleFill;
                    return [2 /*return*/, BsCcCircleFill];
                case 287: return [4 /*yield*/, import("react-icons/bs")];
                case 288:
                    BsCcCircle = (_b.sent()).BsCcCircle;
                    return [2 /*return*/, BsCcCircle];
                case 289: return [4 /*yield*/, import("react-icons/bs")];
                case 290:
                    BsCcSquareFill = (_b.sent()).BsCcSquareFill;
                    return [2 /*return*/, BsCcSquareFill];
                case 291: return [4 /*yield*/, import("react-icons/bs")];
                case 292:
                    BsCcSquare = (_b.sent()).BsCcSquare;
                    return [2 /*return*/, BsCcSquare];
                case 293: return [4 /*yield*/, import("react-icons/bs")];
                case 294:
                    BsChatDotsFill = (_b.sent()).BsChatDotsFill;
                    return [2 /*return*/, BsChatDotsFill];
                case 295: return [4 /*yield*/, import("react-icons/bs")];
                case 296:
                    BsChatDots = (_b.sent()).BsChatDots;
                    return [2 /*return*/, BsChatDots];
                case 297: return [4 /*yield*/, import("react-icons/bs")];
                case 298:
                    BsChatFill = (_b.sent()).BsChatFill;
                    return [2 /*return*/, BsChatFill];
                case 299: return [4 /*yield*/, import("react-icons/bs")];
                case 300:
                    BsChatHeartFill = (_b.sent()).BsChatHeartFill;
                    return [2 /*return*/, BsChatHeartFill];
                case 301: return [4 /*yield*/, import("react-icons/bs")];
                case 302:
                    BsChatHeart = (_b.sent()).BsChatHeart;
                    return [2 /*return*/, BsChatHeart];
                case 303: return [4 /*yield*/, import("react-icons/bs")];
                case 304:
                    BsChatLeftDotsFill = (_b.sent()).BsChatLeftDotsFill;
                    return [2 /*return*/, BsChatLeftDotsFill];
                case 305: return [4 /*yield*/, import("react-icons/bs")];
                case 306:
                    BsChatLeftDots = (_b.sent()).BsChatLeftDots;
                    return [2 /*return*/, BsChatLeftDots];
                case 307: return [4 /*yield*/, import("react-icons/bs")];
                case 308:
                    BsChatLeftFill = (_b.sent()).BsChatLeftFill;
                    return [2 /*return*/, BsChatLeftFill];
                case 309: return [4 /*yield*/, import("react-icons/bs")];
                case 310:
                    BsChatLeftHeartFill = (_b.sent()).BsChatLeftHeartFill;
                    return [2 /*return*/, BsChatLeftHeartFill];
                case 311: return [4 /*yield*/, import("react-icons/bs")];
                case 312:
                    BsChatLeftHeart = (_b.sent()).BsChatLeftHeart;
                    return [2 /*return*/, BsChatLeftHeart];
                case 313: return [4 /*yield*/, import("react-icons/bs")];
                case 314:
                    BsChatLeftQuoteFill = (_b.sent()).BsChatLeftQuoteFill;
                    return [2 /*return*/, BsChatLeftQuoteFill];
                case 315: return [4 /*yield*/, import("react-icons/bs")];
                case 316:
                    BsChatLeftQuote = (_b.sent()).BsChatLeftQuote;
                    return [2 /*return*/, BsChatLeftQuote];
                case 317: return [4 /*yield*/, import("react-icons/bs")];
                case 318:
                    BsChatLeftTextFill = (_b.sent()).BsChatLeftTextFill;
                    return [2 /*return*/, BsChatLeftTextFill];
                case 319: return [4 /*yield*/, import("react-icons/bs")];
                case 320:
                    BsChatLeftText = (_b.sent()).BsChatLeftText;
                    return [2 /*return*/, BsChatLeftText];
                case 321: return [4 /*yield*/, import("react-icons/bs")];
                case 322:
                    BsChatLeft = (_b.sent()).BsChatLeft;
                    return [2 /*return*/, BsChatLeft];
                case 323: return [4 /*yield*/, import("react-icons/bs")];
                case 324:
                    BsChatQuoteFill = (_b.sent()).BsChatQuoteFill;
                    return [2 /*return*/, BsChatQuoteFill];
                case 325: return [4 /*yield*/, import("react-icons/bs")];
                case 326:
                    BsChatQuote = (_b.sent()).BsChatQuote;
                    return [2 /*return*/, BsChatQuote];
                case 327: return [4 /*yield*/, import("react-icons/bs")];
                case 328:
                    BsChatRightDotsFill = (_b.sent()).BsChatRightDotsFill;
                    return [2 /*return*/, BsChatRightDotsFill];
                case 329: return [4 /*yield*/, import("react-icons/bs")];
                case 330:
                    BsChatRightDots = (_b.sent()).BsChatRightDots;
                    return [2 /*return*/, BsChatRightDots];
                case 331: return [4 /*yield*/, import("react-icons/bs")];
                case 332:
                    BsChatRightFill = (_b.sent()).BsChatRightFill;
                    return [2 /*return*/, BsChatRightFill];
                case 333: return [4 /*yield*/, import("react-icons/bs")];
                case 334:
                    BsChatRightHeartFill = (_b.sent()).BsChatRightHeartFill;
                    return [2 /*return*/, BsChatRightHeartFill];
                case 335: return [4 /*yield*/, import("react-icons/bs")];
                case 336:
                    BsChatRightHeart = (_b.sent()).BsChatRightHeart;
                    return [2 /*return*/, BsChatRightHeart];
                case 337: return [4 /*yield*/, import("react-icons/bs")];
                case 338:
                    BsChatRightQuoteFill = (_b.sent()).BsChatRightQuoteFill;
                    return [2 /*return*/, BsChatRightQuoteFill];
                case 339: return [4 /*yield*/, import("react-icons/bs")];
                case 340:
                    BsChatRightQuote = (_b.sent()).BsChatRightQuote;
                    return [2 /*return*/, BsChatRightQuote];
                case 341: return [4 /*yield*/, import("react-icons/bs")];
                case 342:
                    BsChatRightTextFill = (_b.sent()).BsChatRightTextFill;
                    return [2 /*return*/, BsChatRightTextFill];
                case 343: return [4 /*yield*/, import("react-icons/bs")];
                case 344:
                    BsChatRightText = (_b.sent()).BsChatRightText;
                    return [2 /*return*/, BsChatRightText];
                case 345: return [4 /*yield*/, import("react-icons/bs")];
                case 346:
                    BsChatRight = (_b.sent()).BsChatRight;
                    return [2 /*return*/, BsChatRight];
                case 347: return [4 /*yield*/, import("react-icons/bs")];
                case 348:
                    BsChatSquareDotsFill = (_b.sent()).BsChatSquareDotsFill;
                    return [2 /*return*/, BsChatSquareDotsFill];
                case 349: return [4 /*yield*/, import("react-icons/bs")];
                case 350:
                    BsChatSquareDots = (_b.sent()).BsChatSquareDots;
                    return [2 /*return*/, BsChatSquareDots];
                case 351: return [4 /*yield*/, import("react-icons/bs")];
                case 352:
                    BsChatSquareFill = (_b.sent()).BsChatSquareFill;
                    return [2 /*return*/, BsChatSquareFill];
                case 353: return [4 /*yield*/, import("react-icons/bs")];
                case 354:
                    BsChatSquareHeartFill = (_b.sent()).BsChatSquareHeartFill;
                    return [2 /*return*/, BsChatSquareHeartFill];
                case 355: return [4 /*yield*/, import("react-icons/bs")];
                case 356:
                    BsChatSquareHeart = (_b.sent()).BsChatSquareHeart;
                    return [2 /*return*/, BsChatSquareHeart];
                case 357: return [4 /*yield*/, import("react-icons/bs")];
                case 358:
                    BsChatSquareQuoteFill = (_b.sent()).BsChatSquareQuoteFill;
                    return [2 /*return*/, BsChatSquareQuoteFill];
                case 359: return [4 /*yield*/, import("react-icons/bs")];
                case 360:
                    BsChatSquareQuote = (_b.sent()).BsChatSquareQuote;
                    return [2 /*return*/, BsChatSquareQuote];
                case 361: return [4 /*yield*/, import("react-icons/bs")];
                case 362:
                    BsChatSquareTextFill = (_b.sent()).BsChatSquareTextFill;
                    return [2 /*return*/, BsChatSquareTextFill];
                case 363: return [4 /*yield*/, import("react-icons/bs")];
                case 364:
                    BsChatSquareText = (_b.sent()).BsChatSquareText;
                    return [2 /*return*/, BsChatSquareText];
                case 365: return [4 /*yield*/, import("react-icons/bs")];
                case 366:
                    BsChatSquare = (_b.sent()).BsChatSquare;
                    return [2 /*return*/, BsChatSquare];
                case 367: return [4 /*yield*/, import("react-icons/bs")];
                case 368:
                    BsChatTextFill = (_b.sent()).BsChatTextFill;
                    return [2 /*return*/, BsChatTextFill];
                case 369: return [4 /*yield*/, import("react-icons/bs")];
                case 370:
                    BsChatText = (_b.sent()).BsChatText;
                    return [2 /*return*/, BsChatText];
                case 371: return [4 /*yield*/, import("react-icons/bs")];
                case 372:
                    BsChat = (_b.sent()).BsChat;
                    return [2 /*return*/, BsChat];
                case 373: return [4 /*yield*/, import("react-icons/bs")];
                case 374:
                    BsCheckAll = (_b.sent()).BsCheckAll;
                    return [2 /*return*/, BsCheckAll];
                case 375: return [4 /*yield*/, import("react-icons/bs")];
                case 376:
                    BsCheckCircleFill = (_b.sent()).BsCheckCircleFill;
                    return [2 /*return*/, BsCheckCircleFill];
                case 377: return [4 /*yield*/, import("react-icons/bs")];
                case 378:
                    BsCheckCircle = (_b.sent()).BsCheckCircle;
                    return [2 /*return*/, BsCheckCircle];
                case 379: return [4 /*yield*/, import("react-icons/bs")];
                case 380:
                    BsCheckLg = (_b.sent()).BsCheckLg;
                    return [2 /*return*/, BsCheckLg];
                case 381: return [4 /*yield*/, import("react-icons/bs")];
                case 382:
                    BsCheckSquareFill = (_b.sent()).BsCheckSquareFill;
                    return [2 /*return*/, BsCheckSquareFill];
                case 383: return [4 /*yield*/, import("react-icons/bs")];
                case 384:
                    BsCheckSquare = (_b.sent()).BsCheckSquare;
                    return [2 /*return*/, BsCheckSquare];
                case 385: return [4 /*yield*/, import("react-icons/bs")];
                case 386:
                    BsCheck = (_b.sent()).BsCheck;
                    return [2 /*return*/, BsCheck];
                case 387: return [4 /*yield*/, import("react-icons/bs")];
                case 388:
                    BsCheck2All = (_b.sent()).BsCheck2All;
                    return [2 /*return*/, BsCheck2All];
                case 389: return [4 /*yield*/, import("react-icons/bs")];
                case 390:
                    BsCheck2Circle = (_b.sent()).BsCheck2Circle;
                    return [2 /*return*/, BsCheck2Circle];
                case 391: return [4 /*yield*/, import("react-icons/bs")];
                case 392:
                    BsCheck2Square = (_b.sent()).BsCheck2Square;
                    return [2 /*return*/, BsCheck2Square];
                case 393: return [4 /*yield*/, import("react-icons/bs")];
                case 394:
                    BsCheck2 = (_b.sent()).BsCheck2;
                    return [2 /*return*/, BsCheck2];
                case 395: return [4 /*yield*/, import("react-icons/bs")];
                case 396:
                    BsChevronBarContract = (_b.sent()).BsChevronBarContract;
                    return [2 /*return*/, BsChevronBarContract];
                case 397: return [4 /*yield*/, import("react-icons/bs")];
                case 398:
                    BsChevronBarDown = (_b.sent()).BsChevronBarDown;
                    return [2 /*return*/, BsChevronBarDown];
                case 399: return [4 /*yield*/, import("react-icons/bs")];
                case 400:
                    BsChevronBarExpand = (_b.sent()).BsChevronBarExpand;
                    return [2 /*return*/, BsChevronBarExpand];
                case 401: return [4 /*yield*/, import("react-icons/bs")];
                case 402:
                    BsChevronBarLeft = (_b.sent()).BsChevronBarLeft;
                    return [2 /*return*/, BsChevronBarLeft];
                case 403: return [4 /*yield*/, import("react-icons/bs")];
                case 404:
                    BsChevronBarRight = (_b.sent()).BsChevronBarRight;
                    return [2 /*return*/, BsChevronBarRight];
                case 405: return [4 /*yield*/, import("react-icons/bs")];
                case 406:
                    BsChevronBarUp = (_b.sent()).BsChevronBarUp;
                    return [2 /*return*/, BsChevronBarUp];
                case 407: return [4 /*yield*/, import("react-icons/bs")];
                case 408:
                    BsChevronCompactDown = (_b.sent()).BsChevronCompactDown;
                    return [2 /*return*/, BsChevronCompactDown];
                case 409: return [4 /*yield*/, import("react-icons/bs")];
                case 410:
                    BsChevronCompactLeft = (_b.sent()).BsChevronCompactLeft;
                    return [2 /*return*/, BsChevronCompactLeft];
                case 411: return [4 /*yield*/, import("react-icons/bs")];
                case 412:
                    BsChevronCompactRight = (_b.sent()).BsChevronCompactRight;
                    return [2 /*return*/, BsChevronCompactRight];
                case 413: return [4 /*yield*/, import("react-icons/bs")];
                case 414:
                    BsChevronCompactUp = (_b.sent()).BsChevronCompactUp;
                    return [2 /*return*/, BsChevronCompactUp];
                case 415: return [4 /*yield*/, import("react-icons/bs")];
                case 416:
                    BsChevronContract = (_b.sent()).BsChevronContract;
                    return [2 /*return*/, BsChevronContract];
                case 417: return [4 /*yield*/, import("react-icons/bs")];
                case 418:
                    BsChevronDoubleDown = (_b.sent()).BsChevronDoubleDown;
                    return [2 /*return*/, BsChevronDoubleDown];
                case 419: return [4 /*yield*/, import("react-icons/bs")];
                case 420:
                    BsChevronDoubleLeft = (_b.sent()).BsChevronDoubleLeft;
                    return [2 /*return*/, BsChevronDoubleLeft];
                case 421: return [4 /*yield*/, import("react-icons/bs")];
                case 422:
                    BsChevronDoubleRight = (_b.sent()).BsChevronDoubleRight;
                    return [2 /*return*/, BsChevronDoubleRight];
                case 423: return [4 /*yield*/, import("react-icons/bs")];
                case 424:
                    BsChevronDoubleUp = (_b.sent()).BsChevronDoubleUp;
                    return [2 /*return*/, BsChevronDoubleUp];
                case 425: return [4 /*yield*/, import("react-icons/bs")];
                case 426:
                    BsChevronDown = (_b.sent()).BsChevronDown;
                    return [2 /*return*/, BsChevronDown];
                case 427: return [4 /*yield*/, import("react-icons/bs")];
                case 428:
                    BsChevronExpand = (_b.sent()).BsChevronExpand;
                    return [2 /*return*/, BsChevronExpand];
                case 429: return [4 /*yield*/, import("react-icons/bs")];
                case 430:
                    BsChevronLeft = (_b.sent()).BsChevronLeft;
                    return [2 /*return*/, BsChevronLeft];
                case 431: return [4 /*yield*/, import("react-icons/bs")];
                case 432:
                    BsChevronRight = (_b.sent()).BsChevronRight;
                    return [2 /*return*/, BsChevronRight];
                case 433: return [4 /*yield*/, import("react-icons/bs")];
                case 434:
                    BsChevronUp = (_b.sent()).BsChevronUp;
                    return [2 /*return*/, BsChevronUp];
                case 435: return [4 /*yield*/, import("react-icons/bs")];
                case 436:
                    BsCircleFill = (_b.sent()).BsCircleFill;
                    return [2 /*return*/, BsCircleFill];
                case 437: return [4 /*yield*/, import("react-icons/bs")];
                case 438:
                    BsCircleHalf = (_b.sent()).BsCircleHalf;
                    return [2 /*return*/, BsCircleHalf];
                case 439: return [4 /*yield*/, import("react-icons/bs")];
                case 440:
                    BsCircleSquare = (_b.sent()).BsCircleSquare;
                    return [2 /*return*/, BsCircleSquare];
                case 441: return [4 /*yield*/, import("react-icons/bs")];
                case 442:
                    BsCircle = (_b.sent()).BsCircle;
                    return [2 /*return*/, BsCircle];
                case 443: return [4 /*yield*/, import("react-icons/bs")];
                case 444:
                    BsClipboardCheckFill = (_b.sent()).BsClipboardCheckFill;
                    return [2 /*return*/, BsClipboardCheckFill];
                case 445: return [4 /*yield*/, import("react-icons/bs")];
                case 446:
                    BsClipboardCheck = (_b.sent()).BsClipboardCheck;
                    return [2 /*return*/, BsClipboardCheck];
                case 447: return [4 /*yield*/, import("react-icons/bs")];
                case 448:
                    BsClipboardDataFill = (_b.sent()).BsClipboardDataFill;
                    return [2 /*return*/, BsClipboardDataFill];
                case 449: return [4 /*yield*/, import("react-icons/bs")];
                case 450:
                    BsClipboardData = (_b.sent()).BsClipboardData;
                    return [2 /*return*/, BsClipboardData];
                case 451: return [4 /*yield*/, import("react-icons/bs")];
                case 452:
                    BsClipboardFill = (_b.sent()).BsClipboardFill;
                    return [2 /*return*/, BsClipboardFill];
                case 453: return [4 /*yield*/, import("react-icons/bs")];
                case 454:
                    BsClipboardHeartFill = (_b.sent()).BsClipboardHeartFill;
                    return [2 /*return*/, BsClipboardHeartFill];
                case 455: return [4 /*yield*/, import("react-icons/bs")];
                case 456:
                    BsClipboardHeart = (_b.sent()).BsClipboardHeart;
                    return [2 /*return*/, BsClipboardHeart];
                case 457: return [4 /*yield*/, import("react-icons/bs")];
                case 458:
                    BsClipboardMinusFill = (_b.sent()).BsClipboardMinusFill;
                    return [2 /*return*/, BsClipboardMinusFill];
                case 459: return [4 /*yield*/, import("react-icons/bs")];
                case 460:
                    BsClipboardMinus = (_b.sent()).BsClipboardMinus;
                    return [2 /*return*/, BsClipboardMinus];
                case 461: return [4 /*yield*/, import("react-icons/bs")];
                case 462:
                    BsClipboardPlusFill = (_b.sent()).BsClipboardPlusFill;
                    return [2 /*return*/, BsClipboardPlusFill];
                case 463: return [4 /*yield*/, import("react-icons/bs")];
                case 464:
                    BsClipboardPlus = (_b.sent()).BsClipboardPlus;
                    return [2 /*return*/, BsClipboardPlus];
                case 465: return [4 /*yield*/, import("react-icons/bs")];
                case 466:
                    BsClipboardPulse = (_b.sent()).BsClipboardPulse;
                    return [2 /*return*/, BsClipboardPulse];
                case 467: return [4 /*yield*/, import("react-icons/bs")];
                case 468:
                    BsClipboardXFill = (_b.sent()).BsClipboardXFill;
                    return [2 /*return*/, BsClipboardXFill];
                case 469: return [4 /*yield*/, import("react-icons/bs")];
                case 470:
                    BsClipboardX = (_b.sent()).BsClipboardX;
                    return [2 /*return*/, BsClipboardX];
                case 471: return [4 /*yield*/, import("react-icons/bs")];
                case 472:
                    BsClipboard = (_b.sent()).BsClipboard;
                    return [2 /*return*/, BsClipboard];
                case 473: return [4 /*yield*/, import("react-icons/bs")];
                case 474:
                    BsClipboard2CheckFill = (_b.sent()).BsClipboard2CheckFill;
                    return [2 /*return*/, BsClipboard2CheckFill];
                case 475: return [4 /*yield*/, import("react-icons/bs")];
                case 476:
                    BsClipboard2Check = (_b.sent()).BsClipboard2Check;
                    return [2 /*return*/, BsClipboard2Check];
                case 477: return [4 /*yield*/, import("react-icons/bs")];
                case 478:
                    BsClipboard2DataFill = (_b.sent()).BsClipboard2DataFill;
                    return [2 /*return*/, BsClipboard2DataFill];
                case 479: return [4 /*yield*/, import("react-icons/bs")];
                case 480:
                    BsClipboard2Data = (_b.sent()).BsClipboard2Data;
                    return [2 /*return*/, BsClipboard2Data];
                case 481: return [4 /*yield*/, import("react-icons/bs")];
                case 482:
                    BsClipboard2Fill = (_b.sent()).BsClipboard2Fill;
                    return [2 /*return*/, BsClipboard2Fill];
                case 483: return [4 /*yield*/, import("react-icons/bs")];
                case 484:
                    BsClipboard2HeartFill = (_b.sent()).BsClipboard2HeartFill;
                    return [2 /*return*/, BsClipboard2HeartFill];
                case 485: return [4 /*yield*/, import("react-icons/bs")];
                case 486:
                    BsClipboard2Heart = (_b.sent()).BsClipboard2Heart;
                    return [2 /*return*/, BsClipboard2Heart];
                case 487: return [4 /*yield*/, import("react-icons/bs")];
                case 488:
                    BsClipboard2MinusFill = (_b.sent()).BsClipboard2MinusFill;
                    return [2 /*return*/, BsClipboard2MinusFill];
                case 489: return [4 /*yield*/, import("react-icons/bs")];
                case 490:
                    BsClipboard2Minus = (_b.sent()).BsClipboard2Minus;
                    return [2 /*return*/, BsClipboard2Minus];
                case 491: return [4 /*yield*/, import("react-icons/bs")];
                case 492:
                    BsClipboard2PlusFill = (_b.sent()).BsClipboard2PlusFill;
                    return [2 /*return*/, BsClipboard2PlusFill];
                case 493: return [4 /*yield*/, import("react-icons/bs")];
                case 494:
                    BsClipboard2Plus = (_b.sent()).BsClipboard2Plus;
                    return [2 /*return*/, BsClipboard2Plus];
                case 495: return [4 /*yield*/, import("react-icons/bs")];
                case 496:
                    BsClipboard2PulseFill = (_b.sent()).BsClipboard2PulseFill;
                    return [2 /*return*/, BsClipboard2PulseFill];
                case 497: return [4 /*yield*/, import("react-icons/bs")];
                case 498:
                    BsClipboard2Pulse = (_b.sent()).BsClipboard2Pulse;
                    return [2 /*return*/, BsClipboard2Pulse];
                case 499: return [4 /*yield*/, import("react-icons/bs")];
                case 500:
                    BsClipboard2XFill = (_b.sent()).BsClipboard2XFill;
                    return [2 /*return*/, BsClipboard2XFill];
                case 501: return [4 /*yield*/, import("react-icons/bs")];
                case 502:
                    BsClipboard2X = (_b.sent()).BsClipboard2X;
                    return [2 /*return*/, BsClipboard2X];
                case 503: return [4 /*yield*/, import("react-icons/bs")];
                case 504:
                    BsClipboard2 = (_b.sent()).BsClipboard2;
                    return [2 /*return*/, BsClipboard2];
                case 505: return [4 /*yield*/, import("react-icons/bs")];
                case 506:
                    BsClockFill = (_b.sent()).BsClockFill;
                    return [2 /*return*/, BsClockFill];
                case 507: return [4 /*yield*/, import("react-icons/bs")];
                case 508:
                    BsClockHistory = (_b.sent()).BsClockHistory;
                    return [2 /*return*/, BsClockHistory];
                case 509: return [4 /*yield*/, import("react-icons/bs")];
                case 510:
                    BsClock = (_b.sent()).BsClock;
                    return [2 /*return*/, BsClock];
                case 511: return [4 /*yield*/, import("react-icons/bs")];
                case 512:
                    BsCloudArrowDownFill = (_b.sent()).BsCloudArrowDownFill;
                    return [2 /*return*/, BsCloudArrowDownFill];
                case 513: return [4 /*yield*/, import("react-icons/bs")];
                case 514:
                    BsCloudArrowDown = (_b.sent()).BsCloudArrowDown;
                    return [2 /*return*/, BsCloudArrowDown];
                case 515: return [4 /*yield*/, import("react-icons/bs")];
                case 516:
                    BsCloudArrowUpFill = (_b.sent()).BsCloudArrowUpFill;
                    return [2 /*return*/, BsCloudArrowUpFill];
                case 517: return [4 /*yield*/, import("react-icons/bs")];
                case 518:
                    BsCloudArrowUp = (_b.sent()).BsCloudArrowUp;
                    return [2 /*return*/, BsCloudArrowUp];
                case 519: return [4 /*yield*/, import("react-icons/bs")];
                case 520:
                    BsCloudCheckFill = (_b.sent()).BsCloudCheckFill;
                    return [2 /*return*/, BsCloudCheckFill];
                case 521: return [4 /*yield*/, import("react-icons/bs")];
                case 522:
                    BsCloudCheck = (_b.sent()).BsCloudCheck;
                    return [2 /*return*/, BsCloudCheck];
                case 523: return [4 /*yield*/, import("react-icons/bs")];
                case 524:
                    BsCloudDownloadFill = (_b.sent()).BsCloudDownloadFill;
                    return [2 /*return*/, BsCloudDownloadFill];
                case 525: return [4 /*yield*/, import("react-icons/bs")];
                case 526:
                    BsCloudDownload = (_b.sent()).BsCloudDownload;
                    return [2 /*return*/, BsCloudDownload];
                case 527: return [4 /*yield*/, import("react-icons/bs")];
                case 528:
                    BsCloudDrizzleFill = (_b.sent()).BsCloudDrizzleFill;
                    return [2 /*return*/, BsCloudDrizzleFill];
                case 529: return [4 /*yield*/, import("react-icons/bs")];
                case 530:
                    BsCloudDrizzle = (_b.sent()).BsCloudDrizzle;
                    return [2 /*return*/, BsCloudDrizzle];
                case 531: return [4 /*yield*/, import("react-icons/bs")];
                case 532:
                    BsCloudFill = (_b.sent()).BsCloudFill;
                    return [2 /*return*/, BsCloudFill];
                case 533: return [4 /*yield*/, import("react-icons/bs")];
                case 534:
                    BsCloudFogFill = (_b.sent()).BsCloudFogFill;
                    return [2 /*return*/, BsCloudFogFill];
                case 535: return [4 /*yield*/, import("react-icons/bs")];
                case 536:
                    BsCloudFog = (_b.sent()).BsCloudFog;
                    return [2 /*return*/, BsCloudFog];
                case 537: return [4 /*yield*/, import("react-icons/bs")];
                case 538:
                    BsCloudFog2Fill = (_b.sent()).BsCloudFog2Fill;
                    return [2 /*return*/, BsCloudFog2Fill];
                case 539: return [4 /*yield*/, import("react-icons/bs")];
                case 540:
                    BsCloudFog2 = (_b.sent()).BsCloudFog2;
                    return [2 /*return*/, BsCloudFog2];
                case 541: return [4 /*yield*/, import("react-icons/bs")];
                case 542:
                    BsCloudHailFill = (_b.sent()).BsCloudHailFill;
                    return [2 /*return*/, BsCloudHailFill];
                case 543: return [4 /*yield*/, import("react-icons/bs")];
                case 544:
                    BsCloudHail = (_b.sent()).BsCloudHail;
                    return [2 /*return*/, BsCloudHail];
                case 545: return [4 /*yield*/, import("react-icons/bs")];
                case 546:
                    BsCloudHazeFill = (_b.sent()).BsCloudHazeFill;
                    return [2 /*return*/, BsCloudHazeFill];
                case 547: return [4 /*yield*/, import("react-icons/bs")];
                case 548:
                    BsCloudHaze = (_b.sent()).BsCloudHaze;
                    return [2 /*return*/, BsCloudHaze];
                case 549: return [4 /*yield*/, import("react-icons/bs")];
                case 550:
                    BsCloudHaze2Fill = (_b.sent()).BsCloudHaze2Fill;
                    return [2 /*return*/, BsCloudHaze2Fill];
                case 551: return [4 /*yield*/, import("react-icons/bs")];
                case 552:
                    BsCloudHaze2 = (_b.sent()).BsCloudHaze2;
                    return [2 /*return*/, BsCloudHaze2];
                case 553: return [4 /*yield*/, import("react-icons/bs")];
                case 554:
                    BsCloudLightningFill = (_b.sent()).BsCloudLightningFill;
                    return [2 /*return*/, BsCloudLightningFill];
                case 555: return [4 /*yield*/, import("react-icons/bs")];
                case 556:
                    BsCloudLightningRainFill = (_b.sent()).BsCloudLightningRainFill;
                    return [2 /*return*/, BsCloudLightningRainFill];
                case 557: return [4 /*yield*/, import("react-icons/bs")];
                case 558:
                    BsCloudLightningRain = (_b.sent()).BsCloudLightningRain;
                    return [2 /*return*/, BsCloudLightningRain];
                case 559: return [4 /*yield*/, import("react-icons/bs")];
                case 560:
                    BsCloudLightning = (_b.sent()).BsCloudLightning;
                    return [2 /*return*/, BsCloudLightning];
                case 561: return [4 /*yield*/, import("react-icons/bs")];
                case 562:
                    BsCloudMinusFill = (_b.sent()).BsCloudMinusFill;
                    return [2 /*return*/, BsCloudMinusFill];
                case 563: return [4 /*yield*/, import("react-icons/bs")];
                case 564:
                    BsCloudMinus = (_b.sent()).BsCloudMinus;
                    return [2 /*return*/, BsCloudMinus];
                case 565: return [4 /*yield*/, import("react-icons/bs")];
                case 566:
                    BsCloudMoonFill = (_b.sent()).BsCloudMoonFill;
                    return [2 /*return*/, BsCloudMoonFill];
                case 567: return [4 /*yield*/, import("react-icons/bs")];
                case 568:
                    BsCloudMoon = (_b.sent()).BsCloudMoon;
                    return [2 /*return*/, BsCloudMoon];
                case 569: return [4 /*yield*/, import("react-icons/bs")];
                case 570:
                    BsCloudPlusFill = (_b.sent()).BsCloudPlusFill;
                    return [2 /*return*/, BsCloudPlusFill];
                case 571: return [4 /*yield*/, import("react-icons/bs")];
                case 572:
                    BsCloudPlus = (_b.sent()).BsCloudPlus;
                    return [2 /*return*/, BsCloudPlus];
                case 573: return [4 /*yield*/, import("react-icons/bs")];
                case 574:
                    BsCloudRainFill = (_b.sent()).BsCloudRainFill;
                    return [2 /*return*/, BsCloudRainFill];
                case 575: return [4 /*yield*/, import("react-icons/bs")];
                case 576:
                    BsCloudRainHeavyFill = (_b.sent()).BsCloudRainHeavyFill;
                    return [2 /*return*/, BsCloudRainHeavyFill];
                case 577: return [4 /*yield*/, import("react-icons/bs")];
                case 578:
                    BsCloudRainHeavy = (_b.sent()).BsCloudRainHeavy;
                    return [2 /*return*/, BsCloudRainHeavy];
                case 579: return [4 /*yield*/, import("react-icons/bs")];
                case 580:
                    BsCloudRain = (_b.sent()).BsCloudRain;
                    return [2 /*return*/, BsCloudRain];
                case 581: return [4 /*yield*/, import("react-icons/bs")];
                case 582:
                    BsCloudSlashFill = (_b.sent()).BsCloudSlashFill;
                    return [2 /*return*/, BsCloudSlashFill];
                case 583: return [4 /*yield*/, import("react-icons/bs")];
                case 584:
                    BsCloudSlash = (_b.sent()).BsCloudSlash;
                    return [2 /*return*/, BsCloudSlash];
                case 585: return [4 /*yield*/, import("react-icons/bs")];
                case 586:
                    BsCloudSleetFill = (_b.sent()).BsCloudSleetFill;
                    return [2 /*return*/, BsCloudSleetFill];
                case 587: return [4 /*yield*/, import("react-icons/bs")];
                case 588:
                    BsCloudSleet = (_b.sent()).BsCloudSleet;
                    return [2 /*return*/, BsCloudSleet];
                case 589: return [4 /*yield*/, import("react-icons/bs")];
                case 590:
                    BsCloudSnowFill = (_b.sent()).BsCloudSnowFill;
                    return [2 /*return*/, BsCloudSnowFill];
                case 591: return [4 /*yield*/, import("react-icons/bs")];
                case 592:
                    BsCloudSnow = (_b.sent()).BsCloudSnow;
                    return [2 /*return*/, BsCloudSnow];
                case 593: return [4 /*yield*/, import("react-icons/bs")];
                case 594:
                    BsCloudSunFill = (_b.sent()).BsCloudSunFill;
                    return [2 /*return*/, BsCloudSunFill];
                case 595: return [4 /*yield*/, import("react-icons/bs")];
                case 596:
                    BsCloudSun = (_b.sent()).BsCloudSun;
                    return [2 /*return*/, BsCloudSun];
                case 597: return [4 /*yield*/, import("react-icons/bs")];
                case 598:
                    BsCloudUploadFill = (_b.sent()).BsCloudUploadFill;
                    return [2 /*return*/, BsCloudUploadFill];
                case 599: return [4 /*yield*/, import("react-icons/bs")];
                case 600:
                    BsCloudUpload = (_b.sent()).BsCloudUpload;
                    return [2 /*return*/, BsCloudUpload];
                case 601: return [4 /*yield*/, import("react-icons/bs")];
                case 602:
                    BsCloud = (_b.sent()).BsCloud;
                    return [2 /*return*/, BsCloud];
                case 603: return [4 /*yield*/, import("react-icons/bs")];
                case 604:
                    BsCloudsFill = (_b.sent()).BsCloudsFill;
                    return [2 /*return*/, BsCloudsFill];
                case 605: return [4 /*yield*/, import("react-icons/bs")];
                case 606:
                    BsClouds = (_b.sent()).BsClouds;
                    return [2 /*return*/, BsClouds];
                case 607: return [4 /*yield*/, import("react-icons/bs")];
                case 608:
                    BsCloudyFill = (_b.sent()).BsCloudyFill;
                    return [2 /*return*/, BsCloudyFill];
                case 609: return [4 /*yield*/, import("react-icons/bs")];
                case 610:
                    BsCloudy = (_b.sent()).BsCloudy;
                    return [2 /*return*/, BsCloudy];
                case 611: return [4 /*yield*/, import("react-icons/bs")];
                case 612:
                    BsCodeSlash = (_b.sent()).BsCodeSlash;
                    return [2 /*return*/, BsCodeSlash];
                case 613: return [4 /*yield*/, import("react-icons/bs")];
                case 614:
                    BsCodeSquare = (_b.sent()).BsCodeSquare;
                    return [2 /*return*/, BsCodeSquare];
                case 615: return [4 /*yield*/, import("react-icons/bs")];
                case 616:
                    BsCode = (_b.sent()).BsCode;
                    return [2 /*return*/, BsCode];
                case 617: return [4 /*yield*/, import("react-icons/bs")];
                case 618:
                    BsCoin = (_b.sent()).BsCoin;
                    return [2 /*return*/, BsCoin];
                case 619: return [4 /*yield*/, import("react-icons/bs")];
                case 620:
                    BsCollectionFill = (_b.sent()).BsCollectionFill;
                    return [2 /*return*/, BsCollectionFill];
                case 621: return [4 /*yield*/, import("react-icons/bs")];
                case 622:
                    BsCollectionPlayFill = (_b.sent()).BsCollectionPlayFill;
                    return [2 /*return*/, BsCollectionPlayFill];
                case 623: return [4 /*yield*/, import("react-icons/bs")];
                case 624:
                    BsCollectionPlay = (_b.sent()).BsCollectionPlay;
                    return [2 /*return*/, BsCollectionPlay];
                case 625: return [4 /*yield*/, import("react-icons/bs")];
                case 626:
                    BsCollection = (_b.sent()).BsCollection;
                    return [2 /*return*/, BsCollection];
                case 627: return [4 /*yield*/, import("react-icons/bs")];
                case 628:
                    BsColumnsGap = (_b.sent()).BsColumnsGap;
                    return [2 /*return*/, BsColumnsGap];
                case 629: return [4 /*yield*/, import("react-icons/bs")];
                case 630:
                    BsColumns = (_b.sent()).BsColumns;
                    return [2 /*return*/, BsColumns];
                case 631: return [4 /*yield*/, import("react-icons/bs")];
                case 632:
                    BsCommand = (_b.sent()).BsCommand;
                    return [2 /*return*/, BsCommand];
                case 633: return [4 /*yield*/, import("react-icons/bs")];
                case 634:
                    BsCompassFill = (_b.sent()).BsCompassFill;
                    return [2 /*return*/, BsCompassFill];
                case 635: return [4 /*yield*/, import("react-icons/bs")];
                case 636:
                    BsCompass = (_b.sent()).BsCompass;
                    return [2 /*return*/, BsCompass];
                case 637: return [4 /*yield*/, import("react-icons/bs")];
                case 638:
                    BsConeStriped = (_b.sent()).BsConeStriped;
                    return [2 /*return*/, BsConeStriped];
                case 639: return [4 /*yield*/, import("react-icons/bs")];
                case 640:
                    BsCone = (_b.sent()).BsCone;
                    return [2 /*return*/, BsCone];
                case 641: return [4 /*yield*/, import("react-icons/bs")];
                case 642:
                    BsController = (_b.sent()).BsController;
                    return [2 /*return*/, BsController];
                case 643: return [4 /*yield*/, import("react-icons/bs")];
                case 644:
                    BsCookie = (_b.sent()).BsCookie;
                    return [2 /*return*/, BsCookie];
                case 645: return [4 /*yield*/, import("react-icons/bs")];
                case 646:
                    BsCopy = (_b.sent()).BsCopy;
                    return [2 /*return*/, BsCopy];
                case 647: return [4 /*yield*/, import("react-icons/bs")];
                case 648:
                    BsCpuFill = (_b.sent()).BsCpuFill;
                    return [2 /*return*/, BsCpuFill];
                case 649: return [4 /*yield*/, import("react-icons/bs")];
                case 650:
                    BsCpu = (_b.sent()).BsCpu;
                    return [2 /*return*/, BsCpu];
                case 651: return [4 /*yield*/, import("react-icons/bs")];
                case 652:
                    BsCreditCard2BackFill = (_b.sent()).BsCreditCard2BackFill;
                    return [2 /*return*/, BsCreditCard2BackFill];
                case 653: return [4 /*yield*/, import("react-icons/bs")];
                case 654:
                    BsCreditCard2Back = (_b.sent()).BsCreditCard2Back;
                    return [2 /*return*/, BsCreditCard2Back];
                case 655: return [4 /*yield*/, import("react-icons/bs")];
                case 656:
                    BsCreditCard2FrontFill = (_b.sent()).BsCreditCard2FrontFill;
                    return [2 /*return*/, BsCreditCard2FrontFill];
                case 657: return [4 /*yield*/, import("react-icons/bs")];
                case 658:
                    BsCreditCard2Front = (_b.sent()).BsCreditCard2Front;
                    return [2 /*return*/, BsCreditCard2Front];
                case 659: return [4 /*yield*/, import("react-icons/bs")];
                case 660:
                    BsCreditCardFill = (_b.sent()).BsCreditCardFill;
                    return [2 /*return*/, BsCreditCardFill];
                case 661: return [4 /*yield*/, import("react-icons/bs")];
                case 662:
                    BsCreditCard = (_b.sent()).BsCreditCard;
                    return [2 /*return*/, BsCreditCard];
                case 663: return [4 /*yield*/, import("react-icons/bs")];
                case 664:
                    BsCrop = (_b.sent()).BsCrop;
                    return [2 /*return*/, BsCrop];
                case 665: return [4 /*yield*/, import("react-icons/bs")];
                case 666:
                    BsCrosshair = (_b.sent()).BsCrosshair;
                    return [2 /*return*/, BsCrosshair];
                case 667: return [4 /*yield*/, import("react-icons/bs")];
                case 668:
                    BsCrosshair2 = (_b.sent()).BsCrosshair2;
                    return [2 /*return*/, BsCrosshair2];
                case 669: return [4 /*yield*/, import("react-icons/bs")];
                case 670:
                    BsCupFill = (_b.sent()).BsCupFill;
                    return [2 /*return*/, BsCupFill];
                case 671: return [4 /*yield*/, import("react-icons/bs")];
                case 672:
                    BsCupHotFill = (_b.sent()).BsCupHotFill;
                    return [2 /*return*/, BsCupHotFill];
                case 673: return [4 /*yield*/, import("react-icons/bs")];
                case 674:
                    BsCupHot = (_b.sent()).BsCupHot;
                    return [2 /*return*/, BsCupHot];
                case 675: return [4 /*yield*/, import("react-icons/bs")];
                case 676:
                    BsCupStraw = (_b.sent()).BsCupStraw;
                    return [2 /*return*/, BsCupStraw];
                case 677: return [4 /*yield*/, import("react-icons/bs")];
                case 678:
                    BsCup = (_b.sent()).BsCup;
                    return [2 /*return*/, BsCup];
                case 679: return [4 /*yield*/, import("react-icons/bs")];
                case 680:
                    BsCurrencyBitcoin = (_b.sent()).BsCurrencyBitcoin;
                    return [2 /*return*/, BsCurrencyBitcoin];
                case 681: return [4 /*yield*/, import("react-icons/bs")];
                case 682:
                    BsCurrencyDollar = (_b.sent()).BsCurrencyDollar;
                    return [2 /*return*/, BsCurrencyDollar];
                case 683: return [4 /*yield*/, import("react-icons/bs")];
                case 684:
                    BsCurrencyEuro = (_b.sent()).BsCurrencyEuro;
                    return [2 /*return*/, BsCurrencyEuro];
                case 685: return [4 /*yield*/, import("react-icons/bs")];
                case 686:
                    BsCurrencyExchange = (_b.sent()).BsCurrencyExchange;
                    return [2 /*return*/, BsCurrencyExchange];
                case 687: return [4 /*yield*/, import("react-icons/bs")];
                case 688:
                    BsCurrencyPound = (_b.sent()).BsCurrencyPound;
                    return [2 /*return*/, BsCurrencyPound];
                case 689: return [4 /*yield*/, import("react-icons/bs")];
                case 690:
                    BsCurrencyRupee = (_b.sent()).BsCurrencyRupee;
                    return [2 /*return*/, BsCurrencyRupee];
                case 691: return [4 /*yield*/, import("react-icons/bs")];
                case 692:
                    BsCurrencyYen = (_b.sent()).BsCurrencyYen;
                    return [2 /*return*/, BsCurrencyYen];
                case 693: return [4 /*yield*/, import("react-icons/bs")];
                case 694:
                    BsCursorFill = (_b.sent()).BsCursorFill;
                    return [2 /*return*/, BsCursorFill];
                case 695: return [4 /*yield*/, import("react-icons/bs")];
                case 696:
                    BsCursorText = (_b.sent()).BsCursorText;
                    return [2 /*return*/, BsCursorText];
                case 697: return [4 /*yield*/, import("react-icons/bs")];
                case 698:
                    BsCursor = (_b.sent()).BsCursor;
                    return [2 /*return*/, BsCursor];
                case 699: return [4 /*yield*/, import("react-icons/bs")];
                case 700:
                    BsDashCircleDotted = (_b.sent()).BsDashCircleDotted;
                    return [2 /*return*/, BsDashCircleDotted];
                case 701: return [4 /*yield*/, import("react-icons/bs")];
                case 702:
                    BsDashCircleFill = (_b.sent()).BsDashCircleFill;
                    return [2 /*return*/, BsDashCircleFill];
                case 703: return [4 /*yield*/, import("react-icons/bs")];
                case 704:
                    BsDashCircle = (_b.sent()).BsDashCircle;
                    return [2 /*return*/, BsDashCircle];
                case 705: return [4 /*yield*/, import("react-icons/bs")];
                case 706:
                    BsDashLg = (_b.sent()).BsDashLg;
                    return [2 /*return*/, BsDashLg];
                case 707: return [4 /*yield*/, import("react-icons/bs")];
                case 708:
                    BsDashSquareDotted = (_b.sent()).BsDashSquareDotted;
                    return [2 /*return*/, BsDashSquareDotted];
                case 709: return [4 /*yield*/, import("react-icons/bs")];
                case 710:
                    BsDashSquareFill = (_b.sent()).BsDashSquareFill;
                    return [2 /*return*/, BsDashSquareFill];
                case 711: return [4 /*yield*/, import("react-icons/bs")];
                case 712:
                    BsDashSquare = (_b.sent()).BsDashSquare;
                    return [2 /*return*/, BsDashSquare];
                case 713: return [4 /*yield*/, import("react-icons/bs")];
                case 714:
                    BsDash = (_b.sent()).BsDash;
                    return [2 /*return*/, BsDash];
                case 715: return [4 /*yield*/, import("react-icons/bs")];
                case 716:
                    BsDatabaseAdd = (_b.sent()).BsDatabaseAdd;
                    return [2 /*return*/, BsDatabaseAdd];
                case 717: return [4 /*yield*/, import("react-icons/bs")];
                case 718:
                    BsDatabaseCheck = (_b.sent()).BsDatabaseCheck;
                    return [2 /*return*/, BsDatabaseCheck];
                case 719: return [4 /*yield*/, import("react-icons/bs")];
                case 720:
                    BsDatabaseDash = (_b.sent()).BsDatabaseDash;
                    return [2 /*return*/, BsDatabaseDash];
                case 721: return [4 /*yield*/, import("react-icons/bs")];
                case 722:
                    BsDatabaseDown = (_b.sent()).BsDatabaseDown;
                    return [2 /*return*/, BsDatabaseDown];
                case 723: return [4 /*yield*/, import("react-icons/bs")];
                case 724:
                    BsDatabaseExclamation = (_b.sent()).BsDatabaseExclamation;
                    return [2 /*return*/, BsDatabaseExclamation];
                case 725: return [4 /*yield*/, import("react-icons/bs")];
                case 726:
                    BsDatabaseFillAdd = (_b.sent()).BsDatabaseFillAdd;
                    return [2 /*return*/, BsDatabaseFillAdd];
                case 727: return [4 /*yield*/, import("react-icons/bs")];
                case 728:
                    BsDatabaseFillCheck = (_b.sent()).BsDatabaseFillCheck;
                    return [2 /*return*/, BsDatabaseFillCheck];
                case 729: return [4 /*yield*/, import("react-icons/bs")];
                case 730:
                    BsDatabaseFillDash = (_b.sent()).BsDatabaseFillDash;
                    return [2 /*return*/, BsDatabaseFillDash];
                case 731: return [4 /*yield*/, import("react-icons/bs")];
                case 732:
                    BsDatabaseFillDown = (_b.sent()).BsDatabaseFillDown;
                    return [2 /*return*/, BsDatabaseFillDown];
                case 733: return [4 /*yield*/, import("react-icons/bs")];
                case 734:
                    BsDatabaseFillExclamation = (_b.sent()).BsDatabaseFillExclamation;
                    return [2 /*return*/, BsDatabaseFillExclamation];
                case 735: return [4 /*yield*/, import("react-icons/bs")];
                case 736:
                    BsDatabaseFillGear = (_b.sent()).BsDatabaseFillGear;
                    return [2 /*return*/, BsDatabaseFillGear];
                case 737: return [4 /*yield*/, import("react-icons/bs")];
                case 738:
                    BsDatabaseFillLock = (_b.sent()).BsDatabaseFillLock;
                    return [2 /*return*/, BsDatabaseFillLock];
                case 739: return [4 /*yield*/, import("react-icons/bs")];
                case 740:
                    BsDatabaseFillSlash = (_b.sent()).BsDatabaseFillSlash;
                    return [2 /*return*/, BsDatabaseFillSlash];
                case 741: return [4 /*yield*/, import("react-icons/bs")];
                case 742:
                    BsDatabaseFillUp = (_b.sent()).BsDatabaseFillUp;
                    return [2 /*return*/, BsDatabaseFillUp];
                case 743: return [4 /*yield*/, import("react-icons/bs")];
                case 744:
                    BsDatabaseFillX = (_b.sent()).BsDatabaseFillX;
                    return [2 /*return*/, BsDatabaseFillX];
                case 745: return [4 /*yield*/, import("react-icons/bs")];
                case 746:
                    BsDatabaseFill = (_b.sent()).BsDatabaseFill;
                    return [2 /*return*/, BsDatabaseFill];
                case 747: return [4 /*yield*/, import("react-icons/bs")];
                case 748:
                    BsDatabaseGear = (_b.sent()).BsDatabaseGear;
                    return [2 /*return*/, BsDatabaseGear];
                case 749: return [4 /*yield*/, import("react-icons/bs")];
                case 750:
                    BsDatabaseLock = (_b.sent()).BsDatabaseLock;
                    return [2 /*return*/, BsDatabaseLock];
                case 751: return [4 /*yield*/, import("react-icons/bs")];
                case 752:
                    BsDatabaseSlash = (_b.sent()).BsDatabaseSlash;
                    return [2 /*return*/, BsDatabaseSlash];
                case 753: return [4 /*yield*/, import("react-icons/bs")];
                case 754:
                    BsDatabaseUp = (_b.sent()).BsDatabaseUp;
                    return [2 /*return*/, BsDatabaseUp];
                case 755: return [4 /*yield*/, import("react-icons/bs")];
                case 756:
                    BsDatabaseX = (_b.sent()).BsDatabaseX;
                    return [2 /*return*/, BsDatabaseX];
                case 757: return [4 /*yield*/, import("react-icons/bs")];
                case 758:
                    BsDatabase = (_b.sent()).BsDatabase;
                    return [2 /*return*/, BsDatabase];
                case 759: return [4 /*yield*/, import("react-icons/bs")];
                case 760:
                    BsDeviceHddFill = (_b.sent()).BsDeviceHddFill;
                    return [2 /*return*/, BsDeviceHddFill];
                case 761: return [4 /*yield*/, import("react-icons/bs")];
                case 762:
                    BsDeviceHdd = (_b.sent()).BsDeviceHdd;
                    return [2 /*return*/, BsDeviceHdd];
                case 763: return [4 /*yield*/, import("react-icons/bs")];
                case 764:
                    BsDeviceSsdFill = (_b.sent()).BsDeviceSsdFill;
                    return [2 /*return*/, BsDeviceSsdFill];
                case 765: return [4 /*yield*/, import("react-icons/bs")];
                case 766:
                    BsDeviceSsd = (_b.sent()).BsDeviceSsd;
                    return [2 /*return*/, BsDeviceSsd];
                case 767: return [4 /*yield*/, import("react-icons/bs")];
                case 768:
                    BsDiagram2Fill = (_b.sent()).BsDiagram2Fill;
                    return [2 /*return*/, BsDiagram2Fill];
                case 769: return [4 /*yield*/, import("react-icons/bs")];
                case 770:
                    BsDiagram2 = (_b.sent()).BsDiagram2;
                    return [2 /*return*/, BsDiagram2];
                case 771: return [4 /*yield*/, import("react-icons/bs")];
                case 772:
                    BsDiagram3Fill = (_b.sent()).BsDiagram3Fill;
                    return [2 /*return*/, BsDiagram3Fill];
                case 773: return [4 /*yield*/, import("react-icons/bs")];
                case 774:
                    BsDiagram3 = (_b.sent()).BsDiagram3;
                    return [2 /*return*/, BsDiagram3];
                case 775: return [4 /*yield*/, import("react-icons/bs")];
                case 776:
                    BsDiamondFill = (_b.sent()).BsDiamondFill;
                    return [2 /*return*/, BsDiamondFill];
                case 777: return [4 /*yield*/, import("react-icons/bs")];
                case 778:
                    BsDiamondHalf = (_b.sent()).BsDiamondHalf;
                    return [2 /*return*/, BsDiamondHalf];
                case 779: return [4 /*yield*/, import("react-icons/bs")];
                case 780:
                    BsDiamond = (_b.sent()).BsDiamond;
                    return [2 /*return*/, BsDiamond];
                case 781: return [4 /*yield*/, import("react-icons/bs")];
                case 782:
                    BsDice1Fill = (_b.sent()).BsDice1Fill;
                    return [2 /*return*/, BsDice1Fill];
                case 783: return [4 /*yield*/, import("react-icons/bs")];
                case 784:
                    BsDice1 = (_b.sent()).BsDice1;
                    return [2 /*return*/, BsDice1];
                case 785: return [4 /*yield*/, import("react-icons/bs")];
                case 786:
                    BsDice2Fill = (_b.sent()).BsDice2Fill;
                    return [2 /*return*/, BsDice2Fill];
                case 787: return [4 /*yield*/, import("react-icons/bs")];
                case 788:
                    BsDice2 = (_b.sent()).BsDice2;
                    return [2 /*return*/, BsDice2];
                case 789: return [4 /*yield*/, import("react-icons/bs")];
                case 790:
                    BsDice3Fill = (_b.sent()).BsDice3Fill;
                    return [2 /*return*/, BsDice3Fill];
                case 791: return [4 /*yield*/, import("react-icons/bs")];
                case 792:
                    BsDice3 = (_b.sent()).BsDice3;
                    return [2 /*return*/, BsDice3];
                case 793: return [4 /*yield*/, import("react-icons/bs")];
                case 794:
                    BsDice4Fill = (_b.sent()).BsDice4Fill;
                    return [2 /*return*/, BsDice4Fill];
                case 795: return [4 /*yield*/, import("react-icons/bs")];
                case 796:
                    BsDice4 = (_b.sent()).BsDice4;
                    return [2 /*return*/, BsDice4];
                case 797: return [4 /*yield*/, import("react-icons/bs")];
                case 798:
                    BsDice5Fill = (_b.sent()).BsDice5Fill;
                    return [2 /*return*/, BsDice5Fill];
                case 799: return [4 /*yield*/, import("react-icons/bs")];
                case 800:
                    BsDice5 = (_b.sent()).BsDice5;
                    return [2 /*return*/, BsDice5];
                case 801: return [4 /*yield*/, import("react-icons/bs")];
                case 802:
                    BsDice6Fill = (_b.sent()).BsDice6Fill;
                    return [2 /*return*/, BsDice6Fill];
                case 803: return [4 /*yield*/, import("react-icons/bs")];
                case 804:
                    BsDice6 = (_b.sent()).BsDice6;
                    return [2 /*return*/, BsDice6];
                case 805: return [4 /*yield*/, import("react-icons/bs")];
                case 806:
                    BsDiscFill = (_b.sent()).BsDiscFill;
                    return [2 /*return*/, BsDiscFill];
                case 807: return [4 /*yield*/, import("react-icons/bs")];
                case 808:
                    BsDisc = (_b.sent()).BsDisc;
                    return [2 /*return*/, BsDisc];
                case 809: return [4 /*yield*/, import("react-icons/bs")];
                case 810:
                    BsDiscord = (_b.sent()).BsDiscord;
                    return [2 /*return*/, BsDiscord];
                case 811: return [4 /*yield*/, import("react-icons/bs")];
                case 812:
                    BsDisplayFill = (_b.sent()).BsDisplayFill;
                    return [2 /*return*/, BsDisplayFill];
                case 813: return [4 /*yield*/, import("react-icons/bs")];
                case 814:
                    BsDisplay = (_b.sent()).BsDisplay;
                    return [2 /*return*/, BsDisplay];
                case 815: return [4 /*yield*/, import("react-icons/bs")];
                case 816:
                    BsDisplayportFill = (_b.sent()).BsDisplayportFill;
                    return [2 /*return*/, BsDisplayportFill];
                case 817: return [4 /*yield*/, import("react-icons/bs")];
                case 818:
                    BsDisplayport = (_b.sent()).BsDisplayport;
                    return [2 /*return*/, BsDisplayport];
                case 819: return [4 /*yield*/, import("react-icons/bs")];
                case 820:
                    BsDistributeHorizontal = (_b.sent()).BsDistributeHorizontal;
                    return [2 /*return*/, BsDistributeHorizontal];
                case 821: return [4 /*yield*/, import("react-icons/bs")];
                case 822:
                    BsDistributeVertical = (_b.sent()).BsDistributeVertical;
                    return [2 /*return*/, BsDistributeVertical];
                case 823: return [4 /*yield*/, import("react-icons/bs")];
                case 824:
                    BsDoorClosedFill = (_b.sent()).BsDoorClosedFill;
                    return [2 /*return*/, BsDoorClosedFill];
                case 825: return [4 /*yield*/, import("react-icons/bs")];
                case 826:
                    BsDoorClosed = (_b.sent()).BsDoorClosed;
                    return [2 /*return*/, BsDoorClosed];
                case 827: return [4 /*yield*/, import("react-icons/bs")];
                case 828:
                    BsDoorOpenFill = (_b.sent()).BsDoorOpenFill;
                    return [2 /*return*/, BsDoorOpenFill];
                case 829: return [4 /*yield*/, import("react-icons/bs")];
                case 830:
                    BsDoorOpen = (_b.sent()).BsDoorOpen;
                    return [2 /*return*/, BsDoorOpen];
                case 831: return [4 /*yield*/, import("react-icons/bs")];
                case 832:
                    BsDot = (_b.sent()).BsDot;
                    return [2 /*return*/, BsDot];
                case 833: return [4 /*yield*/, import("react-icons/bs")];
                case 834:
                    BsDownload = (_b.sent()).BsDownload;
                    return [2 /*return*/, BsDownload];
                case 835: return [4 /*yield*/, import("react-icons/bs")];
                case 836:
                    BsDpadFill = (_b.sent()).BsDpadFill;
                    return [2 /*return*/, BsDpadFill];
                case 837: return [4 /*yield*/, import("react-icons/bs")];
                case 838:
                    BsDpad = (_b.sent()).BsDpad;
                    return [2 /*return*/, BsDpad];
                case 839: return [4 /*yield*/, import("react-icons/bs")];
                case 840:
                    BsDribbble = (_b.sent()).BsDribbble;
                    return [2 /*return*/, BsDribbble];
                case 841: return [4 /*yield*/, import("react-icons/bs")];
                case 842:
                    BsDropbox = (_b.sent()).BsDropbox;
                    return [2 /*return*/, BsDropbox];
                case 843: return [4 /*yield*/, import("react-icons/bs")];
                case 844:
                    BsDropletFill = (_b.sent()).BsDropletFill;
                    return [2 /*return*/, BsDropletFill];
                case 845: return [4 /*yield*/, import("react-icons/bs")];
                case 846:
                    BsDropletHalf = (_b.sent()).BsDropletHalf;
                    return [2 /*return*/, BsDropletHalf];
                case 847: return [4 /*yield*/, import("react-icons/bs")];
                case 848:
                    BsDroplet = (_b.sent()).BsDroplet;
                    return [2 /*return*/, BsDroplet];
                case 849: return [4 /*yield*/, import("react-icons/bs")];
                case 850:
                    BsDuffleFill = (_b.sent()).BsDuffleFill;
                    return [2 /*return*/, BsDuffleFill];
                case 851: return [4 /*yield*/, import("react-icons/bs")];
                case 852:
                    BsDuffle = (_b.sent()).BsDuffle;
                    return [2 /*return*/, BsDuffle];
                case 853: return [4 /*yield*/, import("react-icons/bs")];
                case 854:
                    BsEarFill = (_b.sent()).BsEarFill;
                    return [2 /*return*/, BsEarFill];
                case 855: return [4 /*yield*/, import("react-icons/bs")];
                case 856:
                    BsEar = (_b.sent()).BsEar;
                    return [2 /*return*/, BsEar];
                case 857: return [4 /*yield*/, import("react-icons/bs")];
                case 858:
                    BsEarbuds = (_b.sent()).BsEarbuds;
                    return [2 /*return*/, BsEarbuds];
                case 859: return [4 /*yield*/, import("react-icons/bs")];
                case 860:
                    BsEaselFill = (_b.sent()).BsEaselFill;
                    return [2 /*return*/, BsEaselFill];
                case 861: return [4 /*yield*/, import("react-icons/bs")];
                case 862:
                    BsEasel = (_b.sent()).BsEasel;
                    return [2 /*return*/, BsEasel];
                case 863: return [4 /*yield*/, import("react-icons/bs")];
                case 864:
                    BsEasel2Fill = (_b.sent()).BsEasel2Fill;
                    return [2 /*return*/, BsEasel2Fill];
                case 865: return [4 /*yield*/, import("react-icons/bs")];
                case 866:
                    BsEasel2 = (_b.sent()).BsEasel2;
                    return [2 /*return*/, BsEasel2];
                case 867: return [4 /*yield*/, import("react-icons/bs")];
                case 868:
                    BsEasel3Fill = (_b.sent()).BsEasel3Fill;
                    return [2 /*return*/, BsEasel3Fill];
                case 869: return [4 /*yield*/, import("react-icons/bs")];
                case 870:
                    BsEasel3 = (_b.sent()).BsEasel3;
                    return [2 /*return*/, BsEasel3];
                case 871: return [4 /*yield*/, import("react-icons/bs")];
                case 872:
                    BsEggFill = (_b.sent()).BsEggFill;
                    return [2 /*return*/, BsEggFill];
                case 873: return [4 /*yield*/, import("react-icons/bs")];
                case 874:
                    BsEggFried = (_b.sent()).BsEggFried;
                    return [2 /*return*/, BsEggFried];
                case 875: return [4 /*yield*/, import("react-icons/bs")];
                case 876:
                    BsEgg = (_b.sent()).BsEgg;
                    return [2 /*return*/, BsEgg];
                case 877: return [4 /*yield*/, import("react-icons/bs")];
                case 878:
                    BsEjectFill = (_b.sent()).BsEjectFill;
                    return [2 /*return*/, BsEjectFill];
                case 879: return [4 /*yield*/, import("react-icons/bs")];
                case 880:
                    BsEject = (_b.sent()).BsEject;
                    return [2 /*return*/, BsEject];
                case 881: return [4 /*yield*/, import("react-icons/bs")];
                case 882:
                    BsEmojiAngryFill = (_b.sent()).BsEmojiAngryFill;
                    return [2 /*return*/, BsEmojiAngryFill];
                case 883: return [4 /*yield*/, import("react-icons/bs")];
                case 884:
                    BsEmojiAngry = (_b.sent()).BsEmojiAngry;
                    return [2 /*return*/, BsEmojiAngry];
                case 885: return [4 /*yield*/, import("react-icons/bs")];
                case 886:
                    BsEmojiAstonishedFill = (_b.sent()).BsEmojiAstonishedFill;
                    return [2 /*return*/, BsEmojiAstonishedFill];
                case 887: return [4 /*yield*/, import("react-icons/bs")];
                case 888:
                    BsEmojiAstonished = (_b.sent()).BsEmojiAstonished;
                    return [2 /*return*/, BsEmojiAstonished];
                case 889: return [4 /*yield*/, import("react-icons/bs")];
                case 890:
                    BsEmojiDizzyFill = (_b.sent()).BsEmojiDizzyFill;
                    return [2 /*return*/, BsEmojiDizzyFill];
                case 891: return [4 /*yield*/, import("react-icons/bs")];
                case 892:
                    BsEmojiDizzy = (_b.sent()).BsEmojiDizzy;
                    return [2 /*return*/, BsEmojiDizzy];
                case 893: return [4 /*yield*/, import("react-icons/bs")];
                case 894:
                    BsEmojiExpressionlessFill = (_b.sent()).BsEmojiExpressionlessFill;
                    return [2 /*return*/, BsEmojiExpressionlessFill];
                case 895: return [4 /*yield*/, import("react-icons/bs")];
                case 896:
                    BsEmojiExpressionless = (_b.sent()).BsEmojiExpressionless;
                    return [2 /*return*/, BsEmojiExpressionless];
                case 897: return [4 /*yield*/, import("react-icons/bs")];
                case 898:
                    BsEmojiFrownFill = (_b.sent()).BsEmojiFrownFill;
                    return [2 /*return*/, BsEmojiFrownFill];
                case 899: return [4 /*yield*/, import("react-icons/bs")];
                case 900:
                    BsEmojiFrown = (_b.sent()).BsEmojiFrown;
                    return [2 /*return*/, BsEmojiFrown];
                case 901: return [4 /*yield*/, import("react-icons/bs")];
                case 902:
                    BsEmojiGrimaceFill = (_b.sent()).BsEmojiGrimaceFill;
                    return [2 /*return*/, BsEmojiGrimaceFill];
                case 903: return [4 /*yield*/, import("react-icons/bs")];
                case 904:
                    BsEmojiGrimace = (_b.sent()).BsEmojiGrimace;
                    return [2 /*return*/, BsEmojiGrimace];
                case 905: return [4 /*yield*/, import("react-icons/bs")];
                case 906:
                    BsEmojiGrinFill = (_b.sent()).BsEmojiGrinFill;
                    return [2 /*return*/, BsEmojiGrinFill];
                case 907: return [4 /*yield*/, import("react-icons/bs")];
                case 908:
                    BsEmojiGrin = (_b.sent()).BsEmojiGrin;
                    return [2 /*return*/, BsEmojiGrin];
                case 909: return [4 /*yield*/, import("react-icons/bs")];
                case 910:
                    BsEmojiHeartEyesFill = (_b.sent()).BsEmojiHeartEyesFill;
                    return [2 /*return*/, BsEmojiHeartEyesFill];
                case 911: return [4 /*yield*/, import("react-icons/bs")];
                case 912:
                    BsEmojiHeartEyes = (_b.sent()).BsEmojiHeartEyes;
                    return [2 /*return*/, BsEmojiHeartEyes];
                case 913: return [4 /*yield*/, import("react-icons/bs")];
                case 914:
                    BsEmojiKissFill = (_b.sent()).BsEmojiKissFill;
                    return [2 /*return*/, BsEmojiKissFill];
                case 915: return [4 /*yield*/, import("react-icons/bs")];
                case 916:
                    BsEmojiKiss = (_b.sent()).BsEmojiKiss;
                    return [2 /*return*/, BsEmojiKiss];
                case 917: return [4 /*yield*/, import("react-icons/bs")];
                case 918:
                    BsEmojiLaughingFill = (_b.sent()).BsEmojiLaughingFill;
                    return [2 /*return*/, BsEmojiLaughingFill];
                case 919: return [4 /*yield*/, import("react-icons/bs")];
                case 920:
                    BsEmojiLaughing = (_b.sent()).BsEmojiLaughing;
                    return [2 /*return*/, BsEmojiLaughing];
                case 921: return [4 /*yield*/, import("react-icons/bs")];
                case 922:
                    BsEmojiNeutralFill = (_b.sent()).BsEmojiNeutralFill;
                    return [2 /*return*/, BsEmojiNeutralFill];
                case 923: return [4 /*yield*/, import("react-icons/bs")];
                case 924:
                    BsEmojiNeutral = (_b.sent()).BsEmojiNeutral;
                    return [2 /*return*/, BsEmojiNeutral];
                case 925: return [4 /*yield*/, import("react-icons/bs")];
                case 926:
                    BsEmojiSmileFill = (_b.sent()).BsEmojiSmileFill;
                    return [2 /*return*/, BsEmojiSmileFill];
                case 927: return [4 /*yield*/, import("react-icons/bs")];
                case 928:
                    BsEmojiSmileUpsideDownFill = (_b.sent()).BsEmojiSmileUpsideDownFill;
                    return [2 /*return*/, BsEmojiSmileUpsideDownFill];
                case 929: return [4 /*yield*/, import("react-icons/bs")];
                case 930:
                    BsEmojiSmileUpsideDown = (_b.sent()).BsEmojiSmileUpsideDown;
                    return [2 /*return*/, BsEmojiSmileUpsideDown];
                case 931: return [4 /*yield*/, import("react-icons/bs")];
                case 932:
                    BsEmojiSmile = (_b.sent()).BsEmojiSmile;
                    return [2 /*return*/, BsEmojiSmile];
                case 933: return [4 /*yield*/, import("react-icons/bs")];
                case 934:
                    BsEmojiSunglassesFill = (_b.sent()).BsEmojiSunglassesFill;
                    return [2 /*return*/, BsEmojiSunglassesFill];
                case 935: return [4 /*yield*/, import("react-icons/bs")];
                case 936:
                    BsEmojiSunglasses = (_b.sent()).BsEmojiSunglasses;
                    return [2 /*return*/, BsEmojiSunglasses];
                case 937: return [4 /*yield*/, import("react-icons/bs")];
                case 938:
                    BsEmojiSurpriseFill = (_b.sent()).BsEmojiSurpriseFill;
                    return [2 /*return*/, BsEmojiSurpriseFill];
                case 939: return [4 /*yield*/, import("react-icons/bs")];
                case 940:
                    BsEmojiSurprise = (_b.sent()).BsEmojiSurprise;
                    return [2 /*return*/, BsEmojiSurprise];
                case 941: return [4 /*yield*/, import("react-icons/bs")];
                case 942:
                    BsEmojiTearFill = (_b.sent()).BsEmojiTearFill;
                    return [2 /*return*/, BsEmojiTearFill];
                case 943: return [4 /*yield*/, import("react-icons/bs")];
                case 944:
                    BsEmojiTear = (_b.sent()).BsEmojiTear;
                    return [2 /*return*/, BsEmojiTear];
                case 945: return [4 /*yield*/, import("react-icons/bs")];
                case 946:
                    BsEmojiWinkFill = (_b.sent()).BsEmojiWinkFill;
                    return [2 /*return*/, BsEmojiWinkFill];
                case 947: return [4 /*yield*/, import("react-icons/bs")];
                case 948:
                    BsEmojiWink = (_b.sent()).BsEmojiWink;
                    return [2 /*return*/, BsEmojiWink];
                case 949: return [4 /*yield*/, import("react-icons/bs")];
                case 950:
                    BsEnvelopeArrowDownFill = (_b.sent()).BsEnvelopeArrowDownFill;
                    return [2 /*return*/, BsEnvelopeArrowDownFill];
                case 951: return [4 /*yield*/, import("react-icons/bs")];
                case 952:
                    BsEnvelopeArrowDown = (_b.sent()).BsEnvelopeArrowDown;
                    return [2 /*return*/, BsEnvelopeArrowDown];
                case 953: return [4 /*yield*/, import("react-icons/bs")];
                case 954:
                    BsEnvelopeArrowUpFill = (_b.sent()).BsEnvelopeArrowUpFill;
                    return [2 /*return*/, BsEnvelopeArrowUpFill];
                case 955: return [4 /*yield*/, import("react-icons/bs")];
                case 956:
                    BsEnvelopeArrowUp = (_b.sent()).BsEnvelopeArrowUp;
                    return [2 /*return*/, BsEnvelopeArrowUp];
                case 957: return [4 /*yield*/, import("react-icons/bs")];
                case 958:
                    BsEnvelopeAtFill = (_b.sent()).BsEnvelopeAtFill;
                    return [2 /*return*/, BsEnvelopeAtFill];
                case 959: return [4 /*yield*/, import("react-icons/bs")];
                case 960:
                    BsEnvelopeAt = (_b.sent()).BsEnvelopeAt;
                    return [2 /*return*/, BsEnvelopeAt];
                case 961: return [4 /*yield*/, import("react-icons/bs")];
                case 962:
                    BsEnvelopeCheckFill = (_b.sent()).BsEnvelopeCheckFill;
                    return [2 /*return*/, BsEnvelopeCheckFill];
                case 963: return [4 /*yield*/, import("react-icons/bs")];
                case 964:
                    BsEnvelopeCheck = (_b.sent()).BsEnvelopeCheck;
                    return [2 /*return*/, BsEnvelopeCheck];
                case 965: return [4 /*yield*/, import("react-icons/bs")];
                case 966:
                    BsEnvelopeDashFill = (_b.sent()).BsEnvelopeDashFill;
                    return [2 /*return*/, BsEnvelopeDashFill];
                case 967: return [4 /*yield*/, import("react-icons/bs")];
                case 968:
                    BsEnvelopeDash = (_b.sent()).BsEnvelopeDash;
                    return [2 /*return*/, BsEnvelopeDash];
                case 969: return [4 /*yield*/, import("react-icons/bs")];
                case 970:
                    BsEnvelopeExclamationFill = (_b.sent()).BsEnvelopeExclamationFill;
                    return [2 /*return*/, BsEnvelopeExclamationFill];
                case 971: return [4 /*yield*/, import("react-icons/bs")];
                case 972:
                    BsEnvelopeExclamation = (_b.sent()).BsEnvelopeExclamation;
                    return [2 /*return*/, BsEnvelopeExclamation];
                case 973: return [4 /*yield*/, import("react-icons/bs")];
                case 974:
                    BsEnvelopeFill = (_b.sent()).BsEnvelopeFill;
                    return [2 /*return*/, BsEnvelopeFill];
                case 975: return [4 /*yield*/, import("react-icons/bs")];
                case 976:
                    BsEnvelopeHeartFill = (_b.sent()).BsEnvelopeHeartFill;
                    return [2 /*return*/, BsEnvelopeHeartFill];
                case 977: return [4 /*yield*/, import("react-icons/bs")];
                case 978:
                    BsEnvelopeHeart = (_b.sent()).BsEnvelopeHeart;
                    return [2 /*return*/, BsEnvelopeHeart];
                case 979: return [4 /*yield*/, import("react-icons/bs")];
                case 980:
                    BsEnvelopeOpenFill = (_b.sent()).BsEnvelopeOpenFill;
                    return [2 /*return*/, BsEnvelopeOpenFill];
                case 981: return [4 /*yield*/, import("react-icons/bs")];
                case 982:
                    BsEnvelopeOpenHeartFill = (_b.sent()).BsEnvelopeOpenHeartFill;
                    return [2 /*return*/, BsEnvelopeOpenHeartFill];
                case 983: return [4 /*yield*/, import("react-icons/bs")];
                case 984:
                    BsEnvelopeOpenHeart = (_b.sent()).BsEnvelopeOpenHeart;
                    return [2 /*return*/, BsEnvelopeOpenHeart];
                case 985: return [4 /*yield*/, import("react-icons/bs")];
                case 986:
                    BsEnvelopeOpen = (_b.sent()).BsEnvelopeOpen;
                    return [2 /*return*/, BsEnvelopeOpen];
                case 987: return [4 /*yield*/, import("react-icons/bs")];
                case 988:
                    BsEnvelopePaperFill = (_b.sent()).BsEnvelopePaperFill;
                    return [2 /*return*/, BsEnvelopePaperFill];
                case 989: return [4 /*yield*/, import("react-icons/bs")];
                case 990:
                    BsEnvelopePaperHeartFill = (_b.sent()).BsEnvelopePaperHeartFill;
                    return [2 /*return*/, BsEnvelopePaperHeartFill];
                case 991: return [4 /*yield*/, import("react-icons/bs")];
                case 992:
                    BsEnvelopePaperHeart = (_b.sent()).BsEnvelopePaperHeart;
                    return [2 /*return*/, BsEnvelopePaperHeart];
                case 993: return [4 /*yield*/, import("react-icons/bs")];
                case 994:
                    BsEnvelopePaper = (_b.sent()).BsEnvelopePaper;
                    return [2 /*return*/, BsEnvelopePaper];
                case 995: return [4 /*yield*/, import("react-icons/bs")];
                case 996:
                    BsEnvelopePlusFill = (_b.sent()).BsEnvelopePlusFill;
                    return [2 /*return*/, BsEnvelopePlusFill];
                case 997: return [4 /*yield*/, import("react-icons/bs")];
                case 998:
                    BsEnvelopePlus = (_b.sent()).BsEnvelopePlus;
                    return [2 /*return*/, BsEnvelopePlus];
                case 999: return [4 /*yield*/, import("react-icons/bs")];
                case 1000:
                    BsEnvelopeSlashFill = (_b.sent()).BsEnvelopeSlashFill;
                    return [2 /*return*/, BsEnvelopeSlashFill];
                case 1001: return [4 /*yield*/, import("react-icons/bs")];
                case 1002:
                    BsEnvelopeSlash = (_b.sent()).BsEnvelopeSlash;
                    return [2 /*return*/, BsEnvelopeSlash];
                case 1003: return [4 /*yield*/, import("react-icons/bs")];
                case 1004:
                    BsEnvelopeXFill = (_b.sent()).BsEnvelopeXFill;
                    return [2 /*return*/, BsEnvelopeXFill];
                case 1005: return [4 /*yield*/, import("react-icons/bs")];
                case 1006:
                    BsEnvelopeX = (_b.sent()).BsEnvelopeX;
                    return [2 /*return*/, BsEnvelopeX];
                case 1007: return [4 /*yield*/, import("react-icons/bs")];
                case 1008:
                    BsEnvelope = (_b.sent()).BsEnvelope;
                    return [2 /*return*/, BsEnvelope];
                case 1009: return [4 /*yield*/, import("react-icons/bs")];
                case 1010:
                    BsEraserFill = (_b.sent()).BsEraserFill;
                    return [2 /*return*/, BsEraserFill];
                case 1011: return [4 /*yield*/, import("react-icons/bs")];
                case 1012:
                    BsEraser = (_b.sent()).BsEraser;
                    return [2 /*return*/, BsEraser];
                case 1013: return [4 /*yield*/, import("react-icons/bs")];
                case 1014:
                    BsEscape = (_b.sent()).BsEscape;
                    return [2 /*return*/, BsEscape];
                case 1015: return [4 /*yield*/, import("react-icons/bs")];
                case 1016:
                    BsEthernet = (_b.sent()).BsEthernet;
                    return [2 /*return*/, BsEthernet];
                case 1017: return [4 /*yield*/, import("react-icons/bs")];
                case 1018:
                    BsEvFrontFill = (_b.sent()).BsEvFrontFill;
                    return [2 /*return*/, BsEvFrontFill];
                case 1019: return [4 /*yield*/, import("react-icons/bs")];
                case 1020:
                    BsEvFront = (_b.sent()).BsEvFront;
                    return [2 /*return*/, BsEvFront];
                case 1021: return [4 /*yield*/, import("react-icons/bs")];
                case 1022:
                    BsEvStationFill = (_b.sent()).BsEvStationFill;
                    return [2 /*return*/, BsEvStationFill];
                case 1023: return [4 /*yield*/, import("react-icons/bs")];
                case 1024:
                    BsEvStation = (_b.sent()).BsEvStation;
                    return [2 /*return*/, BsEvStation];
                case 1025: return [4 /*yield*/, import("react-icons/bs")];
                case 1026:
                    BsExclamationCircleFill = (_b.sent()).BsExclamationCircleFill;
                    return [2 /*return*/, BsExclamationCircleFill];
                case 1027: return [4 /*yield*/, import("react-icons/bs")];
                case 1028:
                    BsExclamationCircle = (_b.sent()).BsExclamationCircle;
                    return [2 /*return*/, BsExclamationCircle];
                case 1029: return [4 /*yield*/, import("react-icons/bs")];
                case 1030:
                    BsExclamationDiamondFill = (_b.sent()).BsExclamationDiamondFill;
                    return [2 /*return*/, BsExclamationDiamondFill];
                case 1031: return [4 /*yield*/, import("react-icons/bs")];
                case 1032:
                    BsExclamationDiamond = (_b.sent()).BsExclamationDiamond;
                    return [2 /*return*/, BsExclamationDiamond];
                case 1033: return [4 /*yield*/, import("react-icons/bs")];
                case 1034:
                    BsExclamationLg = (_b.sent()).BsExclamationLg;
                    return [2 /*return*/, BsExclamationLg];
                case 1035: return [4 /*yield*/, import("react-icons/bs")];
                case 1036:
                    BsExclamationOctagonFill = (_b.sent()).BsExclamationOctagonFill;
                    return [2 /*return*/, BsExclamationOctagonFill];
                case 1037: return [4 /*yield*/, import("react-icons/bs")];
                case 1038:
                    BsExclamationOctagon = (_b.sent()).BsExclamationOctagon;
                    return [2 /*return*/, BsExclamationOctagon];
                case 1039: return [4 /*yield*/, import("react-icons/bs")];
                case 1040:
                    BsExclamationSquareFill = (_b.sent()).BsExclamationSquareFill;
                    return [2 /*return*/, BsExclamationSquareFill];
                case 1041: return [4 /*yield*/, import("react-icons/bs")];
                case 1042:
                    BsExclamationSquare = (_b.sent()).BsExclamationSquare;
                    return [2 /*return*/, BsExclamationSquare];
                case 1043: return [4 /*yield*/, import("react-icons/bs")];
                case 1044:
                    BsExclamationTriangleFill = (_b.sent()).BsExclamationTriangleFill;
                    return [2 /*return*/, BsExclamationTriangleFill];
                case 1045: return [4 /*yield*/, import("react-icons/bs")];
                case 1046:
                    BsExclamationTriangle = (_b.sent()).BsExclamationTriangle;
                    return [2 /*return*/, BsExclamationTriangle];
                case 1047: return [4 /*yield*/, import("react-icons/bs")];
                case 1048:
                    BsExclamation = (_b.sent()).BsExclamation;
                    return [2 /*return*/, BsExclamation];
                case 1049: return [4 /*yield*/, import("react-icons/bs")];
                case 1050:
                    BsExclude = (_b.sent()).BsExclude;
                    return [2 /*return*/, BsExclude];
                case 1051: return [4 /*yield*/, import("react-icons/bs")];
                case 1052:
                    BsExplicitFill = (_b.sent()).BsExplicitFill;
                    return [2 /*return*/, BsExplicitFill];
                case 1053: return [4 /*yield*/, import("react-icons/bs")];
                case 1054:
                    BsExplicit = (_b.sent()).BsExplicit;
                    return [2 /*return*/, BsExplicit];
                case 1055: return [4 /*yield*/, import("react-icons/bs")];
                case 1056:
                    BsExposure = (_b.sent()).BsExposure;
                    return [2 /*return*/, BsExposure];
                case 1057: return [4 /*yield*/, import("react-icons/bs")];
                case 1058:
                    BsEyeFill = (_b.sent()).BsEyeFill;
                    return [2 /*return*/, BsEyeFill];
                case 1059: return [4 /*yield*/, import("react-icons/bs")];
                case 1060:
                    BsEyeSlashFill = (_b.sent()).BsEyeSlashFill;
                    return [2 /*return*/, BsEyeSlashFill];
                case 1061: return [4 /*yield*/, import("react-icons/bs")];
                case 1062:
                    BsEyeSlash = (_b.sent()).BsEyeSlash;
                    return [2 /*return*/, BsEyeSlash];
                case 1063: return [4 /*yield*/, import("react-icons/bs")];
                case 1064:
                    BsEye = (_b.sent()).BsEye;
                    return [2 /*return*/, BsEye];
                case 1065: return [4 /*yield*/, import("react-icons/bs")];
                case 1066:
                    BsEyedropper = (_b.sent()).BsEyedropper;
                    return [2 /*return*/, BsEyedropper];
                case 1067: return [4 /*yield*/, import("react-icons/bs")];
                case 1068:
                    BsEyeglasses = (_b.sent()).BsEyeglasses;
                    return [2 /*return*/, BsEyeglasses];
                case 1069: return [4 /*yield*/, import("react-icons/bs")];
                case 1070:
                    BsFacebook = (_b.sent()).BsFacebook;
                    return [2 /*return*/, BsFacebook];
                case 1071: return [4 /*yield*/, import("react-icons/bs")];
                case 1072:
                    BsFan = (_b.sent()).BsFan;
                    return [2 /*return*/, BsFan];
                case 1073: return [4 /*yield*/, import("react-icons/bs")];
                case 1074:
                    BsFastForwardBtnFill = (_b.sent()).BsFastForwardBtnFill;
                    return [2 /*return*/, BsFastForwardBtnFill];
                case 1075: return [4 /*yield*/, import("react-icons/bs")];
                case 1076:
                    BsFastForwardBtn = (_b.sent()).BsFastForwardBtn;
                    return [2 /*return*/, BsFastForwardBtn];
                case 1077: return [4 /*yield*/, import("react-icons/bs")];
                case 1078:
                    BsFastForwardCircleFill = (_b.sent()).BsFastForwardCircleFill;
                    return [2 /*return*/, BsFastForwardCircleFill];
                case 1079: return [4 /*yield*/, import("react-icons/bs")];
                case 1080:
                    BsFastForwardCircle = (_b.sent()).BsFastForwardCircle;
                    return [2 /*return*/, BsFastForwardCircle];
                case 1081: return [4 /*yield*/, import("react-icons/bs")];
                case 1082:
                    BsFastForwardFill = (_b.sent()).BsFastForwardFill;
                    return [2 /*return*/, BsFastForwardFill];
                case 1083: return [4 /*yield*/, import("react-icons/bs")];
                case 1084:
                    BsFastForward = (_b.sent()).BsFastForward;
                    return [2 /*return*/, BsFastForward];
                case 1085: return [4 /*yield*/, import("react-icons/bs")];
                case 1086:
                    BsFeather = (_b.sent()).BsFeather;
                    return [2 /*return*/, BsFeather];
                case 1087: return [4 /*yield*/, import("react-icons/bs")];
                case 1088:
                    BsFeather2 = (_b.sent()).BsFeather2;
                    return [2 /*return*/, BsFeather2];
                case 1089: return [4 /*yield*/, import("react-icons/bs")];
                case 1090:
                    BsFileArrowDownFill = (_b.sent()).BsFileArrowDownFill;
                    return [2 /*return*/, BsFileArrowDownFill];
                case 1091: return [4 /*yield*/, import("react-icons/bs")];
                case 1092:
                    BsFileArrowDown = (_b.sent()).BsFileArrowDown;
                    return [2 /*return*/, BsFileArrowDown];
                case 1093: return [4 /*yield*/, import("react-icons/bs")];
                case 1094:
                    BsFileArrowUpFill = (_b.sent()).BsFileArrowUpFill;
                    return [2 /*return*/, BsFileArrowUpFill];
                case 1095: return [4 /*yield*/, import("react-icons/bs")];
                case 1096:
                    BsFileArrowUp = (_b.sent()).BsFileArrowUp;
                    return [2 /*return*/, BsFileArrowUp];
                case 1097: return [4 /*yield*/, import("react-icons/bs")];
                case 1098:
                    BsFileBarGraphFill = (_b.sent()).BsFileBarGraphFill;
                    return [2 /*return*/, BsFileBarGraphFill];
                case 1099: return [4 /*yield*/, import("react-icons/bs")];
                case 1100:
                    BsFileBarGraph = (_b.sent()).BsFileBarGraph;
                    return [2 /*return*/, BsFileBarGraph];
                case 1101: return [4 /*yield*/, import("react-icons/bs")];
                case 1102:
                    BsFileBinaryFill = (_b.sent()).BsFileBinaryFill;
                    return [2 /*return*/, BsFileBinaryFill];
                case 1103: return [4 /*yield*/, import("react-icons/bs")];
                case 1104:
                    BsFileBinary = (_b.sent()).BsFileBinary;
                    return [2 /*return*/, BsFileBinary];
                case 1105: return [4 /*yield*/, import("react-icons/bs")];
                case 1106:
                    BsFileBreakFill = (_b.sent()).BsFileBreakFill;
                    return [2 /*return*/, BsFileBreakFill];
                case 1107: return [4 /*yield*/, import("react-icons/bs")];
                case 1108:
                    BsFileBreak = (_b.sent()).BsFileBreak;
                    return [2 /*return*/, BsFileBreak];
                case 1109: return [4 /*yield*/, import("react-icons/bs")];
                case 1110:
                    BsFileCheckFill = (_b.sent()).BsFileCheckFill;
                    return [2 /*return*/, BsFileCheckFill];
                case 1111: return [4 /*yield*/, import("react-icons/bs")];
                case 1112:
                    BsFileCheck = (_b.sent()).BsFileCheck;
                    return [2 /*return*/, BsFileCheck];
                case 1113: return [4 /*yield*/, import("react-icons/bs")];
                case 1114:
                    BsFileCodeFill = (_b.sent()).BsFileCodeFill;
                    return [2 /*return*/, BsFileCodeFill];
                case 1115: return [4 /*yield*/, import("react-icons/bs")];
                case 1116:
                    BsFileCode = (_b.sent()).BsFileCode;
                    return [2 /*return*/, BsFileCode];
                case 1117: return [4 /*yield*/, import("react-icons/bs")];
                case 1118:
                    BsFileDiffFill = (_b.sent()).BsFileDiffFill;
                    return [2 /*return*/, BsFileDiffFill];
                case 1119: return [4 /*yield*/, import("react-icons/bs")];
                case 1120:
                    BsFileDiff = (_b.sent()).BsFileDiff;
                    return [2 /*return*/, BsFileDiff];
                case 1121: return [4 /*yield*/, import("react-icons/bs")];
                case 1122:
                    BsFileEarmarkArrowDownFill = (_b.sent()).BsFileEarmarkArrowDownFill;
                    return [2 /*return*/, BsFileEarmarkArrowDownFill];
                case 1123: return [4 /*yield*/, import("react-icons/bs")];
                case 1124:
                    BsFileEarmarkArrowDown = (_b.sent()).BsFileEarmarkArrowDown;
                    return [2 /*return*/, BsFileEarmarkArrowDown];
                case 1125: return [4 /*yield*/, import("react-icons/bs")];
                case 1126:
                    BsFileEarmarkArrowUpFill = (_b.sent()).BsFileEarmarkArrowUpFill;
                    return [2 /*return*/, BsFileEarmarkArrowUpFill];
                case 1127: return [4 /*yield*/, import("react-icons/bs")];
                case 1128:
                    BsFileEarmarkArrowUp = (_b.sent()).BsFileEarmarkArrowUp;
                    return [2 /*return*/, BsFileEarmarkArrowUp];
                case 1129: return [4 /*yield*/, import("react-icons/bs")];
                case 1130:
                    BsFileEarmarkBarGraphFill = (_b.sent()).BsFileEarmarkBarGraphFill;
                    return [2 /*return*/, BsFileEarmarkBarGraphFill];
                case 1131: return [4 /*yield*/, import("react-icons/bs")];
                case 1132:
                    BsFileEarmarkBarGraph = (_b.sent()).BsFileEarmarkBarGraph;
                    return [2 /*return*/, BsFileEarmarkBarGraph];
                case 1133: return [4 /*yield*/, import("react-icons/bs")];
                case 1134:
                    BsFileEarmarkBinaryFill = (_b.sent()).BsFileEarmarkBinaryFill;
                    return [2 /*return*/, BsFileEarmarkBinaryFill];
                case 1135: return [4 /*yield*/, import("react-icons/bs")];
                case 1136:
                    BsFileEarmarkBinary = (_b.sent()).BsFileEarmarkBinary;
                    return [2 /*return*/, BsFileEarmarkBinary];
                case 1137: return [4 /*yield*/, import("react-icons/bs")];
                case 1138:
                    BsFileEarmarkBreakFill = (_b.sent()).BsFileEarmarkBreakFill;
                    return [2 /*return*/, BsFileEarmarkBreakFill];
                case 1139: return [4 /*yield*/, import("react-icons/bs")];
                case 1140:
                    BsFileEarmarkBreak = (_b.sent()).BsFileEarmarkBreak;
                    return [2 /*return*/, BsFileEarmarkBreak];
                case 1141: return [4 /*yield*/, import("react-icons/bs")];
                case 1142:
                    BsFileEarmarkCheckFill = (_b.sent()).BsFileEarmarkCheckFill;
                    return [2 /*return*/, BsFileEarmarkCheckFill];
                case 1143: return [4 /*yield*/, import("react-icons/bs")];
                case 1144:
                    BsFileEarmarkCheck = (_b.sent()).BsFileEarmarkCheck;
                    return [2 /*return*/, BsFileEarmarkCheck];
                case 1145: return [4 /*yield*/, import("react-icons/bs")];
                case 1146:
                    BsFileEarmarkCodeFill = (_b.sent()).BsFileEarmarkCodeFill;
                    return [2 /*return*/, BsFileEarmarkCodeFill];
                case 1147: return [4 /*yield*/, import("react-icons/bs")];
                case 1148:
                    BsFileEarmarkCode = (_b.sent()).BsFileEarmarkCode;
                    return [2 /*return*/, BsFileEarmarkCode];
                case 1149: return [4 /*yield*/, import("react-icons/bs")];
                case 1150:
                    BsFileEarmarkDiffFill = (_b.sent()).BsFileEarmarkDiffFill;
                    return [2 /*return*/, BsFileEarmarkDiffFill];
                case 1151: return [4 /*yield*/, import("react-icons/bs")];
                case 1152:
                    BsFileEarmarkDiff = (_b.sent()).BsFileEarmarkDiff;
                    return [2 /*return*/, BsFileEarmarkDiff];
                case 1153: return [4 /*yield*/, import("react-icons/bs")];
                case 1154:
                    BsFileEarmarkEaselFill = (_b.sent()).BsFileEarmarkEaselFill;
                    return [2 /*return*/, BsFileEarmarkEaselFill];
                case 1155: return [4 /*yield*/, import("react-icons/bs")];
                case 1156:
                    BsFileEarmarkEasel = (_b.sent()).BsFileEarmarkEasel;
                    return [2 /*return*/, BsFileEarmarkEasel];
                case 1157: return [4 /*yield*/, import("react-icons/bs")];
                case 1158:
                    BsFileEarmarkExcelFill = (_b.sent()).BsFileEarmarkExcelFill;
                    return [2 /*return*/, BsFileEarmarkExcelFill];
                case 1159: return [4 /*yield*/, import("react-icons/bs")];
                case 1160:
                    BsFileEarmarkExcel = (_b.sent()).BsFileEarmarkExcel;
                    return [2 /*return*/, BsFileEarmarkExcel];
                case 1161: return [4 /*yield*/, import("react-icons/bs")];
                case 1162:
                    BsFileEarmarkFill = (_b.sent()).BsFileEarmarkFill;
                    return [2 /*return*/, BsFileEarmarkFill];
                case 1163: return [4 /*yield*/, import("react-icons/bs")];
                case 1164:
                    BsFileEarmarkFontFill = (_b.sent()).BsFileEarmarkFontFill;
                    return [2 /*return*/, BsFileEarmarkFontFill];
                case 1165: return [4 /*yield*/, import("react-icons/bs")];
                case 1166:
                    BsFileEarmarkFont = (_b.sent()).BsFileEarmarkFont;
                    return [2 /*return*/, BsFileEarmarkFont];
                case 1167: return [4 /*yield*/, import("react-icons/bs")];
                case 1168:
                    BsFileEarmarkImageFill = (_b.sent()).BsFileEarmarkImageFill;
                    return [2 /*return*/, BsFileEarmarkImageFill];
                case 1169: return [4 /*yield*/, import("react-icons/bs")];
                case 1170:
                    BsFileEarmarkImage = (_b.sent()).BsFileEarmarkImage;
                    return [2 /*return*/, BsFileEarmarkImage];
                case 1171: return [4 /*yield*/, import("react-icons/bs")];
                case 1172:
                    BsFileEarmarkLockFill = (_b.sent()).BsFileEarmarkLockFill;
                    return [2 /*return*/, BsFileEarmarkLockFill];
                case 1173: return [4 /*yield*/, import("react-icons/bs")];
                case 1174:
                    BsFileEarmarkLock = (_b.sent()).BsFileEarmarkLock;
                    return [2 /*return*/, BsFileEarmarkLock];
                case 1175: return [4 /*yield*/, import("react-icons/bs")];
                case 1176:
                    BsFileEarmarkLock2Fill = (_b.sent()).BsFileEarmarkLock2Fill;
                    return [2 /*return*/, BsFileEarmarkLock2Fill];
                case 1177: return [4 /*yield*/, import("react-icons/bs")];
                case 1178:
                    BsFileEarmarkLock2 = (_b.sent()).BsFileEarmarkLock2;
                    return [2 /*return*/, BsFileEarmarkLock2];
                case 1179: return [4 /*yield*/, import("react-icons/bs")];
                case 1180:
                    BsFileEarmarkMedicalFill = (_b.sent()).BsFileEarmarkMedicalFill;
                    return [2 /*return*/, BsFileEarmarkMedicalFill];
                case 1181: return [4 /*yield*/, import("react-icons/bs")];
                case 1182:
                    BsFileEarmarkMedical = (_b.sent()).BsFileEarmarkMedical;
                    return [2 /*return*/, BsFileEarmarkMedical];
                case 1183: return [4 /*yield*/, import("react-icons/bs")];
                case 1184:
                    BsFileEarmarkMinusFill = (_b.sent()).BsFileEarmarkMinusFill;
                    return [2 /*return*/, BsFileEarmarkMinusFill];
                case 1185: return [4 /*yield*/, import("react-icons/bs")];
                case 1186:
                    BsFileEarmarkMinus = (_b.sent()).BsFileEarmarkMinus;
                    return [2 /*return*/, BsFileEarmarkMinus];
                case 1187: return [4 /*yield*/, import("react-icons/bs")];
                case 1188:
                    BsFileEarmarkMusicFill = (_b.sent()).BsFileEarmarkMusicFill;
                    return [2 /*return*/, BsFileEarmarkMusicFill];
                case 1189: return [4 /*yield*/, import("react-icons/bs")];
                case 1190:
                    BsFileEarmarkMusic = (_b.sent()).BsFileEarmarkMusic;
                    return [2 /*return*/, BsFileEarmarkMusic];
                case 1191: return [4 /*yield*/, import("react-icons/bs")];
                case 1192:
                    BsFileEarmarkPdfFill = (_b.sent()).BsFileEarmarkPdfFill;
                    return [2 /*return*/, BsFileEarmarkPdfFill];
                case 1193: return [4 /*yield*/, import("react-icons/bs")];
                case 1194:
                    BsFileEarmarkPdf = (_b.sent()).BsFileEarmarkPdf;
                    return [2 /*return*/, BsFileEarmarkPdf];
                case 1195: return [4 /*yield*/, import("react-icons/bs")];
                case 1196:
                    BsFileEarmarkPersonFill = (_b.sent()).BsFileEarmarkPersonFill;
                    return [2 /*return*/, BsFileEarmarkPersonFill];
                case 1197: return [4 /*yield*/, import("react-icons/bs")];
                case 1198:
                    BsFileEarmarkPerson = (_b.sent()).BsFileEarmarkPerson;
                    return [2 /*return*/, BsFileEarmarkPerson];
                case 1199: return [4 /*yield*/, import("react-icons/bs")];
                case 1200:
                    BsFileEarmarkPlayFill = (_b.sent()).BsFileEarmarkPlayFill;
                    return [2 /*return*/, BsFileEarmarkPlayFill];
                case 1201: return [4 /*yield*/, import("react-icons/bs")];
                case 1202:
                    BsFileEarmarkPlay = (_b.sent()).BsFileEarmarkPlay;
                    return [2 /*return*/, BsFileEarmarkPlay];
                case 1203: return [4 /*yield*/, import("react-icons/bs")];
                case 1204:
                    BsFileEarmarkPlusFill = (_b.sent()).BsFileEarmarkPlusFill;
                    return [2 /*return*/, BsFileEarmarkPlusFill];
                case 1205: return [4 /*yield*/, import("react-icons/bs")];
                case 1206:
                    BsFileEarmarkPlus = (_b.sent()).BsFileEarmarkPlus;
                    return [2 /*return*/, BsFileEarmarkPlus];
                case 1207: return [4 /*yield*/, import("react-icons/bs")];
                case 1208:
                    BsFileEarmarkPostFill = (_b.sent()).BsFileEarmarkPostFill;
                    return [2 /*return*/, BsFileEarmarkPostFill];
                case 1209: return [4 /*yield*/, import("react-icons/bs")];
                case 1210:
                    BsFileEarmarkPost = (_b.sent()).BsFileEarmarkPost;
                    return [2 /*return*/, BsFileEarmarkPost];
                case 1211: return [4 /*yield*/, import("react-icons/bs")];
                case 1212:
                    BsFileEarmarkPptFill = (_b.sent()).BsFileEarmarkPptFill;
                    return [2 /*return*/, BsFileEarmarkPptFill];
                case 1213: return [4 /*yield*/, import("react-icons/bs")];
                case 1214:
                    BsFileEarmarkPpt = (_b.sent()).BsFileEarmarkPpt;
                    return [2 /*return*/, BsFileEarmarkPpt];
                case 1215: return [4 /*yield*/, import("react-icons/bs")];
                case 1216:
                    BsFileEarmarkRichtextFill = (_b.sent()).BsFileEarmarkRichtextFill;
                    return [2 /*return*/, BsFileEarmarkRichtextFill];
                case 1217: return [4 /*yield*/, import("react-icons/bs")];
                case 1218:
                    BsFileEarmarkRichtext = (_b.sent()).BsFileEarmarkRichtext;
                    return [2 /*return*/, BsFileEarmarkRichtext];
                case 1219: return [4 /*yield*/, import("react-icons/bs")];
                case 1220:
                    BsFileEarmarkRuledFill = (_b.sent()).BsFileEarmarkRuledFill;
                    return [2 /*return*/, BsFileEarmarkRuledFill];
                case 1221: return [4 /*yield*/, import("react-icons/bs")];
                case 1222:
                    BsFileEarmarkRuled = (_b.sent()).BsFileEarmarkRuled;
                    return [2 /*return*/, BsFileEarmarkRuled];
                case 1223: return [4 /*yield*/, import("react-icons/bs")];
                case 1224:
                    BsFileEarmarkSlidesFill = (_b.sent()).BsFileEarmarkSlidesFill;
                    return [2 /*return*/, BsFileEarmarkSlidesFill];
                case 1225: return [4 /*yield*/, import("react-icons/bs")];
                case 1226:
                    BsFileEarmarkSlides = (_b.sent()).BsFileEarmarkSlides;
                    return [2 /*return*/, BsFileEarmarkSlides];
                case 1227: return [4 /*yield*/, import("react-icons/bs")];
                case 1228:
                    BsFileEarmarkSpreadsheetFill = (_b.sent()).BsFileEarmarkSpreadsheetFill;
                    return [2 /*return*/, BsFileEarmarkSpreadsheetFill];
                case 1229: return [4 /*yield*/, import("react-icons/bs")];
                case 1230:
                    BsFileEarmarkSpreadsheet = (_b.sent()).BsFileEarmarkSpreadsheet;
                    return [2 /*return*/, BsFileEarmarkSpreadsheet];
                case 1231: return [4 /*yield*/, import("react-icons/bs")];
                case 1232:
                    BsFileEarmarkTextFill = (_b.sent()).BsFileEarmarkTextFill;
                    return [2 /*return*/, BsFileEarmarkTextFill];
                case 1233: return [4 /*yield*/, import("react-icons/bs")];
                case 1234:
                    BsFileEarmarkText = (_b.sent()).BsFileEarmarkText;
                    return [2 /*return*/, BsFileEarmarkText];
                case 1235: return [4 /*yield*/, import("react-icons/bs")];
                case 1236:
                    BsFileEarmarkWordFill = (_b.sent()).BsFileEarmarkWordFill;
                    return [2 /*return*/, BsFileEarmarkWordFill];
                case 1237: return [4 /*yield*/, import("react-icons/bs")];
                case 1238:
                    BsFileEarmarkWord = (_b.sent()).BsFileEarmarkWord;
                    return [2 /*return*/, BsFileEarmarkWord];
                case 1239: return [4 /*yield*/, import("react-icons/bs")];
                case 1240:
                    BsFileEarmarkXFill = (_b.sent()).BsFileEarmarkXFill;
                    return [2 /*return*/, BsFileEarmarkXFill];
                case 1241: return [4 /*yield*/, import("react-icons/bs")];
                case 1242:
                    BsFileEarmarkX = (_b.sent()).BsFileEarmarkX;
                    return [2 /*return*/, BsFileEarmarkX];
                case 1243: return [4 /*yield*/, import("react-icons/bs")];
                case 1244:
                    BsFileEarmarkZipFill = (_b.sent()).BsFileEarmarkZipFill;
                    return [2 /*return*/, BsFileEarmarkZipFill];
                case 1245: return [4 /*yield*/, import("react-icons/bs")];
                case 1246:
                    BsFileEarmarkZip = (_b.sent()).BsFileEarmarkZip;
                    return [2 /*return*/, BsFileEarmarkZip];
                case 1247: return [4 /*yield*/, import("react-icons/bs")];
                case 1248:
                    BsFileEarmark = (_b.sent()).BsFileEarmark;
                    return [2 /*return*/, BsFileEarmark];
                case 1249: return [4 /*yield*/, import("react-icons/bs")];
                case 1250:
                    BsFileEaselFill = (_b.sent()).BsFileEaselFill;
                    return [2 /*return*/, BsFileEaselFill];
                case 1251: return [4 /*yield*/, import("react-icons/bs")];
                case 1252:
                    BsFileEasel = (_b.sent()).BsFileEasel;
                    return [2 /*return*/, BsFileEasel];
                case 1253: return [4 /*yield*/, import("react-icons/bs")];
                case 1254:
                    BsFileExcelFill = (_b.sent()).BsFileExcelFill;
                    return [2 /*return*/, BsFileExcelFill];
                case 1255: return [4 /*yield*/, import("react-icons/bs")];
                case 1256:
                    BsFileExcel = (_b.sent()).BsFileExcel;
                    return [2 /*return*/, BsFileExcel];
                case 1257: return [4 /*yield*/, import("react-icons/bs")];
                case 1258:
                    BsFileFill = (_b.sent()).BsFileFill;
                    return [2 /*return*/, BsFileFill];
                case 1259: return [4 /*yield*/, import("react-icons/bs")];
                case 1260:
                    BsFileFontFill = (_b.sent()).BsFileFontFill;
                    return [2 /*return*/, BsFileFontFill];
                case 1261: return [4 /*yield*/, import("react-icons/bs")];
                case 1262:
                    BsFileFont = (_b.sent()).BsFileFont;
                    return [2 /*return*/, BsFileFont];
                case 1263: return [4 /*yield*/, import("react-icons/bs")];
                case 1264:
                    BsFileImageFill = (_b.sent()).BsFileImageFill;
                    return [2 /*return*/, BsFileImageFill];
                case 1265: return [4 /*yield*/, import("react-icons/bs")];
                case 1266:
                    BsFileImage = (_b.sent()).BsFileImage;
                    return [2 /*return*/, BsFileImage];
                case 1267: return [4 /*yield*/, import("react-icons/bs")];
                case 1268:
                    BsFileLockFill = (_b.sent()).BsFileLockFill;
                    return [2 /*return*/, BsFileLockFill];
                case 1269: return [4 /*yield*/, import("react-icons/bs")];
                case 1270:
                    BsFileLock = (_b.sent()).BsFileLock;
                    return [2 /*return*/, BsFileLock];
                case 1271: return [4 /*yield*/, import("react-icons/bs")];
                case 1272:
                    BsFileLock2Fill = (_b.sent()).BsFileLock2Fill;
                    return [2 /*return*/, BsFileLock2Fill];
                case 1273: return [4 /*yield*/, import("react-icons/bs")];
                case 1274:
                    BsFileLock2 = (_b.sent()).BsFileLock2;
                    return [2 /*return*/, BsFileLock2];
                case 1275: return [4 /*yield*/, import("react-icons/bs")];
                case 1276:
                    BsFileMedicalFill = (_b.sent()).BsFileMedicalFill;
                    return [2 /*return*/, BsFileMedicalFill];
                case 1277: return [4 /*yield*/, import("react-icons/bs")];
                case 1278:
                    BsFileMedical = (_b.sent()).BsFileMedical;
                    return [2 /*return*/, BsFileMedical];
                case 1279: return [4 /*yield*/, import("react-icons/bs")];
                case 1280:
                    BsFileMinusFill = (_b.sent()).BsFileMinusFill;
                    return [2 /*return*/, BsFileMinusFill];
                case 1281: return [4 /*yield*/, import("react-icons/bs")];
                case 1282:
                    BsFileMinus = (_b.sent()).BsFileMinus;
                    return [2 /*return*/, BsFileMinus];
                case 1283: return [4 /*yield*/, import("react-icons/bs")];
                case 1284:
                    BsFileMusicFill = (_b.sent()).BsFileMusicFill;
                    return [2 /*return*/, BsFileMusicFill];
                case 1285: return [4 /*yield*/, import("react-icons/bs")];
                case 1286:
                    BsFileMusic = (_b.sent()).BsFileMusic;
                    return [2 /*return*/, BsFileMusic];
                case 1287: return [4 /*yield*/, import("react-icons/bs")];
                case 1288:
                    BsFilePdfFill = (_b.sent()).BsFilePdfFill;
                    return [2 /*return*/, BsFilePdfFill];
                case 1289: return [4 /*yield*/, import("react-icons/bs")];
                case 1290:
                    BsFilePdf = (_b.sent()).BsFilePdf;
                    return [2 /*return*/, BsFilePdf];
                case 1291: return [4 /*yield*/, import("react-icons/bs")];
                case 1292:
                    BsFilePersonFill = (_b.sent()).BsFilePersonFill;
                    return [2 /*return*/, BsFilePersonFill];
                case 1293: return [4 /*yield*/, import("react-icons/bs")];
                case 1294:
                    BsFilePerson = (_b.sent()).BsFilePerson;
                    return [2 /*return*/, BsFilePerson];
                case 1295: return [4 /*yield*/, import("react-icons/bs")];
                case 1296:
                    BsFilePlayFill = (_b.sent()).BsFilePlayFill;
                    return [2 /*return*/, BsFilePlayFill];
                case 1297: return [4 /*yield*/, import("react-icons/bs")];
                case 1298:
                    BsFilePlay = (_b.sent()).BsFilePlay;
                    return [2 /*return*/, BsFilePlay];
                case 1299: return [4 /*yield*/, import("react-icons/bs")];
                case 1300:
                    BsFilePlusFill = (_b.sent()).BsFilePlusFill;
                    return [2 /*return*/, BsFilePlusFill];
                case 1301: return [4 /*yield*/, import("react-icons/bs")];
                case 1302:
                    BsFilePlus = (_b.sent()).BsFilePlus;
                    return [2 /*return*/, BsFilePlus];
                case 1303: return [4 /*yield*/, import("react-icons/bs")];
                case 1304:
                    BsFilePostFill = (_b.sent()).BsFilePostFill;
                    return [2 /*return*/, BsFilePostFill];
                case 1305: return [4 /*yield*/, import("react-icons/bs")];
                case 1306:
                    BsFilePost = (_b.sent()).BsFilePost;
                    return [2 /*return*/, BsFilePost];
                case 1307: return [4 /*yield*/, import("react-icons/bs")];
                case 1308:
                    BsFilePptFill = (_b.sent()).BsFilePptFill;
                    return [2 /*return*/, BsFilePptFill];
                case 1309: return [4 /*yield*/, import("react-icons/bs")];
                case 1310:
                    BsFilePpt = (_b.sent()).BsFilePpt;
                    return [2 /*return*/, BsFilePpt];
                case 1311: return [4 /*yield*/, import("react-icons/bs")];
                case 1312:
                    BsFileRichtextFill = (_b.sent()).BsFileRichtextFill;
                    return [2 /*return*/, BsFileRichtextFill];
                case 1313: return [4 /*yield*/, import("react-icons/bs")];
                case 1314:
                    BsFileRichtext = (_b.sent()).BsFileRichtext;
                    return [2 /*return*/, BsFileRichtext];
                case 1315: return [4 /*yield*/, import("react-icons/bs")];
                case 1316:
                    BsFileRuledFill = (_b.sent()).BsFileRuledFill;
                    return [2 /*return*/, BsFileRuledFill];
                case 1317: return [4 /*yield*/, import("react-icons/bs")];
                case 1318:
                    BsFileRuled = (_b.sent()).BsFileRuled;
                    return [2 /*return*/, BsFileRuled];
                case 1319: return [4 /*yield*/, import("react-icons/bs")];
                case 1320:
                    BsFileSlidesFill = (_b.sent()).BsFileSlidesFill;
                    return [2 /*return*/, BsFileSlidesFill];
                case 1321: return [4 /*yield*/, import("react-icons/bs")];
                case 1322:
                    BsFileSlides = (_b.sent()).BsFileSlides;
                    return [2 /*return*/, BsFileSlides];
                case 1323: return [4 /*yield*/, import("react-icons/bs")];
                case 1324:
                    BsFileSpreadsheetFill = (_b.sent()).BsFileSpreadsheetFill;
                    return [2 /*return*/, BsFileSpreadsheetFill];
                case 1325: return [4 /*yield*/, import("react-icons/bs")];
                case 1326:
                    BsFileSpreadsheet = (_b.sent()).BsFileSpreadsheet;
                    return [2 /*return*/, BsFileSpreadsheet];
                case 1327: return [4 /*yield*/, import("react-icons/bs")];
                case 1328:
                    BsFileTextFill = (_b.sent()).BsFileTextFill;
                    return [2 /*return*/, BsFileTextFill];
                case 1329: return [4 /*yield*/, import("react-icons/bs")];
                case 1330:
                    BsFileText = (_b.sent()).BsFileText;
                    return [2 /*return*/, BsFileText];
                case 1331: return [4 /*yield*/, import("react-icons/bs")];
                case 1332:
                    BsFileWordFill = (_b.sent()).BsFileWordFill;
                    return [2 /*return*/, BsFileWordFill];
                case 1333: return [4 /*yield*/, import("react-icons/bs")];
                case 1334:
                    BsFileWord = (_b.sent()).BsFileWord;
                    return [2 /*return*/, BsFileWord];
                case 1335: return [4 /*yield*/, import("react-icons/bs")];
                case 1336:
                    BsFileXFill = (_b.sent()).BsFileXFill;
                    return [2 /*return*/, BsFileXFill];
                case 1337: return [4 /*yield*/, import("react-icons/bs")];
                case 1338:
                    BsFileX = (_b.sent()).BsFileX;
                    return [2 /*return*/, BsFileX];
                case 1339: return [4 /*yield*/, import("react-icons/bs")];
                case 1340:
                    BsFileZipFill = (_b.sent()).BsFileZipFill;
                    return [2 /*return*/, BsFileZipFill];
                case 1341: return [4 /*yield*/, import("react-icons/bs")];
                case 1342:
                    BsFileZip = (_b.sent()).BsFileZip;
                    return [2 /*return*/, BsFileZip];
                case 1343: return [4 /*yield*/, import("react-icons/bs")];
                case 1344:
                    BsFile = (_b.sent()).BsFile;
                    return [2 /*return*/, BsFile];
                case 1345: return [4 /*yield*/, import("react-icons/bs")];
                case 1346:
                    BsFilesAlt = (_b.sent()).BsFilesAlt;
                    return [2 /*return*/, BsFilesAlt];
                case 1347: return [4 /*yield*/, import("react-icons/bs")];
                case 1348:
                    BsFiles = (_b.sent()).BsFiles;
                    return [2 /*return*/, BsFiles];
                case 1349: return [4 /*yield*/, import("react-icons/bs")];
                case 1350:
                    BsFiletypeAac = (_b.sent()).BsFiletypeAac;
                    return [2 /*return*/, BsFiletypeAac];
                case 1351: return [4 /*yield*/, import("react-icons/bs")];
                case 1352:
                    BsFiletypeAi = (_b.sent()).BsFiletypeAi;
                    return [2 /*return*/, BsFiletypeAi];
                case 1353: return [4 /*yield*/, import("react-icons/bs")];
                case 1354:
                    BsFiletypeBmp = (_b.sent()).BsFiletypeBmp;
                    return [2 /*return*/, BsFiletypeBmp];
                case 1355: return [4 /*yield*/, import("react-icons/bs")];
                case 1356:
                    BsFiletypeCs = (_b.sent()).BsFiletypeCs;
                    return [2 /*return*/, BsFiletypeCs];
                case 1357: return [4 /*yield*/, import("react-icons/bs")];
                case 1358:
                    BsFiletypeCss = (_b.sent()).BsFiletypeCss;
                    return [2 /*return*/, BsFiletypeCss];
                case 1359: return [4 /*yield*/, import("react-icons/bs")];
                case 1360:
                    BsFiletypeCsv = (_b.sent()).BsFiletypeCsv;
                    return [2 /*return*/, BsFiletypeCsv];
                case 1361: return [4 /*yield*/, import("react-icons/bs")];
                case 1362:
                    BsFiletypeDoc = (_b.sent()).BsFiletypeDoc;
                    return [2 /*return*/, BsFiletypeDoc];
                case 1363: return [4 /*yield*/, import("react-icons/bs")];
                case 1364:
                    BsFiletypeDocx = (_b.sent()).BsFiletypeDocx;
                    return [2 /*return*/, BsFiletypeDocx];
                case 1365: return [4 /*yield*/, import("react-icons/bs")];
                case 1366:
                    BsFiletypeExe = (_b.sent()).BsFiletypeExe;
                    return [2 /*return*/, BsFiletypeExe];
                case 1367: return [4 /*yield*/, import("react-icons/bs")];
                case 1368:
                    BsFiletypeGif = (_b.sent()).BsFiletypeGif;
                    return [2 /*return*/, BsFiletypeGif];
                case 1369: return [4 /*yield*/, import("react-icons/bs")];
                case 1370:
                    BsFiletypeHeic = (_b.sent()).BsFiletypeHeic;
                    return [2 /*return*/, BsFiletypeHeic];
                case 1371: return [4 /*yield*/, import("react-icons/bs")];
                case 1372:
                    BsFiletypeHtml = (_b.sent()).BsFiletypeHtml;
                    return [2 /*return*/, BsFiletypeHtml];
                case 1373: return [4 /*yield*/, import("react-icons/bs")];
                case 1374:
                    BsFiletypeJava = (_b.sent()).BsFiletypeJava;
                    return [2 /*return*/, BsFiletypeJava];
                case 1375: return [4 /*yield*/, import("react-icons/bs")];
                case 1376:
                    BsFiletypeJpg = (_b.sent()).BsFiletypeJpg;
                    return [2 /*return*/, BsFiletypeJpg];
                case 1377: return [4 /*yield*/, import("react-icons/bs")];
                case 1378:
                    BsFiletypeJs = (_b.sent()).BsFiletypeJs;
                    return [2 /*return*/, BsFiletypeJs];
                case 1379: return [4 /*yield*/, import("react-icons/bs")];
                case 1380:
                    BsFiletypeJson = (_b.sent()).BsFiletypeJson;
                    return [2 /*return*/, BsFiletypeJson];
                case 1381: return [4 /*yield*/, import("react-icons/bs")];
                case 1382:
                    BsFiletypeJsx = (_b.sent()).BsFiletypeJsx;
                    return [2 /*return*/, BsFiletypeJsx];
                case 1383: return [4 /*yield*/, import("react-icons/bs")];
                case 1384:
                    BsFiletypeKey = (_b.sent()).BsFiletypeKey;
                    return [2 /*return*/, BsFiletypeKey];
                case 1385: return [4 /*yield*/, import("react-icons/bs")];
                case 1386:
                    BsFiletypeM4P = (_b.sent()).BsFiletypeM4P;
                    return [2 /*return*/, BsFiletypeM4P];
                case 1387: return [4 /*yield*/, import("react-icons/bs")];
                case 1388:
                    BsFiletypeMd = (_b.sent()).BsFiletypeMd;
                    return [2 /*return*/, BsFiletypeMd];
                case 1389: return [4 /*yield*/, import("react-icons/bs")];
                case 1390:
                    BsFiletypeMdx = (_b.sent()).BsFiletypeMdx;
                    return [2 /*return*/, BsFiletypeMdx];
                case 1391: return [4 /*yield*/, import("react-icons/bs")];
                case 1392:
                    BsFiletypeMov = (_b.sent()).BsFiletypeMov;
                    return [2 /*return*/, BsFiletypeMov];
                case 1393: return [4 /*yield*/, import("react-icons/bs")];
                case 1394:
                    BsFiletypeMp3 = (_b.sent()).BsFiletypeMp3;
                    return [2 /*return*/, BsFiletypeMp3];
                case 1395: return [4 /*yield*/, import("react-icons/bs")];
                case 1396:
                    BsFiletypeMp4 = (_b.sent()).BsFiletypeMp4;
                    return [2 /*return*/, BsFiletypeMp4];
                case 1397: return [4 /*yield*/, import("react-icons/bs")];
                case 1398:
                    BsFiletypeOtf = (_b.sent()).BsFiletypeOtf;
                    return [2 /*return*/, BsFiletypeOtf];
                case 1399: return [4 /*yield*/, import("react-icons/bs")];
                case 1400:
                    BsFiletypePdf = (_b.sent()).BsFiletypePdf;
                    return [2 /*return*/, BsFiletypePdf];
                case 1401: return [4 /*yield*/, import("react-icons/bs")];
                case 1402:
                    BsFiletypePhp = (_b.sent()).BsFiletypePhp;
                    return [2 /*return*/, BsFiletypePhp];
                case 1403: return [4 /*yield*/, import("react-icons/bs")];
                case 1404:
                    BsFiletypePng = (_b.sent()).BsFiletypePng;
                    return [2 /*return*/, BsFiletypePng];
                case 1405: return [4 /*yield*/, import("react-icons/bs")];
                case 1406:
                    BsFiletypePpt = (_b.sent()).BsFiletypePpt;
                    return [2 /*return*/, BsFiletypePpt];
                case 1407: return [4 /*yield*/, import("react-icons/bs")];
                case 1408:
                    BsFiletypePptx = (_b.sent()).BsFiletypePptx;
                    return [2 /*return*/, BsFiletypePptx];
                case 1409: return [4 /*yield*/, import("react-icons/bs")];
                case 1410:
                    BsFiletypePsd = (_b.sent()).BsFiletypePsd;
                    return [2 /*return*/, BsFiletypePsd];
                case 1411: return [4 /*yield*/, import("react-icons/bs")];
                case 1412:
                    BsFiletypePy = (_b.sent()).BsFiletypePy;
                    return [2 /*return*/, BsFiletypePy];
                case 1413: return [4 /*yield*/, import("react-icons/bs")];
                case 1414:
                    BsFiletypeRaw = (_b.sent()).BsFiletypeRaw;
                    return [2 /*return*/, BsFiletypeRaw];
                case 1415: return [4 /*yield*/, import("react-icons/bs")];
                case 1416:
                    BsFiletypeRb = (_b.sent()).BsFiletypeRb;
                    return [2 /*return*/, BsFiletypeRb];
                case 1417: return [4 /*yield*/, import("react-icons/bs")];
                case 1418:
                    BsFiletypeSass = (_b.sent()).BsFiletypeSass;
                    return [2 /*return*/, BsFiletypeSass];
                case 1419: return [4 /*yield*/, import("react-icons/bs")];
                case 1420:
                    BsFiletypeScss = (_b.sent()).BsFiletypeScss;
                    return [2 /*return*/, BsFiletypeScss];
                case 1421: return [4 /*yield*/, import("react-icons/bs")];
                case 1422:
                    BsFiletypeSh = (_b.sent()).BsFiletypeSh;
                    return [2 /*return*/, BsFiletypeSh];
                case 1423: return [4 /*yield*/, import("react-icons/bs")];
                case 1424:
                    BsFiletypeSql = (_b.sent()).BsFiletypeSql;
                    return [2 /*return*/, BsFiletypeSql];
                case 1425: return [4 /*yield*/, import("react-icons/bs")];
                case 1426:
                    BsFiletypeSvg = (_b.sent()).BsFiletypeSvg;
                    return [2 /*return*/, BsFiletypeSvg];
                case 1427: return [4 /*yield*/, import("react-icons/bs")];
                case 1428:
                    BsFiletypeTiff = (_b.sent()).BsFiletypeTiff;
                    return [2 /*return*/, BsFiletypeTiff];
                case 1429: return [4 /*yield*/, import("react-icons/bs")];
                case 1430:
                    BsFiletypeTsx = (_b.sent()).BsFiletypeTsx;
                    return [2 /*return*/, BsFiletypeTsx];
                case 1431: return [4 /*yield*/, import("react-icons/bs")];
                case 1432:
                    BsFiletypeTtf = (_b.sent()).BsFiletypeTtf;
                    return [2 /*return*/, BsFiletypeTtf];
                case 1433: return [4 /*yield*/, import("react-icons/bs")];
                case 1434:
                    BsFiletypeTxt = (_b.sent()).BsFiletypeTxt;
                    return [2 /*return*/, BsFiletypeTxt];
                case 1435: return [4 /*yield*/, import("react-icons/bs")];
                case 1436:
                    BsFiletypeWav = (_b.sent()).BsFiletypeWav;
                    return [2 /*return*/, BsFiletypeWav];
                case 1437: return [4 /*yield*/, import("react-icons/bs")];
                case 1438:
                    BsFiletypeWoff = (_b.sent()).BsFiletypeWoff;
                    return [2 /*return*/, BsFiletypeWoff];
                case 1439: return [4 /*yield*/, import("react-icons/bs")];
                case 1440:
                    BsFiletypeXls = (_b.sent()).BsFiletypeXls;
                    return [2 /*return*/, BsFiletypeXls];
                case 1441: return [4 /*yield*/, import("react-icons/bs")];
                case 1442:
                    BsFiletypeXlsx = (_b.sent()).BsFiletypeXlsx;
                    return [2 /*return*/, BsFiletypeXlsx];
                case 1443: return [4 /*yield*/, import("react-icons/bs")];
                case 1444:
                    BsFiletypeXml = (_b.sent()).BsFiletypeXml;
                    return [2 /*return*/, BsFiletypeXml];
                case 1445: return [4 /*yield*/, import("react-icons/bs")];
                case 1446:
                    BsFiletypeYml = (_b.sent()).BsFiletypeYml;
                    return [2 /*return*/, BsFiletypeYml];
                case 1447: return [4 /*yield*/, import("react-icons/bs")];
                case 1448:
                    BsFilm = (_b.sent()).BsFilm;
                    return [2 /*return*/, BsFilm];
                case 1449: return [4 /*yield*/, import("react-icons/bs")];
                case 1450:
                    BsFilterCircleFill = (_b.sent()).BsFilterCircleFill;
                    return [2 /*return*/, BsFilterCircleFill];
                case 1451: return [4 /*yield*/, import("react-icons/bs")];
                case 1452:
                    BsFilterCircle = (_b.sent()).BsFilterCircle;
                    return [2 /*return*/, BsFilterCircle];
                case 1453: return [4 /*yield*/, import("react-icons/bs")];
                case 1454:
                    BsFilterLeft = (_b.sent()).BsFilterLeft;
                    return [2 /*return*/, BsFilterLeft];
                case 1455: return [4 /*yield*/, import("react-icons/bs")];
                case 1456:
                    BsFilterRight = (_b.sent()).BsFilterRight;
                    return [2 /*return*/, BsFilterRight];
                case 1457: return [4 /*yield*/, import("react-icons/bs")];
                case 1458:
                    BsFilterSquareFill = (_b.sent()).BsFilterSquareFill;
                    return [2 /*return*/, BsFilterSquareFill];
                case 1459: return [4 /*yield*/, import("react-icons/bs")];
                case 1460:
                    BsFilterSquare = (_b.sent()).BsFilterSquare;
                    return [2 /*return*/, BsFilterSquare];
                case 1461: return [4 /*yield*/, import("react-icons/bs")];
                case 1462:
                    BsFilter = (_b.sent()).BsFilter;
                    return [2 /*return*/, BsFilter];
                case 1463: return [4 /*yield*/, import("react-icons/bs")];
                case 1464:
                    BsFingerprint = (_b.sent()).BsFingerprint;
                    return [2 /*return*/, BsFingerprint];
                case 1465: return [4 /*yield*/, import("react-icons/bs")];
                case 1466:
                    BsFire = (_b.sent()).BsFire;
                    return [2 /*return*/, BsFire];
                case 1467: return [4 /*yield*/, import("react-icons/bs")];
                case 1468:
                    BsFlagFill = (_b.sent()).BsFlagFill;
                    return [2 /*return*/, BsFlagFill];
                case 1469: return [4 /*yield*/, import("react-icons/bs")];
                case 1470:
                    BsFlag = (_b.sent()).BsFlag;
                    return [2 /*return*/, BsFlag];
                case 1471: return [4 /*yield*/, import("react-icons/bs")];
                case 1472:
                    BsFloppyFill = (_b.sent()).BsFloppyFill;
                    return [2 /*return*/, BsFloppyFill];
                case 1473: return [4 /*yield*/, import("react-icons/bs")];
                case 1474:
                    BsFloppy = (_b.sent()).BsFloppy;
                    return [2 /*return*/, BsFloppy];
                case 1475: return [4 /*yield*/, import("react-icons/bs")];
                case 1476:
                    BsFloppy2Fill = (_b.sent()).BsFloppy2Fill;
                    return [2 /*return*/, BsFloppy2Fill];
                case 1477: return [4 /*yield*/, import("react-icons/bs")];
                case 1478:
                    BsFloppy2 = (_b.sent()).BsFloppy2;
                    return [2 /*return*/, BsFloppy2];
                case 1479: return [4 /*yield*/, import("react-icons/bs")];
                case 1480:
                    BsFlower1 = (_b.sent()).BsFlower1;
                    return [2 /*return*/, BsFlower1];
                case 1481: return [4 /*yield*/, import("react-icons/bs")];
                case 1482:
                    BsFlower2 = (_b.sent()).BsFlower2;
                    return [2 /*return*/, BsFlower2];
                case 1483: return [4 /*yield*/, import("react-icons/bs")];
                case 1484:
                    BsFlower3 = (_b.sent()).BsFlower3;
                    return [2 /*return*/, BsFlower3];
                case 1485: return [4 /*yield*/, import("react-icons/bs")];
                case 1486:
                    BsFolderCheck = (_b.sent()).BsFolderCheck;
                    return [2 /*return*/, BsFolderCheck];
                case 1487: return [4 /*yield*/, import("react-icons/bs")];
                case 1488:
                    BsFolderFill = (_b.sent()).BsFolderFill;
                    return [2 /*return*/, BsFolderFill];
                case 1489: return [4 /*yield*/, import("react-icons/bs")];
                case 1490:
                    BsFolderMinus = (_b.sent()).BsFolderMinus;
                    return [2 /*return*/, BsFolderMinus];
                case 1491: return [4 /*yield*/, import("react-icons/bs")];
                case 1492:
                    BsFolderPlus = (_b.sent()).BsFolderPlus;
                    return [2 /*return*/, BsFolderPlus];
                case 1493: return [4 /*yield*/, import("react-icons/bs")];
                case 1494:
                    BsFolderSymlinkFill = (_b.sent()).BsFolderSymlinkFill;
                    return [2 /*return*/, BsFolderSymlinkFill];
                case 1495: return [4 /*yield*/, import("react-icons/bs")];
                case 1496:
                    BsFolderSymlink = (_b.sent()).BsFolderSymlink;
                    return [2 /*return*/, BsFolderSymlink];
                case 1497: return [4 /*yield*/, import("react-icons/bs")];
                case 1498:
                    BsFolderX = (_b.sent()).BsFolderX;
                    return [2 /*return*/, BsFolderX];
                case 1499: return [4 /*yield*/, import("react-icons/bs")];
                case 1500:
                    BsFolder = (_b.sent()).BsFolder;
                    return [2 /*return*/, BsFolder];
                case 1501: return [4 /*yield*/, import("react-icons/bs")];
                case 1502:
                    BsFolder2Open = (_b.sent()).BsFolder2Open;
                    return [2 /*return*/, BsFolder2Open];
                case 1503: return [4 /*yield*/, import("react-icons/bs")];
                case 1504:
                    BsFolder2 = (_b.sent()).BsFolder2;
                    return [2 /*return*/, BsFolder2];
                case 1505: return [4 /*yield*/, import("react-icons/bs")];
                case 1506:
                    BsFonts = (_b.sent()).BsFonts;
                    return [2 /*return*/, BsFonts];
                case 1507: return [4 /*yield*/, import("react-icons/bs")];
                case 1508:
                    BsForwardFill = (_b.sent()).BsForwardFill;
                    return [2 /*return*/, BsForwardFill];
                case 1509: return [4 /*yield*/, import("react-icons/bs")];
                case 1510:
                    BsForward = (_b.sent()).BsForward;
                    return [2 /*return*/, BsForward];
                case 1511: return [4 /*yield*/, import("react-icons/bs")];
                case 1512:
                    BsFront = (_b.sent()).BsFront;
                    return [2 /*return*/, BsFront];
                case 1513: return [4 /*yield*/, import("react-icons/bs")];
                case 1514:
                    BsFuelPumpDieselFill = (_b.sent()).BsFuelPumpDieselFill;
                    return [2 /*return*/, BsFuelPumpDieselFill];
                case 1515: return [4 /*yield*/, import("react-icons/bs")];
                case 1516:
                    BsFuelPumpDiesel = (_b.sent()).BsFuelPumpDiesel;
                    return [2 /*return*/, BsFuelPumpDiesel];
                case 1517: return [4 /*yield*/, import("react-icons/bs")];
                case 1518:
                    BsFuelPumpFill = (_b.sent()).BsFuelPumpFill;
                    return [2 /*return*/, BsFuelPumpFill];
                case 1519: return [4 /*yield*/, import("react-icons/bs")];
                case 1520:
                    BsFuelPump = (_b.sent()).BsFuelPump;
                    return [2 /*return*/, BsFuelPump];
                case 1521: return [4 /*yield*/, import("react-icons/bs")];
                case 1522:
                    BsFullscreenExit = (_b.sent()).BsFullscreenExit;
                    return [2 /*return*/, BsFullscreenExit];
                case 1523: return [4 /*yield*/, import("react-icons/bs")];
                case 1524:
                    BsFullscreen = (_b.sent()).BsFullscreen;
                    return [2 /*return*/, BsFullscreen];
                case 1525: return [4 /*yield*/, import("react-icons/bs")];
                case 1526:
                    BsFunnelFill = (_b.sent()).BsFunnelFill;
                    return [2 /*return*/, BsFunnelFill];
                case 1527: return [4 /*yield*/, import("react-icons/bs")];
                case 1528:
                    BsFunnel = (_b.sent()).BsFunnel;
                    return [2 /*return*/, BsFunnel];
                case 1529: return [4 /*yield*/, import("react-icons/bs")];
                case 1530:
                    BsGearFill = (_b.sent()).BsGearFill;
                    return [2 /*return*/, BsGearFill];
                case 1531: return [4 /*yield*/, import("react-icons/bs")];
                case 1532:
                    BsGearWideConnected = (_b.sent()).BsGearWideConnected;
                    return [2 /*return*/, BsGearWideConnected];
                case 1533: return [4 /*yield*/, import("react-icons/bs")];
                case 1534:
                    BsGearWide = (_b.sent()).BsGearWide;
                    return [2 /*return*/, BsGearWide];
                case 1535: return [4 /*yield*/, import("react-icons/bs")];
                case 1536:
                    BsGear = (_b.sent()).BsGear;
                    return [2 /*return*/, BsGear];
                case 1537: return [4 /*yield*/, import("react-icons/bs")];
                case 1538:
                    BsGem = (_b.sent()).BsGem;
                    return [2 /*return*/, BsGem];
                case 1539: return [4 /*yield*/, import("react-icons/bs")];
                case 1540:
                    BsGenderAmbiguous = (_b.sent()).BsGenderAmbiguous;
                    return [2 /*return*/, BsGenderAmbiguous];
                case 1541: return [4 /*yield*/, import("react-icons/bs")];
                case 1542:
                    BsGenderFemale = (_b.sent()).BsGenderFemale;
                    return [2 /*return*/, BsGenderFemale];
                case 1543: return [4 /*yield*/, import("react-icons/bs")];
                case 1544:
                    BsGenderMale = (_b.sent()).BsGenderMale;
                    return [2 /*return*/, BsGenderMale];
                case 1545: return [4 /*yield*/, import("react-icons/bs")];
                case 1546:
                    BsGenderNeuter = (_b.sent()).BsGenderNeuter;
                    return [2 /*return*/, BsGenderNeuter];
                case 1547: return [4 /*yield*/, import("react-icons/bs")];
                case 1548:
                    BsGenderTrans = (_b.sent()).BsGenderTrans;
                    return [2 /*return*/, BsGenderTrans];
                case 1549: return [4 /*yield*/, import("react-icons/bs")];
                case 1550:
                    BsGeoAltFill = (_b.sent()).BsGeoAltFill;
                    return [2 /*return*/, BsGeoAltFill];
                case 1551: return [4 /*yield*/, import("react-icons/bs")];
                case 1552:
                    BsGeoAlt = (_b.sent()).BsGeoAlt;
                    return [2 /*return*/, BsGeoAlt];
                case 1553: return [4 /*yield*/, import("react-icons/bs")];
                case 1554:
                    BsGeoFill = (_b.sent()).BsGeoFill;
                    return [2 /*return*/, BsGeoFill];
                case 1555: return [4 /*yield*/, import("react-icons/bs")];
                case 1556:
                    BsGeo = (_b.sent()).BsGeo;
                    return [2 /*return*/, BsGeo];
                case 1557: return [4 /*yield*/, import("react-icons/bs")];
                case 1558:
                    BsGiftFill = (_b.sent()).BsGiftFill;
                    return [2 /*return*/, BsGiftFill];
                case 1559: return [4 /*yield*/, import("react-icons/bs")];
                case 1560:
                    BsGift = (_b.sent()).BsGift;
                    return [2 /*return*/, BsGift];
                case 1561: return [4 /*yield*/, import("react-icons/bs")];
                case 1562:
                    BsGit = (_b.sent()).BsGit;
                    return [2 /*return*/, BsGit];
                case 1563: return [4 /*yield*/, import("react-icons/bs")];
                case 1564:
                    BsGithub = (_b.sent()).BsGithub;
                    return [2 /*return*/, BsGithub];
                case 1565: return [4 /*yield*/, import("react-icons/bs")];
                case 1566:
                    BsGitlab = (_b.sent()).BsGitlab;
                    return [2 /*return*/, BsGitlab];
                case 1567: return [4 /*yield*/, import("react-icons/bs")];
                case 1568:
                    BsGlobeAmericas = (_b.sent()).BsGlobeAmericas;
                    return [2 /*return*/, BsGlobeAmericas];
                case 1569: return [4 /*yield*/, import("react-icons/bs")];
                case 1570:
                    BsGlobeAsiaAustralia = (_b.sent()).BsGlobeAsiaAustralia;
                    return [2 /*return*/, BsGlobeAsiaAustralia];
                case 1571: return [4 /*yield*/, import("react-icons/bs")];
                case 1572:
                    BsGlobeCentralSouthAsia = (_b.sent()).BsGlobeCentralSouthAsia;
                    return [2 /*return*/, BsGlobeCentralSouthAsia];
                case 1573: return [4 /*yield*/, import("react-icons/bs")];
                case 1574:
                    BsGlobeEuropeAfrica = (_b.sent()).BsGlobeEuropeAfrica;
                    return [2 /*return*/, BsGlobeEuropeAfrica];
                case 1575: return [4 /*yield*/, import("react-icons/bs")];
                case 1576:
                    BsGlobe = (_b.sent()).BsGlobe;
                    return [2 /*return*/, BsGlobe];
                case 1577: return [4 /*yield*/, import("react-icons/bs")];
                case 1578:
                    BsGlobe2 = (_b.sent()).BsGlobe2;
                    return [2 /*return*/, BsGlobe2];
                case 1579: return [4 /*yield*/, import("react-icons/bs")];
                case 1580:
                    BsGooglePlay = (_b.sent()).BsGooglePlay;
                    return [2 /*return*/, BsGooglePlay];
                case 1581: return [4 /*yield*/, import("react-icons/bs")];
                case 1582:
                    BsGoogle = (_b.sent()).BsGoogle;
                    return [2 /*return*/, BsGoogle];
                case 1583: return [4 /*yield*/, import("react-icons/bs")];
                case 1584:
                    BsGpuCard = (_b.sent()).BsGpuCard;
                    return [2 /*return*/, BsGpuCard];
                case 1585: return [4 /*yield*/, import("react-icons/bs")];
                case 1586:
                    BsGraphDownArrow = (_b.sent()).BsGraphDownArrow;
                    return [2 /*return*/, BsGraphDownArrow];
                case 1587: return [4 /*yield*/, import("react-icons/bs")];
                case 1588:
                    BsGraphDown = (_b.sent()).BsGraphDown;
                    return [2 /*return*/, BsGraphDown];
                case 1589: return [4 /*yield*/, import("react-icons/bs")];
                case 1590:
                    BsGraphUpArrow = (_b.sent()).BsGraphUpArrow;
                    return [2 /*return*/, BsGraphUpArrow];
                case 1591: return [4 /*yield*/, import("react-icons/bs")];
                case 1592:
                    BsGraphUp = (_b.sent()).BsGraphUp;
                    return [2 /*return*/, BsGraphUp];
                case 1593: return [4 /*yield*/, import("react-icons/bs")];
                case 1594:
                    BsGrid1X2Fill = (_b.sent()).BsGrid1X2Fill;
                    return [2 /*return*/, BsGrid1X2Fill];
                case 1595: return [4 /*yield*/, import("react-icons/bs")];
                case 1596:
                    BsGrid1X2 = (_b.sent()).BsGrid1X2;
                    return [2 /*return*/, BsGrid1X2];
                case 1597: return [4 /*yield*/, import("react-icons/bs")];
                case 1598:
                    BsGrid3X2GapFill = (_b.sent()).BsGrid3X2GapFill;
                    return [2 /*return*/, BsGrid3X2GapFill];
                case 1599: return [4 /*yield*/, import("react-icons/bs")];
                case 1600:
                    BsGrid3X2Gap = (_b.sent()).BsGrid3X2Gap;
                    return [2 /*return*/, BsGrid3X2Gap];
                case 1601: return [4 /*yield*/, import("react-icons/bs")];
                case 1602:
                    BsGrid3X2 = (_b.sent()).BsGrid3X2;
                    return [2 /*return*/, BsGrid3X2];
                case 1603: return [4 /*yield*/, import("react-icons/bs")];
                case 1604:
                    BsGrid3X3GapFill = (_b.sent()).BsGrid3X3GapFill;
                    return [2 /*return*/, BsGrid3X3GapFill];
                case 1605: return [4 /*yield*/, import("react-icons/bs")];
                case 1606:
                    BsGrid3X3Gap = (_b.sent()).BsGrid3X3Gap;
                    return [2 /*return*/, BsGrid3X3Gap];
                case 1607: return [4 /*yield*/, import("react-icons/bs")];
                case 1608:
                    BsGrid3X3 = (_b.sent()).BsGrid3X3;
                    return [2 /*return*/, BsGrid3X3];
                case 1609: return [4 /*yield*/, import("react-icons/bs")];
                case 1610:
                    BsGridFill = (_b.sent()).BsGridFill;
                    return [2 /*return*/, BsGridFill];
                case 1611: return [4 /*yield*/, import("react-icons/bs")];
                case 1612:
                    BsGrid = (_b.sent()).BsGrid;
                    return [2 /*return*/, BsGrid];
                case 1613: return [4 /*yield*/, import("react-icons/bs")];
                case 1614:
                    BsGripHorizontal = (_b.sent()).BsGripHorizontal;
                    return [2 /*return*/, BsGripHorizontal];
                case 1615: return [4 /*yield*/, import("react-icons/bs")];
                case 1616:
                    BsGripVertical = (_b.sent()).BsGripVertical;
                    return [2 /*return*/, BsGripVertical];
                case 1617: return [4 /*yield*/, import("react-icons/bs")];
                case 1618:
                    BsHCircleFill = (_b.sent()).BsHCircleFill;
                    return [2 /*return*/, BsHCircleFill];
                case 1619: return [4 /*yield*/, import("react-icons/bs")];
                case 1620:
                    BsHCircle = (_b.sent()).BsHCircle;
                    return [2 /*return*/, BsHCircle];
                case 1621: return [4 /*yield*/, import("react-icons/bs")];
                case 1622:
                    BsHSquareFill = (_b.sent()).BsHSquareFill;
                    return [2 /*return*/, BsHSquareFill];
                case 1623: return [4 /*yield*/, import("react-icons/bs")];
                case 1624:
                    BsHSquare = (_b.sent()).BsHSquare;
                    return [2 /*return*/, BsHSquare];
                case 1625: return [4 /*yield*/, import("react-icons/bs")];
                case 1626:
                    BsHammer = (_b.sent()).BsHammer;
                    return [2 /*return*/, BsHammer];
                case 1627: return [4 /*yield*/, import("react-icons/bs")];
                case 1628:
                    BsHandIndexFill = (_b.sent()).BsHandIndexFill;
                    return [2 /*return*/, BsHandIndexFill];
                case 1629: return [4 /*yield*/, import("react-icons/bs")];
                case 1630:
                    BsHandIndexThumbFill = (_b.sent()).BsHandIndexThumbFill;
                    return [2 /*return*/, BsHandIndexThumbFill];
                case 1631: return [4 /*yield*/, import("react-icons/bs")];
                case 1632:
                    BsHandIndexThumb = (_b.sent()).BsHandIndexThumb;
                    return [2 /*return*/, BsHandIndexThumb];
                case 1633: return [4 /*yield*/, import("react-icons/bs")];
                case 1634:
                    BsHandIndex = (_b.sent()).BsHandIndex;
                    return [2 /*return*/, BsHandIndex];
                case 1635: return [4 /*yield*/, import("react-icons/bs")];
                case 1636:
                    BsHandThumbsDownFill = (_b.sent()).BsHandThumbsDownFill;
                    return [2 /*return*/, BsHandThumbsDownFill];
                case 1637: return [4 /*yield*/, import("react-icons/bs")];
                case 1638:
                    BsHandThumbsDown = (_b.sent()).BsHandThumbsDown;
                    return [2 /*return*/, BsHandThumbsDown];
                case 1639: return [4 /*yield*/, import("react-icons/bs")];
                case 1640:
                    BsHandThumbsUpFill = (_b.sent()).BsHandThumbsUpFill;
                    return [2 /*return*/, BsHandThumbsUpFill];
                case 1641: return [4 /*yield*/, import("react-icons/bs")];
                case 1642:
                    BsHandThumbsUp = (_b.sent()).BsHandThumbsUp;
                    return [2 /*return*/, BsHandThumbsUp];
                case 1643: return [4 /*yield*/, import("react-icons/bs")];
                case 1644:
                    BsHandbagFill = (_b.sent()).BsHandbagFill;
                    return [2 /*return*/, BsHandbagFill];
                case 1645: return [4 /*yield*/, import("react-icons/bs")];
                case 1646:
                    BsHandbag = (_b.sent()).BsHandbag;
                    return [2 /*return*/, BsHandbag];
                case 1647: return [4 /*yield*/, import("react-icons/bs")];
                case 1648:
                    BsHash = (_b.sent()).BsHash;
                    return [2 /*return*/, BsHash];
                case 1649: return [4 /*yield*/, import("react-icons/bs")];
                case 1650:
                    BsHddFill = (_b.sent()).BsHddFill;
                    return [2 /*return*/, BsHddFill];
                case 1651: return [4 /*yield*/, import("react-icons/bs")];
                case 1652:
                    BsHddNetworkFill = (_b.sent()).BsHddNetworkFill;
                    return [2 /*return*/, BsHddNetworkFill];
                case 1653: return [4 /*yield*/, import("react-icons/bs")];
                case 1654:
                    BsHddNetwork = (_b.sent()).BsHddNetwork;
                    return [2 /*return*/, BsHddNetwork];
                case 1655: return [4 /*yield*/, import("react-icons/bs")];
                case 1656:
                    BsHddRackFill = (_b.sent()).BsHddRackFill;
                    return [2 /*return*/, BsHddRackFill];
                case 1657: return [4 /*yield*/, import("react-icons/bs")];
                case 1658:
                    BsHddRack = (_b.sent()).BsHddRack;
                    return [2 /*return*/, BsHddRack];
                case 1659: return [4 /*yield*/, import("react-icons/bs")];
                case 1660:
                    BsHddStackFill = (_b.sent()).BsHddStackFill;
                    return [2 /*return*/, BsHddStackFill];
                case 1661: return [4 /*yield*/, import("react-icons/bs")];
                case 1662:
                    BsHddStack = (_b.sent()).BsHddStack;
                    return [2 /*return*/, BsHddStack];
                case 1663: return [4 /*yield*/, import("react-icons/bs")];
                case 1664:
                    BsHdd = (_b.sent()).BsHdd;
                    return [2 /*return*/, BsHdd];
                case 1665: return [4 /*yield*/, import("react-icons/bs")];
                case 1666:
                    BsHdmiFill = (_b.sent()).BsHdmiFill;
                    return [2 /*return*/, BsHdmiFill];
                case 1667: return [4 /*yield*/, import("react-icons/bs")];
                case 1668:
                    BsHdmi = (_b.sent()).BsHdmi;
                    return [2 /*return*/, BsHdmi];
                case 1669: return [4 /*yield*/, import("react-icons/bs")];
                case 1670:
                    BsHeadphones = (_b.sent()).BsHeadphones;
                    return [2 /*return*/, BsHeadphones];
                case 1671: return [4 /*yield*/, import("react-icons/bs")];
                case 1672:
                    BsHeadsetVr = (_b.sent()).BsHeadsetVr;
                    return [2 /*return*/, BsHeadsetVr];
                case 1673: return [4 /*yield*/, import("react-icons/bs")];
                case 1674:
                    BsHeadset = (_b.sent()).BsHeadset;
                    return [2 /*return*/, BsHeadset];
                case 1675: return [4 /*yield*/, import("react-icons/bs")];
                case 1676:
                    BsHeartArrow = (_b.sent()).BsHeartArrow;
                    return [2 /*return*/, BsHeartArrow];
                case 1677: return [4 /*yield*/, import("react-icons/bs")];
                case 1678:
                    BsHeartFill = (_b.sent()).BsHeartFill;
                    return [2 /*return*/, BsHeartFill];
                case 1679: return [4 /*yield*/, import("react-icons/bs")];
                case 1680:
                    BsHeartHalf = (_b.sent()).BsHeartHalf;
                    return [2 /*return*/, BsHeartHalf];
                case 1681: return [4 /*yield*/, import("react-icons/bs")];
                case 1682:
                    BsHeartPulseFill = (_b.sent()).BsHeartPulseFill;
                    return [2 /*return*/, BsHeartPulseFill];
                case 1683: return [4 /*yield*/, import("react-icons/bs")];
                case 1684:
                    BsHeartPulse = (_b.sent()).BsHeartPulse;
                    return [2 /*return*/, BsHeartPulse];
                case 1685: return [4 /*yield*/, import("react-icons/bs")];
                case 1686:
                    BsHeart = (_b.sent()).BsHeart;
                    return [2 /*return*/, BsHeart];
                case 1687: return [4 /*yield*/, import("react-icons/bs")];
                case 1688:
                    BsHeartbreakFill = (_b.sent()).BsHeartbreakFill;
                    return [2 /*return*/, BsHeartbreakFill];
                case 1689: return [4 /*yield*/, import("react-icons/bs")];
                case 1690:
                    BsHeartbreak = (_b.sent()).BsHeartbreak;
                    return [2 /*return*/, BsHeartbreak];
                case 1691: return [4 /*yield*/, import("react-icons/bs")];
                case 1692:
                    BsHearts = (_b.sent()).BsHearts;
                    return [2 /*return*/, BsHearts];
                case 1693: return [4 /*yield*/, import("react-icons/bs")];
                case 1694:
                    BsHeptagonFill = (_b.sent()).BsHeptagonFill;
                    return [2 /*return*/, BsHeptagonFill];
                case 1695: return [4 /*yield*/, import("react-icons/bs")];
                case 1696:
                    BsHeptagonHalf = (_b.sent()).BsHeptagonHalf;
                    return [2 /*return*/, BsHeptagonHalf];
                case 1697: return [4 /*yield*/, import("react-icons/bs")];
                case 1698:
                    BsHeptagon = (_b.sent()).BsHeptagon;
                    return [2 /*return*/, BsHeptagon];
                case 1699: return [4 /*yield*/, import("react-icons/bs")];
                case 1700:
                    BsHexagonFill = (_b.sent()).BsHexagonFill;
                    return [2 /*return*/, BsHexagonFill];
                case 1701: return [4 /*yield*/, import("react-icons/bs")];
                case 1702:
                    BsHexagonHalf = (_b.sent()).BsHexagonHalf;
                    return [2 /*return*/, BsHexagonHalf];
                case 1703: return [4 /*yield*/, import("react-icons/bs")];
                case 1704:
                    BsHexagon = (_b.sent()).BsHexagon;
                    return [2 /*return*/, BsHexagon];
                case 1705: return [4 /*yield*/, import("react-icons/bs")];
                case 1706:
                    BsHighlighter = (_b.sent()).BsHighlighter;
                    return [2 /*return*/, BsHighlighter];
                case 1707: return [4 /*yield*/, import("react-icons/bs")];
                case 1708:
                    BsHighlights = (_b.sent()).BsHighlights;
                    return [2 /*return*/, BsHighlights];
                case 1709: return [4 /*yield*/, import("react-icons/bs")];
                case 1710:
                    BsHospitalFill = (_b.sent()).BsHospitalFill;
                    return [2 /*return*/, BsHospitalFill];
                case 1711: return [4 /*yield*/, import("react-icons/bs")];
                case 1712:
                    BsHospital = (_b.sent()).BsHospital;
                    return [2 /*return*/, BsHospital];
                case 1713: return [4 /*yield*/, import("react-icons/bs")];
                case 1714:
                    BsHourglassBottom = (_b.sent()).BsHourglassBottom;
                    return [2 /*return*/, BsHourglassBottom];
                case 1715: return [4 /*yield*/, import("react-icons/bs")];
                case 1716:
                    BsHourglassSplit = (_b.sent()).BsHourglassSplit;
                    return [2 /*return*/, BsHourglassSplit];
                case 1717: return [4 /*yield*/, import("react-icons/bs")];
                case 1718:
                    BsHourglassTop = (_b.sent()).BsHourglassTop;
                    return [2 /*return*/, BsHourglassTop];
                case 1719: return [4 /*yield*/, import("react-icons/bs")];
                case 1720:
                    BsHourglass = (_b.sent()).BsHourglass;
                    return [2 /*return*/, BsHourglass];
                case 1721: return [4 /*yield*/, import("react-icons/bs")];
                case 1722:
                    BsHouseAddFill = (_b.sent()).BsHouseAddFill;
                    return [2 /*return*/, BsHouseAddFill];
                case 1723: return [4 /*yield*/, import("react-icons/bs")];
                case 1724:
                    BsHouseAdd = (_b.sent()).BsHouseAdd;
                    return [2 /*return*/, BsHouseAdd];
                case 1725: return [4 /*yield*/, import("react-icons/bs")];
                case 1726:
                    BsHouseCheckFill = (_b.sent()).BsHouseCheckFill;
                    return [2 /*return*/, BsHouseCheckFill];
                case 1727: return [4 /*yield*/, import("react-icons/bs")];
                case 1728:
                    BsHouseCheck = (_b.sent()).BsHouseCheck;
                    return [2 /*return*/, BsHouseCheck];
                case 1729: return [4 /*yield*/, import("react-icons/bs")];
                case 1730:
                    BsHouseDashFill = (_b.sent()).BsHouseDashFill;
                    return [2 /*return*/, BsHouseDashFill];
                case 1731: return [4 /*yield*/, import("react-icons/bs")];
                case 1732:
                    BsHouseDash = (_b.sent()).BsHouseDash;
                    return [2 /*return*/, BsHouseDash];
                case 1733: return [4 /*yield*/, import("react-icons/bs")];
                case 1734:
                    BsHouseDoorFill = (_b.sent()).BsHouseDoorFill;
                    return [2 /*return*/, BsHouseDoorFill];
                case 1735: return [4 /*yield*/, import("react-icons/bs")];
                case 1736:
                    BsHouseDoor = (_b.sent()).BsHouseDoor;
                    return [2 /*return*/, BsHouseDoor];
                case 1737: return [4 /*yield*/, import("react-icons/bs")];
                case 1738:
                    BsHouseDownFill = (_b.sent()).BsHouseDownFill;
                    return [2 /*return*/, BsHouseDownFill];
                case 1739: return [4 /*yield*/, import("react-icons/bs")];
                case 1740:
                    BsHouseDown = (_b.sent()).BsHouseDown;
                    return [2 /*return*/, BsHouseDown];
                case 1741: return [4 /*yield*/, import("react-icons/bs")];
                case 1742:
                    BsHouseExclamationFill = (_b.sent()).BsHouseExclamationFill;
                    return [2 /*return*/, BsHouseExclamationFill];
                case 1743: return [4 /*yield*/, import("react-icons/bs")];
                case 1744:
                    BsHouseExclamation = (_b.sent()).BsHouseExclamation;
                    return [2 /*return*/, BsHouseExclamation];
                case 1745: return [4 /*yield*/, import("react-icons/bs")];
                case 1746:
                    BsHouseFill = (_b.sent()).BsHouseFill;
                    return [2 /*return*/, BsHouseFill];
                case 1747: return [4 /*yield*/, import("react-icons/bs")];
                case 1748:
                    BsHouseGearFill = (_b.sent()).BsHouseGearFill;
                    return [2 /*return*/, BsHouseGearFill];
                case 1749: return [4 /*yield*/, import("react-icons/bs")];
                case 1750:
                    BsHouseGear = (_b.sent()).BsHouseGear;
                    return [2 /*return*/, BsHouseGear];
                case 1751: return [4 /*yield*/, import("react-icons/bs")];
                case 1752:
                    BsHouseHeartFill = (_b.sent()).BsHouseHeartFill;
                    return [2 /*return*/, BsHouseHeartFill];
                case 1753: return [4 /*yield*/, import("react-icons/bs")];
                case 1754:
                    BsHouseHeart = (_b.sent()).BsHouseHeart;
                    return [2 /*return*/, BsHouseHeart];
                case 1755: return [4 /*yield*/, import("react-icons/bs")];
                case 1756:
                    BsHouseLockFill = (_b.sent()).BsHouseLockFill;
                    return [2 /*return*/, BsHouseLockFill];
                case 1757: return [4 /*yield*/, import("react-icons/bs")];
                case 1758:
                    BsHouseLock = (_b.sent()).BsHouseLock;
                    return [2 /*return*/, BsHouseLock];
                case 1759: return [4 /*yield*/, import("react-icons/bs")];
                case 1760:
                    BsHouseSlashFill = (_b.sent()).BsHouseSlashFill;
                    return [2 /*return*/, BsHouseSlashFill];
                case 1761: return [4 /*yield*/, import("react-icons/bs")];
                case 1762:
                    BsHouseSlash = (_b.sent()).BsHouseSlash;
                    return [2 /*return*/, BsHouseSlash];
                case 1763: return [4 /*yield*/, import("react-icons/bs")];
                case 1764:
                    BsHouseUpFill = (_b.sent()).BsHouseUpFill;
                    return [2 /*return*/, BsHouseUpFill];
                case 1765: return [4 /*yield*/, import("react-icons/bs")];
                case 1766:
                    BsHouseUp = (_b.sent()).BsHouseUp;
                    return [2 /*return*/, BsHouseUp];
                case 1767: return [4 /*yield*/, import("react-icons/bs")];
                case 1768:
                    BsHouseXFill = (_b.sent()).BsHouseXFill;
                    return [2 /*return*/, BsHouseXFill];
                case 1769: return [4 /*yield*/, import("react-icons/bs")];
                case 1770:
                    BsHouseX = (_b.sent()).BsHouseX;
                    return [2 /*return*/, BsHouseX];
                case 1771: return [4 /*yield*/, import("react-icons/bs")];
                case 1772:
                    BsHouse = (_b.sent()).BsHouse;
                    return [2 /*return*/, BsHouse];
                case 1773: return [4 /*yield*/, import("react-icons/bs")];
                case 1774:
                    BsHousesFill = (_b.sent()).BsHousesFill;
                    return [2 /*return*/, BsHousesFill];
                case 1775: return [4 /*yield*/, import("react-icons/bs")];
                case 1776:
                    BsHouses = (_b.sent()).BsHouses;
                    return [2 /*return*/, BsHouses];
                case 1777: return [4 /*yield*/, import("react-icons/bs")];
                case 1778:
                    BsHr = (_b.sent()).BsHr;
                    return [2 /*return*/, BsHr];
                case 1779: return [4 /*yield*/, import("react-icons/bs")];
                case 1780:
                    BsHurricane = (_b.sent()).BsHurricane;
                    return [2 /*return*/, BsHurricane];
                case 1781: return [4 /*yield*/, import("react-icons/bs")];
                case 1782:
                    BsHypnotize = (_b.sent()).BsHypnotize;
                    return [2 /*return*/, BsHypnotize];
                case 1783: return [4 /*yield*/, import("react-icons/bs")];
                case 1784:
                    BsImageAlt = (_b.sent()).BsImageAlt;
                    return [2 /*return*/, BsImageAlt];
                case 1785: return [4 /*yield*/, import("react-icons/bs")];
                case 1786:
                    BsImageFill = (_b.sent()).BsImageFill;
                    return [2 /*return*/, BsImageFill];
                case 1787: return [4 /*yield*/, import("react-icons/bs")];
                case 1788:
                    BsImage = (_b.sent()).BsImage;
                    return [2 /*return*/, BsImage];
                case 1789: return [4 /*yield*/, import("react-icons/bs")];
                case 1790:
                    BsImages = (_b.sent()).BsImages;
                    return [2 /*return*/, BsImages];
                case 1791: return [4 /*yield*/, import("react-icons/bs")];
                case 1792:
                    BsInboxFill = (_b.sent()).BsInboxFill;
                    return [2 /*return*/, BsInboxFill];
                case 1793: return [4 /*yield*/, import("react-icons/bs")];
                case 1794:
                    BsInbox = (_b.sent()).BsInbox;
                    return [2 /*return*/, BsInbox];
                case 1795: return [4 /*yield*/, import("react-icons/bs")];
                case 1796:
                    BsInboxesFill = (_b.sent()).BsInboxesFill;
                    return [2 /*return*/, BsInboxesFill];
                case 1797: return [4 /*yield*/, import("react-icons/bs")];
                case 1798:
                    BsInboxes = (_b.sent()).BsInboxes;
                    return [2 /*return*/, BsInboxes];
                case 1799: return [4 /*yield*/, import("react-icons/bs")];
                case 1800:
                    BsIncognito = (_b.sent()).BsIncognito;
                    return [2 /*return*/, BsIncognito];
                case 1801: return [4 /*yield*/, import("react-icons/bs")];
                case 1802:
                    BsIndent = (_b.sent()).BsIndent;
                    return [2 /*return*/, BsIndent];
                case 1803: return [4 /*yield*/, import("react-icons/bs")];
                case 1804:
                    BsInfinity = (_b.sent()).BsInfinity;
                    return [2 /*return*/, BsInfinity];
                case 1805: return [4 /*yield*/, import("react-icons/bs")];
                case 1806:
                    BsInfoCircleFill = (_b.sent()).BsInfoCircleFill;
                    return [2 /*return*/, BsInfoCircleFill];
                case 1807: return [4 /*yield*/, import("react-icons/bs")];
                case 1808:
                    BsInfoCircle = (_b.sent()).BsInfoCircle;
                    return [2 /*return*/, BsInfoCircle];
                case 1809: return [4 /*yield*/, import("react-icons/bs")];
                case 1810:
                    BsInfoLg = (_b.sent()).BsInfoLg;
                    return [2 /*return*/, BsInfoLg];
                case 1811: return [4 /*yield*/, import("react-icons/bs")];
                case 1812:
                    BsInfoSquareFill = (_b.sent()).BsInfoSquareFill;
                    return [2 /*return*/, BsInfoSquareFill];
                case 1813: return [4 /*yield*/, import("react-icons/bs")];
                case 1814:
                    BsInfoSquare = (_b.sent()).BsInfoSquare;
                    return [2 /*return*/, BsInfoSquare];
                case 1815: return [4 /*yield*/, import("react-icons/bs")];
                case 1816:
                    BsInfo = (_b.sent()).BsInfo;
                    return [2 /*return*/, BsInfo];
                case 1817: return [4 /*yield*/, import("react-icons/bs")];
                case 1818:
                    BsInputCursorText = (_b.sent()).BsInputCursorText;
                    return [2 /*return*/, BsInputCursorText];
                case 1819: return [4 /*yield*/, import("react-icons/bs")];
                case 1820:
                    BsInputCursor = (_b.sent()).BsInputCursor;
                    return [2 /*return*/, BsInputCursor];
                case 1821: return [4 /*yield*/, import("react-icons/bs")];
                case 1822:
                    BsInstagram = (_b.sent()).BsInstagram;
                    return [2 /*return*/, BsInstagram];
                case 1823: return [4 /*yield*/, import("react-icons/bs")];
                case 1824:
                    BsIntersect = (_b.sent()).BsIntersect;
                    return [2 /*return*/, BsIntersect];
                case 1825: return [4 /*yield*/, import("react-icons/bs")];
                case 1826:
                    BsJournalAlbum = (_b.sent()).BsJournalAlbum;
                    return [2 /*return*/, BsJournalAlbum];
                case 1827: return [4 /*yield*/, import("react-icons/bs")];
                case 1828:
                    BsJournalArrowDown = (_b.sent()).BsJournalArrowDown;
                    return [2 /*return*/, BsJournalArrowDown];
                case 1829: return [4 /*yield*/, import("react-icons/bs")];
                case 1830:
                    BsJournalArrowUp = (_b.sent()).BsJournalArrowUp;
                    return [2 /*return*/, BsJournalArrowUp];
                case 1831: return [4 /*yield*/, import("react-icons/bs")];
                case 1832:
                    BsJournalBookmarkFill = (_b.sent()).BsJournalBookmarkFill;
                    return [2 /*return*/, BsJournalBookmarkFill];
                case 1833: return [4 /*yield*/, import("react-icons/bs")];
                case 1834:
                    BsJournalBookmark = (_b.sent()).BsJournalBookmark;
                    return [2 /*return*/, BsJournalBookmark];
                case 1835: return [4 /*yield*/, import("react-icons/bs")];
                case 1836:
                    BsJournalCheck = (_b.sent()).BsJournalCheck;
                    return [2 /*return*/, BsJournalCheck];
                case 1837: return [4 /*yield*/, import("react-icons/bs")];
                case 1838:
                    BsJournalCode = (_b.sent()).BsJournalCode;
                    return [2 /*return*/, BsJournalCode];
                case 1839: return [4 /*yield*/, import("react-icons/bs")];
                case 1840:
                    BsJournalMedical = (_b.sent()).BsJournalMedical;
                    return [2 /*return*/, BsJournalMedical];
                case 1841: return [4 /*yield*/, import("react-icons/bs")];
                case 1842:
                    BsJournalMinus = (_b.sent()).BsJournalMinus;
                    return [2 /*return*/, BsJournalMinus];
                case 1843: return [4 /*yield*/, import("react-icons/bs")];
                case 1844:
                    BsJournalPlus = (_b.sent()).BsJournalPlus;
                    return [2 /*return*/, BsJournalPlus];
                case 1845: return [4 /*yield*/, import("react-icons/bs")];
                case 1846:
                    BsJournalRichtext = (_b.sent()).BsJournalRichtext;
                    return [2 /*return*/, BsJournalRichtext];
                case 1847: return [4 /*yield*/, import("react-icons/bs")];
                case 1848:
                    BsJournalText = (_b.sent()).BsJournalText;
                    return [2 /*return*/, BsJournalText];
                case 1849: return [4 /*yield*/, import("react-icons/bs")];
                case 1850:
                    BsJournalX = (_b.sent()).BsJournalX;
                    return [2 /*return*/, BsJournalX];
                case 1851: return [4 /*yield*/, import("react-icons/bs")];
                case 1852:
                    BsJournal = (_b.sent()).BsJournal;
                    return [2 /*return*/, BsJournal];
                case 1853: return [4 /*yield*/, import("react-icons/bs")];
                case 1854:
                    BsJournals = (_b.sent()).BsJournals;
                    return [2 /*return*/, BsJournals];
                case 1855: return [4 /*yield*/, import("react-icons/bs")];
                case 1856:
                    BsJoystick = (_b.sent()).BsJoystick;
                    return [2 /*return*/, BsJoystick];
                case 1857: return [4 /*yield*/, import("react-icons/bs")];
                case 1858:
                    BsJustifyLeft = (_b.sent()).BsJustifyLeft;
                    return [2 /*return*/, BsJustifyLeft];
                case 1859: return [4 /*yield*/, import("react-icons/bs")];
                case 1860:
                    BsJustifyRight = (_b.sent()).BsJustifyRight;
                    return [2 /*return*/, BsJustifyRight];
                case 1861: return [4 /*yield*/, import("react-icons/bs")];
                case 1862:
                    BsJustify = (_b.sent()).BsJustify;
                    return [2 /*return*/, BsJustify];
                case 1863: return [4 /*yield*/, import("react-icons/bs")];
                case 1864:
                    BsKanbanFill = (_b.sent()).BsKanbanFill;
                    return [2 /*return*/, BsKanbanFill];
                case 1865: return [4 /*yield*/, import("react-icons/bs")];
                case 1866:
                    BsKanban = (_b.sent()).BsKanban;
                    return [2 /*return*/, BsKanban];
                case 1867: return [4 /*yield*/, import("react-icons/bs")];
                case 1868:
                    BsKeyFill = (_b.sent()).BsKeyFill;
                    return [2 /*return*/, BsKeyFill];
                case 1869: return [4 /*yield*/, import("react-icons/bs")];
                case 1870:
                    BsKey = (_b.sent()).BsKey;
                    return [2 /*return*/, BsKey];
                case 1871: return [4 /*yield*/, import("react-icons/bs")];
                case 1872:
                    BsKeyboardFill = (_b.sent()).BsKeyboardFill;
                    return [2 /*return*/, BsKeyboardFill];
                case 1873: return [4 /*yield*/, import("react-icons/bs")];
                case 1874:
                    BsKeyboard = (_b.sent()).BsKeyboard;
                    return [2 /*return*/, BsKeyboard];
                case 1875: return [4 /*yield*/, import("react-icons/bs")];
                case 1876:
                    BsLadder = (_b.sent()).BsLadder;
                    return [2 /*return*/, BsLadder];
                case 1877: return [4 /*yield*/, import("react-icons/bs")];
                case 1878:
                    BsLampFill = (_b.sent()).BsLampFill;
                    return [2 /*return*/, BsLampFill];
                case 1879: return [4 /*yield*/, import("react-icons/bs")];
                case 1880:
                    BsLamp = (_b.sent()).BsLamp;
                    return [2 /*return*/, BsLamp];
                case 1881: return [4 /*yield*/, import("react-icons/bs")];
                case 1882:
                    BsLaptopFill = (_b.sent()).BsLaptopFill;
                    return [2 /*return*/, BsLaptopFill];
                case 1883: return [4 /*yield*/, import("react-icons/bs")];
                case 1884:
                    BsLaptop = (_b.sent()).BsLaptop;
                    return [2 /*return*/, BsLaptop];
                case 1885: return [4 /*yield*/, import("react-icons/bs")];
                case 1886:
                    BsLayerBackward = (_b.sent()).BsLayerBackward;
                    return [2 /*return*/, BsLayerBackward];
                case 1887: return [4 /*yield*/, import("react-icons/bs")];
                case 1888:
                    BsLayerForward = (_b.sent()).BsLayerForward;
                    return [2 /*return*/, BsLayerForward];
                case 1889: return [4 /*yield*/, import("react-icons/bs")];
                case 1890:
                    BsLayersFill = (_b.sent()).BsLayersFill;
                    return [2 /*return*/, BsLayersFill];
                case 1891: return [4 /*yield*/, import("react-icons/bs")];
                case 1892:
                    BsLayersHalf = (_b.sent()).BsLayersHalf;
                    return [2 /*return*/, BsLayersHalf];
                case 1893: return [4 /*yield*/, import("react-icons/bs")];
                case 1894:
                    BsLayers = (_b.sent()).BsLayers;
                    return [2 /*return*/, BsLayers];
                case 1895: return [4 /*yield*/, import("react-icons/bs")];
                case 1896:
                    BsLayoutSidebarInsetReverse = (_b.sent()).BsLayoutSidebarInsetReverse;
                    return [2 /*return*/, BsLayoutSidebarInsetReverse];
                case 1897: return [4 /*yield*/, import("react-icons/bs")];
                case 1898:
                    BsLayoutSidebarInset = (_b.sent()).BsLayoutSidebarInset;
                    return [2 /*return*/, BsLayoutSidebarInset];
                case 1899: return [4 /*yield*/, import("react-icons/bs")];
                case 1900:
                    BsLayoutSidebarReverse = (_b.sent()).BsLayoutSidebarReverse;
                    return [2 /*return*/, BsLayoutSidebarReverse];
                case 1901: return [4 /*yield*/, import("react-icons/bs")];
                case 1902:
                    BsLayoutSidebar = (_b.sent()).BsLayoutSidebar;
                    return [2 /*return*/, BsLayoutSidebar];
                case 1903: return [4 /*yield*/, import("react-icons/bs")];
                case 1904:
                    BsLayoutSplit = (_b.sent()).BsLayoutSplit;
                    return [2 /*return*/, BsLayoutSplit];
                case 1905: return [4 /*yield*/, import("react-icons/bs")];
                case 1906:
                    BsLayoutTextSidebarReverse = (_b.sent()).BsLayoutTextSidebarReverse;
                    return [2 /*return*/, BsLayoutTextSidebarReverse];
                case 1907: return [4 /*yield*/, import("react-icons/bs")];
                case 1908:
                    BsLayoutTextSidebar = (_b.sent()).BsLayoutTextSidebar;
                    return [2 /*return*/, BsLayoutTextSidebar];
                case 1909: return [4 /*yield*/, import("react-icons/bs")];
                case 1910:
                    BsLayoutTextWindowReverse = (_b.sent()).BsLayoutTextWindowReverse;
                    return [2 /*return*/, BsLayoutTextWindowReverse];
                case 1911: return [4 /*yield*/, import("react-icons/bs")];
                case 1912:
                    BsLayoutTextWindow = (_b.sent()).BsLayoutTextWindow;
                    return [2 /*return*/, BsLayoutTextWindow];
                case 1913: return [4 /*yield*/, import("react-icons/bs")];
                case 1914:
                    BsLayoutThreeColumns = (_b.sent()).BsLayoutThreeColumns;
                    return [2 /*return*/, BsLayoutThreeColumns];
                case 1915: return [4 /*yield*/, import("react-icons/bs")];
                case 1916:
                    BsLayoutWtf = (_b.sent()).BsLayoutWtf;
                    return [2 /*return*/, BsLayoutWtf];
                case 1917: return [4 /*yield*/, import("react-icons/bs")];
                case 1918:
                    BsLifePreserver = (_b.sent()).BsLifePreserver;
                    return [2 /*return*/, BsLifePreserver];
                case 1919: return [4 /*yield*/, import("react-icons/bs")];
                case 1920:
                    BsLightbulbFill = (_b.sent()).BsLightbulbFill;
                    return [2 /*return*/, BsLightbulbFill];
                case 1921: return [4 /*yield*/, import("react-icons/bs")];
                case 1922:
                    BsLightbulbOffFill = (_b.sent()).BsLightbulbOffFill;
                    return [2 /*return*/, BsLightbulbOffFill];
                case 1923: return [4 /*yield*/, import("react-icons/bs")];
                case 1924:
                    BsLightbulbOff = (_b.sent()).BsLightbulbOff;
                    return [2 /*return*/, BsLightbulbOff];
                case 1925: return [4 /*yield*/, import("react-icons/bs")];
                case 1926:
                    BsLightbulb = (_b.sent()).BsLightbulb;
                    return [2 /*return*/, BsLightbulb];
                case 1927: return [4 /*yield*/, import("react-icons/bs")];
                case 1928:
                    BsLightningChargeFill = (_b.sent()).BsLightningChargeFill;
                    return [2 /*return*/, BsLightningChargeFill];
                case 1929: return [4 /*yield*/, import("react-icons/bs")];
                case 1930:
                    BsLightningCharge = (_b.sent()).BsLightningCharge;
                    return [2 /*return*/, BsLightningCharge];
                case 1931: return [4 /*yield*/, import("react-icons/bs")];
                case 1932:
                    BsLightningFill = (_b.sent()).BsLightningFill;
                    return [2 /*return*/, BsLightningFill];
                case 1933: return [4 /*yield*/, import("react-icons/bs")];
                case 1934:
                    BsLightning = (_b.sent()).BsLightning;
                    return [2 /*return*/, BsLightning];
                case 1935: return [4 /*yield*/, import("react-icons/bs")];
                case 1936:
                    BsLine = (_b.sent()).BsLine;
                    return [2 /*return*/, BsLine];
                case 1937: return [4 /*yield*/, import("react-icons/bs")];
                case 1938:
                    BsLink45Deg = (_b.sent()).BsLink45Deg;
                    return [2 /*return*/, BsLink45Deg];
                case 1939: return [4 /*yield*/, import("react-icons/bs")];
                case 1940:
                    BsLink = (_b.sent()).BsLink;
                    return [2 /*return*/, BsLink];
                case 1941: return [4 /*yield*/, import("react-icons/bs")];
                case 1942:
                    BsLinkedin = (_b.sent()).BsLinkedin;
                    return [2 /*return*/, BsLinkedin];
                case 1943: return [4 /*yield*/, import("react-icons/bs")];
                case 1944:
                    BsListCheck = (_b.sent()).BsListCheck;
                    return [2 /*return*/, BsListCheck];
                case 1945: return [4 /*yield*/, import("react-icons/bs")];
                case 1946:
                    BsListColumnsReverse = (_b.sent()).BsListColumnsReverse;
                    return [2 /*return*/, BsListColumnsReverse];
                case 1947: return [4 /*yield*/, import("react-icons/bs")];
                case 1948:
                    BsListColumns = (_b.sent()).BsListColumns;
                    return [2 /*return*/, BsListColumns];
                case 1949: return [4 /*yield*/, import("react-icons/bs")];
                case 1950:
                    BsListNested = (_b.sent()).BsListNested;
                    return [2 /*return*/, BsListNested];
                case 1951: return [4 /*yield*/, import("react-icons/bs")];
                case 1952:
                    BsListOl = (_b.sent()).BsListOl;
                    return [2 /*return*/, BsListOl];
                case 1953: return [4 /*yield*/, import("react-icons/bs")];
                case 1954:
                    BsListStars = (_b.sent()).BsListStars;
                    return [2 /*return*/, BsListStars];
                case 1955: return [4 /*yield*/, import("react-icons/bs")];
                case 1956:
                    BsListTask = (_b.sent()).BsListTask;
                    return [2 /*return*/, BsListTask];
                case 1957: return [4 /*yield*/, import("react-icons/bs")];
                case 1958:
                    BsListUl = (_b.sent()).BsListUl;
                    return [2 /*return*/, BsListUl];
                case 1959: return [4 /*yield*/, import("react-icons/bs")];
                case 1960:
                    BsList = (_b.sent()).BsList;
                    return [2 /*return*/, BsList];
                case 1961: return [4 /*yield*/, import("react-icons/bs")];
                case 1962:
                    BsLockFill = (_b.sent()).BsLockFill;
                    return [2 /*return*/, BsLockFill];
                case 1963: return [4 /*yield*/, import("react-icons/bs")];
                case 1964:
                    BsLock = (_b.sent()).BsLock;
                    return [2 /*return*/, BsLock];
                case 1965: return [4 /*yield*/, import("react-icons/bs")];
                case 1966:
                    BsLuggageFill = (_b.sent()).BsLuggageFill;
                    return [2 /*return*/, BsLuggageFill];
                case 1967: return [4 /*yield*/, import("react-icons/bs")];
                case 1968:
                    BsLuggage = (_b.sent()).BsLuggage;
                    return [2 /*return*/, BsLuggage];
                case 1969: return [4 /*yield*/, import("react-icons/bs")];
                case 1970:
                    BsLungsFill = (_b.sent()).BsLungsFill;
                    return [2 /*return*/, BsLungsFill];
                case 1971: return [4 /*yield*/, import("react-icons/bs")];
                case 1972:
                    BsLungs = (_b.sent()).BsLungs;
                    return [2 /*return*/, BsLungs];
                case 1973: return [4 /*yield*/, import("react-icons/bs")];
                case 1974:
                    BsMagic = (_b.sent()).BsMagic;
                    return [2 /*return*/, BsMagic];
                case 1975: return [4 /*yield*/, import("react-icons/bs")];
                case 1976:
                    BsMagnetFill = (_b.sent()).BsMagnetFill;
                    return [2 /*return*/, BsMagnetFill];
                case 1977: return [4 /*yield*/, import("react-icons/bs")];
                case 1978:
                    BsMagnet = (_b.sent()).BsMagnet;
                    return [2 /*return*/, BsMagnet];
                case 1979: return [4 /*yield*/, import("react-icons/bs")];
                case 1980:
                    BsMailboxFlag = (_b.sent()).BsMailboxFlag;
                    return [2 /*return*/, BsMailboxFlag];
                case 1981: return [4 /*yield*/, import("react-icons/bs")];
                case 1982:
                    BsMailbox = (_b.sent()).BsMailbox;
                    return [2 /*return*/, BsMailbox];
                case 1983: return [4 /*yield*/, import("react-icons/bs")];
                case 1984:
                    BsMailbox2Flag = (_b.sent()).BsMailbox2Flag;
                    return [2 /*return*/, BsMailbox2Flag];
                case 1985: return [4 /*yield*/, import("react-icons/bs")];
                case 1986:
                    BsMailbox2 = (_b.sent()).BsMailbox2;
                    return [2 /*return*/, BsMailbox2];
                case 1987: return [4 /*yield*/, import("react-icons/bs")];
                case 1988:
                    BsMapFill = (_b.sent()).BsMapFill;
                    return [2 /*return*/, BsMapFill];
                case 1989: return [4 /*yield*/, import("react-icons/bs")];
                case 1990:
                    BsMap = (_b.sent()).BsMap;
                    return [2 /*return*/, BsMap];
                case 1991: return [4 /*yield*/, import("react-icons/bs")];
                case 1992:
                    BsMarkdownFill = (_b.sent()).BsMarkdownFill;
                    return [2 /*return*/, BsMarkdownFill];
                case 1993: return [4 /*yield*/, import("react-icons/bs")];
                case 1994:
                    BsMarkdown = (_b.sent()).BsMarkdown;
                    return [2 /*return*/, BsMarkdown];
                case 1995: return [4 /*yield*/, import("react-icons/bs")];
                case 1996:
                    BsMarkerTip = (_b.sent()).BsMarkerTip;
                    return [2 /*return*/, BsMarkerTip];
                case 1997: return [4 /*yield*/, import("react-icons/bs")];
                case 1998:
                    BsMask = (_b.sent()).BsMask;
                    return [2 /*return*/, BsMask];
                case 1999: return [4 /*yield*/, import("react-icons/bs")];
                case 2000:
                    BsMastodon = (_b.sent()).BsMastodon;
                    return [2 /*return*/, BsMastodon];
                case 2001: return [2 /*return*/];
            }
        });
    });
}
