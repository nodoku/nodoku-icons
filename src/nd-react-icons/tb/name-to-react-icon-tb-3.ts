import type {IconType} from "react-icons";

import {
    TbEyeglass2,
    TbEyeglassOff,
    TbEyeglass,
    TbFaceIdError,
    TbFaceId,
    TbFaceMaskOff,
    TbFaceMask,
    TbFall,
    TbFavicon,
    TbFeatherOff,
    TbFeather,
    TbFenceOff,
    TbFence,
    TbFerry,
    TbFidgetSpinner,
    TbFile3D,
    TbFileAi,
    TbFileAlert,
    TbFileAnalytics,
    TbFileArrowLeft,
    TbFileArrowRight,
    TbFileBarcode,
    TbFileBitcoin,
    TbFileBroken,
    TbFileCertificate,
    TbFileChart,
    TbFileCheck,
    TbFileCode2,
    TbFileCode,
    TbFileCv,
    TbFileDatabase,
    TbFileDelta,
    TbFileDescription,
    TbFileDiff,
    TbFileDigit,
    TbFileDislike,
    TbFileDollar,
    TbFileDots,
    TbFileDownload,
    TbFileEuro,
    TbFileExcel,
    TbFileExport,
    TbFileFunction,
    TbFileHorizontal,
    TbFileImport,
    TbFileInfinity,
    TbFileInfo,
    TbFileInvoice,
    TbFileIsr,
    TbFileLambda,
    TbFileLike,
    TbFileMinus,
    TbFileMusic,
    TbFileNeutral,
    TbFileOff,
    TbFileOrientation,
    TbFilePencil,
    TbFilePercent,
    TbFilePhone,
    TbFilePlus,
    TbFilePower,
    TbFileReport,
    TbFileRss,
    TbFileSad,
    TbFileScissors,
    TbFileSearch,
    TbFileSettings,
    TbFileShredder,
    TbFileSignal,
    TbFileSmile,
    TbFileSpark,
    TbFileSpreadsheet,
    TbFileStack,
    TbFileStar,
    TbFileSymlink,
    TbFileTextAi,
    TbFileTextSpark,
    TbFileText,
    TbFileTime,
    TbFileTypeBmp,
    TbFileTypeCss,
    TbFileTypeCsv,
    TbFileTypeDoc,
    TbFileTypeDocx,
    TbFileTypeHtml,
    TbFileTypeJpg,
    TbFileTypeJs,
    TbFileTypeJsx,
    TbFileTypePdf,
    TbFileTypePhp,
    TbFileTypePng,
    TbFileTypePpt,
    TbFileTypeRs,
    TbFileTypeSql,
    TbFileTypeSvg,
    TbFileTypeTs,
    TbFileTypeTsx,
    TbFileTypeTxt,
    TbFileTypeVue,
    TbFileTypeXls,
    TbFileTypeXml,
    TbFileTypeZip,
    TbFileTypography,
    TbFileUnknown,
    TbFileUpload,
    TbFileVector,
    TbFileWord,
    TbFileX,
    TbFileZip,
    TbFile,
    TbFilesOff,
    TbFiles,
    TbFilterBolt,
    TbFilterCancel,
    TbFilterCheck,
    TbFilterCode,
    TbFilterCog,
    TbFilterDiscount,
    TbFilterDollar,
    TbFilterDown,
    TbFilterEdit,
    TbFilterExclamation,
    TbFilterHeart,
    TbFilterMinus,
    TbFilterOff,
    TbFilterPause,
    TbFilterPin,
    TbFilterPlus,
    TbFilterQuestion,
    TbFilterSearch,
    TbFilterShare,
    TbFilterStar,
    TbFilterUp,
    TbFilterX,
    TbFilter,
    TbFilters,
    TbFingerprintOff,
    TbFingerprintScan,
    TbFingerprint,
    TbFireExtinguisher,
    TbFireHydrantOff,
    TbFireHydrant,
    TbFiretruck,
    TbFirstAidKitOff,
    TbFirstAidKit,
    TbFishBone,
    TbFishChristianity,
    TbFishHookOff,
    TbFishHook,
    TbFishOff,
    TbFish,
    TbFlag2Off,
    TbFlag2,
    TbFlag3,
    TbFlagBitcoin,
    TbFlagBolt,
    TbFlagCancel,
    TbFlagCheck,
    TbFlagCode,
    TbFlagCog,
    TbFlagDiscount,
    TbFlagDollar,
    TbFlagDown,
    TbFlagExclamation,
    TbFlagHeart,
    TbFlagMinus,
    TbFlagOff,
    TbFlagPause,
    TbFlagPin,
    TbFlagPlus,
    TbFlagQuestion,
    TbFlagSearch,
    TbFlagShare,
    TbFlagSpark,
    TbFlagStar,
    TbFlagUp,
    TbFlagX,
    TbFlag,
    TbFlameOff,
    TbFlame,
    TbFlare,
    TbFlask2Off,
    TbFlask2,
    TbFlaskOff,
    TbFlask,
    TbFlipFlops,
    TbFlipHorizontal,
    TbFlipVertical,
    TbFloatCenter,
    TbFloatLeft,
    TbFloatNone,
    TbFloatRight,
    TbFlowerOff,
    TbFlower,
    TbFocus2,
    TbFocusAuto,
    TbFocusCentered,
    TbFocus,
    TbFoldDown,
    TbFoldUp,
    TbFold,
    TbFolderBolt,
    TbFolderCancel,
    TbFolderCheck,
    TbFolderCode,
    TbFolderCog,
    TbFolderDollar,
    TbFolderDown,
    TbFolderExclamation,
    TbFolderHeart,
    TbFolderMinus,
    TbFolderOff,
    TbFolderOpen,
    TbFolderPause,
    TbFolderPin,
    TbFolderPlus,
    TbFolderQuestion,
    TbFolderRoot,
    TbFolderSearch,
    TbFolderShare,
    TbFolderStar,
    TbFolderSymlink,
    TbFolderUp,
    TbFolderX,
    TbFolder,
    TbFoldersOff,
    TbFolders,
    TbForbid2,
    TbForbid,
    TbForklift,
    TbForms,
    TbFountainOff,
    TbFountain,
    TbFrameOff,
    TbFrame,
    TbFreeRights,
    TbFreezeColumn,
    TbFreezeRowColumn,
    TbFreezeRow,
    TbFridgeOff,
    TbFridge,
    TbFriendsOff,
    TbFriends,
    TbFrustumOff,
    TbFrustumPlus,
    TbFrustum,
    TbFunctionOff,
    TbFunction,
    TbGalaxy,
    TbGardenCartOff,
    TbGardenCart,
    TbGasStationOff,
    TbGasStation,
    TbGaugeOff,
    TbGauge,
    TbGavel,
    TbGenderAgender,
    TbGenderAndrogyne,
    TbGenderBigender,
    TbGenderDemiboy,
    TbGenderDemigirl,
    TbGenderEpicene,
    TbGenderFemale,
    TbGenderFemme,
    TbGenderGenderfluid,
    TbGenderGenderless,
    TbGenderGenderqueer,
    TbGenderHermaphrodite,
    TbGenderIntergender,
    TbGenderMale,
    TbGenderNeutrois,
    TbGenderThird,
    TbGenderTransgender,
    TbGenderTrasvesti,
    TbGeometry,
    TbGhost2,
    TbGhost3,
    TbGhostOff,
    TbGhost,
    TbGif,
    TbGiftCard,
    TbGiftOff,
    TbGift,
    TbGitBranchDeleted,
    TbGitBranch,
    TbGitCherryPick,
    TbGitCommit,
    TbGitCompare,
    TbGitFork,
    TbGitMerge,
    TbGitPullRequestClosed,
    TbGitPullRequestDraft,
    TbGitPullRequest,
    TbGizmo,
    TbGlassChampagne,
    TbGlassCocktail,
    TbGlassFull,
    TbGlassGin,
    TbGlassOff,
    TbGlass,
    TbGlobeOff,
    TbGlobe,
    TbGoGame,
    TbGolfOff,
    TbGolf,
    TbGps,
    TbGradienter,
    TbGrain,
    TbGraphOff,
    TbGraph,
    TbGrave2,
    TbGrave,
    TbGrid3X3,
    TbGrid4X4,
    TbGridDots,
    TbGridGoldenratio,
    TbGridPattern,
    TbGridScan,
    TbGrillFork,
    TbGrillOff,
    TbGrillSpatula,
    TbGrill,
    TbGripHorizontal,
    TbGripVertical,
    TbGrowth,
    TbGuitarPick,
    TbGymnastics,
    TbH1,
    TbH2,
    TbH3,
    TbH4,
    TbH5,
    TbH6,
    TbHammerOff,
    TbHammer,
    TbHandClick,
    TbHandFingerDown,
    TbHandFingerLeft,
    TbHandFingerOff,
    TbHandFingerRight,
    TbHandFinger,
    TbHandGrab,
    TbHandLittleFinger,
    TbHandLoveYou,
    TbHandMiddleFinger,
    TbHandMove,
    TbHandOff,
    TbHandRingFinger,
    TbHandSanitizer,
    TbHandStop,
    TbHandThreeFingers,
    TbHandTwoFingers,
    TbHanger2,
    TbHangerOff,
    TbHanger,
    TbHash,
    TbHazeMoon,
    TbHaze,
    TbHdr,
    TbHeadingOff,
    TbHeading,
    TbHeadphonesOff,
    TbHeadphones,
    TbHeadsetOff,
    TbHeadset,
    TbHealthRecognition,
    TbHeartBitcoin,
    TbHeartBolt,
    TbHeartBroken,
    TbHeartCancel,
    TbHeartCheck,
    TbHeartCode,
    TbHeartCog,
    TbHeartDiscount,
    TbHeartDollar,
    TbHeartDown,
    TbHeartExclamation,
    TbHeartHandshake,
    TbHeartMinus,
    TbHeartOff,
    TbHeartPause,
    TbHeartPin,
    TbHeartPlus,
    TbHeartQuestion,
    TbHeartRateMonitor,
    TbHeartSearch,
    TbHeartShare,
    TbHeartSpark,
    TbHeartStar,
    TbHeartUp,
    TbHeartX,
    TbHeart,
    TbHeartbeat,
    TbHeartsOff,
    TbHearts,
    TbHelicopterLanding,
    TbHelicopter,
    TbHelmetOff,
    TbHelmet,
    TbHelpCircle,
    TbHelpHexagon,
    TbHelpOctagon,
    TbHelpOff,
    TbHelpSmall,
    TbHelpSquareRounded,
    TbHelpSquare,
    TbHelpTriangle,
    TbHelp,
    TbHemisphereOff,
    TbHemispherePlus,
    TbHemisphere,
    TbHexagon3D,
    TbHexagonLetterA,
    TbHexagonLetterB,
    TbHexagonLetterC,
    TbHexagonLetterD,
    TbHexagonLetterE,
    TbHexagonLetterF,
    TbHexagonLetterG,
    TbHexagonLetterH,
    TbHexagonLetterI,
    TbHexagonLetterJ,
    TbHexagonLetterK,
    TbHexagonLetterL,
    TbHexagonLetterM,
    TbHexagonLetterN,
    TbHexagonLetterO,
    TbHexagonLetterP,
    TbHexagonLetterQ,
    TbHexagonLetterR,
    TbHexagonLetterS,
    TbHexagonLetterT,
    TbHexagonLetterU,
    TbHexagonLetterV,
    TbHexagonLetterW,
    TbHexagonLetterX,
    TbHexagonLetterY,
    TbHexagonLetterZ,
    TbHexagonMinus2,
    TbHexagonMinus,
    TbHexagonNumber0,
    TbHexagonNumber1,
    TbHexagonNumber2,
    TbHexagonNumber3,
    TbHexagonNumber4,
    TbHexagonNumber5,
    TbHexagonNumber6,
    TbHexagonNumber7,
    TbHexagonNumber8,
    TbHexagonNumber9,
    TbHexagonOff,
    TbHexagonPlus2,
    TbHexagonPlus,
    TbHexagon,
    TbHexagonalPrismOff,
    TbHexagonalPrismPlus,
    TbHexagonalPrism,
    TbHexagonalPyramidOff,
    TbHexagonalPyramidPlus,
    TbHexagonalPyramid,
    TbHexagonsOff,
    TbHexagons,
    TbHierarchy2,
    TbHierarchy3,
    TbHierarchyOff,
    TbHierarchy,
    TbHighlightOff,
    TbHighlight,
    TbHistoryOff,
    TbHistoryToggle,
    TbHistory,
    TbHome2,
    TbHomeBitcoin,
    TbHomeBolt,
    TbHomeCancel,
    TbHomeCheck,
    TbHomeCog,
    TbHomeDollar,
    TbHomeDot,
    TbHomeDown,
    TbHomeEco,
    TbHomeEdit,
    TbHomeExclamation,
    TbHomeHand,
    TbHomeHeart,
    TbHomeInfinity,
    TbHomeLink,
    TbHomeMinus,
    TbHomeMove,
    TbHomeOff,
    TbHomePlus,
    TbHomeQuestion,
    TbHomeRibbon,
    TbHomeSearch,
    TbHomeShare,
    TbHomeShield,
    TbHomeSignal,
    TbHomeSpark,
    TbHomeStar,
    TbHomeStats,
    TbHomeUp,
    TbHomeX,
    TbHome,
    TbHorseToy,
    TbHorse,
    TbHorseshoe,
    TbHospitalCircle,
    TbHospital,
    TbHotelService,
    TbHourglassEmpty,
    TbHourglassHigh,
    TbHourglassLow,
    TbHourglassOff,
    TbHourglass,
    TbHours12,
    TbHours24,
    TbHtml,
    TbHttpConnect,
    TbHttpDelete,
    TbHttpGet,
    TbHttpHead,
    TbHttpOptions,
    TbHttpPatch,
    TbHttpPost,
    TbHttpPut,
    TbHttpQue,
    TbHttpTrace,
    TbIceCream2,
    TbIceCreamOff,
    TbIceCream,
    TbIceSkating,
    TbIconsOff,
    TbIcons,
    TbIdBadge2,
    TbIdBadgeOff,
    TbIdBadge,
    TbIdOff,
    TbId,
    TbIkosaedr,
    TbImageInPicture,
    TbInboxOff,
    TbInbox,
    TbIndentDecrease,
    TbIndentIncrease,
    TbInfinityOff,
    TbInfinity,
    TbInfoCircle,
    TbInfoHexagon,
    TbInfoOctagon,
    TbInfoSmall,
    TbInfoSquareRounded,
    TbInfoSquare,
    TbInfoTriangle,
    TbInnerShadowBottomLeft,
    TbInnerShadowBottomRight,
    TbInnerShadowBottom,
    TbInnerShadowLeft,
    TbInnerShadowRight,
    TbInnerShadowTopLeft,
    TbInnerShadowTopRight,
    TbInnerShadowTop,
    TbInputAi,
    TbInputCheck,
    TbInputSearch,
    TbInputSpark,
    TbInputX,
    TbInvoice,
    TbIroning1,
    TbIroning2,
    TbIroning3,
    TbIroningOff,
    TbIroningSteamOff,
    TbIroningSteam,
    TbIroning,
    TbIrregularPolyhedronOff,
    TbIrregularPolyhedronPlus,
    TbIrregularPolyhedron,
    TbItalic,
    TbJacket,
    TbJetpack,
    TbJewishStar,
    TbJoinBevel,
    TbJoinRound,
    TbJoinStraight,
    TbJoker,
    TbJpg,
    TbJson,
    TbJumpRope,
    TbKarate,
    TbKayak,
    TbKerning,
    TbKeyOff,
    TbKey,
    TbKeyboardHide,
    TbKeyboardOff,
    TbKeyboardShow,
    TbKeyboard,
    TbKeyframeAlignCenter,
    TbKeyframeAlignHorizontal,
    TbKeyframeAlignVertical,
    TbKeyframe,
    TbKeyframes,
    TbLabelImportant,
    TbLabelOff,
    TbLabel,
    TbLadderOff,
    TbLadder,
    TbLadle,
    TbLambda,
    TbLamp2,
    TbLampOff,
    TbLamp,
    TbLane,
    TbLanguageHiragana,
    TbLanguageKatakana,
    TbLanguageOff,
    TbLanguage,
    TbLassoOff,
    TbLassoPolygon,
    TbLasso,
    TbLaurelWreath1,
    TbLaurelWreath2,
    TbLaurelWreath3,
    TbLaurelWreath,
    TbLayersDifference,
    TbLayersIntersect2,
    TbLayersIntersect,
    TbLayersLinked,
    TbLayersOff,
    TbLayersSelectedBottom,
    TbLayersSelected,
    TbLayersSubtract,
    TbLayersUnion,
    TbLayout2,
    TbLayoutAlignBottom,
    TbLayoutAlignCenter,
    TbLayoutAlignLeft,
    TbLayoutAlignMiddle,
    TbLayoutAlignRight,
    TbLayoutAlignTop,
    TbLayoutBoardSplit,
    TbLayoutBoard,
    TbLayoutBottombarCollapse,
    TbLayoutBottombarExpand,
    TbLayoutBottombarInactive,
    TbLayoutBottombar,
    TbLayoutCards,
    TbLayoutCollage,
    TbLayoutColumns,
    TbLayoutDashboard,
    TbLayoutDistributeHorizontal,
    TbLayoutDistributeVertical,
    TbLayoutGridAdd,
    TbLayoutGridRemove,
    TbLayoutGrid,
    TbLayoutKanban,
    TbLayoutList,
    TbLayoutNavbarCollapse,
    TbLayoutNavbarExpand,
    TbLayoutNavbarInactive,
    TbLayoutNavbar,
    TbLayoutOff,
    TbLayoutRows,
    TbLayoutSidebarInactive,
    TbLayoutSidebarLeftCollapse,
    TbLayoutSidebarLeftExpand,
    TbLayoutSidebarRightCollapse,
    TbLayoutSidebarRightExpand,
    TbLayoutSidebarRightInactive,
    TbLayoutSidebarRight,
    TbLayoutSidebar,
    TbLayout,
    TbLeaf2,
    TbLeafOff,
    TbLeaf,
    TbLegoOff,
    TbLego,
    TbLemon2,
    TbLemon,
    TbLetterASmall,
    TbLetterA,
    TbLetterBSmall,
    TbLetterB,
    TbLetterCSmall,
    TbLetterC,
    TbLetterCaseLower,
    TbLetterCaseToggle,
    TbLetterCaseUpper,
    TbLetterCase,
    TbLetterDSmall,
    TbLetterD,
    TbLetterESmall,
    TbLetterE,
    TbLetterFSmall,
    TbLetterF,
    TbLetterGSmall,
    TbLetterG,
    TbLetterHSmall,
    TbLetterH,
    TbLetterISmall,
    TbLetterI,
    TbLetterJSmall,
    TbLetterJ,
    TbLetterKSmall,
    TbLetterK,
    TbLetterLSmall,
    TbLetterL,
    TbLetterMSmall,
    TbLetterM,
    TbLetterNSmall,
    TbLetterN,
    TbLetterOSmall,
    TbLetterO,
    TbLetterPSmall,
    TbLetterP,
    TbLetterQSmall,
    TbLetterQ,
    TbLetterRSmall,
    TbLetterR,
    TbLetterSSmall,
    TbLetterS,
    TbLetterSpacing,
    TbLetterTSmall,
    TbLetterT,
    TbLetterUSmall,
    TbLetterU,
    TbLetterVSmall,
    TbLetterV,
    TbLetterWSmall,
    TbLetterW,
    TbLetterXSmall,
    TbLetterX,
    TbLetterYSmall,
    TbLetterY,
    TbLetterZSmall,
    TbLetterZ,
    TbLibraryMinus,
    TbLibraryPhoto,
    TbLibraryPlus,
    TbLibrary,
    TbLicenseOff,
    TbLicense,
    TbLifebuoyOff,
    TbLifebuoy,
    TbLighter,
    TbLineDashed,
    TbLineDotted,
    TbLineHeight,
    TbLineScan,
    TbLine,
    TbLinkMinus,
    TbLinkOff,
    TbLinkPlus,
    TbLink,
    TbListCheck,
    TbListDetails,
    TbListLetters,
    TbListNumbers,
    TbListSearch,
    TbListTree,
    TbList,
    TbLivePhotoOff,
    TbLivePhoto,
    TbLiveView,
    TbLoadBalancer,
    TbLoader2,
    TbLoader3,
    TbLoaderQuarter,
    TbLoader,
    TbLocationBolt,
    TbLocationBroken,
    TbLocationCancel,
    TbLocationCheck,
    TbLocationCode,
    TbLocationCog,
    TbLocationDiscount,
    TbLocationDollar,
    TbLocationDown,
    TbLocationExclamation,
    TbLocationHeart,
    TbLocationMinus,
    TbLocationOff,
    TbLocationPause,
    TbLocationPin,
    TbLocationPlus,
    TbLocationQuestion,
    TbLocationSearch,
    TbLocationShare,
    TbLocationStar,
    TbLocationUp,
    TbLocationX,
    TbLocation,
    TbLockAccessOff,
    TbLockAccess,
    TbLockBitcoin,
    TbLockBolt,
    TbLockCancel,
    TbLockCheck,
    TbLockCode,
    TbLockCog,
    TbLockDollar,
    TbLockDown,
    TbLockExclamation,
    TbLockHeart,
    TbLockMinus,
    TbLockOff,
    TbLockOpen2,
    TbLockOpenOff,
    TbLockOpen,
    TbLockPassword,
    TbLockPause,
    TbLockPin,
    TbLockPlus,
    TbLockQuestion,
    TbLockSearch,
    TbLockShare,
    TbLockSquareRounded,
    TbLockSquare,
    TbLockStar,
    TbLockUp,
    TbLockX,
    TbLock,
    TbLogicAnd,
    TbLogicBuffer,
    TbLogicNand,
    TbLogicNor,
    TbLogicNot,
    TbLogicOr,
    TbLogicXnor,
    TbLogicXor,
    TbLogin2,
    TbLogin,
    TbLogout2,
    TbLogout,
    TbLogs,
    TbLollipopOff,
    TbLollipop,
    TbLuggageOff,
    TbLuggage,
    TbLungsOff,
    TbLungs,
    TbMacroOff,
    TbMacro,
    TbMagnetOff,
    TbMagnet,
    TbMagnetic,
    TbMailAi,
    TbMailBitcoin,
    TbMailBolt,
    TbMailCancel,
    TbMailCheck,
    TbMailCode,
    TbMailCog,
    TbMailDollar,
    TbMailDown,
    TbMailExclamation,
    TbMailFast,
    TbMailForward,
    TbMailHeart,
    TbMailMinus,
    TbMailOff,
    TbMailOpened,
    TbMailPause,
    TbMailPin,
    TbMailPlus,
    TbMailQuestion,
    TbMailSearch,
    TbMailShare,
    TbMailSpark,
    TbMailStar,
    TbMailUp,
    TbMailX,
    TbMail,
    TbMailboxOff,
    TbMailbox,
    TbMan,
    TbManualGearbox,
    TbMap2,
    TbMapBolt,
    TbMapCancel,
    TbMapCheck,
    TbMapCode,
    TbMapCog,
    TbMapDiscount,
    TbMapDollar,
    TbMapDown,
    TbMapEast,
    TbMapExclamation,
    TbMapHeart,
    TbMapMinus,
    TbMapNorth,
    TbMapOff,
    TbMapPause,
    TbMapPin2,
    TbMapPinBolt,
    TbMapPinCancel,
    TbMapPinCheck,
    TbMapPinCode,
    TbMapPinCog,
    TbMapPinDollar,
    TbMapPinDown,
    TbMapPinExclamation,
    TbMapPinHeart,
    TbMapPinMinus,
    TbMapPinOff,
    TbMapPinPause,
    TbMapPinPin,
    TbMapPinPlus,
    TbMapPinQuestion,
    TbMapPinSearch,
    TbMapPinShare,
    TbMapPinStar,
    TbMapPinUp,
    TbMapPinX,
    TbMapPin,
    TbMapPins,
    TbMapPlus,
    TbMapQuestion,
    TbMapRoute,
    TbMapSearch,
    TbMapShare,
    TbMapSouth,
    TbMapStar,
    TbMapUp,
    TbMapWest,
    TbMapX,
    TbMap,
    TbMarkdownOff,
    TbMarkdown,
    TbMarquee2,
    TbMarqueeOff,
    TbMarquee,
    TbMars,
    TbMaskOff,
    TbMask,
    TbMasksTheaterOff,
    TbMasksTheater,
    TbMassage,
    TbMatchstick,
    TbMath1Divide2,
    TbMath1Divide3,
    TbMathAvg,
    TbMathCos,
    TbMathCtg,
    TbMathEqualGreater,
    TbMathEqualLower,
    TbMathFunctionOff,
    TbMathFunctionY,
    TbMathFunction,
    TbMathGreater,
    TbMathIntegralX,
    TbMathIntegral,
    TbMathIntegrals,
    TbMathLower,
    TbMathMaxMin,
    TbMathMax,
    TbMathMin,
    TbMathNot,
    TbMathOff,
    TbMathPiDivide2,
    TbMathPi,
    TbMathSec,
    TbMathSin,
    TbMathSymbols,
    TbMathTg,
    TbMathXDivide2,
    TbMathXDivideY2,
    TbMathXDivideY,
    TbMathXFloorDivideY,
    TbMathXMinusX,
    TbMathXMinusY,
    TbMathXPlusX,
    TbMathXPlusY,
    TbMathXy,
    TbMathYMinusY,
    TbMathYPlusY,
    TbMath,
    TbMatrix,
    TbMaximizeOff,
    TbMaximize,
    TbMeatOff,
    TbMeat,
    TbMedal2,
    TbMedal,
    TbMedicalCrossCircle,
    TbMedicalCrossOff,
    TbMedicalCross,
    TbMedicineSyrup,
    TbMeeple,
    TbMelon,
    TbMenorah,
    TbMenu2,
    TbMenu3,
    TbMenu4,
    TbMenuDeep,
    TbMenuOrder,
    TbMenu,
    TbMessage2Bolt,
    TbMessage2Cancel,
    TbMessage2Check,
} from "react-icons/tb"

