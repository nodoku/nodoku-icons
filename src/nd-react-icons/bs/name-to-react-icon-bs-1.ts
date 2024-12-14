import type {IconType} from "react-icons";

import {
    BsBuildingFillGear,
    BsBuildingFillLock,
    BsBuildingFillSlash,
    BsBuildingFillUp,
    BsBuildingFillX,
    BsBuildingFill,
    BsBuildingGear,
    BsBuildingLock,
    BsBuildingSlash,
    BsBuildingUp,
    BsBuildingX,
    BsBuilding,
    BsBuildingsFill,
    BsBuildings,
    BsBullseye,
    BsBusFrontFill,
    BsBusFront,
    BsCCircleFill,
    BsCCircle,
    BsCSquareFill,
    BsCSquare,
    BsCakeFill,
    BsCake,
    BsCake2Fill,
    BsCake2,
    BsCalculatorFill,
    BsCalculator,
    BsCalendarCheckFill,
    BsCalendarCheck,
    BsCalendarDateFill,
    BsCalendarDate,
    BsCalendarDayFill,
    BsCalendarDay,
    BsCalendarEventFill,
    BsCalendarEvent,
    BsCalendarFill,
    BsCalendarHeartFill,
    BsCalendarHeart,
    BsCalendarMinusFill,
    BsCalendarMinus,
    BsCalendarMonthFill,
    BsCalendarMonth,
    BsCalendarPlusFill,
    BsCalendarPlus,
    BsCalendarRangeFill,
    BsCalendarRange,
    BsCalendarWeekFill,
    BsCalendarWeek,
    BsCalendarXFill,
    BsCalendarX,
    BsCalendar,
    BsCalendar2CheckFill,
    BsCalendar2Check,
    BsCalendar2DateFill,
    BsCalendar2Date,
    BsCalendar2DayFill,
    BsCalendar2Day,
    BsCalendar2EventFill,
    BsCalendar2Event,
    BsCalendar2Fill,
    BsCalendar2HeartFill,
    BsCalendar2Heart,
    BsCalendar2MinusFill,
    BsCalendar2Minus,
    BsCalendar2MonthFill,
    BsCalendar2Month,
    BsCalendar2PlusFill,
    BsCalendar2Plus,
    BsCalendar2RangeFill,
    BsCalendar2Range,
    BsCalendar2WeekFill,
    BsCalendar2Week,
    BsCalendar2XFill,
    BsCalendar2X,
    BsCalendar2,
    BsCalendar3EventFill,
    BsCalendar3Event,
    BsCalendar3Fill,
    BsCalendar3RangeFill,
    BsCalendar3Range,
    BsCalendar3WeekFill,
    BsCalendar3Week,
    BsCalendar3,
    BsCalendar4Event,
    BsCalendar4Range,
    BsCalendar4Week,
    BsCalendar4,
    BsCameraFill,
    BsCameraReelsFill,
    BsCameraReels,
    BsCameraVideoFill,
    BsCameraVideoOffFill,
    BsCameraVideoOff,
    BsCameraVideo,
    BsCamera,
    BsCamera2,
    BsCapslockFill,
    BsCapslock,
    BsCapsulePill,
    BsCapsule,
    BsCarFrontFill,
    BsCarFront,
    BsCardChecklist,
    BsCardHeading,
    BsCardImage,
    BsCardList,
    BsCardText,
    BsCaretDownFill,
    BsCaretDownSquareFill,
    BsCaretDownSquare,
    BsCaretDown,
    BsCaretLeftFill,
    BsCaretLeftSquareFill,
    BsCaretLeftSquare,
    BsCaretLeft,
    BsCaretRightFill,
    BsCaretRightSquareFill,
    BsCaretRightSquare,
    BsCaretRight,
    BsCaretUpFill,
    BsCaretUpSquareFill,
    BsCaretUpSquare,
    BsCaretUp,
    BsCartCheckFill,
    BsCartCheck,
    BsCartDashFill,
    BsCartDash,
    BsCartFill,
    BsCartPlusFill,
    BsCartPlus,
    BsCartXFill,
    BsCartX,
    BsCart,
    BsCart2,
    BsCart3,
    BsCart4,
    BsCashCoin,
    BsCashStack,
    BsCash,
    BsCassetteFill,
    BsCassette,
    BsCast,
    BsCcCircleFill,
    BsCcCircle,
    BsCcSquareFill,
    BsCcSquare,
    BsChatDotsFill,
    BsChatDots,
    BsChatFill,
    BsChatHeartFill,
    BsChatHeart,
    BsChatLeftDotsFill,
    BsChatLeftDots,
    BsChatLeftFill,
    BsChatLeftHeartFill,
    BsChatLeftHeart,
    BsChatLeftQuoteFill,
    BsChatLeftQuote,
    BsChatLeftTextFill,
    BsChatLeftText,
    BsChatLeft,
    BsChatQuoteFill,
    BsChatQuote,
    BsChatRightDotsFill,
    BsChatRightDots,
    BsChatRightFill,
    BsChatRightHeartFill,
    BsChatRightHeart,
    BsChatRightQuoteFill,
    BsChatRightQuote,
    BsChatRightTextFill,
    BsChatRightText,
    BsChatRight,
    BsChatSquareDotsFill,
    BsChatSquareDots,
    BsChatSquareFill,
    BsChatSquareHeartFill,
    BsChatSquareHeart,
    BsChatSquareQuoteFill,
    BsChatSquareQuote,
    BsChatSquareTextFill,
    BsChatSquareText,
    BsChatSquare,
    BsChatTextFill,
    BsChatText,
    BsChat,
    BsCheckAll,
    BsCheckCircleFill,
    BsCheckCircle,
    BsCheckLg,
    BsCheckSquareFill,
    BsCheckSquare,
    BsCheck,
    BsCheck2All,
    BsCheck2Circle,
    BsCheck2Square,
    BsCheck2,
    BsChevronBarContract,
    BsChevronBarDown,
    BsChevronBarExpand,
    BsChevronBarLeft,
    BsChevronBarRight,
    BsChevronBarUp,
    BsChevronCompactDown,
    BsChevronCompactLeft,
    BsChevronCompactRight,
    BsChevronCompactUp,
    BsChevronContract,
    BsChevronDoubleDown,
    BsChevronDoubleLeft,
    BsChevronDoubleRight,
    BsChevronDoubleUp,
    BsChevronDown,
    BsChevronExpand,
    BsChevronLeft,
    BsChevronRight,
    BsChevronUp,
    BsCircleFill,
    BsCircleHalf,
    BsCircleSquare,
    BsCircle,
    BsClipboardCheckFill,
    BsClipboardCheck,
    BsClipboardDataFill,
    BsClipboardData,
    BsClipboardFill,
    BsClipboardHeartFill,
    BsClipboardHeart,
    BsClipboardMinusFill,
    BsClipboardMinus,
    BsClipboardPlusFill,
    BsClipboardPlus,
    BsClipboardPulse,
    BsClipboardXFill,
    BsClipboardX,
    BsClipboard,
    BsClipboard2CheckFill,
    BsClipboard2Check,
    BsClipboard2DataFill,
    BsClipboard2Data,
    BsClipboard2Fill,
    BsClipboard2HeartFill,
    BsClipboard2Heart,
    BsClipboard2MinusFill,
    BsClipboard2Minus,
    BsClipboard2PlusFill,
    BsClipboard2Plus,
    BsClipboard2PulseFill,
    BsClipboard2Pulse,
    BsClipboard2XFill,
    BsClipboard2X,
    BsClipboard2,
    BsClockFill,
    BsClockHistory,
    BsClock,
    BsCloudArrowDownFill,
    BsCloudArrowDown,
    BsCloudArrowUpFill,
    BsCloudArrowUp,
    BsCloudCheckFill,
    BsCloudCheck,
    BsCloudDownloadFill,
    BsCloudDownload,
    BsCloudDrizzleFill,
    BsCloudDrizzle,
    BsCloudFill,
    BsCloudFogFill,
    BsCloudFog,
    BsCloudFog2Fill,
    BsCloudFog2,
    BsCloudHailFill,
    BsCloudHail,
    BsCloudHazeFill,
    BsCloudHaze,
    BsCloudHaze2Fill,
    BsCloudHaze2,
    BsCloudLightningFill,
    BsCloudLightningRainFill,
    BsCloudLightningRain,
    BsCloudLightning,
    BsCloudMinusFill,
    BsCloudMinus,
    BsCloudMoonFill,
    BsCloudMoon,
    BsCloudPlusFill,
    BsCloudPlus,
    BsCloudRainFill,
    BsCloudRainHeavyFill,
    BsCloudRainHeavy,
    BsCloudRain,
    BsCloudSlashFill,
    BsCloudSlash,
    BsCloudSleetFill,
    BsCloudSleet,
    BsCloudSnowFill,
    BsCloudSnow,
    BsCloudSunFill,
    BsCloudSun,
    BsCloudUploadFill,
    BsCloudUpload,
    BsCloud,
    BsCloudsFill,
    BsClouds,
    BsCloudyFill,
    BsCloudy,
    BsCodeSlash,
    BsCodeSquare,
    BsCode,
    BsCoin,
    BsCollectionFill,
    BsCollectionPlayFill,
    BsCollectionPlay,
    BsCollection,
    BsColumnsGap,
    BsColumns,
    BsCommand,
    BsCompassFill,
    BsCompass,
    BsConeStriped,
    BsCone,
    BsController,
    BsCookie,
    BsCopy,
    BsCpuFill,
    BsCpu,
    BsCreditCard2BackFill,
    BsCreditCard2Back,
    BsCreditCard2FrontFill,
    BsCreditCard2Front,
    BsCreditCardFill,
    BsCreditCard,
    BsCrop,
    BsCrosshair,
    BsCrosshair2,
    BsCupFill,
    BsCupHotFill,
    BsCupHot,
    BsCupStraw,
    BsCup,
    BsCurrencyBitcoin,
    BsCurrencyDollar,
    BsCurrencyEuro,
    BsCurrencyExchange,
    BsCurrencyPound,
    BsCurrencyRupee,
    BsCurrencyYen,
    BsCursorFill,
    BsCursorText,
    BsCursor,
    BsDashCircleDotted,
    BsDashCircleFill,
    BsDashCircle,
    BsDashLg,
    BsDashSquareDotted,
    BsDashSquareFill,
    BsDashSquare,
    BsDash,
    BsDatabaseAdd,
    BsDatabaseCheck,
    BsDatabaseDash,
    BsDatabaseDown,
    BsDatabaseExclamation,
    BsDatabaseFillAdd,
    BsDatabaseFillCheck,
    BsDatabaseFillDash,
    BsDatabaseFillDown,
    BsDatabaseFillExclamation,
    BsDatabaseFillGear,
    BsDatabaseFillLock,
    BsDatabaseFillSlash,
    BsDatabaseFillUp,
    BsDatabaseFillX,
    BsDatabaseFill,
    BsDatabaseGear,
    BsDatabaseLock,
    BsDatabaseSlash,
    BsDatabaseUp,
    BsDatabaseX,
    BsDatabase,
    BsDeviceHddFill,
    BsDeviceHdd,
    BsDeviceSsdFill,
    BsDeviceSsd,
    BsDiagram2Fill,
    BsDiagram2,
    BsDiagram3Fill,
    BsDiagram3,
    BsDiamondFill,
    BsDiamondHalf,
    BsDiamond,
    BsDice1Fill,
    BsDice1,
    BsDice2Fill,
    BsDice2,
    BsDice3Fill,
    BsDice3,
    BsDice4Fill,
    BsDice4,
    BsDice5Fill,
    BsDice5,
    BsDice6Fill,
    BsDice6,
    BsDiscFill,
    BsDisc,
    BsDiscord,
    BsDisplayFill,
    BsDisplay,
    BsDisplayportFill,
    BsDisplayport,
    BsDistributeHorizontal,
    BsDistributeVertical,
    BsDoorClosedFill,
    BsDoorClosed,
    BsDoorOpenFill,
    BsDoorOpen,
    BsDot,
    BsDownload,
    BsDpadFill,
    BsDpad,
    BsDribbble,
    BsDropbox,
    BsDropletFill,
    BsDropletHalf,
    BsDroplet,
    BsDuffleFill,
    BsDuffle,
    BsEarFill,
    BsEar,
    BsEarbuds,
    BsEaselFill,
    BsEasel,
    BsEasel2Fill,
    BsEasel2,
    BsEasel3Fill,
    BsEasel3,
    BsEggFill,
    BsEggFried,
    BsEgg,
    BsEjectFill,
    BsEject,
    BsEmojiAngryFill,
    BsEmojiAngry,
    BsEmojiAstonishedFill,
    BsEmojiAstonished,
    BsEmojiDizzyFill,
    BsEmojiDizzy,
    BsEmojiExpressionlessFill,
    BsEmojiExpressionless,
    BsEmojiFrownFill,
    BsEmojiFrown,
    BsEmojiGrimaceFill,
    BsEmojiGrimace,
    BsEmojiGrinFill,
    BsEmojiGrin,
    BsEmojiHeartEyesFill,
    BsEmojiHeartEyes,
    BsEmojiKissFill,
    BsEmojiKiss,
    BsEmojiLaughingFill,
    BsEmojiLaughing,
    BsEmojiNeutralFill,
    BsEmojiNeutral,
    BsEmojiSmileFill,
    BsEmojiSmileUpsideDownFill,
    BsEmojiSmileUpsideDown,
    BsEmojiSmile,
    BsEmojiSunglassesFill,
    BsEmojiSunglasses,
    BsEmojiSurpriseFill,
    BsEmojiSurprise,
    BsEmojiTearFill,
    BsEmojiTear,
    BsEmojiWinkFill,
    BsEmojiWink,
    BsEnvelopeArrowDownFill,
    BsEnvelopeArrowDown,
    BsEnvelopeArrowUpFill,
    BsEnvelopeArrowUp,
    BsEnvelopeAtFill,
    BsEnvelopeAt,
    BsEnvelopeCheckFill,
    BsEnvelopeCheck,
    BsEnvelopeDashFill,
    BsEnvelopeDash,
    BsEnvelopeExclamationFill,
    BsEnvelopeExclamation,
    BsEnvelopeFill,
    BsEnvelopeHeartFill,
    BsEnvelopeHeart,
    BsEnvelopeOpenFill,
    BsEnvelopeOpenHeartFill,
    BsEnvelopeOpenHeart,
    BsEnvelopeOpen,
    BsEnvelopePaperFill,
    BsEnvelopePaperHeartFill,
    BsEnvelopePaperHeart,
    BsEnvelopePaper,
    BsEnvelopePlusFill,
    BsEnvelopePlus,
    BsEnvelopeSlashFill,
    BsEnvelopeSlash,
    BsEnvelopeXFill,
    BsEnvelopeX,
    BsEnvelope,
    BsEraserFill,
    BsEraser,
    BsEscape,
    BsEthernet,
    BsEvFrontFill,
    BsEvFront,
    BsEvStationFill,
    BsEvStation,
    BsExclamationCircleFill,
    BsExclamationCircle,
    BsExclamationDiamondFill,
    BsExclamationDiamond,
    BsExclamationLg,
    BsExclamationOctagonFill,
    BsExclamationOctagon,
    BsExclamationSquareFill,
    BsExclamationSquare,
    BsExclamationTriangleFill,
    BsExclamationTriangle,
    BsExclamation,
    BsExclude,
    BsExplicitFill,
    BsExplicit,
    BsExposure,
    BsEyeFill,
    BsEyeSlashFill,
    BsEyeSlash,
    BsEye,
    BsEyedropper,
    BsEyeglasses,
    BsFacebook,
    BsFan,
    BsFastForwardBtnFill,
    BsFastForwardBtn,
    BsFastForwardCircleFill,
    BsFastForwardCircle,
    BsFastForwardFill,
    BsFastForward,
    BsFeather,
    BsFeather2,
    BsFileArrowDownFill,
    BsFileArrowDown,
    BsFileArrowUpFill,
    BsFileArrowUp,
    BsFileBarGraphFill,
    BsFileBarGraph,
    BsFileBinaryFill,
    BsFileBinary,
    BsFileBreakFill,
    BsFileBreak,
    BsFileCheckFill,
    BsFileCheck,
    BsFileCodeFill,
    BsFileCode,
    BsFileDiffFill,
    BsFileDiff,
    BsFileEarmarkArrowDownFill,
    BsFileEarmarkArrowDown,
    BsFileEarmarkArrowUpFill,
    BsFileEarmarkArrowUp,
    BsFileEarmarkBarGraphFill,
    BsFileEarmarkBarGraph,
    BsFileEarmarkBinaryFill,
    BsFileEarmarkBinary,
    BsFileEarmarkBreakFill,
    BsFileEarmarkBreak,
    BsFileEarmarkCheckFill,
    BsFileEarmarkCheck,
    BsFileEarmarkCodeFill,
    BsFileEarmarkCode,
    BsFileEarmarkDiffFill,
    BsFileEarmarkDiff,
    BsFileEarmarkEaselFill,
    BsFileEarmarkEasel,
    BsFileEarmarkExcelFill,
    BsFileEarmarkExcel,
    BsFileEarmarkFill,
    BsFileEarmarkFontFill,
    BsFileEarmarkFont,
    BsFileEarmarkImageFill,
    BsFileEarmarkImage,
    BsFileEarmarkLockFill,
    BsFileEarmarkLock,
    BsFileEarmarkLock2Fill,
    BsFileEarmarkLock2,
    BsFileEarmarkMedicalFill,
    BsFileEarmarkMedical,
    BsFileEarmarkMinusFill,
    BsFileEarmarkMinus,
    BsFileEarmarkMusicFill,
    BsFileEarmarkMusic,
    BsFileEarmarkPdfFill,
    BsFileEarmarkPdf,
    BsFileEarmarkPersonFill,
    BsFileEarmarkPerson,
    BsFileEarmarkPlayFill,
    BsFileEarmarkPlay,
    BsFileEarmarkPlusFill,
    BsFileEarmarkPlus,
    BsFileEarmarkPostFill,
    BsFileEarmarkPost,
    BsFileEarmarkPptFill,
    BsFileEarmarkPpt,
    BsFileEarmarkRichtextFill,
    BsFileEarmarkRichtext,
    BsFileEarmarkRuledFill,
    BsFileEarmarkRuled,
    BsFileEarmarkSlidesFill,
    BsFileEarmarkSlides,
    BsFileEarmarkSpreadsheetFill,
    BsFileEarmarkSpreadsheet,
    BsFileEarmarkTextFill,
    BsFileEarmarkText,
    BsFileEarmarkWordFill,
    BsFileEarmarkWord,
    BsFileEarmarkXFill,
    BsFileEarmarkX,
    BsFileEarmarkZipFill,
    BsFileEarmarkZip,
    BsFileEarmark,
    BsFileEaselFill,
    BsFileEasel,
    BsFileExcelFill,
    BsFileExcel,
    BsFileFill,
    BsFileFontFill,
    BsFileFont,
    BsFileImageFill,
    BsFileImage,
    BsFileLockFill,
    BsFileLock,
    BsFileLock2Fill,
    BsFileLock2,
    BsFileMedicalFill,
    BsFileMedical,
    BsFileMinusFill,
    BsFileMinus,
    BsFileMusicFill,
    BsFileMusic,
    BsFilePdfFill,
    BsFilePdf,
    BsFilePersonFill,
    BsFilePerson,
    BsFilePlayFill,
    BsFilePlay,
    BsFilePlusFill,
    BsFilePlus,
    BsFilePostFill,
    BsFilePost,
    BsFilePptFill,
    BsFilePpt,
    BsFileRichtextFill,
    BsFileRichtext,
    BsFileRuledFill,
    BsFileRuled,
    BsFileSlidesFill,
    BsFileSlides,
    BsFileSpreadsheetFill,
    BsFileSpreadsheet,
    BsFileTextFill,
    BsFileText,
    BsFileWordFill,
    BsFileWord,
    BsFileXFill,
    BsFileX,
    BsFileZipFill,
    BsFileZip,
    BsFile,
    BsFilesAlt,
    BsFiles,
    BsFiletypeAac,
    BsFiletypeAi,
    BsFiletypeBmp,
    BsFiletypeCs,
    BsFiletypeCss,
    BsFiletypeCsv,
    BsFiletypeDoc,
    BsFiletypeDocx,
    BsFiletypeExe,
    BsFiletypeGif,
    BsFiletypeHeic,
    BsFiletypeHtml,
    BsFiletypeJava,
    BsFiletypeJpg,
    BsFiletypeJs,
    BsFiletypeJson,
    BsFiletypeJsx,
    BsFiletypeKey,
    BsFiletypeM4P,
    BsFiletypeMd,
    BsFiletypeMdx,
    BsFiletypeMov,
    BsFiletypeMp3,
    BsFiletypeMp4,
    BsFiletypeOtf,
    BsFiletypePdf,
    BsFiletypePhp,
    BsFiletypePng,
    BsFiletypePpt,
    BsFiletypePptx,
    BsFiletypePsd,
    BsFiletypePy,
    BsFiletypeRaw,
    BsFiletypeRb,
    BsFiletypeSass,
    BsFiletypeScss,
    BsFiletypeSh,
    BsFiletypeSql,
    BsFiletypeSvg,
    BsFiletypeTiff,
    BsFiletypeTsx,
    BsFiletypeTtf,
    BsFiletypeTxt,
    BsFiletypeWav,
    BsFiletypeWoff,
    BsFiletypeXls,
    BsFiletypeXlsx,
    BsFiletypeXml,
    BsFiletypeYml,
    BsFilm,
    BsFilterCircleFill,
    BsFilterCircle,
    BsFilterLeft,
    BsFilterRight,
    BsFilterSquareFill,
    BsFilterSquare,
    BsFilter,
    BsFingerprint,
    BsFire,
    BsFlagFill,
    BsFlag,
    BsFloppyFill,
    BsFloppy,
    BsFloppy2Fill,
    BsFloppy2,
    BsFlower1,
    BsFlower2,
    BsFlower3,
    BsFolderCheck,
    BsFolderFill,
    BsFolderMinus,
    BsFolderPlus,
    BsFolderSymlinkFill,
    BsFolderSymlink,
    BsFolderX,
    BsFolder,
    BsFolder2Open,
    BsFolder2,
    BsFonts,
    BsForwardFill,
    BsForward,
    BsFront,
    BsFuelPumpDieselFill,
    BsFuelPumpDiesel,
    BsFuelPumpFill,
    BsFuelPump,
    BsFullscreenExit,
    BsFullscreen,
    BsFunnelFill,
    BsFunnel,
    BsGearFill,
    BsGearWideConnected,
    BsGearWide,
    BsGear,
    BsGem,
    BsGenderAmbiguous,
    BsGenderFemale,
    BsGenderMale,
    BsGenderNeuter,
    BsGenderTrans,
    BsGeoAltFill,
    BsGeoAlt,
    BsGeoFill,
    BsGeo,
    BsGiftFill,
    BsGift,
    BsGit,
    BsGithub,
    BsGitlab,
    BsGlobeAmericas,
    BsGlobeAsiaAustralia,
    BsGlobeCentralSouthAsia,
    BsGlobeEuropeAfrica,
    BsGlobe,
    BsGlobe2,
    BsGooglePlay,
    BsGoogle,
    BsGpuCard,
    BsGraphDownArrow,
    BsGraphDown,
    BsGraphUpArrow,
    BsGraphUp,
    BsGrid1X2Fill,
    BsGrid1X2,
    BsGrid3X2GapFill,
    BsGrid3X2Gap,
    BsGrid3X2,
    BsGrid3X3GapFill,
    BsGrid3X3Gap,
    BsGrid3X3,
    BsGridFill,
    BsGrid,
    BsGripHorizontal,
    BsGripVertical,
    BsHCircleFill,
    BsHCircle,
    BsHSquareFill,
    BsHSquare,
    BsHammer,
    BsHandIndexFill,
    BsHandIndexThumbFill,
    BsHandIndexThumb,
    BsHandIndex,
    BsHandThumbsDownFill,
    BsHandThumbsDown,
    BsHandThumbsUpFill,
    BsHandThumbsUp,
    BsHandbagFill,
    BsHandbag,
    BsHash,
    BsHddFill,
    BsHddNetworkFill,
    BsHddNetwork,
    BsHddRackFill,
    BsHddRack,
    BsHddStackFill,
    BsHddStack,
    BsHdd,
    BsHdmiFill,
    BsHdmi,
    BsHeadphones,
    BsHeadsetVr,
    BsHeadset,
    BsHeartArrow,
    BsHeartFill,
    BsHeartHalf,
    BsHeartPulseFill,
    BsHeartPulse,
    BsHeart,
    BsHeartbreakFill,
    BsHeartbreak,
    BsHearts,
    BsHeptagonFill,
    BsHeptagonHalf,
    BsHeptagon,
    BsHexagonFill,
    BsHexagonHalf,
    BsHexagon,
    BsHighlighter,
    BsHighlights,
    BsHospitalFill,
    BsHospital,
    BsHourglassBottom,
    BsHourglassSplit,
    BsHourglassTop,
    BsHourglass,
    BsHouseAddFill,
    BsHouseAdd,
    BsHouseCheckFill,
    BsHouseCheck,
    BsHouseDashFill,
    BsHouseDash,
    BsHouseDoorFill,
    BsHouseDoor,
    BsHouseDownFill,
    BsHouseDown,
    BsHouseExclamationFill,
    BsHouseExclamation,
    BsHouseFill,
    BsHouseGearFill,
    BsHouseGear,
    BsHouseHeartFill,
    BsHouseHeart,
    BsHouseLockFill,
    BsHouseLock,
    BsHouseSlashFill,
    BsHouseSlash,
    BsHouseUpFill,
    BsHouseUp,
    BsHouseXFill,
    BsHouseX,
    BsHouse,
    BsHousesFill,
    BsHouses,
    BsHr,
    BsHurricane,
    BsHypnotize,
    BsImageAlt,
    BsImageFill,
    BsImage,
    BsImages,
    BsInboxFill,
    BsInbox,
    BsInboxesFill,
    BsInboxes,
    BsIncognito,
    BsIndent,
    BsInfinity,
    BsInfoCircleFill,
    BsInfoCircle,
    BsInfoLg,
    BsInfoSquareFill,
    BsInfoSquare,
    BsInfo,
    BsInputCursorText,
    BsInputCursor,
    BsInstagram,
    BsIntersect,
    BsJournalAlbum,
    BsJournalArrowDown,
    BsJournalArrowUp,
    BsJournalBookmarkFill,
    BsJournalBookmark,
    BsJournalCheck,
    BsJournalCode,
    BsJournalMedical,
    BsJournalMinus,
    BsJournalPlus,
    BsJournalRichtext,
    BsJournalText,
    BsJournalX,
    BsJournal,
    BsJournals,
    BsJoystick,
    BsJustifyLeft,
    BsJustifyRight,
    BsJustify,
    BsKanbanFill,
    BsKanban,
    BsKeyFill,
    BsKey,
    BsKeyboardFill,
    BsKeyboard,
    BsLadder,
    BsLampFill,
    BsLamp,
    BsLaptopFill,
    BsLaptop,
    BsLayerBackward,
    BsLayerForward,
    BsLayersFill,
    BsLayersHalf,
    BsLayers,
    BsLayoutSidebarInsetReverse,
    BsLayoutSidebarInset,
    BsLayoutSidebarReverse,
    BsLayoutSidebar,
    BsLayoutSplit,
    BsLayoutTextSidebarReverse,
    BsLayoutTextSidebar,
    BsLayoutTextWindowReverse,
    BsLayoutTextWindow,
    BsLayoutThreeColumns,
    BsLayoutWtf,
    BsLifePreserver,
    BsLightbulbFill,
    BsLightbulbOffFill,
    BsLightbulbOff,
    BsLightbulb,
    BsLightningChargeFill,
    BsLightningCharge,
    BsLightningFill,
    BsLightning,
    BsLine,
    BsLink45Deg,
    BsLink,
    BsLinkedin,
    BsListCheck,
    BsListColumnsReverse,
    BsListColumns,
    BsListNested,
    BsListOl,
    BsListStars,
    BsListTask,
    BsListUl,
    BsList,
    BsLockFill,
    BsLock,
    BsLuggageFill,
    BsLuggage,
    BsLungsFill,
    BsLungs,
    BsMagic,
    BsMagnetFill,
    BsMagnet,
    BsMailboxFlag,
    BsMailbox,
    BsMailbox2Flag,
    BsMailbox2,
    BsMapFill,
    BsMap,
    BsMarkdownFill,
    BsMarkdown,
    BsMarkerTip,
    BsMask,
    BsMastodon,
} from "react-icons/bs"

