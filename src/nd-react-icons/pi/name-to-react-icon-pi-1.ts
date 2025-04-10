import type {IconType} from "react-icons";

import {
    PiPackageBold,
    PiPaintBrushBold,
    PiPaintBrushBroadBold,
    PiPaintBrushHouseholdBold,
    PiPaintBucketBold,
    PiPaintRollerBold,
    PiPaletteBold,
    PiPanoramaBold,
    PiPantsBold,
    PiPaperPlaneBold,
    PiPaperPlaneRightBold,
    PiPaperPlaneTiltBold,
    PiPaperclipBold,
    PiPaperclipHorizontalBold,
    PiParachuteBold,
    PiParagraphBold,
    PiParallelogramBold,
    PiParkBold,
    PiPasswordBold,
    PiPathBold,
    PiPatreonLogoBold,
    PiPauseBold,
    PiPauseCircleBold,
    PiPawPrintBold,
    PiPaypalLogoBold,
    PiPeaceBold,
    PiPenBold,
    PiPenNibBold,
    PiPenNibStraightBold,
    PiPencilBold,
    PiPencilCircleBold,
    PiPencilLineBold,
    PiPencilRulerBold,
    PiPencilSimpleBold,
    PiPencilSimpleLineBold,
    PiPencilSimpleSlashBold,
    PiPencilSlashBold,
    PiPentagonBold,
    PiPentagramBold,
    PiPepperBold,
    PiPercentBold,
    PiPersonArmsSpreadBold,
    PiPersonBold,
    PiPersonSimpleBikeBold,
    PiPersonSimpleBold,
    PiPersonSimpleCircleBold,
    PiPersonSimpleHikeBold,
    PiPersonSimpleRunBold,
    PiPersonSimpleSkiBold,
    PiPersonSimpleSnowboardBold,
    PiPersonSimpleSwimBold,
    PiPersonSimpleTaiChiBold,
    PiPersonSimpleThrowBold,
    PiPersonSimpleWalkBold,
    PiPerspectiveBold,
    PiPhoneBold,
    PiPhoneCallBold,
    PiPhoneDisconnectBold,
    PiPhoneIncomingBold,
    PiPhoneListBold,
    PiPhoneOutgoingBold,
    PiPhonePauseBold,
    PiPhonePlusBold,
    PiPhoneSlashBold,
    PiPhoneTransferBold,
    PiPhoneXBold,
    PiPhosphorLogoBold,
    PiPiBold,
    PiPianoKeysBold,
    PiPicnicTableBold,
    PiPictureInPictureBold,
    PiPiggyBankBold,
    PiPillBold,
    PiPingPongBold,
    PiPintGlassBold,
    PiPinterestLogoBold,
    PiPinwheelBold,
    PiPipeBold,
    PiPipeWrenchBold,
    PiPixLogoBold,
    PiPizzaBold,
    PiPlaceholderBold,
    PiPlanetBold,
    PiPlantBold,
    PiPlayBold,
    PiPlayCircleBold,
    PiPlayPauseBold,
    PiPlaylistBold,
    PiPlugBold,
    PiPlugChargingBold,
    PiPlugsBold,
    PiPlugsConnectedBold,
    PiPlusBold,
    PiPlusCircleBold,
    PiPlusMinusBold,
    PiPlusSquareBold,
    PiPokerChipBold,
    PiPoliceCarBold,
    PiPolygonBold,
    PiPopcornBold,
    PiPopsicleBold,
    PiPottedPlantBold,
    PiPowerBold,
    PiPrescriptionBold,
    PiPresentationBold,
    PiPresentationChartBold,
    PiPrinterBold,
    PiProhibitBold,
    PiProhibitInsetBold,
    PiProjectorScreenBold,
    PiProjectorScreenChartBold,
    PiPulseBold,
    PiPushPinBold,
    PiPushPinSimpleBold,
    PiPushPinSimpleSlashBold,
    PiPushPinSlashBold,
    PiPuzzlePieceBold,
    PiQrCodeBold,
    PiQuestionBold,
    PiQuestionMarkBold,
    PiQueueBold,
    PiQuotesBold,
    PiRabbitBold,
    PiRacquetBold,
    PiRadicalBold,
    PiRadioBold,
    PiRadioButtonBold,
    PiRadioactiveBold,
    PiRainbowBold,
    PiRainbowCloudBold,
    PiRankingBold,
    PiReadCvLogoBold,
    PiReceiptBold,
    PiReceiptXBold,
    PiRecordBold,
    PiRectangleBold,
    PiRectangleDashedBold,
    PiRecycleBold,
    PiRedditLogoBold,
    PiRepeatBold,
    PiRepeatOnceBold,
    PiReplitLogoBold,
    PiResizeBold,
    PiRewindBold,
    PiRewindCircleBold,
    PiRoadHorizonBold,
    PiRobotBold,
    PiRocketBold,
    PiRocketLaunchBold,
    PiRowsBold,
    PiRowsPlusBottomBold,
    PiRowsPlusTopBold,
    PiRssBold,
    PiRssSimpleBold,
    PiRugBold,
    PiRulerBold,
    PiSailboatBold,
    PiScalesBold,
    PiScanBold,
    PiScanSmileyBold,
    PiScissorsBold,
    PiScooterBold,
    PiScreencastBold,
    PiScrewdriverBold,
    PiScribbleBold,
    PiScribbleLoopBold,
    PiScrollBold,
    PiSealBold,
    PiSealCheckBold,
    PiSealPercentBold,
    PiSealQuestionBold,
    PiSealWarningBold,
    PiSeatBold,
    PiSeatbeltBold,
    PiSecurityCameraBold,
    PiSelectionAllBold,
    PiSelectionBackgroundBold,
    PiSelectionBold,
    PiSelectionForegroundBold,
    PiSelectionInverseBold,
    PiSelectionPlusBold,
    PiSelectionSlashBold,
    PiShapesBold,
    PiShareBold,
    PiShareFatBold,
    PiShareNetworkBold,
    PiShieldBold,
    PiShieldCheckBold,
    PiShieldCheckeredBold,
    PiShieldChevronBold,
    PiShieldPlusBold,
    PiShieldSlashBold,
    PiShieldStarBold,
    PiShieldWarningBold,
    PiShippingContainerBold,
    PiShirtFoldedBold,
    PiShootingStarBold,
    PiShoppingBagBold,
    PiShoppingBagOpenBold,
    PiShoppingCartBold,
    PiShoppingCartSimpleBold,
    PiShovelBold,
    PiShowerBold,
    PiShrimpBold,
    PiShuffleAngularBold,
    PiShuffleBold,
    PiShuffleSimpleBold,
    PiSidebarBold,
    PiSidebarSimpleBold,
    PiSigmaBold,
    PiSignInBold,
    PiSignOutBold,
    PiSignatureBold,
    PiSignpostBold,
    PiSimCardBold,
    PiSirenBold,
    PiSketchLogoBold,
    PiSkipBackBold,
    PiSkipBackCircleBold,
    PiSkipForwardBold,
    PiSkipForwardCircleBold,
    PiSkullBold,
    PiSkypeLogoBold,
    PiSlackLogoBold,
    PiSlidersBold,
    PiSlidersHorizontalBold,
    PiSlideshowBold,
    PiSmileyAngryBold,
    PiSmileyBlankBold,
    PiSmileyBold,
    PiSmileyMehBold,
    PiSmileyMeltingBold,
    PiSmileyNervousBold,
    PiSmileySadBold,
    PiSmileyStickerBold,
    PiSmileyWinkBold,
    PiSmileyXEyesBold,
    PiSnapchatLogoBold,
    PiSneakerBold,
    PiSneakerMoveBold,
    PiSnowflakeBold,
    PiSoccerBallBold,
    PiSockBold,
    PiSolarPanelBold,
    PiSolarRoofBold,
    PiSortAscendingBold,
    PiSortDescendingBold,
    PiSoundcloudLogoBold,
    PiSpadeBold,
    PiSparkleBold,
    PiSpeakerHifiBold,
    PiSpeakerHighBold,
    PiSpeakerLowBold,
    PiSpeakerNoneBold,
    PiSpeakerSimpleHighBold,
    PiSpeakerSimpleLowBold,
    PiSpeakerSimpleNoneBold,
    PiSpeakerSimpleSlashBold,
    PiSpeakerSimpleXBold,
    PiSpeakerSlashBold,
    PiSpeakerXBold,
    PiSpeedometerBold,
    PiSphereBold,
    PiSpinnerBallBold,
    PiSpinnerBold,
    PiSpinnerGapBold,
    PiSpiralBold,
    PiSplitHorizontalBold,
    PiSplitVerticalBold,
    PiSpotifyLogoBold,
    PiSprayBottleBold,
    PiSquareBold,
    PiSquareHalfBold,
    PiSquareHalfBottomBold,
    PiSquareLogoBold,
    PiSquareSplitHorizontalBold,
    PiSquareSplitVerticalBold,
    PiSquaresFourBold,
    PiStackBold,
    PiStackMinusBold,
    PiStackOverflowLogoBold,
    PiStackPlusBold,
    PiStackSimpleBold,
    PiStairsBold,
    PiStampBold,
    PiStandardDefinitionBold,
    PiStarAndCrescentBold,
    PiStarBold,
    PiStarFourBold,
    PiStarHalfBold,
    PiStarOfDavidBold,
    PiSteamLogoBold,
    PiSteeringWheelBold,
    PiStepsBold,
    PiStethoscopeBold,
    PiStickerBold,
    PiStoolBold,
    PiStopBold,
    PiStopCircleBold,
    PiStorefrontBold,
    PiStrategyBold,
    PiStripeLogoBold,
    PiStudentBold,
    PiSubsetOfBold,
    PiSubsetProperOfBold,
    PiSubtitlesBold,
    PiSubtitlesSlashBold,
    PiSubtractBold,
    PiSubtractSquareBold,
    PiSubwayBold,
    PiSuitcaseBold,
    PiSuitcaseRollingBold,
    PiSuitcaseSimpleBold,
    PiSunBold,
    PiSunDimBold,
    PiSunHorizonBold,
    PiSunglassesBold,
    PiSupersetOfBold,
    PiSupersetProperOfBold,
    PiSwapBold,
    PiSwatchesBold,
    PiSwimmingPoolBold,
    PiSwordBold,
    PiSynagogueBold,
    PiSyringeBold,
    PiTShirtBold,
    PiTableBold,
    PiTabsBold,
    PiTagBold,
    PiTagChevronBold,
    PiTagSimpleBold,
    PiTargetBold,
    PiTaxiBold,
    PiTeaBagBold,
    PiTelegramLogoBold,
    PiTelevisionBold,
    PiTelevisionSimpleBold,
    PiTennisBallBold,
    PiTentBold,
    PiTerminalBold,
    PiTerminalWindowBold,
    PiTestTubeBold,
    PiTextAUnderlineBold,
    PiTextAaBold,
    PiTextAlignCenterBold,
    PiTextAlignJustifyBold,
    PiTextAlignLeftBold,
    PiTextAlignRightBold,
    PiTextBBold,
    PiTextColumnsBold,
    PiTextHBold,
    PiTextHFiveBold,
    PiTextHFourBold,
    PiTextHOneBold,
    PiTextHSixBold,
    PiTextHThreeBold,
    PiTextHTwoBold,
    PiTextIndentBold,
    PiTextItalicBold,
    PiTextOutdentBold,
    PiTextStrikethroughBold,
    PiTextSubscriptBold,
    PiTextSuperscriptBold,
    PiTextTBold,
    PiTextTSlashBold,
    PiTextUnderlineBold,
    PiTextboxBold,
    PiThermometerBold,
    PiThermometerColdBold,
    PiThermometerHotBold,
    PiThermometerSimpleBold,
    PiThreadsLogoBold,
    PiThreeDBold,
    PiThumbsDownBold,
    PiThumbsUpBold,
    PiTicketBold,
    PiTidalLogoBold,
    PiTiktokLogoBold,
    PiTildeBold,
    PiTimerBold,
    PiTipJarBold,
    PiTipiBold,
    PiTireBold,
    PiToggleLeftBold,
    PiToggleRightBold,
    PiToiletBold,
    PiToiletPaperBold,
    PiToolboxBold,
    PiToothBold,
    PiTornadoBold,
    PiToteBold,
    PiToteSimpleBold,
    PiTowelBold,
    PiTractorBold,
    PiTrademarkBold,
    PiTrademarkRegisteredBold,
    PiTrafficConeBold,
    PiTrafficSignBold,
    PiTrafficSignalBold,
    PiTrainBold,
    PiTrainRegionalBold,
    PiTrainSimpleBold,
    PiTramBold,
    PiTranslateBold,
    PiTrashBold,
    PiTrashSimpleBold,
    PiTrayArrowDownBold,
    PiTrayArrowUpBold,
    PiTrayBold,
    PiTreasureChestBold,
    PiTreeBold,
    PiTreeEvergreenBold,
    PiTreePalmBold,
    PiTreeStructureBold,
    PiTreeViewBold,
    PiTrendDownBold,
    PiTrendUpBold,
    PiTriangleBold,
    PiTriangleDashedBold,
    PiTrolleyBold,
    PiTrolleySuitcaseBold,
    PiTrophyBold,
    PiTruckBold,
    PiTruckTrailerBold,
    PiTumblrLogoBold,
    PiTwitchLogoBold,
    PiTwitterLogoBold,
    PiUmbrellaBold,
    PiUmbrellaSimpleBold,
    PiUnionBold,
    PiUniteBold,
    PiUniteSquareBold,
    PiUploadBold,
    PiUploadSimpleBold,
    PiUsbBold,
    PiUserBold,
    PiUserCheckBold,
    PiUserCircleBold,
    PiUserCircleCheckBold,
    PiUserCircleDashedBold,
    PiUserCircleGearBold,
    PiUserCircleMinusBold,
    PiUserCirclePlusBold,
    PiUserFocusBold,
    PiUserGearBold,
    PiUserListBold,
    PiUserMinusBold,
    PiUserPlusBold,
    PiUserRectangleBold,
    PiUserSoundBold,
    PiUserSquareBold,
    PiUserSwitchBold,
    PiUsersBold,
    PiUsersFourBold,
    PiUsersThreeBold,
    PiVanBold,
    PiVaultBold,
    PiVectorThreeBold,
    PiVectorTwoBold,
    PiVibrateBold,
    PiVideoBold,
    PiVideoCameraBold,
    PiVideoCameraSlashBold,
    PiVideoConferenceBold,
    PiVignetteBold,
    PiVinylRecordBold,
    PiVirtualRealityBold,
    PiVirusBold,
    PiVisorBold,
    PiVoicemailBold,
    PiVolleyballBold,
    PiWallBold,
    PiWalletBold,
    PiWarehouseBold,
    PiWarningBold,
    PiWarningCircleBold,
    PiWarningDiamondBold,
    PiWarningOctagonBold,
    PiWashingMachineBold,
    PiWatchBold,
    PiWaveSawtoothBold,
    PiWaveSineBold,
    PiWaveSquareBold,
    PiWaveTriangleBold,
    PiWaveformBold,
    PiWaveformSlashBold,
    PiWavesBold,
    PiWebcamBold,
    PiWebcamSlashBold,
    PiWebhooksLogoBold,
    PiWechatLogoBold,
    PiWhatsappLogoBold,
    PiWheelchairBold,
    PiWheelchairMotionBold,
    PiWifiHighBold,
    PiWifiLowBold,
    PiWifiMediumBold,
    PiWifiNoneBold,
    PiWifiSlashBold,
    PiWifiXBold,
    PiWindBold,
    PiWindmillBold,
    PiWindowsLogoBold,
    PiWineBold,
    PiWrenchBold,
    PiXBold,
    PiXCircleBold,
    PiXLogoBold,
    PiXSquareBold,
    PiYarnBold,
    PiYinYangBold,
    PiYoutubeLogoBold,
    PiAcornDuotone,
    PiAddressBookDuotone,
    PiAddressBookTabsDuotone,
    PiAirTrafficControlDuotone,
    PiAirplaneDuotone,
    PiAirplaneInFlightDuotone,
    PiAirplaneLandingDuotone,
    PiAirplaneTakeoffDuotone,
    PiAirplaneTaxiingDuotone,
    PiAirplaneTiltDuotone,
    PiAirplayDuotone,
    PiAlarmDuotone,
    PiAlienDuotone,
    PiAlignBottomDuotone,
    PiAlignBottomSimpleDuotone,
    PiAlignCenterHorizontalDuotone,
    PiAlignCenterHorizontalSimpleDuotone,
    PiAlignCenterVerticalDuotone,
    PiAlignCenterVerticalSimpleDuotone,
    PiAlignLeftDuotone,
    PiAlignLeftSimpleDuotone,
    PiAlignRightDuotone,
    PiAlignRightSimpleDuotone,
    PiAlignTopDuotone,
    PiAlignTopSimpleDuotone,
    PiAmazonLogoDuotone,
    PiAmbulanceDuotone,
    PiAnchorDuotone,
    PiAnchorSimpleDuotone,
    PiAndroidLogoDuotone,
    PiAngleDuotone,
    PiAngularLogoDuotone,
    PiApertureDuotone,
    PiAppStoreLogoDuotone,
    PiAppWindowDuotone,
    PiAppleLogoDuotone,
    PiApplePodcastsLogoDuotone,
    PiApproximateEqualsDuotone,
    PiArchiveDuotone,
    PiArmchairDuotone,
    PiArrowArcLeftDuotone,
    PiArrowArcRightDuotone,
    PiArrowBendDoubleUpLeftDuotone,
    PiArrowBendDoubleUpRightDuotone,
    PiArrowBendDownLeftDuotone,
    PiArrowBendDownRightDuotone,
    PiArrowBendLeftDownDuotone,
    PiArrowBendLeftUpDuotone,
    PiArrowBendRightDownDuotone,
    PiArrowBendRightUpDuotone,
    PiArrowBendUpLeftDuotone,
    PiArrowBendUpRightDuotone,
    PiArrowCircleDownDuotone,
    PiArrowCircleDownLeftDuotone,
    PiArrowCircleDownRightDuotone,
    PiArrowCircleLeftDuotone,
    PiArrowCircleRightDuotone,
    PiArrowCircleUpDuotone,
    PiArrowCircleUpLeftDuotone,
    PiArrowCircleUpRightDuotone,
    PiArrowClockwiseDuotone,
    PiArrowCounterClockwiseDuotone,
    PiArrowDownDuotone,
    PiArrowDownLeftDuotone,
    PiArrowDownRightDuotone,
    PiArrowElbowDownLeftDuotone,
    PiArrowElbowDownRightDuotone,
    PiArrowElbowLeftDownDuotone,
    PiArrowElbowLeftDuotone,
    PiArrowElbowLeftUpDuotone,
    PiArrowElbowRightDownDuotone,
    PiArrowElbowRightDuotone,
    PiArrowElbowRightUpDuotone,
    PiArrowElbowUpLeftDuotone,
    PiArrowElbowUpRightDuotone,
    PiArrowFatDownDuotone,
    PiArrowFatLeftDuotone,
    PiArrowFatLineDownDuotone,
    PiArrowFatLineLeftDuotone,
    PiArrowFatLineRightDuotone,
    PiArrowFatLineUpDuotone,
    PiArrowFatLinesDownDuotone,
    PiArrowFatLinesLeftDuotone,
    PiArrowFatLinesRightDuotone,
    PiArrowFatLinesUpDuotone,
    PiArrowFatRightDuotone,
    PiArrowFatUpDuotone,
    PiArrowLeftDuotone,
    PiArrowLineDownDuotone,
    PiArrowLineDownLeftDuotone,
    PiArrowLineDownRightDuotone,
    PiArrowLineLeftDuotone,
    PiArrowLineRightDuotone,
    PiArrowLineUpDuotone,
    PiArrowLineUpLeftDuotone,
    PiArrowLineUpRightDuotone,
    PiArrowRightDuotone,
    PiArrowSquareDownDuotone,
    PiArrowSquareDownLeftDuotone,
    PiArrowSquareDownRightDuotone,
    PiArrowSquareInDuotone,
    PiArrowSquareLeftDuotone,
    PiArrowSquareOutDuotone,
    PiArrowSquareRightDuotone,
    PiArrowSquareUpDuotone,
    PiArrowSquareUpLeftDuotone,
    PiArrowSquareUpRightDuotone,
    PiArrowUDownLeftDuotone,
    PiArrowUDownRightDuotone,
    PiArrowULeftDownDuotone,
    PiArrowULeftUpDuotone,
    PiArrowURightDownDuotone,
    PiArrowURightUpDuotone,
    PiArrowUUpLeftDuotone,
    PiArrowUUpRightDuotone,
    PiArrowUpDuotone,
    PiArrowUpLeftDuotone,
    PiArrowUpRightDuotone,
    PiArrowsClockwiseDuotone,
    PiArrowsCounterClockwiseDuotone,
    PiArrowsDownUpDuotone,
    PiArrowsHorizontalDuotone,
    PiArrowsInCardinalDuotone,
    PiArrowsInDuotone,
    PiArrowsInLineHorizontalDuotone,
    PiArrowsInLineVerticalDuotone,
    PiArrowsInSimpleDuotone,
    PiArrowsLeftRightDuotone,
    PiArrowsMergeDuotone,
    PiArrowsOutCardinalDuotone,
    PiArrowsOutDuotone,
    PiArrowsOutLineHorizontalDuotone,
    PiArrowsOutLineVerticalDuotone,
    PiArrowsOutSimpleDuotone,
    PiArrowsSplitDuotone,
    PiArrowsVerticalDuotone,
    PiArticleDuotone,
    PiArticleMediumDuotone,
    PiArticleNyTimesDuotone,
    PiAsclepiusDuotone,
    PiAsteriskDuotone,
    PiAsteriskSimpleDuotone,
    PiAtDuotone,
    PiAtomDuotone,
    PiAvocadoDuotone,
    PiAxeDuotone,
    PiBabyCarriageDuotone,
    PiBabyDuotone,
    PiBackpackDuotone,
    PiBackspaceDuotone,
    PiBagDuotone,
    PiBagSimpleDuotone,
    PiBalloonDuotone,
    PiBandaidsDuotone,
    PiBankDuotone,
    PiBarbellDuotone,
    PiBarcodeDuotone,
    PiBarnDuotone,
    PiBarricadeDuotone,
    PiBaseballCapDuotone,
    PiBaseballDuotone,
    PiBaseballHelmetDuotone,
    PiBasketDuotone,
    PiBasketballDuotone,
    PiBathtubDuotone,
    PiBatteryChargingDuotone,
    PiBatteryChargingVerticalDuotone,
    PiBatteryEmptyDuotone,
    PiBatteryFullDuotone,
    PiBatteryHighDuotone,
    PiBatteryLowDuotone,
    PiBatteryMediumDuotone,
    PiBatteryPlusDuotone,
    PiBatteryPlusVerticalDuotone,
    PiBatteryVerticalEmptyDuotone,
    PiBatteryVerticalFullDuotone,
    PiBatteryVerticalHighDuotone,
    PiBatteryVerticalLowDuotone,
    PiBatteryVerticalMediumDuotone,
    PiBatteryWarningDuotone,
    PiBatteryWarningVerticalDuotone,
    PiBeachBallDuotone,
    PiBeanieDuotone,
    PiBedDuotone,
    PiBeerBottleDuotone,
    PiBeerSteinDuotone,
    PiBehanceLogoDuotone,
    PiBellDuotone,
    PiBellRingingDuotone,
    PiBellSimpleDuotone,
    PiBellSimpleRingingDuotone,
    PiBellSimpleSlashDuotone,
    PiBellSimpleZDuotone,
    PiBellSlashDuotone,
    PiBellZDuotone,
    PiBeltDuotone,
    PiBezierCurveDuotone,
    PiBicycleDuotone,
    PiBinaryDuotone,
    PiBinocularsDuotone,
    PiBiohazardDuotone,
    PiBirdDuotone,
    PiBlueprintDuotone,
    PiBluetoothConnectedDuotone,
    PiBluetoothDuotone,
    PiBluetoothSlashDuotone,
    PiBluetoothXDuotone,
    PiBoatDuotone,
    PiBombDuotone,
    PiBoneDuotone,
    PiBookBookmarkDuotone,
    PiBookDuotone,
    PiBookOpenDuotone,
    PiBookOpenTextDuotone,
    PiBookOpenUserDuotone,
    PiBookmarkDuotone,
    PiBookmarkSimpleDuotone,
    PiBookmarksDuotone,
    PiBookmarksSimpleDuotone,
    PiBooksDuotone,
    PiBootDuotone,
    PiBoulesDuotone,
    PiBoundingBoxDuotone,
    PiBowlFoodDuotone,
    PiBowlSteamDuotone,
    PiBowlingBallDuotone,
    PiBoxArrowDownDuotone,
    PiBoxArrowUpDuotone,
    PiBoxingGloveDuotone,
    PiBracketsAngleDuotone,
    PiBracketsCurlyDuotone,
    PiBracketsRoundDuotone,
    PiBracketsSquareDuotone,
    PiBrainDuotone,
    PiBrandyDuotone,
    PiBreadDuotone,
    PiBridgeDuotone,
    PiBriefcaseDuotone,
    PiBriefcaseMetalDuotone,
    PiBroadcastDuotone,
    PiBroomDuotone,
    PiBrowserDuotone,
    PiBrowsersDuotone,
    PiBugBeetleDuotone,
    PiBugDroidDuotone,
    PiBugDuotone,
    PiBuildingApartmentDuotone,
    PiBuildingDuotone,
    PiBuildingOfficeDuotone,
    PiBuildingsDuotone,
    PiBulldozerDuotone,
    PiBusDuotone,
    PiButterflyDuotone,
    PiCableCarDuotone,
    PiCactusDuotone,
    PiCakeDuotone,
    PiCalculatorDuotone,
    PiCalendarBlankDuotone,
    PiCalendarCheckDuotone,
    PiCalendarDotDuotone,
    PiCalendarDotsDuotone,
    PiCalendarDuotone,
    PiCalendarHeartDuotone,
    PiCalendarMinusDuotone,
    PiCalendarPlusDuotone,
    PiCalendarSlashDuotone,
    PiCalendarStarDuotone,
    PiCalendarXDuotone,
    PiCallBellDuotone,
    PiCameraDuotone,
    PiCameraPlusDuotone,
    PiCameraRotateDuotone,
    PiCameraSlashDuotone,
    PiCampfireDuotone,
    PiCarBatteryDuotone,
    PiCarDuotone,
    PiCarProfileDuotone,
    PiCarSimpleDuotone,
    PiCardholderDuotone,
    PiCardsDuotone,
    PiCardsThreeDuotone,
    PiCaretCircleDoubleDownDuotone,
    PiCaretCircleDoubleLeftDuotone,
    PiCaretCircleDoubleRightDuotone,
    PiCaretCircleDoubleUpDuotone,
    PiCaretCircleDownDuotone,
    PiCaretCircleLeftDuotone,
    PiCaretCircleRightDuotone,
    PiCaretCircleUpDownDuotone,
    PiCaretCircleUpDuotone,
    PiCaretDoubleDownDuotone,
    PiCaretDoubleLeftDuotone,
    PiCaretDoubleRightDuotone,
    PiCaretDoubleUpDuotone,
    PiCaretDownDuotone,
    PiCaretLeftDuotone,
    PiCaretLineDownDuotone,
    PiCaretLineLeftDuotone,
    PiCaretLineRightDuotone,
    PiCaretLineUpDuotone,
    PiCaretRightDuotone,
    PiCaretUpDownDuotone,
    PiCaretUpDuotone,
    PiCarrotDuotone,
    PiCashRegisterDuotone,
    PiCassetteTapeDuotone,
    PiCastleTurretDuotone,
    PiCatDuotone,
    PiCellSignalFullDuotone,
    PiCellSignalHighDuotone,
    PiCellSignalLowDuotone,
    PiCellSignalMediumDuotone,
    PiCellSignalNoneDuotone,
    PiCellSignalSlashDuotone,
    PiCellSignalXDuotone,
    PiCellTowerDuotone,
    PiCertificateDuotone,
    PiChairDuotone,
    PiChalkboardDuotone,
    PiChalkboardSimpleDuotone,
    PiChalkboardTeacherDuotone,
    PiChampagneDuotone,
    PiChargingStationDuotone,
    PiChartBarDuotone,
    PiChartBarHorizontalDuotone,
    PiChartDonutDuotone,
    PiChartLineDownDuotone,
    PiChartLineDuotone,
    PiChartLineUpDuotone,
    PiChartPieDuotone,
    PiChartPieSliceDuotone,
    PiChartPolarDuotone,
    PiChartScatterDuotone,
    PiChatCenteredDotsDuotone,
    PiChatCenteredDuotone,
    PiChatCenteredSlashDuotone,
    PiChatCenteredTextDuotone,
    PiChatCircleDotsDuotone,
    PiChatCircleDuotone,
    PiChatCircleSlashDuotone,
    PiChatCircleTextDuotone,
    PiChatDotsDuotone,
    PiChatDuotone,
    PiChatSlashDuotone,
    PiChatTeardropDotsDuotone,
    PiChatTeardropDuotone,
    PiChatTeardropSlashDuotone,
    PiChatTeardropTextDuotone,
    PiChatTextDuotone,
    PiChatsCircleDuotone,
    PiChatsDuotone,
    PiChatsTeardropDuotone,
    PiCheckCircleDuotone,
    PiCheckDuotone,
    PiCheckFatDuotone,
    PiCheckSquareDuotone,
    PiCheckSquareOffsetDuotone,
    PiCheckerboardDuotone,
    PiChecksDuotone,
    PiCheersDuotone,
    PiCheeseDuotone,
    PiChefHatDuotone,
    PiCherriesDuotone,
    PiChurchDuotone,
    PiCigaretteDuotone,
    PiCigaretteSlashDuotone,
    PiCircleDashedDuotone,
    PiCircleDuotone,
    PiCircleHalfDuotone,
    PiCircleHalfTiltDuotone,
    PiCircleNotchDuotone,
    PiCirclesFourDuotone,
    PiCirclesThreeDuotone,
    PiCirclesThreePlusDuotone,
    PiCircuitryDuotone,
    PiCityDuotone,
    PiClipboardDuotone,
    PiClipboardTextDuotone,
    PiClockAfternoonDuotone,
    PiClockClockwiseDuotone,
    PiClockCountdownDuotone,
    PiClockCounterClockwiseDuotone,
    PiClockDuotone,
    PiClockUserDuotone,
    PiClosedCaptioningDuotone,
    PiCloudArrowDownDuotone,
    PiCloudArrowUpDuotone,
    PiCloudCheckDuotone,
    PiCloudDuotone,
    PiCloudFogDuotone,
    PiCloudLightningDuotone,
    PiCloudMoonDuotone,
    PiCloudRainDuotone,
    PiCloudSlashDuotone,
    PiCloudSnowDuotone,
    PiCloudSunDuotone,
    PiCloudWarningDuotone,
    PiCloudXDuotone,
    PiCloverDuotone,
    PiClubDuotone,
    PiCoatHangerDuotone,
    PiCodaLogoDuotone,
    PiCodeBlockDuotone,
    PiCodeDuotone,
    PiCodeSimpleDuotone,
    PiCodepenLogoDuotone,
    PiCodesandboxLogoDuotone,
    PiCoffeeBeanDuotone,
    PiCoffeeDuotone,
    PiCoinDuotone,
    PiCoinVerticalDuotone,
    PiCoinsDuotone,
    PiColumnsDuotone,
    PiColumnsPlusLeftDuotone,
    PiColumnsPlusRightDuotone,
    PiCommandDuotone,
    PiCompassDuotone,
    PiCompassRoseDuotone,
    PiCompassToolDuotone,
    PiComputerTowerDuotone,
    PiConfettiDuotone,
    PiContactlessPaymentDuotone,
    PiControlDuotone,
    PiCookieDuotone,
    PiCookingPotDuotone,
    PiCopyDuotone,
    PiCopySimpleDuotone,
    PiCopyleftDuotone,
    PiCopyrightDuotone,
    PiCornersInDuotone,
    PiCornersOutDuotone,
    PiCouchDuotone,
    PiCourtBasketballDuotone,
    PiCowDuotone,
    PiCowboyHatDuotone,
    PiCpuDuotone,
    PiCraneDuotone,
    PiCraneTowerDuotone,
    PiCreditCardDuotone,
    PiCricketDuotone,
    PiCropDuotone,
    PiCrossDuotone,
    PiCrosshairDuotone,
    PiCrosshairSimpleDuotone,
    PiCrownCrossDuotone,
    PiCrownDuotone,
    PiCrownSimpleDuotone,
    PiCubeDuotone,
    PiCubeFocusDuotone,
    PiCubeTransparentDuotone,
    PiCurrencyBtcDuotone,
    PiCurrencyCircleDollarDuotone,
    PiCurrencyCnyDuotone,
    PiCurrencyDollarDuotone,
    PiCurrencyDollarSimpleDuotone,
    PiCurrencyEthDuotone,
    PiCurrencyEurDuotone,
    PiCurrencyGbpDuotone,
    PiCurrencyInrDuotone,
    PiCurrencyJpyDuotone,
    PiCurrencyKrwDuotone,
    PiCurrencyKztDuotone,
    PiCurrencyNgnDuotone,
    PiCurrencyRubDuotone,
    PiCursorClickDuotone,
    PiCursorDuotone,
    PiCursorTextDuotone,
    PiCylinderDuotone,
    PiDatabaseDuotone,
    PiDeskDuotone,
    PiDesktopDuotone,
    PiDesktopTowerDuotone,
    PiDetectiveDuotone,
    PiDevToLogoDuotone,
    PiDeviceMobileCameraDuotone,
    PiDeviceMobileDuotone,
    PiDeviceMobileSlashDuotone,
    PiDeviceMobileSpeakerDuotone,
    PiDeviceRotateDuotone,
    PiDeviceTabletCameraDuotone,
    PiDeviceTabletDuotone,
    PiDeviceTabletSpeakerDuotone,
    PiDevicesDuotone,
    PiDiamondDuotone,
    PiDiamondsFourDuotone,
    PiDiceFiveDuotone,
    PiDiceFourDuotone,
    PiDiceOneDuotone,
} from "react-icons/pi"

