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
export function nameToReactIcon_pi_3(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, PiWebcamSlashDuotone, PiWebhooksLogoDuotone, PiWechatLogoDuotone, PiWhatsappLogoDuotone, PiWheelchairDuotone, PiWheelchairMotionDuotone, PiWifiHighDuotone, PiWifiLowDuotone, PiWifiMediumDuotone, PiWifiNoneDuotone, PiWifiSlashDuotone, PiWifiXDuotone, PiWindDuotone, PiWindmillDuotone, PiWindowsLogoDuotone, PiWineDuotone, PiWrenchDuotone, PiXCircleDuotone, PiXDuotone, PiXLogoDuotone, PiXSquareDuotone, PiYarnDuotone, PiYinYangDuotone, PiYoutubeLogoDuotone, PiAcornFill, PiAddressBookFill, PiAddressBookTabsFill, PiAirTrafficControlFill, PiAirplaneFill, PiAirplaneInFlightFill, PiAirplaneLandingFill, PiAirplaneTakeoffFill, PiAirplaneTaxiingFill, PiAirplaneTiltFill, PiAirplayFill, PiAlarmFill, PiAlienFill, PiAlignBottomFill, PiAlignBottomSimpleFill, PiAlignCenterHorizontalFill, PiAlignCenterHorizontalSimpleFill, PiAlignCenterVerticalFill, PiAlignCenterVerticalSimpleFill, PiAlignLeftFill, PiAlignLeftSimpleFill, PiAlignRightFill, PiAlignRightSimpleFill, PiAlignTopFill, PiAlignTopSimpleFill, PiAmazonLogoFill, PiAmbulanceFill, PiAnchorFill, PiAnchorSimpleFill, PiAndroidLogoFill, PiAngleFill, PiAngularLogoFill, PiApertureFill, PiAppStoreLogoFill, PiAppWindowFill, PiAppleLogoFill, PiApplePodcastsLogoFill, PiApproximateEqualsFill, PiArchiveFill, PiArmchairFill, PiArrowArcLeftFill, PiArrowArcRightFill, PiArrowBendDoubleUpLeftFill, PiArrowBendDoubleUpRightFill, PiArrowBendDownLeftFill, PiArrowBendDownRightFill, PiArrowBendLeftDownFill, PiArrowBendLeftUpFill, PiArrowBendRightDownFill, PiArrowBendRightUpFill, PiArrowBendUpLeftFill, PiArrowBendUpRightFill, PiArrowCircleDownFill, PiArrowCircleDownLeftFill, PiArrowCircleDownRightFill, PiArrowCircleLeftFill, PiArrowCircleRightFill, PiArrowCircleUpFill, PiArrowCircleUpLeftFill, PiArrowCircleUpRightFill, PiArrowClockwiseFill, PiArrowCounterClockwiseFill, PiArrowDownFill, PiArrowDownLeftFill, PiArrowDownRightFill, PiArrowElbowDownLeftFill, PiArrowElbowDownRightFill, PiArrowElbowLeftDownFill, PiArrowElbowLeftFill, PiArrowElbowLeftUpFill, PiArrowElbowRightDownFill, PiArrowElbowRightFill, PiArrowElbowRightUpFill, PiArrowElbowUpLeftFill, PiArrowElbowUpRightFill, PiArrowFatDownFill, PiArrowFatLeftFill, PiArrowFatLineDownFill, PiArrowFatLineLeftFill, PiArrowFatLineRightFill, PiArrowFatLineUpFill, PiArrowFatLinesDownFill, PiArrowFatLinesLeftFill, PiArrowFatLinesRightFill, PiArrowFatLinesUpFill, PiArrowFatRightFill, PiArrowFatUpFill, PiArrowLeftFill, PiArrowLineDownFill, PiArrowLineDownLeftFill, PiArrowLineDownRightFill, PiArrowLineLeftFill, PiArrowLineRightFill, PiArrowLineUpFill, PiArrowLineUpLeftFill, PiArrowLineUpRightFill, PiArrowRightFill, PiArrowSquareDownFill, PiArrowSquareDownLeftFill, PiArrowSquareDownRightFill, PiArrowSquareInFill, PiArrowSquareLeftFill, PiArrowSquareOutFill, PiArrowSquareRightFill, PiArrowSquareUpFill, PiArrowSquareUpLeftFill, PiArrowSquareUpRightFill, PiArrowUDownLeftFill, PiArrowUDownRightFill, PiArrowULeftDownFill, PiArrowULeftUpFill, PiArrowURightDownFill, PiArrowURightUpFill, PiArrowUUpLeftFill, PiArrowUUpRightFill, PiArrowUpFill, PiArrowUpLeftFill, PiArrowUpRightFill, PiArrowsClockwiseFill, PiArrowsCounterClockwiseFill, PiArrowsDownUpFill, PiArrowsHorizontalFill, PiArrowsInCardinalFill, PiArrowsInFill, PiArrowsInLineHorizontalFill, PiArrowsInLineVerticalFill, PiArrowsInSimpleFill, PiArrowsLeftRightFill, PiArrowsMergeFill, PiArrowsOutCardinalFill, PiArrowsOutFill, PiArrowsOutLineHorizontalFill, PiArrowsOutLineVerticalFill, PiArrowsOutSimpleFill, PiArrowsSplitFill, PiArrowsVerticalFill, PiArticleFill, PiArticleMediumFill, PiArticleNyTimesFill, PiAsclepiusFill, PiAsteriskFill, PiAsteriskSimpleFill, PiAtFill, PiAtomFill, PiAvocadoFill, PiAxeFill, PiBabyCarriageFill, PiBabyFill, PiBackpackFill, PiBackspaceFill, PiBagFill, PiBagSimpleFill, PiBalloonFill, PiBandaidsFill, PiBankFill, PiBarbellFill, PiBarcodeFill, PiBarnFill, PiBarricadeFill, PiBaseballCapFill, PiBaseballFill, PiBaseballHelmetFill, PiBasketFill, PiBasketballFill, PiBathtubFill, PiBatteryChargingFill, PiBatteryChargingVerticalFill, PiBatteryEmptyFill, PiBatteryFullFill, PiBatteryHighFill, PiBatteryLowFill, PiBatteryMediumFill, PiBatteryPlusFill, PiBatteryPlusVerticalFill, PiBatteryVerticalEmptyFill, PiBatteryVerticalFullFill, PiBatteryVerticalHighFill, PiBatteryVerticalLowFill, PiBatteryVerticalMediumFill, PiBatteryWarningFill, PiBatteryWarningVerticalFill, PiBeachBallFill, PiBeanieFill, PiBedFill, PiBeerBottleFill, PiBeerSteinFill, PiBehanceLogoFill, PiBellFill, PiBellRingingFill, PiBellSimpleFill, PiBellSimpleRingingFill, PiBellSimpleSlashFill, PiBellSimpleZFill, PiBellSlashFill, PiBellZFill, PiBeltFill, PiBezierCurveFill, PiBicycleFill, PiBinaryFill, PiBinocularsFill, PiBiohazardFill, PiBirdFill, PiBlueprintFill, PiBluetoothConnectedFill, PiBluetoothFill, PiBluetoothSlashFill, PiBluetoothXFill, PiBoatFill, PiBombFill, PiBoneFill, PiBookBookmarkFill, PiBookFill, PiBookOpenFill, PiBookOpenTextFill, PiBookOpenUserFill, PiBookmarkFill, PiBookmarkSimpleFill, PiBookmarksFill, PiBookmarksSimpleFill, PiBooksFill, PiBootFill, PiBoulesFill, PiBoundingBoxFill, PiBowlFoodFill, PiBowlSteamFill, PiBowlingBallFill, PiBoxArrowDownFill, PiBoxArrowUpFill, PiBoxingGloveFill, PiBracketsAngleFill, PiBracketsCurlyFill, PiBracketsRoundFill, PiBracketsSquareFill, PiBrainFill, PiBrandyFill, PiBreadFill, PiBridgeFill, PiBriefcaseFill, PiBriefcaseMetalFill, PiBroadcastFill, PiBroomFill, PiBrowserFill, PiBrowsersFill, PiBugBeetleFill, PiBugDroidFill, PiBugFill, PiBuildingApartmentFill, PiBuildingFill, PiBuildingOfficeFill, PiBuildingsFill, PiBulldozerFill, PiBusFill, PiButterflyFill, PiCableCarFill, PiCactusFill, PiCakeFill, PiCalculatorFill, PiCalendarBlankFill, PiCalendarCheckFill, PiCalendarDotFill, PiCalendarDotsFill, PiCalendarFill, PiCalendarHeartFill, PiCalendarMinusFill, PiCalendarPlusFill, PiCalendarSlashFill, PiCalendarStarFill, PiCalendarXFill, PiCallBellFill, PiCameraFill, PiCameraPlusFill, PiCameraRotateFill, PiCameraSlashFill, PiCampfireFill, PiCarBatteryFill, PiCarFill, PiCarProfileFill, PiCarSimpleFill, PiCardholderFill, PiCardsFill, PiCardsThreeFill, PiCaretCircleDoubleDownFill, PiCaretCircleDoubleLeftFill, PiCaretCircleDoubleRightFill, PiCaretCircleDoubleUpFill, PiCaretCircleDownFill, PiCaretCircleLeftFill, PiCaretCircleRightFill, PiCaretCircleUpDownFill, PiCaretCircleUpFill, PiCaretDoubleDownFill, PiCaretDoubleLeftFill, PiCaretDoubleRightFill, PiCaretDoubleUpFill, PiCaretDownFill, PiCaretLeftFill, PiCaretLineDownFill, PiCaretLineLeftFill, PiCaretLineRightFill, PiCaretLineUpFill, PiCaretRightFill, PiCaretUpDownFill, PiCaretUpFill, PiCarrotFill, PiCashRegisterFill, PiCassetteTapeFill, PiCastleTurretFill, PiCatFill, PiCellSignalFullFill, PiCellSignalHighFill, PiCellSignalLowFill, PiCellSignalMediumFill, PiCellSignalNoneFill, PiCellSignalSlashFill, PiCellSignalXFill, PiCellTowerFill, PiCertificateFill, PiChairFill, PiChalkboardFill, PiChalkboardSimpleFill, PiChalkboardTeacherFill, PiChampagneFill, PiChargingStationFill, PiChartBarFill, PiChartBarHorizontalFill, PiChartDonutFill, PiChartLineDownFill, PiChartLineFill, PiChartLineUpFill, PiChartPieFill, PiChartPieSliceFill, PiChartPolarFill, PiChartScatterFill, PiChatCenteredDotsFill, PiChatCenteredFill, PiChatCenteredSlashFill, PiChatCenteredTextFill, PiChatCircleDotsFill, PiChatCircleFill, PiChatCircleSlashFill, PiChatCircleTextFill, PiChatDotsFill, PiChatFill, PiChatSlashFill, PiChatTeardropDotsFill, PiChatTeardropFill, PiChatTeardropSlashFill, PiChatTeardropTextFill, PiChatTextFill, PiChatsCircleFill, PiChatsFill, PiChatsTeardropFill, PiCheckCircleFill, PiCheckFatFill, PiCheckFill, PiCheckSquareFill, PiCheckSquareOffsetFill, PiCheckerboardFill, PiChecksFill, PiCheersFill, PiCheeseFill, PiChefHatFill, PiCherriesFill, PiChurchFill, PiCigaretteFill, PiCigaretteSlashFill, PiCircleDashedFill, PiCircleFill, PiCircleHalfFill, PiCircleHalfTiltFill, PiCircleNotchFill, PiCirclesFourFill, PiCirclesThreeFill, PiCirclesThreePlusFill, PiCircuitryFill, PiCityFill, PiClipboardFill, PiClipboardTextFill, PiClockAfternoonFill, PiClockClockwiseFill, PiClockCountdownFill, PiClockCounterClockwiseFill, PiClockFill, PiClockUserFill, PiClosedCaptioningFill, PiCloudArrowDownFill, PiCloudArrowUpFill, PiCloudCheckFill, PiCloudFill, PiCloudFogFill, PiCloudLightningFill, PiCloudMoonFill, PiCloudRainFill, PiCloudSlashFill, PiCloudSnowFill, PiCloudSunFill, PiCloudWarningFill, PiCloudXFill, PiCloverFill, PiClubFill, PiCoatHangerFill, PiCodaLogoFill, PiCodeBlockFill, PiCodeFill, PiCodeSimpleFill, PiCodepenLogoFill, PiCodesandboxLogoFill, PiCoffeeBeanFill, PiCoffeeFill, PiCoinFill, PiCoinVerticalFill, PiCoinsFill, PiColumnsFill, PiColumnsPlusLeftFill, PiColumnsPlusRightFill, PiCommandFill, PiCompassFill, PiCompassRoseFill, PiCompassToolFill, PiComputerTowerFill, PiConfettiFill, PiContactlessPaymentFill, PiControlFill, PiCookieFill, PiCookingPotFill, PiCopyFill, PiCopySimpleFill, PiCopyleftFill, PiCopyrightFill, PiCornersInFill, PiCornersOutFill, PiCouchFill, PiCourtBasketballFill, PiCowFill, PiCowboyHatFill, PiCpuFill, PiCraneFill, PiCraneTowerFill, PiCreditCardFill, PiCricketFill, PiCropFill, PiCrossFill, PiCrosshairFill, PiCrosshairSimpleFill, PiCrownCrossFill, PiCrownFill, PiCrownSimpleFill, PiCubeFill, PiCubeFocusFill, PiCubeTransparentFill, PiCurrencyBtcFill, PiCurrencyCircleDollarFill, PiCurrencyCnyFill, PiCurrencyDollarFill, PiCurrencyDollarSimpleFill, PiCurrencyEthFill, PiCurrencyEurFill, PiCurrencyGbpFill, PiCurrencyInrFill, PiCurrencyJpyFill, PiCurrencyKrwFill, PiCurrencyKztFill, PiCurrencyNgnFill, PiCurrencyRubFill, PiCursorClickFill, PiCursorFill, PiCursorTextFill, PiCylinderFill, PiDatabaseFill, PiDeskFill, PiDesktopFill, PiDesktopTowerFill, PiDetectiveFill, PiDevToLogoFill, PiDeviceMobileCameraFill, PiDeviceMobileFill, PiDeviceMobileSlashFill, PiDeviceMobileSpeakerFill, PiDeviceRotateFill, PiDeviceTabletCameraFill, PiDeviceTabletFill, PiDeviceTabletSpeakerFill, PiDevicesFill, PiDiamondFill, PiDiamondsFourFill, PiDiceFiveFill, PiDiceFourFill, PiDiceOneFill, PiDiceSixFill, PiDiceThreeFill, PiDiceTwoFill, PiDiscFill, PiDiscoBallFill, PiDiscordLogoFill, PiDivideFill, PiDnaFill, PiDogFill, PiDoorFill, PiDoorOpenFill, PiDotFill, PiDotOutlineFill, PiDotsNineFill, PiDotsSixFill, PiDotsSixVerticalFill, PiDotsThreeCircleFill, PiDotsThreeCircleVerticalFill, PiDotsThreeFill, PiDotsThreeOutlineFill, PiDotsThreeOutlineVerticalFill, PiDotsThreeVerticalFill, PiDownloadFill, PiDownloadSimpleFill, PiDressFill, PiDresserFill, PiDribbbleLogoFill, PiDroneFill, PiDropFill, PiDropHalfBottomFill, PiDropHalfFill, PiDropSimpleFill, PiDropSlashFill, PiDropboxLogoFill, PiEarFill, PiEarSlashFill, PiEggCrackFill, PiEggFill, PiEjectFill, PiEjectSimpleFill, PiElevatorFill, PiEmptyFill, PiEngineFill, PiEnvelopeFill, PiEnvelopeOpenFill, PiEnvelopeSimpleFill, PiEnvelopeSimpleOpenFill, PiEqualizerFill, PiEqualsFill, PiEraserFill, PiEscalatorDownFill, PiEscalatorUpFill, PiExamFill, PiExclamationMarkFill, PiExcludeFill, PiExcludeSquareFill, PiExportFill, PiEyeClosedFill, PiEyeFill, PiEyeSlashFill, PiEyedropperFill, PiEyedropperSampleFill, PiEyeglassesFill, PiEyesFill, PiFaceMaskFill, PiFacebookLogoFill, PiFactoryFill, PiFadersFill, PiFadersHorizontalFill, PiFalloutShelterFill, PiFanFill, PiFarmFill, PiFastForwardCircleFill, PiFastForwardFill, PiFeatherFill, PiFediverseLogoFill, PiFigmaLogoFill, PiFileArchiveFill, PiFileArrowDownFill, PiFileArrowUpFill, PiFileAudioFill, PiFileCFill, PiFileCSharpFill, PiFileCloudFill, PiFileCodeFill, PiFileCppFill, PiFileCssFill, PiFileCsvFill, PiFileDashedFill, PiFileDocFill, PiFileFill, PiFileHtmlFill, PiFileImageFill, PiFileIniFill, PiFileJpgFill, PiFileJsFill, PiFileJsxFill, PiFileLockFill, PiFileMagnifyingGlassFill, PiFileMdFill, PiFileMinusFill, PiFilePdfFill, PiFilePlusFill, PiFilePngFill, PiFilePptFill, PiFilePyFill, PiFileRsFill, PiFileSqlFill, PiFileSvgFill, PiFileTextFill, PiFileTsFill, PiFileTsxFill, PiFileTxtFill, PiFileVideoFill, PiFileVueFill, PiFileXFill, PiFileXlsFill, PiFileZipFill, PiFilesFill, PiFilmReelFill, PiFilmScriptFill, PiFilmSlateFill, PiFilmStripFill, PiFingerprintFill, PiFingerprintSimpleFill, PiFinnTheHumanFill, PiFireExtinguisherFill, PiFireFill, PiFireSimpleFill, PiFireTruckFill, PiFirstAidFill, PiFirstAidKitFill, PiFishFill, PiFishSimpleFill, PiFlagBannerFill, PiFlagBannerFoldFill, PiFlagCheckeredFill, PiFlagFill, PiFlagPennantFill, PiFlameFill, PiFlashlightFill, PiFlaskFill, PiFlipHorizontalFill, PiFlipVerticalFill, PiFloppyDiskBackFill, PiFloppyDiskFill, PiFlowArrowFill, PiFlowerFill, PiFlowerLotusFill, PiFlowerTulipFill, PiFlyingSaucerFill, PiFolderDashedFill, PiFolderFill, PiFolderLockFill, PiFolderMinusFill, PiFolderOpenFill, PiFolderPlusFill, PiFolderSimpleDashedFill, PiFolderSimpleFill, PiFolderSimpleLockFill, PiFolderSimpleMinusFill, PiFolderSimplePlusFill, PiFolderSimpleStarFill, PiFolderSimpleUserFill, PiFolderStarFill, PiFolderUserFill, PiFoldersFill, PiFootballFill, PiFootballHelmetFill, PiFootprintsFill, PiForkKnifeFill, PiFourKFill, PiFrameCornersFill, PiFramerLogoFill, PiFunctionFill, PiFunnelFill, PiFunnelSimpleFill, PiFunnelSimpleXFill, PiFunnelXFill, PiGameControllerFill, PiGarageFill, PiGasCanFill, PiGasPumpFill, PiGaugeFill, PiGavelFill, PiGearFill, PiGearFineFill, PiGearSixFill, PiGenderFemaleFill, PiGenderIntersexFill, PiGenderMaleFill, PiGenderNeuterFill, PiGenderNonbinaryFill, PiGenderTransgenderFill, PiGhostFill, PiGifFill, PiGiftFill, PiGitBranchFill, PiGitCommitFill, PiGitDiffFill, PiGitForkFill, PiGitMergeFill, PiGitPullRequestFill, PiGithubLogoFill, PiGitlabLogoFill, PiGitlabLogoSimpleFill, PiGlobeFill, PiGlobeHemisphereEastFill, PiGlobeHemisphereWestFill, PiGlobeSimpleFill, PiGlobeSimpleXFill, PiGlobeStandFill, PiGlobeXFill, PiGogglesFill, PiGolfFill, PiGoodreadsLogoFill, PiGoogleCardboardLogoFill, PiGoogleChromeLogoFill, PiGoogleDriveLogoFill, PiGoogleLogoFill, PiGooglePhotosLogoFill, PiGooglePlayLogoFill, PiGooglePodcastsLogoFill, PiGpsFill, PiGpsFixFill, PiGpsSlashFill, PiGradientFill, PiGraduationCapFill, PiGrainsFill, PiGrainsSlashFill, PiGraphFill, PiGraphicsCardFill, PiGreaterThanFill, PiGreaterThanOrEqualFill, PiGridFourFill, PiGridNineFill, PiGuitarFill, PiHairDryerFill, PiHamburgerFill, PiHammerFill, PiHandArrowDownFill, PiHandArrowUpFill, PiHandCoinsFill, PiHandDepositFill, PiHandEyeFill, PiHandFill, PiHandFistFill, PiHandGrabbingFill, PiHandHeartFill, PiHandPalmFill, PiHandPeaceFill, PiHandPointingFill, PiHandSoapFill, PiHandSwipeLeftFill, PiHandSwipeRightFill, PiHandTapFill, PiHandWavingFill, PiHandWithdrawFill, PiHandbagFill, PiHandbagSimpleFill, PiHandsClappingFill, PiHandsPrayingFill, PiHandshakeFill, PiHardDriveFill, PiHardDrivesFill, PiHardHatFill, PiHashFill, PiHashStraightFill, PiHeadCircuitFill, PiHeadlightsFill, PiHeadphonesFill, PiHeadsetFill, PiHeartBreakFill, PiHeartFill, PiHeartHalfFill, PiHeartStraightBreakFill, PiHeartStraightFill, PiHeartbeatFill, PiHexagonFill, PiHighDefinitionFill, PiHighHeelFill, PiHighlighterCircleFill, PiHighlighterFill, PiHockeyFill, PiHoodieFill, PiHorseFill, PiHospitalFill, PiHourglassFill, PiHourglassHighFill, PiHourglassLowFill, PiHourglassMediumFill, PiHourglassSimpleFill, PiHourglassSimpleHighFill, PiHourglassSimpleLowFill, PiHourglassSimpleMediumFill, PiHouseFill, PiHouseLineFill, PiHouseSimpleFill, PiHurricaneFill, PiIceCreamFill, PiIdentificationBadgeFill, PiIdentificationCardFill, PiImageBrokenFill, PiImageFill, PiImageSquareFill, PiImagesFill, PiImagesSquareFill, PiInfinityFill, PiInfoFill, PiInstagramLogoFill, PiIntersectFill, PiIntersectSquareFill, PiIntersectThreeFill, PiIntersectionFill, PiInvoiceFill, PiIslandFill, PiJarFill, PiJarLabelFill, PiJeepFill, PiJoystickFill, PiKanbanFill, PiKeyFill, PiKeyReturnFill, PiKeyboardFill, PiKeyholeFill, PiKnifeFill, PiLadderFill, PiLadderSimpleFill, PiLampFill, PiLampPendantFill, PiLaptopFill, PiLassoFill, PiLastfmLogoFill, PiLayoutFill, PiLeafFill, PiLecternFill, PiLegoFill, PiLegoSmileyFill, PiLessThanFill, PiLessThanOrEqualFill, PiLetterCircleHFill, PiLetterCirclePFill, PiLetterCircleVFill, PiLifebuoyFill, PiLightbulbFilamentFill, PiLightbulbFill, PiLighthouseFill, PiLightningAFill, PiLightningFill, PiLightningSlashFill, PiLineSegmentFill, PiLineSegmentsFill, PiLineVerticalFill, PiLinkBreakFill, PiLinkFill, PiLinkSimpleBreakFill, PiLinkSimpleFill, PiLinkSimpleHorizontalBreakFill, PiLinkSimpleHorizontalFill, PiLinkedinLogoFill, PiLinktreeLogoFill, PiLinuxLogoFill, PiListBulletsFill, PiListChecksFill, PiListDashesFill, PiListFill, PiListHeartFill, PiListMagnifyingGlassFill, PiListNumbersFill, PiListPlusFill, PiListStarFill, PiLockFill, PiLockKeyFill, PiLockKeyOpenFill, PiLockLaminatedFill, PiLockLaminatedOpenFill, PiLockOpenFill, PiLockSimpleFill, PiLockSimpleOpenFill, PiLockersFill, PiLogFill, PiMagicWandFill, PiMagnetFill, PiMagnetStraightFill, PiMagnifyingGlassFill, PiMagnifyingGlassMinusFill, PiMagnifyingGlassPlusFill, PiMailboxFill, PiMapPinAreaFill, PiMapPinFill, PiMapPinLineFill, PiMapPinPlusFill, PiMapPinSimpleAreaFill, PiMapPinSimpleFill, PiMapPinSimpleLineFill, PiMapTrifoldFill, PiMarkdownLogoFill, PiMarkerCircleFill, PiMartiniFill, PiMaskHappyFill, PiMaskSadFill, PiMastodonLogoFill, PiMathOperationsFill, PiMatrixLogoFill, PiMedalFill, PiMedalMilitaryFill, PiMediumLogoFill, PiMegaphoneFill, PiMegaphoneSimpleFill, PiMemberOfFill, PiMemoryFill, PiMessengerLogoFill, PiMetaLogoFill, PiMeteorFill, PiMetronomeFill, PiMicrophoneFill, PiMicrophoneSlashFill, PiMicrophoneStageFill, PiMicroscopeFill, PiMicrosoftExcelLogoFill, PiMicrosoftOutlookLogoFill, PiMicrosoftPowerpointLogoFill, PiMicrosoftTeamsLogoFill, PiMicrosoftWordLogoFill, PiMinusCircleFill, PiMinusFill, PiMinusSquareFill, PiMoneyFill, PiMoneyWavyFill, PiMonitorArrowUpFill, PiMonitorFill, PiMonitorPlayFill, PiMoonFill, PiMoonStarsFill, PiMopedFill, PiMopedFrontFill, PiMosqueFill, PiMotorcycleFill, PiMountainsFill, PiMouseFill, PiMouseLeftClickFill, PiMouseMiddleClickFill, PiMouseRightClickFill, PiMouseScrollFill, PiMouseSimpleFill, PiMusicNoteFill, PiMusicNoteSimpleFill, PiMusicNotesFill, PiMusicNotesMinusFill, PiMusicNotesPlusFill, PiMusicNotesSimpleFill, PiNavigationArrowFill, PiNeedleFill, PiNetworkFill, PiNetworkSlashFill, PiNetworkXFill, PiNewspaperClippingFill, PiNewspaperFill, PiNotEqualsFill, PiNotMemberOfFill, PiNotSubsetOfFill, PiNotSupersetOfFill, PiNotchesFill, PiNoteBlankFill, PiNoteFill, PiNotePencilFill, PiNotebookFill, PiNotepadFill, PiNotificationFill, PiNotionLogoFill, PiNuclearPlantFill, PiNumberCircleEightFill, PiNumberCircleFiveFill, PiNumberCircleFourFill, PiNumberCircleNineFill, PiNumberCircleOneFill, PiNumberCircleSevenFill, PiNumberCircleSixFill, PiNumberCircleThreeFill, PiNumberCircleTwoFill, PiNumberCircleZeroFill, PiNumberEightFill, PiNumberFiveFill, PiNumberFourFill, PiNumberNineFill, PiNumberOneFill, PiNumberSevenFill, PiNumberSixFill;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "pi:PiWebcamSlashDuotone": return [3 /*break*/, 1];
                        case "pi:PiWebhooksLogoDuotone": return [3 /*break*/, 3];
                        case "pi:PiWechatLogoDuotone": return [3 /*break*/, 5];
                        case "pi:PiWhatsappLogoDuotone": return [3 /*break*/, 7];
                        case "pi:PiWheelchairDuotone": return [3 /*break*/, 9];
                        case "pi:PiWheelchairMotionDuotone": return [3 /*break*/, 11];
                        case "pi:PiWifiHighDuotone": return [3 /*break*/, 13];
                        case "pi:PiWifiLowDuotone": return [3 /*break*/, 15];
                        case "pi:PiWifiMediumDuotone": return [3 /*break*/, 17];
                        case "pi:PiWifiNoneDuotone": return [3 /*break*/, 19];
                        case "pi:PiWifiSlashDuotone": return [3 /*break*/, 21];
                        case "pi:PiWifiXDuotone": return [3 /*break*/, 23];
                        case "pi:PiWindDuotone": return [3 /*break*/, 25];
                        case "pi:PiWindmillDuotone": return [3 /*break*/, 27];
                        case "pi:PiWindowsLogoDuotone": return [3 /*break*/, 29];
                        case "pi:PiWineDuotone": return [3 /*break*/, 31];
                        case "pi:PiWrenchDuotone": return [3 /*break*/, 33];
                        case "pi:PiXCircleDuotone": return [3 /*break*/, 35];
                        case "pi:PiXDuotone": return [3 /*break*/, 37];
                        case "pi:PiXLogoDuotone": return [3 /*break*/, 39];
                        case "pi:PiXSquareDuotone": return [3 /*break*/, 41];
                        case "pi:PiYarnDuotone": return [3 /*break*/, 43];
                        case "pi:PiYinYangDuotone": return [3 /*break*/, 45];
                        case "pi:PiYoutubeLogoDuotone": return [3 /*break*/, 47];
                        case "pi:PiAcornFill": return [3 /*break*/, 49];
                        case "pi:PiAddressBookFill": return [3 /*break*/, 51];
                        case "pi:PiAddressBookTabsFill": return [3 /*break*/, 53];
                        case "pi:PiAirTrafficControlFill": return [3 /*break*/, 55];
                        case "pi:PiAirplaneFill": return [3 /*break*/, 57];
                        case "pi:PiAirplaneInFlightFill": return [3 /*break*/, 59];
                        case "pi:PiAirplaneLandingFill": return [3 /*break*/, 61];
                        case "pi:PiAirplaneTakeoffFill": return [3 /*break*/, 63];
                        case "pi:PiAirplaneTaxiingFill": return [3 /*break*/, 65];
                        case "pi:PiAirplaneTiltFill": return [3 /*break*/, 67];
                        case "pi:PiAirplayFill": return [3 /*break*/, 69];
                        case "pi:PiAlarmFill": return [3 /*break*/, 71];
                        case "pi:PiAlienFill": return [3 /*break*/, 73];
                        case "pi:PiAlignBottomFill": return [3 /*break*/, 75];
                        case "pi:PiAlignBottomSimpleFill": return [3 /*break*/, 77];
                        case "pi:PiAlignCenterHorizontalFill": return [3 /*break*/, 79];
                        case "pi:PiAlignCenterHorizontalSimpleFill": return [3 /*break*/, 81];
                        case "pi:PiAlignCenterVerticalFill": return [3 /*break*/, 83];
                        case "pi:PiAlignCenterVerticalSimpleFill": return [3 /*break*/, 85];
                        case "pi:PiAlignLeftFill": return [3 /*break*/, 87];
                        case "pi:PiAlignLeftSimpleFill": return [3 /*break*/, 89];
                        case "pi:PiAlignRightFill": return [3 /*break*/, 91];
                        case "pi:PiAlignRightSimpleFill": return [3 /*break*/, 93];
                        case "pi:PiAlignTopFill": return [3 /*break*/, 95];
                        case "pi:PiAlignTopSimpleFill": return [3 /*break*/, 97];
                        case "pi:PiAmazonLogoFill": return [3 /*break*/, 99];
                        case "pi:PiAmbulanceFill": return [3 /*break*/, 101];
                        case "pi:PiAnchorFill": return [3 /*break*/, 103];
                        case "pi:PiAnchorSimpleFill": return [3 /*break*/, 105];
                        case "pi:PiAndroidLogoFill": return [3 /*break*/, 107];
                        case "pi:PiAngleFill": return [3 /*break*/, 109];
                        case "pi:PiAngularLogoFill": return [3 /*break*/, 111];
                        case "pi:PiApertureFill": return [3 /*break*/, 113];
                        case "pi:PiAppStoreLogoFill": return [3 /*break*/, 115];
                        case "pi:PiAppWindowFill": return [3 /*break*/, 117];
                        case "pi:PiAppleLogoFill": return [3 /*break*/, 119];
                        case "pi:PiApplePodcastsLogoFill": return [3 /*break*/, 121];
                        case "pi:PiApproximateEqualsFill": return [3 /*break*/, 123];
                        case "pi:PiArchiveFill": return [3 /*break*/, 125];
                        case "pi:PiArmchairFill": return [3 /*break*/, 127];
                        case "pi:PiArrowArcLeftFill": return [3 /*break*/, 129];
                        case "pi:PiArrowArcRightFill": return [3 /*break*/, 131];
                        case "pi:PiArrowBendDoubleUpLeftFill": return [3 /*break*/, 133];
                        case "pi:PiArrowBendDoubleUpRightFill": return [3 /*break*/, 135];
                        case "pi:PiArrowBendDownLeftFill": return [3 /*break*/, 137];
                        case "pi:PiArrowBendDownRightFill": return [3 /*break*/, 139];
                        case "pi:PiArrowBendLeftDownFill": return [3 /*break*/, 141];
                        case "pi:PiArrowBendLeftUpFill": return [3 /*break*/, 143];
                        case "pi:PiArrowBendRightDownFill": return [3 /*break*/, 145];
                        case "pi:PiArrowBendRightUpFill": return [3 /*break*/, 147];
                        case "pi:PiArrowBendUpLeftFill": return [3 /*break*/, 149];
                        case "pi:PiArrowBendUpRightFill": return [3 /*break*/, 151];
                        case "pi:PiArrowCircleDownFill": return [3 /*break*/, 153];
                        case "pi:PiArrowCircleDownLeftFill": return [3 /*break*/, 155];
                        case "pi:PiArrowCircleDownRightFill": return [3 /*break*/, 157];
                        case "pi:PiArrowCircleLeftFill": return [3 /*break*/, 159];
                        case "pi:PiArrowCircleRightFill": return [3 /*break*/, 161];
                        case "pi:PiArrowCircleUpFill": return [3 /*break*/, 163];
                        case "pi:PiArrowCircleUpLeftFill": return [3 /*break*/, 165];
                        case "pi:PiArrowCircleUpRightFill": return [3 /*break*/, 167];
                        case "pi:PiArrowClockwiseFill": return [3 /*break*/, 169];
                        case "pi:PiArrowCounterClockwiseFill": return [3 /*break*/, 171];
                        case "pi:PiArrowDownFill": return [3 /*break*/, 173];
                        case "pi:PiArrowDownLeftFill": return [3 /*break*/, 175];
                        case "pi:PiArrowDownRightFill": return [3 /*break*/, 177];
                        case "pi:PiArrowElbowDownLeftFill": return [3 /*break*/, 179];
                        case "pi:PiArrowElbowDownRightFill": return [3 /*break*/, 181];
                        case "pi:PiArrowElbowLeftDownFill": return [3 /*break*/, 183];
                        case "pi:PiArrowElbowLeftFill": return [3 /*break*/, 185];
                        case "pi:PiArrowElbowLeftUpFill": return [3 /*break*/, 187];
                        case "pi:PiArrowElbowRightDownFill": return [3 /*break*/, 189];
                        case "pi:PiArrowElbowRightFill": return [3 /*break*/, 191];
                        case "pi:PiArrowElbowRightUpFill": return [3 /*break*/, 193];
                        case "pi:PiArrowElbowUpLeftFill": return [3 /*break*/, 195];
                        case "pi:PiArrowElbowUpRightFill": return [3 /*break*/, 197];
                        case "pi:PiArrowFatDownFill": return [3 /*break*/, 199];
                        case "pi:PiArrowFatLeftFill": return [3 /*break*/, 201];
                        case "pi:PiArrowFatLineDownFill": return [3 /*break*/, 203];
                        case "pi:PiArrowFatLineLeftFill": return [3 /*break*/, 205];
                        case "pi:PiArrowFatLineRightFill": return [3 /*break*/, 207];
                        case "pi:PiArrowFatLineUpFill": return [3 /*break*/, 209];
                        case "pi:PiArrowFatLinesDownFill": return [3 /*break*/, 211];
                        case "pi:PiArrowFatLinesLeftFill": return [3 /*break*/, 213];
                        case "pi:PiArrowFatLinesRightFill": return [3 /*break*/, 215];
                        case "pi:PiArrowFatLinesUpFill": return [3 /*break*/, 217];
                        case "pi:PiArrowFatRightFill": return [3 /*break*/, 219];
                        case "pi:PiArrowFatUpFill": return [3 /*break*/, 221];
                        case "pi:PiArrowLeftFill": return [3 /*break*/, 223];
                        case "pi:PiArrowLineDownFill": return [3 /*break*/, 225];
                        case "pi:PiArrowLineDownLeftFill": return [3 /*break*/, 227];
                        case "pi:PiArrowLineDownRightFill": return [3 /*break*/, 229];
                        case "pi:PiArrowLineLeftFill": return [3 /*break*/, 231];
                        case "pi:PiArrowLineRightFill": return [3 /*break*/, 233];
                        case "pi:PiArrowLineUpFill": return [3 /*break*/, 235];
                        case "pi:PiArrowLineUpLeftFill": return [3 /*break*/, 237];
                        case "pi:PiArrowLineUpRightFill": return [3 /*break*/, 239];
                        case "pi:PiArrowRightFill": return [3 /*break*/, 241];
                        case "pi:PiArrowSquareDownFill": return [3 /*break*/, 243];
                        case "pi:PiArrowSquareDownLeftFill": return [3 /*break*/, 245];
                        case "pi:PiArrowSquareDownRightFill": return [3 /*break*/, 247];
                        case "pi:PiArrowSquareInFill": return [3 /*break*/, 249];
                        case "pi:PiArrowSquareLeftFill": return [3 /*break*/, 251];
                        case "pi:PiArrowSquareOutFill": return [3 /*break*/, 253];
                        case "pi:PiArrowSquareRightFill": return [3 /*break*/, 255];
                        case "pi:PiArrowSquareUpFill": return [3 /*break*/, 257];
                        case "pi:PiArrowSquareUpLeftFill": return [3 /*break*/, 259];
                        case "pi:PiArrowSquareUpRightFill": return [3 /*break*/, 261];
                        case "pi:PiArrowUDownLeftFill": return [3 /*break*/, 263];
                        case "pi:PiArrowUDownRightFill": return [3 /*break*/, 265];
                        case "pi:PiArrowULeftDownFill": return [3 /*break*/, 267];
                        case "pi:PiArrowULeftUpFill": return [3 /*break*/, 269];
                        case "pi:PiArrowURightDownFill": return [3 /*break*/, 271];
                        case "pi:PiArrowURightUpFill": return [3 /*break*/, 273];
                        case "pi:PiArrowUUpLeftFill": return [3 /*break*/, 275];
                        case "pi:PiArrowUUpRightFill": return [3 /*break*/, 277];
                        case "pi:PiArrowUpFill": return [3 /*break*/, 279];
                        case "pi:PiArrowUpLeftFill": return [3 /*break*/, 281];
                        case "pi:PiArrowUpRightFill": return [3 /*break*/, 283];
                        case "pi:PiArrowsClockwiseFill": return [3 /*break*/, 285];
                        case "pi:PiArrowsCounterClockwiseFill": return [3 /*break*/, 287];
                        case "pi:PiArrowsDownUpFill": return [3 /*break*/, 289];
                        case "pi:PiArrowsHorizontalFill": return [3 /*break*/, 291];
                        case "pi:PiArrowsInCardinalFill": return [3 /*break*/, 293];
                        case "pi:PiArrowsInFill": return [3 /*break*/, 295];
                        case "pi:PiArrowsInLineHorizontalFill": return [3 /*break*/, 297];
                        case "pi:PiArrowsInLineVerticalFill": return [3 /*break*/, 299];
                        case "pi:PiArrowsInSimpleFill": return [3 /*break*/, 301];
                        case "pi:PiArrowsLeftRightFill": return [3 /*break*/, 303];
                        case "pi:PiArrowsMergeFill": return [3 /*break*/, 305];
                        case "pi:PiArrowsOutCardinalFill": return [3 /*break*/, 307];
                        case "pi:PiArrowsOutFill": return [3 /*break*/, 309];
                        case "pi:PiArrowsOutLineHorizontalFill": return [3 /*break*/, 311];
                        case "pi:PiArrowsOutLineVerticalFill": return [3 /*break*/, 313];
                        case "pi:PiArrowsOutSimpleFill": return [3 /*break*/, 315];
                        case "pi:PiArrowsSplitFill": return [3 /*break*/, 317];
                        case "pi:PiArrowsVerticalFill": return [3 /*break*/, 319];
                        case "pi:PiArticleFill": return [3 /*break*/, 321];
                        case "pi:PiArticleMediumFill": return [3 /*break*/, 323];
                        case "pi:PiArticleNyTimesFill": return [3 /*break*/, 325];
                        case "pi:PiAsclepiusFill": return [3 /*break*/, 327];
                        case "pi:PiAsteriskFill": return [3 /*break*/, 329];
                        case "pi:PiAsteriskSimpleFill": return [3 /*break*/, 331];
                        case "pi:PiAtFill": return [3 /*break*/, 333];
                        case "pi:PiAtomFill": return [3 /*break*/, 335];
                        case "pi:PiAvocadoFill": return [3 /*break*/, 337];
                        case "pi:PiAxeFill": return [3 /*break*/, 339];
                        case "pi:PiBabyCarriageFill": return [3 /*break*/, 341];
                        case "pi:PiBabyFill": return [3 /*break*/, 343];
                        case "pi:PiBackpackFill": return [3 /*break*/, 345];
                        case "pi:PiBackspaceFill": return [3 /*break*/, 347];
                        case "pi:PiBagFill": return [3 /*break*/, 349];
                        case "pi:PiBagSimpleFill": return [3 /*break*/, 351];
                        case "pi:PiBalloonFill": return [3 /*break*/, 353];
                        case "pi:PiBandaidsFill": return [3 /*break*/, 355];
                        case "pi:PiBankFill": return [3 /*break*/, 357];
                        case "pi:PiBarbellFill": return [3 /*break*/, 359];
                        case "pi:PiBarcodeFill": return [3 /*break*/, 361];
                        case "pi:PiBarnFill": return [3 /*break*/, 363];
                        case "pi:PiBarricadeFill": return [3 /*break*/, 365];
                        case "pi:PiBaseballCapFill": return [3 /*break*/, 367];
                        case "pi:PiBaseballFill": return [3 /*break*/, 369];
                        case "pi:PiBaseballHelmetFill": return [3 /*break*/, 371];
                        case "pi:PiBasketFill": return [3 /*break*/, 373];
                        case "pi:PiBasketballFill": return [3 /*break*/, 375];
                        case "pi:PiBathtubFill": return [3 /*break*/, 377];
                        case "pi:PiBatteryChargingFill": return [3 /*break*/, 379];
                        case "pi:PiBatteryChargingVerticalFill": return [3 /*break*/, 381];
                        case "pi:PiBatteryEmptyFill": return [3 /*break*/, 383];
                        case "pi:PiBatteryFullFill": return [3 /*break*/, 385];
                        case "pi:PiBatteryHighFill": return [3 /*break*/, 387];
                        case "pi:PiBatteryLowFill": return [3 /*break*/, 389];
                        case "pi:PiBatteryMediumFill": return [3 /*break*/, 391];
                        case "pi:PiBatteryPlusFill": return [3 /*break*/, 393];
                        case "pi:PiBatteryPlusVerticalFill": return [3 /*break*/, 395];
                        case "pi:PiBatteryVerticalEmptyFill": return [3 /*break*/, 397];
                        case "pi:PiBatteryVerticalFullFill": return [3 /*break*/, 399];
                        case "pi:PiBatteryVerticalHighFill": return [3 /*break*/, 401];
                        case "pi:PiBatteryVerticalLowFill": return [3 /*break*/, 403];
                        case "pi:PiBatteryVerticalMediumFill": return [3 /*break*/, 405];
                        case "pi:PiBatteryWarningFill": return [3 /*break*/, 407];
                        case "pi:PiBatteryWarningVerticalFill": return [3 /*break*/, 409];
                        case "pi:PiBeachBallFill": return [3 /*break*/, 411];
                        case "pi:PiBeanieFill": return [3 /*break*/, 413];
                        case "pi:PiBedFill": return [3 /*break*/, 415];
                        case "pi:PiBeerBottleFill": return [3 /*break*/, 417];
                        case "pi:PiBeerSteinFill": return [3 /*break*/, 419];
                        case "pi:PiBehanceLogoFill": return [3 /*break*/, 421];
                        case "pi:PiBellFill": return [3 /*break*/, 423];
                        case "pi:PiBellRingingFill": return [3 /*break*/, 425];
                        case "pi:PiBellSimpleFill": return [3 /*break*/, 427];
                        case "pi:PiBellSimpleRingingFill": return [3 /*break*/, 429];
                        case "pi:PiBellSimpleSlashFill": return [3 /*break*/, 431];
                        case "pi:PiBellSimpleZFill": return [3 /*break*/, 433];
                        case "pi:PiBellSlashFill": return [3 /*break*/, 435];
                        case "pi:PiBellZFill": return [3 /*break*/, 437];
                        case "pi:PiBeltFill": return [3 /*break*/, 439];
                        case "pi:PiBezierCurveFill": return [3 /*break*/, 441];
                        case "pi:PiBicycleFill": return [3 /*break*/, 443];
                        case "pi:PiBinaryFill": return [3 /*break*/, 445];
                        case "pi:PiBinocularsFill": return [3 /*break*/, 447];
                        case "pi:PiBiohazardFill": return [3 /*break*/, 449];
                        case "pi:PiBirdFill": return [3 /*break*/, 451];
                        case "pi:PiBlueprintFill": return [3 /*break*/, 453];
                        case "pi:PiBluetoothConnectedFill": return [3 /*break*/, 455];
                        case "pi:PiBluetoothFill": return [3 /*break*/, 457];
                        case "pi:PiBluetoothSlashFill": return [3 /*break*/, 459];
                        case "pi:PiBluetoothXFill": return [3 /*break*/, 461];
                        case "pi:PiBoatFill": return [3 /*break*/, 463];
                        case "pi:PiBombFill": return [3 /*break*/, 465];
                        case "pi:PiBoneFill": return [3 /*break*/, 467];
                        case "pi:PiBookBookmarkFill": return [3 /*break*/, 469];
                        case "pi:PiBookFill": return [3 /*break*/, 471];
                        case "pi:PiBookOpenFill": return [3 /*break*/, 473];
                        case "pi:PiBookOpenTextFill": return [3 /*break*/, 475];
                        case "pi:PiBookOpenUserFill": return [3 /*break*/, 477];
                        case "pi:PiBookmarkFill": return [3 /*break*/, 479];
                        case "pi:PiBookmarkSimpleFill": return [3 /*break*/, 481];
                        case "pi:PiBookmarksFill": return [3 /*break*/, 483];
                        case "pi:PiBookmarksSimpleFill": return [3 /*break*/, 485];
                        case "pi:PiBooksFill": return [3 /*break*/, 487];
                        case "pi:PiBootFill": return [3 /*break*/, 489];
                        case "pi:PiBoulesFill": return [3 /*break*/, 491];
                        case "pi:PiBoundingBoxFill": return [3 /*break*/, 493];
                        case "pi:PiBowlFoodFill": return [3 /*break*/, 495];
                        case "pi:PiBowlSteamFill": return [3 /*break*/, 497];
                        case "pi:PiBowlingBallFill": return [3 /*break*/, 499];
                        case "pi:PiBoxArrowDownFill": return [3 /*break*/, 501];
                        case "pi:PiBoxArrowUpFill": return [3 /*break*/, 503];
                        case "pi:PiBoxingGloveFill": return [3 /*break*/, 505];
                        case "pi:PiBracketsAngleFill": return [3 /*break*/, 507];
                        case "pi:PiBracketsCurlyFill": return [3 /*break*/, 509];
                        case "pi:PiBracketsRoundFill": return [3 /*break*/, 511];
                        case "pi:PiBracketsSquareFill": return [3 /*break*/, 513];
                        case "pi:PiBrainFill": return [3 /*break*/, 515];
                        case "pi:PiBrandyFill": return [3 /*break*/, 517];
                        case "pi:PiBreadFill": return [3 /*break*/, 519];
                        case "pi:PiBridgeFill": return [3 /*break*/, 521];
                        case "pi:PiBriefcaseFill": return [3 /*break*/, 523];
                        case "pi:PiBriefcaseMetalFill": return [3 /*break*/, 525];
                        case "pi:PiBroadcastFill": return [3 /*break*/, 527];
                        case "pi:PiBroomFill": return [3 /*break*/, 529];
                        case "pi:PiBrowserFill": return [3 /*break*/, 531];
                        case "pi:PiBrowsersFill": return [3 /*break*/, 533];
                        case "pi:PiBugBeetleFill": return [3 /*break*/, 535];
                        case "pi:PiBugDroidFill": return [3 /*break*/, 537];
                        case "pi:PiBugFill": return [3 /*break*/, 539];
                        case "pi:PiBuildingApartmentFill": return [3 /*break*/, 541];
                        case "pi:PiBuildingFill": return [3 /*break*/, 543];
                        case "pi:PiBuildingOfficeFill": return [3 /*break*/, 545];
                        case "pi:PiBuildingsFill": return [3 /*break*/, 547];
                        case "pi:PiBulldozerFill": return [3 /*break*/, 549];
                        case "pi:PiBusFill": return [3 /*break*/, 551];
                        case "pi:PiButterflyFill": return [3 /*break*/, 553];
                        case "pi:PiCableCarFill": return [3 /*break*/, 555];
                        case "pi:PiCactusFill": return [3 /*break*/, 557];
                        case "pi:PiCakeFill": return [3 /*break*/, 559];
                        case "pi:PiCalculatorFill": return [3 /*break*/, 561];
                        case "pi:PiCalendarBlankFill": return [3 /*break*/, 563];
                        case "pi:PiCalendarCheckFill": return [3 /*break*/, 565];
                        case "pi:PiCalendarDotFill": return [3 /*break*/, 567];
                        case "pi:PiCalendarDotsFill": return [3 /*break*/, 569];
                        case "pi:PiCalendarFill": return [3 /*break*/, 571];
                        case "pi:PiCalendarHeartFill": return [3 /*break*/, 573];
                        case "pi:PiCalendarMinusFill": return [3 /*break*/, 575];
                        case "pi:PiCalendarPlusFill": return [3 /*break*/, 577];
                        case "pi:PiCalendarSlashFill": return [3 /*break*/, 579];
                        case "pi:PiCalendarStarFill": return [3 /*break*/, 581];
                        case "pi:PiCalendarXFill": return [3 /*break*/, 583];
                        case "pi:PiCallBellFill": return [3 /*break*/, 585];
                        case "pi:PiCameraFill": return [3 /*break*/, 587];
                        case "pi:PiCameraPlusFill": return [3 /*break*/, 589];
                        case "pi:PiCameraRotateFill": return [3 /*break*/, 591];
                        case "pi:PiCameraSlashFill": return [3 /*break*/, 593];
                        case "pi:PiCampfireFill": return [3 /*break*/, 595];
                        case "pi:PiCarBatteryFill": return [3 /*break*/, 597];
                        case "pi:PiCarFill": return [3 /*break*/, 599];
                        case "pi:PiCarProfileFill": return [3 /*break*/, 601];
                        case "pi:PiCarSimpleFill": return [3 /*break*/, 603];
                        case "pi:PiCardholderFill": return [3 /*break*/, 605];
                        case "pi:PiCardsFill": return [3 /*break*/, 607];
                        case "pi:PiCardsThreeFill": return [3 /*break*/, 609];
                        case "pi:PiCaretCircleDoubleDownFill": return [3 /*break*/, 611];
                        case "pi:PiCaretCircleDoubleLeftFill": return [3 /*break*/, 613];
                        case "pi:PiCaretCircleDoubleRightFill": return [3 /*break*/, 615];
                        case "pi:PiCaretCircleDoubleUpFill": return [3 /*break*/, 617];
                        case "pi:PiCaretCircleDownFill": return [3 /*break*/, 619];
                        case "pi:PiCaretCircleLeftFill": return [3 /*break*/, 621];
                        case "pi:PiCaretCircleRightFill": return [3 /*break*/, 623];
                        case "pi:PiCaretCircleUpDownFill": return [3 /*break*/, 625];
                        case "pi:PiCaretCircleUpFill": return [3 /*break*/, 627];
                        case "pi:PiCaretDoubleDownFill": return [3 /*break*/, 629];
                        case "pi:PiCaretDoubleLeftFill": return [3 /*break*/, 631];
                        case "pi:PiCaretDoubleRightFill": return [3 /*break*/, 633];
                        case "pi:PiCaretDoubleUpFill": return [3 /*break*/, 635];
                        case "pi:PiCaretDownFill": return [3 /*break*/, 637];
                        case "pi:PiCaretLeftFill": return [3 /*break*/, 639];
                        case "pi:PiCaretLineDownFill": return [3 /*break*/, 641];
                        case "pi:PiCaretLineLeftFill": return [3 /*break*/, 643];
                        case "pi:PiCaretLineRightFill": return [3 /*break*/, 645];
                        case "pi:PiCaretLineUpFill": return [3 /*break*/, 647];
                        case "pi:PiCaretRightFill": return [3 /*break*/, 649];
                        case "pi:PiCaretUpDownFill": return [3 /*break*/, 651];
                        case "pi:PiCaretUpFill": return [3 /*break*/, 653];
                        case "pi:PiCarrotFill": return [3 /*break*/, 655];
                        case "pi:PiCashRegisterFill": return [3 /*break*/, 657];
                        case "pi:PiCassetteTapeFill": return [3 /*break*/, 659];
                        case "pi:PiCastleTurretFill": return [3 /*break*/, 661];
                        case "pi:PiCatFill": return [3 /*break*/, 663];
                        case "pi:PiCellSignalFullFill": return [3 /*break*/, 665];
                        case "pi:PiCellSignalHighFill": return [3 /*break*/, 667];
                        case "pi:PiCellSignalLowFill": return [3 /*break*/, 669];
                        case "pi:PiCellSignalMediumFill": return [3 /*break*/, 671];
                        case "pi:PiCellSignalNoneFill": return [3 /*break*/, 673];
                        case "pi:PiCellSignalSlashFill": return [3 /*break*/, 675];
                        case "pi:PiCellSignalXFill": return [3 /*break*/, 677];
                        case "pi:PiCellTowerFill": return [3 /*break*/, 679];
                        case "pi:PiCertificateFill": return [3 /*break*/, 681];
                        case "pi:PiChairFill": return [3 /*break*/, 683];
                        case "pi:PiChalkboardFill": return [3 /*break*/, 685];
                        case "pi:PiChalkboardSimpleFill": return [3 /*break*/, 687];
                        case "pi:PiChalkboardTeacherFill": return [3 /*break*/, 689];
                        case "pi:PiChampagneFill": return [3 /*break*/, 691];
                        case "pi:PiChargingStationFill": return [3 /*break*/, 693];
                        case "pi:PiChartBarFill": return [3 /*break*/, 695];
                        case "pi:PiChartBarHorizontalFill": return [3 /*break*/, 697];
                        case "pi:PiChartDonutFill": return [3 /*break*/, 699];
                        case "pi:PiChartLineDownFill": return [3 /*break*/, 701];
                        case "pi:PiChartLineFill": return [3 /*break*/, 703];
                        case "pi:PiChartLineUpFill": return [3 /*break*/, 705];
                        case "pi:PiChartPieFill": return [3 /*break*/, 707];
                        case "pi:PiChartPieSliceFill": return [3 /*break*/, 709];
                        case "pi:PiChartPolarFill": return [3 /*break*/, 711];
                        case "pi:PiChartScatterFill": return [3 /*break*/, 713];
                        case "pi:PiChatCenteredDotsFill": return [3 /*break*/, 715];
                        case "pi:PiChatCenteredFill": return [3 /*break*/, 717];
                        case "pi:PiChatCenteredSlashFill": return [3 /*break*/, 719];
                        case "pi:PiChatCenteredTextFill": return [3 /*break*/, 721];
                        case "pi:PiChatCircleDotsFill": return [3 /*break*/, 723];
                        case "pi:PiChatCircleFill": return [3 /*break*/, 725];
                        case "pi:PiChatCircleSlashFill": return [3 /*break*/, 727];
                        case "pi:PiChatCircleTextFill": return [3 /*break*/, 729];
                        case "pi:PiChatDotsFill": return [3 /*break*/, 731];
                        case "pi:PiChatFill": return [3 /*break*/, 733];
                        case "pi:PiChatSlashFill": return [3 /*break*/, 735];
                        case "pi:PiChatTeardropDotsFill": return [3 /*break*/, 737];
                        case "pi:PiChatTeardropFill": return [3 /*break*/, 739];
                        case "pi:PiChatTeardropSlashFill": return [3 /*break*/, 741];
                        case "pi:PiChatTeardropTextFill": return [3 /*break*/, 743];
                        case "pi:PiChatTextFill": return [3 /*break*/, 745];
                        case "pi:PiChatsCircleFill": return [3 /*break*/, 747];
                        case "pi:PiChatsFill": return [3 /*break*/, 749];
                        case "pi:PiChatsTeardropFill": return [3 /*break*/, 751];
                        case "pi:PiCheckCircleFill": return [3 /*break*/, 753];
                        case "pi:PiCheckFatFill": return [3 /*break*/, 755];
                        case "pi:PiCheckFill": return [3 /*break*/, 757];
                        case "pi:PiCheckSquareFill": return [3 /*break*/, 759];
                        case "pi:PiCheckSquareOffsetFill": return [3 /*break*/, 761];
                        case "pi:PiCheckerboardFill": return [3 /*break*/, 763];
                        case "pi:PiChecksFill": return [3 /*break*/, 765];
                        case "pi:PiCheersFill": return [3 /*break*/, 767];
                        case "pi:PiCheeseFill": return [3 /*break*/, 769];
                        case "pi:PiChefHatFill": return [3 /*break*/, 771];
                        case "pi:PiCherriesFill": return [3 /*break*/, 773];
                        case "pi:PiChurchFill": return [3 /*break*/, 775];
                        case "pi:PiCigaretteFill": return [3 /*break*/, 777];
                        case "pi:PiCigaretteSlashFill": return [3 /*break*/, 779];
                        case "pi:PiCircleDashedFill": return [3 /*break*/, 781];
                        case "pi:PiCircleFill": return [3 /*break*/, 783];
                        case "pi:PiCircleHalfFill": return [3 /*break*/, 785];
                        case "pi:PiCircleHalfTiltFill": return [3 /*break*/, 787];
                        case "pi:PiCircleNotchFill": return [3 /*break*/, 789];
                        case "pi:PiCirclesFourFill": return [3 /*break*/, 791];
                        case "pi:PiCirclesThreeFill": return [3 /*break*/, 793];
                        case "pi:PiCirclesThreePlusFill": return [3 /*break*/, 795];
                        case "pi:PiCircuitryFill": return [3 /*break*/, 797];
                        case "pi:PiCityFill": return [3 /*break*/, 799];
                        case "pi:PiClipboardFill": return [3 /*break*/, 801];
                        case "pi:PiClipboardTextFill": return [3 /*break*/, 803];
                        case "pi:PiClockAfternoonFill": return [3 /*break*/, 805];
                        case "pi:PiClockClockwiseFill": return [3 /*break*/, 807];
                        case "pi:PiClockCountdownFill": return [3 /*break*/, 809];
                        case "pi:PiClockCounterClockwiseFill": return [3 /*break*/, 811];
                        case "pi:PiClockFill": return [3 /*break*/, 813];
                        case "pi:PiClockUserFill": return [3 /*break*/, 815];
                        case "pi:PiClosedCaptioningFill": return [3 /*break*/, 817];
                        case "pi:PiCloudArrowDownFill": return [3 /*break*/, 819];
                        case "pi:PiCloudArrowUpFill": return [3 /*break*/, 821];
                        case "pi:PiCloudCheckFill": return [3 /*break*/, 823];
                        case "pi:PiCloudFill": return [3 /*break*/, 825];
                        case "pi:PiCloudFogFill": return [3 /*break*/, 827];
                        case "pi:PiCloudLightningFill": return [3 /*break*/, 829];
                        case "pi:PiCloudMoonFill": return [3 /*break*/, 831];
                        case "pi:PiCloudRainFill": return [3 /*break*/, 833];
                        case "pi:PiCloudSlashFill": return [3 /*break*/, 835];
                        case "pi:PiCloudSnowFill": return [3 /*break*/, 837];
                        case "pi:PiCloudSunFill": return [3 /*break*/, 839];
                        case "pi:PiCloudWarningFill": return [3 /*break*/, 841];
                        case "pi:PiCloudXFill": return [3 /*break*/, 843];
                        case "pi:PiCloverFill": return [3 /*break*/, 845];
                        case "pi:PiClubFill": return [3 /*break*/, 847];
                        case "pi:PiCoatHangerFill": return [3 /*break*/, 849];
                        case "pi:PiCodaLogoFill": return [3 /*break*/, 851];
                        case "pi:PiCodeBlockFill": return [3 /*break*/, 853];
                        case "pi:PiCodeFill": return [3 /*break*/, 855];
                        case "pi:PiCodeSimpleFill": return [3 /*break*/, 857];
                        case "pi:PiCodepenLogoFill": return [3 /*break*/, 859];
                        case "pi:PiCodesandboxLogoFill": return [3 /*break*/, 861];
                        case "pi:PiCoffeeBeanFill": return [3 /*break*/, 863];
                        case "pi:PiCoffeeFill": return [3 /*break*/, 865];
                        case "pi:PiCoinFill": return [3 /*break*/, 867];
                        case "pi:PiCoinVerticalFill": return [3 /*break*/, 869];
                        case "pi:PiCoinsFill": return [3 /*break*/, 871];
                        case "pi:PiColumnsFill": return [3 /*break*/, 873];
                        case "pi:PiColumnsPlusLeftFill": return [3 /*break*/, 875];
                        case "pi:PiColumnsPlusRightFill": return [3 /*break*/, 877];
                        case "pi:PiCommandFill": return [3 /*break*/, 879];
                        case "pi:PiCompassFill": return [3 /*break*/, 881];
                        case "pi:PiCompassRoseFill": return [3 /*break*/, 883];
                        case "pi:PiCompassToolFill": return [3 /*break*/, 885];
                        case "pi:PiComputerTowerFill": return [3 /*break*/, 887];
                        case "pi:PiConfettiFill": return [3 /*break*/, 889];
                        case "pi:PiContactlessPaymentFill": return [3 /*break*/, 891];
                        case "pi:PiControlFill": return [3 /*break*/, 893];
                        case "pi:PiCookieFill": return [3 /*break*/, 895];
                        case "pi:PiCookingPotFill": return [3 /*break*/, 897];
                        case "pi:PiCopyFill": return [3 /*break*/, 899];
                        case "pi:PiCopySimpleFill": return [3 /*break*/, 901];
                        case "pi:PiCopyleftFill": return [3 /*break*/, 903];
                        case "pi:PiCopyrightFill": return [3 /*break*/, 905];
                        case "pi:PiCornersInFill": return [3 /*break*/, 907];
                        case "pi:PiCornersOutFill": return [3 /*break*/, 909];
                        case "pi:PiCouchFill": return [3 /*break*/, 911];
                        case "pi:PiCourtBasketballFill": return [3 /*break*/, 913];
                        case "pi:PiCowFill": return [3 /*break*/, 915];
                        case "pi:PiCowboyHatFill": return [3 /*break*/, 917];
                        case "pi:PiCpuFill": return [3 /*break*/, 919];
                        case "pi:PiCraneFill": return [3 /*break*/, 921];
                        case "pi:PiCraneTowerFill": return [3 /*break*/, 923];
                        case "pi:PiCreditCardFill": return [3 /*break*/, 925];
                        case "pi:PiCricketFill": return [3 /*break*/, 927];
                        case "pi:PiCropFill": return [3 /*break*/, 929];
                        case "pi:PiCrossFill": return [3 /*break*/, 931];
                        case "pi:PiCrosshairFill": return [3 /*break*/, 933];
                        case "pi:PiCrosshairSimpleFill": return [3 /*break*/, 935];
                        case "pi:PiCrownCrossFill": return [3 /*break*/, 937];
                        case "pi:PiCrownFill": return [3 /*break*/, 939];
                        case "pi:PiCrownSimpleFill": return [3 /*break*/, 941];
                        case "pi:PiCubeFill": return [3 /*break*/, 943];
                        case "pi:PiCubeFocusFill": return [3 /*break*/, 945];
                        case "pi:PiCubeTransparentFill": return [3 /*break*/, 947];
                        case "pi:PiCurrencyBtcFill": return [3 /*break*/, 949];
                        case "pi:PiCurrencyCircleDollarFill": return [3 /*break*/, 951];
                        case "pi:PiCurrencyCnyFill": return [3 /*break*/, 953];
                        case "pi:PiCurrencyDollarFill": return [3 /*break*/, 955];
                        case "pi:PiCurrencyDollarSimpleFill": return [3 /*break*/, 957];
                        case "pi:PiCurrencyEthFill": return [3 /*break*/, 959];
                        case "pi:PiCurrencyEurFill": return [3 /*break*/, 961];
                        case "pi:PiCurrencyGbpFill": return [3 /*break*/, 963];
                        case "pi:PiCurrencyInrFill": return [3 /*break*/, 965];
                        case "pi:PiCurrencyJpyFill": return [3 /*break*/, 967];
                        case "pi:PiCurrencyKrwFill": return [3 /*break*/, 969];
                        case "pi:PiCurrencyKztFill": return [3 /*break*/, 971];
                        case "pi:PiCurrencyNgnFill": return [3 /*break*/, 973];
                        case "pi:PiCurrencyRubFill": return [3 /*break*/, 975];
                        case "pi:PiCursorClickFill": return [3 /*break*/, 977];
                        case "pi:PiCursorFill": return [3 /*break*/, 979];
                        case "pi:PiCursorTextFill": return [3 /*break*/, 981];
                        case "pi:PiCylinderFill": return [3 /*break*/, 983];
                        case "pi:PiDatabaseFill": return [3 /*break*/, 985];
                        case "pi:PiDeskFill": return [3 /*break*/, 987];
                        case "pi:PiDesktopFill": return [3 /*break*/, 989];
                        case "pi:PiDesktopTowerFill": return [3 /*break*/, 991];
                        case "pi:PiDetectiveFill": return [3 /*break*/, 993];
                        case "pi:PiDevToLogoFill": return [3 /*break*/, 995];
                        case "pi:PiDeviceMobileCameraFill": return [3 /*break*/, 997];
                        case "pi:PiDeviceMobileFill": return [3 /*break*/, 999];
                        case "pi:PiDeviceMobileSlashFill": return [3 /*break*/, 1001];
                        case "pi:PiDeviceMobileSpeakerFill": return [3 /*break*/, 1003];
                        case "pi:PiDeviceRotateFill": return [3 /*break*/, 1005];
                        case "pi:PiDeviceTabletCameraFill": return [3 /*break*/, 1007];
                        case "pi:PiDeviceTabletFill": return [3 /*break*/, 1009];
                        case "pi:PiDeviceTabletSpeakerFill": return [3 /*break*/, 1011];
                        case "pi:PiDevicesFill": return [3 /*break*/, 1013];
                        case "pi:PiDiamondFill": return [3 /*break*/, 1015];
                        case "pi:PiDiamondsFourFill": return [3 /*break*/, 1017];
                        case "pi:PiDiceFiveFill": return [3 /*break*/, 1019];
                        case "pi:PiDiceFourFill": return [3 /*break*/, 1021];
                        case "pi:PiDiceOneFill": return [3 /*break*/, 1023];
                        case "pi:PiDiceSixFill": return [3 /*break*/, 1025];
                        case "pi:PiDiceThreeFill": return [3 /*break*/, 1027];
                        case "pi:PiDiceTwoFill": return [3 /*break*/, 1029];
                        case "pi:PiDiscFill": return [3 /*break*/, 1031];
                        case "pi:PiDiscoBallFill": return [3 /*break*/, 1033];
                        case "pi:PiDiscordLogoFill": return [3 /*break*/, 1035];
                        case "pi:PiDivideFill": return [3 /*break*/, 1037];
                        case "pi:PiDnaFill": return [3 /*break*/, 1039];
                        case "pi:PiDogFill": return [3 /*break*/, 1041];
                        case "pi:PiDoorFill": return [3 /*break*/, 1043];
                        case "pi:PiDoorOpenFill": return [3 /*break*/, 1045];
                        case "pi:PiDotFill": return [3 /*break*/, 1047];
                        case "pi:PiDotOutlineFill": return [3 /*break*/, 1049];
                        case "pi:PiDotsNineFill": return [3 /*break*/, 1051];
                        case "pi:PiDotsSixFill": return [3 /*break*/, 1053];
                        case "pi:PiDotsSixVerticalFill": return [3 /*break*/, 1055];
                        case "pi:PiDotsThreeCircleFill": return [3 /*break*/, 1057];
                        case "pi:PiDotsThreeCircleVerticalFill": return [3 /*break*/, 1059];
                        case "pi:PiDotsThreeFill": return [3 /*break*/, 1061];
                        case "pi:PiDotsThreeOutlineFill": return [3 /*break*/, 1063];
                        case "pi:PiDotsThreeOutlineVerticalFill": return [3 /*break*/, 1065];
                        case "pi:PiDotsThreeVerticalFill": return [3 /*break*/, 1067];
                        case "pi:PiDownloadFill": return [3 /*break*/, 1069];
                        case "pi:PiDownloadSimpleFill": return [3 /*break*/, 1071];
                        case "pi:PiDressFill": return [3 /*break*/, 1073];
                        case "pi:PiDresserFill": return [3 /*break*/, 1075];
                        case "pi:PiDribbbleLogoFill": return [3 /*break*/, 1077];
                        case "pi:PiDroneFill": return [3 /*break*/, 1079];
                        case "pi:PiDropFill": return [3 /*break*/, 1081];
                        case "pi:PiDropHalfBottomFill": return [3 /*break*/, 1083];
                        case "pi:PiDropHalfFill": return [3 /*break*/, 1085];
                        case "pi:PiDropSimpleFill": return [3 /*break*/, 1087];
                        case "pi:PiDropSlashFill": return [3 /*break*/, 1089];
                        case "pi:PiDropboxLogoFill": return [3 /*break*/, 1091];
                        case "pi:PiEarFill": return [3 /*break*/, 1093];
                        case "pi:PiEarSlashFill": return [3 /*break*/, 1095];
                        case "pi:PiEggCrackFill": return [3 /*break*/, 1097];
                        case "pi:PiEggFill": return [3 /*break*/, 1099];
                        case "pi:PiEjectFill": return [3 /*break*/, 1101];
                        case "pi:PiEjectSimpleFill": return [3 /*break*/, 1103];
                        case "pi:PiElevatorFill": return [3 /*break*/, 1105];
                        case "pi:PiEmptyFill": return [3 /*break*/, 1107];
                        case "pi:PiEngineFill": return [3 /*break*/, 1109];
                        case "pi:PiEnvelopeFill": return [3 /*break*/, 1111];
                        case "pi:PiEnvelopeOpenFill": return [3 /*break*/, 1113];
                        case "pi:PiEnvelopeSimpleFill": return [3 /*break*/, 1115];
                        case "pi:PiEnvelopeSimpleOpenFill": return [3 /*break*/, 1117];
                        case "pi:PiEqualizerFill": return [3 /*break*/, 1119];
                        case "pi:PiEqualsFill": return [3 /*break*/, 1121];
                        case "pi:PiEraserFill": return [3 /*break*/, 1123];
                        case "pi:PiEscalatorDownFill": return [3 /*break*/, 1125];
                        case "pi:PiEscalatorUpFill": return [3 /*break*/, 1127];
                        case "pi:PiExamFill": return [3 /*break*/, 1129];
                        case "pi:PiExclamationMarkFill": return [3 /*break*/, 1131];
                        case "pi:PiExcludeFill": return [3 /*break*/, 1133];
                        case "pi:PiExcludeSquareFill": return [3 /*break*/, 1135];
                        case "pi:PiExportFill": return [3 /*break*/, 1137];
                        case "pi:PiEyeClosedFill": return [3 /*break*/, 1139];
                        case "pi:PiEyeFill": return [3 /*break*/, 1141];
                        case "pi:PiEyeSlashFill": return [3 /*break*/, 1143];
                        case "pi:PiEyedropperFill": return [3 /*break*/, 1145];
                        case "pi:PiEyedropperSampleFill": return [3 /*break*/, 1147];
                        case "pi:PiEyeglassesFill": return [3 /*break*/, 1149];
                        case "pi:PiEyesFill": return [3 /*break*/, 1151];
                        case "pi:PiFaceMaskFill": return [3 /*break*/, 1153];
                        case "pi:PiFacebookLogoFill": return [3 /*break*/, 1155];
                        case "pi:PiFactoryFill": return [3 /*break*/, 1157];
                        case "pi:PiFadersFill": return [3 /*break*/, 1159];
                        case "pi:PiFadersHorizontalFill": return [3 /*break*/, 1161];
                        case "pi:PiFalloutShelterFill": return [3 /*break*/, 1163];
                        case "pi:PiFanFill": return [3 /*break*/, 1165];
                        case "pi:PiFarmFill": return [3 /*break*/, 1167];
                        case "pi:PiFastForwardCircleFill": return [3 /*break*/, 1169];
                        case "pi:PiFastForwardFill": return [3 /*break*/, 1171];
                        case "pi:PiFeatherFill": return [3 /*break*/, 1173];
                        case "pi:PiFediverseLogoFill": return [3 /*break*/, 1175];
                        case "pi:PiFigmaLogoFill": return [3 /*break*/, 1177];
                        case "pi:PiFileArchiveFill": return [3 /*break*/, 1179];
                        case "pi:PiFileArrowDownFill": return [3 /*break*/, 1181];
                        case "pi:PiFileArrowUpFill": return [3 /*break*/, 1183];
                        case "pi:PiFileAudioFill": return [3 /*break*/, 1185];
                        case "pi:PiFileCFill": return [3 /*break*/, 1187];
                        case "pi:PiFileCSharpFill": return [3 /*break*/, 1189];
                        case "pi:PiFileCloudFill": return [3 /*break*/, 1191];
                        case "pi:PiFileCodeFill": return [3 /*break*/, 1193];
                        case "pi:PiFileCppFill": return [3 /*break*/, 1195];
                        case "pi:PiFileCssFill": return [3 /*break*/, 1197];
                        case "pi:PiFileCsvFill": return [3 /*break*/, 1199];
                        case "pi:PiFileDashedFill": return [3 /*break*/, 1201];
                        case "pi:PiFileDocFill": return [3 /*break*/, 1203];
                        case "pi:PiFileFill": return [3 /*break*/, 1205];
                        case "pi:PiFileHtmlFill": return [3 /*break*/, 1207];
                        case "pi:PiFileImageFill": return [3 /*break*/, 1209];
                        case "pi:PiFileIniFill": return [3 /*break*/, 1211];
                        case "pi:PiFileJpgFill": return [3 /*break*/, 1213];
                        case "pi:PiFileJsFill": return [3 /*break*/, 1215];
                        case "pi:PiFileJsxFill": return [3 /*break*/, 1217];
                        case "pi:PiFileLockFill": return [3 /*break*/, 1219];
                        case "pi:PiFileMagnifyingGlassFill": return [3 /*break*/, 1221];
                        case "pi:PiFileMdFill": return [3 /*break*/, 1223];
                        case "pi:PiFileMinusFill": return [3 /*break*/, 1225];
                        case "pi:PiFilePdfFill": return [3 /*break*/, 1227];
                        case "pi:PiFilePlusFill": return [3 /*break*/, 1229];
                        case "pi:PiFilePngFill": return [3 /*break*/, 1231];
                        case "pi:PiFilePptFill": return [3 /*break*/, 1233];
                        case "pi:PiFilePyFill": return [3 /*break*/, 1235];
                        case "pi:PiFileRsFill": return [3 /*break*/, 1237];
                        case "pi:PiFileSqlFill": return [3 /*break*/, 1239];
                        case "pi:PiFileSvgFill": return [3 /*break*/, 1241];
                        case "pi:PiFileTextFill": return [3 /*break*/, 1243];
                        case "pi:PiFileTsFill": return [3 /*break*/, 1245];
                        case "pi:PiFileTsxFill": return [3 /*break*/, 1247];
                        case "pi:PiFileTxtFill": return [3 /*break*/, 1249];
                        case "pi:PiFileVideoFill": return [3 /*break*/, 1251];
                        case "pi:PiFileVueFill": return [3 /*break*/, 1253];
                        case "pi:PiFileXFill": return [3 /*break*/, 1255];
                        case "pi:PiFileXlsFill": return [3 /*break*/, 1257];
                        case "pi:PiFileZipFill": return [3 /*break*/, 1259];
                        case "pi:PiFilesFill": return [3 /*break*/, 1261];
                        case "pi:PiFilmReelFill": return [3 /*break*/, 1263];
                        case "pi:PiFilmScriptFill": return [3 /*break*/, 1265];
                        case "pi:PiFilmSlateFill": return [3 /*break*/, 1267];
                        case "pi:PiFilmStripFill": return [3 /*break*/, 1269];
                        case "pi:PiFingerprintFill": return [3 /*break*/, 1271];
                        case "pi:PiFingerprintSimpleFill": return [3 /*break*/, 1273];
                        case "pi:PiFinnTheHumanFill": return [3 /*break*/, 1275];
                        case "pi:PiFireExtinguisherFill": return [3 /*break*/, 1277];
                        case "pi:PiFireFill": return [3 /*break*/, 1279];
                        case "pi:PiFireSimpleFill": return [3 /*break*/, 1281];
                        case "pi:PiFireTruckFill": return [3 /*break*/, 1283];
                        case "pi:PiFirstAidFill": return [3 /*break*/, 1285];
                        case "pi:PiFirstAidKitFill": return [3 /*break*/, 1287];
                        case "pi:PiFishFill": return [3 /*break*/, 1289];
                        case "pi:PiFishSimpleFill": return [3 /*break*/, 1291];
                        case "pi:PiFlagBannerFill": return [3 /*break*/, 1293];
                        case "pi:PiFlagBannerFoldFill": return [3 /*break*/, 1295];
                        case "pi:PiFlagCheckeredFill": return [3 /*break*/, 1297];
                        case "pi:PiFlagFill": return [3 /*break*/, 1299];
                        case "pi:PiFlagPennantFill": return [3 /*break*/, 1301];
                        case "pi:PiFlameFill": return [3 /*break*/, 1303];
                        case "pi:PiFlashlightFill": return [3 /*break*/, 1305];
                        case "pi:PiFlaskFill": return [3 /*break*/, 1307];
                        case "pi:PiFlipHorizontalFill": return [3 /*break*/, 1309];
                        case "pi:PiFlipVerticalFill": return [3 /*break*/, 1311];
                        case "pi:PiFloppyDiskBackFill": return [3 /*break*/, 1313];
                        case "pi:PiFloppyDiskFill": return [3 /*break*/, 1315];
                        case "pi:PiFlowArrowFill": return [3 /*break*/, 1317];
                        case "pi:PiFlowerFill": return [3 /*break*/, 1319];
                        case "pi:PiFlowerLotusFill": return [3 /*break*/, 1321];
                        case "pi:PiFlowerTulipFill": return [3 /*break*/, 1323];
                        case "pi:PiFlyingSaucerFill": return [3 /*break*/, 1325];
                        case "pi:PiFolderDashedFill": return [3 /*break*/, 1327];
                        case "pi:PiFolderFill": return [3 /*break*/, 1329];
                        case "pi:PiFolderLockFill": return [3 /*break*/, 1331];
                        case "pi:PiFolderMinusFill": return [3 /*break*/, 1333];
                        case "pi:PiFolderOpenFill": return [3 /*break*/, 1335];
                        case "pi:PiFolderPlusFill": return [3 /*break*/, 1337];
                        case "pi:PiFolderSimpleDashedFill": return [3 /*break*/, 1339];
                        case "pi:PiFolderSimpleFill": return [3 /*break*/, 1341];
                        case "pi:PiFolderSimpleLockFill": return [3 /*break*/, 1343];
                        case "pi:PiFolderSimpleMinusFill": return [3 /*break*/, 1345];
                        case "pi:PiFolderSimplePlusFill": return [3 /*break*/, 1347];
                        case "pi:PiFolderSimpleStarFill": return [3 /*break*/, 1349];
                        case "pi:PiFolderSimpleUserFill": return [3 /*break*/, 1351];
                        case "pi:PiFolderStarFill": return [3 /*break*/, 1353];
                        case "pi:PiFolderUserFill": return [3 /*break*/, 1355];
                        case "pi:PiFoldersFill": return [3 /*break*/, 1357];
                        case "pi:PiFootballFill": return [3 /*break*/, 1359];
                        case "pi:PiFootballHelmetFill": return [3 /*break*/, 1361];
                        case "pi:PiFootprintsFill": return [3 /*break*/, 1363];
                        case "pi:PiForkKnifeFill": return [3 /*break*/, 1365];
                        case "pi:PiFourKFill": return [3 /*break*/, 1367];
                        case "pi:PiFrameCornersFill": return [3 /*break*/, 1369];
                        case "pi:PiFramerLogoFill": return [3 /*break*/, 1371];
                        case "pi:PiFunctionFill": return [3 /*break*/, 1373];
                        case "pi:PiFunnelFill": return [3 /*break*/, 1375];
                        case "pi:PiFunnelSimpleFill": return [3 /*break*/, 1377];
                        case "pi:PiFunnelSimpleXFill": return [3 /*break*/, 1379];
                        case "pi:PiFunnelXFill": return [3 /*break*/, 1381];
                        case "pi:PiGameControllerFill": return [3 /*break*/, 1383];
                        case "pi:PiGarageFill": return [3 /*break*/, 1385];
                        case "pi:PiGasCanFill": return [3 /*break*/, 1387];
                        case "pi:PiGasPumpFill": return [3 /*break*/, 1389];
                        case "pi:PiGaugeFill": return [3 /*break*/, 1391];
                        case "pi:PiGavelFill": return [3 /*break*/, 1393];
                        case "pi:PiGearFill": return [3 /*break*/, 1395];
                        case "pi:PiGearFineFill": return [3 /*break*/, 1397];
                        case "pi:PiGearSixFill": return [3 /*break*/, 1399];
                        case "pi:PiGenderFemaleFill": return [3 /*break*/, 1401];
                        case "pi:PiGenderIntersexFill": return [3 /*break*/, 1403];
                        case "pi:PiGenderMaleFill": return [3 /*break*/, 1405];
                        case "pi:PiGenderNeuterFill": return [3 /*break*/, 1407];
                        case "pi:PiGenderNonbinaryFill": return [3 /*break*/, 1409];
                        case "pi:PiGenderTransgenderFill": return [3 /*break*/, 1411];
                        case "pi:PiGhostFill": return [3 /*break*/, 1413];
                        case "pi:PiGifFill": return [3 /*break*/, 1415];
                        case "pi:PiGiftFill": return [3 /*break*/, 1417];
                        case "pi:PiGitBranchFill": return [3 /*break*/, 1419];
                        case "pi:PiGitCommitFill": return [3 /*break*/, 1421];
                        case "pi:PiGitDiffFill": return [3 /*break*/, 1423];
                        case "pi:PiGitForkFill": return [3 /*break*/, 1425];
                        case "pi:PiGitMergeFill": return [3 /*break*/, 1427];
                        case "pi:PiGitPullRequestFill": return [3 /*break*/, 1429];
                        case "pi:PiGithubLogoFill": return [3 /*break*/, 1431];
                        case "pi:PiGitlabLogoFill": return [3 /*break*/, 1433];
                        case "pi:PiGitlabLogoSimpleFill": return [3 /*break*/, 1435];
                        case "pi:PiGlobeFill": return [3 /*break*/, 1437];
                        case "pi:PiGlobeHemisphereEastFill": return [3 /*break*/, 1439];
                        case "pi:PiGlobeHemisphereWestFill": return [3 /*break*/, 1441];
                        case "pi:PiGlobeSimpleFill": return [3 /*break*/, 1443];
                        case "pi:PiGlobeSimpleXFill": return [3 /*break*/, 1445];
                        case "pi:PiGlobeStandFill": return [3 /*break*/, 1447];
                        case "pi:PiGlobeXFill": return [3 /*break*/, 1449];
                        case "pi:PiGogglesFill": return [3 /*break*/, 1451];
                        case "pi:PiGolfFill": return [3 /*break*/, 1453];
                        case "pi:PiGoodreadsLogoFill": return [3 /*break*/, 1455];
                        case "pi:PiGoogleCardboardLogoFill": return [3 /*break*/, 1457];
                        case "pi:PiGoogleChromeLogoFill": return [3 /*break*/, 1459];
                        case "pi:PiGoogleDriveLogoFill": return [3 /*break*/, 1461];
                        case "pi:PiGoogleLogoFill": return [3 /*break*/, 1463];
                        case "pi:PiGooglePhotosLogoFill": return [3 /*break*/, 1465];
                        case "pi:PiGooglePlayLogoFill": return [3 /*break*/, 1467];
                        case "pi:PiGooglePodcastsLogoFill": return [3 /*break*/, 1469];
                        case "pi:PiGpsFill": return [3 /*break*/, 1471];
                        case "pi:PiGpsFixFill": return [3 /*break*/, 1473];
                        case "pi:PiGpsSlashFill": return [3 /*break*/, 1475];
                        case "pi:PiGradientFill": return [3 /*break*/, 1477];
                        case "pi:PiGraduationCapFill": return [3 /*break*/, 1479];
                        case "pi:PiGrainsFill": return [3 /*break*/, 1481];
                        case "pi:PiGrainsSlashFill": return [3 /*break*/, 1483];
                        case "pi:PiGraphFill": return [3 /*break*/, 1485];
                        case "pi:PiGraphicsCardFill": return [3 /*break*/, 1487];
                        case "pi:PiGreaterThanFill": return [3 /*break*/, 1489];
                        case "pi:PiGreaterThanOrEqualFill": return [3 /*break*/, 1491];
                        case "pi:PiGridFourFill": return [3 /*break*/, 1493];
                        case "pi:PiGridNineFill": return [3 /*break*/, 1495];
                        case "pi:PiGuitarFill": return [3 /*break*/, 1497];
                        case "pi:PiHairDryerFill": return [3 /*break*/, 1499];
                        case "pi:PiHamburgerFill": return [3 /*break*/, 1501];
                        case "pi:PiHammerFill": return [3 /*break*/, 1503];
                        case "pi:PiHandArrowDownFill": return [3 /*break*/, 1505];
                        case "pi:PiHandArrowUpFill": return [3 /*break*/, 1507];
                        case "pi:PiHandCoinsFill": return [3 /*break*/, 1509];
                        case "pi:PiHandDepositFill": return [3 /*break*/, 1511];
                        case "pi:PiHandEyeFill": return [3 /*break*/, 1513];
                        case "pi:PiHandFill": return [3 /*break*/, 1515];
                        case "pi:PiHandFistFill": return [3 /*break*/, 1517];
                        case "pi:PiHandGrabbingFill": return [3 /*break*/, 1519];
                        case "pi:PiHandHeartFill": return [3 /*break*/, 1521];
                        case "pi:PiHandPalmFill": return [3 /*break*/, 1523];
                        case "pi:PiHandPeaceFill": return [3 /*break*/, 1525];
                        case "pi:PiHandPointingFill": return [3 /*break*/, 1527];
                        case "pi:PiHandSoapFill": return [3 /*break*/, 1529];
                        case "pi:PiHandSwipeLeftFill": return [3 /*break*/, 1531];
                        case "pi:PiHandSwipeRightFill": return [3 /*break*/, 1533];
                        case "pi:PiHandTapFill": return [3 /*break*/, 1535];
                        case "pi:PiHandWavingFill": return [3 /*break*/, 1537];
                        case "pi:PiHandWithdrawFill": return [3 /*break*/, 1539];
                        case "pi:PiHandbagFill": return [3 /*break*/, 1541];
                        case "pi:PiHandbagSimpleFill": return [3 /*break*/, 1543];
                        case "pi:PiHandsClappingFill": return [3 /*break*/, 1545];
                        case "pi:PiHandsPrayingFill": return [3 /*break*/, 1547];
                        case "pi:PiHandshakeFill": return [3 /*break*/, 1549];
                        case "pi:PiHardDriveFill": return [3 /*break*/, 1551];
                        case "pi:PiHardDrivesFill": return [3 /*break*/, 1553];
                        case "pi:PiHardHatFill": return [3 /*break*/, 1555];
                        case "pi:PiHashFill": return [3 /*break*/, 1557];
                        case "pi:PiHashStraightFill": return [3 /*break*/, 1559];
                        case "pi:PiHeadCircuitFill": return [3 /*break*/, 1561];
                        case "pi:PiHeadlightsFill": return [3 /*break*/, 1563];
                        case "pi:PiHeadphonesFill": return [3 /*break*/, 1565];
                        case "pi:PiHeadsetFill": return [3 /*break*/, 1567];
                        case "pi:PiHeartBreakFill": return [3 /*break*/, 1569];
                        case "pi:PiHeartFill": return [3 /*break*/, 1571];
                        case "pi:PiHeartHalfFill": return [3 /*break*/, 1573];
                        case "pi:PiHeartStraightBreakFill": return [3 /*break*/, 1575];
                        case "pi:PiHeartStraightFill": return [3 /*break*/, 1577];
                        case "pi:PiHeartbeatFill": return [3 /*break*/, 1579];
                        case "pi:PiHexagonFill": return [3 /*break*/, 1581];
                        case "pi:PiHighDefinitionFill": return [3 /*break*/, 1583];
                        case "pi:PiHighHeelFill": return [3 /*break*/, 1585];
                        case "pi:PiHighlighterCircleFill": return [3 /*break*/, 1587];
                        case "pi:PiHighlighterFill": return [3 /*break*/, 1589];
                        case "pi:PiHockeyFill": return [3 /*break*/, 1591];
                        case "pi:PiHoodieFill": return [3 /*break*/, 1593];
                        case "pi:PiHorseFill": return [3 /*break*/, 1595];
                        case "pi:PiHospitalFill": return [3 /*break*/, 1597];
                        case "pi:PiHourglassFill": return [3 /*break*/, 1599];
                        case "pi:PiHourglassHighFill": return [3 /*break*/, 1601];
                        case "pi:PiHourglassLowFill": return [3 /*break*/, 1603];
                        case "pi:PiHourglassMediumFill": return [3 /*break*/, 1605];
                        case "pi:PiHourglassSimpleFill": return [3 /*break*/, 1607];
                        case "pi:PiHourglassSimpleHighFill": return [3 /*break*/, 1609];
                        case "pi:PiHourglassSimpleLowFill": return [3 /*break*/, 1611];
                        case "pi:PiHourglassSimpleMediumFill": return [3 /*break*/, 1613];
                        case "pi:PiHouseFill": return [3 /*break*/, 1615];
                        case "pi:PiHouseLineFill": return [3 /*break*/, 1617];
                        case "pi:PiHouseSimpleFill": return [3 /*break*/, 1619];
                        case "pi:PiHurricaneFill": return [3 /*break*/, 1621];
                        case "pi:PiIceCreamFill": return [3 /*break*/, 1623];
                        case "pi:PiIdentificationBadgeFill": return [3 /*break*/, 1625];
                        case "pi:PiIdentificationCardFill": return [3 /*break*/, 1627];
                        case "pi:PiImageBrokenFill": return [3 /*break*/, 1629];
                        case "pi:PiImageFill": return [3 /*break*/, 1631];
                        case "pi:PiImageSquareFill": return [3 /*break*/, 1633];
                        case "pi:PiImagesFill": return [3 /*break*/, 1635];
                        case "pi:PiImagesSquareFill": return [3 /*break*/, 1637];
                        case "pi:PiInfinityFill": return [3 /*break*/, 1639];
                        case "pi:PiInfoFill": return [3 /*break*/, 1641];
                        case "pi:PiInstagramLogoFill": return [3 /*break*/, 1643];
                        case "pi:PiIntersectFill": return [3 /*break*/, 1645];
                        case "pi:PiIntersectSquareFill": return [3 /*break*/, 1647];
                        case "pi:PiIntersectThreeFill": return [3 /*break*/, 1649];
                        case "pi:PiIntersectionFill": return [3 /*break*/, 1651];
                        case "pi:PiInvoiceFill": return [3 /*break*/, 1653];
                        case "pi:PiIslandFill": return [3 /*break*/, 1655];
                        case "pi:PiJarFill": return [3 /*break*/, 1657];
                        case "pi:PiJarLabelFill": return [3 /*break*/, 1659];
                        case "pi:PiJeepFill": return [3 /*break*/, 1661];
                        case "pi:PiJoystickFill": return [3 /*break*/, 1663];
                        case "pi:PiKanbanFill": return [3 /*break*/, 1665];
                        case "pi:PiKeyFill": return [3 /*break*/, 1667];
                        case "pi:PiKeyReturnFill": return [3 /*break*/, 1669];
                        case "pi:PiKeyboardFill": return [3 /*break*/, 1671];
                        case "pi:PiKeyholeFill": return [3 /*break*/, 1673];
                        case "pi:PiKnifeFill": return [3 /*break*/, 1675];
                        case "pi:PiLadderFill": return [3 /*break*/, 1677];
                        case "pi:PiLadderSimpleFill": return [3 /*break*/, 1679];
                        case "pi:PiLampFill": return [3 /*break*/, 1681];
                        case "pi:PiLampPendantFill": return [3 /*break*/, 1683];
                        case "pi:PiLaptopFill": return [3 /*break*/, 1685];
                        case "pi:PiLassoFill": return [3 /*break*/, 1687];
                        case "pi:PiLastfmLogoFill": return [3 /*break*/, 1689];
                        case "pi:PiLayoutFill": return [3 /*break*/, 1691];
                        case "pi:PiLeafFill": return [3 /*break*/, 1693];
                        case "pi:PiLecternFill": return [3 /*break*/, 1695];
                        case "pi:PiLegoFill": return [3 /*break*/, 1697];
                        case "pi:PiLegoSmileyFill": return [3 /*break*/, 1699];
                        case "pi:PiLessThanFill": return [3 /*break*/, 1701];
                        case "pi:PiLessThanOrEqualFill": return [3 /*break*/, 1703];
                        case "pi:PiLetterCircleHFill": return [3 /*break*/, 1705];
                        case "pi:PiLetterCirclePFill": return [3 /*break*/, 1707];
                        case "pi:PiLetterCircleVFill": return [3 /*break*/, 1709];
                        case "pi:PiLifebuoyFill": return [3 /*break*/, 1711];
                        case "pi:PiLightbulbFilamentFill": return [3 /*break*/, 1713];
                        case "pi:PiLightbulbFill": return [3 /*break*/, 1715];
                        case "pi:PiLighthouseFill": return [3 /*break*/, 1717];
                        case "pi:PiLightningAFill": return [3 /*break*/, 1719];
                        case "pi:PiLightningFill": return [3 /*break*/, 1721];
                        case "pi:PiLightningSlashFill": return [3 /*break*/, 1723];
                        case "pi:PiLineSegmentFill": return [3 /*break*/, 1725];
                        case "pi:PiLineSegmentsFill": return [3 /*break*/, 1727];
                        case "pi:PiLineVerticalFill": return [3 /*break*/, 1729];
                        case "pi:PiLinkBreakFill": return [3 /*break*/, 1731];
                        case "pi:PiLinkFill": return [3 /*break*/, 1733];
                        case "pi:PiLinkSimpleBreakFill": return [3 /*break*/, 1735];
                        case "pi:PiLinkSimpleFill": return [3 /*break*/, 1737];
                        case "pi:PiLinkSimpleHorizontalBreakFill": return [3 /*break*/, 1739];
                        case "pi:PiLinkSimpleHorizontalFill": return [3 /*break*/, 1741];
                        case "pi:PiLinkedinLogoFill": return [3 /*break*/, 1743];
                        case "pi:PiLinktreeLogoFill": return [3 /*break*/, 1745];
                        case "pi:PiLinuxLogoFill": return [3 /*break*/, 1747];
                        case "pi:PiListBulletsFill": return [3 /*break*/, 1749];
                        case "pi:PiListChecksFill": return [3 /*break*/, 1751];
                        case "pi:PiListDashesFill": return [3 /*break*/, 1753];
                        case "pi:PiListFill": return [3 /*break*/, 1755];
                        case "pi:PiListHeartFill": return [3 /*break*/, 1757];
                        case "pi:PiListMagnifyingGlassFill": return [3 /*break*/, 1759];
                        case "pi:PiListNumbersFill": return [3 /*break*/, 1761];
                        case "pi:PiListPlusFill": return [3 /*break*/, 1763];
                        case "pi:PiListStarFill": return [3 /*break*/, 1765];
                        case "pi:PiLockFill": return [3 /*break*/, 1767];
                        case "pi:PiLockKeyFill": return [3 /*break*/, 1769];
                        case "pi:PiLockKeyOpenFill": return [3 /*break*/, 1771];
                        case "pi:PiLockLaminatedFill": return [3 /*break*/, 1773];
                        case "pi:PiLockLaminatedOpenFill": return [3 /*break*/, 1775];
                        case "pi:PiLockOpenFill": return [3 /*break*/, 1777];
                        case "pi:PiLockSimpleFill": return [3 /*break*/, 1779];
                        case "pi:PiLockSimpleOpenFill": return [3 /*break*/, 1781];
                        case "pi:PiLockersFill": return [3 /*break*/, 1783];
                        case "pi:PiLogFill": return [3 /*break*/, 1785];
                        case "pi:PiMagicWandFill": return [3 /*break*/, 1787];
                        case "pi:PiMagnetFill": return [3 /*break*/, 1789];
                        case "pi:PiMagnetStraightFill": return [3 /*break*/, 1791];
                        case "pi:PiMagnifyingGlassFill": return [3 /*break*/, 1793];
                        case "pi:PiMagnifyingGlassMinusFill": return [3 /*break*/, 1795];
                        case "pi:PiMagnifyingGlassPlusFill": return [3 /*break*/, 1797];
                        case "pi:PiMailboxFill": return [3 /*break*/, 1799];
                        case "pi:PiMapPinAreaFill": return [3 /*break*/, 1801];
                        case "pi:PiMapPinFill": return [3 /*break*/, 1803];
                        case "pi:PiMapPinLineFill": return [3 /*break*/, 1805];
                        case "pi:PiMapPinPlusFill": return [3 /*break*/, 1807];
                        case "pi:PiMapPinSimpleAreaFill": return [3 /*break*/, 1809];
                        case "pi:PiMapPinSimpleFill": return [3 /*break*/, 1811];
                        case "pi:PiMapPinSimpleLineFill": return [3 /*break*/, 1813];
                        case "pi:PiMapTrifoldFill": return [3 /*break*/, 1815];
                        case "pi:PiMarkdownLogoFill": return [3 /*break*/, 1817];
                        case "pi:PiMarkerCircleFill": return [3 /*break*/, 1819];
                        case "pi:PiMartiniFill": return [3 /*break*/, 1821];
                        case "pi:PiMaskHappyFill": return [3 /*break*/, 1823];
                        case "pi:PiMaskSadFill": return [3 /*break*/, 1825];
                        case "pi:PiMastodonLogoFill": return [3 /*break*/, 1827];
                        case "pi:PiMathOperationsFill": return [3 /*break*/, 1829];
                        case "pi:PiMatrixLogoFill": return [3 /*break*/, 1831];
                        case "pi:PiMedalFill": return [3 /*break*/, 1833];
                        case "pi:PiMedalMilitaryFill": return [3 /*break*/, 1835];
                        case "pi:PiMediumLogoFill": return [3 /*break*/, 1837];
                        case "pi:PiMegaphoneFill": return [3 /*break*/, 1839];
                        case "pi:PiMegaphoneSimpleFill": return [3 /*break*/, 1841];
                        case "pi:PiMemberOfFill": return [3 /*break*/, 1843];
                        case "pi:PiMemoryFill": return [3 /*break*/, 1845];
                        case "pi:PiMessengerLogoFill": return [3 /*break*/, 1847];
                        case "pi:PiMetaLogoFill": return [3 /*break*/, 1849];
                        case "pi:PiMeteorFill": return [3 /*break*/, 1851];
                        case "pi:PiMetronomeFill": return [3 /*break*/, 1853];
                        case "pi:PiMicrophoneFill": return [3 /*break*/, 1855];
                        case "pi:PiMicrophoneSlashFill": return [3 /*break*/, 1857];
                        case "pi:PiMicrophoneStageFill": return [3 /*break*/, 1859];
                        case "pi:PiMicroscopeFill": return [3 /*break*/, 1861];
                        case "pi:PiMicrosoftExcelLogoFill": return [3 /*break*/, 1863];
                        case "pi:PiMicrosoftOutlookLogoFill": return [3 /*break*/, 1865];
                        case "pi:PiMicrosoftPowerpointLogoFill": return [3 /*break*/, 1867];
                        case "pi:PiMicrosoftTeamsLogoFill": return [3 /*break*/, 1869];
                        case "pi:PiMicrosoftWordLogoFill": return [3 /*break*/, 1871];
                        case "pi:PiMinusCircleFill": return [3 /*break*/, 1873];
                        case "pi:PiMinusFill": return [3 /*break*/, 1875];
                        case "pi:PiMinusSquareFill": return [3 /*break*/, 1877];
                        case "pi:PiMoneyFill": return [3 /*break*/, 1879];
                        case "pi:PiMoneyWavyFill": return [3 /*break*/, 1881];
                        case "pi:PiMonitorArrowUpFill": return [3 /*break*/, 1883];
                        case "pi:PiMonitorFill": return [3 /*break*/, 1885];
                        case "pi:PiMonitorPlayFill": return [3 /*break*/, 1887];
                        case "pi:PiMoonFill": return [3 /*break*/, 1889];
                        case "pi:PiMoonStarsFill": return [3 /*break*/, 1891];
                        case "pi:PiMopedFill": return [3 /*break*/, 1893];
                        case "pi:PiMopedFrontFill": return [3 /*break*/, 1895];
                        case "pi:PiMosqueFill": return [3 /*break*/, 1897];
                        case "pi:PiMotorcycleFill": return [3 /*break*/, 1899];
                        case "pi:PiMountainsFill": return [3 /*break*/, 1901];
                        case "pi:PiMouseFill": return [3 /*break*/, 1903];
                        case "pi:PiMouseLeftClickFill": return [3 /*break*/, 1905];
                        case "pi:PiMouseMiddleClickFill": return [3 /*break*/, 1907];
                        case "pi:PiMouseRightClickFill": return [3 /*break*/, 1909];
                        case "pi:PiMouseScrollFill": return [3 /*break*/, 1911];
                        case "pi:PiMouseSimpleFill": return [3 /*break*/, 1913];
                        case "pi:PiMusicNoteFill": return [3 /*break*/, 1915];
                        case "pi:PiMusicNoteSimpleFill": return [3 /*break*/, 1917];
                        case "pi:PiMusicNotesFill": return [3 /*break*/, 1919];
                        case "pi:PiMusicNotesMinusFill": return [3 /*break*/, 1921];
                        case "pi:PiMusicNotesPlusFill": return [3 /*break*/, 1923];
                        case "pi:PiMusicNotesSimpleFill": return [3 /*break*/, 1925];
                        case "pi:PiNavigationArrowFill": return [3 /*break*/, 1927];
                        case "pi:PiNeedleFill": return [3 /*break*/, 1929];
                        case "pi:PiNetworkFill": return [3 /*break*/, 1931];
                        case "pi:PiNetworkSlashFill": return [3 /*break*/, 1933];
                        case "pi:PiNetworkXFill": return [3 /*break*/, 1935];
                        case "pi:PiNewspaperClippingFill": return [3 /*break*/, 1937];
                        case "pi:PiNewspaperFill": return [3 /*break*/, 1939];
                        case "pi:PiNotEqualsFill": return [3 /*break*/, 1941];
                        case "pi:PiNotMemberOfFill": return [3 /*break*/, 1943];
                        case "pi:PiNotSubsetOfFill": return [3 /*break*/, 1945];
                        case "pi:PiNotSupersetOfFill": return [3 /*break*/, 1947];
                        case "pi:PiNotchesFill": return [3 /*break*/, 1949];
                        case "pi:PiNoteBlankFill": return [3 /*break*/, 1951];
                        case "pi:PiNoteFill": return [3 /*break*/, 1953];
                        case "pi:PiNotePencilFill": return [3 /*break*/, 1955];
                        case "pi:PiNotebookFill": return [3 /*break*/, 1957];
                        case "pi:PiNotepadFill": return [3 /*break*/, 1959];
                        case "pi:PiNotificationFill": return [3 /*break*/, 1961];
                        case "pi:PiNotionLogoFill": return [3 /*break*/, 1963];
                        case "pi:PiNuclearPlantFill": return [3 /*break*/, 1965];
                        case "pi:PiNumberCircleEightFill": return [3 /*break*/, 1967];
                        case "pi:PiNumberCircleFiveFill": return [3 /*break*/, 1969];
                        case "pi:PiNumberCircleFourFill": return [3 /*break*/, 1971];
                        case "pi:PiNumberCircleNineFill": return [3 /*break*/, 1973];
                        case "pi:PiNumberCircleOneFill": return [3 /*break*/, 1975];
                        case "pi:PiNumberCircleSevenFill": return [3 /*break*/, 1977];
                        case "pi:PiNumberCircleSixFill": return [3 /*break*/, 1979];
                        case "pi:PiNumberCircleThreeFill": return [3 /*break*/, 1981];
                        case "pi:PiNumberCircleTwoFill": return [3 /*break*/, 1983];
                        case "pi:PiNumberCircleZeroFill": return [3 /*break*/, 1985];
                        case "pi:PiNumberEightFill": return [3 /*break*/, 1987];
                        case "pi:PiNumberFiveFill": return [3 /*break*/, 1989];
                        case "pi:PiNumberFourFill": return [3 /*break*/, 1991];
                        case "pi:PiNumberNineFill": return [3 /*break*/, 1993];
                        case "pi:PiNumberOneFill": return [3 /*break*/, 1995];
                        case "pi:PiNumberSevenFill": return [3 /*break*/, 1997];
                        case "pi:PiNumberSixFill": return [3 /*break*/, 1999];
                    }
                    return [3 /*break*/, 2001];
                case 1: return [4 /*yield*/, import("react-icons/pi")];
                case 2:
                    PiWebcamSlashDuotone = (_b.sent()).PiWebcamSlashDuotone;
                    return [2 /*return*/, PiWebcamSlashDuotone];
                case 3: return [4 /*yield*/, import("react-icons/pi")];
                case 4:
                    PiWebhooksLogoDuotone = (_b.sent()).PiWebhooksLogoDuotone;
                    return [2 /*return*/, PiWebhooksLogoDuotone];
                case 5: return [4 /*yield*/, import("react-icons/pi")];
                case 6:
                    PiWechatLogoDuotone = (_b.sent()).PiWechatLogoDuotone;
                    return [2 /*return*/, PiWechatLogoDuotone];
                case 7: return [4 /*yield*/, import("react-icons/pi")];
                case 8:
                    PiWhatsappLogoDuotone = (_b.sent()).PiWhatsappLogoDuotone;
                    return [2 /*return*/, PiWhatsappLogoDuotone];
                case 9: return [4 /*yield*/, import("react-icons/pi")];
                case 10:
                    PiWheelchairDuotone = (_b.sent()).PiWheelchairDuotone;
                    return [2 /*return*/, PiWheelchairDuotone];
                case 11: return [4 /*yield*/, import("react-icons/pi")];
                case 12:
                    PiWheelchairMotionDuotone = (_b.sent()).PiWheelchairMotionDuotone;
                    return [2 /*return*/, PiWheelchairMotionDuotone];
                case 13: return [4 /*yield*/, import("react-icons/pi")];
                case 14:
                    PiWifiHighDuotone = (_b.sent()).PiWifiHighDuotone;
                    return [2 /*return*/, PiWifiHighDuotone];
                case 15: return [4 /*yield*/, import("react-icons/pi")];
                case 16:
                    PiWifiLowDuotone = (_b.sent()).PiWifiLowDuotone;
                    return [2 /*return*/, PiWifiLowDuotone];
                case 17: return [4 /*yield*/, import("react-icons/pi")];
                case 18:
                    PiWifiMediumDuotone = (_b.sent()).PiWifiMediumDuotone;
                    return [2 /*return*/, PiWifiMediumDuotone];
                case 19: return [4 /*yield*/, import("react-icons/pi")];
                case 20:
                    PiWifiNoneDuotone = (_b.sent()).PiWifiNoneDuotone;
                    return [2 /*return*/, PiWifiNoneDuotone];
                case 21: return [4 /*yield*/, import("react-icons/pi")];
                case 22:
                    PiWifiSlashDuotone = (_b.sent()).PiWifiSlashDuotone;
                    return [2 /*return*/, PiWifiSlashDuotone];
                case 23: return [4 /*yield*/, import("react-icons/pi")];
                case 24:
                    PiWifiXDuotone = (_b.sent()).PiWifiXDuotone;
                    return [2 /*return*/, PiWifiXDuotone];
                case 25: return [4 /*yield*/, import("react-icons/pi")];
                case 26:
                    PiWindDuotone = (_b.sent()).PiWindDuotone;
                    return [2 /*return*/, PiWindDuotone];
                case 27: return [4 /*yield*/, import("react-icons/pi")];
                case 28:
                    PiWindmillDuotone = (_b.sent()).PiWindmillDuotone;
                    return [2 /*return*/, PiWindmillDuotone];
                case 29: return [4 /*yield*/, import("react-icons/pi")];
                case 30:
                    PiWindowsLogoDuotone = (_b.sent()).PiWindowsLogoDuotone;
                    return [2 /*return*/, PiWindowsLogoDuotone];
                case 31: return [4 /*yield*/, import("react-icons/pi")];
                case 32:
                    PiWineDuotone = (_b.sent()).PiWineDuotone;
                    return [2 /*return*/, PiWineDuotone];
                case 33: return [4 /*yield*/, import("react-icons/pi")];
                case 34:
                    PiWrenchDuotone = (_b.sent()).PiWrenchDuotone;
                    return [2 /*return*/, PiWrenchDuotone];
                case 35: return [4 /*yield*/, import("react-icons/pi")];
                case 36:
                    PiXCircleDuotone = (_b.sent()).PiXCircleDuotone;
                    return [2 /*return*/, PiXCircleDuotone];
                case 37: return [4 /*yield*/, import("react-icons/pi")];
                case 38:
                    PiXDuotone = (_b.sent()).PiXDuotone;
                    return [2 /*return*/, PiXDuotone];
                case 39: return [4 /*yield*/, import("react-icons/pi")];
                case 40:
                    PiXLogoDuotone = (_b.sent()).PiXLogoDuotone;
                    return [2 /*return*/, PiXLogoDuotone];
                case 41: return [4 /*yield*/, import("react-icons/pi")];
                case 42:
                    PiXSquareDuotone = (_b.sent()).PiXSquareDuotone;
                    return [2 /*return*/, PiXSquareDuotone];
                case 43: return [4 /*yield*/, import("react-icons/pi")];
                case 44:
                    PiYarnDuotone = (_b.sent()).PiYarnDuotone;
                    return [2 /*return*/, PiYarnDuotone];
                case 45: return [4 /*yield*/, import("react-icons/pi")];
                case 46:
                    PiYinYangDuotone = (_b.sent()).PiYinYangDuotone;
                    return [2 /*return*/, PiYinYangDuotone];
                case 47: return [4 /*yield*/, import("react-icons/pi")];
                case 48:
                    PiYoutubeLogoDuotone = (_b.sent()).PiYoutubeLogoDuotone;
                    return [2 /*return*/, PiYoutubeLogoDuotone];
                case 49: return [4 /*yield*/, import("react-icons/pi")];
                case 50:
                    PiAcornFill = (_b.sent()).PiAcornFill;
                    return [2 /*return*/, PiAcornFill];
                case 51: return [4 /*yield*/, import("react-icons/pi")];
                case 52:
                    PiAddressBookFill = (_b.sent()).PiAddressBookFill;
                    return [2 /*return*/, PiAddressBookFill];
                case 53: return [4 /*yield*/, import("react-icons/pi")];
                case 54:
                    PiAddressBookTabsFill = (_b.sent()).PiAddressBookTabsFill;
                    return [2 /*return*/, PiAddressBookTabsFill];
                case 55: return [4 /*yield*/, import("react-icons/pi")];
                case 56:
                    PiAirTrafficControlFill = (_b.sent()).PiAirTrafficControlFill;
                    return [2 /*return*/, PiAirTrafficControlFill];
                case 57: return [4 /*yield*/, import("react-icons/pi")];
                case 58:
                    PiAirplaneFill = (_b.sent()).PiAirplaneFill;
                    return [2 /*return*/, PiAirplaneFill];
                case 59: return [4 /*yield*/, import("react-icons/pi")];
                case 60:
                    PiAirplaneInFlightFill = (_b.sent()).PiAirplaneInFlightFill;
                    return [2 /*return*/, PiAirplaneInFlightFill];
                case 61: return [4 /*yield*/, import("react-icons/pi")];
                case 62:
                    PiAirplaneLandingFill = (_b.sent()).PiAirplaneLandingFill;
                    return [2 /*return*/, PiAirplaneLandingFill];
                case 63: return [4 /*yield*/, import("react-icons/pi")];
                case 64:
                    PiAirplaneTakeoffFill = (_b.sent()).PiAirplaneTakeoffFill;
                    return [2 /*return*/, PiAirplaneTakeoffFill];
                case 65: return [4 /*yield*/, import("react-icons/pi")];
                case 66:
                    PiAirplaneTaxiingFill = (_b.sent()).PiAirplaneTaxiingFill;
                    return [2 /*return*/, PiAirplaneTaxiingFill];
                case 67: return [4 /*yield*/, import("react-icons/pi")];
                case 68:
                    PiAirplaneTiltFill = (_b.sent()).PiAirplaneTiltFill;
                    return [2 /*return*/, PiAirplaneTiltFill];
                case 69: return [4 /*yield*/, import("react-icons/pi")];
                case 70:
                    PiAirplayFill = (_b.sent()).PiAirplayFill;
                    return [2 /*return*/, PiAirplayFill];
                case 71: return [4 /*yield*/, import("react-icons/pi")];
                case 72:
                    PiAlarmFill = (_b.sent()).PiAlarmFill;
                    return [2 /*return*/, PiAlarmFill];
                case 73: return [4 /*yield*/, import("react-icons/pi")];
                case 74:
                    PiAlienFill = (_b.sent()).PiAlienFill;
                    return [2 /*return*/, PiAlienFill];
                case 75: return [4 /*yield*/, import("react-icons/pi")];
                case 76:
                    PiAlignBottomFill = (_b.sent()).PiAlignBottomFill;
                    return [2 /*return*/, PiAlignBottomFill];
                case 77: return [4 /*yield*/, import("react-icons/pi")];
                case 78:
                    PiAlignBottomSimpleFill = (_b.sent()).PiAlignBottomSimpleFill;
                    return [2 /*return*/, PiAlignBottomSimpleFill];
                case 79: return [4 /*yield*/, import("react-icons/pi")];
                case 80:
                    PiAlignCenterHorizontalFill = (_b.sent()).PiAlignCenterHorizontalFill;
                    return [2 /*return*/, PiAlignCenterHorizontalFill];
                case 81: return [4 /*yield*/, import("react-icons/pi")];
                case 82:
                    PiAlignCenterHorizontalSimpleFill = (_b.sent()).PiAlignCenterHorizontalSimpleFill;
                    return [2 /*return*/, PiAlignCenterHorizontalSimpleFill];
                case 83: return [4 /*yield*/, import("react-icons/pi")];
                case 84:
                    PiAlignCenterVerticalFill = (_b.sent()).PiAlignCenterVerticalFill;
                    return [2 /*return*/, PiAlignCenterVerticalFill];
                case 85: return [4 /*yield*/, import("react-icons/pi")];
                case 86:
                    PiAlignCenterVerticalSimpleFill = (_b.sent()).PiAlignCenterVerticalSimpleFill;
                    return [2 /*return*/, PiAlignCenterVerticalSimpleFill];
                case 87: return [4 /*yield*/, import("react-icons/pi")];
                case 88:
                    PiAlignLeftFill = (_b.sent()).PiAlignLeftFill;
                    return [2 /*return*/, PiAlignLeftFill];
                case 89: return [4 /*yield*/, import("react-icons/pi")];
                case 90:
                    PiAlignLeftSimpleFill = (_b.sent()).PiAlignLeftSimpleFill;
                    return [2 /*return*/, PiAlignLeftSimpleFill];
                case 91: return [4 /*yield*/, import("react-icons/pi")];
                case 92:
                    PiAlignRightFill = (_b.sent()).PiAlignRightFill;
                    return [2 /*return*/, PiAlignRightFill];
                case 93: return [4 /*yield*/, import("react-icons/pi")];
                case 94:
                    PiAlignRightSimpleFill = (_b.sent()).PiAlignRightSimpleFill;
                    return [2 /*return*/, PiAlignRightSimpleFill];
                case 95: return [4 /*yield*/, import("react-icons/pi")];
                case 96:
                    PiAlignTopFill = (_b.sent()).PiAlignTopFill;
                    return [2 /*return*/, PiAlignTopFill];
                case 97: return [4 /*yield*/, import("react-icons/pi")];
                case 98:
                    PiAlignTopSimpleFill = (_b.sent()).PiAlignTopSimpleFill;
                    return [2 /*return*/, PiAlignTopSimpleFill];
                case 99: return [4 /*yield*/, import("react-icons/pi")];
                case 100:
                    PiAmazonLogoFill = (_b.sent()).PiAmazonLogoFill;
                    return [2 /*return*/, PiAmazonLogoFill];
                case 101: return [4 /*yield*/, import("react-icons/pi")];
                case 102:
                    PiAmbulanceFill = (_b.sent()).PiAmbulanceFill;
                    return [2 /*return*/, PiAmbulanceFill];
                case 103: return [4 /*yield*/, import("react-icons/pi")];
                case 104:
                    PiAnchorFill = (_b.sent()).PiAnchorFill;
                    return [2 /*return*/, PiAnchorFill];
                case 105: return [4 /*yield*/, import("react-icons/pi")];
                case 106:
                    PiAnchorSimpleFill = (_b.sent()).PiAnchorSimpleFill;
                    return [2 /*return*/, PiAnchorSimpleFill];
                case 107: return [4 /*yield*/, import("react-icons/pi")];
                case 108:
                    PiAndroidLogoFill = (_b.sent()).PiAndroidLogoFill;
                    return [2 /*return*/, PiAndroidLogoFill];
                case 109: return [4 /*yield*/, import("react-icons/pi")];
                case 110:
                    PiAngleFill = (_b.sent()).PiAngleFill;
                    return [2 /*return*/, PiAngleFill];
                case 111: return [4 /*yield*/, import("react-icons/pi")];
                case 112:
                    PiAngularLogoFill = (_b.sent()).PiAngularLogoFill;
                    return [2 /*return*/, PiAngularLogoFill];
                case 113: return [4 /*yield*/, import("react-icons/pi")];
                case 114:
                    PiApertureFill = (_b.sent()).PiApertureFill;
                    return [2 /*return*/, PiApertureFill];
                case 115: return [4 /*yield*/, import("react-icons/pi")];
                case 116:
                    PiAppStoreLogoFill = (_b.sent()).PiAppStoreLogoFill;
                    return [2 /*return*/, PiAppStoreLogoFill];
                case 117: return [4 /*yield*/, import("react-icons/pi")];
                case 118:
                    PiAppWindowFill = (_b.sent()).PiAppWindowFill;
                    return [2 /*return*/, PiAppWindowFill];
                case 119: return [4 /*yield*/, import("react-icons/pi")];
                case 120:
                    PiAppleLogoFill = (_b.sent()).PiAppleLogoFill;
                    return [2 /*return*/, PiAppleLogoFill];
                case 121: return [4 /*yield*/, import("react-icons/pi")];
                case 122:
                    PiApplePodcastsLogoFill = (_b.sent()).PiApplePodcastsLogoFill;
                    return [2 /*return*/, PiApplePodcastsLogoFill];
                case 123: return [4 /*yield*/, import("react-icons/pi")];
                case 124:
                    PiApproximateEqualsFill = (_b.sent()).PiApproximateEqualsFill;
                    return [2 /*return*/, PiApproximateEqualsFill];
                case 125: return [4 /*yield*/, import("react-icons/pi")];
                case 126:
                    PiArchiveFill = (_b.sent()).PiArchiveFill;
                    return [2 /*return*/, PiArchiveFill];
                case 127: return [4 /*yield*/, import("react-icons/pi")];
                case 128:
                    PiArmchairFill = (_b.sent()).PiArmchairFill;
                    return [2 /*return*/, PiArmchairFill];
                case 129: return [4 /*yield*/, import("react-icons/pi")];
                case 130:
                    PiArrowArcLeftFill = (_b.sent()).PiArrowArcLeftFill;
                    return [2 /*return*/, PiArrowArcLeftFill];
                case 131: return [4 /*yield*/, import("react-icons/pi")];
                case 132:
                    PiArrowArcRightFill = (_b.sent()).PiArrowArcRightFill;
                    return [2 /*return*/, PiArrowArcRightFill];
                case 133: return [4 /*yield*/, import("react-icons/pi")];
                case 134:
                    PiArrowBendDoubleUpLeftFill = (_b.sent()).PiArrowBendDoubleUpLeftFill;
                    return [2 /*return*/, PiArrowBendDoubleUpLeftFill];
                case 135: return [4 /*yield*/, import("react-icons/pi")];
                case 136:
                    PiArrowBendDoubleUpRightFill = (_b.sent()).PiArrowBendDoubleUpRightFill;
                    return [2 /*return*/, PiArrowBendDoubleUpRightFill];
                case 137: return [4 /*yield*/, import("react-icons/pi")];
                case 138:
                    PiArrowBendDownLeftFill = (_b.sent()).PiArrowBendDownLeftFill;
                    return [2 /*return*/, PiArrowBendDownLeftFill];
                case 139: return [4 /*yield*/, import("react-icons/pi")];
                case 140:
                    PiArrowBendDownRightFill = (_b.sent()).PiArrowBendDownRightFill;
                    return [2 /*return*/, PiArrowBendDownRightFill];
                case 141: return [4 /*yield*/, import("react-icons/pi")];
                case 142:
                    PiArrowBendLeftDownFill = (_b.sent()).PiArrowBendLeftDownFill;
                    return [2 /*return*/, PiArrowBendLeftDownFill];
                case 143: return [4 /*yield*/, import("react-icons/pi")];
                case 144:
                    PiArrowBendLeftUpFill = (_b.sent()).PiArrowBendLeftUpFill;
                    return [2 /*return*/, PiArrowBendLeftUpFill];
                case 145: return [4 /*yield*/, import("react-icons/pi")];
                case 146:
                    PiArrowBendRightDownFill = (_b.sent()).PiArrowBendRightDownFill;
                    return [2 /*return*/, PiArrowBendRightDownFill];
                case 147: return [4 /*yield*/, import("react-icons/pi")];
                case 148:
                    PiArrowBendRightUpFill = (_b.sent()).PiArrowBendRightUpFill;
                    return [2 /*return*/, PiArrowBendRightUpFill];
                case 149: return [4 /*yield*/, import("react-icons/pi")];
                case 150:
                    PiArrowBendUpLeftFill = (_b.sent()).PiArrowBendUpLeftFill;
                    return [2 /*return*/, PiArrowBendUpLeftFill];
                case 151: return [4 /*yield*/, import("react-icons/pi")];
                case 152:
                    PiArrowBendUpRightFill = (_b.sent()).PiArrowBendUpRightFill;
                    return [2 /*return*/, PiArrowBendUpRightFill];
                case 153: return [4 /*yield*/, import("react-icons/pi")];
                case 154:
                    PiArrowCircleDownFill = (_b.sent()).PiArrowCircleDownFill;
                    return [2 /*return*/, PiArrowCircleDownFill];
                case 155: return [4 /*yield*/, import("react-icons/pi")];
                case 156:
                    PiArrowCircleDownLeftFill = (_b.sent()).PiArrowCircleDownLeftFill;
                    return [2 /*return*/, PiArrowCircleDownLeftFill];
                case 157: return [4 /*yield*/, import("react-icons/pi")];
                case 158:
                    PiArrowCircleDownRightFill = (_b.sent()).PiArrowCircleDownRightFill;
                    return [2 /*return*/, PiArrowCircleDownRightFill];
                case 159: return [4 /*yield*/, import("react-icons/pi")];
                case 160:
                    PiArrowCircleLeftFill = (_b.sent()).PiArrowCircleLeftFill;
                    return [2 /*return*/, PiArrowCircleLeftFill];
                case 161: return [4 /*yield*/, import("react-icons/pi")];
                case 162:
                    PiArrowCircleRightFill = (_b.sent()).PiArrowCircleRightFill;
                    return [2 /*return*/, PiArrowCircleRightFill];
                case 163: return [4 /*yield*/, import("react-icons/pi")];
                case 164:
                    PiArrowCircleUpFill = (_b.sent()).PiArrowCircleUpFill;
                    return [2 /*return*/, PiArrowCircleUpFill];
                case 165: return [4 /*yield*/, import("react-icons/pi")];
                case 166:
                    PiArrowCircleUpLeftFill = (_b.sent()).PiArrowCircleUpLeftFill;
                    return [2 /*return*/, PiArrowCircleUpLeftFill];
                case 167: return [4 /*yield*/, import("react-icons/pi")];
                case 168:
                    PiArrowCircleUpRightFill = (_b.sent()).PiArrowCircleUpRightFill;
                    return [2 /*return*/, PiArrowCircleUpRightFill];
                case 169: return [4 /*yield*/, import("react-icons/pi")];
                case 170:
                    PiArrowClockwiseFill = (_b.sent()).PiArrowClockwiseFill;
                    return [2 /*return*/, PiArrowClockwiseFill];
                case 171: return [4 /*yield*/, import("react-icons/pi")];
                case 172:
                    PiArrowCounterClockwiseFill = (_b.sent()).PiArrowCounterClockwiseFill;
                    return [2 /*return*/, PiArrowCounterClockwiseFill];
                case 173: return [4 /*yield*/, import("react-icons/pi")];
                case 174:
                    PiArrowDownFill = (_b.sent()).PiArrowDownFill;
                    return [2 /*return*/, PiArrowDownFill];
                case 175: return [4 /*yield*/, import("react-icons/pi")];
                case 176:
                    PiArrowDownLeftFill = (_b.sent()).PiArrowDownLeftFill;
                    return [2 /*return*/, PiArrowDownLeftFill];
                case 177: return [4 /*yield*/, import("react-icons/pi")];
                case 178:
                    PiArrowDownRightFill = (_b.sent()).PiArrowDownRightFill;
                    return [2 /*return*/, PiArrowDownRightFill];
                case 179: return [4 /*yield*/, import("react-icons/pi")];
                case 180:
                    PiArrowElbowDownLeftFill = (_b.sent()).PiArrowElbowDownLeftFill;
                    return [2 /*return*/, PiArrowElbowDownLeftFill];
                case 181: return [4 /*yield*/, import("react-icons/pi")];
                case 182:
                    PiArrowElbowDownRightFill = (_b.sent()).PiArrowElbowDownRightFill;
                    return [2 /*return*/, PiArrowElbowDownRightFill];
                case 183: return [4 /*yield*/, import("react-icons/pi")];
                case 184:
                    PiArrowElbowLeftDownFill = (_b.sent()).PiArrowElbowLeftDownFill;
                    return [2 /*return*/, PiArrowElbowLeftDownFill];
                case 185: return [4 /*yield*/, import("react-icons/pi")];
                case 186:
                    PiArrowElbowLeftFill = (_b.sent()).PiArrowElbowLeftFill;
                    return [2 /*return*/, PiArrowElbowLeftFill];
                case 187: return [4 /*yield*/, import("react-icons/pi")];
                case 188:
                    PiArrowElbowLeftUpFill = (_b.sent()).PiArrowElbowLeftUpFill;
                    return [2 /*return*/, PiArrowElbowLeftUpFill];
                case 189: return [4 /*yield*/, import("react-icons/pi")];
                case 190:
                    PiArrowElbowRightDownFill = (_b.sent()).PiArrowElbowRightDownFill;
                    return [2 /*return*/, PiArrowElbowRightDownFill];
                case 191: return [4 /*yield*/, import("react-icons/pi")];
                case 192:
                    PiArrowElbowRightFill = (_b.sent()).PiArrowElbowRightFill;
                    return [2 /*return*/, PiArrowElbowRightFill];
                case 193: return [4 /*yield*/, import("react-icons/pi")];
                case 194:
                    PiArrowElbowRightUpFill = (_b.sent()).PiArrowElbowRightUpFill;
                    return [2 /*return*/, PiArrowElbowRightUpFill];
                case 195: return [4 /*yield*/, import("react-icons/pi")];
                case 196:
                    PiArrowElbowUpLeftFill = (_b.sent()).PiArrowElbowUpLeftFill;
                    return [2 /*return*/, PiArrowElbowUpLeftFill];
                case 197: return [4 /*yield*/, import("react-icons/pi")];
                case 198:
                    PiArrowElbowUpRightFill = (_b.sent()).PiArrowElbowUpRightFill;
                    return [2 /*return*/, PiArrowElbowUpRightFill];
                case 199: return [4 /*yield*/, import("react-icons/pi")];
                case 200:
                    PiArrowFatDownFill = (_b.sent()).PiArrowFatDownFill;
                    return [2 /*return*/, PiArrowFatDownFill];
                case 201: return [4 /*yield*/, import("react-icons/pi")];
                case 202:
                    PiArrowFatLeftFill = (_b.sent()).PiArrowFatLeftFill;
                    return [2 /*return*/, PiArrowFatLeftFill];
                case 203: return [4 /*yield*/, import("react-icons/pi")];
                case 204:
                    PiArrowFatLineDownFill = (_b.sent()).PiArrowFatLineDownFill;
                    return [2 /*return*/, PiArrowFatLineDownFill];
                case 205: return [4 /*yield*/, import("react-icons/pi")];
                case 206:
                    PiArrowFatLineLeftFill = (_b.sent()).PiArrowFatLineLeftFill;
                    return [2 /*return*/, PiArrowFatLineLeftFill];
                case 207: return [4 /*yield*/, import("react-icons/pi")];
                case 208:
                    PiArrowFatLineRightFill = (_b.sent()).PiArrowFatLineRightFill;
                    return [2 /*return*/, PiArrowFatLineRightFill];
                case 209: return [4 /*yield*/, import("react-icons/pi")];
                case 210:
                    PiArrowFatLineUpFill = (_b.sent()).PiArrowFatLineUpFill;
                    return [2 /*return*/, PiArrowFatLineUpFill];
                case 211: return [4 /*yield*/, import("react-icons/pi")];
                case 212:
                    PiArrowFatLinesDownFill = (_b.sent()).PiArrowFatLinesDownFill;
                    return [2 /*return*/, PiArrowFatLinesDownFill];
                case 213: return [4 /*yield*/, import("react-icons/pi")];
                case 214:
                    PiArrowFatLinesLeftFill = (_b.sent()).PiArrowFatLinesLeftFill;
                    return [2 /*return*/, PiArrowFatLinesLeftFill];
                case 215: return [4 /*yield*/, import("react-icons/pi")];
                case 216:
                    PiArrowFatLinesRightFill = (_b.sent()).PiArrowFatLinesRightFill;
                    return [2 /*return*/, PiArrowFatLinesRightFill];
                case 217: return [4 /*yield*/, import("react-icons/pi")];
                case 218:
                    PiArrowFatLinesUpFill = (_b.sent()).PiArrowFatLinesUpFill;
                    return [2 /*return*/, PiArrowFatLinesUpFill];
                case 219: return [4 /*yield*/, import("react-icons/pi")];
                case 220:
                    PiArrowFatRightFill = (_b.sent()).PiArrowFatRightFill;
                    return [2 /*return*/, PiArrowFatRightFill];
                case 221: return [4 /*yield*/, import("react-icons/pi")];
                case 222:
                    PiArrowFatUpFill = (_b.sent()).PiArrowFatUpFill;
                    return [2 /*return*/, PiArrowFatUpFill];
                case 223: return [4 /*yield*/, import("react-icons/pi")];
                case 224:
                    PiArrowLeftFill = (_b.sent()).PiArrowLeftFill;
                    return [2 /*return*/, PiArrowLeftFill];
                case 225: return [4 /*yield*/, import("react-icons/pi")];
                case 226:
                    PiArrowLineDownFill = (_b.sent()).PiArrowLineDownFill;
                    return [2 /*return*/, PiArrowLineDownFill];
                case 227: return [4 /*yield*/, import("react-icons/pi")];
                case 228:
                    PiArrowLineDownLeftFill = (_b.sent()).PiArrowLineDownLeftFill;
                    return [2 /*return*/, PiArrowLineDownLeftFill];
                case 229: return [4 /*yield*/, import("react-icons/pi")];
                case 230:
                    PiArrowLineDownRightFill = (_b.sent()).PiArrowLineDownRightFill;
                    return [2 /*return*/, PiArrowLineDownRightFill];
                case 231: return [4 /*yield*/, import("react-icons/pi")];
                case 232:
                    PiArrowLineLeftFill = (_b.sent()).PiArrowLineLeftFill;
                    return [2 /*return*/, PiArrowLineLeftFill];
                case 233: return [4 /*yield*/, import("react-icons/pi")];
                case 234:
                    PiArrowLineRightFill = (_b.sent()).PiArrowLineRightFill;
                    return [2 /*return*/, PiArrowLineRightFill];
                case 235: return [4 /*yield*/, import("react-icons/pi")];
                case 236:
                    PiArrowLineUpFill = (_b.sent()).PiArrowLineUpFill;
                    return [2 /*return*/, PiArrowLineUpFill];
                case 237: return [4 /*yield*/, import("react-icons/pi")];
                case 238:
                    PiArrowLineUpLeftFill = (_b.sent()).PiArrowLineUpLeftFill;
                    return [2 /*return*/, PiArrowLineUpLeftFill];
                case 239: return [4 /*yield*/, import("react-icons/pi")];
                case 240:
                    PiArrowLineUpRightFill = (_b.sent()).PiArrowLineUpRightFill;
                    return [2 /*return*/, PiArrowLineUpRightFill];
                case 241: return [4 /*yield*/, import("react-icons/pi")];
                case 242:
                    PiArrowRightFill = (_b.sent()).PiArrowRightFill;
                    return [2 /*return*/, PiArrowRightFill];
                case 243: return [4 /*yield*/, import("react-icons/pi")];
                case 244:
                    PiArrowSquareDownFill = (_b.sent()).PiArrowSquareDownFill;
                    return [2 /*return*/, PiArrowSquareDownFill];
                case 245: return [4 /*yield*/, import("react-icons/pi")];
                case 246:
                    PiArrowSquareDownLeftFill = (_b.sent()).PiArrowSquareDownLeftFill;
                    return [2 /*return*/, PiArrowSquareDownLeftFill];
                case 247: return [4 /*yield*/, import("react-icons/pi")];
                case 248:
                    PiArrowSquareDownRightFill = (_b.sent()).PiArrowSquareDownRightFill;
                    return [2 /*return*/, PiArrowSquareDownRightFill];
                case 249: return [4 /*yield*/, import("react-icons/pi")];
                case 250:
                    PiArrowSquareInFill = (_b.sent()).PiArrowSquareInFill;
                    return [2 /*return*/, PiArrowSquareInFill];
                case 251: return [4 /*yield*/, import("react-icons/pi")];
                case 252:
                    PiArrowSquareLeftFill = (_b.sent()).PiArrowSquareLeftFill;
                    return [2 /*return*/, PiArrowSquareLeftFill];
                case 253: return [4 /*yield*/, import("react-icons/pi")];
                case 254:
                    PiArrowSquareOutFill = (_b.sent()).PiArrowSquareOutFill;
                    return [2 /*return*/, PiArrowSquareOutFill];
                case 255: return [4 /*yield*/, import("react-icons/pi")];
                case 256:
                    PiArrowSquareRightFill = (_b.sent()).PiArrowSquareRightFill;
                    return [2 /*return*/, PiArrowSquareRightFill];
                case 257: return [4 /*yield*/, import("react-icons/pi")];
                case 258:
                    PiArrowSquareUpFill = (_b.sent()).PiArrowSquareUpFill;
                    return [2 /*return*/, PiArrowSquareUpFill];
                case 259: return [4 /*yield*/, import("react-icons/pi")];
                case 260:
                    PiArrowSquareUpLeftFill = (_b.sent()).PiArrowSquareUpLeftFill;
                    return [2 /*return*/, PiArrowSquareUpLeftFill];
                case 261: return [4 /*yield*/, import("react-icons/pi")];
                case 262:
                    PiArrowSquareUpRightFill = (_b.sent()).PiArrowSquareUpRightFill;
                    return [2 /*return*/, PiArrowSquareUpRightFill];
                case 263: return [4 /*yield*/, import("react-icons/pi")];
                case 264:
                    PiArrowUDownLeftFill = (_b.sent()).PiArrowUDownLeftFill;
                    return [2 /*return*/, PiArrowUDownLeftFill];
                case 265: return [4 /*yield*/, import("react-icons/pi")];
                case 266:
                    PiArrowUDownRightFill = (_b.sent()).PiArrowUDownRightFill;
                    return [2 /*return*/, PiArrowUDownRightFill];
                case 267: return [4 /*yield*/, import("react-icons/pi")];
                case 268:
                    PiArrowULeftDownFill = (_b.sent()).PiArrowULeftDownFill;
                    return [2 /*return*/, PiArrowULeftDownFill];
                case 269: return [4 /*yield*/, import("react-icons/pi")];
                case 270:
                    PiArrowULeftUpFill = (_b.sent()).PiArrowULeftUpFill;
                    return [2 /*return*/, PiArrowULeftUpFill];
                case 271: return [4 /*yield*/, import("react-icons/pi")];
                case 272:
                    PiArrowURightDownFill = (_b.sent()).PiArrowURightDownFill;
                    return [2 /*return*/, PiArrowURightDownFill];
                case 273: return [4 /*yield*/, import("react-icons/pi")];
                case 274:
                    PiArrowURightUpFill = (_b.sent()).PiArrowURightUpFill;
                    return [2 /*return*/, PiArrowURightUpFill];
                case 275: return [4 /*yield*/, import("react-icons/pi")];
                case 276:
                    PiArrowUUpLeftFill = (_b.sent()).PiArrowUUpLeftFill;
                    return [2 /*return*/, PiArrowUUpLeftFill];
                case 277: return [4 /*yield*/, import("react-icons/pi")];
                case 278:
                    PiArrowUUpRightFill = (_b.sent()).PiArrowUUpRightFill;
                    return [2 /*return*/, PiArrowUUpRightFill];
                case 279: return [4 /*yield*/, import("react-icons/pi")];
                case 280:
                    PiArrowUpFill = (_b.sent()).PiArrowUpFill;
                    return [2 /*return*/, PiArrowUpFill];
                case 281: return [4 /*yield*/, import("react-icons/pi")];
                case 282:
                    PiArrowUpLeftFill = (_b.sent()).PiArrowUpLeftFill;
                    return [2 /*return*/, PiArrowUpLeftFill];
                case 283: return [4 /*yield*/, import("react-icons/pi")];
                case 284:
                    PiArrowUpRightFill = (_b.sent()).PiArrowUpRightFill;
                    return [2 /*return*/, PiArrowUpRightFill];
                case 285: return [4 /*yield*/, import("react-icons/pi")];
                case 286:
                    PiArrowsClockwiseFill = (_b.sent()).PiArrowsClockwiseFill;
                    return [2 /*return*/, PiArrowsClockwiseFill];
                case 287: return [4 /*yield*/, import("react-icons/pi")];
                case 288:
                    PiArrowsCounterClockwiseFill = (_b.sent()).PiArrowsCounterClockwiseFill;
                    return [2 /*return*/, PiArrowsCounterClockwiseFill];
                case 289: return [4 /*yield*/, import("react-icons/pi")];
                case 290:
                    PiArrowsDownUpFill = (_b.sent()).PiArrowsDownUpFill;
                    return [2 /*return*/, PiArrowsDownUpFill];
                case 291: return [4 /*yield*/, import("react-icons/pi")];
                case 292:
                    PiArrowsHorizontalFill = (_b.sent()).PiArrowsHorizontalFill;
                    return [2 /*return*/, PiArrowsHorizontalFill];
                case 293: return [4 /*yield*/, import("react-icons/pi")];
                case 294:
                    PiArrowsInCardinalFill = (_b.sent()).PiArrowsInCardinalFill;
                    return [2 /*return*/, PiArrowsInCardinalFill];
                case 295: return [4 /*yield*/, import("react-icons/pi")];
                case 296:
                    PiArrowsInFill = (_b.sent()).PiArrowsInFill;
                    return [2 /*return*/, PiArrowsInFill];
                case 297: return [4 /*yield*/, import("react-icons/pi")];
                case 298:
                    PiArrowsInLineHorizontalFill = (_b.sent()).PiArrowsInLineHorizontalFill;
                    return [2 /*return*/, PiArrowsInLineHorizontalFill];
                case 299: return [4 /*yield*/, import("react-icons/pi")];
                case 300:
                    PiArrowsInLineVerticalFill = (_b.sent()).PiArrowsInLineVerticalFill;
                    return [2 /*return*/, PiArrowsInLineVerticalFill];
                case 301: return [4 /*yield*/, import("react-icons/pi")];
                case 302:
                    PiArrowsInSimpleFill = (_b.sent()).PiArrowsInSimpleFill;
                    return [2 /*return*/, PiArrowsInSimpleFill];
                case 303: return [4 /*yield*/, import("react-icons/pi")];
                case 304:
                    PiArrowsLeftRightFill = (_b.sent()).PiArrowsLeftRightFill;
                    return [2 /*return*/, PiArrowsLeftRightFill];
                case 305: return [4 /*yield*/, import("react-icons/pi")];
                case 306:
                    PiArrowsMergeFill = (_b.sent()).PiArrowsMergeFill;
                    return [2 /*return*/, PiArrowsMergeFill];
                case 307: return [4 /*yield*/, import("react-icons/pi")];
                case 308:
                    PiArrowsOutCardinalFill = (_b.sent()).PiArrowsOutCardinalFill;
                    return [2 /*return*/, PiArrowsOutCardinalFill];
                case 309: return [4 /*yield*/, import("react-icons/pi")];
                case 310:
                    PiArrowsOutFill = (_b.sent()).PiArrowsOutFill;
                    return [2 /*return*/, PiArrowsOutFill];
                case 311: return [4 /*yield*/, import("react-icons/pi")];
                case 312:
                    PiArrowsOutLineHorizontalFill = (_b.sent()).PiArrowsOutLineHorizontalFill;
                    return [2 /*return*/, PiArrowsOutLineHorizontalFill];
                case 313: return [4 /*yield*/, import("react-icons/pi")];
                case 314:
                    PiArrowsOutLineVerticalFill = (_b.sent()).PiArrowsOutLineVerticalFill;
                    return [2 /*return*/, PiArrowsOutLineVerticalFill];
                case 315: return [4 /*yield*/, import("react-icons/pi")];
                case 316:
                    PiArrowsOutSimpleFill = (_b.sent()).PiArrowsOutSimpleFill;
                    return [2 /*return*/, PiArrowsOutSimpleFill];
                case 317: return [4 /*yield*/, import("react-icons/pi")];
                case 318:
                    PiArrowsSplitFill = (_b.sent()).PiArrowsSplitFill;
                    return [2 /*return*/, PiArrowsSplitFill];
                case 319: return [4 /*yield*/, import("react-icons/pi")];
                case 320:
                    PiArrowsVerticalFill = (_b.sent()).PiArrowsVerticalFill;
                    return [2 /*return*/, PiArrowsVerticalFill];
                case 321: return [4 /*yield*/, import("react-icons/pi")];
                case 322:
                    PiArticleFill = (_b.sent()).PiArticleFill;
                    return [2 /*return*/, PiArticleFill];
                case 323: return [4 /*yield*/, import("react-icons/pi")];
                case 324:
                    PiArticleMediumFill = (_b.sent()).PiArticleMediumFill;
                    return [2 /*return*/, PiArticleMediumFill];
                case 325: return [4 /*yield*/, import("react-icons/pi")];
                case 326:
                    PiArticleNyTimesFill = (_b.sent()).PiArticleNyTimesFill;
                    return [2 /*return*/, PiArticleNyTimesFill];
                case 327: return [4 /*yield*/, import("react-icons/pi")];
                case 328:
                    PiAsclepiusFill = (_b.sent()).PiAsclepiusFill;
                    return [2 /*return*/, PiAsclepiusFill];
                case 329: return [4 /*yield*/, import("react-icons/pi")];
                case 330:
                    PiAsteriskFill = (_b.sent()).PiAsteriskFill;
                    return [2 /*return*/, PiAsteriskFill];
                case 331: return [4 /*yield*/, import("react-icons/pi")];
                case 332:
                    PiAsteriskSimpleFill = (_b.sent()).PiAsteriskSimpleFill;
                    return [2 /*return*/, PiAsteriskSimpleFill];
                case 333: return [4 /*yield*/, import("react-icons/pi")];
                case 334:
                    PiAtFill = (_b.sent()).PiAtFill;
                    return [2 /*return*/, PiAtFill];
                case 335: return [4 /*yield*/, import("react-icons/pi")];
                case 336:
                    PiAtomFill = (_b.sent()).PiAtomFill;
                    return [2 /*return*/, PiAtomFill];
                case 337: return [4 /*yield*/, import("react-icons/pi")];
                case 338:
                    PiAvocadoFill = (_b.sent()).PiAvocadoFill;
                    return [2 /*return*/, PiAvocadoFill];
                case 339: return [4 /*yield*/, import("react-icons/pi")];
                case 340:
                    PiAxeFill = (_b.sent()).PiAxeFill;
                    return [2 /*return*/, PiAxeFill];
                case 341: return [4 /*yield*/, import("react-icons/pi")];
                case 342:
                    PiBabyCarriageFill = (_b.sent()).PiBabyCarriageFill;
                    return [2 /*return*/, PiBabyCarriageFill];
                case 343: return [4 /*yield*/, import("react-icons/pi")];
                case 344:
                    PiBabyFill = (_b.sent()).PiBabyFill;
                    return [2 /*return*/, PiBabyFill];
                case 345: return [4 /*yield*/, import("react-icons/pi")];
                case 346:
                    PiBackpackFill = (_b.sent()).PiBackpackFill;
                    return [2 /*return*/, PiBackpackFill];
                case 347: return [4 /*yield*/, import("react-icons/pi")];
                case 348:
                    PiBackspaceFill = (_b.sent()).PiBackspaceFill;
                    return [2 /*return*/, PiBackspaceFill];
                case 349: return [4 /*yield*/, import("react-icons/pi")];
                case 350:
                    PiBagFill = (_b.sent()).PiBagFill;
                    return [2 /*return*/, PiBagFill];
                case 351: return [4 /*yield*/, import("react-icons/pi")];
                case 352:
                    PiBagSimpleFill = (_b.sent()).PiBagSimpleFill;
                    return [2 /*return*/, PiBagSimpleFill];
                case 353: return [4 /*yield*/, import("react-icons/pi")];
                case 354:
                    PiBalloonFill = (_b.sent()).PiBalloonFill;
                    return [2 /*return*/, PiBalloonFill];
                case 355: return [4 /*yield*/, import("react-icons/pi")];
                case 356:
                    PiBandaidsFill = (_b.sent()).PiBandaidsFill;
                    return [2 /*return*/, PiBandaidsFill];
                case 357: return [4 /*yield*/, import("react-icons/pi")];
                case 358:
                    PiBankFill = (_b.sent()).PiBankFill;
                    return [2 /*return*/, PiBankFill];
                case 359: return [4 /*yield*/, import("react-icons/pi")];
                case 360:
                    PiBarbellFill = (_b.sent()).PiBarbellFill;
                    return [2 /*return*/, PiBarbellFill];
                case 361: return [4 /*yield*/, import("react-icons/pi")];
                case 362:
                    PiBarcodeFill = (_b.sent()).PiBarcodeFill;
                    return [2 /*return*/, PiBarcodeFill];
                case 363: return [4 /*yield*/, import("react-icons/pi")];
                case 364:
                    PiBarnFill = (_b.sent()).PiBarnFill;
                    return [2 /*return*/, PiBarnFill];
                case 365: return [4 /*yield*/, import("react-icons/pi")];
                case 366:
                    PiBarricadeFill = (_b.sent()).PiBarricadeFill;
                    return [2 /*return*/, PiBarricadeFill];
                case 367: return [4 /*yield*/, import("react-icons/pi")];
                case 368:
                    PiBaseballCapFill = (_b.sent()).PiBaseballCapFill;
                    return [2 /*return*/, PiBaseballCapFill];
                case 369: return [4 /*yield*/, import("react-icons/pi")];
                case 370:
                    PiBaseballFill = (_b.sent()).PiBaseballFill;
                    return [2 /*return*/, PiBaseballFill];
                case 371: return [4 /*yield*/, import("react-icons/pi")];
                case 372:
                    PiBaseballHelmetFill = (_b.sent()).PiBaseballHelmetFill;
                    return [2 /*return*/, PiBaseballHelmetFill];
                case 373: return [4 /*yield*/, import("react-icons/pi")];
                case 374:
                    PiBasketFill = (_b.sent()).PiBasketFill;
                    return [2 /*return*/, PiBasketFill];
                case 375: return [4 /*yield*/, import("react-icons/pi")];
                case 376:
                    PiBasketballFill = (_b.sent()).PiBasketballFill;
                    return [2 /*return*/, PiBasketballFill];
                case 377: return [4 /*yield*/, import("react-icons/pi")];
                case 378:
                    PiBathtubFill = (_b.sent()).PiBathtubFill;
                    return [2 /*return*/, PiBathtubFill];
                case 379: return [4 /*yield*/, import("react-icons/pi")];
                case 380:
                    PiBatteryChargingFill = (_b.sent()).PiBatteryChargingFill;
                    return [2 /*return*/, PiBatteryChargingFill];
                case 381: return [4 /*yield*/, import("react-icons/pi")];
                case 382:
                    PiBatteryChargingVerticalFill = (_b.sent()).PiBatteryChargingVerticalFill;
                    return [2 /*return*/, PiBatteryChargingVerticalFill];
                case 383: return [4 /*yield*/, import("react-icons/pi")];
                case 384:
                    PiBatteryEmptyFill = (_b.sent()).PiBatteryEmptyFill;
                    return [2 /*return*/, PiBatteryEmptyFill];
                case 385: return [4 /*yield*/, import("react-icons/pi")];
                case 386:
                    PiBatteryFullFill = (_b.sent()).PiBatteryFullFill;
                    return [2 /*return*/, PiBatteryFullFill];
                case 387: return [4 /*yield*/, import("react-icons/pi")];
                case 388:
                    PiBatteryHighFill = (_b.sent()).PiBatteryHighFill;
                    return [2 /*return*/, PiBatteryHighFill];
                case 389: return [4 /*yield*/, import("react-icons/pi")];
                case 390:
                    PiBatteryLowFill = (_b.sent()).PiBatteryLowFill;
                    return [2 /*return*/, PiBatteryLowFill];
                case 391: return [4 /*yield*/, import("react-icons/pi")];
                case 392:
                    PiBatteryMediumFill = (_b.sent()).PiBatteryMediumFill;
                    return [2 /*return*/, PiBatteryMediumFill];
                case 393: return [4 /*yield*/, import("react-icons/pi")];
                case 394:
                    PiBatteryPlusFill = (_b.sent()).PiBatteryPlusFill;
                    return [2 /*return*/, PiBatteryPlusFill];
                case 395: return [4 /*yield*/, import("react-icons/pi")];
                case 396:
                    PiBatteryPlusVerticalFill = (_b.sent()).PiBatteryPlusVerticalFill;
                    return [2 /*return*/, PiBatteryPlusVerticalFill];
                case 397: return [4 /*yield*/, import("react-icons/pi")];
                case 398:
                    PiBatteryVerticalEmptyFill = (_b.sent()).PiBatteryVerticalEmptyFill;
                    return [2 /*return*/, PiBatteryVerticalEmptyFill];
                case 399: return [4 /*yield*/, import("react-icons/pi")];
                case 400:
                    PiBatteryVerticalFullFill = (_b.sent()).PiBatteryVerticalFullFill;
                    return [2 /*return*/, PiBatteryVerticalFullFill];
                case 401: return [4 /*yield*/, import("react-icons/pi")];
                case 402:
                    PiBatteryVerticalHighFill = (_b.sent()).PiBatteryVerticalHighFill;
                    return [2 /*return*/, PiBatteryVerticalHighFill];
                case 403: return [4 /*yield*/, import("react-icons/pi")];
                case 404:
                    PiBatteryVerticalLowFill = (_b.sent()).PiBatteryVerticalLowFill;
                    return [2 /*return*/, PiBatteryVerticalLowFill];
                case 405: return [4 /*yield*/, import("react-icons/pi")];
                case 406:
                    PiBatteryVerticalMediumFill = (_b.sent()).PiBatteryVerticalMediumFill;
                    return [2 /*return*/, PiBatteryVerticalMediumFill];
                case 407: return [4 /*yield*/, import("react-icons/pi")];
                case 408:
                    PiBatteryWarningFill = (_b.sent()).PiBatteryWarningFill;
                    return [2 /*return*/, PiBatteryWarningFill];
                case 409: return [4 /*yield*/, import("react-icons/pi")];
                case 410:
                    PiBatteryWarningVerticalFill = (_b.sent()).PiBatteryWarningVerticalFill;
                    return [2 /*return*/, PiBatteryWarningVerticalFill];
                case 411: return [4 /*yield*/, import("react-icons/pi")];
                case 412:
                    PiBeachBallFill = (_b.sent()).PiBeachBallFill;
                    return [2 /*return*/, PiBeachBallFill];
                case 413: return [4 /*yield*/, import("react-icons/pi")];
                case 414:
                    PiBeanieFill = (_b.sent()).PiBeanieFill;
                    return [2 /*return*/, PiBeanieFill];
                case 415: return [4 /*yield*/, import("react-icons/pi")];
                case 416:
                    PiBedFill = (_b.sent()).PiBedFill;
                    return [2 /*return*/, PiBedFill];
                case 417: return [4 /*yield*/, import("react-icons/pi")];
                case 418:
                    PiBeerBottleFill = (_b.sent()).PiBeerBottleFill;
                    return [2 /*return*/, PiBeerBottleFill];
                case 419: return [4 /*yield*/, import("react-icons/pi")];
                case 420:
                    PiBeerSteinFill = (_b.sent()).PiBeerSteinFill;
                    return [2 /*return*/, PiBeerSteinFill];
                case 421: return [4 /*yield*/, import("react-icons/pi")];
                case 422:
                    PiBehanceLogoFill = (_b.sent()).PiBehanceLogoFill;
                    return [2 /*return*/, PiBehanceLogoFill];
                case 423: return [4 /*yield*/, import("react-icons/pi")];
                case 424:
                    PiBellFill = (_b.sent()).PiBellFill;
                    return [2 /*return*/, PiBellFill];
                case 425: return [4 /*yield*/, import("react-icons/pi")];
                case 426:
                    PiBellRingingFill = (_b.sent()).PiBellRingingFill;
                    return [2 /*return*/, PiBellRingingFill];
                case 427: return [4 /*yield*/, import("react-icons/pi")];
                case 428:
                    PiBellSimpleFill = (_b.sent()).PiBellSimpleFill;
                    return [2 /*return*/, PiBellSimpleFill];
                case 429: return [4 /*yield*/, import("react-icons/pi")];
                case 430:
                    PiBellSimpleRingingFill = (_b.sent()).PiBellSimpleRingingFill;
                    return [2 /*return*/, PiBellSimpleRingingFill];
                case 431: return [4 /*yield*/, import("react-icons/pi")];
                case 432:
                    PiBellSimpleSlashFill = (_b.sent()).PiBellSimpleSlashFill;
                    return [2 /*return*/, PiBellSimpleSlashFill];
                case 433: return [4 /*yield*/, import("react-icons/pi")];
                case 434:
                    PiBellSimpleZFill = (_b.sent()).PiBellSimpleZFill;
                    return [2 /*return*/, PiBellSimpleZFill];
                case 435: return [4 /*yield*/, import("react-icons/pi")];
                case 436:
                    PiBellSlashFill = (_b.sent()).PiBellSlashFill;
                    return [2 /*return*/, PiBellSlashFill];
                case 437: return [4 /*yield*/, import("react-icons/pi")];
                case 438:
                    PiBellZFill = (_b.sent()).PiBellZFill;
                    return [2 /*return*/, PiBellZFill];
                case 439: return [4 /*yield*/, import("react-icons/pi")];
                case 440:
                    PiBeltFill = (_b.sent()).PiBeltFill;
                    return [2 /*return*/, PiBeltFill];
                case 441: return [4 /*yield*/, import("react-icons/pi")];
                case 442:
                    PiBezierCurveFill = (_b.sent()).PiBezierCurveFill;
                    return [2 /*return*/, PiBezierCurveFill];
                case 443: return [4 /*yield*/, import("react-icons/pi")];
                case 444:
                    PiBicycleFill = (_b.sent()).PiBicycleFill;
                    return [2 /*return*/, PiBicycleFill];
                case 445: return [4 /*yield*/, import("react-icons/pi")];
                case 446:
                    PiBinaryFill = (_b.sent()).PiBinaryFill;
                    return [2 /*return*/, PiBinaryFill];
                case 447: return [4 /*yield*/, import("react-icons/pi")];
                case 448:
                    PiBinocularsFill = (_b.sent()).PiBinocularsFill;
                    return [2 /*return*/, PiBinocularsFill];
                case 449: return [4 /*yield*/, import("react-icons/pi")];
                case 450:
                    PiBiohazardFill = (_b.sent()).PiBiohazardFill;
                    return [2 /*return*/, PiBiohazardFill];
                case 451: return [4 /*yield*/, import("react-icons/pi")];
                case 452:
                    PiBirdFill = (_b.sent()).PiBirdFill;
                    return [2 /*return*/, PiBirdFill];
                case 453: return [4 /*yield*/, import("react-icons/pi")];
                case 454:
                    PiBlueprintFill = (_b.sent()).PiBlueprintFill;
                    return [2 /*return*/, PiBlueprintFill];
                case 455: return [4 /*yield*/, import("react-icons/pi")];
                case 456:
                    PiBluetoothConnectedFill = (_b.sent()).PiBluetoothConnectedFill;
                    return [2 /*return*/, PiBluetoothConnectedFill];
                case 457: return [4 /*yield*/, import("react-icons/pi")];
                case 458:
                    PiBluetoothFill = (_b.sent()).PiBluetoothFill;
                    return [2 /*return*/, PiBluetoothFill];
                case 459: return [4 /*yield*/, import("react-icons/pi")];
                case 460:
                    PiBluetoothSlashFill = (_b.sent()).PiBluetoothSlashFill;
                    return [2 /*return*/, PiBluetoothSlashFill];
                case 461: return [4 /*yield*/, import("react-icons/pi")];
                case 462:
                    PiBluetoothXFill = (_b.sent()).PiBluetoothXFill;
                    return [2 /*return*/, PiBluetoothXFill];
                case 463: return [4 /*yield*/, import("react-icons/pi")];
                case 464:
                    PiBoatFill = (_b.sent()).PiBoatFill;
                    return [2 /*return*/, PiBoatFill];
                case 465: return [4 /*yield*/, import("react-icons/pi")];
                case 466:
                    PiBombFill = (_b.sent()).PiBombFill;
                    return [2 /*return*/, PiBombFill];
                case 467: return [4 /*yield*/, import("react-icons/pi")];
                case 468:
                    PiBoneFill = (_b.sent()).PiBoneFill;
                    return [2 /*return*/, PiBoneFill];
                case 469: return [4 /*yield*/, import("react-icons/pi")];
                case 470:
                    PiBookBookmarkFill = (_b.sent()).PiBookBookmarkFill;
                    return [2 /*return*/, PiBookBookmarkFill];
                case 471: return [4 /*yield*/, import("react-icons/pi")];
                case 472:
                    PiBookFill = (_b.sent()).PiBookFill;
                    return [2 /*return*/, PiBookFill];
                case 473: return [4 /*yield*/, import("react-icons/pi")];
                case 474:
                    PiBookOpenFill = (_b.sent()).PiBookOpenFill;
                    return [2 /*return*/, PiBookOpenFill];
                case 475: return [4 /*yield*/, import("react-icons/pi")];
                case 476:
                    PiBookOpenTextFill = (_b.sent()).PiBookOpenTextFill;
                    return [2 /*return*/, PiBookOpenTextFill];
                case 477: return [4 /*yield*/, import("react-icons/pi")];
                case 478:
                    PiBookOpenUserFill = (_b.sent()).PiBookOpenUserFill;
                    return [2 /*return*/, PiBookOpenUserFill];
                case 479: return [4 /*yield*/, import("react-icons/pi")];
                case 480:
                    PiBookmarkFill = (_b.sent()).PiBookmarkFill;
                    return [2 /*return*/, PiBookmarkFill];
                case 481: return [4 /*yield*/, import("react-icons/pi")];
                case 482:
                    PiBookmarkSimpleFill = (_b.sent()).PiBookmarkSimpleFill;
                    return [2 /*return*/, PiBookmarkSimpleFill];
                case 483: return [4 /*yield*/, import("react-icons/pi")];
                case 484:
                    PiBookmarksFill = (_b.sent()).PiBookmarksFill;
                    return [2 /*return*/, PiBookmarksFill];
                case 485: return [4 /*yield*/, import("react-icons/pi")];
                case 486:
                    PiBookmarksSimpleFill = (_b.sent()).PiBookmarksSimpleFill;
                    return [2 /*return*/, PiBookmarksSimpleFill];
                case 487: return [4 /*yield*/, import("react-icons/pi")];
                case 488:
                    PiBooksFill = (_b.sent()).PiBooksFill;
                    return [2 /*return*/, PiBooksFill];
                case 489: return [4 /*yield*/, import("react-icons/pi")];
                case 490:
                    PiBootFill = (_b.sent()).PiBootFill;
                    return [2 /*return*/, PiBootFill];
                case 491: return [4 /*yield*/, import("react-icons/pi")];
                case 492:
                    PiBoulesFill = (_b.sent()).PiBoulesFill;
                    return [2 /*return*/, PiBoulesFill];
                case 493: return [4 /*yield*/, import("react-icons/pi")];
                case 494:
                    PiBoundingBoxFill = (_b.sent()).PiBoundingBoxFill;
                    return [2 /*return*/, PiBoundingBoxFill];
                case 495: return [4 /*yield*/, import("react-icons/pi")];
                case 496:
                    PiBowlFoodFill = (_b.sent()).PiBowlFoodFill;
                    return [2 /*return*/, PiBowlFoodFill];
                case 497: return [4 /*yield*/, import("react-icons/pi")];
                case 498:
                    PiBowlSteamFill = (_b.sent()).PiBowlSteamFill;
                    return [2 /*return*/, PiBowlSteamFill];
                case 499: return [4 /*yield*/, import("react-icons/pi")];
                case 500:
                    PiBowlingBallFill = (_b.sent()).PiBowlingBallFill;
                    return [2 /*return*/, PiBowlingBallFill];
                case 501: return [4 /*yield*/, import("react-icons/pi")];
                case 502:
                    PiBoxArrowDownFill = (_b.sent()).PiBoxArrowDownFill;
                    return [2 /*return*/, PiBoxArrowDownFill];
                case 503: return [4 /*yield*/, import("react-icons/pi")];
                case 504:
                    PiBoxArrowUpFill = (_b.sent()).PiBoxArrowUpFill;
                    return [2 /*return*/, PiBoxArrowUpFill];
                case 505: return [4 /*yield*/, import("react-icons/pi")];
                case 506:
                    PiBoxingGloveFill = (_b.sent()).PiBoxingGloveFill;
                    return [2 /*return*/, PiBoxingGloveFill];
                case 507: return [4 /*yield*/, import("react-icons/pi")];
                case 508:
                    PiBracketsAngleFill = (_b.sent()).PiBracketsAngleFill;
                    return [2 /*return*/, PiBracketsAngleFill];
                case 509: return [4 /*yield*/, import("react-icons/pi")];
                case 510:
                    PiBracketsCurlyFill = (_b.sent()).PiBracketsCurlyFill;
                    return [2 /*return*/, PiBracketsCurlyFill];
                case 511: return [4 /*yield*/, import("react-icons/pi")];
                case 512:
                    PiBracketsRoundFill = (_b.sent()).PiBracketsRoundFill;
                    return [2 /*return*/, PiBracketsRoundFill];
                case 513: return [4 /*yield*/, import("react-icons/pi")];
                case 514:
                    PiBracketsSquareFill = (_b.sent()).PiBracketsSquareFill;
                    return [2 /*return*/, PiBracketsSquareFill];
                case 515: return [4 /*yield*/, import("react-icons/pi")];
                case 516:
                    PiBrainFill = (_b.sent()).PiBrainFill;
                    return [2 /*return*/, PiBrainFill];
                case 517: return [4 /*yield*/, import("react-icons/pi")];
                case 518:
                    PiBrandyFill = (_b.sent()).PiBrandyFill;
                    return [2 /*return*/, PiBrandyFill];
                case 519: return [4 /*yield*/, import("react-icons/pi")];
                case 520:
                    PiBreadFill = (_b.sent()).PiBreadFill;
                    return [2 /*return*/, PiBreadFill];
                case 521: return [4 /*yield*/, import("react-icons/pi")];
                case 522:
                    PiBridgeFill = (_b.sent()).PiBridgeFill;
                    return [2 /*return*/, PiBridgeFill];
                case 523: return [4 /*yield*/, import("react-icons/pi")];
                case 524:
                    PiBriefcaseFill = (_b.sent()).PiBriefcaseFill;
                    return [2 /*return*/, PiBriefcaseFill];
                case 525: return [4 /*yield*/, import("react-icons/pi")];
                case 526:
                    PiBriefcaseMetalFill = (_b.sent()).PiBriefcaseMetalFill;
                    return [2 /*return*/, PiBriefcaseMetalFill];
                case 527: return [4 /*yield*/, import("react-icons/pi")];
                case 528:
                    PiBroadcastFill = (_b.sent()).PiBroadcastFill;
                    return [2 /*return*/, PiBroadcastFill];
                case 529: return [4 /*yield*/, import("react-icons/pi")];
                case 530:
                    PiBroomFill = (_b.sent()).PiBroomFill;
                    return [2 /*return*/, PiBroomFill];
                case 531: return [4 /*yield*/, import("react-icons/pi")];
                case 532:
                    PiBrowserFill = (_b.sent()).PiBrowserFill;
                    return [2 /*return*/, PiBrowserFill];
                case 533: return [4 /*yield*/, import("react-icons/pi")];
                case 534:
                    PiBrowsersFill = (_b.sent()).PiBrowsersFill;
                    return [2 /*return*/, PiBrowsersFill];
                case 535: return [4 /*yield*/, import("react-icons/pi")];
                case 536:
                    PiBugBeetleFill = (_b.sent()).PiBugBeetleFill;
                    return [2 /*return*/, PiBugBeetleFill];
                case 537: return [4 /*yield*/, import("react-icons/pi")];
                case 538:
                    PiBugDroidFill = (_b.sent()).PiBugDroidFill;
                    return [2 /*return*/, PiBugDroidFill];
                case 539: return [4 /*yield*/, import("react-icons/pi")];
                case 540:
                    PiBugFill = (_b.sent()).PiBugFill;
                    return [2 /*return*/, PiBugFill];
                case 541: return [4 /*yield*/, import("react-icons/pi")];
                case 542:
                    PiBuildingApartmentFill = (_b.sent()).PiBuildingApartmentFill;
                    return [2 /*return*/, PiBuildingApartmentFill];
                case 543: return [4 /*yield*/, import("react-icons/pi")];
                case 544:
                    PiBuildingFill = (_b.sent()).PiBuildingFill;
                    return [2 /*return*/, PiBuildingFill];
                case 545: return [4 /*yield*/, import("react-icons/pi")];
                case 546:
                    PiBuildingOfficeFill = (_b.sent()).PiBuildingOfficeFill;
                    return [2 /*return*/, PiBuildingOfficeFill];
                case 547: return [4 /*yield*/, import("react-icons/pi")];
                case 548:
                    PiBuildingsFill = (_b.sent()).PiBuildingsFill;
                    return [2 /*return*/, PiBuildingsFill];
                case 549: return [4 /*yield*/, import("react-icons/pi")];
                case 550:
                    PiBulldozerFill = (_b.sent()).PiBulldozerFill;
                    return [2 /*return*/, PiBulldozerFill];
                case 551: return [4 /*yield*/, import("react-icons/pi")];
                case 552:
                    PiBusFill = (_b.sent()).PiBusFill;
                    return [2 /*return*/, PiBusFill];
                case 553: return [4 /*yield*/, import("react-icons/pi")];
                case 554:
                    PiButterflyFill = (_b.sent()).PiButterflyFill;
                    return [2 /*return*/, PiButterflyFill];
                case 555: return [4 /*yield*/, import("react-icons/pi")];
                case 556:
                    PiCableCarFill = (_b.sent()).PiCableCarFill;
                    return [2 /*return*/, PiCableCarFill];
                case 557: return [4 /*yield*/, import("react-icons/pi")];
                case 558:
                    PiCactusFill = (_b.sent()).PiCactusFill;
                    return [2 /*return*/, PiCactusFill];
                case 559: return [4 /*yield*/, import("react-icons/pi")];
                case 560:
                    PiCakeFill = (_b.sent()).PiCakeFill;
                    return [2 /*return*/, PiCakeFill];
                case 561: return [4 /*yield*/, import("react-icons/pi")];
                case 562:
                    PiCalculatorFill = (_b.sent()).PiCalculatorFill;
                    return [2 /*return*/, PiCalculatorFill];
                case 563: return [4 /*yield*/, import("react-icons/pi")];
                case 564:
                    PiCalendarBlankFill = (_b.sent()).PiCalendarBlankFill;
                    return [2 /*return*/, PiCalendarBlankFill];
                case 565: return [4 /*yield*/, import("react-icons/pi")];
                case 566:
                    PiCalendarCheckFill = (_b.sent()).PiCalendarCheckFill;
                    return [2 /*return*/, PiCalendarCheckFill];
                case 567: return [4 /*yield*/, import("react-icons/pi")];
                case 568:
                    PiCalendarDotFill = (_b.sent()).PiCalendarDotFill;
                    return [2 /*return*/, PiCalendarDotFill];
                case 569: return [4 /*yield*/, import("react-icons/pi")];
                case 570:
                    PiCalendarDotsFill = (_b.sent()).PiCalendarDotsFill;
                    return [2 /*return*/, PiCalendarDotsFill];
                case 571: return [4 /*yield*/, import("react-icons/pi")];
                case 572:
                    PiCalendarFill = (_b.sent()).PiCalendarFill;
                    return [2 /*return*/, PiCalendarFill];
                case 573: return [4 /*yield*/, import("react-icons/pi")];
                case 574:
                    PiCalendarHeartFill = (_b.sent()).PiCalendarHeartFill;
                    return [2 /*return*/, PiCalendarHeartFill];
                case 575: return [4 /*yield*/, import("react-icons/pi")];
                case 576:
                    PiCalendarMinusFill = (_b.sent()).PiCalendarMinusFill;
                    return [2 /*return*/, PiCalendarMinusFill];
                case 577: return [4 /*yield*/, import("react-icons/pi")];
                case 578:
                    PiCalendarPlusFill = (_b.sent()).PiCalendarPlusFill;
                    return [2 /*return*/, PiCalendarPlusFill];
                case 579: return [4 /*yield*/, import("react-icons/pi")];
                case 580:
                    PiCalendarSlashFill = (_b.sent()).PiCalendarSlashFill;
                    return [2 /*return*/, PiCalendarSlashFill];
                case 581: return [4 /*yield*/, import("react-icons/pi")];
                case 582:
                    PiCalendarStarFill = (_b.sent()).PiCalendarStarFill;
                    return [2 /*return*/, PiCalendarStarFill];
                case 583: return [4 /*yield*/, import("react-icons/pi")];
                case 584:
                    PiCalendarXFill = (_b.sent()).PiCalendarXFill;
                    return [2 /*return*/, PiCalendarXFill];
                case 585: return [4 /*yield*/, import("react-icons/pi")];
                case 586:
                    PiCallBellFill = (_b.sent()).PiCallBellFill;
                    return [2 /*return*/, PiCallBellFill];
                case 587: return [4 /*yield*/, import("react-icons/pi")];
                case 588:
                    PiCameraFill = (_b.sent()).PiCameraFill;
                    return [2 /*return*/, PiCameraFill];
                case 589: return [4 /*yield*/, import("react-icons/pi")];
                case 590:
                    PiCameraPlusFill = (_b.sent()).PiCameraPlusFill;
                    return [2 /*return*/, PiCameraPlusFill];
                case 591: return [4 /*yield*/, import("react-icons/pi")];
                case 592:
                    PiCameraRotateFill = (_b.sent()).PiCameraRotateFill;
                    return [2 /*return*/, PiCameraRotateFill];
                case 593: return [4 /*yield*/, import("react-icons/pi")];
                case 594:
                    PiCameraSlashFill = (_b.sent()).PiCameraSlashFill;
                    return [2 /*return*/, PiCameraSlashFill];
                case 595: return [4 /*yield*/, import("react-icons/pi")];
                case 596:
                    PiCampfireFill = (_b.sent()).PiCampfireFill;
                    return [2 /*return*/, PiCampfireFill];
                case 597: return [4 /*yield*/, import("react-icons/pi")];
                case 598:
                    PiCarBatteryFill = (_b.sent()).PiCarBatteryFill;
                    return [2 /*return*/, PiCarBatteryFill];
                case 599: return [4 /*yield*/, import("react-icons/pi")];
                case 600:
                    PiCarFill = (_b.sent()).PiCarFill;
                    return [2 /*return*/, PiCarFill];
                case 601: return [4 /*yield*/, import("react-icons/pi")];
                case 602:
                    PiCarProfileFill = (_b.sent()).PiCarProfileFill;
                    return [2 /*return*/, PiCarProfileFill];
                case 603: return [4 /*yield*/, import("react-icons/pi")];
                case 604:
                    PiCarSimpleFill = (_b.sent()).PiCarSimpleFill;
                    return [2 /*return*/, PiCarSimpleFill];
                case 605: return [4 /*yield*/, import("react-icons/pi")];
                case 606:
                    PiCardholderFill = (_b.sent()).PiCardholderFill;
                    return [2 /*return*/, PiCardholderFill];
                case 607: return [4 /*yield*/, import("react-icons/pi")];
                case 608:
                    PiCardsFill = (_b.sent()).PiCardsFill;
                    return [2 /*return*/, PiCardsFill];
                case 609: return [4 /*yield*/, import("react-icons/pi")];
                case 610:
                    PiCardsThreeFill = (_b.sent()).PiCardsThreeFill;
                    return [2 /*return*/, PiCardsThreeFill];
                case 611: return [4 /*yield*/, import("react-icons/pi")];
                case 612:
                    PiCaretCircleDoubleDownFill = (_b.sent()).PiCaretCircleDoubleDownFill;
                    return [2 /*return*/, PiCaretCircleDoubleDownFill];
                case 613: return [4 /*yield*/, import("react-icons/pi")];
                case 614:
                    PiCaretCircleDoubleLeftFill = (_b.sent()).PiCaretCircleDoubleLeftFill;
                    return [2 /*return*/, PiCaretCircleDoubleLeftFill];
                case 615: return [4 /*yield*/, import("react-icons/pi")];
                case 616:
                    PiCaretCircleDoubleRightFill = (_b.sent()).PiCaretCircleDoubleRightFill;
                    return [2 /*return*/, PiCaretCircleDoubleRightFill];
                case 617: return [4 /*yield*/, import("react-icons/pi")];
                case 618:
                    PiCaretCircleDoubleUpFill = (_b.sent()).PiCaretCircleDoubleUpFill;
                    return [2 /*return*/, PiCaretCircleDoubleUpFill];
                case 619: return [4 /*yield*/, import("react-icons/pi")];
                case 620:
                    PiCaretCircleDownFill = (_b.sent()).PiCaretCircleDownFill;
                    return [2 /*return*/, PiCaretCircleDownFill];
                case 621: return [4 /*yield*/, import("react-icons/pi")];
                case 622:
                    PiCaretCircleLeftFill = (_b.sent()).PiCaretCircleLeftFill;
                    return [2 /*return*/, PiCaretCircleLeftFill];
                case 623: return [4 /*yield*/, import("react-icons/pi")];
                case 624:
                    PiCaretCircleRightFill = (_b.sent()).PiCaretCircleRightFill;
                    return [2 /*return*/, PiCaretCircleRightFill];
                case 625: return [4 /*yield*/, import("react-icons/pi")];
                case 626:
                    PiCaretCircleUpDownFill = (_b.sent()).PiCaretCircleUpDownFill;
                    return [2 /*return*/, PiCaretCircleUpDownFill];
                case 627: return [4 /*yield*/, import("react-icons/pi")];
                case 628:
                    PiCaretCircleUpFill = (_b.sent()).PiCaretCircleUpFill;
                    return [2 /*return*/, PiCaretCircleUpFill];
                case 629: return [4 /*yield*/, import("react-icons/pi")];
                case 630:
                    PiCaretDoubleDownFill = (_b.sent()).PiCaretDoubleDownFill;
                    return [2 /*return*/, PiCaretDoubleDownFill];
                case 631: return [4 /*yield*/, import("react-icons/pi")];
                case 632:
                    PiCaretDoubleLeftFill = (_b.sent()).PiCaretDoubleLeftFill;
                    return [2 /*return*/, PiCaretDoubleLeftFill];
                case 633: return [4 /*yield*/, import("react-icons/pi")];
                case 634:
                    PiCaretDoubleRightFill = (_b.sent()).PiCaretDoubleRightFill;
                    return [2 /*return*/, PiCaretDoubleRightFill];
                case 635: return [4 /*yield*/, import("react-icons/pi")];
                case 636:
                    PiCaretDoubleUpFill = (_b.sent()).PiCaretDoubleUpFill;
                    return [2 /*return*/, PiCaretDoubleUpFill];
                case 637: return [4 /*yield*/, import("react-icons/pi")];
                case 638:
                    PiCaretDownFill = (_b.sent()).PiCaretDownFill;
                    return [2 /*return*/, PiCaretDownFill];
                case 639: return [4 /*yield*/, import("react-icons/pi")];
                case 640:
                    PiCaretLeftFill = (_b.sent()).PiCaretLeftFill;
                    return [2 /*return*/, PiCaretLeftFill];
                case 641: return [4 /*yield*/, import("react-icons/pi")];
                case 642:
                    PiCaretLineDownFill = (_b.sent()).PiCaretLineDownFill;
                    return [2 /*return*/, PiCaretLineDownFill];
                case 643: return [4 /*yield*/, import("react-icons/pi")];
                case 644:
                    PiCaretLineLeftFill = (_b.sent()).PiCaretLineLeftFill;
                    return [2 /*return*/, PiCaretLineLeftFill];
                case 645: return [4 /*yield*/, import("react-icons/pi")];
                case 646:
                    PiCaretLineRightFill = (_b.sent()).PiCaretLineRightFill;
                    return [2 /*return*/, PiCaretLineRightFill];
                case 647: return [4 /*yield*/, import("react-icons/pi")];
                case 648:
                    PiCaretLineUpFill = (_b.sent()).PiCaretLineUpFill;
                    return [2 /*return*/, PiCaretLineUpFill];
                case 649: return [4 /*yield*/, import("react-icons/pi")];
                case 650:
                    PiCaretRightFill = (_b.sent()).PiCaretRightFill;
                    return [2 /*return*/, PiCaretRightFill];
                case 651: return [4 /*yield*/, import("react-icons/pi")];
                case 652:
                    PiCaretUpDownFill = (_b.sent()).PiCaretUpDownFill;
                    return [2 /*return*/, PiCaretUpDownFill];
                case 653: return [4 /*yield*/, import("react-icons/pi")];
                case 654:
                    PiCaretUpFill = (_b.sent()).PiCaretUpFill;
                    return [2 /*return*/, PiCaretUpFill];
                case 655: return [4 /*yield*/, import("react-icons/pi")];
                case 656:
                    PiCarrotFill = (_b.sent()).PiCarrotFill;
                    return [2 /*return*/, PiCarrotFill];
                case 657: return [4 /*yield*/, import("react-icons/pi")];
                case 658:
                    PiCashRegisterFill = (_b.sent()).PiCashRegisterFill;
                    return [2 /*return*/, PiCashRegisterFill];
                case 659: return [4 /*yield*/, import("react-icons/pi")];
                case 660:
                    PiCassetteTapeFill = (_b.sent()).PiCassetteTapeFill;
                    return [2 /*return*/, PiCassetteTapeFill];
                case 661: return [4 /*yield*/, import("react-icons/pi")];
                case 662:
                    PiCastleTurretFill = (_b.sent()).PiCastleTurretFill;
                    return [2 /*return*/, PiCastleTurretFill];
                case 663: return [4 /*yield*/, import("react-icons/pi")];
                case 664:
                    PiCatFill = (_b.sent()).PiCatFill;
                    return [2 /*return*/, PiCatFill];
                case 665: return [4 /*yield*/, import("react-icons/pi")];
                case 666:
                    PiCellSignalFullFill = (_b.sent()).PiCellSignalFullFill;
                    return [2 /*return*/, PiCellSignalFullFill];
                case 667: return [4 /*yield*/, import("react-icons/pi")];
                case 668:
                    PiCellSignalHighFill = (_b.sent()).PiCellSignalHighFill;
                    return [2 /*return*/, PiCellSignalHighFill];
                case 669: return [4 /*yield*/, import("react-icons/pi")];
                case 670:
                    PiCellSignalLowFill = (_b.sent()).PiCellSignalLowFill;
                    return [2 /*return*/, PiCellSignalLowFill];
                case 671: return [4 /*yield*/, import("react-icons/pi")];
                case 672:
                    PiCellSignalMediumFill = (_b.sent()).PiCellSignalMediumFill;
                    return [2 /*return*/, PiCellSignalMediumFill];
                case 673: return [4 /*yield*/, import("react-icons/pi")];
                case 674:
                    PiCellSignalNoneFill = (_b.sent()).PiCellSignalNoneFill;
                    return [2 /*return*/, PiCellSignalNoneFill];
                case 675: return [4 /*yield*/, import("react-icons/pi")];
                case 676:
                    PiCellSignalSlashFill = (_b.sent()).PiCellSignalSlashFill;
                    return [2 /*return*/, PiCellSignalSlashFill];
                case 677: return [4 /*yield*/, import("react-icons/pi")];
                case 678:
                    PiCellSignalXFill = (_b.sent()).PiCellSignalXFill;
                    return [2 /*return*/, PiCellSignalXFill];
                case 679: return [4 /*yield*/, import("react-icons/pi")];
                case 680:
                    PiCellTowerFill = (_b.sent()).PiCellTowerFill;
                    return [2 /*return*/, PiCellTowerFill];
                case 681: return [4 /*yield*/, import("react-icons/pi")];
                case 682:
                    PiCertificateFill = (_b.sent()).PiCertificateFill;
                    return [2 /*return*/, PiCertificateFill];
                case 683: return [4 /*yield*/, import("react-icons/pi")];
                case 684:
                    PiChairFill = (_b.sent()).PiChairFill;
                    return [2 /*return*/, PiChairFill];
                case 685: return [4 /*yield*/, import("react-icons/pi")];
                case 686:
                    PiChalkboardFill = (_b.sent()).PiChalkboardFill;
                    return [2 /*return*/, PiChalkboardFill];
                case 687: return [4 /*yield*/, import("react-icons/pi")];
                case 688:
                    PiChalkboardSimpleFill = (_b.sent()).PiChalkboardSimpleFill;
                    return [2 /*return*/, PiChalkboardSimpleFill];
                case 689: return [4 /*yield*/, import("react-icons/pi")];
                case 690:
                    PiChalkboardTeacherFill = (_b.sent()).PiChalkboardTeacherFill;
                    return [2 /*return*/, PiChalkboardTeacherFill];
                case 691: return [4 /*yield*/, import("react-icons/pi")];
                case 692:
                    PiChampagneFill = (_b.sent()).PiChampagneFill;
                    return [2 /*return*/, PiChampagneFill];
                case 693: return [4 /*yield*/, import("react-icons/pi")];
                case 694:
                    PiChargingStationFill = (_b.sent()).PiChargingStationFill;
                    return [2 /*return*/, PiChargingStationFill];
                case 695: return [4 /*yield*/, import("react-icons/pi")];
                case 696:
                    PiChartBarFill = (_b.sent()).PiChartBarFill;
                    return [2 /*return*/, PiChartBarFill];
                case 697: return [4 /*yield*/, import("react-icons/pi")];
                case 698:
                    PiChartBarHorizontalFill = (_b.sent()).PiChartBarHorizontalFill;
                    return [2 /*return*/, PiChartBarHorizontalFill];
                case 699: return [4 /*yield*/, import("react-icons/pi")];
                case 700:
                    PiChartDonutFill = (_b.sent()).PiChartDonutFill;
                    return [2 /*return*/, PiChartDonutFill];
                case 701: return [4 /*yield*/, import("react-icons/pi")];
                case 702:
                    PiChartLineDownFill = (_b.sent()).PiChartLineDownFill;
                    return [2 /*return*/, PiChartLineDownFill];
                case 703: return [4 /*yield*/, import("react-icons/pi")];
                case 704:
                    PiChartLineFill = (_b.sent()).PiChartLineFill;
                    return [2 /*return*/, PiChartLineFill];
                case 705: return [4 /*yield*/, import("react-icons/pi")];
                case 706:
                    PiChartLineUpFill = (_b.sent()).PiChartLineUpFill;
                    return [2 /*return*/, PiChartLineUpFill];
                case 707: return [4 /*yield*/, import("react-icons/pi")];
                case 708:
                    PiChartPieFill = (_b.sent()).PiChartPieFill;
                    return [2 /*return*/, PiChartPieFill];
                case 709: return [4 /*yield*/, import("react-icons/pi")];
                case 710:
                    PiChartPieSliceFill = (_b.sent()).PiChartPieSliceFill;
                    return [2 /*return*/, PiChartPieSliceFill];
                case 711: return [4 /*yield*/, import("react-icons/pi")];
                case 712:
                    PiChartPolarFill = (_b.sent()).PiChartPolarFill;
                    return [2 /*return*/, PiChartPolarFill];
                case 713: return [4 /*yield*/, import("react-icons/pi")];
                case 714:
                    PiChartScatterFill = (_b.sent()).PiChartScatterFill;
                    return [2 /*return*/, PiChartScatterFill];
                case 715: return [4 /*yield*/, import("react-icons/pi")];
                case 716:
                    PiChatCenteredDotsFill = (_b.sent()).PiChatCenteredDotsFill;
                    return [2 /*return*/, PiChatCenteredDotsFill];
                case 717: return [4 /*yield*/, import("react-icons/pi")];
                case 718:
                    PiChatCenteredFill = (_b.sent()).PiChatCenteredFill;
                    return [2 /*return*/, PiChatCenteredFill];
                case 719: return [4 /*yield*/, import("react-icons/pi")];
                case 720:
                    PiChatCenteredSlashFill = (_b.sent()).PiChatCenteredSlashFill;
                    return [2 /*return*/, PiChatCenteredSlashFill];
                case 721: return [4 /*yield*/, import("react-icons/pi")];
                case 722:
                    PiChatCenteredTextFill = (_b.sent()).PiChatCenteredTextFill;
                    return [2 /*return*/, PiChatCenteredTextFill];
                case 723: return [4 /*yield*/, import("react-icons/pi")];
                case 724:
                    PiChatCircleDotsFill = (_b.sent()).PiChatCircleDotsFill;
                    return [2 /*return*/, PiChatCircleDotsFill];
                case 725: return [4 /*yield*/, import("react-icons/pi")];
                case 726:
                    PiChatCircleFill = (_b.sent()).PiChatCircleFill;
                    return [2 /*return*/, PiChatCircleFill];
                case 727: return [4 /*yield*/, import("react-icons/pi")];
                case 728:
                    PiChatCircleSlashFill = (_b.sent()).PiChatCircleSlashFill;
                    return [2 /*return*/, PiChatCircleSlashFill];
                case 729: return [4 /*yield*/, import("react-icons/pi")];
                case 730:
                    PiChatCircleTextFill = (_b.sent()).PiChatCircleTextFill;
                    return [2 /*return*/, PiChatCircleTextFill];
                case 731: return [4 /*yield*/, import("react-icons/pi")];
                case 732:
                    PiChatDotsFill = (_b.sent()).PiChatDotsFill;
                    return [2 /*return*/, PiChatDotsFill];
                case 733: return [4 /*yield*/, import("react-icons/pi")];
                case 734:
                    PiChatFill = (_b.sent()).PiChatFill;
                    return [2 /*return*/, PiChatFill];
                case 735: return [4 /*yield*/, import("react-icons/pi")];
                case 736:
                    PiChatSlashFill = (_b.sent()).PiChatSlashFill;
                    return [2 /*return*/, PiChatSlashFill];
                case 737: return [4 /*yield*/, import("react-icons/pi")];
                case 738:
                    PiChatTeardropDotsFill = (_b.sent()).PiChatTeardropDotsFill;
                    return [2 /*return*/, PiChatTeardropDotsFill];
                case 739: return [4 /*yield*/, import("react-icons/pi")];
                case 740:
                    PiChatTeardropFill = (_b.sent()).PiChatTeardropFill;
                    return [2 /*return*/, PiChatTeardropFill];
                case 741: return [4 /*yield*/, import("react-icons/pi")];
                case 742:
                    PiChatTeardropSlashFill = (_b.sent()).PiChatTeardropSlashFill;
                    return [2 /*return*/, PiChatTeardropSlashFill];
                case 743: return [4 /*yield*/, import("react-icons/pi")];
                case 744:
                    PiChatTeardropTextFill = (_b.sent()).PiChatTeardropTextFill;
                    return [2 /*return*/, PiChatTeardropTextFill];
                case 745: return [4 /*yield*/, import("react-icons/pi")];
                case 746:
                    PiChatTextFill = (_b.sent()).PiChatTextFill;
                    return [2 /*return*/, PiChatTextFill];
                case 747: return [4 /*yield*/, import("react-icons/pi")];
                case 748:
                    PiChatsCircleFill = (_b.sent()).PiChatsCircleFill;
                    return [2 /*return*/, PiChatsCircleFill];
                case 749: return [4 /*yield*/, import("react-icons/pi")];
                case 750:
                    PiChatsFill = (_b.sent()).PiChatsFill;
                    return [2 /*return*/, PiChatsFill];
                case 751: return [4 /*yield*/, import("react-icons/pi")];
                case 752:
                    PiChatsTeardropFill = (_b.sent()).PiChatsTeardropFill;
                    return [2 /*return*/, PiChatsTeardropFill];
                case 753: return [4 /*yield*/, import("react-icons/pi")];
                case 754:
                    PiCheckCircleFill = (_b.sent()).PiCheckCircleFill;
                    return [2 /*return*/, PiCheckCircleFill];
                case 755: return [4 /*yield*/, import("react-icons/pi")];
                case 756:
                    PiCheckFatFill = (_b.sent()).PiCheckFatFill;
                    return [2 /*return*/, PiCheckFatFill];
                case 757: return [4 /*yield*/, import("react-icons/pi")];
                case 758:
                    PiCheckFill = (_b.sent()).PiCheckFill;
                    return [2 /*return*/, PiCheckFill];
                case 759: return [4 /*yield*/, import("react-icons/pi")];
                case 760:
                    PiCheckSquareFill = (_b.sent()).PiCheckSquareFill;
                    return [2 /*return*/, PiCheckSquareFill];
                case 761: return [4 /*yield*/, import("react-icons/pi")];
                case 762:
                    PiCheckSquareOffsetFill = (_b.sent()).PiCheckSquareOffsetFill;
                    return [2 /*return*/, PiCheckSquareOffsetFill];
                case 763: return [4 /*yield*/, import("react-icons/pi")];
                case 764:
                    PiCheckerboardFill = (_b.sent()).PiCheckerboardFill;
                    return [2 /*return*/, PiCheckerboardFill];
                case 765: return [4 /*yield*/, import("react-icons/pi")];
                case 766:
                    PiChecksFill = (_b.sent()).PiChecksFill;
                    return [2 /*return*/, PiChecksFill];
                case 767: return [4 /*yield*/, import("react-icons/pi")];
                case 768:
                    PiCheersFill = (_b.sent()).PiCheersFill;
                    return [2 /*return*/, PiCheersFill];
                case 769: return [4 /*yield*/, import("react-icons/pi")];
                case 770:
                    PiCheeseFill = (_b.sent()).PiCheeseFill;
                    return [2 /*return*/, PiCheeseFill];
                case 771: return [4 /*yield*/, import("react-icons/pi")];
                case 772:
                    PiChefHatFill = (_b.sent()).PiChefHatFill;
                    return [2 /*return*/, PiChefHatFill];
                case 773: return [4 /*yield*/, import("react-icons/pi")];
                case 774:
                    PiCherriesFill = (_b.sent()).PiCherriesFill;
                    return [2 /*return*/, PiCherriesFill];
                case 775: return [4 /*yield*/, import("react-icons/pi")];
                case 776:
                    PiChurchFill = (_b.sent()).PiChurchFill;
                    return [2 /*return*/, PiChurchFill];
                case 777: return [4 /*yield*/, import("react-icons/pi")];
                case 778:
                    PiCigaretteFill = (_b.sent()).PiCigaretteFill;
                    return [2 /*return*/, PiCigaretteFill];
                case 779: return [4 /*yield*/, import("react-icons/pi")];
                case 780:
                    PiCigaretteSlashFill = (_b.sent()).PiCigaretteSlashFill;
                    return [2 /*return*/, PiCigaretteSlashFill];
                case 781: return [4 /*yield*/, import("react-icons/pi")];
                case 782:
                    PiCircleDashedFill = (_b.sent()).PiCircleDashedFill;
                    return [2 /*return*/, PiCircleDashedFill];
                case 783: return [4 /*yield*/, import("react-icons/pi")];
                case 784:
                    PiCircleFill = (_b.sent()).PiCircleFill;
                    return [2 /*return*/, PiCircleFill];
                case 785: return [4 /*yield*/, import("react-icons/pi")];
                case 786:
                    PiCircleHalfFill = (_b.sent()).PiCircleHalfFill;
                    return [2 /*return*/, PiCircleHalfFill];
                case 787: return [4 /*yield*/, import("react-icons/pi")];
                case 788:
                    PiCircleHalfTiltFill = (_b.sent()).PiCircleHalfTiltFill;
                    return [2 /*return*/, PiCircleHalfTiltFill];
                case 789: return [4 /*yield*/, import("react-icons/pi")];
                case 790:
                    PiCircleNotchFill = (_b.sent()).PiCircleNotchFill;
                    return [2 /*return*/, PiCircleNotchFill];
                case 791: return [4 /*yield*/, import("react-icons/pi")];
                case 792:
                    PiCirclesFourFill = (_b.sent()).PiCirclesFourFill;
                    return [2 /*return*/, PiCirclesFourFill];
                case 793: return [4 /*yield*/, import("react-icons/pi")];
                case 794:
                    PiCirclesThreeFill = (_b.sent()).PiCirclesThreeFill;
                    return [2 /*return*/, PiCirclesThreeFill];
                case 795: return [4 /*yield*/, import("react-icons/pi")];
                case 796:
                    PiCirclesThreePlusFill = (_b.sent()).PiCirclesThreePlusFill;
                    return [2 /*return*/, PiCirclesThreePlusFill];
                case 797: return [4 /*yield*/, import("react-icons/pi")];
                case 798:
                    PiCircuitryFill = (_b.sent()).PiCircuitryFill;
                    return [2 /*return*/, PiCircuitryFill];
                case 799: return [4 /*yield*/, import("react-icons/pi")];
                case 800:
                    PiCityFill = (_b.sent()).PiCityFill;
                    return [2 /*return*/, PiCityFill];
                case 801: return [4 /*yield*/, import("react-icons/pi")];
                case 802:
                    PiClipboardFill = (_b.sent()).PiClipboardFill;
                    return [2 /*return*/, PiClipboardFill];
                case 803: return [4 /*yield*/, import("react-icons/pi")];
                case 804:
                    PiClipboardTextFill = (_b.sent()).PiClipboardTextFill;
                    return [2 /*return*/, PiClipboardTextFill];
                case 805: return [4 /*yield*/, import("react-icons/pi")];
                case 806:
                    PiClockAfternoonFill = (_b.sent()).PiClockAfternoonFill;
                    return [2 /*return*/, PiClockAfternoonFill];
                case 807: return [4 /*yield*/, import("react-icons/pi")];
                case 808:
                    PiClockClockwiseFill = (_b.sent()).PiClockClockwiseFill;
                    return [2 /*return*/, PiClockClockwiseFill];
                case 809: return [4 /*yield*/, import("react-icons/pi")];
                case 810:
                    PiClockCountdownFill = (_b.sent()).PiClockCountdownFill;
                    return [2 /*return*/, PiClockCountdownFill];
                case 811: return [4 /*yield*/, import("react-icons/pi")];
                case 812:
                    PiClockCounterClockwiseFill = (_b.sent()).PiClockCounterClockwiseFill;
                    return [2 /*return*/, PiClockCounterClockwiseFill];
                case 813: return [4 /*yield*/, import("react-icons/pi")];
                case 814:
                    PiClockFill = (_b.sent()).PiClockFill;
                    return [2 /*return*/, PiClockFill];
                case 815: return [4 /*yield*/, import("react-icons/pi")];
                case 816:
                    PiClockUserFill = (_b.sent()).PiClockUserFill;
                    return [2 /*return*/, PiClockUserFill];
                case 817: return [4 /*yield*/, import("react-icons/pi")];
                case 818:
                    PiClosedCaptioningFill = (_b.sent()).PiClosedCaptioningFill;
                    return [2 /*return*/, PiClosedCaptioningFill];
                case 819: return [4 /*yield*/, import("react-icons/pi")];
                case 820:
                    PiCloudArrowDownFill = (_b.sent()).PiCloudArrowDownFill;
                    return [2 /*return*/, PiCloudArrowDownFill];
                case 821: return [4 /*yield*/, import("react-icons/pi")];
                case 822:
                    PiCloudArrowUpFill = (_b.sent()).PiCloudArrowUpFill;
                    return [2 /*return*/, PiCloudArrowUpFill];
                case 823: return [4 /*yield*/, import("react-icons/pi")];
                case 824:
                    PiCloudCheckFill = (_b.sent()).PiCloudCheckFill;
                    return [2 /*return*/, PiCloudCheckFill];
                case 825: return [4 /*yield*/, import("react-icons/pi")];
                case 826:
                    PiCloudFill = (_b.sent()).PiCloudFill;
                    return [2 /*return*/, PiCloudFill];
                case 827: return [4 /*yield*/, import("react-icons/pi")];
                case 828:
                    PiCloudFogFill = (_b.sent()).PiCloudFogFill;
                    return [2 /*return*/, PiCloudFogFill];
                case 829: return [4 /*yield*/, import("react-icons/pi")];
                case 830:
                    PiCloudLightningFill = (_b.sent()).PiCloudLightningFill;
                    return [2 /*return*/, PiCloudLightningFill];
                case 831: return [4 /*yield*/, import("react-icons/pi")];
                case 832:
                    PiCloudMoonFill = (_b.sent()).PiCloudMoonFill;
                    return [2 /*return*/, PiCloudMoonFill];
                case 833: return [4 /*yield*/, import("react-icons/pi")];
                case 834:
                    PiCloudRainFill = (_b.sent()).PiCloudRainFill;
                    return [2 /*return*/, PiCloudRainFill];
                case 835: return [4 /*yield*/, import("react-icons/pi")];
                case 836:
                    PiCloudSlashFill = (_b.sent()).PiCloudSlashFill;
                    return [2 /*return*/, PiCloudSlashFill];
                case 837: return [4 /*yield*/, import("react-icons/pi")];
                case 838:
                    PiCloudSnowFill = (_b.sent()).PiCloudSnowFill;
                    return [2 /*return*/, PiCloudSnowFill];
                case 839: return [4 /*yield*/, import("react-icons/pi")];
                case 840:
                    PiCloudSunFill = (_b.sent()).PiCloudSunFill;
                    return [2 /*return*/, PiCloudSunFill];
                case 841: return [4 /*yield*/, import("react-icons/pi")];
                case 842:
                    PiCloudWarningFill = (_b.sent()).PiCloudWarningFill;
                    return [2 /*return*/, PiCloudWarningFill];
                case 843: return [4 /*yield*/, import("react-icons/pi")];
                case 844:
                    PiCloudXFill = (_b.sent()).PiCloudXFill;
                    return [2 /*return*/, PiCloudXFill];
                case 845: return [4 /*yield*/, import("react-icons/pi")];
                case 846:
                    PiCloverFill = (_b.sent()).PiCloverFill;
                    return [2 /*return*/, PiCloverFill];
                case 847: return [4 /*yield*/, import("react-icons/pi")];
                case 848:
                    PiClubFill = (_b.sent()).PiClubFill;
                    return [2 /*return*/, PiClubFill];
                case 849: return [4 /*yield*/, import("react-icons/pi")];
                case 850:
                    PiCoatHangerFill = (_b.sent()).PiCoatHangerFill;
                    return [2 /*return*/, PiCoatHangerFill];
                case 851: return [4 /*yield*/, import("react-icons/pi")];
                case 852:
                    PiCodaLogoFill = (_b.sent()).PiCodaLogoFill;
                    return [2 /*return*/, PiCodaLogoFill];
                case 853: return [4 /*yield*/, import("react-icons/pi")];
                case 854:
                    PiCodeBlockFill = (_b.sent()).PiCodeBlockFill;
                    return [2 /*return*/, PiCodeBlockFill];
                case 855: return [4 /*yield*/, import("react-icons/pi")];
                case 856:
                    PiCodeFill = (_b.sent()).PiCodeFill;
                    return [2 /*return*/, PiCodeFill];
                case 857: return [4 /*yield*/, import("react-icons/pi")];
                case 858:
                    PiCodeSimpleFill = (_b.sent()).PiCodeSimpleFill;
                    return [2 /*return*/, PiCodeSimpleFill];
                case 859: return [4 /*yield*/, import("react-icons/pi")];
                case 860:
                    PiCodepenLogoFill = (_b.sent()).PiCodepenLogoFill;
                    return [2 /*return*/, PiCodepenLogoFill];
                case 861: return [4 /*yield*/, import("react-icons/pi")];
                case 862:
                    PiCodesandboxLogoFill = (_b.sent()).PiCodesandboxLogoFill;
                    return [2 /*return*/, PiCodesandboxLogoFill];
                case 863: return [4 /*yield*/, import("react-icons/pi")];
                case 864:
                    PiCoffeeBeanFill = (_b.sent()).PiCoffeeBeanFill;
                    return [2 /*return*/, PiCoffeeBeanFill];
                case 865: return [4 /*yield*/, import("react-icons/pi")];
                case 866:
                    PiCoffeeFill = (_b.sent()).PiCoffeeFill;
                    return [2 /*return*/, PiCoffeeFill];
                case 867: return [4 /*yield*/, import("react-icons/pi")];
                case 868:
                    PiCoinFill = (_b.sent()).PiCoinFill;
                    return [2 /*return*/, PiCoinFill];
                case 869: return [4 /*yield*/, import("react-icons/pi")];
                case 870:
                    PiCoinVerticalFill = (_b.sent()).PiCoinVerticalFill;
                    return [2 /*return*/, PiCoinVerticalFill];
                case 871: return [4 /*yield*/, import("react-icons/pi")];
                case 872:
                    PiCoinsFill = (_b.sent()).PiCoinsFill;
                    return [2 /*return*/, PiCoinsFill];
                case 873: return [4 /*yield*/, import("react-icons/pi")];
                case 874:
                    PiColumnsFill = (_b.sent()).PiColumnsFill;
                    return [2 /*return*/, PiColumnsFill];
                case 875: return [4 /*yield*/, import("react-icons/pi")];
                case 876:
                    PiColumnsPlusLeftFill = (_b.sent()).PiColumnsPlusLeftFill;
                    return [2 /*return*/, PiColumnsPlusLeftFill];
                case 877: return [4 /*yield*/, import("react-icons/pi")];
                case 878:
                    PiColumnsPlusRightFill = (_b.sent()).PiColumnsPlusRightFill;
                    return [2 /*return*/, PiColumnsPlusRightFill];
                case 879: return [4 /*yield*/, import("react-icons/pi")];
                case 880:
                    PiCommandFill = (_b.sent()).PiCommandFill;
                    return [2 /*return*/, PiCommandFill];
                case 881: return [4 /*yield*/, import("react-icons/pi")];
                case 882:
                    PiCompassFill = (_b.sent()).PiCompassFill;
                    return [2 /*return*/, PiCompassFill];
                case 883: return [4 /*yield*/, import("react-icons/pi")];
                case 884:
                    PiCompassRoseFill = (_b.sent()).PiCompassRoseFill;
                    return [2 /*return*/, PiCompassRoseFill];
                case 885: return [4 /*yield*/, import("react-icons/pi")];
                case 886:
                    PiCompassToolFill = (_b.sent()).PiCompassToolFill;
                    return [2 /*return*/, PiCompassToolFill];
                case 887: return [4 /*yield*/, import("react-icons/pi")];
                case 888:
                    PiComputerTowerFill = (_b.sent()).PiComputerTowerFill;
                    return [2 /*return*/, PiComputerTowerFill];
                case 889: return [4 /*yield*/, import("react-icons/pi")];
                case 890:
                    PiConfettiFill = (_b.sent()).PiConfettiFill;
                    return [2 /*return*/, PiConfettiFill];
                case 891: return [4 /*yield*/, import("react-icons/pi")];
                case 892:
                    PiContactlessPaymentFill = (_b.sent()).PiContactlessPaymentFill;
                    return [2 /*return*/, PiContactlessPaymentFill];
                case 893: return [4 /*yield*/, import("react-icons/pi")];
                case 894:
                    PiControlFill = (_b.sent()).PiControlFill;
                    return [2 /*return*/, PiControlFill];
                case 895: return [4 /*yield*/, import("react-icons/pi")];
                case 896:
                    PiCookieFill = (_b.sent()).PiCookieFill;
                    return [2 /*return*/, PiCookieFill];
                case 897: return [4 /*yield*/, import("react-icons/pi")];
                case 898:
                    PiCookingPotFill = (_b.sent()).PiCookingPotFill;
                    return [2 /*return*/, PiCookingPotFill];
                case 899: return [4 /*yield*/, import("react-icons/pi")];
                case 900:
                    PiCopyFill = (_b.sent()).PiCopyFill;
                    return [2 /*return*/, PiCopyFill];
                case 901: return [4 /*yield*/, import("react-icons/pi")];
                case 902:
                    PiCopySimpleFill = (_b.sent()).PiCopySimpleFill;
                    return [2 /*return*/, PiCopySimpleFill];
                case 903: return [4 /*yield*/, import("react-icons/pi")];
                case 904:
                    PiCopyleftFill = (_b.sent()).PiCopyleftFill;
                    return [2 /*return*/, PiCopyleftFill];
                case 905: return [4 /*yield*/, import("react-icons/pi")];
                case 906:
                    PiCopyrightFill = (_b.sent()).PiCopyrightFill;
                    return [2 /*return*/, PiCopyrightFill];
                case 907: return [4 /*yield*/, import("react-icons/pi")];
                case 908:
                    PiCornersInFill = (_b.sent()).PiCornersInFill;
                    return [2 /*return*/, PiCornersInFill];
                case 909: return [4 /*yield*/, import("react-icons/pi")];
                case 910:
                    PiCornersOutFill = (_b.sent()).PiCornersOutFill;
                    return [2 /*return*/, PiCornersOutFill];
                case 911: return [4 /*yield*/, import("react-icons/pi")];
                case 912:
                    PiCouchFill = (_b.sent()).PiCouchFill;
                    return [2 /*return*/, PiCouchFill];
                case 913: return [4 /*yield*/, import("react-icons/pi")];
                case 914:
                    PiCourtBasketballFill = (_b.sent()).PiCourtBasketballFill;
                    return [2 /*return*/, PiCourtBasketballFill];
                case 915: return [4 /*yield*/, import("react-icons/pi")];
                case 916:
                    PiCowFill = (_b.sent()).PiCowFill;
                    return [2 /*return*/, PiCowFill];
                case 917: return [4 /*yield*/, import("react-icons/pi")];
                case 918:
                    PiCowboyHatFill = (_b.sent()).PiCowboyHatFill;
                    return [2 /*return*/, PiCowboyHatFill];
                case 919: return [4 /*yield*/, import("react-icons/pi")];
                case 920:
                    PiCpuFill = (_b.sent()).PiCpuFill;
                    return [2 /*return*/, PiCpuFill];
                case 921: return [4 /*yield*/, import("react-icons/pi")];
                case 922:
                    PiCraneFill = (_b.sent()).PiCraneFill;
                    return [2 /*return*/, PiCraneFill];
                case 923: return [4 /*yield*/, import("react-icons/pi")];
                case 924:
                    PiCraneTowerFill = (_b.sent()).PiCraneTowerFill;
                    return [2 /*return*/, PiCraneTowerFill];
                case 925: return [4 /*yield*/, import("react-icons/pi")];
                case 926:
                    PiCreditCardFill = (_b.sent()).PiCreditCardFill;
                    return [2 /*return*/, PiCreditCardFill];
                case 927: return [4 /*yield*/, import("react-icons/pi")];
                case 928:
                    PiCricketFill = (_b.sent()).PiCricketFill;
                    return [2 /*return*/, PiCricketFill];
                case 929: return [4 /*yield*/, import("react-icons/pi")];
                case 930:
                    PiCropFill = (_b.sent()).PiCropFill;
                    return [2 /*return*/, PiCropFill];
                case 931: return [4 /*yield*/, import("react-icons/pi")];
                case 932:
                    PiCrossFill = (_b.sent()).PiCrossFill;
                    return [2 /*return*/, PiCrossFill];
                case 933: return [4 /*yield*/, import("react-icons/pi")];
                case 934:
                    PiCrosshairFill = (_b.sent()).PiCrosshairFill;
                    return [2 /*return*/, PiCrosshairFill];
                case 935: return [4 /*yield*/, import("react-icons/pi")];
                case 936:
                    PiCrosshairSimpleFill = (_b.sent()).PiCrosshairSimpleFill;
                    return [2 /*return*/, PiCrosshairSimpleFill];
                case 937: return [4 /*yield*/, import("react-icons/pi")];
                case 938:
                    PiCrownCrossFill = (_b.sent()).PiCrownCrossFill;
                    return [2 /*return*/, PiCrownCrossFill];
                case 939: return [4 /*yield*/, import("react-icons/pi")];
                case 940:
                    PiCrownFill = (_b.sent()).PiCrownFill;
                    return [2 /*return*/, PiCrownFill];
                case 941: return [4 /*yield*/, import("react-icons/pi")];
                case 942:
                    PiCrownSimpleFill = (_b.sent()).PiCrownSimpleFill;
                    return [2 /*return*/, PiCrownSimpleFill];
                case 943: return [4 /*yield*/, import("react-icons/pi")];
                case 944:
                    PiCubeFill = (_b.sent()).PiCubeFill;
                    return [2 /*return*/, PiCubeFill];
                case 945: return [4 /*yield*/, import("react-icons/pi")];
                case 946:
                    PiCubeFocusFill = (_b.sent()).PiCubeFocusFill;
                    return [2 /*return*/, PiCubeFocusFill];
                case 947: return [4 /*yield*/, import("react-icons/pi")];
                case 948:
                    PiCubeTransparentFill = (_b.sent()).PiCubeTransparentFill;
                    return [2 /*return*/, PiCubeTransparentFill];
                case 949: return [4 /*yield*/, import("react-icons/pi")];
                case 950:
                    PiCurrencyBtcFill = (_b.sent()).PiCurrencyBtcFill;
                    return [2 /*return*/, PiCurrencyBtcFill];
                case 951: return [4 /*yield*/, import("react-icons/pi")];
                case 952:
                    PiCurrencyCircleDollarFill = (_b.sent()).PiCurrencyCircleDollarFill;
                    return [2 /*return*/, PiCurrencyCircleDollarFill];
                case 953: return [4 /*yield*/, import("react-icons/pi")];
                case 954:
                    PiCurrencyCnyFill = (_b.sent()).PiCurrencyCnyFill;
                    return [2 /*return*/, PiCurrencyCnyFill];
                case 955: return [4 /*yield*/, import("react-icons/pi")];
                case 956:
                    PiCurrencyDollarFill = (_b.sent()).PiCurrencyDollarFill;
                    return [2 /*return*/, PiCurrencyDollarFill];
                case 957: return [4 /*yield*/, import("react-icons/pi")];
                case 958:
                    PiCurrencyDollarSimpleFill = (_b.sent()).PiCurrencyDollarSimpleFill;
                    return [2 /*return*/, PiCurrencyDollarSimpleFill];
                case 959: return [4 /*yield*/, import("react-icons/pi")];
                case 960:
                    PiCurrencyEthFill = (_b.sent()).PiCurrencyEthFill;
                    return [2 /*return*/, PiCurrencyEthFill];
                case 961: return [4 /*yield*/, import("react-icons/pi")];
                case 962:
                    PiCurrencyEurFill = (_b.sent()).PiCurrencyEurFill;
                    return [2 /*return*/, PiCurrencyEurFill];
                case 963: return [4 /*yield*/, import("react-icons/pi")];
                case 964:
                    PiCurrencyGbpFill = (_b.sent()).PiCurrencyGbpFill;
                    return [2 /*return*/, PiCurrencyGbpFill];
                case 965: return [4 /*yield*/, import("react-icons/pi")];
                case 966:
                    PiCurrencyInrFill = (_b.sent()).PiCurrencyInrFill;
                    return [2 /*return*/, PiCurrencyInrFill];
                case 967: return [4 /*yield*/, import("react-icons/pi")];
                case 968:
                    PiCurrencyJpyFill = (_b.sent()).PiCurrencyJpyFill;
                    return [2 /*return*/, PiCurrencyJpyFill];
                case 969: return [4 /*yield*/, import("react-icons/pi")];
                case 970:
                    PiCurrencyKrwFill = (_b.sent()).PiCurrencyKrwFill;
                    return [2 /*return*/, PiCurrencyKrwFill];
                case 971: return [4 /*yield*/, import("react-icons/pi")];
                case 972:
                    PiCurrencyKztFill = (_b.sent()).PiCurrencyKztFill;
                    return [2 /*return*/, PiCurrencyKztFill];
                case 973: return [4 /*yield*/, import("react-icons/pi")];
                case 974:
                    PiCurrencyNgnFill = (_b.sent()).PiCurrencyNgnFill;
                    return [2 /*return*/, PiCurrencyNgnFill];
                case 975: return [4 /*yield*/, import("react-icons/pi")];
                case 976:
                    PiCurrencyRubFill = (_b.sent()).PiCurrencyRubFill;
                    return [2 /*return*/, PiCurrencyRubFill];
                case 977: return [4 /*yield*/, import("react-icons/pi")];
                case 978:
                    PiCursorClickFill = (_b.sent()).PiCursorClickFill;
                    return [2 /*return*/, PiCursorClickFill];
                case 979: return [4 /*yield*/, import("react-icons/pi")];
                case 980:
                    PiCursorFill = (_b.sent()).PiCursorFill;
                    return [2 /*return*/, PiCursorFill];
                case 981: return [4 /*yield*/, import("react-icons/pi")];
                case 982:
                    PiCursorTextFill = (_b.sent()).PiCursorTextFill;
                    return [2 /*return*/, PiCursorTextFill];
                case 983: return [4 /*yield*/, import("react-icons/pi")];
                case 984:
                    PiCylinderFill = (_b.sent()).PiCylinderFill;
                    return [2 /*return*/, PiCylinderFill];
                case 985: return [4 /*yield*/, import("react-icons/pi")];
                case 986:
                    PiDatabaseFill = (_b.sent()).PiDatabaseFill;
                    return [2 /*return*/, PiDatabaseFill];
                case 987: return [4 /*yield*/, import("react-icons/pi")];
                case 988:
                    PiDeskFill = (_b.sent()).PiDeskFill;
                    return [2 /*return*/, PiDeskFill];
                case 989: return [4 /*yield*/, import("react-icons/pi")];
                case 990:
                    PiDesktopFill = (_b.sent()).PiDesktopFill;
                    return [2 /*return*/, PiDesktopFill];
                case 991: return [4 /*yield*/, import("react-icons/pi")];
                case 992:
                    PiDesktopTowerFill = (_b.sent()).PiDesktopTowerFill;
                    return [2 /*return*/, PiDesktopTowerFill];
                case 993: return [4 /*yield*/, import("react-icons/pi")];
                case 994:
                    PiDetectiveFill = (_b.sent()).PiDetectiveFill;
                    return [2 /*return*/, PiDetectiveFill];
                case 995: return [4 /*yield*/, import("react-icons/pi")];
                case 996:
                    PiDevToLogoFill = (_b.sent()).PiDevToLogoFill;
                    return [2 /*return*/, PiDevToLogoFill];
                case 997: return [4 /*yield*/, import("react-icons/pi")];
                case 998:
                    PiDeviceMobileCameraFill = (_b.sent()).PiDeviceMobileCameraFill;
                    return [2 /*return*/, PiDeviceMobileCameraFill];
                case 999: return [4 /*yield*/, import("react-icons/pi")];
                case 1000:
                    PiDeviceMobileFill = (_b.sent()).PiDeviceMobileFill;
                    return [2 /*return*/, PiDeviceMobileFill];
                case 1001: return [4 /*yield*/, import("react-icons/pi")];
                case 1002:
                    PiDeviceMobileSlashFill = (_b.sent()).PiDeviceMobileSlashFill;
                    return [2 /*return*/, PiDeviceMobileSlashFill];
                case 1003: return [4 /*yield*/, import("react-icons/pi")];
                case 1004:
                    PiDeviceMobileSpeakerFill = (_b.sent()).PiDeviceMobileSpeakerFill;
                    return [2 /*return*/, PiDeviceMobileSpeakerFill];
                case 1005: return [4 /*yield*/, import("react-icons/pi")];
                case 1006:
                    PiDeviceRotateFill = (_b.sent()).PiDeviceRotateFill;
                    return [2 /*return*/, PiDeviceRotateFill];
                case 1007: return [4 /*yield*/, import("react-icons/pi")];
                case 1008:
                    PiDeviceTabletCameraFill = (_b.sent()).PiDeviceTabletCameraFill;
                    return [2 /*return*/, PiDeviceTabletCameraFill];
                case 1009: return [4 /*yield*/, import("react-icons/pi")];
                case 1010:
                    PiDeviceTabletFill = (_b.sent()).PiDeviceTabletFill;
                    return [2 /*return*/, PiDeviceTabletFill];
                case 1011: return [4 /*yield*/, import("react-icons/pi")];
                case 1012:
                    PiDeviceTabletSpeakerFill = (_b.sent()).PiDeviceTabletSpeakerFill;
                    return [2 /*return*/, PiDeviceTabletSpeakerFill];
                case 1013: return [4 /*yield*/, import("react-icons/pi")];
                case 1014:
                    PiDevicesFill = (_b.sent()).PiDevicesFill;
                    return [2 /*return*/, PiDevicesFill];
                case 1015: return [4 /*yield*/, import("react-icons/pi")];
                case 1016:
                    PiDiamondFill = (_b.sent()).PiDiamondFill;
                    return [2 /*return*/, PiDiamondFill];
                case 1017: return [4 /*yield*/, import("react-icons/pi")];
                case 1018:
                    PiDiamondsFourFill = (_b.sent()).PiDiamondsFourFill;
                    return [2 /*return*/, PiDiamondsFourFill];
                case 1019: return [4 /*yield*/, import("react-icons/pi")];
                case 1020:
                    PiDiceFiveFill = (_b.sent()).PiDiceFiveFill;
                    return [2 /*return*/, PiDiceFiveFill];
                case 1021: return [4 /*yield*/, import("react-icons/pi")];
                case 1022:
                    PiDiceFourFill = (_b.sent()).PiDiceFourFill;
                    return [2 /*return*/, PiDiceFourFill];
                case 1023: return [4 /*yield*/, import("react-icons/pi")];
                case 1024:
                    PiDiceOneFill = (_b.sent()).PiDiceOneFill;
                    return [2 /*return*/, PiDiceOneFill];
                case 1025: return [4 /*yield*/, import("react-icons/pi")];
                case 1026:
                    PiDiceSixFill = (_b.sent()).PiDiceSixFill;
                    return [2 /*return*/, PiDiceSixFill];
                case 1027: return [4 /*yield*/, import("react-icons/pi")];
                case 1028:
                    PiDiceThreeFill = (_b.sent()).PiDiceThreeFill;
                    return [2 /*return*/, PiDiceThreeFill];
                case 1029: return [4 /*yield*/, import("react-icons/pi")];
                case 1030:
                    PiDiceTwoFill = (_b.sent()).PiDiceTwoFill;
                    return [2 /*return*/, PiDiceTwoFill];
                case 1031: return [4 /*yield*/, import("react-icons/pi")];
                case 1032:
                    PiDiscFill = (_b.sent()).PiDiscFill;
                    return [2 /*return*/, PiDiscFill];
                case 1033: return [4 /*yield*/, import("react-icons/pi")];
                case 1034:
                    PiDiscoBallFill = (_b.sent()).PiDiscoBallFill;
                    return [2 /*return*/, PiDiscoBallFill];
                case 1035: return [4 /*yield*/, import("react-icons/pi")];
                case 1036:
                    PiDiscordLogoFill = (_b.sent()).PiDiscordLogoFill;
                    return [2 /*return*/, PiDiscordLogoFill];
                case 1037: return [4 /*yield*/, import("react-icons/pi")];
                case 1038:
                    PiDivideFill = (_b.sent()).PiDivideFill;
                    return [2 /*return*/, PiDivideFill];
                case 1039: return [4 /*yield*/, import("react-icons/pi")];
                case 1040:
                    PiDnaFill = (_b.sent()).PiDnaFill;
                    return [2 /*return*/, PiDnaFill];
                case 1041: return [4 /*yield*/, import("react-icons/pi")];
                case 1042:
                    PiDogFill = (_b.sent()).PiDogFill;
                    return [2 /*return*/, PiDogFill];
                case 1043: return [4 /*yield*/, import("react-icons/pi")];
                case 1044:
                    PiDoorFill = (_b.sent()).PiDoorFill;
                    return [2 /*return*/, PiDoorFill];
                case 1045: return [4 /*yield*/, import("react-icons/pi")];
                case 1046:
                    PiDoorOpenFill = (_b.sent()).PiDoorOpenFill;
                    return [2 /*return*/, PiDoorOpenFill];
                case 1047: return [4 /*yield*/, import("react-icons/pi")];
                case 1048:
                    PiDotFill = (_b.sent()).PiDotFill;
                    return [2 /*return*/, PiDotFill];
                case 1049: return [4 /*yield*/, import("react-icons/pi")];
                case 1050:
                    PiDotOutlineFill = (_b.sent()).PiDotOutlineFill;
                    return [2 /*return*/, PiDotOutlineFill];
                case 1051: return [4 /*yield*/, import("react-icons/pi")];
                case 1052:
                    PiDotsNineFill = (_b.sent()).PiDotsNineFill;
                    return [2 /*return*/, PiDotsNineFill];
                case 1053: return [4 /*yield*/, import("react-icons/pi")];
                case 1054:
                    PiDotsSixFill = (_b.sent()).PiDotsSixFill;
                    return [2 /*return*/, PiDotsSixFill];
                case 1055: return [4 /*yield*/, import("react-icons/pi")];
                case 1056:
                    PiDotsSixVerticalFill = (_b.sent()).PiDotsSixVerticalFill;
                    return [2 /*return*/, PiDotsSixVerticalFill];
                case 1057: return [4 /*yield*/, import("react-icons/pi")];
                case 1058:
                    PiDotsThreeCircleFill = (_b.sent()).PiDotsThreeCircleFill;
                    return [2 /*return*/, PiDotsThreeCircleFill];
                case 1059: return [4 /*yield*/, import("react-icons/pi")];
                case 1060:
                    PiDotsThreeCircleVerticalFill = (_b.sent()).PiDotsThreeCircleVerticalFill;
                    return [2 /*return*/, PiDotsThreeCircleVerticalFill];
                case 1061: return [4 /*yield*/, import("react-icons/pi")];
                case 1062:
                    PiDotsThreeFill = (_b.sent()).PiDotsThreeFill;
                    return [2 /*return*/, PiDotsThreeFill];
                case 1063: return [4 /*yield*/, import("react-icons/pi")];
                case 1064:
                    PiDotsThreeOutlineFill = (_b.sent()).PiDotsThreeOutlineFill;
                    return [2 /*return*/, PiDotsThreeOutlineFill];
                case 1065: return [4 /*yield*/, import("react-icons/pi")];
                case 1066:
                    PiDotsThreeOutlineVerticalFill = (_b.sent()).PiDotsThreeOutlineVerticalFill;
                    return [2 /*return*/, PiDotsThreeOutlineVerticalFill];
                case 1067: return [4 /*yield*/, import("react-icons/pi")];
                case 1068:
                    PiDotsThreeVerticalFill = (_b.sent()).PiDotsThreeVerticalFill;
                    return [2 /*return*/, PiDotsThreeVerticalFill];
                case 1069: return [4 /*yield*/, import("react-icons/pi")];
                case 1070:
                    PiDownloadFill = (_b.sent()).PiDownloadFill;
                    return [2 /*return*/, PiDownloadFill];
                case 1071: return [4 /*yield*/, import("react-icons/pi")];
                case 1072:
                    PiDownloadSimpleFill = (_b.sent()).PiDownloadSimpleFill;
                    return [2 /*return*/, PiDownloadSimpleFill];
                case 1073: return [4 /*yield*/, import("react-icons/pi")];
                case 1074:
                    PiDressFill = (_b.sent()).PiDressFill;
                    return [2 /*return*/, PiDressFill];
                case 1075: return [4 /*yield*/, import("react-icons/pi")];
                case 1076:
                    PiDresserFill = (_b.sent()).PiDresserFill;
                    return [2 /*return*/, PiDresserFill];
                case 1077: return [4 /*yield*/, import("react-icons/pi")];
                case 1078:
                    PiDribbbleLogoFill = (_b.sent()).PiDribbbleLogoFill;
                    return [2 /*return*/, PiDribbbleLogoFill];
                case 1079: return [4 /*yield*/, import("react-icons/pi")];
                case 1080:
                    PiDroneFill = (_b.sent()).PiDroneFill;
                    return [2 /*return*/, PiDroneFill];
                case 1081: return [4 /*yield*/, import("react-icons/pi")];
                case 1082:
                    PiDropFill = (_b.sent()).PiDropFill;
                    return [2 /*return*/, PiDropFill];
                case 1083: return [4 /*yield*/, import("react-icons/pi")];
                case 1084:
                    PiDropHalfBottomFill = (_b.sent()).PiDropHalfBottomFill;
                    return [2 /*return*/, PiDropHalfBottomFill];
                case 1085: return [4 /*yield*/, import("react-icons/pi")];
                case 1086:
                    PiDropHalfFill = (_b.sent()).PiDropHalfFill;
                    return [2 /*return*/, PiDropHalfFill];
                case 1087: return [4 /*yield*/, import("react-icons/pi")];
                case 1088:
                    PiDropSimpleFill = (_b.sent()).PiDropSimpleFill;
                    return [2 /*return*/, PiDropSimpleFill];
                case 1089: return [4 /*yield*/, import("react-icons/pi")];
                case 1090:
                    PiDropSlashFill = (_b.sent()).PiDropSlashFill;
                    return [2 /*return*/, PiDropSlashFill];
                case 1091: return [4 /*yield*/, import("react-icons/pi")];
                case 1092:
                    PiDropboxLogoFill = (_b.sent()).PiDropboxLogoFill;
                    return [2 /*return*/, PiDropboxLogoFill];
                case 1093: return [4 /*yield*/, import("react-icons/pi")];
                case 1094:
                    PiEarFill = (_b.sent()).PiEarFill;
                    return [2 /*return*/, PiEarFill];
                case 1095: return [4 /*yield*/, import("react-icons/pi")];
                case 1096:
                    PiEarSlashFill = (_b.sent()).PiEarSlashFill;
                    return [2 /*return*/, PiEarSlashFill];
                case 1097: return [4 /*yield*/, import("react-icons/pi")];
                case 1098:
                    PiEggCrackFill = (_b.sent()).PiEggCrackFill;
                    return [2 /*return*/, PiEggCrackFill];
                case 1099: return [4 /*yield*/, import("react-icons/pi")];
                case 1100:
                    PiEggFill = (_b.sent()).PiEggFill;
                    return [2 /*return*/, PiEggFill];
                case 1101: return [4 /*yield*/, import("react-icons/pi")];
                case 1102:
                    PiEjectFill = (_b.sent()).PiEjectFill;
                    return [2 /*return*/, PiEjectFill];
                case 1103: return [4 /*yield*/, import("react-icons/pi")];
                case 1104:
                    PiEjectSimpleFill = (_b.sent()).PiEjectSimpleFill;
                    return [2 /*return*/, PiEjectSimpleFill];
                case 1105: return [4 /*yield*/, import("react-icons/pi")];
                case 1106:
                    PiElevatorFill = (_b.sent()).PiElevatorFill;
                    return [2 /*return*/, PiElevatorFill];
                case 1107: return [4 /*yield*/, import("react-icons/pi")];
                case 1108:
                    PiEmptyFill = (_b.sent()).PiEmptyFill;
                    return [2 /*return*/, PiEmptyFill];
                case 1109: return [4 /*yield*/, import("react-icons/pi")];
                case 1110:
                    PiEngineFill = (_b.sent()).PiEngineFill;
                    return [2 /*return*/, PiEngineFill];
                case 1111: return [4 /*yield*/, import("react-icons/pi")];
                case 1112:
                    PiEnvelopeFill = (_b.sent()).PiEnvelopeFill;
                    return [2 /*return*/, PiEnvelopeFill];
                case 1113: return [4 /*yield*/, import("react-icons/pi")];
                case 1114:
                    PiEnvelopeOpenFill = (_b.sent()).PiEnvelopeOpenFill;
                    return [2 /*return*/, PiEnvelopeOpenFill];
                case 1115: return [4 /*yield*/, import("react-icons/pi")];
                case 1116:
                    PiEnvelopeSimpleFill = (_b.sent()).PiEnvelopeSimpleFill;
                    return [2 /*return*/, PiEnvelopeSimpleFill];
                case 1117: return [4 /*yield*/, import("react-icons/pi")];
                case 1118:
                    PiEnvelopeSimpleOpenFill = (_b.sent()).PiEnvelopeSimpleOpenFill;
                    return [2 /*return*/, PiEnvelopeSimpleOpenFill];
                case 1119: return [4 /*yield*/, import("react-icons/pi")];
                case 1120:
                    PiEqualizerFill = (_b.sent()).PiEqualizerFill;
                    return [2 /*return*/, PiEqualizerFill];
                case 1121: return [4 /*yield*/, import("react-icons/pi")];
                case 1122:
                    PiEqualsFill = (_b.sent()).PiEqualsFill;
                    return [2 /*return*/, PiEqualsFill];
                case 1123: return [4 /*yield*/, import("react-icons/pi")];
                case 1124:
                    PiEraserFill = (_b.sent()).PiEraserFill;
                    return [2 /*return*/, PiEraserFill];
                case 1125: return [4 /*yield*/, import("react-icons/pi")];
                case 1126:
                    PiEscalatorDownFill = (_b.sent()).PiEscalatorDownFill;
                    return [2 /*return*/, PiEscalatorDownFill];
                case 1127: return [4 /*yield*/, import("react-icons/pi")];
                case 1128:
                    PiEscalatorUpFill = (_b.sent()).PiEscalatorUpFill;
                    return [2 /*return*/, PiEscalatorUpFill];
                case 1129: return [4 /*yield*/, import("react-icons/pi")];
                case 1130:
                    PiExamFill = (_b.sent()).PiExamFill;
                    return [2 /*return*/, PiExamFill];
                case 1131: return [4 /*yield*/, import("react-icons/pi")];
                case 1132:
                    PiExclamationMarkFill = (_b.sent()).PiExclamationMarkFill;
                    return [2 /*return*/, PiExclamationMarkFill];
                case 1133: return [4 /*yield*/, import("react-icons/pi")];
                case 1134:
                    PiExcludeFill = (_b.sent()).PiExcludeFill;
                    return [2 /*return*/, PiExcludeFill];
                case 1135: return [4 /*yield*/, import("react-icons/pi")];
                case 1136:
                    PiExcludeSquareFill = (_b.sent()).PiExcludeSquareFill;
                    return [2 /*return*/, PiExcludeSquareFill];
                case 1137: return [4 /*yield*/, import("react-icons/pi")];
                case 1138:
                    PiExportFill = (_b.sent()).PiExportFill;
                    return [2 /*return*/, PiExportFill];
                case 1139: return [4 /*yield*/, import("react-icons/pi")];
                case 1140:
                    PiEyeClosedFill = (_b.sent()).PiEyeClosedFill;
                    return [2 /*return*/, PiEyeClosedFill];
                case 1141: return [4 /*yield*/, import("react-icons/pi")];
                case 1142:
                    PiEyeFill = (_b.sent()).PiEyeFill;
                    return [2 /*return*/, PiEyeFill];
                case 1143: return [4 /*yield*/, import("react-icons/pi")];
                case 1144:
                    PiEyeSlashFill = (_b.sent()).PiEyeSlashFill;
                    return [2 /*return*/, PiEyeSlashFill];
                case 1145: return [4 /*yield*/, import("react-icons/pi")];
                case 1146:
                    PiEyedropperFill = (_b.sent()).PiEyedropperFill;
                    return [2 /*return*/, PiEyedropperFill];
                case 1147: return [4 /*yield*/, import("react-icons/pi")];
                case 1148:
                    PiEyedropperSampleFill = (_b.sent()).PiEyedropperSampleFill;
                    return [2 /*return*/, PiEyedropperSampleFill];
                case 1149: return [4 /*yield*/, import("react-icons/pi")];
                case 1150:
                    PiEyeglassesFill = (_b.sent()).PiEyeglassesFill;
                    return [2 /*return*/, PiEyeglassesFill];
                case 1151: return [4 /*yield*/, import("react-icons/pi")];
                case 1152:
                    PiEyesFill = (_b.sent()).PiEyesFill;
                    return [2 /*return*/, PiEyesFill];
                case 1153: return [4 /*yield*/, import("react-icons/pi")];
                case 1154:
                    PiFaceMaskFill = (_b.sent()).PiFaceMaskFill;
                    return [2 /*return*/, PiFaceMaskFill];
                case 1155: return [4 /*yield*/, import("react-icons/pi")];
                case 1156:
                    PiFacebookLogoFill = (_b.sent()).PiFacebookLogoFill;
                    return [2 /*return*/, PiFacebookLogoFill];
                case 1157: return [4 /*yield*/, import("react-icons/pi")];
                case 1158:
                    PiFactoryFill = (_b.sent()).PiFactoryFill;
                    return [2 /*return*/, PiFactoryFill];
                case 1159: return [4 /*yield*/, import("react-icons/pi")];
                case 1160:
                    PiFadersFill = (_b.sent()).PiFadersFill;
                    return [2 /*return*/, PiFadersFill];
                case 1161: return [4 /*yield*/, import("react-icons/pi")];
                case 1162:
                    PiFadersHorizontalFill = (_b.sent()).PiFadersHorizontalFill;
                    return [2 /*return*/, PiFadersHorizontalFill];
                case 1163: return [4 /*yield*/, import("react-icons/pi")];
                case 1164:
                    PiFalloutShelterFill = (_b.sent()).PiFalloutShelterFill;
                    return [2 /*return*/, PiFalloutShelterFill];
                case 1165: return [4 /*yield*/, import("react-icons/pi")];
                case 1166:
                    PiFanFill = (_b.sent()).PiFanFill;
                    return [2 /*return*/, PiFanFill];
                case 1167: return [4 /*yield*/, import("react-icons/pi")];
                case 1168:
                    PiFarmFill = (_b.sent()).PiFarmFill;
                    return [2 /*return*/, PiFarmFill];
                case 1169: return [4 /*yield*/, import("react-icons/pi")];
                case 1170:
                    PiFastForwardCircleFill = (_b.sent()).PiFastForwardCircleFill;
                    return [2 /*return*/, PiFastForwardCircleFill];
                case 1171: return [4 /*yield*/, import("react-icons/pi")];
                case 1172:
                    PiFastForwardFill = (_b.sent()).PiFastForwardFill;
                    return [2 /*return*/, PiFastForwardFill];
                case 1173: return [4 /*yield*/, import("react-icons/pi")];
                case 1174:
                    PiFeatherFill = (_b.sent()).PiFeatherFill;
                    return [2 /*return*/, PiFeatherFill];
                case 1175: return [4 /*yield*/, import("react-icons/pi")];
                case 1176:
                    PiFediverseLogoFill = (_b.sent()).PiFediverseLogoFill;
                    return [2 /*return*/, PiFediverseLogoFill];
                case 1177: return [4 /*yield*/, import("react-icons/pi")];
                case 1178:
                    PiFigmaLogoFill = (_b.sent()).PiFigmaLogoFill;
                    return [2 /*return*/, PiFigmaLogoFill];
                case 1179: return [4 /*yield*/, import("react-icons/pi")];
                case 1180:
                    PiFileArchiveFill = (_b.sent()).PiFileArchiveFill;
                    return [2 /*return*/, PiFileArchiveFill];
                case 1181: return [4 /*yield*/, import("react-icons/pi")];
                case 1182:
                    PiFileArrowDownFill = (_b.sent()).PiFileArrowDownFill;
                    return [2 /*return*/, PiFileArrowDownFill];
                case 1183: return [4 /*yield*/, import("react-icons/pi")];
                case 1184:
                    PiFileArrowUpFill = (_b.sent()).PiFileArrowUpFill;
                    return [2 /*return*/, PiFileArrowUpFill];
                case 1185: return [4 /*yield*/, import("react-icons/pi")];
                case 1186:
                    PiFileAudioFill = (_b.sent()).PiFileAudioFill;
                    return [2 /*return*/, PiFileAudioFill];
                case 1187: return [4 /*yield*/, import("react-icons/pi")];
                case 1188:
                    PiFileCFill = (_b.sent()).PiFileCFill;
                    return [2 /*return*/, PiFileCFill];
                case 1189: return [4 /*yield*/, import("react-icons/pi")];
                case 1190:
                    PiFileCSharpFill = (_b.sent()).PiFileCSharpFill;
                    return [2 /*return*/, PiFileCSharpFill];
                case 1191: return [4 /*yield*/, import("react-icons/pi")];
                case 1192:
                    PiFileCloudFill = (_b.sent()).PiFileCloudFill;
                    return [2 /*return*/, PiFileCloudFill];
                case 1193: return [4 /*yield*/, import("react-icons/pi")];
                case 1194:
                    PiFileCodeFill = (_b.sent()).PiFileCodeFill;
                    return [2 /*return*/, PiFileCodeFill];
                case 1195: return [4 /*yield*/, import("react-icons/pi")];
                case 1196:
                    PiFileCppFill = (_b.sent()).PiFileCppFill;
                    return [2 /*return*/, PiFileCppFill];
                case 1197: return [4 /*yield*/, import("react-icons/pi")];
                case 1198:
                    PiFileCssFill = (_b.sent()).PiFileCssFill;
                    return [2 /*return*/, PiFileCssFill];
                case 1199: return [4 /*yield*/, import("react-icons/pi")];
                case 1200:
                    PiFileCsvFill = (_b.sent()).PiFileCsvFill;
                    return [2 /*return*/, PiFileCsvFill];
                case 1201: return [4 /*yield*/, import("react-icons/pi")];
                case 1202:
                    PiFileDashedFill = (_b.sent()).PiFileDashedFill;
                    return [2 /*return*/, PiFileDashedFill];
                case 1203: return [4 /*yield*/, import("react-icons/pi")];
                case 1204:
                    PiFileDocFill = (_b.sent()).PiFileDocFill;
                    return [2 /*return*/, PiFileDocFill];
                case 1205: return [4 /*yield*/, import("react-icons/pi")];
                case 1206:
                    PiFileFill = (_b.sent()).PiFileFill;
                    return [2 /*return*/, PiFileFill];
                case 1207: return [4 /*yield*/, import("react-icons/pi")];
                case 1208:
                    PiFileHtmlFill = (_b.sent()).PiFileHtmlFill;
                    return [2 /*return*/, PiFileHtmlFill];
                case 1209: return [4 /*yield*/, import("react-icons/pi")];
                case 1210:
                    PiFileImageFill = (_b.sent()).PiFileImageFill;
                    return [2 /*return*/, PiFileImageFill];
                case 1211: return [4 /*yield*/, import("react-icons/pi")];
                case 1212:
                    PiFileIniFill = (_b.sent()).PiFileIniFill;
                    return [2 /*return*/, PiFileIniFill];
                case 1213: return [4 /*yield*/, import("react-icons/pi")];
                case 1214:
                    PiFileJpgFill = (_b.sent()).PiFileJpgFill;
                    return [2 /*return*/, PiFileJpgFill];
                case 1215: return [4 /*yield*/, import("react-icons/pi")];
                case 1216:
                    PiFileJsFill = (_b.sent()).PiFileJsFill;
                    return [2 /*return*/, PiFileJsFill];
                case 1217: return [4 /*yield*/, import("react-icons/pi")];
                case 1218:
                    PiFileJsxFill = (_b.sent()).PiFileJsxFill;
                    return [2 /*return*/, PiFileJsxFill];
                case 1219: return [4 /*yield*/, import("react-icons/pi")];
                case 1220:
                    PiFileLockFill = (_b.sent()).PiFileLockFill;
                    return [2 /*return*/, PiFileLockFill];
                case 1221: return [4 /*yield*/, import("react-icons/pi")];
                case 1222:
                    PiFileMagnifyingGlassFill = (_b.sent()).PiFileMagnifyingGlassFill;
                    return [2 /*return*/, PiFileMagnifyingGlassFill];
                case 1223: return [4 /*yield*/, import("react-icons/pi")];
                case 1224:
                    PiFileMdFill = (_b.sent()).PiFileMdFill;
                    return [2 /*return*/, PiFileMdFill];
                case 1225: return [4 /*yield*/, import("react-icons/pi")];
                case 1226:
                    PiFileMinusFill = (_b.sent()).PiFileMinusFill;
                    return [2 /*return*/, PiFileMinusFill];
                case 1227: return [4 /*yield*/, import("react-icons/pi")];
                case 1228:
                    PiFilePdfFill = (_b.sent()).PiFilePdfFill;
                    return [2 /*return*/, PiFilePdfFill];
                case 1229: return [4 /*yield*/, import("react-icons/pi")];
                case 1230:
                    PiFilePlusFill = (_b.sent()).PiFilePlusFill;
                    return [2 /*return*/, PiFilePlusFill];
                case 1231: return [4 /*yield*/, import("react-icons/pi")];
                case 1232:
                    PiFilePngFill = (_b.sent()).PiFilePngFill;
                    return [2 /*return*/, PiFilePngFill];
                case 1233: return [4 /*yield*/, import("react-icons/pi")];
                case 1234:
                    PiFilePptFill = (_b.sent()).PiFilePptFill;
                    return [2 /*return*/, PiFilePptFill];
                case 1235: return [4 /*yield*/, import("react-icons/pi")];
                case 1236:
                    PiFilePyFill = (_b.sent()).PiFilePyFill;
                    return [2 /*return*/, PiFilePyFill];
                case 1237: return [4 /*yield*/, import("react-icons/pi")];
                case 1238:
                    PiFileRsFill = (_b.sent()).PiFileRsFill;
                    return [2 /*return*/, PiFileRsFill];
                case 1239: return [4 /*yield*/, import("react-icons/pi")];
                case 1240:
                    PiFileSqlFill = (_b.sent()).PiFileSqlFill;
                    return [2 /*return*/, PiFileSqlFill];
                case 1241: return [4 /*yield*/, import("react-icons/pi")];
                case 1242:
                    PiFileSvgFill = (_b.sent()).PiFileSvgFill;
                    return [2 /*return*/, PiFileSvgFill];
                case 1243: return [4 /*yield*/, import("react-icons/pi")];
                case 1244:
                    PiFileTextFill = (_b.sent()).PiFileTextFill;
                    return [2 /*return*/, PiFileTextFill];
                case 1245: return [4 /*yield*/, import("react-icons/pi")];
                case 1246:
                    PiFileTsFill = (_b.sent()).PiFileTsFill;
                    return [2 /*return*/, PiFileTsFill];
                case 1247: return [4 /*yield*/, import("react-icons/pi")];
                case 1248:
                    PiFileTsxFill = (_b.sent()).PiFileTsxFill;
                    return [2 /*return*/, PiFileTsxFill];
                case 1249: return [4 /*yield*/, import("react-icons/pi")];
                case 1250:
                    PiFileTxtFill = (_b.sent()).PiFileTxtFill;
                    return [2 /*return*/, PiFileTxtFill];
                case 1251: return [4 /*yield*/, import("react-icons/pi")];
                case 1252:
                    PiFileVideoFill = (_b.sent()).PiFileVideoFill;
                    return [2 /*return*/, PiFileVideoFill];
                case 1253: return [4 /*yield*/, import("react-icons/pi")];
                case 1254:
                    PiFileVueFill = (_b.sent()).PiFileVueFill;
                    return [2 /*return*/, PiFileVueFill];
                case 1255: return [4 /*yield*/, import("react-icons/pi")];
                case 1256:
                    PiFileXFill = (_b.sent()).PiFileXFill;
                    return [2 /*return*/, PiFileXFill];
                case 1257: return [4 /*yield*/, import("react-icons/pi")];
                case 1258:
                    PiFileXlsFill = (_b.sent()).PiFileXlsFill;
                    return [2 /*return*/, PiFileXlsFill];
                case 1259: return [4 /*yield*/, import("react-icons/pi")];
                case 1260:
                    PiFileZipFill = (_b.sent()).PiFileZipFill;
                    return [2 /*return*/, PiFileZipFill];
                case 1261: return [4 /*yield*/, import("react-icons/pi")];
                case 1262:
                    PiFilesFill = (_b.sent()).PiFilesFill;
                    return [2 /*return*/, PiFilesFill];
                case 1263: return [4 /*yield*/, import("react-icons/pi")];
                case 1264:
                    PiFilmReelFill = (_b.sent()).PiFilmReelFill;
                    return [2 /*return*/, PiFilmReelFill];
                case 1265: return [4 /*yield*/, import("react-icons/pi")];
                case 1266:
                    PiFilmScriptFill = (_b.sent()).PiFilmScriptFill;
                    return [2 /*return*/, PiFilmScriptFill];
                case 1267: return [4 /*yield*/, import("react-icons/pi")];
                case 1268:
                    PiFilmSlateFill = (_b.sent()).PiFilmSlateFill;
                    return [2 /*return*/, PiFilmSlateFill];
                case 1269: return [4 /*yield*/, import("react-icons/pi")];
                case 1270:
                    PiFilmStripFill = (_b.sent()).PiFilmStripFill;
                    return [2 /*return*/, PiFilmStripFill];
                case 1271: return [4 /*yield*/, import("react-icons/pi")];
                case 1272:
                    PiFingerprintFill = (_b.sent()).PiFingerprintFill;
                    return [2 /*return*/, PiFingerprintFill];
                case 1273: return [4 /*yield*/, import("react-icons/pi")];
                case 1274:
                    PiFingerprintSimpleFill = (_b.sent()).PiFingerprintSimpleFill;
                    return [2 /*return*/, PiFingerprintSimpleFill];
                case 1275: return [4 /*yield*/, import("react-icons/pi")];
                case 1276:
                    PiFinnTheHumanFill = (_b.sent()).PiFinnTheHumanFill;
                    return [2 /*return*/, PiFinnTheHumanFill];
                case 1277: return [4 /*yield*/, import("react-icons/pi")];
                case 1278:
                    PiFireExtinguisherFill = (_b.sent()).PiFireExtinguisherFill;
                    return [2 /*return*/, PiFireExtinguisherFill];
                case 1279: return [4 /*yield*/, import("react-icons/pi")];
                case 1280:
                    PiFireFill = (_b.sent()).PiFireFill;
                    return [2 /*return*/, PiFireFill];
                case 1281: return [4 /*yield*/, import("react-icons/pi")];
                case 1282:
                    PiFireSimpleFill = (_b.sent()).PiFireSimpleFill;
                    return [2 /*return*/, PiFireSimpleFill];
                case 1283: return [4 /*yield*/, import("react-icons/pi")];
                case 1284:
                    PiFireTruckFill = (_b.sent()).PiFireTruckFill;
                    return [2 /*return*/, PiFireTruckFill];
                case 1285: return [4 /*yield*/, import("react-icons/pi")];
                case 1286:
                    PiFirstAidFill = (_b.sent()).PiFirstAidFill;
                    return [2 /*return*/, PiFirstAidFill];
                case 1287: return [4 /*yield*/, import("react-icons/pi")];
                case 1288:
                    PiFirstAidKitFill = (_b.sent()).PiFirstAidKitFill;
                    return [2 /*return*/, PiFirstAidKitFill];
                case 1289: return [4 /*yield*/, import("react-icons/pi")];
                case 1290:
                    PiFishFill = (_b.sent()).PiFishFill;
                    return [2 /*return*/, PiFishFill];
                case 1291: return [4 /*yield*/, import("react-icons/pi")];
                case 1292:
                    PiFishSimpleFill = (_b.sent()).PiFishSimpleFill;
                    return [2 /*return*/, PiFishSimpleFill];
                case 1293: return [4 /*yield*/, import("react-icons/pi")];
                case 1294:
                    PiFlagBannerFill = (_b.sent()).PiFlagBannerFill;
                    return [2 /*return*/, PiFlagBannerFill];
                case 1295: return [4 /*yield*/, import("react-icons/pi")];
                case 1296:
                    PiFlagBannerFoldFill = (_b.sent()).PiFlagBannerFoldFill;
                    return [2 /*return*/, PiFlagBannerFoldFill];
                case 1297: return [4 /*yield*/, import("react-icons/pi")];
                case 1298:
                    PiFlagCheckeredFill = (_b.sent()).PiFlagCheckeredFill;
                    return [2 /*return*/, PiFlagCheckeredFill];
                case 1299: return [4 /*yield*/, import("react-icons/pi")];
                case 1300:
                    PiFlagFill = (_b.sent()).PiFlagFill;
                    return [2 /*return*/, PiFlagFill];
                case 1301: return [4 /*yield*/, import("react-icons/pi")];
                case 1302:
                    PiFlagPennantFill = (_b.sent()).PiFlagPennantFill;
                    return [2 /*return*/, PiFlagPennantFill];
                case 1303: return [4 /*yield*/, import("react-icons/pi")];
                case 1304:
                    PiFlameFill = (_b.sent()).PiFlameFill;
                    return [2 /*return*/, PiFlameFill];
                case 1305: return [4 /*yield*/, import("react-icons/pi")];
                case 1306:
                    PiFlashlightFill = (_b.sent()).PiFlashlightFill;
                    return [2 /*return*/, PiFlashlightFill];
                case 1307: return [4 /*yield*/, import("react-icons/pi")];
                case 1308:
                    PiFlaskFill = (_b.sent()).PiFlaskFill;
                    return [2 /*return*/, PiFlaskFill];
                case 1309: return [4 /*yield*/, import("react-icons/pi")];
                case 1310:
                    PiFlipHorizontalFill = (_b.sent()).PiFlipHorizontalFill;
                    return [2 /*return*/, PiFlipHorizontalFill];
                case 1311: return [4 /*yield*/, import("react-icons/pi")];
                case 1312:
                    PiFlipVerticalFill = (_b.sent()).PiFlipVerticalFill;
                    return [2 /*return*/, PiFlipVerticalFill];
                case 1313: return [4 /*yield*/, import("react-icons/pi")];
                case 1314:
                    PiFloppyDiskBackFill = (_b.sent()).PiFloppyDiskBackFill;
                    return [2 /*return*/, PiFloppyDiskBackFill];
                case 1315: return [4 /*yield*/, import("react-icons/pi")];
                case 1316:
                    PiFloppyDiskFill = (_b.sent()).PiFloppyDiskFill;
                    return [2 /*return*/, PiFloppyDiskFill];
                case 1317: return [4 /*yield*/, import("react-icons/pi")];
                case 1318:
                    PiFlowArrowFill = (_b.sent()).PiFlowArrowFill;
                    return [2 /*return*/, PiFlowArrowFill];
                case 1319: return [4 /*yield*/, import("react-icons/pi")];
                case 1320:
                    PiFlowerFill = (_b.sent()).PiFlowerFill;
                    return [2 /*return*/, PiFlowerFill];
                case 1321: return [4 /*yield*/, import("react-icons/pi")];
                case 1322:
                    PiFlowerLotusFill = (_b.sent()).PiFlowerLotusFill;
                    return [2 /*return*/, PiFlowerLotusFill];
                case 1323: return [4 /*yield*/, import("react-icons/pi")];
                case 1324:
                    PiFlowerTulipFill = (_b.sent()).PiFlowerTulipFill;
                    return [2 /*return*/, PiFlowerTulipFill];
                case 1325: return [4 /*yield*/, import("react-icons/pi")];
                case 1326:
                    PiFlyingSaucerFill = (_b.sent()).PiFlyingSaucerFill;
                    return [2 /*return*/, PiFlyingSaucerFill];
                case 1327: return [4 /*yield*/, import("react-icons/pi")];
                case 1328:
                    PiFolderDashedFill = (_b.sent()).PiFolderDashedFill;
                    return [2 /*return*/, PiFolderDashedFill];
                case 1329: return [4 /*yield*/, import("react-icons/pi")];
                case 1330:
                    PiFolderFill = (_b.sent()).PiFolderFill;
                    return [2 /*return*/, PiFolderFill];
                case 1331: return [4 /*yield*/, import("react-icons/pi")];
                case 1332:
                    PiFolderLockFill = (_b.sent()).PiFolderLockFill;
                    return [2 /*return*/, PiFolderLockFill];
                case 1333: return [4 /*yield*/, import("react-icons/pi")];
                case 1334:
                    PiFolderMinusFill = (_b.sent()).PiFolderMinusFill;
                    return [2 /*return*/, PiFolderMinusFill];
                case 1335: return [4 /*yield*/, import("react-icons/pi")];
                case 1336:
                    PiFolderOpenFill = (_b.sent()).PiFolderOpenFill;
                    return [2 /*return*/, PiFolderOpenFill];
                case 1337: return [4 /*yield*/, import("react-icons/pi")];
                case 1338:
                    PiFolderPlusFill = (_b.sent()).PiFolderPlusFill;
                    return [2 /*return*/, PiFolderPlusFill];
                case 1339: return [4 /*yield*/, import("react-icons/pi")];
                case 1340:
                    PiFolderSimpleDashedFill = (_b.sent()).PiFolderSimpleDashedFill;
                    return [2 /*return*/, PiFolderSimpleDashedFill];
                case 1341: return [4 /*yield*/, import("react-icons/pi")];
                case 1342:
                    PiFolderSimpleFill = (_b.sent()).PiFolderSimpleFill;
                    return [2 /*return*/, PiFolderSimpleFill];
                case 1343: return [4 /*yield*/, import("react-icons/pi")];
                case 1344:
                    PiFolderSimpleLockFill = (_b.sent()).PiFolderSimpleLockFill;
                    return [2 /*return*/, PiFolderSimpleLockFill];
                case 1345: return [4 /*yield*/, import("react-icons/pi")];
                case 1346:
                    PiFolderSimpleMinusFill = (_b.sent()).PiFolderSimpleMinusFill;
                    return [2 /*return*/, PiFolderSimpleMinusFill];
                case 1347: return [4 /*yield*/, import("react-icons/pi")];
                case 1348:
                    PiFolderSimplePlusFill = (_b.sent()).PiFolderSimplePlusFill;
                    return [2 /*return*/, PiFolderSimplePlusFill];
                case 1349: return [4 /*yield*/, import("react-icons/pi")];
                case 1350:
                    PiFolderSimpleStarFill = (_b.sent()).PiFolderSimpleStarFill;
                    return [2 /*return*/, PiFolderSimpleStarFill];
                case 1351: return [4 /*yield*/, import("react-icons/pi")];
                case 1352:
                    PiFolderSimpleUserFill = (_b.sent()).PiFolderSimpleUserFill;
                    return [2 /*return*/, PiFolderSimpleUserFill];
                case 1353: return [4 /*yield*/, import("react-icons/pi")];
                case 1354:
                    PiFolderStarFill = (_b.sent()).PiFolderStarFill;
                    return [2 /*return*/, PiFolderStarFill];
                case 1355: return [4 /*yield*/, import("react-icons/pi")];
                case 1356:
                    PiFolderUserFill = (_b.sent()).PiFolderUserFill;
                    return [2 /*return*/, PiFolderUserFill];
                case 1357: return [4 /*yield*/, import("react-icons/pi")];
                case 1358:
                    PiFoldersFill = (_b.sent()).PiFoldersFill;
                    return [2 /*return*/, PiFoldersFill];
                case 1359: return [4 /*yield*/, import("react-icons/pi")];
                case 1360:
                    PiFootballFill = (_b.sent()).PiFootballFill;
                    return [2 /*return*/, PiFootballFill];
                case 1361: return [4 /*yield*/, import("react-icons/pi")];
                case 1362:
                    PiFootballHelmetFill = (_b.sent()).PiFootballHelmetFill;
                    return [2 /*return*/, PiFootballHelmetFill];
                case 1363: return [4 /*yield*/, import("react-icons/pi")];
                case 1364:
                    PiFootprintsFill = (_b.sent()).PiFootprintsFill;
                    return [2 /*return*/, PiFootprintsFill];
                case 1365: return [4 /*yield*/, import("react-icons/pi")];
                case 1366:
                    PiForkKnifeFill = (_b.sent()).PiForkKnifeFill;
                    return [2 /*return*/, PiForkKnifeFill];
                case 1367: return [4 /*yield*/, import("react-icons/pi")];
                case 1368:
                    PiFourKFill = (_b.sent()).PiFourKFill;
                    return [2 /*return*/, PiFourKFill];
                case 1369: return [4 /*yield*/, import("react-icons/pi")];
                case 1370:
                    PiFrameCornersFill = (_b.sent()).PiFrameCornersFill;
                    return [2 /*return*/, PiFrameCornersFill];
                case 1371: return [4 /*yield*/, import("react-icons/pi")];
                case 1372:
                    PiFramerLogoFill = (_b.sent()).PiFramerLogoFill;
                    return [2 /*return*/, PiFramerLogoFill];
                case 1373: return [4 /*yield*/, import("react-icons/pi")];
                case 1374:
                    PiFunctionFill = (_b.sent()).PiFunctionFill;
                    return [2 /*return*/, PiFunctionFill];
                case 1375: return [4 /*yield*/, import("react-icons/pi")];
                case 1376:
                    PiFunnelFill = (_b.sent()).PiFunnelFill;
                    return [2 /*return*/, PiFunnelFill];
                case 1377: return [4 /*yield*/, import("react-icons/pi")];
                case 1378:
                    PiFunnelSimpleFill = (_b.sent()).PiFunnelSimpleFill;
                    return [2 /*return*/, PiFunnelSimpleFill];
                case 1379: return [4 /*yield*/, import("react-icons/pi")];
                case 1380:
                    PiFunnelSimpleXFill = (_b.sent()).PiFunnelSimpleXFill;
                    return [2 /*return*/, PiFunnelSimpleXFill];
                case 1381: return [4 /*yield*/, import("react-icons/pi")];
                case 1382:
                    PiFunnelXFill = (_b.sent()).PiFunnelXFill;
                    return [2 /*return*/, PiFunnelXFill];
                case 1383: return [4 /*yield*/, import("react-icons/pi")];
                case 1384:
                    PiGameControllerFill = (_b.sent()).PiGameControllerFill;
                    return [2 /*return*/, PiGameControllerFill];
                case 1385: return [4 /*yield*/, import("react-icons/pi")];
                case 1386:
                    PiGarageFill = (_b.sent()).PiGarageFill;
                    return [2 /*return*/, PiGarageFill];
                case 1387: return [4 /*yield*/, import("react-icons/pi")];
                case 1388:
                    PiGasCanFill = (_b.sent()).PiGasCanFill;
                    return [2 /*return*/, PiGasCanFill];
                case 1389: return [4 /*yield*/, import("react-icons/pi")];
                case 1390:
                    PiGasPumpFill = (_b.sent()).PiGasPumpFill;
                    return [2 /*return*/, PiGasPumpFill];
                case 1391: return [4 /*yield*/, import("react-icons/pi")];
                case 1392:
                    PiGaugeFill = (_b.sent()).PiGaugeFill;
                    return [2 /*return*/, PiGaugeFill];
                case 1393: return [4 /*yield*/, import("react-icons/pi")];
                case 1394:
                    PiGavelFill = (_b.sent()).PiGavelFill;
                    return [2 /*return*/, PiGavelFill];
                case 1395: return [4 /*yield*/, import("react-icons/pi")];
                case 1396:
                    PiGearFill = (_b.sent()).PiGearFill;
                    return [2 /*return*/, PiGearFill];
                case 1397: return [4 /*yield*/, import("react-icons/pi")];
                case 1398:
                    PiGearFineFill = (_b.sent()).PiGearFineFill;
                    return [2 /*return*/, PiGearFineFill];
                case 1399: return [4 /*yield*/, import("react-icons/pi")];
                case 1400:
                    PiGearSixFill = (_b.sent()).PiGearSixFill;
                    return [2 /*return*/, PiGearSixFill];
                case 1401: return [4 /*yield*/, import("react-icons/pi")];
                case 1402:
                    PiGenderFemaleFill = (_b.sent()).PiGenderFemaleFill;
                    return [2 /*return*/, PiGenderFemaleFill];
                case 1403: return [4 /*yield*/, import("react-icons/pi")];
                case 1404:
                    PiGenderIntersexFill = (_b.sent()).PiGenderIntersexFill;
                    return [2 /*return*/, PiGenderIntersexFill];
                case 1405: return [4 /*yield*/, import("react-icons/pi")];
                case 1406:
                    PiGenderMaleFill = (_b.sent()).PiGenderMaleFill;
                    return [2 /*return*/, PiGenderMaleFill];
                case 1407: return [4 /*yield*/, import("react-icons/pi")];
                case 1408:
                    PiGenderNeuterFill = (_b.sent()).PiGenderNeuterFill;
                    return [2 /*return*/, PiGenderNeuterFill];
                case 1409: return [4 /*yield*/, import("react-icons/pi")];
                case 1410:
                    PiGenderNonbinaryFill = (_b.sent()).PiGenderNonbinaryFill;
                    return [2 /*return*/, PiGenderNonbinaryFill];
                case 1411: return [4 /*yield*/, import("react-icons/pi")];
                case 1412:
                    PiGenderTransgenderFill = (_b.sent()).PiGenderTransgenderFill;
                    return [2 /*return*/, PiGenderTransgenderFill];
                case 1413: return [4 /*yield*/, import("react-icons/pi")];
                case 1414:
                    PiGhostFill = (_b.sent()).PiGhostFill;
                    return [2 /*return*/, PiGhostFill];
                case 1415: return [4 /*yield*/, import("react-icons/pi")];
                case 1416:
                    PiGifFill = (_b.sent()).PiGifFill;
                    return [2 /*return*/, PiGifFill];
                case 1417: return [4 /*yield*/, import("react-icons/pi")];
                case 1418:
                    PiGiftFill = (_b.sent()).PiGiftFill;
                    return [2 /*return*/, PiGiftFill];
                case 1419: return [4 /*yield*/, import("react-icons/pi")];
                case 1420:
                    PiGitBranchFill = (_b.sent()).PiGitBranchFill;
                    return [2 /*return*/, PiGitBranchFill];
                case 1421: return [4 /*yield*/, import("react-icons/pi")];
                case 1422:
                    PiGitCommitFill = (_b.sent()).PiGitCommitFill;
                    return [2 /*return*/, PiGitCommitFill];
                case 1423: return [4 /*yield*/, import("react-icons/pi")];
                case 1424:
                    PiGitDiffFill = (_b.sent()).PiGitDiffFill;
                    return [2 /*return*/, PiGitDiffFill];
                case 1425: return [4 /*yield*/, import("react-icons/pi")];
                case 1426:
                    PiGitForkFill = (_b.sent()).PiGitForkFill;
                    return [2 /*return*/, PiGitForkFill];
                case 1427: return [4 /*yield*/, import("react-icons/pi")];
                case 1428:
                    PiGitMergeFill = (_b.sent()).PiGitMergeFill;
                    return [2 /*return*/, PiGitMergeFill];
                case 1429: return [4 /*yield*/, import("react-icons/pi")];
                case 1430:
                    PiGitPullRequestFill = (_b.sent()).PiGitPullRequestFill;
                    return [2 /*return*/, PiGitPullRequestFill];
                case 1431: return [4 /*yield*/, import("react-icons/pi")];
                case 1432:
                    PiGithubLogoFill = (_b.sent()).PiGithubLogoFill;
                    return [2 /*return*/, PiGithubLogoFill];
                case 1433: return [4 /*yield*/, import("react-icons/pi")];
                case 1434:
                    PiGitlabLogoFill = (_b.sent()).PiGitlabLogoFill;
                    return [2 /*return*/, PiGitlabLogoFill];
                case 1435: return [4 /*yield*/, import("react-icons/pi")];
                case 1436:
                    PiGitlabLogoSimpleFill = (_b.sent()).PiGitlabLogoSimpleFill;
                    return [2 /*return*/, PiGitlabLogoSimpleFill];
                case 1437: return [4 /*yield*/, import("react-icons/pi")];
                case 1438:
                    PiGlobeFill = (_b.sent()).PiGlobeFill;
                    return [2 /*return*/, PiGlobeFill];
                case 1439: return [4 /*yield*/, import("react-icons/pi")];
                case 1440:
                    PiGlobeHemisphereEastFill = (_b.sent()).PiGlobeHemisphereEastFill;
                    return [2 /*return*/, PiGlobeHemisphereEastFill];
                case 1441: return [4 /*yield*/, import("react-icons/pi")];
                case 1442:
                    PiGlobeHemisphereWestFill = (_b.sent()).PiGlobeHemisphereWestFill;
                    return [2 /*return*/, PiGlobeHemisphereWestFill];
                case 1443: return [4 /*yield*/, import("react-icons/pi")];
                case 1444:
                    PiGlobeSimpleFill = (_b.sent()).PiGlobeSimpleFill;
                    return [2 /*return*/, PiGlobeSimpleFill];
                case 1445: return [4 /*yield*/, import("react-icons/pi")];
                case 1446:
                    PiGlobeSimpleXFill = (_b.sent()).PiGlobeSimpleXFill;
                    return [2 /*return*/, PiGlobeSimpleXFill];
                case 1447: return [4 /*yield*/, import("react-icons/pi")];
                case 1448:
                    PiGlobeStandFill = (_b.sent()).PiGlobeStandFill;
                    return [2 /*return*/, PiGlobeStandFill];
                case 1449: return [4 /*yield*/, import("react-icons/pi")];
                case 1450:
                    PiGlobeXFill = (_b.sent()).PiGlobeXFill;
                    return [2 /*return*/, PiGlobeXFill];
                case 1451: return [4 /*yield*/, import("react-icons/pi")];
                case 1452:
                    PiGogglesFill = (_b.sent()).PiGogglesFill;
                    return [2 /*return*/, PiGogglesFill];
                case 1453: return [4 /*yield*/, import("react-icons/pi")];
                case 1454:
                    PiGolfFill = (_b.sent()).PiGolfFill;
                    return [2 /*return*/, PiGolfFill];
                case 1455: return [4 /*yield*/, import("react-icons/pi")];
                case 1456:
                    PiGoodreadsLogoFill = (_b.sent()).PiGoodreadsLogoFill;
                    return [2 /*return*/, PiGoodreadsLogoFill];
                case 1457: return [4 /*yield*/, import("react-icons/pi")];
                case 1458:
                    PiGoogleCardboardLogoFill = (_b.sent()).PiGoogleCardboardLogoFill;
                    return [2 /*return*/, PiGoogleCardboardLogoFill];
                case 1459: return [4 /*yield*/, import("react-icons/pi")];
                case 1460:
                    PiGoogleChromeLogoFill = (_b.sent()).PiGoogleChromeLogoFill;
                    return [2 /*return*/, PiGoogleChromeLogoFill];
                case 1461: return [4 /*yield*/, import("react-icons/pi")];
                case 1462:
                    PiGoogleDriveLogoFill = (_b.sent()).PiGoogleDriveLogoFill;
                    return [2 /*return*/, PiGoogleDriveLogoFill];
                case 1463: return [4 /*yield*/, import("react-icons/pi")];
                case 1464:
                    PiGoogleLogoFill = (_b.sent()).PiGoogleLogoFill;
                    return [2 /*return*/, PiGoogleLogoFill];
                case 1465: return [4 /*yield*/, import("react-icons/pi")];
                case 1466:
                    PiGooglePhotosLogoFill = (_b.sent()).PiGooglePhotosLogoFill;
                    return [2 /*return*/, PiGooglePhotosLogoFill];
                case 1467: return [4 /*yield*/, import("react-icons/pi")];
                case 1468:
                    PiGooglePlayLogoFill = (_b.sent()).PiGooglePlayLogoFill;
                    return [2 /*return*/, PiGooglePlayLogoFill];
                case 1469: return [4 /*yield*/, import("react-icons/pi")];
                case 1470:
                    PiGooglePodcastsLogoFill = (_b.sent()).PiGooglePodcastsLogoFill;
                    return [2 /*return*/, PiGooglePodcastsLogoFill];
                case 1471: return [4 /*yield*/, import("react-icons/pi")];
                case 1472:
                    PiGpsFill = (_b.sent()).PiGpsFill;
                    return [2 /*return*/, PiGpsFill];
                case 1473: return [4 /*yield*/, import("react-icons/pi")];
                case 1474:
                    PiGpsFixFill = (_b.sent()).PiGpsFixFill;
                    return [2 /*return*/, PiGpsFixFill];
                case 1475: return [4 /*yield*/, import("react-icons/pi")];
                case 1476:
                    PiGpsSlashFill = (_b.sent()).PiGpsSlashFill;
                    return [2 /*return*/, PiGpsSlashFill];
                case 1477: return [4 /*yield*/, import("react-icons/pi")];
                case 1478:
                    PiGradientFill = (_b.sent()).PiGradientFill;
                    return [2 /*return*/, PiGradientFill];
                case 1479: return [4 /*yield*/, import("react-icons/pi")];
                case 1480:
                    PiGraduationCapFill = (_b.sent()).PiGraduationCapFill;
                    return [2 /*return*/, PiGraduationCapFill];
                case 1481: return [4 /*yield*/, import("react-icons/pi")];
                case 1482:
                    PiGrainsFill = (_b.sent()).PiGrainsFill;
                    return [2 /*return*/, PiGrainsFill];
                case 1483: return [4 /*yield*/, import("react-icons/pi")];
                case 1484:
                    PiGrainsSlashFill = (_b.sent()).PiGrainsSlashFill;
                    return [2 /*return*/, PiGrainsSlashFill];
                case 1485: return [4 /*yield*/, import("react-icons/pi")];
                case 1486:
                    PiGraphFill = (_b.sent()).PiGraphFill;
                    return [2 /*return*/, PiGraphFill];
                case 1487: return [4 /*yield*/, import("react-icons/pi")];
                case 1488:
                    PiGraphicsCardFill = (_b.sent()).PiGraphicsCardFill;
                    return [2 /*return*/, PiGraphicsCardFill];
                case 1489: return [4 /*yield*/, import("react-icons/pi")];
                case 1490:
                    PiGreaterThanFill = (_b.sent()).PiGreaterThanFill;
                    return [2 /*return*/, PiGreaterThanFill];
                case 1491: return [4 /*yield*/, import("react-icons/pi")];
                case 1492:
                    PiGreaterThanOrEqualFill = (_b.sent()).PiGreaterThanOrEqualFill;
                    return [2 /*return*/, PiGreaterThanOrEqualFill];
                case 1493: return [4 /*yield*/, import("react-icons/pi")];
                case 1494:
                    PiGridFourFill = (_b.sent()).PiGridFourFill;
                    return [2 /*return*/, PiGridFourFill];
                case 1495: return [4 /*yield*/, import("react-icons/pi")];
                case 1496:
                    PiGridNineFill = (_b.sent()).PiGridNineFill;
                    return [2 /*return*/, PiGridNineFill];
                case 1497: return [4 /*yield*/, import("react-icons/pi")];
                case 1498:
                    PiGuitarFill = (_b.sent()).PiGuitarFill;
                    return [2 /*return*/, PiGuitarFill];
                case 1499: return [4 /*yield*/, import("react-icons/pi")];
                case 1500:
                    PiHairDryerFill = (_b.sent()).PiHairDryerFill;
                    return [2 /*return*/, PiHairDryerFill];
                case 1501: return [4 /*yield*/, import("react-icons/pi")];
                case 1502:
                    PiHamburgerFill = (_b.sent()).PiHamburgerFill;
                    return [2 /*return*/, PiHamburgerFill];
                case 1503: return [4 /*yield*/, import("react-icons/pi")];
                case 1504:
                    PiHammerFill = (_b.sent()).PiHammerFill;
                    return [2 /*return*/, PiHammerFill];
                case 1505: return [4 /*yield*/, import("react-icons/pi")];
                case 1506:
                    PiHandArrowDownFill = (_b.sent()).PiHandArrowDownFill;
                    return [2 /*return*/, PiHandArrowDownFill];
                case 1507: return [4 /*yield*/, import("react-icons/pi")];
                case 1508:
                    PiHandArrowUpFill = (_b.sent()).PiHandArrowUpFill;
                    return [2 /*return*/, PiHandArrowUpFill];
                case 1509: return [4 /*yield*/, import("react-icons/pi")];
                case 1510:
                    PiHandCoinsFill = (_b.sent()).PiHandCoinsFill;
                    return [2 /*return*/, PiHandCoinsFill];
                case 1511: return [4 /*yield*/, import("react-icons/pi")];
                case 1512:
                    PiHandDepositFill = (_b.sent()).PiHandDepositFill;
                    return [2 /*return*/, PiHandDepositFill];
                case 1513: return [4 /*yield*/, import("react-icons/pi")];
                case 1514:
                    PiHandEyeFill = (_b.sent()).PiHandEyeFill;
                    return [2 /*return*/, PiHandEyeFill];
                case 1515: return [4 /*yield*/, import("react-icons/pi")];
                case 1516:
                    PiHandFill = (_b.sent()).PiHandFill;
                    return [2 /*return*/, PiHandFill];
                case 1517: return [4 /*yield*/, import("react-icons/pi")];
                case 1518:
                    PiHandFistFill = (_b.sent()).PiHandFistFill;
                    return [2 /*return*/, PiHandFistFill];
                case 1519: return [4 /*yield*/, import("react-icons/pi")];
                case 1520:
                    PiHandGrabbingFill = (_b.sent()).PiHandGrabbingFill;
                    return [2 /*return*/, PiHandGrabbingFill];
                case 1521: return [4 /*yield*/, import("react-icons/pi")];
                case 1522:
                    PiHandHeartFill = (_b.sent()).PiHandHeartFill;
                    return [2 /*return*/, PiHandHeartFill];
                case 1523: return [4 /*yield*/, import("react-icons/pi")];
                case 1524:
                    PiHandPalmFill = (_b.sent()).PiHandPalmFill;
                    return [2 /*return*/, PiHandPalmFill];
                case 1525: return [4 /*yield*/, import("react-icons/pi")];
                case 1526:
                    PiHandPeaceFill = (_b.sent()).PiHandPeaceFill;
                    return [2 /*return*/, PiHandPeaceFill];
                case 1527: return [4 /*yield*/, import("react-icons/pi")];
                case 1528:
                    PiHandPointingFill = (_b.sent()).PiHandPointingFill;
                    return [2 /*return*/, PiHandPointingFill];
                case 1529: return [4 /*yield*/, import("react-icons/pi")];
                case 1530:
                    PiHandSoapFill = (_b.sent()).PiHandSoapFill;
                    return [2 /*return*/, PiHandSoapFill];
                case 1531: return [4 /*yield*/, import("react-icons/pi")];
                case 1532:
                    PiHandSwipeLeftFill = (_b.sent()).PiHandSwipeLeftFill;
                    return [2 /*return*/, PiHandSwipeLeftFill];
                case 1533: return [4 /*yield*/, import("react-icons/pi")];
                case 1534:
                    PiHandSwipeRightFill = (_b.sent()).PiHandSwipeRightFill;
                    return [2 /*return*/, PiHandSwipeRightFill];
                case 1535: return [4 /*yield*/, import("react-icons/pi")];
                case 1536:
                    PiHandTapFill = (_b.sent()).PiHandTapFill;
                    return [2 /*return*/, PiHandTapFill];
                case 1537: return [4 /*yield*/, import("react-icons/pi")];
                case 1538:
                    PiHandWavingFill = (_b.sent()).PiHandWavingFill;
                    return [2 /*return*/, PiHandWavingFill];
                case 1539: return [4 /*yield*/, import("react-icons/pi")];
                case 1540:
                    PiHandWithdrawFill = (_b.sent()).PiHandWithdrawFill;
                    return [2 /*return*/, PiHandWithdrawFill];
                case 1541: return [4 /*yield*/, import("react-icons/pi")];
                case 1542:
                    PiHandbagFill = (_b.sent()).PiHandbagFill;
                    return [2 /*return*/, PiHandbagFill];
                case 1543: return [4 /*yield*/, import("react-icons/pi")];
                case 1544:
                    PiHandbagSimpleFill = (_b.sent()).PiHandbagSimpleFill;
                    return [2 /*return*/, PiHandbagSimpleFill];
                case 1545: return [4 /*yield*/, import("react-icons/pi")];
                case 1546:
                    PiHandsClappingFill = (_b.sent()).PiHandsClappingFill;
                    return [2 /*return*/, PiHandsClappingFill];
                case 1547: return [4 /*yield*/, import("react-icons/pi")];
                case 1548:
                    PiHandsPrayingFill = (_b.sent()).PiHandsPrayingFill;
                    return [2 /*return*/, PiHandsPrayingFill];
                case 1549: return [4 /*yield*/, import("react-icons/pi")];
                case 1550:
                    PiHandshakeFill = (_b.sent()).PiHandshakeFill;
                    return [2 /*return*/, PiHandshakeFill];
                case 1551: return [4 /*yield*/, import("react-icons/pi")];
                case 1552:
                    PiHardDriveFill = (_b.sent()).PiHardDriveFill;
                    return [2 /*return*/, PiHardDriveFill];
                case 1553: return [4 /*yield*/, import("react-icons/pi")];
                case 1554:
                    PiHardDrivesFill = (_b.sent()).PiHardDrivesFill;
                    return [2 /*return*/, PiHardDrivesFill];
                case 1555: return [4 /*yield*/, import("react-icons/pi")];
                case 1556:
                    PiHardHatFill = (_b.sent()).PiHardHatFill;
                    return [2 /*return*/, PiHardHatFill];
                case 1557: return [4 /*yield*/, import("react-icons/pi")];
                case 1558:
                    PiHashFill = (_b.sent()).PiHashFill;
                    return [2 /*return*/, PiHashFill];
                case 1559: return [4 /*yield*/, import("react-icons/pi")];
                case 1560:
                    PiHashStraightFill = (_b.sent()).PiHashStraightFill;
                    return [2 /*return*/, PiHashStraightFill];
                case 1561: return [4 /*yield*/, import("react-icons/pi")];
                case 1562:
                    PiHeadCircuitFill = (_b.sent()).PiHeadCircuitFill;
                    return [2 /*return*/, PiHeadCircuitFill];
                case 1563: return [4 /*yield*/, import("react-icons/pi")];
                case 1564:
                    PiHeadlightsFill = (_b.sent()).PiHeadlightsFill;
                    return [2 /*return*/, PiHeadlightsFill];
                case 1565: return [4 /*yield*/, import("react-icons/pi")];
                case 1566:
                    PiHeadphonesFill = (_b.sent()).PiHeadphonesFill;
                    return [2 /*return*/, PiHeadphonesFill];
                case 1567: return [4 /*yield*/, import("react-icons/pi")];
                case 1568:
                    PiHeadsetFill = (_b.sent()).PiHeadsetFill;
                    return [2 /*return*/, PiHeadsetFill];
                case 1569: return [4 /*yield*/, import("react-icons/pi")];
                case 1570:
                    PiHeartBreakFill = (_b.sent()).PiHeartBreakFill;
                    return [2 /*return*/, PiHeartBreakFill];
                case 1571: return [4 /*yield*/, import("react-icons/pi")];
                case 1572:
                    PiHeartFill = (_b.sent()).PiHeartFill;
                    return [2 /*return*/, PiHeartFill];
                case 1573: return [4 /*yield*/, import("react-icons/pi")];
                case 1574:
                    PiHeartHalfFill = (_b.sent()).PiHeartHalfFill;
                    return [2 /*return*/, PiHeartHalfFill];
                case 1575: return [4 /*yield*/, import("react-icons/pi")];
                case 1576:
                    PiHeartStraightBreakFill = (_b.sent()).PiHeartStraightBreakFill;
                    return [2 /*return*/, PiHeartStraightBreakFill];
                case 1577: return [4 /*yield*/, import("react-icons/pi")];
                case 1578:
                    PiHeartStraightFill = (_b.sent()).PiHeartStraightFill;
                    return [2 /*return*/, PiHeartStraightFill];
                case 1579: return [4 /*yield*/, import("react-icons/pi")];
                case 1580:
                    PiHeartbeatFill = (_b.sent()).PiHeartbeatFill;
                    return [2 /*return*/, PiHeartbeatFill];
                case 1581: return [4 /*yield*/, import("react-icons/pi")];
                case 1582:
                    PiHexagonFill = (_b.sent()).PiHexagonFill;
                    return [2 /*return*/, PiHexagonFill];
                case 1583: return [4 /*yield*/, import("react-icons/pi")];
                case 1584:
                    PiHighDefinitionFill = (_b.sent()).PiHighDefinitionFill;
                    return [2 /*return*/, PiHighDefinitionFill];
                case 1585: return [4 /*yield*/, import("react-icons/pi")];
                case 1586:
                    PiHighHeelFill = (_b.sent()).PiHighHeelFill;
                    return [2 /*return*/, PiHighHeelFill];
                case 1587: return [4 /*yield*/, import("react-icons/pi")];
                case 1588:
                    PiHighlighterCircleFill = (_b.sent()).PiHighlighterCircleFill;
                    return [2 /*return*/, PiHighlighterCircleFill];
                case 1589: return [4 /*yield*/, import("react-icons/pi")];
                case 1590:
                    PiHighlighterFill = (_b.sent()).PiHighlighterFill;
                    return [2 /*return*/, PiHighlighterFill];
                case 1591: return [4 /*yield*/, import("react-icons/pi")];
                case 1592:
                    PiHockeyFill = (_b.sent()).PiHockeyFill;
                    return [2 /*return*/, PiHockeyFill];
                case 1593: return [4 /*yield*/, import("react-icons/pi")];
                case 1594:
                    PiHoodieFill = (_b.sent()).PiHoodieFill;
                    return [2 /*return*/, PiHoodieFill];
                case 1595: return [4 /*yield*/, import("react-icons/pi")];
                case 1596:
                    PiHorseFill = (_b.sent()).PiHorseFill;
                    return [2 /*return*/, PiHorseFill];
                case 1597: return [4 /*yield*/, import("react-icons/pi")];
                case 1598:
                    PiHospitalFill = (_b.sent()).PiHospitalFill;
                    return [2 /*return*/, PiHospitalFill];
                case 1599: return [4 /*yield*/, import("react-icons/pi")];
                case 1600:
                    PiHourglassFill = (_b.sent()).PiHourglassFill;
                    return [2 /*return*/, PiHourglassFill];
                case 1601: return [4 /*yield*/, import("react-icons/pi")];
                case 1602:
                    PiHourglassHighFill = (_b.sent()).PiHourglassHighFill;
                    return [2 /*return*/, PiHourglassHighFill];
                case 1603: return [4 /*yield*/, import("react-icons/pi")];
                case 1604:
                    PiHourglassLowFill = (_b.sent()).PiHourglassLowFill;
                    return [2 /*return*/, PiHourglassLowFill];
                case 1605: return [4 /*yield*/, import("react-icons/pi")];
                case 1606:
                    PiHourglassMediumFill = (_b.sent()).PiHourglassMediumFill;
                    return [2 /*return*/, PiHourglassMediumFill];
                case 1607: return [4 /*yield*/, import("react-icons/pi")];
                case 1608:
                    PiHourglassSimpleFill = (_b.sent()).PiHourglassSimpleFill;
                    return [2 /*return*/, PiHourglassSimpleFill];
                case 1609: return [4 /*yield*/, import("react-icons/pi")];
                case 1610:
                    PiHourglassSimpleHighFill = (_b.sent()).PiHourglassSimpleHighFill;
                    return [2 /*return*/, PiHourglassSimpleHighFill];
                case 1611: return [4 /*yield*/, import("react-icons/pi")];
                case 1612:
                    PiHourglassSimpleLowFill = (_b.sent()).PiHourglassSimpleLowFill;
                    return [2 /*return*/, PiHourglassSimpleLowFill];
                case 1613: return [4 /*yield*/, import("react-icons/pi")];
                case 1614:
                    PiHourglassSimpleMediumFill = (_b.sent()).PiHourglassSimpleMediumFill;
                    return [2 /*return*/, PiHourglassSimpleMediumFill];
                case 1615: return [4 /*yield*/, import("react-icons/pi")];
                case 1616:
                    PiHouseFill = (_b.sent()).PiHouseFill;
                    return [2 /*return*/, PiHouseFill];
                case 1617: return [4 /*yield*/, import("react-icons/pi")];
                case 1618:
                    PiHouseLineFill = (_b.sent()).PiHouseLineFill;
                    return [2 /*return*/, PiHouseLineFill];
                case 1619: return [4 /*yield*/, import("react-icons/pi")];
                case 1620:
                    PiHouseSimpleFill = (_b.sent()).PiHouseSimpleFill;
                    return [2 /*return*/, PiHouseSimpleFill];
                case 1621: return [4 /*yield*/, import("react-icons/pi")];
                case 1622:
                    PiHurricaneFill = (_b.sent()).PiHurricaneFill;
                    return [2 /*return*/, PiHurricaneFill];
                case 1623: return [4 /*yield*/, import("react-icons/pi")];
                case 1624:
                    PiIceCreamFill = (_b.sent()).PiIceCreamFill;
                    return [2 /*return*/, PiIceCreamFill];
                case 1625: return [4 /*yield*/, import("react-icons/pi")];
                case 1626:
                    PiIdentificationBadgeFill = (_b.sent()).PiIdentificationBadgeFill;
                    return [2 /*return*/, PiIdentificationBadgeFill];
                case 1627: return [4 /*yield*/, import("react-icons/pi")];
                case 1628:
                    PiIdentificationCardFill = (_b.sent()).PiIdentificationCardFill;
                    return [2 /*return*/, PiIdentificationCardFill];
                case 1629: return [4 /*yield*/, import("react-icons/pi")];
                case 1630:
                    PiImageBrokenFill = (_b.sent()).PiImageBrokenFill;
                    return [2 /*return*/, PiImageBrokenFill];
                case 1631: return [4 /*yield*/, import("react-icons/pi")];
                case 1632:
                    PiImageFill = (_b.sent()).PiImageFill;
                    return [2 /*return*/, PiImageFill];
                case 1633: return [4 /*yield*/, import("react-icons/pi")];
                case 1634:
                    PiImageSquareFill = (_b.sent()).PiImageSquareFill;
                    return [2 /*return*/, PiImageSquareFill];
                case 1635: return [4 /*yield*/, import("react-icons/pi")];
                case 1636:
                    PiImagesFill = (_b.sent()).PiImagesFill;
                    return [2 /*return*/, PiImagesFill];
                case 1637: return [4 /*yield*/, import("react-icons/pi")];
                case 1638:
                    PiImagesSquareFill = (_b.sent()).PiImagesSquareFill;
                    return [2 /*return*/, PiImagesSquareFill];
                case 1639: return [4 /*yield*/, import("react-icons/pi")];
                case 1640:
                    PiInfinityFill = (_b.sent()).PiInfinityFill;
                    return [2 /*return*/, PiInfinityFill];
                case 1641: return [4 /*yield*/, import("react-icons/pi")];
                case 1642:
                    PiInfoFill = (_b.sent()).PiInfoFill;
                    return [2 /*return*/, PiInfoFill];
                case 1643: return [4 /*yield*/, import("react-icons/pi")];
                case 1644:
                    PiInstagramLogoFill = (_b.sent()).PiInstagramLogoFill;
                    return [2 /*return*/, PiInstagramLogoFill];
                case 1645: return [4 /*yield*/, import("react-icons/pi")];
                case 1646:
                    PiIntersectFill = (_b.sent()).PiIntersectFill;
                    return [2 /*return*/, PiIntersectFill];
                case 1647: return [4 /*yield*/, import("react-icons/pi")];
                case 1648:
                    PiIntersectSquareFill = (_b.sent()).PiIntersectSquareFill;
                    return [2 /*return*/, PiIntersectSquareFill];
                case 1649: return [4 /*yield*/, import("react-icons/pi")];
                case 1650:
                    PiIntersectThreeFill = (_b.sent()).PiIntersectThreeFill;
                    return [2 /*return*/, PiIntersectThreeFill];
                case 1651: return [4 /*yield*/, import("react-icons/pi")];
                case 1652:
                    PiIntersectionFill = (_b.sent()).PiIntersectionFill;
                    return [2 /*return*/, PiIntersectionFill];
                case 1653: return [4 /*yield*/, import("react-icons/pi")];
                case 1654:
                    PiInvoiceFill = (_b.sent()).PiInvoiceFill;
                    return [2 /*return*/, PiInvoiceFill];
                case 1655: return [4 /*yield*/, import("react-icons/pi")];
                case 1656:
                    PiIslandFill = (_b.sent()).PiIslandFill;
                    return [2 /*return*/, PiIslandFill];
                case 1657: return [4 /*yield*/, import("react-icons/pi")];
                case 1658:
                    PiJarFill = (_b.sent()).PiJarFill;
                    return [2 /*return*/, PiJarFill];
                case 1659: return [4 /*yield*/, import("react-icons/pi")];
                case 1660:
                    PiJarLabelFill = (_b.sent()).PiJarLabelFill;
                    return [2 /*return*/, PiJarLabelFill];
                case 1661: return [4 /*yield*/, import("react-icons/pi")];
                case 1662:
                    PiJeepFill = (_b.sent()).PiJeepFill;
                    return [2 /*return*/, PiJeepFill];
                case 1663: return [4 /*yield*/, import("react-icons/pi")];
                case 1664:
                    PiJoystickFill = (_b.sent()).PiJoystickFill;
                    return [2 /*return*/, PiJoystickFill];
                case 1665: return [4 /*yield*/, import("react-icons/pi")];
                case 1666:
                    PiKanbanFill = (_b.sent()).PiKanbanFill;
                    return [2 /*return*/, PiKanbanFill];
                case 1667: return [4 /*yield*/, import("react-icons/pi")];
                case 1668:
                    PiKeyFill = (_b.sent()).PiKeyFill;
                    return [2 /*return*/, PiKeyFill];
                case 1669: return [4 /*yield*/, import("react-icons/pi")];
                case 1670:
                    PiKeyReturnFill = (_b.sent()).PiKeyReturnFill;
                    return [2 /*return*/, PiKeyReturnFill];
                case 1671: return [4 /*yield*/, import("react-icons/pi")];
                case 1672:
                    PiKeyboardFill = (_b.sent()).PiKeyboardFill;
                    return [2 /*return*/, PiKeyboardFill];
                case 1673: return [4 /*yield*/, import("react-icons/pi")];
                case 1674:
                    PiKeyholeFill = (_b.sent()).PiKeyholeFill;
                    return [2 /*return*/, PiKeyholeFill];
                case 1675: return [4 /*yield*/, import("react-icons/pi")];
                case 1676:
                    PiKnifeFill = (_b.sent()).PiKnifeFill;
                    return [2 /*return*/, PiKnifeFill];
                case 1677: return [4 /*yield*/, import("react-icons/pi")];
                case 1678:
                    PiLadderFill = (_b.sent()).PiLadderFill;
                    return [2 /*return*/, PiLadderFill];
                case 1679: return [4 /*yield*/, import("react-icons/pi")];
                case 1680:
                    PiLadderSimpleFill = (_b.sent()).PiLadderSimpleFill;
                    return [2 /*return*/, PiLadderSimpleFill];
                case 1681: return [4 /*yield*/, import("react-icons/pi")];
                case 1682:
                    PiLampFill = (_b.sent()).PiLampFill;
                    return [2 /*return*/, PiLampFill];
                case 1683: return [4 /*yield*/, import("react-icons/pi")];
                case 1684:
                    PiLampPendantFill = (_b.sent()).PiLampPendantFill;
                    return [2 /*return*/, PiLampPendantFill];
                case 1685: return [4 /*yield*/, import("react-icons/pi")];
                case 1686:
                    PiLaptopFill = (_b.sent()).PiLaptopFill;
                    return [2 /*return*/, PiLaptopFill];
                case 1687: return [4 /*yield*/, import("react-icons/pi")];
                case 1688:
                    PiLassoFill = (_b.sent()).PiLassoFill;
                    return [2 /*return*/, PiLassoFill];
                case 1689: return [4 /*yield*/, import("react-icons/pi")];
                case 1690:
                    PiLastfmLogoFill = (_b.sent()).PiLastfmLogoFill;
                    return [2 /*return*/, PiLastfmLogoFill];
                case 1691: return [4 /*yield*/, import("react-icons/pi")];
                case 1692:
                    PiLayoutFill = (_b.sent()).PiLayoutFill;
                    return [2 /*return*/, PiLayoutFill];
                case 1693: return [4 /*yield*/, import("react-icons/pi")];
                case 1694:
                    PiLeafFill = (_b.sent()).PiLeafFill;
                    return [2 /*return*/, PiLeafFill];
                case 1695: return [4 /*yield*/, import("react-icons/pi")];
                case 1696:
                    PiLecternFill = (_b.sent()).PiLecternFill;
                    return [2 /*return*/, PiLecternFill];
                case 1697: return [4 /*yield*/, import("react-icons/pi")];
                case 1698:
                    PiLegoFill = (_b.sent()).PiLegoFill;
                    return [2 /*return*/, PiLegoFill];
                case 1699: return [4 /*yield*/, import("react-icons/pi")];
                case 1700:
                    PiLegoSmileyFill = (_b.sent()).PiLegoSmileyFill;
                    return [2 /*return*/, PiLegoSmileyFill];
                case 1701: return [4 /*yield*/, import("react-icons/pi")];
                case 1702:
                    PiLessThanFill = (_b.sent()).PiLessThanFill;
                    return [2 /*return*/, PiLessThanFill];
                case 1703: return [4 /*yield*/, import("react-icons/pi")];
                case 1704:
                    PiLessThanOrEqualFill = (_b.sent()).PiLessThanOrEqualFill;
                    return [2 /*return*/, PiLessThanOrEqualFill];
                case 1705: return [4 /*yield*/, import("react-icons/pi")];
                case 1706:
                    PiLetterCircleHFill = (_b.sent()).PiLetterCircleHFill;
                    return [2 /*return*/, PiLetterCircleHFill];
                case 1707: return [4 /*yield*/, import("react-icons/pi")];
                case 1708:
                    PiLetterCirclePFill = (_b.sent()).PiLetterCirclePFill;
                    return [2 /*return*/, PiLetterCirclePFill];
                case 1709: return [4 /*yield*/, import("react-icons/pi")];
                case 1710:
                    PiLetterCircleVFill = (_b.sent()).PiLetterCircleVFill;
                    return [2 /*return*/, PiLetterCircleVFill];
                case 1711: return [4 /*yield*/, import("react-icons/pi")];
                case 1712:
                    PiLifebuoyFill = (_b.sent()).PiLifebuoyFill;
                    return [2 /*return*/, PiLifebuoyFill];
                case 1713: return [4 /*yield*/, import("react-icons/pi")];
                case 1714:
                    PiLightbulbFilamentFill = (_b.sent()).PiLightbulbFilamentFill;
                    return [2 /*return*/, PiLightbulbFilamentFill];
                case 1715: return [4 /*yield*/, import("react-icons/pi")];
                case 1716:
                    PiLightbulbFill = (_b.sent()).PiLightbulbFill;
                    return [2 /*return*/, PiLightbulbFill];
                case 1717: return [4 /*yield*/, import("react-icons/pi")];
                case 1718:
                    PiLighthouseFill = (_b.sent()).PiLighthouseFill;
                    return [2 /*return*/, PiLighthouseFill];
                case 1719: return [4 /*yield*/, import("react-icons/pi")];
                case 1720:
                    PiLightningAFill = (_b.sent()).PiLightningAFill;
                    return [2 /*return*/, PiLightningAFill];
                case 1721: return [4 /*yield*/, import("react-icons/pi")];
                case 1722:
                    PiLightningFill = (_b.sent()).PiLightningFill;
                    return [2 /*return*/, PiLightningFill];
                case 1723: return [4 /*yield*/, import("react-icons/pi")];
                case 1724:
                    PiLightningSlashFill = (_b.sent()).PiLightningSlashFill;
                    return [2 /*return*/, PiLightningSlashFill];
                case 1725: return [4 /*yield*/, import("react-icons/pi")];
                case 1726:
                    PiLineSegmentFill = (_b.sent()).PiLineSegmentFill;
                    return [2 /*return*/, PiLineSegmentFill];
                case 1727: return [4 /*yield*/, import("react-icons/pi")];
                case 1728:
                    PiLineSegmentsFill = (_b.sent()).PiLineSegmentsFill;
                    return [2 /*return*/, PiLineSegmentsFill];
                case 1729: return [4 /*yield*/, import("react-icons/pi")];
                case 1730:
                    PiLineVerticalFill = (_b.sent()).PiLineVerticalFill;
                    return [2 /*return*/, PiLineVerticalFill];
                case 1731: return [4 /*yield*/, import("react-icons/pi")];
                case 1732:
                    PiLinkBreakFill = (_b.sent()).PiLinkBreakFill;
                    return [2 /*return*/, PiLinkBreakFill];
                case 1733: return [4 /*yield*/, import("react-icons/pi")];
                case 1734:
                    PiLinkFill = (_b.sent()).PiLinkFill;
                    return [2 /*return*/, PiLinkFill];
                case 1735: return [4 /*yield*/, import("react-icons/pi")];
                case 1736:
                    PiLinkSimpleBreakFill = (_b.sent()).PiLinkSimpleBreakFill;
                    return [2 /*return*/, PiLinkSimpleBreakFill];
                case 1737: return [4 /*yield*/, import("react-icons/pi")];
                case 1738:
                    PiLinkSimpleFill = (_b.sent()).PiLinkSimpleFill;
                    return [2 /*return*/, PiLinkSimpleFill];
                case 1739: return [4 /*yield*/, import("react-icons/pi")];
                case 1740:
                    PiLinkSimpleHorizontalBreakFill = (_b.sent()).PiLinkSimpleHorizontalBreakFill;
                    return [2 /*return*/, PiLinkSimpleHorizontalBreakFill];
                case 1741: return [4 /*yield*/, import("react-icons/pi")];
                case 1742:
                    PiLinkSimpleHorizontalFill = (_b.sent()).PiLinkSimpleHorizontalFill;
                    return [2 /*return*/, PiLinkSimpleHorizontalFill];
                case 1743: return [4 /*yield*/, import("react-icons/pi")];
                case 1744:
                    PiLinkedinLogoFill = (_b.sent()).PiLinkedinLogoFill;
                    return [2 /*return*/, PiLinkedinLogoFill];
                case 1745: return [4 /*yield*/, import("react-icons/pi")];
                case 1746:
                    PiLinktreeLogoFill = (_b.sent()).PiLinktreeLogoFill;
                    return [2 /*return*/, PiLinktreeLogoFill];
                case 1747: return [4 /*yield*/, import("react-icons/pi")];
                case 1748:
                    PiLinuxLogoFill = (_b.sent()).PiLinuxLogoFill;
                    return [2 /*return*/, PiLinuxLogoFill];
                case 1749: return [4 /*yield*/, import("react-icons/pi")];
                case 1750:
                    PiListBulletsFill = (_b.sent()).PiListBulletsFill;
                    return [2 /*return*/, PiListBulletsFill];
                case 1751: return [4 /*yield*/, import("react-icons/pi")];
                case 1752:
                    PiListChecksFill = (_b.sent()).PiListChecksFill;
                    return [2 /*return*/, PiListChecksFill];
                case 1753: return [4 /*yield*/, import("react-icons/pi")];
                case 1754:
                    PiListDashesFill = (_b.sent()).PiListDashesFill;
                    return [2 /*return*/, PiListDashesFill];
                case 1755: return [4 /*yield*/, import("react-icons/pi")];
                case 1756:
                    PiListFill = (_b.sent()).PiListFill;
                    return [2 /*return*/, PiListFill];
                case 1757: return [4 /*yield*/, import("react-icons/pi")];
                case 1758:
                    PiListHeartFill = (_b.sent()).PiListHeartFill;
                    return [2 /*return*/, PiListHeartFill];
                case 1759: return [4 /*yield*/, import("react-icons/pi")];
                case 1760:
                    PiListMagnifyingGlassFill = (_b.sent()).PiListMagnifyingGlassFill;
                    return [2 /*return*/, PiListMagnifyingGlassFill];
                case 1761: return [4 /*yield*/, import("react-icons/pi")];
                case 1762:
                    PiListNumbersFill = (_b.sent()).PiListNumbersFill;
                    return [2 /*return*/, PiListNumbersFill];
                case 1763: return [4 /*yield*/, import("react-icons/pi")];
                case 1764:
                    PiListPlusFill = (_b.sent()).PiListPlusFill;
                    return [2 /*return*/, PiListPlusFill];
                case 1765: return [4 /*yield*/, import("react-icons/pi")];
                case 1766:
                    PiListStarFill = (_b.sent()).PiListStarFill;
                    return [2 /*return*/, PiListStarFill];
                case 1767: return [4 /*yield*/, import("react-icons/pi")];
                case 1768:
                    PiLockFill = (_b.sent()).PiLockFill;
                    return [2 /*return*/, PiLockFill];
                case 1769: return [4 /*yield*/, import("react-icons/pi")];
                case 1770:
                    PiLockKeyFill = (_b.sent()).PiLockKeyFill;
                    return [2 /*return*/, PiLockKeyFill];
                case 1771: return [4 /*yield*/, import("react-icons/pi")];
                case 1772:
                    PiLockKeyOpenFill = (_b.sent()).PiLockKeyOpenFill;
                    return [2 /*return*/, PiLockKeyOpenFill];
                case 1773: return [4 /*yield*/, import("react-icons/pi")];
                case 1774:
                    PiLockLaminatedFill = (_b.sent()).PiLockLaminatedFill;
                    return [2 /*return*/, PiLockLaminatedFill];
                case 1775: return [4 /*yield*/, import("react-icons/pi")];
                case 1776:
                    PiLockLaminatedOpenFill = (_b.sent()).PiLockLaminatedOpenFill;
                    return [2 /*return*/, PiLockLaminatedOpenFill];
                case 1777: return [4 /*yield*/, import("react-icons/pi")];
                case 1778:
                    PiLockOpenFill = (_b.sent()).PiLockOpenFill;
                    return [2 /*return*/, PiLockOpenFill];
                case 1779: return [4 /*yield*/, import("react-icons/pi")];
                case 1780:
                    PiLockSimpleFill = (_b.sent()).PiLockSimpleFill;
                    return [2 /*return*/, PiLockSimpleFill];
                case 1781: return [4 /*yield*/, import("react-icons/pi")];
                case 1782:
                    PiLockSimpleOpenFill = (_b.sent()).PiLockSimpleOpenFill;
                    return [2 /*return*/, PiLockSimpleOpenFill];
                case 1783: return [4 /*yield*/, import("react-icons/pi")];
                case 1784:
                    PiLockersFill = (_b.sent()).PiLockersFill;
                    return [2 /*return*/, PiLockersFill];
                case 1785: return [4 /*yield*/, import("react-icons/pi")];
                case 1786:
                    PiLogFill = (_b.sent()).PiLogFill;
                    return [2 /*return*/, PiLogFill];
                case 1787: return [4 /*yield*/, import("react-icons/pi")];
                case 1788:
                    PiMagicWandFill = (_b.sent()).PiMagicWandFill;
                    return [2 /*return*/, PiMagicWandFill];
                case 1789: return [4 /*yield*/, import("react-icons/pi")];
                case 1790:
                    PiMagnetFill = (_b.sent()).PiMagnetFill;
                    return [2 /*return*/, PiMagnetFill];
                case 1791: return [4 /*yield*/, import("react-icons/pi")];
                case 1792:
                    PiMagnetStraightFill = (_b.sent()).PiMagnetStraightFill;
                    return [2 /*return*/, PiMagnetStraightFill];
                case 1793: return [4 /*yield*/, import("react-icons/pi")];
                case 1794:
                    PiMagnifyingGlassFill = (_b.sent()).PiMagnifyingGlassFill;
                    return [2 /*return*/, PiMagnifyingGlassFill];
                case 1795: return [4 /*yield*/, import("react-icons/pi")];
                case 1796:
                    PiMagnifyingGlassMinusFill = (_b.sent()).PiMagnifyingGlassMinusFill;
                    return [2 /*return*/, PiMagnifyingGlassMinusFill];
                case 1797: return [4 /*yield*/, import("react-icons/pi")];
                case 1798:
                    PiMagnifyingGlassPlusFill = (_b.sent()).PiMagnifyingGlassPlusFill;
                    return [2 /*return*/, PiMagnifyingGlassPlusFill];
                case 1799: return [4 /*yield*/, import("react-icons/pi")];
                case 1800:
                    PiMailboxFill = (_b.sent()).PiMailboxFill;
                    return [2 /*return*/, PiMailboxFill];
                case 1801: return [4 /*yield*/, import("react-icons/pi")];
                case 1802:
                    PiMapPinAreaFill = (_b.sent()).PiMapPinAreaFill;
                    return [2 /*return*/, PiMapPinAreaFill];
                case 1803: return [4 /*yield*/, import("react-icons/pi")];
                case 1804:
                    PiMapPinFill = (_b.sent()).PiMapPinFill;
                    return [2 /*return*/, PiMapPinFill];
                case 1805: return [4 /*yield*/, import("react-icons/pi")];
                case 1806:
                    PiMapPinLineFill = (_b.sent()).PiMapPinLineFill;
                    return [2 /*return*/, PiMapPinLineFill];
                case 1807: return [4 /*yield*/, import("react-icons/pi")];
                case 1808:
                    PiMapPinPlusFill = (_b.sent()).PiMapPinPlusFill;
                    return [2 /*return*/, PiMapPinPlusFill];
                case 1809: return [4 /*yield*/, import("react-icons/pi")];
                case 1810:
                    PiMapPinSimpleAreaFill = (_b.sent()).PiMapPinSimpleAreaFill;
                    return [2 /*return*/, PiMapPinSimpleAreaFill];
                case 1811: return [4 /*yield*/, import("react-icons/pi")];
                case 1812:
                    PiMapPinSimpleFill = (_b.sent()).PiMapPinSimpleFill;
                    return [2 /*return*/, PiMapPinSimpleFill];
                case 1813: return [4 /*yield*/, import("react-icons/pi")];
                case 1814:
                    PiMapPinSimpleLineFill = (_b.sent()).PiMapPinSimpleLineFill;
                    return [2 /*return*/, PiMapPinSimpleLineFill];
                case 1815: return [4 /*yield*/, import("react-icons/pi")];
                case 1816:
                    PiMapTrifoldFill = (_b.sent()).PiMapTrifoldFill;
                    return [2 /*return*/, PiMapTrifoldFill];
                case 1817: return [4 /*yield*/, import("react-icons/pi")];
                case 1818:
                    PiMarkdownLogoFill = (_b.sent()).PiMarkdownLogoFill;
                    return [2 /*return*/, PiMarkdownLogoFill];
                case 1819: return [4 /*yield*/, import("react-icons/pi")];
                case 1820:
                    PiMarkerCircleFill = (_b.sent()).PiMarkerCircleFill;
                    return [2 /*return*/, PiMarkerCircleFill];
                case 1821: return [4 /*yield*/, import("react-icons/pi")];
                case 1822:
                    PiMartiniFill = (_b.sent()).PiMartiniFill;
                    return [2 /*return*/, PiMartiniFill];
                case 1823: return [4 /*yield*/, import("react-icons/pi")];
                case 1824:
                    PiMaskHappyFill = (_b.sent()).PiMaskHappyFill;
                    return [2 /*return*/, PiMaskHappyFill];
                case 1825: return [4 /*yield*/, import("react-icons/pi")];
                case 1826:
                    PiMaskSadFill = (_b.sent()).PiMaskSadFill;
                    return [2 /*return*/, PiMaskSadFill];
                case 1827: return [4 /*yield*/, import("react-icons/pi")];
                case 1828:
                    PiMastodonLogoFill = (_b.sent()).PiMastodonLogoFill;
                    return [2 /*return*/, PiMastodonLogoFill];
                case 1829: return [4 /*yield*/, import("react-icons/pi")];
                case 1830:
                    PiMathOperationsFill = (_b.sent()).PiMathOperationsFill;
                    return [2 /*return*/, PiMathOperationsFill];
                case 1831: return [4 /*yield*/, import("react-icons/pi")];
                case 1832:
                    PiMatrixLogoFill = (_b.sent()).PiMatrixLogoFill;
                    return [2 /*return*/, PiMatrixLogoFill];
                case 1833: return [4 /*yield*/, import("react-icons/pi")];
                case 1834:
                    PiMedalFill = (_b.sent()).PiMedalFill;
                    return [2 /*return*/, PiMedalFill];
                case 1835: return [4 /*yield*/, import("react-icons/pi")];
                case 1836:
                    PiMedalMilitaryFill = (_b.sent()).PiMedalMilitaryFill;
                    return [2 /*return*/, PiMedalMilitaryFill];
                case 1837: return [4 /*yield*/, import("react-icons/pi")];
                case 1838:
                    PiMediumLogoFill = (_b.sent()).PiMediumLogoFill;
                    return [2 /*return*/, PiMediumLogoFill];
                case 1839: return [4 /*yield*/, import("react-icons/pi")];
                case 1840:
                    PiMegaphoneFill = (_b.sent()).PiMegaphoneFill;
                    return [2 /*return*/, PiMegaphoneFill];
                case 1841: return [4 /*yield*/, import("react-icons/pi")];
                case 1842:
                    PiMegaphoneSimpleFill = (_b.sent()).PiMegaphoneSimpleFill;
                    return [2 /*return*/, PiMegaphoneSimpleFill];
                case 1843: return [4 /*yield*/, import("react-icons/pi")];
                case 1844:
                    PiMemberOfFill = (_b.sent()).PiMemberOfFill;
                    return [2 /*return*/, PiMemberOfFill];
                case 1845: return [4 /*yield*/, import("react-icons/pi")];
                case 1846:
                    PiMemoryFill = (_b.sent()).PiMemoryFill;
                    return [2 /*return*/, PiMemoryFill];
                case 1847: return [4 /*yield*/, import("react-icons/pi")];
                case 1848:
                    PiMessengerLogoFill = (_b.sent()).PiMessengerLogoFill;
                    return [2 /*return*/, PiMessengerLogoFill];
                case 1849: return [4 /*yield*/, import("react-icons/pi")];
                case 1850:
                    PiMetaLogoFill = (_b.sent()).PiMetaLogoFill;
                    return [2 /*return*/, PiMetaLogoFill];
                case 1851: return [4 /*yield*/, import("react-icons/pi")];
                case 1852:
                    PiMeteorFill = (_b.sent()).PiMeteorFill;
                    return [2 /*return*/, PiMeteorFill];
                case 1853: return [4 /*yield*/, import("react-icons/pi")];
                case 1854:
                    PiMetronomeFill = (_b.sent()).PiMetronomeFill;
                    return [2 /*return*/, PiMetronomeFill];
                case 1855: return [4 /*yield*/, import("react-icons/pi")];
                case 1856:
                    PiMicrophoneFill = (_b.sent()).PiMicrophoneFill;
                    return [2 /*return*/, PiMicrophoneFill];
                case 1857: return [4 /*yield*/, import("react-icons/pi")];
                case 1858:
                    PiMicrophoneSlashFill = (_b.sent()).PiMicrophoneSlashFill;
                    return [2 /*return*/, PiMicrophoneSlashFill];
                case 1859: return [4 /*yield*/, import("react-icons/pi")];
                case 1860:
                    PiMicrophoneStageFill = (_b.sent()).PiMicrophoneStageFill;
                    return [2 /*return*/, PiMicrophoneStageFill];
                case 1861: return [4 /*yield*/, import("react-icons/pi")];
                case 1862:
                    PiMicroscopeFill = (_b.sent()).PiMicroscopeFill;
                    return [2 /*return*/, PiMicroscopeFill];
                case 1863: return [4 /*yield*/, import("react-icons/pi")];
                case 1864:
                    PiMicrosoftExcelLogoFill = (_b.sent()).PiMicrosoftExcelLogoFill;
                    return [2 /*return*/, PiMicrosoftExcelLogoFill];
                case 1865: return [4 /*yield*/, import("react-icons/pi")];
                case 1866:
                    PiMicrosoftOutlookLogoFill = (_b.sent()).PiMicrosoftOutlookLogoFill;
                    return [2 /*return*/, PiMicrosoftOutlookLogoFill];
                case 1867: return [4 /*yield*/, import("react-icons/pi")];
                case 1868:
                    PiMicrosoftPowerpointLogoFill = (_b.sent()).PiMicrosoftPowerpointLogoFill;
                    return [2 /*return*/, PiMicrosoftPowerpointLogoFill];
                case 1869: return [4 /*yield*/, import("react-icons/pi")];
                case 1870:
                    PiMicrosoftTeamsLogoFill = (_b.sent()).PiMicrosoftTeamsLogoFill;
                    return [2 /*return*/, PiMicrosoftTeamsLogoFill];
                case 1871: return [4 /*yield*/, import("react-icons/pi")];
                case 1872:
                    PiMicrosoftWordLogoFill = (_b.sent()).PiMicrosoftWordLogoFill;
                    return [2 /*return*/, PiMicrosoftWordLogoFill];
                case 1873: return [4 /*yield*/, import("react-icons/pi")];
                case 1874:
                    PiMinusCircleFill = (_b.sent()).PiMinusCircleFill;
                    return [2 /*return*/, PiMinusCircleFill];
                case 1875: return [4 /*yield*/, import("react-icons/pi")];
                case 1876:
                    PiMinusFill = (_b.sent()).PiMinusFill;
                    return [2 /*return*/, PiMinusFill];
                case 1877: return [4 /*yield*/, import("react-icons/pi")];
                case 1878:
                    PiMinusSquareFill = (_b.sent()).PiMinusSquareFill;
                    return [2 /*return*/, PiMinusSquareFill];
                case 1879: return [4 /*yield*/, import("react-icons/pi")];
                case 1880:
                    PiMoneyFill = (_b.sent()).PiMoneyFill;
                    return [2 /*return*/, PiMoneyFill];
                case 1881: return [4 /*yield*/, import("react-icons/pi")];
                case 1882:
                    PiMoneyWavyFill = (_b.sent()).PiMoneyWavyFill;
                    return [2 /*return*/, PiMoneyWavyFill];
                case 1883: return [4 /*yield*/, import("react-icons/pi")];
                case 1884:
                    PiMonitorArrowUpFill = (_b.sent()).PiMonitorArrowUpFill;
                    return [2 /*return*/, PiMonitorArrowUpFill];
                case 1885: return [4 /*yield*/, import("react-icons/pi")];
                case 1886:
                    PiMonitorFill = (_b.sent()).PiMonitorFill;
                    return [2 /*return*/, PiMonitorFill];
                case 1887: return [4 /*yield*/, import("react-icons/pi")];
                case 1888:
                    PiMonitorPlayFill = (_b.sent()).PiMonitorPlayFill;
                    return [2 /*return*/, PiMonitorPlayFill];
                case 1889: return [4 /*yield*/, import("react-icons/pi")];
                case 1890:
                    PiMoonFill = (_b.sent()).PiMoonFill;
                    return [2 /*return*/, PiMoonFill];
                case 1891: return [4 /*yield*/, import("react-icons/pi")];
                case 1892:
                    PiMoonStarsFill = (_b.sent()).PiMoonStarsFill;
                    return [2 /*return*/, PiMoonStarsFill];
                case 1893: return [4 /*yield*/, import("react-icons/pi")];
                case 1894:
                    PiMopedFill = (_b.sent()).PiMopedFill;
                    return [2 /*return*/, PiMopedFill];
                case 1895: return [4 /*yield*/, import("react-icons/pi")];
                case 1896:
                    PiMopedFrontFill = (_b.sent()).PiMopedFrontFill;
                    return [2 /*return*/, PiMopedFrontFill];
                case 1897: return [4 /*yield*/, import("react-icons/pi")];
                case 1898:
                    PiMosqueFill = (_b.sent()).PiMosqueFill;
                    return [2 /*return*/, PiMosqueFill];
                case 1899: return [4 /*yield*/, import("react-icons/pi")];
                case 1900:
                    PiMotorcycleFill = (_b.sent()).PiMotorcycleFill;
                    return [2 /*return*/, PiMotorcycleFill];
                case 1901: return [4 /*yield*/, import("react-icons/pi")];
                case 1902:
                    PiMountainsFill = (_b.sent()).PiMountainsFill;
                    return [2 /*return*/, PiMountainsFill];
                case 1903: return [4 /*yield*/, import("react-icons/pi")];
                case 1904:
                    PiMouseFill = (_b.sent()).PiMouseFill;
                    return [2 /*return*/, PiMouseFill];
                case 1905: return [4 /*yield*/, import("react-icons/pi")];
                case 1906:
                    PiMouseLeftClickFill = (_b.sent()).PiMouseLeftClickFill;
                    return [2 /*return*/, PiMouseLeftClickFill];
                case 1907: return [4 /*yield*/, import("react-icons/pi")];
                case 1908:
                    PiMouseMiddleClickFill = (_b.sent()).PiMouseMiddleClickFill;
                    return [2 /*return*/, PiMouseMiddleClickFill];
                case 1909: return [4 /*yield*/, import("react-icons/pi")];
                case 1910:
                    PiMouseRightClickFill = (_b.sent()).PiMouseRightClickFill;
                    return [2 /*return*/, PiMouseRightClickFill];
                case 1911: return [4 /*yield*/, import("react-icons/pi")];
                case 1912:
                    PiMouseScrollFill = (_b.sent()).PiMouseScrollFill;
                    return [2 /*return*/, PiMouseScrollFill];
                case 1913: return [4 /*yield*/, import("react-icons/pi")];
                case 1914:
                    PiMouseSimpleFill = (_b.sent()).PiMouseSimpleFill;
                    return [2 /*return*/, PiMouseSimpleFill];
                case 1915: return [4 /*yield*/, import("react-icons/pi")];
                case 1916:
                    PiMusicNoteFill = (_b.sent()).PiMusicNoteFill;
                    return [2 /*return*/, PiMusicNoteFill];
                case 1917: return [4 /*yield*/, import("react-icons/pi")];
                case 1918:
                    PiMusicNoteSimpleFill = (_b.sent()).PiMusicNoteSimpleFill;
                    return [2 /*return*/, PiMusicNoteSimpleFill];
                case 1919: return [4 /*yield*/, import("react-icons/pi")];
                case 1920:
                    PiMusicNotesFill = (_b.sent()).PiMusicNotesFill;
                    return [2 /*return*/, PiMusicNotesFill];
                case 1921: return [4 /*yield*/, import("react-icons/pi")];
                case 1922:
                    PiMusicNotesMinusFill = (_b.sent()).PiMusicNotesMinusFill;
                    return [2 /*return*/, PiMusicNotesMinusFill];
                case 1923: return [4 /*yield*/, import("react-icons/pi")];
                case 1924:
                    PiMusicNotesPlusFill = (_b.sent()).PiMusicNotesPlusFill;
                    return [2 /*return*/, PiMusicNotesPlusFill];
                case 1925: return [4 /*yield*/, import("react-icons/pi")];
                case 1926:
                    PiMusicNotesSimpleFill = (_b.sent()).PiMusicNotesSimpleFill;
                    return [2 /*return*/, PiMusicNotesSimpleFill];
                case 1927: return [4 /*yield*/, import("react-icons/pi")];
                case 1928:
                    PiNavigationArrowFill = (_b.sent()).PiNavigationArrowFill;
                    return [2 /*return*/, PiNavigationArrowFill];
                case 1929: return [4 /*yield*/, import("react-icons/pi")];
                case 1930:
                    PiNeedleFill = (_b.sent()).PiNeedleFill;
                    return [2 /*return*/, PiNeedleFill];
                case 1931: return [4 /*yield*/, import("react-icons/pi")];
                case 1932:
                    PiNetworkFill = (_b.sent()).PiNetworkFill;
                    return [2 /*return*/, PiNetworkFill];
                case 1933: return [4 /*yield*/, import("react-icons/pi")];
                case 1934:
                    PiNetworkSlashFill = (_b.sent()).PiNetworkSlashFill;
                    return [2 /*return*/, PiNetworkSlashFill];
                case 1935: return [4 /*yield*/, import("react-icons/pi")];
                case 1936:
                    PiNetworkXFill = (_b.sent()).PiNetworkXFill;
                    return [2 /*return*/, PiNetworkXFill];
                case 1937: return [4 /*yield*/, import("react-icons/pi")];
                case 1938:
                    PiNewspaperClippingFill = (_b.sent()).PiNewspaperClippingFill;
                    return [2 /*return*/, PiNewspaperClippingFill];
                case 1939: return [4 /*yield*/, import("react-icons/pi")];
                case 1940:
                    PiNewspaperFill = (_b.sent()).PiNewspaperFill;
                    return [2 /*return*/, PiNewspaperFill];
                case 1941: return [4 /*yield*/, import("react-icons/pi")];
                case 1942:
                    PiNotEqualsFill = (_b.sent()).PiNotEqualsFill;
                    return [2 /*return*/, PiNotEqualsFill];
                case 1943: return [4 /*yield*/, import("react-icons/pi")];
                case 1944:
                    PiNotMemberOfFill = (_b.sent()).PiNotMemberOfFill;
                    return [2 /*return*/, PiNotMemberOfFill];
                case 1945: return [4 /*yield*/, import("react-icons/pi")];
                case 1946:
                    PiNotSubsetOfFill = (_b.sent()).PiNotSubsetOfFill;
                    return [2 /*return*/, PiNotSubsetOfFill];
                case 1947: return [4 /*yield*/, import("react-icons/pi")];
                case 1948:
                    PiNotSupersetOfFill = (_b.sent()).PiNotSupersetOfFill;
                    return [2 /*return*/, PiNotSupersetOfFill];
                case 1949: return [4 /*yield*/, import("react-icons/pi")];
                case 1950:
                    PiNotchesFill = (_b.sent()).PiNotchesFill;
                    return [2 /*return*/, PiNotchesFill];
                case 1951: return [4 /*yield*/, import("react-icons/pi")];
                case 1952:
                    PiNoteBlankFill = (_b.sent()).PiNoteBlankFill;
                    return [2 /*return*/, PiNoteBlankFill];
                case 1953: return [4 /*yield*/, import("react-icons/pi")];
                case 1954:
                    PiNoteFill = (_b.sent()).PiNoteFill;
                    return [2 /*return*/, PiNoteFill];
                case 1955: return [4 /*yield*/, import("react-icons/pi")];
                case 1956:
                    PiNotePencilFill = (_b.sent()).PiNotePencilFill;
                    return [2 /*return*/, PiNotePencilFill];
                case 1957: return [4 /*yield*/, import("react-icons/pi")];
                case 1958:
                    PiNotebookFill = (_b.sent()).PiNotebookFill;
                    return [2 /*return*/, PiNotebookFill];
                case 1959: return [4 /*yield*/, import("react-icons/pi")];
                case 1960:
                    PiNotepadFill = (_b.sent()).PiNotepadFill;
                    return [2 /*return*/, PiNotepadFill];
                case 1961: return [4 /*yield*/, import("react-icons/pi")];
                case 1962:
                    PiNotificationFill = (_b.sent()).PiNotificationFill;
                    return [2 /*return*/, PiNotificationFill];
                case 1963: return [4 /*yield*/, import("react-icons/pi")];
                case 1964:
                    PiNotionLogoFill = (_b.sent()).PiNotionLogoFill;
                    return [2 /*return*/, PiNotionLogoFill];
                case 1965: return [4 /*yield*/, import("react-icons/pi")];
                case 1966:
                    PiNuclearPlantFill = (_b.sent()).PiNuclearPlantFill;
                    return [2 /*return*/, PiNuclearPlantFill];
                case 1967: return [4 /*yield*/, import("react-icons/pi")];
                case 1968:
                    PiNumberCircleEightFill = (_b.sent()).PiNumberCircleEightFill;
                    return [2 /*return*/, PiNumberCircleEightFill];
                case 1969: return [4 /*yield*/, import("react-icons/pi")];
                case 1970:
                    PiNumberCircleFiveFill = (_b.sent()).PiNumberCircleFiveFill;
                    return [2 /*return*/, PiNumberCircleFiveFill];
                case 1971: return [4 /*yield*/, import("react-icons/pi")];
                case 1972:
                    PiNumberCircleFourFill = (_b.sent()).PiNumberCircleFourFill;
                    return [2 /*return*/, PiNumberCircleFourFill];
                case 1973: return [4 /*yield*/, import("react-icons/pi")];
                case 1974:
                    PiNumberCircleNineFill = (_b.sent()).PiNumberCircleNineFill;
                    return [2 /*return*/, PiNumberCircleNineFill];
                case 1975: return [4 /*yield*/, import("react-icons/pi")];
                case 1976:
                    PiNumberCircleOneFill = (_b.sent()).PiNumberCircleOneFill;
                    return [2 /*return*/, PiNumberCircleOneFill];
                case 1977: return [4 /*yield*/, import("react-icons/pi")];
                case 1978:
                    PiNumberCircleSevenFill = (_b.sent()).PiNumberCircleSevenFill;
                    return [2 /*return*/, PiNumberCircleSevenFill];
                case 1979: return [4 /*yield*/, import("react-icons/pi")];
                case 1980:
                    PiNumberCircleSixFill = (_b.sent()).PiNumberCircleSixFill;
                    return [2 /*return*/, PiNumberCircleSixFill];
                case 1981: return [4 /*yield*/, import("react-icons/pi")];
                case 1982:
                    PiNumberCircleThreeFill = (_b.sent()).PiNumberCircleThreeFill;
                    return [2 /*return*/, PiNumberCircleThreeFill];
                case 1983: return [4 /*yield*/, import("react-icons/pi")];
                case 1984:
                    PiNumberCircleTwoFill = (_b.sent()).PiNumberCircleTwoFill;
                    return [2 /*return*/, PiNumberCircleTwoFill];
                case 1985: return [4 /*yield*/, import("react-icons/pi")];
                case 1986:
                    PiNumberCircleZeroFill = (_b.sent()).PiNumberCircleZeroFill;
                    return [2 /*return*/, PiNumberCircleZeroFill];
                case 1987: return [4 /*yield*/, import("react-icons/pi")];
                case 1988:
                    PiNumberEightFill = (_b.sent()).PiNumberEightFill;
                    return [2 /*return*/, PiNumberEightFill];
                case 1989: return [4 /*yield*/, import("react-icons/pi")];
                case 1990:
                    PiNumberFiveFill = (_b.sent()).PiNumberFiveFill;
                    return [2 /*return*/, PiNumberFiveFill];
                case 1991: return [4 /*yield*/, import("react-icons/pi")];
                case 1992:
                    PiNumberFourFill = (_b.sent()).PiNumberFourFill;
                    return [2 /*return*/, PiNumberFourFill];
                case 1993: return [4 /*yield*/, import("react-icons/pi")];
                case 1994:
                    PiNumberNineFill = (_b.sent()).PiNumberNineFill;
                    return [2 /*return*/, PiNumberNineFill];
                case 1995: return [4 /*yield*/, import("react-icons/pi")];
                case 1996:
                    PiNumberOneFill = (_b.sent()).PiNumberOneFill;
                    return [2 /*return*/, PiNumberOneFill];
                case 1997: return [4 /*yield*/, import("react-icons/pi")];
                case 1998:
                    PiNumberSevenFill = (_b.sent()).PiNumberSevenFill;
                    return [2 /*return*/, PiNumberSevenFill];
                case 1999: return [4 /*yield*/, import("react-icons/pi")];
                case 2000:
                    PiNumberSixFill = (_b.sent()).PiNumberSixFill;
                    return [2 /*return*/, PiNumberSixFill];
                case 2001: return [2 /*return*/];
            }
        });
    });
}
