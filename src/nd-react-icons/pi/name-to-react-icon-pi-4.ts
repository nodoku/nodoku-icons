import type {IconType} from "react-icons";

import {
    PiNumberSquareEightFill,
    PiNumberSquareFiveFill,
    PiNumberSquareFourFill,
    PiNumberSquareNineFill,
    PiNumberSquareOneFill,
    PiNumberSquareSevenFill,
    PiNumberSquareSixFill,
    PiNumberSquareThreeFill,
    PiNumberSquareTwoFill,
    PiNumberSquareZeroFill,
    PiNumberThreeFill,
    PiNumberTwoFill,
    PiNumberZeroFill,
    PiNumpadFill,
    PiNutFill,
    PiNyTimesLogoFill,
    PiOctagonFill,
    PiOfficeChairFill,
    PiOnigiriFill,
    PiOpenAiLogoFill,
    PiOptionFill,
    PiOrangeFill,
    PiOrangeSliceFill,
    PiOvenFill,
    PiPackageFill,
    PiPaintBrushBroadFill,
    PiPaintBrushFill,
    PiPaintBrushHouseholdFill,
    PiPaintBucketFill,
    PiPaintRollerFill,
    PiPaletteFill,
    PiPanoramaFill,
    PiPantsFill,
    PiPaperPlaneFill,
    PiPaperPlaneRightFill,
    PiPaperPlaneTiltFill,
    PiPaperclipFill,
    PiPaperclipHorizontalFill,
    PiParachuteFill,
    PiParagraphFill,
    PiParallelogramFill,
    PiParkFill,
    PiPasswordFill,
    PiPathFill,
    PiPatreonLogoFill,
    PiPauseCircleFill,
    PiPauseFill,
    PiPawPrintFill,
    PiPaypalLogoFill,
    PiPeaceFill,
    PiPenFill,
    PiPenNibFill,
    PiPenNibStraightFill,
    PiPencilCircleFill,
    PiPencilFill,
    PiPencilLineFill,
    PiPencilRulerFill,
    PiPencilSimpleFill,
    PiPencilSimpleLineFill,
    PiPencilSimpleSlashFill,
    PiPencilSlashFill,
    PiPentagonFill,
    PiPentagramFill,
    PiPepperFill,
    PiPercentFill,
    PiPersonArmsSpreadFill,
    PiPersonFill,
    PiPersonSimpleBikeFill,
    PiPersonSimpleCircleFill,
    PiPersonSimpleFill,
    PiPersonSimpleHikeFill,
    PiPersonSimpleRunFill,
    PiPersonSimpleSkiFill,
    PiPersonSimpleSnowboardFill,
    PiPersonSimpleSwimFill,
    PiPersonSimpleTaiChiFill,
    PiPersonSimpleThrowFill,
    PiPersonSimpleWalkFill,
    PiPerspectiveFill,
    PiPhoneCallFill,
    PiPhoneDisconnectFill,
    PiPhoneFill,
    PiPhoneIncomingFill,
    PiPhoneListFill,
    PiPhoneOutgoingFill,
    PiPhonePauseFill,
    PiPhonePlusFill,
    PiPhoneSlashFill,
    PiPhoneTransferFill,
    PiPhoneXFill,
    PiPhosphorLogoFill,
    PiPiFill,
    PiPianoKeysFill,
    PiPicnicTableFill,
    PiPictureInPictureFill,
    PiPiggyBankFill,
    PiPillFill,
    PiPingPongFill,
    PiPintGlassFill,
    PiPinterestLogoFill,
    PiPinwheelFill,
    PiPipeFill,
    PiPipeWrenchFill,
    PiPixLogoFill,
    PiPizzaFill,
    PiPlaceholderFill,
    PiPlanetFill,
    PiPlantFill,
    PiPlayCircleFill,
    PiPlayFill,
    PiPlayPauseFill,
    PiPlaylistFill,
    PiPlugChargingFill,
    PiPlugFill,
    PiPlugsConnectedFill,
    PiPlugsFill,
    PiPlusCircleFill,
    PiPlusFill,
    PiPlusMinusFill,
    PiPlusSquareFill,
    PiPokerChipFill,
    PiPoliceCarFill,
    PiPolygonFill,
    PiPopcornFill,
    PiPopsicleFill,
    PiPottedPlantFill,
    PiPowerFill,
    PiPrescriptionFill,
    PiPresentationChartFill,
    PiPresentationFill,
    PiPrinterFill,
    PiProhibitFill,
    PiProhibitInsetFill,
    PiProjectorScreenChartFill,
    PiProjectorScreenFill,
    PiPulseFill,
    PiPushPinFill,
    PiPushPinSimpleFill,
    PiPushPinSimpleSlashFill,
    PiPushPinSlashFill,
    PiPuzzlePieceFill,
    PiQrCodeFill,
    PiQuestionFill,
    PiQuestionMarkFill,
    PiQueueFill,
    PiQuotesFill,
    PiRabbitFill,
    PiRacquetFill,
    PiRadicalFill,
    PiRadioButtonFill,
    PiRadioFill,
    PiRadioactiveFill,
    PiRainbowCloudFill,
    PiRainbowFill,
    PiRankingFill,
    PiReadCvLogoFill,
    PiReceiptFill,
    PiReceiptXFill,
    PiRecordFill,
    PiRectangleDashedFill,
    PiRectangleFill,
    PiRecycleFill,
    PiRedditLogoFill,
    PiRepeatFill,
    PiRepeatOnceFill,
    PiReplitLogoFill,
    PiResizeFill,
    PiRewindCircleFill,
    PiRewindFill,
    PiRoadHorizonFill,
    PiRobotFill,
    PiRocketFill,
    PiRocketLaunchFill,
    PiRowsFill,
    PiRowsPlusBottomFill,
    PiRowsPlusTopFill,
    PiRssFill,
    PiRssSimpleFill,
    PiRugFill,
    PiRulerFill,
    PiSailboatFill,
    PiScalesFill,
    PiScanFill,
    PiScanSmileyFill,
    PiScissorsFill,
    PiScooterFill,
    PiScreencastFill,
    PiScrewdriverFill,
    PiScribbleFill,
    PiScribbleLoopFill,
    PiScrollFill,
    PiSealCheckFill,
    PiSealFill,
    PiSealPercentFill,
    PiSealQuestionFill,
    PiSealWarningFill,
    PiSeatFill,
    PiSeatbeltFill,
    PiSecurityCameraFill,
    PiSelectionAllFill,
    PiSelectionBackgroundFill,
    PiSelectionFill,
    PiSelectionForegroundFill,
    PiSelectionInverseFill,
    PiSelectionPlusFill,
    PiSelectionSlashFill,
    PiShapesFill,
    PiShareFatFill,
    PiShareFill,
    PiShareNetworkFill,
    PiShieldCheckFill,
    PiShieldCheckeredFill,
    PiShieldChevronFill,
    PiShieldFill,
    PiShieldPlusFill,
    PiShieldSlashFill,
    PiShieldStarFill,
    PiShieldWarningFill,
    PiShippingContainerFill,
    PiShirtFoldedFill,
    PiShootingStarFill,
    PiShoppingBagFill,
    PiShoppingBagOpenFill,
    PiShoppingCartFill,
    PiShoppingCartSimpleFill,
    PiShovelFill,
    PiShowerFill,
    PiShrimpFill,
    PiShuffleAngularFill,
    PiShuffleFill,
    PiShuffleSimpleFill,
    PiSidebarFill,
    PiSidebarSimpleFill,
    PiSigmaFill,
    PiSignInFill,
    PiSignOutFill,
    PiSignatureFill,
    PiSignpostFill,
    PiSimCardFill,
    PiSirenFill,
    PiSketchLogoFill,
    PiSkipBackCircleFill,
    PiSkipBackFill,
    PiSkipForwardCircleFill,
    PiSkipForwardFill,
    PiSkullFill,
    PiSkypeLogoFill,
    PiSlackLogoFill,
    PiSlidersFill,
    PiSlidersHorizontalFill,
    PiSlideshowFill,
    PiSmileyAngryFill,
    PiSmileyBlankFill,
    PiSmileyFill,
    PiSmileyMehFill,
    PiSmileyMeltingFill,
    PiSmileyNervousFill,
    PiSmileySadFill,
    PiSmileyStickerFill,
    PiSmileyWinkFill,
    PiSmileyXEyesFill,
    PiSnapchatLogoFill,
    PiSneakerFill,
    PiSneakerMoveFill,
    PiSnowflakeFill,
    PiSoccerBallFill,
    PiSockFill,
    PiSolarPanelFill,
    PiSolarRoofFill,
    PiSortAscendingFill,
    PiSortDescendingFill,
    PiSoundcloudLogoFill,
    PiSpadeFill,
    PiSparkleFill,
    PiSpeakerHifiFill,
    PiSpeakerHighFill,
    PiSpeakerLowFill,
    PiSpeakerNoneFill,
    PiSpeakerSimpleHighFill,
    PiSpeakerSimpleLowFill,
    PiSpeakerSimpleNoneFill,
    PiSpeakerSimpleSlashFill,
    PiSpeakerSimpleXFill,
    PiSpeakerSlashFill,
    PiSpeakerXFill,
    PiSpeedometerFill,
    PiSphereFill,
    PiSpinnerBallFill,
    PiSpinnerFill,
    PiSpinnerGapFill,
    PiSpiralFill,
    PiSplitHorizontalFill,
    PiSplitVerticalFill,
    PiSpotifyLogoFill,
    PiSprayBottleFill,
    PiSquareFill,
    PiSquareHalfBottomFill,
    PiSquareHalfFill,
    PiSquareLogoFill,
    PiSquareSplitHorizontalFill,
    PiSquareSplitVerticalFill,
    PiSquaresFourFill,
    PiStackFill,
    PiStackMinusFill,
    PiStackOverflowLogoFill,
    PiStackPlusFill,
    PiStackSimpleFill,
    PiStairsFill,
    PiStampFill,
    PiStandardDefinitionFill,
    PiStarAndCrescentFill,
    PiStarFill,
    PiStarFourFill,
    PiStarHalfFill,
    PiStarOfDavidFill,
    PiSteamLogoFill,
    PiSteeringWheelFill,
    PiStepsFill,
    PiStethoscopeFill,
    PiStickerFill,
    PiStoolFill,
    PiStopCircleFill,
    PiStopFill,
    PiStorefrontFill,
    PiStrategyFill,
    PiStripeLogoFill,
    PiStudentFill,
    PiSubsetOfFill,
    PiSubsetProperOfFill,
    PiSubtitlesFill,
    PiSubtitlesSlashFill,
    PiSubtractFill,
    PiSubtractSquareFill,
    PiSubwayFill,
    PiSuitcaseFill,
    PiSuitcaseRollingFill,
    PiSuitcaseSimpleFill,
    PiSunDimFill,
    PiSunFill,
    PiSunHorizonFill,
    PiSunglassesFill,
    PiSupersetOfFill,
    PiSupersetProperOfFill,
    PiSwapFill,
    PiSwatchesFill,
    PiSwimmingPoolFill,
    PiSwordFill,
    PiSynagogueFill,
    PiSyringeFill,
    PiTShirtFill,
    PiTableFill,
    PiTabsFill,
    PiTagChevronFill,
    PiTagFill,
    PiTagSimpleFill,
    PiTargetFill,
    PiTaxiFill,
    PiTeaBagFill,
    PiTelegramLogoFill,
    PiTelevisionFill,
    PiTelevisionSimpleFill,
    PiTennisBallFill,
    PiTentFill,
    PiTerminalFill,
    PiTerminalWindowFill,
    PiTestTubeFill,
    PiTextAUnderlineFill,
    PiTextAaFill,
    PiTextAlignCenterFill,
    PiTextAlignJustifyFill,
    PiTextAlignLeftFill,
    PiTextAlignRightFill,
    PiTextBFill,
    PiTextColumnsFill,
    PiTextHFill,
    PiTextHFiveFill,
    PiTextHFourFill,
    PiTextHOneFill,
    PiTextHSixFill,
    PiTextHThreeFill,
    PiTextHTwoFill,
    PiTextIndentFill,
    PiTextItalicFill,
    PiTextOutdentFill,
    PiTextStrikethroughFill,
    PiTextSubscriptFill,
    PiTextSuperscriptFill,
    PiTextTFill,
    PiTextTSlashFill,
    PiTextUnderlineFill,
    PiTextboxFill,
    PiThermometerColdFill,
    PiThermometerFill,
    PiThermometerHotFill,
    PiThermometerSimpleFill,
    PiThreadsLogoFill,
    PiThreeDFill,
    PiThumbsDownFill,
    PiThumbsUpFill,
    PiTicketFill,
    PiTidalLogoFill,
    PiTiktokLogoFill,
    PiTildeFill,
    PiTimerFill,
    PiTipJarFill,
    PiTipiFill,
    PiTireFill,
    PiToggleLeftFill,
    PiToggleRightFill,
    PiToiletFill,
    PiToiletPaperFill,
    PiToolboxFill,
    PiToothFill,
    PiTornadoFill,
    PiToteFill,
    PiToteSimpleFill,
    PiTowelFill,
    PiTractorFill,
    PiTrademarkFill,
    PiTrademarkRegisteredFill,
    PiTrafficConeFill,
    PiTrafficSignFill,
    PiTrafficSignalFill,
    PiTrainFill,
    PiTrainRegionalFill,
    PiTrainSimpleFill,
    PiTramFill,
    PiTranslateFill,
    PiTrashFill,
    PiTrashSimpleFill,
    PiTrayArrowDownFill,
    PiTrayArrowUpFill,
    PiTrayFill,
    PiTreasureChestFill,
    PiTreeEvergreenFill,
    PiTreeFill,
    PiTreePalmFill,
    PiTreeStructureFill,
    PiTreeViewFill,
    PiTrendDownFill,
    PiTrendUpFill,
    PiTriangleDashedFill,
    PiTriangleFill,
    PiTrolleyFill,
    PiTrolleySuitcaseFill,
    PiTrophyFill,
    PiTruckFill,
    PiTruckTrailerFill,
    PiTumblrLogoFill,
    PiTwitchLogoFill,
    PiTwitterLogoFill,
    PiUmbrellaFill,
    PiUmbrellaSimpleFill,
    PiUnionFill,
    PiUniteFill,
    PiUniteSquareFill,
    PiUploadFill,
    PiUploadSimpleFill,
    PiUsbFill,
    PiUserCheckFill,
    PiUserCircleCheckFill,
    PiUserCircleDashedFill,
    PiUserCircleFill,
    PiUserCircleGearFill,
    PiUserCircleMinusFill,
    PiUserCirclePlusFill,
    PiUserFill,
    PiUserFocusFill,
    PiUserGearFill,
    PiUserListFill,
    PiUserMinusFill,
    PiUserPlusFill,
    PiUserRectangleFill,
    PiUserSoundFill,
    PiUserSquareFill,
    PiUserSwitchFill,
    PiUsersFill,
    PiUsersFourFill,
    PiUsersThreeFill,
    PiVanFill,
    PiVaultFill,
    PiVectorThreeFill,
    PiVectorTwoFill,
    PiVibrateFill,
    PiVideoCameraFill,
    PiVideoCameraSlashFill,
    PiVideoConferenceFill,
    PiVideoFill,
    PiVignetteFill,
    PiVinylRecordFill,
    PiVirtualRealityFill,
    PiVirusFill,
    PiVisorFill,
    PiVoicemailFill,
    PiVolleyballFill,
    PiWallFill,
    PiWalletFill,
    PiWarehouseFill,
    PiWarningCircleFill,
    PiWarningDiamondFill,
    PiWarningFill,
    PiWarningOctagonFill,
    PiWashingMachineFill,
    PiWatchFill,
    PiWaveSawtoothFill,
    PiWaveSineFill,
    PiWaveSquareFill,
    PiWaveTriangleFill,
    PiWaveformFill,
    PiWaveformSlashFill,
    PiWavesFill,
    PiWebcamFill,
    PiWebcamSlashFill,
    PiWebhooksLogoFill,
    PiWechatLogoFill,
    PiWhatsappLogoFill,
    PiWheelchairFill,
    PiWheelchairMotionFill,
    PiWifiHighFill,
    PiWifiLowFill,
    PiWifiMediumFill,
    PiWifiNoneFill,
    PiWifiSlashFill,
    PiWifiXFill,
    PiWindFill,
    PiWindmillFill,
    PiWindowsLogoFill,
    PiWineFill,
    PiWrenchFill,
    PiXCircleFill,
    PiXFill,
    PiXLogoFill,
    PiXSquareFill,
    PiYarnFill,
    PiYinYangFill,
    PiYoutubeLogoFill,
    PiAcornLight,
    PiAddressBookLight,
    PiAddressBookTabsLight,
    PiAirTrafficControlLight,
    PiAirplaneInFlightLight,
    PiAirplaneLandingLight,
    PiAirplaneLight,
    PiAirplaneTakeoffLight,
    PiAirplaneTaxiingLight,
    PiAirplaneTiltLight,
    PiAirplayLight,
    PiAlarmLight,
    PiAlienLight,
    PiAlignBottomLight,
    PiAlignBottomSimpleLight,
    PiAlignCenterHorizontalLight,
    PiAlignCenterHorizontalSimpleLight,
    PiAlignCenterVerticalLight,
    PiAlignCenterVerticalSimpleLight,
    PiAlignLeftLight,
    PiAlignLeftSimpleLight,
    PiAlignRightLight,
    PiAlignRightSimpleLight,
    PiAlignTopLight,
    PiAlignTopSimpleLight,
    PiAmazonLogoLight,
    PiAmbulanceLight,
    PiAnchorLight,
    PiAnchorSimpleLight,
    PiAndroidLogoLight,
    PiAngleLight,
    PiAngularLogoLight,
    PiApertureLight,
    PiAppStoreLogoLight,
    PiAppWindowLight,
    PiAppleLogoLight,
    PiApplePodcastsLogoLight,
    PiApproximateEqualsLight,
    PiArchiveLight,
    PiArmchairLight,
    PiArrowArcLeftLight,
    PiArrowArcRightLight,
    PiArrowBendDoubleUpLeftLight,
    PiArrowBendDoubleUpRightLight,
    PiArrowBendDownLeftLight,
    PiArrowBendDownRightLight,
    PiArrowBendLeftDownLight,
    PiArrowBendLeftUpLight,
    PiArrowBendRightDownLight,
    PiArrowBendRightUpLight,
    PiArrowBendUpLeftLight,
    PiArrowBendUpRightLight,
    PiArrowCircleDownLeftLight,
    PiArrowCircleDownLight,
    PiArrowCircleDownRightLight,
    PiArrowCircleLeftLight,
    PiArrowCircleRightLight,
    PiArrowCircleUpLeftLight,
    PiArrowCircleUpLight,
    PiArrowCircleUpRightLight,
    PiArrowClockwiseLight,
    PiArrowCounterClockwiseLight,
    PiArrowDownLeftLight,
    PiArrowDownLight,
    PiArrowDownRightLight,
    PiArrowElbowDownLeftLight,
    PiArrowElbowDownRightLight,
    PiArrowElbowLeftDownLight,
    PiArrowElbowLeftLight,
    PiArrowElbowLeftUpLight,
    PiArrowElbowRightDownLight,
    PiArrowElbowRightLight,
    PiArrowElbowRightUpLight,
    PiArrowElbowUpLeftLight,
    PiArrowElbowUpRightLight,
    PiArrowFatDownLight,
    PiArrowFatLeftLight,
    PiArrowFatLineDownLight,
    PiArrowFatLineLeftLight,
    PiArrowFatLineRightLight,
    PiArrowFatLineUpLight,
    PiArrowFatLinesDownLight,
    PiArrowFatLinesLeftLight,
    PiArrowFatLinesRightLight,
    PiArrowFatLinesUpLight,
    PiArrowFatRightLight,
    PiArrowFatUpLight,
    PiArrowLeftLight,
    PiArrowLineDownLeftLight,
    PiArrowLineDownLight,
    PiArrowLineDownRightLight,
    PiArrowLineLeftLight,
    PiArrowLineRightLight,
    PiArrowLineUpLeftLight,
    PiArrowLineUpLight,
    PiArrowLineUpRightLight,
    PiArrowRightLight,
    PiArrowSquareDownLeftLight,
    PiArrowSquareDownLight,
    PiArrowSquareDownRightLight,
    PiArrowSquareInLight,
    PiArrowSquareLeftLight,
    PiArrowSquareOutLight,
    PiArrowSquareRightLight,
    PiArrowSquareUpLeftLight,
    PiArrowSquareUpLight,
    PiArrowSquareUpRightLight,
    PiArrowUDownLeftLight,
    PiArrowUDownRightLight,
    PiArrowULeftDownLight,
    PiArrowULeftUpLight,
    PiArrowURightDownLight,
    PiArrowURightUpLight,
    PiArrowUUpLeftLight,
    PiArrowUUpRightLight,
    PiArrowUpLeftLight,
    PiArrowUpLight,
    PiArrowUpRightLight,
    PiArrowsClockwiseLight,
    PiArrowsCounterClockwiseLight,
    PiArrowsDownUpLight,
    PiArrowsHorizontalLight,
    PiArrowsInCardinalLight,
    PiArrowsInLight,
    PiArrowsInLineHorizontalLight,
    PiArrowsInLineVerticalLight,
    PiArrowsInSimpleLight,
    PiArrowsLeftRightLight,
    PiArrowsMergeLight,
    PiArrowsOutCardinalLight,
    PiArrowsOutLight,
    PiArrowsOutLineHorizontalLight,
    PiArrowsOutLineVerticalLight,
    PiArrowsOutSimpleLight,
    PiArrowsSplitLight,
    PiArrowsVerticalLight,
    PiArticleLight,
    PiArticleMediumLight,
    PiArticleNyTimesLight,
    PiAsclepiusLight,
    PiAsteriskLight,
    PiAsteriskSimpleLight,
    PiAtLight,
    PiAtomLight,
    PiAvocadoLight,
    PiAxeLight,
    PiBabyCarriageLight,
    PiBabyLight,
    PiBackpackLight,
    PiBackspaceLight,
    PiBagLight,
    PiBagSimpleLight,
    PiBalloonLight,
    PiBandaidsLight,
    PiBankLight,
    PiBarbellLight,
    PiBarcodeLight,
    PiBarnLight,
    PiBarricadeLight,
    PiBaseballCapLight,
    PiBaseballHelmetLight,
    PiBaseballLight,
    PiBasketLight,
    PiBasketballLight,
    PiBathtubLight,
    PiBatteryChargingLight,
    PiBatteryChargingVerticalLight,
    PiBatteryEmptyLight,
    PiBatteryFullLight,
    PiBatteryHighLight,
    PiBatteryLowLight,
    PiBatteryMediumLight,
    PiBatteryPlusLight,
    PiBatteryPlusVerticalLight,
    PiBatteryVerticalEmptyLight,
    PiBatteryVerticalFullLight,
    PiBatteryVerticalHighLight,
    PiBatteryVerticalLowLight,
    PiBatteryVerticalMediumLight,
    PiBatteryWarningLight,
    PiBatteryWarningVerticalLight,
    PiBeachBallLight,
    PiBeanieLight,
    PiBedLight,
    PiBeerBottleLight,
    PiBeerSteinLight,
    PiBehanceLogoLight,
    PiBellLight,
    PiBellRingingLight,
    PiBellSimpleLight,
    PiBellSimpleRingingLight,
    PiBellSimpleSlashLight,
    PiBellSimpleZLight,
    PiBellSlashLight,
    PiBellZLight,
    PiBeltLight,
    PiBezierCurveLight,
    PiBicycleLight,
    PiBinaryLight,
    PiBinocularsLight,
    PiBiohazardLight,
    PiBirdLight,
    PiBlueprintLight,
    PiBluetoothConnectedLight,
    PiBluetoothLight,
    PiBluetoothSlashLight,
    PiBluetoothXLight,
    PiBoatLight,
    PiBombLight,
    PiBoneLight,
    PiBookBookmarkLight,
    PiBookLight,
    PiBookOpenLight,
    PiBookOpenTextLight,
    PiBookOpenUserLight,
    PiBookmarkLight,
    PiBookmarkSimpleLight,
    PiBookmarksLight,
    PiBookmarksSimpleLight,
    PiBooksLight,
    PiBootLight,
    PiBoulesLight,
    PiBoundingBoxLight,
    PiBowlFoodLight,
    PiBowlSteamLight,
    PiBowlingBallLight,
    PiBoxArrowDownLight,
    PiBoxArrowUpLight,
    PiBoxingGloveLight,
    PiBracketsAngleLight,
    PiBracketsCurlyLight,
    PiBracketsRoundLight,
    PiBracketsSquareLight,
    PiBrainLight,
    PiBrandyLight,
    PiBreadLight,
    PiBridgeLight,
    PiBriefcaseLight,
    PiBriefcaseMetalLight,
    PiBroadcastLight,
    PiBroomLight,
    PiBrowserLight,
    PiBrowsersLight,
    PiBugBeetleLight,
    PiBugDroidLight,
    PiBugLight,
    PiBuildingApartmentLight,
    PiBuildingLight,
    PiBuildingOfficeLight,
    PiBuildingsLight,
    PiBulldozerLight,
    PiBusLight,
    PiButterflyLight,
    PiCableCarLight,
    PiCactusLight,
    PiCakeLight,
    PiCalculatorLight,
    PiCalendarBlankLight,
    PiCalendarCheckLight,
    PiCalendarDotLight,
    PiCalendarDotsLight,
    PiCalendarHeartLight,
    PiCalendarLight,
    PiCalendarMinusLight,
    PiCalendarPlusLight,
    PiCalendarSlashLight,
    PiCalendarStarLight,
    PiCalendarXLight,
    PiCallBellLight,
    PiCameraLight,
    PiCameraPlusLight,
    PiCameraRotateLight,
    PiCameraSlashLight,
    PiCampfireLight,
    PiCarBatteryLight,
    PiCarLight,
    PiCarProfileLight,
    PiCarSimpleLight,
    PiCardholderLight,
    PiCardsLight,
    PiCardsThreeLight,
    PiCaretCircleDoubleDownLight,
    PiCaretCircleDoubleLeftLight,
    PiCaretCircleDoubleRightLight,
    PiCaretCircleDoubleUpLight,
    PiCaretCircleDownLight,
    PiCaretCircleLeftLight,
    PiCaretCircleRightLight,
    PiCaretCircleUpDownLight,
    PiCaretCircleUpLight,
    PiCaretDoubleDownLight,
    PiCaretDoubleLeftLight,
    PiCaretDoubleRightLight,
    PiCaretDoubleUpLight,
    PiCaretDownLight,
    PiCaretLeftLight,
    PiCaretLineDownLight,
    PiCaretLineLeftLight,
    PiCaretLineRightLight,
    PiCaretLineUpLight,
    PiCaretRightLight,
    PiCaretUpDownLight,
    PiCaretUpLight,
    PiCarrotLight,
    PiCashRegisterLight,
    PiCassetteTapeLight,
    PiCastleTurretLight,
    PiCatLight,
    PiCellSignalFullLight,
    PiCellSignalHighLight,
    PiCellSignalLowLight,
    PiCellSignalMediumLight,
    PiCellSignalNoneLight,
    PiCellSignalSlashLight,
    PiCellSignalXLight,
    PiCellTowerLight,
    PiCertificateLight,
    PiChairLight,
    PiChalkboardLight,
    PiChalkboardSimpleLight,
    PiChalkboardTeacherLight,
    PiChampagneLight,
    PiChargingStationLight,
    PiChartBarHorizontalLight,
    PiChartBarLight,
    PiChartDonutLight,
    PiChartLineDownLight,
    PiChartLineLight,
    PiChartLineUpLight,
    PiChartPieLight,
    PiChartPieSliceLight,
    PiChartPolarLight,
    PiChartScatterLight,
    PiChatCenteredDotsLight,
    PiChatCenteredLight,
    PiChatCenteredSlashLight,
    PiChatCenteredTextLight,
    PiChatCircleDotsLight,
    PiChatCircleLight,
    PiChatCircleSlashLight,
    PiChatCircleTextLight,
    PiChatDotsLight,
    PiChatLight,
    PiChatSlashLight,
    PiChatTeardropDotsLight,
    PiChatTeardropLight,
    PiChatTeardropSlashLight,
    PiChatTeardropTextLight,
    PiChatTextLight,
    PiChatsCircleLight,
    PiChatsLight,
    PiChatsTeardropLight,
    PiCheckCircleLight,
    PiCheckFatLight,
    PiCheckLight,
    PiCheckSquareLight,
    PiCheckSquareOffsetLight,
    PiCheckerboardLight,
    PiChecksLight,
    PiCheersLight,
    PiCheeseLight,
    PiChefHatLight,
    PiCherriesLight,
    PiChurchLight,
    PiCigaretteLight,
    PiCigaretteSlashLight,
    PiCircleDashedLight,
    PiCircleHalfLight,
    PiCircleHalfTiltLight,
    PiCircleLight,
    PiCircleNotchLight,
    PiCirclesFourLight,
    PiCirclesThreeLight,
    PiCirclesThreePlusLight,
    PiCircuitryLight,
    PiCityLight,
    PiClipboardLight,
    PiClipboardTextLight,
    PiClockAfternoonLight,
    PiClockClockwiseLight,
    PiClockCountdownLight,
    PiClockCounterClockwiseLight,
    PiClockLight,
    PiClockUserLight,
    PiClosedCaptioningLight,
    PiCloudArrowDownLight,
    PiCloudArrowUpLight,
    PiCloudCheckLight,
    PiCloudFogLight,
    PiCloudLight,
    PiCloudLightningLight,
    PiCloudMoonLight,
    PiCloudRainLight,
    PiCloudSlashLight,
    PiCloudSnowLight,
    PiCloudSunLight,
    PiCloudWarningLight,
    PiCloudXLight,
    PiCloverLight,
    PiClubLight,
    PiCoatHangerLight,
    PiCodaLogoLight,
    PiCodeBlockLight,
    PiCodeLight,
    PiCodeSimpleLight,
    PiCodepenLogoLight,
    PiCodesandboxLogoLight,
    PiCoffeeBeanLight,
    PiCoffeeLight,
    PiCoinLight,
    PiCoinVerticalLight,
    PiCoinsLight,
    PiColumnsLight,
    PiColumnsPlusLeftLight,
    PiColumnsPlusRightLight,
    PiCommandLight,
    PiCompassLight,
    PiCompassRoseLight,
    PiCompassToolLight,
    PiComputerTowerLight,
    PiConfettiLight,
    PiContactlessPaymentLight,
    PiControlLight,
    PiCookieLight,
    PiCookingPotLight,
    PiCopyLight,
    PiCopySimpleLight,
    PiCopyleftLight,
    PiCopyrightLight,
    PiCornersInLight,
    PiCornersOutLight,
    PiCouchLight,
    PiCourtBasketballLight,
    PiCowLight,
    PiCowboyHatLight,
    PiCpuLight,
    PiCraneLight,
    PiCraneTowerLight,
    PiCreditCardLight,
    PiCricketLight,
    PiCropLight,
    PiCrossLight,
    PiCrosshairLight,
    PiCrosshairSimpleLight,
    PiCrownCrossLight,
    PiCrownLight,
    PiCrownSimpleLight,
    PiCubeFocusLight,
    PiCubeLight,
    PiCubeTransparentLight,
    PiCurrencyBtcLight,
    PiCurrencyCircleDollarLight,
    PiCurrencyCnyLight,
    PiCurrencyDollarLight,
    PiCurrencyDollarSimpleLight,
    PiCurrencyEthLight,
    PiCurrencyEurLight,
    PiCurrencyGbpLight,
    PiCurrencyInrLight,
    PiCurrencyJpyLight,
    PiCurrencyKrwLight,
    PiCurrencyKztLight,
    PiCurrencyNgnLight,
    PiCurrencyRubLight,
} from "react-icons/pi"

