import type {IconType} from "react-icons";

import {
    PiCropThin,
    PiCrossThin,
    PiCrosshairSimpleThin,
    PiCrosshairThin,
    PiCrownCrossThin,
    PiCrownSimpleThin,
    PiCrownThin,
    PiCubeFocusThin,
    PiCubeThin,
    PiCubeTransparentThin,
    PiCurrencyBtcThin,
    PiCurrencyCircleDollarThin,
    PiCurrencyCnyThin,
    PiCurrencyDollarSimpleThin,
    PiCurrencyDollarThin,
    PiCurrencyEthThin,
    PiCurrencyEurThin,
    PiCurrencyGbpThin,
    PiCurrencyInrThin,
    PiCurrencyJpyThin,
    PiCurrencyKrwThin,
    PiCurrencyKztThin,
    PiCurrencyNgnThin,
    PiCurrencyRubThin,
    PiCursorClickThin,
    PiCursorTextThin,
    PiCursorThin,
    PiCylinderThin,
    PiDatabaseThin,
    PiDeskThin,
    PiDesktopThin,
    PiDesktopTowerThin,
    PiDetectiveThin,
    PiDevToLogoThin,
    PiDeviceMobileCameraThin,
    PiDeviceMobileSlashThin,
    PiDeviceMobileSpeakerThin,
    PiDeviceMobileThin,
    PiDeviceRotateThin,
    PiDeviceTabletCameraThin,
    PiDeviceTabletSpeakerThin,
    PiDeviceTabletThin,
    PiDevicesThin,
    PiDiamondThin,
    PiDiamondsFourThin,
    PiDiceFiveThin,
    PiDiceFourThin,
    PiDiceOneThin,
    PiDiceSixThin,
    PiDiceThreeThin,
    PiDiceTwoThin,
    PiDiscThin,
    PiDiscoBallThin,
    PiDiscordLogoThin,
    PiDivideThin,
    PiDnaThin,
    PiDogThin,
    PiDoorOpenThin,
    PiDoorThin,
    PiDotOutlineThin,
    PiDotThin,
    PiDotsNineThin,
    PiDotsSixThin,
    PiDotsSixVerticalThin,
    PiDotsThreeCircleThin,
    PiDotsThreeCircleVerticalThin,
    PiDotsThreeOutlineThin,
    PiDotsThreeOutlineVerticalThin,
    PiDotsThreeThin,
    PiDotsThreeVerticalThin,
    PiDownloadSimpleThin,
    PiDownloadThin,
    PiDressThin,
    PiDresserThin,
    PiDribbbleLogoThin,
    PiDroneThin,
    PiDropHalfBottomThin,
    PiDropHalfThin,
    PiDropSimpleThin,
    PiDropSlashThin,
    PiDropThin,
    PiDropboxLogoThin,
    PiEarSlashThin,
    PiEarThin,
    PiEggCrackThin,
    PiEggThin,
    PiEjectSimpleThin,
    PiEjectThin,
    PiElevatorThin,
    PiEmptyThin,
    PiEngineThin,
    PiEnvelopeOpenThin,
    PiEnvelopeSimpleOpenThin,
    PiEnvelopeSimpleThin,
    PiEnvelopeThin,
    PiEqualizerThin,
    PiEqualsThin,
    PiEraserThin,
    PiEscalatorDownThin,
    PiEscalatorUpThin,
    PiExamThin,
    PiExclamationMarkThin,
    PiExcludeSquareThin,
    PiExcludeThin,
    PiExportThin,
    PiEyeClosedThin,
    PiEyeSlashThin,
    PiEyeThin,
    PiEyedropperSampleThin,
    PiEyedropperThin,
    PiEyeglassesThin,
    PiEyesThin,
    PiFaceMaskThin,
    PiFacebookLogoThin,
    PiFactoryThin,
    PiFadersHorizontalThin,
    PiFadersThin,
    PiFalloutShelterThin,
    PiFanThin,
    PiFarmThin,
    PiFastForwardCircleThin,
    PiFastForwardThin,
    PiFeatherThin,
    PiFediverseLogoThin,
    PiFigmaLogoThin,
    PiFileArchiveThin,
    PiFileArrowDownThin,
    PiFileArrowUpThin,
    PiFileAudioThin,
    PiFileCSharpThin,
    PiFileCThin,
    PiFileCloudThin,
    PiFileCodeThin,
    PiFileCppThin,
    PiFileCssThin,
    PiFileCsvThin,
    PiFileDashedThin,
    PiFileDocThin,
    PiFileHtmlThin,
    PiFileImageThin,
    PiFileIniThin,
    PiFileJpgThin,
    PiFileJsThin,
    PiFileJsxThin,
    PiFileLockThin,
    PiFileMagnifyingGlassThin,
    PiFileMdThin,
    PiFileMinusThin,
    PiFilePdfThin,
    PiFilePlusThin,
    PiFilePngThin,
    PiFilePptThin,
    PiFilePyThin,
    PiFileRsThin,
    PiFileSqlThin,
    PiFileSvgThin,
    PiFileTextThin,
    PiFileThin,
    PiFileTsThin,
    PiFileTsxThin,
    PiFileTxtThin,
    PiFileVideoThin,
    PiFileVueThin,
    PiFileXThin,
    PiFileXlsThin,
    PiFileZipThin,
    PiFilesThin,
    PiFilmReelThin,
    PiFilmScriptThin,
    PiFilmSlateThin,
    PiFilmStripThin,
    PiFingerprintSimpleThin,
    PiFingerprintThin,
    PiFinnTheHumanThin,
    PiFireExtinguisherThin,
    PiFireSimpleThin,
    PiFireThin,
    PiFireTruckThin,
    PiFirstAidKitThin,
    PiFirstAidThin,
    PiFishSimpleThin,
    PiFishThin,
    PiFlagBannerFoldThin,
    PiFlagBannerThin,
    PiFlagCheckeredThin,
    PiFlagPennantThin,
    PiFlagThin,
    PiFlameThin,
    PiFlashlightThin,
    PiFlaskThin,
    PiFlipHorizontalThin,
    PiFlipVerticalThin,
    PiFloppyDiskBackThin,
    PiFloppyDiskThin,
    PiFlowArrowThin,
    PiFlowerLotusThin,
    PiFlowerThin,
    PiFlowerTulipThin,
    PiFlyingSaucerThin,
    PiFolderDashedThin,
    PiFolderLockThin,
    PiFolderMinusThin,
    PiFolderOpenThin,
    PiFolderPlusThin,
    PiFolderSimpleDashedThin,
    PiFolderSimpleLockThin,
    PiFolderSimpleMinusThin,
    PiFolderSimplePlusThin,
    PiFolderSimpleStarThin,
    PiFolderSimpleThin,
    PiFolderSimpleUserThin,
    PiFolderStarThin,
    PiFolderThin,
    PiFolderUserThin,
    PiFoldersThin,
    PiFootballHelmetThin,
    PiFootballThin,
    PiFootprintsThin,
    PiForkKnifeThin,
    PiFourKThin,
    PiFrameCornersThin,
    PiFramerLogoThin,
    PiFunctionThin,
    PiFunnelSimpleThin,
    PiFunnelSimpleXThin,
    PiFunnelThin,
    PiFunnelXThin,
    PiGameControllerThin,
    PiGarageThin,
    PiGasCanThin,
    PiGasPumpThin,
    PiGaugeThin,
    PiGavelThin,
    PiGearFineThin,
    PiGearSixThin,
    PiGearThin,
    PiGenderFemaleThin,
    PiGenderIntersexThin,
    PiGenderMaleThin,
    PiGenderNeuterThin,
    PiGenderNonbinaryThin,
    PiGenderTransgenderThin,
    PiGhostThin,
    PiGifThin,
    PiGiftThin,
    PiGitBranchThin,
    PiGitCommitThin,
    PiGitDiffThin,
    PiGitForkThin,
    PiGitMergeThin,
    PiGitPullRequestThin,
    PiGithubLogoThin,
    PiGitlabLogoSimpleThin,
    PiGitlabLogoThin,
    PiGlobeHemisphereEastThin,
    PiGlobeHemisphereWestThin,
    PiGlobeSimpleThin,
    PiGlobeSimpleXThin,
    PiGlobeStandThin,
    PiGlobeThin,
    PiGlobeXThin,
    PiGogglesThin,
    PiGolfThin,
    PiGoodreadsLogoThin,
    PiGoogleCardboardLogoThin,
    PiGoogleChromeLogoThin,
    PiGoogleDriveLogoThin,
    PiGoogleLogoThin,
    PiGooglePhotosLogoThin,
    PiGooglePlayLogoThin,
    PiGooglePodcastsLogoThin,
    PiGpsFixThin,
    PiGpsSlashThin,
    PiGpsThin,
    PiGradientThin,
    PiGraduationCapThin,
    PiGrainsSlashThin,
    PiGrainsThin,
    PiGraphThin,
    PiGraphicsCardThin,
    PiGreaterThanOrEqualThin,
    PiGreaterThanThin,
    PiGridFourThin,
    PiGridNineThin,
    PiGuitarThin,
    PiHairDryerThin,
    PiHamburgerThin,
    PiHammerThin,
    PiHandArrowDownThin,
    PiHandArrowUpThin,
    PiHandCoinsThin,
    PiHandDepositThin,
    PiHandEyeThin,
    PiHandFistThin,
    PiHandGrabbingThin,
    PiHandHeartThin,
    PiHandPalmThin,
    PiHandPeaceThin,
    PiHandPointingThin,
    PiHandSoapThin,
    PiHandSwipeLeftThin,
    PiHandSwipeRightThin,
    PiHandTapThin,
    PiHandThin,
    PiHandWavingThin,
    PiHandWithdrawThin,
    PiHandbagSimpleThin,
    PiHandbagThin,
    PiHandsClappingThin,
    PiHandsPrayingThin,
    PiHandshakeThin,
    PiHardDriveThin,
    PiHardDrivesThin,
    PiHardHatThin,
    PiHashStraightThin,
    PiHashThin,
    PiHeadCircuitThin,
    PiHeadlightsThin,
    PiHeadphonesThin,
    PiHeadsetThin,
    PiHeartBreakThin,
    PiHeartHalfThin,
    PiHeartStraightBreakThin,
    PiHeartStraightThin,
    PiHeartThin,
    PiHeartbeatThin,
    PiHexagonThin,
    PiHighDefinitionThin,
    PiHighHeelThin,
    PiHighlighterCircleThin,
    PiHighlighterThin,
    PiHockeyThin,
    PiHoodieThin,
    PiHorseThin,
    PiHospitalThin,
    PiHourglassHighThin,
    PiHourglassLowThin,
    PiHourglassMediumThin,
    PiHourglassSimpleHighThin,
    PiHourglassSimpleLowThin,
    PiHourglassSimpleMediumThin,
    PiHourglassSimpleThin,
    PiHourglassThin,
    PiHouseLineThin,
    PiHouseSimpleThin,
    PiHouseThin,
    PiHurricaneThin,
    PiIceCreamThin,
    PiIdentificationBadgeThin,
    PiIdentificationCardThin,
    PiImageBrokenThin,
    PiImageSquareThin,
    PiImageThin,
    PiImagesSquareThin,
    PiImagesThin,
    PiInfinityThin,
    PiInfoThin,
    PiInstagramLogoThin,
    PiIntersectSquareThin,
    PiIntersectThin,
    PiIntersectThreeThin,
    PiIntersectionThin,
    PiInvoiceThin,
    PiIslandThin,
    PiJarLabelThin,
    PiJarThin,
    PiJeepThin,
    PiJoystickThin,
    PiKanbanThin,
    PiKeyReturnThin,
    PiKeyThin,
    PiKeyboardThin,
    PiKeyholeThin,
    PiKnifeThin,
    PiLadderSimpleThin,
    PiLadderThin,
    PiLampPendantThin,
    PiLampThin,
    PiLaptopThin,
    PiLassoThin,
    PiLastfmLogoThin,
    PiLayoutThin,
    PiLeafThin,
    PiLecternThin,
    PiLegoSmileyThin,
    PiLegoThin,
    PiLessThanOrEqualThin,
    PiLessThanThin,
    PiLetterCircleHThin,
    PiLetterCirclePThin,
    PiLetterCircleVThin,
    PiLifebuoyThin,
    PiLightbulbFilamentThin,
    PiLightbulbThin,
    PiLighthouseThin,
    PiLightningAThin,
    PiLightningSlashThin,
    PiLightningThin,
    PiLineSegmentThin,
    PiLineSegmentsThin,
    PiLineVerticalThin,
    PiLinkBreakThin,
    PiLinkSimpleBreakThin,
    PiLinkSimpleHorizontalBreakThin,
    PiLinkSimpleHorizontalThin,
    PiLinkSimpleThin,
    PiLinkThin,
    PiLinkedinLogoThin,
    PiLinktreeLogoThin,
    PiLinuxLogoThin,
    PiListBulletsThin,
    PiListChecksThin,
    PiListDashesThin,
    PiListHeartThin,
    PiListMagnifyingGlassThin,
    PiListNumbersThin,
    PiListPlusThin,
    PiListStarThin,
    PiListThin,
    PiLockKeyOpenThin,
    PiLockKeyThin,
    PiLockLaminatedOpenThin,
    PiLockLaminatedThin,
    PiLockOpenThin,
    PiLockSimpleOpenThin,
    PiLockSimpleThin,
    PiLockThin,
    PiLockersThin,
    PiLogThin,
    PiMagicWandThin,
    PiMagnetStraightThin,
    PiMagnetThin,
    PiMagnifyingGlassMinusThin,
    PiMagnifyingGlassPlusThin,
    PiMagnifyingGlassThin,
    PiMailboxThin,
    PiMapPinAreaThin,
    PiMapPinLineThin,
    PiMapPinPlusThin,
    PiMapPinSimpleAreaThin,
    PiMapPinSimpleLineThin,
    PiMapPinSimpleThin,
    PiMapPinThin,
    PiMapTrifoldThin,
    PiMarkdownLogoThin,
    PiMarkerCircleThin,
    PiMartiniThin,
    PiMaskHappyThin,
    PiMaskSadThin,
    PiMastodonLogoThin,
    PiMathOperationsThin,
    PiMatrixLogoThin,
    PiMedalMilitaryThin,
    PiMedalThin,
    PiMediumLogoThin,
    PiMegaphoneSimpleThin,
    PiMegaphoneThin,
    PiMemberOfThin,
    PiMemoryThin,
    PiMessengerLogoThin,
    PiMetaLogoThin,
    PiMeteorThin,
    PiMetronomeThin,
    PiMicrophoneSlashThin,
    PiMicrophoneStageThin,
    PiMicrophoneThin,
    PiMicroscopeThin,
    PiMicrosoftExcelLogoThin,
    PiMicrosoftOutlookLogoThin,
    PiMicrosoftPowerpointLogoThin,
    PiMicrosoftTeamsLogoThin,
    PiMicrosoftWordLogoThin,
    PiMinusCircleThin,
    PiMinusSquareThin,
    PiMinusThin,
    PiMoneyThin,
    PiMoneyWavyThin,
    PiMonitorArrowUpThin,
    PiMonitorPlayThin,
    PiMonitorThin,
    PiMoonStarsThin,
    PiMoonThin,
    PiMopedFrontThin,
    PiMopedThin,
    PiMosqueThin,
    PiMotorcycleThin,
    PiMountainsThin,
    PiMouseLeftClickThin,
    PiMouseMiddleClickThin,
    PiMouseRightClickThin,
    PiMouseScrollThin,
    PiMouseSimpleThin,
    PiMouseThin,
    PiMusicNoteSimpleThin,
    PiMusicNoteThin,
    PiMusicNotesMinusThin,
    PiMusicNotesPlusThin,
    PiMusicNotesSimpleThin,
    PiMusicNotesThin,
    PiNavigationArrowThin,
    PiNeedleThin,
    PiNetworkSlashThin,
    PiNetworkThin,
    PiNetworkXThin,
    PiNewspaperClippingThin,
    PiNewspaperThin,
    PiNotEqualsThin,
    PiNotMemberOfThin,
    PiNotSubsetOfThin,
    PiNotSupersetOfThin,
    PiNotchesThin,
    PiNoteBlankThin,
    PiNotePencilThin,
    PiNoteThin,
    PiNotebookThin,
    PiNotepadThin,
    PiNotificationThin,
    PiNotionLogoThin,
    PiNuclearPlantThin,
    PiNumberCircleEightThin,
    PiNumberCircleFiveThin,
    PiNumberCircleFourThin,
    PiNumberCircleNineThin,
    PiNumberCircleOneThin,
    PiNumberCircleSevenThin,
    PiNumberCircleSixThin,
    PiNumberCircleThreeThin,
    PiNumberCircleTwoThin,
    PiNumberCircleZeroThin,
    PiNumberEightThin,
    PiNumberFiveThin,
    PiNumberFourThin,
    PiNumberNineThin,
    PiNumberOneThin,
    PiNumberSevenThin,
    PiNumberSixThin,
    PiNumberSquareEightThin,
    PiNumberSquareFiveThin,
    PiNumberSquareFourThin,
    PiNumberSquareNineThin,
    PiNumberSquareOneThin,
    PiNumberSquareSevenThin,
    PiNumberSquareSixThin,
    PiNumberSquareThreeThin,
    PiNumberSquareTwoThin,
    PiNumberSquareZeroThin,
    PiNumberThreeThin,
    PiNumberTwoThin,
    PiNumberZeroThin,
    PiNumpadThin,
    PiNutThin,
    PiNyTimesLogoThin,
    PiOctagonThin,
    PiOfficeChairThin,
    PiOnigiriThin,
    PiOpenAiLogoThin,
    PiOptionThin,
    PiOrangeSliceThin,
    PiOrangeThin,
    PiOvenThin,
    PiPackageThin,
    PiPaintBrushBroadThin,
    PiPaintBrushHouseholdThin,
    PiPaintBrushThin,
    PiPaintBucketThin,
    PiPaintRollerThin,
    PiPaletteThin,
    PiPanoramaThin,
    PiPantsThin,
    PiPaperPlaneRightThin,
    PiPaperPlaneThin,
    PiPaperPlaneTiltThin,
    PiPaperclipHorizontalThin,
    PiPaperclipThin,
    PiParachuteThin,
    PiParagraphThin,
    PiParallelogramThin,
    PiParkThin,
    PiPasswordThin,
    PiPathThin,
    PiPatreonLogoThin,
    PiPauseCircleThin,
    PiPauseThin,
    PiPawPrintThin,
    PiPaypalLogoThin,
    PiPeaceThin,
    PiPenNibStraightThin,
    PiPenNibThin,
    PiPenThin,
    PiPencilCircleThin,
    PiPencilLineThin,
    PiPencilRulerThin,
    PiPencilSimpleLineThin,
    PiPencilSimpleSlashThin,
    PiPencilSimpleThin,
    PiPencilSlashThin,
    PiPencilThin,
    PiPentagonThin,
    PiPentagramThin,
    PiPepperThin,
    PiPercentThin,
    PiPersonArmsSpreadThin,
    PiPersonSimpleBikeThin,
    PiPersonSimpleCircleThin,
    PiPersonSimpleHikeThin,
    PiPersonSimpleRunThin,
    PiPersonSimpleSkiThin,
    PiPersonSimpleSnowboardThin,
    PiPersonSimpleSwimThin,
    PiPersonSimpleTaiChiThin,
    PiPersonSimpleThin,
    PiPersonSimpleThrowThin,
    PiPersonSimpleWalkThin,
    PiPersonThin,
    PiPerspectiveThin,
    PiPhoneCallThin,
    PiPhoneDisconnectThin,
    PiPhoneIncomingThin,
    PiPhoneListThin,
    PiPhoneOutgoingThin,
    PiPhonePauseThin,
    PiPhonePlusThin,
    PiPhoneSlashThin,
    PiPhoneThin,
    PiPhoneTransferThin,
    PiPhoneXThin,
    PiPhosphorLogoThin,
    PiPiThin,
    PiPianoKeysThin,
    PiPicnicTableThin,
    PiPictureInPictureThin,
    PiPiggyBankThin,
    PiPillThin,
    PiPingPongThin,
    PiPintGlassThin,
    PiPinterestLogoThin,
    PiPinwheelThin,
    PiPipeThin,
    PiPipeWrenchThin,
    PiPixLogoThin,
    PiPizzaThin,
    PiPlaceholderThin,
    PiPlanetThin,
    PiPlantThin,
    PiPlayCircleThin,
    PiPlayPauseThin,
    PiPlayThin,
    PiPlaylistThin,
    PiPlugChargingThin,
    PiPlugThin,
    PiPlugsConnectedThin,
    PiPlugsThin,
    PiPlusCircleThin,
    PiPlusMinusThin,
    PiPlusSquareThin,
    PiPlusThin,
    PiPokerChipThin,
    PiPoliceCarThin,
    PiPolygonThin,
    PiPopcornThin,
    PiPopsicleThin,
    PiPottedPlantThin,
    PiPowerThin,
    PiPrescriptionThin,
    PiPresentationChartThin,
    PiPresentationThin,
    PiPrinterThin,
    PiProhibitInsetThin,
    PiProhibitThin,
    PiProjectorScreenChartThin,
    PiProjectorScreenThin,
    PiPulseThin,
    PiPushPinSimpleSlashThin,
    PiPushPinSimpleThin,
    PiPushPinSlashThin,
    PiPushPinThin,
    PiPuzzlePieceThin,
    PiQrCodeThin,
    PiQuestionMarkThin,
    PiQuestionThin,
    PiQueueThin,
    PiQuotesThin,
    PiRabbitThin,
    PiRacquetThin,
    PiRadicalThin,
    PiRadioButtonThin,
    PiRadioThin,
    PiRadioactiveThin,
    PiRainbowCloudThin,
    PiRainbowThin,
    PiRankingThin,
    PiReadCvLogoThin,
    PiReceiptThin,
    PiReceiptXThin,
    PiRecordThin,
    PiRectangleDashedThin,
    PiRectangleThin,
    PiRecycleThin,
    PiRedditLogoThin,
    PiRepeatOnceThin,
    PiRepeatThin,
    PiReplitLogoThin,
    PiResizeThin,
    PiRewindCircleThin,
    PiRewindThin,
    PiRoadHorizonThin,
    PiRobotThin,
    PiRocketLaunchThin,
    PiRocketThin,
    PiRowsPlusBottomThin,
    PiRowsPlusTopThin,
    PiRowsThin,
    PiRssSimpleThin,
    PiRssThin,
    PiRugThin,
    PiRulerThin,
    PiSailboatThin,
    PiScalesThin,
    PiScanSmileyThin,
    PiScanThin,
    PiScissorsThin,
    PiScooterThin,
    PiScreencastThin,
    PiScrewdriverThin,
    PiScribbleLoopThin,
    PiScribbleThin,
    PiScrollThin,
    PiSealCheckThin,
    PiSealPercentThin,
    PiSealQuestionThin,
    PiSealThin,
    PiSealWarningThin,
    PiSeatThin,
    PiSeatbeltThin,
    PiSecurityCameraThin,
    PiSelectionAllThin,
    PiSelectionBackgroundThin,
    PiSelectionForegroundThin,
    PiSelectionInverseThin,
    PiSelectionPlusThin,
    PiSelectionSlashThin,
    PiSelectionThin,
    PiShapesThin,
    PiShareFatThin,
    PiShareNetworkThin,
    PiShareThin,
    PiShieldCheckThin,
    PiShieldCheckeredThin,
    PiShieldChevronThin,
    PiShieldPlusThin,
    PiShieldSlashThin,
    PiShieldStarThin,
    PiShieldThin,
    PiShieldWarningThin,
    PiShippingContainerThin,
    PiShirtFoldedThin,
    PiShootingStarThin,
    PiShoppingBagOpenThin,
    PiShoppingBagThin,
    PiShoppingCartSimpleThin,
    PiShoppingCartThin,
    PiShovelThin,
    PiShowerThin,
    PiShrimpThin,
    PiShuffleAngularThin,
    PiShuffleSimpleThin,
    PiShuffleThin,
    PiSidebarSimpleThin,
    PiSidebarThin,
    PiSigmaThin,
    PiSignInThin,
    PiSignOutThin,
    PiSignatureThin,
    PiSignpostThin,
    PiSimCardThin,
    PiSirenThin,
    PiSketchLogoThin,
    PiSkipBackCircleThin,
    PiSkipBackThin,
    PiSkipForwardCircleThin,
    PiSkipForwardThin,
    PiSkullThin,
    PiSkypeLogoThin,
    PiSlackLogoThin,
    PiSlidersHorizontalThin,
    PiSlidersThin,
    PiSlideshowThin,
    PiSmileyAngryThin,
    PiSmileyBlankThin,
    PiSmileyMehThin,
    PiSmileyMeltingThin,
    PiSmileyNervousThin,
    PiSmileySadThin,
    PiSmileyStickerThin,
    PiSmileyThin,
    PiSmileyWinkThin,
    PiSmileyXEyesThin,
    PiSnapchatLogoThin,
    PiSneakerMoveThin,
    PiSneakerThin,
    PiSnowflakeThin,
    PiSoccerBallThin,
    PiSockThin,
    PiSolarPanelThin,
    PiSolarRoofThin,
    PiSortAscendingThin,
    PiSortDescendingThin,
    PiSoundcloudLogoThin,
    PiSpadeThin,
    PiSparkleThin,
    PiSpeakerHifiThin,
    PiSpeakerHighThin,
    PiSpeakerLowThin,
    PiSpeakerNoneThin,
    PiSpeakerSimpleHighThin,
    PiSpeakerSimpleLowThin,
    PiSpeakerSimpleNoneThin,
    PiSpeakerSimpleSlashThin,
    PiSpeakerSimpleXThin,
    PiSpeakerSlashThin,
    PiSpeakerXThin,
    PiSpeedometerThin,
    PiSphereThin,
    PiSpinnerBallThin,
    PiSpinnerGapThin,
    PiSpinnerThin,
    PiSpiralThin,
    PiSplitHorizontalThin,
    PiSplitVerticalThin,
    PiSpotifyLogoThin,
    PiSprayBottleThin,
    PiSquareHalfBottomThin,
    PiSquareHalfThin,
    PiSquareLogoThin,
    PiSquareSplitHorizontalThin,
    PiSquareSplitVerticalThin,
    PiSquareThin,
    PiSquaresFourThin,
    PiStackMinusThin,
    PiStackOverflowLogoThin,
    PiStackPlusThin,
    PiStackSimpleThin,
    PiStackThin,
    PiStairsThin,
    PiStampThin,
    PiStandardDefinitionThin,
    PiStarAndCrescentThin,
    PiStarFourThin,
    PiStarHalfThin,
    PiStarOfDavidThin,
    PiStarThin,
    PiSteamLogoThin,
    PiSteeringWheelThin,
    PiStepsThin,
    PiStethoscopeThin,
    PiStickerThin,
    PiStoolThin,
    PiStopCircleThin,
    PiStopThin,
    PiStorefrontThin,
    PiStrategyThin,
    PiStripeLogoThin,
    PiStudentThin,
    PiSubsetOfThin,
    PiSubsetProperOfThin,
    PiSubtitlesSlashThin,
    PiSubtitlesThin,
    PiSubtractSquareThin,
    PiSubtractThin,
    PiSubwayThin,
    PiSuitcaseRollingThin,
    PiSuitcaseSimpleThin,
    PiSuitcaseThin,
    PiSunDimThin,
    PiSunHorizonThin,
    PiSunThin,
    PiSunglassesThin,
    PiSupersetOfThin,
    PiSupersetProperOfThin,
    PiSwapThin,
    PiSwatchesThin,
    PiSwimmingPoolThin,
    PiSwordThin,
    PiSynagogueThin,
    PiSyringeThin,
    PiTShirtThin,
    PiTableThin,
    PiTabsThin,
    PiTagChevronThin,
    PiTagSimpleThin,
    PiTagThin,
    PiTargetThin,
    PiTaxiThin,
    PiTeaBagThin,
    PiTelegramLogoThin,
    PiTelevisionSimpleThin,
    PiTelevisionThin,
    PiTennisBallThin,
    PiTentThin,
    PiTerminalThin,
    PiTerminalWindowThin,
    PiTestTubeThin,
    PiTextAUnderlineThin,
    PiTextAaThin,
    PiTextAlignCenterThin,
    PiTextAlignJustifyThin,
    PiTextAlignLeftThin,
    PiTextAlignRightThin,
    PiTextBThin,
    PiTextColumnsThin,
    PiTextHFiveThin,
    PiTextHFourThin,
    PiTextHOneThin,
    PiTextHSixThin,
    PiTextHThin,
    PiTextHThreeThin,
    PiTextHTwoThin,
    PiTextIndentThin,
    PiTextItalicThin,
    PiTextOutdentThin,
    PiTextStrikethroughThin,
    PiTextSubscriptThin,
    PiTextSuperscriptThin,
    PiTextTSlashThin,
    PiTextTThin,
    PiTextUnderlineThin,
    PiTextboxThin,
    PiThermometerColdThin,
    PiThermometerHotThin,
    PiThermometerSimpleThin,
    PiThermometerThin,
    PiThreadsLogoThin,
    PiThreeDThin,
    PiThumbsDownThin,
    PiThumbsUpThin,
    PiTicketThin,
    PiTidalLogoThin,
    PiTiktokLogoThin,
    PiTildeThin,
    PiTimerThin,
    PiTipJarThin,
    PiTipiThin,
    PiTireThin,
    PiToggleLeftThin,
    PiToggleRightThin,
    PiToiletPaperThin,
    PiToiletThin,
    PiToolboxThin,
    PiToothThin,
    PiTornadoThin,
    PiToteSimpleThin,
    PiToteThin,
    PiTowelThin,
    PiTractorThin,
    PiTrademarkRegisteredThin,
    PiTrademarkThin,
    PiTrafficConeThin,
    PiTrafficSignThin,
    PiTrafficSignalThin,
    PiTrainRegionalThin,
    PiTrainSimpleThin,
    PiTrainThin,
    PiTramThin,
    PiTranslateThin,
    PiTrashSimpleThin,
    PiTrashThin,
    PiTrayArrowDownThin,
    PiTrayArrowUpThin,
    PiTrayThin,
    PiTreasureChestThin,
    PiTreeEvergreenThin,
    PiTreePalmThin,
    PiTreeStructureThin,
    PiTreeThin,
    PiTreeViewThin,
    PiTrendDownThin,
    PiTrendUpThin,
    PiTriangleDashedThin,
    PiTriangleThin,
    PiTrolleySuitcaseThin,
    PiTrolleyThin,
    PiTrophyThin,
    PiTruckThin,
    PiTruckTrailerThin,
    PiTumblrLogoThin,
    PiTwitchLogoThin,
    PiTwitterLogoThin,
    PiUmbrellaSimpleThin,
    PiUmbrellaThin,
    PiUnionThin,
    PiUniteSquareThin,
    PiUniteThin,
    PiUploadSimpleThin,
    PiUploadThin,
    PiUsbThin,
    PiUserCheckThin,
    PiUserCircleCheckThin,
    PiUserCircleDashedThin,
    PiUserCircleGearThin,
    PiUserCircleMinusThin,
} from "react-icons/pi"

