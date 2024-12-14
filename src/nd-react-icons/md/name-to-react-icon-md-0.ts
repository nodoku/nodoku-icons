import type {IconType} from "react-icons";

import {
    Md123,
    Md3dRotation,
    MdAbc,
    MdAccessibilityNew,
    MdAccessibility,
    MdAccessibleForward,
    MdAccessible,
    MdAccountBalanceWallet,
    MdAccountBalance,
    MdAccountBox,
    MdAccountCircle,
    MdAddCard,
    MdAddHome,
    MdAddShoppingCart,
    MdAddTask,
    MdAddToDrive,
    MdAddchart,
    MdAdminPanelSettings,
    MdAdsClick,
    MdAlarmAdd,
    MdAlarmOff,
    MdAlarmOn,
    MdAlarm,
    MdAllInbox,
    MdAllOut,
    MdAnalytics,
    MdAnchor,
    MdAndroid,
    MdAnnouncement,
    MdApi,
    MdAppBlocking,
    MdAppShortcut,
    MdArrowCircleDown,
    MdArrowCircleLeft,
    MdArrowCircleRight,
    MdArrowCircleUp,
    MdArrowOutward,
    MdArrowRightAlt,
    MdArticle,
    MdAspectRatio,
    MdAssessment,
    MdAssignmentAdd,
    MdAssignmentInd,
    MdAssignmentLate,
    MdAssignmentReturn,
    MdAssignmentReturned,
    MdAssignmentTurnedIn,
    MdAssignment,
    MdAssuredWorkload,
    MdAutorenew,
    MdBackupTable,
    MdBackup,
    MdBalance,
    MdBarcodeReader,
    MdBatchPrediction,
    MdBookOnline,
    MdBook,
    MdBookmarkAdd,
    MdBookmarkAdded,
    MdBookmarkBorder,
    MdBookmarkRemove,
    MdBookmark,
    MdBookmarks,
    MdBrowseGallery,
    MdBugReport,
    MdBuildCircle,
    MdBuild,
    MdCached,
    MdCalendarMonth,
    MdCalendarToday,
    MdCalendarViewDay,
    MdCalendarViewMonth,
    MdCalendarViewWeek,
    MdCameraEnhance,
    MdCancelScheduleSend,
    MdCardGiftcard,
    MdCardMembership,
    MdCardTravel,
    MdChangeHistory,
    MdCheckCircleOutline,
    MdCheckCircle,
    MdChromeReaderMode,
    MdCircleNotifications,
    MdClass,
    MdCloseFullscreen,
    MdCodeOff,
    MdCode,
    MdCommentBank,
    MdCommit,
    MdCommute,
    MdCompareArrows,
    MdCompress,
    MdContactPage,
    MdContactSupport,
    MdContactless,
    MdCopyright,
    MdCreditCardOff,
    MdCreditCard,
    MdCss,
    MdCurrencyExchange,
    MdDangerous,
    MdDashboardCustomize,
    MdDashboard,
    MdDataExploration,
    MdDataThresholding,
    MdDateRange,
    MdDeleteForever,
    MdDeleteOutline,
    MdDelete,
    MdDensityLarge,
    MdDensityMedium,
    MdDensitySmall,
    MdDescription,
    MdDisabledByDefault,
    MdDisabledVisible,
    MdDisplaySettings,
    MdDns,
    MdDoneAll,
    MdDoneOutline,
    MdDone,
    MdDonutLarge,
    MdDonutSmall,
    MdDragIndicator,
    MdDynamicForm,
    MdEco,
    MdEditCalendar,
    MdEditDocument,
    MdEditOff,
    MdEditSquare,
    MdEject,
    MdEuroSymbol,
    MdEventRepeat,
    MdEventSeat,
    MdEvent,
    MdExitToApp,
    MdExpand,
    MdExploreOff,
    MdExplore,
    MdExtensionOff,
    MdExtension,
    MdFace,
    MdFactCheck,
    MdFavoriteBorder,
    MdFavorite,
    MdFax,
    MdFeedback,
    MdFilePresent,
    MdFilterAltOff,
    MdFilterAlt,
    MdFilterListAlt,
    MdFindInPage,
    MdFindReplace,
    MdFingerprint,
    MdFitScreen,
    MdFlaky,
    MdFlightLand,
    MdFlightTakeoff,
    MdFlipToBack,
    MdFlipToFront,
    MdFlutterDash,
    MdFreeCancellation,
    MdGTranslate,
    MdGavel,
    MdGeneratingTokens,
    MdGetApp,
    MdGifBox,
    MdGif,
    MdGrade,
    MdGrading,
    MdGroupWork,
    MdHelpCenter,
    MdHelpOutline,
    MdHelp,
    MdHideSource,
    MdHighlightAlt,
    MdHighlightOff,
    MdHistoryToggleOff,
    MdHistory,
    MdHlsOff,
    MdHls,
    MdHomeFilled,
    MdHome,
    MdHorizontalSplit,
    MdHotelClass,
    MdHourglassDisabled,
    MdHourglassEmpty,
    MdHourglassFull,
    MdHtml,
    MdHttp,
    MdHttps,
    MdImportantDevices,
    MdInfoOutline,
    MdInfo,
    MdInput,
    MdInstallDesktop,
    MdInstallMobile,
    MdIntegrationInstructions,
    MdInvertColors,
    MdJavascript,
    MdJoinFull,
    MdJoinInner,
    MdJoinLeft,
    MdJoinRight,
    MdLabelImportantOutline,
    MdLabelImportant,
    MdLabelOff,
    MdLabelOutline,
    MdLabel,
    MdLanguage,
    MdLaunch,
    MdLeaderboard,
    MdLightbulbCircle,
    MdLightbulbOutline,
    MdLightbulb,
    MdLineStyle,
    MdLineWeight,
    MdList,
    MdLockClock,
    MdLockOpen,
    MdLockOutline,
    MdLockPerson,
    MdLockReset,
    MdLock,
    MdLogin,
    MdLogout,
    MdLoyalty,
    MdManageAccounts,
    MdManageHistory,
    MdMarkAsUnread,
    MdMarkunreadMailbox,
    MdMaximize,
    MdMediation,
    MdMinimize,
    MdModelTraining,
    MdNetworkPing,
    MdNewLabel,
    MdNextPlan,
    MdNightlightRound,
    MdNoAccounts,
    MdNoiseAware,
    MdNoiseControlOff,
    MdNotAccessible,
    MdNotStarted,
    MdNoteAdd,
    MdOfflineBolt,
    MdOfflinePin,
    MdOnDeviceTraining,
    MdOnlinePrediction,
    MdOpacity,
    MdOpenInBrowser,
    MdOpenInFull,
    MdOpenInNewOff,
    MdOpenInNew,
    MdOpenWith,
    MdOutbond,
    MdOutbound,
    MdOutbox,
    MdOutgoingMail,
    MdOutlet,
    MdOutput,
    MdPageview,
    MdPaid,
    MdPanToolAlt,
    MdPanTool,
    MdPayment,
    MdPendingActions,
    MdPending,
    MdPercent,
    MdPermCameraMic,
    MdPermContactCalendar,
    MdPermDataSetting,
    MdPermDeviceInformation,
    MdPermIdentity,
    MdPermMedia,
    MdPermPhoneMsg,
    MdPermScanWifi,
    MdPets,
    MdPhp,
    MdPictureInPictureAlt,
    MdPictureInPicture,
    MdPinEnd,
    MdPinInvoke,
    MdPinch,
    MdPlagiarism,
    MdPlayForWork,
    MdPolymer,
    MdPowerSettingsNew,
    MdPregnantWoman,
    MdPreview,
    MdPrint,
    MdPrivacyTip,
    MdPrivateConnectivity,
    MdProductionQuantityLimits,
    MdPublishedWithChanges,
    MdQueryBuilder,
    MdQuestionAnswer,
    MdQuestionMark,
    MdQuickreply,
    MdRebaseEdit,
    MdReceipt,
    MdRecordVoiceOver,
    MdRedeem,
    MdRemoveDone,
    MdRemoveShoppingCart,
    MdReorder,
    MdRepartition,
    MdReportProblem,
    MdRequestPage,
    MdRestoreFromTrash,
    MdRestorePage,
    MdRestore,
    MdRocketLaunch,
    MdRocket,
    MdRoom,
    MdRoundedCorner,
    MdRowing,
    MdRule,
    MdSatelliteAlt,
    MdSavedSearch,
    MdSavings,
    MdScheduleSend,
    MdSchedule,
    MdSearchOff,
    MdSearch,
    MdSegment,
    MdSendAndArchive,
    MdSensorsOff,
    MdSensors,
    MdSettingsAccessibility,
    MdSettingsApplications,
    MdSettingsBackupRestore,
    MdSettingsBluetooth,
    MdSettingsBrightness,
    MdSettingsCell,
    MdSettingsEthernet,
    MdSettingsInputAntenna,
    MdSettingsInputComponent,
    MdSettingsInputComposite,
    MdSettingsInputHdmi,
    MdSettingsInputSvideo,
    MdSettingsOverscan,
    MdSettingsPhone,
    MdSettingsPower,
    MdSettingsRemote,
    MdSettingsVoice,
    MdSettings,
    MdShop2,
    MdShopTwo,
    MdShop,
    MdShoppingBag,
    MdShoppingBasket,
    MdShoppingCartCheckout,
    MdShoppingCart,
    MdSmartButton,
    MdSource,
    MdSpaceDashboard,
    MdSpatialAudioOff,
    MdSpatialAudio,
    MdSpatialTracking,
    MdSpeakerNotesOff,
    MdSpeakerNotes,
    MdSpellcheck,
    MdStarRate,
    MdStars,
    MdStickyNote2,
    MdStore,
    MdSubject,
    MdSubtitlesOff,
    MdSupervisedUserCircle,
    MdSupervisorAccount,
    MdSupport,
    MdSwapHoriz,
    MdSwapHorizontalCircle,
    MdSwapVert,
    MdSwapVerticalCircle,
    MdSwipeDownAlt,
    MdSwipeDown,
    MdSwipeLeftAlt,
    MdSwipeLeft,
    MdSwipeRightAlt,
    MdSwipeRight,
    MdSwipeUpAlt,
    MdSwipeUp,
    MdSwipeVertical,
    MdSwipe,
    MdSwitchAccessShortcutAdd,
    MdSwitchAccessShortcut,
    MdSyncAlt,
    MdSystemUpdateAlt,
    MdTabUnselected,
    MdTab,
    MdTableView,
    MdTaskAlt,
    MdTerminal,
    MdTextRotateUp,
    MdTextRotateVertical,
    MdTextRotationAngledown,
    MdTextRotationAngleup,
    MdTextRotationDown,
    MdTextRotationNone,
    MdTheaters,
    MdThumbDownOffAlt,
    MdThumbDown,
    MdThumbUpOffAlt,
    MdThumbUp,
    MdThumbsUpDown,
    MdTimeline,
    MdTipsAndUpdates,
    MdToc,
    MdToday,
    MdToken,
    MdToll,
    MdTouchApp,
    MdTour,
    MdTrackChanges,
    MdTranscribe,
    MdTranslate,
    MdTrendingDown,
    MdTrendingFlat,
    MdTrendingUp,
    MdTroubleshoot,
    MdTry,
    MdTurnedInNot,
    MdTurnedIn,
    MdUnfoldLessDouble,
    MdUnfoldMoreDouble,
    MdUnpublished,
    MdUpdateDisabled,
    MdUpdate,
    MdUpgrade,
    MdVerifiedUser,
    MdVerified,
    MdVerticalSplit,
    MdViewAgenda,
    MdViewArray,
    MdViewCarousel,
    MdViewColumn,
    MdViewComfyAlt,
    MdViewCompactAlt,
    MdViewCozy,
    MdViewDay,
    MdViewHeadline,
    MdViewInAr,
    MdViewKanban,
    MdViewList,
    MdViewModule,
    MdViewQuilt,
    MdViewSidebar,
    MdViewStream,
    MdViewTimeline,
    MdViewWeek,
    MdVisibilityOff,
    MdVisibility,
    MdVoiceOverOff,
    MdWatchLater,
    MdWebhook,
    MdWidthFull,
    MdWidthNormal,
    MdWidthWide,
    MdWifiProtectedSetup,
    MdWorkHistory,
    MdWorkOff,
    MdWorkOutline,
    MdWork,
    MdWysiwyg,
    MdYoutubeSearchedFor,
    MdZoomIn,
    MdZoomOut,
    MdAddAlert,
    MdAutoDelete,
    MdErrorOutline,
    MdError,
    MdNotificationImportant,
    MdWarningAmber,
    MdWarning,
    Md10K,
    Md1kPlus,
    Md1K,
    Md2kPlus,
    Md2K,
    Md3kPlus,
    Md3K,
    Md4kPlus,
    Md4K,
    Md5G,
    Md5kPlus,
    Md5K,
    Md6kPlus,
    Md6K,
    Md7kPlus,
    Md7K,
    Md8kPlus,
    Md8K,
    Md9kPlus,
    Md9K,
    MdAddToQueue,
    MdAirplay,
    MdAlbum,
    MdArtTrack,
    MdAudioFile,
    MdAvTimer,
    MdBrandingWatermark,
    MdCallToAction,
    MdClosedCaptionDisabled,
    MdClosedCaptionOff,
    MdClosedCaption,
    MdControlCamera,
    MdEqualizer,
    MdExplicit,
    MdFastForward,
    MdFastRewind,
    MdFeaturedPlayList,
    MdFeaturedVideo,
    MdFiberDvr,
    MdFiberManualRecord,
    MdFiberNew,
    MdFiberPin,
    MdFiberSmartRecord,
    MdForward10,
    MdForward30,
    MdForward5,
    MdGames,
    MdHd,
    MdHearingDisabled,
    MdHearing,
    MdHighQuality,
    MdInterpreterMode,
    MdLibraryAddCheck,
    MdLibraryAdd,
    MdLibraryBooks,
    MdLibraryMusic,
    MdLoop,
    MdLyrics,
    MdMicNone,
    MdMicOff,
    MdMic,
    MdMissedVideoCall,
    MdMovieEdit,
    MdMovie,
    MdMusicVideo,
    MdNewReleases,
    MdNotInterested,
    MdNote,
    MdPauseCircleFilled,
    MdPauseCircleOutline,
    MdPauseCircle,
    MdPause,
    MdPlayArrow,
    MdPlayCircleFilled,
    MdPlayCircleOutline,
    MdPlayCircle,
    MdPlayDisabled,
    MdPlaylistAddCheckCircle,
    MdPlaylistAddCheck,
    MdPlaylistAddCircle,
    MdPlaylistAdd,
    MdPlaylistPlay,
    MdPlaylistRemove,
    MdQueueMusic,
    MdQueuePlayNext,
    MdQueue,
    MdRadio,
    MdRecentActors,
    MdRemoveFromQueue,
    MdRepeatOn,
    MdRepeatOneOn,
    MdRepeatOne,
    MdRepeat,
    MdReplay10,
    MdReplay30,
    MdReplay5,
    MdReplayCircleFilled,
    MdReplay,
    MdSd,
    MdShuffleOn,
    MdShuffle,
    MdSkipNext,
    MdSkipPrevious,
    MdSlowMotionVideo,
    MdSnooze,
    MdSortByAlpha,
    MdSpeed,
    MdStopCircle,
    MdStop,
    MdSubscriptions,
    MdSubtitles,
    MdSurroundSound,
    MdVideoCall,
    MdVideoFile,
    MdVideoLabel,
    MdVideoLibrary,
    MdVideoSettings,
    MdVideocamOff,
    MdVideocam,
    MdVolumeDownAlt,
    MdVolumeDown,
    MdVolumeMute,
    MdVolumeOff,
    MdVolumeUp,
    MdWebAssetOff,
    MdWebAsset,
    MdWeb,
    Md3P,
    MdAddIcCall,
    MdAlternateEmail,
    MdAppRegistration,
    MdBusiness,
    MdCallEnd,
    MdCallMade,
    MdCallMerge,
    MdCallMissedOutgoing,
    MdCallMissed,
    MdCallReceived,
    MdCallSplit,
    MdCall,
    MdCancelPresentation,
    MdCellTower,
    MdCellWifi,
    MdChatBubbleOutline,
    MdChatBubble,
    MdChat,
    MdClearAll,
    MdCoPresent,
    MdComment,
    MdCommentsDisabled,
    MdContactEmergency,
    MdContactMail,
    MdContactPhone,
    MdContacts,
    MdDesktopAccessDisabled,
    MdDialerSip,
    MdDialpad,
    MdDocumentScanner,
    MdDomainDisabled,
    MdDomainVerification,
    MdDuo,
    MdEmail,
    MdForum,
    MdForwardToInbox,
    MdHourglassBottom,
    MdHourglassTop,
    MdHub,
    MdImportContacts,
    MdImportExport,
    MdInvertColorsOff,
    MdKeyOff,
    MdKey,
    MdListAlt,
    MdLiveHelp,
    MdLocationOff,
    MdLocationOn,
    MdMailLock,
    MdMailOutline,
    MdMarkChatRead,
    MdMarkChatUnread,
    MdMarkEmailRead,
    MdMarkEmailUnread,
    MdMarkUnreadChatAlt,
    MdMessage,
    MdMobileScreenShare,
    MdMoreTime,
    MdNat,
    MdNoSim,
    MdPausePresentation,
    MdPersonAddDisabled,
    MdPersonSearch,
    MdPhoneDisabled,
    MdPhoneEnabled,
    MdPhone,
    MdPhonelinkErase,
    MdPhonelinkLock,
    MdPhonelinkRing,
    MdPhonelinkSetup,
    MdPortableWifiOff,
    MdPresentToAll,
    MdPrintDisabled,
    MdQrCode2,
    MdQrCodeScanner,
    MdQrCode,
    MdReadMore,
    MdRingVolume,
    MdRssFeed,
    MdRtt,
    MdScreenShare,
    MdSendTimeExtension,
    MdSentimentSatisfiedAlt,
    MdSip,
    MdSpeakerPhone,
    MdSpoke,
    MdStayCurrentLandscape,
    MdStayCurrentPortrait,
    MdStayPrimaryLandscape,
    MdStayPrimaryPortrait,
    MdStopScreenShare,
    MdSwapCalls,
    MdTextsms,
    MdUnsubscribe,
    MdVoicemail,
    MdVpnKeyOff,
    MdVpnKey,
    MdWifiCalling,
    MdAddBox,
    MdAddCircleOutline,
    MdAddCircle,
    MdAddLink,
    MdAdd,
    MdAmpStories,
    MdArchive,
    MdAttribution,
    MdBackspace,
    MdBallot,
    MdBiotech,
    MdBlockFlipped,
    MdBlock,
    MdBolt,
    MdCalculate,
    MdChangeCircle,
    MdClear,
    MdContentCopy,
    MdContentCut,
    MdContentPasteGo,
    MdContentPasteOff,
    MdContentPasteSearch,
    MdContentPaste,
    MdCopyAll,
    MdCreate,
    MdDeleteSweep,
    MdDeselect,
    MdDrafts,
    MdDynamicFeed,
    MdFileCopy,
    MdFilterListOff,
    MdFilterList,
    MdFlagCircle,
    MdFlag,
    MdFontDownloadOff,
    MdFontDownload,
    MdForward,
    MdGesture,
    MdHowToReg,
    MdHowToVote,
    MdInbox,
    MdInsights,
    MdInventory2,
    MdInventory,
    MdLinkOff,
    MdLink,
    MdLowPriority,
    MdMail,
    MdMarkunread,
    MdMoveToInbox,
    MdNextWeek,
    MdOutlinedFlag,
    MdPolicy,
    MdPushPin,
    MdRedo,
    MdRemoveCircleOutline,
    MdRemoveCircle,
    MdRemove,
    MdReplyAll,
    MdReply,
    MdReportGmailerrorred,
    MdReportOff,
    MdReport,
    MdSaveAlt,
    MdSaveAs,
    MdSave,
    MdSelectAll,
    MdSend,
    MdShield,
    MdSort,
    MdSquareFoot,
    MdStackedBarChart,
    MdStream,
    MdTag,
    MdTextFormat,
    MdUnarchive,
    MdUndo,
    MdUpcoming,
    MdWaves,
    MdWebStories,
    MdWeekend,
    MdWhereToVote,
    Md1xMobiledata,
    Md30Fps,
    Md3gMobiledata,
    Md4gMobiledata,
    Md4gPlusMobiledata,
    Md60Fps,
    MdAccessAlarm,
    MdAccessAlarms,
    MdAccessTimeFilled,
    MdAccessTime,
    MdAdUnits,
    MdAddAlarm,
    MdAddToHomeScreen,
    MdAir,
    MdAirplaneTicket,
    MdAirplanemodeActive,
    MdAirplanemodeInactive,
    MdAod,
    MdBattery0Bar,
    MdBattery1Bar,
    MdBattery2Bar,
    MdBattery3Bar,
    MdBattery4Bar,
    MdBattery5Bar,
    MdBattery6Bar,
    MdBatteryAlert,
    MdBatteryChargingFull,
    MdBatteryFull,
    MdBatterySaver,
    MdBatteryStd,
    MdBatteryUnknown,
    MdBloodtype,
    MdBluetoothConnected,
    MdBluetoothDisabled,
    MdBluetoothDrive,
    MdBluetoothSearching,
    MdBluetooth,
    MdBrightnessAuto,
    MdBrightnessHigh,
    MdBrightnessLow,
    MdBrightnessMedium,
    MdCable,
    MdCameraswitch,
    MdCreditScore,
    MdDarkMode,
    MdDataSaverOff,
    MdDataSaverOn,
    MdDataUsage,
    MdDatasetLinked,
    MdDataset,
    MdDeveloperMode,
    MdDeviceThermostat,
    MdDevicesFold,
    MdDevices,
    MdDiscount,
    MdDoNotDisturbOnTotalSilence,
    MdDvr,
    MdEMobiledata,
    MdEdgesensorHigh,
    MdEdgesensorLow,
    MdFlashlightOff,
    MdFlashlightOn,
    MdFlourescent,
    MdFluorescent,
    MdFmdBad,
    MdFmdGood,
    MdGMobiledata,
    MdGppBad,
    MdGppGood,
    MdGppMaybe,
    MdGpsFixed,
    MdGpsNotFixed,
    MdGpsOff,
    MdGraphicEq,
    MdGrid3X3,
    MdGrid4X4,
    MdGridGoldenratio,
    MdHMobiledata,
    MdHPlusMobiledata,
    MdHdrAutoSelect,
    MdHdrAuto,
    MdHdrOffSelect,
    MdHdrOnSelect,
    MdLan,
    MdLensBlur,
    MdLightMode,
    MdLocationDisabled,
    MdLocationSearching,
    MdLteMobiledata,
    MdLtePlusMobiledata,
    MdMacroOff,
    MdMediaBluetoothOff,
    MdMediaBluetoothOn,
    MdMedicationLiquid,
    MdMedication,
    MdMobileFriendly,
    MdMobileOff,
    MdMobiledataOff,
    MdModeNight,
    MdModeStandby,
    MdMonitorHeart,
    MdMonitorWeight,
    MdNearbyError,
    MdNearbyOff,
    MdNetworkCell,
    MdNetworkWifi1Bar,
    MdNetworkWifi2Bar,
    MdNetworkWifi3Bar,
    MdNetworkWifi,
    MdNfc,
    MdNightlight,
    MdNoteAlt,
    MdPassword,
    MdPattern,
    MdPhishing,
    MdPin,
    MdPlayLesson,
    MdPriceChange,
    MdPriceCheck,
    MdPunchClock,
    MdQuiz,
    MdRMobiledata,
    MdRadar,
    MdRememberMe,
    MdResetTv,
    MdRestartAlt,
    MdReviews,
    MdRsvp,
    MdScreenLockLandscape,
    MdScreenLockPortrait,
    MdScreenLockRotation,
    MdScreenRotation,
    MdScreenSearchDesktop,
    MdScreenshotMonitor,
    MdScreenshot,
    MdSdStorage,
    MdSecurityUpdateGood,
    MdSecurityUpdateWarning,
    MdSecurityUpdate,
    MdSell,
    MdSendToMobile,
    MdSettingsSuggest,
    MdSettingsSystemDaydream,
    MdShareLocation,
    MdShortcut,
    MdSignalCellular0Bar,
    MdSignalCellular4Bar,
    MdSignalCellularAlt1Bar,
    MdSignalCellularAlt2Bar,
    MdSignalCellularAlt,
    MdSignalCellularConnectedNoInternet0Bar,
    MdSignalCellularConnectedNoInternet4Bar,
    MdSignalCellularNoSim,
    MdSignalCellularNodata,
    MdSignalCellularNull,
    MdSignalCellularOff,
    MdSignalWifi0Bar,
    MdSignalWifi4BarLock,
    MdSignalWifi4Bar,
    MdSignalWifiBad,
    MdSignalWifiConnectedNoInternet4,
    MdSignalWifiOff,
    MdSignalWifiStatusbar4Bar,
    MdSignalWifiStatusbarConnectedNoInternet4,
    MdSignalWifiStatusbarNull,
    MdSimCardDownload,
    MdSplitscreen,
    MdSportsScore,
    MdSsidChart,
    MdStorage,
    MdStorm,
    MdSummarize,
    MdSystemSecurityUpdateGood,
    MdSystemSecurityUpdateWarning,
    MdSystemSecurityUpdate,
    MdTask,
    MdThermostat,
    MdTimer10Select,
    MdTimer3Select,
    MdTungsten,
    MdUsbOff,
    MdUsb,
    MdWallpaper,
    MdWater,
    MdWidgets,
    MdWifi1Bar,
    MdWifi2Bar,
    MdWifiCalling3,
    MdWifiChannel,
    MdWifiFind,
    MdWifiLock,
    MdWifiPassword,
    MdWifiTetheringErrorRounded,
    MdWifiTetheringError,
    MdWifiTetheringOff,
    MdWifiTethering,
    MdAddChart,
    MdAddComment,
    MdAlignHorizontalCenter,
    MdAlignHorizontalLeft,
    MdAlignHorizontalRight,
    MdAlignVerticalBottom,
    MdAlignVerticalCenter,
    MdAlignVerticalTop,
    MdAreaChart,
    MdAttachFile,
    MdAttachMoney,
    MdAutoGraph,
    MdBarChart,
    MdBorderAll,
    MdBorderBottom,
    MdBorderClear,
    MdBorderColor,
    MdBorderHorizontal,
    MdBorderInner,
    MdBorderLeft,
    MdBorderOuter,
} from "react-icons/md"

