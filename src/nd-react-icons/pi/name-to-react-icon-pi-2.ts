import type {IconType} from "react-icons";

import {
    PiDiceSixDuotone,
    PiDiceThreeDuotone,
    PiDiceTwoDuotone,
    PiDiscDuotone,
    PiDiscoBallDuotone,
    PiDiscordLogoDuotone,
    PiDivideDuotone,
    PiDnaDuotone,
    PiDogDuotone,
    PiDoorDuotone,
    PiDoorOpenDuotone,
    PiDotDuotone,
    PiDotOutlineDuotone,
    PiDotsNineDuotone,
    PiDotsSixDuotone,
    PiDotsSixVerticalDuotone,
    PiDotsThreeCircleDuotone,
    PiDotsThreeCircleVerticalDuotone,
    PiDotsThreeDuotone,
    PiDotsThreeOutlineDuotone,
    PiDotsThreeOutlineVerticalDuotone,
    PiDotsThreeVerticalDuotone,
    PiDownloadDuotone,
    PiDownloadSimpleDuotone,
    PiDressDuotone,
    PiDresserDuotone,
    PiDribbbleLogoDuotone,
    PiDroneDuotone,
    PiDropDuotone,
    PiDropHalfBottomDuotone,
    PiDropHalfDuotone,
    PiDropSimpleDuotone,
    PiDropSlashDuotone,
    PiDropboxLogoDuotone,
    PiEarDuotone,
    PiEarSlashDuotone,
    PiEggCrackDuotone,
    PiEggDuotone,
    PiEjectDuotone,
    PiEjectSimpleDuotone,
    PiElevatorDuotone,
    PiEmptyDuotone,
    PiEngineDuotone,
    PiEnvelopeDuotone,
    PiEnvelopeOpenDuotone,
    PiEnvelopeSimpleDuotone,
    PiEnvelopeSimpleOpenDuotone,
    PiEqualizerDuotone,
    PiEqualsDuotone,
    PiEraserDuotone,
    PiEscalatorDownDuotone,
    PiEscalatorUpDuotone,
    PiExamDuotone,
    PiExclamationMarkDuotone,
    PiExcludeDuotone,
    PiExcludeSquareDuotone,
    PiExportDuotone,
    PiEyeClosedDuotone,
    PiEyeDuotone,
    PiEyeSlashDuotone,
    PiEyedropperDuotone,
    PiEyedropperSampleDuotone,
    PiEyeglassesDuotone,
    PiEyesDuotone,
    PiFaceMaskDuotone,
    PiFacebookLogoDuotone,
    PiFactoryDuotone,
    PiFadersDuotone,
    PiFadersHorizontalDuotone,
    PiFalloutShelterDuotone,
    PiFanDuotone,
    PiFarmDuotone,
    PiFastForwardCircleDuotone,
    PiFastForwardDuotone,
    PiFeatherDuotone,
    PiFediverseLogoDuotone,
    PiFigmaLogoDuotone,
    PiFileArchiveDuotone,
    PiFileArrowDownDuotone,
    PiFileArrowUpDuotone,
    PiFileAudioDuotone,
    PiFileCDuotone,
    PiFileCSharpDuotone,
    PiFileCloudDuotone,
    PiFileCodeDuotone,
    PiFileCppDuotone,
    PiFileCssDuotone,
    PiFileCsvDuotone,
    PiFileDashedDuotone,
    PiFileDocDuotone,
    PiFileDuotone,
    PiFileHtmlDuotone,
    PiFileImageDuotone,
    PiFileIniDuotone,
    PiFileJpgDuotone,
    PiFileJsDuotone,
    PiFileJsxDuotone,
    PiFileLockDuotone,
    PiFileMagnifyingGlassDuotone,
    PiFileMdDuotone,
    PiFileMinusDuotone,
    PiFilePdfDuotone,
    PiFilePlusDuotone,
    PiFilePngDuotone,
    PiFilePptDuotone,
    PiFilePyDuotone,
    PiFileRsDuotone,
    PiFileSqlDuotone,
    PiFileSvgDuotone,
    PiFileTextDuotone,
    PiFileTsDuotone,
    PiFileTsxDuotone,
    PiFileTxtDuotone,
    PiFileVideoDuotone,
    PiFileVueDuotone,
    PiFileXDuotone,
    PiFileXlsDuotone,
    PiFileZipDuotone,
    PiFilesDuotone,
    PiFilmReelDuotone,
    PiFilmScriptDuotone,
    PiFilmSlateDuotone,
    PiFilmStripDuotone,
    PiFingerprintDuotone,
    PiFingerprintSimpleDuotone,
    PiFinnTheHumanDuotone,
    PiFireDuotone,
    PiFireExtinguisherDuotone,
    PiFireSimpleDuotone,
    PiFireTruckDuotone,
    PiFirstAidDuotone,
    PiFirstAidKitDuotone,
    PiFishDuotone,
    PiFishSimpleDuotone,
    PiFlagBannerDuotone,
    PiFlagBannerFoldDuotone,
    PiFlagCheckeredDuotone,
    PiFlagDuotone,
    PiFlagPennantDuotone,
    PiFlameDuotone,
    PiFlashlightDuotone,
    PiFlaskDuotone,
    PiFlipHorizontalDuotone,
    PiFlipVerticalDuotone,
    PiFloppyDiskBackDuotone,
    PiFloppyDiskDuotone,
    PiFlowArrowDuotone,
    PiFlowerDuotone,
    PiFlowerLotusDuotone,
    PiFlowerTulipDuotone,
    PiFlyingSaucerDuotone,
    PiFolderDashedDuotone,
    PiFolderDuotone,
    PiFolderLockDuotone,
    PiFolderMinusDuotone,
    PiFolderOpenDuotone,
    PiFolderPlusDuotone,
    PiFolderSimpleDashedDuotone,
    PiFolderSimpleDuotone,
    PiFolderSimpleLockDuotone,
    PiFolderSimpleMinusDuotone,
    PiFolderSimplePlusDuotone,
    PiFolderSimpleStarDuotone,
    PiFolderSimpleUserDuotone,
    PiFolderStarDuotone,
    PiFolderUserDuotone,
    PiFoldersDuotone,
    PiFootballDuotone,
    PiFootballHelmetDuotone,
    PiFootprintsDuotone,
    PiForkKnifeDuotone,
    PiFourKDuotone,
    PiFrameCornersDuotone,
    PiFramerLogoDuotone,
    PiFunctionDuotone,
    PiFunnelDuotone,
    PiFunnelSimpleDuotone,
    PiFunnelSimpleXDuotone,
    PiFunnelXDuotone,
    PiGameControllerDuotone,
    PiGarageDuotone,
    PiGasCanDuotone,
    PiGasPumpDuotone,
    PiGaugeDuotone,
    PiGavelDuotone,
    PiGearDuotone,
    PiGearFineDuotone,
    PiGearSixDuotone,
    PiGenderFemaleDuotone,
    PiGenderIntersexDuotone,
    PiGenderMaleDuotone,
    PiGenderNeuterDuotone,
    PiGenderNonbinaryDuotone,
    PiGenderTransgenderDuotone,
    PiGhostDuotone,
    PiGifDuotone,
    PiGiftDuotone,
    PiGitBranchDuotone,
    PiGitCommitDuotone,
    PiGitDiffDuotone,
    PiGitForkDuotone,
    PiGitMergeDuotone,
    PiGitPullRequestDuotone,
    PiGithubLogoDuotone,
    PiGitlabLogoDuotone,
    PiGitlabLogoSimpleDuotone,
    PiGlobeDuotone,
    PiGlobeHemisphereEastDuotone,
    PiGlobeHemisphereWestDuotone,
    PiGlobeSimpleDuotone,
    PiGlobeSimpleXDuotone,
    PiGlobeStandDuotone,
    PiGlobeXDuotone,
    PiGogglesDuotone,
    PiGolfDuotone,
    PiGoodreadsLogoDuotone,
    PiGoogleCardboardLogoDuotone,
    PiGoogleChromeLogoDuotone,
    PiGoogleDriveLogoDuotone,
    PiGoogleLogoDuotone,
    PiGooglePhotosLogoDuotone,
    PiGooglePlayLogoDuotone,
    PiGooglePodcastsLogoDuotone,
    PiGpsDuotone,
    PiGpsFixDuotone,
    PiGpsSlashDuotone,
    PiGradientDuotone,
    PiGraduationCapDuotone,
    PiGrainsDuotone,
    PiGrainsSlashDuotone,
    PiGraphDuotone,
    PiGraphicsCardDuotone,
    PiGreaterThanDuotone,
    PiGreaterThanOrEqualDuotone,
    PiGridFourDuotone,
    PiGridNineDuotone,
    PiGuitarDuotone,
    PiHairDryerDuotone,
    PiHamburgerDuotone,
    PiHammerDuotone,
    PiHandArrowDownDuotone,
    PiHandArrowUpDuotone,
    PiHandCoinsDuotone,
    PiHandDepositDuotone,
    PiHandDuotone,
    PiHandEyeDuotone,
    PiHandFistDuotone,
    PiHandGrabbingDuotone,
    PiHandHeartDuotone,
    PiHandPalmDuotone,
    PiHandPeaceDuotone,
    PiHandPointingDuotone,
    PiHandSoapDuotone,
    PiHandSwipeLeftDuotone,
    PiHandSwipeRightDuotone,
    PiHandTapDuotone,
    PiHandWavingDuotone,
    PiHandWithdrawDuotone,
    PiHandbagDuotone,
    PiHandbagSimpleDuotone,
    PiHandsClappingDuotone,
    PiHandsPrayingDuotone,
    PiHandshakeDuotone,
    PiHardDriveDuotone,
    PiHardDrivesDuotone,
    PiHardHatDuotone,
    PiHashDuotone,
    PiHashStraightDuotone,
    PiHeadCircuitDuotone,
    PiHeadlightsDuotone,
    PiHeadphonesDuotone,
    PiHeadsetDuotone,
    PiHeartBreakDuotone,
    PiHeartDuotone,
    PiHeartHalfDuotone,
    PiHeartStraightBreakDuotone,
    PiHeartStraightDuotone,
    PiHeartbeatDuotone,
    PiHexagonDuotone,
    PiHighDefinitionDuotone,
    PiHighHeelDuotone,
    PiHighlighterCircleDuotone,
    PiHighlighterDuotone,
    PiHockeyDuotone,
    PiHoodieDuotone,
    PiHorseDuotone,
    PiHospitalDuotone,
    PiHourglassDuotone,
    PiHourglassHighDuotone,
    PiHourglassLowDuotone,
    PiHourglassMediumDuotone,
    PiHourglassSimpleDuotone,
    PiHourglassSimpleHighDuotone,
    PiHourglassSimpleLowDuotone,
    PiHourglassSimpleMediumDuotone,
    PiHouseDuotone,
    PiHouseLineDuotone,
    PiHouseSimpleDuotone,
    PiHurricaneDuotone,
    PiIceCreamDuotone,
    PiIdentificationBadgeDuotone,
    PiIdentificationCardDuotone,
    PiImageBrokenDuotone,
    PiImageDuotone,
    PiImageSquareDuotone,
    PiImagesDuotone,
    PiImagesSquareDuotone,
    PiInfinityDuotone,
    PiInfoDuotone,
    PiInstagramLogoDuotone,
    PiIntersectDuotone,
    PiIntersectSquareDuotone,
    PiIntersectThreeDuotone,
    PiIntersectionDuotone,
    PiInvoiceDuotone,
    PiIslandDuotone,
    PiJarDuotone,
    PiJarLabelDuotone,
    PiJeepDuotone,
    PiJoystickDuotone,
    PiKanbanDuotone,
    PiKeyDuotone,
    PiKeyReturnDuotone,
    PiKeyboardDuotone,
    PiKeyholeDuotone,
    PiKnifeDuotone,
    PiLadderDuotone,
    PiLadderSimpleDuotone,
    PiLampDuotone,
    PiLampPendantDuotone,
    PiLaptopDuotone,
    PiLassoDuotone,
    PiLastfmLogoDuotone,
    PiLayoutDuotone,
    PiLeafDuotone,
    PiLecternDuotone,
    PiLegoDuotone,
    PiLegoSmileyDuotone,
    PiLessThanDuotone,
    PiLessThanOrEqualDuotone,
    PiLetterCircleHDuotone,
    PiLetterCirclePDuotone,
    PiLetterCircleVDuotone,
    PiLifebuoyDuotone,
    PiLightbulbDuotone,
    PiLightbulbFilamentDuotone,
    PiLighthouseDuotone,
    PiLightningADuotone,
    PiLightningDuotone,
    PiLightningSlashDuotone,
    PiLineSegmentDuotone,
    PiLineSegmentsDuotone,
    PiLineVerticalDuotone,
    PiLinkBreakDuotone,
    PiLinkDuotone,
    PiLinkSimpleBreakDuotone,
    PiLinkSimpleDuotone,
    PiLinkSimpleHorizontalBreakDuotone,
    PiLinkSimpleHorizontalDuotone,
    PiLinkedinLogoDuotone,
    PiLinktreeLogoDuotone,
    PiLinuxLogoDuotone,
    PiListBulletsDuotone,
    PiListChecksDuotone,
    PiListDashesDuotone,
    PiListDuotone,
    PiListHeartDuotone,
    PiListMagnifyingGlassDuotone,
    PiListNumbersDuotone,
    PiListPlusDuotone,
    PiListStarDuotone,
    PiLockDuotone,
    PiLockKeyDuotone,
    PiLockKeyOpenDuotone,
    PiLockLaminatedDuotone,
    PiLockLaminatedOpenDuotone,
    PiLockOpenDuotone,
    PiLockSimpleDuotone,
    PiLockSimpleOpenDuotone,
    PiLockersDuotone,
    PiLogDuotone,
    PiMagicWandDuotone,
    PiMagnetDuotone,
    PiMagnetStraightDuotone,
    PiMagnifyingGlassDuotone,
    PiMagnifyingGlassMinusDuotone,
    PiMagnifyingGlassPlusDuotone,
    PiMailboxDuotone,
    PiMapPinAreaDuotone,
    PiMapPinDuotone,
    PiMapPinLineDuotone,
    PiMapPinPlusDuotone,
    PiMapPinSimpleAreaDuotone,
    PiMapPinSimpleDuotone,
    PiMapPinSimpleLineDuotone,
    PiMapTrifoldDuotone,
    PiMarkdownLogoDuotone,
    PiMarkerCircleDuotone,
    PiMartiniDuotone,
    PiMaskHappyDuotone,
    PiMaskSadDuotone,
    PiMastodonLogoDuotone,
    PiMathOperationsDuotone,
    PiMatrixLogoDuotone,
    PiMedalDuotone,
    PiMedalMilitaryDuotone,
    PiMediumLogoDuotone,
    PiMegaphoneDuotone,
    PiMegaphoneSimpleDuotone,
    PiMemberOfDuotone,
    PiMemoryDuotone,
    PiMessengerLogoDuotone,
    PiMetaLogoDuotone,
    PiMeteorDuotone,
    PiMetronomeDuotone,
    PiMicrophoneDuotone,
    PiMicrophoneSlashDuotone,
    PiMicrophoneStageDuotone,
    PiMicroscopeDuotone,
    PiMicrosoftExcelLogoDuotone,
    PiMicrosoftOutlookLogoDuotone,
    PiMicrosoftPowerpointLogoDuotone,
    PiMicrosoftTeamsLogoDuotone,
    PiMicrosoftWordLogoDuotone,
    PiMinusCircleDuotone,
    PiMinusDuotone,
    PiMinusSquareDuotone,
    PiMoneyDuotone,
    PiMoneyWavyDuotone,
    PiMonitorArrowUpDuotone,
    PiMonitorDuotone,
    PiMonitorPlayDuotone,
    PiMoonDuotone,
    PiMoonStarsDuotone,
    PiMopedDuotone,
    PiMopedFrontDuotone,
    PiMosqueDuotone,
    PiMotorcycleDuotone,
    PiMountainsDuotone,
    PiMouseDuotone,
    PiMouseLeftClickDuotone,
    PiMouseMiddleClickDuotone,
    PiMouseRightClickDuotone,
    PiMouseScrollDuotone,
    PiMouseSimpleDuotone,
    PiMusicNoteDuotone,
    PiMusicNoteSimpleDuotone,
    PiMusicNotesDuotone,
    PiMusicNotesMinusDuotone,
    PiMusicNotesPlusDuotone,
    PiMusicNotesSimpleDuotone,
    PiNavigationArrowDuotone,
    PiNeedleDuotone,
    PiNetworkDuotone,
    PiNetworkSlashDuotone,
    PiNetworkXDuotone,
    PiNewspaperClippingDuotone,
    PiNewspaperDuotone,
    PiNotEqualsDuotone,
    PiNotMemberOfDuotone,
    PiNotSubsetOfDuotone,
    PiNotSupersetOfDuotone,
    PiNotchesDuotone,
    PiNoteBlankDuotone,
    PiNoteDuotone,
    PiNotePencilDuotone,
    PiNotebookDuotone,
    PiNotepadDuotone,
    PiNotificationDuotone,
    PiNotionLogoDuotone,
    PiNuclearPlantDuotone,
    PiNumberCircleEightDuotone,
    PiNumberCircleFiveDuotone,
    PiNumberCircleFourDuotone,
    PiNumberCircleNineDuotone,
    PiNumberCircleOneDuotone,
    PiNumberCircleSevenDuotone,
    PiNumberCircleSixDuotone,
    PiNumberCircleThreeDuotone,
    PiNumberCircleTwoDuotone,
    PiNumberCircleZeroDuotone,
    PiNumberEightDuotone,
    PiNumberFiveDuotone,
    PiNumberFourDuotone,
    PiNumberNineDuotone,
    PiNumberOneDuotone,
    PiNumberSevenDuotone,
    PiNumberSixDuotone,
    PiNumberSquareEightDuotone,
    PiNumberSquareFiveDuotone,
    PiNumberSquareFourDuotone,
    PiNumberSquareNineDuotone,
    PiNumberSquareOneDuotone,
    PiNumberSquareSevenDuotone,
    PiNumberSquareSixDuotone,
    PiNumberSquareThreeDuotone,
    PiNumberSquareTwoDuotone,
    PiNumberSquareZeroDuotone,
    PiNumberThreeDuotone,
    PiNumberTwoDuotone,
    PiNumberZeroDuotone,
    PiNumpadDuotone,
    PiNutDuotone,
    PiNyTimesLogoDuotone,
    PiOctagonDuotone,
    PiOfficeChairDuotone,
    PiOnigiriDuotone,
    PiOpenAiLogoDuotone,
    PiOptionDuotone,
    PiOrangeDuotone,
    PiOrangeSliceDuotone,
    PiOvenDuotone,
    PiPackageDuotone,
    PiPaintBrushBroadDuotone,
    PiPaintBrushDuotone,
    PiPaintBrushHouseholdDuotone,
    PiPaintBucketDuotone,
    PiPaintRollerDuotone,
    PiPaletteDuotone,
    PiPanoramaDuotone,
    PiPantsDuotone,
    PiPaperPlaneDuotone,
    PiPaperPlaneRightDuotone,
    PiPaperPlaneTiltDuotone,
    PiPaperclipDuotone,
    PiPaperclipHorizontalDuotone,
    PiParachuteDuotone,
    PiParagraphDuotone,
    PiParallelogramDuotone,
    PiParkDuotone,
    PiPasswordDuotone,
    PiPathDuotone,
    PiPatreonLogoDuotone,
    PiPauseCircleDuotone,
    PiPauseDuotone,
    PiPawPrintDuotone,
    PiPaypalLogoDuotone,
    PiPeaceDuotone,
    PiPenDuotone,
    PiPenNibDuotone,
    PiPenNibStraightDuotone,
    PiPencilCircleDuotone,
    PiPencilDuotone,
    PiPencilLineDuotone,
    PiPencilRulerDuotone,
    PiPencilSimpleDuotone,
    PiPencilSimpleLineDuotone,
    PiPencilSimpleSlashDuotone,
    PiPencilSlashDuotone,
    PiPentagonDuotone,
    PiPentagramDuotone,
    PiPepperDuotone,
    PiPercentDuotone,
    PiPersonArmsSpreadDuotone,
    PiPersonDuotone,
    PiPersonSimpleBikeDuotone,
    PiPersonSimpleCircleDuotone,
    PiPersonSimpleDuotone,
    PiPersonSimpleHikeDuotone,
    PiPersonSimpleRunDuotone,
    PiPersonSimpleSkiDuotone,
    PiPersonSimpleSnowboardDuotone,
    PiPersonSimpleSwimDuotone,
    PiPersonSimpleTaiChiDuotone,
    PiPersonSimpleThrowDuotone,
    PiPersonSimpleWalkDuotone,
    PiPerspectiveDuotone,
    PiPhoneCallDuotone,
    PiPhoneDisconnectDuotone,
    PiPhoneDuotone,
    PiPhoneIncomingDuotone,
    PiPhoneListDuotone,
    PiPhoneOutgoingDuotone,
    PiPhonePauseDuotone,
    PiPhonePlusDuotone,
    PiPhoneSlashDuotone,
    PiPhoneTransferDuotone,
    PiPhoneXDuotone,
    PiPhosphorLogoDuotone,
    PiPiDuotone,
    PiPianoKeysDuotone,
    PiPicnicTableDuotone,
    PiPictureInPictureDuotone,
    PiPiggyBankDuotone,
    PiPillDuotone,
    PiPingPongDuotone,
    PiPintGlassDuotone,
    PiPinterestLogoDuotone,
    PiPinwheelDuotone,
    PiPipeDuotone,
    PiPipeWrenchDuotone,
    PiPixLogoDuotone,
    PiPizzaDuotone,
    PiPlaceholderDuotone,
    PiPlanetDuotone,
    PiPlantDuotone,
    PiPlayCircleDuotone,
    PiPlayDuotone,
    PiPlayPauseDuotone,
    PiPlaylistDuotone,
    PiPlugChargingDuotone,
    PiPlugDuotone,
    PiPlugsConnectedDuotone,
    PiPlugsDuotone,
    PiPlusCircleDuotone,
    PiPlusDuotone,
    PiPlusMinusDuotone,
    PiPlusSquareDuotone,
    PiPokerChipDuotone,
    PiPoliceCarDuotone,
    PiPolygonDuotone,
    PiPopcornDuotone,
    PiPopsicleDuotone,
    PiPottedPlantDuotone,
    PiPowerDuotone,
    PiPrescriptionDuotone,
    PiPresentationChartDuotone,
    PiPresentationDuotone,
    PiPrinterDuotone,
    PiProhibitDuotone,
    PiProhibitInsetDuotone,
    PiProjectorScreenChartDuotone,
    PiProjectorScreenDuotone,
    PiPulseDuotone,
    PiPushPinDuotone,
    PiPushPinSimpleDuotone,
    PiPushPinSimpleSlashDuotone,
    PiPushPinSlashDuotone,
    PiPuzzlePieceDuotone,
    PiQrCodeDuotone,
    PiQuestionDuotone,
    PiQuestionMarkDuotone,
    PiQueueDuotone,
    PiQuotesDuotone,
    PiRabbitDuotone,
    PiRacquetDuotone,
    PiRadicalDuotone,
    PiRadioButtonDuotone,
    PiRadioDuotone,
    PiRadioactiveDuotone,
    PiRainbowCloudDuotone,
    PiRainbowDuotone,
    PiRankingDuotone,
    PiReadCvLogoDuotone,
    PiReceiptDuotone,
    PiReceiptXDuotone,
    PiRecordDuotone,
    PiRectangleDashedDuotone,
    PiRectangleDuotone,
    PiRecycleDuotone,
    PiRedditLogoDuotone,
    PiRepeatDuotone,
    PiRepeatOnceDuotone,
    PiReplitLogoDuotone,
    PiResizeDuotone,
    PiRewindCircleDuotone,
    PiRewindDuotone,
    PiRoadHorizonDuotone,
    PiRobotDuotone,
    PiRocketDuotone,
    PiRocketLaunchDuotone,
    PiRowsDuotone,
    PiRowsPlusBottomDuotone,
    PiRowsPlusTopDuotone,
    PiRssDuotone,
    PiRssSimpleDuotone,
    PiRugDuotone,
    PiRulerDuotone,
    PiSailboatDuotone,
    PiScalesDuotone,
    PiScanDuotone,
    PiScanSmileyDuotone,
    PiScissorsDuotone,
    PiScooterDuotone,
    PiScreencastDuotone,
    PiScrewdriverDuotone,
    PiScribbleDuotone,
    PiScribbleLoopDuotone,
    PiScrollDuotone,
    PiSealCheckDuotone,
    PiSealDuotone,
    PiSealPercentDuotone,
    PiSealQuestionDuotone,
    PiSealWarningDuotone,
    PiSeatDuotone,
    PiSeatbeltDuotone,
    PiSecurityCameraDuotone,
    PiSelectionAllDuotone,
    PiSelectionBackgroundDuotone,
    PiSelectionDuotone,
    PiSelectionForegroundDuotone,
    PiSelectionInverseDuotone,
    PiSelectionPlusDuotone,
    PiSelectionSlashDuotone,
    PiShapesDuotone,
    PiShareDuotone,
    PiShareFatDuotone,
    PiShareNetworkDuotone,
    PiShieldCheckDuotone,
    PiShieldCheckeredDuotone,
    PiShieldChevronDuotone,
    PiShieldDuotone,
    PiShieldPlusDuotone,
    PiShieldSlashDuotone,
    PiShieldStarDuotone,
    PiShieldWarningDuotone,
    PiShippingContainerDuotone,
    PiShirtFoldedDuotone,
    PiShootingStarDuotone,
    PiShoppingBagDuotone,
    PiShoppingBagOpenDuotone,
    PiShoppingCartDuotone,
    PiShoppingCartSimpleDuotone,
    PiShovelDuotone,
    PiShowerDuotone,
    PiShrimpDuotone,
    PiShuffleAngularDuotone,
    PiShuffleDuotone,
    PiShuffleSimpleDuotone,
    PiSidebarDuotone,
    PiSidebarSimpleDuotone,
    PiSigmaDuotone,
    PiSignInDuotone,
    PiSignOutDuotone,
    PiSignatureDuotone,
    PiSignpostDuotone,
    PiSimCardDuotone,
    PiSirenDuotone,
    PiSketchLogoDuotone,
    PiSkipBackCircleDuotone,
    PiSkipBackDuotone,
    PiSkipForwardCircleDuotone,
    PiSkipForwardDuotone,
    PiSkullDuotone,
    PiSkypeLogoDuotone,
    PiSlackLogoDuotone,
    PiSlidersDuotone,
    PiSlidersHorizontalDuotone,
    PiSlideshowDuotone,
    PiSmileyAngryDuotone,
    PiSmileyBlankDuotone,
    PiSmileyDuotone,
    PiSmileyMehDuotone,
    PiSmileyMeltingDuotone,
    PiSmileyNervousDuotone,
    PiSmileySadDuotone,
    PiSmileyStickerDuotone,
    PiSmileyWinkDuotone,
    PiSmileyXEyesDuotone,
    PiSnapchatLogoDuotone,
    PiSneakerDuotone,
    PiSneakerMoveDuotone,
    PiSnowflakeDuotone,
    PiSoccerBallDuotone,
    PiSockDuotone,
    PiSolarPanelDuotone,
    PiSolarRoofDuotone,
    PiSortAscendingDuotone,
    PiSortDescendingDuotone,
    PiSoundcloudLogoDuotone,
    PiSpadeDuotone,
    PiSparkleDuotone,
    PiSpeakerHifiDuotone,
    PiSpeakerHighDuotone,
    PiSpeakerLowDuotone,
    PiSpeakerNoneDuotone,
    PiSpeakerSimpleHighDuotone,
    PiSpeakerSimpleLowDuotone,
    PiSpeakerSimpleNoneDuotone,
    PiSpeakerSimpleSlashDuotone,
    PiSpeakerSimpleXDuotone,
    PiSpeakerSlashDuotone,
    PiSpeakerXDuotone,
    PiSpeedometerDuotone,
    PiSphereDuotone,
    PiSpinnerBallDuotone,
    PiSpinnerDuotone,
    PiSpinnerGapDuotone,
    PiSpiralDuotone,
    PiSplitHorizontalDuotone,
    PiSplitVerticalDuotone,
    PiSpotifyLogoDuotone,
    PiSprayBottleDuotone,
    PiSquareDuotone,
    PiSquareHalfBottomDuotone,
    PiSquareHalfDuotone,
    PiSquareLogoDuotone,
    PiSquareSplitHorizontalDuotone,
    PiSquareSplitVerticalDuotone,
    PiSquaresFourDuotone,
    PiStackDuotone,
    PiStackMinusDuotone,
    PiStackOverflowLogoDuotone,
    PiStackPlusDuotone,
    PiStackSimpleDuotone,
    PiStairsDuotone,
    PiStampDuotone,
    PiStandardDefinitionDuotone,
    PiStarAndCrescentDuotone,
    PiStarDuotone,
    PiStarFourDuotone,
    PiStarHalfDuotone,
    PiStarOfDavidDuotone,
    PiSteamLogoDuotone,
    PiSteeringWheelDuotone,
    PiStepsDuotone,
    PiStethoscopeDuotone,
    PiStickerDuotone,
    PiStoolDuotone,
    PiStopCircleDuotone,
    PiStopDuotone,
    PiStorefrontDuotone,
    PiStrategyDuotone,
    PiStripeLogoDuotone,
    PiStudentDuotone,
    PiSubsetOfDuotone,
    PiSubsetProperOfDuotone,
    PiSubtitlesDuotone,
    PiSubtitlesSlashDuotone,
    PiSubtractDuotone,
    PiSubtractSquareDuotone,
    PiSubwayDuotone,
    PiSuitcaseDuotone,
    PiSuitcaseRollingDuotone,
    PiSuitcaseSimpleDuotone,
    PiSunDimDuotone,
    PiSunDuotone,
    PiSunHorizonDuotone,
    PiSunglassesDuotone,
    PiSupersetOfDuotone,
    PiSupersetProperOfDuotone,
    PiSwapDuotone,
    PiSwatchesDuotone,
    PiSwimmingPoolDuotone,
    PiSwordDuotone,
    PiSynagogueDuotone,
    PiSyringeDuotone,
    PiTShirtDuotone,
    PiTableDuotone,
    PiTabsDuotone,
    PiTagChevronDuotone,
    PiTagDuotone,
    PiTagSimpleDuotone,
    PiTargetDuotone,
    PiTaxiDuotone,
    PiTeaBagDuotone,
    PiTelegramLogoDuotone,
    PiTelevisionDuotone,
    PiTelevisionSimpleDuotone,
    PiTennisBallDuotone,
    PiTentDuotone,
    PiTerminalDuotone,
    PiTerminalWindowDuotone,
    PiTestTubeDuotone,
    PiTextAUnderlineDuotone,
    PiTextAaDuotone,
    PiTextAlignCenterDuotone,
    PiTextAlignJustifyDuotone,
    PiTextAlignLeftDuotone,
    PiTextAlignRightDuotone,
    PiTextBDuotone,
    PiTextColumnsDuotone,
    PiTextHDuotone,
    PiTextHFiveDuotone,
    PiTextHFourDuotone,
    PiTextHOneDuotone,
    PiTextHSixDuotone,
    PiTextHThreeDuotone,
    PiTextHTwoDuotone,
    PiTextIndentDuotone,
    PiTextItalicDuotone,
    PiTextOutdentDuotone,
    PiTextStrikethroughDuotone,
    PiTextSubscriptDuotone,
    PiTextSuperscriptDuotone,
    PiTextTDuotone,
    PiTextTSlashDuotone,
    PiTextUnderlineDuotone,
    PiTextboxDuotone,
    PiThermometerColdDuotone,
    PiThermometerDuotone,
    PiThermometerHotDuotone,
    PiThermometerSimpleDuotone,
    PiThreadsLogoDuotone,
    PiThreeDDuotone,
    PiThumbsDownDuotone,
    PiThumbsUpDuotone,
    PiTicketDuotone,
    PiTidalLogoDuotone,
    PiTiktokLogoDuotone,
    PiTildeDuotone,
    PiTimerDuotone,
    PiTipJarDuotone,
    PiTipiDuotone,
    PiTireDuotone,
    PiToggleLeftDuotone,
    PiToggleRightDuotone,
    PiToiletDuotone,
    PiToiletPaperDuotone,
    PiToolboxDuotone,
    PiToothDuotone,
    PiTornadoDuotone,
    PiToteDuotone,
    PiToteSimpleDuotone,
    PiTowelDuotone,
    PiTractorDuotone,
    PiTrademarkDuotone,
    PiTrademarkRegisteredDuotone,
    PiTrafficConeDuotone,
    PiTrafficSignDuotone,
    PiTrafficSignalDuotone,
    PiTrainDuotone,
    PiTrainRegionalDuotone,
    PiTrainSimpleDuotone,
    PiTramDuotone,
    PiTranslateDuotone,
    PiTrashDuotone,
    PiTrashSimpleDuotone,
    PiTrayArrowDownDuotone,
    PiTrayArrowUpDuotone,
    PiTrayDuotone,
    PiTreasureChestDuotone,
    PiTreeDuotone,
    PiTreeEvergreenDuotone,
    PiTreePalmDuotone,
    PiTreeStructureDuotone,
    PiTreeViewDuotone,
    PiTrendDownDuotone,
    PiTrendUpDuotone,
    PiTriangleDashedDuotone,
    PiTriangleDuotone,
    PiTrolleyDuotone,
    PiTrolleySuitcaseDuotone,
    PiTrophyDuotone,
    PiTruckDuotone,
    PiTruckTrailerDuotone,
    PiTumblrLogoDuotone,
    PiTwitchLogoDuotone,
    PiTwitterLogoDuotone,
    PiUmbrellaDuotone,
    PiUmbrellaSimpleDuotone,
    PiUnionDuotone,
    PiUniteDuotone,
    PiUniteSquareDuotone,
    PiUploadDuotone,
    PiUploadSimpleDuotone,
    PiUsbDuotone,
    PiUserCheckDuotone,
    PiUserCircleCheckDuotone,
    PiUserCircleDashedDuotone,
    PiUserCircleDuotone,
    PiUserCircleGearDuotone,
    PiUserCircleMinusDuotone,
    PiUserCirclePlusDuotone,
    PiUserDuotone,
    PiUserFocusDuotone,
    PiUserGearDuotone,
    PiUserListDuotone,
    PiUserMinusDuotone,
    PiUserPlusDuotone,
    PiUserRectangleDuotone,
    PiUserSoundDuotone,
    PiUserSquareDuotone,
    PiUserSwitchDuotone,
    PiUsersDuotone,
    PiUsersFourDuotone,
    PiUsersThreeDuotone,
    PiVanDuotone,
    PiVaultDuotone,
    PiVectorThreeDuotone,
    PiVectorTwoDuotone,
    PiVibrateDuotone,
    PiVideoCameraDuotone,
    PiVideoCameraSlashDuotone,
    PiVideoConferenceDuotone,
    PiVideoDuotone,
    PiVignetteDuotone,
    PiVinylRecordDuotone,
    PiVirtualRealityDuotone,
    PiVirusDuotone,
    PiVisorDuotone,
    PiVoicemailDuotone,
    PiVolleyballDuotone,
    PiWallDuotone,
    PiWalletDuotone,
    PiWarehouseDuotone,
    PiWarningCircleDuotone,
    PiWarningDiamondDuotone,
    PiWarningDuotone,
    PiWarningOctagonDuotone,
    PiWashingMachineDuotone,
    PiWatchDuotone,
    PiWaveSawtoothDuotone,
    PiWaveSineDuotone,
    PiWaveSquareDuotone,
    PiWaveTriangleDuotone,
    PiWaveformDuotone,
    PiWaveformSlashDuotone,
    PiWavesDuotone,
    PiWebcamDuotone,
} from "react-icons/pi"

