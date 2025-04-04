import type {IconType} from "react-icons";

import {
    MdOutlineBattery5Bar,
    MdOutlineBattery6Bar,
    MdOutlineBatteryAlert,
    MdOutlineBatteryChargingFull,
    MdOutlineBatteryFull,
    MdOutlineBatterySaver,
    MdOutlineBatteryStd,
    MdOutlineBatteryUnknown,
    MdOutlineBloodtype,
    MdOutlineBluetoothConnected,
    MdOutlineBluetoothDisabled,
    MdOutlineBluetoothDrive,
    MdOutlineBluetoothSearching,
    MdOutlineBluetooth,
    MdOutlineBrightnessAuto,
    MdOutlineBrightnessHigh,
    MdOutlineBrightnessLow,
    MdOutlineBrightnessMedium,
    MdOutlineCable,
    MdOutlineCameraswitch,
    MdOutlineCreditScore,
    MdOutlineDarkMode,
    MdOutlineDataSaverOff,
    MdOutlineDataSaverOn,
    MdOutlineDataUsage,
    MdOutlineDatasetLinked,
    MdOutlineDataset,
    MdOutlineDeveloperMode,
    MdOutlineDeviceThermostat,
    MdOutlineDevicesFold,
    MdOutlineDevices,
    MdOutlineDiscount,
    MdOutlineDoNotDisturbOnTotalSilence,
    MdOutlineDvr,
    MdOutlineEMobiledata,
    MdOutlineEdgesensorHigh,
    MdOutlineEdgesensorLow,
    MdOutlineFlashlightOff,
    MdOutlineFlashlightOn,
    MdOutlineFlourescent,
    MdOutlineFluorescent,
    MdOutlineFmdBad,
    MdOutlineFmdGood,
    MdOutlineGMobiledata,
    MdOutlineGppBad,
    MdOutlineGppGood,
    MdOutlineGppMaybe,
    MdOutlineGpsFixed,
    MdOutlineGpsNotFixed,
    MdOutlineGpsOff,
    MdOutlineGraphicEq,
    MdOutlineGrid3X3,
    MdOutlineGrid4X4,
    MdOutlineGridGoldenratio,
    MdOutlineHMobiledata,
    MdOutlineHPlusMobiledata,
    MdOutlineHdrAutoSelect,
    MdOutlineHdrAuto,
    MdOutlineHdrOffSelect,
    MdOutlineHdrOnSelect,
    MdOutlineLan,
    MdOutlineLensBlur,
    MdOutlineLightMode,
    MdOutlineLocationDisabled,
    MdOutlineLocationSearching,
    MdOutlineLteMobiledata,
    MdOutlineLtePlusMobiledata,
    MdOutlineMacroOff,
    MdOutlineMediaBluetoothOff,
    MdOutlineMediaBluetoothOn,
    MdOutlineMedicationLiquid,
    MdOutlineMedication,
    MdOutlineMobileFriendly,
    MdOutlineMobileOff,
    MdOutlineMobiledataOff,
    MdOutlineModeNight,
    MdOutlineModeStandby,
    MdOutlineMonitorHeart,
    MdOutlineMonitorWeight,
    MdOutlineNearbyError,
    MdOutlineNearbyOff,
    MdOutlineNetworkCell,
    MdOutlineNetworkWifi1Bar,
    MdOutlineNetworkWifi2Bar,
    MdOutlineNetworkWifi3Bar,
    MdOutlineNetworkWifi,
    MdOutlineNfc,
    MdOutlineNightlight,
    MdOutlineNoteAlt,
    MdOutlinePassword,
    MdOutlinePattern,
    MdOutlinePhishing,
    MdOutlinePin,
    MdOutlinePlayLesson,
    MdOutlinePriceChange,
    MdOutlinePriceCheck,
    MdOutlinePunchClock,
    MdOutlineQuiz,
    MdOutlineRMobiledata,
    MdOutlineRadar,
    MdOutlineRememberMe,
    MdOutlineResetTv,
    MdOutlineRestartAlt,
    MdOutlineReviews,
    MdOutlineRsvp,
    MdOutlineScreenLockLandscape,
    MdOutlineScreenLockPortrait,
    MdOutlineScreenLockRotation,
    MdOutlineScreenRotation,
    MdOutlineScreenSearchDesktop,
    MdOutlineScreenshotMonitor,
    MdOutlineScreenshot,
    MdOutlineSdStorage,
    MdOutlineSecurityUpdateGood,
    MdOutlineSecurityUpdateWarning,
    MdOutlineSecurityUpdate,
    MdOutlineSell,
    MdOutlineSendToMobile,
    MdOutlineSettingsSuggest,
    MdOutlineSettingsSystemDaydream,
    MdOutlineShareLocation,
    MdOutlineShortcut,
    MdOutlineSignalCellular0Bar,
    MdOutlineSignalCellular4Bar,
    MdOutlineSignalCellularAlt1Bar,
    MdOutlineSignalCellularAlt2Bar,
    MdOutlineSignalCellularAlt,
    MdOutlineSignalCellularConnectedNoInternet0Bar,
    MdOutlineSignalCellularConnectedNoInternet4Bar,
    MdOutlineSignalCellularNoSim,
    MdOutlineSignalCellularNodata,
    MdOutlineSignalCellularNull,
    MdOutlineSignalCellularOff,
    MdOutlineSignalWifi0Bar,
    MdOutlineSignalWifi4BarLock,
    MdOutlineSignalWifi4Bar,
    MdOutlineSignalWifiBad,
    MdOutlineSignalWifiConnectedNoInternet4,
    MdOutlineSignalWifiOff,
    MdOutlineSignalWifiStatusbar4Bar,
    MdOutlineSignalWifiStatusbarConnectedNoInternet4,
    MdOutlineSignalWifiStatusbarNull,
    MdOutlineSimCardDownload,
    MdOutlineSplitscreen,
    MdOutlineSportsScore,
    MdOutlineSsidChart,
    MdOutlineStorage,
    MdOutlineStorm,
    MdOutlineSummarize,
    MdOutlineSystemSecurityUpdateGood,
    MdOutlineSystemSecurityUpdateWarning,
    MdOutlineSystemSecurityUpdate,
    MdOutlineTask,
    MdOutlineThermostat,
    MdOutlineTimer10Select,
    MdOutlineTimer3Select,
    MdOutlineTungsten,
    MdOutlineUsbOff,
    MdOutlineUsb,
    MdOutlineWallpaper,
    MdOutlineWater,
    MdOutlineWidgets,
    MdOutlineWifi1Bar,
    MdOutlineWifi2Bar,
    MdOutlineWifiCalling3,
    MdOutlineWifiChannel,
    MdOutlineWifiFind,
    MdOutlineWifiLock,
    MdOutlineWifiPassword,
    MdOutlineWifiTetheringErrorRounded,
    MdOutlineWifiTetheringError,
    MdOutlineWifiTetheringOff,
    MdOutlineWifiTethering,
    MdOutlineAddChart,
    MdOutlineAddComment,
    MdOutlineAlignHorizontalCenter,
    MdOutlineAlignHorizontalLeft,
    MdOutlineAlignHorizontalRight,
    MdOutlineAlignVerticalBottom,
    MdOutlineAlignVerticalCenter,
    MdOutlineAlignVerticalTop,
    MdOutlineAreaChart,
    MdOutlineAttachFile,
    MdOutlineAttachMoney,
    MdOutlineAutoGraph,
    MdOutlineBarChart,
    MdOutlineBorderAll,
    MdOutlineBorderBottom,
    MdOutlineBorderClear,
    MdOutlineBorderColor,
    MdOutlineBorderHorizontal,
    MdOutlineBorderInner,
    MdOutlineBorderLeft,
    MdOutlineBorderOuter,
    MdOutlineBorderRight,
    MdOutlineBorderStyle,
    MdOutlineBorderTop,
    MdOutlineBorderVertical,
    MdOutlineBubbleChart,
    MdOutlineCandlestickChart,
    MdOutlineChecklistRtl,
    MdOutlineChecklist,
    MdOutlineDataArray,
    MdOutlineDataObject,
    MdOutlineDragHandle,
    MdOutlineDraw,
    MdOutlineEditNote,
    MdOutlineFormatAlignCenter,
    MdOutlineFormatAlignJustify,
    MdOutlineFormatAlignLeft,
    MdOutlineFormatAlignRight,
    MdOutlineFormatBold,
    MdOutlineFormatClear,
    MdOutlineFormatColorFill,
    MdOutlineFormatColorReset,
    MdOutlineFormatColorText,
    MdOutlineFormatIndentDecrease,
    MdOutlineFormatIndentIncrease,
    MdOutlineFormatItalic,
    MdOutlineFormatLineSpacing,
    MdOutlineFormatListBulleted,
    MdOutlineFormatListNumberedRtl,
    MdOutlineFormatListNumbered,
    MdOutlineFormatPaint,
    MdOutlineFormatQuote,
    MdOutlineFormatShapes,
    MdOutlineFormatSize,
    MdOutlineFormatStrikethrough,
    MdOutlineFormatTextdirectionLToR,
    MdOutlineFormatTextdirectionRToL,
    MdOutlineFormatUnderlined,
    MdOutlineFunctions,
    MdOutlineHeight,
    MdOutlineHexagon,
    MdOutlineHighlight,
    MdOutlineHorizontalDistribute,
    MdOutlineHorizontalRule,
    MdOutlineInsertChartOutlined,
    MdOutlineInsertChart,
    MdOutlineInsertComment,
    MdOutlineInsertDriveFile,
    MdOutlineInsertEmoticon,
    MdOutlineInsertInvitation,
    MdOutlineInsertLink,
    MdOutlineInsertPageBreak,
    MdOutlineInsertPhoto,
    MdOutlineLineAxis,
    MdOutlineLinearScale,
    MdOutlineMargin,
    MdOutlineMergeType,
    MdOutlineModeComment,
    MdOutlineModeEditOutline,
    MdOutlineModeEdit,
    MdOutlineMode,
    MdOutlineMonetizationOn,
    MdOutlineMoneyOffCsred,
    MdOutlineMoneyOff,
    MdOutlineMoveDown,
    MdOutlineMoveUp,
    MdOutlineMultilineChart,
    MdOutlineNotes,
    MdOutlineNumbers,
    MdOutlinePadding,
    MdOutlinePentagon,
    MdOutlinePieChartOutline,
    MdOutlinePieChart,
    MdOutlinePolyline,
    MdOutlinePostAdd,
    MdOutlinePublish,
    MdOutlineQueryStats,
    MdOutlineRectangle,
    MdOutlineScatterPlot,
    MdOutlineSchema,
    MdOutlineScore,
    MdOutlineShapeLine,
    MdOutlineShortText,
    MdOutlineShowChart,
    MdOutlineSpaceBar,
    MdOutlineSquare,
    MdOutlineStackedLineChart,
    MdOutlineStrikethroughS,
    MdOutlineSubscript,
    MdOutlineSuperscript,
    MdOutlineTableChart,
    MdOutlineTableRows,
    MdOutlineTextDecrease,
    MdOutlineTextFields,
    MdOutlineTextIncrease,
    MdOutlineTitle,
    MdOutlineTypeSpecimen,
    MdOutlineVerticalAlignBottom,
    MdOutlineVerticalAlignCenter,
    MdOutlineVerticalAlignTop,
    MdOutlineVerticalDistribute,
    MdOutlineWrapText,
    MdOutlineApproval,
    MdOutlineAttachEmail,
    MdOutlineAttachment,
    MdOutlineCloudCircle,
    MdOutlineCloudDone,
    MdOutlineCloudDownload,
    MdOutlineCloudOff,
    MdOutlineCloudQueue,
    MdOutlineCloudSync,
    MdOutlineCloudUpload,
    MdOutlineCloud,
    MdOutlineCreateNewFolder,
    MdOutlineDifference,
    MdOutlineDownloadDone,
    MdOutlineDownloadForOffline,
    MdOutlineDownload,
    MdOutlineDownloading,
    MdOutlineDriveFileMoveRtl,
    MdOutlineDriveFileMove,
    MdOutlineDriveFileRenameOutline,
    MdOutlineDriveFolderUpload,
    MdOutlineFileDownloadDone,
    MdOutlineFileDownloadOff,
    MdOutlineFileDownload,
    MdOutlineFileOpen,
    MdOutlineFileUpload,
    MdOutlineFolderCopy,
    MdOutlineFolderDelete,
    MdOutlineFolderOff,
    MdOutlineFolderOpen,
    MdOutlineFolderShared,
    MdOutlineFolderZip,
    MdOutlineFolder,
    MdOutlineFormatOverline,
    MdOutlineGridView,
    MdOutlineNewspaper,
    MdOutlineRequestQuote,
    MdOutlineRuleFolder,
    MdOutlineSnippetFolder,
    MdOutlineTextSnippet,
    MdOutlineTopic,
    MdOutlineUploadFile,
    MdOutlineUpload,
    MdOutlineWorkspaces,
    MdOutlineAdfScanner,
    MdOutlineBrowserNotSupported,
    MdOutlineBrowserUpdated,
    MdOutlineCastConnected,
    MdOutlineCastForEducation,
    MdOutlineCast,
    MdOutlineComputer,
    MdOutlineConnectedTv,
    MdOutlineDesktopMac,
    MdOutlineDesktopWindows,
    MdOutlineDeveloperBoardOff,
    MdOutlineDeveloperBoard,
    MdOutlineDeviceHub,
    MdOutlineDeviceUnknown,
    MdOutlineDevicesOther,
    MdOutlineDock,
    MdOutlineEarbudsBattery,
    MdOutlineEarbuds,
    MdOutlineGamepad,
    MdOutlineHeadphonesBattery,
    MdOutlineHeadphones,
    MdOutlineHeadsetMic,
    MdOutlineHeadsetOff,
    MdOutlineHeadset,
    MdOutlineHomeMax,
    MdOutlineHomeMini,
    MdOutlineKeyboardAlt,
    MdOutlineKeyboardArrowDown,
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
    MdOutlineKeyboardArrowUp,
    MdOutlineKeyboardBackspace,
    MdOutlineKeyboardCapslock,
    MdOutlineKeyboardCommandKey,
    MdOutlineKeyboardControlKey,
    MdOutlineKeyboardDoubleArrowDown,
    MdOutlineKeyboardDoubleArrowLeft,
    MdOutlineKeyboardDoubleArrowRight,
    MdOutlineKeyboardDoubleArrowUp,
    MdOutlineKeyboardHide,
    MdOutlineKeyboardOptionKey,
    MdOutlineKeyboardReturn,
    MdOutlineKeyboardTab,
    MdOutlineKeyboardVoice,
    MdOutlineKeyboard,
    MdOutlineLaptopChromebook,
    MdOutlineLaptopMac,
    MdOutlineLaptopWindows,
    MdOutlineLaptop,
    MdOutlineMemory,
    MdOutlineMonitor,
    MdOutlineMouse,
    MdOutlinePhoneAndroid,
    MdOutlinePhoneIphone,
    MdOutlinePhonelinkOff,
    MdOutlinePhonelink,
    MdOutlinePointOfSale,
    MdOutlinePowerInput,
    MdOutlineRouter,
    MdOutlineScanner,
    MdOutlineSecurity,
    MdOutlineSimCard,
    MdOutlineSmartDisplay,
    MdOutlineSmartScreen,
    MdOutlineSmartToy,
    MdOutlineSmartphone,
    MdOutlineSpeakerGroup,
    MdOutlineSpeaker,
    MdOutlineStart,
    MdOutlineTabletAndroid,
    MdOutlineTabletMac,
    MdOutlineTablet,
    MdOutlineToys,
    MdOutlineTv,
    MdOutlineVideogameAssetOff,
    MdOutlineVideogameAsset,
    MdOutlineWatchOff,
    MdOutlineWatch,
    MdOutlineAutoMode,
    MdOutlineBlindsClosed,
    MdOutlineBlinds,
    MdOutlineBroadcastOnHome,
    MdOutlineBroadcastOnPersonal,
    MdOutlineCurtainsClosed,
    MdOutlineCurtains,
    MdOutlineElectricBolt,
    MdOutlineElectricMeter,
    MdOutlineEnergySavingsLeaf,
    MdOutlineGasMeter,
    MdOutlineHeatPump,
    MdOutlineModeFanOff,
    MdOutlineNestCamWiredStand,
    MdOutlineOilBarrel,
    MdOutlinePropaneTank,
    MdOutlinePropane,
    MdOutlineRollerShadesClosed,
    MdOutlineRollerShades,
    MdOutlineSensorDoor,
    MdOutlineSensorOccupied,
    MdOutlineSensorWindow,
    MdOutlineShieldMoon,
    MdOutlineSolarPower,
    MdOutlineVerticalShadesClosed,
    MdOutlineVerticalShades,
    MdOutlineWindPower,
    MdOutline10Mp,
    MdOutline11Mp,
    MdOutline12Mp,
    MdOutline13Mp,
    MdOutline14Mp,
    MdOutline15Mp,
    MdOutline16Mp,
    MdOutline17Mp,
    MdOutline18Mp,
    MdOutline19Mp,
    MdOutline20Mp,
    MdOutline21Mp,
    MdOutline22Mp,
    MdOutline23Mp,
    MdOutline24Mp,
    MdOutline2Mp,
    MdOutline30FpsSelect,
    MdOutline3Mp,
    MdOutline4Mp,
    MdOutline5Mp,
    MdOutline60FpsSelect,
    MdOutline6Mp,
    MdOutline7Mp,
    MdOutline8Mp,
    MdOutline9Mp,
    MdOutlineAddAPhoto,
    MdOutlineAddPhotoAlternate,
    MdOutlineAddToPhotos,
    MdOutlineAdjust,
    MdOutlineAnimation,
    MdOutlineAssistantPhoto,
    MdOutlineAssistant,
    MdOutlineAudiotrack,
    MdOutlineAutoAwesomeMosaic,
    MdOutlineAutoAwesomeMotion,
    MdOutlineAutoAwesome,
    MdOutlineAutoFixHigh,
    MdOutlineAutoFixNormal,
    MdOutlineAutoFixOff,
    MdOutlineAutoStories,
    MdOutlineAutofpsSelect,
    MdOutlineBedtimeOff,
    MdOutlineBedtime,
    MdOutlineBlurCircular,
    MdOutlineBlurLinear,
    MdOutlineBlurOff,
    MdOutlineBlurOn,
    MdOutlineBrightness1,
    MdOutlineBrightness2,
    MdOutlineBrightness3,
    MdOutlineBrightness4,
    MdOutlineBrightness5,
    MdOutlineBrightness6,
    MdOutlineBrightness7,
    MdOutlineBrokenImage,
    MdOutlineBrush,
    MdOutlineBurstMode,
    MdOutlineCameraAlt,
    MdOutlineCameraFront,
    MdOutlineCameraRear,
    MdOutlineCameraRoll,
    MdOutlineCamera,
    MdOutlineCases,
    MdOutlineCenterFocusStrong,
    MdOutlineCenterFocusWeak,
    MdOutlineCircle,
    MdOutlineCollectionsBookmark,
    MdOutlineCollections,
    MdOutlineColorLens,
    MdOutlineColorize,
    MdOutlineCompare,
    MdOutlineContrast,
    MdOutlineControlPointDuplicate,
    MdOutlineControlPoint,
    MdOutlineCrop169,
    MdOutlineCrop32,
    MdOutlineCrop54,
    MdOutlineCrop75,
    MdOutlineCropDin,
    MdOutlineCropFree,
    MdOutlineCropLandscape,
    MdOutlineCropOriginal,
    MdOutlineCropPortrait,
    MdOutlineCropRotate,
    MdOutlineCropSquare,
    MdOutlineCrop,
    MdOutlineCurrencyBitcoin,
    MdOutlineCurrencyFranc,
    MdOutlineCurrencyLira,
    MdOutlineCurrencyPound,
    MdOutlineCurrencyRuble,
    MdOutlineCurrencyRupee,
    MdOutlineCurrencyYen,
    MdOutlineCurrencyYuan,
    MdOutlineDeblur,
    MdOutlineDehaze,
    MdOutlineDetails,
    MdOutlineDirtyLens,
    MdOutlineEdit,
    MdOutlineEuro,
    MdOutlineExposureNeg1,
    MdOutlineExposureNeg2,
    MdOutlineExposurePlus1,
    MdOutlineExposurePlus2,
    MdOutlineExposureZero,
    MdOutlineExposure,
    MdOutlineFaceRetouchingNatural,
    MdOutlineFaceRetouchingOff,
    MdOutlineFilter1,
    MdOutlineFilter2,
    MdOutlineFilter3,
    MdOutlineFilter4,
    MdOutlineFilter5,
    MdOutlineFilter6,
    MdOutlineFilter7,
    MdOutlineFilter8,
    MdOutlineFilter9Plus,
    MdOutlineFilter9,
    MdOutlineFilterBAndW,
    MdOutlineFilterCenterFocus,
    MdOutlineFilterDrama,
    MdOutlineFilterFrames,
    MdOutlineFilterHdr,
    MdOutlineFilterNone,
    MdOutlineFilterTiltShift,
    MdOutlineFilterVintage,
    MdOutlineFilter,
    MdOutlineFlare,
    MdOutlineFlashAuto,
    MdOutlineFlashOff,
    MdOutlineFlashOn,
    MdOutlineFlipCameraAndroid,
    MdOutlineFlipCameraIos,
    MdOutlineFlip,
    MdOutlineGradient,
    MdOutlineGrain,
    MdOutlineGridOff,
    MdOutlineGridOn,
    MdOutlineHdrEnhancedSelect,
    MdOutlineHdrOff,
    MdOutlineHdrOn,
    MdOutlineHdrPlus,
    MdOutlineHdrStrong,
    MdOutlineHdrWeak,
    MdOutlineHealing,
    MdOutlineHevc,
    MdOutlineHideImage,
    MdOutlineImageAspectRatio,
    MdOutlineImageNotSupported,
    MdOutlineImageSearch,
    MdOutlineImage,
    MdOutlineIncompleteCircle,
    MdOutlineIso,
    MdOutlineLandscape,
    MdOutlineLeakAdd,
    MdOutlineLeakRemove,
    MdOutlineLens,
    MdOutlineLinkedCamera,
    MdOutlineLogoDev,
    MdOutlineLooks3,
    MdOutlineLooks4,
    MdOutlineLooks5,
    MdOutlineLooks6,
    MdOutlineLooksOne,
    MdOutlineLooksTwo,
    MdOutlineLooks,
    MdOutlineLoupe,
    MdOutlineMicExternalOff,
    MdOutlineMicExternalOn,
    MdOutlineMonochromePhotos,
    MdOutlineMotionPhotosAuto,
    MdOutlineMotionPhotosOff,
    MdOutlineMotionPhotosOn,
    MdOutlineMotionPhotosPause,
    MdOutlineMotionPhotosPaused,
    MdOutlineMovieCreation,
    MdOutlineMovieFilter,
    MdOutlineMp,
    MdOutlineMusicNote,
    MdOutlineMusicOff,
    MdOutlineNaturePeople,
    MdOutlineNature,
    MdOutlineNavigateBefore,
    MdOutlineNavigateNext,
    MdOutlinePalette,
    MdOutlinePanoramaFishEye,
    MdOutlinePanoramaHorizontalSelect,
    MdOutlinePanoramaHorizontal,
    MdOutlinePanoramaPhotosphereSelect,
    MdOutlinePanoramaPhotosphere,
    MdOutlinePanoramaVerticalSelect,
    MdOutlinePanoramaVertical,
    MdOutlinePanoramaWideAngleSelect,
    MdOutlinePanoramaWideAngle,
    MdOutlinePanorama,
    MdOutlinePhotoAlbum,
    MdOutlinePhotoCameraBack,
    MdOutlinePhotoCameraFront,
    MdOutlinePhotoCamera,
    MdOutlinePhotoFilter,
    MdOutlinePhotoLibrary,
    MdOutlinePhotoSizeSelectActual,
    MdOutlinePhotoSizeSelectLarge,
    MdOutlinePhotoSizeSelectSmall,
    MdOutlinePhoto,
    MdOutlinePictureAsPdf,
    MdOutlinePortrait,
    MdOutlineRawOff,
    MdOutlineRawOn,
    MdOutlineReceiptLong,
    MdOutlineRemoveRedEye,
    MdOutlineRotate90DegreesCcw,
    MdOutlineRotate90DegreesCw,
    MdOutlineRotateLeft,
    MdOutlineRotateRight,
    MdOutlineShutterSpeed,
    MdOutlineSlideshow,
    MdOutlineStraighten,
    MdOutlineStyle,
    MdOutlineSwitchCamera,
    MdOutlineSwitchVideo,
    MdOutlineTagFaces,
    MdOutlineTexture,
    MdOutlineThermostatAuto,
    MdOutlineTimelapse,
    MdOutlineTimer10,
    MdOutlineTimer3,
    MdOutlineTimerOff,
    MdOutlineTimer,
    MdOutlineTonality,
    MdOutlineTransform,
    MdOutlineTune,
    MdOutlineVideoCameraBack,
    MdOutlineVideoCameraFront,
    MdOutlineVideoStable,
    MdOutlineViewComfy,
    MdOutlineViewCompact,
    MdOutlineVignette,
    MdOutlineVrpano,
    MdOutlineWbAuto,
    MdOutlineWbCloudy,
    MdOutlineWbIncandescent,
    MdOutlineWbIridescent,
    MdOutlineWbShade,
    MdOutlineWbSunny,
    MdOutlineWbTwilight,
    MdOutline360,
    MdOutlineAddBusiness,
    MdOutlineAddLocationAlt,
    MdOutlineAddLocation,
    MdOutlineAddRoad,
    MdOutlineAgriculture,
    MdOutlineAirlineStops,
    MdOutlineAirlines,
    MdOutlineAltRoute,
    MdOutlineAtm,
    MdOutlineAttractions,
    MdOutlineBadge,
    MdOutlineBakeryDining,
    MdOutlineBeenhere,
    MdOutlineBikeScooter,
    MdOutlineBreakfastDining,
    MdOutlineBrunchDining,
    MdOutlineBusAlert,
    MdOutlineCarCrash,
    MdOutlineCarRental,
    MdOutlineCarRepair,
    MdOutlineCastle,
    MdOutlineCategory,
    MdOutlineCelebration,
    MdOutlineChurch,
    MdOutlineCleaningServices,
    MdOutlineCompassCalibration,
    MdOutlineConnectingAirports,
    MdOutlineCrisisAlert,
    MdOutlineDeliveryDining,
    MdOutlineDepartureBoard,
    MdOutlineDesignServices,
    MdOutlineDiamond,
    MdOutlineDinnerDining,
    MdOutlineDirectionsBike,
    MdOutlineDirectionsBoatFilled,
    MdOutlineDirectionsBoat,
    MdOutlineDirectionsBusFilled,
    MdOutlineDirectionsBus,
    MdOutlineDirectionsCarFilled,
    MdOutlineDirectionsCar,
    MdOutlineDirectionsRailwayFilled,
    MdOutlineDirectionsRailway,
    MdOutlineDirectionsRun,
    MdOutlineDirectionsSubwayFilled,
    MdOutlineDirectionsSubway,
    MdOutlineDirectionsTransitFilled,
    MdOutlineDirectionsTransit,
    MdOutlineDirectionsWalk,
    MdOutlineDirections,
    MdOutlineDryCleaning,
    MdOutlineEditAttributes,
    MdOutlineEditLocationAlt,
    MdOutlineEditLocation,
    MdOutlineEditRoad,
    MdOutlineEggAlt,
    MdOutlineEgg,
    MdOutlineElectricBike,
    MdOutlineElectricCar,
    MdOutlineElectricMoped,
    MdOutlineElectricRickshaw,
    MdOutlineElectricScooter,
    MdOutlineElectricalServices,
    MdOutlineEmergencyRecording,
    MdOutlineEmergencyShare,
    MdOutlineEmergency,
    MdOutlineEvStation,
    MdOutlineFactory,
    MdOutlineFastfood,
    MdOutlineFestival,
    MdOutlineFireHydrantAlt,
    MdOutlineFireTruck,
    MdOutlineFlightClass,
    MdOutlineFlight,
    MdOutlineForest,
    MdOutlineForkLeft,
    MdOutlineForkRight,
    MdOutlineFort,
    MdOutlineHail,
    MdOutlineHandyman,
    MdOutlineHardware,
    MdOutlineHomeRepairService,
    MdOutlineHotel,
    MdOutlineHvac,
    MdOutlineIcecream,
    MdOutlineKebabDining,
    MdOutlineLayersClear,
    MdOutlineLayers,
    MdOutlineLiquor,
    MdOutlineLocalActivity,
    MdOutlineLocalAirport,
    MdOutlineLocalAtm,
    MdOutlineLocalBar,
    MdOutlineLocalCafe,
    MdOutlineLocalCarWash,
    MdOutlineLocalConvenienceStore,
    MdOutlineLocalDining,
    MdOutlineLocalDrink,
    MdOutlineLocalFireDepartment,
    MdOutlineLocalFlorist,
    MdOutlineLocalGasStation,
    MdOutlineLocalGroceryStore,
    MdOutlineLocalHospital,
    MdOutlineLocalHotel,
    MdOutlineLocalLaundryService,
    MdOutlineLocalLibrary,
    MdOutlineLocalMall,
    MdOutlineLocalMovies,
    MdOutlineLocalOffer,
    MdOutlineLocalParking,
    MdOutlineLocalPharmacy,
    MdOutlineLocalPhone,
    MdOutlineLocalPizza,
    MdOutlineLocalPlay,
    MdOutlineLocalPolice,
    MdOutlineLocalPostOffice,
    MdOutlineLocalPrintshop,
    MdOutlineLocalSee,
    MdOutlineLocalShipping,
    MdOutlineLocalTaxi,
    MdOutlineLunchDining,
    MdOutlineMap,
    MdOutlineMapsUgc,
    MdOutlineMedicalInformation,
    MdOutlineMedicalServices,
    MdOutlineMenuBook,
    MdOutlineMerge,
    MdOutlineMinorCrash,
    MdOutlineMiscellaneousServices,
    MdOutlineModeOfTravel,
    MdOutlineMoney,
    MdOutlineMoped,
    MdOutlineMosque,
    MdOutlineMoving,
    MdOutlineMultipleStop,
    MdOutlineMuseum,
    MdOutlineMyLocation,
    MdOutlineNavigation,
    MdOutlineNearMeDisabled,
    MdOutlineNearMe,
    MdOutlineNightlife,
    MdOutlineNoCrash,
    MdOutlineNoMeals,
    MdOutlineNoTransfer,
    MdOutlineNotListedLocation,
    MdOutlinePark,
    MdOutlinePedalBike,
    MdOutlinePersonPinCircle,
    MdOutlinePersonPin,
    MdOutlinePestControlRodent,
    MdOutlinePestControl,
    MdOutlinePinDrop,
    MdOutlinePlace,
    MdOutlinePlumbing,
    MdOutlineRailwayAlert,
    MdOutlineRamenDining,
    MdOutlineRampLeft,
    MdOutlineRampRight,
    MdOutlineRateReview,
    MdOutlineRemoveRoad,
    MdOutlineRestaurantMenu,
    MdOutlineRestaurant,
    MdOutlineRoundaboutLeft,
    MdOutlineRoundaboutRight,
    MdOutlineRoute,
    MdOutlineRunCircle,
    MdOutlineSafetyCheck,
    MdOutlineSailing,
    MdOutlineSatellite,
    MdOutlineScreenRotationAlt,
    MdOutlineSetMeal,
    MdOutlineSignpost,
    MdOutlineSnowmobile,
    MdOutlineSos,
    MdOutlineSoupKitchen,
    MdOutlineStadium,
    MdOutlineStoreMallDirectory,
    MdOutlineStraight,
    MdOutlineStreetview,
    MdOutlineSubway,
    MdOutlineSynagogue,
    MdOutlineTakeoutDining,
    MdOutlineTaxiAlert,
    MdOutlineTempleBuddhist,
    MdOutlineTempleHindu,
    MdOutlineTerrain,
    MdOutlineTheaterComedy,
    MdOutlineTireRepair,
    MdOutlineTraffic,
    MdOutlineTrain,
    MdOutlineTram,
    MdOutlineTransferWithinAStation,
    MdOutlineTransitEnterexit,
    MdOutlineTripOrigin,
    MdOutlineTurnLeft,
    MdOutlineTurnRight,
    MdOutlineTurnSharpLeft,
    MdOutlineTurnSharpRight,
    MdOutlineTurnSlightLeft,
    MdOutlineTurnSlightRight,
    MdOutlineTwoWheeler,
    MdOutlineUTurnLeft,
    MdOutlineUTurnRight,
    MdOutlineVolunteerActivism,
    MdOutlineWarehouse,
    MdOutlineWineBar,
    MdOutlineWrongLocation,
    MdOutlineZoomInMap,
    MdOutlineZoomOutMap,
    MdOutlineAddHomeWork,
    MdOutlineAppSettingsAlt,
    MdOutlineAppsOutage,
    MdOutlineApps,
    MdOutlineArrowBackIosNew,
    MdOutlineArrowBackIos,
    MdOutlineArrowBack,
    MdOutlineArrowDownward,
    MdOutlineArrowDropDownCircle,
    MdOutlineArrowDropDown,
    MdOutlineArrowDropUp,
    MdOutlineArrowForwardIos,
    MdOutlineArrowForward,
    MdOutlineArrowLeft,
    MdOutlineArrowRight,
    MdOutlineArrowUpward,
    MdOutlineAssistantDirection,
    MdOutlineCampaign,
    MdOutlineCancel,
    MdOutlineCheck,
    MdOutlineChevronLeft,
    MdOutlineChevronRight,
    MdOutlineClose,
    MdOutlineDoubleArrow,
    MdOutlineEast,
    MdOutlineExpandCircleDown,
    MdOutlineExpandLess,
    MdOutlineExpandMore,
    MdOutlineFirstPage,
    MdOutlineFullscreenExit,
    MdOutlineFullscreen,
    MdOutlineHomeWork,
    MdOutlineLastPage,
    MdOutlineLegendToggle,
    MdOutlineMapsHomeWork,
    MdOutlineMenuOpen,
    MdOutlineMenu,
    MdOutlineMoreHoriz,
    MdOutlineMoreVert,
    MdOutlineNorthEast,
    MdOutlineNorthWest,
    MdOutlineNorth,
    MdOutlineOfflineShare,
    MdOutlinePayments,
    MdOutlinePivotTableChart,
    MdOutlineRefresh,
    MdOutlineSouthEast,
    MdOutlineSouthWest,
    MdOutlineSouth,
    MdOutlineSubdirectoryArrowLeft,
    MdOutlineSubdirectoryArrowRight,
    MdOutlineSwitchLeft,
    MdOutlineSwitchRight,
    MdOutlineUnfoldLess,
    MdOutlineUnfoldMore,
    MdOutlineWaterfallChart,
    MdOutlineWest,
    MdOutlineAccountTree,
    MdOutlineAdb,
    MdOutlineAirlineSeatFlatAngled,
    MdOutlineAirlineSeatFlat,
    MdOutlineAirlineSeatIndividualSuite,
    MdOutlineAirlineSeatLegroomExtra,
    MdOutlineAirlineSeatLegroomNormal,
    MdOutlineAirlineSeatLegroomReduced,
    MdOutlineAirlineSeatReclineExtra,
    MdOutlineAirlineSeatReclineNormal,
    MdOutlineBluetoothAudio,
    MdOutlineConfirmationNumber,
    MdOutlineDirectionsOff,
    MdOutlineDiscFull,
    MdOutlineDoDisturbAlt,
    MdOutlineDoDisturbOff,
    MdOutlineDoDisturbOn,
    MdOutlineDoDisturb,
    MdOutlineDoNotDisturbAlt,
    MdOutlineDoNotDisturbOff,
    MdOutlineDoNotDisturbOn,
    MdOutlineDoNotDisturb,
    MdOutlineDriveEta,
    MdOutlineEnhancedEncryption,
    MdOutlineEventAvailable,
    MdOutlineEventBusy,
    MdOutlineEventNote,
    MdOutlineFolderSpecial,
    MdOutlineImagesearchRoller,
    MdOutlineLiveTv,
    MdOutlineMms,
    MdOutlineMore,
    MdOutlineNetworkCheck,
    MdOutlineNetworkLocked,
    MdOutlineNoEncryptionGmailerrorred,
    MdOutlineNoEncryption,
    MdOutlineOndemandVideo,
    MdOutlinePersonalVideo,
    MdOutlinePhoneBluetoothSpeaker,
    MdOutlinePhoneCallback,
    MdOutlinePhoneForwarded,
    MdOutlinePhoneInTalk,
    MdOutlinePhoneLocked,
    MdOutlinePhoneMissed,
} from "react-icons/md"

