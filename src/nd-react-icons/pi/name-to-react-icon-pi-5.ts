import type {IconType} from "react-icons";

import {
    PiCursorClickLight,
    PiCursorLight,
    PiCursorTextLight,
    PiCylinderLight,
    PiDatabaseLight,
    PiDeskLight,
    PiDesktopLight,
    PiDesktopTowerLight,
    PiDetectiveLight,
    PiDevToLogoLight,
    PiDeviceMobileCameraLight,
    PiDeviceMobileLight,
    PiDeviceMobileSlashLight,
    PiDeviceMobileSpeakerLight,
    PiDeviceRotateLight,
    PiDeviceTabletCameraLight,
    PiDeviceTabletLight,
    PiDeviceTabletSpeakerLight,
    PiDevicesLight,
    PiDiamondLight,
    PiDiamondsFourLight,
    PiDiceFiveLight,
    PiDiceFourLight,
    PiDiceOneLight,
    PiDiceSixLight,
    PiDiceThreeLight,
    PiDiceTwoLight,
    PiDiscLight,
    PiDiscoBallLight,
    PiDiscordLogoLight,
    PiDivideLight,
    PiDnaLight,
    PiDogLight,
    PiDoorLight,
    PiDoorOpenLight,
    PiDotLight,
    PiDotOutlineLight,
    PiDotsNineLight,
    PiDotsSixLight,
    PiDotsSixVerticalLight,
    PiDotsThreeCircleLight,
    PiDotsThreeCircleVerticalLight,
    PiDotsThreeLight,
    PiDotsThreeOutlineLight,
    PiDotsThreeOutlineVerticalLight,
    PiDotsThreeVerticalLight,
    PiDownloadLight,
    PiDownloadSimpleLight,
    PiDressLight,
    PiDresserLight,
    PiDribbbleLogoLight,
    PiDroneLight,
    PiDropHalfBottomLight,
    PiDropHalfLight,
    PiDropLight,
    PiDropSimpleLight,
    PiDropSlashLight,
    PiDropboxLogoLight,
    PiEarLight,
    PiEarSlashLight,
    PiEggCrackLight,
    PiEggLight,
    PiEjectLight,
    PiEjectSimpleLight,
    PiElevatorLight,
    PiEmptyLight,
    PiEngineLight,
    PiEnvelopeLight,
    PiEnvelopeOpenLight,
    PiEnvelopeSimpleLight,
    PiEnvelopeSimpleOpenLight,
    PiEqualizerLight,
    PiEqualsLight,
    PiEraserLight,
    PiEscalatorDownLight,
    PiEscalatorUpLight,
    PiExamLight,
    PiExclamationMarkLight,
    PiExcludeLight,
    PiExcludeSquareLight,
    PiExportLight,
    PiEyeClosedLight,
    PiEyeLight,
    PiEyeSlashLight,
    PiEyedropperLight,
    PiEyedropperSampleLight,
    PiEyeglassesLight,
    PiEyesLight,
    PiFaceMaskLight,
    PiFacebookLogoLight,
    PiFactoryLight,
    PiFadersHorizontalLight,
    PiFadersLight,
    PiFalloutShelterLight,
    PiFanLight,
    PiFarmLight,
    PiFastForwardCircleLight,
    PiFastForwardLight,
    PiFeatherLight,
    PiFediverseLogoLight,
    PiFigmaLogoLight,
    PiFileArchiveLight,
    PiFileArrowDownLight,
    PiFileArrowUpLight,
    PiFileAudioLight,
    PiFileCLight,
    PiFileCSharpLight,
    PiFileCloudLight,
    PiFileCodeLight,
    PiFileCppLight,
    PiFileCssLight,
    PiFileCsvLight,
    PiFileDashedLight,
    PiFileDocLight,
    PiFileHtmlLight,
    PiFileImageLight,
    PiFileIniLight,
    PiFileJpgLight,
    PiFileJsLight,
    PiFileJsxLight,
    PiFileLight,
    PiFileLockLight,
    PiFileMagnifyingGlassLight,
    PiFileMdLight,
    PiFileMinusLight,
    PiFilePdfLight,
    PiFilePlusLight,
    PiFilePngLight,
    PiFilePptLight,
    PiFilePyLight,
    PiFileRsLight,
    PiFileSqlLight,
    PiFileSvgLight,
    PiFileTextLight,
    PiFileTsLight,
    PiFileTsxLight,
    PiFileTxtLight,
    PiFileVideoLight,
    PiFileVueLight,
    PiFileXLight,
    PiFileXlsLight,
    PiFileZipLight,
    PiFilesLight,
    PiFilmReelLight,
    PiFilmScriptLight,
    PiFilmSlateLight,
    PiFilmStripLight,
    PiFingerprintLight,
    PiFingerprintSimpleLight,
    PiFinnTheHumanLight,
    PiFireExtinguisherLight,
    PiFireLight,
    PiFireSimpleLight,
    PiFireTruckLight,
    PiFirstAidKitLight,
    PiFirstAidLight,
    PiFishLight,
    PiFishSimpleLight,
    PiFlagBannerFoldLight,
    PiFlagBannerLight,
    PiFlagCheckeredLight,
    PiFlagLight,
    PiFlagPennantLight,
    PiFlameLight,
    PiFlashlightLight,
    PiFlaskLight,
    PiFlipHorizontalLight,
    PiFlipVerticalLight,
    PiFloppyDiskBackLight,
    PiFloppyDiskLight,
    PiFlowArrowLight,
    PiFlowerLight,
    PiFlowerLotusLight,
    PiFlowerTulipLight,
    PiFlyingSaucerLight,
    PiFolderDashedLight,
    PiFolderLight,
    PiFolderLockLight,
    PiFolderMinusLight,
    PiFolderOpenLight,
    PiFolderPlusLight,
    PiFolderSimpleDashedLight,
    PiFolderSimpleLight,
    PiFolderSimpleLockLight,
    PiFolderSimpleMinusLight,
    PiFolderSimplePlusLight,
    PiFolderSimpleStarLight,
    PiFolderSimpleUserLight,
    PiFolderStarLight,
    PiFolderUserLight,
    PiFoldersLight,
    PiFootballHelmetLight,
    PiFootballLight,
    PiFootprintsLight,
    PiForkKnifeLight,
    PiFourKLight,
    PiFrameCornersLight,
    PiFramerLogoLight,
    PiFunctionLight,
    PiFunnelLight,
    PiFunnelSimpleLight,
    PiFunnelSimpleXLight,
    PiFunnelXLight,
    PiGameControllerLight,
    PiGarageLight,
    PiGasCanLight,
    PiGasPumpLight,
    PiGaugeLight,
    PiGavelLight,
    PiGearFineLight,
    PiGearLight,
    PiGearSixLight,
    PiGenderFemaleLight,
    PiGenderIntersexLight,
    PiGenderMaleLight,
    PiGenderNeuterLight,
    PiGenderNonbinaryLight,
    PiGenderTransgenderLight,
    PiGhostLight,
    PiGifLight,
    PiGiftLight,
    PiGitBranchLight,
    PiGitCommitLight,
    PiGitDiffLight,
    PiGitForkLight,
    PiGitMergeLight,
    PiGitPullRequestLight,
    PiGithubLogoLight,
    PiGitlabLogoLight,
    PiGitlabLogoSimpleLight,
    PiGlobeHemisphereEastLight,
    PiGlobeHemisphereWestLight,
    PiGlobeLight,
    PiGlobeSimpleLight,
    PiGlobeSimpleXLight,
    PiGlobeStandLight,
    PiGlobeXLight,
    PiGogglesLight,
    PiGolfLight,
    PiGoodreadsLogoLight,
    PiGoogleCardboardLogoLight,
    PiGoogleChromeLogoLight,
    PiGoogleDriveLogoLight,
    PiGoogleLogoLight,
    PiGooglePhotosLogoLight,
    PiGooglePlayLogoLight,
    PiGooglePodcastsLogoLight,
    PiGpsFixLight,
    PiGpsLight,
    PiGpsSlashLight,
    PiGradientLight,
    PiGraduationCapLight,
    PiGrainsLight,
    PiGrainsSlashLight,
    PiGraphLight,
    PiGraphicsCardLight,
    PiGreaterThanLight,
    PiGreaterThanOrEqualLight,
    PiGridFourLight,
    PiGridNineLight,
    PiGuitarLight,
    PiHairDryerLight,
    PiHamburgerLight,
    PiHammerLight,
    PiHandArrowDownLight,
    PiHandArrowUpLight,
    PiHandCoinsLight,
    PiHandDepositLight,
    PiHandEyeLight,
    PiHandFistLight,
    PiHandGrabbingLight,
    PiHandHeartLight,
    PiHandLight,
    PiHandPalmLight,
    PiHandPeaceLight,
    PiHandPointingLight,
    PiHandSoapLight,
    PiHandSwipeLeftLight,
    PiHandSwipeRightLight,
    PiHandTapLight,
    PiHandWavingLight,
    PiHandWithdrawLight,
    PiHandbagLight,
    PiHandbagSimpleLight,
    PiHandsClappingLight,
    PiHandsPrayingLight,
    PiHandshakeLight,
    PiHardDriveLight,
    PiHardDrivesLight,
    PiHardHatLight,
    PiHashLight,
    PiHashStraightLight,
    PiHeadCircuitLight,
    PiHeadlightsLight,
    PiHeadphonesLight,
    PiHeadsetLight,
    PiHeartBreakLight,
    PiHeartHalfLight,
    PiHeartLight,
    PiHeartStraightBreakLight,
    PiHeartStraightLight,
    PiHeartbeatLight,
    PiHexagonLight,
    PiHighDefinitionLight,
    PiHighHeelLight,
    PiHighlighterCircleLight,
    PiHighlighterLight,
    PiHockeyLight,
    PiHoodieLight,
    PiHorseLight,
    PiHospitalLight,
    PiHourglassHighLight,
    PiHourglassLight,
    PiHourglassLowLight,
    PiHourglassMediumLight,
    PiHourglassSimpleHighLight,
    PiHourglassSimpleLight,
    PiHourglassSimpleLowLight,
    PiHourglassSimpleMediumLight,
    PiHouseLight,
    PiHouseLineLight,
    PiHouseSimpleLight,
    PiHurricaneLight,
    PiIceCreamLight,
    PiIdentificationBadgeLight,
    PiIdentificationCardLight,
    PiImageBrokenLight,
    PiImageLight,
    PiImageSquareLight,
    PiImagesLight,
    PiImagesSquareLight,
    PiInfinityLight,
    PiInfoLight,
    PiInstagramLogoLight,
    PiIntersectLight,
    PiIntersectSquareLight,
    PiIntersectThreeLight,
    PiIntersectionLight,
    PiInvoiceLight,
    PiIslandLight,
    PiJarLabelLight,
    PiJarLight,
    PiJeepLight,
    PiJoystickLight,
    PiKanbanLight,
    PiKeyLight,
    PiKeyReturnLight,
    PiKeyboardLight,
    PiKeyholeLight,
    PiKnifeLight,
    PiLadderLight,
    PiLadderSimpleLight,
    PiLampLight,
    PiLampPendantLight,
    PiLaptopLight,
    PiLassoLight,
    PiLastfmLogoLight,
    PiLayoutLight,
    PiLeafLight,
    PiLecternLight,
    PiLegoLight,
    PiLegoSmileyLight,
    PiLessThanLight,
    PiLessThanOrEqualLight,
    PiLetterCircleHLight,
    PiLetterCirclePLight,
    PiLetterCircleVLight,
    PiLifebuoyLight,
    PiLightbulbFilamentLight,
    PiLightbulbLight,
    PiLighthouseLight,
    PiLightningALight,
    PiLightningLight,
    PiLightningSlashLight,
    PiLineSegmentLight,
    PiLineSegmentsLight,
    PiLineVerticalLight,
    PiLinkBreakLight,
    PiLinkLight,
    PiLinkSimpleBreakLight,
    PiLinkSimpleHorizontalBreakLight,
    PiLinkSimpleHorizontalLight,
    PiLinkSimpleLight,
    PiLinkedinLogoLight,
    PiLinktreeLogoLight,
    PiLinuxLogoLight,
    PiListBulletsLight,
    PiListChecksLight,
    PiListDashesLight,
    PiListHeartLight,
    PiListLight,
    PiListMagnifyingGlassLight,
    PiListNumbersLight,
    PiListPlusLight,
    PiListStarLight,
    PiLockKeyLight,
    PiLockKeyOpenLight,
    PiLockLaminatedLight,
    PiLockLaminatedOpenLight,
    PiLockLight,
    PiLockOpenLight,
    PiLockSimpleLight,
    PiLockSimpleOpenLight,
    PiLockersLight,
    PiLogLight,
    PiMagicWandLight,
    PiMagnetLight,
    PiMagnetStraightLight,
    PiMagnifyingGlassLight,
    PiMagnifyingGlassMinusLight,
    PiMagnifyingGlassPlusLight,
    PiMailboxLight,
    PiMapPinAreaLight,
    PiMapPinLight,
    PiMapPinLineLight,
    PiMapPinPlusLight,
    PiMapPinSimpleAreaLight,
    PiMapPinSimpleLight,
    PiMapPinSimpleLineLight,
    PiMapTrifoldLight,
    PiMarkdownLogoLight,
    PiMarkerCircleLight,
    PiMartiniLight,
    PiMaskHappyLight,
    PiMaskSadLight,
    PiMastodonLogoLight,
    PiMathOperationsLight,
    PiMatrixLogoLight,
    PiMedalLight,
    PiMedalMilitaryLight,
    PiMediumLogoLight,
    PiMegaphoneLight,
    PiMegaphoneSimpleLight,
    PiMemberOfLight,
    PiMemoryLight,
    PiMessengerLogoLight,
    PiMetaLogoLight,
    PiMeteorLight,
    PiMetronomeLight,
    PiMicrophoneLight,
    PiMicrophoneSlashLight,
    PiMicrophoneStageLight,
    PiMicroscopeLight,
    PiMicrosoftExcelLogoLight,
    PiMicrosoftOutlookLogoLight,
    PiMicrosoftPowerpointLogoLight,
    PiMicrosoftTeamsLogoLight,
    PiMicrosoftWordLogoLight,
    PiMinusCircleLight,
    PiMinusLight,
    PiMinusSquareLight,
    PiMoneyLight,
    PiMoneyWavyLight,
    PiMonitorArrowUpLight,
    PiMonitorLight,
    PiMonitorPlayLight,
    PiMoonLight,
    PiMoonStarsLight,
    PiMopedFrontLight,
    PiMopedLight,
    PiMosqueLight,
    PiMotorcycleLight,
    PiMountainsLight,
    PiMouseLeftClickLight,
    PiMouseLight,
    PiMouseMiddleClickLight,
    PiMouseRightClickLight,
    PiMouseScrollLight,
    PiMouseSimpleLight,
    PiMusicNoteLight,
    PiMusicNoteSimpleLight,
    PiMusicNotesLight,
    PiMusicNotesMinusLight,
    PiMusicNotesPlusLight,
    PiMusicNotesSimpleLight,
    PiNavigationArrowLight,
    PiNeedleLight,
    PiNetworkLight,
    PiNetworkSlashLight,
    PiNetworkXLight,
    PiNewspaperClippingLight,
    PiNewspaperLight,
    PiNotEqualsLight,
    PiNotMemberOfLight,
    PiNotSubsetOfLight,
    PiNotSupersetOfLight,
    PiNotchesLight,
    PiNoteBlankLight,
    PiNoteLight,
    PiNotePencilLight,
    PiNotebookLight,
    PiNotepadLight,
    PiNotificationLight,
    PiNotionLogoLight,
    PiNuclearPlantLight,
    PiNumberCircleEightLight,
    PiNumberCircleFiveLight,
    PiNumberCircleFourLight,
    PiNumberCircleNineLight,
    PiNumberCircleOneLight,
    PiNumberCircleSevenLight,
    PiNumberCircleSixLight,
    PiNumberCircleThreeLight,
    PiNumberCircleTwoLight,
    PiNumberCircleZeroLight,
    PiNumberEightLight,
    PiNumberFiveLight,
    PiNumberFourLight,
    PiNumberNineLight,
    PiNumberOneLight,
    PiNumberSevenLight,
    PiNumberSixLight,
    PiNumberSquareEightLight,
    PiNumberSquareFiveLight,
    PiNumberSquareFourLight,
    PiNumberSquareNineLight,
    PiNumberSquareOneLight,
    PiNumberSquareSevenLight,
    PiNumberSquareSixLight,
    PiNumberSquareThreeLight,
    PiNumberSquareTwoLight,
    PiNumberSquareZeroLight,
    PiNumberThreeLight,
    PiNumberTwoLight,
    PiNumberZeroLight,
    PiNumpadLight,
    PiNutLight,
    PiNyTimesLogoLight,
    PiOctagonLight,
    PiOfficeChairLight,
    PiOnigiriLight,
    PiOpenAiLogoLight,
    PiOptionLight,
    PiOrangeLight,
    PiOrangeSliceLight,
    PiOvenLight,
    PiPackageLight,
    PiPaintBrushBroadLight,
    PiPaintBrushHouseholdLight,
    PiPaintBrushLight,
    PiPaintBucketLight,
    PiPaintRollerLight,
    PiPaletteLight,
    PiPanoramaLight,
    PiPantsLight,
    PiPaperPlaneLight,
    PiPaperPlaneRightLight,
    PiPaperPlaneTiltLight,
    PiPaperclipHorizontalLight,
    PiPaperclipLight,
    PiParachuteLight,
    PiParagraphLight,
    PiParallelogramLight,
    PiParkLight,
    PiPasswordLight,
    PiPathLight,
    PiPatreonLogoLight,
    PiPauseCircleLight,
    PiPauseLight,
    PiPawPrintLight,
    PiPaypalLogoLight,
    PiPeaceLight,
    PiPenLight,
    PiPenNibLight,
    PiPenNibStraightLight,
    PiPencilCircleLight,
    PiPencilLight,
    PiPencilLineLight,
    PiPencilRulerLight,
    PiPencilSimpleLight,
    PiPencilSimpleLineLight,
    PiPencilSimpleSlashLight,
    PiPencilSlashLight,
    PiPentagonLight,
    PiPentagramLight,
    PiPepperLight,
    PiPercentLight,
    PiPersonArmsSpreadLight,
    PiPersonLight,
    PiPersonSimpleBikeLight,
    PiPersonSimpleCircleLight,
    PiPersonSimpleHikeLight,
    PiPersonSimpleLight,
    PiPersonSimpleRunLight,
    PiPersonSimpleSkiLight,
    PiPersonSimpleSnowboardLight,
    PiPersonSimpleSwimLight,
    PiPersonSimpleTaiChiLight,
    PiPersonSimpleThrowLight,
    PiPersonSimpleWalkLight,
    PiPerspectiveLight,
    PiPhoneCallLight,
    PiPhoneDisconnectLight,
    PiPhoneIncomingLight,
    PiPhoneLight,
    PiPhoneListLight,
    PiPhoneOutgoingLight,
    PiPhonePauseLight,
    PiPhonePlusLight,
    PiPhoneSlashLight,
    PiPhoneTransferLight,
    PiPhoneXLight,
    PiPhosphorLogoLight,
    PiPiLight,
    PiPianoKeysLight,
    PiPicnicTableLight,
    PiPictureInPictureLight,
    PiPiggyBankLight,
    PiPillLight,
    PiPingPongLight,
    PiPintGlassLight,
    PiPinterestLogoLight,
    PiPinwheelLight,
    PiPipeLight,
    PiPipeWrenchLight,
    PiPixLogoLight,
    PiPizzaLight,
    PiPlaceholderLight,
    PiPlanetLight,
    PiPlantLight,
    PiPlayCircleLight,
    PiPlayLight,
    PiPlayPauseLight,
    PiPlaylistLight,
    PiPlugChargingLight,
    PiPlugLight,
    PiPlugsConnectedLight,
    PiPlugsLight,
    PiPlusCircleLight,
    PiPlusLight,
    PiPlusMinusLight,
    PiPlusSquareLight,
    PiPokerChipLight,
    PiPoliceCarLight,
    PiPolygonLight,
    PiPopcornLight,
    PiPopsicleLight,
    PiPottedPlantLight,
    PiPowerLight,
    PiPrescriptionLight,
    PiPresentationChartLight,
    PiPresentationLight,
    PiPrinterLight,
    PiProhibitInsetLight,
    PiProhibitLight,
    PiProjectorScreenChartLight,
    PiProjectorScreenLight,
    PiPulseLight,
    PiPushPinLight,
    PiPushPinSimpleLight,
    PiPushPinSimpleSlashLight,
    PiPushPinSlashLight,
    PiPuzzlePieceLight,
    PiQrCodeLight,
    PiQuestionLight,
    PiQuestionMarkLight,
    PiQueueLight,
    PiQuotesLight,
    PiRabbitLight,
    PiRacquetLight,
    PiRadicalLight,
    PiRadioButtonLight,
    PiRadioLight,
    PiRadioactiveLight,
    PiRainbowCloudLight,
    PiRainbowLight,
    PiRankingLight,
    PiReadCvLogoLight,
    PiReceiptLight,
    PiReceiptXLight,
    PiRecordLight,
    PiRectangleDashedLight,
    PiRectangleLight,
    PiRecycleLight,
    PiRedditLogoLight,
    PiRepeatLight,
    PiRepeatOnceLight,
    PiReplitLogoLight,
    PiResizeLight,
    PiRewindCircleLight,
    PiRewindLight,
    PiRoadHorizonLight,
    PiRobotLight,
    PiRocketLaunchLight,
    PiRocketLight,
    PiRowsLight,
    PiRowsPlusBottomLight,
    PiRowsPlusTopLight,
    PiRssLight,
    PiRssSimpleLight,
    PiRugLight,
    PiRulerLight,
    PiSailboatLight,
    PiScalesLight,
    PiScanLight,
    PiScanSmileyLight,
    PiScissorsLight,
    PiScooterLight,
    PiScreencastLight,
    PiScrewdriverLight,
    PiScribbleLight,
    PiScribbleLoopLight,
    PiScrollLight,
    PiSealCheckLight,
    PiSealLight,
    PiSealPercentLight,
    PiSealQuestionLight,
    PiSealWarningLight,
    PiSeatLight,
    PiSeatbeltLight,
    PiSecurityCameraLight,
    PiSelectionAllLight,
    PiSelectionBackgroundLight,
    PiSelectionForegroundLight,
    PiSelectionInverseLight,
    PiSelectionLight,
    PiSelectionPlusLight,
    PiSelectionSlashLight,
    PiShapesLight,
    PiShareFatLight,
    PiShareLight,
    PiShareNetworkLight,
    PiShieldCheckLight,
    PiShieldCheckeredLight,
    PiShieldChevronLight,
    PiShieldLight,
    PiShieldPlusLight,
    PiShieldSlashLight,
    PiShieldStarLight,
    PiShieldWarningLight,
    PiShippingContainerLight,
    PiShirtFoldedLight,
    PiShootingStarLight,
    PiShoppingBagLight,
    PiShoppingBagOpenLight,
    PiShoppingCartLight,
    PiShoppingCartSimpleLight,
    PiShovelLight,
    PiShowerLight,
    PiShrimpLight,
    PiShuffleAngularLight,
    PiShuffleLight,
    PiShuffleSimpleLight,
    PiSidebarLight,
    PiSidebarSimpleLight,
    PiSigmaLight,
    PiSignInLight,
    PiSignOutLight,
    PiSignatureLight,
    PiSignpostLight,
    PiSimCardLight,
    PiSirenLight,
    PiSketchLogoLight,
    PiSkipBackCircleLight,
    PiSkipBackLight,
    PiSkipForwardCircleLight,
    PiSkipForwardLight,
    PiSkullLight,
    PiSkypeLogoLight,
    PiSlackLogoLight,
    PiSlidersHorizontalLight,
    PiSlidersLight,
    PiSlideshowLight,
    PiSmileyAngryLight,
    PiSmileyBlankLight,
    PiSmileyLight,
    PiSmileyMehLight,
    PiSmileyMeltingLight,
    PiSmileyNervousLight,
    PiSmileySadLight,
    PiSmileyStickerLight,
    PiSmileyWinkLight,
    PiSmileyXEyesLight,
    PiSnapchatLogoLight,
    PiSneakerLight,
    PiSneakerMoveLight,
    PiSnowflakeLight,
    PiSoccerBallLight,
    PiSockLight,
    PiSolarPanelLight,
    PiSolarRoofLight,
    PiSortAscendingLight,
    PiSortDescendingLight,
    PiSoundcloudLogoLight,
    PiSpadeLight,
    PiSparkleLight,
    PiSpeakerHifiLight,
    PiSpeakerHighLight,
    PiSpeakerLowLight,
    PiSpeakerNoneLight,
    PiSpeakerSimpleHighLight,
    PiSpeakerSimpleLowLight,
    PiSpeakerSimpleNoneLight,
    PiSpeakerSimpleSlashLight,
    PiSpeakerSimpleXLight,
    PiSpeakerSlashLight,
    PiSpeakerXLight,
    PiSpeedometerLight,
    PiSphereLight,
    PiSpinnerBallLight,
    PiSpinnerGapLight,
    PiSpinnerLight,
    PiSpiralLight,
    PiSplitHorizontalLight,
    PiSplitVerticalLight,
    PiSpotifyLogoLight,
    PiSprayBottleLight,
    PiSquareHalfBottomLight,
    PiSquareHalfLight,
    PiSquareLight,
    PiSquareLogoLight,
    PiSquareSplitHorizontalLight,
    PiSquareSplitVerticalLight,
    PiSquaresFourLight,
    PiStackLight,
    PiStackMinusLight,
    PiStackOverflowLogoLight,
    PiStackPlusLight,
    PiStackSimpleLight,
    PiStairsLight,
    PiStampLight,
    PiStandardDefinitionLight,
    PiStarAndCrescentLight,
    PiStarFourLight,
    PiStarHalfLight,
    PiStarLight,
    PiStarOfDavidLight,
    PiSteamLogoLight,
    PiSteeringWheelLight,
    PiStepsLight,
    PiStethoscopeLight,
    PiStickerLight,
    PiStoolLight,
    PiStopCircleLight,
    PiStopLight,
    PiStorefrontLight,
    PiStrategyLight,
    PiStripeLogoLight,
    PiStudentLight,
    PiSubsetOfLight,
    PiSubsetProperOfLight,
    PiSubtitlesLight,
    PiSubtitlesSlashLight,
    PiSubtractLight,
    PiSubtractSquareLight,
    PiSubwayLight,
    PiSuitcaseLight,
    PiSuitcaseRollingLight,
    PiSuitcaseSimpleLight,
    PiSunDimLight,
    PiSunHorizonLight,
    PiSunLight,
    PiSunglassesLight,
    PiSupersetOfLight,
    PiSupersetProperOfLight,
    PiSwapLight,
    PiSwatchesLight,
    PiSwimmingPoolLight,
    PiSwordLight,
    PiSynagogueLight,
    PiSyringeLight,
    PiTShirtLight,
    PiTableLight,
    PiTabsLight,
    PiTagChevronLight,
    PiTagLight,
    PiTagSimpleLight,
    PiTargetLight,
    PiTaxiLight,
    PiTeaBagLight,
    PiTelegramLogoLight,
    PiTelevisionLight,
    PiTelevisionSimpleLight,
    PiTennisBallLight,
    PiTentLight,
    PiTerminalLight,
    PiTerminalWindowLight,
    PiTestTubeLight,
    PiTextAUnderlineLight,
    PiTextAaLight,
    PiTextAlignCenterLight,
    PiTextAlignJustifyLight,
    PiTextAlignLeftLight,
    PiTextAlignRightLight,
    PiTextBLight,
    PiTextColumnsLight,
    PiTextHFiveLight,
    PiTextHFourLight,
    PiTextHLight,
    PiTextHOneLight,
    PiTextHSixLight,
    PiTextHThreeLight,
    PiTextHTwoLight,
    PiTextIndentLight,
    PiTextItalicLight,
    PiTextOutdentLight,
    PiTextStrikethroughLight,
    PiTextSubscriptLight,
    PiTextSuperscriptLight,
    PiTextTLight,
    PiTextTSlashLight,
    PiTextUnderlineLight,
    PiTextboxLight,
    PiThermometerColdLight,
    PiThermometerHotLight,
    PiThermometerLight,
    PiThermometerSimpleLight,
    PiThreadsLogoLight,
    PiThreeDLight,
    PiThumbsDownLight,
    PiThumbsUpLight,
    PiTicketLight,
    PiTidalLogoLight,
    PiTiktokLogoLight,
    PiTildeLight,
    PiTimerLight,
    PiTipJarLight,
    PiTipiLight,
    PiTireLight,
    PiToggleLeftLight,
    PiToggleRightLight,
    PiToiletLight,
    PiToiletPaperLight,
    PiToolboxLight,
    PiToothLight,
    PiTornadoLight,
    PiToteLight,
    PiToteSimpleLight,
    PiTowelLight,
    PiTractorLight,
    PiTrademarkLight,
    PiTrademarkRegisteredLight,
    PiTrafficConeLight,
    PiTrafficSignLight,
    PiTrafficSignalLight,
    PiTrainLight,
    PiTrainRegionalLight,
    PiTrainSimpleLight,
    PiTramLight,
    PiTranslateLight,
    PiTrashLight,
    PiTrashSimpleLight,
    PiTrayArrowDownLight,
    PiTrayArrowUpLight,
    PiTrayLight,
    PiTreasureChestLight,
    PiTreeEvergreenLight,
    PiTreeLight,
    PiTreePalmLight,
    PiTreeStructureLight,
    PiTreeViewLight,
    PiTrendDownLight,
    PiTrendUpLight,
    PiTriangleDashedLight,
    PiTriangleLight,
    PiTrolleyLight,
    PiTrolleySuitcaseLight,
    PiTrophyLight,
    PiTruckLight,
    PiTruckTrailerLight,
    PiTumblrLogoLight,
    PiTwitchLogoLight,
    PiTwitterLogoLight,
    PiUmbrellaLight,
    PiUmbrellaSimpleLight,
    PiUnionLight,
    PiUniteLight,
    PiUniteSquareLight,
    PiUploadLight,
    PiUploadSimpleLight,
    PiUsbLight,
    PiUserCheckLight,
    PiUserCircleCheckLight,
    PiUserCircleDashedLight,
    PiUserCircleGearLight,
    PiUserCircleLight,
    PiUserCircleMinusLight,
    PiUserCirclePlusLight,
    PiUserFocusLight,
    PiUserGearLight,
    PiUserLight,
    PiUserListLight,
    PiUserMinusLight,
    PiUserPlusLight,
    PiUserRectangleLight,
    PiUserSoundLight,
    PiUserSquareLight,
    PiUserSwitchLight,
    PiUsersFourLight,
    PiUsersLight,
    PiUsersThreeLight,
    PiVanLight,
    PiVaultLight,
    PiVectorThreeLight,
    PiVectorTwoLight,
    PiVibrateLight,
    PiVideoCameraLight,
    PiVideoCameraSlashLight,
    PiVideoConferenceLight,
    PiVideoLight,
} from "react-icons/pi"

