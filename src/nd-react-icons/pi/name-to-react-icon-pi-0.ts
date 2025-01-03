import type {IconType} from "react-icons";

import {
    PiAcornBold,
    PiAddressBookBold,
    PiAddressBookTabsBold,
    PiAirTrafficControlBold,
    PiAirplaneBold,
    PiAirplaneInFlightBold,
    PiAirplaneLandingBold,
    PiAirplaneTakeoffBold,
    PiAirplaneTaxiingBold,
    PiAirplaneTiltBold,
    PiAirplayBold,
    PiAlarmBold,
    PiAlienBold,
    PiAlignBottomBold,
    PiAlignBottomSimpleBold,
    PiAlignCenterHorizontalBold,
    PiAlignCenterHorizontalSimpleBold,
    PiAlignCenterVerticalBold,
    PiAlignCenterVerticalSimpleBold,
    PiAlignLeftBold,
    PiAlignLeftSimpleBold,
    PiAlignRightBold,
    PiAlignRightSimpleBold,
    PiAlignTopBold,
    PiAlignTopSimpleBold,
    PiAmazonLogoBold,
    PiAmbulanceBold,
    PiAnchorBold,
    PiAnchorSimpleBold,
    PiAndroidLogoBold,
    PiAngleBold,
    PiAngularLogoBold,
    PiApertureBold,
    PiAppStoreLogoBold,
    PiAppWindowBold,
    PiAppleLogoBold,
    PiApplePodcastsLogoBold,
    PiApproximateEqualsBold,
    PiArchiveBold,
    PiArmchairBold,
    PiArrowArcLeftBold,
    PiArrowArcRightBold,
    PiArrowBendDoubleUpLeftBold,
    PiArrowBendDoubleUpRightBold,
    PiArrowBendDownLeftBold,
    PiArrowBendDownRightBold,
    PiArrowBendLeftDownBold,
    PiArrowBendLeftUpBold,
    PiArrowBendRightDownBold,
    PiArrowBendRightUpBold,
    PiArrowBendUpLeftBold,
    PiArrowBendUpRightBold,
    PiArrowCircleDownBold,
    PiArrowCircleDownLeftBold,
    PiArrowCircleDownRightBold,
    PiArrowCircleLeftBold,
    PiArrowCircleRightBold,
    PiArrowCircleUpBold,
    PiArrowCircleUpLeftBold,
    PiArrowCircleUpRightBold,
    PiArrowClockwiseBold,
    PiArrowCounterClockwiseBold,
    PiArrowDownBold,
    PiArrowDownLeftBold,
    PiArrowDownRightBold,
    PiArrowElbowDownLeftBold,
    PiArrowElbowDownRightBold,
    PiArrowElbowLeftBold,
    PiArrowElbowLeftDownBold,
    PiArrowElbowLeftUpBold,
    PiArrowElbowRightBold,
    PiArrowElbowRightDownBold,
    PiArrowElbowRightUpBold,
    PiArrowElbowUpLeftBold,
    PiArrowElbowUpRightBold,
    PiArrowFatDownBold,
    PiArrowFatLeftBold,
    PiArrowFatLineDownBold,
    PiArrowFatLineLeftBold,
    PiArrowFatLineRightBold,
    PiArrowFatLineUpBold,
    PiArrowFatLinesDownBold,
    PiArrowFatLinesLeftBold,
    PiArrowFatLinesRightBold,
    PiArrowFatLinesUpBold,
    PiArrowFatRightBold,
    PiArrowFatUpBold,
    PiArrowLeftBold,
    PiArrowLineDownBold,
    PiArrowLineDownLeftBold,
    PiArrowLineDownRightBold,
    PiArrowLineLeftBold,
    PiArrowLineRightBold,
    PiArrowLineUpBold,
    PiArrowLineUpLeftBold,
    PiArrowLineUpRightBold,
    PiArrowRightBold,
    PiArrowSquareDownBold,
    PiArrowSquareDownLeftBold,
    PiArrowSquareDownRightBold,
    PiArrowSquareInBold,
    PiArrowSquareLeftBold,
    PiArrowSquareOutBold,
    PiArrowSquareRightBold,
    PiArrowSquareUpBold,
    PiArrowSquareUpLeftBold,
    PiArrowSquareUpRightBold,
    PiArrowUDownLeftBold,
    PiArrowUDownRightBold,
    PiArrowULeftDownBold,
    PiArrowULeftUpBold,
    PiArrowURightDownBold,
    PiArrowURightUpBold,
    PiArrowUUpLeftBold,
    PiArrowUUpRightBold,
    PiArrowUpBold,
    PiArrowUpLeftBold,
    PiArrowUpRightBold,
    PiArrowsClockwiseBold,
    PiArrowsCounterClockwiseBold,
    PiArrowsDownUpBold,
    PiArrowsHorizontalBold,
    PiArrowsInBold,
    PiArrowsInCardinalBold,
    PiArrowsInLineHorizontalBold,
    PiArrowsInLineVerticalBold,
    PiArrowsInSimpleBold,
    PiArrowsLeftRightBold,
    PiArrowsMergeBold,
    PiArrowsOutBold,
    PiArrowsOutCardinalBold,
    PiArrowsOutLineHorizontalBold,
    PiArrowsOutLineVerticalBold,
    PiArrowsOutSimpleBold,
    PiArrowsSplitBold,
    PiArrowsVerticalBold,
    PiArticleBold,
    PiArticleMediumBold,
    PiArticleNyTimesBold,
    PiAsclepiusBold,
    PiAsteriskBold,
    PiAsteriskSimpleBold,
    PiAtBold,
    PiAtomBold,
    PiAvocadoBold,
    PiAxeBold,
    PiBabyBold,
    PiBabyCarriageBold,
    PiBackpackBold,
    PiBackspaceBold,
    PiBagBold,
    PiBagSimpleBold,
    PiBalloonBold,
    PiBandaidsBold,
    PiBankBold,
    PiBarbellBold,
    PiBarcodeBold,
    PiBarnBold,
    PiBarricadeBold,
    PiBaseballBold,
    PiBaseballCapBold,
    PiBaseballHelmetBold,
    PiBasketBold,
    PiBasketballBold,
    PiBathtubBold,
    PiBatteryChargingBold,
    PiBatteryChargingVerticalBold,
    PiBatteryEmptyBold,
    PiBatteryFullBold,
    PiBatteryHighBold,
    PiBatteryLowBold,
    PiBatteryMediumBold,
    PiBatteryPlusBold,
    PiBatteryPlusVerticalBold,
    PiBatteryVerticalEmptyBold,
    PiBatteryVerticalFullBold,
    PiBatteryVerticalHighBold,
    PiBatteryVerticalLowBold,
    PiBatteryVerticalMediumBold,
    PiBatteryWarningBold,
    PiBatteryWarningVerticalBold,
    PiBeachBallBold,
    PiBeanieBold,
    PiBedBold,
    PiBeerBottleBold,
    PiBeerSteinBold,
    PiBehanceLogoBold,
    PiBellBold,
    PiBellRingingBold,
    PiBellSimpleBold,
    PiBellSimpleRingingBold,
    PiBellSimpleSlashBold,
    PiBellSimpleZBold,
    PiBellSlashBold,
    PiBellZBold,
    PiBeltBold,
    PiBezierCurveBold,
    PiBicycleBold,
    PiBinaryBold,
    PiBinocularsBold,
    PiBiohazardBold,
    PiBirdBold,
    PiBlueprintBold,
    PiBluetoothBold,
    PiBluetoothConnectedBold,
    PiBluetoothSlashBold,
    PiBluetoothXBold,
    PiBoatBold,
    PiBombBold,
    PiBoneBold,
    PiBookBold,
    PiBookBookmarkBold,
    PiBookOpenBold,
    PiBookOpenTextBold,
    PiBookOpenUserBold,
    PiBookmarkBold,
    PiBookmarkSimpleBold,
    PiBookmarksBold,
    PiBookmarksSimpleBold,
    PiBooksBold,
    PiBootBold,
    PiBoulesBold,
    PiBoundingBoxBold,
    PiBowlFoodBold,
    PiBowlSteamBold,
    PiBowlingBallBold,
    PiBoxArrowDownBold,
    PiBoxArrowUpBold,
    PiBoxingGloveBold,
    PiBracketsAngleBold,
    PiBracketsCurlyBold,
    PiBracketsRoundBold,
    PiBracketsSquareBold,
    PiBrainBold,
    PiBrandyBold,
    PiBreadBold,
    PiBridgeBold,
    PiBriefcaseBold,
    PiBriefcaseMetalBold,
    PiBroadcastBold,
    PiBroomBold,
    PiBrowserBold,
    PiBrowsersBold,
    PiBugBeetleBold,
    PiBugBold,
    PiBugDroidBold,
    PiBuildingApartmentBold,
    PiBuildingBold,
    PiBuildingOfficeBold,
    PiBuildingsBold,
    PiBulldozerBold,
    PiBusBold,
    PiButterflyBold,
    PiCableCarBold,
    PiCactusBold,
    PiCakeBold,
    PiCalculatorBold,
    PiCalendarBlankBold,
    PiCalendarBold,
    PiCalendarCheckBold,
    PiCalendarDotBold,
    PiCalendarDotsBold,
    PiCalendarHeartBold,
    PiCalendarMinusBold,
    PiCalendarPlusBold,
    PiCalendarSlashBold,
    PiCalendarStarBold,
    PiCalendarXBold,
    PiCallBellBold,
    PiCameraBold,
    PiCameraPlusBold,
    PiCameraRotateBold,
    PiCameraSlashBold,
    PiCampfireBold,
    PiCarBatteryBold,
    PiCarBold,
    PiCarProfileBold,
    PiCarSimpleBold,
    PiCardholderBold,
    PiCardsBold,
    PiCardsThreeBold,
    PiCaretCircleDoubleDownBold,
    PiCaretCircleDoubleLeftBold,
    PiCaretCircleDoubleRightBold,
    PiCaretCircleDoubleUpBold,
    PiCaretCircleDownBold,
    PiCaretCircleLeftBold,
    PiCaretCircleRightBold,
    PiCaretCircleUpBold,
    PiCaretCircleUpDownBold,
    PiCaretDoubleDownBold,
    PiCaretDoubleLeftBold,
    PiCaretDoubleRightBold,
    PiCaretDoubleUpBold,
    PiCaretDownBold,
    PiCaretLeftBold,
    PiCaretLineDownBold,
    PiCaretLineLeftBold,
    PiCaretLineRightBold,
    PiCaretLineUpBold,
    PiCaretRightBold,
    PiCaretUpBold,
    PiCaretUpDownBold,
    PiCarrotBold,
    PiCashRegisterBold,
    PiCassetteTapeBold,
    PiCastleTurretBold,
    PiCatBold,
    PiCellSignalFullBold,
    PiCellSignalHighBold,
    PiCellSignalLowBold,
    PiCellSignalMediumBold,
    PiCellSignalNoneBold,
    PiCellSignalSlashBold,
    PiCellSignalXBold,
    PiCellTowerBold,
    PiCertificateBold,
    PiChairBold,
    PiChalkboardBold,
    PiChalkboardSimpleBold,
    PiChalkboardTeacherBold,
    PiChampagneBold,
    PiChargingStationBold,
    PiChartBarBold,
    PiChartBarHorizontalBold,
    PiChartDonutBold,
    PiChartLineBold,
    PiChartLineDownBold,
    PiChartLineUpBold,
    PiChartPieBold,
    PiChartPieSliceBold,
    PiChartPolarBold,
    PiChartScatterBold,
    PiChatBold,
    PiChatCenteredBold,
    PiChatCenteredDotsBold,
    PiChatCenteredSlashBold,
    PiChatCenteredTextBold,
    PiChatCircleBold,
    PiChatCircleDotsBold,
    PiChatCircleSlashBold,
    PiChatCircleTextBold,
    PiChatDotsBold,
    PiChatSlashBold,
    PiChatTeardropBold,
    PiChatTeardropDotsBold,
    PiChatTeardropSlashBold,
    PiChatTeardropTextBold,
    PiChatTextBold,
    PiChatsBold,
    PiChatsCircleBold,
    PiChatsTeardropBold,
    PiCheckBold,
    PiCheckCircleBold,
    PiCheckFatBold,
    PiCheckSquareBold,
    PiCheckSquareOffsetBold,
    PiCheckerboardBold,
    PiChecksBold,
    PiCheersBold,
    PiCheeseBold,
    PiChefHatBold,
    PiCherriesBold,
    PiChurchBold,
    PiCigaretteBold,
    PiCigaretteSlashBold,
    PiCircleBold,
    PiCircleDashedBold,
    PiCircleHalfBold,
    PiCircleHalfTiltBold,
    PiCircleNotchBold,
    PiCirclesFourBold,
    PiCirclesThreeBold,
    PiCirclesThreePlusBold,
    PiCircuitryBold,
    PiCityBold,
    PiClipboardBold,
    PiClipboardTextBold,
    PiClockAfternoonBold,
    PiClockBold,
    PiClockClockwiseBold,
    PiClockCountdownBold,
    PiClockCounterClockwiseBold,
    PiClockUserBold,
    PiClosedCaptioningBold,
    PiCloudArrowDownBold,
    PiCloudArrowUpBold,
    PiCloudBold,
    PiCloudCheckBold,
    PiCloudFogBold,
    PiCloudLightningBold,
    PiCloudMoonBold,
    PiCloudRainBold,
    PiCloudSlashBold,
    PiCloudSnowBold,
    PiCloudSunBold,
    PiCloudWarningBold,
    PiCloudXBold,
    PiCloverBold,
    PiClubBold,
    PiCoatHangerBold,
    PiCodaLogoBold,
    PiCodeBlockBold,
    PiCodeBold,
    PiCodeSimpleBold,
    PiCodepenLogoBold,
    PiCodesandboxLogoBold,
    PiCoffeeBeanBold,
    PiCoffeeBold,
    PiCoinBold,
    PiCoinVerticalBold,
    PiCoinsBold,
    PiColumnsBold,
    PiColumnsPlusLeftBold,
    PiColumnsPlusRightBold,
    PiCommandBold,
    PiCompassBold,
    PiCompassRoseBold,
    PiCompassToolBold,
    PiComputerTowerBold,
    PiConfettiBold,
    PiContactlessPaymentBold,
    PiControlBold,
    PiCookieBold,
    PiCookingPotBold,
    PiCopyBold,
    PiCopySimpleBold,
    PiCopyleftBold,
    PiCopyrightBold,
    PiCornersInBold,
    PiCornersOutBold,
    PiCouchBold,
    PiCourtBasketballBold,
    PiCowBold,
    PiCowboyHatBold,
    PiCpuBold,
    PiCraneBold,
    PiCraneTowerBold,
    PiCreditCardBold,
    PiCricketBold,
    PiCropBold,
    PiCrossBold,
    PiCrosshairBold,
    PiCrosshairSimpleBold,
    PiCrownBold,
    PiCrownCrossBold,
    PiCrownSimpleBold,
    PiCubeBold,
    PiCubeFocusBold,
    PiCubeTransparentBold,
    PiCurrencyBtcBold,
    PiCurrencyCircleDollarBold,
    PiCurrencyCnyBold,
    PiCurrencyDollarBold,
    PiCurrencyDollarSimpleBold,
    PiCurrencyEthBold,
    PiCurrencyEurBold,
    PiCurrencyGbpBold,
    PiCurrencyInrBold,
    PiCurrencyJpyBold,
    PiCurrencyKrwBold,
    PiCurrencyKztBold,
    PiCurrencyNgnBold,
    PiCurrencyRubBold,
    PiCursorBold,
    PiCursorClickBold,
    PiCursorTextBold,
    PiCylinderBold,
    PiDatabaseBold,
    PiDeskBold,
    PiDesktopBold,
    PiDesktopTowerBold,
    PiDetectiveBold,
    PiDevToLogoBold,
    PiDeviceMobileBold,
    PiDeviceMobileCameraBold,
    PiDeviceMobileSlashBold,
    PiDeviceMobileSpeakerBold,
    PiDeviceRotateBold,
    PiDeviceTabletBold,
    PiDeviceTabletCameraBold,
    PiDeviceTabletSpeakerBold,
    PiDevicesBold,
    PiDiamondBold,
    PiDiamondsFourBold,
    PiDiceFiveBold,
    PiDiceFourBold,
    PiDiceOneBold,
    PiDiceSixBold,
    PiDiceThreeBold,
    PiDiceTwoBold,
    PiDiscBold,
    PiDiscoBallBold,
    PiDiscordLogoBold,
    PiDivideBold,
    PiDnaBold,
    PiDogBold,
    PiDoorBold,
    PiDoorOpenBold,
    PiDotBold,
    PiDotOutlineBold,
    PiDotsNineBold,
    PiDotsSixBold,
    PiDotsSixVerticalBold,
    PiDotsThreeBold,
    PiDotsThreeCircleBold,
    PiDotsThreeCircleVerticalBold,
    PiDotsThreeOutlineBold,
    PiDotsThreeOutlineVerticalBold,
    PiDotsThreeVerticalBold,
    PiDownloadBold,
    PiDownloadSimpleBold,
    PiDressBold,
    PiDresserBold,
    PiDribbbleLogoBold,
    PiDroneBold,
    PiDropBold,
    PiDropHalfBold,
    PiDropHalfBottomBold,
    PiDropSimpleBold,
    PiDropSlashBold,
    PiDropboxLogoBold,
    PiEarBold,
    PiEarSlashBold,
    PiEggBold,
    PiEggCrackBold,
    PiEjectBold,
    PiEjectSimpleBold,
    PiElevatorBold,
    PiEmptyBold,
    PiEngineBold,
    PiEnvelopeBold,
    PiEnvelopeOpenBold,
    PiEnvelopeSimpleBold,
    PiEnvelopeSimpleOpenBold,
    PiEqualizerBold,
    PiEqualsBold,
    PiEraserBold,
    PiEscalatorDownBold,
    PiEscalatorUpBold,
    PiExamBold,
    PiExclamationMarkBold,
    PiExcludeBold,
    PiExcludeSquareBold,
    PiExportBold,
    PiEyeBold,
    PiEyeClosedBold,
    PiEyeSlashBold,
    PiEyedropperBold,
    PiEyedropperSampleBold,
    PiEyeglassesBold,
    PiEyesBold,
    PiFaceMaskBold,
    PiFacebookLogoBold,
    PiFactoryBold,
    PiFadersBold,
    PiFadersHorizontalBold,
    PiFalloutShelterBold,
    PiFanBold,
    PiFarmBold,
    PiFastForwardBold,
    PiFastForwardCircleBold,
    PiFeatherBold,
    PiFediverseLogoBold,
    PiFigmaLogoBold,
    PiFileArchiveBold,
    PiFileArrowDownBold,
    PiFileArrowUpBold,
    PiFileAudioBold,
    PiFileBold,
    PiFileCBold,
    PiFileCSharpBold,
    PiFileCloudBold,
    PiFileCodeBold,
    PiFileCppBold,
    PiFileCssBold,
    PiFileCsvBold,
    PiFileDashedBold,
    PiFileDocBold,
    PiFileHtmlBold,
    PiFileImageBold,
    PiFileIniBold,
    PiFileJpgBold,
    PiFileJsBold,
    PiFileJsxBold,
    PiFileLockBold,
    PiFileMagnifyingGlassBold,
    PiFileMdBold,
    PiFileMinusBold,
    PiFilePdfBold,
    PiFilePlusBold,
    PiFilePngBold,
    PiFilePptBold,
    PiFilePyBold,
    PiFileRsBold,
    PiFileSqlBold,
    PiFileSvgBold,
    PiFileTextBold,
    PiFileTsBold,
    PiFileTsxBold,
    PiFileTxtBold,
    PiFileVideoBold,
    PiFileVueBold,
    PiFileXBold,
    PiFileXlsBold,
    PiFileZipBold,
    PiFilesBold,
    PiFilmReelBold,
    PiFilmScriptBold,
    PiFilmSlateBold,
    PiFilmStripBold,
    PiFingerprintBold,
    PiFingerprintSimpleBold,
    PiFinnTheHumanBold,
    PiFireBold,
    PiFireExtinguisherBold,
    PiFireSimpleBold,
    PiFireTruckBold,
    PiFirstAidBold,
    PiFirstAidKitBold,
    PiFishBold,
    PiFishSimpleBold,
    PiFlagBannerBold,
    PiFlagBannerFoldBold,
    PiFlagBold,
    PiFlagCheckeredBold,
    PiFlagPennantBold,
    PiFlameBold,
    PiFlashlightBold,
    PiFlaskBold,
    PiFlipHorizontalBold,
    PiFlipVerticalBold,
    PiFloppyDiskBackBold,
    PiFloppyDiskBold,
    PiFlowArrowBold,
    PiFlowerBold,
    PiFlowerLotusBold,
    PiFlowerTulipBold,
    PiFlyingSaucerBold,
    PiFolderBold,
    PiFolderDashedBold,
    PiFolderLockBold,
    PiFolderMinusBold,
    PiFolderOpenBold,
    PiFolderPlusBold,
    PiFolderSimpleBold,
    PiFolderSimpleDashedBold,
    PiFolderSimpleLockBold,
    PiFolderSimpleMinusBold,
    PiFolderSimplePlusBold,
    PiFolderSimpleStarBold,
    PiFolderSimpleUserBold,
    PiFolderStarBold,
    PiFolderUserBold,
    PiFoldersBold,
    PiFootballBold,
    PiFootballHelmetBold,
    PiFootprintsBold,
    PiForkKnifeBold,
    PiFourKBold,
    PiFrameCornersBold,
    PiFramerLogoBold,
    PiFunctionBold,
    PiFunnelBold,
    PiFunnelSimpleBold,
    PiFunnelSimpleXBold,
    PiFunnelXBold,
    PiGameControllerBold,
    PiGarageBold,
    PiGasCanBold,
    PiGasPumpBold,
    PiGaugeBold,
    PiGavelBold,
    PiGearBold,
    PiGearFineBold,
    PiGearSixBold,
    PiGenderFemaleBold,
    PiGenderIntersexBold,
    PiGenderMaleBold,
    PiGenderNeuterBold,
    PiGenderNonbinaryBold,
    PiGenderTransgenderBold,
    PiGhostBold,
    PiGifBold,
    PiGiftBold,
    PiGitBranchBold,
    PiGitCommitBold,
    PiGitDiffBold,
    PiGitForkBold,
    PiGitMergeBold,
    PiGitPullRequestBold,
    PiGithubLogoBold,
    PiGitlabLogoBold,
    PiGitlabLogoSimpleBold,
    PiGlobeBold,
    PiGlobeHemisphereEastBold,
    PiGlobeHemisphereWestBold,
    PiGlobeSimpleBold,
    PiGlobeSimpleXBold,
    PiGlobeStandBold,
    PiGlobeXBold,
    PiGogglesBold,
    PiGolfBold,
    PiGoodreadsLogoBold,
    PiGoogleCardboardLogoBold,
    PiGoogleChromeLogoBold,
    PiGoogleDriveLogoBold,
    PiGoogleLogoBold,
    PiGooglePhotosLogoBold,
    PiGooglePlayLogoBold,
    PiGooglePodcastsLogoBold,
    PiGpsBold,
    PiGpsFixBold,
    PiGpsSlashBold,
    PiGradientBold,
    PiGraduationCapBold,
    PiGrainsBold,
    PiGrainsSlashBold,
    PiGraphBold,
    PiGraphicsCardBold,
    PiGreaterThanBold,
    PiGreaterThanOrEqualBold,
    PiGridFourBold,
    PiGridNineBold,
    PiGuitarBold,
    PiHairDryerBold,
    PiHamburgerBold,
    PiHammerBold,
    PiHandArrowDownBold,
    PiHandArrowUpBold,
    PiHandBold,
    PiHandCoinsBold,
    PiHandDepositBold,
    PiHandEyeBold,
    PiHandFistBold,
    PiHandGrabbingBold,
    PiHandHeartBold,
    PiHandPalmBold,
    PiHandPeaceBold,
    PiHandPointingBold,
    PiHandSoapBold,
    PiHandSwipeLeftBold,
    PiHandSwipeRightBold,
    PiHandTapBold,
    PiHandWavingBold,
    PiHandWithdrawBold,
    PiHandbagBold,
    PiHandbagSimpleBold,
    PiHandsClappingBold,
    PiHandsPrayingBold,
    PiHandshakeBold,
    PiHardDriveBold,
    PiHardDrivesBold,
    PiHardHatBold,
    PiHashBold,
    PiHashStraightBold,
    PiHeadCircuitBold,
    PiHeadlightsBold,
    PiHeadphonesBold,
    PiHeadsetBold,
    PiHeartBold,
    PiHeartBreakBold,
    PiHeartHalfBold,
    PiHeartStraightBold,
    PiHeartStraightBreakBold,
    PiHeartbeatBold,
    PiHexagonBold,
    PiHighDefinitionBold,
    PiHighHeelBold,
    PiHighlighterBold,
    PiHighlighterCircleBold,
    PiHockeyBold,
    PiHoodieBold,
    PiHorseBold,
    PiHospitalBold,
    PiHourglassBold,
    PiHourglassHighBold,
    PiHourglassLowBold,
    PiHourglassMediumBold,
    PiHourglassSimpleBold,
    PiHourglassSimpleHighBold,
    PiHourglassSimpleLowBold,
    PiHourglassSimpleMediumBold,
    PiHouseBold,
    PiHouseLineBold,
    PiHouseSimpleBold,
    PiHurricaneBold,
    PiIceCreamBold,
    PiIdentificationBadgeBold,
    PiIdentificationCardBold,
    PiImageBold,
    PiImageBrokenBold,
    PiImageSquareBold,
    PiImagesBold,
    PiImagesSquareBold,
    PiInfinityBold,
    PiInfoBold,
    PiInstagramLogoBold,
    PiIntersectBold,
    PiIntersectSquareBold,
    PiIntersectThreeBold,
    PiIntersectionBold,
    PiInvoiceBold,
    PiIslandBold,
    PiJarBold,
    PiJarLabelBold,
    PiJeepBold,
    PiJoystickBold,
    PiKanbanBold,
    PiKeyBold,
    PiKeyReturnBold,
    PiKeyboardBold,
    PiKeyholeBold,
    PiKnifeBold,
    PiLadderBold,
    PiLadderSimpleBold,
    PiLampBold,
    PiLampPendantBold,
    PiLaptopBold,
    PiLassoBold,
    PiLastfmLogoBold,
    PiLayoutBold,
    PiLeafBold,
    PiLecternBold,
    PiLegoBold,
    PiLegoSmileyBold,
    PiLessThanBold,
    PiLessThanOrEqualBold,
    PiLetterCircleHBold,
    PiLetterCirclePBold,
    PiLetterCircleVBold,
    PiLifebuoyBold,
    PiLightbulbBold,
    PiLightbulbFilamentBold,
    PiLighthouseBold,
    PiLightningABold,
    PiLightningBold,
    PiLightningSlashBold,
    PiLineSegmentBold,
    PiLineSegmentsBold,
    PiLineVerticalBold,
    PiLinkBold,
    PiLinkBreakBold,
    PiLinkSimpleBold,
    PiLinkSimpleBreakBold,
    PiLinkSimpleHorizontalBold,
    PiLinkSimpleHorizontalBreakBold,
    PiLinkedinLogoBold,
    PiLinktreeLogoBold,
    PiLinuxLogoBold,
    PiListBold,
    PiListBulletsBold,
    PiListChecksBold,
    PiListDashesBold,
    PiListHeartBold,
    PiListMagnifyingGlassBold,
    PiListNumbersBold,
    PiListPlusBold,
    PiListStarBold,
    PiLockBold,
    PiLockKeyBold,
    PiLockKeyOpenBold,
    PiLockLaminatedBold,
    PiLockLaminatedOpenBold,
    PiLockOpenBold,
    PiLockSimpleBold,
    PiLockSimpleOpenBold,
    PiLockersBold,
    PiLogBold,
    PiMagicWandBold,
    PiMagnetBold,
    PiMagnetStraightBold,
    PiMagnifyingGlassBold,
    PiMagnifyingGlassMinusBold,
    PiMagnifyingGlassPlusBold,
    PiMailboxBold,
    PiMapPinAreaBold,
    PiMapPinBold,
    PiMapPinLineBold,
    PiMapPinPlusBold,
    PiMapPinSimpleAreaBold,
    PiMapPinSimpleBold,
    PiMapPinSimpleLineBold,
    PiMapTrifoldBold,
    PiMarkdownLogoBold,
    PiMarkerCircleBold,
    PiMartiniBold,
    PiMaskHappyBold,
    PiMaskSadBold,
    PiMastodonLogoBold,
    PiMathOperationsBold,
    PiMatrixLogoBold,
    PiMedalBold,
    PiMedalMilitaryBold,
    PiMediumLogoBold,
    PiMegaphoneBold,
    PiMegaphoneSimpleBold,
    PiMemberOfBold,
    PiMemoryBold,
    PiMessengerLogoBold,
    PiMetaLogoBold,
    PiMeteorBold,
    PiMetronomeBold,
    PiMicrophoneBold,
    PiMicrophoneSlashBold,
    PiMicrophoneStageBold,
    PiMicroscopeBold,
    PiMicrosoftExcelLogoBold,
    PiMicrosoftOutlookLogoBold,
    PiMicrosoftPowerpointLogoBold,
    PiMicrosoftTeamsLogoBold,
    PiMicrosoftWordLogoBold,
    PiMinusBold,
    PiMinusCircleBold,
    PiMinusSquareBold,
    PiMoneyBold,
    PiMoneyWavyBold,
    PiMonitorArrowUpBold,
    PiMonitorBold,
    PiMonitorPlayBold,
    PiMoonBold,
    PiMoonStarsBold,
    PiMopedBold,
    PiMopedFrontBold,
    PiMosqueBold,
    PiMotorcycleBold,
    PiMountainsBold,
    PiMouseBold,
    PiMouseLeftClickBold,
    PiMouseMiddleClickBold,
    PiMouseRightClickBold,
    PiMouseScrollBold,
    PiMouseSimpleBold,
    PiMusicNoteBold,
    PiMusicNoteSimpleBold,
    PiMusicNotesBold,
    PiMusicNotesMinusBold,
    PiMusicNotesPlusBold,
    PiMusicNotesSimpleBold,
    PiNavigationArrowBold,
    PiNeedleBold,
    PiNetworkBold,
    PiNetworkSlashBold,
    PiNetworkXBold,
    PiNewspaperBold,
    PiNewspaperClippingBold,
    PiNotEqualsBold,
    PiNotMemberOfBold,
    PiNotSubsetOfBold,
    PiNotSupersetOfBold,
    PiNotchesBold,
    PiNoteBlankBold,
    PiNoteBold,
    PiNotePencilBold,
    PiNotebookBold,
    PiNotepadBold,
    PiNotificationBold,
    PiNotionLogoBold,
    PiNuclearPlantBold,
    PiNumberCircleEightBold,
    PiNumberCircleFiveBold,
    PiNumberCircleFourBold,
    PiNumberCircleNineBold,
    PiNumberCircleOneBold,
    PiNumberCircleSevenBold,
    PiNumberCircleSixBold,
    PiNumberCircleThreeBold,
    PiNumberCircleTwoBold,
    PiNumberCircleZeroBold,
    PiNumberEightBold,
    PiNumberFiveBold,
    PiNumberFourBold,
    PiNumberNineBold,
    PiNumberOneBold,
    PiNumberSevenBold,
    PiNumberSixBold,
    PiNumberSquareEightBold,
    PiNumberSquareFiveBold,
    PiNumberSquareFourBold,
    PiNumberSquareNineBold,
    PiNumberSquareOneBold,
    PiNumberSquareSevenBold,
    PiNumberSquareSixBold,
    PiNumberSquareThreeBold,
    PiNumberSquareTwoBold,
    PiNumberSquareZeroBold,
    PiNumberThreeBold,
    PiNumberTwoBold,
    PiNumberZeroBold,
    PiNumpadBold,
    PiNutBold,
    PiNyTimesLogoBold,
    PiOctagonBold,
    PiOfficeChairBold,
    PiOnigiriBold,
    PiOpenAiLogoBold,
    PiOptionBold,
    PiOrangeBold,
    PiOrangeSliceBold,
    PiOvenBold,
} from "react-icons/pi"