export function nameToReactIcon_tb_3(iconName: string): IconType | undefined {

    switch(iconName) {
        case "tb:TbEyeglass2":
            return TbEyeglass2;
        case "tb:TbEyeglassOff":
            return TbEyeglassOff;
        case "tb:TbEyeglass":
            return TbEyeglass;
        case "tb:TbFaceIdError":
            return TbFaceIdError;
        case "tb:TbFaceId":
            return TbFaceId;
        case "tb:TbFaceMaskOff":
            return TbFaceMaskOff;
        case "tb:TbFaceMask":
            return TbFaceMask;
        case "tb:TbFall":
            return TbFall;
        case "tb:TbFavicon":
            return TbFavicon;
        case "tb:TbFeatherOff":
            return TbFeatherOff;
        case "tb:TbFeather":
            return TbFeather;
        case "tb:TbFenceOff":
            return TbFenceOff;
        case "tb:TbFence":
            return TbFence;
        case "tb:TbFerry":
            return TbFerry;
        case "tb:TbFidgetSpinner":
            return TbFidgetSpinner;
        case "tb:TbFile3D":
            return TbFile3D;
        case "tb:TbFileAi":
            return TbFileAi;
        case "tb:TbFileAlert":
            return TbFileAlert;
        case "tb:TbFileAnalytics":
            return TbFileAnalytics;
        case "tb:TbFileArrowLeft":
            return TbFileArrowLeft;
        case "tb:TbFileArrowRight":
            return TbFileArrowRight;
        case "tb:TbFileBarcode":
            return TbFileBarcode;
        case "tb:TbFileBitcoin":
            return TbFileBitcoin;
        case "tb:TbFileBroken":
            return TbFileBroken;
        case "tb:TbFileCertificate":
            return TbFileCertificate;
        case "tb:TbFileChart":
            return TbFileChart;
        case "tb:TbFileCheck":
            return TbFileCheck;
        case "tb:TbFileCode2":
            return TbFileCode2;
        case "tb:TbFileCode":
            return TbFileCode;
        case "tb:TbFileCv":
            return TbFileCv;
        case "tb:TbFileDatabase":
            return TbFileDatabase;
        case "tb:TbFileDelta":
            return TbFileDelta;
        case "tb:TbFileDescription":
            return TbFileDescription;
        case "tb:TbFileDiff":
            return TbFileDiff;
        case "tb:TbFileDigit":
            return TbFileDigit;
        case "tb:TbFileDislike":
            return TbFileDislike;
        case "tb:TbFileDollar":
            return TbFileDollar;
        case "tb:TbFileDots":
            return TbFileDots;
        case "tb:TbFileDownload":
            return TbFileDownload;
        case "tb:TbFileEuro":
            return TbFileEuro;
        case "tb:TbFileExcel":
            return TbFileExcel;
        case "tb:TbFileExport":
            return TbFileExport;
        case "tb:TbFileFunction":
            return TbFileFunction;
        case "tb:TbFileHorizontal":
            return TbFileHorizontal;
        case "tb:TbFileImport":
            return TbFileImport;
        case "tb:TbFileInfinity":
            return TbFileInfinity;
        case "tb:TbFileInfo":
            return TbFileInfo;
        case "tb:TbFileInvoice":
            return TbFileInvoice;
        case "tb:TbFileIsr":
            return TbFileIsr;
        case "tb:TbFileLambda":
            return TbFileLambda;
        case "tb:TbFileLike":
            return TbFileLike;
        case "tb:TbFileMinus":
            return TbFileMinus;
        case "tb:TbFileMusic":
            return TbFileMusic;
        case "tb:TbFileNeutral":
            return TbFileNeutral;
        case "tb:TbFileOff":
            return TbFileOff;
        case "tb:TbFileOrientation":
            return TbFileOrientation;
        case "tb:TbFilePencil":
            return TbFilePencil;
        case "tb:TbFilePercent":
            return TbFilePercent;
        case "tb:TbFilePhone":
            return TbFilePhone;
        case "tb:TbFilePlus":
            return TbFilePlus;
        case "tb:TbFilePower":
            return TbFilePower;
        case "tb:TbFileReport":
            return TbFileReport;
        case "tb:TbFileRss":
            return TbFileRss;
        case "tb:TbFileSad":
            return TbFileSad;
        case "tb:TbFileScissors":
            return TbFileScissors;
        case "tb:TbFileSearch":
            return TbFileSearch;
        case "tb:TbFileSettings":
            return TbFileSettings;
        case "tb:TbFileShredder":
            return TbFileShredder;
        case "tb:TbFileSignal":
            return TbFileSignal;
        case "tb:TbFileSmile":
            return TbFileSmile;
        case "tb:TbFileSpark":
            return TbFileSpark;
        case "tb:TbFileSpreadsheet":
            return TbFileSpreadsheet;
        case "tb:TbFileStack":
            return TbFileStack;
        case "tb:TbFileStar":
            return TbFileStar;
        case "tb:TbFileSymlink":
            return TbFileSymlink;
        case "tb:TbFileTextAi":
            return TbFileTextAi;
        case "tb:TbFileTextSpark":
            return TbFileTextSpark;
        case "tb:TbFileText":
            return TbFileText;
        case "tb:TbFileTime":
            return TbFileTime;
        case "tb:TbFileTypeBmp":
            return TbFileTypeBmp;
        case "tb:TbFileTypeCss":
            return TbFileTypeCss;
        case "tb:TbFileTypeCsv":
            return TbFileTypeCsv;
        case "tb:TbFileTypeDoc":
            return TbFileTypeDoc;
        case "tb:TbFileTypeDocx":
            return TbFileTypeDocx;
        case "tb:TbFileTypeHtml":
            return TbFileTypeHtml;
        case "tb:TbFileTypeJpg":
            return TbFileTypeJpg;
        case "tb:TbFileTypeJs":
            return TbFileTypeJs;
        case "tb:TbFileTypeJsx":
            return TbFileTypeJsx;
        case "tb:TbFileTypePdf":
            return TbFileTypePdf;
        case "tb:TbFileTypePhp":
            return TbFileTypePhp;
        case "tb:TbFileTypePng":
            return TbFileTypePng;
        case "tb:TbFileTypePpt":
            return TbFileTypePpt;
        case "tb:TbFileTypeRs":
            return TbFileTypeRs;
        case "tb:TbFileTypeSql":
            return TbFileTypeSql;
        case "tb:TbFileTypeSvg":
            return TbFileTypeSvg;
        case "tb:TbFileTypeTs":
            return TbFileTypeTs;
        case "tb:TbFileTypeTsx":
            return TbFileTypeTsx;
        case "tb:TbFileTypeTxt":
            return TbFileTypeTxt;
        case "tb:TbFileTypeVue":
            return TbFileTypeVue;
        case "tb:TbFileTypeXls":
            return TbFileTypeXls;
        case "tb:TbFileTypeXml":
            return TbFileTypeXml;
        case "tb:TbFileTypeZip":
            return TbFileTypeZip;
        case "tb:TbFileTypography":
            return TbFileTypography;
        case "tb:TbFileUnknown":
            return TbFileUnknown;
        case "tb:TbFileUpload":
            return TbFileUpload;
        case "tb:TbFileVector":
            return TbFileVector;
        case "tb:TbFileWord":
            return TbFileWord;
        case "tb:TbFileX":
            return TbFileX;
        case "tb:TbFileZip":
            return TbFileZip;
        case "tb:TbFile":
            return TbFile;
        case "tb:TbFilesOff":
            return TbFilesOff;
        case "tb:TbFiles":
            return TbFiles;
        case "tb:TbFilterBolt":
            return TbFilterBolt;
        case "tb:TbFilterCancel":
            return TbFilterCancel;
        case "tb:TbFilterCheck":
            return TbFilterCheck;
        case "tb:TbFilterCode":
            return TbFilterCode;
        case "tb:TbFilterCog":
            return TbFilterCog;
        case "tb:TbFilterDiscount":
            return TbFilterDiscount;
        case "tb:TbFilterDollar":
            return TbFilterDollar;
        case "tb:TbFilterDown":
            return TbFilterDown;
        case "tb:TbFilterEdit":
            return TbFilterEdit;
        case "tb:TbFilterExclamation":
            return TbFilterExclamation;
        case "tb:TbFilterHeart":
            return TbFilterHeart;
        case "tb:TbFilterMinus":
            return TbFilterMinus;
        case "tb:TbFilterOff":
            return TbFilterOff;
        case "tb:TbFilterPause":
            return TbFilterPause;
        case "tb:TbFilterPin":
            return TbFilterPin;
        case "tb:TbFilterPlus":
            return TbFilterPlus;
        case "tb:TbFilterQuestion":
            return TbFilterQuestion;
        case "tb:TbFilterSearch":
            return TbFilterSearch;
        case "tb:TbFilterShare":
            return TbFilterShare;
        case "tb:TbFilterStar":
            return TbFilterStar;
        case "tb:TbFilterUp":
            return TbFilterUp;
        case "tb:TbFilterX":
            return TbFilterX;
        case "tb:TbFilter":
            return TbFilter;
        case "tb:TbFilters":
            return TbFilters;
        case "tb:TbFingerprintOff":
            return TbFingerprintOff;
        case "tb:TbFingerprintScan":
            return TbFingerprintScan;
        case "tb:TbFingerprint":
            return TbFingerprint;
        case "tb:TbFireExtinguisher":
            return TbFireExtinguisher;
        case "tb:TbFireHydrantOff":
            return TbFireHydrantOff;
        case "tb:TbFireHydrant":
            return TbFireHydrant;
        case "tb:TbFiretruck":
            return TbFiretruck;
        case "tb:TbFirstAidKitOff":
            return TbFirstAidKitOff;
        case "tb:TbFirstAidKit":
            return TbFirstAidKit;
        case "tb:TbFishBone":
            return TbFishBone;
        case "tb:TbFishChristianity":
            return TbFishChristianity;
        case "tb:TbFishHookOff":
            return TbFishHookOff;
        case "tb:TbFishHook":
            return TbFishHook;
        case "tb:TbFishOff":
            return TbFishOff;
        case "tb:TbFish":
            return TbFish;
        case "tb:TbFlag2Off":
            return TbFlag2Off;
        case "tb:TbFlag2":
            return TbFlag2;
        case "tb:TbFlag3":
            return TbFlag3;
        case "tb:TbFlagBitcoin":
            return TbFlagBitcoin;
        case "tb:TbFlagBolt":
            return TbFlagBolt;
        case "tb:TbFlagCancel":
            return TbFlagCancel;
        case "tb:TbFlagCheck":
            return TbFlagCheck;
        case "tb:TbFlagCode":
            return TbFlagCode;
        case "tb:TbFlagCog":
            return TbFlagCog;
        case "tb:TbFlagDiscount":
            return TbFlagDiscount;
        case "tb:TbFlagDollar":
            return TbFlagDollar;
        case "tb:TbFlagDown":
            return TbFlagDown;
        case "tb:TbFlagExclamation":
            return TbFlagExclamation;
        case "tb:TbFlagHeart":
            return TbFlagHeart;
        case "tb:TbFlagMinus":
            return TbFlagMinus;
        case "tb:TbFlagOff":
            return TbFlagOff;
        case "tb:TbFlagPause":
            return TbFlagPause;
        case "tb:TbFlagPin":
            return TbFlagPin;
        case "tb:TbFlagPlus":
            return TbFlagPlus;
        case "tb:TbFlagQuestion":
            return TbFlagQuestion;
        case "tb:TbFlagSearch":
            return TbFlagSearch;
        case "tb:TbFlagShare":
            return TbFlagShare;
        case "tb:TbFlagSpark":
            return TbFlagSpark;
        case "tb:TbFlagStar":
            return TbFlagStar;
        case "tb:TbFlagUp":
            return TbFlagUp;
        case "tb:TbFlagX":
            return TbFlagX;
        case "tb:TbFlag":
            return TbFlag;
        case "tb:TbFlameOff":
            return TbFlameOff;
        case "tb:TbFlame":
            return TbFlame;
        case "tb:TbFlare":
            return TbFlare;
        case "tb:TbFlask2Off":
            return TbFlask2Off;
        case "tb:TbFlask2":
            return TbFlask2;
        case "tb:TbFlaskOff":
            return TbFlaskOff;
        case "tb:TbFlask":
            return TbFlask;
        case "tb:TbFlipFlops":
            return TbFlipFlops;
        case "tb:TbFlipHorizontal":
            return TbFlipHorizontal;
        case "tb:TbFlipVertical":
            return TbFlipVertical;
        case "tb:TbFloatCenter":
            return TbFloatCenter;
        case "tb:TbFloatLeft":
            return TbFloatLeft;
        case "tb:TbFloatNone":
            return TbFloatNone;
        case "tb:TbFloatRight":
            return TbFloatRight;
        case "tb:TbFlowerOff":
            return TbFlowerOff;
        case "tb:TbFlower":
            return TbFlower;
        case "tb:TbFocus2":
            return TbFocus2;
        case "tb:TbFocusAuto":
            return TbFocusAuto;
        case "tb:TbFocusCentered":
            return TbFocusCentered;
        case "tb:TbFocus":
            return TbFocus;
        case "tb:TbFoldDown":
            return TbFoldDown;
        case "tb:TbFoldUp":
            return TbFoldUp;
        case "tb:TbFold":
            return TbFold;
        case "tb:TbFolderBolt":
            return TbFolderBolt;
        case "tb:TbFolderCancel":
            return TbFolderCancel;
        case "tb:TbFolderCheck":
            return TbFolderCheck;
        case "tb:TbFolderCode":
            return TbFolderCode;
        case "tb:TbFolderCog":
            return TbFolderCog;
        case "tb:TbFolderDollar":
            return TbFolderDollar;
        case "tb:TbFolderDown":
            return TbFolderDown;
        case "tb:TbFolderExclamation":
            return TbFolderExclamation;
        case "tb:TbFolderHeart":
            return TbFolderHeart;
        case "tb:TbFolderMinus":
            return TbFolderMinus;
        case "tb:TbFolderOff":
            return TbFolderOff;
        case "tb:TbFolderOpen":
            return TbFolderOpen;
        case "tb:TbFolderPause":
            return TbFolderPause;
        case "tb:TbFolderPin":
            return TbFolderPin;
        case "tb:TbFolderPlus":
            return TbFolderPlus;
        case "tb:TbFolderQuestion":
            return TbFolderQuestion;
        case "tb:TbFolderRoot":
            return TbFolderRoot;
        case "tb:TbFolderSearch":
            return TbFolderSearch;
        case "tb:TbFolderShare":
            return TbFolderShare;
        case "tb:TbFolderStar":
            return TbFolderStar;
        case "tb:TbFolderSymlink":
            return TbFolderSymlink;
        case "tb:TbFolderUp":
            return TbFolderUp;
        case "tb:TbFolderX":
            return TbFolderX;
        case "tb:TbFolder":
            return TbFolder;
        case "tb:TbFoldersOff":
            return TbFoldersOff;
        case "tb:TbFolders":
            return TbFolders;
        case "tb:TbForbid2":
            return TbForbid2;
        case "tb:TbForbid":
            return TbForbid;
        case "tb:TbForklift":
            return TbForklift;
        case "tb:TbForms":
            return TbForms;
        case "tb:TbFountainOff":
            return TbFountainOff;
        case "tb:TbFountain":
            return TbFountain;
        case "tb:TbFrameOff":
            return TbFrameOff;
        case "tb:TbFrame":
            return TbFrame;
        case "tb:TbFreeRights":
            return TbFreeRights;
        case "tb:TbFreezeColumn":
            return TbFreezeColumn;
        case "tb:TbFreezeRowColumn":
            return TbFreezeRowColumn;
        case "tb:TbFreezeRow":
            return TbFreezeRow;
        case "tb:TbFridgeOff":
            return TbFridgeOff;
        case "tb:TbFridge":
            return TbFridge;
        case "tb:TbFriendsOff":
            return TbFriendsOff;
        case "tb:TbFriends":
            return TbFriends;
        case "tb:TbFrustumOff":
            return TbFrustumOff;
        case "tb:TbFrustumPlus":
            return TbFrustumPlus;
        case "tb:TbFrustum":
            return TbFrustum;
        case "tb:TbFunctionOff":
            return TbFunctionOff;
        case "tb:TbFunction":
            return TbFunction;
        case "tb:TbGalaxy":
            return TbGalaxy;
        case "tb:TbGardenCartOff":
            return TbGardenCartOff;
        case "tb:TbGardenCart":
            return TbGardenCart;
        case "tb:TbGasStationOff":
            return TbGasStationOff;
        case "tb:TbGasStation":
            return TbGasStation;
        case "tb:TbGaugeOff":
            return TbGaugeOff;
        case "tb:TbGauge":
            return TbGauge;
        case "tb:TbGavel":
            return TbGavel;
        case "tb:TbGenderAgender":
            return TbGenderAgender;
        case "tb:TbGenderAndrogyne":
            return TbGenderAndrogyne;
        case "tb:TbGenderBigender":
            return TbGenderBigender;
        case "tb:TbGenderDemiboy":
            return TbGenderDemiboy;
        case "tb:TbGenderDemigirl":
            return TbGenderDemigirl;
        case "tb:TbGenderEpicene":
            return TbGenderEpicene;
        case "tb:TbGenderFemale":
            return TbGenderFemale;
        case "tb:TbGenderFemme":
            return TbGenderFemme;
        case "tb:TbGenderGenderfluid":
            return TbGenderGenderfluid;
        case "tb:TbGenderGenderless":
            return TbGenderGenderless;
        case "tb:TbGenderGenderqueer":
            return TbGenderGenderqueer;
        case "tb:TbGenderHermaphrodite":
            return TbGenderHermaphrodite;
        case "tb:TbGenderIntergender":
            return TbGenderIntergender;
        case "tb:TbGenderMale":
            return TbGenderMale;
        case "tb:TbGenderNeutrois":
            return TbGenderNeutrois;
        case "tb:TbGenderThird":
            return TbGenderThird;
        case "tb:TbGenderTransgender":
            return TbGenderTransgender;
        case "tb:TbGenderTrasvesti":
            return TbGenderTrasvesti;
        case "tb:TbGeometry":
            return TbGeometry;
        case "tb:TbGhost2":
            return TbGhost2;
        case "tb:TbGhost3":
            return TbGhost3;
        case "tb:TbGhostOff":
            return TbGhostOff;
        case "tb:TbGhost":
            return TbGhost;
        case "tb:TbGif":
            return TbGif;
        case "tb:TbGiftCard":
            return TbGiftCard;
        case "tb:TbGiftOff":
            return TbGiftOff;
        case "tb:TbGift":
            return TbGift;
        case "tb:TbGitBranchDeleted":
            return TbGitBranchDeleted;
        case "tb:TbGitBranch":
            return TbGitBranch;
        case "tb:TbGitCherryPick":
            return TbGitCherryPick;
        case "tb:TbGitCommit":
            return TbGitCommit;
        case "tb:TbGitCompare":
            return TbGitCompare;
        case "tb:TbGitFork":
            return TbGitFork;
        case "tb:TbGitMerge":
            return TbGitMerge;
        case "tb:TbGitPullRequestClosed":
            return TbGitPullRequestClosed;
        case "tb:TbGitPullRequestDraft":
            return TbGitPullRequestDraft;
        case "tb:TbGitPullRequest":
            return TbGitPullRequest;
        case "tb:TbGizmo":
            return TbGizmo;
        case "tb:TbGlassChampagne":
            return TbGlassChampagne;
        case "tb:TbGlassCocktail":
            return TbGlassCocktail;
        case "tb:TbGlassFull":
            return TbGlassFull;
        case "tb:TbGlassGin":
            return TbGlassGin;
        case "tb:TbGlassOff":
            return TbGlassOff;
        case "tb:TbGlass":
            return TbGlass;
        case "tb:TbGlobeOff":
            return TbGlobeOff;
        case "tb:TbGlobe":
            return TbGlobe;
        case "tb:TbGoGame":
            return TbGoGame;
        case "tb:TbGolfOff":
            return TbGolfOff;
        case "tb:TbGolf":
            return TbGolf;
        case "tb:TbGps":
            return TbGps;
        case "tb:TbGradienter":
            return TbGradienter;
        case "tb:TbGrain":
            return TbGrain;
        case "tb:TbGraphOff":
            return TbGraphOff;
        case "tb:TbGraph":
            return TbGraph;
        case "tb:TbGrave2":
            return TbGrave2;
        case "tb:TbGrave":
            return TbGrave;
        case "tb:TbGrid3X3":
            return TbGrid3X3;
        case "tb:TbGrid4X4":
            return TbGrid4X4;
        case "tb:TbGridDots":
            return TbGridDots;
        case "tb:TbGridGoldenratio":
            return TbGridGoldenratio;
        case "tb:TbGridPattern":
            return TbGridPattern;
        case "tb:TbGridScan":
            return TbGridScan;
        case "tb:TbGrillFork":
            return TbGrillFork;
        case "tb:TbGrillOff":
            return TbGrillOff;
        case "tb:TbGrillSpatula":
            return TbGrillSpatula;
        case "tb:TbGrill":
            return TbGrill;
        case "tb:TbGripHorizontal":
            return TbGripHorizontal;
        case "tb:TbGripVertical":
            return TbGripVertical;
        case "tb:TbGrowth":
            return TbGrowth;
        case "tb:TbGuitarPick":
            return TbGuitarPick;
        case "tb:TbGymnastics":
            return TbGymnastics;
        case "tb:TbH1":
            return TbH1;
        case "tb:TbH2":
            return TbH2;
        case "tb:TbH3":
            return TbH3;
        case "tb:TbH4":
            return TbH4;
        case "tb:TbH5":
            return TbH5;
        case "tb:TbH6":
            return TbH6;
        case "tb:TbHammerOff":
            return TbHammerOff;
        case "tb:TbHammer":
            return TbHammer;
        case "tb:TbHandClick":
            return TbHandClick;
        case "tb:TbHandFingerDown":
            return TbHandFingerDown;
        case "tb:TbHandFingerLeft":
            return TbHandFingerLeft;
        case "tb:TbHandFingerOff":
            return TbHandFingerOff;
        case "tb:TbHandFingerRight":
            return TbHandFingerRight;
        case "tb:TbHandFinger":
            return TbHandFinger;
        case "tb:TbHandGrab":
            return TbHandGrab;
        case "tb:TbHandLittleFinger":
            return TbHandLittleFinger;
        case "tb:TbHandLoveYou":
            return TbHandLoveYou;
        case "tb:TbHandMiddleFinger":
            return TbHandMiddleFinger;
        case "tb:TbHandMove":
            return TbHandMove;
        case "tb:TbHandOff":
            return TbHandOff;
        case "tb:TbHandRingFinger":
            return TbHandRingFinger;
        case "tb:TbHandSanitizer":
            return TbHandSanitizer;
        case "tb:TbHandStop":
            return TbHandStop;
        case "tb:TbHandThreeFingers":
            return TbHandThreeFingers;
        case "tb:TbHandTwoFingers":
            return TbHandTwoFingers;
        case "tb:TbHanger2":
            return TbHanger2;
        case "tb:TbHangerOff":
            return TbHangerOff;
        case "tb:TbHanger":
            return TbHanger;
        case "tb:TbHash":
            return TbHash;
        case "tb:TbHazeMoon":
            return TbHazeMoon;
        case "tb:TbHaze":
            return TbHaze;
        case "tb:TbHdr":
            return TbHdr;
        case "tb:TbHeadingOff":
            return TbHeadingOff;
        case "tb:TbHeading":
            return TbHeading;
        case "tb:TbHeadphonesOff":
            return TbHeadphonesOff;
        case "tb:TbHeadphones":
            return TbHeadphones;
        case "tb:TbHeadsetOff":
            return TbHeadsetOff;
        case "tb:TbHeadset":
            return TbHeadset;
        case "tb:TbHealthRecognition":
            return TbHealthRecognition;
        case "tb:TbHeartBitcoin":
            return TbHeartBitcoin;
        case "tb:TbHeartBolt":
            return TbHeartBolt;
        case "tb:TbHeartBroken":
            return TbHeartBroken;
        case "tb:TbHeartCancel":
            return TbHeartCancel;
        case "tb:TbHeartCheck":
            return TbHeartCheck;
        case "tb:TbHeartCode":
            return TbHeartCode;
        case "tb:TbHeartCog":
            return TbHeartCog;
        case "tb:TbHeartDiscount":
            return TbHeartDiscount;
        case "tb:TbHeartDollar":
            return TbHeartDollar;
        case "tb:TbHeartDown":
            return TbHeartDown;
        case "tb:TbHeartExclamation":
            return TbHeartExclamation;
        case "tb:TbHeartHandshake":
            return TbHeartHandshake;
        case "tb:TbHeartMinus":
            return TbHeartMinus;
        case "tb:TbHeartOff":
            return TbHeartOff;
        case "tb:TbHeartPause":
            return TbHeartPause;
        case "tb:TbHeartPin":
            return TbHeartPin;
        case "tb:TbHeartPlus":
            return TbHeartPlus;
        case "tb:TbHeartQuestion":
            return TbHeartQuestion;
        case "tb:TbHeartRateMonitor":
            return TbHeartRateMonitor;
        case "tb:TbHeartSearch":
            return TbHeartSearch;
        case "tb:TbHeartShare":
            return TbHeartShare;
        case "tb:TbHeartSpark":
            return TbHeartSpark;
        case "tb:TbHeartStar":
            return TbHeartStar;
        case "tb:TbHeartUp":
            return TbHeartUp;
        case "tb:TbHeartX":
            return TbHeartX;
        case "tb:TbHeart":
            return TbHeart;
        case "tb:TbHeartbeat":
            return TbHeartbeat;
        case "tb:TbHeartsOff":
            return TbHeartsOff;
        case "tb:TbHearts":
            return TbHearts;
        case "tb:TbHelicopterLanding":
            return TbHelicopterLanding;
        case "tb:TbHelicopter":
            return TbHelicopter;
        case "tb:TbHelmetOff":
            return TbHelmetOff;
        case "tb:TbHelmet":
            return TbHelmet;
        case "tb:TbHelpCircle":
            return TbHelpCircle;
        case "tb:TbHelpHexagon":
            return TbHelpHexagon;
        case "tb:TbHelpOctagon":
            return TbHelpOctagon;
        case "tb:TbHelpOff":
            return TbHelpOff;
        case "tb:TbHelpSmall":
            return TbHelpSmall;
        case "tb:TbHelpSquareRounded":
            return TbHelpSquareRounded;
        case "tb:TbHelpSquare":
            return TbHelpSquare;
        case "tb:TbHelpTriangle":
            return TbHelpTriangle;
        case "tb:TbHelp":
            return TbHelp;
        case "tb:TbHemisphereOff":
            return TbHemisphereOff;
        case "tb:TbHemispherePlus":
            return TbHemispherePlus;
        case "tb:TbHemisphere":
            return TbHemisphere;
        case "tb:TbHexagon3D":
            return TbHexagon3D;
        case "tb:TbHexagonLetterA":
            return TbHexagonLetterA;
        case "tb:TbHexagonLetterB":
            return TbHexagonLetterB;
        case "tb:TbHexagonLetterC":
            return TbHexagonLetterC;
        case "tb:TbHexagonLetterD":
            return TbHexagonLetterD;
        case "tb:TbHexagonLetterE":
            return TbHexagonLetterE;
        case "tb:TbHexagonLetterF":
            return TbHexagonLetterF;
        case "tb:TbHexagonLetterG":
            return TbHexagonLetterG;
        case "tb:TbHexagonLetterH":
            return TbHexagonLetterH;
        case "tb:TbHexagonLetterI":
            return TbHexagonLetterI;
        case "tb:TbHexagonLetterJ":
            return TbHexagonLetterJ;
        case "tb:TbHexagonLetterK":
            return TbHexagonLetterK;
        case "tb:TbHexagonLetterL":
            return TbHexagonLetterL;
        case "tb:TbHexagonLetterM":
            return TbHexagonLetterM;
        case "tb:TbHexagonLetterN":
            return TbHexagonLetterN;
        case "tb:TbHexagonLetterO":
            return TbHexagonLetterO;
        case "tb:TbHexagonLetterP":
            return TbHexagonLetterP;
        case "tb:TbHexagonLetterQ":
            return TbHexagonLetterQ;
        case "tb:TbHexagonLetterR":
            return TbHexagonLetterR;
        case "tb:TbHexagonLetterS":
            return TbHexagonLetterS;
        case "tb:TbHexagonLetterT":
            return TbHexagonLetterT;
        case "tb:TbHexagonLetterU":
            return TbHexagonLetterU;
        case "tb:TbHexagonLetterV":
            return TbHexagonLetterV;
        case "tb:TbHexagonLetterW":
            return TbHexagonLetterW;
        case "tb:TbHexagonLetterX":
            return TbHexagonLetterX;
        case "tb:TbHexagonLetterY":
            return TbHexagonLetterY;
        case "tb:TbHexagonLetterZ":
            return TbHexagonLetterZ;
        case "tb:TbHexagonMinus2":
            return TbHexagonMinus2;
        case "tb:TbHexagonMinus":
            return TbHexagonMinus;
        case "tb:TbHexagonNumber0":
            return TbHexagonNumber0;
        case "tb:TbHexagonNumber1":
            return TbHexagonNumber1;
        case "tb:TbHexagonNumber2":
            return TbHexagonNumber2;
        case "tb:TbHexagonNumber3":
            return TbHexagonNumber3;
        case "tb:TbHexagonNumber4":
            return TbHexagonNumber4;
        case "tb:TbHexagonNumber5":
            return TbHexagonNumber5;
        case "tb:TbHexagonNumber6":
            return TbHexagonNumber6;
        case "tb:TbHexagonNumber7":
            return TbHexagonNumber7;
        case "tb:TbHexagonNumber8":
            return TbHexagonNumber8;
        case "tb:TbHexagonNumber9":
            return TbHexagonNumber9;
        case "tb:TbHexagonOff":
            return TbHexagonOff;
        case "tb:TbHexagonPlus2":
            return TbHexagonPlus2;
        case "tb:TbHexagonPlus":
            return TbHexagonPlus;
        case "tb:TbHexagon":
            return TbHexagon;
        case "tb:TbHexagonalPrismOff":
            return TbHexagonalPrismOff;
        case "tb:TbHexagonalPrismPlus":
            return TbHexagonalPrismPlus;
        case "tb:TbHexagonalPrism":
            return TbHexagonalPrism;
        case "tb:TbHexagonalPyramidOff":
            return TbHexagonalPyramidOff;
        case "tb:TbHexagonalPyramidPlus":
            return TbHexagonalPyramidPlus;
        case "tb:TbHexagonalPyramid":
            return TbHexagonalPyramid;
        case "tb:TbHexagonsOff":
            return TbHexagonsOff;
        case "tb:TbHexagons":
            return TbHexagons;
        case "tb:TbHierarchy2":
            return TbHierarchy2;
        case "tb:TbHierarchy3":
            return TbHierarchy3;
        case "tb:TbHierarchyOff":
            return TbHierarchyOff;
        case "tb:TbHierarchy":
            return TbHierarchy;
        case "tb:TbHighlightOff":
            return TbHighlightOff;
        case "tb:TbHighlight":
            return TbHighlight;
        case "tb:TbHistoryOff":
            return TbHistoryOff;
        case "tb:TbHistoryToggle":
            return TbHistoryToggle;
        case "tb:TbHistory":
            return TbHistory;
        case "tb:TbHome2":
            return TbHome2;
        case "tb:TbHomeBitcoin":
            return TbHomeBitcoin;
        case "tb:TbHomeBolt":
            return TbHomeBolt;
        case "tb:TbHomeCancel":
            return TbHomeCancel;
        case "tb:TbHomeCheck":
            return TbHomeCheck;
        case "tb:TbHomeCog":
            return TbHomeCog;
        case "tb:TbHomeDollar":
            return TbHomeDollar;
        case "tb:TbHomeDot":
            return TbHomeDot;
        case "tb:TbHomeDown":
            return TbHomeDown;
        case "tb:TbHomeEco":
            return TbHomeEco;
        case "tb:TbHomeEdit":
            return TbHomeEdit;
        case "tb:TbHomeExclamation":
            return TbHomeExclamation;
        case "tb:TbHomeHand":
            return TbHomeHand;
        case "tb:TbHomeHeart":
            return TbHomeHeart;
        case "tb:TbHomeInfinity":
            return TbHomeInfinity;
        case "tb:TbHomeLink":
            return TbHomeLink;
        case "tb:TbHomeMinus":
            return TbHomeMinus;
        case "tb:TbHomeMove":
            return TbHomeMove;
        case "tb:TbHomeOff":
            return TbHomeOff;
        case "tb:TbHomePlus":
            return TbHomePlus;
        case "tb:TbHomeQuestion":
            return TbHomeQuestion;
        case "tb:TbHomeRibbon":
            return TbHomeRibbon;
        case "tb:TbHomeSearch":
            return TbHomeSearch;
        case "tb:TbHomeShare":
            return TbHomeShare;
        case "tb:TbHomeShield":
            return TbHomeShield;
        case "tb:TbHomeSignal":
            return TbHomeSignal;
        case "tb:TbHomeSpark":
            return TbHomeSpark;
        case "tb:TbHomeStar":
            return TbHomeStar;
        case "tb:TbHomeStats":
            return TbHomeStats;
        case "tb:TbHomeUp":
            return TbHomeUp;
        case "tb:TbHomeX":
            return TbHomeX;
        case "tb:TbHome":
            return TbHome;
        case "tb:TbHorseToy":
            return TbHorseToy;
        case "tb:TbHorse":
            return TbHorse;
        case "tb:TbHorseshoe":
            return TbHorseshoe;
        case "tb:TbHospitalCircle":
            return TbHospitalCircle;
        case "tb:TbHospital":
            return TbHospital;
        case "tb:TbHotelService":
            return TbHotelService;
        case "tb:TbHourglassEmpty":
            return TbHourglassEmpty;
        case "tb:TbHourglassHigh":
            return TbHourglassHigh;
        case "tb:TbHourglassLow":
            return TbHourglassLow;
        case "tb:TbHourglassOff":
            return TbHourglassOff;
        case "tb:TbHourglass":
            return TbHourglass;
        case "tb:TbHours12":
            return TbHours12;
        case "tb:TbHours24":
            return TbHours24;
        case "tb:TbHtml":
            return TbHtml;
        case "tb:TbHttpConnect":
            return TbHttpConnect;
        case "tb:TbHttpDelete":
            return TbHttpDelete;
        case "tb:TbHttpGet":
            return TbHttpGet;
        case "tb:TbHttpHead":
            return TbHttpHead;
        case "tb:TbHttpOptions":
            return TbHttpOptions;
        case "tb:TbHttpPatch":
            return TbHttpPatch;
        case "tb:TbHttpPost":
            return TbHttpPost;
        case "tb:TbHttpPut":
            return TbHttpPut;
        case "tb:TbHttpQue":
            return TbHttpQue;
        case "tb:TbHttpTrace":
            return TbHttpTrace;
        case "tb:TbIceCream2":
            return TbIceCream2;
        case "tb:TbIceCreamOff":
            return TbIceCreamOff;
        case "tb:TbIceCream":
            return TbIceCream;
        case "tb:TbIceSkating":
            return TbIceSkating;
        case "tb:TbIconsOff":
            return TbIconsOff;
        case "tb:TbIcons":
            return TbIcons;
        case "tb:TbIdBadge2":
            return TbIdBadge2;
        case "tb:TbIdBadgeOff":
            return TbIdBadgeOff;
        case "tb:TbIdBadge":
            return TbIdBadge;
        case "tb:TbIdOff":
            return TbIdOff;
        case "tb:TbId":
            return TbId;
        case "tb:TbIkosaedr":
            return TbIkosaedr;
        case "tb:TbImageInPicture":
            return TbImageInPicture;
        case "tb:TbInboxOff":
            return TbInboxOff;
        case "tb:TbInbox":
            return TbInbox;
        case "tb:TbIndentDecrease":
            return TbIndentDecrease;
        case "tb:TbIndentIncrease":
            return TbIndentIncrease;
        case "tb:TbInfinityOff":
            return TbInfinityOff;
        case "tb:TbInfinity":
            return TbInfinity;
        case "tb:TbInfoCircle":
            return TbInfoCircle;
        case "tb:TbInfoHexagon":
            return TbInfoHexagon;
        case "tb:TbInfoOctagon":
            return TbInfoOctagon;
        case "tb:TbInfoSmall":
            return TbInfoSmall;
        case "tb:TbInfoSquareRounded":
            return TbInfoSquareRounded;
        case "tb:TbInfoSquare":
            return TbInfoSquare;
        case "tb:TbInfoTriangle":
            return TbInfoTriangle;
        case "tb:TbInnerShadowBottomLeft":
            return TbInnerShadowBottomLeft;
        case "tb:TbInnerShadowBottomRight":
            return TbInnerShadowBottomRight;
        case "tb:TbInnerShadowBottom":
            return TbInnerShadowBottom;
        case "tb:TbInnerShadowLeft":
            return TbInnerShadowLeft;
        case "tb:TbInnerShadowRight":
            return TbInnerShadowRight;
        case "tb:TbInnerShadowTopLeft":
            return TbInnerShadowTopLeft;
        case "tb:TbInnerShadowTopRight":
            return TbInnerShadowTopRight;
        case "tb:TbInnerShadowTop":
            return TbInnerShadowTop;
        case "tb:TbInputAi":
            return TbInputAi;
        case "tb:TbInputCheck":
            return TbInputCheck;
        case "tb:TbInputSearch":
            return TbInputSearch;
        case "tb:TbInputSpark":
            return TbInputSpark;
        case "tb:TbInputX":
            return TbInputX;
        case "tb:TbInvoice":
            return TbInvoice;
        case "tb:TbIroning1":
            return TbIroning1;
        case "tb:TbIroning2":
            return TbIroning2;
        case "tb:TbIroning3":
            return TbIroning3;
        case "tb:TbIroningOff":
            return TbIroningOff;
        case "tb:TbIroningSteamOff":
            return TbIroningSteamOff;
        case "tb:TbIroningSteam":
            return TbIroningSteam;
        case "tb:TbIroning":
            return TbIroning;
        case "tb:TbIrregularPolyhedronOff":
            return TbIrregularPolyhedronOff;
        case "tb:TbIrregularPolyhedronPlus":
            return TbIrregularPolyhedronPlus;
        case "tb:TbIrregularPolyhedron":
            return TbIrregularPolyhedron;
        case "tb:TbItalic":
            return TbItalic;
        case "tb:TbJacket":
            return TbJacket;
        case "tb:TbJetpack":
            return TbJetpack;
        case "tb:TbJewishStar":
            return TbJewishStar;
        case "tb:TbJoinBevel":
            return TbJoinBevel;
        case "tb:TbJoinRound":
            return TbJoinRound;
        case "tb:TbJoinStraight":
            return TbJoinStraight;
        case "tb:TbJoker":
            return TbJoker;
        case "tb:TbJpg":
            return TbJpg;
        case "tb:TbJson":
            return TbJson;
        case "tb:TbJumpRope":
            return TbJumpRope;
        case "tb:TbKarate":
            return TbKarate;
        case "tb:TbKayak":
            return TbKayak;
        case "tb:TbKerning":
            return TbKerning;
        case "tb:TbKeyOff":
            return TbKeyOff;
        case "tb:TbKey":
            return TbKey;
        case "tb:TbKeyboardHide":
            return TbKeyboardHide;
        case "tb:TbKeyboardOff":
            return TbKeyboardOff;
        case "tb:TbKeyboardShow":
            return TbKeyboardShow;
        case "tb:TbKeyboard":
            return TbKeyboard;
        case "tb:TbKeyframeAlignCenter":
            return TbKeyframeAlignCenter;
        case "tb:TbKeyframeAlignHorizontal":
            return TbKeyframeAlignHorizontal;
        case "tb:TbKeyframeAlignVertical":
            return TbKeyframeAlignVertical;
        case "tb:TbKeyframe":
            return TbKeyframe;
        case "tb:TbKeyframes":
            return TbKeyframes;
        case "tb:TbLabelImportant":
            return TbLabelImportant;
        case "tb:TbLabelOff":
            return TbLabelOff;
        case "tb:TbLabel":
            return TbLabel;
        case "tb:TbLadderOff":
            return TbLadderOff;
        case "tb:TbLadder":
            return TbLadder;
        case "tb:TbLadle":
            return TbLadle;
        case "tb:TbLambda":
            return TbLambda;
        case "tb:TbLamp2":
            return TbLamp2;
        case "tb:TbLampOff":
            return TbLampOff;
        case "tb:TbLamp":
            return TbLamp;
        case "tb:TbLane":
            return TbLane;
        case "tb:TbLanguageHiragana":
            return TbLanguageHiragana;
        case "tb:TbLanguageKatakana":
            return TbLanguageKatakana;
        case "tb:TbLanguageOff":
            return TbLanguageOff;
        case "tb:TbLanguage":
            return TbLanguage;
        case "tb:TbLassoOff":
            return TbLassoOff;
        case "tb:TbLassoPolygon":
            return TbLassoPolygon;
        case "tb:TbLasso":
            return TbLasso;
        case "tb:TbLaurelWreath1":
            return TbLaurelWreath1;
        case "tb:TbLaurelWreath2":
            return TbLaurelWreath2;
        case "tb:TbLaurelWreath3":
            return TbLaurelWreath3;
        case "tb:TbLaurelWreath":
            return TbLaurelWreath;
        case "tb:TbLayersDifference":
            return TbLayersDifference;
        case "tb:TbLayersIntersect2":
            return TbLayersIntersect2;
        case "tb:TbLayersIntersect":
            return TbLayersIntersect;
        case "tb:TbLayersLinked":
            return TbLayersLinked;
        case "tb:TbLayersOff":
            return TbLayersOff;
        case "tb:TbLayersSelectedBottom":
            return TbLayersSelectedBottom;
        case "tb:TbLayersSelected":
            return TbLayersSelected;
        case "tb:TbLayersSubtract":
            return TbLayersSubtract;
        case "tb:TbLayersUnion":
            return TbLayersUnion;
        case "tb:TbLayout2":
            return TbLayout2;
        case "tb:TbLayoutAlignBottom":
            return TbLayoutAlignBottom;
        case "tb:TbLayoutAlignCenter":
            return TbLayoutAlignCenter;
        case "tb:TbLayoutAlignLeft":
            return TbLayoutAlignLeft;
        case "tb:TbLayoutAlignMiddle":
            return TbLayoutAlignMiddle;
        case "tb:TbLayoutAlignRight":
            return TbLayoutAlignRight;
        case "tb:TbLayoutAlignTop":
            return TbLayoutAlignTop;
        case "tb:TbLayoutBoardSplit":
            return TbLayoutBoardSplit;
        case "tb:TbLayoutBoard":
            return TbLayoutBoard;
        case "tb:TbLayoutBottombarCollapse":
            return TbLayoutBottombarCollapse;
        case "tb:TbLayoutBottombarExpand":
            return TbLayoutBottombarExpand;
        case "tb:TbLayoutBottombarInactive":
            return TbLayoutBottombarInactive;
        case "tb:TbLayoutBottombar":
            return TbLayoutBottombar;
        case "tb:TbLayoutCards":
            return TbLayoutCards;
        case "tb:TbLayoutCollage":
            return TbLayoutCollage;
        case "tb:TbLayoutColumns":
            return TbLayoutColumns;
        case "tb:TbLayoutDashboard":
            return TbLayoutDashboard;
        case "tb:TbLayoutDistributeHorizontal":
            return TbLayoutDistributeHorizontal;
        case "tb:TbLayoutDistributeVertical":
            return TbLayoutDistributeVertical;
        case "tb:TbLayoutGridAdd":
            return TbLayoutGridAdd;
        case "tb:TbLayoutGridRemove":
            return TbLayoutGridRemove;
        case "tb:TbLayoutGrid":
            return TbLayoutGrid;
        case "tb:TbLayoutKanban":
            return TbLayoutKanban;
        case "tb:TbLayoutList":
            return TbLayoutList;
        case "tb:TbLayoutNavbarCollapse":
            return TbLayoutNavbarCollapse;
        case "tb:TbLayoutNavbarExpand":
            return TbLayoutNavbarExpand;
        case "tb:TbLayoutNavbarInactive":
            return TbLayoutNavbarInactive;
        case "tb:TbLayoutNavbar":
            return TbLayoutNavbar;
        case "tb:TbLayoutOff":
            return TbLayoutOff;
        case "tb:TbLayoutRows":
            return TbLayoutRows;
        case "tb:TbLayoutSidebarInactive":
            return TbLayoutSidebarInactive;
        case "tb:TbLayoutSidebarLeftCollapse":
            return TbLayoutSidebarLeftCollapse;
        case "tb:TbLayoutSidebarLeftExpand":
            return TbLayoutSidebarLeftExpand;
        case "tb:TbLayoutSidebarRightCollapse":
            return TbLayoutSidebarRightCollapse;
        case "tb:TbLayoutSidebarRightExpand":
            return TbLayoutSidebarRightExpand;
        case "tb:TbLayoutSidebarRightInactive":
            return TbLayoutSidebarRightInactive;
        case "tb:TbLayoutSidebarRight":
            return TbLayoutSidebarRight;
        case "tb:TbLayoutSidebar":
            return TbLayoutSidebar;
        case "tb:TbLayout":
            return TbLayout;
        case "tb:TbLeaf2":
            return TbLeaf2;
        case "tb:TbLeafOff":
            return TbLeafOff;
        case "tb:TbLeaf":
            return TbLeaf;
        case "tb:TbLegoOff":
            return TbLegoOff;
        case "tb:TbLego":
            return TbLego;
        case "tb:TbLemon2":
            return TbLemon2;
        case "tb:TbLemon":
            return TbLemon;
        case "tb:TbLetterASmall":
            return TbLetterASmall;
        case "tb:TbLetterA":
            return TbLetterA;
        case "tb:TbLetterBSmall":
            return TbLetterBSmall;
        case "tb:TbLetterB":
            return TbLetterB;
        case "tb:TbLetterCSmall":
            return TbLetterCSmall;
        case "tb:TbLetterC":
            return TbLetterC;
        case "tb:TbLetterCaseLower":
            return TbLetterCaseLower;
        case "tb:TbLetterCaseToggle":
            return TbLetterCaseToggle;
        case "tb:TbLetterCaseUpper":
            return TbLetterCaseUpper;
        case "tb:TbLetterCase":
            return TbLetterCase;
        case "tb:TbLetterDSmall":
            return TbLetterDSmall;
        case "tb:TbLetterD":
            return TbLetterD;
        case "tb:TbLetterESmall":
            return TbLetterESmall;
        case "tb:TbLetterE":
            return TbLetterE;
        case "tb:TbLetterFSmall":
            return TbLetterFSmall;
        case "tb:TbLetterF":
            return TbLetterF;
        case "tb:TbLetterGSmall":
            return TbLetterGSmall;
        case "tb:TbLetterG":
            return TbLetterG;
        case "tb:TbLetterHSmall":
            return TbLetterHSmall;
        case "tb:TbLetterH":
            return TbLetterH;
        case "tb:TbLetterISmall":
            return TbLetterISmall;
        case "tb:TbLetterI":
            return TbLetterI;
        case "tb:TbLetterJSmall":
            return TbLetterJSmall;
        case "tb:TbLetterJ":
            return TbLetterJ;
        case "tb:TbLetterKSmall":
            return TbLetterKSmall;
        case "tb:TbLetterK":
            return TbLetterK;
        case "tb:TbLetterLSmall":
            return TbLetterLSmall;
        case "tb:TbLetterL":
            return TbLetterL;
        case "tb:TbLetterMSmall":
            return TbLetterMSmall;
        case "tb:TbLetterM":
            return TbLetterM;
        case "tb:TbLetterNSmall":
            return TbLetterNSmall;
        case "tb:TbLetterN":
            return TbLetterN;
        case "tb:TbLetterOSmall":
            return TbLetterOSmall;
        case "tb:TbLetterO":
            return TbLetterO;
        case "tb:TbLetterPSmall":
            return TbLetterPSmall;
        case "tb:TbLetterP":
            return TbLetterP;
        case "tb:TbLetterQSmall":
            return TbLetterQSmall;
        case "tb:TbLetterQ":
            return TbLetterQ;
        case "tb:TbLetterRSmall":
            return TbLetterRSmall;
        case "tb:TbLetterR":
            return TbLetterR;
        case "tb:TbLetterSSmall":
            return TbLetterSSmall;
        case "tb:TbLetterS":
            return TbLetterS;
        case "tb:TbLetterSpacing":
            return TbLetterSpacing;
        case "tb:TbLetterTSmall":
            return TbLetterTSmall;
        case "tb:TbLetterT":
            return TbLetterT;
        case "tb:TbLetterUSmall":
            return TbLetterUSmall;
        case "tb:TbLetterU":
            return TbLetterU;
        case "tb:TbLetterVSmall":
            return TbLetterVSmall;
        case "tb:TbLetterV":
            return TbLetterV;
        case "tb:TbLetterWSmall":
            return TbLetterWSmall;
        case "tb:TbLetterW":
            return TbLetterW;
        case "tb:TbLetterXSmall":
            return TbLetterXSmall;
        case "tb:TbLetterX":
            return TbLetterX;
        case "tb:TbLetterYSmall":
            return TbLetterYSmall;
        case "tb:TbLetterY":
            return TbLetterY;
        case "tb:TbLetterZSmall":
            return TbLetterZSmall;
        case "tb:TbLetterZ":
            return TbLetterZ;
        case "tb:TbLibraryMinus":
            return TbLibraryMinus;
        case "tb:TbLibraryPhoto":
            return TbLibraryPhoto;
        case "tb:TbLibraryPlus":
            return TbLibraryPlus;
        case "tb:TbLibrary":
            return TbLibrary;
        case "tb:TbLicenseOff":
            return TbLicenseOff;
        case "tb:TbLicense":
            return TbLicense;
        case "tb:TbLifebuoyOff":
            return TbLifebuoyOff;
        case "tb:TbLifebuoy":
            return TbLifebuoy;
        case "tb:TbLighter":
            return TbLighter;
        case "tb:TbLineDashed":
            return TbLineDashed;
        case "tb:TbLineDotted":
            return TbLineDotted;
        case "tb:TbLineHeight":
            return TbLineHeight;
        case "tb:TbLineScan":
            return TbLineScan;
        case "tb:TbLine":
            return TbLine;
        case "tb:TbLinkMinus":
            return TbLinkMinus;
        case "tb:TbLinkOff":
            return TbLinkOff;
        case "tb:TbLinkPlus":
            return TbLinkPlus;
        case "tb:TbLink":
            return TbLink;
        case "tb:TbListCheck":
            return TbListCheck;
        case "tb:TbListDetails":
            return TbListDetails;
        case "tb:TbListLetters":
            return TbListLetters;
        case "tb:TbListNumbers":
            return TbListNumbers;
        case "tb:TbListSearch":
            return TbListSearch;
        case "tb:TbListTree":
            return TbListTree;
        case "tb:TbList":
            return TbList;
        case "tb:TbLivePhotoOff":
            return TbLivePhotoOff;
        case "tb:TbLivePhoto":
            return TbLivePhoto;
        case "tb:TbLiveView":
            return TbLiveView;
        case "tb:TbLoadBalancer":
            return TbLoadBalancer;
        case "tb:TbLoader2":
            return TbLoader2;
        case "tb:TbLoader3":
            return TbLoader3;
        case "tb:TbLoaderQuarter":
            return TbLoaderQuarter;
        case "tb:TbLoader":
            return TbLoader;
        case "tb:TbLocationBolt":
            return TbLocationBolt;
        case "tb:TbLocationBroken":
            return TbLocationBroken;
        case "tb:TbLocationCancel":
            return TbLocationCancel;
        case "tb:TbLocationCheck":
            return TbLocationCheck;
        case "tb:TbLocationCode":
            return TbLocationCode;
        case "tb:TbLocationCog":
            return TbLocationCog;
        case "tb:TbLocationDiscount":
            return TbLocationDiscount;
        case "tb:TbLocationDollar":
            return TbLocationDollar;
        case "tb:TbLocationDown":
            return TbLocationDown;
        case "tb:TbLocationExclamation":
            return TbLocationExclamation;
        case "tb:TbLocationHeart":
            return TbLocationHeart;
        case "tb:TbLocationMinus":
            return TbLocationMinus;
        case "tb:TbLocationOff":
            return TbLocationOff;
        case "tb:TbLocationPause":
            return TbLocationPause;
        case "tb:TbLocationPin":
            return TbLocationPin;
        case "tb:TbLocationPlus":
            return TbLocationPlus;
        case "tb:TbLocationQuestion":
            return TbLocationQuestion;
        case "tb:TbLocationSearch":
            return TbLocationSearch;
        case "tb:TbLocationShare":
            return TbLocationShare;
        case "tb:TbLocationStar":
            return TbLocationStar;
        case "tb:TbLocationUp":
            return TbLocationUp;
        case "tb:TbLocationX":
            return TbLocationX;
        case "tb:TbLocation":
            return TbLocation;
        case "tb:TbLockAccessOff":
            return TbLockAccessOff;
        case "tb:TbLockAccess":
            return TbLockAccess;
        case "tb:TbLockBitcoin":
            return TbLockBitcoin;
        case "tb:TbLockBolt":
            return TbLockBolt;
        case "tb:TbLockCancel":
            return TbLockCancel;
        case "tb:TbLockCheck":
            return TbLockCheck;
        case "tb:TbLockCode":
            return TbLockCode;
        case "tb:TbLockCog":
            return TbLockCog;
        case "tb:TbLockDollar":
            return TbLockDollar;
        case "tb:TbLockDown":
            return TbLockDown;
        case "tb:TbLockExclamation":
            return TbLockExclamation;
        case "tb:TbLockHeart":
            return TbLockHeart;
        case "tb:TbLockMinus":
            return TbLockMinus;
        case "tb:TbLockOff":
            return TbLockOff;
        case "tb:TbLockOpen2":
            return TbLockOpen2;
        case "tb:TbLockOpenOff":
            return TbLockOpenOff;
        case "tb:TbLockOpen":
            return TbLockOpen;
        case "tb:TbLockPassword":
            return TbLockPassword;
        case "tb:TbLockPause":
            return TbLockPause;
        case "tb:TbLockPin":
            return TbLockPin;
        case "tb:TbLockPlus":
            return TbLockPlus;
        case "tb:TbLockQuestion":
            return TbLockQuestion;
        case "tb:TbLockSearch":
            return TbLockSearch;
        case "tb:TbLockShare":
            return TbLockShare;
        case "tb:TbLockSquareRounded":
            return TbLockSquareRounded;
        case "tb:TbLockSquare":
            return TbLockSquare;
        case "tb:TbLockStar":
            return TbLockStar;
        case "tb:TbLockUp":
            return TbLockUp;
        case "tb:TbLockX":
            return TbLockX;
        case "tb:TbLock":
            return TbLock;
        case "tb:TbLogicAnd":
            return TbLogicAnd;
        case "tb:TbLogicBuffer":
            return TbLogicBuffer;
        case "tb:TbLogicNand":
            return TbLogicNand;
        case "tb:TbLogicNor":
            return TbLogicNor;
        case "tb:TbLogicNot":
            return TbLogicNot;
        case "tb:TbLogicOr":
            return TbLogicOr;
        case "tb:TbLogicXnor":
            return TbLogicXnor;
        case "tb:TbLogicXor":
            return TbLogicXor;
        case "tb:TbLogin2":
            return TbLogin2;
        case "tb:TbLogin":
            return TbLogin;
        case "tb:TbLogout2":
            return TbLogout2;
        case "tb:TbLogout":
            return TbLogout;
        case "tb:TbLogs":
            return TbLogs;
        case "tb:TbLollipopOff":
            return TbLollipopOff;
        case "tb:TbLollipop":
            return TbLollipop;
        case "tb:TbLuggageOff":
            return TbLuggageOff;
        case "tb:TbLuggage":
            return TbLuggage;
        case "tb:TbLungsOff":
            return TbLungsOff;
        case "tb:TbLungs":
            return TbLungs;
        case "tb:TbMacroOff":
            return TbMacroOff;
        case "tb:TbMacro":
            return TbMacro;
        case "tb:TbMagnetOff":
            return TbMagnetOff;
        case "tb:TbMagnet":
            return TbMagnet;
        case "tb:TbMagnetic":
            return TbMagnetic;
        case "tb:TbMailAi":
            return TbMailAi;
        case "tb:TbMailBitcoin":
            return TbMailBitcoin;
        case "tb:TbMailBolt":
            return TbMailBolt;
        case "tb:TbMailCancel":
            return TbMailCancel;
        case "tb:TbMailCheck":
            return TbMailCheck;
        case "tb:TbMailCode":
            return TbMailCode;
        case "tb:TbMailCog":
            return TbMailCog;
        case "tb:TbMailDollar":
            return TbMailDollar;
        case "tb:TbMailDown":
            return TbMailDown;
        case "tb:TbMailExclamation":
            return TbMailExclamation;
        case "tb:TbMailFast":
            return TbMailFast;
        case "tb:TbMailForward":
            return TbMailForward;
        case "tb:TbMailHeart":
            return TbMailHeart;
        case "tb:TbMailMinus":
            return TbMailMinus;
        case "tb:TbMailOff":
            return TbMailOff;
        case "tb:TbMailOpened":
            return TbMailOpened;
        case "tb:TbMailPause":
            return TbMailPause;
        case "tb:TbMailPin":
            return TbMailPin;
        case "tb:TbMailPlus":
            return TbMailPlus;
        case "tb:TbMailQuestion":
            return TbMailQuestion;
        case "tb:TbMailSearch":
            return TbMailSearch;
        case "tb:TbMailShare":
            return TbMailShare;
        case "tb:TbMailSpark":
            return TbMailSpark;
        case "tb:TbMailStar":
            return TbMailStar;
        case "tb:TbMailUp":
            return TbMailUp;
        case "tb:TbMailX":
            return TbMailX;
        case "tb:TbMail":
            return TbMail;
        case "tb:TbMailboxOff":
            return TbMailboxOff;
        case "tb:TbMailbox":
            return TbMailbox;
        case "tb:TbMan":
            return TbMan;
        case "tb:TbManualGearbox":
            return TbManualGearbox;
        case "tb:TbMap2":
            return TbMap2;
        case "tb:TbMapBolt":
            return TbMapBolt;
        case "tb:TbMapCancel":
            return TbMapCancel;
        case "tb:TbMapCheck":
            return TbMapCheck;
        case "tb:TbMapCode":
            return TbMapCode;
        case "tb:TbMapCog":
            return TbMapCog;
        case "tb:TbMapDiscount":
            return TbMapDiscount;
        case "tb:TbMapDollar":
            return TbMapDollar;
        case "tb:TbMapDown":
            return TbMapDown;
        case "tb:TbMapEast":
            return TbMapEast;
        case "tb:TbMapExclamation":
            return TbMapExclamation;
        case "tb:TbMapHeart":
            return TbMapHeart;
        case "tb:TbMapMinus":
            return TbMapMinus;
        case "tb:TbMapNorth":
            return TbMapNorth;
        case "tb:TbMapOff":
            return TbMapOff;
        case "tb:TbMapPause":
            return TbMapPause;
        case "tb:TbMapPin2":
            return TbMapPin2;
        case "tb:TbMapPinBolt":
            return TbMapPinBolt;
        case "tb:TbMapPinCancel":
            return TbMapPinCancel;
        case "tb:TbMapPinCheck":
            return TbMapPinCheck;
        case "tb:TbMapPinCode":
            return TbMapPinCode;
        case "tb:TbMapPinCog":
            return TbMapPinCog;
        case "tb:TbMapPinDollar":
            return TbMapPinDollar;
        case "tb:TbMapPinDown":
            return TbMapPinDown;
        case "tb:TbMapPinExclamation":
            return TbMapPinExclamation;
        case "tb:TbMapPinHeart":
            return TbMapPinHeart;
        case "tb:TbMapPinMinus":
            return TbMapPinMinus;
        case "tb:TbMapPinOff":
            return TbMapPinOff;
        case "tb:TbMapPinPause":
            return TbMapPinPause;
        case "tb:TbMapPinPin":
            return TbMapPinPin;
        case "tb:TbMapPinPlus":
            return TbMapPinPlus;
        case "tb:TbMapPinQuestion":
            return TbMapPinQuestion;
        case "tb:TbMapPinSearch":
            return TbMapPinSearch;
        case "tb:TbMapPinShare":
            return TbMapPinShare;
        case "tb:TbMapPinStar":
            return TbMapPinStar;
        case "tb:TbMapPinUp":
            return TbMapPinUp;
        case "tb:TbMapPinX":
            return TbMapPinX;
        case "tb:TbMapPin":
            return TbMapPin;
        case "tb:TbMapPins":
            return TbMapPins;
        case "tb:TbMapPlus":
            return TbMapPlus;
        case "tb:TbMapQuestion":
            return TbMapQuestion;
        case "tb:TbMapRoute":
            return TbMapRoute;
        case "tb:TbMapSearch":
            return TbMapSearch;
        case "tb:TbMapShare":
            return TbMapShare;
        case "tb:TbMapSouth":
            return TbMapSouth;
        case "tb:TbMapStar":
            return TbMapStar;
        case "tb:TbMapUp":
            return TbMapUp;
        case "tb:TbMapWest":
            return TbMapWest;
        case "tb:TbMapX":
            return TbMapX;
        case "tb:TbMap":
            return TbMap;
        case "tb:TbMarkdownOff":
            return TbMarkdownOff;
        case "tb:TbMarkdown":
            return TbMarkdown;
        case "tb:TbMarquee2":
            return TbMarquee2;
        case "tb:TbMarqueeOff":
            return TbMarqueeOff;
        case "tb:TbMarquee":
            return TbMarquee;
        case "tb:TbMars":
            return TbMars;
        case "tb:TbMaskOff":
            return TbMaskOff;
        case "tb:TbMask":
            return TbMask;
        case "tb:TbMasksTheaterOff":
            return TbMasksTheaterOff;
        case "tb:TbMasksTheater":
            return TbMasksTheater;
        case "tb:TbMassage":
            return TbMassage;
        case "tb:TbMatchstick":
            return TbMatchstick;
        case "tb:TbMath1Divide2":
            return TbMath1Divide2;
        case "tb:TbMath1Divide3":
            return TbMath1Divide3;
        case "tb:TbMathAvg":
            return TbMathAvg;
        case "tb:TbMathCos":
            return TbMathCos;
        case "tb:TbMathCtg":
            return TbMathCtg;
        case "tb:TbMathEqualGreater":
            return TbMathEqualGreater;
        case "tb:TbMathEqualLower":
            return TbMathEqualLower;
        case "tb:TbMathFunctionOff":
            return TbMathFunctionOff;
        case "tb:TbMathFunctionY":
            return TbMathFunctionY;
        case "tb:TbMathFunction":
            return TbMathFunction;
        case "tb:TbMathGreater":
            return TbMathGreater;
        case "tb:TbMathIntegralX":
            return TbMathIntegralX;
        case "tb:TbMathIntegral":
            return TbMathIntegral;
        case "tb:TbMathIntegrals":
            return TbMathIntegrals;
        case "tb:TbMathLower":
            return TbMathLower;
        case "tb:TbMathMaxMin":
            return TbMathMaxMin;
        case "tb:TbMathMax":
            return TbMathMax;
        case "tb:TbMathMin":
            return TbMathMin;
        case "tb:TbMathNot":
            return TbMathNot;
        case "tb:TbMathOff":
            return TbMathOff;
        case "tb:TbMathPiDivide2":
            return TbMathPiDivide2;
        case "tb:TbMathPi":
            return TbMathPi;
        case "tb:TbMathSec":
            return TbMathSec;
        case "tb:TbMathSin":
            return TbMathSin;
        case "tb:TbMathSymbols":
            return TbMathSymbols;
        case "tb:TbMathTg":
            return TbMathTg;
        case "tb:TbMathXDivide2":
            return TbMathXDivide2;
        case "tb:TbMathXDivideY2":
            return TbMathXDivideY2;
        case "tb:TbMathXDivideY":
            return TbMathXDivideY;
        case "tb:TbMathXFloorDivideY":
            return TbMathXFloorDivideY;
        case "tb:TbMathXMinusX":
            return TbMathXMinusX;
        case "tb:TbMathXMinusY":
            return TbMathXMinusY;
        case "tb:TbMathXPlusX":
            return TbMathXPlusX;
        case "tb:TbMathXPlusY":
            return TbMathXPlusY;
        case "tb:TbMathXy":
            return TbMathXy;
        case "tb:TbMathYMinusY":
            return TbMathYMinusY;
        case "tb:TbMathYPlusY":
            return TbMathYPlusY;
        case "tb:TbMath":
            return TbMath;
        case "tb:TbMatrix":
            return TbMatrix;
        case "tb:TbMaximizeOff":
            return TbMaximizeOff;
        case "tb:TbMaximize":
            return TbMaximize;
        case "tb:TbMeatOff":
            return TbMeatOff;
        case "tb:TbMeat":
            return TbMeat;
        case "tb:TbMedal2":
            return TbMedal2;
        case "tb:TbMedal":
            return TbMedal;
        case "tb:TbMedicalCrossCircle":
            return TbMedicalCrossCircle;
        case "tb:TbMedicalCrossOff":
            return TbMedicalCrossOff;
        case "tb:TbMedicalCross":
            return TbMedicalCross;
        case "tb:TbMedicineSyrup":
            return TbMedicineSyrup;
        case "tb:TbMeeple":
            return TbMeeple;
        case "tb:TbMelon":
            return TbMelon;
        case "tb:TbMenorah":
            return TbMenorah;
        case "tb:TbMenu2":
            return TbMenu2;
        case "tb:TbMenu3":
            return TbMenu3;
        case "tb:TbMenu4":
            return TbMenu4;
        case "tb:TbMenuDeep":
            return TbMenuDeep;
        case "tb:TbMenuOrder":
            return TbMenuOrder;
        case "tb:TbMenu":
            return TbMenu;
        case "tb:TbMessage2Bolt":
            return TbMessage2Bolt;
        case "tb:TbMessage2Cancel":
            return TbMessage2Cancel;
        case "tb:TbMessage2Check":
            return TbMessage2Check;
    }
}