export function nameToReactIcon_pi_4(iconName: string): IconType | undefined {

    switch(iconName) {
        case "pi:PiNumberSquareEightFill":
            return PiNumberSquareEightFill;
        case "pi:PiNumberSquareFiveFill":
            return PiNumberSquareFiveFill;
        case "pi:PiNumberSquareFourFill":
            return PiNumberSquareFourFill;
        case "pi:PiNumberSquareNineFill":
            return PiNumberSquareNineFill;
        case "pi:PiNumberSquareOneFill":
            return PiNumberSquareOneFill;
        case "pi:PiNumberSquareSevenFill":
            return PiNumberSquareSevenFill;
        case "pi:PiNumberSquareSixFill":
            return PiNumberSquareSixFill;
        case "pi:PiNumberSquareThreeFill":
            return PiNumberSquareThreeFill;
        case "pi:PiNumberSquareTwoFill":
            return PiNumberSquareTwoFill;
        case "pi:PiNumberSquareZeroFill":
            return PiNumberSquareZeroFill;
        case "pi:PiNumberThreeFill":
            return PiNumberThreeFill;
        case "pi:PiNumberTwoFill":
            return PiNumberTwoFill;
        case "pi:PiNumberZeroFill":
            return PiNumberZeroFill;
        case "pi:PiNumpadFill":
            return PiNumpadFill;
        case "pi:PiNutFill":
            return PiNutFill;
        case "pi:PiNyTimesLogoFill":
            return PiNyTimesLogoFill;
        case "pi:PiOctagonFill":
            return PiOctagonFill;
        case "pi:PiOfficeChairFill":
            return PiOfficeChairFill;
        case "pi:PiOnigiriFill":
            return PiOnigiriFill;
        case "pi:PiOpenAiLogoFill":
            return PiOpenAiLogoFill;
        case "pi:PiOptionFill":
            return PiOptionFill;
        case "pi:PiOrangeFill":
            return PiOrangeFill;
        case "pi:PiOrangeSliceFill":
            return PiOrangeSliceFill;
        case "pi:PiOvenFill":
            return PiOvenFill;
        case "pi:PiPackageFill":
            return PiPackageFill;
        case "pi:PiPaintBrushBroadFill":
            return PiPaintBrushBroadFill;
        case "pi:PiPaintBrushFill":
            return PiPaintBrushFill;
        case "pi:PiPaintBrushHouseholdFill":
            return PiPaintBrushHouseholdFill;
        case "pi:PiPaintBucketFill":
            return PiPaintBucketFill;
        case "pi:PiPaintRollerFill":
            return PiPaintRollerFill;
        case "pi:PiPaletteFill":
            return PiPaletteFill;
        case "pi:PiPanoramaFill":
            return PiPanoramaFill;
        case "pi:PiPantsFill":
            return PiPantsFill;
        case "pi:PiPaperPlaneFill":
            return PiPaperPlaneFill;
        case "pi:PiPaperPlaneRightFill":
            return PiPaperPlaneRightFill;
        case "pi:PiPaperPlaneTiltFill":
            return PiPaperPlaneTiltFill;
        case "pi:PiPaperclipFill":
            return PiPaperclipFill;
        case "pi:PiPaperclipHorizontalFill":
            return PiPaperclipHorizontalFill;
        case "pi:PiParachuteFill":
            return PiParachuteFill;
        case "pi:PiParagraphFill":
            return PiParagraphFill;
        case "pi:PiParallelogramFill":
            return PiParallelogramFill;
        case "pi:PiParkFill":
            return PiParkFill;
        case "pi:PiPasswordFill":
            return PiPasswordFill;
        case "pi:PiPathFill":
            return PiPathFill;
        case "pi:PiPatreonLogoFill":
            return PiPatreonLogoFill;
        case "pi:PiPauseCircleFill":
            return PiPauseCircleFill;
        case "pi:PiPauseFill":
            return PiPauseFill;
        case "pi:PiPawPrintFill":
            return PiPawPrintFill;
        case "pi:PiPaypalLogoFill":
            return PiPaypalLogoFill;
        case "pi:PiPeaceFill":
            return PiPeaceFill;
        case "pi:PiPenFill":
            return PiPenFill;
        case "pi:PiPenNibFill":
            return PiPenNibFill;
        case "pi:PiPenNibStraightFill":
            return PiPenNibStraightFill;
        case "pi:PiPencilCircleFill":
            return PiPencilCircleFill;
        case "pi:PiPencilFill":
            return PiPencilFill;
        case "pi:PiPencilLineFill":
            return PiPencilLineFill;
        case "pi:PiPencilRulerFill":
            return PiPencilRulerFill;
        case "pi:PiPencilSimpleFill":
            return PiPencilSimpleFill;
        case "pi:PiPencilSimpleLineFill":
            return PiPencilSimpleLineFill;
        case "pi:PiPencilSimpleSlashFill":
            return PiPencilSimpleSlashFill;
        case "pi:PiPencilSlashFill":
            return PiPencilSlashFill;
        case "pi:PiPentagonFill":
            return PiPentagonFill;
        case "pi:PiPentagramFill":
            return PiPentagramFill;
        case "pi:PiPepperFill":
            return PiPepperFill;
        case "pi:PiPercentFill":
            return PiPercentFill;
        case "pi:PiPersonArmsSpreadFill":
            return PiPersonArmsSpreadFill;
        case "pi:PiPersonFill":
            return PiPersonFill;
        case "pi:PiPersonSimpleBikeFill":
            return PiPersonSimpleBikeFill;
        case "pi:PiPersonSimpleCircleFill":
            return PiPersonSimpleCircleFill;
        case "pi:PiPersonSimpleFill":
            return PiPersonSimpleFill;
        case "pi:PiPersonSimpleHikeFill":
            return PiPersonSimpleHikeFill;
        case "pi:PiPersonSimpleRunFill":
            return PiPersonSimpleRunFill;
        case "pi:PiPersonSimpleSkiFill":
            return PiPersonSimpleSkiFill;
        case "pi:PiPersonSimpleSnowboardFill":
            return PiPersonSimpleSnowboardFill;
        case "pi:PiPersonSimpleSwimFill":
            return PiPersonSimpleSwimFill;
        case "pi:PiPersonSimpleTaiChiFill":
            return PiPersonSimpleTaiChiFill;
        case "pi:PiPersonSimpleThrowFill":
            return PiPersonSimpleThrowFill;
        case "pi:PiPersonSimpleWalkFill":
            return PiPersonSimpleWalkFill;
        case "pi:PiPerspectiveFill":
            return PiPerspectiveFill;
        case "pi:PiPhoneCallFill":
            return PiPhoneCallFill;
        case "pi:PiPhoneDisconnectFill":
            return PiPhoneDisconnectFill;
        case "pi:PiPhoneFill":
            return PiPhoneFill;
        case "pi:PiPhoneIncomingFill":
            return PiPhoneIncomingFill;
        case "pi:PiPhoneListFill":
            return PiPhoneListFill;
        case "pi:PiPhoneOutgoingFill":
            return PiPhoneOutgoingFill;
        case "pi:PiPhonePauseFill":
            return PiPhonePauseFill;
        case "pi:PiPhonePlusFill":
            return PiPhonePlusFill;
        case "pi:PiPhoneSlashFill":
            return PiPhoneSlashFill;
        case "pi:PiPhoneTransferFill":
            return PiPhoneTransferFill;
        case "pi:PiPhoneXFill":
            return PiPhoneXFill;
        case "pi:PiPhosphorLogoFill":
            return PiPhosphorLogoFill;
        case "pi:PiPiFill":
            return PiPiFill;
        case "pi:PiPianoKeysFill":
            return PiPianoKeysFill;
        case "pi:PiPicnicTableFill":
            return PiPicnicTableFill;
        case "pi:PiPictureInPictureFill":
            return PiPictureInPictureFill;
        case "pi:PiPiggyBankFill":
            return PiPiggyBankFill;
        case "pi:PiPillFill":
            return PiPillFill;
        case "pi:PiPingPongFill":
            return PiPingPongFill;
        case "pi:PiPintGlassFill":
            return PiPintGlassFill;
        case "pi:PiPinterestLogoFill":
            return PiPinterestLogoFill;
        case "pi:PiPinwheelFill":
            return PiPinwheelFill;
        case "pi:PiPipeFill":
            return PiPipeFill;
        case "pi:PiPipeWrenchFill":
            return PiPipeWrenchFill;
        case "pi:PiPixLogoFill":
            return PiPixLogoFill;
        case "pi:PiPizzaFill":
            return PiPizzaFill;
        case "pi:PiPlaceholderFill":
            return PiPlaceholderFill;
        case "pi:PiPlanetFill":
            return PiPlanetFill;
        case "pi:PiPlantFill":
            return PiPlantFill;
        case "pi:PiPlayCircleFill":
            return PiPlayCircleFill;
        case "pi:PiPlayFill":
            return PiPlayFill;
        case "pi:PiPlayPauseFill":
            return PiPlayPauseFill;
        case "pi:PiPlaylistFill":
            return PiPlaylistFill;
        case "pi:PiPlugChargingFill":
            return PiPlugChargingFill;
        case "pi:PiPlugFill":
            return PiPlugFill;
        case "pi:PiPlugsConnectedFill":
            return PiPlugsConnectedFill;
        case "pi:PiPlugsFill":
            return PiPlugsFill;
        case "pi:PiPlusCircleFill":
            return PiPlusCircleFill;
        case "pi:PiPlusFill":
            return PiPlusFill;
        case "pi:PiPlusMinusFill":
            return PiPlusMinusFill;
        case "pi:PiPlusSquareFill":
            return PiPlusSquareFill;
        case "pi:PiPokerChipFill":
            return PiPokerChipFill;
        case "pi:PiPoliceCarFill":
            return PiPoliceCarFill;
        case "pi:PiPolygonFill":
            return PiPolygonFill;
        case "pi:PiPopcornFill":
            return PiPopcornFill;
        case "pi:PiPopsicleFill":
            return PiPopsicleFill;
        case "pi:PiPottedPlantFill":
            return PiPottedPlantFill;
        case "pi:PiPowerFill":
            return PiPowerFill;
        case "pi:PiPrescriptionFill":
            return PiPrescriptionFill;
        case "pi:PiPresentationChartFill":
            return PiPresentationChartFill;
        case "pi:PiPresentationFill":
            return PiPresentationFill;
        case "pi:PiPrinterFill":
            return PiPrinterFill;
        case "pi:PiProhibitFill":
            return PiProhibitFill;
        case "pi:PiProhibitInsetFill":
            return PiProhibitInsetFill;
        case "pi:PiProjectorScreenChartFill":
            return PiProjectorScreenChartFill;
        case "pi:PiProjectorScreenFill":
            return PiProjectorScreenFill;
        case "pi:PiPulseFill":
            return PiPulseFill;
        case "pi:PiPushPinFill":
            return PiPushPinFill;
        case "pi:PiPushPinSimpleFill":
            return PiPushPinSimpleFill;
        case "pi:PiPushPinSimpleSlashFill":
            return PiPushPinSimpleSlashFill;
        case "pi:PiPushPinSlashFill":
            return PiPushPinSlashFill;
        case "pi:PiPuzzlePieceFill":
            return PiPuzzlePieceFill;
        case "pi:PiQrCodeFill":
            return PiQrCodeFill;
        case "pi:PiQuestionFill":
            return PiQuestionFill;
        case "pi:PiQuestionMarkFill":
            return PiQuestionMarkFill;
        case "pi:PiQueueFill":
            return PiQueueFill;
        case "pi:PiQuotesFill":
            return PiQuotesFill;
        case "pi:PiRabbitFill":
            return PiRabbitFill;
        case "pi:PiRacquetFill":
            return PiRacquetFill;
        case "pi:PiRadicalFill":
            return PiRadicalFill;
        case "pi:PiRadioButtonFill":
            return PiRadioButtonFill;
        case "pi:PiRadioFill":
            return PiRadioFill;
        case "pi:PiRadioactiveFill":
            return PiRadioactiveFill;
        case "pi:PiRainbowCloudFill":
            return PiRainbowCloudFill;
        case "pi:PiRainbowFill":
            return PiRainbowFill;
        case "pi:PiRankingFill":
            return PiRankingFill;
        case "pi:PiReadCvLogoFill":
            return PiReadCvLogoFill;
        case "pi:PiReceiptFill":
            return PiReceiptFill;
        case "pi:PiReceiptXFill":
            return PiReceiptXFill;
        case "pi:PiRecordFill":
            return PiRecordFill;
        case "pi:PiRectangleDashedFill":
            return PiRectangleDashedFill;
        case "pi:PiRectangleFill":
            return PiRectangleFill;
        case "pi:PiRecycleFill":
            return PiRecycleFill;
        case "pi:PiRedditLogoFill":
            return PiRedditLogoFill;
        case "pi:PiRepeatFill":
            return PiRepeatFill;
        case "pi:PiRepeatOnceFill":
            return PiRepeatOnceFill;
        case "pi:PiReplitLogoFill":
            return PiReplitLogoFill;
        case "pi:PiResizeFill":
            return PiResizeFill;
        case "pi:PiRewindCircleFill":
            return PiRewindCircleFill;
        case "pi:PiRewindFill":
            return PiRewindFill;
        case "pi:PiRoadHorizonFill":
            return PiRoadHorizonFill;
        case "pi:PiRobotFill":
            return PiRobotFill;
        case "pi:PiRocketFill":
            return PiRocketFill;
        case "pi:PiRocketLaunchFill":
            return PiRocketLaunchFill;
        case "pi:PiRowsFill":
            return PiRowsFill;
        case "pi:PiRowsPlusBottomFill":
            return PiRowsPlusBottomFill;
        case "pi:PiRowsPlusTopFill":
            return PiRowsPlusTopFill;
        case "pi:PiRssFill":
            return PiRssFill;
        case "pi:PiRssSimpleFill":
            return PiRssSimpleFill;
        case "pi:PiRugFill":
            return PiRugFill;
        case "pi:PiRulerFill":
            return PiRulerFill;
        case "pi:PiSailboatFill":
            return PiSailboatFill;
        case "pi:PiScalesFill":
            return PiScalesFill;
        case "pi:PiScanFill":
            return PiScanFill;
        case "pi:PiScanSmileyFill":
            return PiScanSmileyFill;
        case "pi:PiScissorsFill":
            return PiScissorsFill;
        case "pi:PiScooterFill":
            return PiScooterFill;
        case "pi:PiScreencastFill":
            return PiScreencastFill;
        case "pi:PiScrewdriverFill":
            return PiScrewdriverFill;
        case "pi:PiScribbleFill":
            return PiScribbleFill;
        case "pi:PiScribbleLoopFill":
            return PiScribbleLoopFill;
        case "pi:PiScrollFill":
            return PiScrollFill;
        case "pi:PiSealCheckFill":
            return PiSealCheckFill;
        case "pi:PiSealFill":
            return PiSealFill;
        case "pi:PiSealPercentFill":
            return PiSealPercentFill;
        case "pi:PiSealQuestionFill":
            return PiSealQuestionFill;
        case "pi:PiSealWarningFill":
            return PiSealWarningFill;
        case "pi:PiSeatFill":
            return PiSeatFill;
        case "pi:PiSeatbeltFill":
            return PiSeatbeltFill;
        case "pi:PiSecurityCameraFill":
            return PiSecurityCameraFill;
        case "pi:PiSelectionAllFill":
            return PiSelectionAllFill;
        case "pi:PiSelectionBackgroundFill":
            return PiSelectionBackgroundFill;
        case "pi:PiSelectionFill":
            return PiSelectionFill;
        case "pi:PiSelectionForegroundFill":
            return PiSelectionForegroundFill;
        case "pi:PiSelectionInverseFill":
            return PiSelectionInverseFill;
        case "pi:PiSelectionPlusFill":
            return PiSelectionPlusFill;
        case "pi:PiSelectionSlashFill":
            return PiSelectionSlashFill;
        case "pi:PiShapesFill":
            return PiShapesFill;
        case "pi:PiShareFatFill":
            return PiShareFatFill;
        case "pi:PiShareFill":
            return PiShareFill;
        case "pi:PiShareNetworkFill":
            return PiShareNetworkFill;
        case "pi:PiShieldCheckFill":
            return PiShieldCheckFill;
        case "pi:PiShieldCheckeredFill":
            return PiShieldCheckeredFill;
        case "pi:PiShieldChevronFill":
            return PiShieldChevronFill;
        case "pi:PiShieldFill":
            return PiShieldFill;
        case "pi:PiShieldPlusFill":
            return PiShieldPlusFill;
        case "pi:PiShieldSlashFill":
            return PiShieldSlashFill;
        case "pi:PiShieldStarFill":
            return PiShieldStarFill;
        case "pi:PiShieldWarningFill":
            return PiShieldWarningFill;
        case "pi:PiShippingContainerFill":
            return PiShippingContainerFill;
        case "pi:PiShirtFoldedFill":
            return PiShirtFoldedFill;
        case "pi:PiShootingStarFill":
            return PiShootingStarFill;
        case "pi:PiShoppingBagFill":
            return PiShoppingBagFill;
        case "pi:PiShoppingBagOpenFill":
            return PiShoppingBagOpenFill;
        case "pi:PiShoppingCartFill":
            return PiShoppingCartFill;
        case "pi:PiShoppingCartSimpleFill":
            return PiShoppingCartSimpleFill;
        case "pi:PiShovelFill":
            return PiShovelFill;
        case "pi:PiShowerFill":
            return PiShowerFill;
        case "pi:PiShrimpFill":
            return PiShrimpFill;
        case "pi:PiShuffleAngularFill":
            return PiShuffleAngularFill;
        case "pi:PiShuffleFill":
            return PiShuffleFill;
        case "pi:PiShuffleSimpleFill":
            return PiShuffleSimpleFill;
        case "pi:PiSidebarFill":
            return PiSidebarFill;
        case "pi:PiSidebarSimpleFill":
            return PiSidebarSimpleFill;
        case "pi:PiSigmaFill":
            return PiSigmaFill;
        case "pi:PiSignInFill":
            return PiSignInFill;
        case "pi:PiSignOutFill":
            return PiSignOutFill;
        case "pi:PiSignatureFill":
            return PiSignatureFill;
        case "pi:PiSignpostFill":
            return PiSignpostFill;
        case "pi:PiSimCardFill":
            return PiSimCardFill;
        case "pi:PiSirenFill":
            return PiSirenFill;
        case "pi:PiSketchLogoFill":
            return PiSketchLogoFill;
        case "pi:PiSkipBackCircleFill":
            return PiSkipBackCircleFill;
        case "pi:PiSkipBackFill":
            return PiSkipBackFill;
        case "pi:PiSkipForwardCircleFill":
            return PiSkipForwardCircleFill;
        case "pi:PiSkipForwardFill":
            return PiSkipForwardFill;
        case "pi:PiSkullFill":
            return PiSkullFill;
        case "pi:PiSkypeLogoFill":
            return PiSkypeLogoFill;
        case "pi:PiSlackLogoFill":
            return PiSlackLogoFill;
        case "pi:PiSlidersFill":
            return PiSlidersFill;
        case "pi:PiSlidersHorizontalFill":
            return PiSlidersHorizontalFill;
        case "pi:PiSlideshowFill":
            return PiSlideshowFill;
        case "pi:PiSmileyAngryFill":
            return PiSmileyAngryFill;
        case "pi:PiSmileyBlankFill":
            return PiSmileyBlankFill;
        case "pi:PiSmileyFill":
            return PiSmileyFill;
        case "pi:PiSmileyMehFill":
            return PiSmileyMehFill;
        case "pi:PiSmileyMeltingFill":
            return PiSmileyMeltingFill;
        case "pi:PiSmileyNervousFill":
            return PiSmileyNervousFill;
        case "pi:PiSmileySadFill":
            return PiSmileySadFill;
        case "pi:PiSmileyStickerFill":
            return PiSmileyStickerFill;
        case "pi:PiSmileyWinkFill":
            return PiSmileyWinkFill;
        case "pi:PiSmileyXEyesFill":
            return PiSmileyXEyesFill;
        case "pi:PiSnapchatLogoFill":
            return PiSnapchatLogoFill;
        case "pi:PiSneakerFill":
            return PiSneakerFill;
        case "pi:PiSneakerMoveFill":
            return PiSneakerMoveFill;
        case "pi:PiSnowflakeFill":
            return PiSnowflakeFill;
        case "pi:PiSoccerBallFill":
            return PiSoccerBallFill;
        case "pi:PiSockFill":
            return PiSockFill;
        case "pi:PiSolarPanelFill":
            return PiSolarPanelFill;
        case "pi:PiSolarRoofFill":
            return PiSolarRoofFill;
        case "pi:PiSortAscendingFill":
            return PiSortAscendingFill;
        case "pi:PiSortDescendingFill":
            return PiSortDescendingFill;
        case "pi:PiSoundcloudLogoFill":
            return PiSoundcloudLogoFill;
        case "pi:PiSpadeFill":
            return PiSpadeFill;
        case "pi:PiSparkleFill":
            return PiSparkleFill;
        case "pi:PiSpeakerHifiFill":
            return PiSpeakerHifiFill;
        case "pi:PiSpeakerHighFill":
            return PiSpeakerHighFill;
        case "pi:PiSpeakerLowFill":
            return PiSpeakerLowFill;
        case "pi:PiSpeakerNoneFill":
            return PiSpeakerNoneFill;
        case "pi:PiSpeakerSimpleHighFill":
            return PiSpeakerSimpleHighFill;
        case "pi:PiSpeakerSimpleLowFill":
            return PiSpeakerSimpleLowFill;
        case "pi:PiSpeakerSimpleNoneFill":
            return PiSpeakerSimpleNoneFill;
        case "pi:PiSpeakerSimpleSlashFill":
            return PiSpeakerSimpleSlashFill;
        case "pi:PiSpeakerSimpleXFill":
            return PiSpeakerSimpleXFill;
        case "pi:PiSpeakerSlashFill":
            return PiSpeakerSlashFill;
        case "pi:PiSpeakerXFill":
            return PiSpeakerXFill;
        case "pi:PiSpeedometerFill":
            return PiSpeedometerFill;
        case "pi:PiSphereFill":
            return PiSphereFill;
        case "pi:PiSpinnerBallFill":
            return PiSpinnerBallFill;
        case "pi:PiSpinnerFill":
            return PiSpinnerFill;
        case "pi:PiSpinnerGapFill":
            return PiSpinnerGapFill;
        case "pi:PiSpiralFill":
            return PiSpiralFill;
        case "pi:PiSplitHorizontalFill":
            return PiSplitHorizontalFill;
        case "pi:PiSplitVerticalFill":
            return PiSplitVerticalFill;
        case "pi:PiSpotifyLogoFill":
            return PiSpotifyLogoFill;
        case "pi:PiSprayBottleFill":
            return PiSprayBottleFill;
        case "pi:PiSquareFill":
            return PiSquareFill;
        case "pi:PiSquareHalfBottomFill":
            return PiSquareHalfBottomFill;
        case "pi:PiSquareHalfFill":
            return PiSquareHalfFill;
        case "pi:PiSquareLogoFill":
            return PiSquareLogoFill;
        case "pi:PiSquareSplitHorizontalFill":
            return PiSquareSplitHorizontalFill;
        case "pi:PiSquareSplitVerticalFill":
            return PiSquareSplitVerticalFill;
        case "pi:PiSquaresFourFill":
            return PiSquaresFourFill;
        case "pi:PiStackFill":
            return PiStackFill;
        case "pi:PiStackMinusFill":
            return PiStackMinusFill;
        case "pi:PiStackOverflowLogoFill":
            return PiStackOverflowLogoFill;
        case "pi:PiStackPlusFill":
            return PiStackPlusFill;
        case "pi:PiStackSimpleFill":
            return PiStackSimpleFill;
        case "pi:PiStairsFill":
            return PiStairsFill;
        case "pi:PiStampFill":
            return PiStampFill;
        case "pi:PiStandardDefinitionFill":
            return PiStandardDefinitionFill;
        case "pi:PiStarAndCrescentFill":
            return PiStarAndCrescentFill;
        case "pi:PiStarFill":
            return PiStarFill;
        case "pi:PiStarFourFill":
            return PiStarFourFill;
        case "pi:PiStarHalfFill":
            return PiStarHalfFill;
        case "pi:PiStarOfDavidFill":
            return PiStarOfDavidFill;
        case "pi:PiSteamLogoFill":
            return PiSteamLogoFill;
        case "pi:PiSteeringWheelFill":
            return PiSteeringWheelFill;
        case "pi:PiStepsFill":
            return PiStepsFill;
        case "pi:PiStethoscopeFill":
            return PiStethoscopeFill;
        case "pi:PiStickerFill":
            return PiStickerFill;
        case "pi:PiStoolFill":
            return PiStoolFill;
        case "pi:PiStopCircleFill":
            return PiStopCircleFill;
        case "pi:PiStopFill":
            return PiStopFill;
        case "pi:PiStorefrontFill":
            return PiStorefrontFill;
        case "pi:PiStrategyFill":
            return PiStrategyFill;
        case "pi:PiStripeLogoFill":
            return PiStripeLogoFill;
        case "pi:PiStudentFill":
            return PiStudentFill;
        case "pi:PiSubsetOfFill":
            return PiSubsetOfFill;
        case "pi:PiSubsetProperOfFill":
            return PiSubsetProperOfFill;
        case "pi:PiSubtitlesFill":
            return PiSubtitlesFill;
        case "pi:PiSubtitlesSlashFill":
            return PiSubtitlesSlashFill;
        case "pi:PiSubtractFill":
            return PiSubtractFill;
        case "pi:PiSubtractSquareFill":
            return PiSubtractSquareFill;
        case "pi:PiSubwayFill":
            return PiSubwayFill;
        case "pi:PiSuitcaseFill":
            return PiSuitcaseFill;
        case "pi:PiSuitcaseRollingFill":
            return PiSuitcaseRollingFill;
        case "pi:PiSuitcaseSimpleFill":
            return PiSuitcaseSimpleFill;
        case "pi:PiSunDimFill":
            return PiSunDimFill;
        case "pi:PiSunFill":
            return PiSunFill;
        case "pi:PiSunHorizonFill":
            return PiSunHorizonFill;
        case "pi:PiSunglassesFill":
            return PiSunglassesFill;
        case "pi:PiSupersetOfFill":
            return PiSupersetOfFill;
        case "pi:PiSupersetProperOfFill":
            return PiSupersetProperOfFill;
        case "pi:PiSwapFill":
            return PiSwapFill;
        case "pi:PiSwatchesFill":
            return PiSwatchesFill;
        case "pi:PiSwimmingPoolFill":
            return PiSwimmingPoolFill;
        case "pi:PiSwordFill":
            return PiSwordFill;
        case "pi:PiSynagogueFill":
            return PiSynagogueFill;
        case "pi:PiSyringeFill":
            return PiSyringeFill;
        case "pi:PiTShirtFill":
            return PiTShirtFill;
        case "pi:PiTableFill":
            return PiTableFill;
        case "pi:PiTabsFill":
            return PiTabsFill;
        case "pi:PiTagChevronFill":
            return PiTagChevronFill;
        case "pi:PiTagFill":
            return PiTagFill;
        case "pi:PiTagSimpleFill":
            return PiTagSimpleFill;
        case "pi:PiTargetFill":
            return PiTargetFill;
        case "pi:PiTaxiFill":
            return PiTaxiFill;
        case "pi:PiTeaBagFill":
            return PiTeaBagFill;
        case "pi:PiTelegramLogoFill":
            return PiTelegramLogoFill;
        case "pi:PiTelevisionFill":
            return PiTelevisionFill;
        case "pi:PiTelevisionSimpleFill":
            return PiTelevisionSimpleFill;
        case "pi:PiTennisBallFill":
            return PiTennisBallFill;
        case "pi:PiTentFill":
            return PiTentFill;
        case "pi:PiTerminalFill":
            return PiTerminalFill;
        case "pi:PiTerminalWindowFill":
            return PiTerminalWindowFill;
        case "pi:PiTestTubeFill":
            return PiTestTubeFill;
        case "pi:PiTextAUnderlineFill":
            return PiTextAUnderlineFill;
        case "pi:PiTextAaFill":
            return PiTextAaFill;
        case "pi:PiTextAlignCenterFill":
            return PiTextAlignCenterFill;
        case "pi:PiTextAlignJustifyFill":
            return PiTextAlignJustifyFill;
        case "pi:PiTextAlignLeftFill":
            return PiTextAlignLeftFill;
        case "pi:PiTextAlignRightFill":
            return PiTextAlignRightFill;
        case "pi:PiTextBFill":
            return PiTextBFill;
        case "pi:PiTextColumnsFill":
            return PiTextColumnsFill;
        case "pi:PiTextHFill":
            return PiTextHFill;
        case "pi:PiTextHFiveFill":
            return PiTextHFiveFill;
        case "pi:PiTextHFourFill":
            return PiTextHFourFill;
        case "pi:PiTextHOneFill":
            return PiTextHOneFill;
        case "pi:PiTextHSixFill":
            return PiTextHSixFill;
        case "pi:PiTextHThreeFill":
            return PiTextHThreeFill;
        case "pi:PiTextHTwoFill":
            return PiTextHTwoFill;
        case "pi:PiTextIndentFill":
            return PiTextIndentFill;
        case "pi:PiTextItalicFill":
            return PiTextItalicFill;
        case "pi:PiTextOutdentFill":
            return PiTextOutdentFill;
        case "pi:PiTextStrikethroughFill":
            return PiTextStrikethroughFill;
        case "pi:PiTextSubscriptFill":
            return PiTextSubscriptFill;
        case "pi:PiTextSuperscriptFill":
            return PiTextSuperscriptFill;
        case "pi:PiTextTFill":
            return PiTextTFill;
        case "pi:PiTextTSlashFill":
            return PiTextTSlashFill;
        case "pi:PiTextUnderlineFill":
            return PiTextUnderlineFill;
        case "pi:PiTextboxFill":
            return PiTextboxFill;
        case "pi:PiThermometerColdFill":
            return PiThermometerColdFill;
        case "pi:PiThermometerFill":
            return PiThermometerFill;
        case "pi:PiThermometerHotFill":
            return PiThermometerHotFill;
        case "pi:PiThermometerSimpleFill":
            return PiThermometerSimpleFill;
        case "pi:PiThreadsLogoFill":
            return PiThreadsLogoFill;
        case "pi:PiThreeDFill":
            return PiThreeDFill;
        case "pi:PiThumbsDownFill":
            return PiThumbsDownFill;
        case "pi:PiThumbsUpFill":
            return PiThumbsUpFill;
        case "pi:PiTicketFill":
            return PiTicketFill;
        case "pi:PiTidalLogoFill":
            return PiTidalLogoFill;
        case "pi:PiTiktokLogoFill":
            return PiTiktokLogoFill;
        case "pi:PiTildeFill":
            return PiTildeFill;
        case "pi:PiTimerFill":
            return PiTimerFill;
        case "pi:PiTipJarFill":
            return PiTipJarFill;
        case "pi:PiTipiFill":
            return PiTipiFill;
        case "pi:PiTireFill":
            return PiTireFill;
        case "pi:PiToggleLeftFill":
            return PiToggleLeftFill;
        case "pi:PiToggleRightFill":
            return PiToggleRightFill;
        case "pi:PiToiletFill":
            return PiToiletFill;
        case "pi:PiToiletPaperFill":
            return PiToiletPaperFill;
        case "pi:PiToolboxFill":
            return PiToolboxFill;
        case "pi:PiToothFill":
            return PiToothFill;
        case "pi:PiTornadoFill":
            return PiTornadoFill;
        case "pi:PiToteFill":
            return PiToteFill;
        case "pi:PiToteSimpleFill":
            return PiToteSimpleFill;
        case "pi:PiTowelFill":
            return PiTowelFill;
        case "pi:PiTractorFill":
            return PiTractorFill;
        case "pi:PiTrademarkFill":
            return PiTrademarkFill;
        case "pi:PiTrademarkRegisteredFill":
            return PiTrademarkRegisteredFill;
        case "pi:PiTrafficConeFill":
            return PiTrafficConeFill;
        case "pi:PiTrafficSignFill":
            return PiTrafficSignFill;
        case "pi:PiTrafficSignalFill":
            return PiTrafficSignalFill;
        case "pi:PiTrainFill":
            return PiTrainFill;
        case "pi:PiTrainRegionalFill":
            return PiTrainRegionalFill;
        case "pi:PiTrainSimpleFill":
            return PiTrainSimpleFill;
        case "pi:PiTramFill":
            return PiTramFill;
        case "pi:PiTranslateFill":
            return PiTranslateFill;
        case "pi:PiTrashFill":
            return PiTrashFill;
        case "pi:PiTrashSimpleFill":
            return PiTrashSimpleFill;
        case "pi:PiTrayArrowDownFill":
            return PiTrayArrowDownFill;
        case "pi:PiTrayArrowUpFill":
            return PiTrayArrowUpFill;
        case "pi:PiTrayFill":
            return PiTrayFill;
        case "pi:PiTreasureChestFill":
            return PiTreasureChestFill;
        case "pi:PiTreeEvergreenFill":
            return PiTreeEvergreenFill;
        case "pi:PiTreeFill":
            return PiTreeFill;
        case "pi:PiTreePalmFill":
            return PiTreePalmFill;
        case "pi:PiTreeStructureFill":
            return PiTreeStructureFill;
        case "pi:PiTreeViewFill":
            return PiTreeViewFill;
        case "pi:PiTrendDownFill":
            return PiTrendDownFill;
        case "pi:PiTrendUpFill":
            return PiTrendUpFill;
        case "pi:PiTriangleDashedFill":
            return PiTriangleDashedFill;
        case "pi:PiTriangleFill":
            return PiTriangleFill;
        case "pi:PiTrolleyFill":
            return PiTrolleyFill;
        case "pi:PiTrolleySuitcaseFill":
            return PiTrolleySuitcaseFill;
        case "pi:PiTrophyFill":
            return PiTrophyFill;
        case "pi:PiTruckFill":
            return PiTruckFill;
        case "pi:PiTruckTrailerFill":
            return PiTruckTrailerFill;
        case "pi:PiTumblrLogoFill":
            return PiTumblrLogoFill;
        case "pi:PiTwitchLogoFill":
            return PiTwitchLogoFill;
        case "pi:PiTwitterLogoFill":
            return PiTwitterLogoFill;
        case "pi:PiUmbrellaFill":
            return PiUmbrellaFill;
        case "pi:PiUmbrellaSimpleFill":
            return PiUmbrellaSimpleFill;
        case "pi:PiUnionFill":
            return PiUnionFill;
        case "pi:PiUniteFill":
            return PiUniteFill;
        case "pi:PiUniteSquareFill":
            return PiUniteSquareFill;
        case "pi:PiUploadFill":
            return PiUploadFill;
        case "pi:PiUploadSimpleFill":
            return PiUploadSimpleFill;
        case "pi:PiUsbFill":
            return PiUsbFill;
        case "pi:PiUserCheckFill":
            return PiUserCheckFill;
        case "pi:PiUserCircleCheckFill":
            return PiUserCircleCheckFill;
        case "pi:PiUserCircleDashedFill":
            return PiUserCircleDashedFill;
        case "pi:PiUserCircleFill":
            return PiUserCircleFill;
        case "pi:PiUserCircleGearFill":
            return PiUserCircleGearFill;
        case "pi:PiUserCircleMinusFill":
            return PiUserCircleMinusFill;
        case "pi:PiUserCirclePlusFill":
            return PiUserCirclePlusFill;
        case "pi:PiUserFill":
            return PiUserFill;
        case "pi:PiUserFocusFill":
            return PiUserFocusFill;
        case "pi:PiUserGearFill":
            return PiUserGearFill;
        case "pi:PiUserListFill":
            return PiUserListFill;
        case "pi:PiUserMinusFill":
            return PiUserMinusFill;
        case "pi:PiUserPlusFill":
            return PiUserPlusFill;
        case "pi:PiUserRectangleFill":
            return PiUserRectangleFill;
        case "pi:PiUserSoundFill":
            return PiUserSoundFill;
        case "pi:PiUserSquareFill":
            return PiUserSquareFill;
        case "pi:PiUserSwitchFill":
            return PiUserSwitchFill;
        case "pi:PiUsersFill":
            return PiUsersFill;
        case "pi:PiUsersFourFill":
            return PiUsersFourFill;
        case "pi:PiUsersThreeFill":
            return PiUsersThreeFill;
        case "pi:PiVanFill":
            return PiVanFill;
        case "pi:PiVaultFill":
            return PiVaultFill;
        case "pi:PiVectorThreeFill":
            return PiVectorThreeFill;
        case "pi:PiVectorTwoFill":
            return PiVectorTwoFill;
        case "pi:PiVibrateFill":
            return PiVibrateFill;
        case "pi:PiVideoCameraFill":
            return PiVideoCameraFill;
        case "pi:PiVideoCameraSlashFill":
            return PiVideoCameraSlashFill;
        case "pi:PiVideoConferenceFill":
            return PiVideoConferenceFill;
        case "pi:PiVideoFill":
            return PiVideoFill;
        case "pi:PiVignetteFill":
            return PiVignetteFill;
        case "pi:PiVinylRecordFill":
            return PiVinylRecordFill;
        case "pi:PiVirtualRealityFill":
            return PiVirtualRealityFill;
        case "pi:PiVirusFill":
            return PiVirusFill;
        case "pi:PiVisorFill":
            return PiVisorFill;
        case "pi:PiVoicemailFill":
            return PiVoicemailFill;
        case "pi:PiVolleyballFill":
            return PiVolleyballFill;
        case "pi:PiWallFill":
            return PiWallFill;
        case "pi:PiWalletFill":
            return PiWalletFill;
        case "pi:PiWarehouseFill":
            return PiWarehouseFill;
        case "pi:PiWarningCircleFill":
            return PiWarningCircleFill;
        case "pi:PiWarningDiamondFill":
            return PiWarningDiamondFill;
        case "pi:PiWarningFill":
            return PiWarningFill;
        case "pi:PiWarningOctagonFill":
            return PiWarningOctagonFill;
        case "pi:PiWashingMachineFill":
            return PiWashingMachineFill;
        case "pi:PiWatchFill":
            return PiWatchFill;
        case "pi:PiWaveSawtoothFill":
            return PiWaveSawtoothFill;
        case "pi:PiWaveSineFill":
            return PiWaveSineFill;
        case "pi:PiWaveSquareFill":
            return PiWaveSquareFill;
        case "pi:PiWaveTriangleFill":
            return PiWaveTriangleFill;
        case "pi:PiWaveformFill":
            return PiWaveformFill;
        case "pi:PiWaveformSlashFill":
            return PiWaveformSlashFill;
        case "pi:PiWavesFill":
            return PiWavesFill;
        case "pi:PiWebcamFill":
            return PiWebcamFill;
        case "pi:PiWebcamSlashFill":
            return PiWebcamSlashFill;
        case "pi:PiWebhooksLogoFill":
            return PiWebhooksLogoFill;
        case "pi:PiWechatLogoFill":
            return PiWechatLogoFill;
        case "pi:PiWhatsappLogoFill":
            return PiWhatsappLogoFill;
        case "pi:PiWheelchairFill":
            return PiWheelchairFill;
        case "pi:PiWheelchairMotionFill":
            return PiWheelchairMotionFill;
        case "pi:PiWifiHighFill":
            return PiWifiHighFill;
        case "pi:PiWifiLowFill":
            return PiWifiLowFill;
        case "pi:PiWifiMediumFill":
            return PiWifiMediumFill;
        case "pi:PiWifiNoneFill":
            return PiWifiNoneFill;
        case "pi:PiWifiSlashFill":
            return PiWifiSlashFill;
        case "pi:PiWifiXFill":
            return PiWifiXFill;
        case "pi:PiWindFill":
            return PiWindFill;
        case "pi:PiWindmillFill":
            return PiWindmillFill;
        case "pi:PiWindowsLogoFill":
            return PiWindowsLogoFill;
        case "pi:PiWineFill":
            return PiWineFill;
        case "pi:PiWrenchFill":
            return PiWrenchFill;
        case "pi:PiXCircleFill":
            return PiXCircleFill;
        case "pi:PiXFill":
            return PiXFill;
        case "pi:PiXLogoFill":
            return PiXLogoFill;
        case "pi:PiXSquareFill":
            return PiXSquareFill;
        case "pi:PiYarnFill":
            return PiYarnFill;
        case "pi:PiYinYangFill":
            return PiYinYangFill;
        case "pi:PiYoutubeLogoFill":
            return PiYoutubeLogoFill;
        case "pi:PiAcornLight":
            return PiAcornLight;
        case "pi:PiAddressBookLight":
            return PiAddressBookLight;
        case "pi:PiAddressBookTabsLight":
            return PiAddressBookTabsLight;
        case "pi:PiAirTrafficControlLight":
            return PiAirTrafficControlLight;
        case "pi:PiAirplaneInFlightLight":
            return PiAirplaneInFlightLight;
        case "pi:PiAirplaneLandingLight":
            return PiAirplaneLandingLight;
        case "pi:PiAirplaneLight":
            return PiAirplaneLight;
        case "pi:PiAirplaneTakeoffLight":
            return PiAirplaneTakeoffLight;
        case "pi:PiAirplaneTaxiingLight":
            return PiAirplaneTaxiingLight;
        case "pi:PiAirplaneTiltLight":
            return PiAirplaneTiltLight;
        case "pi:PiAirplayLight":
            return PiAirplayLight;
        case "pi:PiAlarmLight":
            return PiAlarmLight;
        case "pi:PiAlienLight":
            return PiAlienLight;
        case "pi:PiAlignBottomLight":
            return PiAlignBottomLight;
        case "pi:PiAlignBottomSimpleLight":
            return PiAlignBottomSimpleLight;
        case "pi:PiAlignCenterHorizontalLight":
            return PiAlignCenterHorizontalLight;
        case "pi:PiAlignCenterHorizontalSimpleLight":
            return PiAlignCenterHorizontalSimpleLight;
        case "pi:PiAlignCenterVerticalLight":
            return PiAlignCenterVerticalLight;
        case "pi:PiAlignCenterVerticalSimpleLight":
            return PiAlignCenterVerticalSimpleLight;
        case "pi:PiAlignLeftLight":
            return PiAlignLeftLight;
        case "pi:PiAlignLeftSimpleLight":
            return PiAlignLeftSimpleLight;
        case "pi:PiAlignRightLight":
            return PiAlignRightLight;
        case "pi:PiAlignRightSimpleLight":
            return PiAlignRightSimpleLight;
        case "pi:PiAlignTopLight":
            return PiAlignTopLight;
        case "pi:PiAlignTopSimpleLight":
            return PiAlignTopSimpleLight;
        case "pi:PiAmazonLogoLight":
            return PiAmazonLogoLight;
        case "pi:PiAmbulanceLight":
            return PiAmbulanceLight;
        case "pi:PiAnchorLight":
            return PiAnchorLight;
        case "pi:PiAnchorSimpleLight":
            return PiAnchorSimpleLight;
        case "pi:PiAndroidLogoLight":
            return PiAndroidLogoLight;
        case "pi:PiAngleLight":
            return PiAngleLight;
        case "pi:PiAngularLogoLight":
            return PiAngularLogoLight;
        case "pi:PiApertureLight":
            return PiApertureLight;
        case "pi:PiAppStoreLogoLight":
            return PiAppStoreLogoLight;
        case "pi:PiAppWindowLight":
            return PiAppWindowLight;
        case "pi:PiAppleLogoLight":
            return PiAppleLogoLight;
        case "pi:PiApplePodcastsLogoLight":
            return PiApplePodcastsLogoLight;
        case "pi:PiApproximateEqualsLight":
            return PiApproximateEqualsLight;
        case "pi:PiArchiveLight":
            return PiArchiveLight;
        case "pi:PiArmchairLight":
            return PiArmchairLight;
        case "pi:PiArrowArcLeftLight":
            return PiArrowArcLeftLight;
        case "pi:PiArrowArcRightLight":
            return PiArrowArcRightLight;
        case "pi:PiArrowBendDoubleUpLeftLight":
            return PiArrowBendDoubleUpLeftLight;
        case "pi:PiArrowBendDoubleUpRightLight":
            return PiArrowBendDoubleUpRightLight;
        case "pi:PiArrowBendDownLeftLight":
            return PiArrowBendDownLeftLight;
        case "pi:PiArrowBendDownRightLight":
            return PiArrowBendDownRightLight;
        case "pi:PiArrowBendLeftDownLight":
            return PiArrowBendLeftDownLight;
        case "pi:PiArrowBendLeftUpLight":
            return PiArrowBendLeftUpLight;
        case "pi:PiArrowBendRightDownLight":
            return PiArrowBendRightDownLight;
        case "pi:PiArrowBendRightUpLight":
            return PiArrowBendRightUpLight;
        case "pi:PiArrowBendUpLeftLight":
            return PiArrowBendUpLeftLight;
        case "pi:PiArrowBendUpRightLight":
            return PiArrowBendUpRightLight;
        case "pi:PiArrowCircleDownLeftLight":
            return PiArrowCircleDownLeftLight;
        case "pi:PiArrowCircleDownLight":
            return PiArrowCircleDownLight;
        case "pi:PiArrowCircleDownRightLight":
            return PiArrowCircleDownRightLight;
        case "pi:PiArrowCircleLeftLight":
            return PiArrowCircleLeftLight;
        case "pi:PiArrowCircleRightLight":
            return PiArrowCircleRightLight;
        case "pi:PiArrowCircleUpLeftLight":
            return PiArrowCircleUpLeftLight;
        case "pi:PiArrowCircleUpLight":
            return PiArrowCircleUpLight;
        case "pi:PiArrowCircleUpRightLight":
            return PiArrowCircleUpRightLight;
        case "pi:PiArrowClockwiseLight":
            return PiArrowClockwiseLight;
        case "pi:PiArrowCounterClockwiseLight":
            return PiArrowCounterClockwiseLight;
        case "pi:PiArrowDownLeftLight":
            return PiArrowDownLeftLight;
        case "pi:PiArrowDownLight":
            return PiArrowDownLight;
        case "pi:PiArrowDownRightLight":
            return PiArrowDownRightLight;
        case "pi:PiArrowElbowDownLeftLight":
            return PiArrowElbowDownLeftLight;
        case "pi:PiArrowElbowDownRightLight":
            return PiArrowElbowDownRightLight;
        case "pi:PiArrowElbowLeftDownLight":
            return PiArrowElbowLeftDownLight;
        case "pi:PiArrowElbowLeftLight":
            return PiArrowElbowLeftLight;
        case "pi:PiArrowElbowLeftUpLight":
            return PiArrowElbowLeftUpLight;
        case "pi:PiArrowElbowRightDownLight":
            return PiArrowElbowRightDownLight;
        case "pi:PiArrowElbowRightLight":
            return PiArrowElbowRightLight;
        case "pi:PiArrowElbowRightUpLight":
            return PiArrowElbowRightUpLight;
        case "pi:PiArrowElbowUpLeftLight":
            return PiArrowElbowUpLeftLight;
        case "pi:PiArrowElbowUpRightLight":
            return PiArrowElbowUpRightLight;
        case "pi:PiArrowFatDownLight":
            return PiArrowFatDownLight;
        case "pi:PiArrowFatLeftLight":
            return PiArrowFatLeftLight;
        case "pi:PiArrowFatLineDownLight":
            return PiArrowFatLineDownLight;
        case "pi:PiArrowFatLineLeftLight":
            return PiArrowFatLineLeftLight;
        case "pi:PiArrowFatLineRightLight":
            return PiArrowFatLineRightLight;
        case "pi:PiArrowFatLineUpLight":
            return PiArrowFatLineUpLight;
        case "pi:PiArrowFatLinesDownLight":
            return PiArrowFatLinesDownLight;
        case "pi:PiArrowFatLinesLeftLight":
            return PiArrowFatLinesLeftLight;
        case "pi:PiArrowFatLinesRightLight":
            return PiArrowFatLinesRightLight;
        case "pi:PiArrowFatLinesUpLight":
            return PiArrowFatLinesUpLight;
        case "pi:PiArrowFatRightLight":
            return PiArrowFatRightLight;
        case "pi:PiArrowFatUpLight":
            return PiArrowFatUpLight;
        case "pi:PiArrowLeftLight":
            return PiArrowLeftLight;
        case "pi:PiArrowLineDownLeftLight":
            return PiArrowLineDownLeftLight;
        case "pi:PiArrowLineDownLight":
            return PiArrowLineDownLight;
        case "pi:PiArrowLineDownRightLight":
            return PiArrowLineDownRightLight;
        case "pi:PiArrowLineLeftLight":
            return PiArrowLineLeftLight;
        case "pi:PiArrowLineRightLight":
            return PiArrowLineRightLight;
        case "pi:PiArrowLineUpLeftLight":
            return PiArrowLineUpLeftLight;
        case "pi:PiArrowLineUpLight":
            return PiArrowLineUpLight;
        case "pi:PiArrowLineUpRightLight":
            return PiArrowLineUpRightLight;
        case "pi:PiArrowRightLight":
            return PiArrowRightLight;
        case "pi:PiArrowSquareDownLeftLight":
            return PiArrowSquareDownLeftLight;
        case "pi:PiArrowSquareDownLight":
            return PiArrowSquareDownLight;
        case "pi:PiArrowSquareDownRightLight":
            return PiArrowSquareDownRightLight;
        case "pi:PiArrowSquareInLight":
            return PiArrowSquareInLight;
        case "pi:PiArrowSquareLeftLight":
            return PiArrowSquareLeftLight;
        case "pi:PiArrowSquareOutLight":
            return PiArrowSquareOutLight;
        case "pi:PiArrowSquareRightLight":
            return PiArrowSquareRightLight;
        case "pi:PiArrowSquareUpLeftLight":
            return PiArrowSquareUpLeftLight;
        case "pi:PiArrowSquareUpLight":
            return PiArrowSquareUpLight;
        case "pi:PiArrowSquareUpRightLight":
            return PiArrowSquareUpRightLight;
        case "pi:PiArrowUDownLeftLight":
            return PiArrowUDownLeftLight;
        case "pi:PiArrowUDownRightLight":
            return PiArrowUDownRightLight;
        case "pi:PiArrowULeftDownLight":
            return PiArrowULeftDownLight;
        case "pi:PiArrowULeftUpLight":
            return PiArrowULeftUpLight;
        case "pi:PiArrowURightDownLight":
            return PiArrowURightDownLight;
        case "pi:PiArrowURightUpLight":
            return PiArrowURightUpLight;
        case "pi:PiArrowUUpLeftLight":
            return PiArrowUUpLeftLight;
        case "pi:PiArrowUUpRightLight":
            return PiArrowUUpRightLight;
        case "pi:PiArrowUpLeftLight":
            return PiArrowUpLeftLight;
        case "pi:PiArrowUpLight":
            return PiArrowUpLight;
        case "pi:PiArrowUpRightLight":
            return PiArrowUpRightLight;
        case "pi:PiArrowsClockwiseLight":
            return PiArrowsClockwiseLight;
        case "pi:PiArrowsCounterClockwiseLight":
            return PiArrowsCounterClockwiseLight;
        case "pi:PiArrowsDownUpLight":
            return PiArrowsDownUpLight;
        case "pi:PiArrowsHorizontalLight":
            return PiArrowsHorizontalLight;
        case "pi:PiArrowsInCardinalLight":
            return PiArrowsInCardinalLight;
        case "pi:PiArrowsInLight":
            return PiArrowsInLight;
        case "pi:PiArrowsInLineHorizontalLight":
            return PiArrowsInLineHorizontalLight;
        case "pi:PiArrowsInLineVerticalLight":
            return PiArrowsInLineVerticalLight;
        case "pi:PiArrowsInSimpleLight":
            return PiArrowsInSimpleLight;
        case "pi:PiArrowsLeftRightLight":
            return PiArrowsLeftRightLight;
        case "pi:PiArrowsMergeLight":
            return PiArrowsMergeLight;
        case "pi:PiArrowsOutCardinalLight":
            return PiArrowsOutCardinalLight;
        case "pi:PiArrowsOutLight":
            return PiArrowsOutLight;
        case "pi:PiArrowsOutLineHorizontalLight":
            return PiArrowsOutLineHorizontalLight;
        case "pi:PiArrowsOutLineVerticalLight":
            return PiArrowsOutLineVerticalLight;
        case "pi:PiArrowsOutSimpleLight":
            return PiArrowsOutSimpleLight;
        case "pi:PiArrowsSplitLight":
            return PiArrowsSplitLight;
        case "pi:PiArrowsVerticalLight":
            return PiArrowsVerticalLight;
        case "pi:PiArticleLight":
            return PiArticleLight;
        case "pi:PiArticleMediumLight":
            return PiArticleMediumLight;
        case "pi:PiArticleNyTimesLight":
            return PiArticleNyTimesLight;
        case "pi:PiAsclepiusLight":
            return PiAsclepiusLight;
        case "pi:PiAsteriskLight":
            return PiAsteriskLight;
        case "pi:PiAsteriskSimpleLight":
            return PiAsteriskSimpleLight;
        case "pi:PiAtLight":
            return PiAtLight;
        case "pi:PiAtomLight":
            return PiAtomLight;
        case "pi:PiAvocadoLight":
            return PiAvocadoLight;
        case "pi:PiAxeLight":
            return PiAxeLight;
        case "pi:PiBabyCarriageLight":
            return PiBabyCarriageLight;
        case "pi:PiBabyLight":
            return PiBabyLight;
        case "pi:PiBackpackLight":
            return PiBackpackLight;
        case "pi:PiBackspaceLight":
            return PiBackspaceLight;
        case "pi:PiBagLight":
            return PiBagLight;
        case "pi:PiBagSimpleLight":
            return PiBagSimpleLight;
        case "pi:PiBalloonLight":
            return PiBalloonLight;
        case "pi:PiBandaidsLight":
            return PiBandaidsLight;
        case "pi:PiBankLight":
            return PiBankLight;
        case "pi:PiBarbellLight":
            return PiBarbellLight;
        case "pi:PiBarcodeLight":
            return PiBarcodeLight;
        case "pi:PiBarnLight":
            return PiBarnLight;
        case "pi:PiBarricadeLight":
            return PiBarricadeLight;
        case "pi:PiBaseballCapLight":
            return PiBaseballCapLight;
        case "pi:PiBaseballHelmetLight":
            return PiBaseballHelmetLight;
        case "pi:PiBaseballLight":
            return PiBaseballLight;
        case "pi:PiBasketLight":
            return PiBasketLight;
        case "pi:PiBasketballLight":
            return PiBasketballLight;
        case "pi:PiBathtubLight":
            return PiBathtubLight;
        case "pi:PiBatteryChargingLight":
            return PiBatteryChargingLight;
        case "pi:PiBatteryChargingVerticalLight":
            return PiBatteryChargingVerticalLight;
        case "pi:PiBatteryEmptyLight":
            return PiBatteryEmptyLight;
        case "pi:PiBatteryFullLight":
            return PiBatteryFullLight;
        case "pi:PiBatteryHighLight":
            return PiBatteryHighLight;
        case "pi:PiBatteryLowLight":
            return PiBatteryLowLight;
        case "pi:PiBatteryMediumLight":
            return PiBatteryMediumLight;
        case "pi:PiBatteryPlusLight":
            return PiBatteryPlusLight;
        case "pi:PiBatteryPlusVerticalLight":
            return PiBatteryPlusVerticalLight;
        case "pi:PiBatteryVerticalEmptyLight":
            return PiBatteryVerticalEmptyLight;
        case "pi:PiBatteryVerticalFullLight":
            return PiBatteryVerticalFullLight;
        case "pi:PiBatteryVerticalHighLight":
            return PiBatteryVerticalHighLight;
        case "pi:PiBatteryVerticalLowLight":
            return PiBatteryVerticalLowLight;
        case "pi:PiBatteryVerticalMediumLight":
            return PiBatteryVerticalMediumLight;
        case "pi:PiBatteryWarningLight":
            return PiBatteryWarningLight;
        case "pi:PiBatteryWarningVerticalLight":
            return PiBatteryWarningVerticalLight;
        case "pi:PiBeachBallLight":
            return PiBeachBallLight;
        case "pi:PiBeanieLight":
            return PiBeanieLight;
        case "pi:PiBedLight":
            return PiBedLight;
        case "pi:PiBeerBottleLight":
            return PiBeerBottleLight;
        case "pi:PiBeerSteinLight":
            return PiBeerSteinLight;
        case "pi:PiBehanceLogoLight":
            return PiBehanceLogoLight;
        case "pi:PiBellLight":
            return PiBellLight;
        case "pi:PiBellRingingLight":
            return PiBellRingingLight;
        case "pi:PiBellSimpleLight":
            return PiBellSimpleLight;
        case "pi:PiBellSimpleRingingLight":
            return PiBellSimpleRingingLight;
        case "pi:PiBellSimpleSlashLight":
            return PiBellSimpleSlashLight;
        case "pi:PiBellSimpleZLight":
            return PiBellSimpleZLight;
        case "pi:PiBellSlashLight":
            return PiBellSlashLight;
        case "pi:PiBellZLight":
            return PiBellZLight;
        case "pi:PiBeltLight":
            return PiBeltLight;
        case "pi:PiBezierCurveLight":
            return PiBezierCurveLight;
        case "pi:PiBicycleLight":
            return PiBicycleLight;
        case "pi:PiBinaryLight":
            return PiBinaryLight;
        case "pi:PiBinocularsLight":
            return PiBinocularsLight;
        case "pi:PiBiohazardLight":
            return PiBiohazardLight;
        case "pi:PiBirdLight":
            return PiBirdLight;
        case "pi:PiBlueprintLight":
            return PiBlueprintLight;
        case "pi:PiBluetoothConnectedLight":
            return PiBluetoothConnectedLight;
        case "pi:PiBluetoothLight":
            return PiBluetoothLight;
        case "pi:PiBluetoothSlashLight":
            return PiBluetoothSlashLight;
        case "pi:PiBluetoothXLight":
            return PiBluetoothXLight;
        case "pi:PiBoatLight":
            return PiBoatLight;
        case "pi:PiBombLight":
            return PiBombLight;
        case "pi:PiBoneLight":
            return PiBoneLight;
        case "pi:PiBookBookmarkLight":
            return PiBookBookmarkLight;
        case "pi:PiBookLight":
            return PiBookLight;
        case "pi:PiBookOpenLight":
            return PiBookOpenLight;
        case "pi:PiBookOpenTextLight":
            return PiBookOpenTextLight;
        case "pi:PiBookOpenUserLight":
            return PiBookOpenUserLight;
        case "pi:PiBookmarkLight":
            return PiBookmarkLight;
        case "pi:PiBookmarkSimpleLight":
            return PiBookmarkSimpleLight;
        case "pi:PiBookmarksLight":
            return PiBookmarksLight;
        case "pi:PiBookmarksSimpleLight":
            return PiBookmarksSimpleLight;
        case "pi:PiBooksLight":
            return PiBooksLight;
        case "pi:PiBootLight":
            return PiBootLight;
        case "pi:PiBoulesLight":
            return PiBoulesLight;
        case "pi:PiBoundingBoxLight":
            return PiBoundingBoxLight;
        case "pi:PiBowlFoodLight":
            return PiBowlFoodLight;
        case "pi:PiBowlSteamLight":
            return PiBowlSteamLight;
        case "pi:PiBowlingBallLight":
            return PiBowlingBallLight;
        case "pi:PiBoxArrowDownLight":
            return PiBoxArrowDownLight;
        case "pi:PiBoxArrowUpLight":
            return PiBoxArrowUpLight;
        case "pi:PiBoxingGloveLight":
            return PiBoxingGloveLight;
        case "pi:PiBracketsAngleLight":
            return PiBracketsAngleLight;
        case "pi:PiBracketsCurlyLight":
            return PiBracketsCurlyLight;
        case "pi:PiBracketsRoundLight":
            return PiBracketsRoundLight;
        case "pi:PiBracketsSquareLight":
            return PiBracketsSquareLight;
        case "pi:PiBrainLight":
            return PiBrainLight;
        case "pi:PiBrandyLight":
            return PiBrandyLight;
        case "pi:PiBreadLight":
            return PiBreadLight;
        case "pi:PiBridgeLight":
            return PiBridgeLight;
        case "pi:PiBriefcaseLight":
            return PiBriefcaseLight;
        case "pi:PiBriefcaseMetalLight":
            return PiBriefcaseMetalLight;
        case "pi:PiBroadcastLight":
            return PiBroadcastLight;
        case "pi:PiBroomLight":
            return PiBroomLight;
        case "pi:PiBrowserLight":
            return PiBrowserLight;
        case "pi:PiBrowsersLight":
            return PiBrowsersLight;
        case "pi:PiBugBeetleLight":
            return PiBugBeetleLight;
        case "pi:PiBugDroidLight":
            return PiBugDroidLight;
        case "pi:PiBugLight":
            return PiBugLight;
        case "pi:PiBuildingApartmentLight":
            return PiBuildingApartmentLight;
        case "pi:PiBuildingLight":
            return PiBuildingLight;
        case "pi:PiBuildingOfficeLight":
            return PiBuildingOfficeLight;
        case "pi:PiBuildingsLight":
            return PiBuildingsLight;
        case "pi:PiBulldozerLight":
            return PiBulldozerLight;
        case "pi:PiBusLight":
            return PiBusLight;
        case "pi:PiButterflyLight":
            return PiButterflyLight;
        case "pi:PiCableCarLight":
            return PiCableCarLight;
        case "pi:PiCactusLight":
            return PiCactusLight;
        case "pi:PiCakeLight":
            return PiCakeLight;
        case "pi:PiCalculatorLight":
            return PiCalculatorLight;
        case "pi:PiCalendarBlankLight":
            return PiCalendarBlankLight;
        case "pi:PiCalendarCheckLight":
            return PiCalendarCheckLight;
        case "pi:PiCalendarDotLight":
            return PiCalendarDotLight;
        case "pi:PiCalendarDotsLight":
            return PiCalendarDotsLight;
        case "pi:PiCalendarHeartLight":
            return PiCalendarHeartLight;
        case "pi:PiCalendarLight":
            return PiCalendarLight;
        case "pi:PiCalendarMinusLight":
            return PiCalendarMinusLight;
        case "pi:PiCalendarPlusLight":
            return PiCalendarPlusLight;
        case "pi:PiCalendarSlashLight":
            return PiCalendarSlashLight;
        case "pi:PiCalendarStarLight":
            return PiCalendarStarLight;
        case "pi:PiCalendarXLight":
            return PiCalendarXLight;
        case "pi:PiCallBellLight":
            return PiCallBellLight;
        case "pi:PiCameraLight":
            return PiCameraLight;
        case "pi:PiCameraPlusLight":
            return PiCameraPlusLight;
        case "pi:PiCameraRotateLight":
            return PiCameraRotateLight;
        case "pi:PiCameraSlashLight":
            return PiCameraSlashLight;
        case "pi:PiCampfireLight":
            return PiCampfireLight;
        case "pi:PiCarBatteryLight":
            return PiCarBatteryLight;
        case "pi:PiCarLight":
            return PiCarLight;
        case "pi:PiCarProfileLight":
            return PiCarProfileLight;
        case "pi:PiCarSimpleLight":
            return PiCarSimpleLight;
        case "pi:PiCardholderLight":
            return PiCardholderLight;
        case "pi:PiCardsLight":
            return PiCardsLight;
        case "pi:PiCardsThreeLight":
            return PiCardsThreeLight;
        case "pi:PiCaretCircleDoubleDownLight":
            return PiCaretCircleDoubleDownLight;
        case "pi:PiCaretCircleDoubleLeftLight":
            return PiCaretCircleDoubleLeftLight;
        case "pi:PiCaretCircleDoubleRightLight":
            return PiCaretCircleDoubleRightLight;
        case "pi:PiCaretCircleDoubleUpLight":
            return PiCaretCircleDoubleUpLight;
        case "pi:PiCaretCircleDownLight":
            return PiCaretCircleDownLight;
        case "pi:PiCaretCircleLeftLight":
            return PiCaretCircleLeftLight;
        case "pi:PiCaretCircleRightLight":
            return PiCaretCircleRightLight;
        case "pi:PiCaretCircleUpDownLight":
            return PiCaretCircleUpDownLight;
        case "pi:PiCaretCircleUpLight":
            return PiCaretCircleUpLight;
        case "pi:PiCaretDoubleDownLight":
            return PiCaretDoubleDownLight;
        case "pi:PiCaretDoubleLeftLight":
            return PiCaretDoubleLeftLight;
        case "pi:PiCaretDoubleRightLight":
            return PiCaretDoubleRightLight;
        case "pi:PiCaretDoubleUpLight":
            return PiCaretDoubleUpLight;
        case "pi:PiCaretDownLight":
            return PiCaretDownLight;
        case "pi:PiCaretLeftLight":
            return PiCaretLeftLight;
        case "pi:PiCaretLineDownLight":
            return PiCaretLineDownLight;
        case "pi:PiCaretLineLeftLight":
            return PiCaretLineLeftLight;
        case "pi:PiCaretLineRightLight":
            return PiCaretLineRightLight;
        case "pi:PiCaretLineUpLight":
            return PiCaretLineUpLight;
        case "pi:PiCaretRightLight":
            return PiCaretRightLight;
        case "pi:PiCaretUpDownLight":
            return PiCaretUpDownLight;
        case "pi:PiCaretUpLight":
            return PiCaretUpLight;
        case "pi:PiCarrotLight":
            return PiCarrotLight;
        case "pi:PiCashRegisterLight":
            return PiCashRegisterLight;
        case "pi:PiCassetteTapeLight":
            return PiCassetteTapeLight;
        case "pi:PiCastleTurretLight":
            return PiCastleTurretLight;
        case "pi:PiCatLight":
            return PiCatLight;
        case "pi:PiCellSignalFullLight":
            return PiCellSignalFullLight;
        case "pi:PiCellSignalHighLight":
            return PiCellSignalHighLight;
        case "pi:PiCellSignalLowLight":
            return PiCellSignalLowLight;
        case "pi:PiCellSignalMediumLight":
            return PiCellSignalMediumLight;
        case "pi:PiCellSignalNoneLight":
            return PiCellSignalNoneLight;
        case "pi:PiCellSignalSlashLight":
            return PiCellSignalSlashLight;
        case "pi:PiCellSignalXLight":
            return PiCellSignalXLight;
        case "pi:PiCellTowerLight":
            return PiCellTowerLight;
        case "pi:PiCertificateLight":
            return PiCertificateLight;
        case "pi:PiChairLight":
            return PiChairLight;
        case "pi:PiChalkboardLight":
            return PiChalkboardLight;
        case "pi:PiChalkboardSimpleLight":
            return PiChalkboardSimpleLight;
        case "pi:PiChalkboardTeacherLight":
            return PiChalkboardTeacherLight;
        case "pi:PiChampagneLight":
            return PiChampagneLight;
        case "pi:PiChargingStationLight":
            return PiChargingStationLight;
        case "pi:PiChartBarHorizontalLight":
            return PiChartBarHorizontalLight;
        case "pi:PiChartBarLight":
            return PiChartBarLight;
        case "pi:PiChartDonutLight":
            return PiChartDonutLight;
        case "pi:PiChartLineDownLight":
            return PiChartLineDownLight;
        case "pi:PiChartLineLight":
            return PiChartLineLight;
        case "pi:PiChartLineUpLight":
            return PiChartLineUpLight;
        case "pi:PiChartPieLight":
            return PiChartPieLight;
        case "pi:PiChartPieSliceLight":
            return PiChartPieSliceLight;
        case "pi:PiChartPolarLight":
            return PiChartPolarLight;
        case "pi:PiChartScatterLight":
            return PiChartScatterLight;
        case "pi:PiChatCenteredDotsLight":
            return PiChatCenteredDotsLight;
        case "pi:PiChatCenteredLight":
            return PiChatCenteredLight;
        case "pi:PiChatCenteredSlashLight":
            return PiChatCenteredSlashLight;
        case "pi:PiChatCenteredTextLight":
            return PiChatCenteredTextLight;
        case "pi:PiChatCircleDotsLight":
            return PiChatCircleDotsLight;
        case "pi:PiChatCircleLight":
            return PiChatCircleLight;
        case "pi:PiChatCircleSlashLight":
            return PiChatCircleSlashLight;
        case "pi:PiChatCircleTextLight":
            return PiChatCircleTextLight;
        case "pi:PiChatDotsLight":
            return PiChatDotsLight;
        case "pi:PiChatLight":
            return PiChatLight;
        case "pi:PiChatSlashLight":
            return PiChatSlashLight;
        case "pi:PiChatTeardropDotsLight":
            return PiChatTeardropDotsLight;
        case "pi:PiChatTeardropLight":
            return PiChatTeardropLight;
        case "pi:PiChatTeardropSlashLight":
            return PiChatTeardropSlashLight;
        case "pi:PiChatTeardropTextLight":
            return PiChatTeardropTextLight;
        case "pi:PiChatTextLight":
            return PiChatTextLight;
        case "pi:PiChatsCircleLight":
            return PiChatsCircleLight;
        case "pi:PiChatsLight":
            return PiChatsLight;
        case "pi:PiChatsTeardropLight":
            return PiChatsTeardropLight;
        case "pi:PiCheckCircleLight":
            return PiCheckCircleLight;
        case "pi:PiCheckFatLight":
            return PiCheckFatLight;
        case "pi:PiCheckLight":
            return PiCheckLight;
        case "pi:PiCheckSquareLight":
            return PiCheckSquareLight;
        case "pi:PiCheckSquareOffsetLight":
            return PiCheckSquareOffsetLight;
        case "pi:PiCheckerboardLight":
            return PiCheckerboardLight;
        case "pi:PiChecksLight":
            return PiChecksLight;
        case "pi:PiCheersLight":
            return PiCheersLight;
        case "pi:PiCheeseLight":
            return PiCheeseLight;
        case "pi:PiChefHatLight":
            return PiChefHatLight;
        case "pi:PiCherriesLight":
            return PiCherriesLight;
        case "pi:PiChurchLight":
            return PiChurchLight;
        case "pi:PiCigaretteLight":
            return PiCigaretteLight;
        case "pi:PiCigaretteSlashLight":
            return PiCigaretteSlashLight;
        case "pi:PiCircleDashedLight":
            return PiCircleDashedLight;
        case "pi:PiCircleHalfLight":
            return PiCircleHalfLight;
        case "pi:PiCircleHalfTiltLight":
            return PiCircleHalfTiltLight;
        case "pi:PiCircleLight":
            return PiCircleLight;
        case "pi:PiCircleNotchLight":
            return PiCircleNotchLight;
        case "pi:PiCirclesFourLight":
            return PiCirclesFourLight;
        case "pi:PiCirclesThreeLight":
            return PiCirclesThreeLight;
        case "pi:PiCirclesThreePlusLight":
            return PiCirclesThreePlusLight;
        case "pi:PiCircuitryLight":
            return PiCircuitryLight;
        case "pi:PiCityLight":
            return PiCityLight;
        case "pi:PiClipboardLight":
            return PiClipboardLight;
        case "pi:PiClipboardTextLight":
            return PiClipboardTextLight;
        case "pi:PiClockAfternoonLight":
            return PiClockAfternoonLight;
        case "pi:PiClockClockwiseLight":
            return PiClockClockwiseLight;
        case "pi:PiClockCountdownLight":
            return PiClockCountdownLight;
        case "pi:PiClockCounterClockwiseLight":
            return PiClockCounterClockwiseLight;
        case "pi:PiClockLight":
            return PiClockLight;
        case "pi:PiClockUserLight":
            return PiClockUserLight;
        case "pi:PiClosedCaptioningLight":
            return PiClosedCaptioningLight;
        case "pi:PiCloudArrowDownLight":
            return PiCloudArrowDownLight;
        case "pi:PiCloudArrowUpLight":
            return PiCloudArrowUpLight;
        case "pi:PiCloudCheckLight":
            return PiCloudCheckLight;
        case "pi:PiCloudFogLight":
            return PiCloudFogLight;
        case "pi:PiCloudLight":
            return PiCloudLight;
        case "pi:PiCloudLightningLight":
            return PiCloudLightningLight;
        case "pi:PiCloudMoonLight":
            return PiCloudMoonLight;
        case "pi:PiCloudRainLight":
            return PiCloudRainLight;
        case "pi:PiCloudSlashLight":
            return PiCloudSlashLight;
        case "pi:PiCloudSnowLight":
            return PiCloudSnowLight;
        case "pi:PiCloudSunLight":
            return PiCloudSunLight;
        case "pi:PiCloudWarningLight":
            return PiCloudWarningLight;
        case "pi:PiCloudXLight":
            return PiCloudXLight;
        case "pi:PiCloverLight":
            return PiCloverLight;
        case "pi:PiClubLight":
            return PiClubLight;
        case "pi:PiCoatHangerLight":
            return PiCoatHangerLight;
        case "pi:PiCodaLogoLight":
            return PiCodaLogoLight;
        case "pi:PiCodeBlockLight":
            return PiCodeBlockLight;
        case "pi:PiCodeLight":
            return PiCodeLight;
        case "pi:PiCodeSimpleLight":
            return PiCodeSimpleLight;
        case "pi:PiCodepenLogoLight":
            return PiCodepenLogoLight;
        case "pi:PiCodesandboxLogoLight":
            return PiCodesandboxLogoLight;
        case "pi:PiCoffeeBeanLight":
            return PiCoffeeBeanLight;
        case "pi:PiCoffeeLight":
            return PiCoffeeLight;
        case "pi:PiCoinLight":
            return PiCoinLight;
        case "pi:PiCoinVerticalLight":
            return PiCoinVerticalLight;
        case "pi:PiCoinsLight":
            return PiCoinsLight;
        case "pi:PiColumnsLight":
            return PiColumnsLight;
        case "pi:PiColumnsPlusLeftLight":
            return PiColumnsPlusLeftLight;
        case "pi:PiColumnsPlusRightLight":
            return PiColumnsPlusRightLight;
        case "pi:PiCommandLight":
            return PiCommandLight;
        case "pi:PiCompassLight":
            return PiCompassLight;
        case "pi:PiCompassRoseLight":
            return PiCompassRoseLight;
        case "pi:PiCompassToolLight":
            return PiCompassToolLight;
        case "pi:PiComputerTowerLight":
            return PiComputerTowerLight;
        case "pi:PiConfettiLight":
            return PiConfettiLight;
        case "pi:PiContactlessPaymentLight":
            return PiContactlessPaymentLight;
        case "pi:PiControlLight":
            return PiControlLight;
        case "pi:PiCookieLight":
            return PiCookieLight;
        case "pi:PiCookingPotLight":
            return PiCookingPotLight;
        case "pi:PiCopyLight":
            return PiCopyLight;
        case "pi:PiCopySimpleLight":
            return PiCopySimpleLight;
        case "pi:PiCopyleftLight":
            return PiCopyleftLight;
        case "pi:PiCopyrightLight":
            return PiCopyrightLight;
        case "pi:PiCornersInLight":
            return PiCornersInLight;
        case "pi:PiCornersOutLight":
            return PiCornersOutLight;
        case "pi:PiCouchLight":
            return PiCouchLight;
        case "pi:PiCourtBasketballLight":
            return PiCourtBasketballLight;
        case "pi:PiCowLight":
            return PiCowLight;
        case "pi:PiCowboyHatLight":
            return PiCowboyHatLight;
        case "pi:PiCpuLight":
            return PiCpuLight;
        case "pi:PiCraneLight":
            return PiCraneLight;
        case "pi:PiCraneTowerLight":
            return PiCraneTowerLight;
        case "pi:PiCreditCardLight":
            return PiCreditCardLight;
        case "pi:PiCricketLight":
            return PiCricketLight;
        case "pi:PiCropLight":
            return PiCropLight;
        case "pi:PiCrossLight":
            return PiCrossLight;
        case "pi:PiCrosshairLight":
            return PiCrosshairLight;
        case "pi:PiCrosshairSimpleLight":
            return PiCrosshairSimpleLight;
        case "pi:PiCrownCrossLight":
            return PiCrownCrossLight;
        case "pi:PiCrownLight":
            return PiCrownLight;
        case "pi:PiCrownSimpleLight":
            return PiCrownSimpleLight;
        case "pi:PiCubeFocusLight":
            return PiCubeFocusLight;
        case "pi:PiCubeLight":
            return PiCubeLight;
        case "pi:PiCubeTransparentLight":
            return PiCubeTransparentLight;
        case "pi:PiCurrencyBtcLight":
            return PiCurrencyBtcLight;
        case "pi:PiCurrencyCircleDollarLight":
            return PiCurrencyCircleDollarLight;
        case "pi:PiCurrencyCnyLight":
            return PiCurrencyCnyLight;
        case "pi:PiCurrencyDollarLight":
            return PiCurrencyDollarLight;
        case "pi:PiCurrencyDollarSimpleLight":
            return PiCurrencyDollarSimpleLight;
        case "pi:PiCurrencyEthLight":
            return PiCurrencyEthLight;
        case "pi:PiCurrencyEurLight":
            return PiCurrencyEurLight;
        case "pi:PiCurrencyGbpLight":
            return PiCurrencyGbpLight;
        case "pi:PiCurrencyInrLight":
            return PiCurrencyInrLight;
        case "pi:PiCurrencyJpyLight":
            return PiCurrencyJpyLight;
        case "pi:PiCurrencyKrwLight":
            return PiCurrencyKrwLight;
        case "pi:PiCurrencyKztLight":
            return PiCurrencyKztLight;
        case "pi:PiCurrencyNgnLight":
            return PiCurrencyNgnLight;
        case "pi:PiCurrencyRubLight":
            return PiCurrencyRubLight;
    }
}
