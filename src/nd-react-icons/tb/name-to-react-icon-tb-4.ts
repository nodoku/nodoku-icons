import type {IconType} from "react-icons";

import {
    TbMessage2Code,
    TbMessage2Cog,
    TbMessage2Dollar,
    TbMessage2Down,
    TbMessage2Exclamation,
    TbMessage2Heart,
    TbMessage2Minus,
    TbMessage2Off,
    TbMessage2Pause,
    TbMessage2Pin,
    TbMessage2Plus,
    TbMessage2Question,
    TbMessage2Search,
    TbMessage2Share,
    TbMessage2Star,
    TbMessage2Up,
    TbMessage2X,
    TbMessage2,
    TbMessageBolt,
    TbMessageCancel,
    TbMessageChatbot,
    TbMessageCheck,
    TbMessageCircleBolt,
    TbMessageCircleCancel,
    TbMessageCircleCheck,
    TbMessageCircleCode,
    TbMessageCircleCog,
    TbMessageCircleDollar,
    TbMessageCircleDown,
    TbMessageCircleExclamation,
    TbMessageCircleHeart,
    TbMessageCircleMinus,
    TbMessageCircleOff,
    TbMessageCirclePause,
    TbMessageCirclePin,
    TbMessageCirclePlus,
    TbMessageCircleQuestion,
    TbMessageCircleSearch,
    TbMessageCircleShare,
    TbMessageCircleStar,
    TbMessageCircleUp,
    TbMessageCircleUser,
    TbMessageCircleX,
    TbMessageCircle,
    TbMessageCode,
    TbMessageCog,
    TbMessageDollar,
    TbMessageDots,
    TbMessageDown,
    TbMessageExclamation,
    TbMessageForward,
    TbMessageHeart,
    TbMessageLanguage,
    TbMessageMinus,
    TbMessageOff,
    TbMessagePause,
    TbMessagePin,
    TbMessagePlus,
    TbMessageQuestion,
    TbMessageReply,
    TbMessageReport,
    TbMessageSearch,
    TbMessageShare,
    TbMessageStar,
    TbMessageUp,
    TbMessageUser,
    TbMessageX,
    TbMessage,
    TbMessagesOff,
    TbMessages,
    TbMeteorOff,
    TbMeteor,
    TbMeterCube,
    TbMeterSquare,
    TbMetronome,
    TbMichelinBibGourmand,
    TbMichelinStarGreen,
    TbMichelinStar,
    TbMickey,
    TbMicrophone2Off,
    TbMicrophone2,
    TbMicrophoneOff,
    TbMicrophone,
    TbMicroscopeOff,
    TbMicroscope,
    TbMicrowaveOff,
    TbMicrowave,
    TbMilitaryAward,
    TbMilitaryRank,
    TbMilkOff,
    TbMilk,
    TbMilkshake,
    TbMinimize,
    TbMinusVertical,
    TbMinus,
    TbMistOff,
    TbMist,
    TbMobiledataOff,
    TbMobiledata,
    TbMoneybag,
    TbMonkeybar,
    TbMoodAngry,
    TbMoodAnnoyed2,
    TbMoodAnnoyed,
    TbMoodBitcoin,
    TbMoodBoy,
    TbMoodCheck,
    TbMoodCog,
    TbMoodConfuzed,
    TbMoodCrazyHappy,
    TbMoodCry,
    TbMoodDollar,
    TbMoodEdit,
    TbMoodEmpty,
    TbMoodHappy,
    TbMoodHeart,
    TbMoodKid,
    TbMoodLookDown,
    TbMoodLookLeft,
    TbMoodLookRight,
    TbMoodLookUp,
    TbMoodMinus,
    TbMoodNerd,
    TbMoodNervous,
    TbMoodNeutral,
    TbMoodOff,
    TbMoodPin,
    TbMoodPlus,
    TbMoodPuzzled,
    TbMoodSad2,
    TbMoodSadDizzy,
    TbMoodSadSquint,
    TbMoodSad,
    TbMoodSearch,
    TbMoodShare,
    TbMoodSick,
    TbMoodSilence,
    TbMoodSing,
    TbMoodSmileBeam,
    TbMoodSmileDizzy,
    TbMoodSmile,
    TbMoodSpark,
    TbMoodSurprised,
    TbMoodTongueWink2,
    TbMoodTongueWink,
    TbMoodTongue,
    TbMoodUnamused,
    TbMoodUp,
    TbMoodWink2,
    TbMoodWink,
    TbMoodWrrr,
    TbMoodX,
    TbMoodXd,
    TbMoon2,
    TbMoonOff,
    TbMoonStars,
    TbMoon,
    TbMoped,
    TbMotorbike,
    TbMountainOff,
    TbMountain,
    TbMouse2,
    TbMouseOff,
    TbMouse,
    TbMoustache,
    TbMovieOff,
    TbMovie,
    TbMugOff,
    TbMug,
    TbMultiplier05X,
    TbMultiplier15X,
    TbMultiplier1X,
    TbMultiplier2X,
    TbMushroomOff,
    TbMushroom,
    TbMusicBolt,
    TbMusicCancel,
    TbMusicCheck,
    TbMusicCode,
    TbMusicCog,
    TbMusicDiscount,
    TbMusicDollar,
    TbMusicDown,
    TbMusicExclamation,
    TbMusicHeart,
    TbMusicMinus,
    TbMusicOff,
    TbMusicPause,
    TbMusicPin,
    TbMusicPlus,
    TbMusicQuestion,
    TbMusicSearch,
    TbMusicShare,
    TbMusicStar,
    TbMusicUp,
    TbMusicX,
    TbMusic,
    TbNavigationBolt,
    TbNavigationCancel,
    TbNavigationCheck,
    TbNavigationCode,
    TbNavigationCog,
    TbNavigationDiscount,
    TbNavigationDollar,
    TbNavigationDown,
    TbNavigationEast,
    TbNavigationExclamation,
    TbNavigationHeart,
    TbNavigationMinus,
    TbNavigationNorth,
    TbNavigationOff,
    TbNavigationPause,
    TbNavigationPin,
    TbNavigationPlus,
    TbNavigationQuestion,
    TbNavigationSearch,
    TbNavigationShare,
    TbNavigationSouth,
    TbNavigationStar,
    TbNavigationTop,
    TbNavigationUp,
    TbNavigationWest,
    TbNavigationX,
    TbNavigation,
    TbNeedleThread,
    TbNeedle,
    TbNetworkOff,
    TbNetwork,
    TbNewSection,
    TbNewsOff,
    TbNews,
    TbNfcOff,
    TbNfc,
    TbNoCopyright,
    TbNoCreativeCommons,
    TbNoDerivatives,
    TbNorthStar,
    TbNoteOff,
    TbNote,
    TbNotebookOff,
    TbNotebook,
    TbNotesOff,
    TbNotes,
    TbNotificationOff,
    TbNotification,
    TbNumber0Small,
    TbNumber0,
    TbNumber1Small,
    TbNumber1,
    TbNumber10Small,
    TbNumber10,
    TbNumber100Small,
    TbNumber11Small,
    TbNumber11,
    TbNumber12Small,
    TbNumber123,
    TbNumber13Small,
    TbNumber14Small,
    TbNumber15Small,
    TbNumber16Small,
    TbNumber17Small,
    TbNumber18Small,
    TbNumber19Small,
    TbNumber2Small,
    TbNumber2,
    TbNumber20Small,
    TbNumber21Small,
    TbNumber22Small,
    TbNumber23Small,
    TbNumber24Small,
    TbNumber25Small,
    TbNumber26Small,
    TbNumber27Small,
    TbNumber28Small,
    TbNumber29Small,
    TbNumber3Small,
    TbNumber3,
    TbNumber30Small,
    TbNumber31Small,
    TbNumber32Small,
    TbNumber33Small,
    TbNumber34Small,
    TbNumber35Small,
    TbNumber36Small,
    TbNumber37Small,
    TbNumber38Small,
    TbNumber39Small,
    TbNumber4Small,
    TbNumber4,
    TbNumber40Small,
    TbNumber41Small,
    TbNumber42Small,
    TbNumber43Small,
    TbNumber44Small,
    TbNumber45Small,
    TbNumber46Small,
    TbNumber47Small,
    TbNumber48Small,
    TbNumber49Small,
    TbNumber5Small,
    TbNumber5,
    TbNumber50Small,
    TbNumber51Small,
    TbNumber52Small,
    TbNumber53Small,
    TbNumber54Small,
    TbNumber55Small,
    TbNumber56Small,
    TbNumber57Small,
    TbNumber58Small,
    TbNumber59Small,
    TbNumber6Small,
    TbNumber6,
    TbNumber60Small,
    TbNumber61Small,
    TbNumber62Small,
    TbNumber63Small,
    TbNumber64Small,
    TbNumber65Small,
    TbNumber66Small,
    TbNumber67Small,
    TbNumber68Small,
    TbNumber69Small,
    TbNumber7Small,
    TbNumber7,
    TbNumber70Small,
    TbNumber71Small,
    TbNumber72Small,
    TbNumber73Small,
    TbNumber74Small,
    TbNumber75Small,
    TbNumber76Small,
    TbNumber77Small,
    TbNumber78Small,
    TbNumber79Small,
    TbNumber8Small,
    TbNumber8,
    TbNumber80Small,
    TbNumber81Small,
    TbNumber82Small,
    TbNumber83Small,
    TbNumber84Small,
    TbNumber85Small,
    TbNumber86Small,
    TbNumber87Small,
    TbNumber88Small,
    TbNumber89Small,
    TbNumber9Small,
    TbNumber9,
    TbNumber90Small,
    TbNumber91Small,
    TbNumber92Small,
    TbNumber93Small,
    TbNumber94Small,
    TbNumber95Small,
    TbNumber96Small,
    TbNumber97Small,
    TbNumber98Small,
    TbNumber99Small,
    TbNumber,
    TbNumbers,
    TbNurse,
    TbNut,
    TbObjectScan,
    TbOctagonMinus2,
    TbOctagonMinus,
    TbOctagonOff,
    TbOctagonPlus2,
    TbOctagonPlus,
    TbOctagon,
    TbOctahedronOff,
    TbOctahedronPlus,
    TbOctahedron,
    TbOld,
    TbOlympicsOff,
    TbOlympics,
    TbOm,
    TbOmega,
    TbOutbound,
    TbOutlet,
    TbOvalVertical,
    TbOval,
    TbOverline,
    TbPackageExport,
    TbPackageImport,
    TbPackageOff,
    TbPackage,
    TbPackages,
    TbPacman,
    TbPageBreak,
    TbPaintOff,
    TbPaint,
    TbPaletteOff,
    TbPalette,
    TbPanoramaHorizontalOff,
    TbPanoramaHorizontal,
    TbPanoramaVerticalOff,
    TbPanoramaVertical,
    TbPaperBagOff,
    TbPaperBag,
    TbPaperclip,
    TbParachuteOff,
    TbParachute,
    TbParenthesesOff,
    TbParentheses,
    TbParkingCircle,
    TbParkingOff,
    TbParking,
    TbPasswordFingerprint,
    TbPasswordMobilePhone,
    TbPasswordUser,
    TbPassword,
    TbPawOff,
    TbPaw,
    TbPaywall,
    TbPdf,
    TbPeace,
    TbPencilBolt,
    TbPencilCancel,
    TbPencilCheck,
    TbPencilCode,
    TbPencilCog,
    TbPencilDiscount,
    TbPencilDollar,
    TbPencilDown,
    TbPencilExclamation,
    TbPencilHeart,
    TbPencilMinus,
    TbPencilOff,
    TbPencilPause,
    TbPencilPin,
    TbPencilPlus,
    TbPencilQuestion,
    TbPencilSearch,
    TbPencilShare,
    TbPencilStar,
    TbPencilUp,
    TbPencilX,
    TbPencil,
    TbPennant2,
    TbPennantOff,
    TbPennant,
    TbPentagonMinus,
    TbPentagonNumber0,
    TbPentagonNumber1,
    TbPentagonNumber2,
    TbPentagonNumber3,
    TbPentagonNumber4,
    TbPentagonNumber5,
    TbPentagonNumber6,
    TbPentagonNumber7,
    TbPentagonNumber8,
    TbPentagonNumber9,
    TbPentagonOff,
    TbPentagonPlus,
    TbPentagonX,
    TbPentagon,
    TbPentagram,
    TbPepperOff,
    TbPepper,
    TbPercentage0,
    TbPercentage10,
    TbPercentage100,
    TbPercentage20,
    TbPercentage25,
    TbPercentage30,
    TbPercentage33,
    TbPercentage40,
    TbPercentage50,
    TbPercentage60,
    TbPercentage66,
    TbPercentage70,
    TbPercentage75,
    TbPercentage80,
    TbPercentage90,
    TbPercentage,
    TbPerfume,
    TbPerspectiveOff,
    TbPerspective,
    TbPhoneCall,
    TbPhoneCalling,
    TbPhoneCheck,
    TbPhoneDone,
    TbPhoneEnd,
    TbPhoneIncoming,
    TbPhoneOff,
    TbPhoneOutgoing,
    TbPhonePause,
    TbPhonePlus,
    TbPhoneRinging,
    TbPhoneSpark,
    TbPhoneX,
    TbPhone,
    TbPhotoAi,
    TbPhotoBitcoin,
    TbPhotoBolt,
    TbPhotoCancel,
    TbPhotoCheck,
    TbPhotoCircleMinus,
    TbPhotoCirclePlus,
    TbPhotoCircle,
    TbPhotoCode,
    TbPhotoCog,
    TbPhotoDollar,
    TbPhotoDown,
    TbPhotoEdit,
    TbPhotoExclamation,
    TbPhotoHeart,
    TbPhotoHexagon,
    TbPhotoMinus,
    TbPhotoOff,
    TbPhotoPause,
    TbPhotoPentagon,
    TbPhotoPin,
    TbPhotoPlus,
    TbPhotoQuestion,
    TbPhotoScan,
    TbPhotoSearch,
    TbPhotoSensor2,
    TbPhotoSensor3,
    TbPhotoSensor,
    TbPhotoShare,
    TbPhotoShield,
    TbPhotoSpark,
    TbPhotoSquareRounded,
    TbPhotoStar,
    TbPhotoUp,
    TbPhotoVideo,
    TbPhotoX,
    TbPhoto,
    TbPhysotherapist,
    TbPiano,
    TbPick,
    TbPicnicTable,
    TbPictureInPictureOff,
    TbPictureInPictureOn,
    TbPictureInPictureTop,
    TbPictureInPicture,
    TbPigMoney,
    TbPigOff,
    TbPig,
    TbPilcrowLeft,
    TbPilcrowRight,
    TbPilcrow,
    TbPillOff,
    TbPill,
    TbPills,
    TbPinEnd,
    TbPinInvoke,
    TbPin,
    TbPingPong,
    TbPinnedOff,
    TbPinned,
    TbPizzaOff,
    TbPizza,
    TbPlaceholder,
    TbPlaneArrival,
    TbPlaneDeparture,
    TbPlaneInflight,
    TbPlaneOff,
    TbPlaneTilt,
    TbPlane,
    TbPlanetOff,
    TbPlanet,
    TbPlant2Off,
    TbPlant2,
    TbPlantOff,
    TbPlant,
    TbPlayBasketball,
    TbPlayCard1,
    TbPlayCard10,
    TbPlayCard2,
    TbPlayCard3,
    TbPlayCard4,
    TbPlayCard5,
    TbPlayCard6,
    TbPlayCard7,
    TbPlayCard8,
    TbPlayCard9,
    TbPlayCardA,
    TbPlayCardJ,
    TbPlayCardK,
    TbPlayCardOff,
    TbPlayCardQ,
    TbPlayCardStar,
    TbPlayCard,
    TbPlayFootball,
    TbPlayHandball,
    TbPlayVolleyball,
    TbPlayerEject,
    TbPlayerPause,
    TbPlayerPlay,
    TbPlayerRecord,
    TbPlayerSkipBack,
    TbPlayerSkipForward,
    TbPlayerStop,
    TbPlayerTrackNext,
    TbPlayerTrackPrev,
    TbPlaylistAdd,
    TbPlaylistOff,
    TbPlaylistX,
    TbPlaylist,
    TbPlaystationCircle,
    TbPlaystationSquare,
    TbPlaystationTriangle,
    TbPlaystationX,
    TbPlugConnectedX,
    TbPlugConnected,
    TbPlugOff,
    TbPlugX,
    TbPlug,
    TbPlusEqual,
    TbPlusMinus,
    TbPlus,
    TbPng,
    TbPodiumOff,
    TbPodium,
    TbPointOff,
    TbPoint,
    TbPointerBolt,
    TbPointerCancel,
    TbPointerCheck,
    TbPointerCode,
    TbPointerCog,
    TbPointerDollar,
    TbPointerDown,
    TbPointerExclamation,
    TbPointerHeart,
    TbPointerMinus,
    TbPointerOff,
    TbPointerPause,
    TbPointerPin,
    TbPointerPlus,
    TbPointerQuestion,
    TbPointerSearch,
    TbPointerShare,
    TbPointerStar,
    TbPointerUp,
    TbPointerX,
    TbPointer,
    TbPokeballOff,
    TbPokeball,
    TbPokerChip,
    TbPolaroid,
    TbPolygonOff,
    TbPolygon,
    TbPoo,
    TbPoolOff,
    TbPool,
    TbPower,
    TbPray,
    TbPremiumRights,
    TbPrescription,
    TbPresentationAnalytics,
    TbPresentationOff,
    TbPresentation,
    TbPrinterOff,
    TbPrinter,
    TbPrismLight,
    TbPrismOff,
    TbPrismPlus,
    TbPrism,
    TbPrison,
    TbProgressAlert,
    TbProgressBolt,
    TbProgressCheck,
    TbProgressDown,
    TbProgressHelp,
    TbProgressX,
    TbProgress,
    TbPrompt,
    TbProng,
    TbPropellerOff,
    TbPropeller,
    TbProtocol,
    TbPumpkinScary,
    TbPuzzle2,
    TbPuzzleOff,
    TbPuzzle,
    TbPyramidOff,
    TbPyramidPlus,
    TbPyramid,
    TbQrcodeOff,
    TbQrcode,
    TbQuestionMark,
    TbQuoteOff,
    TbQuote,
    TbQuotes,
    TbRadar2,
    TbRadarOff,
    TbRadar,
    TbRadioOff,
    TbRadio,
    TbRadioactiveOff,
    TbRadioactive,
    TbRadiusBottomLeft,
    TbRadiusBottomRight,
    TbRadiusTopLeft,
    TbRadiusTopRight,
    TbRainbowOff,
    TbRainbow,
    TbRating12Plus,
    TbRating14Plus,
    TbRating16Plus,
    TbRating18Plus,
    TbRating21Plus,
    TbRazorElectric,
    TbRazor,
    TbReceipt2,
    TbReceiptBitcoin,
    TbReceiptDollar,
    TbReceiptEuro,
    TbReceiptOff,
    TbReceiptPound,
    TbReceiptRefund,
    TbReceiptRupee,
    TbReceiptTax,
    TbReceiptYen,
    TbReceiptYuan,
    TbReceipt,
    TbRecharging,
    TbRecordMailOff,
    TbRecordMail,
    TbRectangleRoundedBottom,
    TbRectangleRoundedTop,
    TbRectangleVertical,
    TbRectangle,
    TbRectangularPrismOff,
    TbRectangularPrismPlus,
    TbRectangularPrism,
    TbRecycleOff,
    TbRecycle,
    TbRefreshAlert,
    TbRefreshDot,
    TbRefreshOff,
    TbRefresh,
    TbRegexOff,
    TbRegex,
    TbRegistered,
    TbRelationManyToMany,
    TbRelationOneToMany,
    TbRelationOneToOne,
    TbReload,
    TbReorder,
    TbRepeatOff,
    TbRepeatOnce,
    TbRepeat,
    TbReplaceOff,
    TbReplace,
    TbReportAnalytics,
    TbReportMedical,
    TbReportMoney,
    TbReportOff,
    TbReportSearch,
    TbReport,
    TbReservedLine,
    TbResize,
    TbRestore,
    TbRewindBackward10,
    TbRewindBackward15,
    TbRewindBackward20,
    TbRewindBackward30,
    TbRewindBackward40,
    TbRewindBackward5,
    TbRewindBackward50,
    TbRewindBackward60,
    TbRewindForward10,
    TbRewindForward15,
    TbRewindForward20,
    TbRewindForward30,
    TbRewindForward40,
    TbRewindForward5,
    TbRewindForward50,
    TbRewindForward60,
    TbRibbonHealth,
    TbRings,
    TbRippleOff,
    TbRipple,
    TbRoadOff,
    TbRoadSign,
    TbRoad,
    TbRobotFace,
    TbRobotOff,
    TbRobot,
    TbRocketOff,
    TbRocket,
    TbRollerSkating,
    TbRollercoasterOff,
    TbRollercoaster,
    TbRosetteDiscountCheckOff,
    TbRosetteDiscountCheck,
    TbRosetteDiscountOff,
    TbRosetteDiscount,
    TbRosetteNumber0,
    TbRosetteNumber1,
    TbRosetteNumber2,
    TbRosetteNumber3,
    TbRosetteNumber4,
    TbRosetteNumber5,
    TbRosetteNumber6,
    TbRosetteNumber7,
    TbRosetteNumber8,
    TbRosetteNumber9,
    TbRosette,
    TbRotate2,
    TbRotate360,
    TbRotate3D,
    TbRotateClockwise2,
    TbRotateClockwise,
    TbRotateDot,
    TbRotateRectangle,
    TbRotate,
    TbRoute2,
    TbRouteAltLeft,
    TbRouteAltRight,
    TbRouteOff,
    TbRouteScan,
    TbRouteSquare2,
    TbRouteSquare,
    TbRouteX2,
    TbRouteX,
    TbRoute,
    TbRouterOff,
    TbRouter,
    TbRowInsertBottom,
    TbRowInsertTop,
    TbRowRemove,
    TbRss,
    TbRubberStampOff,
    TbRubberStamp,
    TbRuler2Off,
    TbRuler2,
    TbRuler3,
    TbRulerMeasure2,
    TbRulerMeasure,
    TbRulerOff,
    TbRuler,
    TbRun,
    TbRvTruck,
    TbSTurnDown,
    TbSTurnLeft,
    TbSTurnRight,
    TbSTurnUp,
    TbSailboat2,
    TbSailboatOff,
    TbSailboat,
    TbSalad,
    TbSalt,
    TbSandbox,
    TbSatelliteOff,
    TbSatellite,
    TbSausage,
    TbScaleOff,
    TbScaleOutlineOff,
    TbScaleOutline,
    TbScale,
    TbScanEye,
    TbScanPosition,
    TbScan,
    TbSchemaOff,
    TbSchema,
    TbSchoolBell,
    TbSchoolOff,
    TbSchool,
    TbScissorsOff,
    TbScissors,
    TbScooterElectric,
    TbScooter,
    TbScoreboard,
    TbScreenShareOff,
    TbScreenShare,
    TbScreenshot,
    TbScribbleOff,
    TbScribble,
    TbScriptMinus,
    TbScriptPlus,
    TbScriptX,
    TbScript,
    TbScubaDivingTank,
    TbScubaDiving,
    TbScubaMaskOff,
    TbScubaMask,
    TbSdk,
    TbSearchOff,
    TbSearch,
    TbSectionSign,
    TbSection,
    TbSeedingOff,
    TbSeeding,
    TbSelectAll,
    TbSelect,
    TbSelector,
    TbSend2,
    TbSendOff,
    TbSend,
    TbSeo,
    TbSeparatorHorizontal,
    TbSeparatorVertical,
    TbSeparator,
    TbServer2,
    TbServerBolt,
    TbServerCog,
    TbServerOff,
    TbServerSpark,
    TbServer,
    TbServicemark,
    TbSettings2,
    TbSettingsAutomation,
    TbSettingsBolt,
    TbSettingsCancel,
    TbSettingsCheck,
    TbSettingsCode,
    TbSettingsCog,
    TbSettingsDollar,
    TbSettingsDown,
    TbSettingsExclamation,
    TbSettingsHeart,
    TbSettingsMinus,
    TbSettingsOff,
    TbSettingsPause,
    TbSettingsPin,
    TbSettingsPlus,
    TbSettingsQuestion,
    TbSettingsSearch,
    TbSettingsShare,
    TbSettingsSpark,
    TbSettingsStar,
    TbSettingsUp,
    TbSettingsX,
    TbSettings,
    TbShadowOff,
    TbShadow,
    TbShape2,
    TbShape3,
    TbShapeOff,
    TbShape,
    TbShare2,
    TbShare3,
    TbShareOff,
    TbShare,
    TbShareplay,
    TbShieldBolt,
    TbShieldCancel,
    TbShieldCheck,
    TbShieldCheckered,
    TbShieldChevron,
    TbShieldCode,
    TbShieldCog,
    TbShieldDollar,
    TbShieldDown,
    TbShieldExclamation,
    TbShieldHalf,
    TbShieldHeart,
    TbShieldLock,
    TbShieldMinus,
    TbShieldOff,
    TbShieldPause,
    TbShieldPin,
    TbShieldPlus,
    TbShieldQuestion,
    TbShieldSearch,
    TbShieldShare,
    TbShieldStar,
    TbShieldUp,
    TbShieldX,
    TbShield,
    TbShipOff,
    TbShip,
    TbShirtOff,
    TbShirtSport,
    TbShirt,
    TbShoeOff,
    TbShoe,
    TbShoppingBagCheck,
    TbShoppingBagDiscount,
    TbShoppingBagEdit,
    TbShoppingBagExclamation,
    TbShoppingBagHeart,
    TbShoppingBagMinus,
    TbShoppingBagPlus,
    TbShoppingBagSearch,
    TbShoppingBagX,
    TbShoppingBag,
    TbShoppingCartBolt,
    TbShoppingCartCancel,
    TbShoppingCartCheck,
    TbShoppingCartCode,
    TbShoppingCartCog,
    TbShoppingCartCopy,
    TbShoppingCartDiscount,
    TbShoppingCartDollar,
    TbShoppingCartDown,
    TbShoppingCartExclamation,
    TbShoppingCartHeart,
    TbShoppingCartMinus,
    TbShoppingCartOff,
    TbShoppingCartPause,
    TbShoppingCartPin,
    TbShoppingCartPlus,
    TbShoppingCartQuestion,
} from "react-icons/tb"

