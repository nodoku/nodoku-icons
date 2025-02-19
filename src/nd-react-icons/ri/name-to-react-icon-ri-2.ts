import type {IconType} from "react-icons";

import {
    RiRocketFill,
    RiRocketLine,
    RiRouteFill,
    RiRouteLine,
    RiRunFill,
    RiRunLine,
    RiSailboatFill,
    RiSailboatLine,
    RiShip2Fill,
    RiShip2Line,
    RiShipFill,
    RiShipLine,
    RiSignalTowerFill,
    RiSignalTowerLine,
    RiSignpostFill,
    RiSignpostLine,
    RiSpaceShipFill,
    RiSpaceShipLine,
    RiSteering2Fill,
    RiSteering2Line,
    RiSteeringFill,
    RiSteeringLine,
    RiSubwayFill,
    RiSubwayLine,
    RiSubwayWifiFill,
    RiSubwayWifiLine,
    RiSuitcase2Fill,
    RiSuitcase2Line,
    RiSuitcase3Fill,
    RiSuitcase3Line,
    RiSuitcaseFill,
    RiSuitcaseLine,
    RiTakeawayFill,
    RiTakeawayLine,
    RiTaxiFill,
    RiTaxiLine,
    RiTaxiWifiFill,
    RiTaxiWifiLine,
    RiTimeZoneFill,
    RiTimeZoneLine,
    RiTrafficLightFill,
    RiTrafficLightLine,
    RiTrainFill,
    RiTrainLine,
    RiTrainWifiFill,
    RiTrainWifiLine,
    RiTreasureMapFill,
    RiTreasureMapLine,
    RiTruckFill,
    RiTruckLine,
    RiUnpinFill,
    RiUnpinLine,
    RiWalkFill,
    RiWalkLine,
    Ri4kFill,
    Ri4kLine,
    RiAlbumFill,
    RiAlbumLine,
    RiAspectRatioFill,
    RiAspectRatioLine,
    RiBroadcastFill,
    RiBroadcastLine,
    RiCamera2Fill,
    RiCamera2Line,
    RiCamera3Fill,
    RiCamera3Line,
    RiCameraAiFill,
    RiCameraAiLine,
    RiCameraFill,
    RiCameraLensAiFill,
    RiCameraLensAiLine,
    RiCameraLensFill,
    RiCameraLensLine,
    RiCameraLine,
    RiCameraOffFill,
    RiCameraOffLine,
    RiCameraSwitchFill,
    RiCameraSwitchLine,
    RiClapperboardAiFill,
    RiClapperboardAiLine,
    RiClapperboardFill,
    RiClapperboardLine,
    RiClosedCaptioningAiFill,
    RiClosedCaptioningAiLine,
    RiClosedCaptioningFill,
    RiClosedCaptioningLine,
    RiDiscFill,
    RiDiscLine,
    RiDvFill,
    RiDvLine,
    RiDvdAiFill,
    RiDvdAiLine,
    RiDvdFill,
    RiDvdLine,
    RiEjectFill,
    RiEjectLine,
    RiEqualizer2Fill,
    RiEqualizer2Line,
    RiEqualizer3Fill,
    RiEqualizer3Line,
    RiEqualizerFill,
    RiEqualizerLine,
    RiFilmAiFill,
    RiFilmAiLine,
    RiFilmFill,
    RiFilmLine,
    RiForward10Fill,
    RiForward10Line,
    RiForward15Fill,
    RiForward15Line,
    RiForward30Fill,
    RiForward30Line,
    RiForward5Fill,
    RiForward5Line,
    RiForwardEndFill,
    RiForwardEndLine,
    RiForwardEndMiniFill,
    RiForwardEndMiniLine,
    RiFullscreenExitFill,
    RiFullscreenExitLine,
    RiFullscreenFill,
    RiFullscreenLine,
    RiGalleryFill,
    RiGalleryLine,
    RiGalleryUploadFill,
    RiGalleryUploadLine,
    RiHdFill,
    RiHdLine,
    RiHeadphoneFill,
    RiHeadphoneLine,
    RiHqFill,
    RiHqLine,
    RiImage2Fill,
    RiImage2Line,
    RiImageAddFill,
    RiImageAddLine,
    RiImageAiFill,
    RiImageAiLine,
    RiImageCircleAiFill,
    RiImageCircleAiLine,
    RiImageCircleFill,
    RiImageCircleLine,
    RiImageEditFill,
    RiImageEditLine,
    RiImageFill,
    RiImageLine,
    RiLandscapeAiFill,
    RiLandscapeAiLine,
    RiLandscapeFill,
    RiLandscapeLine,
    RiLiveFill,
    RiLiveLine,
    RiMemoriesFill,
    RiMemoriesLine,
    RiMic2AiFill,
    RiMic2AiLine,
    RiMic2Fill,
    RiMic2Line,
    RiMicAiFill,
    RiMicAiLine,
    RiMicFill,
    RiMicLine,
    RiMicOffFill,
    RiMicOffLine,
    RiMovie2AiFill,
    RiMovie2AiLine,
    RiMovie2Fill,
    RiMovie2Line,
    RiMovieAiFill,
    RiMovieAiLine,
    RiMovieFill,
    RiMovieLine,
    RiMusic2Fill,
    RiMusic2Line,
    RiMusicAiFill,
    RiMusicAiLine,
    RiMusicFill,
    RiMusicLine,
    RiMvAiFill,
    RiMvAiLine,
    RiMvFill,
    RiMvLine,
    RiNotification2Fill,
    RiNotification2Line,
    RiNotification3Fill,
    RiNotification3Line,
    RiNotification4Fill,
    RiNotification4Line,
    RiNotificationFill,
    RiNotificationLine,
    RiNotificationOffFill,
    RiNotificationOffLine,
    RiNotificationSnoozeFill,
    RiNotificationSnoozeLine,
    RiOrderPlayFill,
    RiOrderPlayLine,
    RiPauseCircleFill,
    RiPauseCircleLine,
    RiPauseFill,
    RiPauseLargeFill,
    RiPauseLargeLine,
    RiPauseLine,
    RiPauseMiniFill,
    RiPauseMiniLine,
    RiPhoneCameraFill,
    RiPhoneCameraLine,
    RiPictureInPicture2Fill,
    RiPictureInPicture2Line,
    RiPictureInPictureExitFill,
    RiPictureInPictureExitLine,
    RiPictureInPictureFill,
    RiPictureInPictureLine,
    RiPlayCircleFill,
    RiPlayCircleLine,
    RiPlayFill,
    RiPlayLargeFill,
    RiPlayLargeLine,
    RiPlayLine,
    RiPlayList2Fill,
    RiPlayList2Line,
    RiPlayListAddFill,
    RiPlayListAddLine,
    RiPlayListFill,
    RiPlayListLine,
    RiPlayMiniFill,
    RiPlayMiniLine,
    RiPlayReverseFill,
    RiPlayReverseLargeFill,
    RiPlayReverseLargeLine,
    RiPlayReverseLine,
    RiPlayReverseMiniFill,
    RiPlayReverseMiniLine,
    RiPolaroid2Fill,
    RiPolaroid2Line,
    RiPolaroidFill,
    RiPolaroidLine,
    RiRadio2Fill,
    RiRadio2Line,
    RiRadioFill,
    RiRadioLine,
    RiRecordCircleFill,
    RiRecordCircleLine,
    RiRepeat2Fill,
    RiRepeat2Line,
    RiRepeatFill,
    RiRepeatLine,
    RiRepeatOneFill,
    RiRepeatOneLine,
    RiReplay10Fill,
    RiReplay10Line,
    RiReplay15Fill,
    RiReplay15Line,
    RiReplay30Fill,
    RiReplay30Line,
    RiReplay5Fill,
    RiReplay5Line,
    RiRewindFill,
    RiRewindLine,
    RiRewindMiniFill,
    RiRewindMiniLine,
    RiRewindStartFill,
    RiRewindStartLine,
    RiRewindStartMiniFill,
    RiRewindStartMiniLine,
    RiRhythmFill,
    RiRhythmLine,
    RiShuffleFill,
    RiShuffleLine,
    RiSkipBackFill,
    RiSkipBackLine,
    RiSkipBackMiniFill,
    RiSkipBackMiniLine,
    RiSkipForwardFill,
    RiSkipForwardLine,
    RiSkipForwardMiniFill,
    RiSkipForwardMiniLine,
    RiSlowDownFill,
    RiSlowDownLine,
    RiSoundModuleFill,
    RiSoundModuleLine,
    RiSpeaker2Fill,
    RiSpeaker2Line,
    RiSpeaker3Fill,
    RiSpeaker3Line,
    RiSpeakerFill,
    RiSpeakerLine,
    RiSpeedFill,
    RiSpeedLine,
    RiSpeedMiniFill,
    RiSpeedMiniLine,
    RiSpeedUpFill,
    RiSpeedUpLine,
    RiStopCircleFill,
    RiStopCircleLine,
    RiStopFill,
    RiStopLargeFill,
    RiStopLargeLine,
    RiStopLine,
    RiStopMiniFill,
    RiStopMiniLine,
    RiSurroundSoundFill,
    RiSurroundSoundLine,
    RiTapeFill,
    RiTapeLine,
    RiVideoAddFill,
    RiVideoAddLine,
    RiVideoAiFill,
    RiVideoAiLine,
    RiVideoDownloadFill,
    RiVideoDownloadLine,
    RiVideoFill,
    RiVideoLine,
    RiVideoOffFill,
    RiVideoOffLine,
    RiVideoOnAiFill,
    RiVideoOnAiLine,
    RiVideoOnFill,
    RiVideoOnLine,
    RiVideoUploadFill,
    RiVideoUploadLine,
    RiVidicon2Fill,
    RiVidicon2Line,
    RiVidiconFill,
    RiVidiconLine,
    RiVoiceAiFill,
    RiVoiceAiLine,
    RiVoiceprintFill,
    RiVoiceprintLine,
    RiVolumeDownFill,
    RiVolumeDownLine,
    RiVolumeMuteFill,
    RiVolumeMuteLine,
    RiVolumeOffVibrateFill,
    RiVolumeOffVibrateLine,
    RiVolumeUpFill,
    RiVolumeUpLine,
    RiVolumeVibrateFill,
    RiVolumeVibrateLine,
    RiWebcamFill,
    RiWebcamLine,
    RiArmchairFill,
    RiArmchairLine,
    RiBasketballFill,
    RiBasketballLine,
    RiBellFill,
    RiBellLine,
    RiBilliardsFill,
    RiBilliardsLine,
    RiBookShelfFill,
    RiBookShelfLine,
    RiBox1Fill,
    RiBox1Line,
    RiBox2Fill,
    RiBox2Line,
    RiBox3Fill,
    RiBox3Line,
    RiBoxingFill,
    RiBoxingLine,
    RiCactusFill,
    RiCactusLine,
    RiCandleFill,
    RiCandleLine,
    RiCharacterRecognitionFill,
    RiCharacterRecognitionLine,
    RiCrossFill,
    RiCrossLine,
    RiDice1Fill,
    RiDice1Line,
    RiDice2Fill,
    RiDice2Line,
    RiDice3Fill,
    RiDice3Line,
    RiDice4Fill,
    RiDice4Line,
    RiDice5Fill,
    RiDice5Line,
    RiDice6Fill,
    RiDice6Line,
    RiDiceFill,
    RiDiceLine,
    RiDoorClosedFill,
    RiDoorClosedLine,
    RiDoorFill,
    RiDoorLine,
    RiDoorLockBoxFill,
    RiDoorLockBoxLine,
    RiDoorLockFill,
    RiDoorLockLine,
    RiDoorOpenFill,
    RiDoorOpenLine,
    RiFlowerFill,
    RiFlowerLine,
    RiFootballFill,
    RiFootballLine,
    RiFridgeFill,
    RiFridgeLine,
    RiGameFill,
    RiGameLine,
    RiGlasses2Fill,
    RiGlasses2Line,
    RiGlassesFill,
    RiGlassesLine,
    RiGogglesFill,
    RiGogglesLine,
    RiGolfBallFill,
    RiGolfBallLine,
    RiGraduationCapFill,
    RiGraduationCapLine,
    RiHandbagFill,
    RiHandbagLine,
    RiInfinityFill,
    RiInfinityLine,
    RiKey2Fill,
    RiKey2Line,
    RiKeyFill,
    RiKeyLine,
    RiLeafFill,
    RiLeafLine,
    RiLightbulbFill,
    RiLightbulbFlashFill,
    RiLightbulbFlashLine,
    RiLightbulbLine,
    RiOutlet2Fill,
    RiOutlet2Line,
    RiOutletFill,
    RiOutletLine,
    RiPingPongFill,
    RiPingPongLine,
    RiPlantFill,
    RiPlantLine,
    RiPlug2Fill,
    RiPlug2Line,
    RiPlugFill,
    RiPlugLine,
    RiPokerClubsFill,
    RiPokerClubsLine,
    RiPokerDiamondsFill,
    RiPokerDiamondsLine,
    RiPokerHeartsFill,
    RiPokerHeartsLine,
    RiPokerSpadesFill,
    RiPokerSpadesLine,
    RiPoliceBadgeFill,
    RiPoliceBadgeLine,
    RiRecycleFill,
    RiRecycleLine,
    RiReservedFill,
    RiReservedLine,
    RiScales2Fill,
    RiScales2Line,
    RiScales3Fill,
    RiScales3Line,
    RiScalesFill,
    RiScalesLine,
    RiSeedlingFill,
    RiSeedlingLine,
    RiShirtFill,
    RiShirtLine,
    RiSofaFill,
    RiSofaLine,
    RiStairsFill,
    RiStairsLine,
    RiSwordFill,
    RiSwordLine,
    RiTShirt2Fill,
    RiTShirt2Line,
    RiTShirtAirFill,
    RiTShirtAirLine,
    RiTShirtFill,
    RiTShirtLine,
    RiToothFill,
    RiToothLine,
    RiTreeFill,
    RiTreeLine,
    RiUmbrellaFill,
    RiUmbrellaLine,
    RiVoiceRecognitionFill,
    RiVoiceRecognitionLine,
    RiWeightFill,
    RiWeightLine,
    RiWheelchairFill,
    RiWheelchairLine,
    RiAddBoxFill,
    RiAddBoxLine,
    RiAddCircleFill,
    RiAddCircleLine,
    RiAddFill,
    RiAddLargeFill,
    RiAddLargeLine,
    RiAddLine,
    RiAlarmFill,
    RiAlarmLine,
    RiAlarmSnoozeFill,
    RiAlarmSnoozeLine,
    RiAlarmWarningFill,
    RiAlarmWarningLine,
    RiAlertFill,
    RiAlertLine,
    RiApps2AddFill,
    RiApps2AddLine,
    RiApps2AiFill,
    RiApps2AiLine,
    RiApps2Fill,
    RiApps2Line,
    RiAppsFill,
    RiAppsLine,
    RiCheckDoubleFill,
    RiCheckDoubleLine,
    RiCheckFill,
    RiCheckLine,
    RiCheckboxBlankCircleFill,
    RiCheckboxBlankCircleLine,
    RiCheckboxBlankFill,
    RiCheckboxBlankLine,
    RiCheckboxCircleFill,
    RiCheckboxCircleLine,
    RiCheckboxFill,
    RiCheckboxIndeterminateFill,
    RiCheckboxIndeterminateLine,
    RiCheckboxLine,
    RiCheckboxMultipleBlankFill,
    RiCheckboxMultipleBlankLine,
    RiCheckboxMultipleFill,
    RiCheckboxMultipleLine,
    RiCloseCircleFill,
    RiCloseCircleLine,
    RiCloseFill,
    RiCloseLargeFill,
    RiCloseLargeLine,
    RiCloseLine,
    RiDashboardFill,
    RiDashboardHorizontalFill,
    RiDashboardHorizontalLine,
    RiDashboardLine,
    RiDeleteBack2Fill,
    RiDeleteBack2Line,
    RiDeleteBackFill,
    RiDeleteBackLine,
    RiDeleteBin2Fill,
    RiDeleteBin2Line,
    RiDeleteBin3Fill,
    RiDeleteBin3Line,
    RiDeleteBin4Fill,
    RiDeleteBin4Line,
    RiDeleteBin5Fill,
    RiDeleteBin5Line,
    RiDeleteBin6Fill,
    RiDeleteBin6Line,
    RiDeleteBin7Fill,
    RiDeleteBin7Line,
    RiDeleteBinFill,
    RiDeleteBinLine,
    RiDivideFill,
    RiDivideLine,
    RiDownload2Fill,
    RiDownload2Line,
    RiDownloadCloud2Fill,
    RiDownloadCloud2Line,
    RiDownloadCloudFill,
    RiDownloadCloudLine,
    RiDownloadFill,
    RiDownloadLine,
    RiEqualFill,
    RiEqualLine,
    RiErrorWarningFill,
    RiErrorWarningLine,
    RiExportFill,
    RiExportLine,
    RiExternalLinkFill,
    RiExternalLinkLine,
    RiEye2Fill,
    RiEye2Line,
    RiEyeCloseFill,
    RiEyeCloseLine,
    RiEyeFill,
    RiEyeLine,
    RiEyeOffFill,
    RiEyeOffLine,
    RiFilter2Fill,
    RiFilter2Line,
    RiFilter3Fill,
    RiFilter3Line,
    RiFilterFill,
    RiFilterLine,
    RiFilterOffFill,
    RiFilterOffLine,
    RiFindReplaceFill,
    RiFindReplaceLine,
    RiForbid2Fill,
    RiForbid2Line,
    RiForbidFill,
    RiForbidLine,
    RiFunctionAddFill,
    RiFunctionAddLine,
    RiFunctionFill,
    RiFunctionLine,
    RiHistoryFill,
    RiHistoryLine,
    RiHourglass2Fill,
    RiHourglass2Line,
    RiHourglassFill,
    RiHourglassLine,
    RiImportFill,
    RiImportLine,
    RiIndeterminateCircleFill,
    RiIndeterminateCircleLine,
    RiInformation2Fill,
    RiInformation2Line,
    RiInformationFill,
    RiInformationLine,
    RiInformationOffFill,
    RiInformationOffLine,
    RiListSettingsFill,
    RiListSettingsLine,
    RiLoader2Fill,
    RiLoader2Line,
    RiLoader3Fill,
    RiLoader3Line,
    RiLoader4Fill,
    RiLoader4Line,
    RiLoader5Fill,
    RiLoader5Line,
    RiLoaderFill,
    RiLoaderLine,
    RiLock2Fill,
    RiLock2Line,
    RiLockFill,
    RiLockLine,
    RiLockPasswordFill,
    RiLockPasswordLine,
    RiLockStarFill,
    RiLockStarLine,
    RiLockUnlockFill,
    RiLockUnlockLine,
    RiLoginBoxFill,
    RiLoginBoxLine,
    RiLoginCircleFill,
    RiLoginCircleLine,
    RiLogoutBoxFill,
    RiLogoutBoxLine,
    RiLogoutBoxRFill,
    RiLogoutBoxRLine,
    RiLogoutCircleFill,
    RiLogoutCircleLine,
    RiLogoutCircleRFill,
    RiLogoutCircleRLine,
    RiLoopLeftFill,
    RiLoopLeftLine,
    RiLoopRightFill,
    RiLoopRightLine,
    RiMenu2Fill,
    RiMenu2Line,
    RiMenu3Fill,
    RiMenu3Line,
    RiMenu4Fill,
    RiMenu4Line,
    RiMenu5Fill,
    RiMenu5Line,
    RiMenuAddFill,
    RiMenuAddLine,
    RiMenuFill,
    RiMenuFold2Fill,
    RiMenuFold2Line,
    RiMenuFold3Fill,
    RiMenuFold3Line,
    RiMenuFold4Fill,
    RiMenuFold4Line,
    RiMenuFoldFill,
    RiMenuFoldLine,
    RiMenuLine,
    RiMenuSearchFill,
    RiMenuSearchLine,
    RiMenuUnfold2Fill,
    RiMenuUnfold2Line,
    RiMenuUnfold3Fill,
    RiMenuUnfold3Line,
    RiMenuUnfold4Fill,
    RiMenuUnfold4Line,
    RiMenuUnfoldFill,
    RiMenuUnfoldLine,
    RiMore2Fill,
    RiMore2Line,
    RiMoreFill,
    RiMoreLine,
    RiNotificationBadgeFill,
    RiNotificationBadgeLine,
    RiProgress1Fill,
    RiProgress1Line,
    RiProgress2Fill,
    RiProgress2Line,
    RiProgress3Fill,
    RiProgress3Line,
    RiProgress4Fill,
    RiProgress4Line,
    RiProgress5Fill,
    RiProgress5Line,
    RiProgress6Fill,
    RiProgress6Line,
    RiProgress7Fill,
    RiProgress7Line,
    RiProgress8Fill,
    RiProgress8Line,
    RiProhibited2Fill,
    RiProhibited2Line,
    RiProhibitedFill,
    RiProhibitedLine,
    RiQuestionFill,
    RiQuestionLine,
    RiRadioButtonFill,
    RiRadioButtonLine,
    RiRefreshFill,
    RiRefreshLine,
    RiResetLeftFill,
    RiResetLeftLine,
    RiResetRightFill,
    RiResetRightLine,
    RiSearch2Fill,
    RiSearch2Line,
    RiSearchEyeFill,
    RiSearchEyeLine,
    RiSearchFill,
    RiSearchLine,
    RiSettings2Fill,
    RiSettings2Line,
    RiSettings3Fill,
    RiSettings3Line,
    RiSettings4Fill,
    RiSettings4Line,
    RiSettings5Fill,
    RiSettings5Line,
    RiSettings6Fill,
    RiSettings6Line,
    RiSettingsFill,
    RiSettingsLine,
    RiShare2Fill,
    RiShare2Line,
    RiShareBoxFill,
    RiShareBoxLine,
    RiShareCircleFill,
    RiShareCircleLine,
    RiShareFill,
    RiShareForward2Fill,
    RiShareForward2Line,
    RiShareForwardBoxFill,
    RiShareForwardBoxLine,
    RiShareForwardFill,
    RiShareForwardLine,
    RiShareLine,
    RiShieldCheckFill,
    RiShieldCheckLine,
    RiShieldCrossFill,
    RiShieldCrossLine,
    RiShieldFill,
    RiShieldFlashFill,
    RiShieldFlashLine,
    RiShieldKeyholeFill,
    RiShieldKeyholeLine,
    RiShieldLine,
    RiShieldStarFill,
    RiShieldStarLine,
    RiShieldUserFill,
    RiShieldUserLine,
    RiSideBarFill,
    RiSideBarLine,
    RiSidebarFoldFill,
    RiSidebarFoldLine,
    RiSidebarUnfoldFill,
    RiSidebarUnfoldLine,
    RiSpam2Fill,
    RiSpam2Line,
    RiSpam3Fill,
    RiSpam3Line,
    RiSpamFill,
    RiSpamLine,
    RiStarFill,
    RiStarHalfFill,
    RiStarHalfLine,
    RiStarHalfSFill,
    RiStarHalfSLine,
    RiStarLine,
    RiStarOffFill,
    RiStarOffLine,
    RiStarSFill,
    RiStarSLine,
    RiSubtractFill,
    RiSubtractLine,
    RiThumbDownFill,
    RiThumbDownLine,
    RiThumbUpFill,
    RiThumbUpLine,
    RiTimeFill,
    RiTimeLine,
    RiTimer2Fill,
    RiTimer2Line,
    RiTimerFill,
    RiTimerFlashFill,
    RiTimerFlashLine,
    RiTimerLine,
    RiToggleFill,
    RiToggleLine,
    RiUpload2Fill,
    RiUpload2Line,
    RiUploadCloud2Fill,
    RiUploadCloud2Line,
    RiUploadCloudFill,
    RiUploadCloudLine,
    RiUploadFill,
    RiUploadLine,
    RiZoomInFill,
    RiZoomInLine,
    RiZoomOutFill,
    RiZoomOutLine,
    RiAccountBox2Fill,
    RiAccountBox2Line,
    RiAccountBoxFill,
    RiAccountBoxLine,
    RiAccountCircle2Fill,
    RiAccountCircle2Line,
    RiAccountCircleFill,
    RiAccountCircleLine,
    RiAccountPinBoxFill,
    RiAccountPinBoxLine,
    RiAccountPinCircleFill,
    RiAccountPinCircleLine,
    RiAdminFill,
    RiAdminLine,
    RiAliensFill,
    RiAliensLine,
    RiBearSmileFill,
    RiBearSmileLine,
    RiBodyScanFill,
    RiBodyScanLine,
    RiContactsFill,
    RiContactsLine,
    RiCriminalFill,
    RiCriminalLine,
    RiEmotion2Fill,
    RiEmotion2Line,
    RiEmotionFill,
    RiEmotionHappyFill,
    RiEmotionHappyLine,
    RiEmotionLaughFill,
    RiEmotionLaughLine,
    RiEmotionLine,
    RiEmotionNormalFill,
    RiEmotionNormalLine,
    RiEmotionSadFill,
    RiEmotionSadLine,
    RiEmotionUnhappyFill,
    RiEmotionUnhappyLine,
    RiGenderlessFill,
    RiGenderlessLine,
    RiGhost2Fill,
    RiGhost2Line,
    RiGhostFill,
    RiGhostLine,
    RiGhostSmileFill,
    RiGhostSmileLine,
    RiGroup2Fill,
    RiGroup2Line,
    RiGroup3Fill,
    RiGroup3Line,
    RiGroupFill,
    RiGroupLine,
    RiMenFill,
    RiMenLine,
    RiMickeyFill,
    RiMickeyLine,
    RiOpenArmFill,
    RiOpenArmLine,
    RiParentFill,
    RiParentLine,
    RiRobot2Fill,
    RiRobot2Line,
    RiRobot3Fill,
    RiRobot3Line,
    RiRobotFill,
    RiRobotLine,
    RiSkull2Fill,
    RiSkull2Line,
    RiSkullFill,
    RiSkullLine,
    RiSpyFill,
    RiSpyLine,
    RiStarSmileFill,
    RiStarSmileLine,
    RiTeamFill,
    RiTeamLine,
    RiTravestiFill,
    RiTravestiLine,
    RiUser2Fill,
    RiUser2Line,
    RiUser3Fill,
    RiUser3Line,
    RiUser4Fill,
    RiUser4Line,
    RiUser5Fill,
    RiUser5Line,
    RiUser6Fill,
    RiUser6Line,
    RiUserAddFill,
    RiUserAddLine,
    RiUserCommunityFill,
    RiUserCommunityLine,
    RiUserFill,
    RiUserFollowFill,
    RiUserFollowLine,
    RiUserForbidFill,
    RiUserForbidLine,
    RiUserHeartFill,
    RiUserHeartLine,
    RiUserLine,
    RiUserLocationFill,
    RiUserLocationLine,
    RiUserMinusFill,
    RiUserMinusLine,
    RiUserReceived2Fill,
    RiUserReceived2Line,
    RiUserReceivedFill,
    RiUserReceivedLine,
    RiUserSearchFill,
    RiUserSearchLine,
    RiUserSettingsFill,
    RiUserSettingsLine,
    RiUserShared2Fill,
    RiUserShared2Line,
    RiUserSharedFill,
    RiUserSharedLine,
    RiUserSmileFill,
    RiUserSmileLine,
    RiUserStarFill,
    RiUserStarLine,
    RiUserUnfollowFill,
    RiUserUnfollowLine,
    RiUserVoiceFill,
    RiUserVoiceLine,
    RiWomenFill,
    RiWomenLine,
    RiBlazeFill,
    RiBlazeLine,
    RiCelsiusFill,
    RiCelsiusLine,
    RiCloudWindyFill,
    RiCloudWindyLine,
    RiCloudy2Fill,
    RiCloudy2Line,
    RiCloudyFill,
    RiCloudyLine,
    RiDrizzleFill,
    RiDrizzleLine,
    RiEarthquakeFill,
    RiEarthquakeLine,
    RiFahrenheitFill,
    RiFahrenheitLine,
    RiFireFill,
    RiFireLine,
    RiFlashlightFill,
    RiFlashlightLine,
    RiFloodFill,
    RiFloodLine,
    RiFoggyFill,
    RiFoggyLine,
    RiHailFill,
    RiHailLine,
    RiHaze2Fill,
    RiHaze2Line,
    RiHazeFill,
    RiHazeLine,
    RiHeavyShowersFill,
    RiHeavyShowersLine,
    RiMeteorFill,
    RiMeteorLine,
    RiMistFill,
    RiMistLine,
    RiMoonClearFill,
    RiMoonClearLine,
    RiMoonCloudyFill,
    RiMoonCloudyLine,
    RiMoonFill,
    RiMoonFoggyFill,
    RiMoonFoggyLine,
    RiMoonLine,
    RiRainbowFill,
    RiRainbowLine,
    RiRainyFill,
    RiRainyLine,
    RiShining2Fill,
    RiShining2Line,
    RiShiningFill,
    RiShiningLine,
    RiShowersFill,
    RiShowersLine,
    RiSnowflakeFill,
    RiSnowflakeLine,
    RiSnowyFill,
    RiSnowyLine,
    RiSparkling2Fill,
    RiSparkling2Line,
    RiSparklingFill,
    RiSparklingLine,
} from "react-icons/ri"

