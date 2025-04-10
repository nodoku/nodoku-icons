import type {IconType} from "react-icons";

import {
    MdEmojiFoodBeverage,
    MdEmojiNature,
    MdEmojiObjects,
    MdEmojiPeople,
    MdEmojiSymbols,
    MdEmojiTransportation,
    MdEngineering,
    MdFace2,
    MdFace3,
    MdFace4,
    MdFace5,
    MdFace6,
    MdFacebook,
    MdFemale,
    MdFireplace,
    MdFitbit,
    MdFlood,
    MdFollowTheSigns,
    MdFrontHand,
    MdGirl,
    MdGroupAdd,
    MdGroupOff,
    MdGroupRemove,
    MdGroup,
    MdGroups2,
    MdGroups3,
    MdGroups,
    MdHandshake,
    MdHealthAndSafety,
    MdHeartBroken,
    MdHiking,
    MdHistoryEdu,
    MdHive,
    MdIceSkating,
    MdInterests,
    MdIosShare,
    MdKayaking,
    MdKingBed,
    MdKitesurfing,
    MdLandslide,
    MdLocationCity,
    MdLuggage,
    MdMale,
    MdMan2,
    MdMan3,
    MdMan4,
    MdMan,
    MdMasks,
    MdMilitaryTech,
    MdMoodBad,
    MdMood,
    MdNightsStay,
    MdNoAdultContent,
    MdNoLuggage,
    MdNordicWalking,
    MdNotificationAdd,
    MdNotificationsActive,
    MdNotificationsNone,
    MdNotificationsOff,
    MdNotificationsPaused,
    MdNotifications,
    MdOutdoorGrill,
    MdPages,
    MdParagliding,
    MdPartyMode,
    MdPeopleAlt,
    MdPeopleOutline,
    MdPeople,
    MdPerson2,
    MdPerson3,
    MdPerson4,
    MdPersonAddAlt1,
    MdPersonAddAlt,
    MdPersonAdd,
    MdPersonOff,
    MdPersonOutline,
    MdPersonRemoveAlt1,
    MdPersonRemove,
    MdPerson,
    MdPersonalInjury,
    MdPianoOff,
    MdPiano,
    MdPix,
    MdPlusOne,
    MdPoll,
    MdPrecisionManufacturing,
    MdPsychologyAlt,
    MdPsychology,
    MdPublicOff,
    MdPublic,
    MdRealEstateAgent,
    MdRecommend,
    MdRecycling,
    MdReduceCapacity,
    MdRemoveModerator,
    MdRollerSkating,
    MdSafetyDivider,
    MdSanitizer,
    MdScale,
    MdSchool,
    MdScience,
    MdScoreboard,
    MdScubaDiving,
    MdSelfImprovement,
    MdSentimentDissatisfied,
    MdSentimentNeutral,
    MdSentimentSatisfied,
    MdSentimentVeryDissatisfied,
    MdSentimentVerySatisfied,
    MdSevereCold,
    MdShare,
    MdSick,
    MdSignLanguage,
    MdSingleBed,
    MdSkateboarding,
    MdSledding,
    MdSnowboarding,
    MdSnowshoeing,
    MdSocialDistance,
    MdSouthAmerica,
    MdSportsBaseball,
    MdSportsBasketball,
    MdSportsCricket,
    MdSportsEsports,
    MdSportsFootball,
    MdSportsGolf,
    MdSportsGymnastics,
    MdSportsHandball,
    MdSportsHockey,
    MdSportsKabaddi,
    MdSportsMartialArts,
    MdSportsMma,
    MdSportsMotorsports,
    MdSportsRugby,
    MdSportsSoccer,
    MdSportsTennis,
    MdSportsVolleyball,
    MdSports,
    MdSurfing,
    MdSwitchAccount,
    MdThumbDownAlt,
    MdThumbUpAlt,
    MdThunderstorm,
    MdTornado,
    MdTransgender,
    MdTravelExplore,
    MdTsunami,
    MdVaccines,
    MdVolcano,
    MdWallet,
    MdWaterDrop,
    MdWavingHand,
    MdWhatsapp,
    MdWhatshot,
    MdWoman2,
    MdWoman,
    MdWorkspacePremium,
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdIndeterminateCheckBox,
    MdRadioButtonChecked,
    MdRadioButtonUnchecked,
    MdStarBorderPurple500,
    MdStarBorder,
    MdStarHalf,
    MdStarOutline,
    MdStarPurple500,
    MdStar,
    MdToggleOff,
    MdToggleOn,
    MdFaceUnlock,
    MdBattery20,
    MdBattery30,
    MdBattery50,
    MdBattery60,
    MdBattery80,
    MdBattery90,
    MdBatteryCharging20,
    MdBatteryCharging30,
    MdBatteryCharging50,
    MdBatteryCharging60,
    MdBatteryCharging80,
    MdBatteryCharging90,
    MdSignalCellular1Bar,
    MdSignalCellular2Bar,
    MdSignalCellular3Bar,
    MdSignalCellularConnectedNoInternet1Bar,
    MdSignalCellularConnectedNoInternet2Bar,
    MdSignalCellularConnectedNoInternet3Bar,
    MdSignalWifi1BarLock,
    MdSignalWifi1Bar,
    MdSignalWifi2BarLock,
    MdSignalWifi2Bar,
    MdSignalWifi3BarLock,
    MdSignalWifi3Bar,
    MdSignalWifiConnectedNoInternet0,
    MdSignalWifiConnectedNoInternet1,
    MdSignalWifiConnectedNoInternet2,
    MdSignalWifiConnectedNoInternet3,
    MdSignalWifiStatusbar1Bar,
    MdSignalWifiStatusbar2Bar,
    MdSignalWifiStatusbar3Bar,
    MdSignalWifiStatusbarConnectedNoInternet1,
    MdSignalWifiStatusbarConnectedNoInternet2,
    MdSignalWifiStatusbarConnectedNoInternet3,
    MdSignalWifiStatusbarConnectedNoInternet,
    MdSignalWifiStatusbarNotConnected,
    MdWifiCalling1,
    MdWifiCalling2,
    MdOutline123,
    MdOutline3dRotation,
    MdOutlineAbc,
    MdOutlineAccessibilityNew,
    MdOutlineAccessibility,
    MdOutlineAccessibleForward,
    MdOutlineAccessible,
    MdOutlineAccountBalanceWallet,
    MdOutlineAccountBalance,
    MdOutlineAccountBox,
    MdOutlineAccountCircle,
    MdOutlineAddCard,
    MdOutlineAddHome,
    MdOutlineAddShoppingCart,
    MdOutlineAddTask,
    MdOutlineAddToDrive,
    MdOutlineAddchart,
    MdOutlineAdminPanelSettings,
    MdOutlineAdsClick,
    MdOutlineAlarmAdd,
    MdOutlineAlarmOff,
    MdOutlineAlarmOn,
    MdOutlineAlarm,
    MdOutlineAllInbox,
    MdOutlineAllOut,
    MdOutlineAnalytics,
    MdOutlineAnchor,
    MdOutlineAndroid,
    MdOutlineAnnouncement,
    MdOutlineApi,
    MdOutlineAppBlocking,
    MdOutlineAppShortcut,
    MdOutlineArrowCircleDown,
    MdOutlineArrowCircleLeft,
    MdOutlineArrowCircleRight,
    MdOutlineArrowCircleUp,
    MdOutlineArrowOutward,
    MdOutlineArrowRightAlt,
    MdOutlineArticle,
    MdOutlineAspectRatio,
    MdOutlineAssessment,
    MdOutlineAssignmentInd,
    MdOutlineAssignmentLate,
    MdOutlineAssignmentReturn,
    MdOutlineAssignmentReturned,
    MdOutlineAssignmentTurnedIn,
    MdOutlineAssignment,
    MdOutlineAssuredWorkload,
    MdOutlineAutorenew,
    MdOutlineBackupTable,
    MdOutlineBackup,
    MdOutlineBalance,
    MdOutlineBatchPrediction,
    MdOutlineBookOnline,
    MdOutlineBook,
    MdOutlineBookmarkAdd,
    MdOutlineBookmarkAdded,
    MdOutlineBookmarkBorder,
    MdOutlineBookmarkRemove,
    MdOutlineBookmark,
    MdOutlineBookmarks,
    MdOutlineBrowseGallery,
    MdOutlineBugReport,
    MdOutlineBuildCircle,
    MdOutlineBuild,
    MdOutlineCached,
    MdOutlineCalendarMonth,
    MdOutlineCalendarToday,
    MdOutlineCalendarViewDay,
    MdOutlineCalendarViewMonth,
    MdOutlineCalendarViewWeek,
    MdOutlineCameraEnhance,
    MdOutlineCancelScheduleSend,
    MdOutlineCardGiftcard,
    MdOutlineCardMembership,
    MdOutlineCardTravel,
    MdOutlineChangeHistory,
    MdOutlineCheckCircleOutline,
    MdOutlineCheckCircle,
    MdOutlineChromeReaderMode,
    MdOutlineCircleNotifications,
    MdOutlineClass,
    MdOutlineCloseFullscreen,
    MdOutlineCodeOff,
    MdOutlineCode,
    MdOutlineCommentBank,
    MdOutlineCommit,
    MdOutlineCommute,
    MdOutlineCompareArrows,
    MdOutlineCompress,
    MdOutlineContactPage,
    MdOutlineContactSupport,
    MdOutlineContactless,
    MdOutlineCopyright,
    MdOutlineCreditCardOff,
    MdOutlineCreditCard,
    MdOutlineCss,
    MdOutlineCurrencyExchange,
    MdOutlineDangerous,
    MdOutlineDashboardCustomize,
    MdOutlineDashboard,
    MdOutlineDataExploration,
    MdOutlineDataThresholding,
    MdOutlineDateRange,
    MdOutlineDeleteForever,
    MdOutlineDeleteOutline,
    MdOutlineDelete,
    MdOutlineDensityLarge,
    MdOutlineDensityMedium,
    MdOutlineDensitySmall,
    MdOutlineDescription,
    MdOutlineDisabledByDefault,
    MdOutlineDisabledVisible,
    MdOutlineDisplaySettings,
    MdOutlineDns,
    MdOutlineDoneAll,
    MdOutlineDoneOutline,
    MdOutlineDone,
    MdOutlineDonutLarge,
    MdOutlineDonutSmall,
    MdOutlineDragIndicator,
    MdOutlineDynamicForm,
    MdOutlineEco,
    MdOutlineEditCalendar,
    MdOutlineEditOff,
    MdOutlineEject,
    MdOutlineEuroSymbol,
    MdOutlineEventRepeat,
    MdOutlineEventSeat,
    MdOutlineEvent,
    MdOutlineExitToApp,
    MdOutlineExpand,
    MdOutlineExploreOff,
    MdOutlineExplore,
    MdOutlineExtensionOff,
    MdOutlineExtension,
    MdOutlineFaceUnlock,
    MdOutlineFace,
    MdOutlineFactCheck,
    MdOutlineFavoriteBorder,
    MdOutlineFavorite,
    MdOutlineFax,
    MdOutlineFeedback,
    MdOutlineFilePresent,
    MdOutlineFilterAltOff,
    MdOutlineFilterAlt,
    MdOutlineFindInPage,
    MdOutlineFindReplace,
    MdOutlineFingerprint,
    MdOutlineFitScreen,
    MdOutlineFlaky,
    MdOutlineFlightLand,
    MdOutlineFlightTakeoff,
    MdOutlineFlipToBack,
    MdOutlineFlipToFront,
    MdOutlineFlutterDash,
    MdOutlineFreeCancellation,
    MdOutlineGTranslate,
    MdOutlineGavel,
    MdOutlineGeneratingTokens,
    MdOutlineGetApp,
    MdOutlineGifBox,
    MdOutlineGif,
    MdOutlineGrade,
    MdOutlineGrading,
    MdOutlineGroupWork,
    MdOutlineHelpCenter,
    MdOutlineHelpOutline,
    MdOutlineHelp,
    MdOutlineHideSource,
    MdOutlineHighlightAlt,
    MdOutlineHighlightOff,
    MdOutlineHistoryToggleOff,
    MdOutlineHistory,
    MdOutlineHlsOff,
    MdOutlineHls,
    MdOutlineHome,
    MdOutlineHorizontalSplit,
    MdOutlineHotelClass,
    MdOutlineHourglassDisabled,
    MdOutlineHourglassEmpty,
    MdOutlineHourglassFull,
    MdOutlineHtml,
    MdOutlineHttp,
    MdOutlineHttps,
    MdOutlineImportantDevices,
    MdOutlineInfo,
    MdOutlineInput,
    MdOutlineInstallDesktop,
    MdOutlineInstallMobile,
    MdOutlineIntegrationInstructions,
    MdOutlineInvertColors,
    MdOutlineJavascript,
    MdOutlineJoinFull,
    MdOutlineJoinInner,
    MdOutlineJoinLeft,
    MdOutlineJoinRight,
    MdOutlineLabelImportant,
    MdOutlineLabelOff,
    MdOutlineLabel,
    MdOutlineLanguage,
    MdOutlineLaunch,
    MdOutlineLeaderboard,
    MdOutlineLightbulbCircle,
    MdOutlineLightbulb,
    MdOutlineLineStyle,
    MdOutlineLineWeight,
    MdOutlineList,
    MdOutlineLockClock,
    MdOutlineLockOpen,
    MdOutlineLockPerson,
    MdOutlineLockReset,
    MdOutlineLock,
    MdOutlineLogin,
    MdOutlineLogout,
    MdOutlineLoyalty,
    MdOutlineManageAccounts,
    MdOutlineManageHistory,
    MdOutlineMarkAsUnread,
    MdOutlineMarkunreadMailbox,
    MdOutlineMaximize,
    MdOutlineMediation,
    MdOutlineMinimize,
    MdOutlineModelTraining,
    MdOutlineNetworkPing,
    MdOutlineNewLabel,
    MdOutlineNextPlan,
    MdOutlineNightlightRound,
    MdOutlineNoAccounts,
    MdOutlineNoiseAware,
    MdOutlineNoiseControlOff,
    MdOutlineNotAccessible,
    MdOutlineNotStarted,
    MdOutlineNoteAdd,
    MdOutlineOfflineBolt,
    MdOutlineOfflinePin,
    MdOutlineOnDeviceTraining,
    MdOutlineOnlinePrediction,
    MdOutlineOpacity,
    MdOutlineOpenInBrowser,
    MdOutlineOpenInFull,
    MdOutlineOpenInNewOff,
    MdOutlineOpenInNew,
    MdOutlineOpenWith,
    MdOutlineOutbond,
    MdOutlineOutbound,
    MdOutlineOutbox,
    MdOutlineOutlet,
    MdOutlineOutput,
    MdOutlinePageview,
    MdOutlinePaid,
    MdOutlinePanToolAlt,
    MdOutlinePanTool,
    MdOutlinePayment,
    MdOutlinePendingActions,
    MdOutlinePending,
    MdOutlinePercent,
    MdOutlinePermCameraMic,
    MdOutlinePermContactCalendar,
    MdOutlinePermDataSetting,
    MdOutlinePermDeviceInformation,
    MdOutlinePermIdentity,
    MdOutlinePermMedia,
    MdOutlinePermPhoneMsg,
    MdOutlinePermScanWifi,
    MdOutlinePets,
    MdOutlinePhp,
    MdOutlinePictureInPictureAlt,
    MdOutlinePictureInPicture,
    MdOutlinePinEnd,
    MdOutlinePinInvoke,
    MdOutlinePinch,
    MdOutlinePlagiarism,
    MdOutlinePlayForWork,
    MdOutlinePolymer,
    MdOutlinePowerSettingsNew,
    MdOutlinePregnantWoman,
    MdOutlinePreview,
    MdOutlinePrint,
    MdOutlinePrivacyTip,
    MdOutlinePrivateConnectivity,
    MdOutlineProductionQuantityLimits,
    MdOutlinePublishedWithChanges,
    MdOutlineQueryBuilder,
    MdOutlineQuestionAnswer,
    MdOutlineQuestionMark,
    MdOutlineQuickreply,
    MdOutlineReceipt,
    MdOutlineRecordVoiceOver,
    MdOutlineRedeem,
    MdOutlineRemoveDone,
    MdOutlineRemoveShoppingCart,
    MdOutlineReorder,
    MdOutlineRepartition,
    MdOutlineReportProblem,
    MdOutlineRequestPage,
    MdOutlineRestoreFromTrash,
    MdOutlineRestorePage,
    MdOutlineRestore,
    MdOutlineRocketLaunch,
    MdOutlineRocket,
    MdOutlineRoom,
    MdOutlineRoundedCorner,
    MdOutlineRowing,
    MdOutlineRule,
    MdOutlineSatelliteAlt,
    MdOutlineSavedSearch,
    MdOutlineSavings,
    MdOutlineScheduleSend,
    MdOutlineSchedule,
    MdOutlineSearchOff,
    MdOutlineSearch,
    MdOutlineSegment,
    MdOutlineSendAndArchive,
    MdOutlineSensorsOff,
    MdOutlineSensors,
    MdOutlineSettingsAccessibility,
    MdOutlineSettingsApplications,
    MdOutlineSettingsBackupRestore,
    MdOutlineSettingsBluetooth,
    MdOutlineSettingsBrightness,
    MdOutlineSettingsCell,
    MdOutlineSettingsEthernet,
    MdOutlineSettingsInputAntenna,
    MdOutlineSettingsInputComponent,
    MdOutlineSettingsInputComposite,
    MdOutlineSettingsInputHdmi,
    MdOutlineSettingsInputSvideo,
    MdOutlineSettingsOverscan,
    MdOutlineSettingsPhone,
    MdOutlineSettingsPower,
    MdOutlineSettingsRemote,
    MdOutlineSettingsVoice,
    MdOutlineSettings,
    MdOutlineShop2,
    MdOutlineShopTwo,
    MdOutlineShop,
    MdOutlineShoppingBag,
    MdOutlineShoppingBasket,
    MdOutlineShoppingCartCheckout,
    MdOutlineShoppingCart,
    MdOutlineSmartButton,
    MdOutlineSource,
    MdOutlineSpaceDashboard,
    MdOutlineSpatialAudioOff,
    MdOutlineSpatialAudio,
    MdOutlineSpatialTracking,
    MdOutlineSpeakerNotesOff,
    MdOutlineSpeakerNotes,
    MdOutlineSpellcheck,
    MdOutlineStarRate,
    MdOutlineStars,
    MdOutlineStickyNote2,
    MdOutlineStore,
    MdOutlineSubject,
    MdOutlineSubtitlesOff,
    MdOutlineSupervisedUserCircle,
    MdOutlineSupervisorAccount,
    MdOutlineSupport,
    MdOutlineSwapHoriz,
    MdOutlineSwapHorizontalCircle,
    MdOutlineSwapVert,
    MdOutlineSwapVerticalCircle,
    MdOutlineSwipeDownAlt,
    MdOutlineSwipeDown,
    MdOutlineSwipeLeftAlt,
    MdOutlineSwipeLeft,
    MdOutlineSwipeRightAlt,
    MdOutlineSwipeRight,
    MdOutlineSwipeUpAlt,
    MdOutlineSwipeUp,
    MdOutlineSwipeVertical,
    MdOutlineSwipe,
    MdOutlineSwitchAccessShortcutAdd,
    MdOutlineSwitchAccessShortcut,
    MdOutlineSyncAlt,
    MdOutlineSystemUpdateAlt,
    MdOutlineTabUnselected,
    MdOutlineTab,
    MdOutlineTableView,
    MdOutlineTaskAlt,
    MdOutlineTerminal,
    MdOutlineTextRotateUp,
    MdOutlineTextRotateVertical,
    MdOutlineTextRotationAngledown,
    MdOutlineTextRotationAngleup,
    MdOutlineTextRotationDown,
    MdOutlineTextRotationNone,
    MdOutlineTheaters,
    MdOutlineThumbDownOffAlt,
    MdOutlineThumbDown,
    MdOutlineThumbUpOffAlt,
    MdOutlineThumbUp,
    MdOutlineThumbsUpDown,
    MdOutlineTimeline,
    MdOutlineTipsAndUpdates,
    MdOutlineToc,
    MdOutlineToday,
    MdOutlineToken,
    MdOutlineToll,
    MdOutlineTouchApp,
    MdOutlineTour,
    MdOutlineTrackChanges,
    MdOutlineTranscribe,
    MdOutlineTranslate,
    MdOutlineTrendingDown,
    MdOutlineTrendingFlat,
    MdOutlineTrendingUp,
    MdOutlineTroubleshoot,
    MdOutlineTry,
    MdOutlineTurnedInNot,
    MdOutlineTurnedIn,
    MdOutlineUnfoldLessDouble,
    MdOutlineUnfoldMoreDouble,
    MdOutlineUnpublished,
    MdOutlineUpdateDisabled,
    MdOutlineUpdate,
    MdOutlineUpgrade,
    MdOutlineVerifiedUser,
    MdOutlineVerified,
    MdOutlineVerticalSplit,
    MdOutlineViewAgenda,
    MdOutlineViewArray,
    MdOutlineViewCarousel,
    MdOutlineViewColumn,
    MdOutlineViewComfyAlt,
    MdOutlineViewCompactAlt,
    MdOutlineViewCozy,
    MdOutlineViewDay,
    MdOutlineViewHeadline,
    MdOutlineViewInAr,
    MdOutlineViewKanban,
    MdOutlineViewList,
    MdOutlineViewModule,
    MdOutlineViewQuilt,
    MdOutlineViewSidebar,
    MdOutlineViewStream,
    MdOutlineViewTimeline,
    MdOutlineViewWeek,
    MdOutlineVisibilityOff,
    MdOutlineVisibility,
    MdOutlineVoiceOverOff,
    MdOutlineWatchLater,
    MdOutlineWebhook,
    MdOutlineWidthFull,
    MdOutlineWidthNormal,
    MdOutlineWidthWide,
    MdOutlineWifiProtectedSetup,
    MdOutlineWorkHistory,
    MdOutlineWorkOff,
    MdOutlineWorkOutline,
    MdOutlineWork,
    MdOutlineWysiwyg,
    MdOutlineYoutubeSearchedFor,
    MdOutlineZoomIn,
    MdOutlineZoomOut,
    MdOutlineAddAlert,
    MdOutlineAutoDelete,
    MdOutlineErrorOutline,
    MdOutlineError,
    MdOutlineNotificationImportant,
    MdOutlineWarningAmber,
    MdOutlineWarning,
    MdOutline10K,
    MdOutline1kPlus,
    MdOutline1K,
    MdOutline2kPlus,
    MdOutline2K,
    MdOutline3kPlus,
    MdOutline3K,
    MdOutline4kPlus,
    MdOutline4K,
    MdOutline5G,
    MdOutline5kPlus,
    MdOutline5K,
    MdOutline6kPlus,
    MdOutline6K,
    MdOutline7kPlus,
    MdOutline7K,
    MdOutline8kPlus,
    MdOutline8K,
    MdOutline9kPlus,
    MdOutline9K,
    MdOutlineAddToQueue,
    MdOutlineAirplay,
    MdOutlineAlbum,
    MdOutlineArtTrack,
    MdOutlineAudioFile,
    MdOutlineAvTimer,
    MdOutlineBrandingWatermark,
    MdOutlineCallToAction,
    MdOutlineClosedCaptionDisabled,
    MdOutlineClosedCaptionOff,
    MdOutlineClosedCaption,
    MdOutlineControlCamera,
    MdOutlineEqualizer,
    MdOutlineExplicit,
    MdOutlineFastForward,
    MdOutlineFastRewind,
    MdOutlineFeaturedPlayList,
    MdOutlineFeaturedVideo,
    MdOutlineFiberDvr,
    MdOutlineFiberManualRecord,
    MdOutlineFiberNew,
    MdOutlineFiberPin,
    MdOutlineFiberSmartRecord,
    MdOutlineForward10,
    MdOutlineForward30,
    MdOutlineForward5,
    MdOutlineGames,
    MdOutlineHd,
    MdOutlineHearingDisabled,
    MdOutlineHearing,
    MdOutlineHighQuality,
    MdOutlineInterpreterMode,
    MdOutlineLibraryAddCheck,
    MdOutlineLibraryAdd,
    MdOutlineLibraryBooks,
    MdOutlineLibraryMusic,
    MdOutlineLoop,
    MdOutlineLyrics,
    MdOutlineMicNone,
    MdOutlineMicOff,
    MdOutlineMic,
    MdOutlineMissedVideoCall,
    MdOutlineMovie,
    MdOutlineMusicVideo,
    MdOutlineNewReleases,
    MdOutlineNotInterested,
    MdOutlineNote,
    MdOutlinePauseCircleFilled,
    MdOutlinePauseCircleOutline,
    MdOutlinePauseCircle,
    MdOutlinePause,
    MdOutlinePlayArrow,
    MdOutlinePlayCircleFilled,
    MdOutlinePlayCircleOutline,
    MdOutlinePlayCircle,
    MdOutlinePlayDisabled,
    MdOutlinePlaylistAddCheckCircle,
    MdOutlinePlaylistAddCheck,
    MdOutlinePlaylistAddCircle,
    MdOutlinePlaylistAdd,
    MdOutlinePlaylistPlay,
    MdOutlinePlaylistRemove,
    MdOutlineQueueMusic,
    MdOutlineQueuePlayNext,
    MdOutlineQueue,
    MdOutlineRadio,
    MdOutlineRecentActors,
    MdOutlineRemoveFromQueue,
    MdOutlineRepeatOn,
    MdOutlineRepeatOneOn,
    MdOutlineRepeatOne,
    MdOutlineRepeat,
    MdOutlineReplay10,
    MdOutlineReplay30,
    MdOutlineReplay5,
    MdOutlineReplayCircleFilled,
    MdOutlineReplay,
    MdOutlineSd,
    MdOutlineShuffleOn,
    MdOutlineShuffle,
    MdOutlineSkipNext,
    MdOutlineSkipPrevious,
    MdOutlineSlowMotionVideo,
    MdOutlineSnooze,
    MdOutlineSortByAlpha,
    MdOutlineSpeed,
    MdOutlineStopCircle,
    MdOutlineStop,
    MdOutlineSubscriptions,
    MdOutlineSubtitles,
    MdOutlineSurroundSound,
    MdOutlineVideoCall,
    MdOutlineVideoFile,
    MdOutlineVideoLabel,
    MdOutlineVideoLibrary,
    MdOutlineVideoSettings,
    MdOutlineVideocamOff,
    MdOutlineVideocam,
    MdOutlineVolumeDown,
    MdOutlineVolumeMute,
    MdOutlineVolumeOff,
    MdOutlineVolumeUp,
    MdOutlineWebAssetOff,
    MdOutlineWebAsset,
    MdOutlineWeb,
    MdOutline3P,
    MdOutlineAddIcCall,
    MdOutlineAlternateEmail,
    MdOutlineAppRegistration,
    MdOutlineBusiness,
    MdOutlineCallEnd,
    MdOutlineCallMade,
    MdOutlineCallMerge,
    MdOutlineCallMissedOutgoing,
    MdOutlineCallMissed,
    MdOutlineCallReceived,
    MdOutlineCallSplit,
    MdOutlineCall,
    MdOutlineCancelPresentation,
    MdOutlineCellTower,
    MdOutlineCellWifi,
    MdOutlineChatBubbleOutline,
    MdOutlineChatBubble,
    MdOutlineChat,
    MdOutlineClearAll,
    MdOutlineCoPresent,
    MdOutlineComment,
    MdOutlineCommentsDisabled,
    MdOutlineContactEmergency,
    MdOutlineContactMail,
    MdOutlineContactPhone,
    MdOutlineContacts,
    MdOutlineDesktopAccessDisabled,
    MdOutlineDialerSip,
    MdOutlineDialpad,
    MdOutlineDocumentScanner,
    MdOutlineDomainDisabled,
    MdOutlineDomainVerification,
    MdOutlineDuo,
    MdOutlineEmail,
    MdOutlineForum,
    MdOutlineForwardToInbox,
    MdOutlineHourglassBottom,
    MdOutlineHourglassTop,
    MdOutlineHub,
    MdOutlineImportContacts,
    MdOutlineImportExport,
    MdOutlineInvertColorsOff,
    MdOutlineKeyOff,
    MdOutlineKey,
    MdOutlineListAlt,
    MdOutlineLiveHelp,
    MdOutlineLocationOff,
    MdOutlineLocationOn,
    MdOutlineMailLock,
    MdOutlineMailOutline,
    MdOutlineMarkChatRead,
    MdOutlineMarkChatUnread,
    MdOutlineMarkEmailRead,
    MdOutlineMarkEmailUnread,
    MdOutlineMarkUnreadChatAlt,
    MdOutlineMessage,
    MdOutlineMobileScreenShare,
    MdOutlineMoreTime,
    MdOutlineNat,
    MdOutlineNoSim,
    MdOutlinePausePresentation,
    MdOutlinePersonAddDisabled,
    MdOutlinePersonSearch,
    MdOutlinePhoneDisabled,
    MdOutlinePhoneEnabled,
    MdOutlinePhone,
    MdOutlinePhonelinkErase,
    MdOutlinePhonelinkLock,
    MdOutlinePhonelinkRing,
    MdOutlinePhonelinkSetup,
    MdOutlinePortableWifiOff,
    MdOutlinePresentToAll,
    MdOutlinePrintDisabled,
    MdOutlineQrCode2,
    MdOutlineQrCodeScanner,
    MdOutlineQrCode,
    MdOutlineReadMore,
    MdOutlineRingVolume,
    MdOutlineRssFeed,
    MdOutlineRtt,
    MdOutlineScreenShare,
    MdOutlineSendTimeExtension,
    MdOutlineSentimentSatisfiedAlt,
    MdOutlineSip,
    MdOutlineSpeakerPhone,
    MdOutlineSpoke,
    MdOutlineStayCurrentLandscape,
    MdOutlineStayCurrentPortrait,
    MdOutlineStayPrimaryLandscape,
    MdOutlineStayPrimaryPortrait,
    MdOutlineStopScreenShare,
    MdOutlineSwapCalls,
    MdOutlineTextsms,
    MdOutlineUnsubscribe,
    MdOutlineVoicemail,
    MdOutlineVpnKeyOff,
    MdOutlineVpnKey,
    MdOutlineWifiCalling,
    MdOutlineAddBox,
    MdOutlineAddCircleOutline,
    MdOutlineAddCircle,
    MdOutlineAddLink,
    MdOutlineAdd,
    MdOutlineAmpStories,
    MdOutlineArchive,
    MdOutlineAttribution,
    MdOutlineBackspace,
    MdOutlineBallot,
    MdOutlineBiotech,
    MdOutlineBlock,
    MdOutlineBolt,
    MdOutlineCalculate,
    MdOutlineChangeCircle,
    MdOutlineClear,
    MdOutlineContentCopy,
    MdOutlineContentCut,
    MdOutlineContentPasteGo,
    MdOutlineContentPasteOff,
    MdOutlineContentPasteSearch,
    MdOutlineContentPaste,
    MdOutlineCopyAll,
    MdOutlineCreate,
    MdOutlineDeleteSweep,
    MdOutlineDeselect,
    MdOutlineDrafts,
    MdOutlineDynamicFeed,
    MdOutlineFileCopy,
    MdOutlineFilterListOff,
    MdOutlineFilterList,
    MdOutlineFlagCircle,
    MdOutlineFlag,
    MdOutlineFontDownloadOff,
    MdOutlineFontDownload,
    MdOutlineForward,
    MdOutlineGesture,
    MdOutlineHowToReg,
    MdOutlineHowToVote,
    MdOutlineInbox,
    MdOutlineInsights,
    MdOutlineInventory2,
    MdOutlineInventory,
    MdOutlineLinkOff,
    MdOutlineLink,
    MdOutlineLowPriority,
    MdOutlineMail,
    MdOutlineMarkunread,
    MdOutlineMoveToInbox,
    MdOutlineNextWeek,
    MdOutlineOutlinedFlag,
    MdOutlinePolicy,
    MdOutlinePushPin,
    MdOutlineRedo,
    MdOutlineRemoveCircleOutline,
    MdOutlineRemoveCircle,
    MdOutlineRemove,
    MdOutlineReplyAll,
    MdOutlineReply,
    MdOutlineReportGmailerrorred,
    MdOutlineReportOff,
    MdOutlineReport,
    MdOutlineSaveAlt,
    MdOutlineSaveAs,
    MdOutlineSave,
    MdOutlineSelectAll,
    MdOutlineSend,
    MdOutlineShield,
    MdOutlineSort,
    MdOutlineSquareFoot,
    MdOutlineStackedBarChart,
    MdOutlineStream,
    MdOutlineTag,
    MdOutlineTextFormat,
    MdOutlineUnarchive,
    MdOutlineUndo,
    MdOutlineUpcoming,
    MdOutlineWaves,
    MdOutlineWebStories,
    MdOutlineWeekend,
    MdOutlineWhereToVote,
    MdOutline1xMobiledata,
    MdOutline30Fps,
    MdOutline3gMobiledata,
    MdOutline4gMobiledata,
    MdOutline4gPlusMobiledata,
    MdOutline60Fps,
    MdOutlineAccessAlarm,
    MdOutlineAccessAlarms,
    MdOutlineAccessTimeFilled,
    MdOutlineAccessTime,
    MdOutlineAdUnits,
    MdOutlineAddAlarm,
    MdOutlineAddToHomeScreen,
    MdOutlineAir,
    MdOutlineAirplaneTicket,
    MdOutlineAirplanemodeActive,
    MdOutlineAirplanemodeInactive,
    MdOutlineAod,
    MdOutlineBattery0Bar,
    MdOutlineBattery1Bar,
    MdOutlineBattery2Bar,
    MdOutlineBattery3Bar,
    MdOutlineBattery4Bar,
} from "react-icons/md"