export function nameToReactIcon_pi_5(iconName: string): IconType | undefined {

    switch(iconName) {
        case "pi:PiCursorClickLight":
            return PiCursorClickLight;
        case "pi:PiCursorLight":
            return PiCursorLight;
        case "pi:PiCursorTextLight":
            return PiCursorTextLight;
        case "pi:PiCylinderLight":
            return PiCylinderLight;
        case "pi:PiDatabaseLight":
            return PiDatabaseLight;
        case "pi:PiDeskLight":
            return PiDeskLight;
        case "pi:PiDesktopLight":
            return PiDesktopLight;
        case "pi:PiDesktopTowerLight":
            return PiDesktopTowerLight;
        case "pi:PiDetectiveLight":
            return PiDetectiveLight;
        case "pi:PiDevToLogoLight":
            return PiDevToLogoLight;
        case "pi:PiDeviceMobileCameraLight":
            return PiDeviceMobileCameraLight;
        case "pi:PiDeviceMobileLight":
            return PiDeviceMobileLight;
        case "pi:PiDeviceMobileSlashLight":
            return PiDeviceMobileSlashLight;
        case "pi:PiDeviceMobileSpeakerLight":
            return PiDeviceMobileSpeakerLight;
        case "pi:PiDeviceRotateLight":
            return PiDeviceRotateLight;
        case "pi:PiDeviceTabletCameraLight":
            return PiDeviceTabletCameraLight;
        case "pi:PiDeviceTabletLight":
            return PiDeviceTabletLight;
        case "pi:PiDeviceTabletSpeakerLight":
            return PiDeviceTabletSpeakerLight;
        case "pi:PiDevicesLight":
            return PiDevicesLight;
        case "pi:PiDiamondLight":
            return PiDiamondLight;
        case "pi:PiDiamondsFourLight":
            return PiDiamondsFourLight;
        case "pi:PiDiceFiveLight":
            return PiDiceFiveLight;
        case "pi:PiDiceFourLight":
            return PiDiceFourLight;
        case "pi:PiDiceOneLight":
            return PiDiceOneLight;
        case "pi:PiDiceSixLight":
            return PiDiceSixLight;
        case "pi:PiDiceThreeLight":
            return PiDiceThreeLight;
        case "pi:PiDiceTwoLight":
            return PiDiceTwoLight;
        case "pi:PiDiscLight":
            return PiDiscLight;
        case "pi:PiDiscoBallLight":
            return PiDiscoBallLight;
        case "pi:PiDiscordLogoLight":
            return PiDiscordLogoLight;
        case "pi:PiDivideLight":
            return PiDivideLight;
        case "pi:PiDnaLight":
            return PiDnaLight;
        case "pi:PiDogLight":
            return PiDogLight;
        case "pi:PiDoorLight":
            return PiDoorLight;
        case "pi:PiDoorOpenLight":
            return PiDoorOpenLight;
        case "pi:PiDotLight":
            return PiDotLight;
        case "pi:PiDotOutlineLight":
            return PiDotOutlineLight;
        case "pi:PiDotsNineLight":
            return PiDotsNineLight;
        case "pi:PiDotsSixLight":
            return PiDotsSixLight;
        case "pi:PiDotsSixVerticalLight":
            return PiDotsSixVerticalLight;
        case "pi:PiDotsThreeCircleLight":
            return PiDotsThreeCircleLight;
        case "pi:PiDotsThreeCircleVerticalLight":
            return PiDotsThreeCircleVerticalLight;
        case "pi:PiDotsThreeLight":
            return PiDotsThreeLight;
        case "pi:PiDotsThreeOutlineLight":
            return PiDotsThreeOutlineLight;
        case "pi:PiDotsThreeOutlineVerticalLight":
            return PiDotsThreeOutlineVerticalLight;
        case "pi:PiDotsThreeVerticalLight":
            return PiDotsThreeVerticalLight;
        case "pi:PiDownloadLight":
            return PiDownloadLight;
        case "pi:PiDownloadSimpleLight":
            return PiDownloadSimpleLight;
        case "pi:PiDressLight":
            return PiDressLight;
        case "pi:PiDresserLight":
            return PiDresserLight;
        case "pi:PiDribbbleLogoLight":
            return PiDribbbleLogoLight;
        case "pi:PiDroneLight":
            return PiDroneLight;
        case "pi:PiDropHalfBottomLight":
            return PiDropHalfBottomLight;
        case "pi:PiDropHalfLight":
            return PiDropHalfLight;
        case "pi:PiDropLight":
            return PiDropLight;
        case "pi:PiDropSimpleLight":
            return PiDropSimpleLight;
        case "pi:PiDropSlashLight":
            return PiDropSlashLight;
        case "pi:PiDropboxLogoLight":
            return PiDropboxLogoLight;
        case "pi:PiEarLight":
            return PiEarLight;
        case "pi:PiEarSlashLight":
            return PiEarSlashLight;
        case "pi:PiEggCrackLight":
            return PiEggCrackLight;
        case "pi:PiEggLight":
            return PiEggLight;
        case "pi:PiEjectLight":
            return PiEjectLight;
        case "pi:PiEjectSimpleLight":
            return PiEjectSimpleLight;
        case "pi:PiElevatorLight":
            return PiElevatorLight;
        case "pi:PiEmptyLight":
            return PiEmptyLight;
        case "pi:PiEngineLight":
            return PiEngineLight;
        case "pi:PiEnvelopeLight":
            return PiEnvelopeLight;
        case "pi:PiEnvelopeOpenLight":
            return PiEnvelopeOpenLight;
        case "pi:PiEnvelopeSimpleLight":
            return PiEnvelopeSimpleLight;
        case "pi:PiEnvelopeSimpleOpenLight":
            return PiEnvelopeSimpleOpenLight;
        case "pi:PiEqualizerLight":
            return PiEqualizerLight;
        case "pi:PiEqualsLight":
            return PiEqualsLight;
        case "pi:PiEraserLight":
            return PiEraserLight;
        case "pi:PiEscalatorDownLight":
            return PiEscalatorDownLight;
        case "pi:PiEscalatorUpLight":
            return PiEscalatorUpLight;
        case "pi:PiExamLight":
            return PiExamLight;
        case "pi:PiExclamationMarkLight":
            return PiExclamationMarkLight;
        case "pi:PiExcludeLight":
            return PiExcludeLight;
        case "pi:PiExcludeSquareLight":
            return PiExcludeSquareLight;
        case "pi:PiExportLight":
            return PiExportLight;
        case "pi:PiEyeClosedLight":
            return PiEyeClosedLight;
        case "pi:PiEyeLight":
            return PiEyeLight;
        case "pi:PiEyeSlashLight":
            return PiEyeSlashLight;
        case "pi:PiEyedropperLight":
            return PiEyedropperLight;
        case "pi:PiEyedropperSampleLight":
            return PiEyedropperSampleLight;
        case "pi:PiEyeglassesLight":
            return PiEyeglassesLight;
        case "pi:PiEyesLight":
            return PiEyesLight;
        case "pi:PiFaceMaskLight":
            return PiFaceMaskLight;
        case "pi:PiFacebookLogoLight":
            return PiFacebookLogoLight;
        case "pi:PiFactoryLight":
            return PiFactoryLight;
        case "pi:PiFadersHorizontalLight":
            return PiFadersHorizontalLight;
        case "pi:PiFadersLight":
            return PiFadersLight;
        case "pi:PiFalloutShelterLight":
            return PiFalloutShelterLight;
        case "pi:PiFanLight":
            return PiFanLight;
        case "pi:PiFarmLight":
            return PiFarmLight;
        case "pi:PiFastForwardCircleLight":
            return PiFastForwardCircleLight;
        case "pi:PiFastForwardLight":
            return PiFastForwardLight;
        case "pi:PiFeatherLight":
            return PiFeatherLight;
        case "pi:PiFediverseLogoLight":
            return PiFediverseLogoLight;
        case "pi:PiFigmaLogoLight":
            return PiFigmaLogoLight;
        case "pi:PiFileArchiveLight":
            return PiFileArchiveLight;
        case "pi:PiFileArrowDownLight":
            return PiFileArrowDownLight;
        case "pi:PiFileArrowUpLight":
            return PiFileArrowUpLight;
        case "pi:PiFileAudioLight":
            return PiFileAudioLight;
        case "pi:PiFileCLight":
            return PiFileCLight;
        case "pi:PiFileCSharpLight":
            return PiFileCSharpLight;
        case "pi:PiFileCloudLight":
            return PiFileCloudLight;
        case "pi:PiFileCodeLight":
            return PiFileCodeLight;
        case "pi:PiFileCppLight":
            return PiFileCppLight;
        case "pi:PiFileCssLight":
            return PiFileCssLight;
        case "pi:PiFileCsvLight":
            return PiFileCsvLight;
        case "pi:PiFileDashedLight":
            return PiFileDashedLight;
        case "pi:PiFileDocLight":
            return PiFileDocLight;
        case "pi:PiFileHtmlLight":
            return PiFileHtmlLight;
        case "pi:PiFileImageLight":
            return PiFileImageLight;
        case "pi:PiFileIniLight":
            return PiFileIniLight;
        case "pi:PiFileJpgLight":
            return PiFileJpgLight;
        case "pi:PiFileJsLight":
            return PiFileJsLight;
        case "pi:PiFileJsxLight":
            return PiFileJsxLight;
        case "pi:PiFileLight":
            return PiFileLight;
        case "pi:PiFileLockLight":
            return PiFileLockLight;
        case "pi:PiFileMagnifyingGlassLight":
            return PiFileMagnifyingGlassLight;
        case "pi:PiFileMdLight":
            return PiFileMdLight;
        case "pi:PiFileMinusLight":
            return PiFileMinusLight;
        case "pi:PiFilePdfLight":
            return PiFilePdfLight;
        case "pi:PiFilePlusLight":
            return PiFilePlusLight;
        case "pi:PiFilePngLight":
            return PiFilePngLight;
        case "pi:PiFilePptLight":
            return PiFilePptLight;
        case "pi:PiFilePyLight":
            return PiFilePyLight;
        case "pi:PiFileRsLight":
            return PiFileRsLight;
        case "pi:PiFileSqlLight":
            return PiFileSqlLight;
        case "pi:PiFileSvgLight":
            return PiFileSvgLight;
        case "pi:PiFileTextLight":
            return PiFileTextLight;
        case "pi:PiFileTsLight":
            return PiFileTsLight;
        case "pi:PiFileTsxLight":
            return PiFileTsxLight;
        case "pi:PiFileTxtLight":
            return PiFileTxtLight;
        case "pi:PiFileVideoLight":
            return PiFileVideoLight;
        case "pi:PiFileVueLight":
            return PiFileVueLight;
        case "pi:PiFileXLight":
            return PiFileXLight;
        case "pi:PiFileXlsLight":
            return PiFileXlsLight;
        case "pi:PiFileZipLight":
            return PiFileZipLight;
        case "pi:PiFilesLight":
            return PiFilesLight;
        case "pi:PiFilmReelLight":
            return PiFilmReelLight;
        case "pi:PiFilmScriptLight":
            return PiFilmScriptLight;
        case "pi:PiFilmSlateLight":
            return PiFilmSlateLight;
        case "pi:PiFilmStripLight":
            return PiFilmStripLight;
        case "pi:PiFingerprintLight":
            return PiFingerprintLight;
        case "pi:PiFingerprintSimpleLight":
            return PiFingerprintSimpleLight;
        case "pi:PiFinnTheHumanLight":
            return PiFinnTheHumanLight;
        case "pi:PiFireExtinguisherLight":
            return PiFireExtinguisherLight;
        case "pi:PiFireLight":
            return PiFireLight;
        case "pi:PiFireSimpleLight":
            return PiFireSimpleLight;
        case "pi:PiFireTruckLight":
            return PiFireTruckLight;
        case "pi:PiFirstAidKitLight":
            return PiFirstAidKitLight;
        case "pi:PiFirstAidLight":
            return PiFirstAidLight;
        case "pi:PiFishLight":
            return PiFishLight;
        case "pi:PiFishSimpleLight":
            return PiFishSimpleLight;
        case "pi:PiFlagBannerFoldLight":
            return PiFlagBannerFoldLight;
        case "pi:PiFlagBannerLight":
            return PiFlagBannerLight;
        case "pi:PiFlagCheckeredLight":
            return PiFlagCheckeredLight;
        case "pi:PiFlagLight":
            return PiFlagLight;
        case "pi:PiFlagPennantLight":
            return PiFlagPennantLight;
        case "pi:PiFlameLight":
            return PiFlameLight;
        case "pi:PiFlashlightLight":
            return PiFlashlightLight;
        case "pi:PiFlaskLight":
            return PiFlaskLight;
        case "pi:PiFlipHorizontalLight":
            return PiFlipHorizontalLight;
        case "pi:PiFlipVerticalLight":
            return PiFlipVerticalLight;
        case "pi:PiFloppyDiskBackLight":
            return PiFloppyDiskBackLight;
        case "pi:PiFloppyDiskLight":
            return PiFloppyDiskLight;
        case "pi:PiFlowArrowLight":
            return PiFlowArrowLight;
        case "pi:PiFlowerLight":
            return PiFlowerLight;
        case "pi:PiFlowerLotusLight":
            return PiFlowerLotusLight;
        case "pi:PiFlowerTulipLight":
            return PiFlowerTulipLight;
        case "pi:PiFlyingSaucerLight":
            return PiFlyingSaucerLight;
        case "pi:PiFolderDashedLight":
            return PiFolderDashedLight;
        case "pi:PiFolderLight":
            return PiFolderLight;
        case "pi:PiFolderLockLight":
            return PiFolderLockLight;
        case "pi:PiFolderMinusLight":
            return PiFolderMinusLight;
        case "pi:PiFolderOpenLight":
            return PiFolderOpenLight;
        case "pi:PiFolderPlusLight":
            return PiFolderPlusLight;
        case "pi:PiFolderSimpleDashedLight":
            return PiFolderSimpleDashedLight;
        case "pi:PiFolderSimpleLight":
            return PiFolderSimpleLight;
        case "pi:PiFolderSimpleLockLight":
            return PiFolderSimpleLockLight;
        case "pi:PiFolderSimpleMinusLight":
            return PiFolderSimpleMinusLight;
        case "pi:PiFolderSimplePlusLight":
            return PiFolderSimplePlusLight;
        case "pi:PiFolderSimpleStarLight":
            return PiFolderSimpleStarLight;
        case "pi:PiFolderSimpleUserLight":
            return PiFolderSimpleUserLight;
        case "pi:PiFolderStarLight":
            return PiFolderStarLight;
        case "pi:PiFolderUserLight":
            return PiFolderUserLight;
        case "pi:PiFoldersLight":
            return PiFoldersLight;
        case "pi:PiFootballHelmetLight":
            return PiFootballHelmetLight;
        case "pi:PiFootballLight":
            return PiFootballLight;
        case "pi:PiFootprintsLight":
            return PiFootprintsLight;
        case "pi:PiForkKnifeLight":
            return PiForkKnifeLight;
        case "pi:PiFourKLight":
            return PiFourKLight;
        case "pi:PiFrameCornersLight":
            return PiFrameCornersLight;
        case "pi:PiFramerLogoLight":
            return PiFramerLogoLight;
        case "pi:PiFunctionLight":
            return PiFunctionLight;
        case "pi:PiFunnelLight":
            return PiFunnelLight;
        case "pi:PiFunnelSimpleLight":
            return PiFunnelSimpleLight;
        case "pi:PiFunnelSimpleXLight":
            return PiFunnelSimpleXLight;
        case "pi:PiFunnelXLight":
            return PiFunnelXLight;
        case "pi:PiGameControllerLight":
            return PiGameControllerLight;
        case "pi:PiGarageLight":
            return PiGarageLight;
        case "pi:PiGasCanLight":
            return PiGasCanLight;
        case "pi:PiGasPumpLight":
            return PiGasPumpLight;
        case "pi:PiGaugeLight":
            return PiGaugeLight;
        case "pi:PiGavelLight":
            return PiGavelLight;
        case "pi:PiGearFineLight":
            return PiGearFineLight;
        case "pi:PiGearLight":
            return PiGearLight;
        case "pi:PiGearSixLight":
            return PiGearSixLight;
        case "pi:PiGenderFemaleLight":
            return PiGenderFemaleLight;
        case "pi:PiGenderIntersexLight":
            return PiGenderIntersexLight;
        case "pi:PiGenderMaleLight":
            return PiGenderMaleLight;
        case "pi:PiGenderNeuterLight":
            return PiGenderNeuterLight;
        case "pi:PiGenderNonbinaryLight":
            return PiGenderNonbinaryLight;
        case "pi:PiGenderTransgenderLight":
            return PiGenderTransgenderLight;
        case "pi:PiGhostLight":
            return PiGhostLight;
        case "pi:PiGifLight":
            return PiGifLight;
        case "pi:PiGiftLight":
            return PiGiftLight;
        case "pi:PiGitBranchLight":
            return PiGitBranchLight;
        case "pi:PiGitCommitLight":
            return PiGitCommitLight;
        case "pi:PiGitDiffLight":
            return PiGitDiffLight;
        case "pi:PiGitForkLight":
            return PiGitForkLight;
        case "pi:PiGitMergeLight":
            return PiGitMergeLight;
        case "pi:PiGitPullRequestLight":
            return PiGitPullRequestLight;
        case "pi:PiGithubLogoLight":
            return PiGithubLogoLight;
        case "pi:PiGitlabLogoLight":
            return PiGitlabLogoLight;
        case "pi:PiGitlabLogoSimpleLight":
            return PiGitlabLogoSimpleLight;
        case "pi:PiGlobeHemisphereEastLight":
            return PiGlobeHemisphereEastLight;
        case "pi:PiGlobeHemisphereWestLight":
            return PiGlobeHemisphereWestLight;
        case "pi:PiGlobeLight":
            return PiGlobeLight;
        case "pi:PiGlobeSimpleLight":
            return PiGlobeSimpleLight;
        case "pi:PiGlobeSimpleXLight":
            return PiGlobeSimpleXLight;
        case "pi:PiGlobeStandLight":
            return PiGlobeStandLight;
        case "pi:PiGlobeXLight":
            return PiGlobeXLight;
        case "pi:PiGogglesLight":
            return PiGogglesLight;
        case "pi:PiGolfLight":
            return PiGolfLight;
        case "pi:PiGoodreadsLogoLight":
            return PiGoodreadsLogoLight;
        case "pi:PiGoogleCardboardLogoLight":
            return PiGoogleCardboardLogoLight;
        case "pi:PiGoogleChromeLogoLight":
            return PiGoogleChromeLogoLight;
        case "pi:PiGoogleDriveLogoLight":
            return PiGoogleDriveLogoLight;
        case "pi:PiGoogleLogoLight":
            return PiGoogleLogoLight;
        case "pi:PiGooglePhotosLogoLight":
            return PiGooglePhotosLogoLight;
        case "pi:PiGooglePlayLogoLight":
            return PiGooglePlayLogoLight;
        case "pi:PiGooglePodcastsLogoLight":
            return PiGooglePodcastsLogoLight;
        case "pi:PiGpsFixLight":
            return PiGpsFixLight;
        case "pi:PiGpsLight":
            return PiGpsLight;
        case "pi:PiGpsSlashLight":
            return PiGpsSlashLight;
        case "pi:PiGradientLight":
            return PiGradientLight;
        case "pi:PiGraduationCapLight":
            return PiGraduationCapLight;
        case "pi:PiGrainsLight":
            return PiGrainsLight;
        case "pi:PiGrainsSlashLight":
            return PiGrainsSlashLight;
        case "pi:PiGraphLight":
            return PiGraphLight;
        case "pi:PiGraphicsCardLight":
            return PiGraphicsCardLight;
        case "pi:PiGreaterThanLight":
            return PiGreaterThanLight;
        case "pi:PiGreaterThanOrEqualLight":
            return PiGreaterThanOrEqualLight;
        case "pi:PiGridFourLight":
            return PiGridFourLight;
        case "pi:PiGridNineLight":
            return PiGridNineLight;
        case "pi:PiGuitarLight":
            return PiGuitarLight;
        case "pi:PiHairDryerLight":
            return PiHairDryerLight;
        case "pi:PiHamburgerLight":
            return PiHamburgerLight;
        case "pi:PiHammerLight":
            return PiHammerLight;
        case "pi:PiHandArrowDownLight":
            return PiHandArrowDownLight;
        case "pi:PiHandArrowUpLight":
            return PiHandArrowUpLight;
        case "pi:PiHandCoinsLight":
            return PiHandCoinsLight;
        case "pi:PiHandDepositLight":
            return PiHandDepositLight;
        case "pi:PiHandEyeLight":
            return PiHandEyeLight;
        case "pi:PiHandFistLight":
            return PiHandFistLight;
        case "pi:PiHandGrabbingLight":
            return PiHandGrabbingLight;
        case "pi:PiHandHeartLight":
            return PiHandHeartLight;
        case "pi:PiHandLight":
            return PiHandLight;
        case "pi:PiHandPalmLight":
            return PiHandPalmLight;
        case "pi:PiHandPeaceLight":
            return PiHandPeaceLight;
        case "pi:PiHandPointingLight":
            return PiHandPointingLight;
        case "pi:PiHandSoapLight":
            return PiHandSoapLight;
        case "pi:PiHandSwipeLeftLight":
            return PiHandSwipeLeftLight;
        case "pi:PiHandSwipeRightLight":
            return PiHandSwipeRightLight;
        case "pi:PiHandTapLight":
            return PiHandTapLight;
        case "pi:PiHandWavingLight":
            return PiHandWavingLight;
        case "pi:PiHandWithdrawLight":
            return PiHandWithdrawLight;
        case "pi:PiHandbagLight":
            return PiHandbagLight;
        case "pi:PiHandbagSimpleLight":
            return PiHandbagSimpleLight;
        case "pi:PiHandsClappingLight":
            return PiHandsClappingLight;
        case "pi:PiHandsPrayingLight":
            return PiHandsPrayingLight;
        case "pi:PiHandshakeLight":
            return PiHandshakeLight;
        case "pi:PiHardDriveLight":
            return PiHardDriveLight;
        case "pi:PiHardDrivesLight":
            return PiHardDrivesLight;
        case "pi:PiHardHatLight":
            return PiHardHatLight;
        case "pi:PiHashLight":
            return PiHashLight;
        case "pi:PiHashStraightLight":
            return PiHashStraightLight;
        case "pi:PiHeadCircuitLight":
            return PiHeadCircuitLight;
        case "pi:PiHeadlightsLight":
            return PiHeadlightsLight;
        case "pi:PiHeadphonesLight":
            return PiHeadphonesLight;
        case "pi:PiHeadsetLight":
            return PiHeadsetLight;
        case "pi:PiHeartBreakLight":
            return PiHeartBreakLight;
        case "pi:PiHeartHalfLight":
            return PiHeartHalfLight;
        case "pi:PiHeartLight":
            return PiHeartLight;
        case "pi:PiHeartStraightBreakLight":
            return PiHeartStraightBreakLight;
        case "pi:PiHeartStraightLight":
            return PiHeartStraightLight;
        case "pi:PiHeartbeatLight":
            return PiHeartbeatLight;
        case "pi:PiHexagonLight":
            return PiHexagonLight;
        case "pi:PiHighDefinitionLight":
            return PiHighDefinitionLight;
        case "pi:PiHighHeelLight":
            return PiHighHeelLight;
        case "pi:PiHighlighterCircleLight":
            return PiHighlighterCircleLight;
        case "pi:PiHighlighterLight":
            return PiHighlighterLight;
        case "pi:PiHockeyLight":
            return PiHockeyLight;
        case "pi:PiHoodieLight":
            return PiHoodieLight;
        case "pi:PiHorseLight":
            return PiHorseLight;
        case "pi:PiHospitalLight":
            return PiHospitalLight;
        case "pi:PiHourglassHighLight":
            return PiHourglassHighLight;
        case "pi:PiHourglassLight":
            return PiHourglassLight;
        case "pi:PiHourglassLowLight":
            return PiHourglassLowLight;
        case "pi:PiHourglassMediumLight":
            return PiHourglassMediumLight;
        case "pi:PiHourglassSimpleHighLight":
            return PiHourglassSimpleHighLight;
        case "pi:PiHourglassSimpleLight":
            return PiHourglassSimpleLight;
        case "pi:PiHourglassSimpleLowLight":
            return PiHourglassSimpleLowLight;
        case "pi:PiHourglassSimpleMediumLight":
            return PiHourglassSimpleMediumLight;
        case "pi:PiHouseLight":
            return PiHouseLight;
        case "pi:PiHouseLineLight":
            return PiHouseLineLight;
        case "pi:PiHouseSimpleLight":
            return PiHouseSimpleLight;
        case "pi:PiHurricaneLight":
            return PiHurricaneLight;
        case "pi:PiIceCreamLight":
            return PiIceCreamLight;
        case "pi:PiIdentificationBadgeLight":
            return PiIdentificationBadgeLight;
        case "pi:PiIdentificationCardLight":
            return PiIdentificationCardLight;
        case "pi:PiImageBrokenLight":
            return PiImageBrokenLight;
        case "pi:PiImageLight":
            return PiImageLight;
        case "pi:PiImageSquareLight":
            return PiImageSquareLight;
        case "pi:PiImagesLight":
            return PiImagesLight;
        case "pi:PiImagesSquareLight":
            return PiImagesSquareLight;
        case "pi:PiInfinityLight":
            return PiInfinityLight;
        case "pi:PiInfoLight":
            return PiInfoLight;
        case "pi:PiInstagramLogoLight":
            return PiInstagramLogoLight;
        case "pi:PiIntersectLight":
            return PiIntersectLight;
        case "pi:PiIntersectSquareLight":
            return PiIntersectSquareLight;
        case "pi:PiIntersectThreeLight":
            return PiIntersectThreeLight;
        case "pi:PiIntersectionLight":
            return PiIntersectionLight;
        case "pi:PiInvoiceLight":
            return PiInvoiceLight;
        case "pi:PiIslandLight":
            return PiIslandLight;
        case "pi:PiJarLabelLight":
            return PiJarLabelLight;
        case "pi:PiJarLight":
            return PiJarLight;
        case "pi:PiJeepLight":
            return PiJeepLight;
        case "pi:PiJoystickLight":
            return PiJoystickLight;
        case "pi:PiKanbanLight":
            return PiKanbanLight;
        case "pi:PiKeyLight":
            return PiKeyLight;
        case "pi:PiKeyReturnLight":
            return PiKeyReturnLight;
        case "pi:PiKeyboardLight":
            return PiKeyboardLight;
        case "pi:PiKeyholeLight":
            return PiKeyholeLight;
        case "pi:PiKnifeLight":
            return PiKnifeLight;
        case "pi:PiLadderLight":
            return PiLadderLight;
        case "pi:PiLadderSimpleLight":
            return PiLadderSimpleLight;
        case "pi:PiLampLight":
            return PiLampLight;
        case "pi:PiLampPendantLight":
            return PiLampPendantLight;
        case "pi:PiLaptopLight":
            return PiLaptopLight;
        case "pi:PiLassoLight":
            return PiLassoLight;
        case "pi:PiLastfmLogoLight":
            return PiLastfmLogoLight;
        case "pi:PiLayoutLight":
            return PiLayoutLight;
        case "pi:PiLeafLight":
            return PiLeafLight;
        case "pi:PiLecternLight":
            return PiLecternLight;
        case "pi:PiLegoLight":
            return PiLegoLight;
        case "pi:PiLegoSmileyLight":
            return PiLegoSmileyLight;
        case "pi:PiLessThanLight":
            return PiLessThanLight;
        case "pi:PiLessThanOrEqualLight":
            return PiLessThanOrEqualLight;
        case "pi:PiLetterCircleHLight":
            return PiLetterCircleHLight;
        case "pi:PiLetterCirclePLight":
            return PiLetterCirclePLight;
        case "pi:PiLetterCircleVLight":
            return PiLetterCircleVLight;
        case "pi:PiLifebuoyLight":
            return PiLifebuoyLight;
        case "pi:PiLightbulbFilamentLight":
            return PiLightbulbFilamentLight;
        case "pi:PiLightbulbLight":
            return PiLightbulbLight;
        case "pi:PiLighthouseLight":
            return PiLighthouseLight;
        case "pi:PiLightningALight":
            return PiLightningALight;
        case "pi:PiLightningLight":
            return PiLightningLight;
        case "pi:PiLightningSlashLight":
            return PiLightningSlashLight;
        case "pi:PiLineSegmentLight":
            return PiLineSegmentLight;
        case "pi:PiLineSegmentsLight":
            return PiLineSegmentsLight;
        case "pi:PiLineVerticalLight":
            return PiLineVerticalLight;
        case "pi:PiLinkBreakLight":
            return PiLinkBreakLight;
        case "pi:PiLinkLight":
            return PiLinkLight;
        case "pi:PiLinkSimpleBreakLight":
            return PiLinkSimpleBreakLight;
        case "pi:PiLinkSimpleHorizontalBreakLight":
            return PiLinkSimpleHorizontalBreakLight;
        case "pi:PiLinkSimpleHorizontalLight":
            return PiLinkSimpleHorizontalLight;
        case "pi:PiLinkSimpleLight":
            return PiLinkSimpleLight;
        case "pi:PiLinkedinLogoLight":
            return PiLinkedinLogoLight;
        case "pi:PiLinktreeLogoLight":
            return PiLinktreeLogoLight;
        case "pi:PiLinuxLogoLight":
            return PiLinuxLogoLight;
        case "pi:PiListBulletsLight":
            return PiListBulletsLight;
        case "pi:PiListChecksLight":
            return PiListChecksLight;
        case "pi:PiListDashesLight":
            return PiListDashesLight;
        case "pi:PiListHeartLight":
            return PiListHeartLight;
        case "pi:PiListLight":
            return PiListLight;
        case "pi:PiListMagnifyingGlassLight":
            return PiListMagnifyingGlassLight;
        case "pi:PiListNumbersLight":
            return PiListNumbersLight;
        case "pi:PiListPlusLight":
            return PiListPlusLight;
        case "pi:PiListStarLight":
            return PiListStarLight;
        case "pi:PiLockKeyLight":
            return PiLockKeyLight;
        case "pi:PiLockKeyOpenLight":
            return PiLockKeyOpenLight;
        case "pi:PiLockLaminatedLight":
            return PiLockLaminatedLight;
        case "pi:PiLockLaminatedOpenLight":
            return PiLockLaminatedOpenLight;
        case "pi:PiLockLight":
            return PiLockLight;
        case "pi:PiLockOpenLight":
            return PiLockOpenLight;
        case "pi:PiLockSimpleLight":
            return PiLockSimpleLight;
        case "pi:PiLockSimpleOpenLight":
            return PiLockSimpleOpenLight;
        case "pi:PiLockersLight":
            return PiLockersLight;
        case "pi:PiLogLight":
            return PiLogLight;
        case "pi:PiMagicWandLight":
            return PiMagicWandLight;
        case "pi:PiMagnetLight":
            return PiMagnetLight;
        case "pi:PiMagnetStraightLight":
            return PiMagnetStraightLight;
        case "pi:PiMagnifyingGlassLight":
            return PiMagnifyingGlassLight;
        case "pi:PiMagnifyingGlassMinusLight":
            return PiMagnifyingGlassMinusLight;
        case "pi:PiMagnifyingGlassPlusLight":
            return PiMagnifyingGlassPlusLight;
        case "pi:PiMailboxLight":
            return PiMailboxLight;
        case "pi:PiMapPinAreaLight":
            return PiMapPinAreaLight;
        case "pi:PiMapPinLight":
            return PiMapPinLight;
        case "pi:PiMapPinLineLight":
            return PiMapPinLineLight;
        case "pi:PiMapPinPlusLight":
            return PiMapPinPlusLight;
        case "pi:PiMapPinSimpleAreaLight":
            return PiMapPinSimpleAreaLight;
        case "pi:PiMapPinSimpleLight":
            return PiMapPinSimpleLight;
        case "pi:PiMapPinSimpleLineLight":
            return PiMapPinSimpleLineLight;
        case "pi:PiMapTrifoldLight":
            return PiMapTrifoldLight;
        case "pi:PiMarkdownLogoLight":
            return PiMarkdownLogoLight;
        case "pi:PiMarkerCircleLight":
            return PiMarkerCircleLight;
        case "pi:PiMartiniLight":
            return PiMartiniLight;
        case "pi:PiMaskHappyLight":
            return PiMaskHappyLight;
        case "pi:PiMaskSadLight":
            return PiMaskSadLight;
        case "pi:PiMastodonLogoLight":
            return PiMastodonLogoLight;
        case "pi:PiMathOperationsLight":
            return PiMathOperationsLight;
        case "pi:PiMatrixLogoLight":
            return PiMatrixLogoLight;
        case "pi:PiMedalLight":
            return PiMedalLight;
        case "pi:PiMedalMilitaryLight":
            return PiMedalMilitaryLight;
        case "pi:PiMediumLogoLight":
            return PiMediumLogoLight;
        case "pi:PiMegaphoneLight":
            return PiMegaphoneLight;
        case "pi:PiMegaphoneSimpleLight":
            return PiMegaphoneSimpleLight;
        case "pi:PiMemberOfLight":
            return PiMemberOfLight;
        case "pi:PiMemoryLight":
            return PiMemoryLight;
        case "pi:PiMessengerLogoLight":
            return PiMessengerLogoLight;
        case "pi:PiMetaLogoLight":
            return PiMetaLogoLight;
        case "pi:PiMeteorLight":
            return PiMeteorLight;
        case "pi:PiMetronomeLight":
            return PiMetronomeLight;
        case "pi:PiMicrophoneLight":
            return PiMicrophoneLight;
        case "pi:PiMicrophoneSlashLight":
            return PiMicrophoneSlashLight;
        case "pi:PiMicrophoneStageLight":
            return PiMicrophoneStageLight;
        case "pi:PiMicroscopeLight":
            return PiMicroscopeLight;
        case "pi:PiMicrosoftExcelLogoLight":
            return PiMicrosoftExcelLogoLight;
        case "pi:PiMicrosoftOutlookLogoLight":
            return PiMicrosoftOutlookLogoLight;
        case "pi:PiMicrosoftPowerpointLogoLight":
            return PiMicrosoftPowerpointLogoLight;
        case "pi:PiMicrosoftTeamsLogoLight":
            return PiMicrosoftTeamsLogoLight;
        case "pi:PiMicrosoftWordLogoLight":
            return PiMicrosoftWordLogoLight;
        case "pi:PiMinusCircleLight":
            return PiMinusCircleLight;
        case "pi:PiMinusLight":
            return PiMinusLight;
        case "pi:PiMinusSquareLight":
            return PiMinusSquareLight;
        case "pi:PiMoneyLight":
            return PiMoneyLight;
        case "pi:PiMoneyWavyLight":
            return PiMoneyWavyLight;
        case "pi:PiMonitorArrowUpLight":
            return PiMonitorArrowUpLight;
        case "pi:PiMonitorLight":
            return PiMonitorLight;
        case "pi:PiMonitorPlayLight":
            return PiMonitorPlayLight;
        case "pi:PiMoonLight":
            return PiMoonLight;
        case "pi:PiMoonStarsLight":
            return PiMoonStarsLight;
        case "pi:PiMopedFrontLight":
            return PiMopedFrontLight;
        case "pi:PiMopedLight":
            return PiMopedLight;
        case "pi:PiMosqueLight":
            return PiMosqueLight;
        case "pi:PiMotorcycleLight":
            return PiMotorcycleLight;
        case "pi:PiMountainsLight":
            return PiMountainsLight;
        case "pi:PiMouseLeftClickLight":
            return PiMouseLeftClickLight;
        case "pi:PiMouseLight":
            return PiMouseLight;
        case "pi:PiMouseMiddleClickLight":
            return PiMouseMiddleClickLight;
        case "pi:PiMouseRightClickLight":
            return PiMouseRightClickLight;
        case "pi:PiMouseScrollLight":
            return PiMouseScrollLight;
        case "pi:PiMouseSimpleLight":
            return PiMouseSimpleLight;
        case "pi:PiMusicNoteLight":
            return PiMusicNoteLight;
        case "pi:PiMusicNoteSimpleLight":
            return PiMusicNoteSimpleLight;
        case "pi:PiMusicNotesLight":
            return PiMusicNotesLight;
        case "pi:PiMusicNotesMinusLight":
            return PiMusicNotesMinusLight;
        case "pi:PiMusicNotesPlusLight":
            return PiMusicNotesPlusLight;
        case "pi:PiMusicNotesSimpleLight":
            return PiMusicNotesSimpleLight;
        case "pi:PiNavigationArrowLight":
            return PiNavigationArrowLight;
        case "pi:PiNeedleLight":
            return PiNeedleLight;
        case "pi:PiNetworkLight":
            return PiNetworkLight;
        case "pi:PiNetworkSlashLight":
            return PiNetworkSlashLight;
        case "pi:PiNetworkXLight":
            return PiNetworkXLight;
        case "pi:PiNewspaperClippingLight":
            return PiNewspaperClippingLight;
        case "pi:PiNewspaperLight":
            return PiNewspaperLight;
        case "pi:PiNotEqualsLight":
            return PiNotEqualsLight;
        case "pi:PiNotMemberOfLight":
            return PiNotMemberOfLight;
        case "pi:PiNotSubsetOfLight":
            return PiNotSubsetOfLight;
        case "pi:PiNotSupersetOfLight":
            return PiNotSupersetOfLight;
        case "pi:PiNotchesLight":
            return PiNotchesLight;
        case "pi:PiNoteBlankLight":
            return PiNoteBlankLight;
        case "pi:PiNoteLight":
            return PiNoteLight;
        case "pi:PiNotePencilLight":
            return PiNotePencilLight;
        case "pi:PiNotebookLight":
            return PiNotebookLight;
        case "pi:PiNotepadLight":
            return PiNotepadLight;
        case "pi:PiNotificationLight":
            return PiNotificationLight;
        case "pi:PiNotionLogoLight":
            return PiNotionLogoLight;
        case "pi:PiNuclearPlantLight":
            return PiNuclearPlantLight;
        case "pi:PiNumberCircleEightLight":
            return PiNumberCircleEightLight;
        case "pi:PiNumberCircleFiveLight":
            return PiNumberCircleFiveLight;
        case "pi:PiNumberCircleFourLight":
            return PiNumberCircleFourLight;
        case "pi:PiNumberCircleNineLight":
            return PiNumberCircleNineLight;
        case "pi:PiNumberCircleOneLight":
            return PiNumberCircleOneLight;
        case "pi:PiNumberCircleSevenLight":
            return PiNumberCircleSevenLight;
        case "pi:PiNumberCircleSixLight":
            return PiNumberCircleSixLight;
        case "pi:PiNumberCircleThreeLight":
            return PiNumberCircleThreeLight;
        case "pi:PiNumberCircleTwoLight":
            return PiNumberCircleTwoLight;
        case "pi:PiNumberCircleZeroLight":
            return PiNumberCircleZeroLight;
        case "pi:PiNumberEightLight":
            return PiNumberEightLight;
        case "pi:PiNumberFiveLight":
            return PiNumberFiveLight;
        case "pi:PiNumberFourLight":
            return PiNumberFourLight;
        case "pi:PiNumberNineLight":
            return PiNumberNineLight;
        case "pi:PiNumberOneLight":
            return PiNumberOneLight;
        case "pi:PiNumberSevenLight":
            return PiNumberSevenLight;
        case "pi:PiNumberSixLight":
            return PiNumberSixLight;
        case "pi:PiNumberSquareEightLight":
            return PiNumberSquareEightLight;
        case "pi:PiNumberSquareFiveLight":
            return PiNumberSquareFiveLight;
        case "pi:PiNumberSquareFourLight":
            return PiNumberSquareFourLight;
        case "pi:PiNumberSquareNineLight":
            return PiNumberSquareNineLight;
        case "pi:PiNumberSquareOneLight":
            return PiNumberSquareOneLight;
        case "pi:PiNumberSquareSevenLight":
            return PiNumberSquareSevenLight;
        case "pi:PiNumberSquareSixLight":
            return PiNumberSquareSixLight;
        case "pi:PiNumberSquareThreeLight":
            return PiNumberSquareThreeLight;
        case "pi:PiNumberSquareTwoLight":
            return PiNumberSquareTwoLight;
        case "pi:PiNumberSquareZeroLight":
            return PiNumberSquareZeroLight;
        case "pi:PiNumberThreeLight":
            return PiNumberThreeLight;
        case "pi:PiNumberTwoLight":
            return PiNumberTwoLight;
        case "pi:PiNumberZeroLight":
            return PiNumberZeroLight;
        case "pi:PiNumpadLight":
            return PiNumpadLight;
        case "pi:PiNutLight":
            return PiNutLight;
        case "pi:PiNyTimesLogoLight":
            return PiNyTimesLogoLight;
        case "pi:PiOctagonLight":
            return PiOctagonLight;
        case "pi:PiOfficeChairLight":
            return PiOfficeChairLight;
        case "pi:PiOnigiriLight":
            return PiOnigiriLight;
        case "pi:PiOpenAiLogoLight":
            return PiOpenAiLogoLight;
        case "pi:PiOptionLight":
            return PiOptionLight;
        case "pi:PiOrangeLight":
            return PiOrangeLight;
        case "pi:PiOrangeSliceLight":
            return PiOrangeSliceLight;
        case "pi:PiOvenLight":
            return PiOvenLight;
        case "pi:PiPackageLight":
            return PiPackageLight;
        case "pi:PiPaintBrushBroadLight":
            return PiPaintBrushBroadLight;
        case "pi:PiPaintBrushHouseholdLight":
            return PiPaintBrushHouseholdLight;
        case "pi:PiPaintBrushLight":
            return PiPaintBrushLight;
        case "pi:PiPaintBucketLight":
            return PiPaintBucketLight;
        case "pi:PiPaintRollerLight":
            return PiPaintRollerLight;
        case "pi:PiPaletteLight":
            return PiPaletteLight;
        case "pi:PiPanoramaLight":
            return PiPanoramaLight;
        case "pi:PiPantsLight":
            return PiPantsLight;
        case "pi:PiPaperPlaneLight":
            return PiPaperPlaneLight;
        case "pi:PiPaperPlaneRightLight":
            return PiPaperPlaneRightLight;
        case "pi:PiPaperPlaneTiltLight":
            return PiPaperPlaneTiltLight;
        case "pi:PiPaperclipHorizontalLight":
            return PiPaperclipHorizontalLight;
        case "pi:PiPaperclipLight":
            return PiPaperclipLight;
        case "pi:PiParachuteLight":
            return PiParachuteLight;
        case "pi:PiParagraphLight":
            return PiParagraphLight;
        case "pi:PiParallelogramLight":
            return PiParallelogramLight;
        case "pi:PiParkLight":
            return PiParkLight;
        case "pi:PiPasswordLight":
            return PiPasswordLight;
        case "pi:PiPathLight":
            return PiPathLight;
        case "pi:PiPatreonLogoLight":
            return PiPatreonLogoLight;
        case "pi:PiPauseCircleLight":
            return PiPauseCircleLight;
        case "pi:PiPauseLight":
            return PiPauseLight;
        case "pi:PiPawPrintLight":
            return PiPawPrintLight;
        case "pi:PiPaypalLogoLight":
            return PiPaypalLogoLight;
        case "pi:PiPeaceLight":
            return PiPeaceLight;
        case "pi:PiPenLight":
            return PiPenLight;
        case "pi:PiPenNibLight":
            return PiPenNibLight;
        case "pi:PiPenNibStraightLight":
            return PiPenNibStraightLight;
        case "pi:PiPencilCircleLight":
            return PiPencilCircleLight;
        case "pi:PiPencilLight":
            return PiPencilLight;
        case "pi:PiPencilLineLight":
            return PiPencilLineLight;
        case "pi:PiPencilRulerLight":
            return PiPencilRulerLight;
        case "pi:PiPencilSimpleLight":
            return PiPencilSimpleLight;
        case "pi:PiPencilSimpleLineLight":
            return PiPencilSimpleLineLight;
        case "pi:PiPencilSimpleSlashLight":
            return PiPencilSimpleSlashLight;
        case "pi:PiPencilSlashLight":
            return PiPencilSlashLight;
        case "pi:PiPentagonLight":
            return PiPentagonLight;
        case "pi:PiPentagramLight":
            return PiPentagramLight;
        case "pi:PiPepperLight":
            return PiPepperLight;
        case "pi:PiPercentLight":
            return PiPercentLight;
        case "pi:PiPersonArmsSpreadLight":
            return PiPersonArmsSpreadLight;
        case "pi:PiPersonLight":
            return PiPersonLight;
        case "pi:PiPersonSimpleBikeLight":
            return PiPersonSimpleBikeLight;
        case "pi:PiPersonSimpleCircleLight":
            return PiPersonSimpleCircleLight;
        case "pi:PiPersonSimpleHikeLight":
            return PiPersonSimpleHikeLight;
        case "pi:PiPersonSimpleLight":
            return PiPersonSimpleLight;
        case "pi:PiPersonSimpleRunLight":
            return PiPersonSimpleRunLight;
        case "pi:PiPersonSimpleSkiLight":
            return PiPersonSimpleSkiLight;
        case "pi:PiPersonSimpleSnowboardLight":
            return PiPersonSimpleSnowboardLight;
        case "pi:PiPersonSimpleSwimLight":
            return PiPersonSimpleSwimLight;
        case "pi:PiPersonSimpleTaiChiLight":
            return PiPersonSimpleTaiChiLight;
        case "pi:PiPersonSimpleThrowLight":
            return PiPersonSimpleThrowLight;
        case "pi:PiPersonSimpleWalkLight":
            return PiPersonSimpleWalkLight;
        case "pi:PiPerspectiveLight":
            return PiPerspectiveLight;
        case "pi:PiPhoneCallLight":
            return PiPhoneCallLight;
        case "pi:PiPhoneDisconnectLight":
            return PiPhoneDisconnectLight;
        case "pi:PiPhoneIncomingLight":
            return PiPhoneIncomingLight;
        case "pi:PiPhoneLight":
            return PiPhoneLight;
        case "pi:PiPhoneListLight":
            return PiPhoneListLight;
        case "pi:PiPhoneOutgoingLight":
            return PiPhoneOutgoingLight;
        case "pi:PiPhonePauseLight":
            return PiPhonePauseLight;
        case "pi:PiPhonePlusLight":
            return PiPhonePlusLight;
        case "pi:PiPhoneSlashLight":
            return PiPhoneSlashLight;
        case "pi:PiPhoneTransferLight":
            return PiPhoneTransferLight;
        case "pi:PiPhoneXLight":
            return PiPhoneXLight;
        case "pi:PiPhosphorLogoLight":
            return PiPhosphorLogoLight;
        case "pi:PiPiLight":
            return PiPiLight;
        case "pi:PiPianoKeysLight":
            return PiPianoKeysLight;
        case "pi:PiPicnicTableLight":
            return PiPicnicTableLight;
        case "pi:PiPictureInPictureLight":
            return PiPictureInPictureLight;
        case "pi:PiPiggyBankLight":
            return PiPiggyBankLight;
        case "pi:PiPillLight":
            return PiPillLight;
        case "pi:PiPingPongLight":
            return PiPingPongLight;
        case "pi:PiPintGlassLight":
            return PiPintGlassLight;
        case "pi:PiPinterestLogoLight":
            return PiPinterestLogoLight;
        case "pi:PiPinwheelLight":
            return PiPinwheelLight;
        case "pi:PiPipeLight":
            return PiPipeLight;
        case "pi:PiPipeWrenchLight":
            return PiPipeWrenchLight;
        case "pi:PiPixLogoLight":
            return PiPixLogoLight;
        case "pi:PiPizzaLight":
            return PiPizzaLight;
        case "pi:PiPlaceholderLight":
            return PiPlaceholderLight;
        case "pi:PiPlanetLight":
            return PiPlanetLight;
        case "pi:PiPlantLight":
            return PiPlantLight;
        case "pi:PiPlayCircleLight":
            return PiPlayCircleLight;
        case "pi:PiPlayLight":
            return PiPlayLight;
        case "pi:PiPlayPauseLight":
            return PiPlayPauseLight;
        case "pi:PiPlaylistLight":
            return PiPlaylistLight;
        case "pi:PiPlugChargingLight":
            return PiPlugChargingLight;
        case "pi:PiPlugLight":
            return PiPlugLight;
        case "pi:PiPlugsConnectedLight":
            return PiPlugsConnectedLight;
        case "pi:PiPlugsLight":
            return PiPlugsLight;
        case "pi:PiPlusCircleLight":
            return PiPlusCircleLight;
        case "pi:PiPlusLight":
            return PiPlusLight;
        case "pi:PiPlusMinusLight":
            return PiPlusMinusLight;
        case "pi:PiPlusSquareLight":
            return PiPlusSquareLight;
        case "pi:PiPokerChipLight":
            return PiPokerChipLight;
        case "pi:PiPoliceCarLight":
            return PiPoliceCarLight;
        case "pi:PiPolygonLight":
            return PiPolygonLight;
        case "pi:PiPopcornLight":
            return PiPopcornLight;
        case "pi:PiPopsicleLight":
            return PiPopsicleLight;
        case "pi:PiPottedPlantLight":
            return PiPottedPlantLight;
        case "pi:PiPowerLight":
            return PiPowerLight;
        case "pi:PiPrescriptionLight":
            return PiPrescriptionLight;
        case "pi:PiPresentationChartLight":
            return PiPresentationChartLight;
        case "pi:PiPresentationLight":
            return PiPresentationLight;
        case "pi:PiPrinterLight":
            return PiPrinterLight;
        case "pi:PiProhibitInsetLight":
            return PiProhibitInsetLight;
        case "pi:PiProhibitLight":
            return PiProhibitLight;
        case "pi:PiProjectorScreenChartLight":
            return PiProjectorScreenChartLight;
        case "pi:PiProjectorScreenLight":
            return PiProjectorScreenLight;
        case "pi:PiPulseLight":
            return PiPulseLight;
        case "pi:PiPushPinLight":
            return PiPushPinLight;
        case "pi:PiPushPinSimpleLight":
            return PiPushPinSimpleLight;
        case "pi:PiPushPinSimpleSlashLight":
            return PiPushPinSimpleSlashLight;
        case "pi:PiPushPinSlashLight":
            return PiPushPinSlashLight;
        case "pi:PiPuzzlePieceLight":
            return PiPuzzlePieceLight;
        case "pi:PiQrCodeLight":
            return PiQrCodeLight;
        case "pi:PiQuestionLight":
            return PiQuestionLight;
        case "pi:PiQuestionMarkLight":
            return PiQuestionMarkLight;
        case "pi:PiQueueLight":
            return PiQueueLight;
        case "pi:PiQuotesLight":
            return PiQuotesLight;
        case "pi:PiRabbitLight":
            return PiRabbitLight;
        case "pi:PiRacquetLight":
            return PiRacquetLight;
        case "pi:PiRadicalLight":
            return PiRadicalLight;
        case "pi:PiRadioButtonLight":
            return PiRadioButtonLight;
        case "pi:PiRadioLight":
            return PiRadioLight;
        case "pi:PiRadioactiveLight":
            return PiRadioactiveLight;
        case "pi:PiRainbowCloudLight":
            return PiRainbowCloudLight;
        case "pi:PiRainbowLight":
            return PiRainbowLight;
        case "pi:PiRankingLight":
            return PiRankingLight;
        case "pi:PiReadCvLogoLight":
            return PiReadCvLogoLight;
        case "pi:PiReceiptLight":
            return PiReceiptLight;
        case "pi:PiReceiptXLight":
            return PiReceiptXLight;
        case "pi:PiRecordLight":
            return PiRecordLight;
        case "pi:PiRectangleDashedLight":
            return PiRectangleDashedLight;
        case "pi:PiRectangleLight":
            return PiRectangleLight;
        case "pi:PiRecycleLight":
            return PiRecycleLight;
        case "pi:PiRedditLogoLight":
            return PiRedditLogoLight;
        case "pi:PiRepeatLight":
            return PiRepeatLight;
        case "pi:PiRepeatOnceLight":
            return PiRepeatOnceLight;
        case "pi:PiReplitLogoLight":
            return PiReplitLogoLight;
        case "pi:PiResizeLight":
            return PiResizeLight;
        case "pi:PiRewindCircleLight":
            return PiRewindCircleLight;
        case "pi:PiRewindLight":
            return PiRewindLight;
        case "pi:PiRoadHorizonLight":
            return PiRoadHorizonLight;
        case "pi:PiRobotLight":
            return PiRobotLight;
        case "pi:PiRocketLaunchLight":
            return PiRocketLaunchLight;
        case "pi:PiRocketLight":
            return PiRocketLight;
        case "pi:PiRowsLight":
            return PiRowsLight;
        case "pi:PiRowsPlusBottomLight":
            return PiRowsPlusBottomLight;
        case "pi:PiRowsPlusTopLight":
            return PiRowsPlusTopLight;
        case "pi:PiRssLight":
            return PiRssLight;
        case "pi:PiRssSimpleLight":
            return PiRssSimpleLight;
        case "pi:PiRugLight":
            return PiRugLight;
        case "pi:PiRulerLight":
            return PiRulerLight;
        case "pi:PiSailboatLight":
            return PiSailboatLight;
        case "pi:PiScalesLight":
            return PiScalesLight;
        case "pi:PiScanLight":
            return PiScanLight;
        case "pi:PiScanSmileyLight":
            return PiScanSmileyLight;
        case "pi:PiScissorsLight":
            return PiScissorsLight;
        case "pi:PiScooterLight":
            return PiScooterLight;
        case "pi:PiScreencastLight":
            return PiScreencastLight;
        case "pi:PiScrewdriverLight":
            return PiScrewdriverLight;
        case "pi:PiScribbleLight":
            return PiScribbleLight;
        case "pi:PiScribbleLoopLight":
            return PiScribbleLoopLight;
        case "pi:PiScrollLight":
            return PiScrollLight;
        case "pi:PiSealCheckLight":
            return PiSealCheckLight;
        case "pi:PiSealLight":
            return PiSealLight;
        case "pi:PiSealPercentLight":
            return PiSealPercentLight;
        case "pi:PiSealQuestionLight":
            return PiSealQuestionLight;
        case "pi:PiSealWarningLight":
            return PiSealWarningLight;
        case "pi:PiSeatLight":
            return PiSeatLight;
        case "pi:PiSeatbeltLight":
            return PiSeatbeltLight;
        case "pi:PiSecurityCameraLight":
            return PiSecurityCameraLight;
        case "pi:PiSelectionAllLight":
            return PiSelectionAllLight;
        case "pi:PiSelectionBackgroundLight":
            return PiSelectionBackgroundLight;
        case "pi:PiSelectionForegroundLight":
            return PiSelectionForegroundLight;
        case "pi:PiSelectionInverseLight":
            return PiSelectionInverseLight;
        case "pi:PiSelectionLight":
            return PiSelectionLight;
        case "pi:PiSelectionPlusLight":
            return PiSelectionPlusLight;
        case "pi:PiSelectionSlashLight":
            return PiSelectionSlashLight;
        case "pi:PiShapesLight":
            return PiShapesLight;
        case "pi:PiShareFatLight":
            return PiShareFatLight;
        case "pi:PiShareLight":
            return PiShareLight;
        case "pi:PiShareNetworkLight":
            return PiShareNetworkLight;
        case "pi:PiShieldCheckLight":
            return PiShieldCheckLight;
        case "pi:PiShieldCheckeredLight":
            return PiShieldCheckeredLight;
        case "pi:PiShieldChevronLight":
            return PiShieldChevronLight;
        case "pi:PiShieldLight":
            return PiShieldLight;
        case "pi:PiShieldPlusLight":
            return PiShieldPlusLight;
        case "pi:PiShieldSlashLight":
            return PiShieldSlashLight;
        case "pi:PiShieldStarLight":
            return PiShieldStarLight;
        case "pi:PiShieldWarningLight":
            return PiShieldWarningLight;
        case "pi:PiShippingContainerLight":
            return PiShippingContainerLight;
        case "pi:PiShirtFoldedLight":
            return PiShirtFoldedLight;
        case "pi:PiShootingStarLight":
            return PiShootingStarLight;
        case "pi:PiShoppingBagLight":
            return PiShoppingBagLight;
        case "pi:PiShoppingBagOpenLight":
            return PiShoppingBagOpenLight;
        case "pi:PiShoppingCartLight":
            return PiShoppingCartLight;
        case "pi:PiShoppingCartSimpleLight":
            return PiShoppingCartSimpleLight;
        case "pi:PiShovelLight":
            return PiShovelLight;
        case "pi:PiShowerLight":
            return PiShowerLight;
        case "pi:PiShrimpLight":
            return PiShrimpLight;
        case "pi:PiShuffleAngularLight":
            return PiShuffleAngularLight;
        case "pi:PiShuffleLight":
            return PiShuffleLight;
        case "pi:PiShuffleSimpleLight":
            return PiShuffleSimpleLight;
        case "pi:PiSidebarLight":
            return PiSidebarLight;
        case "pi:PiSidebarSimpleLight":
            return PiSidebarSimpleLight;
        case "pi:PiSigmaLight":
            return PiSigmaLight;
        case "pi:PiSignInLight":
            return PiSignInLight;
        case "pi:PiSignOutLight":
            return PiSignOutLight;
        case "pi:PiSignatureLight":
            return PiSignatureLight;
        case "pi:PiSignpostLight":
            return PiSignpostLight;
        case "pi:PiSimCardLight":
            return PiSimCardLight;
        case "pi:PiSirenLight":
            return PiSirenLight;
        case "pi:PiSketchLogoLight":
            return PiSketchLogoLight;
        case "pi:PiSkipBackCircleLight":
            return PiSkipBackCircleLight;
        case "pi:PiSkipBackLight":
            return PiSkipBackLight;
        case "pi:PiSkipForwardCircleLight":
            return PiSkipForwardCircleLight;
        case "pi:PiSkipForwardLight":
            return PiSkipForwardLight;
        case "pi:PiSkullLight":
            return PiSkullLight;
        case "pi:PiSkypeLogoLight":
            return PiSkypeLogoLight;
        case "pi:PiSlackLogoLight":
            return PiSlackLogoLight;
        case "pi:PiSlidersHorizontalLight":
            return PiSlidersHorizontalLight;
        case "pi:PiSlidersLight":
            return PiSlidersLight;
        case "pi:PiSlideshowLight":
            return PiSlideshowLight;
        case "pi:PiSmileyAngryLight":
            return PiSmileyAngryLight;
        case "pi:PiSmileyBlankLight":
            return PiSmileyBlankLight;
        case "pi:PiSmileyLight":
            return PiSmileyLight;
        case "pi:PiSmileyMehLight":
            return PiSmileyMehLight;
        case "pi:PiSmileyMeltingLight":
            return PiSmileyMeltingLight;
        case "pi:PiSmileyNervousLight":
            return PiSmileyNervousLight;
        case "pi:PiSmileySadLight":
            return PiSmileySadLight;
        case "pi:PiSmileyStickerLight":
            return PiSmileyStickerLight;
        case "pi:PiSmileyWinkLight":
            return PiSmileyWinkLight;
        case "pi:PiSmileyXEyesLight":
            return PiSmileyXEyesLight;
        case "pi:PiSnapchatLogoLight":
            return PiSnapchatLogoLight;
        case "pi:PiSneakerLight":
            return PiSneakerLight;
        case "pi:PiSneakerMoveLight":
            return PiSneakerMoveLight;
        case "pi:PiSnowflakeLight":
            return PiSnowflakeLight;
        case "pi:PiSoccerBallLight":
            return PiSoccerBallLight;
        case "pi:PiSockLight":
            return PiSockLight;
        case "pi:PiSolarPanelLight":
            return PiSolarPanelLight;
        case "pi:PiSolarRoofLight":
            return PiSolarRoofLight;
        case "pi:PiSortAscendingLight":
            return PiSortAscendingLight;
        case "pi:PiSortDescendingLight":
            return PiSortDescendingLight;
        case "pi:PiSoundcloudLogoLight":
            return PiSoundcloudLogoLight;
        case "pi:PiSpadeLight":
            return PiSpadeLight;
        case "pi:PiSparkleLight":
            return PiSparkleLight;
        case "pi:PiSpeakerHifiLight":
            return PiSpeakerHifiLight;
        case "pi:PiSpeakerHighLight":
            return PiSpeakerHighLight;
        case "pi:PiSpeakerLowLight":
            return PiSpeakerLowLight;
        case "pi:PiSpeakerNoneLight":
            return PiSpeakerNoneLight;
        case "pi:PiSpeakerSimpleHighLight":
            return PiSpeakerSimpleHighLight;
        case "pi:PiSpeakerSimpleLowLight":
            return PiSpeakerSimpleLowLight;
        case "pi:PiSpeakerSimpleNoneLight":
            return PiSpeakerSimpleNoneLight;
        case "pi:PiSpeakerSimpleSlashLight":
            return PiSpeakerSimpleSlashLight;
        case "pi:PiSpeakerSimpleXLight":
            return PiSpeakerSimpleXLight;
        case "pi:PiSpeakerSlashLight":
            return PiSpeakerSlashLight;
        case "pi:PiSpeakerXLight":
            return PiSpeakerXLight;
        case "pi:PiSpeedometerLight":
            return PiSpeedometerLight;
        case "pi:PiSphereLight":
            return PiSphereLight;
        case "pi:PiSpinnerBallLight":
            return PiSpinnerBallLight;
        case "pi:PiSpinnerGapLight":
            return PiSpinnerGapLight;
        case "pi:PiSpinnerLight":
            return PiSpinnerLight;
        case "pi:PiSpiralLight":
            return PiSpiralLight;
        case "pi:PiSplitHorizontalLight":
            return PiSplitHorizontalLight;
        case "pi:PiSplitVerticalLight":
            return PiSplitVerticalLight;
        case "pi:PiSpotifyLogoLight":
            return PiSpotifyLogoLight;
        case "pi:PiSprayBottleLight":
            return PiSprayBottleLight;
        case "pi:PiSquareHalfBottomLight":
            return PiSquareHalfBottomLight;
        case "pi:PiSquareHalfLight":
            return PiSquareHalfLight;
        case "pi:PiSquareLight":
            return PiSquareLight;
        case "pi:PiSquareLogoLight":
            return PiSquareLogoLight;
        case "pi:PiSquareSplitHorizontalLight":
            return PiSquareSplitHorizontalLight;
        case "pi:PiSquareSplitVerticalLight":
            return PiSquareSplitVerticalLight;
        case "pi:PiSquaresFourLight":
            return PiSquaresFourLight;
        case "pi:PiStackLight":
            return PiStackLight;
        case "pi:PiStackMinusLight":
            return PiStackMinusLight;
        case "pi:PiStackOverflowLogoLight":
            return PiStackOverflowLogoLight;
        case "pi:PiStackPlusLight":
            return PiStackPlusLight;
        case "pi:PiStackSimpleLight":
            return PiStackSimpleLight;
        case "pi:PiStairsLight":
            return PiStairsLight;
        case "pi:PiStampLight":
            return PiStampLight;
        case "pi:PiStandardDefinitionLight":
            return PiStandardDefinitionLight;
        case "pi:PiStarAndCrescentLight":
            return PiStarAndCrescentLight;
        case "pi:PiStarFourLight":
            return PiStarFourLight;
        case "pi:PiStarHalfLight":
            return PiStarHalfLight;
        case "pi:PiStarLight":
            return PiStarLight;
        case "pi:PiStarOfDavidLight":
            return PiStarOfDavidLight;
        case "pi:PiSteamLogoLight":
            return PiSteamLogoLight;
        case "pi:PiSteeringWheelLight":
            return PiSteeringWheelLight;
        case "pi:PiStepsLight":
            return PiStepsLight;
        case "pi:PiStethoscopeLight":
            return PiStethoscopeLight;
        case "pi:PiStickerLight":
            return PiStickerLight;
        case "pi:PiStoolLight":
            return PiStoolLight;
        case "pi:PiStopCircleLight":
            return PiStopCircleLight;
        case "pi:PiStopLight":
            return PiStopLight;
        case "pi:PiStorefrontLight":
            return PiStorefrontLight;
        case "pi:PiStrategyLight":
            return PiStrategyLight;
        case "pi:PiStripeLogoLight":
            return PiStripeLogoLight;
        case "pi:PiStudentLight":
            return PiStudentLight;
        case "pi:PiSubsetOfLight":
            return PiSubsetOfLight;
        case "pi:PiSubsetProperOfLight":
            return PiSubsetProperOfLight;
        case "pi:PiSubtitlesLight":
            return PiSubtitlesLight;
        case "pi:PiSubtitlesSlashLight":
            return PiSubtitlesSlashLight;
        case "pi:PiSubtractLight":
            return PiSubtractLight;
        case "pi:PiSubtractSquareLight":
            return PiSubtractSquareLight;
        case "pi:PiSubwayLight":
            return PiSubwayLight;
        case "pi:PiSuitcaseLight":
            return PiSuitcaseLight;
        case "pi:PiSuitcaseRollingLight":
            return PiSuitcaseRollingLight;
        case "pi:PiSuitcaseSimpleLight":
            return PiSuitcaseSimpleLight;
        case "pi:PiSunDimLight":
            return PiSunDimLight;
        case "pi:PiSunHorizonLight":
            return PiSunHorizonLight;
        case "pi:PiSunLight":
            return PiSunLight;
        case "pi:PiSunglassesLight":
            return PiSunglassesLight;
        case "pi:PiSupersetOfLight":
            return PiSupersetOfLight;
        case "pi:PiSupersetProperOfLight":
            return PiSupersetProperOfLight;
        case "pi:PiSwapLight":
            return PiSwapLight;
        case "pi:PiSwatchesLight":
            return PiSwatchesLight;
        case "pi:PiSwimmingPoolLight":
            return PiSwimmingPoolLight;
        case "pi:PiSwordLight":
            return PiSwordLight;
        case "pi:PiSynagogueLight":
            return PiSynagogueLight;
        case "pi:PiSyringeLight":
            return PiSyringeLight;
        case "pi:PiTShirtLight":
            return PiTShirtLight;
        case "pi:PiTableLight":
            return PiTableLight;
        case "pi:PiTabsLight":
            return PiTabsLight;
        case "pi:PiTagChevronLight":
            return PiTagChevronLight;
        case "pi:PiTagLight":
            return PiTagLight;
        case "pi:PiTagSimpleLight":
            return PiTagSimpleLight;
        case "pi:PiTargetLight":
            return PiTargetLight;
        case "pi:PiTaxiLight":
            return PiTaxiLight;
        case "pi:PiTeaBagLight":
            return PiTeaBagLight;
        case "pi:PiTelegramLogoLight":
            return PiTelegramLogoLight;
        case "pi:PiTelevisionLight":
            return PiTelevisionLight;
        case "pi:PiTelevisionSimpleLight":
            return PiTelevisionSimpleLight;
        case "pi:PiTennisBallLight":
            return PiTennisBallLight;
        case "pi:PiTentLight":
            return PiTentLight;
        case "pi:PiTerminalLight":
            return PiTerminalLight;
        case "pi:PiTerminalWindowLight":
            return PiTerminalWindowLight;
        case "pi:PiTestTubeLight":
            return PiTestTubeLight;
        case "pi:PiTextAUnderlineLight":
            return PiTextAUnderlineLight;
        case "pi:PiTextAaLight":
            return PiTextAaLight;
        case "pi:PiTextAlignCenterLight":
            return PiTextAlignCenterLight;
        case "pi:PiTextAlignJustifyLight":
            return PiTextAlignJustifyLight;
        case "pi:PiTextAlignLeftLight":
            return PiTextAlignLeftLight;
        case "pi:PiTextAlignRightLight":
            return PiTextAlignRightLight;
        case "pi:PiTextBLight":
            return PiTextBLight;
        case "pi:PiTextColumnsLight":
            return PiTextColumnsLight;
        case "pi:PiTextHFiveLight":
            return PiTextHFiveLight;
        case "pi:PiTextHFourLight":
            return PiTextHFourLight;
        case "pi:PiTextHLight":
            return PiTextHLight;
        case "pi:PiTextHOneLight":
            return PiTextHOneLight;
        case "pi:PiTextHSixLight":
            return PiTextHSixLight;
        case "pi:PiTextHThreeLight":
            return PiTextHThreeLight;
        case "pi:PiTextHTwoLight":
            return PiTextHTwoLight;
        case "pi:PiTextIndentLight":
            return PiTextIndentLight;
        case "pi:PiTextItalicLight":
            return PiTextItalicLight;
        case "pi:PiTextOutdentLight":
            return PiTextOutdentLight;
        case "pi:PiTextStrikethroughLight":
            return PiTextStrikethroughLight;
        case "pi:PiTextSubscriptLight":
            return PiTextSubscriptLight;
        case "pi:PiTextSuperscriptLight":
            return PiTextSuperscriptLight;
        case "pi:PiTextTLight":
            return PiTextTLight;
        case "pi:PiTextTSlashLight":
            return PiTextTSlashLight;
        case "pi:PiTextUnderlineLight":
            return PiTextUnderlineLight;
        case "pi:PiTextboxLight":
            return PiTextboxLight;
        case "pi:PiThermometerColdLight":
            return PiThermometerColdLight;
        case "pi:PiThermometerHotLight":
            return PiThermometerHotLight;
        case "pi:PiThermometerLight":
            return PiThermometerLight;
        case "pi:PiThermometerSimpleLight":
            return PiThermometerSimpleLight;
        case "pi:PiThreadsLogoLight":
            return PiThreadsLogoLight;
        case "pi:PiThreeDLight":
            return PiThreeDLight;
        case "pi:PiThumbsDownLight":
            return PiThumbsDownLight;
        case "pi:PiThumbsUpLight":
            return PiThumbsUpLight;
        case "pi:PiTicketLight":
            return PiTicketLight;
        case "pi:PiTidalLogoLight":
            return PiTidalLogoLight;
        case "pi:PiTiktokLogoLight":
            return PiTiktokLogoLight;
        case "pi:PiTildeLight":
            return PiTildeLight;
        case "pi:PiTimerLight":
            return PiTimerLight;
        case "pi:PiTipJarLight":
            return PiTipJarLight;
        case "pi:PiTipiLight":
            return PiTipiLight;
        case "pi:PiTireLight":
            return PiTireLight;
        case "pi:PiToggleLeftLight":
            return PiToggleLeftLight;
        case "pi:PiToggleRightLight":
            return PiToggleRightLight;
        case "pi:PiToiletLight":
            return PiToiletLight;
        case "pi:PiToiletPaperLight":
            return PiToiletPaperLight;
        case "pi:PiToolboxLight":
            return PiToolboxLight;
        case "pi:PiToothLight":
            return PiToothLight;
        case "pi:PiTornadoLight":
            return PiTornadoLight;
        case "pi:PiToteLight":
            return PiToteLight;
        case "pi:PiToteSimpleLight":
            return PiToteSimpleLight;
        case "pi:PiTowelLight":
            return PiTowelLight;
        case "pi:PiTractorLight":
            return PiTractorLight;
        case "pi:PiTrademarkLight":
            return PiTrademarkLight;
        case "pi:PiTrademarkRegisteredLight":
            return PiTrademarkRegisteredLight;
        case "pi:PiTrafficConeLight":
            return PiTrafficConeLight;
        case "pi:PiTrafficSignLight":
            return PiTrafficSignLight;
        case "pi:PiTrafficSignalLight":
            return PiTrafficSignalLight;
        case "pi:PiTrainLight":
            return PiTrainLight;
        case "pi:PiTrainRegionalLight":
            return PiTrainRegionalLight;
        case "pi:PiTrainSimpleLight":
            return PiTrainSimpleLight;
        case "pi:PiTramLight":
            return PiTramLight;
        case "pi:PiTranslateLight":
            return PiTranslateLight;
        case "pi:PiTrashLight":
            return PiTrashLight;
        case "pi:PiTrashSimpleLight":
            return PiTrashSimpleLight;
        case "pi:PiTrayArrowDownLight":
            return PiTrayArrowDownLight;
        case "pi:PiTrayArrowUpLight":
            return PiTrayArrowUpLight;
        case "pi:PiTrayLight":
            return PiTrayLight;
        case "pi:PiTreasureChestLight":
            return PiTreasureChestLight;
        case "pi:PiTreeEvergreenLight":
            return PiTreeEvergreenLight;
        case "pi:PiTreeLight":
            return PiTreeLight;
        case "pi:PiTreePalmLight":
            return PiTreePalmLight;
        case "pi:PiTreeStructureLight":
            return PiTreeStructureLight;
        case "pi:PiTreeViewLight":
            return PiTreeViewLight;
        case "pi:PiTrendDownLight":
            return PiTrendDownLight;
        case "pi:PiTrendUpLight":
            return PiTrendUpLight;
        case "pi:PiTriangleDashedLight":
            return PiTriangleDashedLight;
        case "pi:PiTriangleLight":
            return PiTriangleLight;
        case "pi:PiTrolleyLight":
            return PiTrolleyLight;
        case "pi:PiTrolleySuitcaseLight":
            return PiTrolleySuitcaseLight;
        case "pi:PiTrophyLight":
            return PiTrophyLight;
        case "pi:PiTruckLight":
            return PiTruckLight;
        case "pi:PiTruckTrailerLight":
            return PiTruckTrailerLight;
        case "pi:PiTumblrLogoLight":
            return PiTumblrLogoLight;
        case "pi:PiTwitchLogoLight":
            return PiTwitchLogoLight;
        case "pi:PiTwitterLogoLight":
            return PiTwitterLogoLight;
        case "pi:PiUmbrellaLight":
            return PiUmbrellaLight;
        case "pi:PiUmbrellaSimpleLight":
            return PiUmbrellaSimpleLight;
        case "pi:PiUnionLight":
            return PiUnionLight;
        case "pi:PiUniteLight":
            return PiUniteLight;
        case "pi:PiUniteSquareLight":
            return PiUniteSquareLight;
        case "pi:PiUploadLight":
            return PiUploadLight;
        case "pi:PiUploadSimpleLight":
            return PiUploadSimpleLight;
        case "pi:PiUsbLight":
            return PiUsbLight;
        case "pi:PiUserCheckLight":
            return PiUserCheckLight;
        case "pi:PiUserCircleCheckLight":
            return PiUserCircleCheckLight;
        case "pi:PiUserCircleDashedLight":
            return PiUserCircleDashedLight;
        case "pi:PiUserCircleGearLight":
            return PiUserCircleGearLight;
        case "pi:PiUserCircleLight":
            return PiUserCircleLight;
        case "pi:PiUserCircleMinusLight":
            return PiUserCircleMinusLight;
        case "pi:PiUserCirclePlusLight":
            return PiUserCirclePlusLight;
        case "pi:PiUserFocusLight":
            return PiUserFocusLight;
        case "pi:PiUserGearLight":
            return PiUserGearLight;
        case "pi:PiUserLight":
            return PiUserLight;
        case "pi:PiUserListLight":
            return PiUserListLight;
        case "pi:PiUserMinusLight":
            return PiUserMinusLight;
        case "pi:PiUserPlusLight":
            return PiUserPlusLight;
        case "pi:PiUserRectangleLight":
            return PiUserRectangleLight;
        case "pi:PiUserSoundLight":
            return PiUserSoundLight;
        case "pi:PiUserSquareLight":
            return PiUserSquareLight;
        case "pi:PiUserSwitchLight":
            return PiUserSwitchLight;
        case "pi:PiUsersFourLight":
            return PiUsersFourLight;
        case "pi:PiUsersLight":
            return PiUsersLight;
        case "pi:PiUsersThreeLight":
            return PiUsersThreeLight;
        case "pi:PiVanLight":
            return PiVanLight;
        case "pi:PiVaultLight":
            return PiVaultLight;
        case "pi:PiVectorThreeLight":
            return PiVectorThreeLight;
        case "pi:PiVectorTwoLight":
            return PiVectorTwoLight;
        case "pi:PiVibrateLight":
            return PiVibrateLight;
        case "pi:PiVideoCameraLight":
            return PiVideoCameraLight;
        case "pi:PiVideoCameraSlashLight":
            return PiVideoCameraSlashLight;
        case "pi:PiVideoConferenceLight":
            return PiVideoConferenceLight;
        case "pi:PiVideoLight":
            return PiVideoLight;
    }
}