export function nameToReactIcon_pi_1(iconName: string): IconType | undefined {

    switch(iconName) {
        case "pi:PiPackageBold":
            return PiPackageBold;
        case "pi:PiPaintBrushBold":
            return PiPaintBrushBold;
        case "pi:PiPaintBrushBroadBold":
            return PiPaintBrushBroadBold;
        case "pi:PiPaintBrushHouseholdBold":
            return PiPaintBrushHouseholdBold;
        case "pi:PiPaintBucketBold":
            return PiPaintBucketBold;
        case "pi:PiPaintRollerBold":
            return PiPaintRollerBold;
        case "pi:PiPaletteBold":
            return PiPaletteBold;
        case "pi:PiPanoramaBold":
            return PiPanoramaBold;
        case "pi:PiPantsBold":
            return PiPantsBold;
        case "pi:PiPaperPlaneBold":
            return PiPaperPlaneBold;
        case "pi:PiPaperPlaneRightBold":
            return PiPaperPlaneRightBold;
        case "pi:PiPaperPlaneTiltBold":
            return PiPaperPlaneTiltBold;
        case "pi:PiPaperclipBold":
            return PiPaperclipBold;
        case "pi:PiPaperclipHorizontalBold":
            return PiPaperclipHorizontalBold;
        case "pi:PiParachuteBold":
            return PiParachuteBold;
        case "pi:PiParagraphBold":
            return PiParagraphBold;
        case "pi:PiParallelogramBold":
            return PiParallelogramBold;
        case "pi:PiParkBold":
            return PiParkBold;
        case "pi:PiPasswordBold":
            return PiPasswordBold;
        case "pi:PiPathBold":
            return PiPathBold;
        case "pi:PiPatreonLogoBold":
            return PiPatreonLogoBold;
        case "pi:PiPauseBold":
            return PiPauseBold;
        case "pi:PiPauseCircleBold":
            return PiPauseCircleBold;
        case "pi:PiPawPrintBold":
            return PiPawPrintBold;
        case "pi:PiPaypalLogoBold":
            return PiPaypalLogoBold;
        case "pi:PiPeaceBold":
            return PiPeaceBold;
        case "pi:PiPenBold":
            return PiPenBold;
        case "pi:PiPenNibBold":
            return PiPenNibBold;
        case "pi:PiPenNibStraightBold":
            return PiPenNibStraightBold;
        case "pi:PiPencilBold":
            return PiPencilBold;
        case "pi:PiPencilCircleBold":
            return PiPencilCircleBold;
        case "pi:PiPencilLineBold":
            return PiPencilLineBold;
        case "pi:PiPencilRulerBold":
            return PiPencilRulerBold;
        case "pi:PiPencilSimpleBold":
            return PiPencilSimpleBold;
        case "pi:PiPencilSimpleLineBold":
            return PiPencilSimpleLineBold;
        case "pi:PiPencilSimpleSlashBold":
            return PiPencilSimpleSlashBold;
        case "pi:PiPencilSlashBold":
            return PiPencilSlashBold;
        case "pi:PiPentagonBold":
            return PiPentagonBold;
        case "pi:PiPentagramBold":
            return PiPentagramBold;
        case "pi:PiPepperBold":
            return PiPepperBold;
        case "pi:PiPercentBold":
            return PiPercentBold;
        case "pi:PiPersonArmsSpreadBold":
            return PiPersonArmsSpreadBold;
        case "pi:PiPersonBold":
            return PiPersonBold;
        case "pi:PiPersonSimpleBikeBold":
            return PiPersonSimpleBikeBold;
        case "pi:PiPersonSimpleBold":
            return PiPersonSimpleBold;
        case "pi:PiPersonSimpleCircleBold":
            return PiPersonSimpleCircleBold;
        case "pi:PiPersonSimpleHikeBold":
            return PiPersonSimpleHikeBold;
        case "pi:PiPersonSimpleRunBold":
            return PiPersonSimpleRunBold;
        case "pi:PiPersonSimpleSkiBold":
            return PiPersonSimpleSkiBold;
        case "pi:PiPersonSimpleSnowboardBold":
            return PiPersonSimpleSnowboardBold;
        case "pi:PiPersonSimpleSwimBold":
            return PiPersonSimpleSwimBold;
        case "pi:PiPersonSimpleTaiChiBold":
            return PiPersonSimpleTaiChiBold;
        case "pi:PiPersonSimpleThrowBold":
            return PiPersonSimpleThrowBold;
        case "pi:PiPersonSimpleWalkBold":
            return PiPersonSimpleWalkBold;
        case "pi:PiPerspectiveBold":
            return PiPerspectiveBold;
        case "pi:PiPhoneBold":
            return PiPhoneBold;
        case "pi:PiPhoneCallBold":
            return PiPhoneCallBold;
        case "pi:PiPhoneDisconnectBold":
            return PiPhoneDisconnectBold;
        case "pi:PiPhoneIncomingBold":
            return PiPhoneIncomingBold;
        case "pi:PiPhoneListBold":
            return PiPhoneListBold;
        case "pi:PiPhoneOutgoingBold":
            return PiPhoneOutgoingBold;
        case "pi:PiPhonePauseBold":
            return PiPhonePauseBold;
        case "pi:PiPhonePlusBold":
            return PiPhonePlusBold;
        case "pi:PiPhoneSlashBold":
            return PiPhoneSlashBold;
        case "pi:PiPhoneTransferBold":
            return PiPhoneTransferBold;
        case "pi:PiPhoneXBold":
            return PiPhoneXBold;
        case "pi:PiPhosphorLogoBold":
            return PiPhosphorLogoBold;
        case "pi:PiPiBold":
            return PiPiBold;
        case "pi:PiPianoKeysBold":
            return PiPianoKeysBold;
        case "pi:PiPicnicTableBold":
            return PiPicnicTableBold;
        case "pi:PiPictureInPictureBold":
            return PiPictureInPictureBold;
        case "pi:PiPiggyBankBold":
            return PiPiggyBankBold;
        case "pi:PiPillBold":
            return PiPillBold;
        case "pi:PiPingPongBold":
            return PiPingPongBold;
        case "pi:PiPintGlassBold":
            return PiPintGlassBold;
        case "pi:PiPinterestLogoBold":
            return PiPinterestLogoBold;
        case "pi:PiPinwheelBold":
            return PiPinwheelBold;
        case "pi:PiPipeBold":
            return PiPipeBold;
        case "pi:PiPipeWrenchBold":
            return PiPipeWrenchBold;
        case "pi:PiPixLogoBold":
            return PiPixLogoBold;
        case "pi:PiPizzaBold":
            return PiPizzaBold;
        case "pi:PiPlaceholderBold":
            return PiPlaceholderBold;
        case "pi:PiPlanetBold":
            return PiPlanetBold;
        case "pi:PiPlantBold":
            return PiPlantBold;
        case "pi:PiPlayBold":
            return PiPlayBold;
        case "pi:PiPlayCircleBold":
            return PiPlayCircleBold;
        case "pi:PiPlayPauseBold":
            return PiPlayPauseBold;
        case "pi:PiPlaylistBold":
            return PiPlaylistBold;
        case "pi:PiPlugBold":
            return PiPlugBold;
        case "pi:PiPlugChargingBold":
            return PiPlugChargingBold;
        case "pi:PiPlugsBold":
            return PiPlugsBold;
        case "pi:PiPlugsConnectedBold":
            return PiPlugsConnectedBold;
        case "pi:PiPlusBold":
            return PiPlusBold;
        case "pi:PiPlusCircleBold":
            return PiPlusCircleBold;
        case "pi:PiPlusMinusBold":
            return PiPlusMinusBold;
        case "pi:PiPlusSquareBold":
            return PiPlusSquareBold;
        case "pi:PiPokerChipBold":
            return PiPokerChipBold;
        case "pi:PiPoliceCarBold":
            return PiPoliceCarBold;
        case "pi:PiPolygonBold":
            return PiPolygonBold;
        case "pi:PiPopcornBold":
            return PiPopcornBold;
        case "pi:PiPopsicleBold":
            return PiPopsicleBold;
        case "pi:PiPottedPlantBold":
            return PiPottedPlantBold;
        case "pi:PiPowerBold":
            return PiPowerBold;
        case "pi:PiPrescriptionBold":
            return PiPrescriptionBold;
        case "pi:PiPresentationBold":
            return PiPresentationBold;
        case "pi:PiPresentationChartBold":
            return PiPresentationChartBold;
        case "pi:PiPrinterBold":
            return PiPrinterBold;
        case "pi:PiProhibitBold":
            return PiProhibitBold;
        case "pi:PiProhibitInsetBold":
            return PiProhibitInsetBold;
        case "pi:PiProjectorScreenBold":
            return PiProjectorScreenBold;
        case "pi:PiProjectorScreenChartBold":
            return PiProjectorScreenChartBold;
        case "pi:PiPulseBold":
            return PiPulseBold;
        case "pi:PiPushPinBold":
            return PiPushPinBold;
        case "pi:PiPushPinSimpleBold":
            return PiPushPinSimpleBold;
        case "pi:PiPushPinSimpleSlashBold":
            return PiPushPinSimpleSlashBold;
        case "pi:PiPushPinSlashBold":
            return PiPushPinSlashBold;
        case "pi:PiPuzzlePieceBold":
            return PiPuzzlePieceBold;
        case "pi:PiQrCodeBold":
            return PiQrCodeBold;
        case "pi:PiQuestionBold":
            return PiQuestionBold;
        case "pi:PiQuestionMarkBold":
            return PiQuestionMarkBold;
        case "pi:PiQueueBold":
            return PiQueueBold;
        case "pi:PiQuotesBold":
            return PiQuotesBold;
        case "pi:PiRabbitBold":
            return PiRabbitBold;
        case "pi:PiRacquetBold":
            return PiRacquetBold;
        case "pi:PiRadicalBold":
            return PiRadicalBold;
        case "pi:PiRadioBold":
            return PiRadioBold;
        case "pi:PiRadioButtonBold":
            return PiRadioButtonBold;
        case "pi:PiRadioactiveBold":
            return PiRadioactiveBold;
        case "pi:PiRainbowBold":
            return PiRainbowBold;
        case "pi:PiRainbowCloudBold":
            return PiRainbowCloudBold;
        case "pi:PiRankingBold":
            return PiRankingBold;
        case "pi:PiReadCvLogoBold":
            return PiReadCvLogoBold;
        case "pi:PiReceiptBold":
            return PiReceiptBold;
        case "pi:PiReceiptXBold":
            return PiReceiptXBold;
        case "pi:PiRecordBold":
            return PiRecordBold;
        case "pi:PiRectangleBold":
            return PiRectangleBold;
        case "pi:PiRectangleDashedBold":
            return PiRectangleDashedBold;
        case "pi:PiRecycleBold":
            return PiRecycleBold;
        case "pi:PiRedditLogoBold":
            return PiRedditLogoBold;
        case "pi:PiRepeatBold":
            return PiRepeatBold;
        case "pi:PiRepeatOnceBold":
            return PiRepeatOnceBold;
        case "pi:PiReplitLogoBold":
            return PiReplitLogoBold;
        case "pi:PiResizeBold":
            return PiResizeBold;
        case "pi:PiRewindBold":
            return PiRewindBold;
        case "pi:PiRewindCircleBold":
            return PiRewindCircleBold;
        case "pi:PiRoadHorizonBold":
            return PiRoadHorizonBold;
        case "pi:PiRobotBold":
            return PiRobotBold;
        case "pi:PiRocketBold":
            return PiRocketBold;
        case "pi:PiRocketLaunchBold":
            return PiRocketLaunchBold;
        case "pi:PiRowsBold":
            return PiRowsBold;
        case "pi:PiRowsPlusBottomBold":
            return PiRowsPlusBottomBold;
        case "pi:PiRowsPlusTopBold":
            return PiRowsPlusTopBold;
        case "pi:PiRssBold":
            return PiRssBold;
        case "pi:PiRssSimpleBold":
            return PiRssSimpleBold;
        case "pi:PiRugBold":
            return PiRugBold;
        case "pi:PiRulerBold":
            return PiRulerBold;
        case "pi:PiSailboatBold":
            return PiSailboatBold;
        case "pi:PiScalesBold":
            return PiScalesBold;
        case "pi:PiScanBold":
            return PiScanBold;
        case "pi:PiScanSmileyBold":
            return PiScanSmileyBold;
        case "pi:PiScissorsBold":
            return PiScissorsBold;
        case "pi:PiScooterBold":
            return PiScooterBold;
        case "pi:PiScreencastBold":
            return PiScreencastBold;
        case "pi:PiScrewdriverBold":
            return PiScrewdriverBold;
        case "pi:PiScribbleBold":
            return PiScribbleBold;
        case "pi:PiScribbleLoopBold":
            return PiScribbleLoopBold;
        case "pi:PiScrollBold":
            return PiScrollBold;
        case "pi:PiSealBold":
            return PiSealBold;
        case "pi:PiSealCheckBold":
            return PiSealCheckBold;
        case "pi:PiSealPercentBold":
            return PiSealPercentBold;
        case "pi:PiSealQuestionBold":
            return PiSealQuestionBold;
        case "pi:PiSealWarningBold":
            return PiSealWarningBold;
        case "pi:PiSeatBold":
            return PiSeatBold;
        case "pi:PiSeatbeltBold":
            return PiSeatbeltBold;
        case "pi:PiSecurityCameraBold":
            return PiSecurityCameraBold;
        case "pi:PiSelectionAllBold":
            return PiSelectionAllBold;
        case "pi:PiSelectionBackgroundBold":
            return PiSelectionBackgroundBold;
        case "pi:PiSelectionBold":
            return PiSelectionBold;
        case "pi:PiSelectionForegroundBold":
            return PiSelectionForegroundBold;
        case "pi:PiSelectionInverseBold":
            return PiSelectionInverseBold;
        case "pi:PiSelectionPlusBold":
            return PiSelectionPlusBold;
        case "pi:PiSelectionSlashBold":
            return PiSelectionSlashBold;
        case "pi:PiShapesBold":
            return PiShapesBold;
        case "pi:PiShareBold":
            return PiShareBold;
        case "pi:PiShareFatBold":
            return PiShareFatBold;
        case "pi:PiShareNetworkBold":
            return PiShareNetworkBold;
        case "pi:PiShieldBold":
            return PiShieldBold;
        case "pi:PiShieldCheckBold":
            return PiShieldCheckBold;
        case "pi:PiShieldCheckeredBold":
            return PiShieldCheckeredBold;
        case "pi:PiShieldChevronBold":
            return PiShieldChevronBold;
        case "pi:PiShieldPlusBold":
            return PiShieldPlusBold;
        case "pi:PiShieldSlashBold":
            return PiShieldSlashBold;
        case "pi:PiShieldStarBold":
            return PiShieldStarBold;
        case "pi:PiShieldWarningBold":
            return PiShieldWarningBold;
        case "pi:PiShippingContainerBold":
            return PiShippingContainerBold;
        case "pi:PiShirtFoldedBold":
            return PiShirtFoldedBold;
        case "pi:PiShootingStarBold":
            return PiShootingStarBold;
        case "pi:PiShoppingBagBold":
            return PiShoppingBagBold;
        case "pi:PiShoppingBagOpenBold":
            return PiShoppingBagOpenBold;
        case "pi:PiShoppingCartBold":
            return PiShoppingCartBold;
        case "pi:PiShoppingCartSimpleBold":
            return PiShoppingCartSimpleBold;
        case "pi:PiShovelBold":
            return PiShovelBold;
        case "pi:PiShowerBold":
            return PiShowerBold;
        case "pi:PiShrimpBold":
            return PiShrimpBold;
        case "pi:PiShuffleAngularBold":
            return PiShuffleAngularBold;
        case "pi:PiShuffleBold":
            return PiShuffleBold;
        case "pi:PiShuffleSimpleBold":
            return PiShuffleSimpleBold;
        case "pi:PiSidebarBold":
            return PiSidebarBold;
        case "pi:PiSidebarSimpleBold":
            return PiSidebarSimpleBold;
        case "pi:PiSigmaBold":
            return PiSigmaBold;
        case "pi:PiSignInBold":
            return PiSignInBold;
        case "pi:PiSignOutBold":
            return PiSignOutBold;
        case "pi:PiSignatureBold":
            return PiSignatureBold;
        case "pi:PiSignpostBold":
            return PiSignpostBold;
        case "pi:PiSimCardBold":
            return PiSimCardBold;
        case "pi:PiSirenBold":
            return PiSirenBold;
        case "pi:PiSketchLogoBold":
            return PiSketchLogoBold;
        case "pi:PiSkipBackBold":
            return PiSkipBackBold;
        case "pi:PiSkipBackCircleBold":
            return PiSkipBackCircleBold;
        case "pi:PiSkipForwardBold":
            return PiSkipForwardBold;
        case "pi:PiSkipForwardCircleBold":
            return PiSkipForwardCircleBold;
        case "pi:PiSkullBold":
            return PiSkullBold;
        case "pi:PiSkypeLogoBold":
            return PiSkypeLogoBold;
        case "pi:PiSlackLogoBold":
            return PiSlackLogoBold;
        case "pi:PiSlidersBold":
            return PiSlidersBold;
        case "pi:PiSlidersHorizontalBold":
            return PiSlidersHorizontalBold;
        case "pi:PiSlideshowBold":
            return PiSlideshowBold;
        case "pi:PiSmileyAngryBold":
            return PiSmileyAngryBold;
        case "pi:PiSmileyBlankBold":
            return PiSmileyBlankBold;
        case "pi:PiSmileyBold":
            return PiSmileyBold;
        case "pi:PiSmileyMehBold":
            return PiSmileyMehBold;
        case "pi:PiSmileyMeltingBold":
            return PiSmileyMeltingBold;
        case "pi:PiSmileyNervousBold":
            return PiSmileyNervousBold;
        case "pi:PiSmileySadBold":
            return PiSmileySadBold;
        case "pi:PiSmileyStickerBold":
            return PiSmileyStickerBold;
        case "pi:PiSmileyWinkBold":
            return PiSmileyWinkBold;
        case "pi:PiSmileyXEyesBold":
            return PiSmileyXEyesBold;
        case "pi:PiSnapchatLogoBold":
            return PiSnapchatLogoBold;
        case "pi:PiSneakerBold":
            return PiSneakerBold;
        case "pi:PiSneakerMoveBold":
            return PiSneakerMoveBold;
        case "pi:PiSnowflakeBold":
            return PiSnowflakeBold;
        case "pi:PiSoccerBallBold":
            return PiSoccerBallBold;
        case "pi:PiSockBold":
            return PiSockBold;
        case "pi:PiSolarPanelBold":
            return PiSolarPanelBold;
        case "pi:PiSolarRoofBold":
            return PiSolarRoofBold;
        case "pi:PiSortAscendingBold":
            return PiSortAscendingBold;
        case "pi:PiSortDescendingBold":
            return PiSortDescendingBold;
        case "pi:PiSoundcloudLogoBold":
            return PiSoundcloudLogoBold;
        case "pi:PiSpadeBold":
            return PiSpadeBold;
        case "pi:PiSparkleBold":
            return PiSparkleBold;
        case "pi:PiSpeakerHifiBold":
            return PiSpeakerHifiBold;
        case "pi:PiSpeakerHighBold":
            return PiSpeakerHighBold;
        case "pi:PiSpeakerLowBold":
            return PiSpeakerLowBold;
        case "pi:PiSpeakerNoneBold":
            return PiSpeakerNoneBold;
        case "pi:PiSpeakerSimpleHighBold":
            return PiSpeakerSimpleHighBold;
        case "pi:PiSpeakerSimpleLowBold":
            return PiSpeakerSimpleLowBold;
        case "pi:PiSpeakerSimpleNoneBold":
            return PiSpeakerSimpleNoneBold;
        case "pi:PiSpeakerSimpleSlashBold":
            return PiSpeakerSimpleSlashBold;
        case "pi:PiSpeakerSimpleXBold":
            return PiSpeakerSimpleXBold;
        case "pi:PiSpeakerSlashBold":
            return PiSpeakerSlashBold;
        case "pi:PiSpeakerXBold":
            return PiSpeakerXBold;
        case "pi:PiSpeedometerBold":
            return PiSpeedometerBold;
        case "pi:PiSphereBold":
            return PiSphereBold;
        case "pi:PiSpinnerBallBold":
            return PiSpinnerBallBold;
        case "pi:PiSpinnerBold":
            return PiSpinnerBold;
        case "pi:PiSpinnerGapBold":
            return PiSpinnerGapBold;
        case "pi:PiSpiralBold":
            return PiSpiralBold;
        case "pi:PiSplitHorizontalBold":
            return PiSplitHorizontalBold;
        case "pi:PiSplitVerticalBold":
            return PiSplitVerticalBold;
        case "pi:PiSpotifyLogoBold":
            return PiSpotifyLogoBold;
        case "pi:PiSprayBottleBold":
            return PiSprayBottleBold;
        case "pi:PiSquareBold":
            return PiSquareBold;
        case "pi:PiSquareHalfBold":
            return PiSquareHalfBold;
        case "pi:PiSquareHalfBottomBold":
            return PiSquareHalfBottomBold;
        case "pi:PiSquareLogoBold":
            return PiSquareLogoBold;
        case "pi:PiSquareSplitHorizontalBold":
            return PiSquareSplitHorizontalBold;
        case "pi:PiSquareSplitVerticalBold":
            return PiSquareSplitVerticalBold;
        case "pi:PiSquaresFourBold":
            return PiSquaresFourBold;
        case "pi:PiStackBold":
            return PiStackBold;
        case "pi:PiStackMinusBold":
            return PiStackMinusBold;
        case "pi:PiStackOverflowLogoBold":
            return PiStackOverflowLogoBold;
        case "pi:PiStackPlusBold":
            return PiStackPlusBold;
        case "pi:PiStackSimpleBold":
            return PiStackSimpleBold;
        case "pi:PiStairsBold":
            return PiStairsBold;
        case "pi:PiStampBold":
            return PiStampBold;
        case "pi:PiStandardDefinitionBold":
            return PiStandardDefinitionBold;
        case "pi:PiStarAndCrescentBold":
            return PiStarAndCrescentBold;
        case "pi:PiStarBold":
            return PiStarBold;
        case "pi:PiStarFourBold":
            return PiStarFourBold;
        case "pi:PiStarHalfBold":
            return PiStarHalfBold;
        case "pi:PiStarOfDavidBold":
            return PiStarOfDavidBold;
        case "pi:PiSteamLogoBold":
            return PiSteamLogoBold;
        case "pi:PiSteeringWheelBold":
            return PiSteeringWheelBold;
        case "pi:PiStepsBold":
            return PiStepsBold;
        case "pi:PiStethoscopeBold":
            return PiStethoscopeBold;
        case "pi:PiStickerBold":
            return PiStickerBold;
        case "pi:PiStoolBold":
            return PiStoolBold;
        case "pi:PiStopBold":
            return PiStopBold;
        case "pi:PiStopCircleBold":
            return PiStopCircleBold;
        case "pi:PiStorefrontBold":
            return PiStorefrontBold;
        case "pi:PiStrategyBold":
            return PiStrategyBold;
        case "pi:PiStripeLogoBold":
            return PiStripeLogoBold;
        case "pi:PiStudentBold":
            return PiStudentBold;
        case "pi:PiSubsetOfBold":
            return PiSubsetOfBold;
        case "pi:PiSubsetProperOfBold":
            return PiSubsetProperOfBold;
        case "pi:PiSubtitlesBold":
            return PiSubtitlesBold;
        case "pi:PiSubtitlesSlashBold":
            return PiSubtitlesSlashBold;
        case "pi:PiSubtractBold":
            return PiSubtractBold;
        case "pi:PiSubtractSquareBold":
            return PiSubtractSquareBold;
        case "pi:PiSubwayBold":
            return PiSubwayBold;
        case "pi:PiSuitcaseBold":
            return PiSuitcaseBold;
        case "pi:PiSuitcaseRollingBold":
            return PiSuitcaseRollingBold;
        case "pi:PiSuitcaseSimpleBold":
            return PiSuitcaseSimpleBold;
        case "pi:PiSunBold":
            return PiSunBold;
        case "pi:PiSunDimBold":
            return PiSunDimBold;
        case "pi:PiSunHorizonBold":
            return PiSunHorizonBold;
        case "pi:PiSunglassesBold":
            return PiSunglassesBold;
        case "pi:PiSupersetOfBold":
            return PiSupersetOfBold;
        case "pi:PiSupersetProperOfBold":
            return PiSupersetProperOfBold;
        case "pi:PiSwapBold":
            return PiSwapBold;
        case "pi:PiSwatchesBold":
            return PiSwatchesBold;
        case "pi:PiSwimmingPoolBold":
            return PiSwimmingPoolBold;
        case "pi:PiSwordBold":
            return PiSwordBold;
        case "pi:PiSynagogueBold":
            return PiSynagogueBold;
        case "pi:PiSyringeBold":
            return PiSyringeBold;
        case "pi:PiTShirtBold":
            return PiTShirtBold;
        case "pi:PiTableBold":
            return PiTableBold;
        case "pi:PiTabsBold":
            return PiTabsBold;
        case "pi:PiTagBold":
            return PiTagBold;
        case "pi:PiTagChevronBold":
            return PiTagChevronBold;
        case "pi:PiTagSimpleBold":
            return PiTagSimpleBold;
        case "pi:PiTargetBold":
            return PiTargetBold;
        case "pi:PiTaxiBold":
            return PiTaxiBold;
        case "pi:PiTeaBagBold":
            return PiTeaBagBold;
        case "pi:PiTelegramLogoBold":
            return PiTelegramLogoBold;
        case "pi:PiTelevisionBold":
            return PiTelevisionBold;
        case "pi:PiTelevisionSimpleBold":
            return PiTelevisionSimpleBold;
        case "pi:PiTennisBallBold":
            return PiTennisBallBold;
        case "pi:PiTentBold":
            return PiTentBold;
        case "pi:PiTerminalBold":
            return PiTerminalBold;
        case "pi:PiTerminalWindowBold":
            return PiTerminalWindowBold;
        case "pi:PiTestTubeBold":
            return PiTestTubeBold;
        case "pi:PiTextAUnderlineBold":
            return PiTextAUnderlineBold;
        case "pi:PiTextAaBold":
            return PiTextAaBold;
        case "pi:PiTextAlignCenterBold":
            return PiTextAlignCenterBold;
        case "pi:PiTextAlignJustifyBold":
            return PiTextAlignJustifyBold;
        case "pi:PiTextAlignLeftBold":
            return PiTextAlignLeftBold;
        case "pi:PiTextAlignRightBold":
            return PiTextAlignRightBold;
        case "pi:PiTextBBold":
            return PiTextBBold;
        case "pi:PiTextColumnsBold":
            return PiTextColumnsBold;
        case "pi:PiTextHBold":
            return PiTextHBold;
        case "pi:PiTextHFiveBold":
            return PiTextHFiveBold;
        case "pi:PiTextHFourBold":
            return PiTextHFourBold;
        case "pi:PiTextHOneBold":
            return PiTextHOneBold;
        case "pi:PiTextHSixBold":
            return PiTextHSixBold;
        case "pi:PiTextHThreeBold":
            return PiTextHThreeBold;
        case "pi:PiTextHTwoBold":
            return PiTextHTwoBold;
        case "pi:PiTextIndentBold":
            return PiTextIndentBold;
        case "pi:PiTextItalicBold":
            return PiTextItalicBold;
        case "pi:PiTextOutdentBold":
            return PiTextOutdentBold;
        case "pi:PiTextStrikethroughBold":
            return PiTextStrikethroughBold;
        case "pi:PiTextSubscriptBold":
            return PiTextSubscriptBold;
        case "pi:PiTextSuperscriptBold":
            return PiTextSuperscriptBold;
        case "pi:PiTextTBold":
            return PiTextTBold;
        case "pi:PiTextTSlashBold":
            return PiTextTSlashBold;
        case "pi:PiTextUnderlineBold":
            return PiTextUnderlineBold;
        case "pi:PiTextboxBold":
            return PiTextboxBold;
        case "pi:PiThermometerBold":
            return PiThermometerBold;
        case "pi:PiThermometerColdBold":
            return PiThermometerColdBold;
        case "pi:PiThermometerHotBold":
            return PiThermometerHotBold;
        case "pi:PiThermometerSimpleBold":
            return PiThermometerSimpleBold;
        case "pi:PiThreadsLogoBold":
            return PiThreadsLogoBold;
        case "pi:PiThreeDBold":
            return PiThreeDBold;
        case "pi:PiThumbsDownBold":
            return PiThumbsDownBold;
        case "pi:PiThumbsUpBold":
            return PiThumbsUpBold;
        case "pi:PiTicketBold":
            return PiTicketBold;
        case "pi:PiTidalLogoBold":
            return PiTidalLogoBold;
        case "pi:PiTiktokLogoBold":
            return PiTiktokLogoBold;
        case "pi:PiTildeBold":
            return PiTildeBold;
        case "pi:PiTimerBold":
            return PiTimerBold;
        case "pi:PiTipJarBold":
            return PiTipJarBold;
        case "pi:PiTipiBold":
            return PiTipiBold;
        case "pi:PiTireBold":
            return PiTireBold;
        case "pi:PiToggleLeftBold":
            return PiToggleLeftBold;
        case "pi:PiToggleRightBold":
            return PiToggleRightBold;
        case "pi:PiToiletBold":
            return PiToiletBold;
        case "pi:PiToiletPaperBold":
            return PiToiletPaperBold;
        case "pi:PiToolboxBold":
            return PiToolboxBold;
        case "pi:PiToothBold":
            return PiToothBold;
        case "pi:PiTornadoBold":
            return PiTornadoBold;
        case "pi:PiToteBold":
            return PiToteBold;
        case "pi:PiToteSimpleBold":
            return PiToteSimpleBold;
        case "pi:PiTowelBold":
            return PiTowelBold;
        case "pi:PiTractorBold":
            return PiTractorBold;
        case "pi:PiTrademarkBold":
            return PiTrademarkBold;
        case "pi:PiTrademarkRegisteredBold":
            return PiTrademarkRegisteredBold;
        case "pi:PiTrafficConeBold":
            return PiTrafficConeBold;
        case "pi:PiTrafficSignBold":
            return PiTrafficSignBold;
        case "pi:PiTrafficSignalBold":
            return PiTrafficSignalBold;
        case "pi:PiTrainBold":
            return PiTrainBold;
        case "pi:PiTrainRegionalBold":
            return PiTrainRegionalBold;
        case "pi:PiTrainSimpleBold":
            return PiTrainSimpleBold;
        case "pi:PiTramBold":
            return PiTramBold;
        case "pi:PiTranslateBold":
            return PiTranslateBold;
        case "pi:PiTrashBold":
            return PiTrashBold;
        case "pi:PiTrashSimpleBold":
            return PiTrashSimpleBold;
        case "pi:PiTrayArrowDownBold":
            return PiTrayArrowDownBold;
        case "pi:PiTrayArrowUpBold":
            return PiTrayArrowUpBold;
        case "pi:PiTrayBold":
            return PiTrayBold;
        case "pi:PiTreasureChestBold":
            return PiTreasureChestBold;
        case "pi:PiTreeBold":
            return PiTreeBold;
        case "pi:PiTreeEvergreenBold":
            return PiTreeEvergreenBold;
        case "pi:PiTreePalmBold":
            return PiTreePalmBold;
        case "pi:PiTreeStructureBold":
            return PiTreeStructureBold;
        case "pi:PiTreeViewBold":
            return PiTreeViewBold;
        case "pi:PiTrendDownBold":
            return PiTrendDownBold;
        case "pi:PiTrendUpBold":
            return PiTrendUpBold;
        case "pi:PiTriangleBold":
            return PiTriangleBold;
        case "pi:PiTriangleDashedBold":
            return PiTriangleDashedBold;
        case "pi:PiTrolleyBold":
            return PiTrolleyBold;
        case "pi:PiTrolleySuitcaseBold":
            return PiTrolleySuitcaseBold;
        case "pi:PiTrophyBold":
            return PiTrophyBold;
        case "pi:PiTruckBold":
            return PiTruckBold;
        case "pi:PiTruckTrailerBold":
            return PiTruckTrailerBold;
        case "pi:PiTumblrLogoBold":
            return PiTumblrLogoBold;
        case "pi:PiTwitchLogoBold":
            return PiTwitchLogoBold;
        case "pi:PiTwitterLogoBold":
            return PiTwitterLogoBold;
        case "pi:PiUmbrellaBold":
            return PiUmbrellaBold;
        case "pi:PiUmbrellaSimpleBold":
            return PiUmbrellaSimpleBold;
        case "pi:PiUnionBold":
            return PiUnionBold;
        case "pi:PiUniteBold":
            return PiUniteBold;
        case "pi:PiUniteSquareBold":
            return PiUniteSquareBold;
        case "pi:PiUploadBold":
            return PiUploadBold;
        case "pi:PiUploadSimpleBold":
            return PiUploadSimpleBold;
        case "pi:PiUsbBold":
            return PiUsbBold;
        case "pi:PiUserBold":
            return PiUserBold;
        case "pi:PiUserCheckBold":
            return PiUserCheckBold;
        case "pi:PiUserCircleBold":
            return PiUserCircleBold;
        case "pi:PiUserCircleCheckBold":
            return PiUserCircleCheckBold;
        case "pi:PiUserCircleDashedBold":
            return PiUserCircleDashedBold;
        case "pi:PiUserCircleGearBold":
            return PiUserCircleGearBold;
        case "pi:PiUserCircleMinusBold":
            return PiUserCircleMinusBold;
        case "pi:PiUserCirclePlusBold":
            return PiUserCirclePlusBold;
        case "pi:PiUserFocusBold":
            return PiUserFocusBold;
        case "pi:PiUserGearBold":
            return PiUserGearBold;
        case "pi:PiUserListBold":
            return PiUserListBold;
        case "pi:PiUserMinusBold":
            return PiUserMinusBold;
        case "pi:PiUserPlusBold":
            return PiUserPlusBold;
        case "pi:PiUserRectangleBold":
            return PiUserRectangleBold;
        case "pi:PiUserSoundBold":
            return PiUserSoundBold;
        case "pi:PiUserSquareBold":
            return PiUserSquareBold;
        case "pi:PiUserSwitchBold":
            return PiUserSwitchBold;
        case "pi:PiUsersBold":
            return PiUsersBold;
        case "pi:PiUsersFourBold":
            return PiUsersFourBold;
        case "pi:PiUsersThreeBold":
            return PiUsersThreeBold;
        case "pi:PiVanBold":
            return PiVanBold;
        case "pi:PiVaultBold":
            return PiVaultBold;
        case "pi:PiVectorThreeBold":
            return PiVectorThreeBold;
        case "pi:PiVectorTwoBold":
            return PiVectorTwoBold;
        case "pi:PiVibrateBold":
            return PiVibrateBold;
        case "pi:PiVideoBold":
            return PiVideoBold;
        case "pi:PiVideoCameraBold":
            return PiVideoCameraBold;
        case "pi:PiVideoCameraSlashBold":
            return PiVideoCameraSlashBold;
        case "pi:PiVideoConferenceBold":
            return PiVideoConferenceBold;
        case "pi:PiVignetteBold":
            return PiVignetteBold;
        case "pi:PiVinylRecordBold":
            return PiVinylRecordBold;
        case "pi:PiVirtualRealityBold":
            return PiVirtualRealityBold;
        case "pi:PiVirusBold":
            return PiVirusBold;
        case "pi:PiVisorBold":
            return PiVisorBold;
        case "pi:PiVoicemailBold":
            return PiVoicemailBold;
        case "pi:PiVolleyballBold":
            return PiVolleyballBold;
        case "pi:PiWallBold":
            return PiWallBold;
        case "pi:PiWalletBold":
            return PiWalletBold;
        case "pi:PiWarehouseBold":
            return PiWarehouseBold;
        case "pi:PiWarningBold":
            return PiWarningBold;
        case "pi:PiWarningCircleBold":
            return PiWarningCircleBold;
        case "pi:PiWarningDiamondBold":
            return PiWarningDiamondBold;
        case "pi:PiWarningOctagonBold":
            return PiWarningOctagonBold;
        case "pi:PiWashingMachineBold":
            return PiWashingMachineBold;
        case "pi:PiWatchBold":
            return PiWatchBold;
        case "pi:PiWaveSawtoothBold":
            return PiWaveSawtoothBold;
        case "pi:PiWaveSineBold":
            return PiWaveSineBold;
        case "pi:PiWaveSquareBold":
            return PiWaveSquareBold;
        case "pi:PiWaveTriangleBold":
            return PiWaveTriangleBold;
        case "pi:PiWaveformBold":
            return PiWaveformBold;
        case "pi:PiWaveformSlashBold":
            return PiWaveformSlashBold;
        case "pi:PiWavesBold":
            return PiWavesBold;
        case "pi:PiWebcamBold":
            return PiWebcamBold;
        case "pi:PiWebcamSlashBold":
            return PiWebcamSlashBold;
        case "pi:PiWebhooksLogoBold":
            return PiWebhooksLogoBold;
        case "pi:PiWechatLogoBold":
            return PiWechatLogoBold;
        case "pi:PiWhatsappLogoBold":
            return PiWhatsappLogoBold;
        case "pi:PiWheelchairBold":
            return PiWheelchairBold;
        case "pi:PiWheelchairMotionBold":
            return PiWheelchairMotionBold;
        case "pi:PiWifiHighBold":
            return PiWifiHighBold;
        case "pi:PiWifiLowBold":
            return PiWifiLowBold;
        case "pi:PiWifiMediumBold":
            return PiWifiMediumBold;
        case "pi:PiWifiNoneBold":
            return PiWifiNoneBold;
        case "pi:PiWifiSlashBold":
            return PiWifiSlashBold;
        case "pi:PiWifiXBold":
            return PiWifiXBold;
        case "pi:PiWindBold":
            return PiWindBold;
        case "pi:PiWindmillBold":
            return PiWindmillBold;
        case "pi:PiWindowsLogoBold":
            return PiWindowsLogoBold;
        case "pi:PiWineBold":
            return PiWineBold;
        case "pi:PiWrenchBold":
            return PiWrenchBold;
        case "pi:PiXBold":
            return PiXBold;
        case "pi:PiXCircleBold":
            return PiXCircleBold;
        case "pi:PiXLogoBold":
            return PiXLogoBold;
        case "pi:PiXSquareBold":
            return PiXSquareBold;
        case "pi:PiYarnBold":
            return PiYarnBold;
        case "pi:PiYinYangBold":
            return PiYinYangBold;
        case "pi:PiYoutubeLogoBold":
            return PiYoutubeLogoBold;
        case "pi:PiAcornDuotone":
            return PiAcornDuotone;
        case "pi:PiAddressBookDuotone":
            return PiAddressBookDuotone;
        case "pi:PiAddressBookTabsDuotone":
            return PiAddressBookTabsDuotone;
        case "pi:PiAirTrafficControlDuotone":
            return PiAirTrafficControlDuotone;
        case "pi:PiAirplaneDuotone":
            return PiAirplaneDuotone;
        case "pi:PiAirplaneInFlightDuotone":
            return PiAirplaneInFlightDuotone;
        case "pi:PiAirplaneLandingDuotone":
            return PiAirplaneLandingDuotone;
        case "pi:PiAirplaneTakeoffDuotone":
            return PiAirplaneTakeoffDuotone;
        case "pi:PiAirplaneTaxiingDuotone":
            return PiAirplaneTaxiingDuotone;
        case "pi:PiAirplaneTiltDuotone":
            return PiAirplaneTiltDuotone;
        case "pi:PiAirplayDuotone":
            return PiAirplayDuotone;
        case "pi:PiAlarmDuotone":
            return PiAlarmDuotone;
        case "pi:PiAlienDuotone":
            return PiAlienDuotone;
        case "pi:PiAlignBottomDuotone":
            return PiAlignBottomDuotone;
        case "pi:PiAlignBottomSimpleDuotone":
            return PiAlignBottomSimpleDuotone;
        case "pi:PiAlignCenterHorizontalDuotone":
            return PiAlignCenterHorizontalDuotone;
        case "pi:PiAlignCenterHorizontalSimpleDuotone":
            return PiAlignCenterHorizontalSimpleDuotone;
        case "pi:PiAlignCenterVerticalDuotone":
            return PiAlignCenterVerticalDuotone;
        case "pi:PiAlignCenterVerticalSimpleDuotone":
            return PiAlignCenterVerticalSimpleDuotone;
        case "pi:PiAlignLeftDuotone":
            return PiAlignLeftDuotone;
        case "pi:PiAlignLeftSimpleDuotone":
            return PiAlignLeftSimpleDuotone;
        case "pi:PiAlignRightDuotone":
            return PiAlignRightDuotone;
        case "pi:PiAlignRightSimpleDuotone":
            return PiAlignRightSimpleDuotone;
        case "pi:PiAlignTopDuotone":
            return PiAlignTopDuotone;
        case "pi:PiAlignTopSimpleDuotone":
            return PiAlignTopSimpleDuotone;
        case "pi:PiAmazonLogoDuotone":
            return PiAmazonLogoDuotone;
        case "pi:PiAmbulanceDuotone":
            return PiAmbulanceDuotone;
        case "pi:PiAnchorDuotone":
            return PiAnchorDuotone;
        case "pi:PiAnchorSimpleDuotone":
            return PiAnchorSimpleDuotone;
        case "pi:PiAndroidLogoDuotone":
            return PiAndroidLogoDuotone;
        case "pi:PiAngleDuotone":
            return PiAngleDuotone;
        case "pi:PiAngularLogoDuotone":
            return PiAngularLogoDuotone;
        case "pi:PiApertureDuotone":
            return PiApertureDuotone;
        case "pi:PiAppStoreLogoDuotone":
            return PiAppStoreLogoDuotone;
        case "pi:PiAppWindowDuotone":
            return PiAppWindowDuotone;
        case "pi:PiAppleLogoDuotone":
            return PiAppleLogoDuotone;
        case "pi:PiApplePodcastsLogoDuotone":
            return PiApplePodcastsLogoDuotone;
        case "pi:PiApproximateEqualsDuotone":
            return PiApproximateEqualsDuotone;
        case "pi:PiArchiveDuotone":
            return PiArchiveDuotone;
        case "pi:PiArmchairDuotone":
            return PiArmchairDuotone;
        case "pi:PiArrowArcLeftDuotone":
            return PiArrowArcLeftDuotone;
        case "pi:PiArrowArcRightDuotone":
            return PiArrowArcRightDuotone;
        case "pi:PiArrowBendDoubleUpLeftDuotone":
            return PiArrowBendDoubleUpLeftDuotone;
        case "pi:PiArrowBendDoubleUpRightDuotone":
            return PiArrowBendDoubleUpRightDuotone;
        case "pi:PiArrowBendDownLeftDuotone":
            return PiArrowBendDownLeftDuotone;
        case "pi:PiArrowBendDownRightDuotone":
            return PiArrowBendDownRightDuotone;
        case "pi:PiArrowBendLeftDownDuotone":
            return PiArrowBendLeftDownDuotone;
        case "pi:PiArrowBendLeftUpDuotone":
            return PiArrowBendLeftUpDuotone;
        case "pi:PiArrowBendRightDownDuotone":
            return PiArrowBendRightDownDuotone;
        case "pi:PiArrowBendRightUpDuotone":
            return PiArrowBendRightUpDuotone;
        case "pi:PiArrowBendUpLeftDuotone":
            return PiArrowBendUpLeftDuotone;
        case "pi:PiArrowBendUpRightDuotone":
            return PiArrowBendUpRightDuotone;
        case "pi:PiArrowCircleDownDuotone":
            return PiArrowCircleDownDuotone;
        case "pi:PiArrowCircleDownLeftDuotone":
            return PiArrowCircleDownLeftDuotone;
        case "pi:PiArrowCircleDownRightDuotone":
            return PiArrowCircleDownRightDuotone;
        case "pi:PiArrowCircleLeftDuotone":
            return PiArrowCircleLeftDuotone;
        case "pi:PiArrowCircleRightDuotone":
            return PiArrowCircleRightDuotone;
        case "pi:PiArrowCircleUpDuotone":
            return PiArrowCircleUpDuotone;
        case "pi:PiArrowCircleUpLeftDuotone":
            return PiArrowCircleUpLeftDuotone;
        case "pi:PiArrowCircleUpRightDuotone":
            return PiArrowCircleUpRightDuotone;
        case "pi:PiArrowClockwiseDuotone":
            return PiArrowClockwiseDuotone;
        case "pi:PiArrowCounterClockwiseDuotone":
            return PiArrowCounterClockwiseDuotone;
        case "pi:PiArrowDownDuotone":
            return PiArrowDownDuotone;
        case "pi:PiArrowDownLeftDuotone":
            return PiArrowDownLeftDuotone;
        case "pi:PiArrowDownRightDuotone":
            return PiArrowDownRightDuotone;
        case "pi:PiArrowElbowDownLeftDuotone":
            return PiArrowElbowDownLeftDuotone;
        case "pi:PiArrowElbowDownRightDuotone":
            return PiArrowElbowDownRightDuotone;
        case "pi:PiArrowElbowLeftDownDuotone":
            return PiArrowElbowLeftDownDuotone;
        case "pi:PiArrowElbowLeftDuotone":
            return PiArrowElbowLeftDuotone;
        case "pi:PiArrowElbowLeftUpDuotone":
            return PiArrowElbowLeftUpDuotone;
        case "pi:PiArrowElbowRightDownDuotone":
            return PiArrowElbowRightDownDuotone;
        case "pi:PiArrowElbowRightDuotone":
            return PiArrowElbowRightDuotone;
        case "pi:PiArrowElbowRightUpDuotone":
            return PiArrowElbowRightUpDuotone;
        case "pi:PiArrowElbowUpLeftDuotone":
            return PiArrowElbowUpLeftDuotone;
        case "pi:PiArrowElbowUpRightDuotone":
            return PiArrowElbowUpRightDuotone;
        case "pi:PiArrowFatDownDuotone":
            return PiArrowFatDownDuotone;
        case "pi:PiArrowFatLeftDuotone":
            return PiArrowFatLeftDuotone;
        case "pi:PiArrowFatLineDownDuotone":
            return PiArrowFatLineDownDuotone;
        case "pi:PiArrowFatLineLeftDuotone":
            return PiArrowFatLineLeftDuotone;
        case "pi:PiArrowFatLineRightDuotone":
            return PiArrowFatLineRightDuotone;
        case "pi:PiArrowFatLineUpDuotone":
            return PiArrowFatLineUpDuotone;
        case "pi:PiArrowFatLinesDownDuotone":
            return PiArrowFatLinesDownDuotone;
        case "pi:PiArrowFatLinesLeftDuotone":
            return PiArrowFatLinesLeftDuotone;
        case "pi:PiArrowFatLinesRightDuotone":
            return PiArrowFatLinesRightDuotone;
        case "pi:PiArrowFatLinesUpDuotone":
            return PiArrowFatLinesUpDuotone;
        case "pi:PiArrowFatRightDuotone":
            return PiArrowFatRightDuotone;
        case "pi:PiArrowFatUpDuotone":
            return PiArrowFatUpDuotone;
        case "pi:PiArrowLeftDuotone":
            return PiArrowLeftDuotone;
        case "pi:PiArrowLineDownDuotone":
            return PiArrowLineDownDuotone;
        case "pi:PiArrowLineDownLeftDuotone":
            return PiArrowLineDownLeftDuotone;
        case "pi:PiArrowLineDownRightDuotone":
            return PiArrowLineDownRightDuotone;
        case "pi:PiArrowLineLeftDuotone":
            return PiArrowLineLeftDuotone;
        case "pi:PiArrowLineRightDuotone":
            return PiArrowLineRightDuotone;
        case "pi:PiArrowLineUpDuotone":
            return PiArrowLineUpDuotone;
        case "pi:PiArrowLineUpLeftDuotone":
            return PiArrowLineUpLeftDuotone;
        case "pi:PiArrowLineUpRightDuotone":
            return PiArrowLineUpRightDuotone;
        case "pi:PiArrowRightDuotone":
            return PiArrowRightDuotone;
        case "pi:PiArrowSquareDownDuotone":
            return PiArrowSquareDownDuotone;
        case "pi:PiArrowSquareDownLeftDuotone":
            return PiArrowSquareDownLeftDuotone;
        case "pi:PiArrowSquareDownRightDuotone":
            return PiArrowSquareDownRightDuotone;
        case "pi:PiArrowSquareInDuotone":
            return PiArrowSquareInDuotone;
        case "pi:PiArrowSquareLeftDuotone":
            return PiArrowSquareLeftDuotone;
        case "pi:PiArrowSquareOutDuotone":
            return PiArrowSquareOutDuotone;
        case "pi:PiArrowSquareRightDuotone":
            return PiArrowSquareRightDuotone;
        case "pi:PiArrowSquareUpDuotone":
            return PiArrowSquareUpDuotone;
        case "pi:PiArrowSquareUpLeftDuotone":
            return PiArrowSquareUpLeftDuotone;
        case "pi:PiArrowSquareUpRightDuotone":
            return PiArrowSquareUpRightDuotone;
        case "pi:PiArrowUDownLeftDuotone":
            return PiArrowUDownLeftDuotone;
        case "pi:PiArrowUDownRightDuotone":
            return PiArrowUDownRightDuotone;
        case "pi:PiArrowULeftDownDuotone":
            return PiArrowULeftDownDuotone;
        case "pi:PiArrowULeftUpDuotone":
            return PiArrowULeftUpDuotone;
        case "pi:PiArrowURightDownDuotone":
            return PiArrowURightDownDuotone;
        case "pi:PiArrowURightUpDuotone":
            return PiArrowURightUpDuotone;
        case "pi:PiArrowUUpLeftDuotone":
            return PiArrowUUpLeftDuotone;
        case "pi:PiArrowUUpRightDuotone":
            return PiArrowUUpRightDuotone;
        case "pi:PiArrowUpDuotone":
            return PiArrowUpDuotone;
        case "pi:PiArrowUpLeftDuotone":
            return PiArrowUpLeftDuotone;
        case "pi:PiArrowUpRightDuotone":
            return PiArrowUpRightDuotone;
        case "pi:PiArrowsClockwiseDuotone":
            return PiArrowsClockwiseDuotone;
        case "pi:PiArrowsCounterClockwiseDuotone":
            return PiArrowsCounterClockwiseDuotone;
        case "pi:PiArrowsDownUpDuotone":
            return PiArrowsDownUpDuotone;
        case "pi:PiArrowsHorizontalDuotone":
            return PiArrowsHorizontalDuotone;
        case "pi:PiArrowsInCardinalDuotone":
            return PiArrowsInCardinalDuotone;
        case "pi:PiArrowsInDuotone":
            return PiArrowsInDuotone;
        case "pi:PiArrowsInLineHorizontalDuotone":
            return PiArrowsInLineHorizontalDuotone;
        case "pi:PiArrowsInLineVerticalDuotone":
            return PiArrowsInLineVerticalDuotone;
        case "pi:PiArrowsInSimpleDuotone":
            return PiArrowsInSimpleDuotone;
        case "pi:PiArrowsLeftRightDuotone":
            return PiArrowsLeftRightDuotone;
        case "pi:PiArrowsMergeDuotone":
            return PiArrowsMergeDuotone;
        case "pi:PiArrowsOutCardinalDuotone":
            return PiArrowsOutCardinalDuotone;
        case "pi:PiArrowsOutDuotone":
            return PiArrowsOutDuotone;
        case "pi:PiArrowsOutLineHorizontalDuotone":
            return PiArrowsOutLineHorizontalDuotone;
        case "pi:PiArrowsOutLineVerticalDuotone":
            return PiArrowsOutLineVerticalDuotone;
        case "pi:PiArrowsOutSimpleDuotone":
            return PiArrowsOutSimpleDuotone;
        case "pi:PiArrowsSplitDuotone":
            return PiArrowsSplitDuotone;
        case "pi:PiArrowsVerticalDuotone":
            return PiArrowsVerticalDuotone;
        case "pi:PiArticleDuotone":
            return PiArticleDuotone;
        case "pi:PiArticleMediumDuotone":
            return PiArticleMediumDuotone;
        case "pi:PiArticleNyTimesDuotone":
            return PiArticleNyTimesDuotone;
        case "pi:PiAsclepiusDuotone":
            return PiAsclepiusDuotone;
        case "pi:PiAsteriskDuotone":
            return PiAsteriskDuotone;
        case "pi:PiAsteriskSimpleDuotone":
            return PiAsteriskSimpleDuotone;
        case "pi:PiAtDuotone":
            return PiAtDuotone;
        case "pi:PiAtomDuotone":
            return PiAtomDuotone;
        case "pi:PiAvocadoDuotone":
            return PiAvocadoDuotone;
        case "pi:PiAxeDuotone":
            return PiAxeDuotone;
        case "pi:PiBabyCarriageDuotone":
            return PiBabyCarriageDuotone;
        case "pi:PiBabyDuotone":
            return PiBabyDuotone;
        case "pi:PiBackpackDuotone":
            return PiBackpackDuotone;
        case "pi:PiBackspaceDuotone":
            return PiBackspaceDuotone;
        case "pi:PiBagDuotone":
            return PiBagDuotone;
        case "pi:PiBagSimpleDuotone":
            return PiBagSimpleDuotone;
        case "pi:PiBalloonDuotone":
            return PiBalloonDuotone;
        case "pi:PiBandaidsDuotone":
            return PiBandaidsDuotone;
        case "pi:PiBankDuotone":
            return PiBankDuotone;
        case "pi:PiBarbellDuotone":
            return PiBarbellDuotone;
        case "pi:PiBarcodeDuotone":
            return PiBarcodeDuotone;
        case "pi:PiBarnDuotone":
            return PiBarnDuotone;
        case "pi:PiBarricadeDuotone":
            return PiBarricadeDuotone;
        case "pi:PiBaseballCapDuotone":
            return PiBaseballCapDuotone;
        case "pi:PiBaseballDuotone":
            return PiBaseballDuotone;
        case "pi:PiBaseballHelmetDuotone":
            return PiBaseballHelmetDuotone;
        case "pi:PiBasketDuotone":
            return PiBasketDuotone;
        case "pi:PiBasketballDuotone":
            return PiBasketballDuotone;
        case "pi:PiBathtubDuotone":
            return PiBathtubDuotone;
        case "pi:PiBatteryChargingDuotone":
            return PiBatteryChargingDuotone;
        case "pi:PiBatteryChargingVerticalDuotone":
            return PiBatteryChargingVerticalDuotone;
        case "pi:PiBatteryEmptyDuotone":
            return PiBatteryEmptyDuotone;
        case "pi:PiBatteryFullDuotone":
            return PiBatteryFullDuotone;
        case "pi:PiBatteryHighDuotone":
            return PiBatteryHighDuotone;
        case "pi:PiBatteryLowDuotone":
            return PiBatteryLowDuotone;
        case "pi:PiBatteryMediumDuotone":
            return PiBatteryMediumDuotone;
        case "pi:PiBatteryPlusDuotone":
            return PiBatteryPlusDuotone;
        case "pi:PiBatteryPlusVerticalDuotone":
            return PiBatteryPlusVerticalDuotone;
        case "pi:PiBatteryVerticalEmptyDuotone":
            return PiBatteryVerticalEmptyDuotone;
        case "pi:PiBatteryVerticalFullDuotone":
            return PiBatteryVerticalFullDuotone;
        case "pi:PiBatteryVerticalHighDuotone":
            return PiBatteryVerticalHighDuotone;
        case "pi:PiBatteryVerticalLowDuotone":
            return PiBatteryVerticalLowDuotone;
        case "pi:PiBatteryVerticalMediumDuotone":
            return PiBatteryVerticalMediumDuotone;
        case "pi:PiBatteryWarningDuotone":
            return PiBatteryWarningDuotone;
        case "pi:PiBatteryWarningVerticalDuotone":
            return PiBatteryWarningVerticalDuotone;
        case "pi:PiBeachBallDuotone":
            return PiBeachBallDuotone;
        case "pi:PiBeanieDuotone":
            return PiBeanieDuotone;
        case "pi:PiBedDuotone":
            return PiBedDuotone;
        case "pi:PiBeerBottleDuotone":
            return PiBeerBottleDuotone;
        case "pi:PiBeerSteinDuotone":
            return PiBeerSteinDuotone;
        case "pi:PiBehanceLogoDuotone":
            return PiBehanceLogoDuotone;
        case "pi:PiBellDuotone":
            return PiBellDuotone;
        case "pi:PiBellRingingDuotone":
            return PiBellRingingDuotone;
        case "pi:PiBellSimpleDuotone":
            return PiBellSimpleDuotone;
        case "pi:PiBellSimpleRingingDuotone":
            return PiBellSimpleRingingDuotone;
        case "pi:PiBellSimpleSlashDuotone":
            return PiBellSimpleSlashDuotone;
        case "pi:PiBellSimpleZDuotone":
            return PiBellSimpleZDuotone;
        case "pi:PiBellSlashDuotone":
            return PiBellSlashDuotone;
        case "pi:PiBellZDuotone":
            return PiBellZDuotone;
        case "pi:PiBeltDuotone":
            return PiBeltDuotone;
        case "pi:PiBezierCurveDuotone":
            return PiBezierCurveDuotone;
        case "pi:PiBicycleDuotone":
            return PiBicycleDuotone;
        case "pi:PiBinaryDuotone":
            return PiBinaryDuotone;
        case "pi:PiBinocularsDuotone":
            return PiBinocularsDuotone;
        case "pi:PiBiohazardDuotone":
            return PiBiohazardDuotone;
        case "pi:PiBirdDuotone":
            return PiBirdDuotone;
        case "pi:PiBlueprintDuotone":
            return PiBlueprintDuotone;
        case "pi:PiBluetoothConnectedDuotone":
            return PiBluetoothConnectedDuotone;
        case "pi:PiBluetoothDuotone":
            return PiBluetoothDuotone;
        case "pi:PiBluetoothSlashDuotone":
            return PiBluetoothSlashDuotone;
        case "pi:PiBluetoothXDuotone":
            return PiBluetoothXDuotone;
        case "pi:PiBoatDuotone":
            return PiBoatDuotone;
        case "pi:PiBombDuotone":
            return PiBombDuotone;
        case "pi:PiBoneDuotone":
            return PiBoneDuotone;
        case "pi:PiBookBookmarkDuotone":
            return PiBookBookmarkDuotone;
        case "pi:PiBookDuotone":
            return PiBookDuotone;
        case "pi:PiBookOpenDuotone":
            return PiBookOpenDuotone;
        case "pi:PiBookOpenTextDuotone":
            return PiBookOpenTextDuotone;
        case "pi:PiBookOpenUserDuotone":
            return PiBookOpenUserDuotone;
        case "pi:PiBookmarkDuotone":
            return PiBookmarkDuotone;
        case "pi:PiBookmarkSimpleDuotone":
            return PiBookmarkSimpleDuotone;
        case "pi:PiBookmarksDuotone":
            return PiBookmarksDuotone;
        case "pi:PiBookmarksSimpleDuotone":
            return PiBookmarksSimpleDuotone;
        case "pi:PiBooksDuotone":
            return PiBooksDuotone;
        case "pi:PiBootDuotone":
            return PiBootDuotone;
        case "pi:PiBoulesDuotone":
            return PiBoulesDuotone;
        case "pi:PiBoundingBoxDuotone":
            return PiBoundingBoxDuotone;
        case "pi:PiBowlFoodDuotone":
            return PiBowlFoodDuotone;
        case "pi:PiBowlSteamDuotone":
            return PiBowlSteamDuotone;
        case "pi:PiBowlingBallDuotone":
            return PiBowlingBallDuotone;
        case "pi:PiBoxArrowDownDuotone":
            return PiBoxArrowDownDuotone;
        case "pi:PiBoxArrowUpDuotone":
            return PiBoxArrowUpDuotone;
        case "pi:PiBoxingGloveDuotone":
            return PiBoxingGloveDuotone;
        case "pi:PiBracketsAngleDuotone":
            return PiBracketsAngleDuotone;
        case "pi:PiBracketsCurlyDuotone":
            return PiBracketsCurlyDuotone;
        case "pi:PiBracketsRoundDuotone":
            return PiBracketsRoundDuotone;
        case "pi:PiBracketsSquareDuotone":
            return PiBracketsSquareDuotone;
        case "pi:PiBrainDuotone":
            return PiBrainDuotone;
        case "pi:PiBrandyDuotone":
            return PiBrandyDuotone;
        case "pi:PiBreadDuotone":
            return PiBreadDuotone;
        case "pi:PiBridgeDuotone":
            return PiBridgeDuotone;
        case "pi:PiBriefcaseDuotone":
            return PiBriefcaseDuotone;
        case "pi:PiBriefcaseMetalDuotone":
            return PiBriefcaseMetalDuotone;
        case "pi:PiBroadcastDuotone":
            return PiBroadcastDuotone;
        case "pi:PiBroomDuotone":
            return PiBroomDuotone;
        case "pi:PiBrowserDuotone":
            return PiBrowserDuotone;
        case "pi:PiBrowsersDuotone":
            return PiBrowsersDuotone;
        case "pi:PiBugBeetleDuotone":
            return PiBugBeetleDuotone;
        case "pi:PiBugDroidDuotone":
            return PiBugDroidDuotone;
        case "pi:PiBugDuotone":
            return PiBugDuotone;
        case "pi:PiBuildingApartmentDuotone":
            return PiBuildingApartmentDuotone;
        case "pi:PiBuildingDuotone":
            return PiBuildingDuotone;
        case "pi:PiBuildingOfficeDuotone":
            return PiBuildingOfficeDuotone;
        case "pi:PiBuildingsDuotone":
            return PiBuildingsDuotone;
        case "pi:PiBulldozerDuotone":
            return PiBulldozerDuotone;
        case "pi:PiBusDuotone":
            return PiBusDuotone;
        case "pi:PiButterflyDuotone":
            return PiButterflyDuotone;
        case "pi:PiCableCarDuotone":
            return PiCableCarDuotone;
        case "pi:PiCactusDuotone":
            return PiCactusDuotone;
        case "pi:PiCakeDuotone":
            return PiCakeDuotone;
        case "pi:PiCalculatorDuotone":
            return PiCalculatorDuotone;
        case "pi:PiCalendarBlankDuotone":
            return PiCalendarBlankDuotone;
        case "pi:PiCalendarCheckDuotone":
            return PiCalendarCheckDuotone;
        case "pi:PiCalendarDotDuotone":
            return PiCalendarDotDuotone;
        case "pi:PiCalendarDotsDuotone":
            return PiCalendarDotsDuotone;
        case "pi:PiCalendarDuotone":
            return PiCalendarDuotone;
        case "pi:PiCalendarHeartDuotone":
            return PiCalendarHeartDuotone;
        case "pi:PiCalendarMinusDuotone":
            return PiCalendarMinusDuotone;
        case "pi:PiCalendarPlusDuotone":
            return PiCalendarPlusDuotone;
        case "pi:PiCalendarSlashDuotone":
            return PiCalendarSlashDuotone;
        case "pi:PiCalendarStarDuotone":
            return PiCalendarStarDuotone;
        case "pi:PiCalendarXDuotone":
            return PiCalendarXDuotone;
        case "pi:PiCallBellDuotone":
            return PiCallBellDuotone;
        case "pi:PiCameraDuotone":
            return PiCameraDuotone;
        case "pi:PiCameraPlusDuotone":
            return PiCameraPlusDuotone;
        case "pi:PiCameraRotateDuotone":
            return PiCameraRotateDuotone;
        case "pi:PiCameraSlashDuotone":
            return PiCameraSlashDuotone;
        case "pi:PiCampfireDuotone":
            return PiCampfireDuotone;
        case "pi:PiCarBatteryDuotone":
            return PiCarBatteryDuotone;
        case "pi:PiCarDuotone":
            return PiCarDuotone;
        case "pi:PiCarProfileDuotone":
            return PiCarProfileDuotone;
        case "pi:PiCarSimpleDuotone":
            return PiCarSimpleDuotone;
        case "pi:PiCardholderDuotone":
            return PiCardholderDuotone;
        case "pi:PiCardsDuotone":
            return PiCardsDuotone;
        case "pi:PiCardsThreeDuotone":
            return PiCardsThreeDuotone;
        case "pi:PiCaretCircleDoubleDownDuotone":
            return PiCaretCircleDoubleDownDuotone;
        case "pi:PiCaretCircleDoubleLeftDuotone":
            return PiCaretCircleDoubleLeftDuotone;
        case "pi:PiCaretCircleDoubleRightDuotone":
            return PiCaretCircleDoubleRightDuotone;
        case "pi:PiCaretCircleDoubleUpDuotone":
            return PiCaretCircleDoubleUpDuotone;
        case "pi:PiCaretCircleDownDuotone":
            return PiCaretCircleDownDuotone;
        case "pi:PiCaretCircleLeftDuotone":
            return PiCaretCircleLeftDuotone;
        case "pi:PiCaretCircleRightDuotone":
            return PiCaretCircleRightDuotone;
        case "pi:PiCaretCircleUpDownDuotone":
            return PiCaretCircleUpDownDuotone;
        case "pi:PiCaretCircleUpDuotone":
            return PiCaretCircleUpDuotone;
        case "pi:PiCaretDoubleDownDuotone":
            return PiCaretDoubleDownDuotone;
        case "pi:PiCaretDoubleLeftDuotone":
            return PiCaretDoubleLeftDuotone;
        case "pi:PiCaretDoubleRightDuotone":
            return PiCaretDoubleRightDuotone;
        case "pi:PiCaretDoubleUpDuotone":
            return PiCaretDoubleUpDuotone;
        case "pi:PiCaretDownDuotone":
            return PiCaretDownDuotone;
        case "pi:PiCaretLeftDuotone":
            return PiCaretLeftDuotone;
        case "pi:PiCaretLineDownDuotone":
            return PiCaretLineDownDuotone;
        case "pi:PiCaretLineLeftDuotone":
            return PiCaretLineLeftDuotone;
        case "pi:PiCaretLineRightDuotone":
            return PiCaretLineRightDuotone;
        case "pi:PiCaretLineUpDuotone":
            return PiCaretLineUpDuotone;
        case "pi:PiCaretRightDuotone":
            return PiCaretRightDuotone;
        case "pi:PiCaretUpDownDuotone":
            return PiCaretUpDownDuotone;
        case "pi:PiCaretUpDuotone":
            return PiCaretUpDuotone;
        case "pi:PiCarrotDuotone":
            return PiCarrotDuotone;
        case "pi:PiCashRegisterDuotone":
            return PiCashRegisterDuotone;
        case "pi:PiCassetteTapeDuotone":
            return PiCassetteTapeDuotone;
        case "pi:PiCastleTurretDuotone":
            return PiCastleTurretDuotone;
        case "pi:PiCatDuotone":
            return PiCatDuotone;
        case "pi:PiCellSignalFullDuotone":
            return PiCellSignalFullDuotone;
        case "pi:PiCellSignalHighDuotone":
            return PiCellSignalHighDuotone;
        case "pi:PiCellSignalLowDuotone":
            return PiCellSignalLowDuotone;
        case "pi:PiCellSignalMediumDuotone":
            return PiCellSignalMediumDuotone;
        case "pi:PiCellSignalNoneDuotone":
            return PiCellSignalNoneDuotone;
        case "pi:PiCellSignalSlashDuotone":
            return PiCellSignalSlashDuotone;
        case "pi:PiCellSignalXDuotone":
            return PiCellSignalXDuotone;
        case "pi:PiCellTowerDuotone":
            return PiCellTowerDuotone;
        case "pi:PiCertificateDuotone":
            return PiCertificateDuotone;
        case "pi:PiChairDuotone":
            return PiChairDuotone;
        case "pi:PiChalkboardDuotone":
            return PiChalkboardDuotone;
        case "pi:PiChalkboardSimpleDuotone":
            return PiChalkboardSimpleDuotone;
        case "pi:PiChalkboardTeacherDuotone":
            return PiChalkboardTeacherDuotone;
        case "pi:PiChampagneDuotone":
            return PiChampagneDuotone;
        case "pi:PiChargingStationDuotone":
            return PiChargingStationDuotone;
        case "pi:PiChartBarDuotone":
            return PiChartBarDuotone;
        case "pi:PiChartBarHorizontalDuotone":
            return PiChartBarHorizontalDuotone;
        case "pi:PiChartDonutDuotone":
            return PiChartDonutDuotone;
        case "pi:PiChartLineDownDuotone":
            return PiChartLineDownDuotone;
        case "pi:PiChartLineDuotone":
            return PiChartLineDuotone;
        case "pi:PiChartLineUpDuotone":
            return PiChartLineUpDuotone;
        case "pi:PiChartPieDuotone":
            return PiChartPieDuotone;
        case "pi:PiChartPieSliceDuotone":
            return PiChartPieSliceDuotone;
        case "pi:PiChartPolarDuotone":
            return PiChartPolarDuotone;
        case "pi:PiChartScatterDuotone":
            return PiChartScatterDuotone;
        case "pi:PiChatCenteredDotsDuotone":
            return PiChatCenteredDotsDuotone;
        case "pi:PiChatCenteredDuotone":
            return PiChatCenteredDuotone;
        case "pi:PiChatCenteredSlashDuotone":
            return PiChatCenteredSlashDuotone;
        case "pi:PiChatCenteredTextDuotone":
            return PiChatCenteredTextDuotone;
        case "pi:PiChatCircleDotsDuotone":
            return PiChatCircleDotsDuotone;
        case "pi:PiChatCircleDuotone":
            return PiChatCircleDuotone;
        case "pi:PiChatCircleSlashDuotone":
            return PiChatCircleSlashDuotone;
        case "pi:PiChatCircleTextDuotone":
            return PiChatCircleTextDuotone;
        case "pi:PiChatDotsDuotone":
            return PiChatDotsDuotone;
        case "pi:PiChatDuotone":
            return PiChatDuotone;
        case "pi:PiChatSlashDuotone":
            return PiChatSlashDuotone;
        case "pi:PiChatTeardropDotsDuotone":
            return PiChatTeardropDotsDuotone;
        case "pi:PiChatTeardropDuotone":
            return PiChatTeardropDuotone;
        case "pi:PiChatTeardropSlashDuotone":
            return PiChatTeardropSlashDuotone;
        case "pi:PiChatTeardropTextDuotone":
            return PiChatTeardropTextDuotone;
        case "pi:PiChatTextDuotone":
            return PiChatTextDuotone;
        case "pi:PiChatsCircleDuotone":
            return PiChatsCircleDuotone;
        case "pi:PiChatsDuotone":
            return PiChatsDuotone;
        case "pi:PiChatsTeardropDuotone":
            return PiChatsTeardropDuotone;
        case "pi:PiCheckCircleDuotone":
            return PiCheckCircleDuotone;
        case "pi:PiCheckDuotone":
            return PiCheckDuotone;
        case "pi:PiCheckFatDuotone":
            return PiCheckFatDuotone;
        case "pi:PiCheckSquareDuotone":
            return PiCheckSquareDuotone;
        case "pi:PiCheckSquareOffsetDuotone":
            return PiCheckSquareOffsetDuotone;
        case "pi:PiCheckerboardDuotone":
            return PiCheckerboardDuotone;
        case "pi:PiChecksDuotone":
            return PiChecksDuotone;
        case "pi:PiCheersDuotone":
            return PiCheersDuotone;
        case "pi:PiCheeseDuotone":
            return PiCheeseDuotone;
        case "pi:PiChefHatDuotone":
            return PiChefHatDuotone;
        case "pi:PiCherriesDuotone":
            return PiCherriesDuotone;
        case "pi:PiChurchDuotone":
            return PiChurchDuotone;
        case "pi:PiCigaretteDuotone":
            return PiCigaretteDuotone;
        case "pi:PiCigaretteSlashDuotone":
            return PiCigaretteSlashDuotone;
        case "pi:PiCircleDashedDuotone":
            return PiCircleDashedDuotone;
        case "pi:PiCircleDuotone":
            return PiCircleDuotone;
        case "pi:PiCircleHalfDuotone":
            return PiCircleHalfDuotone;
        case "pi:PiCircleHalfTiltDuotone":
            return PiCircleHalfTiltDuotone;
        case "pi:PiCircleNotchDuotone":
            return PiCircleNotchDuotone;
        case "pi:PiCirclesFourDuotone":
            return PiCirclesFourDuotone;
        case "pi:PiCirclesThreeDuotone":
            return PiCirclesThreeDuotone;
        case "pi:PiCirclesThreePlusDuotone":
            return PiCirclesThreePlusDuotone;
        case "pi:PiCircuitryDuotone":
            return PiCircuitryDuotone;
        case "pi:PiCityDuotone":
            return PiCityDuotone;
        case "pi:PiClipboardDuotone":
            return PiClipboardDuotone;
        case "pi:PiClipboardTextDuotone":
            return PiClipboardTextDuotone;
        case "pi:PiClockAfternoonDuotone":
            return PiClockAfternoonDuotone;
        case "pi:PiClockClockwiseDuotone":
            return PiClockClockwiseDuotone;
        case "pi:PiClockCountdownDuotone":
            return PiClockCountdownDuotone;
        case "pi:PiClockCounterClockwiseDuotone":
            return PiClockCounterClockwiseDuotone;
        case "pi:PiClockDuotone":
            return PiClockDuotone;
        case "pi:PiClockUserDuotone":
            return PiClockUserDuotone;
        case "pi:PiClosedCaptioningDuotone":
            return PiClosedCaptioningDuotone;
        case "pi:PiCloudArrowDownDuotone":
            return PiCloudArrowDownDuotone;
        case "pi:PiCloudArrowUpDuotone":
            return PiCloudArrowUpDuotone;
        case "pi:PiCloudCheckDuotone":
            return PiCloudCheckDuotone;
        case "pi:PiCloudDuotone":
            return PiCloudDuotone;
        case "pi:PiCloudFogDuotone":
            return PiCloudFogDuotone;
        case "pi:PiCloudLightningDuotone":
            return PiCloudLightningDuotone;
        case "pi:PiCloudMoonDuotone":
            return PiCloudMoonDuotone;
        case "pi:PiCloudRainDuotone":
            return PiCloudRainDuotone;
        case "pi:PiCloudSlashDuotone":
            return PiCloudSlashDuotone;
        case "pi:PiCloudSnowDuotone":
            return PiCloudSnowDuotone;
        case "pi:PiCloudSunDuotone":
            return PiCloudSunDuotone;
        case "pi:PiCloudWarningDuotone":
            return PiCloudWarningDuotone;
        case "pi:PiCloudXDuotone":
            return PiCloudXDuotone;
        case "pi:PiCloverDuotone":
            return PiCloverDuotone;
        case "pi:PiClubDuotone":
            return PiClubDuotone;
        case "pi:PiCoatHangerDuotone":
            return PiCoatHangerDuotone;
        case "pi:PiCodaLogoDuotone":
            return PiCodaLogoDuotone;
        case "pi:PiCodeBlockDuotone":
            return PiCodeBlockDuotone;
        case "pi:PiCodeDuotone":
            return PiCodeDuotone;
        case "pi:PiCodeSimpleDuotone":
            return PiCodeSimpleDuotone;
        case "pi:PiCodepenLogoDuotone":
            return PiCodepenLogoDuotone;
        case "pi:PiCodesandboxLogoDuotone":
            return PiCodesandboxLogoDuotone;
        case "pi:PiCoffeeBeanDuotone":
            return PiCoffeeBeanDuotone;
        case "pi:PiCoffeeDuotone":
            return PiCoffeeDuotone;
        case "pi:PiCoinDuotone":
            return PiCoinDuotone;
        case "pi:PiCoinVerticalDuotone":
            return PiCoinVerticalDuotone;
        case "pi:PiCoinsDuotone":
            return PiCoinsDuotone;
        case "pi:PiColumnsDuotone":
            return PiColumnsDuotone;
        case "pi:PiColumnsPlusLeftDuotone":
            return PiColumnsPlusLeftDuotone;
        case "pi:PiColumnsPlusRightDuotone":
            return PiColumnsPlusRightDuotone;
        case "pi:PiCommandDuotone":
            return PiCommandDuotone;
        case "pi:PiCompassDuotone":
            return PiCompassDuotone;
        case "pi:PiCompassRoseDuotone":
            return PiCompassRoseDuotone;
        case "pi:PiCompassToolDuotone":
            return PiCompassToolDuotone;
        case "pi:PiComputerTowerDuotone":
            return PiComputerTowerDuotone;
        case "pi:PiConfettiDuotone":
            return PiConfettiDuotone;
        case "pi:PiContactlessPaymentDuotone":
            return PiContactlessPaymentDuotone;
        case "pi:PiControlDuotone":
            return PiControlDuotone;
        case "pi:PiCookieDuotone":
            return PiCookieDuotone;
        case "pi:PiCookingPotDuotone":
            return PiCookingPotDuotone;
        case "pi:PiCopyDuotone":
            return PiCopyDuotone;
        case "pi:PiCopySimpleDuotone":
            return PiCopySimpleDuotone;
        case "pi:PiCopyleftDuotone":
            return PiCopyleftDuotone;
        case "pi:PiCopyrightDuotone":
            return PiCopyrightDuotone;
        case "pi:PiCornersInDuotone":
            return PiCornersInDuotone;
        case "pi:PiCornersOutDuotone":
            return PiCornersOutDuotone;
        case "pi:PiCouchDuotone":
            return PiCouchDuotone;
        case "pi:PiCourtBasketballDuotone":
            return PiCourtBasketballDuotone;
        case "pi:PiCowDuotone":
            return PiCowDuotone;
        case "pi:PiCowboyHatDuotone":
            return PiCowboyHatDuotone;
        case "pi:PiCpuDuotone":
            return PiCpuDuotone;
        case "pi:PiCraneDuotone":
            return PiCraneDuotone;
        case "pi:PiCraneTowerDuotone":
            return PiCraneTowerDuotone;
        case "pi:PiCreditCardDuotone":
            return PiCreditCardDuotone;
        case "pi:PiCricketDuotone":
            return PiCricketDuotone;
        case "pi:PiCropDuotone":
            return PiCropDuotone;
        case "pi:PiCrossDuotone":
            return PiCrossDuotone;
        case "pi:PiCrosshairDuotone":
            return PiCrosshairDuotone;
        case "pi:PiCrosshairSimpleDuotone":
            return PiCrosshairSimpleDuotone;
        case "pi:PiCrownCrossDuotone":
            return PiCrownCrossDuotone;
        case "pi:PiCrownDuotone":
            return PiCrownDuotone;
        case "pi:PiCrownSimpleDuotone":
            return PiCrownSimpleDuotone;
        case "pi:PiCubeDuotone":
            return PiCubeDuotone;
        case "pi:PiCubeFocusDuotone":
            return PiCubeFocusDuotone;
        case "pi:PiCubeTransparentDuotone":
            return PiCubeTransparentDuotone;
        case "pi:PiCurrencyBtcDuotone":
            return PiCurrencyBtcDuotone;
        case "pi:PiCurrencyCircleDollarDuotone":
            return PiCurrencyCircleDollarDuotone;
        case "pi:PiCurrencyCnyDuotone":
            return PiCurrencyCnyDuotone;
        case "pi:PiCurrencyDollarDuotone":
            return PiCurrencyDollarDuotone;
        case "pi:PiCurrencyDollarSimpleDuotone":
            return PiCurrencyDollarSimpleDuotone;
        case "pi:PiCurrencyEthDuotone":
            return PiCurrencyEthDuotone;
        case "pi:PiCurrencyEurDuotone":
            return PiCurrencyEurDuotone;
        case "pi:PiCurrencyGbpDuotone":
            return PiCurrencyGbpDuotone;
        case "pi:PiCurrencyInrDuotone":
            return PiCurrencyInrDuotone;
        case "pi:PiCurrencyJpyDuotone":
            return PiCurrencyJpyDuotone;
        case "pi:PiCurrencyKrwDuotone":
            return PiCurrencyKrwDuotone;
        case "pi:PiCurrencyKztDuotone":
            return PiCurrencyKztDuotone;
        case "pi:PiCurrencyNgnDuotone":
            return PiCurrencyNgnDuotone;
        case "pi:PiCurrencyRubDuotone":
            return PiCurrencyRubDuotone;
        case "pi:PiCursorClickDuotone":
            return PiCursorClickDuotone;
        case "pi:PiCursorDuotone":
            return PiCursorDuotone;
        case "pi:PiCursorTextDuotone":
            return PiCursorTextDuotone;
        case "pi:PiCylinderDuotone":
            return PiCylinderDuotone;
        case "pi:PiDatabaseDuotone":
            return PiDatabaseDuotone;
        case "pi:PiDeskDuotone":
            return PiDeskDuotone;
        case "pi:PiDesktopDuotone":
            return PiDesktopDuotone;
        case "pi:PiDesktopTowerDuotone":
            return PiDesktopTowerDuotone;
        case "pi:PiDetectiveDuotone":
            return PiDetectiveDuotone;
        case "pi:PiDevToLogoDuotone":
            return PiDevToLogoDuotone;
        case "pi:PiDeviceMobileCameraDuotone":
            return PiDeviceMobileCameraDuotone;
        case "pi:PiDeviceMobileDuotone":
            return PiDeviceMobileDuotone;
        case "pi:PiDeviceMobileSlashDuotone":
            return PiDeviceMobileSlashDuotone;
        case "pi:PiDeviceMobileSpeakerDuotone":
            return PiDeviceMobileSpeakerDuotone;
        case "pi:PiDeviceRotateDuotone":
            return PiDeviceRotateDuotone;
        case "pi:PiDeviceTabletCameraDuotone":
            return PiDeviceTabletCameraDuotone;
        case "pi:PiDeviceTabletDuotone":
            return PiDeviceTabletDuotone;
        case "pi:PiDeviceTabletSpeakerDuotone":
            return PiDeviceTabletSpeakerDuotone;
        case "pi:PiDevicesDuotone":
            return PiDevicesDuotone;
        case "pi:PiDiamondDuotone":
            return PiDiamondDuotone;
        case "pi:PiDiamondsFourDuotone":
            return PiDiamondsFourDuotone;
        case "pi:PiDiceFiveDuotone":
            return PiDiceFiveDuotone;
        case "pi:PiDiceFourDuotone":
            return PiDiceFourDuotone;
        case "pi:PiDiceOneDuotone":
            return PiDiceOneDuotone;
    }
}
