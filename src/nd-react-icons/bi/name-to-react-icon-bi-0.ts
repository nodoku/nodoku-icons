import type {IconType} from "react-icons";

import {
    BiAbacus,
    BiAccessibility,
    BiAddToQueue,
    BiAdjust,
    BiAlarmAdd,
    BiAlarmExclamation,
    BiAlarmOff,
    BiAlarmSnooze,
    BiAlarm,
    BiAlbum,
    BiAlignJustify,
    BiAlignLeft,
    BiAlignMiddle,
    BiAlignRight,
    BiAnalyse,
    BiAnchor,
    BiAngry,
    BiAperture,
    BiArch,
    BiArchiveIn,
    BiArchiveOut,
    BiArchive,
    BiArea,
    BiArrowBack,
    BiArrowFromBottom,
    BiArrowFromLeft,
    BiArrowFromRight,
    BiArrowFromTop,
    BiArrowToBottom,
    BiArrowToLeft,
    BiArrowToRight,
    BiArrowToTop,
    BiAt,
    BiAtom,
    BiAward,
    BiBadgeCheck,
    BiBadge,
    BiBaguette,
    BiBall,
    BiBandAid,
    BiBarChartAlt2,
    BiBarChartAlt,
    BiBarChartSquare,
    BiBarChart,
    BiBarcodeReader,
    BiBarcode,
    BiBaseball,
    BiBasket,
    BiBasketball,
    BiBath,
    BiBattery,
    BiBed,
    BiBeenHere,
    BiBeer,
    BiBellMinus,
    BiBellOff,
    BiBellPlus,
    BiBell,
    BiBible,
    BiBitcoin,
    BiBlanket,
    BiBlock,
    BiBluetooth,
    BiBody,
    BiBold,
    BiBoltCircle,
    BiBomb,
    BiBone,
    BiBong,
    BiBookAdd,
    BiBookAlt,
    BiBookBookmark,
    BiBookContent,
    BiBookHeart,
    BiBookOpen,
    BiBookReader,
    BiBook,
    BiBookmarkAltMinus,
    BiBookmarkAltPlus,
    BiBookmarkAlt,
    BiBookmarkHeart,
    BiBookmarkMinus,
    BiBookmarkPlus,
    BiBookmark,
    BiBookmarks,
    BiBorderAll,
    BiBorderBottom,
    BiBorderInner,
    BiBorderLeft,
    BiBorderNone,
    BiBorderOuter,
    BiBorderRadius,
    BiBorderRight,
    BiBorderTop,
    BiBot,
    BiBowlHot,
    BiBowlRice,
    BiBowlingBall,
    BiBox,
    BiBracket,
    BiBraille,
    BiBrain,
    BiBriefcaseAlt2,
    BiBriefcaseAlt,
    BiBriefcase,
    BiBrightnessHalf,
    BiBrightness,
    BiBroadcast,
    BiBrushAlt,
    BiBrush,
    BiBugAlt,
    BiBug,
    BiBuildingHouse,
    BiBuilding,
    BiBuildings,
    BiBulb,
    BiBullseye,
    BiBuoy,
    BiBusSchool,
    BiBus,
    BiCabinet,
    BiCableCar,
    BiCake,
    BiCalculator,
    BiCalendarAlt,
    BiCalendarCheck,
    BiCalendarEdit,
    BiCalendarEvent,
    BiCalendarExclamation,
    BiCalendarHeart,
    BiCalendarMinus,
    BiCalendarPlus,
    BiCalendarStar,
    BiCalendarWeek,
    BiCalendarX,
    BiCalendar,
    BiCameraHome,
    BiCameraMovie,
    BiCameraOff,
    BiCamera,
    BiCandles,
    BiCapsule,
    BiCaptions,
    BiCar,
    BiCard,
    BiCaretDownCircle,
    BiCaretDownSquare,
    BiCaretDown,
    BiCaretLeftCircle,
    BiCaretLeftSquare,
    BiCaretLeft,
    BiCaretRightCircle,
    BiCaretRightSquare,
    BiCaretRight,
    BiCaretUpCircle,
    BiCaretUpSquare,
    BiCaretUp,
    BiCarousel,
    BiCartAdd,
    BiCartAlt,
    BiCartDownload,
    BiCart,
    BiCast,
    BiCategoryAlt,
    BiCategory,
    BiCctv,
    BiCertification,
    BiChair,
    BiChalkboard,
    BiChart,
    BiChat,
    BiCheckCircle,
    BiCheckDouble,
    BiCheckShield,
    BiCheckSquare,
    BiCheck,
    BiCheckboxChecked,
    BiCheckboxMinus,
    BiCheckboxSquare,
    BiCheckbox,
    BiCheese,
    BiChevronDownCircle,
    BiChevronDownSquare,
    BiChevronDown,
    BiChevronLeftCircle,
    BiChevronLeftSquare,
    BiChevronLeft,
    BiChevronRightCircle,
    BiChevronRightSquare,
    BiChevronRight,
    BiChevronUpCircle,
    BiChevronUpSquare,
    BiChevronUp,
    BiChevronsDown,
    BiChevronsLeft,
    BiChevronsRight,
    BiChevronsUp,
    BiChild,
    BiChip,
    BiChurch,
    BiCircleHalf,
    BiCircleQuarter,
    BiCircleThreeQuarter,
    BiCircle,
    BiClinic,
    BiClipboard,
    BiCloset,
    BiCloudDownload,
    BiCloudDrizzle,
    BiCloudLightRain,
    BiCloudLightning,
    BiCloudRain,
    BiCloudSnow,
    BiCloudUpload,
    BiCloud,
    BiCodeAlt,
    BiCodeBlock,
    BiCodeCurly,
    BiCode,
    BiCoffeeTogo,
    BiCoffee,
    BiCog,
    BiCoinStack,
    BiCoin,
    BiCollapseAlt,
    BiCollapseHorizontal,
    BiCollapseVertical,
    BiCollapse,
    BiCollection,
    BiColorFill,
    BiColor,
    BiColumns,
    BiCommand,
    BiCommentAdd,
    BiCommentCheck,
    BiCommentDetail,
    BiCommentDots,
    BiCommentEdit,
    BiCommentError,
    BiCommentMinus,
    BiCommentX,
    BiComment,
    BiCompass,
    BiConfused,
    BiConversation,
    BiCookie,
    BiCool,
    BiCopyAlt,
    BiCopy,
    BiCopyright,
    BiCreditCardAlt,
    BiCreditCardFront,
    BiCreditCard,
    BiCricketBall,
    BiCrop,
    BiCross,
    BiCrosshair,
    BiCrown,
    BiCubeAlt,
    BiCube,
    BiCuboid,
    BiCurrentLocation,
    BiCustomize,
    BiCut,
    BiCycling,
    BiCylinder,
    BiData,
    BiDesktop,
    BiDetail,
    BiDevices,
    BiDialpadAlt,
    BiDialpad,
    BiDiamond,
    BiDice1,
    BiDice2,
    BiDice3,
    BiDice4,
    BiDice5,
    BiDice6,
    BiDirections,
    BiDisc,
    BiDish,
    BiDislike,
    BiDizzy,
    BiDna,
    BiDockBottom,
    BiDockLeft,
    BiDockRight,
    BiDockTop,
    BiDollarCircle,
    BiDollar,
    BiDonateBlood,
    BiDonateHeart,
    BiDoorOpen,
    BiDotsHorizontalRounded,
    BiDotsHorizontal,
    BiDotsVerticalRounded,
    BiDotsVertical,
    BiDoughnutChart,
    BiDownArrowAlt,
    BiDownArrowCircle,
    BiDownArrow,
    BiDownload,
    BiDownvote,
    BiDrink,
    BiDroplet,
    BiDumbbell,
    BiDuplicate,
    BiEditAlt,
    BiEdit,
    BiEnvelopeOpen,
    BiEnvelope,
    BiEqualizer,
    BiEraser,
    BiErrorAlt,
    BiErrorCircle,
    BiError,
    BiEuro,
    BiExclude,
    BiExitFullscreen,
    BiExit,
    BiExpandAlt,
    BiExpandHorizontal,
    BiExpandVertical,
    BiExpand,
    BiExport,
    BiExtension,
    BiFace,
    BiFastForwardCircle,
    BiFastForward,
    BiFemaleSign,
    BiFemale,
    BiFileBlank,
    BiFileFind,
    BiFile,
    BiFilm,
    BiFilterAlt,
    BiFilter,
    BiFingerprint,
    BiFirstAid,
    BiFirstPage,
    BiFlag,
    BiFolderMinus,
    BiFolderOpen,
    BiFolderPlus,
    BiFolder,
    BiFontColor,
    BiFontFamily,
    BiFontSize,
    BiFont,
    BiFoodMenu,
    BiFoodTag,
    BiFootball,
    BiFork,
    BiFridge,
    BiFullscreen,
    BiGame,
    BiGasPump,
    BiGhost,
    BiGift,
    BiGitBranch,
    BiGitCommit,
    BiGitCompare,
    BiGitMerge,
    BiGitPullRequest,
    BiGitRepoForked,
    BiGlassesAlt,
    BiGlasses,
    BiGlobeAlt,
    BiGlobe,
    BiGridAlt,
    BiGridHorizontal,
    BiGridSmall,
    BiGridVertical,
    BiGrid,
    BiGroup,
    BiHandicap,
    BiHappyAlt,
    BiHappyBeaming,
    BiHappyHeartEyes,
    BiHappy,
    BiHardHat,
    BiHash,
    BiHdd,
    BiHeading,
    BiHeadphone,
    BiHealth,
    BiHeartCircle,
    BiHeartSquare,
    BiHeart,
    BiHelpCircle,
    BiHide,
    BiHighlight,
    BiHistory,
    BiHive,
    BiHomeAlt2,
    BiHomeAlt,
    BiHomeCircle,
    BiHomeHeart,
    BiHomeSmile,
    BiHome,
    BiHorizontalCenter,
    BiHorizontalLeft,
    BiHorizontalRight,
    BiHotel,
    BiHourglass,
    BiIdCard,
    BiImageAdd,
    BiImageAlt,
    BiImage,
    BiImages,
    BiImport,
    BiInfinite,
    BiInfoCircle,
    BiInfoSquare,
    BiInjection,
    BiIntersect,
    BiItalic,
    BiJoystickAlt,
    BiJoystickButton,
    BiJoystick,
    BiKey,
    BiKnife,
    BiLabel,
    BiLandscape,
    BiLaptop,
    BiLastPage,
    BiLaugh,
    BiLayerMinus,
    BiLayerPlus,
    BiLayer,
    BiLayout,
    BiLeaf,
    BiLeftArrowAlt,
    BiLeftArrowCircle,
    BiLeftArrow,
    BiLeftDownArrowCircle,
    BiLeftIndent,
    BiLeftTopArrowCircle,
    BiLemon,
    BiLibrary,
    BiLike,
    BiLineChartDown,
    BiLineChart,
    BiLinkAlt,
    BiLinkExternal,
    BiLink,
    BiLira,
    BiListCheck,
    BiListMinus,
    BiListOl,
    BiListPlus,
    BiListUl,
    BiLoaderAlt,
    BiLoaderCircle,
    BiLoader,
    BiLocationPlus,
    BiLockAlt,
    BiLockOpenAlt,
    BiLockOpen,
    BiLock,
    BiLogInCircle,
    BiLogIn,
    BiLogOutCircle,
    BiLogOut,
    BiLowVision,
    BiMagnet,
    BiMailSend,
    BiMaleFemale,
    BiMaleSign,
    BiMale,
    BiMapAlt,
    BiMapPin,
    BiMap,
    BiMask,
    BiMath,
    BiMedal,
    BiMehAlt,
    BiMehBlank,
    BiMeh,
    BiMemoryCard,
    BiMenuAltLeft,
    BiMenuAltRight,
    BiMenu,
    BiMerge,
    BiMessageAdd,
    BiMessageAltAdd,
    BiMessageAltCheck,
    BiMessageAltDetail,
    BiMessageAltDots,
    BiMessageAltEdit,
    BiMessageAltError,
    BiMessageAltMinus,
    BiMessageAltX,
    BiMessageAlt,
    BiMessageCheck,
    BiMessageDetail,
    BiMessageDots,
    BiMessageEdit,
    BiMessageError,
    BiMessageMinus,
    BiMessageRoundedAdd,
    BiMessageRoundedCheck,
    BiMessageRoundedDetail,
    BiMessageRoundedDots,
    BiMessageRoundedEdit,
    BiMessageRoundedError,
    BiMessageRoundedMinus,
    BiMessageRoundedX,
    BiMessageRounded,
    BiMessageSquareAdd,
    BiMessageSquareCheck,
    BiMessageSquareDetail,
    BiMessageSquareDots,
    BiMessageSquareEdit,
    BiMessageSquareError,
    BiMessageSquareMinus,
    BiMessageSquareX,
    BiMessageSquare,
    BiMessageX,
    BiMessage,
    BiMeteor,
    BiMicrochip,
    BiMicrophoneOff,
    BiMicrophone,
    BiMinusBack,
    BiMinusCircle,
    BiMinusFront,
    BiMinus,
    BiMobileAlt,
    BiMobileLandscape,
    BiMobileVibration,
    BiMobile,
    BiMoneyWithdraw,
    BiMoney,
    BiMoon,
    BiMouseAlt,
    BiMouse,
    BiMoveHorizontal,
    BiMoveVertical,
    BiMove,
    BiMoviePlay,
    BiMovie,
    BiMusic,
    BiNavigation,
    BiNetworkChart,
    BiNews,
    BiNoEntry,
    BiNoSignal,
    BiNote,
    BiNotepad,
    BiNotificationOff,
    BiNotification,
    BiObjectsHorizontalCenter,
    BiObjectsHorizontalLeft,
    BiObjectsHorizontalRight,
    BiObjectsVerticalBottom,
    BiObjectsVerticalCenter,
    BiObjectsVerticalTop,
    BiOutline,
    BiPackage,
    BiPaintRoll,
    BiPaint,
    BiPalette,
    BiPaperPlane,
    BiPaperclip,
    BiParagraph,
    BiParty,
    BiPaste,
    BiPauseCircle,
    BiPause,
    BiPen,
    BiPencil,
    BiPhoneCall,
    BiPhoneIncoming,
    BiPhoneOff,
    BiPhoneOutgoing,
    BiPhone,
    BiPhotoAlbum,
    BiPieChartAlt2,
    BiPieChartAlt,
    BiPieChart,
    BiPin,
    BiPlanet,
    BiPlayCircle,
    BiPlay,
    BiPlug,
    BiPlusCircle,
    BiPlusMedical,
    BiPlus,
    BiPodcast,
    BiPointer,
    BiPoll,
    BiPolygon,
    BiPopsicle,
    BiPound,
    BiPowerOff,
    BiPrinter,
    BiPulse,
    BiPurchaseTagAlt,
    BiPurchaseTag,
    BiPyramid,
    BiQrScan,
    BiQr,
    BiQuestionMark,
    BiRadar,
    BiRadioCircleMarked,
    BiRadioCircle,
    BiRadio,
    BiReceipt,
    BiRectangle,
    BiRecycle,
    BiRedo,
    BiReflectHorizontal,
    BiReflectVertical,
    BiRefresh,
    BiRegistered,
    BiRename,
    BiRepeat,
    BiReplyAll,
    BiReply,
    BiRepost,
    BiReset,
    BiRestaurant,
    BiRevision,
    BiRewindCircle,
    BiRewind,
    BiRfid,
    BiRightArrowAlt,
    BiRightArrowCircle,
    BiRightArrow,
    BiRightDownArrowCircle,
    BiRightIndent,
    BiRightTopArrowCircle,
    BiRocket,
    BiRotateLeft,
    BiRotateRight,
    BiRss,
    BiRuble,
    BiRuler,
    BiRun,
    BiRupee,
    BiSad,
    BiSave,
    BiScan,
    BiScatterChart,
    BiScreenshot,
    BiSearchAlt2,
    BiSearchAlt,
    BiSearch,
    BiSelectMultiple,
    BiSelection,
    BiSend,
    BiServer,
    BiShapeCircle,
    BiShapePolygon,
    BiShapeSquare,
    BiShapeTriangle,
    BiShareAlt,
    BiShare,
    BiShekel,
    BiShieldAlt2,
    BiShieldAlt,
    BiShieldMinus,
    BiShieldPlus,
    BiShieldQuarter,
    BiShieldX,
    BiShield,
    BiShocked,
    BiShoppingBag,
    BiShowAlt,
    BiShow,
    BiShower,
    BiShuffle,
    BiSidebar,
    BiSignal1,
    BiSignal2,
    BiSignal3,
    BiSignal4,
    BiSignal5,
    BiSitemap,
    BiSkipNextCircle,
    BiSkipNext,
    BiSkipPreviousCircle,
    BiSkipPrevious,
    BiSleepy,
    BiSliderAlt,
    BiSlider,
    BiSlideshow,
    BiSmile,
    BiSortAZ,
    BiSortAlt2,
    BiSortDown,
    BiSortUp,
    BiSortZA,
    BiSort,
    BiSpa,
    BiSpaceBar,
    BiSpeaker,
    BiSprayCan,
    BiSpreadsheet,
    BiSquareRounded,
    BiSquare,
    BiStar,
    BiStation,
    BiStats,
    BiSticker,
    BiStopCircle,
    BiStop,
    BiStopwatch,
    BiStoreAlt,
    BiStore,
    BiStreetView,
    BiStrikethrough,
    BiSubdirectoryLeft,
    BiSubdirectoryRight,
    BiSun,
    BiSupport,
    BiSushi,
    BiSwim,
    BiSync,
    BiTab,
    BiTable,
    BiTachometer,
    BiTagAlt,
    BiTag,
    BiTargetLock,
    BiTaskX,
    BiTask,
    BiTaxi,
    BiTennisBall,
    BiTerminal,
    BiTestTube,
    BiText,
    BiTimeFive,
    BiTime,
    BiTimer,
    BiTired,
    BiToggleLeft,
    BiToggleRight,
    BiTone,
    BiTrafficCone,
    BiTrain,
    BiTransferAlt,
    BiTransfer,
    BiTrashAlt,
    BiTrash,
    BiTrendingDown,
    BiTrendingUp,
    BiTrim,
    BiTrip,
    BiTrophy,
    BiTv,
    BiUnderline,
    BiUndo,
    BiUnite,
    BiUniversalAccess,
    BiUnlink,
    BiUpArrowAlt,
    BiUpArrowCircle,
    BiUpArrow,
    BiUpload,
    BiUpsideDown,
    BiUpvote,
    BiUsb,
    BiUserCheck,
    BiUserCircle,
    BiUserMinus,
    BiUserPin,
    BiUserPlus,
    BiUserVoice,
    BiUserX,
    BiUser,
    BiVector,
    BiVerticalBottom,
    BiVerticalCenter,
    BiVerticalTop,
    BiVial,
    BiVideoOff,
    BiVideoPlus,
    BiVideoRecording,
    BiVideo,
    BiVoicemail,
    BiVolumeFull,
    BiVolumeLow,
    BiVolumeMute,
    BiVolume,
    BiWalk,
    BiWalletAlt,
    BiWallet,
    BiWater,
    BiWebcam,
    BiWifi0,
    BiWifi1,
    BiWifi2,
    BiWifiOff,
    BiWifi,
    BiWind,
    BiWindowAlt,
    BiWindowClose,
    BiWindowOpen,
    BiWindow,
    BiWindows,
    BiWine,
    BiWinkSmile,
    BiWinkTongue,
    BiWon,
    BiWorld,
    BiWrench,
    BiXCircle,
    BiX,
    BiYen,
    BiZoomIn,
    BiZoomOut,
    BiSolidAddToQueue,
    BiSolidAdjustAlt,
    BiSolidAdjust,
    BiSolidAlarmAdd,
    BiSolidAlarmExclamation,
    BiSolidAlarmOff,
    BiSolidAlarmSnooze,
    BiSolidAlarm,
    BiSolidAlbum,
    BiSolidAmbulance,
    BiSolidAnalyse,
    BiSolidAngry,
    BiSolidArch,
    BiSolidArchiveIn,
    BiSolidArchiveOut,
    BiSolidArchive,
    BiSolidArea,
    BiSolidArrowFromBottom,
    BiSolidArrowFromLeft,
    BiSolidArrowFromRight,
    BiSolidArrowFromTop,
    BiSolidArrowToBottom,
    BiSolidArrowToLeft,
    BiSolidArrowToRight,
    BiSolidArrowToTop,
    BiSolidAward,
    BiSolidBabyCarriage,
    BiSolidBackpack,
    BiSolidBadgeCheck,
    BiSolidBadgeDollar,
    BiSolidBadge,
    BiSolidBaguette,
    BiSolidBall,
    BiSolidBalloon,
    BiSolidBandAid,
    BiSolidBank,
    BiSolidBarChartAlt2,
    BiSolidBarChartSquare,
    BiSolidBarcode,
    BiSolidBaseball,
    BiSolidBasket,
    BiSolidBasketball,
    BiSolidBath,
    BiSolidBatteryCharging,
    BiSolidBatteryFull,
    BiSolidBatteryLow,
    BiSolidBattery,
    BiSolidBed,
    BiSolidBeenHere,
    BiSolidBeer,
    BiSolidBellMinus,
    BiSolidBellOff,
    BiSolidBellPlus,
    BiSolidBellRing,
    BiSolidBell,
    BiSolidBible,
    BiSolidBinoculars,
    BiSolidBlanket,
    BiSolidBoltCircle,
    BiSolidBolt,
    BiSolidBomb,
    BiSolidBone,
    BiSolidBong,
    BiSolidBookAdd,
    BiSolidBookAlt,
    BiSolidBookBookmark,
    BiSolidBookContent,
    BiSolidBookHeart,
    BiSolidBookOpen,
    BiSolidBookReader,
    BiSolidBook,
    BiSolidBookmarkAltMinus,
    BiSolidBookmarkAltPlus,
    BiSolidBookmarkAlt,
    BiSolidBookmarkHeart,
    BiSolidBookmarkMinus,
    BiSolidBookmarkPlus,
    BiSolidBookmarkStar,
    BiSolidBookmark,
    BiSolidBookmarks,
    BiSolidBot,
    BiSolidBowlHot,
    BiSolidBowlRice,
    BiSolidBowlingBall,
    BiSolidBox,
    BiSolidBrain,
    BiSolidBriefcaseAlt2,
    BiSolidBriefcaseAlt,
    BiSolidBriefcase,
    BiSolidBrightnessHalf,
    BiSolidBrightness,
    BiSolidBrushAlt,
    BiSolidBrush,
    BiSolidBugAlt,
    BiSolidBug,
    BiSolidBuildingHouse,
    BiSolidBuilding,
    BiSolidBuildings,
    BiSolidBulb,
    BiSolidBullseye,
    BiSolidBuoy,
    BiSolidBusSchool,
    BiSolidBus,
    BiSolidBusiness,
    BiSolidCabinet,
    BiSolidCableCar,
    BiSolidCake,
    BiSolidCalculator,
    BiSolidCalendarAlt,
    BiSolidCalendarCheck,
    BiSolidCalendarEdit,
    BiSolidCalendarEvent,
    BiSolidCalendarExclamation,
    BiSolidCalendarHeart,
    BiSolidCalendarMinus,
    BiSolidCalendarPlus,
    BiSolidCalendarStar,
    BiSolidCalendarWeek,
    BiSolidCalendarX,
    BiSolidCalendar,
    BiSolidCameraHome,
    BiSolidCameraMovie,
    BiSolidCameraOff,
    BiSolidCameraPlus,
    BiSolidCamera,
    BiSolidCapsule,
    BiSolidCaptions,
    BiSolidCarBattery,
    BiSolidCarCrash,
    BiSolidCarGarage,
    BiSolidCarMechanic,
    BiSolidCarWash,
    BiSolidCar,
    BiSolidCard,
    BiSolidCaretDownCircle,
    BiSolidCaretDownSquare,
    BiSolidCaretLeftCircle,
    BiSolidCaretLeftSquare,
    BiSolidCaretRightCircle,
    BiSolidCaretRightSquare,
    BiSolidCaretUpCircle,
    BiSolidCaretUpSquare,
    BiSolidCarousel,
    BiSolidCartAdd,
    BiSolidCartAlt,
    BiSolidCartDownload,
    BiSolidCart,
    BiSolidCastle,
    BiSolidCat,
    BiSolidCategoryAlt,
    BiSolidCategory,
    BiSolidCctv,
    BiSolidCertification,
    BiSolidChalkboard,
    BiSolidChart,
    BiSolidChat,
    BiSolidCheckCircle,
    BiSolidCheckShield,
    BiSolidCheckSquare,
    BiSolidCheckboxChecked,
    BiSolidCheckboxMinus,
    BiSolidCheckbox,
    BiSolidCheese,
    BiSolidChess,
    BiSolidChevronDownCircle,
    BiSolidChevronDownSquare,
    BiSolidChevronDown,
    BiSolidChevronLeftCircle,
    BiSolidChevronLeftSquare,
    BiSolidChevronLeft,
    BiSolidChevronRightCircle,
    BiSolidChevronRightSquare,
    BiSolidChevronRight,
    BiSolidChevronUpCircle,
    BiSolidChevronUpSquare,
    BiSolidChevronUp,
    BiSolidChevronsDown,
    BiSolidChevronsLeft,
    BiSolidChevronsRight,
    BiSolidChevronsUp,
    BiSolidChip,
    BiSolidChurch,
    BiSolidCircleHalf,
    BiSolidCircleQuarter,
    BiSolidCircleThreeQuarter,
    BiSolidCircle,
} from "react-icons/bi"

