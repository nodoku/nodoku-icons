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
export function nameToReactIcon_pi_1(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, PiPackageBold, PiPaintBrushBold, PiPaintBrushBroadBold, PiPaintBrushHouseholdBold, PiPaintBucketBold, PiPaintRollerBold, PiPaletteBold, PiPanoramaBold, PiPantsBold, PiPaperPlaneBold, PiPaperPlaneRightBold, PiPaperPlaneTiltBold, PiPaperclipBold, PiPaperclipHorizontalBold, PiParachuteBold, PiParagraphBold, PiParallelogramBold, PiParkBold, PiPasswordBold, PiPathBold, PiPatreonLogoBold, PiPauseBold, PiPauseCircleBold, PiPawPrintBold, PiPaypalLogoBold, PiPeaceBold, PiPenBold, PiPenNibBold, PiPenNibStraightBold, PiPencilBold, PiPencilCircleBold, PiPencilLineBold, PiPencilRulerBold, PiPencilSimpleBold, PiPencilSimpleLineBold, PiPencilSimpleSlashBold, PiPencilSlashBold, PiPentagonBold, PiPentagramBold, PiPepperBold, PiPercentBold, PiPersonArmsSpreadBold, PiPersonBold, PiPersonSimpleBikeBold, PiPersonSimpleBold, PiPersonSimpleCircleBold, PiPersonSimpleHikeBold, PiPersonSimpleRunBold, PiPersonSimpleSkiBold, PiPersonSimpleSnowboardBold, PiPersonSimpleSwimBold, PiPersonSimpleTaiChiBold, PiPersonSimpleThrowBold, PiPersonSimpleWalkBold, PiPerspectiveBold, PiPhoneBold, PiPhoneCallBold, PiPhoneDisconnectBold, PiPhoneIncomingBold, PiPhoneListBold, PiPhoneOutgoingBold, PiPhonePauseBold, PiPhonePlusBold, PiPhoneSlashBold, PiPhoneTransferBold, PiPhoneXBold, PiPhosphorLogoBold, PiPiBold, PiPianoKeysBold, PiPicnicTableBold, PiPictureInPictureBold, PiPiggyBankBold, PiPillBold, PiPingPongBold, PiPintGlassBold, PiPinterestLogoBold, PiPinwheelBold, PiPipeBold, PiPipeWrenchBold, PiPixLogoBold, PiPizzaBold, PiPlaceholderBold, PiPlanetBold, PiPlantBold, PiPlayBold, PiPlayCircleBold, PiPlayPauseBold, PiPlaylistBold, PiPlugBold, PiPlugChargingBold, PiPlugsBold, PiPlugsConnectedBold, PiPlusBold, PiPlusCircleBold, PiPlusMinusBold, PiPlusSquareBold, PiPokerChipBold, PiPoliceCarBold, PiPolygonBold, PiPopcornBold, PiPopsicleBold, PiPottedPlantBold, PiPowerBold, PiPrescriptionBold, PiPresentationBold, PiPresentationChartBold, PiPrinterBold, PiProhibitBold, PiProhibitInsetBold, PiProjectorScreenBold, PiProjectorScreenChartBold, PiPulseBold, PiPushPinBold, PiPushPinSimpleBold, PiPushPinSimpleSlashBold, PiPushPinSlashBold, PiPuzzlePieceBold, PiQrCodeBold, PiQuestionBold, PiQuestionMarkBold, PiQueueBold, PiQuotesBold, PiRabbitBold, PiRacquetBold, PiRadicalBold, PiRadioBold, PiRadioButtonBold, PiRadioactiveBold, PiRainbowBold, PiRainbowCloudBold, PiRankingBold, PiReadCvLogoBold, PiReceiptBold, PiReceiptXBold, PiRecordBold, PiRectangleBold, PiRectangleDashedBold, PiRecycleBold, PiRedditLogoBold, PiRepeatBold, PiRepeatOnceBold, PiReplitLogoBold, PiResizeBold, PiRewindBold, PiRewindCircleBold, PiRoadHorizonBold, PiRobotBold, PiRocketBold, PiRocketLaunchBold, PiRowsBold, PiRowsPlusBottomBold, PiRowsPlusTopBold, PiRssBold, PiRssSimpleBold, PiRugBold, PiRulerBold, PiSailboatBold, PiScalesBold, PiScanBold, PiScanSmileyBold, PiScissorsBold, PiScooterBold, PiScreencastBold, PiScrewdriverBold, PiScribbleBold, PiScribbleLoopBold, PiScrollBold, PiSealBold, PiSealCheckBold, PiSealPercentBold, PiSealQuestionBold, PiSealWarningBold, PiSeatBold, PiSeatbeltBold, PiSecurityCameraBold, PiSelectionAllBold, PiSelectionBackgroundBold, PiSelectionBold, PiSelectionForegroundBold, PiSelectionInverseBold, PiSelectionPlusBold, PiSelectionSlashBold, PiShapesBold, PiShareBold, PiShareFatBold, PiShareNetworkBold, PiShieldBold, PiShieldCheckBold, PiShieldCheckeredBold, PiShieldChevronBold, PiShieldPlusBold, PiShieldSlashBold, PiShieldStarBold, PiShieldWarningBold, PiShippingContainerBold, PiShirtFoldedBold, PiShootingStarBold, PiShoppingBagBold, PiShoppingBagOpenBold, PiShoppingCartBold, PiShoppingCartSimpleBold, PiShovelBold, PiShowerBold, PiShrimpBold, PiShuffleAngularBold, PiShuffleBold, PiShuffleSimpleBold, PiSidebarBold, PiSidebarSimpleBold, PiSigmaBold, PiSignInBold, PiSignOutBold, PiSignatureBold, PiSignpostBold, PiSimCardBold, PiSirenBold, PiSketchLogoBold, PiSkipBackBold, PiSkipBackCircleBold, PiSkipForwardBold, PiSkipForwardCircleBold, PiSkullBold, PiSkypeLogoBold, PiSlackLogoBold, PiSlidersBold, PiSlidersHorizontalBold, PiSlideshowBold, PiSmileyAngryBold, PiSmileyBlankBold, PiSmileyBold, PiSmileyMehBold, PiSmileyMeltingBold, PiSmileyNervousBold, PiSmileySadBold, PiSmileyStickerBold, PiSmileyWinkBold, PiSmileyXEyesBold, PiSnapchatLogoBold, PiSneakerBold, PiSneakerMoveBold, PiSnowflakeBold, PiSoccerBallBold, PiSockBold, PiSolarPanelBold, PiSolarRoofBold, PiSortAscendingBold, PiSortDescendingBold, PiSoundcloudLogoBold, PiSpadeBold, PiSparkleBold, PiSpeakerHifiBold, PiSpeakerHighBold, PiSpeakerLowBold, PiSpeakerNoneBold, PiSpeakerSimpleHighBold, PiSpeakerSimpleLowBold, PiSpeakerSimpleNoneBold, PiSpeakerSimpleSlashBold, PiSpeakerSimpleXBold, PiSpeakerSlashBold, PiSpeakerXBold, PiSpeedometerBold, PiSphereBold, PiSpinnerBallBold, PiSpinnerBold, PiSpinnerGapBold, PiSpiralBold, PiSplitHorizontalBold, PiSplitVerticalBold, PiSpotifyLogoBold, PiSprayBottleBold, PiSquareBold, PiSquareHalfBold, PiSquareHalfBottomBold, PiSquareLogoBold, PiSquareSplitHorizontalBold, PiSquareSplitVerticalBold, PiSquaresFourBold, PiStackBold, PiStackMinusBold, PiStackOverflowLogoBold, PiStackPlusBold, PiStackSimpleBold, PiStairsBold, PiStampBold, PiStandardDefinitionBold, PiStarAndCrescentBold, PiStarBold, PiStarFourBold, PiStarHalfBold, PiStarOfDavidBold, PiSteamLogoBold, PiSteeringWheelBold, PiStepsBold, PiStethoscopeBold, PiStickerBold, PiStoolBold, PiStopBold, PiStopCircleBold, PiStorefrontBold, PiStrategyBold, PiStripeLogoBold, PiStudentBold, PiSubsetOfBold, PiSubsetProperOfBold, PiSubtitlesBold, PiSubtitlesSlashBold, PiSubtractBold, PiSubtractSquareBold, PiSubwayBold, PiSuitcaseBold, PiSuitcaseRollingBold, PiSuitcaseSimpleBold, PiSunBold, PiSunDimBold, PiSunHorizonBold, PiSunglassesBold, PiSupersetOfBold, PiSupersetProperOfBold, PiSwapBold, PiSwatchesBold, PiSwimmingPoolBold, PiSwordBold, PiSynagogueBold, PiSyringeBold, PiTShirtBold, PiTableBold, PiTabsBold, PiTagBold, PiTagChevronBold, PiTagSimpleBold, PiTargetBold, PiTaxiBold, PiTeaBagBold, PiTelegramLogoBold, PiTelevisionBold, PiTelevisionSimpleBold, PiTennisBallBold, PiTentBold, PiTerminalBold, PiTerminalWindowBold, PiTestTubeBold, PiTextAUnderlineBold, PiTextAaBold, PiTextAlignCenterBold, PiTextAlignJustifyBold, PiTextAlignLeftBold, PiTextAlignRightBold, PiTextBBold, PiTextColumnsBold, PiTextHBold, PiTextHFiveBold, PiTextHFourBold, PiTextHOneBold, PiTextHSixBold, PiTextHThreeBold, PiTextHTwoBold, PiTextIndentBold, PiTextItalicBold, PiTextOutdentBold, PiTextStrikethroughBold, PiTextSubscriptBold, PiTextSuperscriptBold, PiTextTBold, PiTextTSlashBold, PiTextUnderlineBold, PiTextboxBold, PiThermometerBold, PiThermometerColdBold, PiThermometerHotBold, PiThermometerSimpleBold, PiThreadsLogoBold, PiThreeDBold, PiThumbsDownBold, PiThumbsUpBold, PiTicketBold, PiTidalLogoBold, PiTiktokLogoBold, PiTildeBold, PiTimerBold, PiTipJarBold, PiTipiBold, PiTireBold, PiToggleLeftBold, PiToggleRightBold, PiToiletBold, PiToiletPaperBold, PiToolboxBold, PiToothBold, PiTornadoBold, PiToteBold, PiToteSimpleBold, PiTowelBold, PiTractorBold, PiTrademarkBold, PiTrademarkRegisteredBold, PiTrafficConeBold, PiTrafficSignBold, PiTrafficSignalBold, PiTrainBold, PiTrainRegionalBold, PiTrainSimpleBold, PiTramBold, PiTranslateBold, PiTrashBold, PiTrashSimpleBold, PiTrayArrowDownBold, PiTrayArrowUpBold, PiTrayBold, PiTreasureChestBold, PiTreeBold, PiTreeEvergreenBold, PiTreePalmBold, PiTreeStructureBold, PiTreeViewBold, PiTrendDownBold, PiTrendUpBold, PiTriangleBold, PiTriangleDashedBold, PiTrolleyBold, PiTrolleySuitcaseBold, PiTrophyBold, PiTruckBold, PiTruckTrailerBold, PiTumblrLogoBold, PiTwitchLogoBold, PiTwitterLogoBold, PiUmbrellaBold, PiUmbrellaSimpleBold, PiUnionBold, PiUniteBold, PiUniteSquareBold, PiUploadBold, PiUploadSimpleBold, PiUsbBold, PiUserBold, PiUserCheckBold, PiUserCircleBold, PiUserCircleCheckBold, PiUserCircleDashedBold, PiUserCircleGearBold, PiUserCircleMinusBold, PiUserCirclePlusBold, PiUserFocusBold, PiUserGearBold, PiUserListBold, PiUserMinusBold, PiUserPlusBold, PiUserRectangleBold, PiUserSoundBold, PiUserSquareBold, PiUserSwitchBold, PiUsersBold, PiUsersFourBold, PiUsersThreeBold, PiVanBold, PiVaultBold, PiVectorThreeBold, PiVectorTwoBold, PiVibrateBold, PiVideoBold, PiVideoCameraBold, PiVideoCameraSlashBold, PiVideoConferenceBold, PiVignetteBold, PiVinylRecordBold, PiVirtualRealityBold, PiVirusBold, PiVisorBold, PiVoicemailBold, PiVolleyballBold, PiWallBold, PiWalletBold, PiWarehouseBold, PiWarningBold, PiWarningCircleBold, PiWarningDiamondBold, PiWarningOctagonBold, PiWashingMachineBold, PiWatchBold, PiWaveSawtoothBold, PiWaveSineBold, PiWaveSquareBold, PiWaveTriangleBold, PiWaveformBold, PiWaveformSlashBold, PiWavesBold, PiWebcamBold, PiWebcamSlashBold, PiWebhooksLogoBold, PiWechatLogoBold, PiWhatsappLogoBold, PiWheelchairBold, PiWheelchairMotionBold, PiWifiHighBold, PiWifiLowBold, PiWifiMediumBold, PiWifiNoneBold, PiWifiSlashBold, PiWifiXBold, PiWindBold, PiWindmillBold, PiWindowsLogoBold, PiWineBold, PiWrenchBold, PiXBold, PiXCircleBold, PiXLogoBold, PiXSquareBold, PiYarnBold, PiYinYangBold, PiYoutubeLogoBold, PiAcornDuotone, PiAddressBookDuotone, PiAddressBookTabsDuotone, PiAirTrafficControlDuotone, PiAirplaneDuotone, PiAirplaneInFlightDuotone, PiAirplaneLandingDuotone, PiAirplaneTakeoffDuotone, PiAirplaneTaxiingDuotone, PiAirplaneTiltDuotone, PiAirplayDuotone, PiAlarmDuotone, PiAlienDuotone, PiAlignBottomDuotone, PiAlignBottomSimpleDuotone, PiAlignCenterHorizontalDuotone, PiAlignCenterHorizontalSimpleDuotone, PiAlignCenterVerticalDuotone, PiAlignCenterVerticalSimpleDuotone, PiAlignLeftDuotone, PiAlignLeftSimpleDuotone, PiAlignRightDuotone, PiAlignRightSimpleDuotone, PiAlignTopDuotone, PiAlignTopSimpleDuotone, PiAmazonLogoDuotone, PiAmbulanceDuotone, PiAnchorDuotone, PiAnchorSimpleDuotone, PiAndroidLogoDuotone, PiAngleDuotone, PiAngularLogoDuotone, PiApertureDuotone, PiAppStoreLogoDuotone, PiAppWindowDuotone, PiAppleLogoDuotone, PiApplePodcastsLogoDuotone, PiApproximateEqualsDuotone, PiArchiveDuotone, PiArmchairDuotone, PiArrowArcLeftDuotone, PiArrowArcRightDuotone, PiArrowBendDoubleUpLeftDuotone, PiArrowBendDoubleUpRightDuotone, PiArrowBendDownLeftDuotone, PiArrowBendDownRightDuotone, PiArrowBendLeftDownDuotone, PiArrowBendLeftUpDuotone, PiArrowBendRightDownDuotone, PiArrowBendRightUpDuotone, PiArrowBendUpLeftDuotone, PiArrowBendUpRightDuotone, PiArrowCircleDownDuotone, PiArrowCircleDownLeftDuotone, PiArrowCircleDownRightDuotone, PiArrowCircleLeftDuotone, PiArrowCircleRightDuotone, PiArrowCircleUpDuotone, PiArrowCircleUpLeftDuotone, PiArrowCircleUpRightDuotone, PiArrowClockwiseDuotone, PiArrowCounterClockwiseDuotone, PiArrowDownDuotone, PiArrowDownLeftDuotone, PiArrowDownRightDuotone, PiArrowElbowDownLeftDuotone, PiArrowElbowDownRightDuotone, PiArrowElbowLeftDownDuotone, PiArrowElbowLeftDuotone, PiArrowElbowLeftUpDuotone, PiArrowElbowRightDownDuotone, PiArrowElbowRightDuotone, PiArrowElbowRightUpDuotone, PiArrowElbowUpLeftDuotone, PiArrowElbowUpRightDuotone, PiArrowFatDownDuotone, PiArrowFatLeftDuotone, PiArrowFatLineDownDuotone, PiArrowFatLineLeftDuotone, PiArrowFatLineRightDuotone, PiArrowFatLineUpDuotone, PiArrowFatLinesDownDuotone, PiArrowFatLinesLeftDuotone, PiArrowFatLinesRightDuotone, PiArrowFatLinesUpDuotone, PiArrowFatRightDuotone, PiArrowFatUpDuotone, PiArrowLeftDuotone, PiArrowLineDownDuotone, PiArrowLineDownLeftDuotone, PiArrowLineDownRightDuotone, PiArrowLineLeftDuotone, PiArrowLineRightDuotone, PiArrowLineUpDuotone, PiArrowLineUpLeftDuotone, PiArrowLineUpRightDuotone, PiArrowRightDuotone, PiArrowSquareDownDuotone, PiArrowSquareDownLeftDuotone, PiArrowSquareDownRightDuotone, PiArrowSquareInDuotone, PiArrowSquareLeftDuotone, PiArrowSquareOutDuotone, PiArrowSquareRightDuotone, PiArrowSquareUpDuotone, PiArrowSquareUpLeftDuotone, PiArrowSquareUpRightDuotone, PiArrowUDownLeftDuotone, PiArrowUDownRightDuotone, PiArrowULeftDownDuotone, PiArrowULeftUpDuotone, PiArrowURightDownDuotone, PiArrowURightUpDuotone, PiArrowUUpLeftDuotone, PiArrowUUpRightDuotone, PiArrowUpDuotone, PiArrowUpLeftDuotone, PiArrowUpRightDuotone, PiArrowsClockwiseDuotone, PiArrowsCounterClockwiseDuotone, PiArrowsDownUpDuotone, PiArrowsHorizontalDuotone, PiArrowsInCardinalDuotone, PiArrowsInDuotone, PiArrowsInLineHorizontalDuotone, PiArrowsInLineVerticalDuotone, PiArrowsInSimpleDuotone, PiArrowsLeftRightDuotone, PiArrowsMergeDuotone, PiArrowsOutCardinalDuotone, PiArrowsOutDuotone, PiArrowsOutLineHorizontalDuotone, PiArrowsOutLineVerticalDuotone, PiArrowsOutSimpleDuotone, PiArrowsSplitDuotone, PiArrowsVerticalDuotone, PiArticleDuotone, PiArticleMediumDuotone, PiArticleNyTimesDuotone, PiAsclepiusDuotone, PiAsteriskDuotone, PiAsteriskSimpleDuotone, PiAtDuotone, PiAtomDuotone, PiAvocadoDuotone, PiAxeDuotone, PiBabyCarriageDuotone, PiBabyDuotone, PiBackpackDuotone, PiBackspaceDuotone, PiBagDuotone, PiBagSimpleDuotone, PiBalloonDuotone, PiBandaidsDuotone, PiBankDuotone, PiBarbellDuotone, PiBarcodeDuotone, PiBarnDuotone, PiBarricadeDuotone, PiBaseballCapDuotone, PiBaseballDuotone, PiBaseballHelmetDuotone, PiBasketDuotone, PiBasketballDuotone, PiBathtubDuotone, PiBatteryChargingDuotone, PiBatteryChargingVerticalDuotone, PiBatteryEmptyDuotone, PiBatteryFullDuotone, PiBatteryHighDuotone, PiBatteryLowDuotone, PiBatteryMediumDuotone, PiBatteryPlusDuotone, PiBatteryPlusVerticalDuotone, PiBatteryVerticalEmptyDuotone, PiBatteryVerticalFullDuotone, PiBatteryVerticalHighDuotone, PiBatteryVerticalLowDuotone, PiBatteryVerticalMediumDuotone, PiBatteryWarningDuotone, PiBatteryWarningVerticalDuotone, PiBeachBallDuotone, PiBeanieDuotone, PiBedDuotone, PiBeerBottleDuotone, PiBeerSteinDuotone, PiBehanceLogoDuotone, PiBellDuotone, PiBellRingingDuotone, PiBellSimpleDuotone, PiBellSimpleRingingDuotone, PiBellSimpleSlashDuotone, PiBellSimpleZDuotone, PiBellSlashDuotone, PiBellZDuotone, PiBeltDuotone, PiBezierCurveDuotone, PiBicycleDuotone, PiBinaryDuotone, PiBinocularsDuotone, PiBiohazardDuotone, PiBirdDuotone, PiBlueprintDuotone, PiBluetoothConnectedDuotone, PiBluetoothDuotone, PiBluetoothSlashDuotone, PiBluetoothXDuotone, PiBoatDuotone, PiBombDuotone, PiBoneDuotone, PiBookBookmarkDuotone, PiBookDuotone, PiBookOpenDuotone, PiBookOpenTextDuotone, PiBookOpenUserDuotone, PiBookmarkDuotone, PiBookmarkSimpleDuotone, PiBookmarksDuotone, PiBookmarksSimpleDuotone, PiBooksDuotone, PiBootDuotone, PiBoulesDuotone, PiBoundingBoxDuotone, PiBowlFoodDuotone, PiBowlSteamDuotone, PiBowlingBallDuotone, PiBoxArrowDownDuotone, PiBoxArrowUpDuotone, PiBoxingGloveDuotone, PiBracketsAngleDuotone, PiBracketsCurlyDuotone, PiBracketsRoundDuotone, PiBracketsSquareDuotone, PiBrainDuotone, PiBrandyDuotone, PiBreadDuotone, PiBridgeDuotone, PiBriefcaseDuotone, PiBriefcaseMetalDuotone, PiBroadcastDuotone, PiBroomDuotone, PiBrowserDuotone, PiBrowsersDuotone, PiBugBeetleDuotone, PiBugDroidDuotone, PiBugDuotone, PiBuildingApartmentDuotone, PiBuildingDuotone, PiBuildingOfficeDuotone, PiBuildingsDuotone, PiBulldozerDuotone, PiBusDuotone, PiButterflyDuotone, PiCableCarDuotone, PiCactusDuotone, PiCakeDuotone, PiCalculatorDuotone, PiCalendarBlankDuotone, PiCalendarCheckDuotone, PiCalendarDotDuotone, PiCalendarDotsDuotone, PiCalendarDuotone, PiCalendarHeartDuotone, PiCalendarMinusDuotone, PiCalendarPlusDuotone, PiCalendarSlashDuotone, PiCalendarStarDuotone, PiCalendarXDuotone, PiCallBellDuotone, PiCameraDuotone, PiCameraPlusDuotone, PiCameraRotateDuotone, PiCameraSlashDuotone, PiCampfireDuotone, PiCarBatteryDuotone, PiCarDuotone, PiCarProfileDuotone, PiCarSimpleDuotone, PiCardholderDuotone, PiCardsDuotone, PiCardsThreeDuotone, PiCaretCircleDoubleDownDuotone, PiCaretCircleDoubleLeftDuotone, PiCaretCircleDoubleRightDuotone, PiCaretCircleDoubleUpDuotone, PiCaretCircleDownDuotone, PiCaretCircleLeftDuotone, PiCaretCircleRightDuotone, PiCaretCircleUpDownDuotone, PiCaretCircleUpDuotone, PiCaretDoubleDownDuotone, PiCaretDoubleLeftDuotone, PiCaretDoubleRightDuotone, PiCaretDoubleUpDuotone, PiCaretDownDuotone, PiCaretLeftDuotone, PiCaretLineDownDuotone, PiCaretLineLeftDuotone, PiCaretLineRightDuotone, PiCaretLineUpDuotone, PiCaretRightDuotone, PiCaretUpDownDuotone, PiCaretUpDuotone, PiCarrotDuotone, PiCashRegisterDuotone, PiCassetteTapeDuotone, PiCastleTurretDuotone, PiCatDuotone, PiCellSignalFullDuotone, PiCellSignalHighDuotone, PiCellSignalLowDuotone, PiCellSignalMediumDuotone, PiCellSignalNoneDuotone, PiCellSignalSlashDuotone, PiCellSignalXDuotone, PiCellTowerDuotone, PiCertificateDuotone, PiChairDuotone, PiChalkboardDuotone, PiChalkboardSimpleDuotone, PiChalkboardTeacherDuotone, PiChampagneDuotone, PiChargingStationDuotone, PiChartBarDuotone, PiChartBarHorizontalDuotone, PiChartDonutDuotone, PiChartLineDownDuotone, PiChartLineDuotone, PiChartLineUpDuotone, PiChartPieDuotone, PiChartPieSliceDuotone, PiChartPolarDuotone, PiChartScatterDuotone, PiChatCenteredDotsDuotone, PiChatCenteredDuotone, PiChatCenteredSlashDuotone, PiChatCenteredTextDuotone, PiChatCircleDotsDuotone, PiChatCircleDuotone, PiChatCircleSlashDuotone, PiChatCircleTextDuotone, PiChatDotsDuotone, PiChatDuotone, PiChatSlashDuotone, PiChatTeardropDotsDuotone, PiChatTeardropDuotone, PiChatTeardropSlashDuotone, PiChatTeardropTextDuotone, PiChatTextDuotone, PiChatsCircleDuotone, PiChatsDuotone, PiChatsTeardropDuotone, PiCheckCircleDuotone, PiCheckDuotone, PiCheckFatDuotone, PiCheckSquareDuotone, PiCheckSquareOffsetDuotone, PiCheckerboardDuotone, PiChecksDuotone, PiCheersDuotone, PiCheeseDuotone, PiChefHatDuotone, PiCherriesDuotone, PiChurchDuotone, PiCigaretteDuotone, PiCigaretteSlashDuotone, PiCircleDashedDuotone, PiCircleDuotone, PiCircleHalfDuotone, PiCircleHalfTiltDuotone, PiCircleNotchDuotone, PiCirclesFourDuotone, PiCirclesThreeDuotone, PiCirclesThreePlusDuotone, PiCircuitryDuotone, PiCityDuotone, PiClipboardDuotone, PiClipboardTextDuotone, PiClockAfternoonDuotone, PiClockClockwiseDuotone, PiClockCountdownDuotone, PiClockCounterClockwiseDuotone, PiClockDuotone, PiClockUserDuotone, PiClosedCaptioningDuotone, PiCloudArrowDownDuotone, PiCloudArrowUpDuotone, PiCloudCheckDuotone, PiCloudDuotone, PiCloudFogDuotone, PiCloudLightningDuotone, PiCloudMoonDuotone, PiCloudRainDuotone, PiCloudSlashDuotone, PiCloudSnowDuotone, PiCloudSunDuotone, PiCloudWarningDuotone, PiCloudXDuotone, PiCloverDuotone, PiClubDuotone, PiCoatHangerDuotone, PiCodaLogoDuotone, PiCodeBlockDuotone, PiCodeDuotone, PiCodeSimpleDuotone, PiCodepenLogoDuotone, PiCodesandboxLogoDuotone, PiCoffeeBeanDuotone, PiCoffeeDuotone, PiCoinDuotone, PiCoinVerticalDuotone, PiCoinsDuotone, PiColumnsDuotone, PiColumnsPlusLeftDuotone, PiColumnsPlusRightDuotone, PiCommandDuotone, PiCompassDuotone, PiCompassRoseDuotone, PiCompassToolDuotone, PiComputerTowerDuotone, PiConfettiDuotone, PiContactlessPaymentDuotone, PiControlDuotone, PiCookieDuotone, PiCookingPotDuotone, PiCopyDuotone, PiCopySimpleDuotone, PiCopyleftDuotone, PiCopyrightDuotone, PiCornersInDuotone, PiCornersOutDuotone, PiCouchDuotone, PiCourtBasketballDuotone, PiCowDuotone, PiCowboyHatDuotone, PiCpuDuotone, PiCraneDuotone, PiCraneTowerDuotone, PiCreditCardDuotone, PiCricketDuotone, PiCropDuotone, PiCrossDuotone, PiCrosshairDuotone, PiCrosshairSimpleDuotone, PiCrownCrossDuotone, PiCrownDuotone, PiCrownSimpleDuotone, PiCubeDuotone, PiCubeFocusDuotone, PiCubeTransparentDuotone, PiCurrencyBtcDuotone, PiCurrencyCircleDollarDuotone, PiCurrencyCnyDuotone, PiCurrencyDollarDuotone, PiCurrencyDollarSimpleDuotone, PiCurrencyEthDuotone, PiCurrencyEurDuotone, PiCurrencyGbpDuotone, PiCurrencyInrDuotone, PiCurrencyJpyDuotone, PiCurrencyKrwDuotone, PiCurrencyKztDuotone, PiCurrencyNgnDuotone, PiCurrencyRubDuotone, PiCursorClickDuotone, PiCursorDuotone, PiCursorTextDuotone, PiCylinderDuotone, PiDatabaseDuotone, PiDeskDuotone, PiDesktopDuotone, PiDesktopTowerDuotone, PiDetectiveDuotone, PiDevToLogoDuotone, PiDeviceMobileCameraDuotone, PiDeviceMobileDuotone, PiDeviceMobileSlashDuotone, PiDeviceMobileSpeakerDuotone, PiDeviceRotateDuotone, PiDeviceTabletCameraDuotone, PiDeviceTabletDuotone, PiDeviceTabletSpeakerDuotone, PiDevicesDuotone, PiDiamondDuotone, PiDiamondsFourDuotone, PiDiceFiveDuotone, PiDiceFourDuotone, PiDiceOneDuotone;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "pi:PiPackageBold": return [3 /*break*/, 1];
                        case "pi:PiPaintBrushBold": return [3 /*break*/, 3];
                        case "pi:PiPaintBrushBroadBold": return [3 /*break*/, 5];
                        case "pi:PiPaintBrushHouseholdBold": return [3 /*break*/, 7];
                        case "pi:PiPaintBucketBold": return [3 /*break*/, 9];
                        case "pi:PiPaintRollerBold": return [3 /*break*/, 11];
                        case "pi:PiPaletteBold": return [3 /*break*/, 13];
                        case "pi:PiPanoramaBold": return [3 /*break*/, 15];
                        case "pi:PiPantsBold": return [3 /*break*/, 17];
                        case "pi:PiPaperPlaneBold": return [3 /*break*/, 19];
                        case "pi:PiPaperPlaneRightBold": return [3 /*break*/, 21];
                        case "pi:PiPaperPlaneTiltBold": return [3 /*break*/, 23];
                        case "pi:PiPaperclipBold": return [3 /*break*/, 25];
                        case "pi:PiPaperclipHorizontalBold": return [3 /*break*/, 27];
                        case "pi:PiParachuteBold": return [3 /*break*/, 29];
                        case "pi:PiParagraphBold": return [3 /*break*/, 31];
                        case "pi:PiParallelogramBold": return [3 /*break*/, 33];
                        case "pi:PiParkBold": return [3 /*break*/, 35];
                        case "pi:PiPasswordBold": return [3 /*break*/, 37];
                        case "pi:PiPathBold": return [3 /*break*/, 39];
                        case "pi:PiPatreonLogoBold": return [3 /*break*/, 41];
                        case "pi:PiPauseBold": return [3 /*break*/, 43];
                        case "pi:PiPauseCircleBold": return [3 /*break*/, 45];
                        case "pi:PiPawPrintBold": return [3 /*break*/, 47];
                        case "pi:PiPaypalLogoBold": return [3 /*break*/, 49];
                        case "pi:PiPeaceBold": return [3 /*break*/, 51];
                        case "pi:PiPenBold": return [3 /*break*/, 53];
                        case "pi:PiPenNibBold": return [3 /*break*/, 55];
                        case "pi:PiPenNibStraightBold": return [3 /*break*/, 57];
                        case "pi:PiPencilBold": return [3 /*break*/, 59];
                        case "pi:PiPencilCircleBold": return [3 /*break*/, 61];
                        case "pi:PiPencilLineBold": return [3 /*break*/, 63];
                        case "pi:PiPencilRulerBold": return [3 /*break*/, 65];
                        case "pi:PiPencilSimpleBold": return [3 /*break*/, 67];
                        case "pi:PiPencilSimpleLineBold": return [3 /*break*/, 69];
                        case "pi:PiPencilSimpleSlashBold": return [3 /*break*/, 71];
                        case "pi:PiPencilSlashBold": return [3 /*break*/, 73];
                        case "pi:PiPentagonBold": return [3 /*break*/, 75];
                        case "pi:PiPentagramBold": return [3 /*break*/, 77];
                        case "pi:PiPepperBold": return [3 /*break*/, 79];
                        case "pi:PiPercentBold": return [3 /*break*/, 81];
                        case "pi:PiPersonArmsSpreadBold": return [3 /*break*/, 83];
                        case "pi:PiPersonBold": return [3 /*break*/, 85];
                        case "pi:PiPersonSimpleBikeBold": return [3 /*break*/, 87];
                        case "pi:PiPersonSimpleBold": return [3 /*break*/, 89];
                        case "pi:PiPersonSimpleCircleBold": return [3 /*break*/, 91];
                        case "pi:PiPersonSimpleHikeBold": return [3 /*break*/, 93];
                        case "pi:PiPersonSimpleRunBold": return [3 /*break*/, 95];
                        case "pi:PiPersonSimpleSkiBold": return [3 /*break*/, 97];
                        case "pi:PiPersonSimpleSnowboardBold": return [3 /*break*/, 99];
                        case "pi:PiPersonSimpleSwimBold": return [3 /*break*/, 101];
                        case "pi:PiPersonSimpleTaiChiBold": return [3 /*break*/, 103];
                        case "pi:PiPersonSimpleThrowBold": return [3 /*break*/, 105];
                        case "pi:PiPersonSimpleWalkBold": return [3 /*break*/, 107];
                        case "pi:PiPerspectiveBold": return [3 /*break*/, 109];
                        case "pi:PiPhoneBold": return [3 /*break*/, 111];
                        case "pi:PiPhoneCallBold": return [3 /*break*/, 113];
                        case "pi:PiPhoneDisconnectBold": return [3 /*break*/, 115];
                        case "pi:PiPhoneIncomingBold": return [3 /*break*/, 117];
                        case "pi:PiPhoneListBold": return [3 /*break*/, 119];
                        case "pi:PiPhoneOutgoingBold": return [3 /*break*/, 121];
                        case "pi:PiPhonePauseBold": return [3 /*break*/, 123];
                        case "pi:PiPhonePlusBold": return [3 /*break*/, 125];
                        case "pi:PiPhoneSlashBold": return [3 /*break*/, 127];
                        case "pi:PiPhoneTransferBold": return [3 /*break*/, 129];
                        case "pi:PiPhoneXBold": return [3 /*break*/, 131];
                        case "pi:PiPhosphorLogoBold": return [3 /*break*/, 133];
                        case "pi:PiPiBold": return [3 /*break*/, 135];
                        case "pi:PiPianoKeysBold": return [3 /*break*/, 137];
                        case "pi:PiPicnicTableBold": return [3 /*break*/, 139];
                        case "pi:PiPictureInPictureBold": return [3 /*break*/, 141];
                        case "pi:PiPiggyBankBold": return [3 /*break*/, 143];
                        case "pi:PiPillBold": return [3 /*break*/, 145];
                        case "pi:PiPingPongBold": return [3 /*break*/, 147];
                        case "pi:PiPintGlassBold": return [3 /*break*/, 149];
                        case "pi:PiPinterestLogoBold": return [3 /*break*/, 151];
                        case "pi:PiPinwheelBold": return [3 /*break*/, 153];
                        case "pi:PiPipeBold": return [3 /*break*/, 155];
                        case "pi:PiPipeWrenchBold": return [3 /*break*/, 157];
                        case "pi:PiPixLogoBold": return [3 /*break*/, 159];
                        case "pi:PiPizzaBold": return [3 /*break*/, 161];
                        case "pi:PiPlaceholderBold": return [3 /*break*/, 163];
                        case "pi:PiPlanetBold": return [3 /*break*/, 165];
                        case "pi:PiPlantBold": return [3 /*break*/, 167];
                        case "pi:PiPlayBold": return [3 /*break*/, 169];
                        case "pi:PiPlayCircleBold": return [3 /*break*/, 171];
                        case "pi:PiPlayPauseBold": return [3 /*break*/, 173];
                        case "pi:PiPlaylistBold": return [3 /*break*/, 175];
                        case "pi:PiPlugBold": return [3 /*break*/, 177];
                        case "pi:PiPlugChargingBold": return [3 /*break*/, 179];
                        case "pi:PiPlugsBold": return [3 /*break*/, 181];
                        case "pi:PiPlugsConnectedBold": return [3 /*break*/, 183];
                        case "pi:PiPlusBold": return [3 /*break*/, 185];
                        case "pi:PiPlusCircleBold": return [3 /*break*/, 187];
                        case "pi:PiPlusMinusBold": return [3 /*break*/, 189];
                        case "pi:PiPlusSquareBold": return [3 /*break*/, 191];
                        case "pi:PiPokerChipBold": return [3 /*break*/, 193];
                        case "pi:PiPoliceCarBold": return [3 /*break*/, 195];
                        case "pi:PiPolygonBold": return [3 /*break*/, 197];
                        case "pi:PiPopcornBold": return [3 /*break*/, 199];
                        case "pi:PiPopsicleBold": return [3 /*break*/, 201];
                        case "pi:PiPottedPlantBold": return [3 /*break*/, 203];
                        case "pi:PiPowerBold": return [3 /*break*/, 205];
                        case "pi:PiPrescriptionBold": return [3 /*break*/, 207];
                        case "pi:PiPresentationBold": return [3 /*break*/, 209];
                        case "pi:PiPresentationChartBold": return [3 /*break*/, 211];
                        case "pi:PiPrinterBold": return [3 /*break*/, 213];
                        case "pi:PiProhibitBold": return [3 /*break*/, 215];
                        case "pi:PiProhibitInsetBold": return [3 /*break*/, 217];
                        case "pi:PiProjectorScreenBold": return [3 /*break*/, 219];
                        case "pi:PiProjectorScreenChartBold": return [3 /*break*/, 221];
                        case "pi:PiPulseBold": return [3 /*break*/, 223];
                        case "pi:PiPushPinBold": return [3 /*break*/, 225];
                        case "pi:PiPushPinSimpleBold": return [3 /*break*/, 227];
                        case "pi:PiPushPinSimpleSlashBold": return [3 /*break*/, 229];
                        case "pi:PiPushPinSlashBold": return [3 /*break*/, 231];
                        case "pi:PiPuzzlePieceBold": return [3 /*break*/, 233];
                        case "pi:PiQrCodeBold": return [3 /*break*/, 235];
                        case "pi:PiQuestionBold": return [3 /*break*/, 237];
                        case "pi:PiQuestionMarkBold": return [3 /*break*/, 239];
                        case "pi:PiQueueBold": return [3 /*break*/, 241];
                        case "pi:PiQuotesBold": return [3 /*break*/, 243];
                        case "pi:PiRabbitBold": return [3 /*break*/, 245];
                        case "pi:PiRacquetBold": return [3 /*break*/, 247];
                        case "pi:PiRadicalBold": return [3 /*break*/, 249];
                        case "pi:PiRadioBold": return [3 /*break*/, 251];
                        case "pi:PiRadioButtonBold": return [3 /*break*/, 253];
                        case "pi:PiRadioactiveBold": return [3 /*break*/, 255];
                        case "pi:PiRainbowBold": return [3 /*break*/, 257];
                        case "pi:PiRainbowCloudBold": return [3 /*break*/, 259];
                        case "pi:PiRankingBold": return [3 /*break*/, 261];
                        case "pi:PiReadCvLogoBold": return [3 /*break*/, 263];
                        case "pi:PiReceiptBold": return [3 /*break*/, 265];
                        case "pi:PiReceiptXBold": return [3 /*break*/, 267];
                        case "pi:PiRecordBold": return [3 /*break*/, 269];
                        case "pi:PiRectangleBold": return [3 /*break*/, 271];
                        case "pi:PiRectangleDashedBold": return [3 /*break*/, 273];
                        case "pi:PiRecycleBold": return [3 /*break*/, 275];
                        case "pi:PiRedditLogoBold": return [3 /*break*/, 277];
                        case "pi:PiRepeatBold": return [3 /*break*/, 279];
                        case "pi:PiRepeatOnceBold": return [3 /*break*/, 281];
                        case "pi:PiReplitLogoBold": return [3 /*break*/, 283];
                        case "pi:PiResizeBold": return [3 /*break*/, 285];
                        case "pi:PiRewindBold": return [3 /*break*/, 287];
                        case "pi:PiRewindCircleBold": return [3 /*break*/, 289];
                        case "pi:PiRoadHorizonBold": return [3 /*break*/, 291];
                        case "pi:PiRobotBold": return [3 /*break*/, 293];
                        case "pi:PiRocketBold": return [3 /*break*/, 295];
                        case "pi:PiRocketLaunchBold": return [3 /*break*/, 297];
                        case "pi:PiRowsBold": return [3 /*break*/, 299];
                        case "pi:PiRowsPlusBottomBold": return [3 /*break*/, 301];
                        case "pi:PiRowsPlusTopBold": return [3 /*break*/, 303];
                        case "pi:PiRssBold": return [3 /*break*/, 305];
                        case "pi:PiRssSimpleBold": return [3 /*break*/, 307];
                        case "pi:PiRugBold": return [3 /*break*/, 309];
                        case "pi:PiRulerBold": return [3 /*break*/, 311];
                        case "pi:PiSailboatBold": return [3 /*break*/, 313];
                        case "pi:PiScalesBold": return [3 /*break*/, 315];
                        case "pi:PiScanBold": return [3 /*break*/, 317];
                        case "pi:PiScanSmileyBold": return [3 /*break*/, 319];
                        case "pi:PiScissorsBold": return [3 /*break*/, 321];
                        case "pi:PiScooterBold": return [3 /*break*/, 323];
                        case "pi:PiScreencastBold": return [3 /*break*/, 325];
                        case "pi:PiScrewdriverBold": return [3 /*break*/, 327];
                        case "pi:PiScribbleBold": return [3 /*break*/, 329];
                        case "pi:PiScribbleLoopBold": return [3 /*break*/, 331];
                        case "pi:PiScrollBold": return [3 /*break*/, 333];
                        case "pi:PiSealBold": return [3 /*break*/, 335];
                        case "pi:PiSealCheckBold": return [3 /*break*/, 337];
                        case "pi:PiSealPercentBold": return [3 /*break*/, 339];
                        case "pi:PiSealQuestionBold": return [3 /*break*/, 341];
                        case "pi:PiSealWarningBold": return [3 /*break*/, 343];
                        case "pi:PiSeatBold": return [3 /*break*/, 345];
                        case "pi:PiSeatbeltBold": return [3 /*break*/, 347];
                        case "pi:PiSecurityCameraBold": return [3 /*break*/, 349];
                        case "pi:PiSelectionAllBold": return [3 /*break*/, 351];
                        case "pi:PiSelectionBackgroundBold": return [3 /*break*/, 353];
                        case "pi:PiSelectionBold": return [3 /*break*/, 355];
                        case "pi:PiSelectionForegroundBold": return [3 /*break*/, 357];
                        case "pi:PiSelectionInverseBold": return [3 /*break*/, 359];
                        case "pi:PiSelectionPlusBold": return [3 /*break*/, 361];
                        case "pi:PiSelectionSlashBold": return [3 /*break*/, 363];
                        case "pi:PiShapesBold": return [3 /*break*/, 365];
                        case "pi:PiShareBold": return [3 /*break*/, 367];
                        case "pi:PiShareFatBold": return [3 /*break*/, 369];
                        case "pi:PiShareNetworkBold": return [3 /*break*/, 371];
                        case "pi:PiShieldBold": return [3 /*break*/, 373];
                        case "pi:PiShieldCheckBold": return [3 /*break*/, 375];
                        case "pi:PiShieldCheckeredBold": return [3 /*break*/, 377];
                        case "pi:PiShieldChevronBold": return [3 /*break*/, 379];
                        case "pi:PiShieldPlusBold": return [3 /*break*/, 381];
                        case "pi:PiShieldSlashBold": return [3 /*break*/, 383];
                        case "pi:PiShieldStarBold": return [3 /*break*/, 385];
                        case "pi:PiShieldWarningBold": return [3 /*break*/, 387];
                        case "pi:PiShippingContainerBold": return [3 /*break*/, 389];
                        case "pi:PiShirtFoldedBold": return [3 /*break*/, 391];
                        case "pi:PiShootingStarBold": return [3 /*break*/, 393];
                        case "pi:PiShoppingBagBold": return [3 /*break*/, 395];
                        case "pi:PiShoppingBagOpenBold": return [3 /*break*/, 397];
                        case "pi:PiShoppingCartBold": return [3 /*break*/, 399];
                        case "pi:PiShoppingCartSimpleBold": return [3 /*break*/, 401];
                        case "pi:PiShovelBold": return [3 /*break*/, 403];
                        case "pi:PiShowerBold": return [3 /*break*/, 405];
                        case "pi:PiShrimpBold": return [3 /*break*/, 407];
                        case "pi:PiShuffleAngularBold": return [3 /*break*/, 409];
                        case "pi:PiShuffleBold": return [3 /*break*/, 411];
                        case "pi:PiShuffleSimpleBold": return [3 /*break*/, 413];
                        case "pi:PiSidebarBold": return [3 /*break*/, 415];
                        case "pi:PiSidebarSimpleBold": return [3 /*break*/, 417];
                        case "pi:PiSigmaBold": return [3 /*break*/, 419];
                        case "pi:PiSignInBold": return [3 /*break*/, 421];
                        case "pi:PiSignOutBold": return [3 /*break*/, 423];
                        case "pi:PiSignatureBold": return [3 /*break*/, 425];
                        case "pi:PiSignpostBold": return [3 /*break*/, 427];
                        case "pi:PiSimCardBold": return [3 /*break*/, 429];
                        case "pi:PiSirenBold": return [3 /*break*/, 431];
                        case "pi:PiSketchLogoBold": return [3 /*break*/, 433];
                        case "pi:PiSkipBackBold": return [3 /*break*/, 435];
                        case "pi:PiSkipBackCircleBold": return [3 /*break*/, 437];
                        case "pi:PiSkipForwardBold": return [3 /*break*/, 439];
                        case "pi:PiSkipForwardCircleBold": return [3 /*break*/, 441];
                        case "pi:PiSkullBold": return [3 /*break*/, 443];
                        case "pi:PiSkypeLogoBold": return [3 /*break*/, 445];
                        case "pi:PiSlackLogoBold": return [3 /*break*/, 447];
                        case "pi:PiSlidersBold": return [3 /*break*/, 449];
                        case "pi:PiSlidersHorizontalBold": return [3 /*break*/, 451];
                        case "pi:PiSlideshowBold": return [3 /*break*/, 453];
                        case "pi:PiSmileyAngryBold": return [3 /*break*/, 455];
                        case "pi:PiSmileyBlankBold": return [3 /*break*/, 457];
                        case "pi:PiSmileyBold": return [3 /*break*/, 459];
                        case "pi:PiSmileyMehBold": return [3 /*break*/, 461];
                        case "pi:PiSmileyMeltingBold": return [3 /*break*/, 463];
                        case "pi:PiSmileyNervousBold": return [3 /*break*/, 465];
                        case "pi:PiSmileySadBold": return [3 /*break*/, 467];
                        case "pi:PiSmileyStickerBold": return [3 /*break*/, 469];
                        case "pi:PiSmileyWinkBold": return [3 /*break*/, 471];
                        case "pi:PiSmileyXEyesBold": return [3 /*break*/, 473];
                        case "pi:PiSnapchatLogoBold": return [3 /*break*/, 475];
                        case "pi:PiSneakerBold": return [3 /*break*/, 477];
                        case "pi:PiSneakerMoveBold": return [3 /*break*/, 479];
                        case "pi:PiSnowflakeBold": return [3 /*break*/, 481];
                        case "pi:PiSoccerBallBold": return [3 /*break*/, 483];
                        case "pi:PiSockBold": return [3 /*break*/, 485];
                        case "pi:PiSolarPanelBold": return [3 /*break*/, 487];
                        case "pi:PiSolarRoofBold": return [3 /*break*/, 489];
                        case "pi:PiSortAscendingBold": return [3 /*break*/, 491];
                        case "pi:PiSortDescendingBold": return [3 /*break*/, 493];
                        case "pi:PiSoundcloudLogoBold": return [3 /*break*/, 495];
                        case "pi:PiSpadeBold": return [3 /*break*/, 497];
                        case "pi:PiSparkleBold": return [3 /*break*/, 499];
                        case "pi:PiSpeakerHifiBold": return [3 /*break*/, 501];
                        case "pi:PiSpeakerHighBold": return [3 /*break*/, 503];
                        case "pi:PiSpeakerLowBold": return [3 /*break*/, 505];
                        case "pi:PiSpeakerNoneBold": return [3 /*break*/, 507];
                        case "pi:PiSpeakerSimpleHighBold": return [3 /*break*/, 509];
                        case "pi:PiSpeakerSimpleLowBold": return [3 /*break*/, 511];
                        case "pi:PiSpeakerSimpleNoneBold": return [3 /*break*/, 513];
                        case "pi:PiSpeakerSimpleSlashBold": return [3 /*break*/, 515];
                        case "pi:PiSpeakerSimpleXBold": return [3 /*break*/, 517];
                        case "pi:PiSpeakerSlashBold": return [3 /*break*/, 519];
                        case "pi:PiSpeakerXBold": return [3 /*break*/, 521];
                        case "pi:PiSpeedometerBold": return [3 /*break*/, 523];
                        case "pi:PiSphereBold": return [3 /*break*/, 525];
                        case "pi:PiSpinnerBallBold": return [3 /*break*/, 527];
                        case "pi:PiSpinnerBold": return [3 /*break*/, 529];
                        case "pi:PiSpinnerGapBold": return [3 /*break*/, 531];
                        case "pi:PiSpiralBold": return [3 /*break*/, 533];
                        case "pi:PiSplitHorizontalBold": return [3 /*break*/, 535];
                        case "pi:PiSplitVerticalBold": return [3 /*break*/, 537];
                        case "pi:PiSpotifyLogoBold": return [3 /*break*/, 539];
                        case "pi:PiSprayBottleBold": return [3 /*break*/, 541];
                        case "pi:PiSquareBold": return [3 /*break*/, 543];
                        case "pi:PiSquareHalfBold": return [3 /*break*/, 545];
                        case "pi:PiSquareHalfBottomBold": return [3 /*break*/, 547];
                        case "pi:PiSquareLogoBold": return [3 /*break*/, 549];
                        case "pi:PiSquareSplitHorizontalBold": return [3 /*break*/, 551];
                        case "pi:PiSquareSplitVerticalBold": return [3 /*break*/, 553];
                        case "pi:PiSquaresFourBold": return [3 /*break*/, 555];
                        case "pi:PiStackBold": return [3 /*break*/, 557];
                        case "pi:PiStackMinusBold": return [3 /*break*/, 559];
                        case "pi:PiStackOverflowLogoBold": return [3 /*break*/, 561];
                        case "pi:PiStackPlusBold": return [3 /*break*/, 563];
                        case "pi:PiStackSimpleBold": return [3 /*break*/, 565];
                        case "pi:PiStairsBold": return [3 /*break*/, 567];
                        case "pi:PiStampBold": return [3 /*break*/, 569];
                        case "pi:PiStandardDefinitionBold": return [3 /*break*/, 571];
                        case "pi:PiStarAndCrescentBold": return [3 /*break*/, 573];
                        case "pi:PiStarBold": return [3 /*break*/, 575];
                        case "pi:PiStarFourBold": return [3 /*break*/, 577];
                        case "pi:PiStarHalfBold": return [3 /*break*/, 579];
                        case "pi:PiStarOfDavidBold": return [3 /*break*/, 581];
                        case "pi:PiSteamLogoBold": return [3 /*break*/, 583];
                        case "pi:PiSteeringWheelBold": return [3 /*break*/, 585];
                        case "pi:PiStepsBold": return [3 /*break*/, 587];
                        case "pi:PiStethoscopeBold": return [3 /*break*/, 589];
                        case "pi:PiStickerBold": return [3 /*break*/, 591];
                        case "pi:PiStoolBold": return [3 /*break*/, 593];
                        case "pi:PiStopBold": return [3 /*break*/, 595];
                        case "pi:PiStopCircleBold": return [3 /*break*/, 597];
                        case "pi:PiStorefrontBold": return [3 /*break*/, 599];
                        case "pi:PiStrategyBold": return [3 /*break*/, 601];
                        case "pi:PiStripeLogoBold": return [3 /*break*/, 603];
                        case "pi:PiStudentBold": return [3 /*break*/, 605];
                        case "pi:PiSubsetOfBold": return [3 /*break*/, 607];
                        case "pi:PiSubsetProperOfBold": return [3 /*break*/, 609];
                        case "pi:PiSubtitlesBold": return [3 /*break*/, 611];
                        case "pi:PiSubtitlesSlashBold": return [3 /*break*/, 613];
                        case "pi:PiSubtractBold": return [3 /*break*/, 615];
                        case "pi:PiSubtractSquareBold": return [3 /*break*/, 617];
                        case "pi:PiSubwayBold": return [3 /*break*/, 619];
                        case "pi:PiSuitcaseBold": return [3 /*break*/, 621];
                        case "pi:PiSuitcaseRollingBold": return [3 /*break*/, 623];
                        case "pi:PiSuitcaseSimpleBold": return [3 /*break*/, 625];
                        case "pi:PiSunBold": return [3 /*break*/, 627];
                        case "pi:PiSunDimBold": return [3 /*break*/, 629];
                        case "pi:PiSunHorizonBold": return [3 /*break*/, 631];
                        case "pi:PiSunglassesBold": return [3 /*break*/, 633];
                        case "pi:PiSupersetOfBold": return [3 /*break*/, 635];
                        case "pi:PiSupersetProperOfBold": return [3 /*break*/, 637];
                        case "pi:PiSwapBold": return [3 /*break*/, 639];
                        case "pi:PiSwatchesBold": return [3 /*break*/, 641];
                        case "pi:PiSwimmingPoolBold": return [3 /*break*/, 643];
                        case "pi:PiSwordBold": return [3 /*break*/, 645];
                        case "pi:PiSynagogueBold": return [3 /*break*/, 647];
                        case "pi:PiSyringeBold": return [3 /*break*/, 649];
                        case "pi:PiTShirtBold": return [3 /*break*/, 651];
                        case "pi:PiTableBold": return [3 /*break*/, 653];
                        case "pi:PiTabsBold": return [3 /*break*/, 655];
                        case "pi:PiTagBold": return [3 /*break*/, 657];
                        case "pi:PiTagChevronBold": return [3 /*break*/, 659];
                        case "pi:PiTagSimpleBold": return [3 /*break*/, 661];
                        case "pi:PiTargetBold": return [3 /*break*/, 663];
                        case "pi:PiTaxiBold": return [3 /*break*/, 665];
                        case "pi:PiTeaBagBold": return [3 /*break*/, 667];
                        case "pi:PiTelegramLogoBold": return [3 /*break*/, 669];
                        case "pi:PiTelevisionBold": return [3 /*break*/, 671];
                        case "pi:PiTelevisionSimpleBold": return [3 /*break*/, 673];
                        case "pi:PiTennisBallBold": return [3 /*break*/, 675];
                        case "pi:PiTentBold": return [3 /*break*/, 677];
                        case "pi:PiTerminalBold": return [3 /*break*/, 679];
                        case "pi:PiTerminalWindowBold": return [3 /*break*/, 681];
                        case "pi:PiTestTubeBold": return [3 /*break*/, 683];
                        case "pi:PiTextAUnderlineBold": return [3 /*break*/, 685];
                        case "pi:PiTextAaBold": return [3 /*break*/, 687];
                        case "pi:PiTextAlignCenterBold": return [3 /*break*/, 689];
                        case "pi:PiTextAlignJustifyBold": return [3 /*break*/, 691];
                        case "pi:PiTextAlignLeftBold": return [3 /*break*/, 693];
                        case "pi:PiTextAlignRightBold": return [3 /*break*/, 695];
                        case "pi:PiTextBBold": return [3 /*break*/, 697];
                        case "pi:PiTextColumnsBold": return [3 /*break*/, 699];
                        case "pi:PiTextHBold": return [3 /*break*/, 701];
                        case "pi:PiTextHFiveBold": return [3 /*break*/, 703];
                        case "pi:PiTextHFourBold": return [3 /*break*/, 705];
                        case "pi:PiTextHOneBold": return [3 /*break*/, 707];
                        case "pi:PiTextHSixBold": return [3 /*break*/, 709];
                        case "pi:PiTextHThreeBold": return [3 /*break*/, 711];
                        case "pi:PiTextHTwoBold": return [3 /*break*/, 713];
                        case "pi:PiTextIndentBold": return [3 /*break*/, 715];
                        case "pi:PiTextItalicBold": return [3 /*break*/, 717];
                        case "pi:PiTextOutdentBold": return [3 /*break*/, 719];
                        case "pi:PiTextStrikethroughBold": return [3 /*break*/, 721];
                        case "pi:PiTextSubscriptBold": return [3 /*break*/, 723];
                        case "pi:PiTextSuperscriptBold": return [3 /*break*/, 725];
                        case "pi:PiTextTBold": return [3 /*break*/, 727];
                        case "pi:PiTextTSlashBold": return [3 /*break*/, 729];
                        case "pi:PiTextUnderlineBold": return [3 /*break*/, 731];
                        case "pi:PiTextboxBold": return [3 /*break*/, 733];
                        case "pi:PiThermometerBold": return [3 /*break*/, 735];
                        case "pi:PiThermometerColdBold": return [3 /*break*/, 737];
                        case "pi:PiThermometerHotBold": return [3 /*break*/, 739];
                        case "pi:PiThermometerSimpleBold": return [3 /*break*/, 741];
                        case "pi:PiThreadsLogoBold": return [3 /*break*/, 743];
                        case "pi:PiThreeDBold": return [3 /*break*/, 745];
                        case "pi:PiThumbsDownBold": return [3 /*break*/, 747];
                        case "pi:PiThumbsUpBold": return [3 /*break*/, 749];
                        case "pi:PiTicketBold": return [3 /*break*/, 751];
                        case "pi:PiTidalLogoBold": return [3 /*break*/, 753];
                        case "pi:PiTiktokLogoBold": return [3 /*break*/, 755];
                        case "pi:PiTildeBold": return [3 /*break*/, 757];
                        case "pi:PiTimerBold": return [3 /*break*/, 759];
                        case "pi:PiTipJarBold": return [3 /*break*/, 761];
                        case "pi:PiTipiBold": return [3 /*break*/, 763];
                        case "pi:PiTireBold": return [3 /*break*/, 765];
                        case "pi:PiToggleLeftBold": return [3 /*break*/, 767];
                        case "pi:PiToggleRightBold": return [3 /*break*/, 769];
                        case "pi:PiToiletBold": return [3 /*break*/, 771];
                        case "pi:PiToiletPaperBold": return [3 /*break*/, 773];
                        case "pi:PiToolboxBold": return [3 /*break*/, 775];
                        case "pi:PiToothBold": return [3 /*break*/, 777];
                        case "pi:PiTornadoBold": return [3 /*break*/, 779];
                        case "pi:PiToteBold": return [3 /*break*/, 781];
                        case "pi:PiToteSimpleBold": return [3 /*break*/, 783];
                        case "pi:PiTowelBold": return [3 /*break*/, 785];
                        case "pi:PiTractorBold": return [3 /*break*/, 787];
                        case "pi:PiTrademarkBold": return [3 /*break*/, 789];
                        case "pi:PiTrademarkRegisteredBold": return [3 /*break*/, 791];
                        case "pi:PiTrafficConeBold": return [3 /*break*/, 793];
                        case "pi:PiTrafficSignBold": return [3 /*break*/, 795];
                        case "pi:PiTrafficSignalBold": return [3 /*break*/, 797];
                        case "pi:PiTrainBold": return [3 /*break*/, 799];
                        case "pi:PiTrainRegionalBold": return [3 /*break*/, 801];
                        case "pi:PiTrainSimpleBold": return [3 /*break*/, 803];
                        case "pi:PiTramBold": return [3 /*break*/, 805];
                        case "pi:PiTranslateBold": return [3 /*break*/, 807];
                        case "pi:PiTrashBold": return [3 /*break*/, 809];
                        case "pi:PiTrashSimpleBold": return [3 /*break*/, 811];
                        case "pi:PiTrayArrowDownBold": return [3 /*break*/, 813];
                        case "pi:PiTrayArrowUpBold": return [3 /*break*/, 815];
                        case "pi:PiTrayBold": return [3 /*break*/, 817];
                        case "pi:PiTreasureChestBold": return [3 /*break*/, 819];
                        case "pi:PiTreeBold": return [3 /*break*/, 821];
                        case "pi:PiTreeEvergreenBold": return [3 /*break*/, 823];
                        case "pi:PiTreePalmBold": return [3 /*break*/, 825];
                        case "pi:PiTreeStructureBold": return [3 /*break*/, 827];
                        case "pi:PiTreeViewBold": return [3 /*break*/, 829];
                        case "pi:PiTrendDownBold": return [3 /*break*/, 831];
                        case "pi:PiTrendUpBold": return [3 /*break*/, 833];
                        case "pi:PiTriangleBold": return [3 /*break*/, 835];
                        case "pi:PiTriangleDashedBold": return [3 /*break*/, 837];
                        case "pi:PiTrolleyBold": return [3 /*break*/, 839];
                        case "pi:PiTrolleySuitcaseBold": return [3 /*break*/, 841];
                        case "pi:PiTrophyBold": return [3 /*break*/, 843];
                        case "pi:PiTruckBold": return [3 /*break*/, 845];
                        case "pi:PiTruckTrailerBold": return [3 /*break*/, 847];
                        case "pi:PiTumblrLogoBold": return [3 /*break*/, 849];
                        case "pi:PiTwitchLogoBold": return [3 /*break*/, 851];
                        case "pi:PiTwitterLogoBold": return [3 /*break*/, 853];
                        case "pi:PiUmbrellaBold": return [3 /*break*/, 855];
                        case "pi:PiUmbrellaSimpleBold": return [3 /*break*/, 857];
                        case "pi:PiUnionBold": return [3 /*break*/, 859];
                        case "pi:PiUniteBold": return [3 /*break*/, 861];
                        case "pi:PiUniteSquareBold": return [3 /*break*/, 863];
                        case "pi:PiUploadBold": return [3 /*break*/, 865];
                        case "pi:PiUploadSimpleBold": return [3 /*break*/, 867];
                        case "pi:PiUsbBold": return [3 /*break*/, 869];
                        case "pi:PiUserBold": return [3 /*break*/, 871];
                        case "pi:PiUserCheckBold": return [3 /*break*/, 873];
                        case "pi:PiUserCircleBold": return [3 /*break*/, 875];
                        case "pi:PiUserCircleCheckBold": return [3 /*break*/, 877];
                        case "pi:PiUserCircleDashedBold": return [3 /*break*/, 879];
                        case "pi:PiUserCircleGearBold": return [3 /*break*/, 881];
                        case "pi:PiUserCircleMinusBold": return [3 /*break*/, 883];
                        case "pi:PiUserCirclePlusBold": return [3 /*break*/, 885];
                        case "pi:PiUserFocusBold": return [3 /*break*/, 887];
                        case "pi:PiUserGearBold": return [3 /*break*/, 889];
                        case "pi:PiUserListBold": return [3 /*break*/, 891];
                        case "pi:PiUserMinusBold": return [3 /*break*/, 893];
                        case "pi:PiUserPlusBold": return [3 /*break*/, 895];
                        case "pi:PiUserRectangleBold": return [3 /*break*/, 897];
                        case "pi:PiUserSoundBold": return [3 /*break*/, 899];
                        case "pi:PiUserSquareBold": return [3 /*break*/, 901];
                        case "pi:PiUserSwitchBold": return [3 /*break*/, 903];
                        case "pi:PiUsersBold": return [3 /*break*/, 905];
                        case "pi:PiUsersFourBold": return [3 /*break*/, 907];
                        case "pi:PiUsersThreeBold": return [3 /*break*/, 909];
                        case "pi:PiVanBold": return [3 /*break*/, 911];
                        case "pi:PiVaultBold": return [3 /*break*/, 913];
                        case "pi:PiVectorThreeBold": return [3 /*break*/, 915];
                        case "pi:PiVectorTwoBold": return [3 /*break*/, 917];
                        case "pi:PiVibrateBold": return [3 /*break*/, 919];
                        case "pi:PiVideoBold": return [3 /*break*/, 921];
                        case "pi:PiVideoCameraBold": return [3 /*break*/, 923];
                        case "pi:PiVideoCameraSlashBold": return [3 /*break*/, 925];
                        case "pi:PiVideoConferenceBold": return [3 /*break*/, 927];
                        case "pi:PiVignetteBold": return [3 /*break*/, 929];
                        case "pi:PiVinylRecordBold": return [3 /*break*/, 931];
                        case "pi:PiVirtualRealityBold": return [3 /*break*/, 933];
                        case "pi:PiVirusBold": return [3 /*break*/, 935];
                        case "pi:PiVisorBold": return [3 /*break*/, 937];
                        case "pi:PiVoicemailBold": return [3 /*break*/, 939];
                        case "pi:PiVolleyballBold": return [3 /*break*/, 941];
                        case "pi:PiWallBold": return [3 /*break*/, 943];
                        case "pi:PiWalletBold": return [3 /*break*/, 945];
                        case "pi:PiWarehouseBold": return [3 /*break*/, 947];
                        case "pi:PiWarningBold": return [3 /*break*/, 949];
                        case "pi:PiWarningCircleBold": return [3 /*break*/, 951];
                        case "pi:PiWarningDiamondBold": return [3 /*break*/, 953];
                        case "pi:PiWarningOctagonBold": return [3 /*break*/, 955];
                        case "pi:PiWashingMachineBold": return [3 /*break*/, 957];
                        case "pi:PiWatchBold": return [3 /*break*/, 959];
                        case "pi:PiWaveSawtoothBold": return [3 /*break*/, 961];
                        case "pi:PiWaveSineBold": return [3 /*break*/, 963];
                        case "pi:PiWaveSquareBold": return [3 /*break*/, 965];
                        case "pi:PiWaveTriangleBold": return [3 /*break*/, 967];
                        case "pi:PiWaveformBold": return [3 /*break*/, 969];
                        case "pi:PiWaveformSlashBold": return [3 /*break*/, 971];
                        case "pi:PiWavesBold": return [3 /*break*/, 973];
                        case "pi:PiWebcamBold": return [3 /*break*/, 975];
                        case "pi:PiWebcamSlashBold": return [3 /*break*/, 977];
                        case "pi:PiWebhooksLogoBold": return [3 /*break*/, 979];
                        case "pi:PiWechatLogoBold": return [3 /*break*/, 981];
                        case "pi:PiWhatsappLogoBold": return [3 /*break*/, 983];
                        case "pi:PiWheelchairBold": return [3 /*break*/, 985];
                        case "pi:PiWheelchairMotionBold": return [3 /*break*/, 987];
                        case "pi:PiWifiHighBold": return [3 /*break*/, 989];
                        case "pi:PiWifiLowBold": return [3 /*break*/, 991];
                        case "pi:PiWifiMediumBold": return [3 /*break*/, 993];
                        case "pi:PiWifiNoneBold": return [3 /*break*/, 995];
                        case "pi:PiWifiSlashBold": return [3 /*break*/, 997];
                        case "pi:PiWifiXBold": return [3 /*break*/, 999];
                        case "pi:PiWindBold": return [3 /*break*/, 1001];
                        case "pi:PiWindmillBold": return [3 /*break*/, 1003];
                        case "pi:PiWindowsLogoBold": return [3 /*break*/, 1005];
                        case "pi:PiWineBold": return [3 /*break*/, 1007];
                        case "pi:PiWrenchBold": return [3 /*break*/, 1009];
                        case "pi:PiXBold": return [3 /*break*/, 1011];
                        case "pi:PiXCircleBold": return [3 /*break*/, 1013];
                        case "pi:PiXLogoBold": return [3 /*break*/, 1015];
                        case "pi:PiXSquareBold": return [3 /*break*/, 1017];
                        case "pi:PiYarnBold": return [3 /*break*/, 1019];
                        case "pi:PiYinYangBold": return [3 /*break*/, 1021];
                        case "pi:PiYoutubeLogoBold": return [3 /*break*/, 1023];
                        case "pi:PiAcornDuotone": return [3 /*break*/, 1025];
                        case "pi:PiAddressBookDuotone": return [3 /*break*/, 1027];
                        case "pi:PiAddressBookTabsDuotone": return [3 /*break*/, 1029];
                        case "pi:PiAirTrafficControlDuotone": return [3 /*break*/, 1031];
                        case "pi:PiAirplaneDuotone": return [3 /*break*/, 1033];
                        case "pi:PiAirplaneInFlightDuotone": return [3 /*break*/, 1035];
                        case "pi:PiAirplaneLandingDuotone": return [3 /*break*/, 1037];
                        case "pi:PiAirplaneTakeoffDuotone": return [3 /*break*/, 1039];
                        case "pi:PiAirplaneTaxiingDuotone": return [3 /*break*/, 1041];
                        case "pi:PiAirplaneTiltDuotone": return [3 /*break*/, 1043];
                        case "pi:PiAirplayDuotone": return [3 /*break*/, 1045];
                        case "pi:PiAlarmDuotone": return [3 /*break*/, 1047];
                        case "pi:PiAlienDuotone": return [3 /*break*/, 1049];
                        case "pi:PiAlignBottomDuotone": return [3 /*break*/, 1051];
                        case "pi:PiAlignBottomSimpleDuotone": return [3 /*break*/, 1053];
                        case "pi:PiAlignCenterHorizontalDuotone": return [3 /*break*/, 1055];
                        case "pi:PiAlignCenterHorizontalSimpleDuotone": return [3 /*break*/, 1057];
                        case "pi:PiAlignCenterVerticalDuotone": return [3 /*break*/, 1059];
                        case "pi:PiAlignCenterVerticalSimpleDuotone": return [3 /*break*/, 1061];
                        case "pi:PiAlignLeftDuotone": return [3 /*break*/, 1063];
                        case "pi:PiAlignLeftSimpleDuotone": return [3 /*break*/, 1065];
                        case "pi:PiAlignRightDuotone": return [3 /*break*/, 1067];
                        case "pi:PiAlignRightSimpleDuotone": return [3 /*break*/, 1069];
                        case "pi:PiAlignTopDuotone": return [3 /*break*/, 1071];
                        case "pi:PiAlignTopSimpleDuotone": return [3 /*break*/, 1073];
                        case "pi:PiAmazonLogoDuotone": return [3 /*break*/, 1075];
                        case "pi:PiAmbulanceDuotone": return [3 /*break*/, 1077];
                        case "pi:PiAnchorDuotone": return [3 /*break*/, 1079];
                        case "pi:PiAnchorSimpleDuotone": return [3 /*break*/, 1081];
                        case "pi:PiAndroidLogoDuotone": return [3 /*break*/, 1083];
                        case "pi:PiAngleDuotone": return [3 /*break*/, 1085];
                        case "pi:PiAngularLogoDuotone": return [3 /*break*/, 1087];
                        case "pi:PiApertureDuotone": return [3 /*break*/, 1089];
                        case "pi:PiAppStoreLogoDuotone": return [3 /*break*/, 1091];
                        case "pi:PiAppWindowDuotone": return [3 /*break*/, 1093];
                        case "pi:PiAppleLogoDuotone": return [3 /*break*/, 1095];
                        case "pi:PiApplePodcastsLogoDuotone": return [3 /*break*/, 1097];
                        case "pi:PiApproximateEqualsDuotone": return [3 /*break*/, 1099];
                        case "pi:PiArchiveDuotone": return [3 /*break*/, 1101];
                        case "pi:PiArmchairDuotone": return [3 /*break*/, 1103];
                        case "pi:PiArrowArcLeftDuotone": return [3 /*break*/, 1105];
                        case "pi:PiArrowArcRightDuotone": return [3 /*break*/, 1107];
                        case "pi:PiArrowBendDoubleUpLeftDuotone": return [3 /*break*/, 1109];
                        case "pi:PiArrowBendDoubleUpRightDuotone": return [3 /*break*/, 1111];
                        case "pi:PiArrowBendDownLeftDuotone": return [3 /*break*/, 1113];
                        case "pi:PiArrowBendDownRightDuotone": return [3 /*break*/, 1115];
                        case "pi:PiArrowBendLeftDownDuotone": return [3 /*break*/, 1117];
                        case "pi:PiArrowBendLeftUpDuotone": return [3 /*break*/, 1119];
                        case "pi:PiArrowBendRightDownDuotone": return [3 /*break*/, 1121];
                        case "pi:PiArrowBendRightUpDuotone": return [3 /*break*/, 1123];
                        case "pi:PiArrowBendUpLeftDuotone": return [3 /*break*/, 1125];
                        case "pi:PiArrowBendUpRightDuotone": return [3 /*break*/, 1127];
                        case "pi:PiArrowCircleDownDuotone": return [3 /*break*/, 1129];
                        case "pi:PiArrowCircleDownLeftDuotone": return [3 /*break*/, 1131];
                        case "pi:PiArrowCircleDownRightDuotone": return [3 /*break*/, 1133];
                        case "pi:PiArrowCircleLeftDuotone": return [3 /*break*/, 1135];
                        case "pi:PiArrowCircleRightDuotone": return [3 /*break*/, 1137];
                        case "pi:PiArrowCircleUpDuotone": return [3 /*break*/, 1139];
                        case "pi:PiArrowCircleUpLeftDuotone": return [3 /*break*/, 1141];
                        case "pi:PiArrowCircleUpRightDuotone": return [3 /*break*/, 1143];
                        case "pi:PiArrowClockwiseDuotone": return [3 /*break*/, 1145];
                        case "pi:PiArrowCounterClockwiseDuotone": return [3 /*break*/, 1147];
                        case "pi:PiArrowDownDuotone": return [3 /*break*/, 1149];
                        case "pi:PiArrowDownLeftDuotone": return [3 /*break*/, 1151];
                        case "pi:PiArrowDownRightDuotone": return [3 /*break*/, 1153];
                        case "pi:PiArrowElbowDownLeftDuotone": return [3 /*break*/, 1155];
                        case "pi:PiArrowElbowDownRightDuotone": return [3 /*break*/, 1157];
                        case "pi:PiArrowElbowLeftDownDuotone": return [3 /*break*/, 1159];
                        case "pi:PiArrowElbowLeftDuotone": return [3 /*break*/, 1161];
                        case "pi:PiArrowElbowLeftUpDuotone": return [3 /*break*/, 1163];
                        case "pi:PiArrowElbowRightDownDuotone": return [3 /*break*/, 1165];
                        case "pi:PiArrowElbowRightDuotone": return [3 /*break*/, 1167];
                        case "pi:PiArrowElbowRightUpDuotone": return [3 /*break*/, 1169];
                        case "pi:PiArrowElbowUpLeftDuotone": return [3 /*break*/, 1171];
                        case "pi:PiArrowElbowUpRightDuotone": return [3 /*break*/, 1173];
                        case "pi:PiArrowFatDownDuotone": return [3 /*break*/, 1175];
                        case "pi:PiArrowFatLeftDuotone": return [3 /*break*/, 1177];
                        case "pi:PiArrowFatLineDownDuotone": return [3 /*break*/, 1179];
                        case "pi:PiArrowFatLineLeftDuotone": return [3 /*break*/, 1181];
                        case "pi:PiArrowFatLineRightDuotone": return [3 /*break*/, 1183];
                        case "pi:PiArrowFatLineUpDuotone": return [3 /*break*/, 1185];
                        case "pi:PiArrowFatLinesDownDuotone": return [3 /*break*/, 1187];
                        case "pi:PiArrowFatLinesLeftDuotone": return [3 /*break*/, 1189];
                        case "pi:PiArrowFatLinesRightDuotone": return [3 /*break*/, 1191];
                        case "pi:PiArrowFatLinesUpDuotone": return [3 /*break*/, 1193];
                        case "pi:PiArrowFatRightDuotone": return [3 /*break*/, 1195];
                        case "pi:PiArrowFatUpDuotone": return [3 /*break*/, 1197];
                        case "pi:PiArrowLeftDuotone": return [3 /*break*/, 1199];
                        case "pi:PiArrowLineDownDuotone": return [3 /*break*/, 1201];
                        case "pi:PiArrowLineDownLeftDuotone": return [3 /*break*/, 1203];
                        case "pi:PiArrowLineDownRightDuotone": return [3 /*break*/, 1205];
                        case "pi:PiArrowLineLeftDuotone": return [3 /*break*/, 1207];
                        case "pi:PiArrowLineRightDuotone": return [3 /*break*/, 1209];
                        case "pi:PiArrowLineUpDuotone": return [3 /*break*/, 1211];
                        case "pi:PiArrowLineUpLeftDuotone": return [3 /*break*/, 1213];
                        case "pi:PiArrowLineUpRightDuotone": return [3 /*break*/, 1215];
                        case "pi:PiArrowRightDuotone": return [3 /*break*/, 1217];
                        case "pi:PiArrowSquareDownDuotone": return [3 /*break*/, 1219];
                        case "pi:PiArrowSquareDownLeftDuotone": return [3 /*break*/, 1221];
                        case "pi:PiArrowSquareDownRightDuotone": return [3 /*break*/, 1223];
                        case "pi:PiArrowSquareInDuotone": return [3 /*break*/, 1225];
                        case "pi:PiArrowSquareLeftDuotone": return [3 /*break*/, 1227];
                        case "pi:PiArrowSquareOutDuotone": return [3 /*break*/, 1229];
                        case "pi:PiArrowSquareRightDuotone": return [3 /*break*/, 1231];
                        case "pi:PiArrowSquareUpDuotone": return [3 /*break*/, 1233];
                        case "pi:PiArrowSquareUpLeftDuotone": return [3 /*break*/, 1235];
                        case "pi:PiArrowSquareUpRightDuotone": return [3 /*break*/, 1237];
                        case "pi:PiArrowUDownLeftDuotone": return [3 /*break*/, 1239];
                        case "pi:PiArrowUDownRightDuotone": return [3 /*break*/, 1241];
                        case "pi:PiArrowULeftDownDuotone": return [3 /*break*/, 1243];
                        case "pi:PiArrowULeftUpDuotone": return [3 /*break*/, 1245];
                        case "pi:PiArrowURightDownDuotone": return [3 /*break*/, 1247];
                        case "pi:PiArrowURightUpDuotone": return [3 /*break*/, 1249];
                        case "pi:PiArrowUUpLeftDuotone": return [3 /*break*/, 1251];
                        case "pi:PiArrowUUpRightDuotone": return [3 /*break*/, 1253];
                        case "pi:PiArrowUpDuotone": return [3 /*break*/, 1255];
                        case "pi:PiArrowUpLeftDuotone": return [3 /*break*/, 1257];
                        case "pi:PiArrowUpRightDuotone": return [3 /*break*/, 1259];
                        case "pi:PiArrowsClockwiseDuotone": return [3 /*break*/, 1261];
                        case "pi:PiArrowsCounterClockwiseDuotone": return [3 /*break*/, 1263];
                        case "pi:PiArrowsDownUpDuotone": return [3 /*break*/, 1265];
                        case "pi:PiArrowsHorizontalDuotone": return [3 /*break*/, 1267];
                        case "pi:PiArrowsInCardinalDuotone": return [3 /*break*/, 1269];
                        case "pi:PiArrowsInDuotone": return [3 /*break*/, 1271];
                        case "pi:PiArrowsInLineHorizontalDuotone": return [3 /*break*/, 1273];
                        case "pi:PiArrowsInLineVerticalDuotone": return [3 /*break*/, 1275];
                        case "pi:PiArrowsInSimpleDuotone": return [3 /*break*/, 1277];
                        case "pi:PiArrowsLeftRightDuotone": return [3 /*break*/, 1279];
                        case "pi:PiArrowsMergeDuotone": return [3 /*break*/, 1281];
                        case "pi:PiArrowsOutCardinalDuotone": return [3 /*break*/, 1283];
                        case "pi:PiArrowsOutDuotone": return [3 /*break*/, 1285];
                        case "pi:PiArrowsOutLineHorizontalDuotone": return [3 /*break*/, 1287];
                        case "pi:PiArrowsOutLineVerticalDuotone": return [3 /*break*/, 1289];
                        case "pi:PiArrowsOutSimpleDuotone": return [3 /*break*/, 1291];
                        case "pi:PiArrowsSplitDuotone": return [3 /*break*/, 1293];
                        case "pi:PiArrowsVerticalDuotone": return [3 /*break*/, 1295];
                        case "pi:PiArticleDuotone": return [3 /*break*/, 1297];
                        case "pi:PiArticleMediumDuotone": return [3 /*break*/, 1299];
                        case "pi:PiArticleNyTimesDuotone": return [3 /*break*/, 1301];
                        case "pi:PiAsclepiusDuotone": return [3 /*break*/, 1303];
                        case "pi:PiAsteriskDuotone": return [3 /*break*/, 1305];
                        case "pi:PiAsteriskSimpleDuotone": return [3 /*break*/, 1307];
                        case "pi:PiAtDuotone": return [3 /*break*/, 1309];
                        case "pi:PiAtomDuotone": return [3 /*break*/, 1311];
                        case "pi:PiAvocadoDuotone": return [3 /*break*/, 1313];
                        case "pi:PiAxeDuotone": return [3 /*break*/, 1315];
                        case "pi:PiBabyCarriageDuotone": return [3 /*break*/, 1317];
                        case "pi:PiBabyDuotone": return [3 /*break*/, 1319];
                        case "pi:PiBackpackDuotone": return [3 /*break*/, 1321];
                        case "pi:PiBackspaceDuotone": return [3 /*break*/, 1323];
                        case "pi:PiBagDuotone": return [3 /*break*/, 1325];
                        case "pi:PiBagSimpleDuotone": return [3 /*break*/, 1327];
                        case "pi:PiBalloonDuotone": return [3 /*break*/, 1329];
                        case "pi:PiBandaidsDuotone": return [3 /*break*/, 1331];
                        case "pi:PiBankDuotone": return [3 /*break*/, 1333];
                        case "pi:PiBarbellDuotone": return [3 /*break*/, 1335];
                        case "pi:PiBarcodeDuotone": return [3 /*break*/, 1337];
                        case "pi:PiBarnDuotone": return [3 /*break*/, 1339];
                        case "pi:PiBarricadeDuotone": return [3 /*break*/, 1341];
                        case "pi:PiBaseballCapDuotone": return [3 /*break*/, 1343];
                        case "pi:PiBaseballDuotone": return [3 /*break*/, 1345];
                        case "pi:PiBaseballHelmetDuotone": return [3 /*break*/, 1347];
                        case "pi:PiBasketDuotone": return [3 /*break*/, 1349];
                        case "pi:PiBasketballDuotone": return [3 /*break*/, 1351];
                        case "pi:PiBathtubDuotone": return [3 /*break*/, 1353];
                        case "pi:PiBatteryChargingDuotone": return [3 /*break*/, 1355];
                        case "pi:PiBatteryChargingVerticalDuotone": return [3 /*break*/, 1357];
                        case "pi:PiBatteryEmptyDuotone": return [3 /*break*/, 1359];
                        case "pi:PiBatteryFullDuotone": return [3 /*break*/, 1361];
                        case "pi:PiBatteryHighDuotone": return [3 /*break*/, 1363];
                        case "pi:PiBatteryLowDuotone": return [3 /*break*/, 1365];
                        case "pi:PiBatteryMediumDuotone": return [3 /*break*/, 1367];
                        case "pi:PiBatteryPlusDuotone": return [3 /*break*/, 1369];
                        case "pi:PiBatteryPlusVerticalDuotone": return [3 /*break*/, 1371];
                        case "pi:PiBatteryVerticalEmptyDuotone": return [3 /*break*/, 1373];
                        case "pi:PiBatteryVerticalFullDuotone": return [3 /*break*/, 1375];
                        case "pi:PiBatteryVerticalHighDuotone": return [3 /*break*/, 1377];
                        case "pi:PiBatteryVerticalLowDuotone": return [3 /*break*/, 1379];
                        case "pi:PiBatteryVerticalMediumDuotone": return [3 /*break*/, 1381];
                        case "pi:PiBatteryWarningDuotone": return [3 /*break*/, 1383];
                        case "pi:PiBatteryWarningVerticalDuotone": return [3 /*break*/, 1385];
                        case "pi:PiBeachBallDuotone": return [3 /*break*/, 1387];
                        case "pi:PiBeanieDuotone": return [3 /*break*/, 1389];
                        case "pi:PiBedDuotone": return [3 /*break*/, 1391];
                        case "pi:PiBeerBottleDuotone": return [3 /*break*/, 1393];
                        case "pi:PiBeerSteinDuotone": return [3 /*break*/, 1395];
                        case "pi:PiBehanceLogoDuotone": return [3 /*break*/, 1397];
                        case "pi:PiBellDuotone": return [3 /*break*/, 1399];
                        case "pi:PiBellRingingDuotone": return [3 /*break*/, 1401];
                        case "pi:PiBellSimpleDuotone": return [3 /*break*/, 1403];
                        case "pi:PiBellSimpleRingingDuotone": return [3 /*break*/, 1405];
                        case "pi:PiBellSimpleSlashDuotone": return [3 /*break*/, 1407];
                        case "pi:PiBellSimpleZDuotone": return [3 /*break*/, 1409];
                        case "pi:PiBellSlashDuotone": return [3 /*break*/, 1411];
                        case "pi:PiBellZDuotone": return [3 /*break*/, 1413];
                        case "pi:PiBeltDuotone": return [3 /*break*/, 1415];
                        case "pi:PiBezierCurveDuotone": return [3 /*break*/, 1417];
                        case "pi:PiBicycleDuotone": return [3 /*break*/, 1419];
                        case "pi:PiBinaryDuotone": return [3 /*break*/, 1421];
                        case "pi:PiBinocularsDuotone": return [3 /*break*/, 1423];
                        case "pi:PiBiohazardDuotone": return [3 /*break*/, 1425];
                        case "pi:PiBirdDuotone": return [3 /*break*/, 1427];
                        case "pi:PiBlueprintDuotone": return [3 /*break*/, 1429];
                        case "pi:PiBluetoothConnectedDuotone": return [3 /*break*/, 1431];
                        case "pi:PiBluetoothDuotone": return [3 /*break*/, 1433];
                        case "pi:PiBluetoothSlashDuotone": return [3 /*break*/, 1435];
                        case "pi:PiBluetoothXDuotone": return [3 /*break*/, 1437];
                        case "pi:PiBoatDuotone": return [3 /*break*/, 1439];
                        case "pi:PiBombDuotone": return [3 /*break*/, 1441];
                        case "pi:PiBoneDuotone": return [3 /*break*/, 1443];
                        case "pi:PiBookBookmarkDuotone": return [3 /*break*/, 1445];
                        case "pi:PiBookDuotone": return [3 /*break*/, 1447];
                        case "pi:PiBookOpenDuotone": return [3 /*break*/, 1449];
                        case "pi:PiBookOpenTextDuotone": return [3 /*break*/, 1451];
                        case "pi:PiBookOpenUserDuotone": return [3 /*break*/, 1453];
                        case "pi:PiBookmarkDuotone": return [3 /*break*/, 1455];
                        case "pi:PiBookmarkSimpleDuotone": return [3 /*break*/, 1457];
                        case "pi:PiBookmarksDuotone": return [3 /*break*/, 1459];
                        case "pi:PiBookmarksSimpleDuotone": return [3 /*break*/, 1461];
                        case "pi:PiBooksDuotone": return [3 /*break*/, 1463];
                        case "pi:PiBootDuotone": return [3 /*break*/, 1465];
                        case "pi:PiBoulesDuotone": return [3 /*break*/, 1467];
                        case "pi:PiBoundingBoxDuotone": return [3 /*break*/, 1469];
                        case "pi:PiBowlFoodDuotone": return [3 /*break*/, 1471];
                        case "pi:PiBowlSteamDuotone": return [3 /*break*/, 1473];
                        case "pi:PiBowlingBallDuotone": return [3 /*break*/, 1475];
                        case "pi:PiBoxArrowDownDuotone": return [3 /*break*/, 1477];
                        case "pi:PiBoxArrowUpDuotone": return [3 /*break*/, 1479];
                        case "pi:PiBoxingGloveDuotone": return [3 /*break*/, 1481];
                        case "pi:PiBracketsAngleDuotone": return [3 /*break*/, 1483];
                        case "pi:PiBracketsCurlyDuotone": return [3 /*break*/, 1485];
                        case "pi:PiBracketsRoundDuotone": return [3 /*break*/, 1487];
                        case "pi:PiBracketsSquareDuotone": return [3 /*break*/, 1489];
                        case "pi:PiBrainDuotone": return [3 /*break*/, 1491];
                        case "pi:PiBrandyDuotone": return [3 /*break*/, 1493];
                        case "pi:PiBreadDuotone": return [3 /*break*/, 1495];
                        case "pi:PiBridgeDuotone": return [3 /*break*/, 1497];
                        case "pi:PiBriefcaseDuotone": return [3 /*break*/, 1499];
                        case "pi:PiBriefcaseMetalDuotone": return [3 /*break*/, 1501];
                        case "pi:PiBroadcastDuotone": return [3 /*break*/, 1503];
                        case "pi:PiBroomDuotone": return [3 /*break*/, 1505];
                        case "pi:PiBrowserDuotone": return [3 /*break*/, 1507];
                        case "pi:PiBrowsersDuotone": return [3 /*break*/, 1509];
                        case "pi:PiBugBeetleDuotone": return [3 /*break*/, 1511];
                        case "pi:PiBugDroidDuotone": return [3 /*break*/, 1513];
                        case "pi:PiBugDuotone": return [3 /*break*/, 1515];
                        case "pi:PiBuildingApartmentDuotone": return [3 /*break*/, 1517];
                        case "pi:PiBuildingDuotone": return [3 /*break*/, 1519];
                        case "pi:PiBuildingOfficeDuotone": return [3 /*break*/, 1521];
                        case "pi:PiBuildingsDuotone": return [3 /*break*/, 1523];
                        case "pi:PiBulldozerDuotone": return [3 /*break*/, 1525];
                        case "pi:PiBusDuotone": return [3 /*break*/, 1527];
                        case "pi:PiButterflyDuotone": return [3 /*break*/, 1529];
                        case "pi:PiCableCarDuotone": return [3 /*break*/, 1531];
                        case "pi:PiCactusDuotone": return [3 /*break*/, 1533];
                        case "pi:PiCakeDuotone": return [3 /*break*/, 1535];
                        case "pi:PiCalculatorDuotone": return [3 /*break*/, 1537];
                        case "pi:PiCalendarBlankDuotone": return [3 /*break*/, 1539];
                        case "pi:PiCalendarCheckDuotone": return [3 /*break*/, 1541];
                        case "pi:PiCalendarDotDuotone": return [3 /*break*/, 1543];
                        case "pi:PiCalendarDotsDuotone": return [3 /*break*/, 1545];
                        case "pi:PiCalendarDuotone": return [3 /*break*/, 1547];
                        case "pi:PiCalendarHeartDuotone": return [3 /*break*/, 1549];
                        case "pi:PiCalendarMinusDuotone": return [3 /*break*/, 1551];
                        case "pi:PiCalendarPlusDuotone": return [3 /*break*/, 1553];
                        case "pi:PiCalendarSlashDuotone": return [3 /*break*/, 1555];
                        case "pi:PiCalendarStarDuotone": return [3 /*break*/, 1557];
                        case "pi:PiCalendarXDuotone": return [3 /*break*/, 1559];
                        case "pi:PiCallBellDuotone": return [3 /*break*/, 1561];
                        case "pi:PiCameraDuotone": return [3 /*break*/, 1563];
                        case "pi:PiCameraPlusDuotone": return [3 /*break*/, 1565];
                        case "pi:PiCameraRotateDuotone": return [3 /*break*/, 1567];
                        case "pi:PiCameraSlashDuotone": return [3 /*break*/, 1569];
                        case "pi:PiCampfireDuotone": return [3 /*break*/, 1571];
                        case "pi:PiCarBatteryDuotone": return [3 /*break*/, 1573];
                        case "pi:PiCarDuotone": return [3 /*break*/, 1575];
                        case "pi:PiCarProfileDuotone": return [3 /*break*/, 1577];
                        case "pi:PiCarSimpleDuotone": return [3 /*break*/, 1579];
                        case "pi:PiCardholderDuotone": return [3 /*break*/, 1581];
                        case "pi:PiCardsDuotone": return [3 /*break*/, 1583];
                        case "pi:PiCardsThreeDuotone": return [3 /*break*/, 1585];
                        case "pi:PiCaretCircleDoubleDownDuotone": return [3 /*break*/, 1587];
                        case "pi:PiCaretCircleDoubleLeftDuotone": return [3 /*break*/, 1589];
                        case "pi:PiCaretCircleDoubleRightDuotone": return [3 /*break*/, 1591];
                        case "pi:PiCaretCircleDoubleUpDuotone": return [3 /*break*/, 1593];
                        case "pi:PiCaretCircleDownDuotone": return [3 /*break*/, 1595];
                        case "pi:PiCaretCircleLeftDuotone": return [3 /*break*/, 1597];
                        case "pi:PiCaretCircleRightDuotone": return [3 /*break*/, 1599];
                        case "pi:PiCaretCircleUpDownDuotone": return [3 /*break*/, 1601];
                        case "pi:PiCaretCircleUpDuotone": return [3 /*break*/, 1603];
                        case "pi:PiCaretDoubleDownDuotone": return [3 /*break*/, 1605];
                        case "pi:PiCaretDoubleLeftDuotone": return [3 /*break*/, 1607];
                        case "pi:PiCaretDoubleRightDuotone": return [3 /*break*/, 1609];
                        case "pi:PiCaretDoubleUpDuotone": return [3 /*break*/, 1611];
                        case "pi:PiCaretDownDuotone": return [3 /*break*/, 1613];
                        case "pi:PiCaretLeftDuotone": return [3 /*break*/, 1615];
                        case "pi:PiCaretLineDownDuotone": return [3 /*break*/, 1617];
                        case "pi:PiCaretLineLeftDuotone": return [3 /*break*/, 1619];
                        case "pi:PiCaretLineRightDuotone": return [3 /*break*/, 1621];
                        case "pi:PiCaretLineUpDuotone": return [3 /*break*/, 1623];
                        case "pi:PiCaretRightDuotone": return [3 /*break*/, 1625];
                        case "pi:PiCaretUpDownDuotone": return [3 /*break*/, 1627];
                        case "pi:PiCaretUpDuotone": return [3 /*break*/, 1629];
                        case "pi:PiCarrotDuotone": return [3 /*break*/, 1631];
                        case "pi:PiCashRegisterDuotone": return [3 /*break*/, 1633];
                        case "pi:PiCassetteTapeDuotone": return [3 /*break*/, 1635];
                        case "pi:PiCastleTurretDuotone": return [3 /*break*/, 1637];
                        case "pi:PiCatDuotone": return [3 /*break*/, 1639];
                        case "pi:PiCellSignalFullDuotone": return [3 /*break*/, 1641];
                        case "pi:PiCellSignalHighDuotone": return [3 /*break*/, 1643];
                        case "pi:PiCellSignalLowDuotone": return [3 /*break*/, 1645];
                        case "pi:PiCellSignalMediumDuotone": return [3 /*break*/, 1647];
                        case "pi:PiCellSignalNoneDuotone": return [3 /*break*/, 1649];
                        case "pi:PiCellSignalSlashDuotone": return [3 /*break*/, 1651];
                        case "pi:PiCellSignalXDuotone": return [3 /*break*/, 1653];
                        case "pi:PiCellTowerDuotone": return [3 /*break*/, 1655];
                        case "pi:PiCertificateDuotone": return [3 /*break*/, 1657];
                        case "pi:PiChairDuotone": return [3 /*break*/, 1659];
                        case "pi:PiChalkboardDuotone": return [3 /*break*/, 1661];
                        case "pi:PiChalkboardSimpleDuotone": return [3 /*break*/, 1663];
                        case "pi:PiChalkboardTeacherDuotone": return [3 /*break*/, 1665];
                        case "pi:PiChampagneDuotone": return [3 /*break*/, 1667];
                        case "pi:PiChargingStationDuotone": return [3 /*break*/, 1669];
                        case "pi:PiChartBarDuotone": return [3 /*break*/, 1671];
                        case "pi:PiChartBarHorizontalDuotone": return [3 /*break*/, 1673];
                        case "pi:PiChartDonutDuotone": return [3 /*break*/, 1675];
                        case "pi:PiChartLineDownDuotone": return [3 /*break*/, 1677];
                        case "pi:PiChartLineDuotone": return [3 /*break*/, 1679];
                        case "pi:PiChartLineUpDuotone": return [3 /*break*/, 1681];
                        case "pi:PiChartPieDuotone": return [3 /*break*/, 1683];
                        case "pi:PiChartPieSliceDuotone": return [3 /*break*/, 1685];
                        case "pi:PiChartPolarDuotone": return [3 /*break*/, 1687];
                        case "pi:PiChartScatterDuotone": return [3 /*break*/, 1689];
                        case "pi:PiChatCenteredDotsDuotone": return [3 /*break*/, 1691];
                        case "pi:PiChatCenteredDuotone": return [3 /*break*/, 1693];
                        case "pi:PiChatCenteredSlashDuotone": return [3 /*break*/, 1695];
                        case "pi:PiChatCenteredTextDuotone": return [3 /*break*/, 1697];
                        case "pi:PiChatCircleDotsDuotone": return [3 /*break*/, 1699];
                        case "pi:PiChatCircleDuotone": return [3 /*break*/, 1701];
                        case "pi:PiChatCircleSlashDuotone": return [3 /*break*/, 1703];
                        case "pi:PiChatCircleTextDuotone": return [3 /*break*/, 1705];
                        case "pi:PiChatDotsDuotone": return [3 /*break*/, 1707];
                        case "pi:PiChatDuotone": return [3 /*break*/, 1709];
                        case "pi:PiChatSlashDuotone": return [3 /*break*/, 1711];
                        case "pi:PiChatTeardropDotsDuotone": return [3 /*break*/, 1713];
                        case "pi:PiChatTeardropDuotone": return [3 /*break*/, 1715];
                        case "pi:PiChatTeardropSlashDuotone": return [3 /*break*/, 1717];
                        case "pi:PiChatTeardropTextDuotone": return [3 /*break*/, 1719];
                        case "pi:PiChatTextDuotone": return [3 /*break*/, 1721];
                        case "pi:PiChatsCircleDuotone": return [3 /*break*/, 1723];
                        case "pi:PiChatsDuotone": return [3 /*break*/, 1725];
                        case "pi:PiChatsTeardropDuotone": return [3 /*break*/, 1727];
                        case "pi:PiCheckCircleDuotone": return [3 /*break*/, 1729];
                        case "pi:PiCheckDuotone": return [3 /*break*/, 1731];
                        case "pi:PiCheckFatDuotone": return [3 /*break*/, 1733];
                        case "pi:PiCheckSquareDuotone": return [3 /*break*/, 1735];
                        case "pi:PiCheckSquareOffsetDuotone": return [3 /*break*/, 1737];
                        case "pi:PiCheckerboardDuotone": return [3 /*break*/, 1739];
                        case "pi:PiChecksDuotone": return [3 /*break*/, 1741];
                        case "pi:PiCheersDuotone": return [3 /*break*/, 1743];
                        case "pi:PiCheeseDuotone": return [3 /*break*/, 1745];
                        case "pi:PiChefHatDuotone": return [3 /*break*/, 1747];
                        case "pi:PiCherriesDuotone": return [3 /*break*/, 1749];
                        case "pi:PiChurchDuotone": return [3 /*break*/, 1751];
                        case "pi:PiCigaretteDuotone": return [3 /*break*/, 1753];
                        case "pi:PiCigaretteSlashDuotone": return [3 /*break*/, 1755];
                        case "pi:PiCircleDashedDuotone": return [3 /*break*/, 1757];
                        case "pi:PiCircleDuotone": return [3 /*break*/, 1759];
                        case "pi:PiCircleHalfDuotone": return [3 /*break*/, 1761];
                        case "pi:PiCircleHalfTiltDuotone": return [3 /*break*/, 1763];
                        case "pi:PiCircleNotchDuotone": return [3 /*break*/, 1765];
                        case "pi:PiCirclesFourDuotone": return [3 /*break*/, 1767];
                        case "pi:PiCirclesThreeDuotone": return [3 /*break*/, 1769];
                        case "pi:PiCirclesThreePlusDuotone": return [3 /*break*/, 1771];
                        case "pi:PiCircuitryDuotone": return [3 /*break*/, 1773];
                        case "pi:PiCityDuotone": return [3 /*break*/, 1775];
                        case "pi:PiClipboardDuotone": return [3 /*break*/, 1777];
                        case "pi:PiClipboardTextDuotone": return [3 /*break*/, 1779];
                        case "pi:PiClockAfternoonDuotone": return [3 /*break*/, 1781];
                        case "pi:PiClockClockwiseDuotone": return [3 /*break*/, 1783];
                        case "pi:PiClockCountdownDuotone": return [3 /*break*/, 1785];
                        case "pi:PiClockCounterClockwiseDuotone": return [3 /*break*/, 1787];
                        case "pi:PiClockDuotone": return [3 /*break*/, 1789];
                        case "pi:PiClockUserDuotone": return [3 /*break*/, 1791];
                        case "pi:PiClosedCaptioningDuotone": return [3 /*break*/, 1793];
                        case "pi:PiCloudArrowDownDuotone": return [3 /*break*/, 1795];
                        case "pi:PiCloudArrowUpDuotone": return [3 /*break*/, 1797];
                        case "pi:PiCloudCheckDuotone": return [3 /*break*/, 1799];
                        case "pi:PiCloudDuotone": return [3 /*break*/, 1801];
                        case "pi:PiCloudFogDuotone": return [3 /*break*/, 1803];
                        case "pi:PiCloudLightningDuotone": return [3 /*break*/, 1805];
                        case "pi:PiCloudMoonDuotone": return [3 /*break*/, 1807];
                        case "pi:PiCloudRainDuotone": return [3 /*break*/, 1809];
                        case "pi:PiCloudSlashDuotone": return [3 /*break*/, 1811];
                        case "pi:PiCloudSnowDuotone": return [3 /*break*/, 1813];
                        case "pi:PiCloudSunDuotone": return [3 /*break*/, 1815];
                        case "pi:PiCloudWarningDuotone": return [3 /*break*/, 1817];
                        case "pi:PiCloudXDuotone": return [3 /*break*/, 1819];
                        case "pi:PiCloverDuotone": return [3 /*break*/, 1821];
                        case "pi:PiClubDuotone": return [3 /*break*/, 1823];
                        case "pi:PiCoatHangerDuotone": return [3 /*break*/, 1825];
                        case "pi:PiCodaLogoDuotone": return [3 /*break*/, 1827];
                        case "pi:PiCodeBlockDuotone": return [3 /*break*/, 1829];
                        case "pi:PiCodeDuotone": return [3 /*break*/, 1831];
                        case "pi:PiCodeSimpleDuotone": return [3 /*break*/, 1833];
                        case "pi:PiCodepenLogoDuotone": return [3 /*break*/, 1835];
                        case "pi:PiCodesandboxLogoDuotone": return [3 /*break*/, 1837];
                        case "pi:PiCoffeeBeanDuotone": return [3 /*break*/, 1839];
                        case "pi:PiCoffeeDuotone": return [3 /*break*/, 1841];
                        case "pi:PiCoinDuotone": return [3 /*break*/, 1843];
                        case "pi:PiCoinVerticalDuotone": return [3 /*break*/, 1845];
                        case "pi:PiCoinsDuotone": return [3 /*break*/, 1847];
                        case "pi:PiColumnsDuotone": return [3 /*break*/, 1849];
                        case "pi:PiColumnsPlusLeftDuotone": return [3 /*break*/, 1851];
                        case "pi:PiColumnsPlusRightDuotone": return [3 /*break*/, 1853];
                        case "pi:PiCommandDuotone": return [3 /*break*/, 1855];
                        case "pi:PiCompassDuotone": return [3 /*break*/, 1857];
                        case "pi:PiCompassRoseDuotone": return [3 /*break*/, 1859];
                        case "pi:PiCompassToolDuotone": return [3 /*break*/, 1861];
                        case "pi:PiComputerTowerDuotone": return [3 /*break*/, 1863];
                        case "pi:PiConfettiDuotone": return [3 /*break*/, 1865];
                        case "pi:PiContactlessPaymentDuotone": return [3 /*break*/, 1867];
                        case "pi:PiControlDuotone": return [3 /*break*/, 1869];
                        case "pi:PiCookieDuotone": return [3 /*break*/, 1871];
                        case "pi:PiCookingPotDuotone": return [3 /*break*/, 1873];
                        case "pi:PiCopyDuotone": return [3 /*break*/, 1875];
                        case "pi:PiCopySimpleDuotone": return [3 /*break*/, 1877];
                        case "pi:PiCopyleftDuotone": return [3 /*break*/, 1879];
                        case "pi:PiCopyrightDuotone": return [3 /*break*/, 1881];
                        case "pi:PiCornersInDuotone": return [3 /*break*/, 1883];
                        case "pi:PiCornersOutDuotone": return [3 /*break*/, 1885];
                        case "pi:PiCouchDuotone": return [3 /*break*/, 1887];
                        case "pi:PiCourtBasketballDuotone": return [3 /*break*/, 1889];
                        case "pi:PiCowDuotone": return [3 /*break*/, 1891];
                        case "pi:PiCowboyHatDuotone": return [3 /*break*/, 1893];
                        case "pi:PiCpuDuotone": return [3 /*break*/, 1895];
                        case "pi:PiCraneDuotone": return [3 /*break*/, 1897];
                        case "pi:PiCraneTowerDuotone": return [3 /*break*/, 1899];
                        case "pi:PiCreditCardDuotone": return [3 /*break*/, 1901];
                        case "pi:PiCricketDuotone": return [3 /*break*/, 1903];
                        case "pi:PiCropDuotone": return [3 /*break*/, 1905];
                        case "pi:PiCrossDuotone": return [3 /*break*/, 1907];
                        case "pi:PiCrosshairDuotone": return [3 /*break*/, 1909];
                        case "pi:PiCrosshairSimpleDuotone": return [3 /*break*/, 1911];
                        case "pi:PiCrownCrossDuotone": return [3 /*break*/, 1913];
                        case "pi:PiCrownDuotone": return [3 /*break*/, 1915];
                        case "pi:PiCrownSimpleDuotone": return [3 /*break*/, 1917];
                        case "pi:PiCubeDuotone": return [3 /*break*/, 1919];
                        case "pi:PiCubeFocusDuotone": return [3 /*break*/, 1921];
                        case "pi:PiCubeTransparentDuotone": return [3 /*break*/, 1923];
                        case "pi:PiCurrencyBtcDuotone": return [3 /*break*/, 1925];
                        case "pi:PiCurrencyCircleDollarDuotone": return [3 /*break*/, 1927];
                        case "pi:PiCurrencyCnyDuotone": return [3 /*break*/, 1929];
                        case "pi:PiCurrencyDollarDuotone": return [3 /*break*/, 1931];
                        case "pi:PiCurrencyDollarSimpleDuotone": return [3 /*break*/, 1933];
                        case "pi:PiCurrencyEthDuotone": return [3 /*break*/, 1935];
                        case "pi:PiCurrencyEurDuotone": return [3 /*break*/, 1937];
                        case "pi:PiCurrencyGbpDuotone": return [3 /*break*/, 1939];
                        case "pi:PiCurrencyInrDuotone": return [3 /*break*/, 1941];
                        case "pi:PiCurrencyJpyDuotone": return [3 /*break*/, 1943];
                        case "pi:PiCurrencyKrwDuotone": return [3 /*break*/, 1945];
                        case "pi:PiCurrencyKztDuotone": return [3 /*break*/, 1947];
                        case "pi:PiCurrencyNgnDuotone": return [3 /*break*/, 1949];
                        case "pi:PiCurrencyRubDuotone": return [3 /*break*/, 1951];
                        case "pi:PiCursorClickDuotone": return [3 /*break*/, 1953];
                        case "pi:PiCursorDuotone": return [3 /*break*/, 1955];
                        case "pi:PiCursorTextDuotone": return [3 /*break*/, 1957];
                        case "pi:PiCylinderDuotone": return [3 /*break*/, 1959];
                        case "pi:PiDatabaseDuotone": return [3 /*break*/, 1961];
                        case "pi:PiDeskDuotone": return [3 /*break*/, 1963];
                        case "pi:PiDesktopDuotone": return [3 /*break*/, 1965];
                        case "pi:PiDesktopTowerDuotone": return [3 /*break*/, 1967];
                        case "pi:PiDetectiveDuotone": return [3 /*break*/, 1969];
                        case "pi:PiDevToLogoDuotone": return [3 /*break*/, 1971];
                        case "pi:PiDeviceMobileCameraDuotone": return [3 /*break*/, 1973];
                        case "pi:PiDeviceMobileDuotone": return [3 /*break*/, 1975];
                        case "pi:PiDeviceMobileSlashDuotone": return [3 /*break*/, 1977];
                        case "pi:PiDeviceMobileSpeakerDuotone": return [3 /*break*/, 1979];
                        case "pi:PiDeviceRotateDuotone": return [3 /*break*/, 1981];
                        case "pi:PiDeviceTabletCameraDuotone": return [3 /*break*/, 1983];
                        case "pi:PiDeviceTabletDuotone": return [3 /*break*/, 1985];
                        case "pi:PiDeviceTabletSpeakerDuotone": return [3 /*break*/, 1987];
                        case "pi:PiDevicesDuotone": return [3 /*break*/, 1989];
                        case "pi:PiDiamondDuotone": return [3 /*break*/, 1991];
                        case "pi:PiDiamondsFourDuotone": return [3 /*break*/, 1993];
                        case "pi:PiDiceFiveDuotone": return [3 /*break*/, 1995];
                        case "pi:PiDiceFourDuotone": return [3 /*break*/, 1997];
                        case "pi:PiDiceOneDuotone": return [3 /*break*/, 1999];
                    }
                    return [3 /*break*/, 2001];
                case 1: return [4 /*yield*/, import("react-icons/pi")];
                case 2:
                    PiPackageBold = (_b.sent()).PiPackageBold;
                    return [2 /*return*/, PiPackageBold];
                case 3: return [4 /*yield*/, import("react-icons/pi")];
                case 4:
                    PiPaintBrushBold = (_b.sent()).PiPaintBrushBold;
                    return [2 /*return*/, PiPaintBrushBold];
                case 5: return [4 /*yield*/, import("react-icons/pi")];
                case 6:
                    PiPaintBrushBroadBold = (_b.sent()).PiPaintBrushBroadBold;
                    return [2 /*return*/, PiPaintBrushBroadBold];
                case 7: return [4 /*yield*/, import("react-icons/pi")];
                case 8:
                    PiPaintBrushHouseholdBold = (_b.sent()).PiPaintBrushHouseholdBold;
                    return [2 /*return*/, PiPaintBrushHouseholdBold];
                case 9: return [4 /*yield*/, import("react-icons/pi")];
                case 10:
                    PiPaintBucketBold = (_b.sent()).PiPaintBucketBold;
                    return [2 /*return*/, PiPaintBucketBold];
                case 11: return [4 /*yield*/, import("react-icons/pi")];
                case 12:
                    PiPaintRollerBold = (_b.sent()).PiPaintRollerBold;
                    return [2 /*return*/, PiPaintRollerBold];
                case 13: return [4 /*yield*/, import("react-icons/pi")];
                case 14:
                    PiPaletteBold = (_b.sent()).PiPaletteBold;
                    return [2 /*return*/, PiPaletteBold];
                case 15: return [4 /*yield*/, import("react-icons/pi")];
                case 16:
                    PiPanoramaBold = (_b.sent()).PiPanoramaBold;
                    return [2 /*return*/, PiPanoramaBold];
                case 17: return [4 /*yield*/, import("react-icons/pi")];
                case 18:
                    PiPantsBold = (_b.sent()).PiPantsBold;
                    return [2 /*return*/, PiPantsBold];
                case 19: return [4 /*yield*/, import("react-icons/pi")];
                case 20:
                    PiPaperPlaneBold = (_b.sent()).PiPaperPlaneBold;
                    return [2 /*return*/, PiPaperPlaneBold];
                case 21: return [4 /*yield*/, import("react-icons/pi")];
                case 22:
                    PiPaperPlaneRightBold = (_b.sent()).PiPaperPlaneRightBold;
                    return [2 /*return*/, PiPaperPlaneRightBold];
                case 23: return [4 /*yield*/, import("react-icons/pi")];
                case 24:
                    PiPaperPlaneTiltBold = (_b.sent()).PiPaperPlaneTiltBold;
                    return [2 /*return*/, PiPaperPlaneTiltBold];
                case 25: return [4 /*yield*/, import("react-icons/pi")];
                case 26:
                    PiPaperclipBold = (_b.sent()).PiPaperclipBold;
                    return [2 /*return*/, PiPaperclipBold];
                case 27: return [4 /*yield*/, import("react-icons/pi")];
                case 28:
                    PiPaperclipHorizontalBold = (_b.sent()).PiPaperclipHorizontalBold;
                    return [2 /*return*/, PiPaperclipHorizontalBold];
                case 29: return [4 /*yield*/, import("react-icons/pi")];
                case 30:
                    PiParachuteBold = (_b.sent()).PiParachuteBold;
                    return [2 /*return*/, PiParachuteBold];
                case 31: return [4 /*yield*/, import("react-icons/pi")];
                case 32:
                    PiParagraphBold = (_b.sent()).PiParagraphBold;
                    return [2 /*return*/, PiParagraphBold];
                case 33: return [4 /*yield*/, import("react-icons/pi")];
                case 34:
                    PiParallelogramBold = (_b.sent()).PiParallelogramBold;
                    return [2 /*return*/, PiParallelogramBold];
                case 35: return [4 /*yield*/, import("react-icons/pi")];
                case 36:
                    PiParkBold = (_b.sent()).PiParkBold;
                    return [2 /*return*/, PiParkBold];
                case 37: return [4 /*yield*/, import("react-icons/pi")];
                case 38:
                    PiPasswordBold = (_b.sent()).PiPasswordBold;
                    return [2 /*return*/, PiPasswordBold];
                case 39: return [4 /*yield*/, import("react-icons/pi")];
                case 40:
                    PiPathBold = (_b.sent()).PiPathBold;
                    return [2 /*return*/, PiPathBold];
                case 41: return [4 /*yield*/, import("react-icons/pi")];
                case 42:
                    PiPatreonLogoBold = (_b.sent()).PiPatreonLogoBold;
                    return [2 /*return*/, PiPatreonLogoBold];
                case 43: return [4 /*yield*/, import("react-icons/pi")];
                case 44:
                    PiPauseBold = (_b.sent()).PiPauseBold;
                    return [2 /*return*/, PiPauseBold];
                case 45: return [4 /*yield*/, import("react-icons/pi")];
                case 46:
                    PiPauseCircleBold = (_b.sent()).PiPauseCircleBold;
                    return [2 /*return*/, PiPauseCircleBold];
                case 47: return [4 /*yield*/, import("react-icons/pi")];
                case 48:
                    PiPawPrintBold = (_b.sent()).PiPawPrintBold;
                    return [2 /*return*/, PiPawPrintBold];
                case 49: return [4 /*yield*/, import("react-icons/pi")];
                case 50:
                    PiPaypalLogoBold = (_b.sent()).PiPaypalLogoBold;
                    return [2 /*return*/, PiPaypalLogoBold];
                case 51: return [4 /*yield*/, import("react-icons/pi")];
                case 52:
                    PiPeaceBold = (_b.sent()).PiPeaceBold;
                    return [2 /*return*/, PiPeaceBold];
                case 53: return [4 /*yield*/, import("react-icons/pi")];
                case 54:
                    PiPenBold = (_b.sent()).PiPenBold;
                    return [2 /*return*/, PiPenBold];
                case 55: return [4 /*yield*/, import("react-icons/pi")];
                case 56:
                    PiPenNibBold = (_b.sent()).PiPenNibBold;
                    return [2 /*return*/, PiPenNibBold];
                case 57: return [4 /*yield*/, import("react-icons/pi")];
                case 58:
                    PiPenNibStraightBold = (_b.sent()).PiPenNibStraightBold;
                    return [2 /*return*/, PiPenNibStraightBold];
                case 59: return [4 /*yield*/, import("react-icons/pi")];
                case 60:
                    PiPencilBold = (_b.sent()).PiPencilBold;
                    return [2 /*return*/, PiPencilBold];
                case 61: return [4 /*yield*/, import("react-icons/pi")];
                case 62:
                    PiPencilCircleBold = (_b.sent()).PiPencilCircleBold;
                    return [2 /*return*/, PiPencilCircleBold];
                case 63: return [4 /*yield*/, import("react-icons/pi")];
                case 64:
                    PiPencilLineBold = (_b.sent()).PiPencilLineBold;
                    return [2 /*return*/, PiPencilLineBold];
                case 65: return [4 /*yield*/, import("react-icons/pi")];
                case 66:
                    PiPencilRulerBold = (_b.sent()).PiPencilRulerBold;
                    return [2 /*return*/, PiPencilRulerBold];
                case 67: return [4 /*yield*/, import("react-icons/pi")];
                case 68:
                    PiPencilSimpleBold = (_b.sent()).PiPencilSimpleBold;
                    return [2 /*return*/, PiPencilSimpleBold];
                case 69: return [4 /*yield*/, import("react-icons/pi")];
                case 70:
                    PiPencilSimpleLineBold = (_b.sent()).PiPencilSimpleLineBold;
                    return [2 /*return*/, PiPencilSimpleLineBold];
                case 71: return [4 /*yield*/, import("react-icons/pi")];
                case 72:
                    PiPencilSimpleSlashBold = (_b.sent()).PiPencilSimpleSlashBold;
                    return [2 /*return*/, PiPencilSimpleSlashBold];
                case 73: return [4 /*yield*/, import("react-icons/pi")];
                case 74:
                    PiPencilSlashBold = (_b.sent()).PiPencilSlashBold;
                    return [2 /*return*/, PiPencilSlashBold];
                case 75: return [4 /*yield*/, import("react-icons/pi")];
                case 76:
                    PiPentagonBold = (_b.sent()).PiPentagonBold;
                    return [2 /*return*/, PiPentagonBold];
                case 77: return [4 /*yield*/, import("react-icons/pi")];
                case 78:
                    PiPentagramBold = (_b.sent()).PiPentagramBold;
                    return [2 /*return*/, PiPentagramBold];
                case 79: return [4 /*yield*/, import("react-icons/pi")];
                case 80:
                    PiPepperBold = (_b.sent()).PiPepperBold;
                    return [2 /*return*/, PiPepperBold];
                case 81: return [4 /*yield*/, import("react-icons/pi")];
                case 82:
                    PiPercentBold = (_b.sent()).PiPercentBold;
                    return [2 /*return*/, PiPercentBold];
                case 83: return [4 /*yield*/, import("react-icons/pi")];
                case 84:
                    PiPersonArmsSpreadBold = (_b.sent()).PiPersonArmsSpreadBold;
                    return [2 /*return*/, PiPersonArmsSpreadBold];
                case 85: return [4 /*yield*/, import("react-icons/pi")];
                case 86:
                    PiPersonBold = (_b.sent()).PiPersonBold;
                    return [2 /*return*/, PiPersonBold];
                case 87: return [4 /*yield*/, import("react-icons/pi")];
                case 88:
                    PiPersonSimpleBikeBold = (_b.sent()).PiPersonSimpleBikeBold;
                    return [2 /*return*/, PiPersonSimpleBikeBold];
                case 89: return [4 /*yield*/, import("react-icons/pi")];
                case 90:
                    PiPersonSimpleBold = (_b.sent()).PiPersonSimpleBold;
                    return [2 /*return*/, PiPersonSimpleBold];
                case 91: return [4 /*yield*/, import("react-icons/pi")];
                case 92:
                    PiPersonSimpleCircleBold = (_b.sent()).PiPersonSimpleCircleBold;
                    return [2 /*return*/, PiPersonSimpleCircleBold];
                case 93: return [4 /*yield*/, import("react-icons/pi")];
                case 94:
                    PiPersonSimpleHikeBold = (_b.sent()).PiPersonSimpleHikeBold;
                    return [2 /*return*/, PiPersonSimpleHikeBold];
                case 95: return [4 /*yield*/, import("react-icons/pi")];
                case 96:
                    PiPersonSimpleRunBold = (_b.sent()).PiPersonSimpleRunBold;
                    return [2 /*return*/, PiPersonSimpleRunBold];
                case 97: return [4 /*yield*/, import("react-icons/pi")];
                case 98:
                    PiPersonSimpleSkiBold = (_b.sent()).PiPersonSimpleSkiBold;
                    return [2 /*return*/, PiPersonSimpleSkiBold];
                case 99: return [4 /*yield*/, import("react-icons/pi")];
                case 100:
                    PiPersonSimpleSnowboardBold = (_b.sent()).PiPersonSimpleSnowboardBold;
                    return [2 /*return*/, PiPersonSimpleSnowboardBold];
                case 101: return [4 /*yield*/, import("react-icons/pi")];
                case 102:
                    PiPersonSimpleSwimBold = (_b.sent()).PiPersonSimpleSwimBold;
                    return [2 /*return*/, PiPersonSimpleSwimBold];
                case 103: return [4 /*yield*/, import("react-icons/pi")];
                case 104:
                    PiPersonSimpleTaiChiBold = (_b.sent()).PiPersonSimpleTaiChiBold;
                    return [2 /*return*/, PiPersonSimpleTaiChiBold];
                case 105: return [4 /*yield*/, import("react-icons/pi")];
                case 106:
                    PiPersonSimpleThrowBold = (_b.sent()).PiPersonSimpleThrowBold;
                    return [2 /*return*/, PiPersonSimpleThrowBold];
                case 107: return [4 /*yield*/, import("react-icons/pi")];
                case 108:
                    PiPersonSimpleWalkBold = (_b.sent()).PiPersonSimpleWalkBold;
                    return [2 /*return*/, PiPersonSimpleWalkBold];
                case 109: return [4 /*yield*/, import("react-icons/pi")];
                case 110:
                    PiPerspectiveBold = (_b.sent()).PiPerspectiveBold;
                    return [2 /*return*/, PiPerspectiveBold];
                case 111: return [4 /*yield*/, import("react-icons/pi")];
                case 112:
                    PiPhoneBold = (_b.sent()).PiPhoneBold;
                    return [2 /*return*/, PiPhoneBold];
                case 113: return [4 /*yield*/, import("react-icons/pi")];
                case 114:
                    PiPhoneCallBold = (_b.sent()).PiPhoneCallBold;
                    return [2 /*return*/, PiPhoneCallBold];
                case 115: return [4 /*yield*/, import("react-icons/pi")];
                case 116:
                    PiPhoneDisconnectBold = (_b.sent()).PiPhoneDisconnectBold;
                    return [2 /*return*/, PiPhoneDisconnectBold];
                case 117: return [4 /*yield*/, import("react-icons/pi")];
                case 118:
                    PiPhoneIncomingBold = (_b.sent()).PiPhoneIncomingBold;
                    return [2 /*return*/, PiPhoneIncomingBold];
                case 119: return [4 /*yield*/, import("react-icons/pi")];
                case 120:
                    PiPhoneListBold = (_b.sent()).PiPhoneListBold;
                    return [2 /*return*/, PiPhoneListBold];
                case 121: return [4 /*yield*/, import("react-icons/pi")];
                case 122:
                    PiPhoneOutgoingBold = (_b.sent()).PiPhoneOutgoingBold;
                    return [2 /*return*/, PiPhoneOutgoingBold];
                case 123: return [4 /*yield*/, import("react-icons/pi")];
                case 124:
                    PiPhonePauseBold = (_b.sent()).PiPhonePauseBold;
                    return [2 /*return*/, PiPhonePauseBold];
                case 125: return [4 /*yield*/, import("react-icons/pi")];
                case 126:
                    PiPhonePlusBold = (_b.sent()).PiPhonePlusBold;
                    return [2 /*return*/, PiPhonePlusBold];
                case 127: return [4 /*yield*/, import("react-icons/pi")];
                case 128:
                    PiPhoneSlashBold = (_b.sent()).PiPhoneSlashBold;
                    return [2 /*return*/, PiPhoneSlashBold];
                case 129: return [4 /*yield*/, import("react-icons/pi")];
                case 130:
                    PiPhoneTransferBold = (_b.sent()).PiPhoneTransferBold;
                    return [2 /*return*/, PiPhoneTransferBold];
                case 131: return [4 /*yield*/, import("react-icons/pi")];
                case 132:
                    PiPhoneXBold = (_b.sent()).PiPhoneXBold;
                    return [2 /*return*/, PiPhoneXBold];
                case 133: return [4 /*yield*/, import("react-icons/pi")];
                case 134:
                    PiPhosphorLogoBold = (_b.sent()).PiPhosphorLogoBold;
                    return [2 /*return*/, PiPhosphorLogoBold];
                case 135: return [4 /*yield*/, import("react-icons/pi")];
                case 136:
                    PiPiBold = (_b.sent()).PiPiBold;
                    return [2 /*return*/, PiPiBold];
                case 137: return [4 /*yield*/, import("react-icons/pi")];
                case 138:
                    PiPianoKeysBold = (_b.sent()).PiPianoKeysBold;
                    return [2 /*return*/, PiPianoKeysBold];
                case 139: return [4 /*yield*/, import("react-icons/pi")];
                case 140:
                    PiPicnicTableBold = (_b.sent()).PiPicnicTableBold;
                    return [2 /*return*/, PiPicnicTableBold];
                case 141: return [4 /*yield*/, import("react-icons/pi")];
                case 142:
                    PiPictureInPictureBold = (_b.sent()).PiPictureInPictureBold;
                    return [2 /*return*/, PiPictureInPictureBold];
                case 143: return [4 /*yield*/, import("react-icons/pi")];
                case 144:
                    PiPiggyBankBold = (_b.sent()).PiPiggyBankBold;
                    return [2 /*return*/, PiPiggyBankBold];
                case 145: return [4 /*yield*/, import("react-icons/pi")];
                case 146:
                    PiPillBold = (_b.sent()).PiPillBold;
                    return [2 /*return*/, PiPillBold];
                case 147: return [4 /*yield*/, import("react-icons/pi")];
                case 148:
                    PiPingPongBold = (_b.sent()).PiPingPongBold;
                    return [2 /*return*/, PiPingPongBold];
                case 149: return [4 /*yield*/, import("react-icons/pi")];
                case 150:
                    PiPintGlassBold = (_b.sent()).PiPintGlassBold;
                    return [2 /*return*/, PiPintGlassBold];
                case 151: return [4 /*yield*/, import("react-icons/pi")];
                case 152:
                    PiPinterestLogoBold = (_b.sent()).PiPinterestLogoBold;
                    return [2 /*return*/, PiPinterestLogoBold];
                case 153: return [4 /*yield*/, import("react-icons/pi")];
                case 154:
                    PiPinwheelBold = (_b.sent()).PiPinwheelBold;
                    return [2 /*return*/, PiPinwheelBold];
                case 155: return [4 /*yield*/, import("react-icons/pi")];
                case 156:
                    PiPipeBold = (_b.sent()).PiPipeBold;
                    return [2 /*return*/, PiPipeBold];
                case 157: return [4 /*yield*/, import("react-icons/pi")];
                case 158:
                    PiPipeWrenchBold = (_b.sent()).PiPipeWrenchBold;
                    return [2 /*return*/, PiPipeWrenchBold];
                case 159: return [4 /*yield*/, import("react-icons/pi")];
                case 160:
                    PiPixLogoBold = (_b.sent()).PiPixLogoBold;
                    return [2 /*return*/, PiPixLogoBold];
                case 161: return [4 /*yield*/, import("react-icons/pi")];
                case 162:
                    PiPizzaBold = (_b.sent()).PiPizzaBold;
                    return [2 /*return*/, PiPizzaBold];
                case 163: return [4 /*yield*/, import("react-icons/pi")];
                case 164:
                    PiPlaceholderBold = (_b.sent()).PiPlaceholderBold;
                    return [2 /*return*/, PiPlaceholderBold];
                case 165: return [4 /*yield*/, import("react-icons/pi")];
                case 166:
                    PiPlanetBold = (_b.sent()).PiPlanetBold;
                    return [2 /*return*/, PiPlanetBold];
                case 167: return [4 /*yield*/, import("react-icons/pi")];
                case 168:
                    PiPlantBold = (_b.sent()).PiPlantBold;
                    return [2 /*return*/, PiPlantBold];
                case 169: return [4 /*yield*/, import("react-icons/pi")];
                case 170:
                    PiPlayBold = (_b.sent()).PiPlayBold;
                    return [2 /*return*/, PiPlayBold];
                case 171: return [4 /*yield*/, import("react-icons/pi")];
                case 172:
                    PiPlayCircleBold = (_b.sent()).PiPlayCircleBold;
                    return [2 /*return*/, PiPlayCircleBold];
                case 173: return [4 /*yield*/, import("react-icons/pi")];
                case 174:
                    PiPlayPauseBold = (_b.sent()).PiPlayPauseBold;
                    return [2 /*return*/, PiPlayPauseBold];
                case 175: return [4 /*yield*/, import("react-icons/pi")];
                case 176:
                    PiPlaylistBold = (_b.sent()).PiPlaylistBold;
                    return [2 /*return*/, PiPlaylistBold];
                case 177: return [4 /*yield*/, import("react-icons/pi")];
                case 178:
                    PiPlugBold = (_b.sent()).PiPlugBold;
                    return [2 /*return*/, PiPlugBold];
                case 179: return [4 /*yield*/, import("react-icons/pi")];
                case 180:
                    PiPlugChargingBold = (_b.sent()).PiPlugChargingBold;
                    return [2 /*return*/, PiPlugChargingBold];
                case 181: return [4 /*yield*/, import("react-icons/pi")];
                case 182:
                    PiPlugsBold = (_b.sent()).PiPlugsBold;
                    return [2 /*return*/, PiPlugsBold];
                case 183: return [4 /*yield*/, import("react-icons/pi")];
                case 184:
                    PiPlugsConnectedBold = (_b.sent()).PiPlugsConnectedBold;
                    return [2 /*return*/, PiPlugsConnectedBold];
                case 185: return [4 /*yield*/, import("react-icons/pi")];
                case 186:
                    PiPlusBold = (_b.sent()).PiPlusBold;
                    return [2 /*return*/, PiPlusBold];
                case 187: return [4 /*yield*/, import("react-icons/pi")];
                case 188:
                    PiPlusCircleBold = (_b.sent()).PiPlusCircleBold;
                    return [2 /*return*/, PiPlusCircleBold];
                case 189: return [4 /*yield*/, import("react-icons/pi")];
                case 190:
                    PiPlusMinusBold = (_b.sent()).PiPlusMinusBold;
                    return [2 /*return*/, PiPlusMinusBold];
                case 191: return [4 /*yield*/, import("react-icons/pi")];
                case 192:
                    PiPlusSquareBold = (_b.sent()).PiPlusSquareBold;
                    return [2 /*return*/, PiPlusSquareBold];
                case 193: return [4 /*yield*/, import("react-icons/pi")];
                case 194:
                    PiPokerChipBold = (_b.sent()).PiPokerChipBold;
                    return [2 /*return*/, PiPokerChipBold];
                case 195: return [4 /*yield*/, import("react-icons/pi")];
                case 196:
                    PiPoliceCarBold = (_b.sent()).PiPoliceCarBold;
                    return [2 /*return*/, PiPoliceCarBold];
                case 197: return [4 /*yield*/, import("react-icons/pi")];
                case 198:
                    PiPolygonBold = (_b.sent()).PiPolygonBold;
                    return [2 /*return*/, PiPolygonBold];
                case 199: return [4 /*yield*/, import("react-icons/pi")];
                case 200:
                    PiPopcornBold = (_b.sent()).PiPopcornBold;
                    return [2 /*return*/, PiPopcornBold];
                case 201: return [4 /*yield*/, import("react-icons/pi")];
                case 202:
                    PiPopsicleBold = (_b.sent()).PiPopsicleBold;
                    return [2 /*return*/, PiPopsicleBold];
                case 203: return [4 /*yield*/, import("react-icons/pi")];
                case 204:
                    PiPottedPlantBold = (_b.sent()).PiPottedPlantBold;
                    return [2 /*return*/, PiPottedPlantBold];
                case 205: return [4 /*yield*/, import("react-icons/pi")];
                case 206:
                    PiPowerBold = (_b.sent()).PiPowerBold;
                    return [2 /*return*/, PiPowerBold];
                case 207: return [4 /*yield*/, import("react-icons/pi")];
                case 208:
                    PiPrescriptionBold = (_b.sent()).PiPrescriptionBold;
                    return [2 /*return*/, PiPrescriptionBold];
                case 209: return [4 /*yield*/, import("react-icons/pi")];
                case 210:
                    PiPresentationBold = (_b.sent()).PiPresentationBold;
                    return [2 /*return*/, PiPresentationBold];
                case 211: return [4 /*yield*/, import("react-icons/pi")];
                case 212:
                    PiPresentationChartBold = (_b.sent()).PiPresentationChartBold;
                    return [2 /*return*/, PiPresentationChartBold];
                case 213: return [4 /*yield*/, import("react-icons/pi")];
                case 214:
                    PiPrinterBold = (_b.sent()).PiPrinterBold;
                    return [2 /*return*/, PiPrinterBold];
                case 215: return [4 /*yield*/, import("react-icons/pi")];
                case 216:
                    PiProhibitBold = (_b.sent()).PiProhibitBold;
                    return [2 /*return*/, PiProhibitBold];
                case 217: return [4 /*yield*/, import("react-icons/pi")];
                case 218:
                    PiProhibitInsetBold = (_b.sent()).PiProhibitInsetBold;
                    return [2 /*return*/, PiProhibitInsetBold];
                case 219: return [4 /*yield*/, import("react-icons/pi")];
                case 220:
                    PiProjectorScreenBold = (_b.sent()).PiProjectorScreenBold;
                    return [2 /*return*/, PiProjectorScreenBold];
                case 221: return [4 /*yield*/, import("react-icons/pi")];
                case 222:
                    PiProjectorScreenChartBold = (_b.sent()).PiProjectorScreenChartBold;
                    return [2 /*return*/, PiProjectorScreenChartBold];
                case 223: return [4 /*yield*/, import("react-icons/pi")];
                case 224:
                    PiPulseBold = (_b.sent()).PiPulseBold;
                    return [2 /*return*/, PiPulseBold];
                case 225: return [4 /*yield*/, import("react-icons/pi")];
                case 226:
                    PiPushPinBold = (_b.sent()).PiPushPinBold;
                    return [2 /*return*/, PiPushPinBold];
                case 227: return [4 /*yield*/, import("react-icons/pi")];
                case 228:
                    PiPushPinSimpleBold = (_b.sent()).PiPushPinSimpleBold;
                    return [2 /*return*/, PiPushPinSimpleBold];
                case 229: return [4 /*yield*/, import("react-icons/pi")];
                case 230:
                    PiPushPinSimpleSlashBold = (_b.sent()).PiPushPinSimpleSlashBold;
                    return [2 /*return*/, PiPushPinSimpleSlashBold];
                case 231: return [4 /*yield*/, import("react-icons/pi")];
                case 232:
                    PiPushPinSlashBold = (_b.sent()).PiPushPinSlashBold;
                    return [2 /*return*/, PiPushPinSlashBold];
                case 233: return [4 /*yield*/, import("react-icons/pi")];
                case 234:
                    PiPuzzlePieceBold = (_b.sent()).PiPuzzlePieceBold;
                    return [2 /*return*/, PiPuzzlePieceBold];
                case 235: return [4 /*yield*/, import("react-icons/pi")];
                case 236:
                    PiQrCodeBold = (_b.sent()).PiQrCodeBold;
                    return [2 /*return*/, PiQrCodeBold];
                case 237: return [4 /*yield*/, import("react-icons/pi")];
                case 238:
                    PiQuestionBold = (_b.sent()).PiQuestionBold;
                    return [2 /*return*/, PiQuestionBold];
                case 239: return [4 /*yield*/, import("react-icons/pi")];
                case 240:
                    PiQuestionMarkBold = (_b.sent()).PiQuestionMarkBold;
                    return [2 /*return*/, PiQuestionMarkBold];
                case 241: return [4 /*yield*/, import("react-icons/pi")];
                case 242:
                    PiQueueBold = (_b.sent()).PiQueueBold;
                    return [2 /*return*/, PiQueueBold];
                case 243: return [4 /*yield*/, import("react-icons/pi")];
                case 244:
                    PiQuotesBold = (_b.sent()).PiQuotesBold;
                    return [2 /*return*/, PiQuotesBold];
                case 245: return [4 /*yield*/, import("react-icons/pi")];
                case 246:
                    PiRabbitBold = (_b.sent()).PiRabbitBold;
                    return [2 /*return*/, PiRabbitBold];
                case 247: return [4 /*yield*/, import("react-icons/pi")];
                case 248:
                    PiRacquetBold = (_b.sent()).PiRacquetBold;
                    return [2 /*return*/, PiRacquetBold];
                case 249: return [4 /*yield*/, import("react-icons/pi")];
                case 250:
                    PiRadicalBold = (_b.sent()).PiRadicalBold;
                    return [2 /*return*/, PiRadicalBold];
                case 251: return [4 /*yield*/, import("react-icons/pi")];
                case 252:
                    PiRadioBold = (_b.sent()).PiRadioBold;
                    return [2 /*return*/, PiRadioBold];
                case 253: return [4 /*yield*/, import("react-icons/pi")];
                case 254:
                    PiRadioButtonBold = (_b.sent()).PiRadioButtonBold;
                    return [2 /*return*/, PiRadioButtonBold];
                case 255: return [4 /*yield*/, import("react-icons/pi")];
                case 256:
                    PiRadioactiveBold = (_b.sent()).PiRadioactiveBold;
                    return [2 /*return*/, PiRadioactiveBold];
                case 257: return [4 /*yield*/, import("react-icons/pi")];
                case 258:
                    PiRainbowBold = (_b.sent()).PiRainbowBold;
                    return [2 /*return*/, PiRainbowBold];
                case 259: return [4 /*yield*/, import("react-icons/pi")];
                case 260:
                    PiRainbowCloudBold = (_b.sent()).PiRainbowCloudBold;
                    return [2 /*return*/, PiRainbowCloudBold];
                case 261: return [4 /*yield*/, import("react-icons/pi")];
                case 262:
                    PiRankingBold = (_b.sent()).PiRankingBold;
                    return [2 /*return*/, PiRankingBold];
                case 263: return [4 /*yield*/, import("react-icons/pi")];
                case 264:
                    PiReadCvLogoBold = (_b.sent()).PiReadCvLogoBold;
                    return [2 /*return*/, PiReadCvLogoBold];
                case 265: return [4 /*yield*/, import("react-icons/pi")];
                case 266:
                    PiReceiptBold = (_b.sent()).PiReceiptBold;
                    return [2 /*return*/, PiReceiptBold];
                case 267: return [4 /*yield*/, import("react-icons/pi")];
                case 268:
                    PiReceiptXBold = (_b.sent()).PiReceiptXBold;
                    return [2 /*return*/, PiReceiptXBold];
                case 269: return [4 /*yield*/, import("react-icons/pi")];
                case 270:
                    PiRecordBold = (_b.sent()).PiRecordBold;
                    return [2 /*return*/, PiRecordBold];
                case 271: return [4 /*yield*/, import("react-icons/pi")];
                case 272:
                    PiRectangleBold = (_b.sent()).PiRectangleBold;
                    return [2 /*return*/, PiRectangleBold];
                case 273: return [4 /*yield*/, import("react-icons/pi")];
                case 274:
                    PiRectangleDashedBold = (_b.sent()).PiRectangleDashedBold;
                    return [2 /*return*/, PiRectangleDashedBold];
                case 275: return [4 /*yield*/, import("react-icons/pi")];
                case 276:
                    PiRecycleBold = (_b.sent()).PiRecycleBold;
                    return [2 /*return*/, PiRecycleBold];
                case 277: return [4 /*yield*/, import("react-icons/pi")];
                case 278:
                    PiRedditLogoBold = (_b.sent()).PiRedditLogoBold;
                    return [2 /*return*/, PiRedditLogoBold];
                case 279: return [4 /*yield*/, import("react-icons/pi")];
                case 280:
                    PiRepeatBold = (_b.sent()).PiRepeatBold;
                    return [2 /*return*/, PiRepeatBold];
                case 281: return [4 /*yield*/, import("react-icons/pi")];
                case 282:
                    PiRepeatOnceBold = (_b.sent()).PiRepeatOnceBold;
                    return [2 /*return*/, PiRepeatOnceBold];
                case 283: return [4 /*yield*/, import("react-icons/pi")];
                case 284:
                    PiReplitLogoBold = (_b.sent()).PiReplitLogoBold;
                    return [2 /*return*/, PiReplitLogoBold];
                case 285: return [4 /*yield*/, import("react-icons/pi")];
                case 286:
                    PiResizeBold = (_b.sent()).PiResizeBold;
                    return [2 /*return*/, PiResizeBold];
                case 287: return [4 /*yield*/, import("react-icons/pi")];
                case 288:
                    PiRewindBold = (_b.sent()).PiRewindBold;
                    return [2 /*return*/, PiRewindBold];
                case 289: return [4 /*yield*/, import("react-icons/pi")];
                case 290:
                    PiRewindCircleBold = (_b.sent()).PiRewindCircleBold;
                    return [2 /*return*/, PiRewindCircleBold];
                case 291: return [4 /*yield*/, import("react-icons/pi")];
                case 292:
                    PiRoadHorizonBold = (_b.sent()).PiRoadHorizonBold;
                    return [2 /*return*/, PiRoadHorizonBold];
                case 293: return [4 /*yield*/, import("react-icons/pi")];
                case 294:
                    PiRobotBold = (_b.sent()).PiRobotBold;
                    return [2 /*return*/, PiRobotBold];
                case 295: return [4 /*yield*/, import("react-icons/pi")];
                case 296:
                    PiRocketBold = (_b.sent()).PiRocketBold;
                    return [2 /*return*/, PiRocketBold];
                case 297: return [4 /*yield*/, import("react-icons/pi")];
                case 298:
                    PiRocketLaunchBold = (_b.sent()).PiRocketLaunchBold;
                    return [2 /*return*/, PiRocketLaunchBold];
                case 299: return [4 /*yield*/, import("react-icons/pi")];
                case 300:
                    PiRowsBold = (_b.sent()).PiRowsBold;
                    return [2 /*return*/, PiRowsBold];
                case 301: return [4 /*yield*/, import("react-icons/pi")];
                case 302:
                    PiRowsPlusBottomBold = (_b.sent()).PiRowsPlusBottomBold;
                    return [2 /*return*/, PiRowsPlusBottomBold];
                case 303: return [4 /*yield*/, import("react-icons/pi")];
                case 304:
                    PiRowsPlusTopBold = (_b.sent()).PiRowsPlusTopBold;
                    return [2 /*return*/, PiRowsPlusTopBold];
                case 305: return [4 /*yield*/, import("react-icons/pi")];
                case 306:
                    PiRssBold = (_b.sent()).PiRssBold;
                    return [2 /*return*/, PiRssBold];
                case 307: return [4 /*yield*/, import("react-icons/pi")];
                case 308:
                    PiRssSimpleBold = (_b.sent()).PiRssSimpleBold;
                    return [2 /*return*/, PiRssSimpleBold];
                case 309: return [4 /*yield*/, import("react-icons/pi")];
                case 310:
                    PiRugBold = (_b.sent()).PiRugBold;
                    return [2 /*return*/, PiRugBold];
                case 311: return [4 /*yield*/, import("react-icons/pi")];
                case 312:
                    PiRulerBold = (_b.sent()).PiRulerBold;
                    return [2 /*return*/, PiRulerBold];
                case 313: return [4 /*yield*/, import("react-icons/pi")];
                case 314:
                    PiSailboatBold = (_b.sent()).PiSailboatBold;
                    return [2 /*return*/, PiSailboatBold];
                case 315: return [4 /*yield*/, import("react-icons/pi")];
                case 316:
                    PiScalesBold = (_b.sent()).PiScalesBold;
                    return [2 /*return*/, PiScalesBold];
                case 317: return [4 /*yield*/, import("react-icons/pi")];
                case 318:
                    PiScanBold = (_b.sent()).PiScanBold;
                    return [2 /*return*/, PiScanBold];
                case 319: return [4 /*yield*/, import("react-icons/pi")];
                case 320:
                    PiScanSmileyBold = (_b.sent()).PiScanSmileyBold;
                    return [2 /*return*/, PiScanSmileyBold];
                case 321: return [4 /*yield*/, import("react-icons/pi")];
                case 322:
                    PiScissorsBold = (_b.sent()).PiScissorsBold;
                    return [2 /*return*/, PiScissorsBold];
                case 323: return [4 /*yield*/, import("react-icons/pi")];
                case 324:
                    PiScooterBold = (_b.sent()).PiScooterBold;
                    return [2 /*return*/, PiScooterBold];
                case 325: return [4 /*yield*/, import("react-icons/pi")];
                case 326:
                    PiScreencastBold = (_b.sent()).PiScreencastBold;
                    return [2 /*return*/, PiScreencastBold];
                case 327: return [4 /*yield*/, import("react-icons/pi")];
                case 328:
                    PiScrewdriverBold = (_b.sent()).PiScrewdriverBold;
                    return [2 /*return*/, PiScrewdriverBold];
                case 329: return [4 /*yield*/, import("react-icons/pi")];
                case 330:
                    PiScribbleBold = (_b.sent()).PiScribbleBold;
                    return [2 /*return*/, PiScribbleBold];
                case 331: return [4 /*yield*/, import("react-icons/pi")];
                case 332:
                    PiScribbleLoopBold = (_b.sent()).PiScribbleLoopBold;
                    return [2 /*return*/, PiScribbleLoopBold];
                case 333: return [4 /*yield*/, import("react-icons/pi")];
                case 334:
                    PiScrollBold = (_b.sent()).PiScrollBold;
                    return [2 /*return*/, PiScrollBold];
                case 335: return [4 /*yield*/, import("react-icons/pi")];
                case 336:
                    PiSealBold = (_b.sent()).PiSealBold;
                    return [2 /*return*/, PiSealBold];
                case 337: return [4 /*yield*/, import("react-icons/pi")];
                case 338:
                    PiSealCheckBold = (_b.sent()).PiSealCheckBold;
                    return [2 /*return*/, PiSealCheckBold];
                case 339: return [4 /*yield*/, import("react-icons/pi")];
                case 340:
                    PiSealPercentBold = (_b.sent()).PiSealPercentBold;
                    return [2 /*return*/, PiSealPercentBold];
                case 341: return [4 /*yield*/, import("react-icons/pi")];
                case 342:
                    PiSealQuestionBold = (_b.sent()).PiSealQuestionBold;
                    return [2 /*return*/, PiSealQuestionBold];
                case 343: return [4 /*yield*/, import("react-icons/pi")];
                case 344:
                    PiSealWarningBold = (_b.sent()).PiSealWarningBold;
                    return [2 /*return*/, PiSealWarningBold];
                case 345: return [4 /*yield*/, import("react-icons/pi")];
                case 346:
                    PiSeatBold = (_b.sent()).PiSeatBold;
                    return [2 /*return*/, PiSeatBold];
                case 347: return [4 /*yield*/, import("react-icons/pi")];
                case 348:
                    PiSeatbeltBold = (_b.sent()).PiSeatbeltBold;
                    return [2 /*return*/, PiSeatbeltBold];
                case 349: return [4 /*yield*/, import("react-icons/pi")];
                case 350:
                    PiSecurityCameraBold = (_b.sent()).PiSecurityCameraBold;
                    return [2 /*return*/, PiSecurityCameraBold];
                case 351: return [4 /*yield*/, import("react-icons/pi")];
                case 352:
                    PiSelectionAllBold = (_b.sent()).PiSelectionAllBold;
                    return [2 /*return*/, PiSelectionAllBold];
                case 353: return [4 /*yield*/, import("react-icons/pi")];
                case 354:
                    PiSelectionBackgroundBold = (_b.sent()).PiSelectionBackgroundBold;
                    return [2 /*return*/, PiSelectionBackgroundBold];
                case 355: return [4 /*yield*/, import("react-icons/pi")];
                case 356:
                    PiSelectionBold = (_b.sent()).PiSelectionBold;
                    return [2 /*return*/, PiSelectionBold];
                case 357: return [4 /*yield*/, import("react-icons/pi")];
                case 358:
                    PiSelectionForegroundBold = (_b.sent()).PiSelectionForegroundBold;
                    return [2 /*return*/, PiSelectionForegroundBold];
                case 359: return [4 /*yield*/, import("react-icons/pi")];
                case 360:
                    PiSelectionInverseBold = (_b.sent()).PiSelectionInverseBold;
                    return [2 /*return*/, PiSelectionInverseBold];
                case 361: return [4 /*yield*/, import("react-icons/pi")];
                case 362:
                    PiSelectionPlusBold = (_b.sent()).PiSelectionPlusBold;
                    return [2 /*return*/, PiSelectionPlusBold];
                case 363: return [4 /*yield*/, import("react-icons/pi")];
                case 364:
                    PiSelectionSlashBold = (_b.sent()).PiSelectionSlashBold;
                    return [2 /*return*/, PiSelectionSlashBold];
                case 365: return [4 /*yield*/, import("react-icons/pi")];
                case 366:
                    PiShapesBold = (_b.sent()).PiShapesBold;
                    return [2 /*return*/, PiShapesBold];
                case 367: return [4 /*yield*/, import("react-icons/pi")];
                case 368:
                    PiShareBold = (_b.sent()).PiShareBold;
                    return [2 /*return*/, PiShareBold];
                case 369: return [4 /*yield*/, import("react-icons/pi")];
                case 370:
                    PiShareFatBold = (_b.sent()).PiShareFatBold;
                    return [2 /*return*/, PiShareFatBold];
                case 371: return [4 /*yield*/, import("react-icons/pi")];
                case 372:
                    PiShareNetworkBold = (_b.sent()).PiShareNetworkBold;
                    return [2 /*return*/, PiShareNetworkBold];
                case 373: return [4 /*yield*/, import("react-icons/pi")];
                case 374:
                    PiShieldBold = (_b.sent()).PiShieldBold;
                    return [2 /*return*/, PiShieldBold];
                case 375: return [4 /*yield*/, import("react-icons/pi")];
                case 376:
                    PiShieldCheckBold = (_b.sent()).PiShieldCheckBold;
                    return [2 /*return*/, PiShieldCheckBold];
                case 377: return [4 /*yield*/, import("react-icons/pi")];
                case 378:
                    PiShieldCheckeredBold = (_b.sent()).PiShieldCheckeredBold;
                    return [2 /*return*/, PiShieldCheckeredBold];
                case 379: return [4 /*yield*/, import("react-icons/pi")];
                case 380:
                    PiShieldChevronBold = (_b.sent()).PiShieldChevronBold;
                    return [2 /*return*/, PiShieldChevronBold];
                case 381: return [4 /*yield*/, import("react-icons/pi")];
                case 382:
                    PiShieldPlusBold = (_b.sent()).PiShieldPlusBold;
                    return [2 /*return*/, PiShieldPlusBold];
                case 383: return [4 /*yield*/, import("react-icons/pi")];
                case 384:
                    PiShieldSlashBold = (_b.sent()).PiShieldSlashBold;
                    return [2 /*return*/, PiShieldSlashBold];
                case 385: return [4 /*yield*/, import("react-icons/pi")];
                case 386:
                    PiShieldStarBold = (_b.sent()).PiShieldStarBold;
                    return [2 /*return*/, PiShieldStarBold];
                case 387: return [4 /*yield*/, import("react-icons/pi")];
                case 388:
                    PiShieldWarningBold = (_b.sent()).PiShieldWarningBold;
                    return [2 /*return*/, PiShieldWarningBold];
                case 389: return [4 /*yield*/, import("react-icons/pi")];
                case 390:
                    PiShippingContainerBold = (_b.sent()).PiShippingContainerBold;
                    return [2 /*return*/, PiShippingContainerBold];
                case 391: return [4 /*yield*/, import("react-icons/pi")];
                case 392:
                    PiShirtFoldedBold = (_b.sent()).PiShirtFoldedBold;
                    return [2 /*return*/, PiShirtFoldedBold];
                case 393: return [4 /*yield*/, import("react-icons/pi")];
                case 394:
                    PiShootingStarBold = (_b.sent()).PiShootingStarBold;
                    return [2 /*return*/, PiShootingStarBold];
                case 395: return [4 /*yield*/, import("react-icons/pi")];
                case 396:
                    PiShoppingBagBold = (_b.sent()).PiShoppingBagBold;
                    return [2 /*return*/, PiShoppingBagBold];
                case 397: return [4 /*yield*/, import("react-icons/pi")];
                case 398:
                    PiShoppingBagOpenBold = (_b.sent()).PiShoppingBagOpenBold;
                    return [2 /*return*/, PiShoppingBagOpenBold];
                case 399: return [4 /*yield*/, import("react-icons/pi")];
                case 400:
                    PiShoppingCartBold = (_b.sent()).PiShoppingCartBold;
                    return [2 /*return*/, PiShoppingCartBold];
                case 401: return [4 /*yield*/, import("react-icons/pi")];
                case 402:
                    PiShoppingCartSimpleBold = (_b.sent()).PiShoppingCartSimpleBold;
                    return [2 /*return*/, PiShoppingCartSimpleBold];
                case 403: return [4 /*yield*/, import("react-icons/pi")];
                case 404:
                    PiShovelBold = (_b.sent()).PiShovelBold;
                    return [2 /*return*/, PiShovelBold];
                case 405: return [4 /*yield*/, import("react-icons/pi")];
                case 406:
                    PiShowerBold = (_b.sent()).PiShowerBold;
                    return [2 /*return*/, PiShowerBold];
                case 407: return [4 /*yield*/, import("react-icons/pi")];
                case 408:
                    PiShrimpBold = (_b.sent()).PiShrimpBold;
                    return [2 /*return*/, PiShrimpBold];
                case 409: return [4 /*yield*/, import("react-icons/pi")];
                case 410:
                    PiShuffleAngularBold = (_b.sent()).PiShuffleAngularBold;
                    return [2 /*return*/, PiShuffleAngularBold];
                case 411: return [4 /*yield*/, import("react-icons/pi")];
                case 412:
                    PiShuffleBold = (_b.sent()).PiShuffleBold;
                    return [2 /*return*/, PiShuffleBold];
                case 413: return [4 /*yield*/, import("react-icons/pi")];
                case 414:
                    PiShuffleSimpleBold = (_b.sent()).PiShuffleSimpleBold;
                    return [2 /*return*/, PiShuffleSimpleBold];
                case 415: return [4 /*yield*/, import("react-icons/pi")];
                case 416:
                    PiSidebarBold = (_b.sent()).PiSidebarBold;
                    return [2 /*return*/, PiSidebarBold];
                case 417: return [4 /*yield*/, import("react-icons/pi")];
                case 418:
                    PiSidebarSimpleBold = (_b.sent()).PiSidebarSimpleBold;
                    return [2 /*return*/, PiSidebarSimpleBold];
                case 419: return [4 /*yield*/, import("react-icons/pi")];
                case 420:
                    PiSigmaBold = (_b.sent()).PiSigmaBold;
                    return [2 /*return*/, PiSigmaBold];
                case 421: return [4 /*yield*/, import("react-icons/pi")];
                case 422:
                    PiSignInBold = (_b.sent()).PiSignInBold;
                    return [2 /*return*/, PiSignInBold];
                case 423: return [4 /*yield*/, import("react-icons/pi")];
                case 424:
                    PiSignOutBold = (_b.sent()).PiSignOutBold;
                    return [2 /*return*/, PiSignOutBold];
                case 425: return [4 /*yield*/, import("react-icons/pi")];
                case 426:
                    PiSignatureBold = (_b.sent()).PiSignatureBold;
                    return [2 /*return*/, PiSignatureBold];
                case 427: return [4 /*yield*/, import("react-icons/pi")];
                case 428:
                    PiSignpostBold = (_b.sent()).PiSignpostBold;
                    return [2 /*return*/, PiSignpostBold];
                case 429: return [4 /*yield*/, import("react-icons/pi")];
                case 430:
                    PiSimCardBold = (_b.sent()).PiSimCardBold;
                    return [2 /*return*/, PiSimCardBold];
                case 431: return [4 /*yield*/, import("react-icons/pi")];
                case 432:
                    PiSirenBold = (_b.sent()).PiSirenBold;
                    return [2 /*return*/, PiSirenBold];
                case 433: return [4 /*yield*/, import("react-icons/pi")];
                case 434:
                    PiSketchLogoBold = (_b.sent()).PiSketchLogoBold;
                    return [2 /*return*/, PiSketchLogoBold];
                case 435: return [4 /*yield*/, import("react-icons/pi")];
                case 436:
                    PiSkipBackBold = (_b.sent()).PiSkipBackBold;
                    return [2 /*return*/, PiSkipBackBold];
                case 437: return [4 /*yield*/, import("react-icons/pi")];
                case 438:
                    PiSkipBackCircleBold = (_b.sent()).PiSkipBackCircleBold;
                    return [2 /*return*/, PiSkipBackCircleBold];
                case 439: return [4 /*yield*/, import("react-icons/pi")];
                case 440:
                    PiSkipForwardBold = (_b.sent()).PiSkipForwardBold;
                    return [2 /*return*/, PiSkipForwardBold];
                case 441: return [4 /*yield*/, import("react-icons/pi")];
                case 442:
                    PiSkipForwardCircleBold = (_b.sent()).PiSkipForwardCircleBold;
                    return [2 /*return*/, PiSkipForwardCircleBold];
                case 443: return [4 /*yield*/, import("react-icons/pi")];
                case 444:
                    PiSkullBold = (_b.sent()).PiSkullBold;
                    return [2 /*return*/, PiSkullBold];
                case 445: return [4 /*yield*/, import("react-icons/pi")];
                case 446:
                    PiSkypeLogoBold = (_b.sent()).PiSkypeLogoBold;
                    return [2 /*return*/, PiSkypeLogoBold];
                case 447: return [4 /*yield*/, import("react-icons/pi")];
                case 448:
                    PiSlackLogoBold = (_b.sent()).PiSlackLogoBold;
                    return [2 /*return*/, PiSlackLogoBold];
                case 449: return [4 /*yield*/, import("react-icons/pi")];
                case 450:
                    PiSlidersBold = (_b.sent()).PiSlidersBold;
                    return [2 /*return*/, PiSlidersBold];
                case 451: return [4 /*yield*/, import("react-icons/pi")];
                case 452:
                    PiSlidersHorizontalBold = (_b.sent()).PiSlidersHorizontalBold;
                    return [2 /*return*/, PiSlidersHorizontalBold];
                case 453: return [4 /*yield*/, import("react-icons/pi")];
                case 454:
                    PiSlideshowBold = (_b.sent()).PiSlideshowBold;
                    return [2 /*return*/, PiSlideshowBold];
                case 455: return [4 /*yield*/, import("react-icons/pi")];
                case 456:
                    PiSmileyAngryBold = (_b.sent()).PiSmileyAngryBold;
                    return [2 /*return*/, PiSmileyAngryBold];
                case 457: return [4 /*yield*/, import("react-icons/pi")];
                case 458:
                    PiSmileyBlankBold = (_b.sent()).PiSmileyBlankBold;
                    return [2 /*return*/, PiSmileyBlankBold];
                case 459: return [4 /*yield*/, import("react-icons/pi")];
                case 460:
                    PiSmileyBold = (_b.sent()).PiSmileyBold;
                    return [2 /*return*/, PiSmileyBold];
                case 461: return [4 /*yield*/, import("react-icons/pi")];
                case 462:
                    PiSmileyMehBold = (_b.sent()).PiSmileyMehBold;
                    return [2 /*return*/, PiSmileyMehBold];
                case 463: return [4 /*yield*/, import("react-icons/pi")];
                case 464:
                    PiSmileyMeltingBold = (_b.sent()).PiSmileyMeltingBold;
                    return [2 /*return*/, PiSmileyMeltingBold];
                case 465: return [4 /*yield*/, import("react-icons/pi")];
                case 466:
                    PiSmileyNervousBold = (_b.sent()).PiSmileyNervousBold;
                    return [2 /*return*/, PiSmileyNervousBold];
                case 467: return [4 /*yield*/, import("react-icons/pi")];
                case 468:
                    PiSmileySadBold = (_b.sent()).PiSmileySadBold;
                    return [2 /*return*/, PiSmileySadBold];
                case 469: return [4 /*yield*/, import("react-icons/pi")];
                case 470:
                    PiSmileyStickerBold = (_b.sent()).PiSmileyStickerBold;
                    return [2 /*return*/, PiSmileyStickerBold];
                case 471: return [4 /*yield*/, import("react-icons/pi")];
                case 472:
                    PiSmileyWinkBold = (_b.sent()).PiSmileyWinkBold;
                    return [2 /*return*/, PiSmileyWinkBold];
                case 473: return [4 /*yield*/, import("react-icons/pi")];
                case 474:
                    PiSmileyXEyesBold = (_b.sent()).PiSmileyXEyesBold;
                    return [2 /*return*/, PiSmileyXEyesBold];
                case 475: return [4 /*yield*/, import("react-icons/pi")];
                case 476:
                    PiSnapchatLogoBold = (_b.sent()).PiSnapchatLogoBold;
                    return [2 /*return*/, PiSnapchatLogoBold];
                case 477: return [4 /*yield*/, import("react-icons/pi")];
                case 478:
                    PiSneakerBold = (_b.sent()).PiSneakerBold;
                    return [2 /*return*/, PiSneakerBold];
                case 479: return [4 /*yield*/, import("react-icons/pi")];
                case 480:
                    PiSneakerMoveBold = (_b.sent()).PiSneakerMoveBold;
                    return [2 /*return*/, PiSneakerMoveBold];
                case 481: return [4 /*yield*/, import("react-icons/pi")];
                case 482:
                    PiSnowflakeBold = (_b.sent()).PiSnowflakeBold;
                    return [2 /*return*/, PiSnowflakeBold];
                case 483: return [4 /*yield*/, import("react-icons/pi")];
                case 484:
                    PiSoccerBallBold = (_b.sent()).PiSoccerBallBold;
                    return [2 /*return*/, PiSoccerBallBold];
                case 485: return [4 /*yield*/, import("react-icons/pi")];
                case 486:
                    PiSockBold = (_b.sent()).PiSockBold;
                    return [2 /*return*/, PiSockBold];
                case 487: return [4 /*yield*/, import("react-icons/pi")];
                case 488:
                    PiSolarPanelBold = (_b.sent()).PiSolarPanelBold;
                    return [2 /*return*/, PiSolarPanelBold];
                case 489: return [4 /*yield*/, import("react-icons/pi")];
                case 490:
                    PiSolarRoofBold = (_b.sent()).PiSolarRoofBold;
                    return [2 /*return*/, PiSolarRoofBold];
                case 491: return [4 /*yield*/, import("react-icons/pi")];
                case 492:
                    PiSortAscendingBold = (_b.sent()).PiSortAscendingBold;
                    return [2 /*return*/, PiSortAscendingBold];
                case 493: return [4 /*yield*/, import("react-icons/pi")];
                case 494:
                    PiSortDescendingBold = (_b.sent()).PiSortDescendingBold;
                    return [2 /*return*/, PiSortDescendingBold];
                case 495: return [4 /*yield*/, import("react-icons/pi")];
                case 496:
                    PiSoundcloudLogoBold = (_b.sent()).PiSoundcloudLogoBold;
                    return [2 /*return*/, PiSoundcloudLogoBold];
                case 497: return [4 /*yield*/, import("react-icons/pi")];
                case 498:
                    PiSpadeBold = (_b.sent()).PiSpadeBold;
                    return [2 /*return*/, PiSpadeBold];
                case 499: return [4 /*yield*/, import("react-icons/pi")];
                case 500:
                    PiSparkleBold = (_b.sent()).PiSparkleBold;
                    return [2 /*return*/, PiSparkleBold];
                case 501: return [4 /*yield*/, import("react-icons/pi")];
                case 502:
                    PiSpeakerHifiBold = (_b.sent()).PiSpeakerHifiBold;
                    return [2 /*return*/, PiSpeakerHifiBold];
                case 503: return [4 /*yield*/, import("react-icons/pi")];
                case 504:
                    PiSpeakerHighBold = (_b.sent()).PiSpeakerHighBold;
                    return [2 /*return*/, PiSpeakerHighBold];
                case 505: return [4 /*yield*/, import("react-icons/pi")];
                case 506:
                    PiSpeakerLowBold = (_b.sent()).PiSpeakerLowBold;
                    return [2 /*return*/, PiSpeakerLowBold];
                case 507: return [4 /*yield*/, import("react-icons/pi")];
                case 508:
                    PiSpeakerNoneBold = (_b.sent()).PiSpeakerNoneBold;
                    return [2 /*return*/, PiSpeakerNoneBold];
                case 509: return [4 /*yield*/, import("react-icons/pi")];
                case 510:
                    PiSpeakerSimpleHighBold = (_b.sent()).PiSpeakerSimpleHighBold;
                    return [2 /*return*/, PiSpeakerSimpleHighBold];
                case 511: return [4 /*yield*/, import("react-icons/pi")];
                case 512:
                    PiSpeakerSimpleLowBold = (_b.sent()).PiSpeakerSimpleLowBold;
                    return [2 /*return*/, PiSpeakerSimpleLowBold];
                case 513: return [4 /*yield*/, import("react-icons/pi")];
                case 514:
                    PiSpeakerSimpleNoneBold = (_b.sent()).PiSpeakerSimpleNoneBold;
                    return [2 /*return*/, PiSpeakerSimpleNoneBold];
                case 515: return [4 /*yield*/, import("react-icons/pi")];
                case 516:
                    PiSpeakerSimpleSlashBold = (_b.sent()).PiSpeakerSimpleSlashBold;
                    return [2 /*return*/, PiSpeakerSimpleSlashBold];
                case 517: return [4 /*yield*/, import("react-icons/pi")];
                case 518:
                    PiSpeakerSimpleXBold = (_b.sent()).PiSpeakerSimpleXBold;
                    return [2 /*return*/, PiSpeakerSimpleXBold];
                case 519: return [4 /*yield*/, import("react-icons/pi")];
                case 520:
                    PiSpeakerSlashBold = (_b.sent()).PiSpeakerSlashBold;
                    return [2 /*return*/, PiSpeakerSlashBold];
                case 521: return [4 /*yield*/, import("react-icons/pi")];
                case 522:
                    PiSpeakerXBold = (_b.sent()).PiSpeakerXBold;
                    return [2 /*return*/, PiSpeakerXBold];
                case 523: return [4 /*yield*/, import("react-icons/pi")];
                case 524:
                    PiSpeedometerBold = (_b.sent()).PiSpeedometerBold;
                    return [2 /*return*/, PiSpeedometerBold];
                case 525: return [4 /*yield*/, import("react-icons/pi")];
                case 526:
                    PiSphereBold = (_b.sent()).PiSphereBold;
                    return [2 /*return*/, PiSphereBold];
                case 527: return [4 /*yield*/, import("react-icons/pi")];
                case 528:
                    PiSpinnerBallBold = (_b.sent()).PiSpinnerBallBold;
                    return [2 /*return*/, PiSpinnerBallBold];
                case 529: return [4 /*yield*/, import("react-icons/pi")];
                case 530:
                    PiSpinnerBold = (_b.sent()).PiSpinnerBold;
                    return [2 /*return*/, PiSpinnerBold];
                case 531: return [4 /*yield*/, import("react-icons/pi")];
                case 532:
                    PiSpinnerGapBold = (_b.sent()).PiSpinnerGapBold;
                    return [2 /*return*/, PiSpinnerGapBold];
                case 533: return [4 /*yield*/, import("react-icons/pi")];
                case 534:
                    PiSpiralBold = (_b.sent()).PiSpiralBold;
                    return [2 /*return*/, PiSpiralBold];
                case 535: return [4 /*yield*/, import("react-icons/pi")];
                case 536:
                    PiSplitHorizontalBold = (_b.sent()).PiSplitHorizontalBold;
                    return [2 /*return*/, PiSplitHorizontalBold];
                case 537: return [4 /*yield*/, import("react-icons/pi")];
                case 538:
                    PiSplitVerticalBold = (_b.sent()).PiSplitVerticalBold;
                    return [2 /*return*/, PiSplitVerticalBold];
                case 539: return [4 /*yield*/, import("react-icons/pi")];
                case 540:
                    PiSpotifyLogoBold = (_b.sent()).PiSpotifyLogoBold;
                    return [2 /*return*/, PiSpotifyLogoBold];
                case 541: return [4 /*yield*/, import("react-icons/pi")];
                case 542:
                    PiSprayBottleBold = (_b.sent()).PiSprayBottleBold;
                    return [2 /*return*/, PiSprayBottleBold];
                case 543: return [4 /*yield*/, import("react-icons/pi")];
                case 544:
                    PiSquareBold = (_b.sent()).PiSquareBold;
                    return [2 /*return*/, PiSquareBold];
                case 545: return [4 /*yield*/, import("react-icons/pi")];
                case 546:
                    PiSquareHalfBold = (_b.sent()).PiSquareHalfBold;
                    return [2 /*return*/, PiSquareHalfBold];
                case 547: return [4 /*yield*/, import("react-icons/pi")];
                case 548:
                    PiSquareHalfBottomBold = (_b.sent()).PiSquareHalfBottomBold;
                    return [2 /*return*/, PiSquareHalfBottomBold];
                case 549: return [4 /*yield*/, import("react-icons/pi")];
                case 550:
                    PiSquareLogoBold = (_b.sent()).PiSquareLogoBold;
                    return [2 /*return*/, PiSquareLogoBold];
                case 551: return [4 /*yield*/, import("react-icons/pi")];
                case 552:
                    PiSquareSplitHorizontalBold = (_b.sent()).PiSquareSplitHorizontalBold;
                    return [2 /*return*/, PiSquareSplitHorizontalBold];
                case 553: return [4 /*yield*/, import("react-icons/pi")];
                case 554:
                    PiSquareSplitVerticalBold = (_b.sent()).PiSquareSplitVerticalBold;
                    return [2 /*return*/, PiSquareSplitVerticalBold];
                case 555: return [4 /*yield*/, import("react-icons/pi")];
                case 556:
                    PiSquaresFourBold = (_b.sent()).PiSquaresFourBold;
                    return [2 /*return*/, PiSquaresFourBold];
                case 557: return [4 /*yield*/, import("react-icons/pi")];
                case 558:
                    PiStackBold = (_b.sent()).PiStackBold;
                    return [2 /*return*/, PiStackBold];
                case 559: return [4 /*yield*/, import("react-icons/pi")];
                case 560:
                    PiStackMinusBold = (_b.sent()).PiStackMinusBold;
                    return [2 /*return*/, PiStackMinusBold];
                case 561: return [4 /*yield*/, import("react-icons/pi")];
                case 562:
                    PiStackOverflowLogoBold = (_b.sent()).PiStackOverflowLogoBold;
                    return [2 /*return*/, PiStackOverflowLogoBold];
                case 563: return [4 /*yield*/, import("react-icons/pi")];
                case 564:
                    PiStackPlusBold = (_b.sent()).PiStackPlusBold;
                    return [2 /*return*/, PiStackPlusBold];
                case 565: return [4 /*yield*/, import("react-icons/pi")];
                case 566:
                    PiStackSimpleBold = (_b.sent()).PiStackSimpleBold;
                    return [2 /*return*/, PiStackSimpleBold];
                case 567: return [4 /*yield*/, import("react-icons/pi")];
                case 568:
                    PiStairsBold = (_b.sent()).PiStairsBold;
                    return [2 /*return*/, PiStairsBold];
                case 569: return [4 /*yield*/, import("react-icons/pi")];
                case 570:
                    PiStampBold = (_b.sent()).PiStampBold;
                    return [2 /*return*/, PiStampBold];
                case 571: return [4 /*yield*/, import("react-icons/pi")];
                case 572:
                    PiStandardDefinitionBold = (_b.sent()).PiStandardDefinitionBold;
                    return [2 /*return*/, PiStandardDefinitionBold];
                case 573: return [4 /*yield*/, import("react-icons/pi")];
                case 574:
                    PiStarAndCrescentBold = (_b.sent()).PiStarAndCrescentBold;
                    return [2 /*return*/, PiStarAndCrescentBold];
                case 575: return [4 /*yield*/, import("react-icons/pi")];
                case 576:
                    PiStarBold = (_b.sent()).PiStarBold;
                    return [2 /*return*/, PiStarBold];
                case 577: return [4 /*yield*/, import("react-icons/pi")];
                case 578:
                    PiStarFourBold = (_b.sent()).PiStarFourBold;
                    return [2 /*return*/, PiStarFourBold];
                case 579: return [4 /*yield*/, import("react-icons/pi")];
                case 580:
                    PiStarHalfBold = (_b.sent()).PiStarHalfBold;
                    return [2 /*return*/, PiStarHalfBold];
                case 581: return [4 /*yield*/, import("react-icons/pi")];
                case 582:
                    PiStarOfDavidBold = (_b.sent()).PiStarOfDavidBold;
                    return [2 /*return*/, PiStarOfDavidBold];
                case 583: return [4 /*yield*/, import("react-icons/pi")];
                case 584:
                    PiSteamLogoBold = (_b.sent()).PiSteamLogoBold;
                    return [2 /*return*/, PiSteamLogoBold];
                case 585: return [4 /*yield*/, import("react-icons/pi")];
                case 586:
                    PiSteeringWheelBold = (_b.sent()).PiSteeringWheelBold;
                    return [2 /*return*/, PiSteeringWheelBold];
                case 587: return [4 /*yield*/, import("react-icons/pi")];
                case 588:
                    PiStepsBold = (_b.sent()).PiStepsBold;
                    return [2 /*return*/, PiStepsBold];
                case 589: return [4 /*yield*/, import("react-icons/pi")];
                case 590:
                    PiStethoscopeBold = (_b.sent()).PiStethoscopeBold;
                    return [2 /*return*/, PiStethoscopeBold];
                case 591: return [4 /*yield*/, import("react-icons/pi")];
                case 592:
                    PiStickerBold = (_b.sent()).PiStickerBold;
                    return [2 /*return*/, PiStickerBold];
                case 593: return [4 /*yield*/, import("react-icons/pi")];
                case 594:
                    PiStoolBold = (_b.sent()).PiStoolBold;
                    return [2 /*return*/, PiStoolBold];
                case 595: return [4 /*yield*/, import("react-icons/pi")];
                case 596:
                    PiStopBold = (_b.sent()).PiStopBold;
                    return [2 /*return*/, PiStopBold];
                case 597: return [4 /*yield*/, import("react-icons/pi")];
                case 598:
                    PiStopCircleBold = (_b.sent()).PiStopCircleBold;
                    return [2 /*return*/, PiStopCircleBold];
                case 599: return [4 /*yield*/, import("react-icons/pi")];
                case 600:
                    PiStorefrontBold = (_b.sent()).PiStorefrontBold;
                    return [2 /*return*/, PiStorefrontBold];
                case 601: return [4 /*yield*/, import("react-icons/pi")];
                case 602:
                    PiStrategyBold = (_b.sent()).PiStrategyBold;
                    return [2 /*return*/, PiStrategyBold];
                case 603: return [4 /*yield*/, import("react-icons/pi")];
                case 604:
                    PiStripeLogoBold = (_b.sent()).PiStripeLogoBold;
                    return [2 /*return*/, PiStripeLogoBold];
                case 605: return [4 /*yield*/, import("react-icons/pi")];
                case 606:
                    PiStudentBold = (_b.sent()).PiStudentBold;
                    return [2 /*return*/, PiStudentBold];
                case 607: return [4 /*yield*/, import("react-icons/pi")];
                case 608:
                    PiSubsetOfBold = (_b.sent()).PiSubsetOfBold;
                    return [2 /*return*/, PiSubsetOfBold];
                case 609: return [4 /*yield*/, import("react-icons/pi")];
                case 610:
                    PiSubsetProperOfBold = (_b.sent()).PiSubsetProperOfBold;
                    return [2 /*return*/, PiSubsetProperOfBold];
                case 611: return [4 /*yield*/, import("react-icons/pi")];
                case 612:
                    PiSubtitlesBold = (_b.sent()).PiSubtitlesBold;
                    return [2 /*return*/, PiSubtitlesBold];
                case 613: return [4 /*yield*/, import("react-icons/pi")];
                case 614:
                    PiSubtitlesSlashBold = (_b.sent()).PiSubtitlesSlashBold;
                    return [2 /*return*/, PiSubtitlesSlashBold];
                case 615: return [4 /*yield*/, import("react-icons/pi")];
                case 616:
                    PiSubtractBold = (_b.sent()).PiSubtractBold;
                    return [2 /*return*/, PiSubtractBold];
                case 617: return [4 /*yield*/, import("react-icons/pi")];
                case 618:
                    PiSubtractSquareBold = (_b.sent()).PiSubtractSquareBold;
                    return [2 /*return*/, PiSubtractSquareBold];
                case 619: return [4 /*yield*/, import("react-icons/pi")];
                case 620:
                    PiSubwayBold = (_b.sent()).PiSubwayBold;
                    return [2 /*return*/, PiSubwayBold];
                case 621: return [4 /*yield*/, import("react-icons/pi")];
                case 622:
                    PiSuitcaseBold = (_b.sent()).PiSuitcaseBold;
                    return [2 /*return*/, PiSuitcaseBold];
                case 623: return [4 /*yield*/, import("react-icons/pi")];
                case 624:
                    PiSuitcaseRollingBold = (_b.sent()).PiSuitcaseRollingBold;
                    return [2 /*return*/, PiSuitcaseRollingBold];
                case 625: return [4 /*yield*/, import("react-icons/pi")];
                case 626:
                    PiSuitcaseSimpleBold = (_b.sent()).PiSuitcaseSimpleBold;
                    return [2 /*return*/, PiSuitcaseSimpleBold];
                case 627: return [4 /*yield*/, import("react-icons/pi")];
                case 628:
                    PiSunBold = (_b.sent()).PiSunBold;
                    return [2 /*return*/, PiSunBold];
                case 629: return [4 /*yield*/, import("react-icons/pi")];
                case 630:
                    PiSunDimBold = (_b.sent()).PiSunDimBold;
                    return [2 /*return*/, PiSunDimBold];
                case 631: return [4 /*yield*/, import("react-icons/pi")];
                case 632:
                    PiSunHorizonBold = (_b.sent()).PiSunHorizonBold;
                    return [2 /*return*/, PiSunHorizonBold];
                case 633: return [4 /*yield*/, import("react-icons/pi")];
                case 634:
                    PiSunglassesBold = (_b.sent()).PiSunglassesBold;
                    return [2 /*return*/, PiSunglassesBold];
                case 635: return [4 /*yield*/, import("react-icons/pi")];
                case 636:
                    PiSupersetOfBold = (_b.sent()).PiSupersetOfBold;
                    return [2 /*return*/, PiSupersetOfBold];
                case 637: return [4 /*yield*/, import("react-icons/pi")];
                case 638:
                    PiSupersetProperOfBold = (_b.sent()).PiSupersetProperOfBold;
                    return [2 /*return*/, PiSupersetProperOfBold];
                case 639: return [4 /*yield*/, import("react-icons/pi")];
                case 640:
                    PiSwapBold = (_b.sent()).PiSwapBold;
                    return [2 /*return*/, PiSwapBold];
                case 641: return [4 /*yield*/, import("react-icons/pi")];
                case 642:
                    PiSwatchesBold = (_b.sent()).PiSwatchesBold;
                    return [2 /*return*/, PiSwatchesBold];
                case 643: return [4 /*yield*/, import("react-icons/pi")];
                case 644:
                    PiSwimmingPoolBold = (_b.sent()).PiSwimmingPoolBold;
                    return [2 /*return*/, PiSwimmingPoolBold];
                case 645: return [4 /*yield*/, import("react-icons/pi")];
                case 646:
                    PiSwordBold = (_b.sent()).PiSwordBold;
                    return [2 /*return*/, PiSwordBold];
                case 647: return [4 /*yield*/, import("react-icons/pi")];
                case 648:
                    PiSynagogueBold = (_b.sent()).PiSynagogueBold;
                    return [2 /*return*/, PiSynagogueBold];
                case 649: return [4 /*yield*/, import("react-icons/pi")];
                case 650:
                    PiSyringeBold = (_b.sent()).PiSyringeBold;
                    return [2 /*return*/, PiSyringeBold];
                case 651: return [4 /*yield*/, import("react-icons/pi")];
                case 652:
                    PiTShirtBold = (_b.sent()).PiTShirtBold;
                    return [2 /*return*/, PiTShirtBold];
                case 653: return [4 /*yield*/, import("react-icons/pi")];
                case 654:
                    PiTableBold = (_b.sent()).PiTableBold;
                    return [2 /*return*/, PiTableBold];
                case 655: return [4 /*yield*/, import("react-icons/pi")];
                case 656:
                    PiTabsBold = (_b.sent()).PiTabsBold;
                    return [2 /*return*/, PiTabsBold];
                case 657: return [4 /*yield*/, import("react-icons/pi")];
                case 658:
                    PiTagBold = (_b.sent()).PiTagBold;
                    return [2 /*return*/, PiTagBold];
                case 659: return [4 /*yield*/, import("react-icons/pi")];
                case 660:
                    PiTagChevronBold = (_b.sent()).PiTagChevronBold;
                    return [2 /*return*/, PiTagChevronBold];
                case 661: return [4 /*yield*/, import("react-icons/pi")];
                case 662:
                    PiTagSimpleBold = (_b.sent()).PiTagSimpleBold;
                    return [2 /*return*/, PiTagSimpleBold];
                case 663: return [4 /*yield*/, import("react-icons/pi")];
                case 664:
                    PiTargetBold = (_b.sent()).PiTargetBold;
                    return [2 /*return*/, PiTargetBold];
                case 665: return [4 /*yield*/, import("react-icons/pi")];
                case 666:
                    PiTaxiBold = (_b.sent()).PiTaxiBold;
                    return [2 /*return*/, PiTaxiBold];
                case 667: return [4 /*yield*/, import("react-icons/pi")];
                case 668:
                    PiTeaBagBold = (_b.sent()).PiTeaBagBold;
                    return [2 /*return*/, PiTeaBagBold];
                case 669: return [4 /*yield*/, import("react-icons/pi")];
                case 670:
                    PiTelegramLogoBold = (_b.sent()).PiTelegramLogoBold;
                    return [2 /*return*/, PiTelegramLogoBold];
                case 671: return [4 /*yield*/, import("react-icons/pi")];
                case 672:
                    PiTelevisionBold = (_b.sent()).PiTelevisionBold;
                    return [2 /*return*/, PiTelevisionBold];
                case 673: return [4 /*yield*/, import("react-icons/pi")];
                case 674:
                    PiTelevisionSimpleBold = (_b.sent()).PiTelevisionSimpleBold;
                    return [2 /*return*/, PiTelevisionSimpleBold];
                case 675: return [4 /*yield*/, import("react-icons/pi")];
                case 676:
                    PiTennisBallBold = (_b.sent()).PiTennisBallBold;
                    return [2 /*return*/, PiTennisBallBold];
                case 677: return [4 /*yield*/, import("react-icons/pi")];
                case 678:
                    PiTentBold = (_b.sent()).PiTentBold;
                    return [2 /*return*/, PiTentBold];
                case 679: return [4 /*yield*/, import("react-icons/pi")];
                case 680:
                    PiTerminalBold = (_b.sent()).PiTerminalBold;
                    return [2 /*return*/, PiTerminalBold];
                case 681: return [4 /*yield*/, import("react-icons/pi")];
                case 682:
                    PiTerminalWindowBold = (_b.sent()).PiTerminalWindowBold;
                    return [2 /*return*/, PiTerminalWindowBold];
                case 683: return [4 /*yield*/, import("react-icons/pi")];
                case 684:
                    PiTestTubeBold = (_b.sent()).PiTestTubeBold;
                    return [2 /*return*/, PiTestTubeBold];
                case 685: return [4 /*yield*/, import("react-icons/pi")];
                case 686:
                    PiTextAUnderlineBold = (_b.sent()).PiTextAUnderlineBold;
                    return [2 /*return*/, PiTextAUnderlineBold];
                case 687: return [4 /*yield*/, import("react-icons/pi")];
                case 688:
                    PiTextAaBold = (_b.sent()).PiTextAaBold;
                    return [2 /*return*/, PiTextAaBold];
                case 689: return [4 /*yield*/, import("react-icons/pi")];
                case 690:
                    PiTextAlignCenterBold = (_b.sent()).PiTextAlignCenterBold;
                    return [2 /*return*/, PiTextAlignCenterBold];
                case 691: return [4 /*yield*/, import("react-icons/pi")];
                case 692:
                    PiTextAlignJustifyBold = (_b.sent()).PiTextAlignJustifyBold;
                    return [2 /*return*/, PiTextAlignJustifyBold];
                case 693: return [4 /*yield*/, import("react-icons/pi")];
                case 694:
                    PiTextAlignLeftBold = (_b.sent()).PiTextAlignLeftBold;
                    return [2 /*return*/, PiTextAlignLeftBold];
                case 695: return [4 /*yield*/, import("react-icons/pi")];
                case 696:
                    PiTextAlignRightBold = (_b.sent()).PiTextAlignRightBold;
                    return [2 /*return*/, PiTextAlignRightBold];
                case 697: return [4 /*yield*/, import("react-icons/pi")];
                case 698:
                    PiTextBBold = (_b.sent()).PiTextBBold;
                    return [2 /*return*/, PiTextBBold];
                case 699: return [4 /*yield*/, import("react-icons/pi")];
                case 700:
                    PiTextColumnsBold = (_b.sent()).PiTextColumnsBold;
                    return [2 /*return*/, PiTextColumnsBold];
                case 701: return [4 /*yield*/, import("react-icons/pi")];
                case 702:
                    PiTextHBold = (_b.sent()).PiTextHBold;
                    return [2 /*return*/, PiTextHBold];
                case 703: return [4 /*yield*/, import("react-icons/pi")];
                case 704:
                    PiTextHFiveBold = (_b.sent()).PiTextHFiveBold;
                    return [2 /*return*/, PiTextHFiveBold];
                case 705: return [4 /*yield*/, import("react-icons/pi")];
                case 706:
                    PiTextHFourBold = (_b.sent()).PiTextHFourBold;
                    return [2 /*return*/, PiTextHFourBold];
                case 707: return [4 /*yield*/, import("react-icons/pi")];
                case 708:
                    PiTextHOneBold = (_b.sent()).PiTextHOneBold;
                    return [2 /*return*/, PiTextHOneBold];
                case 709: return [4 /*yield*/, import("react-icons/pi")];
                case 710:
                    PiTextHSixBold = (_b.sent()).PiTextHSixBold;
                    return [2 /*return*/, PiTextHSixBold];
                case 711: return [4 /*yield*/, import("react-icons/pi")];
                case 712:
                    PiTextHThreeBold = (_b.sent()).PiTextHThreeBold;
                    return [2 /*return*/, PiTextHThreeBold];
                case 713: return [4 /*yield*/, import("react-icons/pi")];
                case 714:
                    PiTextHTwoBold = (_b.sent()).PiTextHTwoBold;
                    return [2 /*return*/, PiTextHTwoBold];
                case 715: return [4 /*yield*/, import("react-icons/pi")];
                case 716:
                    PiTextIndentBold = (_b.sent()).PiTextIndentBold;
                    return [2 /*return*/, PiTextIndentBold];
                case 717: return [4 /*yield*/, import("react-icons/pi")];
                case 718:
                    PiTextItalicBold = (_b.sent()).PiTextItalicBold;
                    return [2 /*return*/, PiTextItalicBold];
                case 719: return [4 /*yield*/, import("react-icons/pi")];
                case 720:
                    PiTextOutdentBold = (_b.sent()).PiTextOutdentBold;
                    return [2 /*return*/, PiTextOutdentBold];
                case 721: return [4 /*yield*/, import("react-icons/pi")];
                case 722:
                    PiTextStrikethroughBold = (_b.sent()).PiTextStrikethroughBold;
                    return [2 /*return*/, PiTextStrikethroughBold];
                case 723: return [4 /*yield*/, import("react-icons/pi")];
                case 724:
                    PiTextSubscriptBold = (_b.sent()).PiTextSubscriptBold;
                    return [2 /*return*/, PiTextSubscriptBold];
                case 725: return [4 /*yield*/, import("react-icons/pi")];
                case 726:
                    PiTextSuperscriptBold = (_b.sent()).PiTextSuperscriptBold;
                    return [2 /*return*/, PiTextSuperscriptBold];
                case 727: return [4 /*yield*/, import("react-icons/pi")];
                case 728:
                    PiTextTBold = (_b.sent()).PiTextTBold;
                    return [2 /*return*/, PiTextTBold];
                case 729: return [4 /*yield*/, import("react-icons/pi")];
                case 730:
                    PiTextTSlashBold = (_b.sent()).PiTextTSlashBold;
                    return [2 /*return*/, PiTextTSlashBold];
                case 731: return [4 /*yield*/, import("react-icons/pi")];
                case 732:
                    PiTextUnderlineBold = (_b.sent()).PiTextUnderlineBold;
                    return [2 /*return*/, PiTextUnderlineBold];
                case 733: return [4 /*yield*/, import("react-icons/pi")];
                case 734:
                    PiTextboxBold = (_b.sent()).PiTextboxBold;
                    return [2 /*return*/, PiTextboxBold];
                case 735: return [4 /*yield*/, import("react-icons/pi")];
                case 736:
                    PiThermometerBold = (_b.sent()).PiThermometerBold;
                    return [2 /*return*/, PiThermometerBold];
                case 737: return [4 /*yield*/, import("react-icons/pi")];
                case 738:
                    PiThermometerColdBold = (_b.sent()).PiThermometerColdBold;
                    return [2 /*return*/, PiThermometerColdBold];
                case 739: return [4 /*yield*/, import("react-icons/pi")];
                case 740:
                    PiThermometerHotBold = (_b.sent()).PiThermometerHotBold;
                    return [2 /*return*/, PiThermometerHotBold];
                case 741: return [4 /*yield*/, import("react-icons/pi")];
                case 742:
                    PiThermometerSimpleBold = (_b.sent()).PiThermometerSimpleBold;
                    return [2 /*return*/, PiThermometerSimpleBold];
                case 743: return [4 /*yield*/, import("react-icons/pi")];
                case 744:
                    PiThreadsLogoBold = (_b.sent()).PiThreadsLogoBold;
                    return [2 /*return*/, PiThreadsLogoBold];
                case 745: return [4 /*yield*/, import("react-icons/pi")];
                case 746:
                    PiThreeDBold = (_b.sent()).PiThreeDBold;
                    return [2 /*return*/, PiThreeDBold];
                case 747: return [4 /*yield*/, import("react-icons/pi")];
                case 748:
                    PiThumbsDownBold = (_b.sent()).PiThumbsDownBold;
                    return [2 /*return*/, PiThumbsDownBold];
                case 749: return [4 /*yield*/, import("react-icons/pi")];
                case 750:
                    PiThumbsUpBold = (_b.sent()).PiThumbsUpBold;
                    return [2 /*return*/, PiThumbsUpBold];
                case 751: return [4 /*yield*/, import("react-icons/pi")];
                case 752:
                    PiTicketBold = (_b.sent()).PiTicketBold;
                    return [2 /*return*/, PiTicketBold];
                case 753: return [4 /*yield*/, import("react-icons/pi")];
                case 754:
                    PiTidalLogoBold = (_b.sent()).PiTidalLogoBold;
                    return [2 /*return*/, PiTidalLogoBold];
                case 755: return [4 /*yield*/, import("react-icons/pi")];
                case 756:
                    PiTiktokLogoBold = (_b.sent()).PiTiktokLogoBold;
                    return [2 /*return*/, PiTiktokLogoBold];
                case 757: return [4 /*yield*/, import("react-icons/pi")];
                case 758:
                    PiTildeBold = (_b.sent()).PiTildeBold;
                    return [2 /*return*/, PiTildeBold];
                case 759: return [4 /*yield*/, import("react-icons/pi")];
                case 760:
                    PiTimerBold = (_b.sent()).PiTimerBold;
                    return [2 /*return*/, PiTimerBold];
                case 761: return [4 /*yield*/, import("react-icons/pi")];
                case 762:
                    PiTipJarBold = (_b.sent()).PiTipJarBold;
                    return [2 /*return*/, PiTipJarBold];
                case 763: return [4 /*yield*/, import("react-icons/pi")];
                case 764:
                    PiTipiBold = (_b.sent()).PiTipiBold;
                    return [2 /*return*/, PiTipiBold];
                case 765: return [4 /*yield*/, import("react-icons/pi")];
                case 766:
                    PiTireBold = (_b.sent()).PiTireBold;
                    return [2 /*return*/, PiTireBold];
                case 767: return [4 /*yield*/, import("react-icons/pi")];
                case 768:
                    PiToggleLeftBold = (_b.sent()).PiToggleLeftBold;
                    return [2 /*return*/, PiToggleLeftBold];
                case 769: return [4 /*yield*/, import("react-icons/pi")];
                case 770:
                    PiToggleRightBold = (_b.sent()).PiToggleRightBold;
                    return [2 /*return*/, PiToggleRightBold];
                case 771: return [4 /*yield*/, import("react-icons/pi")];
                case 772:
                    PiToiletBold = (_b.sent()).PiToiletBold;
                    return [2 /*return*/, PiToiletBold];
                case 773: return [4 /*yield*/, import("react-icons/pi")];
                case 774:
                    PiToiletPaperBold = (_b.sent()).PiToiletPaperBold;
                    return [2 /*return*/, PiToiletPaperBold];
                case 775: return [4 /*yield*/, import("react-icons/pi")];
                case 776:
                    PiToolboxBold = (_b.sent()).PiToolboxBold;
                    return [2 /*return*/, PiToolboxBold];
                case 777: return [4 /*yield*/, import("react-icons/pi")];
                case 778:
                    PiToothBold = (_b.sent()).PiToothBold;
                    return [2 /*return*/, PiToothBold];
                case 779: return [4 /*yield*/, import("react-icons/pi")];
                case 780:
                    PiTornadoBold = (_b.sent()).PiTornadoBold;
                    return [2 /*return*/, PiTornadoBold];
                case 781: return [4 /*yield*/, import("react-icons/pi")];
                case 782:
                    PiToteBold = (_b.sent()).PiToteBold;
                    return [2 /*return*/, PiToteBold];
                case 783: return [4 /*yield*/, import("react-icons/pi")];
                case 784:
                    PiToteSimpleBold = (_b.sent()).PiToteSimpleBold;
                    return [2 /*return*/, PiToteSimpleBold];
                case 785: return [4 /*yield*/, import("react-icons/pi")];
                case 786:
                    PiTowelBold = (_b.sent()).PiTowelBold;
                    return [2 /*return*/, PiTowelBold];
                case 787: return [4 /*yield*/, import("react-icons/pi")];
                case 788:
                    PiTractorBold = (_b.sent()).PiTractorBold;
                    return [2 /*return*/, PiTractorBold];
                case 789: return [4 /*yield*/, import("react-icons/pi")];
                case 790:
                    PiTrademarkBold = (_b.sent()).PiTrademarkBold;
                    return [2 /*return*/, PiTrademarkBold];
                case 791: return [4 /*yield*/, import("react-icons/pi")];
                case 792:
                    PiTrademarkRegisteredBold = (_b.sent()).PiTrademarkRegisteredBold;
                    return [2 /*return*/, PiTrademarkRegisteredBold];
                case 793: return [4 /*yield*/, import("react-icons/pi")];
                case 794:
                    PiTrafficConeBold = (_b.sent()).PiTrafficConeBold;
                    return [2 /*return*/, PiTrafficConeBold];
                case 795: return [4 /*yield*/, import("react-icons/pi")];
                case 796:
                    PiTrafficSignBold = (_b.sent()).PiTrafficSignBold;
                    return [2 /*return*/, PiTrafficSignBold];
                case 797: return [4 /*yield*/, import("react-icons/pi")];
                case 798:
                    PiTrafficSignalBold = (_b.sent()).PiTrafficSignalBold;
                    return [2 /*return*/, PiTrafficSignalBold];
                case 799: return [4 /*yield*/, import("react-icons/pi")];
                case 800:
                    PiTrainBold = (_b.sent()).PiTrainBold;
                    return [2 /*return*/, PiTrainBold];
                case 801: return [4 /*yield*/, import("react-icons/pi")];
                case 802:
                    PiTrainRegionalBold = (_b.sent()).PiTrainRegionalBold;
                    return [2 /*return*/, PiTrainRegionalBold];
                case 803: return [4 /*yield*/, import("react-icons/pi")];
                case 804:
                    PiTrainSimpleBold = (_b.sent()).PiTrainSimpleBold;
                    return [2 /*return*/, PiTrainSimpleBold];
                case 805: return [4 /*yield*/, import("react-icons/pi")];
                case 806:
                    PiTramBold = (_b.sent()).PiTramBold;
                    return [2 /*return*/, PiTramBold];
                case 807: return [4 /*yield*/, import("react-icons/pi")];
                case 808:
                    PiTranslateBold = (_b.sent()).PiTranslateBold;
                    return [2 /*return*/, PiTranslateBold];
                case 809: return [4 /*yield*/, import("react-icons/pi")];
                case 810:
                    PiTrashBold = (_b.sent()).PiTrashBold;
                    return [2 /*return*/, PiTrashBold];
                case 811: return [4 /*yield*/, import("react-icons/pi")];
                case 812:
                    PiTrashSimpleBold = (_b.sent()).PiTrashSimpleBold;
                    return [2 /*return*/, PiTrashSimpleBold];
                case 813: return [4 /*yield*/, import("react-icons/pi")];
                case 814:
                    PiTrayArrowDownBold = (_b.sent()).PiTrayArrowDownBold;
                    return [2 /*return*/, PiTrayArrowDownBold];
                case 815: return [4 /*yield*/, import("react-icons/pi")];
                case 816:
                    PiTrayArrowUpBold = (_b.sent()).PiTrayArrowUpBold;
                    return [2 /*return*/, PiTrayArrowUpBold];
                case 817: return [4 /*yield*/, import("react-icons/pi")];
                case 818:
                    PiTrayBold = (_b.sent()).PiTrayBold;
                    return [2 /*return*/, PiTrayBold];
                case 819: return [4 /*yield*/, import("react-icons/pi")];
                case 820:
                    PiTreasureChestBold = (_b.sent()).PiTreasureChestBold;
                    return [2 /*return*/, PiTreasureChestBold];
                case 821: return [4 /*yield*/, import("react-icons/pi")];
                case 822:
                    PiTreeBold = (_b.sent()).PiTreeBold;
                    return [2 /*return*/, PiTreeBold];
                case 823: return [4 /*yield*/, import("react-icons/pi")];
                case 824:
                    PiTreeEvergreenBold = (_b.sent()).PiTreeEvergreenBold;
                    return [2 /*return*/, PiTreeEvergreenBold];
                case 825: return [4 /*yield*/, import("react-icons/pi")];
                case 826:
                    PiTreePalmBold = (_b.sent()).PiTreePalmBold;
                    return [2 /*return*/, PiTreePalmBold];
                case 827: return [4 /*yield*/, import("react-icons/pi")];
                case 828:
                    PiTreeStructureBold = (_b.sent()).PiTreeStructureBold;
                    return [2 /*return*/, PiTreeStructureBold];
                case 829: return [4 /*yield*/, import("react-icons/pi")];
                case 830:
                    PiTreeViewBold = (_b.sent()).PiTreeViewBold;
                    return [2 /*return*/, PiTreeViewBold];
                case 831: return [4 /*yield*/, import("react-icons/pi")];
                case 832:
                    PiTrendDownBold = (_b.sent()).PiTrendDownBold;
                    return [2 /*return*/, PiTrendDownBold];
                case 833: return [4 /*yield*/, import("react-icons/pi")];
                case 834:
                    PiTrendUpBold = (_b.sent()).PiTrendUpBold;
                    return [2 /*return*/, PiTrendUpBold];
                case 835: return [4 /*yield*/, import("react-icons/pi")];
                case 836:
                    PiTriangleBold = (_b.sent()).PiTriangleBold;
                    return [2 /*return*/, PiTriangleBold];
                case 837: return [4 /*yield*/, import("react-icons/pi")];
                case 838:
                    PiTriangleDashedBold = (_b.sent()).PiTriangleDashedBold;
                    return [2 /*return*/, PiTriangleDashedBold];
                case 839: return [4 /*yield*/, import("react-icons/pi")];
                case 840:
                    PiTrolleyBold = (_b.sent()).PiTrolleyBold;
                    return [2 /*return*/, PiTrolleyBold];
                case 841: return [4 /*yield*/, import("react-icons/pi")];
                case 842:
                    PiTrolleySuitcaseBold = (_b.sent()).PiTrolleySuitcaseBold;
                    return [2 /*return*/, PiTrolleySuitcaseBold];
                case 843: return [4 /*yield*/, import("react-icons/pi")];
                case 844:
                    PiTrophyBold = (_b.sent()).PiTrophyBold;
                    return [2 /*return*/, PiTrophyBold];
                case 845: return [4 /*yield*/, import("react-icons/pi")];
                case 846:
                    PiTruckBold = (_b.sent()).PiTruckBold;
                    return [2 /*return*/, PiTruckBold];
                case 847: return [4 /*yield*/, import("react-icons/pi")];
                case 848:
                    PiTruckTrailerBold = (_b.sent()).PiTruckTrailerBold;
                    return [2 /*return*/, PiTruckTrailerBold];
                case 849: return [4 /*yield*/, import("react-icons/pi")];
                case 850:
                    PiTumblrLogoBold = (_b.sent()).PiTumblrLogoBold;
                    return [2 /*return*/, PiTumblrLogoBold];
                case 851: return [4 /*yield*/, import("react-icons/pi")];
                case 852:
                    PiTwitchLogoBold = (_b.sent()).PiTwitchLogoBold;
                    return [2 /*return*/, PiTwitchLogoBold];
                case 853: return [4 /*yield*/, import("react-icons/pi")];
                case 854:
                    PiTwitterLogoBold = (_b.sent()).PiTwitterLogoBold;
                    return [2 /*return*/, PiTwitterLogoBold];
                case 855: return [4 /*yield*/, import("react-icons/pi")];
                case 856:
                    PiUmbrellaBold = (_b.sent()).PiUmbrellaBold;
                    return [2 /*return*/, PiUmbrellaBold];
                case 857: return [4 /*yield*/, import("react-icons/pi")];
                case 858:
                    PiUmbrellaSimpleBold = (_b.sent()).PiUmbrellaSimpleBold;
                    return [2 /*return*/, PiUmbrellaSimpleBold];
                case 859: return [4 /*yield*/, import("react-icons/pi")];
                case 860:
                    PiUnionBold = (_b.sent()).PiUnionBold;
                    return [2 /*return*/, PiUnionBold];
                case 861: return [4 /*yield*/, import("react-icons/pi")];
                case 862:
                    PiUniteBold = (_b.sent()).PiUniteBold;
                    return [2 /*return*/, PiUniteBold];
                case 863: return [4 /*yield*/, import("react-icons/pi")];
                case 864:
                    PiUniteSquareBold = (_b.sent()).PiUniteSquareBold;
                    return [2 /*return*/, PiUniteSquareBold];
                case 865: return [4 /*yield*/, import("react-icons/pi")];
                case 866:
                    PiUploadBold = (_b.sent()).PiUploadBold;
                    return [2 /*return*/, PiUploadBold];
                case 867: return [4 /*yield*/, import("react-icons/pi")];
                case 868:
                    PiUploadSimpleBold = (_b.sent()).PiUploadSimpleBold;
                    return [2 /*return*/, PiUploadSimpleBold];
                case 869: return [4 /*yield*/, import("react-icons/pi")];
                case 870:
                    PiUsbBold = (_b.sent()).PiUsbBold;
                    return [2 /*return*/, PiUsbBold];
                case 871: return [4 /*yield*/, import("react-icons/pi")];
                case 872:
                    PiUserBold = (_b.sent()).PiUserBold;
                    return [2 /*return*/, PiUserBold];
                case 873: return [4 /*yield*/, import("react-icons/pi")];
                case 874:
                    PiUserCheckBold = (_b.sent()).PiUserCheckBold;
                    return [2 /*return*/, PiUserCheckBold];
                case 875: return [4 /*yield*/, import("react-icons/pi")];
                case 876:
                    PiUserCircleBold = (_b.sent()).PiUserCircleBold;
                    return [2 /*return*/, PiUserCircleBold];
                case 877: return [4 /*yield*/, import("react-icons/pi")];
                case 878:
                    PiUserCircleCheckBold = (_b.sent()).PiUserCircleCheckBold;
                    return [2 /*return*/, PiUserCircleCheckBold];
                case 879: return [4 /*yield*/, import("react-icons/pi")];
                case 880:
                    PiUserCircleDashedBold = (_b.sent()).PiUserCircleDashedBold;
                    return [2 /*return*/, PiUserCircleDashedBold];
                case 881: return [4 /*yield*/, import("react-icons/pi")];
                case 882:
                    PiUserCircleGearBold = (_b.sent()).PiUserCircleGearBold;
                    return [2 /*return*/, PiUserCircleGearBold];
                case 883: return [4 /*yield*/, import("react-icons/pi")];
                case 884:
                    PiUserCircleMinusBold = (_b.sent()).PiUserCircleMinusBold;
                    return [2 /*return*/, PiUserCircleMinusBold];
                case 885: return [4 /*yield*/, import("react-icons/pi")];
                case 886:
                    PiUserCirclePlusBold = (_b.sent()).PiUserCirclePlusBold;
                    return [2 /*return*/, PiUserCirclePlusBold];
                case 887: return [4 /*yield*/, import("react-icons/pi")];
                case 888:
                    PiUserFocusBold = (_b.sent()).PiUserFocusBold;
                    return [2 /*return*/, PiUserFocusBold];
                case 889: return [4 /*yield*/, import("react-icons/pi")];
                case 890:
                    PiUserGearBold = (_b.sent()).PiUserGearBold;
                    return [2 /*return*/, PiUserGearBold];
                case 891: return [4 /*yield*/, import("react-icons/pi")];
                case 892:
                    PiUserListBold = (_b.sent()).PiUserListBold;
                    return [2 /*return*/, PiUserListBold];
                case 893: return [4 /*yield*/, import("react-icons/pi")];
                case 894:
                    PiUserMinusBold = (_b.sent()).PiUserMinusBold;
                    return [2 /*return*/, PiUserMinusBold];
                case 895: return [4 /*yield*/, import("react-icons/pi")];
                case 896:
                    PiUserPlusBold = (_b.sent()).PiUserPlusBold;
                    return [2 /*return*/, PiUserPlusBold];
                case 897: return [4 /*yield*/, import("react-icons/pi")];
                case 898:
                    PiUserRectangleBold = (_b.sent()).PiUserRectangleBold;
                    return [2 /*return*/, PiUserRectangleBold];
                case 899: return [4 /*yield*/, import("react-icons/pi")];
                case 900:
                    PiUserSoundBold = (_b.sent()).PiUserSoundBold;
                    return [2 /*return*/, PiUserSoundBold];
                case 901: return [4 /*yield*/, import("react-icons/pi")];
                case 902:
                    PiUserSquareBold = (_b.sent()).PiUserSquareBold;
                    return [2 /*return*/, PiUserSquareBold];
                case 903: return [4 /*yield*/, import("react-icons/pi")];
                case 904:
                    PiUserSwitchBold = (_b.sent()).PiUserSwitchBold;
                    return [2 /*return*/, PiUserSwitchBold];
                case 905: return [4 /*yield*/, import("react-icons/pi")];
                case 906:
                    PiUsersBold = (_b.sent()).PiUsersBold;
                    return [2 /*return*/, PiUsersBold];
                case 907: return [4 /*yield*/, import("react-icons/pi")];
                case 908:
                    PiUsersFourBold = (_b.sent()).PiUsersFourBold;
                    return [2 /*return*/, PiUsersFourBold];
                case 909: return [4 /*yield*/, import("react-icons/pi")];
                case 910:
                    PiUsersThreeBold = (_b.sent()).PiUsersThreeBold;
                    return [2 /*return*/, PiUsersThreeBold];
                case 911: return [4 /*yield*/, import("react-icons/pi")];
                case 912:
                    PiVanBold = (_b.sent()).PiVanBold;
                    return [2 /*return*/, PiVanBold];
                case 913: return [4 /*yield*/, import("react-icons/pi")];
                case 914:
                    PiVaultBold = (_b.sent()).PiVaultBold;
                    return [2 /*return*/, PiVaultBold];
                case 915: return [4 /*yield*/, import("react-icons/pi")];
                case 916:
                    PiVectorThreeBold = (_b.sent()).PiVectorThreeBold;
                    return [2 /*return*/, PiVectorThreeBold];
                case 917: return [4 /*yield*/, import("react-icons/pi")];
                case 918:
                    PiVectorTwoBold = (_b.sent()).PiVectorTwoBold;
                    return [2 /*return*/, PiVectorTwoBold];
                case 919: return [4 /*yield*/, import("react-icons/pi")];
                case 920:
                    PiVibrateBold = (_b.sent()).PiVibrateBold;
                    return [2 /*return*/, PiVibrateBold];
                case 921: return [4 /*yield*/, import("react-icons/pi")];
                case 922:
                    PiVideoBold = (_b.sent()).PiVideoBold;
                    return [2 /*return*/, PiVideoBold];
                case 923: return [4 /*yield*/, import("react-icons/pi")];
                case 924:
                    PiVideoCameraBold = (_b.sent()).PiVideoCameraBold;
                    return [2 /*return*/, PiVideoCameraBold];
                case 925: return [4 /*yield*/, import("react-icons/pi")];
                case 926:
                    PiVideoCameraSlashBold = (_b.sent()).PiVideoCameraSlashBold;
                    return [2 /*return*/, PiVideoCameraSlashBold];
                case 927: return [4 /*yield*/, import("react-icons/pi")];
                case 928:
                    PiVideoConferenceBold = (_b.sent()).PiVideoConferenceBold;
                    return [2 /*return*/, PiVideoConferenceBold];
                case 929: return [4 /*yield*/, import("react-icons/pi")];
                case 930:
                    PiVignetteBold = (_b.sent()).PiVignetteBold;
                    return [2 /*return*/, PiVignetteBold];
                case 931: return [4 /*yield*/, import("react-icons/pi")];
                case 932:
                    PiVinylRecordBold = (_b.sent()).PiVinylRecordBold;
                    return [2 /*return*/, PiVinylRecordBold];
                case 933: return [4 /*yield*/, import("react-icons/pi")];
                case 934:
                    PiVirtualRealityBold = (_b.sent()).PiVirtualRealityBold;
                    return [2 /*return*/, PiVirtualRealityBold];
                case 935: return [4 /*yield*/, import("react-icons/pi")];
                case 936:
                    PiVirusBold = (_b.sent()).PiVirusBold;
                    return [2 /*return*/, PiVirusBold];
                case 937: return [4 /*yield*/, import("react-icons/pi")];
                case 938:
                    PiVisorBold = (_b.sent()).PiVisorBold;
                    return [2 /*return*/, PiVisorBold];
                case 939: return [4 /*yield*/, import("react-icons/pi")];
                case 940:
                    PiVoicemailBold = (_b.sent()).PiVoicemailBold;
                    return [2 /*return*/, PiVoicemailBold];
                case 941: return [4 /*yield*/, import("react-icons/pi")];
                case 942:
                    PiVolleyballBold = (_b.sent()).PiVolleyballBold;
                    return [2 /*return*/, PiVolleyballBold];
                case 943: return [4 /*yield*/, import("react-icons/pi")];
                case 944:
                    PiWallBold = (_b.sent()).PiWallBold;
                    return [2 /*return*/, PiWallBold];
                case 945: return [4 /*yield*/, import("react-icons/pi")];
                case 946:
                    PiWalletBold = (_b.sent()).PiWalletBold;
                    return [2 /*return*/, PiWalletBold];
                case 947: return [4 /*yield*/, import("react-icons/pi")];
                case 948:
                    PiWarehouseBold = (_b.sent()).PiWarehouseBold;
                    return [2 /*return*/, PiWarehouseBold];
                case 949: return [4 /*yield*/, import("react-icons/pi")];
                case 950:
                    PiWarningBold = (_b.sent()).PiWarningBold;
                    return [2 /*return*/, PiWarningBold];
                case 951: return [4 /*yield*/, import("react-icons/pi")];
                case 952:
                    PiWarningCircleBold = (_b.sent()).PiWarningCircleBold;
                    return [2 /*return*/, PiWarningCircleBold];
                case 953: return [4 /*yield*/, import("react-icons/pi")];
                case 954:
                    PiWarningDiamondBold = (_b.sent()).PiWarningDiamondBold;
                    return [2 /*return*/, PiWarningDiamondBold];
                case 955: return [4 /*yield*/, import("react-icons/pi")];
                case 956:
                    PiWarningOctagonBold = (_b.sent()).PiWarningOctagonBold;
                    return [2 /*return*/, PiWarningOctagonBold];
                case 957: return [4 /*yield*/, import("react-icons/pi")];
                case 958:
                    PiWashingMachineBold = (_b.sent()).PiWashingMachineBold;
                    return [2 /*return*/, PiWashingMachineBold];
                case 959: return [4 /*yield*/, import("react-icons/pi")];
                case 960:
                    PiWatchBold = (_b.sent()).PiWatchBold;
                    return [2 /*return*/, PiWatchBold];
                case 961: return [4 /*yield*/, import("react-icons/pi")];
                case 962:
                    PiWaveSawtoothBold = (_b.sent()).PiWaveSawtoothBold;
                    return [2 /*return*/, PiWaveSawtoothBold];
                case 963: return [4 /*yield*/, import("react-icons/pi")];
                case 964:
                    PiWaveSineBold = (_b.sent()).PiWaveSineBold;
                    return [2 /*return*/, PiWaveSineBold];
                case 965: return [4 /*yield*/, import("react-icons/pi")];
                case 966:
                    PiWaveSquareBold = (_b.sent()).PiWaveSquareBold;
                    return [2 /*return*/, PiWaveSquareBold];
                case 967: return [4 /*yield*/, import("react-icons/pi")];
                case 968:
                    PiWaveTriangleBold = (_b.sent()).PiWaveTriangleBold;
                    return [2 /*return*/, PiWaveTriangleBold];
                case 969: return [4 /*yield*/, import("react-icons/pi")];
                case 970:
                    PiWaveformBold = (_b.sent()).PiWaveformBold;
                    return [2 /*return*/, PiWaveformBold];
                case 971: return [4 /*yield*/, import("react-icons/pi")];
                case 972:
                    PiWaveformSlashBold = (_b.sent()).PiWaveformSlashBold;
                    return [2 /*return*/, PiWaveformSlashBold];
                case 973: return [4 /*yield*/, import("react-icons/pi")];
                case 974:
                    PiWavesBold = (_b.sent()).PiWavesBold;
                    return [2 /*return*/, PiWavesBold];
                case 975: return [4 /*yield*/, import("react-icons/pi")];
                case 976:
                    PiWebcamBold = (_b.sent()).PiWebcamBold;
                    return [2 /*return*/, PiWebcamBold];
                case 977: return [4 /*yield*/, import("react-icons/pi")];
                case 978:
                    PiWebcamSlashBold = (_b.sent()).PiWebcamSlashBold;
                    return [2 /*return*/, PiWebcamSlashBold];
                case 979: return [4 /*yield*/, import("react-icons/pi")];
                case 980:
                    PiWebhooksLogoBold = (_b.sent()).PiWebhooksLogoBold;
                    return [2 /*return*/, PiWebhooksLogoBold];
                case 981: return [4 /*yield*/, import("react-icons/pi")];
                case 982:
                    PiWechatLogoBold = (_b.sent()).PiWechatLogoBold;
                    return [2 /*return*/, PiWechatLogoBold];
                case 983: return [4 /*yield*/, import("react-icons/pi")];
                case 984:
                    PiWhatsappLogoBold = (_b.sent()).PiWhatsappLogoBold;
                    return [2 /*return*/, PiWhatsappLogoBold];
                case 985: return [4 /*yield*/, import("react-icons/pi")];
                case 986:
                    PiWheelchairBold = (_b.sent()).PiWheelchairBold;
                    return [2 /*return*/, PiWheelchairBold];
                case 987: return [4 /*yield*/, import("react-icons/pi")];
                case 988:
                    PiWheelchairMotionBold = (_b.sent()).PiWheelchairMotionBold;
                    return [2 /*return*/, PiWheelchairMotionBold];
                case 989: return [4 /*yield*/, import("react-icons/pi")];
                case 990:
                    PiWifiHighBold = (_b.sent()).PiWifiHighBold;
                    return [2 /*return*/, PiWifiHighBold];
                case 991: return [4 /*yield*/, import("react-icons/pi")];
                case 992:
                    PiWifiLowBold = (_b.sent()).PiWifiLowBold;
                    return [2 /*return*/, PiWifiLowBold];
                case 993: return [4 /*yield*/, import("react-icons/pi")];
                case 994:
                    PiWifiMediumBold = (_b.sent()).PiWifiMediumBold;
                    return [2 /*return*/, PiWifiMediumBold];
                case 995: return [4 /*yield*/, import("react-icons/pi")];
                case 996:
                    PiWifiNoneBold = (_b.sent()).PiWifiNoneBold;
                    return [2 /*return*/, PiWifiNoneBold];
                case 997: return [4 /*yield*/, import("react-icons/pi")];
                case 998:
                    PiWifiSlashBold = (_b.sent()).PiWifiSlashBold;
                    return [2 /*return*/, PiWifiSlashBold];
                case 999: return [4 /*yield*/, import("react-icons/pi")];
                case 1000:
                    PiWifiXBold = (_b.sent()).PiWifiXBold;
                    return [2 /*return*/, PiWifiXBold];
                case 1001: return [4 /*yield*/, import("react-icons/pi")];
                case 1002:
                    PiWindBold = (_b.sent()).PiWindBold;
                    return [2 /*return*/, PiWindBold];
                case 1003: return [4 /*yield*/, import("react-icons/pi")];
                case 1004:
                    PiWindmillBold = (_b.sent()).PiWindmillBold;
                    return [2 /*return*/, PiWindmillBold];
                case 1005: return [4 /*yield*/, import("react-icons/pi")];
                case 1006:
                    PiWindowsLogoBold = (_b.sent()).PiWindowsLogoBold;
                    return [2 /*return*/, PiWindowsLogoBold];
                case 1007: return [4 /*yield*/, import("react-icons/pi")];
                case 1008:
                    PiWineBold = (_b.sent()).PiWineBold;
                    return [2 /*return*/, PiWineBold];
                case 1009: return [4 /*yield*/, import("react-icons/pi")];
                case 1010:
                    PiWrenchBold = (_b.sent()).PiWrenchBold;
                    return [2 /*return*/, PiWrenchBold];
                case 1011: return [4 /*yield*/, import("react-icons/pi")];
                case 1012:
                    PiXBold = (_b.sent()).PiXBold;
                    return [2 /*return*/, PiXBold];
                case 1013: return [4 /*yield*/, import("react-icons/pi")];
                case 1014:
                    PiXCircleBold = (_b.sent()).PiXCircleBold;
                    return [2 /*return*/, PiXCircleBold];
                case 1015: return [4 /*yield*/, import("react-icons/pi")];
                case 1016:
                    PiXLogoBold = (_b.sent()).PiXLogoBold;
                    return [2 /*return*/, PiXLogoBold];
                case 1017: return [4 /*yield*/, import("react-icons/pi")];
                case 1018:
                    PiXSquareBold = (_b.sent()).PiXSquareBold;
                    return [2 /*return*/, PiXSquareBold];
                case 1019: return [4 /*yield*/, import("react-icons/pi")];
                case 1020:
                    PiYarnBold = (_b.sent()).PiYarnBold;
                    return [2 /*return*/, PiYarnBold];
                case 1021: return [4 /*yield*/, import("react-icons/pi")];
                case 1022:
                    PiYinYangBold = (_b.sent()).PiYinYangBold;
                    return [2 /*return*/, PiYinYangBold];
                case 1023: return [4 /*yield*/, import("react-icons/pi")];
                case 1024:
                    PiYoutubeLogoBold = (_b.sent()).PiYoutubeLogoBold;
                    return [2 /*return*/, PiYoutubeLogoBold];
                case 1025: return [4 /*yield*/, import("react-icons/pi")];
                case 1026:
                    PiAcornDuotone = (_b.sent()).PiAcornDuotone;
                    return [2 /*return*/, PiAcornDuotone];
                case 1027: return [4 /*yield*/, import("react-icons/pi")];
                case 1028:
                    PiAddressBookDuotone = (_b.sent()).PiAddressBookDuotone;
                    return [2 /*return*/, PiAddressBookDuotone];
                case 1029: return [4 /*yield*/, import("react-icons/pi")];
                case 1030:
                    PiAddressBookTabsDuotone = (_b.sent()).PiAddressBookTabsDuotone;
                    return [2 /*return*/, PiAddressBookTabsDuotone];
                case 1031: return [4 /*yield*/, import("react-icons/pi")];
                case 1032:
                    PiAirTrafficControlDuotone = (_b.sent()).PiAirTrafficControlDuotone;
                    return [2 /*return*/, PiAirTrafficControlDuotone];
                case 1033: return [4 /*yield*/, import("react-icons/pi")];
                case 1034:
                    PiAirplaneDuotone = (_b.sent()).PiAirplaneDuotone;
                    return [2 /*return*/, PiAirplaneDuotone];
                case 1035: return [4 /*yield*/, import("react-icons/pi")];
                case 1036:
                    PiAirplaneInFlightDuotone = (_b.sent()).PiAirplaneInFlightDuotone;
                    return [2 /*return*/, PiAirplaneInFlightDuotone];
                case 1037: return [4 /*yield*/, import("react-icons/pi")];
                case 1038:
                    PiAirplaneLandingDuotone = (_b.sent()).PiAirplaneLandingDuotone;
                    return [2 /*return*/, PiAirplaneLandingDuotone];
                case 1039: return [4 /*yield*/, import("react-icons/pi")];
                case 1040:
                    PiAirplaneTakeoffDuotone = (_b.sent()).PiAirplaneTakeoffDuotone;
                    return [2 /*return*/, PiAirplaneTakeoffDuotone];
                case 1041: return [4 /*yield*/, import("react-icons/pi")];
                case 1042:
                    PiAirplaneTaxiingDuotone = (_b.sent()).PiAirplaneTaxiingDuotone;
                    return [2 /*return*/, PiAirplaneTaxiingDuotone];
                case 1043: return [4 /*yield*/, import("react-icons/pi")];
                case 1044:
                    PiAirplaneTiltDuotone = (_b.sent()).PiAirplaneTiltDuotone;
                    return [2 /*return*/, PiAirplaneTiltDuotone];
                case 1045: return [4 /*yield*/, import("react-icons/pi")];
                case 1046:
                    PiAirplayDuotone = (_b.sent()).PiAirplayDuotone;
                    return [2 /*return*/, PiAirplayDuotone];
                case 1047: return [4 /*yield*/, import("react-icons/pi")];
                case 1048:
                    PiAlarmDuotone = (_b.sent()).PiAlarmDuotone;
                    return [2 /*return*/, PiAlarmDuotone];
                case 1049: return [4 /*yield*/, import("react-icons/pi")];
                case 1050:
                    PiAlienDuotone = (_b.sent()).PiAlienDuotone;
                    return [2 /*return*/, PiAlienDuotone];
                case 1051: return [4 /*yield*/, import("react-icons/pi")];
                case 1052:
                    PiAlignBottomDuotone = (_b.sent()).PiAlignBottomDuotone;
                    return [2 /*return*/, PiAlignBottomDuotone];
                case 1053: return [4 /*yield*/, import("react-icons/pi")];
                case 1054:
                    PiAlignBottomSimpleDuotone = (_b.sent()).PiAlignBottomSimpleDuotone;
                    return [2 /*return*/, PiAlignBottomSimpleDuotone];
                case 1055: return [4 /*yield*/, import("react-icons/pi")];
                case 1056:
                    PiAlignCenterHorizontalDuotone = (_b.sent()).PiAlignCenterHorizontalDuotone;
                    return [2 /*return*/, PiAlignCenterHorizontalDuotone];
                case 1057: return [4 /*yield*/, import("react-icons/pi")];
                case 1058:
                    PiAlignCenterHorizontalSimpleDuotone = (_b.sent()).PiAlignCenterHorizontalSimpleDuotone;
                    return [2 /*return*/, PiAlignCenterHorizontalSimpleDuotone];
                case 1059: return [4 /*yield*/, import("react-icons/pi")];
                case 1060:
                    PiAlignCenterVerticalDuotone = (_b.sent()).PiAlignCenterVerticalDuotone;
                    return [2 /*return*/, PiAlignCenterVerticalDuotone];
                case 1061: return [4 /*yield*/, import("react-icons/pi")];
                case 1062:
                    PiAlignCenterVerticalSimpleDuotone = (_b.sent()).PiAlignCenterVerticalSimpleDuotone;
                    return [2 /*return*/, PiAlignCenterVerticalSimpleDuotone];
                case 1063: return [4 /*yield*/, import("react-icons/pi")];
                case 1064:
                    PiAlignLeftDuotone = (_b.sent()).PiAlignLeftDuotone;
                    return [2 /*return*/, PiAlignLeftDuotone];
                case 1065: return [4 /*yield*/, import("react-icons/pi")];
                case 1066:
                    PiAlignLeftSimpleDuotone = (_b.sent()).PiAlignLeftSimpleDuotone;
                    return [2 /*return*/, PiAlignLeftSimpleDuotone];
                case 1067: return [4 /*yield*/, import("react-icons/pi")];
                case 1068:
                    PiAlignRightDuotone = (_b.sent()).PiAlignRightDuotone;
                    return [2 /*return*/, PiAlignRightDuotone];
                case 1069: return [4 /*yield*/, import("react-icons/pi")];
                case 1070:
                    PiAlignRightSimpleDuotone = (_b.sent()).PiAlignRightSimpleDuotone;
                    return [2 /*return*/, PiAlignRightSimpleDuotone];
                case 1071: return [4 /*yield*/, import("react-icons/pi")];
                case 1072:
                    PiAlignTopDuotone = (_b.sent()).PiAlignTopDuotone;
                    return [2 /*return*/, PiAlignTopDuotone];
                case 1073: return [4 /*yield*/, import("react-icons/pi")];
                case 1074:
                    PiAlignTopSimpleDuotone = (_b.sent()).PiAlignTopSimpleDuotone;
                    return [2 /*return*/, PiAlignTopSimpleDuotone];
                case 1075: return [4 /*yield*/, import("react-icons/pi")];
                case 1076:
                    PiAmazonLogoDuotone = (_b.sent()).PiAmazonLogoDuotone;
                    return [2 /*return*/, PiAmazonLogoDuotone];
                case 1077: return [4 /*yield*/, import("react-icons/pi")];
                case 1078:
                    PiAmbulanceDuotone = (_b.sent()).PiAmbulanceDuotone;
                    return [2 /*return*/, PiAmbulanceDuotone];
                case 1079: return [4 /*yield*/, import("react-icons/pi")];
                case 1080:
                    PiAnchorDuotone = (_b.sent()).PiAnchorDuotone;
                    return [2 /*return*/, PiAnchorDuotone];
                case 1081: return [4 /*yield*/, import("react-icons/pi")];
                case 1082:
                    PiAnchorSimpleDuotone = (_b.sent()).PiAnchorSimpleDuotone;
                    return [2 /*return*/, PiAnchorSimpleDuotone];
                case 1083: return [4 /*yield*/, import("react-icons/pi")];
                case 1084:
                    PiAndroidLogoDuotone = (_b.sent()).PiAndroidLogoDuotone;
                    return [2 /*return*/, PiAndroidLogoDuotone];
                case 1085: return [4 /*yield*/, import("react-icons/pi")];
                case 1086:
                    PiAngleDuotone = (_b.sent()).PiAngleDuotone;
                    return [2 /*return*/, PiAngleDuotone];
                case 1087: return [4 /*yield*/, import("react-icons/pi")];
                case 1088:
                    PiAngularLogoDuotone = (_b.sent()).PiAngularLogoDuotone;
                    return [2 /*return*/, PiAngularLogoDuotone];
                case 1089: return [4 /*yield*/, import("react-icons/pi")];
                case 1090:
                    PiApertureDuotone = (_b.sent()).PiApertureDuotone;
                    return [2 /*return*/, PiApertureDuotone];
                case 1091: return [4 /*yield*/, import("react-icons/pi")];
                case 1092:
                    PiAppStoreLogoDuotone = (_b.sent()).PiAppStoreLogoDuotone;
                    return [2 /*return*/, PiAppStoreLogoDuotone];
                case 1093: return [4 /*yield*/, import("react-icons/pi")];
                case 1094:
                    PiAppWindowDuotone = (_b.sent()).PiAppWindowDuotone;
                    return [2 /*return*/, PiAppWindowDuotone];
                case 1095: return [4 /*yield*/, import("react-icons/pi")];
                case 1096:
                    PiAppleLogoDuotone = (_b.sent()).PiAppleLogoDuotone;
                    return [2 /*return*/, PiAppleLogoDuotone];
                case 1097: return [4 /*yield*/, import("react-icons/pi")];
                case 1098:
                    PiApplePodcastsLogoDuotone = (_b.sent()).PiApplePodcastsLogoDuotone;
                    return [2 /*return*/, PiApplePodcastsLogoDuotone];
                case 1099: return [4 /*yield*/, import("react-icons/pi")];
                case 1100:
                    PiApproximateEqualsDuotone = (_b.sent()).PiApproximateEqualsDuotone;
                    return [2 /*return*/, PiApproximateEqualsDuotone];
                case 1101: return [4 /*yield*/, import("react-icons/pi")];
                case 1102:
                    PiArchiveDuotone = (_b.sent()).PiArchiveDuotone;
                    return [2 /*return*/, PiArchiveDuotone];
                case 1103: return [4 /*yield*/, import("react-icons/pi")];
                case 1104:
                    PiArmchairDuotone = (_b.sent()).PiArmchairDuotone;
                    return [2 /*return*/, PiArmchairDuotone];
                case 1105: return [4 /*yield*/, import("react-icons/pi")];
                case 1106:
                    PiArrowArcLeftDuotone = (_b.sent()).PiArrowArcLeftDuotone;
                    return [2 /*return*/, PiArrowArcLeftDuotone];
                case 1107: return [4 /*yield*/, import("react-icons/pi")];
                case 1108:
                    PiArrowArcRightDuotone = (_b.sent()).PiArrowArcRightDuotone;
                    return [2 /*return*/, PiArrowArcRightDuotone];
                case 1109: return [4 /*yield*/, import("react-icons/pi")];
                case 1110:
                    PiArrowBendDoubleUpLeftDuotone = (_b.sent()).PiArrowBendDoubleUpLeftDuotone;
                    return [2 /*return*/, PiArrowBendDoubleUpLeftDuotone];
                case 1111: return [4 /*yield*/, import("react-icons/pi")];
                case 1112:
                    PiArrowBendDoubleUpRightDuotone = (_b.sent()).PiArrowBendDoubleUpRightDuotone;
                    return [2 /*return*/, PiArrowBendDoubleUpRightDuotone];
                case 1113: return [4 /*yield*/, import("react-icons/pi")];
                case 1114:
                    PiArrowBendDownLeftDuotone = (_b.sent()).PiArrowBendDownLeftDuotone;
                    return [2 /*return*/, PiArrowBendDownLeftDuotone];
                case 1115: return [4 /*yield*/, import("react-icons/pi")];
                case 1116:
                    PiArrowBendDownRightDuotone = (_b.sent()).PiArrowBendDownRightDuotone;
                    return [2 /*return*/, PiArrowBendDownRightDuotone];
                case 1117: return [4 /*yield*/, import("react-icons/pi")];
                case 1118:
                    PiArrowBendLeftDownDuotone = (_b.sent()).PiArrowBendLeftDownDuotone;
                    return [2 /*return*/, PiArrowBendLeftDownDuotone];
                case 1119: return [4 /*yield*/, import("react-icons/pi")];
                case 1120:
                    PiArrowBendLeftUpDuotone = (_b.sent()).PiArrowBendLeftUpDuotone;
                    return [2 /*return*/, PiArrowBendLeftUpDuotone];
                case 1121: return [4 /*yield*/, import("react-icons/pi")];
                case 1122:
                    PiArrowBendRightDownDuotone = (_b.sent()).PiArrowBendRightDownDuotone;
                    return [2 /*return*/, PiArrowBendRightDownDuotone];
                case 1123: return [4 /*yield*/, import("react-icons/pi")];
                case 1124:
                    PiArrowBendRightUpDuotone = (_b.sent()).PiArrowBendRightUpDuotone;
                    return [2 /*return*/, PiArrowBendRightUpDuotone];
                case 1125: return [4 /*yield*/, import("react-icons/pi")];
                case 1126:
                    PiArrowBendUpLeftDuotone = (_b.sent()).PiArrowBendUpLeftDuotone;
                    return [2 /*return*/, PiArrowBendUpLeftDuotone];
                case 1127: return [4 /*yield*/, import("react-icons/pi")];
                case 1128:
                    PiArrowBendUpRightDuotone = (_b.sent()).PiArrowBendUpRightDuotone;
                    return [2 /*return*/, PiArrowBendUpRightDuotone];
                case 1129: return [4 /*yield*/, import("react-icons/pi")];
                case 1130:
                    PiArrowCircleDownDuotone = (_b.sent()).PiArrowCircleDownDuotone;
                    return [2 /*return*/, PiArrowCircleDownDuotone];
                case 1131: return [4 /*yield*/, import("react-icons/pi")];
                case 1132:
                    PiArrowCircleDownLeftDuotone = (_b.sent()).PiArrowCircleDownLeftDuotone;
                    return [2 /*return*/, PiArrowCircleDownLeftDuotone];
                case 1133: return [4 /*yield*/, import("react-icons/pi")];
                case 1134:
                    PiArrowCircleDownRightDuotone = (_b.sent()).PiArrowCircleDownRightDuotone;
                    return [2 /*return*/, PiArrowCircleDownRightDuotone];
                case 1135: return [4 /*yield*/, import("react-icons/pi")];
                case 1136:
                    PiArrowCircleLeftDuotone = (_b.sent()).PiArrowCircleLeftDuotone;
                    return [2 /*return*/, PiArrowCircleLeftDuotone];
                case 1137: return [4 /*yield*/, import("react-icons/pi")];
                case 1138:
                    PiArrowCircleRightDuotone = (_b.sent()).PiArrowCircleRightDuotone;
                    return [2 /*return*/, PiArrowCircleRightDuotone];
                case 1139: return [4 /*yield*/, import("react-icons/pi")];
                case 1140:
                    PiArrowCircleUpDuotone = (_b.sent()).PiArrowCircleUpDuotone;
                    return [2 /*return*/, PiArrowCircleUpDuotone];
                case 1141: return [4 /*yield*/, import("react-icons/pi")];
                case 1142:
                    PiArrowCircleUpLeftDuotone = (_b.sent()).PiArrowCircleUpLeftDuotone;
                    return [2 /*return*/, PiArrowCircleUpLeftDuotone];
                case 1143: return [4 /*yield*/, import("react-icons/pi")];
                case 1144:
                    PiArrowCircleUpRightDuotone = (_b.sent()).PiArrowCircleUpRightDuotone;
                    return [2 /*return*/, PiArrowCircleUpRightDuotone];
                case 1145: return [4 /*yield*/, import("react-icons/pi")];
                case 1146:
                    PiArrowClockwiseDuotone = (_b.sent()).PiArrowClockwiseDuotone;
                    return [2 /*return*/, PiArrowClockwiseDuotone];
                case 1147: return [4 /*yield*/, import("react-icons/pi")];
                case 1148:
                    PiArrowCounterClockwiseDuotone = (_b.sent()).PiArrowCounterClockwiseDuotone;
                    return [2 /*return*/, PiArrowCounterClockwiseDuotone];
                case 1149: return [4 /*yield*/, import("react-icons/pi")];
                case 1150:
                    PiArrowDownDuotone = (_b.sent()).PiArrowDownDuotone;
                    return [2 /*return*/, PiArrowDownDuotone];
                case 1151: return [4 /*yield*/, import("react-icons/pi")];
                case 1152:
                    PiArrowDownLeftDuotone = (_b.sent()).PiArrowDownLeftDuotone;
                    return [2 /*return*/, PiArrowDownLeftDuotone];
                case 1153: return [4 /*yield*/, import("react-icons/pi")];
                case 1154:
                    PiArrowDownRightDuotone = (_b.sent()).PiArrowDownRightDuotone;
                    return [2 /*return*/, PiArrowDownRightDuotone];
                case 1155: return [4 /*yield*/, import("react-icons/pi")];
                case 1156:
                    PiArrowElbowDownLeftDuotone = (_b.sent()).PiArrowElbowDownLeftDuotone;
                    return [2 /*return*/, PiArrowElbowDownLeftDuotone];
                case 1157: return [4 /*yield*/, import("react-icons/pi")];
                case 1158:
                    PiArrowElbowDownRightDuotone = (_b.sent()).PiArrowElbowDownRightDuotone;
                    return [2 /*return*/, PiArrowElbowDownRightDuotone];
                case 1159: return [4 /*yield*/, import("react-icons/pi")];
                case 1160:
                    PiArrowElbowLeftDownDuotone = (_b.sent()).PiArrowElbowLeftDownDuotone;
                    return [2 /*return*/, PiArrowElbowLeftDownDuotone];
                case 1161: return [4 /*yield*/, import("react-icons/pi")];
                case 1162:
                    PiArrowElbowLeftDuotone = (_b.sent()).PiArrowElbowLeftDuotone;
                    return [2 /*return*/, PiArrowElbowLeftDuotone];
                case 1163: return [4 /*yield*/, import("react-icons/pi")];
                case 1164:
                    PiArrowElbowLeftUpDuotone = (_b.sent()).PiArrowElbowLeftUpDuotone;
                    return [2 /*return*/, PiArrowElbowLeftUpDuotone];
                case 1165: return [4 /*yield*/, import("react-icons/pi")];
                case 1166:
                    PiArrowElbowRightDownDuotone = (_b.sent()).PiArrowElbowRightDownDuotone;
                    return [2 /*return*/, PiArrowElbowRightDownDuotone];
                case 1167: return [4 /*yield*/, import("react-icons/pi")];
                case 1168:
                    PiArrowElbowRightDuotone = (_b.sent()).PiArrowElbowRightDuotone;
                    return [2 /*return*/, PiArrowElbowRightDuotone];
                case 1169: return [4 /*yield*/, import("react-icons/pi")];
                case 1170:
                    PiArrowElbowRightUpDuotone = (_b.sent()).PiArrowElbowRightUpDuotone;
                    return [2 /*return*/, PiArrowElbowRightUpDuotone];
                case 1171: return [4 /*yield*/, import("react-icons/pi")];
                case 1172:
                    PiArrowElbowUpLeftDuotone = (_b.sent()).PiArrowElbowUpLeftDuotone;
                    return [2 /*return*/, PiArrowElbowUpLeftDuotone];
                case 1173: return [4 /*yield*/, import("react-icons/pi")];
                case 1174:
                    PiArrowElbowUpRightDuotone = (_b.sent()).PiArrowElbowUpRightDuotone;
                    return [2 /*return*/, PiArrowElbowUpRightDuotone];
                case 1175: return [4 /*yield*/, import("react-icons/pi")];
                case 1176:
                    PiArrowFatDownDuotone = (_b.sent()).PiArrowFatDownDuotone;
                    return [2 /*return*/, PiArrowFatDownDuotone];
                case 1177: return [4 /*yield*/, import("react-icons/pi")];
                case 1178:
                    PiArrowFatLeftDuotone = (_b.sent()).PiArrowFatLeftDuotone;
                    return [2 /*return*/, PiArrowFatLeftDuotone];
                case 1179: return [4 /*yield*/, import("react-icons/pi")];
                case 1180:
                    PiArrowFatLineDownDuotone = (_b.sent()).PiArrowFatLineDownDuotone;
                    return [2 /*return*/, PiArrowFatLineDownDuotone];
                case 1181: return [4 /*yield*/, import("react-icons/pi")];
                case 1182:
                    PiArrowFatLineLeftDuotone = (_b.sent()).PiArrowFatLineLeftDuotone;
                    return [2 /*return*/, PiArrowFatLineLeftDuotone];
                case 1183: return [4 /*yield*/, import("react-icons/pi")];
                case 1184:
                    PiArrowFatLineRightDuotone = (_b.sent()).PiArrowFatLineRightDuotone;
                    return [2 /*return*/, PiArrowFatLineRightDuotone];
                case 1185: return [4 /*yield*/, import("react-icons/pi")];
                case 1186:
                    PiArrowFatLineUpDuotone = (_b.sent()).PiArrowFatLineUpDuotone;
                    return [2 /*return*/, PiArrowFatLineUpDuotone];
                case 1187: return [4 /*yield*/, import("react-icons/pi")];
                case 1188:
                    PiArrowFatLinesDownDuotone = (_b.sent()).PiArrowFatLinesDownDuotone;
                    return [2 /*return*/, PiArrowFatLinesDownDuotone];
                case 1189: return [4 /*yield*/, import("react-icons/pi")];
                case 1190:
                    PiArrowFatLinesLeftDuotone = (_b.sent()).PiArrowFatLinesLeftDuotone;
                    return [2 /*return*/, PiArrowFatLinesLeftDuotone];
                case 1191: return [4 /*yield*/, import("react-icons/pi")];
                case 1192:
                    PiArrowFatLinesRightDuotone = (_b.sent()).PiArrowFatLinesRightDuotone;
                    return [2 /*return*/, PiArrowFatLinesRightDuotone];
                case 1193: return [4 /*yield*/, import("react-icons/pi")];
                case 1194:
                    PiArrowFatLinesUpDuotone = (_b.sent()).PiArrowFatLinesUpDuotone;
                    return [2 /*return*/, PiArrowFatLinesUpDuotone];
                case 1195: return [4 /*yield*/, import("react-icons/pi")];
                case 1196:
                    PiArrowFatRightDuotone = (_b.sent()).PiArrowFatRightDuotone;
                    return [2 /*return*/, PiArrowFatRightDuotone];
                case 1197: return [4 /*yield*/, import("react-icons/pi")];
                case 1198:
                    PiArrowFatUpDuotone = (_b.sent()).PiArrowFatUpDuotone;
                    return [2 /*return*/, PiArrowFatUpDuotone];
                case 1199: return [4 /*yield*/, import("react-icons/pi")];
                case 1200:
                    PiArrowLeftDuotone = (_b.sent()).PiArrowLeftDuotone;
                    return [2 /*return*/, PiArrowLeftDuotone];
                case 1201: return [4 /*yield*/, import("react-icons/pi")];
                case 1202:
                    PiArrowLineDownDuotone = (_b.sent()).PiArrowLineDownDuotone;
                    return [2 /*return*/, PiArrowLineDownDuotone];
                case 1203: return [4 /*yield*/, import("react-icons/pi")];
                case 1204:
                    PiArrowLineDownLeftDuotone = (_b.sent()).PiArrowLineDownLeftDuotone;
                    return [2 /*return*/, PiArrowLineDownLeftDuotone];
                case 1205: return [4 /*yield*/, import("react-icons/pi")];
                case 1206:
                    PiArrowLineDownRightDuotone = (_b.sent()).PiArrowLineDownRightDuotone;
                    return [2 /*return*/, PiArrowLineDownRightDuotone];
                case 1207: return [4 /*yield*/, import("react-icons/pi")];
                case 1208:
                    PiArrowLineLeftDuotone = (_b.sent()).PiArrowLineLeftDuotone;
                    return [2 /*return*/, PiArrowLineLeftDuotone];
                case 1209: return [4 /*yield*/, import("react-icons/pi")];
                case 1210:
                    PiArrowLineRightDuotone = (_b.sent()).PiArrowLineRightDuotone;
                    return [2 /*return*/, PiArrowLineRightDuotone];
                case 1211: return [4 /*yield*/, import("react-icons/pi")];
                case 1212:
                    PiArrowLineUpDuotone = (_b.sent()).PiArrowLineUpDuotone;
                    return [2 /*return*/, PiArrowLineUpDuotone];
                case 1213: return [4 /*yield*/, import("react-icons/pi")];
                case 1214:
                    PiArrowLineUpLeftDuotone = (_b.sent()).PiArrowLineUpLeftDuotone;
                    return [2 /*return*/, PiArrowLineUpLeftDuotone];
                case 1215: return [4 /*yield*/, import("react-icons/pi")];
                case 1216:
                    PiArrowLineUpRightDuotone = (_b.sent()).PiArrowLineUpRightDuotone;
                    return [2 /*return*/, PiArrowLineUpRightDuotone];
                case 1217: return [4 /*yield*/, import("react-icons/pi")];
                case 1218:
                    PiArrowRightDuotone = (_b.sent()).PiArrowRightDuotone;
                    return [2 /*return*/, PiArrowRightDuotone];
                case 1219: return [4 /*yield*/, import("react-icons/pi")];
                case 1220:
                    PiArrowSquareDownDuotone = (_b.sent()).PiArrowSquareDownDuotone;
                    return [2 /*return*/, PiArrowSquareDownDuotone];
                case 1221: return [4 /*yield*/, import("react-icons/pi")];
                case 1222:
                    PiArrowSquareDownLeftDuotone = (_b.sent()).PiArrowSquareDownLeftDuotone;
                    return [2 /*return*/, PiArrowSquareDownLeftDuotone];
                case 1223: return [4 /*yield*/, import("react-icons/pi")];
                case 1224:
                    PiArrowSquareDownRightDuotone = (_b.sent()).PiArrowSquareDownRightDuotone;
                    return [2 /*return*/, PiArrowSquareDownRightDuotone];
                case 1225: return [4 /*yield*/, import("react-icons/pi")];
                case 1226:
                    PiArrowSquareInDuotone = (_b.sent()).PiArrowSquareInDuotone;
                    return [2 /*return*/, PiArrowSquareInDuotone];
                case 1227: return [4 /*yield*/, import("react-icons/pi")];
                case 1228:
                    PiArrowSquareLeftDuotone = (_b.sent()).PiArrowSquareLeftDuotone;
                    return [2 /*return*/, PiArrowSquareLeftDuotone];
                case 1229: return [4 /*yield*/, import("react-icons/pi")];
                case 1230:
                    PiArrowSquareOutDuotone = (_b.sent()).PiArrowSquareOutDuotone;
                    return [2 /*return*/, PiArrowSquareOutDuotone];
                case 1231: return [4 /*yield*/, import("react-icons/pi")];
                case 1232:
                    PiArrowSquareRightDuotone = (_b.sent()).PiArrowSquareRightDuotone;
                    return [2 /*return*/, PiArrowSquareRightDuotone];
                case 1233: return [4 /*yield*/, import("react-icons/pi")];
                case 1234:
                    PiArrowSquareUpDuotone = (_b.sent()).PiArrowSquareUpDuotone;
                    return [2 /*return*/, PiArrowSquareUpDuotone];
                case 1235: return [4 /*yield*/, import("react-icons/pi")];
                case 1236:
                    PiArrowSquareUpLeftDuotone = (_b.sent()).PiArrowSquareUpLeftDuotone;
                    return [2 /*return*/, PiArrowSquareUpLeftDuotone];
                case 1237: return [4 /*yield*/, import("react-icons/pi")];
                case 1238:
                    PiArrowSquareUpRightDuotone = (_b.sent()).PiArrowSquareUpRightDuotone;
                    return [2 /*return*/, PiArrowSquareUpRightDuotone];
                case 1239: return [4 /*yield*/, import("react-icons/pi")];
                case 1240:
                    PiArrowUDownLeftDuotone = (_b.sent()).PiArrowUDownLeftDuotone;
                    return [2 /*return*/, PiArrowUDownLeftDuotone];
                case 1241: return [4 /*yield*/, import("react-icons/pi")];
                case 1242:
                    PiArrowUDownRightDuotone = (_b.sent()).PiArrowUDownRightDuotone;
                    return [2 /*return*/, PiArrowUDownRightDuotone];
                case 1243: return [4 /*yield*/, import("react-icons/pi")];
                case 1244:
                    PiArrowULeftDownDuotone = (_b.sent()).PiArrowULeftDownDuotone;
                    return [2 /*return*/, PiArrowULeftDownDuotone];
                case 1245: return [4 /*yield*/, import("react-icons/pi")];
                case 1246:
                    PiArrowULeftUpDuotone = (_b.sent()).PiArrowULeftUpDuotone;
                    return [2 /*return*/, PiArrowULeftUpDuotone];
                case 1247: return [4 /*yield*/, import("react-icons/pi")];
                case 1248:
                    PiArrowURightDownDuotone = (_b.sent()).PiArrowURightDownDuotone;
                    return [2 /*return*/, PiArrowURightDownDuotone];
                case 1249: return [4 /*yield*/, import("react-icons/pi")];
                case 1250:
                    PiArrowURightUpDuotone = (_b.sent()).PiArrowURightUpDuotone;
                    return [2 /*return*/, PiArrowURightUpDuotone];
                case 1251: return [4 /*yield*/, import("react-icons/pi")];
                case 1252:
                    PiArrowUUpLeftDuotone = (_b.sent()).PiArrowUUpLeftDuotone;
                    return [2 /*return*/, PiArrowUUpLeftDuotone];
                case 1253: return [4 /*yield*/, import("react-icons/pi")];
                case 1254:
                    PiArrowUUpRightDuotone = (_b.sent()).PiArrowUUpRightDuotone;
                    return [2 /*return*/, PiArrowUUpRightDuotone];
                case 1255: return [4 /*yield*/, import("react-icons/pi")];
                case 1256:
                    PiArrowUpDuotone = (_b.sent()).PiArrowUpDuotone;
                    return [2 /*return*/, PiArrowUpDuotone];
                case 1257: return [4 /*yield*/, import("react-icons/pi")];
                case 1258:
                    PiArrowUpLeftDuotone = (_b.sent()).PiArrowUpLeftDuotone;
                    return [2 /*return*/, PiArrowUpLeftDuotone];
                case 1259: return [4 /*yield*/, import("react-icons/pi")];
                case 1260:
                    PiArrowUpRightDuotone = (_b.sent()).PiArrowUpRightDuotone;
                    return [2 /*return*/, PiArrowUpRightDuotone];
                case 1261: return [4 /*yield*/, import("react-icons/pi")];
                case 1262:
                    PiArrowsClockwiseDuotone = (_b.sent()).PiArrowsClockwiseDuotone;
                    return [2 /*return*/, PiArrowsClockwiseDuotone];
                case 1263: return [4 /*yield*/, import("react-icons/pi")];
                case 1264:
                    PiArrowsCounterClockwiseDuotone = (_b.sent()).PiArrowsCounterClockwiseDuotone;
                    return [2 /*return*/, PiArrowsCounterClockwiseDuotone];
                case 1265: return [4 /*yield*/, import("react-icons/pi")];
                case 1266:
                    PiArrowsDownUpDuotone = (_b.sent()).PiArrowsDownUpDuotone;
                    return [2 /*return*/, PiArrowsDownUpDuotone];
                case 1267: return [4 /*yield*/, import("react-icons/pi")];
                case 1268:
                    PiArrowsHorizontalDuotone = (_b.sent()).PiArrowsHorizontalDuotone;
                    return [2 /*return*/, PiArrowsHorizontalDuotone];
                case 1269: return [4 /*yield*/, import("react-icons/pi")];
                case 1270:
                    PiArrowsInCardinalDuotone = (_b.sent()).PiArrowsInCardinalDuotone;
                    return [2 /*return*/, PiArrowsInCardinalDuotone];
                case 1271: return [4 /*yield*/, import("react-icons/pi")];
                case 1272:
                    PiArrowsInDuotone = (_b.sent()).PiArrowsInDuotone;
                    return [2 /*return*/, PiArrowsInDuotone];
                case 1273: return [4 /*yield*/, import("react-icons/pi")];
                case 1274:
                    PiArrowsInLineHorizontalDuotone = (_b.sent()).PiArrowsInLineHorizontalDuotone;
                    return [2 /*return*/, PiArrowsInLineHorizontalDuotone];
                case 1275: return [4 /*yield*/, import("react-icons/pi")];
                case 1276:
                    PiArrowsInLineVerticalDuotone = (_b.sent()).PiArrowsInLineVerticalDuotone;
                    return [2 /*return*/, PiArrowsInLineVerticalDuotone];
                case 1277: return [4 /*yield*/, import("react-icons/pi")];
                case 1278:
                    PiArrowsInSimpleDuotone = (_b.sent()).PiArrowsInSimpleDuotone;
                    return [2 /*return*/, PiArrowsInSimpleDuotone];
                case 1279: return [4 /*yield*/, import("react-icons/pi")];
                case 1280:
                    PiArrowsLeftRightDuotone = (_b.sent()).PiArrowsLeftRightDuotone;
                    return [2 /*return*/, PiArrowsLeftRightDuotone];
                case 1281: return [4 /*yield*/, import("react-icons/pi")];
                case 1282:
                    PiArrowsMergeDuotone = (_b.sent()).PiArrowsMergeDuotone;
                    return [2 /*return*/, PiArrowsMergeDuotone];
                case 1283: return [4 /*yield*/, import("react-icons/pi")];
                case 1284:
                    PiArrowsOutCardinalDuotone = (_b.sent()).PiArrowsOutCardinalDuotone;
                    return [2 /*return*/, PiArrowsOutCardinalDuotone];
                case 1285: return [4 /*yield*/, import("react-icons/pi")];
                case 1286:
                    PiArrowsOutDuotone = (_b.sent()).PiArrowsOutDuotone;
                    return [2 /*return*/, PiArrowsOutDuotone];
                case 1287: return [4 /*yield*/, import("react-icons/pi")];
                case 1288:
                    PiArrowsOutLineHorizontalDuotone = (_b.sent()).PiArrowsOutLineHorizontalDuotone;
                    return [2 /*return*/, PiArrowsOutLineHorizontalDuotone];
                case 1289: return [4 /*yield*/, import("react-icons/pi")];
                case 1290:
                    PiArrowsOutLineVerticalDuotone = (_b.sent()).PiArrowsOutLineVerticalDuotone;
                    return [2 /*return*/, PiArrowsOutLineVerticalDuotone];
                case 1291: return [4 /*yield*/, import("react-icons/pi")];
                case 1292:
                    PiArrowsOutSimpleDuotone = (_b.sent()).PiArrowsOutSimpleDuotone;
                    return [2 /*return*/, PiArrowsOutSimpleDuotone];
                case 1293: return [4 /*yield*/, import("react-icons/pi")];
                case 1294:
                    PiArrowsSplitDuotone = (_b.sent()).PiArrowsSplitDuotone;
                    return [2 /*return*/, PiArrowsSplitDuotone];
                case 1295: return [4 /*yield*/, import("react-icons/pi")];
                case 1296:
                    PiArrowsVerticalDuotone = (_b.sent()).PiArrowsVerticalDuotone;
                    return [2 /*return*/, PiArrowsVerticalDuotone];
                case 1297: return [4 /*yield*/, import("react-icons/pi")];
                case 1298:
                    PiArticleDuotone = (_b.sent()).PiArticleDuotone;
                    return [2 /*return*/, PiArticleDuotone];
                case 1299: return [4 /*yield*/, import("react-icons/pi")];
                case 1300:
                    PiArticleMediumDuotone = (_b.sent()).PiArticleMediumDuotone;
                    return [2 /*return*/, PiArticleMediumDuotone];
                case 1301: return [4 /*yield*/, import("react-icons/pi")];
                case 1302:
                    PiArticleNyTimesDuotone = (_b.sent()).PiArticleNyTimesDuotone;
                    return [2 /*return*/, PiArticleNyTimesDuotone];
                case 1303: return [4 /*yield*/, import("react-icons/pi")];
                case 1304:
                    PiAsclepiusDuotone = (_b.sent()).PiAsclepiusDuotone;
                    return [2 /*return*/, PiAsclepiusDuotone];
                case 1305: return [4 /*yield*/, import("react-icons/pi")];
                case 1306:
                    PiAsteriskDuotone = (_b.sent()).PiAsteriskDuotone;
                    return [2 /*return*/, PiAsteriskDuotone];
                case 1307: return [4 /*yield*/, import("react-icons/pi")];
                case 1308:
                    PiAsteriskSimpleDuotone = (_b.sent()).PiAsteriskSimpleDuotone;
                    return [2 /*return*/, PiAsteriskSimpleDuotone];
                case 1309: return [4 /*yield*/, import("react-icons/pi")];
                case 1310:
                    PiAtDuotone = (_b.sent()).PiAtDuotone;
                    return [2 /*return*/, PiAtDuotone];
                case 1311: return [4 /*yield*/, import("react-icons/pi")];
                case 1312:
                    PiAtomDuotone = (_b.sent()).PiAtomDuotone;
                    return [2 /*return*/, PiAtomDuotone];
                case 1313: return [4 /*yield*/, import("react-icons/pi")];
                case 1314:
                    PiAvocadoDuotone = (_b.sent()).PiAvocadoDuotone;
                    return [2 /*return*/, PiAvocadoDuotone];
                case 1315: return [4 /*yield*/, import("react-icons/pi")];
                case 1316:
                    PiAxeDuotone = (_b.sent()).PiAxeDuotone;
                    return [2 /*return*/, PiAxeDuotone];
                case 1317: return [4 /*yield*/, import("react-icons/pi")];
                case 1318:
                    PiBabyCarriageDuotone = (_b.sent()).PiBabyCarriageDuotone;
                    return [2 /*return*/, PiBabyCarriageDuotone];
                case 1319: return [4 /*yield*/, import("react-icons/pi")];
                case 1320:
                    PiBabyDuotone = (_b.sent()).PiBabyDuotone;
                    return [2 /*return*/, PiBabyDuotone];
                case 1321: return [4 /*yield*/, import("react-icons/pi")];
                case 1322:
                    PiBackpackDuotone = (_b.sent()).PiBackpackDuotone;
                    return [2 /*return*/, PiBackpackDuotone];
                case 1323: return [4 /*yield*/, import("react-icons/pi")];
                case 1324:
                    PiBackspaceDuotone = (_b.sent()).PiBackspaceDuotone;
                    return [2 /*return*/, PiBackspaceDuotone];
                case 1325: return [4 /*yield*/, import("react-icons/pi")];
                case 1326:
                    PiBagDuotone = (_b.sent()).PiBagDuotone;
                    return [2 /*return*/, PiBagDuotone];
                case 1327: return [4 /*yield*/, import("react-icons/pi")];
                case 1328:
                    PiBagSimpleDuotone = (_b.sent()).PiBagSimpleDuotone;
                    return [2 /*return*/, PiBagSimpleDuotone];
                case 1329: return [4 /*yield*/, import("react-icons/pi")];
                case 1330:
                    PiBalloonDuotone = (_b.sent()).PiBalloonDuotone;
                    return [2 /*return*/, PiBalloonDuotone];
                case 1331: return [4 /*yield*/, import("react-icons/pi")];
                case 1332:
                    PiBandaidsDuotone = (_b.sent()).PiBandaidsDuotone;
                    return [2 /*return*/, PiBandaidsDuotone];
                case 1333: return [4 /*yield*/, import("react-icons/pi")];
                case 1334:
                    PiBankDuotone = (_b.sent()).PiBankDuotone;
                    return [2 /*return*/, PiBankDuotone];
                case 1335: return [4 /*yield*/, import("react-icons/pi")];
                case 1336:
                    PiBarbellDuotone = (_b.sent()).PiBarbellDuotone;
                    return [2 /*return*/, PiBarbellDuotone];
                case 1337: return [4 /*yield*/, import("react-icons/pi")];
                case 1338:
                    PiBarcodeDuotone = (_b.sent()).PiBarcodeDuotone;
                    return [2 /*return*/, PiBarcodeDuotone];
                case 1339: return [4 /*yield*/, import("react-icons/pi")];
                case 1340:
                    PiBarnDuotone = (_b.sent()).PiBarnDuotone;
                    return [2 /*return*/, PiBarnDuotone];
                case 1341: return [4 /*yield*/, import("react-icons/pi")];
                case 1342:
                    PiBarricadeDuotone = (_b.sent()).PiBarricadeDuotone;
                    return [2 /*return*/, PiBarricadeDuotone];
                case 1343: return [4 /*yield*/, import("react-icons/pi")];
                case 1344:
                    PiBaseballCapDuotone = (_b.sent()).PiBaseballCapDuotone;
                    return [2 /*return*/, PiBaseballCapDuotone];
                case 1345: return [4 /*yield*/, import("react-icons/pi")];
                case 1346:
                    PiBaseballDuotone = (_b.sent()).PiBaseballDuotone;
                    return [2 /*return*/, PiBaseballDuotone];
                case 1347: return [4 /*yield*/, import("react-icons/pi")];
                case 1348:
                    PiBaseballHelmetDuotone = (_b.sent()).PiBaseballHelmetDuotone;
                    return [2 /*return*/, PiBaseballHelmetDuotone];
                case 1349: return [4 /*yield*/, import("react-icons/pi")];
                case 1350:
                    PiBasketDuotone = (_b.sent()).PiBasketDuotone;
                    return [2 /*return*/, PiBasketDuotone];
                case 1351: return [4 /*yield*/, import("react-icons/pi")];
                case 1352:
                    PiBasketballDuotone = (_b.sent()).PiBasketballDuotone;
                    return [2 /*return*/, PiBasketballDuotone];
                case 1353: return [4 /*yield*/, import("react-icons/pi")];
                case 1354:
                    PiBathtubDuotone = (_b.sent()).PiBathtubDuotone;
                    return [2 /*return*/, PiBathtubDuotone];
                case 1355: return [4 /*yield*/, import("react-icons/pi")];
                case 1356:
                    PiBatteryChargingDuotone = (_b.sent()).PiBatteryChargingDuotone;
                    return [2 /*return*/, PiBatteryChargingDuotone];
                case 1357: return [4 /*yield*/, import("react-icons/pi")];
                case 1358:
                    PiBatteryChargingVerticalDuotone = (_b.sent()).PiBatteryChargingVerticalDuotone;
                    return [2 /*return*/, PiBatteryChargingVerticalDuotone];
                case 1359: return [4 /*yield*/, import("react-icons/pi")];
                case 1360:
                    PiBatteryEmptyDuotone = (_b.sent()).PiBatteryEmptyDuotone;
                    return [2 /*return*/, PiBatteryEmptyDuotone];
                case 1361: return [4 /*yield*/, import("react-icons/pi")];
                case 1362:
                    PiBatteryFullDuotone = (_b.sent()).PiBatteryFullDuotone;
                    return [2 /*return*/, PiBatteryFullDuotone];
                case 1363: return [4 /*yield*/, import("react-icons/pi")];
                case 1364:
                    PiBatteryHighDuotone = (_b.sent()).PiBatteryHighDuotone;
                    return [2 /*return*/, PiBatteryHighDuotone];
                case 1365: return [4 /*yield*/, import("react-icons/pi")];
                case 1366:
                    PiBatteryLowDuotone = (_b.sent()).PiBatteryLowDuotone;
                    return [2 /*return*/, PiBatteryLowDuotone];
                case 1367: return [4 /*yield*/, import("react-icons/pi")];
                case 1368:
                    PiBatteryMediumDuotone = (_b.sent()).PiBatteryMediumDuotone;
                    return [2 /*return*/, PiBatteryMediumDuotone];
                case 1369: return [4 /*yield*/, import("react-icons/pi")];
                case 1370:
                    PiBatteryPlusDuotone = (_b.sent()).PiBatteryPlusDuotone;
                    return [2 /*return*/, PiBatteryPlusDuotone];
                case 1371: return [4 /*yield*/, import("react-icons/pi")];
                case 1372:
                    PiBatteryPlusVerticalDuotone = (_b.sent()).PiBatteryPlusVerticalDuotone;
                    return [2 /*return*/, PiBatteryPlusVerticalDuotone];
                case 1373: return [4 /*yield*/, import("react-icons/pi")];
                case 1374:
                    PiBatteryVerticalEmptyDuotone = (_b.sent()).PiBatteryVerticalEmptyDuotone;
                    return [2 /*return*/, PiBatteryVerticalEmptyDuotone];
                case 1375: return [4 /*yield*/, import("react-icons/pi")];
                case 1376:
                    PiBatteryVerticalFullDuotone = (_b.sent()).PiBatteryVerticalFullDuotone;
                    return [2 /*return*/, PiBatteryVerticalFullDuotone];
                case 1377: return [4 /*yield*/, import("react-icons/pi")];
                case 1378:
                    PiBatteryVerticalHighDuotone = (_b.sent()).PiBatteryVerticalHighDuotone;
                    return [2 /*return*/, PiBatteryVerticalHighDuotone];
                case 1379: return [4 /*yield*/, import("react-icons/pi")];
                case 1380:
                    PiBatteryVerticalLowDuotone = (_b.sent()).PiBatteryVerticalLowDuotone;
                    return [2 /*return*/, PiBatteryVerticalLowDuotone];
                case 1381: return [4 /*yield*/, import("react-icons/pi")];
                case 1382:
                    PiBatteryVerticalMediumDuotone = (_b.sent()).PiBatteryVerticalMediumDuotone;
                    return [2 /*return*/, PiBatteryVerticalMediumDuotone];
                case 1383: return [4 /*yield*/, import("react-icons/pi")];
                case 1384:
                    PiBatteryWarningDuotone = (_b.sent()).PiBatteryWarningDuotone;
                    return [2 /*return*/, PiBatteryWarningDuotone];
                case 1385: return [4 /*yield*/, import("react-icons/pi")];
                case 1386:
                    PiBatteryWarningVerticalDuotone = (_b.sent()).PiBatteryWarningVerticalDuotone;
                    return [2 /*return*/, PiBatteryWarningVerticalDuotone];
                case 1387: return [4 /*yield*/, import("react-icons/pi")];
                case 1388:
                    PiBeachBallDuotone = (_b.sent()).PiBeachBallDuotone;
                    return [2 /*return*/, PiBeachBallDuotone];
                case 1389: return [4 /*yield*/, import("react-icons/pi")];
                case 1390:
                    PiBeanieDuotone = (_b.sent()).PiBeanieDuotone;
                    return [2 /*return*/, PiBeanieDuotone];
                case 1391: return [4 /*yield*/, import("react-icons/pi")];
                case 1392:
                    PiBedDuotone = (_b.sent()).PiBedDuotone;
                    return [2 /*return*/, PiBedDuotone];
                case 1393: return [4 /*yield*/, import("react-icons/pi")];
                case 1394:
                    PiBeerBottleDuotone = (_b.sent()).PiBeerBottleDuotone;
                    return [2 /*return*/, PiBeerBottleDuotone];
                case 1395: return [4 /*yield*/, import("react-icons/pi")];
                case 1396:
                    PiBeerSteinDuotone = (_b.sent()).PiBeerSteinDuotone;
                    return [2 /*return*/, PiBeerSteinDuotone];
                case 1397: return [4 /*yield*/, import("react-icons/pi")];
                case 1398:
                    PiBehanceLogoDuotone = (_b.sent()).PiBehanceLogoDuotone;
                    return [2 /*return*/, PiBehanceLogoDuotone];
                case 1399: return [4 /*yield*/, import("react-icons/pi")];
                case 1400:
                    PiBellDuotone = (_b.sent()).PiBellDuotone;
                    return [2 /*return*/, PiBellDuotone];
                case 1401: return [4 /*yield*/, import("react-icons/pi")];
                case 1402:
                    PiBellRingingDuotone = (_b.sent()).PiBellRingingDuotone;
                    return [2 /*return*/, PiBellRingingDuotone];
                case 1403: return [4 /*yield*/, import("react-icons/pi")];
                case 1404:
                    PiBellSimpleDuotone = (_b.sent()).PiBellSimpleDuotone;
                    return [2 /*return*/, PiBellSimpleDuotone];
                case 1405: return [4 /*yield*/, import("react-icons/pi")];
                case 1406:
                    PiBellSimpleRingingDuotone = (_b.sent()).PiBellSimpleRingingDuotone;
                    return [2 /*return*/, PiBellSimpleRingingDuotone];
                case 1407: return [4 /*yield*/, import("react-icons/pi")];
                case 1408:
                    PiBellSimpleSlashDuotone = (_b.sent()).PiBellSimpleSlashDuotone;
                    return [2 /*return*/, PiBellSimpleSlashDuotone];
                case 1409: return [4 /*yield*/, import("react-icons/pi")];
                case 1410:
                    PiBellSimpleZDuotone = (_b.sent()).PiBellSimpleZDuotone;
                    return [2 /*return*/, PiBellSimpleZDuotone];
                case 1411: return [4 /*yield*/, import("react-icons/pi")];
                case 1412:
                    PiBellSlashDuotone = (_b.sent()).PiBellSlashDuotone;
                    return [2 /*return*/, PiBellSlashDuotone];
                case 1413: return [4 /*yield*/, import("react-icons/pi")];
                case 1414:
                    PiBellZDuotone = (_b.sent()).PiBellZDuotone;
                    return [2 /*return*/, PiBellZDuotone];
                case 1415: return [4 /*yield*/, import("react-icons/pi")];
                case 1416:
                    PiBeltDuotone = (_b.sent()).PiBeltDuotone;
                    return [2 /*return*/, PiBeltDuotone];
                case 1417: return [4 /*yield*/, import("react-icons/pi")];
                case 1418:
                    PiBezierCurveDuotone = (_b.sent()).PiBezierCurveDuotone;
                    return [2 /*return*/, PiBezierCurveDuotone];
                case 1419: return [4 /*yield*/, import("react-icons/pi")];
                case 1420:
                    PiBicycleDuotone = (_b.sent()).PiBicycleDuotone;
                    return [2 /*return*/, PiBicycleDuotone];
                case 1421: return [4 /*yield*/, import("react-icons/pi")];
                case 1422:
                    PiBinaryDuotone = (_b.sent()).PiBinaryDuotone;
                    return [2 /*return*/, PiBinaryDuotone];
                case 1423: return [4 /*yield*/, import("react-icons/pi")];
                case 1424:
                    PiBinocularsDuotone = (_b.sent()).PiBinocularsDuotone;
                    return [2 /*return*/, PiBinocularsDuotone];
                case 1425: return [4 /*yield*/, import("react-icons/pi")];
                case 1426:
                    PiBiohazardDuotone = (_b.sent()).PiBiohazardDuotone;
                    return [2 /*return*/, PiBiohazardDuotone];
                case 1427: return [4 /*yield*/, import("react-icons/pi")];
                case 1428:
                    PiBirdDuotone = (_b.sent()).PiBirdDuotone;
                    return [2 /*return*/, PiBirdDuotone];
                case 1429: return [4 /*yield*/, import("react-icons/pi")];
                case 1430:
                    PiBlueprintDuotone = (_b.sent()).PiBlueprintDuotone;
                    return [2 /*return*/, PiBlueprintDuotone];
                case 1431: return [4 /*yield*/, import("react-icons/pi")];
                case 1432:
                    PiBluetoothConnectedDuotone = (_b.sent()).PiBluetoothConnectedDuotone;
                    return [2 /*return*/, PiBluetoothConnectedDuotone];
                case 1433: return [4 /*yield*/, import("react-icons/pi")];
                case 1434:
                    PiBluetoothDuotone = (_b.sent()).PiBluetoothDuotone;
                    return [2 /*return*/, PiBluetoothDuotone];
                case 1435: return [4 /*yield*/, import("react-icons/pi")];
                case 1436:
                    PiBluetoothSlashDuotone = (_b.sent()).PiBluetoothSlashDuotone;
                    return [2 /*return*/, PiBluetoothSlashDuotone];
                case 1437: return [4 /*yield*/, import("react-icons/pi")];
                case 1438:
                    PiBluetoothXDuotone = (_b.sent()).PiBluetoothXDuotone;
                    return [2 /*return*/, PiBluetoothXDuotone];
                case 1439: return [4 /*yield*/, import("react-icons/pi")];
                case 1440:
                    PiBoatDuotone = (_b.sent()).PiBoatDuotone;
                    return [2 /*return*/, PiBoatDuotone];
                case 1441: return [4 /*yield*/, import("react-icons/pi")];
                case 1442:
                    PiBombDuotone = (_b.sent()).PiBombDuotone;
                    return [2 /*return*/, PiBombDuotone];
                case 1443: return [4 /*yield*/, import("react-icons/pi")];
                case 1444:
                    PiBoneDuotone = (_b.sent()).PiBoneDuotone;
                    return [2 /*return*/, PiBoneDuotone];
                case 1445: return [4 /*yield*/, import("react-icons/pi")];
                case 1446:
                    PiBookBookmarkDuotone = (_b.sent()).PiBookBookmarkDuotone;
                    return [2 /*return*/, PiBookBookmarkDuotone];
                case 1447: return [4 /*yield*/, import("react-icons/pi")];
                case 1448:
                    PiBookDuotone = (_b.sent()).PiBookDuotone;
                    return [2 /*return*/, PiBookDuotone];
                case 1449: return [4 /*yield*/, import("react-icons/pi")];
                case 1450:
                    PiBookOpenDuotone = (_b.sent()).PiBookOpenDuotone;
                    return [2 /*return*/, PiBookOpenDuotone];
                case 1451: return [4 /*yield*/, import("react-icons/pi")];
                case 1452:
                    PiBookOpenTextDuotone = (_b.sent()).PiBookOpenTextDuotone;
                    return [2 /*return*/, PiBookOpenTextDuotone];
                case 1453: return [4 /*yield*/, import("react-icons/pi")];
                case 1454:
                    PiBookOpenUserDuotone = (_b.sent()).PiBookOpenUserDuotone;
                    return [2 /*return*/, PiBookOpenUserDuotone];
                case 1455: return [4 /*yield*/, import("react-icons/pi")];
                case 1456:
                    PiBookmarkDuotone = (_b.sent()).PiBookmarkDuotone;
                    return [2 /*return*/, PiBookmarkDuotone];
                case 1457: return [4 /*yield*/, import("react-icons/pi")];
                case 1458:
                    PiBookmarkSimpleDuotone = (_b.sent()).PiBookmarkSimpleDuotone;
                    return [2 /*return*/, PiBookmarkSimpleDuotone];
                case 1459: return [4 /*yield*/, import("react-icons/pi")];
                case 1460:
                    PiBookmarksDuotone = (_b.sent()).PiBookmarksDuotone;
                    return [2 /*return*/, PiBookmarksDuotone];
                case 1461: return [4 /*yield*/, import("react-icons/pi")];
                case 1462:
                    PiBookmarksSimpleDuotone = (_b.sent()).PiBookmarksSimpleDuotone;
                    return [2 /*return*/, PiBookmarksSimpleDuotone];
                case 1463: return [4 /*yield*/, import("react-icons/pi")];
                case 1464:
                    PiBooksDuotone = (_b.sent()).PiBooksDuotone;
                    return [2 /*return*/, PiBooksDuotone];
                case 1465: return [4 /*yield*/, import("react-icons/pi")];
                case 1466:
                    PiBootDuotone = (_b.sent()).PiBootDuotone;
                    return [2 /*return*/, PiBootDuotone];
                case 1467: return [4 /*yield*/, import("react-icons/pi")];
                case 1468:
                    PiBoulesDuotone = (_b.sent()).PiBoulesDuotone;
                    return [2 /*return*/, PiBoulesDuotone];
                case 1469: return [4 /*yield*/, import("react-icons/pi")];
                case 1470:
                    PiBoundingBoxDuotone = (_b.sent()).PiBoundingBoxDuotone;
                    return [2 /*return*/, PiBoundingBoxDuotone];
                case 1471: return [4 /*yield*/, import("react-icons/pi")];
                case 1472:
                    PiBowlFoodDuotone = (_b.sent()).PiBowlFoodDuotone;
                    return [2 /*return*/, PiBowlFoodDuotone];
                case 1473: return [4 /*yield*/, import("react-icons/pi")];
                case 1474:
                    PiBowlSteamDuotone = (_b.sent()).PiBowlSteamDuotone;
                    return [2 /*return*/, PiBowlSteamDuotone];
                case 1475: return [4 /*yield*/, import("react-icons/pi")];
                case 1476:
                    PiBowlingBallDuotone = (_b.sent()).PiBowlingBallDuotone;
                    return [2 /*return*/, PiBowlingBallDuotone];
                case 1477: return [4 /*yield*/, import("react-icons/pi")];
                case 1478:
                    PiBoxArrowDownDuotone = (_b.sent()).PiBoxArrowDownDuotone;
                    return [2 /*return*/, PiBoxArrowDownDuotone];
                case 1479: return [4 /*yield*/, import("react-icons/pi")];
                case 1480:
                    PiBoxArrowUpDuotone = (_b.sent()).PiBoxArrowUpDuotone;
                    return [2 /*return*/, PiBoxArrowUpDuotone];
                case 1481: return [4 /*yield*/, import("react-icons/pi")];
                case 1482:
                    PiBoxingGloveDuotone = (_b.sent()).PiBoxingGloveDuotone;
                    return [2 /*return*/, PiBoxingGloveDuotone];
                case 1483: return [4 /*yield*/, import("react-icons/pi")];
                case 1484:
                    PiBracketsAngleDuotone = (_b.sent()).PiBracketsAngleDuotone;
                    return [2 /*return*/, PiBracketsAngleDuotone];
                case 1485: return [4 /*yield*/, import("react-icons/pi")];
                case 1486:
                    PiBracketsCurlyDuotone = (_b.sent()).PiBracketsCurlyDuotone;
                    return [2 /*return*/, PiBracketsCurlyDuotone];
                case 1487: return [4 /*yield*/, import("react-icons/pi")];
                case 1488:
                    PiBracketsRoundDuotone = (_b.sent()).PiBracketsRoundDuotone;
                    return [2 /*return*/, PiBracketsRoundDuotone];
                case 1489: return [4 /*yield*/, import("react-icons/pi")];
                case 1490:
                    PiBracketsSquareDuotone = (_b.sent()).PiBracketsSquareDuotone;
                    return [2 /*return*/, PiBracketsSquareDuotone];
                case 1491: return [4 /*yield*/, import("react-icons/pi")];
                case 1492:
                    PiBrainDuotone = (_b.sent()).PiBrainDuotone;
                    return [2 /*return*/, PiBrainDuotone];
                case 1493: return [4 /*yield*/, import("react-icons/pi")];
                case 1494:
                    PiBrandyDuotone = (_b.sent()).PiBrandyDuotone;
                    return [2 /*return*/, PiBrandyDuotone];
                case 1495: return [4 /*yield*/, import("react-icons/pi")];
                case 1496:
                    PiBreadDuotone = (_b.sent()).PiBreadDuotone;
                    return [2 /*return*/, PiBreadDuotone];
                case 1497: return [4 /*yield*/, import("react-icons/pi")];
                case 1498:
                    PiBridgeDuotone = (_b.sent()).PiBridgeDuotone;
                    return [2 /*return*/, PiBridgeDuotone];
                case 1499: return [4 /*yield*/, import("react-icons/pi")];
                case 1500:
                    PiBriefcaseDuotone = (_b.sent()).PiBriefcaseDuotone;
                    return [2 /*return*/, PiBriefcaseDuotone];
                case 1501: return [4 /*yield*/, import("react-icons/pi")];
                case 1502:
                    PiBriefcaseMetalDuotone = (_b.sent()).PiBriefcaseMetalDuotone;
                    return [2 /*return*/, PiBriefcaseMetalDuotone];
                case 1503: return [4 /*yield*/, import("react-icons/pi")];
                case 1504:
                    PiBroadcastDuotone = (_b.sent()).PiBroadcastDuotone;
                    return [2 /*return*/, PiBroadcastDuotone];
                case 1505: return [4 /*yield*/, import("react-icons/pi")];
                case 1506:
                    PiBroomDuotone = (_b.sent()).PiBroomDuotone;
                    return [2 /*return*/, PiBroomDuotone];
                case 1507: return [4 /*yield*/, import("react-icons/pi")];
                case 1508:
                    PiBrowserDuotone = (_b.sent()).PiBrowserDuotone;
                    return [2 /*return*/, PiBrowserDuotone];
                case 1509: return [4 /*yield*/, import("react-icons/pi")];
                case 1510:
                    PiBrowsersDuotone = (_b.sent()).PiBrowsersDuotone;
                    return [2 /*return*/, PiBrowsersDuotone];
                case 1511: return [4 /*yield*/, import("react-icons/pi")];
                case 1512:
                    PiBugBeetleDuotone = (_b.sent()).PiBugBeetleDuotone;
                    return [2 /*return*/, PiBugBeetleDuotone];
                case 1513: return [4 /*yield*/, import("react-icons/pi")];
                case 1514:
                    PiBugDroidDuotone = (_b.sent()).PiBugDroidDuotone;
                    return [2 /*return*/, PiBugDroidDuotone];
                case 1515: return [4 /*yield*/, import("react-icons/pi")];
                case 1516:
                    PiBugDuotone = (_b.sent()).PiBugDuotone;
                    return [2 /*return*/, PiBugDuotone];
                case 1517: return [4 /*yield*/, import("react-icons/pi")];
                case 1518:
                    PiBuildingApartmentDuotone = (_b.sent()).PiBuildingApartmentDuotone;
                    return [2 /*return*/, PiBuildingApartmentDuotone];
                case 1519: return [4 /*yield*/, import("react-icons/pi")];
                case 1520:
                    PiBuildingDuotone = (_b.sent()).PiBuildingDuotone;
                    return [2 /*return*/, PiBuildingDuotone];
                case 1521: return [4 /*yield*/, import("react-icons/pi")];
                case 1522:
                    PiBuildingOfficeDuotone = (_b.sent()).PiBuildingOfficeDuotone;
                    return [2 /*return*/, PiBuildingOfficeDuotone];
                case 1523: return [4 /*yield*/, import("react-icons/pi")];
                case 1524:
                    PiBuildingsDuotone = (_b.sent()).PiBuildingsDuotone;
                    return [2 /*return*/, PiBuildingsDuotone];
                case 1525: return [4 /*yield*/, import("react-icons/pi")];
                case 1526:
                    PiBulldozerDuotone = (_b.sent()).PiBulldozerDuotone;
                    return [2 /*return*/, PiBulldozerDuotone];
                case 1527: return [4 /*yield*/, import("react-icons/pi")];
                case 1528:
                    PiBusDuotone = (_b.sent()).PiBusDuotone;
                    return [2 /*return*/, PiBusDuotone];
                case 1529: return [4 /*yield*/, import("react-icons/pi")];
                case 1530:
                    PiButterflyDuotone = (_b.sent()).PiButterflyDuotone;
                    return [2 /*return*/, PiButterflyDuotone];
                case 1531: return [4 /*yield*/, import("react-icons/pi")];
                case 1532:
                    PiCableCarDuotone = (_b.sent()).PiCableCarDuotone;
                    return [2 /*return*/, PiCableCarDuotone];
                case 1533: return [4 /*yield*/, import("react-icons/pi")];
                case 1534:
                    PiCactusDuotone = (_b.sent()).PiCactusDuotone;
                    return [2 /*return*/, PiCactusDuotone];
                case 1535: return [4 /*yield*/, import("react-icons/pi")];
                case 1536:
                    PiCakeDuotone = (_b.sent()).PiCakeDuotone;
                    return [2 /*return*/, PiCakeDuotone];
                case 1537: return [4 /*yield*/, import("react-icons/pi")];
                case 1538:
                    PiCalculatorDuotone = (_b.sent()).PiCalculatorDuotone;
                    return [2 /*return*/, PiCalculatorDuotone];
                case 1539: return [4 /*yield*/, import("react-icons/pi")];
                case 1540:
                    PiCalendarBlankDuotone = (_b.sent()).PiCalendarBlankDuotone;
                    return [2 /*return*/, PiCalendarBlankDuotone];
                case 1541: return [4 /*yield*/, import("react-icons/pi")];
                case 1542:
                    PiCalendarCheckDuotone = (_b.sent()).PiCalendarCheckDuotone;
                    return [2 /*return*/, PiCalendarCheckDuotone];
                case 1543: return [4 /*yield*/, import("react-icons/pi")];
                case 1544:
                    PiCalendarDotDuotone = (_b.sent()).PiCalendarDotDuotone;
                    return [2 /*return*/, PiCalendarDotDuotone];
                case 1545: return [4 /*yield*/, import("react-icons/pi")];
                case 1546:
                    PiCalendarDotsDuotone = (_b.sent()).PiCalendarDotsDuotone;
                    return [2 /*return*/, PiCalendarDotsDuotone];
                case 1547: return [4 /*yield*/, import("react-icons/pi")];
                case 1548:
                    PiCalendarDuotone = (_b.sent()).PiCalendarDuotone;
                    return [2 /*return*/, PiCalendarDuotone];
                case 1549: return [4 /*yield*/, import("react-icons/pi")];
                case 1550:
                    PiCalendarHeartDuotone = (_b.sent()).PiCalendarHeartDuotone;
                    return [2 /*return*/, PiCalendarHeartDuotone];
                case 1551: return [4 /*yield*/, import("react-icons/pi")];
                case 1552:
                    PiCalendarMinusDuotone = (_b.sent()).PiCalendarMinusDuotone;
                    return [2 /*return*/, PiCalendarMinusDuotone];
                case 1553: return [4 /*yield*/, import("react-icons/pi")];
                case 1554:
                    PiCalendarPlusDuotone = (_b.sent()).PiCalendarPlusDuotone;
                    return [2 /*return*/, PiCalendarPlusDuotone];
                case 1555: return [4 /*yield*/, import("react-icons/pi")];
                case 1556:
                    PiCalendarSlashDuotone = (_b.sent()).PiCalendarSlashDuotone;
                    return [2 /*return*/, PiCalendarSlashDuotone];
                case 1557: return [4 /*yield*/, import("react-icons/pi")];
                case 1558:
                    PiCalendarStarDuotone = (_b.sent()).PiCalendarStarDuotone;
                    return [2 /*return*/, PiCalendarStarDuotone];
                case 1559: return [4 /*yield*/, import("react-icons/pi")];
                case 1560:
                    PiCalendarXDuotone = (_b.sent()).PiCalendarXDuotone;
                    return [2 /*return*/, PiCalendarXDuotone];
                case 1561: return [4 /*yield*/, import("react-icons/pi")];
                case 1562:
                    PiCallBellDuotone = (_b.sent()).PiCallBellDuotone;
                    return [2 /*return*/, PiCallBellDuotone];
                case 1563: return [4 /*yield*/, import("react-icons/pi")];
                case 1564:
                    PiCameraDuotone = (_b.sent()).PiCameraDuotone;
                    return [2 /*return*/, PiCameraDuotone];
                case 1565: return [4 /*yield*/, import("react-icons/pi")];
                case 1566:
                    PiCameraPlusDuotone = (_b.sent()).PiCameraPlusDuotone;
                    return [2 /*return*/, PiCameraPlusDuotone];
                case 1567: return [4 /*yield*/, import("react-icons/pi")];
                case 1568:
                    PiCameraRotateDuotone = (_b.sent()).PiCameraRotateDuotone;
                    return [2 /*return*/, PiCameraRotateDuotone];
                case 1569: return [4 /*yield*/, import("react-icons/pi")];
                case 1570:
                    PiCameraSlashDuotone = (_b.sent()).PiCameraSlashDuotone;
                    return [2 /*return*/, PiCameraSlashDuotone];
                case 1571: return [4 /*yield*/, import("react-icons/pi")];
                case 1572:
                    PiCampfireDuotone = (_b.sent()).PiCampfireDuotone;
                    return [2 /*return*/, PiCampfireDuotone];
                case 1573: return [4 /*yield*/, import("react-icons/pi")];
                case 1574:
                    PiCarBatteryDuotone = (_b.sent()).PiCarBatteryDuotone;
                    return [2 /*return*/, PiCarBatteryDuotone];
                case 1575: return [4 /*yield*/, import("react-icons/pi")];
                case 1576:
                    PiCarDuotone = (_b.sent()).PiCarDuotone;
                    return [2 /*return*/, PiCarDuotone];
                case 1577: return [4 /*yield*/, import("react-icons/pi")];
                case 1578:
                    PiCarProfileDuotone = (_b.sent()).PiCarProfileDuotone;
                    return [2 /*return*/, PiCarProfileDuotone];
                case 1579: return [4 /*yield*/, import("react-icons/pi")];
                case 1580:
                    PiCarSimpleDuotone = (_b.sent()).PiCarSimpleDuotone;
                    return [2 /*return*/, PiCarSimpleDuotone];
                case 1581: return [4 /*yield*/, import("react-icons/pi")];
                case 1582:
                    PiCardholderDuotone = (_b.sent()).PiCardholderDuotone;
                    return [2 /*return*/, PiCardholderDuotone];
                case 1583: return [4 /*yield*/, import("react-icons/pi")];
                case 1584:
                    PiCardsDuotone = (_b.sent()).PiCardsDuotone;
                    return [2 /*return*/, PiCardsDuotone];
                case 1585: return [4 /*yield*/, import("react-icons/pi")];
                case 1586:
                    PiCardsThreeDuotone = (_b.sent()).PiCardsThreeDuotone;
                    return [2 /*return*/, PiCardsThreeDuotone];
                case 1587: return [4 /*yield*/, import("react-icons/pi")];
                case 1588:
                    PiCaretCircleDoubleDownDuotone = (_b.sent()).PiCaretCircleDoubleDownDuotone;
                    return [2 /*return*/, PiCaretCircleDoubleDownDuotone];
                case 1589: return [4 /*yield*/, import("react-icons/pi")];
                case 1590:
                    PiCaretCircleDoubleLeftDuotone = (_b.sent()).PiCaretCircleDoubleLeftDuotone;
                    return [2 /*return*/, PiCaretCircleDoubleLeftDuotone];
                case 1591: return [4 /*yield*/, import("react-icons/pi")];
                case 1592:
                    PiCaretCircleDoubleRightDuotone = (_b.sent()).PiCaretCircleDoubleRightDuotone;
                    return [2 /*return*/, PiCaretCircleDoubleRightDuotone];
                case 1593: return [4 /*yield*/, import("react-icons/pi")];
                case 1594:
                    PiCaretCircleDoubleUpDuotone = (_b.sent()).PiCaretCircleDoubleUpDuotone;
                    return [2 /*return*/, PiCaretCircleDoubleUpDuotone];
                case 1595: return [4 /*yield*/, import("react-icons/pi")];
                case 1596:
                    PiCaretCircleDownDuotone = (_b.sent()).PiCaretCircleDownDuotone;
                    return [2 /*return*/, PiCaretCircleDownDuotone];
                case 1597: return [4 /*yield*/, import("react-icons/pi")];
                case 1598:
                    PiCaretCircleLeftDuotone = (_b.sent()).PiCaretCircleLeftDuotone;
                    return [2 /*return*/, PiCaretCircleLeftDuotone];
                case 1599: return [4 /*yield*/, import("react-icons/pi")];
                case 1600:
                    PiCaretCircleRightDuotone = (_b.sent()).PiCaretCircleRightDuotone;
                    return [2 /*return*/, PiCaretCircleRightDuotone];
                case 1601: return [4 /*yield*/, import("react-icons/pi")];
                case 1602:
                    PiCaretCircleUpDownDuotone = (_b.sent()).PiCaretCircleUpDownDuotone;
                    return [2 /*return*/, PiCaretCircleUpDownDuotone];
                case 1603: return [4 /*yield*/, import("react-icons/pi")];
                case 1604:
                    PiCaretCircleUpDuotone = (_b.sent()).PiCaretCircleUpDuotone;
                    return [2 /*return*/, PiCaretCircleUpDuotone];
                case 1605: return [4 /*yield*/, import("react-icons/pi")];
                case 1606:
                    PiCaretDoubleDownDuotone = (_b.sent()).PiCaretDoubleDownDuotone;
                    return [2 /*return*/, PiCaretDoubleDownDuotone];
                case 1607: return [4 /*yield*/, import("react-icons/pi")];
                case 1608:
                    PiCaretDoubleLeftDuotone = (_b.sent()).PiCaretDoubleLeftDuotone;
                    return [2 /*return*/, PiCaretDoubleLeftDuotone];
                case 1609: return [4 /*yield*/, import("react-icons/pi")];
                case 1610:
                    PiCaretDoubleRightDuotone = (_b.sent()).PiCaretDoubleRightDuotone;
                    return [2 /*return*/, PiCaretDoubleRightDuotone];
                case 1611: return [4 /*yield*/, import("react-icons/pi")];
                case 1612:
                    PiCaretDoubleUpDuotone = (_b.sent()).PiCaretDoubleUpDuotone;
                    return [2 /*return*/, PiCaretDoubleUpDuotone];
                case 1613: return [4 /*yield*/, import("react-icons/pi")];
                case 1614:
                    PiCaretDownDuotone = (_b.sent()).PiCaretDownDuotone;
                    return [2 /*return*/, PiCaretDownDuotone];
                case 1615: return [4 /*yield*/, import("react-icons/pi")];
                case 1616:
                    PiCaretLeftDuotone = (_b.sent()).PiCaretLeftDuotone;
                    return [2 /*return*/, PiCaretLeftDuotone];
                case 1617: return [4 /*yield*/, import("react-icons/pi")];
                case 1618:
                    PiCaretLineDownDuotone = (_b.sent()).PiCaretLineDownDuotone;
                    return [2 /*return*/, PiCaretLineDownDuotone];
                case 1619: return [4 /*yield*/, import("react-icons/pi")];
                case 1620:
                    PiCaretLineLeftDuotone = (_b.sent()).PiCaretLineLeftDuotone;
                    return [2 /*return*/, PiCaretLineLeftDuotone];
                case 1621: return [4 /*yield*/, import("react-icons/pi")];
                case 1622:
                    PiCaretLineRightDuotone = (_b.sent()).PiCaretLineRightDuotone;
                    return [2 /*return*/, PiCaretLineRightDuotone];
                case 1623: return [4 /*yield*/, import("react-icons/pi")];
                case 1624:
                    PiCaretLineUpDuotone = (_b.sent()).PiCaretLineUpDuotone;
                    return [2 /*return*/, PiCaretLineUpDuotone];
                case 1625: return [4 /*yield*/, import("react-icons/pi")];
                case 1626:
                    PiCaretRightDuotone = (_b.sent()).PiCaretRightDuotone;
                    return [2 /*return*/, PiCaretRightDuotone];
                case 1627: return [4 /*yield*/, import("react-icons/pi")];
                case 1628:
                    PiCaretUpDownDuotone = (_b.sent()).PiCaretUpDownDuotone;
                    return [2 /*return*/, PiCaretUpDownDuotone];
                case 1629: return [4 /*yield*/, import("react-icons/pi")];
                case 1630:
                    PiCaretUpDuotone = (_b.sent()).PiCaretUpDuotone;
                    return [2 /*return*/, PiCaretUpDuotone];
                case 1631: return [4 /*yield*/, import("react-icons/pi")];
                case 1632:
                    PiCarrotDuotone = (_b.sent()).PiCarrotDuotone;
                    return [2 /*return*/, PiCarrotDuotone];
                case 1633: return [4 /*yield*/, import("react-icons/pi")];
                case 1634:
                    PiCashRegisterDuotone = (_b.sent()).PiCashRegisterDuotone;
                    return [2 /*return*/, PiCashRegisterDuotone];
                case 1635: return [4 /*yield*/, import("react-icons/pi")];
                case 1636:
                    PiCassetteTapeDuotone = (_b.sent()).PiCassetteTapeDuotone;
                    return [2 /*return*/, PiCassetteTapeDuotone];
                case 1637: return [4 /*yield*/, import("react-icons/pi")];
                case 1638:
                    PiCastleTurretDuotone = (_b.sent()).PiCastleTurretDuotone;
                    return [2 /*return*/, PiCastleTurretDuotone];
                case 1639: return [4 /*yield*/, import("react-icons/pi")];
                case 1640:
                    PiCatDuotone = (_b.sent()).PiCatDuotone;
                    return [2 /*return*/, PiCatDuotone];
                case 1641: return [4 /*yield*/, import("react-icons/pi")];
                case 1642:
                    PiCellSignalFullDuotone = (_b.sent()).PiCellSignalFullDuotone;
                    return [2 /*return*/, PiCellSignalFullDuotone];
                case 1643: return [4 /*yield*/, import("react-icons/pi")];
                case 1644:
                    PiCellSignalHighDuotone = (_b.sent()).PiCellSignalHighDuotone;
                    return [2 /*return*/, PiCellSignalHighDuotone];
                case 1645: return [4 /*yield*/, import("react-icons/pi")];
                case 1646:
                    PiCellSignalLowDuotone = (_b.sent()).PiCellSignalLowDuotone;
                    return [2 /*return*/, PiCellSignalLowDuotone];
                case 1647: return [4 /*yield*/, import("react-icons/pi")];
                case 1648:
                    PiCellSignalMediumDuotone = (_b.sent()).PiCellSignalMediumDuotone;
                    return [2 /*return*/, PiCellSignalMediumDuotone];
                case 1649: return [4 /*yield*/, import("react-icons/pi")];
                case 1650:
                    PiCellSignalNoneDuotone = (_b.sent()).PiCellSignalNoneDuotone;
                    return [2 /*return*/, PiCellSignalNoneDuotone];
                case 1651: return [4 /*yield*/, import("react-icons/pi")];
                case 1652:
                    PiCellSignalSlashDuotone = (_b.sent()).PiCellSignalSlashDuotone;
                    return [2 /*return*/, PiCellSignalSlashDuotone];
                case 1653: return [4 /*yield*/, import("react-icons/pi")];
                case 1654:
                    PiCellSignalXDuotone = (_b.sent()).PiCellSignalXDuotone;
                    return [2 /*return*/, PiCellSignalXDuotone];
                case 1655: return [4 /*yield*/, import("react-icons/pi")];
                case 1656:
                    PiCellTowerDuotone = (_b.sent()).PiCellTowerDuotone;
                    return [2 /*return*/, PiCellTowerDuotone];
                case 1657: return [4 /*yield*/, import("react-icons/pi")];
                case 1658:
                    PiCertificateDuotone = (_b.sent()).PiCertificateDuotone;
                    return [2 /*return*/, PiCertificateDuotone];
                case 1659: return [4 /*yield*/, import("react-icons/pi")];
                case 1660:
                    PiChairDuotone = (_b.sent()).PiChairDuotone;
                    return [2 /*return*/, PiChairDuotone];
                case 1661: return [4 /*yield*/, import("react-icons/pi")];
                case 1662:
                    PiChalkboardDuotone = (_b.sent()).PiChalkboardDuotone;
                    return [2 /*return*/, PiChalkboardDuotone];
                case 1663: return [4 /*yield*/, import("react-icons/pi")];
                case 1664:
                    PiChalkboardSimpleDuotone = (_b.sent()).PiChalkboardSimpleDuotone;
                    return [2 /*return*/, PiChalkboardSimpleDuotone];
                case 1665: return [4 /*yield*/, import("react-icons/pi")];
                case 1666:
                    PiChalkboardTeacherDuotone = (_b.sent()).PiChalkboardTeacherDuotone;
                    return [2 /*return*/, PiChalkboardTeacherDuotone];
                case 1667: return [4 /*yield*/, import("react-icons/pi")];
                case 1668:
                    PiChampagneDuotone = (_b.sent()).PiChampagneDuotone;
                    return [2 /*return*/, PiChampagneDuotone];
                case 1669: return [4 /*yield*/, import("react-icons/pi")];
                case 1670:
                    PiChargingStationDuotone = (_b.sent()).PiChargingStationDuotone;
                    return [2 /*return*/, PiChargingStationDuotone];
                case 1671: return [4 /*yield*/, import("react-icons/pi")];
                case 1672:
                    PiChartBarDuotone = (_b.sent()).PiChartBarDuotone;
                    return [2 /*return*/, PiChartBarDuotone];
                case 1673: return [4 /*yield*/, import("react-icons/pi")];
                case 1674:
                    PiChartBarHorizontalDuotone = (_b.sent()).PiChartBarHorizontalDuotone;
                    return [2 /*return*/, PiChartBarHorizontalDuotone];
                case 1675: return [4 /*yield*/, import("react-icons/pi")];
                case 1676:
                    PiChartDonutDuotone = (_b.sent()).PiChartDonutDuotone;
                    return [2 /*return*/, PiChartDonutDuotone];
                case 1677: return [4 /*yield*/, import("react-icons/pi")];
                case 1678:
                    PiChartLineDownDuotone = (_b.sent()).PiChartLineDownDuotone;
                    return [2 /*return*/, PiChartLineDownDuotone];
                case 1679: return [4 /*yield*/, import("react-icons/pi")];
                case 1680:
                    PiChartLineDuotone = (_b.sent()).PiChartLineDuotone;
                    return [2 /*return*/, PiChartLineDuotone];
                case 1681: return [4 /*yield*/, import("react-icons/pi")];
                case 1682:
                    PiChartLineUpDuotone = (_b.sent()).PiChartLineUpDuotone;
                    return [2 /*return*/, PiChartLineUpDuotone];
                case 1683: return [4 /*yield*/, import("react-icons/pi")];
                case 1684:
                    PiChartPieDuotone = (_b.sent()).PiChartPieDuotone;
                    return [2 /*return*/, PiChartPieDuotone];
                case 1685: return [4 /*yield*/, import("react-icons/pi")];
                case 1686:
                    PiChartPieSliceDuotone = (_b.sent()).PiChartPieSliceDuotone;
                    return [2 /*return*/, PiChartPieSliceDuotone];
                case 1687: return [4 /*yield*/, import("react-icons/pi")];
                case 1688:
                    PiChartPolarDuotone = (_b.sent()).PiChartPolarDuotone;
                    return [2 /*return*/, PiChartPolarDuotone];
                case 1689: return [4 /*yield*/, import("react-icons/pi")];
                case 1690:
                    PiChartScatterDuotone = (_b.sent()).PiChartScatterDuotone;
                    return [2 /*return*/, PiChartScatterDuotone];
                case 1691: return [4 /*yield*/, import("react-icons/pi")];
                case 1692:
                    PiChatCenteredDotsDuotone = (_b.sent()).PiChatCenteredDotsDuotone;
                    return [2 /*return*/, PiChatCenteredDotsDuotone];
                case 1693: return [4 /*yield*/, import("react-icons/pi")];
                case 1694:
                    PiChatCenteredDuotone = (_b.sent()).PiChatCenteredDuotone;
                    return [2 /*return*/, PiChatCenteredDuotone];
                case 1695: return [4 /*yield*/, import("react-icons/pi")];
                case 1696:
                    PiChatCenteredSlashDuotone = (_b.sent()).PiChatCenteredSlashDuotone;
                    return [2 /*return*/, PiChatCenteredSlashDuotone];
                case 1697: return [4 /*yield*/, import("react-icons/pi")];
                case 1698:
                    PiChatCenteredTextDuotone = (_b.sent()).PiChatCenteredTextDuotone;
                    return [2 /*return*/, PiChatCenteredTextDuotone];
                case 1699: return [4 /*yield*/, import("react-icons/pi")];
                case 1700:
                    PiChatCircleDotsDuotone = (_b.sent()).PiChatCircleDotsDuotone;
                    return [2 /*return*/, PiChatCircleDotsDuotone];
                case 1701: return [4 /*yield*/, import("react-icons/pi")];
                case 1702:
                    PiChatCircleDuotone = (_b.sent()).PiChatCircleDuotone;
                    return [2 /*return*/, PiChatCircleDuotone];
                case 1703: return [4 /*yield*/, import("react-icons/pi")];
                case 1704:
                    PiChatCircleSlashDuotone = (_b.sent()).PiChatCircleSlashDuotone;
                    return [2 /*return*/, PiChatCircleSlashDuotone];
                case 1705: return [4 /*yield*/, import("react-icons/pi")];
                case 1706:
                    PiChatCircleTextDuotone = (_b.sent()).PiChatCircleTextDuotone;
                    return [2 /*return*/, PiChatCircleTextDuotone];
                case 1707: return [4 /*yield*/, import("react-icons/pi")];
                case 1708:
                    PiChatDotsDuotone = (_b.sent()).PiChatDotsDuotone;
                    return [2 /*return*/, PiChatDotsDuotone];
                case 1709: return [4 /*yield*/, import("react-icons/pi")];
                case 1710:
                    PiChatDuotone = (_b.sent()).PiChatDuotone;
                    return [2 /*return*/, PiChatDuotone];
                case 1711: return [4 /*yield*/, import("react-icons/pi")];
                case 1712:
                    PiChatSlashDuotone = (_b.sent()).PiChatSlashDuotone;
                    return [2 /*return*/, PiChatSlashDuotone];
                case 1713: return [4 /*yield*/, import("react-icons/pi")];
                case 1714:
                    PiChatTeardropDotsDuotone = (_b.sent()).PiChatTeardropDotsDuotone;
                    return [2 /*return*/, PiChatTeardropDotsDuotone];
                case 1715: return [4 /*yield*/, import("react-icons/pi")];
                case 1716:
                    PiChatTeardropDuotone = (_b.sent()).PiChatTeardropDuotone;
                    return [2 /*return*/, PiChatTeardropDuotone];
                case 1717: return [4 /*yield*/, import("react-icons/pi")];
                case 1718:
                    PiChatTeardropSlashDuotone = (_b.sent()).PiChatTeardropSlashDuotone;
                    return [2 /*return*/, PiChatTeardropSlashDuotone];
                case 1719: return [4 /*yield*/, import("react-icons/pi")];
                case 1720:
                    PiChatTeardropTextDuotone = (_b.sent()).PiChatTeardropTextDuotone;
                    return [2 /*return*/, PiChatTeardropTextDuotone];
                case 1721: return [4 /*yield*/, import("react-icons/pi")];
                case 1722:
                    PiChatTextDuotone = (_b.sent()).PiChatTextDuotone;
                    return [2 /*return*/, PiChatTextDuotone];
                case 1723: return [4 /*yield*/, import("react-icons/pi")];
                case 1724:
                    PiChatsCircleDuotone = (_b.sent()).PiChatsCircleDuotone;
                    return [2 /*return*/, PiChatsCircleDuotone];
                case 1725: return [4 /*yield*/, import("react-icons/pi")];
                case 1726:
                    PiChatsDuotone = (_b.sent()).PiChatsDuotone;
                    return [2 /*return*/, PiChatsDuotone];
                case 1727: return [4 /*yield*/, import("react-icons/pi")];
                case 1728:
                    PiChatsTeardropDuotone = (_b.sent()).PiChatsTeardropDuotone;
                    return [2 /*return*/, PiChatsTeardropDuotone];
                case 1729: return [4 /*yield*/, import("react-icons/pi")];
                case 1730:
                    PiCheckCircleDuotone = (_b.sent()).PiCheckCircleDuotone;
                    return [2 /*return*/, PiCheckCircleDuotone];
                case 1731: return [4 /*yield*/, import("react-icons/pi")];
                case 1732:
                    PiCheckDuotone = (_b.sent()).PiCheckDuotone;
                    return [2 /*return*/, PiCheckDuotone];
                case 1733: return [4 /*yield*/, import("react-icons/pi")];
                case 1734:
                    PiCheckFatDuotone = (_b.sent()).PiCheckFatDuotone;
                    return [2 /*return*/, PiCheckFatDuotone];
                case 1735: return [4 /*yield*/, import("react-icons/pi")];
                case 1736:
                    PiCheckSquareDuotone = (_b.sent()).PiCheckSquareDuotone;
                    return [2 /*return*/, PiCheckSquareDuotone];
                case 1737: return [4 /*yield*/, import("react-icons/pi")];
                case 1738:
                    PiCheckSquareOffsetDuotone = (_b.sent()).PiCheckSquareOffsetDuotone;
                    return [2 /*return*/, PiCheckSquareOffsetDuotone];
                case 1739: return [4 /*yield*/, import("react-icons/pi")];
                case 1740:
                    PiCheckerboardDuotone = (_b.sent()).PiCheckerboardDuotone;
                    return [2 /*return*/, PiCheckerboardDuotone];
                case 1741: return [4 /*yield*/, import("react-icons/pi")];
                case 1742:
                    PiChecksDuotone = (_b.sent()).PiChecksDuotone;
                    return [2 /*return*/, PiChecksDuotone];
                case 1743: return [4 /*yield*/, import("react-icons/pi")];
                case 1744:
                    PiCheersDuotone = (_b.sent()).PiCheersDuotone;
                    return [2 /*return*/, PiCheersDuotone];
                case 1745: return [4 /*yield*/, import("react-icons/pi")];
                case 1746:
                    PiCheeseDuotone = (_b.sent()).PiCheeseDuotone;
                    return [2 /*return*/, PiCheeseDuotone];
                case 1747: return [4 /*yield*/, import("react-icons/pi")];
                case 1748:
                    PiChefHatDuotone = (_b.sent()).PiChefHatDuotone;
                    return [2 /*return*/, PiChefHatDuotone];
                case 1749: return [4 /*yield*/, import("react-icons/pi")];
                case 1750:
                    PiCherriesDuotone = (_b.sent()).PiCherriesDuotone;
                    return [2 /*return*/, PiCherriesDuotone];
                case 1751: return [4 /*yield*/, import("react-icons/pi")];
                case 1752:
                    PiChurchDuotone = (_b.sent()).PiChurchDuotone;
                    return [2 /*return*/, PiChurchDuotone];
                case 1753: return [4 /*yield*/, import("react-icons/pi")];
                case 1754:
                    PiCigaretteDuotone = (_b.sent()).PiCigaretteDuotone;
                    return [2 /*return*/, PiCigaretteDuotone];
                case 1755: return [4 /*yield*/, import("react-icons/pi")];
                case 1756:
                    PiCigaretteSlashDuotone = (_b.sent()).PiCigaretteSlashDuotone;
                    return [2 /*return*/, PiCigaretteSlashDuotone];
                case 1757: return [4 /*yield*/, import("react-icons/pi")];
                case 1758:
                    PiCircleDashedDuotone = (_b.sent()).PiCircleDashedDuotone;
                    return [2 /*return*/, PiCircleDashedDuotone];
                case 1759: return [4 /*yield*/, import("react-icons/pi")];
                case 1760:
                    PiCircleDuotone = (_b.sent()).PiCircleDuotone;
                    return [2 /*return*/, PiCircleDuotone];
                case 1761: return [4 /*yield*/, import("react-icons/pi")];
                case 1762:
                    PiCircleHalfDuotone = (_b.sent()).PiCircleHalfDuotone;
                    return [2 /*return*/, PiCircleHalfDuotone];
                case 1763: return [4 /*yield*/, import("react-icons/pi")];
                case 1764:
                    PiCircleHalfTiltDuotone = (_b.sent()).PiCircleHalfTiltDuotone;
                    return [2 /*return*/, PiCircleHalfTiltDuotone];
                case 1765: return [4 /*yield*/, import("react-icons/pi")];
                case 1766:
                    PiCircleNotchDuotone = (_b.sent()).PiCircleNotchDuotone;
                    return [2 /*return*/, PiCircleNotchDuotone];
                case 1767: return [4 /*yield*/, import("react-icons/pi")];
                case 1768:
                    PiCirclesFourDuotone = (_b.sent()).PiCirclesFourDuotone;
                    return [2 /*return*/, PiCirclesFourDuotone];
                case 1769: return [4 /*yield*/, import("react-icons/pi")];
                case 1770:
                    PiCirclesThreeDuotone = (_b.sent()).PiCirclesThreeDuotone;
                    return [2 /*return*/, PiCirclesThreeDuotone];
                case 1771: return [4 /*yield*/, import("react-icons/pi")];
                case 1772:
                    PiCirclesThreePlusDuotone = (_b.sent()).PiCirclesThreePlusDuotone;
                    return [2 /*return*/, PiCirclesThreePlusDuotone];
                case 1773: return [4 /*yield*/, import("react-icons/pi")];
                case 1774:
                    PiCircuitryDuotone = (_b.sent()).PiCircuitryDuotone;
                    return [2 /*return*/, PiCircuitryDuotone];
                case 1775: return [4 /*yield*/, import("react-icons/pi")];
                case 1776:
                    PiCityDuotone = (_b.sent()).PiCityDuotone;
                    return [2 /*return*/, PiCityDuotone];
                case 1777: return [4 /*yield*/, import("react-icons/pi")];
                case 1778:
                    PiClipboardDuotone = (_b.sent()).PiClipboardDuotone;
                    return [2 /*return*/, PiClipboardDuotone];
                case 1779: return [4 /*yield*/, import("react-icons/pi")];
                case 1780:
                    PiClipboardTextDuotone = (_b.sent()).PiClipboardTextDuotone;
                    return [2 /*return*/, PiClipboardTextDuotone];
                case 1781: return [4 /*yield*/, import("react-icons/pi")];
                case 1782:
                    PiClockAfternoonDuotone = (_b.sent()).PiClockAfternoonDuotone;
                    return [2 /*return*/, PiClockAfternoonDuotone];
                case 1783: return [4 /*yield*/, import("react-icons/pi")];
                case 1784:
                    PiClockClockwiseDuotone = (_b.sent()).PiClockClockwiseDuotone;
                    return [2 /*return*/, PiClockClockwiseDuotone];
                case 1785: return [4 /*yield*/, import("react-icons/pi")];
                case 1786:
                    PiClockCountdownDuotone = (_b.sent()).PiClockCountdownDuotone;
                    return [2 /*return*/, PiClockCountdownDuotone];
                case 1787: return [4 /*yield*/, import("react-icons/pi")];
                case 1788:
                    PiClockCounterClockwiseDuotone = (_b.sent()).PiClockCounterClockwiseDuotone;
                    return [2 /*return*/, PiClockCounterClockwiseDuotone];
                case 1789: return [4 /*yield*/, import("react-icons/pi")];
                case 1790:
                    PiClockDuotone = (_b.sent()).PiClockDuotone;
                    return [2 /*return*/, PiClockDuotone];
                case 1791: return [4 /*yield*/, import("react-icons/pi")];
                case 1792:
                    PiClockUserDuotone = (_b.sent()).PiClockUserDuotone;
                    return [2 /*return*/, PiClockUserDuotone];
                case 1793: return [4 /*yield*/, import("react-icons/pi")];
                case 1794:
                    PiClosedCaptioningDuotone = (_b.sent()).PiClosedCaptioningDuotone;
                    return [2 /*return*/, PiClosedCaptioningDuotone];
                case 1795: return [4 /*yield*/, import("react-icons/pi")];
                case 1796:
                    PiCloudArrowDownDuotone = (_b.sent()).PiCloudArrowDownDuotone;
                    return [2 /*return*/, PiCloudArrowDownDuotone];
                case 1797: return [4 /*yield*/, import("react-icons/pi")];
                case 1798:
                    PiCloudArrowUpDuotone = (_b.sent()).PiCloudArrowUpDuotone;
                    return [2 /*return*/, PiCloudArrowUpDuotone];
                case 1799: return [4 /*yield*/, import("react-icons/pi")];
                case 1800:
                    PiCloudCheckDuotone = (_b.sent()).PiCloudCheckDuotone;
                    return [2 /*return*/, PiCloudCheckDuotone];
                case 1801: return [4 /*yield*/, import("react-icons/pi")];
                case 1802:
                    PiCloudDuotone = (_b.sent()).PiCloudDuotone;
                    return [2 /*return*/, PiCloudDuotone];
                case 1803: return [4 /*yield*/, import("react-icons/pi")];
                case 1804:
                    PiCloudFogDuotone = (_b.sent()).PiCloudFogDuotone;
                    return [2 /*return*/, PiCloudFogDuotone];
                case 1805: return [4 /*yield*/, import("react-icons/pi")];
                case 1806:
                    PiCloudLightningDuotone = (_b.sent()).PiCloudLightningDuotone;
                    return [2 /*return*/, PiCloudLightningDuotone];
                case 1807: return [4 /*yield*/, import("react-icons/pi")];
                case 1808:
                    PiCloudMoonDuotone = (_b.sent()).PiCloudMoonDuotone;
                    return [2 /*return*/, PiCloudMoonDuotone];
                case 1809: return [4 /*yield*/, import("react-icons/pi")];
                case 1810:
                    PiCloudRainDuotone = (_b.sent()).PiCloudRainDuotone;
                    return [2 /*return*/, PiCloudRainDuotone];
                case 1811: return [4 /*yield*/, import("react-icons/pi")];
                case 1812:
                    PiCloudSlashDuotone = (_b.sent()).PiCloudSlashDuotone;
                    return [2 /*return*/, PiCloudSlashDuotone];
                case 1813: return [4 /*yield*/, import("react-icons/pi")];
                case 1814:
                    PiCloudSnowDuotone = (_b.sent()).PiCloudSnowDuotone;
                    return [2 /*return*/, PiCloudSnowDuotone];
                case 1815: return [4 /*yield*/, import("react-icons/pi")];
                case 1816:
                    PiCloudSunDuotone = (_b.sent()).PiCloudSunDuotone;
                    return [2 /*return*/, PiCloudSunDuotone];
                case 1817: return [4 /*yield*/, import("react-icons/pi")];
                case 1818:
                    PiCloudWarningDuotone = (_b.sent()).PiCloudWarningDuotone;
                    return [2 /*return*/, PiCloudWarningDuotone];
                case 1819: return [4 /*yield*/, import("react-icons/pi")];
                case 1820:
                    PiCloudXDuotone = (_b.sent()).PiCloudXDuotone;
                    return [2 /*return*/, PiCloudXDuotone];
                case 1821: return [4 /*yield*/, import("react-icons/pi")];
                case 1822:
                    PiCloverDuotone = (_b.sent()).PiCloverDuotone;
                    return [2 /*return*/, PiCloverDuotone];
                case 1823: return [4 /*yield*/, import("react-icons/pi")];
                case 1824:
                    PiClubDuotone = (_b.sent()).PiClubDuotone;
                    return [2 /*return*/, PiClubDuotone];
                case 1825: return [4 /*yield*/, import("react-icons/pi")];
                case 1826:
                    PiCoatHangerDuotone = (_b.sent()).PiCoatHangerDuotone;
                    return [2 /*return*/, PiCoatHangerDuotone];
                case 1827: return [4 /*yield*/, import("react-icons/pi")];
                case 1828:
                    PiCodaLogoDuotone = (_b.sent()).PiCodaLogoDuotone;
                    return [2 /*return*/, PiCodaLogoDuotone];
                case 1829: return [4 /*yield*/, import("react-icons/pi")];
                case 1830:
                    PiCodeBlockDuotone = (_b.sent()).PiCodeBlockDuotone;
                    return [2 /*return*/, PiCodeBlockDuotone];
                case 1831: return [4 /*yield*/, import("react-icons/pi")];
                case 1832:
                    PiCodeDuotone = (_b.sent()).PiCodeDuotone;
                    return [2 /*return*/, PiCodeDuotone];
                case 1833: return [4 /*yield*/, import("react-icons/pi")];
                case 1834:
                    PiCodeSimpleDuotone = (_b.sent()).PiCodeSimpleDuotone;
                    return [2 /*return*/, PiCodeSimpleDuotone];
                case 1835: return [4 /*yield*/, import("react-icons/pi")];
                case 1836:
                    PiCodepenLogoDuotone = (_b.sent()).PiCodepenLogoDuotone;
                    return [2 /*return*/, PiCodepenLogoDuotone];
                case 1837: return [4 /*yield*/, import("react-icons/pi")];
                case 1838:
                    PiCodesandboxLogoDuotone = (_b.sent()).PiCodesandboxLogoDuotone;
                    return [2 /*return*/, PiCodesandboxLogoDuotone];
                case 1839: return [4 /*yield*/, import("react-icons/pi")];
                case 1840:
                    PiCoffeeBeanDuotone = (_b.sent()).PiCoffeeBeanDuotone;
                    return [2 /*return*/, PiCoffeeBeanDuotone];
                case 1841: return [4 /*yield*/, import("react-icons/pi")];
                case 1842:
                    PiCoffeeDuotone = (_b.sent()).PiCoffeeDuotone;
                    return [2 /*return*/, PiCoffeeDuotone];
                case 1843: return [4 /*yield*/, import("react-icons/pi")];
                case 1844:
                    PiCoinDuotone = (_b.sent()).PiCoinDuotone;
                    return [2 /*return*/, PiCoinDuotone];
                case 1845: return [4 /*yield*/, import("react-icons/pi")];
                case 1846:
                    PiCoinVerticalDuotone = (_b.sent()).PiCoinVerticalDuotone;
                    return [2 /*return*/, PiCoinVerticalDuotone];
                case 1847: return [4 /*yield*/, import("react-icons/pi")];
                case 1848:
                    PiCoinsDuotone = (_b.sent()).PiCoinsDuotone;
                    return [2 /*return*/, PiCoinsDuotone];
                case 1849: return [4 /*yield*/, import("react-icons/pi")];
                case 1850:
                    PiColumnsDuotone = (_b.sent()).PiColumnsDuotone;
                    return [2 /*return*/, PiColumnsDuotone];
                case 1851: return [4 /*yield*/, import("react-icons/pi")];
                case 1852:
                    PiColumnsPlusLeftDuotone = (_b.sent()).PiColumnsPlusLeftDuotone;
                    return [2 /*return*/, PiColumnsPlusLeftDuotone];
                case 1853: return [4 /*yield*/, import("react-icons/pi")];
                case 1854:
                    PiColumnsPlusRightDuotone = (_b.sent()).PiColumnsPlusRightDuotone;
                    return [2 /*return*/, PiColumnsPlusRightDuotone];
                case 1855: return [4 /*yield*/, import("react-icons/pi")];
                case 1856:
                    PiCommandDuotone = (_b.sent()).PiCommandDuotone;
                    return [2 /*return*/, PiCommandDuotone];
                case 1857: return [4 /*yield*/, import("react-icons/pi")];
                case 1858:
                    PiCompassDuotone = (_b.sent()).PiCompassDuotone;
                    return [2 /*return*/, PiCompassDuotone];
                case 1859: return [4 /*yield*/, import("react-icons/pi")];
                case 1860:
                    PiCompassRoseDuotone = (_b.sent()).PiCompassRoseDuotone;
                    return [2 /*return*/, PiCompassRoseDuotone];
                case 1861: return [4 /*yield*/, import("react-icons/pi")];
                case 1862:
                    PiCompassToolDuotone = (_b.sent()).PiCompassToolDuotone;
                    return [2 /*return*/, PiCompassToolDuotone];
                case 1863: return [4 /*yield*/, import("react-icons/pi")];
                case 1864:
                    PiComputerTowerDuotone = (_b.sent()).PiComputerTowerDuotone;
                    return [2 /*return*/, PiComputerTowerDuotone];
                case 1865: return [4 /*yield*/, import("react-icons/pi")];
                case 1866:
                    PiConfettiDuotone = (_b.sent()).PiConfettiDuotone;
                    return [2 /*return*/, PiConfettiDuotone];
                case 1867: return [4 /*yield*/, import("react-icons/pi")];
                case 1868:
                    PiContactlessPaymentDuotone = (_b.sent()).PiContactlessPaymentDuotone;
                    return [2 /*return*/, PiContactlessPaymentDuotone];
                case 1869: return [4 /*yield*/, import("react-icons/pi")];
                case 1870:
                    PiControlDuotone = (_b.sent()).PiControlDuotone;
                    return [2 /*return*/, PiControlDuotone];
                case 1871: return [4 /*yield*/, import("react-icons/pi")];
                case 1872:
                    PiCookieDuotone = (_b.sent()).PiCookieDuotone;
                    return [2 /*return*/, PiCookieDuotone];
                case 1873: return [4 /*yield*/, import("react-icons/pi")];
                case 1874:
                    PiCookingPotDuotone = (_b.sent()).PiCookingPotDuotone;
                    return [2 /*return*/, PiCookingPotDuotone];
                case 1875: return [4 /*yield*/, import("react-icons/pi")];
                case 1876:
                    PiCopyDuotone = (_b.sent()).PiCopyDuotone;
                    return [2 /*return*/, PiCopyDuotone];
                case 1877: return [4 /*yield*/, import("react-icons/pi")];
                case 1878:
                    PiCopySimpleDuotone = (_b.sent()).PiCopySimpleDuotone;
                    return [2 /*return*/, PiCopySimpleDuotone];
                case 1879: return [4 /*yield*/, import("react-icons/pi")];
                case 1880:
                    PiCopyleftDuotone = (_b.sent()).PiCopyleftDuotone;
                    return [2 /*return*/, PiCopyleftDuotone];
                case 1881: return [4 /*yield*/, import("react-icons/pi")];
                case 1882:
                    PiCopyrightDuotone = (_b.sent()).PiCopyrightDuotone;
                    return [2 /*return*/, PiCopyrightDuotone];
                case 1883: return [4 /*yield*/, import("react-icons/pi")];
                case 1884:
                    PiCornersInDuotone = (_b.sent()).PiCornersInDuotone;
                    return [2 /*return*/, PiCornersInDuotone];
                case 1885: return [4 /*yield*/, import("react-icons/pi")];
                case 1886:
                    PiCornersOutDuotone = (_b.sent()).PiCornersOutDuotone;
                    return [2 /*return*/, PiCornersOutDuotone];
                case 1887: return [4 /*yield*/, import("react-icons/pi")];
                case 1888:
                    PiCouchDuotone = (_b.sent()).PiCouchDuotone;
                    return [2 /*return*/, PiCouchDuotone];
                case 1889: return [4 /*yield*/, import("react-icons/pi")];
                case 1890:
                    PiCourtBasketballDuotone = (_b.sent()).PiCourtBasketballDuotone;
                    return [2 /*return*/, PiCourtBasketballDuotone];
                case 1891: return [4 /*yield*/, import("react-icons/pi")];
                case 1892:
                    PiCowDuotone = (_b.sent()).PiCowDuotone;
                    return [2 /*return*/, PiCowDuotone];
                case 1893: return [4 /*yield*/, import("react-icons/pi")];
                case 1894:
                    PiCowboyHatDuotone = (_b.sent()).PiCowboyHatDuotone;
                    return [2 /*return*/, PiCowboyHatDuotone];
                case 1895: return [4 /*yield*/, import("react-icons/pi")];
                case 1896:
                    PiCpuDuotone = (_b.sent()).PiCpuDuotone;
                    return [2 /*return*/, PiCpuDuotone];
                case 1897: return [4 /*yield*/, import("react-icons/pi")];
                case 1898:
                    PiCraneDuotone = (_b.sent()).PiCraneDuotone;
                    return [2 /*return*/, PiCraneDuotone];
                case 1899: return [4 /*yield*/, import("react-icons/pi")];
                case 1900:
                    PiCraneTowerDuotone = (_b.sent()).PiCraneTowerDuotone;
                    return [2 /*return*/, PiCraneTowerDuotone];
                case 1901: return [4 /*yield*/, import("react-icons/pi")];
                case 1902:
                    PiCreditCardDuotone = (_b.sent()).PiCreditCardDuotone;
                    return [2 /*return*/, PiCreditCardDuotone];
                case 1903: return [4 /*yield*/, import("react-icons/pi")];
                case 1904:
                    PiCricketDuotone = (_b.sent()).PiCricketDuotone;
                    return [2 /*return*/, PiCricketDuotone];
                case 1905: return [4 /*yield*/, import("react-icons/pi")];
                case 1906:
                    PiCropDuotone = (_b.sent()).PiCropDuotone;
                    return [2 /*return*/, PiCropDuotone];
                case 1907: return [4 /*yield*/, import("react-icons/pi")];
                case 1908:
                    PiCrossDuotone = (_b.sent()).PiCrossDuotone;
                    return [2 /*return*/, PiCrossDuotone];
                case 1909: return [4 /*yield*/, import("react-icons/pi")];
                case 1910:
                    PiCrosshairDuotone = (_b.sent()).PiCrosshairDuotone;
                    return [2 /*return*/, PiCrosshairDuotone];
                case 1911: return [4 /*yield*/, import("react-icons/pi")];
                case 1912:
                    PiCrosshairSimpleDuotone = (_b.sent()).PiCrosshairSimpleDuotone;
                    return [2 /*return*/, PiCrosshairSimpleDuotone];
                case 1913: return [4 /*yield*/, import("react-icons/pi")];
                case 1914:
                    PiCrownCrossDuotone = (_b.sent()).PiCrownCrossDuotone;
                    return [2 /*return*/, PiCrownCrossDuotone];
                case 1915: return [4 /*yield*/, import("react-icons/pi")];
                case 1916:
                    PiCrownDuotone = (_b.sent()).PiCrownDuotone;
                    return [2 /*return*/, PiCrownDuotone];
                case 1917: return [4 /*yield*/, import("react-icons/pi")];
                case 1918:
                    PiCrownSimpleDuotone = (_b.sent()).PiCrownSimpleDuotone;
                    return [2 /*return*/, PiCrownSimpleDuotone];
                case 1919: return [4 /*yield*/, import("react-icons/pi")];
                case 1920:
                    PiCubeDuotone = (_b.sent()).PiCubeDuotone;
                    return [2 /*return*/, PiCubeDuotone];
                case 1921: return [4 /*yield*/, import("react-icons/pi")];
                case 1922:
                    PiCubeFocusDuotone = (_b.sent()).PiCubeFocusDuotone;
                    return [2 /*return*/, PiCubeFocusDuotone];
                case 1923: return [4 /*yield*/, import("react-icons/pi")];
                case 1924:
                    PiCubeTransparentDuotone = (_b.sent()).PiCubeTransparentDuotone;
                    return [2 /*return*/, PiCubeTransparentDuotone];
                case 1925: return [4 /*yield*/, import("react-icons/pi")];
                case 1926:
                    PiCurrencyBtcDuotone = (_b.sent()).PiCurrencyBtcDuotone;
                    return [2 /*return*/, PiCurrencyBtcDuotone];
                case 1927: return [4 /*yield*/, import("react-icons/pi")];
                case 1928:
                    PiCurrencyCircleDollarDuotone = (_b.sent()).PiCurrencyCircleDollarDuotone;
                    return [2 /*return*/, PiCurrencyCircleDollarDuotone];
                case 1929: return [4 /*yield*/, import("react-icons/pi")];
                case 1930:
                    PiCurrencyCnyDuotone = (_b.sent()).PiCurrencyCnyDuotone;
                    return [2 /*return*/, PiCurrencyCnyDuotone];
                case 1931: return [4 /*yield*/, import("react-icons/pi")];
                case 1932:
                    PiCurrencyDollarDuotone = (_b.sent()).PiCurrencyDollarDuotone;
                    return [2 /*return*/, PiCurrencyDollarDuotone];
                case 1933: return [4 /*yield*/, import("react-icons/pi")];
                case 1934:
                    PiCurrencyDollarSimpleDuotone = (_b.sent()).PiCurrencyDollarSimpleDuotone;
                    return [2 /*return*/, PiCurrencyDollarSimpleDuotone];
                case 1935: return [4 /*yield*/, import("react-icons/pi")];
                case 1936:
                    PiCurrencyEthDuotone = (_b.sent()).PiCurrencyEthDuotone;
                    return [2 /*return*/, PiCurrencyEthDuotone];
                case 1937: return [4 /*yield*/, import("react-icons/pi")];
                case 1938:
                    PiCurrencyEurDuotone = (_b.sent()).PiCurrencyEurDuotone;
                    return [2 /*return*/, PiCurrencyEurDuotone];
                case 1939: return [4 /*yield*/, import("react-icons/pi")];
                case 1940:
                    PiCurrencyGbpDuotone = (_b.sent()).PiCurrencyGbpDuotone;
                    return [2 /*return*/, PiCurrencyGbpDuotone];
                case 1941: return [4 /*yield*/, import("react-icons/pi")];
                case 1942:
                    PiCurrencyInrDuotone = (_b.sent()).PiCurrencyInrDuotone;
                    return [2 /*return*/, PiCurrencyInrDuotone];
                case 1943: return [4 /*yield*/, import("react-icons/pi")];
                case 1944:
                    PiCurrencyJpyDuotone = (_b.sent()).PiCurrencyJpyDuotone;
                    return [2 /*return*/, PiCurrencyJpyDuotone];
                case 1945: return [4 /*yield*/, import("react-icons/pi")];
                case 1946:
                    PiCurrencyKrwDuotone = (_b.sent()).PiCurrencyKrwDuotone;
                    return [2 /*return*/, PiCurrencyKrwDuotone];
                case 1947: return [4 /*yield*/, import("react-icons/pi")];
                case 1948:
                    PiCurrencyKztDuotone = (_b.sent()).PiCurrencyKztDuotone;
                    return [2 /*return*/, PiCurrencyKztDuotone];
                case 1949: return [4 /*yield*/, import("react-icons/pi")];
                case 1950:
                    PiCurrencyNgnDuotone = (_b.sent()).PiCurrencyNgnDuotone;
                    return [2 /*return*/, PiCurrencyNgnDuotone];
                case 1951: return [4 /*yield*/, import("react-icons/pi")];
                case 1952:
                    PiCurrencyRubDuotone = (_b.sent()).PiCurrencyRubDuotone;
                    return [2 /*return*/, PiCurrencyRubDuotone];
                case 1953: return [4 /*yield*/, import("react-icons/pi")];
                case 1954:
                    PiCursorClickDuotone = (_b.sent()).PiCursorClickDuotone;
                    return [2 /*return*/, PiCursorClickDuotone];
                case 1955: return [4 /*yield*/, import("react-icons/pi")];
                case 1956:
                    PiCursorDuotone = (_b.sent()).PiCursorDuotone;
                    return [2 /*return*/, PiCursorDuotone];
                case 1957: return [4 /*yield*/, import("react-icons/pi")];
                case 1958:
                    PiCursorTextDuotone = (_b.sent()).PiCursorTextDuotone;
                    return [2 /*return*/, PiCursorTextDuotone];
                case 1959: return [4 /*yield*/, import("react-icons/pi")];
                case 1960:
                    PiCylinderDuotone = (_b.sent()).PiCylinderDuotone;
                    return [2 /*return*/, PiCylinderDuotone];
                case 1961: return [4 /*yield*/, import("react-icons/pi")];
                case 1962:
                    PiDatabaseDuotone = (_b.sent()).PiDatabaseDuotone;
                    return [2 /*return*/, PiDatabaseDuotone];
                case 1963: return [4 /*yield*/, import("react-icons/pi")];
                case 1964:
                    PiDeskDuotone = (_b.sent()).PiDeskDuotone;
                    return [2 /*return*/, PiDeskDuotone];
                case 1965: return [4 /*yield*/, import("react-icons/pi")];
                case 1966:
                    PiDesktopDuotone = (_b.sent()).PiDesktopDuotone;
                    return [2 /*return*/, PiDesktopDuotone];
                case 1967: return [4 /*yield*/, import("react-icons/pi")];
                case 1968:
                    PiDesktopTowerDuotone = (_b.sent()).PiDesktopTowerDuotone;
                    return [2 /*return*/, PiDesktopTowerDuotone];
                case 1969: return [4 /*yield*/, import("react-icons/pi")];
                case 1970:
                    PiDetectiveDuotone = (_b.sent()).PiDetectiveDuotone;
                    return [2 /*return*/, PiDetectiveDuotone];
                case 1971: return [4 /*yield*/, import("react-icons/pi")];
                case 1972:
                    PiDevToLogoDuotone = (_b.sent()).PiDevToLogoDuotone;
                    return [2 /*return*/, PiDevToLogoDuotone];
                case 1973: return [4 /*yield*/, import("react-icons/pi")];
                case 1974:
                    PiDeviceMobileCameraDuotone = (_b.sent()).PiDeviceMobileCameraDuotone;
                    return [2 /*return*/, PiDeviceMobileCameraDuotone];
                case 1975: return [4 /*yield*/, import("react-icons/pi")];
                case 1976:
                    PiDeviceMobileDuotone = (_b.sent()).PiDeviceMobileDuotone;
                    return [2 /*return*/, PiDeviceMobileDuotone];
                case 1977: return [4 /*yield*/, import("react-icons/pi")];
                case 1978:
                    PiDeviceMobileSlashDuotone = (_b.sent()).PiDeviceMobileSlashDuotone;
                    return [2 /*return*/, PiDeviceMobileSlashDuotone];
                case 1979: return [4 /*yield*/, import("react-icons/pi")];
                case 1980:
                    PiDeviceMobileSpeakerDuotone = (_b.sent()).PiDeviceMobileSpeakerDuotone;
                    return [2 /*return*/, PiDeviceMobileSpeakerDuotone];
                case 1981: return [4 /*yield*/, import("react-icons/pi")];
                case 1982:
                    PiDeviceRotateDuotone = (_b.sent()).PiDeviceRotateDuotone;
                    return [2 /*return*/, PiDeviceRotateDuotone];
                case 1983: return [4 /*yield*/, import("react-icons/pi")];
                case 1984:
                    PiDeviceTabletCameraDuotone = (_b.sent()).PiDeviceTabletCameraDuotone;
                    return [2 /*return*/, PiDeviceTabletCameraDuotone];
                case 1985: return [4 /*yield*/, import("react-icons/pi")];
                case 1986:
                    PiDeviceTabletDuotone = (_b.sent()).PiDeviceTabletDuotone;
                    return [2 /*return*/, PiDeviceTabletDuotone];
                case 1987: return [4 /*yield*/, import("react-icons/pi")];
                case 1988:
                    PiDeviceTabletSpeakerDuotone = (_b.sent()).PiDeviceTabletSpeakerDuotone;
                    return [2 /*return*/, PiDeviceTabletSpeakerDuotone];
                case 1989: return [4 /*yield*/, import("react-icons/pi")];
                case 1990:
                    PiDevicesDuotone = (_b.sent()).PiDevicesDuotone;
                    return [2 /*return*/, PiDevicesDuotone];
                case 1991: return [4 /*yield*/, import("react-icons/pi")];
                case 1992:
                    PiDiamondDuotone = (_b.sent()).PiDiamondDuotone;
                    return [2 /*return*/, PiDiamondDuotone];
                case 1993: return [4 /*yield*/, import("react-icons/pi")];
                case 1994:
                    PiDiamondsFourDuotone = (_b.sent()).PiDiamondsFourDuotone;
                    return [2 /*return*/, PiDiamondsFourDuotone];
                case 1995: return [4 /*yield*/, import("react-icons/pi")];
                case 1996:
                    PiDiceFiveDuotone = (_b.sent()).PiDiceFiveDuotone;
                    return [2 /*return*/, PiDiceFiveDuotone];
                case 1997: return [4 /*yield*/, import("react-icons/pi")];
                case 1998:
                    PiDiceFourDuotone = (_b.sent()).PiDiceFourDuotone;
                    return [2 /*return*/, PiDiceFourDuotone];
                case 1999: return [4 /*yield*/, import("react-icons/pi")];
                case 2000:
                    PiDiceOneDuotone = (_b.sent()).PiDiceOneDuotone;
                    return [2 /*return*/, PiDiceOneDuotone];
                case 2001: return [2 /*return*/];
            }
        });
    });
}