export function nameToReactIcon_md_3(iconName: string): IconType | undefined {

    switch(iconName) {
        case "md:MdOutlineBattery5Bar":
            return MdOutlineBattery5Bar;
        case "md:MdOutlineBattery6Bar":
            return MdOutlineBattery6Bar;
        case "md:MdOutlineBatteryAlert":
            return MdOutlineBatteryAlert;
        case "md:MdOutlineBatteryChargingFull":
            return MdOutlineBatteryChargingFull;
        case "md:MdOutlineBatteryFull":
            return MdOutlineBatteryFull;
        case "md:MdOutlineBatterySaver":
            return MdOutlineBatterySaver;
        case "md:MdOutlineBatteryStd":
            return MdOutlineBatteryStd;
        case "md:MdOutlineBatteryUnknown":
            return MdOutlineBatteryUnknown;
        case "md:MdOutlineBloodtype":
            return MdOutlineBloodtype;
        case "md:MdOutlineBluetoothConnected":
            return MdOutlineBluetoothConnected;
        case "md:MdOutlineBluetoothDisabled":
            return MdOutlineBluetoothDisabled;
        case "md:MdOutlineBluetoothDrive":
            return MdOutlineBluetoothDrive;
        case "md:MdOutlineBluetoothSearching":
            return MdOutlineBluetoothSearching;
        case "md:MdOutlineBluetooth":
            return MdOutlineBluetooth;
        case "md:MdOutlineBrightnessAuto":
            return MdOutlineBrightnessAuto;
        case "md:MdOutlineBrightnessHigh":
            return MdOutlineBrightnessHigh;
        case "md:MdOutlineBrightnessLow":
            return MdOutlineBrightnessLow;
        case "md:MdOutlineBrightnessMedium":
            return MdOutlineBrightnessMedium;
        case "md:MdOutlineCable":
            return MdOutlineCable;
        case "md:MdOutlineCameraswitch":
            return MdOutlineCameraswitch;
        case "md:MdOutlineCreditScore":
            return MdOutlineCreditScore;
        case "md:MdOutlineDarkMode":
            return MdOutlineDarkMode;
        case "md:MdOutlineDataSaverOff":
            return MdOutlineDataSaverOff;
        case "md:MdOutlineDataSaverOn":
            return MdOutlineDataSaverOn;
        case "md:MdOutlineDataUsage":
            return MdOutlineDataUsage;
        case "md:MdOutlineDatasetLinked":
            return MdOutlineDatasetLinked;
        case "md:MdOutlineDataset":
            return MdOutlineDataset;
        case "md:MdOutlineDeveloperMode":
            return MdOutlineDeveloperMode;
        case "md:MdOutlineDeviceThermostat":
            return MdOutlineDeviceThermostat;
        case "md:MdOutlineDevicesFold":
            return MdOutlineDevicesFold;
        case "md:MdOutlineDevices":
            return MdOutlineDevices;
        case "md:MdOutlineDiscount":
            return MdOutlineDiscount;
        case "md:MdOutlineDoNotDisturbOnTotalSilence":
            return MdOutlineDoNotDisturbOnTotalSilence;
        case "md:MdOutlineDvr":
            return MdOutlineDvr;
        case "md:MdOutlineEMobiledata":
            return MdOutlineEMobiledata;
        case "md:MdOutlineEdgesensorHigh":
            return MdOutlineEdgesensorHigh;
        case "md:MdOutlineEdgesensorLow":
            return MdOutlineEdgesensorLow;
        case "md:MdOutlineFlashlightOff":
            return MdOutlineFlashlightOff;
        case "md:MdOutlineFlashlightOn":
            return MdOutlineFlashlightOn;
        case "md:MdOutlineFlourescent":
            return MdOutlineFlourescent;
        case "md:MdOutlineFluorescent":
            return MdOutlineFluorescent;
        case "md:MdOutlineFmdBad":
            return MdOutlineFmdBad;
        case "md:MdOutlineFmdGood":
            return MdOutlineFmdGood;
        case "md:MdOutlineGMobiledata":
            return MdOutlineGMobiledata;
        case "md:MdOutlineGppBad":
            return MdOutlineGppBad;
        case "md:MdOutlineGppGood":
            return MdOutlineGppGood;
        case "md:MdOutlineGppMaybe":
            return MdOutlineGppMaybe;
        case "md:MdOutlineGpsFixed":
            return MdOutlineGpsFixed;
        case "md:MdOutlineGpsNotFixed":
            return MdOutlineGpsNotFixed;
        case "md:MdOutlineGpsOff":
            return MdOutlineGpsOff;
        case "md:MdOutlineGraphicEq":
            return MdOutlineGraphicEq;
        case "md:MdOutlineGrid3X3":
            return MdOutlineGrid3X3;
        case "md:MdOutlineGrid4X4":
            return MdOutlineGrid4X4;
        case "md:MdOutlineGridGoldenratio":
            return MdOutlineGridGoldenratio;
        case "md:MdOutlineHMobiledata":
            return MdOutlineHMobiledata;
        case "md:MdOutlineHPlusMobiledata":
            return MdOutlineHPlusMobiledata;
        case "md:MdOutlineHdrAutoSelect":
            return MdOutlineHdrAutoSelect;
        case "md:MdOutlineHdrAuto":
            return MdOutlineHdrAuto;
        case "md:MdOutlineHdrOffSelect":
            return MdOutlineHdrOffSelect;
        case "md:MdOutlineHdrOnSelect":
            return MdOutlineHdrOnSelect;
        case "md:MdOutlineLan":
            return MdOutlineLan;
        case "md:MdOutlineLensBlur":
            return MdOutlineLensBlur;
        case "md:MdOutlineLightMode":
            return MdOutlineLightMode;
        case "md:MdOutlineLocationDisabled":
            return MdOutlineLocationDisabled;
        case "md:MdOutlineLocationSearching":
            return MdOutlineLocationSearching;
        case "md:MdOutlineLteMobiledata":
            return MdOutlineLteMobiledata;
        case "md:MdOutlineLtePlusMobiledata":
            return MdOutlineLtePlusMobiledata;
        case "md:MdOutlineMacroOff":
            return MdOutlineMacroOff;
        case "md:MdOutlineMediaBluetoothOff":
            return MdOutlineMediaBluetoothOff;
        case "md:MdOutlineMediaBluetoothOn":
            return MdOutlineMediaBluetoothOn;
        case "md:MdOutlineMedicationLiquid":
            return MdOutlineMedicationLiquid;
        case "md:MdOutlineMedication":
            return MdOutlineMedication;
        case "md:MdOutlineMobileFriendly":
            return MdOutlineMobileFriendly;
        case "md:MdOutlineMobileOff":
            return MdOutlineMobileOff;
        case "md:MdOutlineMobiledataOff":
            return MdOutlineMobiledataOff;
        case "md:MdOutlineModeNight":
            return MdOutlineModeNight;
        case "md:MdOutlineModeStandby":
            return MdOutlineModeStandby;
        case "md:MdOutlineMonitorHeart":
            return MdOutlineMonitorHeart;
        case "md:MdOutlineMonitorWeight":
            return MdOutlineMonitorWeight;
        case "md:MdOutlineNearbyError":
            return MdOutlineNearbyError;
        case "md:MdOutlineNearbyOff":
            return MdOutlineNearbyOff;
        case "md:MdOutlineNetworkCell":
            return MdOutlineNetworkCell;
        case "md:MdOutlineNetworkWifi1Bar":
            return MdOutlineNetworkWifi1Bar;
        case "md:MdOutlineNetworkWifi2Bar":
            return MdOutlineNetworkWifi2Bar;
        case "md:MdOutlineNetworkWifi3Bar":
            return MdOutlineNetworkWifi3Bar;
        case "md:MdOutlineNetworkWifi":
            return MdOutlineNetworkWifi;
        case "md:MdOutlineNfc":
            return MdOutlineNfc;
        case "md:MdOutlineNightlight":
            return MdOutlineNightlight;
        case "md:MdOutlineNoteAlt":
            return MdOutlineNoteAlt;
        case "md:MdOutlinePassword":
            return MdOutlinePassword;
        case "md:MdOutlinePattern":
            return MdOutlinePattern;
        case "md:MdOutlinePhishing":
            return MdOutlinePhishing;
        case "md:MdOutlinePin":
            return MdOutlinePin;
        case "md:MdOutlinePlayLesson":
            return MdOutlinePlayLesson;
        case "md:MdOutlinePriceChange":
            return MdOutlinePriceChange;
        case "md:MdOutlinePriceCheck":
            return MdOutlinePriceCheck;
        case "md:MdOutlinePunchClock":
            return MdOutlinePunchClock;
        case "md:MdOutlineQuiz":
            return MdOutlineQuiz;
        case "md:MdOutlineRMobiledata":
            return MdOutlineRMobiledata;
        case "md:MdOutlineRadar":
            return MdOutlineRadar;
        case "md:MdOutlineRememberMe":
            return MdOutlineRememberMe;
        case "md:MdOutlineResetTv":
            return MdOutlineResetTv;
        case "md:MdOutlineRestartAlt":
            return MdOutlineRestartAlt;
        case "md:MdOutlineReviews":
            return MdOutlineReviews;
        case "md:MdOutlineRsvp":
            return MdOutlineRsvp;
        case "md:MdOutlineScreenLockLandscape":
            return MdOutlineScreenLockLandscape;
        case "md:MdOutlineScreenLockPortrait":
            return MdOutlineScreenLockPortrait;
        case "md:MdOutlineScreenLockRotation":
            return MdOutlineScreenLockRotation;
        case "md:MdOutlineScreenRotation":
            return MdOutlineScreenRotation;
        case "md:MdOutlineScreenSearchDesktop":
            return MdOutlineScreenSearchDesktop;
        case "md:MdOutlineScreenshotMonitor":
            return MdOutlineScreenshotMonitor;
        case "md:MdOutlineScreenshot":
            return MdOutlineScreenshot;
        case "md:MdOutlineSdStorage":
            return MdOutlineSdStorage;
        case "md:MdOutlineSecurityUpdateGood":
            return MdOutlineSecurityUpdateGood;
        case "md:MdOutlineSecurityUpdateWarning":
            return MdOutlineSecurityUpdateWarning;
        case "md:MdOutlineSecurityUpdate":
            return MdOutlineSecurityUpdate;
        case "md:MdOutlineSell":
            return MdOutlineSell;
        case "md:MdOutlineSendToMobile":
            return MdOutlineSendToMobile;
        case "md:MdOutlineSettingsSuggest":
            return MdOutlineSettingsSuggest;
        case "md:MdOutlineSettingsSystemDaydream":
            return MdOutlineSettingsSystemDaydream;
        case "md:MdOutlineShareLocation":
            return MdOutlineShareLocation;
        case "md:MdOutlineShortcut":
            return MdOutlineShortcut;
        case "md:MdOutlineSignalCellular0Bar":
            return MdOutlineSignalCellular0Bar;
        case "md:MdOutlineSignalCellular4Bar":
            return MdOutlineSignalCellular4Bar;
        case "md:MdOutlineSignalCellularAlt1Bar":
            return MdOutlineSignalCellularAlt1Bar;
        case "md:MdOutlineSignalCellularAlt2Bar":
            return MdOutlineSignalCellularAlt2Bar;
        case "md:MdOutlineSignalCellularAlt":
            return MdOutlineSignalCellularAlt;
        case "md:MdOutlineSignalCellularConnectedNoInternet0Bar":
            return MdOutlineSignalCellularConnectedNoInternet0Bar;
        case "md:MdOutlineSignalCellularConnectedNoInternet4Bar":
            return MdOutlineSignalCellularConnectedNoInternet4Bar;
        case "md:MdOutlineSignalCellularNoSim":
            return MdOutlineSignalCellularNoSim;
        case "md:MdOutlineSignalCellularNodata":
            return MdOutlineSignalCellularNodata;
        case "md:MdOutlineSignalCellularNull":
            return MdOutlineSignalCellularNull;
        case "md:MdOutlineSignalCellularOff":
            return MdOutlineSignalCellularOff;
        case "md:MdOutlineSignalWifi0Bar":
            return MdOutlineSignalWifi0Bar;
        case "md:MdOutlineSignalWifi4BarLock":
            return MdOutlineSignalWifi4BarLock;
        case "md:MdOutlineSignalWifi4Bar":
            return MdOutlineSignalWifi4Bar;
        case "md:MdOutlineSignalWifiBad":
            return MdOutlineSignalWifiBad;
        case "md:MdOutlineSignalWifiConnectedNoInternet4":
            return MdOutlineSignalWifiConnectedNoInternet4;
        case "md:MdOutlineSignalWifiOff":
            return MdOutlineSignalWifiOff;
        case "md:MdOutlineSignalWifiStatusbar4Bar":
            return MdOutlineSignalWifiStatusbar4Bar;
        case "md:MdOutlineSignalWifiStatusbarConnectedNoInternet4":
            return MdOutlineSignalWifiStatusbarConnectedNoInternet4;
        case "md:MdOutlineSignalWifiStatusbarNull":
            return MdOutlineSignalWifiStatusbarNull;
        case "md:MdOutlineSimCardDownload":
            return MdOutlineSimCardDownload;
        case "md:MdOutlineSplitscreen":
            return MdOutlineSplitscreen;
        case "md:MdOutlineSportsScore":
            return MdOutlineSportsScore;
        case "md:MdOutlineSsidChart":
            return MdOutlineSsidChart;
        case "md:MdOutlineStorage":
            return MdOutlineStorage;
        case "md:MdOutlineStorm":
            return MdOutlineStorm;
        case "md:MdOutlineSummarize":
            return MdOutlineSummarize;
        case "md:MdOutlineSystemSecurityUpdateGood":
            return MdOutlineSystemSecurityUpdateGood;
        case "md:MdOutlineSystemSecurityUpdateWarning":
            return MdOutlineSystemSecurityUpdateWarning;
        case "md:MdOutlineSystemSecurityUpdate":
            return MdOutlineSystemSecurityUpdate;
        case "md:MdOutlineTask":
            return MdOutlineTask;
        case "md:MdOutlineThermostat":
            return MdOutlineThermostat;
        case "md:MdOutlineTimer10Select":
            return MdOutlineTimer10Select;
        case "md:MdOutlineTimer3Select":
            return MdOutlineTimer3Select;
        case "md:MdOutlineTungsten":
            return MdOutlineTungsten;
        case "md:MdOutlineUsbOff":
            return MdOutlineUsbOff;
        case "md:MdOutlineUsb":
            return MdOutlineUsb;
        case "md:MdOutlineWallpaper":
            return MdOutlineWallpaper;
        case "md:MdOutlineWater":
            return MdOutlineWater;
        case "md:MdOutlineWidgets":
            return MdOutlineWidgets;
        case "md:MdOutlineWifi1Bar":
            return MdOutlineWifi1Bar;
        case "md:MdOutlineWifi2Bar":
            return MdOutlineWifi2Bar;
        case "md:MdOutlineWifiCalling3":
            return MdOutlineWifiCalling3;
        case "md:MdOutlineWifiChannel":
            return MdOutlineWifiChannel;
        case "md:MdOutlineWifiFind":
            return MdOutlineWifiFind;
        case "md:MdOutlineWifiLock":
            return MdOutlineWifiLock;
        case "md:MdOutlineWifiPassword":
            return MdOutlineWifiPassword;
        case "md:MdOutlineWifiTetheringErrorRounded":
            return MdOutlineWifiTetheringErrorRounded;
        case "md:MdOutlineWifiTetheringError":
            return MdOutlineWifiTetheringError;
        case "md:MdOutlineWifiTetheringOff":
            return MdOutlineWifiTetheringOff;
        case "md:MdOutlineWifiTethering":
            return MdOutlineWifiTethering;
        case "md:MdOutlineAddChart":
            return MdOutlineAddChart;
        case "md:MdOutlineAddComment":
            return MdOutlineAddComment;
        case "md:MdOutlineAlignHorizontalCenter":
            return MdOutlineAlignHorizontalCenter;
        case "md:MdOutlineAlignHorizontalLeft":
            return MdOutlineAlignHorizontalLeft;
        case "md:MdOutlineAlignHorizontalRight":
            return MdOutlineAlignHorizontalRight;
        case "md:MdOutlineAlignVerticalBottom":
            return MdOutlineAlignVerticalBottom;
        case "md:MdOutlineAlignVerticalCenter":
            return MdOutlineAlignVerticalCenter;
        case "md:MdOutlineAlignVerticalTop":
            return MdOutlineAlignVerticalTop;
        case "md:MdOutlineAreaChart":
            return MdOutlineAreaChart;
        case "md:MdOutlineAttachFile":
            return MdOutlineAttachFile;
        case "md:MdOutlineAttachMoney":
            return MdOutlineAttachMoney;
        case "md:MdOutlineAutoGraph":
            return MdOutlineAutoGraph;
        case "md:MdOutlineBarChart":
            return MdOutlineBarChart;
        case "md:MdOutlineBorderAll":
            return MdOutlineBorderAll;
        case "md:MdOutlineBorderBottom":
            return MdOutlineBorderBottom;
        case "md:MdOutlineBorderClear":
            return MdOutlineBorderClear;
        case "md:MdOutlineBorderColor":
            return MdOutlineBorderColor;
        case "md:MdOutlineBorderHorizontal":
            return MdOutlineBorderHorizontal;
        case "md:MdOutlineBorderInner":
            return MdOutlineBorderInner;
        case "md:MdOutlineBorderLeft":
            return MdOutlineBorderLeft;
        case "md:MdOutlineBorderOuter":
            return MdOutlineBorderOuter;
        case "md:MdOutlineBorderRight":
            return MdOutlineBorderRight;
        case "md:MdOutlineBorderStyle":
            return MdOutlineBorderStyle;
        case "md:MdOutlineBorderTop":
            return MdOutlineBorderTop;
        case "md:MdOutlineBorderVertical":
            return MdOutlineBorderVertical;
        case "md:MdOutlineBubbleChart":
            return MdOutlineBubbleChart;
        case "md:MdOutlineCandlestickChart":
            return MdOutlineCandlestickChart;
        case "md:MdOutlineChecklistRtl":
            return MdOutlineChecklistRtl;
        case "md:MdOutlineChecklist":
            return MdOutlineChecklist;
        case "md:MdOutlineDataArray":
            return MdOutlineDataArray;
        case "md:MdOutlineDataObject":
            return MdOutlineDataObject;
        case "md:MdOutlineDragHandle":
            return MdOutlineDragHandle;
        case "md:MdOutlineDraw":
            return MdOutlineDraw;
        case "md:MdOutlineEditNote":
            return MdOutlineEditNote;
        case "md:MdOutlineFormatAlignCenter":
            return MdOutlineFormatAlignCenter;
        case "md:MdOutlineFormatAlignJustify":
            return MdOutlineFormatAlignJustify;
        case "md:MdOutlineFormatAlignLeft":
            return MdOutlineFormatAlignLeft;
        case "md:MdOutlineFormatAlignRight":
            return MdOutlineFormatAlignRight;
        case "md:MdOutlineFormatBold":
            return MdOutlineFormatBold;
        case "md:MdOutlineFormatClear":
            return MdOutlineFormatClear;
        case "md:MdOutlineFormatColorFill":
            return MdOutlineFormatColorFill;
        case "md:MdOutlineFormatColorReset":
            return MdOutlineFormatColorReset;
        case "md:MdOutlineFormatColorText":
            return MdOutlineFormatColorText;
        case "md:MdOutlineFormatIndentDecrease":
            return MdOutlineFormatIndentDecrease;
        case "md:MdOutlineFormatIndentIncrease":
            return MdOutlineFormatIndentIncrease;
        case "md:MdOutlineFormatItalic":
            return MdOutlineFormatItalic;
        case "md:MdOutlineFormatLineSpacing":
            return MdOutlineFormatLineSpacing;
        case "md:MdOutlineFormatListBulleted":
            return MdOutlineFormatListBulleted;
        case "md:MdOutlineFormatListNumberedRtl":
            return MdOutlineFormatListNumberedRtl;
        case "md:MdOutlineFormatListNumbered":
            return MdOutlineFormatListNumbered;
        case "md:MdOutlineFormatPaint":
            return MdOutlineFormatPaint;
        case "md:MdOutlineFormatQuote":
            return MdOutlineFormatQuote;
        case "md:MdOutlineFormatShapes":
            return MdOutlineFormatShapes;
        case "md:MdOutlineFormatSize":
            return MdOutlineFormatSize;
        case "md:MdOutlineFormatStrikethrough":
            return MdOutlineFormatStrikethrough;
        case "md:MdOutlineFormatTextdirectionLToR":
            return MdOutlineFormatTextdirectionLToR;
        case "md:MdOutlineFormatTextdirectionRToL":
            return MdOutlineFormatTextdirectionRToL;
        case "md:MdOutlineFormatUnderlined":
            return MdOutlineFormatUnderlined;
        case "md:MdOutlineFunctions":
            return MdOutlineFunctions;
        case "md:MdOutlineHeight":
            return MdOutlineHeight;
        case "md:MdOutlineHexagon":
            return MdOutlineHexagon;
        case "md:MdOutlineHighlight":
            return MdOutlineHighlight;
        case "md:MdOutlineHorizontalDistribute":
            return MdOutlineHorizontalDistribute;
        case "md:MdOutlineHorizontalRule":
            return MdOutlineHorizontalRule;
        case "md:MdOutlineInsertChartOutlined":
            return MdOutlineInsertChartOutlined;
        case "md:MdOutlineInsertChart":
            return MdOutlineInsertChart;
        case "md:MdOutlineInsertComment":
            return MdOutlineInsertComment;
        case "md:MdOutlineInsertDriveFile":
            return MdOutlineInsertDriveFile;
        case "md:MdOutlineInsertEmoticon":
            return MdOutlineInsertEmoticon;
        case "md:MdOutlineInsertInvitation":
            return MdOutlineInsertInvitation;
        case "md:MdOutlineInsertLink":
            return MdOutlineInsertLink;
        case "md:MdOutlineInsertPageBreak":
            return MdOutlineInsertPageBreak;
        case "md:MdOutlineInsertPhoto":
            return MdOutlineInsertPhoto;
        case "md:MdOutlineLineAxis":
            return MdOutlineLineAxis;
        case "md:MdOutlineLinearScale":
            return MdOutlineLinearScale;
        case "md:MdOutlineMargin":
            return MdOutlineMargin;
        case "md:MdOutlineMergeType":
            return MdOutlineMergeType;
        case "md:MdOutlineModeComment":
            return MdOutlineModeComment;
        case "md:MdOutlineModeEditOutline":
            return MdOutlineModeEditOutline;
        case "md:MdOutlineModeEdit":
            return MdOutlineModeEdit;
        case "md:MdOutlineMode":
            return MdOutlineMode;
        case "md:MdOutlineMonetizationOn":
            return MdOutlineMonetizationOn;
        case "md:MdOutlineMoneyOffCsred":
            return MdOutlineMoneyOffCsred;
        case "md:MdOutlineMoneyOff":
            return MdOutlineMoneyOff;
        case "md:MdOutlineMoveDown":
            return MdOutlineMoveDown;
        case "md:MdOutlineMoveUp":
            return MdOutlineMoveUp;
        case "md:MdOutlineMultilineChart":
            return MdOutlineMultilineChart;
        case "md:MdOutlineNotes":
            return MdOutlineNotes;
        case "md:MdOutlineNumbers":
            return MdOutlineNumbers;
        case "md:MdOutlinePadding":
            return MdOutlinePadding;
        case "md:MdOutlinePentagon":
            return MdOutlinePentagon;
        case "md:MdOutlinePieChartOutline":
            return MdOutlinePieChartOutline;
        case "md:MdOutlinePieChart":
            return MdOutlinePieChart;
        case "md:MdOutlinePolyline":
            return MdOutlinePolyline;
        case "md:MdOutlinePostAdd":
            return MdOutlinePostAdd;
        case "md:MdOutlinePublish":
            return MdOutlinePublish;
        case "md:MdOutlineQueryStats":
            return MdOutlineQueryStats;
        case "md:MdOutlineRectangle":
            return MdOutlineRectangle;
        case "md:MdOutlineScatterPlot":
            return MdOutlineScatterPlot;
        case "md:MdOutlineSchema":
            return MdOutlineSchema;
        case "md:MdOutlineScore":
            return MdOutlineScore;
        case "md:MdOutlineShapeLine":
            return MdOutlineShapeLine;
        case "md:MdOutlineShortText":
            return MdOutlineShortText;
        case "md:MdOutlineShowChart":
            return MdOutlineShowChart;
        case "md:MdOutlineSpaceBar":
            return MdOutlineSpaceBar;
        case "md:MdOutlineSquare":
            return MdOutlineSquare;
        case "md:MdOutlineStackedLineChart":
            return MdOutlineStackedLineChart;
        case "md:MdOutlineStrikethroughS":
            return MdOutlineStrikethroughS;
        case "md:MdOutlineSubscript":
            return MdOutlineSubscript;
        case "md:MdOutlineSuperscript":
            return MdOutlineSuperscript;
        case "md:MdOutlineTableChart":
            return MdOutlineTableChart;
        case "md:MdOutlineTableRows":
            return MdOutlineTableRows;
        case "md:MdOutlineTextDecrease":
            return MdOutlineTextDecrease;
        case "md:MdOutlineTextFields":
            return MdOutlineTextFields;
        case "md:MdOutlineTextIncrease":
            return MdOutlineTextIncrease;
        case "md:MdOutlineTitle":
            return MdOutlineTitle;
        case "md:MdOutlineTypeSpecimen":
            return MdOutlineTypeSpecimen;
        case "md:MdOutlineVerticalAlignBottom":
            return MdOutlineVerticalAlignBottom;
        case "md:MdOutlineVerticalAlignCenter":
            return MdOutlineVerticalAlignCenter;
        case "md:MdOutlineVerticalAlignTop":
            return MdOutlineVerticalAlignTop;
        case "md:MdOutlineVerticalDistribute":
            return MdOutlineVerticalDistribute;
        case "md:MdOutlineWrapText":
            return MdOutlineWrapText;
        case "md:MdOutlineApproval":
            return MdOutlineApproval;
        case "md:MdOutlineAttachEmail":
            return MdOutlineAttachEmail;
        case "md:MdOutlineAttachment":
            return MdOutlineAttachment;
        case "md:MdOutlineCloudCircle":
            return MdOutlineCloudCircle;
        case "md:MdOutlineCloudDone":
            return MdOutlineCloudDone;
        case "md:MdOutlineCloudDownload":
            return MdOutlineCloudDownload;
        case "md:MdOutlineCloudOff":
            return MdOutlineCloudOff;
        case "md:MdOutlineCloudQueue":
            return MdOutlineCloudQueue;
        case "md:MdOutlineCloudSync":
            return MdOutlineCloudSync;
        case "md:MdOutlineCloudUpload":
            return MdOutlineCloudUpload;
        case "md:MdOutlineCloud":
            return MdOutlineCloud;
        case "md:MdOutlineCreateNewFolder":
            return MdOutlineCreateNewFolder;
        case "md:MdOutlineDifference":
            return MdOutlineDifference;
        case "md:MdOutlineDownloadDone":
            return MdOutlineDownloadDone;
        case "md:MdOutlineDownloadForOffline":
            return MdOutlineDownloadForOffline;
        case "md:MdOutlineDownload":
            return MdOutlineDownload;
        case "md:MdOutlineDownloading":
            return MdOutlineDownloading;
        case "md:MdOutlineDriveFileMoveRtl":
            return MdOutlineDriveFileMoveRtl;
        case "md:MdOutlineDriveFileMove":
            return MdOutlineDriveFileMove;
        case "md:MdOutlineDriveFileRenameOutline":
            return MdOutlineDriveFileRenameOutline;
        case "md:MdOutlineDriveFolderUpload":
            return MdOutlineDriveFolderUpload;
        case "md:MdOutlineFileDownloadDone":
            return MdOutlineFileDownloadDone;
        case "md:MdOutlineFileDownloadOff":
            return MdOutlineFileDownloadOff;
        case "md:MdOutlineFileDownload":
            return MdOutlineFileDownload;
        case "md:MdOutlineFileOpen":
            return MdOutlineFileOpen;
        case "md:MdOutlineFileUpload":
            return MdOutlineFileUpload;
        case "md:MdOutlineFolderCopy":
            return MdOutlineFolderCopy;
        case "md:MdOutlineFolderDelete":
            return MdOutlineFolderDelete;
        case "md:MdOutlineFolderOff":
            return MdOutlineFolderOff;
        case "md:MdOutlineFolderOpen":
            return MdOutlineFolderOpen;
        case "md:MdOutlineFolderShared":
            return MdOutlineFolderShared;
        case "md:MdOutlineFolderZip":
            return MdOutlineFolderZip;
        case "md:MdOutlineFolder":
            return MdOutlineFolder;
        case "md:MdOutlineFormatOverline":
            return MdOutlineFormatOverline;
        case "md:MdOutlineGridView":
            return MdOutlineGridView;
        case "md:MdOutlineNewspaper":
            return MdOutlineNewspaper;
        case "md:MdOutlineRequestQuote":
            return MdOutlineRequestQuote;
        case "md:MdOutlineRuleFolder":
            return MdOutlineRuleFolder;
        case "md:MdOutlineSnippetFolder":
            return MdOutlineSnippetFolder;
        case "md:MdOutlineTextSnippet":
            return MdOutlineTextSnippet;
        case "md:MdOutlineTopic":
            return MdOutlineTopic;
        case "md:MdOutlineUploadFile":
            return MdOutlineUploadFile;
        case "md:MdOutlineUpload":
            return MdOutlineUpload;
        case "md:MdOutlineWorkspaces":
            return MdOutlineWorkspaces;
        case "md:MdOutlineAdfScanner":
            return MdOutlineAdfScanner;
        case "md:MdOutlineBrowserNotSupported":
            return MdOutlineBrowserNotSupported;
        case "md:MdOutlineBrowserUpdated":
            return MdOutlineBrowserUpdated;
        case "md:MdOutlineCastConnected":
            return MdOutlineCastConnected;
        case "md:MdOutlineCastForEducation":
            return MdOutlineCastForEducation;
        case "md:MdOutlineCast":
            return MdOutlineCast;
        case "md:MdOutlineComputer":
            return MdOutlineComputer;
        case "md:MdOutlineConnectedTv":
            return MdOutlineConnectedTv;
        case "md:MdOutlineDesktopMac":
            return MdOutlineDesktopMac;
        case "md:MdOutlineDesktopWindows":
            return MdOutlineDesktopWindows;
        case "md:MdOutlineDeveloperBoardOff":
            return MdOutlineDeveloperBoardOff;
        case "md:MdOutlineDeveloperBoard":
            return MdOutlineDeveloperBoard;
        case "md:MdOutlineDeviceHub":
            return MdOutlineDeviceHub;
        case "md:MdOutlineDeviceUnknown":
            return MdOutlineDeviceUnknown;
        case "md:MdOutlineDevicesOther":
            return MdOutlineDevicesOther;
        case "md:MdOutlineDock":
            return MdOutlineDock;
        case "md:MdOutlineEarbudsBattery":
            return MdOutlineEarbudsBattery;
        case "md:MdOutlineEarbuds":
            return MdOutlineEarbuds;
        case "md:MdOutlineGamepad":
            return MdOutlineGamepad;
        case "md:MdOutlineHeadphonesBattery":
            return MdOutlineHeadphonesBattery;
        case "md:MdOutlineHeadphones":
            return MdOutlineHeadphones;
        case "md:MdOutlineHeadsetMic":
            return MdOutlineHeadsetMic;
        case "md:MdOutlineHeadsetOff":
            return MdOutlineHeadsetOff;
        case "md:MdOutlineHeadset":
            return MdOutlineHeadset;
        case "md:MdOutlineHomeMax":
            return MdOutlineHomeMax;
        case "md:MdOutlineHomeMini":
            return MdOutlineHomeMini;
        case "md:MdOutlineKeyboardAlt":
            return MdOutlineKeyboardAlt;
        case "md:MdOutlineKeyboardArrowDown":
            return MdOutlineKeyboardArrowDown;
        case "md:MdOutlineKeyboardArrowLeft":
            return MdOutlineKeyboardArrowLeft;
        case "md:MdOutlineKeyboardArrowRight":
            return MdOutlineKeyboardArrowRight;
        case "md:MdOutlineKeyboardArrowUp":
            return MdOutlineKeyboardArrowUp;
        case "md:MdOutlineKeyboardBackspace":
            return MdOutlineKeyboardBackspace;
        case "md:MdOutlineKeyboardCapslock":
            return MdOutlineKeyboardCapslock;
        case "md:MdOutlineKeyboardCommandKey":
            return MdOutlineKeyboardCommandKey;
        case "md:MdOutlineKeyboardControlKey":
            return MdOutlineKeyboardControlKey;
        case "md:MdOutlineKeyboardDoubleArrowDown":
            return MdOutlineKeyboardDoubleArrowDown;
        case "md:MdOutlineKeyboardDoubleArrowLeft":
            return MdOutlineKeyboardDoubleArrowLeft;
        case "md:MdOutlineKeyboardDoubleArrowRight":
            return MdOutlineKeyboardDoubleArrowRight;
        case "md:MdOutlineKeyboardDoubleArrowUp":
            return MdOutlineKeyboardDoubleArrowUp;
        case "md:MdOutlineKeyboardHide":
            return MdOutlineKeyboardHide;
        case "md:MdOutlineKeyboardOptionKey":
            return MdOutlineKeyboardOptionKey;
        case "md:MdOutlineKeyboardReturn":
            return MdOutlineKeyboardReturn;
        case "md:MdOutlineKeyboardTab":
            return MdOutlineKeyboardTab;
        case "md:MdOutlineKeyboardVoice":
            return MdOutlineKeyboardVoice;
        case "md:MdOutlineKeyboard":
            return MdOutlineKeyboard;
        case "md:MdOutlineLaptopChromebook":
            return MdOutlineLaptopChromebook;
        case "md:MdOutlineLaptopMac":
            return MdOutlineLaptopMac;
        case "md:MdOutlineLaptopWindows":
            return MdOutlineLaptopWindows;
        case "md:MdOutlineLaptop":
            return MdOutlineLaptop;
        case "md:MdOutlineMemory":
            return MdOutlineMemory;
        case "md:MdOutlineMonitor":
            return MdOutlineMonitor;
        case "md:MdOutlineMouse":
            return MdOutlineMouse;
        case "md:MdOutlinePhoneAndroid":
            return MdOutlinePhoneAndroid;
        case "md:MdOutlinePhoneIphone":
            return MdOutlinePhoneIphone;
        case "md:MdOutlinePhonelinkOff":
            return MdOutlinePhonelinkOff;
        case "md:MdOutlinePhonelink":
            return MdOutlinePhonelink;
        case "md:MdOutlinePointOfSale":
            return MdOutlinePointOfSale;
        case "md:MdOutlinePowerInput":
            return MdOutlinePowerInput;
        case "md:MdOutlineRouter":
            return MdOutlineRouter;
        case "md:MdOutlineScanner":
            return MdOutlineScanner;
        case "md:MdOutlineSecurity":
            return MdOutlineSecurity;
        case "md:MdOutlineSimCard":
            return MdOutlineSimCard;
        case "md:MdOutlineSmartDisplay":
            return MdOutlineSmartDisplay;
        case "md:MdOutlineSmartScreen":
            return MdOutlineSmartScreen;
        case "md:MdOutlineSmartToy":
            return MdOutlineSmartToy;
        case "md:MdOutlineSmartphone":
            return MdOutlineSmartphone;
        case "md:MdOutlineSpeakerGroup":
            return MdOutlineSpeakerGroup;
        case "md:MdOutlineSpeaker":
            return MdOutlineSpeaker;
        case "md:MdOutlineStart":
            return MdOutlineStart;
        case "md:MdOutlineTabletAndroid":
            return MdOutlineTabletAndroid;
        case "md:MdOutlineTabletMac":
            return MdOutlineTabletMac;
        case "md:MdOutlineTablet":
            return MdOutlineTablet;
        case "md:MdOutlineToys":
            return MdOutlineToys;
        case "md:MdOutlineTv":
            return MdOutlineTv;
        case "md:MdOutlineVideogameAssetOff":
            return MdOutlineVideogameAssetOff;
        case "md:MdOutlineVideogameAsset":
            return MdOutlineVideogameAsset;
        case "md:MdOutlineWatchOff":
            return MdOutlineWatchOff;
        case "md:MdOutlineWatch":
            return MdOutlineWatch;
        case "md:MdOutlineAutoMode":
            return MdOutlineAutoMode;
        case "md:MdOutlineBlindsClosed":
            return MdOutlineBlindsClosed;
        case "md:MdOutlineBlinds":
            return MdOutlineBlinds;
        case "md:MdOutlineBroadcastOnHome":
            return MdOutlineBroadcastOnHome;
        case "md:MdOutlineBroadcastOnPersonal":
            return MdOutlineBroadcastOnPersonal;
        case "md:MdOutlineCurtainsClosed":
            return MdOutlineCurtainsClosed;
        case "md:MdOutlineCurtains":
            return MdOutlineCurtains;
        case "md:MdOutlineElectricBolt":
            return MdOutlineElectricBolt;
        case "md:MdOutlineElectricMeter":
            return MdOutlineElectricMeter;
        case "md:MdOutlineEnergySavingsLeaf":
            return MdOutlineEnergySavingsLeaf;
        case "md:MdOutlineGasMeter":
            return MdOutlineGasMeter;
        case "md:MdOutlineHeatPump":
            return MdOutlineHeatPump;
        case "md:MdOutlineModeFanOff":
            return MdOutlineModeFanOff;
        case "md:MdOutlineNestCamWiredStand":
            return MdOutlineNestCamWiredStand;
        case "md:MdOutlineOilBarrel":
            return MdOutlineOilBarrel;
        case "md:MdOutlinePropaneTank":
            return MdOutlinePropaneTank;
        case "md:MdOutlinePropane":
            return MdOutlinePropane;
        case "md:MdOutlineRollerShadesClosed":
            return MdOutlineRollerShadesClosed;
        case "md:MdOutlineRollerShades":
            return MdOutlineRollerShades;
        case "md:MdOutlineSensorDoor":
            return MdOutlineSensorDoor;
        case "md:MdOutlineSensorOccupied":
            return MdOutlineSensorOccupied;
        case "md:MdOutlineSensorWindow":
            return MdOutlineSensorWindow;
        case "md:MdOutlineShieldMoon":
            return MdOutlineShieldMoon;
        case "md:MdOutlineSolarPower":
            return MdOutlineSolarPower;
        case "md:MdOutlineVerticalShadesClosed":
            return MdOutlineVerticalShadesClosed;
        case "md:MdOutlineVerticalShades":
            return MdOutlineVerticalShades;
        case "md:MdOutlineWindPower":
            return MdOutlineWindPower;
        case "md:MdOutline10Mp":
            return MdOutline10Mp;
        case "md:MdOutline11Mp":
            return MdOutline11Mp;
        case "md:MdOutline12Mp":
            return MdOutline12Mp;
        case "md:MdOutline13Mp":
            return MdOutline13Mp;
        case "md:MdOutline14Mp":
            return MdOutline14Mp;
        case "md:MdOutline15Mp":
            return MdOutline15Mp;
        case "md:MdOutline16Mp":
            return MdOutline16Mp;
        case "md:MdOutline17Mp":
            return MdOutline17Mp;
        case "md:MdOutline18Mp":
            return MdOutline18Mp;
        case "md:MdOutline19Mp":
            return MdOutline19Mp;
        case "md:MdOutline20Mp":
            return MdOutline20Mp;
        case "md:MdOutline21Mp":
            return MdOutline21Mp;
        case "md:MdOutline22Mp":
            return MdOutline22Mp;
        case "md:MdOutline23Mp":
            return MdOutline23Mp;
        case "md:MdOutline24Mp":
            return MdOutline24Mp;
        case "md:MdOutline2Mp":
            return MdOutline2Mp;
        case "md:MdOutline30FpsSelect":
            return MdOutline30FpsSelect;
        case "md:MdOutline3Mp":
            return MdOutline3Mp;
        case "md:MdOutline4Mp":
            return MdOutline4Mp;
        case "md:MdOutline5Mp":
            return MdOutline5Mp;
        case "md:MdOutline60FpsSelect":
            return MdOutline60FpsSelect;
        case "md:MdOutline6Mp":
            return MdOutline6Mp;
        case "md:MdOutline7Mp":
            return MdOutline7Mp;
        case "md:MdOutline8Mp":
            return MdOutline8Mp;
        case "md:MdOutline9Mp":
            return MdOutline9Mp;
        case "md:MdOutlineAddAPhoto":
            return MdOutlineAddAPhoto;
        case "md:MdOutlineAddPhotoAlternate":
            return MdOutlineAddPhotoAlternate;
        case "md:MdOutlineAddToPhotos":
            return MdOutlineAddToPhotos;
        case "md:MdOutlineAdjust":
            return MdOutlineAdjust;
        case "md:MdOutlineAnimation":
            return MdOutlineAnimation;
        case "md:MdOutlineAssistantPhoto":
            return MdOutlineAssistantPhoto;
        case "md:MdOutlineAssistant":
            return MdOutlineAssistant;
        case "md:MdOutlineAudiotrack":
            return MdOutlineAudiotrack;
        case "md:MdOutlineAutoAwesomeMosaic":
            return MdOutlineAutoAwesomeMosaic;
        case "md:MdOutlineAutoAwesomeMotion":
            return MdOutlineAutoAwesomeMotion;
        case "md:MdOutlineAutoAwesome":
            return MdOutlineAutoAwesome;
        case "md:MdOutlineAutoFixHigh":
            return MdOutlineAutoFixHigh;
        case "md:MdOutlineAutoFixNormal":
            return MdOutlineAutoFixNormal;
        case "md:MdOutlineAutoFixOff":
            return MdOutlineAutoFixOff;
        case "md:MdOutlineAutoStories":
            return MdOutlineAutoStories;
        case "md:MdOutlineAutofpsSelect":
            return MdOutlineAutofpsSelect;
        case "md:MdOutlineBedtimeOff":
            return MdOutlineBedtimeOff;
        case "md:MdOutlineBedtime":
            return MdOutlineBedtime;
        case "md:MdOutlineBlurCircular":
            return MdOutlineBlurCircular;
        case "md:MdOutlineBlurLinear":
            return MdOutlineBlurLinear;
        case "md:MdOutlineBlurOff":
            return MdOutlineBlurOff;
        case "md:MdOutlineBlurOn":
            return MdOutlineBlurOn;
        case "md:MdOutlineBrightness1":
            return MdOutlineBrightness1;
        case "md:MdOutlineBrightness2":
            return MdOutlineBrightness2;
        case "md:MdOutlineBrightness3":
            return MdOutlineBrightness3;
        case "md:MdOutlineBrightness4":
            return MdOutlineBrightness4;
        case "md:MdOutlineBrightness5":
            return MdOutlineBrightness5;
        case "md:MdOutlineBrightness6":
            return MdOutlineBrightness6;
        case "md:MdOutlineBrightness7":
            return MdOutlineBrightness7;
        case "md:MdOutlineBrokenImage":
            return MdOutlineBrokenImage;
        case "md:MdOutlineBrush":
            return MdOutlineBrush;
        case "md:MdOutlineBurstMode":
            return MdOutlineBurstMode;
        case "md:MdOutlineCameraAlt":
            return MdOutlineCameraAlt;
        case "md:MdOutlineCameraFront":
            return MdOutlineCameraFront;
        case "md:MdOutlineCameraRear":
            return MdOutlineCameraRear;
        case "md:MdOutlineCameraRoll":
            return MdOutlineCameraRoll;
        case "md:MdOutlineCamera":
            return MdOutlineCamera;
        case "md:MdOutlineCases":
            return MdOutlineCases;
        case "md:MdOutlineCenterFocusStrong":
            return MdOutlineCenterFocusStrong;
        case "md:MdOutlineCenterFocusWeak":
            return MdOutlineCenterFocusWeak;
        case "md:MdOutlineCircle":
            return MdOutlineCircle;
        case "md:MdOutlineCollectionsBookmark":
            return MdOutlineCollectionsBookmark;
        case "md:MdOutlineCollections":
            return MdOutlineCollections;
        case "md:MdOutlineColorLens":
            return MdOutlineColorLens;
        case "md:MdOutlineColorize":
            return MdOutlineColorize;
        case "md:MdOutlineCompare":
            return MdOutlineCompare;
        case "md:MdOutlineContrast":
            return MdOutlineContrast;
        case "md:MdOutlineControlPointDuplicate":
            return MdOutlineControlPointDuplicate;
        case "md:MdOutlineControlPoint":
            return MdOutlineControlPoint;
        case "md:MdOutlineCrop169":
            return MdOutlineCrop169;
        case "md:MdOutlineCrop32":
            return MdOutlineCrop32;
        case "md:MdOutlineCrop54":
            return MdOutlineCrop54;
        case "md:MdOutlineCrop75":
            return MdOutlineCrop75;
        case "md:MdOutlineCropDin":
            return MdOutlineCropDin;
        case "md:MdOutlineCropFree":
            return MdOutlineCropFree;
        case "md:MdOutlineCropLandscape":
            return MdOutlineCropLandscape;
        case "md:MdOutlineCropOriginal":
            return MdOutlineCropOriginal;
        case "md:MdOutlineCropPortrait":
            return MdOutlineCropPortrait;
        case "md:MdOutlineCropRotate":
            return MdOutlineCropRotate;
        case "md:MdOutlineCropSquare":
            return MdOutlineCropSquare;
        case "md:MdOutlineCrop":
            return MdOutlineCrop;
        case "md:MdOutlineCurrencyBitcoin":
            return MdOutlineCurrencyBitcoin;
        case "md:MdOutlineCurrencyFranc":
            return MdOutlineCurrencyFranc;
        case "md:MdOutlineCurrencyLira":
            return MdOutlineCurrencyLira;
        case "md:MdOutlineCurrencyPound":
            return MdOutlineCurrencyPound;
        case "md:MdOutlineCurrencyRuble":
            return MdOutlineCurrencyRuble;
        case "md:MdOutlineCurrencyRupee":
            return MdOutlineCurrencyRupee;
        case "md:MdOutlineCurrencyYen":
            return MdOutlineCurrencyYen;
        case "md:MdOutlineCurrencyYuan":
            return MdOutlineCurrencyYuan;
        case "md:MdOutlineDeblur":
            return MdOutlineDeblur;
        case "md:MdOutlineDehaze":
            return MdOutlineDehaze;
        case "md:MdOutlineDetails":
            return MdOutlineDetails;
        case "md:MdOutlineDirtyLens":
            return MdOutlineDirtyLens;
        case "md:MdOutlineEdit":
            return MdOutlineEdit;
        case "md:MdOutlineEuro":
            return MdOutlineEuro;
        case "md:MdOutlineExposureNeg1":
            return MdOutlineExposureNeg1;
        case "md:MdOutlineExposureNeg2":
            return MdOutlineExposureNeg2;
        case "md:MdOutlineExposurePlus1":
            return MdOutlineExposurePlus1;
        case "md:MdOutlineExposurePlus2":
            return MdOutlineExposurePlus2;
        case "md:MdOutlineExposureZero":
            return MdOutlineExposureZero;
        case "md:MdOutlineExposure":
            return MdOutlineExposure;
        case "md:MdOutlineFaceRetouchingNatural":
            return MdOutlineFaceRetouchingNatural;
        case "md:MdOutlineFaceRetouchingOff":
            return MdOutlineFaceRetouchingOff;
        case "md:MdOutlineFilter1":
            return MdOutlineFilter1;
        case "md:MdOutlineFilter2":
            return MdOutlineFilter2;
        case "md:MdOutlineFilter3":
            return MdOutlineFilter3;
        case "md:MdOutlineFilter4":
            return MdOutlineFilter4;
        case "md:MdOutlineFilter5":
            return MdOutlineFilter5;
        case "md:MdOutlineFilter6":
            return MdOutlineFilter6;
        case "md:MdOutlineFilter7":
            return MdOutlineFilter7;
        case "md:MdOutlineFilter8":
            return MdOutlineFilter8;
        case "md:MdOutlineFilter9Plus":
            return MdOutlineFilter9Plus;
        case "md:MdOutlineFilter9":
            return MdOutlineFilter9;
        case "md:MdOutlineFilterBAndW":
            return MdOutlineFilterBAndW;
        case "md:MdOutlineFilterCenterFocus":
            return MdOutlineFilterCenterFocus;
        case "md:MdOutlineFilterDrama":
            return MdOutlineFilterDrama;
        case "md:MdOutlineFilterFrames":
            return MdOutlineFilterFrames;
        case "md:MdOutlineFilterHdr":
            return MdOutlineFilterHdr;
        case "md:MdOutlineFilterNone":
            return MdOutlineFilterNone;
        case "md:MdOutlineFilterTiltShift":
            return MdOutlineFilterTiltShift;
        case "md:MdOutlineFilterVintage":
            return MdOutlineFilterVintage;
        case "md:MdOutlineFilter":
            return MdOutlineFilter;
        case "md:MdOutlineFlare":
            return MdOutlineFlare;
        case "md:MdOutlineFlashAuto":
            return MdOutlineFlashAuto;
        case "md:MdOutlineFlashOff":
            return MdOutlineFlashOff;
        case "md:MdOutlineFlashOn":
            return MdOutlineFlashOn;
        case "md:MdOutlineFlipCameraAndroid":
            return MdOutlineFlipCameraAndroid;
        case "md:MdOutlineFlipCameraIos":
            return MdOutlineFlipCameraIos;
        case "md:MdOutlineFlip":
            return MdOutlineFlip;
        case "md:MdOutlineGradient":
            return MdOutlineGradient;
        case "md:MdOutlineGrain":
            return MdOutlineGrain;
        case "md:MdOutlineGridOff":
            return MdOutlineGridOff;
        case "md:MdOutlineGridOn":
            return MdOutlineGridOn;
        case "md:MdOutlineHdrEnhancedSelect":
            return MdOutlineHdrEnhancedSelect;
        case "md:MdOutlineHdrOff":
            return MdOutlineHdrOff;
        case "md:MdOutlineHdrOn":
            return MdOutlineHdrOn;
        case "md:MdOutlineHdrPlus":
            return MdOutlineHdrPlus;
        case "md:MdOutlineHdrStrong":
            return MdOutlineHdrStrong;
        case "md:MdOutlineHdrWeak":
            return MdOutlineHdrWeak;
        case "md:MdOutlineHealing":
            return MdOutlineHealing;
        case "md:MdOutlineHevc":
            return MdOutlineHevc;
        case "md:MdOutlineHideImage":
            return MdOutlineHideImage;
        case "md:MdOutlineImageAspectRatio":
            return MdOutlineImageAspectRatio;
        case "md:MdOutlineImageNotSupported":
            return MdOutlineImageNotSupported;
        case "md:MdOutlineImageSearch":
            return MdOutlineImageSearch;
        case "md:MdOutlineImage":
            return MdOutlineImage;
        case "md:MdOutlineIncompleteCircle":
            return MdOutlineIncompleteCircle;
        case "md:MdOutlineIso":
            return MdOutlineIso;
        case "md:MdOutlineLandscape":
            return MdOutlineLandscape;
        case "md:MdOutlineLeakAdd":
            return MdOutlineLeakAdd;
        case "md:MdOutlineLeakRemove":
            return MdOutlineLeakRemove;
        case "md:MdOutlineLens":
            return MdOutlineLens;
        case "md:MdOutlineLinkedCamera":
            return MdOutlineLinkedCamera;
        case "md:MdOutlineLogoDev":
            return MdOutlineLogoDev;
        case "md:MdOutlineLooks3":
            return MdOutlineLooks3;
        case "md:MdOutlineLooks4":
            return MdOutlineLooks4;
        case "md:MdOutlineLooks5":
            return MdOutlineLooks5;
        case "md:MdOutlineLooks6":
            return MdOutlineLooks6;
        case "md:MdOutlineLooksOne":
            return MdOutlineLooksOne;
        case "md:MdOutlineLooksTwo":
            return MdOutlineLooksTwo;
        case "md:MdOutlineLooks":
            return MdOutlineLooks;
        case "md:MdOutlineLoupe":
            return MdOutlineLoupe;
        case "md:MdOutlineMicExternalOff":
            return MdOutlineMicExternalOff;
        case "md:MdOutlineMicExternalOn":
            return MdOutlineMicExternalOn;
        case "md:MdOutlineMonochromePhotos":
            return MdOutlineMonochromePhotos;
        case "md:MdOutlineMotionPhotosAuto":
            return MdOutlineMotionPhotosAuto;
        case "md:MdOutlineMotionPhotosOff":
            return MdOutlineMotionPhotosOff;
        case "md:MdOutlineMotionPhotosOn":
            return MdOutlineMotionPhotosOn;
        case "md:MdOutlineMotionPhotosPause":
            return MdOutlineMotionPhotosPause;
        case "md:MdOutlineMotionPhotosPaused":
            return MdOutlineMotionPhotosPaused;
        case "md:MdOutlineMovieCreation":
            return MdOutlineMovieCreation;
        case "md:MdOutlineMovieFilter":
            return MdOutlineMovieFilter;
        case "md:MdOutlineMp":
            return MdOutlineMp;
        case "md:MdOutlineMusicNote":
            return MdOutlineMusicNote;
        case "md:MdOutlineMusicOff":
            return MdOutlineMusicOff;
        case "md:MdOutlineNaturePeople":
            return MdOutlineNaturePeople;
        case "md:MdOutlineNature":
            return MdOutlineNature;
        case "md:MdOutlineNavigateBefore":
            return MdOutlineNavigateBefore;
        case "md:MdOutlineNavigateNext":
            return MdOutlineNavigateNext;
        case "md:MdOutlinePalette":
            return MdOutlinePalette;
        case "md:MdOutlinePanoramaFishEye":
            return MdOutlinePanoramaFishEye;
        case "md:MdOutlinePanoramaHorizontalSelect":
            return MdOutlinePanoramaHorizontalSelect;
        case "md:MdOutlinePanoramaHorizontal":
            return MdOutlinePanoramaHorizontal;
        case "md:MdOutlinePanoramaPhotosphereSelect":
            return MdOutlinePanoramaPhotosphereSelect;
        case "md:MdOutlinePanoramaPhotosphere":
            return MdOutlinePanoramaPhotosphere;
        case "md:MdOutlinePanoramaVerticalSelect":
            return MdOutlinePanoramaVerticalSelect;
        case "md:MdOutlinePanoramaVertical":
            return MdOutlinePanoramaVertical;
        case "md:MdOutlinePanoramaWideAngleSelect":
            return MdOutlinePanoramaWideAngleSelect;
        case "md:MdOutlinePanoramaWideAngle":
            return MdOutlinePanoramaWideAngle;
        case "md:MdOutlinePanorama":
            return MdOutlinePanorama;
        case "md:MdOutlinePhotoAlbum":
            return MdOutlinePhotoAlbum;
        case "md:MdOutlinePhotoCameraBack":
            return MdOutlinePhotoCameraBack;
        case "md:MdOutlinePhotoCameraFront":
            return MdOutlinePhotoCameraFront;
        case "md:MdOutlinePhotoCamera":
            return MdOutlinePhotoCamera;
        case "md:MdOutlinePhotoFilter":
            return MdOutlinePhotoFilter;
        case "md:MdOutlinePhotoLibrary":
            return MdOutlinePhotoLibrary;
        case "md:MdOutlinePhotoSizeSelectActual":
            return MdOutlinePhotoSizeSelectActual;
        case "md:MdOutlinePhotoSizeSelectLarge":
            return MdOutlinePhotoSizeSelectLarge;
        case "md:MdOutlinePhotoSizeSelectSmall":
            return MdOutlinePhotoSizeSelectSmall;
        case "md:MdOutlinePhoto":
            return MdOutlinePhoto;
        case "md:MdOutlinePictureAsPdf":
            return MdOutlinePictureAsPdf;
        case "md:MdOutlinePortrait":
            return MdOutlinePortrait;
        case "md:MdOutlineRawOff":
            return MdOutlineRawOff;
        case "md:MdOutlineRawOn":
            return MdOutlineRawOn;
        case "md:MdOutlineReceiptLong":
            return MdOutlineReceiptLong;
        case "md:MdOutlineRemoveRedEye":
            return MdOutlineRemoveRedEye;
        case "md:MdOutlineRotate90DegreesCcw":
            return MdOutlineRotate90DegreesCcw;
        case "md:MdOutlineRotate90DegreesCw":
            return MdOutlineRotate90DegreesCw;
        case "md:MdOutlineRotateLeft":
            return MdOutlineRotateLeft;
        case "md:MdOutlineRotateRight":
            return MdOutlineRotateRight;
        case "md:MdOutlineShutterSpeed":
            return MdOutlineShutterSpeed;
        case "md:MdOutlineSlideshow":
            return MdOutlineSlideshow;
        case "md:MdOutlineStraighten":
            return MdOutlineStraighten;
        case "md:MdOutlineStyle":
            return MdOutlineStyle;
        case "md:MdOutlineSwitchCamera":
            return MdOutlineSwitchCamera;
        case "md:MdOutlineSwitchVideo":
            return MdOutlineSwitchVideo;
        case "md:MdOutlineTagFaces":
            return MdOutlineTagFaces;
        case "md:MdOutlineTexture":
            return MdOutlineTexture;
        case "md:MdOutlineThermostatAuto":
            return MdOutlineThermostatAuto;
        case "md:MdOutlineTimelapse":
            return MdOutlineTimelapse;
        case "md:MdOutlineTimer10":
            return MdOutlineTimer10;
        case "md:MdOutlineTimer3":
            return MdOutlineTimer3;
        case "md:MdOutlineTimerOff":
            return MdOutlineTimerOff;
        case "md:MdOutlineTimer":
            return MdOutlineTimer;
        case "md:MdOutlineTonality":
            return MdOutlineTonality;
        case "md:MdOutlineTransform":
            return MdOutlineTransform;
        case "md:MdOutlineTune":
            return MdOutlineTune;
        case "md:MdOutlineVideoCameraBack":
            return MdOutlineVideoCameraBack;
        case "md:MdOutlineVideoCameraFront":
            return MdOutlineVideoCameraFront;
        case "md:MdOutlineVideoStable":
            return MdOutlineVideoStable;
        case "md:MdOutlineViewComfy":
            return MdOutlineViewComfy;
        case "md:MdOutlineViewCompact":
            return MdOutlineViewCompact;
        case "md:MdOutlineVignette":
            return MdOutlineVignette;
        case "md:MdOutlineVrpano":
            return MdOutlineVrpano;
        case "md:MdOutlineWbAuto":
            return MdOutlineWbAuto;
        case "md:MdOutlineWbCloudy":
            return MdOutlineWbCloudy;
        case "md:MdOutlineWbIncandescent":
            return MdOutlineWbIncandescent;
        case "md:MdOutlineWbIridescent":
            return MdOutlineWbIridescent;
        case "md:MdOutlineWbShade":
            return MdOutlineWbShade;
        case "md:MdOutlineWbSunny":
            return MdOutlineWbSunny;
        case "md:MdOutlineWbTwilight":
            return MdOutlineWbTwilight;
        case "md:MdOutline360":
            return MdOutline360;
        case "md:MdOutlineAddBusiness":
            return MdOutlineAddBusiness;
        case "md:MdOutlineAddLocationAlt":
            return MdOutlineAddLocationAlt;
        case "md:MdOutlineAddLocation":
            return MdOutlineAddLocation;
        case "md:MdOutlineAddRoad":
            return MdOutlineAddRoad;
        case "md:MdOutlineAgriculture":
            return MdOutlineAgriculture;
        case "md:MdOutlineAirlineStops":
            return MdOutlineAirlineStops;
        case "md:MdOutlineAirlines":
            return MdOutlineAirlines;
        case "md:MdOutlineAltRoute":
            return MdOutlineAltRoute;
        case "md:MdOutlineAtm":
            return MdOutlineAtm;
        case "md:MdOutlineAttractions":
            return MdOutlineAttractions;
        case "md:MdOutlineBadge":
            return MdOutlineBadge;
        case "md:MdOutlineBakeryDining":
            return MdOutlineBakeryDining;
        case "md:MdOutlineBeenhere":
            return MdOutlineBeenhere;
        case "md:MdOutlineBikeScooter":
            return MdOutlineBikeScooter;
        case "md:MdOutlineBreakfastDining":
            return MdOutlineBreakfastDining;
        case "md:MdOutlineBrunchDining":
            return MdOutlineBrunchDining;
        case "md:MdOutlineBusAlert":
            return MdOutlineBusAlert;
        case "md:MdOutlineCarCrash":
            return MdOutlineCarCrash;
        case "md:MdOutlineCarRental":
            return MdOutlineCarRental;
        case "md:MdOutlineCarRepair":
            return MdOutlineCarRepair;
        case "md:MdOutlineCastle":
            return MdOutlineCastle;
        case "md:MdOutlineCategory":
            return MdOutlineCategory;
        case "md:MdOutlineCelebration":
            return MdOutlineCelebration;
        case "md:MdOutlineChurch":
            return MdOutlineChurch;
        case "md:MdOutlineCleaningServices":
            return MdOutlineCleaningServices;
        case "md:MdOutlineCompassCalibration":
            return MdOutlineCompassCalibration;
        case "md:MdOutlineConnectingAirports":
            return MdOutlineConnectingAirports;
        case "md:MdOutlineCrisisAlert":
            return MdOutlineCrisisAlert;
        case "md:MdOutlineDeliveryDining":
            return MdOutlineDeliveryDining;
        case "md:MdOutlineDepartureBoard":
            return MdOutlineDepartureBoard;
        case "md:MdOutlineDesignServices":
            return MdOutlineDesignServices;
        case "md:MdOutlineDiamond":
            return MdOutlineDiamond;
        case "md:MdOutlineDinnerDining":
            return MdOutlineDinnerDining;
        case "md:MdOutlineDirectionsBike":
            return MdOutlineDirectionsBike;
        case "md:MdOutlineDirectionsBoatFilled":
            return MdOutlineDirectionsBoatFilled;
        case "md:MdOutlineDirectionsBoat":
            return MdOutlineDirectionsBoat;
        case "md:MdOutlineDirectionsBusFilled":
            return MdOutlineDirectionsBusFilled;
        case "md:MdOutlineDirectionsBus":
            return MdOutlineDirectionsBus;
        case "md:MdOutlineDirectionsCarFilled":
            return MdOutlineDirectionsCarFilled;
        case "md:MdOutlineDirectionsCar":
            return MdOutlineDirectionsCar;
        case "md:MdOutlineDirectionsRailwayFilled":
            return MdOutlineDirectionsRailwayFilled;
        case "md:MdOutlineDirectionsRailway":
            return MdOutlineDirectionsRailway;
        case "md:MdOutlineDirectionsRun":
            return MdOutlineDirectionsRun;
        case "md:MdOutlineDirectionsSubwayFilled":
            return MdOutlineDirectionsSubwayFilled;
        case "md:MdOutlineDirectionsSubway":
            return MdOutlineDirectionsSubway;
        case "md:MdOutlineDirectionsTransitFilled":
            return MdOutlineDirectionsTransitFilled;
        case "md:MdOutlineDirectionsTransit":
            return MdOutlineDirectionsTransit;
        case "md:MdOutlineDirectionsWalk":
            return MdOutlineDirectionsWalk;
        case "md:MdOutlineDirections":
            return MdOutlineDirections;
        case "md:MdOutlineDryCleaning":
            return MdOutlineDryCleaning;
        case "md:MdOutlineEditAttributes":
            return MdOutlineEditAttributes;
        case "md:MdOutlineEditLocationAlt":
            return MdOutlineEditLocationAlt;
        case "md:MdOutlineEditLocation":
            return MdOutlineEditLocation;
        case "md:MdOutlineEditRoad":
            return MdOutlineEditRoad;
        case "md:MdOutlineEggAlt":
            return MdOutlineEggAlt;
        case "md:MdOutlineEgg":
            return MdOutlineEgg;
        case "md:MdOutlineElectricBike":
            return MdOutlineElectricBike;
        case "md:MdOutlineElectricCar":
            return MdOutlineElectricCar;
        case "md:MdOutlineElectricMoped":
            return MdOutlineElectricMoped;
        case "md:MdOutlineElectricRickshaw":
            return MdOutlineElectricRickshaw;
        case "md:MdOutlineElectricScooter":
            return MdOutlineElectricScooter;
        case "md:MdOutlineElectricalServices":
            return MdOutlineElectricalServices;
        case "md:MdOutlineEmergencyRecording":
            return MdOutlineEmergencyRecording;
        case "md:MdOutlineEmergencyShare":
            return MdOutlineEmergencyShare;
        case "md:MdOutlineEmergency":
            return MdOutlineEmergency;
        case "md:MdOutlineEvStation":
            return MdOutlineEvStation;
        case "md:MdOutlineFactory":
            return MdOutlineFactory;
        case "md:MdOutlineFastfood":
            return MdOutlineFastfood;
        case "md:MdOutlineFestival":
            return MdOutlineFestival;
        case "md:MdOutlineFireHydrantAlt":
            return MdOutlineFireHydrantAlt;
        case "md:MdOutlineFireTruck":
            return MdOutlineFireTruck;
        case "md:MdOutlineFlightClass":
            return MdOutlineFlightClass;
        case "md:MdOutlineFlight":
            return MdOutlineFlight;
        case "md:MdOutlineForest":
            return MdOutlineForest;
        case "md:MdOutlineForkLeft":
            return MdOutlineForkLeft;
        case "md:MdOutlineForkRight":
            return MdOutlineForkRight;
        case "md:MdOutlineFort":
            return MdOutlineFort;
        case "md:MdOutlineHail":
            return MdOutlineHail;
        case "md:MdOutlineHandyman":
            return MdOutlineHandyman;
        case "md:MdOutlineHardware":
            return MdOutlineHardware;
        case "md:MdOutlineHomeRepairService":
            return MdOutlineHomeRepairService;
        case "md:MdOutlineHotel":
            return MdOutlineHotel;
        case "md:MdOutlineHvac":
            return MdOutlineHvac;
        case "md:MdOutlineIcecream":
            return MdOutlineIcecream;
        case "md:MdOutlineKebabDining":
            return MdOutlineKebabDining;
        case "md:MdOutlineLayersClear":
            return MdOutlineLayersClear;
        case "md:MdOutlineLayers":
            return MdOutlineLayers;
        case "md:MdOutlineLiquor":
            return MdOutlineLiquor;
        case "md:MdOutlineLocalActivity":
            return MdOutlineLocalActivity;
        case "md:MdOutlineLocalAirport":
            return MdOutlineLocalAirport;
        case "md:MdOutlineLocalAtm":
            return MdOutlineLocalAtm;
        case "md:MdOutlineLocalBar":
            return MdOutlineLocalBar;
        case "md:MdOutlineLocalCafe":
            return MdOutlineLocalCafe;
        case "md:MdOutlineLocalCarWash":
            return MdOutlineLocalCarWash;
        case "md:MdOutlineLocalConvenienceStore":
            return MdOutlineLocalConvenienceStore;
        case "md:MdOutlineLocalDining":
            return MdOutlineLocalDining;
        case "md:MdOutlineLocalDrink":
            return MdOutlineLocalDrink;
        case "md:MdOutlineLocalFireDepartment":
            return MdOutlineLocalFireDepartment;
        case "md:MdOutlineLocalFlorist":
            return MdOutlineLocalFlorist;
        case "md:MdOutlineLocalGasStation":
            return MdOutlineLocalGasStation;
        case "md:MdOutlineLocalGroceryStore":
            return MdOutlineLocalGroceryStore;
        case "md:MdOutlineLocalHospital":
            return MdOutlineLocalHospital;
        case "md:MdOutlineLocalHotel":
            return MdOutlineLocalHotel;
        case "md:MdOutlineLocalLaundryService":
            return MdOutlineLocalLaundryService;
        case "md:MdOutlineLocalLibrary":
            return MdOutlineLocalLibrary;
        case "md:MdOutlineLocalMall":
            return MdOutlineLocalMall;
        case "md:MdOutlineLocalMovies":
            return MdOutlineLocalMovies;
        case "md:MdOutlineLocalOffer":
            return MdOutlineLocalOffer;
        case "md:MdOutlineLocalParking":
            return MdOutlineLocalParking;
        case "md:MdOutlineLocalPharmacy":
            return MdOutlineLocalPharmacy;
        case "md:MdOutlineLocalPhone":
            return MdOutlineLocalPhone;
        case "md:MdOutlineLocalPizza":
            return MdOutlineLocalPizza;
        case "md:MdOutlineLocalPlay":
            return MdOutlineLocalPlay;
        case "md:MdOutlineLocalPolice":
            return MdOutlineLocalPolice;
        case "md:MdOutlineLocalPostOffice":
            return MdOutlineLocalPostOffice;
        case "md:MdOutlineLocalPrintshop":
            return MdOutlineLocalPrintshop;
        case "md:MdOutlineLocalSee":
            return MdOutlineLocalSee;
        case "md:MdOutlineLocalShipping":
            return MdOutlineLocalShipping;
        case "md:MdOutlineLocalTaxi":
            return MdOutlineLocalTaxi;
        case "md:MdOutlineLunchDining":
            return MdOutlineLunchDining;
        case "md:MdOutlineMap":
            return MdOutlineMap;
        case "md:MdOutlineMapsUgc":
            return MdOutlineMapsUgc;
        case "md:MdOutlineMedicalInformation":
            return MdOutlineMedicalInformation;
        case "md:MdOutlineMedicalServices":
            return MdOutlineMedicalServices;
        case "md:MdOutlineMenuBook":
            return MdOutlineMenuBook;
        case "md:MdOutlineMerge":
            return MdOutlineMerge;
        case "md:MdOutlineMinorCrash":
            return MdOutlineMinorCrash;
        case "md:MdOutlineMiscellaneousServices":
            return MdOutlineMiscellaneousServices;
        case "md:MdOutlineModeOfTravel":
            return MdOutlineModeOfTravel;
        case "md:MdOutlineMoney":
            return MdOutlineMoney;
        case "md:MdOutlineMoped":
            return MdOutlineMoped;
        case "md:MdOutlineMosque":
            return MdOutlineMosque;
        case "md:MdOutlineMoving":
            return MdOutlineMoving;
        case "md:MdOutlineMultipleStop":
            return MdOutlineMultipleStop;
        case "md:MdOutlineMuseum":
            return MdOutlineMuseum;
        case "md:MdOutlineMyLocation":
            return MdOutlineMyLocation;
        case "md:MdOutlineNavigation":
            return MdOutlineNavigation;
        case "md:MdOutlineNearMeDisabled":
            return MdOutlineNearMeDisabled;
        case "md:MdOutlineNearMe":
            return MdOutlineNearMe;
        case "md:MdOutlineNightlife":
            return MdOutlineNightlife;
        case "md:MdOutlineNoCrash":
            return MdOutlineNoCrash;
        case "md:MdOutlineNoMeals":
            return MdOutlineNoMeals;
        case "md:MdOutlineNoTransfer":
            return MdOutlineNoTransfer;
        case "md:MdOutlineNotListedLocation":
            return MdOutlineNotListedLocation;
        case "md:MdOutlinePark":
            return MdOutlinePark;
        case "md:MdOutlinePedalBike":
            return MdOutlinePedalBike;
        case "md:MdOutlinePersonPinCircle":
            return MdOutlinePersonPinCircle;
        case "md:MdOutlinePersonPin":
            return MdOutlinePersonPin;
        case "md:MdOutlinePestControlRodent":
            return MdOutlinePestControlRodent;
        case "md:MdOutlinePestControl":
            return MdOutlinePestControl;
        case "md:MdOutlinePinDrop":
            return MdOutlinePinDrop;
        case "md:MdOutlinePlace":
            return MdOutlinePlace;
        case "md:MdOutlinePlumbing":
            return MdOutlinePlumbing;
        case "md:MdOutlineRailwayAlert":
            return MdOutlineRailwayAlert;
        case "md:MdOutlineRamenDining":
            return MdOutlineRamenDining;
        case "md:MdOutlineRampLeft":
            return MdOutlineRampLeft;
        case "md:MdOutlineRampRight":
            return MdOutlineRampRight;
        case "md:MdOutlineRateReview":
            return MdOutlineRateReview;
        case "md:MdOutlineRemoveRoad":
            return MdOutlineRemoveRoad;
        case "md:MdOutlineRestaurantMenu":
            return MdOutlineRestaurantMenu;
        case "md:MdOutlineRestaurant":
            return MdOutlineRestaurant;
        case "md:MdOutlineRoundaboutLeft":
            return MdOutlineRoundaboutLeft;
        case "md:MdOutlineRoundaboutRight":
            return MdOutlineRoundaboutRight;
        case "md:MdOutlineRoute":
            return MdOutlineRoute;
        case "md:MdOutlineRunCircle":
            return MdOutlineRunCircle;
        case "md:MdOutlineSafetyCheck":
            return MdOutlineSafetyCheck;
        case "md:MdOutlineSailing":
            return MdOutlineSailing;
        case "md:MdOutlineSatellite":
            return MdOutlineSatellite;
        case "md:MdOutlineScreenRotationAlt":
            return MdOutlineScreenRotationAlt;
        case "md:MdOutlineSetMeal":
            return MdOutlineSetMeal;
        case "md:MdOutlineSignpost":
            return MdOutlineSignpost;
        case "md:MdOutlineSnowmobile":
            return MdOutlineSnowmobile;
        case "md:MdOutlineSos":
            return MdOutlineSos;
        case "md:MdOutlineSoupKitchen":
            return MdOutlineSoupKitchen;
        case "md:MdOutlineStadium":
            return MdOutlineStadium;
        case "md:MdOutlineStoreMallDirectory":
            return MdOutlineStoreMallDirectory;
        case "md:MdOutlineStraight":
            return MdOutlineStraight;
        case "md:MdOutlineStreetview":
            return MdOutlineStreetview;
        case "md:MdOutlineSubway":
            return MdOutlineSubway;
        case "md:MdOutlineSynagogue":
            return MdOutlineSynagogue;
        case "md:MdOutlineTakeoutDining":
            return MdOutlineTakeoutDining;
        case "md:MdOutlineTaxiAlert":
            return MdOutlineTaxiAlert;
        case "md:MdOutlineTempleBuddhist":
            return MdOutlineTempleBuddhist;
        case "md:MdOutlineTempleHindu":
            return MdOutlineTempleHindu;
        case "md:MdOutlineTerrain":
            return MdOutlineTerrain;
        case "md:MdOutlineTheaterComedy":
            return MdOutlineTheaterComedy;
        case "md:MdOutlineTireRepair":
            return MdOutlineTireRepair;
        case "md:MdOutlineTraffic":
            return MdOutlineTraffic;
        case "md:MdOutlineTrain":
            return MdOutlineTrain;
        case "md:MdOutlineTram":
            return MdOutlineTram;
        case "md:MdOutlineTransferWithinAStation":
            return MdOutlineTransferWithinAStation;
        case "md:MdOutlineTransitEnterexit":
            return MdOutlineTransitEnterexit;
        case "md:MdOutlineTripOrigin":
            return MdOutlineTripOrigin;
        case "md:MdOutlineTurnLeft":
            return MdOutlineTurnLeft;
        case "md:MdOutlineTurnRight":
            return MdOutlineTurnRight;
        case "md:MdOutlineTurnSharpLeft":
            return MdOutlineTurnSharpLeft;
        case "md:MdOutlineTurnSharpRight":
            return MdOutlineTurnSharpRight;
        case "md:MdOutlineTurnSlightLeft":
            return MdOutlineTurnSlightLeft;
        case "md:MdOutlineTurnSlightRight":
            return MdOutlineTurnSlightRight;
        case "md:MdOutlineTwoWheeler":
            return MdOutlineTwoWheeler;
        case "md:MdOutlineUTurnLeft":
            return MdOutlineUTurnLeft;
        case "md:MdOutlineUTurnRight":
            return MdOutlineUTurnRight;
        case "md:MdOutlineVolunteerActivism":
            return MdOutlineVolunteerActivism;
        case "md:MdOutlineWarehouse":
            return MdOutlineWarehouse;
        case "md:MdOutlineWineBar":
            return MdOutlineWineBar;
        case "md:MdOutlineWrongLocation":
            return MdOutlineWrongLocation;
        case "md:MdOutlineZoomInMap":
            return MdOutlineZoomInMap;
        case "md:MdOutlineZoomOutMap":
            return MdOutlineZoomOutMap;
        case "md:MdOutlineAddHomeWork":
            return MdOutlineAddHomeWork;
        case "md:MdOutlineAppSettingsAlt":
            return MdOutlineAppSettingsAlt;
        case "md:MdOutlineAppsOutage":
            return MdOutlineAppsOutage;
        case "md:MdOutlineApps":
            return MdOutlineApps;
        case "md:MdOutlineArrowBackIosNew":
            return MdOutlineArrowBackIosNew;
        case "md:MdOutlineArrowBackIos":
            return MdOutlineArrowBackIos;
        case "md:MdOutlineArrowBack":
            return MdOutlineArrowBack;
        case "md:MdOutlineArrowDownward":
            return MdOutlineArrowDownward;
        case "md:MdOutlineArrowDropDownCircle":
            return MdOutlineArrowDropDownCircle;
        case "md:MdOutlineArrowDropDown":
            return MdOutlineArrowDropDown;
        case "md:MdOutlineArrowDropUp":
            return MdOutlineArrowDropUp;
        case "md:MdOutlineArrowForwardIos":
            return MdOutlineArrowForwardIos;
        case "md:MdOutlineArrowForward":
            return MdOutlineArrowForward;
        case "md:MdOutlineArrowLeft":
            return MdOutlineArrowLeft;
        case "md:MdOutlineArrowRight":
            return MdOutlineArrowRight;
        case "md:MdOutlineArrowUpward":
            return MdOutlineArrowUpward;
        case "md:MdOutlineAssistantDirection":
            return MdOutlineAssistantDirection;
        case "md:MdOutlineCampaign":
            return MdOutlineCampaign;
        case "md:MdOutlineCancel":
            return MdOutlineCancel;
        case "md:MdOutlineCheck":
            return MdOutlineCheck;
        case "md:MdOutlineChevronLeft":
            return MdOutlineChevronLeft;
        case "md:MdOutlineChevronRight":
            return MdOutlineChevronRight;
        case "md:MdOutlineClose":
            return MdOutlineClose;
        case "md:MdOutlineDoubleArrow":
            return MdOutlineDoubleArrow;
        case "md:MdOutlineEast":
            return MdOutlineEast;
        case "md:MdOutlineExpandCircleDown":
            return MdOutlineExpandCircleDown;
        case "md:MdOutlineExpandLess":
            return MdOutlineExpandLess;
        case "md:MdOutlineExpandMore":
            return MdOutlineExpandMore;
        case "md:MdOutlineFirstPage":
            return MdOutlineFirstPage;
        case "md:MdOutlineFullscreenExit":
            return MdOutlineFullscreenExit;
        case "md:MdOutlineFullscreen":
            return MdOutlineFullscreen;
        case "md:MdOutlineHomeWork":
            return MdOutlineHomeWork;
        case "md:MdOutlineLastPage":
            return MdOutlineLastPage;
        case "md:MdOutlineLegendToggle":
            return MdOutlineLegendToggle;
        case "md:MdOutlineMapsHomeWork":
            return MdOutlineMapsHomeWork;
        case "md:MdOutlineMenuOpen":
            return MdOutlineMenuOpen;
        case "md:MdOutlineMenu":
            return MdOutlineMenu;
        case "md:MdOutlineMoreHoriz":
            return MdOutlineMoreHoriz;
        case "md:MdOutlineMoreVert":
            return MdOutlineMoreVert;
        case "md:MdOutlineNorthEast":
            return MdOutlineNorthEast;
        case "md:MdOutlineNorthWest":
            return MdOutlineNorthWest;
        case "md:MdOutlineNorth":
            return MdOutlineNorth;
        case "md:MdOutlineOfflineShare":
            return MdOutlineOfflineShare;
        case "md:MdOutlinePayments":
            return MdOutlinePayments;
        case "md:MdOutlinePivotTableChart":
            return MdOutlinePivotTableChart;
        case "md:MdOutlineRefresh":
            return MdOutlineRefresh;
        case "md:MdOutlineSouthEast":
            return MdOutlineSouthEast;
        case "md:MdOutlineSouthWest":
            return MdOutlineSouthWest;
        case "md:MdOutlineSouth":
            return MdOutlineSouth;
        case "md:MdOutlineSubdirectoryArrowLeft":
            return MdOutlineSubdirectoryArrowLeft;
        case "md:MdOutlineSubdirectoryArrowRight":
            return MdOutlineSubdirectoryArrowRight;
        case "md:MdOutlineSwitchLeft":
            return MdOutlineSwitchLeft;
        case "md:MdOutlineSwitchRight":
            return MdOutlineSwitchRight;
        case "md:MdOutlineUnfoldLess":
            return MdOutlineUnfoldLess;
        case "md:MdOutlineUnfoldMore":
            return MdOutlineUnfoldMore;
        case "md:MdOutlineWaterfallChart":
            return MdOutlineWaterfallChart;
        case "md:MdOutlineWest":
            return MdOutlineWest;
        case "md:MdOutlineAccountTree":
            return MdOutlineAccountTree;
        case "md:MdOutlineAdb":
            return MdOutlineAdb;
        case "md:MdOutlineAirlineSeatFlatAngled":
            return MdOutlineAirlineSeatFlatAngled;
        case "md:MdOutlineAirlineSeatFlat":
            return MdOutlineAirlineSeatFlat;
        case "md:MdOutlineAirlineSeatIndividualSuite":
            return MdOutlineAirlineSeatIndividualSuite;
        case "md:MdOutlineAirlineSeatLegroomExtra":
            return MdOutlineAirlineSeatLegroomExtra;
        case "md:MdOutlineAirlineSeatLegroomNormal":
            return MdOutlineAirlineSeatLegroomNormal;
        case "md:MdOutlineAirlineSeatLegroomReduced":
            return MdOutlineAirlineSeatLegroomReduced;
        case "md:MdOutlineAirlineSeatReclineExtra":
            return MdOutlineAirlineSeatReclineExtra;
        case "md:MdOutlineAirlineSeatReclineNormal":
            return MdOutlineAirlineSeatReclineNormal;
        case "md:MdOutlineBluetoothAudio":
            return MdOutlineBluetoothAudio;
        case "md:MdOutlineConfirmationNumber":
            return MdOutlineConfirmationNumber;
        case "md:MdOutlineDirectionsOff":
            return MdOutlineDirectionsOff;
        case "md:MdOutlineDiscFull":
            return MdOutlineDiscFull;
        case "md:MdOutlineDoDisturbAlt":
            return MdOutlineDoDisturbAlt;
        case "md:MdOutlineDoDisturbOff":
            return MdOutlineDoDisturbOff;
        case "md:MdOutlineDoDisturbOn":
            return MdOutlineDoDisturbOn;
        case "md:MdOutlineDoDisturb":
            return MdOutlineDoDisturb;
        case "md:MdOutlineDoNotDisturbAlt":
            return MdOutlineDoNotDisturbAlt;
        case "md:MdOutlineDoNotDisturbOff":
            return MdOutlineDoNotDisturbOff;
        case "md:MdOutlineDoNotDisturbOn":
            return MdOutlineDoNotDisturbOn;
        case "md:MdOutlineDoNotDisturb":
            return MdOutlineDoNotDisturb;
        case "md:MdOutlineDriveEta":
            return MdOutlineDriveEta;
        case "md:MdOutlineEnhancedEncryption":
            return MdOutlineEnhancedEncryption;
        case "md:MdOutlineEventAvailable":
            return MdOutlineEventAvailable;
        case "md:MdOutlineEventBusy":
            return MdOutlineEventBusy;
        case "md:MdOutlineEventNote":
            return MdOutlineEventNote;
        case "md:MdOutlineFolderSpecial":
            return MdOutlineFolderSpecial;
        case "md:MdOutlineImagesearchRoller":
            return MdOutlineImagesearchRoller;
        case "md:MdOutlineLiveTv":
            return MdOutlineLiveTv;
        case "md:MdOutlineMms":
            return MdOutlineMms;
        case "md:MdOutlineMore":
            return MdOutlineMore;
        case "md:MdOutlineNetworkCheck":
            return MdOutlineNetworkCheck;
        case "md:MdOutlineNetworkLocked":
            return MdOutlineNetworkLocked;
        case "md:MdOutlineNoEncryptionGmailerrorred":
            return MdOutlineNoEncryptionGmailerrorred;
        case "md:MdOutlineNoEncryption":
            return MdOutlineNoEncryption;
        case "md:MdOutlineOndemandVideo":
            return MdOutlineOndemandVideo;
        case "md:MdOutlinePersonalVideo":
            return MdOutlinePersonalVideo;
        case "md:MdOutlinePhoneBluetoothSpeaker":
            return MdOutlinePhoneBluetoothSpeaker;
        case "md:MdOutlinePhoneCallback":
            return MdOutlinePhoneCallback;
        case "md:MdOutlinePhoneForwarded":
            return MdOutlinePhoneForwarded;
        case "md:MdOutlinePhoneInTalk":
            return MdOutlinePhoneInTalk;
        case "md:MdOutlinePhoneLocked":
            return MdOutlinePhoneLocked;
        case "md:MdOutlinePhoneMissed":
            return MdOutlinePhoneMissed;
    }
}