export function nameToReactIcon_bi_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "bi:BiAbacus":
            return BiAbacus;
        case "bi:BiAccessibility":
            return BiAccessibility;
        case "bi:BiAddToQueue":
            return BiAddToQueue;
        case "bi:BiAdjust":
            return BiAdjust;
        case "bi:BiAlarmAdd":
            return BiAlarmAdd;
        case "bi:BiAlarmExclamation":
            return BiAlarmExclamation;
        case "bi:BiAlarmOff":
            return BiAlarmOff;
        case "bi:BiAlarmSnooze":
            return BiAlarmSnooze;
        case "bi:BiAlarm":
            return BiAlarm;
        case "bi:BiAlbum":
            return BiAlbum;
        case "bi:BiAlignJustify":
            return BiAlignJustify;
        case "bi:BiAlignLeft":
            return BiAlignLeft;
        case "bi:BiAlignMiddle":
            return BiAlignMiddle;
        case "bi:BiAlignRight":
            return BiAlignRight;
        case "bi:BiAnalyse":
            return BiAnalyse;
        case "bi:BiAnchor":
            return BiAnchor;
        case "bi:BiAngry":
            return BiAngry;
        case "bi:BiAperture":
            return BiAperture;
        case "bi:BiArch":
            return BiArch;
        case "bi:BiArchiveIn":
            return BiArchiveIn;
        case "bi:BiArchiveOut":
            return BiArchiveOut;
        case "bi:BiArchive":
            return BiArchive;
        case "bi:BiArea":
            return BiArea;
        case "bi:BiArrowBack":
            return BiArrowBack;
        case "bi:BiArrowFromBottom":
            return BiArrowFromBottom;
        case "bi:BiArrowFromLeft":
            return BiArrowFromLeft;
        case "bi:BiArrowFromRight":
            return BiArrowFromRight;
        case "bi:BiArrowFromTop":
            return BiArrowFromTop;
        case "bi:BiArrowToBottom":
            return BiArrowToBottom;
        case "bi:BiArrowToLeft":
            return BiArrowToLeft;
        case "bi:BiArrowToRight":
            return BiArrowToRight;
        case "bi:BiArrowToTop":
            return BiArrowToTop;
        case "bi:BiAt":
            return BiAt;
        case "bi:BiAtom":
            return BiAtom;
        case "bi:BiAward":
            return BiAward;
        case "bi:BiBadgeCheck":
            return BiBadgeCheck;
        case "bi:BiBadge":
            return BiBadge;
        case "bi:BiBaguette":
            return BiBaguette;
        case "bi:BiBall":
            return BiBall;
        case "bi:BiBandAid":
            return BiBandAid;
        case "bi:BiBarChartAlt2":
            return BiBarChartAlt2;
        case "bi:BiBarChartAlt":
            return BiBarChartAlt;
        case "bi:BiBarChartSquare":
            return BiBarChartSquare;
        case "bi:BiBarChart":
            return BiBarChart;
        case "bi:BiBarcodeReader":
            return BiBarcodeReader;
        case "bi:BiBarcode":
            return BiBarcode;
        case "bi:BiBaseball":
            return BiBaseball;
        case "bi:BiBasket":
            return BiBasket;
        case "bi:BiBasketball":
            return BiBasketball;
        case "bi:BiBath":
            return BiBath;
        case "bi:BiBattery":
            return BiBattery;
        case "bi:BiBed":
            return BiBed;
        case "bi:BiBeenHere":
            return BiBeenHere;
        case "bi:BiBeer":
            return BiBeer;
        case "bi:BiBellMinus":
            return BiBellMinus;
        case "bi:BiBellOff":
            return BiBellOff;
        case "bi:BiBellPlus":
            return BiBellPlus;
        case "bi:BiBell":
            return BiBell;
        case "bi:BiBible":
            return BiBible;
        case "bi:BiBitcoin":
            return BiBitcoin;
        case "bi:BiBlanket":
            return BiBlanket;
        case "bi:BiBlock":
            return BiBlock;
        case "bi:BiBluetooth":
            return BiBluetooth;
        case "bi:BiBody":
            return BiBody;
        case "bi:BiBold":
            return BiBold;
        case "bi:BiBoltCircle":
            return BiBoltCircle;
        case "bi:BiBomb":
            return BiBomb;
        case "bi:BiBone":
            return BiBone;
        case "bi:BiBong":
            return BiBong;
        case "bi:BiBookAdd":
            return BiBookAdd;
        case "bi:BiBookAlt":
            return BiBookAlt;
        case "bi:BiBookBookmark":
            return BiBookBookmark;
        case "bi:BiBookContent":
            return BiBookContent;
        case "bi:BiBookHeart":
            return BiBookHeart;
        case "bi:BiBookOpen":
            return BiBookOpen;
        case "bi:BiBookReader":
            return BiBookReader;
        case "bi:BiBook":
            return BiBook;
        case "bi:BiBookmarkAltMinus":
            return BiBookmarkAltMinus;
        case "bi:BiBookmarkAltPlus":
            return BiBookmarkAltPlus;
        case "bi:BiBookmarkAlt":
            return BiBookmarkAlt;
        case "bi:BiBookmarkHeart":
            return BiBookmarkHeart;
        case "bi:BiBookmarkMinus":
            return BiBookmarkMinus;
        case "bi:BiBookmarkPlus":
            return BiBookmarkPlus;
        case "bi:BiBookmark":
            return BiBookmark;
        case "bi:BiBookmarks":
            return BiBookmarks;
        case "bi:BiBorderAll":
            return BiBorderAll;
        case "bi:BiBorderBottom":
            return BiBorderBottom;
        case "bi:BiBorderInner":
            return BiBorderInner;
        case "bi:BiBorderLeft":
            return BiBorderLeft;
        case "bi:BiBorderNone":
            return BiBorderNone;
        case "bi:BiBorderOuter":
            return BiBorderOuter;
        case "bi:BiBorderRadius":
            return BiBorderRadius;
        case "bi:BiBorderRight":
            return BiBorderRight;
        case "bi:BiBorderTop":
            return BiBorderTop;
        case "bi:BiBot":
            return BiBot;
        case "bi:BiBowlHot":
            return BiBowlHot;
        case "bi:BiBowlRice":
            return BiBowlRice;
        case "bi:BiBowlingBall":
            return BiBowlingBall;
        case "bi:BiBox":
            return BiBox;
        case "bi:BiBracket":
            return BiBracket;
        case "bi:BiBraille":
            return BiBraille;
        case "bi:BiBrain":
            return BiBrain;
        case "bi:BiBriefcaseAlt2":
            return BiBriefcaseAlt2;
        case "bi:BiBriefcaseAlt":
            return BiBriefcaseAlt;
        case "bi:BiBriefcase":
            return BiBriefcase;
        case "bi:BiBrightnessHalf":
            return BiBrightnessHalf;
        case "bi:BiBrightness":
            return BiBrightness;
        case "bi:BiBroadcast":
            return BiBroadcast;
        case "bi:BiBrushAlt":
            return BiBrushAlt;
        case "bi:BiBrush":
            return BiBrush;
        case "bi:BiBugAlt":
            return BiBugAlt;
        case "bi:BiBug":
            return BiBug;
        case "bi:BiBuildingHouse":
            return BiBuildingHouse;
        case "bi:BiBuilding":
            return BiBuilding;
        case "bi:BiBuildings":
            return BiBuildings;
        case "bi:BiBulb":
            return BiBulb;
        case "bi:BiBullseye":
            return BiBullseye;
        case "bi:BiBuoy":
            return BiBuoy;
        case "bi:BiBusSchool":
            return BiBusSchool;
        case "bi:BiBus":
            return BiBus;
        case "bi:BiCabinet":
            return BiCabinet;
        case "bi:BiCableCar":
            return BiCableCar;
        case "bi:BiCake":
            return BiCake;
        case "bi:BiCalculator":
            return BiCalculator;
        case "bi:BiCalendarAlt":
            return BiCalendarAlt;
        case "bi:BiCalendarCheck":
            return BiCalendarCheck;
        case "bi:BiCalendarEdit":
            return BiCalendarEdit;
        case "bi:BiCalendarEvent":
            return BiCalendarEvent;
        case "bi:BiCalendarExclamation":
            return BiCalendarExclamation;
        case "bi:BiCalendarHeart":
            return BiCalendarHeart;
        case "bi:BiCalendarMinus":
            return BiCalendarMinus;
        case "bi:BiCalendarPlus":
            return BiCalendarPlus;
        case "bi:BiCalendarStar":
            return BiCalendarStar;
        case "bi:BiCalendarWeek":
            return BiCalendarWeek;
        case "bi:BiCalendarX":
            return BiCalendarX;
        case "bi:BiCalendar":
            return BiCalendar;
        case "bi:BiCameraHome":
            return BiCameraHome;
        case "bi:BiCameraMovie":
            return BiCameraMovie;
        case "bi:BiCameraOff":
            return BiCameraOff;
        case "bi:BiCamera":
            return BiCamera;
        case "bi:BiCandles":
            return BiCandles;
        case "bi:BiCapsule":
            return BiCapsule;
        case "bi:BiCaptions":
            return BiCaptions;
        case "bi:BiCar":
            return BiCar;
        case "bi:BiCard":
            return BiCard;
        case "bi:BiCaretDownCircle":
            return BiCaretDownCircle;
        case "bi:BiCaretDownSquare":
            return BiCaretDownSquare;
        case "bi:BiCaretDown":
            return BiCaretDown;
        case "bi:BiCaretLeftCircle":
            return BiCaretLeftCircle;
        case "bi:BiCaretLeftSquare":
            return BiCaretLeftSquare;
        case "bi:BiCaretLeft":
            return BiCaretLeft;
        case "bi:BiCaretRightCircle":
            return BiCaretRightCircle;
        case "bi:BiCaretRightSquare":
            return BiCaretRightSquare;
        case "bi:BiCaretRight":
            return BiCaretRight;
        case "bi:BiCaretUpCircle":
            return BiCaretUpCircle;
        case "bi:BiCaretUpSquare":
            return BiCaretUpSquare;
        case "bi:BiCaretUp":
            return BiCaretUp;
        case "bi:BiCarousel":
            return BiCarousel;
        case "bi:BiCartAdd":
            return BiCartAdd;
        case "bi:BiCartAlt":
            return BiCartAlt;
        case "bi:BiCartDownload":
            return BiCartDownload;
        case "bi:BiCart":
            return BiCart;
        case "bi:BiCast":
            return BiCast;
        case "bi:BiCategoryAlt":
            return BiCategoryAlt;
        case "bi:BiCategory":
            return BiCategory;
        case "bi:BiCctv":
            return BiCctv;
        case "bi:BiCertification":
            return BiCertification;
        case "bi:BiChair":
            return BiChair;
        case "bi:BiChalkboard":
            return BiChalkboard;
        case "bi:BiChart":
            return BiChart;
        case "bi:BiChat":
            return BiChat;
        case "bi:BiCheckCircle":
            return BiCheckCircle;
        case "bi:BiCheckDouble":
            return BiCheckDouble;
        case "bi:BiCheckShield":
            return BiCheckShield;
        case "bi:BiCheckSquare":
            return BiCheckSquare;
        case "bi:BiCheck":
            return BiCheck;
        case "bi:BiCheckboxChecked":
            return BiCheckboxChecked;
        case "bi:BiCheckboxMinus":
            return BiCheckboxMinus;
        case "bi:BiCheckboxSquare":
            return BiCheckboxSquare;
        case "bi:BiCheckbox":
            return BiCheckbox;
        case "bi:BiCheese":
            return BiCheese;
        case "bi:BiChevronDownCircle":
            return BiChevronDownCircle;
        case "bi:BiChevronDownSquare":
            return BiChevronDownSquare;
        case "bi:BiChevronDown":
            return BiChevronDown;
        case "bi:BiChevronLeftCircle":
            return BiChevronLeftCircle;
        case "bi:BiChevronLeftSquare":
            return BiChevronLeftSquare;
        case "bi:BiChevronLeft":
            return BiChevronLeft;
        case "bi:BiChevronRightCircle":
            return BiChevronRightCircle;
        case "bi:BiChevronRightSquare":
            return BiChevronRightSquare;
        case "bi:BiChevronRight":
            return BiChevronRight;
        case "bi:BiChevronUpCircle":
            return BiChevronUpCircle;
        case "bi:BiChevronUpSquare":
            return BiChevronUpSquare;
        case "bi:BiChevronUp":
            return BiChevronUp;
        case "bi:BiChevronsDown":
            return BiChevronsDown;
        case "bi:BiChevronsLeft":
            return BiChevronsLeft;
        case "bi:BiChevronsRight":
            return BiChevronsRight;
        case "bi:BiChevronsUp":
            return BiChevronsUp;
        case "bi:BiChild":
            return BiChild;
        case "bi:BiChip":
            return BiChip;
        case "bi:BiChurch":
            return BiChurch;
        case "bi:BiCircleHalf":
            return BiCircleHalf;
        case "bi:BiCircleQuarter":
            return BiCircleQuarter;
        case "bi:BiCircleThreeQuarter":
            return BiCircleThreeQuarter;
        case "bi:BiCircle":
            return BiCircle;
        case "bi:BiClinic":
            return BiClinic;
        case "bi:BiClipboard":
            return BiClipboard;
        case "bi:BiCloset":
            return BiCloset;
        case "bi:BiCloudDownload":
            return BiCloudDownload;
        case "bi:BiCloudDrizzle":
            return BiCloudDrizzle;
        case "bi:BiCloudLightRain":
            return BiCloudLightRain;
        case "bi:BiCloudLightning":
            return BiCloudLightning;
        case "bi:BiCloudRain":
            return BiCloudRain;
        case "bi:BiCloudSnow":
            return BiCloudSnow;
        case "bi:BiCloudUpload":
            return BiCloudUpload;
        case "bi:BiCloud":
            return BiCloud;
        case "bi:BiCodeAlt":
            return BiCodeAlt;
        case "bi:BiCodeBlock":
            return BiCodeBlock;
        case "bi:BiCodeCurly":
            return BiCodeCurly;
        case "bi:BiCode":
            return BiCode;
        case "bi:BiCoffeeTogo":
            return BiCoffeeTogo;
        case "bi:BiCoffee":
            return BiCoffee;
        case "bi:BiCog":
            return BiCog;
        case "bi:BiCoinStack":
            return BiCoinStack;
        case "bi:BiCoin":
            return BiCoin;
        case "bi:BiCollapseAlt":
            return BiCollapseAlt;
        case "bi:BiCollapseHorizontal":
            return BiCollapseHorizontal;
        case "bi:BiCollapseVertical":
            return BiCollapseVertical;
        case "bi:BiCollapse":
            return BiCollapse;
        case "bi:BiCollection":
            return BiCollection;
        case "bi:BiColorFill":
            return BiColorFill;
        case "bi:BiColor":
            return BiColor;
        case "bi:BiColumns":
            return BiColumns;
        case "bi:BiCommand":
            return BiCommand;
        case "bi:BiCommentAdd":
            return BiCommentAdd;
        case "bi:BiCommentCheck":
            return BiCommentCheck;
        case "bi:BiCommentDetail":
            return BiCommentDetail;
        case "bi:BiCommentDots":
            return BiCommentDots;
        case "bi:BiCommentEdit":
            return BiCommentEdit;
        case "bi:BiCommentError":
            return BiCommentError;
        case "bi:BiCommentMinus":
            return BiCommentMinus;
        case "bi:BiCommentX":
            return BiCommentX;
        case "bi:BiComment":
            return BiComment;
        case "bi:BiCompass":
            return BiCompass;
        case "bi:BiConfused":
            return BiConfused;
        case "bi:BiConversation":
            return BiConversation;
        case "bi:BiCookie":
            return BiCookie;
        case "bi:BiCool":
            return BiCool;
        case "bi:BiCopyAlt":
            return BiCopyAlt;
        case "bi:BiCopy":
            return BiCopy;
        case "bi:BiCopyright":
            return BiCopyright;
        case "bi:BiCreditCardAlt":
            return BiCreditCardAlt;
        case "bi:BiCreditCardFront":
            return BiCreditCardFront;
        case "bi:BiCreditCard":
            return BiCreditCard;
        case "bi:BiCricketBall":
            return BiCricketBall;
        case "bi:BiCrop":
            return BiCrop;
        case "bi:BiCross":
            return BiCross;
        case "bi:BiCrosshair":
            return BiCrosshair;
        case "bi:BiCrown":
            return BiCrown;
        case "bi:BiCubeAlt":
            return BiCubeAlt;
        case "bi:BiCube":
            return BiCube;
        case "bi:BiCuboid":
            return BiCuboid;
        case "bi:BiCurrentLocation":
            return BiCurrentLocation;
        case "bi:BiCustomize":
            return BiCustomize;
        case "bi:BiCut":
            return BiCut;
        case "bi:BiCycling":
            return BiCycling;
        case "bi:BiCylinder":
            return BiCylinder;
        case "bi:BiData":
            return BiData;
        case "bi:BiDesktop":
            return BiDesktop;
        case "bi:BiDetail":
            return BiDetail;
        case "bi:BiDevices":
            return BiDevices;
        case "bi:BiDialpadAlt":
            return BiDialpadAlt;
        case "bi:BiDialpad":
            return BiDialpad;
        case "bi:BiDiamond":
            return BiDiamond;
        case "bi:BiDice1":
            return BiDice1;
        case "bi:BiDice2":
            return BiDice2;
        case "bi:BiDice3":
            return BiDice3;
        case "bi:BiDice4":
            return BiDice4;
        case "bi:BiDice5":
            return BiDice5;
        case "bi:BiDice6":
            return BiDice6;
        case "bi:BiDirections":
            return BiDirections;
        case "bi:BiDisc":
            return BiDisc;
        case "bi:BiDish":
            return BiDish;
        case "bi:BiDislike":
            return BiDislike;
        case "bi:BiDizzy":
            return BiDizzy;
        case "bi:BiDna":
            return BiDna;
        case "bi:BiDockBottom":
            return BiDockBottom;
        case "bi:BiDockLeft":
            return BiDockLeft;
        case "bi:BiDockRight":
            return BiDockRight;
        case "bi:BiDockTop":
            return BiDockTop;
        case "bi:BiDollarCircle":
            return BiDollarCircle;
        case "bi:BiDollar":
            return BiDollar;
        case "bi:BiDonateBlood":
            return BiDonateBlood;
        case "bi:BiDonateHeart":
            return BiDonateHeart;
        case "bi:BiDoorOpen":
            return BiDoorOpen;
        case "bi:BiDotsHorizontalRounded":
            return BiDotsHorizontalRounded;
        case "bi:BiDotsHorizontal":
            return BiDotsHorizontal;
        case "bi:BiDotsVerticalRounded":
            return BiDotsVerticalRounded;
        case "bi:BiDotsVertical":
            return BiDotsVertical;
        case "bi:BiDoughnutChart":
            return BiDoughnutChart;
        case "bi:BiDownArrowAlt":
            return BiDownArrowAlt;
        case "bi:BiDownArrowCircle":
            return BiDownArrowCircle;
        case "bi:BiDownArrow":
            return BiDownArrow;
        case "bi:BiDownload":
            return BiDownload;
        case "bi:BiDownvote":
            return BiDownvote;
        case "bi:BiDrink":
            return BiDrink;
        case "bi:BiDroplet":
            return BiDroplet;
        case "bi:BiDumbbell":
            return BiDumbbell;
        case "bi:BiDuplicate":
            return BiDuplicate;
        case "bi:BiEditAlt":
            return BiEditAlt;
        case "bi:BiEdit":
            return BiEdit;
        case "bi:BiEnvelopeOpen":
            return BiEnvelopeOpen;
        case "bi:BiEnvelope":
            return BiEnvelope;
        case "bi:BiEqualizer":
            return BiEqualizer;
        case "bi:BiEraser":
            return BiEraser;
        case "bi:BiErrorAlt":
            return BiErrorAlt;
        case "bi:BiErrorCircle":
            return BiErrorCircle;
        case "bi:BiError":
            return BiError;
        case "bi:BiEuro":
            return BiEuro;
        case "bi:BiExclude":
            return BiExclude;
        case "bi:BiExitFullscreen":
            return BiExitFullscreen;
        case "bi:BiExit":
            return BiExit;
        case "bi:BiExpandAlt":
            return BiExpandAlt;
        case "bi:BiExpandHorizontal":
            return BiExpandHorizontal;
        case "bi:BiExpandVertical":
            return BiExpandVertical;
        case "bi:BiExpand":
            return BiExpand;
        case "bi:BiExport":
            return BiExport;
        case "bi:BiExtension":
            return BiExtension;
        case "bi:BiFace":
            return BiFace;
        case "bi:BiFastForwardCircle":
            return BiFastForwardCircle;
        case "bi:BiFastForward":
            return BiFastForward;
        case "bi:BiFemaleSign":
            return BiFemaleSign;
        case "bi:BiFemale":
            return BiFemale;
        case "bi:BiFileBlank":
            return BiFileBlank;
        case "bi:BiFileFind":
            return BiFileFind;
        case "bi:BiFile":
            return BiFile;
        case "bi:BiFilm":
            return BiFilm;
        case "bi:BiFilterAlt":
            return BiFilterAlt;
        case "bi:BiFilter":
            return BiFilter;
        case "bi:BiFingerprint":
            return BiFingerprint;
        case "bi:BiFirstAid":
            return BiFirstAid;
        case "bi:BiFirstPage":
            return BiFirstPage;
        case "bi:BiFlag":
            return BiFlag;
        case "bi:BiFolderMinus":
            return BiFolderMinus;
        case "bi:BiFolderOpen":
            return BiFolderOpen;
        case "bi:BiFolderPlus":
            return BiFolderPlus;
        case "bi:BiFolder":
            return BiFolder;
        case "bi:BiFontColor":
            return BiFontColor;
        case "bi:BiFontFamily":
            return BiFontFamily;
        case "bi:BiFontSize":
            return BiFontSize;
        case "bi:BiFont":
            return BiFont;
        case "bi:BiFoodMenu":
            return BiFoodMenu;
        case "bi:BiFoodTag":
            return BiFoodTag;
        case "bi:BiFootball":
            return BiFootball;
        case "bi:BiFork":
            return BiFork;
        case "bi:BiFridge":
            return BiFridge;
        case "bi:BiFullscreen":
            return BiFullscreen;
        case "bi:BiGame":
            return BiGame;
        case "bi:BiGasPump":
            return BiGasPump;
        case "bi:BiGhost":
            return BiGhost;
        case "bi:BiGift":
            return BiGift;
        case "bi:BiGitBranch":
            return BiGitBranch;
        case "bi:BiGitCommit":
            return BiGitCommit;
        case "bi:BiGitCompare":
            return BiGitCompare;
        case "bi:BiGitMerge":
            return BiGitMerge;
        case "bi:BiGitPullRequest":
            return BiGitPullRequest;
        case "bi:BiGitRepoForked":
            return BiGitRepoForked;
        case "bi:BiGlassesAlt":
            return BiGlassesAlt;
        case "bi:BiGlasses":
            return BiGlasses;
        case "bi:BiGlobeAlt":
            return BiGlobeAlt;
        case "bi:BiGlobe":
            return BiGlobe;
        case "bi:BiGridAlt":
            return BiGridAlt;
        case "bi:BiGridHorizontal":
            return BiGridHorizontal;
        case "bi:BiGridSmall":
            return BiGridSmall;
        case "bi:BiGridVertical":
            return BiGridVertical;
        case "bi:BiGrid":
            return BiGrid;
        case "bi:BiGroup":
            return BiGroup;
        case "bi:BiHandicap":
            return BiHandicap;
        case "bi:BiHappyAlt":
            return BiHappyAlt;
        case "bi:BiHappyBeaming":
            return BiHappyBeaming;
        case "bi:BiHappyHeartEyes":
            return BiHappyHeartEyes;
        case "bi:BiHappy":
            return BiHappy;
        case "bi:BiHardHat":
            return BiHardHat;
        case "bi:BiHash":
            return BiHash;
        case "bi:BiHdd":
            return BiHdd;
        case "bi:BiHeading":
            return BiHeading;
        case "bi:BiHeadphone":
            return BiHeadphone;
        case "bi:BiHealth":
            return BiHealth;
        case "bi:BiHeartCircle":
            return BiHeartCircle;
        case "bi:BiHeartSquare":
            return BiHeartSquare;
        case "bi:BiHeart":
            return BiHeart;
        case "bi:BiHelpCircle":
            return BiHelpCircle;
        case "bi:BiHide":
            return BiHide;
        case "bi:BiHighlight":
            return BiHighlight;
        case "bi:BiHistory":
            return BiHistory;
        case "bi:BiHive":
            return BiHive;
        case "bi:BiHomeAlt2":
            return BiHomeAlt2;
        case "bi:BiHomeAlt":
            return BiHomeAlt;
        case "bi:BiHomeCircle":
            return BiHomeCircle;
        case "bi:BiHomeHeart":
            return BiHomeHeart;
        case "bi:BiHomeSmile":
            return BiHomeSmile;
        case "bi:BiHome":
            return BiHome;
        case "bi:BiHorizontalCenter":
            return BiHorizontalCenter;
        case "bi:BiHorizontalLeft":
            return BiHorizontalLeft;
        case "bi:BiHorizontalRight":
            return BiHorizontalRight;
        case "bi:BiHotel":
            return BiHotel;
        case "bi:BiHourglass":
            return BiHourglass;
        case "bi:BiIdCard":
            return BiIdCard;
        case "bi:BiImageAdd":
            return BiImageAdd;
        case "bi:BiImageAlt":
            return BiImageAlt;
        case "bi:BiImage":
            return BiImage;
        case "bi:BiImages":
            return BiImages;
        case "bi:BiImport":
            return BiImport;
        case "bi:BiInfinite":
            return BiInfinite;
        case "bi:BiInfoCircle":
            return BiInfoCircle;
        case "bi:BiInfoSquare":
            return BiInfoSquare;
        case "bi:BiInjection":
            return BiInjection;
        case "bi:BiIntersect":
            return BiIntersect;
        case "bi:BiItalic":
            return BiItalic;
        case "bi:BiJoystickAlt":
            return BiJoystickAlt;
        case "bi:BiJoystickButton":
            return BiJoystickButton;
        case "bi:BiJoystick":
            return BiJoystick;
        case "bi:BiKey":
            return BiKey;
        case "bi:BiKnife":
            return BiKnife;
        case "bi:BiLabel":
            return BiLabel;
        case "bi:BiLandscape":
            return BiLandscape;
        case "bi:BiLaptop":
            return BiLaptop;
        case "bi:BiLastPage":
            return BiLastPage;
        case "bi:BiLaugh":
            return BiLaugh;
        case "bi:BiLayerMinus":
            return BiLayerMinus;
        case "bi:BiLayerPlus":
            return BiLayerPlus;
        case "bi:BiLayer":
            return BiLayer;
        case "bi:BiLayout":
            return BiLayout;
        case "bi:BiLeaf":
            return BiLeaf;
        case "bi:BiLeftArrowAlt":
            return BiLeftArrowAlt;
        case "bi:BiLeftArrowCircle":
            return BiLeftArrowCircle;
        case "bi:BiLeftArrow":
            return BiLeftArrow;
        case "bi:BiLeftDownArrowCircle":
            return BiLeftDownArrowCircle;
        case "bi:BiLeftIndent":
            return BiLeftIndent;
        case "bi:BiLeftTopArrowCircle":
            return BiLeftTopArrowCircle;
        case "bi:BiLemon":
            return BiLemon;
        case "bi:BiLibrary":
            return BiLibrary;
        case "bi:BiLike":
            return BiLike;
        case "bi:BiLineChartDown":
            return BiLineChartDown;
        case "bi:BiLineChart":
            return BiLineChart;
        case "bi:BiLinkAlt":
            return BiLinkAlt;
        case "bi:BiLinkExternal":
            return BiLinkExternal;
        case "bi:BiLink":
            return BiLink;
        case "bi:BiLira":
            return BiLira;
        case "bi:BiListCheck":
            return BiListCheck;
        case "bi:BiListMinus":
            return BiListMinus;
        case "bi:BiListOl":
            return BiListOl;
        case "bi:BiListPlus":
            return BiListPlus;
        case "bi:BiListUl":
            return BiListUl;
        case "bi:BiLoaderAlt":
            return BiLoaderAlt;
        case "bi:BiLoaderCircle":
            return BiLoaderCircle;
        case "bi:BiLoader":
            return BiLoader;
        case "bi:BiLocationPlus":
            return BiLocationPlus;
        case "bi:BiLockAlt":
            return BiLockAlt;
        case "bi:BiLockOpenAlt":
            return BiLockOpenAlt;
        case "bi:BiLockOpen":
            return BiLockOpen;
        case "bi:BiLock":
            return BiLock;
        case "bi:BiLogInCircle":
            return BiLogInCircle;
        case "bi:BiLogIn":
            return BiLogIn;
        case "bi:BiLogOutCircle":
            return BiLogOutCircle;
        case "bi:BiLogOut":
            return BiLogOut;
        case "bi:BiLowVision":
            return BiLowVision;
        case "bi:BiMagnet":
            return BiMagnet;
        case "bi:BiMailSend":
            return BiMailSend;
        case "bi:BiMaleFemale":
            return BiMaleFemale;
        case "bi:BiMaleSign":
            return BiMaleSign;
        case "bi:BiMale":
            return BiMale;
        case "bi:BiMapAlt":
            return BiMapAlt;
        case "bi:BiMapPin":
            return BiMapPin;
        case "bi:BiMap":
            return BiMap;
        case "bi:BiMask":
            return BiMask;
        case "bi:BiMath":
            return BiMath;
        case "bi:BiMedal":
            return BiMedal;
        case "bi:BiMehAlt":
            return BiMehAlt;
        case "bi:BiMehBlank":
            return BiMehBlank;
        case "bi:BiMeh":
            return BiMeh;
        case "bi:BiMemoryCard":
            return BiMemoryCard;
        case "bi:BiMenuAltLeft":
            return BiMenuAltLeft;
        case "bi:BiMenuAltRight":
            return BiMenuAltRight;
        case "bi:BiMenu":
            return BiMenu;
        case "bi:BiMerge":
            return BiMerge;
        case "bi:BiMessageAdd":
            return BiMessageAdd;
        case "bi:BiMessageAltAdd":
            return BiMessageAltAdd;
        case "bi:BiMessageAltCheck":
            return BiMessageAltCheck;
        case "bi:BiMessageAltDetail":
            return BiMessageAltDetail;
        case "bi:BiMessageAltDots":
            return BiMessageAltDots;
        case "bi:BiMessageAltEdit":
            return BiMessageAltEdit;
        case "bi:BiMessageAltError":
            return BiMessageAltError;
        case "bi:BiMessageAltMinus":
            return BiMessageAltMinus;
        case "bi:BiMessageAltX":
            return BiMessageAltX;
        case "bi:BiMessageAlt":
            return BiMessageAlt;
        case "bi:BiMessageCheck":
            return BiMessageCheck;
        case "bi:BiMessageDetail":
            return BiMessageDetail;
        case "bi:BiMessageDots":
            return BiMessageDots;
        case "bi:BiMessageEdit":
            return BiMessageEdit;
        case "bi:BiMessageError":
            return BiMessageError;
        case "bi:BiMessageMinus":
            return BiMessageMinus;
        case "bi:BiMessageRoundedAdd":
            return BiMessageRoundedAdd;
        case "bi:BiMessageRoundedCheck":
            return BiMessageRoundedCheck;
        case "bi:BiMessageRoundedDetail":
            return BiMessageRoundedDetail;
        case "bi:BiMessageRoundedDots":
            return BiMessageRoundedDots;
        case "bi:BiMessageRoundedEdit":
            return BiMessageRoundedEdit;
        case "bi:BiMessageRoundedError":
            return BiMessageRoundedError;
        case "bi:BiMessageRoundedMinus":
            return BiMessageRoundedMinus;
        case "bi:BiMessageRoundedX":
            return BiMessageRoundedX;
        case "bi:BiMessageRounded":
            return BiMessageRounded;
        case "bi:BiMessageSquareAdd":
            return BiMessageSquareAdd;
        case "bi:BiMessageSquareCheck":
            return BiMessageSquareCheck;
        case "bi:BiMessageSquareDetail":
            return BiMessageSquareDetail;
        case "bi:BiMessageSquareDots":
            return BiMessageSquareDots;
        case "bi:BiMessageSquareEdit":
            return BiMessageSquareEdit;
        case "bi:BiMessageSquareError":
            return BiMessageSquareError;
        case "bi:BiMessageSquareMinus":
            return BiMessageSquareMinus;
        case "bi:BiMessageSquareX":
            return BiMessageSquareX;
        case "bi:BiMessageSquare":
            return BiMessageSquare;
        case "bi:BiMessageX":
            return BiMessageX;
        case "bi:BiMessage":
            return BiMessage;
        case "bi:BiMeteor":
            return BiMeteor;
        case "bi:BiMicrochip":
            return BiMicrochip;
        case "bi:BiMicrophoneOff":
            return BiMicrophoneOff;
        case "bi:BiMicrophone":
            return BiMicrophone;
        case "bi:BiMinusBack":
            return BiMinusBack;
        case "bi:BiMinusCircle":
            return BiMinusCircle;
        case "bi:BiMinusFront":
            return BiMinusFront;
        case "bi:BiMinus":
            return BiMinus;
        case "bi:BiMobileAlt":
            return BiMobileAlt;
        case "bi:BiMobileLandscape":
            return BiMobileLandscape;
        case "bi:BiMobileVibration":
            return BiMobileVibration;
        case "bi:BiMobile":
            return BiMobile;
        case "bi:BiMoneyWithdraw":
            return BiMoneyWithdraw;
        case "bi:BiMoney":
            return BiMoney;
        case "bi:BiMoon":
            return BiMoon;
        case "bi:BiMouseAlt":
            return BiMouseAlt;
        case "bi:BiMouse":
            return BiMouse;
        case "bi:BiMoveHorizontal":
            return BiMoveHorizontal;
        case "bi:BiMoveVertical":
            return BiMoveVertical;
        case "bi:BiMove":
            return BiMove;
        case "bi:BiMoviePlay":
            return BiMoviePlay;
        case "bi:BiMovie":
            return BiMovie;
        case "bi:BiMusic":
            return BiMusic;
        case "bi:BiNavigation":
            return BiNavigation;
        case "bi:BiNetworkChart":
            return BiNetworkChart;
        case "bi:BiNews":
            return BiNews;
        case "bi:BiNoEntry":
            return BiNoEntry;
        case "bi:BiNoSignal":
            return BiNoSignal;
        case "bi:BiNote":
            return BiNote;
        case "bi:BiNotepad":
            return BiNotepad;
        case "bi:BiNotificationOff":
            return BiNotificationOff;
        case "bi:BiNotification":
            return BiNotification;
        case "bi:BiObjectsHorizontalCenter":
            return BiObjectsHorizontalCenter;
        case "bi:BiObjectsHorizontalLeft":
            return BiObjectsHorizontalLeft;
        case "bi:BiObjectsHorizontalRight":
            return BiObjectsHorizontalRight;
        case "bi:BiObjectsVerticalBottom":
            return BiObjectsVerticalBottom;
        case "bi:BiObjectsVerticalCenter":
            return BiObjectsVerticalCenter;
        case "bi:BiObjectsVerticalTop":
            return BiObjectsVerticalTop;
        case "bi:BiOutline":
            return BiOutline;
        case "bi:BiPackage":
            return BiPackage;
        case "bi:BiPaintRoll":
            return BiPaintRoll;
        case "bi:BiPaint":
            return BiPaint;
        case "bi:BiPalette":
            return BiPalette;
        case "bi:BiPaperPlane":
            return BiPaperPlane;
        case "bi:BiPaperclip":
            return BiPaperclip;
        case "bi:BiParagraph":
            return BiParagraph;
        case "bi:BiParty":
            return BiParty;
        case "bi:BiPaste":
            return BiPaste;
        case "bi:BiPauseCircle":
            return BiPauseCircle;
        case "bi:BiPause":
            return BiPause;
        case "bi:BiPen":
            return BiPen;
        case "bi:BiPencil":
            return BiPencil;
        case "bi:BiPhoneCall":
            return BiPhoneCall;
        case "bi:BiPhoneIncoming":
            return BiPhoneIncoming;
        case "bi:BiPhoneOff":
            return BiPhoneOff;
        case "bi:BiPhoneOutgoing":
            return BiPhoneOutgoing;
        case "bi:BiPhone":
            return BiPhone;
        case "bi:BiPhotoAlbum":
            return BiPhotoAlbum;
        case "bi:BiPieChartAlt2":
            return BiPieChartAlt2;
        case "bi:BiPieChartAlt":
            return BiPieChartAlt;
        case "bi:BiPieChart":
            return BiPieChart;
        case "bi:BiPin":
            return BiPin;
        case "bi:BiPlanet":
            return BiPlanet;
        case "bi:BiPlayCircle":
            return BiPlayCircle;
        case "bi:BiPlay":
            return BiPlay;
        case "bi:BiPlug":
            return BiPlug;
        case "bi:BiPlusCircle":
            return BiPlusCircle;
        case "bi:BiPlusMedical":
            return BiPlusMedical;
        case "bi:BiPlus":
            return BiPlus;
        case "bi:BiPodcast":
            return BiPodcast;
        case "bi:BiPointer":
            return BiPointer;
        case "bi:BiPoll":
            return BiPoll;
        case "bi:BiPolygon":
            return BiPolygon;
        case "bi:BiPopsicle":
            return BiPopsicle;
        case "bi:BiPound":
            return BiPound;
        case "bi:BiPowerOff":
            return BiPowerOff;
        case "bi:BiPrinter":
            return BiPrinter;
        case "bi:BiPulse":
            return BiPulse;
        case "bi:BiPurchaseTagAlt":
            return BiPurchaseTagAlt;
        case "bi:BiPurchaseTag":
            return BiPurchaseTag;
        case "bi:BiPyramid":
            return BiPyramid;
        case "bi:BiQrScan":
            return BiQrScan;
        case "bi:BiQr":
            return BiQr;
        case "bi:BiQuestionMark":
            return BiQuestionMark;
        case "bi:BiRadar":
            return BiRadar;
        case "bi:BiRadioCircleMarked":
            return BiRadioCircleMarked;
        case "bi:BiRadioCircle":
            return BiRadioCircle;
        case "bi:BiRadio":
            return BiRadio;
        case "bi:BiReceipt":
            return BiReceipt;
        case "bi:BiRectangle":
            return BiRectangle;
        case "bi:BiRecycle":
            return BiRecycle;
        case "bi:BiRedo":
            return BiRedo;
        case "bi:BiReflectHorizontal":
            return BiReflectHorizontal;
        case "bi:BiReflectVertical":
            return BiReflectVertical;
        case "bi:BiRefresh":
            return BiRefresh;
        case "bi:BiRegistered":
            return BiRegistered;
        case "bi:BiRename":
            return BiRename;
        case "bi:BiRepeat":
            return BiRepeat;
        case "bi:BiReplyAll":
            return BiReplyAll;
        case "bi:BiReply":
            return BiReply;
        case "bi:BiRepost":
            return BiRepost;
        case "bi:BiReset":
            return BiReset;
        case "bi:BiRestaurant":
            return BiRestaurant;
        case "bi:BiRevision":
            return BiRevision;
        case "bi:BiRewindCircle":
            return BiRewindCircle;
        case "bi:BiRewind":
            return BiRewind;
        case "bi:BiRfid":
            return BiRfid;
        case "bi:BiRightArrowAlt":
            return BiRightArrowAlt;
        case "bi:BiRightArrowCircle":
            return BiRightArrowCircle;
        case "bi:BiRightArrow":
            return BiRightArrow;
        case "bi:BiRightDownArrowCircle":
            return BiRightDownArrowCircle;
        case "bi:BiRightIndent":
            return BiRightIndent;
        case "bi:BiRightTopArrowCircle":
            return BiRightTopArrowCircle;
        case "bi:BiRocket":
            return BiRocket;
        case "bi:BiRotateLeft":
            return BiRotateLeft;
        case "bi:BiRotateRight":
            return BiRotateRight;
        case "bi:BiRss":
            return BiRss;
        case "bi:BiRuble":
            return BiRuble;
        case "bi:BiRuler":
            return BiRuler;
        case "bi:BiRun":
            return BiRun;
        case "bi:BiRupee":
            return BiRupee;
        case "bi:BiSad":
            return BiSad;
        case "bi:BiSave":
            return BiSave;
        case "bi:BiScan":
            return BiScan;
        case "bi:BiScatterChart":
            return BiScatterChart;
        case "bi:BiScreenshot":
            return BiScreenshot;
        case "bi:BiSearchAlt2":
            return BiSearchAlt2;
        case "bi:BiSearchAlt":
            return BiSearchAlt;
        case "bi:BiSearch":
            return BiSearch;
        case "bi:BiSelectMultiple":
            return BiSelectMultiple;
        case "bi:BiSelection":
            return BiSelection;
        case "bi:BiSend":
            return BiSend;
        case "bi:BiServer":
            return BiServer;
        case "bi:BiShapeCircle":
            return BiShapeCircle;
        case "bi:BiShapePolygon":
            return BiShapePolygon;
        case "bi:BiShapeSquare":
            return BiShapeSquare;
        case "bi:BiShapeTriangle":
            return BiShapeTriangle;
        case "bi:BiShareAlt":
            return BiShareAlt;
        case "bi:BiShare":
            return BiShare;
        case "bi:BiShekel":
            return BiShekel;
        case "bi:BiShieldAlt2":
            return BiShieldAlt2;
        case "bi:BiShieldAlt":
            return BiShieldAlt;
        case "bi:BiShieldMinus":
            return BiShieldMinus;
        case "bi:BiShieldPlus":
            return BiShieldPlus;
        case "bi:BiShieldQuarter":
            return BiShieldQuarter;
        case "bi:BiShieldX":
            return BiShieldX;
        case "bi:BiShield":
            return BiShield;
        case "bi:BiShocked":
            return BiShocked;
        case "bi:BiShoppingBag":
            return BiShoppingBag;
        case "bi:BiShowAlt":
            return BiShowAlt;
        case "bi:BiShow":
            return BiShow;
        case "bi:BiShower":
            return BiShower;
        case "bi:BiShuffle":
            return BiShuffle;
        case "bi:BiSidebar":
            return BiSidebar;
        case "bi:BiSignal1":
            return BiSignal1;
        case "bi:BiSignal2":
            return BiSignal2;
        case "bi:BiSignal3":
            return BiSignal3;
        case "bi:BiSignal4":
            return BiSignal4;
        case "bi:BiSignal5":
            return BiSignal5;
        case "bi:BiSitemap":
            return BiSitemap;
        case "bi:BiSkipNextCircle":
            return BiSkipNextCircle;
        case "bi:BiSkipNext":
            return BiSkipNext;
        case "bi:BiSkipPreviousCircle":
            return BiSkipPreviousCircle;
        case "bi:BiSkipPrevious":
            return BiSkipPrevious;
        case "bi:BiSleepy":
            return BiSleepy;
        case "bi:BiSliderAlt":
            return BiSliderAlt;
        case "bi:BiSlider":
            return BiSlider;
        case "bi:BiSlideshow":
            return BiSlideshow;
        case "bi:BiSmile":
            return BiSmile;
        case "bi:BiSortAZ":
            return BiSortAZ;
        case "bi:BiSortAlt2":
            return BiSortAlt2;
        case "bi:BiSortDown":
            return BiSortDown;
        case "bi:BiSortUp":
            return BiSortUp;
        case "bi:BiSortZA":
            return BiSortZA;
        case "bi:BiSort":
            return BiSort;
        case "bi:BiSpa":
            return BiSpa;
        case "bi:BiSpaceBar":
            return BiSpaceBar;
        case "bi:BiSpeaker":
            return BiSpeaker;
        case "bi:BiSprayCan":
            return BiSprayCan;
        case "bi:BiSpreadsheet":
            return BiSpreadsheet;
        case "bi:BiSquareRounded":
            return BiSquareRounded;
        case "bi:BiSquare":
            return BiSquare;
        case "bi:BiStar":
            return BiStar;
        case "bi:BiStation":
            return BiStation;
        case "bi:BiStats":
            return BiStats;
        case "bi:BiSticker":
            return BiSticker;
        case "bi:BiStopCircle":
            return BiStopCircle;
        case "bi:BiStop":
            return BiStop;
        case "bi:BiStopwatch":
            return BiStopwatch;
        case "bi:BiStoreAlt":
            return BiStoreAlt;
        case "bi:BiStore":
            return BiStore;
        case "bi:BiStreetView":
            return BiStreetView;
        case "bi:BiStrikethrough":
            return BiStrikethrough;
        case "bi:BiSubdirectoryLeft":
            return BiSubdirectoryLeft;
        case "bi:BiSubdirectoryRight":
            return BiSubdirectoryRight;
        case "bi:BiSun":
            return BiSun;
        case "bi:BiSupport":
            return BiSupport;
        case "bi:BiSushi":
            return BiSushi;
        case "bi:BiSwim":
            return BiSwim;
        case "bi:BiSync":
            return BiSync;
        case "bi:BiTab":
            return BiTab;
        case "bi:BiTable":
            return BiTable;
        case "bi:BiTachometer":
            return BiTachometer;
        case "bi:BiTagAlt":
            return BiTagAlt;
        case "bi:BiTag":
            return BiTag;
        case "bi:BiTargetLock":
            return BiTargetLock;
        case "bi:BiTaskX":
            return BiTaskX;
        case "bi:BiTask":
            return BiTask;
        case "bi:BiTaxi":
            return BiTaxi;
        case "bi:BiTennisBall":
            return BiTennisBall;
        case "bi:BiTerminal":
            return BiTerminal;
        case "bi:BiTestTube":
            return BiTestTube;
        case "bi:BiText":
            return BiText;
        case "bi:BiTimeFive":
            return BiTimeFive;
        case "bi:BiTime":
            return BiTime;
        case "bi:BiTimer":
            return BiTimer;
        case "bi:BiTired":
            return BiTired;
        case "bi:BiToggleLeft":
            return BiToggleLeft;
        case "bi:BiToggleRight":
            return BiToggleRight;
        case "bi:BiTone":
            return BiTone;
        case "bi:BiTrafficCone":
            return BiTrafficCone;
        case "bi:BiTrain":
            return BiTrain;
        case "bi:BiTransferAlt":
            return BiTransferAlt;
        case "bi:BiTransfer":
            return BiTransfer;
        case "bi:BiTrashAlt":
            return BiTrashAlt;
        case "bi:BiTrash":
            return BiTrash;
        case "bi:BiTrendingDown":
            return BiTrendingDown;
        case "bi:BiTrendingUp":
            return BiTrendingUp;
        case "bi:BiTrim":
            return BiTrim;
        case "bi:BiTrip":
            return BiTrip;
        case "bi:BiTrophy":
            return BiTrophy;
        case "bi:BiTv":
            return BiTv;
        case "bi:BiUnderline":
            return BiUnderline;
        case "bi:BiUndo":
            return BiUndo;
        case "bi:BiUnite":
            return BiUnite;
        case "bi:BiUniversalAccess":
            return BiUniversalAccess;
        case "bi:BiUnlink":
            return BiUnlink;
        case "bi:BiUpArrowAlt":
            return BiUpArrowAlt;
        case "bi:BiUpArrowCircle":
            return BiUpArrowCircle;
        case "bi:BiUpArrow":
            return BiUpArrow;
        case "bi:BiUpload":
            return BiUpload;
        case "bi:BiUpsideDown":
            return BiUpsideDown;
        case "bi:BiUpvote":
            return BiUpvote;
        case "bi:BiUsb":
            return BiUsb;
        case "bi:BiUserCheck":
            return BiUserCheck;
        case "bi:BiUserCircle":
            return BiUserCircle;
        case "bi:BiUserMinus":
            return BiUserMinus;
        case "bi:BiUserPin":
            return BiUserPin;
        case "bi:BiUserPlus":
            return BiUserPlus;
        case "bi:BiUserVoice":
            return BiUserVoice;
        case "bi:BiUserX":
            return BiUserX;
        case "bi:BiUser":
            return BiUser;
        case "bi:BiVector":
            return BiVector;
        case "bi:BiVerticalBottom":
            return BiVerticalBottom;
        case "bi:BiVerticalCenter":
            return BiVerticalCenter;
        case "bi:BiVerticalTop":
            return BiVerticalTop;
        case "bi:BiVial":
            return BiVial;
        case "bi:BiVideoOff":
            return BiVideoOff;
        case "bi:BiVideoPlus":
            return BiVideoPlus;
        case "bi:BiVideoRecording":
            return BiVideoRecording;
        case "bi:BiVideo":
            return BiVideo;
        case "bi:BiVoicemail":
            return BiVoicemail;
        case "bi:BiVolumeFull":
            return BiVolumeFull;
        case "bi:BiVolumeLow":
            return BiVolumeLow;
        case "bi:BiVolumeMute":
            return BiVolumeMute;
        case "bi:BiVolume":
            return BiVolume;
        case "bi:BiWalk":
            return BiWalk;
        case "bi:BiWalletAlt":
            return BiWalletAlt;
        case "bi:BiWallet":
            return BiWallet;
        case "bi:BiWater":
            return BiWater;
        case "bi:BiWebcam":
            return BiWebcam;
        case "bi:BiWifi0":
            return BiWifi0;
        case "bi:BiWifi1":
            return BiWifi1;
        case "bi:BiWifi2":
            return BiWifi2;
        case "bi:BiWifiOff":
            return BiWifiOff;
        case "bi:BiWifi":
            return BiWifi;
        case "bi:BiWind":
            return BiWind;
        case "bi:BiWindowAlt":
            return BiWindowAlt;
        case "bi:BiWindowClose":
            return BiWindowClose;
        case "bi:BiWindowOpen":
            return BiWindowOpen;
        case "bi:BiWindow":
            return BiWindow;
        case "bi:BiWindows":
            return BiWindows;
        case "bi:BiWine":
            return BiWine;
        case "bi:BiWinkSmile":
            return BiWinkSmile;
        case "bi:BiWinkTongue":
            return BiWinkTongue;
        case "bi:BiWon":
            return BiWon;
        case "bi:BiWorld":
            return BiWorld;
        case "bi:BiWrench":
            return BiWrench;
        case "bi:BiXCircle":
            return BiXCircle;
        case "bi:BiX":
            return BiX;
        case "bi:BiYen":
            return BiYen;
        case "bi:BiZoomIn":
            return BiZoomIn;
        case "bi:BiZoomOut":
            return BiZoomOut;
        case "bi:BiSolidAddToQueue":
            return BiSolidAddToQueue;
        case "bi:BiSolidAdjustAlt":
            return BiSolidAdjustAlt;
        case "bi:BiSolidAdjust":
            return BiSolidAdjust;
        case "bi:BiSolidAlarmAdd":
            return BiSolidAlarmAdd;
        case "bi:BiSolidAlarmExclamation":
            return BiSolidAlarmExclamation;
        case "bi:BiSolidAlarmOff":
            return BiSolidAlarmOff;
        case "bi:BiSolidAlarmSnooze":
            return BiSolidAlarmSnooze;
        case "bi:BiSolidAlarm":
            return BiSolidAlarm;
        case "bi:BiSolidAlbum":
            return BiSolidAlbum;
        case "bi:BiSolidAmbulance":
            return BiSolidAmbulance;
        case "bi:BiSolidAnalyse":
            return BiSolidAnalyse;
        case "bi:BiSolidAngry":
            return BiSolidAngry;
        case "bi:BiSolidArch":
            return BiSolidArch;
        case "bi:BiSolidArchiveIn":
            return BiSolidArchiveIn;
        case "bi:BiSolidArchiveOut":
            return BiSolidArchiveOut;
        case "bi:BiSolidArchive":
            return BiSolidArchive;
        case "bi:BiSolidArea":
            return BiSolidArea;
        case "bi:BiSolidArrowFromBottom":
            return BiSolidArrowFromBottom;
        case "bi:BiSolidArrowFromLeft":
            return BiSolidArrowFromLeft;
        case "bi:BiSolidArrowFromRight":
            return BiSolidArrowFromRight;
        case "bi:BiSolidArrowFromTop":
            return BiSolidArrowFromTop;
        case "bi:BiSolidArrowToBottom":
            return BiSolidArrowToBottom;
        case "bi:BiSolidArrowToLeft":
            return BiSolidArrowToLeft;
        case "bi:BiSolidArrowToRight":
            return BiSolidArrowToRight;
        case "bi:BiSolidArrowToTop":
            return BiSolidArrowToTop;
        case "bi:BiSolidAward":
            return BiSolidAward;
        case "bi:BiSolidBabyCarriage":
            return BiSolidBabyCarriage;
        case "bi:BiSolidBackpack":
            return BiSolidBackpack;
        case "bi:BiSolidBadgeCheck":
            return BiSolidBadgeCheck;
        case "bi:BiSolidBadgeDollar":
            return BiSolidBadgeDollar;
        case "bi:BiSolidBadge":
            return BiSolidBadge;
        case "bi:BiSolidBaguette":
            return BiSolidBaguette;
        case "bi:BiSolidBall":
            return BiSolidBall;
        case "bi:BiSolidBalloon":
            return BiSolidBalloon;
        case "bi:BiSolidBandAid":
            return BiSolidBandAid;
        case "bi:BiSolidBank":
            return BiSolidBank;
        case "bi:BiSolidBarChartAlt2":
            return BiSolidBarChartAlt2;
        case "bi:BiSolidBarChartSquare":
            return BiSolidBarChartSquare;
        case "bi:BiSolidBarcode":
            return BiSolidBarcode;
        case "bi:BiSolidBaseball":
            return BiSolidBaseball;
        case "bi:BiSolidBasket":
            return BiSolidBasket;
        case "bi:BiSolidBasketball":
            return BiSolidBasketball;
        case "bi:BiSolidBath":
            return BiSolidBath;
        case "bi:BiSolidBatteryCharging":
            return BiSolidBatteryCharging;
        case "bi:BiSolidBatteryFull":
            return BiSolidBatteryFull;
        case "bi:BiSolidBatteryLow":
            return BiSolidBatteryLow;
        case "bi:BiSolidBattery":
            return BiSolidBattery;
        case "bi:BiSolidBed":
            return BiSolidBed;
        case "bi:BiSolidBeenHere":
            return BiSolidBeenHere;
        case "bi:BiSolidBeer":
            return BiSolidBeer;
        case "bi:BiSolidBellMinus":
            return BiSolidBellMinus;
        case "bi:BiSolidBellOff":
            return BiSolidBellOff;
        case "bi:BiSolidBellPlus":
            return BiSolidBellPlus;
        case "bi:BiSolidBellRing":
            return BiSolidBellRing;
        case "bi:BiSolidBell":
            return BiSolidBell;
        case "bi:BiSolidBible":
            return BiSolidBible;
        case "bi:BiSolidBinoculars":
            return BiSolidBinoculars;
        case "bi:BiSolidBlanket":
            return BiSolidBlanket;
        case "bi:BiSolidBoltCircle":
            return BiSolidBoltCircle;
        case "bi:BiSolidBolt":
            return BiSolidBolt;
        case "bi:BiSolidBomb":
            return BiSolidBomb;
        case "bi:BiSolidBone":
            return BiSolidBone;
        case "bi:BiSolidBong":
            return BiSolidBong;
        case "bi:BiSolidBookAdd":
            return BiSolidBookAdd;
        case "bi:BiSolidBookAlt":
            return BiSolidBookAlt;
        case "bi:BiSolidBookBookmark":
            return BiSolidBookBookmark;
        case "bi:BiSolidBookContent":
            return BiSolidBookContent;
        case "bi:BiSolidBookHeart":
            return BiSolidBookHeart;
        case "bi:BiSolidBookOpen":
            return BiSolidBookOpen;
        case "bi:BiSolidBookReader":
            return BiSolidBookReader;
        case "bi:BiSolidBook":
            return BiSolidBook;
        case "bi:BiSolidBookmarkAltMinus":
            return BiSolidBookmarkAltMinus;
        case "bi:BiSolidBookmarkAltPlus":
            return BiSolidBookmarkAltPlus;
        case "bi:BiSolidBookmarkAlt":
            return BiSolidBookmarkAlt;
        case "bi:BiSolidBookmarkHeart":
            return BiSolidBookmarkHeart;
        case "bi:BiSolidBookmarkMinus":
            return BiSolidBookmarkMinus;
        case "bi:BiSolidBookmarkPlus":
            return BiSolidBookmarkPlus;
        case "bi:BiSolidBookmarkStar":
            return BiSolidBookmarkStar;
        case "bi:BiSolidBookmark":
            return BiSolidBookmark;
        case "bi:BiSolidBookmarks":
            return BiSolidBookmarks;
        case "bi:BiSolidBot":
            return BiSolidBot;
        case "bi:BiSolidBowlHot":
            return BiSolidBowlHot;
        case "bi:BiSolidBowlRice":
            return BiSolidBowlRice;
        case "bi:BiSolidBowlingBall":
            return BiSolidBowlingBall;
        case "bi:BiSolidBox":
            return BiSolidBox;
        case "bi:BiSolidBrain":
            return BiSolidBrain;
        case "bi:BiSolidBriefcaseAlt2":
            return BiSolidBriefcaseAlt2;
        case "bi:BiSolidBriefcaseAlt":
            return BiSolidBriefcaseAlt;
        case "bi:BiSolidBriefcase":
            return BiSolidBriefcase;
        case "bi:BiSolidBrightnessHalf":
            return BiSolidBrightnessHalf;
        case "bi:BiSolidBrightness":
            return BiSolidBrightness;
        case "bi:BiSolidBrushAlt":
            return BiSolidBrushAlt;
        case "bi:BiSolidBrush":
            return BiSolidBrush;
        case "bi:BiSolidBugAlt":
            return BiSolidBugAlt;
        case "bi:BiSolidBug":
            return BiSolidBug;
        case "bi:BiSolidBuildingHouse":
            return BiSolidBuildingHouse;
        case "bi:BiSolidBuilding":
            return BiSolidBuilding;
        case "bi:BiSolidBuildings":
            return BiSolidBuildings;
        case "bi:BiSolidBulb":
            return BiSolidBulb;
        case "bi:BiSolidBullseye":
            return BiSolidBullseye;
        case "bi:BiSolidBuoy":
            return BiSolidBuoy;
        case "bi:BiSolidBusSchool":
            return BiSolidBusSchool;
        case "bi:BiSolidBus":
            return BiSolidBus;
        case "bi:BiSolidBusiness":
            return BiSolidBusiness;
        case "bi:BiSolidCabinet":
            return BiSolidCabinet;
        case "bi:BiSolidCableCar":
            return BiSolidCableCar;
        case "bi:BiSolidCake":
            return BiSolidCake;
        case "bi:BiSolidCalculator":
            return BiSolidCalculator;
        case "bi:BiSolidCalendarAlt":
            return BiSolidCalendarAlt;
        case "bi:BiSolidCalendarCheck":
            return BiSolidCalendarCheck;
        case "bi:BiSolidCalendarEdit":
            return BiSolidCalendarEdit;
        case "bi:BiSolidCalendarEvent":
            return BiSolidCalendarEvent;
        case "bi:BiSolidCalendarExclamation":
            return BiSolidCalendarExclamation;
        case "bi:BiSolidCalendarHeart":
            return BiSolidCalendarHeart;
        case "bi:BiSolidCalendarMinus":
            return BiSolidCalendarMinus;
        case "bi:BiSolidCalendarPlus":
            return BiSolidCalendarPlus;
        case "bi:BiSolidCalendarStar":
            return BiSolidCalendarStar;
        case "bi:BiSolidCalendarWeek":
            return BiSolidCalendarWeek;
        case "bi:BiSolidCalendarX":
            return BiSolidCalendarX;
        case "bi:BiSolidCalendar":
            return BiSolidCalendar;
        case "bi:BiSolidCameraHome":
            return BiSolidCameraHome;
        case "bi:BiSolidCameraMovie":
            return BiSolidCameraMovie;
        case "bi:BiSolidCameraOff":
            return BiSolidCameraOff;
        case "bi:BiSolidCameraPlus":
            return BiSolidCameraPlus;
        case "bi:BiSolidCamera":
            return BiSolidCamera;
        case "bi:BiSolidCapsule":
            return BiSolidCapsule;
        case "bi:BiSolidCaptions":
            return BiSolidCaptions;
        case "bi:BiSolidCarBattery":
            return BiSolidCarBattery;
        case "bi:BiSolidCarCrash":
            return BiSolidCarCrash;
        case "bi:BiSolidCarGarage":
            return BiSolidCarGarage;
        case "bi:BiSolidCarMechanic":
            return BiSolidCarMechanic;
        case "bi:BiSolidCarWash":
            return BiSolidCarWash;
        case "bi:BiSolidCar":
            return BiSolidCar;
        case "bi:BiSolidCard":
            return BiSolidCard;
        case "bi:BiSolidCaretDownCircle":
            return BiSolidCaretDownCircle;
        case "bi:BiSolidCaretDownSquare":
            return BiSolidCaretDownSquare;
        case "bi:BiSolidCaretLeftCircle":
            return BiSolidCaretLeftCircle;
        case "bi:BiSolidCaretLeftSquare":
            return BiSolidCaretLeftSquare;
        case "bi:BiSolidCaretRightCircle":
            return BiSolidCaretRightCircle;
        case "bi:BiSolidCaretRightSquare":
            return BiSolidCaretRightSquare;
        case "bi:BiSolidCaretUpCircle":
            return BiSolidCaretUpCircle;
        case "bi:BiSolidCaretUpSquare":
            return BiSolidCaretUpSquare;
        case "bi:BiSolidCarousel":
            return BiSolidCarousel;
        case "bi:BiSolidCartAdd":
            return BiSolidCartAdd;
        case "bi:BiSolidCartAlt":
            return BiSolidCartAlt;
        case "bi:BiSolidCartDownload":
            return BiSolidCartDownload;
        case "bi:BiSolidCart":
            return BiSolidCart;
        case "bi:BiSolidCastle":
            return BiSolidCastle;
        case "bi:BiSolidCat":
            return BiSolidCat;
        case "bi:BiSolidCategoryAlt":
            return BiSolidCategoryAlt;
        case "bi:BiSolidCategory":
            return BiSolidCategory;
        case "bi:BiSolidCctv":
            return BiSolidCctv;
        case "bi:BiSolidCertification":
            return BiSolidCertification;
        case "bi:BiSolidChalkboard":
            return BiSolidChalkboard;
        case "bi:BiSolidChart":
            return BiSolidChart;
        case "bi:BiSolidChat":
            return BiSolidChat;
        case "bi:BiSolidCheckCircle":
            return BiSolidCheckCircle;
        case "bi:BiSolidCheckShield":
            return BiSolidCheckShield;
        case "bi:BiSolidCheckSquare":
            return BiSolidCheckSquare;
        case "bi:BiSolidCheckboxChecked":
            return BiSolidCheckboxChecked;
        case "bi:BiSolidCheckboxMinus":
            return BiSolidCheckboxMinus;
        case "bi:BiSolidCheckbox":
            return BiSolidCheckbox;
        case "bi:BiSolidCheese":
            return BiSolidCheese;
        case "bi:BiSolidChess":
            return BiSolidChess;
        case "bi:BiSolidChevronDownCircle":
            return BiSolidChevronDownCircle;
        case "bi:BiSolidChevronDownSquare":
            return BiSolidChevronDownSquare;
        case "bi:BiSolidChevronDown":
            return BiSolidChevronDown;
        case "bi:BiSolidChevronLeftCircle":
            return BiSolidChevronLeftCircle;
        case "bi:BiSolidChevronLeftSquare":
            return BiSolidChevronLeftSquare;
        case "bi:BiSolidChevronLeft":
            return BiSolidChevronLeft;
        case "bi:BiSolidChevronRightCircle":
            return BiSolidChevronRightCircle;
        case "bi:BiSolidChevronRightSquare":
            return BiSolidChevronRightSquare;
        case "bi:BiSolidChevronRight":
            return BiSolidChevronRight;
        case "bi:BiSolidChevronUpCircle":
            return BiSolidChevronUpCircle;
        case "bi:BiSolidChevronUpSquare":
            return BiSolidChevronUpSquare;
        case "bi:BiSolidChevronUp":
            return BiSolidChevronUp;
        case "bi:BiSolidChevronsDown":
            return BiSolidChevronsDown;
        case "bi:BiSolidChevronsLeft":
            return BiSolidChevronsLeft;
        case "bi:BiSolidChevronsRight":
            return BiSolidChevronsRight;
        case "bi:BiSolidChevronsUp":
            return BiSolidChevronsUp;
        case "bi:BiSolidChip":
            return BiSolidChip;
        case "bi:BiSolidChurch":
            return BiSolidChurch;
        case "bi:BiSolidCircleHalf":
            return BiSolidCircleHalf;
        case "bi:BiSolidCircleQuarter":
            return BiSolidCircleQuarter;
        case "bi:BiSolidCircleThreeQuarter":
            return BiSolidCircleThreeQuarter;
        case "bi:BiSolidCircle":
            return BiSolidCircle;
    }
}