export function nameToReactIcon_tb_4(iconName: string): IconType | undefined {

    switch(iconName) {
        case "tb:TbMessage2Code":
            return TbMessage2Code;
        case "tb:TbMessage2Cog":
            return TbMessage2Cog;
        case "tb:TbMessage2Dollar":
            return TbMessage2Dollar;
        case "tb:TbMessage2Down":
            return TbMessage2Down;
        case "tb:TbMessage2Exclamation":
            return TbMessage2Exclamation;
        case "tb:TbMessage2Heart":
            return TbMessage2Heart;
        case "tb:TbMessage2Minus":
            return TbMessage2Minus;
        case "tb:TbMessage2Off":
            return TbMessage2Off;
        case "tb:TbMessage2Pause":
            return TbMessage2Pause;
        case "tb:TbMessage2Pin":
            return TbMessage2Pin;
        case "tb:TbMessage2Plus":
            return TbMessage2Plus;
        case "tb:TbMessage2Question":
            return TbMessage2Question;
        case "tb:TbMessage2Search":
            return TbMessage2Search;
        case "tb:TbMessage2Share":
            return TbMessage2Share;
        case "tb:TbMessage2Star":
            return TbMessage2Star;
        case "tb:TbMessage2Up":
            return TbMessage2Up;
        case "tb:TbMessage2X":
            return TbMessage2X;
        case "tb:TbMessage2":
            return TbMessage2;
        case "tb:TbMessageBolt":
            return TbMessageBolt;
        case "tb:TbMessageCancel":
            return TbMessageCancel;
        case "tb:TbMessageChatbot":
            return TbMessageChatbot;
        case "tb:TbMessageCheck":
            return TbMessageCheck;
        case "tb:TbMessageCircleBolt":
            return TbMessageCircleBolt;
        case "tb:TbMessageCircleCancel":
            return TbMessageCircleCancel;
        case "tb:TbMessageCircleCheck":
            return TbMessageCircleCheck;
        case "tb:TbMessageCircleCode":
            return TbMessageCircleCode;
        case "tb:TbMessageCircleCog":
            return TbMessageCircleCog;
        case "tb:TbMessageCircleDollar":
            return TbMessageCircleDollar;
        case "tb:TbMessageCircleDown":
            return TbMessageCircleDown;
        case "tb:TbMessageCircleExclamation":
            return TbMessageCircleExclamation;
        case "tb:TbMessageCircleHeart":
            return TbMessageCircleHeart;
        case "tb:TbMessageCircleMinus":
            return TbMessageCircleMinus;
        case "tb:TbMessageCircleOff":
            return TbMessageCircleOff;
        case "tb:TbMessageCirclePause":
            return TbMessageCirclePause;
        case "tb:TbMessageCirclePin":
            return TbMessageCirclePin;
        case "tb:TbMessageCirclePlus":
            return TbMessageCirclePlus;
        case "tb:TbMessageCircleQuestion":
            return TbMessageCircleQuestion;
        case "tb:TbMessageCircleSearch":
            return TbMessageCircleSearch;
        case "tb:TbMessageCircleShare":
            return TbMessageCircleShare;
        case "tb:TbMessageCircleStar":
            return TbMessageCircleStar;
        case "tb:TbMessageCircleUp":
            return TbMessageCircleUp;
        case "tb:TbMessageCircleUser":
            return TbMessageCircleUser;
        case "tb:TbMessageCircleX":
            return TbMessageCircleX;
        case "tb:TbMessageCircle":
            return TbMessageCircle;
        case "tb:TbMessageCode":
            return TbMessageCode;
        case "tb:TbMessageCog":
            return TbMessageCog;
        case "tb:TbMessageDollar":
            return TbMessageDollar;
        case "tb:TbMessageDots":
            return TbMessageDots;
        case "tb:TbMessageDown":
            return TbMessageDown;
        case "tb:TbMessageExclamation":
            return TbMessageExclamation;
        case "tb:TbMessageForward":
            return TbMessageForward;
        case "tb:TbMessageHeart":
            return TbMessageHeart;
        case "tb:TbMessageLanguage":
            return TbMessageLanguage;
        case "tb:TbMessageMinus":
            return TbMessageMinus;
        case "tb:TbMessageOff":
            return TbMessageOff;
        case "tb:TbMessagePause":
            return TbMessagePause;
        case "tb:TbMessagePin":
            return TbMessagePin;
        case "tb:TbMessagePlus":
            return TbMessagePlus;
        case "tb:TbMessageQuestion":
            return TbMessageQuestion;
        case "tb:TbMessageReply":
            return TbMessageReply;
        case "tb:TbMessageReport":
            return TbMessageReport;
        case "tb:TbMessageSearch":
            return TbMessageSearch;
        case "tb:TbMessageShare":
            return TbMessageShare;
        case "tb:TbMessageStar":
            return TbMessageStar;
        case "tb:TbMessageUp":
            return TbMessageUp;
        case "tb:TbMessageUser":
            return TbMessageUser;
        case "tb:TbMessageX":
            return TbMessageX;
        case "tb:TbMessage":
            return TbMessage;
        case "tb:TbMessagesOff":
            return TbMessagesOff;
        case "tb:TbMessages":
            return TbMessages;
        case "tb:TbMeteorOff":
            return TbMeteorOff;
        case "tb:TbMeteor":
            return TbMeteor;
        case "tb:TbMeterCube":
            return TbMeterCube;
        case "tb:TbMeterSquare":
            return TbMeterSquare;
        case "tb:TbMetronome":
            return TbMetronome;
        case "tb:TbMichelinBibGourmand":
            return TbMichelinBibGourmand;
        case "tb:TbMichelinStarGreen":
            return TbMichelinStarGreen;
        case "tb:TbMichelinStar":
            return TbMichelinStar;
        case "tb:TbMickey":
            return TbMickey;
        case "tb:TbMicrophone2Off":
            return TbMicrophone2Off;
        case "tb:TbMicrophone2":
            return TbMicrophone2;
        case "tb:TbMicrophoneOff":
            return TbMicrophoneOff;
        case "tb:TbMicrophone":
            return TbMicrophone;
        case "tb:TbMicroscopeOff":
            return TbMicroscopeOff;
        case "tb:TbMicroscope":
            return TbMicroscope;
        case "tb:TbMicrowaveOff":
            return TbMicrowaveOff;
        case "tb:TbMicrowave":
            return TbMicrowave;
        case "tb:TbMilitaryAward":
            return TbMilitaryAward;
        case "tb:TbMilitaryRank":
            return TbMilitaryRank;
        case "tb:TbMilkOff":
            return TbMilkOff;
        case "tb:TbMilk":
            return TbMilk;
        case "tb:TbMilkshake":
            return TbMilkshake;
        case "tb:TbMinimize":
            return TbMinimize;
        case "tb:TbMinusVertical":
            return TbMinusVertical;
        case "tb:TbMinus":
            return TbMinus;
        case "tb:TbMistOff":
            return TbMistOff;
        case "tb:TbMist":
            return TbMist;
        case "tb:TbMobiledataOff":
            return TbMobiledataOff;
        case "tb:TbMobiledata":
            return TbMobiledata;
        case "tb:TbMoneybag":
            return TbMoneybag;
        case "tb:TbMonkeybar":
            return TbMonkeybar;
        case "tb:TbMoodAngry":
            return TbMoodAngry;
        case "tb:TbMoodAnnoyed2":
            return TbMoodAnnoyed2;
        case "tb:TbMoodAnnoyed":
            return TbMoodAnnoyed;
        case "tb:TbMoodBitcoin":
            return TbMoodBitcoin;
        case "tb:TbMoodBoy":
            return TbMoodBoy;
        case "tb:TbMoodCheck":
            return TbMoodCheck;
        case "tb:TbMoodCog":
            return TbMoodCog;
        case "tb:TbMoodConfuzed":
            return TbMoodConfuzed;
        case "tb:TbMoodCrazyHappy":
            return TbMoodCrazyHappy;
        case "tb:TbMoodCry":
            return TbMoodCry;
        case "tb:TbMoodDollar":
            return TbMoodDollar;
        case "tb:TbMoodEdit":
            return TbMoodEdit;
        case "tb:TbMoodEmpty":
            return TbMoodEmpty;
        case "tb:TbMoodHappy":
            return TbMoodHappy;
        case "tb:TbMoodHeart":
            return TbMoodHeart;
        case "tb:TbMoodKid":
            return TbMoodKid;
        case "tb:TbMoodLookDown":
            return TbMoodLookDown;
        case "tb:TbMoodLookLeft":
            return TbMoodLookLeft;
        case "tb:TbMoodLookRight":
            return TbMoodLookRight;
        case "tb:TbMoodLookUp":
            return TbMoodLookUp;
        case "tb:TbMoodMinus":
            return TbMoodMinus;
        case "tb:TbMoodNerd":
            return TbMoodNerd;
        case "tb:TbMoodNervous":
            return TbMoodNervous;
        case "tb:TbMoodNeutral":
            return TbMoodNeutral;
        case "tb:TbMoodOff":
            return TbMoodOff;
        case "tb:TbMoodPin":
            return TbMoodPin;
        case "tb:TbMoodPlus":
            return TbMoodPlus;
        case "tb:TbMoodPuzzled":
            return TbMoodPuzzled;
        case "tb:TbMoodSad2":
            return TbMoodSad2;
        case "tb:TbMoodSadDizzy":
            return TbMoodSadDizzy;
        case "tb:TbMoodSadSquint":
            return TbMoodSadSquint;
        case "tb:TbMoodSad":
            return TbMoodSad;
        case "tb:TbMoodSearch":
            return TbMoodSearch;
        case "tb:TbMoodShare":
            return TbMoodShare;
        case "tb:TbMoodSick":
            return TbMoodSick;
        case "tb:TbMoodSilence":
            return TbMoodSilence;
        case "tb:TbMoodSing":
            return TbMoodSing;
        case "tb:TbMoodSmileBeam":
            return TbMoodSmileBeam;
        case "tb:TbMoodSmileDizzy":
            return TbMoodSmileDizzy;
        case "tb:TbMoodSmile":
            return TbMoodSmile;
        case "tb:TbMoodSpark":
            return TbMoodSpark;
        case "tb:TbMoodSurprised":
            return TbMoodSurprised;
        case "tb:TbMoodTongueWink2":
            return TbMoodTongueWink2;
        case "tb:TbMoodTongueWink":
            return TbMoodTongueWink;
        case "tb:TbMoodTongue":
            return TbMoodTongue;
        case "tb:TbMoodUnamused":
            return TbMoodUnamused;
        case "tb:TbMoodUp":
            return TbMoodUp;
        case "tb:TbMoodWink2":
            return TbMoodWink2;
        case "tb:TbMoodWink":
            return TbMoodWink;
        case "tb:TbMoodWrrr":
            return TbMoodWrrr;
        case "tb:TbMoodX":
            return TbMoodX;
        case "tb:TbMoodXd":
            return TbMoodXd;
        case "tb:TbMoon2":
            return TbMoon2;
        case "tb:TbMoonOff":
            return TbMoonOff;
        case "tb:TbMoonStars":
            return TbMoonStars;
        case "tb:TbMoon":
            return TbMoon;
        case "tb:TbMoped":
            return TbMoped;
        case "tb:TbMotorbike":
            return TbMotorbike;
        case "tb:TbMountainOff":
            return TbMountainOff;
        case "tb:TbMountain":
            return TbMountain;
        case "tb:TbMouse2":
            return TbMouse2;
        case "tb:TbMouseOff":
            return TbMouseOff;
        case "tb:TbMouse":
            return TbMouse;
        case "tb:TbMoustache":
            return TbMoustache;
        case "tb:TbMovieOff":
            return TbMovieOff;
        case "tb:TbMovie":
            return TbMovie;
        case "tb:TbMugOff":
            return TbMugOff;
        case "tb:TbMug":
            return TbMug;
        case "tb:TbMultiplier05X":
            return TbMultiplier05X;
        case "tb:TbMultiplier15X":
            return TbMultiplier15X;
        case "tb:TbMultiplier1X":
            return TbMultiplier1X;
        case "tb:TbMultiplier2X":
            return TbMultiplier2X;
        case "tb:TbMushroomOff":
            return TbMushroomOff;
        case "tb:TbMushroom":
            return TbMushroom;
        case "tb:TbMusicBolt":
            return TbMusicBolt;
        case "tb:TbMusicCancel":
            return TbMusicCancel;
        case "tb:TbMusicCheck":
            return TbMusicCheck;
        case "tb:TbMusicCode":
            return TbMusicCode;
        case "tb:TbMusicCog":
            return TbMusicCog;
        case "tb:TbMusicDiscount":
            return TbMusicDiscount;
        case "tb:TbMusicDollar":
            return TbMusicDollar;
        case "tb:TbMusicDown":
            return TbMusicDown;
        case "tb:TbMusicExclamation":
            return TbMusicExclamation;
        case "tb:TbMusicHeart":
            return TbMusicHeart;
        case "tb:TbMusicMinus":
            return TbMusicMinus;
        case "tb:TbMusicOff":
            return TbMusicOff;
        case "tb:TbMusicPause":
            return TbMusicPause;
        case "tb:TbMusicPin":
            return TbMusicPin;
        case "tb:TbMusicPlus":
            return TbMusicPlus;
        case "tb:TbMusicQuestion":
            return TbMusicQuestion;
        case "tb:TbMusicSearch":
            return TbMusicSearch;
        case "tb:TbMusicShare":
            return TbMusicShare;
        case "tb:TbMusicStar":
            return TbMusicStar;
        case "tb:TbMusicUp":
            return TbMusicUp;
        case "tb:TbMusicX":
            return TbMusicX;
        case "tb:TbMusic":
            return TbMusic;
        case "tb:TbNavigationBolt":
            return TbNavigationBolt;
        case "tb:TbNavigationCancel":
            return TbNavigationCancel;
        case "tb:TbNavigationCheck":
            return TbNavigationCheck;
        case "tb:TbNavigationCode":
            return TbNavigationCode;
        case "tb:TbNavigationCog":
            return TbNavigationCog;
        case "tb:TbNavigationDiscount":
            return TbNavigationDiscount;
        case "tb:TbNavigationDollar":
            return TbNavigationDollar;
        case "tb:TbNavigationDown":
            return TbNavigationDown;
        case "tb:TbNavigationEast":
            return TbNavigationEast;
        case "tb:TbNavigationExclamation":
            return TbNavigationExclamation;
        case "tb:TbNavigationHeart":
            return TbNavigationHeart;
        case "tb:TbNavigationMinus":
            return TbNavigationMinus;
        case "tb:TbNavigationNorth":
            return TbNavigationNorth;
        case "tb:TbNavigationOff":
            return TbNavigationOff;
        case "tb:TbNavigationPause":
            return TbNavigationPause;
        case "tb:TbNavigationPin":
            return TbNavigationPin;
        case "tb:TbNavigationPlus":
            return TbNavigationPlus;
        case "tb:TbNavigationQuestion":
            return TbNavigationQuestion;
        case "tb:TbNavigationSearch":
            return TbNavigationSearch;
        case "tb:TbNavigationShare":
            return TbNavigationShare;
        case "tb:TbNavigationSouth":
            return TbNavigationSouth;
        case "tb:TbNavigationStar":
            return TbNavigationStar;
        case "tb:TbNavigationTop":
            return TbNavigationTop;
        case "tb:TbNavigationUp":
            return TbNavigationUp;
        case "tb:TbNavigationWest":
            return TbNavigationWest;
        case "tb:TbNavigationX":
            return TbNavigationX;
        case "tb:TbNavigation":
            return TbNavigation;
        case "tb:TbNeedleThread":
            return TbNeedleThread;
        case "tb:TbNeedle":
            return TbNeedle;
        case "tb:TbNetworkOff":
            return TbNetworkOff;
        case "tb:TbNetwork":
            return TbNetwork;
        case "tb:TbNewSection":
            return TbNewSection;
        case "tb:TbNewsOff":
            return TbNewsOff;
        case "tb:TbNews":
            return TbNews;
        case "tb:TbNfcOff":
            return TbNfcOff;
        case "tb:TbNfc":
            return TbNfc;
        case "tb:TbNoCopyright":
            return TbNoCopyright;
        case "tb:TbNoCreativeCommons":
            return TbNoCreativeCommons;
        case "tb:TbNoDerivatives":
            return TbNoDerivatives;
        case "tb:TbNorthStar":
            return TbNorthStar;
        case "tb:TbNoteOff":
            return TbNoteOff;
        case "tb:TbNote":
            return TbNote;
        case "tb:TbNotebookOff":
            return TbNotebookOff;
        case "tb:TbNotebook":
            return TbNotebook;
        case "tb:TbNotesOff":
            return TbNotesOff;
        case "tb:TbNotes":
            return TbNotes;
        case "tb:TbNotificationOff":
            return TbNotificationOff;
        case "tb:TbNotification":
            return TbNotification;
        case "tb:TbNumber0Small":
            return TbNumber0Small;
        case "tb:TbNumber0":
            return TbNumber0;
        case "tb:TbNumber1Small":
            return TbNumber1Small;
        case "tb:TbNumber1":
            return TbNumber1;
        case "tb:TbNumber10Small":
            return TbNumber10Small;
        case "tb:TbNumber10":
            return TbNumber10;
        case "tb:TbNumber100Small":
            return TbNumber100Small;
        case "tb:TbNumber11Small":
            return TbNumber11Small;
        case "tb:TbNumber11":
            return TbNumber11;
        case "tb:TbNumber12Small":
            return TbNumber12Small;
        case "tb:TbNumber123":
            return TbNumber123;
        case "tb:TbNumber13Small":
            return TbNumber13Small;
        case "tb:TbNumber14Small":
            return TbNumber14Small;
        case "tb:TbNumber15Small":
            return TbNumber15Small;
        case "tb:TbNumber16Small":
            return TbNumber16Small;
        case "tb:TbNumber17Small":
            return TbNumber17Small;
        case "tb:TbNumber18Small":
            return TbNumber18Small;
        case "tb:TbNumber19Small":
            return TbNumber19Small;
        case "tb:TbNumber2Small":
            return TbNumber2Small;
        case "tb:TbNumber2":
            return TbNumber2;
        case "tb:TbNumber20Small":
            return TbNumber20Small;
        case "tb:TbNumber21Small":
            return TbNumber21Small;
        case "tb:TbNumber22Small":
            return TbNumber22Small;
        case "tb:TbNumber23Small":
            return TbNumber23Small;
        case "tb:TbNumber24Small":
            return TbNumber24Small;
        case "tb:TbNumber25Small":
            return TbNumber25Small;
        case "tb:TbNumber26Small":
            return TbNumber26Small;
        case "tb:TbNumber27Small":
            return TbNumber27Small;
        case "tb:TbNumber28Small":
            return TbNumber28Small;
        case "tb:TbNumber29Small":
            return TbNumber29Small;
        case "tb:TbNumber3Small":
            return TbNumber3Small;
        case "tb:TbNumber3":
            return TbNumber3;
        case "tb:TbNumber30Small":
            return TbNumber30Small;
        case "tb:TbNumber31Small":
            return TbNumber31Small;
        case "tb:TbNumber32Small":
            return TbNumber32Small;
        case "tb:TbNumber33Small":
            return TbNumber33Small;
        case "tb:TbNumber34Small":
            return TbNumber34Small;
        case "tb:TbNumber35Small":
            return TbNumber35Small;
        case "tb:TbNumber36Small":
            return TbNumber36Small;
        case "tb:TbNumber37Small":
            return TbNumber37Small;
        case "tb:TbNumber38Small":
            return TbNumber38Small;
        case "tb:TbNumber39Small":
            return TbNumber39Small;
        case "tb:TbNumber4Small":
            return TbNumber4Small;
        case "tb:TbNumber4":
            return TbNumber4;
        case "tb:TbNumber40Small":
            return TbNumber40Small;
        case "tb:TbNumber41Small":
            return TbNumber41Small;
        case "tb:TbNumber42Small":
            return TbNumber42Small;
        case "tb:TbNumber43Small":
            return TbNumber43Small;
        case "tb:TbNumber44Small":
            return TbNumber44Small;
        case "tb:TbNumber45Small":
            return TbNumber45Small;
        case "tb:TbNumber46Small":
            return TbNumber46Small;
        case "tb:TbNumber47Small":
            return TbNumber47Small;
        case "tb:TbNumber48Small":
            return TbNumber48Small;
        case "tb:TbNumber49Small":
            return TbNumber49Small;
        case "tb:TbNumber5Small":
            return TbNumber5Small;
        case "tb:TbNumber5":
            return TbNumber5;
        case "tb:TbNumber50Small":
            return TbNumber50Small;
        case "tb:TbNumber51Small":
            return TbNumber51Small;
        case "tb:TbNumber52Small":
            return TbNumber52Small;
        case "tb:TbNumber53Small":
            return TbNumber53Small;
        case "tb:TbNumber54Small":
            return TbNumber54Small;
        case "tb:TbNumber55Small":
            return TbNumber55Small;
        case "tb:TbNumber56Small":
            return TbNumber56Small;
        case "tb:TbNumber57Small":
            return TbNumber57Small;
        case "tb:TbNumber58Small":
            return TbNumber58Small;
        case "tb:TbNumber59Small":
            return TbNumber59Small;
        case "tb:TbNumber6Small":
            return TbNumber6Small;
        case "tb:TbNumber6":
            return TbNumber6;
        case "tb:TbNumber60Small":
            return TbNumber60Small;
        case "tb:TbNumber61Small":
            return TbNumber61Small;
        case "tb:TbNumber62Small":
            return TbNumber62Small;
        case "tb:TbNumber63Small":
            return TbNumber63Small;
        case "tb:TbNumber64Small":
            return TbNumber64Small;
        case "tb:TbNumber65Small":
            return TbNumber65Small;
        case "tb:TbNumber66Small":
            return TbNumber66Small;
        case "tb:TbNumber67Small":
            return TbNumber67Small;
        case "tb:TbNumber68Small":
            return TbNumber68Small;
        case "tb:TbNumber69Small":
            return TbNumber69Small;
        case "tb:TbNumber7Small":
            return TbNumber7Small;
        case "tb:TbNumber7":
            return TbNumber7;
        case "tb:TbNumber70Small":
            return TbNumber70Small;
        case "tb:TbNumber71Small":
            return TbNumber71Small;
        case "tb:TbNumber72Small":
            return TbNumber72Small;
        case "tb:TbNumber73Small":
            return TbNumber73Small;
        case "tb:TbNumber74Small":
            return TbNumber74Small;
        case "tb:TbNumber75Small":
            return TbNumber75Small;
        case "tb:TbNumber76Small":
            return TbNumber76Small;
        case "tb:TbNumber77Small":
            return TbNumber77Small;
        case "tb:TbNumber78Small":
            return TbNumber78Small;
        case "tb:TbNumber79Small":
            return TbNumber79Small;
        case "tb:TbNumber8Small":
            return TbNumber8Small;
        case "tb:TbNumber8":
            return TbNumber8;
        case "tb:TbNumber80Small":
            return TbNumber80Small;
        case "tb:TbNumber81Small":
            return TbNumber81Small;
        case "tb:TbNumber82Small":
            return TbNumber82Small;
        case "tb:TbNumber83Small":
            return TbNumber83Small;
        case "tb:TbNumber84Small":
            return TbNumber84Small;
        case "tb:TbNumber85Small":
            return TbNumber85Small;
        case "tb:TbNumber86Small":
            return TbNumber86Small;
        case "tb:TbNumber87Small":
            return TbNumber87Small;
        case "tb:TbNumber88Small":
            return TbNumber88Small;
        case "tb:TbNumber89Small":
            return TbNumber89Small;
        case "tb:TbNumber9Small":
            return TbNumber9Small;
        case "tb:TbNumber9":
            return TbNumber9;
        case "tb:TbNumber90Small":
            return TbNumber90Small;
        case "tb:TbNumber91Small":
            return TbNumber91Small;
        case "tb:TbNumber92Small":
            return TbNumber92Small;
        case "tb:TbNumber93Small":
            return TbNumber93Small;
        case "tb:TbNumber94Small":
            return TbNumber94Small;
        case "tb:TbNumber95Small":
            return TbNumber95Small;
        case "tb:TbNumber96Small":
            return TbNumber96Small;
        case "tb:TbNumber97Small":
            return TbNumber97Small;
        case "tb:TbNumber98Small":
            return TbNumber98Small;
        case "tb:TbNumber99Small":
            return TbNumber99Small;
        case "tb:TbNumber":
            return TbNumber;
        case "tb:TbNumbers":
            return TbNumbers;
        case "tb:TbNurse":
            return TbNurse;
        case "tb:TbNut":
            return TbNut;
        case "tb:TbObjectScan":
            return TbObjectScan;
        case "tb:TbOctagonMinus2":
            return TbOctagonMinus2;
        case "tb:TbOctagonMinus":
            return TbOctagonMinus;
        case "tb:TbOctagonOff":
            return TbOctagonOff;
        case "tb:TbOctagonPlus2":
            return TbOctagonPlus2;
        case "tb:TbOctagonPlus":
            return TbOctagonPlus;
        case "tb:TbOctagon":
            return TbOctagon;
        case "tb:TbOctahedronOff":
            return TbOctahedronOff;
        case "tb:TbOctahedronPlus":
            return TbOctahedronPlus;
        case "tb:TbOctahedron":
            return TbOctahedron;
        case "tb:TbOld":
            return TbOld;
        case "tb:TbOlympicsOff":
            return TbOlympicsOff;
        case "tb:TbOlympics":
            return TbOlympics;
        case "tb:TbOm":
            return TbOm;
        case "tb:TbOmega":
            return TbOmega;
        case "tb:TbOutbound":
            return TbOutbound;
        case "tb:TbOutlet":
            return TbOutlet;
        case "tb:TbOvalVertical":
            return TbOvalVertical;
        case "tb:TbOval":
            return TbOval;
        case "tb:TbOverline":
            return TbOverline;
        case "tb:TbPackageExport":
            return TbPackageExport;
        case "tb:TbPackageImport":
            return TbPackageImport;
        case "tb:TbPackageOff":
            return TbPackageOff;
        case "tb:TbPackage":
            return TbPackage;
        case "tb:TbPackages":
            return TbPackages;
        case "tb:TbPacman":
            return TbPacman;
        case "tb:TbPageBreak":
            return TbPageBreak;
        case "tb:TbPaintOff":
            return TbPaintOff;
        case "tb:TbPaint":
            return TbPaint;
        case "tb:TbPaletteOff":
            return TbPaletteOff;
        case "tb:TbPalette":
            return TbPalette;
        case "tb:TbPanoramaHorizontalOff":
            return TbPanoramaHorizontalOff;
        case "tb:TbPanoramaHorizontal":
            return TbPanoramaHorizontal;
        case "tb:TbPanoramaVerticalOff":
            return TbPanoramaVerticalOff;
        case "tb:TbPanoramaVertical":
            return TbPanoramaVertical;
        case "tb:TbPaperBagOff":
            return TbPaperBagOff;
        case "tb:TbPaperBag":
            return TbPaperBag;
        case "tb:TbPaperclip":
            return TbPaperclip;
        case "tb:TbParachuteOff":
            return TbParachuteOff;
        case "tb:TbParachute":
            return TbParachute;
        case "tb:TbParenthesesOff":
            return TbParenthesesOff;
        case "tb:TbParentheses":
            return TbParentheses;
        case "tb:TbParkingCircle":
            return TbParkingCircle;
        case "tb:TbParkingOff":
            return TbParkingOff;
        case "tb:TbParking":
            return TbParking;
        case "tb:TbPasswordFingerprint":
            return TbPasswordFingerprint;
        case "tb:TbPasswordMobilePhone":
            return TbPasswordMobilePhone;
        case "tb:TbPasswordUser":
            return TbPasswordUser;
        case "tb:TbPassword":
            return TbPassword;
        case "tb:TbPawOff":
            return TbPawOff;
        case "tb:TbPaw":
            return TbPaw;
        case "tb:TbPaywall":
            return TbPaywall;
        case "tb:TbPdf":
            return TbPdf;
        case "tb:TbPeace":
            return TbPeace;
        case "tb:TbPencilBolt":
            return TbPencilBolt;
        case "tb:TbPencilCancel":
            return TbPencilCancel;
        case "tb:TbPencilCheck":
            return TbPencilCheck;
        case "tb:TbPencilCode":
            return TbPencilCode;
        case "tb:TbPencilCog":
            return TbPencilCog;
        case "tb:TbPencilDiscount":
            return TbPencilDiscount;
        case "tb:TbPencilDollar":
            return TbPencilDollar;
        case "tb:TbPencilDown":
            return TbPencilDown;
        case "tb:TbPencilExclamation":
            return TbPencilExclamation;
        case "tb:TbPencilHeart":
            return TbPencilHeart;
        case "tb:TbPencilMinus":
            return TbPencilMinus;
        case "tb:TbPencilOff":
            return TbPencilOff;
        case "tb:TbPencilPause":
            return TbPencilPause;
        case "tb:TbPencilPin":
            return TbPencilPin;
        case "tb:TbPencilPlus":
            return TbPencilPlus;
        case "tb:TbPencilQuestion":
            return TbPencilQuestion;
        case "tb:TbPencilSearch":
            return TbPencilSearch;
        case "tb:TbPencilShare":
            return TbPencilShare;
        case "tb:TbPencilStar":
            return TbPencilStar;
        case "tb:TbPencilUp":
            return TbPencilUp;
        case "tb:TbPencilX":
            return TbPencilX;
        case "tb:TbPencil":
            return TbPencil;
        case "tb:TbPennant2":
            return TbPennant2;
        case "tb:TbPennantOff":
            return TbPennantOff;
        case "tb:TbPennant":
            return TbPennant;
        case "tb:TbPentagonMinus":
            return TbPentagonMinus;
        case "tb:TbPentagonNumber0":
            return TbPentagonNumber0;
        case "tb:TbPentagonNumber1":
            return TbPentagonNumber1;
        case "tb:TbPentagonNumber2":
            return TbPentagonNumber2;
        case "tb:TbPentagonNumber3":
            return TbPentagonNumber3;
        case "tb:TbPentagonNumber4":
            return TbPentagonNumber4;
        case "tb:TbPentagonNumber5":
            return TbPentagonNumber5;
        case "tb:TbPentagonNumber6":
            return TbPentagonNumber6;
        case "tb:TbPentagonNumber7":
            return TbPentagonNumber7;
        case "tb:TbPentagonNumber8":
            return TbPentagonNumber8;
        case "tb:TbPentagonNumber9":
            return TbPentagonNumber9;
        case "tb:TbPentagonOff":
            return TbPentagonOff;
        case "tb:TbPentagonPlus":
            return TbPentagonPlus;
        case "tb:TbPentagonX":
            return TbPentagonX;
        case "tb:TbPentagon":
            return TbPentagon;
        case "tb:TbPentagram":
            return TbPentagram;
        case "tb:TbPepperOff":
            return TbPepperOff;
        case "tb:TbPepper":
            return TbPepper;
        case "tb:TbPercentage0":
            return TbPercentage0;
        case "tb:TbPercentage10":
            return TbPercentage10;
        case "tb:TbPercentage100":
            return TbPercentage100;
        case "tb:TbPercentage20":
            return TbPercentage20;
        case "tb:TbPercentage25":
            return TbPercentage25;
        case "tb:TbPercentage30":
            return TbPercentage30;
        case "tb:TbPercentage33":
            return TbPercentage33;
        case "tb:TbPercentage40":
            return TbPercentage40;
        case "tb:TbPercentage50":
            return TbPercentage50;
        case "tb:TbPercentage60":
            return TbPercentage60;
        case "tb:TbPercentage66":
            return TbPercentage66;
        case "tb:TbPercentage70":
            return TbPercentage70;
        case "tb:TbPercentage75":
            return TbPercentage75;
        case "tb:TbPercentage80":
            return TbPercentage80;
        case "tb:TbPercentage90":
            return TbPercentage90;
        case "tb:TbPercentage":
            return TbPercentage;
        case "tb:TbPerfume":
            return TbPerfume;
        case "tb:TbPerspectiveOff":
            return TbPerspectiveOff;
        case "tb:TbPerspective":
            return TbPerspective;
        case "tb:TbPhoneCall":
            return TbPhoneCall;
        case "tb:TbPhoneCalling":
            return TbPhoneCalling;
        case "tb:TbPhoneCheck":
            return TbPhoneCheck;
        case "tb:TbPhoneDone":
            return TbPhoneDone;
        case "tb:TbPhoneEnd":
            return TbPhoneEnd;
        case "tb:TbPhoneIncoming":
            return TbPhoneIncoming;
        case "tb:TbPhoneOff":
            return TbPhoneOff;
        case "tb:TbPhoneOutgoing":
            return TbPhoneOutgoing;
        case "tb:TbPhonePause":
            return TbPhonePause;
        case "tb:TbPhonePlus":
            return TbPhonePlus;
        case "tb:TbPhoneRinging":
            return TbPhoneRinging;
        case "tb:TbPhoneSpark":
            return TbPhoneSpark;
        case "tb:TbPhoneX":
            return TbPhoneX;
        case "tb:TbPhone":
            return TbPhone;
        case "tb:TbPhotoAi":
            return TbPhotoAi;
        case "tb:TbPhotoBitcoin":
            return TbPhotoBitcoin;
        case "tb:TbPhotoBolt":
            return TbPhotoBolt;
        case "tb:TbPhotoCancel":
            return TbPhotoCancel;
        case "tb:TbPhotoCheck":
            return TbPhotoCheck;
        case "tb:TbPhotoCircleMinus":
            return TbPhotoCircleMinus;
        case "tb:TbPhotoCirclePlus":
            return TbPhotoCirclePlus;
        case "tb:TbPhotoCircle":
            return TbPhotoCircle;
        case "tb:TbPhotoCode":
            return TbPhotoCode;
        case "tb:TbPhotoCog":
            return TbPhotoCog;
        case "tb:TbPhotoDollar":
            return TbPhotoDollar;
        case "tb:TbPhotoDown":
            return TbPhotoDown;
        case "tb:TbPhotoEdit":
            return TbPhotoEdit;
        case "tb:TbPhotoExclamation":
            return TbPhotoExclamation;
        case "tb:TbPhotoHeart":
            return TbPhotoHeart;
        case "tb:TbPhotoHexagon":
            return TbPhotoHexagon;
        case "tb:TbPhotoMinus":
            return TbPhotoMinus;
        case "tb:TbPhotoOff":
            return TbPhotoOff;
        case "tb:TbPhotoPause":
            return TbPhotoPause;
        case "tb:TbPhotoPentagon":
            return TbPhotoPentagon;
        case "tb:TbPhotoPin":
            return TbPhotoPin;
        case "tb:TbPhotoPlus":
            return TbPhotoPlus;
        case "tb:TbPhotoQuestion":
            return TbPhotoQuestion;
        case "tb:TbPhotoScan":
            return TbPhotoScan;
        case "tb:TbPhotoSearch":
            return TbPhotoSearch;
        case "tb:TbPhotoSensor2":
            return TbPhotoSensor2;
        case "tb:TbPhotoSensor3":
            return TbPhotoSensor3;
        case "tb:TbPhotoSensor":
            return TbPhotoSensor;
        case "tb:TbPhotoShare":
            return TbPhotoShare;
        case "tb:TbPhotoShield":
            return TbPhotoShield;
        case "tb:TbPhotoSpark":
            return TbPhotoSpark;
        case "tb:TbPhotoSquareRounded":
            return TbPhotoSquareRounded;
        case "tb:TbPhotoStar":
            return TbPhotoStar;
        case "tb:TbPhotoUp":
            return TbPhotoUp;
        case "tb:TbPhotoVideo":
            return TbPhotoVideo;
        case "tb:TbPhotoX":
            return TbPhotoX;
        case "tb:TbPhoto":
            return TbPhoto;
        case "tb:TbPhysotherapist":
            return TbPhysotherapist;
        case "tb:TbPiano":
            return TbPiano;
        case "tb:TbPick":
            return TbPick;
        case "tb:TbPicnicTable":
            return TbPicnicTable;
        case "tb:TbPictureInPictureOff":
            return TbPictureInPictureOff;
        case "tb:TbPictureInPictureOn":
            return TbPictureInPictureOn;
        case "tb:TbPictureInPictureTop":
            return TbPictureInPictureTop;
        case "tb:TbPictureInPicture":
            return TbPictureInPicture;
        case "tb:TbPigMoney":
            return TbPigMoney;
        case "tb:TbPigOff":
            return TbPigOff;
        case "tb:TbPig":
            return TbPig;
        case "tb:TbPilcrowLeft":
            return TbPilcrowLeft;
        case "tb:TbPilcrowRight":
            return TbPilcrowRight;
        case "tb:TbPilcrow":
            return TbPilcrow;
        case "tb:TbPillOff":
            return TbPillOff;
        case "tb:TbPill":
            return TbPill;
        case "tb:TbPills":
            return TbPills;
        case "tb:TbPinEnd":
            return TbPinEnd;
        case "tb:TbPinInvoke":
            return TbPinInvoke;
        case "tb:TbPin":
            return TbPin;
        case "tb:TbPingPong":
            return TbPingPong;
        case "tb:TbPinnedOff":
            return TbPinnedOff;
        case "tb:TbPinned":
            return TbPinned;
        case "tb:TbPizzaOff":
            return TbPizzaOff;
        case "tb:TbPizza":
            return TbPizza;
        case "tb:TbPlaceholder":
            return TbPlaceholder;
        case "tb:TbPlaneArrival":
            return TbPlaneArrival;
        case "tb:TbPlaneDeparture":
            return TbPlaneDeparture;
        case "tb:TbPlaneInflight":
            return TbPlaneInflight;
        case "tb:TbPlaneOff":
            return TbPlaneOff;
        case "tb:TbPlaneTilt":
            return TbPlaneTilt;
        case "tb:TbPlane":
            return TbPlane;
        case "tb:TbPlanetOff":
            return TbPlanetOff;
        case "tb:TbPlanet":
            return TbPlanet;
        case "tb:TbPlant2Off":
            return TbPlant2Off;
        case "tb:TbPlant2":
            return TbPlant2;
        case "tb:TbPlantOff":
            return TbPlantOff;
        case "tb:TbPlant":
            return TbPlant;
        case "tb:TbPlayBasketball":
            return TbPlayBasketball;
        case "tb:TbPlayCard1":
            return TbPlayCard1;
        case "tb:TbPlayCard10":
            return TbPlayCard10;
        case "tb:TbPlayCard2":
            return TbPlayCard2;
        case "tb:TbPlayCard3":
            return TbPlayCard3;
        case "tb:TbPlayCard4":
            return TbPlayCard4;
        case "tb:TbPlayCard5":
            return TbPlayCard5;
        case "tb:TbPlayCard6":
            return TbPlayCard6;
        case "tb:TbPlayCard7":
            return TbPlayCard7;
        case "tb:TbPlayCard8":
            return TbPlayCard8;
        case "tb:TbPlayCard9":
            return TbPlayCard9;
        case "tb:TbPlayCardA":
            return TbPlayCardA;
        case "tb:TbPlayCardJ":
            return TbPlayCardJ;
        case "tb:TbPlayCardK":
            return TbPlayCardK;
        case "tb:TbPlayCardOff":
            return TbPlayCardOff;
        case "tb:TbPlayCardQ":
            return TbPlayCardQ;
        case "tb:TbPlayCardStar":
            return TbPlayCardStar;
        case "tb:TbPlayCard":
            return TbPlayCard;
        case "tb:TbPlayFootball":
            return TbPlayFootball;
        case "tb:TbPlayHandball":
            return TbPlayHandball;
        case "tb:TbPlayVolleyball":
            return TbPlayVolleyball;
        case "tb:TbPlayerEject":
            return TbPlayerEject;
        case "tb:TbPlayerPause":
            return TbPlayerPause;
        case "tb:TbPlayerPlay":
            return TbPlayerPlay;
        case "tb:TbPlayerRecord":
            return TbPlayerRecord;
        case "tb:TbPlayerSkipBack":
            return TbPlayerSkipBack;
        case "tb:TbPlayerSkipForward":
            return TbPlayerSkipForward;
        case "tb:TbPlayerStop":
            return TbPlayerStop;
        case "tb:TbPlayerTrackNext":
            return TbPlayerTrackNext;
        case "tb:TbPlayerTrackPrev":
            return TbPlayerTrackPrev;
        case "tb:TbPlaylistAdd":
            return TbPlaylistAdd;
        case "tb:TbPlaylistOff":
            return TbPlaylistOff;
        case "tb:TbPlaylistX":
            return TbPlaylistX;
        case "tb:TbPlaylist":
            return TbPlaylist;
        case "tb:TbPlaystationCircle":
            return TbPlaystationCircle;
        case "tb:TbPlaystationSquare":
            return TbPlaystationSquare;
        case "tb:TbPlaystationTriangle":
            return TbPlaystationTriangle;
        case "tb:TbPlaystationX":
            return TbPlaystationX;
        case "tb:TbPlugConnectedX":
            return TbPlugConnectedX;
        case "tb:TbPlugConnected":
            return TbPlugConnected;
        case "tb:TbPlugOff":
            return TbPlugOff;
        case "tb:TbPlugX":
            return TbPlugX;
        case "tb:TbPlug":
            return TbPlug;
        case "tb:TbPlusEqual":
            return TbPlusEqual;
        case "tb:TbPlusMinus":
            return TbPlusMinus;
        case "tb:TbPlus":
            return TbPlus;
        case "tb:TbPng":
            return TbPng;
        case "tb:TbPodiumOff":
            return TbPodiumOff;
        case "tb:TbPodium":
            return TbPodium;
        case "tb:TbPointOff":
            return TbPointOff;
        case "tb:TbPoint":
            return TbPoint;
        case "tb:TbPointerBolt":
            return TbPointerBolt;
        case "tb:TbPointerCancel":
            return TbPointerCancel;
        case "tb:TbPointerCheck":
            return TbPointerCheck;
        case "tb:TbPointerCode":
            return TbPointerCode;
        case "tb:TbPointerCog":
            return TbPointerCog;
        case "tb:TbPointerDollar":
            return TbPointerDollar;
        case "tb:TbPointerDown":
            return TbPointerDown;
        case "tb:TbPointerExclamation":
            return TbPointerExclamation;
        case "tb:TbPointerHeart":
            return TbPointerHeart;
        case "tb:TbPointerMinus":
            return TbPointerMinus;
        case "tb:TbPointerOff":
            return TbPointerOff;
        case "tb:TbPointerPause":
            return TbPointerPause;
        case "tb:TbPointerPin":
            return TbPointerPin;
        case "tb:TbPointerPlus":
            return TbPointerPlus;
        case "tb:TbPointerQuestion":
            return TbPointerQuestion;
        case "tb:TbPointerSearch":
            return TbPointerSearch;
        case "tb:TbPointerShare":
            return TbPointerShare;
        case "tb:TbPointerStar":
            return TbPointerStar;
        case "tb:TbPointerUp":
            return TbPointerUp;
        case "tb:TbPointerX":
            return TbPointerX;
        case "tb:TbPointer":
            return TbPointer;
        case "tb:TbPokeballOff":
            return TbPokeballOff;
        case "tb:TbPokeball":
            return TbPokeball;
        case "tb:TbPokerChip":
            return TbPokerChip;
        case "tb:TbPolaroid":
            return TbPolaroid;
        case "tb:TbPolygonOff":
            return TbPolygonOff;
        case "tb:TbPolygon":
            return TbPolygon;
        case "tb:TbPoo":
            return TbPoo;
        case "tb:TbPoolOff":
            return TbPoolOff;
        case "tb:TbPool":
            return TbPool;
        case "tb:TbPower":
            return TbPower;
        case "tb:TbPray":
            return TbPray;
        case "tb:TbPremiumRights":
            return TbPremiumRights;
        case "tb:TbPrescription":
            return TbPrescription;
        case "tb:TbPresentationAnalytics":
            return TbPresentationAnalytics;
        case "tb:TbPresentationOff":
            return TbPresentationOff;
        case "tb:TbPresentation":
            return TbPresentation;
        case "tb:TbPrinterOff":
            return TbPrinterOff;
        case "tb:TbPrinter":
            return TbPrinter;
        case "tb:TbPrismLight":
            return TbPrismLight;
        case "tb:TbPrismOff":
            return TbPrismOff;
        case "tb:TbPrismPlus":
            return TbPrismPlus;
        case "tb:TbPrism":
            return TbPrism;
        case "tb:TbPrison":
            return TbPrison;
        case "tb:TbProgressAlert":
            return TbProgressAlert;
        case "tb:TbProgressBolt":
            return TbProgressBolt;
        case "tb:TbProgressCheck":
            return TbProgressCheck;
        case "tb:TbProgressDown":
            return TbProgressDown;
        case "tb:TbProgressHelp":
            return TbProgressHelp;
        case "tb:TbProgressX":
            return TbProgressX;
        case "tb:TbProgress":
            return TbProgress;
        case "tb:TbPrompt":
            return TbPrompt;
        case "tb:TbProng":
            return TbProng;
        case "tb:TbPropellerOff":
            return TbPropellerOff;
        case "tb:TbPropeller":
            return TbPropeller;
        case "tb:TbProtocol":
            return TbProtocol;
        case "tb:TbPumpkinScary":
            return TbPumpkinScary;
        case "tb:TbPuzzle2":
            return TbPuzzle2;
        case "tb:TbPuzzleOff":
            return TbPuzzleOff;
        case "tb:TbPuzzle":
            return TbPuzzle;
        case "tb:TbPyramidOff":
            return TbPyramidOff;
        case "tb:TbPyramidPlus":
            return TbPyramidPlus;
        case "tb:TbPyramid":
            return TbPyramid;
        case "tb:TbQrcodeOff":
            return TbQrcodeOff;
        case "tb:TbQrcode":
            return TbQrcode;
        case "tb:TbQuestionMark":
            return TbQuestionMark;
        case "tb:TbQuoteOff":
            return TbQuoteOff;
        case "tb:TbQuote":
            return TbQuote;
        case "tb:TbQuotes":
            return TbQuotes;
        case "tb:TbRadar2":
            return TbRadar2;
        case "tb:TbRadarOff":
            return TbRadarOff;
        case "tb:TbRadar":
            return TbRadar;
        case "tb:TbRadioOff":
            return TbRadioOff;
        case "tb:TbRadio":
            return TbRadio;
        case "tb:TbRadioactiveOff":
            return TbRadioactiveOff;
        case "tb:TbRadioactive":
            return TbRadioactive;
        case "tb:TbRadiusBottomLeft":
            return TbRadiusBottomLeft;
        case "tb:TbRadiusBottomRight":
            return TbRadiusBottomRight;
        case "tb:TbRadiusTopLeft":
            return TbRadiusTopLeft;
        case "tb:TbRadiusTopRight":
            return TbRadiusTopRight;
        case "tb:TbRainbowOff":
            return TbRainbowOff;
        case "tb:TbRainbow":
            return TbRainbow;
        case "tb:TbRating12Plus":
            return TbRating12Plus;
        case "tb:TbRating14Plus":
            return TbRating14Plus;
        case "tb:TbRating16Plus":
            return TbRating16Plus;
        case "tb:TbRating18Plus":
            return TbRating18Plus;
        case "tb:TbRating21Plus":
            return TbRating21Plus;
        case "tb:TbRazorElectric":
            return TbRazorElectric;
        case "tb:TbRazor":
            return TbRazor;
        case "tb:TbReceipt2":
            return TbReceipt2;
        case "tb:TbReceiptBitcoin":
            return TbReceiptBitcoin;
        case "tb:TbReceiptDollar":
            return TbReceiptDollar;
        case "tb:TbReceiptEuro":
            return TbReceiptEuro;
        case "tb:TbReceiptOff":
            return TbReceiptOff;
        case "tb:TbReceiptPound":
            return TbReceiptPound;
        case "tb:TbReceiptRefund":
            return TbReceiptRefund;
        case "tb:TbReceiptRupee":
            return TbReceiptRupee;
        case "tb:TbReceiptTax":
            return TbReceiptTax;
        case "tb:TbReceiptYen":
            return TbReceiptYen;
        case "tb:TbReceiptYuan":
            return TbReceiptYuan;
        case "tb:TbReceipt":
            return TbReceipt;
        case "tb:TbRecharging":
            return TbRecharging;
        case "tb:TbRecordMailOff":
            return TbRecordMailOff;
        case "tb:TbRecordMail":
            return TbRecordMail;
        case "tb:TbRectangleRoundedBottom":
            return TbRectangleRoundedBottom;
        case "tb:TbRectangleRoundedTop":
            return TbRectangleRoundedTop;
        case "tb:TbRectangleVertical":
            return TbRectangleVertical;
        case "tb:TbRectangle":
            return TbRectangle;
        case "tb:TbRectangularPrismOff":
            return TbRectangularPrismOff;
        case "tb:TbRectangularPrismPlus":
            return TbRectangularPrismPlus;
        case "tb:TbRectangularPrism":
            return TbRectangularPrism;
        case "tb:TbRecycleOff":
            return TbRecycleOff;
        case "tb:TbRecycle":
            return TbRecycle;
        case "tb:TbRefreshAlert":
            return TbRefreshAlert;
        case "tb:TbRefreshDot":
            return TbRefreshDot;
        case "tb:TbRefreshOff":
            return TbRefreshOff;
        case "tb:TbRefresh":
            return TbRefresh;
        case "tb:TbRegexOff":
            return TbRegexOff;
        case "tb:TbRegex":
            return TbRegex;
        case "tb:TbRegistered":
            return TbRegistered;
        case "tb:TbRelationManyToMany":
            return TbRelationManyToMany;
        case "tb:TbRelationOneToMany":
            return TbRelationOneToMany;
        case "tb:TbRelationOneToOne":
            return TbRelationOneToOne;
        case "tb:TbReload":
            return TbReload;
        case "tb:TbReorder":
            return TbReorder;
        case "tb:TbRepeatOff":
            return TbRepeatOff;
        case "tb:TbRepeatOnce":
            return TbRepeatOnce;
        case "tb:TbRepeat":
            return TbRepeat;
        case "tb:TbReplaceOff":
            return TbReplaceOff;
        case "tb:TbReplace":
            return TbReplace;
        case "tb:TbReportAnalytics":
            return TbReportAnalytics;
        case "tb:TbReportMedical":
            return TbReportMedical;
        case "tb:TbReportMoney":
            return TbReportMoney;
        case "tb:TbReportOff":
            return TbReportOff;
        case "tb:TbReportSearch":
            return TbReportSearch;
        case "tb:TbReport":
            return TbReport;
        case "tb:TbReservedLine":
            return TbReservedLine;
        case "tb:TbResize":
            return TbResize;
        case "tb:TbRestore":
            return TbRestore;
        case "tb:TbRewindBackward10":
            return TbRewindBackward10;
        case "tb:TbRewindBackward15":
            return TbRewindBackward15;
        case "tb:TbRewindBackward20":
            return TbRewindBackward20;
        case "tb:TbRewindBackward30":
            return TbRewindBackward30;
        case "tb:TbRewindBackward40":
            return TbRewindBackward40;
        case "tb:TbRewindBackward5":
            return TbRewindBackward5;
        case "tb:TbRewindBackward50":
            return TbRewindBackward50;
        case "tb:TbRewindBackward60":
            return TbRewindBackward60;
        case "tb:TbRewindForward10":
            return TbRewindForward10;
        case "tb:TbRewindForward15":
            return TbRewindForward15;
        case "tb:TbRewindForward20":
            return TbRewindForward20;
        case "tb:TbRewindForward30":
            return TbRewindForward30;
        case "tb:TbRewindForward40":
            return TbRewindForward40;
        case "tb:TbRewindForward5":
            return TbRewindForward5;
        case "tb:TbRewindForward50":
            return TbRewindForward50;
        case "tb:TbRewindForward60":
            return TbRewindForward60;
        case "tb:TbRibbonHealth":
            return TbRibbonHealth;
        case "tb:TbRings":
            return TbRings;
        case "tb:TbRippleOff":
            return TbRippleOff;
        case "tb:TbRipple":
            return TbRipple;
        case "tb:TbRoadOff":
            return TbRoadOff;
        case "tb:TbRoadSign":
            return TbRoadSign;
        case "tb:TbRoad":
            return TbRoad;
        case "tb:TbRobotFace":
            return TbRobotFace;
        case "tb:TbRobotOff":
            return TbRobotOff;
        case "tb:TbRobot":
            return TbRobot;
        case "tb:TbRocketOff":
            return TbRocketOff;
        case "tb:TbRocket":
            return TbRocket;
        case "tb:TbRollerSkating":
            return TbRollerSkating;
        case "tb:TbRollercoasterOff":
            return TbRollercoasterOff;
        case "tb:TbRollercoaster":
            return TbRollercoaster;
        case "tb:TbRosetteDiscountCheckOff":
            return TbRosetteDiscountCheckOff;
        case "tb:TbRosetteDiscountCheck":
            return TbRosetteDiscountCheck;
        case "tb:TbRosetteDiscountOff":
            return TbRosetteDiscountOff;
        case "tb:TbRosetteDiscount":
            return TbRosetteDiscount;
        case "tb:TbRosetteNumber0":
            return TbRosetteNumber0;
        case "tb:TbRosetteNumber1":
            return TbRosetteNumber1;
        case "tb:TbRosetteNumber2":
            return TbRosetteNumber2;
        case "tb:TbRosetteNumber3":
            return TbRosetteNumber3;
        case "tb:TbRosetteNumber4":
            return TbRosetteNumber4;
        case "tb:TbRosetteNumber5":
            return TbRosetteNumber5;
        case "tb:TbRosetteNumber6":
            return TbRosetteNumber6;
        case "tb:TbRosetteNumber7":
            return TbRosetteNumber7;
        case "tb:TbRosetteNumber8":
            return TbRosetteNumber8;
        case "tb:TbRosetteNumber9":
            return TbRosetteNumber9;
        case "tb:TbRosette":
            return TbRosette;
        case "tb:TbRotate2":
            return TbRotate2;
        case "tb:TbRotate360":
            return TbRotate360;
        case "tb:TbRotate3D":
            return TbRotate3D;
        case "tb:TbRotateClockwise2":
            return TbRotateClockwise2;
        case "tb:TbRotateClockwise":
            return TbRotateClockwise;
        case "tb:TbRotateDot":
            return TbRotateDot;
        case "tb:TbRotateRectangle":
            return TbRotateRectangle;
        case "tb:TbRotate":
            return TbRotate;
        case "tb:TbRoute2":
            return TbRoute2;
        case "tb:TbRouteAltLeft":
            return TbRouteAltLeft;
        case "tb:TbRouteAltRight":
            return TbRouteAltRight;
        case "tb:TbRouteOff":
            return TbRouteOff;
        case "tb:TbRouteScan":
            return TbRouteScan;
        case "tb:TbRouteSquare2":
            return TbRouteSquare2;
        case "tb:TbRouteSquare":
            return TbRouteSquare;
        case "tb:TbRouteX2":
            return TbRouteX2;
        case "tb:TbRouteX":
            return TbRouteX;
        case "tb:TbRoute":
            return TbRoute;
        case "tb:TbRouterOff":
            return TbRouterOff;
        case "tb:TbRouter":
            return TbRouter;
        case "tb:TbRowInsertBottom":
            return TbRowInsertBottom;
        case "tb:TbRowInsertTop":
            return TbRowInsertTop;
        case "tb:TbRowRemove":
            return TbRowRemove;
        case "tb:TbRss":
            return TbRss;
        case "tb:TbRubberStampOff":
            return TbRubberStampOff;
        case "tb:TbRubberStamp":
            return TbRubberStamp;
        case "tb:TbRuler2Off":
            return TbRuler2Off;
        case "tb:TbRuler2":
            return TbRuler2;
        case "tb:TbRuler3":
            return TbRuler3;
        case "tb:TbRulerMeasure2":
            return TbRulerMeasure2;
        case "tb:TbRulerMeasure":
            return TbRulerMeasure;
        case "tb:TbRulerOff":
            return TbRulerOff;
        case "tb:TbRuler":
            return TbRuler;
        case "tb:TbRun":
            return TbRun;
        case "tb:TbRvTruck":
            return TbRvTruck;
        case "tb:TbSTurnDown":
            return TbSTurnDown;
        case "tb:TbSTurnLeft":
            return TbSTurnLeft;
        case "tb:TbSTurnRight":
            return TbSTurnRight;
        case "tb:TbSTurnUp":
            return TbSTurnUp;
        case "tb:TbSailboat2":
            return TbSailboat2;
        case "tb:TbSailboatOff":
            return TbSailboatOff;
        case "tb:TbSailboat":
            return TbSailboat;
        case "tb:TbSalad":
            return TbSalad;
        case "tb:TbSalt":
            return TbSalt;
        case "tb:TbSandbox":
            return TbSandbox;
        case "tb:TbSatelliteOff":
            return TbSatelliteOff;
        case "tb:TbSatellite":
            return TbSatellite;
        case "tb:TbSausage":
            return TbSausage;
        case "tb:TbScaleOff":
            return TbScaleOff;
        case "tb:TbScaleOutlineOff":
            return TbScaleOutlineOff;
        case "tb:TbScaleOutline":
            return TbScaleOutline;
        case "tb:TbScale":
            return TbScale;
        case "tb:TbScanEye":
            return TbScanEye;
        case "tb:TbScanPosition":
            return TbScanPosition;
        case "tb:TbScan":
            return TbScan;
        case "tb:TbSchemaOff":
            return TbSchemaOff;
        case "tb:TbSchema":
            return TbSchema;
        case "tb:TbSchoolBell":
            return TbSchoolBell;
        case "tb:TbSchoolOff":
            return TbSchoolOff;
        case "tb:TbSchool":
            return TbSchool;
        case "tb:TbScissorsOff":
            return TbScissorsOff;
        case "tb:TbScissors":
            return TbScissors;
        case "tb:TbScooterElectric":
            return TbScooterElectric;
        case "tb:TbScooter":
            return TbScooter;
        case "tb:TbScoreboard":
            return TbScoreboard;
        case "tb:TbScreenShareOff":
            return TbScreenShareOff;
        case "tb:TbScreenShare":
            return TbScreenShare;
        case "tb:TbScreenshot":
            return TbScreenshot;
        case "tb:TbScribbleOff":
            return TbScribbleOff;
        case "tb:TbScribble":
            return TbScribble;
        case "tb:TbScriptMinus":
            return TbScriptMinus;
        case "tb:TbScriptPlus":
            return TbScriptPlus;
        case "tb:TbScriptX":
            return TbScriptX;
        case "tb:TbScript":
            return TbScript;
        case "tb:TbScubaDivingTank":
            return TbScubaDivingTank;
        case "tb:TbScubaDiving":
            return TbScubaDiving;
        case "tb:TbScubaMaskOff":
            return TbScubaMaskOff;
        case "tb:TbScubaMask":
            return TbScubaMask;
        case "tb:TbSdk":
            return TbSdk;
        case "tb:TbSearchOff":
            return TbSearchOff;
        case "tb:TbSearch":
            return TbSearch;
        case "tb:TbSectionSign":
            return TbSectionSign;
        case "tb:TbSection":
            return TbSection;
        case "tb:TbSeedingOff":
            return TbSeedingOff;
        case "tb:TbSeeding":
            return TbSeeding;
        case "tb:TbSelectAll":
            return TbSelectAll;
        case "tb:TbSelect":
            return TbSelect;
        case "tb:TbSelector":
            return TbSelector;
        case "tb:TbSend2":
            return TbSend2;
        case "tb:TbSendOff":
            return TbSendOff;
        case "tb:TbSend":
            return TbSend;
        case "tb:TbSeo":
            return TbSeo;
        case "tb:TbSeparatorHorizontal":
            return TbSeparatorHorizontal;
        case "tb:TbSeparatorVertical":
            return TbSeparatorVertical;
        case "tb:TbSeparator":
            return TbSeparator;
        case "tb:TbServer2":
            return TbServer2;
        case "tb:TbServerBolt":
            return TbServerBolt;
        case "tb:TbServerCog":
            return TbServerCog;
        case "tb:TbServerOff":
            return TbServerOff;
        case "tb:TbServerSpark":
            return TbServerSpark;
        case "tb:TbServer":
            return TbServer;
        case "tb:TbServicemark":
            return TbServicemark;
        case "tb:TbSettings2":
            return TbSettings2;
        case "tb:TbSettingsAutomation":
            return TbSettingsAutomation;
        case "tb:TbSettingsBolt":
            return TbSettingsBolt;
        case "tb:TbSettingsCancel":
            return TbSettingsCancel;
        case "tb:TbSettingsCheck":
            return TbSettingsCheck;
        case "tb:TbSettingsCode":
            return TbSettingsCode;
        case "tb:TbSettingsCog":
            return TbSettingsCog;
        case "tb:TbSettingsDollar":
            return TbSettingsDollar;
        case "tb:TbSettingsDown":
            return TbSettingsDown;
        case "tb:TbSettingsExclamation":
            return TbSettingsExclamation;
        case "tb:TbSettingsHeart":
            return TbSettingsHeart;
        case "tb:TbSettingsMinus":
            return TbSettingsMinus;
        case "tb:TbSettingsOff":
            return TbSettingsOff;
        case "tb:TbSettingsPause":
            return TbSettingsPause;
        case "tb:TbSettingsPin":
            return TbSettingsPin;
        case "tb:TbSettingsPlus":
            return TbSettingsPlus;
        case "tb:TbSettingsQuestion":
            return TbSettingsQuestion;
        case "tb:TbSettingsSearch":
            return TbSettingsSearch;
        case "tb:TbSettingsShare":
            return TbSettingsShare;
        case "tb:TbSettingsSpark":
            return TbSettingsSpark;
        case "tb:TbSettingsStar":
            return TbSettingsStar;
        case "tb:TbSettingsUp":
            return TbSettingsUp;
        case "tb:TbSettingsX":
            return TbSettingsX;
        case "tb:TbSettings":
            return TbSettings;
        case "tb:TbShadowOff":
            return TbShadowOff;
        case "tb:TbShadow":
            return TbShadow;
        case "tb:TbShape2":
            return TbShape2;
        case "tb:TbShape3":
            return TbShape3;
        case "tb:TbShapeOff":
            return TbShapeOff;
        case "tb:TbShape":
            return TbShape;
        case "tb:TbShare2":
            return TbShare2;
        case "tb:TbShare3":
            return TbShare3;
        case "tb:TbShareOff":
            return TbShareOff;
        case "tb:TbShare":
            return TbShare;
        case "tb:TbShareplay":
            return TbShareplay;
        case "tb:TbShieldBolt":
            return TbShieldBolt;
        case "tb:TbShieldCancel":
            return TbShieldCancel;
        case "tb:TbShieldCheck":
            return TbShieldCheck;
        case "tb:TbShieldCheckered":
            return TbShieldCheckered;
        case "tb:TbShieldChevron":
            return TbShieldChevron;
        case "tb:TbShieldCode":
            return TbShieldCode;
        case "tb:TbShieldCog":
            return TbShieldCog;
        case "tb:TbShieldDollar":
            return TbShieldDollar;
        case "tb:TbShieldDown":
            return TbShieldDown;
        case "tb:TbShieldExclamation":
            return TbShieldExclamation;
        case "tb:TbShieldHalf":
            return TbShieldHalf;
        case "tb:TbShieldHeart":
            return TbShieldHeart;
        case "tb:TbShieldLock":
            return TbShieldLock;
        case "tb:TbShieldMinus":
            return TbShieldMinus;
        case "tb:TbShieldOff":
            return TbShieldOff;
        case "tb:TbShieldPause":
            return TbShieldPause;
        case "tb:TbShieldPin":
            return TbShieldPin;
        case "tb:TbShieldPlus":
            return TbShieldPlus;
        case "tb:TbShieldQuestion":
            return TbShieldQuestion;
        case "tb:TbShieldSearch":
            return TbShieldSearch;
        case "tb:TbShieldShare":
            return TbShieldShare;
        case "tb:TbShieldStar":
            return TbShieldStar;
        case "tb:TbShieldUp":
            return TbShieldUp;
        case "tb:TbShieldX":
            return TbShieldX;
        case "tb:TbShield":
            return TbShield;
        case "tb:TbShipOff":
            return TbShipOff;
        case "tb:TbShip":
            return TbShip;
        case "tb:TbShirtOff":
            return TbShirtOff;
        case "tb:TbShirtSport":
            return TbShirtSport;
        case "tb:TbShirt":
            return TbShirt;
        case "tb:TbShoeOff":
            return TbShoeOff;
        case "tb:TbShoe":
            return TbShoe;
        case "tb:TbShoppingBagCheck":
            return TbShoppingBagCheck;
        case "tb:TbShoppingBagDiscount":
            return TbShoppingBagDiscount;
        case "tb:TbShoppingBagEdit":
            return TbShoppingBagEdit;
        case "tb:TbShoppingBagExclamation":
            return TbShoppingBagExclamation;
        case "tb:TbShoppingBagHeart":
            return TbShoppingBagHeart;
        case "tb:TbShoppingBagMinus":
            return TbShoppingBagMinus;
        case "tb:TbShoppingBagPlus":
            return TbShoppingBagPlus;
        case "tb:TbShoppingBagSearch":
            return TbShoppingBagSearch;
        case "tb:TbShoppingBagX":
            return TbShoppingBagX;
        case "tb:TbShoppingBag":
            return TbShoppingBag;
        case "tb:TbShoppingCartBolt":
            return TbShoppingCartBolt;
        case "tb:TbShoppingCartCancel":
            return TbShoppingCartCancel;
        case "tb:TbShoppingCartCheck":
            return TbShoppingCartCheck;
        case "tb:TbShoppingCartCode":
            return TbShoppingCartCode;
        case "tb:TbShoppingCartCog":
            return TbShoppingCartCog;
        case "tb:TbShoppingCartCopy":
            return TbShoppingCartCopy;
        case "tb:TbShoppingCartDiscount":
            return TbShoppingCartDiscount;
        case "tb:TbShoppingCartDollar":
            return TbShoppingCartDollar;
        case "tb:TbShoppingCartDown":
            return TbShoppingCartDown;
        case "tb:TbShoppingCartExclamation":
            return TbShoppingCartExclamation;
        case "tb:TbShoppingCartHeart":
            return TbShoppingCartHeart;
        case "tb:TbShoppingCartMinus":
            return TbShoppingCartMinus;
        case "tb:TbShoppingCartOff":
            return TbShoppingCartOff;
        case "tb:TbShoppingCartPause":
            return TbShoppingCartPause;
        case "tb:TbShoppingCartPin":
            return TbShoppingCartPin;
        case "tb:TbShoppingCartPlus":
            return TbShoppingCartPlus;
        case "tb:TbShoppingCartQuestion":
            return TbShoppingCartQuestion;
    }
}
