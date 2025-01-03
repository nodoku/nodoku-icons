import type {IconType} from "react-icons";

import {
    LuOrigami,
    LuPackage2,
    LuPackageCheck,
    LuPackageMinus,
    LuPackageOpen,
    LuPackagePlus,
    LuPackageSearch,
    LuPackageX,
    LuPackage,
    LuPaintBucket,
    LuPaintRoller,
    LuPaintbrushVertical,
    LuPaintbrush,
    LuPalette,
    LuPanelBottomClose,
    LuPanelBottomDashed,
    LuPanelBottomOpen,
    LuPanelBottom,
    LuPanelLeftClose,
    LuPanelLeftDashed,
    LuPanelLeftOpen,
    LuPanelLeft,
    LuPanelRightClose,
    LuPanelRightDashed,
    LuPanelRightOpen,
    LuPanelRight,
    LuPanelTopClose,
    LuPanelTopDashed,
    LuPanelTopOpen,
    LuPanelTop,
    LuPanelsLeftBottom,
    LuPanelsRightBottom,
    LuPanelsTopLeft,
    LuPaperclip,
    LuParentheses,
    LuParkingMeter,
    LuPartyPopper,
    LuPause,
    LuPawPrint,
    LuPcCase,
    LuPenLine,
    LuPenOff,
    LuPenTool,
    LuPen,
    LuPencilLine,
    LuPencilOff,
    LuPencilRuler,
    LuPencil,
    LuPentagon,
    LuPercent,
    LuPersonStanding,
    LuPhilippinePeso,
    LuPhoneCall,
    LuPhoneForwarded,
    LuPhoneIncoming,
    LuPhoneMissed,
    LuPhoneOff,
    LuPhoneOutgoing,
    LuPhone,
    LuPi,
    LuPiano,
    LuPickaxe,
    LuPictureInPicture2,
    LuPictureInPicture,
    LuPiggyBank,
    LuPilcrowLeft,
    LuPilcrowRight,
    LuPilcrow,
    LuPillBottle,
    LuPill,
    LuPinOff,
    LuPin,
    LuPipette,
    LuPizza,
    LuPlaneLanding,
    LuPlaneTakeoff,
    LuPlane,
    LuPlay,
    LuPlug2,
    LuPlugZap,
    LuPlug,
    LuPlus,
    LuPocketKnife,
    LuPocket,
    LuPodcast,
    LuPointerOff,
    LuPointer,
    LuPopcorn,
    LuPopsicle,
    LuPoundSterling,
    LuPowerOff,
    LuPower,
    LuPresentation,
    LuPrinterCheck,
    LuPrinter,
    LuProjector,
    LuProportions,
    LuPuzzle,
    LuPyramid,
    LuQrCode,
    LuQuote,
    LuRabbit,
    LuRadar,
    LuRadiation,
    LuRadical,
    LuRadioReceiver,
    LuRadioTower,
    LuRadio,
    LuRadius,
    LuRailSymbol,
    LuRainbow,
    LuRat,
    LuRatio,
    LuReceiptCent,
    LuReceiptEuro,
    LuReceiptIndianRupee,
    LuReceiptJapaneseYen,
    LuReceiptPoundSterling,
    LuReceiptRussianRuble,
    LuReceiptSwissFranc,
    LuReceiptText,
    LuReceipt,
    LuRectangleEllipsis,
    LuRectangleHorizontal,
    LuRectangleVertical,
    LuRecycle,
    LuRedo2,
    LuRedoDot,
    LuRedo,
    LuRefreshCcwDot,
    LuRefreshCcw,
    LuRefreshCwOff,
    LuRefreshCw,
    LuRefrigerator,
    LuRegex,
    LuRemoveFormatting,
    LuRepeat1,
    LuRepeat2,
    LuRepeat,
    LuReplaceAll,
    LuReplace,
    LuReplyAll,
    LuReply,
    LuRewind,
    LuRibbon,
    LuRocket,
    LuRockingChair,
    LuRollerCoaster,
    LuRotate3D,
    LuRotateCcwSquare,
    LuRotateCcw,
    LuRotateCwSquare,
    LuRotateCw,
    LuRouteOff,
    LuRoute,
    LuRouter,
    LuRows2,
    LuRows3,
    LuRows4,
    LuRss,
    LuRuler,
    LuRussianRuble,
    LuSailboat,
    LuSalad,
    LuSandwich,
    LuSatelliteDish,
    LuSatellite,
    LuSaveAll,
    LuSaveOff,
    LuSave,
    LuScale3D,
    LuScale,
    LuScaling,
    LuScanBarcode,
    LuScanEye,
    LuScanFace,
    LuScanLine,
    LuScanQrCode,
    LuScanSearch,
    LuScanText,
    LuScan,
    LuSchool,
    LuScissorsLineDashed,
    LuScissors,
    LuScreenShareOff,
    LuScreenShare,
    LuScrollText,
    LuScroll,
    LuSearchCheck,
    LuSearchCode,
    LuSearchSlash,
    LuSearchX,
    LuSearch,
    LuSection,
    LuSendHorizontal,
    LuSendToBack,
    LuSend,
    LuSeparatorHorizontal,
    LuSeparatorVertical,
    LuServerCog,
    LuServerCrash,
    LuServerOff,
    LuServer,
    LuSettings2,
    LuSettings,
    LuShapes,
    LuShare2,
    LuShare,
    LuSheet,
    LuShell,
    LuShieldAlert,
    LuShieldBan,
    LuShieldCheck,
    LuShieldEllipsis,
    LuShieldHalf,
    LuShieldMinus,
    LuShieldOff,
    LuShieldPlus,
    LuShieldQuestion,
    LuShieldX,
    LuShield,
    LuShipWheel,
    LuShip,
    LuShirt,
    LuShoppingBag,
    LuShoppingBasket,
    LuShoppingCart,
    LuShovel,
    LuShowerHead,
    LuShrink,
    LuShrub,
    LuShuffle,
    LuSigma,
    LuSignalHigh,
    LuSignalLow,
    LuSignalMedium,
    LuSignalZero,
    LuSignal,
    LuSignature,
    LuSignpostBig,
    LuSignpost,
    LuSiren,
    LuSkipBack,
    LuSkipForward,
    LuSkull,
    LuSlack,
    LuSlash,
    LuSlice,
    LuSlidersHorizontal,
    LuSlidersVertical,
    LuSmartphoneCharging,
    LuSmartphoneNfc,
    LuSmartphone,
    LuSmilePlus,
    LuSmile,
    LuSnail,
    LuSnowflake,
    LuSofa,
    LuSoup,
    LuSpace,
    LuSpade,
    LuSparkle,
    LuSparkles,
    LuSpeaker,
    LuSpeech,
    LuSpellCheck2,
    LuSpellCheck,
    LuSpline,
    LuSplit,
    LuSprayCan,
    LuSprout,
    LuSquareActivity,
    LuSquareArrowDownLeft,
    LuSquareArrowDownRight,
    LuSquareArrowDown,
    LuSquareArrowLeft,
    LuSquareArrowOutDownLeft,
    LuSquareArrowOutDownRight,
    LuSquareArrowOutUpLeft,
    LuSquareArrowOutUpRight,
    LuSquareArrowRight,
    LuSquareArrowUpLeft,
    LuSquareArrowUpRight,
    LuSquareArrowUp,
    LuSquareAsterisk,
    LuSquareBottomDashedScissors,
    LuSquareChartGantt,
    LuSquareCheckBig,
    LuSquareCheck,
    LuSquareChevronDown,
    LuSquareChevronLeft,
    LuSquareChevronRight,
    LuSquareChevronUp,
    LuSquareCode,
    LuSquareDashedBottomCode,
    LuSquareDashedBottom,
    LuSquareDashedKanban,
    LuSquareDashedMousePointer,
    LuSquareDashed,
    LuSquareDivide,
    LuSquareDot,
    LuSquareEqual,
    LuSquareFunction,
    LuSquareKanban,
    LuSquareLibrary,
    LuSquareM,
    LuSquareMenu,
    LuSquareMinus,
    LuSquareMousePointer,
    LuSquareParkingOff,
    LuSquareParking,
    LuSquarePen,
    LuSquarePercent,
    LuSquarePi,
    LuSquarePilcrow,
    LuSquarePlay,
    LuSquarePlus,
    LuSquarePower,
    LuSquareRadical,
    LuSquareScissors,
    LuSquareSigma,
    LuSquareSlash,
    LuSquareSplitHorizontal,
    LuSquareSplitVertical,
    LuSquareSquare,
    LuSquareStack,
    LuSquareTerminal,
    LuSquareUserRound,
    LuSquareUser,
    LuSquareX,
    LuSquare,
    LuSquircle,
    LuSquirrel,
    LuStamp,
    LuStarHalf,
    LuStarOff,
    LuStar,
    LuStepBack,
    LuStepForward,
    LuStethoscope,
    LuSticker,
    LuStickyNote,
    LuStore,
    LuStretchHorizontal,
    LuStretchVertical,
    LuStrikethrough,
    LuSubscript,
    LuSunDim,
    LuSunMedium,
    LuSunMoon,
    LuSunSnow,
    LuSun,
    LuSunrise,
    LuSunset,
    LuSuperscript,
    LuSwatchBook,
    LuSwissFranc,
    LuSwitchCamera,
    LuSword,
    LuSwords,
    LuSyringe,
    LuTable2,
    LuTableCellsMerge,
    LuTableCellsSplit,
    LuTableColumnsSplit,
    LuTableOfContents,
    LuTableProperties,
    LuTableRowsSplit,
    LuTable,
    LuTabletSmartphone,
    LuTablet,
    LuTablets,
    LuTag,
    LuTags,
    LuTally1,
    LuTally2,
    LuTally3,
    LuTally4,
    LuTally5,
    LuTangent,
    LuTarget,
    LuTelescope,
    LuTentTree,
    LuTent,
    LuTerminal,
    LuTestTubeDiagonal,
    LuTestTube,
    LuTestTubes,
    LuTextCursorInput,
    LuTextCursor,
    LuTextQuote,
    LuTextSearch,
    LuTextSelect,
    LuText,
    LuTheater,
    LuThermometerSnowflake,
    LuThermometerSun,
    LuThermometer,
    LuThumbsDown,
    LuThumbsUp,
    LuTicketCheck,
    LuTicketMinus,
    LuTicketPercent,
    LuTicketPlus,
    LuTicketSlash,
    LuTicketX,
    LuTicket,
    LuTicketsPlane,
    LuTickets,
    LuTimerOff,
    LuTimerReset,
    LuTimer,
    LuToggleLeft,
    LuToggleRight,
    LuToilet,
    LuTornado,
    LuTorus,
    LuTouchpadOff,
    LuTouchpad,
    LuTowerControl,
    LuToyBrick,
    LuTractor,
    LuTrafficCone,
    LuTrainFrontTunnel,
    LuTrainFront,
    LuTrainTrack,
    LuTramFront,
    LuTrash2,
    LuTrash,
    LuTreeDeciduous,
    LuTreePalm,
    LuTreePine,
    LuTrees,
    LuTrello,
    LuTrendingDown,
    LuTrendingUpDown,
    LuTrendingUp,
    LuTriangleAlert,
    LuTriangleRight,
    LuTriangle,
    LuTrophy,
    LuTruck,
    LuTurtle,
    LuTvMinimalPlay,
    LuTvMinimal,
    LuTv,
    LuTwitch,
    LuTwitter,
    LuTypeOutline,
    LuType,
    LuUmbrellaOff,
    LuUmbrella,
    LuUnderline,
    LuUndo2,
    LuUndoDot,
    LuUndo,
    LuUnfoldHorizontal,
    LuUnfoldVertical,
    LuUngroup,
    LuUniversity,
    LuUnlink2,
    LuUnlink,
    LuUnplug,
    LuUpload,
    LuUsb,
    LuUserCheck,
    LuUserCog,
    LuUserMinus,
    LuUserPen,
    LuUserPlus,
    LuUserRoundCheck,
    LuUserRoundCog,
    LuUserRoundMinus,
    LuUserRoundPen,
    LuUserRoundPlus,
    LuUserRoundSearch,
    LuUserRoundX,
    LuUserRound,
    LuUserSearch,
    LuUserX,
    LuUser,
    LuUsersRound,
    LuUsers,
    LuUtensilsCrossed,
    LuUtensils,
    LuUtilityPole,
    LuVariable,
    LuVault,
    LuVegan,
    LuVenetianMask,
    LuVibrateOff,
    LuVibrate,
    LuVideoOff,
    LuVideo,
    LuVideotape,
    LuView,
    LuVoicemail,
    LuVolleyball,
    LuVolume1,
    LuVolume2,
    LuVolumeOff,
    LuVolumeX,
    LuVolume,
    LuVote,
    LuWalletCards,
    LuWalletMinimal,
    LuWallet,
    LuWallpaper,
    LuWandSparkles,
    LuWand,
    LuWarehouse,
    LuWashingMachine,
    LuWatch,
    LuWaves,
    LuWaypoints,
    LuWebcam,
    LuWebhookOff,
    LuWebhook,
    LuWeight,
    LuWheatOff,
    LuWheat,
    LuWholeWord,
    LuWifiHigh,
    LuWifiLow,
    LuWifiOff,
    LuWifiZero,
    LuWifi,
    LuWindArrowDown,
    LuWind,
    LuWineOff,
    LuWine,
    LuWorkflow,
    LuWorm,
    LuWrapText,
    LuWrench,
    LuX,
    LuYoutube,
    LuZapOff,
    LuZap,
    LuZoomIn,
    LuZoomOut,
} from "react-icons/lu"

