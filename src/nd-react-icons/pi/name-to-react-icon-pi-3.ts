import type {IconType} from "react-icons";

import {
    PiWebcamSlashDuotone,
    PiWebhooksLogoDuotone,
    PiWechatLogoDuotone,
    PiWhatsappLogoDuotone,
    PiWheelchairDuotone,
    PiWheelchairMotionDuotone,
    PiWifiHighDuotone,
    PiWifiLowDuotone,
    PiWifiMediumDuotone,
    PiWifiNoneDuotone,
    PiWifiSlashDuotone,
    PiWifiXDuotone,
    PiWindDuotone,
    PiWindmillDuotone,
    PiWindowsLogoDuotone,
    PiWineDuotone,
    PiWrenchDuotone,
    PiXCircleDuotone,
    PiXDuotone,
    PiXLogoDuotone,
    PiXSquareDuotone,
    PiYarnDuotone,
    PiYinYangDuotone,
    PiYoutubeLogoDuotone,
    PiAcornFill,
    PiAddressBookFill,
    PiAddressBookTabsFill,
    PiAirTrafficControlFill,
    PiAirplaneFill,
    PiAirplaneInFlightFill,
    PiAirplaneLandingFill,
    PiAirplaneTakeoffFill,
    PiAirplaneTaxiingFill,
    PiAirplaneTiltFill,
    PiAirplayFill,
    PiAlarmFill,
    PiAlienFill,
    PiAlignBottomFill,
    PiAlignBottomSimpleFill,
    PiAlignCenterHorizontalFill,
    PiAlignCenterHorizontalSimpleFill,
    PiAlignCenterVerticalFill,
    PiAlignCenterVerticalSimpleFill,
    PiAlignLeftFill,
    PiAlignLeftSimpleFill,
    PiAlignRightFill,
    PiAlignRightSimpleFill,
    PiAlignTopFill,
    PiAlignTopSimpleFill,
    PiAmazonLogoFill,
    PiAmbulanceFill,
    PiAnchorFill,
    PiAnchorSimpleFill,
    PiAndroidLogoFill,
    PiAngleFill,
    PiAngularLogoFill,
    PiApertureFill,
    PiAppStoreLogoFill,
    PiAppWindowFill,
    PiAppleLogoFill,
    PiApplePodcastsLogoFill,
    PiApproximateEqualsFill,
    PiArchiveFill,
    PiArmchairFill,
    PiArrowArcLeftFill,
    PiArrowArcRightFill,
    PiArrowBendDoubleUpLeftFill,
    PiArrowBendDoubleUpRightFill,
    PiArrowBendDownLeftFill,
    PiArrowBendDownRightFill,
    PiArrowBendLeftDownFill,
    PiArrowBendLeftUpFill,
    PiArrowBendRightDownFill,
    PiArrowBendRightUpFill,
    PiArrowBendUpLeftFill,
    PiArrowBendUpRightFill,
    PiArrowCircleDownFill,
    PiArrowCircleDownLeftFill,
    PiArrowCircleDownRightFill,
    PiArrowCircleLeftFill,
    PiArrowCircleRightFill,
    PiArrowCircleUpFill,
    PiArrowCircleUpLeftFill,
    PiArrowCircleUpRightFill,
    PiArrowClockwiseFill,
    PiArrowCounterClockwiseFill,
    PiArrowDownFill,
    PiArrowDownLeftFill,
    PiArrowDownRightFill,
    PiArrowElbowDownLeftFill,
    PiArrowElbowDownRightFill,
    PiArrowElbowLeftDownFill,
    PiArrowElbowLeftFill,
    PiArrowElbowLeftUpFill,
    PiArrowElbowRightDownFill,
    PiArrowElbowRightFill,
    PiArrowElbowRightUpFill,
    PiArrowElbowUpLeftFill,
    PiArrowElbowUpRightFill,
    PiArrowFatDownFill,
    PiArrowFatLeftFill,
    PiArrowFatLineDownFill,
    PiArrowFatLineLeftFill,
    PiArrowFatLineRightFill,
    PiArrowFatLineUpFill,
    PiArrowFatLinesDownFill,
    PiArrowFatLinesLeftFill,
    PiArrowFatLinesRightFill,
    PiArrowFatLinesUpFill,
    PiArrowFatRightFill,
    PiArrowFatUpFill,
    PiArrowLeftFill,
    PiArrowLineDownFill,
    PiArrowLineDownLeftFill,
    PiArrowLineDownRightFill,
    PiArrowLineLeftFill,
    PiArrowLineRightFill,
    PiArrowLineUpFill,
    PiArrowLineUpLeftFill,
    PiArrowLineUpRightFill,
    PiArrowRightFill,
    PiArrowSquareDownFill,
    PiArrowSquareDownLeftFill,
    PiArrowSquareDownRightFill,
    PiArrowSquareInFill,
    PiArrowSquareLeftFill,
    PiArrowSquareOutFill,
    PiArrowSquareRightFill,
    PiArrowSquareUpFill,
    PiArrowSquareUpLeftFill,
    PiArrowSquareUpRightFill,
    PiArrowUDownLeftFill,
    PiArrowUDownRightFill,
    PiArrowULeftDownFill,
    PiArrowULeftUpFill,
    PiArrowURightDownFill,
    PiArrowURightUpFill,
    PiArrowUUpLeftFill,
    PiArrowUUpRightFill,
    PiArrowUpFill,
    PiArrowUpLeftFill,
    PiArrowUpRightFill,
    PiArrowsClockwiseFill,
    PiArrowsCounterClockwiseFill,
    PiArrowsDownUpFill,
    PiArrowsHorizontalFill,
    PiArrowsInCardinalFill,
    PiArrowsInFill,
    PiArrowsInLineHorizontalFill,
    PiArrowsInLineVerticalFill,
    PiArrowsInSimpleFill,
    PiArrowsLeftRightFill,
    PiArrowsMergeFill,
    PiArrowsOutCardinalFill,
    PiArrowsOutFill,
    PiArrowsOutLineHorizontalFill,
    PiArrowsOutLineVerticalFill,
    PiArrowsOutSimpleFill,
    PiArrowsSplitFill,
    PiArrowsVerticalFill,
    PiArticleFill,
    PiArticleMediumFill,
    PiArticleNyTimesFill,
    PiAsclepiusFill,
    PiAsteriskFill,
    PiAsteriskSimpleFill,
    PiAtFill,
    PiAtomFill,
    PiAvocadoFill,
    PiAxeFill,
    PiBabyCarriageFill,
    PiBabyFill,
    PiBackpackFill,
    PiBackspaceFill,
    PiBagFill,
    PiBagSimpleFill,
    PiBalloonFill,
    PiBandaidsFill,
    PiBankFill,
    PiBarbellFill,
    PiBarcodeFill,
    PiBarnFill,
    PiBarricadeFill,
    PiBaseballCapFill,
    PiBaseballFill,
    PiBaseballHelmetFill,
    PiBasketFill,
    PiBasketballFill,
    PiBathtubFill,
    PiBatteryChargingFill,
    PiBatteryChargingVerticalFill,
    PiBatteryEmptyFill,
    PiBatteryFullFill,
    PiBatteryHighFill,
    PiBatteryLowFill,
    PiBatteryMediumFill,
    PiBatteryPlusFill,
    PiBatteryPlusVerticalFill,
    PiBatteryVerticalEmptyFill,
    PiBatteryVerticalFullFill,
    PiBatteryVerticalHighFill,
    PiBatteryVerticalLowFill,
    PiBatteryVerticalMediumFill,
    PiBatteryWarningFill,
    PiBatteryWarningVerticalFill,
    PiBeachBallFill,
    PiBeanieFill,
    PiBedFill,
    PiBeerBottleFill,
    PiBeerSteinFill,
    PiBehanceLogoFill,
    PiBellFill,
    PiBellRingingFill,
    PiBellSimpleFill,
    PiBellSimpleRingingFill,
    PiBellSimpleSlashFill,
    PiBellSimpleZFill,
    PiBellSlashFill,
    PiBellZFill,
    PiBeltFill,
    PiBezierCurveFill,
    PiBicycleFill,
    PiBinaryFill,
    PiBinocularsFill,
    PiBiohazardFill,
    PiBirdFill,
    PiBlueprintFill,
    PiBluetoothConnectedFill,
    PiBluetoothFill,
    PiBluetoothSlashFill,
    PiBluetoothXFill,
    PiBoatFill,
    PiBombFill,
    PiBoneFill,
    PiBookBookmarkFill,
    PiBookFill,
    PiBookOpenFill,
    PiBookOpenTextFill,
    PiBookOpenUserFill,
    PiBookmarkFill,
    PiBookmarkSimpleFill,
    PiBookmarksFill,
    PiBookmarksSimpleFill,
    PiBooksFill,
    PiBootFill,
    PiBoulesFill,
    PiBoundingBoxFill,
    PiBowlFoodFill,
    PiBowlSteamFill,
    PiBowlingBallFill,
    PiBoxArrowDownFill,
    PiBoxArrowUpFill,
    PiBoxingGloveFill,
    PiBracketsAngleFill,
    PiBracketsCurlyFill,
    PiBracketsRoundFill,
    PiBracketsSquareFill,
    PiBrainFill,
    PiBrandyFill,
    PiBreadFill,
    PiBridgeFill,
    PiBriefcaseFill,
    PiBriefcaseMetalFill,
    PiBroadcastFill,
    PiBroomFill,
    PiBrowserFill,
    PiBrowsersFill,
    PiBugBeetleFill,
    PiBugDroidFill,
    PiBugFill,
    PiBuildingApartmentFill,
    PiBuildingFill,
    PiBuildingOfficeFill,
    PiBuildingsFill,
    PiBulldozerFill,
    PiBusFill,
    PiButterflyFill,
    PiCableCarFill,
    PiCactusFill,
    PiCakeFill,
    PiCalculatorFill,
    PiCalendarBlankFill,
    PiCalendarCheckFill,
    PiCalendarDotFill,
    PiCalendarDotsFill,
    PiCalendarFill,
    PiCalendarHeartFill,
    PiCalendarMinusFill,
    PiCalendarPlusFill,
    PiCalendarSlashFill,
    PiCalendarStarFill,
    PiCalendarXFill,
    PiCallBellFill,
    PiCameraFill,
    PiCameraPlusFill,
    PiCameraRotateFill,
    PiCameraSlashFill,
    PiCampfireFill,
    PiCarBatteryFill,
    PiCarFill,
    PiCarProfileFill,
    PiCarSimpleFill,
    PiCardholderFill,
    PiCardsFill,
    PiCardsThreeFill,
    PiCaretCircleDoubleDownFill,
    PiCaretCircleDoubleLeftFill,
    PiCaretCircleDoubleRightFill,
    PiCaretCircleDoubleUpFill,
    PiCaretCircleDownFill,
    PiCaretCircleLeftFill,
    PiCaretCircleRightFill,
    PiCaretCircleUpDownFill,
    PiCaretCircleUpFill,
    PiCaretDoubleDownFill,
    PiCaretDoubleLeftFill,
    PiCaretDoubleRightFill,
    PiCaretDoubleUpFill,
    PiCaretDownFill,
    PiCaretLeftFill,
    PiCaretLineDownFill,
    PiCaretLineLeftFill,
    PiCaretLineRightFill,
    PiCaretLineUpFill,
    PiCaretRightFill,
    PiCaretUpDownFill,
    PiCaretUpFill,
    PiCarrotFill,
    PiCashRegisterFill,
    PiCassetteTapeFill,
    PiCastleTurretFill,
    PiCatFill,
    PiCellSignalFullFill,
    PiCellSignalHighFill,
    PiCellSignalLowFill,
    PiCellSignalMediumFill,
    PiCellSignalNoneFill,
    PiCellSignalSlashFill,
    PiCellSignalXFill,
    PiCellTowerFill,
    PiCertificateFill,
    PiChairFill,
    PiChalkboardFill,
    PiChalkboardSimpleFill,
    PiChalkboardTeacherFill,
    PiChampagneFill,
    PiChargingStationFill,
    PiChartBarFill,
    PiChartBarHorizontalFill,
    PiChartDonutFill,
    PiChartLineDownFill,
    PiChartLineFill,
    PiChartLineUpFill,
    PiChartPieFill,
    PiChartPieSliceFill,
    PiChartPolarFill,
    PiChartScatterFill,
    PiChatCenteredDotsFill,
    PiChatCenteredFill,
    PiChatCenteredSlashFill,
    PiChatCenteredTextFill,
    PiChatCircleDotsFill,
    PiChatCircleFill,
    PiChatCircleSlashFill,
    PiChatCircleTextFill,
    PiChatDotsFill,
    PiChatFill,
    PiChatSlashFill,
    PiChatTeardropDotsFill,
    PiChatTeardropFill,
    PiChatTeardropSlashFill,
    PiChatTeardropTextFill,
    PiChatTextFill,
    PiChatsCircleFill,
    PiChatsFill,
    PiChatsTeardropFill,
    PiCheckCircleFill,
    PiCheckFatFill,
    PiCheckFill,
    PiCheckSquareFill,
    PiCheckSquareOffsetFill,
    PiCheckerboardFill,
    PiChecksFill,
    PiCheersFill,
    PiCheeseFill,
    PiChefHatFill,
    PiCherriesFill,
    PiChurchFill,
    PiCigaretteFill,
    PiCigaretteSlashFill,
    PiCircleDashedFill,
    PiCircleFill,
    PiCircleHalfFill,
    PiCircleHalfTiltFill,
    PiCircleNotchFill,
    PiCirclesFourFill,
    PiCirclesThreeFill,
    PiCirclesThreePlusFill,
    PiCircuitryFill,
    PiCityFill,
    PiClipboardFill,
    PiClipboardTextFill,
    PiClockAfternoonFill,
    PiClockClockwiseFill,
    PiClockCountdownFill,
    PiClockCounterClockwiseFill,
    PiClockFill,
    PiClockUserFill,
    PiClosedCaptioningFill,
    PiCloudArrowDownFill,
    PiCloudArrowUpFill,
    PiCloudCheckFill,
    PiCloudFill,
    PiCloudFogFill,
    PiCloudLightningFill,
    PiCloudMoonFill,
    PiCloudRainFill,
    PiCloudSlashFill,
    PiCloudSnowFill,
    PiCloudSunFill,
    PiCloudWarningFill,
    PiCloudXFill,
    PiCloverFill,
    PiClubFill,
    PiCoatHangerFill,
    PiCodaLogoFill,
    PiCodeBlockFill,
    PiCodeFill,
    PiCodeSimpleFill,
    PiCodepenLogoFill,
    PiCodesandboxLogoFill,
    PiCoffeeBeanFill,
    PiCoffeeFill,
    PiCoinFill,
    PiCoinVerticalFill,
    PiCoinsFill,
    PiColumnsFill,
    PiColumnsPlusLeftFill,
    PiColumnsPlusRightFill,
    PiCommandFill,
    PiCompassFill,
    PiCompassRoseFill,
    PiCompassToolFill,
    PiComputerTowerFill,
    PiConfettiFill,
    PiContactlessPaymentFill,
    PiControlFill,
    PiCookieFill,
    PiCookingPotFill,
    PiCopyFill,
    PiCopySimpleFill,
    PiCopyleftFill,
    PiCopyrightFill,
    PiCornersInFill,
    PiCornersOutFill,
    PiCouchFill,
    PiCourtBasketballFill,
    PiCowFill,
    PiCowboyHatFill,
    PiCpuFill,
    PiCraneFill,
    PiCraneTowerFill,
    PiCreditCardFill,
    PiCricketFill,
    PiCropFill,
    PiCrossFill,
    PiCrosshairFill,
    PiCrosshairSimpleFill,
    PiCrownCrossFill,
    PiCrownFill,
    PiCrownSimpleFill,
    PiCubeFill,
    PiCubeFocusFill,
    PiCubeTransparentFill,
    PiCurrencyBtcFill,
    PiCurrencyCircleDollarFill,
    PiCurrencyCnyFill,
    PiCurrencyDollarFill,
    PiCurrencyDollarSimpleFill,
    PiCurrencyEthFill,
    PiCurrencyEurFill,
    PiCurrencyGbpFill,
    PiCurrencyInrFill,
    PiCurrencyJpyFill,
    PiCurrencyKrwFill,
    PiCurrencyKztFill,
    PiCurrencyNgnFill,
    PiCurrencyRubFill,
    PiCursorClickFill,
    PiCursorFill,
    PiCursorTextFill,
    PiCylinderFill,
    PiDatabaseFill,
    PiDeskFill,
    PiDesktopFill,
    PiDesktopTowerFill,
    PiDetectiveFill,
    PiDevToLogoFill,
    PiDeviceMobileCameraFill,
    PiDeviceMobileFill,
    PiDeviceMobileSlashFill,
    PiDeviceMobileSpeakerFill,
    PiDeviceRotateFill,
    PiDeviceTabletCameraFill,
    PiDeviceTabletFill,
    PiDeviceTabletSpeakerFill,
    PiDevicesFill,
    PiDiamondFill,
    PiDiamondsFourFill,
    PiDiceFiveFill,
    PiDiceFourFill,
    PiDiceOneFill,
    PiDiceSixFill,
    PiDiceThreeFill,
    PiDiceTwoFill,
    PiDiscFill,
    PiDiscoBallFill,
    PiDiscordLogoFill,
    PiDivideFill,
    PiDnaFill,
    PiDogFill,
    PiDoorFill,
    PiDoorOpenFill,
    PiDotFill,
    PiDotOutlineFill,
    PiDotsNineFill,
    PiDotsSixFill,
    PiDotsSixVerticalFill,
    PiDotsThreeCircleFill,
    PiDotsThreeCircleVerticalFill,
    PiDotsThreeFill,
    PiDotsThreeOutlineFill,
    PiDotsThreeOutlineVerticalFill,
    PiDotsThreeVerticalFill,
    PiDownloadFill,
    PiDownloadSimpleFill,
    PiDressFill,
    PiDresserFill,
    PiDribbbleLogoFill,
    PiDroneFill,
    PiDropFill,
    PiDropHalfBottomFill,
    PiDropHalfFill,
    PiDropSimpleFill,
    PiDropSlashFill,
    PiDropboxLogoFill,
    PiEarFill,
    PiEarSlashFill,
    PiEggCrackFill,
    PiEggFill,
    PiEjectFill,
    PiEjectSimpleFill,
    PiElevatorFill,
    PiEmptyFill,
    PiEngineFill,
    PiEnvelopeFill,
    PiEnvelopeOpenFill,
    PiEnvelopeSimpleFill,
    PiEnvelopeSimpleOpenFill,
    PiEqualizerFill,
    PiEqualsFill,
    PiEraserFill,
    PiEscalatorDownFill,
    PiEscalatorUpFill,
    PiExamFill,
    PiExclamationMarkFill,
    PiExcludeFill,
    PiExcludeSquareFill,
    PiExportFill,
    PiEyeClosedFill,
    PiEyeFill,
    PiEyeSlashFill,
    PiEyedropperFill,
    PiEyedropperSampleFill,
    PiEyeglassesFill,
    PiEyesFill,
    PiFaceMaskFill,
    PiFacebookLogoFill,
    PiFactoryFill,
    PiFadersFill,
    PiFadersHorizontalFill,
    PiFalloutShelterFill,
    PiFanFill,
    PiFarmFill,
    PiFastForwardCircleFill,
    PiFastForwardFill,
    PiFeatherFill,
    PiFediverseLogoFill,
    PiFigmaLogoFill,
    PiFileArchiveFill,
    PiFileArrowDownFill,
    PiFileArrowUpFill,
    PiFileAudioFill,
    PiFileCFill,
    PiFileCSharpFill,
    PiFileCloudFill,
    PiFileCodeFill,
    PiFileCppFill,
    PiFileCssFill,
    PiFileCsvFill,
    PiFileDashedFill,
    PiFileDocFill,
    PiFileFill,
    PiFileHtmlFill,
    PiFileImageFill,
    PiFileIniFill,
    PiFileJpgFill,
    PiFileJsFill,
    PiFileJsxFill,
    PiFileLockFill,
    PiFileMagnifyingGlassFill,
    PiFileMdFill,
    PiFileMinusFill,
    PiFilePdfFill,
    PiFilePlusFill,
    PiFilePngFill,
    PiFilePptFill,
    PiFilePyFill,
    PiFileRsFill,
    PiFileSqlFill,
    PiFileSvgFill,
    PiFileTextFill,
    PiFileTsFill,
    PiFileTsxFill,
    PiFileTxtFill,
    PiFileVideoFill,
    PiFileVueFill,
    PiFileXFill,
    PiFileXlsFill,
    PiFileZipFill,
    PiFilesFill,
    PiFilmReelFill,
    PiFilmScriptFill,
    PiFilmSlateFill,
    PiFilmStripFill,
    PiFingerprintFill,
    PiFingerprintSimpleFill,
    PiFinnTheHumanFill,
    PiFireExtinguisherFill,
    PiFireFill,
    PiFireSimpleFill,
    PiFireTruckFill,
    PiFirstAidFill,
    PiFirstAidKitFill,
    PiFishFill,
    PiFishSimpleFill,
    PiFlagBannerFill,
    PiFlagBannerFoldFill,
    PiFlagCheckeredFill,
    PiFlagFill,
    PiFlagPennantFill,
    PiFlameFill,
    PiFlashlightFill,
    PiFlaskFill,
    PiFlipHorizontalFill,
    PiFlipVerticalFill,
    PiFloppyDiskBackFill,
    PiFloppyDiskFill,
    PiFlowArrowFill,
    PiFlowerFill,
    PiFlowerLotusFill,
    PiFlowerTulipFill,
    PiFlyingSaucerFill,
    PiFolderDashedFill,
    PiFolderFill,
    PiFolderLockFill,
    PiFolderMinusFill,
    PiFolderOpenFill,
    PiFolderPlusFill,
    PiFolderSimpleDashedFill,
    PiFolderSimpleFill,
    PiFolderSimpleLockFill,
    PiFolderSimpleMinusFill,
    PiFolderSimplePlusFill,
    PiFolderSimpleStarFill,
    PiFolderSimpleUserFill,
    PiFolderStarFill,
    PiFolderUserFill,
    PiFoldersFill,
    PiFootballFill,
    PiFootballHelmetFill,
    PiFootprintsFill,
    PiForkKnifeFill,
    PiFourKFill,
    PiFrameCornersFill,
    PiFramerLogoFill,
    PiFunctionFill,
    PiFunnelFill,
    PiFunnelSimpleFill,
    PiFunnelSimpleXFill,
    PiFunnelXFill,
    PiGameControllerFill,
    PiGarageFill,
    PiGasCanFill,
    PiGasPumpFill,
    PiGaugeFill,
    PiGavelFill,
    PiGearFill,
    PiGearFineFill,
    PiGearSixFill,
    PiGenderFemaleFill,
    PiGenderIntersexFill,
    PiGenderMaleFill,
    PiGenderNeuterFill,
    PiGenderNonbinaryFill,
    PiGenderTransgenderFill,
    PiGhostFill,
    PiGifFill,
    PiGiftFill,
    PiGitBranchFill,
    PiGitCommitFill,
    PiGitDiffFill,
    PiGitForkFill,
    PiGitMergeFill,
    PiGitPullRequestFill,
    PiGithubLogoFill,
    PiGitlabLogoFill,
    PiGitlabLogoSimpleFill,
    PiGlobeFill,
    PiGlobeHemisphereEastFill,
    PiGlobeHemisphereWestFill,
    PiGlobeSimpleFill,
    PiGlobeSimpleXFill,
    PiGlobeStandFill,
    PiGlobeXFill,
    PiGogglesFill,
    PiGolfFill,
    PiGoodreadsLogoFill,
    PiGoogleCardboardLogoFill,
    PiGoogleChromeLogoFill,
    PiGoogleDriveLogoFill,
    PiGoogleLogoFill,
    PiGooglePhotosLogoFill,
    PiGooglePlayLogoFill,
    PiGooglePodcastsLogoFill,
    PiGpsFill,
    PiGpsFixFill,
    PiGpsSlashFill,
    PiGradientFill,
    PiGraduationCapFill,
    PiGrainsFill,
    PiGrainsSlashFill,
    PiGraphFill,
    PiGraphicsCardFill,
    PiGreaterThanFill,
    PiGreaterThanOrEqualFill,
    PiGridFourFill,
    PiGridNineFill,
    PiGuitarFill,
    PiHairDryerFill,
    PiHamburgerFill,
    PiHammerFill,
    PiHandArrowDownFill,
    PiHandArrowUpFill,
    PiHandCoinsFill,
    PiHandDepositFill,
    PiHandEyeFill,
    PiHandFill,
    PiHandFistFill,
    PiHandGrabbingFill,
    PiHandHeartFill,
    PiHandPalmFill,
    PiHandPeaceFill,
    PiHandPointingFill,
    PiHandSoapFill,
    PiHandSwipeLeftFill,
    PiHandSwipeRightFill,
    PiHandTapFill,
    PiHandWavingFill,
    PiHandWithdrawFill,
    PiHandbagFill,
    PiHandbagSimpleFill,
    PiHandsClappingFill,
    PiHandsPrayingFill,
    PiHandshakeFill,
    PiHardDriveFill,
    PiHardDrivesFill,
    PiHardHatFill,
    PiHashFill,
    PiHashStraightFill,
    PiHeadCircuitFill,
    PiHeadlightsFill,
    PiHeadphonesFill,
    PiHeadsetFill,
    PiHeartBreakFill,
    PiHeartFill,
    PiHeartHalfFill,
    PiHeartStraightBreakFill,
    PiHeartStraightFill,
    PiHeartbeatFill,
    PiHexagonFill,
    PiHighDefinitionFill,
    PiHighHeelFill,
    PiHighlighterCircleFill,
    PiHighlighterFill,
    PiHockeyFill,
    PiHoodieFill,
    PiHorseFill,
    PiHospitalFill,
    PiHourglassFill,
    PiHourglassHighFill,
    PiHourglassLowFill,
    PiHourglassMediumFill,
    PiHourglassSimpleFill,
    PiHourglassSimpleHighFill,
    PiHourglassSimpleLowFill,
    PiHourglassSimpleMediumFill,
    PiHouseFill,
    PiHouseLineFill,
    PiHouseSimpleFill,
    PiHurricaneFill,
    PiIceCreamFill,
    PiIdentificationBadgeFill,
    PiIdentificationCardFill,
    PiImageBrokenFill,
    PiImageFill,
    PiImageSquareFill,
    PiImagesFill,
    PiImagesSquareFill,
    PiInfinityFill,
    PiInfoFill,
    PiInstagramLogoFill,
    PiIntersectFill,
    PiIntersectSquareFill,
    PiIntersectThreeFill,
    PiIntersectionFill,
    PiInvoiceFill,
    PiIslandFill,
    PiJarFill,
    PiJarLabelFill,
    PiJeepFill,
    PiJoystickFill,
    PiKanbanFill,
    PiKeyFill,
    PiKeyReturnFill,
    PiKeyboardFill,
    PiKeyholeFill,
    PiKnifeFill,
    PiLadderFill,
    PiLadderSimpleFill,
    PiLampFill,
    PiLampPendantFill,
    PiLaptopFill,
    PiLassoFill,
    PiLastfmLogoFill,
    PiLayoutFill,
    PiLeafFill,
    PiLecternFill,
    PiLegoFill,
    PiLegoSmileyFill,
    PiLessThanFill,
    PiLessThanOrEqualFill,
    PiLetterCircleHFill,
    PiLetterCirclePFill,
    PiLetterCircleVFill,
    PiLifebuoyFill,
    PiLightbulbFilamentFill,
    PiLightbulbFill,
    PiLighthouseFill,
    PiLightningAFill,
    PiLightningFill,
    PiLightningSlashFill,
    PiLineSegmentFill,
    PiLineSegmentsFill,
    PiLineVerticalFill,
    PiLinkBreakFill,
    PiLinkFill,
    PiLinkSimpleBreakFill,
    PiLinkSimpleFill,
    PiLinkSimpleHorizontalBreakFill,
    PiLinkSimpleHorizontalFill,
    PiLinkedinLogoFill,
    PiLinktreeLogoFill,
    PiLinuxLogoFill,
    PiListBulletsFill,
    PiListChecksFill,
    PiListDashesFill,
    PiListFill,
    PiListHeartFill,
    PiListMagnifyingGlassFill,
    PiListNumbersFill,
    PiListPlusFill,
    PiListStarFill,
    PiLockFill,
    PiLockKeyFill,
    PiLockKeyOpenFill,
    PiLockLaminatedFill,
    PiLockLaminatedOpenFill,
    PiLockOpenFill,
    PiLockSimpleFill,
    PiLockSimpleOpenFill,
    PiLockersFill,
    PiLogFill,
    PiMagicWandFill,
    PiMagnetFill,
    PiMagnetStraightFill,
    PiMagnifyingGlassFill,
    PiMagnifyingGlassMinusFill,
    PiMagnifyingGlassPlusFill,
    PiMailboxFill,
    PiMapPinAreaFill,
    PiMapPinFill,
    PiMapPinLineFill,
    PiMapPinPlusFill,
    PiMapPinSimpleAreaFill,
    PiMapPinSimpleFill,
    PiMapPinSimpleLineFill,
    PiMapTrifoldFill,
    PiMarkdownLogoFill,
    PiMarkerCircleFill,
    PiMartiniFill,
    PiMaskHappyFill,
    PiMaskSadFill,
    PiMastodonLogoFill,
    PiMathOperationsFill,
    PiMatrixLogoFill,
    PiMedalFill,
    PiMedalMilitaryFill,
    PiMediumLogoFill,
    PiMegaphoneFill,
    PiMegaphoneSimpleFill,
    PiMemberOfFill,
    PiMemoryFill,
    PiMessengerLogoFill,
    PiMetaLogoFill,
    PiMeteorFill,
    PiMetronomeFill,
    PiMicrophoneFill,
    PiMicrophoneSlashFill,
    PiMicrophoneStageFill,
    PiMicroscopeFill,
    PiMicrosoftExcelLogoFill,
    PiMicrosoftOutlookLogoFill,
    PiMicrosoftPowerpointLogoFill,
    PiMicrosoftTeamsLogoFill,
    PiMicrosoftWordLogoFill,
    PiMinusCircleFill,
    PiMinusFill,
    PiMinusSquareFill,
    PiMoneyFill,
    PiMoneyWavyFill,
    PiMonitorArrowUpFill,
    PiMonitorFill,
    PiMonitorPlayFill,
    PiMoonFill,
    PiMoonStarsFill,
    PiMopedFill,
    PiMopedFrontFill,
    PiMosqueFill,
    PiMotorcycleFill,
    PiMountainsFill,
    PiMouseFill,
    PiMouseLeftClickFill,
    PiMouseMiddleClickFill,
    PiMouseRightClickFill,
    PiMouseScrollFill,
    PiMouseSimpleFill,
    PiMusicNoteFill,
    PiMusicNoteSimpleFill,
    PiMusicNotesFill,
    PiMusicNotesMinusFill,
    PiMusicNotesPlusFill,
    PiMusicNotesSimpleFill,
    PiNavigationArrowFill,
    PiNeedleFill,
    PiNetworkFill,
    PiNetworkSlashFill,
    PiNetworkXFill,
    PiNewspaperClippingFill,
    PiNewspaperFill,
    PiNotEqualsFill,
    PiNotMemberOfFill,
    PiNotSubsetOfFill,
    PiNotSupersetOfFill,
    PiNotchesFill,
    PiNoteBlankFill,
    PiNoteFill,
    PiNotePencilFill,
    PiNotebookFill,
    PiNotepadFill,
    PiNotificationFill,
    PiNotionLogoFill,
    PiNuclearPlantFill,
    PiNumberCircleEightFill,
    PiNumberCircleFiveFill,
    PiNumberCircleFourFill,
    PiNumberCircleNineFill,
    PiNumberCircleOneFill,
    PiNumberCircleSevenFill,
    PiNumberCircleSixFill,
    PiNumberCircleThreeFill,
    PiNumberCircleTwoFill,
    PiNumberCircleZeroFill,
    PiNumberEightFill,
    PiNumberFiveFill,
    PiNumberFourFill,
    PiNumberNineFill,
    PiNumberOneFill,
    PiNumberSevenFill,
    PiNumberSixFill,
} from "react-icons/pi"

