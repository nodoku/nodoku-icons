import type {IconType} from "react-icons";

import {
    BsFill0CircleFill,
    BsFill0SquareFill,
    BsFill1CircleFill,
    BsFill1SquareFill,
    BsFill2CircleFill,
    BsFill2SquareFill,
    BsFill3CircleFill,
    BsFill3SquareFill,
    BsFill4CircleFill,
    BsFill4SquareFill,
    BsFill5CircleFill,
    BsFill5SquareFill,
    BsFill6CircleFill,
    BsFill6SquareFill,
    BsFill7CircleFill,
    BsFill7SquareFill,
    BsFill8CircleFill,
    BsFill8SquareFill,
    BsFill9CircleFill,
    BsFill9SquareFill,
    BsFillAirplaneEnginesFill,
    BsFillAirplaneFill,
    BsFillAlarmFill,
    BsFillArchiveFill,
    BsFillArrowDownCircleFill,
    BsFillArrowDownLeftCircleFill,
    BsFillArrowDownLeftSquareFill,
    BsFillArrowDownRightCircleFill,
    BsFillArrowDownRightSquareFill,
    BsFillArrowDownSquareFill,
    BsFillArrowLeftCircleFill,
    BsFillArrowLeftSquareFill,
    BsFillArrowRightCircleFill,
    BsFillArrowRightSquareFill,
    BsFillArrowThroughHeartFill,
    BsFillArrowUpCircleFill,
    BsFillArrowUpLeftCircleFill,
    BsFillArrowUpLeftSquareFill,
    BsFillArrowUpRightCircleFill,
    BsFillArrowUpRightSquareFill,
    BsFillArrowUpSquareFill,
    BsFillAspectRatioFill,
    BsFillAwardFill,
    BsFillBackpackFill,
    BsFillBackpack2Fill,
    BsFillBackpack3Fill,
    BsFillBackpack4Fill,
    BsFillBackspaceFill,
    BsFillBackspaceReverseFill,
    BsFillBadge3dFill,
    BsFillBadge4kFill,
    BsFillBadge8kFill,
    BsFillBadgeAdFill,
    BsFillBadgeArFill,
    BsFillBadgeCcFill,
    BsFillBadgeHdFill,
    BsFillBadgeSdFill,
    BsFillBadgeTmFill,
    BsFillBadgeVoFill,
    BsFillBadgeVrFill,
    BsFillBadgeWcFill,
    BsFillBagCheckFill,
    BsFillBagDashFill,
    BsFillBagFill,
    BsFillBagHeartFill,
    BsFillBagPlusFill,
    BsFillBagXFill,
    BsFillBalloonFill,
    BsFillBalloonHeartFill,
    BsFillBanFill,
    BsFillBandaidFill,
    BsFillBarChartFill,
    BsFillBarChartLineFill,
    BsFillBasketFill,
    BsFillBasket2Fill,
    BsFillBasket3Fill,
    BsFillBellFill,
    BsFillBellSlashFill,
    BsFillBinocularsFill,
    BsFillBookFill,
    BsFillBookmarkCheckFill,
    BsFillBookmarkDashFill,
    BsFillBookmarkFill,
    BsFillBookmarkHeartFill,
    BsFillBookmarkPlusFill,
    BsFillBookmarkStarFill,
    BsFillBookmarkXFill,
    BsFillBookmarksFill,
    BsFillBoomboxFill,
    BsFillBootstrapFill,
    BsFillBoxFill,
    BsFillBoxSeamFill,
    BsFillBox2Fill,
    BsFillBox2HeartFill,
    BsFillBriefcaseFill,
    BsFillBrightnessAltHighFill,
    BsFillBrightnessAltLowFill,
    BsFillBrightnessHighFill,
    BsFillBrightnessLowFill,
    BsFillBrushFill,
    BsFillBucketFill,
    BsFillBugFill,
    BsFillBuildingFill,
    BsFillBuildingsFill,
    BsFillBusFrontFill,
    BsFillCCircleFill,
    BsFillCSquareFill,
    BsFillCakeFill,
    BsFillCake2Fill,
    BsFillCalculatorFill,
    BsFillCalendarCheckFill,
    BsFillCalendarDateFill,
    BsFillCalendarDayFill,
    BsFillCalendarEventFill,
    BsFillCalendarFill,
    BsFillCalendarHeartFill,
    BsFillCalendarMinusFill,
    BsFillCalendarMonthFill,
    BsFillCalendarPlusFill,
    BsFillCalendarRangeFill,
    BsFillCalendarWeekFill,
    BsFillCalendarXFill,
    BsFillCalendar2CheckFill,
    BsFillCalendar2DateFill,
    BsFillCalendar2DayFill,
    BsFillCalendar2EventFill,
    BsFillCalendar2Fill,
    BsFillCalendar2HeartFill,
    BsFillCalendar2MinusFill,
    BsFillCalendar2MonthFill,
    BsFillCalendar2PlusFill,
    BsFillCalendar2RangeFill,
    BsFillCalendar2WeekFill,
    BsFillCalendar2XFill,
    BsFillCalendar3EventFill,
    BsFillCalendar3Fill,
    BsFillCalendar3RangeFill,
    BsFillCalendar3WeekFill,
    BsFillCameraFill,
    BsFillCameraReelsFill,
    BsFillCameraVideoFill,
    BsFillCameraVideoOffFill,
    BsFillCapslockFill,
    BsFillCarFrontFill,
    BsFillCaretDownFill,
    BsFillCaretDownSquareFill,
    BsFillCaretLeftFill,
    BsFillCaretLeftSquareFill,
    BsFillCaretRightFill,
    BsFillCaretRightSquareFill,
    BsFillCaretUpFill,
    BsFillCaretUpSquareFill,
    BsFillCartCheckFill,
    BsFillCartDashFill,
    BsFillCartFill,
    BsFillCartPlusFill,
    BsFillCartXFill,
    BsFillCassetteFill,
    BsFillCcCircleFill,
    BsFillCcSquareFill,
    BsFillChatDotsFill,
    BsFillChatFill,
    BsFillChatHeartFill,
    BsFillChatLeftDotsFill,
    BsFillChatLeftFill,
    BsFillChatLeftHeartFill,
    BsFillChatLeftQuoteFill,
    BsFillChatLeftTextFill,
    BsFillChatQuoteFill,
    BsFillChatRightDotsFill,
    BsFillChatRightFill,
    BsFillChatRightHeartFill,
    BsFillChatRightQuoteFill,
    BsFillChatRightTextFill,
    BsFillChatSquareDotsFill,
    BsFillChatSquareFill,
    BsFillChatSquareHeartFill,
    BsFillChatSquareQuoteFill,
    BsFillChatSquareTextFill,
    BsFillChatTextFill,
    BsFillCheckCircleFill,
    BsFillCheckSquareFill,
    BsFillCircleFill,
    BsFillClipboardCheckFill,
    BsFillClipboardDataFill,
    BsFillClipboardFill,
    BsFillClipboardHeartFill,
    BsFillClipboardMinusFill,
    BsFillClipboardPlusFill,
    BsFillClipboardXFill,
    BsFillClipboard2CheckFill,
    BsFillClipboard2DataFill,
    BsFillClipboard2Fill,
    BsFillClipboard2HeartFill,
    BsFillClipboard2MinusFill,
    BsFillClipboard2PlusFill,
    BsFillClipboard2PulseFill,
    BsFillClipboard2XFill,
    BsFillClockFill,
    BsFillCloudArrowDownFill,
    BsFillCloudArrowUpFill,
    BsFillCloudCheckFill,
    BsFillCloudDownloadFill,
    BsFillCloudDrizzleFill,
    BsFillCloudFill,
    BsFillCloudFogFill,
    BsFillCloudFog2Fill,
    BsFillCloudHailFill,
    BsFillCloudHazeFill,
    BsFillCloudHaze2Fill,
    BsFillCloudLightningFill,
    BsFillCloudLightningRainFill,
    BsFillCloudMinusFill,
    BsFillCloudMoonFill,
    BsFillCloudPlusFill,
    BsFillCloudRainFill,
    BsFillCloudRainHeavyFill,
    BsFillCloudSlashFill,
    BsFillCloudSleetFill,
    BsFillCloudSnowFill,
    BsFillCloudSunFill,
    BsFillCloudUploadFill,
    BsFillCloudsFill,
    BsFillCloudyFill,
    BsFillCollectionFill,
    BsFillCollectionPlayFill,
    BsFillCompassFill,
    BsFillCpuFill,
    BsFillCreditCard2BackFill,
    BsFillCreditCard2FrontFill,
    BsFillCreditCardFill,
    BsFillCupFill,
    BsFillCupHotFill,
    BsFillCursorFill,
    BsFillDashCircleFill,
    BsFillDashSquareFill,
    BsFillDatabaseFill,
    BsFillDeviceHddFill,
    BsFillDeviceSsdFill,
    BsFillDiagram2Fill,
    BsFillDiagram3Fill,
    BsFillDiamondFill,
    BsFillDice1Fill,
    BsFillDice2Fill,
    BsFillDice3Fill,
    BsFillDice4Fill,
    BsFillDice5Fill,
    BsFillDice6Fill,
    BsFillDiscFill,
    BsFillDisplayFill,
    BsFillDisplayportFill,
    BsFillDoorClosedFill,
    BsFillDoorOpenFill,
    BsFillDpadFill,
    BsFillDropletFill,
    BsFillDuffleFill,
    BsFillEarFill,
    BsFillEaselFill,
    BsFillEasel2Fill,
    BsFillEasel3Fill,
    BsFillEggFill,
    BsFillEjectFill,
    BsFillEmojiAngryFill,
    BsFillEmojiAstonishedFill,
    BsFillEmojiDizzyFill,
    BsFillEmojiExpressionlessFill,
    BsFillEmojiFrownFill,
    BsFillEmojiGrimaceFill,
    BsFillEmojiGrinFill,
    BsFillEmojiHeartEyesFill,
    BsFillEmojiKissFill,
    BsFillEmojiLaughingFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiSmileFill,
    BsFillEmojiSmileUpsideDownFill,
    BsFillEmojiSunglassesFill,
    BsFillEmojiSurpriseFill,
    BsFillEmojiTearFill,
    BsFillEmojiWinkFill,
    BsFillEnvelopeArrowDownFill,
    BsFillEnvelopeArrowUpFill,
    BsFillEnvelopeAtFill,
    BsFillEnvelopeCheckFill,
    BsFillEnvelopeDashFill,
    BsFillEnvelopeExclamationFill,
    BsFillEnvelopeFill,
    BsFillEnvelopeHeartFill,
    BsFillEnvelopeOpenFill,
    BsFillEnvelopeOpenHeartFill,
    BsFillEnvelopePaperFill,
    BsFillEnvelopePaperHeartFill,
    BsFillEnvelopePlusFill,
    BsFillEnvelopeSlashFill,
    BsFillEnvelopeXFill,
    BsFillEraserFill,
    BsFillEvFrontFill,
    BsFillEvStationFill,
    BsFillExclamationCircleFill,
    BsFillExclamationDiamondFill,
    BsFillExclamationOctagonFill,
    BsFillExclamationSquareFill,
    BsFillExclamationTriangleFill,
    BsFillExplicitFill,
    BsFillEyeFill,
    BsFillEyeSlashFill,
    BsFillFastForwardBtnFill,
    BsFillFastForwardCircleFill,
    BsFillFastForwardFill,
    BsFillFileArrowDownFill,
    BsFillFileArrowUpFill,
    BsFillFileBarGraphFill,
    BsFillFileBinaryFill,
    BsFillFileBreakFill,
    BsFillFileCheckFill,
    BsFillFileCodeFill,
    BsFillFileDiffFill,
    BsFillFileEarmarkArrowDownFill,
    BsFillFileEarmarkArrowUpFill,
    BsFillFileEarmarkBarGraphFill,
    BsFillFileEarmarkBinaryFill,
    BsFillFileEarmarkBreakFill,
    BsFillFileEarmarkCheckFill,
    BsFillFileEarmarkCodeFill,
    BsFillFileEarmarkDiffFill,
    BsFillFileEarmarkEaselFill,
    BsFillFileEarmarkExcelFill,
    BsFillFileEarmarkFill,
    BsFillFileEarmarkFontFill,
    BsFillFileEarmarkImageFill,
    BsFillFileEarmarkLockFill,
    BsFillFileEarmarkLock2Fill,
    BsFillFileEarmarkMedicalFill,
    BsFillFileEarmarkMinusFill,
    BsFillFileEarmarkMusicFill,
    BsFillFileEarmarkPdfFill,
    BsFillFileEarmarkPersonFill,
    BsFillFileEarmarkPlayFill,
    BsFillFileEarmarkPlusFill,
    BsFillFileEarmarkPostFill,
    BsFillFileEarmarkPptFill,
    BsFillFileEarmarkRichtextFill,
    BsFillFileEarmarkRuledFill,
    BsFillFileEarmarkSlidesFill,
    BsFillFileEarmarkSpreadsheetFill,
    BsFillFileEarmarkTextFill,
    BsFillFileEarmarkWordFill,
    BsFillFileEarmarkXFill,
    BsFillFileEarmarkZipFill,
    BsFillFileEaselFill,
    BsFillFileExcelFill,
    BsFillFileFill,
    BsFillFileFontFill,
    BsFillFileImageFill,
    BsFillFileLockFill,
    BsFillFileLock2Fill,
    BsFillFileMedicalFill,
    BsFillFileMinusFill,
    BsFillFileMusicFill,
    BsFillFilePdfFill,
    BsFillFilePersonFill,
    BsFillFilePlayFill,
    BsFillFilePlusFill,
    BsFillFilePostFill,
    BsFillFilePptFill,
    BsFillFileRichtextFill,
    BsFillFileRuledFill,
    BsFillFileSlidesFill,
    BsFillFileSpreadsheetFill,
    BsFillFileTextFill,
    BsFillFileWordFill,
    BsFillFileXFill,
    BsFillFileZipFill,
    BsFillFilterCircleFill,
    BsFillFilterSquareFill,
    BsFillFlagFill,
    BsFillFloppyFill,
    BsFillFloppy2Fill,
    BsFillFolderFill,
    BsFillFolderSymlinkFill,
    BsFillForwardFill,
    BsFillFuelPumpDieselFill,
    BsFillFuelPumpFill,
    BsFillFunnelFill,
    BsFillGearFill,
    BsFillGeoAltFill,
    BsFillGeoFill,
    BsFillGiftFill,
    BsFillGrid1X2Fill,
    BsFillGrid3X2GapFill,
    BsFillGrid3X3GapFill,
    BsFillGridFill,
    BsFillHCircleFill,
    BsFillHSquareFill,
    BsFillHandIndexFill,
    BsFillHandIndexThumbFill,
    BsFillHandThumbsDownFill,
    BsFillHandThumbsUpFill,
    BsFillHandbagFill,
    BsFillHddFill,
    BsFillHddNetworkFill,
    BsFillHddRackFill,
    BsFillHddStackFill,
    BsFillHdmiFill,
    BsFillHeartFill,
    BsFillHeartPulseFill,
    BsFillHeartbreakFill,
    BsFillHeptagonFill,
    BsFillHexagonFill,
    BsFillHospitalFill,
    BsFillHouseAddFill,
    BsFillHouseCheckFill,
    BsFillHouseDashFill,
    BsFillHouseDoorFill,
    BsFillHouseDownFill,
    BsFillHouseExclamationFill,
    BsFillHouseFill,
    BsFillHouseGearFill,
    BsFillHouseHeartFill,
    BsFillHouseLockFill,
    BsFillHouseSlashFill,
    BsFillHouseUpFill,
    BsFillHouseXFill,
    BsFillHousesFill,
    BsFillImageFill,
    BsFillInboxFill,
    BsFillInboxesFill,
    BsFillInfoCircleFill,
    BsFillInfoSquareFill,
    BsFillJournalBookmarkFill,
    BsFillKanbanFill,
    BsFillKeyFill,
    BsFillKeyboardFill,
    BsFillLampFill,
    BsFillLaptopFill,
    BsFillLayersFill,
    BsFillLightbulbFill,
    BsFillLightbulbOffFill,
    BsFillLightningChargeFill,
    BsFillLightningFill,
    BsFillLockFill,
    BsFillLuggageFill,
    BsFillLungsFill,
    BsFillMagnetFill,
    BsFillMapFill,
    BsFillMarkdownFill,
    BsFillMegaphoneFill,
    BsFillMenuAppFill,
    BsFillMenuButtonFill,
    BsFillMenuButtonWideFill,
    BsFillMicFill,
    BsFillMicMuteFill,
    BsFillModemFill,
    BsFillMoonFill,
    BsFillMoonStarsFill,
    BsFillMortarboardFill,
    BsFillMotherboardFill,
    BsFillMouseFill,
    BsFillMouse2Fill,
    BsFillMouse3Fill,
    BsFillMusicPlayerFill,
    BsFillNodeMinusFill,
    BsFillNodePlusFill,
    BsFillNutFill,
    BsFillNvmeFill,
    BsFillOctagonFill,
    BsFillOpticalAudioFill,
    BsFillPCircleFill,
    BsFillPSquareFill,
    BsFillPaletteFill,
    BsFillPassFill,
    BsFillPassportFill,
    BsFillPatchCheckFill,
    BsFillPatchExclamationFill,
    BsFillPatchMinusFill,
    BsFillPatchPlusFill,
    BsFillPatchQuestionFill,
    BsFillPauseBtnFill,
    BsFillPauseCircleFill,
    BsFillPauseFill,
    BsFillPeaceFill,
    BsFillPenFill,
    BsFillPencilFill,
    BsFillPentagonFill,
    BsFillPeopleFill,
    BsFillPersonBadgeFill,
    BsFillPersonCheckFill,
    BsFillPersonDashFill,
    BsFillPersonFill,
    BsFillPersonLinesFill,
    BsFillPersonPlusFill,
    BsFillPersonVcardFill,
    BsFillPersonXFill,
    BsFillPhoneFill,
    BsFillPhoneLandscapeFill,
    BsFillPhoneVibrateFill,
    BsFillPieChartFill,
    BsFillPiggyBankFill,
    BsFillPinAngleFill,
    BsFillPinFill,
    BsFillPinMapFill,
    BsFillPipFill,
    BsFillPlayBtnFill,
    BsFillPlayCircleFill,
    BsFillPlayFill,
    BsFillPlugFill,
    BsFillPlusCircleFill,
    BsFillPlusSquareFill,
    BsFillPostageFill,
    BsFillPostageHeartFill,
    BsFillPostcardFill,
    BsFillPostcardHeartFill,
    BsFillPrinterFill,
    BsFillProjectorFill,
    BsFillPuzzleFill,
    BsFillQuestionCircleFill,
    BsFillQuestionDiamondFill,
    BsFillQuestionOctagonFill,
    BsFillQuestionSquareFill,
    BsFillRCircleFill,
    BsFillRSquareFill,
    BsFillRecordBtnFill,
    BsFillRecordCircleFill,
    BsFillRecordFill,
    BsFillRecord2Fill,
    BsFillReplyAllFill,
    BsFillReplyFill,
    BsFillRewindBtnFill,
    BsFillRewindCircleFill,
    BsFillRewindFill,
    BsFillRocketFill,
    BsFillRocketTakeoffFill,
    BsFillRouterFill,
    BsFillRssFill,
    BsFillSafeFill,
    BsFillSafe2Fill,
    BsFillSaveFill,
    BsFillSave2Fill,
    BsFillSdCardFill,
    BsFillSearchHeartFill,
    BsFillSendArrowDownFill,
    BsFillSendArrowUpFill,
    BsFillSendCheckFill,
    BsFillSendDashFill,
    BsFillSendExclamationFill,
    BsFillSendFill,
    BsFillSendPlusFill,
    BsFillSendSlashFill,
    BsFillSendXFill,
    BsFillShareFill,
    BsFillShieldFill,
    BsFillShieldLockFill,
    BsFillShieldSlashFill,
    BsFillShiftFill,
    BsFillSignDeadEndFill,
    BsFillSignDoNotEnterFill,
    BsFillSignIntersectionFill,
    BsFillSignIntersectionSideFill,
    BsFillSignIntersectionTFill,
    BsFillSignIntersectionYFill,
    BsFillSignMergeLeftFill,
    BsFillSignMergeRightFill,
    BsFillSignNoLeftTurnFill,
    BsFillSignNoParkingFill,
    BsFillSignNoRightTurnFill,
    BsFillSignRailroadFill,
    BsFillSignStopFill,
    BsFillSignStopLightsFill,
    BsFillSignTurnLeftFill,
    BsFillSignTurnRightFill,
    BsFillSignTurnSlightLeftFill,
    BsFillSignTurnSlightRightFill,
    BsFillSignYieldFill,
    BsFillSignpost2Fill,
    BsFillSignpostFill,
    BsFillSignpostSplitFill,
    BsFillSimFill,
    BsFillSimSlashFill,
    BsFillSkipBackwardBtnFill,
    BsFillSkipBackwardCircleFill,
    BsFillSkipBackwardFill,
    BsFillSkipEndBtnFill,
    BsFillSkipEndCircleFill,
    BsFillSkipEndFill,
    BsFillSkipForwardBtnFill,
    BsFillSkipForwardCircleFill,
    BsFillSkipForwardFill,
    BsFillSkipStartBtnFill,
    BsFillSkipStartCircleFill,
    BsFillSkipStartFill,
    BsFillSlashCircleFill,
    BsFillSlashSquareFill,
    BsFillSpeakerFill,
    BsFillSquareFill,
    BsFillStarFill,
    BsFillStickiesFill,
    BsFillStickyFill,
    BsFillStopBtnFill,
    BsFillStopCircleFill,
    BsFillStopFill,
    BsFillStoplightsFill,
    BsFillStopwatchFill,
    BsFillSuitClubFill,
    BsFillSuitDiamondFill,
    BsFillSuitHeartFill,
    BsFillSuitSpadeFill,
    BsFillSuitcaseFill,
    BsFillSuitcaseLgFill,
    BsFillSuitcase2Fill,
    BsFillSunFill,
    BsFillSunriseFill,
    BsFillSunsetFill,
    BsFillTabletFill,
    BsFillTabletLandscapeFill,
    BsFillTagFill,
    BsFillTagsFill,
    BsFillTaxiFrontFill,
    BsFillTelephoneFill,
    BsFillTelephoneForwardFill,
    BsFillTelephoneInboundFill,
    BsFillTelephoneMinusFill,
    BsFillTelephoneOutboundFill,
    BsFillTelephonePlusFill,
    BsFillTelephoneXFill,
    BsFillTerminalFill,
    BsFillThreadsFill,
    BsFillThunderboltFill,
    BsFillTicketDetailedFill,
    BsFillTicketFill,
    BsFillTicketPerforatedFill,
    BsFillTrainFreightFrontFill,
    BsFillTrainFrontFill,
    BsFillTrainLightrailFrontFill,
    BsFillTrashFill,
    BsFillTrash2Fill,
    BsFillTrash3Fill,
    BsFillTreeFill,
    BsFillTriangleFill,
    BsFillTrophyFill,
    BsFillTruckFrontFill,
    BsFillTvFill,
    BsFillUmbrellaFill,
    BsFillUnlockFill,
    BsFillUsbCFill,
    BsFillUsbDriveFill,
    BsFillUsbFill,
    BsFillUsbMicroFill,
    BsFillUsbMiniFill,
    BsFillUsbPlugFill,
    BsFillVinylFill,
    BsFillVolumeDownFill,
    BsFillVolumeMuteFill,
    BsFillVolumeOffFill,
    BsFillVolumeUpFill,
    BsFillWalletFill,
    BsFillWebcamFill,
    BsFillWrenchAdjustableCircleFill,
    BsFillXCircleFill,
    BsFillXDiamondFill,
    BsFillXOctagonFill,
    BsFillXSquareFill,
    BsReverseBackspaceReverse,
    BsReverseLayoutSidebarInsetReverse,
    BsReverseLayoutSidebarReverse,
    BsReverseLayoutTextSidebarReverse,
    BsReverseLayoutTextWindowReverse,
    BsReverseListColumnsReverse,
    Bs0CircleFill,
    Bs0Circle,
    Bs0SquareFill,
    Bs0Square,
    Bs1CircleFill,
    Bs1Circle,
    Bs1SquareFill,
    Bs1Square,
    Bs123,
    Bs2CircleFill,
    Bs2Circle,
    Bs2SquareFill,
    Bs2Square,
    Bs3CircleFill,
    Bs3Circle,
    Bs3SquareFill,
    Bs3Square,
    Bs4CircleFill,
    Bs4Circle,
    Bs4SquareFill,
    Bs4Square,
    Bs5CircleFill,
    Bs5Circle,
    Bs5SquareFill,
    Bs5Square,
    Bs6CircleFill,
    Bs6Circle,
    Bs6SquareFill,
    Bs6Square,
    Bs7CircleFill,
    Bs7Circle,
    Bs7SquareFill,
    Bs7Square,
    Bs8CircleFill,
    Bs8Circle,
    Bs8SquareFill,
    Bs8Square,
    Bs9CircleFill,
    Bs9Circle,
    Bs9SquareFill,
    Bs9Square,
    BsActivity,
    BsAirplaneEnginesFill,
    BsAirplaneEngines,
    BsAirplaneFill,
    BsAirplane,
    BsAlarmFill,
    BsAlarm,
    BsAlexa,
    BsAlignBottom,
    BsAlignCenter,
    BsAlignEnd,
    BsAlignMiddle,
    BsAlignStart,
    BsAlignTop,
    BsAlipay,
    BsAlphabetUppercase,
    BsAlphabet,
    BsAlt,
    BsAmazon,
    BsAmd,
    BsAndroid,
    BsAndroid2,
    BsAppIndicator,
    BsApp,
    BsApple,
    BsArchiveFill,
    BsArchive,
    BsArrow90DegDown,
    BsArrow90DegLeft,
    BsArrow90DegRight,
    BsArrow90DegUp,
    BsArrowBarDown,
    BsArrowBarLeft,
    BsArrowBarRight,
    BsArrowBarUp,
    BsArrowClockwise,
    BsArrowCounterclockwise,
    BsArrowDownCircleFill,
    BsArrowDownCircle,
    BsArrowDownLeftCircleFill,
    BsArrowDownLeftCircle,
    BsArrowDownLeftSquareFill,
    BsArrowDownLeftSquare,
    BsArrowDownLeft,
    BsArrowDownRightCircleFill,
    BsArrowDownRightCircle,
    BsArrowDownRightSquareFill,
    BsArrowDownRightSquare,
    BsArrowDownRight,
    BsArrowDownShort,
    BsArrowDownSquareFill,
    BsArrowDownSquare,
    BsArrowDownUp,
    BsArrowDown,
    BsArrowLeftCircleFill,
    BsArrowLeftCircle,
    BsArrowLeftRight,
    BsArrowLeftShort,
    BsArrowLeftSquareFill,
    BsArrowLeftSquare,
    BsArrowLeft,
    BsArrowRepeat,
    BsArrowReturnLeft,
    BsArrowReturnRight,
    BsArrowRightCircleFill,
    BsArrowRightCircle,
    BsArrowRightShort,
    BsArrowRightSquareFill,
    BsArrowRightSquare,
    BsArrowRight,
    BsArrowThroughHeartFill,
    BsArrowThroughHeart,
    BsArrowUpCircleFill,
    BsArrowUpCircle,
    BsArrowUpLeftCircleFill,
    BsArrowUpLeftCircle,
    BsArrowUpLeftSquareFill,
    BsArrowUpLeftSquare,
    BsArrowUpLeft,
    BsArrowUpRightCircleFill,
    BsArrowUpRightCircle,
    BsArrowUpRightSquareFill,
    BsArrowUpRightSquare,
    BsArrowUpRight,
    BsArrowUpShort,
    BsArrowUpSquareFill,
    BsArrowUpSquare,
    BsArrowUp,
    BsArrowsAngleContract,
    BsArrowsAngleExpand,
    BsArrowsCollapseVertical,
    BsArrowsCollapse,
    BsArrowsExpandVertical,
    BsArrowsExpand,
    BsArrowsFullscreen,
    BsArrowsMove,
    BsArrowsVertical,
    BsArrows,
    BsAspectRatioFill,
    BsAspectRatio,
    BsAsterisk,
    BsAt,
    BsAwardFill,
    BsAward,
    BsBack,
    BsBackpackFill,
    BsBackpack,
    BsBackpack2Fill,
    BsBackpack2,
    BsBackpack3Fill,
    BsBackpack3,
    BsBackpack4Fill,
    BsBackpack4,
    BsBackspaceFill,
    BsBackspaceReverseFill,
    BsBackspaceReverse,
    BsBackspace,
    BsBadge3dFill,
    BsBadge3D,
    BsBadge4kFill,
    BsBadge4K,
    BsBadge8kFill,
    BsBadge8K,
    BsBadgeAdFill,
    BsBadgeAd,
    BsBadgeArFill,
    BsBadgeAr,
    BsBadgeCcFill,
    BsBadgeCc,
    BsBadgeHdFill,
    BsBadgeHd,
    BsBadgeSdFill,
    BsBadgeSd,
    BsBadgeTmFill,
    BsBadgeTm,
    BsBadgeVoFill,
    BsBadgeVo,
    BsBadgeVrFill,
    BsBadgeVr,
    BsBadgeWcFill,
    BsBadgeWc,
    BsBagCheckFill,
    BsBagCheck,
    BsBagDashFill,
    BsBagDash,
    BsBagFill,
    BsBagHeartFill,
    BsBagHeart,
    BsBagPlusFill,
    BsBagPlus,
    BsBagXFill,
    BsBagX,
    BsBag,
    BsBalloonFill,
    BsBalloonHeartFill,
    BsBalloonHeart,
    BsBalloon,
    BsBanFill,
    BsBan,
    BsBandaidFill,
    BsBandaid,
    BsBank,
    BsBank2,
    BsBarChartFill,
    BsBarChartLineFill,
    BsBarChartLine,
    BsBarChartSteps,
    BsBarChart,
    BsBasketFill,
    BsBasket,
    BsBasket2Fill,
    BsBasket2,
    BsBasket3Fill,
    BsBasket3,
    BsBatteryCharging,
    BsBatteryFull,
    BsBatteryHalf,
    BsBattery,
    BsBehance,
    BsBellFill,
    BsBellSlashFill,
    BsBellSlash,
    BsBell,
    BsBezier,
    BsBezier2,
    BsBicycle,
    BsBing,
    BsBinocularsFill,
    BsBinoculars,
    BsBlockquoteLeft,
    BsBlockquoteRight,
    BsBluetooth,
    BsBodyText,
    BsBookFill,
    BsBookHalf,
    BsBook,
    BsBookmarkCheckFill,
    BsBookmarkCheck,
    BsBookmarkDashFill,
    BsBookmarkDash,
    BsBookmarkFill,
    BsBookmarkHeartFill,
    BsBookmarkHeart,
    BsBookmarkPlusFill,
    BsBookmarkPlus,
    BsBookmarkStarFill,
    BsBookmarkStar,
    BsBookmarkXFill,
    BsBookmarkX,
    BsBookmark,
    BsBookmarksFill,
    BsBookmarks,
    BsBookshelf,
    BsBoomboxFill,
    BsBoombox,
    BsBootstrapFill,
    BsBootstrapReboot,
    BsBootstrap,
    BsBorderAll,
    BsBorderBottom,
    BsBorderCenter,
    BsBorderInner,
    BsBorderLeft,
    BsBorderMiddle,
    BsBorderOuter,
    BsBorderRight,
    BsBorderStyle,
    BsBorderTop,
    BsBorderWidth,
    BsBorder,
    BsBoundingBoxCircles,
    BsBoundingBox,
    BsBoxArrowDownLeft,
    BsBoxArrowDownRight,
    BsBoxArrowDown,
    BsBoxArrowInDownLeft,
    BsBoxArrowInDownRight,
    BsBoxArrowInDown,
    BsBoxArrowInLeft,
    BsBoxArrowInRight,
    BsBoxArrowInUpLeft,
    BsBoxArrowInUpRight,
    BsBoxArrowInUp,
    BsBoxArrowLeft,
    BsBoxArrowRight,
    BsBoxArrowUpLeft,
    BsBoxArrowUpRight,
    BsBoxArrowUp,
    BsBoxFill,
    BsBoxSeamFill,
    BsBoxSeam,
    BsBox,
    BsBox2Fill,
    BsBox2HeartFill,
    BsBox2Heart,
    BsBox2,
    BsBoxes,
    BsBracesAsterisk,
    BsBraces,
    BsBricks,
    BsBriefcaseFill,
    BsBriefcase,
    BsBrightnessAltHighFill,
    BsBrightnessAltHigh,
    BsBrightnessAltLowFill,
    BsBrightnessAltLow,
    BsBrightnessHighFill,
    BsBrightnessHigh,
    BsBrightnessLowFill,
    BsBrightnessLow,
    BsBrilliance,
    BsBroadcastPin,
    BsBroadcast,
    BsBrowserChrome,
    BsBrowserEdge,
    BsBrowserFirefox,
    BsBrowserSafari,
    BsBrushFill,
    BsBrush,
    BsBucketFill,
    BsBucket,
    BsBugFill,
    BsBug,
    BsBuildingAdd,
    BsBuildingCheck,
    BsBuildingDash,
    BsBuildingDown,
    BsBuildingExclamation,
    BsBuildingFillAdd,
    BsBuildingFillCheck,
    BsBuildingFillDash,
    BsBuildingFillDown,
    BsBuildingFillExclamation,
} from "react-icons/bs"