export function nameToReactIcon_pi_8(iconName: string): IconType | undefined {

    switch(iconName) {
        case "pi:PiCropThin":
            return PiCropThin;
        case "pi:PiCrossThin":
            return PiCrossThin;
        case "pi:PiCrosshairSimpleThin":
            return PiCrosshairSimpleThin;
        case "pi:PiCrosshairThin":
            return PiCrosshairThin;
        case "pi:PiCrownCrossThin":
            return PiCrownCrossThin;
        case "pi:PiCrownSimpleThin":
            return PiCrownSimpleThin;
        case "pi:PiCrownThin":
            return PiCrownThin;
        case "pi:PiCubeFocusThin":
            return PiCubeFocusThin;
        case "pi:PiCubeThin":
            return PiCubeThin;
        case "pi:PiCubeTransparentThin":
            return PiCubeTransparentThin;
        case "pi:PiCurrencyBtcThin":
            return PiCurrencyBtcThin;
        case "pi:PiCurrencyCircleDollarThin":
            return PiCurrencyCircleDollarThin;
        case "pi:PiCurrencyCnyThin":
            return PiCurrencyCnyThin;
        case "pi:PiCurrencyDollarSimpleThin":
            return PiCurrencyDollarSimpleThin;
        case "pi:PiCurrencyDollarThin":
            return PiCurrencyDollarThin;
        case "pi:PiCurrencyEthThin":
            return PiCurrencyEthThin;
        case "pi:PiCurrencyEurThin":
            return PiCurrencyEurThin;
        case "pi:PiCurrencyGbpThin":
            return PiCurrencyGbpThin;
        case "pi:PiCurrencyInrThin":
            return PiCurrencyInrThin;
        case "pi:PiCurrencyJpyThin":
            return PiCurrencyJpyThin;
        case "pi:PiCurrencyKrwThin":
            return PiCurrencyKrwThin;
        case "pi:PiCurrencyKztThin":
            return PiCurrencyKztThin;
        case "pi:PiCurrencyNgnThin":
            return PiCurrencyNgnThin;
        case "pi:PiCurrencyRubThin":
            return PiCurrencyRubThin;
        case "pi:PiCursorClickThin":
            return PiCursorClickThin;
        case "pi:PiCursorTextThin":
            return PiCursorTextThin;
        case "pi:PiCursorThin":
            return PiCursorThin;
        case "pi:PiCylinderThin":
            return PiCylinderThin;
        case "pi:PiDatabaseThin":
            return PiDatabaseThin;
        case "pi:PiDeskThin":
            return PiDeskThin;
        case "pi:PiDesktopThin":
            return PiDesktopThin;
        case "pi:PiDesktopTowerThin":
            return PiDesktopTowerThin;
        case "pi:PiDetectiveThin":
            return PiDetectiveThin;
        case "pi:PiDevToLogoThin":
            return PiDevToLogoThin;
        case "pi:PiDeviceMobileCameraThin":
            return PiDeviceMobileCameraThin;
        case "pi:PiDeviceMobileSlashThin":
            return PiDeviceMobileSlashThin;
        case "pi:PiDeviceMobileSpeakerThin":
            return PiDeviceMobileSpeakerThin;
        case "pi:PiDeviceMobileThin":
            return PiDeviceMobileThin;
        case "pi:PiDeviceRotateThin":
            return PiDeviceRotateThin;
        case "pi:PiDeviceTabletCameraThin":
            return PiDeviceTabletCameraThin;
        case "pi:PiDeviceTabletSpeakerThin":
            return PiDeviceTabletSpeakerThin;
        case "pi:PiDeviceTabletThin":
            return PiDeviceTabletThin;
        case "pi:PiDevicesThin":
            return PiDevicesThin;
        case "pi:PiDiamondThin":
            return PiDiamondThin;
        case "pi:PiDiamondsFourThin":
            return PiDiamondsFourThin;
        case "pi:PiDiceFiveThin":
            return PiDiceFiveThin;
        case "pi:PiDiceFourThin":
            return PiDiceFourThin;
        case "pi:PiDiceOneThin":
            return PiDiceOneThin;
        case "pi:PiDiceSixThin":
            return PiDiceSixThin;
        case "pi:PiDiceThreeThin":
            return PiDiceThreeThin;
        case "pi:PiDiceTwoThin":
            return PiDiceTwoThin;
        case "pi:PiDiscThin":
            return PiDiscThin;
        case "pi:PiDiscoBallThin":
            return PiDiscoBallThin;
        case "pi:PiDiscordLogoThin":
            return PiDiscordLogoThin;
        case "pi:PiDivideThin":
            return PiDivideThin;
        case "pi:PiDnaThin":
            return PiDnaThin;
        case "pi:PiDogThin":
            return PiDogThin;
        case "pi:PiDoorOpenThin":
            return PiDoorOpenThin;
        case "pi:PiDoorThin":
            return PiDoorThin;
        case "pi:PiDotOutlineThin":
            return PiDotOutlineThin;
        case "pi:PiDotThin":
            return PiDotThin;
        case "pi:PiDotsNineThin":
            return PiDotsNineThin;
        case "pi:PiDotsSixThin":
            return PiDotsSixThin;
        case "pi:PiDotsSixVerticalThin":
            return PiDotsSixVerticalThin;
        case "pi:PiDotsThreeCircleThin":
            return PiDotsThreeCircleThin;
        case "pi:PiDotsThreeCircleVerticalThin":
            return PiDotsThreeCircleVerticalThin;
        case "pi:PiDotsThreeOutlineThin":
            return PiDotsThreeOutlineThin;
        case "pi:PiDotsThreeOutlineVerticalThin":
            return PiDotsThreeOutlineVerticalThin;
        case "pi:PiDotsThreeThin":
            return PiDotsThreeThin;
        case "pi:PiDotsThreeVerticalThin":
            return PiDotsThreeVerticalThin;
        case "pi:PiDownloadSimpleThin":
            return PiDownloadSimpleThin;
        case "pi:PiDownloadThin":
            return PiDownloadThin;
        case "pi:PiDressThin":
            return PiDressThin;
        case "pi:PiDresserThin":
            return PiDresserThin;
        case "pi:PiDribbbleLogoThin":
            return PiDribbbleLogoThin;
        case "pi:PiDroneThin":
            return PiDroneThin;
        case "pi:PiDropHalfBottomThin":
            return PiDropHalfBottomThin;
        case "pi:PiDropHalfThin":
            return PiDropHalfThin;
        case "pi:PiDropSimpleThin":
            return PiDropSimpleThin;
        case "pi:PiDropSlashThin":
            return PiDropSlashThin;
        case "pi:PiDropThin":
            return PiDropThin;
        case "pi:PiDropboxLogoThin":
            return PiDropboxLogoThin;
        case "pi:PiEarSlashThin":
            return PiEarSlashThin;
        case "pi:PiEarThin":
            return PiEarThin;
        case "pi:PiEggCrackThin":
            return PiEggCrackThin;
        case "pi:PiEggThin":
            return PiEggThin;
        case "pi:PiEjectSimpleThin":
            return PiEjectSimpleThin;
        case "pi:PiEjectThin":
            return PiEjectThin;
        case "pi:PiElevatorThin":
            return PiElevatorThin;
        case "pi:PiEmptyThin":
            return PiEmptyThin;
        case "pi:PiEngineThin":
            return PiEngineThin;
        case "pi:PiEnvelopeOpenThin":
            return PiEnvelopeOpenThin;
        case "pi:PiEnvelopeSimpleOpenThin":
            return PiEnvelopeSimpleOpenThin;
        case "pi:PiEnvelopeSimpleThin":
            return PiEnvelopeSimpleThin;
        case "pi:PiEnvelopeThin":
            return PiEnvelopeThin;
        case "pi:PiEqualizerThin":
            return PiEqualizerThin;
        case "pi:PiEqualsThin":
            return PiEqualsThin;
        case "pi:PiEraserThin":
            return PiEraserThin;
        case "pi:PiEscalatorDownThin":
            return PiEscalatorDownThin;
        case "pi:PiEscalatorUpThin":
            return PiEscalatorUpThin;
        case "pi:PiExamThin":
            return PiExamThin;
        case "pi:PiExclamationMarkThin":
            return PiExclamationMarkThin;
        case "pi:PiExcludeSquareThin":
            return PiExcludeSquareThin;
        case "pi:PiExcludeThin":
            return PiExcludeThin;
        case "pi:PiExportThin":
            return PiExportThin;
        case "pi:PiEyeClosedThin":
            return PiEyeClosedThin;
        case "pi:PiEyeSlashThin":
            return PiEyeSlashThin;
        case "pi:PiEyeThin":
            return PiEyeThin;
        case "pi:PiEyedropperSampleThin":
            return PiEyedropperSampleThin;
        case "pi:PiEyedropperThin":
            return PiEyedropperThin;
        case "pi:PiEyeglassesThin":
            return PiEyeglassesThin;
        case "pi:PiEyesThin":
            return PiEyesThin;
        case "pi:PiFaceMaskThin":
            return PiFaceMaskThin;
        case "pi:PiFacebookLogoThin":
            return PiFacebookLogoThin;
        case "pi:PiFactoryThin":
            return PiFactoryThin;
        case "pi:PiFadersHorizontalThin":
            return PiFadersHorizontalThin;
        case "pi:PiFadersThin":
            return PiFadersThin;
        case "pi:PiFalloutShelterThin":
            return PiFalloutShelterThin;
        case "pi:PiFanThin":
            return PiFanThin;
        case "pi:PiFarmThin":
            return PiFarmThin;
        case "pi:PiFastForwardCircleThin":
            return PiFastForwardCircleThin;
        case "pi:PiFastForwardThin":
            return PiFastForwardThin;
        case "pi:PiFeatherThin":
            return PiFeatherThin;
        case "pi:PiFediverseLogoThin":
            return PiFediverseLogoThin;
        case "pi:PiFigmaLogoThin":
            return PiFigmaLogoThin;
        case "pi:PiFileArchiveThin":
            return PiFileArchiveThin;
        case "pi:PiFileArrowDownThin":
            return PiFileArrowDownThin;
        case "pi:PiFileArrowUpThin":
            return PiFileArrowUpThin;
        case "pi:PiFileAudioThin":
            return PiFileAudioThin;
        case "pi:PiFileCSharpThin":
            return PiFileCSharpThin;
        case "pi:PiFileCThin":
            return PiFileCThin;
        case "pi:PiFileCloudThin":
            return PiFileCloudThin;
        case "pi:PiFileCodeThin":
            return PiFileCodeThin;
        case "pi:PiFileCppThin":
            return PiFileCppThin;
        case "pi:PiFileCssThin":
            return PiFileCssThin;
        case "pi:PiFileCsvThin":
            return PiFileCsvThin;
        case "pi:PiFileDashedThin":
            return PiFileDashedThin;
        case "pi:PiFileDocThin":
            return PiFileDocThin;
        case "pi:PiFileHtmlThin":
            return PiFileHtmlThin;
        case "pi:PiFileImageThin":
            return PiFileImageThin;
        case "pi:PiFileIniThin":
            return PiFileIniThin;
        case "pi:PiFileJpgThin":
            return PiFileJpgThin;
        case "pi:PiFileJsThin":
            return PiFileJsThin;
        case "pi:PiFileJsxThin":
            return PiFileJsxThin;
        case "pi:PiFileLockThin":
            return PiFileLockThin;
        case "pi:PiFileMagnifyingGlassThin":
            return PiFileMagnifyingGlassThin;
        case "pi:PiFileMdThin":
            return PiFileMdThin;
        case "pi:PiFileMinusThin":
            return PiFileMinusThin;
        case "pi:PiFilePdfThin":
            return PiFilePdfThin;
        case "pi:PiFilePlusThin":
            return PiFilePlusThin;
        case "pi:PiFilePngThin":
            return PiFilePngThin;
        case "pi:PiFilePptThin":
            return PiFilePptThin;
        case "pi:PiFilePyThin":
            return PiFilePyThin;
        case "pi:PiFileRsThin":
            return PiFileRsThin;
        case "pi:PiFileSqlThin":
            return PiFileSqlThin;
        case "pi:PiFileSvgThin":
            return PiFileSvgThin;
        case "pi:PiFileTextThin":
            return PiFileTextThin;
        case "pi:PiFileThin":
            return PiFileThin;
        case "pi:PiFileTsThin":
            return PiFileTsThin;
        case "pi:PiFileTsxThin":
            return PiFileTsxThin;
        case "pi:PiFileTxtThin":
            return PiFileTxtThin;
        case "pi:PiFileVideoThin":
            return PiFileVideoThin;
        case "pi:PiFileVueThin":
            return PiFileVueThin;
        case "pi:PiFileXThin":
            return PiFileXThin;
        case "pi:PiFileXlsThin":
            return PiFileXlsThin;
        case "pi:PiFileZipThin":
            return PiFileZipThin;
        case "pi:PiFilesThin":
            return PiFilesThin;
        case "pi:PiFilmReelThin":
            return PiFilmReelThin;
        case "pi:PiFilmScriptThin":
            return PiFilmScriptThin;
        case "pi:PiFilmSlateThin":
            return PiFilmSlateThin;
        case "pi:PiFilmStripThin":
            return PiFilmStripThin;
        case "pi:PiFingerprintSimpleThin":
            return PiFingerprintSimpleThin;
        case "pi:PiFingerprintThin":
            return PiFingerprintThin;
        case "pi:PiFinnTheHumanThin":
            return PiFinnTheHumanThin;
        case "pi:PiFireExtinguisherThin":
            return PiFireExtinguisherThin;
        case "pi:PiFireSimpleThin":
            return PiFireSimpleThin;
        case "pi:PiFireThin":
            return PiFireThin;
        case "pi:PiFireTruckThin":
            return PiFireTruckThin;
        case "pi:PiFirstAidKitThin":
            return PiFirstAidKitThin;
        case "pi:PiFirstAidThin":
            return PiFirstAidThin;
        case "pi:PiFishSimpleThin":
            return PiFishSimpleThin;
        case "pi:PiFishThin":
            return PiFishThin;
        case "pi:PiFlagBannerFoldThin":
            return PiFlagBannerFoldThin;
        case "pi:PiFlagBannerThin":
            return PiFlagBannerThin;
        case "pi:PiFlagCheckeredThin":
            return PiFlagCheckeredThin;
        case "pi:PiFlagPennantThin":
            return PiFlagPennantThin;
        case "pi:PiFlagThin":
            return PiFlagThin;
        case "pi:PiFlameThin":
            return PiFlameThin;
        case "pi:PiFlashlightThin":
            return PiFlashlightThin;
        case "pi:PiFlaskThin":
            return PiFlaskThin;
        case "pi:PiFlipHorizontalThin":
            return PiFlipHorizontalThin;
        case "pi:PiFlipVerticalThin":
            return PiFlipVerticalThin;
        case "pi:PiFloppyDiskBackThin":
            return PiFloppyDiskBackThin;
        case "pi:PiFloppyDiskThin":
            return PiFloppyDiskThin;
        case "pi:PiFlowArrowThin":
            return PiFlowArrowThin;
        case "pi:PiFlowerLotusThin":
            return PiFlowerLotusThin;
        case "pi:PiFlowerThin":
            return PiFlowerThin;
        case "pi:PiFlowerTulipThin":
            return PiFlowerTulipThin;
        case "pi:PiFlyingSaucerThin":
            return PiFlyingSaucerThin;
        case "pi:PiFolderDashedThin":
            return PiFolderDashedThin;
        case "pi:PiFolderLockThin":
            return PiFolderLockThin;
        case "pi:PiFolderMinusThin":
            return PiFolderMinusThin;
        case "pi:PiFolderOpenThin":
            return PiFolderOpenThin;
        case "pi:PiFolderPlusThin":
            return PiFolderPlusThin;
        case "pi:PiFolderSimpleDashedThin":
            return PiFolderSimpleDashedThin;
        case "pi:PiFolderSimpleLockThin":
            return PiFolderSimpleLockThin;
        case "pi:PiFolderSimpleMinusThin":
            return PiFolderSimpleMinusThin;
        case "pi:PiFolderSimplePlusThin":
            return PiFolderSimplePlusThin;
        case "pi:PiFolderSimpleStarThin":
            return PiFolderSimpleStarThin;
        case "pi:PiFolderSimpleThin":
            return PiFolderSimpleThin;
        case "pi:PiFolderSimpleUserThin":
            return PiFolderSimpleUserThin;
        case "pi:PiFolderStarThin":
            return PiFolderStarThin;
        case "pi:PiFolderThin":
            return PiFolderThin;
        case "pi:PiFolderUserThin":
            return PiFolderUserThin;
        case "pi:PiFoldersThin":
            return PiFoldersThin;
        case "pi:PiFootballHelmetThin":
            return PiFootballHelmetThin;
        case "pi:PiFootballThin":
            return PiFootballThin;
        case "pi:PiFootprintsThin":
            return PiFootprintsThin;
        case "pi:PiForkKnifeThin":
            return PiForkKnifeThin;
        case "pi:PiFourKThin":
            return PiFourKThin;
        case "pi:PiFrameCornersThin":
            return PiFrameCornersThin;
        case "pi:PiFramerLogoThin":
            return PiFramerLogoThin;
        case "pi:PiFunctionThin":
            return PiFunctionThin;
        case "pi:PiFunnelSimpleThin":
            return PiFunnelSimpleThin;
        case "pi:PiFunnelSimpleXThin":
            return PiFunnelSimpleXThin;
        case "pi:PiFunnelThin":
            return PiFunnelThin;
        case "pi:PiFunnelXThin":
            return PiFunnelXThin;
        case "pi:PiGameControllerThin":
            return PiGameControllerThin;
        case "pi:PiGarageThin":
            return PiGarageThin;
        case "pi:PiGasCanThin":
            return PiGasCanThin;
        case "pi:PiGasPumpThin":
            return PiGasPumpThin;
        case "pi:PiGaugeThin":
            return PiGaugeThin;
        case "pi:PiGavelThin":
            return PiGavelThin;
        case "pi:PiGearFineThin":
            return PiGearFineThin;
        case "pi:PiGearSixThin":
            return PiGearSixThin;
        case "pi:PiGearThin":
            return PiGearThin;
        case "pi:PiGenderFemaleThin":
            return PiGenderFemaleThin;
        case "pi:PiGenderIntersexThin":
            return PiGenderIntersexThin;
        case "pi:PiGenderMaleThin":
            return PiGenderMaleThin;
        case "pi:PiGenderNeuterThin":
            return PiGenderNeuterThin;
        case "pi:PiGenderNonbinaryThin":
            return PiGenderNonbinaryThin;
        case "pi:PiGenderTransgenderThin":
            return PiGenderTransgenderThin;
        case "pi:PiGhostThin":
            return PiGhostThin;
        case "pi:PiGifThin":
            return PiGifThin;
        case "pi:PiGiftThin":
            return PiGiftThin;
        case "pi:PiGitBranchThin":
            return PiGitBranchThin;
        case "pi:PiGitCommitThin":
            return PiGitCommitThin;
        case "pi:PiGitDiffThin":
            return PiGitDiffThin;
        case "pi:PiGitForkThin":
            return PiGitForkThin;
        case "pi:PiGitMergeThin":
            return PiGitMergeThin;
        case "pi:PiGitPullRequestThin":
            return PiGitPullRequestThin;
        case "pi:PiGithubLogoThin":
            return PiGithubLogoThin;
        case "pi:PiGitlabLogoSimpleThin":
            return PiGitlabLogoSimpleThin;
        case "pi:PiGitlabLogoThin":
            return PiGitlabLogoThin;
        case "pi:PiGlobeHemisphereEastThin":
            return PiGlobeHemisphereEastThin;
        case "pi:PiGlobeHemisphereWestThin":
            return PiGlobeHemisphereWestThin;
        case "pi:PiGlobeSimpleThin":
            return PiGlobeSimpleThin;
        case "pi:PiGlobeSimpleXThin":
            return PiGlobeSimpleXThin;
        case "pi:PiGlobeStandThin":
            return PiGlobeStandThin;
        case "pi:PiGlobeThin":
            return PiGlobeThin;
        case "pi:PiGlobeXThin":
            return PiGlobeXThin;
        case "pi:PiGogglesThin":
            return PiGogglesThin;
        case "pi:PiGolfThin":
            return PiGolfThin;
        case "pi:PiGoodreadsLogoThin":
            return PiGoodreadsLogoThin;
        case "pi:PiGoogleCardboardLogoThin":
            return PiGoogleCardboardLogoThin;
        case "pi:PiGoogleChromeLogoThin":
            return PiGoogleChromeLogoThin;
        case "pi:PiGoogleDriveLogoThin":
            return PiGoogleDriveLogoThin;
        case "pi:PiGoogleLogoThin":
            return PiGoogleLogoThin;
        case "pi:PiGooglePhotosLogoThin":
            return PiGooglePhotosLogoThin;
        case "pi:PiGooglePlayLogoThin":
            return PiGooglePlayLogoThin;
        case "pi:PiGooglePodcastsLogoThin":
            return PiGooglePodcastsLogoThin;
        case "pi:PiGpsFixThin":
            return PiGpsFixThin;
        case "pi:PiGpsSlashThin":
            return PiGpsSlashThin;
        case "pi:PiGpsThin":
            return PiGpsThin;
        case "pi:PiGradientThin":
            return PiGradientThin;
        case "pi:PiGraduationCapThin":
            return PiGraduationCapThin;
        case "pi:PiGrainsSlashThin":
            return PiGrainsSlashThin;
        case "pi:PiGrainsThin":
            return PiGrainsThin;
        case "pi:PiGraphThin":
            return PiGraphThin;
        case "pi:PiGraphicsCardThin":
            return PiGraphicsCardThin;
        case "pi:PiGreaterThanOrEqualThin":
            return PiGreaterThanOrEqualThin;
        case "pi:PiGreaterThanThin":
            return PiGreaterThanThin;
        case "pi:PiGridFourThin":
            return PiGridFourThin;
        case "pi:PiGridNineThin":
            return PiGridNineThin;
        case "pi:PiGuitarThin":
            return PiGuitarThin;
        case "pi:PiHairDryerThin":
            return PiHairDryerThin;
        case "pi:PiHamburgerThin":
            return PiHamburgerThin;
        case "pi:PiHammerThin":
            return PiHammerThin;
        case "pi:PiHandArrowDownThin":
            return PiHandArrowDownThin;
        case "pi:PiHandArrowUpThin":
            return PiHandArrowUpThin;
        case "pi:PiHandCoinsThin":
            return PiHandCoinsThin;
        case "pi:PiHandDepositThin":
            return PiHandDepositThin;
        case "pi:PiHandEyeThin":
            return PiHandEyeThin;
        case "pi:PiHandFistThin":
            return PiHandFistThin;
        case "pi:PiHandGrabbingThin":
            return PiHandGrabbingThin;
        case "pi:PiHandHeartThin":
            return PiHandHeartThin;
        case "pi:PiHandPalmThin":
            return PiHandPalmThin;
        case "pi:PiHandPeaceThin":
            return PiHandPeaceThin;
        case "pi:PiHandPointingThin":
            return PiHandPointingThin;
        case "pi:PiHandSoapThin":
            return PiHandSoapThin;
        case "pi:PiHandSwipeLeftThin":
            return PiHandSwipeLeftThin;
        case "pi:PiHandSwipeRightThin":
            return PiHandSwipeRightThin;
        case "pi:PiHandTapThin":
            return PiHandTapThin;
        case "pi:PiHandThin":
            return PiHandThin;
        case "pi:PiHandWavingThin":
            return PiHandWavingThin;
        case "pi:PiHandWithdrawThin":
            return PiHandWithdrawThin;
        case "pi:PiHandbagSimpleThin":
            return PiHandbagSimpleThin;
        case "pi:PiHandbagThin":
            return PiHandbagThin;
        case "pi:PiHandsClappingThin":
            return PiHandsClappingThin;
        case "pi:PiHandsPrayingThin":
            return PiHandsPrayingThin;
        case "pi:PiHandshakeThin":
            return PiHandshakeThin;
        case "pi:PiHardDriveThin":
            return PiHardDriveThin;
        case "pi:PiHardDrivesThin":
            return PiHardDrivesThin;
        case "pi:PiHardHatThin":
            return PiHardHatThin;
        case "pi:PiHashStraightThin":
            return PiHashStraightThin;
        case "pi:PiHashThin":
            return PiHashThin;
        case "pi:PiHeadCircuitThin":
            return PiHeadCircuitThin;
        case "pi:PiHeadlightsThin":
            return PiHeadlightsThin;
        case "pi:PiHeadphonesThin":
            return PiHeadphonesThin;
        case "pi:PiHeadsetThin":
            return PiHeadsetThin;
        case "pi:PiHeartBreakThin":
            return PiHeartBreakThin;
        case "pi:PiHeartHalfThin":
            return PiHeartHalfThin;
        case "pi:PiHeartStraightBreakThin":
            return PiHeartStraightBreakThin;
        case "pi:PiHeartStraightThin":
            return PiHeartStraightThin;
        case "pi:PiHeartThin":
            return PiHeartThin;
        case "pi:PiHeartbeatThin":
            return PiHeartbeatThin;
        case "pi:PiHexagonThin":
            return PiHexagonThin;
        case "pi:PiHighDefinitionThin":
            return PiHighDefinitionThin;
        case "pi:PiHighHeelThin":
            return PiHighHeelThin;
        case "pi:PiHighlighterCircleThin":
            return PiHighlighterCircleThin;
        case "pi:PiHighlighterThin":
            return PiHighlighterThin;
        case "pi:PiHockeyThin":
            return PiHockeyThin;
        case "pi:PiHoodieThin":
            return PiHoodieThin;
        case "pi:PiHorseThin":
            return PiHorseThin;
        case "pi:PiHospitalThin":
            return PiHospitalThin;
        case "pi:PiHourglassHighThin":
            return PiHourglassHighThin;
        case "pi:PiHourglassLowThin":
            return PiHourglassLowThin;
        case "pi:PiHourglassMediumThin":
            return PiHourglassMediumThin;
        case "pi:PiHourglassSimpleHighThin":
            return PiHourglassSimpleHighThin;
        case "pi:PiHourglassSimpleLowThin":
            return PiHourglassSimpleLowThin;
        case "pi:PiHourglassSimpleMediumThin":
            return PiHourglassSimpleMediumThin;
        case "pi:PiHourglassSimpleThin":
            return PiHourglassSimpleThin;
        case "pi:PiHourglassThin":
            return PiHourglassThin;
        case "pi:PiHouseLineThin":
            return PiHouseLineThin;
        case "pi:PiHouseSimpleThin":
            return PiHouseSimpleThin;
        case "pi:PiHouseThin":
            return PiHouseThin;
        case "pi:PiHurricaneThin":
            return PiHurricaneThin;
        case "pi:PiIceCreamThin":
            return PiIceCreamThin;
        case "pi:PiIdentificationBadgeThin":
            return PiIdentificationBadgeThin;
        case "pi:PiIdentificationCardThin":
            return PiIdentificationCardThin;
        case "pi:PiImageBrokenThin":
            return PiImageBrokenThin;
        case "pi:PiImageSquareThin":
            return PiImageSquareThin;
        case "pi:PiImageThin":
            return PiImageThin;
        case "pi:PiImagesSquareThin":
            return PiImagesSquareThin;
        case "pi:PiImagesThin":
            return PiImagesThin;
        case "pi:PiInfinityThin":
            return PiInfinityThin;
        case "pi:PiInfoThin":
            return PiInfoThin;
        case "pi:PiInstagramLogoThin":
            return PiInstagramLogoThin;
        case "pi:PiIntersectSquareThin":
            return PiIntersectSquareThin;
        case "pi:PiIntersectThin":
            return PiIntersectThin;
        case "pi:PiIntersectThreeThin":
            return PiIntersectThreeThin;
        case "pi:PiIntersectionThin":
            return PiIntersectionThin;
        case "pi:PiInvoiceThin":
            return PiInvoiceThin;
        case "pi:PiIslandThin":
            return PiIslandThin;
        case "pi:PiJarLabelThin":
            return PiJarLabelThin;
        case "pi:PiJarThin":
            return PiJarThin;
        case "pi:PiJeepThin":
            return PiJeepThin;
        case "pi:PiJoystickThin":
            return PiJoystickThin;
        case "pi:PiKanbanThin":
            return PiKanbanThin;
        case "pi:PiKeyReturnThin":
            return PiKeyReturnThin;
        case "pi:PiKeyThin":
            return PiKeyThin;
        case "pi:PiKeyboardThin":
            return PiKeyboardThin;
        case "pi:PiKeyholeThin":
            return PiKeyholeThin;
        case "pi:PiKnifeThin":
            return PiKnifeThin;
        case "pi:PiLadderSimpleThin":
            return PiLadderSimpleThin;
        case "pi:PiLadderThin":
            return PiLadderThin;
        case "pi:PiLampPendantThin":
            return PiLampPendantThin;
        case "pi:PiLampThin":
            return PiLampThin;
        case "pi:PiLaptopThin":
            return PiLaptopThin;
        case "pi:PiLassoThin":
            return PiLassoThin;
        case "pi:PiLastfmLogoThin":
            return PiLastfmLogoThin;
        case "pi:PiLayoutThin":
            return PiLayoutThin;
        case "pi:PiLeafThin":
            return PiLeafThin;
        case "pi:PiLecternThin":
            return PiLecternThin;
        case "pi:PiLegoSmileyThin":
            return PiLegoSmileyThin;
        case "pi:PiLegoThin":
            return PiLegoThin;
        case "pi:PiLessThanOrEqualThin":
            return PiLessThanOrEqualThin;
        case "pi:PiLessThanThin":
            return PiLessThanThin;
        case "pi:PiLetterCircleHThin":
            return PiLetterCircleHThin;
        case "pi:PiLetterCirclePThin":
            return PiLetterCirclePThin;
        case "pi:PiLetterCircleVThin":
            return PiLetterCircleVThin;
        case "pi:PiLifebuoyThin":
            return PiLifebuoyThin;
        case "pi:PiLightbulbFilamentThin":
            return PiLightbulbFilamentThin;
        case "pi:PiLightbulbThin":
            return PiLightbulbThin;
        case "pi:PiLighthouseThin":
            return PiLighthouseThin;
        case "pi:PiLightningAThin":
            return PiLightningAThin;
        case "pi:PiLightningSlashThin":
            return PiLightningSlashThin;
        case "pi:PiLightningThin":
            return PiLightningThin;
        case "pi:PiLineSegmentThin":
            return PiLineSegmentThin;
        case "pi:PiLineSegmentsThin":
            return PiLineSegmentsThin;
        case "pi:PiLineVerticalThin":
            return PiLineVerticalThin;
        case "pi:PiLinkBreakThin":
            return PiLinkBreakThin;
        case "pi:PiLinkSimpleBreakThin":
            return PiLinkSimpleBreakThin;
        case "pi:PiLinkSimpleHorizontalBreakThin":
            return PiLinkSimpleHorizontalBreakThin;
        case "pi:PiLinkSimpleHorizontalThin":
            return PiLinkSimpleHorizontalThin;
        case "pi:PiLinkSimpleThin":
            return PiLinkSimpleThin;
        case "pi:PiLinkThin":
            return PiLinkThin;
        case "pi:PiLinkedinLogoThin":
            return PiLinkedinLogoThin;
        case "pi:PiLinktreeLogoThin":
            return PiLinktreeLogoThin;
        case "pi:PiLinuxLogoThin":
            return PiLinuxLogoThin;
        case "pi:PiListBulletsThin":
            return PiListBulletsThin;
        case "pi:PiListChecksThin":
            return PiListChecksThin;
        case "pi:PiListDashesThin":
            return PiListDashesThin;
        case "pi:PiListHeartThin":
            return PiListHeartThin;
        case "pi:PiListMagnifyingGlassThin":
            return PiListMagnifyingGlassThin;
        case "pi:PiListNumbersThin":
            return PiListNumbersThin;
        case "pi:PiListPlusThin":
            return PiListPlusThin;
        case "pi:PiListStarThin":
            return PiListStarThin;
        case "pi:PiListThin":
            return PiListThin;
        case "pi:PiLockKeyOpenThin":
            return PiLockKeyOpenThin;
        case "pi:PiLockKeyThin":
            return PiLockKeyThin;
        case "pi:PiLockLaminatedOpenThin":
            return PiLockLaminatedOpenThin;
        case "pi:PiLockLaminatedThin":
            return PiLockLaminatedThin;
        case "pi:PiLockOpenThin":
            return PiLockOpenThin;
        case "pi:PiLockSimpleOpenThin":
            return PiLockSimpleOpenThin;
        case "pi:PiLockSimpleThin":
            return PiLockSimpleThin;
        case "pi:PiLockThin":
            return PiLockThin;
        case "pi:PiLockersThin":
            return PiLockersThin;
        case "pi:PiLogThin":
            return PiLogThin;
        case "pi:PiMagicWandThin":
            return PiMagicWandThin;
        case "pi:PiMagnetStraightThin":
            return PiMagnetStraightThin;
        case "pi:PiMagnetThin":
            return PiMagnetThin;
        case "pi:PiMagnifyingGlassMinusThin":
            return PiMagnifyingGlassMinusThin;
        case "pi:PiMagnifyingGlassPlusThin":
            return PiMagnifyingGlassPlusThin;
        case "pi:PiMagnifyingGlassThin":
            return PiMagnifyingGlassThin;
        case "pi:PiMailboxThin":
            return PiMailboxThin;
        case "pi:PiMapPinAreaThin":
            return PiMapPinAreaThin;
        case "pi:PiMapPinLineThin":
            return PiMapPinLineThin;
        case "pi:PiMapPinPlusThin":
            return PiMapPinPlusThin;
        case "pi:PiMapPinSimpleAreaThin":
            return PiMapPinSimpleAreaThin;
        case "pi:PiMapPinSimpleLineThin":
            return PiMapPinSimpleLineThin;
        case "pi:PiMapPinSimpleThin":
            return PiMapPinSimpleThin;
        case "pi:PiMapPinThin":
            return PiMapPinThin;
        case "pi:PiMapTrifoldThin":
            return PiMapTrifoldThin;
        case "pi:PiMarkdownLogoThin":
            return PiMarkdownLogoThin;
        case "pi:PiMarkerCircleThin":
            return PiMarkerCircleThin;
        case "pi:PiMartiniThin":
            return PiMartiniThin;
        case "pi:PiMaskHappyThin":
            return PiMaskHappyThin;
        case "pi:PiMaskSadThin":
            return PiMaskSadThin;
        case "pi:PiMastodonLogoThin":
            return PiMastodonLogoThin;
        case "pi:PiMathOperationsThin":
            return PiMathOperationsThin;
        case "pi:PiMatrixLogoThin":
            return PiMatrixLogoThin;
        case "pi:PiMedalMilitaryThin":
            return PiMedalMilitaryThin;
        case "pi:PiMedalThin":
            return PiMedalThin;
        case "pi:PiMediumLogoThin":
            return PiMediumLogoThin;
        case "pi:PiMegaphoneSimpleThin":
            return PiMegaphoneSimpleThin;
        case "pi:PiMegaphoneThin":
            return PiMegaphoneThin;
        case "pi:PiMemberOfThin":
            return PiMemberOfThin;
        case "pi:PiMemoryThin":
            return PiMemoryThin;
        case "pi:PiMessengerLogoThin":
            return PiMessengerLogoThin;
        case "pi:PiMetaLogoThin":
            return PiMetaLogoThin;
        case "pi:PiMeteorThin":
            return PiMeteorThin;
        case "pi:PiMetronomeThin":
            return PiMetronomeThin;
        case "pi:PiMicrophoneSlashThin":
            return PiMicrophoneSlashThin;
        case "pi:PiMicrophoneStageThin":
            return PiMicrophoneStageThin;
        case "pi:PiMicrophoneThin":
            return PiMicrophoneThin;
        case "pi:PiMicroscopeThin":
            return PiMicroscopeThin;
        case "pi:PiMicrosoftExcelLogoThin":
            return PiMicrosoftExcelLogoThin;
        case "pi:PiMicrosoftOutlookLogoThin":
            return PiMicrosoftOutlookLogoThin;
        case "pi:PiMicrosoftPowerpointLogoThin":
            return PiMicrosoftPowerpointLogoThin;
        case "pi:PiMicrosoftTeamsLogoThin":
            return PiMicrosoftTeamsLogoThin;
        case "pi:PiMicrosoftWordLogoThin":
            return PiMicrosoftWordLogoThin;
        case "pi:PiMinusCircleThin":
            return PiMinusCircleThin;
        case "pi:PiMinusSquareThin":
            return PiMinusSquareThin;
        case "pi:PiMinusThin":
            return PiMinusThin;
        case "pi:PiMoneyThin":
            return PiMoneyThin;
        case "pi:PiMoneyWavyThin":
            return PiMoneyWavyThin;
        case "pi:PiMonitorArrowUpThin":
            return PiMonitorArrowUpThin;
        case "pi:PiMonitorPlayThin":
            return PiMonitorPlayThin;
        case "pi:PiMonitorThin":
            return PiMonitorThin;
        case "pi:PiMoonStarsThin":
            return PiMoonStarsThin;
        case "pi:PiMoonThin":
            return PiMoonThin;
        case "pi:PiMopedFrontThin":
            return PiMopedFrontThin;
        case "pi:PiMopedThin":
            return PiMopedThin;
        case "pi:PiMosqueThin":
            return PiMosqueThin;
        case "pi:PiMotorcycleThin":
            return PiMotorcycleThin;
        case "pi:PiMountainsThin":
            return PiMountainsThin;
        case "pi:PiMouseLeftClickThin":
            return PiMouseLeftClickThin;
        case "pi:PiMouseMiddleClickThin":
            return PiMouseMiddleClickThin;
        case "pi:PiMouseRightClickThin":
            return PiMouseRightClickThin;
        case "pi:PiMouseScrollThin":
            return PiMouseScrollThin;
        case "pi:PiMouseSimpleThin":
            return PiMouseSimpleThin;
        case "pi:PiMouseThin":
            return PiMouseThin;
        case "pi:PiMusicNoteSimpleThin":
            return PiMusicNoteSimpleThin;
        case "pi:PiMusicNoteThin":
            return PiMusicNoteThin;
        case "pi:PiMusicNotesMinusThin":
            return PiMusicNotesMinusThin;
        case "pi:PiMusicNotesPlusThin":
            return PiMusicNotesPlusThin;
        case "pi:PiMusicNotesSimpleThin":
            return PiMusicNotesSimpleThin;
        case "pi:PiMusicNotesThin":
            return PiMusicNotesThin;
        case "pi:PiNavigationArrowThin":
            return PiNavigationArrowThin;
        case "pi:PiNeedleThin":
            return PiNeedleThin;
        case "pi:PiNetworkSlashThin":
            return PiNetworkSlashThin;
        case "pi:PiNetworkThin":
            return PiNetworkThin;
        case "pi:PiNetworkXThin":
            return PiNetworkXThin;
        case "pi:PiNewspaperClippingThin":
            return PiNewspaperClippingThin;
        case "pi:PiNewspaperThin":
            return PiNewspaperThin;
        case "pi:PiNotEqualsThin":
            return PiNotEqualsThin;
        case "pi:PiNotMemberOfThin":
            return PiNotMemberOfThin;
        case "pi:PiNotSubsetOfThin":
            return PiNotSubsetOfThin;
        case "pi:PiNotSupersetOfThin":
            return PiNotSupersetOfThin;
        case "pi:PiNotchesThin":
            return PiNotchesThin;
        case "pi:PiNoteBlankThin":
            return PiNoteBlankThin;
        case "pi:PiNotePencilThin":
            return PiNotePencilThin;
        case "pi:PiNoteThin":
            return PiNoteThin;
        case "pi:PiNotebookThin":
            return PiNotebookThin;
        case "pi:PiNotepadThin":
            return PiNotepadThin;
        case "pi:PiNotificationThin":
            return PiNotificationThin;
        case "pi:PiNotionLogoThin":
            return PiNotionLogoThin;
        case "pi:PiNuclearPlantThin":
            return PiNuclearPlantThin;
        case "pi:PiNumberCircleEightThin":
            return PiNumberCircleEightThin;
        case "pi:PiNumberCircleFiveThin":
            return PiNumberCircleFiveThin;
        case "pi:PiNumberCircleFourThin":
            return PiNumberCircleFourThin;
        case "pi:PiNumberCircleNineThin":
            return PiNumberCircleNineThin;
        case "pi:PiNumberCircleOneThin":
            return PiNumberCircleOneThin;
        case "pi:PiNumberCircleSevenThin":
            return PiNumberCircleSevenThin;
        case "pi:PiNumberCircleSixThin":
            return PiNumberCircleSixThin;
        case "pi:PiNumberCircleThreeThin":
            return PiNumberCircleThreeThin;
        case "pi:PiNumberCircleTwoThin":
            return PiNumberCircleTwoThin;
        case "pi:PiNumberCircleZeroThin":
            return PiNumberCircleZeroThin;
        case "pi:PiNumberEightThin":
            return PiNumberEightThin;
        case "pi:PiNumberFiveThin":
            return PiNumberFiveThin;
        case "pi:PiNumberFourThin":
            return PiNumberFourThin;
        case "pi:PiNumberNineThin":
            return PiNumberNineThin;
        case "pi:PiNumberOneThin":
            return PiNumberOneThin;
        case "pi:PiNumberSevenThin":
            return PiNumberSevenThin;
        case "pi:PiNumberSixThin":
            return PiNumberSixThin;
        case "pi:PiNumberSquareEightThin":
            return PiNumberSquareEightThin;
        case "pi:PiNumberSquareFiveThin":
            return PiNumberSquareFiveThin;
        case "pi:PiNumberSquareFourThin":
            return PiNumberSquareFourThin;
        case "pi:PiNumberSquareNineThin":
            return PiNumberSquareNineThin;
        case "pi:PiNumberSquareOneThin":
            return PiNumberSquareOneThin;
        case "pi:PiNumberSquareSevenThin":
            return PiNumberSquareSevenThin;
        case "pi:PiNumberSquareSixThin":
            return PiNumberSquareSixThin;
        case "pi:PiNumberSquareThreeThin":
            return PiNumberSquareThreeThin;
        case "pi:PiNumberSquareTwoThin":
            return PiNumberSquareTwoThin;
        case "pi:PiNumberSquareZeroThin":
            return PiNumberSquareZeroThin;
        case "pi:PiNumberThreeThin":
            return PiNumberThreeThin;
        case "pi:PiNumberTwoThin":
            return PiNumberTwoThin;
        case "pi:PiNumberZeroThin":
            return PiNumberZeroThin;
        case "pi:PiNumpadThin":
            return PiNumpadThin;
        case "pi:PiNutThin":
            return PiNutThin;
        case "pi:PiNyTimesLogoThin":
            return PiNyTimesLogoThin;
        case "pi:PiOctagonThin":
            return PiOctagonThin;
        case "pi:PiOfficeChairThin":
            return PiOfficeChairThin;
        case "pi:PiOnigiriThin":
            return PiOnigiriThin;
        case "pi:PiOpenAiLogoThin":
            return PiOpenAiLogoThin;
        case "pi:PiOptionThin":
            return PiOptionThin;
        case "pi:PiOrangeSliceThin":
            return PiOrangeSliceThin;
        case "pi:PiOrangeThin":
            return PiOrangeThin;
        case "pi:PiOvenThin":
            return PiOvenThin;
        case "pi:PiPackageThin":
            return PiPackageThin;
        case "pi:PiPaintBrushBroadThin":
            return PiPaintBrushBroadThin;
        case "pi:PiPaintBrushHouseholdThin":
            return PiPaintBrushHouseholdThin;
        case "pi:PiPaintBrushThin":
            return PiPaintBrushThin;
        case "pi:PiPaintBucketThin":
            return PiPaintBucketThin;
        case "pi:PiPaintRollerThin":
            return PiPaintRollerThin;
        case "pi:PiPaletteThin":
            return PiPaletteThin;
        case "pi:PiPanoramaThin":
            return PiPanoramaThin;
        case "pi:PiPantsThin":
            return PiPantsThin;
        case "pi:PiPaperPlaneRightThin":
            return PiPaperPlaneRightThin;
        case "pi:PiPaperPlaneThin":
            return PiPaperPlaneThin;
        case "pi:PiPaperPlaneTiltThin":
            return PiPaperPlaneTiltThin;
        case "pi:PiPaperclipHorizontalThin":
            return PiPaperclipHorizontalThin;
        case "pi:PiPaperclipThin":
            return PiPaperclipThin;
        case "pi:PiParachuteThin":
            return PiParachuteThin;
        case "pi:PiParagraphThin":
            return PiParagraphThin;
        case "pi:PiParallelogramThin":
            return PiParallelogramThin;
        case "pi:PiParkThin":
            return PiParkThin;
        case "pi:PiPasswordThin":
            return PiPasswordThin;
        case "pi:PiPathThin":
            return PiPathThin;
        case "pi:PiPatreonLogoThin":
            return PiPatreonLogoThin;
        case "pi:PiPauseCircleThin":
            return PiPauseCircleThin;
        case "pi:PiPauseThin":
            return PiPauseThin;
        case "pi:PiPawPrintThin":
            return PiPawPrintThin;
        case "pi:PiPaypalLogoThin":
            return PiPaypalLogoThin;
        case "pi:PiPeaceThin":
            return PiPeaceThin;
        case "pi:PiPenNibStraightThin":
            return PiPenNibStraightThin;
        case "pi:PiPenNibThin":
            return PiPenNibThin;
        case "pi:PiPenThin":
            return PiPenThin;
        case "pi:PiPencilCircleThin":
            return PiPencilCircleThin;
        case "pi:PiPencilLineThin":
            return PiPencilLineThin;
        case "pi:PiPencilRulerThin":
            return PiPencilRulerThin;
        case "pi:PiPencilSimpleLineThin":
            return PiPencilSimpleLineThin;
        case "pi:PiPencilSimpleSlashThin":
            return PiPencilSimpleSlashThin;
        case "pi:PiPencilSimpleThin":
            return PiPencilSimpleThin;
        case "pi:PiPencilSlashThin":
            return PiPencilSlashThin;
        case "pi:PiPencilThin":
            return PiPencilThin;
        case "pi:PiPentagonThin":
            return PiPentagonThin;
        case "pi:PiPentagramThin":
            return PiPentagramThin;
        case "pi:PiPepperThin":
            return PiPepperThin;
        case "pi:PiPercentThin":
            return PiPercentThin;
        case "pi:PiPersonArmsSpreadThin":
            return PiPersonArmsSpreadThin;
        case "pi:PiPersonSimpleBikeThin":
            return PiPersonSimpleBikeThin;
        case "pi:PiPersonSimpleCircleThin":
            return PiPersonSimpleCircleThin;
        case "pi:PiPersonSimpleHikeThin":
            return PiPersonSimpleHikeThin;
        case "pi:PiPersonSimpleRunThin":
            return PiPersonSimpleRunThin;
        case "pi:PiPersonSimpleSkiThin":
            return PiPersonSimpleSkiThin;
        case "pi:PiPersonSimpleSnowboardThin":
            return PiPersonSimpleSnowboardThin;
        case "pi:PiPersonSimpleSwimThin":
            return PiPersonSimpleSwimThin;
        case "pi:PiPersonSimpleTaiChiThin":
            return PiPersonSimpleTaiChiThin;
        case "pi:PiPersonSimpleThin":
            return PiPersonSimpleThin;
        case "pi:PiPersonSimpleThrowThin":
            return PiPersonSimpleThrowThin;
        case "pi:PiPersonSimpleWalkThin":
            return PiPersonSimpleWalkThin;
        case "pi:PiPersonThin":
            return PiPersonThin;
        case "pi:PiPerspectiveThin":
            return PiPerspectiveThin;
        case "pi:PiPhoneCallThin":
            return PiPhoneCallThin;
        case "pi:PiPhoneDisconnectThin":
            return PiPhoneDisconnectThin;
        case "pi:PiPhoneIncomingThin":
            return PiPhoneIncomingThin;
        case "pi:PiPhoneListThin":
            return PiPhoneListThin;
        case "pi:PiPhoneOutgoingThin":
            return PiPhoneOutgoingThin;
        case "pi:PiPhonePauseThin":
            return PiPhonePauseThin;
        case "pi:PiPhonePlusThin":
            return PiPhonePlusThin;
        case "pi:PiPhoneSlashThin":
            return PiPhoneSlashThin;
        case "pi:PiPhoneThin":
            return PiPhoneThin;
        case "pi:PiPhoneTransferThin":
            return PiPhoneTransferThin;
        case "pi:PiPhoneXThin":
            return PiPhoneXThin;
        case "pi:PiPhosphorLogoThin":
            return PiPhosphorLogoThin;
        case "pi:PiPiThin":
            return PiPiThin;
        case "pi:PiPianoKeysThin":
            return PiPianoKeysThin;
        case "pi:PiPicnicTableThin":
            return PiPicnicTableThin;
        case "pi:PiPictureInPictureThin":
            return PiPictureInPictureThin;
        case "pi:PiPiggyBankThin":
            return PiPiggyBankThin;
        case "pi:PiPillThin":
            return PiPillThin;
        case "pi:PiPingPongThin":
            return PiPingPongThin;
        case "pi:PiPintGlassThin":
            return PiPintGlassThin;
        case "pi:PiPinterestLogoThin":
            return PiPinterestLogoThin;
        case "pi:PiPinwheelThin":
            return PiPinwheelThin;
        case "pi:PiPipeThin":
            return PiPipeThin;
        case "pi:PiPipeWrenchThin":
            return PiPipeWrenchThin;
        case "pi:PiPixLogoThin":
            return PiPixLogoThin;
        case "pi:PiPizzaThin":
            return PiPizzaThin;
        case "pi:PiPlaceholderThin":
            return PiPlaceholderThin;
        case "pi:PiPlanetThin":
            return PiPlanetThin;
        case "pi:PiPlantThin":
            return PiPlantThin;
        case "pi:PiPlayCircleThin":
            return PiPlayCircleThin;
        case "pi:PiPlayPauseThin":
            return PiPlayPauseThin;
        case "pi:PiPlayThin":
            return PiPlayThin;
        case "pi:PiPlaylistThin":
            return PiPlaylistThin;
        case "pi:PiPlugChargingThin":
            return PiPlugChargingThin;
        case "pi:PiPlugThin":
            return PiPlugThin;
        case "pi:PiPlugsConnectedThin":
            return PiPlugsConnectedThin;
        case "pi:PiPlugsThin":
            return PiPlugsThin;
        case "pi:PiPlusCircleThin":
            return PiPlusCircleThin;
        case "pi:PiPlusMinusThin":
            return PiPlusMinusThin;
        case "pi:PiPlusSquareThin":
            return PiPlusSquareThin;
        case "pi:PiPlusThin":
            return PiPlusThin;
        case "pi:PiPokerChipThin":
            return PiPokerChipThin;
        case "pi:PiPoliceCarThin":
            return PiPoliceCarThin;
        case "pi:PiPolygonThin":
            return PiPolygonThin;
        case "pi:PiPopcornThin":
            return PiPopcornThin;
        case "pi:PiPopsicleThin":
            return PiPopsicleThin;
        case "pi:PiPottedPlantThin":
            return PiPottedPlantThin;
        case "pi:PiPowerThin":
            return PiPowerThin;
        case "pi:PiPrescriptionThin":
            return PiPrescriptionThin;
        case "pi:PiPresentationChartThin":
            return PiPresentationChartThin;
        case "pi:PiPresentationThin":
            return PiPresentationThin;
        case "pi:PiPrinterThin":
            return PiPrinterThin;
        case "pi:PiProhibitInsetThin":
            return PiProhibitInsetThin;
        case "pi:PiProhibitThin":
            return PiProhibitThin;
        case "pi:PiProjectorScreenChartThin":
            return PiProjectorScreenChartThin;
        case "pi:PiProjectorScreenThin":
            return PiProjectorScreenThin;
        case "pi:PiPulseThin":
            return PiPulseThin;
        case "pi:PiPushPinSimpleSlashThin":
            return PiPushPinSimpleSlashThin;
        case "pi:PiPushPinSimpleThin":
            return PiPushPinSimpleThin;
        case "pi:PiPushPinSlashThin":
            return PiPushPinSlashThin;
        case "pi:PiPushPinThin":
            return PiPushPinThin;
        case "pi:PiPuzzlePieceThin":
            return PiPuzzlePieceThin;
        case "pi:PiQrCodeThin":
            return PiQrCodeThin;
        case "pi:PiQuestionMarkThin":
            return PiQuestionMarkThin;
        case "pi:PiQuestionThin":
            return PiQuestionThin;
        case "pi:PiQueueThin":
            return PiQueueThin;
        case "pi:PiQuotesThin":
            return PiQuotesThin;
        case "pi:PiRabbitThin":
            return PiRabbitThin;
        case "pi:PiRacquetThin":
            return PiRacquetThin;
        case "pi:PiRadicalThin":
            return PiRadicalThin;
        case "pi:PiRadioButtonThin":
            return PiRadioButtonThin;
        case "pi:PiRadioThin":
            return PiRadioThin;
        case "pi:PiRadioactiveThin":
            return PiRadioactiveThin;
        case "pi:PiRainbowCloudThin":
            return PiRainbowCloudThin;
        case "pi:PiRainbowThin":
            return PiRainbowThin;
        case "pi:PiRankingThin":
            return PiRankingThin;
        case "pi:PiReadCvLogoThin":
            return PiReadCvLogoThin;
        case "pi:PiReceiptThin":
            return PiReceiptThin;
        case "pi:PiReceiptXThin":
            return PiReceiptXThin;
        case "pi:PiRecordThin":
            return PiRecordThin;
        case "pi:PiRectangleDashedThin":
            return PiRectangleDashedThin;
        case "pi:PiRectangleThin":
            return PiRectangleThin;
        case "pi:PiRecycleThin":
            return PiRecycleThin;
        case "pi:PiRedditLogoThin":
            return PiRedditLogoThin;
        case "pi:PiRepeatOnceThin":
            return PiRepeatOnceThin;
        case "pi:PiRepeatThin":
            return PiRepeatThin;
        case "pi:PiReplitLogoThin":
            return PiReplitLogoThin;
        case "pi:PiResizeThin":
            return PiResizeThin;
        case "pi:PiRewindCircleThin":
            return PiRewindCircleThin;
        case "pi:PiRewindThin":
            return PiRewindThin;
        case "pi:PiRoadHorizonThin":
            return PiRoadHorizonThin;
        case "pi:PiRobotThin":
            return PiRobotThin;
        case "pi:PiRocketLaunchThin":
            return PiRocketLaunchThin;
        case "pi:PiRocketThin":
            return PiRocketThin;
        case "pi:PiRowsPlusBottomThin":
            return PiRowsPlusBottomThin;
        case "pi:PiRowsPlusTopThin":
            return PiRowsPlusTopThin;
        case "pi:PiRowsThin":
            return PiRowsThin;
        case "pi:PiRssSimpleThin":
            return PiRssSimpleThin;
        case "pi:PiRssThin":
            return PiRssThin;
        case "pi:PiRugThin":
            return PiRugThin;
        case "pi:PiRulerThin":
            return PiRulerThin;
        case "pi:PiSailboatThin":
            return PiSailboatThin;
        case "pi:PiScalesThin":
            return PiScalesThin;
        case "pi:PiScanSmileyThin":
            return PiScanSmileyThin;
        case "pi:PiScanThin":
            return PiScanThin;
        case "pi:PiScissorsThin":
            return PiScissorsThin;
        case "pi:PiScooterThin":
            return PiScooterThin;
        case "pi:PiScreencastThin":
            return PiScreencastThin;
        case "pi:PiScrewdriverThin":
            return PiScrewdriverThin;
        case "pi:PiScribbleLoopThin":
            return PiScribbleLoopThin;
        case "pi:PiScribbleThin":
            return PiScribbleThin;
        case "pi:PiScrollThin":
            return PiScrollThin;
        case "pi:PiSealCheckThin":
            return PiSealCheckThin;
        case "pi:PiSealPercentThin":
            return PiSealPercentThin;
        case "pi:PiSealQuestionThin":
            return PiSealQuestionThin;
        case "pi:PiSealThin":
            return PiSealThin;
        case "pi:PiSealWarningThin":
            return PiSealWarningThin;
        case "pi:PiSeatThin":
            return PiSeatThin;
        case "pi:PiSeatbeltThin":
            return PiSeatbeltThin;
        case "pi:PiSecurityCameraThin":
            return PiSecurityCameraThin;
        case "pi:PiSelectionAllThin":
            return PiSelectionAllThin;
        case "pi:PiSelectionBackgroundThin":
            return PiSelectionBackgroundThin;
        case "pi:PiSelectionForegroundThin":
            return PiSelectionForegroundThin;
        case "pi:PiSelectionInverseThin":
            return PiSelectionInverseThin;
        case "pi:PiSelectionPlusThin":
            return PiSelectionPlusThin;
        case "pi:PiSelectionSlashThin":
            return PiSelectionSlashThin;
        case "pi:PiSelectionThin":
            return PiSelectionThin;
        case "pi:PiShapesThin":
            return PiShapesThin;
        case "pi:PiShareFatThin":
            return PiShareFatThin;
        case "pi:PiShareNetworkThin":
            return PiShareNetworkThin;
        case "pi:PiShareThin":
            return PiShareThin;
        case "pi:PiShieldCheckThin":
            return PiShieldCheckThin;
        case "pi:PiShieldCheckeredThin":
            return PiShieldCheckeredThin;
        case "pi:PiShieldChevronThin":
            return PiShieldChevronThin;
        case "pi:PiShieldPlusThin":
            return PiShieldPlusThin;
        case "pi:PiShieldSlashThin":
            return PiShieldSlashThin;
        case "pi:PiShieldStarThin":
            return PiShieldStarThin;
        case "pi:PiShieldThin":
            return PiShieldThin;
        case "pi:PiShieldWarningThin":
            return PiShieldWarningThin;
        case "pi:PiShippingContainerThin":
            return PiShippingContainerThin;
        case "pi:PiShirtFoldedThin":
            return PiShirtFoldedThin;
        case "pi:PiShootingStarThin":
            return PiShootingStarThin;
        case "pi:PiShoppingBagOpenThin":
            return PiShoppingBagOpenThin;
        case "pi:PiShoppingBagThin":
            return PiShoppingBagThin;
        case "pi:PiShoppingCartSimpleThin":
            return PiShoppingCartSimpleThin;
        case "pi:PiShoppingCartThin":
            return PiShoppingCartThin;
        case "pi:PiShovelThin":
            return PiShovelThin;
        case "pi:PiShowerThin":
            return PiShowerThin;
        case "pi:PiShrimpThin":
            return PiShrimpThin;
        case "pi:PiShuffleAngularThin":
            return PiShuffleAngularThin;
        case "pi:PiShuffleSimpleThin":
            return PiShuffleSimpleThin;
        case "pi:PiShuffleThin":
            return PiShuffleThin;
        case "pi:PiSidebarSimpleThin":
            return PiSidebarSimpleThin;
        case "pi:PiSidebarThin":
            return PiSidebarThin;
        case "pi:PiSigmaThin":
            return PiSigmaThin;
        case "pi:PiSignInThin":
            return PiSignInThin;
        case "pi:PiSignOutThin":
            return PiSignOutThin;
        case "pi:PiSignatureThin":
            return PiSignatureThin;
        case "pi:PiSignpostThin":
            return PiSignpostThin;
        case "pi:PiSimCardThin":
            return PiSimCardThin;
        case "pi:PiSirenThin":
            return PiSirenThin;
        case "pi:PiSketchLogoThin":
            return PiSketchLogoThin;
        case "pi:PiSkipBackCircleThin":
            return PiSkipBackCircleThin;
        case "pi:PiSkipBackThin":
            return PiSkipBackThin;
        case "pi:PiSkipForwardCircleThin":
            return PiSkipForwardCircleThin;
        case "pi:PiSkipForwardThin":
            return PiSkipForwardThin;
        case "pi:PiSkullThin":
            return PiSkullThin;
        case "pi:PiSkypeLogoThin":
            return PiSkypeLogoThin;
        case "pi:PiSlackLogoThin":
            return PiSlackLogoThin;
        case "pi:PiSlidersHorizontalThin":
            return PiSlidersHorizontalThin;
        case "pi:PiSlidersThin":
            return PiSlidersThin;
        case "pi:PiSlideshowThin":
            return PiSlideshowThin;
        case "pi:PiSmileyAngryThin":
            return PiSmileyAngryThin;
        case "pi:PiSmileyBlankThin":
            return PiSmileyBlankThin;
        case "pi:PiSmileyMehThin":
            return PiSmileyMehThin;
        case "pi:PiSmileyMeltingThin":
            return PiSmileyMeltingThin;
        case "pi:PiSmileyNervousThin":
            return PiSmileyNervousThin;
        case "pi:PiSmileySadThin":
            return PiSmileySadThin;
        case "pi:PiSmileyStickerThin":
            return PiSmileyStickerThin;
        case "pi:PiSmileyThin":
            return PiSmileyThin;
        case "pi:PiSmileyWinkThin":
            return PiSmileyWinkThin;
        case "pi:PiSmileyXEyesThin":
            return PiSmileyXEyesThin;
        case "pi:PiSnapchatLogoThin":
            return PiSnapchatLogoThin;
        case "pi:PiSneakerMoveThin":
            return PiSneakerMoveThin;
        case "pi:PiSneakerThin":
            return PiSneakerThin;
        case "pi:PiSnowflakeThin":
            return PiSnowflakeThin;
        case "pi:PiSoccerBallThin":
            return PiSoccerBallThin;
        case "pi:PiSockThin":
            return PiSockThin;
        case "pi:PiSolarPanelThin":
            return PiSolarPanelThin;
        case "pi:PiSolarRoofThin":
            return PiSolarRoofThin;
        case "pi:PiSortAscendingThin":
            return PiSortAscendingThin;
        case "pi:PiSortDescendingThin":
            return PiSortDescendingThin;
        case "pi:PiSoundcloudLogoThin":
            return PiSoundcloudLogoThin;
        case "pi:PiSpadeThin":
            return PiSpadeThin;
        case "pi:PiSparkleThin":
            return PiSparkleThin;
        case "pi:PiSpeakerHifiThin":
            return PiSpeakerHifiThin;
        case "pi:PiSpeakerHighThin":
            return PiSpeakerHighThin;
        case "pi:PiSpeakerLowThin":
            return PiSpeakerLowThin;
        case "pi:PiSpeakerNoneThin":
            return PiSpeakerNoneThin;
        case "pi:PiSpeakerSimpleHighThin":
            return PiSpeakerSimpleHighThin;
        case "pi:PiSpeakerSimpleLowThin":
            return PiSpeakerSimpleLowThin;
        case "pi:PiSpeakerSimpleNoneThin":
            return PiSpeakerSimpleNoneThin;
        case "pi:PiSpeakerSimpleSlashThin":
            return PiSpeakerSimpleSlashThin;
        case "pi:PiSpeakerSimpleXThin":
            return PiSpeakerSimpleXThin;
        case "pi:PiSpeakerSlashThin":
            return PiSpeakerSlashThin;
        case "pi:PiSpeakerXThin":
            return PiSpeakerXThin;
        case "pi:PiSpeedometerThin":
            return PiSpeedometerThin;
        case "pi:PiSphereThin":
            return PiSphereThin;
        case "pi:PiSpinnerBallThin":
            return PiSpinnerBallThin;
        case "pi:PiSpinnerGapThin":
            return PiSpinnerGapThin;
        case "pi:PiSpinnerThin":
            return PiSpinnerThin;
        case "pi:PiSpiralThin":
            return PiSpiralThin;
        case "pi:PiSplitHorizontalThin":
            return PiSplitHorizontalThin;
        case "pi:PiSplitVerticalThin":
            return PiSplitVerticalThin;
        case "pi:PiSpotifyLogoThin":
            return PiSpotifyLogoThin;
        case "pi:PiSprayBottleThin":
            return PiSprayBottleThin;
        case "pi:PiSquareHalfBottomThin":
            return PiSquareHalfBottomThin;
        case "pi:PiSquareHalfThin":
            return PiSquareHalfThin;
        case "pi:PiSquareLogoThin":
            return PiSquareLogoThin;
        case "pi:PiSquareSplitHorizontalThin":
            return PiSquareSplitHorizontalThin;
        case "pi:PiSquareSplitVerticalThin":
            return PiSquareSplitVerticalThin;
        case "pi:PiSquareThin":
            return PiSquareThin;
        case "pi:PiSquaresFourThin":
            return PiSquaresFourThin;
        case "pi:PiStackMinusThin":
            return PiStackMinusThin;
        case "pi:PiStackOverflowLogoThin":
            return PiStackOverflowLogoThin;
        case "pi:PiStackPlusThin":
            return PiStackPlusThin;
        case "pi:PiStackSimpleThin":
            return PiStackSimpleThin;
        case "pi:PiStackThin":
            return PiStackThin;
        case "pi:PiStairsThin":
            return PiStairsThin;
        case "pi:PiStampThin":
            return PiStampThin;
        case "pi:PiStandardDefinitionThin":
            return PiStandardDefinitionThin;
        case "pi:PiStarAndCrescentThin":
            return PiStarAndCrescentThin;
        case "pi:PiStarFourThin":
            return PiStarFourThin;
        case "pi:PiStarHalfThin":
            return PiStarHalfThin;
        case "pi:PiStarOfDavidThin":
            return PiStarOfDavidThin;
        case "pi:PiStarThin":
            return PiStarThin;
        case "pi:PiSteamLogoThin":
            return PiSteamLogoThin;
        case "pi:PiSteeringWheelThin":
            return PiSteeringWheelThin;
        case "pi:PiStepsThin":
            return PiStepsThin;
        case "pi:PiStethoscopeThin":
            return PiStethoscopeThin;
        case "pi:PiStickerThin":
            return PiStickerThin;
        case "pi:PiStoolThin":
            return PiStoolThin;
        case "pi:PiStopCircleThin":
            return PiStopCircleThin;
        case "pi:PiStopThin":
            return PiStopThin;
        case "pi:PiStorefrontThin":
            return PiStorefrontThin;
        case "pi:PiStrategyThin":
            return PiStrategyThin;
        case "pi:PiStripeLogoThin":
            return PiStripeLogoThin;
        case "pi:PiStudentThin":
            return PiStudentThin;
        case "pi:PiSubsetOfThin":
            return PiSubsetOfThin;
        case "pi:PiSubsetProperOfThin":
            return PiSubsetProperOfThin;
        case "pi:PiSubtitlesSlashThin":
            return PiSubtitlesSlashThin;
        case "pi:PiSubtitlesThin":
            return PiSubtitlesThin;
        case "pi:PiSubtractSquareThin":
            return PiSubtractSquareThin;
        case "pi:PiSubtractThin":
            return PiSubtractThin;
        case "pi:PiSubwayThin":
            return PiSubwayThin;
        case "pi:PiSuitcaseRollingThin":
            return PiSuitcaseRollingThin;
        case "pi:PiSuitcaseSimpleThin":
            return PiSuitcaseSimpleThin;
        case "pi:PiSuitcaseThin":
            return PiSuitcaseThin;
        case "pi:PiSunDimThin":
            return PiSunDimThin;
        case "pi:PiSunHorizonThin":
            return PiSunHorizonThin;
        case "pi:PiSunThin":
            return PiSunThin;
        case "pi:PiSunglassesThin":
            return PiSunglassesThin;
        case "pi:PiSupersetOfThin":
            return PiSupersetOfThin;
        case "pi:PiSupersetProperOfThin":
            return PiSupersetProperOfThin;
        case "pi:PiSwapThin":
            return PiSwapThin;
        case "pi:PiSwatchesThin":
            return PiSwatchesThin;
        case "pi:PiSwimmingPoolThin":
            return PiSwimmingPoolThin;
        case "pi:PiSwordThin":
            return PiSwordThin;
        case "pi:PiSynagogueThin":
            return PiSynagogueThin;
        case "pi:PiSyringeThin":
            return PiSyringeThin;
        case "pi:PiTShirtThin":
            return PiTShirtThin;
        case "pi:PiTableThin":
            return PiTableThin;
        case "pi:PiTabsThin":
            return PiTabsThin;
        case "pi:PiTagChevronThin":
            return PiTagChevronThin;
        case "pi:PiTagSimpleThin":
            return PiTagSimpleThin;
        case "pi:PiTagThin":
            return PiTagThin;
        case "pi:PiTargetThin":
            return PiTargetThin;
        case "pi:PiTaxiThin":
            return PiTaxiThin;
        case "pi:PiTeaBagThin":
            return PiTeaBagThin;
        case "pi:PiTelegramLogoThin":
            return PiTelegramLogoThin;
        case "pi:PiTelevisionSimpleThin":
            return PiTelevisionSimpleThin;
        case "pi:PiTelevisionThin":
            return PiTelevisionThin;
        case "pi:PiTennisBallThin":
            return PiTennisBallThin;
        case "pi:PiTentThin":
            return PiTentThin;
        case "pi:PiTerminalThin":
            return PiTerminalThin;
        case "pi:PiTerminalWindowThin":
            return PiTerminalWindowThin;
        case "pi:PiTestTubeThin":
            return PiTestTubeThin;
        case "pi:PiTextAUnderlineThin":
            return PiTextAUnderlineThin;
        case "pi:PiTextAaThin":
            return PiTextAaThin;
        case "pi:PiTextAlignCenterThin":
            return PiTextAlignCenterThin;
        case "pi:PiTextAlignJustifyThin":
            return PiTextAlignJustifyThin;
        case "pi:PiTextAlignLeftThin":
            return PiTextAlignLeftThin;
        case "pi:PiTextAlignRightThin":
            return PiTextAlignRightThin;
        case "pi:PiTextBThin":
            return PiTextBThin;
        case "pi:PiTextColumnsThin":
            return PiTextColumnsThin;
        case "pi:PiTextHFiveThin":
            return PiTextHFiveThin;
        case "pi:PiTextHFourThin":
            return PiTextHFourThin;
        case "pi:PiTextHOneThin":
            return PiTextHOneThin;
        case "pi:PiTextHSixThin":
            return PiTextHSixThin;
        case "pi:PiTextHThin":
            return PiTextHThin;
        case "pi:PiTextHThreeThin":
            return PiTextHThreeThin;
        case "pi:PiTextHTwoThin":
            return PiTextHTwoThin;
        case "pi:PiTextIndentThin":
            return PiTextIndentThin;
        case "pi:PiTextItalicThin":
            return PiTextItalicThin;
        case "pi:PiTextOutdentThin":
            return PiTextOutdentThin;
        case "pi:PiTextStrikethroughThin":
            return PiTextStrikethroughThin;
        case "pi:PiTextSubscriptThin":
            return PiTextSubscriptThin;
        case "pi:PiTextSuperscriptThin":
            return PiTextSuperscriptThin;
        case "pi:PiTextTSlashThin":
            return PiTextTSlashThin;
        case "pi:PiTextTThin":
            return PiTextTThin;
        case "pi:PiTextUnderlineThin":
            return PiTextUnderlineThin;
        case "pi:PiTextboxThin":
            return PiTextboxThin;
        case "pi:PiThermometerColdThin":
            return PiThermometerColdThin;
        case "pi:PiThermometerHotThin":
            return PiThermometerHotThin;
        case "pi:PiThermometerSimpleThin":
            return PiThermometerSimpleThin;
        case "pi:PiThermometerThin":
            return PiThermometerThin;
        case "pi:PiThreadsLogoThin":
            return PiThreadsLogoThin;
        case "pi:PiThreeDThin":
            return PiThreeDThin;
        case "pi:PiThumbsDownThin":
            return PiThumbsDownThin;
        case "pi:PiThumbsUpThin":
            return PiThumbsUpThin;
        case "pi:PiTicketThin":
            return PiTicketThin;
        case "pi:PiTidalLogoThin":
            return PiTidalLogoThin;
        case "pi:PiTiktokLogoThin":
            return PiTiktokLogoThin;
        case "pi:PiTildeThin":
            return PiTildeThin;
        case "pi:PiTimerThin":
            return PiTimerThin;
        case "pi:PiTipJarThin":
            return PiTipJarThin;
        case "pi:PiTipiThin":
            return PiTipiThin;
        case "pi:PiTireThin":
            return PiTireThin;
        case "pi:PiToggleLeftThin":
            return PiToggleLeftThin;
        case "pi:PiToggleRightThin":
            return PiToggleRightThin;
        case "pi:PiToiletPaperThin":
            return PiToiletPaperThin;
        case "pi:PiToiletThin":
            return PiToiletThin;
        case "pi:PiToolboxThin":
            return PiToolboxThin;
        case "pi:PiToothThin":
            return PiToothThin;
        case "pi:PiTornadoThin":
            return PiTornadoThin;
        case "pi:PiToteSimpleThin":
            return PiToteSimpleThin;
        case "pi:PiToteThin":
            return PiToteThin;
        case "pi:PiTowelThin":
            return PiTowelThin;
        case "pi:PiTractorThin":
            return PiTractorThin;
        case "pi:PiTrademarkRegisteredThin":
            return PiTrademarkRegisteredThin;
        case "pi:PiTrademarkThin":
            return PiTrademarkThin;
        case "pi:PiTrafficConeThin":
            return PiTrafficConeThin;
        case "pi:PiTrafficSignThin":
            return PiTrafficSignThin;
        case "pi:PiTrafficSignalThin":
            return PiTrafficSignalThin;
        case "pi:PiTrainRegionalThin":
            return PiTrainRegionalThin;
        case "pi:PiTrainSimpleThin":
            return PiTrainSimpleThin;
        case "pi:PiTrainThin":
            return PiTrainThin;
        case "pi:PiTramThin":
            return PiTramThin;
        case "pi:PiTranslateThin":
            return PiTranslateThin;
        case "pi:PiTrashSimpleThin":
            return PiTrashSimpleThin;
        case "pi:PiTrashThin":
            return PiTrashThin;
        case "pi:PiTrayArrowDownThin":
            return PiTrayArrowDownThin;
        case "pi:PiTrayArrowUpThin":
            return PiTrayArrowUpThin;
        case "pi:PiTrayThin":
            return PiTrayThin;
        case "pi:PiTreasureChestThin":
            return PiTreasureChestThin;
        case "pi:PiTreeEvergreenThin":
            return PiTreeEvergreenThin;
        case "pi:PiTreePalmThin":
            return PiTreePalmThin;
        case "pi:PiTreeStructureThin":
            return PiTreeStructureThin;
        case "pi:PiTreeThin":
            return PiTreeThin;
        case "pi:PiTreeViewThin":
            return PiTreeViewThin;
        case "pi:PiTrendDownThin":
            return PiTrendDownThin;
        case "pi:PiTrendUpThin":
            return PiTrendUpThin;
        case "pi:PiTriangleDashedThin":
            return PiTriangleDashedThin;
        case "pi:PiTriangleThin":
            return PiTriangleThin;
        case "pi:PiTrolleySuitcaseThin":
            return PiTrolleySuitcaseThin;
        case "pi:PiTrolleyThin":
            return PiTrolleyThin;
        case "pi:PiTrophyThin":
            return PiTrophyThin;
        case "pi:PiTruckThin":
            return PiTruckThin;
        case "pi:PiTruckTrailerThin":
            return PiTruckTrailerThin;
        case "pi:PiTumblrLogoThin":
            return PiTumblrLogoThin;
        case "pi:PiTwitchLogoThin":
            return PiTwitchLogoThin;
        case "pi:PiTwitterLogoThin":
            return PiTwitterLogoThin;
        case "pi:PiUmbrellaSimpleThin":
            return PiUmbrellaSimpleThin;
        case "pi:PiUmbrellaThin":
            return PiUmbrellaThin;
        case "pi:PiUnionThin":
            return PiUnionThin;
        case "pi:PiUniteSquareThin":
            return PiUniteSquareThin;
        case "pi:PiUniteThin":
            return PiUniteThin;
        case "pi:PiUploadSimpleThin":
            return PiUploadSimpleThin;
        case "pi:PiUploadThin":
            return PiUploadThin;
        case "pi:PiUsbThin":
            return PiUsbThin;
        case "pi:PiUserCheckThin":
            return PiUserCheckThin;
        case "pi:PiUserCircleCheckThin":
            return PiUserCircleCheckThin;
        case "pi:PiUserCircleDashedThin":
            return PiUserCircleDashedThin;
        case "pi:PiUserCircleGearThin":
            return PiUserCircleGearThin;
        case "pi:PiUserCircleMinusThin":
            return PiUserCircleMinusThin;
    }
}
