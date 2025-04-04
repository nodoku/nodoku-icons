import type {IconType} from "react-icons";

import {
    LuAArrowDown,
    LuAArrowUp,
    LuALargeSmall,
    LuAccessibility,
    LuActivity,
    LuAirVent,
    LuAirplay,
    LuAlarmClockCheck,
    LuAlarmClockMinus,
    LuAlarmClockOff,
    LuAlarmClockPlus,
    LuAlarmClock,
    LuAlarmSmoke,
    LuAlbum,
    LuAlignCenterHorizontal,
    LuAlignCenterVertical,
    LuAlignCenter,
    LuAlignEndHorizontal,
    LuAlignEndVertical,
    LuAlignHorizontalDistributeCenter,
    LuAlignHorizontalDistributeEnd,
    LuAlignHorizontalDistributeStart,
    LuAlignHorizontalJustifyCenter,
    LuAlignHorizontalJustifyEnd,
    LuAlignHorizontalJustifyStart,
    LuAlignHorizontalSpaceAround,
    LuAlignHorizontalSpaceBetween,
    LuAlignJustify,
    LuAlignLeft,
    LuAlignRight,
    LuAlignStartHorizontal,
    LuAlignStartVertical,
    LuAlignVerticalDistributeCenter,
    LuAlignVerticalDistributeEnd,
    LuAlignVerticalDistributeStart,
    LuAlignVerticalJustifyCenter,
    LuAlignVerticalJustifyEnd,
    LuAlignVerticalJustifyStart,
    LuAlignVerticalSpaceAround,
    LuAlignVerticalSpaceBetween,
    LuAmbulance,
    LuAmpersand,
    LuAmpersands,
    LuAmphora,
    LuAnchor,
    LuAngry,
    LuAnnoyed,
    LuAntenna,
    LuAnvil,
    LuAperture,
    LuAppWindowMac,
    LuAppWindow,
    LuApple,
    LuArchiveRestore,
    LuArchiveX,
    LuArchive,
    LuArmchair,
    LuArrowBigDownDash,
    LuArrowBigDown,
    LuArrowBigLeftDash,
    LuArrowBigLeft,
    LuArrowBigRightDash,
    LuArrowBigRight,
    LuArrowBigUpDash,
    LuArrowBigUp,
    LuArrowDown01,
    LuArrowDown10,
    LuArrowDownAZ,
    LuArrowDownFromLine,
    LuArrowDownLeft,
    LuArrowDownNarrowWide,
    LuArrowDownRight,
    LuArrowDownToDot,
    LuArrowDownToLine,
    LuArrowDownUp,
    LuArrowDownWideNarrow,
    LuArrowDownZA,
    LuArrowDown,
    LuArrowLeftFromLine,
    LuArrowLeftRight,
    LuArrowLeftToLine,
    LuArrowLeft,
    LuArrowRightFromLine,
    LuArrowRightLeft,
    LuArrowRightToLine,
    LuArrowRight,
    LuArrowUp01,
    LuArrowUp10,
    LuArrowUpAZ,
    LuArrowUpDown,
    LuArrowUpFromDot,
    LuArrowUpFromLine,
    LuArrowUpLeft,
    LuArrowUpNarrowWide,
    LuArrowUpRight,
    LuArrowUpToLine,
    LuArrowUpWideNarrow,
    LuArrowUpZA,
    LuArrowUp,
    LuArrowsUpFromLine,
    LuAsterisk,
    LuAtSign,
    LuAtom,
    LuAudioLines,
    LuAudioWaveform,
    LuAward,
    LuAxe,
    LuAxis3D,
    LuBaby,
    LuBackpack,
    LuBadgeAlert,
    LuBadgeCent,
    LuBadgeCheck,
    LuBadgeDollarSign,
    LuBadgeEuro,
    LuBadgeHelp,
    LuBadgeIndianRupee,
    LuBadgeInfo,
    LuBadgeJapaneseYen,
    LuBadgeMinus,
    LuBadgePercent,
    LuBadgePlus,
    LuBadgePoundSterling,
    LuBadgeRussianRuble,
    LuBadgeSwissFranc,
    LuBadgeX,
    LuBadge,
    LuBaggageClaim,
    LuBan,
    LuBanana,
    LuBandage,
    LuBanknote,
    LuBarcode,
    LuBaseline,
    LuBath,
    LuBatteryCharging,
    LuBatteryFull,
    LuBatteryLow,
    LuBatteryMedium,
    LuBatteryWarning,
    LuBattery,
    LuBeaker,
    LuBeanOff,
    LuBean,
    LuBedDouble,
    LuBedSingle,
    LuBed,
    LuBeef,
    LuBeerOff,
    LuBeer,
    LuBellDot,
    LuBellElectric,
    LuBellMinus,
    LuBellOff,
    LuBellPlus,
    LuBellRing,
    LuBell,
    LuBetweenHorizontalEnd,
    LuBetweenHorizontalStart,
    LuBetweenVerticalEnd,
    LuBetweenVerticalStart,
    LuBicepsFlexed,
    LuBike,
    LuBinary,
    LuBinoculars,
    LuBiohazard,
    LuBird,
    LuBitcoin,
    LuBlend,
    LuBlinds,
    LuBlocks,
    LuBluetoothConnected,
    LuBluetoothOff,
    LuBluetoothSearching,
    LuBluetooth,
    LuBold,
    LuBolt,
    LuBomb,
    LuBone,
    LuBookA,
    LuBookAudio,
    LuBookCheck,
    LuBookCopy,
    LuBookDashed,
    LuBookDown,
    LuBookHeadphones,
    LuBookHeart,
    LuBookImage,
    LuBookKey,
    LuBookLock,
    LuBookMarked,
    LuBookMinus,
    LuBookOpenCheck,
    LuBookOpenText,
    LuBookOpen,
    LuBookPlus,
    LuBookText,
    LuBookType,
    LuBookUp2,
    LuBookUp,
    LuBookUser,
    LuBookX,
    LuBook,
    LuBookmarkCheck,
    LuBookmarkMinus,
    LuBookmarkPlus,
    LuBookmarkX,
    LuBookmark,
    LuBoomBox,
    LuBotMessageSquare,
    LuBotOff,
    LuBot,
    LuBox,
    LuBoxes,
    LuBraces,
    LuBrackets,
    LuBrainCircuit,
    LuBrainCog,
    LuBrain,
    LuBrickWall,
    LuBriefcaseBusiness,
    LuBriefcaseConveyorBelt,
    LuBriefcaseMedical,
    LuBriefcase,
    LuBringToFront,
    LuBrush,
    LuBugOff,
    LuBugPlay,
    LuBug,
    LuBuilding2,
    LuBuilding,
    LuBusFront,
    LuBus,
    LuCableCar,
    LuCable,
    LuCakeSlice,
    LuCake,
    LuCalculator,
    LuCalendar1,
    LuCalendarArrowDown,
    LuCalendarArrowUp,
    LuCalendarCheck2,
    LuCalendarCheck,
    LuCalendarClock,
    LuCalendarCog,
    LuCalendarDays,
    LuCalendarFold,
    LuCalendarHeart,
    LuCalendarMinus2,
    LuCalendarMinus,
    LuCalendarOff,
    LuCalendarPlus2,
    LuCalendarPlus,
    LuCalendarRange,
    LuCalendarSearch,
    LuCalendarSync,
    LuCalendarX2,
    LuCalendarX,
    LuCalendar,
    LuCameraOff,
    LuCamera,
    LuCandyCane,
    LuCandyOff,
    LuCandy,
    LuCannabis,
    LuCaptionsOff,
    LuCaptions,
    LuCarFront,
    LuCarTaxiFront,
    LuCar,
    LuCaravan,
    LuCarrot,
    LuCaseLower,
    LuCaseSensitive,
    LuCaseUpper,
    LuCassetteTape,
    LuCast,
    LuCastle,
    LuCat,
    LuCctv,
    LuChartArea,
    LuChartBarBig,
    LuChartBarDecreasing,
    LuChartBarIncreasing,
    LuChartBarStacked,
    LuChartBar,
    LuChartCandlestick,
    LuChartColumnBig,
    LuChartColumnDecreasing,
    LuChartColumnIncreasing,
    LuChartColumnStacked,
    LuChartColumn,
    LuChartGantt,
    LuChartLine,
    LuChartNetwork,
    LuChartNoAxesColumnDecreasing,
    LuChartNoAxesColumnIncreasing,
    LuChartNoAxesColumn,
    LuChartNoAxesCombined,
    LuChartNoAxesGantt,
    LuChartPie,
    LuChartScatter,
    LuChartSpline,
    LuCheckCheck,
    LuCheck,
    LuChefHat,
    LuCherry,
    LuChevronDown,
    LuChevronFirst,
    LuChevronLast,
    LuChevronLeft,
    LuChevronRight,
    LuChevronUp,
    LuChevronsDownUp,
    LuChevronsDown,
    LuChevronsLeftRightEllipsis,
    LuChevronsLeftRight,
    LuChevronsLeft,
    LuChevronsRightLeft,
    LuChevronsRight,
    LuChevronsUpDown,
    LuChevronsUp,
    LuChrome,
    LuChurch,
    LuCigaretteOff,
    LuCigarette,
    LuCircleAlert,
    LuCircleArrowDown,
    LuCircleArrowLeft,
    LuCircleArrowOutDownLeft,
    LuCircleArrowOutDownRight,
    LuCircleArrowOutUpLeft,
    LuCircleArrowOutUpRight,
    LuCircleArrowRight,
    LuCircleArrowUp,
    LuCircleCheckBig,
    LuCircleCheck,
    LuCircleChevronDown,
    LuCircleChevronLeft,
    LuCircleChevronRight,
    LuCircleChevronUp,
    LuCircleDashed,
    LuCircleDivide,
    LuCircleDollarSign,
    LuCircleDotDashed,
    LuCircleDot,
    LuCircleEllipsis,
    LuCircleEqual,
    LuCircleFadingArrowUp,
    LuCircleFadingPlus,
    LuCircleGauge,
    LuCircleHelp,
    LuCircleMinus,
    LuCircleOff,
    LuCircleParkingOff,
    LuCircleParking,
    LuCirclePause,
    LuCirclePercent,
    LuCirclePlay,
    LuCirclePlus,
    LuCirclePower,
    LuCircleSlash2,
    LuCircleSlash,
    LuCircleStop,
    LuCircleUserRound,
    LuCircleUser,
    LuCircleX,
    LuCircle,
    LuCircuitBoard,
    LuCitrus,
    LuClapperboard,
    LuClipboardCheck,
    LuClipboardCopy,
    LuClipboardList,
    LuClipboardMinus,
    LuClipboardPaste,
    LuClipboardPenLine,
    LuClipboardPen,
    LuClipboardPlus,
    LuClipboardType,
    LuClipboardX,
    LuClipboard,
    LuClock1,
    LuClock10,
    LuClock11,
    LuClock12,
    LuClock2,
    LuClock3,
    LuClock4,
    LuClock5,
    LuClock6,
    LuClock7,
    LuClock8,
    LuClock9,
    LuClockAlert,
    LuClockArrowDown,
    LuClockArrowUp,
    LuClock,
    LuCloudAlert,
    LuCloudCog,
    LuCloudDownload,
    LuCloudDrizzle,
    LuCloudFog,
    LuCloudHail,
    LuCloudLightning,
    LuCloudMoonRain,
    LuCloudMoon,
    LuCloudOff,
    LuCloudRainWind,
    LuCloudRain,
    LuCloudSnow,
    LuCloudSunRain,
    LuCloudSun,
    LuCloudUpload,
    LuCloud,
    LuCloudy,
    LuClover,
    LuClub,
    LuCodeXml,
    LuCode,
    LuCodepen,
    LuCodesandbox,
    LuCoffee,
    LuCog,
    LuCoins,
    LuColumns2,
    LuColumns3,
    LuColumns4,
    LuCombine,
    LuCommand,
    LuCompass,
    LuComponent,
    LuComputer,
    LuConciergeBell,
    LuCone,
    LuConstruction,
    LuContactRound,
    LuContact,
    LuContainer,
    LuContrast,
    LuCookie,
    LuCookingPot,
    LuCopyCheck,
    LuCopyMinus,
    LuCopyPlus,
    LuCopySlash,
    LuCopyX,
    LuCopy,
    LuCopyleft,
    LuCopyright,
    LuCornerDownLeft,
    LuCornerDownRight,
    LuCornerLeftDown,
    LuCornerLeftUp,
    LuCornerRightDown,
    LuCornerRightUp,
    LuCornerUpLeft,
    LuCornerUpRight,
    LuCpu,
    LuCreativeCommons,
    LuCreditCard,
    LuCroissant,
    LuCrop,
    LuCross,
    LuCrosshair,
    LuCrown,
    LuCuboid,
    LuCupSoda,
    LuCurrency,
    LuCylinder,
    LuDam,
    LuDatabaseBackup,
    LuDatabaseZap,
    LuDatabase,
    LuDelete,
    LuDessert,
    LuDiameter,
    LuDiamondMinus,
    LuDiamondPercent,
    LuDiamondPlus,
    LuDiamond,
    LuDice1,
    LuDice2,
    LuDice3,
    LuDice4,
    LuDice5,
    LuDice6,
    LuDices,
    LuDiff,
    LuDisc2,
    LuDisc3,
    LuDiscAlbum,
    LuDisc,
    LuDivide,
    LuDnaOff,
    LuDna,
    LuDock,
    LuDog,
    LuDollarSign,
    LuDonut,
    LuDoorClosed,
    LuDoorOpen,
    LuDot,
    LuDownload,
    LuDraftingCompass,
    LuDrama,
    LuDribbble,
    LuDrill,
    LuDroplet,
    LuDroplets,
    LuDrum,
    LuDrumstick,
    LuDumbbell,
    LuEarOff,
    LuEar,
    LuEarthLock,
    LuEarth,
    LuEclipse,
    LuEggFried,
    LuEggOff,
    LuEgg,
    LuEllipsisVertical,
    LuEllipsis,
    LuEqualApproximately,
    LuEqualNot,
    LuEqual,
    LuEraser,
    LuEthernetPort,
    LuEuro,
    LuExpand,
    LuExternalLink,
    LuEyeClosed,
    LuEyeOff,
    LuEye,
    LuFacebook,
    LuFactory,
    LuFan,
    LuFastForward,
    LuFeather,
    LuFence,
    LuFerrisWheel,
    LuFigma,
    LuFileArchive,
    LuFileAudio2,
    LuFileAudio,
    LuFileAxis3D,
    LuFileBadge2,
    LuFileBadge,
    LuFileBox,
    LuFileChartColumnIncreasing,
    LuFileChartColumn,
    LuFileChartLine,
    LuFileChartPie,
    LuFileCheck2,
    LuFileCheck,
    LuFileClock,
    LuFileCode2,
    LuFileCode,
    LuFileCog,
    LuFileDiff,
    LuFileDigit,
    LuFileDown,
    LuFileHeart,
    LuFileImage,
    LuFileInput,
    LuFileJson2,
    LuFileJson,
    LuFileKey2,
    LuFileKey,
    LuFileLock2,
    LuFileLock,
    LuFileMinus2,
    LuFileMinus,
    LuFileMusic,
    LuFileOutput,
    LuFilePenLine,
    LuFilePen,
    LuFilePlus2,
    LuFilePlus,
    LuFileQuestion,
    LuFileScan,
    LuFileSearch2,
    LuFileSearch,
    LuFileSliders,
    LuFileSpreadsheet,
    LuFileStack,
    LuFileSymlink,
    LuFileTerminal,
    LuFileText,
    LuFileType2,
    LuFileType,
    LuFileUp,
    LuFileUser,
    LuFileVideo2,
    LuFileVideo,
    LuFileVolume2,
    LuFileVolume,
    LuFileWarning,
    LuFileX2,
    LuFileX,
    LuFile,
    LuFiles,
    LuFilm,
    LuFilterX,
    LuFilter,
    LuFingerprint,
    LuFireExtinguisher,
    LuFishOff,
    LuFishSymbol,
    LuFish,
    LuFlagOff,
    LuFlagTriangleLeft,
    LuFlagTriangleRight,
    LuFlag,
    LuFlameKindling,
    LuFlame,
    LuFlashlightOff,
    LuFlashlight,
    LuFlaskConicalOff,
    LuFlaskConical,
    LuFlaskRound,
    LuFlipHorizontal2,
    LuFlipHorizontal,
    LuFlipVertical2,
    LuFlipVertical,
    LuFlower2,
    LuFlower,
    LuFocus,
    LuFoldHorizontal,
    LuFoldVertical,
    LuFolderArchive,
    LuFolderCheck,
    LuFolderClock,
    LuFolderClosed,
    LuFolderCode,
    LuFolderCog,
    LuFolderDot,
    LuFolderDown,
    LuFolderGit2,
    LuFolderGit,
    LuFolderHeart,
    LuFolderInput,
    LuFolderKanban,
    LuFolderKey,
    LuFolderLock,
    LuFolderMinus,
    LuFolderOpenDot,
    LuFolderOpen,
    LuFolderOutput,
    LuFolderPen,
    LuFolderPlus,
    LuFolderRoot,
    LuFolderSearch2,
    LuFolderSearch,
    LuFolderSymlink,
    LuFolderSync,
    LuFolderTree,
    LuFolderUp,
    LuFolderX,
    LuFolder,
    LuFolders,
    LuFootprints,
    LuForklift,
    LuForward,
    LuFrame,
    LuFramer,
    LuFrown,
    LuFuel,
    LuFullscreen,
    LuGalleryHorizontalEnd,
    LuGalleryHorizontal,
    LuGalleryThumbnails,
    LuGalleryVerticalEnd,
    LuGalleryVertical,
    LuGamepad2,
    LuGamepad,
    LuGauge,
    LuGavel,
    LuGem,
    LuGhost,
    LuGift,
    LuGitBranchPlus,
    LuGitBranch,
    LuGitCommitHorizontal,
    LuGitCommitVertical,
    LuGitCompareArrows,
    LuGitCompare,
    LuGitFork,
    LuGitGraph,
    LuGitMerge,
    LuGitPullRequestArrow,
    LuGitPullRequestClosed,
    LuGitPullRequestCreateArrow,
    LuGitPullRequestCreate,
    LuGitPullRequestDraft,
    LuGitPullRequest,
    LuGithub,
    LuGitlab,
    LuGlassWater,
    LuGlasses,
    LuGlobeLock,
    LuGlobe,
    LuGoal,
    LuGrab,
    LuGraduationCap,
    LuGrape,
    LuGrid2X2Check,
    LuGrid2X2Plus,
    LuGrid2X2X,
    LuGrid2X2,
    LuGrid3X3,
    LuGripHorizontal,
    LuGripVertical,
    LuGrip,
    LuGroup,
    LuGuitar,
    LuHam,
    LuHammer,
    LuHandCoins,
    LuHandHeart,
    LuHandHelping,
    LuHandMetal,
    LuHandPlatter,
    LuHand,
    LuHandshake,
    LuHardDriveDownload,
    LuHardDriveUpload,
    LuHardDrive,
    LuHardHat,
    LuHash,
    LuHaze,
    LuHdmiPort,
    LuHeading1,
    LuHeading2,
    LuHeading3,
    LuHeading4,
    LuHeading5,
    LuHeading6,
    LuHeading,
    LuHeadphoneOff,
    LuHeadphones,
    LuHeadset,
    LuHeartCrack,
    LuHeartHandshake,
    LuHeartOff,
    LuHeartPulse,
    LuHeart,
    LuHeater,
    LuHexagon,
    LuHighlighter,
    LuHistory,
    LuHopOff,
    LuHop,
    LuHospital,
    LuHotel,
    LuHourglass,
    LuHousePlug,
    LuHousePlus,
    LuHouse,
    LuIceCreamBowl,
    LuIceCreamCone,
    LuIdCard,
    LuImageDown,
    LuImageMinus,
    LuImageOff,
    LuImagePlay,
    LuImagePlus,
    LuImageUp,
    LuImageUpscale,
    LuImage,
    LuImages,
    LuImport,
    LuInbox,
    LuIndentDecrease,
    LuIndentIncrease,
    LuIndianRupee,
    LuInfinity,
    LuInfo,
    LuInspectionPanel,
    LuInstagram,
    LuItalic,
    LuIterationCcw,
    LuIterationCw,
    LuJapaneseYen,
    LuJoystick,
    LuKanban,
    LuKeyRound,
    LuKeySquare,
    LuKey,
    LuKeyboardMusic,
    LuKeyboardOff,
    LuKeyboard,
    LuLampCeiling,
    LuLampDesk,
    LuLampFloor,
    LuLampWallDown,
    LuLampWallUp,
    LuLamp,
    LuLandPlot,
    LuLandmark,
    LuLanguages,
    LuLaptopMinimalCheck,
    LuLaptopMinimal,
    LuLaptop,
    LuLassoSelect,
    LuLasso,
    LuLaugh,
    LuLayers2,
    LuLayers3,
    LuLayers,
    LuLayoutDashboard,
    LuLayoutGrid,
    LuLayoutList,
    LuLayoutPanelLeft,
    LuLayoutPanelTop,
    LuLayoutTemplate,
    LuLeaf,
    LuLeafyGreen,
    LuLectern,
    LuLetterText,
    LuLibraryBig,
    LuLibrary,
    LuLifeBuoy,
    LuLigature,
    LuLightbulbOff,
    LuLightbulb,
    LuLink2Off,
    LuLink2,
    LuLink,
    LuLinkedin,
    LuListCheck,
    LuListChecks,
    LuListCollapse,
    LuListEnd,
    LuListFilter,
    LuListMinus,
    LuListMusic,
    LuListOrdered,
    LuListPlus,
    LuListRestart,
    LuListStart,
    LuListTodo,
    LuListTree,
    LuListVideo,
    LuListX,
    LuList,
    LuLoaderCircle,
    LuLoaderPinwheel,
    LuLoader,
    LuLocateFixed,
    LuLocateOff,
    LuLocate,
    LuLockKeyholeOpen,
    LuLockKeyhole,
    LuLockOpen,
    LuLock,
    LuLogIn,
    LuLogOut,
    LuLogs,
    LuLollipop,
    LuLuggage,
    LuMagnet,
    LuMailCheck,
    LuMailMinus,
    LuMailOpen,
    LuMailPlus,
    LuMailQuestion,
    LuMailSearch,
    LuMailWarning,
    LuMailX,
    LuMail,
    LuMailbox,
    LuMails,
    LuMapPinCheckInside,
    LuMapPinCheck,
    LuMapPinHouse,
    LuMapPinMinusInside,
    LuMapPinMinus,
    LuMapPinOff,
    LuMapPinPlusInside,
    LuMapPinPlus,
    LuMapPinXInside,
    LuMapPinX,
    LuMapPin,
    LuMapPinned,
    LuMap,
    LuMartini,
    LuMaximize2,
    LuMaximize,
    LuMedal,
    LuMegaphoneOff,
    LuMegaphone,
    LuMeh,
    LuMemoryStick,
    LuMenu,
    LuMerge,
    LuMessageCircleCode,
    LuMessageCircleDashed,
    LuMessageCircleHeart,
    LuMessageCircleMore,
    LuMessageCircleOff,
    LuMessageCirclePlus,
    LuMessageCircleQuestion,
    LuMessageCircleReply,
    LuMessageCircleWarning,
    LuMessageCircleX,
    LuMessageCircle,
    LuMessageSquareCode,
    LuMessageSquareDashed,
    LuMessageSquareDiff,
    LuMessageSquareDot,
    LuMessageSquareHeart,
    LuMessageSquareLock,
    LuMessageSquareMore,
    LuMessageSquareOff,
    LuMessageSquarePlus,
    LuMessageSquareQuote,
    LuMessageSquareReply,
    LuMessageSquareShare,
    LuMessageSquareText,
    LuMessageSquareWarning,
    LuMessageSquareX,
    LuMessageSquare,
    LuMessagesSquare,
    LuMicOff,
    LuMicVocal,
    LuMic,
    LuMicrochip,
    LuMicroscope,
    LuMicrowave,
    LuMilestone,
    LuMilkOff,
    LuMilk,
    LuMinimize2,
    LuMinimize,
    LuMinus,
    LuMonitorCheck,
    LuMonitorCog,
    LuMonitorDot,
    LuMonitorDown,
    LuMonitorOff,
    LuMonitorPause,
    LuMonitorPlay,
    LuMonitorSmartphone,
    LuMonitorSpeaker,
    LuMonitorStop,
    LuMonitorUp,
    LuMonitorX,
    LuMonitor,
    LuMoonStar,
    LuMoon,
    LuMountainSnow,
    LuMountain,
    LuMouseOff,
    LuMousePointer2,
    LuMousePointerBan,
    LuMousePointerClick,
    LuMousePointer,
    LuMouse,
    LuMove3D,
    LuMoveDiagonal2,
    LuMoveDiagonal,
    LuMoveDownLeft,
    LuMoveDownRight,
    LuMoveDown,
    LuMoveHorizontal,
    LuMoveLeft,
    LuMoveRight,
    LuMoveUpLeft,
    LuMoveUpRight,
    LuMoveUp,
    LuMoveVertical,
    LuMove,
    LuMusic2,
    LuMusic3,
    LuMusic4,
    LuMusic,
    LuNavigation2Off,
    LuNavigation2,
    LuNavigationOff,
    LuNavigation,
    LuNetwork,
    LuNewspaper,
    LuNfc,
    LuNotebookPen,
    LuNotebookTabs,
    LuNotebookText,
    LuNotebook,
    LuNotepadTextDashed,
    LuNotepadText,
    LuNutOff,
    LuNut,
    LuOctagonAlert,
    LuOctagonMinus,
    LuOctagonPause,
    LuOctagonX,
    LuOctagon,
    LuOmega,
    LuOption,
    LuOrbit,
} from "react-icons/lu"

