import type {IconType} from "react-icons";

import {
    MdBorderRight,
    MdBorderStyle,
    MdBorderTop,
    MdBorderVertical,
    MdBubbleChart,
    MdCandlestickChart,
    MdChecklistRtl,
    MdChecklist,
    MdDataArray,
    MdDataObject,
    MdDragHandle,
    MdDraw,
    MdEditNote,
    MdFormatAlignCenter,
    MdFormatAlignJustify,
    MdFormatAlignLeft,
    MdFormatAlignRight,
    MdFormatBold,
    MdFormatClear,
    MdFormatColorFill,
    MdFormatColorReset,
    MdFormatColorText,
    MdFormatIndentDecrease,
    MdFormatIndentIncrease,
    MdFormatItalic,
    MdFormatLineSpacing,
    MdFormatListBulletedAdd,
    MdFormatListBulleted,
    MdFormatListNumberedRtl,
    MdFormatListNumbered,
    MdFormatPaint,
    MdFormatQuote,
    MdFormatShapes,
    MdFormatSize,
    MdFormatStrikethrough,
    MdFormatTextdirectionLToR,
    MdFormatTextdirectionRToL,
    MdFormatUnderlined,
    MdFunctions,
    MdHeight,
    MdHexagon,
    MdHighlight,
    MdHorizontalDistribute,
    MdHorizontalRule,
    MdInsertChartOutlined,
    MdInsertChart,
    MdInsertComment,
    MdInsertDriveFile,
    MdInsertEmoticon,
    MdInsertInvitation,
    MdInsertLink,
    MdInsertPageBreak,
    MdInsertPhoto,
    MdLineAxis,
    MdLinearScale,
    MdMargin,
    MdMergeType,
    MdModeComment,
    MdModeEditOutline,
    MdModeEdit,
    MdMode,
    MdMonetizationOn,
    MdMoneyOffCsred,
    MdMoneyOff,
    MdMoveDown,
    MdMoveUp,
    MdMultilineChart,
    MdNotes,
    MdNumbers,
    MdPadding,
    MdPentagon,
    MdPieChartOutline,
    MdPieChartOutlined,
    MdPieChart,
    MdPolyline,
    MdPostAdd,
    MdPublish,
    MdQueryStats,
    MdRectangle,
    MdScatterPlot,
    MdSchema,
    MdScore,
    MdShapeLine,
    MdShortText,
    MdShowChart,
    MdSpaceBar,
    MdSquare,
    MdStackedLineChart,
    MdStrikethroughS,
    MdSubscript,
    MdSuperscript,
    MdTableChart,
    MdTableRows,
    MdTextDecrease,
    MdTextFields,
    MdTextIncrease,
    MdTitle,
    MdTypeSpecimen,
    MdVerticalAlignBottom,
    MdVerticalAlignCenter,
    MdVerticalAlignTop,
    MdVerticalDistribute,
    MdWrapText,
    MdApproval,
    MdAttachEmail,
    MdAttachment,
    MdCloudCircle,
    MdCloudDone,
    MdCloudDownload,
    MdCloudOff,
    MdCloudQueue,
    MdCloudSync,
    MdCloudUpload,
    MdCloud,
    MdCreateNewFolder,
    MdDifference,
    MdDownloadDone,
    MdDownloadForOffline,
    MdDownload,
    MdDownloading,
    MdDriveFileMoveOutline,
    MdDriveFileMoveRtl,
    MdDriveFileMove,
    MdDriveFileRenameOutline,
    MdDriveFolderUpload,
    MdFileDownloadDone,
    MdFileDownloadOff,
    MdFileDownload,
    MdFileOpen,
    MdFileUploadOff,
    MdFileUpload,
    MdFolderCopy,
    MdFolderDelete,
    MdFolderOff,
    MdFolderOpen,
    MdFolderShared,
    MdFolderZip,
    MdFolder,
    MdFormatOverline,
    MdGridView,
    MdNewspaper,
    MdRequestQuote,
    MdRuleFolder,
    MdSnippetFolder,
    MdTextSnippet,
    MdTopic,
    MdUploadFile,
    MdUpload,
    MdWorkspacesFilled,
    MdWorkspacesOutline,
    MdWorkspaces,
    MdAdfScanner,
    MdBrowserNotSupported,
    MdBrowserUpdated,
    MdCastConnected,
    MdCastForEducation,
    MdCast,
    MdComputer,
    MdConnectedTv,
    MdConveyorBelt,
    MdDesktopMac,
    MdDesktopWindows,
    MdDeveloperBoardOff,
    MdDeveloperBoard,
    MdDeviceHub,
    MdDeviceUnknown,
    MdDevicesOther,
    MdDock,
    MdEarbudsBattery,
    MdEarbuds,
    MdForklift,
    MdFrontLoader,
    MdGamepad,
    MdHeadphonesBattery,
    MdHeadphones,
    MdHeadsetMic,
    MdHeadsetOff,
    MdHeadset,
    MdHomeMax,
    MdHomeMini,
    MdKeyboardAlt,
    MdKeyboardArrowDown,
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
    MdKeyboardArrowUp,
    MdKeyboardBackspace,
    MdKeyboardCapslock,
    MdKeyboardCommandKey,
    MdKeyboardControlKey,
    MdKeyboardDoubleArrowDown,
    MdKeyboardDoubleArrowLeft,
    MdKeyboardDoubleArrowRight,
    MdKeyboardDoubleArrowUp,
    MdKeyboardHide,
    MdKeyboardOptionKey,
    MdKeyboardReturn,
    MdKeyboardTab,
    MdKeyboardVoice,
    MdKeyboard,
    MdLaptopChromebook,
    MdLaptopMac,
    MdLaptopWindows,
    MdLaptop,
    MdMemory,
    MdMonitor,
    MdMouse,
    MdPallet,
    MdPhoneAndroid,
    MdPhoneIphone,
    MdPhonelinkOff,
    MdPhonelink,
    MdPointOfSale,
    MdPowerInput,
    MdRouter,
    MdScanner,
    MdSecurity,
    MdSimCard,
    MdSmartDisplay,
    MdSmartScreen,
    MdSmartToy,
    MdSmartphone,
    MdSpeakerGroup,
    MdSpeaker,
    MdStart,
    MdTabletAndroid,
    MdTabletMac,
    MdTablet,
    MdToys,
    MdTrolley,
    MdTv,
    MdVideogameAssetOff,
    MdVideogameAsset,
    MdWatchOff,
    MdWatch,
    MdAutoMode,
    MdBlindsClosed,
    MdBlinds,
    MdBroadcastOnHome,
    MdBroadcastOnPersonal,
    MdCloudySnowing,
    MdCurtainsClosed,
    MdCurtains,
    MdElectricBolt,
    MdElectricMeter,
    MdEnergySavingsLeaf,
    MdFoggy,
    MdGasMeter,
    MdHeatPump,
    MdModeFanOff,
    MdNestCamWiredStand,
    MdOilBarrel,
    MdPropaneTank,
    MdPropane,
    MdRollerShadesClosed,
    MdRollerShades,
    MdSensorDoor,
    MdSensorOccupied,
    MdSensorWindow,
    MdShelves,
    MdShieldMoon,
    MdSnowing,
    MdSolarPower,
    MdSunnySnowing,
    MdSunny,
    MdVerticalShadesClosed,
    MdVerticalShades,
    MdWindPower,
    Md10Mp,
    Md11Mp,
    Md12Mp,
    Md13Mp,
    Md14Mp,
    Md15Mp,
    Md16Mp,
    Md17Mp,
    Md18Mp,
    Md19Mp,
    Md20Mp,
    Md21Mp,
    Md22Mp,
    Md23Mp,
    Md24Mp,
    Md2Mp,
    Md30FpsSelect,
    Md3Mp,
    Md4Mp,
    Md5Mp,
    Md60FpsSelect,
    Md6Mp,
    Md7Mp,
    Md8Mp,
    Md9Mp,
    MdAddAPhoto,
    MdAddPhotoAlternate,
    MdAddToPhotos,
    MdAdjust,
    MdAnimation,
    MdAssistantPhoto,
    MdAssistant,
    MdAudiotrack,
    MdAutoAwesomeMosaic,
    MdAutoAwesomeMotion,
    MdAutoAwesome,
    MdAutoFixHigh,
    MdAutoFixNormal,
    MdAutoFixOff,
    MdAutoStories,
    MdAutofpsSelect,
    MdBedtimeOff,
    MdBedtime,
    MdBlurCircular,
    MdBlurLinear,
    MdBlurOff,
    MdBlurOn,
    MdBrightness1,
    MdBrightness2,
    MdBrightness3,
    MdBrightness4,
    MdBrightness5,
    MdBrightness6,
    MdBrightness7,
    MdBrokenImage,
    MdBrush,
    MdBurstMode,
    MdCameraAlt,
    MdCameraFront,
    MdCameraRear,
    MdCameraRoll,
    MdCamera,
    MdCases,
    MdCenterFocusStrong,
    MdCenterFocusWeak,
    MdCircle,
    MdCollectionsBookmark,
    MdCollections,
    MdColorLens,
    MdColorize,
    MdCompare,
    MdContrast,
    MdControlPointDuplicate,
    MdControlPoint,
    MdCrop169,
    MdCrop32,
    MdCrop54,
    MdCrop75,
    MdCropDin,
    MdCropFree,
    MdCropLandscape,
    MdCropOriginal,
    MdCropPortrait,
    MdCropRotate,
    MdCropSquare,
    MdCrop,
    MdCurrencyBitcoin,
    MdCurrencyFranc,
    MdCurrencyLira,
    MdCurrencyPound,
    MdCurrencyRuble,
    MdCurrencyRupee,
    MdCurrencyYen,
    MdCurrencyYuan,
    MdDeblur,
    MdDehaze,
    MdDetails,
    MdDirtyLens,
    MdEdit,
    MdEuro,
    MdExposureNeg1,
    MdExposureNeg2,
    MdExposurePlus1,
    MdExposurePlus2,
    MdExposureZero,
    MdExposure,
    MdFaceRetouchingNatural,
    MdFaceRetouchingOff,
    MdFilter1,
    MdFilter2,
    MdFilter3,
    MdFilter4,
    MdFilter5,
    MdFilter6,
    MdFilter7,
    MdFilter8,
    MdFilter9Plus,
    MdFilter9,
    MdFilterBAndW,
    MdFilterCenterFocus,
    MdFilterDrama,
    MdFilterFrames,
    MdFilterHdr,
    MdFilterNone,
    MdFilterTiltShift,
    MdFilterVintage,
    MdFilter,
    MdFlare,
    MdFlashAuto,
    MdFlashOff,
    MdFlashOn,
    MdFlipCameraAndroid,
    MdFlipCameraIos,
    MdFlip,
    MdGradient,
    MdGrain,
    MdGridOff,
    MdGridOn,
    MdHdrEnhancedSelect,
    MdHdrOff,
    MdHdrOn,
    MdHdrPlus,
    MdHdrStrong,
    MdHdrWeak,
    MdHealing,
    MdHevc,
    MdHideImage,
    MdImageAspectRatio,
    MdImageNotSupported,
    MdImageSearch,
    MdImage,
    MdIncompleteCircle,
    MdIso,
    MdLandscape,
    MdLeakAdd,
    MdLeakRemove,
    MdLens,
    MdLinkedCamera,
    MdLogoDev,
    MdLooks3,
    MdLooks4,
    MdLooks5,
    MdLooks6,
    MdLooksOne,
    MdLooksTwo,
    MdLooks,
    MdLoupe,
    MdMicExternalOff,
    MdMicExternalOn,
    MdMonochromePhotos,
    MdMotionPhotosAuto,
    MdMotionPhotosOff,
    MdMotionPhotosOn,
    MdMotionPhotosPause,
    MdMotionPhotosPaused,
    MdMovieCreation,
    MdMovieFilter,
    MdMp,
    MdMusicNote,
    MdMusicOff,
    MdNaturePeople,
    MdNature,
    MdNavigateBefore,
    MdNavigateNext,
    MdPalette,
    MdPanoramaFishEye,
    MdPanoramaHorizontalSelect,
    MdPanoramaHorizontal,
    MdPanoramaPhotosphereSelect,
    MdPanoramaPhotosphere,
    MdPanoramaVerticalSelect,
    MdPanoramaVertical,
    MdPanoramaWideAngleSelect,
    MdPanoramaWideAngle,
    MdPanorama,
    MdPhotoAlbum,
    MdPhotoCameraBack,
    MdPhotoCameraFront,
    MdPhotoCamera,
    MdPhotoFilter,
    MdPhotoLibrary,
    MdPhotoSizeSelectActual,
    MdPhotoSizeSelectLarge,
    MdPhotoSizeSelectSmall,
    MdPhoto,
    MdPictureAsPdf,
    MdPortrait,
    MdRawOff,
    MdRawOn,
    MdReceiptLong,
    MdRemoveRedEye,
    MdRotate90DegreesCcw,
    MdRotate90DegreesCw,
    MdRotateLeft,
    MdRotateRight,
    MdShutterSpeed,
    MdSlideshow,
    MdStraighten,
    MdStyle,
    MdSwitchCamera,
    MdSwitchVideo,
    MdTagFaces,
    MdTexture,
    MdThermostatAuto,
    MdTimelapse,
    MdTimer10,
    MdTimer3,
    MdTimerOff,
    MdTimer,
    MdTonality,
    MdTransform,
    MdTune,
    MdVideoCameraBack,
    MdVideoCameraFront,
    MdVideoStable,
    MdViewComfy,
    MdViewCompact,
    MdVignette,
    MdVrpano,
    MdWbAuto,
    MdWbCloudy,
    MdWbIncandescent,
    MdWbIridescent,
    MdWbShade,
    MdWbSunny,
    MdWbTwighlight,
    MdWbTwilight,
    Md360,
    MdAddBusiness,
    MdAddLocationAlt,
    MdAddLocation,
    MdAddRoad,
    MdAgriculture,
    MdAirlineStops,
    MdAirlines,
    MdAltRoute,
    MdAtm,
    MdAttractions,
    MdBadge,
    MdBakeryDining,
    MdBeenhere,
    MdBikeScooter,
    MdBreakfastDining,
    MdBrunchDining,
    MdBusAlert,
    MdCarCrash,
    MdCarRental,
    MdCarRepair,
    MdCastle,
    MdCategory,
    MdCelebration,
    MdChurch,
    MdCleaningServices,
    MdCompassCalibration,
    MdConnectingAirports,
    MdCrisisAlert,
    MdDeliveryDining,
    MdDepartureBoard,
    MdDesignServices,
    MdDiamond,
    MdDinnerDining,
    MdDirectionsBike,
    MdDirectionsBoatFilled,
    MdDirectionsBoat,
    MdDirectionsBusFilled,
    MdDirectionsBus,
    MdDirectionsCarFilled,
    MdDirectionsCar,
    MdDirectionsRailwayFilled,
    MdDirectionsRailway,
    MdDirectionsRun,
    MdDirectionsSubwayFilled,
    MdDirectionsSubway,
    MdDirectionsTransitFilled,
    MdDirectionsTransit,
    MdDirectionsWalk,
    MdDirections,
    MdDryCleaning,
    MdEditAttributes,
    MdEditLocationAlt,
    MdEditLocation,
    MdEditRoad,
    MdEggAlt,
    MdEgg,
    MdElectricBike,
    MdElectricCar,
    MdElectricMoped,
    MdElectricRickshaw,
    MdElectricScooter,
    MdElectricalServices,
    MdEmergencyRecording,
    MdEmergencyShare,
    MdEmergency,
    MdEvStation,
    MdFactory,
    MdFastfood,
    MdFestival,
    MdFireHydrantAlt,
    MdFireTruck,
    MdFlightClass,
    MdFlight,
    MdForest,
    MdForkLeft,
    MdForkRight,
    MdFort,
    MdHail,
    MdHandyman,
    MdHardware,
    MdHomeRepairService,
    MdHotel,
    MdHvac,
    MdIcecream,
    MdKebabDining,
    MdLayersClear,
    MdLayers,
    MdLiquor,
    MdLocalActivity,
    MdLocalAirport,
    MdLocalAtm,
    MdLocalBar,
    MdLocalCafe,
    MdLocalCarWash,
    MdLocalConvenienceStore,
    MdLocalDining,
    MdLocalDrink,
    MdLocalFireDepartment,
    MdLocalFlorist,
    MdLocalGasStation,
    MdLocalGroceryStore,
    MdLocalHospital,
    MdLocalHotel,
    MdLocalLaundryService,
    MdLocalLibrary,
    MdLocalMall,
    MdLocalMovies,
    MdLocalOffer,
    MdLocalParking,
    MdLocalPharmacy,
    MdLocalPhone,
    MdLocalPizza,
    MdLocalPlay,
    MdLocalPolice,
    MdLocalPostOffice,
    MdLocalPrintshop,
    MdLocalSee,
    MdLocalShipping,
    MdLocalTaxi,
    MdLocationPin,
    MdLunchDining,
    MdMap,
    MdMapsUgc,
    MdMedicalInformation,
    MdMedicalServices,
    MdMenuBook,
    MdMerge,
    MdMinorCrash,
    MdMiscellaneousServices,
    MdModeOfTravel,
    MdMoney,
    MdMoped,
    MdMosque,
    MdMoving,
    MdMultipleStop,
    MdMuseum,
    MdMyLocation,
    MdNavigation,
    MdNearMeDisabled,
    MdNearMe,
    MdNightlife,
    MdNoCrash,
    MdNoMealsOuline,
    MdNoMeals,
    MdNoTransfer,
    MdNotListedLocation,
    MdPark,
    MdPedalBike,
    MdPersonPinCircle,
    MdPersonPin,
    MdPestControlRodent,
    MdPestControl,
    MdPinDrop,
    MdPlace,
    MdPlumbing,
    MdRailwayAlert,
    MdRamenDining,
    MdRampLeft,
    MdRampRight,
    MdRateReview,
    MdRemoveRoad,
    MdRestaurantMenu,
    MdRestaurant,
    MdRoundaboutLeft,
    MdRoundaboutRight,
    MdRoute,
    MdRunCircle,
    MdSafetyCheck,
    MdSailing,
    MdSatellite,
    MdScreenRotationAlt,
    MdSetMeal,
    MdSignpost,
    MdSnowmobile,
    MdSos,
    MdSoupKitchen,
    MdStadium,
    MdStoreMallDirectory,
    MdStraight,
    MdStreetview,
    MdSubway,
    MdSynagogue,
    MdTakeoutDining,
    MdTaxiAlert,
    MdTempleBuddhist,
    MdTempleHindu,
    MdTerrain,
    MdTheaterComedy,
    MdTireRepair,
    MdTraffic,
    MdTrain,
    MdTram,
    MdTransferWithinAStation,
    MdTransitEnterexit,
    MdTripOrigin,
    MdTurnLeft,
    MdTurnRight,
    MdTurnSharpLeft,
    MdTurnSharpRight,
    MdTurnSlightLeft,
    MdTurnSlightRight,
    MdTwoWheeler,
    MdUTurnLeft,
    MdUTurnRight,
    MdVolunteerActivism,
    MdWarehouse,
    MdWineBar,
    MdWrongLocation,
    MdZoomInMap,
    MdZoomOutMap,
    MdAddHomeWork,
    MdAppSettingsAlt,
    MdAppsOutage,
    MdApps,
    MdArrowBackIosNew,
    MdArrowBackIos,
    MdArrowBack,
    MdArrowDownward,
    MdArrowDropDownCircle,
    MdArrowDropDown,
    MdArrowDropUp,
    MdArrowForwardIos,
    MdArrowForward,
    MdArrowLeft,
    MdArrowRight,
    MdArrowUpward,
    MdAssistantDirection,
    MdAssistantNavigation,
    MdCampaign,
    MdCancel,
    MdCheck,
    MdChevronLeft,
    MdChevronRight,
    MdClose,
    MdDoubleArrow,
    MdEast,
    MdExpandCircleDown,
    MdExpandLess,
    MdExpandMore,
    MdFirstPage,
    MdFullscreenExit,
    MdFullscreen,
    MdHomeWork,
    MdLastPage,
    MdLegendToggle,
    MdMapsHomeWork,
    MdMenuOpen,
    MdMenu,
    MdMoreHoriz,
    MdMoreVert,
    MdNorthEast,
    MdNorthWest,
    MdNorth,
    MdOfflineShare,
    MdPayments,
    MdPivotTableChart,
    MdRefresh,
    MdSouthEast,
    MdSouthWest,
    MdSouth,
    MdSubdirectoryArrowLeft,
    MdSubdirectoryArrowRight,
    MdSwitchLeft,
    MdSwitchRight,
    MdUnfoldLess,
    MdUnfoldMore,
    MdWaterfallChart,
    MdWest,
    MdAccountTree,
    MdAdb,
    MdAddCall,
    MdAirlineSeatFlatAngled,
    MdAirlineSeatFlat,
    MdAirlineSeatIndividualSuite,
    MdAirlineSeatLegroomExtra,
    MdAirlineSeatLegroomNormal,
    MdAirlineSeatLegroomReduced,
    MdAirlineSeatReclineExtra,
    MdAirlineSeatReclineNormal,
    MdBluetoothAudio,
    MdConfirmationNumber,
    MdDirectionsOff,
    MdDiscFull,
    MdDoDisturbAlt,
    MdDoDisturbOff,
    MdDoDisturbOn,
    MdDoDisturb,
    MdDoNotDisturbAlt,
    MdDoNotDisturbOff,
    MdDoNotDisturbOn,
    MdDoNotDisturb,
    MdDriveEta,
    MdEnhancedEncryption,
    MdEventAvailable,
    MdEventBusy,
    MdEventNote,
    MdFolderSpecial,
    MdImagesearchRoller,
    MdLiveTv,
    MdMms,
    MdMore,
    MdNetworkCheck,
    MdNetworkLocked,
    MdNoEncryptionGmailerrorred,
    MdNoEncryption,
    MdOndemandVideo,
    MdPersonalVideo,
    MdPhoneBluetoothSpeaker,
    MdPhoneCallback,
    MdPhoneForwarded,
    MdPhoneInTalk,
    MdPhoneLocked,
    MdPhoneMissed,
    MdPhonePaused,
    MdPowerOff,
    MdPower,
    MdPriorityHigh,
    MdRunningWithErrors,
    MdSdCardAlert,
    MdSdCard,
    MdSimCardAlert,
    MdSmsFailed,
    MdSms,
    MdSupportAgent,
    MdSyncDisabled,
    MdSyncLock,
    MdSyncProblem,
    MdSync,
    MdSystemUpdate,
    MdTapAndPlay,
    MdTimeToLeave,
    MdTvOff,
    MdVibration,
    MdVideoChat,
    MdVoiceChat,
    MdVpnLock,
    MdWc,
    MdWifiOff,
    MdWifi,
    MdAcUnit,
    MdAirportShuttle,
    MdAllInclusive,
    MdApartment,
    MdBabyChangingStation,
    MdBackpack,
    MdBalcony,
    MdBathtub,
    MdBeachAccess,
    MdBento,
    MdBungalow,
    MdBusinessCenter,
    MdCabin,
    MdCarpenter,
    MdCasino,
    MdChalet,
    MdChargingStation,
    MdCheckroom,
    MdChildCare,
    MdChildFriendly,
    MdCorporateFare,
    MdCottage,
    MdCountertops,
    MdCrib,
    MdDesk,
    MdDoNotStep,
    MdDoNotTouch,
    MdDry,
    MdElevator,
    MdEscalatorWarning,
    MdEscalator,
    MdFamilyRestroom,
    MdFence,
    MdFireExtinguisher,
    MdFitnessCenter,
    MdFoodBank,
    MdFoundation,
    MdFreeBreakfast,
    MdGite,
    MdGolfCourse,
    MdGrass,
    MdHolidayVillage,
    MdHotTub,
    MdHouseSiding,
    MdHouse,
    MdHouseboat,
    MdIron,
    MdKitchen,
    MdMeetingRoom,
    MdMicrowave,
    MdNightShelter,
    MdNoBackpack,
    MdNoCell,
    MdNoDrinks,
    MdNoFlash,
    MdNoFood,
    MdNoMeetingRoom,
    MdNoPhotography,
    MdNoStroller,
    MdOtherHouses,
    MdPool,
    MdRiceBowl,
    MdRoofing,
    MdRoomPreferences,
    MdRoomService,
    MdRvHookup,
    MdSmokeFree,
    MdSmokingRooms,
    MdSoap,
    MdSpa,
    MdSportsBar,
    MdStairs,
    MdStorefront,
    MdStroller,
    MdTapas,
    MdTty,
    MdUmbrella,
    MdVapeFree,
    MdVapingRooms,
    MdVilla,
    MdWash,
    MdWaterDamage,
    MdWheelchairPickup,
    MdBathroom,
    MdBed,
    MdBedroomBaby,
    MdBedroomChild,
    MdBedroomParent,
    MdBlender,
    MdCameraIndoor,
    MdCameraOutdoor,
    MdChairAlt,
    MdChair,
    MdCoffeeMaker,
    MdCoffee,
    MdDining,
    MdDoorBack,
    MdDoorFront,
    MdDoorSliding,
    MdDoorbell,
    MdFeed,
    MdFlatware,
    MdGarage,
    MdLight,
    MdLiving,
    MdManageSearch,
    MdPodcasts,
    MdShower,
    MdTableBar,
    MdTableRestaurant,
    MdWindow,
    MdYard,
    Md18UpRating,
    Md6FtApart,
    MdAddModerator,
    MdAddReaction,
    MdArchitecture,
    MdAssistWalker,
    MdBackHand,
    MdBlind,
    MdBoy,
    MdCake,
    MdCatchingPokemon,
    MdCleanHands,
    MdCo2,
    MdCompost,
    MdConnectWithoutContact,
    MdConstruction,
    MdCookie,
    MdCoronavirus,
    MdCrueltyFree,
    MdCyclone,
    MdDeck,
    MdDewPoint,
    MdDiversity1,
    MdDiversity2,
    MdDiversity3,
    MdDomainAdd,
    MdDomain,
    MdDownhillSkiing,
    MdEditNotifications,
    MdElderlyWoman,
    MdElderly,
    MdEmojiEmotions,
    MdEmojiEvents,
    MdEmojiFlags,
} from "react-icons/md"

