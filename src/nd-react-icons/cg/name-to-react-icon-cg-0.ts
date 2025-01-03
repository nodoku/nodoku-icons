import type {IconType} from "react-icons";

import {
    CgAbstract,
    CgAddR,
    CgAdd,
    CgAdidas,
    CgAirplane,
    CgAlarm,
    CgAlbum,
    CgAlignBottom,
    CgAlignCenter,
    CgAlignLeft,
    CgAlignMiddle,
    CgAlignRight,
    CgAlignTop,
    CgAnchor,
    CgAppleWatch,
    CgArrangeBack,
    CgArrangeFront,
    CgArrowAlignH,
    CgArrowAlignV,
    CgArrowBottomLeftO,
    CgArrowBottomLeftR,
    CgArrowBottomLeft,
    CgArrowBottomRightO,
    CgArrowBottomRightR,
    CgArrowBottomRight,
    CgArrowDownO,
    CgArrowDownR,
    CgArrowDown,
    CgArrowLeftO,
    CgArrowLeftR,
    CgArrowLeft,
    CgArrowLongDownC,
    CgArrowLongDownE,
    CgArrowLongDownL,
    CgArrowLongDownR,
    CgArrowLongDown,
    CgArrowLongLeftC,
    CgArrowLongLeftE,
    CgArrowLongLeftL,
    CgArrowLongLeftR,
    CgArrowLongLeft,
    CgArrowLongRightC,
    CgArrowLongRightE,
    CgArrowLongRightL,
    CgArrowLongRightR,
    CgArrowLongRight,
    CgArrowLongUpC,
    CgArrowLongUpE,
    CgArrowLongUpL,
    CgArrowLongUpR,
    CgArrowLongUp,
    CgArrowRightO,
    CgArrowRightR,
    CgArrowRight,
    CgArrowTopLeftO,
    CgArrowTopLeftR,
    CgArrowTopLeft,
    CgArrowTopRightO,
    CgArrowTopRightR,
    CgArrowTopRight,
    CgArrowUpO,
    CgArrowUpR,
    CgArrowUp,
    CgArrowsBreakeH,
    CgArrowsBreakeV,
    CgArrowsExchangeAltV,
    CgArrowsExchangeAlt,
    CgArrowsExchangeV,
    CgArrowsExchange,
    CgArrowsExpandDownLeft,
    CgArrowsExpandDownRight,
    CgArrowsExpandLeftAlt,
    CgArrowsExpandLeft,
    CgArrowsExpandRightAlt,
    CgArrowsExpandRight,
    CgArrowsExpandUpLeft,
    CgArrowsExpandUpRight,
    CgArrowsHAlt,
    CgArrowsH,
    CgArrowsMergeAltH,
    CgArrowsMergeAltV,
    CgArrowsScrollH,
    CgArrowsScrollV,
    CgArrowsShrinkH,
    CgArrowsShrinkV,
    CgArrowsVAlt,
    CgArrowsV,
    CgAssign,
    CgAsterisk,
    CgAtlasian,
    CgAttachment,
    CgAttribution,
    CgAwards,
    CgBackspace,
    CgBandAid,
    CgBatteryEmpty,
    CgBatteryFull,
    CgBattery,
    CgBee,
    CgBell,
    CgBitbucket,
    CgBlock,
    CgBmw,
    CgBoard,
    CgBolt,
    CgBookmark,
    CgBorderAll,
    CgBorderBottom,
    CgBorderLeft,
    CgBorderRight,
    CgBorderStyleDashed,
    CgBorderStyleDotted,
    CgBorderStyleSolid,
    CgBorderTop,
    CgBot,
    CgBowl,
    CgBox,
    CgBoy,
    CgBrackets,
    CgBriefcase,
    CgBrowse,
    CgBrowser,
    CgBrush,
    CgBulb,
    CgCPlusPlus,
    CgCalculator,
    CgCalendarDates,
    CgCalendarDue,
    CgCalendarNext,
    CgCalendarToday,
    CgCalendarTwo,
    CgCalendar,
    CgCalibrate,
    CgCamera,
    CgCap,
    CgCaptions,
    CgCardClubs,
    CgCardDiamonds,
    CgCardHearts,
    CgCardSpades,
    CgCarousel,
    CgCast,
    CgChanel,
    CgChart,
    CgCheckO,
    CgCheckR,
    CgCheck,
    CgChevronDoubleDownO,
    CgChevronDoubleDownR,
    CgChevronDoubleDown,
    CgChevronDoubleLeftO,
    CgChevronDoubleLeftR,
    CgChevronDoubleLeft,
    CgChevronDoubleRightO,
    CgChevronDoubleRightR,
    CgChevronDoubleRight,
    CgChevronDoubleUpO,
    CgChevronDoubleUpR,
    CgChevronDoubleUp,
    CgChevronDownO,
    CgChevronDownR,
    CgChevronDown,
    CgChevronLeftO,
    CgChevronLeftR,
    CgChevronLeft,
    CgChevronRightO,
    CgChevronRightR,
    CgChevronRight,
    CgChevronUpO,
    CgChevronUpR,
    CgChevronUp,
    CgCircleci,
    CgClapperBoard,
    CgClipboard,
    CgCloseO,
    CgCloseR,
    CgClose,
    CgCloud,
    CgCodeClimate,
    CgCodeSlash,
    CgCode,
    CgCoffee,
    CgCollage,
    CgColorBucket,
    CgColorPicker,
    CgComedyCentral,
    CgComment,
    CgCommunity,
    CgComponents,
    CgCompressLeft,
    CgCompressRight,
    CgCompressV,
    CgCompress,
    CgController,
    CgCopy,
    CgCopyright,
    CgCornerDoubleDownLeft,
    CgCornerDoubleDownRight,
    CgCornerDoubleLeftDown,
    CgCornerDoubleLeftUp,
    CgCornerDoubleRightDown,
    CgCornerDoubleRightUp,
    CgCornerDoubleUpLeft,
    CgCornerDoubleUpRight,
    CgCornerDownLeft,
    CgCornerDownRight,
    CgCornerLeftDown,
    CgCornerLeftUp,
    CgCornerRightDown,
    CgCornerRightUp,
    CgCornerUpLeft,
    CgCornerUpRight,
    CgCreditCard,
    CgCrop,
    CgCross,
    CgCrowdfire,
    CgCrown,
    CgDanger,
    CgDarkMode,
    CgData,
    CgDatabase,
    CgDebug,
    CgDesignmodo,
    CgDesktop,
    CgDetailsLess,
    CgDetailsMore,
    CgDialpad,
    CgDice1,
    CgDice2,
    CgDice3,
    CgDice4,
    CgDice5,
    CgDice6,
    CgDigitalocean,
    CgDisc,
    CgDisplayFlex,
    CgDisplayFullwidth,
    CgDisplayGrid,
    CgDisplaySpacing,
    CgDistributeHorizontal,
    CgDistributeVertical,
    CgDockBottom,
    CgDockLeft,
    CgDockRight,
    CgDockWindow,
    CgDolby,
    CgDollar,
    CgDribbble,
    CgDrive,
    CgDropInvert,
    CgDropOpacity,
    CgDrop,
    CgDuplicate,
    CgEditBlackPoint,
    CgEditContrast,
    CgEditExposure,
    CgEditFade,
    CgEditFlipH,
    CgEditFlipV,
    CgEditHighlight,
    CgEditMarkup,
    CgEditMask,
    CgEditNoise,
    CgEditShadows,
    CgEditStraight,
    CgEditUnmask,
    CgEject,
    CgEnter,
    CgErase,
    CgEreader,
    CgEricsson,
    CgEthernet,
    CgEuro,
    CgEventbrite,
    CgExpand,
    CgExport,
    CgExtensionAdd,
    CgExtensionAlt,
    CgExtensionRemove,
    CgExtension,
    CgExternal,
    CgEyeAlt,
    CgEye,
    CgFacebook,
    CgFeed,
    CgFigma,
    CgFileAdd,
    CgFileDocument,
    CgFileRemove,
    CgFile,
    CgFilm,
    CgFilters,
    CgFlagAlt,
    CgFlag,
    CgFolderAdd,
    CgFolderRemove,
    CgFolder,
    CgFontHeight,
    CgFontSpacing,
    CgFormatBold,
    CgFormatCenter,
    CgFormatColor,
    CgFormatHeading,
    CgFormatIndentDecrease,
    CgFormatIndentIncrease,
    CgFormatItalic,
    CgFormatJustify,
    CgFormatLeft,
    CgFormatLineHeight,
    CgFormatRight,
    CgFormatSeparator,
    CgFormatSlash,
    CgFormatStrike,
    CgFormatText,
    CgFormatUnderline,
    CgFormatUppercase,
    CgFramer,
    CgGames,
    CgGenderFemale,
    CgGenderMale,
    CgGhostCharacter,
    CgGhost,
    CgGift,
    CgGirl,
    CgGitBranch,
    CgGitCommit,
    CgGitFork,
    CgGitPull,
    CgGitter,
    CgGlassAlt,
    CgGlass,
    CgGlobeAlt,
    CgGlobe,
    CgGoogleTasks,
    CgGoogle,
    CgGym,
    CgHashtag,
    CgHeadset,
    CgHeart,
    CgHello,
    CgHomeAlt,
    CgHomeScreen,
    CgHome,
    CgIcecream,
    CgIfDesign,
    CgImage,
    CgImport,
    CgInbox,
    CgIndieHackers,
    CgInfinity,
    CgInfo,
    CgInpicture,
    CgInsertAfterO,
    CgInsertAfterR,
    CgInsertAfter,
    CgInsertBeforeO,
    CgInsertBeforeR,
    CgInsertBefore,
    CgInsights,
    CgInstagram,
    CgInternal,
    CgKey,
    CgKeyboard,
    CgKeyhole,
    CgLaptop,
    CgLastpass,
    CgLayoutGridSmall,
    CgLayoutGrid,
    CgLayoutList,
    CgLayoutPin,
    CgLinear,
    CgLink,
    CgListTree,
    CgList,
    CgLivePhoto,
    CgLoadbarAlt,
    CgLoadbarDoc,
    CgLoadbarSound,
    CgLoadbar,
    CgLockUnlock,
    CgLock,
    CgLogIn,
    CgLogOff,
    CgLogOut,
    CgLoupe,
    CgMagnet,
    CgMailForward,
    CgMailOpen,
    CgMailReply,
    CgMail,
    CgMathDivide,
    CgMathEqual,
    CgMathMinus,
    CgMathPercent,
    CgMathPlus,
    CgMaximizeAlt,
    CgMaximize,
    CgMaze,
    CgMediaLive,
    CgMediaPodcast,
    CgMenuBoxed,
    CgMenuCake,
    CgMenuCheese,
    CgMenuGridO,
    CgMenuGridR,
    CgMenuHotdog,
    CgMenuLeftAlt,
    CgMenuLeft,
    CgMenuMotion,
    CgMenuOreos,
    CgMenuRightAlt,
    CgMenuRight,
    CgMenuRound,
    CgMenu,
    CgMergeHorizontal,
    CgMergeVertical,
    CgMic,
    CgMicrobit,
    CgMicrosoft,
    CgMiniPlayer,
    CgMinimizeAlt,
    CgMinimize,
    CgModem,
    CgMonday,
    CgMoon,
    CgMoreAlt,
    CgMoreO,
    CgMoreR,
    CgMoreVerticalAlt,
    CgMoreVerticalO,
    CgMoreVerticalR,
    CgMoreVertical,
    CgMore,
    CgMouse,
    CgMoveDown,
    CgMoveLeft,
    CgMoveRight,
    CgMoveTask,
    CgMoveUp,
    CgMusicNote,
    CgMusicSpeaker,
    CgMusic,
    CgNametag,
    CgNotes,
    CgNotifications,
    CgNpm,
    CgOculus,
    CgOpenCollective,
    CgOptions,
    CgOrganisation,
    CgOverflow,
    CgPacman,
    CgPassword,
    CgPathBack,
    CgPathCrop,
    CgPathDivide,
    CgPathExclude,
    CgPathFront,
    CgPathIntersect,
    CgPathOutline,
    CgPathTrim,
    CgPathUnite,
    CgPatreon,
    CgPaypal,
    CgPen,
    CgPentagonBottomLeft,
    CgPentagonBottomRight,
    CgPentagonDown,
    CgPentagonLeft,
    CgPentagonRight,
    CgPentagonTopLeft,
    CgPentagonTopRight,
    CgPentagonUp,
    CgPerformance,
    CgPexels,
    CgPhone,
    CgPhotoscan,
    CgPiano,
    CgPill,
    CgPinAlt,
    CgPinBottom,
    CgPinTop,
    CgPin,
    CgPlayBackwards,
    CgPlayButtonO,
    CgPlayButtonR,
    CgPlayButton,
    CgPlayForwards,
    CgPlayListAdd,
    CgPlayListCheck,
    CgPlayListRemove,
    CgPlayListSearch,
    CgPlayList,
    CgPlayPauseO,
    CgPlayPauseR,
    CgPlayPause,
    CgPlayStopO,
    CgPlayStopR,
    CgPlayStop,
    CgPlayTrackNextO,
    CgPlayTrackNextR,
    CgPlayTrackNext,
    CgPlayTrackPrevO,
    CgPlayTrackPrevR,
    CgPlayTrackPrev,
    CgPlug,
    CgPocket,
    CgPokemon,
    CgPolaroid,
    CgPoll,
    CgPresentation,
    CgPrinter,
    CgProductHunt,
    CgProfile,
    CgPullClear,
    CgPushChevronDownO,
    CgPushChevronDownR,
    CgPushChevronDown,
    CgPushChevronLeftO,
    CgPushChevronLeftR,
    CgPushChevronLeft,
    CgPushChevronRightO,
    CgPushChevronRightR,
    CgPushChevronRight,
    CgPushChevronUpO,
    CgPushChevronUpR,
    CgPushChevronUp,
    CgPushDown,
    CgPushLeft,
    CgPushRight,
    CgPushUp,
    CgQr,
    CgQuoteO,
    CgQuote,
    CgRadioCheck,
    CgRadioChecked,
    CgRatio,
    CgRead,
    CgReadme,
    CgRecord,
    CgRedo,
    CgRemote,
    CgRemoveR,
    CgRemove,
    CgRename,
    CgReorder,
    CgRepeat,
    CgRing,
    CgRowFirst,
    CgRowLast,
    CgRuler,
    CgSandClock,
    CgScan,
    CgScreenMirror,
    CgScreenShot,
    CgScreenWide,
    CgScreen,
    CgScrollH,
    CgScrollV,
    CgSearchFound,
    CgSearchLoading,
    CgSearch,
    CgSelectO,
    CgSelectR,
    CgSelect,
    CgServer,
    CgServerless,
    CgShapeCircle,
    CgShapeHalfCircle,
    CgShapeHexagon,
    CgShapeRhombus,
    CgShapeSquare,
    CgShapeTriangle,
    CgShapeZigzag,
    CgShare,
    CgShield,
    CgShoppingBag,
    CgShoppingCart,
    CgShortcut,
    CgShutterstock,
    CgSidebarOpen,
    CgSidebarRight,
    CgSidebar,
    CgSignal,
    CgSize,
    CgSketch,
    CgSlack,
    CgSleep,
    CgSmartHomeBoiler,
    CgSmartHomeCooker,
    CgSmartHomeHeat,
    CgSmartHomeLight,
    CgSmartHomeRefrigerator,
    CgSmartHomeWashMachine,
    CgSmartphoneChip,
    CgSmartphoneRam,
    CgSmartphoneShake,
    CgSmartphone,
    CgSmileMouthOpen,
    CgSmileNeutral,
    CgSmileNoMouth,
    CgSmileNone,
    CgSmileSad,
    CgSmileUpside,
    CgSmile,
    CgSoftwareDownload,
    CgSoftwareUpload,
    CgSortAz,
    CgSortZa,
    CgSpaceBetweenV,
    CgSpaceBetween,
    CgSpectrum,
    CgSpinnerAlt,
    CgSpinnerTwoAlt,
    CgSpinnerTwo,
    CgSpinner,
    CgSquare,
    CgStack,
    CgStark,
    CgStopwatch,
    CgStories,
    CgStudio,
    CgStyle,
    CgSun,
    CgSupport,
    CgSwapVertical,
    CgSwap,
    CgSweden,
    CgSwiss,
    CgSync,
    CgTab,
    CgTag,
    CgTally,
    CgTapDouble,
    CgTapSingle,
    CgTemplate,
    CgTennis,
    CgTerminal,
    CgTerrain,
    CgThermometer,
    CgThermostat,
    CgTikcode,
    CgTime,
    CgTimelapse,
    CgTimer,
    CgToday,
    CgToggleOff,
    CgToggleOn,
    CgToggleSquareOff,
    CgToggleSquare,
    CgToolbarBottom,
    CgToolbarLeft,
    CgToolbarRight,
    CgToolbarTop,
    CgToolbox,
    CgTouchpad,
    CgTrack,
    CgTranscript,
    CgTrashEmpty,
    CgTrash,
    CgTree,
    CgTrees,
    CgTrello,
    CgTrendingDown,
    CgTrending,
    CgTrophy,
    CgTv,
    CgTwilio,
    CgTwitter,
    CgUiKit,
    CgUmbrella,
    CgUnavailable,
    CgUnblock,
    CgUndo,
    CgUnfold,
    CgUnsplash,
    CgUsbC,
    CgUsb,
    CgUserAdd,
    CgUserList,
    CgUserRemove,
    CgUser,
    CgUserlane,
    CgVercel,
    CgViewCols,
    CgViewComfortable,
    CgViewDay,
    CgViewGrid,
    CgViewList,
    CgViewMonth,
    CgViewSplit,
    CgVinyl,
    CgVoicemailO,
    CgVoicemailR,
    CgVoicemail,
    CgVolume,
    CgWebcam,
    CgWebsite,
    CgWindows,
    CgWorkAlt,
    CgYinyang,
    CgYoutube,
    CgZoomIn,
    CgZoomOut,
} from "react-icons/cg"