export function nameToReactIcon_md_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "md:Md123":
            return Md123;
        case "md:Md3dRotation":
            return Md3dRotation;
        case "md:MdAbc":
            return MdAbc;
        case "md:MdAccessibilityNew":
            return MdAccessibilityNew;
        case "md:MdAccessibility":
            return MdAccessibility;
        case "md:MdAccessibleForward":
            return MdAccessibleForward;
        case "md:MdAccessible":
            return MdAccessible;
        case "md:MdAccountBalanceWallet":
            return MdAccountBalanceWallet;
        case "md:MdAccountBalance":
            return MdAccountBalance;
        case "md:MdAccountBox":
            return MdAccountBox;
        case "md:MdAccountCircle":
            return MdAccountCircle;
        case "md:MdAddCard":
            return MdAddCard;
        case "md:MdAddHome":
            return MdAddHome;
        case "md:MdAddShoppingCart":
            return MdAddShoppingCart;
        case "md:MdAddTask":
            return MdAddTask;
        case "md:MdAddToDrive":
            return MdAddToDrive;
        case "md:MdAddchart":
            return MdAddchart;
        case "md:MdAdminPanelSettings":
            return MdAdminPanelSettings;
        case "md:MdAdsClick":
            return MdAdsClick;
        case "md:MdAlarmAdd":
            return MdAlarmAdd;
        case "md:MdAlarmOff":
            return MdAlarmOff;
        case "md:MdAlarmOn":
            return MdAlarmOn;
        case "md:MdAlarm":
            return MdAlarm;
        case "md:MdAllInbox":
            return MdAllInbox;
        case "md:MdAllOut":
            return MdAllOut;
        case "md:MdAnalytics":
            return MdAnalytics;
        case "md:MdAnchor":
            return MdAnchor;
        case "md:MdAndroid":
            return MdAndroid;
        case "md:MdAnnouncement":
            return MdAnnouncement;
        case "md:MdApi":
            return MdApi;
        case "md:MdAppBlocking":
            return MdAppBlocking;
        case "md:MdAppShortcut":
            return MdAppShortcut;
        case "md:MdArrowCircleDown":
            return MdArrowCircleDown;
        case "md:MdArrowCircleLeft":
            return MdArrowCircleLeft;
        case "md:MdArrowCircleRight":
            return MdArrowCircleRight;
        case "md:MdArrowCircleUp":
            return MdArrowCircleUp;
        case "md:MdArrowOutward":
            return MdArrowOutward;
        case "md:MdArrowRightAlt":
            return MdArrowRightAlt;
        case "md:MdArticle":
            return MdArticle;
        case "md:MdAspectRatio":
            return MdAspectRatio;
        case "md:MdAssessment":
            return MdAssessment;
        case "md:MdAssignmentAdd":
            return MdAssignmentAdd;
        case "md:MdAssignmentInd":
            return MdAssignmentInd;
        case "md:MdAssignmentLate":
            return MdAssignmentLate;
        case "md:MdAssignmentReturn":
            return MdAssignmentReturn;
        case "md:MdAssignmentReturned":
            return MdAssignmentReturned;
        case "md:MdAssignmentTurnedIn":
            return MdAssignmentTurnedIn;
        case "md:MdAssignment":
            return MdAssignment;
        case "md:MdAssuredWorkload":
            return MdAssuredWorkload;
        case "md:MdAutorenew":
            return MdAutorenew;
        case "md:MdBackupTable":
            return MdBackupTable;
        case "md:MdBackup":
            return MdBackup;
        case "md:MdBalance":
            return MdBalance;
        case "md:MdBarcodeReader":
            return MdBarcodeReader;
        case "md:MdBatchPrediction":
            return MdBatchPrediction;
        case "md:MdBookOnline":
            return MdBookOnline;
        case "md:MdBook":
            return MdBook;
        case "md:MdBookmarkAdd":
            return MdBookmarkAdd;
        case "md:MdBookmarkAdded":
            return MdBookmarkAdded;
        case "md:MdBookmarkBorder":
            return MdBookmarkBorder;
        case "md:MdBookmarkRemove":
            return MdBookmarkRemove;
        case "md:MdBookmark":
            return MdBookmark;
        case "md:MdBookmarks":
            return MdBookmarks;
        case "md:MdBrowseGallery":
            return MdBrowseGallery;
        case "md:MdBugReport":
            return MdBugReport;
        case "md:MdBuildCircle":
            return MdBuildCircle;
        case "md:MdBuild":
            return MdBuild;
        case "md:MdCached":
            return MdCached;
        case "md:MdCalendarMonth":
            return MdCalendarMonth;
        case "md:MdCalendarToday":
            return MdCalendarToday;
        case "md:MdCalendarViewDay":
            return MdCalendarViewDay;
        case "md:MdCalendarViewMonth":
            return MdCalendarViewMonth;
        case "md:MdCalendarViewWeek":
            return MdCalendarViewWeek;
        case "md:MdCameraEnhance":
            return MdCameraEnhance;
        case "md:MdCancelScheduleSend":
            return MdCancelScheduleSend;
        case "md:MdCardGiftcard":
            return MdCardGiftcard;
        case "md:MdCardMembership":
            return MdCardMembership;
        case "md:MdCardTravel":
            return MdCardTravel;
        case "md:MdChangeHistory":
            return MdChangeHistory;
        case "md:MdCheckCircleOutline":
            return MdCheckCircleOutline;
        case "md:MdCheckCircle":
            return MdCheckCircle;
        case "md:MdChromeReaderMode":
            return MdChromeReaderMode;
        case "md:MdCircleNotifications":
            return MdCircleNotifications;
        case "md:MdClass":
            return MdClass;
        case "md:MdCloseFullscreen":
            return MdCloseFullscreen;
        case "md:MdCodeOff":
            return MdCodeOff;
        case "md:MdCode":
            return MdCode;
        case "md:MdCommentBank":
            return MdCommentBank;
        case "md:MdCommit":
            return MdCommit;
        case "md:MdCommute":
            return MdCommute;
        case "md:MdCompareArrows":
            return MdCompareArrows;
        case "md:MdCompress":
            return MdCompress;
        case "md:MdContactPage":
            return MdContactPage;
        case "md:MdContactSupport":
            return MdContactSupport;
        case "md:MdContactless":
            return MdContactless;
        case "md:MdCopyright":
            return MdCopyright;
        case "md:MdCreditCardOff":
            return MdCreditCardOff;
        case "md:MdCreditCard":
            return MdCreditCard;
        case "md:MdCss":
            return MdCss;
        case "md:MdCurrencyExchange":
            return MdCurrencyExchange;
        case "md:MdDangerous":
            return MdDangerous;
        case "md:MdDashboardCustomize":
            return MdDashboardCustomize;
        case "md:MdDashboard":
            return MdDashboard;
        case "md:MdDataExploration":
            return MdDataExploration;
        case "md:MdDataThresholding":
            return MdDataThresholding;
        case "md:MdDateRange":
            return MdDateRange;
        case "md:MdDeleteForever":
            return MdDeleteForever;
        case "md:MdDeleteOutline":
            return MdDeleteOutline;
        case "md:MdDelete":
            return MdDelete;
        case "md:MdDensityLarge":
            return MdDensityLarge;
        case "md:MdDensityMedium":
            return MdDensityMedium;
        case "md:MdDensitySmall":
            return MdDensitySmall;
        case "md:MdDescription":
            return MdDescription;
        case "md:MdDisabledByDefault":
            return MdDisabledByDefault;
        case "md:MdDisabledVisible":
            return MdDisabledVisible;
        case "md:MdDisplaySettings":
            return MdDisplaySettings;
        case "md:MdDns":
            return MdDns;
        case "md:MdDoneAll":
            return MdDoneAll;
        case "md:MdDoneOutline":
            return MdDoneOutline;
        case "md:MdDone":
            return MdDone;
        case "md:MdDonutLarge":
            return MdDonutLarge;
        case "md:MdDonutSmall":
            return MdDonutSmall;
        case "md:MdDragIndicator":
            return MdDragIndicator;
        case "md:MdDynamicForm":
            return MdDynamicForm;
        case "md:MdEco":
            return MdEco;
        case "md:MdEditCalendar":
            return MdEditCalendar;
        case "md:MdEditDocument":
            return MdEditDocument;
        case "md:MdEditOff":
            return MdEditOff;
        case "md:MdEditSquare":
            return MdEditSquare;
        case "md:MdEject":
            return MdEject;
        case "md:MdEuroSymbol":
            return MdEuroSymbol;
        case "md:MdEventRepeat":
            return MdEventRepeat;
        case "md:MdEventSeat":
            return MdEventSeat;
        case "md:MdEvent":
            return MdEvent;
        case "md:MdExitToApp":
            return MdExitToApp;
        case "md:MdExpand":
            return MdExpand;
        case "md:MdExploreOff":
            return MdExploreOff;
        case "md:MdExplore":
            return MdExplore;
        case "md:MdExtensionOff":
            return MdExtensionOff;
        case "md:MdExtension":
            return MdExtension;
        case "md:MdFace":
            return MdFace;
        case "md:MdFactCheck":
            return MdFactCheck;
        case "md:MdFavoriteBorder":
            return MdFavoriteBorder;
        case "md:MdFavorite":
            return MdFavorite;
        case "md:MdFax":
            return MdFax;
        case "md:MdFeedback":
            return MdFeedback;
        case "md:MdFilePresent":
            return MdFilePresent;
        case "md:MdFilterAltOff":
            return MdFilterAltOff;
        case "md:MdFilterAlt":
            return MdFilterAlt;
        case "md:MdFilterListAlt":
            return MdFilterListAlt;
        case "md:MdFindInPage":
            return MdFindInPage;
        case "md:MdFindReplace":
            return MdFindReplace;
        case "md:MdFingerprint":
            return MdFingerprint;
        case "md:MdFitScreen":
            return MdFitScreen;
        case "md:MdFlaky":
            return MdFlaky;
        case "md:MdFlightLand":
            return MdFlightLand;
        case "md:MdFlightTakeoff":
            return MdFlightTakeoff;
        case "md:MdFlipToBack":
            return MdFlipToBack;
        case "md:MdFlipToFront":
            return MdFlipToFront;
        case "md:MdFlutterDash":
            return MdFlutterDash;
        case "md:MdFreeCancellation":
            return MdFreeCancellation;
        case "md:MdGTranslate":
            return MdGTranslate;
        case "md:MdGavel":
            return MdGavel;
        case "md:MdGeneratingTokens":
            return MdGeneratingTokens;
        case "md:MdGetApp":
            return MdGetApp;
        case "md:MdGifBox":
            return MdGifBox;
        case "md:MdGif":
            return MdGif;
        case "md:MdGrade":
            return MdGrade;
        case "md:MdGrading":
            return MdGrading;
        case "md:MdGroupWork":
            return MdGroupWork;
        case "md:MdHelpCenter":
            return MdHelpCenter;
        case "md:MdHelpOutline":
            return MdHelpOutline;
        case "md:MdHelp":
            return MdHelp;
        case "md:MdHideSource":
            return MdHideSource;
        case "md:MdHighlightAlt":
            return MdHighlightAlt;
        case "md:MdHighlightOff":
            return MdHighlightOff;
        case "md:MdHistoryToggleOff":
            return MdHistoryToggleOff;
        case "md:MdHistory":
            return MdHistory;
        case "md:MdHlsOff":
            return MdHlsOff;
        case "md:MdHls":
            return MdHls;
        case "md:MdHomeFilled":
            return MdHomeFilled;
        case "md:MdHome":
            return MdHome;
        case "md:MdHorizontalSplit":
            return MdHorizontalSplit;
        case "md:MdHotelClass":
            return MdHotelClass;
        case "md:MdHourglassDisabled":
            return MdHourglassDisabled;
        case "md:MdHourglassEmpty":
            return MdHourglassEmpty;
        case "md:MdHourglassFull":
            return MdHourglassFull;
        case "md:MdHtml":
            return MdHtml;
        case "md:MdHttp":
            return MdHttp;
        case "md:MdHttps":
            return MdHttps;
        case "md:MdImportantDevices":
            return MdImportantDevices;
        case "md:MdInfoOutline":
            return MdInfoOutline;
        case "md:MdInfo":
            return MdInfo;
        case "md:MdInput":
            return MdInput;
        case "md:MdInstallDesktop":
            return MdInstallDesktop;
        case "md:MdInstallMobile":
            return MdInstallMobile;
        case "md:MdIntegrationInstructions":
            return MdIntegrationInstructions;
        case "md:MdInvertColors":
            return MdInvertColors;
        case "md:MdJavascript":
            return MdJavascript;
        case "md:MdJoinFull":
            return MdJoinFull;
        case "md:MdJoinInner":
            return MdJoinInner;
        case "md:MdJoinLeft":
            return MdJoinLeft;
        case "md:MdJoinRight":
            return MdJoinRight;
        case "md:MdLabelImportantOutline":
            return MdLabelImportantOutline;
        case "md:MdLabelImportant":
            return MdLabelImportant;
        case "md:MdLabelOff":
            return MdLabelOff;
        case "md:MdLabelOutline":
            return MdLabelOutline;
        case "md:MdLabel":
            return MdLabel;
        case "md:MdLanguage":
            return MdLanguage;
        case "md:MdLaunch":
            return MdLaunch;
        case "md:MdLeaderboard":
            return MdLeaderboard;
        case "md:MdLightbulbCircle":
            return MdLightbulbCircle;
        case "md:MdLightbulbOutline":
            return MdLightbulbOutline;
        case "md:MdLightbulb":
            return MdLightbulb;
        case "md:MdLineStyle":
            return MdLineStyle;
        case "md:MdLineWeight":
            return MdLineWeight;
        case "md:MdList":
            return MdList;
        case "md:MdLockClock":
            return MdLockClock;
        case "md:MdLockOpen":
            return MdLockOpen;
        case "md:MdLockOutline":
            return MdLockOutline;
        case "md:MdLockPerson":
            return MdLockPerson;
        case "md:MdLockReset":
            return MdLockReset;
        case "md:MdLock":
            return MdLock;
        case "md:MdLogin":
            return MdLogin;
        case "md:MdLogout":
            return MdLogout;
        case "md:MdLoyalty":
            return MdLoyalty;
        case "md:MdManageAccounts":
            return MdManageAccounts;
        case "md:MdManageHistory":
            return MdManageHistory;
        case "md:MdMarkAsUnread":
            return MdMarkAsUnread;
        case "md:MdMarkunreadMailbox":
            return MdMarkunreadMailbox;
        case "md:MdMaximize":
            return MdMaximize;
        case "md:MdMediation":
            return MdMediation;
        case "md:MdMinimize":
            return MdMinimize;
        case "md:MdModelTraining":
            return MdModelTraining;
        case "md:MdNetworkPing":
            return MdNetworkPing;
        case "md:MdNewLabel":
            return MdNewLabel;
        case "md:MdNextPlan":
            return MdNextPlan;
        case "md:MdNightlightRound":
            return MdNightlightRound;
        case "md:MdNoAccounts":
            return MdNoAccounts;
        case "md:MdNoiseAware":
            return MdNoiseAware;
        case "md:MdNoiseControlOff":
            return MdNoiseControlOff;
        case "md:MdNotAccessible":
            return MdNotAccessible;
        case "md:MdNotStarted":
            return MdNotStarted;
        case "md:MdNoteAdd":
            return MdNoteAdd;
        case "md:MdOfflineBolt":
            return MdOfflineBolt;
        case "md:MdOfflinePin":
            return MdOfflinePin;
        case "md:MdOnDeviceTraining":
            return MdOnDeviceTraining;
        case "md:MdOnlinePrediction":
            return MdOnlinePrediction;
        case "md:MdOpacity":
            return MdOpacity;
        case "md:MdOpenInBrowser":
            return MdOpenInBrowser;
        case "md:MdOpenInFull":
            return MdOpenInFull;
        case "md:MdOpenInNewOff":
            return MdOpenInNewOff;
        case "md:MdOpenInNew":
            return MdOpenInNew;
        case "md:MdOpenWith":
            return MdOpenWith;
        case "md:MdOutbond":
            return MdOutbond;
        case "md:MdOutbound":
            return MdOutbound;
        case "md:MdOutbox":
            return MdOutbox;
        case "md:MdOutgoingMail":
            return MdOutgoingMail;
        case "md:MdOutlet":
            return MdOutlet;
        case "md:MdOutput":
            return MdOutput;
        case "md:MdPageview":
            return MdPageview;
        case "md:MdPaid":
            return MdPaid;
        case "md:MdPanToolAlt":
            return MdPanToolAlt;
        case "md:MdPanTool":
            return MdPanTool;
        case "md:MdPayment":
            return MdPayment;
        case "md:MdPendingActions":
            return MdPendingActions;
        case "md:MdPending":
            return MdPending;
        case "md:MdPercent":
            return MdPercent;
        case "md:MdPermCameraMic":
            return MdPermCameraMic;
        case "md:MdPermContactCalendar":
            return MdPermContactCalendar;
        case "md:MdPermDataSetting":
            return MdPermDataSetting;
        case "md:MdPermDeviceInformation":
            return MdPermDeviceInformation;
        case "md:MdPermIdentity":
            return MdPermIdentity;
        case "md:MdPermMedia":
            return MdPermMedia;
        case "md:MdPermPhoneMsg":
            return MdPermPhoneMsg;
        case "md:MdPermScanWifi":
            return MdPermScanWifi;
        case "md:MdPets":
            return MdPets;
        case "md:MdPhp":
            return MdPhp;
        case "md:MdPictureInPictureAlt":
            return MdPictureInPictureAlt;
        case "md:MdPictureInPicture":
            return MdPictureInPicture;
        case "md:MdPinEnd":
            return MdPinEnd;
        case "md:MdPinInvoke":
            return MdPinInvoke;
        case "md:MdPinch":
            return MdPinch;
        case "md:MdPlagiarism":
            return MdPlagiarism;
        case "md:MdPlayForWork":
            return MdPlayForWork;
        case "md:MdPolymer":
            return MdPolymer;
        case "md:MdPowerSettingsNew":
            return MdPowerSettingsNew;
        case "md:MdPregnantWoman":
            return MdPregnantWoman;
        case "md:MdPreview":
            return MdPreview;
        case "md:MdPrint":
            return MdPrint;
        case "md:MdPrivacyTip":
            return MdPrivacyTip;
        case "md:MdPrivateConnectivity":
            return MdPrivateConnectivity;
        case "md:MdProductionQuantityLimits":
            return MdProductionQuantityLimits;
        case "md:MdPublishedWithChanges":
            return MdPublishedWithChanges;
        case "md:MdQueryBuilder":
            return MdQueryBuilder;
        case "md:MdQuestionAnswer":
            return MdQuestionAnswer;
        case "md:MdQuestionMark":
            return MdQuestionMark;
        case "md:MdQuickreply":
            return MdQuickreply;
        case "md:MdRebaseEdit":
            return MdRebaseEdit;
        case "md:MdReceipt":
            return MdReceipt;
        case "md:MdRecordVoiceOver":
            return MdRecordVoiceOver;
        case "md:MdRedeem":
            return MdRedeem;
        case "md:MdRemoveDone":
            return MdRemoveDone;
        case "md:MdRemoveShoppingCart":
            return MdRemoveShoppingCart;
        case "md:MdReorder":
            return MdReorder;
        case "md:MdRepartition":
            return MdRepartition;
        case "md:MdReportProblem":
            return MdReportProblem;
        case "md:MdRequestPage":
            return MdRequestPage;
        case "md:MdRestoreFromTrash":
            return MdRestoreFromTrash;
        case "md:MdRestorePage":
            return MdRestorePage;
        case "md:MdRestore":
            return MdRestore;
        case "md:MdRocketLaunch":
            return MdRocketLaunch;
        case "md:MdRocket":
            return MdRocket;
        case "md:MdRoom":
            return MdRoom;
        case "md:MdRoundedCorner":
            return MdRoundedCorner;
        case "md:MdRowing":
            return MdRowing;
        case "md:MdRule":
            return MdRule;
        case "md:MdSatelliteAlt":
            return MdSatelliteAlt;
        case "md:MdSavedSearch":
            return MdSavedSearch;
        case "md:MdSavings":
            return MdSavings;
        case "md:MdScheduleSend":
            return MdScheduleSend;
        case "md:MdSchedule":
            return MdSchedule;
        case "md:MdSearchOff":
            return MdSearchOff;
        case "md:MdSearch":
            return MdSearch;
        case "md:MdSegment":
            return MdSegment;
        case "md:MdSendAndArchive":
            return MdSendAndArchive;
        case "md:MdSensorsOff":
            return MdSensorsOff;
        case "md:MdSensors":
            return MdSensors;
        case "md:MdSettingsAccessibility":
            return MdSettingsAccessibility;
        case "md:MdSettingsApplications":
            return MdSettingsApplications;
        case "md:MdSettingsBackupRestore":
            return MdSettingsBackupRestore;
        case "md:MdSettingsBluetooth":
            return MdSettingsBluetooth;
        case "md:MdSettingsBrightness":
            return MdSettingsBrightness;
        case "md:MdSettingsCell":
            return MdSettingsCell;
        case "md:MdSettingsEthernet":
            return MdSettingsEthernet;
        case "md:MdSettingsInputAntenna":
            return MdSettingsInputAntenna;
        case "md:MdSettingsInputComponent":
            return MdSettingsInputComponent;
        case "md:MdSettingsInputComposite":
            return MdSettingsInputComposite;
        case "md:MdSettingsInputHdmi":
            return MdSettingsInputHdmi;
        case "md:MdSettingsInputSvideo":
            return MdSettingsInputSvideo;
        case "md:MdSettingsOverscan":
            return MdSettingsOverscan;
        case "md:MdSettingsPhone":
            return MdSettingsPhone;
        case "md:MdSettingsPower":
            return MdSettingsPower;
        case "md:MdSettingsRemote":
            return MdSettingsRemote;
        case "md:MdSettingsVoice":
            return MdSettingsVoice;
        case "md:MdSettings":
            return MdSettings;
        case "md:MdShop2":
            return MdShop2;
        case "md:MdShopTwo":
            return MdShopTwo;
        case "md:MdShop":
            return MdShop;
        case "md:MdShoppingBag":
            return MdShoppingBag;
        case "md:MdShoppingBasket":
            return MdShoppingBasket;
        case "md:MdShoppingCartCheckout":
            return MdShoppingCartCheckout;
        case "md:MdShoppingCart":
            return MdShoppingCart;
        case "md:MdSmartButton":
            return MdSmartButton;
        case "md:MdSource":
            return MdSource;
        case "md:MdSpaceDashboard":
            return MdSpaceDashboard;
        case "md:MdSpatialAudioOff":
            return MdSpatialAudioOff;
        case "md:MdSpatialAudio":
            return MdSpatialAudio;
        case "md:MdSpatialTracking":
            return MdSpatialTracking;
        case "md:MdSpeakerNotesOff":
            return MdSpeakerNotesOff;
        case "md:MdSpeakerNotes":
            return MdSpeakerNotes;
        case "md:MdSpellcheck":
            return MdSpellcheck;
        case "md:MdStarRate":
            return MdStarRate;
        case "md:MdStars":
            return MdStars;
        case "md:MdStickyNote2":
            return MdStickyNote2;
        case "md:MdStore":
            return MdStore;
        case "md:MdSubject":
            return MdSubject;
        case "md:MdSubtitlesOff":
            return MdSubtitlesOff;
        case "md:MdSupervisedUserCircle":
            return MdSupervisedUserCircle;
        case "md:MdSupervisorAccount":
            return MdSupervisorAccount;
        case "md:MdSupport":
            return MdSupport;
        case "md:MdSwapHoriz":
            return MdSwapHoriz;
        case "md:MdSwapHorizontalCircle":
            return MdSwapHorizontalCircle;
        case "md:MdSwapVert":
            return MdSwapVert;
        case "md:MdSwapVerticalCircle":
            return MdSwapVerticalCircle;
        case "md:MdSwipeDownAlt":
            return MdSwipeDownAlt;
        case "md:MdSwipeDown":
            return MdSwipeDown;
        case "md:MdSwipeLeftAlt":
            return MdSwipeLeftAlt;
        case "md:MdSwipeLeft":
            return MdSwipeLeft;
        case "md:MdSwipeRightAlt":
            return MdSwipeRightAlt;
        case "md:MdSwipeRight":
            return MdSwipeRight;
        case "md:MdSwipeUpAlt":
            return MdSwipeUpAlt;
        case "md:MdSwipeUp":
            return MdSwipeUp;
        case "md:MdSwipeVertical":
            return MdSwipeVertical;
        case "md:MdSwipe":
            return MdSwipe;
        case "md:MdSwitchAccessShortcutAdd":
            return MdSwitchAccessShortcutAdd;
        case "md:MdSwitchAccessShortcut":
            return MdSwitchAccessShortcut;
        case "md:MdSyncAlt":
            return MdSyncAlt;
        case "md:MdSystemUpdateAlt":
            return MdSystemUpdateAlt;
        case "md:MdTabUnselected":
            return MdTabUnselected;
        case "md:MdTab":
            return MdTab;
        case "md:MdTableView":
            return MdTableView;
        case "md:MdTaskAlt":
            return MdTaskAlt;
        case "md:MdTerminal":
            return MdTerminal;
        case "md:MdTextRotateUp":
            return MdTextRotateUp;
        case "md:MdTextRotateVertical":
            return MdTextRotateVertical;
        case "md:MdTextRotationAngledown":
            return MdTextRotationAngledown;
        case "md:MdTextRotationAngleup":
            return MdTextRotationAngleup;
        case "md:MdTextRotationDown":
            return MdTextRotationDown;
        case "md:MdTextRotationNone":
            return MdTextRotationNone;
        case "md:MdTheaters":
            return MdTheaters;
        case "md:MdThumbDownOffAlt":
            return MdThumbDownOffAlt;
        case "md:MdThumbDown":
            return MdThumbDown;
        case "md:MdThumbUpOffAlt":
            return MdThumbUpOffAlt;
        case "md:MdThumbUp":
            return MdThumbUp;
        case "md:MdThumbsUpDown":
            return MdThumbsUpDown;
        case "md:MdTimeline":
            return MdTimeline;
        case "md:MdTipsAndUpdates":
            return MdTipsAndUpdates;
        case "md:MdToc":
            return MdToc;
        case "md:MdToday":
            return MdToday;
        case "md:MdToken":
            return MdToken;
        case "md:MdToll":
            return MdToll;
        case "md:MdTouchApp":
            return MdTouchApp;
        case "md:MdTour":
            return MdTour;
        case "md:MdTrackChanges":
            return MdTrackChanges;
        case "md:MdTranscribe":
            return MdTranscribe;
        case "md:MdTranslate":
            return MdTranslate;
        case "md:MdTrendingDown":
            return MdTrendingDown;
        case "md:MdTrendingFlat":
            return MdTrendingFlat;
        case "md:MdTrendingUp":
            return MdTrendingUp;
        case "md:MdTroubleshoot":
            return MdTroubleshoot;
        case "md:MdTry":
            return MdTry;
        case "md:MdTurnedInNot":
            return MdTurnedInNot;
        case "md:MdTurnedIn":
            return MdTurnedIn;
        case "md:MdUnfoldLessDouble":
            return MdUnfoldLessDouble;
        case "md:MdUnfoldMoreDouble":
            return MdUnfoldMoreDouble;
        case "md:MdUnpublished":
            return MdUnpublished;
        case "md:MdUpdateDisabled":
            return MdUpdateDisabled;
        case "md:MdUpdate":
            return MdUpdate;
        case "md:MdUpgrade":
            return MdUpgrade;
        case "md:MdVerifiedUser":
            return MdVerifiedUser;
        case "md:MdVerified":
            return MdVerified;
        case "md:MdVerticalSplit":
            return MdVerticalSplit;
        case "md:MdViewAgenda":
            return MdViewAgenda;
        case "md:MdViewArray":
            return MdViewArray;
        case "md:MdViewCarousel":
            return MdViewCarousel;
        case "md:MdViewColumn":
            return MdViewColumn;
        case "md:MdViewComfyAlt":
            return MdViewComfyAlt;
        case "md:MdViewCompactAlt":
            return MdViewCompactAlt;
        case "md:MdViewCozy":
            return MdViewCozy;
        case "md:MdViewDay":
            return MdViewDay;
        case "md:MdViewHeadline":
            return MdViewHeadline;
        case "md:MdViewInAr":
            return MdViewInAr;
        case "md:MdViewKanban":
            return MdViewKanban;
        case "md:MdViewList":
            return MdViewList;
        case "md:MdViewModule":
            return MdViewModule;
        case "md:MdViewQuilt":
            return MdViewQuilt;
        case "md:MdViewSidebar":
            return MdViewSidebar;
        case "md:MdViewStream":
            return MdViewStream;
        case "md:MdViewTimeline":
            return MdViewTimeline;
        case "md:MdViewWeek":
            return MdViewWeek;
        case "md:MdVisibilityOff":
            return MdVisibilityOff;
        case "md:MdVisibility":
            return MdVisibility;
        case "md:MdVoiceOverOff":
            return MdVoiceOverOff;
        case "md:MdWatchLater":
            return MdWatchLater;
        case "md:MdWebhook":
            return MdWebhook;
        case "md:MdWidthFull":
            return MdWidthFull;
        case "md:MdWidthNormal":
            return MdWidthNormal;
        case "md:MdWidthWide":
            return MdWidthWide;
        case "md:MdWifiProtectedSetup":
            return MdWifiProtectedSetup;
        case "md:MdWorkHistory":
            return MdWorkHistory;
        case "md:MdWorkOff":
            return MdWorkOff;
        case "md:MdWorkOutline":
            return MdWorkOutline;
        case "md:MdWork":
            return MdWork;
        case "md:MdWysiwyg":
            return MdWysiwyg;
        case "md:MdYoutubeSearchedFor":
            return MdYoutubeSearchedFor;
        case "md:MdZoomIn":
            return MdZoomIn;
        case "md:MdZoomOut":
            return MdZoomOut;
        case "md:MdAddAlert":
            return MdAddAlert;
        case "md:MdAutoDelete":
            return MdAutoDelete;
        case "md:MdErrorOutline":
            return MdErrorOutline;
        case "md:MdError":
            return MdError;
        case "md:MdNotificationImportant":
            return MdNotificationImportant;
        case "md:MdWarningAmber":
            return MdWarningAmber;
        case "md:MdWarning":
            return MdWarning;
        case "md:Md10K":
            return Md10K;
        case "md:Md1kPlus":
            return Md1kPlus;
        case "md:Md1K":
            return Md1K;
        case "md:Md2kPlus":
            return Md2kPlus;
        case "md:Md2K":
            return Md2K;
        case "md:Md3kPlus":
            return Md3kPlus;
        case "md:Md3K":
            return Md3K;
        case "md:Md4kPlus":
            return Md4kPlus;
        case "md:Md4K":
            return Md4K;
        case "md:Md5G":
            return Md5G;
        case "md:Md5kPlus":
            return Md5kPlus;
        case "md:Md5K":
            return Md5K;
        case "md:Md6kPlus":
            return Md6kPlus;
        case "md:Md6K":
            return Md6K;
        case "md:Md7kPlus":
            return Md7kPlus;
        case "md:Md7K":
            return Md7K;
        case "md:Md8kPlus":
            return Md8kPlus;
        case "md:Md8K":
            return Md8K;
        case "md:Md9kPlus":
            return Md9kPlus;
        case "md:Md9K":
            return Md9K;
        case "md:MdAddToQueue":
            return MdAddToQueue;
        case "md:MdAirplay":
            return MdAirplay;
        case "md:MdAlbum":
            return MdAlbum;
        case "md:MdArtTrack":
            return MdArtTrack;
        case "md:MdAudioFile":
            return MdAudioFile;
        case "md:MdAvTimer":
            return MdAvTimer;
        case "md:MdBrandingWatermark":
            return MdBrandingWatermark;
        case "md:MdCallToAction":
            return MdCallToAction;
        case "md:MdClosedCaptionDisabled":
            return MdClosedCaptionDisabled;
        case "md:MdClosedCaptionOff":
            return MdClosedCaptionOff;
        case "md:MdClosedCaption":
            return MdClosedCaption;
        case "md:MdControlCamera":
            return MdControlCamera;
        case "md:MdEqualizer":
            return MdEqualizer;
        case "md:MdExplicit":
            return MdExplicit;
        case "md:MdFastForward":
            return MdFastForward;
        case "md:MdFastRewind":
            return MdFastRewind;
        case "md:MdFeaturedPlayList":
            return MdFeaturedPlayList;
        case "md:MdFeaturedVideo":
            return MdFeaturedVideo;
        case "md:MdFiberDvr":
            return MdFiberDvr;
        case "md:MdFiberManualRecord":
            return MdFiberManualRecord;
        case "md:MdFiberNew":
            return MdFiberNew;
        case "md:MdFiberPin":
            return MdFiberPin;
        case "md:MdFiberSmartRecord":
            return MdFiberSmartRecord;
        case "md:MdForward10":
            return MdForward10;
        case "md:MdForward30":
            return MdForward30;
        case "md:MdForward5":
            return MdForward5;
        case "md:MdGames":
            return MdGames;
        case "md:MdHd":
            return MdHd;
        case "md:MdHearingDisabled":
            return MdHearingDisabled;
        case "md:MdHearing":
            return MdHearing;
        case "md:MdHighQuality":
            return MdHighQuality;
        case "md:MdInterpreterMode":
            return MdInterpreterMode;
        case "md:MdLibraryAddCheck":
            return MdLibraryAddCheck;
        case "md:MdLibraryAdd":
            return MdLibraryAdd;
        case "md:MdLibraryBooks":
            return MdLibraryBooks;
        case "md:MdLibraryMusic":
            return MdLibraryMusic;
        case "md:MdLoop":
            return MdLoop;
        case "md:MdLyrics":
            return MdLyrics;
        case "md:MdMicNone":
            return MdMicNone;
        case "md:MdMicOff":
            return MdMicOff;
        case "md:MdMic":
            return MdMic;
        case "md:MdMissedVideoCall":
            return MdMissedVideoCall;
        case "md:MdMovieEdit":
            return MdMovieEdit;
        case "md:MdMovie":
            return MdMovie;
        case "md:MdMusicVideo":
            return MdMusicVideo;
        case "md:MdNewReleases":
            return MdNewReleases;
        case "md:MdNotInterested":
            return MdNotInterested;
        case "md:MdNote":
            return MdNote;
        case "md:MdPauseCircleFilled":
            return MdPauseCircleFilled;
        case "md:MdPauseCircleOutline":
            return MdPauseCircleOutline;
        case "md:MdPauseCircle":
            return MdPauseCircle;
        case "md:MdPause":
            return MdPause;
        case "md:MdPlayArrow":
            return MdPlayArrow;
        case "md:MdPlayCircleFilled":
            return MdPlayCircleFilled;
        case "md:MdPlayCircleOutline":
            return MdPlayCircleOutline;
        case "md:MdPlayCircle":
            return MdPlayCircle;
        case "md:MdPlayDisabled":
            return MdPlayDisabled;
        case "md:MdPlaylistAddCheckCircle":
            return MdPlaylistAddCheckCircle;
        case "md:MdPlaylistAddCheck":
            return MdPlaylistAddCheck;
        case "md:MdPlaylistAddCircle":
            return MdPlaylistAddCircle;
        case "md:MdPlaylistAdd":
            return MdPlaylistAdd;
        case "md:MdPlaylistPlay":
            return MdPlaylistPlay;
        case "md:MdPlaylistRemove":
            return MdPlaylistRemove;
        case "md:MdQueueMusic":
            return MdQueueMusic;
        case "md:MdQueuePlayNext":
            return MdQueuePlayNext;
        case "md:MdQueue":
            return MdQueue;
        case "md:MdRadio":
            return MdRadio;
        case "md:MdRecentActors":
            return MdRecentActors;
        case "md:MdRemoveFromQueue":
            return MdRemoveFromQueue;
        case "md:MdRepeatOn":
            return MdRepeatOn;
        case "md:MdRepeatOneOn":
            return MdRepeatOneOn;
        case "md:MdRepeatOne":
            return MdRepeatOne;
        case "md:MdRepeat":
            return MdRepeat;
        case "md:MdReplay10":
            return MdReplay10;
        case "md:MdReplay30":
            return MdReplay30;
        case "md:MdReplay5":
            return MdReplay5;
        case "md:MdReplayCircleFilled":
            return MdReplayCircleFilled;
        case "md:MdReplay":
            return MdReplay;
        case "md:MdSd":
            return MdSd;
        case "md:MdShuffleOn":
            return MdShuffleOn;
        case "md:MdShuffle":
            return MdShuffle;
        case "md:MdSkipNext":
            return MdSkipNext;
        case "md:MdSkipPrevious":
            return MdSkipPrevious;
        case "md:MdSlowMotionVideo":
            return MdSlowMotionVideo;
        case "md:MdSnooze":
            return MdSnooze;
        case "md:MdSortByAlpha":
            return MdSortByAlpha;
        case "md:MdSpeed":
            return MdSpeed;
        case "md:MdStopCircle":
            return MdStopCircle;
        case "md:MdStop":
            return MdStop;
        case "md:MdSubscriptions":
            return MdSubscriptions;
        case "md:MdSubtitles":
            return MdSubtitles;
        case "md:MdSurroundSound":
            return MdSurroundSound;
        case "md:MdVideoCall":
            return MdVideoCall;
        case "md:MdVideoFile":
            return MdVideoFile;
        case "md:MdVideoLabel":
            return MdVideoLabel;
        case "md:MdVideoLibrary":
            return MdVideoLibrary;
        case "md:MdVideoSettings":
            return MdVideoSettings;
        case "md:MdVideocamOff":
            return MdVideocamOff;
        case "md:MdVideocam":
            return MdVideocam;
        case "md:MdVolumeDownAlt":
            return MdVolumeDownAlt;
        case "md:MdVolumeDown":
            return MdVolumeDown;
        case "md:MdVolumeMute":
            return MdVolumeMute;
        case "md:MdVolumeOff":
            return MdVolumeOff;
        case "md:MdVolumeUp":
            return MdVolumeUp;
        case "md:MdWebAssetOff":
            return MdWebAssetOff;
        case "md:MdWebAsset":
            return MdWebAsset;
        case "md:MdWeb":
            return MdWeb;
        case "md:Md3P":
            return Md3P;
        case "md:MdAddIcCall":
            return MdAddIcCall;
        case "md:MdAlternateEmail":
            return MdAlternateEmail;
        case "md:MdAppRegistration":
            return MdAppRegistration;
        case "md:MdBusiness":
            return MdBusiness;
        case "md:MdCallEnd":
            return MdCallEnd;
        case "md:MdCallMade":
            return MdCallMade;
        case "md:MdCallMerge":
            return MdCallMerge;
        case "md:MdCallMissedOutgoing":
            return MdCallMissedOutgoing;
        case "md:MdCallMissed":
            return MdCallMissed;
        case "md:MdCallReceived":
            return MdCallReceived;
        case "md:MdCallSplit":
            return MdCallSplit;
        case "md:MdCall":
            return MdCall;
        case "md:MdCancelPresentation":
            return MdCancelPresentation;
        case "md:MdCellTower":
            return MdCellTower;
        case "md:MdCellWifi":
            return MdCellWifi;
        case "md:MdChatBubbleOutline":
            return MdChatBubbleOutline;
        case "md:MdChatBubble":
            return MdChatBubble;
        case "md:MdChat":
            return MdChat;
        case "md:MdClearAll":
            return MdClearAll;
        case "md:MdCoPresent":
            return MdCoPresent;
        case "md:MdComment":
            return MdComment;
        case "md:MdCommentsDisabled":
            return MdCommentsDisabled;
        case "md:MdContactEmergency":
            return MdContactEmergency;
        case "md:MdContactMail":
            return MdContactMail;
        case "md:MdContactPhone":
            return MdContactPhone;
        case "md:MdContacts":
            return MdContacts;
        case "md:MdDesktopAccessDisabled":
            return MdDesktopAccessDisabled;
        case "md:MdDialerSip":
            return MdDialerSip;
        case "md:MdDialpad":
            return MdDialpad;
        case "md:MdDocumentScanner":
            return MdDocumentScanner;
        case "md:MdDomainDisabled":
            return MdDomainDisabled;
        case "md:MdDomainVerification":
            return MdDomainVerification;
        case "md:MdDuo":
            return MdDuo;
        case "md:MdEmail":
            return MdEmail;
        case "md:MdForum":
            return MdForum;
        case "md:MdForwardToInbox":
            return MdForwardToInbox;
        case "md:MdHourglassBottom":
            return MdHourglassBottom;
        case "md:MdHourglassTop":
            return MdHourglassTop;
        case "md:MdHub":
            return MdHub;
        case "md:MdImportContacts":
            return MdImportContacts;
        case "md:MdImportExport":
            return MdImportExport;
        case "md:MdInvertColorsOff":
            return MdInvertColorsOff;
        case "md:MdKeyOff":
            return MdKeyOff;
        case "md:MdKey":
            return MdKey;
        case "md:MdListAlt":
            return MdListAlt;
        case "md:MdLiveHelp":
            return MdLiveHelp;
        case "md:MdLocationOff":
            return MdLocationOff;
        case "md:MdLocationOn":
            return MdLocationOn;
        case "md:MdMailLock":
            return MdMailLock;
        case "md:MdMailOutline":
            return MdMailOutline;
        case "md:MdMarkChatRead":
            return MdMarkChatRead;
        case "md:MdMarkChatUnread":
            return MdMarkChatUnread;
        case "md:MdMarkEmailRead":
            return MdMarkEmailRead;
        case "md:MdMarkEmailUnread":
            return MdMarkEmailUnread;
        case "md:MdMarkUnreadChatAlt":
            return MdMarkUnreadChatAlt;
        case "md:MdMessage":
            return MdMessage;
        case "md:MdMobileScreenShare":
            return MdMobileScreenShare;
        case "md:MdMoreTime":
            return MdMoreTime;
        case "md:MdNat":
            return MdNat;
        case "md:MdNoSim":
            return MdNoSim;
        case "md:MdPausePresentation":
            return MdPausePresentation;
        case "md:MdPersonAddDisabled":
            return MdPersonAddDisabled;
        case "md:MdPersonSearch":
            return MdPersonSearch;
        case "md:MdPhoneDisabled":
            return MdPhoneDisabled;
        case "md:MdPhoneEnabled":
            return MdPhoneEnabled;
        case "md:MdPhone":
            return MdPhone;
        case "md:MdPhonelinkErase":
            return MdPhonelinkErase;
        case "md:MdPhonelinkLock":
            return MdPhonelinkLock;
        case "md:MdPhonelinkRing":
            return MdPhonelinkRing;
        case "md:MdPhonelinkSetup":
            return MdPhonelinkSetup;
        case "md:MdPortableWifiOff":
            return MdPortableWifiOff;
        case "md:MdPresentToAll":
            return MdPresentToAll;
        case "md:MdPrintDisabled":
            return MdPrintDisabled;
        case "md:MdQrCode2":
            return MdQrCode2;
        case "md:MdQrCodeScanner":
            return MdQrCodeScanner;
        case "md:MdQrCode":
            return MdQrCode;
        case "md:MdReadMore":
            return MdReadMore;
        case "md:MdRingVolume":
            return MdRingVolume;
        case "md:MdRssFeed":
            return MdRssFeed;
        case "md:MdRtt":
            return MdRtt;
        case "md:MdScreenShare":
            return MdScreenShare;
        case "md:MdSendTimeExtension":
            return MdSendTimeExtension;
        case "md:MdSentimentSatisfiedAlt":
            return MdSentimentSatisfiedAlt;
        case "md:MdSip":
            return MdSip;
        case "md:MdSpeakerPhone":
            return MdSpeakerPhone;
        case "md:MdSpoke":
            return MdSpoke;
        case "md:MdStayCurrentLandscape":
            return MdStayCurrentLandscape;
        case "md:MdStayCurrentPortrait":
            return MdStayCurrentPortrait;
        case "md:MdStayPrimaryLandscape":
            return MdStayPrimaryLandscape;
        case "md:MdStayPrimaryPortrait":
            return MdStayPrimaryPortrait;
        case "md:MdStopScreenShare":
            return MdStopScreenShare;
        case "md:MdSwapCalls":
            return MdSwapCalls;
        case "md:MdTextsms":
            return MdTextsms;
        case "md:MdUnsubscribe":
            return MdUnsubscribe;
        case "md:MdVoicemail":
            return MdVoicemail;
        case "md:MdVpnKeyOff":
            return MdVpnKeyOff;
        case "md:MdVpnKey":
            return MdVpnKey;
        case "md:MdWifiCalling":
            return MdWifiCalling;
        case "md:MdAddBox":
            return MdAddBox;
        case "md:MdAddCircleOutline":
            return MdAddCircleOutline;
        case "md:MdAddCircle":
            return MdAddCircle;
        case "md:MdAddLink":
            return MdAddLink;
        case "md:MdAdd":
            return MdAdd;
        case "md:MdAmpStories":
            return MdAmpStories;
        case "md:MdArchive":
            return MdArchive;
        case "md:MdAttribution":
            return MdAttribution;
        case "md:MdBackspace":
            return MdBackspace;
        case "md:MdBallot":
            return MdBallot;
        case "md:MdBiotech":
            return MdBiotech;
        case "md:MdBlockFlipped":
            return MdBlockFlipped;
        case "md:MdBlock":
            return MdBlock;
        case "md:MdBolt":
            return MdBolt;
        case "md:MdCalculate":
            return MdCalculate;
        case "md:MdChangeCircle":
            return MdChangeCircle;
        case "md:MdClear":
            return MdClear;
        case "md:MdContentCopy":
            return MdContentCopy;
        case "md:MdContentCut":
            return MdContentCut;
        case "md:MdContentPasteGo":
            return MdContentPasteGo;
        case "md:MdContentPasteOff":
            return MdContentPasteOff;
        case "md:MdContentPasteSearch":
            return MdContentPasteSearch;
        case "md:MdContentPaste":
            return MdContentPaste;
        case "md:MdCopyAll":
            return MdCopyAll;
        case "md:MdCreate":
            return MdCreate;
        case "md:MdDeleteSweep":
            return MdDeleteSweep;
        case "md:MdDeselect":
            return MdDeselect;
        case "md:MdDrafts":
            return MdDrafts;
        case "md:MdDynamicFeed":
            return MdDynamicFeed;
        case "md:MdFileCopy":
            return MdFileCopy;
        case "md:MdFilterListOff":
            return MdFilterListOff;
        case "md:MdFilterList":
            return MdFilterList;
        case "md:MdFlagCircle":
            return MdFlagCircle;
        case "md:MdFlag":
            return MdFlag;
        case "md:MdFontDownloadOff":
            return MdFontDownloadOff;
        case "md:MdFontDownload":
            return MdFontDownload;
        case "md:MdForward":
            return MdForward;
        case "md:MdGesture":
            return MdGesture;
        case "md:MdHowToReg":
            return MdHowToReg;
        case "md:MdHowToVote":
            return MdHowToVote;
        case "md:MdInbox":
            return MdInbox;
        case "md:MdInsights":
            return MdInsights;
        case "md:MdInventory2":
            return MdInventory2;
        case "md:MdInventory":
            return MdInventory;
        case "md:MdLinkOff":
            return MdLinkOff;
        case "md:MdLink":
            return MdLink;
        case "md:MdLowPriority":
            return MdLowPriority;
        case "md:MdMail":
            return MdMail;
        case "md:MdMarkunread":
            return MdMarkunread;
        case "md:MdMoveToInbox":
            return MdMoveToInbox;
        case "md:MdNextWeek":
            return MdNextWeek;
        case "md:MdOutlinedFlag":
            return MdOutlinedFlag;
        case "md:MdPolicy":
            return MdPolicy;
        case "md:MdPushPin":
            return MdPushPin;
        case "md:MdRedo":
            return MdRedo;
        case "md:MdRemoveCircleOutline":
            return MdRemoveCircleOutline;
        case "md:MdRemoveCircle":
            return MdRemoveCircle;
        case "md:MdRemove":
            return MdRemove;
        case "md:MdReplyAll":
            return MdReplyAll;
        case "md:MdReply":
            return MdReply;
        case "md:MdReportGmailerrorred":
            return MdReportGmailerrorred;
        case "md:MdReportOff":
            return MdReportOff;
        case "md:MdReport":
            return MdReport;
        case "md:MdSaveAlt":
            return MdSaveAlt;
        case "md:MdSaveAs":
            return MdSaveAs;
        case "md:MdSave":
            return MdSave;
        case "md:MdSelectAll":
            return MdSelectAll;
        case "md:MdSend":
            return MdSend;
        case "md:MdShield":
            return MdShield;
        case "md:MdSort":
            return MdSort;
        case "md:MdSquareFoot":
            return MdSquareFoot;
        case "md:MdStackedBarChart":
            return MdStackedBarChart;
        case "md:MdStream":
            return MdStream;
        case "md:MdTag":
            return MdTag;
        case "md:MdTextFormat":
            return MdTextFormat;
        case "md:MdUnarchive":
            return MdUnarchive;
        case "md:MdUndo":
            return MdUndo;
        case "md:MdUpcoming":
            return MdUpcoming;
        case "md:MdWaves":
            return MdWaves;
        case "md:MdWebStories":
            return MdWebStories;
        case "md:MdWeekend":
            return MdWeekend;
        case "md:MdWhereToVote":
            return MdWhereToVote;
        case "md:Md1xMobiledata":
            return Md1xMobiledata;
        case "md:Md30Fps":
            return Md30Fps;
        case "md:Md3gMobiledata":
            return Md3gMobiledata;
        case "md:Md4gMobiledata":
            return Md4gMobiledata;
        case "md:Md4gPlusMobiledata":
            return Md4gPlusMobiledata;
        case "md:Md60Fps":
            return Md60Fps;
        case "md:MdAccessAlarm":
            return MdAccessAlarm;
        case "md:MdAccessAlarms":
            return MdAccessAlarms;
        case "md:MdAccessTimeFilled":
            return MdAccessTimeFilled;
        case "md:MdAccessTime":
            return MdAccessTime;
        case "md:MdAdUnits":
            return MdAdUnits;
        case "md:MdAddAlarm":
            return MdAddAlarm;
        case "md:MdAddToHomeScreen":
            return MdAddToHomeScreen;
        case "md:MdAir":
            return MdAir;
        case "md:MdAirplaneTicket":
            return MdAirplaneTicket;
        case "md:MdAirplanemodeActive":
            return MdAirplanemodeActive;
        case "md:MdAirplanemodeInactive":
            return MdAirplanemodeInactive;
        case "md:MdAod":
            return MdAod;
        case "md:MdBattery0Bar":
            return MdBattery0Bar;
        case "md:MdBattery1Bar":
            return MdBattery1Bar;
        case "md:MdBattery2Bar":
            return MdBattery2Bar;
        case "md:MdBattery3Bar":
            return MdBattery3Bar;
        case "md:MdBattery4Bar":
            return MdBattery4Bar;
        case "md:MdBattery5Bar":
            return MdBattery5Bar;
        case "md:MdBattery6Bar":
            return MdBattery6Bar;
        case "md:MdBatteryAlert":
            return MdBatteryAlert;
        case "md:MdBatteryChargingFull":
            return MdBatteryChargingFull;
        case "md:MdBatteryFull":
            return MdBatteryFull;
        case "md:MdBatterySaver":
            return MdBatterySaver;
        case "md:MdBatteryStd":
            return MdBatteryStd;
        case "md:MdBatteryUnknown":
            return MdBatteryUnknown;
        case "md:MdBloodtype":
            return MdBloodtype;
        case "md:MdBluetoothConnected":
            return MdBluetoothConnected;
        case "md:MdBluetoothDisabled":
            return MdBluetoothDisabled;
        case "md:MdBluetoothDrive":
            return MdBluetoothDrive;
        case "md:MdBluetoothSearching":
            return MdBluetoothSearching;
        case "md:MdBluetooth":
            return MdBluetooth;
        case "md:MdBrightnessAuto":
            return MdBrightnessAuto;
        case "md:MdBrightnessHigh":
            return MdBrightnessHigh;
        case "md:MdBrightnessLow":
            return MdBrightnessLow;
        case "md:MdBrightnessMedium":
            return MdBrightnessMedium;
        case "md:MdCable":
            return MdCable;
        case "md:MdCameraswitch":
            return MdCameraswitch;
        case "md:MdCreditScore":
            return MdCreditScore;
        case "md:MdDarkMode":
            return MdDarkMode;
        case "md:MdDataSaverOff":
            return MdDataSaverOff;
        case "md:MdDataSaverOn":
            return MdDataSaverOn;
        case "md:MdDataUsage":
            return MdDataUsage;
        case "md:MdDatasetLinked":
            return MdDatasetLinked;
        case "md:MdDataset":
            return MdDataset;
        case "md:MdDeveloperMode":
            return MdDeveloperMode;
        case "md:MdDeviceThermostat":
            return MdDeviceThermostat;
        case "md:MdDevicesFold":
            return MdDevicesFold;
        case "md:MdDevices":
            return MdDevices;
        case "md:MdDiscount":
            return MdDiscount;
        case "md:MdDoNotDisturbOnTotalSilence":
            return MdDoNotDisturbOnTotalSilence;
        case "md:MdDvr":
            return MdDvr;
        case "md:MdEMobiledata":
            return MdEMobiledata;
        case "md:MdEdgesensorHigh":
            return MdEdgesensorHigh;
        case "md:MdEdgesensorLow":
            return MdEdgesensorLow;
        case "md:MdFlashlightOff":
            return MdFlashlightOff;
        case "md:MdFlashlightOn":
            return MdFlashlightOn;
        case "md:MdFlourescent":
            return MdFlourescent;
        case "md:MdFluorescent":
            return MdFluorescent;
        case "md:MdFmdBad":
            return MdFmdBad;
        case "md:MdFmdGood":
            return MdFmdGood;
        case "md:MdGMobiledata":
            return MdGMobiledata;
        case "md:MdGppBad":
            return MdGppBad;
        case "md:MdGppGood":
            return MdGppGood;
        case "md:MdGppMaybe":
            return MdGppMaybe;
        case "md:MdGpsFixed":
            return MdGpsFixed;
        case "md:MdGpsNotFixed":
            return MdGpsNotFixed;
        case "md:MdGpsOff":
            return MdGpsOff;
        case "md:MdGraphicEq":
            return MdGraphicEq;
        case "md:MdGrid3X3":
            return MdGrid3X3;
        case "md:MdGrid4X4":
            return MdGrid4X4;
        case "md:MdGridGoldenratio":
            return MdGridGoldenratio;
        case "md:MdHMobiledata":
            return MdHMobiledata;
        case "md:MdHPlusMobiledata":
            return MdHPlusMobiledata;
        case "md:MdHdrAutoSelect":
            return MdHdrAutoSelect;
        case "md:MdHdrAuto":
            return MdHdrAuto;
        case "md:MdHdrOffSelect":
            return MdHdrOffSelect;
        case "md:MdHdrOnSelect":
            return MdHdrOnSelect;
        case "md:MdLan":
            return MdLan;
        case "md:MdLensBlur":
            return MdLensBlur;
        case "md:MdLightMode":
            return MdLightMode;
        case "md:MdLocationDisabled":
            return MdLocationDisabled;
        case "md:MdLocationSearching":
            return MdLocationSearching;
        case "md:MdLteMobiledata":
            return MdLteMobiledata;
        case "md:MdLtePlusMobiledata":
            return MdLtePlusMobiledata;
        case "md:MdMacroOff":
            return MdMacroOff;
        case "md:MdMediaBluetoothOff":
            return MdMediaBluetoothOff;
        case "md:MdMediaBluetoothOn":
            return MdMediaBluetoothOn;
        case "md:MdMedicationLiquid":
            return MdMedicationLiquid;
        case "md:MdMedication":
            return MdMedication;
        case "md:MdMobileFriendly":
            return MdMobileFriendly;
        case "md:MdMobileOff":
            return MdMobileOff;
        case "md:MdMobiledataOff":
            return MdMobiledataOff;
        case "md:MdModeNight":
            return MdModeNight;
        case "md:MdModeStandby":
            return MdModeStandby;
        case "md:MdMonitorHeart":
            return MdMonitorHeart;
        case "md:MdMonitorWeight":
            return MdMonitorWeight;
        case "md:MdNearbyError":
            return MdNearbyError;
        case "md:MdNearbyOff":
            return MdNearbyOff;
        case "md:MdNetworkCell":
            return MdNetworkCell;
        case "md:MdNetworkWifi1Bar":
            return MdNetworkWifi1Bar;
        case "md:MdNetworkWifi2Bar":
            return MdNetworkWifi2Bar;
        case "md:MdNetworkWifi3Bar":
            return MdNetworkWifi3Bar;
        case "md:MdNetworkWifi":
            return MdNetworkWifi;
        case "md:MdNfc":
            return MdNfc;
        case "md:MdNightlight":
            return MdNightlight;
        case "md:MdNoteAlt":
            return MdNoteAlt;
        case "md:MdPassword":
            return MdPassword;
        case "md:MdPattern":
            return MdPattern;
        case "md:MdPhishing":
            return MdPhishing;
        case "md:MdPin":
            return MdPin;
        case "md:MdPlayLesson":
            return MdPlayLesson;
        case "md:MdPriceChange":
            return MdPriceChange;
        case "md:MdPriceCheck":
            return MdPriceCheck;
        case "md:MdPunchClock":
            return MdPunchClock;
        case "md:MdQuiz":
            return MdQuiz;
        case "md:MdRMobiledata":
            return MdRMobiledata;
        case "md:MdRadar":
            return MdRadar;
        case "md:MdRememberMe":
            return MdRememberMe;
        case "md:MdResetTv":
            return MdResetTv;
        case "md:MdRestartAlt":
            return MdRestartAlt;
        case "md:MdReviews":
            return MdReviews;
        case "md:MdRsvp":
            return MdRsvp;
        case "md:MdScreenLockLandscape":
            return MdScreenLockLandscape;
        case "md:MdScreenLockPortrait":
            return MdScreenLockPortrait;
        case "md:MdScreenLockRotation":
            return MdScreenLockRotation;
        case "md:MdScreenRotation":
            return MdScreenRotation;
        case "md:MdScreenSearchDesktop":
            return MdScreenSearchDesktop;
        case "md:MdScreenshotMonitor":
            return MdScreenshotMonitor;
        case "md:MdScreenshot":
            return MdScreenshot;
        case "md:MdSdStorage":
            return MdSdStorage;
        case "md:MdSecurityUpdateGood":
            return MdSecurityUpdateGood;
        case "md:MdSecurityUpdateWarning":
            return MdSecurityUpdateWarning;
        case "md:MdSecurityUpdate":
            return MdSecurityUpdate;
        case "md:MdSell":
            return MdSell;
        case "md:MdSendToMobile":
            return MdSendToMobile;
        case "md:MdSettingsSuggest":
            return MdSettingsSuggest;
        case "md:MdSettingsSystemDaydream":
            return MdSettingsSystemDaydream;
        case "md:MdShareLocation":
            return MdShareLocation;
        case "md:MdShortcut":
            return MdShortcut;
        case "md:MdSignalCellular0Bar":
            return MdSignalCellular0Bar;
        case "md:MdSignalCellular4Bar":
            return MdSignalCellular4Bar;
        case "md:MdSignalCellularAlt1Bar":
            return MdSignalCellularAlt1Bar;
        case "md:MdSignalCellularAlt2Bar":
            return MdSignalCellularAlt2Bar;
        case "md:MdSignalCellularAlt":
            return MdSignalCellularAlt;
        case "md:MdSignalCellularConnectedNoInternet0Bar":
            return MdSignalCellularConnectedNoInternet0Bar;
        case "md:MdSignalCellularConnectedNoInternet4Bar":
            return MdSignalCellularConnectedNoInternet4Bar;
        case "md:MdSignalCellularNoSim":
            return MdSignalCellularNoSim;
        case "md:MdSignalCellularNodata":
            return MdSignalCellularNodata;
        case "md:MdSignalCellularNull":
            return MdSignalCellularNull;
        case "md:MdSignalCellularOff":
            return MdSignalCellularOff;
        case "md:MdSignalWifi0Bar":
            return MdSignalWifi0Bar;
        case "md:MdSignalWifi4BarLock":
            return MdSignalWifi4BarLock;
        case "md:MdSignalWifi4Bar":
            return MdSignalWifi4Bar;
        case "md:MdSignalWifiBad":
            return MdSignalWifiBad;
        case "md:MdSignalWifiConnectedNoInternet4":
            return MdSignalWifiConnectedNoInternet4;
        case "md:MdSignalWifiOff":
            return MdSignalWifiOff;
        case "md:MdSignalWifiStatusbar4Bar":
            return MdSignalWifiStatusbar4Bar;
        case "md:MdSignalWifiStatusbarConnectedNoInternet4":
            return MdSignalWifiStatusbarConnectedNoInternet4;
        case "md:MdSignalWifiStatusbarNull":
            return MdSignalWifiStatusbarNull;
        case "md:MdSimCardDownload":
            return MdSimCardDownload;
        case "md:MdSplitscreen":
            return MdSplitscreen;
        case "md:MdSportsScore":
            return MdSportsScore;
        case "md:MdSsidChart":
            return MdSsidChart;
        case "md:MdStorage":
            return MdStorage;
        case "md:MdStorm":
            return MdStorm;
        case "md:MdSummarize":
            return MdSummarize;
        case "md:MdSystemSecurityUpdateGood":
            return MdSystemSecurityUpdateGood;
        case "md:MdSystemSecurityUpdateWarning":
            return MdSystemSecurityUpdateWarning;
        case "md:MdSystemSecurityUpdate":
            return MdSystemSecurityUpdate;
        case "md:MdTask":
            return MdTask;
        case "md:MdThermostat":
            return MdThermostat;
        case "md:MdTimer10Select":
            return MdTimer10Select;
        case "md:MdTimer3Select":
            return MdTimer3Select;
        case "md:MdTungsten":
            return MdTungsten;
        case "md:MdUsbOff":
            return MdUsbOff;
        case "md:MdUsb":
            return MdUsb;
        case "md:MdWallpaper":
            return MdWallpaper;
        case "md:MdWater":
            return MdWater;
        case "md:MdWidgets":
            return MdWidgets;
        case "md:MdWifi1Bar":
            return MdWifi1Bar;
        case "md:MdWifi2Bar":
            return MdWifi2Bar;
        case "md:MdWifiCalling3":
            return MdWifiCalling3;
        case "md:MdWifiChannel":
            return MdWifiChannel;
        case "md:MdWifiFind":
            return MdWifiFind;
        case "md:MdWifiLock":
            return MdWifiLock;
        case "md:MdWifiPassword":
            return MdWifiPassword;
        case "md:MdWifiTetheringErrorRounded":
            return MdWifiTetheringErrorRounded;
        case "md:MdWifiTetheringError":
            return MdWifiTetheringError;
        case "md:MdWifiTetheringOff":
            return MdWifiTetheringOff;
        case "md:MdWifiTethering":
            return MdWifiTethering;
        case "md:MdAddChart":
            return MdAddChart;
        case "md:MdAddComment":
            return MdAddComment;
        case "md:MdAlignHorizontalCenter":
            return MdAlignHorizontalCenter;
        case "md:MdAlignHorizontalLeft":
            return MdAlignHorizontalLeft;
        case "md:MdAlignHorizontalRight":
            return MdAlignHorizontalRight;
        case "md:MdAlignVerticalBottom":
            return MdAlignVerticalBottom;
        case "md:MdAlignVerticalCenter":
            return MdAlignVerticalCenter;
        case "md:MdAlignVerticalTop":
            return MdAlignVerticalTop;
        case "md:MdAreaChart":
            return MdAreaChart;
        case "md:MdAttachFile":
            return MdAttachFile;
        case "md:MdAttachMoney":
            return MdAttachMoney;
        case "md:MdAutoGraph":
            return MdAutoGraph;
        case "md:MdBarChart":
            return MdBarChart;
        case "md:MdBorderAll":
            return MdBorderAll;
        case "md:MdBorderBottom":
            return MdBorderBottom;
        case "md:MdBorderClear":
            return MdBorderClear;
        case "md:MdBorderColor":
            return MdBorderColor;
        case "md:MdBorderHorizontal":
            return MdBorderHorizontal;
        case "md:MdBorderInner":
            return MdBorderInner;
        case "md:MdBorderLeft":
            return MdBorderLeft;
        case "md:MdBorderOuter":
            return MdBorderOuter;
    }
}