export function nameToReactIcon_lu_1(iconName: string): IconType | undefined {

    switch(iconName) {
        case "lu:LuOrigami":
            return LuOrigami;
        case "lu:LuPackage2":
            return LuPackage2;
        case "lu:LuPackageCheck":
            return LuPackageCheck;
        case "lu:LuPackageMinus":
            return LuPackageMinus;
        case "lu:LuPackageOpen":
            return LuPackageOpen;
        case "lu:LuPackagePlus":
            return LuPackagePlus;
        case "lu:LuPackageSearch":
            return LuPackageSearch;
        case "lu:LuPackageX":
            return LuPackageX;
        case "lu:LuPackage":
            return LuPackage;
        case "lu:LuPaintBucket":
            return LuPaintBucket;
        case "lu:LuPaintRoller":
            return LuPaintRoller;
        case "lu:LuPaintbrushVertical":
            return LuPaintbrushVertical;
        case "lu:LuPaintbrush":
            return LuPaintbrush;
        case "lu:LuPalette":
            return LuPalette;
        case "lu:LuPanelBottomClose":
            return LuPanelBottomClose;
        case "lu:LuPanelBottomDashed":
            return LuPanelBottomDashed;
        case "lu:LuPanelBottomOpen":
            return LuPanelBottomOpen;
        case "lu:LuPanelBottom":
            return LuPanelBottom;
        case "lu:LuPanelLeftClose":
            return LuPanelLeftClose;
        case "lu:LuPanelLeftDashed":
            return LuPanelLeftDashed;
        case "lu:LuPanelLeftOpen":
            return LuPanelLeftOpen;
        case "lu:LuPanelLeft":
            return LuPanelLeft;
        case "lu:LuPanelRightClose":
            return LuPanelRightClose;
        case "lu:LuPanelRightDashed":
            return LuPanelRightDashed;
        case "lu:LuPanelRightOpen":
            return LuPanelRightOpen;
        case "lu:LuPanelRight":
            return LuPanelRight;
        case "lu:LuPanelTopClose":
            return LuPanelTopClose;
        case "lu:LuPanelTopDashed":
            return LuPanelTopDashed;
        case "lu:LuPanelTopOpen":
            return LuPanelTopOpen;
        case "lu:LuPanelTop":
            return LuPanelTop;
        case "lu:LuPanelsLeftBottom":
            return LuPanelsLeftBottom;
        case "lu:LuPanelsRightBottom":
            return LuPanelsRightBottom;
        case "lu:LuPanelsTopLeft":
            return LuPanelsTopLeft;
        case "lu:LuPaperclip":
            return LuPaperclip;
        case "lu:LuParentheses":
            return LuParentheses;
        case "lu:LuParkingMeter":
            return LuParkingMeter;
        case "lu:LuPartyPopper":
            return LuPartyPopper;
        case "lu:LuPause":
            return LuPause;
        case "lu:LuPawPrint":
            return LuPawPrint;
        case "lu:LuPcCase":
            return LuPcCase;
        case "lu:LuPenLine":
            return LuPenLine;
        case "lu:LuPenOff":
            return LuPenOff;
        case "lu:LuPenTool":
            return LuPenTool;
        case "lu:LuPen":
            return LuPen;
        case "lu:LuPencilLine":
            return LuPencilLine;
        case "lu:LuPencilOff":
            return LuPencilOff;
        case "lu:LuPencilRuler":
            return LuPencilRuler;
        case "lu:LuPencil":
            return LuPencil;
        case "lu:LuPentagon":
            return LuPentagon;
        case "lu:LuPercent":
            return LuPercent;
        case "lu:LuPersonStanding":
            return LuPersonStanding;
        case "lu:LuPhilippinePeso":
            return LuPhilippinePeso;
        case "lu:LuPhoneCall":
            return LuPhoneCall;
        case "lu:LuPhoneForwarded":
            return LuPhoneForwarded;
        case "lu:LuPhoneIncoming":
            return LuPhoneIncoming;
        case "lu:LuPhoneMissed":
            return LuPhoneMissed;
        case "lu:LuPhoneOff":
            return LuPhoneOff;
        case "lu:LuPhoneOutgoing":
            return LuPhoneOutgoing;
        case "lu:LuPhone":
            return LuPhone;
        case "lu:LuPi":
            return LuPi;
        case "lu:LuPiano":
            return LuPiano;
        case "lu:LuPickaxe":
            return LuPickaxe;
        case "lu:LuPictureInPicture2":
            return LuPictureInPicture2;
        case "lu:LuPictureInPicture":
            return LuPictureInPicture;
        case "lu:LuPiggyBank":
            return LuPiggyBank;
        case "lu:LuPilcrowLeft":
            return LuPilcrowLeft;
        case "lu:LuPilcrowRight":
            return LuPilcrowRight;
        case "lu:LuPilcrow":
            return LuPilcrow;
        case "lu:LuPillBottle":
            return LuPillBottle;
        case "lu:LuPill":
            return LuPill;
        case "lu:LuPinOff":
            return LuPinOff;
        case "lu:LuPin":
            return LuPin;
        case "lu:LuPipette":
            return LuPipette;
        case "lu:LuPizza":
            return LuPizza;
        case "lu:LuPlaneLanding":
            return LuPlaneLanding;
        case "lu:LuPlaneTakeoff":
            return LuPlaneTakeoff;
        case "lu:LuPlane":
            return LuPlane;
        case "lu:LuPlay":
            return LuPlay;
        case "lu:LuPlug2":
            return LuPlug2;
        case "lu:LuPlugZap":
            return LuPlugZap;
        case "lu:LuPlug":
            return LuPlug;
        case "lu:LuPlus":
            return LuPlus;
        case "lu:LuPocketKnife":
            return LuPocketKnife;
        case "lu:LuPocket":
            return LuPocket;
        case "lu:LuPodcast":
            return LuPodcast;
        case "lu:LuPointerOff":
            return LuPointerOff;
        case "lu:LuPointer":
            return LuPointer;
        case "lu:LuPopcorn":
            return LuPopcorn;
        case "lu:LuPopsicle":
            return LuPopsicle;
        case "lu:LuPoundSterling":
            return LuPoundSterling;
        case "lu:LuPowerOff":
            return LuPowerOff;
        case "lu:LuPower":
            return LuPower;
        case "lu:LuPresentation":
            return LuPresentation;
        case "lu:LuPrinterCheck":
            return LuPrinterCheck;
        case "lu:LuPrinter":
            return LuPrinter;
        case "lu:LuProjector":
            return LuProjector;
        case "lu:LuProportions":
            return LuProportions;
        case "lu:LuPuzzle":
            return LuPuzzle;
        case "lu:LuPyramid":
            return LuPyramid;
        case "lu:LuQrCode":
            return LuQrCode;
        case "lu:LuQuote":
            return LuQuote;
        case "lu:LuRabbit":
            return LuRabbit;
        case "lu:LuRadar":
            return LuRadar;
        case "lu:LuRadiation":
            return LuRadiation;
        case "lu:LuRadical":
            return LuRadical;
        case "lu:LuRadioReceiver":
            return LuRadioReceiver;
        case "lu:LuRadioTower":
            return LuRadioTower;
        case "lu:LuRadio":
            return LuRadio;
        case "lu:LuRadius":
            return LuRadius;
        case "lu:LuRailSymbol":
            return LuRailSymbol;
        case "lu:LuRainbow":
            return LuRainbow;
        case "lu:LuRat":
            return LuRat;
        case "lu:LuRatio":
            return LuRatio;
        case "lu:LuReceiptCent":
            return LuReceiptCent;
        case "lu:LuReceiptEuro":
            return LuReceiptEuro;
        case "lu:LuReceiptIndianRupee":
            return LuReceiptIndianRupee;
        case "lu:LuReceiptJapaneseYen":
            return LuReceiptJapaneseYen;
        case "lu:LuReceiptPoundSterling":
            return LuReceiptPoundSterling;
        case "lu:LuReceiptRussianRuble":
            return LuReceiptRussianRuble;
        case "lu:LuReceiptSwissFranc":
            return LuReceiptSwissFranc;
        case "lu:LuReceiptText":
            return LuReceiptText;
        case "lu:LuReceipt":
            return LuReceipt;
        case "lu:LuRectangleEllipsis":
            return LuRectangleEllipsis;
        case "lu:LuRectangleHorizontal":
            return LuRectangleHorizontal;
        case "lu:LuRectangleVertical":
            return LuRectangleVertical;
        case "lu:LuRecycle":
            return LuRecycle;
        case "lu:LuRedo2":
            return LuRedo2;
        case "lu:LuRedoDot":
            return LuRedoDot;
        case "lu:LuRedo":
            return LuRedo;
        case "lu:LuRefreshCcwDot":
            return LuRefreshCcwDot;
        case "lu:LuRefreshCcw":
            return LuRefreshCcw;
        case "lu:LuRefreshCwOff":
            return LuRefreshCwOff;
        case "lu:LuRefreshCw":
            return LuRefreshCw;
        case "lu:LuRefrigerator":
            return LuRefrigerator;
        case "lu:LuRegex":
            return LuRegex;
        case "lu:LuRemoveFormatting":
            return LuRemoveFormatting;
        case "lu:LuRepeat1":
            return LuRepeat1;
        case "lu:LuRepeat2":
            return LuRepeat2;
        case "lu:LuRepeat":
            return LuRepeat;
        case "lu:LuReplaceAll":
            return LuReplaceAll;
        case "lu:LuReplace":
            return LuReplace;
        case "lu:LuReplyAll":
            return LuReplyAll;
        case "lu:LuReply":
            return LuReply;
        case "lu:LuRewind":
            return LuRewind;
        case "lu:LuRibbon":
            return LuRibbon;
        case "lu:LuRocket":
            return LuRocket;
        case "lu:LuRockingChair":
            return LuRockingChair;
        case "lu:LuRollerCoaster":
            return LuRollerCoaster;
        case "lu:LuRotate3D":
            return LuRotate3D;
        case "lu:LuRotateCcwSquare":
            return LuRotateCcwSquare;
        case "lu:LuRotateCcw":
            return LuRotateCcw;
        case "lu:LuRotateCwSquare":
            return LuRotateCwSquare;
        case "lu:LuRotateCw":
            return LuRotateCw;
        case "lu:LuRouteOff":
            return LuRouteOff;
        case "lu:LuRoute":
            return LuRoute;
        case "lu:LuRouter":
            return LuRouter;
        case "lu:LuRows2":
            return LuRows2;
        case "lu:LuRows3":
            return LuRows3;
        case "lu:LuRows4":
            return LuRows4;
        case "lu:LuRss":
            return LuRss;
        case "lu:LuRuler":
            return LuRuler;
        case "lu:LuRussianRuble":
            return LuRussianRuble;
        case "lu:LuSailboat":
            return LuSailboat;
        case "lu:LuSalad":
            return LuSalad;
        case "lu:LuSandwich":
            return LuSandwich;
        case "lu:LuSatelliteDish":
            return LuSatelliteDish;
        case "lu:LuSatellite":
            return LuSatellite;
        case "lu:LuSaveAll":
            return LuSaveAll;
        case "lu:LuSaveOff":
            return LuSaveOff;
        case "lu:LuSave":
            return LuSave;
        case "lu:LuScale3D":
            return LuScale3D;
        case "lu:LuScale":
            return LuScale;
        case "lu:LuScaling":
            return LuScaling;
        case "lu:LuScanBarcode":
            return LuScanBarcode;
        case "lu:LuScanEye":
            return LuScanEye;
        case "lu:LuScanFace":
            return LuScanFace;
        case "lu:LuScanLine":
            return LuScanLine;
        case "lu:LuScanQrCode":
            return LuScanQrCode;
        case "lu:LuScanSearch":
            return LuScanSearch;
        case "lu:LuScanText":
            return LuScanText;
        case "lu:LuScan":
            return LuScan;
        case "lu:LuSchool":
            return LuSchool;
        case "lu:LuScissorsLineDashed":
            return LuScissorsLineDashed;
        case "lu:LuScissors":
            return LuScissors;
        case "lu:LuScreenShareOff":
            return LuScreenShareOff;
        case "lu:LuScreenShare":
            return LuScreenShare;
        case "lu:LuScrollText":
            return LuScrollText;
        case "lu:LuScroll":
            return LuScroll;
        case "lu:LuSearchCheck":
            return LuSearchCheck;
        case "lu:LuSearchCode":
            return LuSearchCode;
        case "lu:LuSearchSlash":
            return LuSearchSlash;
        case "lu:LuSearchX":
            return LuSearchX;
        case "lu:LuSearch":
            return LuSearch;
        case "lu:LuSection":
            return LuSection;
        case "lu:LuSendHorizontal":
            return LuSendHorizontal;
        case "lu:LuSendToBack":
            return LuSendToBack;
        case "lu:LuSend":
            return LuSend;
        case "lu:LuSeparatorHorizontal":
            return LuSeparatorHorizontal;
        case "lu:LuSeparatorVertical":
            return LuSeparatorVertical;
        case "lu:LuServerCog":
            return LuServerCog;
        case "lu:LuServerCrash":
            return LuServerCrash;
        case "lu:LuServerOff":
            return LuServerOff;
        case "lu:LuServer":
            return LuServer;
        case "lu:LuSettings2":
            return LuSettings2;
        case "lu:LuSettings":
            return LuSettings;
        case "lu:LuShapes":
            return LuShapes;
        case "lu:LuShare2":
            return LuShare2;
        case "lu:LuShare":
            return LuShare;
        case "lu:LuSheet":
            return LuSheet;
        case "lu:LuShell":
            return LuShell;
        case "lu:LuShieldAlert":
            return LuShieldAlert;
        case "lu:LuShieldBan":
            return LuShieldBan;
        case "lu:LuShieldCheck":
            return LuShieldCheck;
        case "lu:LuShieldEllipsis":
            return LuShieldEllipsis;
        case "lu:LuShieldHalf":
            return LuShieldHalf;
        case "lu:LuShieldMinus":
            return LuShieldMinus;
        case "lu:LuShieldOff":
            return LuShieldOff;
        case "lu:LuShieldPlus":
            return LuShieldPlus;
        case "lu:LuShieldQuestion":
            return LuShieldQuestion;
        case "lu:LuShieldX":
            return LuShieldX;
        case "lu:LuShield":
            return LuShield;
        case "lu:LuShipWheel":
            return LuShipWheel;
        case "lu:LuShip":
            return LuShip;
        case "lu:LuShirt":
            return LuShirt;
        case "lu:LuShoppingBag":
            return LuShoppingBag;
        case "lu:LuShoppingBasket":
            return LuShoppingBasket;
        case "lu:LuShoppingCart":
            return LuShoppingCart;
        case "lu:LuShovel":
            return LuShovel;
        case "lu:LuShowerHead":
            return LuShowerHead;
        case "lu:LuShrink":
            return LuShrink;
        case "lu:LuShrub":
            return LuShrub;
        case "lu:LuShuffle":
            return LuShuffle;
        case "lu:LuSigma":
            return LuSigma;
        case "lu:LuSignalHigh":
            return LuSignalHigh;
        case "lu:LuSignalLow":
            return LuSignalLow;
        case "lu:LuSignalMedium":
            return LuSignalMedium;
        case "lu:LuSignalZero":
            return LuSignalZero;
        case "lu:LuSignal":
            return LuSignal;
        case "lu:LuSignature":
            return LuSignature;
        case "lu:LuSignpostBig":
            return LuSignpostBig;
        case "lu:LuSignpost":
            return LuSignpost;
        case "lu:LuSiren":
            return LuSiren;
        case "lu:LuSkipBack":
            return LuSkipBack;
        case "lu:LuSkipForward":
            return LuSkipForward;
        case "lu:LuSkull":
            return LuSkull;
        case "lu:LuSlack":
            return LuSlack;
        case "lu:LuSlash":
            return LuSlash;
        case "lu:LuSlice":
            return LuSlice;
        case "lu:LuSlidersHorizontal":
            return LuSlidersHorizontal;
        case "lu:LuSlidersVertical":
            return LuSlidersVertical;
        case "lu:LuSmartphoneCharging":
            return LuSmartphoneCharging;
        case "lu:LuSmartphoneNfc":
            return LuSmartphoneNfc;
        case "lu:LuSmartphone":
            return LuSmartphone;
        case "lu:LuSmilePlus":
            return LuSmilePlus;
        case "lu:LuSmile":
            return LuSmile;
        case "lu:LuSnail":
            return LuSnail;
        case "lu:LuSnowflake":
            return LuSnowflake;
        case "lu:LuSofa":
            return LuSofa;
        case "lu:LuSoup":
            return LuSoup;
        case "lu:LuSpace":
            return LuSpace;
        case "lu:LuSpade":
            return LuSpade;
        case "lu:LuSparkle":
            return LuSparkle;
        case "lu:LuSparkles":
            return LuSparkles;
        case "lu:LuSpeaker":
            return LuSpeaker;
        case "lu:LuSpeech":
            return LuSpeech;
        case "lu:LuSpellCheck2":
            return LuSpellCheck2;
        case "lu:LuSpellCheck":
            return LuSpellCheck;
        case "lu:LuSpline":
            return LuSpline;
        case "lu:LuSplit":
            return LuSplit;
        case "lu:LuSprayCan":
            return LuSprayCan;
        case "lu:LuSprout":
            return LuSprout;
        case "lu:LuSquareActivity":
            return LuSquareActivity;
        case "lu:LuSquareArrowDownLeft":
            return LuSquareArrowDownLeft;
        case "lu:LuSquareArrowDownRight":
            return LuSquareArrowDownRight;
        case "lu:LuSquareArrowDown":
            return LuSquareArrowDown;
        case "lu:LuSquareArrowLeft":
            return LuSquareArrowLeft;
        case "lu:LuSquareArrowOutDownLeft":
            return LuSquareArrowOutDownLeft;
        case "lu:LuSquareArrowOutDownRight":
            return LuSquareArrowOutDownRight;
        case "lu:LuSquareArrowOutUpLeft":
            return LuSquareArrowOutUpLeft;
        case "lu:LuSquareArrowOutUpRight":
            return LuSquareArrowOutUpRight;
        case "lu:LuSquareArrowRight":
            return LuSquareArrowRight;
        case "lu:LuSquareArrowUpLeft":
            return LuSquareArrowUpLeft;
        case "lu:LuSquareArrowUpRight":
            return LuSquareArrowUpRight;
        case "lu:LuSquareArrowUp":
            return LuSquareArrowUp;
        case "lu:LuSquareAsterisk":
            return LuSquareAsterisk;
        case "lu:LuSquareBottomDashedScissors":
            return LuSquareBottomDashedScissors;
        case "lu:LuSquareChartGantt":
            return LuSquareChartGantt;
        case "lu:LuSquareCheckBig":
            return LuSquareCheckBig;
        case "lu:LuSquareCheck":
            return LuSquareCheck;
        case "lu:LuSquareChevronDown":
            return LuSquareChevronDown;
        case "lu:LuSquareChevronLeft":
            return LuSquareChevronLeft;
        case "lu:LuSquareChevronRight":
            return LuSquareChevronRight;
        case "lu:LuSquareChevronUp":
            return LuSquareChevronUp;
        case "lu:LuSquareCode":
            return LuSquareCode;
        case "lu:LuSquareDashedBottomCode":
            return LuSquareDashedBottomCode;
        case "lu:LuSquareDashedBottom":
            return LuSquareDashedBottom;
        case "lu:LuSquareDashedKanban":
            return LuSquareDashedKanban;
        case "lu:LuSquareDashedMousePointer":
            return LuSquareDashedMousePointer;
        case "lu:LuSquareDashed":
            return LuSquareDashed;
        case "lu:LuSquareDivide":
            return LuSquareDivide;
        case "lu:LuSquareDot":
            return LuSquareDot;
        case "lu:LuSquareEqual":
            return LuSquareEqual;
        case "lu:LuSquareFunction":
            return LuSquareFunction;
        case "lu:LuSquareKanban":
            return LuSquareKanban;
        case "lu:LuSquareLibrary":
            return LuSquareLibrary;
        case "lu:LuSquareM":
            return LuSquareM;
        case "lu:LuSquareMenu":
            return LuSquareMenu;
        case "lu:LuSquareMinus":
            return LuSquareMinus;
        case "lu:LuSquareMousePointer":
            return LuSquareMousePointer;
        case "lu:LuSquareParkingOff":
            return LuSquareParkingOff;
        case "lu:LuSquareParking":
            return LuSquareParking;
        case "lu:LuSquarePen":
            return LuSquarePen;
        case "lu:LuSquarePercent":
            return LuSquarePercent;
        case "lu:LuSquarePi":
            return LuSquarePi;
        case "lu:LuSquarePilcrow":
            return LuSquarePilcrow;
        case "lu:LuSquarePlay":
            return LuSquarePlay;
        case "lu:LuSquarePlus":
            return LuSquarePlus;
        case "lu:LuSquarePower":
            return LuSquarePower;
        case "lu:LuSquareRadical":
            return LuSquareRadical;
        case "lu:LuSquareScissors":
            return LuSquareScissors;
        case "lu:LuSquareSigma":
            return LuSquareSigma;
        case "lu:LuSquareSlash":
            return LuSquareSlash;
        case "lu:LuSquareSplitHorizontal":
            return LuSquareSplitHorizontal;
        case "lu:LuSquareSplitVertical":
            return LuSquareSplitVertical;
        case "lu:LuSquareSquare":
            return LuSquareSquare;
        case "lu:LuSquareStack":
            return LuSquareStack;
        case "lu:LuSquareTerminal":
            return LuSquareTerminal;
        case "lu:LuSquareUserRound":
            return LuSquareUserRound;
        case "lu:LuSquareUser":
            return LuSquareUser;
        case "lu:LuSquareX":
            return LuSquareX;
        case "lu:LuSquare":
            return LuSquare;
        case "lu:LuSquircle":
            return LuSquircle;
        case "lu:LuSquirrel":
            return LuSquirrel;
        case "lu:LuStamp":
            return LuStamp;
        case "lu:LuStarHalf":
            return LuStarHalf;
        case "lu:LuStarOff":
            return LuStarOff;
        case "lu:LuStar":
            return LuStar;
        case "lu:LuStepBack":
            return LuStepBack;
        case "lu:LuStepForward":
            return LuStepForward;
        case "lu:LuStethoscope":
            return LuStethoscope;
        case "lu:LuSticker":
            return LuSticker;
        case "lu:LuStickyNote":
            return LuStickyNote;
        case "lu:LuStore":
            return LuStore;
        case "lu:LuStretchHorizontal":
            return LuStretchHorizontal;
        case "lu:LuStretchVertical":
            return LuStretchVertical;
        case "lu:LuStrikethrough":
            return LuStrikethrough;
        case "lu:LuSubscript":
            return LuSubscript;
        case "lu:LuSunDim":
            return LuSunDim;
        case "lu:LuSunMedium":
            return LuSunMedium;
        case "lu:LuSunMoon":
            return LuSunMoon;
        case "lu:LuSunSnow":
            return LuSunSnow;
        case "lu:LuSun":
            return LuSun;
        case "lu:LuSunrise":
            return LuSunrise;
        case "lu:LuSunset":
            return LuSunset;
        case "lu:LuSuperscript":
            return LuSuperscript;
        case "lu:LuSwatchBook":
            return LuSwatchBook;
        case "lu:LuSwissFranc":
            return LuSwissFranc;
        case "lu:LuSwitchCamera":
            return LuSwitchCamera;
        case "lu:LuSword":
            return LuSword;
        case "lu:LuSwords":
            return LuSwords;
        case "lu:LuSyringe":
            return LuSyringe;
        case "lu:LuTable2":
            return LuTable2;
        case "lu:LuTableCellsMerge":
            return LuTableCellsMerge;
        case "lu:LuTableCellsSplit":
            return LuTableCellsSplit;
        case "lu:LuTableColumnsSplit":
            return LuTableColumnsSplit;
        case "lu:LuTableOfContents":
            return LuTableOfContents;
        case "lu:LuTableProperties":
            return LuTableProperties;
        case "lu:LuTableRowsSplit":
            return LuTableRowsSplit;
        case "lu:LuTable":
            return LuTable;
        case "lu:LuTabletSmartphone":
            return LuTabletSmartphone;
        case "lu:LuTablet":
            return LuTablet;
        case "lu:LuTablets":
            return LuTablets;
        case "lu:LuTag":
            return LuTag;
        case "lu:LuTags":
            return LuTags;
        case "lu:LuTally1":
            return LuTally1;
        case "lu:LuTally2":
            return LuTally2;
        case "lu:LuTally3":
            return LuTally3;
        case "lu:LuTally4":
            return LuTally4;
        case "lu:LuTally5":
            return LuTally5;
        case "lu:LuTangent":
            return LuTangent;
        case "lu:LuTarget":
            return LuTarget;
        case "lu:LuTelescope":
            return LuTelescope;
        case "lu:LuTentTree":
            return LuTentTree;
        case "lu:LuTent":
            return LuTent;
        case "lu:LuTerminal":
            return LuTerminal;
        case "lu:LuTestTubeDiagonal":
            return LuTestTubeDiagonal;
        case "lu:LuTestTube":
            return LuTestTube;
        case "lu:LuTestTubes":
            return LuTestTubes;
        case "lu:LuTextCursorInput":
            return LuTextCursorInput;
        case "lu:LuTextCursor":
            return LuTextCursor;
        case "lu:LuTextQuote":
            return LuTextQuote;
        case "lu:LuTextSearch":
            return LuTextSearch;
        case "lu:LuTextSelect":
            return LuTextSelect;
        case "lu:LuText":
            return LuText;
        case "lu:LuTheater":
            return LuTheater;
        case "lu:LuThermometerSnowflake":
            return LuThermometerSnowflake;
        case "lu:LuThermometerSun":
            return LuThermometerSun;
        case "lu:LuThermometer":
            return LuThermometer;
        case "lu:LuThumbsDown":
            return LuThumbsDown;
        case "lu:LuThumbsUp":
            return LuThumbsUp;
        case "lu:LuTicketCheck":
            return LuTicketCheck;
        case "lu:LuTicketMinus":
            return LuTicketMinus;
        case "lu:LuTicketPercent":
            return LuTicketPercent;
        case "lu:LuTicketPlus":
            return LuTicketPlus;
        case "lu:LuTicketSlash":
            return LuTicketSlash;
        case "lu:LuTicketX":
            return LuTicketX;
        case "lu:LuTicket":
            return LuTicket;
        case "lu:LuTicketsPlane":
            return LuTicketsPlane;
        case "lu:LuTickets":
            return LuTickets;
        case "lu:LuTimerOff":
            return LuTimerOff;
        case "lu:LuTimerReset":
            return LuTimerReset;
        case "lu:LuTimer":
            return LuTimer;
        case "lu:LuToggleLeft":
            return LuToggleLeft;
        case "lu:LuToggleRight":
            return LuToggleRight;
        case "lu:LuToilet":
            return LuToilet;
        case "lu:LuTornado":
            return LuTornado;
        case "lu:LuTorus":
            return LuTorus;
        case "lu:LuTouchpadOff":
            return LuTouchpadOff;
        case "lu:LuTouchpad":
            return LuTouchpad;
        case "lu:LuTowerControl":
            return LuTowerControl;
        case "lu:LuToyBrick":
            return LuToyBrick;
        case "lu:LuTractor":
            return LuTractor;
        case "lu:LuTrafficCone":
            return LuTrafficCone;
        case "lu:LuTrainFrontTunnel":
            return LuTrainFrontTunnel;
        case "lu:LuTrainFront":
            return LuTrainFront;
        case "lu:LuTrainTrack":
            return LuTrainTrack;
        case "lu:LuTramFront":
            return LuTramFront;
        case "lu:LuTrash2":
            return LuTrash2;
        case "lu:LuTrash":
            return LuTrash;
        case "lu:LuTreeDeciduous":
            return LuTreeDeciduous;
        case "lu:LuTreePalm":
            return LuTreePalm;
        case "lu:LuTreePine":
            return LuTreePine;
        case "lu:LuTrees":
            return LuTrees;
        case "lu:LuTrello":
            return LuTrello;
        case "lu:LuTrendingDown":
            return LuTrendingDown;
        case "lu:LuTrendingUpDown":
            return LuTrendingUpDown;
        case "lu:LuTrendingUp":
            return LuTrendingUp;
        case "lu:LuTriangleAlert":
            return LuTriangleAlert;
        case "lu:LuTriangleRight":
            return LuTriangleRight;
        case "lu:LuTriangle":
            return LuTriangle;
        case "lu:LuTrophy":
            return LuTrophy;
        case "lu:LuTruck":
            return LuTruck;
        case "lu:LuTurtle":
            return LuTurtle;
        case "lu:LuTvMinimalPlay":
            return LuTvMinimalPlay;
        case "lu:LuTvMinimal":
            return LuTvMinimal;
        case "lu:LuTv":
            return LuTv;
        case "lu:LuTwitch":
            return LuTwitch;
        case "lu:LuTwitter":
            return LuTwitter;
        case "lu:LuTypeOutline":
            return LuTypeOutline;
        case "lu:LuType":
            return LuType;
        case "lu:LuUmbrellaOff":
            return LuUmbrellaOff;
        case "lu:LuUmbrella":
            return LuUmbrella;
        case "lu:LuUnderline":
            return LuUnderline;
        case "lu:LuUndo2":
            return LuUndo2;
        case "lu:LuUndoDot":
            return LuUndoDot;
        case "lu:LuUndo":
            return LuUndo;
        case "lu:LuUnfoldHorizontal":
            return LuUnfoldHorizontal;
        case "lu:LuUnfoldVertical":
            return LuUnfoldVertical;
        case "lu:LuUngroup":
            return LuUngroup;
        case "lu:LuUniversity":
            return LuUniversity;
        case "lu:LuUnlink2":
            return LuUnlink2;
        case "lu:LuUnlink":
            return LuUnlink;
        case "lu:LuUnplug":
            return LuUnplug;
        case "lu:LuUpload":
            return LuUpload;
        case "lu:LuUsb":
            return LuUsb;
        case "lu:LuUserCheck":
            return LuUserCheck;
        case "lu:LuUserCog":
            return LuUserCog;
        case "lu:LuUserMinus":
            return LuUserMinus;
        case "lu:LuUserPen":
            return LuUserPen;
        case "lu:LuUserPlus":
            return LuUserPlus;
        case "lu:LuUserRoundCheck":
            return LuUserRoundCheck;
        case "lu:LuUserRoundCog":
            return LuUserRoundCog;
        case "lu:LuUserRoundMinus":
            return LuUserRoundMinus;
        case "lu:LuUserRoundPen":
            return LuUserRoundPen;
        case "lu:LuUserRoundPlus":
            return LuUserRoundPlus;
        case "lu:LuUserRoundSearch":
            return LuUserRoundSearch;
        case "lu:LuUserRoundX":
            return LuUserRoundX;
        case "lu:LuUserRound":
            return LuUserRound;
        case "lu:LuUserSearch":
            return LuUserSearch;
        case "lu:LuUserX":
            return LuUserX;
        case "lu:LuUser":
            return LuUser;
        case "lu:LuUsersRound":
            return LuUsersRound;
        case "lu:LuUsers":
            return LuUsers;
        case "lu:LuUtensilsCrossed":
            return LuUtensilsCrossed;
        case "lu:LuUtensils":
            return LuUtensils;
        case "lu:LuUtilityPole":
            return LuUtilityPole;
        case "lu:LuVariable":
            return LuVariable;
        case "lu:LuVault":
            return LuVault;
        case "lu:LuVegan":
            return LuVegan;
        case "lu:LuVenetianMask":
            return LuVenetianMask;
        case "lu:LuVibrateOff":
            return LuVibrateOff;
        case "lu:LuVibrate":
            return LuVibrate;
        case "lu:LuVideoOff":
            return LuVideoOff;
        case "lu:LuVideo":
            return LuVideo;
        case "lu:LuVideotape":
            return LuVideotape;
        case "lu:LuView":
            return LuView;
        case "lu:LuVoicemail":
            return LuVoicemail;
        case "lu:LuVolleyball":
            return LuVolleyball;
        case "lu:LuVolume1":
            return LuVolume1;
        case "lu:LuVolume2":
            return LuVolume2;
        case "lu:LuVolumeOff":
            return LuVolumeOff;
        case "lu:LuVolumeX":
            return LuVolumeX;
        case "lu:LuVolume":
            return LuVolume;
        case "lu:LuVote":
            return LuVote;
        case "lu:LuWalletCards":
            return LuWalletCards;
        case "lu:LuWalletMinimal":
            return LuWalletMinimal;
        case "lu:LuWallet":
            return LuWallet;
        case "lu:LuWallpaper":
            return LuWallpaper;
        case "lu:LuWandSparkles":
            return LuWandSparkles;
        case "lu:LuWand":
            return LuWand;
        case "lu:LuWarehouse":
            return LuWarehouse;
        case "lu:LuWashingMachine":
            return LuWashingMachine;
        case "lu:LuWatch":
            return LuWatch;
        case "lu:LuWaves":
            return LuWaves;
        case "lu:LuWaypoints":
            return LuWaypoints;
        case "lu:LuWebcam":
            return LuWebcam;
        case "lu:LuWebhookOff":
            return LuWebhookOff;
        case "lu:LuWebhook":
            return LuWebhook;
        case "lu:LuWeight":
            return LuWeight;
        case "lu:LuWheatOff":
            return LuWheatOff;
        case "lu:LuWheat":
            return LuWheat;
        case "lu:LuWholeWord":
            return LuWholeWord;
        case "lu:LuWifiHigh":
            return LuWifiHigh;
        case "lu:LuWifiLow":
            return LuWifiLow;
        case "lu:LuWifiOff":
            return LuWifiOff;
        case "lu:LuWifiZero":
            return LuWifiZero;
        case "lu:LuWifi":
            return LuWifi;
        case "lu:LuWindArrowDown":
            return LuWindArrowDown;
        case "lu:LuWind":
            return LuWind;
        case "lu:LuWineOff":
            return LuWineOff;
        case "lu:LuWine":
            return LuWine;
        case "lu:LuWorkflow":
            return LuWorkflow;
        case "lu:LuWorm":
            return LuWorm;
        case "lu:LuWrapText":
            return LuWrapText;
        case "lu:LuWrench":
            return LuWrench;
        case "lu:LuX":
            return LuX;
        case "lu:LuYoutube":
            return LuYoutube;
        case "lu:LuZapOff":
            return LuZapOff;
        case "lu:LuZap":
            return LuZap;
        case "lu:LuZoomIn":
            return LuZoomIn;
        case "lu:LuZoomOut":
            return LuZoomOut;
    }
}