export function nameToReactIcon_md_1(iconName: string): IconType | undefined {

    switch(iconName) {
        case "md:MdBorderRight":
            return MdBorderRight;
        case "md:MdBorderStyle":
            return MdBorderStyle;
        case "md:MdBorderTop":
            return MdBorderTop;
        case "md:MdBorderVertical":
            return MdBorderVertical;
        case "md:MdBubbleChart":
            return MdBubbleChart;
        case "md:MdCandlestickChart":
            return MdCandlestickChart;
        case "md:MdChecklistRtl":
            return MdChecklistRtl;
        case "md:MdChecklist":
            return MdChecklist;
        case "md:MdDataArray":
            return MdDataArray;
        case "md:MdDataObject":
            return MdDataObject;
        case "md:MdDragHandle":
            return MdDragHandle;
        case "md:MdDraw":
            return MdDraw;
        case "md:MdEditNote":
            return MdEditNote;
        case "md:MdFormatAlignCenter":
            return MdFormatAlignCenter;
        case "md:MdFormatAlignJustify":
            return MdFormatAlignJustify;
        case "md:MdFormatAlignLeft":
            return MdFormatAlignLeft;
        case "md:MdFormatAlignRight":
            return MdFormatAlignRight;
        case "md:MdFormatBold":
            return MdFormatBold;
        case "md:MdFormatClear":
            return MdFormatClear;
        case "md:MdFormatColorFill":
            return MdFormatColorFill;
        case "md:MdFormatColorReset":
            return MdFormatColorReset;
        case "md:MdFormatColorText":
            return MdFormatColorText;
        case "md:MdFormatIndentDecrease":
            return MdFormatIndentDecrease;
        case "md:MdFormatIndentIncrease":
            return MdFormatIndentIncrease;
        case "md:MdFormatItalic":
            return MdFormatItalic;
        case "md:MdFormatLineSpacing":
            return MdFormatLineSpacing;
        case "md:MdFormatListBulletedAdd":
            return MdFormatListBulletedAdd;
        case "md:MdFormatListBulleted":
            return MdFormatListBulleted;
        case "md:MdFormatListNumberedRtl":
            return MdFormatListNumberedRtl;
        case "md:MdFormatListNumbered":
            return MdFormatListNumbered;
        case "md:MdFormatPaint":
            return MdFormatPaint;
        case "md:MdFormatQuote":
            return MdFormatQuote;
        case "md:MdFormatShapes":
            return MdFormatShapes;
        case "md:MdFormatSize":
            return MdFormatSize;
        case "md:MdFormatStrikethrough":
            return MdFormatStrikethrough;
        case "md:MdFormatTextdirectionLToR":
            return MdFormatTextdirectionLToR;
        case "md:MdFormatTextdirectionRToL":
            return MdFormatTextdirectionRToL;
        case "md:MdFormatUnderlined":
            return MdFormatUnderlined;
        case "md:MdFunctions":
            return MdFunctions;
        case "md:MdHeight":
            return MdHeight;
        case "md:MdHexagon":
            return MdHexagon;
        case "md:MdHighlight":
            return MdHighlight;
        case "md:MdHorizontalDistribute":
            return MdHorizontalDistribute;
        case "md:MdHorizontalRule":
            return MdHorizontalRule;
        case "md:MdInsertChartOutlined":
            return MdInsertChartOutlined;
        case "md:MdInsertChart":
            return MdInsertChart;
        case "md:MdInsertComment":
            return MdInsertComment;
        case "md:MdInsertDriveFile":
            return MdInsertDriveFile;
        case "md:MdInsertEmoticon":
            return MdInsertEmoticon;
        case "md:MdInsertInvitation":
            return MdInsertInvitation;
        case "md:MdInsertLink":
            return MdInsertLink;
        case "md:MdInsertPageBreak":
            return MdInsertPageBreak;
        case "md:MdInsertPhoto":
            return MdInsertPhoto;
        case "md:MdLineAxis":
            return MdLineAxis;
        case "md:MdLinearScale":
            return MdLinearScale;
        case "md:MdMargin":
            return MdMargin;
        case "md:MdMergeType":
            return MdMergeType;
        case "md:MdModeComment":
            return MdModeComment;
        case "md:MdModeEditOutline":
            return MdModeEditOutline;
        case "md:MdModeEdit":
            return MdModeEdit;
        case "md:MdMode":
            return MdMode;
        case "md:MdMonetizationOn":
            return MdMonetizationOn;
        case "md:MdMoneyOffCsred":
            return MdMoneyOffCsred;
        case "md:MdMoneyOff":
            return MdMoneyOff;
        case "md:MdMoveDown":
            return MdMoveDown;
        case "md:MdMoveUp":
            return MdMoveUp;
        case "md:MdMultilineChart":
            return MdMultilineChart;
        case "md:MdNotes":
            return MdNotes;
        case "md:MdNumbers":
            return MdNumbers;
        case "md:MdPadding":
            return MdPadding;
        case "md:MdPentagon":
            return MdPentagon;
        case "md:MdPieChartOutline":
            return MdPieChartOutline;
        case "md:MdPieChartOutlined":
            return MdPieChartOutlined;
        case "md:MdPieChart":
            return MdPieChart;
        case "md:MdPolyline":
            return MdPolyline;
        case "md:MdPostAdd":
            return MdPostAdd;
        case "md:MdPublish":
            return MdPublish;
        case "md:MdQueryStats":
            return MdQueryStats;
        case "md:MdRectangle":
            return MdRectangle;
        case "md:MdScatterPlot":
            return MdScatterPlot;
        case "md:MdSchema":
            return MdSchema;
        case "md:MdScore":
            return MdScore;
        case "md:MdShapeLine":
            return MdShapeLine;
        case "md:MdShortText":
            return MdShortText;
        case "md:MdShowChart":
            return MdShowChart;
        case "md:MdSpaceBar":
            return MdSpaceBar;
        case "md:MdSquare":
            return MdSquare;
        case "md:MdStackedLineChart":
            return MdStackedLineChart;
        case "md:MdStrikethroughS":
            return MdStrikethroughS;
        case "md:MdSubscript":
            return MdSubscript;
        case "md:MdSuperscript":
            return MdSuperscript;
        case "md:MdTableChart":
            return MdTableChart;
        case "md:MdTableRows":
            return MdTableRows;
        case "md:MdTextDecrease":
            return MdTextDecrease;
        case "md:MdTextFields":
            return MdTextFields;
        case "md:MdTextIncrease":
            return MdTextIncrease;
        case "md:MdTitle":
            return MdTitle;
        case "md:MdTypeSpecimen":
            return MdTypeSpecimen;
        case "md:MdVerticalAlignBottom":
            return MdVerticalAlignBottom;
        case "md:MdVerticalAlignCenter":
            return MdVerticalAlignCenter;
        case "md:MdVerticalAlignTop":
            return MdVerticalAlignTop;
        case "md:MdVerticalDistribute":
            return MdVerticalDistribute;
        case "md:MdWrapText":
            return MdWrapText;
        case "md:MdApproval":
            return MdApproval;
        case "md:MdAttachEmail":
            return MdAttachEmail;
        case "md:MdAttachment":
            return MdAttachment;
        case "md:MdCloudCircle":
            return MdCloudCircle;
        case "md:MdCloudDone":
            return MdCloudDone;
        case "md:MdCloudDownload":
            return MdCloudDownload;
        case "md:MdCloudOff":
            return MdCloudOff;
        case "md:MdCloudQueue":
            return MdCloudQueue;
        case "md:MdCloudSync":
            return MdCloudSync;
        case "md:MdCloudUpload":
            return MdCloudUpload;
        case "md:MdCloud":
            return MdCloud;
        case "md:MdCreateNewFolder":
            return MdCreateNewFolder;
        case "md:MdDifference":
            return MdDifference;
        case "md:MdDownloadDone":
            return MdDownloadDone;
        case "md:MdDownloadForOffline":
            return MdDownloadForOffline;
        case "md:MdDownload":
            return MdDownload;
        case "md:MdDownloading":
            return MdDownloading;
        case "md:MdDriveFileMoveOutline":
            return MdDriveFileMoveOutline;
        case "md:MdDriveFileMoveRtl":
            return MdDriveFileMoveRtl;
        case "md:MdDriveFileMove":
            return MdDriveFileMove;
        case "md:MdDriveFileRenameOutline":
            return MdDriveFileRenameOutline;
        case "md:MdDriveFolderUpload":
            return MdDriveFolderUpload;
        case "md:MdFileDownloadDone":
            return MdFileDownloadDone;
        case "md:MdFileDownloadOff":
            return MdFileDownloadOff;
        case "md:MdFileDownload":
            return MdFileDownload;
        case "md:MdFileOpen":
            return MdFileOpen;
        case "md:MdFileUploadOff":
            return MdFileUploadOff;
        case "md:MdFileUpload":
            return MdFileUpload;
        case "md:MdFolderCopy":
            return MdFolderCopy;
        case "md:MdFolderDelete":
            return MdFolderDelete;
        case "md:MdFolderOff":
            return MdFolderOff;
        case "md:MdFolderOpen":
            return MdFolderOpen;
        case "md:MdFolderShared":
            return MdFolderShared;
        case "md:MdFolderZip":
            return MdFolderZip;
        case "md:MdFolder":
            return MdFolder;
        case "md:MdFormatOverline":
            return MdFormatOverline;
        case "md:MdGridView":
            return MdGridView;
        case "md:MdNewspaper":
            return MdNewspaper;
        case "md:MdRequestQuote":
            return MdRequestQuote;
        case "md:MdRuleFolder":
            return MdRuleFolder;
        case "md:MdSnippetFolder":
            return MdSnippetFolder;
        case "md:MdTextSnippet":
            return MdTextSnippet;
        case "md:MdTopic":
            return MdTopic;
        case "md:MdUploadFile":
            return MdUploadFile;
        case "md:MdUpload":
            return MdUpload;
        case "md:MdWorkspacesFilled":
            return MdWorkspacesFilled;
        case "md:MdWorkspacesOutline":
            return MdWorkspacesOutline;
        case "md:MdWorkspaces":
            return MdWorkspaces;
        case "md:MdAdfScanner":
            return MdAdfScanner;
        case "md:MdBrowserNotSupported":
            return MdBrowserNotSupported;
        case "md:MdBrowserUpdated":
            return MdBrowserUpdated;
        case "md:MdCastConnected":
            return MdCastConnected;
        case "md:MdCastForEducation":
            return MdCastForEducation;
        case "md:MdCast":
            return MdCast;
        case "md:MdComputer":
            return MdComputer;
        case "md:MdConnectedTv":
            return MdConnectedTv;
        case "md:MdConveyorBelt":
            return MdConveyorBelt;
        case "md:MdDesktopMac":
            return MdDesktopMac;
        case "md:MdDesktopWindows":
            return MdDesktopWindows;
        case "md:MdDeveloperBoardOff":
            return MdDeveloperBoardOff;
        case "md:MdDeveloperBoard":
            return MdDeveloperBoard;
        case "md:MdDeviceHub":
            return MdDeviceHub;
        case "md:MdDeviceUnknown":
            return MdDeviceUnknown;
        case "md:MdDevicesOther":
            return MdDevicesOther;
        case "md:MdDock":
            return MdDock;
        case "md:MdEarbudsBattery":
            return MdEarbudsBattery;
        case "md:MdEarbuds":
            return MdEarbuds;
        case "md:MdForklift":
            return MdForklift;
        case "md:MdFrontLoader":
            return MdFrontLoader;
        case "md:MdGamepad":
            return MdGamepad;
        case "md:MdHeadphonesBattery":
            return MdHeadphonesBattery;
        case "md:MdHeadphones":
            return MdHeadphones;
        case "md:MdHeadsetMic":
            return MdHeadsetMic;
        case "md:MdHeadsetOff":
            return MdHeadsetOff;
        case "md:MdHeadset":
            return MdHeadset;
        case "md:MdHomeMax":
            return MdHomeMax;
        case "md:MdHomeMini":
            return MdHomeMini;
        case "md:MdKeyboardAlt":
            return MdKeyboardAlt;
        case "md:MdKeyboardArrowDown":
            return MdKeyboardArrowDown;
        case "md:MdKeyboardArrowLeft":
            return MdKeyboardArrowLeft;
        case "md:MdKeyboardArrowRight":
            return MdKeyboardArrowRight;
        case "md:MdKeyboardArrowUp":
            return MdKeyboardArrowUp;
        case "md:MdKeyboardBackspace":
            return MdKeyboardBackspace;
        case "md:MdKeyboardCapslock":
            return MdKeyboardCapslock;
        case "md:MdKeyboardCommandKey":
            return MdKeyboardCommandKey;
        case "md:MdKeyboardControlKey":
            return MdKeyboardControlKey;
        case "md:MdKeyboardDoubleArrowDown":
            return MdKeyboardDoubleArrowDown;
        case "md:MdKeyboardDoubleArrowLeft":
            return MdKeyboardDoubleArrowLeft;
        case "md:MdKeyboardDoubleArrowRight":
            return MdKeyboardDoubleArrowRight;
        case "md:MdKeyboardDoubleArrowUp":
            return MdKeyboardDoubleArrowUp;
        case "md:MdKeyboardHide":
            return MdKeyboardHide;
        case "md:MdKeyboardOptionKey":
            return MdKeyboardOptionKey;
        case "md:MdKeyboardReturn":
            return MdKeyboardReturn;
        case "md:MdKeyboardTab":
            return MdKeyboardTab;
        case "md:MdKeyboardVoice":
            return MdKeyboardVoice;
        case "md:MdKeyboard":
            return MdKeyboard;
        case "md:MdLaptopChromebook":
            return MdLaptopChromebook;
        case "md:MdLaptopMac":
            return MdLaptopMac;
        case "md:MdLaptopWindows":
            return MdLaptopWindows;
        case "md:MdLaptop":
            return MdLaptop;
        case "md:MdMemory":
            return MdMemory;
        case "md:MdMonitor":
            return MdMonitor;
        case "md:MdMouse":
            return MdMouse;
        case "md:MdPallet":
            return MdPallet;
        case "md:MdPhoneAndroid":
            return MdPhoneAndroid;
        case "md:MdPhoneIphone":
            return MdPhoneIphone;
        case "md:MdPhonelinkOff":
            return MdPhonelinkOff;
        case "md:MdPhonelink":
            return MdPhonelink;
        case "md:MdPointOfSale":
            return MdPointOfSale;
        case "md:MdPowerInput":
            return MdPowerInput;
        case "md:MdRouter":
            return MdRouter;
        case "md:MdScanner":
            return MdScanner;
        case "md:MdSecurity":
            return MdSecurity;
        case "md:MdSimCard":
            return MdSimCard;
        case "md:MdSmartDisplay":
            return MdSmartDisplay;
        case "md:MdSmartScreen":
            return MdSmartScreen;
        case "md:MdSmartToy":
            return MdSmartToy;
        case "md:MdSmartphone":
            return MdSmartphone;
        case "md:MdSpeakerGroup":
            return MdSpeakerGroup;
        case "md:MdSpeaker":
            return MdSpeaker;
        case "md:MdStart":
            return MdStart;
        case "md:MdTabletAndroid":
            return MdTabletAndroid;
        case "md:MdTabletMac":
            return MdTabletMac;
        case "md:MdTablet":
            return MdTablet;
        case "md:MdToys":
            return MdToys;
        case "md:MdTrolley":
            return MdTrolley;
        case "md:MdTv":
            return MdTv;
        case "md:MdVideogameAssetOff":
            return MdVideogameAssetOff;
        case "md:MdVideogameAsset":
            return MdVideogameAsset;
        case "md:MdWatchOff":
            return MdWatchOff;
        case "md:MdWatch":
            return MdWatch;
        case "md:MdAutoMode":
            return MdAutoMode;
        case "md:MdBlindsClosed":
            return MdBlindsClosed;
        case "md:MdBlinds":
            return MdBlinds;
        case "md:MdBroadcastOnHome":
            return MdBroadcastOnHome;
        case "md:MdBroadcastOnPersonal":
            return MdBroadcastOnPersonal;
        case "md:MdCloudySnowing":
            return MdCloudySnowing;
        case "md:MdCurtainsClosed":
            return MdCurtainsClosed;
        case "md:MdCurtains":
            return MdCurtains;
        case "md:MdElectricBolt":
            return MdElectricBolt;
        case "md:MdElectricMeter":
            return MdElectricMeter;
        case "md:MdEnergySavingsLeaf":
            return MdEnergySavingsLeaf;
        case "md:MdFoggy":
            return MdFoggy;
        case "md:MdGasMeter":
            return MdGasMeter;
        case "md:MdHeatPump":
            return MdHeatPump;
        case "md:MdModeFanOff":
            return MdModeFanOff;
        case "md:MdNestCamWiredStand":
            return MdNestCamWiredStand;
        case "md:MdOilBarrel":
            return MdOilBarrel;
        case "md:MdPropaneTank":
            return MdPropaneTank;
        case "md:MdPropane":
            return MdPropane;
        case "md:MdRollerShadesClosed":
            return MdRollerShadesClosed;
        case "md:MdRollerShades":
            return MdRollerShades;
        case "md:MdSensorDoor":
            return MdSensorDoor;
        case "md:MdSensorOccupied":
            return MdSensorOccupied;
        case "md:MdSensorWindow":
            return MdSensorWindow;
        case "md:MdShelves":
            return MdShelves;
        case "md:MdShieldMoon":
            return MdShieldMoon;
        case "md:MdSnowing":
            return MdSnowing;
        case "md:MdSolarPower":
            return MdSolarPower;
        case "md:MdSunnySnowing":
            return MdSunnySnowing;
        case "md:MdSunny":
            return MdSunny;
        case "md:MdVerticalShadesClosed":
            return MdVerticalShadesClosed;
        case "md:MdVerticalShades":
            return MdVerticalShades;
        case "md:MdWindPower":
            return MdWindPower;
        case "md:Md10Mp":
            return Md10Mp;
        case "md:Md11Mp":
            return Md11Mp;
        case "md:Md12Mp":
            return Md12Mp;
        case "md:Md13Mp":
            return Md13Mp;
        case "md:Md14Mp":
            return Md14Mp;
        case "md:Md15Mp":
            return Md15Mp;
        case "md:Md16Mp":
            return Md16Mp;
        case "md:Md17Mp":
            return Md17Mp;
        case "md:Md18Mp":
            return Md18Mp;
        case "md:Md19Mp":
            return Md19Mp;
        case "md:Md20Mp":
            return Md20Mp;
        case "md:Md21Mp":
            return Md21Mp;
        case "md:Md22Mp":
            return Md22Mp;
        case "md:Md23Mp":
            return Md23Mp;
        case "md:Md24Mp":
            return Md24Mp;
        case "md:Md2Mp":
            return Md2Mp;
        case "md:Md30FpsSelect":
            return Md30FpsSelect;
        case "md:Md3Mp":
            return Md3Mp;
        case "md:Md4Mp":
            return Md4Mp;
        case "md:Md5Mp":
            return Md5Mp;
        case "md:Md60FpsSelect":
            return Md60FpsSelect;
        case "md:Md6Mp":
            return Md6Mp;
        case "md:Md7Mp":
            return Md7Mp;
        case "md:Md8Mp":
            return Md8Mp;
        case "md:Md9Mp":
            return Md9Mp;
        case "md:MdAddAPhoto":
            return MdAddAPhoto;
        case "md:MdAddPhotoAlternate":
            return MdAddPhotoAlternate;
        case "md:MdAddToPhotos":
            return MdAddToPhotos;
        case "md:MdAdjust":
            return MdAdjust;
        case "md:MdAnimation":
            return MdAnimation;
        case "md:MdAssistantPhoto":
            return MdAssistantPhoto;
        case "md:MdAssistant":
            return MdAssistant;
        case "md:MdAudiotrack":
            return MdAudiotrack;
        case "md:MdAutoAwesomeMosaic":
            return MdAutoAwesomeMosaic;
        case "md:MdAutoAwesomeMotion":
            return MdAutoAwesomeMotion;
        case "md:MdAutoAwesome":
            return MdAutoAwesome;
        case "md:MdAutoFixHigh":
            return MdAutoFixHigh;
        case "md:MdAutoFixNormal":
            return MdAutoFixNormal;
        case "md:MdAutoFixOff":
            return MdAutoFixOff;
        case "md:MdAutoStories":
            return MdAutoStories;
        case "md:MdAutofpsSelect":
            return MdAutofpsSelect;
        case "md:MdBedtimeOff":
            return MdBedtimeOff;
        case "md:MdBedtime":
            return MdBedtime;
        case "md:MdBlurCircular":
            return MdBlurCircular;
        case "md:MdBlurLinear":
            return MdBlurLinear;
        case "md:MdBlurOff":
            return MdBlurOff;
        case "md:MdBlurOn":
            return MdBlurOn;
        case "md:MdBrightness1":
            return MdBrightness1;
        case "md:MdBrightness2":
            return MdBrightness2;
        case "md:MdBrightness3":
            return MdBrightness3;
        case "md:MdBrightness4":
            return MdBrightness4;
        case "md:MdBrightness5":
            return MdBrightness5;
        case "md:MdBrightness6":
            return MdBrightness6;
        case "md:MdBrightness7":
            return MdBrightness7;
        case "md:MdBrokenImage":
            return MdBrokenImage;
        case "md:MdBrush":
            return MdBrush;
        case "md:MdBurstMode":
            return MdBurstMode;
        case "md:MdCameraAlt":
            return MdCameraAlt;
        case "md:MdCameraFront":
            return MdCameraFront;
        case "md:MdCameraRear":
            return MdCameraRear;
        case "md:MdCameraRoll":
            return MdCameraRoll;
        case "md:MdCamera":
            return MdCamera;
        case "md:MdCases":
            return MdCases;
        case "md:MdCenterFocusStrong":
            return MdCenterFocusStrong;
        case "md:MdCenterFocusWeak":
            return MdCenterFocusWeak;
        case "md:MdCircle":
            return MdCircle;
        case "md:MdCollectionsBookmark":
            return MdCollectionsBookmark;
        case "md:MdCollections":
            return MdCollections;
        case "md:MdColorLens":
            return MdColorLens;
        case "md:MdColorize":
            return MdColorize;
        case "md:MdCompare":
            return MdCompare;
        case "md:MdContrast":
            return MdContrast;
        case "md:MdControlPointDuplicate":
            return MdControlPointDuplicate;
        case "md:MdControlPoint":
            return MdControlPoint;
        case "md:MdCrop169":
            return MdCrop169;
        case "md:MdCrop32":
            return MdCrop32;
        case "md:MdCrop54":
            return MdCrop54;
        case "md:MdCrop75":
            return MdCrop75;
        case "md:MdCropDin":
            return MdCropDin;
        case "md:MdCropFree":
            return MdCropFree;
        case "md:MdCropLandscape":
            return MdCropLandscape;
        case "md:MdCropOriginal":
            return MdCropOriginal;
        case "md:MdCropPortrait":
            return MdCropPortrait;
        case "md:MdCropRotate":
            return MdCropRotate;
        case "md:MdCropSquare":
            return MdCropSquare;
        case "md:MdCrop":
            return MdCrop;
        case "md:MdCurrencyBitcoin":
            return MdCurrencyBitcoin;
        case "md:MdCurrencyFranc":
            return MdCurrencyFranc;
        case "md:MdCurrencyLira":
            return MdCurrencyLira;
        case "md:MdCurrencyPound":
            return MdCurrencyPound;
        case "md:MdCurrencyRuble":
            return MdCurrencyRuble;
        case "md:MdCurrencyRupee":
            return MdCurrencyRupee;
        case "md:MdCurrencyYen":
            return MdCurrencyYen;
        case "md:MdCurrencyYuan":
            return MdCurrencyYuan;
        case "md:MdDeblur":
            return MdDeblur;
        case "md:MdDehaze":
            return MdDehaze;
        case "md:MdDetails":
            return MdDetails;
        case "md:MdDirtyLens":
            return MdDirtyLens;
        case "md:MdEdit":
            return MdEdit;
        case "md:MdEuro":
            return MdEuro;
        case "md:MdExposureNeg1":
            return MdExposureNeg1;
        case "md:MdExposureNeg2":
            return MdExposureNeg2;
        case "md:MdExposurePlus1":
            return MdExposurePlus1;
        case "md:MdExposurePlus2":
            return MdExposurePlus2;
        case "md:MdExposureZero":
            return MdExposureZero;
        case "md:MdExposure":
            return MdExposure;
        case "md:MdFaceRetouchingNatural":
            return MdFaceRetouchingNatural;
        case "md:MdFaceRetouchingOff":
            return MdFaceRetouchingOff;
        case "md:MdFilter1":
            return MdFilter1;
        case "md:MdFilter2":
            return MdFilter2;
        case "md:MdFilter3":
            return MdFilter3;
        case "md:MdFilter4":
            return MdFilter4;
        case "md:MdFilter5":
            return MdFilter5;
        case "md:MdFilter6":
            return MdFilter6;
        case "md:MdFilter7":
            return MdFilter7;
        case "md:MdFilter8":
            return MdFilter8;
        case "md:MdFilter9Plus":
            return MdFilter9Plus;
        case "md:MdFilter9":
            return MdFilter9;
        case "md:MdFilterBAndW":
            return MdFilterBAndW;
        case "md:MdFilterCenterFocus":
            return MdFilterCenterFocus;
        case "md:MdFilterDrama":
            return MdFilterDrama;
        case "md:MdFilterFrames":
            return MdFilterFrames;
        case "md:MdFilterHdr":
            return MdFilterHdr;
        case "md:MdFilterNone":
            return MdFilterNone;
        case "md:MdFilterTiltShift":
            return MdFilterTiltShift;
        case "md:MdFilterVintage":
            return MdFilterVintage;
        case "md:MdFilter":
            return MdFilter;
        case "md:MdFlare":
            return MdFlare;
        case "md:MdFlashAuto":
            return MdFlashAuto;
        case "md:MdFlashOff":
            return MdFlashOff;
        case "md:MdFlashOn":
            return MdFlashOn;
        case "md:MdFlipCameraAndroid":
            return MdFlipCameraAndroid;
        case "md:MdFlipCameraIos":
            return MdFlipCameraIos;
        case "md:MdFlip":
            return MdFlip;
        case "md:MdGradient":
            return MdGradient;
        case "md:MdGrain":
            return MdGrain;
        case "md:MdGridOff":
            return MdGridOff;
        case "md:MdGridOn":
            return MdGridOn;
        case "md:MdHdrEnhancedSelect":
            return MdHdrEnhancedSelect;
        case "md:MdHdrOff":
            return MdHdrOff;
        case "md:MdHdrOn":
            return MdHdrOn;
        case "md:MdHdrPlus":
            return MdHdrPlus;
        case "md:MdHdrStrong":
            return MdHdrStrong;
        case "md:MdHdrWeak":
            return MdHdrWeak;
        case "md:MdHealing":
            return MdHealing;
        case "md:MdHevc":
            return MdHevc;
        case "md:MdHideImage":
            return MdHideImage;
        case "md:MdImageAspectRatio":
            return MdImageAspectRatio;
        case "md:MdImageNotSupported":
            return MdImageNotSupported;
        case "md:MdImageSearch":
            return MdImageSearch;
        case "md:MdImage":
            return MdImage;
        case "md:MdIncompleteCircle":
            return MdIncompleteCircle;
        case "md:MdIso":
            return MdIso;
        case "md:MdLandscape":
            return MdLandscape;
        case "md:MdLeakAdd":
            return MdLeakAdd;
        case "md:MdLeakRemove":
            return MdLeakRemove;
        case "md:MdLens":
            return MdLens;
        case "md:MdLinkedCamera":
            return MdLinkedCamera;
        case "md:MdLogoDev":
            return MdLogoDev;
        case "md:MdLooks3":
            return MdLooks3;
        case "md:MdLooks4":
            return MdLooks4;
        case "md:MdLooks5":
            return MdLooks5;
        case "md:MdLooks6":
            return MdLooks6;
        case "md:MdLooksOne":
            return MdLooksOne;
        case "md:MdLooksTwo":
            return MdLooksTwo;
        case "md:MdLooks":
            return MdLooks;
        case "md:MdLoupe":
            return MdLoupe;
        case "md:MdMicExternalOff":
            return MdMicExternalOff;
        case "md:MdMicExternalOn":
            return MdMicExternalOn;
        case "md:MdMonochromePhotos":
            return MdMonochromePhotos;
        case "md:MdMotionPhotosAuto":
            return MdMotionPhotosAuto;
        case "md:MdMotionPhotosOff":
            return MdMotionPhotosOff;
        case "md:MdMotionPhotosOn":
            return MdMotionPhotosOn;
        case "md:MdMotionPhotosPause":
            return MdMotionPhotosPause;
        case "md:MdMotionPhotosPaused":
            return MdMotionPhotosPaused;
        case "md:MdMovieCreation":
            return MdMovieCreation;
        case "md:MdMovieFilter":
            return MdMovieFilter;
        case "md:MdMp":
            return MdMp;
        case "md:MdMusicNote":
            return MdMusicNote;
        case "md:MdMusicOff":
            return MdMusicOff;
        case "md:MdNaturePeople":
            return MdNaturePeople;
        case "md:MdNature":
            return MdNature;
        case "md:MdNavigateBefore":
            return MdNavigateBefore;
        case "md:MdNavigateNext":
            return MdNavigateNext;
        case "md:MdPalette":
            return MdPalette;
        case "md:MdPanoramaFishEye":
            return MdPanoramaFishEye;
        case "md:MdPanoramaHorizontalSelect":
            return MdPanoramaHorizontalSelect;
        case "md:MdPanoramaHorizontal":
            return MdPanoramaHorizontal;
        case "md:MdPanoramaPhotosphereSelect":
            return MdPanoramaPhotosphereSelect;
        case "md:MdPanoramaPhotosphere":
            return MdPanoramaPhotosphere;
        case "md:MdPanoramaVerticalSelect":
            return MdPanoramaVerticalSelect;
        case "md:MdPanoramaVertical":
            return MdPanoramaVertical;
        case "md:MdPanoramaWideAngleSelect":
            return MdPanoramaWideAngleSelect;
        case "md:MdPanoramaWideAngle":
            return MdPanoramaWideAngle;
        case "md:MdPanorama":
            return MdPanorama;
        case "md:MdPhotoAlbum":
            return MdPhotoAlbum;
        case "md:MdPhotoCameraBack":
            return MdPhotoCameraBack;
        case "md:MdPhotoCameraFront":
            return MdPhotoCameraFront;
        case "md:MdPhotoCamera":
            return MdPhotoCamera;
        case "md:MdPhotoFilter":
            return MdPhotoFilter;
        case "md:MdPhotoLibrary":
            return MdPhotoLibrary;
        case "md:MdPhotoSizeSelectActual":
            return MdPhotoSizeSelectActual;
        case "md:MdPhotoSizeSelectLarge":
            return MdPhotoSizeSelectLarge;
        case "md:MdPhotoSizeSelectSmall":
            return MdPhotoSizeSelectSmall;
        case "md:MdPhoto":
            return MdPhoto;
        case "md:MdPictureAsPdf":
            return MdPictureAsPdf;
        case "md:MdPortrait":
            return MdPortrait;
        case "md:MdRawOff":
            return MdRawOff;
        case "md:MdRawOn":
            return MdRawOn;
        case "md:MdReceiptLong":
            return MdReceiptLong;
        case "md:MdRemoveRedEye":
            return MdRemoveRedEye;
        case "md:MdRotate90DegreesCcw":
            return MdRotate90DegreesCcw;
        case "md:MdRotate90DegreesCw":
            return MdRotate90DegreesCw;
        case "md:MdRotateLeft":
            return MdRotateLeft;
        case "md:MdRotateRight":
            return MdRotateRight;
        case "md:MdShutterSpeed":
            return MdShutterSpeed;
        case "md:MdSlideshow":
            return MdSlideshow;
        case "md:MdStraighten":
            return MdStraighten;
        case "md:MdStyle":
            return MdStyle;
        case "md:MdSwitchCamera":
            return MdSwitchCamera;
        case "md:MdSwitchVideo":
            return MdSwitchVideo;
        case "md:MdTagFaces":
            return MdTagFaces;
        case "md:MdTexture":
            return MdTexture;
        case "md:MdThermostatAuto":
            return MdThermostatAuto;
        case "md:MdTimelapse":
            return MdTimelapse;
        case "md:MdTimer10":
            return MdTimer10;
        case "md:MdTimer3":
            return MdTimer3;
        case "md:MdTimerOff":
            return MdTimerOff;
        case "md:MdTimer":
            return MdTimer;
        case "md:MdTonality":
            return MdTonality;
        case "md:MdTransform":
            return MdTransform;
        case "md:MdTune":
            return MdTune;
        case "md:MdVideoCameraBack":
            return MdVideoCameraBack;
        case "md:MdVideoCameraFront":
            return MdVideoCameraFront;
        case "md:MdVideoStable":
            return MdVideoStable;
        case "md:MdViewComfy":
            return MdViewComfy;
        case "md:MdViewCompact":
            return MdViewCompact;
        case "md:MdVignette":
            return MdVignette;
        case "md:MdVrpano":
            return MdVrpano;
        case "md:MdWbAuto":
            return MdWbAuto;
        case "md:MdWbCloudy":
            return MdWbCloudy;
        case "md:MdWbIncandescent":
            return MdWbIncandescent;
        case "md:MdWbIridescent":
            return MdWbIridescent;
        case "md:MdWbShade":
            return MdWbShade;
        case "md:MdWbSunny":
            return MdWbSunny;
        case "md:MdWbTwighlight":
            return MdWbTwighlight;
        case "md:MdWbTwilight":
            return MdWbTwilight;
        case "md:Md360":
            return Md360;
        case "md:MdAddBusiness":
            return MdAddBusiness;
        case "md:MdAddLocationAlt":
            return MdAddLocationAlt;
        case "md:MdAddLocation":
            return MdAddLocation;
        case "md:MdAddRoad":
            return MdAddRoad;
        case "md:MdAgriculture":
            return MdAgriculture;
        case "md:MdAirlineStops":
            return MdAirlineStops;
        case "md:MdAirlines":
            return MdAirlines;
        case "md:MdAltRoute":
            return MdAltRoute;
        case "md:MdAtm":
            return MdAtm;
        case "md:MdAttractions":
            return MdAttractions;
        case "md:MdBadge":
            return MdBadge;
        case "md:MdBakeryDining":
            return MdBakeryDining;
        case "md:MdBeenhere":
            return MdBeenhere;
        case "md:MdBikeScooter":
            return MdBikeScooter;
        case "md:MdBreakfastDining":
            return MdBreakfastDining;
        case "md:MdBrunchDining":
            return MdBrunchDining;
        case "md:MdBusAlert":
            return MdBusAlert;
        case "md:MdCarCrash":
            return MdCarCrash;
        case "md:MdCarRental":
            return MdCarRental;
        case "md:MdCarRepair":
            return MdCarRepair;
        case "md:MdCastle":
            return MdCastle;
        case "md:MdCategory":
            return MdCategory;
        case "md:MdCelebration":
            return MdCelebration;
        case "md:MdChurch":
            return MdChurch;
        case "md:MdCleaningServices":
            return MdCleaningServices;
        case "md:MdCompassCalibration":
            return MdCompassCalibration;
        case "md:MdConnectingAirports":
            return MdConnectingAirports;
        case "md:MdCrisisAlert":
            return MdCrisisAlert;
        case "md:MdDeliveryDining":
            return MdDeliveryDining;
        case "md:MdDepartureBoard":
            return MdDepartureBoard;
        case "md:MdDesignServices":
            return MdDesignServices;
        case "md:MdDiamond":
            return MdDiamond;
        case "md:MdDinnerDining":
            return MdDinnerDining;
        case "md:MdDirectionsBike":
            return MdDirectionsBike;
        case "md:MdDirectionsBoatFilled":
            return MdDirectionsBoatFilled;
        case "md:MdDirectionsBoat":
            return MdDirectionsBoat;
        case "md:MdDirectionsBusFilled":
            return MdDirectionsBusFilled;
        case "md:MdDirectionsBus":
            return MdDirectionsBus;
        case "md:MdDirectionsCarFilled":
            return MdDirectionsCarFilled;
        case "md:MdDirectionsCar":
            return MdDirectionsCar;
        case "md:MdDirectionsRailwayFilled":
            return MdDirectionsRailwayFilled;
        case "md:MdDirectionsRailway":
            return MdDirectionsRailway;
        case "md:MdDirectionsRun":
            return MdDirectionsRun;
        case "md:MdDirectionsSubwayFilled":
            return MdDirectionsSubwayFilled;
        case "md:MdDirectionsSubway":
            return MdDirectionsSubway;
        case "md:MdDirectionsTransitFilled":
            return MdDirectionsTransitFilled;
        case "md:MdDirectionsTransit":
            return MdDirectionsTransit;
        case "md:MdDirectionsWalk":
            return MdDirectionsWalk;
        case "md:MdDirections":
            return MdDirections;
        case "md:MdDryCleaning":
            return MdDryCleaning;
        case "md:MdEditAttributes":
            return MdEditAttributes;
        case "md:MdEditLocationAlt":
            return MdEditLocationAlt;
        case "md:MdEditLocation":
            return MdEditLocation;
        case "md:MdEditRoad":
            return MdEditRoad;
        case "md:MdEggAlt":
            return MdEggAlt;
        case "md:MdEgg":
            return MdEgg;
        case "md:MdElectricBike":
            return MdElectricBike;
        case "md:MdElectricCar":
            return MdElectricCar;
        case "md:MdElectricMoped":
            return MdElectricMoped;
        case "md:MdElectricRickshaw":
            return MdElectricRickshaw;
        case "md:MdElectricScooter":
            return MdElectricScooter;
        case "md:MdElectricalServices":
            return MdElectricalServices;
        case "md:MdEmergencyRecording":
            return MdEmergencyRecording;
        case "md:MdEmergencyShare":
            return MdEmergencyShare;
        case "md:MdEmergency":
            return MdEmergency;
        case "md:MdEvStation":
            return MdEvStation;
        case "md:MdFactory":
            return MdFactory;
        case "md:MdFastfood":
            return MdFastfood;
        case "md:MdFestival":
            return MdFestival;
        case "md:MdFireHydrantAlt":
            return MdFireHydrantAlt;
        case "md:MdFireTruck":
            return MdFireTruck;
        case "md:MdFlightClass":
            return MdFlightClass;
        case "md:MdFlight":
            return MdFlight;
        case "md:MdForest":
            return MdForest;
        case "md:MdForkLeft":
            return MdForkLeft;
        case "md:MdForkRight":
            return MdForkRight;
        case "md:MdFort":
            return MdFort;
        case "md:MdHail":
            return MdHail;
        case "md:MdHandyman":
            return MdHandyman;
        case "md:MdHardware":
            return MdHardware;
        case "md:MdHomeRepairService":
            return MdHomeRepairService;
        case "md:MdHotel":
            return MdHotel;
        case "md:MdHvac":
            return MdHvac;
        case "md:MdIcecream":
            return MdIcecream;
        case "md:MdKebabDining":
            return MdKebabDining;
        case "md:MdLayersClear":
            return MdLayersClear;
        case "md:MdLayers":
            return MdLayers;
        case "md:MdLiquor":
            return MdLiquor;
        case "md:MdLocalActivity":
            return MdLocalActivity;
        case "md:MdLocalAirport":
            return MdLocalAirport;
        case "md:MdLocalAtm":
            return MdLocalAtm;
        case "md:MdLocalBar":
            return MdLocalBar;
        case "md:MdLocalCafe":
            return MdLocalCafe;
        case "md:MdLocalCarWash":
            return MdLocalCarWash;
        case "md:MdLocalConvenienceStore":
            return MdLocalConvenienceStore;
        case "md:MdLocalDining":
            return MdLocalDining;
        case "md:MdLocalDrink":
            return MdLocalDrink;
        case "md:MdLocalFireDepartment":
            return MdLocalFireDepartment;
        case "md:MdLocalFlorist":
            return MdLocalFlorist;
        case "md:MdLocalGasStation":
            return MdLocalGasStation;
        case "md:MdLocalGroceryStore":
            return MdLocalGroceryStore;
        case "md:MdLocalHospital":
            return MdLocalHospital;
        case "md:MdLocalHotel":
            return MdLocalHotel;
        case "md:MdLocalLaundryService":
            return MdLocalLaundryService;
        case "md:MdLocalLibrary":
            return MdLocalLibrary;
        case "md:MdLocalMall":
            return MdLocalMall;
        case "md:MdLocalMovies":
            return MdLocalMovies;
        case "md:MdLocalOffer":
            return MdLocalOffer;
        case "md:MdLocalParking":
            return MdLocalParking;
        case "md:MdLocalPharmacy":
            return MdLocalPharmacy;
        case "md:MdLocalPhone":
            return MdLocalPhone;
        case "md:MdLocalPizza":
            return MdLocalPizza;
        case "md:MdLocalPlay":
            return MdLocalPlay;
        case "md:MdLocalPolice":
            return MdLocalPolice;
        case "md:MdLocalPostOffice":
            return MdLocalPostOffice;
        case "md:MdLocalPrintshop":
            return MdLocalPrintshop;
        case "md:MdLocalSee":
            return MdLocalSee;
        case "md:MdLocalShipping":
            return MdLocalShipping;
        case "md:MdLocalTaxi":
            return MdLocalTaxi;
        case "md:MdLocationPin":
            return MdLocationPin;
        case "md:MdLunchDining":
            return MdLunchDining;
        case "md:MdMap":
            return MdMap;
        case "md:MdMapsUgc":
            return MdMapsUgc;
        case "md:MdMedicalInformation":
            return MdMedicalInformation;
        case "md:MdMedicalServices":
            return MdMedicalServices;
        case "md:MdMenuBook":
            return MdMenuBook;
        case "md:MdMerge":
            return MdMerge;
        case "md:MdMinorCrash":
            return MdMinorCrash;
        case "md:MdMiscellaneousServices":
            return MdMiscellaneousServices;
        case "md:MdModeOfTravel":
            return MdModeOfTravel;
        case "md:MdMoney":
            return MdMoney;
        case "md:MdMoped":
            return MdMoped;
        case "md:MdMosque":
            return MdMosque;
        case "md:MdMoving":
            return MdMoving;
        case "md:MdMultipleStop":
            return MdMultipleStop;
        case "md:MdMuseum":
            return MdMuseum;
        case "md:MdMyLocation":
            return MdMyLocation;
        case "md:MdNavigation":
            return MdNavigation;
        case "md:MdNearMeDisabled":
            return MdNearMeDisabled;
        case "md:MdNearMe":
            return MdNearMe;
        case "md:MdNightlife":
            return MdNightlife;
        case "md:MdNoCrash":
            return MdNoCrash;
        case "md:MdNoMealsOuline":
            return MdNoMealsOuline;
        case "md:MdNoMeals":
            return MdNoMeals;
        case "md:MdNoTransfer":
            return MdNoTransfer;
        case "md:MdNotListedLocation":
            return MdNotListedLocation;
        case "md:MdPark":
            return MdPark;
        case "md:MdPedalBike":
            return MdPedalBike;
        case "md:MdPersonPinCircle":
            return MdPersonPinCircle;
        case "md:MdPersonPin":
            return MdPersonPin;
        case "md:MdPestControlRodent":
            return MdPestControlRodent;
        case "md:MdPestControl":
            return MdPestControl;
        case "md:MdPinDrop":
            return MdPinDrop;
        case "md:MdPlace":
            return MdPlace;
        case "md:MdPlumbing":
            return MdPlumbing;
        case "md:MdRailwayAlert":
            return MdRailwayAlert;
        case "md:MdRamenDining":
            return MdRamenDining;
        case "md:MdRampLeft":
            return MdRampLeft;
        case "md:MdRampRight":
            return MdRampRight;
        case "md:MdRateReview":
            return MdRateReview;
        case "md:MdRemoveRoad":
            return MdRemoveRoad;
        case "md:MdRestaurantMenu":
            return MdRestaurantMenu;
        case "md:MdRestaurant":
            return MdRestaurant;
        case "md:MdRoundaboutLeft":
            return MdRoundaboutLeft;
        case "md:MdRoundaboutRight":
            return MdRoundaboutRight;
        case "md:MdRoute":
            return MdRoute;
        case "md:MdRunCircle":
            return MdRunCircle;
        case "md:MdSafetyCheck":
            return MdSafetyCheck;
        case "md:MdSailing":
            return MdSailing;
        case "md:MdSatellite":
            return MdSatellite;
        case "md:MdScreenRotationAlt":
            return MdScreenRotationAlt;
        case "md:MdSetMeal":
            return MdSetMeal;
        case "md:MdSignpost":
            return MdSignpost;
        case "md:MdSnowmobile":
            return MdSnowmobile;
        case "md:MdSos":
            return MdSos;
        case "md:MdSoupKitchen":
            return MdSoupKitchen;
        case "md:MdStadium":
            return MdStadium;
        case "md:MdStoreMallDirectory":
            return MdStoreMallDirectory;
        case "md:MdStraight":
            return MdStraight;
        case "md:MdStreetview":
            return MdStreetview;
        case "md:MdSubway":
            return MdSubway;
        case "md:MdSynagogue":
            return MdSynagogue;
        case "md:MdTakeoutDining":
            return MdTakeoutDining;
        case "md:MdTaxiAlert":
            return MdTaxiAlert;
        case "md:MdTempleBuddhist":
            return MdTempleBuddhist;
        case "md:MdTempleHindu":
            return MdTempleHindu;
        case "md:MdTerrain":
            return MdTerrain;
        case "md:MdTheaterComedy":
            return MdTheaterComedy;
        case "md:MdTireRepair":
            return MdTireRepair;
        case "md:MdTraffic":
            return MdTraffic;
        case "md:MdTrain":
            return MdTrain;
        case "md:MdTram":
            return MdTram;
        case "md:MdTransferWithinAStation":
            return MdTransferWithinAStation;
        case "md:MdTransitEnterexit":
            return MdTransitEnterexit;
        case "md:MdTripOrigin":
            return MdTripOrigin;
        case "md:MdTurnLeft":
            return MdTurnLeft;
        case "md:MdTurnRight":
            return MdTurnRight;
        case "md:MdTurnSharpLeft":
            return MdTurnSharpLeft;
        case "md:MdTurnSharpRight":
            return MdTurnSharpRight;
        case "md:MdTurnSlightLeft":
            return MdTurnSlightLeft;
        case "md:MdTurnSlightRight":
            return MdTurnSlightRight;
        case "md:MdTwoWheeler":
            return MdTwoWheeler;
        case "md:MdUTurnLeft":
            return MdUTurnLeft;
        case "md:MdUTurnRight":
            return MdUTurnRight;
        case "md:MdVolunteerActivism":
            return MdVolunteerActivism;
        case "md:MdWarehouse":
            return MdWarehouse;
        case "md:MdWineBar":
            return MdWineBar;
        case "md:MdWrongLocation":
            return MdWrongLocation;
        case "md:MdZoomInMap":
            return MdZoomInMap;
        case "md:MdZoomOutMap":
            return MdZoomOutMap;
        case "md:MdAddHomeWork":
            return MdAddHomeWork;
        case "md:MdAppSettingsAlt":
            return MdAppSettingsAlt;
        case "md:MdAppsOutage":
            return MdAppsOutage;
        case "md:MdApps":
            return MdApps;
        case "md:MdArrowBackIosNew":
            return MdArrowBackIosNew;
        case "md:MdArrowBackIos":
            return MdArrowBackIos;
        case "md:MdArrowBack":
            return MdArrowBack;
        case "md:MdArrowDownward":
            return MdArrowDownward;
        case "md:MdArrowDropDownCircle":
            return MdArrowDropDownCircle;
        case "md:MdArrowDropDown":
            return MdArrowDropDown;
        case "md:MdArrowDropUp":
            return MdArrowDropUp;
        case "md:MdArrowForwardIos":
            return MdArrowForwardIos;
        case "md:MdArrowForward":
            return MdArrowForward;
        case "md:MdArrowLeft":
            return MdArrowLeft;
        case "md:MdArrowRight":
            return MdArrowRight;
        case "md:MdArrowUpward":
            return MdArrowUpward;
        case "md:MdAssistantDirection":
            return MdAssistantDirection;
        case "md:MdAssistantNavigation":
            return MdAssistantNavigation;
        case "md:MdCampaign":
            return MdCampaign;
        case "md:MdCancel":
            return MdCancel;
        case "md:MdCheck":
            return MdCheck;
        case "md:MdChevronLeft":
            return MdChevronLeft;
        case "md:MdChevronRight":
            return MdChevronRight;
        case "md:MdClose":
            return MdClose;
        case "md:MdDoubleArrow":
            return MdDoubleArrow;
        case "md:MdEast":
            return MdEast;
        case "md:MdExpandCircleDown":
            return MdExpandCircleDown;
        case "md:MdExpandLess":
            return MdExpandLess;
        case "md:MdExpandMore":
            return MdExpandMore;
        case "md:MdFirstPage":
            return MdFirstPage;
        case "md:MdFullscreenExit":
            return MdFullscreenExit;
        case "md:MdFullscreen":
            return MdFullscreen;
        case "md:MdHomeWork":
            return MdHomeWork;
        case "md:MdLastPage":
            return MdLastPage;
        case "md:MdLegendToggle":
            return MdLegendToggle;
        case "md:MdMapsHomeWork":
            return MdMapsHomeWork;
        case "md:MdMenuOpen":
            return MdMenuOpen;
        case "md:MdMenu":
            return MdMenu;
        case "md:MdMoreHoriz":
            return MdMoreHoriz;
        case "md:MdMoreVert":
            return MdMoreVert;
        case "md:MdNorthEast":
            return MdNorthEast;
        case "md:MdNorthWest":
            return MdNorthWest;
        case "md:MdNorth":
            return MdNorth;
        case "md:MdOfflineShare":
            return MdOfflineShare;
        case "md:MdPayments":
            return MdPayments;
        case "md:MdPivotTableChart":
            return MdPivotTableChart;
        case "md:MdRefresh":
            return MdRefresh;
        case "md:MdSouthEast":
            return MdSouthEast;
        case "md:MdSouthWest":
            return MdSouthWest;
        case "md:MdSouth":
            return MdSouth;
        case "md:MdSubdirectoryArrowLeft":
            return MdSubdirectoryArrowLeft;
        case "md:MdSubdirectoryArrowRight":
            return MdSubdirectoryArrowRight;
        case "md:MdSwitchLeft":
            return MdSwitchLeft;
        case "md:MdSwitchRight":
            return MdSwitchRight;
        case "md:MdUnfoldLess":
            return MdUnfoldLess;
        case "md:MdUnfoldMore":
            return MdUnfoldMore;
        case "md:MdWaterfallChart":
            return MdWaterfallChart;
        case "md:MdWest":
            return MdWest;
        case "md:MdAccountTree":
            return MdAccountTree;
        case "md:MdAdb":
            return MdAdb;
        case "md:MdAddCall":
            return MdAddCall;
        case "md:MdAirlineSeatFlatAngled":
            return MdAirlineSeatFlatAngled;
        case "md:MdAirlineSeatFlat":
            return MdAirlineSeatFlat;
        case "md:MdAirlineSeatIndividualSuite":
            return MdAirlineSeatIndividualSuite;
        case "md:MdAirlineSeatLegroomExtra":
            return MdAirlineSeatLegroomExtra;
        case "md:MdAirlineSeatLegroomNormal":
            return MdAirlineSeatLegroomNormal;
        case "md:MdAirlineSeatLegroomReduced":
            return MdAirlineSeatLegroomReduced;
        case "md:MdAirlineSeatReclineExtra":
            return MdAirlineSeatReclineExtra;
        case "md:MdAirlineSeatReclineNormal":
            return MdAirlineSeatReclineNormal;
        case "md:MdBluetoothAudio":
            return MdBluetoothAudio;
        case "md:MdConfirmationNumber":
            return MdConfirmationNumber;
        case "md:MdDirectionsOff":
            return MdDirectionsOff;
        case "md:MdDiscFull":
            return MdDiscFull;
        case "md:MdDoDisturbAlt":
            return MdDoDisturbAlt;
        case "md:MdDoDisturbOff":
            return MdDoDisturbOff;
        case "md:MdDoDisturbOn":
            return MdDoDisturbOn;
        case "md:MdDoDisturb":
            return MdDoDisturb;
        case "md:MdDoNotDisturbAlt":
            return MdDoNotDisturbAlt;
        case "md:MdDoNotDisturbOff":
            return MdDoNotDisturbOff;
        case "md:MdDoNotDisturbOn":
            return MdDoNotDisturbOn;
        case "md:MdDoNotDisturb":
            return MdDoNotDisturb;
        case "md:MdDriveEta":
            return MdDriveEta;
        case "md:MdEnhancedEncryption":
            return MdEnhancedEncryption;
        case "md:MdEventAvailable":
            return MdEventAvailable;
        case "md:MdEventBusy":
            return MdEventBusy;
        case "md:MdEventNote":
            return MdEventNote;
        case "md:MdFolderSpecial":
            return MdFolderSpecial;
        case "md:MdImagesearchRoller":
            return MdImagesearchRoller;
        case "md:MdLiveTv":
            return MdLiveTv;
        case "md:MdMms":
            return MdMms;
        case "md:MdMore":
            return MdMore;
        case "md:MdNetworkCheck":
            return MdNetworkCheck;
        case "md:MdNetworkLocked":
            return MdNetworkLocked;
        case "md:MdNoEncryptionGmailerrorred":
            return MdNoEncryptionGmailerrorred;
        case "md:MdNoEncryption":
            return MdNoEncryption;
        case "md:MdOndemandVideo":
            return MdOndemandVideo;
        case "md:MdPersonalVideo":
            return MdPersonalVideo;
        case "md:MdPhoneBluetoothSpeaker":
            return MdPhoneBluetoothSpeaker;
        case "md:MdPhoneCallback":
            return MdPhoneCallback;
        case "md:MdPhoneForwarded":
            return MdPhoneForwarded;
        case "md:MdPhoneInTalk":
            return MdPhoneInTalk;
        case "md:MdPhoneLocked":
            return MdPhoneLocked;
        case "md:MdPhoneMissed":
            return MdPhoneMissed;
        case "md:MdPhonePaused":
            return MdPhonePaused;
        case "md:MdPowerOff":
            return MdPowerOff;
        case "md:MdPower":
            return MdPower;
        case "md:MdPriorityHigh":
            return MdPriorityHigh;
        case "md:MdRunningWithErrors":
            return MdRunningWithErrors;
        case "md:MdSdCardAlert":
            return MdSdCardAlert;
        case "md:MdSdCard":
            return MdSdCard;
        case "md:MdSimCardAlert":
            return MdSimCardAlert;
        case "md:MdSmsFailed":
            return MdSmsFailed;
        case "md:MdSms":
            return MdSms;
        case "md:MdSupportAgent":
            return MdSupportAgent;
        case "md:MdSyncDisabled":
            return MdSyncDisabled;
        case "md:MdSyncLock":
            return MdSyncLock;
        case "md:MdSyncProblem":
            return MdSyncProblem;
        case "md:MdSync":
            return MdSync;
        case "md:MdSystemUpdate":
            return MdSystemUpdate;
        case "md:MdTapAndPlay":
            return MdTapAndPlay;
        case "md:MdTimeToLeave":
            return MdTimeToLeave;
        case "md:MdTvOff":
            return MdTvOff;
        case "md:MdVibration":
            return MdVibration;
        case "md:MdVideoChat":
            return MdVideoChat;
        case "md:MdVoiceChat":
            return MdVoiceChat;
        case "md:MdVpnLock":
            return MdVpnLock;
        case "md:MdWc":
            return MdWc;
        case "md:MdWifiOff":
            return MdWifiOff;
        case "md:MdWifi":
            return MdWifi;
        case "md:MdAcUnit":
            return MdAcUnit;
        case "md:MdAirportShuttle":
            return MdAirportShuttle;
        case "md:MdAllInclusive":
            return MdAllInclusive;
        case "md:MdApartment":
            return MdApartment;
        case "md:MdBabyChangingStation":
            return MdBabyChangingStation;
        case "md:MdBackpack":
            return MdBackpack;
        case "md:MdBalcony":
            return MdBalcony;
        case "md:MdBathtub":
            return MdBathtub;
        case "md:MdBeachAccess":
            return MdBeachAccess;
        case "md:MdBento":
            return MdBento;
        case "md:MdBungalow":
            return MdBungalow;
        case "md:MdBusinessCenter":
            return MdBusinessCenter;
        case "md:MdCabin":
            return MdCabin;
        case "md:MdCarpenter":
            return MdCarpenter;
        case "md:MdCasino":
            return MdCasino;
        case "md:MdChalet":
            return MdChalet;
        case "md:MdChargingStation":
            return MdChargingStation;
        case "md:MdCheckroom":
            return MdCheckroom;
        case "md:MdChildCare":
            return MdChildCare;
        case "md:MdChildFriendly":
            return MdChildFriendly;
        case "md:MdCorporateFare":
            return MdCorporateFare;
        case "md:MdCottage":
            return MdCottage;
        case "md:MdCountertops":
            return MdCountertops;
        case "md:MdCrib":
            return MdCrib;
        case "md:MdDesk":
            return MdDesk;
        case "md:MdDoNotStep":
            return MdDoNotStep;
        case "md:MdDoNotTouch":
            return MdDoNotTouch;
        case "md:MdDry":
            return MdDry;
        case "md:MdElevator":
            return MdElevator;
        case "md:MdEscalatorWarning":
            return MdEscalatorWarning;
        case "md:MdEscalator":
            return MdEscalator;
        case "md:MdFamilyRestroom":
            return MdFamilyRestroom;
        case "md:MdFence":
            return MdFence;
        case "md:MdFireExtinguisher":
            return MdFireExtinguisher;
        case "md:MdFitnessCenter":
            return MdFitnessCenter;
        case "md:MdFoodBank":
            return MdFoodBank;
        case "md:MdFoundation":
            return MdFoundation;
        case "md:MdFreeBreakfast":
            return MdFreeBreakfast;
        case "md:MdGite":
            return MdGite;
        case "md:MdGolfCourse":
            return MdGolfCourse;
        case "md:MdGrass":
            return MdGrass;
        case "md:MdHolidayVillage":
            return MdHolidayVillage;
        case "md:MdHotTub":
            return MdHotTub;
        case "md:MdHouseSiding":
            return MdHouseSiding;
        case "md:MdHouse":
            return MdHouse;
        case "md:MdHouseboat":
            return MdHouseboat;
        case "md:MdIron":
            return MdIron;
        case "md:MdKitchen":
            return MdKitchen;
        case "md:MdMeetingRoom":
            return MdMeetingRoom;
        case "md:MdMicrowave":
            return MdMicrowave;
        case "md:MdNightShelter":
            return MdNightShelter;
        case "md:MdNoBackpack":
            return MdNoBackpack;
        case "md:MdNoCell":
            return MdNoCell;
        case "md:MdNoDrinks":
            return MdNoDrinks;
        case "md:MdNoFlash":
            return MdNoFlash;
        case "md:MdNoFood":
            return MdNoFood;
        case "md:MdNoMeetingRoom":
            return MdNoMeetingRoom;
        case "md:MdNoPhotography":
            return MdNoPhotography;
        case "md:MdNoStroller":
            return MdNoStroller;
        case "md:MdOtherHouses":
            return MdOtherHouses;
        case "md:MdPool":
            return MdPool;
        case "md:MdRiceBowl":
            return MdRiceBowl;
        case "md:MdRoofing":
            return MdRoofing;
        case "md:MdRoomPreferences":
            return MdRoomPreferences;
        case "md:MdRoomService":
            return MdRoomService;
        case "md:MdRvHookup":
            return MdRvHookup;
        case "md:MdSmokeFree":
            return MdSmokeFree;
        case "md:MdSmokingRooms":
            return MdSmokingRooms;
        case "md:MdSoap":
            return MdSoap;
        case "md:MdSpa":
            return MdSpa;
        case "md:MdSportsBar":
            return MdSportsBar;
        case "md:MdStairs":
            return MdStairs;
        case "md:MdStorefront":
            return MdStorefront;
        case "md:MdStroller":
            return MdStroller;
        case "md:MdTapas":
            return MdTapas;
        case "md:MdTty":
            return MdTty;
        case "md:MdUmbrella":
            return MdUmbrella;
        case "md:MdVapeFree":
            return MdVapeFree;
        case "md:MdVapingRooms":
            return MdVapingRooms;
        case "md:MdVilla":
            return MdVilla;
        case "md:MdWash":
            return MdWash;
        case "md:MdWaterDamage":
            return MdWaterDamage;
        case "md:MdWheelchairPickup":
            return MdWheelchairPickup;
        case "md:MdBathroom":
            return MdBathroom;
        case "md:MdBed":
            return MdBed;
        case "md:MdBedroomBaby":
            return MdBedroomBaby;
        case "md:MdBedroomChild":
            return MdBedroomChild;
        case "md:MdBedroomParent":
            return MdBedroomParent;
        case "md:MdBlender":
            return MdBlender;
        case "md:MdCameraIndoor":
            return MdCameraIndoor;
        case "md:MdCameraOutdoor":
            return MdCameraOutdoor;
        case "md:MdChairAlt":
            return MdChairAlt;
        case "md:MdChair":
            return MdChair;
        case "md:MdCoffeeMaker":
            return MdCoffeeMaker;
        case "md:MdCoffee":
            return MdCoffee;
        case "md:MdDining":
            return MdDining;
        case "md:MdDoorBack":
            return MdDoorBack;
        case "md:MdDoorFront":
            return MdDoorFront;
        case "md:MdDoorSliding":
            return MdDoorSliding;
        case "md:MdDoorbell":
            return MdDoorbell;
        case "md:MdFeed":
            return MdFeed;
        case "md:MdFlatware":
            return MdFlatware;
        case "md:MdGarage":
            return MdGarage;
        case "md:MdLight":
            return MdLight;
        case "md:MdLiving":
            return MdLiving;
        case "md:MdManageSearch":
            return MdManageSearch;
        case "md:MdPodcasts":
            return MdPodcasts;
        case "md:MdShower":
            return MdShower;
        case "md:MdTableBar":
            return MdTableBar;
        case "md:MdTableRestaurant":
            return MdTableRestaurant;
        case "md:MdWindow":
            return MdWindow;
        case "md:MdYard":
            return MdYard;
        case "md:Md18UpRating":
            return Md18UpRating;
        case "md:Md6FtApart":
            return Md6FtApart;
        case "md:MdAddModerator":
            return MdAddModerator;
        case "md:MdAddReaction":
            return MdAddReaction;
        case "md:MdArchitecture":
            return MdArchitecture;
        case "md:MdAssistWalker":
            return MdAssistWalker;
        case "md:MdBackHand":
            return MdBackHand;
        case "md:MdBlind":
            return MdBlind;
        case "md:MdBoy":
            return MdBoy;
        case "md:MdCake":
            return MdCake;
        case "md:MdCatchingPokemon":
            return MdCatchingPokemon;
        case "md:MdCleanHands":
            return MdCleanHands;
        case "md:MdCo2":
            return MdCo2;
        case "md:MdCompost":
            return MdCompost;
        case "md:MdConnectWithoutContact":
            return MdConnectWithoutContact;
        case "md:MdConstruction":
            return MdConstruction;
        case "md:MdCookie":
            return MdCookie;
        case "md:MdCoronavirus":
            return MdCoronavirus;
        case "md:MdCrueltyFree":
            return MdCrueltyFree;
        case "md:MdCyclone":
            return MdCyclone;
        case "md:MdDeck":
            return MdDeck;
        case "md:MdDewPoint":
            return MdDewPoint;
        case "md:MdDiversity1":
            return MdDiversity1;
        case "md:MdDiversity2":
            return MdDiversity2;
        case "md:MdDiversity3":
            return MdDiversity3;
        case "md:MdDomainAdd":
            return MdDomainAdd;
        case "md:MdDomain":
            return MdDomain;
        case "md:MdDownhillSkiing":
            return MdDownhillSkiing;
        case "md:MdEditNotifications":
            return MdEditNotifications;
        case "md:MdElderlyWoman":
            return MdElderlyWoman;
        case "md:MdElderly":
            return MdElderly;
        case "md:MdEmojiEmotions":
            return MdEmojiEmotions;
        case "md:MdEmojiEvents":
            return MdEmojiEvents;
        case "md:MdEmojiFlags":
            return MdEmojiFlags;
    }
}