export function nameToReactIcon_lu_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "lu:LuAArrowDown":
            return LuAArrowDown;
        case "lu:LuAArrowUp":
            return LuAArrowUp;
        case "lu:LuALargeSmall":
            return LuALargeSmall;
        case "lu:LuAccessibility":
            return LuAccessibility;
        case "lu:LuActivity":
            return LuActivity;
        case "lu:LuAirVent":
            return LuAirVent;
        case "lu:LuAirplay":
            return LuAirplay;
        case "lu:LuAlarmClockCheck":
            return LuAlarmClockCheck;
        case "lu:LuAlarmClockMinus":
            return LuAlarmClockMinus;
        case "lu:LuAlarmClockOff":
            return LuAlarmClockOff;
        case "lu:LuAlarmClockPlus":
            return LuAlarmClockPlus;
        case "lu:LuAlarmClock":
            return LuAlarmClock;
        case "lu:LuAlarmSmoke":
            return LuAlarmSmoke;
        case "lu:LuAlbum":
            return LuAlbum;
        case "lu:LuAlignCenterHorizontal":
            return LuAlignCenterHorizontal;
        case "lu:LuAlignCenterVertical":
            return LuAlignCenterVertical;
        case "lu:LuAlignCenter":
            return LuAlignCenter;
        case "lu:LuAlignEndHorizontal":
            return LuAlignEndHorizontal;
        case "lu:LuAlignEndVertical":
            return LuAlignEndVertical;
        case "lu:LuAlignHorizontalDistributeCenter":
            return LuAlignHorizontalDistributeCenter;
        case "lu:LuAlignHorizontalDistributeEnd":
            return LuAlignHorizontalDistributeEnd;
        case "lu:LuAlignHorizontalDistributeStart":
            return LuAlignHorizontalDistributeStart;
        case "lu:LuAlignHorizontalJustifyCenter":
            return LuAlignHorizontalJustifyCenter;
        case "lu:LuAlignHorizontalJustifyEnd":
            return LuAlignHorizontalJustifyEnd;
        case "lu:LuAlignHorizontalJustifyStart":
            return LuAlignHorizontalJustifyStart;
        case "lu:LuAlignHorizontalSpaceAround":
            return LuAlignHorizontalSpaceAround;
        case "lu:LuAlignHorizontalSpaceBetween":
            return LuAlignHorizontalSpaceBetween;
        case "lu:LuAlignJustify":
            return LuAlignJustify;
        case "lu:LuAlignLeft":
            return LuAlignLeft;
        case "lu:LuAlignRight":
            return LuAlignRight;
        case "lu:LuAlignStartHorizontal":
            return LuAlignStartHorizontal;
        case "lu:LuAlignStartVertical":
            return LuAlignStartVertical;
        case "lu:LuAlignVerticalDistributeCenter":
            return LuAlignVerticalDistributeCenter;
        case "lu:LuAlignVerticalDistributeEnd":
            return LuAlignVerticalDistributeEnd;
        case "lu:LuAlignVerticalDistributeStart":
            return LuAlignVerticalDistributeStart;
        case "lu:LuAlignVerticalJustifyCenter":
            return LuAlignVerticalJustifyCenter;
        case "lu:LuAlignVerticalJustifyEnd":
            return LuAlignVerticalJustifyEnd;
        case "lu:LuAlignVerticalJustifyStart":
            return LuAlignVerticalJustifyStart;
        case "lu:LuAlignVerticalSpaceAround":
            return LuAlignVerticalSpaceAround;
        case "lu:LuAlignVerticalSpaceBetween":
            return LuAlignVerticalSpaceBetween;
        case "lu:LuAmbulance":
            return LuAmbulance;
        case "lu:LuAmpersand":
            return LuAmpersand;
        case "lu:LuAmpersands":
            return LuAmpersands;
        case "lu:LuAmphora":
            return LuAmphora;
        case "lu:LuAnchor":
            return LuAnchor;
        case "lu:LuAngry":
            return LuAngry;
        case "lu:LuAnnoyed":
            return LuAnnoyed;
        case "lu:LuAntenna":
            return LuAntenna;
        case "lu:LuAnvil":
            return LuAnvil;
        case "lu:LuAperture":
            return LuAperture;
        case "lu:LuAppWindowMac":
            return LuAppWindowMac;
        case "lu:LuAppWindow":
            return LuAppWindow;
        case "lu:LuApple":
            return LuApple;
        case "lu:LuArchiveRestore":
            return LuArchiveRestore;
        case "lu:LuArchiveX":
            return LuArchiveX;
        case "lu:LuArchive":
            return LuArchive;
        case "lu:LuArmchair":
            return LuArmchair;
        case "lu:LuArrowBigDownDash":
            return LuArrowBigDownDash;
        case "lu:LuArrowBigDown":
            return LuArrowBigDown;
        case "lu:LuArrowBigLeftDash":
            return LuArrowBigLeftDash;
        case "lu:LuArrowBigLeft":
            return LuArrowBigLeft;
        case "lu:LuArrowBigRightDash":
            return LuArrowBigRightDash;
        case "lu:LuArrowBigRight":
            return LuArrowBigRight;
        case "lu:LuArrowBigUpDash":
            return LuArrowBigUpDash;
        case "lu:LuArrowBigUp":
            return LuArrowBigUp;
        case "lu:LuArrowDown01":
            return LuArrowDown01;
        case "lu:LuArrowDown10":
            return LuArrowDown10;
        case "lu:LuArrowDownAZ":
            return LuArrowDownAZ;
        case "lu:LuArrowDownFromLine":
            return LuArrowDownFromLine;
        case "lu:LuArrowDownLeft":
            return LuArrowDownLeft;
        case "lu:LuArrowDownNarrowWide":
            return LuArrowDownNarrowWide;
        case "lu:LuArrowDownRight":
            return LuArrowDownRight;
        case "lu:LuArrowDownToDot":
            return LuArrowDownToDot;
        case "lu:LuArrowDownToLine":
            return LuArrowDownToLine;
        case "lu:LuArrowDownUp":
            return LuArrowDownUp;
        case "lu:LuArrowDownWideNarrow":
            return LuArrowDownWideNarrow;
        case "lu:LuArrowDownZA":
            return LuArrowDownZA;
        case "lu:LuArrowDown":
            return LuArrowDown;
        case "lu:LuArrowLeftFromLine":
            return LuArrowLeftFromLine;
        case "lu:LuArrowLeftRight":
            return LuArrowLeftRight;
        case "lu:LuArrowLeftToLine":
            return LuArrowLeftToLine;
        case "lu:LuArrowLeft":
            return LuArrowLeft;
        case "lu:LuArrowRightFromLine":
            return LuArrowRightFromLine;
        case "lu:LuArrowRightLeft":
            return LuArrowRightLeft;
        case "lu:LuArrowRightToLine":
            return LuArrowRightToLine;
        case "lu:LuArrowRight":
            return LuArrowRight;
        case "lu:LuArrowUp01":
            return LuArrowUp01;
        case "lu:LuArrowUp10":
            return LuArrowUp10;
        case "lu:LuArrowUpAZ":
            return LuArrowUpAZ;
        case "lu:LuArrowUpDown":
            return LuArrowUpDown;
        case "lu:LuArrowUpFromDot":
            return LuArrowUpFromDot;
        case "lu:LuArrowUpFromLine":
            return LuArrowUpFromLine;
        case "lu:LuArrowUpLeft":
            return LuArrowUpLeft;
        case "lu:LuArrowUpNarrowWide":
            return LuArrowUpNarrowWide;
        case "lu:LuArrowUpRight":
            return LuArrowUpRight;
        case "lu:LuArrowUpToLine":
            return LuArrowUpToLine;
        case "lu:LuArrowUpWideNarrow":
            return LuArrowUpWideNarrow;
        case "lu:LuArrowUpZA":
            return LuArrowUpZA;
        case "lu:LuArrowUp":
            return LuArrowUp;
        case "lu:LuArrowsUpFromLine":
            return LuArrowsUpFromLine;
        case "lu:LuAsterisk":
            return LuAsterisk;
        case "lu:LuAtSign":
            return LuAtSign;
        case "lu:LuAtom":
            return LuAtom;
        case "lu:LuAudioLines":
            return LuAudioLines;
        case "lu:LuAudioWaveform":
            return LuAudioWaveform;
        case "lu:LuAward":
            return LuAward;
        case "lu:LuAxe":
            return LuAxe;
        case "lu:LuAxis3D":
            return LuAxis3D;
        case "lu:LuBaby":
            return LuBaby;
        case "lu:LuBackpack":
            return LuBackpack;
        case "lu:LuBadgeAlert":
            return LuBadgeAlert;
        case "lu:LuBadgeCent":
            return LuBadgeCent;
        case "lu:LuBadgeCheck":
            return LuBadgeCheck;
        case "lu:LuBadgeDollarSign":
            return LuBadgeDollarSign;
        case "lu:LuBadgeEuro":
            return LuBadgeEuro;
        case "lu:LuBadgeHelp":
            return LuBadgeHelp;
        case "lu:LuBadgeIndianRupee":
            return LuBadgeIndianRupee;
        case "lu:LuBadgeInfo":
            return LuBadgeInfo;
        case "lu:LuBadgeJapaneseYen":
            return LuBadgeJapaneseYen;
        case "lu:LuBadgeMinus":
            return LuBadgeMinus;
        case "lu:LuBadgePercent":
            return LuBadgePercent;
        case "lu:LuBadgePlus":
            return LuBadgePlus;
        case "lu:LuBadgePoundSterling":
            return LuBadgePoundSterling;
        case "lu:LuBadgeRussianRuble":
            return LuBadgeRussianRuble;
        case "lu:LuBadgeSwissFranc":
            return LuBadgeSwissFranc;
        case "lu:LuBadgeX":
            return LuBadgeX;
        case "lu:LuBadge":
            return LuBadge;
        case "lu:LuBaggageClaim":
            return LuBaggageClaim;
        case "lu:LuBan":
            return LuBan;
        case "lu:LuBanana":
            return LuBanana;
        case "lu:LuBandage":
            return LuBandage;
        case "lu:LuBanknote":
            return LuBanknote;
        case "lu:LuBarcode":
            return LuBarcode;
        case "lu:LuBaseline":
            return LuBaseline;
        case "lu:LuBath":
            return LuBath;
        case "lu:LuBatteryCharging":
            return LuBatteryCharging;
        case "lu:LuBatteryFull":
            return LuBatteryFull;
        case "lu:LuBatteryLow":
            return LuBatteryLow;
        case "lu:LuBatteryMedium":
            return LuBatteryMedium;
        case "lu:LuBatteryWarning":
            return LuBatteryWarning;
        case "lu:LuBattery":
            return LuBattery;
        case "lu:LuBeaker":
            return LuBeaker;
        case "lu:LuBeanOff":
            return LuBeanOff;
        case "lu:LuBean":
            return LuBean;
        case "lu:LuBedDouble":
            return LuBedDouble;
        case "lu:LuBedSingle":
            return LuBedSingle;
        case "lu:LuBed":
            return LuBed;
        case "lu:LuBeef":
            return LuBeef;
        case "lu:LuBeerOff":
            return LuBeerOff;
        case "lu:LuBeer":
            return LuBeer;
        case "lu:LuBellDot":
            return LuBellDot;
        case "lu:LuBellElectric":
            return LuBellElectric;
        case "lu:LuBellMinus":
            return LuBellMinus;
        case "lu:LuBellOff":
            return LuBellOff;
        case "lu:LuBellPlus":
            return LuBellPlus;
        case "lu:LuBellRing":
            return LuBellRing;
        case "lu:LuBell":
            return LuBell;
        case "lu:LuBetweenHorizontalEnd":
            return LuBetweenHorizontalEnd;
        case "lu:LuBetweenHorizontalStart":
            return LuBetweenHorizontalStart;
        case "lu:LuBetweenVerticalEnd":
            return LuBetweenVerticalEnd;
        case "lu:LuBetweenVerticalStart":
            return LuBetweenVerticalStart;
        case "lu:LuBicepsFlexed":
            return LuBicepsFlexed;
        case "lu:LuBike":
            return LuBike;
        case "lu:LuBinary":
            return LuBinary;
        case "lu:LuBinoculars":
            return LuBinoculars;
        case "lu:LuBiohazard":
            return LuBiohazard;
        case "lu:LuBird":
            return LuBird;
        case "lu:LuBitcoin":
            return LuBitcoin;
        case "lu:LuBlend":
            return LuBlend;
        case "lu:LuBlinds":
            return LuBlinds;
        case "lu:LuBlocks":
            return LuBlocks;
        case "lu:LuBluetoothConnected":
            return LuBluetoothConnected;
        case "lu:LuBluetoothOff":
            return LuBluetoothOff;
        case "lu:LuBluetoothSearching":
            return LuBluetoothSearching;
        case "lu:LuBluetooth":
            return LuBluetooth;
        case "lu:LuBold":
            return LuBold;
        case "lu:LuBolt":
            return LuBolt;
        case "lu:LuBomb":
            return LuBomb;
        case "lu:LuBone":
            return LuBone;
        case "lu:LuBookA":
            return LuBookA;
        case "lu:LuBookAudio":
            return LuBookAudio;
        case "lu:LuBookCheck":
            return LuBookCheck;
        case "lu:LuBookCopy":
            return LuBookCopy;
        case "lu:LuBookDashed":
            return LuBookDashed;
        case "lu:LuBookDown":
            return LuBookDown;
        case "lu:LuBookHeadphones":
            return LuBookHeadphones;
        case "lu:LuBookHeart":
            return LuBookHeart;
        case "lu:LuBookImage":
            return LuBookImage;
        case "lu:LuBookKey":
            return LuBookKey;
        case "lu:LuBookLock":
            return LuBookLock;
        case "lu:LuBookMarked":
            return LuBookMarked;
        case "lu:LuBookMinus":
            return LuBookMinus;
        case "lu:LuBookOpenCheck":
            return LuBookOpenCheck;
        case "lu:LuBookOpenText":
            return LuBookOpenText;
        case "lu:LuBookOpen":
            return LuBookOpen;
        case "lu:LuBookPlus":
            return LuBookPlus;
        case "lu:LuBookText":
            return LuBookText;
        case "lu:LuBookType":
            return LuBookType;
        case "lu:LuBookUp2":
            return LuBookUp2;
        case "lu:LuBookUp":
            return LuBookUp;
        case "lu:LuBookUser":
            return LuBookUser;
        case "lu:LuBookX":
            return LuBookX;
        case "lu:LuBook":
            return LuBook;
        case "lu:LuBookmarkCheck":
            return LuBookmarkCheck;
        case "lu:LuBookmarkMinus":
            return LuBookmarkMinus;
        case "lu:LuBookmarkPlus":
            return LuBookmarkPlus;
        case "lu:LuBookmarkX":
            return LuBookmarkX;
        case "lu:LuBookmark":
            return LuBookmark;
        case "lu:LuBoomBox":
            return LuBoomBox;
        case "lu:LuBotMessageSquare":
            return LuBotMessageSquare;
        case "lu:LuBotOff":
            return LuBotOff;
        case "lu:LuBot":
            return LuBot;
        case "lu:LuBox":
            return LuBox;
        case "lu:LuBoxes":
            return LuBoxes;
        case "lu:LuBraces":
            return LuBraces;
        case "lu:LuBrackets":
            return LuBrackets;
        case "lu:LuBrainCircuit":
            return LuBrainCircuit;
        case "lu:LuBrainCog":
            return LuBrainCog;
        case "lu:LuBrain":
            return LuBrain;
        case "lu:LuBrickWall":
            return LuBrickWall;
        case "lu:LuBriefcaseBusiness":
            return LuBriefcaseBusiness;
        case "lu:LuBriefcaseConveyorBelt":
            return LuBriefcaseConveyorBelt;
        case "lu:LuBriefcaseMedical":
            return LuBriefcaseMedical;
        case "lu:LuBriefcase":
            return LuBriefcase;
        case "lu:LuBringToFront":
            return LuBringToFront;
        case "lu:LuBrush":
            return LuBrush;
        case "lu:LuBugOff":
            return LuBugOff;
        case "lu:LuBugPlay":
            return LuBugPlay;
        case "lu:LuBug":
            return LuBug;
        case "lu:LuBuilding2":
            return LuBuilding2;
        case "lu:LuBuilding":
            return LuBuilding;
        case "lu:LuBusFront":
            return LuBusFront;
        case "lu:LuBus":
            return LuBus;
        case "lu:LuCableCar":
            return LuCableCar;
        case "lu:LuCable":
            return LuCable;
        case "lu:LuCakeSlice":
            return LuCakeSlice;
        case "lu:LuCake":
            return LuCake;
        case "lu:LuCalculator":
            return LuCalculator;
        case "lu:LuCalendar1":
            return LuCalendar1;
        case "lu:LuCalendarArrowDown":
            return LuCalendarArrowDown;
        case "lu:LuCalendarArrowUp":
            return LuCalendarArrowUp;
        case "lu:LuCalendarCheck2":
            return LuCalendarCheck2;
        case "lu:LuCalendarCheck":
            return LuCalendarCheck;
        case "lu:LuCalendarClock":
            return LuCalendarClock;
        case "lu:LuCalendarCog":
            return LuCalendarCog;
        case "lu:LuCalendarDays":
            return LuCalendarDays;
        case "lu:LuCalendarFold":
            return LuCalendarFold;
        case "lu:LuCalendarHeart":
            return LuCalendarHeart;
        case "lu:LuCalendarMinus2":
            return LuCalendarMinus2;
        case "lu:LuCalendarMinus":
            return LuCalendarMinus;
        case "lu:LuCalendarOff":
            return LuCalendarOff;
        case "lu:LuCalendarPlus2":
            return LuCalendarPlus2;
        case "lu:LuCalendarPlus":
            return LuCalendarPlus;
        case "lu:LuCalendarRange":
            return LuCalendarRange;
        case "lu:LuCalendarSearch":
            return LuCalendarSearch;
        case "lu:LuCalendarSync":
            return LuCalendarSync;
        case "lu:LuCalendarX2":
            return LuCalendarX2;
        case "lu:LuCalendarX":
            return LuCalendarX;
        case "lu:LuCalendar":
            return LuCalendar;
        case "lu:LuCameraOff":
            return LuCameraOff;
        case "lu:LuCamera":
            return LuCamera;
        case "lu:LuCandyCane":
            return LuCandyCane;
        case "lu:LuCandyOff":
            return LuCandyOff;
        case "lu:LuCandy":
            return LuCandy;
        case "lu:LuCannabis":
            return LuCannabis;
        case "lu:LuCaptionsOff":
            return LuCaptionsOff;
        case "lu:LuCaptions":
            return LuCaptions;
        case "lu:LuCarFront":
            return LuCarFront;
        case "lu:LuCarTaxiFront":
            return LuCarTaxiFront;
        case "lu:LuCar":
            return LuCar;
        case "lu:LuCaravan":
            return LuCaravan;
        case "lu:LuCarrot":
            return LuCarrot;
        case "lu:LuCaseLower":
            return LuCaseLower;
        case "lu:LuCaseSensitive":
            return LuCaseSensitive;
        case "lu:LuCaseUpper":
            return LuCaseUpper;
        case "lu:LuCassetteTape":
            return LuCassetteTape;
        case "lu:LuCast":
            return LuCast;
        case "lu:LuCastle":
            return LuCastle;
        case "lu:LuCat":
            return LuCat;
        case "lu:LuCctv":
            return LuCctv;
        case "lu:LuChartArea":
            return LuChartArea;
        case "lu:LuChartBarBig":
            return LuChartBarBig;
        case "lu:LuChartBarDecreasing":
            return LuChartBarDecreasing;
        case "lu:LuChartBarIncreasing":
            return LuChartBarIncreasing;
        case "lu:LuChartBarStacked":
            return LuChartBarStacked;
        case "lu:LuChartBar":
            return LuChartBar;
        case "lu:LuChartCandlestick":
            return LuChartCandlestick;
        case "lu:LuChartColumnBig":
            return LuChartColumnBig;
        case "lu:LuChartColumnDecreasing":
            return LuChartColumnDecreasing;
        case "lu:LuChartColumnIncreasing":
            return LuChartColumnIncreasing;
        case "lu:LuChartColumnStacked":
            return LuChartColumnStacked;
        case "lu:LuChartColumn":
            return LuChartColumn;
        case "lu:LuChartGantt":
            return LuChartGantt;
        case "lu:LuChartLine":
            return LuChartLine;
        case "lu:LuChartNetwork":
            return LuChartNetwork;
        case "lu:LuChartNoAxesColumnDecreasing":
            return LuChartNoAxesColumnDecreasing;
        case "lu:LuChartNoAxesColumnIncreasing":
            return LuChartNoAxesColumnIncreasing;
        case "lu:LuChartNoAxesColumn":
            return LuChartNoAxesColumn;
        case "lu:LuChartNoAxesCombined":
            return LuChartNoAxesCombined;
        case "lu:LuChartNoAxesGantt":
            return LuChartNoAxesGantt;
        case "lu:LuChartPie":
            return LuChartPie;
        case "lu:LuChartScatter":
            return LuChartScatter;
        case "lu:LuChartSpline":
            return LuChartSpline;
        case "lu:LuCheckCheck":
            return LuCheckCheck;
        case "lu:LuCheck":
            return LuCheck;
        case "lu:LuChefHat":
            return LuChefHat;
        case "lu:LuCherry":
            return LuCherry;
        case "lu:LuChevronDown":
            return LuChevronDown;
        case "lu:LuChevronFirst":
            return LuChevronFirst;
        case "lu:LuChevronLast":
            return LuChevronLast;
        case "lu:LuChevronLeft":
            return LuChevronLeft;
        case "lu:LuChevronRight":
            return LuChevronRight;
        case "lu:LuChevronUp":
            return LuChevronUp;
        case "lu:LuChevronsDownUp":
            return LuChevronsDownUp;
        case "lu:LuChevronsDown":
            return LuChevronsDown;
        case "lu:LuChevronsLeftRightEllipsis":
            return LuChevronsLeftRightEllipsis;
        case "lu:LuChevronsLeftRight":
            return LuChevronsLeftRight;
        case "lu:LuChevronsLeft":
            return LuChevronsLeft;
        case "lu:LuChevronsRightLeft":
            return LuChevronsRightLeft;
        case "lu:LuChevronsRight":
            return LuChevronsRight;
        case "lu:LuChevronsUpDown":
            return LuChevronsUpDown;
        case "lu:LuChevronsUp":
            return LuChevronsUp;
        case "lu:LuChrome":
            return LuChrome;
        case "lu:LuChurch":
            return LuChurch;
        case "lu:LuCigaretteOff":
            return LuCigaretteOff;
        case "lu:LuCigarette":
            return LuCigarette;
        case "lu:LuCircleAlert":
            return LuCircleAlert;
        case "lu:LuCircleArrowDown":
            return LuCircleArrowDown;
        case "lu:LuCircleArrowLeft":
            return LuCircleArrowLeft;
        case "lu:LuCircleArrowOutDownLeft":
            return LuCircleArrowOutDownLeft;
        case "lu:LuCircleArrowOutDownRight":
            return LuCircleArrowOutDownRight;
        case "lu:LuCircleArrowOutUpLeft":
            return LuCircleArrowOutUpLeft;
        case "lu:LuCircleArrowOutUpRight":
            return LuCircleArrowOutUpRight;
        case "lu:LuCircleArrowRight":
            return LuCircleArrowRight;
        case "lu:LuCircleArrowUp":
            return LuCircleArrowUp;
        case "lu:LuCircleCheckBig":
            return LuCircleCheckBig;
        case "lu:LuCircleCheck":
            return LuCircleCheck;
        case "lu:LuCircleChevronDown":
            return LuCircleChevronDown;
        case "lu:LuCircleChevronLeft":
            return LuCircleChevronLeft;
        case "lu:LuCircleChevronRight":
            return LuCircleChevronRight;
        case "lu:LuCircleChevronUp":
            return LuCircleChevronUp;
        case "lu:LuCircleDashed":
            return LuCircleDashed;
        case "lu:LuCircleDivide":
            return LuCircleDivide;
        case "lu:LuCircleDollarSign":
            return LuCircleDollarSign;
        case "lu:LuCircleDotDashed":
            return LuCircleDotDashed;
        case "lu:LuCircleDot":
            return LuCircleDot;
        case "lu:LuCircleEllipsis":
            return LuCircleEllipsis;
        case "lu:LuCircleEqual":
            return LuCircleEqual;
        case "lu:LuCircleFadingArrowUp":
            return LuCircleFadingArrowUp;
        case "lu:LuCircleFadingPlus":
            return LuCircleFadingPlus;
        case "lu:LuCircleGauge":
            return LuCircleGauge;
        case "lu:LuCircleHelp":
            return LuCircleHelp;
        case "lu:LuCircleMinus":
            return LuCircleMinus;
        case "lu:LuCircleOff":
            return LuCircleOff;
        case "lu:LuCircleParkingOff":
            return LuCircleParkingOff;
        case "lu:LuCircleParking":
            return LuCircleParking;
        case "lu:LuCirclePause":
            return LuCirclePause;
        case "lu:LuCirclePercent":
            return LuCirclePercent;
        case "lu:LuCirclePlay":
            return LuCirclePlay;
        case "lu:LuCirclePlus":
            return LuCirclePlus;
        case "lu:LuCirclePower":
            return LuCirclePower;
        case "lu:LuCircleSlash2":
            return LuCircleSlash2;
        case "lu:LuCircleSlash":
            return LuCircleSlash;
        case "lu:LuCircleStop":
            return LuCircleStop;
        case "lu:LuCircleUserRound":
            return LuCircleUserRound;
        case "lu:LuCircleUser":
            return LuCircleUser;
        case "lu:LuCircleX":
            return LuCircleX;
        case "lu:LuCircle":
            return LuCircle;
        case "lu:LuCircuitBoard":
            return LuCircuitBoard;
        case "lu:LuCitrus":
            return LuCitrus;
        case "lu:LuClapperboard":
            return LuClapperboard;
        case "lu:LuClipboardCheck":
            return LuClipboardCheck;
        case "lu:LuClipboardCopy":
            return LuClipboardCopy;
        case "lu:LuClipboardList":
            return LuClipboardList;
        case "lu:LuClipboardMinus":
            return LuClipboardMinus;
        case "lu:LuClipboardPaste":
            return LuClipboardPaste;
        case "lu:LuClipboardPenLine":
            return LuClipboardPenLine;
        case "lu:LuClipboardPen":
            return LuClipboardPen;
        case "lu:LuClipboardPlus":
            return LuClipboardPlus;
        case "lu:LuClipboardType":
            return LuClipboardType;
        case "lu:LuClipboardX":
            return LuClipboardX;
        case "lu:LuClipboard":
            return LuClipboard;
        case "lu:LuClock1":
            return LuClock1;
        case "lu:LuClock10":
            return LuClock10;
        case "lu:LuClock11":
            return LuClock11;
        case "lu:LuClock12":
            return LuClock12;
        case "lu:LuClock2":
            return LuClock2;
        case "lu:LuClock3":
            return LuClock3;
        case "lu:LuClock4":
            return LuClock4;
        case "lu:LuClock5":
            return LuClock5;
        case "lu:LuClock6":
            return LuClock6;
        case "lu:LuClock7":
            return LuClock7;
        case "lu:LuClock8":
            return LuClock8;
        case "lu:LuClock9":
            return LuClock9;
        case "lu:LuClockAlert":
            return LuClockAlert;
        case "lu:LuClockArrowDown":
            return LuClockArrowDown;
        case "lu:LuClockArrowUp":
            return LuClockArrowUp;
        case "lu:LuClock":
            return LuClock;
        case "lu:LuCloudAlert":
            return LuCloudAlert;
        case "lu:LuCloudCog":
            return LuCloudCog;
        case "lu:LuCloudDownload":
            return LuCloudDownload;
        case "lu:LuCloudDrizzle":
            return LuCloudDrizzle;
        case "lu:LuCloudFog":
            return LuCloudFog;
        case "lu:LuCloudHail":
            return LuCloudHail;
        case "lu:LuCloudLightning":
            return LuCloudLightning;
        case "lu:LuCloudMoonRain":
            return LuCloudMoonRain;
        case "lu:LuCloudMoon":
            return LuCloudMoon;
        case "lu:LuCloudOff":
            return LuCloudOff;
        case "lu:LuCloudRainWind":
            return LuCloudRainWind;
        case "lu:LuCloudRain":
            return LuCloudRain;
        case "lu:LuCloudSnow":
            return LuCloudSnow;
        case "lu:LuCloudSunRain":
            return LuCloudSunRain;
        case "lu:LuCloudSun":
            return LuCloudSun;
        case "lu:LuCloudUpload":
            return LuCloudUpload;
        case "lu:LuCloud":
            return LuCloud;
        case "lu:LuCloudy":
            return LuCloudy;
        case "lu:LuClover":
            return LuClover;
        case "lu:LuClub":
            return LuClub;
        case "lu:LuCodeXml":
            return LuCodeXml;
        case "lu:LuCode":
            return LuCode;
        case "lu:LuCodepen":
            return LuCodepen;
        case "lu:LuCodesandbox":
            return LuCodesandbox;
        case "lu:LuCoffee":
            return LuCoffee;
        case "lu:LuCog":
            return LuCog;
        case "lu:LuCoins":
            return LuCoins;
        case "lu:LuColumns2":
            return LuColumns2;
        case "lu:LuColumns3":
            return LuColumns3;
        case "lu:LuColumns4":
            return LuColumns4;
        case "lu:LuCombine":
            return LuCombine;
        case "lu:LuCommand":
            return LuCommand;
        case "lu:LuCompass":
            return LuCompass;
        case "lu:LuComponent":
            return LuComponent;
        case "lu:LuComputer":
            return LuComputer;
        case "lu:LuConciergeBell":
            return LuConciergeBell;
        case "lu:LuCone":
            return LuCone;
        case "lu:LuConstruction":
            return LuConstruction;
        case "lu:LuContactRound":
            return LuContactRound;
        case "lu:LuContact":
            return LuContact;
        case "lu:LuContainer":
            return LuContainer;
        case "lu:LuContrast":
            return LuContrast;
        case "lu:LuCookie":
            return LuCookie;
        case "lu:LuCookingPot":
            return LuCookingPot;
        case "lu:LuCopyCheck":
            return LuCopyCheck;
        case "lu:LuCopyMinus":
            return LuCopyMinus;
        case "lu:LuCopyPlus":
            return LuCopyPlus;
        case "lu:LuCopySlash":
            return LuCopySlash;
        case "lu:LuCopyX":
            return LuCopyX;
        case "lu:LuCopy":
            return LuCopy;
        case "lu:LuCopyleft":
            return LuCopyleft;
        case "lu:LuCopyright":
            return LuCopyright;
        case "lu:LuCornerDownLeft":
            return LuCornerDownLeft;
        case "lu:LuCornerDownRight":
            return LuCornerDownRight;
        case "lu:LuCornerLeftDown":
            return LuCornerLeftDown;
        case "lu:LuCornerLeftUp":
            return LuCornerLeftUp;
        case "lu:LuCornerRightDown":
            return LuCornerRightDown;
        case "lu:LuCornerRightUp":
            return LuCornerRightUp;
        case "lu:LuCornerUpLeft":
            return LuCornerUpLeft;
        case "lu:LuCornerUpRight":
            return LuCornerUpRight;
        case "lu:LuCpu":
            return LuCpu;
        case "lu:LuCreativeCommons":
            return LuCreativeCommons;
        case "lu:LuCreditCard":
            return LuCreditCard;
        case "lu:LuCroissant":
            return LuCroissant;
        case "lu:LuCrop":
            return LuCrop;
        case "lu:LuCross":
            return LuCross;
        case "lu:LuCrosshair":
            return LuCrosshair;
        case "lu:LuCrown":
            return LuCrown;
        case "lu:LuCuboid":
            return LuCuboid;
        case "lu:LuCupSoda":
            return LuCupSoda;
        case "lu:LuCurrency":
            return LuCurrency;
        case "lu:LuCylinder":
            return LuCylinder;
        case "lu:LuDam":
            return LuDam;
        case "lu:LuDatabaseBackup":
            return LuDatabaseBackup;
        case "lu:LuDatabaseZap":
            return LuDatabaseZap;
        case "lu:LuDatabase":
            return LuDatabase;
        case "lu:LuDelete":
            return LuDelete;
        case "lu:LuDessert":
            return LuDessert;
        case "lu:LuDiameter":
            return LuDiameter;
        case "lu:LuDiamondMinus":
            return LuDiamondMinus;
        case "lu:LuDiamondPercent":
            return LuDiamondPercent;
        case "lu:LuDiamondPlus":
            return LuDiamondPlus;
        case "lu:LuDiamond":
            return LuDiamond;
        case "lu:LuDice1":
            return LuDice1;
        case "lu:LuDice2":
            return LuDice2;
        case "lu:LuDice3":
            return LuDice3;
        case "lu:LuDice4":
            return LuDice4;
        case "lu:LuDice5":
            return LuDice5;
        case "lu:LuDice6":
            return LuDice6;
        case "lu:LuDices":
            return LuDices;
        case "lu:LuDiff":
            return LuDiff;
        case "lu:LuDisc2":
            return LuDisc2;
        case "lu:LuDisc3":
            return LuDisc3;
        case "lu:LuDiscAlbum":
            return LuDiscAlbum;
        case "lu:LuDisc":
            return LuDisc;
        case "lu:LuDivide":
            return LuDivide;
        case "lu:LuDnaOff":
            return LuDnaOff;
        case "lu:LuDna":
            return LuDna;
        case "lu:LuDock":
            return LuDock;
        case "lu:LuDog":
            return LuDog;
        case "lu:LuDollarSign":
            return LuDollarSign;
        case "lu:LuDonut":
            return LuDonut;
        case "lu:LuDoorClosed":
            return LuDoorClosed;
        case "lu:LuDoorOpen":
            return LuDoorOpen;
        case "lu:LuDot":
            return LuDot;
        case "lu:LuDownload":
            return LuDownload;
        case "lu:LuDraftingCompass":
            return LuDraftingCompass;
        case "lu:LuDrama":
            return LuDrama;
        case "lu:LuDribbble":
            return LuDribbble;
        case "lu:LuDrill":
            return LuDrill;
        case "lu:LuDroplet":
            return LuDroplet;
        case "lu:LuDroplets":
            return LuDroplets;
        case "lu:LuDrum":
            return LuDrum;
        case "lu:LuDrumstick":
            return LuDrumstick;
        case "lu:LuDumbbell":
            return LuDumbbell;
        case "lu:LuEarOff":
            return LuEarOff;
        case "lu:LuEar":
            return LuEar;
        case "lu:LuEarthLock":
            return LuEarthLock;
        case "lu:LuEarth":
            return LuEarth;
        case "lu:LuEclipse":
            return LuEclipse;
        case "lu:LuEggFried":
            return LuEggFried;
        case "lu:LuEggOff":
            return LuEggOff;
        case "lu:LuEgg":
            return LuEgg;
        case "lu:LuEllipsisVertical":
            return LuEllipsisVertical;
        case "lu:LuEllipsis":
            return LuEllipsis;
        case "lu:LuEqualApproximately":
            return LuEqualApproximately;
        case "lu:LuEqualNot":
            return LuEqualNot;
        case "lu:LuEqual":
            return LuEqual;
        case "lu:LuEraser":
            return LuEraser;
        case "lu:LuEthernetPort":
            return LuEthernetPort;
        case "lu:LuEuro":
            return LuEuro;
        case "lu:LuExpand":
            return LuExpand;
        case "lu:LuExternalLink":
            return LuExternalLink;
        case "lu:LuEyeClosed":
            return LuEyeClosed;
        case "lu:LuEyeOff":
            return LuEyeOff;
        case "lu:LuEye":
            return LuEye;
        case "lu:LuFacebook":
            return LuFacebook;
        case "lu:LuFactory":
            return LuFactory;
        case "lu:LuFan":
            return LuFan;
        case "lu:LuFastForward":
            return LuFastForward;
        case "lu:LuFeather":
            return LuFeather;
        case "lu:LuFence":
            return LuFence;
        case "lu:LuFerrisWheel":
            return LuFerrisWheel;
        case "lu:LuFigma":
            return LuFigma;
        case "lu:LuFileArchive":
            return LuFileArchive;
        case "lu:LuFileAudio2":
            return LuFileAudio2;
        case "lu:LuFileAudio":
            return LuFileAudio;
        case "lu:LuFileAxis3D":
            return LuFileAxis3D;
        case "lu:LuFileBadge2":
            return LuFileBadge2;
        case "lu:LuFileBadge":
            return LuFileBadge;
        case "lu:LuFileBox":
            return LuFileBox;
        case "lu:LuFileChartColumnIncreasing":
            return LuFileChartColumnIncreasing;
        case "lu:LuFileChartColumn":
            return LuFileChartColumn;
        case "lu:LuFileChartLine":
            return LuFileChartLine;
        case "lu:LuFileChartPie":
            return LuFileChartPie;
        case "lu:LuFileCheck2":
            return LuFileCheck2;
        case "lu:LuFileCheck":
            return LuFileCheck;
        case "lu:LuFileClock":
            return LuFileClock;
        case "lu:LuFileCode2":
            return LuFileCode2;
        case "lu:LuFileCode":
            return LuFileCode;
        case "lu:LuFileCog":
            return LuFileCog;
        case "lu:LuFileDiff":
            return LuFileDiff;
        case "lu:LuFileDigit":
            return LuFileDigit;
        case "lu:LuFileDown":
            return LuFileDown;
        case "lu:LuFileHeart":
            return LuFileHeart;
        case "lu:LuFileImage":
            return LuFileImage;
        case "lu:LuFileInput":
            return LuFileInput;
        case "lu:LuFileJson2":
            return LuFileJson2;
        case "lu:LuFileJson":
            return LuFileJson;
        case "lu:LuFileKey2":
            return LuFileKey2;
        case "lu:LuFileKey":
            return LuFileKey;
        case "lu:LuFileLock2":
            return LuFileLock2;
        case "lu:LuFileLock":
            return LuFileLock;
        case "lu:LuFileMinus2":
            return LuFileMinus2;
        case "lu:LuFileMinus":
            return LuFileMinus;
        case "lu:LuFileMusic":
            return LuFileMusic;
        case "lu:LuFileOutput":
            return LuFileOutput;
        case "lu:LuFilePenLine":
            return LuFilePenLine;
        case "lu:LuFilePen":
            return LuFilePen;
        case "lu:LuFilePlus2":
            return LuFilePlus2;
        case "lu:LuFilePlus":
            return LuFilePlus;
        case "lu:LuFileQuestion":
            return LuFileQuestion;
        case "lu:LuFileScan":
            return LuFileScan;
        case "lu:LuFileSearch2":
            return LuFileSearch2;
        case "lu:LuFileSearch":
            return LuFileSearch;
        case "lu:LuFileSliders":
            return LuFileSliders;
        case "lu:LuFileSpreadsheet":
            return LuFileSpreadsheet;
        case "lu:LuFileStack":
            return LuFileStack;
        case "lu:LuFileSymlink":
            return LuFileSymlink;
        case "lu:LuFileTerminal":
            return LuFileTerminal;
        case "lu:LuFileText":
            return LuFileText;
        case "lu:LuFileType2":
            return LuFileType2;
        case "lu:LuFileType":
            return LuFileType;
        case "lu:LuFileUp":
            return LuFileUp;
        case "lu:LuFileUser":
            return LuFileUser;
        case "lu:LuFileVideo2":
            return LuFileVideo2;
        case "lu:LuFileVideo":
            return LuFileVideo;
        case "lu:LuFileVolume2":
            return LuFileVolume2;
        case "lu:LuFileVolume":
            return LuFileVolume;
        case "lu:LuFileWarning":
            return LuFileWarning;
        case "lu:LuFileX2":
            return LuFileX2;
        case "lu:LuFileX":
            return LuFileX;
        case "lu:LuFile":
            return LuFile;
        case "lu:LuFiles":
            return LuFiles;
        case "lu:LuFilm":
            return LuFilm;
        case "lu:LuFilterX":
            return LuFilterX;
        case "lu:LuFilter":
            return LuFilter;
        case "lu:LuFingerprint":
            return LuFingerprint;
        case "lu:LuFireExtinguisher":
            return LuFireExtinguisher;
        case "lu:LuFishOff":
            return LuFishOff;
        case "lu:LuFishSymbol":
            return LuFishSymbol;
        case "lu:LuFish":
            return LuFish;
        case "lu:LuFlagOff":
            return LuFlagOff;
        case "lu:LuFlagTriangleLeft":
            return LuFlagTriangleLeft;
        case "lu:LuFlagTriangleRight":
            return LuFlagTriangleRight;
        case "lu:LuFlag":
            return LuFlag;
        case "lu:LuFlameKindling":
            return LuFlameKindling;
        case "lu:LuFlame":
            return LuFlame;
        case "lu:LuFlashlightOff":
            return LuFlashlightOff;
        case "lu:LuFlashlight":
            return LuFlashlight;
        case "lu:LuFlaskConicalOff":
            return LuFlaskConicalOff;
        case "lu:LuFlaskConical":
            return LuFlaskConical;
        case "lu:LuFlaskRound":
            return LuFlaskRound;
        case "lu:LuFlipHorizontal2":
            return LuFlipHorizontal2;
        case "lu:LuFlipHorizontal":
            return LuFlipHorizontal;
        case "lu:LuFlipVertical2":
            return LuFlipVertical2;
        case "lu:LuFlipVertical":
            return LuFlipVertical;
        case "lu:LuFlower2":
            return LuFlower2;
        case "lu:LuFlower":
            return LuFlower;
        case "lu:LuFocus":
            return LuFocus;
        case "lu:LuFoldHorizontal":
            return LuFoldHorizontal;
        case "lu:LuFoldVertical":
            return LuFoldVertical;
        case "lu:LuFolderArchive":
            return LuFolderArchive;
        case "lu:LuFolderCheck":
            return LuFolderCheck;
        case "lu:LuFolderClock":
            return LuFolderClock;
        case "lu:LuFolderClosed":
            return LuFolderClosed;
        case "lu:LuFolderCode":
            return LuFolderCode;
        case "lu:LuFolderCog":
            return LuFolderCog;
        case "lu:LuFolderDot":
            return LuFolderDot;
        case "lu:LuFolderDown":
            return LuFolderDown;
        case "lu:LuFolderGit2":
            return LuFolderGit2;
        case "lu:LuFolderGit":
            return LuFolderGit;
        case "lu:LuFolderHeart":
            return LuFolderHeart;
        case "lu:LuFolderInput":
            return LuFolderInput;
        case "lu:LuFolderKanban":
            return LuFolderKanban;
        case "lu:LuFolderKey":
            return LuFolderKey;
        case "lu:LuFolderLock":
            return LuFolderLock;
        case "lu:LuFolderMinus":
            return LuFolderMinus;
        case "lu:LuFolderOpenDot":
            return LuFolderOpenDot;
        case "lu:LuFolderOpen":
            return LuFolderOpen;
        case "lu:LuFolderOutput":
            return LuFolderOutput;
        case "lu:LuFolderPen":
            return LuFolderPen;
        case "lu:LuFolderPlus":
            return LuFolderPlus;
        case "lu:LuFolderRoot":
            return LuFolderRoot;
        case "lu:LuFolderSearch2":
            return LuFolderSearch2;
        case "lu:LuFolderSearch":
            return LuFolderSearch;
        case "lu:LuFolderSymlink":
            return LuFolderSymlink;
        case "lu:LuFolderSync":
            return LuFolderSync;
        case "lu:LuFolderTree":
            return LuFolderTree;
        case "lu:LuFolderUp":
            return LuFolderUp;
        case "lu:LuFolderX":
            return LuFolderX;
        case "lu:LuFolder":
            return LuFolder;
        case "lu:LuFolders":
            return LuFolders;
        case "lu:LuFootprints":
            return LuFootprints;
        case "lu:LuForklift":
            return LuForklift;
        case "lu:LuForward":
            return LuForward;
        case "lu:LuFrame":
            return LuFrame;
        case "lu:LuFramer":
            return LuFramer;
        case "lu:LuFrown":
            return LuFrown;
        case "lu:LuFuel":
            return LuFuel;
        case "lu:LuFullscreen":
            return LuFullscreen;
        case "lu:LuGalleryHorizontalEnd":
            return LuGalleryHorizontalEnd;
        case "lu:LuGalleryHorizontal":
            return LuGalleryHorizontal;
        case "lu:LuGalleryThumbnails":
            return LuGalleryThumbnails;
        case "lu:LuGalleryVerticalEnd":
            return LuGalleryVerticalEnd;
        case "lu:LuGalleryVertical":
            return LuGalleryVertical;
        case "lu:LuGamepad2":
            return LuGamepad2;
        case "lu:LuGamepad":
            return LuGamepad;
        case "lu:LuGauge":
            return LuGauge;
        case "lu:LuGavel":
            return LuGavel;
        case "lu:LuGem":
            return LuGem;
        case "lu:LuGhost":
            return LuGhost;
        case "lu:LuGift":
            return LuGift;
        case "lu:LuGitBranchPlus":
            return LuGitBranchPlus;
        case "lu:LuGitBranch":
            return LuGitBranch;
        case "lu:LuGitCommitHorizontal":
            return LuGitCommitHorizontal;
        case "lu:LuGitCommitVertical":
            return LuGitCommitVertical;
        case "lu:LuGitCompareArrows":
            return LuGitCompareArrows;
        case "lu:LuGitCompare":
            return LuGitCompare;
        case "lu:LuGitFork":
            return LuGitFork;
        case "lu:LuGitGraph":
            return LuGitGraph;
        case "lu:LuGitMerge":
            return LuGitMerge;
        case "lu:LuGitPullRequestArrow":
            return LuGitPullRequestArrow;
        case "lu:LuGitPullRequestClosed":
            return LuGitPullRequestClosed;
        case "lu:LuGitPullRequestCreateArrow":
            return LuGitPullRequestCreateArrow;
        case "lu:LuGitPullRequestCreate":
            return LuGitPullRequestCreate;
        case "lu:LuGitPullRequestDraft":
            return LuGitPullRequestDraft;
        case "lu:LuGitPullRequest":
            return LuGitPullRequest;
        case "lu:LuGithub":
            return LuGithub;
        case "lu:LuGitlab":
            return LuGitlab;
        case "lu:LuGlassWater":
            return LuGlassWater;
        case "lu:LuGlasses":
            return LuGlasses;
        case "lu:LuGlobeLock":
            return LuGlobeLock;
        case "lu:LuGlobe":
            return LuGlobe;
        case "lu:LuGoal":
            return LuGoal;
        case "lu:LuGrab":
            return LuGrab;
        case "lu:LuGraduationCap":
            return LuGraduationCap;
        case "lu:LuGrape":
            return LuGrape;
        case "lu:LuGrid2X2Check":
            return LuGrid2X2Check;
        case "lu:LuGrid2X2Plus":
            return LuGrid2X2Plus;
        case "lu:LuGrid2X2X":
            return LuGrid2X2X;
        case "lu:LuGrid2X2":
            return LuGrid2X2;
        case "lu:LuGrid3X3":
            return LuGrid3X3;
        case "lu:LuGripHorizontal":
            return LuGripHorizontal;
        case "lu:LuGripVertical":
            return LuGripVertical;
        case "lu:LuGrip":
            return LuGrip;
        case "lu:LuGroup":
            return LuGroup;
        case "lu:LuGuitar":
            return LuGuitar;
        case "lu:LuHam":
            return LuHam;
        case "lu:LuHammer":
            return LuHammer;
        case "lu:LuHandCoins":
            return LuHandCoins;
        case "lu:LuHandHeart":
            return LuHandHeart;
        case "lu:LuHandHelping":
            return LuHandHelping;
        case "lu:LuHandMetal":
            return LuHandMetal;
        case "lu:LuHandPlatter":
            return LuHandPlatter;
        case "lu:LuHand":
            return LuHand;
        case "lu:LuHandshake":
            return LuHandshake;
        case "lu:LuHardDriveDownload":
            return LuHardDriveDownload;
        case "lu:LuHardDriveUpload":
            return LuHardDriveUpload;
        case "lu:LuHardDrive":
            return LuHardDrive;
        case "lu:LuHardHat":
            return LuHardHat;
        case "lu:LuHash":
            return LuHash;
        case "lu:LuHaze":
            return LuHaze;
        case "lu:LuHdmiPort":
            return LuHdmiPort;
        case "lu:LuHeading1":
            return LuHeading1;
        case "lu:LuHeading2":
            return LuHeading2;
        case "lu:LuHeading3":
            return LuHeading3;
        case "lu:LuHeading4":
            return LuHeading4;
        case "lu:LuHeading5":
            return LuHeading5;
        case "lu:LuHeading6":
            return LuHeading6;
        case "lu:LuHeading":
            return LuHeading;
        case "lu:LuHeadphoneOff":
            return LuHeadphoneOff;
        case "lu:LuHeadphones":
            return LuHeadphones;
        case "lu:LuHeadset":
            return LuHeadset;
        case "lu:LuHeartCrack":
            return LuHeartCrack;
        case "lu:LuHeartHandshake":
            return LuHeartHandshake;
        case "lu:LuHeartOff":
            return LuHeartOff;
        case "lu:LuHeartPulse":
            return LuHeartPulse;
        case "lu:LuHeart":
            return LuHeart;
        case "lu:LuHeater":
            return LuHeater;
        case "lu:LuHexagon":
            return LuHexagon;
        case "lu:LuHighlighter":
            return LuHighlighter;
        case "lu:LuHistory":
            return LuHistory;
        case "lu:LuHopOff":
            return LuHopOff;
        case "lu:LuHop":
            return LuHop;
        case "lu:LuHospital":
            return LuHospital;
        case "lu:LuHotel":
            return LuHotel;
        case "lu:LuHourglass":
            return LuHourglass;
        case "lu:LuHousePlug":
            return LuHousePlug;
        case "lu:LuHousePlus":
            return LuHousePlus;
        case "lu:LuHouse":
            return LuHouse;
        case "lu:LuIceCreamBowl":
            return LuIceCreamBowl;
        case "lu:LuIceCreamCone":
            return LuIceCreamCone;
        case "lu:LuIdCard":
            return LuIdCard;
        case "lu:LuImageDown":
            return LuImageDown;
        case "lu:LuImageMinus":
            return LuImageMinus;
        case "lu:LuImageOff":
            return LuImageOff;
        case "lu:LuImagePlay":
            return LuImagePlay;
        case "lu:LuImagePlus":
            return LuImagePlus;
        case "lu:LuImageUp":
            return LuImageUp;
        case "lu:LuImageUpscale":
            return LuImageUpscale;
        case "lu:LuImage":
            return LuImage;
        case "lu:LuImages":
            return LuImages;
        case "lu:LuImport":
            return LuImport;
        case "lu:LuInbox":
            return LuInbox;
        case "lu:LuIndentDecrease":
            return LuIndentDecrease;
        case "lu:LuIndentIncrease":
            return LuIndentIncrease;
        case "lu:LuIndianRupee":
            return LuIndianRupee;
        case "lu:LuInfinity":
            return LuInfinity;
        case "lu:LuInfo":
            return LuInfo;
        case "lu:LuInspectionPanel":
            return LuInspectionPanel;
        case "lu:LuInstagram":
            return LuInstagram;
        case "lu:LuItalic":
            return LuItalic;
        case "lu:LuIterationCcw":
            return LuIterationCcw;
        case "lu:LuIterationCw":
            return LuIterationCw;
        case "lu:LuJapaneseYen":
            return LuJapaneseYen;
        case "lu:LuJoystick":
            return LuJoystick;
        case "lu:LuKanban":
            return LuKanban;
        case "lu:LuKeyRound":
            return LuKeyRound;
        case "lu:LuKeySquare":
            return LuKeySquare;
        case "lu:LuKey":
            return LuKey;
        case "lu:LuKeyboardMusic":
            return LuKeyboardMusic;
        case "lu:LuKeyboardOff":
            return LuKeyboardOff;
        case "lu:LuKeyboard":
            return LuKeyboard;
        case "lu:LuLampCeiling":
            return LuLampCeiling;
        case "lu:LuLampDesk":
            return LuLampDesk;
        case "lu:LuLampFloor":
            return LuLampFloor;
        case "lu:LuLampWallDown":
            return LuLampWallDown;
        case "lu:LuLampWallUp":
            return LuLampWallUp;
        case "lu:LuLamp":
            return LuLamp;
        case "lu:LuLandPlot":
            return LuLandPlot;
        case "lu:LuLandmark":
            return LuLandmark;
        case "lu:LuLanguages":
            return LuLanguages;
        case "lu:LuLaptopMinimalCheck":
            return LuLaptopMinimalCheck;
        case "lu:LuLaptopMinimal":
            return LuLaptopMinimal;
        case "lu:LuLaptop":
            return LuLaptop;
        case "lu:LuLassoSelect":
            return LuLassoSelect;
        case "lu:LuLasso":
            return LuLasso;
        case "lu:LuLaugh":
            return LuLaugh;
        case "lu:LuLayers2":
            return LuLayers2;
        case "lu:LuLayers3":
            return LuLayers3;
        case "lu:LuLayers":
            return LuLayers;
        case "lu:LuLayoutDashboard":
            return LuLayoutDashboard;
        case "lu:LuLayoutGrid":
            return LuLayoutGrid;
        case "lu:LuLayoutList":
            return LuLayoutList;
        case "lu:LuLayoutPanelLeft":
            return LuLayoutPanelLeft;
        case "lu:LuLayoutPanelTop":
            return LuLayoutPanelTop;
        case "lu:LuLayoutTemplate":
            return LuLayoutTemplate;
        case "lu:LuLeaf":
            return LuLeaf;
        case "lu:LuLeafyGreen":
            return LuLeafyGreen;
        case "lu:LuLectern":
            return LuLectern;
        case "lu:LuLetterText":
            return LuLetterText;
        case "lu:LuLibraryBig":
            return LuLibraryBig;
        case "lu:LuLibrary":
            return LuLibrary;
        case "lu:LuLifeBuoy":
            return LuLifeBuoy;
        case "lu:LuLigature":
            return LuLigature;
        case "lu:LuLightbulbOff":
            return LuLightbulbOff;
        case "lu:LuLightbulb":
            return LuLightbulb;
        case "lu:LuLink2Off":
            return LuLink2Off;
        case "lu:LuLink2":
            return LuLink2;
        case "lu:LuLink":
            return LuLink;
        case "lu:LuLinkedin":
            return LuLinkedin;
        case "lu:LuListCheck":
            return LuListCheck;
        case "lu:LuListChecks":
            return LuListChecks;
        case "lu:LuListCollapse":
            return LuListCollapse;
        case "lu:LuListEnd":
            return LuListEnd;
        case "lu:LuListFilter":
            return LuListFilter;
        case "lu:LuListMinus":
            return LuListMinus;
        case "lu:LuListMusic":
            return LuListMusic;
        case "lu:LuListOrdered":
            return LuListOrdered;
        case "lu:LuListPlus":
            return LuListPlus;
        case "lu:LuListRestart":
            return LuListRestart;
        case "lu:LuListStart":
            return LuListStart;
        case "lu:LuListTodo":
            return LuListTodo;
        case "lu:LuListTree":
            return LuListTree;
        case "lu:LuListVideo":
            return LuListVideo;
        case "lu:LuListX":
            return LuListX;
        case "lu:LuList":
            return LuList;
        case "lu:LuLoaderCircle":
            return LuLoaderCircle;
        case "lu:LuLoaderPinwheel":
            return LuLoaderPinwheel;
        case "lu:LuLoader":
            return LuLoader;
        case "lu:LuLocateFixed":
            return LuLocateFixed;
        case "lu:LuLocateOff":
            return LuLocateOff;
        case "lu:LuLocate":
            return LuLocate;
        case "lu:LuLockKeyholeOpen":
            return LuLockKeyholeOpen;
        case "lu:LuLockKeyhole":
            return LuLockKeyhole;
        case "lu:LuLockOpen":
            return LuLockOpen;
        case "lu:LuLock":
            return LuLock;
        case "lu:LuLogIn":
            return LuLogIn;
        case "lu:LuLogOut":
            return LuLogOut;
        case "lu:LuLogs":
            return LuLogs;
        case "lu:LuLollipop":
            return LuLollipop;
        case "lu:LuLuggage":
            return LuLuggage;
        case "lu:LuMagnet":
            return LuMagnet;
        case "lu:LuMailCheck":
            return LuMailCheck;
        case "lu:LuMailMinus":
            return LuMailMinus;
        case "lu:LuMailOpen":
            return LuMailOpen;
        case "lu:LuMailPlus":
            return LuMailPlus;
        case "lu:LuMailQuestion":
            return LuMailQuestion;
        case "lu:LuMailSearch":
            return LuMailSearch;
        case "lu:LuMailWarning":
            return LuMailWarning;
        case "lu:LuMailX":
            return LuMailX;
        case "lu:LuMail":
            return LuMail;
        case "lu:LuMailbox":
            return LuMailbox;
        case "lu:LuMails":
            return LuMails;
        case "lu:LuMapPinCheckInside":
            return LuMapPinCheckInside;
        case "lu:LuMapPinCheck":
            return LuMapPinCheck;
        case "lu:LuMapPinHouse":
            return LuMapPinHouse;
        case "lu:LuMapPinMinusInside":
            return LuMapPinMinusInside;
        case "lu:LuMapPinMinus":
            return LuMapPinMinus;
        case "lu:LuMapPinOff":
            return LuMapPinOff;
        case "lu:LuMapPinPlusInside":
            return LuMapPinPlusInside;
        case "lu:LuMapPinPlus":
            return LuMapPinPlus;
        case "lu:LuMapPinXInside":
            return LuMapPinXInside;
        case "lu:LuMapPinX":
            return LuMapPinX;
        case "lu:LuMapPin":
            return LuMapPin;
        case "lu:LuMapPinned":
            return LuMapPinned;
        case "lu:LuMap":
            return LuMap;
        case "lu:LuMartini":
            return LuMartini;
        case "lu:LuMaximize2":
            return LuMaximize2;
        case "lu:LuMaximize":
            return LuMaximize;
        case "lu:LuMedal":
            return LuMedal;
        case "lu:LuMegaphoneOff":
            return LuMegaphoneOff;
        case "lu:LuMegaphone":
            return LuMegaphone;
        case "lu:LuMeh":
            return LuMeh;
        case "lu:LuMemoryStick":
            return LuMemoryStick;
        case "lu:LuMenu":
            return LuMenu;
        case "lu:LuMerge":
            return LuMerge;
        case "lu:LuMessageCircleCode":
            return LuMessageCircleCode;
        case "lu:LuMessageCircleDashed":
            return LuMessageCircleDashed;
        case "lu:LuMessageCircleHeart":
            return LuMessageCircleHeart;
        case "lu:LuMessageCircleMore":
            return LuMessageCircleMore;
        case "lu:LuMessageCircleOff":
            return LuMessageCircleOff;
        case "lu:LuMessageCirclePlus":
            return LuMessageCirclePlus;
        case "lu:LuMessageCircleQuestion":
            return LuMessageCircleQuestion;
        case "lu:LuMessageCircleReply":
            return LuMessageCircleReply;
        case "lu:LuMessageCircleWarning":
            return LuMessageCircleWarning;
        case "lu:LuMessageCircleX":
            return LuMessageCircleX;
        case "lu:LuMessageCircle":
            return LuMessageCircle;
        case "lu:LuMessageSquareCode":
            return LuMessageSquareCode;
        case "lu:LuMessageSquareDashed":
            return LuMessageSquareDashed;
        case "lu:LuMessageSquareDiff":
            return LuMessageSquareDiff;
        case "lu:LuMessageSquareDot":
            return LuMessageSquareDot;
        case "lu:LuMessageSquareHeart":
            return LuMessageSquareHeart;
        case "lu:LuMessageSquareLock":
            return LuMessageSquareLock;
        case "lu:LuMessageSquareMore":
            return LuMessageSquareMore;
        case "lu:LuMessageSquareOff":
            return LuMessageSquareOff;
        case "lu:LuMessageSquarePlus":
            return LuMessageSquarePlus;
        case "lu:LuMessageSquareQuote":
            return LuMessageSquareQuote;
        case "lu:LuMessageSquareReply":
            return LuMessageSquareReply;
        case "lu:LuMessageSquareShare":
            return LuMessageSquareShare;
        case "lu:LuMessageSquareText":
            return LuMessageSquareText;
        case "lu:LuMessageSquareWarning":
            return LuMessageSquareWarning;
        case "lu:LuMessageSquareX":
            return LuMessageSquareX;
        case "lu:LuMessageSquare":
            return LuMessageSquare;
        case "lu:LuMessagesSquare":
            return LuMessagesSquare;
        case "lu:LuMicOff":
            return LuMicOff;
        case "lu:LuMicVocal":
            return LuMicVocal;
        case "lu:LuMic":
            return LuMic;
        case "lu:LuMicrochip":
            return LuMicrochip;
        case "lu:LuMicroscope":
            return LuMicroscope;
        case "lu:LuMicrowave":
            return LuMicrowave;
        case "lu:LuMilestone":
            return LuMilestone;
        case "lu:LuMilkOff":
            return LuMilkOff;
        case "lu:LuMilk":
            return LuMilk;
        case "lu:LuMinimize2":
            return LuMinimize2;
        case "lu:LuMinimize":
            return LuMinimize;
        case "lu:LuMinus":
            return LuMinus;
        case "lu:LuMonitorCheck":
            return LuMonitorCheck;
        case "lu:LuMonitorCog":
            return LuMonitorCog;
        case "lu:LuMonitorDot":
            return LuMonitorDot;
        case "lu:LuMonitorDown":
            return LuMonitorDown;
        case "lu:LuMonitorOff":
            return LuMonitorOff;
        case "lu:LuMonitorPause":
            return LuMonitorPause;
        case "lu:LuMonitorPlay":
            return LuMonitorPlay;
        case "lu:LuMonitorSmartphone":
            return LuMonitorSmartphone;
        case "lu:LuMonitorSpeaker":
            return LuMonitorSpeaker;
        case "lu:LuMonitorStop":
            return LuMonitorStop;
        case "lu:LuMonitorUp":
            return LuMonitorUp;
        case "lu:LuMonitorX":
            return LuMonitorX;
        case "lu:LuMonitor":
            return LuMonitor;
        case "lu:LuMoonStar":
            return LuMoonStar;
        case "lu:LuMoon":
            return LuMoon;
        case "lu:LuMountainSnow":
            return LuMountainSnow;
        case "lu:LuMountain":
            return LuMountain;
        case "lu:LuMouseOff":
            return LuMouseOff;
        case "lu:LuMousePointer2":
            return LuMousePointer2;
        case "lu:LuMousePointerBan":
            return LuMousePointerBan;
        case "lu:LuMousePointerClick":
            return LuMousePointerClick;
        case "lu:LuMousePointer":
            return LuMousePointer;
        case "lu:LuMouse":
            return LuMouse;
        case "lu:LuMove3D":
            return LuMove3D;
        case "lu:LuMoveDiagonal2":
            return LuMoveDiagonal2;
        case "lu:LuMoveDiagonal":
            return LuMoveDiagonal;
        case "lu:LuMoveDownLeft":
            return LuMoveDownLeft;
        case "lu:LuMoveDownRight":
            return LuMoveDownRight;
        case "lu:LuMoveDown":
            return LuMoveDown;
        case "lu:LuMoveHorizontal":
            return LuMoveHorizontal;
        case "lu:LuMoveLeft":
            return LuMoveLeft;
        case "lu:LuMoveRight":
            return LuMoveRight;
        case "lu:LuMoveUpLeft":
            return LuMoveUpLeft;
        case "lu:LuMoveUpRight":
            return LuMoveUpRight;
        case "lu:LuMoveUp":
            return LuMoveUp;
        case "lu:LuMoveVertical":
            return LuMoveVertical;
        case "lu:LuMove":
            return LuMove;
        case "lu:LuMusic2":
            return LuMusic2;
        case "lu:LuMusic3":
            return LuMusic3;
        case "lu:LuMusic4":
            return LuMusic4;
        case "lu:LuMusic":
            return LuMusic;
        case "lu:LuNavigation2Off":
            return LuNavigation2Off;
        case "lu:LuNavigation2":
            return LuNavigation2;
        case "lu:LuNavigationOff":
            return LuNavigationOff;
        case "lu:LuNavigation":
            return LuNavigation;
        case "lu:LuNetwork":
            return LuNetwork;
        case "lu:LuNewspaper":
            return LuNewspaper;
        case "lu:LuNfc":
            return LuNfc;
        case "lu:LuNotebookPen":
            return LuNotebookPen;
        case "lu:LuNotebookTabs":
            return LuNotebookTabs;
        case "lu:LuNotebookText":
            return LuNotebookText;
        case "lu:LuNotebook":
            return LuNotebook;
        case "lu:LuNotepadTextDashed":
            return LuNotepadTextDashed;
        case "lu:LuNotepadText":
            return LuNotepadText;
        case "lu:LuNutOff":
            return LuNutOff;
        case "lu:LuNut":
            return LuNut;
        case "lu:LuOctagonAlert":
            return LuOctagonAlert;
        case "lu:LuOctagonMinus":
            return LuOctagonMinus;
        case "lu:LuOctagonPause":
            return LuOctagonPause;
        case "lu:LuOctagonX":
            return LuOctagonX;
        case "lu:LuOctagon":
            return LuOctagon;
        case "lu:LuOmega":
            return LuOmega;
        case "lu:LuOption":
            return LuOption;
        case "lu:LuOrbit":
            return LuOrbit;
    }
}
