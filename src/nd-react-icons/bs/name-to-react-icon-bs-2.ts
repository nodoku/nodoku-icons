import type {IconType} from "react-icons";

import {
    BsMedium,
    BsMegaphoneFill,
    BsMegaphone,
    BsMemory,
    BsMenuAppFill,
    BsMenuApp,
    BsMenuButtonFill,
    BsMenuButtonWideFill,
    BsMenuButtonWide,
    BsMenuButton,
    BsMenuDown,
    BsMenuUp,
    BsMessenger,
    BsMeta,
    BsMicFill,
    BsMicMuteFill,
    BsMicMute,
    BsMic,
    BsMicrosoftTeams,
    BsMicrosoft,
    BsMinecartLoaded,
    BsMinecart,
    BsModemFill,
    BsModem,
    BsMoisture,
    BsMoonFill,
    BsMoonStarsFill,
    BsMoonStars,
    BsMoon,
    BsMortarboardFill,
    BsMortarboard,
    BsMotherboardFill,
    BsMotherboard,
    BsMouseFill,
    BsMouse,
    BsMouse2Fill,
    BsMouse2,
    BsMouse3Fill,
    BsMouse3,
    BsMusicNoteBeamed,
    BsMusicNoteList,
    BsMusicNote,
    BsMusicPlayerFill,
    BsMusicPlayer,
    BsNewspaper,
    BsNintendoSwitch,
    BsNodeMinusFill,
    BsNodeMinus,
    BsNodePlusFill,
    BsNodePlus,
    BsNoiseReduction,
    BsNutFill,
    BsNut,
    BsNvidia,
    BsNvmeFill,
    BsNvme,
    BsOctagonFill,
    BsOctagonHalf,
    BsOctagon,
    BsOpencollective,
    BsOpticalAudioFill,
    BsOpticalAudio,
    BsOption,
    BsOutlet,
    BsPCircleFill,
    BsPCircle,
    BsPSquareFill,
    BsPSquare,
    BsPaintBucket,
    BsPaletteFill,
    BsPalette,
    BsPalette2,
    BsPaperclip,
    BsParagraph,
    BsPassFill,
    BsPass,
    BsPassportFill,
    BsPassport,
    BsPatchCheckFill,
    BsPatchCheck,
    BsPatchExclamationFill,
    BsPatchExclamation,
    BsPatchMinusFill,
    BsPatchMinus,
    BsPatchPlusFill,
    BsPatchPlus,
    BsPatchQuestionFill,
    BsPatchQuestion,
    BsPauseBtnFill,
    BsPauseBtn,
    BsPauseCircleFill,
    BsPauseCircle,
    BsPauseFill,
    BsPause,
    BsPaypal,
    BsPcDisplayHorizontal,
    BsPcDisplay,
    BsPcHorizontal,
    BsPc,
    BsPciCardNetwork,
    BsPciCardSound,
    BsPciCard,
    BsPeaceFill,
    BsPeace,
    BsPenFill,
    BsPen,
    BsPencilFill,
    BsPencilSquare,
    BsPencil,
    BsPentagonFill,
    BsPentagonHalf,
    BsPentagon,
    BsPeopleFill,
    BsPeople,
    BsPercent,
    BsPersonAdd,
    BsPersonArmsUp,
    BsPersonBadgeFill,
    BsPersonBadge,
    BsPersonBoundingBox,
    BsPersonCheckFill,
    BsPersonCheck,
    BsPersonCircle,
    BsPersonDashFill,
    BsPersonDash,
    BsPersonDown,
    BsPersonExclamation,
    BsPersonFillAdd,
    BsPersonFillCheck,
    BsPersonFillDash,
    BsPersonFillDown,
    BsPersonFillExclamation,
    BsPersonFillGear,
    BsPersonFillLock,
    BsPersonFillSlash,
    BsPersonFillUp,
    BsPersonFillX,
    BsPersonFill,
    BsPersonGear,
    BsPersonHeart,
    BsPersonHearts,
    BsPersonLinesFill,
    BsPersonLock,
    BsPersonPlusFill,
    BsPersonPlus,
    BsPersonRaisedHand,
    BsPersonRolodex,
    BsPersonSlash,
    BsPersonSquare,
    BsPersonStandingDress,
    BsPersonStanding,
    BsPersonUp,
    BsPersonVcardFill,
    BsPersonVcard,
    BsPersonVideo,
    BsPersonVideo2,
    BsPersonVideo3,
    BsPersonWalking,
    BsPersonWheelchair,
    BsPersonWorkspace,
    BsPersonXFill,
    BsPersonX,
    BsPerson,
    BsPhoneFill,
    BsPhoneFlip,
    BsPhoneLandscapeFill,
    BsPhoneLandscape,
    BsPhoneVibrateFill,
    BsPhoneVibrate,
    BsPhone,
    BsPieChartFill,
    BsPieChart,
    BsPiggyBankFill,
    BsPiggyBank,
    BsPinAngleFill,
    BsPinAngle,
    BsPinFill,
    BsPinMapFill,
    BsPinMap,
    BsPin,
    BsPinterest,
    BsPipFill,
    BsPip,
    BsPlayBtnFill,
    BsPlayBtn,
    BsPlayCircleFill,
    BsPlayCircle,
    BsPlayFill,
    BsPlay,
    BsPlaystation,
    BsPlugFill,
    BsPlug,
    BsPlugin,
    BsPlusCircleDotted,
    BsPlusCircleFill,
    BsPlusCircle,
    BsPlusLg,
    BsPlusSlashMinus,
    BsPlusSquareDotted,
    BsPlusSquareFill,
    BsPlusSquare,
    BsPlus,
    BsPostageFill,
    BsPostageHeartFill,
    BsPostageHeart,
    BsPostage,
    BsPostcardFill,
    BsPostcardHeartFill,
    BsPostcardHeart,
    BsPostcard,
    BsPower,
    BsPrescription,
    BsPrescription2,
    BsPrinterFill,
    BsPrinter,
    BsProjectorFill,
    BsProjector,
    BsPuzzleFill,
    BsPuzzle,
    BsQrCodeScan,
    BsQrCode,
    BsQuestionCircleFill,
    BsQuestionCircle,
    BsQuestionDiamondFill,
    BsQuestionDiamond,
    BsQuestionLg,
    BsQuestionOctagonFill,
    BsQuestionOctagon,
    BsQuestionSquareFill,
    BsQuestionSquare,
    BsQuestion,
    BsQuora,
    BsQuote,
    BsRCircleFill,
    BsRCircle,
    BsRSquareFill,
    BsRSquare,
    BsRadar,
    BsRadioactive,
    BsRainbow,
    BsReceiptCutoff,
    BsReceipt,
    BsReception0,
    BsReception1,
    BsReception2,
    BsReception3,
    BsReception4,
    BsRecordBtnFill,
    BsRecordBtn,
    BsRecordCircleFill,
    BsRecordCircle,
    BsRecordFill,
    BsRecord,
    BsRecord2Fill,
    BsRecord2,
    BsRecycle,
    BsReddit,
    BsRegex,
    BsRepeat1,
    BsRepeat,
    BsReplyAllFill,
    BsReplyAll,
    BsReplyFill,
    BsReply,
    BsRewindBtnFill,
    BsRewindBtn,
    BsRewindCircleFill,
    BsRewindCircle,
    BsRewindFill,
    BsRewind,
    BsRobot,
    BsRocketFill,
    BsRocketTakeoffFill,
    BsRocketTakeoff,
    BsRocket,
    BsRouterFill,
    BsRouter,
    BsRssFill,
    BsRss,
    BsRulers,
    BsSafeFill,
    BsSafe,
    BsSafe2Fill,
    BsSafe2,
    BsSaveFill,
    BsSave,
    BsSave2Fill,
    BsSave2,
    BsScissors,
    BsScooter,
    BsScrewdriver,
    BsSdCardFill,
    BsSdCard,
    BsSearchHeartFill,
    BsSearchHeart,
    BsSearch,
    BsSegmentedNav,
    BsSendArrowDownFill,
    BsSendArrowDown,
    BsSendArrowUpFill,
    BsSendArrowUp,
    BsSendCheckFill,
    BsSendCheck,
    BsSendDashFill,
    BsSendDash,
    BsSendExclamationFill,
    BsSendExclamation,
    BsSendFill,
    BsSendPlusFill,
    BsSendPlus,
    BsSendSlashFill,
    BsSendSlash,
    BsSendXFill,
    BsSendX,
    BsSend,
    BsServer,
    BsShadows,
    BsShareFill,
    BsShare,
    BsShieldCheck,
    BsShieldExclamation,
    BsShieldFillCheck,
    BsShieldFillExclamation,
    BsShieldFillMinus,
    BsShieldFillPlus,
    BsShieldFillX,
    BsShieldFill,
    BsShieldLockFill,
    BsShieldLock,
    BsShieldMinus,
    BsShieldPlus,
    BsShieldShaded,
    BsShieldSlashFill,
    BsShieldSlash,
    BsShieldX,
    BsShield,
    BsShiftFill,
    BsShift,
    BsShopWindow,
    BsShop,
    BsShuffle,
    BsSignDeadEndFill,
    BsSignDeadEnd,
    BsSignDoNotEnterFill,
    BsSignDoNotEnter,
    BsSignIntersectionFill,
    BsSignIntersectionSideFill,
    BsSignIntersectionSide,
    BsSignIntersectionTFill,
    BsSignIntersectionT,
    BsSignIntersectionYFill,
    BsSignIntersectionY,
    BsSignIntersection,
    BsSignMergeLeftFill,
    BsSignMergeLeft,
    BsSignMergeRightFill,
    BsSignMergeRight,
    BsSignNoLeftTurnFill,
    BsSignNoLeftTurn,
    BsSignNoParkingFill,
    BsSignNoParking,
    BsSignNoRightTurnFill,
    BsSignNoRightTurn,
    BsSignRailroadFill,
    BsSignRailroad,
    BsSignStopFill,
    BsSignStopLightsFill,
    BsSignStopLights,
    BsSignStop,
    BsSignTurnLeftFill,
    BsSignTurnLeft,
    BsSignTurnRightFill,
    BsSignTurnRight,
    BsSignTurnSlightLeftFill,
    BsSignTurnSlightLeft,
    BsSignTurnSlightRightFill,
    BsSignTurnSlightRight,
    BsSignYieldFill,
    BsSignYield,
    BsSignal,
    BsSignpost2Fill,
    BsSignpost2,
    BsSignpostFill,
    BsSignpostSplitFill,
    BsSignpostSplit,
    BsSignpost,
    BsSimFill,
    BsSimSlashFill,
    BsSimSlash,
    BsSim,
    BsSinaWeibo,
    BsSkipBackwardBtnFill,
    BsSkipBackwardBtn,
    BsSkipBackwardCircleFill,
    BsSkipBackwardCircle,
    BsSkipBackwardFill,
    BsSkipBackward,
    BsSkipEndBtnFill,
    BsSkipEndBtn,
    BsSkipEndCircleFill,
    BsSkipEndCircle,
    BsSkipEndFill,
    BsSkipEnd,
    BsSkipForwardBtnFill,
    BsSkipForwardBtn,
    BsSkipForwardCircleFill,
    BsSkipForwardCircle,
    BsSkipForwardFill,
    BsSkipForward,
    BsSkipStartBtnFill,
    BsSkipStartBtn,
    BsSkipStartCircleFill,
    BsSkipStartCircle,
    BsSkipStartFill,
    BsSkipStart,
    BsSkype,
    BsSlack,
    BsSlashCircleFill,
    BsSlashCircle,
    BsSlashLg,
    BsSlashSquareFill,
    BsSlashSquare,
    BsSlash,
    BsSliders,
    BsSliders2Vertical,
    BsSliders2,
    BsSmartwatch,
    BsSnapchat,
    BsSnow,
    BsSnow2,
    BsSnow3,
    BsSortAlphaDownAlt,
    BsSortAlphaDown,
    BsSortAlphaUpAlt,
    BsSortAlphaUp,
    BsSortDownAlt,
    BsSortDown,
    BsSortNumericDownAlt,
    BsSortNumericDown,
    BsSortNumericUpAlt,
    BsSortNumericUp,
    BsSortUpAlt,
    BsSortUp,
    BsSoundwave,
    BsSourceforge,
    BsSpeakerFill,
    BsSpeaker,
    BsSpeedometer,
    BsSpeedometer2,
    BsSpellcheck,
    BsSpotify,
    BsSquareFill,
    BsSquareHalf,
    BsSquare,
    BsStackOverflow,
    BsStack,
    BsStarFill,
    BsStarHalf,
    BsStar,
    BsStars,
    BsSteam,
    BsStickiesFill,
    BsStickies,
    BsStickyFill,
    BsSticky,
    BsStopBtnFill,
    BsStopBtn,
    BsStopCircleFill,
    BsStopCircle,
    BsStopFill,
    BsStop,
    BsStoplightsFill,
    BsStoplights,
    BsStopwatchFill,
    BsStopwatch,
    BsStrava,
    BsStripe,
    BsSubscript,
    BsSubstack,
    BsSubtract,
    BsSuitClubFill,
    BsSuitClub,
    BsSuitDiamondFill,
    BsSuitDiamond,
    BsSuitHeartFill,
    BsSuitHeart,
    BsSuitSpadeFill,
    BsSuitSpade,
    BsSuitcaseFill,
    BsSuitcaseLgFill,
    BsSuitcaseLg,
    BsSuitcase,
    BsSuitcase2Fill,
    BsSuitcase2,
    BsSunFill,
    BsSun,
    BsSunglasses,
    BsSunriseFill,
    BsSunrise,
    BsSunsetFill,
    BsSunset,
    BsSuperscript,
    BsSymmetryHorizontal,
    BsSymmetryVertical,
    BsTable,
    BsTabletFill,
    BsTabletLandscapeFill,
    BsTabletLandscape,
    BsTablet,
    BsTagFill,
    BsTag,
    BsTagsFill,
    BsTags,
    BsTaxiFrontFill,
    BsTaxiFront,
    BsTelegram,
    BsTelephoneFill,
    BsTelephoneForwardFill,
    BsTelephoneForward,
    BsTelephoneInboundFill,
    BsTelephoneInbound,
    BsTelephoneMinusFill,
    BsTelephoneMinus,
    BsTelephoneOutboundFill,
    BsTelephoneOutbound,
    BsTelephonePlusFill,
    BsTelephonePlus,
    BsTelephoneXFill,
    BsTelephoneX,
    BsTelephone,
    BsTencentQq,
    BsTerminalDash,
    BsTerminalFill,
    BsTerminalPlus,
    BsTerminalSplit,
    BsTerminalX,
    BsTerminal,
    BsTextCenter,
    BsTextIndentLeft,
    BsTextIndentRight,
    BsTextLeft,
    BsTextParagraph,
    BsTextRight,
    BsTextWrap,
    BsTextareaResize,
    BsTextareaT,
    BsTextarea,
    BsThermometerHalf,
    BsThermometerHigh,
    BsThermometerLow,
    BsThermometerSnow,
    BsThermometerSun,
    BsThermometer,
    BsThreadsFill,
    BsThreads,
    BsThreeDotsVertical,
    BsThreeDots,
    BsThunderboltFill,
    BsThunderbolt,
    BsTicketDetailedFill,
    BsTicketDetailed,
    BsTicketFill,
    BsTicketPerforatedFill,
    BsTicketPerforated,
    BsTicket,
    BsTiktok,
    BsToggleOff,
    BsToggleOn,
    BsToggle2Off,
    BsToggle2On,
    BsToggles,
    BsToggles2,
    BsTools,
    BsTornado,
    BsTrainFreightFrontFill,
    BsTrainFreightFront,
    BsTrainFrontFill,
    BsTrainFront,
    BsTrainLightrailFrontFill,
    BsTrainLightrailFront,
    BsTranslate,
    BsTransparency,
    BsTrashFill,
    BsTrash,
    BsTrash2Fill,
    BsTrash2,
    BsTrash3Fill,
    BsTrash3,
    BsTreeFill,
    BsTree,
    BsTrello,
    BsTriangleFill,
    BsTriangleHalf,
    BsTriangle,
    BsTrophyFill,
    BsTrophy,
    BsTropicalStorm,
    BsTruckFlatbed,
    BsTruckFrontFill,
    BsTruckFront,
    BsTruck,
    BsTsunami,
    BsTvFill,
    BsTv,
    BsTwitch,
    BsTwitterX,
    BsTwitter,
    BsTypeBold,
    BsTypeH1,
    BsTypeH2,
    BsTypeH3,
    BsTypeH4,
    BsTypeH5,
    BsTypeH6,
    BsTypeItalic,
    BsTypeStrikethrough,
    BsTypeUnderline,
    BsType,
    BsUbuntu,
    BsUiChecksGrid,
    BsUiChecks,
    BsUiRadiosGrid,
    BsUiRadios,
    BsUmbrellaFill,
    BsUmbrella,
    BsUnindent,
    BsUnion,
    BsUnity,
    BsUniversalAccessCircle,
    BsUniversalAccess,
    BsUnlockFill,
    BsUnlock,
    BsUpcScan,
    BsUpc,
    BsUpload,
    BsUsbCFill,
    BsUsbC,
    BsUsbDriveFill,
    BsUsbDrive,
    BsUsbFill,
    BsUsbMicroFill,
    BsUsbMicro,
    BsUsbMiniFill,
    BsUsbMini,
    BsUsbPlugFill,
    BsUsbPlug,
    BsUsbSymbol,
    BsUsb,
    BsValentine,
    BsValentine2,
    BsVectorPen,
    BsViewList,
    BsViewStacked,
    BsVignette,
    BsVimeo,
    BsVinylFill,
    BsVinyl,
    BsVirus,
    BsVirus2,
    BsVoicemail,
    BsVolumeDownFill,
    BsVolumeDown,
    BsVolumeMuteFill,
    BsVolumeMute,
    BsVolumeOffFill,
    BsVolumeOff,
    BsVolumeUpFill,
    BsVolumeUp,
    BsVr,
    BsWalletFill,
    BsWallet,
    BsWallet2,
    BsWatch,
    BsWater,
    BsWebcamFill,
    BsWebcam,
    BsWechat,
    BsWhatsapp,
    BsWifi1,
    BsWifi2,
    BsWifiOff,
    BsWifi,
    BsWikipedia,
    BsWind,
    BsWindowDash,
    BsWindowDesktop,
    BsWindowDock,
    BsWindowFullscreen,
    BsWindowPlus,
    BsWindowSidebar,
    BsWindowSplit,
    BsWindowStack,
    BsWindowX,
    BsWindow,
    BsWindows,
    BsWordpress,
    BsWrenchAdjustableCircleFill,
    BsWrenchAdjustableCircle,
    BsWrenchAdjustable,
    BsWrench,
    BsXCircleFill,
    BsXCircle,
    BsXDiamondFill,
    BsXDiamond,
    BsXLg,
    BsXOctagonFill,
    BsXOctagon,
    BsXSquareFill,
    BsXSquare,
    BsX,
    BsXbox,
    BsYelp,
    BsYinYang,
    BsYoutube,
    BsZoomIn,
    BsZoomOut,
} from "react-icons/bs"