export function nameToReactIcon_pi_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "pi:PiAcornBold":
            return PiAcornBold;
        case "pi:PiAddressBookBold":
            return PiAddressBookBold;
        case "pi:PiAddressBookTabsBold":
            return PiAddressBookTabsBold;
        case "pi:PiAirTrafficControlBold":
            return PiAirTrafficControlBold;
        case "pi:PiAirplaneBold":
            return PiAirplaneBold;
        case "pi:PiAirplaneInFlightBold":
            return PiAirplaneInFlightBold;
        case "pi:PiAirplaneLandingBold":
            return PiAirplaneLandingBold;
        case "pi:PiAirplaneTakeoffBold":
            return PiAirplaneTakeoffBold;
        case "pi:PiAirplaneTaxiingBold":
            return PiAirplaneTaxiingBold;
        case "pi:PiAirplaneTiltBold":
            return PiAirplaneTiltBold;
        case "pi:PiAirplayBold":
            return PiAirplayBold;
        case "pi:PiAlarmBold":
            return PiAlarmBold;
        case "pi:PiAlienBold":
            return PiAlienBold;
        case "pi:PiAlignBottomBold":
            return PiAlignBottomBold;
        case "pi:PiAlignBottomSimpleBold":
            return PiAlignBottomSimpleBold;
        case "pi:PiAlignCenterHorizontalBold":
            return PiAlignCenterHorizontalBold;
        case "pi:PiAlignCenterHorizontalSimpleBold":
            return PiAlignCenterHorizontalSimpleBold;
        case "pi:PiAlignCenterVerticalBold":
            return PiAlignCenterVerticalBold;
        case "pi:PiAlignCenterVerticalSimpleBold":
            return PiAlignCenterVerticalSimpleBold;
        case "pi:PiAlignLeftBold":
            return PiAlignLeftBold;
        case "pi:PiAlignLeftSimpleBold":
            return PiAlignLeftSimpleBold;
        case "pi:PiAlignRightBold":
            return PiAlignRightBold;
        case "pi:PiAlignRightSimpleBold":
            return PiAlignRightSimpleBold;
        case "pi:PiAlignTopBold":
            return PiAlignTopBold;
        case "pi:PiAlignTopSimpleBold":
            return PiAlignTopSimpleBold;
        case "pi:PiAmazonLogoBold":
            return PiAmazonLogoBold;
        case "pi:PiAmbulanceBold":
            return PiAmbulanceBold;
        case "pi:PiAnchorBold":
            return PiAnchorBold;
        case "pi:PiAnchorSimpleBold":
            return PiAnchorSimpleBold;
        case "pi:PiAndroidLogoBold":
            return PiAndroidLogoBold;
        case "pi:PiAngleBold":
            return PiAngleBold;
        case "pi:PiAngularLogoBold":
            return PiAngularLogoBold;
        case "pi:PiApertureBold":
            return PiApertureBold;
        case "pi:PiAppStoreLogoBold":
            return PiAppStoreLogoBold;
        case "pi:PiAppWindowBold":
            return PiAppWindowBold;
        case "pi:PiAppleLogoBold":
            return PiAppleLogoBold;
        case "pi:PiApplePodcastsLogoBold":
            return PiApplePodcastsLogoBold;
        case "pi:PiApproximateEqualsBold":
            return PiApproximateEqualsBold;
        case "pi:PiArchiveBold":
            return PiArchiveBold;
        case "pi:PiArmchairBold":
            return PiArmchairBold;
        case "pi:PiArrowArcLeftBold":
            return PiArrowArcLeftBold;
        case "pi:PiArrowArcRightBold":
            return PiArrowArcRightBold;
        case "pi:PiArrowBendDoubleUpLeftBold":
            return PiArrowBendDoubleUpLeftBold;
        case "pi:PiArrowBendDoubleUpRightBold":
            return PiArrowBendDoubleUpRightBold;
        case "pi:PiArrowBendDownLeftBold":
            return PiArrowBendDownLeftBold;
        case "pi:PiArrowBendDownRightBold":
            return PiArrowBendDownRightBold;
        case "pi:PiArrowBendLeftDownBold":
            return PiArrowBendLeftDownBold;
        case "pi:PiArrowBendLeftUpBold":
            return PiArrowBendLeftUpBold;
        case "pi:PiArrowBendRightDownBold":
            return PiArrowBendRightDownBold;
        case "pi:PiArrowBendRightUpBold":
            return PiArrowBendRightUpBold;
        case "pi:PiArrowBendUpLeftBold":
            return PiArrowBendUpLeftBold;
        case "pi:PiArrowBendUpRightBold":
            return PiArrowBendUpRightBold;
        case "pi:PiArrowCircleDownBold":
            return PiArrowCircleDownBold;
        case "pi:PiArrowCircleDownLeftBold":
            return PiArrowCircleDownLeftBold;
        case "pi:PiArrowCircleDownRightBold":
            return PiArrowCircleDownRightBold;
        case "pi:PiArrowCircleLeftBold":
            return PiArrowCircleLeftBold;
        case "pi:PiArrowCircleRightBold":
            return PiArrowCircleRightBold;
        case "pi:PiArrowCircleUpBold":
            return PiArrowCircleUpBold;
        case "pi:PiArrowCircleUpLeftBold":
            return PiArrowCircleUpLeftBold;
        case "pi:PiArrowCircleUpRightBold":
            return PiArrowCircleUpRightBold;
        case "pi:PiArrowClockwiseBold":
            return PiArrowClockwiseBold;
        case "pi:PiArrowCounterClockwiseBold":
            return PiArrowCounterClockwiseBold;
        case "pi:PiArrowDownBold":
            return PiArrowDownBold;
        case "pi:PiArrowDownLeftBold":
            return PiArrowDownLeftBold;
        case "pi:PiArrowDownRightBold":
            return PiArrowDownRightBold;
        case "pi:PiArrowElbowDownLeftBold":
            return PiArrowElbowDownLeftBold;
        case "pi:PiArrowElbowDownRightBold":
            return PiArrowElbowDownRightBold;
        case "pi:PiArrowElbowLeftBold":
            return PiArrowElbowLeftBold;
        case "pi:PiArrowElbowLeftDownBold":
            return PiArrowElbowLeftDownBold;
        case "pi:PiArrowElbowLeftUpBold":
            return PiArrowElbowLeftUpBold;
        case "pi:PiArrowElbowRightBold":
            return PiArrowElbowRightBold;
        case "pi:PiArrowElbowRightDownBold":
            return PiArrowElbowRightDownBold;
        case "pi:PiArrowElbowRightUpBold":
            return PiArrowElbowRightUpBold;
        case "pi:PiArrowElbowUpLeftBold":
            return PiArrowElbowUpLeftBold;
        case "pi:PiArrowElbowUpRightBold":
            return PiArrowElbowUpRightBold;
        case "pi:PiArrowFatDownBold":
            return PiArrowFatDownBold;
        case "pi:PiArrowFatLeftBold":
            return PiArrowFatLeftBold;
        case "pi:PiArrowFatLineDownBold":
            return PiArrowFatLineDownBold;
        case "pi:PiArrowFatLineLeftBold":
            return PiArrowFatLineLeftBold;
        case "pi:PiArrowFatLineRightBold":
            return PiArrowFatLineRightBold;
        case "pi:PiArrowFatLineUpBold":
            return PiArrowFatLineUpBold;
        case "pi:PiArrowFatLinesDownBold":
            return PiArrowFatLinesDownBold;
        case "pi:PiArrowFatLinesLeftBold":
            return PiArrowFatLinesLeftBold;
        case "pi:PiArrowFatLinesRightBold":
            return PiArrowFatLinesRightBold;
        case "pi:PiArrowFatLinesUpBold":
            return PiArrowFatLinesUpBold;
        case "pi:PiArrowFatRightBold":
            return PiArrowFatRightBold;
        case "pi:PiArrowFatUpBold":
            return PiArrowFatUpBold;
        case "pi:PiArrowLeftBold":
            return PiArrowLeftBold;
        case "pi:PiArrowLineDownBold":
            return PiArrowLineDownBold;
        case "pi:PiArrowLineDownLeftBold":
            return PiArrowLineDownLeftBold;
        case "pi:PiArrowLineDownRightBold":
            return PiArrowLineDownRightBold;
        case "pi:PiArrowLineLeftBold":
            return PiArrowLineLeftBold;
        case "pi:PiArrowLineRightBold":
            return PiArrowLineRightBold;
        case "pi:PiArrowLineUpBold":
            return PiArrowLineUpBold;
        case "pi:PiArrowLineUpLeftBold":
            return PiArrowLineUpLeftBold;
        case "pi:PiArrowLineUpRightBold":
            return PiArrowLineUpRightBold;
        case "pi:PiArrowRightBold":
            return PiArrowRightBold;
        case "pi:PiArrowSquareDownBold":
            return PiArrowSquareDownBold;
        case "pi:PiArrowSquareDownLeftBold":
            return PiArrowSquareDownLeftBold;
        case "pi:PiArrowSquareDownRightBold":
            return PiArrowSquareDownRightBold;
        case "pi:PiArrowSquareInBold":
            return PiArrowSquareInBold;
        case "pi:PiArrowSquareLeftBold":
            return PiArrowSquareLeftBold;
        case "pi:PiArrowSquareOutBold":
            return PiArrowSquareOutBold;
        case "pi:PiArrowSquareRightBold":
            return PiArrowSquareRightBold;
        case "pi:PiArrowSquareUpBold":
            return PiArrowSquareUpBold;
        case "pi:PiArrowSquareUpLeftBold":
            return PiArrowSquareUpLeftBold;
        case "pi:PiArrowSquareUpRightBold":
            return PiArrowSquareUpRightBold;
        case "pi:PiArrowUDownLeftBold":
            return PiArrowUDownLeftBold;
        case "pi:PiArrowUDownRightBold":
            return PiArrowUDownRightBold;
        case "pi:PiArrowULeftDownBold":
            return PiArrowULeftDownBold;
        case "pi:PiArrowULeftUpBold":
            return PiArrowULeftUpBold;
        case "pi:PiArrowURightDownBold":
            return PiArrowURightDownBold;
        case "pi:PiArrowURightUpBold":
            return PiArrowURightUpBold;
        case "pi:PiArrowUUpLeftBold":
            return PiArrowUUpLeftBold;
        case "pi:PiArrowUUpRightBold":
            return PiArrowUUpRightBold;
        case "pi:PiArrowUpBold":
            return PiArrowUpBold;
        case "pi:PiArrowUpLeftBold":
            return PiArrowUpLeftBold;
        case "pi:PiArrowUpRightBold":
            return PiArrowUpRightBold;
        case "pi:PiArrowsClockwiseBold":
            return PiArrowsClockwiseBold;
        case "pi:PiArrowsCounterClockwiseBold":
            return PiArrowsCounterClockwiseBold;
        case "pi:PiArrowsDownUpBold":
            return PiArrowsDownUpBold;
        case "pi:PiArrowsHorizontalBold":
            return PiArrowsHorizontalBold;
        case "pi:PiArrowsInBold":
            return PiArrowsInBold;
        case "pi:PiArrowsInCardinalBold":
            return PiArrowsInCardinalBold;
        case "pi:PiArrowsInLineHorizontalBold":
            return PiArrowsInLineHorizontalBold;
        case "pi:PiArrowsInLineVerticalBold":
            return PiArrowsInLineVerticalBold;
        case "pi:PiArrowsInSimpleBold":
            return PiArrowsInSimpleBold;
        case "pi:PiArrowsLeftRightBold":
            return PiArrowsLeftRightBold;
        case "pi:PiArrowsMergeBold":
            return PiArrowsMergeBold;
        case "pi:PiArrowsOutBold":
            return PiArrowsOutBold;
        case "pi:PiArrowsOutCardinalBold":
            return PiArrowsOutCardinalBold;
        case "pi:PiArrowsOutLineHorizontalBold":
            return PiArrowsOutLineHorizontalBold;
        case "pi:PiArrowsOutLineVerticalBold":
            return PiArrowsOutLineVerticalBold;
        case "pi:PiArrowsOutSimpleBold":
            return PiArrowsOutSimpleBold;
        case "pi:PiArrowsSplitBold":
            return PiArrowsSplitBold;
        case "pi:PiArrowsVerticalBold":
            return PiArrowsVerticalBold;
        case "pi:PiArticleBold":
            return PiArticleBold;
        case "pi:PiArticleMediumBold":
            return PiArticleMediumBold;
        case "pi:PiArticleNyTimesBold":
            return PiArticleNyTimesBold;
        case "pi:PiAsclepiusBold":
            return PiAsclepiusBold;
        case "pi:PiAsteriskBold":
            return PiAsteriskBold;
        case "pi:PiAsteriskSimpleBold":
            return PiAsteriskSimpleBold;
        case "pi:PiAtBold":
            return PiAtBold;
        case "pi:PiAtomBold":
            return PiAtomBold;
        case "pi:PiAvocadoBold":
            return PiAvocadoBold;
        case "pi:PiAxeBold":
            return PiAxeBold;
        case "pi:PiBabyBold":
            return PiBabyBold;
        case "pi:PiBabyCarriageBold":
            return PiBabyCarriageBold;
        case "pi:PiBackpackBold":
            return PiBackpackBold;
        case "pi:PiBackspaceBold":
            return PiBackspaceBold;
        case "pi:PiBagBold":
            return PiBagBold;
        case "pi:PiBagSimpleBold":
            return PiBagSimpleBold;
        case "pi:PiBalloonBold":
            return PiBalloonBold;
        case "pi:PiBandaidsBold":
            return PiBandaidsBold;
        case "pi:PiBankBold":
            return PiBankBold;
        case "pi:PiBarbellBold":
            return PiBarbellBold;
        case "pi:PiBarcodeBold":
            return PiBarcodeBold;
        case "pi:PiBarnBold":
            return PiBarnBold;
        case "pi:PiBarricadeBold":
            return PiBarricadeBold;
        case "pi:PiBaseballBold":
            return PiBaseballBold;
        case "pi:PiBaseballCapBold":
            return PiBaseballCapBold;
        case "pi:PiBaseballHelmetBold":
            return PiBaseballHelmetBold;
        case "pi:PiBasketBold":
            return PiBasketBold;
        case "pi:PiBasketballBold":
            return PiBasketballBold;
        case "pi:PiBathtubBold":
            return PiBathtubBold;
        case "pi:PiBatteryChargingBold":
            return PiBatteryChargingBold;
        case "pi:PiBatteryChargingVerticalBold":
            return PiBatteryChargingVerticalBold;
        case "pi:PiBatteryEmptyBold":
            return PiBatteryEmptyBold;
        case "pi:PiBatteryFullBold":
            return PiBatteryFullBold;
        case "pi:PiBatteryHighBold":
            return PiBatteryHighBold;
        case "pi:PiBatteryLowBold":
            return PiBatteryLowBold;
        case "pi:PiBatteryMediumBold":
            return PiBatteryMediumBold;
        case "pi:PiBatteryPlusBold":
            return PiBatteryPlusBold;
        case "pi:PiBatteryPlusVerticalBold":
            return PiBatteryPlusVerticalBold;
        case "pi:PiBatteryVerticalEmptyBold":
            return PiBatteryVerticalEmptyBold;
        case "pi:PiBatteryVerticalFullBold":
            return PiBatteryVerticalFullBold;
        case "pi:PiBatteryVerticalHighBold":
            return PiBatteryVerticalHighBold;
        case "pi:PiBatteryVerticalLowBold":
            return PiBatteryVerticalLowBold;
        case "pi:PiBatteryVerticalMediumBold":
            return PiBatteryVerticalMediumBold;
        case "pi:PiBatteryWarningBold":
            return PiBatteryWarningBold;
        case "pi:PiBatteryWarningVerticalBold":
            return PiBatteryWarningVerticalBold;
        case "pi:PiBeachBallBold":
            return PiBeachBallBold;
        case "pi:PiBeanieBold":
            return PiBeanieBold;
        case "pi:PiBedBold":
            return PiBedBold;
        case "pi:PiBeerBottleBold":
            return PiBeerBottleBold;
        case "pi:PiBeerSteinBold":
            return PiBeerSteinBold;
        case "pi:PiBehanceLogoBold":
            return PiBehanceLogoBold;
        case "pi:PiBellBold":
            return PiBellBold;
        case "pi:PiBellRingingBold":
            return PiBellRingingBold;
        case "pi:PiBellSimpleBold":
            return PiBellSimpleBold;
        case "pi:PiBellSimpleRingingBold":
            return PiBellSimpleRingingBold;
        case "pi:PiBellSimpleSlashBold":
            return PiBellSimpleSlashBold;
        case "pi:PiBellSimpleZBold":
            return PiBellSimpleZBold;
        case "pi:PiBellSlashBold":
            return PiBellSlashBold;
        case "pi:PiBellZBold":
            return PiBellZBold;
        case "pi:PiBeltBold":
            return PiBeltBold;
        case "pi:PiBezierCurveBold":
            return PiBezierCurveBold;
        case "pi:PiBicycleBold":
            return PiBicycleBold;
        case "pi:PiBinaryBold":
            return PiBinaryBold;
        case "pi:PiBinocularsBold":
            return PiBinocularsBold;
        case "pi:PiBiohazardBold":
            return PiBiohazardBold;
        case "pi:PiBirdBold":
            return PiBirdBold;
        case "pi:PiBlueprintBold":
            return PiBlueprintBold;
        case "pi:PiBluetoothBold":
            return PiBluetoothBold;
        case "pi:PiBluetoothConnectedBold":
            return PiBluetoothConnectedBold;
        case "pi:PiBluetoothSlashBold":
            return PiBluetoothSlashBold;
        case "pi:PiBluetoothXBold":
            return PiBluetoothXBold;
        case "pi:PiBoatBold":
            return PiBoatBold;
        case "pi:PiBombBold":
            return PiBombBold;
        case "pi:PiBoneBold":
            return PiBoneBold;
        case "pi:PiBookBold":
            return PiBookBold;
        case "pi:PiBookBookmarkBold":
            return PiBookBookmarkBold;
        case "pi:PiBookOpenBold":
            return PiBookOpenBold;
        case "pi:PiBookOpenTextBold":
            return PiBookOpenTextBold;
        case "pi:PiBookOpenUserBold":
            return PiBookOpenUserBold;
        case "pi:PiBookmarkBold":
            return PiBookmarkBold;
        case "pi:PiBookmarkSimpleBold":
            return PiBookmarkSimpleBold;
        case "pi:PiBookmarksBold":
            return PiBookmarksBold;
        case "pi:PiBookmarksSimpleBold":
            return PiBookmarksSimpleBold;
        case "pi:PiBooksBold":
            return PiBooksBold;
        case "pi:PiBootBold":
            return PiBootBold;
        case "pi:PiBoulesBold":
            return PiBoulesBold;
        case "pi:PiBoundingBoxBold":
            return PiBoundingBoxBold;
        case "pi:PiBowlFoodBold":
            return PiBowlFoodBold;
        case "pi:PiBowlSteamBold":
            return PiBowlSteamBold;
        case "pi:PiBowlingBallBold":
            return PiBowlingBallBold;
        case "pi:PiBoxArrowDownBold":
            return PiBoxArrowDownBold;
        case "pi:PiBoxArrowUpBold":
            return PiBoxArrowUpBold;
        case "pi:PiBoxingGloveBold":
            return PiBoxingGloveBold;
        case "pi:PiBracketsAngleBold":
            return PiBracketsAngleBold;
        case "pi:PiBracketsCurlyBold":
            return PiBracketsCurlyBold;
        case "pi:PiBracketsRoundBold":
            return PiBracketsRoundBold;
        case "pi:PiBracketsSquareBold":
            return PiBracketsSquareBold;
        case "pi:PiBrainBold":
            return PiBrainBold;
        case "pi:PiBrandyBold":
            return PiBrandyBold;
        case "pi:PiBreadBold":
            return PiBreadBold;
        case "pi:PiBridgeBold":
            return PiBridgeBold;
        case "pi:PiBriefcaseBold":
            return PiBriefcaseBold;
        case "pi:PiBriefcaseMetalBold":
            return PiBriefcaseMetalBold;
        case "pi:PiBroadcastBold":
            return PiBroadcastBold;
        case "pi:PiBroomBold":
            return PiBroomBold;
        case "pi:PiBrowserBold":
            return PiBrowserBold;
        case "pi:PiBrowsersBold":
            return PiBrowsersBold;
        case "pi:PiBugBeetleBold":
            return PiBugBeetleBold;
        case "pi:PiBugBold":
            return PiBugBold;
        case "pi:PiBugDroidBold":
            return PiBugDroidBold;
        case "pi:PiBuildingApartmentBold":
            return PiBuildingApartmentBold;
        case "pi:PiBuildingBold":
            return PiBuildingBold;
        case "pi:PiBuildingOfficeBold":
            return PiBuildingOfficeBold;
        case "pi:PiBuildingsBold":
            return PiBuildingsBold;
        case "pi:PiBulldozerBold":
            return PiBulldozerBold;
        case "pi:PiBusBold":
            return PiBusBold;
        case "pi:PiButterflyBold":
            return PiButterflyBold;
        case "pi:PiCableCarBold":
            return PiCableCarBold;
        case "pi:PiCactusBold":
            return PiCactusBold;
        case "pi:PiCakeBold":
            return PiCakeBold;
        case "pi:PiCalculatorBold":
            return PiCalculatorBold;
        case "pi:PiCalendarBlankBold":
            return PiCalendarBlankBold;
        case "pi:PiCalendarBold":
            return PiCalendarBold;
        case "pi:PiCalendarCheckBold":
            return PiCalendarCheckBold;
        case "pi:PiCalendarDotBold":
            return PiCalendarDotBold;
        case "pi:PiCalendarDotsBold":
            return PiCalendarDotsBold;
        case "pi:PiCalendarHeartBold":
            return PiCalendarHeartBold;
        case "pi:PiCalendarMinusBold":
            return PiCalendarMinusBold;
        case "pi:PiCalendarPlusBold":
            return PiCalendarPlusBold;
        case "pi:PiCalendarSlashBold":
            return PiCalendarSlashBold;
        case "pi:PiCalendarStarBold":
            return PiCalendarStarBold;
        case "pi:PiCalendarXBold":
            return PiCalendarXBold;
        case "pi:PiCallBellBold":
            return PiCallBellBold;
        case "pi:PiCameraBold":
            return PiCameraBold;
        case "pi:PiCameraPlusBold":
            return PiCameraPlusBold;
        case "pi:PiCameraRotateBold":
            return PiCameraRotateBold;
        case "pi:PiCameraSlashBold":
            return PiCameraSlashBold;
        case "pi:PiCampfireBold":
            return PiCampfireBold;
        case "pi:PiCarBatteryBold":
            return PiCarBatteryBold;
        case "pi:PiCarBold":
            return PiCarBold;
        case "pi:PiCarProfileBold":
            return PiCarProfileBold;
        case "pi:PiCarSimpleBold":
            return PiCarSimpleBold;
        case "pi:PiCardholderBold":
            return PiCardholderBold;
        case "pi:PiCardsBold":
            return PiCardsBold;
        case "pi:PiCardsThreeBold":
            return PiCardsThreeBold;
        case "pi:PiCaretCircleDoubleDownBold":
            return PiCaretCircleDoubleDownBold;
        case "pi:PiCaretCircleDoubleLeftBold":
            return PiCaretCircleDoubleLeftBold;
        case "pi:PiCaretCircleDoubleRightBold":
            return PiCaretCircleDoubleRightBold;
        case "pi:PiCaretCircleDoubleUpBold":
            return PiCaretCircleDoubleUpBold;
        case "pi:PiCaretCircleDownBold":
            return PiCaretCircleDownBold;
        case "pi:PiCaretCircleLeftBold":
            return PiCaretCircleLeftBold;
        case "pi:PiCaretCircleRightBold":
            return PiCaretCircleRightBold;
        case "pi:PiCaretCircleUpBold":
            return PiCaretCircleUpBold;
        case "pi:PiCaretCircleUpDownBold":
            return PiCaretCircleUpDownBold;
        case "pi:PiCaretDoubleDownBold":
            return PiCaretDoubleDownBold;
        case "pi:PiCaretDoubleLeftBold":
            return PiCaretDoubleLeftBold;
        case "pi:PiCaretDoubleRightBold":
            return PiCaretDoubleRightBold;
        case "pi:PiCaretDoubleUpBold":
            return PiCaretDoubleUpBold;
        case "pi:PiCaretDownBold":
            return PiCaretDownBold;
        case "pi:PiCaretLeftBold":
            return PiCaretLeftBold;
        case "pi:PiCaretLineDownBold":
            return PiCaretLineDownBold;
        case "pi:PiCaretLineLeftBold":
            return PiCaretLineLeftBold;
        case "pi:PiCaretLineRightBold":
            return PiCaretLineRightBold;
        case "pi:PiCaretLineUpBold":
            return PiCaretLineUpBold;
        case "pi:PiCaretRightBold":
            return PiCaretRightBold;
        case "pi:PiCaretUpBold":
            return PiCaretUpBold;
        case "pi:PiCaretUpDownBold":
            return PiCaretUpDownBold;
        case "pi:PiCarrotBold":
            return PiCarrotBold;
        case "pi:PiCashRegisterBold":
            return PiCashRegisterBold;
        case "pi:PiCassetteTapeBold":
            return PiCassetteTapeBold;
        case "pi:PiCastleTurretBold":
            return PiCastleTurretBold;
        case "pi:PiCatBold":
            return PiCatBold;
        case "pi:PiCellSignalFullBold":
            return PiCellSignalFullBold;
        case "pi:PiCellSignalHighBold":
            return PiCellSignalHighBold;
        case "pi:PiCellSignalLowBold":
            return PiCellSignalLowBold;
        case "pi:PiCellSignalMediumBold":
            return PiCellSignalMediumBold;
        case "pi:PiCellSignalNoneBold":
            return PiCellSignalNoneBold;
        case "pi:PiCellSignalSlashBold":
            return PiCellSignalSlashBold;
        case "pi:PiCellSignalXBold":
            return PiCellSignalXBold;
        case "pi:PiCellTowerBold":
            return PiCellTowerBold;
        case "pi:PiCertificateBold":
            return PiCertificateBold;
        case "pi:PiChairBold":
            return PiChairBold;
        case "pi:PiChalkboardBold":
            return PiChalkboardBold;
        case "pi:PiChalkboardSimpleBold":
            return PiChalkboardSimpleBold;
        case "pi:PiChalkboardTeacherBold":
            return PiChalkboardTeacherBold;
        case "pi:PiChampagneBold":
            return PiChampagneBold;
        case "pi:PiChargingStationBold":
            return PiChargingStationBold;
        case "pi:PiChartBarBold":
            return PiChartBarBold;
        case "pi:PiChartBarHorizontalBold":
            return PiChartBarHorizontalBold;
        case "pi:PiChartDonutBold":
            return PiChartDonutBold;
        case "pi:PiChartLineBold":
            return PiChartLineBold;
        case "pi:PiChartLineDownBold":
            return PiChartLineDownBold;
        case "pi:PiChartLineUpBold":
            return PiChartLineUpBold;
        case "pi:PiChartPieBold":
            return PiChartPieBold;
        case "pi:PiChartPieSliceBold":
            return PiChartPieSliceBold;
        case "pi:PiChartPolarBold":
            return PiChartPolarBold;
        case "pi:PiChartScatterBold":
            return PiChartScatterBold;
        case "pi:PiChatBold":
            return PiChatBold;
        case "pi:PiChatCenteredBold":
            return PiChatCenteredBold;
        case "pi:PiChatCenteredDotsBold":
            return PiChatCenteredDotsBold;
        case "pi:PiChatCenteredSlashBold":
            return PiChatCenteredSlashBold;
        case "pi:PiChatCenteredTextBold":
            return PiChatCenteredTextBold;
        case "pi:PiChatCircleBold":
            return PiChatCircleBold;
        case "pi:PiChatCircleDotsBold":
            return PiChatCircleDotsBold;
        case "pi:PiChatCircleSlashBold":
            return PiChatCircleSlashBold;
        case "pi:PiChatCircleTextBold":
            return PiChatCircleTextBold;
        case "pi:PiChatDotsBold":
            return PiChatDotsBold;
        case "pi:PiChatSlashBold":
            return PiChatSlashBold;
        case "pi:PiChatTeardropBold":
            return PiChatTeardropBold;
        case "pi:PiChatTeardropDotsBold":
            return PiChatTeardropDotsBold;
        case "pi:PiChatTeardropSlashBold":
            return PiChatTeardropSlashBold;
        case "pi:PiChatTeardropTextBold":
            return PiChatTeardropTextBold;
        case "pi:PiChatTextBold":
            return PiChatTextBold;
        case "pi:PiChatsBold":
            return PiChatsBold;
        case "pi:PiChatsCircleBold":
            return PiChatsCircleBold;
        case "pi:PiChatsTeardropBold":
            return PiChatsTeardropBold;
        case "pi:PiCheckBold":
            return PiCheckBold;
        case "pi:PiCheckCircleBold":
            return PiCheckCircleBold;
        case "pi:PiCheckFatBold":
            return PiCheckFatBold;
        case "pi:PiCheckSquareBold":
            return PiCheckSquareBold;
        case "pi:PiCheckSquareOffsetBold":
            return PiCheckSquareOffsetBold;
        case "pi:PiCheckerboardBold":
            return PiCheckerboardBold;
        case "pi:PiChecksBold":
            return PiChecksBold;
        case "pi:PiCheersBold":
            return PiCheersBold;
        case "pi:PiCheeseBold":
            return PiCheeseBold;
        case "pi:PiChefHatBold":
            return PiChefHatBold;
        case "pi:PiCherriesBold":
            return PiCherriesBold;
        case "pi:PiChurchBold":
            return PiChurchBold;
        case "pi:PiCigaretteBold":
            return PiCigaretteBold;
        case "pi:PiCigaretteSlashBold":
            return PiCigaretteSlashBold;
        case "pi:PiCircleBold":
            return PiCircleBold;
        case "pi:PiCircleDashedBold":
            return PiCircleDashedBold;
        case "pi:PiCircleHalfBold":
            return PiCircleHalfBold;
        case "pi:PiCircleHalfTiltBold":
            return PiCircleHalfTiltBold;
        case "pi:PiCircleNotchBold":
            return PiCircleNotchBold;
        case "pi:PiCirclesFourBold":
            return PiCirclesFourBold;
        case "pi:PiCirclesThreeBold":
            return PiCirclesThreeBold;
        case "pi:PiCirclesThreePlusBold":
            return PiCirclesThreePlusBold;
        case "pi:PiCircuitryBold":
            return PiCircuitryBold;
        case "pi:PiCityBold":
            return PiCityBold;
        case "pi:PiClipboardBold":
            return PiClipboardBold;
        case "pi:PiClipboardTextBold":
            return PiClipboardTextBold;
        case "pi:PiClockAfternoonBold":
            return PiClockAfternoonBold;
        case "pi:PiClockBold":
            return PiClockBold;
        case "pi:PiClockClockwiseBold":
            return PiClockClockwiseBold;
        case "pi:PiClockCountdownBold":
            return PiClockCountdownBold;
        case "pi:PiClockCounterClockwiseBold":
            return PiClockCounterClockwiseBold;
        case "pi:PiClockUserBold":
            return PiClockUserBold;
        case "pi:PiClosedCaptioningBold":
            return PiClosedCaptioningBold;
        case "pi:PiCloudArrowDownBold":
            return PiCloudArrowDownBold;
        case "pi:PiCloudArrowUpBold":
            return PiCloudArrowUpBold;
        case "pi:PiCloudBold":
            return PiCloudBold;
        case "pi:PiCloudCheckBold":
            return PiCloudCheckBold;
        case "pi:PiCloudFogBold":
            return PiCloudFogBold;
        case "pi:PiCloudLightningBold":
            return PiCloudLightningBold;
        case "pi:PiCloudMoonBold":
            return PiCloudMoonBold;
        case "pi:PiCloudRainBold":
            return PiCloudRainBold;
        case "pi:PiCloudSlashBold":
            return PiCloudSlashBold;
        case "pi:PiCloudSnowBold":
            return PiCloudSnowBold;
        case "pi:PiCloudSunBold":
            return PiCloudSunBold;
        case "pi:PiCloudWarningBold":
            return PiCloudWarningBold;
        case "pi:PiCloudXBold":
            return PiCloudXBold;
        case "pi:PiCloverBold":
            return PiCloverBold;
        case "pi:PiClubBold":
            return PiClubBold;
        case "pi:PiCoatHangerBold":
            return PiCoatHangerBold;
        case "pi:PiCodaLogoBold":
            return PiCodaLogoBold;
        case "pi:PiCodeBlockBold":
            return PiCodeBlockBold;
        case "pi:PiCodeBold":
            return PiCodeBold;
        case "pi:PiCodeSimpleBold":
            return PiCodeSimpleBold;
        case "pi:PiCodepenLogoBold":
            return PiCodepenLogoBold;
        case "pi:PiCodesandboxLogoBold":
            return PiCodesandboxLogoBold;
        case "pi:PiCoffeeBeanBold":
            return PiCoffeeBeanBold;
        case "pi:PiCoffeeBold":
            return PiCoffeeBold;
        case "pi:PiCoinBold":
            return PiCoinBold;
        case "pi:PiCoinVerticalBold":
            return PiCoinVerticalBold;
        case "pi:PiCoinsBold":
            return PiCoinsBold;
        case "pi:PiColumnsBold":
            return PiColumnsBold;
        case "pi:PiColumnsPlusLeftBold":
            return PiColumnsPlusLeftBold;
        case "pi:PiColumnsPlusRightBold":
            return PiColumnsPlusRightBold;
        case "pi:PiCommandBold":
            return PiCommandBold;
        case "pi:PiCompassBold":
            return PiCompassBold;
        case "pi:PiCompassRoseBold":
            return PiCompassRoseBold;
        case "pi:PiCompassToolBold":
            return PiCompassToolBold;
        case "pi:PiComputerTowerBold":
            return PiComputerTowerBold;
        case "pi:PiConfettiBold":
            return PiConfettiBold;
        case "pi:PiContactlessPaymentBold":
            return PiContactlessPaymentBold;
        case "pi:PiControlBold":
            return PiControlBold;
        case "pi:PiCookieBold":
            return PiCookieBold;
        case "pi:PiCookingPotBold":
            return PiCookingPotBold;
        case "pi:PiCopyBold":
            return PiCopyBold;
        case "pi:PiCopySimpleBold":
            return PiCopySimpleBold;
        case "pi:PiCopyleftBold":
            return PiCopyleftBold;
        case "pi:PiCopyrightBold":
            return PiCopyrightBold;
        case "pi:PiCornersInBold":
            return PiCornersInBold;
        case "pi:PiCornersOutBold":
            return PiCornersOutBold;
        case "pi:PiCouchBold":
            return PiCouchBold;
        case "pi:PiCourtBasketballBold":
            return PiCourtBasketballBold;
        case "pi:PiCowBold":
            return PiCowBold;
        case "pi:PiCowboyHatBold":
            return PiCowboyHatBold;
        case "pi:PiCpuBold":
            return PiCpuBold;
        case "pi:PiCraneBold":
            return PiCraneBold;
        case "pi:PiCraneTowerBold":
            return PiCraneTowerBold;
        case "pi:PiCreditCardBold":
            return PiCreditCardBold;
        case "pi:PiCricketBold":
            return PiCricketBold;
        case "pi:PiCropBold":
            return PiCropBold;
        case "pi:PiCrossBold":
            return PiCrossBold;
        case "pi:PiCrosshairBold":
            return PiCrosshairBold;
        case "pi:PiCrosshairSimpleBold":
            return PiCrosshairSimpleBold;
        case "pi:PiCrownBold":
            return PiCrownBold;
        case "pi:PiCrownCrossBold":
            return PiCrownCrossBold;
        case "pi:PiCrownSimpleBold":
            return PiCrownSimpleBold;
        case "pi:PiCubeBold":
            return PiCubeBold;
        case "pi:PiCubeFocusBold":
            return PiCubeFocusBold;
        case "pi:PiCubeTransparentBold":
            return PiCubeTransparentBold;
        case "pi:PiCurrencyBtcBold":
            return PiCurrencyBtcBold;
        case "pi:PiCurrencyCircleDollarBold":
            return PiCurrencyCircleDollarBold;
        case "pi:PiCurrencyCnyBold":
            return PiCurrencyCnyBold;
        case "pi:PiCurrencyDollarBold":
            return PiCurrencyDollarBold;
        case "pi:PiCurrencyDollarSimpleBold":
            return PiCurrencyDollarSimpleBold;
        case "pi:PiCurrencyEthBold":
            return PiCurrencyEthBold;
        case "pi:PiCurrencyEurBold":
            return PiCurrencyEurBold;
        case "pi:PiCurrencyGbpBold":
            return PiCurrencyGbpBold;
        case "pi:PiCurrencyInrBold":
            return PiCurrencyInrBold;
        case "pi:PiCurrencyJpyBold":
            return PiCurrencyJpyBold;
        case "pi:PiCurrencyKrwBold":
            return PiCurrencyKrwBold;
        case "pi:PiCurrencyKztBold":
            return PiCurrencyKztBold;
        case "pi:PiCurrencyNgnBold":
            return PiCurrencyNgnBold;
        case "pi:PiCurrencyRubBold":
            return PiCurrencyRubBold;
        case "pi:PiCursorBold":
            return PiCursorBold;
        case "pi:PiCursorClickBold":
            return PiCursorClickBold;
        case "pi:PiCursorTextBold":
            return PiCursorTextBold;
        case "pi:PiCylinderBold":
            return PiCylinderBold;
        case "pi:PiDatabaseBold":
            return PiDatabaseBold;
        case "pi:PiDeskBold":
            return PiDeskBold;
        case "pi:PiDesktopBold":
            return PiDesktopBold;
        case "pi:PiDesktopTowerBold":
            return PiDesktopTowerBold;
        case "pi:PiDetectiveBold":
            return PiDetectiveBold;
        case "pi:PiDevToLogoBold":
            return PiDevToLogoBold;
        case "pi:PiDeviceMobileBold":
            return PiDeviceMobileBold;
        case "pi:PiDeviceMobileCameraBold":
            return PiDeviceMobileCameraBold;
        case "pi:PiDeviceMobileSlashBold":
            return PiDeviceMobileSlashBold;
        case "pi:PiDeviceMobileSpeakerBold":
            return PiDeviceMobileSpeakerBold;
        case "pi:PiDeviceRotateBold":
            return PiDeviceRotateBold;
        case "pi:PiDeviceTabletBold":
            return PiDeviceTabletBold;
        case "pi:PiDeviceTabletCameraBold":
            return PiDeviceTabletCameraBold;
        case "pi:PiDeviceTabletSpeakerBold":
            return PiDeviceTabletSpeakerBold;
        case "pi:PiDevicesBold":
            return PiDevicesBold;
        case "pi:PiDiamondBold":
            return PiDiamondBold;
        case "pi:PiDiamondsFourBold":
            return PiDiamondsFourBold;
        case "pi:PiDiceFiveBold":
            return PiDiceFiveBold;
        case "pi:PiDiceFourBold":
            return PiDiceFourBold;
        case "pi:PiDiceOneBold":
            return PiDiceOneBold;
        case "pi:PiDiceSixBold":
            return PiDiceSixBold;
        case "pi:PiDiceThreeBold":
            return PiDiceThreeBold;
        case "pi:PiDiceTwoBold":
            return PiDiceTwoBold;
        case "pi:PiDiscBold":
            return PiDiscBold;
        case "pi:PiDiscoBallBold":
            return PiDiscoBallBold;
        case "pi:PiDiscordLogoBold":
            return PiDiscordLogoBold;
        case "pi:PiDivideBold":
            return PiDivideBold;
        case "pi:PiDnaBold":
            return PiDnaBold;
        case "pi:PiDogBold":
            return PiDogBold;
        case "pi:PiDoorBold":
            return PiDoorBold;
        case "pi:PiDoorOpenBold":
            return PiDoorOpenBold;
        case "pi:PiDotBold":
            return PiDotBold;
        case "pi:PiDotOutlineBold":
            return PiDotOutlineBold;
        case "pi:PiDotsNineBold":
            return PiDotsNineBold;
        case "pi:PiDotsSixBold":
            return PiDotsSixBold;
        case "pi:PiDotsSixVerticalBold":
            return PiDotsSixVerticalBold;
        case "pi:PiDotsThreeBold":
            return PiDotsThreeBold;
        case "pi:PiDotsThreeCircleBold":
            return PiDotsThreeCircleBold;
        case "pi:PiDotsThreeCircleVerticalBold":
            return PiDotsThreeCircleVerticalBold;
        case "pi:PiDotsThreeOutlineBold":
            return PiDotsThreeOutlineBold;
        case "pi:PiDotsThreeOutlineVerticalBold":
            return PiDotsThreeOutlineVerticalBold;
        case "pi:PiDotsThreeVerticalBold":
            return PiDotsThreeVerticalBold;
        case "pi:PiDownloadBold":
            return PiDownloadBold;
        case "pi:PiDownloadSimpleBold":
            return PiDownloadSimpleBold;
        case "pi:PiDressBold":
            return PiDressBold;
        case "pi:PiDresserBold":
            return PiDresserBold;
        case "pi:PiDribbbleLogoBold":
            return PiDribbbleLogoBold;
        case "pi:PiDroneBold":
            return PiDroneBold;
        case "pi:PiDropBold":
            return PiDropBold;
        case "pi:PiDropHalfBold":
            return PiDropHalfBold;
        case "pi:PiDropHalfBottomBold":
            return PiDropHalfBottomBold;
        case "pi:PiDropSimpleBold":
            return PiDropSimpleBold;
        case "pi:PiDropSlashBold":
            return PiDropSlashBold;
        case "pi:PiDropboxLogoBold":
            return PiDropboxLogoBold;
        case "pi:PiEarBold":
            return PiEarBold;
        case "pi:PiEarSlashBold":
            return PiEarSlashBold;
        case "pi:PiEggBold":
            return PiEggBold;
        case "pi:PiEggCrackBold":
            return PiEggCrackBold;
        case "pi:PiEjectBold":
            return PiEjectBold;
        case "pi:PiEjectSimpleBold":
            return PiEjectSimpleBold;
        case "pi:PiElevatorBold":
            return PiElevatorBold;
        case "pi:PiEmptyBold":
            return PiEmptyBold;
        case "pi:PiEngineBold":
            return PiEngineBold;
        case "pi:PiEnvelopeBold":
            return PiEnvelopeBold;
        case "pi:PiEnvelopeOpenBold":
            return PiEnvelopeOpenBold;
        case "pi:PiEnvelopeSimpleBold":
            return PiEnvelopeSimpleBold;
        case "pi:PiEnvelopeSimpleOpenBold":
            return PiEnvelopeSimpleOpenBold;
        case "pi:PiEqualizerBold":
            return PiEqualizerBold;
        case "pi:PiEqualsBold":
            return PiEqualsBold;
        case "pi:PiEraserBold":
            return PiEraserBold;
        case "pi:PiEscalatorDownBold":
            return PiEscalatorDownBold;
        case "pi:PiEscalatorUpBold":
            return PiEscalatorUpBold;
        case "pi:PiExamBold":
            return PiExamBold;
        case "pi:PiExclamationMarkBold":
            return PiExclamationMarkBold;
        case "pi:PiExcludeBold":
            return PiExcludeBold;
        case "pi:PiExcludeSquareBold":
            return PiExcludeSquareBold;
        case "pi:PiExportBold":
            return PiExportBold;
        case "pi:PiEyeBold":
            return PiEyeBold;
        case "pi:PiEyeClosedBold":
            return PiEyeClosedBold;
        case "pi:PiEyeSlashBold":
            return PiEyeSlashBold;
        case "pi:PiEyedropperBold":
            return PiEyedropperBold;
        case "pi:PiEyedropperSampleBold":
            return PiEyedropperSampleBold;
        case "pi:PiEyeglassesBold":
            return PiEyeglassesBold;
        case "pi:PiEyesBold":
            return PiEyesBold;
        case "pi:PiFaceMaskBold":
            return PiFaceMaskBold;
        case "pi:PiFacebookLogoBold":
            return PiFacebookLogoBold;
        case "pi:PiFactoryBold":
            return PiFactoryBold;
        case "pi:PiFadersBold":
            return PiFadersBold;
        case "pi:PiFadersHorizontalBold":
            return PiFadersHorizontalBold;
        case "pi:PiFalloutShelterBold":
            return PiFalloutShelterBold;
        case "pi:PiFanBold":
            return PiFanBold;
        case "pi:PiFarmBold":
            return PiFarmBold;
        case "pi:PiFastForwardBold":
            return PiFastForwardBold;
        case "pi:PiFastForwardCircleBold":
            return PiFastForwardCircleBold;
        case "pi:PiFeatherBold":
            return PiFeatherBold;
        case "pi:PiFediverseLogoBold":
            return PiFediverseLogoBold;
        case "pi:PiFigmaLogoBold":
            return PiFigmaLogoBold;
        case "pi:PiFileArchiveBold":
            return PiFileArchiveBold;
        case "pi:PiFileArrowDownBold":
            return PiFileArrowDownBold;
        case "pi:PiFileArrowUpBold":
            return PiFileArrowUpBold;
        case "pi:PiFileAudioBold":
            return PiFileAudioBold;
        case "pi:PiFileBold":
            return PiFileBold;
        case "pi:PiFileCBold":
            return PiFileCBold;
        case "pi:PiFileCSharpBold":
            return PiFileCSharpBold;
        case "pi:PiFileCloudBold":
            return PiFileCloudBold;
        case "pi:PiFileCodeBold":
            return PiFileCodeBold;
        case "pi:PiFileCppBold":
            return PiFileCppBold;
        case "pi:PiFileCssBold":
            return PiFileCssBold;
        case "pi:PiFileCsvBold":
            return PiFileCsvBold;
        case "pi:PiFileDashedBold":
            return PiFileDashedBold;
        case "pi:PiFileDocBold":
            return PiFileDocBold;
        case "pi:PiFileHtmlBold":
            return PiFileHtmlBold;
        case "pi:PiFileImageBold":
            return PiFileImageBold;
        case "pi:PiFileIniBold":
            return PiFileIniBold;
        case "pi:PiFileJpgBold":
            return PiFileJpgBold;
        case "pi:PiFileJsBold":
            return PiFileJsBold;
        case "pi:PiFileJsxBold":
            return PiFileJsxBold;
        case "pi:PiFileLockBold":
            return PiFileLockBold;
        case "pi:PiFileMagnifyingGlassBold":
            return PiFileMagnifyingGlassBold;
        case "pi:PiFileMdBold":
            return PiFileMdBold;
        case "pi:PiFileMinusBold":
            return PiFileMinusBold;
        case "pi:PiFilePdfBold":
            return PiFilePdfBold;
        case "pi:PiFilePlusBold":
            return PiFilePlusBold;
        case "pi:PiFilePngBold":
            return PiFilePngBold;
        case "pi:PiFilePptBold":
            return PiFilePptBold;
        case "pi:PiFilePyBold":
            return PiFilePyBold;
        case "pi:PiFileRsBold":
            return PiFileRsBold;
        case "pi:PiFileSqlBold":
            return PiFileSqlBold;
        case "pi:PiFileSvgBold":
            return PiFileSvgBold;
        case "pi:PiFileTextBold":
            return PiFileTextBold;
        case "pi:PiFileTsBold":
            return PiFileTsBold;
        case "pi:PiFileTsxBold":
            return PiFileTsxBold;
        case "pi:PiFileTxtBold":
            return PiFileTxtBold;
        case "pi:PiFileVideoBold":
            return PiFileVideoBold;
        case "pi:PiFileVueBold":
            return PiFileVueBold;
        case "pi:PiFileXBold":
            return PiFileXBold;
        case "pi:PiFileXlsBold":
            return PiFileXlsBold;
        case "pi:PiFileZipBold":
            return PiFileZipBold;
        case "pi:PiFilesBold":
            return PiFilesBold;
        case "pi:PiFilmReelBold":
            return PiFilmReelBold;
        case "pi:PiFilmScriptBold":
            return PiFilmScriptBold;
        case "pi:PiFilmSlateBold":
            return PiFilmSlateBold;
        case "pi:PiFilmStripBold":
            return PiFilmStripBold;
        case "pi:PiFingerprintBold":
            return PiFingerprintBold;
        case "pi:PiFingerprintSimpleBold":
            return PiFingerprintSimpleBold;
        case "pi:PiFinnTheHumanBold":
            return PiFinnTheHumanBold;
        case "pi:PiFireBold":
            return PiFireBold;
        case "pi:PiFireExtinguisherBold":
            return PiFireExtinguisherBold;
        case "pi:PiFireSimpleBold":
            return PiFireSimpleBold;
        case "pi:PiFireTruckBold":
            return PiFireTruckBold;
        case "pi:PiFirstAidBold":
            return PiFirstAidBold;
        case "pi:PiFirstAidKitBold":
            return PiFirstAidKitBold;
        case "pi:PiFishBold":
            return PiFishBold;
        case "pi:PiFishSimpleBold":
            return PiFishSimpleBold;
        case "pi:PiFlagBannerBold":
            return PiFlagBannerBold;
        case "pi:PiFlagBannerFoldBold":
            return PiFlagBannerFoldBold;
        case "pi:PiFlagBold":
            return PiFlagBold;
        case "pi:PiFlagCheckeredBold":
            return PiFlagCheckeredBold;
        case "pi:PiFlagPennantBold":
            return PiFlagPennantBold;
        case "pi:PiFlameBold":
            return PiFlameBold;
        case "pi:PiFlashlightBold":
            return PiFlashlightBold;
        case "pi:PiFlaskBold":
            return PiFlaskBold;
        case "pi:PiFlipHorizontalBold":
            return PiFlipHorizontalBold;
        case "pi:PiFlipVerticalBold":
            return PiFlipVerticalBold;
        case "pi:PiFloppyDiskBackBold":
            return PiFloppyDiskBackBold;
        case "pi:PiFloppyDiskBold":
            return PiFloppyDiskBold;
        case "pi:PiFlowArrowBold":
            return PiFlowArrowBold;
        case "pi:PiFlowerBold":
            return PiFlowerBold;
        case "pi:PiFlowerLotusBold":
            return PiFlowerLotusBold;
        case "pi:PiFlowerTulipBold":
            return PiFlowerTulipBold;
        case "pi:PiFlyingSaucerBold":
            return PiFlyingSaucerBold;
        case "pi:PiFolderBold":
            return PiFolderBold;
        case "pi:PiFolderDashedBold":
            return PiFolderDashedBold;
        case "pi:PiFolderLockBold":
            return PiFolderLockBold;
        case "pi:PiFolderMinusBold":
            return PiFolderMinusBold;
        case "pi:PiFolderOpenBold":
            return PiFolderOpenBold;
        case "pi:PiFolderPlusBold":
            return PiFolderPlusBold;
        case "pi:PiFolderSimpleBold":
            return PiFolderSimpleBold;
        case "pi:PiFolderSimpleDashedBold":
            return PiFolderSimpleDashedBold;
        case "pi:PiFolderSimpleLockBold":
            return PiFolderSimpleLockBold;
        case "pi:PiFolderSimpleMinusBold":
            return PiFolderSimpleMinusBold;
        case "pi:PiFolderSimplePlusBold":
            return PiFolderSimplePlusBold;
        case "pi:PiFolderSimpleStarBold":
            return PiFolderSimpleStarBold;
        case "pi:PiFolderSimpleUserBold":
            return PiFolderSimpleUserBold;
        case "pi:PiFolderStarBold":
            return PiFolderStarBold;
        case "pi:PiFolderUserBold":
            return PiFolderUserBold;
        case "pi:PiFoldersBold":
            return PiFoldersBold;
        case "pi:PiFootballBold":
            return PiFootballBold;
        case "pi:PiFootballHelmetBold":
            return PiFootballHelmetBold;
        case "pi:PiFootprintsBold":
            return PiFootprintsBold;
        case "pi:PiForkKnifeBold":
            return PiForkKnifeBold;
        case "pi:PiFourKBold":
            return PiFourKBold;
        case "pi:PiFrameCornersBold":
            return PiFrameCornersBold;
        case "pi:PiFramerLogoBold":
            return PiFramerLogoBold;
        case "pi:PiFunctionBold":
            return PiFunctionBold;
        case "pi:PiFunnelBold":
            return PiFunnelBold;
        case "pi:PiFunnelSimpleBold":
            return PiFunnelSimpleBold;
        case "pi:PiFunnelSimpleXBold":
            return PiFunnelSimpleXBold;
        case "pi:PiFunnelXBold":
            return PiFunnelXBold;
        case "pi:PiGameControllerBold":
            return PiGameControllerBold;
        case "pi:PiGarageBold":
            return PiGarageBold;
        case "pi:PiGasCanBold":
            return PiGasCanBold;
        case "pi:PiGasPumpBold":
            return PiGasPumpBold;
        case "pi:PiGaugeBold":
            return PiGaugeBold;
        case "pi:PiGavelBold":
            return PiGavelBold;
        case "pi:PiGearBold":
            return PiGearBold;
        case "pi:PiGearFineBold":
            return PiGearFineBold;
        case "pi:PiGearSixBold":
            return PiGearSixBold;
        case "pi:PiGenderFemaleBold":
            return PiGenderFemaleBold;
        case "pi:PiGenderIntersexBold":
            return PiGenderIntersexBold;
        case "pi:PiGenderMaleBold":
            return PiGenderMaleBold;
        case "pi:PiGenderNeuterBold":
            return PiGenderNeuterBold;
        case "pi:PiGenderNonbinaryBold":
            return PiGenderNonbinaryBold;
        case "pi:PiGenderTransgenderBold":
            return PiGenderTransgenderBold;
        case "pi:PiGhostBold":
            return PiGhostBold;
        case "pi:PiGifBold":
            return PiGifBold;
        case "pi:PiGiftBold":
            return PiGiftBold;
        case "pi:PiGitBranchBold":
            return PiGitBranchBold;
        case "pi:PiGitCommitBold":
            return PiGitCommitBold;
        case "pi:PiGitDiffBold":
            return PiGitDiffBold;
        case "pi:PiGitForkBold":
            return PiGitForkBold;
        case "pi:PiGitMergeBold":
            return PiGitMergeBold;
        case "pi:PiGitPullRequestBold":
            return PiGitPullRequestBold;
        case "pi:PiGithubLogoBold":
            return PiGithubLogoBold;
        case "pi:PiGitlabLogoBold":
            return PiGitlabLogoBold;
        case "pi:PiGitlabLogoSimpleBold":
            return PiGitlabLogoSimpleBold;
        case "pi:PiGlobeBold":
            return PiGlobeBold;
        case "pi:PiGlobeHemisphereEastBold":
            return PiGlobeHemisphereEastBold;
        case "pi:PiGlobeHemisphereWestBold":
            return PiGlobeHemisphereWestBold;
        case "pi:PiGlobeSimpleBold":
            return PiGlobeSimpleBold;
        case "pi:PiGlobeSimpleXBold":
            return PiGlobeSimpleXBold;
        case "pi:PiGlobeStandBold":
            return PiGlobeStandBold;
        case "pi:PiGlobeXBold":
            return PiGlobeXBold;
        case "pi:PiGogglesBold":
            return PiGogglesBold;
        case "pi:PiGolfBold":
            return PiGolfBold;
        case "pi:PiGoodreadsLogoBold":
            return PiGoodreadsLogoBold;
        case "pi:PiGoogleCardboardLogoBold":
            return PiGoogleCardboardLogoBold;
        case "pi:PiGoogleChromeLogoBold":
            return PiGoogleChromeLogoBold;
        case "pi:PiGoogleDriveLogoBold":
            return PiGoogleDriveLogoBold;
        case "pi:PiGoogleLogoBold":
            return PiGoogleLogoBold;
        case "pi:PiGooglePhotosLogoBold":
            return PiGooglePhotosLogoBold;
        case "pi:PiGooglePlayLogoBold":
            return PiGooglePlayLogoBold;
        case "pi:PiGooglePodcastsLogoBold":
            return PiGooglePodcastsLogoBold;
        case "pi:PiGpsBold":
            return PiGpsBold;
        case "pi:PiGpsFixBold":
            return PiGpsFixBold;
        case "pi:PiGpsSlashBold":
            return PiGpsSlashBold;
        case "pi:PiGradientBold":
            return PiGradientBold;
        case "pi:PiGraduationCapBold":
            return PiGraduationCapBold;
        case "pi:PiGrainsBold":
            return PiGrainsBold;
        case "pi:PiGrainsSlashBold":
            return PiGrainsSlashBold;
        case "pi:PiGraphBold":
            return PiGraphBold;
        case "pi:PiGraphicsCardBold":
            return PiGraphicsCardBold;
        case "pi:PiGreaterThanBold":
            return PiGreaterThanBold;
        case "pi:PiGreaterThanOrEqualBold":
            return PiGreaterThanOrEqualBold;
        case "pi:PiGridFourBold":
            return PiGridFourBold;
        case "pi:PiGridNineBold":
            return PiGridNineBold;
        case "pi:PiGuitarBold":
            return PiGuitarBold;
        case "pi:PiHairDryerBold":
            return PiHairDryerBold;
        case "pi:PiHamburgerBold":
            return PiHamburgerBold;
        case "pi:PiHammerBold":
            return PiHammerBold;
        case "pi:PiHandArrowDownBold":
            return PiHandArrowDownBold;
        case "pi:PiHandArrowUpBold":
            return PiHandArrowUpBold;
        case "pi:PiHandBold":
            return PiHandBold;
        case "pi:PiHandCoinsBold":
            return PiHandCoinsBold;
        case "pi:PiHandDepositBold":
            return PiHandDepositBold;
        case "pi:PiHandEyeBold":
            return PiHandEyeBold;
        case "pi:PiHandFistBold":
            return PiHandFistBold;
        case "pi:PiHandGrabbingBold":
            return PiHandGrabbingBold;
        case "pi:PiHandHeartBold":
            return PiHandHeartBold;
        case "pi:PiHandPalmBold":
            return PiHandPalmBold;
        case "pi:PiHandPeaceBold":
            return PiHandPeaceBold;
        case "pi:PiHandPointingBold":
            return PiHandPointingBold;
        case "pi:PiHandSoapBold":
            return PiHandSoapBold;
        case "pi:PiHandSwipeLeftBold":
            return PiHandSwipeLeftBold;
        case "pi:PiHandSwipeRightBold":
            return PiHandSwipeRightBold;
        case "pi:PiHandTapBold":
            return PiHandTapBold;
        case "pi:PiHandWavingBold":
            return PiHandWavingBold;
        case "pi:PiHandWithdrawBold":
            return PiHandWithdrawBold;
        case "pi:PiHandbagBold":
            return PiHandbagBold;
        case "pi:PiHandbagSimpleBold":
            return PiHandbagSimpleBold;
        case "pi:PiHandsClappingBold":
            return PiHandsClappingBold;
        case "pi:PiHandsPrayingBold":
            return PiHandsPrayingBold;
        case "pi:PiHandshakeBold":
            return PiHandshakeBold;
        case "pi:PiHardDriveBold":
            return PiHardDriveBold;
        case "pi:PiHardDrivesBold":
            return PiHardDrivesBold;
        case "pi:PiHardHatBold":
            return PiHardHatBold;
        case "pi:PiHashBold":
            return PiHashBold;
        case "pi:PiHashStraightBold":
            return PiHashStraightBold;
        case "pi:PiHeadCircuitBold":
            return PiHeadCircuitBold;
        case "pi:PiHeadlightsBold":
            return PiHeadlightsBold;
        case "pi:PiHeadphonesBold":
            return PiHeadphonesBold;
        case "pi:PiHeadsetBold":
            return PiHeadsetBold;
        case "pi:PiHeartBold":
            return PiHeartBold;
        case "pi:PiHeartBreakBold":
            return PiHeartBreakBold;
        case "pi:PiHeartHalfBold":
            return PiHeartHalfBold;
        case "pi:PiHeartStraightBold":
            return PiHeartStraightBold;
        case "pi:PiHeartStraightBreakBold":
            return PiHeartStraightBreakBold;
        case "pi:PiHeartbeatBold":
            return PiHeartbeatBold;
        case "pi:PiHexagonBold":
            return PiHexagonBold;
        case "pi:PiHighDefinitionBold":
            return PiHighDefinitionBold;
        case "pi:PiHighHeelBold":
            return PiHighHeelBold;
        case "pi:PiHighlighterBold":
            return PiHighlighterBold;
        case "pi:PiHighlighterCircleBold":
            return PiHighlighterCircleBold;
        case "pi:PiHockeyBold":
            return PiHockeyBold;
        case "pi:PiHoodieBold":
            return PiHoodieBold;
        case "pi:PiHorseBold":
            return PiHorseBold;
        case "pi:PiHospitalBold":
            return PiHospitalBold;
        case "pi:PiHourglassBold":
            return PiHourglassBold;
        case "pi:PiHourglassHighBold":
            return PiHourglassHighBold;
        case "pi:PiHourglassLowBold":
            return PiHourglassLowBold;
        case "pi:PiHourglassMediumBold":
            return PiHourglassMediumBold;
        case "pi:PiHourglassSimpleBold":
            return PiHourglassSimpleBold;
        case "pi:PiHourglassSimpleHighBold":
            return PiHourglassSimpleHighBold;
        case "pi:PiHourglassSimpleLowBold":
            return PiHourglassSimpleLowBold;
        case "pi:PiHourglassSimpleMediumBold":
            return PiHourglassSimpleMediumBold;
        case "pi:PiHouseBold":
            return PiHouseBold;
        case "pi:PiHouseLineBold":
            return PiHouseLineBold;
        case "pi:PiHouseSimpleBold":
            return PiHouseSimpleBold;
        case "pi:PiHurricaneBold":
            return PiHurricaneBold;
        case "pi:PiIceCreamBold":
            return PiIceCreamBold;
        case "pi:PiIdentificationBadgeBold":
            return PiIdentificationBadgeBold;
        case "pi:PiIdentificationCardBold":
            return PiIdentificationCardBold;
        case "pi:PiImageBold":
            return PiImageBold;
        case "pi:PiImageBrokenBold":
            return PiImageBrokenBold;
        case "pi:PiImageSquareBold":
            return PiImageSquareBold;
        case "pi:PiImagesBold":
            return PiImagesBold;
        case "pi:PiImagesSquareBold":
            return PiImagesSquareBold;
        case "pi:PiInfinityBold":
            return PiInfinityBold;
        case "pi:PiInfoBold":
            return PiInfoBold;
        case "pi:PiInstagramLogoBold":
            return PiInstagramLogoBold;
        case "pi:PiIntersectBold":
            return PiIntersectBold;
        case "pi:PiIntersectSquareBold":
            return PiIntersectSquareBold;
        case "pi:PiIntersectThreeBold":
            return PiIntersectThreeBold;
        case "pi:PiIntersectionBold":
            return PiIntersectionBold;
        case "pi:PiInvoiceBold":
            return PiInvoiceBold;
        case "pi:PiIslandBold":
            return PiIslandBold;
        case "pi:PiJarBold":
            return PiJarBold;
        case "pi:PiJarLabelBold":
            return PiJarLabelBold;
        case "pi:PiJeepBold":
            return PiJeepBold;
        case "pi:PiJoystickBold":
            return PiJoystickBold;
        case "pi:PiKanbanBold":
            return PiKanbanBold;
        case "pi:PiKeyBold":
            return PiKeyBold;
        case "pi:PiKeyReturnBold":
            return PiKeyReturnBold;
        case "pi:PiKeyboardBold":
            return PiKeyboardBold;
        case "pi:PiKeyholeBold":
            return PiKeyholeBold;
        case "pi:PiKnifeBold":
            return PiKnifeBold;
        case "pi:PiLadderBold":
            return PiLadderBold;
        case "pi:PiLadderSimpleBold":
            return PiLadderSimpleBold;
        case "pi:PiLampBold":
            return PiLampBold;
        case "pi:PiLampPendantBold":
            return PiLampPendantBold;
        case "pi:PiLaptopBold":
            return PiLaptopBold;
        case "pi:PiLassoBold":
            return PiLassoBold;
        case "pi:PiLastfmLogoBold":
            return PiLastfmLogoBold;
        case "pi:PiLayoutBold":
            return PiLayoutBold;
        case "pi:PiLeafBold":
            return PiLeafBold;
        case "pi:PiLecternBold":
            return PiLecternBold;
        case "pi:PiLegoBold":
            return PiLegoBold;
        case "pi:PiLegoSmileyBold":
            return PiLegoSmileyBold;
        case "pi:PiLessThanBold":
            return PiLessThanBold;
        case "pi:PiLessThanOrEqualBold":
            return PiLessThanOrEqualBold;
        case "pi:PiLetterCircleHBold":
            return PiLetterCircleHBold;
        case "pi:PiLetterCirclePBold":
            return PiLetterCirclePBold;
        case "pi:PiLetterCircleVBold":
            return PiLetterCircleVBold;
        case "pi:PiLifebuoyBold":
            return PiLifebuoyBold;
        case "pi:PiLightbulbBold":
            return PiLightbulbBold;
        case "pi:PiLightbulbFilamentBold":
            return PiLightbulbFilamentBold;
        case "pi:PiLighthouseBold":
            return PiLighthouseBold;
        case "pi:PiLightningABold":
            return PiLightningABold;
        case "pi:PiLightningBold":
            return PiLightningBold;
        case "pi:PiLightningSlashBold":
            return PiLightningSlashBold;
        case "pi:PiLineSegmentBold":
            return PiLineSegmentBold;
        case "pi:PiLineSegmentsBold":
            return PiLineSegmentsBold;
        case "pi:PiLineVerticalBold":
            return PiLineVerticalBold;
        case "pi:PiLinkBold":
            return PiLinkBold;
        case "pi:PiLinkBreakBold":
            return PiLinkBreakBold;
        case "pi:PiLinkSimpleBold":
            return PiLinkSimpleBold;
        case "pi:PiLinkSimpleBreakBold":
            return PiLinkSimpleBreakBold;
        case "pi:PiLinkSimpleHorizontalBold":
            return PiLinkSimpleHorizontalBold;
        case "pi:PiLinkSimpleHorizontalBreakBold":
            return PiLinkSimpleHorizontalBreakBold;
        case "pi:PiLinkedinLogoBold":
            return PiLinkedinLogoBold;
        case "pi:PiLinktreeLogoBold":
            return PiLinktreeLogoBold;
        case "pi:PiLinuxLogoBold":
            return PiLinuxLogoBold;
        case "pi:PiListBold":
            return PiListBold;
        case "pi:PiListBulletsBold":
            return PiListBulletsBold;
        case "pi:PiListChecksBold":
            return PiListChecksBold;
        case "pi:PiListDashesBold":
            return PiListDashesBold;
        case "pi:PiListHeartBold":
            return PiListHeartBold;
        case "pi:PiListMagnifyingGlassBold":
            return PiListMagnifyingGlassBold;
        case "pi:PiListNumbersBold":
            return PiListNumbersBold;
        case "pi:PiListPlusBold":
            return PiListPlusBold;
        case "pi:PiListStarBold":
            return PiListStarBold;
        case "pi:PiLockBold":
            return PiLockBold;
        case "pi:PiLockKeyBold":
            return PiLockKeyBold;
        case "pi:PiLockKeyOpenBold":
            return PiLockKeyOpenBold;
        case "pi:PiLockLaminatedBold":
            return PiLockLaminatedBold;
        case "pi:PiLockLaminatedOpenBold":
            return PiLockLaminatedOpenBold;
        case "pi:PiLockOpenBold":
            return PiLockOpenBold;
        case "pi:PiLockSimpleBold":
            return PiLockSimpleBold;
        case "pi:PiLockSimpleOpenBold":
            return PiLockSimpleOpenBold;
        case "pi:PiLockersBold":
            return PiLockersBold;
        case "pi:PiLogBold":
            return PiLogBold;
        case "pi:PiMagicWandBold":
            return PiMagicWandBold;
        case "pi:PiMagnetBold":
            return PiMagnetBold;
        case "pi:PiMagnetStraightBold":
            return PiMagnetStraightBold;
        case "pi:PiMagnifyingGlassBold":
            return PiMagnifyingGlassBold;
        case "pi:PiMagnifyingGlassMinusBold":
            return PiMagnifyingGlassMinusBold;
        case "pi:PiMagnifyingGlassPlusBold":
            return PiMagnifyingGlassPlusBold;
        case "pi:PiMailboxBold":
            return PiMailboxBold;
        case "pi:PiMapPinAreaBold":
            return PiMapPinAreaBold;
        case "pi:PiMapPinBold":
            return PiMapPinBold;
        case "pi:PiMapPinLineBold":
            return PiMapPinLineBold;
        case "pi:PiMapPinPlusBold":
            return PiMapPinPlusBold;
        case "pi:PiMapPinSimpleAreaBold":
            return PiMapPinSimpleAreaBold;
        case "pi:PiMapPinSimpleBold":
            return PiMapPinSimpleBold;
        case "pi:PiMapPinSimpleLineBold":
            return PiMapPinSimpleLineBold;
        case "pi:PiMapTrifoldBold":
            return PiMapTrifoldBold;
        case "pi:PiMarkdownLogoBold":
            return PiMarkdownLogoBold;
        case "pi:PiMarkerCircleBold":
            return PiMarkerCircleBold;
        case "pi:PiMartiniBold":
            return PiMartiniBold;
        case "pi:PiMaskHappyBold":
            return PiMaskHappyBold;
        case "pi:PiMaskSadBold":
            return PiMaskSadBold;
        case "pi:PiMastodonLogoBold":
            return PiMastodonLogoBold;
        case "pi:PiMathOperationsBold":
            return PiMathOperationsBold;
        case "pi:PiMatrixLogoBold":
            return PiMatrixLogoBold;
        case "pi:PiMedalBold":
            return PiMedalBold;
        case "pi:PiMedalMilitaryBold":
            return PiMedalMilitaryBold;
        case "pi:PiMediumLogoBold":
            return PiMediumLogoBold;
        case "pi:PiMegaphoneBold":
            return PiMegaphoneBold;
        case "pi:PiMegaphoneSimpleBold":
            return PiMegaphoneSimpleBold;
        case "pi:PiMemberOfBold":
            return PiMemberOfBold;
        case "pi:PiMemoryBold":
            return PiMemoryBold;
        case "pi:PiMessengerLogoBold":
            return PiMessengerLogoBold;
        case "pi:PiMetaLogoBold":
            return PiMetaLogoBold;
        case "pi:PiMeteorBold":
            return PiMeteorBold;
        case "pi:PiMetronomeBold":
            return PiMetronomeBold;
        case "pi:PiMicrophoneBold":
            return PiMicrophoneBold;
        case "pi:PiMicrophoneSlashBold":
            return PiMicrophoneSlashBold;
        case "pi:PiMicrophoneStageBold":
            return PiMicrophoneStageBold;
        case "pi:PiMicroscopeBold":
            return PiMicroscopeBold;
        case "pi:PiMicrosoftExcelLogoBold":
            return PiMicrosoftExcelLogoBold;
        case "pi:PiMicrosoftOutlookLogoBold":
            return PiMicrosoftOutlookLogoBold;
        case "pi:PiMicrosoftPowerpointLogoBold":
            return PiMicrosoftPowerpointLogoBold;
        case "pi:PiMicrosoftTeamsLogoBold":
            return PiMicrosoftTeamsLogoBold;
        case "pi:PiMicrosoftWordLogoBold":
            return PiMicrosoftWordLogoBold;
        case "pi:PiMinusBold":
            return PiMinusBold;
        case "pi:PiMinusCircleBold":
            return PiMinusCircleBold;
        case "pi:PiMinusSquareBold":
            return PiMinusSquareBold;
        case "pi:PiMoneyBold":
            return PiMoneyBold;
        case "pi:PiMoneyWavyBold":
            return PiMoneyWavyBold;
        case "pi:PiMonitorArrowUpBold":
            return PiMonitorArrowUpBold;
        case "pi:PiMonitorBold":
            return PiMonitorBold;
        case "pi:PiMonitorPlayBold":
            return PiMonitorPlayBold;
        case "pi:PiMoonBold":
            return PiMoonBold;
        case "pi:PiMoonStarsBold":
            return PiMoonStarsBold;
        case "pi:PiMopedBold":
            return PiMopedBold;
        case "pi:PiMopedFrontBold":
            return PiMopedFrontBold;
        case "pi:PiMosqueBold":
            return PiMosqueBold;
        case "pi:PiMotorcycleBold":
            return PiMotorcycleBold;
        case "pi:PiMountainsBold":
            return PiMountainsBold;
        case "pi:PiMouseBold":
            return PiMouseBold;
        case "pi:PiMouseLeftClickBold":
            return PiMouseLeftClickBold;
        case "pi:PiMouseMiddleClickBold":
            return PiMouseMiddleClickBold;
        case "pi:PiMouseRightClickBold":
            return PiMouseRightClickBold;
        case "pi:PiMouseScrollBold":
            return PiMouseScrollBold;
        case "pi:PiMouseSimpleBold":
            return PiMouseSimpleBold;
        case "pi:PiMusicNoteBold":
            return PiMusicNoteBold;
        case "pi:PiMusicNoteSimpleBold":
            return PiMusicNoteSimpleBold;
        case "pi:PiMusicNotesBold":
            return PiMusicNotesBold;
        case "pi:PiMusicNotesMinusBold":
            return PiMusicNotesMinusBold;
        case "pi:PiMusicNotesPlusBold":
            return PiMusicNotesPlusBold;
        case "pi:PiMusicNotesSimpleBold":
            return PiMusicNotesSimpleBold;
        case "pi:PiNavigationArrowBold":
            return PiNavigationArrowBold;
        case "pi:PiNeedleBold":
            return PiNeedleBold;
        case "pi:PiNetworkBold":
            return PiNetworkBold;
        case "pi:PiNetworkSlashBold":
            return PiNetworkSlashBold;
        case "pi:PiNetworkXBold":
            return PiNetworkXBold;
        case "pi:PiNewspaperBold":
            return PiNewspaperBold;
        case "pi:PiNewspaperClippingBold":
            return PiNewspaperClippingBold;
        case "pi:PiNotEqualsBold":
            return PiNotEqualsBold;
        case "pi:PiNotMemberOfBold":
            return PiNotMemberOfBold;
        case "pi:PiNotSubsetOfBold":
            return PiNotSubsetOfBold;
        case "pi:PiNotSupersetOfBold":
            return PiNotSupersetOfBold;
        case "pi:PiNotchesBold":
            return PiNotchesBold;
        case "pi:PiNoteBlankBold":
            return PiNoteBlankBold;
        case "pi:PiNoteBold":
            return PiNoteBold;
        case "pi:PiNotePencilBold":
            return PiNotePencilBold;
        case "pi:PiNotebookBold":
            return PiNotebookBold;
        case "pi:PiNotepadBold":
            return PiNotepadBold;
        case "pi:PiNotificationBold":
            return PiNotificationBold;
        case "pi:PiNotionLogoBold":
            return PiNotionLogoBold;
        case "pi:PiNuclearPlantBold":
            return PiNuclearPlantBold;
        case "pi:PiNumberCircleEightBold":
            return PiNumberCircleEightBold;
        case "pi:PiNumberCircleFiveBold":
            return PiNumberCircleFiveBold;
        case "pi:PiNumberCircleFourBold":
            return PiNumberCircleFourBold;
        case "pi:PiNumberCircleNineBold":
            return PiNumberCircleNineBold;
        case "pi:PiNumberCircleOneBold":
            return PiNumberCircleOneBold;
        case "pi:PiNumberCircleSevenBold":
            return PiNumberCircleSevenBold;
        case "pi:PiNumberCircleSixBold":
            return PiNumberCircleSixBold;
        case "pi:PiNumberCircleThreeBold":
            return PiNumberCircleThreeBold;
        case "pi:PiNumberCircleTwoBold":
            return PiNumberCircleTwoBold;
        case "pi:PiNumberCircleZeroBold":
            return PiNumberCircleZeroBold;
        case "pi:PiNumberEightBold":
            return PiNumberEightBold;
        case "pi:PiNumberFiveBold":
            return PiNumberFiveBold;
        case "pi:PiNumberFourBold":
            return PiNumberFourBold;
        case "pi:PiNumberNineBold":
            return PiNumberNineBold;
        case "pi:PiNumberOneBold":
            return PiNumberOneBold;
        case "pi:PiNumberSevenBold":
            return PiNumberSevenBold;
        case "pi:PiNumberSixBold":
            return PiNumberSixBold;
        case "pi:PiNumberSquareEightBold":
            return PiNumberSquareEightBold;
        case "pi:PiNumberSquareFiveBold":
            return PiNumberSquareFiveBold;
        case "pi:PiNumberSquareFourBold":
            return PiNumberSquareFourBold;
        case "pi:PiNumberSquareNineBold":
            return PiNumberSquareNineBold;
        case "pi:PiNumberSquareOneBold":
            return PiNumberSquareOneBold;
        case "pi:PiNumberSquareSevenBold":
            return PiNumberSquareSevenBold;
        case "pi:PiNumberSquareSixBold":
            return PiNumberSquareSixBold;
        case "pi:PiNumberSquareThreeBold":
            return PiNumberSquareThreeBold;
        case "pi:PiNumberSquareTwoBold":
            return PiNumberSquareTwoBold;
        case "pi:PiNumberSquareZeroBold":
            return PiNumberSquareZeroBold;
        case "pi:PiNumberThreeBold":
            return PiNumberThreeBold;
        case "pi:PiNumberTwoBold":
            return PiNumberTwoBold;
        case "pi:PiNumberZeroBold":
            return PiNumberZeroBold;
        case "pi:PiNumpadBold":
            return PiNumpadBold;
        case "pi:PiNutBold":
            return PiNutBold;
        case "pi:PiNyTimesLogoBold":
            return PiNyTimesLogoBold;
        case "pi:PiOctagonBold":
            return PiOctagonBold;
        case "pi:PiOfficeChairBold":
            return PiOfficeChairBold;
        case "pi:PiOnigiriBold":
            return PiOnigiriBold;
        case "pi:PiOpenAiLogoBold":
            return PiOpenAiLogoBold;
        case "pi:PiOptionBold":
            return PiOptionBold;
        case "pi:PiOrangeBold":
            return PiOrangeBold;
        case "pi:PiOrangeSliceBold":
            return PiOrangeSliceBold;
        case "pi:PiOvenBold":
            return PiOvenBold;
    }
}
