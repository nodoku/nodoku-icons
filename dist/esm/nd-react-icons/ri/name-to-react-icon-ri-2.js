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
export function nameToReactIcon_ri_2(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, RiRocketFill, RiRocketLine, RiRouteFill, RiRouteLine, RiRunFill, RiRunLine, RiSailboatFill, RiSailboatLine, RiShip2Fill, RiShip2Line, RiShipFill, RiShipLine, RiSignalTowerFill, RiSignalTowerLine, RiSignpostFill, RiSignpostLine, RiSpaceShipFill, RiSpaceShipLine, RiSteering2Fill, RiSteering2Line, RiSteeringFill, RiSteeringLine, RiSubwayFill, RiSubwayLine, RiSubwayWifiFill, RiSubwayWifiLine, RiSuitcase2Fill, RiSuitcase2Line, RiSuitcase3Fill, RiSuitcase3Line, RiSuitcaseFill, RiSuitcaseLine, RiTakeawayFill, RiTakeawayLine, RiTaxiFill, RiTaxiLine, RiTaxiWifiFill, RiTaxiWifiLine, RiTimeZoneFill, RiTimeZoneLine, RiTrafficLightFill, RiTrafficLightLine, RiTrainFill, RiTrainLine, RiTrainWifiFill, RiTrainWifiLine, RiTreasureMapFill, RiTreasureMapLine, RiTruckFill, RiTruckLine, RiUnpinFill, RiUnpinLine, RiWalkFill, RiWalkLine, Ri4kFill, Ri4kLine, RiAlbumFill, RiAlbumLine, RiAspectRatioFill, RiAspectRatioLine, RiBroadcastFill, RiBroadcastLine, RiCamera2Fill, RiCamera2Line, RiCamera3Fill, RiCamera3Line, RiCameraAiFill, RiCameraAiLine, RiCameraFill, RiCameraLensAiFill, RiCameraLensAiLine, RiCameraLensFill, RiCameraLensLine, RiCameraLine, RiCameraOffFill, RiCameraOffLine, RiCameraSwitchFill, RiCameraSwitchLine, RiClapperboardAiFill, RiClapperboardAiLine, RiClapperboardFill, RiClapperboardLine, RiClosedCaptioningAiFill, RiClosedCaptioningAiLine, RiClosedCaptioningFill, RiClosedCaptioningLine, RiDiscFill, RiDiscLine, RiDvFill, RiDvLine, RiDvdAiFill, RiDvdAiLine, RiDvdFill, RiDvdLine, RiEjectFill, RiEjectLine, RiEqualizer2Fill, RiEqualizer2Line, RiEqualizer3Fill, RiEqualizer3Line, RiEqualizerFill, RiEqualizerLine, RiFilmAiFill, RiFilmAiLine, RiFilmFill, RiFilmLine, RiForward10Fill, RiForward10Line, RiForward15Fill, RiForward15Line, RiForward30Fill, RiForward30Line, RiForward5Fill, RiForward5Line, RiForwardEndFill, RiForwardEndLine, RiForwardEndMiniFill, RiForwardEndMiniLine, RiFullscreenExitFill, RiFullscreenExitLine, RiFullscreenFill, RiFullscreenLine, RiGalleryFill, RiGalleryLine, RiGalleryUploadFill, RiGalleryUploadLine, RiHdFill, RiHdLine, RiHeadphoneFill, RiHeadphoneLine, RiHqFill, RiHqLine, RiImage2Fill, RiImage2Line, RiImageAddFill, RiImageAddLine, RiImageAiFill, RiImageAiLine, RiImageCircleAiFill, RiImageCircleAiLine, RiImageCircleFill, RiImageCircleLine, RiImageEditFill, RiImageEditLine, RiImageFill, RiImageLine, RiLandscapeAiFill, RiLandscapeAiLine, RiLandscapeFill, RiLandscapeLine, RiLiveFill, RiLiveLine, RiMemoriesFill, RiMemoriesLine, RiMic2AiFill, RiMic2AiLine, RiMic2Fill, RiMic2Line, RiMicAiFill, RiMicAiLine, RiMicFill, RiMicLine, RiMicOffFill, RiMicOffLine, RiMovie2AiFill, RiMovie2AiLine, RiMovie2Fill, RiMovie2Line, RiMovieAiFill, RiMovieAiLine, RiMovieFill, RiMovieLine, RiMusic2Fill, RiMusic2Line, RiMusicAiFill, RiMusicAiLine, RiMusicFill, RiMusicLine, RiMvAiFill, RiMvAiLine, RiMvFill, RiMvLine, RiNotification2Fill, RiNotification2Line, RiNotification3Fill, RiNotification3Line, RiNotification4Fill, RiNotification4Line, RiNotificationFill, RiNotificationLine, RiNotificationOffFill, RiNotificationOffLine, RiNotificationSnoozeFill, RiNotificationSnoozeLine, RiOrderPlayFill, RiOrderPlayLine, RiPauseCircleFill, RiPauseCircleLine, RiPauseFill, RiPauseLargeFill, RiPauseLargeLine, RiPauseLine, RiPauseMiniFill, RiPauseMiniLine, RiPhoneCameraFill, RiPhoneCameraLine, RiPictureInPicture2Fill, RiPictureInPicture2Line, RiPictureInPictureExitFill, RiPictureInPictureExitLine, RiPictureInPictureFill, RiPictureInPictureLine, RiPlayCircleFill, RiPlayCircleLine, RiPlayFill, RiPlayLargeFill, RiPlayLargeLine, RiPlayLine, RiPlayList2Fill, RiPlayList2Line, RiPlayListAddFill, RiPlayListAddLine, RiPlayListFill, RiPlayListLine, RiPlayMiniFill, RiPlayMiniLine, RiPlayReverseFill, RiPlayReverseLargeFill, RiPlayReverseLargeLine, RiPlayReverseLine, RiPlayReverseMiniFill, RiPlayReverseMiniLine, RiPolaroid2Fill, RiPolaroid2Line, RiPolaroidFill, RiPolaroidLine, RiRadio2Fill, RiRadio2Line, RiRadioFill, RiRadioLine, RiRecordCircleFill, RiRecordCircleLine, RiRepeat2Fill, RiRepeat2Line, RiRepeatFill, RiRepeatLine, RiRepeatOneFill, RiRepeatOneLine, RiReplay10Fill, RiReplay10Line, RiReplay15Fill, RiReplay15Line, RiReplay30Fill, RiReplay30Line, RiReplay5Fill, RiReplay5Line, RiRewindFill, RiRewindLine, RiRewindMiniFill, RiRewindMiniLine, RiRewindStartFill, RiRewindStartLine, RiRewindStartMiniFill, RiRewindStartMiniLine, RiRhythmFill, RiRhythmLine, RiShuffleFill, RiShuffleLine, RiSkipBackFill, RiSkipBackLine, RiSkipBackMiniFill, RiSkipBackMiniLine, RiSkipForwardFill, RiSkipForwardLine, RiSkipForwardMiniFill, RiSkipForwardMiniLine, RiSlowDownFill, RiSlowDownLine, RiSoundModuleFill, RiSoundModuleLine, RiSpeaker2Fill, RiSpeaker2Line, RiSpeaker3Fill, RiSpeaker3Line, RiSpeakerFill, RiSpeakerLine, RiSpeedFill, RiSpeedLine, RiSpeedMiniFill, RiSpeedMiniLine, RiSpeedUpFill, RiSpeedUpLine, RiStopCircleFill, RiStopCircleLine, RiStopFill, RiStopLargeFill, RiStopLargeLine, RiStopLine, RiStopMiniFill, RiStopMiniLine, RiSurroundSoundFill, RiSurroundSoundLine, RiTapeFill, RiTapeLine, RiVideoAddFill, RiVideoAddLine, RiVideoAiFill, RiVideoAiLine, RiVideoDownloadFill, RiVideoDownloadLine, RiVideoFill, RiVideoLine, RiVideoOffFill, RiVideoOffLine, RiVideoOnAiFill, RiVideoOnAiLine, RiVideoOnFill, RiVideoOnLine, RiVideoUploadFill, RiVideoUploadLine, RiVidicon2Fill, RiVidicon2Line, RiVidiconFill, RiVidiconLine, RiVoiceAiFill, RiVoiceAiLine, RiVoiceprintFill, RiVoiceprintLine, RiVolumeDownFill, RiVolumeDownLine, RiVolumeMuteFill, RiVolumeMuteLine, RiVolumeOffVibrateFill, RiVolumeOffVibrateLine, RiVolumeUpFill, RiVolumeUpLine, RiVolumeVibrateFill, RiVolumeVibrateLine, RiWebcamFill, RiWebcamLine, RiArmchairFill, RiArmchairLine, RiBasketballFill, RiBasketballLine, RiBellFill, RiBellLine, RiBilliardsFill, RiBilliardsLine, RiBookShelfFill, RiBookShelfLine, RiBox1Fill, RiBox1Line, RiBox2Fill, RiBox2Line, RiBox3Fill, RiBox3Line, RiBoxingFill, RiBoxingLine, RiCactusFill, RiCactusLine, RiCandleFill, RiCandleLine, RiCharacterRecognitionFill, RiCharacterRecognitionLine, RiCrossFill, RiCrossLine, RiDice1Fill, RiDice1Line, RiDice2Fill, RiDice2Line, RiDice3Fill, RiDice3Line, RiDice4Fill, RiDice4Line, RiDice5Fill, RiDice5Line, RiDice6Fill, RiDice6Line, RiDiceFill, RiDiceLine, RiDoorClosedFill, RiDoorClosedLine, RiDoorFill, RiDoorLine, RiDoorLockBoxFill, RiDoorLockBoxLine, RiDoorLockFill, RiDoorLockLine, RiDoorOpenFill, RiDoorOpenLine, RiFlowerFill, RiFlowerLine, RiFootballFill, RiFootballLine, RiFridgeFill, RiFridgeLine, RiGameFill, RiGameLine, RiGlasses2Fill, RiGlasses2Line, RiGlassesFill, RiGlassesLine, RiGogglesFill, RiGogglesLine, RiGolfBallFill, RiGolfBallLine, RiGraduationCapFill, RiGraduationCapLine, RiHandbagFill, RiHandbagLine, RiInfinityFill, RiInfinityLine, RiKey2Fill, RiKey2Line, RiKeyFill, RiKeyLine, RiLeafFill, RiLeafLine, RiLightbulbFill, RiLightbulbFlashFill, RiLightbulbFlashLine, RiLightbulbLine, RiOutlet2Fill, RiOutlet2Line, RiOutletFill, RiOutletLine, RiPingPongFill, RiPingPongLine, RiPlantFill, RiPlantLine, RiPlug2Fill, RiPlug2Line, RiPlugFill, RiPlugLine, RiPokerClubsFill, RiPokerClubsLine, RiPokerDiamondsFill, RiPokerDiamondsLine, RiPokerHeartsFill, RiPokerHeartsLine, RiPokerSpadesFill, RiPokerSpadesLine, RiPoliceBadgeFill, RiPoliceBadgeLine, RiRecycleFill, RiRecycleLine, RiReservedFill, RiReservedLine, RiScales2Fill, RiScales2Line, RiScales3Fill, RiScales3Line, RiScalesFill, RiScalesLine, RiSeedlingFill, RiSeedlingLine, RiShirtFill, RiShirtLine, RiSofaFill, RiSofaLine, RiStairsFill, RiStairsLine, RiSwordFill, RiSwordLine, RiTShirt2Fill, RiTShirt2Line, RiTShirtAirFill, RiTShirtAirLine, RiTShirtFill, RiTShirtLine, RiToothFill, RiToothLine, RiTreeFill, RiTreeLine, RiUmbrellaFill, RiUmbrellaLine, RiVoiceRecognitionFill, RiVoiceRecognitionLine, RiWeightFill, RiWeightLine, RiWheelchairFill, RiWheelchairLine, RiAddBoxFill, RiAddBoxLine, RiAddCircleFill, RiAddCircleLine, RiAddFill, RiAddLargeFill, RiAddLargeLine, RiAddLine, RiAlarmFill, RiAlarmLine, RiAlarmSnoozeFill, RiAlarmSnoozeLine, RiAlarmWarningFill, RiAlarmWarningLine, RiAlertFill, RiAlertLine, RiApps2AddFill, RiApps2AddLine, RiApps2AiFill, RiApps2AiLine, RiApps2Fill, RiApps2Line, RiAppsFill, RiAppsLine, RiCheckDoubleFill, RiCheckDoubleLine, RiCheckFill, RiCheckLine, RiCheckboxBlankCircleFill, RiCheckboxBlankCircleLine, RiCheckboxBlankFill, RiCheckboxBlankLine, RiCheckboxCircleFill, RiCheckboxCircleLine, RiCheckboxFill, RiCheckboxIndeterminateFill, RiCheckboxIndeterminateLine, RiCheckboxLine, RiCheckboxMultipleBlankFill, RiCheckboxMultipleBlankLine, RiCheckboxMultipleFill, RiCheckboxMultipleLine, RiCloseCircleFill, RiCloseCircleLine, RiCloseFill, RiCloseLargeFill, RiCloseLargeLine, RiCloseLine, RiDashboardFill, RiDashboardHorizontalFill, RiDashboardHorizontalLine, RiDashboardLine, RiDeleteBack2Fill, RiDeleteBack2Line, RiDeleteBackFill, RiDeleteBackLine, RiDeleteBin2Fill, RiDeleteBin2Line, RiDeleteBin3Fill, RiDeleteBin3Line, RiDeleteBin4Fill, RiDeleteBin4Line, RiDeleteBin5Fill, RiDeleteBin5Line, RiDeleteBin6Fill, RiDeleteBin6Line, RiDeleteBin7Fill, RiDeleteBin7Line, RiDeleteBinFill, RiDeleteBinLine, RiDivideFill, RiDivideLine, RiDownload2Fill, RiDownload2Line, RiDownloadCloud2Fill, RiDownloadCloud2Line, RiDownloadCloudFill, RiDownloadCloudLine, RiDownloadFill, RiDownloadLine, RiEqualFill, RiEqualLine, RiErrorWarningFill, RiErrorWarningLine, RiExportFill, RiExportLine, RiExternalLinkFill, RiExternalLinkLine, RiEye2Fill, RiEye2Line, RiEyeCloseFill, RiEyeCloseLine, RiEyeFill, RiEyeLine, RiEyeOffFill, RiEyeOffLine, RiFilter2Fill, RiFilter2Line, RiFilter3Fill, RiFilter3Line, RiFilterFill, RiFilterLine, RiFilterOffFill, RiFilterOffLine, RiFindReplaceFill, RiFindReplaceLine, RiForbid2Fill, RiForbid2Line, RiForbidFill, RiForbidLine, RiFunctionAddFill, RiFunctionAddLine, RiFunctionFill, RiFunctionLine, RiHistoryFill, RiHistoryLine, RiHourglass2Fill, RiHourglass2Line, RiHourglassFill, RiHourglassLine, RiImportFill, RiImportLine, RiIndeterminateCircleFill, RiIndeterminateCircleLine, RiInformation2Fill, RiInformation2Line, RiInformationFill, RiInformationLine, RiInformationOffFill, RiInformationOffLine, RiListSettingsFill, RiListSettingsLine, RiLoader2Fill, RiLoader2Line, RiLoader3Fill, RiLoader3Line, RiLoader4Fill, RiLoader4Line, RiLoader5Fill, RiLoader5Line, RiLoaderFill, RiLoaderLine, RiLock2Fill, RiLock2Line, RiLockFill, RiLockLine, RiLockPasswordFill, RiLockPasswordLine, RiLockStarFill, RiLockStarLine, RiLockUnlockFill, RiLockUnlockLine, RiLoginBoxFill, RiLoginBoxLine, RiLoginCircleFill, RiLoginCircleLine, RiLogoutBoxFill, RiLogoutBoxLine, RiLogoutBoxRFill, RiLogoutBoxRLine, RiLogoutCircleFill, RiLogoutCircleLine, RiLogoutCircleRFill, RiLogoutCircleRLine, RiLoopLeftFill, RiLoopLeftLine, RiLoopRightFill, RiLoopRightLine, RiMenu2Fill, RiMenu2Line, RiMenu3Fill, RiMenu3Line, RiMenu4Fill, RiMenu4Line, RiMenu5Fill, RiMenu5Line, RiMenuAddFill, RiMenuAddLine, RiMenuFill, RiMenuFold2Fill, RiMenuFold2Line, RiMenuFold3Fill, RiMenuFold3Line, RiMenuFold4Fill, RiMenuFold4Line, RiMenuFoldFill, RiMenuFoldLine, RiMenuLine, RiMenuSearchFill, RiMenuSearchLine, RiMenuUnfold2Fill, RiMenuUnfold2Line, RiMenuUnfold3Fill, RiMenuUnfold3Line, RiMenuUnfold4Fill, RiMenuUnfold4Line, RiMenuUnfoldFill, RiMenuUnfoldLine, RiMore2Fill, RiMore2Line, RiMoreFill, RiMoreLine, RiNotificationBadgeFill, RiNotificationBadgeLine, RiProgress1Fill, RiProgress1Line, RiProgress2Fill, RiProgress2Line, RiProgress3Fill, RiProgress3Line, RiProgress4Fill, RiProgress4Line, RiProgress5Fill, RiProgress5Line, RiProgress6Fill, RiProgress6Line, RiProgress7Fill, RiProgress7Line, RiProgress8Fill, RiProgress8Line, RiProhibited2Fill, RiProhibited2Line, RiProhibitedFill, RiProhibitedLine, RiQuestionFill, RiQuestionLine, RiRadioButtonFill, RiRadioButtonLine, RiRefreshFill, RiRefreshLine, RiResetLeftFill, RiResetLeftLine, RiResetRightFill, RiResetRightLine, RiSearch2Fill, RiSearch2Line, RiSearchEyeFill, RiSearchEyeLine, RiSearchFill, RiSearchLine, RiSettings2Fill, RiSettings2Line, RiSettings3Fill, RiSettings3Line, RiSettings4Fill, RiSettings4Line, RiSettings5Fill, RiSettings5Line, RiSettings6Fill, RiSettings6Line, RiSettingsFill, RiSettingsLine, RiShare2Fill, RiShare2Line, RiShareBoxFill, RiShareBoxLine, RiShareCircleFill, RiShareCircleLine, RiShareFill, RiShareForward2Fill, RiShareForward2Line, RiShareForwardBoxFill, RiShareForwardBoxLine, RiShareForwardFill, RiShareForwardLine, RiShareLine, RiShieldCheckFill, RiShieldCheckLine, RiShieldCrossFill, RiShieldCrossLine, RiShieldFill, RiShieldFlashFill, RiShieldFlashLine, RiShieldKeyholeFill, RiShieldKeyholeLine, RiShieldLine, RiShieldStarFill, RiShieldStarLine, RiShieldUserFill, RiShieldUserLine, RiSideBarFill, RiSideBarLine, RiSidebarFoldFill, RiSidebarFoldLine, RiSidebarUnfoldFill, RiSidebarUnfoldLine, RiSpam2Fill, RiSpam2Line, RiSpam3Fill, RiSpam3Line, RiSpamFill, RiSpamLine, RiStarFill, RiStarHalfFill, RiStarHalfLine, RiStarHalfSFill, RiStarHalfSLine, RiStarLine, RiStarOffFill, RiStarOffLine, RiStarSFill, RiStarSLine, RiSubtractFill, RiSubtractLine, RiThumbDownFill, RiThumbDownLine, RiThumbUpFill, RiThumbUpLine, RiTimeFill, RiTimeLine, RiTimer2Fill, RiTimer2Line, RiTimerFill, RiTimerFlashFill, RiTimerFlashLine, RiTimerLine, RiToggleFill, RiToggleLine, RiUpload2Fill, RiUpload2Line, RiUploadCloud2Fill, RiUploadCloud2Line, RiUploadCloudFill, RiUploadCloudLine, RiUploadFill, RiUploadLine, RiZoomInFill, RiZoomInLine, RiZoomOutFill, RiZoomOutLine, RiAccountBox2Fill, RiAccountBox2Line, RiAccountBoxFill, RiAccountBoxLine, RiAccountCircle2Fill, RiAccountCircle2Line, RiAccountCircleFill, RiAccountCircleLine, RiAccountPinBoxFill, RiAccountPinBoxLine, RiAccountPinCircleFill, RiAccountPinCircleLine, RiAdminFill, RiAdminLine, RiAliensFill, RiAliensLine, RiBearSmileFill, RiBearSmileLine, RiBodyScanFill, RiBodyScanLine, RiContactsFill, RiContactsLine, RiCriminalFill, RiCriminalLine, RiEmotion2Fill, RiEmotion2Line, RiEmotionFill, RiEmotionHappyFill, RiEmotionHappyLine, RiEmotionLaughFill, RiEmotionLaughLine, RiEmotionLine, RiEmotionNormalFill, RiEmotionNormalLine, RiEmotionSadFill, RiEmotionSadLine, RiEmotionUnhappyFill, RiEmotionUnhappyLine, RiGenderlessFill, RiGenderlessLine, RiGhost2Fill, RiGhost2Line, RiGhostFill, RiGhostLine, RiGhostSmileFill, RiGhostSmileLine, RiGroup2Fill, RiGroup2Line, RiGroup3Fill, RiGroup3Line, RiGroupFill, RiGroupLine, RiMenFill, RiMenLine, RiMickeyFill, RiMickeyLine, RiOpenArmFill, RiOpenArmLine, RiParentFill, RiParentLine, RiRobot2Fill, RiRobot2Line, RiRobot3Fill, RiRobot3Line, RiRobotFill, RiRobotLine, RiSkull2Fill, RiSkull2Line, RiSkullFill, RiSkullLine, RiSpyFill, RiSpyLine, RiStarSmileFill, RiStarSmileLine, RiTeamFill, RiTeamLine, RiTravestiFill, RiTravestiLine, RiUser2Fill, RiUser2Line, RiUser3Fill, RiUser3Line, RiUser4Fill, RiUser4Line, RiUser5Fill, RiUser5Line, RiUser6Fill, RiUser6Line, RiUserAddFill, RiUserAddLine, RiUserCommunityFill, RiUserCommunityLine, RiUserFill, RiUserFollowFill, RiUserFollowLine, RiUserForbidFill, RiUserForbidLine, RiUserHeartFill, RiUserHeartLine, RiUserLine, RiUserLocationFill, RiUserLocationLine, RiUserMinusFill, RiUserMinusLine, RiUserReceived2Fill, RiUserReceived2Line, RiUserReceivedFill, RiUserReceivedLine, RiUserSearchFill, RiUserSearchLine, RiUserSettingsFill, RiUserSettingsLine, RiUserShared2Fill, RiUserShared2Line, RiUserSharedFill, RiUserSharedLine, RiUserSmileFill, RiUserSmileLine, RiUserStarFill, RiUserStarLine, RiUserUnfollowFill, RiUserUnfollowLine, RiUserVoiceFill, RiUserVoiceLine, RiWomenFill, RiWomenLine, RiBlazeFill, RiBlazeLine, RiCelsiusFill, RiCelsiusLine, RiCloudWindyFill, RiCloudWindyLine, RiCloudy2Fill, RiCloudy2Line, RiCloudyFill, RiCloudyLine, RiDrizzleFill, RiDrizzleLine, RiEarthquakeFill, RiEarthquakeLine, RiFahrenheitFill, RiFahrenheitLine, RiFireFill, RiFireLine, RiFlashlightFill, RiFlashlightLine, RiFloodFill, RiFloodLine, RiFoggyFill, RiFoggyLine, RiHailFill, RiHailLine, RiHaze2Fill, RiHaze2Line, RiHazeFill, RiHazeLine, RiHeavyShowersFill, RiHeavyShowersLine, RiMeteorFill, RiMeteorLine, RiMistFill, RiMistLine, RiMoonClearFill, RiMoonClearLine, RiMoonCloudyFill, RiMoonCloudyLine, RiMoonFill, RiMoonFoggyFill, RiMoonFoggyLine, RiMoonLine, RiRainbowFill, RiRainbowLine, RiRainyFill, RiRainyLine, RiShining2Fill, RiShining2Line, RiShiningFill, RiShiningLine, RiShowersFill, RiShowersLine, RiSnowflakeFill, RiSnowflakeLine, RiSnowyFill, RiSnowyLine, RiSparkling2Fill, RiSparkling2Line, RiSparklingFill, RiSparklingLine;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "ri:RiRocketFill": return [3 /*break*/, 1];
                        case "ri:RiRocketLine": return [3 /*break*/, 3];
                        case "ri:RiRouteFill": return [3 /*break*/, 5];
                        case "ri:RiRouteLine": return [3 /*break*/, 7];
                        case "ri:RiRunFill": return [3 /*break*/, 9];
                        case "ri:RiRunLine": return [3 /*break*/, 11];
                        case "ri:RiSailboatFill": return [3 /*break*/, 13];
                        case "ri:RiSailboatLine": return [3 /*break*/, 15];
                        case "ri:RiShip2Fill": return [3 /*break*/, 17];
                        case "ri:RiShip2Line": return [3 /*break*/, 19];
                        case "ri:RiShipFill": return [3 /*break*/, 21];
                        case "ri:RiShipLine": return [3 /*break*/, 23];
                        case "ri:RiSignalTowerFill": return [3 /*break*/, 25];
                        case "ri:RiSignalTowerLine": return [3 /*break*/, 27];
                        case "ri:RiSignpostFill": return [3 /*break*/, 29];
                        case "ri:RiSignpostLine": return [3 /*break*/, 31];
                        case "ri:RiSpaceShipFill": return [3 /*break*/, 33];
                        case "ri:RiSpaceShipLine": return [3 /*break*/, 35];
                        case "ri:RiSteering2Fill": return [3 /*break*/, 37];
                        case "ri:RiSteering2Line": return [3 /*break*/, 39];
                        case "ri:RiSteeringFill": return [3 /*break*/, 41];
                        case "ri:RiSteeringLine": return [3 /*break*/, 43];
                        case "ri:RiSubwayFill": return [3 /*break*/, 45];
                        case "ri:RiSubwayLine": return [3 /*break*/, 47];
                        case "ri:RiSubwayWifiFill": return [3 /*break*/, 49];
                        case "ri:RiSubwayWifiLine": return [3 /*break*/, 51];
                        case "ri:RiSuitcase2Fill": return [3 /*break*/, 53];
                        case "ri:RiSuitcase2Line": return [3 /*break*/, 55];
                        case "ri:RiSuitcase3Fill": return [3 /*break*/, 57];
                        case "ri:RiSuitcase3Line": return [3 /*break*/, 59];
                        case "ri:RiSuitcaseFill": return [3 /*break*/, 61];
                        case "ri:RiSuitcaseLine": return [3 /*break*/, 63];
                        case "ri:RiTakeawayFill": return [3 /*break*/, 65];
                        case "ri:RiTakeawayLine": return [3 /*break*/, 67];
                        case "ri:RiTaxiFill": return [3 /*break*/, 69];
                        case "ri:RiTaxiLine": return [3 /*break*/, 71];
                        case "ri:RiTaxiWifiFill": return [3 /*break*/, 73];
                        case "ri:RiTaxiWifiLine": return [3 /*break*/, 75];
                        case "ri:RiTimeZoneFill": return [3 /*break*/, 77];
                        case "ri:RiTimeZoneLine": return [3 /*break*/, 79];
                        case "ri:RiTrafficLightFill": return [3 /*break*/, 81];
                        case "ri:RiTrafficLightLine": return [3 /*break*/, 83];
                        case "ri:RiTrainFill": return [3 /*break*/, 85];
                        case "ri:RiTrainLine": return [3 /*break*/, 87];
                        case "ri:RiTrainWifiFill": return [3 /*break*/, 89];
                        case "ri:RiTrainWifiLine": return [3 /*break*/, 91];
                        case "ri:RiTreasureMapFill": return [3 /*break*/, 93];
                        case "ri:RiTreasureMapLine": return [3 /*break*/, 95];
                        case "ri:RiTruckFill": return [3 /*break*/, 97];
                        case "ri:RiTruckLine": return [3 /*break*/, 99];
                        case "ri:RiUnpinFill": return [3 /*break*/, 101];
                        case "ri:RiUnpinLine": return [3 /*break*/, 103];
                        case "ri:RiWalkFill": return [3 /*break*/, 105];
                        case "ri:RiWalkLine": return [3 /*break*/, 107];
                        case "ri:Ri4kFill": return [3 /*break*/, 109];
                        case "ri:Ri4kLine": return [3 /*break*/, 111];
                        case "ri:RiAlbumFill": return [3 /*break*/, 113];
                        case "ri:RiAlbumLine": return [3 /*break*/, 115];
                        case "ri:RiAspectRatioFill": return [3 /*break*/, 117];
                        case "ri:RiAspectRatioLine": return [3 /*break*/, 119];
                        case "ri:RiBroadcastFill": return [3 /*break*/, 121];
                        case "ri:RiBroadcastLine": return [3 /*break*/, 123];
                        case "ri:RiCamera2Fill": return [3 /*break*/, 125];
                        case "ri:RiCamera2Line": return [3 /*break*/, 127];
                        case "ri:RiCamera3Fill": return [3 /*break*/, 129];
                        case "ri:RiCamera3Line": return [3 /*break*/, 131];
                        case "ri:RiCameraAiFill": return [3 /*break*/, 133];
                        case "ri:RiCameraAiLine": return [3 /*break*/, 135];
                        case "ri:RiCameraFill": return [3 /*break*/, 137];
                        case "ri:RiCameraLensAiFill": return [3 /*break*/, 139];
                        case "ri:RiCameraLensAiLine": return [3 /*break*/, 141];
                        case "ri:RiCameraLensFill": return [3 /*break*/, 143];
                        case "ri:RiCameraLensLine": return [3 /*break*/, 145];
                        case "ri:RiCameraLine": return [3 /*break*/, 147];
                        case "ri:RiCameraOffFill": return [3 /*break*/, 149];
                        case "ri:RiCameraOffLine": return [3 /*break*/, 151];
                        case "ri:RiCameraSwitchFill": return [3 /*break*/, 153];
                        case "ri:RiCameraSwitchLine": return [3 /*break*/, 155];
                        case "ri:RiClapperboardAiFill": return [3 /*break*/, 157];
                        case "ri:RiClapperboardAiLine": return [3 /*break*/, 159];
                        case "ri:RiClapperboardFill": return [3 /*break*/, 161];
                        case "ri:RiClapperboardLine": return [3 /*break*/, 163];
                        case "ri:RiClosedCaptioningAiFill": return [3 /*break*/, 165];
                        case "ri:RiClosedCaptioningAiLine": return [3 /*break*/, 167];
                        case "ri:RiClosedCaptioningFill": return [3 /*break*/, 169];
                        case "ri:RiClosedCaptioningLine": return [3 /*break*/, 171];
                        case "ri:RiDiscFill": return [3 /*break*/, 173];
                        case "ri:RiDiscLine": return [3 /*break*/, 175];
                        case "ri:RiDvFill": return [3 /*break*/, 177];
                        case "ri:RiDvLine": return [3 /*break*/, 179];
                        case "ri:RiDvdAiFill": return [3 /*break*/, 181];
                        case "ri:RiDvdAiLine": return [3 /*break*/, 183];
                        case "ri:RiDvdFill": return [3 /*break*/, 185];
                        case "ri:RiDvdLine": return [3 /*break*/, 187];
                        case "ri:RiEjectFill": return [3 /*break*/, 189];
                        case "ri:RiEjectLine": return [3 /*break*/, 191];
                        case "ri:RiEqualizer2Fill": return [3 /*break*/, 193];
                        case "ri:RiEqualizer2Line": return [3 /*break*/, 195];
                        case "ri:RiEqualizer3Fill": return [3 /*break*/, 197];
                        case "ri:RiEqualizer3Line": return [3 /*break*/, 199];
                        case "ri:RiEqualizerFill": return [3 /*break*/, 201];
                        case "ri:RiEqualizerLine": return [3 /*break*/, 203];
                        case "ri:RiFilmAiFill": return [3 /*break*/, 205];
                        case "ri:RiFilmAiLine": return [3 /*break*/, 207];
                        case "ri:RiFilmFill": return [3 /*break*/, 209];
                        case "ri:RiFilmLine": return [3 /*break*/, 211];
                        case "ri:RiForward10Fill": return [3 /*break*/, 213];
                        case "ri:RiForward10Line": return [3 /*break*/, 215];
                        case "ri:RiForward15Fill": return [3 /*break*/, 217];
                        case "ri:RiForward15Line": return [3 /*break*/, 219];
                        case "ri:RiForward30Fill": return [3 /*break*/, 221];
                        case "ri:RiForward30Line": return [3 /*break*/, 223];
                        case "ri:RiForward5Fill": return [3 /*break*/, 225];
                        case "ri:RiForward5Line": return [3 /*break*/, 227];
                        case "ri:RiForwardEndFill": return [3 /*break*/, 229];
                        case "ri:RiForwardEndLine": return [3 /*break*/, 231];
                        case "ri:RiForwardEndMiniFill": return [3 /*break*/, 233];
                        case "ri:RiForwardEndMiniLine": return [3 /*break*/, 235];
                        case "ri:RiFullscreenExitFill": return [3 /*break*/, 237];
                        case "ri:RiFullscreenExitLine": return [3 /*break*/, 239];
                        case "ri:RiFullscreenFill": return [3 /*break*/, 241];
                        case "ri:RiFullscreenLine": return [3 /*break*/, 243];
                        case "ri:RiGalleryFill": return [3 /*break*/, 245];
                        case "ri:RiGalleryLine": return [3 /*break*/, 247];
                        case "ri:RiGalleryUploadFill": return [3 /*break*/, 249];
                        case "ri:RiGalleryUploadLine": return [3 /*break*/, 251];
                        case "ri:RiHdFill": return [3 /*break*/, 253];
                        case "ri:RiHdLine": return [3 /*break*/, 255];
                        case "ri:RiHeadphoneFill": return [3 /*break*/, 257];
                        case "ri:RiHeadphoneLine": return [3 /*break*/, 259];
                        case "ri:RiHqFill": return [3 /*break*/, 261];
                        case "ri:RiHqLine": return [3 /*break*/, 263];
                        case "ri:RiImage2Fill": return [3 /*break*/, 265];
                        case "ri:RiImage2Line": return [3 /*break*/, 267];
                        case "ri:RiImageAddFill": return [3 /*break*/, 269];
                        case "ri:RiImageAddLine": return [3 /*break*/, 271];
                        case "ri:RiImageAiFill": return [3 /*break*/, 273];
                        case "ri:RiImageAiLine": return [3 /*break*/, 275];
                        case "ri:RiImageCircleAiFill": return [3 /*break*/, 277];
                        case "ri:RiImageCircleAiLine": return [3 /*break*/, 279];
                        case "ri:RiImageCircleFill": return [3 /*break*/, 281];
                        case "ri:RiImageCircleLine": return [3 /*break*/, 283];
                        case "ri:RiImageEditFill": return [3 /*break*/, 285];
                        case "ri:RiImageEditLine": return [3 /*break*/, 287];
                        case "ri:RiImageFill": return [3 /*break*/, 289];
                        case "ri:RiImageLine": return [3 /*break*/, 291];
                        case "ri:RiLandscapeAiFill": return [3 /*break*/, 293];
                        case "ri:RiLandscapeAiLine": return [3 /*break*/, 295];
                        case "ri:RiLandscapeFill": return [3 /*break*/, 297];
                        case "ri:RiLandscapeLine": return [3 /*break*/, 299];
                        case "ri:RiLiveFill": return [3 /*break*/, 301];
                        case "ri:RiLiveLine": return [3 /*break*/, 303];
                        case "ri:RiMemoriesFill": return [3 /*break*/, 305];
                        case "ri:RiMemoriesLine": return [3 /*break*/, 307];
                        case "ri:RiMic2AiFill": return [3 /*break*/, 309];
                        case "ri:RiMic2AiLine": return [3 /*break*/, 311];
                        case "ri:RiMic2Fill": return [3 /*break*/, 313];
                        case "ri:RiMic2Line": return [3 /*break*/, 315];
                        case "ri:RiMicAiFill": return [3 /*break*/, 317];
                        case "ri:RiMicAiLine": return [3 /*break*/, 319];
                        case "ri:RiMicFill": return [3 /*break*/, 321];
                        case "ri:RiMicLine": return [3 /*break*/, 323];
                        case "ri:RiMicOffFill": return [3 /*break*/, 325];
                        case "ri:RiMicOffLine": return [3 /*break*/, 327];
                        case "ri:RiMovie2AiFill": return [3 /*break*/, 329];
                        case "ri:RiMovie2AiLine": return [3 /*break*/, 331];
                        case "ri:RiMovie2Fill": return [3 /*break*/, 333];
                        case "ri:RiMovie2Line": return [3 /*break*/, 335];
                        case "ri:RiMovieAiFill": return [3 /*break*/, 337];
                        case "ri:RiMovieAiLine": return [3 /*break*/, 339];
                        case "ri:RiMovieFill": return [3 /*break*/, 341];
                        case "ri:RiMovieLine": return [3 /*break*/, 343];
                        case "ri:RiMusic2Fill": return [3 /*break*/, 345];
                        case "ri:RiMusic2Line": return [3 /*break*/, 347];
                        case "ri:RiMusicAiFill": return [3 /*break*/, 349];
                        case "ri:RiMusicAiLine": return [3 /*break*/, 351];
                        case "ri:RiMusicFill": return [3 /*break*/, 353];
                        case "ri:RiMusicLine": return [3 /*break*/, 355];
                        case "ri:RiMvAiFill": return [3 /*break*/, 357];
                        case "ri:RiMvAiLine": return [3 /*break*/, 359];
                        case "ri:RiMvFill": return [3 /*break*/, 361];
                        case "ri:RiMvLine": return [3 /*break*/, 363];
                        case "ri:RiNotification2Fill": return [3 /*break*/, 365];
                        case "ri:RiNotification2Line": return [3 /*break*/, 367];
                        case "ri:RiNotification3Fill": return [3 /*break*/, 369];
                        case "ri:RiNotification3Line": return [3 /*break*/, 371];
                        case "ri:RiNotification4Fill": return [3 /*break*/, 373];
                        case "ri:RiNotification4Line": return [3 /*break*/, 375];
                        case "ri:RiNotificationFill": return [3 /*break*/, 377];
                        case "ri:RiNotificationLine": return [3 /*break*/, 379];
                        case "ri:RiNotificationOffFill": return [3 /*break*/, 381];
                        case "ri:RiNotificationOffLine": return [3 /*break*/, 383];
                        case "ri:RiNotificationSnoozeFill": return [3 /*break*/, 385];
                        case "ri:RiNotificationSnoozeLine": return [3 /*break*/, 387];
                        case "ri:RiOrderPlayFill": return [3 /*break*/, 389];
                        case "ri:RiOrderPlayLine": return [3 /*break*/, 391];
                        case "ri:RiPauseCircleFill": return [3 /*break*/, 393];
                        case "ri:RiPauseCircleLine": return [3 /*break*/, 395];
                        case "ri:RiPauseFill": return [3 /*break*/, 397];
                        case "ri:RiPauseLargeFill": return [3 /*break*/, 399];
                        case "ri:RiPauseLargeLine": return [3 /*break*/, 401];
                        case "ri:RiPauseLine": return [3 /*break*/, 403];
                        case "ri:RiPauseMiniFill": return [3 /*break*/, 405];
                        case "ri:RiPauseMiniLine": return [3 /*break*/, 407];
                        case "ri:RiPhoneCameraFill": return [3 /*break*/, 409];
                        case "ri:RiPhoneCameraLine": return [3 /*break*/, 411];
                        case "ri:RiPictureInPicture2Fill": return [3 /*break*/, 413];
                        case "ri:RiPictureInPicture2Line": return [3 /*break*/, 415];
                        case "ri:RiPictureInPictureExitFill": return [3 /*break*/, 417];
                        case "ri:RiPictureInPictureExitLine": return [3 /*break*/, 419];
                        case "ri:RiPictureInPictureFill": return [3 /*break*/, 421];
                        case "ri:RiPictureInPictureLine": return [3 /*break*/, 423];
                        case "ri:RiPlayCircleFill": return [3 /*break*/, 425];
                        case "ri:RiPlayCircleLine": return [3 /*break*/, 427];
                        case "ri:RiPlayFill": return [3 /*break*/, 429];
                        case "ri:RiPlayLargeFill": return [3 /*break*/, 431];
                        case "ri:RiPlayLargeLine": return [3 /*break*/, 433];
                        case "ri:RiPlayLine": return [3 /*break*/, 435];
                        case "ri:RiPlayList2Fill": return [3 /*break*/, 437];
                        case "ri:RiPlayList2Line": return [3 /*break*/, 439];
                        case "ri:RiPlayListAddFill": return [3 /*break*/, 441];
                        case "ri:RiPlayListAddLine": return [3 /*break*/, 443];
                        case "ri:RiPlayListFill": return [3 /*break*/, 445];
                        case "ri:RiPlayListLine": return [3 /*break*/, 447];
                        case "ri:RiPlayMiniFill": return [3 /*break*/, 449];
                        case "ri:RiPlayMiniLine": return [3 /*break*/, 451];
                        case "ri:RiPlayReverseFill": return [3 /*break*/, 453];
                        case "ri:RiPlayReverseLargeFill": return [3 /*break*/, 455];
                        case "ri:RiPlayReverseLargeLine": return [3 /*break*/, 457];
                        case "ri:RiPlayReverseLine": return [3 /*break*/, 459];
                        case "ri:RiPlayReverseMiniFill": return [3 /*break*/, 461];
                        case "ri:RiPlayReverseMiniLine": return [3 /*break*/, 463];
                        case "ri:RiPolaroid2Fill": return [3 /*break*/, 465];
                        case "ri:RiPolaroid2Line": return [3 /*break*/, 467];
                        case "ri:RiPolaroidFill": return [3 /*break*/, 469];
                        case "ri:RiPolaroidLine": return [3 /*break*/, 471];
                        case "ri:RiRadio2Fill": return [3 /*break*/, 473];
                        case "ri:RiRadio2Line": return [3 /*break*/, 475];
                        case "ri:RiRadioFill": return [3 /*break*/, 477];
                        case "ri:RiRadioLine": return [3 /*break*/, 479];
                        case "ri:RiRecordCircleFill": return [3 /*break*/, 481];
                        case "ri:RiRecordCircleLine": return [3 /*break*/, 483];
                        case "ri:RiRepeat2Fill": return [3 /*break*/, 485];
                        case "ri:RiRepeat2Line": return [3 /*break*/, 487];
                        case "ri:RiRepeatFill": return [3 /*break*/, 489];
                        case "ri:RiRepeatLine": return [3 /*break*/, 491];
                        case "ri:RiRepeatOneFill": return [3 /*break*/, 493];
                        case "ri:RiRepeatOneLine": return [3 /*break*/, 495];
                        case "ri:RiReplay10Fill": return [3 /*break*/, 497];
                        case "ri:RiReplay10Line": return [3 /*break*/, 499];
                        case "ri:RiReplay15Fill": return [3 /*break*/, 501];
                        case "ri:RiReplay15Line": return [3 /*break*/, 503];
                        case "ri:RiReplay30Fill": return [3 /*break*/, 505];
                        case "ri:RiReplay30Line": return [3 /*break*/, 507];
                        case "ri:RiReplay5Fill": return [3 /*break*/, 509];
                        case "ri:RiReplay5Line": return [3 /*break*/, 511];
                        case "ri:RiRewindFill": return [3 /*break*/, 513];
                        case "ri:RiRewindLine": return [3 /*break*/, 515];
                        case "ri:RiRewindMiniFill": return [3 /*break*/, 517];
                        case "ri:RiRewindMiniLine": return [3 /*break*/, 519];
                        case "ri:RiRewindStartFill": return [3 /*break*/, 521];
                        case "ri:RiRewindStartLine": return [3 /*break*/, 523];
                        case "ri:RiRewindStartMiniFill": return [3 /*break*/, 525];
                        case "ri:RiRewindStartMiniLine": return [3 /*break*/, 527];
                        case "ri:RiRhythmFill": return [3 /*break*/, 529];
                        case "ri:RiRhythmLine": return [3 /*break*/, 531];
                        case "ri:RiShuffleFill": return [3 /*break*/, 533];
                        case "ri:RiShuffleLine": return [3 /*break*/, 535];
                        case "ri:RiSkipBackFill": return [3 /*break*/, 537];
                        case "ri:RiSkipBackLine": return [3 /*break*/, 539];
                        case "ri:RiSkipBackMiniFill": return [3 /*break*/, 541];
                        case "ri:RiSkipBackMiniLine": return [3 /*break*/, 543];
                        case "ri:RiSkipForwardFill": return [3 /*break*/, 545];
                        case "ri:RiSkipForwardLine": return [3 /*break*/, 547];
                        case "ri:RiSkipForwardMiniFill": return [3 /*break*/, 549];
                        case "ri:RiSkipForwardMiniLine": return [3 /*break*/, 551];
                        case "ri:RiSlowDownFill": return [3 /*break*/, 553];
                        case "ri:RiSlowDownLine": return [3 /*break*/, 555];
                        case "ri:RiSoundModuleFill": return [3 /*break*/, 557];
                        case "ri:RiSoundModuleLine": return [3 /*break*/, 559];
                        case "ri:RiSpeaker2Fill": return [3 /*break*/, 561];
                        case "ri:RiSpeaker2Line": return [3 /*break*/, 563];
                        case "ri:RiSpeaker3Fill": return [3 /*break*/, 565];
                        case "ri:RiSpeaker3Line": return [3 /*break*/, 567];
                        case "ri:RiSpeakerFill": return [3 /*break*/, 569];
                        case "ri:RiSpeakerLine": return [3 /*break*/, 571];
                        case "ri:RiSpeedFill": return [3 /*break*/, 573];
                        case "ri:RiSpeedLine": return [3 /*break*/, 575];
                        case "ri:RiSpeedMiniFill": return [3 /*break*/, 577];
                        case "ri:RiSpeedMiniLine": return [3 /*break*/, 579];
                        case "ri:RiSpeedUpFill": return [3 /*break*/, 581];
                        case "ri:RiSpeedUpLine": return [3 /*break*/, 583];
                        case "ri:RiStopCircleFill": return [3 /*break*/, 585];
                        case "ri:RiStopCircleLine": return [3 /*break*/, 587];
                        case "ri:RiStopFill": return [3 /*break*/, 589];
                        case "ri:RiStopLargeFill": return [3 /*break*/, 591];
                        case "ri:RiStopLargeLine": return [3 /*break*/, 593];
                        case "ri:RiStopLine": return [3 /*break*/, 595];
                        case "ri:RiStopMiniFill": return [3 /*break*/, 597];
                        case "ri:RiStopMiniLine": return [3 /*break*/, 599];
                        case "ri:RiSurroundSoundFill": return [3 /*break*/, 601];
                        case "ri:RiSurroundSoundLine": return [3 /*break*/, 603];
                        case "ri:RiTapeFill": return [3 /*break*/, 605];
                        case "ri:RiTapeLine": return [3 /*break*/, 607];
                        case "ri:RiVideoAddFill": return [3 /*break*/, 609];
                        case "ri:RiVideoAddLine": return [3 /*break*/, 611];
                        case "ri:RiVideoAiFill": return [3 /*break*/, 613];
                        case "ri:RiVideoAiLine": return [3 /*break*/, 615];
                        case "ri:RiVideoDownloadFill": return [3 /*break*/, 617];
                        case "ri:RiVideoDownloadLine": return [3 /*break*/, 619];
                        case "ri:RiVideoFill": return [3 /*break*/, 621];
                        case "ri:RiVideoLine": return [3 /*break*/, 623];
                        case "ri:RiVideoOffFill": return [3 /*break*/, 625];
                        case "ri:RiVideoOffLine": return [3 /*break*/, 627];
                        case "ri:RiVideoOnAiFill": return [3 /*break*/, 629];
                        case "ri:RiVideoOnAiLine": return [3 /*break*/, 631];
                        case "ri:RiVideoOnFill": return [3 /*break*/, 633];
                        case "ri:RiVideoOnLine": return [3 /*break*/, 635];
                        case "ri:RiVideoUploadFill": return [3 /*break*/, 637];
                        case "ri:RiVideoUploadLine": return [3 /*break*/, 639];
                        case "ri:RiVidicon2Fill": return [3 /*break*/, 641];
                        case "ri:RiVidicon2Line": return [3 /*break*/, 643];
                        case "ri:RiVidiconFill": return [3 /*break*/, 645];
                        case "ri:RiVidiconLine": return [3 /*break*/, 647];
                        case "ri:RiVoiceAiFill": return [3 /*break*/, 649];
                        case "ri:RiVoiceAiLine": return [3 /*break*/, 651];
                        case "ri:RiVoiceprintFill": return [3 /*break*/, 653];
                        case "ri:RiVoiceprintLine": return [3 /*break*/, 655];
                        case "ri:RiVolumeDownFill": return [3 /*break*/, 657];
                        case "ri:RiVolumeDownLine": return [3 /*break*/, 659];
                        case "ri:RiVolumeMuteFill": return [3 /*break*/, 661];
                        case "ri:RiVolumeMuteLine": return [3 /*break*/, 663];
                        case "ri:RiVolumeOffVibrateFill": return [3 /*break*/, 665];
                        case "ri:RiVolumeOffVibrateLine": return [3 /*break*/, 667];
                        case "ri:RiVolumeUpFill": return [3 /*break*/, 669];
                        case "ri:RiVolumeUpLine": return [3 /*break*/, 671];
                        case "ri:RiVolumeVibrateFill": return [3 /*break*/, 673];
                        case "ri:RiVolumeVibrateLine": return [3 /*break*/, 675];
                        case "ri:RiWebcamFill": return [3 /*break*/, 677];
                        case "ri:RiWebcamLine": return [3 /*break*/, 679];
                        case "ri:RiArmchairFill": return [3 /*break*/, 681];
                        case "ri:RiArmchairLine": return [3 /*break*/, 683];
                        case "ri:RiBasketballFill": return [3 /*break*/, 685];
                        case "ri:RiBasketballLine": return [3 /*break*/, 687];
                        case "ri:RiBellFill": return [3 /*break*/, 689];
                        case "ri:RiBellLine": return [3 /*break*/, 691];
                        case "ri:RiBilliardsFill": return [3 /*break*/, 693];
                        case "ri:RiBilliardsLine": return [3 /*break*/, 695];
                        case "ri:RiBookShelfFill": return [3 /*break*/, 697];
                        case "ri:RiBookShelfLine": return [3 /*break*/, 699];
                        case "ri:RiBox1Fill": return [3 /*break*/, 701];
                        case "ri:RiBox1Line": return [3 /*break*/, 703];
                        case "ri:RiBox2Fill": return [3 /*break*/, 705];
                        case "ri:RiBox2Line": return [3 /*break*/, 707];
                        case "ri:RiBox3Fill": return [3 /*break*/, 709];
                        case "ri:RiBox3Line": return [3 /*break*/, 711];
                        case "ri:RiBoxingFill": return [3 /*break*/, 713];
                        case "ri:RiBoxingLine": return [3 /*break*/, 715];
                        case "ri:RiCactusFill": return [3 /*break*/, 717];
                        case "ri:RiCactusLine": return [3 /*break*/, 719];
                        case "ri:RiCandleFill": return [3 /*break*/, 721];
                        case "ri:RiCandleLine": return [3 /*break*/, 723];
                        case "ri:RiCharacterRecognitionFill": return [3 /*break*/, 725];
                        case "ri:RiCharacterRecognitionLine": return [3 /*break*/, 727];
                        case "ri:RiCrossFill": return [3 /*break*/, 729];
                        case "ri:RiCrossLine": return [3 /*break*/, 731];
                        case "ri:RiDice1Fill": return [3 /*break*/, 733];
                        case "ri:RiDice1Line": return [3 /*break*/, 735];
                        case "ri:RiDice2Fill": return [3 /*break*/, 737];
                        case "ri:RiDice2Line": return [3 /*break*/, 739];
                        case "ri:RiDice3Fill": return [3 /*break*/, 741];
                        case "ri:RiDice3Line": return [3 /*break*/, 743];
                        case "ri:RiDice4Fill": return [3 /*break*/, 745];
                        case "ri:RiDice4Line": return [3 /*break*/, 747];
                        case "ri:RiDice5Fill": return [3 /*break*/, 749];
                        case "ri:RiDice5Line": return [3 /*break*/, 751];
                        case "ri:RiDice6Fill": return [3 /*break*/, 753];
                        case "ri:RiDice6Line": return [3 /*break*/, 755];
                        case "ri:RiDiceFill": return [3 /*break*/, 757];
                        case "ri:RiDiceLine": return [3 /*break*/, 759];
                        case "ri:RiDoorClosedFill": return [3 /*break*/, 761];
                        case "ri:RiDoorClosedLine": return [3 /*break*/, 763];
                        case "ri:RiDoorFill": return [3 /*break*/, 765];
                        case "ri:RiDoorLine": return [3 /*break*/, 767];
                        case "ri:RiDoorLockBoxFill": return [3 /*break*/, 769];
                        case "ri:RiDoorLockBoxLine": return [3 /*break*/, 771];
                        case "ri:RiDoorLockFill": return [3 /*break*/, 773];
                        case "ri:RiDoorLockLine": return [3 /*break*/, 775];
                        case "ri:RiDoorOpenFill": return [3 /*break*/, 777];
                        case "ri:RiDoorOpenLine": return [3 /*break*/, 779];
                        case "ri:RiFlowerFill": return [3 /*break*/, 781];
                        case "ri:RiFlowerLine": return [3 /*break*/, 783];
                        case "ri:RiFootballFill": return [3 /*break*/, 785];
                        case "ri:RiFootballLine": return [3 /*break*/, 787];
                        case "ri:RiFridgeFill": return [3 /*break*/, 789];
                        case "ri:RiFridgeLine": return [3 /*break*/, 791];
                        case "ri:RiGameFill": return [3 /*break*/, 793];
                        case "ri:RiGameLine": return [3 /*break*/, 795];
                        case "ri:RiGlasses2Fill": return [3 /*break*/, 797];
                        case "ri:RiGlasses2Line": return [3 /*break*/, 799];
                        case "ri:RiGlassesFill": return [3 /*break*/, 801];
                        case "ri:RiGlassesLine": return [3 /*break*/, 803];
                        case "ri:RiGogglesFill": return [3 /*break*/, 805];
                        case "ri:RiGogglesLine": return [3 /*break*/, 807];
                        case "ri:RiGolfBallFill": return [3 /*break*/, 809];
                        case "ri:RiGolfBallLine": return [3 /*break*/, 811];
                        case "ri:RiGraduationCapFill": return [3 /*break*/, 813];
                        case "ri:RiGraduationCapLine": return [3 /*break*/, 815];
                        case "ri:RiHandbagFill": return [3 /*break*/, 817];
                        case "ri:RiHandbagLine": return [3 /*break*/, 819];
                        case "ri:RiInfinityFill": return [3 /*break*/, 821];
                        case "ri:RiInfinityLine": return [3 /*break*/, 823];
                        case "ri:RiKey2Fill": return [3 /*break*/, 825];
                        case "ri:RiKey2Line": return [3 /*break*/, 827];
                        case "ri:RiKeyFill": return [3 /*break*/, 829];
                        case "ri:RiKeyLine": return [3 /*break*/, 831];
                        case "ri:RiLeafFill": return [3 /*break*/, 833];
                        case "ri:RiLeafLine": return [3 /*break*/, 835];
                        case "ri:RiLightbulbFill": return [3 /*break*/, 837];
                        case "ri:RiLightbulbFlashFill": return [3 /*break*/, 839];
                        case "ri:RiLightbulbFlashLine": return [3 /*break*/, 841];
                        case "ri:RiLightbulbLine": return [3 /*break*/, 843];
                        case "ri:RiOutlet2Fill": return [3 /*break*/, 845];
                        case "ri:RiOutlet2Line": return [3 /*break*/, 847];
                        case "ri:RiOutletFill": return [3 /*break*/, 849];
                        case "ri:RiOutletLine": return [3 /*break*/, 851];
                        case "ri:RiPingPongFill": return [3 /*break*/, 853];
                        case "ri:RiPingPongLine": return [3 /*break*/, 855];
                        case "ri:RiPlantFill": return [3 /*break*/, 857];
                        case "ri:RiPlantLine": return [3 /*break*/, 859];
                        case "ri:RiPlug2Fill": return [3 /*break*/, 861];
                        case "ri:RiPlug2Line": return [3 /*break*/, 863];
                        case "ri:RiPlugFill": return [3 /*break*/, 865];
                        case "ri:RiPlugLine": return [3 /*break*/, 867];
                        case "ri:RiPokerClubsFill": return [3 /*break*/, 869];
                        case "ri:RiPokerClubsLine": return [3 /*break*/, 871];
                        case "ri:RiPokerDiamondsFill": return [3 /*break*/, 873];
                        case "ri:RiPokerDiamondsLine": return [3 /*break*/, 875];
                        case "ri:RiPokerHeartsFill": return [3 /*break*/, 877];
                        case "ri:RiPokerHeartsLine": return [3 /*break*/, 879];
                        case "ri:RiPokerSpadesFill": return [3 /*break*/, 881];
                        case "ri:RiPokerSpadesLine": return [3 /*break*/, 883];
                        case "ri:RiPoliceBadgeFill": return [3 /*break*/, 885];
                        case "ri:RiPoliceBadgeLine": return [3 /*break*/, 887];
                        case "ri:RiRecycleFill": return [3 /*break*/, 889];
                        case "ri:RiRecycleLine": return [3 /*break*/, 891];
                        case "ri:RiReservedFill": return [3 /*break*/, 893];
                        case "ri:RiReservedLine": return [3 /*break*/, 895];
                        case "ri:RiScales2Fill": return [3 /*break*/, 897];
                        case "ri:RiScales2Line": return [3 /*break*/, 899];
                        case "ri:RiScales3Fill": return [3 /*break*/, 901];
                        case "ri:RiScales3Line": return [3 /*break*/, 903];
                        case "ri:RiScalesFill": return [3 /*break*/, 905];
                        case "ri:RiScalesLine": return [3 /*break*/, 907];
                        case "ri:RiSeedlingFill": return [3 /*break*/, 909];
                        case "ri:RiSeedlingLine": return [3 /*break*/, 911];
                        case "ri:RiShirtFill": return [3 /*break*/, 913];
                        case "ri:RiShirtLine": return [3 /*break*/, 915];
                        case "ri:RiSofaFill": return [3 /*break*/, 917];
                        case "ri:RiSofaLine": return [3 /*break*/, 919];
                        case "ri:RiStairsFill": return [3 /*break*/, 921];
                        case "ri:RiStairsLine": return [3 /*break*/, 923];
                        case "ri:RiSwordFill": return [3 /*break*/, 925];
                        case "ri:RiSwordLine": return [3 /*break*/, 927];
                        case "ri:RiTShirt2Fill": return [3 /*break*/, 929];
                        case "ri:RiTShirt2Line": return [3 /*break*/, 931];
                        case "ri:RiTShirtAirFill": return [3 /*break*/, 933];
                        case "ri:RiTShirtAirLine": return [3 /*break*/, 935];
                        case "ri:RiTShirtFill": return [3 /*break*/, 937];
                        case "ri:RiTShirtLine": return [3 /*break*/, 939];
                        case "ri:RiToothFill": return [3 /*break*/, 941];
                        case "ri:RiToothLine": return [3 /*break*/, 943];
                        case "ri:RiTreeFill": return [3 /*break*/, 945];
                        case "ri:RiTreeLine": return [3 /*break*/, 947];
                        case "ri:RiUmbrellaFill": return [3 /*break*/, 949];
                        case "ri:RiUmbrellaLine": return [3 /*break*/, 951];
                        case "ri:RiVoiceRecognitionFill": return [3 /*break*/, 953];
                        case "ri:RiVoiceRecognitionLine": return [3 /*break*/, 955];
                        case "ri:RiWeightFill": return [3 /*break*/, 957];
                        case "ri:RiWeightLine": return [3 /*break*/, 959];
                        case "ri:RiWheelchairFill": return [3 /*break*/, 961];
                        case "ri:RiWheelchairLine": return [3 /*break*/, 963];
                        case "ri:RiAddBoxFill": return [3 /*break*/, 965];
                        case "ri:RiAddBoxLine": return [3 /*break*/, 967];
                        case "ri:RiAddCircleFill": return [3 /*break*/, 969];
                        case "ri:RiAddCircleLine": return [3 /*break*/, 971];
                        case "ri:RiAddFill": return [3 /*break*/, 973];
                        case "ri:RiAddLargeFill": return [3 /*break*/, 975];
                        case "ri:RiAddLargeLine": return [3 /*break*/, 977];
                        case "ri:RiAddLine": return [3 /*break*/, 979];
                        case "ri:RiAlarmFill": return [3 /*break*/, 981];
                        case "ri:RiAlarmLine": return [3 /*break*/, 983];
                        case "ri:RiAlarmSnoozeFill": return [3 /*break*/, 985];
                        case "ri:RiAlarmSnoozeLine": return [3 /*break*/, 987];
                        case "ri:RiAlarmWarningFill": return [3 /*break*/, 989];
                        case "ri:RiAlarmWarningLine": return [3 /*break*/, 991];
                        case "ri:RiAlertFill": return [3 /*break*/, 993];
                        case "ri:RiAlertLine": return [3 /*break*/, 995];
                        case "ri:RiApps2AddFill": return [3 /*break*/, 997];
                        case "ri:RiApps2AddLine": return [3 /*break*/, 999];
                        case "ri:RiApps2AiFill": return [3 /*break*/, 1001];
                        case "ri:RiApps2AiLine": return [3 /*break*/, 1003];
                        case "ri:RiApps2Fill": return [3 /*break*/, 1005];
                        case "ri:RiApps2Line": return [3 /*break*/, 1007];
                        case "ri:RiAppsFill": return [3 /*break*/, 1009];
                        case "ri:RiAppsLine": return [3 /*break*/, 1011];
                        case "ri:RiCheckDoubleFill": return [3 /*break*/, 1013];
                        case "ri:RiCheckDoubleLine": return [3 /*break*/, 1015];
                        case "ri:RiCheckFill": return [3 /*break*/, 1017];
                        case "ri:RiCheckLine": return [3 /*break*/, 1019];
                        case "ri:RiCheckboxBlankCircleFill": return [3 /*break*/, 1021];
                        case "ri:RiCheckboxBlankCircleLine": return [3 /*break*/, 1023];
                        case "ri:RiCheckboxBlankFill": return [3 /*break*/, 1025];
                        case "ri:RiCheckboxBlankLine": return [3 /*break*/, 1027];
                        case "ri:RiCheckboxCircleFill": return [3 /*break*/, 1029];
                        case "ri:RiCheckboxCircleLine": return [3 /*break*/, 1031];
                        case "ri:RiCheckboxFill": return [3 /*break*/, 1033];
                        case "ri:RiCheckboxIndeterminateFill": return [3 /*break*/, 1035];
                        case "ri:RiCheckboxIndeterminateLine": return [3 /*break*/, 1037];
                        case "ri:RiCheckboxLine": return [3 /*break*/, 1039];
                        case "ri:RiCheckboxMultipleBlankFill": return [3 /*break*/, 1041];
                        case "ri:RiCheckboxMultipleBlankLine": return [3 /*break*/, 1043];
                        case "ri:RiCheckboxMultipleFill": return [3 /*break*/, 1045];
                        case "ri:RiCheckboxMultipleLine": return [3 /*break*/, 1047];
                        case "ri:RiCloseCircleFill": return [3 /*break*/, 1049];
                        case "ri:RiCloseCircleLine": return [3 /*break*/, 1051];
                        case "ri:RiCloseFill": return [3 /*break*/, 1053];
                        case "ri:RiCloseLargeFill": return [3 /*break*/, 1055];
                        case "ri:RiCloseLargeLine": return [3 /*break*/, 1057];
                        case "ri:RiCloseLine": return [3 /*break*/, 1059];
                        case "ri:RiDashboardFill": return [3 /*break*/, 1061];
                        case "ri:RiDashboardHorizontalFill": return [3 /*break*/, 1063];
                        case "ri:RiDashboardHorizontalLine": return [3 /*break*/, 1065];
                        case "ri:RiDashboardLine": return [3 /*break*/, 1067];
                        case "ri:RiDeleteBack2Fill": return [3 /*break*/, 1069];
                        case "ri:RiDeleteBack2Line": return [3 /*break*/, 1071];
                        case "ri:RiDeleteBackFill": return [3 /*break*/, 1073];
                        case "ri:RiDeleteBackLine": return [3 /*break*/, 1075];
                        case "ri:RiDeleteBin2Fill": return [3 /*break*/, 1077];
                        case "ri:RiDeleteBin2Line": return [3 /*break*/, 1079];
                        case "ri:RiDeleteBin3Fill": return [3 /*break*/, 1081];
                        case "ri:RiDeleteBin3Line": return [3 /*break*/, 1083];
                        case "ri:RiDeleteBin4Fill": return [3 /*break*/, 1085];
                        case "ri:RiDeleteBin4Line": return [3 /*break*/, 1087];
                        case "ri:RiDeleteBin5Fill": return [3 /*break*/, 1089];
                        case "ri:RiDeleteBin5Line": return [3 /*break*/, 1091];
                        case "ri:RiDeleteBin6Fill": return [3 /*break*/, 1093];
                        case "ri:RiDeleteBin6Line": return [3 /*break*/, 1095];
                        case "ri:RiDeleteBin7Fill": return [3 /*break*/, 1097];
                        case "ri:RiDeleteBin7Line": return [3 /*break*/, 1099];
                        case "ri:RiDeleteBinFill": return [3 /*break*/, 1101];
                        case "ri:RiDeleteBinLine": return [3 /*break*/, 1103];
                        case "ri:RiDivideFill": return [3 /*break*/, 1105];
                        case "ri:RiDivideLine": return [3 /*break*/, 1107];
                        case "ri:RiDownload2Fill": return [3 /*break*/, 1109];
                        case "ri:RiDownload2Line": return [3 /*break*/, 1111];
                        case "ri:RiDownloadCloud2Fill": return [3 /*break*/, 1113];
                        case "ri:RiDownloadCloud2Line": return [3 /*break*/, 1115];
                        case "ri:RiDownloadCloudFill": return [3 /*break*/, 1117];
                        case "ri:RiDownloadCloudLine": return [3 /*break*/, 1119];
                        case "ri:RiDownloadFill": return [3 /*break*/, 1121];
                        case "ri:RiDownloadLine": return [3 /*break*/, 1123];
                        case "ri:RiEqualFill": return [3 /*break*/, 1125];
                        case "ri:RiEqualLine": return [3 /*break*/, 1127];
                        case "ri:RiErrorWarningFill": return [3 /*break*/, 1129];
                        case "ri:RiErrorWarningLine": return [3 /*break*/, 1131];
                        case "ri:RiExportFill": return [3 /*break*/, 1133];
                        case "ri:RiExportLine": return [3 /*break*/, 1135];
                        case "ri:RiExternalLinkFill": return [3 /*break*/, 1137];
                        case "ri:RiExternalLinkLine": return [3 /*break*/, 1139];
                        case "ri:RiEye2Fill": return [3 /*break*/, 1141];
                        case "ri:RiEye2Line": return [3 /*break*/, 1143];
                        case "ri:RiEyeCloseFill": return [3 /*break*/, 1145];
                        case "ri:RiEyeCloseLine": return [3 /*break*/, 1147];
                        case "ri:RiEyeFill": return [3 /*break*/, 1149];
                        case "ri:RiEyeLine": return [3 /*break*/, 1151];
                        case "ri:RiEyeOffFill": return [3 /*break*/, 1153];
                        case "ri:RiEyeOffLine": return [3 /*break*/, 1155];
                        case "ri:RiFilter2Fill": return [3 /*break*/, 1157];
                        case "ri:RiFilter2Line": return [3 /*break*/, 1159];
                        case "ri:RiFilter3Fill": return [3 /*break*/, 1161];
                        case "ri:RiFilter3Line": return [3 /*break*/, 1163];
                        case "ri:RiFilterFill": return [3 /*break*/, 1165];
                        case "ri:RiFilterLine": return [3 /*break*/, 1167];
                        case "ri:RiFilterOffFill": return [3 /*break*/, 1169];
                        case "ri:RiFilterOffLine": return [3 /*break*/, 1171];
                        case "ri:RiFindReplaceFill": return [3 /*break*/, 1173];
                        case "ri:RiFindReplaceLine": return [3 /*break*/, 1175];
                        case "ri:RiForbid2Fill": return [3 /*break*/, 1177];
                        case "ri:RiForbid2Line": return [3 /*break*/, 1179];
                        case "ri:RiForbidFill": return [3 /*break*/, 1181];
                        case "ri:RiForbidLine": return [3 /*break*/, 1183];
                        case "ri:RiFunctionAddFill": return [3 /*break*/, 1185];
                        case "ri:RiFunctionAddLine": return [3 /*break*/, 1187];
                        case "ri:RiFunctionFill": return [3 /*break*/, 1189];
                        case "ri:RiFunctionLine": return [3 /*break*/, 1191];
                        case "ri:RiHistoryFill": return [3 /*break*/, 1193];
                        case "ri:RiHistoryLine": return [3 /*break*/, 1195];
                        case "ri:RiHourglass2Fill": return [3 /*break*/, 1197];
                        case "ri:RiHourglass2Line": return [3 /*break*/, 1199];
                        case "ri:RiHourglassFill": return [3 /*break*/, 1201];
                        case "ri:RiHourglassLine": return [3 /*break*/, 1203];
                        case "ri:RiImportFill": return [3 /*break*/, 1205];
                        case "ri:RiImportLine": return [3 /*break*/, 1207];
                        case "ri:RiIndeterminateCircleFill": return [3 /*break*/, 1209];
                        case "ri:RiIndeterminateCircleLine": return [3 /*break*/, 1211];
                        case "ri:RiInformation2Fill": return [3 /*break*/, 1213];
                        case "ri:RiInformation2Line": return [3 /*break*/, 1215];
                        case "ri:RiInformationFill": return [3 /*break*/, 1217];
                        case "ri:RiInformationLine": return [3 /*break*/, 1219];
                        case "ri:RiInformationOffFill": return [3 /*break*/, 1221];
                        case "ri:RiInformationOffLine": return [3 /*break*/, 1223];
                        case "ri:RiListSettingsFill": return [3 /*break*/, 1225];
                        case "ri:RiListSettingsLine": return [3 /*break*/, 1227];
                        case "ri:RiLoader2Fill": return [3 /*break*/, 1229];
                        case "ri:RiLoader2Line": return [3 /*break*/, 1231];
                        case "ri:RiLoader3Fill": return [3 /*break*/, 1233];
                        case "ri:RiLoader3Line": return [3 /*break*/, 1235];
                        case "ri:RiLoader4Fill": return [3 /*break*/, 1237];
                        case "ri:RiLoader4Line": return [3 /*break*/, 1239];
                        case "ri:RiLoader5Fill": return [3 /*break*/, 1241];
                        case "ri:RiLoader5Line": return [3 /*break*/, 1243];
                        case "ri:RiLoaderFill": return [3 /*break*/, 1245];
                        case "ri:RiLoaderLine": return [3 /*break*/, 1247];
                        case "ri:RiLock2Fill": return [3 /*break*/, 1249];
                        case "ri:RiLock2Line": return [3 /*break*/, 1251];
                        case "ri:RiLockFill": return [3 /*break*/, 1253];
                        case "ri:RiLockLine": return [3 /*break*/, 1255];
                        case "ri:RiLockPasswordFill": return [3 /*break*/, 1257];
                        case "ri:RiLockPasswordLine": return [3 /*break*/, 1259];
                        case "ri:RiLockStarFill": return [3 /*break*/, 1261];
                        case "ri:RiLockStarLine": return [3 /*break*/, 1263];
                        case "ri:RiLockUnlockFill": return [3 /*break*/, 1265];
                        case "ri:RiLockUnlockLine": return [3 /*break*/, 1267];
                        case "ri:RiLoginBoxFill": return [3 /*break*/, 1269];
                        case "ri:RiLoginBoxLine": return [3 /*break*/, 1271];
                        case "ri:RiLoginCircleFill": return [3 /*break*/, 1273];
                        case "ri:RiLoginCircleLine": return [3 /*break*/, 1275];
                        case "ri:RiLogoutBoxFill": return [3 /*break*/, 1277];
                        case "ri:RiLogoutBoxLine": return [3 /*break*/, 1279];
                        case "ri:RiLogoutBoxRFill": return [3 /*break*/, 1281];
                        case "ri:RiLogoutBoxRLine": return [3 /*break*/, 1283];
                        case "ri:RiLogoutCircleFill": return [3 /*break*/, 1285];
                        case "ri:RiLogoutCircleLine": return [3 /*break*/, 1287];
                        case "ri:RiLogoutCircleRFill": return [3 /*break*/, 1289];
                        case "ri:RiLogoutCircleRLine": return [3 /*break*/, 1291];
                        case "ri:RiLoopLeftFill": return [3 /*break*/, 1293];
                        case "ri:RiLoopLeftLine": return [3 /*break*/, 1295];
                        case "ri:RiLoopRightFill": return [3 /*break*/, 1297];
                        case "ri:RiLoopRightLine": return [3 /*break*/, 1299];
                        case "ri:RiMenu2Fill": return [3 /*break*/, 1301];
                        case "ri:RiMenu2Line": return [3 /*break*/, 1303];
                        case "ri:RiMenu3Fill": return [3 /*break*/, 1305];
                        case "ri:RiMenu3Line": return [3 /*break*/, 1307];
                        case "ri:RiMenu4Fill": return [3 /*break*/, 1309];
                        case "ri:RiMenu4Line": return [3 /*break*/, 1311];
                        case "ri:RiMenu5Fill": return [3 /*break*/, 1313];
                        case "ri:RiMenu5Line": return [3 /*break*/, 1315];
                        case "ri:RiMenuAddFill": return [3 /*break*/, 1317];
                        case "ri:RiMenuAddLine": return [3 /*break*/, 1319];
                        case "ri:RiMenuFill": return [3 /*break*/, 1321];
                        case "ri:RiMenuFold2Fill": return [3 /*break*/, 1323];
                        case "ri:RiMenuFold2Line": return [3 /*break*/, 1325];
                        case "ri:RiMenuFold3Fill": return [3 /*break*/, 1327];
                        case "ri:RiMenuFold3Line": return [3 /*break*/, 1329];
                        case "ri:RiMenuFold4Fill": return [3 /*break*/, 1331];
                        case "ri:RiMenuFold4Line": return [3 /*break*/, 1333];
                        case "ri:RiMenuFoldFill": return [3 /*break*/, 1335];
                        case "ri:RiMenuFoldLine": return [3 /*break*/, 1337];
                        case "ri:RiMenuLine": return [3 /*break*/, 1339];
                        case "ri:RiMenuSearchFill": return [3 /*break*/, 1341];
                        case "ri:RiMenuSearchLine": return [3 /*break*/, 1343];
                        case "ri:RiMenuUnfold2Fill": return [3 /*break*/, 1345];
                        case "ri:RiMenuUnfold2Line": return [3 /*break*/, 1347];
                        case "ri:RiMenuUnfold3Fill": return [3 /*break*/, 1349];
                        case "ri:RiMenuUnfold3Line": return [3 /*break*/, 1351];
                        case "ri:RiMenuUnfold4Fill": return [3 /*break*/, 1353];
                        case "ri:RiMenuUnfold4Line": return [3 /*break*/, 1355];
                        case "ri:RiMenuUnfoldFill": return [3 /*break*/, 1357];
                        case "ri:RiMenuUnfoldLine": return [3 /*break*/, 1359];
                        case "ri:RiMore2Fill": return [3 /*break*/, 1361];
                        case "ri:RiMore2Line": return [3 /*break*/, 1363];
                        case "ri:RiMoreFill": return [3 /*break*/, 1365];
                        case "ri:RiMoreLine": return [3 /*break*/, 1367];
                        case "ri:RiNotificationBadgeFill": return [3 /*break*/, 1369];
                        case "ri:RiNotificationBadgeLine": return [3 /*break*/, 1371];
                        case "ri:RiProgress1Fill": return [3 /*break*/, 1373];
                        case "ri:RiProgress1Line": return [3 /*break*/, 1375];
                        case "ri:RiProgress2Fill": return [3 /*break*/, 1377];
                        case "ri:RiProgress2Line": return [3 /*break*/, 1379];
                        case "ri:RiProgress3Fill": return [3 /*break*/, 1381];
                        case "ri:RiProgress3Line": return [3 /*break*/, 1383];
                        case "ri:RiProgress4Fill": return [3 /*break*/, 1385];
                        case "ri:RiProgress4Line": return [3 /*break*/, 1387];
                        case "ri:RiProgress5Fill": return [3 /*break*/, 1389];
                        case "ri:RiProgress5Line": return [3 /*break*/, 1391];
                        case "ri:RiProgress6Fill": return [3 /*break*/, 1393];
                        case "ri:RiProgress6Line": return [3 /*break*/, 1395];
                        case "ri:RiProgress7Fill": return [3 /*break*/, 1397];
                        case "ri:RiProgress7Line": return [3 /*break*/, 1399];
                        case "ri:RiProgress8Fill": return [3 /*break*/, 1401];
                        case "ri:RiProgress8Line": return [3 /*break*/, 1403];
                        case "ri:RiProhibited2Fill": return [3 /*break*/, 1405];
                        case "ri:RiProhibited2Line": return [3 /*break*/, 1407];
                        case "ri:RiProhibitedFill": return [3 /*break*/, 1409];
                        case "ri:RiProhibitedLine": return [3 /*break*/, 1411];
                        case "ri:RiQuestionFill": return [3 /*break*/, 1413];
                        case "ri:RiQuestionLine": return [3 /*break*/, 1415];
                        case "ri:RiRadioButtonFill": return [3 /*break*/, 1417];
                        case "ri:RiRadioButtonLine": return [3 /*break*/, 1419];
                        case "ri:RiRefreshFill": return [3 /*break*/, 1421];
                        case "ri:RiRefreshLine": return [3 /*break*/, 1423];
                        case "ri:RiResetLeftFill": return [3 /*break*/, 1425];
                        case "ri:RiResetLeftLine": return [3 /*break*/, 1427];
                        case "ri:RiResetRightFill": return [3 /*break*/, 1429];
                        case "ri:RiResetRightLine": return [3 /*break*/, 1431];
                        case "ri:RiSearch2Fill": return [3 /*break*/, 1433];
                        case "ri:RiSearch2Line": return [3 /*break*/, 1435];
                        case "ri:RiSearchEyeFill": return [3 /*break*/, 1437];
                        case "ri:RiSearchEyeLine": return [3 /*break*/, 1439];
                        case "ri:RiSearchFill": return [3 /*break*/, 1441];
                        case "ri:RiSearchLine": return [3 /*break*/, 1443];
                        case "ri:RiSettings2Fill": return [3 /*break*/, 1445];
                        case "ri:RiSettings2Line": return [3 /*break*/, 1447];
                        case "ri:RiSettings3Fill": return [3 /*break*/, 1449];
                        case "ri:RiSettings3Line": return [3 /*break*/, 1451];
                        case "ri:RiSettings4Fill": return [3 /*break*/, 1453];
                        case "ri:RiSettings4Line": return [3 /*break*/, 1455];
                        case "ri:RiSettings5Fill": return [3 /*break*/, 1457];
                        case "ri:RiSettings5Line": return [3 /*break*/, 1459];
                        case "ri:RiSettings6Fill": return [3 /*break*/, 1461];
                        case "ri:RiSettings6Line": return [3 /*break*/, 1463];
                        case "ri:RiSettingsFill": return [3 /*break*/, 1465];
                        case "ri:RiSettingsLine": return [3 /*break*/, 1467];
                        case "ri:RiShare2Fill": return [3 /*break*/, 1469];
                        case "ri:RiShare2Line": return [3 /*break*/, 1471];
                        case "ri:RiShareBoxFill": return [3 /*break*/, 1473];
                        case "ri:RiShareBoxLine": return [3 /*break*/, 1475];
                        case "ri:RiShareCircleFill": return [3 /*break*/, 1477];
                        case "ri:RiShareCircleLine": return [3 /*break*/, 1479];
                        case "ri:RiShareFill": return [3 /*break*/, 1481];
                        case "ri:RiShareForward2Fill": return [3 /*break*/, 1483];
                        case "ri:RiShareForward2Line": return [3 /*break*/, 1485];
                        case "ri:RiShareForwardBoxFill": return [3 /*break*/, 1487];
                        case "ri:RiShareForwardBoxLine": return [3 /*break*/, 1489];
                        case "ri:RiShareForwardFill": return [3 /*break*/, 1491];
                        case "ri:RiShareForwardLine": return [3 /*break*/, 1493];
                        case "ri:RiShareLine": return [3 /*break*/, 1495];
                        case "ri:RiShieldCheckFill": return [3 /*break*/, 1497];
                        case "ri:RiShieldCheckLine": return [3 /*break*/, 1499];
                        case "ri:RiShieldCrossFill": return [3 /*break*/, 1501];
                        case "ri:RiShieldCrossLine": return [3 /*break*/, 1503];
                        case "ri:RiShieldFill": return [3 /*break*/, 1505];
                        case "ri:RiShieldFlashFill": return [3 /*break*/, 1507];
                        case "ri:RiShieldFlashLine": return [3 /*break*/, 1509];
                        case "ri:RiShieldKeyholeFill": return [3 /*break*/, 1511];
                        case "ri:RiShieldKeyholeLine": return [3 /*break*/, 1513];
                        case "ri:RiShieldLine": return [3 /*break*/, 1515];
                        case "ri:RiShieldStarFill": return [3 /*break*/, 1517];
                        case "ri:RiShieldStarLine": return [3 /*break*/, 1519];
                        case "ri:RiShieldUserFill": return [3 /*break*/, 1521];
                        case "ri:RiShieldUserLine": return [3 /*break*/, 1523];
                        case "ri:RiSideBarFill": return [3 /*break*/, 1525];
                        case "ri:RiSideBarLine": return [3 /*break*/, 1527];
                        case "ri:RiSidebarFoldFill": return [3 /*break*/, 1529];
                        case "ri:RiSidebarFoldLine": return [3 /*break*/, 1531];
                        case "ri:RiSidebarUnfoldFill": return [3 /*break*/, 1533];
                        case "ri:RiSidebarUnfoldLine": return [3 /*break*/, 1535];
                        case "ri:RiSpam2Fill": return [3 /*break*/, 1537];
                        case "ri:RiSpam2Line": return [3 /*break*/, 1539];
                        case "ri:RiSpam3Fill": return [3 /*break*/, 1541];
                        case "ri:RiSpam3Line": return [3 /*break*/, 1543];
                        case "ri:RiSpamFill": return [3 /*break*/, 1545];
                        case "ri:RiSpamLine": return [3 /*break*/, 1547];
                        case "ri:RiStarFill": return [3 /*break*/, 1549];
                        case "ri:RiStarHalfFill": return [3 /*break*/, 1551];
                        case "ri:RiStarHalfLine": return [3 /*break*/, 1553];
                        case "ri:RiStarHalfSFill": return [3 /*break*/, 1555];
                        case "ri:RiStarHalfSLine": return [3 /*break*/, 1557];
                        case "ri:RiStarLine": return [3 /*break*/, 1559];
                        case "ri:RiStarOffFill": return [3 /*break*/, 1561];
                        case "ri:RiStarOffLine": return [3 /*break*/, 1563];
                        case "ri:RiStarSFill": return [3 /*break*/, 1565];
                        case "ri:RiStarSLine": return [3 /*break*/, 1567];
                        case "ri:RiSubtractFill": return [3 /*break*/, 1569];
                        case "ri:RiSubtractLine": return [3 /*break*/, 1571];
                        case "ri:RiThumbDownFill": return [3 /*break*/, 1573];
                        case "ri:RiThumbDownLine": return [3 /*break*/, 1575];
                        case "ri:RiThumbUpFill": return [3 /*break*/, 1577];
                        case "ri:RiThumbUpLine": return [3 /*break*/, 1579];
                        case "ri:RiTimeFill": return [3 /*break*/, 1581];
                        case "ri:RiTimeLine": return [3 /*break*/, 1583];
                        case "ri:RiTimer2Fill": return [3 /*break*/, 1585];
                        case "ri:RiTimer2Line": return [3 /*break*/, 1587];
                        case "ri:RiTimerFill": return [3 /*break*/, 1589];
                        case "ri:RiTimerFlashFill": return [3 /*break*/, 1591];
                        case "ri:RiTimerFlashLine": return [3 /*break*/, 1593];
                        case "ri:RiTimerLine": return [3 /*break*/, 1595];
                        case "ri:RiToggleFill": return [3 /*break*/, 1597];
                        case "ri:RiToggleLine": return [3 /*break*/, 1599];
                        case "ri:RiUpload2Fill": return [3 /*break*/, 1601];
                        case "ri:RiUpload2Line": return [3 /*break*/, 1603];
                        case "ri:RiUploadCloud2Fill": return [3 /*break*/, 1605];
                        case "ri:RiUploadCloud2Line": return [3 /*break*/, 1607];
                        case "ri:RiUploadCloudFill": return [3 /*break*/, 1609];
                        case "ri:RiUploadCloudLine": return [3 /*break*/, 1611];
                        case "ri:RiUploadFill": return [3 /*break*/, 1613];
                        case "ri:RiUploadLine": return [3 /*break*/, 1615];
                        case "ri:RiZoomInFill": return [3 /*break*/, 1617];
                        case "ri:RiZoomInLine": return [3 /*break*/, 1619];
                        case "ri:RiZoomOutFill": return [3 /*break*/, 1621];
                        case "ri:RiZoomOutLine": return [3 /*break*/, 1623];
                        case "ri:RiAccountBox2Fill": return [3 /*break*/, 1625];
                        case "ri:RiAccountBox2Line": return [3 /*break*/, 1627];
                        case "ri:RiAccountBoxFill": return [3 /*break*/, 1629];
                        case "ri:RiAccountBoxLine": return [3 /*break*/, 1631];
                        case "ri:RiAccountCircle2Fill": return [3 /*break*/, 1633];
                        case "ri:RiAccountCircle2Line": return [3 /*break*/, 1635];
                        case "ri:RiAccountCircleFill": return [3 /*break*/, 1637];
                        case "ri:RiAccountCircleLine": return [3 /*break*/, 1639];
                        case "ri:RiAccountPinBoxFill": return [3 /*break*/, 1641];
                        case "ri:RiAccountPinBoxLine": return [3 /*break*/, 1643];
                        case "ri:RiAccountPinCircleFill": return [3 /*break*/, 1645];
                        case "ri:RiAccountPinCircleLine": return [3 /*break*/, 1647];
                        case "ri:RiAdminFill": return [3 /*break*/, 1649];
                        case "ri:RiAdminLine": return [3 /*break*/, 1651];
                        case "ri:RiAliensFill": return [3 /*break*/, 1653];
                        case "ri:RiAliensLine": return [3 /*break*/, 1655];
                        case "ri:RiBearSmileFill": return [3 /*break*/, 1657];
                        case "ri:RiBearSmileLine": return [3 /*break*/, 1659];
                        case "ri:RiBodyScanFill": return [3 /*break*/, 1661];
                        case "ri:RiBodyScanLine": return [3 /*break*/, 1663];
                        case "ri:RiContactsFill": return [3 /*break*/, 1665];
                        case "ri:RiContactsLine": return [3 /*break*/, 1667];
                        case "ri:RiCriminalFill": return [3 /*break*/, 1669];
                        case "ri:RiCriminalLine": return [3 /*break*/, 1671];
                        case "ri:RiEmotion2Fill": return [3 /*break*/, 1673];
                        case "ri:RiEmotion2Line": return [3 /*break*/, 1675];
                        case "ri:RiEmotionFill": return [3 /*break*/, 1677];
                        case "ri:RiEmotionHappyFill": return [3 /*break*/, 1679];
                        case "ri:RiEmotionHappyLine": return [3 /*break*/, 1681];
                        case "ri:RiEmotionLaughFill": return [3 /*break*/, 1683];
                        case "ri:RiEmotionLaughLine": return [3 /*break*/, 1685];
                        case "ri:RiEmotionLine": return [3 /*break*/, 1687];
                        case "ri:RiEmotionNormalFill": return [3 /*break*/, 1689];
                        case "ri:RiEmotionNormalLine": return [3 /*break*/, 1691];
                        case "ri:RiEmotionSadFill": return [3 /*break*/, 1693];
                        case "ri:RiEmotionSadLine": return [3 /*break*/, 1695];
                        case "ri:RiEmotionUnhappyFill": return [3 /*break*/, 1697];
                        case "ri:RiEmotionUnhappyLine": return [3 /*break*/, 1699];
                        case "ri:RiGenderlessFill": return [3 /*break*/, 1701];
                        case "ri:RiGenderlessLine": return [3 /*break*/, 1703];
                        case "ri:RiGhost2Fill": return [3 /*break*/, 1705];
                        case "ri:RiGhost2Line": return [3 /*break*/, 1707];
                        case "ri:RiGhostFill": return [3 /*break*/, 1709];
                        case "ri:RiGhostLine": return [3 /*break*/, 1711];
                        case "ri:RiGhostSmileFill": return [3 /*break*/, 1713];
                        case "ri:RiGhostSmileLine": return [3 /*break*/, 1715];
                        case "ri:RiGroup2Fill": return [3 /*break*/, 1717];
                        case "ri:RiGroup2Line": return [3 /*break*/, 1719];
                        case "ri:RiGroup3Fill": return [3 /*break*/, 1721];
                        case "ri:RiGroup3Line": return [3 /*break*/, 1723];
                        case "ri:RiGroupFill": return [3 /*break*/, 1725];
                        case "ri:RiGroupLine": return [3 /*break*/, 1727];
                        case "ri:RiMenFill": return [3 /*break*/, 1729];
                        case "ri:RiMenLine": return [3 /*break*/, 1731];
                        case "ri:RiMickeyFill": return [3 /*break*/, 1733];
                        case "ri:RiMickeyLine": return [3 /*break*/, 1735];
                        case "ri:RiOpenArmFill": return [3 /*break*/, 1737];
                        case "ri:RiOpenArmLine": return [3 /*break*/, 1739];
                        case "ri:RiParentFill": return [3 /*break*/, 1741];
                        case "ri:RiParentLine": return [3 /*break*/, 1743];
                        case "ri:RiRobot2Fill": return [3 /*break*/, 1745];
                        case "ri:RiRobot2Line": return [3 /*break*/, 1747];
                        case "ri:RiRobot3Fill": return [3 /*break*/, 1749];
                        case "ri:RiRobot3Line": return [3 /*break*/, 1751];
                        case "ri:RiRobotFill": return [3 /*break*/, 1753];
                        case "ri:RiRobotLine": return [3 /*break*/, 1755];
                        case "ri:RiSkull2Fill": return [3 /*break*/, 1757];
                        case "ri:RiSkull2Line": return [3 /*break*/, 1759];
                        case "ri:RiSkullFill": return [3 /*break*/, 1761];
                        case "ri:RiSkullLine": return [3 /*break*/, 1763];
                        case "ri:RiSpyFill": return [3 /*break*/, 1765];
                        case "ri:RiSpyLine": return [3 /*break*/, 1767];
                        case "ri:RiStarSmileFill": return [3 /*break*/, 1769];
                        case "ri:RiStarSmileLine": return [3 /*break*/, 1771];
                        case "ri:RiTeamFill": return [3 /*break*/, 1773];
                        case "ri:RiTeamLine": return [3 /*break*/, 1775];
                        case "ri:RiTravestiFill": return [3 /*break*/, 1777];
                        case "ri:RiTravestiLine": return [3 /*break*/, 1779];
                        case "ri:RiUser2Fill": return [3 /*break*/, 1781];
                        case "ri:RiUser2Line": return [3 /*break*/, 1783];
                        case "ri:RiUser3Fill": return [3 /*break*/, 1785];
                        case "ri:RiUser3Line": return [3 /*break*/, 1787];
                        case "ri:RiUser4Fill": return [3 /*break*/, 1789];
                        case "ri:RiUser4Line": return [3 /*break*/, 1791];
                        case "ri:RiUser5Fill": return [3 /*break*/, 1793];
                        case "ri:RiUser5Line": return [3 /*break*/, 1795];
                        case "ri:RiUser6Fill": return [3 /*break*/, 1797];
                        case "ri:RiUser6Line": return [3 /*break*/, 1799];
                        case "ri:RiUserAddFill": return [3 /*break*/, 1801];
                        case "ri:RiUserAddLine": return [3 /*break*/, 1803];
                        case "ri:RiUserCommunityFill": return [3 /*break*/, 1805];
                        case "ri:RiUserCommunityLine": return [3 /*break*/, 1807];
                        case "ri:RiUserFill": return [3 /*break*/, 1809];
                        case "ri:RiUserFollowFill": return [3 /*break*/, 1811];
                        case "ri:RiUserFollowLine": return [3 /*break*/, 1813];
                        case "ri:RiUserForbidFill": return [3 /*break*/, 1815];
                        case "ri:RiUserForbidLine": return [3 /*break*/, 1817];
                        case "ri:RiUserHeartFill": return [3 /*break*/, 1819];
                        case "ri:RiUserHeartLine": return [3 /*break*/, 1821];
                        case "ri:RiUserLine": return [3 /*break*/, 1823];
                        case "ri:RiUserLocationFill": return [3 /*break*/, 1825];
                        case "ri:RiUserLocationLine": return [3 /*break*/, 1827];
                        case "ri:RiUserMinusFill": return [3 /*break*/, 1829];
                        case "ri:RiUserMinusLine": return [3 /*break*/, 1831];
                        case "ri:RiUserReceived2Fill": return [3 /*break*/, 1833];
                        case "ri:RiUserReceived2Line": return [3 /*break*/, 1835];
                        case "ri:RiUserReceivedFill": return [3 /*break*/, 1837];
                        case "ri:RiUserReceivedLine": return [3 /*break*/, 1839];
                        case "ri:RiUserSearchFill": return [3 /*break*/, 1841];
                        case "ri:RiUserSearchLine": return [3 /*break*/, 1843];
                        case "ri:RiUserSettingsFill": return [3 /*break*/, 1845];
                        case "ri:RiUserSettingsLine": return [3 /*break*/, 1847];
                        case "ri:RiUserShared2Fill": return [3 /*break*/, 1849];
                        case "ri:RiUserShared2Line": return [3 /*break*/, 1851];
                        case "ri:RiUserSharedFill": return [3 /*break*/, 1853];
                        case "ri:RiUserSharedLine": return [3 /*break*/, 1855];
                        case "ri:RiUserSmileFill": return [3 /*break*/, 1857];
                        case "ri:RiUserSmileLine": return [3 /*break*/, 1859];
                        case "ri:RiUserStarFill": return [3 /*break*/, 1861];
                        case "ri:RiUserStarLine": return [3 /*break*/, 1863];
                        case "ri:RiUserUnfollowFill": return [3 /*break*/, 1865];
                        case "ri:RiUserUnfollowLine": return [3 /*break*/, 1867];
                        case "ri:RiUserVoiceFill": return [3 /*break*/, 1869];
                        case "ri:RiUserVoiceLine": return [3 /*break*/, 1871];
                        case "ri:RiWomenFill": return [3 /*break*/, 1873];
                        case "ri:RiWomenLine": return [3 /*break*/, 1875];
                        case "ri:RiBlazeFill": return [3 /*break*/, 1877];
                        case "ri:RiBlazeLine": return [3 /*break*/, 1879];
                        case "ri:RiCelsiusFill": return [3 /*break*/, 1881];
                        case "ri:RiCelsiusLine": return [3 /*break*/, 1883];
                        case "ri:RiCloudWindyFill": return [3 /*break*/, 1885];
                        case "ri:RiCloudWindyLine": return [3 /*break*/, 1887];
                        case "ri:RiCloudy2Fill": return [3 /*break*/, 1889];
                        case "ri:RiCloudy2Line": return [3 /*break*/, 1891];
                        case "ri:RiCloudyFill": return [3 /*break*/, 1893];
                        case "ri:RiCloudyLine": return [3 /*break*/, 1895];
                        case "ri:RiDrizzleFill": return [3 /*break*/, 1897];
                        case "ri:RiDrizzleLine": return [3 /*break*/, 1899];
                        case "ri:RiEarthquakeFill": return [3 /*break*/, 1901];
                        case "ri:RiEarthquakeLine": return [3 /*break*/, 1903];
                        case "ri:RiFahrenheitFill": return [3 /*break*/, 1905];
                        case "ri:RiFahrenheitLine": return [3 /*break*/, 1907];
                        case "ri:RiFireFill": return [3 /*break*/, 1909];
                        case "ri:RiFireLine": return [3 /*break*/, 1911];
                        case "ri:RiFlashlightFill": return [3 /*break*/, 1913];
                        case "ri:RiFlashlightLine": return [3 /*break*/, 1915];
                        case "ri:RiFloodFill": return [3 /*break*/, 1917];
                        case "ri:RiFloodLine": return [3 /*break*/, 1919];
                        case "ri:RiFoggyFill": return [3 /*break*/, 1921];
                        case "ri:RiFoggyLine": return [3 /*break*/, 1923];
                        case "ri:RiHailFill": return [3 /*break*/, 1925];
                        case "ri:RiHailLine": return [3 /*break*/, 1927];
                        case "ri:RiHaze2Fill": return [3 /*break*/, 1929];
                        case "ri:RiHaze2Line": return [3 /*break*/, 1931];
                        case "ri:RiHazeFill": return [3 /*break*/, 1933];
                        case "ri:RiHazeLine": return [3 /*break*/, 1935];
                        case "ri:RiHeavyShowersFill": return [3 /*break*/, 1937];
                        case "ri:RiHeavyShowersLine": return [3 /*break*/, 1939];
                        case "ri:RiMeteorFill": return [3 /*break*/, 1941];
                        case "ri:RiMeteorLine": return [3 /*break*/, 1943];
                        case "ri:RiMistFill": return [3 /*break*/, 1945];
                        case "ri:RiMistLine": return [3 /*break*/, 1947];
                        case "ri:RiMoonClearFill": return [3 /*break*/, 1949];
                        case "ri:RiMoonClearLine": return [3 /*break*/, 1951];
                        case "ri:RiMoonCloudyFill": return [3 /*break*/, 1953];
                        case "ri:RiMoonCloudyLine": return [3 /*break*/, 1955];
                        case "ri:RiMoonFill": return [3 /*break*/, 1957];
                        case "ri:RiMoonFoggyFill": return [3 /*break*/, 1959];
                        case "ri:RiMoonFoggyLine": return [3 /*break*/, 1961];
                        case "ri:RiMoonLine": return [3 /*break*/, 1963];
                        case "ri:RiRainbowFill": return [3 /*break*/, 1965];
                        case "ri:RiRainbowLine": return [3 /*break*/, 1967];
                        case "ri:RiRainyFill": return [3 /*break*/, 1969];
                        case "ri:RiRainyLine": return [3 /*break*/, 1971];
                        case "ri:RiShining2Fill": return [3 /*break*/, 1973];
                        case "ri:RiShining2Line": return [3 /*break*/, 1975];
                        case "ri:RiShiningFill": return [3 /*break*/, 1977];
                        case "ri:RiShiningLine": return [3 /*break*/, 1979];
                        case "ri:RiShowersFill": return [3 /*break*/, 1981];
                        case "ri:RiShowersLine": return [3 /*break*/, 1983];
                        case "ri:RiSnowflakeFill": return [3 /*break*/, 1985];
                        case "ri:RiSnowflakeLine": return [3 /*break*/, 1987];
                        case "ri:RiSnowyFill": return [3 /*break*/, 1989];
                        case "ri:RiSnowyLine": return [3 /*break*/, 1991];
                        case "ri:RiSparkling2Fill": return [3 /*break*/, 1993];
                        case "ri:RiSparkling2Line": return [3 /*break*/, 1995];
                        case "ri:RiSparklingFill": return [3 /*break*/, 1997];
                        case "ri:RiSparklingLine": return [3 /*break*/, 1999];
                    }
                    return [3 /*break*/, 2001];
                case 1: return [4 /*yield*/, import("react-icons/ri")];
                case 2:
                    RiRocketFill = (_b.sent()).RiRocketFill;
                    return [2 /*return*/, RiRocketFill];
                case 3: return [4 /*yield*/, import("react-icons/ri")];
                case 4:
                    RiRocketLine = (_b.sent()).RiRocketLine;
                    return [2 /*return*/, RiRocketLine];
                case 5: return [4 /*yield*/, import("react-icons/ri")];
                case 6:
                    RiRouteFill = (_b.sent()).RiRouteFill;
                    return [2 /*return*/, RiRouteFill];
                case 7: return [4 /*yield*/, import("react-icons/ri")];
                case 8:
                    RiRouteLine = (_b.sent()).RiRouteLine;
                    return [2 /*return*/, RiRouteLine];
                case 9: return [4 /*yield*/, import("react-icons/ri")];
                case 10:
                    RiRunFill = (_b.sent()).RiRunFill;
                    return [2 /*return*/, RiRunFill];
                case 11: return [4 /*yield*/, import("react-icons/ri")];
                case 12:
                    RiRunLine = (_b.sent()).RiRunLine;
                    return [2 /*return*/, RiRunLine];
                case 13: return [4 /*yield*/, import("react-icons/ri")];
                case 14:
                    RiSailboatFill = (_b.sent()).RiSailboatFill;
                    return [2 /*return*/, RiSailboatFill];
                case 15: return [4 /*yield*/, import("react-icons/ri")];
                case 16:
                    RiSailboatLine = (_b.sent()).RiSailboatLine;
                    return [2 /*return*/, RiSailboatLine];
                case 17: return [4 /*yield*/, import("react-icons/ri")];
                case 18:
                    RiShip2Fill = (_b.sent()).RiShip2Fill;
                    return [2 /*return*/, RiShip2Fill];
                case 19: return [4 /*yield*/, import("react-icons/ri")];
                case 20:
                    RiShip2Line = (_b.sent()).RiShip2Line;
                    return [2 /*return*/, RiShip2Line];
                case 21: return [4 /*yield*/, import("react-icons/ri")];
                case 22:
                    RiShipFill = (_b.sent()).RiShipFill;
                    return [2 /*return*/, RiShipFill];
                case 23: return [4 /*yield*/, import("react-icons/ri")];
                case 24:
                    RiShipLine = (_b.sent()).RiShipLine;
                    return [2 /*return*/, RiShipLine];
                case 25: return [4 /*yield*/, import("react-icons/ri")];
                case 26:
                    RiSignalTowerFill = (_b.sent()).RiSignalTowerFill;
                    return [2 /*return*/, RiSignalTowerFill];
                case 27: return [4 /*yield*/, import("react-icons/ri")];
                case 28:
                    RiSignalTowerLine = (_b.sent()).RiSignalTowerLine;
                    return [2 /*return*/, RiSignalTowerLine];
                case 29: return [4 /*yield*/, import("react-icons/ri")];
                case 30:
                    RiSignpostFill = (_b.sent()).RiSignpostFill;
                    return [2 /*return*/, RiSignpostFill];
                case 31: return [4 /*yield*/, import("react-icons/ri")];
                case 32:
                    RiSignpostLine = (_b.sent()).RiSignpostLine;
                    return [2 /*return*/, RiSignpostLine];
                case 33: return [4 /*yield*/, import("react-icons/ri")];
                case 34:
                    RiSpaceShipFill = (_b.sent()).RiSpaceShipFill;
                    return [2 /*return*/, RiSpaceShipFill];
                case 35: return [4 /*yield*/, import("react-icons/ri")];
                case 36:
                    RiSpaceShipLine = (_b.sent()).RiSpaceShipLine;
                    return [2 /*return*/, RiSpaceShipLine];
                case 37: return [4 /*yield*/, import("react-icons/ri")];
                case 38:
                    RiSteering2Fill = (_b.sent()).RiSteering2Fill;
                    return [2 /*return*/, RiSteering2Fill];
                case 39: return [4 /*yield*/, import("react-icons/ri")];
                case 40:
                    RiSteering2Line = (_b.sent()).RiSteering2Line;
                    return [2 /*return*/, RiSteering2Line];
                case 41: return [4 /*yield*/, import("react-icons/ri")];
                case 42:
                    RiSteeringFill = (_b.sent()).RiSteeringFill;
                    return [2 /*return*/, RiSteeringFill];
                case 43: return [4 /*yield*/, import("react-icons/ri")];
                case 44:
                    RiSteeringLine = (_b.sent()).RiSteeringLine;
                    return [2 /*return*/, RiSteeringLine];
                case 45: return [4 /*yield*/, import("react-icons/ri")];
                case 46:
                    RiSubwayFill = (_b.sent()).RiSubwayFill;
                    return [2 /*return*/, RiSubwayFill];
                case 47: return [4 /*yield*/, import("react-icons/ri")];
                case 48:
                    RiSubwayLine = (_b.sent()).RiSubwayLine;
                    return [2 /*return*/, RiSubwayLine];
                case 49: return [4 /*yield*/, import("react-icons/ri")];
                case 50:
                    RiSubwayWifiFill = (_b.sent()).RiSubwayWifiFill;
                    return [2 /*return*/, RiSubwayWifiFill];
                case 51: return [4 /*yield*/, import("react-icons/ri")];
                case 52:
                    RiSubwayWifiLine = (_b.sent()).RiSubwayWifiLine;
                    return [2 /*return*/, RiSubwayWifiLine];
                case 53: return [4 /*yield*/, import("react-icons/ri")];
                case 54:
                    RiSuitcase2Fill = (_b.sent()).RiSuitcase2Fill;
                    return [2 /*return*/, RiSuitcase2Fill];
                case 55: return [4 /*yield*/, import("react-icons/ri")];
                case 56:
                    RiSuitcase2Line = (_b.sent()).RiSuitcase2Line;
                    return [2 /*return*/, RiSuitcase2Line];
                case 57: return [4 /*yield*/, import("react-icons/ri")];
                case 58:
                    RiSuitcase3Fill = (_b.sent()).RiSuitcase3Fill;
                    return [2 /*return*/, RiSuitcase3Fill];
                case 59: return [4 /*yield*/, import("react-icons/ri")];
                case 60:
                    RiSuitcase3Line = (_b.sent()).RiSuitcase3Line;
                    return [2 /*return*/, RiSuitcase3Line];
                case 61: return [4 /*yield*/, import("react-icons/ri")];
                case 62:
                    RiSuitcaseFill = (_b.sent()).RiSuitcaseFill;
                    return [2 /*return*/, RiSuitcaseFill];
                case 63: return [4 /*yield*/, import("react-icons/ri")];
                case 64:
                    RiSuitcaseLine = (_b.sent()).RiSuitcaseLine;
                    return [2 /*return*/, RiSuitcaseLine];
                case 65: return [4 /*yield*/, import("react-icons/ri")];
                case 66:
                    RiTakeawayFill = (_b.sent()).RiTakeawayFill;
                    return [2 /*return*/, RiTakeawayFill];
                case 67: return [4 /*yield*/, import("react-icons/ri")];
                case 68:
                    RiTakeawayLine = (_b.sent()).RiTakeawayLine;
                    return [2 /*return*/, RiTakeawayLine];
                case 69: return [4 /*yield*/, import("react-icons/ri")];
                case 70:
                    RiTaxiFill = (_b.sent()).RiTaxiFill;
                    return [2 /*return*/, RiTaxiFill];
                case 71: return [4 /*yield*/, import("react-icons/ri")];
                case 72:
                    RiTaxiLine = (_b.sent()).RiTaxiLine;
                    return [2 /*return*/, RiTaxiLine];
                case 73: return [4 /*yield*/, import("react-icons/ri")];
                case 74:
                    RiTaxiWifiFill = (_b.sent()).RiTaxiWifiFill;
                    return [2 /*return*/, RiTaxiWifiFill];
                case 75: return [4 /*yield*/, import("react-icons/ri")];
                case 76:
                    RiTaxiWifiLine = (_b.sent()).RiTaxiWifiLine;
                    return [2 /*return*/, RiTaxiWifiLine];
                case 77: return [4 /*yield*/, import("react-icons/ri")];
                case 78:
                    RiTimeZoneFill = (_b.sent()).RiTimeZoneFill;
                    return [2 /*return*/, RiTimeZoneFill];
                case 79: return [4 /*yield*/, import("react-icons/ri")];
                case 80:
                    RiTimeZoneLine = (_b.sent()).RiTimeZoneLine;
                    return [2 /*return*/, RiTimeZoneLine];
                case 81: return [4 /*yield*/, import("react-icons/ri")];
                case 82:
                    RiTrafficLightFill = (_b.sent()).RiTrafficLightFill;
                    return [2 /*return*/, RiTrafficLightFill];
                case 83: return [4 /*yield*/, import("react-icons/ri")];
                case 84:
                    RiTrafficLightLine = (_b.sent()).RiTrafficLightLine;
                    return [2 /*return*/, RiTrafficLightLine];
                case 85: return [4 /*yield*/, import("react-icons/ri")];
                case 86:
                    RiTrainFill = (_b.sent()).RiTrainFill;
                    return [2 /*return*/, RiTrainFill];
                case 87: return [4 /*yield*/, import("react-icons/ri")];
                case 88:
                    RiTrainLine = (_b.sent()).RiTrainLine;
                    return [2 /*return*/, RiTrainLine];
                case 89: return [4 /*yield*/, import("react-icons/ri")];
                case 90:
                    RiTrainWifiFill = (_b.sent()).RiTrainWifiFill;
                    return [2 /*return*/, RiTrainWifiFill];
                case 91: return [4 /*yield*/, import("react-icons/ri")];
                case 92:
                    RiTrainWifiLine = (_b.sent()).RiTrainWifiLine;
                    return [2 /*return*/, RiTrainWifiLine];
                case 93: return [4 /*yield*/, import("react-icons/ri")];
                case 94:
                    RiTreasureMapFill = (_b.sent()).RiTreasureMapFill;
                    return [2 /*return*/, RiTreasureMapFill];
                case 95: return [4 /*yield*/, import("react-icons/ri")];
                case 96:
                    RiTreasureMapLine = (_b.sent()).RiTreasureMapLine;
                    return [2 /*return*/, RiTreasureMapLine];
                case 97: return [4 /*yield*/, import("react-icons/ri")];
                case 98:
                    RiTruckFill = (_b.sent()).RiTruckFill;
                    return [2 /*return*/, RiTruckFill];
                case 99: return [4 /*yield*/, import("react-icons/ri")];
                case 100:
                    RiTruckLine = (_b.sent()).RiTruckLine;
                    return [2 /*return*/, RiTruckLine];
                case 101: return [4 /*yield*/, import("react-icons/ri")];
                case 102:
                    RiUnpinFill = (_b.sent()).RiUnpinFill;
                    return [2 /*return*/, RiUnpinFill];
                case 103: return [4 /*yield*/, import("react-icons/ri")];
                case 104:
                    RiUnpinLine = (_b.sent()).RiUnpinLine;
                    return [2 /*return*/, RiUnpinLine];
                case 105: return [4 /*yield*/, import("react-icons/ri")];
                case 106:
                    RiWalkFill = (_b.sent()).RiWalkFill;
                    return [2 /*return*/, RiWalkFill];
                case 107: return [4 /*yield*/, import("react-icons/ri")];
                case 108:
                    RiWalkLine = (_b.sent()).RiWalkLine;
                    return [2 /*return*/, RiWalkLine];
                case 109: return [4 /*yield*/, import("react-icons/ri")];
                case 110:
                    Ri4kFill = (_b.sent()).Ri4kFill;
                    return [2 /*return*/, Ri4kFill];
                case 111: return [4 /*yield*/, import("react-icons/ri")];
                case 112:
                    Ri4kLine = (_b.sent()).Ri4kLine;
                    return [2 /*return*/, Ri4kLine];
                case 113: return [4 /*yield*/, import("react-icons/ri")];
                case 114:
                    RiAlbumFill = (_b.sent()).RiAlbumFill;
                    return [2 /*return*/, RiAlbumFill];
                case 115: return [4 /*yield*/, import("react-icons/ri")];
                case 116:
                    RiAlbumLine = (_b.sent()).RiAlbumLine;
                    return [2 /*return*/, RiAlbumLine];
                case 117: return [4 /*yield*/, import("react-icons/ri")];
                case 118:
                    RiAspectRatioFill = (_b.sent()).RiAspectRatioFill;
                    return [2 /*return*/, RiAspectRatioFill];
                case 119: return [4 /*yield*/, import("react-icons/ri")];
                case 120:
                    RiAspectRatioLine = (_b.sent()).RiAspectRatioLine;
                    return [2 /*return*/, RiAspectRatioLine];
                case 121: return [4 /*yield*/, import("react-icons/ri")];
                case 122:
                    RiBroadcastFill = (_b.sent()).RiBroadcastFill;
                    return [2 /*return*/, RiBroadcastFill];
                case 123: return [4 /*yield*/, import("react-icons/ri")];
                case 124:
                    RiBroadcastLine = (_b.sent()).RiBroadcastLine;
                    return [2 /*return*/, RiBroadcastLine];
                case 125: return [4 /*yield*/, import("react-icons/ri")];
                case 126:
                    RiCamera2Fill = (_b.sent()).RiCamera2Fill;
                    return [2 /*return*/, RiCamera2Fill];
                case 127: return [4 /*yield*/, import("react-icons/ri")];
                case 128:
                    RiCamera2Line = (_b.sent()).RiCamera2Line;
                    return [2 /*return*/, RiCamera2Line];
                case 129: return [4 /*yield*/, import("react-icons/ri")];
                case 130:
                    RiCamera3Fill = (_b.sent()).RiCamera3Fill;
                    return [2 /*return*/, RiCamera3Fill];
                case 131: return [4 /*yield*/, import("react-icons/ri")];
                case 132:
                    RiCamera3Line = (_b.sent()).RiCamera3Line;
                    return [2 /*return*/, RiCamera3Line];
                case 133: return [4 /*yield*/, import("react-icons/ri")];
                case 134:
                    RiCameraAiFill = (_b.sent()).RiCameraAiFill;
                    return [2 /*return*/, RiCameraAiFill];
                case 135: return [4 /*yield*/, import("react-icons/ri")];
                case 136:
                    RiCameraAiLine = (_b.sent()).RiCameraAiLine;
                    return [2 /*return*/, RiCameraAiLine];
                case 137: return [4 /*yield*/, import("react-icons/ri")];
                case 138:
                    RiCameraFill = (_b.sent()).RiCameraFill;
                    return [2 /*return*/, RiCameraFill];
                case 139: return [4 /*yield*/, import("react-icons/ri")];
                case 140:
                    RiCameraLensAiFill = (_b.sent()).RiCameraLensAiFill;
                    return [2 /*return*/, RiCameraLensAiFill];
                case 141: return [4 /*yield*/, import("react-icons/ri")];
                case 142:
                    RiCameraLensAiLine = (_b.sent()).RiCameraLensAiLine;
                    return [2 /*return*/, RiCameraLensAiLine];
                case 143: return [4 /*yield*/, import("react-icons/ri")];
                case 144:
                    RiCameraLensFill = (_b.sent()).RiCameraLensFill;
                    return [2 /*return*/, RiCameraLensFill];
                case 145: return [4 /*yield*/, import("react-icons/ri")];
                case 146:
                    RiCameraLensLine = (_b.sent()).RiCameraLensLine;
                    return [2 /*return*/, RiCameraLensLine];
                case 147: return [4 /*yield*/, import("react-icons/ri")];
                case 148:
                    RiCameraLine = (_b.sent()).RiCameraLine;
                    return [2 /*return*/, RiCameraLine];
                case 149: return [4 /*yield*/, import("react-icons/ri")];
                case 150:
                    RiCameraOffFill = (_b.sent()).RiCameraOffFill;
                    return [2 /*return*/, RiCameraOffFill];
                case 151: return [4 /*yield*/, import("react-icons/ri")];
                case 152:
                    RiCameraOffLine = (_b.sent()).RiCameraOffLine;
                    return [2 /*return*/, RiCameraOffLine];
                case 153: return [4 /*yield*/, import("react-icons/ri")];
                case 154:
                    RiCameraSwitchFill = (_b.sent()).RiCameraSwitchFill;
                    return [2 /*return*/, RiCameraSwitchFill];
                case 155: return [4 /*yield*/, import("react-icons/ri")];
                case 156:
                    RiCameraSwitchLine = (_b.sent()).RiCameraSwitchLine;
                    return [2 /*return*/, RiCameraSwitchLine];
                case 157: return [4 /*yield*/, import("react-icons/ri")];
                case 158:
                    RiClapperboardAiFill = (_b.sent()).RiClapperboardAiFill;
                    return [2 /*return*/, RiClapperboardAiFill];
                case 159: return [4 /*yield*/, import("react-icons/ri")];
                case 160:
                    RiClapperboardAiLine = (_b.sent()).RiClapperboardAiLine;
                    return [2 /*return*/, RiClapperboardAiLine];
                case 161: return [4 /*yield*/, import("react-icons/ri")];
                case 162:
                    RiClapperboardFill = (_b.sent()).RiClapperboardFill;
                    return [2 /*return*/, RiClapperboardFill];
                case 163: return [4 /*yield*/, import("react-icons/ri")];
                case 164:
                    RiClapperboardLine = (_b.sent()).RiClapperboardLine;
                    return [2 /*return*/, RiClapperboardLine];
                case 165: return [4 /*yield*/, import("react-icons/ri")];
                case 166:
                    RiClosedCaptioningAiFill = (_b.sent()).RiClosedCaptioningAiFill;
                    return [2 /*return*/, RiClosedCaptioningAiFill];
                case 167: return [4 /*yield*/, import("react-icons/ri")];
                case 168:
                    RiClosedCaptioningAiLine = (_b.sent()).RiClosedCaptioningAiLine;
                    return [2 /*return*/, RiClosedCaptioningAiLine];
                case 169: return [4 /*yield*/, import("react-icons/ri")];
                case 170:
                    RiClosedCaptioningFill = (_b.sent()).RiClosedCaptioningFill;
                    return [2 /*return*/, RiClosedCaptioningFill];
                case 171: return [4 /*yield*/, import("react-icons/ri")];
                case 172:
                    RiClosedCaptioningLine = (_b.sent()).RiClosedCaptioningLine;
                    return [2 /*return*/, RiClosedCaptioningLine];
                case 173: return [4 /*yield*/, import("react-icons/ri")];
                case 174:
                    RiDiscFill = (_b.sent()).RiDiscFill;
                    return [2 /*return*/, RiDiscFill];
                case 175: return [4 /*yield*/, import("react-icons/ri")];
                case 176:
                    RiDiscLine = (_b.sent()).RiDiscLine;
                    return [2 /*return*/, RiDiscLine];
                case 177: return [4 /*yield*/, import("react-icons/ri")];
                case 178:
                    RiDvFill = (_b.sent()).RiDvFill;
                    return [2 /*return*/, RiDvFill];
                case 179: return [4 /*yield*/, import("react-icons/ri")];
                case 180:
                    RiDvLine = (_b.sent()).RiDvLine;
                    return [2 /*return*/, RiDvLine];
                case 181: return [4 /*yield*/, import("react-icons/ri")];
                case 182:
                    RiDvdAiFill = (_b.sent()).RiDvdAiFill;
                    return [2 /*return*/, RiDvdAiFill];
                case 183: return [4 /*yield*/, import("react-icons/ri")];
                case 184:
                    RiDvdAiLine = (_b.sent()).RiDvdAiLine;
                    return [2 /*return*/, RiDvdAiLine];
                case 185: return [4 /*yield*/, import("react-icons/ri")];
                case 186:
                    RiDvdFill = (_b.sent()).RiDvdFill;
                    return [2 /*return*/, RiDvdFill];
                case 187: return [4 /*yield*/, import("react-icons/ri")];
                case 188:
                    RiDvdLine = (_b.sent()).RiDvdLine;
                    return [2 /*return*/, RiDvdLine];
                case 189: return [4 /*yield*/, import("react-icons/ri")];
                case 190:
                    RiEjectFill = (_b.sent()).RiEjectFill;
                    return [2 /*return*/, RiEjectFill];
                case 191: return [4 /*yield*/, import("react-icons/ri")];
                case 192:
                    RiEjectLine = (_b.sent()).RiEjectLine;
                    return [2 /*return*/, RiEjectLine];
                case 193: return [4 /*yield*/, import("react-icons/ri")];
                case 194:
                    RiEqualizer2Fill = (_b.sent()).RiEqualizer2Fill;
                    return [2 /*return*/, RiEqualizer2Fill];
                case 195: return [4 /*yield*/, import("react-icons/ri")];
                case 196:
                    RiEqualizer2Line = (_b.sent()).RiEqualizer2Line;
                    return [2 /*return*/, RiEqualizer2Line];
                case 197: return [4 /*yield*/, import("react-icons/ri")];
                case 198:
                    RiEqualizer3Fill = (_b.sent()).RiEqualizer3Fill;
                    return [2 /*return*/, RiEqualizer3Fill];
                case 199: return [4 /*yield*/, import("react-icons/ri")];
                case 200:
                    RiEqualizer3Line = (_b.sent()).RiEqualizer3Line;
                    return [2 /*return*/, RiEqualizer3Line];
                case 201: return [4 /*yield*/, import("react-icons/ri")];
                case 202:
                    RiEqualizerFill = (_b.sent()).RiEqualizerFill;
                    return [2 /*return*/, RiEqualizerFill];
                case 203: return [4 /*yield*/, import("react-icons/ri")];
                case 204:
                    RiEqualizerLine = (_b.sent()).RiEqualizerLine;
                    return [2 /*return*/, RiEqualizerLine];
                case 205: return [4 /*yield*/, import("react-icons/ri")];
                case 206:
                    RiFilmAiFill = (_b.sent()).RiFilmAiFill;
                    return [2 /*return*/, RiFilmAiFill];
                case 207: return [4 /*yield*/, import("react-icons/ri")];
                case 208:
                    RiFilmAiLine = (_b.sent()).RiFilmAiLine;
                    return [2 /*return*/, RiFilmAiLine];
                case 209: return [4 /*yield*/, import("react-icons/ri")];
                case 210:
                    RiFilmFill = (_b.sent()).RiFilmFill;
                    return [2 /*return*/, RiFilmFill];
                case 211: return [4 /*yield*/, import("react-icons/ri")];
                case 212:
                    RiFilmLine = (_b.sent()).RiFilmLine;
                    return [2 /*return*/, RiFilmLine];
                case 213: return [4 /*yield*/, import("react-icons/ri")];
                case 214:
                    RiForward10Fill = (_b.sent()).RiForward10Fill;
                    return [2 /*return*/, RiForward10Fill];
                case 215: return [4 /*yield*/, import("react-icons/ri")];
                case 216:
                    RiForward10Line = (_b.sent()).RiForward10Line;
                    return [2 /*return*/, RiForward10Line];
                case 217: return [4 /*yield*/, import("react-icons/ri")];
                case 218:
                    RiForward15Fill = (_b.sent()).RiForward15Fill;
                    return [2 /*return*/, RiForward15Fill];
                case 219: return [4 /*yield*/, import("react-icons/ri")];
                case 220:
                    RiForward15Line = (_b.sent()).RiForward15Line;
                    return [2 /*return*/, RiForward15Line];
                case 221: return [4 /*yield*/, import("react-icons/ri")];
                case 222:
                    RiForward30Fill = (_b.sent()).RiForward30Fill;
                    return [2 /*return*/, RiForward30Fill];
                case 223: return [4 /*yield*/, import("react-icons/ri")];
                case 224:
                    RiForward30Line = (_b.sent()).RiForward30Line;
                    return [2 /*return*/, RiForward30Line];
                case 225: return [4 /*yield*/, import("react-icons/ri")];
                case 226:
                    RiForward5Fill = (_b.sent()).RiForward5Fill;
                    return [2 /*return*/, RiForward5Fill];
                case 227: return [4 /*yield*/, import("react-icons/ri")];
                case 228:
                    RiForward5Line = (_b.sent()).RiForward5Line;
                    return [2 /*return*/, RiForward5Line];
                case 229: return [4 /*yield*/, import("react-icons/ri")];
                case 230:
                    RiForwardEndFill = (_b.sent()).RiForwardEndFill;
                    return [2 /*return*/, RiForwardEndFill];
                case 231: return [4 /*yield*/, import("react-icons/ri")];
                case 232:
                    RiForwardEndLine = (_b.sent()).RiForwardEndLine;
                    return [2 /*return*/, RiForwardEndLine];
                case 233: return [4 /*yield*/, import("react-icons/ri")];
                case 234:
                    RiForwardEndMiniFill = (_b.sent()).RiForwardEndMiniFill;
                    return [2 /*return*/, RiForwardEndMiniFill];
                case 235: return [4 /*yield*/, import("react-icons/ri")];
                case 236:
                    RiForwardEndMiniLine = (_b.sent()).RiForwardEndMiniLine;
                    return [2 /*return*/, RiForwardEndMiniLine];
                case 237: return [4 /*yield*/, import("react-icons/ri")];
                case 238:
                    RiFullscreenExitFill = (_b.sent()).RiFullscreenExitFill;
                    return [2 /*return*/, RiFullscreenExitFill];
                case 239: return [4 /*yield*/, import("react-icons/ri")];
                case 240:
                    RiFullscreenExitLine = (_b.sent()).RiFullscreenExitLine;
                    return [2 /*return*/, RiFullscreenExitLine];
                case 241: return [4 /*yield*/, import("react-icons/ri")];
                case 242:
                    RiFullscreenFill = (_b.sent()).RiFullscreenFill;
                    return [2 /*return*/, RiFullscreenFill];
                case 243: return [4 /*yield*/, import("react-icons/ri")];
                case 244:
                    RiFullscreenLine = (_b.sent()).RiFullscreenLine;
                    return [2 /*return*/, RiFullscreenLine];
                case 245: return [4 /*yield*/, import("react-icons/ri")];
                case 246:
                    RiGalleryFill = (_b.sent()).RiGalleryFill;
                    return [2 /*return*/, RiGalleryFill];
                case 247: return [4 /*yield*/, import("react-icons/ri")];
                case 248:
                    RiGalleryLine = (_b.sent()).RiGalleryLine;
                    return [2 /*return*/, RiGalleryLine];
                case 249: return [4 /*yield*/, import("react-icons/ri")];
                case 250:
                    RiGalleryUploadFill = (_b.sent()).RiGalleryUploadFill;
                    return [2 /*return*/, RiGalleryUploadFill];
                case 251: return [4 /*yield*/, import("react-icons/ri")];
                case 252:
                    RiGalleryUploadLine = (_b.sent()).RiGalleryUploadLine;
                    return [2 /*return*/, RiGalleryUploadLine];
                case 253: return [4 /*yield*/, import("react-icons/ri")];
                case 254:
                    RiHdFill = (_b.sent()).RiHdFill;
                    return [2 /*return*/, RiHdFill];
                case 255: return [4 /*yield*/, import("react-icons/ri")];
                case 256:
                    RiHdLine = (_b.sent()).RiHdLine;
                    return [2 /*return*/, RiHdLine];
                case 257: return [4 /*yield*/, import("react-icons/ri")];
                case 258:
                    RiHeadphoneFill = (_b.sent()).RiHeadphoneFill;
                    return [2 /*return*/, RiHeadphoneFill];
                case 259: return [4 /*yield*/, import("react-icons/ri")];
                case 260:
                    RiHeadphoneLine = (_b.sent()).RiHeadphoneLine;
                    return [2 /*return*/, RiHeadphoneLine];
                case 261: return [4 /*yield*/, import("react-icons/ri")];
                case 262:
                    RiHqFill = (_b.sent()).RiHqFill;
                    return [2 /*return*/, RiHqFill];
                case 263: return [4 /*yield*/, import("react-icons/ri")];
                case 264:
                    RiHqLine = (_b.sent()).RiHqLine;
                    return [2 /*return*/, RiHqLine];
                case 265: return [4 /*yield*/, import("react-icons/ri")];
                case 266:
                    RiImage2Fill = (_b.sent()).RiImage2Fill;
                    return [2 /*return*/, RiImage2Fill];
                case 267: return [4 /*yield*/, import("react-icons/ri")];
                case 268:
                    RiImage2Line = (_b.sent()).RiImage2Line;
                    return [2 /*return*/, RiImage2Line];
                case 269: return [4 /*yield*/, import("react-icons/ri")];
                case 270:
                    RiImageAddFill = (_b.sent()).RiImageAddFill;
                    return [2 /*return*/, RiImageAddFill];
                case 271: return [4 /*yield*/, import("react-icons/ri")];
                case 272:
                    RiImageAddLine = (_b.sent()).RiImageAddLine;
                    return [2 /*return*/, RiImageAddLine];
                case 273: return [4 /*yield*/, import("react-icons/ri")];
                case 274:
                    RiImageAiFill = (_b.sent()).RiImageAiFill;
                    return [2 /*return*/, RiImageAiFill];
                case 275: return [4 /*yield*/, import("react-icons/ri")];
                case 276:
                    RiImageAiLine = (_b.sent()).RiImageAiLine;
                    return [2 /*return*/, RiImageAiLine];
                case 277: return [4 /*yield*/, import("react-icons/ri")];
                case 278:
                    RiImageCircleAiFill = (_b.sent()).RiImageCircleAiFill;
                    return [2 /*return*/, RiImageCircleAiFill];
                case 279: return [4 /*yield*/, import("react-icons/ri")];
                case 280:
                    RiImageCircleAiLine = (_b.sent()).RiImageCircleAiLine;
                    return [2 /*return*/, RiImageCircleAiLine];
                case 281: return [4 /*yield*/, import("react-icons/ri")];
                case 282:
                    RiImageCircleFill = (_b.sent()).RiImageCircleFill;
                    return [2 /*return*/, RiImageCircleFill];
                case 283: return [4 /*yield*/, import("react-icons/ri")];
                case 284:
                    RiImageCircleLine = (_b.sent()).RiImageCircleLine;
                    return [2 /*return*/, RiImageCircleLine];
                case 285: return [4 /*yield*/, import("react-icons/ri")];
                case 286:
                    RiImageEditFill = (_b.sent()).RiImageEditFill;
                    return [2 /*return*/, RiImageEditFill];
                case 287: return [4 /*yield*/, import("react-icons/ri")];
                case 288:
                    RiImageEditLine = (_b.sent()).RiImageEditLine;
                    return [2 /*return*/, RiImageEditLine];
                case 289: return [4 /*yield*/, import("react-icons/ri")];
                case 290:
                    RiImageFill = (_b.sent()).RiImageFill;
                    return [2 /*return*/, RiImageFill];
                case 291: return [4 /*yield*/, import("react-icons/ri")];
                case 292:
                    RiImageLine = (_b.sent()).RiImageLine;
                    return [2 /*return*/, RiImageLine];
                case 293: return [4 /*yield*/, import("react-icons/ri")];
                case 294:
                    RiLandscapeAiFill = (_b.sent()).RiLandscapeAiFill;
                    return [2 /*return*/, RiLandscapeAiFill];
                case 295: return [4 /*yield*/, import("react-icons/ri")];
                case 296:
                    RiLandscapeAiLine = (_b.sent()).RiLandscapeAiLine;
                    return [2 /*return*/, RiLandscapeAiLine];
                case 297: return [4 /*yield*/, import("react-icons/ri")];
                case 298:
                    RiLandscapeFill = (_b.sent()).RiLandscapeFill;
                    return [2 /*return*/, RiLandscapeFill];
                case 299: return [4 /*yield*/, import("react-icons/ri")];
                case 300:
                    RiLandscapeLine = (_b.sent()).RiLandscapeLine;
                    return [2 /*return*/, RiLandscapeLine];
                case 301: return [4 /*yield*/, import("react-icons/ri")];
                case 302:
                    RiLiveFill = (_b.sent()).RiLiveFill;
                    return [2 /*return*/, RiLiveFill];
                case 303: return [4 /*yield*/, import("react-icons/ri")];
                case 304:
                    RiLiveLine = (_b.sent()).RiLiveLine;
                    return [2 /*return*/, RiLiveLine];
                case 305: return [4 /*yield*/, import("react-icons/ri")];
                case 306:
                    RiMemoriesFill = (_b.sent()).RiMemoriesFill;
                    return [2 /*return*/, RiMemoriesFill];
                case 307: return [4 /*yield*/, import("react-icons/ri")];
                case 308:
                    RiMemoriesLine = (_b.sent()).RiMemoriesLine;
                    return [2 /*return*/, RiMemoriesLine];
                case 309: return [4 /*yield*/, import("react-icons/ri")];
                case 310:
                    RiMic2AiFill = (_b.sent()).RiMic2AiFill;
                    return [2 /*return*/, RiMic2AiFill];
                case 311: return [4 /*yield*/, import("react-icons/ri")];
                case 312:
                    RiMic2AiLine = (_b.sent()).RiMic2AiLine;
                    return [2 /*return*/, RiMic2AiLine];
                case 313: return [4 /*yield*/, import("react-icons/ri")];
                case 314:
                    RiMic2Fill = (_b.sent()).RiMic2Fill;
                    return [2 /*return*/, RiMic2Fill];
                case 315: return [4 /*yield*/, import("react-icons/ri")];
                case 316:
                    RiMic2Line = (_b.sent()).RiMic2Line;
                    return [2 /*return*/, RiMic2Line];
                case 317: return [4 /*yield*/, import("react-icons/ri")];
                case 318:
                    RiMicAiFill = (_b.sent()).RiMicAiFill;
                    return [2 /*return*/, RiMicAiFill];
                case 319: return [4 /*yield*/, import("react-icons/ri")];
                case 320:
                    RiMicAiLine = (_b.sent()).RiMicAiLine;
                    return [2 /*return*/, RiMicAiLine];
                case 321: return [4 /*yield*/, import("react-icons/ri")];
                case 322:
                    RiMicFill = (_b.sent()).RiMicFill;
                    return [2 /*return*/, RiMicFill];
                case 323: return [4 /*yield*/, import("react-icons/ri")];
                case 324:
                    RiMicLine = (_b.sent()).RiMicLine;
                    return [2 /*return*/, RiMicLine];
                case 325: return [4 /*yield*/, import("react-icons/ri")];
                case 326:
                    RiMicOffFill = (_b.sent()).RiMicOffFill;
                    return [2 /*return*/, RiMicOffFill];
                case 327: return [4 /*yield*/, import("react-icons/ri")];
                case 328:
                    RiMicOffLine = (_b.sent()).RiMicOffLine;
                    return [2 /*return*/, RiMicOffLine];
                case 329: return [4 /*yield*/, import("react-icons/ri")];
                case 330:
                    RiMovie2AiFill = (_b.sent()).RiMovie2AiFill;
                    return [2 /*return*/, RiMovie2AiFill];
                case 331: return [4 /*yield*/, import("react-icons/ri")];
                case 332:
                    RiMovie2AiLine = (_b.sent()).RiMovie2AiLine;
                    return [2 /*return*/, RiMovie2AiLine];
                case 333: return [4 /*yield*/, import("react-icons/ri")];
                case 334:
                    RiMovie2Fill = (_b.sent()).RiMovie2Fill;
                    return [2 /*return*/, RiMovie2Fill];
                case 335: return [4 /*yield*/, import("react-icons/ri")];
                case 336:
                    RiMovie2Line = (_b.sent()).RiMovie2Line;
                    return [2 /*return*/, RiMovie2Line];
                case 337: return [4 /*yield*/, import("react-icons/ri")];
                case 338:
                    RiMovieAiFill = (_b.sent()).RiMovieAiFill;
                    return [2 /*return*/, RiMovieAiFill];
                case 339: return [4 /*yield*/, import("react-icons/ri")];
                case 340:
                    RiMovieAiLine = (_b.sent()).RiMovieAiLine;
                    return [2 /*return*/, RiMovieAiLine];
                case 341: return [4 /*yield*/, import("react-icons/ri")];
                case 342:
                    RiMovieFill = (_b.sent()).RiMovieFill;
                    return [2 /*return*/, RiMovieFill];
                case 343: return [4 /*yield*/, import("react-icons/ri")];
                case 344:
                    RiMovieLine = (_b.sent()).RiMovieLine;
                    return [2 /*return*/, RiMovieLine];
                case 345: return [4 /*yield*/, import("react-icons/ri")];
                case 346:
                    RiMusic2Fill = (_b.sent()).RiMusic2Fill;
                    return [2 /*return*/, RiMusic2Fill];
                case 347: return [4 /*yield*/, import("react-icons/ri")];
                case 348:
                    RiMusic2Line = (_b.sent()).RiMusic2Line;
                    return [2 /*return*/, RiMusic2Line];
                case 349: return [4 /*yield*/, import("react-icons/ri")];
                case 350:
                    RiMusicAiFill = (_b.sent()).RiMusicAiFill;
                    return [2 /*return*/, RiMusicAiFill];
                case 351: return [4 /*yield*/, import("react-icons/ri")];
                case 352:
                    RiMusicAiLine = (_b.sent()).RiMusicAiLine;
                    return [2 /*return*/, RiMusicAiLine];
                case 353: return [4 /*yield*/, import("react-icons/ri")];
                case 354:
                    RiMusicFill = (_b.sent()).RiMusicFill;
                    return [2 /*return*/, RiMusicFill];
                case 355: return [4 /*yield*/, import("react-icons/ri")];
                case 356:
                    RiMusicLine = (_b.sent()).RiMusicLine;
                    return [2 /*return*/, RiMusicLine];
                case 357: return [4 /*yield*/, import("react-icons/ri")];
                case 358:
                    RiMvAiFill = (_b.sent()).RiMvAiFill;
                    return [2 /*return*/, RiMvAiFill];
                case 359: return [4 /*yield*/, import("react-icons/ri")];
                case 360:
                    RiMvAiLine = (_b.sent()).RiMvAiLine;
                    return [2 /*return*/, RiMvAiLine];
                case 361: return [4 /*yield*/, import("react-icons/ri")];
                case 362:
                    RiMvFill = (_b.sent()).RiMvFill;
                    return [2 /*return*/, RiMvFill];
                case 363: return [4 /*yield*/, import("react-icons/ri")];
                case 364:
                    RiMvLine = (_b.sent()).RiMvLine;
                    return [2 /*return*/, RiMvLine];
                case 365: return [4 /*yield*/, import("react-icons/ri")];
                case 366:
                    RiNotification2Fill = (_b.sent()).RiNotification2Fill;
                    return [2 /*return*/, RiNotification2Fill];
                case 367: return [4 /*yield*/, import("react-icons/ri")];
                case 368:
                    RiNotification2Line = (_b.sent()).RiNotification2Line;
                    return [2 /*return*/, RiNotification2Line];
                case 369: return [4 /*yield*/, import("react-icons/ri")];
                case 370:
                    RiNotification3Fill = (_b.sent()).RiNotification3Fill;
                    return [2 /*return*/, RiNotification3Fill];
                case 371: return [4 /*yield*/, import("react-icons/ri")];
                case 372:
                    RiNotification3Line = (_b.sent()).RiNotification3Line;
                    return [2 /*return*/, RiNotification3Line];
                case 373: return [4 /*yield*/, import("react-icons/ri")];
                case 374:
                    RiNotification4Fill = (_b.sent()).RiNotification4Fill;
                    return [2 /*return*/, RiNotification4Fill];
                case 375: return [4 /*yield*/, import("react-icons/ri")];
                case 376:
                    RiNotification4Line = (_b.sent()).RiNotification4Line;
                    return [2 /*return*/, RiNotification4Line];
                case 377: return [4 /*yield*/, import("react-icons/ri")];
                case 378:
                    RiNotificationFill = (_b.sent()).RiNotificationFill;
                    return [2 /*return*/, RiNotificationFill];
                case 379: return [4 /*yield*/, import("react-icons/ri")];
                case 380:
                    RiNotificationLine = (_b.sent()).RiNotificationLine;
                    return [2 /*return*/, RiNotificationLine];
                case 381: return [4 /*yield*/, import("react-icons/ri")];
                case 382:
                    RiNotificationOffFill = (_b.sent()).RiNotificationOffFill;
                    return [2 /*return*/, RiNotificationOffFill];
                case 383: return [4 /*yield*/, import("react-icons/ri")];
                case 384:
                    RiNotificationOffLine = (_b.sent()).RiNotificationOffLine;
                    return [2 /*return*/, RiNotificationOffLine];
                case 385: return [4 /*yield*/, import("react-icons/ri")];
                case 386:
                    RiNotificationSnoozeFill = (_b.sent()).RiNotificationSnoozeFill;
                    return [2 /*return*/, RiNotificationSnoozeFill];
                case 387: return [4 /*yield*/, import("react-icons/ri")];
                case 388:
                    RiNotificationSnoozeLine = (_b.sent()).RiNotificationSnoozeLine;
                    return [2 /*return*/, RiNotificationSnoozeLine];
                case 389: return [4 /*yield*/, import("react-icons/ri")];
                case 390:
                    RiOrderPlayFill = (_b.sent()).RiOrderPlayFill;
                    return [2 /*return*/, RiOrderPlayFill];
                case 391: return [4 /*yield*/, import("react-icons/ri")];
                case 392:
                    RiOrderPlayLine = (_b.sent()).RiOrderPlayLine;
                    return [2 /*return*/, RiOrderPlayLine];
                case 393: return [4 /*yield*/, import("react-icons/ri")];
                case 394:
                    RiPauseCircleFill = (_b.sent()).RiPauseCircleFill;
                    return [2 /*return*/, RiPauseCircleFill];
                case 395: return [4 /*yield*/, import("react-icons/ri")];
                case 396:
                    RiPauseCircleLine = (_b.sent()).RiPauseCircleLine;
                    return [2 /*return*/, RiPauseCircleLine];
                case 397: return [4 /*yield*/, import("react-icons/ri")];
                case 398:
                    RiPauseFill = (_b.sent()).RiPauseFill;
                    return [2 /*return*/, RiPauseFill];
                case 399: return [4 /*yield*/, import("react-icons/ri")];
                case 400:
                    RiPauseLargeFill = (_b.sent()).RiPauseLargeFill;
                    return [2 /*return*/, RiPauseLargeFill];
                case 401: return [4 /*yield*/, import("react-icons/ri")];
                case 402:
                    RiPauseLargeLine = (_b.sent()).RiPauseLargeLine;
                    return [2 /*return*/, RiPauseLargeLine];
                case 403: return [4 /*yield*/, import("react-icons/ri")];
                case 404:
                    RiPauseLine = (_b.sent()).RiPauseLine;
                    return [2 /*return*/, RiPauseLine];
                case 405: return [4 /*yield*/, import("react-icons/ri")];
                case 406:
                    RiPauseMiniFill = (_b.sent()).RiPauseMiniFill;
                    return [2 /*return*/, RiPauseMiniFill];
                case 407: return [4 /*yield*/, import("react-icons/ri")];
                case 408:
                    RiPauseMiniLine = (_b.sent()).RiPauseMiniLine;
                    return [2 /*return*/, RiPauseMiniLine];
                case 409: return [4 /*yield*/, import("react-icons/ri")];
                case 410:
                    RiPhoneCameraFill = (_b.sent()).RiPhoneCameraFill;
                    return [2 /*return*/, RiPhoneCameraFill];
                case 411: return [4 /*yield*/, import("react-icons/ri")];
                case 412:
                    RiPhoneCameraLine = (_b.sent()).RiPhoneCameraLine;
                    return [2 /*return*/, RiPhoneCameraLine];
                case 413: return [4 /*yield*/, import("react-icons/ri")];
                case 414:
                    RiPictureInPicture2Fill = (_b.sent()).RiPictureInPicture2Fill;
                    return [2 /*return*/, RiPictureInPicture2Fill];
                case 415: return [4 /*yield*/, import("react-icons/ri")];
                case 416:
                    RiPictureInPicture2Line = (_b.sent()).RiPictureInPicture2Line;
                    return [2 /*return*/, RiPictureInPicture2Line];
                case 417: return [4 /*yield*/, import("react-icons/ri")];
                case 418:
                    RiPictureInPictureExitFill = (_b.sent()).RiPictureInPictureExitFill;
                    return [2 /*return*/, RiPictureInPictureExitFill];
                case 419: return [4 /*yield*/, import("react-icons/ri")];
                case 420:
                    RiPictureInPictureExitLine = (_b.sent()).RiPictureInPictureExitLine;
                    return [2 /*return*/, RiPictureInPictureExitLine];
                case 421: return [4 /*yield*/, import("react-icons/ri")];
                case 422:
                    RiPictureInPictureFill = (_b.sent()).RiPictureInPictureFill;
                    return [2 /*return*/, RiPictureInPictureFill];
                case 423: return [4 /*yield*/, import("react-icons/ri")];
                case 424:
                    RiPictureInPictureLine = (_b.sent()).RiPictureInPictureLine;
                    return [2 /*return*/, RiPictureInPictureLine];
                case 425: return [4 /*yield*/, import("react-icons/ri")];
                case 426:
                    RiPlayCircleFill = (_b.sent()).RiPlayCircleFill;
                    return [2 /*return*/, RiPlayCircleFill];
                case 427: return [4 /*yield*/, import("react-icons/ri")];
                case 428:
                    RiPlayCircleLine = (_b.sent()).RiPlayCircleLine;
                    return [2 /*return*/, RiPlayCircleLine];
                case 429: return [4 /*yield*/, import("react-icons/ri")];
                case 430:
                    RiPlayFill = (_b.sent()).RiPlayFill;
                    return [2 /*return*/, RiPlayFill];
                case 431: return [4 /*yield*/, import("react-icons/ri")];
                case 432:
                    RiPlayLargeFill = (_b.sent()).RiPlayLargeFill;
                    return [2 /*return*/, RiPlayLargeFill];
                case 433: return [4 /*yield*/, import("react-icons/ri")];
                case 434:
                    RiPlayLargeLine = (_b.sent()).RiPlayLargeLine;
                    return [2 /*return*/, RiPlayLargeLine];
                case 435: return [4 /*yield*/, import("react-icons/ri")];
                case 436:
                    RiPlayLine = (_b.sent()).RiPlayLine;
                    return [2 /*return*/, RiPlayLine];
                case 437: return [4 /*yield*/, import("react-icons/ri")];
                case 438:
                    RiPlayList2Fill = (_b.sent()).RiPlayList2Fill;
                    return [2 /*return*/, RiPlayList2Fill];
                case 439: return [4 /*yield*/, import("react-icons/ri")];
                case 440:
                    RiPlayList2Line = (_b.sent()).RiPlayList2Line;
                    return [2 /*return*/, RiPlayList2Line];
                case 441: return [4 /*yield*/, import("react-icons/ri")];
                case 442:
                    RiPlayListAddFill = (_b.sent()).RiPlayListAddFill;
                    return [2 /*return*/, RiPlayListAddFill];
                case 443: return [4 /*yield*/, import("react-icons/ri")];
                case 444:
                    RiPlayListAddLine = (_b.sent()).RiPlayListAddLine;
                    return [2 /*return*/, RiPlayListAddLine];
                case 445: return [4 /*yield*/, import("react-icons/ri")];
                case 446:
                    RiPlayListFill = (_b.sent()).RiPlayListFill;
                    return [2 /*return*/, RiPlayListFill];
                case 447: return [4 /*yield*/, import("react-icons/ri")];
                case 448:
                    RiPlayListLine = (_b.sent()).RiPlayListLine;
                    return [2 /*return*/, RiPlayListLine];
                case 449: return [4 /*yield*/, import("react-icons/ri")];
                case 450:
                    RiPlayMiniFill = (_b.sent()).RiPlayMiniFill;
                    return [2 /*return*/, RiPlayMiniFill];
                case 451: return [4 /*yield*/, import("react-icons/ri")];
                case 452:
                    RiPlayMiniLine = (_b.sent()).RiPlayMiniLine;
                    return [2 /*return*/, RiPlayMiniLine];
                case 453: return [4 /*yield*/, import("react-icons/ri")];
                case 454:
                    RiPlayReverseFill = (_b.sent()).RiPlayReverseFill;
                    return [2 /*return*/, RiPlayReverseFill];
                case 455: return [4 /*yield*/, import("react-icons/ri")];
                case 456:
                    RiPlayReverseLargeFill = (_b.sent()).RiPlayReverseLargeFill;
                    return [2 /*return*/, RiPlayReverseLargeFill];
                case 457: return [4 /*yield*/, import("react-icons/ri")];
                case 458:
                    RiPlayReverseLargeLine = (_b.sent()).RiPlayReverseLargeLine;
                    return [2 /*return*/, RiPlayReverseLargeLine];
                case 459: return [4 /*yield*/, import("react-icons/ri")];
                case 460:
                    RiPlayReverseLine = (_b.sent()).RiPlayReverseLine;
                    return [2 /*return*/, RiPlayReverseLine];
                case 461: return [4 /*yield*/, import("react-icons/ri")];
                case 462:
                    RiPlayReverseMiniFill = (_b.sent()).RiPlayReverseMiniFill;
                    return [2 /*return*/, RiPlayReverseMiniFill];
                case 463: return [4 /*yield*/, import("react-icons/ri")];
                case 464:
                    RiPlayReverseMiniLine = (_b.sent()).RiPlayReverseMiniLine;
                    return [2 /*return*/, RiPlayReverseMiniLine];
                case 465: return [4 /*yield*/, import("react-icons/ri")];
                case 466:
                    RiPolaroid2Fill = (_b.sent()).RiPolaroid2Fill;
                    return [2 /*return*/, RiPolaroid2Fill];
                case 467: return [4 /*yield*/, import("react-icons/ri")];
                case 468:
                    RiPolaroid2Line = (_b.sent()).RiPolaroid2Line;
                    return [2 /*return*/, RiPolaroid2Line];
                case 469: return [4 /*yield*/, import("react-icons/ri")];
                case 470:
                    RiPolaroidFill = (_b.sent()).RiPolaroidFill;
                    return [2 /*return*/, RiPolaroidFill];
                case 471: return [4 /*yield*/, import("react-icons/ri")];
                case 472:
                    RiPolaroidLine = (_b.sent()).RiPolaroidLine;
                    return [2 /*return*/, RiPolaroidLine];
                case 473: return [4 /*yield*/, import("react-icons/ri")];
                case 474:
                    RiRadio2Fill = (_b.sent()).RiRadio2Fill;
                    return [2 /*return*/, RiRadio2Fill];
                case 475: return [4 /*yield*/, import("react-icons/ri")];
                case 476:
                    RiRadio2Line = (_b.sent()).RiRadio2Line;
                    return [2 /*return*/, RiRadio2Line];
                case 477: return [4 /*yield*/, import("react-icons/ri")];
                case 478:
                    RiRadioFill = (_b.sent()).RiRadioFill;
                    return [2 /*return*/, RiRadioFill];
                case 479: return [4 /*yield*/, import("react-icons/ri")];
                case 480:
                    RiRadioLine = (_b.sent()).RiRadioLine;
                    return [2 /*return*/, RiRadioLine];
                case 481: return [4 /*yield*/, import("react-icons/ri")];
                case 482:
                    RiRecordCircleFill = (_b.sent()).RiRecordCircleFill;
                    return [2 /*return*/, RiRecordCircleFill];
                case 483: return [4 /*yield*/, import("react-icons/ri")];
                case 484:
                    RiRecordCircleLine = (_b.sent()).RiRecordCircleLine;
                    return [2 /*return*/, RiRecordCircleLine];
                case 485: return [4 /*yield*/, import("react-icons/ri")];
                case 486:
                    RiRepeat2Fill = (_b.sent()).RiRepeat2Fill;
                    return [2 /*return*/, RiRepeat2Fill];
                case 487: return [4 /*yield*/, import("react-icons/ri")];
                case 488:
                    RiRepeat2Line = (_b.sent()).RiRepeat2Line;
                    return [2 /*return*/, RiRepeat2Line];
                case 489: return [4 /*yield*/, import("react-icons/ri")];
                case 490:
                    RiRepeatFill = (_b.sent()).RiRepeatFill;
                    return [2 /*return*/, RiRepeatFill];
                case 491: return [4 /*yield*/, import("react-icons/ri")];
                case 492:
                    RiRepeatLine = (_b.sent()).RiRepeatLine;
                    return [2 /*return*/, RiRepeatLine];
                case 493: return [4 /*yield*/, import("react-icons/ri")];
                case 494:
                    RiRepeatOneFill = (_b.sent()).RiRepeatOneFill;
                    return [2 /*return*/, RiRepeatOneFill];
                case 495: return [4 /*yield*/, import("react-icons/ri")];
                case 496:
                    RiRepeatOneLine = (_b.sent()).RiRepeatOneLine;
                    return [2 /*return*/, RiRepeatOneLine];
                case 497: return [4 /*yield*/, import("react-icons/ri")];
                case 498:
                    RiReplay10Fill = (_b.sent()).RiReplay10Fill;
                    return [2 /*return*/, RiReplay10Fill];
                case 499: return [4 /*yield*/, import("react-icons/ri")];
                case 500:
                    RiReplay10Line = (_b.sent()).RiReplay10Line;
                    return [2 /*return*/, RiReplay10Line];
                case 501: return [4 /*yield*/, import("react-icons/ri")];
                case 502:
                    RiReplay15Fill = (_b.sent()).RiReplay15Fill;
                    return [2 /*return*/, RiReplay15Fill];
                case 503: return [4 /*yield*/, import("react-icons/ri")];
                case 504:
                    RiReplay15Line = (_b.sent()).RiReplay15Line;
                    return [2 /*return*/, RiReplay15Line];
                case 505: return [4 /*yield*/, import("react-icons/ri")];
                case 506:
                    RiReplay30Fill = (_b.sent()).RiReplay30Fill;
                    return [2 /*return*/, RiReplay30Fill];
                case 507: return [4 /*yield*/, import("react-icons/ri")];
                case 508:
                    RiReplay30Line = (_b.sent()).RiReplay30Line;
                    return [2 /*return*/, RiReplay30Line];
                case 509: return [4 /*yield*/, import("react-icons/ri")];
                case 510:
                    RiReplay5Fill = (_b.sent()).RiReplay5Fill;
                    return [2 /*return*/, RiReplay5Fill];
                case 511: return [4 /*yield*/, import("react-icons/ri")];
                case 512:
                    RiReplay5Line = (_b.sent()).RiReplay5Line;
                    return [2 /*return*/, RiReplay5Line];
                case 513: return [4 /*yield*/, import("react-icons/ri")];
                case 514:
                    RiRewindFill = (_b.sent()).RiRewindFill;
                    return [2 /*return*/, RiRewindFill];
                case 515: return [4 /*yield*/, import("react-icons/ri")];
                case 516:
                    RiRewindLine = (_b.sent()).RiRewindLine;
                    return [2 /*return*/, RiRewindLine];
                case 517: return [4 /*yield*/, import("react-icons/ri")];
                case 518:
                    RiRewindMiniFill = (_b.sent()).RiRewindMiniFill;
                    return [2 /*return*/, RiRewindMiniFill];
                case 519: return [4 /*yield*/, import("react-icons/ri")];
                case 520:
                    RiRewindMiniLine = (_b.sent()).RiRewindMiniLine;
                    return [2 /*return*/, RiRewindMiniLine];
                case 521: return [4 /*yield*/, import("react-icons/ri")];
                case 522:
                    RiRewindStartFill = (_b.sent()).RiRewindStartFill;
                    return [2 /*return*/, RiRewindStartFill];
                case 523: return [4 /*yield*/, import("react-icons/ri")];
                case 524:
                    RiRewindStartLine = (_b.sent()).RiRewindStartLine;
                    return [2 /*return*/, RiRewindStartLine];
                case 525: return [4 /*yield*/, import("react-icons/ri")];
                case 526:
                    RiRewindStartMiniFill = (_b.sent()).RiRewindStartMiniFill;
                    return [2 /*return*/, RiRewindStartMiniFill];
                case 527: return [4 /*yield*/, import("react-icons/ri")];
                case 528:
                    RiRewindStartMiniLine = (_b.sent()).RiRewindStartMiniLine;
                    return [2 /*return*/, RiRewindStartMiniLine];
                case 529: return [4 /*yield*/, import("react-icons/ri")];
                case 530:
                    RiRhythmFill = (_b.sent()).RiRhythmFill;
                    return [2 /*return*/, RiRhythmFill];
                case 531: return [4 /*yield*/, import("react-icons/ri")];
                case 532:
                    RiRhythmLine = (_b.sent()).RiRhythmLine;
                    return [2 /*return*/, RiRhythmLine];
                case 533: return [4 /*yield*/, import("react-icons/ri")];
                case 534:
                    RiShuffleFill = (_b.sent()).RiShuffleFill;
                    return [2 /*return*/, RiShuffleFill];
                case 535: return [4 /*yield*/, import("react-icons/ri")];
                case 536:
                    RiShuffleLine = (_b.sent()).RiShuffleLine;
                    return [2 /*return*/, RiShuffleLine];
                case 537: return [4 /*yield*/, import("react-icons/ri")];
                case 538:
                    RiSkipBackFill = (_b.sent()).RiSkipBackFill;
                    return [2 /*return*/, RiSkipBackFill];
                case 539: return [4 /*yield*/, import("react-icons/ri")];
                case 540:
                    RiSkipBackLine = (_b.sent()).RiSkipBackLine;
                    return [2 /*return*/, RiSkipBackLine];
                case 541: return [4 /*yield*/, import("react-icons/ri")];
                case 542:
                    RiSkipBackMiniFill = (_b.sent()).RiSkipBackMiniFill;
                    return [2 /*return*/, RiSkipBackMiniFill];
                case 543: return [4 /*yield*/, import("react-icons/ri")];
                case 544:
                    RiSkipBackMiniLine = (_b.sent()).RiSkipBackMiniLine;
                    return [2 /*return*/, RiSkipBackMiniLine];
                case 545: return [4 /*yield*/, import("react-icons/ri")];
                case 546:
                    RiSkipForwardFill = (_b.sent()).RiSkipForwardFill;
                    return [2 /*return*/, RiSkipForwardFill];
                case 547: return [4 /*yield*/, import("react-icons/ri")];
                case 548:
                    RiSkipForwardLine = (_b.sent()).RiSkipForwardLine;
                    return [2 /*return*/, RiSkipForwardLine];
                case 549: return [4 /*yield*/, import("react-icons/ri")];
                case 550:
                    RiSkipForwardMiniFill = (_b.sent()).RiSkipForwardMiniFill;
                    return [2 /*return*/, RiSkipForwardMiniFill];
                case 551: return [4 /*yield*/, import("react-icons/ri")];
                case 552:
                    RiSkipForwardMiniLine = (_b.sent()).RiSkipForwardMiniLine;
                    return [2 /*return*/, RiSkipForwardMiniLine];
                case 553: return [4 /*yield*/, import("react-icons/ri")];
                case 554:
                    RiSlowDownFill = (_b.sent()).RiSlowDownFill;
                    return [2 /*return*/, RiSlowDownFill];
                case 555: return [4 /*yield*/, import("react-icons/ri")];
                case 556:
                    RiSlowDownLine = (_b.sent()).RiSlowDownLine;
                    return [2 /*return*/, RiSlowDownLine];
                case 557: return [4 /*yield*/, import("react-icons/ri")];
                case 558:
                    RiSoundModuleFill = (_b.sent()).RiSoundModuleFill;
                    return [2 /*return*/, RiSoundModuleFill];
                case 559: return [4 /*yield*/, import("react-icons/ri")];
                case 560:
                    RiSoundModuleLine = (_b.sent()).RiSoundModuleLine;
                    return [2 /*return*/, RiSoundModuleLine];
                case 561: return [4 /*yield*/, import("react-icons/ri")];
                case 562:
                    RiSpeaker2Fill = (_b.sent()).RiSpeaker2Fill;
                    return [2 /*return*/, RiSpeaker2Fill];
                case 563: return [4 /*yield*/, import("react-icons/ri")];
                case 564:
                    RiSpeaker2Line = (_b.sent()).RiSpeaker2Line;
                    return [2 /*return*/, RiSpeaker2Line];
                case 565: return [4 /*yield*/, import("react-icons/ri")];
                case 566:
                    RiSpeaker3Fill = (_b.sent()).RiSpeaker3Fill;
                    return [2 /*return*/, RiSpeaker3Fill];
                case 567: return [4 /*yield*/, import("react-icons/ri")];
                case 568:
                    RiSpeaker3Line = (_b.sent()).RiSpeaker3Line;
                    return [2 /*return*/, RiSpeaker3Line];
                case 569: return [4 /*yield*/, import("react-icons/ri")];
                case 570:
                    RiSpeakerFill = (_b.sent()).RiSpeakerFill;
                    return [2 /*return*/, RiSpeakerFill];
                case 571: return [4 /*yield*/, import("react-icons/ri")];
                case 572:
                    RiSpeakerLine = (_b.sent()).RiSpeakerLine;
                    return [2 /*return*/, RiSpeakerLine];
                case 573: return [4 /*yield*/, import("react-icons/ri")];
                case 574:
                    RiSpeedFill = (_b.sent()).RiSpeedFill;
                    return [2 /*return*/, RiSpeedFill];
                case 575: return [4 /*yield*/, import("react-icons/ri")];
                case 576:
                    RiSpeedLine = (_b.sent()).RiSpeedLine;
                    return [2 /*return*/, RiSpeedLine];
                case 577: return [4 /*yield*/, import("react-icons/ri")];
                case 578:
                    RiSpeedMiniFill = (_b.sent()).RiSpeedMiniFill;
                    return [2 /*return*/, RiSpeedMiniFill];
                case 579: return [4 /*yield*/, import("react-icons/ri")];
                case 580:
                    RiSpeedMiniLine = (_b.sent()).RiSpeedMiniLine;
                    return [2 /*return*/, RiSpeedMiniLine];
                case 581: return [4 /*yield*/, import("react-icons/ri")];
                case 582:
                    RiSpeedUpFill = (_b.sent()).RiSpeedUpFill;
                    return [2 /*return*/, RiSpeedUpFill];
                case 583: return [4 /*yield*/, import("react-icons/ri")];
                case 584:
                    RiSpeedUpLine = (_b.sent()).RiSpeedUpLine;
                    return [2 /*return*/, RiSpeedUpLine];
                case 585: return [4 /*yield*/, import("react-icons/ri")];
                case 586:
                    RiStopCircleFill = (_b.sent()).RiStopCircleFill;
                    return [2 /*return*/, RiStopCircleFill];
                case 587: return [4 /*yield*/, import("react-icons/ri")];
                case 588:
                    RiStopCircleLine = (_b.sent()).RiStopCircleLine;
                    return [2 /*return*/, RiStopCircleLine];
                case 589: return [4 /*yield*/, import("react-icons/ri")];
                case 590:
                    RiStopFill = (_b.sent()).RiStopFill;
                    return [2 /*return*/, RiStopFill];
                case 591: return [4 /*yield*/, import("react-icons/ri")];
                case 592:
                    RiStopLargeFill = (_b.sent()).RiStopLargeFill;
                    return [2 /*return*/, RiStopLargeFill];
                case 593: return [4 /*yield*/, import("react-icons/ri")];
                case 594:
                    RiStopLargeLine = (_b.sent()).RiStopLargeLine;
                    return [2 /*return*/, RiStopLargeLine];
                case 595: return [4 /*yield*/, import("react-icons/ri")];
                case 596:
                    RiStopLine = (_b.sent()).RiStopLine;
                    return [2 /*return*/, RiStopLine];
                case 597: return [4 /*yield*/, import("react-icons/ri")];
                case 598:
                    RiStopMiniFill = (_b.sent()).RiStopMiniFill;
                    return [2 /*return*/, RiStopMiniFill];
                case 599: return [4 /*yield*/, import("react-icons/ri")];
                case 600:
                    RiStopMiniLine = (_b.sent()).RiStopMiniLine;
                    return [2 /*return*/, RiStopMiniLine];
                case 601: return [4 /*yield*/, import("react-icons/ri")];
                case 602:
                    RiSurroundSoundFill = (_b.sent()).RiSurroundSoundFill;
                    return [2 /*return*/, RiSurroundSoundFill];
                case 603: return [4 /*yield*/, import("react-icons/ri")];
                case 604:
                    RiSurroundSoundLine = (_b.sent()).RiSurroundSoundLine;
                    return [2 /*return*/, RiSurroundSoundLine];
                case 605: return [4 /*yield*/, import("react-icons/ri")];
                case 606:
                    RiTapeFill = (_b.sent()).RiTapeFill;
                    return [2 /*return*/, RiTapeFill];
                case 607: return [4 /*yield*/, import("react-icons/ri")];
                case 608:
                    RiTapeLine = (_b.sent()).RiTapeLine;
                    return [2 /*return*/, RiTapeLine];
                case 609: return [4 /*yield*/, import("react-icons/ri")];
                case 610:
                    RiVideoAddFill = (_b.sent()).RiVideoAddFill;
                    return [2 /*return*/, RiVideoAddFill];
                case 611: return [4 /*yield*/, import("react-icons/ri")];
                case 612:
                    RiVideoAddLine = (_b.sent()).RiVideoAddLine;
                    return [2 /*return*/, RiVideoAddLine];
                case 613: return [4 /*yield*/, import("react-icons/ri")];
                case 614:
                    RiVideoAiFill = (_b.sent()).RiVideoAiFill;
                    return [2 /*return*/, RiVideoAiFill];
                case 615: return [4 /*yield*/, import("react-icons/ri")];
                case 616:
                    RiVideoAiLine = (_b.sent()).RiVideoAiLine;
                    return [2 /*return*/, RiVideoAiLine];
                case 617: return [4 /*yield*/, import("react-icons/ri")];
                case 618:
                    RiVideoDownloadFill = (_b.sent()).RiVideoDownloadFill;
                    return [2 /*return*/, RiVideoDownloadFill];
                case 619: return [4 /*yield*/, import("react-icons/ri")];
                case 620:
                    RiVideoDownloadLine = (_b.sent()).RiVideoDownloadLine;
                    return [2 /*return*/, RiVideoDownloadLine];
                case 621: return [4 /*yield*/, import("react-icons/ri")];
                case 622:
                    RiVideoFill = (_b.sent()).RiVideoFill;
                    return [2 /*return*/, RiVideoFill];
                case 623: return [4 /*yield*/, import("react-icons/ri")];
                case 624:
                    RiVideoLine = (_b.sent()).RiVideoLine;
                    return [2 /*return*/, RiVideoLine];
                case 625: return [4 /*yield*/, import("react-icons/ri")];
                case 626:
                    RiVideoOffFill = (_b.sent()).RiVideoOffFill;
                    return [2 /*return*/, RiVideoOffFill];
                case 627: return [4 /*yield*/, import("react-icons/ri")];
                case 628:
                    RiVideoOffLine = (_b.sent()).RiVideoOffLine;
                    return [2 /*return*/, RiVideoOffLine];
                case 629: return [4 /*yield*/, import("react-icons/ri")];
                case 630:
                    RiVideoOnAiFill = (_b.sent()).RiVideoOnAiFill;
                    return [2 /*return*/, RiVideoOnAiFill];
                case 631: return [4 /*yield*/, import("react-icons/ri")];
                case 632:
                    RiVideoOnAiLine = (_b.sent()).RiVideoOnAiLine;
                    return [2 /*return*/, RiVideoOnAiLine];
                case 633: return [4 /*yield*/, import("react-icons/ri")];
                case 634:
                    RiVideoOnFill = (_b.sent()).RiVideoOnFill;
                    return [2 /*return*/, RiVideoOnFill];
                case 635: return [4 /*yield*/, import("react-icons/ri")];
                case 636:
                    RiVideoOnLine = (_b.sent()).RiVideoOnLine;
                    return [2 /*return*/, RiVideoOnLine];
                case 637: return [4 /*yield*/, import("react-icons/ri")];
                case 638:
                    RiVideoUploadFill = (_b.sent()).RiVideoUploadFill;
                    return [2 /*return*/, RiVideoUploadFill];
                case 639: return [4 /*yield*/, import("react-icons/ri")];
                case 640:
                    RiVideoUploadLine = (_b.sent()).RiVideoUploadLine;
                    return [2 /*return*/, RiVideoUploadLine];
                case 641: return [4 /*yield*/, import("react-icons/ri")];
                case 642:
                    RiVidicon2Fill = (_b.sent()).RiVidicon2Fill;
                    return [2 /*return*/, RiVidicon2Fill];
                case 643: return [4 /*yield*/, import("react-icons/ri")];
                case 644:
                    RiVidicon2Line = (_b.sent()).RiVidicon2Line;
                    return [2 /*return*/, RiVidicon2Line];
                case 645: return [4 /*yield*/, import("react-icons/ri")];
                case 646:
                    RiVidiconFill = (_b.sent()).RiVidiconFill;
                    return [2 /*return*/, RiVidiconFill];
                case 647: return [4 /*yield*/, import("react-icons/ri")];
                case 648:
                    RiVidiconLine = (_b.sent()).RiVidiconLine;
                    return [2 /*return*/, RiVidiconLine];
                case 649: return [4 /*yield*/, import("react-icons/ri")];
                case 650:
                    RiVoiceAiFill = (_b.sent()).RiVoiceAiFill;
                    return [2 /*return*/, RiVoiceAiFill];
                case 651: return [4 /*yield*/, import("react-icons/ri")];
                case 652:
                    RiVoiceAiLine = (_b.sent()).RiVoiceAiLine;
                    return [2 /*return*/, RiVoiceAiLine];
                case 653: return [4 /*yield*/, import("react-icons/ri")];
                case 654:
                    RiVoiceprintFill = (_b.sent()).RiVoiceprintFill;
                    return [2 /*return*/, RiVoiceprintFill];
                case 655: return [4 /*yield*/, import("react-icons/ri")];
                case 656:
                    RiVoiceprintLine = (_b.sent()).RiVoiceprintLine;
                    return [2 /*return*/, RiVoiceprintLine];
                case 657: return [4 /*yield*/, import("react-icons/ri")];
                case 658:
                    RiVolumeDownFill = (_b.sent()).RiVolumeDownFill;
                    return [2 /*return*/, RiVolumeDownFill];
                case 659: return [4 /*yield*/, import("react-icons/ri")];
                case 660:
                    RiVolumeDownLine = (_b.sent()).RiVolumeDownLine;
                    return [2 /*return*/, RiVolumeDownLine];
                case 661: return [4 /*yield*/, import("react-icons/ri")];
                case 662:
                    RiVolumeMuteFill = (_b.sent()).RiVolumeMuteFill;
                    return [2 /*return*/, RiVolumeMuteFill];
                case 663: return [4 /*yield*/, import("react-icons/ri")];
                case 664:
                    RiVolumeMuteLine = (_b.sent()).RiVolumeMuteLine;
                    return [2 /*return*/, RiVolumeMuteLine];
                case 665: return [4 /*yield*/, import("react-icons/ri")];
                case 666:
                    RiVolumeOffVibrateFill = (_b.sent()).RiVolumeOffVibrateFill;
                    return [2 /*return*/, RiVolumeOffVibrateFill];
                case 667: return [4 /*yield*/, import("react-icons/ri")];
                case 668:
                    RiVolumeOffVibrateLine = (_b.sent()).RiVolumeOffVibrateLine;
                    return [2 /*return*/, RiVolumeOffVibrateLine];
                case 669: return [4 /*yield*/, import("react-icons/ri")];
                case 670:
                    RiVolumeUpFill = (_b.sent()).RiVolumeUpFill;
                    return [2 /*return*/, RiVolumeUpFill];
                case 671: return [4 /*yield*/, import("react-icons/ri")];
                case 672:
                    RiVolumeUpLine = (_b.sent()).RiVolumeUpLine;
                    return [2 /*return*/, RiVolumeUpLine];
                case 673: return [4 /*yield*/, import("react-icons/ri")];
                case 674:
                    RiVolumeVibrateFill = (_b.sent()).RiVolumeVibrateFill;
                    return [2 /*return*/, RiVolumeVibrateFill];
                case 675: return [4 /*yield*/, import("react-icons/ri")];
                case 676:
                    RiVolumeVibrateLine = (_b.sent()).RiVolumeVibrateLine;
                    return [2 /*return*/, RiVolumeVibrateLine];
                case 677: return [4 /*yield*/, import("react-icons/ri")];
                case 678:
                    RiWebcamFill = (_b.sent()).RiWebcamFill;
                    return [2 /*return*/, RiWebcamFill];
                case 679: return [4 /*yield*/, import("react-icons/ri")];
                case 680:
                    RiWebcamLine = (_b.sent()).RiWebcamLine;
                    return [2 /*return*/, RiWebcamLine];
                case 681: return [4 /*yield*/, import("react-icons/ri")];
                case 682:
                    RiArmchairFill = (_b.sent()).RiArmchairFill;
                    return [2 /*return*/, RiArmchairFill];
                case 683: return [4 /*yield*/, import("react-icons/ri")];
                case 684:
                    RiArmchairLine = (_b.sent()).RiArmchairLine;
                    return [2 /*return*/, RiArmchairLine];
                case 685: return [4 /*yield*/, import("react-icons/ri")];
                case 686:
                    RiBasketballFill = (_b.sent()).RiBasketballFill;
                    return [2 /*return*/, RiBasketballFill];
                case 687: return [4 /*yield*/, import("react-icons/ri")];
                case 688:
                    RiBasketballLine = (_b.sent()).RiBasketballLine;
                    return [2 /*return*/, RiBasketballLine];
                case 689: return [4 /*yield*/, import("react-icons/ri")];
                case 690:
                    RiBellFill = (_b.sent()).RiBellFill;
                    return [2 /*return*/, RiBellFill];
                case 691: return [4 /*yield*/, import("react-icons/ri")];
                case 692:
                    RiBellLine = (_b.sent()).RiBellLine;
                    return [2 /*return*/, RiBellLine];
                case 693: return [4 /*yield*/, import("react-icons/ri")];
                case 694:
                    RiBilliardsFill = (_b.sent()).RiBilliardsFill;
                    return [2 /*return*/, RiBilliardsFill];
                case 695: return [4 /*yield*/, import("react-icons/ri")];
                case 696:
                    RiBilliardsLine = (_b.sent()).RiBilliardsLine;
                    return [2 /*return*/, RiBilliardsLine];
                case 697: return [4 /*yield*/, import("react-icons/ri")];
                case 698:
                    RiBookShelfFill = (_b.sent()).RiBookShelfFill;
                    return [2 /*return*/, RiBookShelfFill];
                case 699: return [4 /*yield*/, import("react-icons/ri")];
                case 700:
                    RiBookShelfLine = (_b.sent()).RiBookShelfLine;
                    return [2 /*return*/, RiBookShelfLine];
                case 701: return [4 /*yield*/, import("react-icons/ri")];
                case 702:
                    RiBox1Fill = (_b.sent()).RiBox1Fill;
                    return [2 /*return*/, RiBox1Fill];
                case 703: return [4 /*yield*/, import("react-icons/ri")];
                case 704:
                    RiBox1Line = (_b.sent()).RiBox1Line;
                    return [2 /*return*/, RiBox1Line];
                case 705: return [4 /*yield*/, import("react-icons/ri")];
                case 706:
                    RiBox2Fill = (_b.sent()).RiBox2Fill;
                    return [2 /*return*/, RiBox2Fill];
                case 707: return [4 /*yield*/, import("react-icons/ri")];
                case 708:
                    RiBox2Line = (_b.sent()).RiBox2Line;
                    return [2 /*return*/, RiBox2Line];
                case 709: return [4 /*yield*/, import("react-icons/ri")];
                case 710:
                    RiBox3Fill = (_b.sent()).RiBox3Fill;
                    return [2 /*return*/, RiBox3Fill];
                case 711: return [4 /*yield*/, import("react-icons/ri")];
                case 712:
                    RiBox3Line = (_b.sent()).RiBox3Line;
                    return [2 /*return*/, RiBox3Line];
                case 713: return [4 /*yield*/, import("react-icons/ri")];
                case 714:
                    RiBoxingFill = (_b.sent()).RiBoxingFill;
                    return [2 /*return*/, RiBoxingFill];
                case 715: return [4 /*yield*/, import("react-icons/ri")];
                case 716:
                    RiBoxingLine = (_b.sent()).RiBoxingLine;
                    return [2 /*return*/, RiBoxingLine];
                case 717: return [4 /*yield*/, import("react-icons/ri")];
                case 718:
                    RiCactusFill = (_b.sent()).RiCactusFill;
                    return [2 /*return*/, RiCactusFill];
                case 719: return [4 /*yield*/, import("react-icons/ri")];
                case 720:
                    RiCactusLine = (_b.sent()).RiCactusLine;
                    return [2 /*return*/, RiCactusLine];
                case 721: return [4 /*yield*/, import("react-icons/ri")];
                case 722:
                    RiCandleFill = (_b.sent()).RiCandleFill;
                    return [2 /*return*/, RiCandleFill];
                case 723: return [4 /*yield*/, import("react-icons/ri")];
                case 724:
                    RiCandleLine = (_b.sent()).RiCandleLine;
                    return [2 /*return*/, RiCandleLine];
                case 725: return [4 /*yield*/, import("react-icons/ri")];
                case 726:
                    RiCharacterRecognitionFill = (_b.sent()).RiCharacterRecognitionFill;
                    return [2 /*return*/, RiCharacterRecognitionFill];
                case 727: return [4 /*yield*/, import("react-icons/ri")];
                case 728:
                    RiCharacterRecognitionLine = (_b.sent()).RiCharacterRecognitionLine;
                    return [2 /*return*/, RiCharacterRecognitionLine];
                case 729: return [4 /*yield*/, import("react-icons/ri")];
                case 730:
                    RiCrossFill = (_b.sent()).RiCrossFill;
                    return [2 /*return*/, RiCrossFill];
                case 731: return [4 /*yield*/, import("react-icons/ri")];
                case 732:
                    RiCrossLine = (_b.sent()).RiCrossLine;
                    return [2 /*return*/, RiCrossLine];
                case 733: return [4 /*yield*/, import("react-icons/ri")];
                case 734:
                    RiDice1Fill = (_b.sent()).RiDice1Fill;
                    return [2 /*return*/, RiDice1Fill];
                case 735: return [4 /*yield*/, import("react-icons/ri")];
                case 736:
                    RiDice1Line = (_b.sent()).RiDice1Line;
                    return [2 /*return*/, RiDice1Line];
                case 737: return [4 /*yield*/, import("react-icons/ri")];
                case 738:
                    RiDice2Fill = (_b.sent()).RiDice2Fill;
                    return [2 /*return*/, RiDice2Fill];
                case 739: return [4 /*yield*/, import("react-icons/ri")];
                case 740:
                    RiDice2Line = (_b.sent()).RiDice2Line;
                    return [2 /*return*/, RiDice2Line];
                case 741: return [4 /*yield*/, import("react-icons/ri")];
                case 742:
                    RiDice3Fill = (_b.sent()).RiDice3Fill;
                    return [2 /*return*/, RiDice3Fill];
                case 743: return [4 /*yield*/, import("react-icons/ri")];
                case 744:
                    RiDice3Line = (_b.sent()).RiDice3Line;
                    return [2 /*return*/, RiDice3Line];
                case 745: return [4 /*yield*/, import("react-icons/ri")];
                case 746:
                    RiDice4Fill = (_b.sent()).RiDice4Fill;
                    return [2 /*return*/, RiDice4Fill];
                case 747: return [4 /*yield*/, import("react-icons/ri")];
                case 748:
                    RiDice4Line = (_b.sent()).RiDice4Line;
                    return [2 /*return*/, RiDice4Line];
                case 749: return [4 /*yield*/, import("react-icons/ri")];
                case 750:
                    RiDice5Fill = (_b.sent()).RiDice5Fill;
                    return [2 /*return*/, RiDice5Fill];
                case 751: return [4 /*yield*/, import("react-icons/ri")];
                case 752:
                    RiDice5Line = (_b.sent()).RiDice5Line;
                    return [2 /*return*/, RiDice5Line];
                case 753: return [4 /*yield*/, import("react-icons/ri")];
                case 754:
                    RiDice6Fill = (_b.sent()).RiDice6Fill;
                    return [2 /*return*/, RiDice6Fill];
                case 755: return [4 /*yield*/, import("react-icons/ri")];
                case 756:
                    RiDice6Line = (_b.sent()).RiDice6Line;
                    return [2 /*return*/, RiDice6Line];
                case 757: return [4 /*yield*/, import("react-icons/ri")];
                case 758:
                    RiDiceFill = (_b.sent()).RiDiceFill;
                    return [2 /*return*/, RiDiceFill];
                case 759: return [4 /*yield*/, import("react-icons/ri")];
                case 760:
                    RiDiceLine = (_b.sent()).RiDiceLine;
                    return [2 /*return*/, RiDiceLine];
                case 761: return [4 /*yield*/, import("react-icons/ri")];
                case 762:
                    RiDoorClosedFill = (_b.sent()).RiDoorClosedFill;
                    return [2 /*return*/, RiDoorClosedFill];
                case 763: return [4 /*yield*/, import("react-icons/ri")];
                case 764:
                    RiDoorClosedLine = (_b.sent()).RiDoorClosedLine;
                    return [2 /*return*/, RiDoorClosedLine];
                case 765: return [4 /*yield*/, import("react-icons/ri")];
                case 766:
                    RiDoorFill = (_b.sent()).RiDoorFill;
                    return [2 /*return*/, RiDoorFill];
                case 767: return [4 /*yield*/, import("react-icons/ri")];
                case 768:
                    RiDoorLine = (_b.sent()).RiDoorLine;
                    return [2 /*return*/, RiDoorLine];
                case 769: return [4 /*yield*/, import("react-icons/ri")];
                case 770:
                    RiDoorLockBoxFill = (_b.sent()).RiDoorLockBoxFill;
                    return [2 /*return*/, RiDoorLockBoxFill];
                case 771: return [4 /*yield*/, import("react-icons/ri")];
                case 772:
                    RiDoorLockBoxLine = (_b.sent()).RiDoorLockBoxLine;
                    return [2 /*return*/, RiDoorLockBoxLine];
                case 773: return [4 /*yield*/, import("react-icons/ri")];
                case 774:
                    RiDoorLockFill = (_b.sent()).RiDoorLockFill;
                    return [2 /*return*/, RiDoorLockFill];
                case 775: return [4 /*yield*/, import("react-icons/ri")];
                case 776:
                    RiDoorLockLine = (_b.sent()).RiDoorLockLine;
                    return [2 /*return*/, RiDoorLockLine];
                case 777: return [4 /*yield*/, import("react-icons/ri")];
                case 778:
                    RiDoorOpenFill = (_b.sent()).RiDoorOpenFill;
                    return [2 /*return*/, RiDoorOpenFill];
                case 779: return [4 /*yield*/, import("react-icons/ri")];
                case 780:
                    RiDoorOpenLine = (_b.sent()).RiDoorOpenLine;
                    return [2 /*return*/, RiDoorOpenLine];
                case 781: return [4 /*yield*/, import("react-icons/ri")];
                case 782:
                    RiFlowerFill = (_b.sent()).RiFlowerFill;
                    return [2 /*return*/, RiFlowerFill];
                case 783: return [4 /*yield*/, import("react-icons/ri")];
                case 784:
                    RiFlowerLine = (_b.sent()).RiFlowerLine;
                    return [2 /*return*/, RiFlowerLine];
                case 785: return [4 /*yield*/, import("react-icons/ri")];
                case 786:
                    RiFootballFill = (_b.sent()).RiFootballFill;
                    return [2 /*return*/, RiFootballFill];
                case 787: return [4 /*yield*/, import("react-icons/ri")];
                case 788:
                    RiFootballLine = (_b.sent()).RiFootballLine;
                    return [2 /*return*/, RiFootballLine];
                case 789: return [4 /*yield*/, import("react-icons/ri")];
                case 790:
                    RiFridgeFill = (_b.sent()).RiFridgeFill;
                    return [2 /*return*/, RiFridgeFill];
                case 791: return [4 /*yield*/, import("react-icons/ri")];
                case 792:
                    RiFridgeLine = (_b.sent()).RiFridgeLine;
                    return [2 /*return*/, RiFridgeLine];
                case 793: return [4 /*yield*/, import("react-icons/ri")];
                case 794:
                    RiGameFill = (_b.sent()).RiGameFill;
                    return [2 /*return*/, RiGameFill];
                case 795: return [4 /*yield*/, import("react-icons/ri")];
                case 796:
                    RiGameLine = (_b.sent()).RiGameLine;
                    return [2 /*return*/, RiGameLine];
                case 797: return [4 /*yield*/, import("react-icons/ri")];
                case 798:
                    RiGlasses2Fill = (_b.sent()).RiGlasses2Fill;
                    return [2 /*return*/, RiGlasses2Fill];
                case 799: return [4 /*yield*/, import("react-icons/ri")];
                case 800:
                    RiGlasses2Line = (_b.sent()).RiGlasses2Line;
                    return [2 /*return*/, RiGlasses2Line];
                case 801: return [4 /*yield*/, import("react-icons/ri")];
                case 802:
                    RiGlassesFill = (_b.sent()).RiGlassesFill;
                    return [2 /*return*/, RiGlassesFill];
                case 803: return [4 /*yield*/, import("react-icons/ri")];
                case 804:
                    RiGlassesLine = (_b.sent()).RiGlassesLine;
                    return [2 /*return*/, RiGlassesLine];
                case 805: return [4 /*yield*/, import("react-icons/ri")];
                case 806:
                    RiGogglesFill = (_b.sent()).RiGogglesFill;
                    return [2 /*return*/, RiGogglesFill];
                case 807: return [4 /*yield*/, import("react-icons/ri")];
                case 808:
                    RiGogglesLine = (_b.sent()).RiGogglesLine;
                    return [2 /*return*/, RiGogglesLine];
                case 809: return [4 /*yield*/, import("react-icons/ri")];
                case 810:
                    RiGolfBallFill = (_b.sent()).RiGolfBallFill;
                    return [2 /*return*/, RiGolfBallFill];
                case 811: return [4 /*yield*/, import("react-icons/ri")];
                case 812:
                    RiGolfBallLine = (_b.sent()).RiGolfBallLine;
                    return [2 /*return*/, RiGolfBallLine];
                case 813: return [4 /*yield*/, import("react-icons/ri")];
                case 814:
                    RiGraduationCapFill = (_b.sent()).RiGraduationCapFill;
                    return [2 /*return*/, RiGraduationCapFill];
                case 815: return [4 /*yield*/, import("react-icons/ri")];
                case 816:
                    RiGraduationCapLine = (_b.sent()).RiGraduationCapLine;
                    return [2 /*return*/, RiGraduationCapLine];
                case 817: return [4 /*yield*/, import("react-icons/ri")];
                case 818:
                    RiHandbagFill = (_b.sent()).RiHandbagFill;
                    return [2 /*return*/, RiHandbagFill];
                case 819: return [4 /*yield*/, import("react-icons/ri")];
                case 820:
                    RiHandbagLine = (_b.sent()).RiHandbagLine;
                    return [2 /*return*/, RiHandbagLine];
                case 821: return [4 /*yield*/, import("react-icons/ri")];
                case 822:
                    RiInfinityFill = (_b.sent()).RiInfinityFill;
                    return [2 /*return*/, RiInfinityFill];
                case 823: return [4 /*yield*/, import("react-icons/ri")];
                case 824:
                    RiInfinityLine = (_b.sent()).RiInfinityLine;
                    return [2 /*return*/, RiInfinityLine];
                case 825: return [4 /*yield*/, import("react-icons/ri")];
                case 826:
                    RiKey2Fill = (_b.sent()).RiKey2Fill;
                    return [2 /*return*/, RiKey2Fill];
                case 827: return [4 /*yield*/, import("react-icons/ri")];
                case 828:
                    RiKey2Line = (_b.sent()).RiKey2Line;
                    return [2 /*return*/, RiKey2Line];
                case 829: return [4 /*yield*/, import("react-icons/ri")];
                case 830:
                    RiKeyFill = (_b.sent()).RiKeyFill;
                    return [2 /*return*/, RiKeyFill];
                case 831: return [4 /*yield*/, import("react-icons/ri")];
                case 832:
                    RiKeyLine = (_b.sent()).RiKeyLine;
                    return [2 /*return*/, RiKeyLine];
                case 833: return [4 /*yield*/, import("react-icons/ri")];
                case 834:
                    RiLeafFill = (_b.sent()).RiLeafFill;
                    return [2 /*return*/, RiLeafFill];
                case 835: return [4 /*yield*/, import("react-icons/ri")];
                case 836:
                    RiLeafLine = (_b.sent()).RiLeafLine;
                    return [2 /*return*/, RiLeafLine];
                case 837: return [4 /*yield*/, import("react-icons/ri")];
                case 838:
                    RiLightbulbFill = (_b.sent()).RiLightbulbFill;
                    return [2 /*return*/, RiLightbulbFill];
                case 839: return [4 /*yield*/, import("react-icons/ri")];
                case 840:
                    RiLightbulbFlashFill = (_b.sent()).RiLightbulbFlashFill;
                    return [2 /*return*/, RiLightbulbFlashFill];
                case 841: return [4 /*yield*/, import("react-icons/ri")];
                case 842:
                    RiLightbulbFlashLine = (_b.sent()).RiLightbulbFlashLine;
                    return [2 /*return*/, RiLightbulbFlashLine];
                case 843: return [4 /*yield*/, import("react-icons/ri")];
                case 844:
                    RiLightbulbLine = (_b.sent()).RiLightbulbLine;
                    return [2 /*return*/, RiLightbulbLine];
                case 845: return [4 /*yield*/, import("react-icons/ri")];
                case 846:
                    RiOutlet2Fill = (_b.sent()).RiOutlet2Fill;
                    return [2 /*return*/, RiOutlet2Fill];
                case 847: return [4 /*yield*/, import("react-icons/ri")];
                case 848:
                    RiOutlet2Line = (_b.sent()).RiOutlet2Line;
                    return [2 /*return*/, RiOutlet2Line];
                case 849: return [4 /*yield*/, import("react-icons/ri")];
                case 850:
                    RiOutletFill = (_b.sent()).RiOutletFill;
                    return [2 /*return*/, RiOutletFill];
                case 851: return [4 /*yield*/, import("react-icons/ri")];
                case 852:
                    RiOutletLine = (_b.sent()).RiOutletLine;
                    return [2 /*return*/, RiOutletLine];
                case 853: return [4 /*yield*/, import("react-icons/ri")];
                case 854:
                    RiPingPongFill = (_b.sent()).RiPingPongFill;
                    return [2 /*return*/, RiPingPongFill];
                case 855: return [4 /*yield*/, import("react-icons/ri")];
                case 856:
                    RiPingPongLine = (_b.sent()).RiPingPongLine;
                    return [2 /*return*/, RiPingPongLine];
                case 857: return [4 /*yield*/, import("react-icons/ri")];
                case 858:
                    RiPlantFill = (_b.sent()).RiPlantFill;
                    return [2 /*return*/, RiPlantFill];
                case 859: return [4 /*yield*/, import("react-icons/ri")];
                case 860:
                    RiPlantLine = (_b.sent()).RiPlantLine;
                    return [2 /*return*/, RiPlantLine];
                case 861: return [4 /*yield*/, import("react-icons/ri")];
                case 862:
                    RiPlug2Fill = (_b.sent()).RiPlug2Fill;
                    return [2 /*return*/, RiPlug2Fill];
                case 863: return [4 /*yield*/, import("react-icons/ri")];
                case 864:
                    RiPlug2Line = (_b.sent()).RiPlug2Line;
                    return [2 /*return*/, RiPlug2Line];
                case 865: return [4 /*yield*/, import("react-icons/ri")];
                case 866:
                    RiPlugFill = (_b.sent()).RiPlugFill;
                    return [2 /*return*/, RiPlugFill];
                case 867: return [4 /*yield*/, import("react-icons/ri")];
                case 868:
                    RiPlugLine = (_b.sent()).RiPlugLine;
                    return [2 /*return*/, RiPlugLine];
                case 869: return [4 /*yield*/, import("react-icons/ri")];
                case 870:
                    RiPokerClubsFill = (_b.sent()).RiPokerClubsFill;
                    return [2 /*return*/, RiPokerClubsFill];
                case 871: return [4 /*yield*/, import("react-icons/ri")];
                case 872:
                    RiPokerClubsLine = (_b.sent()).RiPokerClubsLine;
                    return [2 /*return*/, RiPokerClubsLine];
                case 873: return [4 /*yield*/, import("react-icons/ri")];
                case 874:
                    RiPokerDiamondsFill = (_b.sent()).RiPokerDiamondsFill;
                    return [2 /*return*/, RiPokerDiamondsFill];
                case 875: return [4 /*yield*/, import("react-icons/ri")];
                case 876:
                    RiPokerDiamondsLine = (_b.sent()).RiPokerDiamondsLine;
                    return [2 /*return*/, RiPokerDiamondsLine];
                case 877: return [4 /*yield*/, import("react-icons/ri")];
                case 878:
                    RiPokerHeartsFill = (_b.sent()).RiPokerHeartsFill;
                    return [2 /*return*/, RiPokerHeartsFill];
                case 879: return [4 /*yield*/, import("react-icons/ri")];
                case 880:
                    RiPokerHeartsLine = (_b.sent()).RiPokerHeartsLine;
                    return [2 /*return*/, RiPokerHeartsLine];
                case 881: return [4 /*yield*/, import("react-icons/ri")];
                case 882:
                    RiPokerSpadesFill = (_b.sent()).RiPokerSpadesFill;
                    return [2 /*return*/, RiPokerSpadesFill];
                case 883: return [4 /*yield*/, import("react-icons/ri")];
                case 884:
                    RiPokerSpadesLine = (_b.sent()).RiPokerSpadesLine;
                    return [2 /*return*/, RiPokerSpadesLine];
                case 885: return [4 /*yield*/, import("react-icons/ri")];
                case 886:
                    RiPoliceBadgeFill = (_b.sent()).RiPoliceBadgeFill;
                    return [2 /*return*/, RiPoliceBadgeFill];
                case 887: return [4 /*yield*/, import("react-icons/ri")];
                case 888:
                    RiPoliceBadgeLine = (_b.sent()).RiPoliceBadgeLine;
                    return [2 /*return*/, RiPoliceBadgeLine];
                case 889: return [4 /*yield*/, import("react-icons/ri")];
                case 890:
                    RiRecycleFill = (_b.sent()).RiRecycleFill;
                    return [2 /*return*/, RiRecycleFill];
                case 891: return [4 /*yield*/, import("react-icons/ri")];
                case 892:
                    RiRecycleLine = (_b.sent()).RiRecycleLine;
                    return [2 /*return*/, RiRecycleLine];
                case 893: return [4 /*yield*/, import("react-icons/ri")];
                case 894:
                    RiReservedFill = (_b.sent()).RiReservedFill;
                    return [2 /*return*/, RiReservedFill];
                case 895: return [4 /*yield*/, import("react-icons/ri")];
                case 896:
                    RiReservedLine = (_b.sent()).RiReservedLine;
                    return [2 /*return*/, RiReservedLine];
                case 897: return [4 /*yield*/, import("react-icons/ri")];
                case 898:
                    RiScales2Fill = (_b.sent()).RiScales2Fill;
                    return [2 /*return*/, RiScales2Fill];
                case 899: return [4 /*yield*/, import("react-icons/ri")];
                case 900:
                    RiScales2Line = (_b.sent()).RiScales2Line;
                    return [2 /*return*/, RiScales2Line];
                case 901: return [4 /*yield*/, import("react-icons/ri")];
                case 902:
                    RiScales3Fill = (_b.sent()).RiScales3Fill;
                    return [2 /*return*/, RiScales3Fill];
                case 903: return [4 /*yield*/, import("react-icons/ri")];
                case 904:
                    RiScales3Line = (_b.sent()).RiScales3Line;
                    return [2 /*return*/, RiScales3Line];
                case 905: return [4 /*yield*/, import("react-icons/ri")];
                case 906:
                    RiScalesFill = (_b.sent()).RiScalesFill;
                    return [2 /*return*/, RiScalesFill];
                case 907: return [4 /*yield*/, import("react-icons/ri")];
                case 908:
                    RiScalesLine = (_b.sent()).RiScalesLine;
                    return [2 /*return*/, RiScalesLine];
                case 909: return [4 /*yield*/, import("react-icons/ri")];
                case 910:
                    RiSeedlingFill = (_b.sent()).RiSeedlingFill;
                    return [2 /*return*/, RiSeedlingFill];
                case 911: return [4 /*yield*/, import("react-icons/ri")];
                case 912:
                    RiSeedlingLine = (_b.sent()).RiSeedlingLine;
                    return [2 /*return*/, RiSeedlingLine];
                case 913: return [4 /*yield*/, import("react-icons/ri")];
                case 914:
                    RiShirtFill = (_b.sent()).RiShirtFill;
                    return [2 /*return*/, RiShirtFill];
                case 915: return [4 /*yield*/, import("react-icons/ri")];
                case 916:
                    RiShirtLine = (_b.sent()).RiShirtLine;
                    return [2 /*return*/, RiShirtLine];
                case 917: return [4 /*yield*/, import("react-icons/ri")];
                case 918:
                    RiSofaFill = (_b.sent()).RiSofaFill;
                    return [2 /*return*/, RiSofaFill];
                case 919: return [4 /*yield*/, import("react-icons/ri")];
                case 920:
                    RiSofaLine = (_b.sent()).RiSofaLine;
                    return [2 /*return*/, RiSofaLine];
                case 921: return [4 /*yield*/, import("react-icons/ri")];
                case 922:
                    RiStairsFill = (_b.sent()).RiStairsFill;
                    return [2 /*return*/, RiStairsFill];
                case 923: return [4 /*yield*/, import("react-icons/ri")];
                case 924:
                    RiStairsLine = (_b.sent()).RiStairsLine;
                    return [2 /*return*/, RiStairsLine];
                case 925: return [4 /*yield*/, import("react-icons/ri")];
                case 926:
                    RiSwordFill = (_b.sent()).RiSwordFill;
                    return [2 /*return*/, RiSwordFill];
                case 927: return [4 /*yield*/, import("react-icons/ri")];
                case 928:
                    RiSwordLine = (_b.sent()).RiSwordLine;
                    return [2 /*return*/, RiSwordLine];
                case 929: return [4 /*yield*/, import("react-icons/ri")];
                case 930:
                    RiTShirt2Fill = (_b.sent()).RiTShirt2Fill;
                    return [2 /*return*/, RiTShirt2Fill];
                case 931: return [4 /*yield*/, import("react-icons/ri")];
                case 932:
                    RiTShirt2Line = (_b.sent()).RiTShirt2Line;
                    return [2 /*return*/, RiTShirt2Line];
                case 933: return [4 /*yield*/, import("react-icons/ri")];
                case 934:
                    RiTShirtAirFill = (_b.sent()).RiTShirtAirFill;
                    return [2 /*return*/, RiTShirtAirFill];
                case 935: return [4 /*yield*/, import("react-icons/ri")];
                case 936:
                    RiTShirtAirLine = (_b.sent()).RiTShirtAirLine;
                    return [2 /*return*/, RiTShirtAirLine];
                case 937: return [4 /*yield*/, import("react-icons/ri")];
                case 938:
                    RiTShirtFill = (_b.sent()).RiTShirtFill;
                    return [2 /*return*/, RiTShirtFill];
                case 939: return [4 /*yield*/, import("react-icons/ri")];
                case 940:
                    RiTShirtLine = (_b.sent()).RiTShirtLine;
                    return [2 /*return*/, RiTShirtLine];
                case 941: return [4 /*yield*/, import("react-icons/ri")];
                case 942:
                    RiToothFill = (_b.sent()).RiToothFill;
                    return [2 /*return*/, RiToothFill];
                case 943: return [4 /*yield*/, import("react-icons/ri")];
                case 944:
                    RiToothLine = (_b.sent()).RiToothLine;
                    return [2 /*return*/, RiToothLine];
                case 945: return [4 /*yield*/, import("react-icons/ri")];
                case 946:
                    RiTreeFill = (_b.sent()).RiTreeFill;
                    return [2 /*return*/, RiTreeFill];
                case 947: return [4 /*yield*/, import("react-icons/ri")];
                case 948:
                    RiTreeLine = (_b.sent()).RiTreeLine;
                    return [2 /*return*/, RiTreeLine];
                case 949: return [4 /*yield*/, import("react-icons/ri")];
                case 950:
                    RiUmbrellaFill = (_b.sent()).RiUmbrellaFill;
                    return [2 /*return*/, RiUmbrellaFill];
                case 951: return [4 /*yield*/, import("react-icons/ri")];
                case 952:
                    RiUmbrellaLine = (_b.sent()).RiUmbrellaLine;
                    return [2 /*return*/, RiUmbrellaLine];
                case 953: return [4 /*yield*/, import("react-icons/ri")];
                case 954:
                    RiVoiceRecognitionFill = (_b.sent()).RiVoiceRecognitionFill;
                    return [2 /*return*/, RiVoiceRecognitionFill];
                case 955: return [4 /*yield*/, import("react-icons/ri")];
                case 956:
                    RiVoiceRecognitionLine = (_b.sent()).RiVoiceRecognitionLine;
                    return [2 /*return*/, RiVoiceRecognitionLine];
                case 957: return [4 /*yield*/, import("react-icons/ri")];
                case 958:
                    RiWeightFill = (_b.sent()).RiWeightFill;
                    return [2 /*return*/, RiWeightFill];
                case 959: return [4 /*yield*/, import("react-icons/ri")];
                case 960:
                    RiWeightLine = (_b.sent()).RiWeightLine;
                    return [2 /*return*/, RiWeightLine];
                case 961: return [4 /*yield*/, import("react-icons/ri")];
                case 962:
                    RiWheelchairFill = (_b.sent()).RiWheelchairFill;
                    return [2 /*return*/, RiWheelchairFill];
                case 963: return [4 /*yield*/, import("react-icons/ri")];
                case 964:
                    RiWheelchairLine = (_b.sent()).RiWheelchairLine;
                    return [2 /*return*/, RiWheelchairLine];
                case 965: return [4 /*yield*/, import("react-icons/ri")];
                case 966:
                    RiAddBoxFill = (_b.sent()).RiAddBoxFill;
                    return [2 /*return*/, RiAddBoxFill];
                case 967: return [4 /*yield*/, import("react-icons/ri")];
                case 968:
                    RiAddBoxLine = (_b.sent()).RiAddBoxLine;
                    return [2 /*return*/, RiAddBoxLine];
                case 969: return [4 /*yield*/, import("react-icons/ri")];
                case 970:
                    RiAddCircleFill = (_b.sent()).RiAddCircleFill;
                    return [2 /*return*/, RiAddCircleFill];
                case 971: return [4 /*yield*/, import("react-icons/ri")];
                case 972:
                    RiAddCircleLine = (_b.sent()).RiAddCircleLine;
                    return [2 /*return*/, RiAddCircleLine];
                case 973: return [4 /*yield*/, import("react-icons/ri")];
                case 974:
                    RiAddFill = (_b.sent()).RiAddFill;
                    return [2 /*return*/, RiAddFill];
                case 975: return [4 /*yield*/, import("react-icons/ri")];
                case 976:
                    RiAddLargeFill = (_b.sent()).RiAddLargeFill;
                    return [2 /*return*/, RiAddLargeFill];
                case 977: return [4 /*yield*/, import("react-icons/ri")];
                case 978:
                    RiAddLargeLine = (_b.sent()).RiAddLargeLine;
                    return [2 /*return*/, RiAddLargeLine];
                case 979: return [4 /*yield*/, import("react-icons/ri")];
                case 980:
                    RiAddLine = (_b.sent()).RiAddLine;
                    return [2 /*return*/, RiAddLine];
                case 981: return [4 /*yield*/, import("react-icons/ri")];
                case 982:
                    RiAlarmFill = (_b.sent()).RiAlarmFill;
                    return [2 /*return*/, RiAlarmFill];
                case 983: return [4 /*yield*/, import("react-icons/ri")];
                case 984:
                    RiAlarmLine = (_b.sent()).RiAlarmLine;
                    return [2 /*return*/, RiAlarmLine];
                case 985: return [4 /*yield*/, import("react-icons/ri")];
                case 986:
                    RiAlarmSnoozeFill = (_b.sent()).RiAlarmSnoozeFill;
                    return [2 /*return*/, RiAlarmSnoozeFill];
                case 987: return [4 /*yield*/, import("react-icons/ri")];
                case 988:
                    RiAlarmSnoozeLine = (_b.sent()).RiAlarmSnoozeLine;
                    return [2 /*return*/, RiAlarmSnoozeLine];
                case 989: return [4 /*yield*/, import("react-icons/ri")];
                case 990:
                    RiAlarmWarningFill = (_b.sent()).RiAlarmWarningFill;
                    return [2 /*return*/, RiAlarmWarningFill];
                case 991: return [4 /*yield*/, import("react-icons/ri")];
                case 992:
                    RiAlarmWarningLine = (_b.sent()).RiAlarmWarningLine;
                    return [2 /*return*/, RiAlarmWarningLine];
                case 993: return [4 /*yield*/, import("react-icons/ri")];
                case 994:
                    RiAlertFill = (_b.sent()).RiAlertFill;
                    return [2 /*return*/, RiAlertFill];
                case 995: return [4 /*yield*/, import("react-icons/ri")];
                case 996:
                    RiAlertLine = (_b.sent()).RiAlertLine;
                    return [2 /*return*/, RiAlertLine];
                case 997: return [4 /*yield*/, import("react-icons/ri")];
                case 998:
                    RiApps2AddFill = (_b.sent()).RiApps2AddFill;
                    return [2 /*return*/, RiApps2AddFill];
                case 999: return [4 /*yield*/, import("react-icons/ri")];
                case 1000:
                    RiApps2AddLine = (_b.sent()).RiApps2AddLine;
                    return [2 /*return*/, RiApps2AddLine];
                case 1001: return [4 /*yield*/, import("react-icons/ri")];
                case 1002:
                    RiApps2AiFill = (_b.sent()).RiApps2AiFill;
                    return [2 /*return*/, RiApps2AiFill];
                case 1003: return [4 /*yield*/, import("react-icons/ri")];
                case 1004:
                    RiApps2AiLine = (_b.sent()).RiApps2AiLine;
                    return [2 /*return*/, RiApps2AiLine];
                case 1005: return [4 /*yield*/, import("react-icons/ri")];
                case 1006:
                    RiApps2Fill = (_b.sent()).RiApps2Fill;
                    return [2 /*return*/, RiApps2Fill];
                case 1007: return [4 /*yield*/, import("react-icons/ri")];
                case 1008:
                    RiApps2Line = (_b.sent()).RiApps2Line;
                    return [2 /*return*/, RiApps2Line];
                case 1009: return [4 /*yield*/, import("react-icons/ri")];
                case 1010:
                    RiAppsFill = (_b.sent()).RiAppsFill;
                    return [2 /*return*/, RiAppsFill];
                case 1011: return [4 /*yield*/, import("react-icons/ri")];
                case 1012:
                    RiAppsLine = (_b.sent()).RiAppsLine;
                    return [2 /*return*/, RiAppsLine];
                case 1013: return [4 /*yield*/, import("react-icons/ri")];
                case 1014:
                    RiCheckDoubleFill = (_b.sent()).RiCheckDoubleFill;
                    return [2 /*return*/, RiCheckDoubleFill];
                case 1015: return [4 /*yield*/, import("react-icons/ri")];
                case 1016:
                    RiCheckDoubleLine = (_b.sent()).RiCheckDoubleLine;
                    return [2 /*return*/, RiCheckDoubleLine];
                case 1017: return [4 /*yield*/, import("react-icons/ri")];
                case 1018:
                    RiCheckFill = (_b.sent()).RiCheckFill;
                    return [2 /*return*/, RiCheckFill];
                case 1019: return [4 /*yield*/, import("react-icons/ri")];
                case 1020:
                    RiCheckLine = (_b.sent()).RiCheckLine;
                    return [2 /*return*/, RiCheckLine];
                case 1021: return [4 /*yield*/, import("react-icons/ri")];
                case 1022:
                    RiCheckboxBlankCircleFill = (_b.sent()).RiCheckboxBlankCircleFill;
                    return [2 /*return*/, RiCheckboxBlankCircleFill];
                case 1023: return [4 /*yield*/, import("react-icons/ri")];
                case 1024:
                    RiCheckboxBlankCircleLine = (_b.sent()).RiCheckboxBlankCircleLine;
                    return [2 /*return*/, RiCheckboxBlankCircleLine];
                case 1025: return [4 /*yield*/, import("react-icons/ri")];
                case 1026:
                    RiCheckboxBlankFill = (_b.sent()).RiCheckboxBlankFill;
                    return [2 /*return*/, RiCheckboxBlankFill];
                case 1027: return [4 /*yield*/, import("react-icons/ri")];
                case 1028:
                    RiCheckboxBlankLine = (_b.sent()).RiCheckboxBlankLine;
                    return [2 /*return*/, RiCheckboxBlankLine];
                case 1029: return [4 /*yield*/, import("react-icons/ri")];
                case 1030:
                    RiCheckboxCircleFill = (_b.sent()).RiCheckboxCircleFill;
                    return [2 /*return*/, RiCheckboxCircleFill];
                case 1031: return [4 /*yield*/, import("react-icons/ri")];
                case 1032:
                    RiCheckboxCircleLine = (_b.sent()).RiCheckboxCircleLine;
                    return [2 /*return*/, RiCheckboxCircleLine];
                case 1033: return [4 /*yield*/, import("react-icons/ri")];
                case 1034:
                    RiCheckboxFill = (_b.sent()).RiCheckboxFill;
                    return [2 /*return*/, RiCheckboxFill];
                case 1035: return [4 /*yield*/, import("react-icons/ri")];
                case 1036:
                    RiCheckboxIndeterminateFill = (_b.sent()).RiCheckboxIndeterminateFill;
                    return [2 /*return*/, RiCheckboxIndeterminateFill];
                case 1037: return [4 /*yield*/, import("react-icons/ri")];
                case 1038:
                    RiCheckboxIndeterminateLine = (_b.sent()).RiCheckboxIndeterminateLine;
                    return [2 /*return*/, RiCheckboxIndeterminateLine];
                case 1039: return [4 /*yield*/, import("react-icons/ri")];
                case 1040:
                    RiCheckboxLine = (_b.sent()).RiCheckboxLine;
                    return [2 /*return*/, RiCheckboxLine];
                case 1041: return [4 /*yield*/, import("react-icons/ri")];
                case 1042:
                    RiCheckboxMultipleBlankFill = (_b.sent()).RiCheckboxMultipleBlankFill;
                    return [2 /*return*/, RiCheckboxMultipleBlankFill];
                case 1043: return [4 /*yield*/, import("react-icons/ri")];
                case 1044:
                    RiCheckboxMultipleBlankLine = (_b.sent()).RiCheckboxMultipleBlankLine;
                    return [2 /*return*/, RiCheckboxMultipleBlankLine];
                case 1045: return [4 /*yield*/, import("react-icons/ri")];
                case 1046:
                    RiCheckboxMultipleFill = (_b.sent()).RiCheckboxMultipleFill;
                    return [2 /*return*/, RiCheckboxMultipleFill];
                case 1047: return [4 /*yield*/, import("react-icons/ri")];
                case 1048:
                    RiCheckboxMultipleLine = (_b.sent()).RiCheckboxMultipleLine;
                    return [2 /*return*/, RiCheckboxMultipleLine];
                case 1049: return [4 /*yield*/, import("react-icons/ri")];
                case 1050:
                    RiCloseCircleFill = (_b.sent()).RiCloseCircleFill;
                    return [2 /*return*/, RiCloseCircleFill];
                case 1051: return [4 /*yield*/, import("react-icons/ri")];
                case 1052:
                    RiCloseCircleLine = (_b.sent()).RiCloseCircleLine;
                    return [2 /*return*/, RiCloseCircleLine];
                case 1053: return [4 /*yield*/, import("react-icons/ri")];
                case 1054:
                    RiCloseFill = (_b.sent()).RiCloseFill;
                    return [2 /*return*/, RiCloseFill];
                case 1055: return [4 /*yield*/, import("react-icons/ri")];
                case 1056:
                    RiCloseLargeFill = (_b.sent()).RiCloseLargeFill;
                    return [2 /*return*/, RiCloseLargeFill];
                case 1057: return [4 /*yield*/, import("react-icons/ri")];
                case 1058:
                    RiCloseLargeLine = (_b.sent()).RiCloseLargeLine;
                    return [2 /*return*/, RiCloseLargeLine];
                case 1059: return [4 /*yield*/, import("react-icons/ri")];
                case 1060:
                    RiCloseLine = (_b.sent()).RiCloseLine;
                    return [2 /*return*/, RiCloseLine];
                case 1061: return [4 /*yield*/, import("react-icons/ri")];
                case 1062:
                    RiDashboardFill = (_b.sent()).RiDashboardFill;
                    return [2 /*return*/, RiDashboardFill];
                case 1063: return [4 /*yield*/, import("react-icons/ri")];
                case 1064:
                    RiDashboardHorizontalFill = (_b.sent()).RiDashboardHorizontalFill;
                    return [2 /*return*/, RiDashboardHorizontalFill];
                case 1065: return [4 /*yield*/, import("react-icons/ri")];
                case 1066:
                    RiDashboardHorizontalLine = (_b.sent()).RiDashboardHorizontalLine;
                    return [2 /*return*/, RiDashboardHorizontalLine];
                case 1067: return [4 /*yield*/, import("react-icons/ri")];
                case 1068:
                    RiDashboardLine = (_b.sent()).RiDashboardLine;
                    return [2 /*return*/, RiDashboardLine];
                case 1069: return [4 /*yield*/, import("react-icons/ri")];
                case 1070:
                    RiDeleteBack2Fill = (_b.sent()).RiDeleteBack2Fill;
                    return [2 /*return*/, RiDeleteBack2Fill];
                case 1071: return [4 /*yield*/, import("react-icons/ri")];
                case 1072:
                    RiDeleteBack2Line = (_b.sent()).RiDeleteBack2Line;
                    return [2 /*return*/, RiDeleteBack2Line];
                case 1073: return [4 /*yield*/, import("react-icons/ri")];
                case 1074:
                    RiDeleteBackFill = (_b.sent()).RiDeleteBackFill;
                    return [2 /*return*/, RiDeleteBackFill];
                case 1075: return [4 /*yield*/, import("react-icons/ri")];
                case 1076:
                    RiDeleteBackLine = (_b.sent()).RiDeleteBackLine;
                    return [2 /*return*/, RiDeleteBackLine];
                case 1077: return [4 /*yield*/, import("react-icons/ri")];
                case 1078:
                    RiDeleteBin2Fill = (_b.sent()).RiDeleteBin2Fill;
                    return [2 /*return*/, RiDeleteBin2Fill];
                case 1079: return [4 /*yield*/, import("react-icons/ri")];
                case 1080:
                    RiDeleteBin2Line = (_b.sent()).RiDeleteBin2Line;
                    return [2 /*return*/, RiDeleteBin2Line];
                case 1081: return [4 /*yield*/, import("react-icons/ri")];
                case 1082:
                    RiDeleteBin3Fill = (_b.sent()).RiDeleteBin3Fill;
                    return [2 /*return*/, RiDeleteBin3Fill];
                case 1083: return [4 /*yield*/, import("react-icons/ri")];
                case 1084:
                    RiDeleteBin3Line = (_b.sent()).RiDeleteBin3Line;
                    return [2 /*return*/, RiDeleteBin3Line];
                case 1085: return [4 /*yield*/, import("react-icons/ri")];
                case 1086:
                    RiDeleteBin4Fill = (_b.sent()).RiDeleteBin4Fill;
                    return [2 /*return*/, RiDeleteBin4Fill];
                case 1087: return [4 /*yield*/, import("react-icons/ri")];
                case 1088:
                    RiDeleteBin4Line = (_b.sent()).RiDeleteBin4Line;
                    return [2 /*return*/, RiDeleteBin4Line];
                case 1089: return [4 /*yield*/, import("react-icons/ri")];
                case 1090:
                    RiDeleteBin5Fill = (_b.sent()).RiDeleteBin5Fill;
                    return [2 /*return*/, RiDeleteBin5Fill];
                case 1091: return [4 /*yield*/, import("react-icons/ri")];
                case 1092:
                    RiDeleteBin5Line = (_b.sent()).RiDeleteBin5Line;
                    return [2 /*return*/, RiDeleteBin5Line];
                case 1093: return [4 /*yield*/, import("react-icons/ri")];
                case 1094:
                    RiDeleteBin6Fill = (_b.sent()).RiDeleteBin6Fill;
                    return [2 /*return*/, RiDeleteBin6Fill];
                case 1095: return [4 /*yield*/, import("react-icons/ri")];
                case 1096:
                    RiDeleteBin6Line = (_b.sent()).RiDeleteBin6Line;
                    return [2 /*return*/, RiDeleteBin6Line];
                case 1097: return [4 /*yield*/, import("react-icons/ri")];
                case 1098:
                    RiDeleteBin7Fill = (_b.sent()).RiDeleteBin7Fill;
                    return [2 /*return*/, RiDeleteBin7Fill];
                case 1099: return [4 /*yield*/, import("react-icons/ri")];
                case 1100:
                    RiDeleteBin7Line = (_b.sent()).RiDeleteBin7Line;
                    return [2 /*return*/, RiDeleteBin7Line];
                case 1101: return [4 /*yield*/, import("react-icons/ri")];
                case 1102:
                    RiDeleteBinFill = (_b.sent()).RiDeleteBinFill;
                    return [2 /*return*/, RiDeleteBinFill];
                case 1103: return [4 /*yield*/, import("react-icons/ri")];
                case 1104:
                    RiDeleteBinLine = (_b.sent()).RiDeleteBinLine;
                    return [2 /*return*/, RiDeleteBinLine];
                case 1105: return [4 /*yield*/, import("react-icons/ri")];
                case 1106:
                    RiDivideFill = (_b.sent()).RiDivideFill;
                    return [2 /*return*/, RiDivideFill];
                case 1107: return [4 /*yield*/, import("react-icons/ri")];
                case 1108:
                    RiDivideLine = (_b.sent()).RiDivideLine;
                    return [2 /*return*/, RiDivideLine];
                case 1109: return [4 /*yield*/, import("react-icons/ri")];
                case 1110:
                    RiDownload2Fill = (_b.sent()).RiDownload2Fill;
                    return [2 /*return*/, RiDownload2Fill];
                case 1111: return [4 /*yield*/, import("react-icons/ri")];
                case 1112:
                    RiDownload2Line = (_b.sent()).RiDownload2Line;
                    return [2 /*return*/, RiDownload2Line];
                case 1113: return [4 /*yield*/, import("react-icons/ri")];
                case 1114:
                    RiDownloadCloud2Fill = (_b.sent()).RiDownloadCloud2Fill;
                    return [2 /*return*/, RiDownloadCloud2Fill];
                case 1115: return [4 /*yield*/, import("react-icons/ri")];
                case 1116:
                    RiDownloadCloud2Line = (_b.sent()).RiDownloadCloud2Line;
                    return [2 /*return*/, RiDownloadCloud2Line];
                case 1117: return [4 /*yield*/, import("react-icons/ri")];
                case 1118:
                    RiDownloadCloudFill = (_b.sent()).RiDownloadCloudFill;
                    return [2 /*return*/, RiDownloadCloudFill];
                case 1119: return [4 /*yield*/, import("react-icons/ri")];
                case 1120:
                    RiDownloadCloudLine = (_b.sent()).RiDownloadCloudLine;
                    return [2 /*return*/, RiDownloadCloudLine];
                case 1121: return [4 /*yield*/, import("react-icons/ri")];
                case 1122:
                    RiDownloadFill = (_b.sent()).RiDownloadFill;
                    return [2 /*return*/, RiDownloadFill];
                case 1123: return [4 /*yield*/, import("react-icons/ri")];
                case 1124:
                    RiDownloadLine = (_b.sent()).RiDownloadLine;
                    return [2 /*return*/, RiDownloadLine];
                case 1125: return [4 /*yield*/, import("react-icons/ri")];
                case 1126:
                    RiEqualFill = (_b.sent()).RiEqualFill;
                    return [2 /*return*/, RiEqualFill];
                case 1127: return [4 /*yield*/, import("react-icons/ri")];
                case 1128:
                    RiEqualLine = (_b.sent()).RiEqualLine;
                    return [2 /*return*/, RiEqualLine];
                case 1129: return [4 /*yield*/, import("react-icons/ri")];
                case 1130:
                    RiErrorWarningFill = (_b.sent()).RiErrorWarningFill;
                    return [2 /*return*/, RiErrorWarningFill];
                case 1131: return [4 /*yield*/, import("react-icons/ri")];
                case 1132:
                    RiErrorWarningLine = (_b.sent()).RiErrorWarningLine;
                    return [2 /*return*/, RiErrorWarningLine];
                case 1133: return [4 /*yield*/, import("react-icons/ri")];
                case 1134:
                    RiExportFill = (_b.sent()).RiExportFill;
                    return [2 /*return*/, RiExportFill];
                case 1135: return [4 /*yield*/, import("react-icons/ri")];
                case 1136:
                    RiExportLine = (_b.sent()).RiExportLine;
                    return [2 /*return*/, RiExportLine];
                case 1137: return [4 /*yield*/, import("react-icons/ri")];
                case 1138:
                    RiExternalLinkFill = (_b.sent()).RiExternalLinkFill;
                    return [2 /*return*/, RiExternalLinkFill];
                case 1139: return [4 /*yield*/, import("react-icons/ri")];
                case 1140:
                    RiExternalLinkLine = (_b.sent()).RiExternalLinkLine;
                    return [2 /*return*/, RiExternalLinkLine];
                case 1141: return [4 /*yield*/, import("react-icons/ri")];
                case 1142:
                    RiEye2Fill = (_b.sent()).RiEye2Fill;
                    return [2 /*return*/, RiEye2Fill];
                case 1143: return [4 /*yield*/, import("react-icons/ri")];
                case 1144:
                    RiEye2Line = (_b.sent()).RiEye2Line;
                    return [2 /*return*/, RiEye2Line];
                case 1145: return [4 /*yield*/, import("react-icons/ri")];
                case 1146:
                    RiEyeCloseFill = (_b.sent()).RiEyeCloseFill;
                    return [2 /*return*/, RiEyeCloseFill];
                case 1147: return [4 /*yield*/, import("react-icons/ri")];
                case 1148:
                    RiEyeCloseLine = (_b.sent()).RiEyeCloseLine;
                    return [2 /*return*/, RiEyeCloseLine];
                case 1149: return [4 /*yield*/, import("react-icons/ri")];
                case 1150:
                    RiEyeFill = (_b.sent()).RiEyeFill;
                    return [2 /*return*/, RiEyeFill];
                case 1151: return [4 /*yield*/, import("react-icons/ri")];
                case 1152:
                    RiEyeLine = (_b.sent()).RiEyeLine;
                    return [2 /*return*/, RiEyeLine];
                case 1153: return [4 /*yield*/, import("react-icons/ri")];
                case 1154:
                    RiEyeOffFill = (_b.sent()).RiEyeOffFill;
                    return [2 /*return*/, RiEyeOffFill];
                case 1155: return [4 /*yield*/, import("react-icons/ri")];
                case 1156:
                    RiEyeOffLine = (_b.sent()).RiEyeOffLine;
                    return [2 /*return*/, RiEyeOffLine];
                case 1157: return [4 /*yield*/, import("react-icons/ri")];
                case 1158:
                    RiFilter2Fill = (_b.sent()).RiFilter2Fill;
                    return [2 /*return*/, RiFilter2Fill];
                case 1159: return [4 /*yield*/, import("react-icons/ri")];
                case 1160:
                    RiFilter2Line = (_b.sent()).RiFilter2Line;
                    return [2 /*return*/, RiFilter2Line];
                case 1161: return [4 /*yield*/, import("react-icons/ri")];
                case 1162:
                    RiFilter3Fill = (_b.sent()).RiFilter3Fill;
                    return [2 /*return*/, RiFilter3Fill];
                case 1163: return [4 /*yield*/, import("react-icons/ri")];
                case 1164:
                    RiFilter3Line = (_b.sent()).RiFilter3Line;
                    return [2 /*return*/, RiFilter3Line];
                case 1165: return [4 /*yield*/, import("react-icons/ri")];
                case 1166:
                    RiFilterFill = (_b.sent()).RiFilterFill;
                    return [2 /*return*/, RiFilterFill];
                case 1167: return [4 /*yield*/, import("react-icons/ri")];
                case 1168:
                    RiFilterLine = (_b.sent()).RiFilterLine;
                    return [2 /*return*/, RiFilterLine];
                case 1169: return [4 /*yield*/, import("react-icons/ri")];
                case 1170:
                    RiFilterOffFill = (_b.sent()).RiFilterOffFill;
                    return [2 /*return*/, RiFilterOffFill];
                case 1171: return [4 /*yield*/, import("react-icons/ri")];
                case 1172:
                    RiFilterOffLine = (_b.sent()).RiFilterOffLine;
                    return [2 /*return*/, RiFilterOffLine];
                case 1173: return [4 /*yield*/, import("react-icons/ri")];
                case 1174:
                    RiFindReplaceFill = (_b.sent()).RiFindReplaceFill;
                    return [2 /*return*/, RiFindReplaceFill];
                case 1175: return [4 /*yield*/, import("react-icons/ri")];
                case 1176:
                    RiFindReplaceLine = (_b.sent()).RiFindReplaceLine;
                    return [2 /*return*/, RiFindReplaceLine];
                case 1177: return [4 /*yield*/, import("react-icons/ri")];
                case 1178:
                    RiForbid2Fill = (_b.sent()).RiForbid2Fill;
                    return [2 /*return*/, RiForbid2Fill];
                case 1179: return [4 /*yield*/, import("react-icons/ri")];
                case 1180:
                    RiForbid2Line = (_b.sent()).RiForbid2Line;
                    return [2 /*return*/, RiForbid2Line];
                case 1181: return [4 /*yield*/, import("react-icons/ri")];
                case 1182:
                    RiForbidFill = (_b.sent()).RiForbidFill;
                    return [2 /*return*/, RiForbidFill];
                case 1183: return [4 /*yield*/, import("react-icons/ri")];
                case 1184:
                    RiForbidLine = (_b.sent()).RiForbidLine;
                    return [2 /*return*/, RiForbidLine];
                case 1185: return [4 /*yield*/, import("react-icons/ri")];
                case 1186:
                    RiFunctionAddFill = (_b.sent()).RiFunctionAddFill;
                    return [2 /*return*/, RiFunctionAddFill];
                case 1187: return [4 /*yield*/, import("react-icons/ri")];
                case 1188:
                    RiFunctionAddLine = (_b.sent()).RiFunctionAddLine;
                    return [2 /*return*/, RiFunctionAddLine];
                case 1189: return [4 /*yield*/, import("react-icons/ri")];
                case 1190:
                    RiFunctionFill = (_b.sent()).RiFunctionFill;
                    return [2 /*return*/, RiFunctionFill];
                case 1191: return [4 /*yield*/, import("react-icons/ri")];
                case 1192:
                    RiFunctionLine = (_b.sent()).RiFunctionLine;
                    return [2 /*return*/, RiFunctionLine];
                case 1193: return [4 /*yield*/, import("react-icons/ri")];
                case 1194:
                    RiHistoryFill = (_b.sent()).RiHistoryFill;
                    return [2 /*return*/, RiHistoryFill];
                case 1195: return [4 /*yield*/, import("react-icons/ri")];
                case 1196:
                    RiHistoryLine = (_b.sent()).RiHistoryLine;
                    return [2 /*return*/, RiHistoryLine];
                case 1197: return [4 /*yield*/, import("react-icons/ri")];
                case 1198:
                    RiHourglass2Fill = (_b.sent()).RiHourglass2Fill;
                    return [2 /*return*/, RiHourglass2Fill];
                case 1199: return [4 /*yield*/, import("react-icons/ri")];
                case 1200:
                    RiHourglass2Line = (_b.sent()).RiHourglass2Line;
                    return [2 /*return*/, RiHourglass2Line];
                case 1201: return [4 /*yield*/, import("react-icons/ri")];
                case 1202:
                    RiHourglassFill = (_b.sent()).RiHourglassFill;
                    return [2 /*return*/, RiHourglassFill];
                case 1203: return [4 /*yield*/, import("react-icons/ri")];
                case 1204:
                    RiHourglassLine = (_b.sent()).RiHourglassLine;
                    return [2 /*return*/, RiHourglassLine];
                case 1205: return [4 /*yield*/, import("react-icons/ri")];
                case 1206:
                    RiImportFill = (_b.sent()).RiImportFill;
                    return [2 /*return*/, RiImportFill];
                case 1207: return [4 /*yield*/, import("react-icons/ri")];
                case 1208:
                    RiImportLine = (_b.sent()).RiImportLine;
                    return [2 /*return*/, RiImportLine];
                case 1209: return [4 /*yield*/, import("react-icons/ri")];
                case 1210:
                    RiIndeterminateCircleFill = (_b.sent()).RiIndeterminateCircleFill;
                    return [2 /*return*/, RiIndeterminateCircleFill];
                case 1211: return [4 /*yield*/, import("react-icons/ri")];
                case 1212:
                    RiIndeterminateCircleLine = (_b.sent()).RiIndeterminateCircleLine;
                    return [2 /*return*/, RiIndeterminateCircleLine];
                case 1213: return [4 /*yield*/, import("react-icons/ri")];
                case 1214:
                    RiInformation2Fill = (_b.sent()).RiInformation2Fill;
                    return [2 /*return*/, RiInformation2Fill];
                case 1215: return [4 /*yield*/, import("react-icons/ri")];
                case 1216:
                    RiInformation2Line = (_b.sent()).RiInformation2Line;
                    return [2 /*return*/, RiInformation2Line];
                case 1217: return [4 /*yield*/, import("react-icons/ri")];
                case 1218:
                    RiInformationFill = (_b.sent()).RiInformationFill;
                    return [2 /*return*/, RiInformationFill];
                case 1219: return [4 /*yield*/, import("react-icons/ri")];
                case 1220:
                    RiInformationLine = (_b.sent()).RiInformationLine;
                    return [2 /*return*/, RiInformationLine];
                case 1221: return [4 /*yield*/, import("react-icons/ri")];
                case 1222:
                    RiInformationOffFill = (_b.sent()).RiInformationOffFill;
                    return [2 /*return*/, RiInformationOffFill];
                case 1223: return [4 /*yield*/, import("react-icons/ri")];
                case 1224:
                    RiInformationOffLine = (_b.sent()).RiInformationOffLine;
                    return [2 /*return*/, RiInformationOffLine];
                case 1225: return [4 /*yield*/, import("react-icons/ri")];
                case 1226:
                    RiListSettingsFill = (_b.sent()).RiListSettingsFill;
                    return [2 /*return*/, RiListSettingsFill];
                case 1227: return [4 /*yield*/, import("react-icons/ri")];
                case 1228:
                    RiListSettingsLine = (_b.sent()).RiListSettingsLine;
                    return [2 /*return*/, RiListSettingsLine];
                case 1229: return [4 /*yield*/, import("react-icons/ri")];
                case 1230:
                    RiLoader2Fill = (_b.sent()).RiLoader2Fill;
                    return [2 /*return*/, RiLoader2Fill];
                case 1231: return [4 /*yield*/, import("react-icons/ri")];
                case 1232:
                    RiLoader2Line = (_b.sent()).RiLoader2Line;
                    return [2 /*return*/, RiLoader2Line];
                case 1233: return [4 /*yield*/, import("react-icons/ri")];
                case 1234:
                    RiLoader3Fill = (_b.sent()).RiLoader3Fill;
                    return [2 /*return*/, RiLoader3Fill];
                case 1235: return [4 /*yield*/, import("react-icons/ri")];
                case 1236:
                    RiLoader3Line = (_b.sent()).RiLoader3Line;
                    return [2 /*return*/, RiLoader3Line];
                case 1237: return [4 /*yield*/, import("react-icons/ri")];
                case 1238:
                    RiLoader4Fill = (_b.sent()).RiLoader4Fill;
                    return [2 /*return*/, RiLoader4Fill];
                case 1239: return [4 /*yield*/, import("react-icons/ri")];
                case 1240:
                    RiLoader4Line = (_b.sent()).RiLoader4Line;
                    return [2 /*return*/, RiLoader4Line];
                case 1241: return [4 /*yield*/, import("react-icons/ri")];
                case 1242:
                    RiLoader5Fill = (_b.sent()).RiLoader5Fill;
                    return [2 /*return*/, RiLoader5Fill];
                case 1243: return [4 /*yield*/, import("react-icons/ri")];
                case 1244:
                    RiLoader5Line = (_b.sent()).RiLoader5Line;
                    return [2 /*return*/, RiLoader5Line];
                case 1245: return [4 /*yield*/, import("react-icons/ri")];
                case 1246:
                    RiLoaderFill = (_b.sent()).RiLoaderFill;
                    return [2 /*return*/, RiLoaderFill];
                case 1247: return [4 /*yield*/, import("react-icons/ri")];
                case 1248:
                    RiLoaderLine = (_b.sent()).RiLoaderLine;
                    return [2 /*return*/, RiLoaderLine];
                case 1249: return [4 /*yield*/, import("react-icons/ri")];
                case 1250:
                    RiLock2Fill = (_b.sent()).RiLock2Fill;
                    return [2 /*return*/, RiLock2Fill];
                case 1251: return [4 /*yield*/, import("react-icons/ri")];
                case 1252:
                    RiLock2Line = (_b.sent()).RiLock2Line;
                    return [2 /*return*/, RiLock2Line];
                case 1253: return [4 /*yield*/, import("react-icons/ri")];
                case 1254:
                    RiLockFill = (_b.sent()).RiLockFill;
                    return [2 /*return*/, RiLockFill];
                case 1255: return [4 /*yield*/, import("react-icons/ri")];
                case 1256:
                    RiLockLine = (_b.sent()).RiLockLine;
                    return [2 /*return*/, RiLockLine];
                case 1257: return [4 /*yield*/, import("react-icons/ri")];
                case 1258:
                    RiLockPasswordFill = (_b.sent()).RiLockPasswordFill;
                    return [2 /*return*/, RiLockPasswordFill];
                case 1259: return [4 /*yield*/, import("react-icons/ri")];
                case 1260:
                    RiLockPasswordLine = (_b.sent()).RiLockPasswordLine;
                    return [2 /*return*/, RiLockPasswordLine];
                case 1261: return [4 /*yield*/, import("react-icons/ri")];
                case 1262:
                    RiLockStarFill = (_b.sent()).RiLockStarFill;
                    return [2 /*return*/, RiLockStarFill];
                case 1263: return [4 /*yield*/, import("react-icons/ri")];
                case 1264:
                    RiLockStarLine = (_b.sent()).RiLockStarLine;
                    return [2 /*return*/, RiLockStarLine];
                case 1265: return [4 /*yield*/, import("react-icons/ri")];
                case 1266:
                    RiLockUnlockFill = (_b.sent()).RiLockUnlockFill;
                    return [2 /*return*/, RiLockUnlockFill];
                case 1267: return [4 /*yield*/, import("react-icons/ri")];
                case 1268:
                    RiLockUnlockLine = (_b.sent()).RiLockUnlockLine;
                    return [2 /*return*/, RiLockUnlockLine];
                case 1269: return [4 /*yield*/, import("react-icons/ri")];
                case 1270:
                    RiLoginBoxFill = (_b.sent()).RiLoginBoxFill;
                    return [2 /*return*/, RiLoginBoxFill];
                case 1271: return [4 /*yield*/, import("react-icons/ri")];
                case 1272:
                    RiLoginBoxLine = (_b.sent()).RiLoginBoxLine;
                    return [2 /*return*/, RiLoginBoxLine];
                case 1273: return [4 /*yield*/, import("react-icons/ri")];
                case 1274:
                    RiLoginCircleFill = (_b.sent()).RiLoginCircleFill;
                    return [2 /*return*/, RiLoginCircleFill];
                case 1275: return [4 /*yield*/, import("react-icons/ri")];
                case 1276:
                    RiLoginCircleLine = (_b.sent()).RiLoginCircleLine;
                    return [2 /*return*/, RiLoginCircleLine];
                case 1277: return [4 /*yield*/, import("react-icons/ri")];
                case 1278:
                    RiLogoutBoxFill = (_b.sent()).RiLogoutBoxFill;
                    return [2 /*return*/, RiLogoutBoxFill];
                case 1279: return [4 /*yield*/, import("react-icons/ri")];
                case 1280:
                    RiLogoutBoxLine = (_b.sent()).RiLogoutBoxLine;
                    return [2 /*return*/, RiLogoutBoxLine];
                case 1281: return [4 /*yield*/, import("react-icons/ri")];
                case 1282:
                    RiLogoutBoxRFill = (_b.sent()).RiLogoutBoxRFill;
                    return [2 /*return*/, RiLogoutBoxRFill];
                case 1283: return [4 /*yield*/, import("react-icons/ri")];
                case 1284:
                    RiLogoutBoxRLine = (_b.sent()).RiLogoutBoxRLine;
                    return [2 /*return*/, RiLogoutBoxRLine];
                case 1285: return [4 /*yield*/, import("react-icons/ri")];
                case 1286:
                    RiLogoutCircleFill = (_b.sent()).RiLogoutCircleFill;
                    return [2 /*return*/, RiLogoutCircleFill];
                case 1287: return [4 /*yield*/, import("react-icons/ri")];
                case 1288:
                    RiLogoutCircleLine = (_b.sent()).RiLogoutCircleLine;
                    return [2 /*return*/, RiLogoutCircleLine];
                case 1289: return [4 /*yield*/, import("react-icons/ri")];
                case 1290:
                    RiLogoutCircleRFill = (_b.sent()).RiLogoutCircleRFill;
                    return [2 /*return*/, RiLogoutCircleRFill];
                case 1291: return [4 /*yield*/, import("react-icons/ri")];
                case 1292:
                    RiLogoutCircleRLine = (_b.sent()).RiLogoutCircleRLine;
                    return [2 /*return*/, RiLogoutCircleRLine];
                case 1293: return [4 /*yield*/, import("react-icons/ri")];
                case 1294:
                    RiLoopLeftFill = (_b.sent()).RiLoopLeftFill;
                    return [2 /*return*/, RiLoopLeftFill];
                case 1295: return [4 /*yield*/, import("react-icons/ri")];
                case 1296:
                    RiLoopLeftLine = (_b.sent()).RiLoopLeftLine;
                    return [2 /*return*/, RiLoopLeftLine];
                case 1297: return [4 /*yield*/, import("react-icons/ri")];
                case 1298:
                    RiLoopRightFill = (_b.sent()).RiLoopRightFill;
                    return [2 /*return*/, RiLoopRightFill];
                case 1299: return [4 /*yield*/, import("react-icons/ri")];
                case 1300:
                    RiLoopRightLine = (_b.sent()).RiLoopRightLine;
                    return [2 /*return*/, RiLoopRightLine];
                case 1301: return [4 /*yield*/, import("react-icons/ri")];
                case 1302:
                    RiMenu2Fill = (_b.sent()).RiMenu2Fill;
                    return [2 /*return*/, RiMenu2Fill];
                case 1303: return [4 /*yield*/, import("react-icons/ri")];
                case 1304:
                    RiMenu2Line = (_b.sent()).RiMenu2Line;
                    return [2 /*return*/, RiMenu2Line];
                case 1305: return [4 /*yield*/, import("react-icons/ri")];
                case 1306:
                    RiMenu3Fill = (_b.sent()).RiMenu3Fill;
                    return [2 /*return*/, RiMenu3Fill];
                case 1307: return [4 /*yield*/, import("react-icons/ri")];
                case 1308:
                    RiMenu3Line = (_b.sent()).RiMenu3Line;
                    return [2 /*return*/, RiMenu3Line];
                case 1309: return [4 /*yield*/, import("react-icons/ri")];
                case 1310:
                    RiMenu4Fill = (_b.sent()).RiMenu4Fill;
                    return [2 /*return*/, RiMenu4Fill];
                case 1311: return [4 /*yield*/, import("react-icons/ri")];
                case 1312:
                    RiMenu4Line = (_b.sent()).RiMenu4Line;
                    return [2 /*return*/, RiMenu4Line];
                case 1313: return [4 /*yield*/, import("react-icons/ri")];
                case 1314:
                    RiMenu5Fill = (_b.sent()).RiMenu5Fill;
                    return [2 /*return*/, RiMenu5Fill];
                case 1315: return [4 /*yield*/, import("react-icons/ri")];
                case 1316:
                    RiMenu5Line = (_b.sent()).RiMenu5Line;
                    return [2 /*return*/, RiMenu5Line];
                case 1317: return [4 /*yield*/, import("react-icons/ri")];
                case 1318:
                    RiMenuAddFill = (_b.sent()).RiMenuAddFill;
                    return [2 /*return*/, RiMenuAddFill];
                case 1319: return [4 /*yield*/, import("react-icons/ri")];
                case 1320:
                    RiMenuAddLine = (_b.sent()).RiMenuAddLine;
                    return [2 /*return*/, RiMenuAddLine];
                case 1321: return [4 /*yield*/, import("react-icons/ri")];
                case 1322:
                    RiMenuFill = (_b.sent()).RiMenuFill;
                    return [2 /*return*/, RiMenuFill];
                case 1323: return [4 /*yield*/, import("react-icons/ri")];
                case 1324:
                    RiMenuFold2Fill = (_b.sent()).RiMenuFold2Fill;
                    return [2 /*return*/, RiMenuFold2Fill];
                case 1325: return [4 /*yield*/, import("react-icons/ri")];
                case 1326:
                    RiMenuFold2Line = (_b.sent()).RiMenuFold2Line;
                    return [2 /*return*/, RiMenuFold2Line];
                case 1327: return [4 /*yield*/, import("react-icons/ri")];
                case 1328:
                    RiMenuFold3Fill = (_b.sent()).RiMenuFold3Fill;
                    return [2 /*return*/, RiMenuFold3Fill];
                case 1329: return [4 /*yield*/, import("react-icons/ri")];
                case 1330:
                    RiMenuFold3Line = (_b.sent()).RiMenuFold3Line;
                    return [2 /*return*/, RiMenuFold3Line];
                case 1331: return [4 /*yield*/, import("react-icons/ri")];
                case 1332:
                    RiMenuFold4Fill = (_b.sent()).RiMenuFold4Fill;
                    return [2 /*return*/, RiMenuFold4Fill];
                case 1333: return [4 /*yield*/, import("react-icons/ri")];
                case 1334:
                    RiMenuFold4Line = (_b.sent()).RiMenuFold4Line;
                    return [2 /*return*/, RiMenuFold4Line];
                case 1335: return [4 /*yield*/, import("react-icons/ri")];
                case 1336:
                    RiMenuFoldFill = (_b.sent()).RiMenuFoldFill;
                    return [2 /*return*/, RiMenuFoldFill];
                case 1337: return [4 /*yield*/, import("react-icons/ri")];
                case 1338:
                    RiMenuFoldLine = (_b.sent()).RiMenuFoldLine;
                    return [2 /*return*/, RiMenuFoldLine];
                case 1339: return [4 /*yield*/, import("react-icons/ri")];
                case 1340:
                    RiMenuLine = (_b.sent()).RiMenuLine;
                    return [2 /*return*/, RiMenuLine];
                case 1341: return [4 /*yield*/, import("react-icons/ri")];
                case 1342:
                    RiMenuSearchFill = (_b.sent()).RiMenuSearchFill;
                    return [2 /*return*/, RiMenuSearchFill];
                case 1343: return [4 /*yield*/, import("react-icons/ri")];
                case 1344:
                    RiMenuSearchLine = (_b.sent()).RiMenuSearchLine;
                    return [2 /*return*/, RiMenuSearchLine];
                case 1345: return [4 /*yield*/, import("react-icons/ri")];
                case 1346:
                    RiMenuUnfold2Fill = (_b.sent()).RiMenuUnfold2Fill;
                    return [2 /*return*/, RiMenuUnfold2Fill];
                case 1347: return [4 /*yield*/, import("react-icons/ri")];
                case 1348:
                    RiMenuUnfold2Line = (_b.sent()).RiMenuUnfold2Line;
                    return [2 /*return*/, RiMenuUnfold2Line];
                case 1349: return [4 /*yield*/, import("react-icons/ri")];
                case 1350:
                    RiMenuUnfold3Fill = (_b.sent()).RiMenuUnfold3Fill;
                    return [2 /*return*/, RiMenuUnfold3Fill];
                case 1351: return [4 /*yield*/, import("react-icons/ri")];
                case 1352:
                    RiMenuUnfold3Line = (_b.sent()).RiMenuUnfold3Line;
                    return [2 /*return*/, RiMenuUnfold3Line];
                case 1353: return [4 /*yield*/, import("react-icons/ri")];
                case 1354:
                    RiMenuUnfold4Fill = (_b.sent()).RiMenuUnfold4Fill;
                    return [2 /*return*/, RiMenuUnfold4Fill];
                case 1355: return [4 /*yield*/, import("react-icons/ri")];
                case 1356:
                    RiMenuUnfold4Line = (_b.sent()).RiMenuUnfold4Line;
                    return [2 /*return*/, RiMenuUnfold4Line];
                case 1357: return [4 /*yield*/, import("react-icons/ri")];
                case 1358:
                    RiMenuUnfoldFill = (_b.sent()).RiMenuUnfoldFill;
                    return [2 /*return*/, RiMenuUnfoldFill];
                case 1359: return [4 /*yield*/, import("react-icons/ri")];
                case 1360:
                    RiMenuUnfoldLine = (_b.sent()).RiMenuUnfoldLine;
                    return [2 /*return*/, RiMenuUnfoldLine];
                case 1361: return [4 /*yield*/, import("react-icons/ri")];
                case 1362:
                    RiMore2Fill = (_b.sent()).RiMore2Fill;
                    return [2 /*return*/, RiMore2Fill];
                case 1363: return [4 /*yield*/, import("react-icons/ri")];
                case 1364:
                    RiMore2Line = (_b.sent()).RiMore2Line;
                    return [2 /*return*/, RiMore2Line];
                case 1365: return [4 /*yield*/, import("react-icons/ri")];
                case 1366:
                    RiMoreFill = (_b.sent()).RiMoreFill;
                    return [2 /*return*/, RiMoreFill];
                case 1367: return [4 /*yield*/, import("react-icons/ri")];
                case 1368:
                    RiMoreLine = (_b.sent()).RiMoreLine;
                    return [2 /*return*/, RiMoreLine];
                case 1369: return [4 /*yield*/, import("react-icons/ri")];
                case 1370:
                    RiNotificationBadgeFill = (_b.sent()).RiNotificationBadgeFill;
                    return [2 /*return*/, RiNotificationBadgeFill];
                case 1371: return [4 /*yield*/, import("react-icons/ri")];
                case 1372:
                    RiNotificationBadgeLine = (_b.sent()).RiNotificationBadgeLine;
                    return [2 /*return*/, RiNotificationBadgeLine];
                case 1373: return [4 /*yield*/, import("react-icons/ri")];
                case 1374:
                    RiProgress1Fill = (_b.sent()).RiProgress1Fill;
                    return [2 /*return*/, RiProgress1Fill];
                case 1375: return [4 /*yield*/, import("react-icons/ri")];
                case 1376:
                    RiProgress1Line = (_b.sent()).RiProgress1Line;
                    return [2 /*return*/, RiProgress1Line];
                case 1377: return [4 /*yield*/, import("react-icons/ri")];
                case 1378:
                    RiProgress2Fill = (_b.sent()).RiProgress2Fill;
                    return [2 /*return*/, RiProgress2Fill];
                case 1379: return [4 /*yield*/, import("react-icons/ri")];
                case 1380:
                    RiProgress2Line = (_b.sent()).RiProgress2Line;
                    return [2 /*return*/, RiProgress2Line];
                case 1381: return [4 /*yield*/, import("react-icons/ri")];
                case 1382:
                    RiProgress3Fill = (_b.sent()).RiProgress3Fill;
                    return [2 /*return*/, RiProgress3Fill];
                case 1383: return [4 /*yield*/, import("react-icons/ri")];
                case 1384:
                    RiProgress3Line = (_b.sent()).RiProgress3Line;
                    return [2 /*return*/, RiProgress3Line];
                case 1385: return [4 /*yield*/, import("react-icons/ri")];
                case 1386:
                    RiProgress4Fill = (_b.sent()).RiProgress4Fill;
                    return [2 /*return*/, RiProgress4Fill];
                case 1387: return [4 /*yield*/, import("react-icons/ri")];
                case 1388:
                    RiProgress4Line = (_b.sent()).RiProgress4Line;
                    return [2 /*return*/, RiProgress4Line];
                case 1389: return [4 /*yield*/, import("react-icons/ri")];
                case 1390:
                    RiProgress5Fill = (_b.sent()).RiProgress5Fill;
                    return [2 /*return*/, RiProgress5Fill];
                case 1391: return [4 /*yield*/, import("react-icons/ri")];
                case 1392:
                    RiProgress5Line = (_b.sent()).RiProgress5Line;
                    return [2 /*return*/, RiProgress5Line];
                case 1393: return [4 /*yield*/, import("react-icons/ri")];
                case 1394:
                    RiProgress6Fill = (_b.sent()).RiProgress6Fill;
                    return [2 /*return*/, RiProgress6Fill];
                case 1395: return [4 /*yield*/, import("react-icons/ri")];
                case 1396:
                    RiProgress6Line = (_b.sent()).RiProgress6Line;
                    return [2 /*return*/, RiProgress6Line];
                case 1397: return [4 /*yield*/, import("react-icons/ri")];
                case 1398:
                    RiProgress7Fill = (_b.sent()).RiProgress7Fill;
                    return [2 /*return*/, RiProgress7Fill];
                case 1399: return [4 /*yield*/, import("react-icons/ri")];
                case 1400:
                    RiProgress7Line = (_b.sent()).RiProgress7Line;
                    return [2 /*return*/, RiProgress7Line];
                case 1401: return [4 /*yield*/, import("react-icons/ri")];
                case 1402:
                    RiProgress8Fill = (_b.sent()).RiProgress8Fill;
                    return [2 /*return*/, RiProgress8Fill];
                case 1403: return [4 /*yield*/, import("react-icons/ri")];
                case 1404:
                    RiProgress8Line = (_b.sent()).RiProgress8Line;
                    return [2 /*return*/, RiProgress8Line];
                case 1405: return [4 /*yield*/, import("react-icons/ri")];
                case 1406:
                    RiProhibited2Fill = (_b.sent()).RiProhibited2Fill;
                    return [2 /*return*/, RiProhibited2Fill];
                case 1407: return [4 /*yield*/, import("react-icons/ri")];
                case 1408:
                    RiProhibited2Line = (_b.sent()).RiProhibited2Line;
                    return [2 /*return*/, RiProhibited2Line];
                case 1409: return [4 /*yield*/, import("react-icons/ri")];
                case 1410:
                    RiProhibitedFill = (_b.sent()).RiProhibitedFill;
                    return [2 /*return*/, RiProhibitedFill];
                case 1411: return [4 /*yield*/, import("react-icons/ri")];
                case 1412:
                    RiProhibitedLine = (_b.sent()).RiProhibitedLine;
                    return [2 /*return*/, RiProhibitedLine];
                case 1413: return [4 /*yield*/, import("react-icons/ri")];
                case 1414:
                    RiQuestionFill = (_b.sent()).RiQuestionFill;
                    return [2 /*return*/, RiQuestionFill];
                case 1415: return [4 /*yield*/, import("react-icons/ri")];
                case 1416:
                    RiQuestionLine = (_b.sent()).RiQuestionLine;
                    return [2 /*return*/, RiQuestionLine];
                case 1417: return [4 /*yield*/, import("react-icons/ri")];
                case 1418:
                    RiRadioButtonFill = (_b.sent()).RiRadioButtonFill;
                    return [2 /*return*/, RiRadioButtonFill];
                case 1419: return [4 /*yield*/, import("react-icons/ri")];
                case 1420:
                    RiRadioButtonLine = (_b.sent()).RiRadioButtonLine;
                    return [2 /*return*/, RiRadioButtonLine];
                case 1421: return [4 /*yield*/, import("react-icons/ri")];
                case 1422:
                    RiRefreshFill = (_b.sent()).RiRefreshFill;
                    return [2 /*return*/, RiRefreshFill];
                case 1423: return [4 /*yield*/, import("react-icons/ri")];
                case 1424:
                    RiRefreshLine = (_b.sent()).RiRefreshLine;
                    return [2 /*return*/, RiRefreshLine];
                case 1425: return [4 /*yield*/, import("react-icons/ri")];
                case 1426:
                    RiResetLeftFill = (_b.sent()).RiResetLeftFill;
                    return [2 /*return*/, RiResetLeftFill];
                case 1427: return [4 /*yield*/, import("react-icons/ri")];
                case 1428:
                    RiResetLeftLine = (_b.sent()).RiResetLeftLine;
                    return [2 /*return*/, RiResetLeftLine];
                case 1429: return [4 /*yield*/, import("react-icons/ri")];
                case 1430:
                    RiResetRightFill = (_b.sent()).RiResetRightFill;
                    return [2 /*return*/, RiResetRightFill];
                case 1431: return [4 /*yield*/, import("react-icons/ri")];
                case 1432:
                    RiResetRightLine = (_b.sent()).RiResetRightLine;
                    return [2 /*return*/, RiResetRightLine];
                case 1433: return [4 /*yield*/, import("react-icons/ri")];
                case 1434:
                    RiSearch2Fill = (_b.sent()).RiSearch2Fill;
                    return [2 /*return*/, RiSearch2Fill];
                case 1435: return [4 /*yield*/, import("react-icons/ri")];
                case 1436:
                    RiSearch2Line = (_b.sent()).RiSearch2Line;
                    return [2 /*return*/, RiSearch2Line];
                case 1437: return [4 /*yield*/, import("react-icons/ri")];
                case 1438:
                    RiSearchEyeFill = (_b.sent()).RiSearchEyeFill;
                    return [2 /*return*/, RiSearchEyeFill];
                case 1439: return [4 /*yield*/, import("react-icons/ri")];
                case 1440:
                    RiSearchEyeLine = (_b.sent()).RiSearchEyeLine;
                    return [2 /*return*/, RiSearchEyeLine];
                case 1441: return [4 /*yield*/, import("react-icons/ri")];
                case 1442:
                    RiSearchFill = (_b.sent()).RiSearchFill;
                    return [2 /*return*/, RiSearchFill];
                case 1443: return [4 /*yield*/, import("react-icons/ri")];
                case 1444:
                    RiSearchLine = (_b.sent()).RiSearchLine;
                    return [2 /*return*/, RiSearchLine];
                case 1445: return [4 /*yield*/, import("react-icons/ri")];
                case 1446:
                    RiSettings2Fill = (_b.sent()).RiSettings2Fill;
                    return [2 /*return*/, RiSettings2Fill];
                case 1447: return [4 /*yield*/, import("react-icons/ri")];
                case 1448:
                    RiSettings2Line = (_b.sent()).RiSettings2Line;
                    return [2 /*return*/, RiSettings2Line];
                case 1449: return [4 /*yield*/, import("react-icons/ri")];
                case 1450:
                    RiSettings3Fill = (_b.sent()).RiSettings3Fill;
                    return [2 /*return*/, RiSettings3Fill];
                case 1451: return [4 /*yield*/, import("react-icons/ri")];
                case 1452:
                    RiSettings3Line = (_b.sent()).RiSettings3Line;
                    return [2 /*return*/, RiSettings3Line];
                case 1453: return [4 /*yield*/, import("react-icons/ri")];
                case 1454:
                    RiSettings4Fill = (_b.sent()).RiSettings4Fill;
                    return [2 /*return*/, RiSettings4Fill];
                case 1455: return [4 /*yield*/, import("react-icons/ri")];
                case 1456:
                    RiSettings4Line = (_b.sent()).RiSettings4Line;
                    return [2 /*return*/, RiSettings4Line];
                case 1457: return [4 /*yield*/, import("react-icons/ri")];
                case 1458:
                    RiSettings5Fill = (_b.sent()).RiSettings5Fill;
                    return [2 /*return*/, RiSettings5Fill];
                case 1459: return [4 /*yield*/, import("react-icons/ri")];
                case 1460:
                    RiSettings5Line = (_b.sent()).RiSettings5Line;
                    return [2 /*return*/, RiSettings5Line];
                case 1461: return [4 /*yield*/, import("react-icons/ri")];
                case 1462:
                    RiSettings6Fill = (_b.sent()).RiSettings6Fill;
                    return [2 /*return*/, RiSettings6Fill];
                case 1463: return [4 /*yield*/, import("react-icons/ri")];
                case 1464:
                    RiSettings6Line = (_b.sent()).RiSettings6Line;
                    return [2 /*return*/, RiSettings6Line];
                case 1465: return [4 /*yield*/, import("react-icons/ri")];
                case 1466:
                    RiSettingsFill = (_b.sent()).RiSettingsFill;
                    return [2 /*return*/, RiSettingsFill];
                case 1467: return [4 /*yield*/, import("react-icons/ri")];
                case 1468:
                    RiSettingsLine = (_b.sent()).RiSettingsLine;
                    return [2 /*return*/, RiSettingsLine];
                case 1469: return [4 /*yield*/, import("react-icons/ri")];
                case 1470:
                    RiShare2Fill = (_b.sent()).RiShare2Fill;
                    return [2 /*return*/, RiShare2Fill];
                case 1471: return [4 /*yield*/, import("react-icons/ri")];
                case 1472:
                    RiShare2Line = (_b.sent()).RiShare2Line;
                    return [2 /*return*/, RiShare2Line];
                case 1473: return [4 /*yield*/, import("react-icons/ri")];
                case 1474:
                    RiShareBoxFill = (_b.sent()).RiShareBoxFill;
                    return [2 /*return*/, RiShareBoxFill];
                case 1475: return [4 /*yield*/, import("react-icons/ri")];
                case 1476:
                    RiShareBoxLine = (_b.sent()).RiShareBoxLine;
                    return [2 /*return*/, RiShareBoxLine];
                case 1477: return [4 /*yield*/, import("react-icons/ri")];
                case 1478:
                    RiShareCircleFill = (_b.sent()).RiShareCircleFill;
                    return [2 /*return*/, RiShareCircleFill];
                case 1479: return [4 /*yield*/, import("react-icons/ri")];
                case 1480:
                    RiShareCircleLine = (_b.sent()).RiShareCircleLine;
                    return [2 /*return*/, RiShareCircleLine];
                case 1481: return [4 /*yield*/, import("react-icons/ri")];
                case 1482:
                    RiShareFill = (_b.sent()).RiShareFill;
                    return [2 /*return*/, RiShareFill];
                case 1483: return [4 /*yield*/, import("react-icons/ri")];
                case 1484:
                    RiShareForward2Fill = (_b.sent()).RiShareForward2Fill;
                    return [2 /*return*/, RiShareForward2Fill];
                case 1485: return [4 /*yield*/, import("react-icons/ri")];
                case 1486:
                    RiShareForward2Line = (_b.sent()).RiShareForward2Line;
                    return [2 /*return*/, RiShareForward2Line];
                case 1487: return [4 /*yield*/, import("react-icons/ri")];
                case 1488:
                    RiShareForwardBoxFill = (_b.sent()).RiShareForwardBoxFill;
                    return [2 /*return*/, RiShareForwardBoxFill];
                case 1489: return [4 /*yield*/, import("react-icons/ri")];
                case 1490:
                    RiShareForwardBoxLine = (_b.sent()).RiShareForwardBoxLine;
                    return [2 /*return*/, RiShareForwardBoxLine];
                case 1491: return [4 /*yield*/, import("react-icons/ri")];
                case 1492:
                    RiShareForwardFill = (_b.sent()).RiShareForwardFill;
                    return [2 /*return*/, RiShareForwardFill];
                case 1493: return [4 /*yield*/, import("react-icons/ri")];
                case 1494:
                    RiShareForwardLine = (_b.sent()).RiShareForwardLine;
                    return [2 /*return*/, RiShareForwardLine];
                case 1495: return [4 /*yield*/, import("react-icons/ri")];
                case 1496:
                    RiShareLine = (_b.sent()).RiShareLine;
                    return [2 /*return*/, RiShareLine];
                case 1497: return [4 /*yield*/, import("react-icons/ri")];
                case 1498:
                    RiShieldCheckFill = (_b.sent()).RiShieldCheckFill;
                    return [2 /*return*/, RiShieldCheckFill];
                case 1499: return [4 /*yield*/, import("react-icons/ri")];
                case 1500:
                    RiShieldCheckLine = (_b.sent()).RiShieldCheckLine;
                    return [2 /*return*/, RiShieldCheckLine];
                case 1501: return [4 /*yield*/, import("react-icons/ri")];
                case 1502:
                    RiShieldCrossFill = (_b.sent()).RiShieldCrossFill;
                    return [2 /*return*/, RiShieldCrossFill];
                case 1503: return [4 /*yield*/, import("react-icons/ri")];
                case 1504:
                    RiShieldCrossLine = (_b.sent()).RiShieldCrossLine;
                    return [2 /*return*/, RiShieldCrossLine];
                case 1505: return [4 /*yield*/, import("react-icons/ri")];
                case 1506:
                    RiShieldFill = (_b.sent()).RiShieldFill;
                    return [2 /*return*/, RiShieldFill];
                case 1507: return [4 /*yield*/, import("react-icons/ri")];
                case 1508:
                    RiShieldFlashFill = (_b.sent()).RiShieldFlashFill;
                    return [2 /*return*/, RiShieldFlashFill];
                case 1509: return [4 /*yield*/, import("react-icons/ri")];
                case 1510:
                    RiShieldFlashLine = (_b.sent()).RiShieldFlashLine;
                    return [2 /*return*/, RiShieldFlashLine];
                case 1511: return [4 /*yield*/, import("react-icons/ri")];
                case 1512:
                    RiShieldKeyholeFill = (_b.sent()).RiShieldKeyholeFill;
                    return [2 /*return*/, RiShieldKeyholeFill];
                case 1513: return [4 /*yield*/, import("react-icons/ri")];
                case 1514:
                    RiShieldKeyholeLine = (_b.sent()).RiShieldKeyholeLine;
                    return [2 /*return*/, RiShieldKeyholeLine];
                case 1515: return [4 /*yield*/, import("react-icons/ri")];
                case 1516:
                    RiShieldLine = (_b.sent()).RiShieldLine;
                    return [2 /*return*/, RiShieldLine];
                case 1517: return [4 /*yield*/, import("react-icons/ri")];
                case 1518:
                    RiShieldStarFill = (_b.sent()).RiShieldStarFill;
                    return [2 /*return*/, RiShieldStarFill];
                case 1519: return [4 /*yield*/, import("react-icons/ri")];
                case 1520:
                    RiShieldStarLine = (_b.sent()).RiShieldStarLine;
                    return [2 /*return*/, RiShieldStarLine];
                case 1521: return [4 /*yield*/, import("react-icons/ri")];
                case 1522:
                    RiShieldUserFill = (_b.sent()).RiShieldUserFill;
                    return [2 /*return*/, RiShieldUserFill];
                case 1523: return [4 /*yield*/, import("react-icons/ri")];
                case 1524:
                    RiShieldUserLine = (_b.sent()).RiShieldUserLine;
                    return [2 /*return*/, RiShieldUserLine];
                case 1525: return [4 /*yield*/, import("react-icons/ri")];
                case 1526:
                    RiSideBarFill = (_b.sent()).RiSideBarFill;
                    return [2 /*return*/, RiSideBarFill];
                case 1527: return [4 /*yield*/, import("react-icons/ri")];
                case 1528:
                    RiSideBarLine = (_b.sent()).RiSideBarLine;
                    return [2 /*return*/, RiSideBarLine];
                case 1529: return [4 /*yield*/, import("react-icons/ri")];
                case 1530:
                    RiSidebarFoldFill = (_b.sent()).RiSidebarFoldFill;
                    return [2 /*return*/, RiSidebarFoldFill];
                case 1531: return [4 /*yield*/, import("react-icons/ri")];
                case 1532:
                    RiSidebarFoldLine = (_b.sent()).RiSidebarFoldLine;
                    return [2 /*return*/, RiSidebarFoldLine];
                case 1533: return [4 /*yield*/, import("react-icons/ri")];
                case 1534:
                    RiSidebarUnfoldFill = (_b.sent()).RiSidebarUnfoldFill;
                    return [2 /*return*/, RiSidebarUnfoldFill];
                case 1535: return [4 /*yield*/, import("react-icons/ri")];
                case 1536:
                    RiSidebarUnfoldLine = (_b.sent()).RiSidebarUnfoldLine;
                    return [2 /*return*/, RiSidebarUnfoldLine];
                case 1537: return [4 /*yield*/, import("react-icons/ri")];
                case 1538:
                    RiSpam2Fill = (_b.sent()).RiSpam2Fill;
                    return [2 /*return*/, RiSpam2Fill];
                case 1539: return [4 /*yield*/, import("react-icons/ri")];
                case 1540:
                    RiSpam2Line = (_b.sent()).RiSpam2Line;
                    return [2 /*return*/, RiSpam2Line];
                case 1541: return [4 /*yield*/, import("react-icons/ri")];
                case 1542:
                    RiSpam3Fill = (_b.sent()).RiSpam3Fill;
                    return [2 /*return*/, RiSpam3Fill];
                case 1543: return [4 /*yield*/, import("react-icons/ri")];
                case 1544:
                    RiSpam3Line = (_b.sent()).RiSpam3Line;
                    return [2 /*return*/, RiSpam3Line];
                case 1545: return [4 /*yield*/, import("react-icons/ri")];
                case 1546:
                    RiSpamFill = (_b.sent()).RiSpamFill;
                    return [2 /*return*/, RiSpamFill];
                case 1547: return [4 /*yield*/, import("react-icons/ri")];
                case 1548:
                    RiSpamLine = (_b.sent()).RiSpamLine;
                    return [2 /*return*/, RiSpamLine];
                case 1549: return [4 /*yield*/, import("react-icons/ri")];
                case 1550:
                    RiStarFill = (_b.sent()).RiStarFill;
                    return [2 /*return*/, RiStarFill];
                case 1551: return [4 /*yield*/, import("react-icons/ri")];
                case 1552:
                    RiStarHalfFill = (_b.sent()).RiStarHalfFill;
                    return [2 /*return*/, RiStarHalfFill];
                case 1553: return [4 /*yield*/, import("react-icons/ri")];
                case 1554:
                    RiStarHalfLine = (_b.sent()).RiStarHalfLine;
                    return [2 /*return*/, RiStarHalfLine];
                case 1555: return [4 /*yield*/, import("react-icons/ri")];
                case 1556:
                    RiStarHalfSFill = (_b.sent()).RiStarHalfSFill;
                    return [2 /*return*/, RiStarHalfSFill];
                case 1557: return [4 /*yield*/, import("react-icons/ri")];
                case 1558:
                    RiStarHalfSLine = (_b.sent()).RiStarHalfSLine;
                    return [2 /*return*/, RiStarHalfSLine];
                case 1559: return [4 /*yield*/, import("react-icons/ri")];
                case 1560:
                    RiStarLine = (_b.sent()).RiStarLine;
                    return [2 /*return*/, RiStarLine];
                case 1561: return [4 /*yield*/, import("react-icons/ri")];
                case 1562:
                    RiStarOffFill = (_b.sent()).RiStarOffFill;
                    return [2 /*return*/, RiStarOffFill];
                case 1563: return [4 /*yield*/, import("react-icons/ri")];
                case 1564:
                    RiStarOffLine = (_b.sent()).RiStarOffLine;
                    return [2 /*return*/, RiStarOffLine];
                case 1565: return [4 /*yield*/, import("react-icons/ri")];
                case 1566:
                    RiStarSFill = (_b.sent()).RiStarSFill;
                    return [2 /*return*/, RiStarSFill];
                case 1567: return [4 /*yield*/, import("react-icons/ri")];
                case 1568:
                    RiStarSLine = (_b.sent()).RiStarSLine;
                    return [2 /*return*/, RiStarSLine];
                case 1569: return [4 /*yield*/, import("react-icons/ri")];
                case 1570:
                    RiSubtractFill = (_b.sent()).RiSubtractFill;
                    return [2 /*return*/, RiSubtractFill];
                case 1571: return [4 /*yield*/, import("react-icons/ri")];
                case 1572:
                    RiSubtractLine = (_b.sent()).RiSubtractLine;
                    return [2 /*return*/, RiSubtractLine];
                case 1573: return [4 /*yield*/, import("react-icons/ri")];
                case 1574:
                    RiThumbDownFill = (_b.sent()).RiThumbDownFill;
                    return [2 /*return*/, RiThumbDownFill];
                case 1575: return [4 /*yield*/, import("react-icons/ri")];
                case 1576:
                    RiThumbDownLine = (_b.sent()).RiThumbDownLine;
                    return [2 /*return*/, RiThumbDownLine];
                case 1577: return [4 /*yield*/, import("react-icons/ri")];
                case 1578:
                    RiThumbUpFill = (_b.sent()).RiThumbUpFill;
                    return [2 /*return*/, RiThumbUpFill];
                case 1579: return [4 /*yield*/, import("react-icons/ri")];
                case 1580:
                    RiThumbUpLine = (_b.sent()).RiThumbUpLine;
                    return [2 /*return*/, RiThumbUpLine];
                case 1581: return [4 /*yield*/, import("react-icons/ri")];
                case 1582:
                    RiTimeFill = (_b.sent()).RiTimeFill;
                    return [2 /*return*/, RiTimeFill];
                case 1583: return [4 /*yield*/, import("react-icons/ri")];
                case 1584:
                    RiTimeLine = (_b.sent()).RiTimeLine;
                    return [2 /*return*/, RiTimeLine];
                case 1585: return [4 /*yield*/, import("react-icons/ri")];
                case 1586:
                    RiTimer2Fill = (_b.sent()).RiTimer2Fill;
                    return [2 /*return*/, RiTimer2Fill];
                case 1587: return [4 /*yield*/, import("react-icons/ri")];
                case 1588:
                    RiTimer2Line = (_b.sent()).RiTimer2Line;
                    return [2 /*return*/, RiTimer2Line];
                case 1589: return [4 /*yield*/, import("react-icons/ri")];
                case 1590:
                    RiTimerFill = (_b.sent()).RiTimerFill;
                    return [2 /*return*/, RiTimerFill];
                case 1591: return [4 /*yield*/, import("react-icons/ri")];
                case 1592:
                    RiTimerFlashFill = (_b.sent()).RiTimerFlashFill;
                    return [2 /*return*/, RiTimerFlashFill];
                case 1593: return [4 /*yield*/, import("react-icons/ri")];
                case 1594:
                    RiTimerFlashLine = (_b.sent()).RiTimerFlashLine;
                    return [2 /*return*/, RiTimerFlashLine];
                case 1595: return [4 /*yield*/, import("react-icons/ri")];
                case 1596:
                    RiTimerLine = (_b.sent()).RiTimerLine;
                    return [2 /*return*/, RiTimerLine];
                case 1597: return [4 /*yield*/, import("react-icons/ri")];
                case 1598:
                    RiToggleFill = (_b.sent()).RiToggleFill;
                    return [2 /*return*/, RiToggleFill];
                case 1599: return [4 /*yield*/, import("react-icons/ri")];
                case 1600:
                    RiToggleLine = (_b.sent()).RiToggleLine;
                    return [2 /*return*/, RiToggleLine];
                case 1601: return [4 /*yield*/, import("react-icons/ri")];
                case 1602:
                    RiUpload2Fill = (_b.sent()).RiUpload2Fill;
                    return [2 /*return*/, RiUpload2Fill];
                case 1603: return [4 /*yield*/, import("react-icons/ri")];
                case 1604:
                    RiUpload2Line = (_b.sent()).RiUpload2Line;
                    return [2 /*return*/, RiUpload2Line];
                case 1605: return [4 /*yield*/, import("react-icons/ri")];
                case 1606:
                    RiUploadCloud2Fill = (_b.sent()).RiUploadCloud2Fill;
                    return [2 /*return*/, RiUploadCloud2Fill];
                case 1607: return [4 /*yield*/, import("react-icons/ri")];
                case 1608:
                    RiUploadCloud2Line = (_b.sent()).RiUploadCloud2Line;
                    return [2 /*return*/, RiUploadCloud2Line];
                case 1609: return [4 /*yield*/, import("react-icons/ri")];
                case 1610:
                    RiUploadCloudFill = (_b.sent()).RiUploadCloudFill;
                    return [2 /*return*/, RiUploadCloudFill];
                case 1611: return [4 /*yield*/, import("react-icons/ri")];
                case 1612:
                    RiUploadCloudLine = (_b.sent()).RiUploadCloudLine;
                    return [2 /*return*/, RiUploadCloudLine];
                case 1613: return [4 /*yield*/, import("react-icons/ri")];
                case 1614:
                    RiUploadFill = (_b.sent()).RiUploadFill;
                    return [2 /*return*/, RiUploadFill];
                case 1615: return [4 /*yield*/, import("react-icons/ri")];
                case 1616:
                    RiUploadLine = (_b.sent()).RiUploadLine;
                    return [2 /*return*/, RiUploadLine];
                case 1617: return [4 /*yield*/, import("react-icons/ri")];
                case 1618:
                    RiZoomInFill = (_b.sent()).RiZoomInFill;
                    return [2 /*return*/, RiZoomInFill];
                case 1619: return [4 /*yield*/, import("react-icons/ri")];
                case 1620:
                    RiZoomInLine = (_b.sent()).RiZoomInLine;
                    return [2 /*return*/, RiZoomInLine];
                case 1621: return [4 /*yield*/, import("react-icons/ri")];
                case 1622:
                    RiZoomOutFill = (_b.sent()).RiZoomOutFill;
                    return [2 /*return*/, RiZoomOutFill];
                case 1623: return [4 /*yield*/, import("react-icons/ri")];
                case 1624:
                    RiZoomOutLine = (_b.sent()).RiZoomOutLine;
                    return [2 /*return*/, RiZoomOutLine];
                case 1625: return [4 /*yield*/, import("react-icons/ri")];
                case 1626:
                    RiAccountBox2Fill = (_b.sent()).RiAccountBox2Fill;
                    return [2 /*return*/, RiAccountBox2Fill];
                case 1627: return [4 /*yield*/, import("react-icons/ri")];
                case 1628:
                    RiAccountBox2Line = (_b.sent()).RiAccountBox2Line;
                    return [2 /*return*/, RiAccountBox2Line];
                case 1629: return [4 /*yield*/, import("react-icons/ri")];
                case 1630:
                    RiAccountBoxFill = (_b.sent()).RiAccountBoxFill;
                    return [2 /*return*/, RiAccountBoxFill];
                case 1631: return [4 /*yield*/, import("react-icons/ri")];
                case 1632:
                    RiAccountBoxLine = (_b.sent()).RiAccountBoxLine;
                    return [2 /*return*/, RiAccountBoxLine];
                case 1633: return [4 /*yield*/, import("react-icons/ri")];
                case 1634:
                    RiAccountCircle2Fill = (_b.sent()).RiAccountCircle2Fill;
                    return [2 /*return*/, RiAccountCircle2Fill];
                case 1635: return [4 /*yield*/, import("react-icons/ri")];
                case 1636:
                    RiAccountCircle2Line = (_b.sent()).RiAccountCircle2Line;
                    return [2 /*return*/, RiAccountCircle2Line];
                case 1637: return [4 /*yield*/, import("react-icons/ri")];
                case 1638:
                    RiAccountCircleFill = (_b.sent()).RiAccountCircleFill;
                    return [2 /*return*/, RiAccountCircleFill];
                case 1639: return [4 /*yield*/, import("react-icons/ri")];
                case 1640:
                    RiAccountCircleLine = (_b.sent()).RiAccountCircleLine;
                    return [2 /*return*/, RiAccountCircleLine];
                case 1641: return [4 /*yield*/, import("react-icons/ri")];
                case 1642:
                    RiAccountPinBoxFill = (_b.sent()).RiAccountPinBoxFill;
                    return [2 /*return*/, RiAccountPinBoxFill];
                case 1643: return [4 /*yield*/, import("react-icons/ri")];
                case 1644:
                    RiAccountPinBoxLine = (_b.sent()).RiAccountPinBoxLine;
                    return [2 /*return*/, RiAccountPinBoxLine];
                case 1645: return [4 /*yield*/, import("react-icons/ri")];
                case 1646:
                    RiAccountPinCircleFill = (_b.sent()).RiAccountPinCircleFill;
                    return [2 /*return*/, RiAccountPinCircleFill];
                case 1647: return [4 /*yield*/, import("react-icons/ri")];
                case 1648:
                    RiAccountPinCircleLine = (_b.sent()).RiAccountPinCircleLine;
                    return [2 /*return*/, RiAccountPinCircleLine];
                case 1649: return [4 /*yield*/, import("react-icons/ri")];
                case 1650:
                    RiAdminFill = (_b.sent()).RiAdminFill;
                    return [2 /*return*/, RiAdminFill];
                case 1651: return [4 /*yield*/, import("react-icons/ri")];
                case 1652:
                    RiAdminLine = (_b.sent()).RiAdminLine;
                    return [2 /*return*/, RiAdminLine];
                case 1653: return [4 /*yield*/, import("react-icons/ri")];
                case 1654:
                    RiAliensFill = (_b.sent()).RiAliensFill;
                    return [2 /*return*/, RiAliensFill];
                case 1655: return [4 /*yield*/, import("react-icons/ri")];
                case 1656:
                    RiAliensLine = (_b.sent()).RiAliensLine;
                    return [2 /*return*/, RiAliensLine];
                case 1657: return [4 /*yield*/, import("react-icons/ri")];
                case 1658:
                    RiBearSmileFill = (_b.sent()).RiBearSmileFill;
                    return [2 /*return*/, RiBearSmileFill];
                case 1659: return [4 /*yield*/, import("react-icons/ri")];
                case 1660:
                    RiBearSmileLine = (_b.sent()).RiBearSmileLine;
                    return [2 /*return*/, RiBearSmileLine];
                case 1661: return [4 /*yield*/, import("react-icons/ri")];
                case 1662:
                    RiBodyScanFill = (_b.sent()).RiBodyScanFill;
                    return [2 /*return*/, RiBodyScanFill];
                case 1663: return [4 /*yield*/, import("react-icons/ri")];
                case 1664:
                    RiBodyScanLine = (_b.sent()).RiBodyScanLine;
                    return [2 /*return*/, RiBodyScanLine];
                case 1665: return [4 /*yield*/, import("react-icons/ri")];
                case 1666:
                    RiContactsFill = (_b.sent()).RiContactsFill;
                    return [2 /*return*/, RiContactsFill];
                case 1667: return [4 /*yield*/, import("react-icons/ri")];
                case 1668:
                    RiContactsLine = (_b.sent()).RiContactsLine;
                    return [2 /*return*/, RiContactsLine];
                case 1669: return [4 /*yield*/, import("react-icons/ri")];
                case 1670:
                    RiCriminalFill = (_b.sent()).RiCriminalFill;
                    return [2 /*return*/, RiCriminalFill];
                case 1671: return [4 /*yield*/, import("react-icons/ri")];
                case 1672:
                    RiCriminalLine = (_b.sent()).RiCriminalLine;
                    return [2 /*return*/, RiCriminalLine];
                case 1673: return [4 /*yield*/, import("react-icons/ri")];
                case 1674:
                    RiEmotion2Fill = (_b.sent()).RiEmotion2Fill;
                    return [2 /*return*/, RiEmotion2Fill];
                case 1675: return [4 /*yield*/, import("react-icons/ri")];
                case 1676:
                    RiEmotion2Line = (_b.sent()).RiEmotion2Line;
                    return [2 /*return*/, RiEmotion2Line];
                case 1677: return [4 /*yield*/, import("react-icons/ri")];
                case 1678:
                    RiEmotionFill = (_b.sent()).RiEmotionFill;
                    return [2 /*return*/, RiEmotionFill];
                case 1679: return [4 /*yield*/, import("react-icons/ri")];
                case 1680:
                    RiEmotionHappyFill = (_b.sent()).RiEmotionHappyFill;
                    return [2 /*return*/, RiEmotionHappyFill];
                case 1681: return [4 /*yield*/, import("react-icons/ri")];
                case 1682:
                    RiEmotionHappyLine = (_b.sent()).RiEmotionHappyLine;
                    return [2 /*return*/, RiEmotionHappyLine];
                case 1683: return [4 /*yield*/, import("react-icons/ri")];
                case 1684:
                    RiEmotionLaughFill = (_b.sent()).RiEmotionLaughFill;
                    return [2 /*return*/, RiEmotionLaughFill];
                case 1685: return [4 /*yield*/, import("react-icons/ri")];
                case 1686:
                    RiEmotionLaughLine = (_b.sent()).RiEmotionLaughLine;
                    return [2 /*return*/, RiEmotionLaughLine];
                case 1687: return [4 /*yield*/, import("react-icons/ri")];
                case 1688:
                    RiEmotionLine = (_b.sent()).RiEmotionLine;
                    return [2 /*return*/, RiEmotionLine];
                case 1689: return [4 /*yield*/, import("react-icons/ri")];
                case 1690:
                    RiEmotionNormalFill = (_b.sent()).RiEmotionNormalFill;
                    return [2 /*return*/, RiEmotionNormalFill];
                case 1691: return [4 /*yield*/, import("react-icons/ri")];
                case 1692:
                    RiEmotionNormalLine = (_b.sent()).RiEmotionNormalLine;
                    return [2 /*return*/, RiEmotionNormalLine];
                case 1693: return [4 /*yield*/, import("react-icons/ri")];
                case 1694:
                    RiEmotionSadFill = (_b.sent()).RiEmotionSadFill;
                    return [2 /*return*/, RiEmotionSadFill];
                case 1695: return [4 /*yield*/, import("react-icons/ri")];
                case 1696:
                    RiEmotionSadLine = (_b.sent()).RiEmotionSadLine;
                    return [2 /*return*/, RiEmotionSadLine];
                case 1697: return [4 /*yield*/, import("react-icons/ri")];
                case 1698:
                    RiEmotionUnhappyFill = (_b.sent()).RiEmotionUnhappyFill;
                    return [2 /*return*/, RiEmotionUnhappyFill];
                case 1699: return [4 /*yield*/, import("react-icons/ri")];
                case 1700:
                    RiEmotionUnhappyLine = (_b.sent()).RiEmotionUnhappyLine;
                    return [2 /*return*/, RiEmotionUnhappyLine];
                case 1701: return [4 /*yield*/, import("react-icons/ri")];
                case 1702:
                    RiGenderlessFill = (_b.sent()).RiGenderlessFill;
                    return [2 /*return*/, RiGenderlessFill];
                case 1703: return [4 /*yield*/, import("react-icons/ri")];
                case 1704:
                    RiGenderlessLine = (_b.sent()).RiGenderlessLine;
                    return [2 /*return*/, RiGenderlessLine];
                case 1705: return [4 /*yield*/, import("react-icons/ri")];
                case 1706:
                    RiGhost2Fill = (_b.sent()).RiGhost2Fill;
                    return [2 /*return*/, RiGhost2Fill];
                case 1707: return [4 /*yield*/, import("react-icons/ri")];
                case 1708:
                    RiGhost2Line = (_b.sent()).RiGhost2Line;
                    return [2 /*return*/, RiGhost2Line];
                case 1709: return [4 /*yield*/, import("react-icons/ri")];
                case 1710:
                    RiGhostFill = (_b.sent()).RiGhostFill;
                    return [2 /*return*/, RiGhostFill];
                case 1711: return [4 /*yield*/, import("react-icons/ri")];
                case 1712:
                    RiGhostLine = (_b.sent()).RiGhostLine;
                    return [2 /*return*/, RiGhostLine];
                case 1713: return [4 /*yield*/, import("react-icons/ri")];
                case 1714:
                    RiGhostSmileFill = (_b.sent()).RiGhostSmileFill;
                    return [2 /*return*/, RiGhostSmileFill];
                case 1715: return [4 /*yield*/, import("react-icons/ri")];
                case 1716:
                    RiGhostSmileLine = (_b.sent()).RiGhostSmileLine;
                    return [2 /*return*/, RiGhostSmileLine];
                case 1717: return [4 /*yield*/, import("react-icons/ri")];
                case 1718:
                    RiGroup2Fill = (_b.sent()).RiGroup2Fill;
                    return [2 /*return*/, RiGroup2Fill];
                case 1719: return [4 /*yield*/, import("react-icons/ri")];
                case 1720:
                    RiGroup2Line = (_b.sent()).RiGroup2Line;
                    return [2 /*return*/, RiGroup2Line];
                case 1721: return [4 /*yield*/, import("react-icons/ri")];
                case 1722:
                    RiGroup3Fill = (_b.sent()).RiGroup3Fill;
                    return [2 /*return*/, RiGroup3Fill];
                case 1723: return [4 /*yield*/, import("react-icons/ri")];
                case 1724:
                    RiGroup3Line = (_b.sent()).RiGroup3Line;
                    return [2 /*return*/, RiGroup3Line];
                case 1725: return [4 /*yield*/, import("react-icons/ri")];
                case 1726:
                    RiGroupFill = (_b.sent()).RiGroupFill;
                    return [2 /*return*/, RiGroupFill];
                case 1727: return [4 /*yield*/, import("react-icons/ri")];
                case 1728:
                    RiGroupLine = (_b.sent()).RiGroupLine;
                    return [2 /*return*/, RiGroupLine];
                case 1729: return [4 /*yield*/, import("react-icons/ri")];
                case 1730:
                    RiMenFill = (_b.sent()).RiMenFill;
                    return [2 /*return*/, RiMenFill];
                case 1731: return [4 /*yield*/, import("react-icons/ri")];
                case 1732:
                    RiMenLine = (_b.sent()).RiMenLine;
                    return [2 /*return*/, RiMenLine];
                case 1733: return [4 /*yield*/, import("react-icons/ri")];
                case 1734:
                    RiMickeyFill = (_b.sent()).RiMickeyFill;
                    return [2 /*return*/, RiMickeyFill];
                case 1735: return [4 /*yield*/, import("react-icons/ri")];
                case 1736:
                    RiMickeyLine = (_b.sent()).RiMickeyLine;
                    return [2 /*return*/, RiMickeyLine];
                case 1737: return [4 /*yield*/, import("react-icons/ri")];
                case 1738:
                    RiOpenArmFill = (_b.sent()).RiOpenArmFill;
                    return [2 /*return*/, RiOpenArmFill];
                case 1739: return [4 /*yield*/, import("react-icons/ri")];
                case 1740:
                    RiOpenArmLine = (_b.sent()).RiOpenArmLine;
                    return [2 /*return*/, RiOpenArmLine];
                case 1741: return [4 /*yield*/, import("react-icons/ri")];
                case 1742:
                    RiParentFill = (_b.sent()).RiParentFill;
                    return [2 /*return*/, RiParentFill];
                case 1743: return [4 /*yield*/, import("react-icons/ri")];
                case 1744:
                    RiParentLine = (_b.sent()).RiParentLine;
                    return [2 /*return*/, RiParentLine];
                case 1745: return [4 /*yield*/, import("react-icons/ri")];
                case 1746:
                    RiRobot2Fill = (_b.sent()).RiRobot2Fill;
                    return [2 /*return*/, RiRobot2Fill];
                case 1747: return [4 /*yield*/, import("react-icons/ri")];
                case 1748:
                    RiRobot2Line = (_b.sent()).RiRobot2Line;
                    return [2 /*return*/, RiRobot2Line];
                case 1749: return [4 /*yield*/, import("react-icons/ri")];
                case 1750:
                    RiRobot3Fill = (_b.sent()).RiRobot3Fill;
                    return [2 /*return*/, RiRobot3Fill];
                case 1751: return [4 /*yield*/, import("react-icons/ri")];
                case 1752:
                    RiRobot3Line = (_b.sent()).RiRobot3Line;
                    return [2 /*return*/, RiRobot3Line];
                case 1753: return [4 /*yield*/, import("react-icons/ri")];
                case 1754:
                    RiRobotFill = (_b.sent()).RiRobotFill;
                    return [2 /*return*/, RiRobotFill];
                case 1755: return [4 /*yield*/, import("react-icons/ri")];
                case 1756:
                    RiRobotLine = (_b.sent()).RiRobotLine;
                    return [2 /*return*/, RiRobotLine];
                case 1757: return [4 /*yield*/, import("react-icons/ri")];
                case 1758:
                    RiSkull2Fill = (_b.sent()).RiSkull2Fill;
                    return [2 /*return*/, RiSkull2Fill];
                case 1759: return [4 /*yield*/, import("react-icons/ri")];
                case 1760:
                    RiSkull2Line = (_b.sent()).RiSkull2Line;
                    return [2 /*return*/, RiSkull2Line];
                case 1761: return [4 /*yield*/, import("react-icons/ri")];
                case 1762:
                    RiSkullFill = (_b.sent()).RiSkullFill;
                    return [2 /*return*/, RiSkullFill];
                case 1763: return [4 /*yield*/, import("react-icons/ri")];
                case 1764:
                    RiSkullLine = (_b.sent()).RiSkullLine;
                    return [2 /*return*/, RiSkullLine];
                case 1765: return [4 /*yield*/, import("react-icons/ri")];
                case 1766:
                    RiSpyFill = (_b.sent()).RiSpyFill;
                    return [2 /*return*/, RiSpyFill];
                case 1767: return [4 /*yield*/, import("react-icons/ri")];
                case 1768:
                    RiSpyLine = (_b.sent()).RiSpyLine;
                    return [2 /*return*/, RiSpyLine];
                case 1769: return [4 /*yield*/, import("react-icons/ri")];
                case 1770:
                    RiStarSmileFill = (_b.sent()).RiStarSmileFill;
                    return [2 /*return*/, RiStarSmileFill];
                case 1771: return [4 /*yield*/, import("react-icons/ri")];
                case 1772:
                    RiStarSmileLine = (_b.sent()).RiStarSmileLine;
                    return [2 /*return*/, RiStarSmileLine];
                case 1773: return [4 /*yield*/, import("react-icons/ri")];
                case 1774:
                    RiTeamFill = (_b.sent()).RiTeamFill;
                    return [2 /*return*/, RiTeamFill];
                case 1775: return [4 /*yield*/, import("react-icons/ri")];
                case 1776:
                    RiTeamLine = (_b.sent()).RiTeamLine;
                    return [2 /*return*/, RiTeamLine];
                case 1777: return [4 /*yield*/, import("react-icons/ri")];
                case 1778:
                    RiTravestiFill = (_b.sent()).RiTravestiFill;
                    return [2 /*return*/, RiTravestiFill];
                case 1779: return [4 /*yield*/, import("react-icons/ri")];
                case 1780:
                    RiTravestiLine = (_b.sent()).RiTravestiLine;
                    return [2 /*return*/, RiTravestiLine];
                case 1781: return [4 /*yield*/, import("react-icons/ri")];
                case 1782:
                    RiUser2Fill = (_b.sent()).RiUser2Fill;
                    return [2 /*return*/, RiUser2Fill];
                case 1783: return [4 /*yield*/, import("react-icons/ri")];
                case 1784:
                    RiUser2Line = (_b.sent()).RiUser2Line;
                    return [2 /*return*/, RiUser2Line];
                case 1785: return [4 /*yield*/, import("react-icons/ri")];
                case 1786:
                    RiUser3Fill = (_b.sent()).RiUser3Fill;
                    return [2 /*return*/, RiUser3Fill];
                case 1787: return [4 /*yield*/, import("react-icons/ri")];
                case 1788:
                    RiUser3Line = (_b.sent()).RiUser3Line;
                    return [2 /*return*/, RiUser3Line];
                case 1789: return [4 /*yield*/, import("react-icons/ri")];
                case 1790:
                    RiUser4Fill = (_b.sent()).RiUser4Fill;
                    return [2 /*return*/, RiUser4Fill];
                case 1791: return [4 /*yield*/, import("react-icons/ri")];
                case 1792:
                    RiUser4Line = (_b.sent()).RiUser4Line;
                    return [2 /*return*/, RiUser4Line];
                case 1793: return [4 /*yield*/, import("react-icons/ri")];
                case 1794:
                    RiUser5Fill = (_b.sent()).RiUser5Fill;
                    return [2 /*return*/, RiUser5Fill];
                case 1795: return [4 /*yield*/, import("react-icons/ri")];
                case 1796:
                    RiUser5Line = (_b.sent()).RiUser5Line;
                    return [2 /*return*/, RiUser5Line];
                case 1797: return [4 /*yield*/, import("react-icons/ri")];
                case 1798:
                    RiUser6Fill = (_b.sent()).RiUser6Fill;
                    return [2 /*return*/, RiUser6Fill];
                case 1799: return [4 /*yield*/, import("react-icons/ri")];
                case 1800:
                    RiUser6Line = (_b.sent()).RiUser6Line;
                    return [2 /*return*/, RiUser6Line];
                case 1801: return [4 /*yield*/, import("react-icons/ri")];
                case 1802:
                    RiUserAddFill = (_b.sent()).RiUserAddFill;
                    return [2 /*return*/, RiUserAddFill];
                case 1803: return [4 /*yield*/, import("react-icons/ri")];
                case 1804:
                    RiUserAddLine = (_b.sent()).RiUserAddLine;
                    return [2 /*return*/, RiUserAddLine];
                case 1805: return [4 /*yield*/, import("react-icons/ri")];
                case 1806:
                    RiUserCommunityFill = (_b.sent()).RiUserCommunityFill;
                    return [2 /*return*/, RiUserCommunityFill];
                case 1807: return [4 /*yield*/, import("react-icons/ri")];
                case 1808:
                    RiUserCommunityLine = (_b.sent()).RiUserCommunityLine;
                    return [2 /*return*/, RiUserCommunityLine];
                case 1809: return [4 /*yield*/, import("react-icons/ri")];
                case 1810:
                    RiUserFill = (_b.sent()).RiUserFill;
                    return [2 /*return*/, RiUserFill];
                case 1811: return [4 /*yield*/, import("react-icons/ri")];
                case 1812:
                    RiUserFollowFill = (_b.sent()).RiUserFollowFill;
                    return [2 /*return*/, RiUserFollowFill];
                case 1813: return [4 /*yield*/, import("react-icons/ri")];
                case 1814:
                    RiUserFollowLine = (_b.sent()).RiUserFollowLine;
                    return [2 /*return*/, RiUserFollowLine];
                case 1815: return [4 /*yield*/, import("react-icons/ri")];
                case 1816:
                    RiUserForbidFill = (_b.sent()).RiUserForbidFill;
                    return [2 /*return*/, RiUserForbidFill];
                case 1817: return [4 /*yield*/, import("react-icons/ri")];
                case 1818:
                    RiUserForbidLine = (_b.sent()).RiUserForbidLine;
                    return [2 /*return*/, RiUserForbidLine];
                case 1819: return [4 /*yield*/, import("react-icons/ri")];
                case 1820:
                    RiUserHeartFill = (_b.sent()).RiUserHeartFill;
                    return [2 /*return*/, RiUserHeartFill];
                case 1821: return [4 /*yield*/, import("react-icons/ri")];
                case 1822:
                    RiUserHeartLine = (_b.sent()).RiUserHeartLine;
                    return [2 /*return*/, RiUserHeartLine];
                case 1823: return [4 /*yield*/, import("react-icons/ri")];
                case 1824:
                    RiUserLine = (_b.sent()).RiUserLine;
                    return [2 /*return*/, RiUserLine];
                case 1825: return [4 /*yield*/, import("react-icons/ri")];
                case 1826:
                    RiUserLocationFill = (_b.sent()).RiUserLocationFill;
                    return [2 /*return*/, RiUserLocationFill];
                case 1827: return [4 /*yield*/, import("react-icons/ri")];
                case 1828:
                    RiUserLocationLine = (_b.sent()).RiUserLocationLine;
                    return [2 /*return*/, RiUserLocationLine];
                case 1829: return [4 /*yield*/, import("react-icons/ri")];
                case 1830:
                    RiUserMinusFill = (_b.sent()).RiUserMinusFill;
                    return [2 /*return*/, RiUserMinusFill];
                case 1831: return [4 /*yield*/, import("react-icons/ri")];
                case 1832:
                    RiUserMinusLine = (_b.sent()).RiUserMinusLine;
                    return [2 /*return*/, RiUserMinusLine];
                case 1833: return [4 /*yield*/, import("react-icons/ri")];
                case 1834:
                    RiUserReceived2Fill = (_b.sent()).RiUserReceived2Fill;
                    return [2 /*return*/, RiUserReceived2Fill];
                case 1835: return [4 /*yield*/, import("react-icons/ri")];
                case 1836:
                    RiUserReceived2Line = (_b.sent()).RiUserReceived2Line;
                    return [2 /*return*/, RiUserReceived2Line];
                case 1837: return [4 /*yield*/, import("react-icons/ri")];
                case 1838:
                    RiUserReceivedFill = (_b.sent()).RiUserReceivedFill;
                    return [2 /*return*/, RiUserReceivedFill];
                case 1839: return [4 /*yield*/, import("react-icons/ri")];
                case 1840:
                    RiUserReceivedLine = (_b.sent()).RiUserReceivedLine;
                    return [2 /*return*/, RiUserReceivedLine];
                case 1841: return [4 /*yield*/, import("react-icons/ri")];
                case 1842:
                    RiUserSearchFill = (_b.sent()).RiUserSearchFill;
                    return [2 /*return*/, RiUserSearchFill];
                case 1843: return [4 /*yield*/, import("react-icons/ri")];
                case 1844:
                    RiUserSearchLine = (_b.sent()).RiUserSearchLine;
                    return [2 /*return*/, RiUserSearchLine];
                case 1845: return [4 /*yield*/, import("react-icons/ri")];
                case 1846:
                    RiUserSettingsFill = (_b.sent()).RiUserSettingsFill;
                    return [2 /*return*/, RiUserSettingsFill];
                case 1847: return [4 /*yield*/, import("react-icons/ri")];
                case 1848:
                    RiUserSettingsLine = (_b.sent()).RiUserSettingsLine;
                    return [2 /*return*/, RiUserSettingsLine];
                case 1849: return [4 /*yield*/, import("react-icons/ri")];
                case 1850:
                    RiUserShared2Fill = (_b.sent()).RiUserShared2Fill;
                    return [2 /*return*/, RiUserShared2Fill];
                case 1851: return [4 /*yield*/, import("react-icons/ri")];
                case 1852:
                    RiUserShared2Line = (_b.sent()).RiUserShared2Line;
                    return [2 /*return*/, RiUserShared2Line];
                case 1853: return [4 /*yield*/, import("react-icons/ri")];
                case 1854:
                    RiUserSharedFill = (_b.sent()).RiUserSharedFill;
                    return [2 /*return*/, RiUserSharedFill];
                case 1855: return [4 /*yield*/, import("react-icons/ri")];
                case 1856:
                    RiUserSharedLine = (_b.sent()).RiUserSharedLine;
                    return [2 /*return*/, RiUserSharedLine];
                case 1857: return [4 /*yield*/, import("react-icons/ri")];
                case 1858:
                    RiUserSmileFill = (_b.sent()).RiUserSmileFill;
                    return [2 /*return*/, RiUserSmileFill];
                case 1859: return [4 /*yield*/, import("react-icons/ri")];
                case 1860:
                    RiUserSmileLine = (_b.sent()).RiUserSmileLine;
                    return [2 /*return*/, RiUserSmileLine];
                case 1861: return [4 /*yield*/, import("react-icons/ri")];
                case 1862:
                    RiUserStarFill = (_b.sent()).RiUserStarFill;
                    return [2 /*return*/, RiUserStarFill];
                case 1863: return [4 /*yield*/, import("react-icons/ri")];
                case 1864:
                    RiUserStarLine = (_b.sent()).RiUserStarLine;
                    return [2 /*return*/, RiUserStarLine];
                case 1865: return [4 /*yield*/, import("react-icons/ri")];
                case 1866:
                    RiUserUnfollowFill = (_b.sent()).RiUserUnfollowFill;
                    return [2 /*return*/, RiUserUnfollowFill];
                case 1867: return [4 /*yield*/, import("react-icons/ri")];
                case 1868:
                    RiUserUnfollowLine = (_b.sent()).RiUserUnfollowLine;
                    return [2 /*return*/, RiUserUnfollowLine];
                case 1869: return [4 /*yield*/, import("react-icons/ri")];
                case 1870:
                    RiUserVoiceFill = (_b.sent()).RiUserVoiceFill;
                    return [2 /*return*/, RiUserVoiceFill];
                case 1871: return [4 /*yield*/, import("react-icons/ri")];
                case 1872:
                    RiUserVoiceLine = (_b.sent()).RiUserVoiceLine;
                    return [2 /*return*/, RiUserVoiceLine];
                case 1873: return [4 /*yield*/, import("react-icons/ri")];
                case 1874:
                    RiWomenFill = (_b.sent()).RiWomenFill;
                    return [2 /*return*/, RiWomenFill];
                case 1875: return [4 /*yield*/, import("react-icons/ri")];
                case 1876:
                    RiWomenLine = (_b.sent()).RiWomenLine;
                    return [2 /*return*/, RiWomenLine];
                case 1877: return [4 /*yield*/, import("react-icons/ri")];
                case 1878:
                    RiBlazeFill = (_b.sent()).RiBlazeFill;
                    return [2 /*return*/, RiBlazeFill];
                case 1879: return [4 /*yield*/, import("react-icons/ri")];
                case 1880:
                    RiBlazeLine = (_b.sent()).RiBlazeLine;
                    return [2 /*return*/, RiBlazeLine];
                case 1881: return [4 /*yield*/, import("react-icons/ri")];
                case 1882:
                    RiCelsiusFill = (_b.sent()).RiCelsiusFill;
                    return [2 /*return*/, RiCelsiusFill];
                case 1883: return [4 /*yield*/, import("react-icons/ri")];
                case 1884:
                    RiCelsiusLine = (_b.sent()).RiCelsiusLine;
                    return [2 /*return*/, RiCelsiusLine];
                case 1885: return [4 /*yield*/, import("react-icons/ri")];
                case 1886:
                    RiCloudWindyFill = (_b.sent()).RiCloudWindyFill;
                    return [2 /*return*/, RiCloudWindyFill];
                case 1887: return [4 /*yield*/, import("react-icons/ri")];
                case 1888:
                    RiCloudWindyLine = (_b.sent()).RiCloudWindyLine;
                    return [2 /*return*/, RiCloudWindyLine];
                case 1889: return [4 /*yield*/, import("react-icons/ri")];
                case 1890:
                    RiCloudy2Fill = (_b.sent()).RiCloudy2Fill;
                    return [2 /*return*/, RiCloudy2Fill];
                case 1891: return [4 /*yield*/, import("react-icons/ri")];
                case 1892:
                    RiCloudy2Line = (_b.sent()).RiCloudy2Line;
                    return [2 /*return*/, RiCloudy2Line];
                case 1893: return [4 /*yield*/, import("react-icons/ri")];
                case 1894:
                    RiCloudyFill = (_b.sent()).RiCloudyFill;
                    return [2 /*return*/, RiCloudyFill];
                case 1895: return [4 /*yield*/, import("react-icons/ri")];
                case 1896:
                    RiCloudyLine = (_b.sent()).RiCloudyLine;
                    return [2 /*return*/, RiCloudyLine];
                case 1897: return [4 /*yield*/, import("react-icons/ri")];
                case 1898:
                    RiDrizzleFill = (_b.sent()).RiDrizzleFill;
                    return [2 /*return*/, RiDrizzleFill];
                case 1899: return [4 /*yield*/, import("react-icons/ri")];
                case 1900:
                    RiDrizzleLine = (_b.sent()).RiDrizzleLine;
                    return [2 /*return*/, RiDrizzleLine];
                case 1901: return [4 /*yield*/, import("react-icons/ri")];
                case 1902:
                    RiEarthquakeFill = (_b.sent()).RiEarthquakeFill;
                    return [2 /*return*/, RiEarthquakeFill];
                case 1903: return [4 /*yield*/, import("react-icons/ri")];
                case 1904:
                    RiEarthquakeLine = (_b.sent()).RiEarthquakeLine;
                    return [2 /*return*/, RiEarthquakeLine];
                case 1905: return [4 /*yield*/, import("react-icons/ri")];
                case 1906:
                    RiFahrenheitFill = (_b.sent()).RiFahrenheitFill;
                    return [2 /*return*/, RiFahrenheitFill];
                case 1907: return [4 /*yield*/, import("react-icons/ri")];
                case 1908:
                    RiFahrenheitLine = (_b.sent()).RiFahrenheitLine;
                    return [2 /*return*/, RiFahrenheitLine];
                case 1909: return [4 /*yield*/, import("react-icons/ri")];
                case 1910:
                    RiFireFill = (_b.sent()).RiFireFill;
                    return [2 /*return*/, RiFireFill];
                case 1911: return [4 /*yield*/, import("react-icons/ri")];
                case 1912:
                    RiFireLine = (_b.sent()).RiFireLine;
                    return [2 /*return*/, RiFireLine];
                case 1913: return [4 /*yield*/, import("react-icons/ri")];
                case 1914:
                    RiFlashlightFill = (_b.sent()).RiFlashlightFill;
                    return [2 /*return*/, RiFlashlightFill];
                case 1915: return [4 /*yield*/, import("react-icons/ri")];
                case 1916:
                    RiFlashlightLine = (_b.sent()).RiFlashlightLine;
                    return [2 /*return*/, RiFlashlightLine];
                case 1917: return [4 /*yield*/, import("react-icons/ri")];
                case 1918:
                    RiFloodFill = (_b.sent()).RiFloodFill;
                    return [2 /*return*/, RiFloodFill];
                case 1919: return [4 /*yield*/, import("react-icons/ri")];
                case 1920:
                    RiFloodLine = (_b.sent()).RiFloodLine;
                    return [2 /*return*/, RiFloodLine];
                case 1921: return [4 /*yield*/, import("react-icons/ri")];
                case 1922:
                    RiFoggyFill = (_b.sent()).RiFoggyFill;
                    return [2 /*return*/, RiFoggyFill];
                case 1923: return [4 /*yield*/, import("react-icons/ri")];
                case 1924:
                    RiFoggyLine = (_b.sent()).RiFoggyLine;
                    return [2 /*return*/, RiFoggyLine];
                case 1925: return [4 /*yield*/, import("react-icons/ri")];
                case 1926:
                    RiHailFill = (_b.sent()).RiHailFill;
                    return [2 /*return*/, RiHailFill];
                case 1927: return [4 /*yield*/, import("react-icons/ri")];
                case 1928:
                    RiHailLine = (_b.sent()).RiHailLine;
                    return [2 /*return*/, RiHailLine];
                case 1929: return [4 /*yield*/, import("react-icons/ri")];
                case 1930:
                    RiHaze2Fill = (_b.sent()).RiHaze2Fill;
                    return [2 /*return*/, RiHaze2Fill];
                case 1931: return [4 /*yield*/, import("react-icons/ri")];
                case 1932:
                    RiHaze2Line = (_b.sent()).RiHaze2Line;
                    return [2 /*return*/, RiHaze2Line];
                case 1933: return [4 /*yield*/, import("react-icons/ri")];
                case 1934:
                    RiHazeFill = (_b.sent()).RiHazeFill;
                    return [2 /*return*/, RiHazeFill];
                case 1935: return [4 /*yield*/, import("react-icons/ri")];
                case 1936:
                    RiHazeLine = (_b.sent()).RiHazeLine;
                    return [2 /*return*/, RiHazeLine];
                case 1937: return [4 /*yield*/, import("react-icons/ri")];
                case 1938:
                    RiHeavyShowersFill = (_b.sent()).RiHeavyShowersFill;
                    return [2 /*return*/, RiHeavyShowersFill];
                case 1939: return [4 /*yield*/, import("react-icons/ri")];
                case 1940:
                    RiHeavyShowersLine = (_b.sent()).RiHeavyShowersLine;
                    return [2 /*return*/, RiHeavyShowersLine];
                case 1941: return [4 /*yield*/, import("react-icons/ri")];
                case 1942:
                    RiMeteorFill = (_b.sent()).RiMeteorFill;
                    return [2 /*return*/, RiMeteorFill];
                case 1943: return [4 /*yield*/, import("react-icons/ri")];
                case 1944:
                    RiMeteorLine = (_b.sent()).RiMeteorLine;
                    return [2 /*return*/, RiMeteorLine];
                case 1945: return [4 /*yield*/, import("react-icons/ri")];
                case 1946:
                    RiMistFill = (_b.sent()).RiMistFill;
                    return [2 /*return*/, RiMistFill];
                case 1947: return [4 /*yield*/, import("react-icons/ri")];
                case 1948:
                    RiMistLine = (_b.sent()).RiMistLine;
                    return [2 /*return*/, RiMistLine];
                case 1949: return [4 /*yield*/, import("react-icons/ri")];
                case 1950:
                    RiMoonClearFill = (_b.sent()).RiMoonClearFill;
                    return [2 /*return*/, RiMoonClearFill];
                case 1951: return [4 /*yield*/, import("react-icons/ri")];
                case 1952:
                    RiMoonClearLine = (_b.sent()).RiMoonClearLine;
                    return [2 /*return*/, RiMoonClearLine];
                case 1953: return [4 /*yield*/, import("react-icons/ri")];
                case 1954:
                    RiMoonCloudyFill = (_b.sent()).RiMoonCloudyFill;
                    return [2 /*return*/, RiMoonCloudyFill];
                case 1955: return [4 /*yield*/, import("react-icons/ri")];
                case 1956:
                    RiMoonCloudyLine = (_b.sent()).RiMoonCloudyLine;
                    return [2 /*return*/, RiMoonCloudyLine];
                case 1957: return [4 /*yield*/, import("react-icons/ri")];
                case 1958:
                    RiMoonFill = (_b.sent()).RiMoonFill;
                    return [2 /*return*/, RiMoonFill];
                case 1959: return [4 /*yield*/, import("react-icons/ri")];
                case 1960:
                    RiMoonFoggyFill = (_b.sent()).RiMoonFoggyFill;
                    return [2 /*return*/, RiMoonFoggyFill];
                case 1961: return [4 /*yield*/, import("react-icons/ri")];
                case 1962:
                    RiMoonFoggyLine = (_b.sent()).RiMoonFoggyLine;
                    return [2 /*return*/, RiMoonFoggyLine];
                case 1963: return [4 /*yield*/, import("react-icons/ri")];
                case 1964:
                    RiMoonLine = (_b.sent()).RiMoonLine;
                    return [2 /*return*/, RiMoonLine];
                case 1965: return [4 /*yield*/, import("react-icons/ri")];
                case 1966:
                    RiRainbowFill = (_b.sent()).RiRainbowFill;
                    return [2 /*return*/, RiRainbowFill];
                case 1967: return [4 /*yield*/, import("react-icons/ri")];
                case 1968:
                    RiRainbowLine = (_b.sent()).RiRainbowLine;
                    return [2 /*return*/, RiRainbowLine];
                case 1969: return [4 /*yield*/, import("react-icons/ri")];
                case 1970:
                    RiRainyFill = (_b.sent()).RiRainyFill;
                    return [2 /*return*/, RiRainyFill];
                case 1971: return [4 /*yield*/, import("react-icons/ri")];
                case 1972:
                    RiRainyLine = (_b.sent()).RiRainyLine;
                    return [2 /*return*/, RiRainyLine];
                case 1973: return [4 /*yield*/, import("react-icons/ri")];
                case 1974:
                    RiShining2Fill = (_b.sent()).RiShining2Fill;
                    return [2 /*return*/, RiShining2Fill];
                case 1975: return [4 /*yield*/, import("react-icons/ri")];
                case 1976:
                    RiShining2Line = (_b.sent()).RiShining2Line;
                    return [2 /*return*/, RiShining2Line];
                case 1977: return [4 /*yield*/, import("react-icons/ri")];
                case 1978:
                    RiShiningFill = (_b.sent()).RiShiningFill;
                    return [2 /*return*/, RiShiningFill];
                case 1979: return [4 /*yield*/, import("react-icons/ri")];
                case 1980:
                    RiShiningLine = (_b.sent()).RiShiningLine;
                    return [2 /*return*/, RiShiningLine];
                case 1981: return [4 /*yield*/, import("react-icons/ri")];
                case 1982:
                    RiShowersFill = (_b.sent()).RiShowersFill;
                    return [2 /*return*/, RiShowersFill];
                case 1983: return [4 /*yield*/, import("react-icons/ri")];
                case 1984:
                    RiShowersLine = (_b.sent()).RiShowersLine;
                    return [2 /*return*/, RiShowersLine];
                case 1985: return [4 /*yield*/, import("react-icons/ri")];
                case 1986:
                    RiSnowflakeFill = (_b.sent()).RiSnowflakeFill;
                    return [2 /*return*/, RiSnowflakeFill];
                case 1987: return [4 /*yield*/, import("react-icons/ri")];
                case 1988:
                    RiSnowflakeLine = (_b.sent()).RiSnowflakeLine;
                    return [2 /*return*/, RiSnowflakeLine];
                case 1989: return [4 /*yield*/, import("react-icons/ri")];
                case 1990:
                    RiSnowyFill = (_b.sent()).RiSnowyFill;
                    return [2 /*return*/, RiSnowyFill];
                case 1991: return [4 /*yield*/, import("react-icons/ri")];
                case 1992:
                    RiSnowyLine = (_b.sent()).RiSnowyLine;
                    return [2 /*return*/, RiSnowyLine];
                case 1993: return [4 /*yield*/, import("react-icons/ri")];
                case 1994:
                    RiSparkling2Fill = (_b.sent()).RiSparkling2Fill;
                    return [2 /*return*/, RiSparkling2Fill];
                case 1995: return [4 /*yield*/, import("react-icons/ri")];
                case 1996:
                    RiSparkling2Line = (_b.sent()).RiSparkling2Line;
                    return [2 /*return*/, RiSparkling2Line];
                case 1997: return [4 /*yield*/, import("react-icons/ri")];
                case 1998:
                    RiSparklingFill = (_b.sent()).RiSparklingFill;
                    return [2 /*return*/, RiSparklingFill];
                case 1999: return [4 /*yield*/, import("react-icons/ri")];
                case 2000:
                    RiSparklingLine = (_b.sent()).RiSparklingLine;
                    return [2 /*return*/, RiSparklingLine];
                case 2001: return [2 /*return*/];
            }
        });
    });
}