export function nameToReactIcon_bs_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "bs:BsFill0CircleFill":
            return BsFill0CircleFill;
        case "bs:BsFill0SquareFill":
            return BsFill0SquareFill;
        case "bs:BsFill1CircleFill":
            return BsFill1CircleFill;
        case "bs:BsFill1SquareFill":
            return BsFill1SquareFill;
        case "bs:BsFill2CircleFill":
            return BsFill2CircleFill;
        case "bs:BsFill2SquareFill":
            return BsFill2SquareFill;
        case "bs:BsFill3CircleFill":
            return BsFill3CircleFill;
        case "bs:BsFill3SquareFill":
            return BsFill3SquareFill;
        case "bs:BsFill4CircleFill":
            return BsFill4CircleFill;
        case "bs:BsFill4SquareFill":
            return BsFill4SquareFill;
        case "bs:BsFill5CircleFill":
            return BsFill5CircleFill;
        case "bs:BsFill5SquareFill":
            return BsFill5SquareFill;
        case "bs:BsFill6CircleFill":
            return BsFill6CircleFill;
        case "bs:BsFill6SquareFill":
            return BsFill6SquareFill;
        case "bs:BsFill7CircleFill":
            return BsFill7CircleFill;
        case "bs:BsFill7SquareFill":
            return BsFill7SquareFill;
        case "bs:BsFill8CircleFill":
            return BsFill8CircleFill;
        case "bs:BsFill8SquareFill":
            return BsFill8SquareFill;
        case "bs:BsFill9CircleFill":
            return BsFill9CircleFill;
        case "bs:BsFill9SquareFill":
            return BsFill9SquareFill;
        case "bs:BsFillAirplaneEnginesFill":
            return BsFillAirplaneEnginesFill;
        case "bs:BsFillAirplaneFill":
            return BsFillAirplaneFill;
        case "bs:BsFillAlarmFill":
            return BsFillAlarmFill;
        case "bs:BsFillArchiveFill":
            return BsFillArchiveFill;
        case "bs:BsFillArrowDownCircleFill":
            return BsFillArrowDownCircleFill;
        case "bs:BsFillArrowDownLeftCircleFill":
            return BsFillArrowDownLeftCircleFill;
        case "bs:BsFillArrowDownLeftSquareFill":
            return BsFillArrowDownLeftSquareFill;
        case "bs:BsFillArrowDownRightCircleFill":
            return BsFillArrowDownRightCircleFill;
        case "bs:BsFillArrowDownRightSquareFill":
            return BsFillArrowDownRightSquareFill;
        case "bs:BsFillArrowDownSquareFill":
            return BsFillArrowDownSquareFill;
        case "bs:BsFillArrowLeftCircleFill":
            return BsFillArrowLeftCircleFill;
        case "bs:BsFillArrowLeftSquareFill":
            return BsFillArrowLeftSquareFill;
        case "bs:BsFillArrowRightCircleFill":
            return BsFillArrowRightCircleFill;
        case "bs:BsFillArrowRightSquareFill":
            return BsFillArrowRightSquareFill;
        case "bs:BsFillArrowThroughHeartFill":
            return BsFillArrowThroughHeartFill;
        case "bs:BsFillArrowUpCircleFill":
            return BsFillArrowUpCircleFill;
        case "bs:BsFillArrowUpLeftCircleFill":
            return BsFillArrowUpLeftCircleFill;
        case "bs:BsFillArrowUpLeftSquareFill":
            return BsFillArrowUpLeftSquareFill;
        case "bs:BsFillArrowUpRightCircleFill":
            return BsFillArrowUpRightCircleFill;
        case "bs:BsFillArrowUpRightSquareFill":
            return BsFillArrowUpRightSquareFill;
        case "bs:BsFillArrowUpSquareFill":
            return BsFillArrowUpSquareFill;
        case "bs:BsFillAspectRatioFill":
            return BsFillAspectRatioFill;
        case "bs:BsFillAwardFill":
            return BsFillAwardFill;
        case "bs:BsFillBackpackFill":
            return BsFillBackpackFill;
        case "bs:BsFillBackpack2Fill":
            return BsFillBackpack2Fill;
        case "bs:BsFillBackpack3Fill":
            return BsFillBackpack3Fill;
        case "bs:BsFillBackpack4Fill":
            return BsFillBackpack4Fill;
        case "bs:BsFillBackspaceFill":
            return BsFillBackspaceFill;
        case "bs:BsFillBackspaceReverseFill":
            return BsFillBackspaceReverseFill;
        case "bs:BsFillBadge3dFill":
            return BsFillBadge3dFill;
        case "bs:BsFillBadge4kFill":
            return BsFillBadge4kFill;
        case "bs:BsFillBadge8kFill":
            return BsFillBadge8kFill;
        case "bs:BsFillBadgeAdFill":
            return BsFillBadgeAdFill;
        case "bs:BsFillBadgeArFill":
            return BsFillBadgeArFill;
        case "bs:BsFillBadgeCcFill":
            return BsFillBadgeCcFill;
        case "bs:BsFillBadgeHdFill":
            return BsFillBadgeHdFill;
        case "bs:BsFillBadgeSdFill":
            return BsFillBadgeSdFill;
        case "bs:BsFillBadgeTmFill":
            return BsFillBadgeTmFill;
        case "bs:BsFillBadgeVoFill":
            return BsFillBadgeVoFill;
        case "bs:BsFillBadgeVrFill":
            return BsFillBadgeVrFill;
        case "bs:BsFillBadgeWcFill":
            return BsFillBadgeWcFill;
        case "bs:BsFillBagCheckFill":
            return BsFillBagCheckFill;
        case "bs:BsFillBagDashFill":
            return BsFillBagDashFill;
        case "bs:BsFillBagFill":
            return BsFillBagFill;
        case "bs:BsFillBagHeartFill":
            return BsFillBagHeartFill;
        case "bs:BsFillBagPlusFill":
            return BsFillBagPlusFill;
        case "bs:BsFillBagXFill":
            return BsFillBagXFill;
        case "bs:BsFillBalloonFill":
            return BsFillBalloonFill;
        case "bs:BsFillBalloonHeartFill":
            return BsFillBalloonHeartFill;
        case "bs:BsFillBanFill":
            return BsFillBanFill;
        case "bs:BsFillBandaidFill":
            return BsFillBandaidFill;
        case "bs:BsFillBarChartFill":
            return BsFillBarChartFill;
        case "bs:BsFillBarChartLineFill":
            return BsFillBarChartLineFill;
        case "bs:BsFillBasketFill":
            return BsFillBasketFill;
        case "bs:BsFillBasket2Fill":
            return BsFillBasket2Fill;
        case "bs:BsFillBasket3Fill":
            return BsFillBasket3Fill;
        case "bs:BsFillBellFill":
            return BsFillBellFill;
        case "bs:BsFillBellSlashFill":
            return BsFillBellSlashFill;
        case "bs:BsFillBinocularsFill":
            return BsFillBinocularsFill;
        case "bs:BsFillBookFill":
            return BsFillBookFill;
        case "bs:BsFillBookmarkCheckFill":
            return BsFillBookmarkCheckFill;
        case "bs:BsFillBookmarkDashFill":
            return BsFillBookmarkDashFill;
        case "bs:BsFillBookmarkFill":
            return BsFillBookmarkFill;
        case "bs:BsFillBookmarkHeartFill":
            return BsFillBookmarkHeartFill;
        case "bs:BsFillBookmarkPlusFill":
            return BsFillBookmarkPlusFill;
        case "bs:BsFillBookmarkStarFill":
            return BsFillBookmarkStarFill;
        case "bs:BsFillBookmarkXFill":
            return BsFillBookmarkXFill;
        case "bs:BsFillBookmarksFill":
            return BsFillBookmarksFill;
        case "bs:BsFillBoomboxFill":
            return BsFillBoomboxFill;
        case "bs:BsFillBootstrapFill":
            return BsFillBootstrapFill;
        case "bs:BsFillBoxFill":
            return BsFillBoxFill;
        case "bs:BsFillBoxSeamFill":
            return BsFillBoxSeamFill;
        case "bs:BsFillBox2Fill":
            return BsFillBox2Fill;
        case "bs:BsFillBox2HeartFill":
            return BsFillBox2HeartFill;
        case "bs:BsFillBriefcaseFill":
            return BsFillBriefcaseFill;
        case "bs:BsFillBrightnessAltHighFill":
            return BsFillBrightnessAltHighFill;
        case "bs:BsFillBrightnessAltLowFill":
            return BsFillBrightnessAltLowFill;
        case "bs:BsFillBrightnessHighFill":
            return BsFillBrightnessHighFill;
        case "bs:BsFillBrightnessLowFill":
            return BsFillBrightnessLowFill;
        case "bs:BsFillBrushFill":
            return BsFillBrushFill;
        case "bs:BsFillBucketFill":
            return BsFillBucketFill;
        case "bs:BsFillBugFill":
            return BsFillBugFill;
        case "bs:BsFillBuildingFill":
            return BsFillBuildingFill;
        case "bs:BsFillBuildingsFill":
            return BsFillBuildingsFill;
        case "bs:BsFillBusFrontFill":
            return BsFillBusFrontFill;
        case "bs:BsFillCCircleFill":
            return BsFillCCircleFill;
        case "bs:BsFillCSquareFill":
            return BsFillCSquareFill;
        case "bs:BsFillCakeFill":
            return BsFillCakeFill;
        case "bs:BsFillCake2Fill":
            return BsFillCake2Fill;
        case "bs:BsFillCalculatorFill":
            return BsFillCalculatorFill;
        case "bs:BsFillCalendarCheckFill":
            return BsFillCalendarCheckFill;
        case "bs:BsFillCalendarDateFill":
            return BsFillCalendarDateFill;
        case "bs:BsFillCalendarDayFill":
            return BsFillCalendarDayFill;
        case "bs:BsFillCalendarEventFill":
            return BsFillCalendarEventFill;
        case "bs:BsFillCalendarFill":
            return BsFillCalendarFill;
        case "bs:BsFillCalendarHeartFill":
            return BsFillCalendarHeartFill;
        case "bs:BsFillCalendarMinusFill":
            return BsFillCalendarMinusFill;
        case "bs:BsFillCalendarMonthFill":
            return BsFillCalendarMonthFill;
        case "bs:BsFillCalendarPlusFill":
            return BsFillCalendarPlusFill;
        case "bs:BsFillCalendarRangeFill":
            return BsFillCalendarRangeFill;
        case "bs:BsFillCalendarWeekFill":
            return BsFillCalendarWeekFill;
        case "bs:BsFillCalendarXFill":
            return BsFillCalendarXFill;
        case "bs:BsFillCalendar2CheckFill":
            return BsFillCalendar2CheckFill;
        case "bs:BsFillCalendar2DateFill":
            return BsFillCalendar2DateFill;
        case "bs:BsFillCalendar2DayFill":
            return BsFillCalendar2DayFill;
        case "bs:BsFillCalendar2EventFill":
            return BsFillCalendar2EventFill;
        case "bs:BsFillCalendar2Fill":
            return BsFillCalendar2Fill;
        case "bs:BsFillCalendar2HeartFill":
            return BsFillCalendar2HeartFill;
        case "bs:BsFillCalendar2MinusFill":
            return BsFillCalendar2MinusFill;
        case "bs:BsFillCalendar2MonthFill":
            return BsFillCalendar2MonthFill;
        case "bs:BsFillCalendar2PlusFill":
            return BsFillCalendar2PlusFill;
        case "bs:BsFillCalendar2RangeFill":
            return BsFillCalendar2RangeFill;
        case "bs:BsFillCalendar2WeekFill":
            return BsFillCalendar2WeekFill;
        case "bs:BsFillCalendar2XFill":
            return BsFillCalendar2XFill;
        case "bs:BsFillCalendar3EventFill":
            return BsFillCalendar3EventFill;
        case "bs:BsFillCalendar3Fill":
            return BsFillCalendar3Fill;
        case "bs:BsFillCalendar3RangeFill":
            return BsFillCalendar3RangeFill;
        case "bs:BsFillCalendar3WeekFill":
            return BsFillCalendar3WeekFill;
        case "bs:BsFillCameraFill":
            return BsFillCameraFill;
        case "bs:BsFillCameraReelsFill":
            return BsFillCameraReelsFill;
        case "bs:BsFillCameraVideoFill":
            return BsFillCameraVideoFill;
        case "bs:BsFillCameraVideoOffFill":
            return BsFillCameraVideoOffFill;
        case "bs:BsFillCapslockFill":
            return BsFillCapslockFill;
        case "bs:BsFillCarFrontFill":
            return BsFillCarFrontFill;
        case "bs:BsFillCaretDownFill":
            return BsFillCaretDownFill;
        case "bs:BsFillCaretDownSquareFill":
            return BsFillCaretDownSquareFill;
        case "bs:BsFillCaretLeftFill":
            return BsFillCaretLeftFill;
        case "bs:BsFillCaretLeftSquareFill":
            return BsFillCaretLeftSquareFill;
        case "bs:BsFillCaretRightFill":
            return BsFillCaretRightFill;
        case "bs:BsFillCaretRightSquareFill":
            return BsFillCaretRightSquareFill;
        case "bs:BsFillCaretUpFill":
            return BsFillCaretUpFill;
        case "bs:BsFillCaretUpSquareFill":
            return BsFillCaretUpSquareFill;
        case "bs:BsFillCartCheckFill":
            return BsFillCartCheckFill;
        case "bs:BsFillCartDashFill":
            return BsFillCartDashFill;
        case "bs:BsFillCartFill":
            return BsFillCartFill;
        case "bs:BsFillCartPlusFill":
            return BsFillCartPlusFill;
        case "bs:BsFillCartXFill":
            return BsFillCartXFill;
        case "bs:BsFillCassetteFill":
            return BsFillCassetteFill;
        case "bs:BsFillCcCircleFill":
            return BsFillCcCircleFill;
        case "bs:BsFillCcSquareFill":
            return BsFillCcSquareFill;
        case "bs:BsFillChatDotsFill":
            return BsFillChatDotsFill;
        case "bs:BsFillChatFill":
            return BsFillChatFill;
        case "bs:BsFillChatHeartFill":
            return BsFillChatHeartFill;
        case "bs:BsFillChatLeftDotsFill":
            return BsFillChatLeftDotsFill;
        case "bs:BsFillChatLeftFill":
            return BsFillChatLeftFill;
        case "bs:BsFillChatLeftHeartFill":
            return BsFillChatLeftHeartFill;
        case "bs:BsFillChatLeftQuoteFill":
            return BsFillChatLeftQuoteFill;
        case "bs:BsFillChatLeftTextFill":
            return BsFillChatLeftTextFill;
        case "bs:BsFillChatQuoteFill":
            return BsFillChatQuoteFill;
        case "bs:BsFillChatRightDotsFill":
            return BsFillChatRightDotsFill;
        case "bs:BsFillChatRightFill":
            return BsFillChatRightFill;
        case "bs:BsFillChatRightHeartFill":
            return BsFillChatRightHeartFill;
        case "bs:BsFillChatRightQuoteFill":
            return BsFillChatRightQuoteFill;
        case "bs:BsFillChatRightTextFill":
            return BsFillChatRightTextFill;
        case "bs:BsFillChatSquareDotsFill":
            return BsFillChatSquareDotsFill;
        case "bs:BsFillChatSquareFill":
            return BsFillChatSquareFill;
        case "bs:BsFillChatSquareHeartFill":
            return BsFillChatSquareHeartFill;
        case "bs:BsFillChatSquareQuoteFill":
            return BsFillChatSquareQuoteFill;
        case "bs:BsFillChatSquareTextFill":
            return BsFillChatSquareTextFill;
        case "bs:BsFillChatTextFill":
            return BsFillChatTextFill;
        case "bs:BsFillCheckCircleFill":
            return BsFillCheckCircleFill;
        case "bs:BsFillCheckSquareFill":
            return BsFillCheckSquareFill;
        case "bs:BsFillCircleFill":
            return BsFillCircleFill;
        case "bs:BsFillClipboardCheckFill":
            return BsFillClipboardCheckFill;
        case "bs:BsFillClipboardDataFill":
            return BsFillClipboardDataFill;
        case "bs:BsFillClipboardFill":
            return BsFillClipboardFill;
        case "bs:BsFillClipboardHeartFill":
            return BsFillClipboardHeartFill;
        case "bs:BsFillClipboardMinusFill":
            return BsFillClipboardMinusFill;
        case "bs:BsFillClipboardPlusFill":
            return BsFillClipboardPlusFill;
        case "bs:BsFillClipboardXFill":
            return BsFillClipboardXFill;
        case "bs:BsFillClipboard2CheckFill":
            return BsFillClipboard2CheckFill;
        case "bs:BsFillClipboard2DataFill":
            return BsFillClipboard2DataFill;
        case "bs:BsFillClipboard2Fill":
            return BsFillClipboard2Fill;
        case "bs:BsFillClipboard2HeartFill":
            return BsFillClipboard2HeartFill;
        case "bs:BsFillClipboard2MinusFill":
            return BsFillClipboard2MinusFill;
        case "bs:BsFillClipboard2PlusFill":
            return BsFillClipboard2PlusFill;
        case "bs:BsFillClipboard2PulseFill":
            return BsFillClipboard2PulseFill;
        case "bs:BsFillClipboard2XFill":
            return BsFillClipboard2XFill;
        case "bs:BsFillClockFill":
            return BsFillClockFill;
        case "bs:BsFillCloudArrowDownFill":
            return BsFillCloudArrowDownFill;
        case "bs:BsFillCloudArrowUpFill":
            return BsFillCloudArrowUpFill;
        case "bs:BsFillCloudCheckFill":
            return BsFillCloudCheckFill;
        case "bs:BsFillCloudDownloadFill":
            return BsFillCloudDownloadFill;
        case "bs:BsFillCloudDrizzleFill":
            return BsFillCloudDrizzleFill;
        case "bs:BsFillCloudFill":
            return BsFillCloudFill;
        case "bs:BsFillCloudFogFill":
            return BsFillCloudFogFill;
        case "bs:BsFillCloudFog2Fill":
            return BsFillCloudFog2Fill;
        case "bs:BsFillCloudHailFill":
            return BsFillCloudHailFill;
        case "bs:BsFillCloudHazeFill":
            return BsFillCloudHazeFill;
        case "bs:BsFillCloudHaze2Fill":
            return BsFillCloudHaze2Fill;
        case "bs:BsFillCloudLightningFill":
            return BsFillCloudLightningFill;
        case "bs:BsFillCloudLightningRainFill":
            return BsFillCloudLightningRainFill;
        case "bs:BsFillCloudMinusFill":
            return BsFillCloudMinusFill;
        case "bs:BsFillCloudMoonFill":
            return BsFillCloudMoonFill;
        case "bs:BsFillCloudPlusFill":
            return BsFillCloudPlusFill;
        case "bs:BsFillCloudRainFill":
            return BsFillCloudRainFill;
        case "bs:BsFillCloudRainHeavyFill":
            return BsFillCloudRainHeavyFill;
        case "bs:BsFillCloudSlashFill":
            return BsFillCloudSlashFill;
        case "bs:BsFillCloudSleetFill":
            return BsFillCloudSleetFill;
        case "bs:BsFillCloudSnowFill":
            return BsFillCloudSnowFill;
        case "bs:BsFillCloudSunFill":
            return BsFillCloudSunFill;
        case "bs:BsFillCloudUploadFill":
            return BsFillCloudUploadFill;
        case "bs:BsFillCloudsFill":
            return BsFillCloudsFill;
        case "bs:BsFillCloudyFill":
            return BsFillCloudyFill;
        case "bs:BsFillCollectionFill":
            return BsFillCollectionFill;
        case "bs:BsFillCollectionPlayFill":
            return BsFillCollectionPlayFill;
        case "bs:BsFillCompassFill":
            return BsFillCompassFill;
        case "bs:BsFillCpuFill":
            return BsFillCpuFill;
        case "bs:BsFillCreditCard2BackFill":
            return BsFillCreditCard2BackFill;
        case "bs:BsFillCreditCard2FrontFill":
            return BsFillCreditCard2FrontFill;
        case "bs:BsFillCreditCardFill":
            return BsFillCreditCardFill;
        case "bs:BsFillCupFill":
            return BsFillCupFill;
        case "bs:BsFillCupHotFill":
            return BsFillCupHotFill;
        case "bs:BsFillCursorFill":
            return BsFillCursorFill;
        case "bs:BsFillDashCircleFill":
            return BsFillDashCircleFill;
        case "bs:BsFillDashSquareFill":
            return BsFillDashSquareFill;
        case "bs:BsFillDatabaseFill":
            return BsFillDatabaseFill;
        case "bs:BsFillDeviceHddFill":
            return BsFillDeviceHddFill;
        case "bs:BsFillDeviceSsdFill":
            return BsFillDeviceSsdFill;
        case "bs:BsFillDiagram2Fill":
            return BsFillDiagram2Fill;
        case "bs:BsFillDiagram3Fill":
            return BsFillDiagram3Fill;
        case "bs:BsFillDiamondFill":
            return BsFillDiamondFill;
        case "bs:BsFillDice1Fill":
            return BsFillDice1Fill;
        case "bs:BsFillDice2Fill":
            return BsFillDice2Fill;
        case "bs:BsFillDice3Fill":
            return BsFillDice3Fill;
        case "bs:BsFillDice4Fill":
            return BsFillDice4Fill;
        case "bs:BsFillDice5Fill":
            return BsFillDice5Fill;
        case "bs:BsFillDice6Fill":
            return BsFillDice6Fill;
        case "bs:BsFillDiscFill":
            return BsFillDiscFill;
        case "bs:BsFillDisplayFill":
            return BsFillDisplayFill;
        case "bs:BsFillDisplayportFill":
            return BsFillDisplayportFill;
        case "bs:BsFillDoorClosedFill":
            return BsFillDoorClosedFill;
        case "bs:BsFillDoorOpenFill":
            return BsFillDoorOpenFill;
        case "bs:BsFillDpadFill":
            return BsFillDpadFill;
        case "bs:BsFillDropletFill":
            return BsFillDropletFill;
        case "bs:BsFillDuffleFill":
            return BsFillDuffleFill;
        case "bs:BsFillEarFill":
            return BsFillEarFill;
        case "bs:BsFillEaselFill":
            return BsFillEaselFill;
        case "bs:BsFillEasel2Fill":
            return BsFillEasel2Fill;
        case "bs:BsFillEasel3Fill":
            return BsFillEasel3Fill;
        case "bs:BsFillEggFill":
            return BsFillEggFill;
        case "bs:BsFillEjectFill":
            return BsFillEjectFill;
        case "bs:BsFillEmojiAngryFill":
            return BsFillEmojiAngryFill;
        case "bs:BsFillEmojiAstonishedFill":
            return BsFillEmojiAstonishedFill;
        case "bs:BsFillEmojiDizzyFill":
            return BsFillEmojiDizzyFill;
        case "bs:BsFillEmojiExpressionlessFill":
            return BsFillEmojiExpressionlessFill;
        case "bs:BsFillEmojiFrownFill":
            return BsFillEmojiFrownFill;
        case "bs:BsFillEmojiGrimaceFill":
            return BsFillEmojiGrimaceFill;
        case "bs:BsFillEmojiGrinFill":
            return BsFillEmojiGrinFill;
        case "bs:BsFillEmojiHeartEyesFill":
            return BsFillEmojiHeartEyesFill;
        case "bs:BsFillEmojiKissFill":
            return BsFillEmojiKissFill;
        case "bs:BsFillEmojiLaughingFill":
            return BsFillEmojiLaughingFill;
        case "bs:BsFillEmojiNeutralFill":
            return BsFillEmojiNeutralFill;
        case "bs:BsFillEmojiSmileFill":
            return BsFillEmojiSmileFill;
        case "bs:BsFillEmojiSmileUpsideDownFill":
            return BsFillEmojiSmileUpsideDownFill;
        case "bs:BsFillEmojiSunglassesFill":
            return BsFillEmojiSunglassesFill;
        case "bs:BsFillEmojiSurpriseFill":
            return BsFillEmojiSurpriseFill;
        case "bs:BsFillEmojiTearFill":
            return BsFillEmojiTearFill;
        case "bs:BsFillEmojiWinkFill":
            return BsFillEmojiWinkFill;
        case "bs:BsFillEnvelopeArrowDownFill":
            return BsFillEnvelopeArrowDownFill;
        case "bs:BsFillEnvelopeArrowUpFill":
            return BsFillEnvelopeArrowUpFill;
        case "bs:BsFillEnvelopeAtFill":
            return BsFillEnvelopeAtFill;
        case "bs:BsFillEnvelopeCheckFill":
            return BsFillEnvelopeCheckFill;
        case "bs:BsFillEnvelopeDashFill":
            return BsFillEnvelopeDashFill;
        case "bs:BsFillEnvelopeExclamationFill":
            return BsFillEnvelopeExclamationFill;
        case "bs:BsFillEnvelopeFill":
            return BsFillEnvelopeFill;
        case "bs:BsFillEnvelopeHeartFill":
            return BsFillEnvelopeHeartFill;
        case "bs:BsFillEnvelopeOpenFill":
            return BsFillEnvelopeOpenFill;
        case "bs:BsFillEnvelopeOpenHeartFill":
            return BsFillEnvelopeOpenHeartFill;
        case "bs:BsFillEnvelopePaperFill":
            return BsFillEnvelopePaperFill;
        case "bs:BsFillEnvelopePaperHeartFill":
            return BsFillEnvelopePaperHeartFill;
        case "bs:BsFillEnvelopePlusFill":
            return BsFillEnvelopePlusFill;
        case "bs:BsFillEnvelopeSlashFill":
            return BsFillEnvelopeSlashFill;
        case "bs:BsFillEnvelopeXFill":
            return BsFillEnvelopeXFill;
        case "bs:BsFillEraserFill":
            return BsFillEraserFill;
        case "bs:BsFillEvFrontFill":
            return BsFillEvFrontFill;
        case "bs:BsFillEvStationFill":
            return BsFillEvStationFill;
        case "bs:BsFillExclamationCircleFill":
            return BsFillExclamationCircleFill;
        case "bs:BsFillExclamationDiamondFill":
            return BsFillExclamationDiamondFill;
        case "bs:BsFillExclamationOctagonFill":
            return BsFillExclamationOctagonFill;
        case "bs:BsFillExclamationSquareFill":
            return BsFillExclamationSquareFill;
        case "bs:BsFillExclamationTriangleFill":
            return BsFillExclamationTriangleFill;
        case "bs:BsFillExplicitFill":
            return BsFillExplicitFill;
        case "bs:BsFillEyeFill":
            return BsFillEyeFill;
        case "bs:BsFillEyeSlashFill":
            return BsFillEyeSlashFill;
        case "bs:BsFillFastForwardBtnFill":
            return BsFillFastForwardBtnFill;
        case "bs:BsFillFastForwardCircleFill":
            return BsFillFastForwardCircleFill;
        case "bs:BsFillFastForwardFill":
            return BsFillFastForwardFill;
        case "bs:BsFillFileArrowDownFill":
            return BsFillFileArrowDownFill;
        case "bs:BsFillFileArrowUpFill":
            return BsFillFileArrowUpFill;
        case "bs:BsFillFileBarGraphFill":
            return BsFillFileBarGraphFill;
        case "bs:BsFillFileBinaryFill":
            return BsFillFileBinaryFill;
        case "bs:BsFillFileBreakFill":
            return BsFillFileBreakFill;
        case "bs:BsFillFileCheckFill":
            return BsFillFileCheckFill;
        case "bs:BsFillFileCodeFill":
            return BsFillFileCodeFill;
        case "bs:BsFillFileDiffFill":
            return BsFillFileDiffFill;
        case "bs:BsFillFileEarmarkArrowDownFill":
            return BsFillFileEarmarkArrowDownFill;
        case "bs:BsFillFileEarmarkArrowUpFill":
            return BsFillFileEarmarkArrowUpFill;
        case "bs:BsFillFileEarmarkBarGraphFill":
            return BsFillFileEarmarkBarGraphFill;
        case "bs:BsFillFileEarmarkBinaryFill":
            return BsFillFileEarmarkBinaryFill;
        case "bs:BsFillFileEarmarkBreakFill":
            return BsFillFileEarmarkBreakFill;
        case "bs:BsFillFileEarmarkCheckFill":
            return BsFillFileEarmarkCheckFill;
        case "bs:BsFillFileEarmarkCodeFill":
            return BsFillFileEarmarkCodeFill;
        case "bs:BsFillFileEarmarkDiffFill":
            return BsFillFileEarmarkDiffFill;
        case "bs:BsFillFileEarmarkEaselFill":
            return BsFillFileEarmarkEaselFill;
        case "bs:BsFillFileEarmarkExcelFill":
            return BsFillFileEarmarkExcelFill;
        case "bs:BsFillFileEarmarkFill":
            return BsFillFileEarmarkFill;
        case "bs:BsFillFileEarmarkFontFill":
            return BsFillFileEarmarkFontFill;
        case "bs:BsFillFileEarmarkImageFill":
            return BsFillFileEarmarkImageFill;
        case "bs:BsFillFileEarmarkLockFill":
            return BsFillFileEarmarkLockFill;
        case "bs:BsFillFileEarmarkLock2Fill":
            return BsFillFileEarmarkLock2Fill;
        case "bs:BsFillFileEarmarkMedicalFill":
            return BsFillFileEarmarkMedicalFill;
        case "bs:BsFillFileEarmarkMinusFill":
            return BsFillFileEarmarkMinusFill;
        case "bs:BsFillFileEarmarkMusicFill":
            return BsFillFileEarmarkMusicFill;
        case "bs:BsFillFileEarmarkPdfFill":
            return BsFillFileEarmarkPdfFill;
        case "bs:BsFillFileEarmarkPersonFill":
            return BsFillFileEarmarkPersonFill;
        case "bs:BsFillFileEarmarkPlayFill":
            return BsFillFileEarmarkPlayFill;
        case "bs:BsFillFileEarmarkPlusFill":
            return BsFillFileEarmarkPlusFill;
        case "bs:BsFillFileEarmarkPostFill":
            return BsFillFileEarmarkPostFill;
        case "bs:BsFillFileEarmarkPptFill":
            return BsFillFileEarmarkPptFill;
        case "bs:BsFillFileEarmarkRichtextFill":
            return BsFillFileEarmarkRichtextFill;
        case "bs:BsFillFileEarmarkRuledFill":
            return BsFillFileEarmarkRuledFill;
        case "bs:BsFillFileEarmarkSlidesFill":
            return BsFillFileEarmarkSlidesFill;
        case "bs:BsFillFileEarmarkSpreadsheetFill":
            return BsFillFileEarmarkSpreadsheetFill;
        case "bs:BsFillFileEarmarkTextFill":
            return BsFillFileEarmarkTextFill;
        case "bs:BsFillFileEarmarkWordFill":
            return BsFillFileEarmarkWordFill;
        case "bs:BsFillFileEarmarkXFill":
            return BsFillFileEarmarkXFill;
        case "bs:BsFillFileEarmarkZipFill":
            return BsFillFileEarmarkZipFill;
        case "bs:BsFillFileEaselFill":
            return BsFillFileEaselFill;
        case "bs:BsFillFileExcelFill":
            return BsFillFileExcelFill;
        case "bs:BsFillFileFill":
            return BsFillFileFill;
        case "bs:BsFillFileFontFill":
            return BsFillFileFontFill;
        case "bs:BsFillFileImageFill":
            return BsFillFileImageFill;
        case "bs:BsFillFileLockFill":
            return BsFillFileLockFill;
        case "bs:BsFillFileLock2Fill":
            return BsFillFileLock2Fill;
        case "bs:BsFillFileMedicalFill":
            return BsFillFileMedicalFill;
        case "bs:BsFillFileMinusFill":
            return BsFillFileMinusFill;
        case "bs:BsFillFileMusicFill":
            return BsFillFileMusicFill;
        case "bs:BsFillFilePdfFill":
            return BsFillFilePdfFill;
        case "bs:BsFillFilePersonFill":
            return BsFillFilePersonFill;
        case "bs:BsFillFilePlayFill":
            return BsFillFilePlayFill;
        case "bs:BsFillFilePlusFill":
            return BsFillFilePlusFill;
        case "bs:BsFillFilePostFill":
            return BsFillFilePostFill;
        case "bs:BsFillFilePptFill":
            return BsFillFilePptFill;
        case "bs:BsFillFileRichtextFill":
            return BsFillFileRichtextFill;
        case "bs:BsFillFileRuledFill":
            return BsFillFileRuledFill;
        case "bs:BsFillFileSlidesFill":
            return BsFillFileSlidesFill;
        case "bs:BsFillFileSpreadsheetFill":
            return BsFillFileSpreadsheetFill;
        case "bs:BsFillFileTextFill":
            return BsFillFileTextFill;
        case "bs:BsFillFileWordFill":
            return BsFillFileWordFill;
        case "bs:BsFillFileXFill":
            return BsFillFileXFill;
        case "bs:BsFillFileZipFill":
            return BsFillFileZipFill;
        case "bs:BsFillFilterCircleFill":
            return BsFillFilterCircleFill;
        case "bs:BsFillFilterSquareFill":
            return BsFillFilterSquareFill;
        case "bs:BsFillFlagFill":
            return BsFillFlagFill;
        case "bs:BsFillFloppyFill":
            return BsFillFloppyFill;
        case "bs:BsFillFloppy2Fill":
            return BsFillFloppy2Fill;
        case "bs:BsFillFolderFill":
            return BsFillFolderFill;
        case "bs:BsFillFolderSymlinkFill":
            return BsFillFolderSymlinkFill;
        case "bs:BsFillForwardFill":
            return BsFillForwardFill;
        case "bs:BsFillFuelPumpDieselFill":
            return BsFillFuelPumpDieselFill;
        case "bs:BsFillFuelPumpFill":
            return BsFillFuelPumpFill;
        case "bs:BsFillFunnelFill":
            return BsFillFunnelFill;
        case "bs:BsFillGearFill":
            return BsFillGearFill;
        case "bs:BsFillGeoAltFill":
            return BsFillGeoAltFill;
        case "bs:BsFillGeoFill":
            return BsFillGeoFill;
        case "bs:BsFillGiftFill":
            return BsFillGiftFill;
        case "bs:BsFillGrid1X2Fill":
            return BsFillGrid1X2Fill;
        case "bs:BsFillGrid3X2GapFill":
            return BsFillGrid3X2GapFill;
        case "bs:BsFillGrid3X3GapFill":
            return BsFillGrid3X3GapFill;
        case "bs:BsFillGridFill":
            return BsFillGridFill;
        case "bs:BsFillHCircleFill":
            return BsFillHCircleFill;
        case "bs:BsFillHSquareFill":
            return BsFillHSquareFill;
        case "bs:BsFillHandIndexFill":
            return BsFillHandIndexFill;
        case "bs:BsFillHandIndexThumbFill":
            return BsFillHandIndexThumbFill;
        case "bs:BsFillHandThumbsDownFill":
            return BsFillHandThumbsDownFill;
        case "bs:BsFillHandThumbsUpFill":
            return BsFillHandThumbsUpFill;
        case "bs:BsFillHandbagFill":
            return BsFillHandbagFill;
        case "bs:BsFillHddFill":
            return BsFillHddFill;
        case "bs:BsFillHddNetworkFill":
            return BsFillHddNetworkFill;
        case "bs:BsFillHddRackFill":
            return BsFillHddRackFill;
        case "bs:BsFillHddStackFill":
            return BsFillHddStackFill;
        case "bs:BsFillHdmiFill":
            return BsFillHdmiFill;
        case "bs:BsFillHeartFill":
            return BsFillHeartFill;
        case "bs:BsFillHeartPulseFill":
            return BsFillHeartPulseFill;
        case "bs:BsFillHeartbreakFill":
            return BsFillHeartbreakFill;
        case "bs:BsFillHeptagonFill":
            return BsFillHeptagonFill;
        case "bs:BsFillHexagonFill":
            return BsFillHexagonFill;
        case "bs:BsFillHospitalFill":
            return BsFillHospitalFill;
        case "bs:BsFillHouseAddFill":
            return BsFillHouseAddFill;
        case "bs:BsFillHouseCheckFill":
            return BsFillHouseCheckFill;
        case "bs:BsFillHouseDashFill":
            return BsFillHouseDashFill;
        case "bs:BsFillHouseDoorFill":
            return BsFillHouseDoorFill;
        case "bs:BsFillHouseDownFill":
            return BsFillHouseDownFill;
        case "bs:BsFillHouseExclamationFill":
            return BsFillHouseExclamationFill;
        case "bs:BsFillHouseFill":
            return BsFillHouseFill;
        case "bs:BsFillHouseGearFill":
            return BsFillHouseGearFill;
        case "bs:BsFillHouseHeartFill":
            return BsFillHouseHeartFill;
        case "bs:BsFillHouseLockFill":
            return BsFillHouseLockFill;
        case "bs:BsFillHouseSlashFill":
            return BsFillHouseSlashFill;
        case "bs:BsFillHouseUpFill":
            return BsFillHouseUpFill;
        case "bs:BsFillHouseXFill":
            return BsFillHouseXFill;
        case "bs:BsFillHousesFill":
            return BsFillHousesFill;
        case "bs:BsFillImageFill":
            return BsFillImageFill;
        case "bs:BsFillInboxFill":
            return BsFillInboxFill;
        case "bs:BsFillInboxesFill":
            return BsFillInboxesFill;
        case "bs:BsFillInfoCircleFill":
            return BsFillInfoCircleFill;
        case "bs:BsFillInfoSquareFill":
            return BsFillInfoSquareFill;
        case "bs:BsFillJournalBookmarkFill":
            return BsFillJournalBookmarkFill;
        case "bs:BsFillKanbanFill":
            return BsFillKanbanFill;
        case "bs:BsFillKeyFill":
            return BsFillKeyFill;
        case "bs:BsFillKeyboardFill":
            return BsFillKeyboardFill;
        case "bs:BsFillLampFill":
            return BsFillLampFill;
        case "bs:BsFillLaptopFill":
            return BsFillLaptopFill;
        case "bs:BsFillLayersFill":
            return BsFillLayersFill;
        case "bs:BsFillLightbulbFill":
            return BsFillLightbulbFill;
        case "bs:BsFillLightbulbOffFill":
            return BsFillLightbulbOffFill;
        case "bs:BsFillLightningChargeFill":
            return BsFillLightningChargeFill;
        case "bs:BsFillLightningFill":
            return BsFillLightningFill;
        case "bs:BsFillLockFill":
            return BsFillLockFill;
        case "bs:BsFillLuggageFill":
            return BsFillLuggageFill;
        case "bs:BsFillLungsFill":
            return BsFillLungsFill;
        case "bs:BsFillMagnetFill":
            return BsFillMagnetFill;
        case "bs:BsFillMapFill":
            return BsFillMapFill;
        case "bs:BsFillMarkdownFill":
            return BsFillMarkdownFill;
        case "bs:BsFillMegaphoneFill":
            return BsFillMegaphoneFill;
        case "bs:BsFillMenuAppFill":
            return BsFillMenuAppFill;
        case "bs:BsFillMenuButtonFill":
            return BsFillMenuButtonFill;
        case "bs:BsFillMenuButtonWideFill":
            return BsFillMenuButtonWideFill;
        case "bs:BsFillMicFill":
            return BsFillMicFill;
        case "bs:BsFillMicMuteFill":
            return BsFillMicMuteFill;
        case "bs:BsFillModemFill":
            return BsFillModemFill;
        case "bs:BsFillMoonFill":
            return BsFillMoonFill;
        case "bs:BsFillMoonStarsFill":
            return BsFillMoonStarsFill;
        case "bs:BsFillMortarboardFill":
            return BsFillMortarboardFill;
        case "bs:BsFillMotherboardFill":
            return BsFillMotherboardFill;
        case "bs:BsFillMouseFill":
            return BsFillMouseFill;
        case "bs:BsFillMouse2Fill":
            return BsFillMouse2Fill;
        case "bs:BsFillMouse3Fill":
            return BsFillMouse3Fill;
        case "bs:BsFillMusicPlayerFill":
            return BsFillMusicPlayerFill;
        case "bs:BsFillNodeMinusFill":
            return BsFillNodeMinusFill;
        case "bs:BsFillNodePlusFill":
            return BsFillNodePlusFill;
        case "bs:BsFillNutFill":
            return BsFillNutFill;
        case "bs:BsFillNvmeFill":
            return BsFillNvmeFill;
        case "bs:BsFillOctagonFill":
            return BsFillOctagonFill;
        case "bs:BsFillOpticalAudioFill":
            return BsFillOpticalAudioFill;
        case "bs:BsFillPCircleFill":
            return BsFillPCircleFill;
        case "bs:BsFillPSquareFill":
            return BsFillPSquareFill;
        case "bs:BsFillPaletteFill":
            return BsFillPaletteFill;
        case "bs:BsFillPassFill":
            return BsFillPassFill;
        case "bs:BsFillPassportFill":
            return BsFillPassportFill;
        case "bs:BsFillPatchCheckFill":
            return BsFillPatchCheckFill;
        case "bs:BsFillPatchExclamationFill":
            return BsFillPatchExclamationFill;
        case "bs:BsFillPatchMinusFill":
            return BsFillPatchMinusFill;
        case "bs:BsFillPatchPlusFill":
            return BsFillPatchPlusFill;
        case "bs:BsFillPatchQuestionFill":
            return BsFillPatchQuestionFill;
        case "bs:BsFillPauseBtnFill":
            return BsFillPauseBtnFill;
        case "bs:BsFillPauseCircleFill":
            return BsFillPauseCircleFill;
        case "bs:BsFillPauseFill":
            return BsFillPauseFill;
        case "bs:BsFillPeaceFill":
            return BsFillPeaceFill;
        case "bs:BsFillPenFill":
            return BsFillPenFill;
        case "bs:BsFillPencilFill":
            return BsFillPencilFill;
        case "bs:BsFillPentagonFill":
            return BsFillPentagonFill;
        case "bs:BsFillPeopleFill":
            return BsFillPeopleFill;
        case "bs:BsFillPersonBadgeFill":
            return BsFillPersonBadgeFill;
        case "bs:BsFillPersonCheckFill":
            return BsFillPersonCheckFill;
        case "bs:BsFillPersonDashFill":
            return BsFillPersonDashFill;
        case "bs:BsFillPersonFill":
            return BsFillPersonFill;
        case "bs:BsFillPersonLinesFill":
            return BsFillPersonLinesFill;
        case "bs:BsFillPersonPlusFill":
            return BsFillPersonPlusFill;
        case "bs:BsFillPersonVcardFill":
            return BsFillPersonVcardFill;
        case "bs:BsFillPersonXFill":
            return BsFillPersonXFill;
        case "bs:BsFillPhoneFill":
            return BsFillPhoneFill;
        case "bs:BsFillPhoneLandscapeFill":
            return BsFillPhoneLandscapeFill;
        case "bs:BsFillPhoneVibrateFill":
            return BsFillPhoneVibrateFill;
        case "bs:BsFillPieChartFill":
            return BsFillPieChartFill;
        case "bs:BsFillPiggyBankFill":
            return BsFillPiggyBankFill;
        case "bs:BsFillPinAngleFill":
            return BsFillPinAngleFill;
        case "bs:BsFillPinFill":
            return BsFillPinFill;
        case "bs:BsFillPinMapFill":
            return BsFillPinMapFill;
        case "bs:BsFillPipFill":
            return BsFillPipFill;
        case "bs:BsFillPlayBtnFill":
            return BsFillPlayBtnFill;
        case "bs:BsFillPlayCircleFill":
            return BsFillPlayCircleFill;
        case "bs:BsFillPlayFill":
            return BsFillPlayFill;
        case "bs:BsFillPlugFill":
            return BsFillPlugFill;
        case "bs:BsFillPlusCircleFill":
            return BsFillPlusCircleFill;
        case "bs:BsFillPlusSquareFill":
            return BsFillPlusSquareFill;
        case "bs:BsFillPostageFill":
            return BsFillPostageFill;
        case "bs:BsFillPostageHeartFill":
            return BsFillPostageHeartFill;
        case "bs:BsFillPostcardFill":
            return BsFillPostcardFill;
        case "bs:BsFillPostcardHeartFill":
            return BsFillPostcardHeartFill;
        case "bs:BsFillPrinterFill":
            return BsFillPrinterFill;
        case "bs:BsFillProjectorFill":
            return BsFillProjectorFill;
        case "bs:BsFillPuzzleFill":
            return BsFillPuzzleFill;
        case "bs:BsFillQuestionCircleFill":
            return BsFillQuestionCircleFill;
        case "bs:BsFillQuestionDiamondFill":
            return BsFillQuestionDiamondFill;
        case "bs:BsFillQuestionOctagonFill":
            return BsFillQuestionOctagonFill;
        case "bs:BsFillQuestionSquareFill":
            return BsFillQuestionSquareFill;
        case "bs:BsFillRCircleFill":
            return BsFillRCircleFill;
        case "bs:BsFillRSquareFill":
            return BsFillRSquareFill;
        case "bs:BsFillRecordBtnFill":
            return BsFillRecordBtnFill;
        case "bs:BsFillRecordCircleFill":
            return BsFillRecordCircleFill;
        case "bs:BsFillRecordFill":
            return BsFillRecordFill;
        case "bs:BsFillRecord2Fill":
            return BsFillRecord2Fill;
        case "bs:BsFillReplyAllFill":
            return BsFillReplyAllFill;
        case "bs:BsFillReplyFill":
            return BsFillReplyFill;
        case "bs:BsFillRewindBtnFill":
            return BsFillRewindBtnFill;
        case "bs:BsFillRewindCircleFill":
            return BsFillRewindCircleFill;
        case "bs:BsFillRewindFill":
            return BsFillRewindFill;
        case "bs:BsFillRocketFill":
            return BsFillRocketFill;
        case "bs:BsFillRocketTakeoffFill":
            return BsFillRocketTakeoffFill;
        case "bs:BsFillRouterFill":
            return BsFillRouterFill;
        case "bs:BsFillRssFill":
            return BsFillRssFill;
        case "bs:BsFillSafeFill":
            return BsFillSafeFill;
        case "bs:BsFillSafe2Fill":
            return BsFillSafe2Fill;
        case "bs:BsFillSaveFill":
            return BsFillSaveFill;
        case "bs:BsFillSave2Fill":
            return BsFillSave2Fill;
        case "bs:BsFillSdCardFill":
            return BsFillSdCardFill;
        case "bs:BsFillSearchHeartFill":
            return BsFillSearchHeartFill;
        case "bs:BsFillSendArrowDownFill":
            return BsFillSendArrowDownFill;
        case "bs:BsFillSendArrowUpFill":
            return BsFillSendArrowUpFill;
        case "bs:BsFillSendCheckFill":
            return BsFillSendCheckFill;
        case "bs:BsFillSendDashFill":
            return BsFillSendDashFill;
        case "bs:BsFillSendExclamationFill":
            return BsFillSendExclamationFill;
        case "bs:BsFillSendFill":
            return BsFillSendFill;
        case "bs:BsFillSendPlusFill":
            return BsFillSendPlusFill;
        case "bs:BsFillSendSlashFill":
            return BsFillSendSlashFill;
        case "bs:BsFillSendXFill":
            return BsFillSendXFill;
        case "bs:BsFillShareFill":
            return BsFillShareFill;
        case "bs:BsFillShieldFill":
            return BsFillShieldFill;
        case "bs:BsFillShieldLockFill":
            return BsFillShieldLockFill;
        case "bs:BsFillShieldSlashFill":
            return BsFillShieldSlashFill;
        case "bs:BsFillShiftFill":
            return BsFillShiftFill;
        case "bs:BsFillSignDeadEndFill":
            return BsFillSignDeadEndFill;
        case "bs:BsFillSignDoNotEnterFill":
            return BsFillSignDoNotEnterFill;
        case "bs:BsFillSignIntersectionFill":
            return BsFillSignIntersectionFill;
        case "bs:BsFillSignIntersectionSideFill":
            return BsFillSignIntersectionSideFill;
        case "bs:BsFillSignIntersectionTFill":
            return BsFillSignIntersectionTFill;
        case "bs:BsFillSignIntersectionYFill":
            return BsFillSignIntersectionYFill;
        case "bs:BsFillSignMergeLeftFill":
            return BsFillSignMergeLeftFill;
        case "bs:BsFillSignMergeRightFill":
            return BsFillSignMergeRightFill;
        case "bs:BsFillSignNoLeftTurnFill":
            return BsFillSignNoLeftTurnFill;
        case "bs:BsFillSignNoParkingFill":
            return BsFillSignNoParkingFill;
        case "bs:BsFillSignNoRightTurnFill":
            return BsFillSignNoRightTurnFill;
        case "bs:BsFillSignRailroadFill":
            return BsFillSignRailroadFill;
        case "bs:BsFillSignStopFill":
            return BsFillSignStopFill;
        case "bs:BsFillSignStopLightsFill":
            return BsFillSignStopLightsFill;
        case "bs:BsFillSignTurnLeftFill":
            return BsFillSignTurnLeftFill;
        case "bs:BsFillSignTurnRightFill":
            return BsFillSignTurnRightFill;
        case "bs:BsFillSignTurnSlightLeftFill":
            return BsFillSignTurnSlightLeftFill;
        case "bs:BsFillSignTurnSlightRightFill":
            return BsFillSignTurnSlightRightFill;
        case "bs:BsFillSignYieldFill":
            return BsFillSignYieldFill;
        case "bs:BsFillSignpost2Fill":
            return BsFillSignpost2Fill;
        case "bs:BsFillSignpostFill":
            return BsFillSignpostFill;
        case "bs:BsFillSignpostSplitFill":
            return BsFillSignpostSplitFill;
        case "bs:BsFillSimFill":
            return BsFillSimFill;
        case "bs:BsFillSimSlashFill":
            return BsFillSimSlashFill;
        case "bs:BsFillSkipBackwardBtnFill":
            return BsFillSkipBackwardBtnFill;
        case "bs:BsFillSkipBackwardCircleFill":
            return BsFillSkipBackwardCircleFill;
        case "bs:BsFillSkipBackwardFill":
            return BsFillSkipBackwardFill;
        case "bs:BsFillSkipEndBtnFill":
            return BsFillSkipEndBtnFill;
        case "bs:BsFillSkipEndCircleFill":
            return BsFillSkipEndCircleFill;
        case "bs:BsFillSkipEndFill":
            return BsFillSkipEndFill;
        case "bs:BsFillSkipForwardBtnFill":
            return BsFillSkipForwardBtnFill;
        case "bs:BsFillSkipForwardCircleFill":
            return BsFillSkipForwardCircleFill;
        case "bs:BsFillSkipForwardFill":
            return BsFillSkipForwardFill;
        case "bs:BsFillSkipStartBtnFill":
            return BsFillSkipStartBtnFill;
        case "bs:BsFillSkipStartCircleFill":
            return BsFillSkipStartCircleFill;
        case "bs:BsFillSkipStartFill":
            return BsFillSkipStartFill;
        case "bs:BsFillSlashCircleFill":
            return BsFillSlashCircleFill;
        case "bs:BsFillSlashSquareFill":
            return BsFillSlashSquareFill;
        case "bs:BsFillSpeakerFill":
            return BsFillSpeakerFill;
        case "bs:BsFillSquareFill":
            return BsFillSquareFill;
        case "bs:BsFillStarFill":
            return BsFillStarFill;
        case "bs:BsFillStickiesFill":
            return BsFillStickiesFill;
        case "bs:BsFillStickyFill":
            return BsFillStickyFill;
        case "bs:BsFillStopBtnFill":
            return BsFillStopBtnFill;
        case "bs:BsFillStopCircleFill":
            return BsFillStopCircleFill;
        case "bs:BsFillStopFill":
            return BsFillStopFill;
        case "bs:BsFillStoplightsFill":
            return BsFillStoplightsFill;
        case "bs:BsFillStopwatchFill":
            return BsFillStopwatchFill;
        case "bs:BsFillSuitClubFill":
            return BsFillSuitClubFill;
        case "bs:BsFillSuitDiamondFill":
            return BsFillSuitDiamondFill;
        case "bs:BsFillSuitHeartFill":
            return BsFillSuitHeartFill;
        case "bs:BsFillSuitSpadeFill":
            return BsFillSuitSpadeFill;
        case "bs:BsFillSuitcaseFill":
            return BsFillSuitcaseFill;
        case "bs:BsFillSuitcaseLgFill":
            return BsFillSuitcaseLgFill;
        case "bs:BsFillSuitcase2Fill":
            return BsFillSuitcase2Fill;
        case "bs:BsFillSunFill":
            return BsFillSunFill;
        case "bs:BsFillSunriseFill":
            return BsFillSunriseFill;
        case "bs:BsFillSunsetFill":
            return BsFillSunsetFill;
        case "bs:BsFillTabletFill":
            return BsFillTabletFill;
        case "bs:BsFillTabletLandscapeFill":
            return BsFillTabletLandscapeFill;
        case "bs:BsFillTagFill":
            return BsFillTagFill;
        case "bs:BsFillTagsFill":
            return BsFillTagsFill;
        case "bs:BsFillTaxiFrontFill":
            return BsFillTaxiFrontFill;
        case "bs:BsFillTelephoneFill":
            return BsFillTelephoneFill;
        case "bs:BsFillTelephoneForwardFill":
            return BsFillTelephoneForwardFill;
        case "bs:BsFillTelephoneInboundFill":
            return BsFillTelephoneInboundFill;
        case "bs:BsFillTelephoneMinusFill":
            return BsFillTelephoneMinusFill;
        case "bs:BsFillTelephoneOutboundFill":
            return BsFillTelephoneOutboundFill;
        case "bs:BsFillTelephonePlusFill":
            return BsFillTelephonePlusFill;
        case "bs:BsFillTelephoneXFill":
            return BsFillTelephoneXFill;
        case "bs:BsFillTerminalFill":
            return BsFillTerminalFill;
        case "bs:BsFillThreadsFill":
            return BsFillThreadsFill;
        case "bs:BsFillThunderboltFill":
            return BsFillThunderboltFill;
        case "bs:BsFillTicketDetailedFill":
            return BsFillTicketDetailedFill;
        case "bs:BsFillTicketFill":
            return BsFillTicketFill;
        case "bs:BsFillTicketPerforatedFill":
            return BsFillTicketPerforatedFill;
        case "bs:BsFillTrainFreightFrontFill":
            return BsFillTrainFreightFrontFill;
        case "bs:BsFillTrainFrontFill":
            return BsFillTrainFrontFill;
        case "bs:BsFillTrainLightrailFrontFill":
            return BsFillTrainLightrailFrontFill;
        case "bs:BsFillTrashFill":
            return BsFillTrashFill;
        case "bs:BsFillTrash2Fill":
            return BsFillTrash2Fill;
        case "bs:BsFillTrash3Fill":
            return BsFillTrash3Fill;
        case "bs:BsFillTreeFill":
            return BsFillTreeFill;
        case "bs:BsFillTriangleFill":
            return BsFillTriangleFill;
        case "bs:BsFillTrophyFill":
            return BsFillTrophyFill;
        case "bs:BsFillTruckFrontFill":
            return BsFillTruckFrontFill;
        case "bs:BsFillTvFill":
            return BsFillTvFill;
        case "bs:BsFillUmbrellaFill":
            return BsFillUmbrellaFill;
        case "bs:BsFillUnlockFill":
            return BsFillUnlockFill;
        case "bs:BsFillUsbCFill":
            return BsFillUsbCFill;
        case "bs:BsFillUsbDriveFill":
            return BsFillUsbDriveFill;
        case "bs:BsFillUsbFill":
            return BsFillUsbFill;
        case "bs:BsFillUsbMicroFill":
            return BsFillUsbMicroFill;
        case "bs:BsFillUsbMiniFill":
            return BsFillUsbMiniFill;
        case "bs:BsFillUsbPlugFill":
            return BsFillUsbPlugFill;
        case "bs:BsFillVinylFill":
            return BsFillVinylFill;
        case "bs:BsFillVolumeDownFill":
            return BsFillVolumeDownFill;
        case "bs:BsFillVolumeMuteFill":
            return BsFillVolumeMuteFill;
        case "bs:BsFillVolumeOffFill":
            return BsFillVolumeOffFill;
        case "bs:BsFillVolumeUpFill":
            return BsFillVolumeUpFill;
        case "bs:BsFillWalletFill":
            return BsFillWalletFill;
        case "bs:BsFillWebcamFill":
            return BsFillWebcamFill;
        case "bs:BsFillWrenchAdjustableCircleFill":
            return BsFillWrenchAdjustableCircleFill;
        case "bs:BsFillXCircleFill":
            return BsFillXCircleFill;
        case "bs:BsFillXDiamondFill":
            return BsFillXDiamondFill;
        case "bs:BsFillXOctagonFill":
            return BsFillXOctagonFill;
        case "bs:BsFillXSquareFill":
            return BsFillXSquareFill;
        case "bs:BsReverseBackspaceReverse":
            return BsReverseBackspaceReverse;
        case "bs:BsReverseLayoutSidebarInsetReverse":
            return BsReverseLayoutSidebarInsetReverse;
        case "bs:BsReverseLayoutSidebarReverse":
            return BsReverseLayoutSidebarReverse;
        case "bs:BsReverseLayoutTextSidebarReverse":
            return BsReverseLayoutTextSidebarReverse;
        case "bs:BsReverseLayoutTextWindowReverse":
            return BsReverseLayoutTextWindowReverse;
        case "bs:BsReverseListColumnsReverse":
            return BsReverseListColumnsReverse;
        case "bs:Bs0CircleFill":
            return Bs0CircleFill;
        case "bs:Bs0Circle":
            return Bs0Circle;
        case "bs:Bs0SquareFill":
            return Bs0SquareFill;
        case "bs:Bs0Square":
            return Bs0Square;
        case "bs:Bs1CircleFill":
            return Bs1CircleFill;
        case "bs:Bs1Circle":
            return Bs1Circle;
        case "bs:Bs1SquareFill":
            return Bs1SquareFill;
        case "bs:Bs1Square":
            return Bs1Square;
        case "bs:Bs123":
            return Bs123;
        case "bs:Bs2CircleFill":
            return Bs2CircleFill;
        case "bs:Bs2Circle":
            return Bs2Circle;
        case "bs:Bs2SquareFill":
            return Bs2SquareFill;
        case "bs:Bs2Square":
            return Bs2Square;
        case "bs:Bs3CircleFill":
            return Bs3CircleFill;
        case "bs:Bs3Circle":
            return Bs3Circle;
        case "bs:Bs3SquareFill":
            return Bs3SquareFill;
        case "bs:Bs3Square":
            return Bs3Square;
        case "bs:Bs4CircleFill":
            return Bs4CircleFill;
        case "bs:Bs4Circle":
            return Bs4Circle;
        case "bs:Bs4SquareFill":
            return Bs4SquareFill;
        case "bs:Bs4Square":
            return Bs4Square;
        case "bs:Bs5CircleFill":
            return Bs5CircleFill;
        case "bs:Bs5Circle":
            return Bs5Circle;
        case "bs:Bs5SquareFill":
            return Bs5SquareFill;
        case "bs:Bs5Square":
            return Bs5Square;
        case "bs:Bs6CircleFill":
            return Bs6CircleFill;
        case "bs:Bs6Circle":
            return Bs6Circle;
        case "bs:Bs6SquareFill":
            return Bs6SquareFill;
        case "bs:Bs6Square":
            return Bs6Square;
        case "bs:Bs7CircleFill":
            return Bs7CircleFill;
        case "bs:Bs7Circle":
            return Bs7Circle;
        case "bs:Bs7SquareFill":
            return Bs7SquareFill;
        case "bs:Bs7Square":
            return Bs7Square;
        case "bs:Bs8CircleFill":
            return Bs8CircleFill;
        case "bs:Bs8Circle":
            return Bs8Circle;
        case "bs:Bs8SquareFill":
            return Bs8SquareFill;
        case "bs:Bs8Square":
            return Bs8Square;
        case "bs:Bs9CircleFill":
            return Bs9CircleFill;
        case "bs:Bs9Circle":
            return Bs9Circle;
        case "bs:Bs9SquareFill":
            return Bs9SquareFill;
        case "bs:Bs9Square":
            return Bs9Square;
        case "bs:BsActivity":
            return BsActivity;
        case "bs:BsAirplaneEnginesFill":
            return BsAirplaneEnginesFill;
        case "bs:BsAirplaneEngines":
            return BsAirplaneEngines;
        case "bs:BsAirplaneFill":
            return BsAirplaneFill;
        case "bs:BsAirplane":
            return BsAirplane;
        case "bs:BsAlarmFill":
            return BsAlarmFill;
        case "bs:BsAlarm":
            return BsAlarm;
        case "bs:BsAlexa":
            return BsAlexa;
        case "bs:BsAlignBottom":
            return BsAlignBottom;
        case "bs:BsAlignCenter":
            return BsAlignCenter;
        case "bs:BsAlignEnd":
            return BsAlignEnd;
        case "bs:BsAlignMiddle":
            return BsAlignMiddle;
        case "bs:BsAlignStart":
            return BsAlignStart;
        case "bs:BsAlignTop":
            return BsAlignTop;
        case "bs:BsAlipay":
            return BsAlipay;
        case "bs:BsAlphabetUppercase":
            return BsAlphabetUppercase;
        case "bs:BsAlphabet":
            return BsAlphabet;
        case "bs:BsAlt":
            return BsAlt;
        case "bs:BsAmazon":
            return BsAmazon;
        case "bs:BsAmd":
            return BsAmd;
        case "bs:BsAndroid":
            return BsAndroid;
        case "bs:BsAndroid2":
            return BsAndroid2;
        case "bs:BsAppIndicator":
            return BsAppIndicator;
        case "bs:BsApp":
            return BsApp;
        case "bs:BsApple":
            return BsApple;
        case "bs:BsArchiveFill":
            return BsArchiveFill;
        case "bs:BsArchive":
            return BsArchive;
        case "bs:BsArrow90DegDown":
            return BsArrow90DegDown;
        case "bs:BsArrow90DegLeft":
            return BsArrow90DegLeft;
        case "bs:BsArrow90DegRight":
            return BsArrow90DegRight;
        case "bs:BsArrow90DegUp":
            return BsArrow90DegUp;
        case "bs:BsArrowBarDown":
            return BsArrowBarDown;
        case "bs:BsArrowBarLeft":
            return BsArrowBarLeft;
        case "bs:BsArrowBarRight":
            return BsArrowBarRight;
        case "bs:BsArrowBarUp":
            return BsArrowBarUp;
        case "bs:BsArrowClockwise":
            return BsArrowClockwise;
        case "bs:BsArrowCounterclockwise":
            return BsArrowCounterclockwise;
        case "bs:BsArrowDownCircleFill":
            return BsArrowDownCircleFill;
        case "bs:BsArrowDownCircle":
            return BsArrowDownCircle;
        case "bs:BsArrowDownLeftCircleFill":
            return BsArrowDownLeftCircleFill;
        case "bs:BsArrowDownLeftCircle":
            return BsArrowDownLeftCircle;
        case "bs:BsArrowDownLeftSquareFill":
            return BsArrowDownLeftSquareFill;
        case "bs:BsArrowDownLeftSquare":
            return BsArrowDownLeftSquare;
        case "bs:BsArrowDownLeft":
            return BsArrowDownLeft;
        case "bs:BsArrowDownRightCircleFill":
            return BsArrowDownRightCircleFill;
        case "bs:BsArrowDownRightCircle":
            return BsArrowDownRightCircle;
        case "bs:BsArrowDownRightSquareFill":
            return BsArrowDownRightSquareFill;
        case "bs:BsArrowDownRightSquare":
            return BsArrowDownRightSquare;
        case "bs:BsArrowDownRight":
            return BsArrowDownRight;
        case "bs:BsArrowDownShort":
            return BsArrowDownShort;
        case "bs:BsArrowDownSquareFill":
            return BsArrowDownSquareFill;
        case "bs:BsArrowDownSquare":
            return BsArrowDownSquare;
        case "bs:BsArrowDownUp":
            return BsArrowDownUp;
        case "bs:BsArrowDown":
            return BsArrowDown;
        case "bs:BsArrowLeftCircleFill":
            return BsArrowLeftCircleFill;
        case "bs:BsArrowLeftCircle":
            return BsArrowLeftCircle;
        case "bs:BsArrowLeftRight":
            return BsArrowLeftRight;
        case "bs:BsArrowLeftShort":
            return BsArrowLeftShort;
        case "bs:BsArrowLeftSquareFill":
            return BsArrowLeftSquareFill;
        case "bs:BsArrowLeftSquare":
            return BsArrowLeftSquare;
        case "bs:BsArrowLeft":
            return BsArrowLeft;
        case "bs:BsArrowRepeat":
            return BsArrowRepeat;
        case "bs:BsArrowReturnLeft":
            return BsArrowReturnLeft;
        case "bs:BsArrowReturnRight":
            return BsArrowReturnRight;
        case "bs:BsArrowRightCircleFill":
            return BsArrowRightCircleFill;
        case "bs:BsArrowRightCircle":
            return BsArrowRightCircle;
        case "bs:BsArrowRightShort":
            return BsArrowRightShort;
        case "bs:BsArrowRightSquareFill":
            return BsArrowRightSquareFill;
        case "bs:BsArrowRightSquare":
            return BsArrowRightSquare;
        case "bs:BsArrowRight":
            return BsArrowRight;
        case "bs:BsArrowThroughHeartFill":
            return BsArrowThroughHeartFill;
        case "bs:BsArrowThroughHeart":
            return BsArrowThroughHeart;
        case "bs:BsArrowUpCircleFill":
            return BsArrowUpCircleFill;
        case "bs:BsArrowUpCircle":
            return BsArrowUpCircle;
        case "bs:BsArrowUpLeftCircleFill":
            return BsArrowUpLeftCircleFill;
        case "bs:BsArrowUpLeftCircle":
            return BsArrowUpLeftCircle;
        case "bs:BsArrowUpLeftSquareFill":
            return BsArrowUpLeftSquareFill;
        case "bs:BsArrowUpLeftSquare":
            return BsArrowUpLeftSquare;
        case "bs:BsArrowUpLeft":
            return BsArrowUpLeft;
        case "bs:BsArrowUpRightCircleFill":
            return BsArrowUpRightCircleFill;
        case "bs:BsArrowUpRightCircle":
            return BsArrowUpRightCircle;
        case "bs:BsArrowUpRightSquareFill":
            return BsArrowUpRightSquareFill;
        case "bs:BsArrowUpRightSquare":
            return BsArrowUpRightSquare;
        case "bs:BsArrowUpRight":
            return BsArrowUpRight;
        case "bs:BsArrowUpShort":
            return BsArrowUpShort;
        case "bs:BsArrowUpSquareFill":
            return BsArrowUpSquareFill;
        case "bs:BsArrowUpSquare":
            return BsArrowUpSquare;
        case "bs:BsArrowUp":
            return BsArrowUp;
        case "bs:BsArrowsAngleContract":
            return BsArrowsAngleContract;
        case "bs:BsArrowsAngleExpand":
            return BsArrowsAngleExpand;
        case "bs:BsArrowsCollapseVertical":
            return BsArrowsCollapseVertical;
        case "bs:BsArrowsCollapse":
            return BsArrowsCollapse;
        case "bs:BsArrowsExpandVertical":
            return BsArrowsExpandVertical;
        case "bs:BsArrowsExpand":
            return BsArrowsExpand;
        case "bs:BsArrowsFullscreen":
            return BsArrowsFullscreen;
        case "bs:BsArrowsMove":
            return BsArrowsMove;
        case "bs:BsArrowsVertical":
            return BsArrowsVertical;
        case "bs:BsArrows":
            return BsArrows;
        case "bs:BsAspectRatioFill":
            return BsAspectRatioFill;
        case "bs:BsAspectRatio":
            return BsAspectRatio;
        case "bs:BsAsterisk":
            return BsAsterisk;
        case "bs:BsAt":
            return BsAt;
        case "bs:BsAwardFill":
            return BsAwardFill;
        case "bs:BsAward":
            return BsAward;
        case "bs:BsBack":
            return BsBack;
        case "bs:BsBackpackFill":
            return BsBackpackFill;
        case "bs:BsBackpack":
            return BsBackpack;
        case "bs:BsBackpack2Fill":
            return BsBackpack2Fill;
        case "bs:BsBackpack2":
            return BsBackpack2;
        case "bs:BsBackpack3Fill":
            return BsBackpack3Fill;
        case "bs:BsBackpack3":
            return BsBackpack3;
        case "bs:BsBackpack4Fill":
            return BsBackpack4Fill;
        case "bs:BsBackpack4":
            return BsBackpack4;
        case "bs:BsBackspaceFill":
            return BsBackspaceFill;
        case "bs:BsBackspaceReverseFill":
            return BsBackspaceReverseFill;
        case "bs:BsBackspaceReverse":
            return BsBackspaceReverse;
        case "bs:BsBackspace":
            return BsBackspace;
        case "bs:BsBadge3dFill":
            return BsBadge3dFill;
        case "bs:BsBadge3D":
            return BsBadge3D;
        case "bs:BsBadge4kFill":
            return BsBadge4kFill;
        case "bs:BsBadge4K":
            return BsBadge4K;
        case "bs:BsBadge8kFill":
            return BsBadge8kFill;
        case "bs:BsBadge8K":
            return BsBadge8K;
        case "bs:BsBadgeAdFill":
            return BsBadgeAdFill;
        case "bs:BsBadgeAd":
            return BsBadgeAd;
        case "bs:BsBadgeArFill":
            return BsBadgeArFill;
        case "bs:BsBadgeAr":
            return BsBadgeAr;
        case "bs:BsBadgeCcFill":
            return BsBadgeCcFill;
        case "bs:BsBadgeCc":
            return BsBadgeCc;
        case "bs:BsBadgeHdFill":
            return BsBadgeHdFill;
        case "bs:BsBadgeHd":
            return BsBadgeHd;
        case "bs:BsBadgeSdFill":
            return BsBadgeSdFill;
        case "bs:BsBadgeSd":
            return BsBadgeSd;
        case "bs:BsBadgeTmFill":
            return BsBadgeTmFill;
        case "bs:BsBadgeTm":
            return BsBadgeTm;
        case "bs:BsBadgeVoFill":
            return BsBadgeVoFill;
        case "bs:BsBadgeVo":
            return BsBadgeVo;
        case "bs:BsBadgeVrFill":
            return BsBadgeVrFill;
        case "bs:BsBadgeVr":
            return BsBadgeVr;
        case "bs:BsBadgeWcFill":
            return BsBadgeWcFill;
        case "bs:BsBadgeWc":
            return BsBadgeWc;
        case "bs:BsBagCheckFill":
            return BsBagCheckFill;
        case "bs:BsBagCheck":
            return BsBagCheck;
        case "bs:BsBagDashFill":
            return BsBagDashFill;
        case "bs:BsBagDash":
            return BsBagDash;
        case "bs:BsBagFill":
            return BsBagFill;
        case "bs:BsBagHeartFill":
            return BsBagHeartFill;
        case "bs:BsBagHeart":
            return BsBagHeart;
        case "bs:BsBagPlusFill":
            return BsBagPlusFill;
        case "bs:BsBagPlus":
            return BsBagPlus;
        case "bs:BsBagXFill":
            return BsBagXFill;
        case "bs:BsBagX":
            return BsBagX;
        case "bs:BsBag":
            return BsBag;
        case "bs:BsBalloonFill":
            return BsBalloonFill;
        case "bs:BsBalloonHeartFill":
            return BsBalloonHeartFill;
        case "bs:BsBalloonHeart":
            return BsBalloonHeart;
        case "bs:BsBalloon":
            return BsBalloon;
        case "bs:BsBanFill":
            return BsBanFill;
        case "bs:BsBan":
            return BsBan;
        case "bs:BsBandaidFill":
            return BsBandaidFill;
        case "bs:BsBandaid":
            return BsBandaid;
        case "bs:BsBank":
            return BsBank;
        case "bs:BsBank2":
            return BsBank2;
        case "bs:BsBarChartFill":
            return BsBarChartFill;
        case "bs:BsBarChartLineFill":
            return BsBarChartLineFill;
        case "bs:BsBarChartLine":
            return BsBarChartLine;
        case "bs:BsBarChartSteps":
            return BsBarChartSteps;
        case "bs:BsBarChart":
            return BsBarChart;
        case "bs:BsBasketFill":
            return BsBasketFill;
        case "bs:BsBasket":
            return BsBasket;
        case "bs:BsBasket2Fill":
            return BsBasket2Fill;
        case "bs:BsBasket2":
            return BsBasket2;
        case "bs:BsBasket3Fill":
            return BsBasket3Fill;
        case "bs:BsBasket3":
            return BsBasket3;
        case "bs:BsBatteryCharging":
            return BsBatteryCharging;
        case "bs:BsBatteryFull":
            return BsBatteryFull;
        case "bs:BsBatteryHalf":
            return BsBatteryHalf;
        case "bs:BsBattery":
            return BsBattery;
        case "bs:BsBehance":
            return BsBehance;
        case "bs:BsBellFill":
            return BsBellFill;
        case "bs:BsBellSlashFill":
            return BsBellSlashFill;
        case "bs:BsBellSlash":
            return BsBellSlash;
        case "bs:BsBell":
            return BsBell;
        case "bs:BsBezier":
            return BsBezier;
        case "bs:BsBezier2":
            return BsBezier2;
        case "bs:BsBicycle":
            return BsBicycle;
        case "bs:BsBing":
            return BsBing;
        case "bs:BsBinocularsFill":
            return BsBinocularsFill;
        case "bs:BsBinoculars":
            return BsBinoculars;
        case "bs:BsBlockquoteLeft":
            return BsBlockquoteLeft;
        case "bs:BsBlockquoteRight":
            return BsBlockquoteRight;
        case "bs:BsBluetooth":
            return BsBluetooth;
        case "bs:BsBodyText":
            return BsBodyText;
        case "bs:BsBookFill":
            return BsBookFill;
        case "bs:BsBookHalf":
            return BsBookHalf;
        case "bs:BsBook":
            return BsBook;
        case "bs:BsBookmarkCheckFill":
            return BsBookmarkCheckFill;
        case "bs:BsBookmarkCheck":
            return BsBookmarkCheck;
        case "bs:BsBookmarkDashFill":
            return BsBookmarkDashFill;
        case "bs:BsBookmarkDash":
            return BsBookmarkDash;
        case "bs:BsBookmarkFill":
            return BsBookmarkFill;
        case "bs:BsBookmarkHeartFill":
            return BsBookmarkHeartFill;
        case "bs:BsBookmarkHeart":
            return BsBookmarkHeart;
        case "bs:BsBookmarkPlusFill":
            return BsBookmarkPlusFill;
        case "bs:BsBookmarkPlus":
            return BsBookmarkPlus;
        case "bs:BsBookmarkStarFill":
            return BsBookmarkStarFill;
        case "bs:BsBookmarkStar":
            return BsBookmarkStar;
        case "bs:BsBookmarkXFill":
            return BsBookmarkXFill;
        case "bs:BsBookmarkX":
            return BsBookmarkX;
        case "bs:BsBookmark":
            return BsBookmark;
        case "bs:BsBookmarksFill":
            return BsBookmarksFill;
        case "bs:BsBookmarks":
            return BsBookmarks;
        case "bs:BsBookshelf":
            return BsBookshelf;
        case "bs:BsBoomboxFill":
            return BsBoomboxFill;
        case "bs:BsBoombox":
            return BsBoombox;
        case "bs:BsBootstrapFill":
            return BsBootstrapFill;
        case "bs:BsBootstrapReboot":
            return BsBootstrapReboot;
        case "bs:BsBootstrap":
            return BsBootstrap;
        case "bs:BsBorderAll":
            return BsBorderAll;
        case "bs:BsBorderBottom":
            return BsBorderBottom;
        case "bs:BsBorderCenter":
            return BsBorderCenter;
        case "bs:BsBorderInner":
            return BsBorderInner;
        case "bs:BsBorderLeft":
            return BsBorderLeft;
        case "bs:BsBorderMiddle":
            return BsBorderMiddle;
        case "bs:BsBorderOuter":
            return BsBorderOuter;
        case "bs:BsBorderRight":
            return BsBorderRight;
        case "bs:BsBorderStyle":
            return BsBorderStyle;
        case "bs:BsBorderTop":
            return BsBorderTop;
        case "bs:BsBorderWidth":
            return BsBorderWidth;
        case "bs:BsBorder":
            return BsBorder;
        case "bs:BsBoundingBoxCircles":
            return BsBoundingBoxCircles;
        case "bs:BsBoundingBox":
            return BsBoundingBox;
        case "bs:BsBoxArrowDownLeft":
            return BsBoxArrowDownLeft;
        case "bs:BsBoxArrowDownRight":
            return BsBoxArrowDownRight;
        case "bs:BsBoxArrowDown":
            return BsBoxArrowDown;
        case "bs:BsBoxArrowInDownLeft":
            return BsBoxArrowInDownLeft;
        case "bs:BsBoxArrowInDownRight":
            return BsBoxArrowInDownRight;
        case "bs:BsBoxArrowInDown":
            return BsBoxArrowInDown;
        case "bs:BsBoxArrowInLeft":
            return BsBoxArrowInLeft;
        case "bs:BsBoxArrowInRight":
            return BsBoxArrowInRight;
        case "bs:BsBoxArrowInUpLeft":
            return BsBoxArrowInUpLeft;
        case "bs:BsBoxArrowInUpRight":
            return BsBoxArrowInUpRight;
        case "bs:BsBoxArrowInUp":
            return BsBoxArrowInUp;
        case "bs:BsBoxArrowLeft":
            return BsBoxArrowLeft;
        case "bs:BsBoxArrowRight":
            return BsBoxArrowRight;
        case "bs:BsBoxArrowUpLeft":
            return BsBoxArrowUpLeft;
        case "bs:BsBoxArrowUpRight":
            return BsBoxArrowUpRight;
        case "bs:BsBoxArrowUp":
            return BsBoxArrowUp;
        case "bs:BsBoxFill":
            return BsBoxFill;
        case "bs:BsBoxSeamFill":
            return BsBoxSeamFill;
        case "bs:BsBoxSeam":
            return BsBoxSeam;
        case "bs:BsBox":
            return BsBox;
        case "bs:BsBox2Fill":
            return BsBox2Fill;
        case "bs:BsBox2HeartFill":
            return BsBox2HeartFill;
        case "bs:BsBox2Heart":
            return BsBox2Heart;
        case "bs:BsBox2":
            return BsBox2;
        case "bs:BsBoxes":
            return BsBoxes;
        case "bs:BsBracesAsterisk":
            return BsBracesAsterisk;
        case "bs:BsBraces":
            return BsBraces;
        case "bs:BsBricks":
            return BsBricks;
        case "bs:BsBriefcaseFill":
            return BsBriefcaseFill;
        case "bs:BsBriefcase":
            return BsBriefcase;
        case "bs:BsBrightnessAltHighFill":
            return BsBrightnessAltHighFill;
        case "bs:BsBrightnessAltHigh":
            return BsBrightnessAltHigh;
        case "bs:BsBrightnessAltLowFill":
            return BsBrightnessAltLowFill;
        case "bs:BsBrightnessAltLow":
            return BsBrightnessAltLow;
        case "bs:BsBrightnessHighFill":
            return BsBrightnessHighFill;
        case "bs:BsBrightnessHigh":
            return BsBrightnessHigh;
        case "bs:BsBrightnessLowFill":
            return BsBrightnessLowFill;
        case "bs:BsBrightnessLow":
            return BsBrightnessLow;
        case "bs:BsBrilliance":
            return BsBrilliance;
        case "bs:BsBroadcastPin":
            return BsBroadcastPin;
        case "bs:BsBroadcast":
            return BsBroadcast;
        case "bs:BsBrowserChrome":
            return BsBrowserChrome;
        case "bs:BsBrowserEdge":
            return BsBrowserEdge;
        case "bs:BsBrowserFirefox":
            return BsBrowserFirefox;
        case "bs:BsBrowserSafari":
            return BsBrowserSafari;
        case "bs:BsBrushFill":
            return BsBrushFill;
        case "bs:BsBrush":
            return BsBrush;
        case "bs:BsBucketFill":
            return BsBucketFill;
        case "bs:BsBucket":
            return BsBucket;
        case "bs:BsBugFill":
            return BsBugFill;
        case "bs:BsBug":
            return BsBug;
        case "bs:BsBuildingAdd":
            return BsBuildingAdd;
        case "bs:BsBuildingCheck":
            return BsBuildingCheck;
        case "bs:BsBuildingDash":
            return BsBuildingDash;
        case "bs:BsBuildingDown":
            return BsBuildingDown;
        case "bs:BsBuildingExclamation":
            return BsBuildingExclamation;
        case "bs:BsBuildingFillAdd":
            return BsBuildingFillAdd;
        case "bs:BsBuildingFillCheck":
            return BsBuildingFillCheck;
        case "bs:BsBuildingFillDash":
            return BsBuildingFillDash;
        case "bs:BsBuildingFillDown":
            return BsBuildingFillDown;
        case "bs:BsBuildingFillExclamation":
            return BsBuildingFillExclamation;
    }
}