export function nameToReactIcon_pi_3(iconName: string): IconType | undefined {

    switch(iconName) {
        case "pi:PiWebcamSlashDuotone":
            return PiWebcamSlashDuotone;
        case "pi:PiWebhooksLogoDuotone":
            return PiWebhooksLogoDuotone;
        case "pi:PiWechatLogoDuotone":
            return PiWechatLogoDuotone;
        case "pi:PiWhatsappLogoDuotone":
            return PiWhatsappLogoDuotone;
        case "pi:PiWheelchairDuotone":
            return PiWheelchairDuotone;
        case "pi:PiWheelchairMotionDuotone":
            return PiWheelchairMotionDuotone;
        case "pi:PiWifiHighDuotone":
            return PiWifiHighDuotone;
        case "pi:PiWifiLowDuotone":
            return PiWifiLowDuotone;
        case "pi:PiWifiMediumDuotone":
            return PiWifiMediumDuotone;
        case "pi:PiWifiNoneDuotone":
            return PiWifiNoneDuotone;
        case "pi:PiWifiSlashDuotone":
            return PiWifiSlashDuotone;
        case "pi:PiWifiXDuotone":
            return PiWifiXDuotone;
        case "pi:PiWindDuotone":
            return PiWindDuotone;
        case "pi:PiWindmillDuotone":
            return PiWindmillDuotone;
        case "pi:PiWindowsLogoDuotone":
            return PiWindowsLogoDuotone;
        case "pi:PiWineDuotone":
            return PiWineDuotone;
        case "pi:PiWrenchDuotone":
            return PiWrenchDuotone;
        case "pi:PiXCircleDuotone":
            return PiXCircleDuotone;
        case "pi:PiXDuotone":
            return PiXDuotone;
        case "pi:PiXLogoDuotone":
            return PiXLogoDuotone;
        case "pi:PiXSquareDuotone":
            return PiXSquareDuotone;
        case "pi:PiYarnDuotone":
            return PiYarnDuotone;
        case "pi:PiYinYangDuotone":
            return PiYinYangDuotone;
        case "pi:PiYoutubeLogoDuotone":
            return PiYoutubeLogoDuotone;
        case "pi:PiAcornFill":
            return PiAcornFill;
        case "pi:PiAddressBookFill":
            return PiAddressBookFill;
        case "pi:PiAddressBookTabsFill":
            return PiAddressBookTabsFill;
        case "pi:PiAirTrafficControlFill":
            return PiAirTrafficControlFill;
        case "pi:PiAirplaneFill":
            return PiAirplaneFill;
        case "pi:PiAirplaneInFlightFill":
            return PiAirplaneInFlightFill;
        case "pi:PiAirplaneLandingFill":
            return PiAirplaneLandingFill;
        case "pi:PiAirplaneTakeoffFill":
            return PiAirplaneTakeoffFill;
        case "pi:PiAirplaneTaxiingFill":
            return PiAirplaneTaxiingFill;
        case "pi:PiAirplaneTiltFill":
            return PiAirplaneTiltFill;
        case "pi:PiAirplayFill":
            return PiAirplayFill;
        case "pi:PiAlarmFill":
            return PiAlarmFill;
        case "pi:PiAlienFill":
            return PiAlienFill;
        case "pi:PiAlignBottomFill":
            return PiAlignBottomFill;
        case "pi:PiAlignBottomSimpleFill":
            return PiAlignBottomSimpleFill;
        case "pi:PiAlignCenterHorizontalFill":
            return PiAlignCenterHorizontalFill;
        case "pi:PiAlignCenterHorizontalSimpleFill":
            return PiAlignCenterHorizontalSimpleFill;
        case "pi:PiAlignCenterVerticalFill":
            return PiAlignCenterVerticalFill;
        case "pi:PiAlignCenterVerticalSimpleFill":
            return PiAlignCenterVerticalSimpleFill;
        case "pi:PiAlignLeftFill":
            return PiAlignLeftFill;
        case "pi:PiAlignLeftSimpleFill":
            return PiAlignLeftSimpleFill;
        case "pi:PiAlignRightFill":
            return PiAlignRightFill;
        case "pi:PiAlignRightSimpleFill":
            return PiAlignRightSimpleFill;
        case "pi:PiAlignTopFill":
            return PiAlignTopFill;
        case "pi:PiAlignTopSimpleFill":
            return PiAlignTopSimpleFill;
        case "pi:PiAmazonLogoFill":
            return PiAmazonLogoFill;
        case "pi:PiAmbulanceFill":
            return PiAmbulanceFill;
        case "pi:PiAnchorFill":
            return PiAnchorFill;
        case "pi:PiAnchorSimpleFill":
            return PiAnchorSimpleFill;
        case "pi:PiAndroidLogoFill":
            return PiAndroidLogoFill;
        case "pi:PiAngleFill":
            return PiAngleFill;
        case "pi:PiAngularLogoFill":
            return PiAngularLogoFill;
        case "pi:PiApertureFill":
            return PiApertureFill;
        case "pi:PiAppStoreLogoFill":
            return PiAppStoreLogoFill;
        case "pi:PiAppWindowFill":
            return PiAppWindowFill;
        case "pi:PiAppleLogoFill":
            return PiAppleLogoFill;
        case "pi:PiApplePodcastsLogoFill":
            return PiApplePodcastsLogoFill;
        case "pi:PiApproximateEqualsFill":
            return PiApproximateEqualsFill;
        case "pi:PiArchiveFill":
            return PiArchiveFill;
        case "pi:PiArmchairFill":
            return PiArmchairFill;
        case "pi:PiArrowArcLeftFill":
            return PiArrowArcLeftFill;
        case "pi:PiArrowArcRightFill":
            return PiArrowArcRightFill;
        case "pi:PiArrowBendDoubleUpLeftFill":
            return PiArrowBendDoubleUpLeftFill;
        case "pi:PiArrowBendDoubleUpRightFill":
            return PiArrowBendDoubleUpRightFill;
        case "pi:PiArrowBendDownLeftFill":
            return PiArrowBendDownLeftFill;
        case "pi:PiArrowBendDownRightFill":
            return PiArrowBendDownRightFill;
        case "pi:PiArrowBendLeftDownFill":
            return PiArrowBendLeftDownFill;
        case "pi:PiArrowBendLeftUpFill":
            return PiArrowBendLeftUpFill;
        case "pi:PiArrowBendRightDownFill":
            return PiArrowBendRightDownFill;
        case "pi:PiArrowBendRightUpFill":
            return PiArrowBendRightUpFill;
        case "pi:PiArrowBendUpLeftFill":
            return PiArrowBendUpLeftFill;
        case "pi:PiArrowBendUpRightFill":
            return PiArrowBendUpRightFill;
        case "pi:PiArrowCircleDownFill":
            return PiArrowCircleDownFill;
        case "pi:PiArrowCircleDownLeftFill":
            return PiArrowCircleDownLeftFill;
        case "pi:PiArrowCircleDownRightFill":
            return PiArrowCircleDownRightFill;
        case "pi:PiArrowCircleLeftFill":
            return PiArrowCircleLeftFill;
        case "pi:PiArrowCircleRightFill":
            return PiArrowCircleRightFill;
        case "pi:PiArrowCircleUpFill":
            return PiArrowCircleUpFill;
        case "pi:PiArrowCircleUpLeftFill":
            return PiArrowCircleUpLeftFill;
        case "pi:PiArrowCircleUpRightFill":
            return PiArrowCircleUpRightFill;
        case "pi:PiArrowClockwiseFill":
            return PiArrowClockwiseFill;
        case "pi:PiArrowCounterClockwiseFill":
            return PiArrowCounterClockwiseFill;
        case "pi:PiArrowDownFill":
            return PiArrowDownFill;
        case "pi:PiArrowDownLeftFill":
            return PiArrowDownLeftFill;
        case "pi:PiArrowDownRightFill":
            return PiArrowDownRightFill;
        case "pi:PiArrowElbowDownLeftFill":
            return PiArrowElbowDownLeftFill;
        case "pi:PiArrowElbowDownRightFill":
            return PiArrowElbowDownRightFill;
        case "pi:PiArrowElbowLeftDownFill":
            return PiArrowElbowLeftDownFill;
        case "pi:PiArrowElbowLeftFill":
            return PiArrowElbowLeftFill;
        case "pi:PiArrowElbowLeftUpFill":
            return PiArrowElbowLeftUpFill;
        case "pi:PiArrowElbowRightDownFill":
            return PiArrowElbowRightDownFill;
        case "pi:PiArrowElbowRightFill":
            return PiArrowElbowRightFill;
        case "pi:PiArrowElbowRightUpFill":
            return PiArrowElbowRightUpFill;
        case "pi:PiArrowElbowUpLeftFill":
            return PiArrowElbowUpLeftFill;
        case "pi:PiArrowElbowUpRightFill":
            return PiArrowElbowUpRightFill;
        case "pi:PiArrowFatDownFill":
            return PiArrowFatDownFill;
        case "pi:PiArrowFatLeftFill":
            return PiArrowFatLeftFill;
        case "pi:PiArrowFatLineDownFill":
            return PiArrowFatLineDownFill;
        case "pi:PiArrowFatLineLeftFill":
            return PiArrowFatLineLeftFill;
        case "pi:PiArrowFatLineRightFill":
            return PiArrowFatLineRightFill;
        case "pi:PiArrowFatLineUpFill":
            return PiArrowFatLineUpFill;
        case "pi:PiArrowFatLinesDownFill":
            return PiArrowFatLinesDownFill;
        case "pi:PiArrowFatLinesLeftFill":
            return PiArrowFatLinesLeftFill;
        case "pi:PiArrowFatLinesRightFill":
            return PiArrowFatLinesRightFill;
        case "pi:PiArrowFatLinesUpFill":
            return PiArrowFatLinesUpFill;
        case "pi:PiArrowFatRightFill":
            return PiArrowFatRightFill;
        case "pi:PiArrowFatUpFill":
            return PiArrowFatUpFill;
        case "pi:PiArrowLeftFill":
            return PiArrowLeftFill;
        case "pi:PiArrowLineDownFill":
            return PiArrowLineDownFill;
        case "pi:PiArrowLineDownLeftFill":
            return PiArrowLineDownLeftFill;
        case "pi:PiArrowLineDownRightFill":
            return PiArrowLineDownRightFill;
        case "pi:PiArrowLineLeftFill":
            return PiArrowLineLeftFill;
        case "pi:PiArrowLineRightFill":
            return PiArrowLineRightFill;
        case "pi:PiArrowLineUpFill":
            return PiArrowLineUpFill;
        case "pi:PiArrowLineUpLeftFill":
            return PiArrowLineUpLeftFill;
        case "pi:PiArrowLineUpRightFill":
            return PiArrowLineUpRightFill;
        case "pi:PiArrowRightFill":
            return PiArrowRightFill;
        case "pi:PiArrowSquareDownFill":
            return PiArrowSquareDownFill;
        case "pi:PiArrowSquareDownLeftFill":
            return PiArrowSquareDownLeftFill;
        case "pi:PiArrowSquareDownRightFill":
            return PiArrowSquareDownRightFill;
        case "pi:PiArrowSquareInFill":
            return PiArrowSquareInFill;
        case "pi:PiArrowSquareLeftFill":
            return PiArrowSquareLeftFill;
        case "pi:PiArrowSquareOutFill":
            return PiArrowSquareOutFill;
        case "pi:PiArrowSquareRightFill":
            return PiArrowSquareRightFill;
        case "pi:PiArrowSquareUpFill":
            return PiArrowSquareUpFill;
        case "pi:PiArrowSquareUpLeftFill":
            return PiArrowSquareUpLeftFill;
        case "pi:PiArrowSquareUpRightFill":
            return PiArrowSquareUpRightFill;
        case "pi:PiArrowUDownLeftFill":
            return PiArrowUDownLeftFill;
        case "pi:PiArrowUDownRightFill":
            return PiArrowUDownRightFill;
        case "pi:PiArrowULeftDownFill":
            return PiArrowULeftDownFill;
        case "pi:PiArrowULeftUpFill":
            return PiArrowULeftUpFill;
        case "pi:PiArrowURightDownFill":
            return PiArrowURightDownFill;
        case "pi:PiArrowURightUpFill":
            return PiArrowURightUpFill;
        case "pi:PiArrowUUpLeftFill":
            return PiArrowUUpLeftFill;
        case "pi:PiArrowUUpRightFill":
            return PiArrowUUpRightFill;
        case "pi:PiArrowUpFill":
            return PiArrowUpFill;
        case "pi:PiArrowUpLeftFill":
            return PiArrowUpLeftFill;
        case "pi:PiArrowUpRightFill":
            return PiArrowUpRightFill;
        case "pi:PiArrowsClockwiseFill":
            return PiArrowsClockwiseFill;
        case "pi:PiArrowsCounterClockwiseFill":
            return PiArrowsCounterClockwiseFill;
        case "pi:PiArrowsDownUpFill":
            return PiArrowsDownUpFill;
        case "pi:PiArrowsHorizontalFill":
            return PiArrowsHorizontalFill;
        case "pi:PiArrowsInCardinalFill":
            return PiArrowsInCardinalFill;
        case "pi:PiArrowsInFill":
            return PiArrowsInFill;
        case "pi:PiArrowsInLineHorizontalFill":
            return PiArrowsInLineHorizontalFill;
        case "pi:PiArrowsInLineVerticalFill":
            return PiArrowsInLineVerticalFill;
        case "pi:PiArrowsInSimpleFill":
            return PiArrowsInSimpleFill;
        case "pi:PiArrowsLeftRightFill":
            return PiArrowsLeftRightFill;
        case "pi:PiArrowsMergeFill":
            return PiArrowsMergeFill;
        case "pi:PiArrowsOutCardinalFill":
            return PiArrowsOutCardinalFill;
        case "pi:PiArrowsOutFill":
            return PiArrowsOutFill;
        case "pi:PiArrowsOutLineHorizontalFill":
            return PiArrowsOutLineHorizontalFill;
        case "pi:PiArrowsOutLineVerticalFill":
            return PiArrowsOutLineVerticalFill;
        case "pi:PiArrowsOutSimpleFill":
            return PiArrowsOutSimpleFill;
        case "pi:PiArrowsSplitFill":
            return PiArrowsSplitFill;
        case "pi:PiArrowsVerticalFill":
            return PiArrowsVerticalFill;
        case "pi:PiArticleFill":
            return PiArticleFill;
        case "pi:PiArticleMediumFill":
            return PiArticleMediumFill;
        case "pi:PiArticleNyTimesFill":
            return PiArticleNyTimesFill;
        case "pi:PiAsclepiusFill":
            return PiAsclepiusFill;
        case "pi:PiAsteriskFill":
            return PiAsteriskFill;
        case "pi:PiAsteriskSimpleFill":
            return PiAsteriskSimpleFill;
        case "pi:PiAtFill":
            return PiAtFill;
        case "pi:PiAtomFill":
            return PiAtomFill;
        case "pi:PiAvocadoFill":
            return PiAvocadoFill;
        case "pi:PiAxeFill":
            return PiAxeFill;
        case "pi:PiBabyCarriageFill":
            return PiBabyCarriageFill;
        case "pi:PiBabyFill":
            return PiBabyFill;
        case "pi:PiBackpackFill":
            return PiBackpackFill;
        case "pi:PiBackspaceFill":
            return PiBackspaceFill;
        case "pi:PiBagFill":
            return PiBagFill;
        case "pi:PiBagSimpleFill":
            return PiBagSimpleFill;
        case "pi:PiBalloonFill":
            return PiBalloonFill;
        case "pi:PiBandaidsFill":
            return PiBandaidsFill;
        case "pi:PiBankFill":
            return PiBankFill;
        case "pi:PiBarbellFill":
            return PiBarbellFill;
        case "pi:PiBarcodeFill":
            return PiBarcodeFill;
        case "pi:PiBarnFill":
            return PiBarnFill;
        case "pi:PiBarricadeFill":
            return PiBarricadeFill;
        case "pi:PiBaseballCapFill":
            return PiBaseballCapFill;
        case "pi:PiBaseballFill":
            return PiBaseballFill;
        case "pi:PiBaseballHelmetFill":
            return PiBaseballHelmetFill;
        case "pi:PiBasketFill":
            return PiBasketFill;
        case "pi:PiBasketballFill":
            return PiBasketballFill;
        case "pi:PiBathtubFill":
            return PiBathtubFill;
        case "pi:PiBatteryChargingFill":
            return PiBatteryChargingFill;
        case "pi:PiBatteryChargingVerticalFill":
            return PiBatteryChargingVerticalFill;
        case "pi:PiBatteryEmptyFill":
            return PiBatteryEmptyFill;
        case "pi:PiBatteryFullFill":
            return PiBatteryFullFill;
        case "pi:PiBatteryHighFill":
            return PiBatteryHighFill;
        case "pi:PiBatteryLowFill":
            return PiBatteryLowFill;
        case "pi:PiBatteryMediumFill":
            return PiBatteryMediumFill;
        case "pi:PiBatteryPlusFill":
            return PiBatteryPlusFill;
        case "pi:PiBatteryPlusVerticalFill":
            return PiBatteryPlusVerticalFill;
        case "pi:PiBatteryVerticalEmptyFill":
            return PiBatteryVerticalEmptyFill;
        case "pi:PiBatteryVerticalFullFill":
            return PiBatteryVerticalFullFill;
        case "pi:PiBatteryVerticalHighFill":
            return PiBatteryVerticalHighFill;
        case "pi:PiBatteryVerticalLowFill":
            return PiBatteryVerticalLowFill;
        case "pi:PiBatteryVerticalMediumFill":
            return PiBatteryVerticalMediumFill;
        case "pi:PiBatteryWarningFill":
            return PiBatteryWarningFill;
        case "pi:PiBatteryWarningVerticalFill":
            return PiBatteryWarningVerticalFill;
        case "pi:PiBeachBallFill":
            return PiBeachBallFill;
        case "pi:PiBeanieFill":
            return PiBeanieFill;
        case "pi:PiBedFill":
            return PiBedFill;
        case "pi:PiBeerBottleFill":
            return PiBeerBottleFill;
        case "pi:PiBeerSteinFill":
            return PiBeerSteinFill;
        case "pi:PiBehanceLogoFill":
            return PiBehanceLogoFill;
        case "pi:PiBellFill":
            return PiBellFill;
        case "pi:PiBellRingingFill":
            return PiBellRingingFill;
        case "pi:PiBellSimpleFill":
            return PiBellSimpleFill;
        case "pi:PiBellSimpleRingingFill":
            return PiBellSimpleRingingFill;
        case "pi:PiBellSimpleSlashFill":
            return PiBellSimpleSlashFill;
        case "pi:PiBellSimpleZFill":
            return PiBellSimpleZFill;
        case "pi:PiBellSlashFill":
            return PiBellSlashFill;
        case "pi:PiBellZFill":
            return PiBellZFill;
        case "pi:PiBeltFill":
            return PiBeltFill;
        case "pi:PiBezierCurveFill":
            return PiBezierCurveFill;
        case "pi:PiBicycleFill":
            return PiBicycleFill;
        case "pi:PiBinaryFill":
            return PiBinaryFill;
        case "pi:PiBinocularsFill":
            return PiBinocularsFill;
        case "pi:PiBiohazardFill":
            return PiBiohazardFill;
        case "pi:PiBirdFill":
            return PiBirdFill;
        case "pi:PiBlueprintFill":
            return PiBlueprintFill;
        case "pi:PiBluetoothConnectedFill":
            return PiBluetoothConnectedFill;
        case "pi:PiBluetoothFill":
            return PiBluetoothFill;
        case "pi:PiBluetoothSlashFill":
            return PiBluetoothSlashFill;
        case "pi:PiBluetoothXFill":
            return PiBluetoothXFill;
        case "pi:PiBoatFill":
            return PiBoatFill;
        case "pi:PiBombFill":
            return PiBombFill;
        case "pi:PiBoneFill":
            return PiBoneFill;
        case "pi:PiBookBookmarkFill":
            return PiBookBookmarkFill;
        case "pi:PiBookFill":
            return PiBookFill;
        case "pi:PiBookOpenFill":
            return PiBookOpenFill;
        case "pi:PiBookOpenTextFill":
            return PiBookOpenTextFill;
        case "pi:PiBookOpenUserFill":
            return PiBookOpenUserFill;
        case "pi:PiBookmarkFill":
            return PiBookmarkFill;
        case "pi:PiBookmarkSimpleFill":
            return PiBookmarkSimpleFill;
        case "pi:PiBookmarksFill":
            return PiBookmarksFill;
        case "pi:PiBookmarksSimpleFill":
            return PiBookmarksSimpleFill;
        case "pi:PiBooksFill":
            return PiBooksFill;
        case "pi:PiBootFill":
            return PiBootFill;
        case "pi:PiBoulesFill":
            return PiBoulesFill;
        case "pi:PiBoundingBoxFill":
            return PiBoundingBoxFill;
        case "pi:PiBowlFoodFill":
            return PiBowlFoodFill;
        case "pi:PiBowlSteamFill":
            return PiBowlSteamFill;
        case "pi:PiBowlingBallFill":
            return PiBowlingBallFill;
        case "pi:PiBoxArrowDownFill":
            return PiBoxArrowDownFill;
        case "pi:PiBoxArrowUpFill":
            return PiBoxArrowUpFill;
        case "pi:PiBoxingGloveFill":
            return PiBoxingGloveFill;
        case "pi:PiBracketsAngleFill":
            return PiBracketsAngleFill;
        case "pi:PiBracketsCurlyFill":
            return PiBracketsCurlyFill;
        case "pi:PiBracketsRoundFill":
            return PiBracketsRoundFill;
        case "pi:PiBracketsSquareFill":
            return PiBracketsSquareFill;
        case "pi:PiBrainFill":
            return PiBrainFill;
        case "pi:PiBrandyFill":
            return PiBrandyFill;
        case "pi:PiBreadFill":
            return PiBreadFill;
        case "pi:PiBridgeFill":
            return PiBridgeFill;
        case "pi:PiBriefcaseFill":
            return PiBriefcaseFill;
        case "pi:PiBriefcaseMetalFill":
            return PiBriefcaseMetalFill;
        case "pi:PiBroadcastFill":
            return PiBroadcastFill;
        case "pi:PiBroomFill":
            return PiBroomFill;
        case "pi:PiBrowserFill":
            return PiBrowserFill;
        case "pi:PiBrowsersFill":
            return PiBrowsersFill;
        case "pi:PiBugBeetleFill":
            return PiBugBeetleFill;
        case "pi:PiBugDroidFill":
            return PiBugDroidFill;
        case "pi:PiBugFill":
            return PiBugFill;
        case "pi:PiBuildingApartmentFill":
            return PiBuildingApartmentFill;
        case "pi:PiBuildingFill":
            return PiBuildingFill;
        case "pi:PiBuildingOfficeFill":
            return PiBuildingOfficeFill;
        case "pi:PiBuildingsFill":
            return PiBuildingsFill;
        case "pi:PiBulldozerFill":
            return PiBulldozerFill;
        case "pi:PiBusFill":
            return PiBusFill;
        case "pi:PiButterflyFill":
            return PiButterflyFill;
        case "pi:PiCableCarFill":
            return PiCableCarFill;
        case "pi:PiCactusFill":
            return PiCactusFill;
        case "pi:PiCakeFill":
            return PiCakeFill;
        case "pi:PiCalculatorFill":
            return PiCalculatorFill;
        case "pi:PiCalendarBlankFill":
            return PiCalendarBlankFill;
        case "pi:PiCalendarCheckFill":
            return PiCalendarCheckFill;
        case "pi:PiCalendarDotFill":
            return PiCalendarDotFill;
        case "pi:PiCalendarDotsFill":
            return PiCalendarDotsFill;
        case "pi:PiCalendarFill":
            return PiCalendarFill;
        case "pi:PiCalendarHeartFill":
            return PiCalendarHeartFill;
        case "pi:PiCalendarMinusFill":
            return PiCalendarMinusFill;
        case "pi:PiCalendarPlusFill":
            return PiCalendarPlusFill;
        case "pi:PiCalendarSlashFill":
            return PiCalendarSlashFill;
        case "pi:PiCalendarStarFill":
            return PiCalendarStarFill;
        case "pi:PiCalendarXFill":
            return PiCalendarXFill;
        case "pi:PiCallBellFill":
            return PiCallBellFill;
        case "pi:PiCameraFill":
            return PiCameraFill;
        case "pi:PiCameraPlusFill":
            return PiCameraPlusFill;
        case "pi:PiCameraRotateFill":
            return PiCameraRotateFill;
        case "pi:PiCameraSlashFill":
            return PiCameraSlashFill;
        case "pi:PiCampfireFill":
            return PiCampfireFill;
        case "pi:PiCarBatteryFill":
            return PiCarBatteryFill;
        case "pi:PiCarFill":
            return PiCarFill;
        case "pi:PiCarProfileFill":
            return PiCarProfileFill;
        case "pi:PiCarSimpleFill":
            return PiCarSimpleFill;
        case "pi:PiCardholderFill":
            return PiCardholderFill;
        case "pi:PiCardsFill":
            return PiCardsFill;
        case "pi:PiCardsThreeFill":
            return PiCardsThreeFill;
        case "pi:PiCaretCircleDoubleDownFill":
            return PiCaretCircleDoubleDownFill;
        case "pi:PiCaretCircleDoubleLeftFill":
            return PiCaretCircleDoubleLeftFill;
        case "pi:PiCaretCircleDoubleRightFill":
            return PiCaretCircleDoubleRightFill;
        case "pi:PiCaretCircleDoubleUpFill":
            return PiCaretCircleDoubleUpFill;
        case "pi:PiCaretCircleDownFill":
            return PiCaretCircleDownFill;
        case "pi:PiCaretCircleLeftFill":
            return PiCaretCircleLeftFill;
        case "pi:PiCaretCircleRightFill":
            return PiCaretCircleRightFill;
        case "pi:PiCaretCircleUpDownFill":
            return PiCaretCircleUpDownFill;
        case "pi:PiCaretCircleUpFill":
            return PiCaretCircleUpFill;
        case "pi:PiCaretDoubleDownFill":
            return PiCaretDoubleDownFill;
        case "pi:PiCaretDoubleLeftFill":
            return PiCaretDoubleLeftFill;
        case "pi:PiCaretDoubleRightFill":
            return PiCaretDoubleRightFill;
        case "pi:PiCaretDoubleUpFill":
            return PiCaretDoubleUpFill;
        case "pi:PiCaretDownFill":
            return PiCaretDownFill;
        case "pi:PiCaretLeftFill":
            return PiCaretLeftFill;
        case "pi:PiCaretLineDownFill":
            return PiCaretLineDownFill;
        case "pi:PiCaretLineLeftFill":
            return PiCaretLineLeftFill;
        case "pi:PiCaretLineRightFill":
            return PiCaretLineRightFill;
        case "pi:PiCaretLineUpFill":
            return PiCaretLineUpFill;
        case "pi:PiCaretRightFill":
            return PiCaretRightFill;
        case "pi:PiCaretUpDownFill":
            return PiCaretUpDownFill;
        case "pi:PiCaretUpFill":
            return PiCaretUpFill;
        case "pi:PiCarrotFill":
            return PiCarrotFill;
        case "pi:PiCashRegisterFill":
            return PiCashRegisterFill;
        case "pi:PiCassetteTapeFill":
            return PiCassetteTapeFill;
        case "pi:PiCastleTurretFill":
            return PiCastleTurretFill;
        case "pi:PiCatFill":
            return PiCatFill;
        case "pi:PiCellSignalFullFill":
            return PiCellSignalFullFill;
        case "pi:PiCellSignalHighFill":
            return PiCellSignalHighFill;
        case "pi:PiCellSignalLowFill":
            return PiCellSignalLowFill;
        case "pi:PiCellSignalMediumFill":
            return PiCellSignalMediumFill;
        case "pi:PiCellSignalNoneFill":
            return PiCellSignalNoneFill;
        case "pi:PiCellSignalSlashFill":
            return PiCellSignalSlashFill;
        case "pi:PiCellSignalXFill":
            return PiCellSignalXFill;
        case "pi:PiCellTowerFill":
            return PiCellTowerFill;
        case "pi:PiCertificateFill":
            return PiCertificateFill;
        case "pi:PiChairFill":
            return PiChairFill;
        case "pi:PiChalkboardFill":
            return PiChalkboardFill;
        case "pi:PiChalkboardSimpleFill":
            return PiChalkboardSimpleFill;
        case "pi:PiChalkboardTeacherFill":
            return PiChalkboardTeacherFill;
        case "pi:PiChampagneFill":
            return PiChampagneFill;
        case "pi:PiChargingStationFill":
            return PiChargingStationFill;
        case "pi:PiChartBarFill":
            return PiChartBarFill;
        case "pi:PiChartBarHorizontalFill":
            return PiChartBarHorizontalFill;
        case "pi:PiChartDonutFill":
            return PiChartDonutFill;
        case "pi:PiChartLineDownFill":
            return PiChartLineDownFill;
        case "pi:PiChartLineFill":
            return PiChartLineFill;
        case "pi:PiChartLineUpFill":
            return PiChartLineUpFill;
        case "pi:PiChartPieFill":
            return PiChartPieFill;
        case "pi:PiChartPieSliceFill":
            return PiChartPieSliceFill;
        case "pi:PiChartPolarFill":
            return PiChartPolarFill;
        case "pi:PiChartScatterFill":
            return PiChartScatterFill;
        case "pi:PiChatCenteredDotsFill":
            return PiChatCenteredDotsFill;
        case "pi:PiChatCenteredFill":
            return PiChatCenteredFill;
        case "pi:PiChatCenteredSlashFill":
            return PiChatCenteredSlashFill;
        case "pi:PiChatCenteredTextFill":
            return PiChatCenteredTextFill;
        case "pi:PiChatCircleDotsFill":
            return PiChatCircleDotsFill;
        case "pi:PiChatCircleFill":
            return PiChatCircleFill;
        case "pi:PiChatCircleSlashFill":
            return PiChatCircleSlashFill;
        case "pi:PiChatCircleTextFill":
            return PiChatCircleTextFill;
        case "pi:PiChatDotsFill":
            return PiChatDotsFill;
        case "pi:PiChatFill":
            return PiChatFill;
        case "pi:PiChatSlashFill":
            return PiChatSlashFill;
        case "pi:PiChatTeardropDotsFill":
            return PiChatTeardropDotsFill;
        case "pi:PiChatTeardropFill":
            return PiChatTeardropFill;
        case "pi:PiChatTeardropSlashFill":
            return PiChatTeardropSlashFill;
        case "pi:PiChatTeardropTextFill":
            return PiChatTeardropTextFill;
        case "pi:PiChatTextFill":
            return PiChatTextFill;
        case "pi:PiChatsCircleFill":
            return PiChatsCircleFill;
        case "pi:PiChatsFill":
            return PiChatsFill;
        case "pi:PiChatsTeardropFill":
            return PiChatsTeardropFill;
        case "pi:PiCheckCircleFill":
            return PiCheckCircleFill;
        case "pi:PiCheckFatFill":
            return PiCheckFatFill;
        case "pi:PiCheckFill":
            return PiCheckFill;
        case "pi:PiCheckSquareFill":
            return PiCheckSquareFill;
        case "pi:PiCheckSquareOffsetFill":
            return PiCheckSquareOffsetFill;
        case "pi:PiCheckerboardFill":
            return PiCheckerboardFill;
        case "pi:PiChecksFill":
            return PiChecksFill;
        case "pi:PiCheersFill":
            return PiCheersFill;
        case "pi:PiCheeseFill":
            return PiCheeseFill;
        case "pi:PiChefHatFill":
            return PiChefHatFill;
        case "pi:PiCherriesFill":
            return PiCherriesFill;
        case "pi:PiChurchFill":
            return PiChurchFill;
        case "pi:PiCigaretteFill":
            return PiCigaretteFill;
        case "pi:PiCigaretteSlashFill":
            return PiCigaretteSlashFill;
        case "pi:PiCircleDashedFill":
            return PiCircleDashedFill;
        case "pi:PiCircleFill":
            return PiCircleFill;
        case "pi:PiCircleHalfFill":
            return PiCircleHalfFill;
        case "pi:PiCircleHalfTiltFill":
            return PiCircleHalfTiltFill;
        case "pi:PiCircleNotchFill":
            return PiCircleNotchFill;
        case "pi:PiCirclesFourFill":
            return PiCirclesFourFill;
        case "pi:PiCirclesThreeFill":
            return PiCirclesThreeFill;
        case "pi:PiCirclesThreePlusFill":
            return PiCirclesThreePlusFill;
        case "pi:PiCircuitryFill":
            return PiCircuitryFill;
        case "pi:PiCityFill":
            return PiCityFill;
        case "pi:PiClipboardFill":
            return PiClipboardFill;
        case "pi:PiClipboardTextFill":
            return PiClipboardTextFill;
        case "pi:PiClockAfternoonFill":
            return PiClockAfternoonFill;
        case "pi:PiClockClockwiseFill":
            return PiClockClockwiseFill;
        case "pi:PiClockCountdownFill":
            return PiClockCountdownFill;
        case "pi:PiClockCounterClockwiseFill":
            return PiClockCounterClockwiseFill;
        case "pi:PiClockFill":
            return PiClockFill;
        case "pi:PiClockUserFill":
            return PiClockUserFill;
        case "pi:PiClosedCaptioningFill":
            return PiClosedCaptioningFill;
        case "pi:PiCloudArrowDownFill":
            return PiCloudArrowDownFill;
        case "pi:PiCloudArrowUpFill":
            return PiCloudArrowUpFill;
        case "pi:PiCloudCheckFill":
            return PiCloudCheckFill;
        case "pi:PiCloudFill":
            return PiCloudFill;
        case "pi:PiCloudFogFill":
            return PiCloudFogFill;
        case "pi:PiCloudLightningFill":
            return PiCloudLightningFill;
        case "pi:PiCloudMoonFill":
            return PiCloudMoonFill;
        case "pi:PiCloudRainFill":
            return PiCloudRainFill;
        case "pi:PiCloudSlashFill":
            return PiCloudSlashFill;
        case "pi:PiCloudSnowFill":
            return PiCloudSnowFill;
        case "pi:PiCloudSunFill":
            return PiCloudSunFill;
        case "pi:PiCloudWarningFill":
            return PiCloudWarningFill;
        case "pi:PiCloudXFill":
            return PiCloudXFill;
        case "pi:PiCloverFill":
            return PiCloverFill;
        case "pi:PiClubFill":
            return PiClubFill;
        case "pi:PiCoatHangerFill":
            return PiCoatHangerFill;
        case "pi:PiCodaLogoFill":
            return PiCodaLogoFill;
        case "pi:PiCodeBlockFill":
            return PiCodeBlockFill;
        case "pi:PiCodeFill":
            return PiCodeFill;
        case "pi:PiCodeSimpleFill":
            return PiCodeSimpleFill;
        case "pi:PiCodepenLogoFill":
            return PiCodepenLogoFill;
        case "pi:PiCodesandboxLogoFill":
            return PiCodesandboxLogoFill;
        case "pi:PiCoffeeBeanFill":
            return PiCoffeeBeanFill;
        case "pi:PiCoffeeFill":
            return PiCoffeeFill;
        case "pi:PiCoinFill":
            return PiCoinFill;
        case "pi:PiCoinVerticalFill":
            return PiCoinVerticalFill;
        case "pi:PiCoinsFill":
            return PiCoinsFill;
        case "pi:PiColumnsFill":
            return PiColumnsFill;
        case "pi:PiColumnsPlusLeftFill":
            return PiColumnsPlusLeftFill;
        case "pi:PiColumnsPlusRightFill":
            return PiColumnsPlusRightFill;
        case "pi:PiCommandFill":
            return PiCommandFill;
        case "pi:PiCompassFill":
            return PiCompassFill;
        case "pi:PiCompassRoseFill":
            return PiCompassRoseFill;
        case "pi:PiCompassToolFill":
            return PiCompassToolFill;
        case "pi:PiComputerTowerFill":
            return PiComputerTowerFill;
        case "pi:PiConfettiFill":
            return PiConfettiFill;
        case "pi:PiContactlessPaymentFill":
            return PiContactlessPaymentFill;
        case "pi:PiControlFill":
            return PiControlFill;
        case "pi:PiCookieFill":
            return PiCookieFill;
        case "pi:PiCookingPotFill":
            return PiCookingPotFill;
        case "pi:PiCopyFill":
            return PiCopyFill;
        case "pi:PiCopySimpleFill":
            return PiCopySimpleFill;
        case "pi:PiCopyleftFill":
            return PiCopyleftFill;
        case "pi:PiCopyrightFill":
            return PiCopyrightFill;
        case "pi:PiCornersInFill":
            return PiCornersInFill;
        case "pi:PiCornersOutFill":
            return PiCornersOutFill;
        case "pi:PiCouchFill":
            return PiCouchFill;
        case "pi:PiCourtBasketballFill":
            return PiCourtBasketballFill;
        case "pi:PiCowFill":
            return PiCowFill;
        case "pi:PiCowboyHatFill":
            return PiCowboyHatFill;
        case "pi:PiCpuFill":
            return PiCpuFill;
        case "pi:PiCraneFill":
            return PiCraneFill;
        case "pi:PiCraneTowerFill":
            return PiCraneTowerFill;
        case "pi:PiCreditCardFill":
            return PiCreditCardFill;
        case "pi:PiCricketFill":
            return PiCricketFill;
        case "pi:PiCropFill":
            return PiCropFill;
        case "pi:PiCrossFill":
            return PiCrossFill;
        case "pi:PiCrosshairFill":
            return PiCrosshairFill;
        case "pi:PiCrosshairSimpleFill":
            return PiCrosshairSimpleFill;
        case "pi:PiCrownCrossFill":
            return PiCrownCrossFill;
        case "pi:PiCrownFill":
            return PiCrownFill;
        case "pi:PiCrownSimpleFill":
            return PiCrownSimpleFill;
        case "pi:PiCubeFill":
            return PiCubeFill;
        case "pi:PiCubeFocusFill":
            return PiCubeFocusFill;
        case "pi:PiCubeTransparentFill":
            return PiCubeTransparentFill;
        case "pi:PiCurrencyBtcFill":
            return PiCurrencyBtcFill;
        case "pi:PiCurrencyCircleDollarFill":
            return PiCurrencyCircleDollarFill;
        case "pi:PiCurrencyCnyFill":
            return PiCurrencyCnyFill;
        case "pi:PiCurrencyDollarFill":
            return PiCurrencyDollarFill;
        case "pi:PiCurrencyDollarSimpleFill":
            return PiCurrencyDollarSimpleFill;
        case "pi:PiCurrencyEthFill":
            return PiCurrencyEthFill;
        case "pi:PiCurrencyEurFill":
            return PiCurrencyEurFill;
        case "pi:PiCurrencyGbpFill":
            return PiCurrencyGbpFill;
        case "pi:PiCurrencyInrFill":
            return PiCurrencyInrFill;
        case "pi:PiCurrencyJpyFill":
            return PiCurrencyJpyFill;
        case "pi:PiCurrencyKrwFill":
            return PiCurrencyKrwFill;
        case "pi:PiCurrencyKztFill":
            return PiCurrencyKztFill;
        case "pi:PiCurrencyNgnFill":
            return PiCurrencyNgnFill;
        case "pi:PiCurrencyRubFill":
            return PiCurrencyRubFill;
        case "pi:PiCursorClickFill":
            return PiCursorClickFill;
        case "pi:PiCursorFill":
            return PiCursorFill;
        case "pi:PiCursorTextFill":
            return PiCursorTextFill;
        case "pi:PiCylinderFill":
            return PiCylinderFill;
        case "pi:PiDatabaseFill":
            return PiDatabaseFill;
        case "pi:PiDeskFill":
            return PiDeskFill;
        case "pi:PiDesktopFill":
            return PiDesktopFill;
        case "pi:PiDesktopTowerFill":
            return PiDesktopTowerFill;
        case "pi:PiDetectiveFill":
            return PiDetectiveFill;
        case "pi:PiDevToLogoFill":
            return PiDevToLogoFill;
        case "pi:PiDeviceMobileCameraFill":
            return PiDeviceMobileCameraFill;
        case "pi:PiDeviceMobileFill":
            return PiDeviceMobileFill;
        case "pi:PiDeviceMobileSlashFill":
            return PiDeviceMobileSlashFill;
        case "pi:PiDeviceMobileSpeakerFill":
            return PiDeviceMobileSpeakerFill;
        case "pi:PiDeviceRotateFill":
            return PiDeviceRotateFill;
        case "pi:PiDeviceTabletCameraFill":
            return PiDeviceTabletCameraFill;
        case "pi:PiDeviceTabletFill":
            return PiDeviceTabletFill;
        case "pi:PiDeviceTabletSpeakerFill":
            return PiDeviceTabletSpeakerFill;
        case "pi:PiDevicesFill":
            return PiDevicesFill;
        case "pi:PiDiamondFill":
            return PiDiamondFill;
        case "pi:PiDiamondsFourFill":
            return PiDiamondsFourFill;
        case "pi:PiDiceFiveFill":
            return PiDiceFiveFill;
        case "pi:PiDiceFourFill":
            return PiDiceFourFill;
        case "pi:PiDiceOneFill":
            return PiDiceOneFill;
        case "pi:PiDiceSixFill":
            return PiDiceSixFill;
        case "pi:PiDiceThreeFill":
            return PiDiceThreeFill;
        case "pi:PiDiceTwoFill":
            return PiDiceTwoFill;
        case "pi:PiDiscFill":
            return PiDiscFill;
        case "pi:PiDiscoBallFill":
            return PiDiscoBallFill;
        case "pi:PiDiscordLogoFill":
            return PiDiscordLogoFill;
        case "pi:PiDivideFill":
            return PiDivideFill;
        case "pi:PiDnaFill":
            return PiDnaFill;
        case "pi:PiDogFill":
            return PiDogFill;
        case "pi:PiDoorFill":
            return PiDoorFill;
        case "pi:PiDoorOpenFill":
            return PiDoorOpenFill;
        case "pi:PiDotFill":
            return PiDotFill;
        case "pi:PiDotOutlineFill":
            return PiDotOutlineFill;
        case "pi:PiDotsNineFill":
            return PiDotsNineFill;
        case "pi:PiDotsSixFill":
            return PiDotsSixFill;
        case "pi:PiDotsSixVerticalFill":
            return PiDotsSixVerticalFill;
        case "pi:PiDotsThreeCircleFill":
            return PiDotsThreeCircleFill;
        case "pi:PiDotsThreeCircleVerticalFill":
            return PiDotsThreeCircleVerticalFill;
        case "pi:PiDotsThreeFill":
            return PiDotsThreeFill;
        case "pi:PiDotsThreeOutlineFill":
            return PiDotsThreeOutlineFill;
        case "pi:PiDotsThreeOutlineVerticalFill":
            return PiDotsThreeOutlineVerticalFill;
        case "pi:PiDotsThreeVerticalFill":
            return PiDotsThreeVerticalFill;
        case "pi:PiDownloadFill":
            return PiDownloadFill;
        case "pi:PiDownloadSimpleFill":
            return PiDownloadSimpleFill;
        case "pi:PiDressFill":
            return PiDressFill;
        case "pi:PiDresserFill":
            return PiDresserFill;
        case "pi:PiDribbbleLogoFill":
            return PiDribbbleLogoFill;
        case "pi:PiDroneFill":
            return PiDroneFill;
        case "pi:PiDropFill":
            return PiDropFill;
        case "pi:PiDropHalfBottomFill":
            return PiDropHalfBottomFill;
        case "pi:PiDropHalfFill":
            return PiDropHalfFill;
        case "pi:PiDropSimpleFill":
            return PiDropSimpleFill;
        case "pi:PiDropSlashFill":
            return PiDropSlashFill;
        case "pi:PiDropboxLogoFill":
            return PiDropboxLogoFill;
        case "pi:PiEarFill":
            return PiEarFill;
        case "pi:PiEarSlashFill":
            return PiEarSlashFill;
        case "pi:PiEggCrackFill":
            return PiEggCrackFill;
        case "pi:PiEggFill":
            return PiEggFill;
        case "pi:PiEjectFill":
            return PiEjectFill;
        case "pi:PiEjectSimpleFill":
            return PiEjectSimpleFill;
        case "pi:PiElevatorFill":
            return PiElevatorFill;
        case "pi:PiEmptyFill":
            return PiEmptyFill;
        case "pi:PiEngineFill":
            return PiEngineFill;
        case "pi:PiEnvelopeFill":
            return PiEnvelopeFill;
        case "pi:PiEnvelopeOpenFill":
            return PiEnvelopeOpenFill;
        case "pi:PiEnvelopeSimpleFill":
            return PiEnvelopeSimpleFill;
        case "pi:PiEnvelopeSimpleOpenFill":
            return PiEnvelopeSimpleOpenFill;
        case "pi:PiEqualizerFill":
            return PiEqualizerFill;
        case "pi:PiEqualsFill":
            return PiEqualsFill;
        case "pi:PiEraserFill":
            return PiEraserFill;
        case "pi:PiEscalatorDownFill":
            return PiEscalatorDownFill;
        case "pi:PiEscalatorUpFill":
            return PiEscalatorUpFill;
        case "pi:PiExamFill":
            return PiExamFill;
        case "pi:PiExclamationMarkFill":
            return PiExclamationMarkFill;
        case "pi:PiExcludeFill":
            return PiExcludeFill;
        case "pi:PiExcludeSquareFill":
            return PiExcludeSquareFill;
        case "pi:PiExportFill":
            return PiExportFill;
        case "pi:PiEyeClosedFill":
            return PiEyeClosedFill;
        case "pi:PiEyeFill":
            return PiEyeFill;
        case "pi:PiEyeSlashFill":
            return PiEyeSlashFill;
        case "pi:PiEyedropperFill":
            return PiEyedropperFill;
        case "pi:PiEyedropperSampleFill":
            return PiEyedropperSampleFill;
        case "pi:PiEyeglassesFill":
            return PiEyeglassesFill;
        case "pi:PiEyesFill":
            return PiEyesFill;
        case "pi:PiFaceMaskFill":
            return PiFaceMaskFill;
        case "pi:PiFacebookLogoFill":
            return PiFacebookLogoFill;
        case "pi:PiFactoryFill":
            return PiFactoryFill;
        case "pi:PiFadersFill":
            return PiFadersFill;
        case "pi:PiFadersHorizontalFill":
            return PiFadersHorizontalFill;
        case "pi:PiFalloutShelterFill":
            return PiFalloutShelterFill;
        case "pi:PiFanFill":
            return PiFanFill;
        case "pi:PiFarmFill":
            return PiFarmFill;
        case "pi:PiFastForwardCircleFill":
            return PiFastForwardCircleFill;
        case "pi:PiFastForwardFill":
            return PiFastForwardFill;
        case "pi:PiFeatherFill":
            return PiFeatherFill;
        case "pi:PiFediverseLogoFill":
            return PiFediverseLogoFill;
        case "pi:PiFigmaLogoFill":
            return PiFigmaLogoFill;
        case "pi:PiFileArchiveFill":
            return PiFileArchiveFill;
        case "pi:PiFileArrowDownFill":
            return PiFileArrowDownFill;
        case "pi:PiFileArrowUpFill":
            return PiFileArrowUpFill;
        case "pi:PiFileAudioFill":
            return PiFileAudioFill;
        case "pi:PiFileCFill":
            return PiFileCFill;
        case "pi:PiFileCSharpFill":
            return PiFileCSharpFill;
        case "pi:PiFileCloudFill":
            return PiFileCloudFill;
        case "pi:PiFileCodeFill":
            return PiFileCodeFill;
        case "pi:PiFileCppFill":
            return PiFileCppFill;
        case "pi:PiFileCssFill":
            return PiFileCssFill;
        case "pi:PiFileCsvFill":
            return PiFileCsvFill;
        case "pi:PiFileDashedFill":
            return PiFileDashedFill;
        case "pi:PiFileDocFill":
            return PiFileDocFill;
        case "pi:PiFileFill":
            return PiFileFill;
        case "pi:PiFileHtmlFill":
            return PiFileHtmlFill;
        case "pi:PiFileImageFill":
            return PiFileImageFill;
        case "pi:PiFileIniFill":
            return PiFileIniFill;
        case "pi:PiFileJpgFill":
            return PiFileJpgFill;
        case "pi:PiFileJsFill":
            return PiFileJsFill;
        case "pi:PiFileJsxFill":
            return PiFileJsxFill;
        case "pi:PiFileLockFill":
            return PiFileLockFill;
        case "pi:PiFileMagnifyingGlassFill":
            return PiFileMagnifyingGlassFill;
        case "pi:PiFileMdFill":
            return PiFileMdFill;
        case "pi:PiFileMinusFill":
            return PiFileMinusFill;
        case "pi:PiFilePdfFill":
            return PiFilePdfFill;
        case "pi:PiFilePlusFill":
            return PiFilePlusFill;
        case "pi:PiFilePngFill":
            return PiFilePngFill;
        case "pi:PiFilePptFill":
            return PiFilePptFill;
        case "pi:PiFilePyFill":
            return PiFilePyFill;
        case "pi:PiFileRsFill":
            return PiFileRsFill;
        case "pi:PiFileSqlFill":
            return PiFileSqlFill;
        case "pi:PiFileSvgFill":
            return PiFileSvgFill;
        case "pi:PiFileTextFill":
            return PiFileTextFill;
        case "pi:PiFileTsFill":
            return PiFileTsFill;
        case "pi:PiFileTsxFill":
            return PiFileTsxFill;
        case "pi:PiFileTxtFill":
            return PiFileTxtFill;
        case "pi:PiFileVideoFill":
            return PiFileVideoFill;
        case "pi:PiFileVueFill":
            return PiFileVueFill;
        case "pi:PiFileXFill":
            return PiFileXFill;
        case "pi:PiFileXlsFill":
            return PiFileXlsFill;
        case "pi:PiFileZipFill":
            return PiFileZipFill;
        case "pi:PiFilesFill":
            return PiFilesFill;
        case "pi:PiFilmReelFill":
            return PiFilmReelFill;
        case "pi:PiFilmScriptFill":
            return PiFilmScriptFill;
        case "pi:PiFilmSlateFill":
            return PiFilmSlateFill;
        case "pi:PiFilmStripFill":
            return PiFilmStripFill;
        case "pi:PiFingerprintFill":
            return PiFingerprintFill;
        case "pi:PiFingerprintSimpleFill":
            return PiFingerprintSimpleFill;
        case "pi:PiFinnTheHumanFill":
            return PiFinnTheHumanFill;
        case "pi:PiFireExtinguisherFill":
            return PiFireExtinguisherFill;
        case "pi:PiFireFill":
            return PiFireFill;
        case "pi:PiFireSimpleFill":
            return PiFireSimpleFill;
        case "pi:PiFireTruckFill":
            return PiFireTruckFill;
        case "pi:PiFirstAidFill":
            return PiFirstAidFill;
        case "pi:PiFirstAidKitFill":
            return PiFirstAidKitFill;
        case "pi:PiFishFill":
            return PiFishFill;
        case "pi:PiFishSimpleFill":
            return PiFishSimpleFill;
        case "pi:PiFlagBannerFill":
            return PiFlagBannerFill;
        case "pi:PiFlagBannerFoldFill":
            return PiFlagBannerFoldFill;
        case "pi:PiFlagCheckeredFill":
            return PiFlagCheckeredFill;
        case "pi:PiFlagFill":
            return PiFlagFill;
        case "pi:PiFlagPennantFill":
            return PiFlagPennantFill;
        case "pi:PiFlameFill":
            return PiFlameFill;
        case "pi:PiFlashlightFill":
            return PiFlashlightFill;
        case "pi:PiFlaskFill":
            return PiFlaskFill;
        case "pi:PiFlipHorizontalFill":
            return PiFlipHorizontalFill;
        case "pi:PiFlipVerticalFill":
            return PiFlipVerticalFill;
        case "pi:PiFloppyDiskBackFill":
            return PiFloppyDiskBackFill;
        case "pi:PiFloppyDiskFill":
            return PiFloppyDiskFill;
        case "pi:PiFlowArrowFill":
            return PiFlowArrowFill;
        case "pi:PiFlowerFill":
            return PiFlowerFill;
        case "pi:PiFlowerLotusFill":
            return PiFlowerLotusFill;
        case "pi:PiFlowerTulipFill":
            return PiFlowerTulipFill;
        case "pi:PiFlyingSaucerFill":
            return PiFlyingSaucerFill;
        case "pi:PiFolderDashedFill":
            return PiFolderDashedFill;
        case "pi:PiFolderFill":
            return PiFolderFill;
        case "pi:PiFolderLockFill":
            return PiFolderLockFill;
        case "pi:PiFolderMinusFill":
            return PiFolderMinusFill;
        case "pi:PiFolderOpenFill":
            return PiFolderOpenFill;
        case "pi:PiFolderPlusFill":
            return PiFolderPlusFill;
        case "pi:PiFolderSimpleDashedFill":
            return PiFolderSimpleDashedFill;
        case "pi:PiFolderSimpleFill":
            return PiFolderSimpleFill;
        case "pi:PiFolderSimpleLockFill":
            return PiFolderSimpleLockFill;
        case "pi:PiFolderSimpleMinusFill":
            return PiFolderSimpleMinusFill;
        case "pi:PiFolderSimplePlusFill":
            return PiFolderSimplePlusFill;
        case "pi:PiFolderSimpleStarFill":
            return PiFolderSimpleStarFill;
        case "pi:PiFolderSimpleUserFill":
            return PiFolderSimpleUserFill;
        case "pi:PiFolderStarFill":
            return PiFolderStarFill;
        case "pi:PiFolderUserFill":
            return PiFolderUserFill;
        case "pi:PiFoldersFill":
            return PiFoldersFill;
        case "pi:PiFootballFill":
            return PiFootballFill;
        case "pi:PiFootballHelmetFill":
            return PiFootballHelmetFill;
        case "pi:PiFootprintsFill":
            return PiFootprintsFill;
        case "pi:PiForkKnifeFill":
            return PiForkKnifeFill;
        case "pi:PiFourKFill":
            return PiFourKFill;
        case "pi:PiFrameCornersFill":
            return PiFrameCornersFill;
        case "pi:PiFramerLogoFill":
            return PiFramerLogoFill;
        case "pi:PiFunctionFill":
            return PiFunctionFill;
        case "pi:PiFunnelFill":
            return PiFunnelFill;
        case "pi:PiFunnelSimpleFill":
            return PiFunnelSimpleFill;
        case "pi:PiFunnelSimpleXFill":
            return PiFunnelSimpleXFill;
        case "pi:PiFunnelXFill":
            return PiFunnelXFill;
        case "pi:PiGameControllerFill":
            return PiGameControllerFill;
        case "pi:PiGarageFill":
            return PiGarageFill;
        case "pi:PiGasCanFill":
            return PiGasCanFill;
        case "pi:PiGasPumpFill":
            return PiGasPumpFill;
        case "pi:PiGaugeFill":
            return PiGaugeFill;
        case "pi:PiGavelFill":
            return PiGavelFill;
        case "pi:PiGearFill":
            return PiGearFill;
        case "pi:PiGearFineFill":
            return PiGearFineFill;
        case "pi:PiGearSixFill":
            return PiGearSixFill;
        case "pi:PiGenderFemaleFill":
            return PiGenderFemaleFill;
        case "pi:PiGenderIntersexFill":
            return PiGenderIntersexFill;
        case "pi:PiGenderMaleFill":
            return PiGenderMaleFill;
        case "pi:PiGenderNeuterFill":
            return PiGenderNeuterFill;
        case "pi:PiGenderNonbinaryFill":
            return PiGenderNonbinaryFill;
        case "pi:PiGenderTransgenderFill":
            return PiGenderTransgenderFill;
        case "pi:PiGhostFill":
            return PiGhostFill;
        case "pi:PiGifFill":
            return PiGifFill;
        case "pi:PiGiftFill":
            return PiGiftFill;
        case "pi:PiGitBranchFill":
            return PiGitBranchFill;
        case "pi:PiGitCommitFill":
            return PiGitCommitFill;
        case "pi:PiGitDiffFill":
            return PiGitDiffFill;
        case "pi:PiGitForkFill":
            return PiGitForkFill;
        case "pi:PiGitMergeFill":
            return PiGitMergeFill;
        case "pi:PiGitPullRequestFill":
            return PiGitPullRequestFill;
        case "pi:PiGithubLogoFill":
            return PiGithubLogoFill;
        case "pi:PiGitlabLogoFill":
            return PiGitlabLogoFill;
        case "pi:PiGitlabLogoSimpleFill":
            return PiGitlabLogoSimpleFill;
        case "pi:PiGlobeFill":
            return PiGlobeFill;
        case "pi:PiGlobeHemisphereEastFill":
            return PiGlobeHemisphereEastFill;
        case "pi:PiGlobeHemisphereWestFill":
            return PiGlobeHemisphereWestFill;
        case "pi:PiGlobeSimpleFill":
            return PiGlobeSimpleFill;
        case "pi:PiGlobeSimpleXFill":
            return PiGlobeSimpleXFill;
        case "pi:PiGlobeStandFill":
            return PiGlobeStandFill;
        case "pi:PiGlobeXFill":
            return PiGlobeXFill;
        case "pi:PiGogglesFill":
            return PiGogglesFill;
        case "pi:PiGolfFill":
            return PiGolfFill;
        case "pi:PiGoodreadsLogoFill":
            return PiGoodreadsLogoFill;
        case "pi:PiGoogleCardboardLogoFill":
            return PiGoogleCardboardLogoFill;
        case "pi:PiGoogleChromeLogoFill":
            return PiGoogleChromeLogoFill;
        case "pi:PiGoogleDriveLogoFill":
            return PiGoogleDriveLogoFill;
        case "pi:PiGoogleLogoFill":
            return PiGoogleLogoFill;
        case "pi:PiGooglePhotosLogoFill":
            return PiGooglePhotosLogoFill;
        case "pi:PiGooglePlayLogoFill":
            return PiGooglePlayLogoFill;
        case "pi:PiGooglePodcastsLogoFill":
            return PiGooglePodcastsLogoFill;
        case "pi:PiGpsFill":
            return PiGpsFill;
        case "pi:PiGpsFixFill":
            return PiGpsFixFill;
        case "pi:PiGpsSlashFill":
            return PiGpsSlashFill;
        case "pi:PiGradientFill":
            return PiGradientFill;
        case "pi:PiGraduationCapFill":
            return PiGraduationCapFill;
        case "pi:PiGrainsFill":
            return PiGrainsFill;
        case "pi:PiGrainsSlashFill":
            return PiGrainsSlashFill;
        case "pi:PiGraphFill":
            return PiGraphFill;
        case "pi:PiGraphicsCardFill":
            return PiGraphicsCardFill;
        case "pi:PiGreaterThanFill":
            return PiGreaterThanFill;
        case "pi:PiGreaterThanOrEqualFill":
            return PiGreaterThanOrEqualFill;
        case "pi:PiGridFourFill":
            return PiGridFourFill;
        case "pi:PiGridNineFill":
            return PiGridNineFill;
        case "pi:PiGuitarFill":
            return PiGuitarFill;
        case "pi:PiHairDryerFill":
            return PiHairDryerFill;
        case "pi:PiHamburgerFill":
            return PiHamburgerFill;
        case "pi:PiHammerFill":
            return PiHammerFill;
        case "pi:PiHandArrowDownFill":
            return PiHandArrowDownFill;
        case "pi:PiHandArrowUpFill":
            return PiHandArrowUpFill;
        case "pi:PiHandCoinsFill":
            return PiHandCoinsFill;
        case "pi:PiHandDepositFill":
            return PiHandDepositFill;
        case "pi:PiHandEyeFill":
            return PiHandEyeFill;
        case "pi:PiHandFill":
            return PiHandFill;
        case "pi:PiHandFistFill":
            return PiHandFistFill;
        case "pi:PiHandGrabbingFill":
            return PiHandGrabbingFill;
        case "pi:PiHandHeartFill":
            return PiHandHeartFill;
        case "pi:PiHandPalmFill":
            return PiHandPalmFill;
        case "pi:PiHandPeaceFill":
            return PiHandPeaceFill;
        case "pi:PiHandPointingFill":
            return PiHandPointingFill;
        case "pi:PiHandSoapFill":
            return PiHandSoapFill;
        case "pi:PiHandSwipeLeftFill":
            return PiHandSwipeLeftFill;
        case "pi:PiHandSwipeRightFill":
            return PiHandSwipeRightFill;
        case "pi:PiHandTapFill":
            return PiHandTapFill;
        case "pi:PiHandWavingFill":
            return PiHandWavingFill;
        case "pi:PiHandWithdrawFill":
            return PiHandWithdrawFill;
        case "pi:PiHandbagFill":
            return PiHandbagFill;
        case "pi:PiHandbagSimpleFill":
            return PiHandbagSimpleFill;
        case "pi:PiHandsClappingFill":
            return PiHandsClappingFill;
        case "pi:PiHandsPrayingFill":
            return PiHandsPrayingFill;
        case "pi:PiHandshakeFill":
            return PiHandshakeFill;
        case "pi:PiHardDriveFill":
            return PiHardDriveFill;
        case "pi:PiHardDrivesFill":
            return PiHardDrivesFill;
        case "pi:PiHardHatFill":
            return PiHardHatFill;
        case "pi:PiHashFill":
            return PiHashFill;
        case "pi:PiHashStraightFill":
            return PiHashStraightFill;
        case "pi:PiHeadCircuitFill":
            return PiHeadCircuitFill;
        case "pi:PiHeadlightsFill":
            return PiHeadlightsFill;
        case "pi:PiHeadphonesFill":
            return PiHeadphonesFill;
        case "pi:PiHeadsetFill":
            return PiHeadsetFill;
        case "pi:PiHeartBreakFill":
            return PiHeartBreakFill;
        case "pi:PiHeartFill":
            return PiHeartFill;
        case "pi:PiHeartHalfFill":
            return PiHeartHalfFill;
        case "pi:PiHeartStraightBreakFill":
            return PiHeartStraightBreakFill;
        case "pi:PiHeartStraightFill":
            return PiHeartStraightFill;
        case "pi:PiHeartbeatFill":
            return PiHeartbeatFill;
        case "pi:PiHexagonFill":
            return PiHexagonFill;
        case "pi:PiHighDefinitionFill":
            return PiHighDefinitionFill;
        case "pi:PiHighHeelFill":
            return PiHighHeelFill;
        case "pi:PiHighlighterCircleFill":
            return PiHighlighterCircleFill;
        case "pi:PiHighlighterFill":
            return PiHighlighterFill;
        case "pi:PiHockeyFill":
            return PiHockeyFill;
        case "pi:PiHoodieFill":
            return PiHoodieFill;
        case "pi:PiHorseFill":
            return PiHorseFill;
        case "pi:PiHospitalFill":
            return PiHospitalFill;
        case "pi:PiHourglassFill":
            return PiHourglassFill;
        case "pi:PiHourglassHighFill":
            return PiHourglassHighFill;
        case "pi:PiHourglassLowFill":
            return PiHourglassLowFill;
        case "pi:PiHourglassMediumFill":
            return PiHourglassMediumFill;
        case "pi:PiHourglassSimpleFill":
            return PiHourglassSimpleFill;
        case "pi:PiHourglassSimpleHighFill":
            return PiHourglassSimpleHighFill;
        case "pi:PiHourglassSimpleLowFill":
            return PiHourglassSimpleLowFill;
        case "pi:PiHourglassSimpleMediumFill":
            return PiHourglassSimpleMediumFill;
        case "pi:PiHouseFill":
            return PiHouseFill;
        case "pi:PiHouseLineFill":
            return PiHouseLineFill;
        case "pi:PiHouseSimpleFill":
            return PiHouseSimpleFill;
        case "pi:PiHurricaneFill":
            return PiHurricaneFill;
        case "pi:PiIceCreamFill":
            return PiIceCreamFill;
        case "pi:PiIdentificationBadgeFill":
            return PiIdentificationBadgeFill;
        case "pi:PiIdentificationCardFill":
            return PiIdentificationCardFill;
        case "pi:PiImageBrokenFill":
            return PiImageBrokenFill;
        case "pi:PiImageFill":
            return PiImageFill;
        case "pi:PiImageSquareFill":
            return PiImageSquareFill;
        case "pi:PiImagesFill":
            return PiImagesFill;
        case "pi:PiImagesSquareFill":
            return PiImagesSquareFill;
        case "pi:PiInfinityFill":
            return PiInfinityFill;
        case "pi:PiInfoFill":
            return PiInfoFill;
        case "pi:PiInstagramLogoFill":
            return PiInstagramLogoFill;
        case "pi:PiIntersectFill":
            return PiIntersectFill;
        case "pi:PiIntersectSquareFill":
            return PiIntersectSquareFill;
        case "pi:PiIntersectThreeFill":
            return PiIntersectThreeFill;
        case "pi:PiIntersectionFill":
            return PiIntersectionFill;
        case "pi:PiInvoiceFill":
            return PiInvoiceFill;
        case "pi:PiIslandFill":
            return PiIslandFill;
        case "pi:PiJarFill":
            return PiJarFill;
        case "pi:PiJarLabelFill":
            return PiJarLabelFill;
        case "pi:PiJeepFill":
            return PiJeepFill;
        case "pi:PiJoystickFill":
            return PiJoystickFill;
        case "pi:PiKanbanFill":
            return PiKanbanFill;
        case "pi:PiKeyFill":
            return PiKeyFill;
        case "pi:PiKeyReturnFill":
            return PiKeyReturnFill;
        case "pi:PiKeyboardFill":
            return PiKeyboardFill;
        case "pi:PiKeyholeFill":
            return PiKeyholeFill;
        case "pi:PiKnifeFill":
            return PiKnifeFill;
        case "pi:PiLadderFill":
            return PiLadderFill;
        case "pi:PiLadderSimpleFill":
            return PiLadderSimpleFill;
        case "pi:PiLampFill":
            return PiLampFill;
        case "pi:PiLampPendantFill":
            return PiLampPendantFill;
        case "pi:PiLaptopFill":
            return PiLaptopFill;
        case "pi:PiLassoFill":
            return PiLassoFill;
        case "pi:PiLastfmLogoFill":
            return PiLastfmLogoFill;
        case "pi:PiLayoutFill":
            return PiLayoutFill;
        case "pi:PiLeafFill":
            return PiLeafFill;
        case "pi:PiLecternFill":
            return PiLecternFill;
        case "pi:PiLegoFill":
            return PiLegoFill;
        case "pi:PiLegoSmileyFill":
            return PiLegoSmileyFill;
        case "pi:PiLessThanFill":
            return PiLessThanFill;
        case "pi:PiLessThanOrEqualFill":
            return PiLessThanOrEqualFill;
        case "pi:PiLetterCircleHFill":
            return PiLetterCircleHFill;
        case "pi:PiLetterCirclePFill":
            return PiLetterCirclePFill;
        case "pi:PiLetterCircleVFill":
            return PiLetterCircleVFill;
        case "pi:PiLifebuoyFill":
            return PiLifebuoyFill;
        case "pi:PiLightbulbFilamentFill":
            return PiLightbulbFilamentFill;
        case "pi:PiLightbulbFill":
            return PiLightbulbFill;
        case "pi:PiLighthouseFill":
            return PiLighthouseFill;
        case "pi:PiLightningAFill":
            return PiLightningAFill;
        case "pi:PiLightningFill":
            return PiLightningFill;
        case "pi:PiLightningSlashFill":
            return PiLightningSlashFill;
        case "pi:PiLineSegmentFill":
            return PiLineSegmentFill;
        case "pi:PiLineSegmentsFill":
            return PiLineSegmentsFill;
        case "pi:PiLineVerticalFill":
            return PiLineVerticalFill;
        case "pi:PiLinkBreakFill":
            return PiLinkBreakFill;
        case "pi:PiLinkFill":
            return PiLinkFill;
        case "pi:PiLinkSimpleBreakFill":
            return PiLinkSimpleBreakFill;
        case "pi:PiLinkSimpleFill":
            return PiLinkSimpleFill;
        case "pi:PiLinkSimpleHorizontalBreakFill":
            return PiLinkSimpleHorizontalBreakFill;
        case "pi:PiLinkSimpleHorizontalFill":
            return PiLinkSimpleHorizontalFill;
        case "pi:PiLinkedinLogoFill":
            return PiLinkedinLogoFill;
        case "pi:PiLinktreeLogoFill":
            return PiLinktreeLogoFill;
        case "pi:PiLinuxLogoFill":
            return PiLinuxLogoFill;
        case "pi:PiListBulletsFill":
            return PiListBulletsFill;
        case "pi:PiListChecksFill":
            return PiListChecksFill;
        case "pi:PiListDashesFill":
            return PiListDashesFill;
        case "pi:PiListFill":
            return PiListFill;
        case "pi:PiListHeartFill":
            return PiListHeartFill;
        case "pi:PiListMagnifyingGlassFill":
            return PiListMagnifyingGlassFill;
        case "pi:PiListNumbersFill":
            return PiListNumbersFill;
        case "pi:PiListPlusFill":
            return PiListPlusFill;
        case "pi:PiListStarFill":
            return PiListStarFill;
        case "pi:PiLockFill":
            return PiLockFill;
        case "pi:PiLockKeyFill":
            return PiLockKeyFill;
        case "pi:PiLockKeyOpenFill":
            return PiLockKeyOpenFill;
        case "pi:PiLockLaminatedFill":
            return PiLockLaminatedFill;
        case "pi:PiLockLaminatedOpenFill":
            return PiLockLaminatedOpenFill;
        case "pi:PiLockOpenFill":
            return PiLockOpenFill;
        case "pi:PiLockSimpleFill":
            return PiLockSimpleFill;
        case "pi:PiLockSimpleOpenFill":
            return PiLockSimpleOpenFill;
        case "pi:PiLockersFill":
            return PiLockersFill;
        case "pi:PiLogFill":
            return PiLogFill;
        case "pi:PiMagicWandFill":
            return PiMagicWandFill;
        case "pi:PiMagnetFill":
            return PiMagnetFill;
        case "pi:PiMagnetStraightFill":
            return PiMagnetStraightFill;
        case "pi:PiMagnifyingGlassFill":
            return PiMagnifyingGlassFill;
        case "pi:PiMagnifyingGlassMinusFill":
            return PiMagnifyingGlassMinusFill;
        case "pi:PiMagnifyingGlassPlusFill":
            return PiMagnifyingGlassPlusFill;
        case "pi:PiMailboxFill":
            return PiMailboxFill;
        case "pi:PiMapPinAreaFill":
            return PiMapPinAreaFill;
        case "pi:PiMapPinFill":
            return PiMapPinFill;
        case "pi:PiMapPinLineFill":
            return PiMapPinLineFill;
        case "pi:PiMapPinPlusFill":
            return PiMapPinPlusFill;
        case "pi:PiMapPinSimpleAreaFill":
            return PiMapPinSimpleAreaFill;
        case "pi:PiMapPinSimpleFill":
            return PiMapPinSimpleFill;
        case "pi:PiMapPinSimpleLineFill":
            return PiMapPinSimpleLineFill;
        case "pi:PiMapTrifoldFill":
            return PiMapTrifoldFill;
        case "pi:PiMarkdownLogoFill":
            return PiMarkdownLogoFill;
        case "pi:PiMarkerCircleFill":
            return PiMarkerCircleFill;
        case "pi:PiMartiniFill":
            return PiMartiniFill;
        case "pi:PiMaskHappyFill":
            return PiMaskHappyFill;
        case "pi:PiMaskSadFill":
            return PiMaskSadFill;
        case "pi:PiMastodonLogoFill":
            return PiMastodonLogoFill;
        case "pi:PiMathOperationsFill":
            return PiMathOperationsFill;
        case "pi:PiMatrixLogoFill":
            return PiMatrixLogoFill;
        case "pi:PiMedalFill":
            return PiMedalFill;
        case "pi:PiMedalMilitaryFill":
            return PiMedalMilitaryFill;
        case "pi:PiMediumLogoFill":
            return PiMediumLogoFill;
        case "pi:PiMegaphoneFill":
            return PiMegaphoneFill;
        case "pi:PiMegaphoneSimpleFill":
            return PiMegaphoneSimpleFill;
        case "pi:PiMemberOfFill":
            return PiMemberOfFill;
        case "pi:PiMemoryFill":
            return PiMemoryFill;
        case "pi:PiMessengerLogoFill":
            return PiMessengerLogoFill;
        case "pi:PiMetaLogoFill":
            return PiMetaLogoFill;
        case "pi:PiMeteorFill":
            return PiMeteorFill;
        case "pi:PiMetronomeFill":
            return PiMetronomeFill;
        case "pi:PiMicrophoneFill":
            return PiMicrophoneFill;
        case "pi:PiMicrophoneSlashFill":
            return PiMicrophoneSlashFill;
        case "pi:PiMicrophoneStageFill":
            return PiMicrophoneStageFill;
        case "pi:PiMicroscopeFill":
            return PiMicroscopeFill;
        case "pi:PiMicrosoftExcelLogoFill":
            return PiMicrosoftExcelLogoFill;
        case "pi:PiMicrosoftOutlookLogoFill":
            return PiMicrosoftOutlookLogoFill;
        case "pi:PiMicrosoftPowerpointLogoFill":
            return PiMicrosoftPowerpointLogoFill;
        case "pi:PiMicrosoftTeamsLogoFill":
            return PiMicrosoftTeamsLogoFill;
        case "pi:PiMicrosoftWordLogoFill":
            return PiMicrosoftWordLogoFill;
        case "pi:PiMinusCircleFill":
            return PiMinusCircleFill;
        case "pi:PiMinusFill":
            return PiMinusFill;
        case "pi:PiMinusSquareFill":
            return PiMinusSquareFill;
        case "pi:PiMoneyFill":
            return PiMoneyFill;
        case "pi:PiMoneyWavyFill":
            return PiMoneyWavyFill;
        case "pi:PiMonitorArrowUpFill":
            return PiMonitorArrowUpFill;
        case "pi:PiMonitorFill":
            return PiMonitorFill;
        case "pi:PiMonitorPlayFill":
            return PiMonitorPlayFill;
        case "pi:PiMoonFill":
            return PiMoonFill;
        case "pi:PiMoonStarsFill":
            return PiMoonStarsFill;
        case "pi:PiMopedFill":
            return PiMopedFill;
        case "pi:PiMopedFrontFill":
            return PiMopedFrontFill;
        case "pi:PiMosqueFill":
            return PiMosqueFill;
        case "pi:PiMotorcycleFill":
            return PiMotorcycleFill;
        case "pi:PiMountainsFill":
            return PiMountainsFill;
        case "pi:PiMouseFill":
            return PiMouseFill;
        case "pi:PiMouseLeftClickFill":
            return PiMouseLeftClickFill;
        case "pi:PiMouseMiddleClickFill":
            return PiMouseMiddleClickFill;
        case "pi:PiMouseRightClickFill":
            return PiMouseRightClickFill;
        case "pi:PiMouseScrollFill":
            return PiMouseScrollFill;
        case "pi:PiMouseSimpleFill":
            return PiMouseSimpleFill;
        case "pi:PiMusicNoteFill":
            return PiMusicNoteFill;
        case "pi:PiMusicNoteSimpleFill":
            return PiMusicNoteSimpleFill;
        case "pi:PiMusicNotesFill":
            return PiMusicNotesFill;
        case "pi:PiMusicNotesMinusFill":
            return PiMusicNotesMinusFill;
        case "pi:PiMusicNotesPlusFill":
            return PiMusicNotesPlusFill;
        case "pi:PiMusicNotesSimpleFill":
            return PiMusicNotesSimpleFill;
        case "pi:PiNavigationArrowFill":
            return PiNavigationArrowFill;
        case "pi:PiNeedleFill":
            return PiNeedleFill;
        case "pi:PiNetworkFill":
            return PiNetworkFill;
        case "pi:PiNetworkSlashFill":
            return PiNetworkSlashFill;
        case "pi:PiNetworkXFill":
            return PiNetworkXFill;
        case "pi:PiNewspaperClippingFill":
            return PiNewspaperClippingFill;
        case "pi:PiNewspaperFill":
            return PiNewspaperFill;
        case "pi:PiNotEqualsFill":
            return PiNotEqualsFill;
        case "pi:PiNotMemberOfFill":
            return PiNotMemberOfFill;
        case "pi:PiNotSubsetOfFill":
            return PiNotSubsetOfFill;
        case "pi:PiNotSupersetOfFill":
            return PiNotSupersetOfFill;
        case "pi:PiNotchesFill":
            return PiNotchesFill;
        case "pi:PiNoteBlankFill":
            return PiNoteBlankFill;
        case "pi:PiNoteFill":
            return PiNoteFill;
        case "pi:PiNotePencilFill":
            return PiNotePencilFill;
        case "pi:PiNotebookFill":
            return PiNotebookFill;
        case "pi:PiNotepadFill":
            return PiNotepadFill;
        case "pi:PiNotificationFill":
            return PiNotificationFill;
        case "pi:PiNotionLogoFill":
            return PiNotionLogoFill;
        case "pi:PiNuclearPlantFill":
            return PiNuclearPlantFill;
        case "pi:PiNumberCircleEightFill":
            return PiNumberCircleEightFill;
        case "pi:PiNumberCircleFiveFill":
            return PiNumberCircleFiveFill;
        case "pi:PiNumberCircleFourFill":
            return PiNumberCircleFourFill;
        case "pi:PiNumberCircleNineFill":
            return PiNumberCircleNineFill;
        case "pi:PiNumberCircleOneFill":
            return PiNumberCircleOneFill;
        case "pi:PiNumberCircleSevenFill":
            return PiNumberCircleSevenFill;
        case "pi:PiNumberCircleSixFill":
            return PiNumberCircleSixFill;
        case "pi:PiNumberCircleThreeFill":
            return PiNumberCircleThreeFill;
        case "pi:PiNumberCircleTwoFill":
            return PiNumberCircleTwoFill;
        case "pi:PiNumberCircleZeroFill":
            return PiNumberCircleZeroFill;
        case "pi:PiNumberEightFill":
            return PiNumberEightFill;
        case "pi:PiNumberFiveFill":
            return PiNumberFiveFill;
        case "pi:PiNumberFourFill":
            return PiNumberFourFill;
        case "pi:PiNumberNineFill":
            return PiNumberNineFill;
        case "pi:PiNumberOneFill":
            return PiNumberOneFill;
        case "pi:PiNumberSevenFill":
            return PiNumberSevenFill;
        case "pi:PiNumberSixFill":
            return PiNumberSixFill;
    }
}