export function nameToReactIcon_cg_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "cg:CgAbstract":
            return CgAbstract;
        case "cg:CgAddR":
            return CgAddR;
        case "cg:CgAdd":
            return CgAdd;
        case "cg:CgAdidas":
            return CgAdidas;
        case "cg:CgAirplane":
            return CgAirplane;
        case "cg:CgAlarm":
            return CgAlarm;
        case "cg:CgAlbum":
            return CgAlbum;
        case "cg:CgAlignBottom":
            return CgAlignBottom;
        case "cg:CgAlignCenter":
            return CgAlignCenter;
        case "cg:CgAlignLeft":
            return CgAlignLeft;
        case "cg:CgAlignMiddle":
            return CgAlignMiddle;
        case "cg:CgAlignRight":
            return CgAlignRight;
        case "cg:CgAlignTop":
            return CgAlignTop;
        case "cg:CgAnchor":
            return CgAnchor;
        case "cg:CgAppleWatch":
            return CgAppleWatch;
        case "cg:CgArrangeBack":
            return CgArrangeBack;
        case "cg:CgArrangeFront":
            return CgArrangeFront;
        case "cg:CgArrowAlignH":
            return CgArrowAlignH;
        case "cg:CgArrowAlignV":
            return CgArrowAlignV;
        case "cg:CgArrowBottomLeftO":
            return CgArrowBottomLeftO;
        case "cg:CgArrowBottomLeftR":
            return CgArrowBottomLeftR;
        case "cg:CgArrowBottomLeft":
            return CgArrowBottomLeft;
        case "cg:CgArrowBottomRightO":
            return CgArrowBottomRightO;
        case "cg:CgArrowBottomRightR":
            return CgArrowBottomRightR;
        case "cg:CgArrowBottomRight":
            return CgArrowBottomRight;
        case "cg:CgArrowDownO":
            return CgArrowDownO;
        case "cg:CgArrowDownR":
            return CgArrowDownR;
        case "cg:CgArrowDown":
            return CgArrowDown;
        case "cg:CgArrowLeftO":
            return CgArrowLeftO;
        case "cg:CgArrowLeftR":
            return CgArrowLeftR;
        case "cg:CgArrowLeft":
            return CgArrowLeft;
        case "cg:CgArrowLongDownC":
            return CgArrowLongDownC;
        case "cg:CgArrowLongDownE":
            return CgArrowLongDownE;
        case "cg:CgArrowLongDownL":
            return CgArrowLongDownL;
        case "cg:CgArrowLongDownR":
            return CgArrowLongDownR;
        case "cg:CgArrowLongDown":
            return CgArrowLongDown;
        case "cg:CgArrowLongLeftC":
            return CgArrowLongLeftC;
        case "cg:CgArrowLongLeftE":
            return CgArrowLongLeftE;
        case "cg:CgArrowLongLeftL":
            return CgArrowLongLeftL;
        case "cg:CgArrowLongLeftR":
            return CgArrowLongLeftR;
        case "cg:CgArrowLongLeft":
            return CgArrowLongLeft;
        case "cg:CgArrowLongRightC":
            return CgArrowLongRightC;
        case "cg:CgArrowLongRightE":
            return CgArrowLongRightE;
        case "cg:CgArrowLongRightL":
            return CgArrowLongRightL;
        case "cg:CgArrowLongRightR":
            return CgArrowLongRightR;
        case "cg:CgArrowLongRight":
            return CgArrowLongRight;
        case "cg:CgArrowLongUpC":
            return CgArrowLongUpC;
        case "cg:CgArrowLongUpE":
            return CgArrowLongUpE;
        case "cg:CgArrowLongUpL":
            return CgArrowLongUpL;
        case "cg:CgArrowLongUpR":
            return CgArrowLongUpR;
        case "cg:CgArrowLongUp":
            return CgArrowLongUp;
        case "cg:CgArrowRightO":
            return CgArrowRightO;
        case "cg:CgArrowRightR":
            return CgArrowRightR;
        case "cg:CgArrowRight":
            return CgArrowRight;
        case "cg:CgArrowTopLeftO":
            return CgArrowTopLeftO;
        case "cg:CgArrowTopLeftR":
            return CgArrowTopLeftR;
        case "cg:CgArrowTopLeft":
            return CgArrowTopLeft;
        case "cg:CgArrowTopRightO":
            return CgArrowTopRightO;
        case "cg:CgArrowTopRightR":
            return CgArrowTopRightR;
        case "cg:CgArrowTopRight":
            return CgArrowTopRight;
        case "cg:CgArrowUpO":
            return CgArrowUpO;
        case "cg:CgArrowUpR":
            return CgArrowUpR;
        case "cg:CgArrowUp":
            return CgArrowUp;
        case "cg:CgArrowsBreakeH":
            return CgArrowsBreakeH;
        case "cg:CgArrowsBreakeV":
            return CgArrowsBreakeV;
        case "cg:CgArrowsExchangeAltV":
            return CgArrowsExchangeAltV;
        case "cg:CgArrowsExchangeAlt":
            return CgArrowsExchangeAlt;
        case "cg:CgArrowsExchangeV":
            return CgArrowsExchangeV;
        case "cg:CgArrowsExchange":
            return CgArrowsExchange;
        case "cg:CgArrowsExpandDownLeft":
            return CgArrowsExpandDownLeft;
        case "cg:CgArrowsExpandDownRight":
            return CgArrowsExpandDownRight;
        case "cg:CgArrowsExpandLeftAlt":
            return CgArrowsExpandLeftAlt;
        case "cg:CgArrowsExpandLeft":
            return CgArrowsExpandLeft;
        case "cg:CgArrowsExpandRightAlt":
            return CgArrowsExpandRightAlt;
        case "cg:CgArrowsExpandRight":
            return CgArrowsExpandRight;
        case "cg:CgArrowsExpandUpLeft":
            return CgArrowsExpandUpLeft;
        case "cg:CgArrowsExpandUpRight":
            return CgArrowsExpandUpRight;
        case "cg:CgArrowsHAlt":
            return CgArrowsHAlt;
        case "cg:CgArrowsH":
            return CgArrowsH;
        case "cg:CgArrowsMergeAltH":
            return CgArrowsMergeAltH;
        case "cg:CgArrowsMergeAltV":
            return CgArrowsMergeAltV;
        case "cg:CgArrowsScrollH":
            return CgArrowsScrollH;
        case "cg:CgArrowsScrollV":
            return CgArrowsScrollV;
        case "cg:CgArrowsShrinkH":
            return CgArrowsShrinkH;
        case "cg:CgArrowsShrinkV":
            return CgArrowsShrinkV;
        case "cg:CgArrowsVAlt":
            return CgArrowsVAlt;
        case "cg:CgArrowsV":
            return CgArrowsV;
        case "cg:CgAssign":
            return CgAssign;
        case "cg:CgAsterisk":
            return CgAsterisk;
        case "cg:CgAtlasian":
            return CgAtlasian;
        case "cg:CgAttachment":
            return CgAttachment;
        case "cg:CgAttribution":
            return CgAttribution;
        case "cg:CgAwards":
            return CgAwards;
        case "cg:CgBackspace":
            return CgBackspace;
        case "cg:CgBandAid":
            return CgBandAid;
        case "cg:CgBatteryEmpty":
            return CgBatteryEmpty;
        case "cg:CgBatteryFull":
            return CgBatteryFull;
        case "cg:CgBattery":
            return CgBattery;
        case "cg:CgBee":
            return CgBee;
        case "cg:CgBell":
            return CgBell;
        case "cg:CgBitbucket":
            return CgBitbucket;
        case "cg:CgBlock":
            return CgBlock;
        case "cg:CgBmw":
            return CgBmw;
        case "cg:CgBoard":
            return CgBoard;
        case "cg:CgBolt":
            return CgBolt;
        case "cg:CgBookmark":
            return CgBookmark;
        case "cg:CgBorderAll":
            return CgBorderAll;
        case "cg:CgBorderBottom":
            return CgBorderBottom;
        case "cg:CgBorderLeft":
            return CgBorderLeft;
        case "cg:CgBorderRight":
            return CgBorderRight;
        case "cg:CgBorderStyleDashed":
            return CgBorderStyleDashed;
        case "cg:CgBorderStyleDotted":
            return CgBorderStyleDotted;
        case "cg:CgBorderStyleSolid":
            return CgBorderStyleSolid;
        case "cg:CgBorderTop":
            return CgBorderTop;
        case "cg:CgBot":
            return CgBot;
        case "cg:CgBowl":
            return CgBowl;
        case "cg:CgBox":
            return CgBox;
        case "cg:CgBoy":
            return CgBoy;
        case "cg:CgBrackets":
            return CgBrackets;
        case "cg:CgBriefcase":
            return CgBriefcase;
        case "cg:CgBrowse":
            return CgBrowse;
        case "cg:CgBrowser":
            return CgBrowser;
        case "cg:CgBrush":
            return CgBrush;
        case "cg:CgBulb":
            return CgBulb;
        case "cg:CgCPlusPlus":
            return CgCPlusPlus;
        case "cg:CgCalculator":
            return CgCalculator;
        case "cg:CgCalendarDates":
            return CgCalendarDates;
        case "cg:CgCalendarDue":
            return CgCalendarDue;
        case "cg:CgCalendarNext":
            return CgCalendarNext;
        case "cg:CgCalendarToday":
            return CgCalendarToday;
        case "cg:CgCalendarTwo":
            return CgCalendarTwo;
        case "cg:CgCalendar":
            return CgCalendar;
        case "cg:CgCalibrate":
            return CgCalibrate;
        case "cg:CgCamera":
            return CgCamera;
        case "cg:CgCap":
            return CgCap;
        case "cg:CgCaptions":
            return CgCaptions;
        case "cg:CgCardClubs":
            return CgCardClubs;
        case "cg:CgCardDiamonds":
            return CgCardDiamonds;
        case "cg:CgCardHearts":
            return CgCardHearts;
        case "cg:CgCardSpades":
            return CgCardSpades;
        case "cg:CgCarousel":
            return CgCarousel;
        case "cg:CgCast":
            return CgCast;
        case "cg:CgChanel":
            return CgChanel;
        case "cg:CgChart":
            return CgChart;
        case "cg:CgCheckO":
            return CgCheckO;
        case "cg:CgCheckR":
            return CgCheckR;
        case "cg:CgCheck":
            return CgCheck;
        case "cg:CgChevronDoubleDownO":
            return CgChevronDoubleDownO;
        case "cg:CgChevronDoubleDownR":
            return CgChevronDoubleDownR;
        case "cg:CgChevronDoubleDown":
            return CgChevronDoubleDown;
        case "cg:CgChevronDoubleLeftO":
            return CgChevronDoubleLeftO;
        case "cg:CgChevronDoubleLeftR":
            return CgChevronDoubleLeftR;
        case "cg:CgChevronDoubleLeft":
            return CgChevronDoubleLeft;
        case "cg:CgChevronDoubleRightO":
            return CgChevronDoubleRightO;
        case "cg:CgChevronDoubleRightR":
            return CgChevronDoubleRightR;
        case "cg:CgChevronDoubleRight":
            return CgChevronDoubleRight;
        case "cg:CgChevronDoubleUpO":
            return CgChevronDoubleUpO;
        case "cg:CgChevronDoubleUpR":
            return CgChevronDoubleUpR;
        case "cg:CgChevronDoubleUp":
            return CgChevronDoubleUp;
        case "cg:CgChevronDownO":
            return CgChevronDownO;
        case "cg:CgChevronDownR":
            return CgChevronDownR;
        case "cg:CgChevronDown":
            return CgChevronDown;
        case "cg:CgChevronLeftO":
            return CgChevronLeftO;
        case "cg:CgChevronLeftR":
            return CgChevronLeftR;
        case "cg:CgChevronLeft":
            return CgChevronLeft;
        case "cg:CgChevronRightO":
            return CgChevronRightO;
        case "cg:CgChevronRightR":
            return CgChevronRightR;
        case "cg:CgChevronRight":
            return CgChevronRight;
        case "cg:CgChevronUpO":
            return CgChevronUpO;
        case "cg:CgChevronUpR":
            return CgChevronUpR;
        case "cg:CgChevronUp":
            return CgChevronUp;
        case "cg:CgCircleci":
            return CgCircleci;
        case "cg:CgClapperBoard":
            return CgClapperBoard;
        case "cg:CgClipboard":
            return CgClipboard;
        case "cg:CgCloseO":
            return CgCloseO;
        case "cg:CgCloseR":
            return CgCloseR;
        case "cg:CgClose":
            return CgClose;
        case "cg:CgCloud":
            return CgCloud;
        case "cg:CgCodeClimate":
            return CgCodeClimate;
        case "cg:CgCodeSlash":
            return CgCodeSlash;
        case "cg:CgCode":
            return CgCode;
        case "cg:CgCoffee":
            return CgCoffee;
        case "cg:CgCollage":
            return CgCollage;
        case "cg:CgColorBucket":
            return CgColorBucket;
        case "cg:CgColorPicker":
            return CgColorPicker;
        case "cg:CgComedyCentral":
            return CgComedyCentral;
        case "cg:CgComment":
            return CgComment;
        case "cg:CgCommunity":
            return CgCommunity;
        case "cg:CgComponents":
            return CgComponents;
        case "cg:CgCompressLeft":
            return CgCompressLeft;
        case "cg:CgCompressRight":
            return CgCompressRight;
        case "cg:CgCompressV":
            return CgCompressV;
        case "cg:CgCompress":
            return CgCompress;
        case "cg:CgController":
            return CgController;
        case "cg:CgCopy":
            return CgCopy;
        case "cg:CgCopyright":
            return CgCopyright;
        case "cg:CgCornerDoubleDownLeft":
            return CgCornerDoubleDownLeft;
        case "cg:CgCornerDoubleDownRight":
            return CgCornerDoubleDownRight;
        case "cg:CgCornerDoubleLeftDown":
            return CgCornerDoubleLeftDown;
        case "cg:CgCornerDoubleLeftUp":
            return CgCornerDoubleLeftUp;
        case "cg:CgCornerDoubleRightDown":
            return CgCornerDoubleRightDown;
        case "cg:CgCornerDoubleRightUp":
            return CgCornerDoubleRightUp;
        case "cg:CgCornerDoubleUpLeft":
            return CgCornerDoubleUpLeft;
        case "cg:CgCornerDoubleUpRight":
            return CgCornerDoubleUpRight;
        case "cg:CgCornerDownLeft":
            return CgCornerDownLeft;
        case "cg:CgCornerDownRight":
            return CgCornerDownRight;
        case "cg:CgCornerLeftDown":
            return CgCornerLeftDown;
        case "cg:CgCornerLeftUp":
            return CgCornerLeftUp;
        case "cg:CgCornerRightDown":
            return CgCornerRightDown;
        case "cg:CgCornerRightUp":
            return CgCornerRightUp;
        case "cg:CgCornerUpLeft":
            return CgCornerUpLeft;
        case "cg:CgCornerUpRight":
            return CgCornerUpRight;
        case "cg:CgCreditCard":
            return CgCreditCard;
        case "cg:CgCrop":
            return CgCrop;
        case "cg:CgCross":
            return CgCross;
        case "cg:CgCrowdfire":
            return CgCrowdfire;
        case "cg:CgCrown":
            return CgCrown;
        case "cg:CgDanger":
            return CgDanger;
        case "cg:CgDarkMode":
            return CgDarkMode;
        case "cg:CgData":
            return CgData;
        case "cg:CgDatabase":
            return CgDatabase;
        case "cg:CgDebug":
            return CgDebug;
        case "cg:CgDesignmodo":
            return CgDesignmodo;
        case "cg:CgDesktop":
            return CgDesktop;
        case "cg:CgDetailsLess":
            return CgDetailsLess;
        case "cg:CgDetailsMore":
            return CgDetailsMore;
        case "cg:CgDialpad":
            return CgDialpad;
        case "cg:CgDice1":
            return CgDice1;
        case "cg:CgDice2":
            return CgDice2;
        case "cg:CgDice3":
            return CgDice3;
        case "cg:CgDice4":
            return CgDice4;
        case "cg:CgDice5":
            return CgDice5;
        case "cg:CgDice6":
            return CgDice6;
        case "cg:CgDigitalocean":
            return CgDigitalocean;
        case "cg:CgDisc":
            return CgDisc;
        case "cg:CgDisplayFlex":
            return CgDisplayFlex;
        case "cg:CgDisplayFullwidth":
            return CgDisplayFullwidth;
        case "cg:CgDisplayGrid":
            return CgDisplayGrid;
        case "cg:CgDisplaySpacing":
            return CgDisplaySpacing;
        case "cg:CgDistributeHorizontal":
            return CgDistributeHorizontal;
        case "cg:CgDistributeVertical":
            return CgDistributeVertical;
        case "cg:CgDockBottom":
            return CgDockBottom;
        case "cg:CgDockLeft":
            return CgDockLeft;
        case "cg:CgDockRight":
            return CgDockRight;
        case "cg:CgDockWindow":
            return CgDockWindow;
        case "cg:CgDolby":
            return CgDolby;
        case "cg:CgDollar":
            return CgDollar;
        case "cg:CgDribbble":
            return CgDribbble;
        case "cg:CgDrive":
            return CgDrive;
        case "cg:CgDropInvert":
            return CgDropInvert;
        case "cg:CgDropOpacity":
            return CgDropOpacity;
        case "cg:CgDrop":
            return CgDrop;
        case "cg:CgDuplicate":
            return CgDuplicate;
        case "cg:CgEditBlackPoint":
            return CgEditBlackPoint;
        case "cg:CgEditContrast":
            return CgEditContrast;
        case "cg:CgEditExposure":
            return CgEditExposure;
        case "cg:CgEditFade":
            return CgEditFade;
        case "cg:CgEditFlipH":
            return CgEditFlipH;
        case "cg:CgEditFlipV":
            return CgEditFlipV;
        case "cg:CgEditHighlight":
            return CgEditHighlight;
        case "cg:CgEditMarkup":
            return CgEditMarkup;
        case "cg:CgEditMask":
            return CgEditMask;
        case "cg:CgEditNoise":
            return CgEditNoise;
        case "cg:CgEditShadows":
            return CgEditShadows;
        case "cg:CgEditStraight":
            return CgEditStraight;
        case "cg:CgEditUnmask":
            return CgEditUnmask;
        case "cg:CgEject":
            return CgEject;
        case "cg:CgEnter":
            return CgEnter;
        case "cg:CgErase":
            return CgErase;
        case "cg:CgEreader":
            return CgEreader;
        case "cg:CgEricsson":
            return CgEricsson;
        case "cg:CgEthernet":
            return CgEthernet;
        case "cg:CgEuro":
            return CgEuro;
        case "cg:CgEventbrite":
            return CgEventbrite;
        case "cg:CgExpand":
            return CgExpand;
        case "cg:CgExport":
            return CgExport;
        case "cg:CgExtensionAdd":
            return CgExtensionAdd;
        case "cg:CgExtensionAlt":
            return CgExtensionAlt;
        case "cg:CgExtensionRemove":
            return CgExtensionRemove;
        case "cg:CgExtension":
            return CgExtension;
        case "cg:CgExternal":
            return CgExternal;
        case "cg:CgEyeAlt":
            return CgEyeAlt;
        case "cg:CgEye":
            return CgEye;
        case "cg:CgFacebook":
            return CgFacebook;
        case "cg:CgFeed":
            return CgFeed;
        case "cg:CgFigma":
            return CgFigma;
        case "cg:CgFileAdd":
            return CgFileAdd;
        case "cg:CgFileDocument":
            return CgFileDocument;
        case "cg:CgFileRemove":
            return CgFileRemove;
        case "cg:CgFile":
            return CgFile;
        case "cg:CgFilm":
            return CgFilm;
        case "cg:CgFilters":
            return CgFilters;
        case "cg:CgFlagAlt":
            return CgFlagAlt;
        case "cg:CgFlag":
            return CgFlag;
        case "cg:CgFolderAdd":
            return CgFolderAdd;
        case "cg:CgFolderRemove":
            return CgFolderRemove;
        case "cg:CgFolder":
            return CgFolder;
        case "cg:CgFontHeight":
            return CgFontHeight;
        case "cg:CgFontSpacing":
            return CgFontSpacing;
        case "cg:CgFormatBold":
            return CgFormatBold;
        case "cg:CgFormatCenter":
            return CgFormatCenter;
        case "cg:CgFormatColor":
            return CgFormatColor;
        case "cg:CgFormatHeading":
            return CgFormatHeading;
        case "cg:CgFormatIndentDecrease":
            return CgFormatIndentDecrease;
        case "cg:CgFormatIndentIncrease":
            return CgFormatIndentIncrease;
        case "cg:CgFormatItalic":
            return CgFormatItalic;
        case "cg:CgFormatJustify":
            return CgFormatJustify;
        case "cg:CgFormatLeft":
            return CgFormatLeft;
        case "cg:CgFormatLineHeight":
            return CgFormatLineHeight;
        case "cg:CgFormatRight":
            return CgFormatRight;
        case "cg:CgFormatSeparator":
            return CgFormatSeparator;
        case "cg:CgFormatSlash":
            return CgFormatSlash;
        case "cg:CgFormatStrike":
            return CgFormatStrike;
        case "cg:CgFormatText":
            return CgFormatText;
        case "cg:CgFormatUnderline":
            return CgFormatUnderline;
        case "cg:CgFormatUppercase":
            return CgFormatUppercase;
        case "cg:CgFramer":
            return CgFramer;
        case "cg:CgGames":
            return CgGames;
        case "cg:CgGenderFemale":
            return CgGenderFemale;
        case "cg:CgGenderMale":
            return CgGenderMale;
        case "cg:CgGhostCharacter":
            return CgGhostCharacter;
        case "cg:CgGhost":
            return CgGhost;
        case "cg:CgGift":
            return CgGift;
        case "cg:CgGirl":
            return CgGirl;
        case "cg:CgGitBranch":
            return CgGitBranch;
        case "cg:CgGitCommit":
            return CgGitCommit;
        case "cg:CgGitFork":
            return CgGitFork;
        case "cg:CgGitPull":
            return CgGitPull;
        case "cg:CgGitter":
            return CgGitter;
        case "cg:CgGlassAlt":
            return CgGlassAlt;
        case "cg:CgGlass":
            return CgGlass;
        case "cg:CgGlobeAlt":
            return CgGlobeAlt;
        case "cg:CgGlobe":
            return CgGlobe;
        case "cg:CgGoogleTasks":
            return CgGoogleTasks;
        case "cg:CgGoogle":
            return CgGoogle;
        case "cg:CgGym":
            return CgGym;
        case "cg:CgHashtag":
            return CgHashtag;
        case "cg:CgHeadset":
            return CgHeadset;
        case "cg:CgHeart":
            return CgHeart;
        case "cg:CgHello":
            return CgHello;
        case "cg:CgHomeAlt":
            return CgHomeAlt;
        case "cg:CgHomeScreen":
            return CgHomeScreen;
        case "cg:CgHome":
            return CgHome;
        case "cg:CgIcecream":
            return CgIcecream;
        case "cg:CgIfDesign":
            return CgIfDesign;
        case "cg:CgImage":
            return CgImage;
        case "cg:CgImport":
            return CgImport;
        case "cg:CgInbox":
            return CgInbox;
        case "cg:CgIndieHackers":
            return CgIndieHackers;
        case "cg:CgInfinity":
            return CgInfinity;
        case "cg:CgInfo":
            return CgInfo;
        case "cg:CgInpicture":
            return CgInpicture;
        case "cg:CgInsertAfterO":
            return CgInsertAfterO;
        case "cg:CgInsertAfterR":
            return CgInsertAfterR;
        case "cg:CgInsertAfter":
            return CgInsertAfter;
        case "cg:CgInsertBeforeO":
            return CgInsertBeforeO;
        case "cg:CgInsertBeforeR":
            return CgInsertBeforeR;
        case "cg:CgInsertBefore":
            return CgInsertBefore;
        case "cg:CgInsights":
            return CgInsights;
        case "cg:CgInstagram":
            return CgInstagram;
        case "cg:CgInternal":
            return CgInternal;
        case "cg:CgKey":
            return CgKey;
        case "cg:CgKeyboard":
            return CgKeyboard;
        case "cg:CgKeyhole":
            return CgKeyhole;
        case "cg:CgLaptop":
            return CgLaptop;
        case "cg:CgLastpass":
            return CgLastpass;
        case "cg:CgLayoutGridSmall":
            return CgLayoutGridSmall;
        case "cg:CgLayoutGrid":
            return CgLayoutGrid;
        case "cg:CgLayoutList":
            return CgLayoutList;
        case "cg:CgLayoutPin":
            return CgLayoutPin;
        case "cg:CgLinear":
            return CgLinear;
        case "cg:CgLink":
            return CgLink;
        case "cg:CgListTree":
            return CgListTree;
        case "cg:CgList":
            return CgList;
        case "cg:CgLivePhoto":
            return CgLivePhoto;
        case "cg:CgLoadbarAlt":
            return CgLoadbarAlt;
        case "cg:CgLoadbarDoc":
            return CgLoadbarDoc;
        case "cg:CgLoadbarSound":
            return CgLoadbarSound;
        case "cg:CgLoadbar":
            return CgLoadbar;
        case "cg:CgLockUnlock":
            return CgLockUnlock;
        case "cg:CgLock":
            return CgLock;
        case "cg:CgLogIn":
            return CgLogIn;
        case "cg:CgLogOff":
            return CgLogOff;
        case "cg:CgLogOut":
            return CgLogOut;
        case "cg:CgLoupe":
            return CgLoupe;
        case "cg:CgMagnet":
            return CgMagnet;
        case "cg:CgMailForward":
            return CgMailForward;
        case "cg:CgMailOpen":
            return CgMailOpen;
        case "cg:CgMailReply":
            return CgMailReply;
        case "cg:CgMail":
            return CgMail;
        case "cg:CgMathDivide":
            return CgMathDivide;
        case "cg:CgMathEqual":
            return CgMathEqual;
        case "cg:CgMathMinus":
            return CgMathMinus;
        case "cg:CgMathPercent":
            return CgMathPercent;
        case "cg:CgMathPlus":
            return CgMathPlus;
        case "cg:CgMaximizeAlt":
            return CgMaximizeAlt;
        case "cg:CgMaximize":
            return CgMaximize;
        case "cg:CgMaze":
            return CgMaze;
        case "cg:CgMediaLive":
            return CgMediaLive;
        case "cg:CgMediaPodcast":
            return CgMediaPodcast;
        case "cg:CgMenuBoxed":
            return CgMenuBoxed;
        case "cg:CgMenuCake":
            return CgMenuCake;
        case "cg:CgMenuCheese":
            return CgMenuCheese;
        case "cg:CgMenuGridO":
            return CgMenuGridO;
        case "cg:CgMenuGridR":
            return CgMenuGridR;
        case "cg:CgMenuHotdog":
            return CgMenuHotdog;
        case "cg:CgMenuLeftAlt":
            return CgMenuLeftAlt;
        case "cg:CgMenuLeft":
            return CgMenuLeft;
        case "cg:CgMenuMotion":
            return CgMenuMotion;
        case "cg:CgMenuOreos":
            return CgMenuOreos;
        case "cg:CgMenuRightAlt":
            return CgMenuRightAlt;
        case "cg:CgMenuRight":
            return CgMenuRight;
        case "cg:CgMenuRound":
            return CgMenuRound;
        case "cg:CgMenu":
            return CgMenu;
        case "cg:CgMergeHorizontal":
            return CgMergeHorizontal;
        case "cg:CgMergeVertical":
            return CgMergeVertical;
        case "cg:CgMic":
            return CgMic;
        case "cg:CgMicrobit":
            return CgMicrobit;
        case "cg:CgMicrosoft":
            return CgMicrosoft;
        case "cg:CgMiniPlayer":
            return CgMiniPlayer;
        case "cg:CgMinimizeAlt":
            return CgMinimizeAlt;
        case "cg:CgMinimize":
            return CgMinimize;
        case "cg:CgModem":
            return CgModem;
        case "cg:CgMonday":
            return CgMonday;
        case "cg:CgMoon":
            return CgMoon;
        case "cg:CgMoreAlt":
            return CgMoreAlt;
        case "cg:CgMoreO":
            return CgMoreO;
        case "cg:CgMoreR":
            return CgMoreR;
        case "cg:CgMoreVerticalAlt":
            return CgMoreVerticalAlt;
        case "cg:CgMoreVerticalO":
            return CgMoreVerticalO;
        case "cg:CgMoreVerticalR":
            return CgMoreVerticalR;
        case "cg:CgMoreVertical":
            return CgMoreVertical;
        case "cg:CgMore":
            return CgMore;
        case "cg:CgMouse":
            return CgMouse;
        case "cg:CgMoveDown":
            return CgMoveDown;
        case "cg:CgMoveLeft":
            return CgMoveLeft;
        case "cg:CgMoveRight":
            return CgMoveRight;
        case "cg:CgMoveTask":
            return CgMoveTask;
        case "cg:CgMoveUp":
            return CgMoveUp;
        case "cg:CgMusicNote":
            return CgMusicNote;
        case "cg:CgMusicSpeaker":
            return CgMusicSpeaker;
        case "cg:CgMusic":
            return CgMusic;
        case "cg:CgNametag":
            return CgNametag;
        case "cg:CgNotes":
            return CgNotes;
        case "cg:CgNotifications":
            return CgNotifications;
        case "cg:CgNpm":
            return CgNpm;
        case "cg:CgOculus":
            return CgOculus;
        case "cg:CgOpenCollective":
            return CgOpenCollective;
        case "cg:CgOptions":
            return CgOptions;
        case "cg:CgOrganisation":
            return CgOrganisation;
        case "cg:CgOverflow":
            return CgOverflow;
        case "cg:CgPacman":
            return CgPacman;
        case "cg:CgPassword":
            return CgPassword;
        case "cg:CgPathBack":
            return CgPathBack;
        case "cg:CgPathCrop":
            return CgPathCrop;
        case "cg:CgPathDivide":
            return CgPathDivide;
        case "cg:CgPathExclude":
            return CgPathExclude;
        case "cg:CgPathFront":
            return CgPathFront;
        case "cg:CgPathIntersect":
            return CgPathIntersect;
        case "cg:CgPathOutline":
            return CgPathOutline;
        case "cg:CgPathTrim":
            return CgPathTrim;
        case "cg:CgPathUnite":
            return CgPathUnite;
        case "cg:CgPatreon":
            return CgPatreon;
        case "cg:CgPaypal":
            return CgPaypal;
        case "cg:CgPen":
            return CgPen;
        case "cg:CgPentagonBottomLeft":
            return CgPentagonBottomLeft;
        case "cg:CgPentagonBottomRight":
            return CgPentagonBottomRight;
        case "cg:CgPentagonDown":
            return CgPentagonDown;
        case "cg:CgPentagonLeft":
            return CgPentagonLeft;
        case "cg:CgPentagonRight":
            return CgPentagonRight;
        case "cg:CgPentagonTopLeft":
            return CgPentagonTopLeft;
        case "cg:CgPentagonTopRight":
            return CgPentagonTopRight;
        case "cg:CgPentagonUp":
            return CgPentagonUp;
        case "cg:CgPerformance":
            return CgPerformance;
        case "cg:CgPexels":
            return CgPexels;
        case "cg:CgPhone":
            return CgPhone;
        case "cg:CgPhotoscan":
            return CgPhotoscan;
        case "cg:CgPiano":
            return CgPiano;
        case "cg:CgPill":
            return CgPill;
        case "cg:CgPinAlt":
            return CgPinAlt;
        case "cg:CgPinBottom":
            return CgPinBottom;
        case "cg:CgPinTop":
            return CgPinTop;
        case "cg:CgPin":
            return CgPin;
        case "cg:CgPlayBackwards":
            return CgPlayBackwards;
        case "cg:CgPlayButtonO":
            return CgPlayButtonO;
        case "cg:CgPlayButtonR":
            return CgPlayButtonR;
        case "cg:CgPlayButton":
            return CgPlayButton;
        case "cg:CgPlayForwards":
            return CgPlayForwards;
        case "cg:CgPlayListAdd":
            return CgPlayListAdd;
        case "cg:CgPlayListCheck":
            return CgPlayListCheck;
        case "cg:CgPlayListRemove":
            return CgPlayListRemove;
        case "cg:CgPlayListSearch":
            return CgPlayListSearch;
        case "cg:CgPlayList":
            return CgPlayList;
        case "cg:CgPlayPauseO":
            return CgPlayPauseO;
        case "cg:CgPlayPauseR":
            return CgPlayPauseR;
        case "cg:CgPlayPause":
            return CgPlayPause;
        case "cg:CgPlayStopO":
            return CgPlayStopO;
        case "cg:CgPlayStopR":
            return CgPlayStopR;
        case "cg:CgPlayStop":
            return CgPlayStop;
        case "cg:CgPlayTrackNextO":
            return CgPlayTrackNextO;
        case "cg:CgPlayTrackNextR":
            return CgPlayTrackNextR;
        case "cg:CgPlayTrackNext":
            return CgPlayTrackNext;
        case "cg:CgPlayTrackPrevO":
            return CgPlayTrackPrevO;
        case "cg:CgPlayTrackPrevR":
            return CgPlayTrackPrevR;
        case "cg:CgPlayTrackPrev":
            return CgPlayTrackPrev;
        case "cg:CgPlug":
            return CgPlug;
        case "cg:CgPocket":
            return CgPocket;
        case "cg:CgPokemon":
            return CgPokemon;
        case "cg:CgPolaroid":
            return CgPolaroid;
        case "cg:CgPoll":
            return CgPoll;
        case "cg:CgPresentation":
            return CgPresentation;
        case "cg:CgPrinter":
            return CgPrinter;
        case "cg:CgProductHunt":
            return CgProductHunt;
        case "cg:CgProfile":
            return CgProfile;
        case "cg:CgPullClear":
            return CgPullClear;
        case "cg:CgPushChevronDownO":
            return CgPushChevronDownO;
        case "cg:CgPushChevronDownR":
            return CgPushChevronDownR;
        case "cg:CgPushChevronDown":
            return CgPushChevronDown;
        case "cg:CgPushChevronLeftO":
            return CgPushChevronLeftO;
        case "cg:CgPushChevronLeftR":
            return CgPushChevronLeftR;
        case "cg:CgPushChevronLeft":
            return CgPushChevronLeft;
        case "cg:CgPushChevronRightO":
            return CgPushChevronRightO;
        case "cg:CgPushChevronRightR":
            return CgPushChevronRightR;
        case "cg:CgPushChevronRight":
            return CgPushChevronRight;
        case "cg:CgPushChevronUpO":
            return CgPushChevronUpO;
        case "cg:CgPushChevronUpR":
            return CgPushChevronUpR;
        case "cg:CgPushChevronUp":
            return CgPushChevronUp;
        case "cg:CgPushDown":
            return CgPushDown;
        case "cg:CgPushLeft":
            return CgPushLeft;
        case "cg:CgPushRight":
            return CgPushRight;
        case "cg:CgPushUp":
            return CgPushUp;
        case "cg:CgQr":
            return CgQr;
        case "cg:CgQuoteO":
            return CgQuoteO;
        case "cg:CgQuote":
            return CgQuote;
        case "cg:CgRadioCheck":
            return CgRadioCheck;
        case "cg:CgRadioChecked":
            return CgRadioChecked;
        case "cg:CgRatio":
            return CgRatio;
        case "cg:CgRead":
            return CgRead;
        case "cg:CgReadme":
            return CgReadme;
        case "cg:CgRecord":
            return CgRecord;
        case "cg:CgRedo":
            return CgRedo;
        case "cg:CgRemote":
            return CgRemote;
        case "cg:CgRemoveR":
            return CgRemoveR;
        case "cg:CgRemove":
            return CgRemove;
        case "cg:CgRename":
            return CgRename;
        case "cg:CgReorder":
            return CgReorder;
        case "cg:CgRepeat":
            return CgRepeat;
        case "cg:CgRing":
            return CgRing;
        case "cg:CgRowFirst":
            return CgRowFirst;
        case "cg:CgRowLast":
            return CgRowLast;
        case "cg:CgRuler":
            return CgRuler;
        case "cg:CgSandClock":
            return CgSandClock;
        case "cg:CgScan":
            return CgScan;
        case "cg:CgScreenMirror":
            return CgScreenMirror;
        case "cg:CgScreenShot":
            return CgScreenShot;
        case "cg:CgScreenWide":
            return CgScreenWide;
        case "cg:CgScreen":
            return CgScreen;
        case "cg:CgScrollH":
            return CgScrollH;
        case "cg:CgScrollV":
            return CgScrollV;
        case "cg:CgSearchFound":
            return CgSearchFound;
        case "cg:CgSearchLoading":
            return CgSearchLoading;
        case "cg:CgSearch":
            return CgSearch;
        case "cg:CgSelectO":
            return CgSelectO;
        case "cg:CgSelectR":
            return CgSelectR;
        case "cg:CgSelect":
            return CgSelect;
        case "cg:CgServer":
            return CgServer;
        case "cg:CgServerless":
            return CgServerless;
        case "cg:CgShapeCircle":
            return CgShapeCircle;
        case "cg:CgShapeHalfCircle":
            return CgShapeHalfCircle;
        case "cg:CgShapeHexagon":
            return CgShapeHexagon;
        case "cg:CgShapeRhombus":
            return CgShapeRhombus;
        case "cg:CgShapeSquare":
            return CgShapeSquare;
        case "cg:CgShapeTriangle":
            return CgShapeTriangle;
        case "cg:CgShapeZigzag":
            return CgShapeZigzag;
        case "cg:CgShare":
            return CgShare;
        case "cg:CgShield":
            return CgShield;
        case "cg:CgShoppingBag":
            return CgShoppingBag;
        case "cg:CgShoppingCart":
            return CgShoppingCart;
        case "cg:CgShortcut":
            return CgShortcut;
        case "cg:CgShutterstock":
            return CgShutterstock;
        case "cg:CgSidebarOpen":
            return CgSidebarOpen;
        case "cg:CgSidebarRight":
            return CgSidebarRight;
        case "cg:CgSidebar":
            return CgSidebar;
        case "cg:CgSignal":
            return CgSignal;
        case "cg:CgSize":
            return CgSize;
        case "cg:CgSketch":
            return CgSketch;
        case "cg:CgSlack":
            return CgSlack;
        case "cg:CgSleep":
            return CgSleep;
        case "cg:CgSmartHomeBoiler":
            return CgSmartHomeBoiler;
        case "cg:CgSmartHomeCooker":
            return CgSmartHomeCooker;
        case "cg:CgSmartHomeHeat":
            return CgSmartHomeHeat;
        case "cg:CgSmartHomeLight":
            return CgSmartHomeLight;
        case "cg:CgSmartHomeRefrigerator":
            return CgSmartHomeRefrigerator;
        case "cg:CgSmartHomeWashMachine":
            return CgSmartHomeWashMachine;
        case "cg:CgSmartphoneChip":
            return CgSmartphoneChip;
        case "cg:CgSmartphoneRam":
            return CgSmartphoneRam;
        case "cg:CgSmartphoneShake":
            return CgSmartphoneShake;
        case "cg:CgSmartphone":
            return CgSmartphone;
        case "cg:CgSmileMouthOpen":
            return CgSmileMouthOpen;
        case "cg:CgSmileNeutral":
            return CgSmileNeutral;
        case "cg:CgSmileNoMouth":
            return CgSmileNoMouth;
        case "cg:CgSmileNone":
            return CgSmileNone;
        case "cg:CgSmileSad":
            return CgSmileSad;
        case "cg:CgSmileUpside":
            return CgSmileUpside;
        case "cg:CgSmile":
            return CgSmile;
        case "cg:CgSoftwareDownload":
            return CgSoftwareDownload;
        case "cg:CgSoftwareUpload":
            return CgSoftwareUpload;
        case "cg:CgSortAz":
            return CgSortAz;
        case "cg:CgSortZa":
            return CgSortZa;
        case "cg:CgSpaceBetweenV":
            return CgSpaceBetweenV;
        case "cg:CgSpaceBetween":
            return CgSpaceBetween;
        case "cg:CgSpectrum":
            return CgSpectrum;
        case "cg:CgSpinnerAlt":
            return CgSpinnerAlt;
        case "cg:CgSpinnerTwoAlt":
            return CgSpinnerTwoAlt;
        case "cg:CgSpinnerTwo":
            return CgSpinnerTwo;
        case "cg:CgSpinner":
            return CgSpinner;
        case "cg:CgSquare":
            return CgSquare;
        case "cg:CgStack":
            return CgStack;
        case "cg:CgStark":
            return CgStark;
        case "cg:CgStopwatch":
            return CgStopwatch;
        case "cg:CgStories":
            return CgStories;
        case "cg:CgStudio":
            return CgStudio;
        case "cg:CgStyle":
            return CgStyle;
        case "cg:CgSun":
            return CgSun;
        case "cg:CgSupport":
            return CgSupport;
        case "cg:CgSwapVertical":
            return CgSwapVertical;
        case "cg:CgSwap":
            return CgSwap;
        case "cg:CgSweden":
            return CgSweden;
        case "cg:CgSwiss":
            return CgSwiss;
        case "cg:CgSync":
            return CgSync;
        case "cg:CgTab":
            return CgTab;
        case "cg:CgTag":
            return CgTag;
        case "cg:CgTally":
            return CgTally;
        case "cg:CgTapDouble":
            return CgTapDouble;
        case "cg:CgTapSingle":
            return CgTapSingle;
        case "cg:CgTemplate":
            return CgTemplate;
        case "cg:CgTennis":
            return CgTennis;
        case "cg:CgTerminal":
            return CgTerminal;
        case "cg:CgTerrain":
            return CgTerrain;
        case "cg:CgThermometer":
            return CgThermometer;
        case "cg:CgThermostat":
            return CgThermostat;
        case "cg:CgTikcode":
            return CgTikcode;
        case "cg:CgTime":
            return CgTime;
        case "cg:CgTimelapse":
            return CgTimelapse;
        case "cg:CgTimer":
            return CgTimer;
        case "cg:CgToday":
            return CgToday;
        case "cg:CgToggleOff":
            return CgToggleOff;
        case "cg:CgToggleOn":
            return CgToggleOn;
        case "cg:CgToggleSquareOff":
            return CgToggleSquareOff;
        case "cg:CgToggleSquare":
            return CgToggleSquare;
        case "cg:CgToolbarBottom":
            return CgToolbarBottom;
        case "cg:CgToolbarLeft":
            return CgToolbarLeft;
        case "cg:CgToolbarRight":
            return CgToolbarRight;
        case "cg:CgToolbarTop":
            return CgToolbarTop;
        case "cg:CgToolbox":
            return CgToolbox;
        case "cg:CgTouchpad":
            return CgTouchpad;
        case "cg:CgTrack":
            return CgTrack;
        case "cg:CgTranscript":
            return CgTranscript;
        case "cg:CgTrashEmpty":
            return CgTrashEmpty;
        case "cg:CgTrash":
            return CgTrash;
        case "cg:CgTree":
            return CgTree;
        case "cg:CgTrees":
            return CgTrees;
        case "cg:CgTrello":
            return CgTrello;
        case "cg:CgTrendingDown":
            return CgTrendingDown;
        case "cg:CgTrending":
            return CgTrending;
        case "cg:CgTrophy":
            return CgTrophy;
        case "cg:CgTv":
            return CgTv;
        case "cg:CgTwilio":
            return CgTwilio;
        case "cg:CgTwitter":
            return CgTwitter;
        case "cg:CgUiKit":
            return CgUiKit;
        case "cg:CgUmbrella":
            return CgUmbrella;
        case "cg:CgUnavailable":
            return CgUnavailable;
        case "cg:CgUnblock":
            return CgUnblock;
        case "cg:CgUndo":
            return CgUndo;
        case "cg:CgUnfold":
            return CgUnfold;
        case "cg:CgUnsplash":
            return CgUnsplash;
        case "cg:CgUsbC":
            return CgUsbC;
        case "cg:CgUsb":
            return CgUsb;
        case "cg:CgUserAdd":
            return CgUserAdd;
        case "cg:CgUserList":
            return CgUserList;
        case "cg:CgUserRemove":
            return CgUserRemove;
        case "cg:CgUser":
            return CgUser;
        case "cg:CgUserlane":
            return CgUserlane;
        case "cg:CgVercel":
            return CgVercel;
        case "cg:CgViewCols":
            return CgViewCols;
        case "cg:CgViewComfortable":
            return CgViewComfortable;
        case "cg:CgViewDay":
            return CgViewDay;
        case "cg:CgViewGrid":
            return CgViewGrid;
        case "cg:CgViewList":
            return CgViewList;
        case "cg:CgViewMonth":
            return CgViewMonth;
        case "cg:CgViewSplit":
            return CgViewSplit;
        case "cg:CgVinyl":
            return CgVinyl;
        case "cg:CgVoicemailO":
            return CgVoicemailO;
        case "cg:CgVoicemailR":
            return CgVoicemailR;
        case "cg:CgVoicemail":
            return CgVoicemail;
        case "cg:CgVolume":
            return CgVolume;
        case "cg:CgWebcam":
            return CgWebcam;
        case "cg:CgWebsite":
            return CgWebsite;
        case "cg:CgWindows":
            return CgWindows;
        case "cg:CgWorkAlt":
            return CgWorkAlt;
        case "cg:CgYinyang":
            return CgYinyang;
        case "cg:CgYoutube":
            return CgYoutube;
        case "cg:CgZoomIn":
            return CgZoomIn;
        case "cg:CgZoomOut":
            return CgZoomOut;
    }
}