export function nameToReactIcon_bs_2(iconName: string): IconType | undefined {

    switch(iconName) {
        case "bs:BsMedium":
            return BsMedium;
        case "bs:BsMegaphoneFill":
            return BsMegaphoneFill;
        case "bs:BsMegaphone":
            return BsMegaphone;
        case "bs:BsMemory":
            return BsMemory;
        case "bs:BsMenuAppFill":
            return BsMenuAppFill;
        case "bs:BsMenuApp":
            return BsMenuApp;
        case "bs:BsMenuButtonFill":
            return BsMenuButtonFill;
        case "bs:BsMenuButtonWideFill":
            return BsMenuButtonWideFill;
        case "bs:BsMenuButtonWide":
            return BsMenuButtonWide;
        case "bs:BsMenuButton":
            return BsMenuButton;
        case "bs:BsMenuDown":
            return BsMenuDown;
        case "bs:BsMenuUp":
            return BsMenuUp;
        case "bs:BsMessenger":
            return BsMessenger;
        case "bs:BsMeta":
            return BsMeta;
        case "bs:BsMicFill":
            return BsMicFill;
        case "bs:BsMicMuteFill":
            return BsMicMuteFill;
        case "bs:BsMicMute":
            return BsMicMute;
        case "bs:BsMic":
            return BsMic;
        case "bs:BsMicrosoftTeams":
            return BsMicrosoftTeams;
        case "bs:BsMicrosoft":
            return BsMicrosoft;
        case "bs:BsMinecartLoaded":
            return BsMinecartLoaded;
        case "bs:BsMinecart":
            return BsMinecart;
        case "bs:BsModemFill":
            return BsModemFill;
        case "bs:BsModem":
            return BsModem;
        case "bs:BsMoisture":
            return BsMoisture;
        case "bs:BsMoonFill":
            return BsMoonFill;
        case "bs:BsMoonStarsFill":
            return BsMoonStarsFill;
        case "bs:BsMoonStars":
            return BsMoonStars;
        case "bs:BsMoon":
            return BsMoon;
        case "bs:BsMortarboardFill":
            return BsMortarboardFill;
        case "bs:BsMortarboard":
            return BsMortarboard;
        case "bs:BsMotherboardFill":
            return BsMotherboardFill;
        case "bs:BsMotherboard":
            return BsMotherboard;
        case "bs:BsMouseFill":
            return BsMouseFill;
        case "bs:BsMouse":
            return BsMouse;
        case "bs:BsMouse2Fill":
            return BsMouse2Fill;
        case "bs:BsMouse2":
            return BsMouse2;
        case "bs:BsMouse3Fill":
            return BsMouse3Fill;
        case "bs:BsMouse3":
            return BsMouse3;
        case "bs:BsMusicNoteBeamed":
            return BsMusicNoteBeamed;
        case "bs:BsMusicNoteList":
            return BsMusicNoteList;
        case "bs:BsMusicNote":
            return BsMusicNote;
        case "bs:BsMusicPlayerFill":
            return BsMusicPlayerFill;
        case "bs:BsMusicPlayer":
            return BsMusicPlayer;
        case "bs:BsNewspaper":
            return BsNewspaper;
        case "bs:BsNintendoSwitch":
            return BsNintendoSwitch;
        case "bs:BsNodeMinusFill":
            return BsNodeMinusFill;
        case "bs:BsNodeMinus":
            return BsNodeMinus;
        case "bs:BsNodePlusFill":
            return BsNodePlusFill;
        case "bs:BsNodePlus":
            return BsNodePlus;
        case "bs:BsNoiseReduction":
            return BsNoiseReduction;
        case "bs:BsNutFill":
            return BsNutFill;
        case "bs:BsNut":
            return BsNut;
        case "bs:BsNvidia":
            return BsNvidia;
        case "bs:BsNvmeFill":
            return BsNvmeFill;
        case "bs:BsNvme":
            return BsNvme;
        case "bs:BsOctagonFill":
            return BsOctagonFill;
        case "bs:BsOctagonHalf":
            return BsOctagonHalf;
        case "bs:BsOctagon":
            return BsOctagon;
        case "bs:BsOpencollective":
            return BsOpencollective;
        case "bs:BsOpticalAudioFill":
            return BsOpticalAudioFill;
        case "bs:BsOpticalAudio":
            return BsOpticalAudio;
        case "bs:BsOption":
            return BsOption;
        case "bs:BsOutlet":
            return BsOutlet;
        case "bs:BsPCircleFill":
            return BsPCircleFill;
        case "bs:BsPCircle":
            return BsPCircle;
        case "bs:BsPSquareFill":
            return BsPSquareFill;
        case "bs:BsPSquare":
            return BsPSquare;
        case "bs:BsPaintBucket":
            return BsPaintBucket;
        case "bs:BsPaletteFill":
            return BsPaletteFill;
        case "bs:BsPalette":
            return BsPalette;
        case "bs:BsPalette2":
            return BsPalette2;
        case "bs:BsPaperclip":
            return BsPaperclip;
        case "bs:BsParagraph":
            return BsParagraph;
        case "bs:BsPassFill":
            return BsPassFill;
        case "bs:BsPass":
            return BsPass;
        case "bs:BsPassportFill":
            return BsPassportFill;
        case "bs:BsPassport":
            return BsPassport;
        case "bs:BsPatchCheckFill":
            return BsPatchCheckFill;
        case "bs:BsPatchCheck":
            return BsPatchCheck;
        case "bs:BsPatchExclamationFill":
            return BsPatchExclamationFill;
        case "bs:BsPatchExclamation":
            return BsPatchExclamation;
        case "bs:BsPatchMinusFill":
            return BsPatchMinusFill;
        case "bs:BsPatchMinus":
            return BsPatchMinus;
        case "bs:BsPatchPlusFill":
            return BsPatchPlusFill;
        case "bs:BsPatchPlus":
            return BsPatchPlus;
        case "bs:BsPatchQuestionFill":
            return BsPatchQuestionFill;
        case "bs:BsPatchQuestion":
            return BsPatchQuestion;
        case "bs:BsPauseBtnFill":
            return BsPauseBtnFill;
        case "bs:BsPauseBtn":
            return BsPauseBtn;
        case "bs:BsPauseCircleFill":
            return BsPauseCircleFill;
        case "bs:BsPauseCircle":
            return BsPauseCircle;
        case "bs:BsPauseFill":
            return BsPauseFill;
        case "bs:BsPause":
            return BsPause;
        case "bs:BsPaypal":
            return BsPaypal;
        case "bs:BsPcDisplayHorizontal":
            return BsPcDisplayHorizontal;
        case "bs:BsPcDisplay":
            return BsPcDisplay;
        case "bs:BsPcHorizontal":
            return BsPcHorizontal;
        case "bs:BsPc":
            return BsPc;
        case "bs:BsPciCardNetwork":
            return BsPciCardNetwork;
        case "bs:BsPciCardSound":
            return BsPciCardSound;
        case "bs:BsPciCard":
            return BsPciCard;
        case "bs:BsPeaceFill":
            return BsPeaceFill;
        case "bs:BsPeace":
            return BsPeace;
        case "bs:BsPenFill":
            return BsPenFill;
        case "bs:BsPen":
            return BsPen;
        case "bs:BsPencilFill":
            return BsPencilFill;
        case "bs:BsPencilSquare":
            return BsPencilSquare;
        case "bs:BsPencil":
            return BsPencil;
        case "bs:BsPentagonFill":
            return BsPentagonFill;
        case "bs:BsPentagonHalf":
            return BsPentagonHalf;
        case "bs:BsPentagon":
            return BsPentagon;
        case "bs:BsPeopleFill":
            return BsPeopleFill;
        case "bs:BsPeople":
            return BsPeople;
        case "bs:BsPercent":
            return BsPercent;
        case "bs:BsPersonAdd":
            return BsPersonAdd;
        case "bs:BsPersonArmsUp":
            return BsPersonArmsUp;
        case "bs:BsPersonBadgeFill":
            return BsPersonBadgeFill;
        case "bs:BsPersonBadge":
            return BsPersonBadge;
        case "bs:BsPersonBoundingBox":
            return BsPersonBoundingBox;
        case "bs:BsPersonCheckFill":
            return BsPersonCheckFill;
        case "bs:BsPersonCheck":
            return BsPersonCheck;
        case "bs:BsPersonCircle":
            return BsPersonCircle;
        case "bs:BsPersonDashFill":
            return BsPersonDashFill;
        case "bs:BsPersonDash":
            return BsPersonDash;
        case "bs:BsPersonDown":
            return BsPersonDown;
        case "bs:BsPersonExclamation":
            return BsPersonExclamation;
        case "bs:BsPersonFillAdd":
            return BsPersonFillAdd;
        case "bs:BsPersonFillCheck":
            return BsPersonFillCheck;
        case "bs:BsPersonFillDash":
            return BsPersonFillDash;
        case "bs:BsPersonFillDown":
            return BsPersonFillDown;
        case "bs:BsPersonFillExclamation":
            return BsPersonFillExclamation;
        case "bs:BsPersonFillGear":
            return BsPersonFillGear;
        case "bs:BsPersonFillLock":
            return BsPersonFillLock;
        case "bs:BsPersonFillSlash":
            return BsPersonFillSlash;
        case "bs:BsPersonFillUp":
            return BsPersonFillUp;
        case "bs:BsPersonFillX":
            return BsPersonFillX;
        case "bs:BsPersonFill":
            return BsPersonFill;
        case "bs:BsPersonGear":
            return BsPersonGear;
        case "bs:BsPersonHeart":
            return BsPersonHeart;
        case "bs:BsPersonHearts":
            return BsPersonHearts;
        case "bs:BsPersonLinesFill":
            return BsPersonLinesFill;
        case "bs:BsPersonLock":
            return BsPersonLock;
        case "bs:BsPersonPlusFill":
            return BsPersonPlusFill;
        case "bs:BsPersonPlus":
            return BsPersonPlus;
        case "bs:BsPersonRaisedHand":
            return BsPersonRaisedHand;
        case "bs:BsPersonRolodex":
            return BsPersonRolodex;
        case "bs:BsPersonSlash":
            return BsPersonSlash;
        case "bs:BsPersonSquare":
            return BsPersonSquare;
        case "bs:BsPersonStandingDress":
            return BsPersonStandingDress;
        case "bs:BsPersonStanding":
            return BsPersonStanding;
        case "bs:BsPersonUp":
            return BsPersonUp;
        case "bs:BsPersonVcardFill":
            return BsPersonVcardFill;
        case "bs:BsPersonVcard":
            return BsPersonVcard;
        case "bs:BsPersonVideo":
            return BsPersonVideo;
        case "bs:BsPersonVideo2":
            return BsPersonVideo2;
        case "bs:BsPersonVideo3":
            return BsPersonVideo3;
        case "bs:BsPersonWalking":
            return BsPersonWalking;
        case "bs:BsPersonWheelchair":
            return BsPersonWheelchair;
        case "bs:BsPersonWorkspace":
            return BsPersonWorkspace;
        case "bs:BsPersonXFill":
            return BsPersonXFill;
        case "bs:BsPersonX":
            return BsPersonX;
        case "bs:BsPerson":
            return BsPerson;
        case "bs:BsPhoneFill":
            return BsPhoneFill;
        case "bs:BsPhoneFlip":
            return BsPhoneFlip;
        case "bs:BsPhoneLandscapeFill":
            return BsPhoneLandscapeFill;
        case "bs:BsPhoneLandscape":
            return BsPhoneLandscape;
        case "bs:BsPhoneVibrateFill":
            return BsPhoneVibrateFill;
        case "bs:BsPhoneVibrate":
            return BsPhoneVibrate;
        case "bs:BsPhone":
            return BsPhone;
        case "bs:BsPieChartFill":
            return BsPieChartFill;
        case "bs:BsPieChart":
            return BsPieChart;
        case "bs:BsPiggyBankFill":
            return BsPiggyBankFill;
        case "bs:BsPiggyBank":
            return BsPiggyBank;
        case "bs:BsPinAngleFill":
            return BsPinAngleFill;
        case "bs:BsPinAngle":
            return BsPinAngle;
        case "bs:BsPinFill":
            return BsPinFill;
        case "bs:BsPinMapFill":
            return BsPinMapFill;
        case "bs:BsPinMap":
            return BsPinMap;
        case "bs:BsPin":
            return BsPin;
        case "bs:BsPinterest":
            return BsPinterest;
        case "bs:BsPipFill":
            return BsPipFill;
        case "bs:BsPip":
            return BsPip;
        case "bs:BsPlayBtnFill":
            return BsPlayBtnFill;
        case "bs:BsPlayBtn":
            return BsPlayBtn;
        case "bs:BsPlayCircleFill":
            return BsPlayCircleFill;
        case "bs:BsPlayCircle":
            return BsPlayCircle;
        case "bs:BsPlayFill":
            return BsPlayFill;
        case "bs:BsPlay":
            return BsPlay;
        case "bs:BsPlaystation":
            return BsPlaystation;
        case "bs:BsPlugFill":
            return BsPlugFill;
        case "bs:BsPlug":
            return BsPlug;
        case "bs:BsPlugin":
            return BsPlugin;
        case "bs:BsPlusCircleDotted":
            return BsPlusCircleDotted;
        case "bs:BsPlusCircleFill":
            return BsPlusCircleFill;
        case "bs:BsPlusCircle":
            return BsPlusCircle;
        case "bs:BsPlusLg":
            return BsPlusLg;
        case "bs:BsPlusSlashMinus":
            return BsPlusSlashMinus;
        case "bs:BsPlusSquareDotted":
            return BsPlusSquareDotted;
        case "bs:BsPlusSquareFill":
            return BsPlusSquareFill;
        case "bs:BsPlusSquare":
            return BsPlusSquare;
        case "bs:BsPlus":
            return BsPlus;
        case "bs:BsPostageFill":
            return BsPostageFill;
        case "bs:BsPostageHeartFill":
            return BsPostageHeartFill;
        case "bs:BsPostageHeart":
            return BsPostageHeart;
        case "bs:BsPostage":
            return BsPostage;
        case "bs:BsPostcardFill":
            return BsPostcardFill;
        case "bs:BsPostcardHeartFill":
            return BsPostcardHeartFill;
        case "bs:BsPostcardHeart":
            return BsPostcardHeart;
        case "bs:BsPostcard":
            return BsPostcard;
        case "bs:BsPower":
            return BsPower;
        case "bs:BsPrescription":
            return BsPrescription;
        case "bs:BsPrescription2":
            return BsPrescription2;
        case "bs:BsPrinterFill":
            return BsPrinterFill;
        case "bs:BsPrinter":
            return BsPrinter;
        case "bs:BsProjectorFill":
            return BsProjectorFill;
        case "bs:BsProjector":
            return BsProjector;
        case "bs:BsPuzzleFill":
            return BsPuzzleFill;
        case "bs:BsPuzzle":
            return BsPuzzle;
        case "bs:BsQrCodeScan":
            return BsQrCodeScan;
        case "bs:BsQrCode":
            return BsQrCode;
        case "bs:BsQuestionCircleFill":
            return BsQuestionCircleFill;
        case "bs:BsQuestionCircle":
            return BsQuestionCircle;
        case "bs:BsQuestionDiamondFill":
            return BsQuestionDiamondFill;
        case "bs:BsQuestionDiamond":
            return BsQuestionDiamond;
        case "bs:BsQuestionLg":
            return BsQuestionLg;
        case "bs:BsQuestionOctagonFill":
            return BsQuestionOctagonFill;
        case "bs:BsQuestionOctagon":
            return BsQuestionOctagon;
        case "bs:BsQuestionSquareFill":
            return BsQuestionSquareFill;
        case "bs:BsQuestionSquare":
            return BsQuestionSquare;
        case "bs:BsQuestion":
            return BsQuestion;
        case "bs:BsQuora":
            return BsQuora;
        case "bs:BsQuote":
            return BsQuote;
        case "bs:BsRCircleFill":
            return BsRCircleFill;
        case "bs:BsRCircle":
            return BsRCircle;
        case "bs:BsRSquareFill":
            return BsRSquareFill;
        case "bs:BsRSquare":
            return BsRSquare;
        case "bs:BsRadar":
            return BsRadar;
        case "bs:BsRadioactive":
            return BsRadioactive;
        case "bs:BsRainbow":
            return BsRainbow;
        case "bs:BsReceiptCutoff":
            return BsReceiptCutoff;
        case "bs:BsReceipt":
            return BsReceipt;
        case "bs:BsReception0":
            return BsReception0;
        case "bs:BsReception1":
            return BsReception1;
        case "bs:BsReception2":
            return BsReception2;
        case "bs:BsReception3":
            return BsReception3;
        case "bs:BsReception4":
            return BsReception4;
        case "bs:BsRecordBtnFill":
            return BsRecordBtnFill;
        case "bs:BsRecordBtn":
            return BsRecordBtn;
        case "bs:BsRecordCircleFill":
            return BsRecordCircleFill;
        case "bs:BsRecordCircle":
            return BsRecordCircle;
        case "bs:BsRecordFill":
            return BsRecordFill;
        case "bs:BsRecord":
            return BsRecord;
        case "bs:BsRecord2Fill":
            return BsRecord2Fill;
        case "bs:BsRecord2":
            return BsRecord2;
        case "bs:BsRecycle":
            return BsRecycle;
        case "bs:BsReddit":
            return BsReddit;
        case "bs:BsRegex":
            return BsRegex;
        case "bs:BsRepeat1":
            return BsRepeat1;
        case "bs:BsRepeat":
            return BsRepeat;
        case "bs:BsReplyAllFill":
            return BsReplyAllFill;
        case "bs:BsReplyAll":
            return BsReplyAll;
        case "bs:BsReplyFill":
            return BsReplyFill;
        case "bs:BsReply":
            return BsReply;
        case "bs:BsRewindBtnFill":
            return BsRewindBtnFill;
        case "bs:BsRewindBtn":
            return BsRewindBtn;
        case "bs:BsRewindCircleFill":
            return BsRewindCircleFill;
        case "bs:BsRewindCircle":
            return BsRewindCircle;
        case "bs:BsRewindFill":
            return BsRewindFill;
        case "bs:BsRewind":
            return BsRewind;
        case "bs:BsRobot":
            return BsRobot;
        case "bs:BsRocketFill":
            return BsRocketFill;
        case "bs:BsRocketTakeoffFill":
            return BsRocketTakeoffFill;
        case "bs:BsRocketTakeoff":
            return BsRocketTakeoff;
        case "bs:BsRocket":
            return BsRocket;
        case "bs:BsRouterFill":
            return BsRouterFill;
        case "bs:BsRouter":
            return BsRouter;
        case "bs:BsRssFill":
            return BsRssFill;
        case "bs:BsRss":
            return BsRss;
        case "bs:BsRulers":
            return BsRulers;
        case "bs:BsSafeFill":
            return BsSafeFill;
        case "bs:BsSafe":
            return BsSafe;
        case "bs:BsSafe2Fill":
            return BsSafe2Fill;
        case "bs:BsSafe2":
            return BsSafe2;
        case "bs:BsSaveFill":
            return BsSaveFill;
        case "bs:BsSave":
            return BsSave;
        case "bs:BsSave2Fill":
            return BsSave2Fill;
        case "bs:BsSave2":
            return BsSave2;
        case "bs:BsScissors":
            return BsScissors;
        case "bs:BsScooter":
            return BsScooter;
        case "bs:BsScrewdriver":
            return BsScrewdriver;
        case "bs:BsSdCardFill":
            return BsSdCardFill;
        case "bs:BsSdCard":
            return BsSdCard;
        case "bs:BsSearchHeartFill":
            return BsSearchHeartFill;
        case "bs:BsSearchHeart":
            return BsSearchHeart;
        case "bs:BsSearch":
            return BsSearch;
        case "bs:BsSegmentedNav":
            return BsSegmentedNav;
        case "bs:BsSendArrowDownFill":
            return BsSendArrowDownFill;
        case "bs:BsSendArrowDown":
            return BsSendArrowDown;
        case "bs:BsSendArrowUpFill":
            return BsSendArrowUpFill;
        case "bs:BsSendArrowUp":
            return BsSendArrowUp;
        case "bs:BsSendCheckFill":
            return BsSendCheckFill;
        case "bs:BsSendCheck":
            return BsSendCheck;
        case "bs:BsSendDashFill":
            return BsSendDashFill;
        case "bs:BsSendDash":
            return BsSendDash;
        case "bs:BsSendExclamationFill":
            return BsSendExclamationFill;
        case "bs:BsSendExclamation":
            return BsSendExclamation;
        case "bs:BsSendFill":
            return BsSendFill;
        case "bs:BsSendPlusFill":
            return BsSendPlusFill;
        case "bs:BsSendPlus":
            return BsSendPlus;
        case "bs:BsSendSlashFill":
            return BsSendSlashFill;
        case "bs:BsSendSlash":
            return BsSendSlash;
        case "bs:BsSendXFill":
            return BsSendXFill;
        case "bs:BsSendX":
            return BsSendX;
        case "bs:BsSend":
            return BsSend;
        case "bs:BsServer":
            return BsServer;
        case "bs:BsShadows":
            return BsShadows;
        case "bs:BsShareFill":
            return BsShareFill;
        case "bs:BsShare":
            return BsShare;
        case "bs:BsShieldCheck":
            return BsShieldCheck;
        case "bs:BsShieldExclamation":
            return BsShieldExclamation;
        case "bs:BsShieldFillCheck":
            return BsShieldFillCheck;
        case "bs:BsShieldFillExclamation":
            return BsShieldFillExclamation;
        case "bs:BsShieldFillMinus":
            return BsShieldFillMinus;
        case "bs:BsShieldFillPlus":
            return BsShieldFillPlus;
        case "bs:BsShieldFillX":
            return BsShieldFillX;
        case "bs:BsShieldFill":
            return BsShieldFill;
        case "bs:BsShieldLockFill":
            return BsShieldLockFill;
        case "bs:BsShieldLock":
            return BsShieldLock;
        case "bs:BsShieldMinus":
            return BsShieldMinus;
        case "bs:BsShieldPlus":
            return BsShieldPlus;
        case "bs:BsShieldShaded":
            return BsShieldShaded;
        case "bs:BsShieldSlashFill":
            return BsShieldSlashFill;
        case "bs:BsShieldSlash":
            return BsShieldSlash;
        case "bs:BsShieldX":
            return BsShieldX;
        case "bs:BsShield":
            return BsShield;
        case "bs:BsShiftFill":
            return BsShiftFill;
        case "bs:BsShift":
            return BsShift;
        case "bs:BsShopWindow":
            return BsShopWindow;
        case "bs:BsShop":
            return BsShop;
        case "bs:BsShuffle":
            return BsShuffle;
        case "bs:BsSignDeadEndFill":
            return BsSignDeadEndFill;
        case "bs:BsSignDeadEnd":
            return BsSignDeadEnd;
        case "bs:BsSignDoNotEnterFill":
            return BsSignDoNotEnterFill;
        case "bs:BsSignDoNotEnter":
            return BsSignDoNotEnter;
        case "bs:BsSignIntersectionFill":
            return BsSignIntersectionFill;
        case "bs:BsSignIntersectionSideFill":
            return BsSignIntersectionSideFill;
        case "bs:BsSignIntersectionSide":
            return BsSignIntersectionSide;
        case "bs:BsSignIntersectionTFill":
            return BsSignIntersectionTFill;
        case "bs:BsSignIntersectionT":
            return BsSignIntersectionT;
        case "bs:BsSignIntersectionYFill":
            return BsSignIntersectionYFill;
        case "bs:BsSignIntersectionY":
            return BsSignIntersectionY;
        case "bs:BsSignIntersection":
            return BsSignIntersection;
        case "bs:BsSignMergeLeftFill":
            return BsSignMergeLeftFill;
        case "bs:BsSignMergeLeft":
            return BsSignMergeLeft;
        case "bs:BsSignMergeRightFill":
            return BsSignMergeRightFill;
        case "bs:BsSignMergeRight":
            return BsSignMergeRight;
        case "bs:BsSignNoLeftTurnFill":
            return BsSignNoLeftTurnFill;
        case "bs:BsSignNoLeftTurn":
            return BsSignNoLeftTurn;
        case "bs:BsSignNoParkingFill":
            return BsSignNoParkingFill;
        case "bs:BsSignNoParking":
            return BsSignNoParking;
        case "bs:BsSignNoRightTurnFill":
            return BsSignNoRightTurnFill;
        case "bs:BsSignNoRightTurn":
            return BsSignNoRightTurn;
        case "bs:BsSignRailroadFill":
            return BsSignRailroadFill;
        case "bs:BsSignRailroad":
            return BsSignRailroad;
        case "bs:BsSignStopFill":
            return BsSignStopFill;
        case "bs:BsSignStopLightsFill":
            return BsSignStopLightsFill;
        case "bs:BsSignStopLights":
            return BsSignStopLights;
        case "bs:BsSignStop":
            return BsSignStop;
        case "bs:BsSignTurnLeftFill":
            return BsSignTurnLeftFill;
        case "bs:BsSignTurnLeft":
            return BsSignTurnLeft;
        case "bs:BsSignTurnRightFill":
            return BsSignTurnRightFill;
        case "bs:BsSignTurnRight":
            return BsSignTurnRight;
        case "bs:BsSignTurnSlightLeftFill":
            return BsSignTurnSlightLeftFill;
        case "bs:BsSignTurnSlightLeft":
            return BsSignTurnSlightLeft;
        case "bs:BsSignTurnSlightRightFill":
            return BsSignTurnSlightRightFill;
        case "bs:BsSignTurnSlightRight":
            return BsSignTurnSlightRight;
        case "bs:BsSignYieldFill":
            return BsSignYieldFill;
        case "bs:BsSignYield":
            return BsSignYield;
        case "bs:BsSignal":
            return BsSignal;
        case "bs:BsSignpost2Fill":
            return BsSignpost2Fill;
        case "bs:BsSignpost2":
            return BsSignpost2;
        case "bs:BsSignpostFill":
            return BsSignpostFill;
        case "bs:BsSignpostSplitFill":
            return BsSignpostSplitFill;
        case "bs:BsSignpostSplit":
            return BsSignpostSplit;
        case "bs:BsSignpost":
            return BsSignpost;
        case "bs:BsSimFill":
            return BsSimFill;
        case "bs:BsSimSlashFill":
            return BsSimSlashFill;
        case "bs:BsSimSlash":
            return BsSimSlash;
        case "bs:BsSim":
            return BsSim;
        case "bs:BsSinaWeibo":
            return BsSinaWeibo;
        case "bs:BsSkipBackwardBtnFill":
            return BsSkipBackwardBtnFill;
        case "bs:BsSkipBackwardBtn":
            return BsSkipBackwardBtn;
        case "bs:BsSkipBackwardCircleFill":
            return BsSkipBackwardCircleFill;
        case "bs:BsSkipBackwardCircle":
            return BsSkipBackwardCircle;
        case "bs:BsSkipBackwardFill":
            return BsSkipBackwardFill;
        case "bs:BsSkipBackward":
            return BsSkipBackward;
        case "bs:BsSkipEndBtnFill":
            return BsSkipEndBtnFill;
        case "bs:BsSkipEndBtn":
            return BsSkipEndBtn;
        case "bs:BsSkipEndCircleFill":
            return BsSkipEndCircleFill;
        case "bs:BsSkipEndCircle":
            return BsSkipEndCircle;
        case "bs:BsSkipEndFill":
            return BsSkipEndFill;
        case "bs:BsSkipEnd":
            return BsSkipEnd;
        case "bs:BsSkipForwardBtnFill":
            return BsSkipForwardBtnFill;
        case "bs:BsSkipForwardBtn":
            return BsSkipForwardBtn;
        case "bs:BsSkipForwardCircleFill":
            return BsSkipForwardCircleFill;
        case "bs:BsSkipForwardCircle":
            return BsSkipForwardCircle;
        case "bs:BsSkipForwardFill":
            return BsSkipForwardFill;
        case "bs:BsSkipForward":
            return BsSkipForward;
        case "bs:BsSkipStartBtnFill":
            return BsSkipStartBtnFill;
        case "bs:BsSkipStartBtn":
            return BsSkipStartBtn;
        case "bs:BsSkipStartCircleFill":
            return BsSkipStartCircleFill;
        case "bs:BsSkipStartCircle":
            return BsSkipStartCircle;
        case "bs:BsSkipStartFill":
            return BsSkipStartFill;
        case "bs:BsSkipStart":
            return BsSkipStart;
        case "bs:BsSkype":
            return BsSkype;
        case "bs:BsSlack":
            return BsSlack;
        case "bs:BsSlashCircleFill":
            return BsSlashCircleFill;
        case "bs:BsSlashCircle":
            return BsSlashCircle;
        case "bs:BsSlashLg":
            return BsSlashLg;
        case "bs:BsSlashSquareFill":
            return BsSlashSquareFill;
        case "bs:BsSlashSquare":
            return BsSlashSquare;
        case "bs:BsSlash":
            return BsSlash;
        case "bs:BsSliders":
            return BsSliders;
        case "bs:BsSliders2Vertical":
            return BsSliders2Vertical;
        case "bs:BsSliders2":
            return BsSliders2;
        case "bs:BsSmartwatch":
            return BsSmartwatch;
        case "bs:BsSnapchat":
            return BsSnapchat;
        case "bs:BsSnow":
            return BsSnow;
        case "bs:BsSnow2":
            return BsSnow2;
        case "bs:BsSnow3":
            return BsSnow3;
        case "bs:BsSortAlphaDownAlt":
            return BsSortAlphaDownAlt;
        case "bs:BsSortAlphaDown":
            return BsSortAlphaDown;
        case "bs:BsSortAlphaUpAlt":
            return BsSortAlphaUpAlt;
        case "bs:BsSortAlphaUp":
            return BsSortAlphaUp;
        case "bs:BsSortDownAlt":
            return BsSortDownAlt;
        case "bs:BsSortDown":
            return BsSortDown;
        case "bs:BsSortNumericDownAlt":
            return BsSortNumericDownAlt;
        case "bs:BsSortNumericDown":
            return BsSortNumericDown;
        case "bs:BsSortNumericUpAlt":
            return BsSortNumericUpAlt;
        case "bs:BsSortNumericUp":
            return BsSortNumericUp;
        case "bs:BsSortUpAlt":
            return BsSortUpAlt;
        case "bs:BsSortUp":
            return BsSortUp;
        case "bs:BsSoundwave":
            return BsSoundwave;
        case "bs:BsSourceforge":
            return BsSourceforge;
        case "bs:BsSpeakerFill":
            return BsSpeakerFill;
        case "bs:BsSpeaker":
            return BsSpeaker;
        case "bs:BsSpeedometer":
            return BsSpeedometer;
        case "bs:BsSpeedometer2":
            return BsSpeedometer2;
        case "bs:BsSpellcheck":
            return BsSpellcheck;
        case "bs:BsSpotify":
            return BsSpotify;
        case "bs:BsSquareFill":
            return BsSquareFill;
        case "bs:BsSquareHalf":
            return BsSquareHalf;
        case "bs:BsSquare":
            return BsSquare;
        case "bs:BsStackOverflow":
            return BsStackOverflow;
        case "bs:BsStack":
            return BsStack;
        case "bs:BsStarFill":
            return BsStarFill;
        case "bs:BsStarHalf":
            return BsStarHalf;
        case "bs:BsStar":
            return BsStar;
        case "bs:BsStars":
            return BsStars;
        case "bs:BsSteam":
            return BsSteam;
        case "bs:BsStickiesFill":
            return BsStickiesFill;
        case "bs:BsStickies":
            return BsStickies;
        case "bs:BsStickyFill":
            return BsStickyFill;
        case "bs:BsSticky":
            return BsSticky;
        case "bs:BsStopBtnFill":
            return BsStopBtnFill;
        case "bs:BsStopBtn":
            return BsStopBtn;
        case "bs:BsStopCircleFill":
            return BsStopCircleFill;
        case "bs:BsStopCircle":
            return BsStopCircle;
        case "bs:BsStopFill":
            return BsStopFill;
        case "bs:BsStop":
            return BsStop;
        case "bs:BsStoplightsFill":
            return BsStoplightsFill;
        case "bs:BsStoplights":
            return BsStoplights;
        case "bs:BsStopwatchFill":
            return BsStopwatchFill;
        case "bs:BsStopwatch":
            return BsStopwatch;
        case "bs:BsStrava":
            return BsStrava;
        case "bs:BsStripe":
            return BsStripe;
        case "bs:BsSubscript":
            return BsSubscript;
        case "bs:BsSubstack":
            return BsSubstack;
        case "bs:BsSubtract":
            return BsSubtract;
        case "bs:BsSuitClubFill":
            return BsSuitClubFill;
        case "bs:BsSuitClub":
            return BsSuitClub;
        case "bs:BsSuitDiamondFill":
            return BsSuitDiamondFill;
        case "bs:BsSuitDiamond":
            return BsSuitDiamond;
        case "bs:BsSuitHeartFill":
            return BsSuitHeartFill;
        case "bs:BsSuitHeart":
            return BsSuitHeart;
        case "bs:BsSuitSpadeFill":
            return BsSuitSpadeFill;
        case "bs:BsSuitSpade":
            return BsSuitSpade;
        case "bs:BsSuitcaseFill":
            return BsSuitcaseFill;
        case "bs:BsSuitcaseLgFill":
            return BsSuitcaseLgFill;
        case "bs:BsSuitcaseLg":
            return BsSuitcaseLg;
        case "bs:BsSuitcase":
            return BsSuitcase;
        case "bs:BsSuitcase2Fill":
            return BsSuitcase2Fill;
        case "bs:BsSuitcase2":
            return BsSuitcase2;
        case "bs:BsSunFill":
            return BsSunFill;
        case "bs:BsSun":
            return BsSun;
        case "bs:BsSunglasses":
            return BsSunglasses;
        case "bs:BsSunriseFill":
            return BsSunriseFill;
        case "bs:BsSunrise":
            return BsSunrise;
        case "bs:BsSunsetFill":
            return BsSunsetFill;
        case "bs:BsSunset":
            return BsSunset;
        case "bs:BsSuperscript":
            return BsSuperscript;
        case "bs:BsSymmetryHorizontal":
            return BsSymmetryHorizontal;
        case "bs:BsSymmetryVertical":
            return BsSymmetryVertical;
        case "bs:BsTable":
            return BsTable;
        case "bs:BsTabletFill":
            return BsTabletFill;
        case "bs:BsTabletLandscapeFill":
            return BsTabletLandscapeFill;
        case "bs:BsTabletLandscape":
            return BsTabletLandscape;
        case "bs:BsTablet":
            return BsTablet;
        case "bs:BsTagFill":
            return BsTagFill;
        case "bs:BsTag":
            return BsTag;
        case "bs:BsTagsFill":
            return BsTagsFill;
        case "bs:BsTags":
            return BsTags;
        case "bs:BsTaxiFrontFill":
            return BsTaxiFrontFill;
        case "bs:BsTaxiFront":
            return BsTaxiFront;
        case "bs:BsTelegram":
            return BsTelegram;
        case "bs:BsTelephoneFill":
            return BsTelephoneFill;
        case "bs:BsTelephoneForwardFill":
            return BsTelephoneForwardFill;
        case "bs:BsTelephoneForward":
            return BsTelephoneForward;
        case "bs:BsTelephoneInboundFill":
            return BsTelephoneInboundFill;
        case "bs:BsTelephoneInbound":
            return BsTelephoneInbound;
        case "bs:BsTelephoneMinusFill":
            return BsTelephoneMinusFill;
        case "bs:BsTelephoneMinus":
            return BsTelephoneMinus;
        case "bs:BsTelephoneOutboundFill":
            return BsTelephoneOutboundFill;
        case "bs:BsTelephoneOutbound":
            return BsTelephoneOutbound;
        case "bs:BsTelephonePlusFill":
            return BsTelephonePlusFill;
        case "bs:BsTelephonePlus":
            return BsTelephonePlus;
        case "bs:BsTelephoneXFill":
            return BsTelephoneXFill;
        case "bs:BsTelephoneX":
            return BsTelephoneX;
        case "bs:BsTelephone":
            return BsTelephone;
        case "bs:BsTencentQq":
            return BsTencentQq;
        case "bs:BsTerminalDash":
            return BsTerminalDash;
        case "bs:BsTerminalFill":
            return BsTerminalFill;
        case "bs:BsTerminalPlus":
            return BsTerminalPlus;
        case "bs:BsTerminalSplit":
            return BsTerminalSplit;
        case "bs:BsTerminalX":
            return BsTerminalX;
        case "bs:BsTerminal":
            return BsTerminal;
        case "bs:BsTextCenter":
            return BsTextCenter;
        case "bs:BsTextIndentLeft":
            return BsTextIndentLeft;
        case "bs:BsTextIndentRight":
            return BsTextIndentRight;
        case "bs:BsTextLeft":
            return BsTextLeft;
        case "bs:BsTextParagraph":
            return BsTextParagraph;
        case "bs:BsTextRight":
            return BsTextRight;
        case "bs:BsTextWrap":
            return BsTextWrap;
        case "bs:BsTextareaResize":
            return BsTextareaResize;
        case "bs:BsTextareaT":
            return BsTextareaT;
        case "bs:BsTextarea":
            return BsTextarea;
        case "bs:BsThermometerHalf":
            return BsThermometerHalf;
        case "bs:BsThermometerHigh":
            return BsThermometerHigh;
        case "bs:BsThermometerLow":
            return BsThermometerLow;
        case "bs:BsThermometerSnow":
            return BsThermometerSnow;
        case "bs:BsThermometerSun":
            return BsThermometerSun;
        case "bs:BsThermometer":
            return BsThermometer;
        case "bs:BsThreadsFill":
            return BsThreadsFill;
        case "bs:BsThreads":
            return BsThreads;
        case "bs:BsThreeDotsVertical":
            return BsThreeDotsVertical;
        case "bs:BsThreeDots":
            return BsThreeDots;
        case "bs:BsThunderboltFill":
            return BsThunderboltFill;
        case "bs:BsThunderbolt":
            return BsThunderbolt;
        case "bs:BsTicketDetailedFill":
            return BsTicketDetailedFill;
        case "bs:BsTicketDetailed":
            return BsTicketDetailed;
        case "bs:BsTicketFill":
            return BsTicketFill;
        case "bs:BsTicketPerforatedFill":
            return BsTicketPerforatedFill;
        case "bs:BsTicketPerforated":
            return BsTicketPerforated;
        case "bs:BsTicket":
            return BsTicket;
        case "bs:BsTiktok":
            return BsTiktok;
        case "bs:BsToggleOff":
            return BsToggleOff;
        case "bs:BsToggleOn":
            return BsToggleOn;
        case "bs:BsToggle2Off":
            return BsToggle2Off;
        case "bs:BsToggle2On":
            return BsToggle2On;
        case "bs:BsToggles":
            return BsToggles;
        case "bs:BsToggles2":
            return BsToggles2;
        case "bs:BsTools":
            return BsTools;
        case "bs:BsTornado":
            return BsTornado;
        case "bs:BsTrainFreightFrontFill":
            return BsTrainFreightFrontFill;
        case "bs:BsTrainFreightFront":
            return BsTrainFreightFront;
        case "bs:BsTrainFrontFill":
            return BsTrainFrontFill;
        case "bs:BsTrainFront":
            return BsTrainFront;
        case "bs:BsTrainLightrailFrontFill":
            return BsTrainLightrailFrontFill;
        case "bs:BsTrainLightrailFront":
            return BsTrainLightrailFront;
        case "bs:BsTranslate":
            return BsTranslate;
        case "bs:BsTransparency":
            return BsTransparency;
        case "bs:BsTrashFill":
            return BsTrashFill;
        case "bs:BsTrash":
            return BsTrash;
        case "bs:BsTrash2Fill":
            return BsTrash2Fill;
        case "bs:BsTrash2":
            return BsTrash2;
        case "bs:BsTrash3Fill":
            return BsTrash3Fill;
        case "bs:BsTrash3":
            return BsTrash3;
        case "bs:BsTreeFill":
            return BsTreeFill;
        case "bs:BsTree":
            return BsTree;
        case "bs:BsTrello":
            return BsTrello;
        case "bs:BsTriangleFill":
            return BsTriangleFill;
        case "bs:BsTriangleHalf":
            return BsTriangleHalf;
        case "bs:BsTriangle":
            return BsTriangle;
        case "bs:BsTrophyFill":
            return BsTrophyFill;
        case "bs:BsTrophy":
            return BsTrophy;
        case "bs:BsTropicalStorm":
            return BsTropicalStorm;
        case "bs:BsTruckFlatbed":
            return BsTruckFlatbed;
        case "bs:BsTruckFrontFill":
            return BsTruckFrontFill;
        case "bs:BsTruckFront":
            return BsTruckFront;
        case "bs:BsTruck":
            return BsTruck;
        case "bs:BsTsunami":
            return BsTsunami;
        case "bs:BsTvFill":
            return BsTvFill;
        case "bs:BsTv":
            return BsTv;
        case "bs:BsTwitch":
            return BsTwitch;
        case "bs:BsTwitterX":
            return BsTwitterX;
        case "bs:BsTwitter":
            return BsTwitter;
        case "bs:BsTypeBold":
            return BsTypeBold;
        case "bs:BsTypeH1":
            return BsTypeH1;
        case "bs:BsTypeH2":
            return BsTypeH2;
        case "bs:BsTypeH3":
            return BsTypeH3;
        case "bs:BsTypeH4":
            return BsTypeH4;
        case "bs:BsTypeH5":
            return BsTypeH5;
        case "bs:BsTypeH6":
            return BsTypeH6;
        case "bs:BsTypeItalic":
            return BsTypeItalic;
        case "bs:BsTypeStrikethrough":
            return BsTypeStrikethrough;
        case "bs:BsTypeUnderline":
            return BsTypeUnderline;
        case "bs:BsType":
            return BsType;
        case "bs:BsUbuntu":
            return BsUbuntu;
        case "bs:BsUiChecksGrid":
            return BsUiChecksGrid;
        case "bs:BsUiChecks":
            return BsUiChecks;
        case "bs:BsUiRadiosGrid":
            return BsUiRadiosGrid;
        case "bs:BsUiRadios":
            return BsUiRadios;
        case "bs:BsUmbrellaFill":
            return BsUmbrellaFill;
        case "bs:BsUmbrella":
            return BsUmbrella;
        case "bs:BsUnindent":
            return BsUnindent;
        case "bs:BsUnion":
            return BsUnion;
        case "bs:BsUnity":
            return BsUnity;
        case "bs:BsUniversalAccessCircle":
            return BsUniversalAccessCircle;
        case "bs:BsUniversalAccess":
            return BsUniversalAccess;
        case "bs:BsUnlockFill":
            return BsUnlockFill;
        case "bs:BsUnlock":
            return BsUnlock;
        case "bs:BsUpcScan":
            return BsUpcScan;
        case "bs:BsUpc":
            return BsUpc;
        case "bs:BsUpload":
            return BsUpload;
        case "bs:BsUsbCFill":
            return BsUsbCFill;
        case "bs:BsUsbC":
            return BsUsbC;
        case "bs:BsUsbDriveFill":
            return BsUsbDriveFill;
        case "bs:BsUsbDrive":
            return BsUsbDrive;
        case "bs:BsUsbFill":
            return BsUsbFill;
        case "bs:BsUsbMicroFill":
            return BsUsbMicroFill;
        case "bs:BsUsbMicro":
            return BsUsbMicro;
        case "bs:BsUsbMiniFill":
            return BsUsbMiniFill;
        case "bs:BsUsbMini":
            return BsUsbMini;
        case "bs:BsUsbPlugFill":
            return BsUsbPlugFill;
        case "bs:BsUsbPlug":
            return BsUsbPlug;
        case "bs:BsUsbSymbol":
            return BsUsbSymbol;
        case "bs:BsUsb":
            return BsUsb;
        case "bs:BsValentine":
            return BsValentine;
        case "bs:BsValentine2":
            return BsValentine2;
        case "bs:BsVectorPen":
            return BsVectorPen;
        case "bs:BsViewList":
            return BsViewList;
        case "bs:BsViewStacked":
            return BsViewStacked;
        case "bs:BsVignette":
            return BsVignette;
        case "bs:BsVimeo":
            return BsVimeo;
        case "bs:BsVinylFill":
            return BsVinylFill;
        case "bs:BsVinyl":
            return BsVinyl;
        case "bs:BsVirus":
            return BsVirus;
        case "bs:BsVirus2":
            return BsVirus2;
        case "bs:BsVoicemail":
            return BsVoicemail;
        case "bs:BsVolumeDownFill":
            return BsVolumeDownFill;
        case "bs:BsVolumeDown":
            return BsVolumeDown;
        case "bs:BsVolumeMuteFill":
            return BsVolumeMuteFill;
        case "bs:BsVolumeMute":
            return BsVolumeMute;
        case "bs:BsVolumeOffFill":
            return BsVolumeOffFill;
        case "bs:BsVolumeOff":
            return BsVolumeOff;
        case "bs:BsVolumeUpFill":
            return BsVolumeUpFill;
        case "bs:BsVolumeUp":
            return BsVolumeUp;
        case "bs:BsVr":
            return BsVr;
        case "bs:BsWalletFill":
            return BsWalletFill;
        case "bs:BsWallet":
            return BsWallet;
        case "bs:BsWallet2":
            return BsWallet2;
        case "bs:BsWatch":
            return BsWatch;
        case "bs:BsWater":
            return BsWater;
        case "bs:BsWebcamFill":
            return BsWebcamFill;
        case "bs:BsWebcam":
            return BsWebcam;
        case "bs:BsWechat":
            return BsWechat;
        case "bs:BsWhatsapp":
            return BsWhatsapp;
        case "bs:BsWifi1":
            return BsWifi1;
        case "bs:BsWifi2":
            return BsWifi2;
        case "bs:BsWifiOff":
            return BsWifiOff;
        case "bs:BsWifi":
            return BsWifi;
        case "bs:BsWikipedia":
            return BsWikipedia;
        case "bs:BsWind":
            return BsWind;
        case "bs:BsWindowDash":
            return BsWindowDash;
        case "bs:BsWindowDesktop":
            return BsWindowDesktop;
        case "bs:BsWindowDock":
            return BsWindowDock;
        case "bs:BsWindowFullscreen":
            return BsWindowFullscreen;
        case "bs:BsWindowPlus":
            return BsWindowPlus;
        case "bs:BsWindowSidebar":
            return BsWindowSidebar;
        case "bs:BsWindowSplit":
            return BsWindowSplit;
        case "bs:BsWindowStack":
            return BsWindowStack;
        case "bs:BsWindowX":
            return BsWindowX;
        case "bs:BsWindow":
            return BsWindow;
        case "bs:BsWindows":
            return BsWindows;
        case "bs:BsWordpress":
            return BsWordpress;
        case "bs:BsWrenchAdjustableCircleFill":
            return BsWrenchAdjustableCircleFill;
        case "bs:BsWrenchAdjustableCircle":
            return BsWrenchAdjustableCircle;
        case "bs:BsWrenchAdjustable":
            return BsWrenchAdjustable;
        case "bs:BsWrench":
            return BsWrench;
        case "bs:BsXCircleFill":
            return BsXCircleFill;
        case "bs:BsXCircle":
            return BsXCircle;
        case "bs:BsXDiamondFill":
            return BsXDiamondFill;
        case "bs:BsXDiamond":
            return BsXDiamond;
        case "bs:BsXLg":
            return BsXLg;
        case "bs:BsXOctagonFill":
            return BsXOctagonFill;
        case "bs:BsXOctagon":
            return BsXOctagon;
        case "bs:BsXSquareFill":
            return BsXSquareFill;
        case "bs:BsXSquare":
            return BsXSquare;
        case "bs:BsX":
            return BsX;
        case "bs:BsXbox":
            return BsXbox;
        case "bs:BsYelp":
            return BsYelp;
        case "bs:BsYinYang":
            return BsYinYang;
        case "bs:BsYoutube":
            return BsYoutube;
        case "bs:BsZoomIn":
            return BsZoomIn;
        case "bs:BsZoomOut":
            return BsZoomOut;
    }
}