export function nameToReactIcon_md_2(iconName: string): IconType | undefined {

    switch(iconName) {
        case "md:MdEmojiFoodBeverage":
            return MdEmojiFoodBeverage;
        case "md:MdEmojiNature":
            return MdEmojiNature;
        case "md:MdEmojiObjects":
            return MdEmojiObjects;
        case "md:MdEmojiPeople":
            return MdEmojiPeople;
        case "md:MdEmojiSymbols":
            return MdEmojiSymbols;
        case "md:MdEmojiTransportation":
            return MdEmojiTransportation;
        case "md:MdEngineering":
            return MdEngineering;
        case "md:MdFace2":
            return MdFace2;
        case "md:MdFace3":
            return MdFace3;
        case "md:MdFace4":
            return MdFace4;
        case "md:MdFace5":
            return MdFace5;
        case "md:MdFace6":
            return MdFace6;
        case "md:MdFacebook":
            return MdFacebook;
        case "md:MdFemale":
            return MdFemale;
        case "md:MdFireplace":
            return MdFireplace;
        case "md:MdFitbit":
            return MdFitbit;
        case "md:MdFlood":
            return MdFlood;
        case "md:MdFollowTheSigns":
            return MdFollowTheSigns;
        case "md:MdFrontHand":
            return MdFrontHand;
        case "md:MdGirl":
            return MdGirl;
        case "md:MdGroupAdd":
            return MdGroupAdd;
        case "md:MdGroupOff":
            return MdGroupOff;
        case "md:MdGroupRemove":
            return MdGroupRemove;
        case "md:MdGroup":
            return MdGroup;
        case "md:MdGroups2":
            return MdGroups2;
        case "md:MdGroups3":
            return MdGroups3;
        case "md:MdGroups":
            return MdGroups;
        case "md:MdHandshake":
            return MdHandshake;
        case "md:MdHealthAndSafety":
            return MdHealthAndSafety;
        case "md:MdHeartBroken":
            return MdHeartBroken;
        case "md:MdHiking":
            return MdHiking;
        case "md:MdHistoryEdu":
            return MdHistoryEdu;
        case "md:MdHive":
            return MdHive;
        case "md:MdIceSkating":
            return MdIceSkating;
        case "md:MdInterests":
            return MdInterests;
        case "md:MdIosShare":
            return MdIosShare;
        case "md:MdKayaking":
            return MdKayaking;
        case "md:MdKingBed":
            return MdKingBed;
        case "md:MdKitesurfing":
            return MdKitesurfing;
        case "md:MdLandslide":
            return MdLandslide;
        case "md:MdLocationCity":
            return MdLocationCity;
        case "md:MdLuggage":
            return MdLuggage;
        case "md:MdMale":
            return MdMale;
        case "md:MdMan2":
            return MdMan2;
        case "md:MdMan3":
            return MdMan3;
        case "md:MdMan4":
            return MdMan4;
        case "md:MdMan":
            return MdMan;
        case "md:MdMasks":
            return MdMasks;
        case "md:MdMilitaryTech":
            return MdMilitaryTech;
        case "md:MdMoodBad":
            return MdMoodBad;
        case "md:MdMood":
            return MdMood;
        case "md:MdNightsStay":
            return MdNightsStay;
        case "md:MdNoAdultContent":
            return MdNoAdultContent;
        case "md:MdNoLuggage":
            return MdNoLuggage;
        case "md:MdNordicWalking":
            return MdNordicWalking;
        case "md:MdNotificationAdd":
            return MdNotificationAdd;
        case "md:MdNotificationsActive":
            return MdNotificationsActive;
        case "md:MdNotificationsNone":
            return MdNotificationsNone;
        case "md:MdNotificationsOff":
            return MdNotificationsOff;
        case "md:MdNotificationsPaused":
            return MdNotificationsPaused;
        case "md:MdNotifications":
            return MdNotifications;
        case "md:MdOutdoorGrill":
            return MdOutdoorGrill;
        case "md:MdPages":
            return MdPages;
        case "md:MdParagliding":
            return MdParagliding;
        case "md:MdPartyMode":
            return MdPartyMode;
        case "md:MdPeopleAlt":
            return MdPeopleAlt;
        case "md:MdPeopleOutline":
            return MdPeopleOutline;
        case "md:MdPeople":
            return MdPeople;
        case "md:MdPerson2":
            return MdPerson2;
        case "md:MdPerson3":
            return MdPerson3;
        case "md:MdPerson4":
            return MdPerson4;
        case "md:MdPersonAddAlt1":
            return MdPersonAddAlt1;
        case "md:MdPersonAddAlt":
            return MdPersonAddAlt;
        case "md:MdPersonAdd":
            return MdPersonAdd;
        case "md:MdPersonOff":
            return MdPersonOff;
        case "md:MdPersonOutline":
            return MdPersonOutline;
        case "md:MdPersonRemoveAlt1":
            return MdPersonRemoveAlt1;
        case "md:MdPersonRemove":
            return MdPersonRemove;
        case "md:MdPerson":
            return MdPerson;
        case "md:MdPersonalInjury":
            return MdPersonalInjury;
        case "md:MdPianoOff":
            return MdPianoOff;
        case "md:MdPiano":
            return MdPiano;
        case "md:MdPix":
            return MdPix;
        case "md:MdPlusOne":
            return MdPlusOne;
        case "md:MdPoll":
            return MdPoll;
        case "md:MdPrecisionManufacturing":
            return MdPrecisionManufacturing;
        case "md:MdPsychologyAlt":
            return MdPsychologyAlt;
        case "md:MdPsychology":
            return MdPsychology;
        case "md:MdPublicOff":
            return MdPublicOff;
        case "md:MdPublic":
            return MdPublic;
        case "md:MdRealEstateAgent":
            return MdRealEstateAgent;
        case "md:MdRecommend":
            return MdRecommend;
        case "md:MdRecycling":
            return MdRecycling;
        case "md:MdReduceCapacity":
            return MdReduceCapacity;
        case "md:MdRemoveModerator":
            return MdRemoveModerator;
        case "md:MdRollerSkating":
            return MdRollerSkating;
        case "md:MdSafetyDivider":
            return MdSafetyDivider;
        case "md:MdSanitizer":
            return MdSanitizer;
        case "md:MdScale":
            return MdScale;
        case "md:MdSchool":
            return MdSchool;
        case "md:MdScience":
            return MdScience;
        case "md:MdScoreboard":
            return MdScoreboard;
        case "md:MdScubaDiving":
            return MdScubaDiving;
        case "md:MdSelfImprovement":
            return MdSelfImprovement;
        case "md:MdSentimentDissatisfied":
            return MdSentimentDissatisfied;
        case "md:MdSentimentNeutral":
            return MdSentimentNeutral;
        case "md:MdSentimentSatisfied":
            return MdSentimentSatisfied;
        case "md:MdSentimentVeryDissatisfied":
            return MdSentimentVeryDissatisfied;
        case "md:MdSentimentVerySatisfied":
            return MdSentimentVerySatisfied;
        case "md:MdSevereCold":
            return MdSevereCold;
        case "md:MdShare":
            return MdShare;
        case "md:MdSick":
            return MdSick;
        case "md:MdSignLanguage":
            return MdSignLanguage;
        case "md:MdSingleBed":
            return MdSingleBed;
        case "md:MdSkateboarding":
            return MdSkateboarding;
        case "md:MdSledding":
            return MdSledding;
        case "md:MdSnowboarding":
            return MdSnowboarding;
        case "md:MdSnowshoeing":
            return MdSnowshoeing;
        case "md:MdSocialDistance":
            return MdSocialDistance;
        case "md:MdSouthAmerica":
            return MdSouthAmerica;
        case "md:MdSportsBaseball":
            return MdSportsBaseball;
        case "md:MdSportsBasketball":
            return MdSportsBasketball;
        case "md:MdSportsCricket":
            return MdSportsCricket;
        case "md:MdSportsEsports":
            return MdSportsEsports;
        case "md:MdSportsFootball":
            return MdSportsFootball;
        case "md:MdSportsGolf":
            return MdSportsGolf;
        case "md:MdSportsGymnastics":
            return MdSportsGymnastics;
        case "md:MdSportsHandball":
            return MdSportsHandball;
        case "md:MdSportsHockey":
            return MdSportsHockey;
        case "md:MdSportsKabaddi":
            return MdSportsKabaddi;
        case "md:MdSportsMartialArts":
            return MdSportsMartialArts;
        case "md:MdSportsMma":
            return MdSportsMma;
        case "md:MdSportsMotorsports":
            return MdSportsMotorsports;
        case "md:MdSportsRugby":
            return MdSportsRugby;
        case "md:MdSportsSoccer":
            return MdSportsSoccer;
        case "md:MdSportsTennis":
            return MdSportsTennis;
        case "md:MdSportsVolleyball":
            return MdSportsVolleyball;
        case "md:MdSports":
            return MdSports;
        case "md:MdSurfing":
            return MdSurfing;
        case "md:MdSwitchAccount":
            return MdSwitchAccount;
        case "md:MdThumbDownAlt":
            return MdThumbDownAlt;
        case "md:MdThumbUpAlt":
            return MdThumbUpAlt;
        case "md:MdThunderstorm":
            return MdThunderstorm;
        case "md:MdTornado":
            return MdTornado;
        case "md:MdTransgender":
            return MdTransgender;
        case "md:MdTravelExplore":
            return MdTravelExplore;
        case "md:MdTsunami":
            return MdTsunami;
        case "md:MdVaccines":
            return MdVaccines;
        case "md:MdVolcano":
            return MdVolcano;
        case "md:MdWallet":
            return MdWallet;
        case "md:MdWaterDrop":
            return MdWaterDrop;
        case "md:MdWavingHand":
            return MdWavingHand;
        case "md:MdWhatsapp":
            return MdWhatsapp;
        case "md:MdWhatshot":
            return MdWhatshot;
        case "md:MdWoman2":
            return MdWoman2;
        case "md:MdWoman":
            return MdWoman;
        case "md:MdWorkspacePremium":
            return MdWorkspacePremium;
        case "md:MdCheckBoxOutlineBlank":
            return MdCheckBoxOutlineBlank;
        case "md:MdCheckBox":
            return MdCheckBox;
        case "md:MdIndeterminateCheckBox":
            return MdIndeterminateCheckBox;
        case "md:MdRadioButtonChecked":
            return MdRadioButtonChecked;
        case "md:MdRadioButtonUnchecked":
            return MdRadioButtonUnchecked;
        case "md:MdStarBorderPurple500":
            return MdStarBorderPurple500;
        case "md:MdStarBorder":
            return MdStarBorder;
        case "md:MdStarHalf":
            return MdStarHalf;
        case "md:MdStarOutline":
            return MdStarOutline;
        case "md:MdStarPurple500":
            return MdStarPurple500;
        case "md:MdStar":
            return MdStar;
        case "md:MdToggleOff":
            return MdToggleOff;
        case "md:MdToggleOn":
            return MdToggleOn;
        case "md:MdFaceUnlock":
            return MdFaceUnlock;
        case "md:MdBattery20":
            return MdBattery20;
        case "md:MdBattery30":
            return MdBattery30;
        case "md:MdBattery50":
            return MdBattery50;
        case "md:MdBattery60":
            return MdBattery60;
        case "md:MdBattery80":
            return MdBattery80;
        case "md:MdBattery90":
            return MdBattery90;
        case "md:MdBatteryCharging20":
            return MdBatteryCharging20;
        case "md:MdBatteryCharging30":
            return MdBatteryCharging30;
        case "md:MdBatteryCharging50":
            return MdBatteryCharging50;
        case "md:MdBatteryCharging60":
            return MdBatteryCharging60;
        case "md:MdBatteryCharging80":
            return MdBatteryCharging80;
        case "md:MdBatteryCharging90":
            return MdBatteryCharging90;
        case "md:MdSignalCellular1Bar":
            return MdSignalCellular1Bar;
        case "md:MdSignalCellular2Bar":
            return MdSignalCellular2Bar;
        case "md:MdSignalCellular3Bar":
            return MdSignalCellular3Bar;
        case "md:MdSignalCellularConnectedNoInternet1Bar":
            return MdSignalCellularConnectedNoInternet1Bar;
        case "md:MdSignalCellularConnectedNoInternet2Bar":
            return MdSignalCellularConnectedNoInternet2Bar;
        case "md:MdSignalCellularConnectedNoInternet3Bar":
            return MdSignalCellularConnectedNoInternet3Bar;
        case "md:MdSignalWifi1BarLock":
            return MdSignalWifi1BarLock;
        case "md:MdSignalWifi1Bar":
            return MdSignalWifi1Bar;
        case "md:MdSignalWifi2BarLock":
            return MdSignalWifi2BarLock;
        case "md:MdSignalWifi2Bar":
            return MdSignalWifi2Bar;
        case "md:MdSignalWifi3BarLock":
            return MdSignalWifi3BarLock;
        case "md:MdSignalWifi3Bar":
            return MdSignalWifi3Bar;
        case "md:MdSignalWifiConnectedNoInternet0":
            return MdSignalWifiConnectedNoInternet0;
        case "md:MdSignalWifiConnectedNoInternet1":
            return MdSignalWifiConnectedNoInternet1;
        case "md:MdSignalWifiConnectedNoInternet2":
            return MdSignalWifiConnectedNoInternet2;
        case "md:MdSignalWifiConnectedNoInternet3":
            return MdSignalWifiConnectedNoInternet3;
        case "md:MdSignalWifiStatusbar1Bar":
            return MdSignalWifiStatusbar1Bar;
        case "md:MdSignalWifiStatusbar2Bar":
            return MdSignalWifiStatusbar2Bar;
        case "md:MdSignalWifiStatusbar3Bar":
            return MdSignalWifiStatusbar3Bar;
        case "md:MdSignalWifiStatusbarConnectedNoInternet1":
            return MdSignalWifiStatusbarConnectedNoInternet1;
        case "md:MdSignalWifiStatusbarConnectedNoInternet2":
            return MdSignalWifiStatusbarConnectedNoInternet2;
        case "md:MdSignalWifiStatusbarConnectedNoInternet3":
            return MdSignalWifiStatusbarConnectedNoInternet3;
        case "md:MdSignalWifiStatusbarConnectedNoInternet":
            return MdSignalWifiStatusbarConnectedNoInternet;
        case "md:MdSignalWifiStatusbarNotConnected":
            return MdSignalWifiStatusbarNotConnected;
        case "md:MdWifiCalling1":
            return MdWifiCalling1;
        case "md:MdWifiCalling2":
            return MdWifiCalling2;
        case "md:MdOutline123":
            return MdOutline123;
        case "md:MdOutline3dRotation":
            return MdOutline3dRotation;
        case "md:MdOutlineAbc":
            return MdOutlineAbc;
        case "md:MdOutlineAccessibilityNew":
            return MdOutlineAccessibilityNew;
        case "md:MdOutlineAccessibility":
            return MdOutlineAccessibility;
        case "md:MdOutlineAccessibleForward":
            return MdOutlineAccessibleForward;
        case "md:MdOutlineAccessible":
            return MdOutlineAccessible;
        case "md:MdOutlineAccountBalanceWallet":
            return MdOutlineAccountBalanceWallet;
        case "md:MdOutlineAccountBalance":
            return MdOutlineAccountBalance;
        case "md:MdOutlineAccountBox":
            return MdOutlineAccountBox;
        case "md:MdOutlineAccountCircle":
            return MdOutlineAccountCircle;
        case "md:MdOutlineAddCard":
            return MdOutlineAddCard;
        case "md:MdOutlineAddHome":
            return MdOutlineAddHome;
        case "md:MdOutlineAddShoppingCart":
            return MdOutlineAddShoppingCart;
        case "md:MdOutlineAddTask":
            return MdOutlineAddTask;
        case "md:MdOutlineAddToDrive":
            return MdOutlineAddToDrive;
        case "md:MdOutlineAddchart":
            return MdOutlineAddchart;
        case "md:MdOutlineAdminPanelSettings":
            return MdOutlineAdminPanelSettings;
        case "md:MdOutlineAdsClick":
            return MdOutlineAdsClick;
        case "md:MdOutlineAlarmAdd":
            return MdOutlineAlarmAdd;
        case "md:MdOutlineAlarmOff":
            return MdOutlineAlarmOff;
        case "md:MdOutlineAlarmOn":
            return MdOutlineAlarmOn;
        case "md:MdOutlineAlarm":
            return MdOutlineAlarm;
        case "md:MdOutlineAllInbox":
            return MdOutlineAllInbox;
        case "md:MdOutlineAllOut":
            return MdOutlineAllOut;
        case "md:MdOutlineAnalytics":
            return MdOutlineAnalytics;
        case "md:MdOutlineAnchor":
            return MdOutlineAnchor;
        case "md:MdOutlineAndroid":
            return MdOutlineAndroid;
        case "md:MdOutlineAnnouncement":
            return MdOutlineAnnouncement;
        case "md:MdOutlineApi":
            return MdOutlineApi;
        case "md:MdOutlineAppBlocking":
            return MdOutlineAppBlocking;
        case "md:MdOutlineAppShortcut":
            return MdOutlineAppShortcut;
        case "md:MdOutlineArrowCircleDown":
            return MdOutlineArrowCircleDown;
        case "md:MdOutlineArrowCircleLeft":
            return MdOutlineArrowCircleLeft;
        case "md:MdOutlineArrowCircleRight":
            return MdOutlineArrowCircleRight;
        case "md:MdOutlineArrowCircleUp":
            return MdOutlineArrowCircleUp;
        case "md:MdOutlineArrowOutward":
            return MdOutlineArrowOutward;
        case "md:MdOutlineArrowRightAlt":
            return MdOutlineArrowRightAlt;
        case "md:MdOutlineArticle":
            return MdOutlineArticle;
        case "md:MdOutlineAspectRatio":
            return MdOutlineAspectRatio;
        case "md:MdOutlineAssessment":
            return MdOutlineAssessment;
        case "md:MdOutlineAssignmentInd":
            return MdOutlineAssignmentInd;
        case "md:MdOutlineAssignmentLate":
            return MdOutlineAssignmentLate;
        case "md:MdOutlineAssignmentReturn":
            return MdOutlineAssignmentReturn;
        case "md:MdOutlineAssignmentReturned":
            return MdOutlineAssignmentReturned;
        case "md:MdOutlineAssignmentTurnedIn":
            return MdOutlineAssignmentTurnedIn;
        case "md:MdOutlineAssignment":
            return MdOutlineAssignment;
        case "md:MdOutlineAssuredWorkload":
            return MdOutlineAssuredWorkload;
        case "md:MdOutlineAutorenew":
            return MdOutlineAutorenew;
        case "md:MdOutlineBackupTable":
            return MdOutlineBackupTable;
        case "md:MdOutlineBackup":
            return MdOutlineBackup;
        case "md:MdOutlineBalance":
            return MdOutlineBalance;
        case "md:MdOutlineBatchPrediction":
            return MdOutlineBatchPrediction;
        case "md:MdOutlineBookOnline":
            return MdOutlineBookOnline;
        case "md:MdOutlineBook":
            return MdOutlineBook;
        case "md:MdOutlineBookmarkAdd":
            return MdOutlineBookmarkAdd;
        case "md:MdOutlineBookmarkAdded":
            return MdOutlineBookmarkAdded;
        case "md:MdOutlineBookmarkBorder":
            return MdOutlineBookmarkBorder;
        case "md:MdOutlineBookmarkRemove":
            return MdOutlineBookmarkRemove;
        case "md:MdOutlineBookmark":
            return MdOutlineBookmark;
        case "md:MdOutlineBookmarks":
            return MdOutlineBookmarks;
        case "md:MdOutlineBrowseGallery":
            return MdOutlineBrowseGallery;
        case "md:MdOutlineBugReport":
            return MdOutlineBugReport;
        case "md:MdOutlineBuildCircle":
            return MdOutlineBuildCircle;
        case "md:MdOutlineBuild":
            return MdOutlineBuild;
        case "md:MdOutlineCached":
            return MdOutlineCached;
        case "md:MdOutlineCalendarMonth":
            return MdOutlineCalendarMonth;
        case "md:MdOutlineCalendarToday":
            return MdOutlineCalendarToday;
        case "md:MdOutlineCalendarViewDay":
            return MdOutlineCalendarViewDay;
        case "md:MdOutlineCalendarViewMonth":
            return MdOutlineCalendarViewMonth;
        case "md:MdOutlineCalendarViewWeek":
            return MdOutlineCalendarViewWeek;
        case "md:MdOutlineCameraEnhance":
            return MdOutlineCameraEnhance;
        case "md:MdOutlineCancelScheduleSend":
            return MdOutlineCancelScheduleSend;
        case "md:MdOutlineCardGiftcard":
            return MdOutlineCardGiftcard;
        case "md:MdOutlineCardMembership":
            return MdOutlineCardMembership;
        case "md:MdOutlineCardTravel":
            return MdOutlineCardTravel;
        case "md:MdOutlineChangeHistory":
            return MdOutlineChangeHistory;
        case "md:MdOutlineCheckCircleOutline":
            return MdOutlineCheckCircleOutline;
        case "md:MdOutlineCheckCircle":
            return MdOutlineCheckCircle;
        case "md:MdOutlineChromeReaderMode":
            return MdOutlineChromeReaderMode;
        case "md:MdOutlineCircleNotifications":
            return MdOutlineCircleNotifications;
        case "md:MdOutlineClass":
            return MdOutlineClass;
        case "md:MdOutlineCloseFullscreen":
            return MdOutlineCloseFullscreen;
        case "md:MdOutlineCodeOff":
            return MdOutlineCodeOff;
        case "md:MdOutlineCode":
            return MdOutlineCode;
        case "md:MdOutlineCommentBank":
            return MdOutlineCommentBank;
        case "md:MdOutlineCommit":
            return MdOutlineCommit;
        case "md:MdOutlineCommute":
            return MdOutlineCommute;
        case "md:MdOutlineCompareArrows":
            return MdOutlineCompareArrows;
        case "md:MdOutlineCompress":
            return MdOutlineCompress;
        case "md:MdOutlineContactPage":
            return MdOutlineContactPage;
        case "md:MdOutlineContactSupport":
            return MdOutlineContactSupport;
        case "md:MdOutlineContactless":
            return MdOutlineContactless;
        case "md:MdOutlineCopyright":
            return MdOutlineCopyright;
        case "md:MdOutlineCreditCardOff":
            return MdOutlineCreditCardOff;
        case "md:MdOutlineCreditCard":
            return MdOutlineCreditCard;
        case "md:MdOutlineCss":
            return MdOutlineCss;
        case "md:MdOutlineCurrencyExchange":
            return MdOutlineCurrencyExchange;
        case "md:MdOutlineDangerous":
            return MdOutlineDangerous;
        case "md:MdOutlineDashboardCustomize":
            return MdOutlineDashboardCustomize;
        case "md:MdOutlineDashboard":
            return MdOutlineDashboard;
        case "md:MdOutlineDataExploration":
            return MdOutlineDataExploration;
        case "md:MdOutlineDataThresholding":
            return MdOutlineDataThresholding;
        case "md:MdOutlineDateRange":
            return MdOutlineDateRange;
        case "md:MdOutlineDeleteForever":
            return MdOutlineDeleteForever;
        case "md:MdOutlineDeleteOutline":
            return MdOutlineDeleteOutline;
        case "md:MdOutlineDelete":
            return MdOutlineDelete;
        case "md:MdOutlineDensityLarge":
            return MdOutlineDensityLarge;
        case "md:MdOutlineDensityMedium":
            return MdOutlineDensityMedium;
        case "md:MdOutlineDensitySmall":
            return MdOutlineDensitySmall;
        case "md:MdOutlineDescription":
            return MdOutlineDescription;
        case "md:MdOutlineDisabledByDefault":
            return MdOutlineDisabledByDefault;
        case "md:MdOutlineDisabledVisible":
            return MdOutlineDisabledVisible;
        case "md:MdOutlineDisplaySettings":
            return MdOutlineDisplaySettings;
        case "md:MdOutlineDns":
            return MdOutlineDns;
        case "md:MdOutlineDoneAll":
            return MdOutlineDoneAll;
        case "md:MdOutlineDoneOutline":
            return MdOutlineDoneOutline;
        case "md:MdOutlineDone":
            return MdOutlineDone;
        case "md:MdOutlineDonutLarge":
            return MdOutlineDonutLarge;
        case "md:MdOutlineDonutSmall":
            return MdOutlineDonutSmall;
        case "md:MdOutlineDragIndicator":
            return MdOutlineDragIndicator;
        case "md:MdOutlineDynamicForm":
            return MdOutlineDynamicForm;
        case "md:MdOutlineEco":
            return MdOutlineEco;
        case "md:MdOutlineEditCalendar":
            return MdOutlineEditCalendar;
        case "md:MdOutlineEditOff":
            return MdOutlineEditOff;
        case "md:MdOutlineEject":
            return MdOutlineEject;
        case "md:MdOutlineEuroSymbol":
            return MdOutlineEuroSymbol;
        case "md:MdOutlineEventRepeat":
            return MdOutlineEventRepeat;
        case "md:MdOutlineEventSeat":
            return MdOutlineEventSeat;
        case "md:MdOutlineEvent":
            return MdOutlineEvent;
        case "md:MdOutlineExitToApp":
            return MdOutlineExitToApp;
        case "md:MdOutlineExpand":
            return MdOutlineExpand;
        case "md:MdOutlineExploreOff":
            return MdOutlineExploreOff;
        case "md:MdOutlineExplore":
            return MdOutlineExplore;
        case "md:MdOutlineExtensionOff":
            return MdOutlineExtensionOff;
        case "md:MdOutlineExtension":
            return MdOutlineExtension;
        case "md:MdOutlineFaceUnlock":
            return MdOutlineFaceUnlock;
        case "md:MdOutlineFace":
            return MdOutlineFace;
        case "md:MdOutlineFactCheck":
            return MdOutlineFactCheck;
        case "md:MdOutlineFavoriteBorder":
            return MdOutlineFavoriteBorder;
        case "md:MdOutlineFavorite":
            return MdOutlineFavorite;
        case "md:MdOutlineFax":
            return MdOutlineFax;
        case "md:MdOutlineFeedback":
            return MdOutlineFeedback;
        case "md:MdOutlineFilePresent":
            return MdOutlineFilePresent;
        case "md:MdOutlineFilterAltOff":
            return MdOutlineFilterAltOff;
        case "md:MdOutlineFilterAlt":
            return MdOutlineFilterAlt;
        case "md:MdOutlineFindInPage":
            return MdOutlineFindInPage;
        case "md:MdOutlineFindReplace":
            return MdOutlineFindReplace;
        case "md:MdOutlineFingerprint":
            return MdOutlineFingerprint;
        case "md:MdOutlineFitScreen":
            return MdOutlineFitScreen;
        case "md:MdOutlineFlaky":
            return MdOutlineFlaky;
        case "md:MdOutlineFlightLand":
            return MdOutlineFlightLand;
        case "md:MdOutlineFlightTakeoff":
            return MdOutlineFlightTakeoff;
        case "md:MdOutlineFlipToBack":
            return MdOutlineFlipToBack;
        case "md:MdOutlineFlipToFront":
            return MdOutlineFlipToFront;
        case "md:MdOutlineFlutterDash":
            return MdOutlineFlutterDash;
        case "md:MdOutlineFreeCancellation":
            return MdOutlineFreeCancellation;
        case "md:MdOutlineGTranslate":
            return MdOutlineGTranslate;
        case "md:MdOutlineGavel":
            return MdOutlineGavel;
        case "md:MdOutlineGeneratingTokens":
            return MdOutlineGeneratingTokens;
        case "md:MdOutlineGetApp":
            return MdOutlineGetApp;
        case "md:MdOutlineGifBox":
            return MdOutlineGifBox;
        case "md:MdOutlineGif":
            return MdOutlineGif;
        case "md:MdOutlineGrade":
            return MdOutlineGrade;
        case "md:MdOutlineGrading":
            return MdOutlineGrading;
        case "md:MdOutlineGroupWork":
            return MdOutlineGroupWork;
        case "md:MdOutlineHelpCenter":
            return MdOutlineHelpCenter;
        case "md:MdOutlineHelpOutline":
            return MdOutlineHelpOutline;
        case "md:MdOutlineHelp":
            return MdOutlineHelp;
        case "md:MdOutlineHideSource":
            return MdOutlineHideSource;
        case "md:MdOutlineHighlightAlt":
            return MdOutlineHighlightAlt;
        case "md:MdOutlineHighlightOff":
            return MdOutlineHighlightOff;
        case "md:MdOutlineHistoryToggleOff":
            return MdOutlineHistoryToggleOff;
        case "md:MdOutlineHistory":
            return MdOutlineHistory;
        case "md:MdOutlineHlsOff":
            return MdOutlineHlsOff;
        case "md:MdOutlineHls":
            return MdOutlineHls;
        case "md:MdOutlineHome":
            return MdOutlineHome;
        case "md:MdOutlineHorizontalSplit":
            return MdOutlineHorizontalSplit;
        case "md:MdOutlineHotelClass":
            return MdOutlineHotelClass;
        case "md:MdOutlineHourglassDisabled":
            return MdOutlineHourglassDisabled;
        case "md:MdOutlineHourglassEmpty":
            return MdOutlineHourglassEmpty;
        case "md:MdOutlineHourglassFull":
            return MdOutlineHourglassFull;
        case "md:MdOutlineHtml":
            return MdOutlineHtml;
        case "md:MdOutlineHttp":
            return MdOutlineHttp;
        case "md:MdOutlineHttps":
            return MdOutlineHttps;
        case "md:MdOutlineImportantDevices":
            return MdOutlineImportantDevices;
        case "md:MdOutlineInfo":
            return MdOutlineInfo;
        case "md:MdOutlineInput":
            return MdOutlineInput;
        case "md:MdOutlineInstallDesktop":
            return MdOutlineInstallDesktop;
        case "md:MdOutlineInstallMobile":
            return MdOutlineInstallMobile;
        case "md:MdOutlineIntegrationInstructions":
            return MdOutlineIntegrationInstructions;
        case "md:MdOutlineInvertColors":
            return MdOutlineInvertColors;
        case "md:MdOutlineJavascript":
            return MdOutlineJavascript;
        case "md:MdOutlineJoinFull":
            return MdOutlineJoinFull;
        case "md:MdOutlineJoinInner":
            return MdOutlineJoinInner;
        case "md:MdOutlineJoinLeft":
            return MdOutlineJoinLeft;
        case "md:MdOutlineJoinRight":
            return MdOutlineJoinRight;
        case "md:MdOutlineLabelImportant":
            return MdOutlineLabelImportant;
        case "md:MdOutlineLabelOff":
            return MdOutlineLabelOff;
        case "md:MdOutlineLabel":
            return MdOutlineLabel;
        case "md:MdOutlineLanguage":
            return MdOutlineLanguage;
        case "md:MdOutlineLaunch":
            return MdOutlineLaunch;
        case "md:MdOutlineLeaderboard":
            return MdOutlineLeaderboard;
        case "md:MdOutlineLightbulbCircle":
            return MdOutlineLightbulbCircle;
        case "md:MdOutlineLightbulb":
            return MdOutlineLightbulb;
        case "md:MdOutlineLineStyle":
            return MdOutlineLineStyle;
        case "md:MdOutlineLineWeight":
            return MdOutlineLineWeight;
        case "md:MdOutlineList":
            return MdOutlineList;
        case "md:MdOutlineLockClock":
            return MdOutlineLockClock;
        case "md:MdOutlineLockOpen":
            return MdOutlineLockOpen;
        case "md:MdOutlineLockPerson":
            return MdOutlineLockPerson;
        case "md:MdOutlineLockReset":
            return MdOutlineLockReset;
        case "md:MdOutlineLock":
            return MdOutlineLock;
        case "md:MdOutlineLogin":
            return MdOutlineLogin;
        case "md:MdOutlineLogout":
            return MdOutlineLogout;
        case "md:MdOutlineLoyalty":
            return MdOutlineLoyalty;
        case "md:MdOutlineManageAccounts":
            return MdOutlineManageAccounts;
        case "md:MdOutlineManageHistory":
            return MdOutlineManageHistory;
        case "md:MdOutlineMarkAsUnread":
            return MdOutlineMarkAsUnread;
        case "md:MdOutlineMarkunreadMailbox":
            return MdOutlineMarkunreadMailbox;
        case "md:MdOutlineMaximize":
            return MdOutlineMaximize;
        case "md:MdOutlineMediation":
            return MdOutlineMediation;
        case "md:MdOutlineMinimize":
            return MdOutlineMinimize;
        case "md:MdOutlineModelTraining":
            return MdOutlineModelTraining;
        case "md:MdOutlineNetworkPing":
            return MdOutlineNetworkPing;
        case "md:MdOutlineNewLabel":
            return MdOutlineNewLabel;
        case "md:MdOutlineNextPlan":
            return MdOutlineNextPlan;
        case "md:MdOutlineNightlightRound":
            return MdOutlineNightlightRound;
        case "md:MdOutlineNoAccounts":
            return MdOutlineNoAccounts;
        case "md:MdOutlineNoiseAware":
            return MdOutlineNoiseAware;
        case "md:MdOutlineNoiseControlOff":
            return MdOutlineNoiseControlOff;
        case "md:MdOutlineNotAccessible":
            return MdOutlineNotAccessible;
        case "md:MdOutlineNotStarted":
            return MdOutlineNotStarted;
        case "md:MdOutlineNoteAdd":
            return MdOutlineNoteAdd;
        case "md:MdOutlineOfflineBolt":
            return MdOutlineOfflineBolt;
        case "md:MdOutlineOfflinePin":
            return MdOutlineOfflinePin;
        case "md:MdOutlineOnDeviceTraining":
            return MdOutlineOnDeviceTraining;
        case "md:MdOutlineOnlinePrediction":
            return MdOutlineOnlinePrediction;
        case "md:MdOutlineOpacity":
            return MdOutlineOpacity;
        case "md:MdOutlineOpenInBrowser":
            return MdOutlineOpenInBrowser;
        case "md:MdOutlineOpenInFull":
            return MdOutlineOpenInFull;
        case "md:MdOutlineOpenInNewOff":
            return MdOutlineOpenInNewOff;
        case "md:MdOutlineOpenInNew":
            return MdOutlineOpenInNew;
        case "md:MdOutlineOpenWith":
            return MdOutlineOpenWith;
        case "md:MdOutlineOutbond":
            return MdOutlineOutbond;
        case "md:MdOutlineOutbound":
            return MdOutlineOutbound;
        case "md:MdOutlineOutbox":
            return MdOutlineOutbox;
        case "md:MdOutlineOutlet":
            return MdOutlineOutlet;
        case "md:MdOutlineOutput":
            return MdOutlineOutput;
        case "md:MdOutlinePageview":
            return MdOutlinePageview;
        case "md:MdOutlinePaid":
            return MdOutlinePaid;
        case "md:MdOutlinePanToolAlt":
            return MdOutlinePanToolAlt;
        case "md:MdOutlinePanTool":
            return MdOutlinePanTool;
        case "md:MdOutlinePayment":
            return MdOutlinePayment;
        case "md:MdOutlinePendingActions":
            return MdOutlinePendingActions;
        case "md:MdOutlinePending":
            return MdOutlinePending;
        case "md:MdOutlinePercent":
            return MdOutlinePercent;
        case "md:MdOutlinePermCameraMic":
            return MdOutlinePermCameraMic;
        case "md:MdOutlinePermContactCalendar":
            return MdOutlinePermContactCalendar;
        case "md:MdOutlinePermDataSetting":
            return MdOutlinePermDataSetting;
        case "md:MdOutlinePermDeviceInformation":
            return MdOutlinePermDeviceInformation;
        case "md:MdOutlinePermIdentity":
            return MdOutlinePermIdentity;
        case "md:MdOutlinePermMedia":
            return MdOutlinePermMedia;
        case "md:MdOutlinePermPhoneMsg":
            return MdOutlinePermPhoneMsg;
        case "md:MdOutlinePermScanWifi":
            return MdOutlinePermScanWifi;
        case "md:MdOutlinePets":
            return MdOutlinePets;
        case "md:MdOutlinePhp":
            return MdOutlinePhp;
        case "md:MdOutlinePictureInPictureAlt":
            return MdOutlinePictureInPictureAlt;
        case "md:MdOutlinePictureInPicture":
            return MdOutlinePictureInPicture;
        case "md:MdOutlinePinEnd":
            return MdOutlinePinEnd;
        case "md:MdOutlinePinInvoke":
            return MdOutlinePinInvoke;
        case "md:MdOutlinePinch":
            return MdOutlinePinch;
        case "md:MdOutlinePlagiarism":
            return MdOutlinePlagiarism;
        case "md:MdOutlinePlayForWork":
            return MdOutlinePlayForWork;
        case "md:MdOutlinePolymer":
            return MdOutlinePolymer;
        case "md:MdOutlinePowerSettingsNew":
            return MdOutlinePowerSettingsNew;
        case "md:MdOutlinePregnantWoman":
            return MdOutlinePregnantWoman;
        case "md:MdOutlinePreview":
            return MdOutlinePreview;
        case "md:MdOutlinePrint":
            return MdOutlinePrint;
        case "md:MdOutlinePrivacyTip":
            return MdOutlinePrivacyTip;
        case "md:MdOutlinePrivateConnectivity":
            return MdOutlinePrivateConnectivity;
        case "md:MdOutlineProductionQuantityLimits":
            return MdOutlineProductionQuantityLimits;
        case "md:MdOutlinePublishedWithChanges":
            return MdOutlinePublishedWithChanges;
        case "md:MdOutlineQueryBuilder":
            return MdOutlineQueryBuilder;
        case "md:MdOutlineQuestionAnswer":
            return MdOutlineQuestionAnswer;
        case "md:MdOutlineQuestionMark":
            return MdOutlineQuestionMark;
        case "md:MdOutlineQuickreply":
            return MdOutlineQuickreply;
        case "md:MdOutlineReceipt":
            return MdOutlineReceipt;
        case "md:MdOutlineRecordVoiceOver":
            return MdOutlineRecordVoiceOver;
        case "md:MdOutlineRedeem":
            return MdOutlineRedeem;
        case "md:MdOutlineRemoveDone":
            return MdOutlineRemoveDone;
        case "md:MdOutlineRemoveShoppingCart":
            return MdOutlineRemoveShoppingCart;
        case "md:MdOutlineReorder":
            return MdOutlineReorder;
        case "md:MdOutlineRepartition":
            return MdOutlineRepartition;
        case "md:MdOutlineReportProblem":
            return MdOutlineReportProblem;
        case "md:MdOutlineRequestPage":
            return MdOutlineRequestPage;
        case "md:MdOutlineRestoreFromTrash":
            return MdOutlineRestoreFromTrash;
        case "md:MdOutlineRestorePage":
            return MdOutlineRestorePage;
        case "md:MdOutlineRestore":
            return MdOutlineRestore;
        case "md:MdOutlineRocketLaunch":
            return MdOutlineRocketLaunch;
        case "md:MdOutlineRocket":
            return MdOutlineRocket;
        case "md:MdOutlineRoom":
            return MdOutlineRoom;
        case "md:MdOutlineRoundedCorner":
            return MdOutlineRoundedCorner;
        case "md:MdOutlineRowing":
            return MdOutlineRowing;
        case "md:MdOutlineRule":
            return MdOutlineRule;
        case "md:MdOutlineSatelliteAlt":
            return MdOutlineSatelliteAlt;
        case "md:MdOutlineSavedSearch":
            return MdOutlineSavedSearch;
        case "md:MdOutlineSavings":
            return MdOutlineSavings;
        case "md:MdOutlineScheduleSend":
            return MdOutlineScheduleSend;
        case "md:MdOutlineSchedule":
            return MdOutlineSchedule;
        case "md:MdOutlineSearchOff":
            return MdOutlineSearchOff;
        case "md:MdOutlineSearch":
            return MdOutlineSearch;
        case "md:MdOutlineSegment":
            return MdOutlineSegment;
        case "md:MdOutlineSendAndArchive":
            return MdOutlineSendAndArchive;
        case "md:MdOutlineSensorsOff":
            return MdOutlineSensorsOff;
        case "md:MdOutlineSensors":
            return MdOutlineSensors;
        case "md:MdOutlineSettingsAccessibility":
            return MdOutlineSettingsAccessibility;
        case "md:MdOutlineSettingsApplications":
            return MdOutlineSettingsApplications;
        case "md:MdOutlineSettingsBackupRestore":
            return MdOutlineSettingsBackupRestore;
        case "md:MdOutlineSettingsBluetooth":
            return MdOutlineSettingsBluetooth;
        case "md:MdOutlineSettingsBrightness":
            return MdOutlineSettingsBrightness;
        case "md:MdOutlineSettingsCell":
            return MdOutlineSettingsCell;
        case "md:MdOutlineSettingsEthernet":
            return MdOutlineSettingsEthernet;
        case "md:MdOutlineSettingsInputAntenna":
            return MdOutlineSettingsInputAntenna;
        case "md:MdOutlineSettingsInputComponent":
            return MdOutlineSettingsInputComponent;
        case "md:MdOutlineSettingsInputComposite":
            return MdOutlineSettingsInputComposite;
        case "md:MdOutlineSettingsInputHdmi":
            return MdOutlineSettingsInputHdmi;
        case "md:MdOutlineSettingsInputSvideo":
            return MdOutlineSettingsInputSvideo;
        case "md:MdOutlineSettingsOverscan":
            return MdOutlineSettingsOverscan;
        case "md:MdOutlineSettingsPhone":
            return MdOutlineSettingsPhone;
        case "md:MdOutlineSettingsPower":
            return MdOutlineSettingsPower;
        case "md:MdOutlineSettingsRemote":
            return MdOutlineSettingsRemote;
        case "md:MdOutlineSettingsVoice":
            return MdOutlineSettingsVoice;
        case "md:MdOutlineSettings":
            return MdOutlineSettings;
        case "md:MdOutlineShop2":
            return MdOutlineShop2;
        case "md:MdOutlineShopTwo":
            return MdOutlineShopTwo;
        case "md:MdOutlineShop":
            return MdOutlineShop;
        case "md:MdOutlineShoppingBag":
            return MdOutlineShoppingBag;
        case "md:MdOutlineShoppingBasket":
            return MdOutlineShoppingBasket;
        case "md:MdOutlineShoppingCartCheckout":
            return MdOutlineShoppingCartCheckout;
        case "md:MdOutlineShoppingCart":
            return MdOutlineShoppingCart;
        case "md:MdOutlineSmartButton":
            return MdOutlineSmartButton;
        case "md:MdOutlineSource":
            return MdOutlineSource;
        case "md:MdOutlineSpaceDashboard":
            return MdOutlineSpaceDashboard;
        case "md:MdOutlineSpatialAudioOff":
            return MdOutlineSpatialAudioOff;
        case "md:MdOutlineSpatialAudio":
            return MdOutlineSpatialAudio;
        case "md:MdOutlineSpatialTracking":
            return MdOutlineSpatialTracking;
        case "md:MdOutlineSpeakerNotesOff":
            return MdOutlineSpeakerNotesOff;
        case "md:MdOutlineSpeakerNotes":
            return MdOutlineSpeakerNotes;
        case "md:MdOutlineSpellcheck":
            return MdOutlineSpellcheck;
        case "md:MdOutlineStarRate":
            return MdOutlineStarRate;
        case "md:MdOutlineStars":
            return MdOutlineStars;
        case "md:MdOutlineStickyNote2":
            return MdOutlineStickyNote2;
        case "md:MdOutlineStore":
            return MdOutlineStore;
        case "md:MdOutlineSubject":
            return MdOutlineSubject;
        case "md:MdOutlineSubtitlesOff":
            return MdOutlineSubtitlesOff;
        case "md:MdOutlineSupervisedUserCircle":
            return MdOutlineSupervisedUserCircle;
        case "md:MdOutlineSupervisorAccount":
            return MdOutlineSupervisorAccount;
        case "md:MdOutlineSupport":
            return MdOutlineSupport;
        case "md:MdOutlineSwapHoriz":
            return MdOutlineSwapHoriz;
        case "md:MdOutlineSwapHorizontalCircle":
            return MdOutlineSwapHorizontalCircle;
        case "md:MdOutlineSwapVert":
            return MdOutlineSwapVert;
        case "md:MdOutlineSwapVerticalCircle":
            return MdOutlineSwapVerticalCircle;
        case "md:MdOutlineSwipeDownAlt":
            return MdOutlineSwipeDownAlt;
        case "md:MdOutlineSwipeDown":
            return MdOutlineSwipeDown;
        case "md:MdOutlineSwipeLeftAlt":
            return MdOutlineSwipeLeftAlt;
        case "md:MdOutlineSwipeLeft":
            return MdOutlineSwipeLeft;
        case "md:MdOutlineSwipeRightAlt":
            return MdOutlineSwipeRightAlt;
        case "md:MdOutlineSwipeRight":
            return MdOutlineSwipeRight;
        case "md:MdOutlineSwipeUpAlt":
            return MdOutlineSwipeUpAlt;
        case "md:MdOutlineSwipeUp":
            return MdOutlineSwipeUp;
        case "md:MdOutlineSwipeVertical":
            return MdOutlineSwipeVertical;
        case "md:MdOutlineSwipe":
            return MdOutlineSwipe;
        case "md:MdOutlineSwitchAccessShortcutAdd":
            return MdOutlineSwitchAccessShortcutAdd;
        case "md:MdOutlineSwitchAccessShortcut":
            return MdOutlineSwitchAccessShortcut;
        case "md:MdOutlineSyncAlt":
            return MdOutlineSyncAlt;
        case "md:MdOutlineSystemUpdateAlt":
            return MdOutlineSystemUpdateAlt;
        case "md:MdOutlineTabUnselected":
            return MdOutlineTabUnselected;
        case "md:MdOutlineTab":
            return MdOutlineTab;
        case "md:MdOutlineTableView":
            return MdOutlineTableView;
        case "md:MdOutlineTaskAlt":
            return MdOutlineTaskAlt;
        case "md:MdOutlineTerminal":
            return MdOutlineTerminal;
        case "md:MdOutlineTextRotateUp":
            return MdOutlineTextRotateUp;
        case "md:MdOutlineTextRotateVertical":
            return MdOutlineTextRotateVertical;
        case "md:MdOutlineTextRotationAngledown":
            return MdOutlineTextRotationAngledown;
        case "md:MdOutlineTextRotationAngleup":
            return MdOutlineTextRotationAngleup;
        case "md:MdOutlineTextRotationDown":
            return MdOutlineTextRotationDown;
        case "md:MdOutlineTextRotationNone":
            return MdOutlineTextRotationNone;
        case "md:MdOutlineTheaters":
            return MdOutlineTheaters;
        case "md:MdOutlineThumbDownOffAlt":
            return MdOutlineThumbDownOffAlt;
        case "md:MdOutlineThumbDown":
            return MdOutlineThumbDown;
        case "md:MdOutlineThumbUpOffAlt":
            return MdOutlineThumbUpOffAlt;
        case "md:MdOutlineThumbUp":
            return MdOutlineThumbUp;
        case "md:MdOutlineThumbsUpDown":
            return MdOutlineThumbsUpDown;
        case "md:MdOutlineTimeline":
            return MdOutlineTimeline;
        case "md:MdOutlineTipsAndUpdates":
            return MdOutlineTipsAndUpdates;
        case "md:MdOutlineToc":
            return MdOutlineToc;
        case "md:MdOutlineToday":
            return MdOutlineToday;
        case "md:MdOutlineToken":
            return MdOutlineToken;
        case "md:MdOutlineToll":
            return MdOutlineToll;
        case "md:MdOutlineTouchApp":
            return MdOutlineTouchApp;
        case "md:MdOutlineTour":
            return MdOutlineTour;
        case "md:MdOutlineTrackChanges":
            return MdOutlineTrackChanges;
        case "md:MdOutlineTranscribe":
            return MdOutlineTranscribe;
        case "md:MdOutlineTranslate":
            return MdOutlineTranslate;
        case "md:MdOutlineTrendingDown":
            return MdOutlineTrendingDown;
        case "md:MdOutlineTrendingFlat":
            return MdOutlineTrendingFlat;
        case "md:MdOutlineTrendingUp":
            return MdOutlineTrendingUp;
        case "md:MdOutlineTroubleshoot":
            return MdOutlineTroubleshoot;
        case "md:MdOutlineTry":
            return MdOutlineTry;
        case "md:MdOutlineTurnedInNot":
            return MdOutlineTurnedInNot;
        case "md:MdOutlineTurnedIn":
            return MdOutlineTurnedIn;
        case "md:MdOutlineUnfoldLessDouble":
            return MdOutlineUnfoldLessDouble;
        case "md:MdOutlineUnfoldMoreDouble":
            return MdOutlineUnfoldMoreDouble;
        case "md:MdOutlineUnpublished":
            return MdOutlineUnpublished;
        case "md:MdOutlineUpdateDisabled":
            return MdOutlineUpdateDisabled;
        case "md:MdOutlineUpdate":
            return MdOutlineUpdate;
        case "md:MdOutlineUpgrade":
            return MdOutlineUpgrade;
        case "md:MdOutlineVerifiedUser":
            return MdOutlineVerifiedUser;
        case "md:MdOutlineVerified":
            return MdOutlineVerified;
        case "md:MdOutlineVerticalSplit":
            return MdOutlineVerticalSplit;
        case "md:MdOutlineViewAgenda":
            return MdOutlineViewAgenda;
        case "md:MdOutlineViewArray":
            return MdOutlineViewArray;
        case "md:MdOutlineViewCarousel":
            return MdOutlineViewCarousel;
        case "md:MdOutlineViewColumn":
            return MdOutlineViewColumn;
        case "md:MdOutlineViewComfyAlt":
            return MdOutlineViewComfyAlt;
        case "md:MdOutlineViewCompactAlt":
            return MdOutlineViewCompactAlt;
        case "md:MdOutlineViewCozy":
            return MdOutlineViewCozy;
        case "md:MdOutlineViewDay":
            return MdOutlineViewDay;
        case "md:MdOutlineViewHeadline":
            return MdOutlineViewHeadline;
        case "md:MdOutlineViewInAr":
            return MdOutlineViewInAr;
        case "md:MdOutlineViewKanban":
            return MdOutlineViewKanban;
        case "md:MdOutlineViewList":
            return MdOutlineViewList;
        case "md:MdOutlineViewModule":
            return MdOutlineViewModule;
        case "md:MdOutlineViewQuilt":
            return MdOutlineViewQuilt;
        case "md:MdOutlineViewSidebar":
            return MdOutlineViewSidebar;
        case "md:MdOutlineViewStream":
            return MdOutlineViewStream;
        case "md:MdOutlineViewTimeline":
            return MdOutlineViewTimeline;
        case "md:MdOutlineViewWeek":
            return MdOutlineViewWeek;
        case "md:MdOutlineVisibilityOff":
            return MdOutlineVisibilityOff;
        case "md:MdOutlineVisibility":
            return MdOutlineVisibility;
        case "md:MdOutlineVoiceOverOff":
            return MdOutlineVoiceOverOff;
        case "md:MdOutlineWatchLater":
            return MdOutlineWatchLater;
        case "md:MdOutlineWebhook":
            return MdOutlineWebhook;
        case "md:MdOutlineWidthFull":
            return MdOutlineWidthFull;
        case "md:MdOutlineWidthNormal":
            return MdOutlineWidthNormal;
        case "md:MdOutlineWidthWide":
            return MdOutlineWidthWide;
        case "md:MdOutlineWifiProtectedSetup":
            return MdOutlineWifiProtectedSetup;
        case "md:MdOutlineWorkHistory":
            return MdOutlineWorkHistory;
        case "md:MdOutlineWorkOff":
            return MdOutlineWorkOff;
        case "md:MdOutlineWorkOutline":
            return MdOutlineWorkOutline;
        case "md:MdOutlineWork":
            return MdOutlineWork;
        case "md:MdOutlineWysiwyg":
            return MdOutlineWysiwyg;
        case "md:MdOutlineYoutubeSearchedFor":
            return MdOutlineYoutubeSearchedFor;
        case "md:MdOutlineZoomIn":
            return MdOutlineZoomIn;
        case "md:MdOutlineZoomOut":
            return MdOutlineZoomOut;
        case "md:MdOutlineAddAlert":
            return MdOutlineAddAlert;
        case "md:MdOutlineAutoDelete":
            return MdOutlineAutoDelete;
        case "md:MdOutlineErrorOutline":
            return MdOutlineErrorOutline;
        case "md:MdOutlineError":
            return MdOutlineError;
        case "md:MdOutlineNotificationImportant":
            return MdOutlineNotificationImportant;
        case "md:MdOutlineWarningAmber":
            return MdOutlineWarningAmber;
        case "md:MdOutlineWarning":
            return MdOutlineWarning;
        case "md:MdOutline10K":
            return MdOutline10K;
        case "md:MdOutline1kPlus":
            return MdOutline1kPlus;
        case "md:MdOutline1K":
            return MdOutline1K;
        case "md:MdOutline2kPlus":
            return MdOutline2kPlus;
        case "md:MdOutline2K":
            return MdOutline2K;
        case "md:MdOutline3kPlus":
            return MdOutline3kPlus;
        case "md:MdOutline3K":
            return MdOutline3K;
        case "md:MdOutline4kPlus":
            return MdOutline4kPlus;
        case "md:MdOutline4K":
            return MdOutline4K;
        case "md:MdOutline5G":
            return MdOutline5G;
        case "md:MdOutline5kPlus":
            return MdOutline5kPlus;
        case "md:MdOutline5K":
            return MdOutline5K;
        case "md:MdOutline6kPlus":
            return MdOutline6kPlus;
        case "md:MdOutline6K":
            return MdOutline6K;
        case "md:MdOutline7kPlus":
            return MdOutline7kPlus;
        case "md:MdOutline7K":
            return MdOutline7K;
        case "md:MdOutline8kPlus":
            return MdOutline8kPlus;
        case "md:MdOutline8K":
            return MdOutline8K;
        case "md:MdOutline9kPlus":
            return MdOutline9kPlus;
        case "md:MdOutline9K":
            return MdOutline9K;
        case "md:MdOutlineAddToQueue":
            return MdOutlineAddToQueue;
        case "md:MdOutlineAirplay":
            return MdOutlineAirplay;
        case "md:MdOutlineAlbum":
            return MdOutlineAlbum;
        case "md:MdOutlineArtTrack":
            return MdOutlineArtTrack;
        case "md:MdOutlineAudioFile":
            return MdOutlineAudioFile;
        case "md:MdOutlineAvTimer":
            return MdOutlineAvTimer;
        case "md:MdOutlineBrandingWatermark":
            return MdOutlineBrandingWatermark;
        case "md:MdOutlineCallToAction":
            return MdOutlineCallToAction;
        case "md:MdOutlineClosedCaptionDisabled":
            return MdOutlineClosedCaptionDisabled;
        case "md:MdOutlineClosedCaptionOff":
            return MdOutlineClosedCaptionOff;
        case "md:MdOutlineClosedCaption":
            return MdOutlineClosedCaption;
        case "md:MdOutlineControlCamera":
            return MdOutlineControlCamera;
        case "md:MdOutlineEqualizer":
            return MdOutlineEqualizer;
        case "md:MdOutlineExplicit":
            return MdOutlineExplicit;
        case "md:MdOutlineFastForward":
            return MdOutlineFastForward;
        case "md:MdOutlineFastRewind":
            return MdOutlineFastRewind;
        case "md:MdOutlineFeaturedPlayList":
            return MdOutlineFeaturedPlayList;
        case "md:MdOutlineFeaturedVideo":
            return MdOutlineFeaturedVideo;
        case "md:MdOutlineFiberDvr":
            return MdOutlineFiberDvr;
        case "md:MdOutlineFiberManualRecord":
            return MdOutlineFiberManualRecord;
        case "md:MdOutlineFiberNew":
            return MdOutlineFiberNew;
        case "md:MdOutlineFiberPin":
            return MdOutlineFiberPin;
        case "md:MdOutlineFiberSmartRecord":
            return MdOutlineFiberSmartRecord;
        case "md:MdOutlineForward10":
            return MdOutlineForward10;
        case "md:MdOutlineForward30":
            return MdOutlineForward30;
        case "md:MdOutlineForward5":
            return MdOutlineForward5;
        case "md:MdOutlineGames":
            return MdOutlineGames;
        case "md:MdOutlineHd":
            return MdOutlineHd;
        case "md:MdOutlineHearingDisabled":
            return MdOutlineHearingDisabled;
        case "md:MdOutlineHearing":
            return MdOutlineHearing;
        case "md:MdOutlineHighQuality":
            return MdOutlineHighQuality;
        case "md:MdOutlineInterpreterMode":
            return MdOutlineInterpreterMode;
        case "md:MdOutlineLibraryAddCheck":
            return MdOutlineLibraryAddCheck;
        case "md:MdOutlineLibraryAdd":
            return MdOutlineLibraryAdd;
        case "md:MdOutlineLibraryBooks":
            return MdOutlineLibraryBooks;
        case "md:MdOutlineLibraryMusic":
            return MdOutlineLibraryMusic;
        case "md:MdOutlineLoop":
            return MdOutlineLoop;
        case "md:MdOutlineLyrics":
            return MdOutlineLyrics;
        case "md:MdOutlineMicNone":
            return MdOutlineMicNone;
        case "md:MdOutlineMicOff":
            return MdOutlineMicOff;
        case "md:MdOutlineMic":
            return MdOutlineMic;
        case "md:MdOutlineMissedVideoCall":
            return MdOutlineMissedVideoCall;
        case "md:MdOutlineMovie":
            return MdOutlineMovie;
        case "md:MdOutlineMusicVideo":
            return MdOutlineMusicVideo;
        case "md:MdOutlineNewReleases":
            return MdOutlineNewReleases;
        case "md:MdOutlineNotInterested":
            return MdOutlineNotInterested;
        case "md:MdOutlineNote":
            return MdOutlineNote;
        case "md:MdOutlinePauseCircleFilled":
            return MdOutlinePauseCircleFilled;
        case "md:MdOutlinePauseCircleOutline":
            return MdOutlinePauseCircleOutline;
        case "md:MdOutlinePauseCircle":
            return MdOutlinePauseCircle;
        case "md:MdOutlinePause":
            return MdOutlinePause;
        case "md:MdOutlinePlayArrow":
            return MdOutlinePlayArrow;
        case "md:MdOutlinePlayCircleFilled":
            return MdOutlinePlayCircleFilled;
        case "md:MdOutlinePlayCircleOutline":
            return MdOutlinePlayCircleOutline;
        case "md:MdOutlinePlayCircle":
            return MdOutlinePlayCircle;
        case "md:MdOutlinePlayDisabled":
            return MdOutlinePlayDisabled;
        case "md:MdOutlinePlaylistAddCheckCircle":
            return MdOutlinePlaylistAddCheckCircle;
        case "md:MdOutlinePlaylistAddCheck":
            return MdOutlinePlaylistAddCheck;
        case "md:MdOutlinePlaylistAddCircle":
            return MdOutlinePlaylistAddCircle;
        case "md:MdOutlinePlaylistAdd":
            return MdOutlinePlaylistAdd;
        case "md:MdOutlinePlaylistPlay":
            return MdOutlinePlaylistPlay;
        case "md:MdOutlinePlaylistRemove":
            return MdOutlinePlaylistRemove;
        case "md:MdOutlineQueueMusic":
            return MdOutlineQueueMusic;
        case "md:MdOutlineQueuePlayNext":
            return MdOutlineQueuePlayNext;
        case "md:MdOutlineQueue":
            return MdOutlineQueue;
        case "md:MdOutlineRadio":
            return MdOutlineRadio;
        case "md:MdOutlineRecentActors":
            return MdOutlineRecentActors;
        case "md:MdOutlineRemoveFromQueue":
            return MdOutlineRemoveFromQueue;
        case "md:MdOutlineRepeatOn":
            return MdOutlineRepeatOn;
        case "md:MdOutlineRepeatOneOn":
            return MdOutlineRepeatOneOn;
        case "md:MdOutlineRepeatOne":
            return MdOutlineRepeatOne;
        case "md:MdOutlineRepeat":
            return MdOutlineRepeat;
        case "md:MdOutlineReplay10":
            return MdOutlineReplay10;
        case "md:MdOutlineReplay30":
            return MdOutlineReplay30;
        case "md:MdOutlineReplay5":
            return MdOutlineReplay5;
        case "md:MdOutlineReplayCircleFilled":
            return MdOutlineReplayCircleFilled;
        case "md:MdOutlineReplay":
            return MdOutlineReplay;
        case "md:MdOutlineSd":
            return MdOutlineSd;
        case "md:MdOutlineShuffleOn":
            return MdOutlineShuffleOn;
        case "md:MdOutlineShuffle":
            return MdOutlineShuffle;
        case "md:MdOutlineSkipNext":
            return MdOutlineSkipNext;
        case "md:MdOutlineSkipPrevious":
            return MdOutlineSkipPrevious;
        case "md:MdOutlineSlowMotionVideo":
            return MdOutlineSlowMotionVideo;
        case "md:MdOutlineSnooze":
            return MdOutlineSnooze;
        case "md:MdOutlineSortByAlpha":
            return MdOutlineSortByAlpha;
        case "md:MdOutlineSpeed":
            return MdOutlineSpeed;
        case "md:MdOutlineStopCircle":
            return MdOutlineStopCircle;
        case "md:MdOutlineStop":
            return MdOutlineStop;
        case "md:MdOutlineSubscriptions":
            return MdOutlineSubscriptions;
        case "md:MdOutlineSubtitles":
            return MdOutlineSubtitles;
        case "md:MdOutlineSurroundSound":
            return MdOutlineSurroundSound;
        case "md:MdOutlineVideoCall":
            return MdOutlineVideoCall;
        case "md:MdOutlineVideoFile":
            return MdOutlineVideoFile;
        case "md:MdOutlineVideoLabel":
            return MdOutlineVideoLabel;
        case "md:MdOutlineVideoLibrary":
            return MdOutlineVideoLibrary;
        case "md:MdOutlineVideoSettings":
            return MdOutlineVideoSettings;
        case "md:MdOutlineVideocamOff":
            return MdOutlineVideocamOff;
        case "md:MdOutlineVideocam":
            return MdOutlineVideocam;
        case "md:MdOutlineVolumeDown":
            return MdOutlineVolumeDown;
        case "md:MdOutlineVolumeMute":
            return MdOutlineVolumeMute;
        case "md:MdOutlineVolumeOff":
            return MdOutlineVolumeOff;
        case "md:MdOutlineVolumeUp":
            return MdOutlineVolumeUp;
        case "md:MdOutlineWebAssetOff":
            return MdOutlineWebAssetOff;
        case "md:MdOutlineWebAsset":
            return MdOutlineWebAsset;
        case "md:MdOutlineWeb":
            return MdOutlineWeb;
        case "md:MdOutline3P":
            return MdOutline3P;
        case "md:MdOutlineAddIcCall":
            return MdOutlineAddIcCall;
        case "md:MdOutlineAlternateEmail":
            return MdOutlineAlternateEmail;
        case "md:MdOutlineAppRegistration":
            return MdOutlineAppRegistration;
        case "md:MdOutlineBusiness":
            return MdOutlineBusiness;
        case "md:MdOutlineCallEnd":
            return MdOutlineCallEnd;
        case "md:MdOutlineCallMade":
            return MdOutlineCallMade;
        case "md:MdOutlineCallMerge":
            return MdOutlineCallMerge;
        case "md:MdOutlineCallMissedOutgoing":
            return MdOutlineCallMissedOutgoing;
        case "md:MdOutlineCallMissed":
            return MdOutlineCallMissed;
        case "md:MdOutlineCallReceived":
            return MdOutlineCallReceived;
        case "md:MdOutlineCallSplit":
            return MdOutlineCallSplit;
        case "md:MdOutlineCall":
            return MdOutlineCall;
        case "md:MdOutlineCancelPresentation":
            return MdOutlineCancelPresentation;
        case "md:MdOutlineCellTower":
            return MdOutlineCellTower;
        case "md:MdOutlineCellWifi":
            return MdOutlineCellWifi;
        case "md:MdOutlineChatBubbleOutline":
            return MdOutlineChatBubbleOutline;
        case "md:MdOutlineChatBubble":
            return MdOutlineChatBubble;
        case "md:MdOutlineChat":
            return MdOutlineChat;
        case "md:MdOutlineClearAll":
            return MdOutlineClearAll;
        case "md:MdOutlineCoPresent":
            return MdOutlineCoPresent;
        case "md:MdOutlineComment":
            return MdOutlineComment;
        case "md:MdOutlineCommentsDisabled":
            return MdOutlineCommentsDisabled;
        case "md:MdOutlineContactEmergency":
            return MdOutlineContactEmergency;
        case "md:MdOutlineContactMail":
            return MdOutlineContactMail;
        case "md:MdOutlineContactPhone":
            return MdOutlineContactPhone;
        case "md:MdOutlineContacts":
            return MdOutlineContacts;
        case "md:MdOutlineDesktopAccessDisabled":
            return MdOutlineDesktopAccessDisabled;
        case "md:MdOutlineDialerSip":
            return MdOutlineDialerSip;
        case "md:MdOutlineDialpad":
            return MdOutlineDialpad;
        case "md:MdOutlineDocumentScanner":
            return MdOutlineDocumentScanner;
        case "md:MdOutlineDomainDisabled":
            return MdOutlineDomainDisabled;
        case "md:MdOutlineDomainVerification":
            return MdOutlineDomainVerification;
        case "md:MdOutlineDuo":
            return MdOutlineDuo;
        case "md:MdOutlineEmail":
            return MdOutlineEmail;
        case "md:MdOutlineForum":
            return MdOutlineForum;
        case "md:MdOutlineForwardToInbox":
            return MdOutlineForwardToInbox;
        case "md:MdOutlineHourglassBottom":
            return MdOutlineHourglassBottom;
        case "md:MdOutlineHourglassTop":
            return MdOutlineHourglassTop;
        case "md:MdOutlineHub":
            return MdOutlineHub;
        case "md:MdOutlineImportContacts":
            return MdOutlineImportContacts;
        case "md:MdOutlineImportExport":
            return MdOutlineImportExport;
        case "md:MdOutlineInvertColorsOff":
            return MdOutlineInvertColorsOff;
        case "md:MdOutlineKeyOff":
            return MdOutlineKeyOff;
        case "md:MdOutlineKey":
            return MdOutlineKey;
        case "md:MdOutlineListAlt":
            return MdOutlineListAlt;
        case "md:MdOutlineLiveHelp":
            return MdOutlineLiveHelp;
        case "md:MdOutlineLocationOff":
            return MdOutlineLocationOff;
        case "md:MdOutlineLocationOn":
            return MdOutlineLocationOn;
        case "md:MdOutlineMailLock":
            return MdOutlineMailLock;
        case "md:MdOutlineMailOutline":
            return MdOutlineMailOutline;
        case "md:MdOutlineMarkChatRead":
            return MdOutlineMarkChatRead;
        case "md:MdOutlineMarkChatUnread":
            return MdOutlineMarkChatUnread;
        case "md:MdOutlineMarkEmailRead":
            return MdOutlineMarkEmailRead;
        case "md:MdOutlineMarkEmailUnread":
            return MdOutlineMarkEmailUnread;
        case "md:MdOutlineMarkUnreadChatAlt":
            return MdOutlineMarkUnreadChatAlt;
        case "md:MdOutlineMessage":
            return MdOutlineMessage;
        case "md:MdOutlineMobileScreenShare":
            return MdOutlineMobileScreenShare;
        case "md:MdOutlineMoreTime":
            return MdOutlineMoreTime;
        case "md:MdOutlineNat":
            return MdOutlineNat;
        case "md:MdOutlineNoSim":
            return MdOutlineNoSim;
        case "md:MdOutlinePausePresentation":
            return MdOutlinePausePresentation;
        case "md:MdOutlinePersonAddDisabled":
            return MdOutlinePersonAddDisabled;
        case "md:MdOutlinePersonSearch":
            return MdOutlinePersonSearch;
        case "md:MdOutlinePhoneDisabled":
            return MdOutlinePhoneDisabled;
        case "md:MdOutlinePhoneEnabled":
            return MdOutlinePhoneEnabled;
        case "md:MdOutlinePhone":
            return MdOutlinePhone;
        case "md:MdOutlinePhonelinkErase":
            return MdOutlinePhonelinkErase;
        case "md:MdOutlinePhonelinkLock":
            return MdOutlinePhonelinkLock;
        case "md:MdOutlinePhonelinkRing":
            return MdOutlinePhonelinkRing;
        case "md:MdOutlinePhonelinkSetup":
            return MdOutlinePhonelinkSetup;
        case "md:MdOutlinePortableWifiOff":
            return MdOutlinePortableWifiOff;
        case "md:MdOutlinePresentToAll":
            return MdOutlinePresentToAll;
        case "md:MdOutlinePrintDisabled":
            return MdOutlinePrintDisabled;
        case "md:MdOutlineQrCode2":
            return MdOutlineQrCode2;
        case "md:MdOutlineQrCodeScanner":
            return MdOutlineQrCodeScanner;
        case "md:MdOutlineQrCode":
            return MdOutlineQrCode;
        case "md:MdOutlineReadMore":
            return MdOutlineReadMore;
        case "md:MdOutlineRingVolume":
            return MdOutlineRingVolume;
        case "md:MdOutlineRssFeed":
            return MdOutlineRssFeed;
        case "md:MdOutlineRtt":
            return MdOutlineRtt;
        case "md:MdOutlineScreenShare":
            return MdOutlineScreenShare;
        case "md:MdOutlineSendTimeExtension":
            return MdOutlineSendTimeExtension;
        case "md:MdOutlineSentimentSatisfiedAlt":
            return MdOutlineSentimentSatisfiedAlt;
        case "md:MdOutlineSip":
            return MdOutlineSip;
        case "md:MdOutlineSpeakerPhone":
            return MdOutlineSpeakerPhone;
        case "md:MdOutlineSpoke":
            return MdOutlineSpoke;
        case "md:MdOutlineStayCurrentLandscape":
            return MdOutlineStayCurrentLandscape;
        case "md:MdOutlineStayCurrentPortrait":
            return MdOutlineStayCurrentPortrait;
        case "md:MdOutlineStayPrimaryLandscape":
            return MdOutlineStayPrimaryLandscape;
        case "md:MdOutlineStayPrimaryPortrait":
            return MdOutlineStayPrimaryPortrait;
        case "md:MdOutlineStopScreenShare":
            return MdOutlineStopScreenShare;
        case "md:MdOutlineSwapCalls":
            return MdOutlineSwapCalls;
        case "md:MdOutlineTextsms":
            return MdOutlineTextsms;
        case "md:MdOutlineUnsubscribe":
            return MdOutlineUnsubscribe;
        case "md:MdOutlineVoicemail":
            return MdOutlineVoicemail;
        case "md:MdOutlineVpnKeyOff":
            return MdOutlineVpnKeyOff;
        case "md:MdOutlineVpnKey":
            return MdOutlineVpnKey;
        case "md:MdOutlineWifiCalling":
            return MdOutlineWifiCalling;
        case "md:MdOutlineAddBox":
            return MdOutlineAddBox;
        case "md:MdOutlineAddCircleOutline":
            return MdOutlineAddCircleOutline;
        case "md:MdOutlineAddCircle":
            return MdOutlineAddCircle;
        case "md:MdOutlineAddLink":
            return MdOutlineAddLink;
        case "md:MdOutlineAdd":
            return MdOutlineAdd;
        case "md:MdOutlineAmpStories":
            return MdOutlineAmpStories;
        case "md:MdOutlineArchive":
            return MdOutlineArchive;
        case "md:MdOutlineAttribution":
            return MdOutlineAttribution;
        case "md:MdOutlineBackspace":
            return MdOutlineBackspace;
        case "md:MdOutlineBallot":
            return MdOutlineBallot;
        case "md:MdOutlineBiotech":
            return MdOutlineBiotech;
        case "md:MdOutlineBlock":
            return MdOutlineBlock;
        case "md:MdOutlineBolt":
            return MdOutlineBolt;
        case "md:MdOutlineCalculate":
            return MdOutlineCalculate;
        case "md:MdOutlineChangeCircle":
            return MdOutlineChangeCircle;
        case "md:MdOutlineClear":
            return MdOutlineClear;
        case "md:MdOutlineContentCopy":
            return MdOutlineContentCopy;
        case "md:MdOutlineContentCut":
            return MdOutlineContentCut;
        case "md:MdOutlineContentPasteGo":
            return MdOutlineContentPasteGo;
        case "md:MdOutlineContentPasteOff":
            return MdOutlineContentPasteOff;
        case "md:MdOutlineContentPasteSearch":
            return MdOutlineContentPasteSearch;
        case "md:MdOutlineContentPaste":
            return MdOutlineContentPaste;
        case "md:MdOutlineCopyAll":
            return MdOutlineCopyAll;
        case "md:MdOutlineCreate":
            return MdOutlineCreate;
        case "md:MdOutlineDeleteSweep":
            return MdOutlineDeleteSweep;
        case "md:MdOutlineDeselect":
            return MdOutlineDeselect;
        case "md:MdOutlineDrafts":
            return MdOutlineDrafts;
        case "md:MdOutlineDynamicFeed":
            return MdOutlineDynamicFeed;
        case "md:MdOutlineFileCopy":
            return MdOutlineFileCopy;
        case "md:MdOutlineFilterListOff":
            return MdOutlineFilterListOff;
        case "md:MdOutlineFilterList":
            return MdOutlineFilterList;
        case "md:MdOutlineFlagCircle":
            return MdOutlineFlagCircle;
        case "md:MdOutlineFlag":
            return MdOutlineFlag;
        case "md:MdOutlineFontDownloadOff":
            return MdOutlineFontDownloadOff;
        case "md:MdOutlineFontDownload":
            return MdOutlineFontDownload;
        case "md:MdOutlineForward":
            return MdOutlineForward;
        case "md:MdOutlineGesture":
            return MdOutlineGesture;
        case "md:MdOutlineHowToReg":
            return MdOutlineHowToReg;
        case "md:MdOutlineHowToVote":
            return MdOutlineHowToVote;
        case "md:MdOutlineInbox":
            return MdOutlineInbox;
        case "md:MdOutlineInsights":
            return MdOutlineInsights;
        case "md:MdOutlineInventory2":
            return MdOutlineInventory2;
        case "md:MdOutlineInventory":
            return MdOutlineInventory;
        case "md:MdOutlineLinkOff":
            return MdOutlineLinkOff;
        case "md:MdOutlineLink":
            return MdOutlineLink;
        case "md:MdOutlineLowPriority":
            return MdOutlineLowPriority;
        case "md:MdOutlineMail":
            return MdOutlineMail;
        case "md:MdOutlineMarkunread":
            return MdOutlineMarkunread;
        case "md:MdOutlineMoveToInbox":
            return MdOutlineMoveToInbox;
        case "md:MdOutlineNextWeek":
            return MdOutlineNextWeek;
        case "md:MdOutlineOutlinedFlag":
            return MdOutlineOutlinedFlag;
        case "md:MdOutlinePolicy":
            return MdOutlinePolicy;
        case "md:MdOutlinePushPin":
            return MdOutlinePushPin;
        case "md:MdOutlineRedo":
            return MdOutlineRedo;
        case "md:MdOutlineRemoveCircleOutline":
            return MdOutlineRemoveCircleOutline;
        case "md:MdOutlineRemoveCircle":
            return MdOutlineRemoveCircle;
        case "md:MdOutlineRemove":
            return MdOutlineRemove;
        case "md:MdOutlineReplyAll":
            return MdOutlineReplyAll;
        case "md:MdOutlineReply":
            return MdOutlineReply;
        case "md:MdOutlineReportGmailerrorred":
            return MdOutlineReportGmailerrorred;
        case "md:MdOutlineReportOff":
            return MdOutlineReportOff;
        case "md:MdOutlineReport":
            return MdOutlineReport;
        case "md:MdOutlineSaveAlt":
            return MdOutlineSaveAlt;
        case "md:MdOutlineSaveAs":
            return MdOutlineSaveAs;
        case "md:MdOutlineSave":
            return MdOutlineSave;
        case "md:MdOutlineSelectAll":
            return MdOutlineSelectAll;
        case "md:MdOutlineSend":
            return MdOutlineSend;
        case "md:MdOutlineShield":
            return MdOutlineShield;
        case "md:MdOutlineSort":
            return MdOutlineSort;
        case "md:MdOutlineSquareFoot":
            return MdOutlineSquareFoot;
        case "md:MdOutlineStackedBarChart":
            return MdOutlineStackedBarChart;
        case "md:MdOutlineStream":
            return MdOutlineStream;
        case "md:MdOutlineTag":
            return MdOutlineTag;
        case "md:MdOutlineTextFormat":
            return MdOutlineTextFormat;
        case "md:MdOutlineUnarchive":
            return MdOutlineUnarchive;
        case "md:MdOutlineUndo":
            return MdOutlineUndo;
        case "md:MdOutlineUpcoming":
            return MdOutlineUpcoming;
        case "md:MdOutlineWaves":
            return MdOutlineWaves;
        case "md:MdOutlineWebStories":
            return MdOutlineWebStories;
        case "md:MdOutlineWeekend":
            return MdOutlineWeekend;
        case "md:MdOutlineWhereToVote":
            return MdOutlineWhereToVote;
        case "md:MdOutline1xMobiledata":
            return MdOutline1xMobiledata;
        case "md:MdOutline30Fps":
            return MdOutline30Fps;
        case "md:MdOutline3gMobiledata":
            return MdOutline3gMobiledata;
        case "md:MdOutline4gMobiledata":
            return MdOutline4gMobiledata;
        case "md:MdOutline4gPlusMobiledata":
            return MdOutline4gPlusMobiledata;
        case "md:MdOutline60Fps":
            return MdOutline60Fps;
        case "md:MdOutlineAccessAlarm":
            return MdOutlineAccessAlarm;
        case "md:MdOutlineAccessAlarms":
            return MdOutlineAccessAlarms;
        case "md:MdOutlineAccessTimeFilled":
            return MdOutlineAccessTimeFilled;
        case "md:MdOutlineAccessTime":
            return MdOutlineAccessTime;
        case "md:MdOutlineAdUnits":
            return MdOutlineAdUnits;
        case "md:MdOutlineAddAlarm":
            return MdOutlineAddAlarm;
        case "md:MdOutlineAddToHomeScreen":
            return MdOutlineAddToHomeScreen;
        case "md:MdOutlineAir":
            return MdOutlineAir;
        case "md:MdOutlineAirplaneTicket":
            return MdOutlineAirplaneTicket;
        case "md:MdOutlineAirplanemodeActive":
            return MdOutlineAirplanemodeActive;
        case "md:MdOutlineAirplanemodeInactive":
            return MdOutlineAirplanemodeInactive;
        case "md:MdOutlineAod":
            return MdOutlineAod;
        case "md:MdOutlineBattery0Bar":
            return MdOutlineBattery0Bar;
        case "md:MdOutlineBattery1Bar":
            return MdOutlineBattery1Bar;
        case "md:MdOutlineBattery2Bar":
            return MdOutlineBattery2Bar;
        case "md:MdOutlineBattery3Bar":
            return MdOutlineBattery3Bar;
        case "md:MdOutlineBattery4Bar":
            return MdOutlineBattery4Bar;
    }
}