export function nameToReactIcon_bs_1(iconName: string): IconType | undefined {

    switch(iconName) {
        case "bs:BsBuildingFillGear":
            return BsBuildingFillGear;
        case "bs:BsBuildingFillLock":
            return BsBuildingFillLock;
        case "bs:BsBuildingFillSlash":
            return BsBuildingFillSlash;
        case "bs:BsBuildingFillUp":
            return BsBuildingFillUp;
        case "bs:BsBuildingFillX":
            return BsBuildingFillX;
        case "bs:BsBuildingFill":
            return BsBuildingFill;
        case "bs:BsBuildingGear":
            return BsBuildingGear;
        case "bs:BsBuildingLock":
            return BsBuildingLock;
        case "bs:BsBuildingSlash":
            return BsBuildingSlash;
        case "bs:BsBuildingUp":
            return BsBuildingUp;
        case "bs:BsBuildingX":
            return BsBuildingX;
        case "bs:BsBuilding":
            return BsBuilding;
        case "bs:BsBuildingsFill":
            return BsBuildingsFill;
        case "bs:BsBuildings":
            return BsBuildings;
        case "bs:BsBullseye":
            return BsBullseye;
        case "bs:BsBusFrontFill":
            return BsBusFrontFill;
        case "bs:BsBusFront":
            return BsBusFront;
        case "bs:BsCCircleFill":
            return BsCCircleFill;
        case "bs:BsCCircle":
            return BsCCircle;
        case "bs:BsCSquareFill":
            return BsCSquareFill;
        case "bs:BsCSquare":
            return BsCSquare;
        case "bs:BsCakeFill":
            return BsCakeFill;
        case "bs:BsCake":
            return BsCake;
        case "bs:BsCake2Fill":
            return BsCake2Fill;
        case "bs:BsCake2":
            return BsCake2;
        case "bs:BsCalculatorFill":
            return BsCalculatorFill;
        case "bs:BsCalculator":
            return BsCalculator;
        case "bs:BsCalendarCheckFill":
            return BsCalendarCheckFill;
        case "bs:BsCalendarCheck":
            return BsCalendarCheck;
        case "bs:BsCalendarDateFill":
            return BsCalendarDateFill;
        case "bs:BsCalendarDate":
            return BsCalendarDate;
        case "bs:BsCalendarDayFill":
            return BsCalendarDayFill;
        case "bs:BsCalendarDay":
            return BsCalendarDay;
        case "bs:BsCalendarEventFill":
            return BsCalendarEventFill;
        case "bs:BsCalendarEvent":
            return BsCalendarEvent;
        case "bs:BsCalendarFill":
            return BsCalendarFill;
        case "bs:BsCalendarHeartFill":
            return BsCalendarHeartFill;
        case "bs:BsCalendarHeart":
            return BsCalendarHeart;
        case "bs:BsCalendarMinusFill":
            return BsCalendarMinusFill;
        case "bs:BsCalendarMinus":
            return BsCalendarMinus;
        case "bs:BsCalendarMonthFill":
            return BsCalendarMonthFill;
        case "bs:BsCalendarMonth":
            return BsCalendarMonth;
        case "bs:BsCalendarPlusFill":
            return BsCalendarPlusFill;
        case "bs:BsCalendarPlus":
            return BsCalendarPlus;
        case "bs:BsCalendarRangeFill":
            return BsCalendarRangeFill;
        case "bs:BsCalendarRange":
            return BsCalendarRange;
        case "bs:BsCalendarWeekFill":
            return BsCalendarWeekFill;
        case "bs:BsCalendarWeek":
            return BsCalendarWeek;
        case "bs:BsCalendarXFill":
            return BsCalendarXFill;
        case "bs:BsCalendarX":
            return BsCalendarX;
        case "bs:BsCalendar":
            return BsCalendar;
        case "bs:BsCalendar2CheckFill":
            return BsCalendar2CheckFill;
        case "bs:BsCalendar2Check":
            return BsCalendar2Check;
        case "bs:BsCalendar2DateFill":
            return BsCalendar2DateFill;
        case "bs:BsCalendar2Date":
            return BsCalendar2Date;
        case "bs:BsCalendar2DayFill":
            return BsCalendar2DayFill;
        case "bs:BsCalendar2Day":
            return BsCalendar2Day;
        case "bs:BsCalendar2EventFill":
            return BsCalendar2EventFill;
        case "bs:BsCalendar2Event":
            return BsCalendar2Event;
        case "bs:BsCalendar2Fill":
            return BsCalendar2Fill;
        case "bs:BsCalendar2HeartFill":
            return BsCalendar2HeartFill;
        case "bs:BsCalendar2Heart":
            return BsCalendar2Heart;
        case "bs:BsCalendar2MinusFill":
            return BsCalendar2MinusFill;
        case "bs:BsCalendar2Minus":
            return BsCalendar2Minus;
        case "bs:BsCalendar2MonthFill":
            return BsCalendar2MonthFill;
        case "bs:BsCalendar2Month":
            return BsCalendar2Month;
        case "bs:BsCalendar2PlusFill":
            return BsCalendar2PlusFill;
        case "bs:BsCalendar2Plus":
            return BsCalendar2Plus;
        case "bs:BsCalendar2RangeFill":
            return BsCalendar2RangeFill;
        case "bs:BsCalendar2Range":
            return BsCalendar2Range;
        case "bs:BsCalendar2WeekFill":
            return BsCalendar2WeekFill;
        case "bs:BsCalendar2Week":
            return BsCalendar2Week;
        case "bs:BsCalendar2XFill":
            return BsCalendar2XFill;
        case "bs:BsCalendar2X":
            return BsCalendar2X;
        case "bs:BsCalendar2":
            return BsCalendar2;
        case "bs:BsCalendar3EventFill":
            return BsCalendar3EventFill;
        case "bs:BsCalendar3Event":
            return BsCalendar3Event;
        case "bs:BsCalendar3Fill":
            return BsCalendar3Fill;
        case "bs:BsCalendar3RangeFill":
            return BsCalendar3RangeFill;
        case "bs:BsCalendar3Range":
            return BsCalendar3Range;
        case "bs:BsCalendar3WeekFill":
            return BsCalendar3WeekFill;
        case "bs:BsCalendar3Week":
            return BsCalendar3Week;
        case "bs:BsCalendar3":
            return BsCalendar3;
        case "bs:BsCalendar4Event":
            return BsCalendar4Event;
        case "bs:BsCalendar4Range":
            return BsCalendar4Range;
        case "bs:BsCalendar4Week":
            return BsCalendar4Week;
        case "bs:BsCalendar4":
            return BsCalendar4;
        case "bs:BsCameraFill":
            return BsCameraFill;
        case "bs:BsCameraReelsFill":
            return BsCameraReelsFill;
        case "bs:BsCameraReels":
            return BsCameraReels;
        case "bs:BsCameraVideoFill":
            return BsCameraVideoFill;
        case "bs:BsCameraVideoOffFill":
            return BsCameraVideoOffFill;
        case "bs:BsCameraVideoOff":
            return BsCameraVideoOff;
        case "bs:BsCameraVideo":
            return BsCameraVideo;
        case "bs:BsCamera":
            return BsCamera;
        case "bs:BsCamera2":
            return BsCamera2;
        case "bs:BsCapslockFill":
            return BsCapslockFill;
        case "bs:BsCapslock":
            return BsCapslock;
        case "bs:BsCapsulePill":
            return BsCapsulePill;
        case "bs:BsCapsule":
            return BsCapsule;
        case "bs:BsCarFrontFill":
            return BsCarFrontFill;
        case "bs:BsCarFront":
            return BsCarFront;
        case "bs:BsCardChecklist":
            return BsCardChecklist;
        case "bs:BsCardHeading":
            return BsCardHeading;
        case "bs:BsCardImage":
            return BsCardImage;
        case "bs:BsCardList":
            return BsCardList;
        case "bs:BsCardText":
            return BsCardText;
        case "bs:BsCaretDownFill":
            return BsCaretDownFill;
        case "bs:BsCaretDownSquareFill":
            return BsCaretDownSquareFill;
        case "bs:BsCaretDownSquare":
            return BsCaretDownSquare;
        case "bs:BsCaretDown":
            return BsCaretDown;
        case "bs:BsCaretLeftFill":
            return BsCaretLeftFill;
        case "bs:BsCaretLeftSquareFill":
            return BsCaretLeftSquareFill;
        case "bs:BsCaretLeftSquare":
            return BsCaretLeftSquare;
        case "bs:BsCaretLeft":
            return BsCaretLeft;
        case "bs:BsCaretRightFill":
            return BsCaretRightFill;
        case "bs:BsCaretRightSquareFill":
            return BsCaretRightSquareFill;
        case "bs:BsCaretRightSquare":
            return BsCaretRightSquare;
        case "bs:BsCaretRight":
            return BsCaretRight;
        case "bs:BsCaretUpFill":
            return BsCaretUpFill;
        case "bs:BsCaretUpSquareFill":
            return BsCaretUpSquareFill;
        case "bs:BsCaretUpSquare":
            return BsCaretUpSquare;
        case "bs:BsCaretUp":
            return BsCaretUp;
        case "bs:BsCartCheckFill":
            return BsCartCheckFill;
        case "bs:BsCartCheck":
            return BsCartCheck;
        case "bs:BsCartDashFill":
            return BsCartDashFill;
        case "bs:BsCartDash":
            return BsCartDash;
        case "bs:BsCartFill":
            return BsCartFill;
        case "bs:BsCartPlusFill":
            return BsCartPlusFill;
        case "bs:BsCartPlus":
            return BsCartPlus;
        case "bs:BsCartXFill":
            return BsCartXFill;
        case "bs:BsCartX":
            return BsCartX;
        case "bs:BsCart":
            return BsCart;
        case "bs:BsCart2":
            return BsCart2;
        case "bs:BsCart3":
            return BsCart3;
        case "bs:BsCart4":
            return BsCart4;
        case "bs:BsCashCoin":
            return BsCashCoin;
        case "bs:BsCashStack":
            return BsCashStack;
        case "bs:BsCash":
            return BsCash;
        case "bs:BsCassetteFill":
            return BsCassetteFill;
        case "bs:BsCassette":
            return BsCassette;
        case "bs:BsCast":
            return BsCast;
        case "bs:BsCcCircleFill":
            return BsCcCircleFill;
        case "bs:BsCcCircle":
            return BsCcCircle;
        case "bs:BsCcSquareFill":
            return BsCcSquareFill;
        case "bs:BsCcSquare":
            return BsCcSquare;
        case "bs:BsChatDotsFill":
            return BsChatDotsFill;
        case "bs:BsChatDots":
            return BsChatDots;
        case "bs:BsChatFill":
            return BsChatFill;
        case "bs:BsChatHeartFill":
            return BsChatHeartFill;
        case "bs:BsChatHeart":
            return BsChatHeart;
        case "bs:BsChatLeftDotsFill":
            return BsChatLeftDotsFill;
        case "bs:BsChatLeftDots":
            return BsChatLeftDots;
        case "bs:BsChatLeftFill":
            return BsChatLeftFill;
        case "bs:BsChatLeftHeartFill":
            return BsChatLeftHeartFill;
        case "bs:BsChatLeftHeart":
            return BsChatLeftHeart;
        case "bs:BsChatLeftQuoteFill":
            return BsChatLeftQuoteFill;
        case "bs:BsChatLeftQuote":
            return BsChatLeftQuote;
        case "bs:BsChatLeftTextFill":
            return BsChatLeftTextFill;
        case "bs:BsChatLeftText":
            return BsChatLeftText;
        case "bs:BsChatLeft":
            return BsChatLeft;
        case "bs:BsChatQuoteFill":
            return BsChatQuoteFill;
        case "bs:BsChatQuote":
            return BsChatQuote;
        case "bs:BsChatRightDotsFill":
            return BsChatRightDotsFill;
        case "bs:BsChatRightDots":
            return BsChatRightDots;
        case "bs:BsChatRightFill":
            return BsChatRightFill;
        case "bs:BsChatRightHeartFill":
            return BsChatRightHeartFill;
        case "bs:BsChatRightHeart":
            return BsChatRightHeart;
        case "bs:BsChatRightQuoteFill":
            return BsChatRightQuoteFill;
        case "bs:BsChatRightQuote":
            return BsChatRightQuote;
        case "bs:BsChatRightTextFill":
            return BsChatRightTextFill;
        case "bs:BsChatRightText":
            return BsChatRightText;
        case "bs:BsChatRight":
            return BsChatRight;
        case "bs:BsChatSquareDotsFill":
            return BsChatSquareDotsFill;
        case "bs:BsChatSquareDots":
            return BsChatSquareDots;
        case "bs:BsChatSquareFill":
            return BsChatSquareFill;
        case "bs:BsChatSquareHeartFill":
            return BsChatSquareHeartFill;
        case "bs:BsChatSquareHeart":
            return BsChatSquareHeart;
        case "bs:BsChatSquareQuoteFill":
            return BsChatSquareQuoteFill;
        case "bs:BsChatSquareQuote":
            return BsChatSquareQuote;
        case "bs:BsChatSquareTextFill":
            return BsChatSquareTextFill;
        case "bs:BsChatSquareText":
            return BsChatSquareText;
        case "bs:BsChatSquare":
            return BsChatSquare;
        case "bs:BsChatTextFill":
            return BsChatTextFill;
        case "bs:BsChatText":
            return BsChatText;
        case "bs:BsChat":
            return BsChat;
        case "bs:BsCheckAll":
            return BsCheckAll;
        case "bs:BsCheckCircleFill":
            return BsCheckCircleFill;
        case "bs:BsCheckCircle":
            return BsCheckCircle;
        case "bs:BsCheckLg":
            return BsCheckLg;
        case "bs:BsCheckSquareFill":
            return BsCheckSquareFill;
        case "bs:BsCheckSquare":
            return BsCheckSquare;
        case "bs:BsCheck":
            return BsCheck;
        case "bs:BsCheck2All":
            return BsCheck2All;
        case "bs:BsCheck2Circle":
            return BsCheck2Circle;
        case "bs:BsCheck2Square":
            return BsCheck2Square;
        case "bs:BsCheck2":
            return BsCheck2;
        case "bs:BsChevronBarContract":
            return BsChevronBarContract;
        case "bs:BsChevronBarDown":
            return BsChevronBarDown;
        case "bs:BsChevronBarExpand":
            return BsChevronBarExpand;
        case "bs:BsChevronBarLeft":
            return BsChevronBarLeft;
        case "bs:BsChevronBarRight":
            return BsChevronBarRight;
        case "bs:BsChevronBarUp":
            return BsChevronBarUp;
        case "bs:BsChevronCompactDown":
            return BsChevronCompactDown;
        case "bs:BsChevronCompactLeft":
            return BsChevronCompactLeft;
        case "bs:BsChevronCompactRight":
            return BsChevronCompactRight;
        case "bs:BsChevronCompactUp":
            return BsChevronCompactUp;
        case "bs:BsChevronContract":
            return BsChevronContract;
        case "bs:BsChevronDoubleDown":
            return BsChevronDoubleDown;
        case "bs:BsChevronDoubleLeft":
            return BsChevronDoubleLeft;
        case "bs:BsChevronDoubleRight":
            return BsChevronDoubleRight;
        case "bs:BsChevronDoubleUp":
            return BsChevronDoubleUp;
        case "bs:BsChevronDown":
            return BsChevronDown;
        case "bs:BsChevronExpand":
            return BsChevronExpand;
        case "bs:BsChevronLeft":
            return BsChevronLeft;
        case "bs:BsChevronRight":
            return BsChevronRight;
        case "bs:BsChevronUp":
            return BsChevronUp;
        case "bs:BsCircleFill":
            return BsCircleFill;
        case "bs:BsCircleHalf":
            return BsCircleHalf;
        case "bs:BsCircleSquare":
            return BsCircleSquare;
        case "bs:BsCircle":
            return BsCircle;
        case "bs:BsClipboardCheckFill":
            return BsClipboardCheckFill;
        case "bs:BsClipboardCheck":
            return BsClipboardCheck;
        case "bs:BsClipboardDataFill":
            return BsClipboardDataFill;
        case "bs:BsClipboardData":
            return BsClipboardData;
        case "bs:BsClipboardFill":
            return BsClipboardFill;
        case "bs:BsClipboardHeartFill":
            return BsClipboardHeartFill;
        case "bs:BsClipboardHeart":
            return BsClipboardHeart;
        case "bs:BsClipboardMinusFill":
            return BsClipboardMinusFill;
        case "bs:BsClipboardMinus":
            return BsClipboardMinus;
        case "bs:BsClipboardPlusFill":
            return BsClipboardPlusFill;
        case "bs:BsClipboardPlus":
            return BsClipboardPlus;
        case "bs:BsClipboardPulse":
            return BsClipboardPulse;
        case "bs:BsClipboardXFill":
            return BsClipboardXFill;
        case "bs:BsClipboardX":
            return BsClipboardX;
        case "bs:BsClipboard":
            return BsClipboard;
        case "bs:BsClipboard2CheckFill":
            return BsClipboard2CheckFill;
        case "bs:BsClipboard2Check":
            return BsClipboard2Check;
        case "bs:BsClipboard2DataFill":
            return BsClipboard2DataFill;
        case "bs:BsClipboard2Data":
            return BsClipboard2Data;
        case "bs:BsClipboard2Fill":
            return BsClipboard2Fill;
        case "bs:BsClipboard2HeartFill":
            return BsClipboard2HeartFill;
        case "bs:BsClipboard2Heart":
            return BsClipboard2Heart;
        case "bs:BsClipboard2MinusFill":
            return BsClipboard2MinusFill;
        case "bs:BsClipboard2Minus":
            return BsClipboard2Minus;
        case "bs:BsClipboard2PlusFill":
            return BsClipboard2PlusFill;
        case "bs:BsClipboard2Plus":
            return BsClipboard2Plus;
        case "bs:BsClipboard2PulseFill":
            return BsClipboard2PulseFill;
        case "bs:BsClipboard2Pulse":
            return BsClipboard2Pulse;
        case "bs:BsClipboard2XFill":
            return BsClipboard2XFill;
        case "bs:BsClipboard2X":
            return BsClipboard2X;
        case "bs:BsClipboard2":
            return BsClipboard2;
        case "bs:BsClockFill":
            return BsClockFill;
        case "bs:BsClockHistory":
            return BsClockHistory;
        case "bs:BsClock":
            return BsClock;
        case "bs:BsCloudArrowDownFill":
            return BsCloudArrowDownFill;
        case "bs:BsCloudArrowDown":
            return BsCloudArrowDown;
        case "bs:BsCloudArrowUpFill":
            return BsCloudArrowUpFill;
        case "bs:BsCloudArrowUp":
            return BsCloudArrowUp;
        case "bs:BsCloudCheckFill":
            return BsCloudCheckFill;
        case "bs:BsCloudCheck":
            return BsCloudCheck;
        case "bs:BsCloudDownloadFill":
            return BsCloudDownloadFill;
        case "bs:BsCloudDownload":
            return BsCloudDownload;
        case "bs:BsCloudDrizzleFill":
            return BsCloudDrizzleFill;
        case "bs:BsCloudDrizzle":
            return BsCloudDrizzle;
        case "bs:BsCloudFill":
            return BsCloudFill;
        case "bs:BsCloudFogFill":
            return BsCloudFogFill;
        case "bs:BsCloudFog":
            return BsCloudFog;
        case "bs:BsCloudFog2Fill":
            return BsCloudFog2Fill;
        case "bs:BsCloudFog2":
            return BsCloudFog2;
        case "bs:BsCloudHailFill":
            return BsCloudHailFill;
        case "bs:BsCloudHail":
            return BsCloudHail;
        case "bs:BsCloudHazeFill":
            return BsCloudHazeFill;
        case "bs:BsCloudHaze":
            return BsCloudHaze;
        case "bs:BsCloudHaze2Fill":
            return BsCloudHaze2Fill;
        case "bs:BsCloudHaze2":
            return BsCloudHaze2;
        case "bs:BsCloudLightningFill":
            return BsCloudLightningFill;
        case "bs:BsCloudLightningRainFill":
            return BsCloudLightningRainFill;
        case "bs:BsCloudLightningRain":
            return BsCloudLightningRain;
        case "bs:BsCloudLightning":
            return BsCloudLightning;
        case "bs:BsCloudMinusFill":
            return BsCloudMinusFill;
        case "bs:BsCloudMinus":
            return BsCloudMinus;
        case "bs:BsCloudMoonFill":
            return BsCloudMoonFill;
        case "bs:BsCloudMoon":
            return BsCloudMoon;
        case "bs:BsCloudPlusFill":
            return BsCloudPlusFill;
        case "bs:BsCloudPlus":
            return BsCloudPlus;
        case "bs:BsCloudRainFill":
            return BsCloudRainFill;
        case "bs:BsCloudRainHeavyFill":
            return BsCloudRainHeavyFill;
        case "bs:BsCloudRainHeavy":
            return BsCloudRainHeavy;
        case "bs:BsCloudRain":
            return BsCloudRain;
        case "bs:BsCloudSlashFill":
            return BsCloudSlashFill;
        case "bs:BsCloudSlash":
            return BsCloudSlash;
        case "bs:BsCloudSleetFill":
            return BsCloudSleetFill;
        case "bs:BsCloudSleet":
            return BsCloudSleet;
        case "bs:BsCloudSnowFill":
            return BsCloudSnowFill;
        case "bs:BsCloudSnow":
            return BsCloudSnow;
        case "bs:BsCloudSunFill":
            return BsCloudSunFill;
        case "bs:BsCloudSun":
            return BsCloudSun;
        case "bs:BsCloudUploadFill":
            return BsCloudUploadFill;
        case "bs:BsCloudUpload":
            return BsCloudUpload;
        case "bs:BsCloud":
            return BsCloud;
        case "bs:BsCloudsFill":
            return BsCloudsFill;
        case "bs:BsClouds":
            return BsClouds;
        case "bs:BsCloudyFill":
            return BsCloudyFill;
        case "bs:BsCloudy":
            return BsCloudy;
        case "bs:BsCodeSlash":
            return BsCodeSlash;
        case "bs:BsCodeSquare":
            return BsCodeSquare;
        case "bs:BsCode":
            return BsCode;
        case "bs:BsCoin":
            return BsCoin;
        case "bs:BsCollectionFill":
            return BsCollectionFill;
        case "bs:BsCollectionPlayFill":
            return BsCollectionPlayFill;
        case "bs:BsCollectionPlay":
            return BsCollectionPlay;
        case "bs:BsCollection":
            return BsCollection;
        case "bs:BsColumnsGap":
            return BsColumnsGap;
        case "bs:BsColumns":
            return BsColumns;
        case "bs:BsCommand":
            return BsCommand;
        case "bs:BsCompassFill":
            return BsCompassFill;
        case "bs:BsCompass":
            return BsCompass;
        case "bs:BsConeStriped":
            return BsConeStriped;
        case "bs:BsCone":
            return BsCone;
        case "bs:BsController":
            return BsController;
        case "bs:BsCookie":
            return BsCookie;
        case "bs:BsCopy":
            return BsCopy;
        case "bs:BsCpuFill":
            return BsCpuFill;
        case "bs:BsCpu":
            return BsCpu;
        case "bs:BsCreditCard2BackFill":
            return BsCreditCard2BackFill;
        case "bs:BsCreditCard2Back":
            return BsCreditCard2Back;
        case "bs:BsCreditCard2FrontFill":
            return BsCreditCard2FrontFill;
        case "bs:BsCreditCard2Front":
            return BsCreditCard2Front;
        case "bs:BsCreditCardFill":
            return BsCreditCardFill;
        case "bs:BsCreditCard":
            return BsCreditCard;
        case "bs:BsCrop":
            return BsCrop;
        case "bs:BsCrosshair":
            return BsCrosshair;
        case "bs:BsCrosshair2":
            return BsCrosshair2;
        case "bs:BsCupFill":
            return BsCupFill;
        case "bs:BsCupHotFill":
            return BsCupHotFill;
        case "bs:BsCupHot":
            return BsCupHot;
        case "bs:BsCupStraw":
            return BsCupStraw;
        case "bs:BsCup":
            return BsCup;
        case "bs:BsCurrencyBitcoin":
            return BsCurrencyBitcoin;
        case "bs:BsCurrencyDollar":
            return BsCurrencyDollar;
        case "bs:BsCurrencyEuro":
            return BsCurrencyEuro;
        case "bs:BsCurrencyExchange":
            return BsCurrencyExchange;
        case "bs:BsCurrencyPound":
            return BsCurrencyPound;
        case "bs:BsCurrencyRupee":
            return BsCurrencyRupee;
        case "bs:BsCurrencyYen":
            return BsCurrencyYen;
        case "bs:BsCursorFill":
            return BsCursorFill;
        case "bs:BsCursorText":
            return BsCursorText;
        case "bs:BsCursor":
            return BsCursor;
        case "bs:BsDashCircleDotted":
            return BsDashCircleDotted;
        case "bs:BsDashCircleFill":
            return BsDashCircleFill;
        case "bs:BsDashCircle":
            return BsDashCircle;
        case "bs:BsDashLg":
            return BsDashLg;
        case "bs:BsDashSquareDotted":
            return BsDashSquareDotted;
        case "bs:BsDashSquareFill":
            return BsDashSquareFill;
        case "bs:BsDashSquare":
            return BsDashSquare;
        case "bs:BsDash":
            return BsDash;
        case "bs:BsDatabaseAdd":
            return BsDatabaseAdd;
        case "bs:BsDatabaseCheck":
            return BsDatabaseCheck;
        case "bs:BsDatabaseDash":
            return BsDatabaseDash;
        case "bs:BsDatabaseDown":
            return BsDatabaseDown;
        case "bs:BsDatabaseExclamation":
            return BsDatabaseExclamation;
        case "bs:BsDatabaseFillAdd":
            return BsDatabaseFillAdd;
        case "bs:BsDatabaseFillCheck":
            return BsDatabaseFillCheck;
        case "bs:BsDatabaseFillDash":
            return BsDatabaseFillDash;
        case "bs:BsDatabaseFillDown":
            return BsDatabaseFillDown;
        case "bs:BsDatabaseFillExclamation":
            return BsDatabaseFillExclamation;
        case "bs:BsDatabaseFillGear":
            return BsDatabaseFillGear;
        case "bs:BsDatabaseFillLock":
            return BsDatabaseFillLock;
        case "bs:BsDatabaseFillSlash":
            return BsDatabaseFillSlash;
        case "bs:BsDatabaseFillUp":
            return BsDatabaseFillUp;
        case "bs:BsDatabaseFillX":
            return BsDatabaseFillX;
        case "bs:BsDatabaseFill":
            return BsDatabaseFill;
        case "bs:BsDatabaseGear":
            return BsDatabaseGear;
        case "bs:BsDatabaseLock":
            return BsDatabaseLock;
        case "bs:BsDatabaseSlash":
            return BsDatabaseSlash;
        case "bs:BsDatabaseUp":
            return BsDatabaseUp;
        case "bs:BsDatabaseX":
            return BsDatabaseX;
        case "bs:BsDatabase":
            return BsDatabase;
        case "bs:BsDeviceHddFill":
            return BsDeviceHddFill;
        case "bs:BsDeviceHdd":
            return BsDeviceHdd;
        case "bs:BsDeviceSsdFill":
            return BsDeviceSsdFill;
        case "bs:BsDeviceSsd":
            return BsDeviceSsd;
        case "bs:BsDiagram2Fill":
            return BsDiagram2Fill;
        case "bs:BsDiagram2":
            return BsDiagram2;
        case "bs:BsDiagram3Fill":
            return BsDiagram3Fill;
        case "bs:BsDiagram3":
            return BsDiagram3;
        case "bs:BsDiamondFill":
            return BsDiamondFill;
        case "bs:BsDiamondHalf":
            return BsDiamondHalf;
        case "bs:BsDiamond":
            return BsDiamond;
        case "bs:BsDice1Fill":
            return BsDice1Fill;
        case "bs:BsDice1":
            return BsDice1;
        case "bs:BsDice2Fill":
            return BsDice2Fill;
        case "bs:BsDice2":
            return BsDice2;
        case "bs:BsDice3Fill":
            return BsDice3Fill;
        case "bs:BsDice3":
            return BsDice3;
        case "bs:BsDice4Fill":
            return BsDice4Fill;
        case "bs:BsDice4":
            return BsDice4;
        case "bs:BsDice5Fill":
            return BsDice5Fill;
        case "bs:BsDice5":
            return BsDice5;
        case "bs:BsDice6Fill":
            return BsDice6Fill;
        case "bs:BsDice6":
            return BsDice6;
        case "bs:BsDiscFill":
            return BsDiscFill;
        case "bs:BsDisc":
            return BsDisc;
        case "bs:BsDiscord":
            return BsDiscord;
        case "bs:BsDisplayFill":
            return BsDisplayFill;
        case "bs:BsDisplay":
            return BsDisplay;
        case "bs:BsDisplayportFill":
            return BsDisplayportFill;
        case "bs:BsDisplayport":
            return BsDisplayport;
        case "bs:BsDistributeHorizontal":
            return BsDistributeHorizontal;
        case "bs:BsDistributeVertical":
            return BsDistributeVertical;
        case "bs:BsDoorClosedFill":
            return BsDoorClosedFill;
        case "bs:BsDoorClosed":
            return BsDoorClosed;
        case "bs:BsDoorOpenFill":
            return BsDoorOpenFill;
        case "bs:BsDoorOpen":
            return BsDoorOpen;
        case "bs:BsDot":
            return BsDot;
        case "bs:BsDownload":
            return BsDownload;
        case "bs:BsDpadFill":
            return BsDpadFill;
        case "bs:BsDpad":
            return BsDpad;
        case "bs:BsDribbble":
            return BsDribbble;
        case "bs:BsDropbox":
            return BsDropbox;
        case "bs:BsDropletFill":
            return BsDropletFill;
        case "bs:BsDropletHalf":
            return BsDropletHalf;
        case "bs:BsDroplet":
            return BsDroplet;
        case "bs:BsDuffleFill":
            return BsDuffleFill;
        case "bs:BsDuffle":
            return BsDuffle;
        case "bs:BsEarFill":
            return BsEarFill;
        case "bs:BsEar":
            return BsEar;
        case "bs:BsEarbuds":
            return BsEarbuds;
        case "bs:BsEaselFill":
            return BsEaselFill;
        case "bs:BsEasel":
            return BsEasel;
        case "bs:BsEasel2Fill":
            return BsEasel2Fill;
        case "bs:BsEasel2":
            return BsEasel2;
        case "bs:BsEasel3Fill":
            return BsEasel3Fill;
        case "bs:BsEasel3":
            return BsEasel3;
        case "bs:BsEggFill":
            return BsEggFill;
        case "bs:BsEggFried":
            return BsEggFried;
        case "bs:BsEgg":
            return BsEgg;
        case "bs:BsEjectFill":
            return BsEjectFill;
        case "bs:BsEject":
            return BsEject;
        case "bs:BsEmojiAngryFill":
            return BsEmojiAngryFill;
        case "bs:BsEmojiAngry":
            return BsEmojiAngry;
        case "bs:BsEmojiAstonishedFill":
            return BsEmojiAstonishedFill;
        case "bs:BsEmojiAstonished":
            return BsEmojiAstonished;
        case "bs:BsEmojiDizzyFill":
            return BsEmojiDizzyFill;
        case "bs:BsEmojiDizzy":
            return BsEmojiDizzy;
        case "bs:BsEmojiExpressionlessFill":
            return BsEmojiExpressionlessFill;
        case "bs:BsEmojiExpressionless":
            return BsEmojiExpressionless;
        case "bs:BsEmojiFrownFill":
            return BsEmojiFrownFill;
        case "bs:BsEmojiFrown":
            return BsEmojiFrown;
        case "bs:BsEmojiGrimaceFill":
            return BsEmojiGrimaceFill;
        case "bs:BsEmojiGrimace":
            return BsEmojiGrimace;
        case "bs:BsEmojiGrinFill":
            return BsEmojiGrinFill;
        case "bs:BsEmojiGrin":
            return BsEmojiGrin;
        case "bs:BsEmojiHeartEyesFill":
            return BsEmojiHeartEyesFill;
        case "bs:BsEmojiHeartEyes":
            return BsEmojiHeartEyes;
        case "bs:BsEmojiKissFill":
            return BsEmojiKissFill;
        case "bs:BsEmojiKiss":
            return BsEmojiKiss;
        case "bs:BsEmojiLaughingFill":
            return BsEmojiLaughingFill;
        case "bs:BsEmojiLaughing":
            return BsEmojiLaughing;
        case "bs:BsEmojiNeutralFill":
            return BsEmojiNeutralFill;
        case "bs:BsEmojiNeutral":
            return BsEmojiNeutral;
        case "bs:BsEmojiSmileFill":
            return BsEmojiSmileFill;
        case "bs:BsEmojiSmileUpsideDownFill":
            return BsEmojiSmileUpsideDownFill;
        case "bs:BsEmojiSmileUpsideDown":
            return BsEmojiSmileUpsideDown;
        case "bs:BsEmojiSmile":
            return BsEmojiSmile;
        case "bs:BsEmojiSunglassesFill":
            return BsEmojiSunglassesFill;
        case "bs:BsEmojiSunglasses":
            return BsEmojiSunglasses;
        case "bs:BsEmojiSurpriseFill":
            return BsEmojiSurpriseFill;
        case "bs:BsEmojiSurprise":
            return BsEmojiSurprise;
        case "bs:BsEmojiTearFill":
            return BsEmojiTearFill;
        case "bs:BsEmojiTear":
            return BsEmojiTear;
        case "bs:BsEmojiWinkFill":
            return BsEmojiWinkFill;
        case "bs:BsEmojiWink":
            return BsEmojiWink;
        case "bs:BsEnvelopeArrowDownFill":
            return BsEnvelopeArrowDownFill;
        case "bs:BsEnvelopeArrowDown":
            return BsEnvelopeArrowDown;
        case "bs:BsEnvelopeArrowUpFill":
            return BsEnvelopeArrowUpFill;
        case "bs:BsEnvelopeArrowUp":
            return BsEnvelopeArrowUp;
        case "bs:BsEnvelopeAtFill":
            return BsEnvelopeAtFill;
        case "bs:BsEnvelopeAt":
            return BsEnvelopeAt;
        case "bs:BsEnvelopeCheckFill":
            return BsEnvelopeCheckFill;
        case "bs:BsEnvelopeCheck":
            return BsEnvelopeCheck;
        case "bs:BsEnvelopeDashFill":
            return BsEnvelopeDashFill;
        case "bs:BsEnvelopeDash":
            return BsEnvelopeDash;
        case "bs:BsEnvelopeExclamationFill":
            return BsEnvelopeExclamationFill;
        case "bs:BsEnvelopeExclamation":
            return BsEnvelopeExclamation;
        case "bs:BsEnvelopeFill":
            return BsEnvelopeFill;
        case "bs:BsEnvelopeHeartFill":
            return BsEnvelopeHeartFill;
        case "bs:BsEnvelopeHeart":
            return BsEnvelopeHeart;
        case "bs:BsEnvelopeOpenFill":
            return BsEnvelopeOpenFill;
        case "bs:BsEnvelopeOpenHeartFill":
            return BsEnvelopeOpenHeartFill;
        case "bs:BsEnvelopeOpenHeart":
            return BsEnvelopeOpenHeart;
        case "bs:BsEnvelopeOpen":
            return BsEnvelopeOpen;
        case "bs:BsEnvelopePaperFill":
            return BsEnvelopePaperFill;
        case "bs:BsEnvelopePaperHeartFill":
            return BsEnvelopePaperHeartFill;
        case "bs:BsEnvelopePaperHeart":
            return BsEnvelopePaperHeart;
        case "bs:BsEnvelopePaper":
            return BsEnvelopePaper;
        case "bs:BsEnvelopePlusFill":
            return BsEnvelopePlusFill;
        case "bs:BsEnvelopePlus":
            return BsEnvelopePlus;
        case "bs:BsEnvelopeSlashFill":
            return BsEnvelopeSlashFill;
        case "bs:BsEnvelopeSlash":
            return BsEnvelopeSlash;
        case "bs:BsEnvelopeXFill":
            return BsEnvelopeXFill;
        case "bs:BsEnvelopeX":
            return BsEnvelopeX;
        case "bs:BsEnvelope":
            return BsEnvelope;
        case "bs:BsEraserFill":
            return BsEraserFill;
        case "bs:BsEraser":
            return BsEraser;
        case "bs:BsEscape":
            return BsEscape;
        case "bs:BsEthernet":
            return BsEthernet;
        case "bs:BsEvFrontFill":
            return BsEvFrontFill;
        case "bs:BsEvFront":
            return BsEvFront;
        case "bs:BsEvStationFill":
            return BsEvStationFill;
        case "bs:BsEvStation":
            return BsEvStation;
        case "bs:BsExclamationCircleFill":
            return BsExclamationCircleFill;
        case "bs:BsExclamationCircle":
            return BsExclamationCircle;
        case "bs:BsExclamationDiamondFill":
            return BsExclamationDiamondFill;
        case "bs:BsExclamationDiamond":
            return BsExclamationDiamond;
        case "bs:BsExclamationLg":
            return BsExclamationLg;
        case "bs:BsExclamationOctagonFill":
            return BsExclamationOctagonFill;
        case "bs:BsExclamationOctagon":
            return BsExclamationOctagon;
        case "bs:BsExclamationSquareFill":
            return BsExclamationSquareFill;
        case "bs:BsExclamationSquare":
            return BsExclamationSquare;
        case "bs:BsExclamationTriangleFill":
            return BsExclamationTriangleFill;
        case "bs:BsExclamationTriangle":
            return BsExclamationTriangle;
        case "bs:BsExclamation":
            return BsExclamation;
        case "bs:BsExclude":
            return BsExclude;
        case "bs:BsExplicitFill":
            return BsExplicitFill;
        case "bs:BsExplicit":
            return BsExplicit;
        case "bs:BsExposure":
            return BsExposure;
        case "bs:BsEyeFill":
            return BsEyeFill;
        case "bs:BsEyeSlashFill":
            return BsEyeSlashFill;
        case "bs:BsEyeSlash":
            return BsEyeSlash;
        case "bs:BsEye":
            return BsEye;
        case "bs:BsEyedropper":
            return BsEyedropper;
        case "bs:BsEyeglasses":
            return BsEyeglasses;
        case "bs:BsFacebook":
            return BsFacebook;
        case "bs:BsFan":
            return BsFan;
        case "bs:BsFastForwardBtnFill":
            return BsFastForwardBtnFill;
        case "bs:BsFastForwardBtn":
            return BsFastForwardBtn;
        case "bs:BsFastForwardCircleFill":
            return BsFastForwardCircleFill;
        case "bs:BsFastForwardCircle":
            return BsFastForwardCircle;
        case "bs:BsFastForwardFill":
            return BsFastForwardFill;
        case "bs:BsFastForward":
            return BsFastForward;
        case "bs:BsFeather":
            return BsFeather;
        case "bs:BsFeather2":
            return BsFeather2;
        case "bs:BsFileArrowDownFill":
            return BsFileArrowDownFill;
        case "bs:BsFileArrowDown":
            return BsFileArrowDown;
        case "bs:BsFileArrowUpFill":
            return BsFileArrowUpFill;
        case "bs:BsFileArrowUp":
            return BsFileArrowUp;
        case "bs:BsFileBarGraphFill":
            return BsFileBarGraphFill;
        case "bs:BsFileBarGraph":
            return BsFileBarGraph;
        case "bs:BsFileBinaryFill":
            return BsFileBinaryFill;
        case "bs:BsFileBinary":
            return BsFileBinary;
        case "bs:BsFileBreakFill":
            return BsFileBreakFill;
        case "bs:BsFileBreak":
            return BsFileBreak;
        case "bs:BsFileCheckFill":
            return BsFileCheckFill;
        case "bs:BsFileCheck":
            return BsFileCheck;
        case "bs:BsFileCodeFill":
            return BsFileCodeFill;
        case "bs:BsFileCode":
            return BsFileCode;
        case "bs:BsFileDiffFill":
            return BsFileDiffFill;
        case "bs:BsFileDiff":
            return BsFileDiff;
        case "bs:BsFileEarmarkArrowDownFill":
            return BsFileEarmarkArrowDownFill;
        case "bs:BsFileEarmarkArrowDown":
            return BsFileEarmarkArrowDown;
        case "bs:BsFileEarmarkArrowUpFill":
            return BsFileEarmarkArrowUpFill;
        case "bs:BsFileEarmarkArrowUp":
            return BsFileEarmarkArrowUp;
        case "bs:BsFileEarmarkBarGraphFill":
            return BsFileEarmarkBarGraphFill;
        case "bs:BsFileEarmarkBarGraph":
            return BsFileEarmarkBarGraph;
        case "bs:BsFileEarmarkBinaryFill":
            return BsFileEarmarkBinaryFill;
        case "bs:BsFileEarmarkBinary":
            return BsFileEarmarkBinary;
        case "bs:BsFileEarmarkBreakFill":
            return BsFileEarmarkBreakFill;
        case "bs:BsFileEarmarkBreak":
            return BsFileEarmarkBreak;
        case "bs:BsFileEarmarkCheckFill":
            return BsFileEarmarkCheckFill;
        case "bs:BsFileEarmarkCheck":
            return BsFileEarmarkCheck;
        case "bs:BsFileEarmarkCodeFill":
            return BsFileEarmarkCodeFill;
        case "bs:BsFileEarmarkCode":
            return BsFileEarmarkCode;
        case "bs:BsFileEarmarkDiffFill":
            return BsFileEarmarkDiffFill;
        case "bs:BsFileEarmarkDiff":
            return BsFileEarmarkDiff;
        case "bs:BsFileEarmarkEaselFill":
            return BsFileEarmarkEaselFill;
        case "bs:BsFileEarmarkEasel":
            return BsFileEarmarkEasel;
        case "bs:BsFileEarmarkExcelFill":
            return BsFileEarmarkExcelFill;
        case "bs:BsFileEarmarkExcel":
            return BsFileEarmarkExcel;
        case "bs:BsFileEarmarkFill":
            return BsFileEarmarkFill;
        case "bs:BsFileEarmarkFontFill":
            return BsFileEarmarkFontFill;
        case "bs:BsFileEarmarkFont":
            return BsFileEarmarkFont;
        case "bs:BsFileEarmarkImageFill":
            return BsFileEarmarkImageFill;
        case "bs:BsFileEarmarkImage":
            return BsFileEarmarkImage;
        case "bs:BsFileEarmarkLockFill":
            return BsFileEarmarkLockFill;
        case "bs:BsFileEarmarkLock":
            return BsFileEarmarkLock;
        case "bs:BsFileEarmarkLock2Fill":
            return BsFileEarmarkLock2Fill;
        case "bs:BsFileEarmarkLock2":
            return BsFileEarmarkLock2;
        case "bs:BsFileEarmarkMedicalFill":
            return BsFileEarmarkMedicalFill;
        case "bs:BsFileEarmarkMedical":
            return BsFileEarmarkMedical;
        case "bs:BsFileEarmarkMinusFill":
            return BsFileEarmarkMinusFill;
        case "bs:BsFileEarmarkMinus":
            return BsFileEarmarkMinus;
        case "bs:BsFileEarmarkMusicFill":
            return BsFileEarmarkMusicFill;
        case "bs:BsFileEarmarkMusic":
            return BsFileEarmarkMusic;
        case "bs:BsFileEarmarkPdfFill":
            return BsFileEarmarkPdfFill;
        case "bs:BsFileEarmarkPdf":
            return BsFileEarmarkPdf;
        case "bs:BsFileEarmarkPersonFill":
            return BsFileEarmarkPersonFill;
        case "bs:BsFileEarmarkPerson":
            return BsFileEarmarkPerson;
        case "bs:BsFileEarmarkPlayFill":
            return BsFileEarmarkPlayFill;
        case "bs:BsFileEarmarkPlay":
            return BsFileEarmarkPlay;
        case "bs:BsFileEarmarkPlusFill":
            return BsFileEarmarkPlusFill;
        case "bs:BsFileEarmarkPlus":
            return BsFileEarmarkPlus;
        case "bs:BsFileEarmarkPostFill":
            return BsFileEarmarkPostFill;
        case "bs:BsFileEarmarkPost":
            return BsFileEarmarkPost;
        case "bs:BsFileEarmarkPptFill":
            return BsFileEarmarkPptFill;
        case "bs:BsFileEarmarkPpt":
            return BsFileEarmarkPpt;
        case "bs:BsFileEarmarkRichtextFill":
            return BsFileEarmarkRichtextFill;
        case "bs:BsFileEarmarkRichtext":
            return BsFileEarmarkRichtext;
        case "bs:BsFileEarmarkRuledFill":
            return BsFileEarmarkRuledFill;
        case "bs:BsFileEarmarkRuled":
            return BsFileEarmarkRuled;
        case "bs:BsFileEarmarkSlidesFill":
            return BsFileEarmarkSlidesFill;
        case "bs:BsFileEarmarkSlides":
            return BsFileEarmarkSlides;
        case "bs:BsFileEarmarkSpreadsheetFill":
            return BsFileEarmarkSpreadsheetFill;
        case "bs:BsFileEarmarkSpreadsheet":
            return BsFileEarmarkSpreadsheet;
        case "bs:BsFileEarmarkTextFill":
            return BsFileEarmarkTextFill;
        case "bs:BsFileEarmarkText":
            return BsFileEarmarkText;
        case "bs:BsFileEarmarkWordFill":
            return BsFileEarmarkWordFill;
        case "bs:BsFileEarmarkWord":
            return BsFileEarmarkWord;
        case "bs:BsFileEarmarkXFill":
            return BsFileEarmarkXFill;
        case "bs:BsFileEarmarkX":
            return BsFileEarmarkX;
        case "bs:BsFileEarmarkZipFill":
            return BsFileEarmarkZipFill;
        case "bs:BsFileEarmarkZip":
            return BsFileEarmarkZip;
        case "bs:BsFileEarmark":
            return BsFileEarmark;
        case "bs:BsFileEaselFill":
            return BsFileEaselFill;
        case "bs:BsFileEasel":
            return BsFileEasel;
        case "bs:BsFileExcelFill":
            return BsFileExcelFill;
        case "bs:BsFileExcel":
            return BsFileExcel;
        case "bs:BsFileFill":
            return BsFileFill;
        case "bs:BsFileFontFill":
            return BsFileFontFill;
        case "bs:BsFileFont":
            return BsFileFont;
        case "bs:BsFileImageFill":
            return BsFileImageFill;
        case "bs:BsFileImage":
            return BsFileImage;
        case "bs:BsFileLockFill":
            return BsFileLockFill;
        case "bs:BsFileLock":
            return BsFileLock;
        case "bs:BsFileLock2Fill":
            return BsFileLock2Fill;
        case "bs:BsFileLock2":
            return BsFileLock2;
        case "bs:BsFileMedicalFill":
            return BsFileMedicalFill;
        case "bs:BsFileMedical":
            return BsFileMedical;
        case "bs:BsFileMinusFill":
            return BsFileMinusFill;
        case "bs:BsFileMinus":
            return BsFileMinus;
        case "bs:BsFileMusicFill":
            return BsFileMusicFill;
        case "bs:BsFileMusic":
            return BsFileMusic;
        case "bs:BsFilePdfFill":
            return BsFilePdfFill;
        case "bs:BsFilePdf":
            return BsFilePdf;
        case "bs:BsFilePersonFill":
            return BsFilePersonFill;
        case "bs:BsFilePerson":
            return BsFilePerson;
        case "bs:BsFilePlayFill":
            return BsFilePlayFill;
        case "bs:BsFilePlay":
            return BsFilePlay;
        case "bs:BsFilePlusFill":
            return BsFilePlusFill;
        case "bs:BsFilePlus":
            return BsFilePlus;
        case "bs:BsFilePostFill":
            return BsFilePostFill;
        case "bs:BsFilePost":
            return BsFilePost;
        case "bs:BsFilePptFill":
            return BsFilePptFill;
        case "bs:BsFilePpt":
            return BsFilePpt;
        case "bs:BsFileRichtextFill":
            return BsFileRichtextFill;
        case "bs:BsFileRichtext":
            return BsFileRichtext;
        case "bs:BsFileRuledFill":
            return BsFileRuledFill;
        case "bs:BsFileRuled":
            return BsFileRuled;
        case "bs:BsFileSlidesFill":
            return BsFileSlidesFill;
        case "bs:BsFileSlides":
            return BsFileSlides;
        case "bs:BsFileSpreadsheetFill":
            return BsFileSpreadsheetFill;
        case "bs:BsFileSpreadsheet":
            return BsFileSpreadsheet;
        case "bs:BsFileTextFill":
            return BsFileTextFill;
        case "bs:BsFileText":
            return BsFileText;
        case "bs:BsFileWordFill":
            return BsFileWordFill;
        case "bs:BsFileWord":
            return BsFileWord;
        case "bs:BsFileXFill":
            return BsFileXFill;
        case "bs:BsFileX":
            return BsFileX;
        case "bs:BsFileZipFill":
            return BsFileZipFill;
        case "bs:BsFileZip":
            return BsFileZip;
        case "bs:BsFile":
            return BsFile;
        case "bs:BsFilesAlt":
            return BsFilesAlt;
        case "bs:BsFiles":
            return BsFiles;
        case "bs:BsFiletypeAac":
            return BsFiletypeAac;
        case "bs:BsFiletypeAi":
            return BsFiletypeAi;
        case "bs:BsFiletypeBmp":
            return BsFiletypeBmp;
        case "bs:BsFiletypeCs":
            return BsFiletypeCs;
        case "bs:BsFiletypeCss":
            return BsFiletypeCss;
        case "bs:BsFiletypeCsv":
            return BsFiletypeCsv;
        case "bs:BsFiletypeDoc":
            return BsFiletypeDoc;
        case "bs:BsFiletypeDocx":
            return BsFiletypeDocx;
        case "bs:BsFiletypeExe":
            return BsFiletypeExe;
        case "bs:BsFiletypeGif":
            return BsFiletypeGif;
        case "bs:BsFiletypeHeic":
            return BsFiletypeHeic;
        case "bs:BsFiletypeHtml":
            return BsFiletypeHtml;
        case "bs:BsFiletypeJava":
            return BsFiletypeJava;
        case "bs:BsFiletypeJpg":
            return BsFiletypeJpg;
        case "bs:BsFiletypeJs":
            return BsFiletypeJs;
        case "bs:BsFiletypeJson":
            return BsFiletypeJson;
        case "bs:BsFiletypeJsx":
            return BsFiletypeJsx;
        case "bs:BsFiletypeKey":
            return BsFiletypeKey;
        case "bs:BsFiletypeM4P":
            return BsFiletypeM4P;
        case "bs:BsFiletypeMd":
            return BsFiletypeMd;
        case "bs:BsFiletypeMdx":
            return BsFiletypeMdx;
        case "bs:BsFiletypeMov":
            return BsFiletypeMov;
        case "bs:BsFiletypeMp3":
            return BsFiletypeMp3;
        case "bs:BsFiletypeMp4":
            return BsFiletypeMp4;
        case "bs:BsFiletypeOtf":
            return BsFiletypeOtf;
        case "bs:BsFiletypePdf":
            return BsFiletypePdf;
        case "bs:BsFiletypePhp":
            return BsFiletypePhp;
        case "bs:BsFiletypePng":
            return BsFiletypePng;
        case "bs:BsFiletypePpt":
            return BsFiletypePpt;
        case "bs:BsFiletypePptx":
            return BsFiletypePptx;
        case "bs:BsFiletypePsd":
            return BsFiletypePsd;
        case "bs:BsFiletypePy":
            return BsFiletypePy;
        case "bs:BsFiletypeRaw":
            return BsFiletypeRaw;
        case "bs:BsFiletypeRb":
            return BsFiletypeRb;
        case "bs:BsFiletypeSass":
            return BsFiletypeSass;
        case "bs:BsFiletypeScss":
            return BsFiletypeScss;
        case "bs:BsFiletypeSh":
            return BsFiletypeSh;
        case "bs:BsFiletypeSql":
            return BsFiletypeSql;
        case "bs:BsFiletypeSvg":
            return BsFiletypeSvg;
        case "bs:BsFiletypeTiff":
            return BsFiletypeTiff;
        case "bs:BsFiletypeTsx":
            return BsFiletypeTsx;
        case "bs:BsFiletypeTtf":
            return BsFiletypeTtf;
        case "bs:BsFiletypeTxt":
            return BsFiletypeTxt;
        case "bs:BsFiletypeWav":
            return BsFiletypeWav;
        case "bs:BsFiletypeWoff":
            return BsFiletypeWoff;
        case "bs:BsFiletypeXls":
            return BsFiletypeXls;
        case "bs:BsFiletypeXlsx":
            return BsFiletypeXlsx;
        case "bs:BsFiletypeXml":
            return BsFiletypeXml;
        case "bs:BsFiletypeYml":
            return BsFiletypeYml;
        case "bs:BsFilm":
            return BsFilm;
        case "bs:BsFilterCircleFill":
            return BsFilterCircleFill;
        case "bs:BsFilterCircle":
            return BsFilterCircle;
        case "bs:BsFilterLeft":
            return BsFilterLeft;
        case "bs:BsFilterRight":
            return BsFilterRight;
        case "bs:BsFilterSquareFill":
            return BsFilterSquareFill;
        case "bs:BsFilterSquare":
            return BsFilterSquare;
        case "bs:BsFilter":
            return BsFilter;
        case "bs:BsFingerprint":
            return BsFingerprint;
        case "bs:BsFire":
            return BsFire;
        case "bs:BsFlagFill":
            return BsFlagFill;
        case "bs:BsFlag":
            return BsFlag;
        case "bs:BsFloppyFill":
            return BsFloppyFill;
        case "bs:BsFloppy":
            return BsFloppy;
        case "bs:BsFloppy2Fill":
            return BsFloppy2Fill;
        case "bs:BsFloppy2":
            return BsFloppy2;
        case "bs:BsFlower1":
            return BsFlower1;
        case "bs:BsFlower2":
            return BsFlower2;
        case "bs:BsFlower3":
            return BsFlower3;
        case "bs:BsFolderCheck":
            return BsFolderCheck;
        case "bs:BsFolderFill":
            return BsFolderFill;
        case "bs:BsFolderMinus":
            return BsFolderMinus;
        case "bs:BsFolderPlus":
            return BsFolderPlus;
        case "bs:BsFolderSymlinkFill":
            return BsFolderSymlinkFill;
        case "bs:BsFolderSymlink":
            return BsFolderSymlink;
        case "bs:BsFolderX":
            return BsFolderX;
        case "bs:BsFolder":
            return BsFolder;
        case "bs:BsFolder2Open":
            return BsFolder2Open;
        case "bs:BsFolder2":
            return BsFolder2;
        case "bs:BsFonts":
            return BsFonts;
        case "bs:BsForwardFill":
            return BsForwardFill;
        case "bs:BsForward":
            return BsForward;
        case "bs:BsFront":
            return BsFront;
        case "bs:BsFuelPumpDieselFill":
            return BsFuelPumpDieselFill;
        case "bs:BsFuelPumpDiesel":
            return BsFuelPumpDiesel;
        case "bs:BsFuelPumpFill":
            return BsFuelPumpFill;
        case "bs:BsFuelPump":
            return BsFuelPump;
        case "bs:BsFullscreenExit":
            return BsFullscreenExit;
        case "bs:BsFullscreen":
            return BsFullscreen;
        case "bs:BsFunnelFill":
            return BsFunnelFill;
        case "bs:BsFunnel":
            return BsFunnel;
        case "bs:BsGearFill":
            return BsGearFill;
        case "bs:BsGearWideConnected":
            return BsGearWideConnected;
        case "bs:BsGearWide":
            return BsGearWide;
        case "bs:BsGear":
            return BsGear;
        case "bs:BsGem":
            return BsGem;
        case "bs:BsGenderAmbiguous":
            return BsGenderAmbiguous;
        case "bs:BsGenderFemale":
            return BsGenderFemale;
        case "bs:BsGenderMale":
            return BsGenderMale;
        case "bs:BsGenderNeuter":
            return BsGenderNeuter;
        case "bs:BsGenderTrans":
            return BsGenderTrans;
        case "bs:BsGeoAltFill":
            return BsGeoAltFill;
        case "bs:BsGeoAlt":
            return BsGeoAlt;
        case "bs:BsGeoFill":
            return BsGeoFill;
        case "bs:BsGeo":
            return BsGeo;
        case "bs:BsGiftFill":
            return BsGiftFill;
        case "bs:BsGift":
            return BsGift;
        case "bs:BsGit":
            return BsGit;
        case "bs:BsGithub":
            return BsGithub;
        case "bs:BsGitlab":
            return BsGitlab;
        case "bs:BsGlobeAmericas":
            return BsGlobeAmericas;
        case "bs:BsGlobeAsiaAustralia":
            return BsGlobeAsiaAustralia;
        case "bs:BsGlobeCentralSouthAsia":
            return BsGlobeCentralSouthAsia;
        case "bs:BsGlobeEuropeAfrica":
            return BsGlobeEuropeAfrica;
        case "bs:BsGlobe":
            return BsGlobe;
        case "bs:BsGlobe2":
            return BsGlobe2;
        case "bs:BsGooglePlay":
            return BsGooglePlay;
        case "bs:BsGoogle":
            return BsGoogle;
        case "bs:BsGpuCard":
            return BsGpuCard;
        case "bs:BsGraphDownArrow":
            return BsGraphDownArrow;
        case "bs:BsGraphDown":
            return BsGraphDown;
        case "bs:BsGraphUpArrow":
            return BsGraphUpArrow;
        case "bs:BsGraphUp":
            return BsGraphUp;
        case "bs:BsGrid1X2Fill":
            return BsGrid1X2Fill;
        case "bs:BsGrid1X2":
            return BsGrid1X2;
        case "bs:BsGrid3X2GapFill":
            return BsGrid3X2GapFill;
        case "bs:BsGrid3X2Gap":
            return BsGrid3X2Gap;
        case "bs:BsGrid3X2":
            return BsGrid3X2;
        case "bs:BsGrid3X3GapFill":
            return BsGrid3X3GapFill;
        case "bs:BsGrid3X3Gap":
            return BsGrid3X3Gap;
        case "bs:BsGrid3X3":
            return BsGrid3X3;
        case "bs:BsGridFill":
            return BsGridFill;
        case "bs:BsGrid":
            return BsGrid;
        case "bs:BsGripHorizontal":
            return BsGripHorizontal;
        case "bs:BsGripVertical":
            return BsGripVertical;
        case "bs:BsHCircleFill":
            return BsHCircleFill;
        case "bs:BsHCircle":
            return BsHCircle;
        case "bs:BsHSquareFill":
            return BsHSquareFill;
        case "bs:BsHSquare":
            return BsHSquare;
        case "bs:BsHammer":
            return BsHammer;
        case "bs:BsHandIndexFill":
            return BsHandIndexFill;
        case "bs:BsHandIndexThumbFill":
            return BsHandIndexThumbFill;
        case "bs:BsHandIndexThumb":
            return BsHandIndexThumb;
        case "bs:BsHandIndex":
            return BsHandIndex;
        case "bs:BsHandThumbsDownFill":
            return BsHandThumbsDownFill;
        case "bs:BsHandThumbsDown":
            return BsHandThumbsDown;
        case "bs:BsHandThumbsUpFill":
            return BsHandThumbsUpFill;
        case "bs:BsHandThumbsUp":
            return BsHandThumbsUp;
        case "bs:BsHandbagFill":
            return BsHandbagFill;
        case "bs:BsHandbag":
            return BsHandbag;
        case "bs:BsHash":
            return BsHash;
        case "bs:BsHddFill":
            return BsHddFill;
        case "bs:BsHddNetworkFill":
            return BsHddNetworkFill;
        case "bs:BsHddNetwork":
            return BsHddNetwork;
        case "bs:BsHddRackFill":
            return BsHddRackFill;
        case "bs:BsHddRack":
            return BsHddRack;
        case "bs:BsHddStackFill":
            return BsHddStackFill;
        case "bs:BsHddStack":
            return BsHddStack;
        case "bs:BsHdd":
            return BsHdd;
        case "bs:BsHdmiFill":
            return BsHdmiFill;
        case "bs:BsHdmi":
            return BsHdmi;
        case "bs:BsHeadphones":
            return BsHeadphones;
        case "bs:BsHeadsetVr":
            return BsHeadsetVr;
        case "bs:BsHeadset":
            return BsHeadset;
        case "bs:BsHeartArrow":
            return BsHeartArrow;
        case "bs:BsHeartFill":
            return BsHeartFill;
        case "bs:BsHeartHalf":
            return BsHeartHalf;
        case "bs:BsHeartPulseFill":
            return BsHeartPulseFill;
        case "bs:BsHeartPulse":
            return BsHeartPulse;
        case "bs:BsHeart":
            return BsHeart;
        case "bs:BsHeartbreakFill":
            return BsHeartbreakFill;
        case "bs:BsHeartbreak":
            return BsHeartbreak;
        case "bs:BsHearts":
            return BsHearts;
        case "bs:BsHeptagonFill":
            return BsHeptagonFill;
        case "bs:BsHeptagonHalf":
            return BsHeptagonHalf;
        case "bs:BsHeptagon":
            return BsHeptagon;
        case "bs:BsHexagonFill":
            return BsHexagonFill;
        case "bs:BsHexagonHalf":
            return BsHexagonHalf;
        case "bs:BsHexagon":
            return BsHexagon;
        case "bs:BsHighlighter":
            return BsHighlighter;
        case "bs:BsHighlights":
            return BsHighlights;
        case "bs:BsHospitalFill":
            return BsHospitalFill;
        case "bs:BsHospital":
            return BsHospital;
        case "bs:BsHourglassBottom":
            return BsHourglassBottom;
        case "bs:BsHourglassSplit":
            return BsHourglassSplit;
        case "bs:BsHourglassTop":
            return BsHourglassTop;
        case "bs:BsHourglass":
            return BsHourglass;
        case "bs:BsHouseAddFill":
            return BsHouseAddFill;
        case "bs:BsHouseAdd":
            return BsHouseAdd;
        case "bs:BsHouseCheckFill":
            return BsHouseCheckFill;
        case "bs:BsHouseCheck":
            return BsHouseCheck;
        case "bs:BsHouseDashFill":
            return BsHouseDashFill;
        case "bs:BsHouseDash":
            return BsHouseDash;
        case "bs:BsHouseDoorFill":
            return BsHouseDoorFill;
        case "bs:BsHouseDoor":
            return BsHouseDoor;
        case "bs:BsHouseDownFill":
            return BsHouseDownFill;
        case "bs:BsHouseDown":
            return BsHouseDown;
        case "bs:BsHouseExclamationFill":
            return BsHouseExclamationFill;
        case "bs:BsHouseExclamation":
            return BsHouseExclamation;
        case "bs:BsHouseFill":
            return BsHouseFill;
        case "bs:BsHouseGearFill":
            return BsHouseGearFill;
        case "bs:BsHouseGear":
            return BsHouseGear;
        case "bs:BsHouseHeartFill":
            return BsHouseHeartFill;
        case "bs:BsHouseHeart":
            return BsHouseHeart;
        case "bs:BsHouseLockFill":
            return BsHouseLockFill;
        case "bs:BsHouseLock":
            return BsHouseLock;
        case "bs:BsHouseSlashFill":
            return BsHouseSlashFill;
        case "bs:BsHouseSlash":
            return BsHouseSlash;
        case "bs:BsHouseUpFill":
            return BsHouseUpFill;
        case "bs:BsHouseUp":
            return BsHouseUp;
        case "bs:BsHouseXFill":
            return BsHouseXFill;
        case "bs:BsHouseX":
            return BsHouseX;
        case "bs:BsHouse":
            return BsHouse;
        case "bs:BsHousesFill":
            return BsHousesFill;
        case "bs:BsHouses":
            return BsHouses;
        case "bs:BsHr":
            return BsHr;
        case "bs:BsHurricane":
            return BsHurricane;
        case "bs:BsHypnotize":
            return BsHypnotize;
        case "bs:BsImageAlt":
            return BsImageAlt;
        case "bs:BsImageFill":
            return BsImageFill;
        case "bs:BsImage":
            return BsImage;
        case "bs:BsImages":
            return BsImages;
        case "bs:BsInboxFill":
            return BsInboxFill;
        case "bs:BsInbox":
            return BsInbox;
        case "bs:BsInboxesFill":
            return BsInboxesFill;
        case "bs:BsInboxes":
            return BsInboxes;
        case "bs:BsIncognito":
            return BsIncognito;
        case "bs:BsIndent":
            return BsIndent;
        case "bs:BsInfinity":
            return BsInfinity;
        case "bs:BsInfoCircleFill":
            return BsInfoCircleFill;
        case "bs:BsInfoCircle":
            return BsInfoCircle;
        case "bs:BsInfoLg":
            return BsInfoLg;
        case "bs:BsInfoSquareFill":
            return BsInfoSquareFill;
        case "bs:BsInfoSquare":
            return BsInfoSquare;
        case "bs:BsInfo":
            return BsInfo;
        case "bs:BsInputCursorText":
            return BsInputCursorText;
        case "bs:BsInputCursor":
            return BsInputCursor;
        case "bs:BsInstagram":
            return BsInstagram;
        case "bs:BsIntersect":
            return BsIntersect;
        case "bs:BsJournalAlbum":
            return BsJournalAlbum;
        case "bs:BsJournalArrowDown":
            return BsJournalArrowDown;
        case "bs:BsJournalArrowUp":
            return BsJournalArrowUp;
        case "bs:BsJournalBookmarkFill":
            return BsJournalBookmarkFill;
        case "bs:BsJournalBookmark":
            return BsJournalBookmark;
        case "bs:BsJournalCheck":
            return BsJournalCheck;
        case "bs:BsJournalCode":
            return BsJournalCode;
        case "bs:BsJournalMedical":
            return BsJournalMedical;
        case "bs:BsJournalMinus":
            return BsJournalMinus;
        case "bs:BsJournalPlus":
            return BsJournalPlus;
        case "bs:BsJournalRichtext":
            return BsJournalRichtext;
        case "bs:BsJournalText":
            return BsJournalText;
        case "bs:BsJournalX":
            return BsJournalX;
        case "bs:BsJournal":
            return BsJournal;
        case "bs:BsJournals":
            return BsJournals;
        case "bs:BsJoystick":
            return BsJoystick;
        case "bs:BsJustifyLeft":
            return BsJustifyLeft;
        case "bs:BsJustifyRight":
            return BsJustifyRight;
        case "bs:BsJustify":
            return BsJustify;
        case "bs:BsKanbanFill":
            return BsKanbanFill;
        case "bs:BsKanban":
            return BsKanban;
        case "bs:BsKeyFill":
            return BsKeyFill;
        case "bs:BsKey":
            return BsKey;
        case "bs:BsKeyboardFill":
            return BsKeyboardFill;
        case "bs:BsKeyboard":
            return BsKeyboard;
        case "bs:BsLadder":
            return BsLadder;
        case "bs:BsLampFill":
            return BsLampFill;
        case "bs:BsLamp":
            return BsLamp;
        case "bs:BsLaptopFill":
            return BsLaptopFill;
        case "bs:BsLaptop":
            return BsLaptop;
        case "bs:BsLayerBackward":
            return BsLayerBackward;
        case "bs:BsLayerForward":
            return BsLayerForward;
        case "bs:BsLayersFill":
            return BsLayersFill;
        case "bs:BsLayersHalf":
            return BsLayersHalf;
        case "bs:BsLayers":
            return BsLayers;
        case "bs:BsLayoutSidebarInsetReverse":
            return BsLayoutSidebarInsetReverse;
        case "bs:BsLayoutSidebarInset":
            return BsLayoutSidebarInset;
        case "bs:BsLayoutSidebarReverse":
            return BsLayoutSidebarReverse;
        case "bs:BsLayoutSidebar":
            return BsLayoutSidebar;
        case "bs:BsLayoutSplit":
            return BsLayoutSplit;
        case "bs:BsLayoutTextSidebarReverse":
            return BsLayoutTextSidebarReverse;
        case "bs:BsLayoutTextSidebar":
            return BsLayoutTextSidebar;
        case "bs:BsLayoutTextWindowReverse":
            return BsLayoutTextWindowReverse;
        case "bs:BsLayoutTextWindow":
            return BsLayoutTextWindow;
        case "bs:BsLayoutThreeColumns":
            return BsLayoutThreeColumns;
        case "bs:BsLayoutWtf":
            return BsLayoutWtf;
        case "bs:BsLifePreserver":
            return BsLifePreserver;
        case "bs:BsLightbulbFill":
            return BsLightbulbFill;
        case "bs:BsLightbulbOffFill":
            return BsLightbulbOffFill;
        case "bs:BsLightbulbOff":
            return BsLightbulbOff;
        case "bs:BsLightbulb":
            return BsLightbulb;
        case "bs:BsLightningChargeFill":
            return BsLightningChargeFill;
        case "bs:BsLightningCharge":
            return BsLightningCharge;
        case "bs:BsLightningFill":
            return BsLightningFill;
        case "bs:BsLightning":
            return BsLightning;
        case "bs:BsLine":
            return BsLine;
        case "bs:BsLink45Deg":
            return BsLink45Deg;
        case "bs:BsLink":
            return BsLink;
        case "bs:BsLinkedin":
            return BsLinkedin;
        case "bs:BsListCheck":
            return BsListCheck;
        case "bs:BsListColumnsReverse":
            return BsListColumnsReverse;
        case "bs:BsListColumns":
            return BsListColumns;
        case "bs:BsListNested":
            return BsListNested;
        case "bs:BsListOl":
            return BsListOl;
        case "bs:BsListStars":
            return BsListStars;
        case "bs:BsListTask":
            return BsListTask;
        case "bs:BsListUl":
            return BsListUl;
        case "bs:BsList":
            return BsList;
        case "bs:BsLockFill":
            return BsLockFill;
        case "bs:BsLock":
            return BsLock;
        case "bs:BsLuggageFill":
            return BsLuggageFill;
        case "bs:BsLuggage":
            return BsLuggage;
        case "bs:BsLungsFill":
            return BsLungsFill;
        case "bs:BsLungs":
            return BsLungs;
        case "bs:BsMagic":
            return BsMagic;
        case "bs:BsMagnetFill":
            return BsMagnetFill;
        case "bs:BsMagnet":
            return BsMagnet;
        case "bs:BsMailboxFlag":
            return BsMailboxFlag;
        case "bs:BsMailbox":
            return BsMailbox;
        case "bs:BsMailbox2Flag":
            return BsMailbox2Flag;
        case "bs:BsMailbox2":
            return BsMailbox2;
        case "bs:BsMapFill":
            return BsMapFill;
        case "bs:BsMap":
            return BsMap;
        case "bs:BsMarkdownFill":
            return BsMarkdownFill;
        case "bs:BsMarkdown":
            return BsMarkdown;
        case "bs:BsMarkerTip":
            return BsMarkerTip;
        case "bs:BsMask":
            return BsMask;
        case "bs:BsMastodon":
            return BsMastodon;
    }
}