export function nameToReactIcon_pi_2(iconName: string): IconType | undefined {

    switch(iconName) {
        case "pi:PiDiceSixDuotone":
            return PiDiceSixDuotone;
        case "pi:PiDiceThreeDuotone":
            return PiDiceThreeDuotone;
        case "pi:PiDiceTwoDuotone":
            return PiDiceTwoDuotone;
        case "pi:PiDiscDuotone":
            return PiDiscDuotone;
        case "pi:PiDiscoBallDuotone":
            return PiDiscoBallDuotone;
        case "pi:PiDiscordLogoDuotone":
            return PiDiscordLogoDuotone;
        case "pi:PiDivideDuotone":
            return PiDivideDuotone;
        case "pi:PiDnaDuotone":
            return PiDnaDuotone;
        case "pi:PiDogDuotone":
            return PiDogDuotone;
        case "pi:PiDoorDuotone":
            return PiDoorDuotone;
        case "pi:PiDoorOpenDuotone":
            return PiDoorOpenDuotone;
        case "pi:PiDotDuotone":
            return PiDotDuotone;
        case "pi:PiDotOutlineDuotone":
            return PiDotOutlineDuotone;
        case "pi:PiDotsNineDuotone":
            return PiDotsNineDuotone;
        case "pi:PiDotsSixDuotone":
            return PiDotsSixDuotone;
        case "pi:PiDotsSixVerticalDuotone":
            return PiDotsSixVerticalDuotone;
        case "pi:PiDotsThreeCircleDuotone":
            return PiDotsThreeCircleDuotone;
        case "pi:PiDotsThreeCircleVerticalDuotone":
            return PiDotsThreeCircleVerticalDuotone;
        case "pi:PiDotsThreeDuotone":
            return PiDotsThreeDuotone;
        case "pi:PiDotsThreeOutlineDuotone":
            return PiDotsThreeOutlineDuotone;
        case "pi:PiDotsThreeOutlineVerticalDuotone":
            return PiDotsThreeOutlineVerticalDuotone;
        case "pi:PiDotsThreeVerticalDuotone":
            return PiDotsThreeVerticalDuotone;
        case "pi:PiDownloadDuotone":
            return PiDownloadDuotone;
        case "pi:PiDownloadSimpleDuotone":
            return PiDownloadSimpleDuotone;
        case "pi:PiDressDuotone":
            return PiDressDuotone;
        case "pi:PiDresserDuotone":
            return PiDresserDuotone;
        case "pi:PiDribbbleLogoDuotone":
            return PiDribbbleLogoDuotone;
        case "pi:PiDroneDuotone":
            return PiDroneDuotone;
        case "pi:PiDropDuotone":
            return PiDropDuotone;
        case "pi:PiDropHalfBottomDuotone":
            return PiDropHalfBottomDuotone;
        case "pi:PiDropHalfDuotone":
            return PiDropHalfDuotone;
        case "pi:PiDropSimpleDuotone":
            return PiDropSimpleDuotone;
        case "pi:PiDropSlashDuotone":
            return PiDropSlashDuotone;
        case "pi:PiDropboxLogoDuotone":
            return PiDropboxLogoDuotone;
        case "pi:PiEarDuotone":
            return PiEarDuotone;
        case "pi:PiEarSlashDuotone":
            return PiEarSlashDuotone;
        case "pi:PiEggCrackDuotone":
            return PiEggCrackDuotone;
        case "pi:PiEggDuotone":
            return PiEggDuotone;
        case "pi:PiEjectDuotone":
            return PiEjectDuotone;
        case "pi:PiEjectSimpleDuotone":
            return PiEjectSimpleDuotone;
        case "pi:PiElevatorDuotone":
            return PiElevatorDuotone;
        case "pi:PiEmptyDuotone":
            return PiEmptyDuotone;
        case "pi:PiEngineDuotone":
            return PiEngineDuotone;
        case "pi:PiEnvelopeDuotone":
            return PiEnvelopeDuotone;
        case "pi:PiEnvelopeOpenDuotone":
            return PiEnvelopeOpenDuotone;
        case "pi:PiEnvelopeSimpleDuotone":
            return PiEnvelopeSimpleDuotone;
        case "pi:PiEnvelopeSimpleOpenDuotone":
            return PiEnvelopeSimpleOpenDuotone;
        case "pi:PiEqualizerDuotone":
            return PiEqualizerDuotone;
        case "pi:PiEqualsDuotone":
            return PiEqualsDuotone;
        case "pi:PiEraserDuotone":
            return PiEraserDuotone;
        case "pi:PiEscalatorDownDuotone":
            return PiEscalatorDownDuotone;
        case "pi:PiEscalatorUpDuotone":
            return PiEscalatorUpDuotone;
        case "pi:PiExamDuotone":
            return PiExamDuotone;
        case "pi:PiExclamationMarkDuotone":
            return PiExclamationMarkDuotone;
        case "pi:PiExcludeDuotone":
            return PiExcludeDuotone;
        case "pi:PiExcludeSquareDuotone":
            return PiExcludeSquareDuotone;
        case "pi:PiExportDuotone":
            return PiExportDuotone;
        case "pi:PiEyeClosedDuotone":
            return PiEyeClosedDuotone;
        case "pi:PiEyeDuotone":
            return PiEyeDuotone;
        case "pi:PiEyeSlashDuotone":
            return PiEyeSlashDuotone;
        case "pi:PiEyedropperDuotone":
            return PiEyedropperDuotone;
        case "pi:PiEyedropperSampleDuotone":
            return PiEyedropperSampleDuotone;
        case "pi:PiEyeglassesDuotone":
            return PiEyeglassesDuotone;
        case "pi:PiEyesDuotone":
            return PiEyesDuotone;
        case "pi:PiFaceMaskDuotone":
            return PiFaceMaskDuotone;
        case "pi:PiFacebookLogoDuotone":
            return PiFacebookLogoDuotone;
        case "pi:PiFactoryDuotone":
            return PiFactoryDuotone;
        case "pi:PiFadersDuotone":
            return PiFadersDuotone;
        case "pi:PiFadersHorizontalDuotone":
            return PiFadersHorizontalDuotone;
        case "pi:PiFalloutShelterDuotone":
            return PiFalloutShelterDuotone;
        case "pi:PiFanDuotone":
            return PiFanDuotone;
        case "pi:PiFarmDuotone":
            return PiFarmDuotone;
        case "pi:PiFastForwardCircleDuotone":
            return PiFastForwardCircleDuotone;
        case "pi:PiFastForwardDuotone":
            return PiFastForwardDuotone;
        case "pi:PiFeatherDuotone":
            return PiFeatherDuotone;
        case "pi:PiFediverseLogoDuotone":
            return PiFediverseLogoDuotone;
        case "pi:PiFigmaLogoDuotone":
            return PiFigmaLogoDuotone;
        case "pi:PiFileArchiveDuotone":
            return PiFileArchiveDuotone;
        case "pi:PiFileArrowDownDuotone":
            return PiFileArrowDownDuotone;
        case "pi:PiFileArrowUpDuotone":
            return PiFileArrowUpDuotone;
        case "pi:PiFileAudioDuotone":
            return PiFileAudioDuotone;
        case "pi:PiFileCDuotone":
            return PiFileCDuotone;
        case "pi:PiFileCSharpDuotone":
            return PiFileCSharpDuotone;
        case "pi:PiFileCloudDuotone":
            return PiFileCloudDuotone;
        case "pi:PiFileCodeDuotone":
            return PiFileCodeDuotone;
        case "pi:PiFileCppDuotone":
            return PiFileCppDuotone;
        case "pi:PiFileCssDuotone":
            return PiFileCssDuotone;
        case "pi:PiFileCsvDuotone":
            return PiFileCsvDuotone;
        case "pi:PiFileDashedDuotone":
            return PiFileDashedDuotone;
        case "pi:PiFileDocDuotone":
            return PiFileDocDuotone;
        case "pi:PiFileDuotone":
            return PiFileDuotone;
        case "pi:PiFileHtmlDuotone":
            return PiFileHtmlDuotone;
        case "pi:PiFileImageDuotone":
            return PiFileImageDuotone;
        case "pi:PiFileIniDuotone":
            return PiFileIniDuotone;
        case "pi:PiFileJpgDuotone":
            return PiFileJpgDuotone;
        case "pi:PiFileJsDuotone":
            return PiFileJsDuotone;
        case "pi:PiFileJsxDuotone":
            return PiFileJsxDuotone;
        case "pi:PiFileLockDuotone":
            return PiFileLockDuotone;
        case "pi:PiFileMagnifyingGlassDuotone":
            return PiFileMagnifyingGlassDuotone;
        case "pi:PiFileMdDuotone":
            return PiFileMdDuotone;
        case "pi:PiFileMinusDuotone":
            return PiFileMinusDuotone;
        case "pi:PiFilePdfDuotone":
            return PiFilePdfDuotone;
        case "pi:PiFilePlusDuotone":
            return PiFilePlusDuotone;
        case "pi:PiFilePngDuotone":
            return PiFilePngDuotone;
        case "pi:PiFilePptDuotone":
            return PiFilePptDuotone;
        case "pi:PiFilePyDuotone":
            return PiFilePyDuotone;
        case "pi:PiFileRsDuotone":
            return PiFileRsDuotone;
        case "pi:PiFileSqlDuotone":
            return PiFileSqlDuotone;
        case "pi:PiFileSvgDuotone":
            return PiFileSvgDuotone;
        case "pi:PiFileTextDuotone":
            return PiFileTextDuotone;
        case "pi:PiFileTsDuotone":
            return PiFileTsDuotone;
        case "pi:PiFileTsxDuotone":
            return PiFileTsxDuotone;
        case "pi:PiFileTxtDuotone":
            return PiFileTxtDuotone;
        case "pi:PiFileVideoDuotone":
            return PiFileVideoDuotone;
        case "pi:PiFileVueDuotone":
            return PiFileVueDuotone;
        case "pi:PiFileXDuotone":
            return PiFileXDuotone;
        case "pi:PiFileXlsDuotone":
            return PiFileXlsDuotone;
        case "pi:PiFileZipDuotone":
            return PiFileZipDuotone;
        case "pi:PiFilesDuotone":
            return PiFilesDuotone;
        case "pi:PiFilmReelDuotone":
            return PiFilmReelDuotone;
        case "pi:PiFilmScriptDuotone":
            return PiFilmScriptDuotone;
        case "pi:PiFilmSlateDuotone":
            return PiFilmSlateDuotone;
        case "pi:PiFilmStripDuotone":
            return PiFilmStripDuotone;
        case "pi:PiFingerprintDuotone":
            return PiFingerprintDuotone;
        case "pi:PiFingerprintSimpleDuotone":
            return PiFingerprintSimpleDuotone;
        case "pi:PiFinnTheHumanDuotone":
            return PiFinnTheHumanDuotone;
        case "pi:PiFireDuotone":
            return PiFireDuotone;
        case "pi:PiFireExtinguisherDuotone":
            return PiFireExtinguisherDuotone;
        case "pi:PiFireSimpleDuotone":
            return PiFireSimpleDuotone;
        case "pi:PiFireTruckDuotone":
            return PiFireTruckDuotone;
        case "pi:PiFirstAidDuotone":
            return PiFirstAidDuotone;
        case "pi:PiFirstAidKitDuotone":
            return PiFirstAidKitDuotone;
        case "pi:PiFishDuotone":
            return PiFishDuotone;
        case "pi:PiFishSimpleDuotone":
            return PiFishSimpleDuotone;
        case "pi:PiFlagBannerDuotone":
            return PiFlagBannerDuotone;
        case "pi:PiFlagBannerFoldDuotone":
            return PiFlagBannerFoldDuotone;
        case "pi:PiFlagCheckeredDuotone":
            return PiFlagCheckeredDuotone;
        case "pi:PiFlagDuotone":
            return PiFlagDuotone;
        case "pi:PiFlagPennantDuotone":
            return PiFlagPennantDuotone;
        case "pi:PiFlameDuotone":
            return PiFlameDuotone;
        case "pi:PiFlashlightDuotone":
            return PiFlashlightDuotone;
        case "pi:PiFlaskDuotone":
            return PiFlaskDuotone;
        case "pi:PiFlipHorizontalDuotone":
            return PiFlipHorizontalDuotone;
        case "pi:PiFlipVerticalDuotone":
            return PiFlipVerticalDuotone;
        case "pi:PiFloppyDiskBackDuotone":
            return PiFloppyDiskBackDuotone;
        case "pi:PiFloppyDiskDuotone":
            return PiFloppyDiskDuotone;
        case "pi:PiFlowArrowDuotone":
            return PiFlowArrowDuotone;
        case "pi:PiFlowerDuotone":
            return PiFlowerDuotone;
        case "pi:PiFlowerLotusDuotone":
            return PiFlowerLotusDuotone;
        case "pi:PiFlowerTulipDuotone":
            return PiFlowerTulipDuotone;
        case "pi:PiFlyingSaucerDuotone":
            return PiFlyingSaucerDuotone;
        case "pi:PiFolderDashedDuotone":
            return PiFolderDashedDuotone;
        case "pi:PiFolderDuotone":
            return PiFolderDuotone;
        case "pi:PiFolderLockDuotone":
            return PiFolderLockDuotone;
        case "pi:PiFolderMinusDuotone":
            return PiFolderMinusDuotone;
        case "pi:PiFolderOpenDuotone":
            return PiFolderOpenDuotone;
        case "pi:PiFolderPlusDuotone":
            return PiFolderPlusDuotone;
        case "pi:PiFolderSimpleDashedDuotone":
            return PiFolderSimpleDashedDuotone;
        case "pi:PiFolderSimpleDuotone":
            return PiFolderSimpleDuotone;
        case "pi:PiFolderSimpleLockDuotone":
            return PiFolderSimpleLockDuotone;
        case "pi:PiFolderSimpleMinusDuotone":
            return PiFolderSimpleMinusDuotone;
        case "pi:PiFolderSimplePlusDuotone":
            return PiFolderSimplePlusDuotone;
        case "pi:PiFolderSimpleStarDuotone":
            return PiFolderSimpleStarDuotone;
        case "pi:PiFolderSimpleUserDuotone":
            return PiFolderSimpleUserDuotone;
        case "pi:PiFolderStarDuotone":
            return PiFolderStarDuotone;
        case "pi:PiFolderUserDuotone":
            return PiFolderUserDuotone;
        case "pi:PiFoldersDuotone":
            return PiFoldersDuotone;
        case "pi:PiFootballDuotone":
            return PiFootballDuotone;
        case "pi:PiFootballHelmetDuotone":
            return PiFootballHelmetDuotone;
        case "pi:PiFootprintsDuotone":
            return PiFootprintsDuotone;
        case "pi:PiForkKnifeDuotone":
            return PiForkKnifeDuotone;
        case "pi:PiFourKDuotone":
            return PiFourKDuotone;
        case "pi:PiFrameCornersDuotone":
            return PiFrameCornersDuotone;
        case "pi:PiFramerLogoDuotone":
            return PiFramerLogoDuotone;
        case "pi:PiFunctionDuotone":
            return PiFunctionDuotone;
        case "pi:PiFunnelDuotone":
            return PiFunnelDuotone;
        case "pi:PiFunnelSimpleDuotone":
            return PiFunnelSimpleDuotone;
        case "pi:PiFunnelSimpleXDuotone":
            return PiFunnelSimpleXDuotone;
        case "pi:PiFunnelXDuotone":
            return PiFunnelXDuotone;
        case "pi:PiGameControllerDuotone":
            return PiGameControllerDuotone;
        case "pi:PiGarageDuotone":
            return PiGarageDuotone;
        case "pi:PiGasCanDuotone":
            return PiGasCanDuotone;
        case "pi:PiGasPumpDuotone":
            return PiGasPumpDuotone;
        case "pi:PiGaugeDuotone":
            return PiGaugeDuotone;
        case "pi:PiGavelDuotone":
            return PiGavelDuotone;
        case "pi:PiGearDuotone":
            return PiGearDuotone;
        case "pi:PiGearFineDuotone":
            return PiGearFineDuotone;
        case "pi:PiGearSixDuotone":
            return PiGearSixDuotone;
        case "pi:PiGenderFemaleDuotone":
            return PiGenderFemaleDuotone;
        case "pi:PiGenderIntersexDuotone":
            return PiGenderIntersexDuotone;
        case "pi:PiGenderMaleDuotone":
            return PiGenderMaleDuotone;
        case "pi:PiGenderNeuterDuotone":
            return PiGenderNeuterDuotone;
        case "pi:PiGenderNonbinaryDuotone":
            return PiGenderNonbinaryDuotone;
        case "pi:PiGenderTransgenderDuotone":
            return PiGenderTransgenderDuotone;
        case "pi:PiGhostDuotone":
            return PiGhostDuotone;
        case "pi:PiGifDuotone":
            return PiGifDuotone;
        case "pi:PiGiftDuotone":
            return PiGiftDuotone;
        case "pi:PiGitBranchDuotone":
            return PiGitBranchDuotone;
        case "pi:PiGitCommitDuotone":
            return PiGitCommitDuotone;
        case "pi:PiGitDiffDuotone":
            return PiGitDiffDuotone;
        case "pi:PiGitForkDuotone":
            return PiGitForkDuotone;
        case "pi:PiGitMergeDuotone":
            return PiGitMergeDuotone;
        case "pi:PiGitPullRequestDuotone":
            return PiGitPullRequestDuotone;
        case "pi:PiGithubLogoDuotone":
            return PiGithubLogoDuotone;
        case "pi:PiGitlabLogoDuotone":
            return PiGitlabLogoDuotone;
        case "pi:PiGitlabLogoSimpleDuotone":
            return PiGitlabLogoSimpleDuotone;
        case "pi:PiGlobeDuotone":
            return PiGlobeDuotone;
        case "pi:PiGlobeHemisphereEastDuotone":
            return PiGlobeHemisphereEastDuotone;
        case "pi:PiGlobeHemisphereWestDuotone":
            return PiGlobeHemisphereWestDuotone;
        case "pi:PiGlobeSimpleDuotone":
            return PiGlobeSimpleDuotone;
        case "pi:PiGlobeSimpleXDuotone":
            return PiGlobeSimpleXDuotone;
        case "pi:PiGlobeStandDuotone":
            return PiGlobeStandDuotone;
        case "pi:PiGlobeXDuotone":
            return PiGlobeXDuotone;
        case "pi:PiGogglesDuotone":
            return PiGogglesDuotone;
        case "pi:PiGolfDuotone":
            return PiGolfDuotone;
        case "pi:PiGoodreadsLogoDuotone":
            return PiGoodreadsLogoDuotone;
        case "pi:PiGoogleCardboardLogoDuotone":
            return PiGoogleCardboardLogoDuotone;
        case "pi:PiGoogleChromeLogoDuotone":
            return PiGoogleChromeLogoDuotone;
        case "pi:PiGoogleDriveLogoDuotone":
            return PiGoogleDriveLogoDuotone;
        case "pi:PiGoogleLogoDuotone":
            return PiGoogleLogoDuotone;
        case "pi:PiGooglePhotosLogoDuotone":
            return PiGooglePhotosLogoDuotone;
        case "pi:PiGooglePlayLogoDuotone":
            return PiGooglePlayLogoDuotone;
        case "pi:PiGooglePodcastsLogoDuotone":
            return PiGooglePodcastsLogoDuotone;
        case "pi:PiGpsDuotone":
            return PiGpsDuotone;
        case "pi:PiGpsFixDuotone":
            return PiGpsFixDuotone;
        case "pi:PiGpsSlashDuotone":
            return PiGpsSlashDuotone;
        case "pi:PiGradientDuotone":
            return PiGradientDuotone;
        case "pi:PiGraduationCapDuotone":
            return PiGraduationCapDuotone;
        case "pi:PiGrainsDuotone":
            return PiGrainsDuotone;
        case "pi:PiGrainsSlashDuotone":
            return PiGrainsSlashDuotone;
        case "pi:PiGraphDuotone":
            return PiGraphDuotone;
        case "pi:PiGraphicsCardDuotone":
            return PiGraphicsCardDuotone;
        case "pi:PiGreaterThanDuotone":
            return PiGreaterThanDuotone;
        case "pi:PiGreaterThanOrEqualDuotone":
            return PiGreaterThanOrEqualDuotone;
        case "pi:PiGridFourDuotone":
            return PiGridFourDuotone;
        case "pi:PiGridNineDuotone":
            return PiGridNineDuotone;
        case "pi:PiGuitarDuotone":
            return PiGuitarDuotone;
        case "pi:PiHairDryerDuotone":
            return PiHairDryerDuotone;
        case "pi:PiHamburgerDuotone":
            return PiHamburgerDuotone;
        case "pi:PiHammerDuotone":
            return PiHammerDuotone;
        case "pi:PiHandArrowDownDuotone":
            return PiHandArrowDownDuotone;
        case "pi:PiHandArrowUpDuotone":
            return PiHandArrowUpDuotone;
        case "pi:PiHandCoinsDuotone":
            return PiHandCoinsDuotone;
        case "pi:PiHandDepositDuotone":
            return PiHandDepositDuotone;
        case "pi:PiHandDuotone":
            return PiHandDuotone;
        case "pi:PiHandEyeDuotone":
            return PiHandEyeDuotone;
        case "pi:PiHandFistDuotone":
            return PiHandFistDuotone;
        case "pi:PiHandGrabbingDuotone":
            return PiHandGrabbingDuotone;
        case "pi:PiHandHeartDuotone":
            return PiHandHeartDuotone;
        case "pi:PiHandPalmDuotone":
            return PiHandPalmDuotone;
        case "pi:PiHandPeaceDuotone":
            return PiHandPeaceDuotone;
        case "pi:PiHandPointingDuotone":
            return PiHandPointingDuotone;
        case "pi:PiHandSoapDuotone":
            return PiHandSoapDuotone;
        case "pi:PiHandSwipeLeftDuotone":
            return PiHandSwipeLeftDuotone;
        case "pi:PiHandSwipeRightDuotone":
            return PiHandSwipeRightDuotone;
        case "pi:PiHandTapDuotone":
            return PiHandTapDuotone;
        case "pi:PiHandWavingDuotone":
            return PiHandWavingDuotone;
        case "pi:PiHandWithdrawDuotone":
            return PiHandWithdrawDuotone;
        case "pi:PiHandbagDuotone":
            return PiHandbagDuotone;
        case "pi:PiHandbagSimpleDuotone":
            return PiHandbagSimpleDuotone;
        case "pi:PiHandsClappingDuotone":
            return PiHandsClappingDuotone;
        case "pi:PiHandsPrayingDuotone":
            return PiHandsPrayingDuotone;
        case "pi:PiHandshakeDuotone":
            return PiHandshakeDuotone;
        case "pi:PiHardDriveDuotone":
            return PiHardDriveDuotone;
        case "pi:PiHardDrivesDuotone":
            return PiHardDrivesDuotone;
        case "pi:PiHardHatDuotone":
            return PiHardHatDuotone;
        case "pi:PiHashDuotone":
            return PiHashDuotone;
        case "pi:PiHashStraightDuotone":
            return PiHashStraightDuotone;
        case "pi:PiHeadCircuitDuotone":
            return PiHeadCircuitDuotone;
        case "pi:PiHeadlightsDuotone":
            return PiHeadlightsDuotone;
        case "pi:PiHeadphonesDuotone":
            return PiHeadphonesDuotone;
        case "pi:PiHeadsetDuotone":
            return PiHeadsetDuotone;
        case "pi:PiHeartBreakDuotone":
            return PiHeartBreakDuotone;
        case "pi:PiHeartDuotone":
            return PiHeartDuotone;
        case "pi:PiHeartHalfDuotone":
            return PiHeartHalfDuotone;
        case "pi:PiHeartStraightBreakDuotone":
            return PiHeartStraightBreakDuotone;
        case "pi:PiHeartStraightDuotone":
            return PiHeartStraightDuotone;
        case "pi:PiHeartbeatDuotone":
            return PiHeartbeatDuotone;
        case "pi:PiHexagonDuotone":
            return PiHexagonDuotone;
        case "pi:PiHighDefinitionDuotone":
            return PiHighDefinitionDuotone;
        case "pi:PiHighHeelDuotone":
            return PiHighHeelDuotone;
        case "pi:PiHighlighterCircleDuotone":
            return PiHighlighterCircleDuotone;
        case "pi:PiHighlighterDuotone":
            return PiHighlighterDuotone;
        case "pi:PiHockeyDuotone":
            return PiHockeyDuotone;
        case "pi:PiHoodieDuotone":
            return PiHoodieDuotone;
        case "pi:PiHorseDuotone":
            return PiHorseDuotone;
        case "pi:PiHospitalDuotone":
            return PiHospitalDuotone;
        case "pi:PiHourglassDuotone":
            return PiHourglassDuotone;
        case "pi:PiHourglassHighDuotone":
            return PiHourglassHighDuotone;
        case "pi:PiHourglassLowDuotone":
            return PiHourglassLowDuotone;
        case "pi:PiHourglassMediumDuotone":
            return PiHourglassMediumDuotone;
        case "pi:PiHourglassSimpleDuotone":
            return PiHourglassSimpleDuotone;
        case "pi:PiHourglassSimpleHighDuotone":
            return PiHourglassSimpleHighDuotone;
        case "pi:PiHourglassSimpleLowDuotone":
            return PiHourglassSimpleLowDuotone;
        case "pi:PiHourglassSimpleMediumDuotone":
            return PiHourglassSimpleMediumDuotone;
        case "pi:PiHouseDuotone":
            return PiHouseDuotone;
        case "pi:PiHouseLineDuotone":
            return PiHouseLineDuotone;
        case "pi:PiHouseSimpleDuotone":
            return PiHouseSimpleDuotone;
        case "pi:PiHurricaneDuotone":
            return PiHurricaneDuotone;
        case "pi:PiIceCreamDuotone":
            return PiIceCreamDuotone;
        case "pi:PiIdentificationBadgeDuotone":
            return PiIdentificationBadgeDuotone;
        case "pi:PiIdentificationCardDuotone":
            return PiIdentificationCardDuotone;
        case "pi:PiImageBrokenDuotone":
            return PiImageBrokenDuotone;
        case "pi:PiImageDuotone":
            return PiImageDuotone;
        case "pi:PiImageSquareDuotone":
            return PiImageSquareDuotone;
        case "pi:PiImagesDuotone":
            return PiImagesDuotone;
        case "pi:PiImagesSquareDuotone":
            return PiImagesSquareDuotone;
        case "pi:PiInfinityDuotone":
            return PiInfinityDuotone;
        case "pi:PiInfoDuotone":
            return PiInfoDuotone;
        case "pi:PiInstagramLogoDuotone":
            return PiInstagramLogoDuotone;
        case "pi:PiIntersectDuotone":
            return PiIntersectDuotone;
        case "pi:PiIntersectSquareDuotone":
            return PiIntersectSquareDuotone;
        case "pi:PiIntersectThreeDuotone":
            return PiIntersectThreeDuotone;
        case "pi:PiIntersectionDuotone":
            return PiIntersectionDuotone;
        case "pi:PiInvoiceDuotone":
            return PiInvoiceDuotone;
        case "pi:PiIslandDuotone":
            return PiIslandDuotone;
        case "pi:PiJarDuotone":
            return PiJarDuotone;
        case "pi:PiJarLabelDuotone":
            return PiJarLabelDuotone;
        case "pi:PiJeepDuotone":
            return PiJeepDuotone;
        case "pi:PiJoystickDuotone":
            return PiJoystickDuotone;
        case "pi:PiKanbanDuotone":
            return PiKanbanDuotone;
        case "pi:PiKeyDuotone":
            return PiKeyDuotone;
        case "pi:PiKeyReturnDuotone":
            return PiKeyReturnDuotone;
        case "pi:PiKeyboardDuotone":
            return PiKeyboardDuotone;
        case "pi:PiKeyholeDuotone":
            return PiKeyholeDuotone;
        case "pi:PiKnifeDuotone":
            return PiKnifeDuotone;
        case "pi:PiLadderDuotone":
            return PiLadderDuotone;
        case "pi:PiLadderSimpleDuotone":
            return PiLadderSimpleDuotone;
        case "pi:PiLampDuotone":
            return PiLampDuotone;
        case "pi:PiLampPendantDuotone":
            return PiLampPendantDuotone;
        case "pi:PiLaptopDuotone":
            return PiLaptopDuotone;
        case "pi:PiLassoDuotone":
            return PiLassoDuotone;
        case "pi:PiLastfmLogoDuotone":
            return PiLastfmLogoDuotone;
        case "pi:PiLayoutDuotone":
            return PiLayoutDuotone;
        case "pi:PiLeafDuotone":
            return PiLeafDuotone;
        case "pi:PiLecternDuotone":
            return PiLecternDuotone;
        case "pi:PiLegoDuotone":
            return PiLegoDuotone;
        case "pi:PiLegoSmileyDuotone":
            return PiLegoSmileyDuotone;
        case "pi:PiLessThanDuotone":
            return PiLessThanDuotone;
        case "pi:PiLessThanOrEqualDuotone":
            return PiLessThanOrEqualDuotone;
        case "pi:PiLetterCircleHDuotone":
            return PiLetterCircleHDuotone;
        case "pi:PiLetterCirclePDuotone":
            return PiLetterCirclePDuotone;
        case "pi:PiLetterCircleVDuotone":
            return PiLetterCircleVDuotone;
        case "pi:PiLifebuoyDuotone":
            return PiLifebuoyDuotone;
        case "pi:PiLightbulbDuotone":
            return PiLightbulbDuotone;
        case "pi:PiLightbulbFilamentDuotone":
            return PiLightbulbFilamentDuotone;
        case "pi:PiLighthouseDuotone":
            return PiLighthouseDuotone;
        case "pi:PiLightningADuotone":
            return PiLightningADuotone;
        case "pi:PiLightningDuotone":
            return PiLightningDuotone;
        case "pi:PiLightningSlashDuotone":
            return PiLightningSlashDuotone;
        case "pi:PiLineSegmentDuotone":
            return PiLineSegmentDuotone;
        case "pi:PiLineSegmentsDuotone":
            return PiLineSegmentsDuotone;
        case "pi:PiLineVerticalDuotone":
            return PiLineVerticalDuotone;
        case "pi:PiLinkBreakDuotone":
            return PiLinkBreakDuotone;
        case "pi:PiLinkDuotone":
            return PiLinkDuotone;
        case "pi:PiLinkSimpleBreakDuotone":
            return PiLinkSimpleBreakDuotone;
        case "pi:PiLinkSimpleDuotone":
            return PiLinkSimpleDuotone;
        case "pi:PiLinkSimpleHorizontalBreakDuotone":
            return PiLinkSimpleHorizontalBreakDuotone;
        case "pi:PiLinkSimpleHorizontalDuotone":
            return PiLinkSimpleHorizontalDuotone;
        case "pi:PiLinkedinLogoDuotone":
            return PiLinkedinLogoDuotone;
        case "pi:PiLinktreeLogoDuotone":
            return PiLinktreeLogoDuotone;
        case "pi:PiLinuxLogoDuotone":
            return PiLinuxLogoDuotone;
        case "pi:PiListBulletsDuotone":
            return PiListBulletsDuotone;
        case "pi:PiListChecksDuotone":
            return PiListChecksDuotone;
        case "pi:PiListDashesDuotone":
            return PiListDashesDuotone;
        case "pi:PiListDuotone":
            return PiListDuotone;
        case "pi:PiListHeartDuotone":
            return PiListHeartDuotone;
        case "pi:PiListMagnifyingGlassDuotone":
            return PiListMagnifyingGlassDuotone;
        case "pi:PiListNumbersDuotone":
            return PiListNumbersDuotone;
        case "pi:PiListPlusDuotone":
            return PiListPlusDuotone;
        case "pi:PiListStarDuotone":
            return PiListStarDuotone;
        case "pi:PiLockDuotone":
            return PiLockDuotone;
        case "pi:PiLockKeyDuotone":
            return PiLockKeyDuotone;
        case "pi:PiLockKeyOpenDuotone":
            return PiLockKeyOpenDuotone;
        case "pi:PiLockLaminatedDuotone":
            return PiLockLaminatedDuotone;
        case "pi:PiLockLaminatedOpenDuotone":
            return PiLockLaminatedOpenDuotone;
        case "pi:PiLockOpenDuotone":
            return PiLockOpenDuotone;
        case "pi:PiLockSimpleDuotone":
            return PiLockSimpleDuotone;
        case "pi:PiLockSimpleOpenDuotone":
            return PiLockSimpleOpenDuotone;
        case "pi:PiLockersDuotone":
            return PiLockersDuotone;
        case "pi:PiLogDuotone":
            return PiLogDuotone;
        case "pi:PiMagicWandDuotone":
            return PiMagicWandDuotone;
        case "pi:PiMagnetDuotone":
            return PiMagnetDuotone;
        case "pi:PiMagnetStraightDuotone":
            return PiMagnetStraightDuotone;
        case "pi:PiMagnifyingGlassDuotone":
            return PiMagnifyingGlassDuotone;
        case "pi:PiMagnifyingGlassMinusDuotone":
            return PiMagnifyingGlassMinusDuotone;
        case "pi:PiMagnifyingGlassPlusDuotone":
            return PiMagnifyingGlassPlusDuotone;
        case "pi:PiMailboxDuotone":
            return PiMailboxDuotone;
        case "pi:PiMapPinAreaDuotone":
            return PiMapPinAreaDuotone;
        case "pi:PiMapPinDuotone":
            return PiMapPinDuotone;
        case "pi:PiMapPinLineDuotone":
            return PiMapPinLineDuotone;
        case "pi:PiMapPinPlusDuotone":
            return PiMapPinPlusDuotone;
        case "pi:PiMapPinSimpleAreaDuotone":
            return PiMapPinSimpleAreaDuotone;
        case "pi:PiMapPinSimpleDuotone":
            return PiMapPinSimpleDuotone;
        case "pi:PiMapPinSimpleLineDuotone":
            return PiMapPinSimpleLineDuotone;
        case "pi:PiMapTrifoldDuotone":
            return PiMapTrifoldDuotone;
        case "pi:PiMarkdownLogoDuotone":
            return PiMarkdownLogoDuotone;
        case "pi:PiMarkerCircleDuotone":
            return PiMarkerCircleDuotone;
        case "pi:PiMartiniDuotone":
            return PiMartiniDuotone;
        case "pi:PiMaskHappyDuotone":
            return PiMaskHappyDuotone;
        case "pi:PiMaskSadDuotone":
            return PiMaskSadDuotone;
        case "pi:PiMastodonLogoDuotone":
            return PiMastodonLogoDuotone;
        case "pi:PiMathOperationsDuotone":
            return PiMathOperationsDuotone;
        case "pi:PiMatrixLogoDuotone":
            return PiMatrixLogoDuotone;
        case "pi:PiMedalDuotone":
            return PiMedalDuotone;
        case "pi:PiMedalMilitaryDuotone":
            return PiMedalMilitaryDuotone;
        case "pi:PiMediumLogoDuotone":
            return PiMediumLogoDuotone;
        case "pi:PiMegaphoneDuotone":
            return PiMegaphoneDuotone;
        case "pi:PiMegaphoneSimpleDuotone":
            return PiMegaphoneSimpleDuotone;
        case "pi:PiMemberOfDuotone":
            return PiMemberOfDuotone;
        case "pi:PiMemoryDuotone":
            return PiMemoryDuotone;
        case "pi:PiMessengerLogoDuotone":
            return PiMessengerLogoDuotone;
        case "pi:PiMetaLogoDuotone":
            return PiMetaLogoDuotone;
        case "pi:PiMeteorDuotone":
            return PiMeteorDuotone;
        case "pi:PiMetronomeDuotone":
            return PiMetronomeDuotone;
        case "pi:PiMicrophoneDuotone":
            return PiMicrophoneDuotone;
        case "pi:PiMicrophoneSlashDuotone":
            return PiMicrophoneSlashDuotone;
        case "pi:PiMicrophoneStageDuotone":
            return PiMicrophoneStageDuotone;
        case "pi:PiMicroscopeDuotone":
            return PiMicroscopeDuotone;
        case "pi:PiMicrosoftExcelLogoDuotone":
            return PiMicrosoftExcelLogoDuotone;
        case "pi:PiMicrosoftOutlookLogoDuotone":
            return PiMicrosoftOutlookLogoDuotone;
        case "pi:PiMicrosoftPowerpointLogoDuotone":
            return PiMicrosoftPowerpointLogoDuotone;
        case "pi:PiMicrosoftTeamsLogoDuotone":
            return PiMicrosoftTeamsLogoDuotone;
        case "pi:PiMicrosoftWordLogoDuotone":
            return PiMicrosoftWordLogoDuotone;
        case "pi:PiMinusCircleDuotone":
            return PiMinusCircleDuotone;
        case "pi:PiMinusDuotone":
            return PiMinusDuotone;
        case "pi:PiMinusSquareDuotone":
            return PiMinusSquareDuotone;
        case "pi:PiMoneyDuotone":
            return PiMoneyDuotone;
        case "pi:PiMoneyWavyDuotone":
            return PiMoneyWavyDuotone;
        case "pi:PiMonitorArrowUpDuotone":
            return PiMonitorArrowUpDuotone;
        case "pi:PiMonitorDuotone":
            return PiMonitorDuotone;
        case "pi:PiMonitorPlayDuotone":
            return PiMonitorPlayDuotone;
        case "pi:PiMoonDuotone":
            return PiMoonDuotone;
        case "pi:PiMoonStarsDuotone":
            return PiMoonStarsDuotone;
        case "pi:PiMopedDuotone":
            return PiMopedDuotone;
        case "pi:PiMopedFrontDuotone":
            return PiMopedFrontDuotone;
        case "pi:PiMosqueDuotone":
            return PiMosqueDuotone;
        case "pi:PiMotorcycleDuotone":
            return PiMotorcycleDuotone;
        case "pi:PiMountainsDuotone":
            return PiMountainsDuotone;
        case "pi:PiMouseDuotone":
            return PiMouseDuotone;
        case "pi:PiMouseLeftClickDuotone":
            return PiMouseLeftClickDuotone;
        case "pi:PiMouseMiddleClickDuotone":
            return PiMouseMiddleClickDuotone;
        case "pi:PiMouseRightClickDuotone":
            return PiMouseRightClickDuotone;
        case "pi:PiMouseScrollDuotone":
            return PiMouseScrollDuotone;
        case "pi:PiMouseSimpleDuotone":
            return PiMouseSimpleDuotone;
        case "pi:PiMusicNoteDuotone":
            return PiMusicNoteDuotone;
        case "pi:PiMusicNoteSimpleDuotone":
            return PiMusicNoteSimpleDuotone;
        case "pi:PiMusicNotesDuotone":
            return PiMusicNotesDuotone;
        case "pi:PiMusicNotesMinusDuotone":
            return PiMusicNotesMinusDuotone;
        case "pi:PiMusicNotesPlusDuotone":
            return PiMusicNotesPlusDuotone;
        case "pi:PiMusicNotesSimpleDuotone":
            return PiMusicNotesSimpleDuotone;
        case "pi:PiNavigationArrowDuotone":
            return PiNavigationArrowDuotone;
        case "pi:PiNeedleDuotone":
            return PiNeedleDuotone;
        case "pi:PiNetworkDuotone":
            return PiNetworkDuotone;
        case "pi:PiNetworkSlashDuotone":
            return PiNetworkSlashDuotone;
        case "pi:PiNetworkXDuotone":
            return PiNetworkXDuotone;
        case "pi:PiNewspaperClippingDuotone":
            return PiNewspaperClippingDuotone;
        case "pi:PiNewspaperDuotone":
            return PiNewspaperDuotone;
        case "pi:PiNotEqualsDuotone":
            return PiNotEqualsDuotone;
        case "pi:PiNotMemberOfDuotone":
            return PiNotMemberOfDuotone;
        case "pi:PiNotSubsetOfDuotone":
            return PiNotSubsetOfDuotone;
        case "pi:PiNotSupersetOfDuotone":
            return PiNotSupersetOfDuotone;
        case "pi:PiNotchesDuotone":
            return PiNotchesDuotone;
        case "pi:PiNoteBlankDuotone":
            return PiNoteBlankDuotone;
        case "pi:PiNoteDuotone":
            return PiNoteDuotone;
        case "pi:PiNotePencilDuotone":
            return PiNotePencilDuotone;
        case "pi:PiNotebookDuotone":
            return PiNotebookDuotone;
        case "pi:PiNotepadDuotone":
            return PiNotepadDuotone;
        case "pi:PiNotificationDuotone":
            return PiNotificationDuotone;
        case "pi:PiNotionLogoDuotone":
            return PiNotionLogoDuotone;
        case "pi:PiNuclearPlantDuotone":
            return PiNuclearPlantDuotone;
        case "pi:PiNumberCircleEightDuotone":
            return PiNumberCircleEightDuotone;
        case "pi:PiNumberCircleFiveDuotone":
            return PiNumberCircleFiveDuotone;
        case "pi:PiNumberCircleFourDuotone":
            return PiNumberCircleFourDuotone;
        case "pi:PiNumberCircleNineDuotone":
            return PiNumberCircleNineDuotone;
        case "pi:PiNumberCircleOneDuotone":
            return PiNumberCircleOneDuotone;
        case "pi:PiNumberCircleSevenDuotone":
            return PiNumberCircleSevenDuotone;
        case "pi:PiNumberCircleSixDuotone":
            return PiNumberCircleSixDuotone;
        case "pi:PiNumberCircleThreeDuotone":
            return PiNumberCircleThreeDuotone;
        case "pi:PiNumberCircleTwoDuotone":
            return PiNumberCircleTwoDuotone;
        case "pi:PiNumberCircleZeroDuotone":
            return PiNumberCircleZeroDuotone;
        case "pi:PiNumberEightDuotone":
            return PiNumberEightDuotone;
        case "pi:PiNumberFiveDuotone":
            return PiNumberFiveDuotone;
        case "pi:PiNumberFourDuotone":
            return PiNumberFourDuotone;
        case "pi:PiNumberNineDuotone":
            return PiNumberNineDuotone;
        case "pi:PiNumberOneDuotone":
            return PiNumberOneDuotone;
        case "pi:PiNumberSevenDuotone":
            return PiNumberSevenDuotone;
        case "pi:PiNumberSixDuotone":
            return PiNumberSixDuotone;
        case "pi:PiNumberSquareEightDuotone":
            return PiNumberSquareEightDuotone;
        case "pi:PiNumberSquareFiveDuotone":
            return PiNumberSquareFiveDuotone;
        case "pi:PiNumberSquareFourDuotone":
            return PiNumberSquareFourDuotone;
        case "pi:PiNumberSquareNineDuotone":
            return PiNumberSquareNineDuotone;
        case "pi:PiNumberSquareOneDuotone":
            return PiNumberSquareOneDuotone;
        case "pi:PiNumberSquareSevenDuotone":
            return PiNumberSquareSevenDuotone;
        case "pi:PiNumberSquareSixDuotone":
            return PiNumberSquareSixDuotone;
        case "pi:PiNumberSquareThreeDuotone":
            return PiNumberSquareThreeDuotone;
        case "pi:PiNumberSquareTwoDuotone":
            return PiNumberSquareTwoDuotone;
        case "pi:PiNumberSquareZeroDuotone":
            return PiNumberSquareZeroDuotone;
        case "pi:PiNumberThreeDuotone":
            return PiNumberThreeDuotone;
        case "pi:PiNumberTwoDuotone":
            return PiNumberTwoDuotone;
        case "pi:PiNumberZeroDuotone":
            return PiNumberZeroDuotone;
        case "pi:PiNumpadDuotone":
            return PiNumpadDuotone;
        case "pi:PiNutDuotone":
            return PiNutDuotone;
        case "pi:PiNyTimesLogoDuotone":
            return PiNyTimesLogoDuotone;
        case "pi:PiOctagonDuotone":
            return PiOctagonDuotone;
        case "pi:PiOfficeChairDuotone":
            return PiOfficeChairDuotone;
        case "pi:PiOnigiriDuotone":
            return PiOnigiriDuotone;
        case "pi:PiOpenAiLogoDuotone":
            return PiOpenAiLogoDuotone;
        case "pi:PiOptionDuotone":
            return PiOptionDuotone;
        case "pi:PiOrangeDuotone":
            return PiOrangeDuotone;
        case "pi:PiOrangeSliceDuotone":
            return PiOrangeSliceDuotone;
        case "pi:PiOvenDuotone":
            return PiOvenDuotone;
        case "pi:PiPackageDuotone":
            return PiPackageDuotone;
        case "pi:PiPaintBrushBroadDuotone":
            return PiPaintBrushBroadDuotone;
        case "pi:PiPaintBrushDuotone":
            return PiPaintBrushDuotone;
        case "pi:PiPaintBrushHouseholdDuotone":
            return PiPaintBrushHouseholdDuotone;
        case "pi:PiPaintBucketDuotone":
            return PiPaintBucketDuotone;
        case "pi:PiPaintRollerDuotone":
            return PiPaintRollerDuotone;
        case "pi:PiPaletteDuotone":
            return PiPaletteDuotone;
        case "pi:PiPanoramaDuotone":
            return PiPanoramaDuotone;
        case "pi:PiPantsDuotone":
            return PiPantsDuotone;
        case "pi:PiPaperPlaneDuotone":
            return PiPaperPlaneDuotone;
        case "pi:PiPaperPlaneRightDuotone":
            return PiPaperPlaneRightDuotone;
        case "pi:PiPaperPlaneTiltDuotone":
            return PiPaperPlaneTiltDuotone;
        case "pi:PiPaperclipDuotone":
            return PiPaperclipDuotone;
        case "pi:PiPaperclipHorizontalDuotone":
            return PiPaperclipHorizontalDuotone;
        case "pi:PiParachuteDuotone":
            return PiParachuteDuotone;
        case "pi:PiParagraphDuotone":
            return PiParagraphDuotone;
        case "pi:PiParallelogramDuotone":
            return PiParallelogramDuotone;
        case "pi:PiParkDuotone":
            return PiParkDuotone;
        case "pi:PiPasswordDuotone":
            return PiPasswordDuotone;
        case "pi:PiPathDuotone":
            return PiPathDuotone;
        case "pi:PiPatreonLogoDuotone":
            return PiPatreonLogoDuotone;
        case "pi:PiPauseCircleDuotone":
            return PiPauseCircleDuotone;
        case "pi:PiPauseDuotone":
            return PiPauseDuotone;
        case "pi:PiPawPrintDuotone":
            return PiPawPrintDuotone;
        case "pi:PiPaypalLogoDuotone":
            return PiPaypalLogoDuotone;
        case "pi:PiPeaceDuotone":
            return PiPeaceDuotone;
        case "pi:PiPenDuotone":
            return PiPenDuotone;
        case "pi:PiPenNibDuotone":
            return PiPenNibDuotone;
        case "pi:PiPenNibStraightDuotone":
            return PiPenNibStraightDuotone;
        case "pi:PiPencilCircleDuotone":
            return PiPencilCircleDuotone;
        case "pi:PiPencilDuotone":
            return PiPencilDuotone;
        case "pi:PiPencilLineDuotone":
            return PiPencilLineDuotone;
        case "pi:PiPencilRulerDuotone":
            return PiPencilRulerDuotone;
        case "pi:PiPencilSimpleDuotone":
            return PiPencilSimpleDuotone;
        case "pi:PiPencilSimpleLineDuotone":
            return PiPencilSimpleLineDuotone;
        case "pi:PiPencilSimpleSlashDuotone":
            return PiPencilSimpleSlashDuotone;
        case "pi:PiPencilSlashDuotone":
            return PiPencilSlashDuotone;
        case "pi:PiPentagonDuotone":
            return PiPentagonDuotone;
        case "pi:PiPentagramDuotone":
            return PiPentagramDuotone;
        case "pi:PiPepperDuotone":
            return PiPepperDuotone;
        case "pi:PiPercentDuotone":
            return PiPercentDuotone;
        case "pi:PiPersonArmsSpreadDuotone":
            return PiPersonArmsSpreadDuotone;
        case "pi:PiPersonDuotone":
            return PiPersonDuotone;
        case "pi:PiPersonSimpleBikeDuotone":
            return PiPersonSimpleBikeDuotone;
        case "pi:PiPersonSimpleCircleDuotone":
            return PiPersonSimpleCircleDuotone;
        case "pi:PiPersonSimpleDuotone":
            return PiPersonSimpleDuotone;
        case "pi:PiPersonSimpleHikeDuotone":
            return PiPersonSimpleHikeDuotone;
        case "pi:PiPersonSimpleRunDuotone":
            return PiPersonSimpleRunDuotone;
        case "pi:PiPersonSimpleSkiDuotone":
            return PiPersonSimpleSkiDuotone;
        case "pi:PiPersonSimpleSnowboardDuotone":
            return PiPersonSimpleSnowboardDuotone;
        case "pi:PiPersonSimpleSwimDuotone":
            return PiPersonSimpleSwimDuotone;
        case "pi:PiPersonSimpleTaiChiDuotone":
            return PiPersonSimpleTaiChiDuotone;
        case "pi:PiPersonSimpleThrowDuotone":
            return PiPersonSimpleThrowDuotone;
        case "pi:PiPersonSimpleWalkDuotone":
            return PiPersonSimpleWalkDuotone;
        case "pi:PiPerspectiveDuotone":
            return PiPerspectiveDuotone;
        case "pi:PiPhoneCallDuotone":
            return PiPhoneCallDuotone;
        case "pi:PiPhoneDisconnectDuotone":
            return PiPhoneDisconnectDuotone;
        case "pi:PiPhoneDuotone":
            return PiPhoneDuotone;
        case "pi:PiPhoneIncomingDuotone":
            return PiPhoneIncomingDuotone;
        case "pi:PiPhoneListDuotone":
            return PiPhoneListDuotone;
        case "pi:PiPhoneOutgoingDuotone":
            return PiPhoneOutgoingDuotone;
        case "pi:PiPhonePauseDuotone":
            return PiPhonePauseDuotone;
        case "pi:PiPhonePlusDuotone":
            return PiPhonePlusDuotone;
        case "pi:PiPhoneSlashDuotone":
            return PiPhoneSlashDuotone;
        case "pi:PiPhoneTransferDuotone":
            return PiPhoneTransferDuotone;
        case "pi:PiPhoneXDuotone":
            return PiPhoneXDuotone;
        case "pi:PiPhosphorLogoDuotone":
            return PiPhosphorLogoDuotone;
        case "pi:PiPiDuotone":
            return PiPiDuotone;
        case "pi:PiPianoKeysDuotone":
            return PiPianoKeysDuotone;
        case "pi:PiPicnicTableDuotone":
            return PiPicnicTableDuotone;
        case "pi:PiPictureInPictureDuotone":
            return PiPictureInPictureDuotone;
        case "pi:PiPiggyBankDuotone":
            return PiPiggyBankDuotone;
        case "pi:PiPillDuotone":
            return PiPillDuotone;
        case "pi:PiPingPongDuotone":
            return PiPingPongDuotone;
        case "pi:PiPintGlassDuotone":
            return PiPintGlassDuotone;
        case "pi:PiPinterestLogoDuotone":
            return PiPinterestLogoDuotone;
        case "pi:PiPinwheelDuotone":
            return PiPinwheelDuotone;
        case "pi:PiPipeDuotone":
            return PiPipeDuotone;
        case "pi:PiPipeWrenchDuotone":
            return PiPipeWrenchDuotone;
        case "pi:PiPixLogoDuotone":
            return PiPixLogoDuotone;
        case "pi:PiPizzaDuotone":
            return PiPizzaDuotone;
        case "pi:PiPlaceholderDuotone":
            return PiPlaceholderDuotone;
        case "pi:PiPlanetDuotone":
            return PiPlanetDuotone;
        case "pi:PiPlantDuotone":
            return PiPlantDuotone;
        case "pi:PiPlayCircleDuotone":
            return PiPlayCircleDuotone;
        case "pi:PiPlayDuotone":
            return PiPlayDuotone;
        case "pi:PiPlayPauseDuotone":
            return PiPlayPauseDuotone;
        case "pi:PiPlaylistDuotone":
            return PiPlaylistDuotone;
        case "pi:PiPlugChargingDuotone":
            return PiPlugChargingDuotone;
        case "pi:PiPlugDuotone":
            return PiPlugDuotone;
        case "pi:PiPlugsConnectedDuotone":
            return PiPlugsConnectedDuotone;
        case "pi:PiPlugsDuotone":
            return PiPlugsDuotone;
        case "pi:PiPlusCircleDuotone":
            return PiPlusCircleDuotone;
        case "pi:PiPlusDuotone":
            return PiPlusDuotone;
        case "pi:PiPlusMinusDuotone":
            return PiPlusMinusDuotone;
        case "pi:PiPlusSquareDuotone":
            return PiPlusSquareDuotone;
        case "pi:PiPokerChipDuotone":
            return PiPokerChipDuotone;
        case "pi:PiPoliceCarDuotone":
            return PiPoliceCarDuotone;
        case "pi:PiPolygonDuotone":
            return PiPolygonDuotone;
        case "pi:PiPopcornDuotone":
            return PiPopcornDuotone;
        case "pi:PiPopsicleDuotone":
            return PiPopsicleDuotone;
        case "pi:PiPottedPlantDuotone":
            return PiPottedPlantDuotone;
        case "pi:PiPowerDuotone":
            return PiPowerDuotone;
        case "pi:PiPrescriptionDuotone":
            return PiPrescriptionDuotone;
        case "pi:PiPresentationChartDuotone":
            return PiPresentationChartDuotone;
        case "pi:PiPresentationDuotone":
            return PiPresentationDuotone;
        case "pi:PiPrinterDuotone":
            return PiPrinterDuotone;
        case "pi:PiProhibitDuotone":
            return PiProhibitDuotone;
        case "pi:PiProhibitInsetDuotone":
            return PiProhibitInsetDuotone;
        case "pi:PiProjectorScreenChartDuotone":
            return PiProjectorScreenChartDuotone;
        case "pi:PiProjectorScreenDuotone":
            return PiProjectorScreenDuotone;
        case "pi:PiPulseDuotone":
            return PiPulseDuotone;
        case "pi:PiPushPinDuotone":
            return PiPushPinDuotone;
        case "pi:PiPushPinSimpleDuotone":
            return PiPushPinSimpleDuotone;
        case "pi:PiPushPinSimpleSlashDuotone":
            return PiPushPinSimpleSlashDuotone;
        case "pi:PiPushPinSlashDuotone":
            return PiPushPinSlashDuotone;
        case "pi:PiPuzzlePieceDuotone":
            return PiPuzzlePieceDuotone;
        case "pi:PiQrCodeDuotone":
            return PiQrCodeDuotone;
        case "pi:PiQuestionDuotone":
            return PiQuestionDuotone;
        case "pi:PiQuestionMarkDuotone":
            return PiQuestionMarkDuotone;
        case "pi:PiQueueDuotone":
            return PiQueueDuotone;
        case "pi:PiQuotesDuotone":
            return PiQuotesDuotone;
        case "pi:PiRabbitDuotone":
            return PiRabbitDuotone;
        case "pi:PiRacquetDuotone":
            return PiRacquetDuotone;
        case "pi:PiRadicalDuotone":
            return PiRadicalDuotone;
        case "pi:PiRadioButtonDuotone":
            return PiRadioButtonDuotone;
        case "pi:PiRadioDuotone":
            return PiRadioDuotone;
        case "pi:PiRadioactiveDuotone":
            return PiRadioactiveDuotone;
        case "pi:PiRainbowCloudDuotone":
            return PiRainbowCloudDuotone;
        case "pi:PiRainbowDuotone":
            return PiRainbowDuotone;
        case "pi:PiRankingDuotone":
            return PiRankingDuotone;
        case "pi:PiReadCvLogoDuotone":
            return PiReadCvLogoDuotone;
        case "pi:PiReceiptDuotone":
            return PiReceiptDuotone;
        case "pi:PiReceiptXDuotone":
            return PiReceiptXDuotone;
        case "pi:PiRecordDuotone":
            return PiRecordDuotone;
        case "pi:PiRectangleDashedDuotone":
            return PiRectangleDashedDuotone;
        case "pi:PiRectangleDuotone":
            return PiRectangleDuotone;
        case "pi:PiRecycleDuotone":
            return PiRecycleDuotone;
        case "pi:PiRedditLogoDuotone":
            return PiRedditLogoDuotone;
        case "pi:PiRepeatDuotone":
            return PiRepeatDuotone;
        case "pi:PiRepeatOnceDuotone":
            return PiRepeatOnceDuotone;
        case "pi:PiReplitLogoDuotone":
            return PiReplitLogoDuotone;
        case "pi:PiResizeDuotone":
            return PiResizeDuotone;
        case "pi:PiRewindCircleDuotone":
            return PiRewindCircleDuotone;
        case "pi:PiRewindDuotone":
            return PiRewindDuotone;
        case "pi:PiRoadHorizonDuotone":
            return PiRoadHorizonDuotone;
        case "pi:PiRobotDuotone":
            return PiRobotDuotone;
        case "pi:PiRocketDuotone":
            return PiRocketDuotone;
        case "pi:PiRocketLaunchDuotone":
            return PiRocketLaunchDuotone;
        case "pi:PiRowsDuotone":
            return PiRowsDuotone;
        case "pi:PiRowsPlusBottomDuotone":
            return PiRowsPlusBottomDuotone;
        case "pi:PiRowsPlusTopDuotone":
            return PiRowsPlusTopDuotone;
        case "pi:PiRssDuotone":
            return PiRssDuotone;
        case "pi:PiRssSimpleDuotone":
            return PiRssSimpleDuotone;
        case "pi:PiRugDuotone":
            return PiRugDuotone;
        case "pi:PiRulerDuotone":
            return PiRulerDuotone;
        case "pi:PiSailboatDuotone":
            return PiSailboatDuotone;
        case "pi:PiScalesDuotone":
            return PiScalesDuotone;
        case "pi:PiScanDuotone":
            return PiScanDuotone;
        case "pi:PiScanSmileyDuotone":
            return PiScanSmileyDuotone;
        case "pi:PiScissorsDuotone":
            return PiScissorsDuotone;
        case "pi:PiScooterDuotone":
            return PiScooterDuotone;
        case "pi:PiScreencastDuotone":
            return PiScreencastDuotone;
        case "pi:PiScrewdriverDuotone":
            return PiScrewdriverDuotone;
        case "pi:PiScribbleDuotone":
            return PiScribbleDuotone;
        case "pi:PiScribbleLoopDuotone":
            return PiScribbleLoopDuotone;
        case "pi:PiScrollDuotone":
            return PiScrollDuotone;
        case "pi:PiSealCheckDuotone":
            return PiSealCheckDuotone;
        case "pi:PiSealDuotone":
            return PiSealDuotone;
        case "pi:PiSealPercentDuotone":
            return PiSealPercentDuotone;
        case "pi:PiSealQuestionDuotone":
            return PiSealQuestionDuotone;
        case "pi:PiSealWarningDuotone":
            return PiSealWarningDuotone;
        case "pi:PiSeatDuotone":
            return PiSeatDuotone;
        case "pi:PiSeatbeltDuotone":
            return PiSeatbeltDuotone;
        case "pi:PiSecurityCameraDuotone":
            return PiSecurityCameraDuotone;
        case "pi:PiSelectionAllDuotone":
            return PiSelectionAllDuotone;
        case "pi:PiSelectionBackgroundDuotone":
            return PiSelectionBackgroundDuotone;
        case "pi:PiSelectionDuotone":
            return PiSelectionDuotone;
        case "pi:PiSelectionForegroundDuotone":
            return PiSelectionForegroundDuotone;
        case "pi:PiSelectionInverseDuotone":
            return PiSelectionInverseDuotone;
        case "pi:PiSelectionPlusDuotone":
            return PiSelectionPlusDuotone;
        case "pi:PiSelectionSlashDuotone":
            return PiSelectionSlashDuotone;
        case "pi:PiShapesDuotone":
            return PiShapesDuotone;
        case "pi:PiShareDuotone":
            return PiShareDuotone;
        case "pi:PiShareFatDuotone":
            return PiShareFatDuotone;
        case "pi:PiShareNetworkDuotone":
            return PiShareNetworkDuotone;
        case "pi:PiShieldCheckDuotone":
            return PiShieldCheckDuotone;
        case "pi:PiShieldCheckeredDuotone":
            return PiShieldCheckeredDuotone;
        case "pi:PiShieldChevronDuotone":
            return PiShieldChevronDuotone;
        case "pi:PiShieldDuotone":
            return PiShieldDuotone;
        case "pi:PiShieldPlusDuotone":
            return PiShieldPlusDuotone;
        case "pi:PiShieldSlashDuotone":
            return PiShieldSlashDuotone;
        case "pi:PiShieldStarDuotone":
            return PiShieldStarDuotone;
        case "pi:PiShieldWarningDuotone":
            return PiShieldWarningDuotone;
        case "pi:PiShippingContainerDuotone":
            return PiShippingContainerDuotone;
        case "pi:PiShirtFoldedDuotone":
            return PiShirtFoldedDuotone;
        case "pi:PiShootingStarDuotone":
            return PiShootingStarDuotone;
        case "pi:PiShoppingBagDuotone":
            return PiShoppingBagDuotone;
        case "pi:PiShoppingBagOpenDuotone":
            return PiShoppingBagOpenDuotone;
        case "pi:PiShoppingCartDuotone":
            return PiShoppingCartDuotone;
        case "pi:PiShoppingCartSimpleDuotone":
            return PiShoppingCartSimpleDuotone;
        case "pi:PiShovelDuotone":
            return PiShovelDuotone;
        case "pi:PiShowerDuotone":
            return PiShowerDuotone;
        case "pi:PiShrimpDuotone":
            return PiShrimpDuotone;
        case "pi:PiShuffleAngularDuotone":
            return PiShuffleAngularDuotone;
        case "pi:PiShuffleDuotone":
            return PiShuffleDuotone;
        case "pi:PiShuffleSimpleDuotone":
            return PiShuffleSimpleDuotone;
        case "pi:PiSidebarDuotone":
            return PiSidebarDuotone;
        case "pi:PiSidebarSimpleDuotone":
            return PiSidebarSimpleDuotone;
        case "pi:PiSigmaDuotone":
            return PiSigmaDuotone;
        case "pi:PiSignInDuotone":
            return PiSignInDuotone;
        case "pi:PiSignOutDuotone":
            return PiSignOutDuotone;
        case "pi:PiSignatureDuotone":
            return PiSignatureDuotone;
        case "pi:PiSignpostDuotone":
            return PiSignpostDuotone;
        case "pi:PiSimCardDuotone":
            return PiSimCardDuotone;
        case "pi:PiSirenDuotone":
            return PiSirenDuotone;
        case "pi:PiSketchLogoDuotone":
            return PiSketchLogoDuotone;
        case "pi:PiSkipBackCircleDuotone":
            return PiSkipBackCircleDuotone;
        case "pi:PiSkipBackDuotone":
            return PiSkipBackDuotone;
        case "pi:PiSkipForwardCircleDuotone":
            return PiSkipForwardCircleDuotone;
        case "pi:PiSkipForwardDuotone":
            return PiSkipForwardDuotone;
        case "pi:PiSkullDuotone":
            return PiSkullDuotone;
        case "pi:PiSkypeLogoDuotone":
            return PiSkypeLogoDuotone;
        case "pi:PiSlackLogoDuotone":
            return PiSlackLogoDuotone;
        case "pi:PiSlidersDuotone":
            return PiSlidersDuotone;
        case "pi:PiSlidersHorizontalDuotone":
            return PiSlidersHorizontalDuotone;
        case "pi:PiSlideshowDuotone":
            return PiSlideshowDuotone;
        case "pi:PiSmileyAngryDuotone":
            return PiSmileyAngryDuotone;
        case "pi:PiSmileyBlankDuotone":
            return PiSmileyBlankDuotone;
        case "pi:PiSmileyDuotone":
            return PiSmileyDuotone;
        case "pi:PiSmileyMehDuotone":
            return PiSmileyMehDuotone;
        case "pi:PiSmileyMeltingDuotone":
            return PiSmileyMeltingDuotone;
        case "pi:PiSmileyNervousDuotone":
            return PiSmileyNervousDuotone;
        case "pi:PiSmileySadDuotone":
            return PiSmileySadDuotone;
        case "pi:PiSmileyStickerDuotone":
            return PiSmileyStickerDuotone;
        case "pi:PiSmileyWinkDuotone":
            return PiSmileyWinkDuotone;
        case "pi:PiSmileyXEyesDuotone":
            return PiSmileyXEyesDuotone;
        case "pi:PiSnapchatLogoDuotone":
            return PiSnapchatLogoDuotone;
        case "pi:PiSneakerDuotone":
            return PiSneakerDuotone;
        case "pi:PiSneakerMoveDuotone":
            return PiSneakerMoveDuotone;
        case "pi:PiSnowflakeDuotone":
            return PiSnowflakeDuotone;
        case "pi:PiSoccerBallDuotone":
            return PiSoccerBallDuotone;
        case "pi:PiSockDuotone":
            return PiSockDuotone;
        case "pi:PiSolarPanelDuotone":
            return PiSolarPanelDuotone;
        case "pi:PiSolarRoofDuotone":
            return PiSolarRoofDuotone;
        case "pi:PiSortAscendingDuotone":
            return PiSortAscendingDuotone;
        case "pi:PiSortDescendingDuotone":
            return PiSortDescendingDuotone;
        case "pi:PiSoundcloudLogoDuotone":
            return PiSoundcloudLogoDuotone;
        case "pi:PiSpadeDuotone":
            return PiSpadeDuotone;
        case "pi:PiSparkleDuotone":
            return PiSparkleDuotone;
        case "pi:PiSpeakerHifiDuotone":
            return PiSpeakerHifiDuotone;
        case "pi:PiSpeakerHighDuotone":
            return PiSpeakerHighDuotone;
        case "pi:PiSpeakerLowDuotone":
            return PiSpeakerLowDuotone;
        case "pi:PiSpeakerNoneDuotone":
            return PiSpeakerNoneDuotone;
        case "pi:PiSpeakerSimpleHighDuotone":
            return PiSpeakerSimpleHighDuotone;
        case "pi:PiSpeakerSimpleLowDuotone":
            return PiSpeakerSimpleLowDuotone;
        case "pi:PiSpeakerSimpleNoneDuotone":
            return PiSpeakerSimpleNoneDuotone;
        case "pi:PiSpeakerSimpleSlashDuotone":
            return PiSpeakerSimpleSlashDuotone;
        case "pi:PiSpeakerSimpleXDuotone":
            return PiSpeakerSimpleXDuotone;
        case "pi:PiSpeakerSlashDuotone":
            return PiSpeakerSlashDuotone;
        case "pi:PiSpeakerXDuotone":
            return PiSpeakerXDuotone;
        case "pi:PiSpeedometerDuotone":
            return PiSpeedometerDuotone;
        case "pi:PiSphereDuotone":
            return PiSphereDuotone;
        case "pi:PiSpinnerBallDuotone":
            return PiSpinnerBallDuotone;
        case "pi:PiSpinnerDuotone":
            return PiSpinnerDuotone;
        case "pi:PiSpinnerGapDuotone":
            return PiSpinnerGapDuotone;
        case "pi:PiSpiralDuotone":
            return PiSpiralDuotone;
        case "pi:PiSplitHorizontalDuotone":
            return PiSplitHorizontalDuotone;
        case "pi:PiSplitVerticalDuotone":
            return PiSplitVerticalDuotone;
        case "pi:PiSpotifyLogoDuotone":
            return PiSpotifyLogoDuotone;
        case "pi:PiSprayBottleDuotone":
            return PiSprayBottleDuotone;
        case "pi:PiSquareDuotone":
            return PiSquareDuotone;
        case "pi:PiSquareHalfBottomDuotone":
            return PiSquareHalfBottomDuotone;
        case "pi:PiSquareHalfDuotone":
            return PiSquareHalfDuotone;
        case "pi:PiSquareLogoDuotone":
            return PiSquareLogoDuotone;
        case "pi:PiSquareSplitHorizontalDuotone":
            return PiSquareSplitHorizontalDuotone;
        case "pi:PiSquareSplitVerticalDuotone":
            return PiSquareSplitVerticalDuotone;
        case "pi:PiSquaresFourDuotone":
            return PiSquaresFourDuotone;
        case "pi:PiStackDuotone":
            return PiStackDuotone;
        case "pi:PiStackMinusDuotone":
            return PiStackMinusDuotone;
        case "pi:PiStackOverflowLogoDuotone":
            return PiStackOverflowLogoDuotone;
        case "pi:PiStackPlusDuotone":
            return PiStackPlusDuotone;
        case "pi:PiStackSimpleDuotone":
            return PiStackSimpleDuotone;
        case "pi:PiStairsDuotone":
            return PiStairsDuotone;
        case "pi:PiStampDuotone":
            return PiStampDuotone;
        case "pi:PiStandardDefinitionDuotone":
            return PiStandardDefinitionDuotone;
        case "pi:PiStarAndCrescentDuotone":
            return PiStarAndCrescentDuotone;
        case "pi:PiStarDuotone":
            return PiStarDuotone;
        case "pi:PiStarFourDuotone":
            return PiStarFourDuotone;
        case "pi:PiStarHalfDuotone":
            return PiStarHalfDuotone;
        case "pi:PiStarOfDavidDuotone":
            return PiStarOfDavidDuotone;
        case "pi:PiSteamLogoDuotone":
            return PiSteamLogoDuotone;
        case "pi:PiSteeringWheelDuotone":
            return PiSteeringWheelDuotone;
        case "pi:PiStepsDuotone":
            return PiStepsDuotone;
        case "pi:PiStethoscopeDuotone":
            return PiStethoscopeDuotone;
        case "pi:PiStickerDuotone":
            return PiStickerDuotone;
        case "pi:PiStoolDuotone":
            return PiStoolDuotone;
        case "pi:PiStopCircleDuotone":
            return PiStopCircleDuotone;
        case "pi:PiStopDuotone":
            return PiStopDuotone;
        case "pi:PiStorefrontDuotone":
            return PiStorefrontDuotone;
        case "pi:PiStrategyDuotone":
            return PiStrategyDuotone;
        case "pi:PiStripeLogoDuotone":
            return PiStripeLogoDuotone;
        case "pi:PiStudentDuotone":
            return PiStudentDuotone;
        case "pi:PiSubsetOfDuotone":
            return PiSubsetOfDuotone;
        case "pi:PiSubsetProperOfDuotone":
            return PiSubsetProperOfDuotone;
        case "pi:PiSubtitlesDuotone":
            return PiSubtitlesDuotone;
        case "pi:PiSubtitlesSlashDuotone":
            return PiSubtitlesSlashDuotone;
        case "pi:PiSubtractDuotone":
            return PiSubtractDuotone;
        case "pi:PiSubtractSquareDuotone":
            return PiSubtractSquareDuotone;
        case "pi:PiSubwayDuotone":
            return PiSubwayDuotone;
        case "pi:PiSuitcaseDuotone":
            return PiSuitcaseDuotone;
        case "pi:PiSuitcaseRollingDuotone":
            return PiSuitcaseRollingDuotone;
        case "pi:PiSuitcaseSimpleDuotone":
            return PiSuitcaseSimpleDuotone;
        case "pi:PiSunDimDuotone":
            return PiSunDimDuotone;
        case "pi:PiSunDuotone":
            return PiSunDuotone;
        case "pi:PiSunHorizonDuotone":
            return PiSunHorizonDuotone;
        case "pi:PiSunglassesDuotone":
            return PiSunglassesDuotone;
        case "pi:PiSupersetOfDuotone":
            return PiSupersetOfDuotone;
        case "pi:PiSupersetProperOfDuotone":
            return PiSupersetProperOfDuotone;
        case "pi:PiSwapDuotone":
            return PiSwapDuotone;
        case "pi:PiSwatchesDuotone":
            return PiSwatchesDuotone;
        case "pi:PiSwimmingPoolDuotone":
            return PiSwimmingPoolDuotone;
        case "pi:PiSwordDuotone":
            return PiSwordDuotone;
        case "pi:PiSynagogueDuotone":
            return PiSynagogueDuotone;
        case "pi:PiSyringeDuotone":
            return PiSyringeDuotone;
        case "pi:PiTShirtDuotone":
            return PiTShirtDuotone;
        case "pi:PiTableDuotone":
            return PiTableDuotone;
        case "pi:PiTabsDuotone":
            return PiTabsDuotone;
        case "pi:PiTagChevronDuotone":
            return PiTagChevronDuotone;
        case "pi:PiTagDuotone":
            return PiTagDuotone;
        case "pi:PiTagSimpleDuotone":
            return PiTagSimpleDuotone;
        case "pi:PiTargetDuotone":
            return PiTargetDuotone;
        case "pi:PiTaxiDuotone":
            return PiTaxiDuotone;
        case "pi:PiTeaBagDuotone":
            return PiTeaBagDuotone;
        case "pi:PiTelegramLogoDuotone":
            return PiTelegramLogoDuotone;
        case "pi:PiTelevisionDuotone":
            return PiTelevisionDuotone;
        case "pi:PiTelevisionSimpleDuotone":
            return PiTelevisionSimpleDuotone;
        case "pi:PiTennisBallDuotone":
            return PiTennisBallDuotone;
        case "pi:PiTentDuotone":
            return PiTentDuotone;
        case "pi:PiTerminalDuotone":
            return PiTerminalDuotone;
        case "pi:PiTerminalWindowDuotone":
            return PiTerminalWindowDuotone;
        case "pi:PiTestTubeDuotone":
            return PiTestTubeDuotone;
        case "pi:PiTextAUnderlineDuotone":
            return PiTextAUnderlineDuotone;
        case "pi:PiTextAaDuotone":
            return PiTextAaDuotone;
        case "pi:PiTextAlignCenterDuotone":
            return PiTextAlignCenterDuotone;
        case "pi:PiTextAlignJustifyDuotone":
            return PiTextAlignJustifyDuotone;
        case "pi:PiTextAlignLeftDuotone":
            return PiTextAlignLeftDuotone;
        case "pi:PiTextAlignRightDuotone":
            return PiTextAlignRightDuotone;
        case "pi:PiTextBDuotone":
            return PiTextBDuotone;
        case "pi:PiTextColumnsDuotone":
            return PiTextColumnsDuotone;
        case "pi:PiTextHDuotone":
            return PiTextHDuotone;
        case "pi:PiTextHFiveDuotone":
            return PiTextHFiveDuotone;
        case "pi:PiTextHFourDuotone":
            return PiTextHFourDuotone;
        case "pi:PiTextHOneDuotone":
            return PiTextHOneDuotone;
        case "pi:PiTextHSixDuotone":
            return PiTextHSixDuotone;
        case "pi:PiTextHThreeDuotone":
            return PiTextHThreeDuotone;
        case "pi:PiTextHTwoDuotone":
            return PiTextHTwoDuotone;
        case "pi:PiTextIndentDuotone":
            return PiTextIndentDuotone;
        case "pi:PiTextItalicDuotone":
            return PiTextItalicDuotone;
        case "pi:PiTextOutdentDuotone":
            return PiTextOutdentDuotone;
        case "pi:PiTextStrikethroughDuotone":
            return PiTextStrikethroughDuotone;
        case "pi:PiTextSubscriptDuotone":
            return PiTextSubscriptDuotone;
        case "pi:PiTextSuperscriptDuotone":
            return PiTextSuperscriptDuotone;
        case "pi:PiTextTDuotone":
            return PiTextTDuotone;
        case "pi:PiTextTSlashDuotone":
            return PiTextTSlashDuotone;
        case "pi:PiTextUnderlineDuotone":
            return PiTextUnderlineDuotone;
        case "pi:PiTextboxDuotone":
            return PiTextboxDuotone;
        case "pi:PiThermometerColdDuotone":
            return PiThermometerColdDuotone;
        case "pi:PiThermometerDuotone":
            return PiThermometerDuotone;
        case "pi:PiThermometerHotDuotone":
            return PiThermometerHotDuotone;
        case "pi:PiThermometerSimpleDuotone":
            return PiThermometerSimpleDuotone;
        case "pi:PiThreadsLogoDuotone":
            return PiThreadsLogoDuotone;
        case "pi:PiThreeDDuotone":
            return PiThreeDDuotone;
        case "pi:PiThumbsDownDuotone":
            return PiThumbsDownDuotone;
        case "pi:PiThumbsUpDuotone":
            return PiThumbsUpDuotone;
        case "pi:PiTicketDuotone":
            return PiTicketDuotone;
        case "pi:PiTidalLogoDuotone":
            return PiTidalLogoDuotone;
        case "pi:PiTiktokLogoDuotone":
            return PiTiktokLogoDuotone;
        case "pi:PiTildeDuotone":
            return PiTildeDuotone;
        case "pi:PiTimerDuotone":
            return PiTimerDuotone;
        case "pi:PiTipJarDuotone":
            return PiTipJarDuotone;
        case "pi:PiTipiDuotone":
            return PiTipiDuotone;
        case "pi:PiTireDuotone":
            return PiTireDuotone;
        case "pi:PiToggleLeftDuotone":
            return PiToggleLeftDuotone;
        case "pi:PiToggleRightDuotone":
            return PiToggleRightDuotone;
        case "pi:PiToiletDuotone":
            return PiToiletDuotone;
        case "pi:PiToiletPaperDuotone":
            return PiToiletPaperDuotone;
        case "pi:PiToolboxDuotone":
            return PiToolboxDuotone;
        case "pi:PiToothDuotone":
            return PiToothDuotone;
        case "pi:PiTornadoDuotone":
            return PiTornadoDuotone;
        case "pi:PiToteDuotone":
            return PiToteDuotone;
        case "pi:PiToteSimpleDuotone":
            return PiToteSimpleDuotone;
        case "pi:PiTowelDuotone":
            return PiTowelDuotone;
        case "pi:PiTractorDuotone":
            return PiTractorDuotone;
        case "pi:PiTrademarkDuotone":
            return PiTrademarkDuotone;
        case "pi:PiTrademarkRegisteredDuotone":
            return PiTrademarkRegisteredDuotone;
        case "pi:PiTrafficConeDuotone":
            return PiTrafficConeDuotone;
        case "pi:PiTrafficSignDuotone":
            return PiTrafficSignDuotone;
        case "pi:PiTrafficSignalDuotone":
            return PiTrafficSignalDuotone;
        case "pi:PiTrainDuotone":
            return PiTrainDuotone;
        case "pi:PiTrainRegionalDuotone":
            return PiTrainRegionalDuotone;
        case "pi:PiTrainSimpleDuotone":
            return PiTrainSimpleDuotone;
        case "pi:PiTramDuotone":
            return PiTramDuotone;
        case "pi:PiTranslateDuotone":
            return PiTranslateDuotone;
        case "pi:PiTrashDuotone":
            return PiTrashDuotone;
        case "pi:PiTrashSimpleDuotone":
            return PiTrashSimpleDuotone;
        case "pi:PiTrayArrowDownDuotone":
            return PiTrayArrowDownDuotone;
        case "pi:PiTrayArrowUpDuotone":
            return PiTrayArrowUpDuotone;
        case "pi:PiTrayDuotone":
            return PiTrayDuotone;
        case "pi:PiTreasureChestDuotone":
            return PiTreasureChestDuotone;
        case "pi:PiTreeDuotone":
            return PiTreeDuotone;
        case "pi:PiTreeEvergreenDuotone":
            return PiTreeEvergreenDuotone;
        case "pi:PiTreePalmDuotone":
            return PiTreePalmDuotone;
        case "pi:PiTreeStructureDuotone":
            return PiTreeStructureDuotone;
        case "pi:PiTreeViewDuotone":
            return PiTreeViewDuotone;
        case "pi:PiTrendDownDuotone":
            return PiTrendDownDuotone;
        case "pi:PiTrendUpDuotone":
            return PiTrendUpDuotone;
        case "pi:PiTriangleDashedDuotone":
            return PiTriangleDashedDuotone;
        case "pi:PiTriangleDuotone":
            return PiTriangleDuotone;
        case "pi:PiTrolleyDuotone":
            return PiTrolleyDuotone;
        case "pi:PiTrolleySuitcaseDuotone":
            return PiTrolleySuitcaseDuotone;
        case "pi:PiTrophyDuotone":
            return PiTrophyDuotone;
        case "pi:PiTruckDuotone":
            return PiTruckDuotone;
        case "pi:PiTruckTrailerDuotone":
            return PiTruckTrailerDuotone;
        case "pi:PiTumblrLogoDuotone":
            return PiTumblrLogoDuotone;
        case "pi:PiTwitchLogoDuotone":
            return PiTwitchLogoDuotone;
        case "pi:PiTwitterLogoDuotone":
            return PiTwitterLogoDuotone;
        case "pi:PiUmbrellaDuotone":
            return PiUmbrellaDuotone;
        case "pi:PiUmbrellaSimpleDuotone":
            return PiUmbrellaSimpleDuotone;
        case "pi:PiUnionDuotone":
            return PiUnionDuotone;
        case "pi:PiUniteDuotone":
            return PiUniteDuotone;
        case "pi:PiUniteSquareDuotone":
            return PiUniteSquareDuotone;
        case "pi:PiUploadDuotone":
            return PiUploadDuotone;
        case "pi:PiUploadSimpleDuotone":
            return PiUploadSimpleDuotone;
        case "pi:PiUsbDuotone":
            return PiUsbDuotone;
        case "pi:PiUserCheckDuotone":
            return PiUserCheckDuotone;
        case "pi:PiUserCircleCheckDuotone":
            return PiUserCircleCheckDuotone;
        case "pi:PiUserCircleDashedDuotone":
            return PiUserCircleDashedDuotone;
        case "pi:PiUserCircleDuotone":
            return PiUserCircleDuotone;
        case "pi:PiUserCircleGearDuotone":
            return PiUserCircleGearDuotone;
        case "pi:PiUserCircleMinusDuotone":
            return PiUserCircleMinusDuotone;
        case "pi:PiUserCirclePlusDuotone":
            return PiUserCirclePlusDuotone;
        case "pi:PiUserDuotone":
            return PiUserDuotone;
        case "pi:PiUserFocusDuotone":
            return PiUserFocusDuotone;
        case "pi:PiUserGearDuotone":
            return PiUserGearDuotone;
        case "pi:PiUserListDuotone":
            return PiUserListDuotone;
        case "pi:PiUserMinusDuotone":
            return PiUserMinusDuotone;
        case "pi:PiUserPlusDuotone":
            return PiUserPlusDuotone;
        case "pi:PiUserRectangleDuotone":
            return PiUserRectangleDuotone;
        case "pi:PiUserSoundDuotone":
            return PiUserSoundDuotone;
        case "pi:PiUserSquareDuotone":
            return PiUserSquareDuotone;
        case "pi:PiUserSwitchDuotone":
            return PiUserSwitchDuotone;
        case "pi:PiUsersDuotone":
            return PiUsersDuotone;
        case "pi:PiUsersFourDuotone":
            return PiUsersFourDuotone;
        case "pi:PiUsersThreeDuotone":
            return PiUsersThreeDuotone;
        case "pi:PiVanDuotone":
            return PiVanDuotone;
        case "pi:PiVaultDuotone":
            return PiVaultDuotone;
        case "pi:PiVectorThreeDuotone":
            return PiVectorThreeDuotone;
        case "pi:PiVectorTwoDuotone":
            return PiVectorTwoDuotone;
        case "pi:PiVibrateDuotone":
            return PiVibrateDuotone;
        case "pi:PiVideoCameraDuotone":
            return PiVideoCameraDuotone;
        case "pi:PiVideoCameraSlashDuotone":
            return PiVideoCameraSlashDuotone;
        case "pi:PiVideoConferenceDuotone":
            return PiVideoConferenceDuotone;
        case "pi:PiVideoDuotone":
            return PiVideoDuotone;
        case "pi:PiVignetteDuotone":
            return PiVignetteDuotone;
        case "pi:PiVinylRecordDuotone":
            return PiVinylRecordDuotone;
        case "pi:PiVirtualRealityDuotone":
            return PiVirtualRealityDuotone;
        case "pi:PiVirusDuotone":
            return PiVirusDuotone;
        case "pi:PiVisorDuotone":
            return PiVisorDuotone;
        case "pi:PiVoicemailDuotone":
            return PiVoicemailDuotone;
        case "pi:PiVolleyballDuotone":
            return PiVolleyballDuotone;
        case "pi:PiWallDuotone":
            return PiWallDuotone;
        case "pi:PiWalletDuotone":
            return PiWalletDuotone;
        case "pi:PiWarehouseDuotone":
            return PiWarehouseDuotone;
        case "pi:PiWarningCircleDuotone":
            return PiWarningCircleDuotone;
        case "pi:PiWarningDiamondDuotone":
            return PiWarningDiamondDuotone;
        case "pi:PiWarningDuotone":
            return PiWarningDuotone;
        case "pi:PiWarningOctagonDuotone":
            return PiWarningOctagonDuotone;
        case "pi:PiWashingMachineDuotone":
            return PiWashingMachineDuotone;
        case "pi:PiWatchDuotone":
            return PiWatchDuotone;
        case "pi:PiWaveSawtoothDuotone":
            return PiWaveSawtoothDuotone;
        case "pi:PiWaveSineDuotone":
            return PiWaveSineDuotone;
        case "pi:PiWaveSquareDuotone":
            return PiWaveSquareDuotone;
        case "pi:PiWaveTriangleDuotone":
            return PiWaveTriangleDuotone;
        case "pi:PiWaveformDuotone":
            return PiWaveformDuotone;
        case "pi:PiWaveformSlashDuotone":
            return PiWaveformSlashDuotone;
        case "pi:PiWavesDuotone":
            return PiWavesDuotone;
        case "pi:PiWebcamDuotone":
            return PiWebcamDuotone;
    }
}