export function nameToReactIcon_ri_2(iconName: string): IconType | undefined {

    switch(iconName) {
        case "ri:RiRocketFill":
            return RiRocketFill;
        case "ri:RiRocketLine":
            return RiRocketLine;
        case "ri:RiRouteFill":
            return RiRouteFill;
        case "ri:RiRouteLine":
            return RiRouteLine;
        case "ri:RiRunFill":
            return RiRunFill;
        case "ri:RiRunLine":
            return RiRunLine;
        case "ri:RiSailboatFill":
            return RiSailboatFill;
        case "ri:RiSailboatLine":
            return RiSailboatLine;
        case "ri:RiShip2Fill":
            return RiShip2Fill;
        case "ri:RiShip2Line":
            return RiShip2Line;
        case "ri:RiShipFill":
            return RiShipFill;
        case "ri:RiShipLine":
            return RiShipLine;
        case "ri:RiSignalTowerFill":
            return RiSignalTowerFill;
        case "ri:RiSignalTowerLine":
            return RiSignalTowerLine;
        case "ri:RiSignpostFill":
            return RiSignpostFill;
        case "ri:RiSignpostLine":
            return RiSignpostLine;
        case "ri:RiSpaceShipFill":
            return RiSpaceShipFill;
        case "ri:RiSpaceShipLine":
            return RiSpaceShipLine;
        case "ri:RiSteering2Fill":
            return RiSteering2Fill;
        case "ri:RiSteering2Line":
            return RiSteering2Line;
        case "ri:RiSteeringFill":
            return RiSteeringFill;
        case "ri:RiSteeringLine":
            return RiSteeringLine;
        case "ri:RiSubwayFill":
            return RiSubwayFill;
        case "ri:RiSubwayLine":
            return RiSubwayLine;
        case "ri:RiSubwayWifiFill":
            return RiSubwayWifiFill;
        case "ri:RiSubwayWifiLine":
            return RiSubwayWifiLine;
        case "ri:RiSuitcase2Fill":
            return RiSuitcase2Fill;
        case "ri:RiSuitcase2Line":
            return RiSuitcase2Line;
        case "ri:RiSuitcase3Fill":
            return RiSuitcase3Fill;
        case "ri:RiSuitcase3Line":
            return RiSuitcase3Line;
        case "ri:RiSuitcaseFill":
            return RiSuitcaseFill;
        case "ri:RiSuitcaseLine":
            return RiSuitcaseLine;
        case "ri:RiTakeawayFill":
            return RiTakeawayFill;
        case "ri:RiTakeawayLine":
            return RiTakeawayLine;
        case "ri:RiTaxiFill":
            return RiTaxiFill;
        case "ri:RiTaxiLine":
            return RiTaxiLine;
        case "ri:RiTaxiWifiFill":
            return RiTaxiWifiFill;
        case "ri:RiTaxiWifiLine":
            return RiTaxiWifiLine;
        case "ri:RiTimeZoneFill":
            return RiTimeZoneFill;
        case "ri:RiTimeZoneLine":
            return RiTimeZoneLine;
        case "ri:RiTrafficLightFill":
            return RiTrafficLightFill;
        case "ri:RiTrafficLightLine":
            return RiTrafficLightLine;
        case "ri:RiTrainFill":
            return RiTrainFill;
        case "ri:RiTrainLine":
            return RiTrainLine;
        case "ri:RiTrainWifiFill":
            return RiTrainWifiFill;
        case "ri:RiTrainWifiLine":
            return RiTrainWifiLine;
        case "ri:RiTreasureMapFill":
            return RiTreasureMapFill;
        case "ri:RiTreasureMapLine":
            return RiTreasureMapLine;
        case "ri:RiTruckFill":
            return RiTruckFill;
        case "ri:RiTruckLine":
            return RiTruckLine;
        case "ri:RiUnpinFill":
            return RiUnpinFill;
        case "ri:RiUnpinLine":
            return RiUnpinLine;
        case "ri:RiWalkFill":
            return RiWalkFill;
        case "ri:RiWalkLine":
            return RiWalkLine;
        case "ri:Ri4kFill":
            return Ri4kFill;
        case "ri:Ri4kLine":
            return Ri4kLine;
        case "ri:RiAlbumFill":
            return RiAlbumFill;
        case "ri:RiAlbumLine":
            return RiAlbumLine;
        case "ri:RiAspectRatioFill":
            return RiAspectRatioFill;
        case "ri:RiAspectRatioLine":
            return RiAspectRatioLine;
        case "ri:RiBroadcastFill":
            return RiBroadcastFill;
        case "ri:RiBroadcastLine":
            return RiBroadcastLine;
        case "ri:RiCamera2Fill":
            return RiCamera2Fill;
        case "ri:RiCamera2Line":
            return RiCamera2Line;
        case "ri:RiCamera3Fill":
            return RiCamera3Fill;
        case "ri:RiCamera3Line":
            return RiCamera3Line;
        case "ri:RiCameraAiFill":
            return RiCameraAiFill;
        case "ri:RiCameraAiLine":
            return RiCameraAiLine;
        case "ri:RiCameraFill":
            return RiCameraFill;
        case "ri:RiCameraLensAiFill":
            return RiCameraLensAiFill;
        case "ri:RiCameraLensAiLine":
            return RiCameraLensAiLine;
        case "ri:RiCameraLensFill":
            return RiCameraLensFill;
        case "ri:RiCameraLensLine":
            return RiCameraLensLine;
        case "ri:RiCameraLine":
            return RiCameraLine;
        case "ri:RiCameraOffFill":
            return RiCameraOffFill;
        case "ri:RiCameraOffLine":
            return RiCameraOffLine;
        case "ri:RiCameraSwitchFill":
            return RiCameraSwitchFill;
        case "ri:RiCameraSwitchLine":
            return RiCameraSwitchLine;
        case "ri:RiClapperboardAiFill":
            return RiClapperboardAiFill;
        case "ri:RiClapperboardAiLine":
            return RiClapperboardAiLine;
        case "ri:RiClapperboardFill":
            return RiClapperboardFill;
        case "ri:RiClapperboardLine":
            return RiClapperboardLine;
        case "ri:RiClosedCaptioningAiFill":
            return RiClosedCaptioningAiFill;
        case "ri:RiClosedCaptioningAiLine":
            return RiClosedCaptioningAiLine;
        case "ri:RiClosedCaptioningFill":
            return RiClosedCaptioningFill;
        case "ri:RiClosedCaptioningLine":
            return RiClosedCaptioningLine;
        case "ri:RiDiscFill":
            return RiDiscFill;
        case "ri:RiDiscLine":
            return RiDiscLine;
        case "ri:RiDvFill":
            return RiDvFill;
        case "ri:RiDvLine":
            return RiDvLine;
        case "ri:RiDvdAiFill":
            return RiDvdAiFill;
        case "ri:RiDvdAiLine":
            return RiDvdAiLine;
        case "ri:RiDvdFill":
            return RiDvdFill;
        case "ri:RiDvdLine":
            return RiDvdLine;
        case "ri:RiEjectFill":
            return RiEjectFill;
        case "ri:RiEjectLine":
            return RiEjectLine;
        case "ri:RiEqualizer2Fill":
            return RiEqualizer2Fill;
        case "ri:RiEqualizer2Line":
            return RiEqualizer2Line;
        case "ri:RiEqualizer3Fill":
            return RiEqualizer3Fill;
        case "ri:RiEqualizer3Line":
            return RiEqualizer3Line;
        case "ri:RiEqualizerFill":
            return RiEqualizerFill;
        case "ri:RiEqualizerLine":
            return RiEqualizerLine;
        case "ri:RiFilmAiFill":
            return RiFilmAiFill;
        case "ri:RiFilmAiLine":
            return RiFilmAiLine;
        case "ri:RiFilmFill":
            return RiFilmFill;
        case "ri:RiFilmLine":
            return RiFilmLine;
        case "ri:RiForward10Fill":
            return RiForward10Fill;
        case "ri:RiForward10Line":
            return RiForward10Line;
        case "ri:RiForward15Fill":
            return RiForward15Fill;
        case "ri:RiForward15Line":
            return RiForward15Line;
        case "ri:RiForward30Fill":
            return RiForward30Fill;
        case "ri:RiForward30Line":
            return RiForward30Line;
        case "ri:RiForward5Fill":
            return RiForward5Fill;
        case "ri:RiForward5Line":
            return RiForward5Line;
        case "ri:RiForwardEndFill":
            return RiForwardEndFill;
        case "ri:RiForwardEndLine":
            return RiForwardEndLine;
        case "ri:RiForwardEndMiniFill":
            return RiForwardEndMiniFill;
        case "ri:RiForwardEndMiniLine":
            return RiForwardEndMiniLine;
        case "ri:RiFullscreenExitFill":
            return RiFullscreenExitFill;
        case "ri:RiFullscreenExitLine":
            return RiFullscreenExitLine;
        case "ri:RiFullscreenFill":
            return RiFullscreenFill;
        case "ri:RiFullscreenLine":
            return RiFullscreenLine;
        case "ri:RiGalleryFill":
            return RiGalleryFill;
        case "ri:RiGalleryLine":
            return RiGalleryLine;
        case "ri:RiGalleryUploadFill":
            return RiGalleryUploadFill;
        case "ri:RiGalleryUploadLine":
            return RiGalleryUploadLine;
        case "ri:RiHdFill":
            return RiHdFill;
        case "ri:RiHdLine":
            return RiHdLine;
        case "ri:RiHeadphoneFill":
            return RiHeadphoneFill;
        case "ri:RiHeadphoneLine":
            return RiHeadphoneLine;
        case "ri:RiHqFill":
            return RiHqFill;
        case "ri:RiHqLine":
            return RiHqLine;
        case "ri:RiImage2Fill":
            return RiImage2Fill;
        case "ri:RiImage2Line":
            return RiImage2Line;
        case "ri:RiImageAddFill":
            return RiImageAddFill;
        case "ri:RiImageAddLine":
            return RiImageAddLine;
        case "ri:RiImageAiFill":
            return RiImageAiFill;
        case "ri:RiImageAiLine":
            return RiImageAiLine;
        case "ri:RiImageCircleAiFill":
            return RiImageCircleAiFill;
        case "ri:RiImageCircleAiLine":
            return RiImageCircleAiLine;
        case "ri:RiImageCircleFill":
            return RiImageCircleFill;
        case "ri:RiImageCircleLine":
            return RiImageCircleLine;
        case "ri:RiImageEditFill":
            return RiImageEditFill;
        case "ri:RiImageEditLine":
            return RiImageEditLine;
        case "ri:RiImageFill":
            return RiImageFill;
        case "ri:RiImageLine":
            return RiImageLine;
        case "ri:RiLandscapeAiFill":
            return RiLandscapeAiFill;
        case "ri:RiLandscapeAiLine":
            return RiLandscapeAiLine;
        case "ri:RiLandscapeFill":
            return RiLandscapeFill;
        case "ri:RiLandscapeLine":
            return RiLandscapeLine;
        case "ri:RiLiveFill":
            return RiLiveFill;
        case "ri:RiLiveLine":
            return RiLiveLine;
        case "ri:RiMemoriesFill":
            return RiMemoriesFill;
        case "ri:RiMemoriesLine":
            return RiMemoriesLine;
        case "ri:RiMic2AiFill":
            return RiMic2AiFill;
        case "ri:RiMic2AiLine":
            return RiMic2AiLine;
        case "ri:RiMic2Fill":
            return RiMic2Fill;
        case "ri:RiMic2Line":
            return RiMic2Line;
        case "ri:RiMicAiFill":
            return RiMicAiFill;
        case "ri:RiMicAiLine":
            return RiMicAiLine;
        case "ri:RiMicFill":
            return RiMicFill;
        case "ri:RiMicLine":
            return RiMicLine;
        case "ri:RiMicOffFill":
            return RiMicOffFill;
        case "ri:RiMicOffLine":
            return RiMicOffLine;
        case "ri:RiMovie2AiFill":
            return RiMovie2AiFill;
        case "ri:RiMovie2AiLine":
            return RiMovie2AiLine;
        case "ri:RiMovie2Fill":
            return RiMovie2Fill;
        case "ri:RiMovie2Line":
            return RiMovie2Line;
        case "ri:RiMovieAiFill":
            return RiMovieAiFill;
        case "ri:RiMovieAiLine":
            return RiMovieAiLine;
        case "ri:RiMovieFill":
            return RiMovieFill;
        case "ri:RiMovieLine":
            return RiMovieLine;
        case "ri:RiMusic2Fill":
            return RiMusic2Fill;
        case "ri:RiMusic2Line":
            return RiMusic2Line;
        case "ri:RiMusicAiFill":
            return RiMusicAiFill;
        case "ri:RiMusicAiLine":
            return RiMusicAiLine;
        case "ri:RiMusicFill":
            return RiMusicFill;
        case "ri:RiMusicLine":
            return RiMusicLine;
        case "ri:RiMvAiFill":
            return RiMvAiFill;
        case "ri:RiMvAiLine":
            return RiMvAiLine;
        case "ri:RiMvFill":
            return RiMvFill;
        case "ri:RiMvLine":
            return RiMvLine;
        case "ri:RiNotification2Fill":
            return RiNotification2Fill;
        case "ri:RiNotification2Line":
            return RiNotification2Line;
        case "ri:RiNotification3Fill":
            return RiNotification3Fill;
        case "ri:RiNotification3Line":
            return RiNotification3Line;
        case "ri:RiNotification4Fill":
            return RiNotification4Fill;
        case "ri:RiNotification4Line":
            return RiNotification4Line;
        case "ri:RiNotificationFill":
            return RiNotificationFill;
        case "ri:RiNotificationLine":
            return RiNotificationLine;
        case "ri:RiNotificationOffFill":
            return RiNotificationOffFill;
        case "ri:RiNotificationOffLine":
            return RiNotificationOffLine;
        case "ri:RiNotificationSnoozeFill":
            return RiNotificationSnoozeFill;
        case "ri:RiNotificationSnoozeLine":
            return RiNotificationSnoozeLine;
        case "ri:RiOrderPlayFill":
            return RiOrderPlayFill;
        case "ri:RiOrderPlayLine":
            return RiOrderPlayLine;
        case "ri:RiPauseCircleFill":
            return RiPauseCircleFill;
        case "ri:RiPauseCircleLine":
            return RiPauseCircleLine;
        case "ri:RiPauseFill":
            return RiPauseFill;
        case "ri:RiPauseLargeFill":
            return RiPauseLargeFill;
        case "ri:RiPauseLargeLine":
            return RiPauseLargeLine;
        case "ri:RiPauseLine":
            return RiPauseLine;
        case "ri:RiPauseMiniFill":
            return RiPauseMiniFill;
        case "ri:RiPauseMiniLine":
            return RiPauseMiniLine;
        case "ri:RiPhoneCameraFill":
            return RiPhoneCameraFill;
        case "ri:RiPhoneCameraLine":
            return RiPhoneCameraLine;
        case "ri:RiPictureInPicture2Fill":
            return RiPictureInPicture2Fill;
        case "ri:RiPictureInPicture2Line":
            return RiPictureInPicture2Line;
        case "ri:RiPictureInPictureExitFill":
            return RiPictureInPictureExitFill;
        case "ri:RiPictureInPictureExitLine":
            return RiPictureInPictureExitLine;
        case "ri:RiPictureInPictureFill":
            return RiPictureInPictureFill;
        case "ri:RiPictureInPictureLine":
            return RiPictureInPictureLine;
        case "ri:RiPlayCircleFill":
            return RiPlayCircleFill;
        case "ri:RiPlayCircleLine":
            return RiPlayCircleLine;
        case "ri:RiPlayFill":
            return RiPlayFill;
        case "ri:RiPlayLargeFill":
            return RiPlayLargeFill;
        case "ri:RiPlayLargeLine":
            return RiPlayLargeLine;
        case "ri:RiPlayLine":
            return RiPlayLine;
        case "ri:RiPlayList2Fill":
            return RiPlayList2Fill;
        case "ri:RiPlayList2Line":
            return RiPlayList2Line;
        case "ri:RiPlayListAddFill":
            return RiPlayListAddFill;
        case "ri:RiPlayListAddLine":
            return RiPlayListAddLine;
        case "ri:RiPlayListFill":
            return RiPlayListFill;
        case "ri:RiPlayListLine":
            return RiPlayListLine;
        case "ri:RiPlayMiniFill":
            return RiPlayMiniFill;
        case "ri:RiPlayMiniLine":
            return RiPlayMiniLine;
        case "ri:RiPlayReverseFill":
            return RiPlayReverseFill;
        case "ri:RiPlayReverseLargeFill":
            return RiPlayReverseLargeFill;
        case "ri:RiPlayReverseLargeLine":
            return RiPlayReverseLargeLine;
        case "ri:RiPlayReverseLine":
            return RiPlayReverseLine;
        case "ri:RiPlayReverseMiniFill":
            return RiPlayReverseMiniFill;
        case "ri:RiPlayReverseMiniLine":
            return RiPlayReverseMiniLine;
        case "ri:RiPolaroid2Fill":
            return RiPolaroid2Fill;
        case "ri:RiPolaroid2Line":
            return RiPolaroid2Line;
        case "ri:RiPolaroidFill":
            return RiPolaroidFill;
        case "ri:RiPolaroidLine":
            return RiPolaroidLine;
        case "ri:RiRadio2Fill":
            return RiRadio2Fill;
        case "ri:RiRadio2Line":
            return RiRadio2Line;
        case "ri:RiRadioFill":
            return RiRadioFill;
        case "ri:RiRadioLine":
            return RiRadioLine;
        case "ri:RiRecordCircleFill":
            return RiRecordCircleFill;
        case "ri:RiRecordCircleLine":
            return RiRecordCircleLine;
        case "ri:RiRepeat2Fill":
            return RiRepeat2Fill;
        case "ri:RiRepeat2Line":
            return RiRepeat2Line;
        case "ri:RiRepeatFill":
            return RiRepeatFill;
        case "ri:RiRepeatLine":
            return RiRepeatLine;
        case "ri:RiRepeatOneFill":
            return RiRepeatOneFill;
        case "ri:RiRepeatOneLine":
            return RiRepeatOneLine;
        case "ri:RiReplay10Fill":
            return RiReplay10Fill;
        case "ri:RiReplay10Line":
            return RiReplay10Line;
        case "ri:RiReplay15Fill":
            return RiReplay15Fill;
        case "ri:RiReplay15Line":
            return RiReplay15Line;
        case "ri:RiReplay30Fill":
            return RiReplay30Fill;
        case "ri:RiReplay30Line":
            return RiReplay30Line;
        case "ri:RiReplay5Fill":
            return RiReplay5Fill;
        case "ri:RiReplay5Line":
            return RiReplay5Line;
        case "ri:RiRewindFill":
            return RiRewindFill;
        case "ri:RiRewindLine":
            return RiRewindLine;
        case "ri:RiRewindMiniFill":
            return RiRewindMiniFill;
        case "ri:RiRewindMiniLine":
            return RiRewindMiniLine;
        case "ri:RiRewindStartFill":
            return RiRewindStartFill;
        case "ri:RiRewindStartLine":
            return RiRewindStartLine;
        case "ri:RiRewindStartMiniFill":
            return RiRewindStartMiniFill;
        case "ri:RiRewindStartMiniLine":
            return RiRewindStartMiniLine;
        case "ri:RiRhythmFill":
            return RiRhythmFill;
        case "ri:RiRhythmLine":
            return RiRhythmLine;
        case "ri:RiShuffleFill":
            return RiShuffleFill;
        case "ri:RiShuffleLine":
            return RiShuffleLine;
        case "ri:RiSkipBackFill":
            return RiSkipBackFill;
        case "ri:RiSkipBackLine":
            return RiSkipBackLine;
        case "ri:RiSkipBackMiniFill":
            return RiSkipBackMiniFill;
        case "ri:RiSkipBackMiniLine":
            return RiSkipBackMiniLine;
        case "ri:RiSkipForwardFill":
            return RiSkipForwardFill;
        case "ri:RiSkipForwardLine":
            return RiSkipForwardLine;
        case "ri:RiSkipForwardMiniFill":
            return RiSkipForwardMiniFill;
        case "ri:RiSkipForwardMiniLine":
            return RiSkipForwardMiniLine;
        case "ri:RiSlowDownFill":
            return RiSlowDownFill;
        case "ri:RiSlowDownLine":
            return RiSlowDownLine;
        case "ri:RiSoundModuleFill":
            return RiSoundModuleFill;
        case "ri:RiSoundModuleLine":
            return RiSoundModuleLine;
        case "ri:RiSpeaker2Fill":
            return RiSpeaker2Fill;
        case "ri:RiSpeaker2Line":
            return RiSpeaker2Line;
        case "ri:RiSpeaker3Fill":
            return RiSpeaker3Fill;
        case "ri:RiSpeaker3Line":
            return RiSpeaker3Line;
        case "ri:RiSpeakerFill":
            return RiSpeakerFill;
        case "ri:RiSpeakerLine":
            return RiSpeakerLine;
        case "ri:RiSpeedFill":
            return RiSpeedFill;
        case "ri:RiSpeedLine":
            return RiSpeedLine;
        case "ri:RiSpeedMiniFill":
            return RiSpeedMiniFill;
        case "ri:RiSpeedMiniLine":
            return RiSpeedMiniLine;
        case "ri:RiSpeedUpFill":
            return RiSpeedUpFill;
        case "ri:RiSpeedUpLine":
            return RiSpeedUpLine;
        case "ri:RiStopCircleFill":
            return RiStopCircleFill;
        case "ri:RiStopCircleLine":
            return RiStopCircleLine;
        case "ri:RiStopFill":
            return RiStopFill;
        case "ri:RiStopLargeFill":
            return RiStopLargeFill;
        case "ri:RiStopLargeLine":
            return RiStopLargeLine;
        case "ri:RiStopLine":
            return RiStopLine;
        case "ri:RiStopMiniFill":
            return RiStopMiniFill;
        case "ri:RiStopMiniLine":
            return RiStopMiniLine;
        case "ri:RiSurroundSoundFill":
            return RiSurroundSoundFill;
        case "ri:RiSurroundSoundLine":
            return RiSurroundSoundLine;
        case "ri:RiTapeFill":
            return RiTapeFill;
        case "ri:RiTapeLine":
            return RiTapeLine;
        case "ri:RiVideoAddFill":
            return RiVideoAddFill;
        case "ri:RiVideoAddLine":
            return RiVideoAddLine;
        case "ri:RiVideoAiFill":
            return RiVideoAiFill;
        case "ri:RiVideoAiLine":
            return RiVideoAiLine;
        case "ri:RiVideoDownloadFill":
            return RiVideoDownloadFill;
        case "ri:RiVideoDownloadLine":
            return RiVideoDownloadLine;
        case "ri:RiVideoFill":
            return RiVideoFill;
        case "ri:RiVideoLine":
            return RiVideoLine;
        case "ri:RiVideoOffFill":
            return RiVideoOffFill;
        case "ri:RiVideoOffLine":
            return RiVideoOffLine;
        case "ri:RiVideoOnAiFill":
            return RiVideoOnAiFill;
        case "ri:RiVideoOnAiLine":
            return RiVideoOnAiLine;
        case "ri:RiVideoOnFill":
            return RiVideoOnFill;
        case "ri:RiVideoOnLine":
            return RiVideoOnLine;
        case "ri:RiVideoUploadFill":
            return RiVideoUploadFill;
        case "ri:RiVideoUploadLine":
            return RiVideoUploadLine;
        case "ri:RiVidicon2Fill":
            return RiVidicon2Fill;
        case "ri:RiVidicon2Line":
            return RiVidicon2Line;
        case "ri:RiVidiconFill":
            return RiVidiconFill;
        case "ri:RiVidiconLine":
            return RiVidiconLine;
        case "ri:RiVoiceAiFill":
            return RiVoiceAiFill;
        case "ri:RiVoiceAiLine":
            return RiVoiceAiLine;
        case "ri:RiVoiceprintFill":
            return RiVoiceprintFill;
        case "ri:RiVoiceprintLine":
            return RiVoiceprintLine;
        case "ri:RiVolumeDownFill":
            return RiVolumeDownFill;
        case "ri:RiVolumeDownLine":
            return RiVolumeDownLine;
        case "ri:RiVolumeMuteFill":
            return RiVolumeMuteFill;
        case "ri:RiVolumeMuteLine":
            return RiVolumeMuteLine;
        case "ri:RiVolumeOffVibrateFill":
            return RiVolumeOffVibrateFill;
        case "ri:RiVolumeOffVibrateLine":
            return RiVolumeOffVibrateLine;
        case "ri:RiVolumeUpFill":
            return RiVolumeUpFill;
        case "ri:RiVolumeUpLine":
            return RiVolumeUpLine;
        case "ri:RiVolumeVibrateFill":
            return RiVolumeVibrateFill;
        case "ri:RiVolumeVibrateLine":
            return RiVolumeVibrateLine;
        case "ri:RiWebcamFill":
            return RiWebcamFill;
        case "ri:RiWebcamLine":
            return RiWebcamLine;
        case "ri:RiArmchairFill":
            return RiArmchairFill;
        case "ri:RiArmchairLine":
            return RiArmchairLine;
        case "ri:RiBasketballFill":
            return RiBasketballFill;
        case "ri:RiBasketballLine":
            return RiBasketballLine;
        case "ri:RiBellFill":
            return RiBellFill;
        case "ri:RiBellLine":
            return RiBellLine;
        case "ri:RiBilliardsFill":
            return RiBilliardsFill;
        case "ri:RiBilliardsLine":
            return RiBilliardsLine;
        case "ri:RiBookShelfFill":
            return RiBookShelfFill;
        case "ri:RiBookShelfLine":
            return RiBookShelfLine;
        case "ri:RiBox1Fill":
            return RiBox1Fill;
        case "ri:RiBox1Line":
            return RiBox1Line;
        case "ri:RiBox2Fill":
            return RiBox2Fill;
        case "ri:RiBox2Line":
            return RiBox2Line;
        case "ri:RiBox3Fill":
            return RiBox3Fill;
        case "ri:RiBox3Line":
            return RiBox3Line;
        case "ri:RiBoxingFill":
            return RiBoxingFill;
        case "ri:RiBoxingLine":
            return RiBoxingLine;
        case "ri:RiCactusFill":
            return RiCactusFill;
        case "ri:RiCactusLine":
            return RiCactusLine;
        case "ri:RiCandleFill":
            return RiCandleFill;
        case "ri:RiCandleLine":
            return RiCandleLine;
        case "ri:RiCharacterRecognitionFill":
            return RiCharacterRecognitionFill;
        case "ri:RiCharacterRecognitionLine":
            return RiCharacterRecognitionLine;
        case "ri:RiCrossFill":
            return RiCrossFill;
        case "ri:RiCrossLine":
            return RiCrossLine;
        case "ri:RiDice1Fill":
            return RiDice1Fill;
        case "ri:RiDice1Line":
            return RiDice1Line;
        case "ri:RiDice2Fill":
            return RiDice2Fill;
        case "ri:RiDice2Line":
            return RiDice2Line;
        case "ri:RiDice3Fill":
            return RiDice3Fill;
        case "ri:RiDice3Line":
            return RiDice3Line;
        case "ri:RiDice4Fill":
            return RiDice4Fill;
        case "ri:RiDice4Line":
            return RiDice4Line;
        case "ri:RiDice5Fill":
            return RiDice5Fill;
        case "ri:RiDice5Line":
            return RiDice5Line;
        case "ri:RiDice6Fill":
            return RiDice6Fill;
        case "ri:RiDice6Line":
            return RiDice6Line;
        case "ri:RiDiceFill":
            return RiDiceFill;
        case "ri:RiDiceLine":
            return RiDiceLine;
        case "ri:RiDoorClosedFill":
            return RiDoorClosedFill;
        case "ri:RiDoorClosedLine":
            return RiDoorClosedLine;
        case "ri:RiDoorFill":
            return RiDoorFill;
        case "ri:RiDoorLine":
            return RiDoorLine;
        case "ri:RiDoorLockBoxFill":
            return RiDoorLockBoxFill;
        case "ri:RiDoorLockBoxLine":
            return RiDoorLockBoxLine;
        case "ri:RiDoorLockFill":
            return RiDoorLockFill;
        case "ri:RiDoorLockLine":
            return RiDoorLockLine;
        case "ri:RiDoorOpenFill":
            return RiDoorOpenFill;
        case "ri:RiDoorOpenLine":
            return RiDoorOpenLine;
        case "ri:RiFlowerFill":
            return RiFlowerFill;
        case "ri:RiFlowerLine":
            return RiFlowerLine;
        case "ri:RiFootballFill":
            return RiFootballFill;
        case "ri:RiFootballLine":
            return RiFootballLine;
        case "ri:RiFridgeFill":
            return RiFridgeFill;
        case "ri:RiFridgeLine":
            return RiFridgeLine;
        case "ri:RiGameFill":
            return RiGameFill;
        case "ri:RiGameLine":
            return RiGameLine;
        case "ri:RiGlasses2Fill":
            return RiGlasses2Fill;
        case "ri:RiGlasses2Line":
            return RiGlasses2Line;
        case "ri:RiGlassesFill":
            return RiGlassesFill;
        case "ri:RiGlassesLine":
            return RiGlassesLine;
        case "ri:RiGogglesFill":
            return RiGogglesFill;
        case "ri:RiGogglesLine":
            return RiGogglesLine;
        case "ri:RiGolfBallFill":
            return RiGolfBallFill;
        case "ri:RiGolfBallLine":
            return RiGolfBallLine;
        case "ri:RiGraduationCapFill":
            return RiGraduationCapFill;
        case "ri:RiGraduationCapLine":
            return RiGraduationCapLine;
        case "ri:RiHandbagFill":
            return RiHandbagFill;
        case "ri:RiHandbagLine":
            return RiHandbagLine;
        case "ri:RiInfinityFill":
            return RiInfinityFill;
        case "ri:RiInfinityLine":
            return RiInfinityLine;
        case "ri:RiKey2Fill":
            return RiKey2Fill;
        case "ri:RiKey2Line":
            return RiKey2Line;
        case "ri:RiKeyFill":
            return RiKeyFill;
        case "ri:RiKeyLine":
            return RiKeyLine;
        case "ri:RiLeafFill":
            return RiLeafFill;
        case "ri:RiLeafLine":
            return RiLeafLine;
        case "ri:RiLightbulbFill":
            return RiLightbulbFill;
        case "ri:RiLightbulbFlashFill":
            return RiLightbulbFlashFill;
        case "ri:RiLightbulbFlashLine":
            return RiLightbulbFlashLine;
        case "ri:RiLightbulbLine":
            return RiLightbulbLine;
        case "ri:RiOutlet2Fill":
            return RiOutlet2Fill;
        case "ri:RiOutlet2Line":
            return RiOutlet2Line;
        case "ri:RiOutletFill":
            return RiOutletFill;
        case "ri:RiOutletLine":
            return RiOutletLine;
        case "ri:RiPingPongFill":
            return RiPingPongFill;
        case "ri:RiPingPongLine":
            return RiPingPongLine;
        case "ri:RiPlantFill":
            return RiPlantFill;
        case "ri:RiPlantLine":
            return RiPlantLine;
        case "ri:RiPlug2Fill":
            return RiPlug2Fill;
        case "ri:RiPlug2Line":
            return RiPlug2Line;
        case "ri:RiPlugFill":
            return RiPlugFill;
        case "ri:RiPlugLine":
            return RiPlugLine;
        case "ri:RiPokerClubsFill":
            return RiPokerClubsFill;
        case "ri:RiPokerClubsLine":
            return RiPokerClubsLine;
        case "ri:RiPokerDiamondsFill":
            return RiPokerDiamondsFill;
        case "ri:RiPokerDiamondsLine":
            return RiPokerDiamondsLine;
        case "ri:RiPokerHeartsFill":
            return RiPokerHeartsFill;
        case "ri:RiPokerHeartsLine":
            return RiPokerHeartsLine;
        case "ri:RiPokerSpadesFill":
            return RiPokerSpadesFill;
        case "ri:RiPokerSpadesLine":
            return RiPokerSpadesLine;
        case "ri:RiPoliceBadgeFill":
            return RiPoliceBadgeFill;
        case "ri:RiPoliceBadgeLine":
            return RiPoliceBadgeLine;
        case "ri:RiRecycleFill":
            return RiRecycleFill;
        case "ri:RiRecycleLine":
            return RiRecycleLine;
        case "ri:RiReservedFill":
            return RiReservedFill;
        case "ri:RiReservedLine":
            return RiReservedLine;
        case "ri:RiScales2Fill":
            return RiScales2Fill;
        case "ri:RiScales2Line":
            return RiScales2Line;
        case "ri:RiScales3Fill":
            return RiScales3Fill;
        case "ri:RiScales3Line":
            return RiScales3Line;
        case "ri:RiScalesFill":
            return RiScalesFill;
        case "ri:RiScalesLine":
            return RiScalesLine;
        case "ri:RiSeedlingFill":
            return RiSeedlingFill;
        case "ri:RiSeedlingLine":
            return RiSeedlingLine;
        case "ri:RiShirtFill":
            return RiShirtFill;
        case "ri:RiShirtLine":
            return RiShirtLine;
        case "ri:RiSofaFill":
            return RiSofaFill;
        case "ri:RiSofaLine":
            return RiSofaLine;
        case "ri:RiStairsFill":
            return RiStairsFill;
        case "ri:RiStairsLine":
            return RiStairsLine;
        case "ri:RiSwordFill":
            return RiSwordFill;
        case "ri:RiSwordLine":
            return RiSwordLine;
        case "ri:RiTShirt2Fill":
            return RiTShirt2Fill;
        case "ri:RiTShirt2Line":
            return RiTShirt2Line;
        case "ri:RiTShirtAirFill":
            return RiTShirtAirFill;
        case "ri:RiTShirtAirLine":
            return RiTShirtAirLine;
        case "ri:RiTShirtFill":
            return RiTShirtFill;
        case "ri:RiTShirtLine":
            return RiTShirtLine;
        case "ri:RiToothFill":
            return RiToothFill;
        case "ri:RiToothLine":
            return RiToothLine;
        case "ri:RiTreeFill":
            return RiTreeFill;
        case "ri:RiTreeLine":
            return RiTreeLine;
        case "ri:RiUmbrellaFill":
            return RiUmbrellaFill;
        case "ri:RiUmbrellaLine":
            return RiUmbrellaLine;
        case "ri:RiVoiceRecognitionFill":
            return RiVoiceRecognitionFill;
        case "ri:RiVoiceRecognitionLine":
            return RiVoiceRecognitionLine;
        case "ri:RiWeightFill":
            return RiWeightFill;
        case "ri:RiWeightLine":
            return RiWeightLine;
        case "ri:RiWheelchairFill":
            return RiWheelchairFill;
        case "ri:RiWheelchairLine":
            return RiWheelchairLine;
        case "ri:RiAddBoxFill":
            return RiAddBoxFill;
        case "ri:RiAddBoxLine":
            return RiAddBoxLine;
        case "ri:RiAddCircleFill":
            return RiAddCircleFill;
        case "ri:RiAddCircleLine":
            return RiAddCircleLine;
        case "ri:RiAddFill":
            return RiAddFill;
        case "ri:RiAddLargeFill":
            return RiAddLargeFill;
        case "ri:RiAddLargeLine":
            return RiAddLargeLine;
        case "ri:RiAddLine":
            return RiAddLine;
        case "ri:RiAlarmFill":
            return RiAlarmFill;
        case "ri:RiAlarmLine":
            return RiAlarmLine;
        case "ri:RiAlarmSnoozeFill":
            return RiAlarmSnoozeFill;
        case "ri:RiAlarmSnoozeLine":
            return RiAlarmSnoozeLine;
        case "ri:RiAlarmWarningFill":
            return RiAlarmWarningFill;
        case "ri:RiAlarmWarningLine":
            return RiAlarmWarningLine;
        case "ri:RiAlertFill":
            return RiAlertFill;
        case "ri:RiAlertLine":
            return RiAlertLine;
        case "ri:RiApps2AddFill":
            return RiApps2AddFill;
        case "ri:RiApps2AddLine":
            return RiApps2AddLine;
        case "ri:RiApps2AiFill":
            return RiApps2AiFill;
        case "ri:RiApps2AiLine":
            return RiApps2AiLine;
        case "ri:RiApps2Fill":
            return RiApps2Fill;
        case "ri:RiApps2Line":
            return RiApps2Line;
        case "ri:RiAppsFill":
            return RiAppsFill;
        case "ri:RiAppsLine":
            return RiAppsLine;
        case "ri:RiCheckDoubleFill":
            return RiCheckDoubleFill;
        case "ri:RiCheckDoubleLine":
            return RiCheckDoubleLine;
        case "ri:RiCheckFill":
            return RiCheckFill;
        case "ri:RiCheckLine":
            return RiCheckLine;
        case "ri:RiCheckboxBlankCircleFill":
            return RiCheckboxBlankCircleFill;
        case "ri:RiCheckboxBlankCircleLine":
            return RiCheckboxBlankCircleLine;
        case "ri:RiCheckboxBlankFill":
            return RiCheckboxBlankFill;
        case "ri:RiCheckboxBlankLine":
            return RiCheckboxBlankLine;
        case "ri:RiCheckboxCircleFill":
            return RiCheckboxCircleFill;
        case "ri:RiCheckboxCircleLine":
            return RiCheckboxCircleLine;
        case "ri:RiCheckboxFill":
            return RiCheckboxFill;
        case "ri:RiCheckboxIndeterminateFill":
            return RiCheckboxIndeterminateFill;
        case "ri:RiCheckboxIndeterminateLine":
            return RiCheckboxIndeterminateLine;
        case "ri:RiCheckboxLine":
            return RiCheckboxLine;
        case "ri:RiCheckboxMultipleBlankFill":
            return RiCheckboxMultipleBlankFill;
        case "ri:RiCheckboxMultipleBlankLine":
            return RiCheckboxMultipleBlankLine;
        case "ri:RiCheckboxMultipleFill":
            return RiCheckboxMultipleFill;
        case "ri:RiCheckboxMultipleLine":
            return RiCheckboxMultipleLine;
        case "ri:RiCloseCircleFill":
            return RiCloseCircleFill;
        case "ri:RiCloseCircleLine":
            return RiCloseCircleLine;
        case "ri:RiCloseFill":
            return RiCloseFill;
        case "ri:RiCloseLargeFill":
            return RiCloseLargeFill;
        case "ri:RiCloseLargeLine":
            return RiCloseLargeLine;
        case "ri:RiCloseLine":
            return RiCloseLine;
        case "ri:RiDashboardFill":
            return RiDashboardFill;
        case "ri:RiDashboardHorizontalFill":
            return RiDashboardHorizontalFill;
        case "ri:RiDashboardHorizontalLine":
            return RiDashboardHorizontalLine;
        case "ri:RiDashboardLine":
            return RiDashboardLine;
        case "ri:RiDeleteBack2Fill":
            return RiDeleteBack2Fill;
        case "ri:RiDeleteBack2Line":
            return RiDeleteBack2Line;
        case "ri:RiDeleteBackFill":
            return RiDeleteBackFill;
        case "ri:RiDeleteBackLine":
            return RiDeleteBackLine;
        case "ri:RiDeleteBin2Fill":
            return RiDeleteBin2Fill;
        case "ri:RiDeleteBin2Line":
            return RiDeleteBin2Line;
        case "ri:RiDeleteBin3Fill":
            return RiDeleteBin3Fill;
        case "ri:RiDeleteBin3Line":
            return RiDeleteBin3Line;
        case "ri:RiDeleteBin4Fill":
            return RiDeleteBin4Fill;
        case "ri:RiDeleteBin4Line":
            return RiDeleteBin4Line;
        case "ri:RiDeleteBin5Fill":
            return RiDeleteBin5Fill;
        case "ri:RiDeleteBin5Line":
            return RiDeleteBin5Line;
        case "ri:RiDeleteBin6Fill":
            return RiDeleteBin6Fill;
        case "ri:RiDeleteBin6Line":
            return RiDeleteBin6Line;
        case "ri:RiDeleteBin7Fill":
            return RiDeleteBin7Fill;
        case "ri:RiDeleteBin7Line":
            return RiDeleteBin7Line;
        case "ri:RiDeleteBinFill":
            return RiDeleteBinFill;
        case "ri:RiDeleteBinLine":
            return RiDeleteBinLine;
        case "ri:RiDivideFill":
            return RiDivideFill;
        case "ri:RiDivideLine":
            return RiDivideLine;
        case "ri:RiDownload2Fill":
            return RiDownload2Fill;
        case "ri:RiDownload2Line":
            return RiDownload2Line;
        case "ri:RiDownloadCloud2Fill":
            return RiDownloadCloud2Fill;
        case "ri:RiDownloadCloud2Line":
            return RiDownloadCloud2Line;
        case "ri:RiDownloadCloudFill":
            return RiDownloadCloudFill;
        case "ri:RiDownloadCloudLine":
            return RiDownloadCloudLine;
        case "ri:RiDownloadFill":
            return RiDownloadFill;
        case "ri:RiDownloadLine":
            return RiDownloadLine;
        case "ri:RiEqualFill":
            return RiEqualFill;
        case "ri:RiEqualLine":
            return RiEqualLine;
        case "ri:RiErrorWarningFill":
            return RiErrorWarningFill;
        case "ri:RiErrorWarningLine":
            return RiErrorWarningLine;
        case "ri:RiExportFill":
            return RiExportFill;
        case "ri:RiExportLine":
            return RiExportLine;
        case "ri:RiExternalLinkFill":
            return RiExternalLinkFill;
        case "ri:RiExternalLinkLine":
            return RiExternalLinkLine;
        case "ri:RiEye2Fill":
            return RiEye2Fill;
        case "ri:RiEye2Line":
            return RiEye2Line;
        case "ri:RiEyeCloseFill":
            return RiEyeCloseFill;
        case "ri:RiEyeCloseLine":
            return RiEyeCloseLine;
        case "ri:RiEyeFill":
            return RiEyeFill;
        case "ri:RiEyeLine":
            return RiEyeLine;
        case "ri:RiEyeOffFill":
            return RiEyeOffFill;
        case "ri:RiEyeOffLine":
            return RiEyeOffLine;
        case "ri:RiFilter2Fill":
            return RiFilter2Fill;
        case "ri:RiFilter2Line":
            return RiFilter2Line;
        case "ri:RiFilter3Fill":
            return RiFilter3Fill;
        case "ri:RiFilter3Line":
            return RiFilter3Line;
        case "ri:RiFilterFill":
            return RiFilterFill;
        case "ri:RiFilterLine":
            return RiFilterLine;
        case "ri:RiFilterOffFill":
            return RiFilterOffFill;
        case "ri:RiFilterOffLine":
            return RiFilterOffLine;
        case "ri:RiFindReplaceFill":
            return RiFindReplaceFill;
        case "ri:RiFindReplaceLine":
            return RiFindReplaceLine;
        case "ri:RiForbid2Fill":
            return RiForbid2Fill;
        case "ri:RiForbid2Line":
            return RiForbid2Line;
        case "ri:RiForbidFill":
            return RiForbidFill;
        case "ri:RiForbidLine":
            return RiForbidLine;
        case "ri:RiFunctionAddFill":
            return RiFunctionAddFill;
        case "ri:RiFunctionAddLine":
            return RiFunctionAddLine;
        case "ri:RiFunctionFill":
            return RiFunctionFill;
        case "ri:RiFunctionLine":
            return RiFunctionLine;
        case "ri:RiHistoryFill":
            return RiHistoryFill;
        case "ri:RiHistoryLine":
            return RiHistoryLine;
        case "ri:RiHourglass2Fill":
            return RiHourglass2Fill;
        case "ri:RiHourglass2Line":
            return RiHourglass2Line;
        case "ri:RiHourglassFill":
            return RiHourglassFill;
        case "ri:RiHourglassLine":
            return RiHourglassLine;
        case "ri:RiImportFill":
            return RiImportFill;
        case "ri:RiImportLine":
            return RiImportLine;
        case "ri:RiIndeterminateCircleFill":
            return RiIndeterminateCircleFill;
        case "ri:RiIndeterminateCircleLine":
            return RiIndeterminateCircleLine;
        case "ri:RiInformation2Fill":
            return RiInformation2Fill;
        case "ri:RiInformation2Line":
            return RiInformation2Line;
        case "ri:RiInformationFill":
            return RiInformationFill;
        case "ri:RiInformationLine":
            return RiInformationLine;
        case "ri:RiInformationOffFill":
            return RiInformationOffFill;
        case "ri:RiInformationOffLine":
            return RiInformationOffLine;
        case "ri:RiListSettingsFill":
            return RiListSettingsFill;
        case "ri:RiListSettingsLine":
            return RiListSettingsLine;
        case "ri:RiLoader2Fill":
            return RiLoader2Fill;
        case "ri:RiLoader2Line":
            return RiLoader2Line;
        case "ri:RiLoader3Fill":
            return RiLoader3Fill;
        case "ri:RiLoader3Line":
            return RiLoader3Line;
        case "ri:RiLoader4Fill":
            return RiLoader4Fill;
        case "ri:RiLoader4Line":
            return RiLoader4Line;
        case "ri:RiLoader5Fill":
            return RiLoader5Fill;
        case "ri:RiLoader5Line":
            return RiLoader5Line;
        case "ri:RiLoaderFill":
            return RiLoaderFill;
        case "ri:RiLoaderLine":
            return RiLoaderLine;
        case "ri:RiLock2Fill":
            return RiLock2Fill;
        case "ri:RiLock2Line":
            return RiLock2Line;
        case "ri:RiLockFill":
            return RiLockFill;
        case "ri:RiLockLine":
            return RiLockLine;
        case "ri:RiLockPasswordFill":
            return RiLockPasswordFill;
        case "ri:RiLockPasswordLine":
            return RiLockPasswordLine;
        case "ri:RiLockStarFill":
            return RiLockStarFill;
        case "ri:RiLockStarLine":
            return RiLockStarLine;
        case "ri:RiLockUnlockFill":
            return RiLockUnlockFill;
        case "ri:RiLockUnlockLine":
            return RiLockUnlockLine;
        case "ri:RiLoginBoxFill":
            return RiLoginBoxFill;
        case "ri:RiLoginBoxLine":
            return RiLoginBoxLine;
        case "ri:RiLoginCircleFill":
            return RiLoginCircleFill;
        case "ri:RiLoginCircleLine":
            return RiLoginCircleLine;
        case "ri:RiLogoutBoxFill":
            return RiLogoutBoxFill;
        case "ri:RiLogoutBoxLine":
            return RiLogoutBoxLine;
        case "ri:RiLogoutBoxRFill":
            return RiLogoutBoxRFill;
        case "ri:RiLogoutBoxRLine":
            return RiLogoutBoxRLine;
        case "ri:RiLogoutCircleFill":
            return RiLogoutCircleFill;
        case "ri:RiLogoutCircleLine":
            return RiLogoutCircleLine;
        case "ri:RiLogoutCircleRFill":
            return RiLogoutCircleRFill;
        case "ri:RiLogoutCircleRLine":
            return RiLogoutCircleRLine;
        case "ri:RiLoopLeftFill":
            return RiLoopLeftFill;
        case "ri:RiLoopLeftLine":
            return RiLoopLeftLine;
        case "ri:RiLoopRightFill":
            return RiLoopRightFill;
        case "ri:RiLoopRightLine":
            return RiLoopRightLine;
        case "ri:RiMenu2Fill":
            return RiMenu2Fill;
        case "ri:RiMenu2Line":
            return RiMenu2Line;
        case "ri:RiMenu3Fill":
            return RiMenu3Fill;
        case "ri:RiMenu3Line":
            return RiMenu3Line;
        case "ri:RiMenu4Fill":
            return RiMenu4Fill;
        case "ri:RiMenu4Line":
            return RiMenu4Line;
        case "ri:RiMenu5Fill":
            return RiMenu5Fill;
        case "ri:RiMenu5Line":
            return RiMenu5Line;
        case "ri:RiMenuAddFill":
            return RiMenuAddFill;
        case "ri:RiMenuAddLine":
            return RiMenuAddLine;
        case "ri:RiMenuFill":
            return RiMenuFill;
        case "ri:RiMenuFold2Fill":
            return RiMenuFold2Fill;
        case "ri:RiMenuFold2Line":
            return RiMenuFold2Line;
        case "ri:RiMenuFold3Fill":
            return RiMenuFold3Fill;
        case "ri:RiMenuFold3Line":
            return RiMenuFold3Line;
        case "ri:RiMenuFold4Fill":
            return RiMenuFold4Fill;
        case "ri:RiMenuFold4Line":
            return RiMenuFold4Line;
        case "ri:RiMenuFoldFill":
            return RiMenuFoldFill;
        case "ri:RiMenuFoldLine":
            return RiMenuFoldLine;
        case "ri:RiMenuLine":
            return RiMenuLine;
        case "ri:RiMenuSearchFill":
            return RiMenuSearchFill;
        case "ri:RiMenuSearchLine":
            return RiMenuSearchLine;
        case "ri:RiMenuUnfold2Fill":
            return RiMenuUnfold2Fill;
        case "ri:RiMenuUnfold2Line":
            return RiMenuUnfold2Line;
        case "ri:RiMenuUnfold3Fill":
            return RiMenuUnfold3Fill;
        case "ri:RiMenuUnfold3Line":
            return RiMenuUnfold3Line;
        case "ri:RiMenuUnfold4Fill":
            return RiMenuUnfold4Fill;
        case "ri:RiMenuUnfold4Line":
            return RiMenuUnfold4Line;
        case "ri:RiMenuUnfoldFill":
            return RiMenuUnfoldFill;
        case "ri:RiMenuUnfoldLine":
            return RiMenuUnfoldLine;
        case "ri:RiMore2Fill":
            return RiMore2Fill;
        case "ri:RiMore2Line":
            return RiMore2Line;
        case "ri:RiMoreFill":
            return RiMoreFill;
        case "ri:RiMoreLine":
            return RiMoreLine;
        case "ri:RiNotificationBadgeFill":
            return RiNotificationBadgeFill;
        case "ri:RiNotificationBadgeLine":
            return RiNotificationBadgeLine;
        case "ri:RiProgress1Fill":
            return RiProgress1Fill;
        case "ri:RiProgress1Line":
            return RiProgress1Line;
        case "ri:RiProgress2Fill":
            return RiProgress2Fill;
        case "ri:RiProgress2Line":
            return RiProgress2Line;
        case "ri:RiProgress3Fill":
            return RiProgress3Fill;
        case "ri:RiProgress3Line":
            return RiProgress3Line;
        case "ri:RiProgress4Fill":
            return RiProgress4Fill;
        case "ri:RiProgress4Line":
            return RiProgress4Line;
        case "ri:RiProgress5Fill":
            return RiProgress5Fill;
        case "ri:RiProgress5Line":
            return RiProgress5Line;
        case "ri:RiProgress6Fill":
            return RiProgress6Fill;
        case "ri:RiProgress6Line":
            return RiProgress6Line;
        case "ri:RiProgress7Fill":
            return RiProgress7Fill;
        case "ri:RiProgress7Line":
            return RiProgress7Line;
        case "ri:RiProgress8Fill":
            return RiProgress8Fill;
        case "ri:RiProgress8Line":
            return RiProgress8Line;
        case "ri:RiProhibited2Fill":
            return RiProhibited2Fill;
        case "ri:RiProhibited2Line":
            return RiProhibited2Line;
        case "ri:RiProhibitedFill":
            return RiProhibitedFill;
        case "ri:RiProhibitedLine":
            return RiProhibitedLine;
        case "ri:RiQuestionFill":
            return RiQuestionFill;
        case "ri:RiQuestionLine":
            return RiQuestionLine;
        case "ri:RiRadioButtonFill":
            return RiRadioButtonFill;
        case "ri:RiRadioButtonLine":
            return RiRadioButtonLine;
        case "ri:RiRefreshFill":
            return RiRefreshFill;
        case "ri:RiRefreshLine":
            return RiRefreshLine;
        case "ri:RiResetLeftFill":
            return RiResetLeftFill;
        case "ri:RiResetLeftLine":
            return RiResetLeftLine;
        case "ri:RiResetRightFill":
            return RiResetRightFill;
        case "ri:RiResetRightLine":
            return RiResetRightLine;
        case "ri:RiSearch2Fill":
            return RiSearch2Fill;
        case "ri:RiSearch2Line":
            return RiSearch2Line;
        case "ri:RiSearchEyeFill":
            return RiSearchEyeFill;
        case "ri:RiSearchEyeLine":
            return RiSearchEyeLine;
        case "ri:RiSearchFill":
            return RiSearchFill;
        case "ri:RiSearchLine":
            return RiSearchLine;
        case "ri:RiSettings2Fill":
            return RiSettings2Fill;
        case "ri:RiSettings2Line":
            return RiSettings2Line;
        case "ri:RiSettings3Fill":
            return RiSettings3Fill;
        case "ri:RiSettings3Line":
            return RiSettings3Line;
        case "ri:RiSettings4Fill":
            return RiSettings4Fill;
        case "ri:RiSettings4Line":
            return RiSettings4Line;
        case "ri:RiSettings5Fill":
            return RiSettings5Fill;
        case "ri:RiSettings5Line":
            return RiSettings5Line;
        case "ri:RiSettings6Fill":
            return RiSettings6Fill;
        case "ri:RiSettings6Line":
            return RiSettings6Line;
        case "ri:RiSettingsFill":
            return RiSettingsFill;
        case "ri:RiSettingsLine":
            return RiSettingsLine;
        case "ri:RiShare2Fill":
            return RiShare2Fill;
        case "ri:RiShare2Line":
            return RiShare2Line;
        case "ri:RiShareBoxFill":
            return RiShareBoxFill;
        case "ri:RiShareBoxLine":
            return RiShareBoxLine;
        case "ri:RiShareCircleFill":
            return RiShareCircleFill;
        case "ri:RiShareCircleLine":
            return RiShareCircleLine;
        case "ri:RiShareFill":
            return RiShareFill;
        case "ri:RiShareForward2Fill":
            return RiShareForward2Fill;
        case "ri:RiShareForward2Line":
            return RiShareForward2Line;
        case "ri:RiShareForwardBoxFill":
            return RiShareForwardBoxFill;
        case "ri:RiShareForwardBoxLine":
            return RiShareForwardBoxLine;
        case "ri:RiShareForwardFill":
            return RiShareForwardFill;
        case "ri:RiShareForwardLine":
            return RiShareForwardLine;
        case "ri:RiShareLine":
            return RiShareLine;
        case "ri:RiShieldCheckFill":
            return RiShieldCheckFill;
        case "ri:RiShieldCheckLine":
            return RiShieldCheckLine;
        case "ri:RiShieldCrossFill":
            return RiShieldCrossFill;
        case "ri:RiShieldCrossLine":
            return RiShieldCrossLine;
        case "ri:RiShieldFill":
            return RiShieldFill;
        case "ri:RiShieldFlashFill":
            return RiShieldFlashFill;
        case "ri:RiShieldFlashLine":
            return RiShieldFlashLine;
        case "ri:RiShieldKeyholeFill":
            return RiShieldKeyholeFill;
        case "ri:RiShieldKeyholeLine":
            return RiShieldKeyholeLine;
        case "ri:RiShieldLine":
            return RiShieldLine;
        case "ri:RiShieldStarFill":
            return RiShieldStarFill;
        case "ri:RiShieldStarLine":
            return RiShieldStarLine;
        case "ri:RiShieldUserFill":
            return RiShieldUserFill;
        case "ri:RiShieldUserLine":
            return RiShieldUserLine;
        case "ri:RiSideBarFill":
            return RiSideBarFill;
        case "ri:RiSideBarLine":
            return RiSideBarLine;
        case "ri:RiSidebarFoldFill":
            return RiSidebarFoldFill;
        case "ri:RiSidebarFoldLine":
            return RiSidebarFoldLine;
        case "ri:RiSidebarUnfoldFill":
            return RiSidebarUnfoldFill;
        case "ri:RiSidebarUnfoldLine":
            return RiSidebarUnfoldLine;
        case "ri:RiSpam2Fill":
            return RiSpam2Fill;
        case "ri:RiSpam2Line":
            return RiSpam2Line;
        case "ri:RiSpam3Fill":
            return RiSpam3Fill;
        case "ri:RiSpam3Line":
            return RiSpam3Line;
        case "ri:RiSpamFill":
            return RiSpamFill;
        case "ri:RiSpamLine":
            return RiSpamLine;
        case "ri:RiStarFill":
            return RiStarFill;
        case "ri:RiStarHalfFill":
            return RiStarHalfFill;
        case "ri:RiStarHalfLine":
            return RiStarHalfLine;
        case "ri:RiStarHalfSFill":
            return RiStarHalfSFill;
        case "ri:RiStarHalfSLine":
            return RiStarHalfSLine;
        case "ri:RiStarLine":
            return RiStarLine;
        case "ri:RiStarOffFill":
            return RiStarOffFill;
        case "ri:RiStarOffLine":
            return RiStarOffLine;
        case "ri:RiStarSFill":
            return RiStarSFill;
        case "ri:RiStarSLine":
            return RiStarSLine;
        case "ri:RiSubtractFill":
            return RiSubtractFill;
        case "ri:RiSubtractLine":
            return RiSubtractLine;
        case "ri:RiThumbDownFill":
            return RiThumbDownFill;
        case "ri:RiThumbDownLine":
            return RiThumbDownLine;
        case "ri:RiThumbUpFill":
            return RiThumbUpFill;
        case "ri:RiThumbUpLine":
            return RiThumbUpLine;
        case "ri:RiTimeFill":
            return RiTimeFill;
        case "ri:RiTimeLine":
            return RiTimeLine;
        case "ri:RiTimer2Fill":
            return RiTimer2Fill;
        case "ri:RiTimer2Line":
            return RiTimer2Line;
        case "ri:RiTimerFill":
            return RiTimerFill;
        case "ri:RiTimerFlashFill":
            return RiTimerFlashFill;
        case "ri:RiTimerFlashLine":
            return RiTimerFlashLine;
        case "ri:RiTimerLine":
            return RiTimerLine;
        case "ri:RiToggleFill":
            return RiToggleFill;
        case "ri:RiToggleLine":
            return RiToggleLine;
        case "ri:RiUpload2Fill":
            return RiUpload2Fill;
        case "ri:RiUpload2Line":
            return RiUpload2Line;
        case "ri:RiUploadCloud2Fill":
            return RiUploadCloud2Fill;
        case "ri:RiUploadCloud2Line":
            return RiUploadCloud2Line;
        case "ri:RiUploadCloudFill":
            return RiUploadCloudFill;
        case "ri:RiUploadCloudLine":
            return RiUploadCloudLine;
        case "ri:RiUploadFill":
            return RiUploadFill;
        case "ri:RiUploadLine":
            return RiUploadLine;
        case "ri:RiZoomInFill":
            return RiZoomInFill;
        case "ri:RiZoomInLine":
            return RiZoomInLine;
        case "ri:RiZoomOutFill":
            return RiZoomOutFill;
        case "ri:RiZoomOutLine":
            return RiZoomOutLine;
        case "ri:RiAccountBox2Fill":
            return RiAccountBox2Fill;
        case "ri:RiAccountBox2Line":
            return RiAccountBox2Line;
        case "ri:RiAccountBoxFill":
            return RiAccountBoxFill;
        case "ri:RiAccountBoxLine":
            return RiAccountBoxLine;
        case "ri:RiAccountCircle2Fill":
            return RiAccountCircle2Fill;
        case "ri:RiAccountCircle2Line":
            return RiAccountCircle2Line;
        case "ri:RiAccountCircleFill":
            return RiAccountCircleFill;
        case "ri:RiAccountCircleLine":
            return RiAccountCircleLine;
        case "ri:RiAccountPinBoxFill":
            return RiAccountPinBoxFill;
        case "ri:RiAccountPinBoxLine":
            return RiAccountPinBoxLine;
        case "ri:RiAccountPinCircleFill":
            return RiAccountPinCircleFill;
        case "ri:RiAccountPinCircleLine":
            return RiAccountPinCircleLine;
        case "ri:RiAdminFill":
            return RiAdminFill;
        case "ri:RiAdminLine":
            return RiAdminLine;
        case "ri:RiAliensFill":
            return RiAliensFill;
        case "ri:RiAliensLine":
            return RiAliensLine;
        case "ri:RiBearSmileFill":
            return RiBearSmileFill;
        case "ri:RiBearSmileLine":
            return RiBearSmileLine;
        case "ri:RiBodyScanFill":
            return RiBodyScanFill;
        case "ri:RiBodyScanLine":
            return RiBodyScanLine;
        case "ri:RiContactsFill":
            return RiContactsFill;
        case "ri:RiContactsLine":
            return RiContactsLine;
        case "ri:RiCriminalFill":
            return RiCriminalFill;
        case "ri:RiCriminalLine":
            return RiCriminalLine;
        case "ri:RiEmotion2Fill":
            return RiEmotion2Fill;
        case "ri:RiEmotion2Line":
            return RiEmotion2Line;
        case "ri:RiEmotionFill":
            return RiEmotionFill;
        case "ri:RiEmotionHappyFill":
            return RiEmotionHappyFill;
        case "ri:RiEmotionHappyLine":
            return RiEmotionHappyLine;
        case "ri:RiEmotionLaughFill":
            return RiEmotionLaughFill;
        case "ri:RiEmotionLaughLine":
            return RiEmotionLaughLine;
        case "ri:RiEmotionLine":
            return RiEmotionLine;
        case "ri:RiEmotionNormalFill":
            return RiEmotionNormalFill;
        case "ri:RiEmotionNormalLine":
            return RiEmotionNormalLine;
        case "ri:RiEmotionSadFill":
            return RiEmotionSadFill;
        case "ri:RiEmotionSadLine":
            return RiEmotionSadLine;
        case "ri:RiEmotionUnhappyFill":
            return RiEmotionUnhappyFill;
        case "ri:RiEmotionUnhappyLine":
            return RiEmotionUnhappyLine;
        case "ri:RiGenderlessFill":
            return RiGenderlessFill;
        case "ri:RiGenderlessLine":
            return RiGenderlessLine;
        case "ri:RiGhost2Fill":
            return RiGhost2Fill;
        case "ri:RiGhost2Line":
            return RiGhost2Line;
        case "ri:RiGhostFill":
            return RiGhostFill;
        case "ri:RiGhostLine":
            return RiGhostLine;
        case "ri:RiGhostSmileFill":
            return RiGhostSmileFill;
        case "ri:RiGhostSmileLine":
            return RiGhostSmileLine;
        case "ri:RiGroup2Fill":
            return RiGroup2Fill;
        case "ri:RiGroup2Line":
            return RiGroup2Line;
        case "ri:RiGroup3Fill":
            return RiGroup3Fill;
        case "ri:RiGroup3Line":
            return RiGroup3Line;
        case "ri:RiGroupFill":
            return RiGroupFill;
        case "ri:RiGroupLine":
            return RiGroupLine;
        case "ri:RiMenFill":
            return RiMenFill;
        case "ri:RiMenLine":
            return RiMenLine;
        case "ri:RiMickeyFill":
            return RiMickeyFill;
        case "ri:RiMickeyLine":
            return RiMickeyLine;
        case "ri:RiOpenArmFill":
            return RiOpenArmFill;
        case "ri:RiOpenArmLine":
            return RiOpenArmLine;
        case "ri:RiParentFill":
            return RiParentFill;
        case "ri:RiParentLine":
            return RiParentLine;
        case "ri:RiRobot2Fill":
            return RiRobot2Fill;
        case "ri:RiRobot2Line":
            return RiRobot2Line;
        case "ri:RiRobot3Fill":
            return RiRobot3Fill;
        case "ri:RiRobot3Line":
            return RiRobot3Line;
        case "ri:RiRobotFill":
            return RiRobotFill;
        case "ri:RiRobotLine":
            return RiRobotLine;
        case "ri:RiSkull2Fill":
            return RiSkull2Fill;
        case "ri:RiSkull2Line":
            return RiSkull2Line;
        case "ri:RiSkullFill":
            return RiSkullFill;
        case "ri:RiSkullLine":
            return RiSkullLine;
        case "ri:RiSpyFill":
            return RiSpyFill;
        case "ri:RiSpyLine":
            return RiSpyLine;
        case "ri:RiStarSmileFill":
            return RiStarSmileFill;
        case "ri:RiStarSmileLine":
            return RiStarSmileLine;
        case "ri:RiTeamFill":
            return RiTeamFill;
        case "ri:RiTeamLine":
            return RiTeamLine;
        case "ri:RiTravestiFill":
            return RiTravestiFill;
        case "ri:RiTravestiLine":
            return RiTravestiLine;
        case "ri:RiUser2Fill":
            return RiUser2Fill;
        case "ri:RiUser2Line":
            return RiUser2Line;
        case "ri:RiUser3Fill":
            return RiUser3Fill;
        case "ri:RiUser3Line":
            return RiUser3Line;
        case "ri:RiUser4Fill":
            return RiUser4Fill;
        case "ri:RiUser4Line":
            return RiUser4Line;
        case "ri:RiUser5Fill":
            return RiUser5Fill;
        case "ri:RiUser5Line":
            return RiUser5Line;
        case "ri:RiUser6Fill":
            return RiUser6Fill;
        case "ri:RiUser6Line":
            return RiUser6Line;
        case "ri:RiUserAddFill":
            return RiUserAddFill;
        case "ri:RiUserAddLine":
            return RiUserAddLine;
        case "ri:RiUserCommunityFill":
            return RiUserCommunityFill;
        case "ri:RiUserCommunityLine":
            return RiUserCommunityLine;
        case "ri:RiUserFill":
            return RiUserFill;
        case "ri:RiUserFollowFill":
            return RiUserFollowFill;
        case "ri:RiUserFollowLine":
            return RiUserFollowLine;
        case "ri:RiUserForbidFill":
            return RiUserForbidFill;
        case "ri:RiUserForbidLine":
            return RiUserForbidLine;
        case "ri:RiUserHeartFill":
            return RiUserHeartFill;
        case "ri:RiUserHeartLine":
            return RiUserHeartLine;
        case "ri:RiUserLine":
            return RiUserLine;
        case "ri:RiUserLocationFill":
            return RiUserLocationFill;
        case "ri:RiUserLocationLine":
            return RiUserLocationLine;
        case "ri:RiUserMinusFill":
            return RiUserMinusFill;
        case "ri:RiUserMinusLine":
            return RiUserMinusLine;
        case "ri:RiUserReceived2Fill":
            return RiUserReceived2Fill;
        case "ri:RiUserReceived2Line":
            return RiUserReceived2Line;
        case "ri:RiUserReceivedFill":
            return RiUserReceivedFill;
        case "ri:RiUserReceivedLine":
            return RiUserReceivedLine;
        case "ri:RiUserSearchFill":
            return RiUserSearchFill;
        case "ri:RiUserSearchLine":
            return RiUserSearchLine;
        case "ri:RiUserSettingsFill":
            return RiUserSettingsFill;
        case "ri:RiUserSettingsLine":
            return RiUserSettingsLine;
        case "ri:RiUserShared2Fill":
            return RiUserShared2Fill;
        case "ri:RiUserShared2Line":
            return RiUserShared2Line;
        case "ri:RiUserSharedFill":
            return RiUserSharedFill;
        case "ri:RiUserSharedLine":
            return RiUserSharedLine;
        case "ri:RiUserSmileFill":
            return RiUserSmileFill;
        case "ri:RiUserSmileLine":
            return RiUserSmileLine;
        case "ri:RiUserStarFill":
            return RiUserStarFill;
        case "ri:RiUserStarLine":
            return RiUserStarLine;
        case "ri:RiUserUnfollowFill":
            return RiUserUnfollowFill;
        case "ri:RiUserUnfollowLine":
            return RiUserUnfollowLine;
        case "ri:RiUserVoiceFill":
            return RiUserVoiceFill;
        case "ri:RiUserVoiceLine":
            return RiUserVoiceLine;
        case "ri:RiWomenFill":
            return RiWomenFill;
        case "ri:RiWomenLine":
            return RiWomenLine;
        case "ri:RiBlazeFill":
            return RiBlazeFill;
        case "ri:RiBlazeLine":
            return RiBlazeLine;
        case "ri:RiCelsiusFill":
            return RiCelsiusFill;
        case "ri:RiCelsiusLine":
            return RiCelsiusLine;
        case "ri:RiCloudWindyFill":
            return RiCloudWindyFill;
        case "ri:RiCloudWindyLine":
            return RiCloudWindyLine;
        case "ri:RiCloudy2Fill":
            return RiCloudy2Fill;
        case "ri:RiCloudy2Line":
            return RiCloudy2Line;
        case "ri:RiCloudyFill":
            return RiCloudyFill;
        case "ri:RiCloudyLine":
            return RiCloudyLine;
        case "ri:RiDrizzleFill":
            return RiDrizzleFill;
        case "ri:RiDrizzleLine":
            return RiDrizzleLine;
        case "ri:RiEarthquakeFill":
            return RiEarthquakeFill;
        case "ri:RiEarthquakeLine":
            return RiEarthquakeLine;
        case "ri:RiFahrenheitFill":
            return RiFahrenheitFill;
        case "ri:RiFahrenheitLine":
            return RiFahrenheitLine;
        case "ri:RiFireFill":
            return RiFireFill;
        case "ri:RiFireLine":
            return RiFireLine;
        case "ri:RiFlashlightFill":
            return RiFlashlightFill;
        case "ri:RiFlashlightLine":
            return RiFlashlightLine;
        case "ri:RiFloodFill":
            return RiFloodFill;
        case "ri:RiFloodLine":
            return RiFloodLine;
        case "ri:RiFoggyFill":
            return RiFoggyFill;
        case "ri:RiFoggyLine":
            return RiFoggyLine;
        case "ri:RiHailFill":
            return RiHailFill;
        case "ri:RiHailLine":
            return RiHailLine;
        case "ri:RiHaze2Fill":
            return RiHaze2Fill;
        case "ri:RiHaze2Line":
            return RiHaze2Line;
        case "ri:RiHazeFill":
            return RiHazeFill;
        case "ri:RiHazeLine":
            return RiHazeLine;
        case "ri:RiHeavyShowersFill":
            return RiHeavyShowersFill;
        case "ri:RiHeavyShowersLine":
            return RiHeavyShowersLine;
        case "ri:RiMeteorFill":
            return RiMeteorFill;
        case "ri:RiMeteorLine":
            return RiMeteorLine;
        case "ri:RiMistFill":
            return RiMistFill;
        case "ri:RiMistLine":
            return RiMistLine;
        case "ri:RiMoonClearFill":
            return RiMoonClearFill;
        case "ri:RiMoonClearLine":
            return RiMoonClearLine;
        case "ri:RiMoonCloudyFill":
            return RiMoonCloudyFill;
        case "ri:RiMoonCloudyLine":
            return RiMoonCloudyLine;
        case "ri:RiMoonFill":
            return RiMoonFill;
        case "ri:RiMoonFoggyFill":
            return RiMoonFoggyFill;
        case "ri:RiMoonFoggyLine":
            return RiMoonFoggyLine;
        case "ri:RiMoonLine":
            return RiMoonLine;
        case "ri:RiRainbowFill":
            return RiRainbowFill;
        case "ri:RiRainbowLine":
            return RiRainbowLine;
        case "ri:RiRainyFill":
            return RiRainyFill;
        case "ri:RiRainyLine":
            return RiRainyLine;
        case "ri:RiShining2Fill":
            return RiShining2Fill;
        case "ri:RiShining2Line":
            return RiShining2Line;
        case "ri:RiShiningFill":
            return RiShiningFill;
        case "ri:RiShiningLine":
            return RiShiningLine;
        case "ri:RiShowersFill":
            return RiShowersFill;
        case "ri:RiShowersLine":
            return RiShowersLine;
        case "ri:RiSnowflakeFill":
            return RiSnowflakeFill;
        case "ri:RiSnowflakeLine":
            return RiSnowflakeLine;
        case "ri:RiSnowyFill":
            return RiSnowyFill;
        case "ri:RiSnowyLine":
            return RiSnowyLine;
        case "ri:RiSparkling2Fill":
            return RiSparkling2Fill;
        case "ri:RiSparkling2Line":
            return RiSparkling2Line;
        case "ri:RiSparklingFill":
            return RiSparklingFill;
        case "ri:RiSparklingLine":
            return RiSparklingLine;
    }
}
