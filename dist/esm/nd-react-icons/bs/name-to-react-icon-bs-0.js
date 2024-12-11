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
export function nameToReactIcon_bs_0(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, BsFill0CircleFill, BsFill0SquareFill, BsFill1CircleFill, BsFill1SquareFill, BsFill2CircleFill, BsFill2SquareFill, BsFill3CircleFill, BsFill3SquareFill, BsFill4CircleFill, BsFill4SquareFill, BsFill5CircleFill, BsFill5SquareFill, BsFill6CircleFill, BsFill6SquareFill, BsFill7CircleFill, BsFill7SquareFill, BsFill8CircleFill, BsFill8SquareFill, BsFill9CircleFill, BsFill9SquareFill, BsFillAirplaneEnginesFill, BsFillAirplaneFill, BsFillAlarmFill, BsFillArchiveFill, BsFillArrowDownCircleFill, BsFillArrowDownLeftCircleFill, BsFillArrowDownLeftSquareFill, BsFillArrowDownRightCircleFill, BsFillArrowDownRightSquareFill, BsFillArrowDownSquareFill, BsFillArrowLeftCircleFill, BsFillArrowLeftSquareFill, BsFillArrowRightCircleFill, BsFillArrowRightSquareFill, BsFillArrowThroughHeartFill, BsFillArrowUpCircleFill, BsFillArrowUpLeftCircleFill, BsFillArrowUpLeftSquareFill, BsFillArrowUpRightCircleFill, BsFillArrowUpRightSquareFill, BsFillArrowUpSquareFill, BsFillAspectRatioFill, BsFillAwardFill, BsFillBackpackFill, BsFillBackpack2Fill, BsFillBackpack3Fill, BsFillBackpack4Fill, BsFillBackspaceFill, BsFillBackspaceReverseFill, BsFillBadge3dFill, BsFillBadge4kFill, BsFillBadge8kFill, BsFillBadgeAdFill, BsFillBadgeArFill, BsFillBadgeCcFill, BsFillBadgeHdFill, BsFillBadgeSdFill, BsFillBadgeTmFill, BsFillBadgeVoFill, BsFillBadgeVrFill, BsFillBadgeWcFill, BsFillBagCheckFill, BsFillBagDashFill, BsFillBagFill, BsFillBagHeartFill, BsFillBagPlusFill, BsFillBagXFill, BsFillBalloonFill, BsFillBalloonHeartFill, BsFillBanFill, BsFillBandaidFill, BsFillBarChartFill, BsFillBarChartLineFill, BsFillBasketFill, BsFillBasket2Fill, BsFillBasket3Fill, BsFillBellFill, BsFillBellSlashFill, BsFillBinocularsFill, BsFillBookFill, BsFillBookmarkCheckFill, BsFillBookmarkDashFill, BsFillBookmarkFill, BsFillBookmarkHeartFill, BsFillBookmarkPlusFill, BsFillBookmarkStarFill, BsFillBookmarkXFill, BsFillBookmarksFill, BsFillBoomboxFill, BsFillBootstrapFill, BsFillBoxFill, BsFillBoxSeamFill, BsFillBox2Fill, BsFillBox2HeartFill, BsFillBriefcaseFill, BsFillBrightnessAltHighFill, BsFillBrightnessAltLowFill, BsFillBrightnessHighFill, BsFillBrightnessLowFill, BsFillBrushFill, BsFillBucketFill, BsFillBugFill, BsFillBuildingFill, BsFillBuildingsFill, BsFillBusFrontFill, BsFillCCircleFill, BsFillCSquareFill, BsFillCakeFill, BsFillCake2Fill, BsFillCalculatorFill, BsFillCalendarCheckFill, BsFillCalendarDateFill, BsFillCalendarDayFill, BsFillCalendarEventFill, BsFillCalendarFill, BsFillCalendarHeartFill, BsFillCalendarMinusFill, BsFillCalendarMonthFill, BsFillCalendarPlusFill, BsFillCalendarRangeFill, BsFillCalendarWeekFill, BsFillCalendarXFill, BsFillCalendar2CheckFill, BsFillCalendar2DateFill, BsFillCalendar2DayFill, BsFillCalendar2EventFill, BsFillCalendar2Fill, BsFillCalendar2HeartFill, BsFillCalendar2MinusFill, BsFillCalendar2MonthFill, BsFillCalendar2PlusFill, BsFillCalendar2RangeFill, BsFillCalendar2WeekFill, BsFillCalendar2XFill, BsFillCalendar3EventFill, BsFillCalendar3Fill, BsFillCalendar3RangeFill, BsFillCalendar3WeekFill, BsFillCameraFill, BsFillCameraReelsFill, BsFillCameraVideoFill, BsFillCameraVideoOffFill, BsFillCapslockFill, BsFillCarFrontFill, BsFillCaretDownFill, BsFillCaretDownSquareFill, BsFillCaretLeftFill, BsFillCaretLeftSquareFill, BsFillCaretRightFill, BsFillCaretRightSquareFill, BsFillCaretUpFill, BsFillCaretUpSquareFill, BsFillCartCheckFill, BsFillCartDashFill, BsFillCartFill, BsFillCartPlusFill, BsFillCartXFill, BsFillCassetteFill, BsFillCcCircleFill, BsFillCcSquareFill, BsFillChatDotsFill, BsFillChatFill, BsFillChatHeartFill, BsFillChatLeftDotsFill, BsFillChatLeftFill, BsFillChatLeftHeartFill, BsFillChatLeftQuoteFill, BsFillChatLeftTextFill, BsFillChatQuoteFill, BsFillChatRightDotsFill, BsFillChatRightFill, BsFillChatRightHeartFill, BsFillChatRightQuoteFill, BsFillChatRightTextFill, BsFillChatSquareDotsFill, BsFillChatSquareFill, BsFillChatSquareHeartFill, BsFillChatSquareQuoteFill, BsFillChatSquareTextFill, BsFillChatTextFill, BsFillCheckCircleFill, BsFillCheckSquareFill, BsFillCircleFill, BsFillClipboardCheckFill, BsFillClipboardDataFill, BsFillClipboardFill, BsFillClipboardHeartFill, BsFillClipboardMinusFill, BsFillClipboardPlusFill, BsFillClipboardXFill, BsFillClipboard2CheckFill, BsFillClipboard2DataFill, BsFillClipboard2Fill, BsFillClipboard2HeartFill, BsFillClipboard2MinusFill, BsFillClipboard2PlusFill, BsFillClipboard2PulseFill, BsFillClipboard2XFill, BsFillClockFill, BsFillCloudArrowDownFill, BsFillCloudArrowUpFill, BsFillCloudCheckFill, BsFillCloudDownloadFill, BsFillCloudDrizzleFill, BsFillCloudFill, BsFillCloudFogFill, BsFillCloudFog2Fill, BsFillCloudHailFill, BsFillCloudHazeFill, BsFillCloudHaze2Fill, BsFillCloudLightningFill, BsFillCloudLightningRainFill, BsFillCloudMinusFill, BsFillCloudMoonFill, BsFillCloudPlusFill, BsFillCloudRainFill, BsFillCloudRainHeavyFill, BsFillCloudSlashFill, BsFillCloudSleetFill, BsFillCloudSnowFill, BsFillCloudSunFill, BsFillCloudUploadFill, BsFillCloudsFill, BsFillCloudyFill, BsFillCollectionFill, BsFillCollectionPlayFill, BsFillCompassFill, BsFillCpuFill, BsFillCreditCard2BackFill, BsFillCreditCard2FrontFill, BsFillCreditCardFill, BsFillCupFill, BsFillCupHotFill, BsFillCursorFill, BsFillDashCircleFill, BsFillDashSquareFill, BsFillDatabaseFill, BsFillDeviceHddFill, BsFillDeviceSsdFill, BsFillDiagram2Fill, BsFillDiagram3Fill, BsFillDiamondFill, BsFillDice1Fill, BsFillDice2Fill, BsFillDice3Fill, BsFillDice4Fill, BsFillDice5Fill, BsFillDice6Fill, BsFillDiscFill, BsFillDisplayFill, BsFillDisplayportFill, BsFillDoorClosedFill, BsFillDoorOpenFill, BsFillDpadFill, BsFillDropletFill, BsFillDuffleFill, BsFillEarFill, BsFillEaselFill, BsFillEasel2Fill, BsFillEasel3Fill, BsFillEggFill, BsFillEjectFill, BsFillEmojiAngryFill, BsFillEmojiAstonishedFill, BsFillEmojiDizzyFill, BsFillEmojiExpressionlessFill, BsFillEmojiFrownFill, BsFillEmojiGrimaceFill, BsFillEmojiGrinFill, BsFillEmojiHeartEyesFill, BsFillEmojiKissFill, BsFillEmojiLaughingFill, BsFillEmojiNeutralFill, BsFillEmojiSmileFill, BsFillEmojiSmileUpsideDownFill, BsFillEmojiSunglassesFill, BsFillEmojiSurpriseFill, BsFillEmojiTearFill, BsFillEmojiWinkFill, BsFillEnvelopeArrowDownFill, BsFillEnvelopeArrowUpFill, BsFillEnvelopeAtFill, BsFillEnvelopeCheckFill, BsFillEnvelopeDashFill, BsFillEnvelopeExclamationFill, BsFillEnvelopeFill, BsFillEnvelopeHeartFill, BsFillEnvelopeOpenFill, BsFillEnvelopeOpenHeartFill, BsFillEnvelopePaperFill, BsFillEnvelopePaperHeartFill, BsFillEnvelopePlusFill, BsFillEnvelopeSlashFill, BsFillEnvelopeXFill, BsFillEraserFill, BsFillEvFrontFill, BsFillEvStationFill, BsFillExclamationCircleFill, BsFillExclamationDiamondFill, BsFillExclamationOctagonFill, BsFillExclamationSquareFill, BsFillExclamationTriangleFill, BsFillExplicitFill, BsFillEyeFill, BsFillEyeSlashFill, BsFillFastForwardBtnFill, BsFillFastForwardCircleFill, BsFillFastForwardFill, BsFillFileArrowDownFill, BsFillFileArrowUpFill, BsFillFileBarGraphFill, BsFillFileBinaryFill, BsFillFileBreakFill, BsFillFileCheckFill, BsFillFileCodeFill, BsFillFileDiffFill, BsFillFileEarmarkArrowDownFill, BsFillFileEarmarkArrowUpFill, BsFillFileEarmarkBarGraphFill, BsFillFileEarmarkBinaryFill, BsFillFileEarmarkBreakFill, BsFillFileEarmarkCheckFill, BsFillFileEarmarkCodeFill, BsFillFileEarmarkDiffFill, BsFillFileEarmarkEaselFill, BsFillFileEarmarkExcelFill, BsFillFileEarmarkFill, BsFillFileEarmarkFontFill, BsFillFileEarmarkImageFill, BsFillFileEarmarkLockFill, BsFillFileEarmarkLock2Fill, BsFillFileEarmarkMedicalFill, BsFillFileEarmarkMinusFill, BsFillFileEarmarkMusicFill, BsFillFileEarmarkPdfFill, BsFillFileEarmarkPersonFill, BsFillFileEarmarkPlayFill, BsFillFileEarmarkPlusFill, BsFillFileEarmarkPostFill, BsFillFileEarmarkPptFill, BsFillFileEarmarkRichtextFill, BsFillFileEarmarkRuledFill, BsFillFileEarmarkSlidesFill, BsFillFileEarmarkSpreadsheetFill, BsFillFileEarmarkTextFill, BsFillFileEarmarkWordFill, BsFillFileEarmarkXFill, BsFillFileEarmarkZipFill, BsFillFileEaselFill, BsFillFileExcelFill, BsFillFileFill, BsFillFileFontFill, BsFillFileImageFill, BsFillFileLockFill, BsFillFileLock2Fill, BsFillFileMedicalFill, BsFillFileMinusFill, BsFillFileMusicFill, BsFillFilePdfFill, BsFillFilePersonFill, BsFillFilePlayFill, BsFillFilePlusFill, BsFillFilePostFill, BsFillFilePptFill, BsFillFileRichtextFill, BsFillFileRuledFill, BsFillFileSlidesFill, BsFillFileSpreadsheetFill, BsFillFileTextFill, BsFillFileWordFill, BsFillFileXFill, BsFillFileZipFill, BsFillFilterCircleFill, BsFillFilterSquareFill, BsFillFlagFill, BsFillFloppyFill, BsFillFloppy2Fill, BsFillFolderFill, BsFillFolderSymlinkFill, BsFillForwardFill, BsFillFuelPumpDieselFill, BsFillFuelPumpFill, BsFillFunnelFill, BsFillGearFill, BsFillGeoAltFill, BsFillGeoFill, BsFillGiftFill, BsFillGrid1X2Fill, BsFillGrid3X2GapFill, BsFillGrid3X3GapFill, BsFillGridFill, BsFillHCircleFill, BsFillHSquareFill, BsFillHandIndexFill, BsFillHandIndexThumbFill, BsFillHandThumbsDownFill, BsFillHandThumbsUpFill, BsFillHandbagFill, BsFillHddFill, BsFillHddNetworkFill, BsFillHddRackFill, BsFillHddStackFill, BsFillHdmiFill, BsFillHeartFill, BsFillHeartPulseFill, BsFillHeartbreakFill, BsFillHeptagonFill, BsFillHexagonFill, BsFillHospitalFill, BsFillHouseAddFill, BsFillHouseCheckFill, BsFillHouseDashFill, BsFillHouseDoorFill, BsFillHouseDownFill, BsFillHouseExclamationFill, BsFillHouseFill, BsFillHouseGearFill, BsFillHouseHeartFill, BsFillHouseLockFill, BsFillHouseSlashFill, BsFillHouseUpFill, BsFillHouseXFill, BsFillHousesFill, BsFillImageFill, BsFillInboxFill, BsFillInboxesFill, BsFillInfoCircleFill, BsFillInfoSquareFill, BsFillJournalBookmarkFill, BsFillKanbanFill, BsFillKeyFill, BsFillKeyboardFill, BsFillLampFill, BsFillLaptopFill, BsFillLayersFill, BsFillLightbulbFill, BsFillLightbulbOffFill, BsFillLightningChargeFill, BsFillLightningFill, BsFillLockFill, BsFillLuggageFill, BsFillLungsFill, BsFillMagnetFill, BsFillMapFill, BsFillMarkdownFill, BsFillMegaphoneFill, BsFillMenuAppFill, BsFillMenuButtonFill, BsFillMenuButtonWideFill, BsFillMicFill, BsFillMicMuteFill, BsFillModemFill, BsFillMoonFill, BsFillMoonStarsFill, BsFillMortarboardFill, BsFillMotherboardFill, BsFillMouseFill, BsFillMouse2Fill, BsFillMouse3Fill, BsFillMusicPlayerFill, BsFillNodeMinusFill, BsFillNodePlusFill, BsFillNutFill, BsFillNvmeFill, BsFillOctagonFill, BsFillOpticalAudioFill, BsFillPCircleFill, BsFillPSquareFill, BsFillPaletteFill, BsFillPassFill, BsFillPassportFill, BsFillPatchCheckFill, BsFillPatchExclamationFill, BsFillPatchMinusFill, BsFillPatchPlusFill, BsFillPatchQuestionFill, BsFillPauseBtnFill, BsFillPauseCircleFill, BsFillPauseFill, BsFillPeaceFill, BsFillPenFill, BsFillPencilFill, BsFillPentagonFill, BsFillPeopleFill, BsFillPersonBadgeFill, BsFillPersonCheckFill, BsFillPersonDashFill, BsFillPersonFill, BsFillPersonLinesFill, BsFillPersonPlusFill, BsFillPersonVcardFill, BsFillPersonXFill, BsFillPhoneFill, BsFillPhoneLandscapeFill, BsFillPhoneVibrateFill, BsFillPieChartFill, BsFillPiggyBankFill, BsFillPinAngleFill, BsFillPinFill, BsFillPinMapFill, BsFillPipFill, BsFillPlayBtnFill, BsFillPlayCircleFill, BsFillPlayFill, BsFillPlugFill, BsFillPlusCircleFill, BsFillPlusSquareFill, BsFillPostageFill, BsFillPostageHeartFill, BsFillPostcardFill, BsFillPostcardHeartFill, BsFillPrinterFill, BsFillProjectorFill, BsFillPuzzleFill, BsFillQuestionCircleFill, BsFillQuestionDiamondFill, BsFillQuestionOctagonFill, BsFillQuestionSquareFill, BsFillRCircleFill, BsFillRSquareFill, BsFillRecordBtnFill, BsFillRecordCircleFill, BsFillRecordFill, BsFillRecord2Fill, BsFillReplyAllFill, BsFillReplyFill, BsFillRewindBtnFill, BsFillRewindCircleFill, BsFillRewindFill, BsFillRocketFill, BsFillRocketTakeoffFill, BsFillRouterFill, BsFillRssFill, BsFillSafeFill, BsFillSafe2Fill, BsFillSaveFill, BsFillSave2Fill, BsFillSdCardFill, BsFillSearchHeartFill, BsFillSendArrowDownFill, BsFillSendArrowUpFill, BsFillSendCheckFill, BsFillSendDashFill, BsFillSendExclamationFill, BsFillSendFill, BsFillSendPlusFill, BsFillSendSlashFill, BsFillSendXFill, BsFillShareFill, BsFillShieldFill, BsFillShieldLockFill, BsFillShieldSlashFill, BsFillShiftFill, BsFillSignDeadEndFill, BsFillSignDoNotEnterFill, BsFillSignIntersectionFill, BsFillSignIntersectionSideFill, BsFillSignIntersectionTFill, BsFillSignIntersectionYFill, BsFillSignMergeLeftFill, BsFillSignMergeRightFill, BsFillSignNoLeftTurnFill, BsFillSignNoParkingFill, BsFillSignNoRightTurnFill, BsFillSignRailroadFill, BsFillSignStopFill, BsFillSignStopLightsFill, BsFillSignTurnLeftFill, BsFillSignTurnRightFill, BsFillSignTurnSlightLeftFill, BsFillSignTurnSlightRightFill, BsFillSignYieldFill, BsFillSignpost2Fill, BsFillSignpostFill, BsFillSignpostSplitFill, BsFillSimFill, BsFillSimSlashFill, BsFillSkipBackwardBtnFill, BsFillSkipBackwardCircleFill, BsFillSkipBackwardFill, BsFillSkipEndBtnFill, BsFillSkipEndCircleFill, BsFillSkipEndFill, BsFillSkipForwardBtnFill, BsFillSkipForwardCircleFill, BsFillSkipForwardFill, BsFillSkipStartBtnFill, BsFillSkipStartCircleFill, BsFillSkipStartFill, BsFillSlashCircleFill, BsFillSlashSquareFill, BsFillSpeakerFill, BsFillSquareFill, BsFillStarFill, BsFillStickiesFill, BsFillStickyFill, BsFillStopBtnFill, BsFillStopCircleFill, BsFillStopFill, BsFillStoplightsFill, BsFillStopwatchFill, BsFillSuitClubFill, BsFillSuitDiamondFill, BsFillSuitHeartFill, BsFillSuitSpadeFill, BsFillSuitcaseFill, BsFillSuitcaseLgFill, BsFillSuitcase2Fill, BsFillSunFill, BsFillSunriseFill, BsFillSunsetFill, BsFillTabletFill, BsFillTabletLandscapeFill, BsFillTagFill, BsFillTagsFill, BsFillTaxiFrontFill, BsFillTelephoneFill, BsFillTelephoneForwardFill, BsFillTelephoneInboundFill, BsFillTelephoneMinusFill, BsFillTelephoneOutboundFill, BsFillTelephonePlusFill, BsFillTelephoneXFill, BsFillTerminalFill, BsFillThreadsFill, BsFillThunderboltFill, BsFillTicketDetailedFill, BsFillTicketFill, BsFillTicketPerforatedFill, BsFillTrainFreightFrontFill, BsFillTrainFrontFill, BsFillTrainLightrailFrontFill, BsFillTrashFill, BsFillTrash2Fill, BsFillTrash3Fill, BsFillTreeFill, BsFillTriangleFill, BsFillTrophyFill, BsFillTruckFrontFill, BsFillTvFill, BsFillUmbrellaFill, BsFillUnlockFill, BsFillUsbCFill, BsFillUsbDriveFill, BsFillUsbFill, BsFillUsbMicroFill, BsFillUsbMiniFill, BsFillUsbPlugFill, BsFillVinylFill, BsFillVolumeDownFill, BsFillVolumeMuteFill, BsFillVolumeOffFill, BsFillVolumeUpFill, BsFillWalletFill, BsFillWebcamFill, BsFillWrenchAdjustableCircleFill, BsFillXCircleFill, BsFillXDiamondFill, BsFillXOctagonFill, BsFillXSquareFill, BsReverseBackspaceReverse, BsReverseLayoutSidebarInsetReverse, BsReverseLayoutSidebarReverse, BsReverseLayoutTextSidebarReverse, BsReverseLayoutTextWindowReverse, BsReverseListColumnsReverse, Bs0CircleFill, Bs0Circle, Bs0SquareFill, Bs0Square, Bs1CircleFill, Bs1Circle, Bs1SquareFill, Bs1Square, Bs123, Bs2CircleFill, Bs2Circle, Bs2SquareFill, Bs2Square, Bs3CircleFill, Bs3Circle, Bs3SquareFill, Bs3Square, Bs4CircleFill, Bs4Circle, Bs4SquareFill, Bs4Square, Bs5CircleFill, Bs5Circle, Bs5SquareFill, Bs5Square, Bs6CircleFill, Bs6Circle, Bs6SquareFill, Bs6Square, Bs7CircleFill, Bs7Circle, Bs7SquareFill, Bs7Square, Bs8CircleFill, Bs8Circle, Bs8SquareFill, Bs8Square, Bs9CircleFill, Bs9Circle, Bs9SquareFill, Bs9Square, BsActivity, BsAirplaneEnginesFill, BsAirplaneEngines, BsAirplaneFill, BsAirplane, BsAlarmFill, BsAlarm, BsAlexa, BsAlignBottom, BsAlignCenter, BsAlignEnd, BsAlignMiddle, BsAlignStart, BsAlignTop, BsAlipay, BsAlphabetUppercase, BsAlphabet, BsAlt, BsAmazon, BsAmd, BsAndroid, BsAndroid2, BsAppIndicator, BsApp, BsApple, BsArchiveFill, BsArchive, BsArrow90DegDown, BsArrow90DegLeft, BsArrow90DegRight, BsArrow90DegUp, BsArrowBarDown, BsArrowBarLeft, BsArrowBarRight, BsArrowBarUp, BsArrowClockwise, BsArrowCounterclockwise, BsArrowDownCircleFill, BsArrowDownCircle, BsArrowDownLeftCircleFill, BsArrowDownLeftCircle, BsArrowDownLeftSquareFill, BsArrowDownLeftSquare, BsArrowDownLeft, BsArrowDownRightCircleFill, BsArrowDownRightCircle, BsArrowDownRightSquareFill, BsArrowDownRightSquare, BsArrowDownRight, BsArrowDownShort, BsArrowDownSquareFill, BsArrowDownSquare, BsArrowDownUp, BsArrowDown, BsArrowLeftCircleFill, BsArrowLeftCircle, BsArrowLeftRight, BsArrowLeftShort, BsArrowLeftSquareFill, BsArrowLeftSquare, BsArrowLeft, BsArrowRepeat, BsArrowReturnLeft, BsArrowReturnRight, BsArrowRightCircleFill, BsArrowRightCircle, BsArrowRightShort, BsArrowRightSquareFill, BsArrowRightSquare, BsArrowRight, BsArrowThroughHeartFill, BsArrowThroughHeart, BsArrowUpCircleFill, BsArrowUpCircle, BsArrowUpLeftCircleFill, BsArrowUpLeftCircle, BsArrowUpLeftSquareFill, BsArrowUpLeftSquare, BsArrowUpLeft, BsArrowUpRightCircleFill, BsArrowUpRightCircle, BsArrowUpRightSquareFill, BsArrowUpRightSquare, BsArrowUpRight, BsArrowUpShort, BsArrowUpSquareFill, BsArrowUpSquare, BsArrowUp, BsArrowsAngleContract, BsArrowsAngleExpand, BsArrowsCollapseVertical, BsArrowsCollapse, BsArrowsExpandVertical, BsArrowsExpand, BsArrowsFullscreen, BsArrowsMove, BsArrowsVertical, BsArrows, BsAspectRatioFill, BsAspectRatio, BsAsterisk, BsAt, BsAwardFill, BsAward, BsBack, BsBackpackFill, BsBackpack, BsBackpack2Fill, BsBackpack2, BsBackpack3Fill, BsBackpack3, BsBackpack4Fill, BsBackpack4, BsBackspaceFill, BsBackspaceReverseFill, BsBackspaceReverse, BsBackspace, BsBadge3dFill, BsBadge3D, BsBadge4kFill, BsBadge4K, BsBadge8kFill, BsBadge8K, BsBadgeAdFill, BsBadgeAd, BsBadgeArFill, BsBadgeAr, BsBadgeCcFill, BsBadgeCc, BsBadgeHdFill, BsBadgeHd, BsBadgeSdFill, BsBadgeSd, BsBadgeTmFill, BsBadgeTm, BsBadgeVoFill, BsBadgeVo, BsBadgeVrFill, BsBadgeVr, BsBadgeWcFill, BsBadgeWc, BsBagCheckFill, BsBagCheck, BsBagDashFill, BsBagDash, BsBagFill, BsBagHeartFill, BsBagHeart, BsBagPlusFill, BsBagPlus, BsBagXFill, BsBagX, BsBag, BsBalloonFill, BsBalloonHeartFill, BsBalloonHeart, BsBalloon, BsBanFill, BsBan, BsBandaidFill, BsBandaid, BsBank, BsBank2, BsBarChartFill, BsBarChartLineFill, BsBarChartLine, BsBarChartSteps, BsBarChart, BsBasketFill, BsBasket, BsBasket2Fill, BsBasket2, BsBasket3Fill, BsBasket3, BsBatteryCharging, BsBatteryFull, BsBatteryHalf, BsBattery, BsBehance, BsBellFill, BsBellSlashFill, BsBellSlash, BsBell, BsBezier, BsBezier2, BsBicycle, BsBing, BsBinocularsFill, BsBinoculars, BsBlockquoteLeft, BsBlockquoteRight, BsBluetooth, BsBodyText, BsBookFill, BsBookHalf, BsBook, BsBookmarkCheckFill, BsBookmarkCheck, BsBookmarkDashFill, BsBookmarkDash, BsBookmarkFill, BsBookmarkHeartFill, BsBookmarkHeart, BsBookmarkPlusFill, BsBookmarkPlus, BsBookmarkStarFill, BsBookmarkStar, BsBookmarkXFill, BsBookmarkX, BsBookmark, BsBookmarksFill, BsBookmarks, BsBookshelf, BsBoomboxFill, BsBoombox, BsBootstrapFill, BsBootstrapReboot, BsBootstrap, BsBorderAll, BsBorderBottom, BsBorderCenter, BsBorderInner, BsBorderLeft, BsBorderMiddle, BsBorderOuter, BsBorderRight, BsBorderStyle, BsBorderTop, BsBorderWidth, BsBorder, BsBoundingBoxCircles, BsBoundingBox, BsBoxArrowDownLeft, BsBoxArrowDownRight, BsBoxArrowDown, BsBoxArrowInDownLeft, BsBoxArrowInDownRight, BsBoxArrowInDown, BsBoxArrowInLeft, BsBoxArrowInRight, BsBoxArrowInUpLeft, BsBoxArrowInUpRight, BsBoxArrowInUp, BsBoxArrowLeft, BsBoxArrowRight, BsBoxArrowUpLeft, BsBoxArrowUpRight, BsBoxArrowUp, BsBoxFill, BsBoxSeamFill, BsBoxSeam, BsBox, BsBox2Fill, BsBox2HeartFill, BsBox2Heart, BsBox2, BsBoxes, BsBracesAsterisk, BsBraces, BsBricks, BsBriefcaseFill, BsBriefcase, BsBrightnessAltHighFill, BsBrightnessAltHigh, BsBrightnessAltLowFill, BsBrightnessAltLow, BsBrightnessHighFill, BsBrightnessHigh, BsBrightnessLowFill, BsBrightnessLow, BsBrilliance, BsBroadcastPin, BsBroadcast, BsBrowserChrome, BsBrowserEdge, BsBrowserFirefox, BsBrowserSafari, BsBrushFill, BsBrush, BsBucketFill, BsBucket, BsBugFill, BsBug, BsBuildingAdd, BsBuildingCheck, BsBuildingDash, BsBuildingDown, BsBuildingExclamation, BsBuildingFillAdd, BsBuildingFillCheck, BsBuildingFillDash, BsBuildingFillDown, BsBuildingFillExclamation;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "bs:BsFill0CircleFill": return [3 /*break*/, 1];
                        case "bs:BsFill0SquareFill": return [3 /*break*/, 3];
                        case "bs:BsFill1CircleFill": return [3 /*break*/, 5];
                        case "bs:BsFill1SquareFill": return [3 /*break*/, 7];
                        case "bs:BsFill2CircleFill": return [3 /*break*/, 9];
                        case "bs:BsFill2SquareFill": return [3 /*break*/, 11];
                        case "bs:BsFill3CircleFill": return [3 /*break*/, 13];
                        case "bs:BsFill3SquareFill": return [3 /*break*/, 15];
                        case "bs:BsFill4CircleFill": return [3 /*break*/, 17];
                        case "bs:BsFill4SquareFill": return [3 /*break*/, 19];
                        case "bs:BsFill5CircleFill": return [3 /*break*/, 21];
                        case "bs:BsFill5SquareFill": return [3 /*break*/, 23];
                        case "bs:BsFill6CircleFill": return [3 /*break*/, 25];
                        case "bs:BsFill6SquareFill": return [3 /*break*/, 27];
                        case "bs:BsFill7CircleFill": return [3 /*break*/, 29];
                        case "bs:BsFill7SquareFill": return [3 /*break*/, 31];
                        case "bs:BsFill8CircleFill": return [3 /*break*/, 33];
                        case "bs:BsFill8SquareFill": return [3 /*break*/, 35];
                        case "bs:BsFill9CircleFill": return [3 /*break*/, 37];
                        case "bs:BsFill9SquareFill": return [3 /*break*/, 39];
                        case "bs:BsFillAirplaneEnginesFill": return [3 /*break*/, 41];
                        case "bs:BsFillAirplaneFill": return [3 /*break*/, 43];
                        case "bs:BsFillAlarmFill": return [3 /*break*/, 45];
                        case "bs:BsFillArchiveFill": return [3 /*break*/, 47];
                        case "bs:BsFillArrowDownCircleFill": return [3 /*break*/, 49];
                        case "bs:BsFillArrowDownLeftCircleFill": return [3 /*break*/, 51];
                        case "bs:BsFillArrowDownLeftSquareFill": return [3 /*break*/, 53];
                        case "bs:BsFillArrowDownRightCircleFill": return [3 /*break*/, 55];
                        case "bs:BsFillArrowDownRightSquareFill": return [3 /*break*/, 57];
                        case "bs:BsFillArrowDownSquareFill": return [3 /*break*/, 59];
                        case "bs:BsFillArrowLeftCircleFill": return [3 /*break*/, 61];
                        case "bs:BsFillArrowLeftSquareFill": return [3 /*break*/, 63];
                        case "bs:BsFillArrowRightCircleFill": return [3 /*break*/, 65];
                        case "bs:BsFillArrowRightSquareFill": return [3 /*break*/, 67];
                        case "bs:BsFillArrowThroughHeartFill": return [3 /*break*/, 69];
                        case "bs:BsFillArrowUpCircleFill": return [3 /*break*/, 71];
                        case "bs:BsFillArrowUpLeftCircleFill": return [3 /*break*/, 73];
                        case "bs:BsFillArrowUpLeftSquareFill": return [3 /*break*/, 75];
                        case "bs:BsFillArrowUpRightCircleFill": return [3 /*break*/, 77];
                        case "bs:BsFillArrowUpRightSquareFill": return [3 /*break*/, 79];
                        case "bs:BsFillArrowUpSquareFill": return [3 /*break*/, 81];
                        case "bs:BsFillAspectRatioFill": return [3 /*break*/, 83];
                        case "bs:BsFillAwardFill": return [3 /*break*/, 85];
                        case "bs:BsFillBackpackFill": return [3 /*break*/, 87];
                        case "bs:BsFillBackpack2Fill": return [3 /*break*/, 89];
                        case "bs:BsFillBackpack3Fill": return [3 /*break*/, 91];
                        case "bs:BsFillBackpack4Fill": return [3 /*break*/, 93];
                        case "bs:BsFillBackspaceFill": return [3 /*break*/, 95];
                        case "bs:BsFillBackspaceReverseFill": return [3 /*break*/, 97];
                        case "bs:BsFillBadge3dFill": return [3 /*break*/, 99];
                        case "bs:BsFillBadge4kFill": return [3 /*break*/, 101];
                        case "bs:BsFillBadge8kFill": return [3 /*break*/, 103];
                        case "bs:BsFillBadgeAdFill": return [3 /*break*/, 105];
                        case "bs:BsFillBadgeArFill": return [3 /*break*/, 107];
                        case "bs:BsFillBadgeCcFill": return [3 /*break*/, 109];
                        case "bs:BsFillBadgeHdFill": return [3 /*break*/, 111];
                        case "bs:BsFillBadgeSdFill": return [3 /*break*/, 113];
                        case "bs:BsFillBadgeTmFill": return [3 /*break*/, 115];
                        case "bs:BsFillBadgeVoFill": return [3 /*break*/, 117];
                        case "bs:BsFillBadgeVrFill": return [3 /*break*/, 119];
                        case "bs:BsFillBadgeWcFill": return [3 /*break*/, 121];
                        case "bs:BsFillBagCheckFill": return [3 /*break*/, 123];
                        case "bs:BsFillBagDashFill": return [3 /*break*/, 125];
                        case "bs:BsFillBagFill": return [3 /*break*/, 127];
                        case "bs:BsFillBagHeartFill": return [3 /*break*/, 129];
                        case "bs:BsFillBagPlusFill": return [3 /*break*/, 131];
                        case "bs:BsFillBagXFill": return [3 /*break*/, 133];
                        case "bs:BsFillBalloonFill": return [3 /*break*/, 135];
                        case "bs:BsFillBalloonHeartFill": return [3 /*break*/, 137];
                        case "bs:BsFillBanFill": return [3 /*break*/, 139];
                        case "bs:BsFillBandaidFill": return [3 /*break*/, 141];
                        case "bs:BsFillBarChartFill": return [3 /*break*/, 143];
                        case "bs:BsFillBarChartLineFill": return [3 /*break*/, 145];
                        case "bs:BsFillBasketFill": return [3 /*break*/, 147];
                        case "bs:BsFillBasket2Fill": return [3 /*break*/, 149];
                        case "bs:BsFillBasket3Fill": return [3 /*break*/, 151];
                        case "bs:BsFillBellFill": return [3 /*break*/, 153];
                        case "bs:BsFillBellSlashFill": return [3 /*break*/, 155];
                        case "bs:BsFillBinocularsFill": return [3 /*break*/, 157];
                        case "bs:BsFillBookFill": return [3 /*break*/, 159];
                        case "bs:BsFillBookmarkCheckFill": return [3 /*break*/, 161];
                        case "bs:BsFillBookmarkDashFill": return [3 /*break*/, 163];
                        case "bs:BsFillBookmarkFill": return [3 /*break*/, 165];
                        case "bs:BsFillBookmarkHeartFill": return [3 /*break*/, 167];
                        case "bs:BsFillBookmarkPlusFill": return [3 /*break*/, 169];
                        case "bs:BsFillBookmarkStarFill": return [3 /*break*/, 171];
                        case "bs:BsFillBookmarkXFill": return [3 /*break*/, 173];
                        case "bs:BsFillBookmarksFill": return [3 /*break*/, 175];
                        case "bs:BsFillBoomboxFill": return [3 /*break*/, 177];
                        case "bs:BsFillBootstrapFill": return [3 /*break*/, 179];
                        case "bs:BsFillBoxFill": return [3 /*break*/, 181];
                        case "bs:BsFillBoxSeamFill": return [3 /*break*/, 183];
                        case "bs:BsFillBox2Fill": return [3 /*break*/, 185];
                        case "bs:BsFillBox2HeartFill": return [3 /*break*/, 187];
                        case "bs:BsFillBriefcaseFill": return [3 /*break*/, 189];
                        case "bs:BsFillBrightnessAltHighFill": return [3 /*break*/, 191];
                        case "bs:BsFillBrightnessAltLowFill": return [3 /*break*/, 193];
                        case "bs:BsFillBrightnessHighFill": return [3 /*break*/, 195];
                        case "bs:BsFillBrightnessLowFill": return [3 /*break*/, 197];
                        case "bs:BsFillBrushFill": return [3 /*break*/, 199];
                        case "bs:BsFillBucketFill": return [3 /*break*/, 201];
                        case "bs:BsFillBugFill": return [3 /*break*/, 203];
                        case "bs:BsFillBuildingFill": return [3 /*break*/, 205];
                        case "bs:BsFillBuildingsFill": return [3 /*break*/, 207];
                        case "bs:BsFillBusFrontFill": return [3 /*break*/, 209];
                        case "bs:BsFillCCircleFill": return [3 /*break*/, 211];
                        case "bs:BsFillCSquareFill": return [3 /*break*/, 213];
                        case "bs:BsFillCakeFill": return [3 /*break*/, 215];
                        case "bs:BsFillCake2Fill": return [3 /*break*/, 217];
                        case "bs:BsFillCalculatorFill": return [3 /*break*/, 219];
                        case "bs:BsFillCalendarCheckFill": return [3 /*break*/, 221];
                        case "bs:BsFillCalendarDateFill": return [3 /*break*/, 223];
                        case "bs:BsFillCalendarDayFill": return [3 /*break*/, 225];
                        case "bs:BsFillCalendarEventFill": return [3 /*break*/, 227];
                        case "bs:BsFillCalendarFill": return [3 /*break*/, 229];
                        case "bs:BsFillCalendarHeartFill": return [3 /*break*/, 231];
                        case "bs:BsFillCalendarMinusFill": return [3 /*break*/, 233];
                        case "bs:BsFillCalendarMonthFill": return [3 /*break*/, 235];
                        case "bs:BsFillCalendarPlusFill": return [3 /*break*/, 237];
                        case "bs:BsFillCalendarRangeFill": return [3 /*break*/, 239];
                        case "bs:BsFillCalendarWeekFill": return [3 /*break*/, 241];
                        case "bs:BsFillCalendarXFill": return [3 /*break*/, 243];
                        case "bs:BsFillCalendar2CheckFill": return [3 /*break*/, 245];
                        case "bs:BsFillCalendar2DateFill": return [3 /*break*/, 247];
                        case "bs:BsFillCalendar2DayFill": return [3 /*break*/, 249];
                        case "bs:BsFillCalendar2EventFill": return [3 /*break*/, 251];
                        case "bs:BsFillCalendar2Fill": return [3 /*break*/, 253];
                        case "bs:BsFillCalendar2HeartFill": return [3 /*break*/, 255];
                        case "bs:BsFillCalendar2MinusFill": return [3 /*break*/, 257];
                        case "bs:BsFillCalendar2MonthFill": return [3 /*break*/, 259];
                        case "bs:BsFillCalendar2PlusFill": return [3 /*break*/, 261];
                        case "bs:BsFillCalendar2RangeFill": return [3 /*break*/, 263];
                        case "bs:BsFillCalendar2WeekFill": return [3 /*break*/, 265];
                        case "bs:BsFillCalendar2XFill": return [3 /*break*/, 267];
                        case "bs:BsFillCalendar3EventFill": return [3 /*break*/, 269];
                        case "bs:BsFillCalendar3Fill": return [3 /*break*/, 271];
                        case "bs:BsFillCalendar3RangeFill": return [3 /*break*/, 273];
                        case "bs:BsFillCalendar3WeekFill": return [3 /*break*/, 275];
                        case "bs:BsFillCameraFill": return [3 /*break*/, 277];
                        case "bs:BsFillCameraReelsFill": return [3 /*break*/, 279];
                        case "bs:BsFillCameraVideoFill": return [3 /*break*/, 281];
                        case "bs:BsFillCameraVideoOffFill": return [3 /*break*/, 283];
                        case "bs:BsFillCapslockFill": return [3 /*break*/, 285];
                        case "bs:BsFillCarFrontFill": return [3 /*break*/, 287];
                        case "bs:BsFillCaretDownFill": return [3 /*break*/, 289];
                        case "bs:BsFillCaretDownSquareFill": return [3 /*break*/, 291];
                        case "bs:BsFillCaretLeftFill": return [3 /*break*/, 293];
                        case "bs:BsFillCaretLeftSquareFill": return [3 /*break*/, 295];
                        case "bs:BsFillCaretRightFill": return [3 /*break*/, 297];
                        case "bs:BsFillCaretRightSquareFill": return [3 /*break*/, 299];
                        case "bs:BsFillCaretUpFill": return [3 /*break*/, 301];
                        case "bs:BsFillCaretUpSquareFill": return [3 /*break*/, 303];
                        case "bs:BsFillCartCheckFill": return [3 /*break*/, 305];
                        case "bs:BsFillCartDashFill": return [3 /*break*/, 307];
                        case "bs:BsFillCartFill": return [3 /*break*/, 309];
                        case "bs:BsFillCartPlusFill": return [3 /*break*/, 311];
                        case "bs:BsFillCartXFill": return [3 /*break*/, 313];
                        case "bs:BsFillCassetteFill": return [3 /*break*/, 315];
                        case "bs:BsFillCcCircleFill": return [3 /*break*/, 317];
                        case "bs:BsFillCcSquareFill": return [3 /*break*/, 319];
                        case "bs:BsFillChatDotsFill": return [3 /*break*/, 321];
                        case "bs:BsFillChatFill": return [3 /*break*/, 323];
                        case "bs:BsFillChatHeartFill": return [3 /*break*/, 325];
                        case "bs:BsFillChatLeftDotsFill": return [3 /*break*/, 327];
                        case "bs:BsFillChatLeftFill": return [3 /*break*/, 329];
                        case "bs:BsFillChatLeftHeartFill": return [3 /*break*/, 331];
                        case "bs:BsFillChatLeftQuoteFill": return [3 /*break*/, 333];
                        case "bs:BsFillChatLeftTextFill": return [3 /*break*/, 335];
                        case "bs:BsFillChatQuoteFill": return [3 /*break*/, 337];
                        case "bs:BsFillChatRightDotsFill": return [3 /*break*/, 339];
                        case "bs:BsFillChatRightFill": return [3 /*break*/, 341];
                        case "bs:BsFillChatRightHeartFill": return [3 /*break*/, 343];
                        case "bs:BsFillChatRightQuoteFill": return [3 /*break*/, 345];
                        case "bs:BsFillChatRightTextFill": return [3 /*break*/, 347];
                        case "bs:BsFillChatSquareDotsFill": return [3 /*break*/, 349];
                        case "bs:BsFillChatSquareFill": return [3 /*break*/, 351];
                        case "bs:BsFillChatSquareHeartFill": return [3 /*break*/, 353];
                        case "bs:BsFillChatSquareQuoteFill": return [3 /*break*/, 355];
                        case "bs:BsFillChatSquareTextFill": return [3 /*break*/, 357];
                        case "bs:BsFillChatTextFill": return [3 /*break*/, 359];
                        case "bs:BsFillCheckCircleFill": return [3 /*break*/, 361];
                        case "bs:BsFillCheckSquareFill": return [3 /*break*/, 363];
                        case "bs:BsFillCircleFill": return [3 /*break*/, 365];
                        case "bs:BsFillClipboardCheckFill": return [3 /*break*/, 367];
                        case "bs:BsFillClipboardDataFill": return [3 /*break*/, 369];
                        case "bs:BsFillClipboardFill": return [3 /*break*/, 371];
                        case "bs:BsFillClipboardHeartFill": return [3 /*break*/, 373];
                        case "bs:BsFillClipboardMinusFill": return [3 /*break*/, 375];
                        case "bs:BsFillClipboardPlusFill": return [3 /*break*/, 377];
                        case "bs:BsFillClipboardXFill": return [3 /*break*/, 379];
                        case "bs:BsFillClipboard2CheckFill": return [3 /*break*/, 381];
                        case "bs:BsFillClipboard2DataFill": return [3 /*break*/, 383];
                        case "bs:BsFillClipboard2Fill": return [3 /*break*/, 385];
                        case "bs:BsFillClipboard2HeartFill": return [3 /*break*/, 387];
                        case "bs:BsFillClipboard2MinusFill": return [3 /*break*/, 389];
                        case "bs:BsFillClipboard2PlusFill": return [3 /*break*/, 391];
                        case "bs:BsFillClipboard2PulseFill": return [3 /*break*/, 393];
                        case "bs:BsFillClipboard2XFill": return [3 /*break*/, 395];
                        case "bs:BsFillClockFill": return [3 /*break*/, 397];
                        case "bs:BsFillCloudArrowDownFill": return [3 /*break*/, 399];
                        case "bs:BsFillCloudArrowUpFill": return [3 /*break*/, 401];
                        case "bs:BsFillCloudCheckFill": return [3 /*break*/, 403];
                        case "bs:BsFillCloudDownloadFill": return [3 /*break*/, 405];
                        case "bs:BsFillCloudDrizzleFill": return [3 /*break*/, 407];
                        case "bs:BsFillCloudFill": return [3 /*break*/, 409];
                        case "bs:BsFillCloudFogFill": return [3 /*break*/, 411];
                        case "bs:BsFillCloudFog2Fill": return [3 /*break*/, 413];
                        case "bs:BsFillCloudHailFill": return [3 /*break*/, 415];
                        case "bs:BsFillCloudHazeFill": return [3 /*break*/, 417];
                        case "bs:BsFillCloudHaze2Fill": return [3 /*break*/, 419];
                        case "bs:BsFillCloudLightningFill": return [3 /*break*/, 421];
                        case "bs:BsFillCloudLightningRainFill": return [3 /*break*/, 423];
                        case "bs:BsFillCloudMinusFill": return [3 /*break*/, 425];
                        case "bs:BsFillCloudMoonFill": return [3 /*break*/, 427];
                        case "bs:BsFillCloudPlusFill": return [3 /*break*/, 429];
                        case "bs:BsFillCloudRainFill": return [3 /*break*/, 431];
                        case "bs:BsFillCloudRainHeavyFill": return [3 /*break*/, 433];
                        case "bs:BsFillCloudSlashFill": return [3 /*break*/, 435];
                        case "bs:BsFillCloudSleetFill": return [3 /*break*/, 437];
                        case "bs:BsFillCloudSnowFill": return [3 /*break*/, 439];
                        case "bs:BsFillCloudSunFill": return [3 /*break*/, 441];
                        case "bs:BsFillCloudUploadFill": return [3 /*break*/, 443];
                        case "bs:BsFillCloudsFill": return [3 /*break*/, 445];
                        case "bs:BsFillCloudyFill": return [3 /*break*/, 447];
                        case "bs:BsFillCollectionFill": return [3 /*break*/, 449];
                        case "bs:BsFillCollectionPlayFill": return [3 /*break*/, 451];
                        case "bs:BsFillCompassFill": return [3 /*break*/, 453];
                        case "bs:BsFillCpuFill": return [3 /*break*/, 455];
                        case "bs:BsFillCreditCard2BackFill": return [3 /*break*/, 457];
                        case "bs:BsFillCreditCard2FrontFill": return [3 /*break*/, 459];
                        case "bs:BsFillCreditCardFill": return [3 /*break*/, 461];
                        case "bs:BsFillCupFill": return [3 /*break*/, 463];
                        case "bs:BsFillCupHotFill": return [3 /*break*/, 465];
                        case "bs:BsFillCursorFill": return [3 /*break*/, 467];
                        case "bs:BsFillDashCircleFill": return [3 /*break*/, 469];
                        case "bs:BsFillDashSquareFill": return [3 /*break*/, 471];
                        case "bs:BsFillDatabaseFill": return [3 /*break*/, 473];
                        case "bs:BsFillDeviceHddFill": return [3 /*break*/, 475];
                        case "bs:BsFillDeviceSsdFill": return [3 /*break*/, 477];
                        case "bs:BsFillDiagram2Fill": return [3 /*break*/, 479];
                        case "bs:BsFillDiagram3Fill": return [3 /*break*/, 481];
                        case "bs:BsFillDiamondFill": return [3 /*break*/, 483];
                        case "bs:BsFillDice1Fill": return [3 /*break*/, 485];
                        case "bs:BsFillDice2Fill": return [3 /*break*/, 487];
                        case "bs:BsFillDice3Fill": return [3 /*break*/, 489];
                        case "bs:BsFillDice4Fill": return [3 /*break*/, 491];
                        case "bs:BsFillDice5Fill": return [3 /*break*/, 493];
                        case "bs:BsFillDice6Fill": return [3 /*break*/, 495];
                        case "bs:BsFillDiscFill": return [3 /*break*/, 497];
                        case "bs:BsFillDisplayFill": return [3 /*break*/, 499];
                        case "bs:BsFillDisplayportFill": return [3 /*break*/, 501];
                        case "bs:BsFillDoorClosedFill": return [3 /*break*/, 503];
                        case "bs:BsFillDoorOpenFill": return [3 /*break*/, 505];
                        case "bs:BsFillDpadFill": return [3 /*break*/, 507];
                        case "bs:BsFillDropletFill": return [3 /*break*/, 509];
                        case "bs:BsFillDuffleFill": return [3 /*break*/, 511];
                        case "bs:BsFillEarFill": return [3 /*break*/, 513];
                        case "bs:BsFillEaselFill": return [3 /*break*/, 515];
                        case "bs:BsFillEasel2Fill": return [3 /*break*/, 517];
                        case "bs:BsFillEasel3Fill": return [3 /*break*/, 519];
                        case "bs:BsFillEggFill": return [3 /*break*/, 521];
                        case "bs:BsFillEjectFill": return [3 /*break*/, 523];
                        case "bs:BsFillEmojiAngryFill": return [3 /*break*/, 525];
                        case "bs:BsFillEmojiAstonishedFill": return [3 /*break*/, 527];
                        case "bs:BsFillEmojiDizzyFill": return [3 /*break*/, 529];
                        case "bs:BsFillEmojiExpressionlessFill": return [3 /*break*/, 531];
                        case "bs:BsFillEmojiFrownFill": return [3 /*break*/, 533];
                        case "bs:BsFillEmojiGrimaceFill": return [3 /*break*/, 535];
                        case "bs:BsFillEmojiGrinFill": return [3 /*break*/, 537];
                        case "bs:BsFillEmojiHeartEyesFill": return [3 /*break*/, 539];
                        case "bs:BsFillEmojiKissFill": return [3 /*break*/, 541];
                        case "bs:BsFillEmojiLaughingFill": return [3 /*break*/, 543];
                        case "bs:BsFillEmojiNeutralFill": return [3 /*break*/, 545];
                        case "bs:BsFillEmojiSmileFill": return [3 /*break*/, 547];
                        case "bs:BsFillEmojiSmileUpsideDownFill": return [3 /*break*/, 549];
                        case "bs:BsFillEmojiSunglassesFill": return [3 /*break*/, 551];
                        case "bs:BsFillEmojiSurpriseFill": return [3 /*break*/, 553];
                        case "bs:BsFillEmojiTearFill": return [3 /*break*/, 555];
                        case "bs:BsFillEmojiWinkFill": return [3 /*break*/, 557];
                        case "bs:BsFillEnvelopeArrowDownFill": return [3 /*break*/, 559];
                        case "bs:BsFillEnvelopeArrowUpFill": return [3 /*break*/, 561];
                        case "bs:BsFillEnvelopeAtFill": return [3 /*break*/, 563];
                        case "bs:BsFillEnvelopeCheckFill": return [3 /*break*/, 565];
                        case "bs:BsFillEnvelopeDashFill": return [3 /*break*/, 567];
                        case "bs:BsFillEnvelopeExclamationFill": return [3 /*break*/, 569];
                        case "bs:BsFillEnvelopeFill": return [3 /*break*/, 571];
                        case "bs:BsFillEnvelopeHeartFill": return [3 /*break*/, 573];
                        case "bs:BsFillEnvelopeOpenFill": return [3 /*break*/, 575];
                        case "bs:BsFillEnvelopeOpenHeartFill": return [3 /*break*/, 577];
                        case "bs:BsFillEnvelopePaperFill": return [3 /*break*/, 579];
                        case "bs:BsFillEnvelopePaperHeartFill": return [3 /*break*/, 581];
                        case "bs:BsFillEnvelopePlusFill": return [3 /*break*/, 583];
                        case "bs:BsFillEnvelopeSlashFill": return [3 /*break*/, 585];
                        case "bs:BsFillEnvelopeXFill": return [3 /*break*/, 587];
                        case "bs:BsFillEraserFill": return [3 /*break*/, 589];
                        case "bs:BsFillEvFrontFill": return [3 /*break*/, 591];
                        case "bs:BsFillEvStationFill": return [3 /*break*/, 593];
                        case "bs:BsFillExclamationCircleFill": return [3 /*break*/, 595];
                        case "bs:BsFillExclamationDiamondFill": return [3 /*break*/, 597];
                        case "bs:BsFillExclamationOctagonFill": return [3 /*break*/, 599];
                        case "bs:BsFillExclamationSquareFill": return [3 /*break*/, 601];
                        case "bs:BsFillExclamationTriangleFill": return [3 /*break*/, 603];
                        case "bs:BsFillExplicitFill": return [3 /*break*/, 605];
                        case "bs:BsFillEyeFill": return [3 /*break*/, 607];
                        case "bs:BsFillEyeSlashFill": return [3 /*break*/, 609];
                        case "bs:BsFillFastForwardBtnFill": return [3 /*break*/, 611];
                        case "bs:BsFillFastForwardCircleFill": return [3 /*break*/, 613];
                        case "bs:BsFillFastForwardFill": return [3 /*break*/, 615];
                        case "bs:BsFillFileArrowDownFill": return [3 /*break*/, 617];
                        case "bs:BsFillFileArrowUpFill": return [3 /*break*/, 619];
                        case "bs:BsFillFileBarGraphFill": return [3 /*break*/, 621];
                        case "bs:BsFillFileBinaryFill": return [3 /*break*/, 623];
                        case "bs:BsFillFileBreakFill": return [3 /*break*/, 625];
                        case "bs:BsFillFileCheckFill": return [3 /*break*/, 627];
                        case "bs:BsFillFileCodeFill": return [3 /*break*/, 629];
                        case "bs:BsFillFileDiffFill": return [3 /*break*/, 631];
                        case "bs:BsFillFileEarmarkArrowDownFill": return [3 /*break*/, 633];
                        case "bs:BsFillFileEarmarkArrowUpFill": return [3 /*break*/, 635];
                        case "bs:BsFillFileEarmarkBarGraphFill": return [3 /*break*/, 637];
                        case "bs:BsFillFileEarmarkBinaryFill": return [3 /*break*/, 639];
                        case "bs:BsFillFileEarmarkBreakFill": return [3 /*break*/, 641];
                        case "bs:BsFillFileEarmarkCheckFill": return [3 /*break*/, 643];
                        case "bs:BsFillFileEarmarkCodeFill": return [3 /*break*/, 645];
                        case "bs:BsFillFileEarmarkDiffFill": return [3 /*break*/, 647];
                        case "bs:BsFillFileEarmarkEaselFill": return [3 /*break*/, 649];
                        case "bs:BsFillFileEarmarkExcelFill": return [3 /*break*/, 651];
                        case "bs:BsFillFileEarmarkFill": return [3 /*break*/, 653];
                        case "bs:BsFillFileEarmarkFontFill": return [3 /*break*/, 655];
                        case "bs:BsFillFileEarmarkImageFill": return [3 /*break*/, 657];
                        case "bs:BsFillFileEarmarkLockFill": return [3 /*break*/, 659];
                        case "bs:BsFillFileEarmarkLock2Fill": return [3 /*break*/, 661];
                        case "bs:BsFillFileEarmarkMedicalFill": return [3 /*break*/, 663];
                        case "bs:BsFillFileEarmarkMinusFill": return [3 /*break*/, 665];
                        case "bs:BsFillFileEarmarkMusicFill": return [3 /*break*/, 667];
                        case "bs:BsFillFileEarmarkPdfFill": return [3 /*break*/, 669];
                        case "bs:BsFillFileEarmarkPersonFill": return [3 /*break*/, 671];
                        case "bs:BsFillFileEarmarkPlayFill": return [3 /*break*/, 673];
                        case "bs:BsFillFileEarmarkPlusFill": return [3 /*break*/, 675];
                        case "bs:BsFillFileEarmarkPostFill": return [3 /*break*/, 677];
                        case "bs:BsFillFileEarmarkPptFill": return [3 /*break*/, 679];
                        case "bs:BsFillFileEarmarkRichtextFill": return [3 /*break*/, 681];
                        case "bs:BsFillFileEarmarkRuledFill": return [3 /*break*/, 683];
                        case "bs:BsFillFileEarmarkSlidesFill": return [3 /*break*/, 685];
                        case "bs:BsFillFileEarmarkSpreadsheetFill": return [3 /*break*/, 687];
                        case "bs:BsFillFileEarmarkTextFill": return [3 /*break*/, 689];
                        case "bs:BsFillFileEarmarkWordFill": return [3 /*break*/, 691];
                        case "bs:BsFillFileEarmarkXFill": return [3 /*break*/, 693];
                        case "bs:BsFillFileEarmarkZipFill": return [3 /*break*/, 695];
                        case "bs:BsFillFileEaselFill": return [3 /*break*/, 697];
                        case "bs:BsFillFileExcelFill": return [3 /*break*/, 699];
                        case "bs:BsFillFileFill": return [3 /*break*/, 701];
                        case "bs:BsFillFileFontFill": return [3 /*break*/, 703];
                        case "bs:BsFillFileImageFill": return [3 /*break*/, 705];
                        case "bs:BsFillFileLockFill": return [3 /*break*/, 707];
                        case "bs:BsFillFileLock2Fill": return [3 /*break*/, 709];
                        case "bs:BsFillFileMedicalFill": return [3 /*break*/, 711];
                        case "bs:BsFillFileMinusFill": return [3 /*break*/, 713];
                        case "bs:BsFillFileMusicFill": return [3 /*break*/, 715];
                        case "bs:BsFillFilePdfFill": return [3 /*break*/, 717];
                        case "bs:BsFillFilePersonFill": return [3 /*break*/, 719];
                        case "bs:BsFillFilePlayFill": return [3 /*break*/, 721];
                        case "bs:BsFillFilePlusFill": return [3 /*break*/, 723];
                        case "bs:BsFillFilePostFill": return [3 /*break*/, 725];
                        case "bs:BsFillFilePptFill": return [3 /*break*/, 727];
                        case "bs:BsFillFileRichtextFill": return [3 /*break*/, 729];
                        case "bs:BsFillFileRuledFill": return [3 /*break*/, 731];
                        case "bs:BsFillFileSlidesFill": return [3 /*break*/, 733];
                        case "bs:BsFillFileSpreadsheetFill": return [3 /*break*/, 735];
                        case "bs:BsFillFileTextFill": return [3 /*break*/, 737];
                        case "bs:BsFillFileWordFill": return [3 /*break*/, 739];
                        case "bs:BsFillFileXFill": return [3 /*break*/, 741];
                        case "bs:BsFillFileZipFill": return [3 /*break*/, 743];
                        case "bs:BsFillFilterCircleFill": return [3 /*break*/, 745];
                        case "bs:BsFillFilterSquareFill": return [3 /*break*/, 747];
                        case "bs:BsFillFlagFill": return [3 /*break*/, 749];
                        case "bs:BsFillFloppyFill": return [3 /*break*/, 751];
                        case "bs:BsFillFloppy2Fill": return [3 /*break*/, 753];
                        case "bs:BsFillFolderFill": return [3 /*break*/, 755];
                        case "bs:BsFillFolderSymlinkFill": return [3 /*break*/, 757];
                        case "bs:BsFillForwardFill": return [3 /*break*/, 759];
                        case "bs:BsFillFuelPumpDieselFill": return [3 /*break*/, 761];
                        case "bs:BsFillFuelPumpFill": return [3 /*break*/, 763];
                        case "bs:BsFillFunnelFill": return [3 /*break*/, 765];
                        case "bs:BsFillGearFill": return [3 /*break*/, 767];
                        case "bs:BsFillGeoAltFill": return [3 /*break*/, 769];
                        case "bs:BsFillGeoFill": return [3 /*break*/, 771];
                        case "bs:BsFillGiftFill": return [3 /*break*/, 773];
                        case "bs:BsFillGrid1X2Fill": return [3 /*break*/, 775];
                        case "bs:BsFillGrid3X2GapFill": return [3 /*break*/, 777];
                        case "bs:BsFillGrid3X3GapFill": return [3 /*break*/, 779];
                        case "bs:BsFillGridFill": return [3 /*break*/, 781];
                        case "bs:BsFillHCircleFill": return [3 /*break*/, 783];
                        case "bs:BsFillHSquareFill": return [3 /*break*/, 785];
                        case "bs:BsFillHandIndexFill": return [3 /*break*/, 787];
                        case "bs:BsFillHandIndexThumbFill": return [3 /*break*/, 789];
                        case "bs:BsFillHandThumbsDownFill": return [3 /*break*/, 791];
                        case "bs:BsFillHandThumbsUpFill": return [3 /*break*/, 793];
                        case "bs:BsFillHandbagFill": return [3 /*break*/, 795];
                        case "bs:BsFillHddFill": return [3 /*break*/, 797];
                        case "bs:BsFillHddNetworkFill": return [3 /*break*/, 799];
                        case "bs:BsFillHddRackFill": return [3 /*break*/, 801];
                        case "bs:BsFillHddStackFill": return [3 /*break*/, 803];
                        case "bs:BsFillHdmiFill": return [3 /*break*/, 805];
                        case "bs:BsFillHeartFill": return [3 /*break*/, 807];
                        case "bs:BsFillHeartPulseFill": return [3 /*break*/, 809];
                        case "bs:BsFillHeartbreakFill": return [3 /*break*/, 811];
                        case "bs:BsFillHeptagonFill": return [3 /*break*/, 813];
                        case "bs:BsFillHexagonFill": return [3 /*break*/, 815];
                        case "bs:BsFillHospitalFill": return [3 /*break*/, 817];
                        case "bs:BsFillHouseAddFill": return [3 /*break*/, 819];
                        case "bs:BsFillHouseCheckFill": return [3 /*break*/, 821];
                        case "bs:BsFillHouseDashFill": return [3 /*break*/, 823];
                        case "bs:BsFillHouseDoorFill": return [3 /*break*/, 825];
                        case "bs:BsFillHouseDownFill": return [3 /*break*/, 827];
                        case "bs:BsFillHouseExclamationFill": return [3 /*break*/, 829];
                        case "bs:BsFillHouseFill": return [3 /*break*/, 831];
                        case "bs:BsFillHouseGearFill": return [3 /*break*/, 833];
                        case "bs:BsFillHouseHeartFill": return [3 /*break*/, 835];
                        case "bs:BsFillHouseLockFill": return [3 /*break*/, 837];
                        case "bs:BsFillHouseSlashFill": return [3 /*break*/, 839];
                        case "bs:BsFillHouseUpFill": return [3 /*break*/, 841];
                        case "bs:BsFillHouseXFill": return [3 /*break*/, 843];
                        case "bs:BsFillHousesFill": return [3 /*break*/, 845];
                        case "bs:BsFillImageFill": return [3 /*break*/, 847];
                        case "bs:BsFillInboxFill": return [3 /*break*/, 849];
                        case "bs:BsFillInboxesFill": return [3 /*break*/, 851];
                        case "bs:BsFillInfoCircleFill": return [3 /*break*/, 853];
                        case "bs:BsFillInfoSquareFill": return [3 /*break*/, 855];
                        case "bs:BsFillJournalBookmarkFill": return [3 /*break*/, 857];
                        case "bs:BsFillKanbanFill": return [3 /*break*/, 859];
                        case "bs:BsFillKeyFill": return [3 /*break*/, 861];
                        case "bs:BsFillKeyboardFill": return [3 /*break*/, 863];
                        case "bs:BsFillLampFill": return [3 /*break*/, 865];
                        case "bs:BsFillLaptopFill": return [3 /*break*/, 867];
                        case "bs:BsFillLayersFill": return [3 /*break*/, 869];
                        case "bs:BsFillLightbulbFill": return [3 /*break*/, 871];
                        case "bs:BsFillLightbulbOffFill": return [3 /*break*/, 873];
                        case "bs:BsFillLightningChargeFill": return [3 /*break*/, 875];
                        case "bs:BsFillLightningFill": return [3 /*break*/, 877];
                        case "bs:BsFillLockFill": return [3 /*break*/, 879];
                        case "bs:BsFillLuggageFill": return [3 /*break*/, 881];
                        case "bs:BsFillLungsFill": return [3 /*break*/, 883];
                        case "bs:BsFillMagnetFill": return [3 /*break*/, 885];
                        case "bs:BsFillMapFill": return [3 /*break*/, 887];
                        case "bs:BsFillMarkdownFill": return [3 /*break*/, 889];
                        case "bs:BsFillMegaphoneFill": return [3 /*break*/, 891];
                        case "bs:BsFillMenuAppFill": return [3 /*break*/, 893];
                        case "bs:BsFillMenuButtonFill": return [3 /*break*/, 895];
                        case "bs:BsFillMenuButtonWideFill": return [3 /*break*/, 897];
                        case "bs:BsFillMicFill": return [3 /*break*/, 899];
                        case "bs:BsFillMicMuteFill": return [3 /*break*/, 901];
                        case "bs:BsFillModemFill": return [3 /*break*/, 903];
                        case "bs:BsFillMoonFill": return [3 /*break*/, 905];
                        case "bs:BsFillMoonStarsFill": return [3 /*break*/, 907];
                        case "bs:BsFillMortarboardFill": return [3 /*break*/, 909];
                        case "bs:BsFillMotherboardFill": return [3 /*break*/, 911];
                        case "bs:BsFillMouseFill": return [3 /*break*/, 913];
                        case "bs:BsFillMouse2Fill": return [3 /*break*/, 915];
                        case "bs:BsFillMouse3Fill": return [3 /*break*/, 917];
                        case "bs:BsFillMusicPlayerFill": return [3 /*break*/, 919];
                        case "bs:BsFillNodeMinusFill": return [3 /*break*/, 921];
                        case "bs:BsFillNodePlusFill": return [3 /*break*/, 923];
                        case "bs:BsFillNutFill": return [3 /*break*/, 925];
                        case "bs:BsFillNvmeFill": return [3 /*break*/, 927];
                        case "bs:BsFillOctagonFill": return [3 /*break*/, 929];
                        case "bs:BsFillOpticalAudioFill": return [3 /*break*/, 931];
                        case "bs:BsFillPCircleFill": return [3 /*break*/, 933];
                        case "bs:BsFillPSquareFill": return [3 /*break*/, 935];
                        case "bs:BsFillPaletteFill": return [3 /*break*/, 937];
                        case "bs:BsFillPassFill": return [3 /*break*/, 939];
                        case "bs:BsFillPassportFill": return [3 /*break*/, 941];
                        case "bs:BsFillPatchCheckFill": return [3 /*break*/, 943];
                        case "bs:BsFillPatchExclamationFill": return [3 /*break*/, 945];
                        case "bs:BsFillPatchMinusFill": return [3 /*break*/, 947];
                        case "bs:BsFillPatchPlusFill": return [3 /*break*/, 949];
                        case "bs:BsFillPatchQuestionFill": return [3 /*break*/, 951];
                        case "bs:BsFillPauseBtnFill": return [3 /*break*/, 953];
                        case "bs:BsFillPauseCircleFill": return [3 /*break*/, 955];
                        case "bs:BsFillPauseFill": return [3 /*break*/, 957];
                        case "bs:BsFillPeaceFill": return [3 /*break*/, 959];
                        case "bs:BsFillPenFill": return [3 /*break*/, 961];
                        case "bs:BsFillPencilFill": return [3 /*break*/, 963];
                        case "bs:BsFillPentagonFill": return [3 /*break*/, 965];
                        case "bs:BsFillPeopleFill": return [3 /*break*/, 967];
                        case "bs:BsFillPersonBadgeFill": return [3 /*break*/, 969];
                        case "bs:BsFillPersonCheckFill": return [3 /*break*/, 971];
                        case "bs:BsFillPersonDashFill": return [3 /*break*/, 973];
                        case "bs:BsFillPersonFill": return [3 /*break*/, 975];
                        case "bs:BsFillPersonLinesFill": return [3 /*break*/, 977];
                        case "bs:BsFillPersonPlusFill": return [3 /*break*/, 979];
                        case "bs:BsFillPersonVcardFill": return [3 /*break*/, 981];
                        case "bs:BsFillPersonXFill": return [3 /*break*/, 983];
                        case "bs:BsFillPhoneFill": return [3 /*break*/, 985];
                        case "bs:BsFillPhoneLandscapeFill": return [3 /*break*/, 987];
                        case "bs:BsFillPhoneVibrateFill": return [3 /*break*/, 989];
                        case "bs:BsFillPieChartFill": return [3 /*break*/, 991];
                        case "bs:BsFillPiggyBankFill": return [3 /*break*/, 993];
                        case "bs:BsFillPinAngleFill": return [3 /*break*/, 995];
                        case "bs:BsFillPinFill": return [3 /*break*/, 997];
                        case "bs:BsFillPinMapFill": return [3 /*break*/, 999];
                        case "bs:BsFillPipFill": return [3 /*break*/, 1001];
                        case "bs:BsFillPlayBtnFill": return [3 /*break*/, 1003];
                        case "bs:BsFillPlayCircleFill": return [3 /*break*/, 1005];
                        case "bs:BsFillPlayFill": return [3 /*break*/, 1007];
                        case "bs:BsFillPlugFill": return [3 /*break*/, 1009];
                        case "bs:BsFillPlusCircleFill": return [3 /*break*/, 1011];
                        case "bs:BsFillPlusSquareFill": return [3 /*break*/, 1013];
                        case "bs:BsFillPostageFill": return [3 /*break*/, 1015];
                        case "bs:BsFillPostageHeartFill": return [3 /*break*/, 1017];
                        case "bs:BsFillPostcardFill": return [3 /*break*/, 1019];
                        case "bs:BsFillPostcardHeartFill": return [3 /*break*/, 1021];
                        case "bs:BsFillPrinterFill": return [3 /*break*/, 1023];
                        case "bs:BsFillProjectorFill": return [3 /*break*/, 1025];
                        case "bs:BsFillPuzzleFill": return [3 /*break*/, 1027];
                        case "bs:BsFillQuestionCircleFill": return [3 /*break*/, 1029];
                        case "bs:BsFillQuestionDiamondFill": return [3 /*break*/, 1031];
                        case "bs:BsFillQuestionOctagonFill": return [3 /*break*/, 1033];
                        case "bs:BsFillQuestionSquareFill": return [3 /*break*/, 1035];
                        case "bs:BsFillRCircleFill": return [3 /*break*/, 1037];
                        case "bs:BsFillRSquareFill": return [3 /*break*/, 1039];
                        case "bs:BsFillRecordBtnFill": return [3 /*break*/, 1041];
                        case "bs:BsFillRecordCircleFill": return [3 /*break*/, 1043];
                        case "bs:BsFillRecordFill": return [3 /*break*/, 1045];
                        case "bs:BsFillRecord2Fill": return [3 /*break*/, 1047];
                        case "bs:BsFillReplyAllFill": return [3 /*break*/, 1049];
                        case "bs:BsFillReplyFill": return [3 /*break*/, 1051];
                        case "bs:BsFillRewindBtnFill": return [3 /*break*/, 1053];
                        case "bs:BsFillRewindCircleFill": return [3 /*break*/, 1055];
                        case "bs:BsFillRewindFill": return [3 /*break*/, 1057];
                        case "bs:BsFillRocketFill": return [3 /*break*/, 1059];
                        case "bs:BsFillRocketTakeoffFill": return [3 /*break*/, 1061];
                        case "bs:BsFillRouterFill": return [3 /*break*/, 1063];
                        case "bs:BsFillRssFill": return [3 /*break*/, 1065];
                        case "bs:BsFillSafeFill": return [3 /*break*/, 1067];
                        case "bs:BsFillSafe2Fill": return [3 /*break*/, 1069];
                        case "bs:BsFillSaveFill": return [3 /*break*/, 1071];
                        case "bs:BsFillSave2Fill": return [3 /*break*/, 1073];
                        case "bs:BsFillSdCardFill": return [3 /*break*/, 1075];
                        case "bs:BsFillSearchHeartFill": return [3 /*break*/, 1077];
                        case "bs:BsFillSendArrowDownFill": return [3 /*break*/, 1079];
                        case "bs:BsFillSendArrowUpFill": return [3 /*break*/, 1081];
                        case "bs:BsFillSendCheckFill": return [3 /*break*/, 1083];
                        case "bs:BsFillSendDashFill": return [3 /*break*/, 1085];
                        case "bs:BsFillSendExclamationFill": return [3 /*break*/, 1087];
                        case "bs:BsFillSendFill": return [3 /*break*/, 1089];
                        case "bs:BsFillSendPlusFill": return [3 /*break*/, 1091];
                        case "bs:BsFillSendSlashFill": return [3 /*break*/, 1093];
                        case "bs:BsFillSendXFill": return [3 /*break*/, 1095];
                        case "bs:BsFillShareFill": return [3 /*break*/, 1097];
                        case "bs:BsFillShieldFill": return [3 /*break*/, 1099];
                        case "bs:BsFillShieldLockFill": return [3 /*break*/, 1101];
                        case "bs:BsFillShieldSlashFill": return [3 /*break*/, 1103];
                        case "bs:BsFillShiftFill": return [3 /*break*/, 1105];
                        case "bs:BsFillSignDeadEndFill": return [3 /*break*/, 1107];
                        case "bs:BsFillSignDoNotEnterFill": return [3 /*break*/, 1109];
                        case "bs:BsFillSignIntersectionFill": return [3 /*break*/, 1111];
                        case "bs:BsFillSignIntersectionSideFill": return [3 /*break*/, 1113];
                        case "bs:BsFillSignIntersectionTFill": return [3 /*break*/, 1115];
                        case "bs:BsFillSignIntersectionYFill": return [3 /*break*/, 1117];
                        case "bs:BsFillSignMergeLeftFill": return [3 /*break*/, 1119];
                        case "bs:BsFillSignMergeRightFill": return [3 /*break*/, 1121];
                        case "bs:BsFillSignNoLeftTurnFill": return [3 /*break*/, 1123];
                        case "bs:BsFillSignNoParkingFill": return [3 /*break*/, 1125];
                        case "bs:BsFillSignNoRightTurnFill": return [3 /*break*/, 1127];
                        case "bs:BsFillSignRailroadFill": return [3 /*break*/, 1129];
                        case "bs:BsFillSignStopFill": return [3 /*break*/, 1131];
                        case "bs:BsFillSignStopLightsFill": return [3 /*break*/, 1133];
                        case "bs:BsFillSignTurnLeftFill": return [3 /*break*/, 1135];
                        case "bs:BsFillSignTurnRightFill": return [3 /*break*/, 1137];
                        case "bs:BsFillSignTurnSlightLeftFill": return [3 /*break*/, 1139];
                        case "bs:BsFillSignTurnSlightRightFill": return [3 /*break*/, 1141];
                        case "bs:BsFillSignYieldFill": return [3 /*break*/, 1143];
                        case "bs:BsFillSignpost2Fill": return [3 /*break*/, 1145];
                        case "bs:BsFillSignpostFill": return [3 /*break*/, 1147];
                        case "bs:BsFillSignpostSplitFill": return [3 /*break*/, 1149];
                        case "bs:BsFillSimFill": return [3 /*break*/, 1151];
                        case "bs:BsFillSimSlashFill": return [3 /*break*/, 1153];
                        case "bs:BsFillSkipBackwardBtnFill": return [3 /*break*/, 1155];
                        case "bs:BsFillSkipBackwardCircleFill": return [3 /*break*/, 1157];
                        case "bs:BsFillSkipBackwardFill": return [3 /*break*/, 1159];
                        case "bs:BsFillSkipEndBtnFill": return [3 /*break*/, 1161];
                        case "bs:BsFillSkipEndCircleFill": return [3 /*break*/, 1163];
                        case "bs:BsFillSkipEndFill": return [3 /*break*/, 1165];
                        case "bs:BsFillSkipForwardBtnFill": return [3 /*break*/, 1167];
                        case "bs:BsFillSkipForwardCircleFill": return [3 /*break*/, 1169];
                        case "bs:BsFillSkipForwardFill": return [3 /*break*/, 1171];
                        case "bs:BsFillSkipStartBtnFill": return [3 /*break*/, 1173];
                        case "bs:BsFillSkipStartCircleFill": return [3 /*break*/, 1175];
                        case "bs:BsFillSkipStartFill": return [3 /*break*/, 1177];
                        case "bs:BsFillSlashCircleFill": return [3 /*break*/, 1179];
                        case "bs:BsFillSlashSquareFill": return [3 /*break*/, 1181];
                        case "bs:BsFillSpeakerFill": return [3 /*break*/, 1183];
                        case "bs:BsFillSquareFill": return [3 /*break*/, 1185];
                        case "bs:BsFillStarFill": return [3 /*break*/, 1187];
                        case "bs:BsFillStickiesFill": return [3 /*break*/, 1189];
                        case "bs:BsFillStickyFill": return [3 /*break*/, 1191];
                        case "bs:BsFillStopBtnFill": return [3 /*break*/, 1193];
                        case "bs:BsFillStopCircleFill": return [3 /*break*/, 1195];
                        case "bs:BsFillStopFill": return [3 /*break*/, 1197];
                        case "bs:BsFillStoplightsFill": return [3 /*break*/, 1199];
                        case "bs:BsFillStopwatchFill": return [3 /*break*/, 1201];
                        case "bs:BsFillSuitClubFill": return [3 /*break*/, 1203];
                        case "bs:BsFillSuitDiamondFill": return [3 /*break*/, 1205];
                        case "bs:BsFillSuitHeartFill": return [3 /*break*/, 1207];
                        case "bs:BsFillSuitSpadeFill": return [3 /*break*/, 1209];
                        case "bs:BsFillSuitcaseFill": return [3 /*break*/, 1211];
                        case "bs:BsFillSuitcaseLgFill": return [3 /*break*/, 1213];
                        case "bs:BsFillSuitcase2Fill": return [3 /*break*/, 1215];
                        case "bs:BsFillSunFill": return [3 /*break*/, 1217];
                        case "bs:BsFillSunriseFill": return [3 /*break*/, 1219];
                        case "bs:BsFillSunsetFill": return [3 /*break*/, 1221];
                        case "bs:BsFillTabletFill": return [3 /*break*/, 1223];
                        case "bs:BsFillTabletLandscapeFill": return [3 /*break*/, 1225];
                        case "bs:BsFillTagFill": return [3 /*break*/, 1227];
                        case "bs:BsFillTagsFill": return [3 /*break*/, 1229];
                        case "bs:BsFillTaxiFrontFill": return [3 /*break*/, 1231];
                        case "bs:BsFillTelephoneFill": return [3 /*break*/, 1233];
                        case "bs:BsFillTelephoneForwardFill": return [3 /*break*/, 1235];
                        case "bs:BsFillTelephoneInboundFill": return [3 /*break*/, 1237];
                        case "bs:BsFillTelephoneMinusFill": return [3 /*break*/, 1239];
                        case "bs:BsFillTelephoneOutboundFill": return [3 /*break*/, 1241];
                        case "bs:BsFillTelephonePlusFill": return [3 /*break*/, 1243];
                        case "bs:BsFillTelephoneXFill": return [3 /*break*/, 1245];
                        case "bs:BsFillTerminalFill": return [3 /*break*/, 1247];
                        case "bs:BsFillThreadsFill": return [3 /*break*/, 1249];
                        case "bs:BsFillThunderboltFill": return [3 /*break*/, 1251];
                        case "bs:BsFillTicketDetailedFill": return [3 /*break*/, 1253];
                        case "bs:BsFillTicketFill": return [3 /*break*/, 1255];
                        case "bs:BsFillTicketPerforatedFill": return [3 /*break*/, 1257];
                        case "bs:BsFillTrainFreightFrontFill": return [3 /*break*/, 1259];
                        case "bs:BsFillTrainFrontFill": return [3 /*break*/, 1261];
                        case "bs:BsFillTrainLightrailFrontFill": return [3 /*break*/, 1263];
                        case "bs:BsFillTrashFill": return [3 /*break*/, 1265];
                        case "bs:BsFillTrash2Fill": return [3 /*break*/, 1267];
                        case "bs:BsFillTrash3Fill": return [3 /*break*/, 1269];
                        case "bs:BsFillTreeFill": return [3 /*break*/, 1271];
                        case "bs:BsFillTriangleFill": return [3 /*break*/, 1273];
                        case "bs:BsFillTrophyFill": return [3 /*break*/, 1275];
                        case "bs:BsFillTruckFrontFill": return [3 /*break*/, 1277];
                        case "bs:BsFillTvFill": return [3 /*break*/, 1279];
                        case "bs:BsFillUmbrellaFill": return [3 /*break*/, 1281];
                        case "bs:BsFillUnlockFill": return [3 /*break*/, 1283];
                        case "bs:BsFillUsbCFill": return [3 /*break*/, 1285];
                        case "bs:BsFillUsbDriveFill": return [3 /*break*/, 1287];
                        case "bs:BsFillUsbFill": return [3 /*break*/, 1289];
                        case "bs:BsFillUsbMicroFill": return [3 /*break*/, 1291];
                        case "bs:BsFillUsbMiniFill": return [3 /*break*/, 1293];
                        case "bs:BsFillUsbPlugFill": return [3 /*break*/, 1295];
                        case "bs:BsFillVinylFill": return [3 /*break*/, 1297];
                        case "bs:BsFillVolumeDownFill": return [3 /*break*/, 1299];
                        case "bs:BsFillVolumeMuteFill": return [3 /*break*/, 1301];
                        case "bs:BsFillVolumeOffFill": return [3 /*break*/, 1303];
                        case "bs:BsFillVolumeUpFill": return [3 /*break*/, 1305];
                        case "bs:BsFillWalletFill": return [3 /*break*/, 1307];
                        case "bs:BsFillWebcamFill": return [3 /*break*/, 1309];
                        case "bs:BsFillWrenchAdjustableCircleFill": return [3 /*break*/, 1311];
                        case "bs:BsFillXCircleFill": return [3 /*break*/, 1313];
                        case "bs:BsFillXDiamondFill": return [3 /*break*/, 1315];
                        case "bs:BsFillXOctagonFill": return [3 /*break*/, 1317];
                        case "bs:BsFillXSquareFill": return [3 /*break*/, 1319];
                        case "bs:BsReverseBackspaceReverse": return [3 /*break*/, 1321];
                        case "bs:BsReverseLayoutSidebarInsetReverse": return [3 /*break*/, 1323];
                        case "bs:BsReverseLayoutSidebarReverse": return [3 /*break*/, 1325];
                        case "bs:BsReverseLayoutTextSidebarReverse": return [3 /*break*/, 1327];
                        case "bs:BsReverseLayoutTextWindowReverse": return [3 /*break*/, 1329];
                        case "bs:BsReverseListColumnsReverse": return [3 /*break*/, 1331];
                        case "bs:Bs0CircleFill": return [3 /*break*/, 1333];
                        case "bs:Bs0Circle": return [3 /*break*/, 1335];
                        case "bs:Bs0SquareFill": return [3 /*break*/, 1337];
                        case "bs:Bs0Square": return [3 /*break*/, 1339];
                        case "bs:Bs1CircleFill": return [3 /*break*/, 1341];
                        case "bs:Bs1Circle": return [3 /*break*/, 1343];
                        case "bs:Bs1SquareFill": return [3 /*break*/, 1345];
                        case "bs:Bs1Square": return [3 /*break*/, 1347];
                        case "bs:Bs123": return [3 /*break*/, 1349];
                        case "bs:Bs2CircleFill": return [3 /*break*/, 1351];
                        case "bs:Bs2Circle": return [3 /*break*/, 1353];
                        case "bs:Bs2SquareFill": return [3 /*break*/, 1355];
                        case "bs:Bs2Square": return [3 /*break*/, 1357];
                        case "bs:Bs3CircleFill": return [3 /*break*/, 1359];
                        case "bs:Bs3Circle": return [3 /*break*/, 1361];
                        case "bs:Bs3SquareFill": return [3 /*break*/, 1363];
                        case "bs:Bs3Square": return [3 /*break*/, 1365];
                        case "bs:Bs4CircleFill": return [3 /*break*/, 1367];
                        case "bs:Bs4Circle": return [3 /*break*/, 1369];
                        case "bs:Bs4SquareFill": return [3 /*break*/, 1371];
                        case "bs:Bs4Square": return [3 /*break*/, 1373];
                        case "bs:Bs5CircleFill": return [3 /*break*/, 1375];
                        case "bs:Bs5Circle": return [3 /*break*/, 1377];
                        case "bs:Bs5SquareFill": return [3 /*break*/, 1379];
                        case "bs:Bs5Square": return [3 /*break*/, 1381];
                        case "bs:Bs6CircleFill": return [3 /*break*/, 1383];
                        case "bs:Bs6Circle": return [3 /*break*/, 1385];
                        case "bs:Bs6SquareFill": return [3 /*break*/, 1387];
                        case "bs:Bs6Square": return [3 /*break*/, 1389];
                        case "bs:Bs7CircleFill": return [3 /*break*/, 1391];
                        case "bs:Bs7Circle": return [3 /*break*/, 1393];
                        case "bs:Bs7SquareFill": return [3 /*break*/, 1395];
                        case "bs:Bs7Square": return [3 /*break*/, 1397];
                        case "bs:Bs8CircleFill": return [3 /*break*/, 1399];
                        case "bs:Bs8Circle": return [3 /*break*/, 1401];
                        case "bs:Bs8SquareFill": return [3 /*break*/, 1403];
                        case "bs:Bs8Square": return [3 /*break*/, 1405];
                        case "bs:Bs9CircleFill": return [3 /*break*/, 1407];
                        case "bs:Bs9Circle": return [3 /*break*/, 1409];
                        case "bs:Bs9SquareFill": return [3 /*break*/, 1411];
                        case "bs:Bs9Square": return [3 /*break*/, 1413];
                        case "bs:BsActivity": return [3 /*break*/, 1415];
                        case "bs:BsAirplaneEnginesFill": return [3 /*break*/, 1417];
                        case "bs:BsAirplaneEngines": return [3 /*break*/, 1419];
                        case "bs:BsAirplaneFill": return [3 /*break*/, 1421];
                        case "bs:BsAirplane": return [3 /*break*/, 1423];
                        case "bs:BsAlarmFill": return [3 /*break*/, 1425];
                        case "bs:BsAlarm": return [3 /*break*/, 1427];
                        case "bs:BsAlexa": return [3 /*break*/, 1429];
                        case "bs:BsAlignBottom": return [3 /*break*/, 1431];
                        case "bs:BsAlignCenter": return [3 /*break*/, 1433];
                        case "bs:BsAlignEnd": return [3 /*break*/, 1435];
                        case "bs:BsAlignMiddle": return [3 /*break*/, 1437];
                        case "bs:BsAlignStart": return [3 /*break*/, 1439];
                        case "bs:BsAlignTop": return [3 /*break*/, 1441];
                        case "bs:BsAlipay": return [3 /*break*/, 1443];
                        case "bs:BsAlphabetUppercase": return [3 /*break*/, 1445];
                        case "bs:BsAlphabet": return [3 /*break*/, 1447];
                        case "bs:BsAlt": return [3 /*break*/, 1449];
                        case "bs:BsAmazon": return [3 /*break*/, 1451];
                        case "bs:BsAmd": return [3 /*break*/, 1453];
                        case "bs:BsAndroid": return [3 /*break*/, 1455];
                        case "bs:BsAndroid2": return [3 /*break*/, 1457];
                        case "bs:BsAppIndicator": return [3 /*break*/, 1459];
                        case "bs:BsApp": return [3 /*break*/, 1461];
                        case "bs:BsApple": return [3 /*break*/, 1463];
                        case "bs:BsArchiveFill": return [3 /*break*/, 1465];
                        case "bs:BsArchive": return [3 /*break*/, 1467];
                        case "bs:BsArrow90DegDown": return [3 /*break*/, 1469];
                        case "bs:BsArrow90DegLeft": return [3 /*break*/, 1471];
                        case "bs:BsArrow90DegRight": return [3 /*break*/, 1473];
                        case "bs:BsArrow90DegUp": return [3 /*break*/, 1475];
                        case "bs:BsArrowBarDown": return [3 /*break*/, 1477];
                        case "bs:BsArrowBarLeft": return [3 /*break*/, 1479];
                        case "bs:BsArrowBarRight": return [3 /*break*/, 1481];
                        case "bs:BsArrowBarUp": return [3 /*break*/, 1483];
                        case "bs:BsArrowClockwise": return [3 /*break*/, 1485];
                        case "bs:BsArrowCounterclockwise": return [3 /*break*/, 1487];
                        case "bs:BsArrowDownCircleFill": return [3 /*break*/, 1489];
                        case "bs:BsArrowDownCircle": return [3 /*break*/, 1491];
                        case "bs:BsArrowDownLeftCircleFill": return [3 /*break*/, 1493];
                        case "bs:BsArrowDownLeftCircle": return [3 /*break*/, 1495];
                        case "bs:BsArrowDownLeftSquareFill": return [3 /*break*/, 1497];
                        case "bs:BsArrowDownLeftSquare": return [3 /*break*/, 1499];
                        case "bs:BsArrowDownLeft": return [3 /*break*/, 1501];
                        case "bs:BsArrowDownRightCircleFill": return [3 /*break*/, 1503];
                        case "bs:BsArrowDownRightCircle": return [3 /*break*/, 1505];
                        case "bs:BsArrowDownRightSquareFill": return [3 /*break*/, 1507];
                        case "bs:BsArrowDownRightSquare": return [3 /*break*/, 1509];
                        case "bs:BsArrowDownRight": return [3 /*break*/, 1511];
                        case "bs:BsArrowDownShort": return [3 /*break*/, 1513];
                        case "bs:BsArrowDownSquareFill": return [3 /*break*/, 1515];
                        case "bs:BsArrowDownSquare": return [3 /*break*/, 1517];
                        case "bs:BsArrowDownUp": return [3 /*break*/, 1519];
                        case "bs:BsArrowDown": return [3 /*break*/, 1521];
                        case "bs:BsArrowLeftCircleFill": return [3 /*break*/, 1523];
                        case "bs:BsArrowLeftCircle": return [3 /*break*/, 1525];
                        case "bs:BsArrowLeftRight": return [3 /*break*/, 1527];
                        case "bs:BsArrowLeftShort": return [3 /*break*/, 1529];
                        case "bs:BsArrowLeftSquareFill": return [3 /*break*/, 1531];
                        case "bs:BsArrowLeftSquare": return [3 /*break*/, 1533];
                        case "bs:BsArrowLeft": return [3 /*break*/, 1535];
                        case "bs:BsArrowRepeat": return [3 /*break*/, 1537];
                        case "bs:BsArrowReturnLeft": return [3 /*break*/, 1539];
                        case "bs:BsArrowReturnRight": return [3 /*break*/, 1541];
                        case "bs:BsArrowRightCircleFill": return [3 /*break*/, 1543];
                        case "bs:BsArrowRightCircle": return [3 /*break*/, 1545];
                        case "bs:BsArrowRightShort": return [3 /*break*/, 1547];
                        case "bs:BsArrowRightSquareFill": return [3 /*break*/, 1549];
                        case "bs:BsArrowRightSquare": return [3 /*break*/, 1551];
                        case "bs:BsArrowRight": return [3 /*break*/, 1553];
                        case "bs:BsArrowThroughHeartFill": return [3 /*break*/, 1555];
                        case "bs:BsArrowThroughHeart": return [3 /*break*/, 1557];
                        case "bs:BsArrowUpCircleFill": return [3 /*break*/, 1559];
                        case "bs:BsArrowUpCircle": return [3 /*break*/, 1561];
                        case "bs:BsArrowUpLeftCircleFill": return [3 /*break*/, 1563];
                        case "bs:BsArrowUpLeftCircle": return [3 /*break*/, 1565];
                        case "bs:BsArrowUpLeftSquareFill": return [3 /*break*/, 1567];
                        case "bs:BsArrowUpLeftSquare": return [3 /*break*/, 1569];
                        case "bs:BsArrowUpLeft": return [3 /*break*/, 1571];
                        case "bs:BsArrowUpRightCircleFill": return [3 /*break*/, 1573];
                        case "bs:BsArrowUpRightCircle": return [3 /*break*/, 1575];
                        case "bs:BsArrowUpRightSquareFill": return [3 /*break*/, 1577];
                        case "bs:BsArrowUpRightSquare": return [3 /*break*/, 1579];
                        case "bs:BsArrowUpRight": return [3 /*break*/, 1581];
                        case "bs:BsArrowUpShort": return [3 /*break*/, 1583];
                        case "bs:BsArrowUpSquareFill": return [3 /*break*/, 1585];
                        case "bs:BsArrowUpSquare": return [3 /*break*/, 1587];
                        case "bs:BsArrowUp": return [3 /*break*/, 1589];
                        case "bs:BsArrowsAngleContract": return [3 /*break*/, 1591];
                        case "bs:BsArrowsAngleExpand": return [3 /*break*/, 1593];
                        case "bs:BsArrowsCollapseVertical": return [3 /*break*/, 1595];
                        case "bs:BsArrowsCollapse": return [3 /*break*/, 1597];
                        case "bs:BsArrowsExpandVertical": return [3 /*break*/, 1599];
                        case "bs:BsArrowsExpand": return [3 /*break*/, 1601];
                        case "bs:BsArrowsFullscreen": return [3 /*break*/, 1603];
                        case "bs:BsArrowsMove": return [3 /*break*/, 1605];
                        case "bs:BsArrowsVertical": return [3 /*break*/, 1607];
                        case "bs:BsArrows": return [3 /*break*/, 1609];
                        case "bs:BsAspectRatioFill": return [3 /*break*/, 1611];
                        case "bs:BsAspectRatio": return [3 /*break*/, 1613];
                        case "bs:BsAsterisk": return [3 /*break*/, 1615];
                        case "bs:BsAt": return [3 /*break*/, 1617];
                        case "bs:BsAwardFill": return [3 /*break*/, 1619];
                        case "bs:BsAward": return [3 /*break*/, 1621];
                        case "bs:BsBack": return [3 /*break*/, 1623];
                        case "bs:BsBackpackFill": return [3 /*break*/, 1625];
                        case "bs:BsBackpack": return [3 /*break*/, 1627];
                        case "bs:BsBackpack2Fill": return [3 /*break*/, 1629];
                        case "bs:BsBackpack2": return [3 /*break*/, 1631];
                        case "bs:BsBackpack3Fill": return [3 /*break*/, 1633];
                        case "bs:BsBackpack3": return [3 /*break*/, 1635];
                        case "bs:BsBackpack4Fill": return [3 /*break*/, 1637];
                        case "bs:BsBackpack4": return [3 /*break*/, 1639];
                        case "bs:BsBackspaceFill": return [3 /*break*/, 1641];
                        case "bs:BsBackspaceReverseFill": return [3 /*break*/, 1643];
                        case "bs:BsBackspaceReverse": return [3 /*break*/, 1645];
                        case "bs:BsBackspace": return [3 /*break*/, 1647];
                        case "bs:BsBadge3dFill": return [3 /*break*/, 1649];
                        case "bs:BsBadge3D": return [3 /*break*/, 1651];
                        case "bs:BsBadge4kFill": return [3 /*break*/, 1653];
                        case "bs:BsBadge4K": return [3 /*break*/, 1655];
                        case "bs:BsBadge8kFill": return [3 /*break*/, 1657];
                        case "bs:BsBadge8K": return [3 /*break*/, 1659];
                        case "bs:BsBadgeAdFill": return [3 /*break*/, 1661];
                        case "bs:BsBadgeAd": return [3 /*break*/, 1663];
                        case "bs:BsBadgeArFill": return [3 /*break*/, 1665];
                        case "bs:BsBadgeAr": return [3 /*break*/, 1667];
                        case "bs:BsBadgeCcFill": return [3 /*break*/, 1669];
                        case "bs:BsBadgeCc": return [3 /*break*/, 1671];
                        case "bs:BsBadgeHdFill": return [3 /*break*/, 1673];
                        case "bs:BsBadgeHd": return [3 /*break*/, 1675];
                        case "bs:BsBadgeSdFill": return [3 /*break*/, 1677];
                        case "bs:BsBadgeSd": return [3 /*break*/, 1679];
                        case "bs:BsBadgeTmFill": return [3 /*break*/, 1681];
                        case "bs:BsBadgeTm": return [3 /*break*/, 1683];
                        case "bs:BsBadgeVoFill": return [3 /*break*/, 1685];
                        case "bs:BsBadgeVo": return [3 /*break*/, 1687];
                        case "bs:BsBadgeVrFill": return [3 /*break*/, 1689];
                        case "bs:BsBadgeVr": return [3 /*break*/, 1691];
                        case "bs:BsBadgeWcFill": return [3 /*break*/, 1693];
                        case "bs:BsBadgeWc": return [3 /*break*/, 1695];
                        case "bs:BsBagCheckFill": return [3 /*break*/, 1697];
                        case "bs:BsBagCheck": return [3 /*break*/, 1699];
                        case "bs:BsBagDashFill": return [3 /*break*/, 1701];
                        case "bs:BsBagDash": return [3 /*break*/, 1703];
                        case "bs:BsBagFill": return [3 /*break*/, 1705];
                        case "bs:BsBagHeartFill": return [3 /*break*/, 1707];
                        case "bs:BsBagHeart": return [3 /*break*/, 1709];
                        case "bs:BsBagPlusFill": return [3 /*break*/, 1711];
                        case "bs:BsBagPlus": return [3 /*break*/, 1713];
                        case "bs:BsBagXFill": return [3 /*break*/, 1715];
                        case "bs:BsBagX": return [3 /*break*/, 1717];
                        case "bs:BsBag": return [3 /*break*/, 1719];
                        case "bs:BsBalloonFill": return [3 /*break*/, 1721];
                        case "bs:BsBalloonHeartFill": return [3 /*break*/, 1723];
                        case "bs:BsBalloonHeart": return [3 /*break*/, 1725];
                        case "bs:BsBalloon": return [3 /*break*/, 1727];
                        case "bs:BsBanFill": return [3 /*break*/, 1729];
                        case "bs:BsBan": return [3 /*break*/, 1731];
                        case "bs:BsBandaidFill": return [3 /*break*/, 1733];
                        case "bs:BsBandaid": return [3 /*break*/, 1735];
                        case "bs:BsBank": return [3 /*break*/, 1737];
                        case "bs:BsBank2": return [3 /*break*/, 1739];
                        case "bs:BsBarChartFill": return [3 /*break*/, 1741];
                        case "bs:BsBarChartLineFill": return [3 /*break*/, 1743];
                        case "bs:BsBarChartLine": return [3 /*break*/, 1745];
                        case "bs:BsBarChartSteps": return [3 /*break*/, 1747];
                        case "bs:BsBarChart": return [3 /*break*/, 1749];
                        case "bs:BsBasketFill": return [3 /*break*/, 1751];
                        case "bs:BsBasket": return [3 /*break*/, 1753];
                        case "bs:BsBasket2Fill": return [3 /*break*/, 1755];
                        case "bs:BsBasket2": return [3 /*break*/, 1757];
                        case "bs:BsBasket3Fill": return [3 /*break*/, 1759];
                        case "bs:BsBasket3": return [3 /*break*/, 1761];
                        case "bs:BsBatteryCharging": return [3 /*break*/, 1763];
                        case "bs:BsBatteryFull": return [3 /*break*/, 1765];
                        case "bs:BsBatteryHalf": return [3 /*break*/, 1767];
                        case "bs:BsBattery": return [3 /*break*/, 1769];
                        case "bs:BsBehance": return [3 /*break*/, 1771];
                        case "bs:BsBellFill": return [3 /*break*/, 1773];
                        case "bs:BsBellSlashFill": return [3 /*break*/, 1775];
                        case "bs:BsBellSlash": return [3 /*break*/, 1777];
                        case "bs:BsBell": return [3 /*break*/, 1779];
                        case "bs:BsBezier": return [3 /*break*/, 1781];
                        case "bs:BsBezier2": return [3 /*break*/, 1783];
                        case "bs:BsBicycle": return [3 /*break*/, 1785];
                        case "bs:BsBing": return [3 /*break*/, 1787];
                        case "bs:BsBinocularsFill": return [3 /*break*/, 1789];
                        case "bs:BsBinoculars": return [3 /*break*/, 1791];
                        case "bs:BsBlockquoteLeft": return [3 /*break*/, 1793];
                        case "bs:BsBlockquoteRight": return [3 /*break*/, 1795];
                        case "bs:BsBluetooth": return [3 /*break*/, 1797];
                        case "bs:BsBodyText": return [3 /*break*/, 1799];
                        case "bs:BsBookFill": return [3 /*break*/, 1801];
                        case "bs:BsBookHalf": return [3 /*break*/, 1803];
                        case "bs:BsBook": return [3 /*break*/, 1805];
                        case "bs:BsBookmarkCheckFill": return [3 /*break*/, 1807];
                        case "bs:BsBookmarkCheck": return [3 /*break*/, 1809];
                        case "bs:BsBookmarkDashFill": return [3 /*break*/, 1811];
                        case "bs:BsBookmarkDash": return [3 /*break*/, 1813];
                        case "bs:BsBookmarkFill": return [3 /*break*/, 1815];
                        case "bs:BsBookmarkHeartFill": return [3 /*break*/, 1817];
                        case "bs:BsBookmarkHeart": return [3 /*break*/, 1819];
                        case "bs:BsBookmarkPlusFill": return [3 /*break*/, 1821];
                        case "bs:BsBookmarkPlus": return [3 /*break*/, 1823];
                        case "bs:BsBookmarkStarFill": return [3 /*break*/, 1825];
                        case "bs:BsBookmarkStar": return [3 /*break*/, 1827];
                        case "bs:BsBookmarkXFill": return [3 /*break*/, 1829];
                        case "bs:BsBookmarkX": return [3 /*break*/, 1831];
                        case "bs:BsBookmark": return [3 /*break*/, 1833];
                        case "bs:BsBookmarksFill": return [3 /*break*/, 1835];
                        case "bs:BsBookmarks": return [3 /*break*/, 1837];
                        case "bs:BsBookshelf": return [3 /*break*/, 1839];
                        case "bs:BsBoomboxFill": return [3 /*break*/, 1841];
                        case "bs:BsBoombox": return [3 /*break*/, 1843];
                        case "bs:BsBootstrapFill": return [3 /*break*/, 1845];
                        case "bs:BsBootstrapReboot": return [3 /*break*/, 1847];
                        case "bs:BsBootstrap": return [3 /*break*/, 1849];
                        case "bs:BsBorderAll": return [3 /*break*/, 1851];
                        case "bs:BsBorderBottom": return [3 /*break*/, 1853];
                        case "bs:BsBorderCenter": return [3 /*break*/, 1855];
                        case "bs:BsBorderInner": return [3 /*break*/, 1857];
                        case "bs:BsBorderLeft": return [3 /*break*/, 1859];
                        case "bs:BsBorderMiddle": return [3 /*break*/, 1861];
                        case "bs:BsBorderOuter": return [3 /*break*/, 1863];
                        case "bs:BsBorderRight": return [3 /*break*/, 1865];
                        case "bs:BsBorderStyle": return [3 /*break*/, 1867];
                        case "bs:BsBorderTop": return [3 /*break*/, 1869];
                        case "bs:BsBorderWidth": return [3 /*break*/, 1871];
                        case "bs:BsBorder": return [3 /*break*/, 1873];
                        case "bs:BsBoundingBoxCircles": return [3 /*break*/, 1875];
                        case "bs:BsBoundingBox": return [3 /*break*/, 1877];
                        case "bs:BsBoxArrowDownLeft": return [3 /*break*/, 1879];
                        case "bs:BsBoxArrowDownRight": return [3 /*break*/, 1881];
                        case "bs:BsBoxArrowDown": return [3 /*break*/, 1883];
                        case "bs:BsBoxArrowInDownLeft": return [3 /*break*/, 1885];
                        case "bs:BsBoxArrowInDownRight": return [3 /*break*/, 1887];
                        case "bs:BsBoxArrowInDown": return [3 /*break*/, 1889];
                        case "bs:BsBoxArrowInLeft": return [3 /*break*/, 1891];
                        case "bs:BsBoxArrowInRight": return [3 /*break*/, 1893];
                        case "bs:BsBoxArrowInUpLeft": return [3 /*break*/, 1895];
                        case "bs:BsBoxArrowInUpRight": return [3 /*break*/, 1897];
                        case "bs:BsBoxArrowInUp": return [3 /*break*/, 1899];
                        case "bs:BsBoxArrowLeft": return [3 /*break*/, 1901];
                        case "bs:BsBoxArrowRight": return [3 /*break*/, 1903];
                        case "bs:BsBoxArrowUpLeft": return [3 /*break*/, 1905];
                        case "bs:BsBoxArrowUpRight": return [3 /*break*/, 1907];
                        case "bs:BsBoxArrowUp": return [3 /*break*/, 1909];
                        case "bs:BsBoxFill": return [3 /*break*/, 1911];
                        case "bs:BsBoxSeamFill": return [3 /*break*/, 1913];
                        case "bs:BsBoxSeam": return [3 /*break*/, 1915];
                        case "bs:BsBox": return [3 /*break*/, 1917];
                        case "bs:BsBox2Fill": return [3 /*break*/, 1919];
                        case "bs:BsBox2HeartFill": return [3 /*break*/, 1921];
                        case "bs:BsBox2Heart": return [3 /*break*/, 1923];
                        case "bs:BsBox2": return [3 /*break*/, 1925];
                        case "bs:BsBoxes": return [3 /*break*/, 1927];
                        case "bs:BsBracesAsterisk": return [3 /*break*/, 1929];
                        case "bs:BsBraces": return [3 /*break*/, 1931];
                        case "bs:BsBricks": return [3 /*break*/, 1933];
                        case "bs:BsBriefcaseFill": return [3 /*break*/, 1935];
                        case "bs:BsBriefcase": return [3 /*break*/, 1937];
                        case "bs:BsBrightnessAltHighFill": return [3 /*break*/, 1939];
                        case "bs:BsBrightnessAltHigh": return [3 /*break*/, 1941];
                        case "bs:BsBrightnessAltLowFill": return [3 /*break*/, 1943];
                        case "bs:BsBrightnessAltLow": return [3 /*break*/, 1945];
                        case "bs:BsBrightnessHighFill": return [3 /*break*/, 1947];
                        case "bs:BsBrightnessHigh": return [3 /*break*/, 1949];
                        case "bs:BsBrightnessLowFill": return [3 /*break*/, 1951];
                        case "bs:BsBrightnessLow": return [3 /*break*/, 1953];
                        case "bs:BsBrilliance": return [3 /*break*/, 1955];
                        case "bs:BsBroadcastPin": return [3 /*break*/, 1957];
                        case "bs:BsBroadcast": return [3 /*break*/, 1959];
                        case "bs:BsBrowserChrome": return [3 /*break*/, 1961];
                        case "bs:BsBrowserEdge": return [3 /*break*/, 1963];
                        case "bs:BsBrowserFirefox": return [3 /*break*/, 1965];
                        case "bs:BsBrowserSafari": return [3 /*break*/, 1967];
                        case "bs:BsBrushFill": return [3 /*break*/, 1969];
                        case "bs:BsBrush": return [3 /*break*/, 1971];
                        case "bs:BsBucketFill": return [3 /*break*/, 1973];
                        case "bs:BsBucket": return [3 /*break*/, 1975];
                        case "bs:BsBugFill": return [3 /*break*/, 1977];
                        case "bs:BsBug": return [3 /*break*/, 1979];
                        case "bs:BsBuildingAdd": return [3 /*break*/, 1981];
                        case "bs:BsBuildingCheck": return [3 /*break*/, 1983];
                        case "bs:BsBuildingDash": return [3 /*break*/, 1985];
                        case "bs:BsBuildingDown": return [3 /*break*/, 1987];
                        case "bs:BsBuildingExclamation": return [3 /*break*/, 1989];
                        case "bs:BsBuildingFillAdd": return [3 /*break*/, 1991];
                        case "bs:BsBuildingFillCheck": return [3 /*break*/, 1993];
                        case "bs:BsBuildingFillDash": return [3 /*break*/, 1995];
                        case "bs:BsBuildingFillDown": return [3 /*break*/, 1997];
                        case "bs:BsBuildingFillExclamation": return [3 /*break*/, 1999];
                    }
                    return [3 /*break*/, 2001];
                case 1: return [4 /*yield*/, import("react-icons/bs")];
                case 2:
                    BsFill0CircleFill = (_b.sent()).BsFill0CircleFill;
                    return [2 /*return*/, BsFill0CircleFill];
                case 3: return [4 /*yield*/, import("react-icons/bs")];
                case 4:
                    BsFill0SquareFill = (_b.sent()).BsFill0SquareFill;
                    return [2 /*return*/, BsFill0SquareFill];
                case 5: return [4 /*yield*/, import("react-icons/bs")];
                case 6:
                    BsFill1CircleFill = (_b.sent()).BsFill1CircleFill;
                    return [2 /*return*/, BsFill1CircleFill];
                case 7: return [4 /*yield*/, import("react-icons/bs")];
                case 8:
                    BsFill1SquareFill = (_b.sent()).BsFill1SquareFill;
                    return [2 /*return*/, BsFill1SquareFill];
                case 9: return [4 /*yield*/, import("react-icons/bs")];
                case 10:
                    BsFill2CircleFill = (_b.sent()).BsFill2CircleFill;
                    return [2 /*return*/, BsFill2CircleFill];
                case 11: return [4 /*yield*/, import("react-icons/bs")];
                case 12:
                    BsFill2SquareFill = (_b.sent()).BsFill2SquareFill;
                    return [2 /*return*/, BsFill2SquareFill];
                case 13: return [4 /*yield*/, import("react-icons/bs")];
                case 14:
                    BsFill3CircleFill = (_b.sent()).BsFill3CircleFill;
                    return [2 /*return*/, BsFill3CircleFill];
                case 15: return [4 /*yield*/, import("react-icons/bs")];
                case 16:
                    BsFill3SquareFill = (_b.sent()).BsFill3SquareFill;
                    return [2 /*return*/, BsFill3SquareFill];
                case 17: return [4 /*yield*/, import("react-icons/bs")];
                case 18:
                    BsFill4CircleFill = (_b.sent()).BsFill4CircleFill;
                    return [2 /*return*/, BsFill4CircleFill];
                case 19: return [4 /*yield*/, import("react-icons/bs")];
                case 20:
                    BsFill4SquareFill = (_b.sent()).BsFill4SquareFill;
                    return [2 /*return*/, BsFill4SquareFill];
                case 21: return [4 /*yield*/, import("react-icons/bs")];
                case 22:
                    BsFill5CircleFill = (_b.sent()).BsFill5CircleFill;
                    return [2 /*return*/, BsFill5CircleFill];
                case 23: return [4 /*yield*/, import("react-icons/bs")];
                case 24:
                    BsFill5SquareFill = (_b.sent()).BsFill5SquareFill;
                    return [2 /*return*/, BsFill5SquareFill];
                case 25: return [4 /*yield*/, import("react-icons/bs")];
                case 26:
                    BsFill6CircleFill = (_b.sent()).BsFill6CircleFill;
                    return [2 /*return*/, BsFill6CircleFill];
                case 27: return [4 /*yield*/, import("react-icons/bs")];
                case 28:
                    BsFill6SquareFill = (_b.sent()).BsFill6SquareFill;
                    return [2 /*return*/, BsFill6SquareFill];
                case 29: return [4 /*yield*/, import("react-icons/bs")];
                case 30:
                    BsFill7CircleFill = (_b.sent()).BsFill7CircleFill;
                    return [2 /*return*/, BsFill7CircleFill];
                case 31: return [4 /*yield*/, import("react-icons/bs")];
                case 32:
                    BsFill7SquareFill = (_b.sent()).BsFill7SquareFill;
                    return [2 /*return*/, BsFill7SquareFill];
                case 33: return [4 /*yield*/, import("react-icons/bs")];
                case 34:
                    BsFill8CircleFill = (_b.sent()).BsFill8CircleFill;
                    return [2 /*return*/, BsFill8CircleFill];
                case 35: return [4 /*yield*/, import("react-icons/bs")];
                case 36:
                    BsFill8SquareFill = (_b.sent()).BsFill8SquareFill;
                    return [2 /*return*/, BsFill8SquareFill];
                case 37: return [4 /*yield*/, import("react-icons/bs")];
                case 38:
                    BsFill9CircleFill = (_b.sent()).BsFill9CircleFill;
                    return [2 /*return*/, BsFill9CircleFill];
                case 39: return [4 /*yield*/, import("react-icons/bs")];
                case 40:
                    BsFill9SquareFill = (_b.sent()).BsFill9SquareFill;
                    return [2 /*return*/, BsFill9SquareFill];
                case 41: return [4 /*yield*/, import("react-icons/bs")];
                case 42:
                    BsFillAirplaneEnginesFill = (_b.sent()).BsFillAirplaneEnginesFill;
                    return [2 /*return*/, BsFillAirplaneEnginesFill];
                case 43: return [4 /*yield*/, import("react-icons/bs")];
                case 44:
                    BsFillAirplaneFill = (_b.sent()).BsFillAirplaneFill;
                    return [2 /*return*/, BsFillAirplaneFill];
                case 45: return [4 /*yield*/, import("react-icons/bs")];
                case 46:
                    BsFillAlarmFill = (_b.sent()).BsFillAlarmFill;
                    return [2 /*return*/, BsFillAlarmFill];
                case 47: return [4 /*yield*/, import("react-icons/bs")];
                case 48:
                    BsFillArchiveFill = (_b.sent()).BsFillArchiveFill;
                    return [2 /*return*/, BsFillArchiveFill];
                case 49: return [4 /*yield*/, import("react-icons/bs")];
                case 50:
                    BsFillArrowDownCircleFill = (_b.sent()).BsFillArrowDownCircleFill;
                    return [2 /*return*/, BsFillArrowDownCircleFill];
                case 51: return [4 /*yield*/, import("react-icons/bs")];
                case 52:
                    BsFillArrowDownLeftCircleFill = (_b.sent()).BsFillArrowDownLeftCircleFill;
                    return [2 /*return*/, BsFillArrowDownLeftCircleFill];
                case 53: return [4 /*yield*/, import("react-icons/bs")];
                case 54:
                    BsFillArrowDownLeftSquareFill = (_b.sent()).BsFillArrowDownLeftSquareFill;
                    return [2 /*return*/, BsFillArrowDownLeftSquareFill];
                case 55: return [4 /*yield*/, import("react-icons/bs")];
                case 56:
                    BsFillArrowDownRightCircleFill = (_b.sent()).BsFillArrowDownRightCircleFill;
                    return [2 /*return*/, BsFillArrowDownRightCircleFill];
                case 57: return [4 /*yield*/, import("react-icons/bs")];
                case 58:
                    BsFillArrowDownRightSquareFill = (_b.sent()).BsFillArrowDownRightSquareFill;
                    return [2 /*return*/, BsFillArrowDownRightSquareFill];
                case 59: return [4 /*yield*/, import("react-icons/bs")];
                case 60:
                    BsFillArrowDownSquareFill = (_b.sent()).BsFillArrowDownSquareFill;
                    return [2 /*return*/, BsFillArrowDownSquareFill];
                case 61: return [4 /*yield*/, import("react-icons/bs")];
                case 62:
                    BsFillArrowLeftCircleFill = (_b.sent()).BsFillArrowLeftCircleFill;
                    return [2 /*return*/, BsFillArrowLeftCircleFill];
                case 63: return [4 /*yield*/, import("react-icons/bs")];
                case 64:
                    BsFillArrowLeftSquareFill = (_b.sent()).BsFillArrowLeftSquareFill;
                    return [2 /*return*/, BsFillArrowLeftSquareFill];
                case 65: return [4 /*yield*/, import("react-icons/bs")];
                case 66:
                    BsFillArrowRightCircleFill = (_b.sent()).BsFillArrowRightCircleFill;
                    return [2 /*return*/, BsFillArrowRightCircleFill];
                case 67: return [4 /*yield*/, import("react-icons/bs")];
                case 68:
                    BsFillArrowRightSquareFill = (_b.sent()).BsFillArrowRightSquareFill;
                    return [2 /*return*/, BsFillArrowRightSquareFill];
                case 69: return [4 /*yield*/, import("react-icons/bs")];
                case 70:
                    BsFillArrowThroughHeartFill = (_b.sent()).BsFillArrowThroughHeartFill;
                    return [2 /*return*/, BsFillArrowThroughHeartFill];
                case 71: return [4 /*yield*/, import("react-icons/bs")];
                case 72:
                    BsFillArrowUpCircleFill = (_b.sent()).BsFillArrowUpCircleFill;
                    return [2 /*return*/, BsFillArrowUpCircleFill];
                case 73: return [4 /*yield*/, import("react-icons/bs")];
                case 74:
                    BsFillArrowUpLeftCircleFill = (_b.sent()).BsFillArrowUpLeftCircleFill;
                    return [2 /*return*/, BsFillArrowUpLeftCircleFill];
                case 75: return [4 /*yield*/, import("react-icons/bs")];
                case 76:
                    BsFillArrowUpLeftSquareFill = (_b.sent()).BsFillArrowUpLeftSquareFill;
                    return [2 /*return*/, BsFillArrowUpLeftSquareFill];
                case 77: return [4 /*yield*/, import("react-icons/bs")];
                case 78:
                    BsFillArrowUpRightCircleFill = (_b.sent()).BsFillArrowUpRightCircleFill;
                    return [2 /*return*/, BsFillArrowUpRightCircleFill];
                case 79: return [4 /*yield*/, import("react-icons/bs")];
                case 80:
                    BsFillArrowUpRightSquareFill = (_b.sent()).BsFillArrowUpRightSquareFill;
                    return [2 /*return*/, BsFillArrowUpRightSquareFill];
                case 81: return [4 /*yield*/, import("react-icons/bs")];
                case 82:
                    BsFillArrowUpSquareFill = (_b.sent()).BsFillArrowUpSquareFill;
                    return [2 /*return*/, BsFillArrowUpSquareFill];
                case 83: return [4 /*yield*/, import("react-icons/bs")];
                case 84:
                    BsFillAspectRatioFill = (_b.sent()).BsFillAspectRatioFill;
                    return [2 /*return*/, BsFillAspectRatioFill];
                case 85: return [4 /*yield*/, import("react-icons/bs")];
                case 86:
                    BsFillAwardFill = (_b.sent()).BsFillAwardFill;
                    return [2 /*return*/, BsFillAwardFill];
                case 87: return [4 /*yield*/, import("react-icons/bs")];
                case 88:
                    BsFillBackpackFill = (_b.sent()).BsFillBackpackFill;
                    return [2 /*return*/, BsFillBackpackFill];
                case 89: return [4 /*yield*/, import("react-icons/bs")];
                case 90:
                    BsFillBackpack2Fill = (_b.sent()).BsFillBackpack2Fill;
                    return [2 /*return*/, BsFillBackpack2Fill];
                case 91: return [4 /*yield*/, import("react-icons/bs")];
                case 92:
                    BsFillBackpack3Fill = (_b.sent()).BsFillBackpack3Fill;
                    return [2 /*return*/, BsFillBackpack3Fill];
                case 93: return [4 /*yield*/, import("react-icons/bs")];
                case 94:
                    BsFillBackpack4Fill = (_b.sent()).BsFillBackpack4Fill;
                    return [2 /*return*/, BsFillBackpack4Fill];
                case 95: return [4 /*yield*/, import("react-icons/bs")];
                case 96:
                    BsFillBackspaceFill = (_b.sent()).BsFillBackspaceFill;
                    return [2 /*return*/, BsFillBackspaceFill];
                case 97: return [4 /*yield*/, import("react-icons/bs")];
                case 98:
                    BsFillBackspaceReverseFill = (_b.sent()).BsFillBackspaceReverseFill;
                    return [2 /*return*/, BsFillBackspaceReverseFill];
                case 99: return [4 /*yield*/, import("react-icons/bs")];
                case 100:
                    BsFillBadge3dFill = (_b.sent()).BsFillBadge3dFill;
                    return [2 /*return*/, BsFillBadge3dFill];
                case 101: return [4 /*yield*/, import("react-icons/bs")];
                case 102:
                    BsFillBadge4kFill = (_b.sent()).BsFillBadge4kFill;
                    return [2 /*return*/, BsFillBadge4kFill];
                case 103: return [4 /*yield*/, import("react-icons/bs")];
                case 104:
                    BsFillBadge8kFill = (_b.sent()).BsFillBadge8kFill;
                    return [2 /*return*/, BsFillBadge8kFill];
                case 105: return [4 /*yield*/, import("react-icons/bs")];
                case 106:
                    BsFillBadgeAdFill = (_b.sent()).BsFillBadgeAdFill;
                    return [2 /*return*/, BsFillBadgeAdFill];
                case 107: return [4 /*yield*/, import("react-icons/bs")];
                case 108:
                    BsFillBadgeArFill = (_b.sent()).BsFillBadgeArFill;
                    return [2 /*return*/, BsFillBadgeArFill];
                case 109: return [4 /*yield*/, import("react-icons/bs")];
                case 110:
                    BsFillBadgeCcFill = (_b.sent()).BsFillBadgeCcFill;
                    return [2 /*return*/, BsFillBadgeCcFill];
                case 111: return [4 /*yield*/, import("react-icons/bs")];
                case 112:
                    BsFillBadgeHdFill = (_b.sent()).BsFillBadgeHdFill;
                    return [2 /*return*/, BsFillBadgeHdFill];
                case 113: return [4 /*yield*/, import("react-icons/bs")];
                case 114:
                    BsFillBadgeSdFill = (_b.sent()).BsFillBadgeSdFill;
                    return [2 /*return*/, BsFillBadgeSdFill];
                case 115: return [4 /*yield*/, import("react-icons/bs")];
                case 116:
                    BsFillBadgeTmFill = (_b.sent()).BsFillBadgeTmFill;
                    return [2 /*return*/, BsFillBadgeTmFill];
                case 117: return [4 /*yield*/, import("react-icons/bs")];
                case 118:
                    BsFillBadgeVoFill = (_b.sent()).BsFillBadgeVoFill;
                    return [2 /*return*/, BsFillBadgeVoFill];
                case 119: return [4 /*yield*/, import("react-icons/bs")];
                case 120:
                    BsFillBadgeVrFill = (_b.sent()).BsFillBadgeVrFill;
                    return [2 /*return*/, BsFillBadgeVrFill];
                case 121: return [4 /*yield*/, import("react-icons/bs")];
                case 122:
                    BsFillBadgeWcFill = (_b.sent()).BsFillBadgeWcFill;
                    return [2 /*return*/, BsFillBadgeWcFill];
                case 123: return [4 /*yield*/, import("react-icons/bs")];
                case 124:
                    BsFillBagCheckFill = (_b.sent()).BsFillBagCheckFill;
                    return [2 /*return*/, BsFillBagCheckFill];
                case 125: return [4 /*yield*/, import("react-icons/bs")];
                case 126:
                    BsFillBagDashFill = (_b.sent()).BsFillBagDashFill;
                    return [2 /*return*/, BsFillBagDashFill];
                case 127: return [4 /*yield*/, import("react-icons/bs")];
                case 128:
                    BsFillBagFill = (_b.sent()).BsFillBagFill;
                    return [2 /*return*/, BsFillBagFill];
                case 129: return [4 /*yield*/, import("react-icons/bs")];
                case 130:
                    BsFillBagHeartFill = (_b.sent()).BsFillBagHeartFill;
                    return [2 /*return*/, BsFillBagHeartFill];
                case 131: return [4 /*yield*/, import("react-icons/bs")];
                case 132:
                    BsFillBagPlusFill = (_b.sent()).BsFillBagPlusFill;
                    return [2 /*return*/, BsFillBagPlusFill];
                case 133: return [4 /*yield*/, import("react-icons/bs")];
                case 134:
                    BsFillBagXFill = (_b.sent()).BsFillBagXFill;
                    return [2 /*return*/, BsFillBagXFill];
                case 135: return [4 /*yield*/, import("react-icons/bs")];
                case 136:
                    BsFillBalloonFill = (_b.sent()).BsFillBalloonFill;
                    return [2 /*return*/, BsFillBalloonFill];
                case 137: return [4 /*yield*/, import("react-icons/bs")];
                case 138:
                    BsFillBalloonHeartFill = (_b.sent()).BsFillBalloonHeartFill;
                    return [2 /*return*/, BsFillBalloonHeartFill];
                case 139: return [4 /*yield*/, import("react-icons/bs")];
                case 140:
                    BsFillBanFill = (_b.sent()).BsFillBanFill;
                    return [2 /*return*/, BsFillBanFill];
                case 141: return [4 /*yield*/, import("react-icons/bs")];
                case 142:
                    BsFillBandaidFill = (_b.sent()).BsFillBandaidFill;
                    return [2 /*return*/, BsFillBandaidFill];
                case 143: return [4 /*yield*/, import("react-icons/bs")];
                case 144:
                    BsFillBarChartFill = (_b.sent()).BsFillBarChartFill;
                    return [2 /*return*/, BsFillBarChartFill];
                case 145: return [4 /*yield*/, import("react-icons/bs")];
                case 146:
                    BsFillBarChartLineFill = (_b.sent()).BsFillBarChartLineFill;
                    return [2 /*return*/, BsFillBarChartLineFill];
                case 147: return [4 /*yield*/, import("react-icons/bs")];
                case 148:
                    BsFillBasketFill = (_b.sent()).BsFillBasketFill;
                    return [2 /*return*/, BsFillBasketFill];
                case 149: return [4 /*yield*/, import("react-icons/bs")];
                case 150:
                    BsFillBasket2Fill = (_b.sent()).BsFillBasket2Fill;
                    return [2 /*return*/, BsFillBasket2Fill];
                case 151: return [4 /*yield*/, import("react-icons/bs")];
                case 152:
                    BsFillBasket3Fill = (_b.sent()).BsFillBasket3Fill;
                    return [2 /*return*/, BsFillBasket3Fill];
                case 153: return [4 /*yield*/, import("react-icons/bs")];
                case 154:
                    BsFillBellFill = (_b.sent()).BsFillBellFill;
                    return [2 /*return*/, BsFillBellFill];
                case 155: return [4 /*yield*/, import("react-icons/bs")];
                case 156:
                    BsFillBellSlashFill = (_b.sent()).BsFillBellSlashFill;
                    return [2 /*return*/, BsFillBellSlashFill];
                case 157: return [4 /*yield*/, import("react-icons/bs")];
                case 158:
                    BsFillBinocularsFill = (_b.sent()).BsFillBinocularsFill;
                    return [2 /*return*/, BsFillBinocularsFill];
                case 159: return [4 /*yield*/, import("react-icons/bs")];
                case 160:
                    BsFillBookFill = (_b.sent()).BsFillBookFill;
                    return [2 /*return*/, BsFillBookFill];
                case 161: return [4 /*yield*/, import("react-icons/bs")];
                case 162:
                    BsFillBookmarkCheckFill = (_b.sent()).BsFillBookmarkCheckFill;
                    return [2 /*return*/, BsFillBookmarkCheckFill];
                case 163: return [4 /*yield*/, import("react-icons/bs")];
                case 164:
                    BsFillBookmarkDashFill = (_b.sent()).BsFillBookmarkDashFill;
                    return [2 /*return*/, BsFillBookmarkDashFill];
                case 165: return [4 /*yield*/, import("react-icons/bs")];
                case 166:
                    BsFillBookmarkFill = (_b.sent()).BsFillBookmarkFill;
                    return [2 /*return*/, BsFillBookmarkFill];
                case 167: return [4 /*yield*/, import("react-icons/bs")];
                case 168:
                    BsFillBookmarkHeartFill = (_b.sent()).BsFillBookmarkHeartFill;
                    return [2 /*return*/, BsFillBookmarkHeartFill];
                case 169: return [4 /*yield*/, import("react-icons/bs")];
                case 170:
                    BsFillBookmarkPlusFill = (_b.sent()).BsFillBookmarkPlusFill;
                    return [2 /*return*/, BsFillBookmarkPlusFill];
                case 171: return [4 /*yield*/, import("react-icons/bs")];
                case 172:
                    BsFillBookmarkStarFill = (_b.sent()).BsFillBookmarkStarFill;
                    return [2 /*return*/, BsFillBookmarkStarFill];
                case 173: return [4 /*yield*/, import("react-icons/bs")];
                case 174:
                    BsFillBookmarkXFill = (_b.sent()).BsFillBookmarkXFill;
                    return [2 /*return*/, BsFillBookmarkXFill];
                case 175: return [4 /*yield*/, import("react-icons/bs")];
                case 176:
                    BsFillBookmarksFill = (_b.sent()).BsFillBookmarksFill;
                    return [2 /*return*/, BsFillBookmarksFill];
                case 177: return [4 /*yield*/, import("react-icons/bs")];
                case 178:
                    BsFillBoomboxFill = (_b.sent()).BsFillBoomboxFill;
                    return [2 /*return*/, BsFillBoomboxFill];
                case 179: return [4 /*yield*/, import("react-icons/bs")];
                case 180:
                    BsFillBootstrapFill = (_b.sent()).BsFillBootstrapFill;
                    return [2 /*return*/, BsFillBootstrapFill];
                case 181: return [4 /*yield*/, import("react-icons/bs")];
                case 182:
                    BsFillBoxFill = (_b.sent()).BsFillBoxFill;
                    return [2 /*return*/, BsFillBoxFill];
                case 183: return [4 /*yield*/, import("react-icons/bs")];
                case 184:
                    BsFillBoxSeamFill = (_b.sent()).BsFillBoxSeamFill;
                    return [2 /*return*/, BsFillBoxSeamFill];
                case 185: return [4 /*yield*/, import("react-icons/bs")];
                case 186:
                    BsFillBox2Fill = (_b.sent()).BsFillBox2Fill;
                    return [2 /*return*/, BsFillBox2Fill];
                case 187: return [4 /*yield*/, import("react-icons/bs")];
                case 188:
                    BsFillBox2HeartFill = (_b.sent()).BsFillBox2HeartFill;
                    return [2 /*return*/, BsFillBox2HeartFill];
                case 189: return [4 /*yield*/, import("react-icons/bs")];
                case 190:
                    BsFillBriefcaseFill = (_b.sent()).BsFillBriefcaseFill;
                    return [2 /*return*/, BsFillBriefcaseFill];
                case 191: return [4 /*yield*/, import("react-icons/bs")];
                case 192:
                    BsFillBrightnessAltHighFill = (_b.sent()).BsFillBrightnessAltHighFill;
                    return [2 /*return*/, BsFillBrightnessAltHighFill];
                case 193: return [4 /*yield*/, import("react-icons/bs")];
                case 194:
                    BsFillBrightnessAltLowFill = (_b.sent()).BsFillBrightnessAltLowFill;
                    return [2 /*return*/, BsFillBrightnessAltLowFill];
                case 195: return [4 /*yield*/, import("react-icons/bs")];
                case 196:
                    BsFillBrightnessHighFill = (_b.sent()).BsFillBrightnessHighFill;
                    return [2 /*return*/, BsFillBrightnessHighFill];
                case 197: return [4 /*yield*/, import("react-icons/bs")];
                case 198:
                    BsFillBrightnessLowFill = (_b.sent()).BsFillBrightnessLowFill;
                    return [2 /*return*/, BsFillBrightnessLowFill];
                case 199: return [4 /*yield*/, import("react-icons/bs")];
                case 200:
                    BsFillBrushFill = (_b.sent()).BsFillBrushFill;
                    return [2 /*return*/, BsFillBrushFill];
                case 201: return [4 /*yield*/, import("react-icons/bs")];
                case 202:
                    BsFillBucketFill = (_b.sent()).BsFillBucketFill;
                    return [2 /*return*/, BsFillBucketFill];
                case 203: return [4 /*yield*/, import("react-icons/bs")];
                case 204:
                    BsFillBugFill = (_b.sent()).BsFillBugFill;
                    return [2 /*return*/, BsFillBugFill];
                case 205: return [4 /*yield*/, import("react-icons/bs")];
                case 206:
                    BsFillBuildingFill = (_b.sent()).BsFillBuildingFill;
                    return [2 /*return*/, BsFillBuildingFill];
                case 207: return [4 /*yield*/, import("react-icons/bs")];
                case 208:
                    BsFillBuildingsFill = (_b.sent()).BsFillBuildingsFill;
                    return [2 /*return*/, BsFillBuildingsFill];
                case 209: return [4 /*yield*/, import("react-icons/bs")];
                case 210:
                    BsFillBusFrontFill = (_b.sent()).BsFillBusFrontFill;
                    return [2 /*return*/, BsFillBusFrontFill];
                case 211: return [4 /*yield*/, import("react-icons/bs")];
                case 212:
                    BsFillCCircleFill = (_b.sent()).BsFillCCircleFill;
                    return [2 /*return*/, BsFillCCircleFill];
                case 213: return [4 /*yield*/, import("react-icons/bs")];
                case 214:
                    BsFillCSquareFill = (_b.sent()).BsFillCSquareFill;
                    return [2 /*return*/, BsFillCSquareFill];
                case 215: return [4 /*yield*/, import("react-icons/bs")];
                case 216:
                    BsFillCakeFill = (_b.sent()).BsFillCakeFill;
                    return [2 /*return*/, BsFillCakeFill];
                case 217: return [4 /*yield*/, import("react-icons/bs")];
                case 218:
                    BsFillCake2Fill = (_b.sent()).BsFillCake2Fill;
                    return [2 /*return*/, BsFillCake2Fill];
                case 219: return [4 /*yield*/, import("react-icons/bs")];
                case 220:
                    BsFillCalculatorFill = (_b.sent()).BsFillCalculatorFill;
                    return [2 /*return*/, BsFillCalculatorFill];
                case 221: return [4 /*yield*/, import("react-icons/bs")];
                case 222:
                    BsFillCalendarCheckFill = (_b.sent()).BsFillCalendarCheckFill;
                    return [2 /*return*/, BsFillCalendarCheckFill];
                case 223: return [4 /*yield*/, import("react-icons/bs")];
                case 224:
                    BsFillCalendarDateFill = (_b.sent()).BsFillCalendarDateFill;
                    return [2 /*return*/, BsFillCalendarDateFill];
                case 225: return [4 /*yield*/, import("react-icons/bs")];
                case 226:
                    BsFillCalendarDayFill = (_b.sent()).BsFillCalendarDayFill;
                    return [2 /*return*/, BsFillCalendarDayFill];
                case 227: return [4 /*yield*/, import("react-icons/bs")];
                case 228:
                    BsFillCalendarEventFill = (_b.sent()).BsFillCalendarEventFill;
                    return [2 /*return*/, BsFillCalendarEventFill];
                case 229: return [4 /*yield*/, import("react-icons/bs")];
                case 230:
                    BsFillCalendarFill = (_b.sent()).BsFillCalendarFill;
                    return [2 /*return*/, BsFillCalendarFill];
                case 231: return [4 /*yield*/, import("react-icons/bs")];
                case 232:
                    BsFillCalendarHeartFill = (_b.sent()).BsFillCalendarHeartFill;
                    return [2 /*return*/, BsFillCalendarHeartFill];
                case 233: return [4 /*yield*/, import("react-icons/bs")];
                case 234:
                    BsFillCalendarMinusFill = (_b.sent()).BsFillCalendarMinusFill;
                    return [2 /*return*/, BsFillCalendarMinusFill];
                case 235: return [4 /*yield*/, import("react-icons/bs")];
                case 236:
                    BsFillCalendarMonthFill = (_b.sent()).BsFillCalendarMonthFill;
                    return [2 /*return*/, BsFillCalendarMonthFill];
                case 237: return [4 /*yield*/, import("react-icons/bs")];
                case 238:
                    BsFillCalendarPlusFill = (_b.sent()).BsFillCalendarPlusFill;
                    return [2 /*return*/, BsFillCalendarPlusFill];
                case 239: return [4 /*yield*/, import("react-icons/bs")];
                case 240:
                    BsFillCalendarRangeFill = (_b.sent()).BsFillCalendarRangeFill;
                    return [2 /*return*/, BsFillCalendarRangeFill];
                case 241: return [4 /*yield*/, import("react-icons/bs")];
                case 242:
                    BsFillCalendarWeekFill = (_b.sent()).BsFillCalendarWeekFill;
                    return [2 /*return*/, BsFillCalendarWeekFill];
                case 243: return [4 /*yield*/, import("react-icons/bs")];
                case 244:
                    BsFillCalendarXFill = (_b.sent()).BsFillCalendarXFill;
                    return [2 /*return*/, BsFillCalendarXFill];
                case 245: return [4 /*yield*/, import("react-icons/bs")];
                case 246:
                    BsFillCalendar2CheckFill = (_b.sent()).BsFillCalendar2CheckFill;
                    return [2 /*return*/, BsFillCalendar2CheckFill];
                case 247: return [4 /*yield*/, import("react-icons/bs")];
                case 248:
                    BsFillCalendar2DateFill = (_b.sent()).BsFillCalendar2DateFill;
                    return [2 /*return*/, BsFillCalendar2DateFill];
                case 249: return [4 /*yield*/, import("react-icons/bs")];
                case 250:
                    BsFillCalendar2DayFill = (_b.sent()).BsFillCalendar2DayFill;
                    return [2 /*return*/, BsFillCalendar2DayFill];
                case 251: return [4 /*yield*/, import("react-icons/bs")];
                case 252:
                    BsFillCalendar2EventFill = (_b.sent()).BsFillCalendar2EventFill;
                    return [2 /*return*/, BsFillCalendar2EventFill];
                case 253: return [4 /*yield*/, import("react-icons/bs")];
                case 254:
                    BsFillCalendar2Fill = (_b.sent()).BsFillCalendar2Fill;
                    return [2 /*return*/, BsFillCalendar2Fill];
                case 255: return [4 /*yield*/, import("react-icons/bs")];
                case 256:
                    BsFillCalendar2HeartFill = (_b.sent()).BsFillCalendar2HeartFill;
                    return [2 /*return*/, BsFillCalendar2HeartFill];
                case 257: return [4 /*yield*/, import("react-icons/bs")];
                case 258:
                    BsFillCalendar2MinusFill = (_b.sent()).BsFillCalendar2MinusFill;
                    return [2 /*return*/, BsFillCalendar2MinusFill];
                case 259: return [4 /*yield*/, import("react-icons/bs")];
                case 260:
                    BsFillCalendar2MonthFill = (_b.sent()).BsFillCalendar2MonthFill;
                    return [2 /*return*/, BsFillCalendar2MonthFill];
                case 261: return [4 /*yield*/, import("react-icons/bs")];
                case 262:
                    BsFillCalendar2PlusFill = (_b.sent()).BsFillCalendar2PlusFill;
                    return [2 /*return*/, BsFillCalendar2PlusFill];
                case 263: return [4 /*yield*/, import("react-icons/bs")];
                case 264:
                    BsFillCalendar2RangeFill = (_b.sent()).BsFillCalendar2RangeFill;
                    return [2 /*return*/, BsFillCalendar2RangeFill];
                case 265: return [4 /*yield*/, import("react-icons/bs")];
                case 266:
                    BsFillCalendar2WeekFill = (_b.sent()).BsFillCalendar2WeekFill;
                    return [2 /*return*/, BsFillCalendar2WeekFill];
                case 267: return [4 /*yield*/, import("react-icons/bs")];
                case 268:
                    BsFillCalendar2XFill = (_b.sent()).BsFillCalendar2XFill;
                    return [2 /*return*/, BsFillCalendar2XFill];
                case 269: return [4 /*yield*/, import("react-icons/bs")];
                case 270:
                    BsFillCalendar3EventFill = (_b.sent()).BsFillCalendar3EventFill;
                    return [2 /*return*/, BsFillCalendar3EventFill];
                case 271: return [4 /*yield*/, import("react-icons/bs")];
                case 272:
                    BsFillCalendar3Fill = (_b.sent()).BsFillCalendar3Fill;
                    return [2 /*return*/, BsFillCalendar3Fill];
                case 273: return [4 /*yield*/, import("react-icons/bs")];
                case 274:
                    BsFillCalendar3RangeFill = (_b.sent()).BsFillCalendar3RangeFill;
                    return [2 /*return*/, BsFillCalendar3RangeFill];
                case 275: return [4 /*yield*/, import("react-icons/bs")];
                case 276:
                    BsFillCalendar3WeekFill = (_b.sent()).BsFillCalendar3WeekFill;
                    return [2 /*return*/, BsFillCalendar3WeekFill];
                case 277: return [4 /*yield*/, import("react-icons/bs")];
                case 278:
                    BsFillCameraFill = (_b.sent()).BsFillCameraFill;
                    return [2 /*return*/, BsFillCameraFill];
                case 279: return [4 /*yield*/, import("react-icons/bs")];
                case 280:
                    BsFillCameraReelsFill = (_b.sent()).BsFillCameraReelsFill;
                    return [2 /*return*/, BsFillCameraReelsFill];
                case 281: return [4 /*yield*/, import("react-icons/bs")];
                case 282:
                    BsFillCameraVideoFill = (_b.sent()).BsFillCameraVideoFill;
                    return [2 /*return*/, BsFillCameraVideoFill];
                case 283: return [4 /*yield*/, import("react-icons/bs")];
                case 284:
                    BsFillCameraVideoOffFill = (_b.sent()).BsFillCameraVideoOffFill;
                    return [2 /*return*/, BsFillCameraVideoOffFill];
                case 285: return [4 /*yield*/, import("react-icons/bs")];
                case 286:
                    BsFillCapslockFill = (_b.sent()).BsFillCapslockFill;
                    return [2 /*return*/, BsFillCapslockFill];
                case 287: return [4 /*yield*/, import("react-icons/bs")];
                case 288:
                    BsFillCarFrontFill = (_b.sent()).BsFillCarFrontFill;
                    return [2 /*return*/, BsFillCarFrontFill];
                case 289: return [4 /*yield*/, import("react-icons/bs")];
                case 290:
                    BsFillCaretDownFill = (_b.sent()).BsFillCaretDownFill;
                    return [2 /*return*/, BsFillCaretDownFill];
                case 291: return [4 /*yield*/, import("react-icons/bs")];
                case 292:
                    BsFillCaretDownSquareFill = (_b.sent()).BsFillCaretDownSquareFill;
                    return [2 /*return*/, BsFillCaretDownSquareFill];
                case 293: return [4 /*yield*/, import("react-icons/bs")];
                case 294:
                    BsFillCaretLeftFill = (_b.sent()).BsFillCaretLeftFill;
                    return [2 /*return*/, BsFillCaretLeftFill];
                case 295: return [4 /*yield*/, import("react-icons/bs")];
                case 296:
                    BsFillCaretLeftSquareFill = (_b.sent()).BsFillCaretLeftSquareFill;
                    return [2 /*return*/, BsFillCaretLeftSquareFill];
                case 297: return [4 /*yield*/, import("react-icons/bs")];
                case 298:
                    BsFillCaretRightFill = (_b.sent()).BsFillCaretRightFill;
                    return [2 /*return*/, BsFillCaretRightFill];
                case 299: return [4 /*yield*/, import("react-icons/bs")];
                case 300:
                    BsFillCaretRightSquareFill = (_b.sent()).BsFillCaretRightSquareFill;
                    return [2 /*return*/, BsFillCaretRightSquareFill];
                case 301: return [4 /*yield*/, import("react-icons/bs")];
                case 302:
                    BsFillCaretUpFill = (_b.sent()).BsFillCaretUpFill;
                    return [2 /*return*/, BsFillCaretUpFill];
                case 303: return [4 /*yield*/, import("react-icons/bs")];
                case 304:
                    BsFillCaretUpSquareFill = (_b.sent()).BsFillCaretUpSquareFill;
                    return [2 /*return*/, BsFillCaretUpSquareFill];
                case 305: return [4 /*yield*/, import("react-icons/bs")];
                case 306:
                    BsFillCartCheckFill = (_b.sent()).BsFillCartCheckFill;
                    return [2 /*return*/, BsFillCartCheckFill];
                case 307: return [4 /*yield*/, import("react-icons/bs")];
                case 308:
                    BsFillCartDashFill = (_b.sent()).BsFillCartDashFill;
                    return [2 /*return*/, BsFillCartDashFill];
                case 309: return [4 /*yield*/, import("react-icons/bs")];
                case 310:
                    BsFillCartFill = (_b.sent()).BsFillCartFill;
                    return [2 /*return*/, BsFillCartFill];
                case 311: return [4 /*yield*/, import("react-icons/bs")];
                case 312:
                    BsFillCartPlusFill = (_b.sent()).BsFillCartPlusFill;
                    return [2 /*return*/, BsFillCartPlusFill];
                case 313: return [4 /*yield*/, import("react-icons/bs")];
                case 314:
                    BsFillCartXFill = (_b.sent()).BsFillCartXFill;
                    return [2 /*return*/, BsFillCartXFill];
                case 315: return [4 /*yield*/, import("react-icons/bs")];
                case 316:
                    BsFillCassetteFill = (_b.sent()).BsFillCassetteFill;
                    return [2 /*return*/, BsFillCassetteFill];
                case 317: return [4 /*yield*/, import("react-icons/bs")];
                case 318:
                    BsFillCcCircleFill = (_b.sent()).BsFillCcCircleFill;
                    return [2 /*return*/, BsFillCcCircleFill];
                case 319: return [4 /*yield*/, import("react-icons/bs")];
                case 320:
                    BsFillCcSquareFill = (_b.sent()).BsFillCcSquareFill;
                    return [2 /*return*/, BsFillCcSquareFill];
                case 321: return [4 /*yield*/, import("react-icons/bs")];
                case 322:
                    BsFillChatDotsFill = (_b.sent()).BsFillChatDotsFill;
                    return [2 /*return*/, BsFillChatDotsFill];
                case 323: return [4 /*yield*/, import("react-icons/bs")];
                case 324:
                    BsFillChatFill = (_b.sent()).BsFillChatFill;
                    return [2 /*return*/, BsFillChatFill];
                case 325: return [4 /*yield*/, import("react-icons/bs")];
                case 326:
                    BsFillChatHeartFill = (_b.sent()).BsFillChatHeartFill;
                    return [2 /*return*/, BsFillChatHeartFill];
                case 327: return [4 /*yield*/, import("react-icons/bs")];
                case 328:
                    BsFillChatLeftDotsFill = (_b.sent()).BsFillChatLeftDotsFill;
                    return [2 /*return*/, BsFillChatLeftDotsFill];
                case 329: return [4 /*yield*/, import("react-icons/bs")];
                case 330:
                    BsFillChatLeftFill = (_b.sent()).BsFillChatLeftFill;
                    return [2 /*return*/, BsFillChatLeftFill];
                case 331: return [4 /*yield*/, import("react-icons/bs")];
                case 332:
                    BsFillChatLeftHeartFill = (_b.sent()).BsFillChatLeftHeartFill;
                    return [2 /*return*/, BsFillChatLeftHeartFill];
                case 333: return [4 /*yield*/, import("react-icons/bs")];
                case 334:
                    BsFillChatLeftQuoteFill = (_b.sent()).BsFillChatLeftQuoteFill;
                    return [2 /*return*/, BsFillChatLeftQuoteFill];
                case 335: return [4 /*yield*/, import("react-icons/bs")];
                case 336:
                    BsFillChatLeftTextFill = (_b.sent()).BsFillChatLeftTextFill;
                    return [2 /*return*/, BsFillChatLeftTextFill];
                case 337: return [4 /*yield*/, import("react-icons/bs")];
                case 338:
                    BsFillChatQuoteFill = (_b.sent()).BsFillChatQuoteFill;
                    return [2 /*return*/, BsFillChatQuoteFill];
                case 339: return [4 /*yield*/, import("react-icons/bs")];
                case 340:
                    BsFillChatRightDotsFill = (_b.sent()).BsFillChatRightDotsFill;
                    return [2 /*return*/, BsFillChatRightDotsFill];
                case 341: return [4 /*yield*/, import("react-icons/bs")];
                case 342:
                    BsFillChatRightFill = (_b.sent()).BsFillChatRightFill;
                    return [2 /*return*/, BsFillChatRightFill];
                case 343: return [4 /*yield*/, import("react-icons/bs")];
                case 344:
                    BsFillChatRightHeartFill = (_b.sent()).BsFillChatRightHeartFill;
                    return [2 /*return*/, BsFillChatRightHeartFill];
                case 345: return [4 /*yield*/, import("react-icons/bs")];
                case 346:
                    BsFillChatRightQuoteFill = (_b.sent()).BsFillChatRightQuoteFill;
                    return [2 /*return*/, BsFillChatRightQuoteFill];
                case 347: return [4 /*yield*/, import("react-icons/bs")];
                case 348:
                    BsFillChatRightTextFill = (_b.sent()).BsFillChatRightTextFill;
                    return [2 /*return*/, BsFillChatRightTextFill];
                case 349: return [4 /*yield*/, import("react-icons/bs")];
                case 350:
                    BsFillChatSquareDotsFill = (_b.sent()).BsFillChatSquareDotsFill;
                    return [2 /*return*/, BsFillChatSquareDotsFill];
                case 351: return [4 /*yield*/, import("react-icons/bs")];
                case 352:
                    BsFillChatSquareFill = (_b.sent()).BsFillChatSquareFill;
                    return [2 /*return*/, BsFillChatSquareFill];
                case 353: return [4 /*yield*/, import("react-icons/bs")];
                case 354:
                    BsFillChatSquareHeartFill = (_b.sent()).BsFillChatSquareHeartFill;
                    return [2 /*return*/, BsFillChatSquareHeartFill];
                case 355: return [4 /*yield*/, import("react-icons/bs")];
                case 356:
                    BsFillChatSquareQuoteFill = (_b.sent()).BsFillChatSquareQuoteFill;
                    return [2 /*return*/, BsFillChatSquareQuoteFill];
                case 357: return [4 /*yield*/, import("react-icons/bs")];
                case 358:
                    BsFillChatSquareTextFill = (_b.sent()).BsFillChatSquareTextFill;
                    return [2 /*return*/, BsFillChatSquareTextFill];
                case 359: return [4 /*yield*/, import("react-icons/bs")];
                case 360:
                    BsFillChatTextFill = (_b.sent()).BsFillChatTextFill;
                    return [2 /*return*/, BsFillChatTextFill];
                case 361: return [4 /*yield*/, import("react-icons/bs")];
                case 362:
                    BsFillCheckCircleFill = (_b.sent()).BsFillCheckCircleFill;
                    return [2 /*return*/, BsFillCheckCircleFill];
                case 363: return [4 /*yield*/, import("react-icons/bs")];
                case 364:
                    BsFillCheckSquareFill = (_b.sent()).BsFillCheckSquareFill;
                    return [2 /*return*/, BsFillCheckSquareFill];
                case 365: return [4 /*yield*/, import("react-icons/bs")];
                case 366:
                    BsFillCircleFill = (_b.sent()).BsFillCircleFill;
                    return [2 /*return*/, BsFillCircleFill];
                case 367: return [4 /*yield*/, import("react-icons/bs")];
                case 368:
                    BsFillClipboardCheckFill = (_b.sent()).BsFillClipboardCheckFill;
                    return [2 /*return*/, BsFillClipboardCheckFill];
                case 369: return [4 /*yield*/, import("react-icons/bs")];
                case 370:
                    BsFillClipboardDataFill = (_b.sent()).BsFillClipboardDataFill;
                    return [2 /*return*/, BsFillClipboardDataFill];
                case 371: return [4 /*yield*/, import("react-icons/bs")];
                case 372:
                    BsFillClipboardFill = (_b.sent()).BsFillClipboardFill;
                    return [2 /*return*/, BsFillClipboardFill];
                case 373: return [4 /*yield*/, import("react-icons/bs")];
                case 374:
                    BsFillClipboardHeartFill = (_b.sent()).BsFillClipboardHeartFill;
                    return [2 /*return*/, BsFillClipboardHeartFill];
                case 375: return [4 /*yield*/, import("react-icons/bs")];
                case 376:
                    BsFillClipboardMinusFill = (_b.sent()).BsFillClipboardMinusFill;
                    return [2 /*return*/, BsFillClipboardMinusFill];
                case 377: return [4 /*yield*/, import("react-icons/bs")];
                case 378:
                    BsFillClipboardPlusFill = (_b.sent()).BsFillClipboardPlusFill;
                    return [2 /*return*/, BsFillClipboardPlusFill];
                case 379: return [4 /*yield*/, import("react-icons/bs")];
                case 380:
                    BsFillClipboardXFill = (_b.sent()).BsFillClipboardXFill;
                    return [2 /*return*/, BsFillClipboardXFill];
                case 381: return [4 /*yield*/, import("react-icons/bs")];
                case 382:
                    BsFillClipboard2CheckFill = (_b.sent()).BsFillClipboard2CheckFill;
                    return [2 /*return*/, BsFillClipboard2CheckFill];
                case 383: return [4 /*yield*/, import("react-icons/bs")];
                case 384:
                    BsFillClipboard2DataFill = (_b.sent()).BsFillClipboard2DataFill;
                    return [2 /*return*/, BsFillClipboard2DataFill];
                case 385: return [4 /*yield*/, import("react-icons/bs")];
                case 386:
                    BsFillClipboard2Fill = (_b.sent()).BsFillClipboard2Fill;
                    return [2 /*return*/, BsFillClipboard2Fill];
                case 387: return [4 /*yield*/, import("react-icons/bs")];
                case 388:
                    BsFillClipboard2HeartFill = (_b.sent()).BsFillClipboard2HeartFill;
                    return [2 /*return*/, BsFillClipboard2HeartFill];
                case 389: return [4 /*yield*/, import("react-icons/bs")];
                case 390:
                    BsFillClipboard2MinusFill = (_b.sent()).BsFillClipboard2MinusFill;
                    return [2 /*return*/, BsFillClipboard2MinusFill];
                case 391: return [4 /*yield*/, import("react-icons/bs")];
                case 392:
                    BsFillClipboard2PlusFill = (_b.sent()).BsFillClipboard2PlusFill;
                    return [2 /*return*/, BsFillClipboard2PlusFill];
                case 393: return [4 /*yield*/, import("react-icons/bs")];
                case 394:
                    BsFillClipboard2PulseFill = (_b.sent()).BsFillClipboard2PulseFill;
                    return [2 /*return*/, BsFillClipboard2PulseFill];
                case 395: return [4 /*yield*/, import("react-icons/bs")];
                case 396:
                    BsFillClipboard2XFill = (_b.sent()).BsFillClipboard2XFill;
                    return [2 /*return*/, BsFillClipboard2XFill];
                case 397: return [4 /*yield*/, import("react-icons/bs")];
                case 398:
                    BsFillClockFill = (_b.sent()).BsFillClockFill;
                    return [2 /*return*/, BsFillClockFill];
                case 399: return [4 /*yield*/, import("react-icons/bs")];
                case 400:
                    BsFillCloudArrowDownFill = (_b.sent()).BsFillCloudArrowDownFill;
                    return [2 /*return*/, BsFillCloudArrowDownFill];
                case 401: return [4 /*yield*/, import("react-icons/bs")];
                case 402:
                    BsFillCloudArrowUpFill = (_b.sent()).BsFillCloudArrowUpFill;
                    return [2 /*return*/, BsFillCloudArrowUpFill];
                case 403: return [4 /*yield*/, import("react-icons/bs")];
                case 404:
                    BsFillCloudCheckFill = (_b.sent()).BsFillCloudCheckFill;
                    return [2 /*return*/, BsFillCloudCheckFill];
                case 405: return [4 /*yield*/, import("react-icons/bs")];
                case 406:
                    BsFillCloudDownloadFill = (_b.sent()).BsFillCloudDownloadFill;
                    return [2 /*return*/, BsFillCloudDownloadFill];
                case 407: return [4 /*yield*/, import("react-icons/bs")];
                case 408:
                    BsFillCloudDrizzleFill = (_b.sent()).BsFillCloudDrizzleFill;
                    return [2 /*return*/, BsFillCloudDrizzleFill];
                case 409: return [4 /*yield*/, import("react-icons/bs")];
                case 410:
                    BsFillCloudFill = (_b.sent()).BsFillCloudFill;
                    return [2 /*return*/, BsFillCloudFill];
                case 411: return [4 /*yield*/, import("react-icons/bs")];
                case 412:
                    BsFillCloudFogFill = (_b.sent()).BsFillCloudFogFill;
                    return [2 /*return*/, BsFillCloudFogFill];
                case 413: return [4 /*yield*/, import("react-icons/bs")];
                case 414:
                    BsFillCloudFog2Fill = (_b.sent()).BsFillCloudFog2Fill;
                    return [2 /*return*/, BsFillCloudFog2Fill];
                case 415: return [4 /*yield*/, import("react-icons/bs")];
                case 416:
                    BsFillCloudHailFill = (_b.sent()).BsFillCloudHailFill;
                    return [2 /*return*/, BsFillCloudHailFill];
                case 417: return [4 /*yield*/, import("react-icons/bs")];
                case 418:
                    BsFillCloudHazeFill = (_b.sent()).BsFillCloudHazeFill;
                    return [2 /*return*/, BsFillCloudHazeFill];
                case 419: return [4 /*yield*/, import("react-icons/bs")];
                case 420:
                    BsFillCloudHaze2Fill = (_b.sent()).BsFillCloudHaze2Fill;
                    return [2 /*return*/, BsFillCloudHaze2Fill];
                case 421: return [4 /*yield*/, import("react-icons/bs")];
                case 422:
                    BsFillCloudLightningFill = (_b.sent()).BsFillCloudLightningFill;
                    return [2 /*return*/, BsFillCloudLightningFill];
                case 423: return [4 /*yield*/, import("react-icons/bs")];
                case 424:
                    BsFillCloudLightningRainFill = (_b.sent()).BsFillCloudLightningRainFill;
                    return [2 /*return*/, BsFillCloudLightningRainFill];
                case 425: return [4 /*yield*/, import("react-icons/bs")];
                case 426:
                    BsFillCloudMinusFill = (_b.sent()).BsFillCloudMinusFill;
                    return [2 /*return*/, BsFillCloudMinusFill];
                case 427: return [4 /*yield*/, import("react-icons/bs")];
                case 428:
                    BsFillCloudMoonFill = (_b.sent()).BsFillCloudMoonFill;
                    return [2 /*return*/, BsFillCloudMoonFill];
                case 429: return [4 /*yield*/, import("react-icons/bs")];
                case 430:
                    BsFillCloudPlusFill = (_b.sent()).BsFillCloudPlusFill;
                    return [2 /*return*/, BsFillCloudPlusFill];
                case 431: return [4 /*yield*/, import("react-icons/bs")];
                case 432:
                    BsFillCloudRainFill = (_b.sent()).BsFillCloudRainFill;
                    return [2 /*return*/, BsFillCloudRainFill];
                case 433: return [4 /*yield*/, import("react-icons/bs")];
                case 434:
                    BsFillCloudRainHeavyFill = (_b.sent()).BsFillCloudRainHeavyFill;
                    return [2 /*return*/, BsFillCloudRainHeavyFill];
                case 435: return [4 /*yield*/, import("react-icons/bs")];
                case 436:
                    BsFillCloudSlashFill = (_b.sent()).BsFillCloudSlashFill;
                    return [2 /*return*/, BsFillCloudSlashFill];
                case 437: return [4 /*yield*/, import("react-icons/bs")];
                case 438:
                    BsFillCloudSleetFill = (_b.sent()).BsFillCloudSleetFill;
                    return [2 /*return*/, BsFillCloudSleetFill];
                case 439: return [4 /*yield*/, import("react-icons/bs")];
                case 440:
                    BsFillCloudSnowFill = (_b.sent()).BsFillCloudSnowFill;
                    return [2 /*return*/, BsFillCloudSnowFill];
                case 441: return [4 /*yield*/, import("react-icons/bs")];
                case 442:
                    BsFillCloudSunFill = (_b.sent()).BsFillCloudSunFill;
                    return [2 /*return*/, BsFillCloudSunFill];
                case 443: return [4 /*yield*/, import("react-icons/bs")];
                case 444:
                    BsFillCloudUploadFill = (_b.sent()).BsFillCloudUploadFill;
                    return [2 /*return*/, BsFillCloudUploadFill];
                case 445: return [4 /*yield*/, import("react-icons/bs")];
                case 446:
                    BsFillCloudsFill = (_b.sent()).BsFillCloudsFill;
                    return [2 /*return*/, BsFillCloudsFill];
                case 447: return [4 /*yield*/, import("react-icons/bs")];
                case 448:
                    BsFillCloudyFill = (_b.sent()).BsFillCloudyFill;
                    return [2 /*return*/, BsFillCloudyFill];
                case 449: return [4 /*yield*/, import("react-icons/bs")];
                case 450:
                    BsFillCollectionFill = (_b.sent()).BsFillCollectionFill;
                    return [2 /*return*/, BsFillCollectionFill];
                case 451: return [4 /*yield*/, import("react-icons/bs")];
                case 452:
                    BsFillCollectionPlayFill = (_b.sent()).BsFillCollectionPlayFill;
                    return [2 /*return*/, BsFillCollectionPlayFill];
                case 453: return [4 /*yield*/, import("react-icons/bs")];
                case 454:
                    BsFillCompassFill = (_b.sent()).BsFillCompassFill;
                    return [2 /*return*/, BsFillCompassFill];
                case 455: return [4 /*yield*/, import("react-icons/bs")];
                case 456:
                    BsFillCpuFill = (_b.sent()).BsFillCpuFill;
                    return [2 /*return*/, BsFillCpuFill];
                case 457: return [4 /*yield*/, import("react-icons/bs")];
                case 458:
                    BsFillCreditCard2BackFill = (_b.sent()).BsFillCreditCard2BackFill;
                    return [2 /*return*/, BsFillCreditCard2BackFill];
                case 459: return [4 /*yield*/, import("react-icons/bs")];
                case 460:
                    BsFillCreditCard2FrontFill = (_b.sent()).BsFillCreditCard2FrontFill;
                    return [2 /*return*/, BsFillCreditCard2FrontFill];
                case 461: return [4 /*yield*/, import("react-icons/bs")];
                case 462:
                    BsFillCreditCardFill = (_b.sent()).BsFillCreditCardFill;
                    return [2 /*return*/, BsFillCreditCardFill];
                case 463: return [4 /*yield*/, import("react-icons/bs")];
                case 464:
                    BsFillCupFill = (_b.sent()).BsFillCupFill;
                    return [2 /*return*/, BsFillCupFill];
                case 465: return [4 /*yield*/, import("react-icons/bs")];
                case 466:
                    BsFillCupHotFill = (_b.sent()).BsFillCupHotFill;
                    return [2 /*return*/, BsFillCupHotFill];
                case 467: return [4 /*yield*/, import("react-icons/bs")];
                case 468:
                    BsFillCursorFill = (_b.sent()).BsFillCursorFill;
                    return [2 /*return*/, BsFillCursorFill];
                case 469: return [4 /*yield*/, import("react-icons/bs")];
                case 470:
                    BsFillDashCircleFill = (_b.sent()).BsFillDashCircleFill;
                    return [2 /*return*/, BsFillDashCircleFill];
                case 471: return [4 /*yield*/, import("react-icons/bs")];
                case 472:
                    BsFillDashSquareFill = (_b.sent()).BsFillDashSquareFill;
                    return [2 /*return*/, BsFillDashSquareFill];
                case 473: return [4 /*yield*/, import("react-icons/bs")];
                case 474:
                    BsFillDatabaseFill = (_b.sent()).BsFillDatabaseFill;
                    return [2 /*return*/, BsFillDatabaseFill];
                case 475: return [4 /*yield*/, import("react-icons/bs")];
                case 476:
                    BsFillDeviceHddFill = (_b.sent()).BsFillDeviceHddFill;
                    return [2 /*return*/, BsFillDeviceHddFill];
                case 477: return [4 /*yield*/, import("react-icons/bs")];
                case 478:
                    BsFillDeviceSsdFill = (_b.sent()).BsFillDeviceSsdFill;
                    return [2 /*return*/, BsFillDeviceSsdFill];
                case 479: return [4 /*yield*/, import("react-icons/bs")];
                case 480:
                    BsFillDiagram2Fill = (_b.sent()).BsFillDiagram2Fill;
                    return [2 /*return*/, BsFillDiagram2Fill];
                case 481: return [4 /*yield*/, import("react-icons/bs")];
                case 482:
                    BsFillDiagram3Fill = (_b.sent()).BsFillDiagram3Fill;
                    return [2 /*return*/, BsFillDiagram3Fill];
                case 483: return [4 /*yield*/, import("react-icons/bs")];
                case 484:
                    BsFillDiamondFill = (_b.sent()).BsFillDiamondFill;
                    return [2 /*return*/, BsFillDiamondFill];
                case 485: return [4 /*yield*/, import("react-icons/bs")];
                case 486:
                    BsFillDice1Fill = (_b.sent()).BsFillDice1Fill;
                    return [2 /*return*/, BsFillDice1Fill];
                case 487: return [4 /*yield*/, import("react-icons/bs")];
                case 488:
                    BsFillDice2Fill = (_b.sent()).BsFillDice2Fill;
                    return [2 /*return*/, BsFillDice2Fill];
                case 489: return [4 /*yield*/, import("react-icons/bs")];
                case 490:
                    BsFillDice3Fill = (_b.sent()).BsFillDice3Fill;
                    return [2 /*return*/, BsFillDice3Fill];
                case 491: return [4 /*yield*/, import("react-icons/bs")];
                case 492:
                    BsFillDice4Fill = (_b.sent()).BsFillDice4Fill;
                    return [2 /*return*/, BsFillDice4Fill];
                case 493: return [4 /*yield*/, import("react-icons/bs")];
                case 494:
                    BsFillDice5Fill = (_b.sent()).BsFillDice5Fill;
                    return [2 /*return*/, BsFillDice5Fill];
                case 495: return [4 /*yield*/, import("react-icons/bs")];
                case 496:
                    BsFillDice6Fill = (_b.sent()).BsFillDice6Fill;
                    return [2 /*return*/, BsFillDice6Fill];
                case 497: return [4 /*yield*/, import("react-icons/bs")];
                case 498:
                    BsFillDiscFill = (_b.sent()).BsFillDiscFill;
                    return [2 /*return*/, BsFillDiscFill];
                case 499: return [4 /*yield*/, import("react-icons/bs")];
                case 500:
                    BsFillDisplayFill = (_b.sent()).BsFillDisplayFill;
                    return [2 /*return*/, BsFillDisplayFill];
                case 501: return [4 /*yield*/, import("react-icons/bs")];
                case 502:
                    BsFillDisplayportFill = (_b.sent()).BsFillDisplayportFill;
                    return [2 /*return*/, BsFillDisplayportFill];
                case 503: return [4 /*yield*/, import("react-icons/bs")];
                case 504:
                    BsFillDoorClosedFill = (_b.sent()).BsFillDoorClosedFill;
                    return [2 /*return*/, BsFillDoorClosedFill];
                case 505: return [4 /*yield*/, import("react-icons/bs")];
                case 506:
                    BsFillDoorOpenFill = (_b.sent()).BsFillDoorOpenFill;
                    return [2 /*return*/, BsFillDoorOpenFill];
                case 507: return [4 /*yield*/, import("react-icons/bs")];
                case 508:
                    BsFillDpadFill = (_b.sent()).BsFillDpadFill;
                    return [2 /*return*/, BsFillDpadFill];
                case 509: return [4 /*yield*/, import("react-icons/bs")];
                case 510:
                    BsFillDropletFill = (_b.sent()).BsFillDropletFill;
                    return [2 /*return*/, BsFillDropletFill];
                case 511: return [4 /*yield*/, import("react-icons/bs")];
                case 512:
                    BsFillDuffleFill = (_b.sent()).BsFillDuffleFill;
                    return [2 /*return*/, BsFillDuffleFill];
                case 513: return [4 /*yield*/, import("react-icons/bs")];
                case 514:
                    BsFillEarFill = (_b.sent()).BsFillEarFill;
                    return [2 /*return*/, BsFillEarFill];
                case 515: return [4 /*yield*/, import("react-icons/bs")];
                case 516:
                    BsFillEaselFill = (_b.sent()).BsFillEaselFill;
                    return [2 /*return*/, BsFillEaselFill];
                case 517: return [4 /*yield*/, import("react-icons/bs")];
                case 518:
                    BsFillEasel2Fill = (_b.sent()).BsFillEasel2Fill;
                    return [2 /*return*/, BsFillEasel2Fill];
                case 519: return [4 /*yield*/, import("react-icons/bs")];
                case 520:
                    BsFillEasel3Fill = (_b.sent()).BsFillEasel3Fill;
                    return [2 /*return*/, BsFillEasel3Fill];
                case 521: return [4 /*yield*/, import("react-icons/bs")];
                case 522:
                    BsFillEggFill = (_b.sent()).BsFillEggFill;
                    return [2 /*return*/, BsFillEggFill];
                case 523: return [4 /*yield*/, import("react-icons/bs")];
                case 524:
                    BsFillEjectFill = (_b.sent()).BsFillEjectFill;
                    return [2 /*return*/, BsFillEjectFill];
                case 525: return [4 /*yield*/, import("react-icons/bs")];
                case 526:
                    BsFillEmojiAngryFill = (_b.sent()).BsFillEmojiAngryFill;
                    return [2 /*return*/, BsFillEmojiAngryFill];
                case 527: return [4 /*yield*/, import("react-icons/bs")];
                case 528:
                    BsFillEmojiAstonishedFill = (_b.sent()).BsFillEmojiAstonishedFill;
                    return [2 /*return*/, BsFillEmojiAstonishedFill];
                case 529: return [4 /*yield*/, import("react-icons/bs")];
                case 530:
                    BsFillEmojiDizzyFill = (_b.sent()).BsFillEmojiDizzyFill;
                    return [2 /*return*/, BsFillEmojiDizzyFill];
                case 531: return [4 /*yield*/, import("react-icons/bs")];
                case 532:
                    BsFillEmojiExpressionlessFill = (_b.sent()).BsFillEmojiExpressionlessFill;
                    return [2 /*return*/, BsFillEmojiExpressionlessFill];
                case 533: return [4 /*yield*/, import("react-icons/bs")];
                case 534:
                    BsFillEmojiFrownFill = (_b.sent()).BsFillEmojiFrownFill;
                    return [2 /*return*/, BsFillEmojiFrownFill];
                case 535: return [4 /*yield*/, import("react-icons/bs")];
                case 536:
                    BsFillEmojiGrimaceFill = (_b.sent()).BsFillEmojiGrimaceFill;
                    return [2 /*return*/, BsFillEmojiGrimaceFill];
                case 537: return [4 /*yield*/, import("react-icons/bs")];
                case 538:
                    BsFillEmojiGrinFill = (_b.sent()).BsFillEmojiGrinFill;
                    return [2 /*return*/, BsFillEmojiGrinFill];
                case 539: return [4 /*yield*/, import("react-icons/bs")];
                case 540:
                    BsFillEmojiHeartEyesFill = (_b.sent()).BsFillEmojiHeartEyesFill;
                    return [2 /*return*/, BsFillEmojiHeartEyesFill];
                case 541: return [4 /*yield*/, import("react-icons/bs")];
                case 542:
                    BsFillEmojiKissFill = (_b.sent()).BsFillEmojiKissFill;
                    return [2 /*return*/, BsFillEmojiKissFill];
                case 543: return [4 /*yield*/, import("react-icons/bs")];
                case 544:
                    BsFillEmojiLaughingFill = (_b.sent()).BsFillEmojiLaughingFill;
                    return [2 /*return*/, BsFillEmojiLaughingFill];
                case 545: return [4 /*yield*/, import("react-icons/bs")];
                case 546:
                    BsFillEmojiNeutralFill = (_b.sent()).BsFillEmojiNeutralFill;
                    return [2 /*return*/, BsFillEmojiNeutralFill];
                case 547: return [4 /*yield*/, import("react-icons/bs")];
                case 548:
                    BsFillEmojiSmileFill = (_b.sent()).BsFillEmojiSmileFill;
                    return [2 /*return*/, BsFillEmojiSmileFill];
                case 549: return [4 /*yield*/, import("react-icons/bs")];
                case 550:
                    BsFillEmojiSmileUpsideDownFill = (_b.sent()).BsFillEmojiSmileUpsideDownFill;
                    return [2 /*return*/, BsFillEmojiSmileUpsideDownFill];
                case 551: return [4 /*yield*/, import("react-icons/bs")];
                case 552:
                    BsFillEmojiSunglassesFill = (_b.sent()).BsFillEmojiSunglassesFill;
                    return [2 /*return*/, BsFillEmojiSunglassesFill];
                case 553: return [4 /*yield*/, import("react-icons/bs")];
                case 554:
                    BsFillEmojiSurpriseFill = (_b.sent()).BsFillEmojiSurpriseFill;
                    return [2 /*return*/, BsFillEmojiSurpriseFill];
                case 555: return [4 /*yield*/, import("react-icons/bs")];
                case 556:
                    BsFillEmojiTearFill = (_b.sent()).BsFillEmojiTearFill;
                    return [2 /*return*/, BsFillEmojiTearFill];
                case 557: return [4 /*yield*/, import("react-icons/bs")];
                case 558:
                    BsFillEmojiWinkFill = (_b.sent()).BsFillEmojiWinkFill;
                    return [2 /*return*/, BsFillEmojiWinkFill];
                case 559: return [4 /*yield*/, import("react-icons/bs")];
                case 560:
                    BsFillEnvelopeArrowDownFill = (_b.sent()).BsFillEnvelopeArrowDownFill;
                    return [2 /*return*/, BsFillEnvelopeArrowDownFill];
                case 561: return [4 /*yield*/, import("react-icons/bs")];
                case 562:
                    BsFillEnvelopeArrowUpFill = (_b.sent()).BsFillEnvelopeArrowUpFill;
                    return [2 /*return*/, BsFillEnvelopeArrowUpFill];
                case 563: return [4 /*yield*/, import("react-icons/bs")];
                case 564:
                    BsFillEnvelopeAtFill = (_b.sent()).BsFillEnvelopeAtFill;
                    return [2 /*return*/, BsFillEnvelopeAtFill];
                case 565: return [4 /*yield*/, import("react-icons/bs")];
                case 566:
                    BsFillEnvelopeCheckFill = (_b.sent()).BsFillEnvelopeCheckFill;
                    return [2 /*return*/, BsFillEnvelopeCheckFill];
                case 567: return [4 /*yield*/, import("react-icons/bs")];
                case 568:
                    BsFillEnvelopeDashFill = (_b.sent()).BsFillEnvelopeDashFill;
                    return [2 /*return*/, BsFillEnvelopeDashFill];
                case 569: return [4 /*yield*/, import("react-icons/bs")];
                case 570:
                    BsFillEnvelopeExclamationFill = (_b.sent()).BsFillEnvelopeExclamationFill;
                    return [2 /*return*/, BsFillEnvelopeExclamationFill];
                case 571: return [4 /*yield*/, import("react-icons/bs")];
                case 572:
                    BsFillEnvelopeFill = (_b.sent()).BsFillEnvelopeFill;
                    return [2 /*return*/, BsFillEnvelopeFill];
                case 573: return [4 /*yield*/, import("react-icons/bs")];
                case 574:
                    BsFillEnvelopeHeartFill = (_b.sent()).BsFillEnvelopeHeartFill;
                    return [2 /*return*/, BsFillEnvelopeHeartFill];
                case 575: return [4 /*yield*/, import("react-icons/bs")];
                case 576:
                    BsFillEnvelopeOpenFill = (_b.sent()).BsFillEnvelopeOpenFill;
                    return [2 /*return*/, BsFillEnvelopeOpenFill];
                case 577: return [4 /*yield*/, import("react-icons/bs")];
                case 578:
                    BsFillEnvelopeOpenHeartFill = (_b.sent()).BsFillEnvelopeOpenHeartFill;
                    return [2 /*return*/, BsFillEnvelopeOpenHeartFill];
                case 579: return [4 /*yield*/, import("react-icons/bs")];
                case 580:
                    BsFillEnvelopePaperFill = (_b.sent()).BsFillEnvelopePaperFill;
                    return [2 /*return*/, BsFillEnvelopePaperFill];
                case 581: return [4 /*yield*/, import("react-icons/bs")];
                case 582:
                    BsFillEnvelopePaperHeartFill = (_b.sent()).BsFillEnvelopePaperHeartFill;
                    return [2 /*return*/, BsFillEnvelopePaperHeartFill];
                case 583: return [4 /*yield*/, import("react-icons/bs")];
                case 584:
                    BsFillEnvelopePlusFill = (_b.sent()).BsFillEnvelopePlusFill;
                    return [2 /*return*/, BsFillEnvelopePlusFill];
                case 585: return [4 /*yield*/, import("react-icons/bs")];
                case 586:
                    BsFillEnvelopeSlashFill = (_b.sent()).BsFillEnvelopeSlashFill;
                    return [2 /*return*/, BsFillEnvelopeSlashFill];
                case 587: return [4 /*yield*/, import("react-icons/bs")];
                case 588:
                    BsFillEnvelopeXFill = (_b.sent()).BsFillEnvelopeXFill;
                    return [2 /*return*/, BsFillEnvelopeXFill];
                case 589: return [4 /*yield*/, import("react-icons/bs")];
                case 590:
                    BsFillEraserFill = (_b.sent()).BsFillEraserFill;
                    return [2 /*return*/, BsFillEraserFill];
                case 591: return [4 /*yield*/, import("react-icons/bs")];
                case 592:
                    BsFillEvFrontFill = (_b.sent()).BsFillEvFrontFill;
                    return [2 /*return*/, BsFillEvFrontFill];
                case 593: return [4 /*yield*/, import("react-icons/bs")];
                case 594:
                    BsFillEvStationFill = (_b.sent()).BsFillEvStationFill;
                    return [2 /*return*/, BsFillEvStationFill];
                case 595: return [4 /*yield*/, import("react-icons/bs")];
                case 596:
                    BsFillExclamationCircleFill = (_b.sent()).BsFillExclamationCircleFill;
                    return [2 /*return*/, BsFillExclamationCircleFill];
                case 597: return [4 /*yield*/, import("react-icons/bs")];
                case 598:
                    BsFillExclamationDiamondFill = (_b.sent()).BsFillExclamationDiamondFill;
                    return [2 /*return*/, BsFillExclamationDiamondFill];
                case 599: return [4 /*yield*/, import("react-icons/bs")];
                case 600:
                    BsFillExclamationOctagonFill = (_b.sent()).BsFillExclamationOctagonFill;
                    return [2 /*return*/, BsFillExclamationOctagonFill];
                case 601: return [4 /*yield*/, import("react-icons/bs")];
                case 602:
                    BsFillExclamationSquareFill = (_b.sent()).BsFillExclamationSquareFill;
                    return [2 /*return*/, BsFillExclamationSquareFill];
                case 603: return [4 /*yield*/, import("react-icons/bs")];
                case 604:
                    BsFillExclamationTriangleFill = (_b.sent()).BsFillExclamationTriangleFill;
                    return [2 /*return*/, BsFillExclamationTriangleFill];
                case 605: return [4 /*yield*/, import("react-icons/bs")];
                case 606:
                    BsFillExplicitFill = (_b.sent()).BsFillExplicitFill;
                    return [2 /*return*/, BsFillExplicitFill];
                case 607: return [4 /*yield*/, import("react-icons/bs")];
                case 608:
                    BsFillEyeFill = (_b.sent()).BsFillEyeFill;
                    return [2 /*return*/, BsFillEyeFill];
                case 609: return [4 /*yield*/, import("react-icons/bs")];
                case 610:
                    BsFillEyeSlashFill = (_b.sent()).BsFillEyeSlashFill;
                    return [2 /*return*/, BsFillEyeSlashFill];
                case 611: return [4 /*yield*/, import("react-icons/bs")];
                case 612:
                    BsFillFastForwardBtnFill = (_b.sent()).BsFillFastForwardBtnFill;
                    return [2 /*return*/, BsFillFastForwardBtnFill];
                case 613: return [4 /*yield*/, import("react-icons/bs")];
                case 614:
                    BsFillFastForwardCircleFill = (_b.sent()).BsFillFastForwardCircleFill;
                    return [2 /*return*/, BsFillFastForwardCircleFill];
                case 615: return [4 /*yield*/, import("react-icons/bs")];
                case 616:
                    BsFillFastForwardFill = (_b.sent()).BsFillFastForwardFill;
                    return [2 /*return*/, BsFillFastForwardFill];
                case 617: return [4 /*yield*/, import("react-icons/bs")];
                case 618:
                    BsFillFileArrowDownFill = (_b.sent()).BsFillFileArrowDownFill;
                    return [2 /*return*/, BsFillFileArrowDownFill];
                case 619: return [4 /*yield*/, import("react-icons/bs")];
                case 620:
                    BsFillFileArrowUpFill = (_b.sent()).BsFillFileArrowUpFill;
                    return [2 /*return*/, BsFillFileArrowUpFill];
                case 621: return [4 /*yield*/, import("react-icons/bs")];
                case 622:
                    BsFillFileBarGraphFill = (_b.sent()).BsFillFileBarGraphFill;
                    return [2 /*return*/, BsFillFileBarGraphFill];
                case 623: return [4 /*yield*/, import("react-icons/bs")];
                case 624:
                    BsFillFileBinaryFill = (_b.sent()).BsFillFileBinaryFill;
                    return [2 /*return*/, BsFillFileBinaryFill];
                case 625: return [4 /*yield*/, import("react-icons/bs")];
                case 626:
                    BsFillFileBreakFill = (_b.sent()).BsFillFileBreakFill;
                    return [2 /*return*/, BsFillFileBreakFill];
                case 627: return [4 /*yield*/, import("react-icons/bs")];
                case 628:
                    BsFillFileCheckFill = (_b.sent()).BsFillFileCheckFill;
                    return [2 /*return*/, BsFillFileCheckFill];
                case 629: return [4 /*yield*/, import("react-icons/bs")];
                case 630:
                    BsFillFileCodeFill = (_b.sent()).BsFillFileCodeFill;
                    return [2 /*return*/, BsFillFileCodeFill];
                case 631: return [4 /*yield*/, import("react-icons/bs")];
                case 632:
                    BsFillFileDiffFill = (_b.sent()).BsFillFileDiffFill;
                    return [2 /*return*/, BsFillFileDiffFill];
                case 633: return [4 /*yield*/, import("react-icons/bs")];
                case 634:
                    BsFillFileEarmarkArrowDownFill = (_b.sent()).BsFillFileEarmarkArrowDownFill;
                    return [2 /*return*/, BsFillFileEarmarkArrowDownFill];
                case 635: return [4 /*yield*/, import("react-icons/bs")];
                case 636:
                    BsFillFileEarmarkArrowUpFill = (_b.sent()).BsFillFileEarmarkArrowUpFill;
                    return [2 /*return*/, BsFillFileEarmarkArrowUpFill];
                case 637: return [4 /*yield*/, import("react-icons/bs")];
                case 638:
                    BsFillFileEarmarkBarGraphFill = (_b.sent()).BsFillFileEarmarkBarGraphFill;
                    return [2 /*return*/, BsFillFileEarmarkBarGraphFill];
                case 639: return [4 /*yield*/, import("react-icons/bs")];
                case 640:
                    BsFillFileEarmarkBinaryFill = (_b.sent()).BsFillFileEarmarkBinaryFill;
                    return [2 /*return*/, BsFillFileEarmarkBinaryFill];
                case 641: return [4 /*yield*/, import("react-icons/bs")];
                case 642:
                    BsFillFileEarmarkBreakFill = (_b.sent()).BsFillFileEarmarkBreakFill;
                    return [2 /*return*/, BsFillFileEarmarkBreakFill];
                case 643: return [4 /*yield*/, import("react-icons/bs")];
                case 644:
                    BsFillFileEarmarkCheckFill = (_b.sent()).BsFillFileEarmarkCheckFill;
                    return [2 /*return*/, BsFillFileEarmarkCheckFill];
                case 645: return [4 /*yield*/, import("react-icons/bs")];
                case 646:
                    BsFillFileEarmarkCodeFill = (_b.sent()).BsFillFileEarmarkCodeFill;
                    return [2 /*return*/, BsFillFileEarmarkCodeFill];
                case 647: return [4 /*yield*/, import("react-icons/bs")];
                case 648:
                    BsFillFileEarmarkDiffFill = (_b.sent()).BsFillFileEarmarkDiffFill;
                    return [2 /*return*/, BsFillFileEarmarkDiffFill];
                case 649: return [4 /*yield*/, import("react-icons/bs")];
                case 650:
                    BsFillFileEarmarkEaselFill = (_b.sent()).BsFillFileEarmarkEaselFill;
                    return [2 /*return*/, BsFillFileEarmarkEaselFill];
                case 651: return [4 /*yield*/, import("react-icons/bs")];
                case 652:
                    BsFillFileEarmarkExcelFill = (_b.sent()).BsFillFileEarmarkExcelFill;
                    return [2 /*return*/, BsFillFileEarmarkExcelFill];
                case 653: return [4 /*yield*/, import("react-icons/bs")];
                case 654:
                    BsFillFileEarmarkFill = (_b.sent()).BsFillFileEarmarkFill;
                    return [2 /*return*/, BsFillFileEarmarkFill];
                case 655: return [4 /*yield*/, import("react-icons/bs")];
                case 656:
                    BsFillFileEarmarkFontFill = (_b.sent()).BsFillFileEarmarkFontFill;
                    return [2 /*return*/, BsFillFileEarmarkFontFill];
                case 657: return [4 /*yield*/, import("react-icons/bs")];
                case 658:
                    BsFillFileEarmarkImageFill = (_b.sent()).BsFillFileEarmarkImageFill;
                    return [2 /*return*/, BsFillFileEarmarkImageFill];
                case 659: return [4 /*yield*/, import("react-icons/bs")];
                case 660:
                    BsFillFileEarmarkLockFill = (_b.sent()).BsFillFileEarmarkLockFill;
                    return [2 /*return*/, BsFillFileEarmarkLockFill];
                case 661: return [4 /*yield*/, import("react-icons/bs")];
                case 662:
                    BsFillFileEarmarkLock2Fill = (_b.sent()).BsFillFileEarmarkLock2Fill;
                    return [2 /*return*/, BsFillFileEarmarkLock2Fill];
                case 663: return [4 /*yield*/, import("react-icons/bs")];
                case 664:
                    BsFillFileEarmarkMedicalFill = (_b.sent()).BsFillFileEarmarkMedicalFill;
                    return [2 /*return*/, BsFillFileEarmarkMedicalFill];
                case 665: return [4 /*yield*/, import("react-icons/bs")];
                case 666:
                    BsFillFileEarmarkMinusFill = (_b.sent()).BsFillFileEarmarkMinusFill;
                    return [2 /*return*/, BsFillFileEarmarkMinusFill];
                case 667: return [4 /*yield*/, import("react-icons/bs")];
                case 668:
                    BsFillFileEarmarkMusicFill = (_b.sent()).BsFillFileEarmarkMusicFill;
                    return [2 /*return*/, BsFillFileEarmarkMusicFill];
                case 669: return [4 /*yield*/, import("react-icons/bs")];
                case 670:
                    BsFillFileEarmarkPdfFill = (_b.sent()).BsFillFileEarmarkPdfFill;
                    return [2 /*return*/, BsFillFileEarmarkPdfFill];
                case 671: return [4 /*yield*/, import("react-icons/bs")];
                case 672:
                    BsFillFileEarmarkPersonFill = (_b.sent()).BsFillFileEarmarkPersonFill;
                    return [2 /*return*/, BsFillFileEarmarkPersonFill];
                case 673: return [4 /*yield*/, import("react-icons/bs")];
                case 674:
                    BsFillFileEarmarkPlayFill = (_b.sent()).BsFillFileEarmarkPlayFill;
                    return [2 /*return*/, BsFillFileEarmarkPlayFill];
                case 675: return [4 /*yield*/, import("react-icons/bs")];
                case 676:
                    BsFillFileEarmarkPlusFill = (_b.sent()).BsFillFileEarmarkPlusFill;
                    return [2 /*return*/, BsFillFileEarmarkPlusFill];
                case 677: return [4 /*yield*/, import("react-icons/bs")];
                case 678:
                    BsFillFileEarmarkPostFill = (_b.sent()).BsFillFileEarmarkPostFill;
                    return [2 /*return*/, BsFillFileEarmarkPostFill];
                case 679: return [4 /*yield*/, import("react-icons/bs")];
                case 680:
                    BsFillFileEarmarkPptFill = (_b.sent()).BsFillFileEarmarkPptFill;
                    return [2 /*return*/, BsFillFileEarmarkPptFill];
                case 681: return [4 /*yield*/, import("react-icons/bs")];
                case 682:
                    BsFillFileEarmarkRichtextFill = (_b.sent()).BsFillFileEarmarkRichtextFill;
                    return [2 /*return*/, BsFillFileEarmarkRichtextFill];
                case 683: return [4 /*yield*/, import("react-icons/bs")];
                case 684:
                    BsFillFileEarmarkRuledFill = (_b.sent()).BsFillFileEarmarkRuledFill;
                    return [2 /*return*/, BsFillFileEarmarkRuledFill];
                case 685: return [4 /*yield*/, import("react-icons/bs")];
                case 686:
                    BsFillFileEarmarkSlidesFill = (_b.sent()).BsFillFileEarmarkSlidesFill;
                    return [2 /*return*/, BsFillFileEarmarkSlidesFill];
                case 687: return [4 /*yield*/, import("react-icons/bs")];
                case 688:
                    BsFillFileEarmarkSpreadsheetFill = (_b.sent()).BsFillFileEarmarkSpreadsheetFill;
                    return [2 /*return*/, BsFillFileEarmarkSpreadsheetFill];
                case 689: return [4 /*yield*/, import("react-icons/bs")];
                case 690:
                    BsFillFileEarmarkTextFill = (_b.sent()).BsFillFileEarmarkTextFill;
                    return [2 /*return*/, BsFillFileEarmarkTextFill];
                case 691: return [4 /*yield*/, import("react-icons/bs")];
                case 692:
                    BsFillFileEarmarkWordFill = (_b.sent()).BsFillFileEarmarkWordFill;
                    return [2 /*return*/, BsFillFileEarmarkWordFill];
                case 693: return [4 /*yield*/, import("react-icons/bs")];
                case 694:
                    BsFillFileEarmarkXFill = (_b.sent()).BsFillFileEarmarkXFill;
                    return [2 /*return*/, BsFillFileEarmarkXFill];
                case 695: return [4 /*yield*/, import("react-icons/bs")];
                case 696:
                    BsFillFileEarmarkZipFill = (_b.sent()).BsFillFileEarmarkZipFill;
                    return [2 /*return*/, BsFillFileEarmarkZipFill];
                case 697: return [4 /*yield*/, import("react-icons/bs")];
                case 698:
                    BsFillFileEaselFill = (_b.sent()).BsFillFileEaselFill;
                    return [2 /*return*/, BsFillFileEaselFill];
                case 699: return [4 /*yield*/, import("react-icons/bs")];
                case 700:
                    BsFillFileExcelFill = (_b.sent()).BsFillFileExcelFill;
                    return [2 /*return*/, BsFillFileExcelFill];
                case 701: return [4 /*yield*/, import("react-icons/bs")];
                case 702:
                    BsFillFileFill = (_b.sent()).BsFillFileFill;
                    return [2 /*return*/, BsFillFileFill];
                case 703: return [4 /*yield*/, import("react-icons/bs")];
                case 704:
                    BsFillFileFontFill = (_b.sent()).BsFillFileFontFill;
                    return [2 /*return*/, BsFillFileFontFill];
                case 705: return [4 /*yield*/, import("react-icons/bs")];
                case 706:
                    BsFillFileImageFill = (_b.sent()).BsFillFileImageFill;
                    return [2 /*return*/, BsFillFileImageFill];
                case 707: return [4 /*yield*/, import("react-icons/bs")];
                case 708:
                    BsFillFileLockFill = (_b.sent()).BsFillFileLockFill;
                    return [2 /*return*/, BsFillFileLockFill];
                case 709: return [4 /*yield*/, import("react-icons/bs")];
                case 710:
                    BsFillFileLock2Fill = (_b.sent()).BsFillFileLock2Fill;
                    return [2 /*return*/, BsFillFileLock2Fill];
                case 711: return [4 /*yield*/, import("react-icons/bs")];
                case 712:
                    BsFillFileMedicalFill = (_b.sent()).BsFillFileMedicalFill;
                    return [2 /*return*/, BsFillFileMedicalFill];
                case 713: return [4 /*yield*/, import("react-icons/bs")];
                case 714:
                    BsFillFileMinusFill = (_b.sent()).BsFillFileMinusFill;
                    return [2 /*return*/, BsFillFileMinusFill];
                case 715: return [4 /*yield*/, import("react-icons/bs")];
                case 716:
                    BsFillFileMusicFill = (_b.sent()).BsFillFileMusicFill;
                    return [2 /*return*/, BsFillFileMusicFill];
                case 717: return [4 /*yield*/, import("react-icons/bs")];
                case 718:
                    BsFillFilePdfFill = (_b.sent()).BsFillFilePdfFill;
                    return [2 /*return*/, BsFillFilePdfFill];
                case 719: return [4 /*yield*/, import("react-icons/bs")];
                case 720:
                    BsFillFilePersonFill = (_b.sent()).BsFillFilePersonFill;
                    return [2 /*return*/, BsFillFilePersonFill];
                case 721: return [4 /*yield*/, import("react-icons/bs")];
                case 722:
                    BsFillFilePlayFill = (_b.sent()).BsFillFilePlayFill;
                    return [2 /*return*/, BsFillFilePlayFill];
                case 723: return [4 /*yield*/, import("react-icons/bs")];
                case 724:
                    BsFillFilePlusFill = (_b.sent()).BsFillFilePlusFill;
                    return [2 /*return*/, BsFillFilePlusFill];
                case 725: return [4 /*yield*/, import("react-icons/bs")];
                case 726:
                    BsFillFilePostFill = (_b.sent()).BsFillFilePostFill;
                    return [2 /*return*/, BsFillFilePostFill];
                case 727: return [4 /*yield*/, import("react-icons/bs")];
                case 728:
                    BsFillFilePptFill = (_b.sent()).BsFillFilePptFill;
                    return [2 /*return*/, BsFillFilePptFill];
                case 729: return [4 /*yield*/, import("react-icons/bs")];
                case 730:
                    BsFillFileRichtextFill = (_b.sent()).BsFillFileRichtextFill;
                    return [2 /*return*/, BsFillFileRichtextFill];
                case 731: return [4 /*yield*/, import("react-icons/bs")];
                case 732:
                    BsFillFileRuledFill = (_b.sent()).BsFillFileRuledFill;
                    return [2 /*return*/, BsFillFileRuledFill];
                case 733: return [4 /*yield*/, import("react-icons/bs")];
                case 734:
                    BsFillFileSlidesFill = (_b.sent()).BsFillFileSlidesFill;
                    return [2 /*return*/, BsFillFileSlidesFill];
                case 735: return [4 /*yield*/, import("react-icons/bs")];
                case 736:
                    BsFillFileSpreadsheetFill = (_b.sent()).BsFillFileSpreadsheetFill;
                    return [2 /*return*/, BsFillFileSpreadsheetFill];
                case 737: return [4 /*yield*/, import("react-icons/bs")];
                case 738:
                    BsFillFileTextFill = (_b.sent()).BsFillFileTextFill;
                    return [2 /*return*/, BsFillFileTextFill];
                case 739: return [4 /*yield*/, import("react-icons/bs")];
                case 740:
                    BsFillFileWordFill = (_b.sent()).BsFillFileWordFill;
                    return [2 /*return*/, BsFillFileWordFill];
                case 741: return [4 /*yield*/, import("react-icons/bs")];
                case 742:
                    BsFillFileXFill = (_b.sent()).BsFillFileXFill;
                    return [2 /*return*/, BsFillFileXFill];
                case 743: return [4 /*yield*/, import("react-icons/bs")];
                case 744:
                    BsFillFileZipFill = (_b.sent()).BsFillFileZipFill;
                    return [2 /*return*/, BsFillFileZipFill];
                case 745: return [4 /*yield*/, import("react-icons/bs")];
                case 746:
                    BsFillFilterCircleFill = (_b.sent()).BsFillFilterCircleFill;
                    return [2 /*return*/, BsFillFilterCircleFill];
                case 747: return [4 /*yield*/, import("react-icons/bs")];
                case 748:
                    BsFillFilterSquareFill = (_b.sent()).BsFillFilterSquareFill;
                    return [2 /*return*/, BsFillFilterSquareFill];
                case 749: return [4 /*yield*/, import("react-icons/bs")];
                case 750:
                    BsFillFlagFill = (_b.sent()).BsFillFlagFill;
                    return [2 /*return*/, BsFillFlagFill];
                case 751: return [4 /*yield*/, import("react-icons/bs")];
                case 752:
                    BsFillFloppyFill = (_b.sent()).BsFillFloppyFill;
                    return [2 /*return*/, BsFillFloppyFill];
                case 753: return [4 /*yield*/, import("react-icons/bs")];
                case 754:
                    BsFillFloppy2Fill = (_b.sent()).BsFillFloppy2Fill;
                    return [2 /*return*/, BsFillFloppy2Fill];
                case 755: return [4 /*yield*/, import("react-icons/bs")];
                case 756:
                    BsFillFolderFill = (_b.sent()).BsFillFolderFill;
                    return [2 /*return*/, BsFillFolderFill];
                case 757: return [4 /*yield*/, import("react-icons/bs")];
                case 758:
                    BsFillFolderSymlinkFill = (_b.sent()).BsFillFolderSymlinkFill;
                    return [2 /*return*/, BsFillFolderSymlinkFill];
                case 759: return [4 /*yield*/, import("react-icons/bs")];
                case 760:
                    BsFillForwardFill = (_b.sent()).BsFillForwardFill;
                    return [2 /*return*/, BsFillForwardFill];
                case 761: return [4 /*yield*/, import("react-icons/bs")];
                case 762:
                    BsFillFuelPumpDieselFill = (_b.sent()).BsFillFuelPumpDieselFill;
                    return [2 /*return*/, BsFillFuelPumpDieselFill];
                case 763: return [4 /*yield*/, import("react-icons/bs")];
                case 764:
                    BsFillFuelPumpFill = (_b.sent()).BsFillFuelPumpFill;
                    return [2 /*return*/, BsFillFuelPumpFill];
                case 765: return [4 /*yield*/, import("react-icons/bs")];
                case 766:
                    BsFillFunnelFill = (_b.sent()).BsFillFunnelFill;
                    return [2 /*return*/, BsFillFunnelFill];
                case 767: return [4 /*yield*/, import("react-icons/bs")];
                case 768:
                    BsFillGearFill = (_b.sent()).BsFillGearFill;
                    return [2 /*return*/, BsFillGearFill];
                case 769: return [4 /*yield*/, import("react-icons/bs")];
                case 770:
                    BsFillGeoAltFill = (_b.sent()).BsFillGeoAltFill;
                    return [2 /*return*/, BsFillGeoAltFill];
                case 771: return [4 /*yield*/, import("react-icons/bs")];
                case 772:
                    BsFillGeoFill = (_b.sent()).BsFillGeoFill;
                    return [2 /*return*/, BsFillGeoFill];
                case 773: return [4 /*yield*/, import("react-icons/bs")];
                case 774:
                    BsFillGiftFill = (_b.sent()).BsFillGiftFill;
                    return [2 /*return*/, BsFillGiftFill];
                case 775: return [4 /*yield*/, import("react-icons/bs")];
                case 776:
                    BsFillGrid1X2Fill = (_b.sent()).BsFillGrid1X2Fill;
                    return [2 /*return*/, BsFillGrid1X2Fill];
                case 777: return [4 /*yield*/, import("react-icons/bs")];
                case 778:
                    BsFillGrid3X2GapFill = (_b.sent()).BsFillGrid3X2GapFill;
                    return [2 /*return*/, BsFillGrid3X2GapFill];
                case 779: return [4 /*yield*/, import("react-icons/bs")];
                case 780:
                    BsFillGrid3X3GapFill = (_b.sent()).BsFillGrid3X3GapFill;
                    return [2 /*return*/, BsFillGrid3X3GapFill];
                case 781: return [4 /*yield*/, import("react-icons/bs")];
                case 782:
                    BsFillGridFill = (_b.sent()).BsFillGridFill;
                    return [2 /*return*/, BsFillGridFill];
                case 783: return [4 /*yield*/, import("react-icons/bs")];
                case 784:
                    BsFillHCircleFill = (_b.sent()).BsFillHCircleFill;
                    return [2 /*return*/, BsFillHCircleFill];
                case 785: return [4 /*yield*/, import("react-icons/bs")];
                case 786:
                    BsFillHSquareFill = (_b.sent()).BsFillHSquareFill;
                    return [2 /*return*/, BsFillHSquareFill];
                case 787: return [4 /*yield*/, import("react-icons/bs")];
                case 788:
                    BsFillHandIndexFill = (_b.sent()).BsFillHandIndexFill;
                    return [2 /*return*/, BsFillHandIndexFill];
                case 789: return [4 /*yield*/, import("react-icons/bs")];
                case 790:
                    BsFillHandIndexThumbFill = (_b.sent()).BsFillHandIndexThumbFill;
                    return [2 /*return*/, BsFillHandIndexThumbFill];
                case 791: return [4 /*yield*/, import("react-icons/bs")];
                case 792:
                    BsFillHandThumbsDownFill = (_b.sent()).BsFillHandThumbsDownFill;
                    return [2 /*return*/, BsFillHandThumbsDownFill];
                case 793: return [4 /*yield*/, import("react-icons/bs")];
                case 794:
                    BsFillHandThumbsUpFill = (_b.sent()).BsFillHandThumbsUpFill;
                    return [2 /*return*/, BsFillHandThumbsUpFill];
                case 795: return [4 /*yield*/, import("react-icons/bs")];
                case 796:
                    BsFillHandbagFill = (_b.sent()).BsFillHandbagFill;
                    return [2 /*return*/, BsFillHandbagFill];
                case 797: return [4 /*yield*/, import("react-icons/bs")];
                case 798:
                    BsFillHddFill = (_b.sent()).BsFillHddFill;
                    return [2 /*return*/, BsFillHddFill];
                case 799: return [4 /*yield*/, import("react-icons/bs")];
                case 800:
                    BsFillHddNetworkFill = (_b.sent()).BsFillHddNetworkFill;
                    return [2 /*return*/, BsFillHddNetworkFill];
                case 801: return [4 /*yield*/, import("react-icons/bs")];
                case 802:
                    BsFillHddRackFill = (_b.sent()).BsFillHddRackFill;
                    return [2 /*return*/, BsFillHddRackFill];
                case 803: return [4 /*yield*/, import("react-icons/bs")];
                case 804:
                    BsFillHddStackFill = (_b.sent()).BsFillHddStackFill;
                    return [2 /*return*/, BsFillHddStackFill];
                case 805: return [4 /*yield*/, import("react-icons/bs")];
                case 806:
                    BsFillHdmiFill = (_b.sent()).BsFillHdmiFill;
                    return [2 /*return*/, BsFillHdmiFill];
                case 807: return [4 /*yield*/, import("react-icons/bs")];
                case 808:
                    BsFillHeartFill = (_b.sent()).BsFillHeartFill;
                    return [2 /*return*/, BsFillHeartFill];
                case 809: return [4 /*yield*/, import("react-icons/bs")];
                case 810:
                    BsFillHeartPulseFill = (_b.sent()).BsFillHeartPulseFill;
                    return [2 /*return*/, BsFillHeartPulseFill];
                case 811: return [4 /*yield*/, import("react-icons/bs")];
                case 812:
                    BsFillHeartbreakFill = (_b.sent()).BsFillHeartbreakFill;
                    return [2 /*return*/, BsFillHeartbreakFill];
                case 813: return [4 /*yield*/, import("react-icons/bs")];
                case 814:
                    BsFillHeptagonFill = (_b.sent()).BsFillHeptagonFill;
                    return [2 /*return*/, BsFillHeptagonFill];
                case 815: return [4 /*yield*/, import("react-icons/bs")];
                case 816:
                    BsFillHexagonFill = (_b.sent()).BsFillHexagonFill;
                    return [2 /*return*/, BsFillHexagonFill];
                case 817: return [4 /*yield*/, import("react-icons/bs")];
                case 818:
                    BsFillHospitalFill = (_b.sent()).BsFillHospitalFill;
                    return [2 /*return*/, BsFillHospitalFill];
                case 819: return [4 /*yield*/, import("react-icons/bs")];
                case 820:
                    BsFillHouseAddFill = (_b.sent()).BsFillHouseAddFill;
                    return [2 /*return*/, BsFillHouseAddFill];
                case 821: return [4 /*yield*/, import("react-icons/bs")];
                case 822:
                    BsFillHouseCheckFill = (_b.sent()).BsFillHouseCheckFill;
                    return [2 /*return*/, BsFillHouseCheckFill];
                case 823: return [4 /*yield*/, import("react-icons/bs")];
                case 824:
                    BsFillHouseDashFill = (_b.sent()).BsFillHouseDashFill;
                    return [2 /*return*/, BsFillHouseDashFill];
                case 825: return [4 /*yield*/, import("react-icons/bs")];
                case 826:
                    BsFillHouseDoorFill = (_b.sent()).BsFillHouseDoorFill;
                    return [2 /*return*/, BsFillHouseDoorFill];
                case 827: return [4 /*yield*/, import("react-icons/bs")];
                case 828:
                    BsFillHouseDownFill = (_b.sent()).BsFillHouseDownFill;
                    return [2 /*return*/, BsFillHouseDownFill];
                case 829: return [4 /*yield*/, import("react-icons/bs")];
                case 830:
                    BsFillHouseExclamationFill = (_b.sent()).BsFillHouseExclamationFill;
                    return [2 /*return*/, BsFillHouseExclamationFill];
                case 831: return [4 /*yield*/, import("react-icons/bs")];
                case 832:
                    BsFillHouseFill = (_b.sent()).BsFillHouseFill;
                    return [2 /*return*/, BsFillHouseFill];
                case 833: return [4 /*yield*/, import("react-icons/bs")];
                case 834:
                    BsFillHouseGearFill = (_b.sent()).BsFillHouseGearFill;
                    return [2 /*return*/, BsFillHouseGearFill];
                case 835: return [4 /*yield*/, import("react-icons/bs")];
                case 836:
                    BsFillHouseHeartFill = (_b.sent()).BsFillHouseHeartFill;
                    return [2 /*return*/, BsFillHouseHeartFill];
                case 837: return [4 /*yield*/, import("react-icons/bs")];
                case 838:
                    BsFillHouseLockFill = (_b.sent()).BsFillHouseLockFill;
                    return [2 /*return*/, BsFillHouseLockFill];
                case 839: return [4 /*yield*/, import("react-icons/bs")];
                case 840:
                    BsFillHouseSlashFill = (_b.sent()).BsFillHouseSlashFill;
                    return [2 /*return*/, BsFillHouseSlashFill];
                case 841: return [4 /*yield*/, import("react-icons/bs")];
                case 842:
                    BsFillHouseUpFill = (_b.sent()).BsFillHouseUpFill;
                    return [2 /*return*/, BsFillHouseUpFill];
                case 843: return [4 /*yield*/, import("react-icons/bs")];
                case 844:
                    BsFillHouseXFill = (_b.sent()).BsFillHouseXFill;
                    return [2 /*return*/, BsFillHouseXFill];
                case 845: return [4 /*yield*/, import("react-icons/bs")];
                case 846:
                    BsFillHousesFill = (_b.sent()).BsFillHousesFill;
                    return [2 /*return*/, BsFillHousesFill];
                case 847: return [4 /*yield*/, import("react-icons/bs")];
                case 848:
                    BsFillImageFill = (_b.sent()).BsFillImageFill;
                    return [2 /*return*/, BsFillImageFill];
                case 849: return [4 /*yield*/, import("react-icons/bs")];
                case 850:
                    BsFillInboxFill = (_b.sent()).BsFillInboxFill;
                    return [2 /*return*/, BsFillInboxFill];
                case 851: return [4 /*yield*/, import("react-icons/bs")];
                case 852:
                    BsFillInboxesFill = (_b.sent()).BsFillInboxesFill;
                    return [2 /*return*/, BsFillInboxesFill];
                case 853: return [4 /*yield*/, import("react-icons/bs")];
                case 854:
                    BsFillInfoCircleFill = (_b.sent()).BsFillInfoCircleFill;
                    return [2 /*return*/, BsFillInfoCircleFill];
                case 855: return [4 /*yield*/, import("react-icons/bs")];
                case 856:
                    BsFillInfoSquareFill = (_b.sent()).BsFillInfoSquareFill;
                    return [2 /*return*/, BsFillInfoSquareFill];
                case 857: return [4 /*yield*/, import("react-icons/bs")];
                case 858:
                    BsFillJournalBookmarkFill = (_b.sent()).BsFillJournalBookmarkFill;
                    return [2 /*return*/, BsFillJournalBookmarkFill];
                case 859: return [4 /*yield*/, import("react-icons/bs")];
                case 860:
                    BsFillKanbanFill = (_b.sent()).BsFillKanbanFill;
                    return [2 /*return*/, BsFillKanbanFill];
                case 861: return [4 /*yield*/, import("react-icons/bs")];
                case 862:
                    BsFillKeyFill = (_b.sent()).BsFillKeyFill;
                    return [2 /*return*/, BsFillKeyFill];
                case 863: return [4 /*yield*/, import("react-icons/bs")];
                case 864:
                    BsFillKeyboardFill = (_b.sent()).BsFillKeyboardFill;
                    return [2 /*return*/, BsFillKeyboardFill];
                case 865: return [4 /*yield*/, import("react-icons/bs")];
                case 866:
                    BsFillLampFill = (_b.sent()).BsFillLampFill;
                    return [2 /*return*/, BsFillLampFill];
                case 867: return [4 /*yield*/, import("react-icons/bs")];
                case 868:
                    BsFillLaptopFill = (_b.sent()).BsFillLaptopFill;
                    return [2 /*return*/, BsFillLaptopFill];
                case 869: return [4 /*yield*/, import("react-icons/bs")];
                case 870:
                    BsFillLayersFill = (_b.sent()).BsFillLayersFill;
                    return [2 /*return*/, BsFillLayersFill];
                case 871: return [4 /*yield*/, import("react-icons/bs")];
                case 872:
                    BsFillLightbulbFill = (_b.sent()).BsFillLightbulbFill;
                    return [2 /*return*/, BsFillLightbulbFill];
                case 873: return [4 /*yield*/, import("react-icons/bs")];
                case 874:
                    BsFillLightbulbOffFill = (_b.sent()).BsFillLightbulbOffFill;
                    return [2 /*return*/, BsFillLightbulbOffFill];
                case 875: return [4 /*yield*/, import("react-icons/bs")];
                case 876:
                    BsFillLightningChargeFill = (_b.sent()).BsFillLightningChargeFill;
                    return [2 /*return*/, BsFillLightningChargeFill];
                case 877: return [4 /*yield*/, import("react-icons/bs")];
                case 878:
                    BsFillLightningFill = (_b.sent()).BsFillLightningFill;
                    return [2 /*return*/, BsFillLightningFill];
                case 879: return [4 /*yield*/, import("react-icons/bs")];
                case 880:
                    BsFillLockFill = (_b.sent()).BsFillLockFill;
                    return [2 /*return*/, BsFillLockFill];
                case 881: return [4 /*yield*/, import("react-icons/bs")];
                case 882:
                    BsFillLuggageFill = (_b.sent()).BsFillLuggageFill;
                    return [2 /*return*/, BsFillLuggageFill];
                case 883: return [4 /*yield*/, import("react-icons/bs")];
                case 884:
                    BsFillLungsFill = (_b.sent()).BsFillLungsFill;
                    return [2 /*return*/, BsFillLungsFill];
                case 885: return [4 /*yield*/, import("react-icons/bs")];
                case 886:
                    BsFillMagnetFill = (_b.sent()).BsFillMagnetFill;
                    return [2 /*return*/, BsFillMagnetFill];
                case 887: return [4 /*yield*/, import("react-icons/bs")];
                case 888:
                    BsFillMapFill = (_b.sent()).BsFillMapFill;
                    return [2 /*return*/, BsFillMapFill];
                case 889: return [4 /*yield*/, import("react-icons/bs")];
                case 890:
                    BsFillMarkdownFill = (_b.sent()).BsFillMarkdownFill;
                    return [2 /*return*/, BsFillMarkdownFill];
                case 891: return [4 /*yield*/, import("react-icons/bs")];
                case 892:
                    BsFillMegaphoneFill = (_b.sent()).BsFillMegaphoneFill;
                    return [2 /*return*/, BsFillMegaphoneFill];
                case 893: return [4 /*yield*/, import("react-icons/bs")];
                case 894:
                    BsFillMenuAppFill = (_b.sent()).BsFillMenuAppFill;
                    return [2 /*return*/, BsFillMenuAppFill];
                case 895: return [4 /*yield*/, import("react-icons/bs")];
                case 896:
                    BsFillMenuButtonFill = (_b.sent()).BsFillMenuButtonFill;
                    return [2 /*return*/, BsFillMenuButtonFill];
                case 897: return [4 /*yield*/, import("react-icons/bs")];
                case 898:
                    BsFillMenuButtonWideFill = (_b.sent()).BsFillMenuButtonWideFill;
                    return [2 /*return*/, BsFillMenuButtonWideFill];
                case 899: return [4 /*yield*/, import("react-icons/bs")];
                case 900:
                    BsFillMicFill = (_b.sent()).BsFillMicFill;
                    return [2 /*return*/, BsFillMicFill];
                case 901: return [4 /*yield*/, import("react-icons/bs")];
                case 902:
                    BsFillMicMuteFill = (_b.sent()).BsFillMicMuteFill;
                    return [2 /*return*/, BsFillMicMuteFill];
                case 903: return [4 /*yield*/, import("react-icons/bs")];
                case 904:
                    BsFillModemFill = (_b.sent()).BsFillModemFill;
                    return [2 /*return*/, BsFillModemFill];
                case 905: return [4 /*yield*/, import("react-icons/bs")];
                case 906:
                    BsFillMoonFill = (_b.sent()).BsFillMoonFill;
                    return [2 /*return*/, BsFillMoonFill];
                case 907: return [4 /*yield*/, import("react-icons/bs")];
                case 908:
                    BsFillMoonStarsFill = (_b.sent()).BsFillMoonStarsFill;
                    return [2 /*return*/, BsFillMoonStarsFill];
                case 909: return [4 /*yield*/, import("react-icons/bs")];
                case 910:
                    BsFillMortarboardFill = (_b.sent()).BsFillMortarboardFill;
                    return [2 /*return*/, BsFillMortarboardFill];
                case 911: return [4 /*yield*/, import("react-icons/bs")];
                case 912:
                    BsFillMotherboardFill = (_b.sent()).BsFillMotherboardFill;
                    return [2 /*return*/, BsFillMotherboardFill];
                case 913: return [4 /*yield*/, import("react-icons/bs")];
                case 914:
                    BsFillMouseFill = (_b.sent()).BsFillMouseFill;
                    return [2 /*return*/, BsFillMouseFill];
                case 915: return [4 /*yield*/, import("react-icons/bs")];
                case 916:
                    BsFillMouse2Fill = (_b.sent()).BsFillMouse2Fill;
                    return [2 /*return*/, BsFillMouse2Fill];
                case 917: return [4 /*yield*/, import("react-icons/bs")];
                case 918:
                    BsFillMouse3Fill = (_b.sent()).BsFillMouse3Fill;
                    return [2 /*return*/, BsFillMouse3Fill];
                case 919: return [4 /*yield*/, import("react-icons/bs")];
                case 920:
                    BsFillMusicPlayerFill = (_b.sent()).BsFillMusicPlayerFill;
                    return [2 /*return*/, BsFillMusicPlayerFill];
                case 921: return [4 /*yield*/, import("react-icons/bs")];
                case 922:
                    BsFillNodeMinusFill = (_b.sent()).BsFillNodeMinusFill;
                    return [2 /*return*/, BsFillNodeMinusFill];
                case 923: return [4 /*yield*/, import("react-icons/bs")];
                case 924:
                    BsFillNodePlusFill = (_b.sent()).BsFillNodePlusFill;
                    return [2 /*return*/, BsFillNodePlusFill];
                case 925: return [4 /*yield*/, import("react-icons/bs")];
                case 926:
                    BsFillNutFill = (_b.sent()).BsFillNutFill;
                    return [2 /*return*/, BsFillNutFill];
                case 927: return [4 /*yield*/, import("react-icons/bs")];
                case 928:
                    BsFillNvmeFill = (_b.sent()).BsFillNvmeFill;
                    return [2 /*return*/, BsFillNvmeFill];
                case 929: return [4 /*yield*/, import("react-icons/bs")];
                case 930:
                    BsFillOctagonFill = (_b.sent()).BsFillOctagonFill;
                    return [2 /*return*/, BsFillOctagonFill];
                case 931: return [4 /*yield*/, import("react-icons/bs")];
                case 932:
                    BsFillOpticalAudioFill = (_b.sent()).BsFillOpticalAudioFill;
                    return [2 /*return*/, BsFillOpticalAudioFill];
                case 933: return [4 /*yield*/, import("react-icons/bs")];
                case 934:
                    BsFillPCircleFill = (_b.sent()).BsFillPCircleFill;
                    return [2 /*return*/, BsFillPCircleFill];
                case 935: return [4 /*yield*/, import("react-icons/bs")];
                case 936:
                    BsFillPSquareFill = (_b.sent()).BsFillPSquareFill;
                    return [2 /*return*/, BsFillPSquareFill];
                case 937: return [4 /*yield*/, import("react-icons/bs")];
                case 938:
                    BsFillPaletteFill = (_b.sent()).BsFillPaletteFill;
                    return [2 /*return*/, BsFillPaletteFill];
                case 939: return [4 /*yield*/, import("react-icons/bs")];
                case 940:
                    BsFillPassFill = (_b.sent()).BsFillPassFill;
                    return [2 /*return*/, BsFillPassFill];
                case 941: return [4 /*yield*/, import("react-icons/bs")];
                case 942:
                    BsFillPassportFill = (_b.sent()).BsFillPassportFill;
                    return [2 /*return*/, BsFillPassportFill];
                case 943: return [4 /*yield*/, import("react-icons/bs")];
                case 944:
                    BsFillPatchCheckFill = (_b.sent()).BsFillPatchCheckFill;
                    return [2 /*return*/, BsFillPatchCheckFill];
                case 945: return [4 /*yield*/, import("react-icons/bs")];
                case 946:
                    BsFillPatchExclamationFill = (_b.sent()).BsFillPatchExclamationFill;
                    return [2 /*return*/, BsFillPatchExclamationFill];
                case 947: return [4 /*yield*/, import("react-icons/bs")];
                case 948:
                    BsFillPatchMinusFill = (_b.sent()).BsFillPatchMinusFill;
                    return [2 /*return*/, BsFillPatchMinusFill];
                case 949: return [4 /*yield*/, import("react-icons/bs")];
                case 950:
                    BsFillPatchPlusFill = (_b.sent()).BsFillPatchPlusFill;
                    return [2 /*return*/, BsFillPatchPlusFill];
                case 951: return [4 /*yield*/, import("react-icons/bs")];
                case 952:
                    BsFillPatchQuestionFill = (_b.sent()).BsFillPatchQuestionFill;
                    return [2 /*return*/, BsFillPatchQuestionFill];
                case 953: return [4 /*yield*/, import("react-icons/bs")];
                case 954:
                    BsFillPauseBtnFill = (_b.sent()).BsFillPauseBtnFill;
                    return [2 /*return*/, BsFillPauseBtnFill];
                case 955: return [4 /*yield*/, import("react-icons/bs")];
                case 956:
                    BsFillPauseCircleFill = (_b.sent()).BsFillPauseCircleFill;
                    return [2 /*return*/, BsFillPauseCircleFill];
                case 957: return [4 /*yield*/, import("react-icons/bs")];
                case 958:
                    BsFillPauseFill = (_b.sent()).BsFillPauseFill;
                    return [2 /*return*/, BsFillPauseFill];
                case 959: return [4 /*yield*/, import("react-icons/bs")];
                case 960:
                    BsFillPeaceFill = (_b.sent()).BsFillPeaceFill;
                    return [2 /*return*/, BsFillPeaceFill];
                case 961: return [4 /*yield*/, import("react-icons/bs")];
                case 962:
                    BsFillPenFill = (_b.sent()).BsFillPenFill;
                    return [2 /*return*/, BsFillPenFill];
                case 963: return [4 /*yield*/, import("react-icons/bs")];
                case 964:
                    BsFillPencilFill = (_b.sent()).BsFillPencilFill;
                    return [2 /*return*/, BsFillPencilFill];
                case 965: return [4 /*yield*/, import("react-icons/bs")];
                case 966:
                    BsFillPentagonFill = (_b.sent()).BsFillPentagonFill;
                    return [2 /*return*/, BsFillPentagonFill];
                case 967: return [4 /*yield*/, import("react-icons/bs")];
                case 968:
                    BsFillPeopleFill = (_b.sent()).BsFillPeopleFill;
                    return [2 /*return*/, BsFillPeopleFill];
                case 969: return [4 /*yield*/, import("react-icons/bs")];
                case 970:
                    BsFillPersonBadgeFill = (_b.sent()).BsFillPersonBadgeFill;
                    return [2 /*return*/, BsFillPersonBadgeFill];
                case 971: return [4 /*yield*/, import("react-icons/bs")];
                case 972:
                    BsFillPersonCheckFill = (_b.sent()).BsFillPersonCheckFill;
                    return [2 /*return*/, BsFillPersonCheckFill];
                case 973: return [4 /*yield*/, import("react-icons/bs")];
                case 974:
                    BsFillPersonDashFill = (_b.sent()).BsFillPersonDashFill;
                    return [2 /*return*/, BsFillPersonDashFill];
                case 975: return [4 /*yield*/, import("react-icons/bs")];
                case 976:
                    BsFillPersonFill = (_b.sent()).BsFillPersonFill;
                    return [2 /*return*/, BsFillPersonFill];
                case 977: return [4 /*yield*/, import("react-icons/bs")];
                case 978:
                    BsFillPersonLinesFill = (_b.sent()).BsFillPersonLinesFill;
                    return [2 /*return*/, BsFillPersonLinesFill];
                case 979: return [4 /*yield*/, import("react-icons/bs")];
                case 980:
                    BsFillPersonPlusFill = (_b.sent()).BsFillPersonPlusFill;
                    return [2 /*return*/, BsFillPersonPlusFill];
                case 981: return [4 /*yield*/, import("react-icons/bs")];
                case 982:
                    BsFillPersonVcardFill = (_b.sent()).BsFillPersonVcardFill;
                    return [2 /*return*/, BsFillPersonVcardFill];
                case 983: return [4 /*yield*/, import("react-icons/bs")];
                case 984:
                    BsFillPersonXFill = (_b.sent()).BsFillPersonXFill;
                    return [2 /*return*/, BsFillPersonXFill];
                case 985: return [4 /*yield*/, import("react-icons/bs")];
                case 986:
                    BsFillPhoneFill = (_b.sent()).BsFillPhoneFill;
                    return [2 /*return*/, BsFillPhoneFill];
                case 987: return [4 /*yield*/, import("react-icons/bs")];
                case 988:
                    BsFillPhoneLandscapeFill = (_b.sent()).BsFillPhoneLandscapeFill;
                    return [2 /*return*/, BsFillPhoneLandscapeFill];
                case 989: return [4 /*yield*/, import("react-icons/bs")];
                case 990:
                    BsFillPhoneVibrateFill = (_b.sent()).BsFillPhoneVibrateFill;
                    return [2 /*return*/, BsFillPhoneVibrateFill];
                case 991: return [4 /*yield*/, import("react-icons/bs")];
                case 992:
                    BsFillPieChartFill = (_b.sent()).BsFillPieChartFill;
                    return [2 /*return*/, BsFillPieChartFill];
                case 993: return [4 /*yield*/, import("react-icons/bs")];
                case 994:
                    BsFillPiggyBankFill = (_b.sent()).BsFillPiggyBankFill;
                    return [2 /*return*/, BsFillPiggyBankFill];
                case 995: return [4 /*yield*/, import("react-icons/bs")];
                case 996:
                    BsFillPinAngleFill = (_b.sent()).BsFillPinAngleFill;
                    return [2 /*return*/, BsFillPinAngleFill];
                case 997: return [4 /*yield*/, import("react-icons/bs")];
                case 998:
                    BsFillPinFill = (_b.sent()).BsFillPinFill;
                    return [2 /*return*/, BsFillPinFill];
                case 999: return [4 /*yield*/, import("react-icons/bs")];
                case 1000:
                    BsFillPinMapFill = (_b.sent()).BsFillPinMapFill;
                    return [2 /*return*/, BsFillPinMapFill];
                case 1001: return [4 /*yield*/, import("react-icons/bs")];
                case 1002:
                    BsFillPipFill = (_b.sent()).BsFillPipFill;
                    return [2 /*return*/, BsFillPipFill];
                case 1003: return [4 /*yield*/, import("react-icons/bs")];
                case 1004:
                    BsFillPlayBtnFill = (_b.sent()).BsFillPlayBtnFill;
                    return [2 /*return*/, BsFillPlayBtnFill];
                case 1005: return [4 /*yield*/, import("react-icons/bs")];
                case 1006:
                    BsFillPlayCircleFill = (_b.sent()).BsFillPlayCircleFill;
                    return [2 /*return*/, BsFillPlayCircleFill];
                case 1007: return [4 /*yield*/, import("react-icons/bs")];
                case 1008:
                    BsFillPlayFill = (_b.sent()).BsFillPlayFill;
                    return [2 /*return*/, BsFillPlayFill];
                case 1009: return [4 /*yield*/, import("react-icons/bs")];
                case 1010:
                    BsFillPlugFill = (_b.sent()).BsFillPlugFill;
                    return [2 /*return*/, BsFillPlugFill];
                case 1011: return [4 /*yield*/, import("react-icons/bs")];
                case 1012:
                    BsFillPlusCircleFill = (_b.sent()).BsFillPlusCircleFill;
                    return [2 /*return*/, BsFillPlusCircleFill];
                case 1013: return [4 /*yield*/, import("react-icons/bs")];
                case 1014:
                    BsFillPlusSquareFill = (_b.sent()).BsFillPlusSquareFill;
                    return [2 /*return*/, BsFillPlusSquareFill];
                case 1015: return [4 /*yield*/, import("react-icons/bs")];
                case 1016:
                    BsFillPostageFill = (_b.sent()).BsFillPostageFill;
                    return [2 /*return*/, BsFillPostageFill];
                case 1017: return [4 /*yield*/, import("react-icons/bs")];
                case 1018:
                    BsFillPostageHeartFill = (_b.sent()).BsFillPostageHeartFill;
                    return [2 /*return*/, BsFillPostageHeartFill];
                case 1019: return [4 /*yield*/, import("react-icons/bs")];
                case 1020:
                    BsFillPostcardFill = (_b.sent()).BsFillPostcardFill;
                    return [2 /*return*/, BsFillPostcardFill];
                case 1021: return [4 /*yield*/, import("react-icons/bs")];
                case 1022:
                    BsFillPostcardHeartFill = (_b.sent()).BsFillPostcardHeartFill;
                    return [2 /*return*/, BsFillPostcardHeartFill];
                case 1023: return [4 /*yield*/, import("react-icons/bs")];
                case 1024:
                    BsFillPrinterFill = (_b.sent()).BsFillPrinterFill;
                    return [2 /*return*/, BsFillPrinterFill];
                case 1025: return [4 /*yield*/, import("react-icons/bs")];
                case 1026:
                    BsFillProjectorFill = (_b.sent()).BsFillProjectorFill;
                    return [2 /*return*/, BsFillProjectorFill];
                case 1027: return [4 /*yield*/, import("react-icons/bs")];
                case 1028:
                    BsFillPuzzleFill = (_b.sent()).BsFillPuzzleFill;
                    return [2 /*return*/, BsFillPuzzleFill];
                case 1029: return [4 /*yield*/, import("react-icons/bs")];
                case 1030:
                    BsFillQuestionCircleFill = (_b.sent()).BsFillQuestionCircleFill;
                    return [2 /*return*/, BsFillQuestionCircleFill];
                case 1031: return [4 /*yield*/, import("react-icons/bs")];
                case 1032:
                    BsFillQuestionDiamondFill = (_b.sent()).BsFillQuestionDiamondFill;
                    return [2 /*return*/, BsFillQuestionDiamondFill];
                case 1033: return [4 /*yield*/, import("react-icons/bs")];
                case 1034:
                    BsFillQuestionOctagonFill = (_b.sent()).BsFillQuestionOctagonFill;
                    return [2 /*return*/, BsFillQuestionOctagonFill];
                case 1035: return [4 /*yield*/, import("react-icons/bs")];
                case 1036:
                    BsFillQuestionSquareFill = (_b.sent()).BsFillQuestionSquareFill;
                    return [2 /*return*/, BsFillQuestionSquareFill];
                case 1037: return [4 /*yield*/, import("react-icons/bs")];
                case 1038:
                    BsFillRCircleFill = (_b.sent()).BsFillRCircleFill;
                    return [2 /*return*/, BsFillRCircleFill];
                case 1039: return [4 /*yield*/, import("react-icons/bs")];
                case 1040:
                    BsFillRSquareFill = (_b.sent()).BsFillRSquareFill;
                    return [2 /*return*/, BsFillRSquareFill];
                case 1041: return [4 /*yield*/, import("react-icons/bs")];
                case 1042:
                    BsFillRecordBtnFill = (_b.sent()).BsFillRecordBtnFill;
                    return [2 /*return*/, BsFillRecordBtnFill];
                case 1043: return [4 /*yield*/, import("react-icons/bs")];
                case 1044:
                    BsFillRecordCircleFill = (_b.sent()).BsFillRecordCircleFill;
                    return [2 /*return*/, BsFillRecordCircleFill];
                case 1045: return [4 /*yield*/, import("react-icons/bs")];
                case 1046:
                    BsFillRecordFill = (_b.sent()).BsFillRecordFill;
                    return [2 /*return*/, BsFillRecordFill];
                case 1047: return [4 /*yield*/, import("react-icons/bs")];
                case 1048:
                    BsFillRecord2Fill = (_b.sent()).BsFillRecord2Fill;
                    return [2 /*return*/, BsFillRecord2Fill];
                case 1049: return [4 /*yield*/, import("react-icons/bs")];
                case 1050:
                    BsFillReplyAllFill = (_b.sent()).BsFillReplyAllFill;
                    return [2 /*return*/, BsFillReplyAllFill];
                case 1051: return [4 /*yield*/, import("react-icons/bs")];
                case 1052:
                    BsFillReplyFill = (_b.sent()).BsFillReplyFill;
                    return [2 /*return*/, BsFillReplyFill];
                case 1053: return [4 /*yield*/, import("react-icons/bs")];
                case 1054:
                    BsFillRewindBtnFill = (_b.sent()).BsFillRewindBtnFill;
                    return [2 /*return*/, BsFillRewindBtnFill];
                case 1055: return [4 /*yield*/, import("react-icons/bs")];
                case 1056:
                    BsFillRewindCircleFill = (_b.sent()).BsFillRewindCircleFill;
                    return [2 /*return*/, BsFillRewindCircleFill];
                case 1057: return [4 /*yield*/, import("react-icons/bs")];
                case 1058:
                    BsFillRewindFill = (_b.sent()).BsFillRewindFill;
                    return [2 /*return*/, BsFillRewindFill];
                case 1059: return [4 /*yield*/, import("react-icons/bs")];
                case 1060:
                    BsFillRocketFill = (_b.sent()).BsFillRocketFill;
                    return [2 /*return*/, BsFillRocketFill];
                case 1061: return [4 /*yield*/, import("react-icons/bs")];
                case 1062:
                    BsFillRocketTakeoffFill = (_b.sent()).BsFillRocketTakeoffFill;
                    return [2 /*return*/, BsFillRocketTakeoffFill];
                case 1063: return [4 /*yield*/, import("react-icons/bs")];
                case 1064:
                    BsFillRouterFill = (_b.sent()).BsFillRouterFill;
                    return [2 /*return*/, BsFillRouterFill];
                case 1065: return [4 /*yield*/, import("react-icons/bs")];
                case 1066:
                    BsFillRssFill = (_b.sent()).BsFillRssFill;
                    return [2 /*return*/, BsFillRssFill];
                case 1067: return [4 /*yield*/, import("react-icons/bs")];
                case 1068:
                    BsFillSafeFill = (_b.sent()).BsFillSafeFill;
                    return [2 /*return*/, BsFillSafeFill];
                case 1069: return [4 /*yield*/, import("react-icons/bs")];
                case 1070:
                    BsFillSafe2Fill = (_b.sent()).BsFillSafe2Fill;
                    return [2 /*return*/, BsFillSafe2Fill];
                case 1071: return [4 /*yield*/, import("react-icons/bs")];
                case 1072:
                    BsFillSaveFill = (_b.sent()).BsFillSaveFill;
                    return [2 /*return*/, BsFillSaveFill];
                case 1073: return [4 /*yield*/, import("react-icons/bs")];
                case 1074:
                    BsFillSave2Fill = (_b.sent()).BsFillSave2Fill;
                    return [2 /*return*/, BsFillSave2Fill];
                case 1075: return [4 /*yield*/, import("react-icons/bs")];
                case 1076:
                    BsFillSdCardFill = (_b.sent()).BsFillSdCardFill;
                    return [2 /*return*/, BsFillSdCardFill];
                case 1077: return [4 /*yield*/, import("react-icons/bs")];
                case 1078:
                    BsFillSearchHeartFill = (_b.sent()).BsFillSearchHeartFill;
                    return [2 /*return*/, BsFillSearchHeartFill];
                case 1079: return [4 /*yield*/, import("react-icons/bs")];
                case 1080:
                    BsFillSendArrowDownFill = (_b.sent()).BsFillSendArrowDownFill;
                    return [2 /*return*/, BsFillSendArrowDownFill];
                case 1081: return [4 /*yield*/, import("react-icons/bs")];
                case 1082:
                    BsFillSendArrowUpFill = (_b.sent()).BsFillSendArrowUpFill;
                    return [2 /*return*/, BsFillSendArrowUpFill];
                case 1083: return [4 /*yield*/, import("react-icons/bs")];
                case 1084:
                    BsFillSendCheckFill = (_b.sent()).BsFillSendCheckFill;
                    return [2 /*return*/, BsFillSendCheckFill];
                case 1085: return [4 /*yield*/, import("react-icons/bs")];
                case 1086:
                    BsFillSendDashFill = (_b.sent()).BsFillSendDashFill;
                    return [2 /*return*/, BsFillSendDashFill];
                case 1087: return [4 /*yield*/, import("react-icons/bs")];
                case 1088:
                    BsFillSendExclamationFill = (_b.sent()).BsFillSendExclamationFill;
                    return [2 /*return*/, BsFillSendExclamationFill];
                case 1089: return [4 /*yield*/, import("react-icons/bs")];
                case 1090:
                    BsFillSendFill = (_b.sent()).BsFillSendFill;
                    return [2 /*return*/, BsFillSendFill];
                case 1091: return [4 /*yield*/, import("react-icons/bs")];
                case 1092:
                    BsFillSendPlusFill = (_b.sent()).BsFillSendPlusFill;
                    return [2 /*return*/, BsFillSendPlusFill];
                case 1093: return [4 /*yield*/, import("react-icons/bs")];
                case 1094:
                    BsFillSendSlashFill = (_b.sent()).BsFillSendSlashFill;
                    return [2 /*return*/, BsFillSendSlashFill];
                case 1095: return [4 /*yield*/, import("react-icons/bs")];
                case 1096:
                    BsFillSendXFill = (_b.sent()).BsFillSendXFill;
                    return [2 /*return*/, BsFillSendXFill];
                case 1097: return [4 /*yield*/, import("react-icons/bs")];
                case 1098:
                    BsFillShareFill = (_b.sent()).BsFillShareFill;
                    return [2 /*return*/, BsFillShareFill];
                case 1099: return [4 /*yield*/, import("react-icons/bs")];
                case 1100:
                    BsFillShieldFill = (_b.sent()).BsFillShieldFill;
                    return [2 /*return*/, BsFillShieldFill];
                case 1101: return [4 /*yield*/, import("react-icons/bs")];
                case 1102:
                    BsFillShieldLockFill = (_b.sent()).BsFillShieldLockFill;
                    return [2 /*return*/, BsFillShieldLockFill];
                case 1103: return [4 /*yield*/, import("react-icons/bs")];
                case 1104:
                    BsFillShieldSlashFill = (_b.sent()).BsFillShieldSlashFill;
                    return [2 /*return*/, BsFillShieldSlashFill];
                case 1105: return [4 /*yield*/, import("react-icons/bs")];
                case 1106:
                    BsFillShiftFill = (_b.sent()).BsFillShiftFill;
                    return [2 /*return*/, BsFillShiftFill];
                case 1107: return [4 /*yield*/, import("react-icons/bs")];
                case 1108:
                    BsFillSignDeadEndFill = (_b.sent()).BsFillSignDeadEndFill;
                    return [2 /*return*/, BsFillSignDeadEndFill];
                case 1109: return [4 /*yield*/, import("react-icons/bs")];
                case 1110:
                    BsFillSignDoNotEnterFill = (_b.sent()).BsFillSignDoNotEnterFill;
                    return [2 /*return*/, BsFillSignDoNotEnterFill];
                case 1111: return [4 /*yield*/, import("react-icons/bs")];
                case 1112:
                    BsFillSignIntersectionFill = (_b.sent()).BsFillSignIntersectionFill;
                    return [2 /*return*/, BsFillSignIntersectionFill];
                case 1113: return [4 /*yield*/, import("react-icons/bs")];
                case 1114:
                    BsFillSignIntersectionSideFill = (_b.sent()).BsFillSignIntersectionSideFill;
                    return [2 /*return*/, BsFillSignIntersectionSideFill];
                case 1115: return [4 /*yield*/, import("react-icons/bs")];
                case 1116:
                    BsFillSignIntersectionTFill = (_b.sent()).BsFillSignIntersectionTFill;
                    return [2 /*return*/, BsFillSignIntersectionTFill];
                case 1117: return [4 /*yield*/, import("react-icons/bs")];
                case 1118:
                    BsFillSignIntersectionYFill = (_b.sent()).BsFillSignIntersectionYFill;
                    return [2 /*return*/, BsFillSignIntersectionYFill];
                case 1119: return [4 /*yield*/, import("react-icons/bs")];
                case 1120:
                    BsFillSignMergeLeftFill = (_b.sent()).BsFillSignMergeLeftFill;
                    return [2 /*return*/, BsFillSignMergeLeftFill];
                case 1121: return [4 /*yield*/, import("react-icons/bs")];
                case 1122:
                    BsFillSignMergeRightFill = (_b.sent()).BsFillSignMergeRightFill;
                    return [2 /*return*/, BsFillSignMergeRightFill];
                case 1123: return [4 /*yield*/, import("react-icons/bs")];
                case 1124:
                    BsFillSignNoLeftTurnFill = (_b.sent()).BsFillSignNoLeftTurnFill;
                    return [2 /*return*/, BsFillSignNoLeftTurnFill];
                case 1125: return [4 /*yield*/, import("react-icons/bs")];
                case 1126:
                    BsFillSignNoParkingFill = (_b.sent()).BsFillSignNoParkingFill;
                    return [2 /*return*/, BsFillSignNoParkingFill];
                case 1127: return [4 /*yield*/, import("react-icons/bs")];
                case 1128:
                    BsFillSignNoRightTurnFill = (_b.sent()).BsFillSignNoRightTurnFill;
                    return [2 /*return*/, BsFillSignNoRightTurnFill];
                case 1129: return [4 /*yield*/, import("react-icons/bs")];
                case 1130:
                    BsFillSignRailroadFill = (_b.sent()).BsFillSignRailroadFill;
                    return [2 /*return*/, BsFillSignRailroadFill];
                case 1131: return [4 /*yield*/, import("react-icons/bs")];
                case 1132:
                    BsFillSignStopFill = (_b.sent()).BsFillSignStopFill;
                    return [2 /*return*/, BsFillSignStopFill];
                case 1133: return [4 /*yield*/, import("react-icons/bs")];
                case 1134:
                    BsFillSignStopLightsFill = (_b.sent()).BsFillSignStopLightsFill;
                    return [2 /*return*/, BsFillSignStopLightsFill];
                case 1135: return [4 /*yield*/, import("react-icons/bs")];
                case 1136:
                    BsFillSignTurnLeftFill = (_b.sent()).BsFillSignTurnLeftFill;
                    return [2 /*return*/, BsFillSignTurnLeftFill];
                case 1137: return [4 /*yield*/, import("react-icons/bs")];
                case 1138:
                    BsFillSignTurnRightFill = (_b.sent()).BsFillSignTurnRightFill;
                    return [2 /*return*/, BsFillSignTurnRightFill];
                case 1139: return [4 /*yield*/, import("react-icons/bs")];
                case 1140:
                    BsFillSignTurnSlightLeftFill = (_b.sent()).BsFillSignTurnSlightLeftFill;
                    return [2 /*return*/, BsFillSignTurnSlightLeftFill];
                case 1141: return [4 /*yield*/, import("react-icons/bs")];
                case 1142:
                    BsFillSignTurnSlightRightFill = (_b.sent()).BsFillSignTurnSlightRightFill;
                    return [2 /*return*/, BsFillSignTurnSlightRightFill];
                case 1143: return [4 /*yield*/, import("react-icons/bs")];
                case 1144:
                    BsFillSignYieldFill = (_b.sent()).BsFillSignYieldFill;
                    return [2 /*return*/, BsFillSignYieldFill];
                case 1145: return [4 /*yield*/, import("react-icons/bs")];
                case 1146:
                    BsFillSignpost2Fill = (_b.sent()).BsFillSignpost2Fill;
                    return [2 /*return*/, BsFillSignpost2Fill];
                case 1147: return [4 /*yield*/, import("react-icons/bs")];
                case 1148:
                    BsFillSignpostFill = (_b.sent()).BsFillSignpostFill;
                    return [2 /*return*/, BsFillSignpostFill];
                case 1149: return [4 /*yield*/, import("react-icons/bs")];
                case 1150:
                    BsFillSignpostSplitFill = (_b.sent()).BsFillSignpostSplitFill;
                    return [2 /*return*/, BsFillSignpostSplitFill];
                case 1151: return [4 /*yield*/, import("react-icons/bs")];
                case 1152:
                    BsFillSimFill = (_b.sent()).BsFillSimFill;
                    return [2 /*return*/, BsFillSimFill];
                case 1153: return [4 /*yield*/, import("react-icons/bs")];
                case 1154:
                    BsFillSimSlashFill = (_b.sent()).BsFillSimSlashFill;
                    return [2 /*return*/, BsFillSimSlashFill];
                case 1155: return [4 /*yield*/, import("react-icons/bs")];
                case 1156:
                    BsFillSkipBackwardBtnFill = (_b.sent()).BsFillSkipBackwardBtnFill;
                    return [2 /*return*/, BsFillSkipBackwardBtnFill];
                case 1157: return [4 /*yield*/, import("react-icons/bs")];
                case 1158:
                    BsFillSkipBackwardCircleFill = (_b.sent()).BsFillSkipBackwardCircleFill;
                    return [2 /*return*/, BsFillSkipBackwardCircleFill];
                case 1159: return [4 /*yield*/, import("react-icons/bs")];
                case 1160:
                    BsFillSkipBackwardFill = (_b.sent()).BsFillSkipBackwardFill;
                    return [2 /*return*/, BsFillSkipBackwardFill];
                case 1161: return [4 /*yield*/, import("react-icons/bs")];
                case 1162:
                    BsFillSkipEndBtnFill = (_b.sent()).BsFillSkipEndBtnFill;
                    return [2 /*return*/, BsFillSkipEndBtnFill];
                case 1163: return [4 /*yield*/, import("react-icons/bs")];
                case 1164:
                    BsFillSkipEndCircleFill = (_b.sent()).BsFillSkipEndCircleFill;
                    return [2 /*return*/, BsFillSkipEndCircleFill];
                case 1165: return [4 /*yield*/, import("react-icons/bs")];
                case 1166:
                    BsFillSkipEndFill = (_b.sent()).BsFillSkipEndFill;
                    return [2 /*return*/, BsFillSkipEndFill];
                case 1167: return [4 /*yield*/, import("react-icons/bs")];
                case 1168:
                    BsFillSkipForwardBtnFill = (_b.sent()).BsFillSkipForwardBtnFill;
                    return [2 /*return*/, BsFillSkipForwardBtnFill];
                case 1169: return [4 /*yield*/, import("react-icons/bs")];
                case 1170:
                    BsFillSkipForwardCircleFill = (_b.sent()).BsFillSkipForwardCircleFill;
                    return [2 /*return*/, BsFillSkipForwardCircleFill];
                case 1171: return [4 /*yield*/, import("react-icons/bs")];
                case 1172:
                    BsFillSkipForwardFill = (_b.sent()).BsFillSkipForwardFill;
                    return [2 /*return*/, BsFillSkipForwardFill];
                case 1173: return [4 /*yield*/, import("react-icons/bs")];
                case 1174:
                    BsFillSkipStartBtnFill = (_b.sent()).BsFillSkipStartBtnFill;
                    return [2 /*return*/, BsFillSkipStartBtnFill];
                case 1175: return [4 /*yield*/, import("react-icons/bs")];
                case 1176:
                    BsFillSkipStartCircleFill = (_b.sent()).BsFillSkipStartCircleFill;
                    return [2 /*return*/, BsFillSkipStartCircleFill];
                case 1177: return [4 /*yield*/, import("react-icons/bs")];
                case 1178:
                    BsFillSkipStartFill = (_b.sent()).BsFillSkipStartFill;
                    return [2 /*return*/, BsFillSkipStartFill];
                case 1179: return [4 /*yield*/, import("react-icons/bs")];
                case 1180:
                    BsFillSlashCircleFill = (_b.sent()).BsFillSlashCircleFill;
                    return [2 /*return*/, BsFillSlashCircleFill];
                case 1181: return [4 /*yield*/, import("react-icons/bs")];
                case 1182:
                    BsFillSlashSquareFill = (_b.sent()).BsFillSlashSquareFill;
                    return [2 /*return*/, BsFillSlashSquareFill];
                case 1183: return [4 /*yield*/, import("react-icons/bs")];
                case 1184:
                    BsFillSpeakerFill = (_b.sent()).BsFillSpeakerFill;
                    return [2 /*return*/, BsFillSpeakerFill];
                case 1185: return [4 /*yield*/, import("react-icons/bs")];
                case 1186:
                    BsFillSquareFill = (_b.sent()).BsFillSquareFill;
                    return [2 /*return*/, BsFillSquareFill];
                case 1187: return [4 /*yield*/, import("react-icons/bs")];
                case 1188:
                    BsFillStarFill = (_b.sent()).BsFillStarFill;
                    return [2 /*return*/, BsFillStarFill];
                case 1189: return [4 /*yield*/, import("react-icons/bs")];
                case 1190:
                    BsFillStickiesFill = (_b.sent()).BsFillStickiesFill;
                    return [2 /*return*/, BsFillStickiesFill];
                case 1191: return [4 /*yield*/, import("react-icons/bs")];
                case 1192:
                    BsFillStickyFill = (_b.sent()).BsFillStickyFill;
                    return [2 /*return*/, BsFillStickyFill];
                case 1193: return [4 /*yield*/, import("react-icons/bs")];
                case 1194:
                    BsFillStopBtnFill = (_b.sent()).BsFillStopBtnFill;
                    return [2 /*return*/, BsFillStopBtnFill];
                case 1195: return [4 /*yield*/, import("react-icons/bs")];
                case 1196:
                    BsFillStopCircleFill = (_b.sent()).BsFillStopCircleFill;
                    return [2 /*return*/, BsFillStopCircleFill];
                case 1197: return [4 /*yield*/, import("react-icons/bs")];
                case 1198:
                    BsFillStopFill = (_b.sent()).BsFillStopFill;
                    return [2 /*return*/, BsFillStopFill];
                case 1199: return [4 /*yield*/, import("react-icons/bs")];
                case 1200:
                    BsFillStoplightsFill = (_b.sent()).BsFillStoplightsFill;
                    return [2 /*return*/, BsFillStoplightsFill];
                case 1201: return [4 /*yield*/, import("react-icons/bs")];
                case 1202:
                    BsFillStopwatchFill = (_b.sent()).BsFillStopwatchFill;
                    return [2 /*return*/, BsFillStopwatchFill];
                case 1203: return [4 /*yield*/, import("react-icons/bs")];
                case 1204:
                    BsFillSuitClubFill = (_b.sent()).BsFillSuitClubFill;
                    return [2 /*return*/, BsFillSuitClubFill];
                case 1205: return [4 /*yield*/, import("react-icons/bs")];
                case 1206:
                    BsFillSuitDiamondFill = (_b.sent()).BsFillSuitDiamondFill;
                    return [2 /*return*/, BsFillSuitDiamondFill];
                case 1207: return [4 /*yield*/, import("react-icons/bs")];
                case 1208:
                    BsFillSuitHeartFill = (_b.sent()).BsFillSuitHeartFill;
                    return [2 /*return*/, BsFillSuitHeartFill];
                case 1209: return [4 /*yield*/, import("react-icons/bs")];
                case 1210:
                    BsFillSuitSpadeFill = (_b.sent()).BsFillSuitSpadeFill;
                    return [2 /*return*/, BsFillSuitSpadeFill];
                case 1211: return [4 /*yield*/, import("react-icons/bs")];
                case 1212:
                    BsFillSuitcaseFill = (_b.sent()).BsFillSuitcaseFill;
                    return [2 /*return*/, BsFillSuitcaseFill];
                case 1213: return [4 /*yield*/, import("react-icons/bs")];
                case 1214:
                    BsFillSuitcaseLgFill = (_b.sent()).BsFillSuitcaseLgFill;
                    return [2 /*return*/, BsFillSuitcaseLgFill];
                case 1215: return [4 /*yield*/, import("react-icons/bs")];
                case 1216:
                    BsFillSuitcase2Fill = (_b.sent()).BsFillSuitcase2Fill;
                    return [2 /*return*/, BsFillSuitcase2Fill];
                case 1217: return [4 /*yield*/, import("react-icons/bs")];
                case 1218:
                    BsFillSunFill = (_b.sent()).BsFillSunFill;
                    return [2 /*return*/, BsFillSunFill];
                case 1219: return [4 /*yield*/, import("react-icons/bs")];
                case 1220:
                    BsFillSunriseFill = (_b.sent()).BsFillSunriseFill;
                    return [2 /*return*/, BsFillSunriseFill];
                case 1221: return [4 /*yield*/, import("react-icons/bs")];
                case 1222:
                    BsFillSunsetFill = (_b.sent()).BsFillSunsetFill;
                    return [2 /*return*/, BsFillSunsetFill];
                case 1223: return [4 /*yield*/, import("react-icons/bs")];
                case 1224:
                    BsFillTabletFill = (_b.sent()).BsFillTabletFill;
                    return [2 /*return*/, BsFillTabletFill];
                case 1225: return [4 /*yield*/, import("react-icons/bs")];
                case 1226:
                    BsFillTabletLandscapeFill = (_b.sent()).BsFillTabletLandscapeFill;
                    return [2 /*return*/, BsFillTabletLandscapeFill];
                case 1227: return [4 /*yield*/, import("react-icons/bs")];
                case 1228:
                    BsFillTagFill = (_b.sent()).BsFillTagFill;
                    return [2 /*return*/, BsFillTagFill];
                case 1229: return [4 /*yield*/, import("react-icons/bs")];
                case 1230:
                    BsFillTagsFill = (_b.sent()).BsFillTagsFill;
                    return [2 /*return*/, BsFillTagsFill];
                case 1231: return [4 /*yield*/, import("react-icons/bs")];
                case 1232:
                    BsFillTaxiFrontFill = (_b.sent()).BsFillTaxiFrontFill;
                    return [2 /*return*/, BsFillTaxiFrontFill];
                case 1233: return [4 /*yield*/, import("react-icons/bs")];
                case 1234:
                    BsFillTelephoneFill = (_b.sent()).BsFillTelephoneFill;
                    return [2 /*return*/, BsFillTelephoneFill];
                case 1235: return [4 /*yield*/, import("react-icons/bs")];
                case 1236:
                    BsFillTelephoneForwardFill = (_b.sent()).BsFillTelephoneForwardFill;
                    return [2 /*return*/, BsFillTelephoneForwardFill];
                case 1237: return [4 /*yield*/, import("react-icons/bs")];
                case 1238:
                    BsFillTelephoneInboundFill = (_b.sent()).BsFillTelephoneInboundFill;
                    return [2 /*return*/, BsFillTelephoneInboundFill];
                case 1239: return [4 /*yield*/, import("react-icons/bs")];
                case 1240:
                    BsFillTelephoneMinusFill = (_b.sent()).BsFillTelephoneMinusFill;
                    return [2 /*return*/, BsFillTelephoneMinusFill];
                case 1241: return [4 /*yield*/, import("react-icons/bs")];
                case 1242:
                    BsFillTelephoneOutboundFill = (_b.sent()).BsFillTelephoneOutboundFill;
                    return [2 /*return*/, BsFillTelephoneOutboundFill];
                case 1243: return [4 /*yield*/, import("react-icons/bs")];
                case 1244:
                    BsFillTelephonePlusFill = (_b.sent()).BsFillTelephonePlusFill;
                    return [2 /*return*/, BsFillTelephonePlusFill];
                case 1245: return [4 /*yield*/, import("react-icons/bs")];
                case 1246:
                    BsFillTelephoneXFill = (_b.sent()).BsFillTelephoneXFill;
                    return [2 /*return*/, BsFillTelephoneXFill];
                case 1247: return [4 /*yield*/, import("react-icons/bs")];
                case 1248:
                    BsFillTerminalFill = (_b.sent()).BsFillTerminalFill;
                    return [2 /*return*/, BsFillTerminalFill];
                case 1249: return [4 /*yield*/, import("react-icons/bs")];
                case 1250:
                    BsFillThreadsFill = (_b.sent()).BsFillThreadsFill;
                    return [2 /*return*/, BsFillThreadsFill];
                case 1251: return [4 /*yield*/, import("react-icons/bs")];
                case 1252:
                    BsFillThunderboltFill = (_b.sent()).BsFillThunderboltFill;
                    return [2 /*return*/, BsFillThunderboltFill];
                case 1253: return [4 /*yield*/, import("react-icons/bs")];
                case 1254:
                    BsFillTicketDetailedFill = (_b.sent()).BsFillTicketDetailedFill;
                    return [2 /*return*/, BsFillTicketDetailedFill];
                case 1255: return [4 /*yield*/, import("react-icons/bs")];
                case 1256:
                    BsFillTicketFill = (_b.sent()).BsFillTicketFill;
                    return [2 /*return*/, BsFillTicketFill];
                case 1257: return [4 /*yield*/, import("react-icons/bs")];
                case 1258:
                    BsFillTicketPerforatedFill = (_b.sent()).BsFillTicketPerforatedFill;
                    return [2 /*return*/, BsFillTicketPerforatedFill];
                case 1259: return [4 /*yield*/, import("react-icons/bs")];
                case 1260:
                    BsFillTrainFreightFrontFill = (_b.sent()).BsFillTrainFreightFrontFill;
                    return [2 /*return*/, BsFillTrainFreightFrontFill];
                case 1261: return [4 /*yield*/, import("react-icons/bs")];
                case 1262:
                    BsFillTrainFrontFill = (_b.sent()).BsFillTrainFrontFill;
                    return [2 /*return*/, BsFillTrainFrontFill];
                case 1263: return [4 /*yield*/, import("react-icons/bs")];
                case 1264:
                    BsFillTrainLightrailFrontFill = (_b.sent()).BsFillTrainLightrailFrontFill;
                    return [2 /*return*/, BsFillTrainLightrailFrontFill];
                case 1265: return [4 /*yield*/, import("react-icons/bs")];
                case 1266:
                    BsFillTrashFill = (_b.sent()).BsFillTrashFill;
                    return [2 /*return*/, BsFillTrashFill];
                case 1267: return [4 /*yield*/, import("react-icons/bs")];
                case 1268:
                    BsFillTrash2Fill = (_b.sent()).BsFillTrash2Fill;
                    return [2 /*return*/, BsFillTrash2Fill];
                case 1269: return [4 /*yield*/, import("react-icons/bs")];
                case 1270:
                    BsFillTrash3Fill = (_b.sent()).BsFillTrash3Fill;
                    return [2 /*return*/, BsFillTrash3Fill];
                case 1271: return [4 /*yield*/, import("react-icons/bs")];
                case 1272:
                    BsFillTreeFill = (_b.sent()).BsFillTreeFill;
                    return [2 /*return*/, BsFillTreeFill];
                case 1273: return [4 /*yield*/, import("react-icons/bs")];
                case 1274:
                    BsFillTriangleFill = (_b.sent()).BsFillTriangleFill;
                    return [2 /*return*/, BsFillTriangleFill];
                case 1275: return [4 /*yield*/, import("react-icons/bs")];
                case 1276:
                    BsFillTrophyFill = (_b.sent()).BsFillTrophyFill;
                    return [2 /*return*/, BsFillTrophyFill];
                case 1277: return [4 /*yield*/, import("react-icons/bs")];
                case 1278:
                    BsFillTruckFrontFill = (_b.sent()).BsFillTruckFrontFill;
                    return [2 /*return*/, BsFillTruckFrontFill];
                case 1279: return [4 /*yield*/, import("react-icons/bs")];
                case 1280:
                    BsFillTvFill = (_b.sent()).BsFillTvFill;
                    return [2 /*return*/, BsFillTvFill];
                case 1281: return [4 /*yield*/, import("react-icons/bs")];
                case 1282:
                    BsFillUmbrellaFill = (_b.sent()).BsFillUmbrellaFill;
                    return [2 /*return*/, BsFillUmbrellaFill];
                case 1283: return [4 /*yield*/, import("react-icons/bs")];
                case 1284:
                    BsFillUnlockFill = (_b.sent()).BsFillUnlockFill;
                    return [2 /*return*/, BsFillUnlockFill];
                case 1285: return [4 /*yield*/, import("react-icons/bs")];
                case 1286:
                    BsFillUsbCFill = (_b.sent()).BsFillUsbCFill;
                    return [2 /*return*/, BsFillUsbCFill];
                case 1287: return [4 /*yield*/, import("react-icons/bs")];
                case 1288:
                    BsFillUsbDriveFill = (_b.sent()).BsFillUsbDriveFill;
                    return [2 /*return*/, BsFillUsbDriveFill];
                case 1289: return [4 /*yield*/, import("react-icons/bs")];
                case 1290:
                    BsFillUsbFill = (_b.sent()).BsFillUsbFill;
                    return [2 /*return*/, BsFillUsbFill];
                case 1291: return [4 /*yield*/, import("react-icons/bs")];
                case 1292:
                    BsFillUsbMicroFill = (_b.sent()).BsFillUsbMicroFill;
                    return [2 /*return*/, BsFillUsbMicroFill];
                case 1293: return [4 /*yield*/, import("react-icons/bs")];
                case 1294:
                    BsFillUsbMiniFill = (_b.sent()).BsFillUsbMiniFill;
                    return [2 /*return*/, BsFillUsbMiniFill];
                case 1295: return [4 /*yield*/, import("react-icons/bs")];
                case 1296:
                    BsFillUsbPlugFill = (_b.sent()).BsFillUsbPlugFill;
                    return [2 /*return*/, BsFillUsbPlugFill];
                case 1297: return [4 /*yield*/, import("react-icons/bs")];
                case 1298:
                    BsFillVinylFill = (_b.sent()).BsFillVinylFill;
                    return [2 /*return*/, BsFillVinylFill];
                case 1299: return [4 /*yield*/, import("react-icons/bs")];
                case 1300:
                    BsFillVolumeDownFill = (_b.sent()).BsFillVolumeDownFill;
                    return [2 /*return*/, BsFillVolumeDownFill];
                case 1301: return [4 /*yield*/, import("react-icons/bs")];
                case 1302:
                    BsFillVolumeMuteFill = (_b.sent()).BsFillVolumeMuteFill;
                    return [2 /*return*/, BsFillVolumeMuteFill];
                case 1303: return [4 /*yield*/, import("react-icons/bs")];
                case 1304:
                    BsFillVolumeOffFill = (_b.sent()).BsFillVolumeOffFill;
                    return [2 /*return*/, BsFillVolumeOffFill];
                case 1305: return [4 /*yield*/, import("react-icons/bs")];
                case 1306:
                    BsFillVolumeUpFill = (_b.sent()).BsFillVolumeUpFill;
                    return [2 /*return*/, BsFillVolumeUpFill];
                case 1307: return [4 /*yield*/, import("react-icons/bs")];
                case 1308:
                    BsFillWalletFill = (_b.sent()).BsFillWalletFill;
                    return [2 /*return*/, BsFillWalletFill];
                case 1309: return [4 /*yield*/, import("react-icons/bs")];
                case 1310:
                    BsFillWebcamFill = (_b.sent()).BsFillWebcamFill;
                    return [2 /*return*/, BsFillWebcamFill];
                case 1311: return [4 /*yield*/, import("react-icons/bs")];
                case 1312:
                    BsFillWrenchAdjustableCircleFill = (_b.sent()).BsFillWrenchAdjustableCircleFill;
                    return [2 /*return*/, BsFillWrenchAdjustableCircleFill];
                case 1313: return [4 /*yield*/, import("react-icons/bs")];
                case 1314:
                    BsFillXCircleFill = (_b.sent()).BsFillXCircleFill;
                    return [2 /*return*/, BsFillXCircleFill];
                case 1315: return [4 /*yield*/, import("react-icons/bs")];
                case 1316:
                    BsFillXDiamondFill = (_b.sent()).BsFillXDiamondFill;
                    return [2 /*return*/, BsFillXDiamondFill];
                case 1317: return [4 /*yield*/, import("react-icons/bs")];
                case 1318:
                    BsFillXOctagonFill = (_b.sent()).BsFillXOctagonFill;
                    return [2 /*return*/, BsFillXOctagonFill];
                case 1319: return [4 /*yield*/, import("react-icons/bs")];
                case 1320:
                    BsFillXSquareFill = (_b.sent()).BsFillXSquareFill;
                    return [2 /*return*/, BsFillXSquareFill];
                case 1321: return [4 /*yield*/, import("react-icons/bs")];
                case 1322:
                    BsReverseBackspaceReverse = (_b.sent()).BsReverseBackspaceReverse;
                    return [2 /*return*/, BsReverseBackspaceReverse];
                case 1323: return [4 /*yield*/, import("react-icons/bs")];
                case 1324:
                    BsReverseLayoutSidebarInsetReverse = (_b.sent()).BsReverseLayoutSidebarInsetReverse;
                    return [2 /*return*/, BsReverseLayoutSidebarInsetReverse];
                case 1325: return [4 /*yield*/, import("react-icons/bs")];
                case 1326:
                    BsReverseLayoutSidebarReverse = (_b.sent()).BsReverseLayoutSidebarReverse;
                    return [2 /*return*/, BsReverseLayoutSidebarReverse];
                case 1327: return [4 /*yield*/, import("react-icons/bs")];
                case 1328:
                    BsReverseLayoutTextSidebarReverse = (_b.sent()).BsReverseLayoutTextSidebarReverse;
                    return [2 /*return*/, BsReverseLayoutTextSidebarReverse];
                case 1329: return [4 /*yield*/, import("react-icons/bs")];
                case 1330:
                    BsReverseLayoutTextWindowReverse = (_b.sent()).BsReverseLayoutTextWindowReverse;
                    return [2 /*return*/, BsReverseLayoutTextWindowReverse];
                case 1331: return [4 /*yield*/, import("react-icons/bs")];
                case 1332:
                    BsReverseListColumnsReverse = (_b.sent()).BsReverseListColumnsReverse;
                    return [2 /*return*/, BsReverseListColumnsReverse];
                case 1333: return [4 /*yield*/, import("react-icons/bs")];
                case 1334:
                    Bs0CircleFill = (_b.sent()).Bs0CircleFill;
                    return [2 /*return*/, Bs0CircleFill];
                case 1335: return [4 /*yield*/, import("react-icons/bs")];
                case 1336:
                    Bs0Circle = (_b.sent()).Bs0Circle;
                    return [2 /*return*/, Bs0Circle];
                case 1337: return [4 /*yield*/, import("react-icons/bs")];
                case 1338:
                    Bs0SquareFill = (_b.sent()).Bs0SquareFill;
                    return [2 /*return*/, Bs0SquareFill];
                case 1339: return [4 /*yield*/, import("react-icons/bs")];
                case 1340:
                    Bs0Square = (_b.sent()).Bs0Square;
                    return [2 /*return*/, Bs0Square];
                case 1341: return [4 /*yield*/, import("react-icons/bs")];
                case 1342:
                    Bs1CircleFill = (_b.sent()).Bs1CircleFill;
                    return [2 /*return*/, Bs1CircleFill];
                case 1343: return [4 /*yield*/, import("react-icons/bs")];
                case 1344:
                    Bs1Circle = (_b.sent()).Bs1Circle;
                    return [2 /*return*/, Bs1Circle];
                case 1345: return [4 /*yield*/, import("react-icons/bs")];
                case 1346:
                    Bs1SquareFill = (_b.sent()).Bs1SquareFill;
                    return [2 /*return*/, Bs1SquareFill];
                case 1347: return [4 /*yield*/, import("react-icons/bs")];
                case 1348:
                    Bs1Square = (_b.sent()).Bs1Square;
                    return [2 /*return*/, Bs1Square];
                case 1349: return [4 /*yield*/, import("react-icons/bs")];
                case 1350:
                    Bs123 = (_b.sent()).Bs123;
                    return [2 /*return*/, Bs123];
                case 1351: return [4 /*yield*/, import("react-icons/bs")];
                case 1352:
                    Bs2CircleFill = (_b.sent()).Bs2CircleFill;
                    return [2 /*return*/, Bs2CircleFill];
                case 1353: return [4 /*yield*/, import("react-icons/bs")];
                case 1354:
                    Bs2Circle = (_b.sent()).Bs2Circle;
                    return [2 /*return*/, Bs2Circle];
                case 1355: return [4 /*yield*/, import("react-icons/bs")];
                case 1356:
                    Bs2SquareFill = (_b.sent()).Bs2SquareFill;
                    return [2 /*return*/, Bs2SquareFill];
                case 1357: return [4 /*yield*/, import("react-icons/bs")];
                case 1358:
                    Bs2Square = (_b.sent()).Bs2Square;
                    return [2 /*return*/, Bs2Square];
                case 1359: return [4 /*yield*/, import("react-icons/bs")];
                case 1360:
                    Bs3CircleFill = (_b.sent()).Bs3CircleFill;
                    return [2 /*return*/, Bs3CircleFill];
                case 1361: return [4 /*yield*/, import("react-icons/bs")];
                case 1362:
                    Bs3Circle = (_b.sent()).Bs3Circle;
                    return [2 /*return*/, Bs3Circle];
                case 1363: return [4 /*yield*/, import("react-icons/bs")];
                case 1364:
                    Bs3SquareFill = (_b.sent()).Bs3SquareFill;
                    return [2 /*return*/, Bs3SquareFill];
                case 1365: return [4 /*yield*/, import("react-icons/bs")];
                case 1366:
                    Bs3Square = (_b.sent()).Bs3Square;
                    return [2 /*return*/, Bs3Square];
                case 1367: return [4 /*yield*/, import("react-icons/bs")];
                case 1368:
                    Bs4CircleFill = (_b.sent()).Bs4CircleFill;
                    return [2 /*return*/, Bs4CircleFill];
                case 1369: return [4 /*yield*/, import("react-icons/bs")];
                case 1370:
                    Bs4Circle = (_b.sent()).Bs4Circle;
                    return [2 /*return*/, Bs4Circle];
                case 1371: return [4 /*yield*/, import("react-icons/bs")];
                case 1372:
                    Bs4SquareFill = (_b.sent()).Bs4SquareFill;
                    return [2 /*return*/, Bs4SquareFill];
                case 1373: return [4 /*yield*/, import("react-icons/bs")];
                case 1374:
                    Bs4Square = (_b.sent()).Bs4Square;
                    return [2 /*return*/, Bs4Square];
                case 1375: return [4 /*yield*/, import("react-icons/bs")];
                case 1376:
                    Bs5CircleFill = (_b.sent()).Bs5CircleFill;
                    return [2 /*return*/, Bs5CircleFill];
                case 1377: return [4 /*yield*/, import("react-icons/bs")];
                case 1378:
                    Bs5Circle = (_b.sent()).Bs5Circle;
                    return [2 /*return*/, Bs5Circle];
                case 1379: return [4 /*yield*/, import("react-icons/bs")];
                case 1380:
                    Bs5SquareFill = (_b.sent()).Bs5SquareFill;
                    return [2 /*return*/, Bs5SquareFill];
                case 1381: return [4 /*yield*/, import("react-icons/bs")];
                case 1382:
                    Bs5Square = (_b.sent()).Bs5Square;
                    return [2 /*return*/, Bs5Square];
                case 1383: return [4 /*yield*/, import("react-icons/bs")];
                case 1384:
                    Bs6CircleFill = (_b.sent()).Bs6CircleFill;
                    return [2 /*return*/, Bs6CircleFill];
                case 1385: return [4 /*yield*/, import("react-icons/bs")];
                case 1386:
                    Bs6Circle = (_b.sent()).Bs6Circle;
                    return [2 /*return*/, Bs6Circle];
                case 1387: return [4 /*yield*/, import("react-icons/bs")];
                case 1388:
                    Bs6SquareFill = (_b.sent()).Bs6SquareFill;
                    return [2 /*return*/, Bs6SquareFill];
                case 1389: return [4 /*yield*/, import("react-icons/bs")];
                case 1390:
                    Bs6Square = (_b.sent()).Bs6Square;
                    return [2 /*return*/, Bs6Square];
                case 1391: return [4 /*yield*/, import("react-icons/bs")];
                case 1392:
                    Bs7CircleFill = (_b.sent()).Bs7CircleFill;
                    return [2 /*return*/, Bs7CircleFill];
                case 1393: return [4 /*yield*/, import("react-icons/bs")];
                case 1394:
                    Bs7Circle = (_b.sent()).Bs7Circle;
                    return [2 /*return*/, Bs7Circle];
                case 1395: return [4 /*yield*/, import("react-icons/bs")];
                case 1396:
                    Bs7SquareFill = (_b.sent()).Bs7SquareFill;
                    return [2 /*return*/, Bs7SquareFill];
                case 1397: return [4 /*yield*/, import("react-icons/bs")];
                case 1398:
                    Bs7Square = (_b.sent()).Bs7Square;
                    return [2 /*return*/, Bs7Square];
                case 1399: return [4 /*yield*/, import("react-icons/bs")];
                case 1400:
                    Bs8CircleFill = (_b.sent()).Bs8CircleFill;
                    return [2 /*return*/, Bs8CircleFill];
                case 1401: return [4 /*yield*/, import("react-icons/bs")];
                case 1402:
                    Bs8Circle = (_b.sent()).Bs8Circle;
                    return [2 /*return*/, Bs8Circle];
                case 1403: return [4 /*yield*/, import("react-icons/bs")];
                case 1404:
                    Bs8SquareFill = (_b.sent()).Bs8SquareFill;
                    return [2 /*return*/, Bs8SquareFill];
                case 1405: return [4 /*yield*/, import("react-icons/bs")];
                case 1406:
                    Bs8Square = (_b.sent()).Bs8Square;
                    return [2 /*return*/, Bs8Square];
                case 1407: return [4 /*yield*/, import("react-icons/bs")];
                case 1408:
                    Bs9CircleFill = (_b.sent()).Bs9CircleFill;
                    return [2 /*return*/, Bs9CircleFill];
                case 1409: return [4 /*yield*/, import("react-icons/bs")];
                case 1410:
                    Bs9Circle = (_b.sent()).Bs9Circle;
                    return [2 /*return*/, Bs9Circle];
                case 1411: return [4 /*yield*/, import("react-icons/bs")];
                case 1412:
                    Bs9SquareFill = (_b.sent()).Bs9SquareFill;
                    return [2 /*return*/, Bs9SquareFill];
                case 1413: return [4 /*yield*/, import("react-icons/bs")];
                case 1414:
                    Bs9Square = (_b.sent()).Bs9Square;
                    return [2 /*return*/, Bs9Square];
                case 1415: return [4 /*yield*/, import("react-icons/bs")];
                case 1416:
                    BsActivity = (_b.sent()).BsActivity;
                    return [2 /*return*/, BsActivity];
                case 1417: return [4 /*yield*/, import("react-icons/bs")];
                case 1418:
                    BsAirplaneEnginesFill = (_b.sent()).BsAirplaneEnginesFill;
                    return [2 /*return*/, BsAirplaneEnginesFill];
                case 1419: return [4 /*yield*/, import("react-icons/bs")];
                case 1420:
                    BsAirplaneEngines = (_b.sent()).BsAirplaneEngines;
                    return [2 /*return*/, BsAirplaneEngines];
                case 1421: return [4 /*yield*/, import("react-icons/bs")];
                case 1422:
                    BsAirplaneFill = (_b.sent()).BsAirplaneFill;
                    return [2 /*return*/, BsAirplaneFill];
                case 1423: return [4 /*yield*/, import("react-icons/bs")];
                case 1424:
                    BsAirplane = (_b.sent()).BsAirplane;
                    return [2 /*return*/, BsAirplane];
                case 1425: return [4 /*yield*/, import("react-icons/bs")];
                case 1426:
                    BsAlarmFill = (_b.sent()).BsAlarmFill;
                    return [2 /*return*/, BsAlarmFill];
                case 1427: return [4 /*yield*/, import("react-icons/bs")];
                case 1428:
                    BsAlarm = (_b.sent()).BsAlarm;
                    return [2 /*return*/, BsAlarm];
                case 1429: return [4 /*yield*/, import("react-icons/bs")];
                case 1430:
                    BsAlexa = (_b.sent()).BsAlexa;
                    return [2 /*return*/, BsAlexa];
                case 1431: return [4 /*yield*/, import("react-icons/bs")];
                case 1432:
                    BsAlignBottom = (_b.sent()).BsAlignBottom;
                    return [2 /*return*/, BsAlignBottom];
                case 1433: return [4 /*yield*/, import("react-icons/bs")];
                case 1434:
                    BsAlignCenter = (_b.sent()).BsAlignCenter;
                    return [2 /*return*/, BsAlignCenter];
                case 1435: return [4 /*yield*/, import("react-icons/bs")];
                case 1436:
                    BsAlignEnd = (_b.sent()).BsAlignEnd;
                    return [2 /*return*/, BsAlignEnd];
                case 1437: return [4 /*yield*/, import("react-icons/bs")];
                case 1438:
                    BsAlignMiddle = (_b.sent()).BsAlignMiddle;
                    return [2 /*return*/, BsAlignMiddle];
                case 1439: return [4 /*yield*/, import("react-icons/bs")];
                case 1440:
                    BsAlignStart = (_b.sent()).BsAlignStart;
                    return [2 /*return*/, BsAlignStart];
                case 1441: return [4 /*yield*/, import("react-icons/bs")];
                case 1442:
                    BsAlignTop = (_b.sent()).BsAlignTop;
                    return [2 /*return*/, BsAlignTop];
                case 1443: return [4 /*yield*/, import("react-icons/bs")];
                case 1444:
                    BsAlipay = (_b.sent()).BsAlipay;
                    return [2 /*return*/, BsAlipay];
                case 1445: return [4 /*yield*/, import("react-icons/bs")];
                case 1446:
                    BsAlphabetUppercase = (_b.sent()).BsAlphabetUppercase;
                    return [2 /*return*/, BsAlphabetUppercase];
                case 1447: return [4 /*yield*/, import("react-icons/bs")];
                case 1448:
                    BsAlphabet = (_b.sent()).BsAlphabet;
                    return [2 /*return*/, BsAlphabet];
                case 1449: return [4 /*yield*/, import("react-icons/bs")];
                case 1450:
                    BsAlt = (_b.sent()).BsAlt;
                    return [2 /*return*/, BsAlt];
                case 1451: return [4 /*yield*/, import("react-icons/bs")];
                case 1452:
                    BsAmazon = (_b.sent()).BsAmazon;
                    return [2 /*return*/, BsAmazon];
                case 1453: return [4 /*yield*/, import("react-icons/bs")];
                case 1454:
                    BsAmd = (_b.sent()).BsAmd;
                    return [2 /*return*/, BsAmd];
                case 1455: return [4 /*yield*/, import("react-icons/bs")];
                case 1456:
                    BsAndroid = (_b.sent()).BsAndroid;
                    return [2 /*return*/, BsAndroid];
                case 1457: return [4 /*yield*/, import("react-icons/bs")];
                case 1458:
                    BsAndroid2 = (_b.sent()).BsAndroid2;
                    return [2 /*return*/, BsAndroid2];
                case 1459: return [4 /*yield*/, import("react-icons/bs")];
                case 1460:
                    BsAppIndicator = (_b.sent()).BsAppIndicator;
                    return [2 /*return*/, BsAppIndicator];
                case 1461: return [4 /*yield*/, import("react-icons/bs")];
                case 1462:
                    BsApp = (_b.sent()).BsApp;
                    return [2 /*return*/, BsApp];
                case 1463: return [4 /*yield*/, import("react-icons/bs")];
                case 1464:
                    BsApple = (_b.sent()).BsApple;
                    return [2 /*return*/, BsApple];
                case 1465: return [4 /*yield*/, import("react-icons/bs")];
                case 1466:
                    BsArchiveFill = (_b.sent()).BsArchiveFill;
                    return [2 /*return*/, BsArchiveFill];
                case 1467: return [4 /*yield*/, import("react-icons/bs")];
                case 1468:
                    BsArchive = (_b.sent()).BsArchive;
                    return [2 /*return*/, BsArchive];
                case 1469: return [4 /*yield*/, import("react-icons/bs")];
                case 1470:
                    BsArrow90DegDown = (_b.sent()).BsArrow90DegDown;
                    return [2 /*return*/, BsArrow90DegDown];
                case 1471: return [4 /*yield*/, import("react-icons/bs")];
                case 1472:
                    BsArrow90DegLeft = (_b.sent()).BsArrow90DegLeft;
                    return [2 /*return*/, BsArrow90DegLeft];
                case 1473: return [4 /*yield*/, import("react-icons/bs")];
                case 1474:
                    BsArrow90DegRight = (_b.sent()).BsArrow90DegRight;
                    return [2 /*return*/, BsArrow90DegRight];
                case 1475: return [4 /*yield*/, import("react-icons/bs")];
                case 1476:
                    BsArrow90DegUp = (_b.sent()).BsArrow90DegUp;
                    return [2 /*return*/, BsArrow90DegUp];
                case 1477: return [4 /*yield*/, import("react-icons/bs")];
                case 1478:
                    BsArrowBarDown = (_b.sent()).BsArrowBarDown;
                    return [2 /*return*/, BsArrowBarDown];
                case 1479: return [4 /*yield*/, import("react-icons/bs")];
                case 1480:
                    BsArrowBarLeft = (_b.sent()).BsArrowBarLeft;
                    return [2 /*return*/, BsArrowBarLeft];
                case 1481: return [4 /*yield*/, import("react-icons/bs")];
                case 1482:
                    BsArrowBarRight = (_b.sent()).BsArrowBarRight;
                    return [2 /*return*/, BsArrowBarRight];
                case 1483: return [4 /*yield*/, import("react-icons/bs")];
                case 1484:
                    BsArrowBarUp = (_b.sent()).BsArrowBarUp;
                    return [2 /*return*/, BsArrowBarUp];
                case 1485: return [4 /*yield*/, import("react-icons/bs")];
                case 1486:
                    BsArrowClockwise = (_b.sent()).BsArrowClockwise;
                    return [2 /*return*/, BsArrowClockwise];
                case 1487: return [4 /*yield*/, import("react-icons/bs")];
                case 1488:
                    BsArrowCounterclockwise = (_b.sent()).BsArrowCounterclockwise;
                    return [2 /*return*/, BsArrowCounterclockwise];
                case 1489: return [4 /*yield*/, import("react-icons/bs")];
                case 1490:
                    BsArrowDownCircleFill = (_b.sent()).BsArrowDownCircleFill;
                    return [2 /*return*/, BsArrowDownCircleFill];
                case 1491: return [4 /*yield*/, import("react-icons/bs")];
                case 1492:
                    BsArrowDownCircle = (_b.sent()).BsArrowDownCircle;
                    return [2 /*return*/, BsArrowDownCircle];
                case 1493: return [4 /*yield*/, import("react-icons/bs")];
                case 1494:
                    BsArrowDownLeftCircleFill = (_b.sent()).BsArrowDownLeftCircleFill;
                    return [2 /*return*/, BsArrowDownLeftCircleFill];
                case 1495: return [4 /*yield*/, import("react-icons/bs")];
                case 1496:
                    BsArrowDownLeftCircle = (_b.sent()).BsArrowDownLeftCircle;
                    return [2 /*return*/, BsArrowDownLeftCircle];
                case 1497: return [4 /*yield*/, import("react-icons/bs")];
                case 1498:
                    BsArrowDownLeftSquareFill = (_b.sent()).BsArrowDownLeftSquareFill;
                    return [2 /*return*/, BsArrowDownLeftSquareFill];
                case 1499: return [4 /*yield*/, import("react-icons/bs")];
                case 1500:
                    BsArrowDownLeftSquare = (_b.sent()).BsArrowDownLeftSquare;
                    return [2 /*return*/, BsArrowDownLeftSquare];
                case 1501: return [4 /*yield*/, import("react-icons/bs")];
                case 1502:
                    BsArrowDownLeft = (_b.sent()).BsArrowDownLeft;
                    return [2 /*return*/, BsArrowDownLeft];
                case 1503: return [4 /*yield*/, import("react-icons/bs")];
                case 1504:
                    BsArrowDownRightCircleFill = (_b.sent()).BsArrowDownRightCircleFill;
                    return [2 /*return*/, BsArrowDownRightCircleFill];
                case 1505: return [4 /*yield*/, import("react-icons/bs")];
                case 1506:
                    BsArrowDownRightCircle = (_b.sent()).BsArrowDownRightCircle;
                    return [2 /*return*/, BsArrowDownRightCircle];
                case 1507: return [4 /*yield*/, import("react-icons/bs")];
                case 1508:
                    BsArrowDownRightSquareFill = (_b.sent()).BsArrowDownRightSquareFill;
                    return [2 /*return*/, BsArrowDownRightSquareFill];
                case 1509: return [4 /*yield*/, import("react-icons/bs")];
                case 1510:
                    BsArrowDownRightSquare = (_b.sent()).BsArrowDownRightSquare;
                    return [2 /*return*/, BsArrowDownRightSquare];
                case 1511: return [4 /*yield*/, import("react-icons/bs")];
                case 1512:
                    BsArrowDownRight = (_b.sent()).BsArrowDownRight;
                    return [2 /*return*/, BsArrowDownRight];
                case 1513: return [4 /*yield*/, import("react-icons/bs")];
                case 1514:
                    BsArrowDownShort = (_b.sent()).BsArrowDownShort;
                    return [2 /*return*/, BsArrowDownShort];
                case 1515: return [4 /*yield*/, import("react-icons/bs")];
                case 1516:
                    BsArrowDownSquareFill = (_b.sent()).BsArrowDownSquareFill;
                    return [2 /*return*/, BsArrowDownSquareFill];
                case 1517: return [4 /*yield*/, import("react-icons/bs")];
                case 1518:
                    BsArrowDownSquare = (_b.sent()).BsArrowDownSquare;
                    return [2 /*return*/, BsArrowDownSquare];
                case 1519: return [4 /*yield*/, import("react-icons/bs")];
                case 1520:
                    BsArrowDownUp = (_b.sent()).BsArrowDownUp;
                    return [2 /*return*/, BsArrowDownUp];
                case 1521: return [4 /*yield*/, import("react-icons/bs")];
                case 1522:
                    BsArrowDown = (_b.sent()).BsArrowDown;
                    return [2 /*return*/, BsArrowDown];
                case 1523: return [4 /*yield*/, import("react-icons/bs")];
                case 1524:
                    BsArrowLeftCircleFill = (_b.sent()).BsArrowLeftCircleFill;
                    return [2 /*return*/, BsArrowLeftCircleFill];
                case 1525: return [4 /*yield*/, import("react-icons/bs")];
                case 1526:
                    BsArrowLeftCircle = (_b.sent()).BsArrowLeftCircle;
                    return [2 /*return*/, BsArrowLeftCircle];
                case 1527: return [4 /*yield*/, import("react-icons/bs")];
                case 1528:
                    BsArrowLeftRight = (_b.sent()).BsArrowLeftRight;
                    return [2 /*return*/, BsArrowLeftRight];
                case 1529: return [4 /*yield*/, import("react-icons/bs")];
                case 1530:
                    BsArrowLeftShort = (_b.sent()).BsArrowLeftShort;
                    return [2 /*return*/, BsArrowLeftShort];
                case 1531: return [4 /*yield*/, import("react-icons/bs")];
                case 1532:
                    BsArrowLeftSquareFill = (_b.sent()).BsArrowLeftSquareFill;
                    return [2 /*return*/, BsArrowLeftSquareFill];
                case 1533: return [4 /*yield*/, import("react-icons/bs")];
                case 1534:
                    BsArrowLeftSquare = (_b.sent()).BsArrowLeftSquare;
                    return [2 /*return*/, BsArrowLeftSquare];
                case 1535: return [4 /*yield*/, import("react-icons/bs")];
                case 1536:
                    BsArrowLeft = (_b.sent()).BsArrowLeft;
                    return [2 /*return*/, BsArrowLeft];
                case 1537: return [4 /*yield*/, import("react-icons/bs")];
                case 1538:
                    BsArrowRepeat = (_b.sent()).BsArrowRepeat;
                    return [2 /*return*/, BsArrowRepeat];
                case 1539: return [4 /*yield*/, import("react-icons/bs")];
                case 1540:
                    BsArrowReturnLeft = (_b.sent()).BsArrowReturnLeft;
                    return [2 /*return*/, BsArrowReturnLeft];
                case 1541: return [4 /*yield*/, import("react-icons/bs")];
                case 1542:
                    BsArrowReturnRight = (_b.sent()).BsArrowReturnRight;
                    return [2 /*return*/, BsArrowReturnRight];
                case 1543: return [4 /*yield*/, import("react-icons/bs")];
                case 1544:
                    BsArrowRightCircleFill = (_b.sent()).BsArrowRightCircleFill;
                    return [2 /*return*/, BsArrowRightCircleFill];
                case 1545: return [4 /*yield*/, import("react-icons/bs")];
                case 1546:
                    BsArrowRightCircle = (_b.sent()).BsArrowRightCircle;
                    return [2 /*return*/, BsArrowRightCircle];
                case 1547: return [4 /*yield*/, import("react-icons/bs")];
                case 1548:
                    BsArrowRightShort = (_b.sent()).BsArrowRightShort;
                    return [2 /*return*/, BsArrowRightShort];
                case 1549: return [4 /*yield*/, import("react-icons/bs")];
                case 1550:
                    BsArrowRightSquareFill = (_b.sent()).BsArrowRightSquareFill;
                    return [2 /*return*/, BsArrowRightSquareFill];
                case 1551: return [4 /*yield*/, import("react-icons/bs")];
                case 1552:
                    BsArrowRightSquare = (_b.sent()).BsArrowRightSquare;
                    return [2 /*return*/, BsArrowRightSquare];
                case 1553: return [4 /*yield*/, import("react-icons/bs")];
                case 1554:
                    BsArrowRight = (_b.sent()).BsArrowRight;
                    return [2 /*return*/, BsArrowRight];
                case 1555: return [4 /*yield*/, import("react-icons/bs")];
                case 1556:
                    BsArrowThroughHeartFill = (_b.sent()).BsArrowThroughHeartFill;
                    return [2 /*return*/, BsArrowThroughHeartFill];
                case 1557: return [4 /*yield*/, import("react-icons/bs")];
                case 1558:
                    BsArrowThroughHeart = (_b.sent()).BsArrowThroughHeart;
                    return [2 /*return*/, BsArrowThroughHeart];
                case 1559: return [4 /*yield*/, import("react-icons/bs")];
                case 1560:
                    BsArrowUpCircleFill = (_b.sent()).BsArrowUpCircleFill;
                    return [2 /*return*/, BsArrowUpCircleFill];
                case 1561: return [4 /*yield*/, import("react-icons/bs")];
                case 1562:
                    BsArrowUpCircle = (_b.sent()).BsArrowUpCircle;
                    return [2 /*return*/, BsArrowUpCircle];
                case 1563: return [4 /*yield*/, import("react-icons/bs")];
                case 1564:
                    BsArrowUpLeftCircleFill = (_b.sent()).BsArrowUpLeftCircleFill;
                    return [2 /*return*/, BsArrowUpLeftCircleFill];
                case 1565: return [4 /*yield*/, import("react-icons/bs")];
                case 1566:
                    BsArrowUpLeftCircle = (_b.sent()).BsArrowUpLeftCircle;
                    return [2 /*return*/, BsArrowUpLeftCircle];
                case 1567: return [4 /*yield*/, import("react-icons/bs")];
                case 1568:
                    BsArrowUpLeftSquareFill = (_b.sent()).BsArrowUpLeftSquareFill;
                    return [2 /*return*/, BsArrowUpLeftSquareFill];
                case 1569: return [4 /*yield*/, import("react-icons/bs")];
                case 1570:
                    BsArrowUpLeftSquare = (_b.sent()).BsArrowUpLeftSquare;
                    return [2 /*return*/, BsArrowUpLeftSquare];
                case 1571: return [4 /*yield*/, import("react-icons/bs")];
                case 1572:
                    BsArrowUpLeft = (_b.sent()).BsArrowUpLeft;
                    return [2 /*return*/, BsArrowUpLeft];
                case 1573: return [4 /*yield*/, import("react-icons/bs")];
                case 1574:
                    BsArrowUpRightCircleFill = (_b.sent()).BsArrowUpRightCircleFill;
                    return [2 /*return*/, BsArrowUpRightCircleFill];
                case 1575: return [4 /*yield*/, import("react-icons/bs")];
                case 1576:
                    BsArrowUpRightCircle = (_b.sent()).BsArrowUpRightCircle;
                    return [2 /*return*/, BsArrowUpRightCircle];
                case 1577: return [4 /*yield*/, import("react-icons/bs")];
                case 1578:
                    BsArrowUpRightSquareFill = (_b.sent()).BsArrowUpRightSquareFill;
                    return [2 /*return*/, BsArrowUpRightSquareFill];
                case 1579: return [4 /*yield*/, import("react-icons/bs")];
                case 1580:
                    BsArrowUpRightSquare = (_b.sent()).BsArrowUpRightSquare;
                    return [2 /*return*/, BsArrowUpRightSquare];
                case 1581: return [4 /*yield*/, import("react-icons/bs")];
                case 1582:
                    BsArrowUpRight = (_b.sent()).BsArrowUpRight;
                    return [2 /*return*/, BsArrowUpRight];
                case 1583: return [4 /*yield*/, import("react-icons/bs")];
                case 1584:
                    BsArrowUpShort = (_b.sent()).BsArrowUpShort;
                    return [2 /*return*/, BsArrowUpShort];
                case 1585: return [4 /*yield*/, import("react-icons/bs")];
                case 1586:
                    BsArrowUpSquareFill = (_b.sent()).BsArrowUpSquareFill;
                    return [2 /*return*/, BsArrowUpSquareFill];
                case 1587: return [4 /*yield*/, import("react-icons/bs")];
                case 1588:
                    BsArrowUpSquare = (_b.sent()).BsArrowUpSquare;
                    return [2 /*return*/, BsArrowUpSquare];
                case 1589: return [4 /*yield*/, import("react-icons/bs")];
                case 1590:
                    BsArrowUp = (_b.sent()).BsArrowUp;
                    return [2 /*return*/, BsArrowUp];
                case 1591: return [4 /*yield*/, import("react-icons/bs")];
                case 1592:
                    BsArrowsAngleContract = (_b.sent()).BsArrowsAngleContract;
                    return [2 /*return*/, BsArrowsAngleContract];
                case 1593: return [4 /*yield*/, import("react-icons/bs")];
                case 1594:
                    BsArrowsAngleExpand = (_b.sent()).BsArrowsAngleExpand;
                    return [2 /*return*/, BsArrowsAngleExpand];
                case 1595: return [4 /*yield*/, import("react-icons/bs")];
                case 1596:
                    BsArrowsCollapseVertical = (_b.sent()).BsArrowsCollapseVertical;
                    return [2 /*return*/, BsArrowsCollapseVertical];
                case 1597: return [4 /*yield*/, import("react-icons/bs")];
                case 1598:
                    BsArrowsCollapse = (_b.sent()).BsArrowsCollapse;
                    return [2 /*return*/, BsArrowsCollapse];
                case 1599: return [4 /*yield*/, import("react-icons/bs")];
                case 1600:
                    BsArrowsExpandVertical = (_b.sent()).BsArrowsExpandVertical;
                    return [2 /*return*/, BsArrowsExpandVertical];
                case 1601: return [4 /*yield*/, import("react-icons/bs")];
                case 1602:
                    BsArrowsExpand = (_b.sent()).BsArrowsExpand;
                    return [2 /*return*/, BsArrowsExpand];
                case 1603: return [4 /*yield*/, import("react-icons/bs")];
                case 1604:
                    BsArrowsFullscreen = (_b.sent()).BsArrowsFullscreen;
                    return [2 /*return*/, BsArrowsFullscreen];
                case 1605: return [4 /*yield*/, import("react-icons/bs")];
                case 1606:
                    BsArrowsMove = (_b.sent()).BsArrowsMove;
                    return [2 /*return*/, BsArrowsMove];
                case 1607: return [4 /*yield*/, import("react-icons/bs")];
                case 1608:
                    BsArrowsVertical = (_b.sent()).BsArrowsVertical;
                    return [2 /*return*/, BsArrowsVertical];
                case 1609: return [4 /*yield*/, import("react-icons/bs")];
                case 1610:
                    BsArrows = (_b.sent()).BsArrows;
                    return [2 /*return*/, BsArrows];
                case 1611: return [4 /*yield*/, import("react-icons/bs")];
                case 1612:
                    BsAspectRatioFill = (_b.sent()).BsAspectRatioFill;
                    return [2 /*return*/, BsAspectRatioFill];
                case 1613: return [4 /*yield*/, import("react-icons/bs")];
                case 1614:
                    BsAspectRatio = (_b.sent()).BsAspectRatio;
                    return [2 /*return*/, BsAspectRatio];
                case 1615: return [4 /*yield*/, import("react-icons/bs")];
                case 1616:
                    BsAsterisk = (_b.sent()).BsAsterisk;
                    return [2 /*return*/, BsAsterisk];
                case 1617: return [4 /*yield*/, import("react-icons/bs")];
                case 1618:
                    BsAt = (_b.sent()).BsAt;
                    return [2 /*return*/, BsAt];
                case 1619: return [4 /*yield*/, import("react-icons/bs")];
                case 1620:
                    BsAwardFill = (_b.sent()).BsAwardFill;
                    return [2 /*return*/, BsAwardFill];
                case 1621: return [4 /*yield*/, import("react-icons/bs")];
                case 1622:
                    BsAward = (_b.sent()).BsAward;
                    return [2 /*return*/, BsAward];
                case 1623: return [4 /*yield*/, import("react-icons/bs")];
                case 1624:
                    BsBack = (_b.sent()).BsBack;
                    return [2 /*return*/, BsBack];
                case 1625: return [4 /*yield*/, import("react-icons/bs")];
                case 1626:
                    BsBackpackFill = (_b.sent()).BsBackpackFill;
                    return [2 /*return*/, BsBackpackFill];
                case 1627: return [4 /*yield*/, import("react-icons/bs")];
                case 1628:
                    BsBackpack = (_b.sent()).BsBackpack;
                    return [2 /*return*/, BsBackpack];
                case 1629: return [4 /*yield*/, import("react-icons/bs")];
                case 1630:
                    BsBackpack2Fill = (_b.sent()).BsBackpack2Fill;
                    return [2 /*return*/, BsBackpack2Fill];
                case 1631: return [4 /*yield*/, import("react-icons/bs")];
                case 1632:
                    BsBackpack2 = (_b.sent()).BsBackpack2;
                    return [2 /*return*/, BsBackpack2];
                case 1633: return [4 /*yield*/, import("react-icons/bs")];
                case 1634:
                    BsBackpack3Fill = (_b.sent()).BsBackpack3Fill;
                    return [2 /*return*/, BsBackpack3Fill];
                case 1635: return [4 /*yield*/, import("react-icons/bs")];
                case 1636:
                    BsBackpack3 = (_b.sent()).BsBackpack3;
                    return [2 /*return*/, BsBackpack3];
                case 1637: return [4 /*yield*/, import("react-icons/bs")];
                case 1638:
                    BsBackpack4Fill = (_b.sent()).BsBackpack4Fill;
                    return [2 /*return*/, BsBackpack4Fill];
                case 1639: return [4 /*yield*/, import("react-icons/bs")];
                case 1640:
                    BsBackpack4 = (_b.sent()).BsBackpack4;
                    return [2 /*return*/, BsBackpack4];
                case 1641: return [4 /*yield*/, import("react-icons/bs")];
                case 1642:
                    BsBackspaceFill = (_b.sent()).BsBackspaceFill;
                    return [2 /*return*/, BsBackspaceFill];
                case 1643: return [4 /*yield*/, import("react-icons/bs")];
                case 1644:
                    BsBackspaceReverseFill = (_b.sent()).BsBackspaceReverseFill;
                    return [2 /*return*/, BsBackspaceReverseFill];
                case 1645: return [4 /*yield*/, import("react-icons/bs")];
                case 1646:
                    BsBackspaceReverse = (_b.sent()).BsBackspaceReverse;
                    return [2 /*return*/, BsBackspaceReverse];
                case 1647: return [4 /*yield*/, import("react-icons/bs")];
                case 1648:
                    BsBackspace = (_b.sent()).BsBackspace;
                    return [2 /*return*/, BsBackspace];
                case 1649: return [4 /*yield*/, import("react-icons/bs")];
                case 1650:
                    BsBadge3dFill = (_b.sent()).BsBadge3dFill;
                    return [2 /*return*/, BsBadge3dFill];
                case 1651: return [4 /*yield*/, import("react-icons/bs")];
                case 1652:
                    BsBadge3D = (_b.sent()).BsBadge3D;
                    return [2 /*return*/, BsBadge3D];
                case 1653: return [4 /*yield*/, import("react-icons/bs")];
                case 1654:
                    BsBadge4kFill = (_b.sent()).BsBadge4kFill;
                    return [2 /*return*/, BsBadge4kFill];
                case 1655: return [4 /*yield*/, import("react-icons/bs")];
                case 1656:
                    BsBadge4K = (_b.sent()).BsBadge4K;
                    return [2 /*return*/, BsBadge4K];
                case 1657: return [4 /*yield*/, import("react-icons/bs")];
                case 1658:
                    BsBadge8kFill = (_b.sent()).BsBadge8kFill;
                    return [2 /*return*/, BsBadge8kFill];
                case 1659: return [4 /*yield*/, import("react-icons/bs")];
                case 1660:
                    BsBadge8K = (_b.sent()).BsBadge8K;
                    return [2 /*return*/, BsBadge8K];
                case 1661: return [4 /*yield*/, import("react-icons/bs")];
                case 1662:
                    BsBadgeAdFill = (_b.sent()).BsBadgeAdFill;
                    return [2 /*return*/, BsBadgeAdFill];
                case 1663: return [4 /*yield*/, import("react-icons/bs")];
                case 1664:
                    BsBadgeAd = (_b.sent()).BsBadgeAd;
                    return [2 /*return*/, BsBadgeAd];
                case 1665: return [4 /*yield*/, import("react-icons/bs")];
                case 1666:
                    BsBadgeArFill = (_b.sent()).BsBadgeArFill;
                    return [2 /*return*/, BsBadgeArFill];
                case 1667: return [4 /*yield*/, import("react-icons/bs")];
                case 1668:
                    BsBadgeAr = (_b.sent()).BsBadgeAr;
                    return [2 /*return*/, BsBadgeAr];
                case 1669: return [4 /*yield*/, import("react-icons/bs")];
                case 1670:
                    BsBadgeCcFill = (_b.sent()).BsBadgeCcFill;
                    return [2 /*return*/, BsBadgeCcFill];
                case 1671: return [4 /*yield*/, import("react-icons/bs")];
                case 1672:
                    BsBadgeCc = (_b.sent()).BsBadgeCc;
                    return [2 /*return*/, BsBadgeCc];
                case 1673: return [4 /*yield*/, import("react-icons/bs")];
                case 1674:
                    BsBadgeHdFill = (_b.sent()).BsBadgeHdFill;
                    return [2 /*return*/, BsBadgeHdFill];
                case 1675: return [4 /*yield*/, import("react-icons/bs")];
                case 1676:
                    BsBadgeHd = (_b.sent()).BsBadgeHd;
                    return [2 /*return*/, BsBadgeHd];
                case 1677: return [4 /*yield*/, import("react-icons/bs")];
                case 1678:
                    BsBadgeSdFill = (_b.sent()).BsBadgeSdFill;
                    return [2 /*return*/, BsBadgeSdFill];
                case 1679: return [4 /*yield*/, import("react-icons/bs")];
                case 1680:
                    BsBadgeSd = (_b.sent()).BsBadgeSd;
                    return [2 /*return*/, BsBadgeSd];
                case 1681: return [4 /*yield*/, import("react-icons/bs")];
                case 1682:
                    BsBadgeTmFill = (_b.sent()).BsBadgeTmFill;
                    return [2 /*return*/, BsBadgeTmFill];
                case 1683: return [4 /*yield*/, import("react-icons/bs")];
                case 1684:
                    BsBadgeTm = (_b.sent()).BsBadgeTm;
                    return [2 /*return*/, BsBadgeTm];
                case 1685: return [4 /*yield*/, import("react-icons/bs")];
                case 1686:
                    BsBadgeVoFill = (_b.sent()).BsBadgeVoFill;
                    return [2 /*return*/, BsBadgeVoFill];
                case 1687: return [4 /*yield*/, import("react-icons/bs")];
                case 1688:
                    BsBadgeVo = (_b.sent()).BsBadgeVo;
                    return [2 /*return*/, BsBadgeVo];
                case 1689: return [4 /*yield*/, import("react-icons/bs")];
                case 1690:
                    BsBadgeVrFill = (_b.sent()).BsBadgeVrFill;
                    return [2 /*return*/, BsBadgeVrFill];
                case 1691: return [4 /*yield*/, import("react-icons/bs")];
                case 1692:
                    BsBadgeVr = (_b.sent()).BsBadgeVr;
                    return [2 /*return*/, BsBadgeVr];
                case 1693: return [4 /*yield*/, import("react-icons/bs")];
                case 1694:
                    BsBadgeWcFill = (_b.sent()).BsBadgeWcFill;
                    return [2 /*return*/, BsBadgeWcFill];
                case 1695: return [4 /*yield*/, import("react-icons/bs")];
                case 1696:
                    BsBadgeWc = (_b.sent()).BsBadgeWc;
                    return [2 /*return*/, BsBadgeWc];
                case 1697: return [4 /*yield*/, import("react-icons/bs")];
                case 1698:
                    BsBagCheckFill = (_b.sent()).BsBagCheckFill;
                    return [2 /*return*/, BsBagCheckFill];
                case 1699: return [4 /*yield*/, import("react-icons/bs")];
                case 1700:
                    BsBagCheck = (_b.sent()).BsBagCheck;
                    return [2 /*return*/, BsBagCheck];
                case 1701: return [4 /*yield*/, import("react-icons/bs")];
                case 1702:
                    BsBagDashFill = (_b.sent()).BsBagDashFill;
                    return [2 /*return*/, BsBagDashFill];
                case 1703: return [4 /*yield*/, import("react-icons/bs")];
                case 1704:
                    BsBagDash = (_b.sent()).BsBagDash;
                    return [2 /*return*/, BsBagDash];
                case 1705: return [4 /*yield*/, import("react-icons/bs")];
                case 1706:
                    BsBagFill = (_b.sent()).BsBagFill;
                    return [2 /*return*/, BsBagFill];
                case 1707: return [4 /*yield*/, import("react-icons/bs")];
                case 1708:
                    BsBagHeartFill = (_b.sent()).BsBagHeartFill;
                    return [2 /*return*/, BsBagHeartFill];
                case 1709: return [4 /*yield*/, import("react-icons/bs")];
                case 1710:
                    BsBagHeart = (_b.sent()).BsBagHeart;
                    return [2 /*return*/, BsBagHeart];
                case 1711: return [4 /*yield*/, import("react-icons/bs")];
                case 1712:
                    BsBagPlusFill = (_b.sent()).BsBagPlusFill;
                    return [2 /*return*/, BsBagPlusFill];
                case 1713: return [4 /*yield*/, import("react-icons/bs")];
                case 1714:
                    BsBagPlus = (_b.sent()).BsBagPlus;
                    return [2 /*return*/, BsBagPlus];
                case 1715: return [4 /*yield*/, import("react-icons/bs")];
                case 1716:
                    BsBagXFill = (_b.sent()).BsBagXFill;
                    return [2 /*return*/, BsBagXFill];
                case 1717: return [4 /*yield*/, import("react-icons/bs")];
                case 1718:
                    BsBagX = (_b.sent()).BsBagX;
                    return [2 /*return*/, BsBagX];
                case 1719: return [4 /*yield*/, import("react-icons/bs")];
                case 1720:
                    BsBag = (_b.sent()).BsBag;
                    return [2 /*return*/, BsBag];
                case 1721: return [4 /*yield*/, import("react-icons/bs")];
                case 1722:
                    BsBalloonFill = (_b.sent()).BsBalloonFill;
                    return [2 /*return*/, BsBalloonFill];
                case 1723: return [4 /*yield*/, import("react-icons/bs")];
                case 1724:
                    BsBalloonHeartFill = (_b.sent()).BsBalloonHeartFill;
                    return [2 /*return*/, BsBalloonHeartFill];
                case 1725: return [4 /*yield*/, import("react-icons/bs")];
                case 1726:
                    BsBalloonHeart = (_b.sent()).BsBalloonHeart;
                    return [2 /*return*/, BsBalloonHeart];
                case 1727: return [4 /*yield*/, import("react-icons/bs")];
                case 1728:
                    BsBalloon = (_b.sent()).BsBalloon;
                    return [2 /*return*/, BsBalloon];
                case 1729: return [4 /*yield*/, import("react-icons/bs")];
                case 1730:
                    BsBanFill = (_b.sent()).BsBanFill;
                    return [2 /*return*/, BsBanFill];
                case 1731: return [4 /*yield*/, import("react-icons/bs")];
                case 1732:
                    BsBan = (_b.sent()).BsBan;
                    return [2 /*return*/, BsBan];
                case 1733: return [4 /*yield*/, import("react-icons/bs")];
                case 1734:
                    BsBandaidFill = (_b.sent()).BsBandaidFill;
                    return [2 /*return*/, BsBandaidFill];
                case 1735: return [4 /*yield*/, import("react-icons/bs")];
                case 1736:
                    BsBandaid = (_b.sent()).BsBandaid;
                    return [2 /*return*/, BsBandaid];
                case 1737: return [4 /*yield*/, import("react-icons/bs")];
                case 1738:
                    BsBank = (_b.sent()).BsBank;
                    return [2 /*return*/, BsBank];
                case 1739: return [4 /*yield*/, import("react-icons/bs")];
                case 1740:
                    BsBank2 = (_b.sent()).BsBank2;
                    return [2 /*return*/, BsBank2];
                case 1741: return [4 /*yield*/, import("react-icons/bs")];
                case 1742:
                    BsBarChartFill = (_b.sent()).BsBarChartFill;
                    return [2 /*return*/, BsBarChartFill];
                case 1743: return [4 /*yield*/, import("react-icons/bs")];
                case 1744:
                    BsBarChartLineFill = (_b.sent()).BsBarChartLineFill;
                    return [2 /*return*/, BsBarChartLineFill];
                case 1745: return [4 /*yield*/, import("react-icons/bs")];
                case 1746:
                    BsBarChartLine = (_b.sent()).BsBarChartLine;
                    return [2 /*return*/, BsBarChartLine];
                case 1747: return [4 /*yield*/, import("react-icons/bs")];
                case 1748:
                    BsBarChartSteps = (_b.sent()).BsBarChartSteps;
                    return [2 /*return*/, BsBarChartSteps];
                case 1749: return [4 /*yield*/, import("react-icons/bs")];
                case 1750:
                    BsBarChart = (_b.sent()).BsBarChart;
                    return [2 /*return*/, BsBarChart];
                case 1751: return [4 /*yield*/, import("react-icons/bs")];
                case 1752:
                    BsBasketFill = (_b.sent()).BsBasketFill;
                    return [2 /*return*/, BsBasketFill];
                case 1753: return [4 /*yield*/, import("react-icons/bs")];
                case 1754:
                    BsBasket = (_b.sent()).BsBasket;
                    return [2 /*return*/, BsBasket];
                case 1755: return [4 /*yield*/, import("react-icons/bs")];
                case 1756:
                    BsBasket2Fill = (_b.sent()).BsBasket2Fill;
                    return [2 /*return*/, BsBasket2Fill];
                case 1757: return [4 /*yield*/, import("react-icons/bs")];
                case 1758:
                    BsBasket2 = (_b.sent()).BsBasket2;
                    return [2 /*return*/, BsBasket2];
                case 1759: return [4 /*yield*/, import("react-icons/bs")];
                case 1760:
                    BsBasket3Fill = (_b.sent()).BsBasket3Fill;
                    return [2 /*return*/, BsBasket3Fill];
                case 1761: return [4 /*yield*/, import("react-icons/bs")];
                case 1762:
                    BsBasket3 = (_b.sent()).BsBasket3;
                    return [2 /*return*/, BsBasket3];
                case 1763: return [4 /*yield*/, import("react-icons/bs")];
                case 1764:
                    BsBatteryCharging = (_b.sent()).BsBatteryCharging;
                    return [2 /*return*/, BsBatteryCharging];
                case 1765: return [4 /*yield*/, import("react-icons/bs")];
                case 1766:
                    BsBatteryFull = (_b.sent()).BsBatteryFull;
                    return [2 /*return*/, BsBatteryFull];
                case 1767: return [4 /*yield*/, import("react-icons/bs")];
                case 1768:
                    BsBatteryHalf = (_b.sent()).BsBatteryHalf;
                    return [2 /*return*/, BsBatteryHalf];
                case 1769: return [4 /*yield*/, import("react-icons/bs")];
                case 1770:
                    BsBattery = (_b.sent()).BsBattery;
                    return [2 /*return*/, BsBattery];
                case 1771: return [4 /*yield*/, import("react-icons/bs")];
                case 1772:
                    BsBehance = (_b.sent()).BsBehance;
                    return [2 /*return*/, BsBehance];
                case 1773: return [4 /*yield*/, import("react-icons/bs")];
                case 1774:
                    BsBellFill = (_b.sent()).BsBellFill;
                    return [2 /*return*/, BsBellFill];
                case 1775: return [4 /*yield*/, import("react-icons/bs")];
                case 1776:
                    BsBellSlashFill = (_b.sent()).BsBellSlashFill;
                    return [2 /*return*/, BsBellSlashFill];
                case 1777: return [4 /*yield*/, import("react-icons/bs")];
                case 1778:
                    BsBellSlash = (_b.sent()).BsBellSlash;
                    return [2 /*return*/, BsBellSlash];
                case 1779: return [4 /*yield*/, import("react-icons/bs")];
                case 1780:
                    BsBell = (_b.sent()).BsBell;
                    return [2 /*return*/, BsBell];
                case 1781: return [4 /*yield*/, import("react-icons/bs")];
                case 1782:
                    BsBezier = (_b.sent()).BsBezier;
                    return [2 /*return*/, BsBezier];
                case 1783: return [4 /*yield*/, import("react-icons/bs")];
                case 1784:
                    BsBezier2 = (_b.sent()).BsBezier2;
                    return [2 /*return*/, BsBezier2];
                case 1785: return [4 /*yield*/, import("react-icons/bs")];
                case 1786:
                    BsBicycle = (_b.sent()).BsBicycle;
                    return [2 /*return*/, BsBicycle];
                case 1787: return [4 /*yield*/, import("react-icons/bs")];
                case 1788:
                    BsBing = (_b.sent()).BsBing;
                    return [2 /*return*/, BsBing];
                case 1789: return [4 /*yield*/, import("react-icons/bs")];
                case 1790:
                    BsBinocularsFill = (_b.sent()).BsBinocularsFill;
                    return [2 /*return*/, BsBinocularsFill];
                case 1791: return [4 /*yield*/, import("react-icons/bs")];
                case 1792:
                    BsBinoculars = (_b.sent()).BsBinoculars;
                    return [2 /*return*/, BsBinoculars];
                case 1793: return [4 /*yield*/, import("react-icons/bs")];
                case 1794:
                    BsBlockquoteLeft = (_b.sent()).BsBlockquoteLeft;
                    return [2 /*return*/, BsBlockquoteLeft];
                case 1795: return [4 /*yield*/, import("react-icons/bs")];
                case 1796:
                    BsBlockquoteRight = (_b.sent()).BsBlockquoteRight;
                    return [2 /*return*/, BsBlockquoteRight];
                case 1797: return [4 /*yield*/, import("react-icons/bs")];
                case 1798:
                    BsBluetooth = (_b.sent()).BsBluetooth;
                    return [2 /*return*/, BsBluetooth];
                case 1799: return [4 /*yield*/, import("react-icons/bs")];
                case 1800:
                    BsBodyText = (_b.sent()).BsBodyText;
                    return [2 /*return*/, BsBodyText];
                case 1801: return [4 /*yield*/, import("react-icons/bs")];
                case 1802:
                    BsBookFill = (_b.sent()).BsBookFill;
                    return [2 /*return*/, BsBookFill];
                case 1803: return [4 /*yield*/, import("react-icons/bs")];
                case 1804:
                    BsBookHalf = (_b.sent()).BsBookHalf;
                    return [2 /*return*/, BsBookHalf];
                case 1805: return [4 /*yield*/, import("react-icons/bs")];
                case 1806:
                    BsBook = (_b.sent()).BsBook;
                    return [2 /*return*/, BsBook];
                case 1807: return [4 /*yield*/, import("react-icons/bs")];
                case 1808:
                    BsBookmarkCheckFill = (_b.sent()).BsBookmarkCheckFill;
                    return [2 /*return*/, BsBookmarkCheckFill];
                case 1809: return [4 /*yield*/, import("react-icons/bs")];
                case 1810:
                    BsBookmarkCheck = (_b.sent()).BsBookmarkCheck;
                    return [2 /*return*/, BsBookmarkCheck];
                case 1811: return [4 /*yield*/, import("react-icons/bs")];
                case 1812:
                    BsBookmarkDashFill = (_b.sent()).BsBookmarkDashFill;
                    return [2 /*return*/, BsBookmarkDashFill];
                case 1813: return [4 /*yield*/, import("react-icons/bs")];
                case 1814:
                    BsBookmarkDash = (_b.sent()).BsBookmarkDash;
                    return [2 /*return*/, BsBookmarkDash];
                case 1815: return [4 /*yield*/, import("react-icons/bs")];
                case 1816:
                    BsBookmarkFill = (_b.sent()).BsBookmarkFill;
                    return [2 /*return*/, BsBookmarkFill];
                case 1817: return [4 /*yield*/, import("react-icons/bs")];
                case 1818:
                    BsBookmarkHeartFill = (_b.sent()).BsBookmarkHeartFill;
                    return [2 /*return*/, BsBookmarkHeartFill];
                case 1819: return [4 /*yield*/, import("react-icons/bs")];
                case 1820:
                    BsBookmarkHeart = (_b.sent()).BsBookmarkHeart;
                    return [2 /*return*/, BsBookmarkHeart];
                case 1821: return [4 /*yield*/, import("react-icons/bs")];
                case 1822:
                    BsBookmarkPlusFill = (_b.sent()).BsBookmarkPlusFill;
                    return [2 /*return*/, BsBookmarkPlusFill];
                case 1823: return [4 /*yield*/, import("react-icons/bs")];
                case 1824:
                    BsBookmarkPlus = (_b.sent()).BsBookmarkPlus;
                    return [2 /*return*/, BsBookmarkPlus];
                case 1825: return [4 /*yield*/, import("react-icons/bs")];
                case 1826:
                    BsBookmarkStarFill = (_b.sent()).BsBookmarkStarFill;
                    return [2 /*return*/, BsBookmarkStarFill];
                case 1827: return [4 /*yield*/, import("react-icons/bs")];
                case 1828:
                    BsBookmarkStar = (_b.sent()).BsBookmarkStar;
                    return [2 /*return*/, BsBookmarkStar];
                case 1829: return [4 /*yield*/, import("react-icons/bs")];
                case 1830:
                    BsBookmarkXFill = (_b.sent()).BsBookmarkXFill;
                    return [2 /*return*/, BsBookmarkXFill];
                case 1831: return [4 /*yield*/, import("react-icons/bs")];
                case 1832:
                    BsBookmarkX = (_b.sent()).BsBookmarkX;
                    return [2 /*return*/, BsBookmarkX];
                case 1833: return [4 /*yield*/, import("react-icons/bs")];
                case 1834:
                    BsBookmark = (_b.sent()).BsBookmark;
                    return [2 /*return*/, BsBookmark];
                case 1835: return [4 /*yield*/, import("react-icons/bs")];
                case 1836:
                    BsBookmarksFill = (_b.sent()).BsBookmarksFill;
                    return [2 /*return*/, BsBookmarksFill];
                case 1837: return [4 /*yield*/, import("react-icons/bs")];
                case 1838:
                    BsBookmarks = (_b.sent()).BsBookmarks;
                    return [2 /*return*/, BsBookmarks];
                case 1839: return [4 /*yield*/, import("react-icons/bs")];
                case 1840:
                    BsBookshelf = (_b.sent()).BsBookshelf;
                    return [2 /*return*/, BsBookshelf];
                case 1841: return [4 /*yield*/, import("react-icons/bs")];
                case 1842:
                    BsBoomboxFill = (_b.sent()).BsBoomboxFill;
                    return [2 /*return*/, BsBoomboxFill];
                case 1843: return [4 /*yield*/, import("react-icons/bs")];
                case 1844:
                    BsBoombox = (_b.sent()).BsBoombox;
                    return [2 /*return*/, BsBoombox];
                case 1845: return [4 /*yield*/, import("react-icons/bs")];
                case 1846:
                    BsBootstrapFill = (_b.sent()).BsBootstrapFill;
                    return [2 /*return*/, BsBootstrapFill];
                case 1847: return [4 /*yield*/, import("react-icons/bs")];
                case 1848:
                    BsBootstrapReboot = (_b.sent()).BsBootstrapReboot;
                    return [2 /*return*/, BsBootstrapReboot];
                case 1849: return [4 /*yield*/, import("react-icons/bs")];
                case 1850:
                    BsBootstrap = (_b.sent()).BsBootstrap;
                    return [2 /*return*/, BsBootstrap];
                case 1851: return [4 /*yield*/, import("react-icons/bs")];
                case 1852:
                    BsBorderAll = (_b.sent()).BsBorderAll;
                    return [2 /*return*/, BsBorderAll];
                case 1853: return [4 /*yield*/, import("react-icons/bs")];
                case 1854:
                    BsBorderBottom = (_b.sent()).BsBorderBottom;
                    return [2 /*return*/, BsBorderBottom];
                case 1855: return [4 /*yield*/, import("react-icons/bs")];
                case 1856:
                    BsBorderCenter = (_b.sent()).BsBorderCenter;
                    return [2 /*return*/, BsBorderCenter];
                case 1857: return [4 /*yield*/, import("react-icons/bs")];
                case 1858:
                    BsBorderInner = (_b.sent()).BsBorderInner;
                    return [2 /*return*/, BsBorderInner];
                case 1859: return [4 /*yield*/, import("react-icons/bs")];
                case 1860:
                    BsBorderLeft = (_b.sent()).BsBorderLeft;
                    return [2 /*return*/, BsBorderLeft];
                case 1861: return [4 /*yield*/, import("react-icons/bs")];
                case 1862:
                    BsBorderMiddle = (_b.sent()).BsBorderMiddle;
                    return [2 /*return*/, BsBorderMiddle];
                case 1863: return [4 /*yield*/, import("react-icons/bs")];
                case 1864:
                    BsBorderOuter = (_b.sent()).BsBorderOuter;
                    return [2 /*return*/, BsBorderOuter];
                case 1865: return [4 /*yield*/, import("react-icons/bs")];
                case 1866:
                    BsBorderRight = (_b.sent()).BsBorderRight;
                    return [2 /*return*/, BsBorderRight];
                case 1867: return [4 /*yield*/, import("react-icons/bs")];
                case 1868:
                    BsBorderStyle = (_b.sent()).BsBorderStyle;
                    return [2 /*return*/, BsBorderStyle];
                case 1869: return [4 /*yield*/, import("react-icons/bs")];
                case 1870:
                    BsBorderTop = (_b.sent()).BsBorderTop;
                    return [2 /*return*/, BsBorderTop];
                case 1871: return [4 /*yield*/, import("react-icons/bs")];
                case 1872:
                    BsBorderWidth = (_b.sent()).BsBorderWidth;
                    return [2 /*return*/, BsBorderWidth];
                case 1873: return [4 /*yield*/, import("react-icons/bs")];
                case 1874:
                    BsBorder = (_b.sent()).BsBorder;
                    return [2 /*return*/, BsBorder];
                case 1875: return [4 /*yield*/, import("react-icons/bs")];
                case 1876:
                    BsBoundingBoxCircles = (_b.sent()).BsBoundingBoxCircles;
                    return [2 /*return*/, BsBoundingBoxCircles];
                case 1877: return [4 /*yield*/, import("react-icons/bs")];
                case 1878:
                    BsBoundingBox = (_b.sent()).BsBoundingBox;
                    return [2 /*return*/, BsBoundingBox];
                case 1879: return [4 /*yield*/, import("react-icons/bs")];
                case 1880:
                    BsBoxArrowDownLeft = (_b.sent()).BsBoxArrowDownLeft;
                    return [2 /*return*/, BsBoxArrowDownLeft];
                case 1881: return [4 /*yield*/, import("react-icons/bs")];
                case 1882:
                    BsBoxArrowDownRight = (_b.sent()).BsBoxArrowDownRight;
                    return [2 /*return*/, BsBoxArrowDownRight];
                case 1883: return [4 /*yield*/, import("react-icons/bs")];
                case 1884:
                    BsBoxArrowDown = (_b.sent()).BsBoxArrowDown;
                    return [2 /*return*/, BsBoxArrowDown];
                case 1885: return [4 /*yield*/, import("react-icons/bs")];
                case 1886:
                    BsBoxArrowInDownLeft = (_b.sent()).BsBoxArrowInDownLeft;
                    return [2 /*return*/, BsBoxArrowInDownLeft];
                case 1887: return [4 /*yield*/, import("react-icons/bs")];
                case 1888:
                    BsBoxArrowInDownRight = (_b.sent()).BsBoxArrowInDownRight;
                    return [2 /*return*/, BsBoxArrowInDownRight];
                case 1889: return [4 /*yield*/, import("react-icons/bs")];
                case 1890:
                    BsBoxArrowInDown = (_b.sent()).BsBoxArrowInDown;
                    return [2 /*return*/, BsBoxArrowInDown];
                case 1891: return [4 /*yield*/, import("react-icons/bs")];
                case 1892:
                    BsBoxArrowInLeft = (_b.sent()).BsBoxArrowInLeft;
                    return [2 /*return*/, BsBoxArrowInLeft];
                case 1893: return [4 /*yield*/, import("react-icons/bs")];
                case 1894:
                    BsBoxArrowInRight = (_b.sent()).BsBoxArrowInRight;
                    return [2 /*return*/, BsBoxArrowInRight];
                case 1895: return [4 /*yield*/, import("react-icons/bs")];
                case 1896:
                    BsBoxArrowInUpLeft = (_b.sent()).BsBoxArrowInUpLeft;
                    return [2 /*return*/, BsBoxArrowInUpLeft];
                case 1897: return [4 /*yield*/, import("react-icons/bs")];
                case 1898:
                    BsBoxArrowInUpRight = (_b.sent()).BsBoxArrowInUpRight;
                    return [2 /*return*/, BsBoxArrowInUpRight];
                case 1899: return [4 /*yield*/, import("react-icons/bs")];
                case 1900:
                    BsBoxArrowInUp = (_b.sent()).BsBoxArrowInUp;
                    return [2 /*return*/, BsBoxArrowInUp];
                case 1901: return [4 /*yield*/, import("react-icons/bs")];
                case 1902:
                    BsBoxArrowLeft = (_b.sent()).BsBoxArrowLeft;
                    return [2 /*return*/, BsBoxArrowLeft];
                case 1903: return [4 /*yield*/, import("react-icons/bs")];
                case 1904:
                    BsBoxArrowRight = (_b.sent()).BsBoxArrowRight;
                    return [2 /*return*/, BsBoxArrowRight];
                case 1905: return [4 /*yield*/, import("react-icons/bs")];
                case 1906:
                    BsBoxArrowUpLeft = (_b.sent()).BsBoxArrowUpLeft;
                    return [2 /*return*/, BsBoxArrowUpLeft];
                case 1907: return [4 /*yield*/, import("react-icons/bs")];
                case 1908:
                    BsBoxArrowUpRight = (_b.sent()).BsBoxArrowUpRight;
                    return [2 /*return*/, BsBoxArrowUpRight];
                case 1909: return [4 /*yield*/, import("react-icons/bs")];
                case 1910:
                    BsBoxArrowUp = (_b.sent()).BsBoxArrowUp;
                    return [2 /*return*/, BsBoxArrowUp];
                case 1911: return [4 /*yield*/, import("react-icons/bs")];
                case 1912:
                    BsBoxFill = (_b.sent()).BsBoxFill;
                    return [2 /*return*/, BsBoxFill];
                case 1913: return [4 /*yield*/, import("react-icons/bs")];
                case 1914:
                    BsBoxSeamFill = (_b.sent()).BsBoxSeamFill;
                    return [2 /*return*/, BsBoxSeamFill];
                case 1915: return [4 /*yield*/, import("react-icons/bs")];
                case 1916:
                    BsBoxSeam = (_b.sent()).BsBoxSeam;
                    return [2 /*return*/, BsBoxSeam];
                case 1917: return [4 /*yield*/, import("react-icons/bs")];
                case 1918:
                    BsBox = (_b.sent()).BsBox;
                    return [2 /*return*/, BsBox];
                case 1919: return [4 /*yield*/, import("react-icons/bs")];
                case 1920:
                    BsBox2Fill = (_b.sent()).BsBox2Fill;
                    return [2 /*return*/, BsBox2Fill];
                case 1921: return [4 /*yield*/, import("react-icons/bs")];
                case 1922:
                    BsBox2HeartFill = (_b.sent()).BsBox2HeartFill;
                    return [2 /*return*/, BsBox2HeartFill];
                case 1923: return [4 /*yield*/, import("react-icons/bs")];
                case 1924:
                    BsBox2Heart = (_b.sent()).BsBox2Heart;
                    return [2 /*return*/, BsBox2Heart];
                case 1925: return [4 /*yield*/, import("react-icons/bs")];
                case 1926:
                    BsBox2 = (_b.sent()).BsBox2;
                    return [2 /*return*/, BsBox2];
                case 1927: return [4 /*yield*/, import("react-icons/bs")];
                case 1928:
                    BsBoxes = (_b.sent()).BsBoxes;
                    return [2 /*return*/, BsBoxes];
                case 1929: return [4 /*yield*/, import("react-icons/bs")];
                case 1930:
                    BsBracesAsterisk = (_b.sent()).BsBracesAsterisk;
                    return [2 /*return*/, BsBracesAsterisk];
                case 1931: return [4 /*yield*/, import("react-icons/bs")];
                case 1932:
                    BsBraces = (_b.sent()).BsBraces;
                    return [2 /*return*/, BsBraces];
                case 1933: return [4 /*yield*/, import("react-icons/bs")];
                case 1934:
                    BsBricks = (_b.sent()).BsBricks;
                    return [2 /*return*/, BsBricks];
                case 1935: return [4 /*yield*/, import("react-icons/bs")];
                case 1936:
                    BsBriefcaseFill = (_b.sent()).BsBriefcaseFill;
                    return [2 /*return*/, BsBriefcaseFill];
                case 1937: return [4 /*yield*/, import("react-icons/bs")];
                case 1938:
                    BsBriefcase = (_b.sent()).BsBriefcase;
                    return [2 /*return*/, BsBriefcase];
                case 1939: return [4 /*yield*/, import("react-icons/bs")];
                case 1940:
                    BsBrightnessAltHighFill = (_b.sent()).BsBrightnessAltHighFill;
                    return [2 /*return*/, BsBrightnessAltHighFill];
                case 1941: return [4 /*yield*/, import("react-icons/bs")];
                case 1942:
                    BsBrightnessAltHigh = (_b.sent()).BsBrightnessAltHigh;
                    return [2 /*return*/, BsBrightnessAltHigh];
                case 1943: return [4 /*yield*/, import("react-icons/bs")];
                case 1944:
                    BsBrightnessAltLowFill = (_b.sent()).BsBrightnessAltLowFill;
                    return [2 /*return*/, BsBrightnessAltLowFill];
                case 1945: return [4 /*yield*/, import("react-icons/bs")];
                case 1946:
                    BsBrightnessAltLow = (_b.sent()).BsBrightnessAltLow;
                    return [2 /*return*/, BsBrightnessAltLow];
                case 1947: return [4 /*yield*/, import("react-icons/bs")];
                case 1948:
                    BsBrightnessHighFill = (_b.sent()).BsBrightnessHighFill;
                    return [2 /*return*/, BsBrightnessHighFill];
                case 1949: return [4 /*yield*/, import("react-icons/bs")];
                case 1950:
                    BsBrightnessHigh = (_b.sent()).BsBrightnessHigh;
                    return [2 /*return*/, BsBrightnessHigh];
                case 1951: return [4 /*yield*/, import("react-icons/bs")];
                case 1952:
                    BsBrightnessLowFill = (_b.sent()).BsBrightnessLowFill;
                    return [2 /*return*/, BsBrightnessLowFill];
                case 1953: return [4 /*yield*/, import("react-icons/bs")];
                case 1954:
                    BsBrightnessLow = (_b.sent()).BsBrightnessLow;
                    return [2 /*return*/, BsBrightnessLow];
                case 1955: return [4 /*yield*/, import("react-icons/bs")];
                case 1956:
                    BsBrilliance = (_b.sent()).BsBrilliance;
                    return [2 /*return*/, BsBrilliance];
                case 1957: return [4 /*yield*/, import("react-icons/bs")];
                case 1958:
                    BsBroadcastPin = (_b.sent()).BsBroadcastPin;
                    return [2 /*return*/, BsBroadcastPin];
                case 1959: return [4 /*yield*/, import("react-icons/bs")];
                case 1960:
                    BsBroadcast = (_b.sent()).BsBroadcast;
                    return [2 /*return*/, BsBroadcast];
                case 1961: return [4 /*yield*/, import("react-icons/bs")];
                case 1962:
                    BsBrowserChrome = (_b.sent()).BsBrowserChrome;
                    return [2 /*return*/, BsBrowserChrome];
                case 1963: return [4 /*yield*/, import("react-icons/bs")];
                case 1964:
                    BsBrowserEdge = (_b.sent()).BsBrowserEdge;
                    return [2 /*return*/, BsBrowserEdge];
                case 1965: return [4 /*yield*/, import("react-icons/bs")];
                case 1966:
                    BsBrowserFirefox = (_b.sent()).BsBrowserFirefox;
                    return [2 /*return*/, BsBrowserFirefox];
                case 1967: return [4 /*yield*/, import("react-icons/bs")];
                case 1968:
                    BsBrowserSafari = (_b.sent()).BsBrowserSafari;
                    return [2 /*return*/, BsBrowserSafari];
                case 1969: return [4 /*yield*/, import("react-icons/bs")];
                case 1970:
                    BsBrushFill = (_b.sent()).BsBrushFill;
                    return [2 /*return*/, BsBrushFill];
                case 1971: return [4 /*yield*/, import("react-icons/bs")];
                case 1972:
                    BsBrush = (_b.sent()).BsBrush;
                    return [2 /*return*/, BsBrush];
                case 1973: return [4 /*yield*/, import("react-icons/bs")];
                case 1974:
                    BsBucketFill = (_b.sent()).BsBucketFill;
                    return [2 /*return*/, BsBucketFill];
                case 1975: return [4 /*yield*/, import("react-icons/bs")];
                case 1976:
                    BsBucket = (_b.sent()).BsBucket;
                    return [2 /*return*/, BsBucket];
                case 1977: return [4 /*yield*/, import("react-icons/bs")];
                case 1978:
                    BsBugFill = (_b.sent()).BsBugFill;
                    return [2 /*return*/, BsBugFill];
                case 1979: return [4 /*yield*/, import("react-icons/bs")];
                case 1980:
                    BsBug = (_b.sent()).BsBug;
                    return [2 /*return*/, BsBug];
                case 1981: return [4 /*yield*/, import("react-icons/bs")];
                case 1982:
                    BsBuildingAdd = (_b.sent()).BsBuildingAdd;
                    return [2 /*return*/, BsBuildingAdd];
                case 1983: return [4 /*yield*/, import("react-icons/bs")];
                case 1984:
                    BsBuildingCheck = (_b.sent()).BsBuildingCheck;
                    return [2 /*return*/, BsBuildingCheck];
                case 1985: return [4 /*yield*/, import("react-icons/bs")];
                case 1986:
                    BsBuildingDash = (_b.sent()).BsBuildingDash;
                    return [2 /*return*/, BsBuildingDash];
                case 1987: return [4 /*yield*/, import("react-icons/bs")];
                case 1988:
                    BsBuildingDown = (_b.sent()).BsBuildingDown;
                    return [2 /*return*/, BsBuildingDown];
                case 1989: return [4 /*yield*/, import("react-icons/bs")];
                case 1990:
                    BsBuildingExclamation = (_b.sent()).BsBuildingExclamation;
                    return [2 /*return*/, BsBuildingExclamation];
                case 1991: return [4 /*yield*/, import("react-icons/bs")];
                case 1992:
                    BsBuildingFillAdd = (_b.sent()).BsBuildingFillAdd;
                    return [2 /*return*/, BsBuildingFillAdd];
                case 1993: return [4 /*yield*/, import("react-icons/bs")];
                case 1994:
                    BsBuildingFillCheck = (_b.sent()).BsBuildingFillCheck;
                    return [2 /*return*/, BsBuildingFillCheck];
                case 1995: return [4 /*yield*/, import("react-icons/bs")];
                case 1996:
                    BsBuildingFillDash = (_b.sent()).BsBuildingFillDash;
                    return [2 /*return*/, BsBuildingFillDash];
                case 1997: return [4 /*yield*/, import("react-icons/bs")];
                case 1998:
                    BsBuildingFillDown = (_b.sent()).BsBuildingFillDown;
                    return [2 /*return*/, BsBuildingFillDown];
                case 1999: return [4 /*yield*/, import("react-icons/bs")];
                case 2000:
                    BsBuildingFillExclamation = (_b.sent()).BsBuildingFillExclamation;
                    return [2 /*return*/, BsBuildingFillExclamation];
                case 2001: return [2 /*return*/];
            }
        });
    });
}
