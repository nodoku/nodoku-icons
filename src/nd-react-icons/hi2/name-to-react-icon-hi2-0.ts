import type {IconType} from "react-icons";

import {
    HiAcademicCap,
    HiAdjustmentsHorizontal,
    HiAdjustmentsVertical,
    HiArchiveBoxArrowDown,
    HiArchiveBoxXMark,
    HiArchiveBox,
    HiArrowDownCircle,
    HiArrowDownLeft,
    HiArrowDownOnSquareStack,
    HiArrowDownOnSquare,
    HiArrowDownRight,
    HiArrowDownTray,
    HiArrowDown,
    HiArrowLeftCircle,
    HiArrowLeftEndOnRectangle,
    HiArrowLeftOnRectangle,
    HiArrowLeftStartOnRectangle,
    HiArrowLeft,
    HiArrowLongDown,
    HiArrowLongLeft,
    HiArrowLongRight,
    HiArrowLongUp,
    HiArrowPathRoundedSquare,
    HiArrowPath,
    HiArrowRightCircle,
    HiArrowRightEndOnRectangle,
    HiArrowRightOnRectangle,
    HiArrowRightStartOnRectangle,
    HiArrowRight,
    HiArrowSmallDown,
    HiArrowSmallLeft,
    HiArrowSmallRight,
    HiArrowSmallUp,
    HiArrowTopRightOnSquare,
    HiArrowTrendingDown,
    HiArrowTrendingUp,
    HiArrowTurnDownLeft,
    HiArrowTurnDownRight,
    HiArrowTurnLeftDown,
    HiArrowTurnLeftUp,
    HiArrowTurnRightDown,
    HiArrowTurnRightUp,
    HiArrowTurnUpLeft,
    HiArrowTurnUpRight,
    HiArrowUpCircle,
    HiArrowUpLeft,
    HiArrowUpOnSquareStack,
    HiArrowUpOnSquare,
    HiArrowUpRight,
    HiArrowUpTray,
    HiArrowUp,
    HiArrowUturnDown,
    HiArrowUturnLeft,
    HiArrowUturnRight,
    HiArrowUturnUp,
    HiArrowsPointingIn,
    HiArrowsPointingOut,
    HiArrowsRightLeft,
    HiArrowsUpDown,
    HiAtSymbol,
    HiBackspace,
    HiBackward,
    HiBanknotes,
    HiBars2,
    HiBars3BottomLeft,
    HiBars3BottomRight,
    HiBars3CenterLeft,
    HiBars3,
    HiBars4,
    HiBarsArrowDown,
    HiBarsArrowUp,
    HiBattery0,
    HiBattery100,
    HiBattery50,
    HiBeaker,
    HiBellAlert,
    HiBellSlash,
    HiBellSnooze,
    HiBell,
    HiBold,
    HiBoltSlash,
    HiBolt,
    HiBookOpen,
    HiBookmarkSlash,
    HiBookmarkSquare,
    HiBookmark,
    HiBriefcase,
    HiBugAnt,
    HiBuildingLibrary,
    HiBuildingOffice2,
    HiBuildingOffice,
    HiBuildingStorefront,
    HiCake,
    HiCalculator,
    HiCalendarDateRange,
    HiCalendarDays,
    HiCalendar,
    HiCamera,
    HiChartBarSquare,
    HiChartBar,
    HiChartPie,
    HiChatBubbleBottomCenterText,
    HiChatBubbleBottomCenter,
    HiChatBubbleLeftEllipsis,
    HiChatBubbleLeftRight,
    HiChatBubbleLeft,
    HiChatBubbleOvalLeftEllipsis,
    HiChatBubbleOvalLeft,
    HiCheckBadge,
    HiCheckCircle,
    HiCheck,
    HiChevronDoubleDown,
    HiChevronDoubleLeft,
    HiChevronDoubleRight,
    HiChevronDoubleUp,
    HiChevronDown,
    HiChevronLeft,
    HiChevronRight,
    HiChevronUpDown,
    HiChevronUp,
    HiCircleStack,
    HiClipboardDocumentCheck,
    HiClipboardDocumentList,
    HiClipboardDocument,
    HiClipboard,
    HiClock,
    HiCloudArrowDown,
    HiCloudArrowUp,
    HiCloud,
    HiCodeBracketSquare,
    HiCodeBracket,
    HiCog6Tooth,
    HiCog8Tooth,
    HiCog,
    HiCommandLine,
    HiComputerDesktop,
    HiCpuChip,
    HiCreditCard,
    HiCubeTransparent,
    HiCube,
    HiCurrencyBangladeshi,
    HiCurrencyDollar,
    HiCurrencyEuro,
    HiCurrencyPound,
    HiCurrencyRupee,
    HiCurrencyYen,
    HiCursorArrowRays,
    HiCursorArrowRipple,
    HiDevicePhoneMobile,
    HiDeviceTablet,
    HiDivide,
    HiDocumentArrowDown,
    HiDocumentArrowUp,
    HiDocumentChartBar,
    HiDocumentCheck,
    HiDocumentCurrencyBangladeshi,
    HiDocumentCurrencyDollar,
    HiDocumentCurrencyEuro,
    HiDocumentCurrencyPound,
    HiDocumentCurrencyRupee,
    HiDocumentCurrencyYen,
    HiDocumentDuplicate,
    HiDocumentMagnifyingGlass,
    HiDocumentMinus,
    HiDocumentPlus,
    HiDocumentText,
    HiDocument,
    HiEllipsisHorizontalCircle,
    HiEllipsisHorizontal,
    HiEllipsisVertical,
    HiEnvelopeOpen,
    HiEnvelope,
    HiEquals,
    HiExclamationCircle,
    HiExclamationTriangle,
    HiEyeDropper,
    HiEyeSlash,
    HiEye,
    HiFaceFrown,
    HiFaceSmile,
    HiFilm,
    HiFingerPrint,
    HiFire,
    HiFlag,
    HiFolderArrowDown,
    HiFolderMinus,
    HiFolderOpen,
    HiFolderPlus,
    HiFolder,
    HiForward,
    HiFunnel,
    HiGif,
    HiGiftTop,
    HiGift,
    HiGlobeAlt,
    HiGlobeAmericas,
    HiGlobeAsiaAustralia,
    HiGlobeEuropeAfrica,
    HiH1,
    HiH2,
    HiH3,
    HiHandRaised,
    HiHandThumbDown,
    HiHandThumbUp,
    HiHashtag,
    HiHeart,
    HiHomeModern,
    HiHome,
    HiIdentification,
    HiInboxArrowDown,
    HiInboxStack,
    HiInbox,
    HiInformationCircle,
    HiItalic,
    HiKey,
    HiLanguage,
    HiLifebuoy,
    HiLightBulb,
    HiLinkSlash,
    HiLink,
    HiListBullet,
    HiLockClosed,
    HiLockOpen,
    HiMagnifyingGlassCircle,
    HiMagnifyingGlassMinus,
    HiMagnifyingGlassPlus,
    HiMagnifyingGlass,
    HiMapPin,
    HiMap,
    HiMegaphone,
    HiMicrophone,
    HiMinusCircle,
    HiMinusSmall,
    HiMinus,
    HiMoon,
    HiMusicalNote,
    HiNewspaper,
    HiNoSymbol,
    HiNumberedList,
    HiPaintBrush,
    HiPaperAirplane,
    HiPaperClip,
    HiPauseCircle,
    HiPause,
    HiPencilSquare,
    HiPencil,
    HiPercentBadge,
    HiPhoneArrowDownLeft,
    HiPhoneArrowUpRight,
    HiPhoneXMark,
    HiPhone,
    HiPhoto,
    HiPlayCircle,
    HiPlayPause,
    HiPlay,
    HiPlusCircle,
    HiPlusSmall,
    HiPlus,
    HiPower,
    HiPresentationChartBar,
    HiPresentationChartLine,
    HiPrinter,
    HiPuzzlePiece,
    HiQrCode,
    HiQuestionMarkCircle,
    HiQueueList,
    HiRadio,
    HiReceiptPercent,
    HiReceiptRefund,
    HiRectangleGroup,
    HiRectangleStack,
    HiRocketLaunch,
    HiRss,
    HiScale,
    HiScissors,
    HiServerStack,
    HiServer,
    HiShare,
    HiShieldCheck,
    HiShieldExclamation,
    HiShoppingBag,
    HiShoppingCart,
    HiSignalSlash,
    HiSignal,
    HiSlash,
    HiSparkles,
    HiSpeakerWave,
    HiSpeakerXMark,
    HiSquare2Stack,
    HiSquare3Stack3D,
    HiSquares2X2,
    HiSquaresPlus,
    HiStar,
    HiStopCircle,
    HiStop,
    HiStrikethrough,
    HiSun,
    HiSwatch,
    HiTableCells,
    HiTag,
    HiTicket,
    HiTrash,
    HiTrophy,
    HiTruck,
    HiTv,
    HiUnderline,
    HiUserCircle,
    HiUserGroup,
    HiUserMinus,
    HiUserPlus,
    HiUser,
    HiUsers,
    HiVariable,
    HiVideoCameraSlash,
    HiVideoCamera,
    HiViewColumns,
    HiViewfinderCircle,
    HiWallet,
    HiWifi,
    HiWindow,
    HiWrenchScrewdriver,
    HiWrench,
    HiXCircle,
    HiXMark,
    HiOutlineAcademicCap,
    HiOutlineAdjustmentsHorizontal,
    HiOutlineAdjustmentsVertical,
    HiOutlineArchiveBoxArrowDown,
    HiOutlineArchiveBoxXMark,
    HiOutlineArchiveBox,
    HiOutlineArrowDownCircle,
    HiOutlineArrowDownLeft,
    HiOutlineArrowDownOnSquareStack,
    HiOutlineArrowDownOnSquare,
    HiOutlineArrowDownRight,
    HiOutlineArrowDownTray,
    HiOutlineArrowDown,
    HiOutlineArrowLeftCircle,
    HiOutlineArrowLeftEndOnRectangle,
    HiOutlineArrowLeftOnRectangle,
    HiOutlineArrowLeftStartOnRectangle,
    HiOutlineArrowLeft,
    HiOutlineArrowLongDown,
    HiOutlineArrowLongLeft,
    HiOutlineArrowLongRight,
    HiOutlineArrowLongUp,
    HiOutlineArrowPathRoundedSquare,
    HiOutlineArrowPath,
    HiOutlineArrowRightCircle,
    HiOutlineArrowRightEndOnRectangle,
    HiOutlineArrowRightOnRectangle,
    HiOutlineArrowRightStartOnRectangle,
    HiOutlineArrowRight,
    HiOutlineArrowSmallDown,
    HiOutlineArrowSmallLeft,
    HiOutlineArrowSmallRight,
    HiOutlineArrowSmallUp,
    HiOutlineArrowTopRightOnSquare,
    HiOutlineArrowTrendingDown,
    HiOutlineArrowTrendingUp,
    HiOutlineArrowTurnDownLeft,
    HiOutlineArrowTurnDownRight,
    HiOutlineArrowTurnLeftDown,
    HiOutlineArrowTurnLeftUp,
    HiOutlineArrowTurnRightDown,
    HiOutlineArrowTurnRightUp,
    HiOutlineArrowTurnUpLeft,
    HiOutlineArrowTurnUpRight,
    HiOutlineArrowUpCircle,
    HiOutlineArrowUpLeft,
    HiOutlineArrowUpOnSquareStack,
    HiOutlineArrowUpOnSquare,
    HiOutlineArrowUpRight,
    HiOutlineArrowUpTray,
    HiOutlineArrowUp,
    HiOutlineArrowUturnDown,
    HiOutlineArrowUturnLeft,
    HiOutlineArrowUturnRight,
    HiOutlineArrowUturnUp,
    HiOutlineArrowsPointingIn,
    HiOutlineArrowsPointingOut,
    HiOutlineArrowsRightLeft,
    HiOutlineArrowsUpDown,
    HiOutlineAtSymbol,
    HiOutlineBackspace,
    HiOutlineBackward,
    HiOutlineBanknotes,
    HiOutlineBars2,
    HiOutlineBars3BottomLeft,
    HiOutlineBars3BottomRight,
    HiOutlineBars3CenterLeft,
    HiOutlineBars3,
    HiOutlineBars4,
    HiOutlineBarsArrowDown,
    HiOutlineBarsArrowUp,
    HiOutlineBattery0,
    HiOutlineBattery100,
    HiOutlineBattery50,
    HiOutlineBeaker,
    HiOutlineBellAlert,
    HiOutlineBellSlash,
    HiOutlineBellSnooze,
    HiOutlineBell,
    HiOutlineBold,
    HiOutlineBoltSlash,
    HiOutlineBolt,
    HiOutlineBookOpen,
    HiOutlineBookmarkSlash,
    HiOutlineBookmarkSquare,
    HiOutlineBookmark,
    HiOutlineBriefcase,
    HiOutlineBugAnt,
    HiOutlineBuildingLibrary,
    HiOutlineBuildingOffice2,
    HiOutlineBuildingOffice,
    HiOutlineBuildingStorefront,
    HiOutlineCake,
    HiOutlineCalculator,
    HiOutlineCalendarDateRange,
    HiOutlineCalendarDays,
    HiOutlineCalendar,
    HiOutlineCamera,
    HiOutlineChartBarSquare,
    HiOutlineChartBar,
    HiOutlineChartPie,
    HiOutlineChatBubbleBottomCenterText,
    HiOutlineChatBubbleBottomCenter,
    HiOutlineChatBubbleLeftEllipsis,
    HiOutlineChatBubbleLeftRight,
    HiOutlineChatBubbleLeft,
    HiOutlineChatBubbleOvalLeftEllipsis,
    HiOutlineChatBubbleOvalLeft,
    HiOutlineCheckBadge,
    HiOutlineCheckCircle,
    HiOutlineCheck,
    HiOutlineChevronDoubleDown,
    HiOutlineChevronDoubleLeft,
    HiOutlineChevronDoubleRight,
    HiOutlineChevronDoubleUp,
    HiOutlineChevronDown,
    HiOutlineChevronLeft,
    HiOutlineChevronRight,
    HiOutlineChevronUpDown,
    HiOutlineChevronUp,
    HiOutlineCircleStack,
    HiOutlineClipboardDocumentCheck,
    HiOutlineClipboardDocumentList,
    HiOutlineClipboardDocument,
    HiOutlineClipboard,
    HiOutlineClock,
    HiOutlineCloudArrowDown,
    HiOutlineCloudArrowUp,
    HiOutlineCloud,
    HiOutlineCodeBracketSquare,
    HiOutlineCodeBracket,
    HiOutlineCog6Tooth,
    HiOutlineCog8Tooth,
    HiOutlineCog,
    HiOutlineCommandLine,
    HiOutlineComputerDesktop,
    HiOutlineCpuChip,
    HiOutlineCreditCard,
    HiOutlineCubeTransparent,
    HiOutlineCube,
    HiOutlineCurrencyBangladeshi,
    HiOutlineCurrencyDollar,
    HiOutlineCurrencyEuro,
    HiOutlineCurrencyPound,
    HiOutlineCurrencyRupee,
    HiOutlineCurrencyYen,
    HiOutlineCursorArrowRays,
    HiOutlineCursorArrowRipple,
    HiOutlineDevicePhoneMobile,
    HiOutlineDeviceTablet,
    HiOutlineDivide,
    HiOutlineDocumentArrowDown,
    HiOutlineDocumentArrowUp,
    HiOutlineDocumentChartBar,
    HiOutlineDocumentCheck,
    HiOutlineDocumentCurrencyBangladeshi,
    HiOutlineDocumentCurrencyDollar,
    HiOutlineDocumentCurrencyEuro,
    HiOutlineDocumentCurrencyPound,
    HiOutlineDocumentCurrencyRupee,
    HiOutlineDocumentCurrencyYen,
    HiOutlineDocumentDuplicate,
    HiOutlineDocumentMagnifyingGlass,
    HiOutlineDocumentMinus,
    HiOutlineDocumentPlus,
    HiOutlineDocumentText,
    HiOutlineDocument,
    HiOutlineEllipsisHorizontalCircle,
    HiOutlineEllipsisHorizontal,
    HiOutlineEllipsisVertical,
    HiOutlineEnvelopeOpen,
    HiOutlineEnvelope,
    HiOutlineEquals,
    HiOutlineExclamationCircle,
    HiOutlineExclamationTriangle,
    HiOutlineEyeDropper,
    HiOutlineEyeSlash,
    HiOutlineEye,
    HiOutlineFaceFrown,
    HiOutlineFaceSmile,
    HiOutlineFilm,
    HiOutlineFingerPrint,
    HiOutlineFire,
    HiOutlineFlag,
    HiOutlineFolderArrowDown,
    HiOutlineFolderMinus,
    HiOutlineFolderOpen,
    HiOutlineFolderPlus,
    HiOutlineFolder,
    HiOutlineForward,
    HiOutlineFunnel,
    HiOutlineGif,
    HiOutlineGiftTop,
    HiOutlineGift,
    HiOutlineGlobeAlt,
    HiOutlineGlobeAmericas,
    HiOutlineGlobeAsiaAustralia,
    HiOutlineGlobeEuropeAfrica,
    HiOutlineH1,
    HiOutlineH2,
    HiOutlineH3,
    HiOutlineHandRaised,
    HiOutlineHandThumbDown,
    HiOutlineHandThumbUp,
    HiOutlineHashtag,
    HiOutlineHeart,
    HiOutlineHomeModern,
    HiOutlineHome,
    HiOutlineIdentification,
    HiOutlineInboxArrowDown,
    HiOutlineInboxStack,
    HiOutlineInbox,
    HiOutlineInformationCircle,
    HiOutlineItalic,
    HiOutlineKey,
    HiOutlineLanguage,
    HiOutlineLifebuoy,
    HiOutlineLightBulb,
    HiOutlineLinkSlash,
    HiOutlineLink,
    HiOutlineListBullet,
    HiOutlineLockClosed,
    HiOutlineLockOpen,
    HiOutlineMagnifyingGlassCircle,
    HiOutlineMagnifyingGlassMinus,
    HiOutlineMagnifyingGlassPlus,
    HiOutlineMagnifyingGlass,
    HiOutlineMapPin,
    HiOutlineMap,
    HiOutlineMegaphone,
    HiOutlineMicrophone,
    HiOutlineMinusCircle,
    HiOutlineMinusSmall,
    HiOutlineMinus,
    HiOutlineMoon,
    HiOutlineMusicalNote,
    HiOutlineNewspaper,
    HiOutlineNoSymbol,
    HiOutlineNumberedList,
    HiOutlinePaintBrush,
    HiOutlinePaperAirplane,
    HiOutlinePaperClip,
    HiOutlinePauseCircle,
    HiOutlinePause,
    HiOutlinePencilSquare,
    HiOutlinePencil,
    HiOutlinePercentBadge,
    HiOutlinePhoneArrowDownLeft,
    HiOutlinePhoneArrowUpRight,
    HiOutlinePhoneXMark,
    HiOutlinePhone,
    HiOutlinePhoto,
    HiOutlinePlayCircle,
    HiOutlinePlayPause,
    HiOutlinePlay,
    HiOutlinePlusCircle,
    HiOutlinePlusSmall,
    HiOutlinePlus,
    HiOutlinePower,
    HiOutlinePresentationChartBar,
    HiOutlinePresentationChartLine,
    HiOutlinePrinter,
    HiOutlinePuzzlePiece,
    HiOutlineQrCode,
    HiOutlineQuestionMarkCircle,
    HiOutlineQueueList,
    HiOutlineRadio,
    HiOutlineReceiptPercent,
    HiOutlineReceiptRefund,
    HiOutlineRectangleGroup,
    HiOutlineRectangleStack,
    HiOutlineRocketLaunch,
    HiOutlineRss,
    HiOutlineScale,
    HiOutlineScissors,
    HiOutlineServerStack,
    HiOutlineServer,
    HiOutlineShare,
    HiOutlineShieldCheck,
    HiOutlineShieldExclamation,
    HiOutlineShoppingBag,
    HiOutlineShoppingCart,
    HiOutlineSignalSlash,
    HiOutlineSignal,
    HiOutlineSlash,
    HiOutlineSparkles,
    HiOutlineSpeakerWave,
    HiOutlineSpeakerXMark,
    HiOutlineSquare2Stack,
    HiOutlineSquare3Stack3D,
    HiOutlineSquares2X2,
    HiOutlineSquaresPlus,
    HiOutlineStar,
    HiOutlineStopCircle,
    HiOutlineStop,
    HiOutlineStrikethrough,
    HiOutlineSun,
    HiOutlineSwatch,
    HiOutlineTableCells,
    HiOutlineTag,
    HiOutlineTicket,
    HiOutlineTrash,
    HiOutlineTrophy,
    HiOutlineTruck,
    HiOutlineTv,
    HiOutlineUnderline,
    HiOutlineUserCircle,
    HiOutlineUserGroup,
    HiOutlineUserMinus,
    HiOutlineUserPlus,
    HiOutlineUser,
    HiOutlineUsers,
    HiOutlineVariable,
    HiOutlineVideoCameraSlash,
    HiOutlineVideoCamera,
    HiOutlineViewColumns,
    HiOutlineViewfinderCircle,
    HiOutlineWallet,
    HiOutlineWifi,
    HiOutlineWindow,
    HiOutlineWrenchScrewdriver,
    HiOutlineWrench,
    HiOutlineXCircle,
    HiOutlineXMark,
    HiMiniAcademicCap,
    HiMiniAdjustmentsHorizontal,
    HiMiniAdjustmentsVertical,
    HiMiniArchiveBoxArrowDown,
    HiMiniArchiveBoxXMark,
    HiMiniArchiveBox,
    HiMiniArrowDownCircle,
    HiMiniArrowDownLeft,
    HiMiniArrowDownOnSquareStack,
    HiMiniArrowDownOnSquare,
    HiMiniArrowDownRight,
    HiMiniArrowDownTray,
    HiMiniArrowDown,
    HiMiniArrowLeftCircle,
    HiMiniArrowLeftEndOnRectangle,
    HiMiniArrowLeftOnRectangle,
    HiMiniArrowLeftStartOnRectangle,
    HiMiniArrowLeft,
    HiMiniArrowLongDown,
    HiMiniArrowLongLeft,
    HiMiniArrowLongRight,
    HiMiniArrowLongUp,
    HiMiniArrowPathRoundedSquare,
    HiMiniArrowPath,
    HiMiniArrowRightCircle,
    HiMiniArrowRightEndOnRectangle,
    HiMiniArrowRightOnRectangle,
    HiMiniArrowRightStartOnRectangle,
    HiMiniArrowRight,
    HiMiniArrowSmallDown,
    HiMiniArrowSmallLeft,
    HiMiniArrowSmallRight,
    HiMiniArrowSmallUp,
    HiMiniArrowTopRightOnSquare,
    HiMiniArrowTrendingDown,
    HiMiniArrowTrendingUp,
    HiMiniArrowTurnDownLeft,
    HiMiniArrowTurnDownRight,
    HiMiniArrowTurnLeftDown,
    HiMiniArrowTurnLeftUp,
    HiMiniArrowTurnRightDown,
    HiMiniArrowTurnRightUp,
    HiMiniArrowTurnUpLeft,
    HiMiniArrowTurnUpRight,
    HiMiniArrowUpCircle,
    HiMiniArrowUpLeft,
    HiMiniArrowUpOnSquareStack,
    HiMiniArrowUpOnSquare,
    HiMiniArrowUpRight,
    HiMiniArrowUpTray,
    HiMiniArrowUp,
    HiMiniArrowUturnDown,
    HiMiniArrowUturnLeft,
    HiMiniArrowUturnRight,
    HiMiniArrowUturnUp,
    HiMiniArrowsPointingIn,
    HiMiniArrowsPointingOut,
    HiMiniArrowsRightLeft,
    HiMiniArrowsUpDown,
    HiMiniAtSymbol,
    HiMiniBackspace,
    HiMiniBackward,
    HiMiniBanknotes,
    HiMiniBars2,
    HiMiniBars3BottomLeft,
    HiMiniBars3BottomRight,
    HiMiniBars3CenterLeft,
    HiMiniBars3,
    HiMiniBars4,
    HiMiniBarsArrowDown,
    HiMiniBarsArrowUp,
    HiMiniBattery0,
    HiMiniBattery100,
    HiMiniBattery50,
    HiMiniBeaker,
    HiMiniBellAlert,
    HiMiniBellSlash,
    HiMiniBellSnooze,
    HiMiniBell,
    HiMiniBold,
    HiMiniBoltSlash,
    HiMiniBolt,
    HiMiniBookOpen,
    HiMiniBookmarkSlash,
    HiMiniBookmarkSquare,
    HiMiniBookmark,
    HiMiniBriefcase,
    HiMiniBugAnt,
    HiMiniBuildingLibrary,
    HiMiniBuildingOffice2,
    HiMiniBuildingOffice,
    HiMiniBuildingStorefront,
    HiMiniCake,
    HiMiniCalculator,
    HiMiniCalendarDateRange,
    HiMiniCalendarDays,
    HiMiniCalendar,
    HiMiniCamera,
    HiMiniChartBarSquare,
    HiMiniChartBar,
    HiMiniChartPie,
    HiMiniChatBubbleBottomCenterText,
    HiMiniChatBubbleBottomCenter,
    HiMiniChatBubbleLeftEllipsis,
    HiMiniChatBubbleLeftRight,
    HiMiniChatBubbleLeft,
    HiMiniChatBubbleOvalLeftEllipsis,
    HiMiniChatBubbleOvalLeft,
    HiMiniCheckBadge,
    HiMiniCheckCircle,
    HiMiniCheck,
    HiMiniChevronDoubleDown,
    HiMiniChevronDoubleLeft,
    HiMiniChevronDoubleRight,
    HiMiniChevronDoubleUp,
    HiMiniChevronDown,
    HiMiniChevronLeft,
    HiMiniChevronRight,
    HiMiniChevronUpDown,
    HiMiniChevronUp,
    HiMiniCircleStack,
    HiMiniClipboardDocumentCheck,
    HiMiniClipboardDocumentList,
    HiMiniClipboardDocument,
    HiMiniClipboard,
    HiMiniClock,
    HiMiniCloudArrowDown,
    HiMiniCloudArrowUp,
    HiMiniCloud,
    HiMiniCodeBracketSquare,
    HiMiniCodeBracket,
    HiMiniCog6Tooth,
    HiMiniCog8Tooth,
    HiMiniCog,
    HiMiniCommandLine,
    HiMiniComputerDesktop,
    HiMiniCpuChip,
    HiMiniCreditCard,
    HiMiniCubeTransparent,
    HiMiniCube,
    HiMiniCurrencyBangladeshi,
    HiMiniCurrencyDollar,
    HiMiniCurrencyEuro,
    HiMiniCurrencyPound,
    HiMiniCurrencyRupee,
    HiMiniCurrencyYen,
    HiMiniCursorArrowRays,
    HiMiniCursorArrowRipple,
    HiMiniDevicePhoneMobile,
    HiMiniDeviceTablet,
    HiMiniDivide,
    HiMiniDocumentArrowDown,
    HiMiniDocumentArrowUp,
    HiMiniDocumentChartBar,
    HiMiniDocumentCheck,
    HiMiniDocumentCurrencyBangladeshi,
    HiMiniDocumentCurrencyDollar,
    HiMiniDocumentCurrencyEuro,
    HiMiniDocumentCurrencyPound,
    HiMiniDocumentCurrencyRupee,
    HiMiniDocumentCurrencyYen,
    HiMiniDocumentDuplicate,
    HiMiniDocumentMagnifyingGlass,
    HiMiniDocumentMinus,
    HiMiniDocumentPlus,
    HiMiniDocumentText,
    HiMiniDocument,
    HiMiniEllipsisHorizontalCircle,
    HiMiniEllipsisHorizontal,
    HiMiniEllipsisVertical,
    HiMiniEnvelopeOpen,
    HiMiniEnvelope,
    HiMiniEquals,
    HiMiniExclamationCircle,
    HiMiniExclamationTriangle,
    HiMiniEyeDropper,
    HiMiniEyeSlash,
    HiMiniEye,
    HiMiniFaceFrown,
    HiMiniFaceSmile,
    HiMiniFilm,
    HiMiniFingerPrint,
    HiMiniFire,
    HiMiniFlag,
    HiMiniFolderArrowDown,
    HiMiniFolderMinus,
    HiMiniFolderOpen,
    HiMiniFolderPlus,
    HiMiniFolder,
    HiMiniForward,
    HiMiniFunnel,
    HiMiniGif,
    HiMiniGiftTop,
    HiMiniGift,
    HiMiniGlobeAlt,
    HiMiniGlobeAmericas,
    HiMiniGlobeAsiaAustralia,
    HiMiniGlobeEuropeAfrica,
    HiMiniH1,
    HiMiniH2,
    HiMiniH3,
    HiMiniHandRaised,
    HiMiniHandThumbDown,
    HiMiniHandThumbUp,
    HiMiniHashtag,
    HiMiniHeart,
    HiMiniHomeModern,
    HiMiniHome,
    HiMiniIdentification,
    HiMiniInboxArrowDown,
    HiMiniInboxStack,
    HiMiniInbox,
    HiMiniInformationCircle,
    HiMiniItalic,
    HiMiniKey,
    HiMiniLanguage,
    HiMiniLifebuoy,
    HiMiniLightBulb,
    HiMiniLinkSlash,
    HiMiniLink,
    HiMiniListBullet,
    HiMiniLockClosed,
    HiMiniLockOpen,
    HiMiniMagnifyingGlassCircle,
    HiMiniMagnifyingGlassMinus,
    HiMiniMagnifyingGlassPlus,
    HiMiniMagnifyingGlass,
    HiMiniMapPin,
    HiMiniMap,
    HiMiniMegaphone,
    HiMiniMicrophone,
    HiMiniMinusCircle,
    HiMiniMinusSmall,
    HiMiniMinus,
    HiMiniMoon,
    HiMiniMusicalNote,
    HiMiniNewspaper,
    HiMiniNoSymbol,
    HiMiniNumberedList,
    HiMiniPaintBrush,
    HiMiniPaperAirplane,
    HiMiniPaperClip,
    HiMiniPauseCircle,
    HiMiniPause,
    HiMiniPencilSquare,
    HiMiniPencil,
    HiMiniPercentBadge,
    HiMiniPhoneArrowDownLeft,
    HiMiniPhoneArrowUpRight,
    HiMiniPhoneXMark,
    HiMiniPhone,
    HiMiniPhoto,
    HiMiniPlayCircle,
    HiMiniPlayPause,
    HiMiniPlay,
    HiMiniPlusCircle,
    HiMiniPlusSmall,
    HiMiniPlus,
    HiMiniPower,
    HiMiniPresentationChartBar,
    HiMiniPresentationChartLine,
    HiMiniPrinter,
    HiMiniPuzzlePiece,
    HiMiniQrCode,
    HiMiniQuestionMarkCircle,
    HiMiniQueueList,
    HiMiniRadio,
    HiMiniReceiptPercent,
    HiMiniReceiptRefund,
    HiMiniRectangleGroup,
    HiMiniRectangleStack,
    HiMiniRocketLaunch,
    HiMiniRss,
    HiMiniScale,
    HiMiniScissors,
    HiMiniServerStack,
    HiMiniServer,
    HiMiniShare,
    HiMiniShieldCheck,
    HiMiniShieldExclamation,
    HiMiniShoppingBag,
    HiMiniShoppingCart,
    HiMiniSignalSlash,
    HiMiniSignal,
    HiMiniSlash,
    HiMiniSparkles,
    HiMiniSpeakerWave,
    HiMiniSpeakerXMark,
    HiMiniSquare2Stack,
    HiMiniSquare3Stack3D,
    HiMiniSquares2X2,
    HiMiniSquaresPlus,
    HiMiniStar,
    HiMiniStopCircle,
    HiMiniStop,
    HiMiniStrikethrough,
    HiMiniSun,
    HiMiniSwatch,
    HiMiniTableCells,
    HiMiniTag,
    HiMiniTicket,
    HiMiniTrash,
    HiMiniTrophy,
    HiMiniTruck,
    HiMiniTv,
    HiMiniUnderline,
    HiMiniUserCircle,
    HiMiniUserGroup,
    HiMiniUserMinus,
    HiMiniUserPlus,
    HiMiniUser,
    HiMiniUsers,
    HiMiniVariable,
    HiMiniVideoCameraSlash,
    HiMiniVideoCamera,
    HiMiniViewColumns,
    HiMiniViewfinderCircle,
    HiMiniWallet,
    HiMiniWifi,
    HiMiniWindow,
    HiMiniWrenchScrewdriver,
    HiMiniWrench,
    HiMiniXCircle,
    HiMiniXMark,
} from "react-icons/hi2"

export function nameToReactIcon_hi2_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "hi2:HiAcademicCap":
            return HiAcademicCap;
        case "hi2:HiAdjustmentsHorizontal":
            return HiAdjustmentsHorizontal;
        case "hi2:HiAdjustmentsVertical":
            return HiAdjustmentsVertical;
        case "hi2:HiArchiveBoxArrowDown":
            return HiArchiveBoxArrowDown;
        case "hi2:HiArchiveBoxXMark":
            return HiArchiveBoxXMark;
        case "hi2:HiArchiveBox":
            return HiArchiveBox;
        case "hi2:HiArrowDownCircle":
            return HiArrowDownCircle;
        case "hi2:HiArrowDownLeft":
            return HiArrowDownLeft;
        case "hi2:HiArrowDownOnSquareStack":
            return HiArrowDownOnSquareStack;
        case "hi2:HiArrowDownOnSquare":
            return HiArrowDownOnSquare;
        case "hi2:HiArrowDownRight":
            return HiArrowDownRight;
        case "hi2:HiArrowDownTray":
            return HiArrowDownTray;
        case "hi2:HiArrowDown":
            return HiArrowDown;
        case "hi2:HiArrowLeftCircle":
            return HiArrowLeftCircle;
        case "hi2:HiArrowLeftEndOnRectangle":
            return HiArrowLeftEndOnRectangle;
        case "hi2:HiArrowLeftOnRectangle":
            return HiArrowLeftOnRectangle;
        case "hi2:HiArrowLeftStartOnRectangle":
            return HiArrowLeftStartOnRectangle;
        case "hi2:HiArrowLeft":
            return HiArrowLeft;
        case "hi2:HiArrowLongDown":
            return HiArrowLongDown;
        case "hi2:HiArrowLongLeft":
            return HiArrowLongLeft;
        case "hi2:HiArrowLongRight":
            return HiArrowLongRight;
        case "hi2:HiArrowLongUp":
            return HiArrowLongUp;
        case "hi2:HiArrowPathRoundedSquare":
            return HiArrowPathRoundedSquare;
        case "hi2:HiArrowPath":
            return HiArrowPath;
        case "hi2:HiArrowRightCircle":
            return HiArrowRightCircle;
        case "hi2:HiArrowRightEndOnRectangle":
            return HiArrowRightEndOnRectangle;
        case "hi2:HiArrowRightOnRectangle":
            return HiArrowRightOnRectangle;
        case "hi2:HiArrowRightStartOnRectangle":
            return HiArrowRightStartOnRectangle;
        case "hi2:HiArrowRight":
            return HiArrowRight;
        case "hi2:HiArrowSmallDown":
            return HiArrowSmallDown;
        case "hi2:HiArrowSmallLeft":
            return HiArrowSmallLeft;
        case "hi2:HiArrowSmallRight":
            return HiArrowSmallRight;
        case "hi2:HiArrowSmallUp":
            return HiArrowSmallUp;
        case "hi2:HiArrowTopRightOnSquare":
            return HiArrowTopRightOnSquare;
        case "hi2:HiArrowTrendingDown":
            return HiArrowTrendingDown;
        case "hi2:HiArrowTrendingUp":
            return HiArrowTrendingUp;
        case "hi2:HiArrowTurnDownLeft":
            return HiArrowTurnDownLeft;
        case "hi2:HiArrowTurnDownRight":
            return HiArrowTurnDownRight;
        case "hi2:HiArrowTurnLeftDown":
            return HiArrowTurnLeftDown;
        case "hi2:HiArrowTurnLeftUp":
            return HiArrowTurnLeftUp;
        case "hi2:HiArrowTurnRightDown":
            return HiArrowTurnRightDown;
        case "hi2:HiArrowTurnRightUp":
            return HiArrowTurnRightUp;
        case "hi2:HiArrowTurnUpLeft":
            return HiArrowTurnUpLeft;
        case "hi2:HiArrowTurnUpRight":
            return HiArrowTurnUpRight;
        case "hi2:HiArrowUpCircle":
            return HiArrowUpCircle;
        case "hi2:HiArrowUpLeft":
            return HiArrowUpLeft;
        case "hi2:HiArrowUpOnSquareStack":
            return HiArrowUpOnSquareStack;
        case "hi2:HiArrowUpOnSquare":
            return HiArrowUpOnSquare;
        case "hi2:HiArrowUpRight":
            return HiArrowUpRight;
        case "hi2:HiArrowUpTray":
            return HiArrowUpTray;
        case "hi2:HiArrowUp":
            return HiArrowUp;
        case "hi2:HiArrowUturnDown":
            return HiArrowUturnDown;
        case "hi2:HiArrowUturnLeft":
            return HiArrowUturnLeft;
        case "hi2:HiArrowUturnRight":
            return HiArrowUturnRight;
        case "hi2:HiArrowUturnUp":
            return HiArrowUturnUp;
        case "hi2:HiArrowsPointingIn":
            return HiArrowsPointingIn;
        case "hi2:HiArrowsPointingOut":
            return HiArrowsPointingOut;
        case "hi2:HiArrowsRightLeft":
            return HiArrowsRightLeft;
        case "hi2:HiArrowsUpDown":
            return HiArrowsUpDown;
        case "hi2:HiAtSymbol":
            return HiAtSymbol;
        case "hi2:HiBackspace":
            return HiBackspace;
        case "hi2:HiBackward":
            return HiBackward;
        case "hi2:HiBanknotes":
            return HiBanknotes;
        case "hi2:HiBars2":
            return HiBars2;
        case "hi2:HiBars3BottomLeft":
            return HiBars3BottomLeft;
        case "hi2:HiBars3BottomRight":
            return HiBars3BottomRight;
        case "hi2:HiBars3CenterLeft":
            return HiBars3CenterLeft;
        case "hi2:HiBars3":
            return HiBars3;
        case "hi2:HiBars4":
            return HiBars4;
        case "hi2:HiBarsArrowDown":
            return HiBarsArrowDown;
        case "hi2:HiBarsArrowUp":
            return HiBarsArrowUp;
        case "hi2:HiBattery0":
            return HiBattery0;
        case "hi2:HiBattery100":
            return HiBattery100;
        case "hi2:HiBattery50":
            return HiBattery50;
        case "hi2:HiBeaker":
            return HiBeaker;
        case "hi2:HiBellAlert":
            return HiBellAlert;
        case "hi2:HiBellSlash":
            return HiBellSlash;
        case "hi2:HiBellSnooze":
            return HiBellSnooze;
        case "hi2:HiBell":
            return HiBell;
        case "hi2:HiBold":
            return HiBold;
        case "hi2:HiBoltSlash":
            return HiBoltSlash;
        case "hi2:HiBolt":
            return HiBolt;
        case "hi2:HiBookOpen":
            return HiBookOpen;
        case "hi2:HiBookmarkSlash":
            return HiBookmarkSlash;
        case "hi2:HiBookmarkSquare":
            return HiBookmarkSquare;
        case "hi2:HiBookmark":
            return HiBookmark;
        case "hi2:HiBriefcase":
            return HiBriefcase;
        case "hi2:HiBugAnt":
            return HiBugAnt;
        case "hi2:HiBuildingLibrary":
            return HiBuildingLibrary;
        case "hi2:HiBuildingOffice2":
            return HiBuildingOffice2;
        case "hi2:HiBuildingOffice":
            return HiBuildingOffice;
        case "hi2:HiBuildingStorefront":
            return HiBuildingStorefront;
        case "hi2:HiCake":
            return HiCake;
        case "hi2:HiCalculator":
            return HiCalculator;
        case "hi2:HiCalendarDateRange":
            return HiCalendarDateRange;
        case "hi2:HiCalendarDays":
            return HiCalendarDays;
        case "hi2:HiCalendar":
            return HiCalendar;
        case "hi2:HiCamera":
            return HiCamera;
        case "hi2:HiChartBarSquare":
            return HiChartBarSquare;
        case "hi2:HiChartBar":
            return HiChartBar;
        case "hi2:HiChartPie":
            return HiChartPie;
        case "hi2:HiChatBubbleBottomCenterText":
            return HiChatBubbleBottomCenterText;
        case "hi2:HiChatBubbleBottomCenter":
            return HiChatBubbleBottomCenter;
        case "hi2:HiChatBubbleLeftEllipsis":
            return HiChatBubbleLeftEllipsis;
        case "hi2:HiChatBubbleLeftRight":
            return HiChatBubbleLeftRight;
        case "hi2:HiChatBubbleLeft":
            return HiChatBubbleLeft;
        case "hi2:HiChatBubbleOvalLeftEllipsis":
            return HiChatBubbleOvalLeftEllipsis;
        case "hi2:HiChatBubbleOvalLeft":
            return HiChatBubbleOvalLeft;
        case "hi2:HiCheckBadge":
            return HiCheckBadge;
        case "hi2:HiCheckCircle":
            return HiCheckCircle;
        case "hi2:HiCheck":
            return HiCheck;
        case "hi2:HiChevronDoubleDown":
            return HiChevronDoubleDown;
        case "hi2:HiChevronDoubleLeft":
            return HiChevronDoubleLeft;
        case "hi2:HiChevronDoubleRight":
            return HiChevronDoubleRight;
        case "hi2:HiChevronDoubleUp":
            return HiChevronDoubleUp;
        case "hi2:HiChevronDown":
            return HiChevronDown;
        case "hi2:HiChevronLeft":
            return HiChevronLeft;
        case "hi2:HiChevronRight":
            return HiChevronRight;
        case "hi2:HiChevronUpDown":
            return HiChevronUpDown;
        case "hi2:HiChevronUp":
            return HiChevronUp;
        case "hi2:HiCircleStack":
            return HiCircleStack;
        case "hi2:HiClipboardDocumentCheck":
            return HiClipboardDocumentCheck;
        case "hi2:HiClipboardDocumentList":
            return HiClipboardDocumentList;
        case "hi2:HiClipboardDocument":
            return HiClipboardDocument;
        case "hi2:HiClipboard":
            return HiClipboard;
        case "hi2:HiClock":
            return HiClock;
        case "hi2:HiCloudArrowDown":
            return HiCloudArrowDown;
        case "hi2:HiCloudArrowUp":
            return HiCloudArrowUp;
        case "hi2:HiCloud":
            return HiCloud;
        case "hi2:HiCodeBracketSquare":
            return HiCodeBracketSquare;
        case "hi2:HiCodeBracket":
            return HiCodeBracket;
        case "hi2:HiCog6Tooth":
            return HiCog6Tooth;
        case "hi2:HiCog8Tooth":
            return HiCog8Tooth;
        case "hi2:HiCog":
            return HiCog;
        case "hi2:HiCommandLine":
            return HiCommandLine;
        case "hi2:HiComputerDesktop":
            return HiComputerDesktop;
        case "hi2:HiCpuChip":
            return HiCpuChip;
        case "hi2:HiCreditCard":
            return HiCreditCard;
        case "hi2:HiCubeTransparent":
            return HiCubeTransparent;
        case "hi2:HiCube":
            return HiCube;
        case "hi2:HiCurrencyBangladeshi":
            return HiCurrencyBangladeshi;
        case "hi2:HiCurrencyDollar":
            return HiCurrencyDollar;
        case "hi2:HiCurrencyEuro":
            return HiCurrencyEuro;
        case "hi2:HiCurrencyPound":
            return HiCurrencyPound;
        case "hi2:HiCurrencyRupee":
            return HiCurrencyRupee;
        case "hi2:HiCurrencyYen":
            return HiCurrencyYen;
        case "hi2:HiCursorArrowRays":
            return HiCursorArrowRays;
        case "hi2:HiCursorArrowRipple":
            return HiCursorArrowRipple;
        case "hi2:HiDevicePhoneMobile":
            return HiDevicePhoneMobile;
        case "hi2:HiDeviceTablet":
            return HiDeviceTablet;
        case "hi2:HiDivide":
            return HiDivide;
        case "hi2:HiDocumentArrowDown":
            return HiDocumentArrowDown;
        case "hi2:HiDocumentArrowUp":
            return HiDocumentArrowUp;
        case "hi2:HiDocumentChartBar":
            return HiDocumentChartBar;
        case "hi2:HiDocumentCheck":
            return HiDocumentCheck;
        case "hi2:HiDocumentCurrencyBangladeshi":
            return HiDocumentCurrencyBangladeshi;
        case "hi2:HiDocumentCurrencyDollar":
            return HiDocumentCurrencyDollar;
        case "hi2:HiDocumentCurrencyEuro":
            return HiDocumentCurrencyEuro;
        case "hi2:HiDocumentCurrencyPound":
            return HiDocumentCurrencyPound;
        case "hi2:HiDocumentCurrencyRupee":
            return HiDocumentCurrencyRupee;
        case "hi2:HiDocumentCurrencyYen":
            return HiDocumentCurrencyYen;
        case "hi2:HiDocumentDuplicate":
            return HiDocumentDuplicate;
        case "hi2:HiDocumentMagnifyingGlass":
            return HiDocumentMagnifyingGlass;
        case "hi2:HiDocumentMinus":
            return HiDocumentMinus;
        case "hi2:HiDocumentPlus":
            return HiDocumentPlus;
        case "hi2:HiDocumentText":
            return HiDocumentText;
        case "hi2:HiDocument":
            return HiDocument;
        case "hi2:HiEllipsisHorizontalCircle":
            return HiEllipsisHorizontalCircle;
        case "hi2:HiEllipsisHorizontal":
            return HiEllipsisHorizontal;
        case "hi2:HiEllipsisVertical":
            return HiEllipsisVertical;
        case "hi2:HiEnvelopeOpen":
            return HiEnvelopeOpen;
        case "hi2:HiEnvelope":
            return HiEnvelope;
        case "hi2:HiEquals":
            return HiEquals;
        case "hi2:HiExclamationCircle":
            return HiExclamationCircle;
        case "hi2:HiExclamationTriangle":
            return HiExclamationTriangle;
        case "hi2:HiEyeDropper":
            return HiEyeDropper;
        case "hi2:HiEyeSlash":
            return HiEyeSlash;
        case "hi2:HiEye":
            return HiEye;
        case "hi2:HiFaceFrown":
            return HiFaceFrown;
        case "hi2:HiFaceSmile":
            return HiFaceSmile;
        case "hi2:HiFilm":
            return HiFilm;
        case "hi2:HiFingerPrint":
            return HiFingerPrint;
        case "hi2:HiFire":
            return HiFire;
        case "hi2:HiFlag":
            return HiFlag;
        case "hi2:HiFolderArrowDown":
            return HiFolderArrowDown;
        case "hi2:HiFolderMinus":
            return HiFolderMinus;
        case "hi2:HiFolderOpen":
            return HiFolderOpen;
        case "hi2:HiFolderPlus":
            return HiFolderPlus;
        case "hi2:HiFolder":
            return HiFolder;
        case "hi2:HiForward":
            return HiForward;
        case "hi2:HiFunnel":
            return HiFunnel;
        case "hi2:HiGif":
            return HiGif;
        case "hi2:HiGiftTop":
            return HiGiftTop;
        case "hi2:HiGift":
            return HiGift;
        case "hi2:HiGlobeAlt":
            return HiGlobeAlt;
        case "hi2:HiGlobeAmericas":
            return HiGlobeAmericas;
        case "hi2:HiGlobeAsiaAustralia":
            return HiGlobeAsiaAustralia;
        case "hi2:HiGlobeEuropeAfrica":
            return HiGlobeEuropeAfrica;
        case "hi2:HiH1":
            return HiH1;
        case "hi2:HiH2":
            return HiH2;
        case "hi2:HiH3":
            return HiH3;
        case "hi2:HiHandRaised":
            return HiHandRaised;
        case "hi2:HiHandThumbDown":
            return HiHandThumbDown;
        case "hi2:HiHandThumbUp":
            return HiHandThumbUp;
        case "hi2:HiHashtag":
            return HiHashtag;
        case "hi2:HiHeart":
            return HiHeart;
        case "hi2:HiHomeModern":
            return HiHomeModern;
        case "hi2:HiHome":
            return HiHome;
        case "hi2:HiIdentification":
            return HiIdentification;
        case "hi2:HiInboxArrowDown":
            return HiInboxArrowDown;
        case "hi2:HiInboxStack":
            return HiInboxStack;
        case "hi2:HiInbox":
            return HiInbox;
        case "hi2:HiInformationCircle":
            return HiInformationCircle;
        case "hi2:HiItalic":
            return HiItalic;
        case "hi2:HiKey":
            return HiKey;
        case "hi2:HiLanguage":
            return HiLanguage;
        case "hi2:HiLifebuoy":
            return HiLifebuoy;
        case "hi2:HiLightBulb":
            return HiLightBulb;
        case "hi2:HiLinkSlash":
            return HiLinkSlash;
        case "hi2:HiLink":
            return HiLink;
        case "hi2:HiListBullet":
            return HiListBullet;
        case "hi2:HiLockClosed":
            return HiLockClosed;
        case "hi2:HiLockOpen":
            return HiLockOpen;
        case "hi2:HiMagnifyingGlassCircle":
            return HiMagnifyingGlassCircle;
        case "hi2:HiMagnifyingGlassMinus":
            return HiMagnifyingGlassMinus;
        case "hi2:HiMagnifyingGlassPlus":
            return HiMagnifyingGlassPlus;
        case "hi2:HiMagnifyingGlass":
            return HiMagnifyingGlass;
        case "hi2:HiMapPin":
            return HiMapPin;
        case "hi2:HiMap":
            return HiMap;
        case "hi2:HiMegaphone":
            return HiMegaphone;
        case "hi2:HiMicrophone":
            return HiMicrophone;
        case "hi2:HiMinusCircle":
            return HiMinusCircle;
        case "hi2:HiMinusSmall":
            return HiMinusSmall;
        case "hi2:HiMinus":
            return HiMinus;
        case "hi2:HiMoon":
            return HiMoon;
        case "hi2:HiMusicalNote":
            return HiMusicalNote;
        case "hi2:HiNewspaper":
            return HiNewspaper;
        case "hi2:HiNoSymbol":
            return HiNoSymbol;
        case "hi2:HiNumberedList":
            return HiNumberedList;
        case "hi2:HiPaintBrush":
            return HiPaintBrush;
        case "hi2:HiPaperAirplane":
            return HiPaperAirplane;
        case "hi2:HiPaperClip":
            return HiPaperClip;
        case "hi2:HiPauseCircle":
            return HiPauseCircle;
        case "hi2:HiPause":
            return HiPause;
        case "hi2:HiPencilSquare":
            return HiPencilSquare;
        case "hi2:HiPencil":
            return HiPencil;
        case "hi2:HiPercentBadge":
            return HiPercentBadge;
        case "hi2:HiPhoneArrowDownLeft":
            return HiPhoneArrowDownLeft;
        case "hi2:HiPhoneArrowUpRight":
            return HiPhoneArrowUpRight;
        case "hi2:HiPhoneXMark":
            return HiPhoneXMark;
        case "hi2:HiPhone":
            return HiPhone;
        case "hi2:HiPhoto":
            return HiPhoto;
        case "hi2:HiPlayCircle":
            return HiPlayCircle;
        case "hi2:HiPlayPause":
            return HiPlayPause;
        case "hi2:HiPlay":
            return HiPlay;
        case "hi2:HiPlusCircle":
            return HiPlusCircle;
        case "hi2:HiPlusSmall":
            return HiPlusSmall;
        case "hi2:HiPlus":
            return HiPlus;
        case "hi2:HiPower":
            return HiPower;
        case "hi2:HiPresentationChartBar":
            return HiPresentationChartBar;
        case "hi2:HiPresentationChartLine":
            return HiPresentationChartLine;
        case "hi2:HiPrinter":
            return HiPrinter;
        case "hi2:HiPuzzlePiece":
            return HiPuzzlePiece;
        case "hi2:HiQrCode":
            return HiQrCode;
        case "hi2:HiQuestionMarkCircle":
            return HiQuestionMarkCircle;
        case "hi2:HiQueueList":
            return HiQueueList;
        case "hi2:HiRadio":
            return HiRadio;
        case "hi2:HiReceiptPercent":
            return HiReceiptPercent;
        case "hi2:HiReceiptRefund":
            return HiReceiptRefund;
        case "hi2:HiRectangleGroup":
            return HiRectangleGroup;
        case "hi2:HiRectangleStack":
            return HiRectangleStack;
        case "hi2:HiRocketLaunch":
            return HiRocketLaunch;
        case "hi2:HiRss":
            return HiRss;
        case "hi2:HiScale":
            return HiScale;
        case "hi2:HiScissors":
            return HiScissors;
        case "hi2:HiServerStack":
            return HiServerStack;
        case "hi2:HiServer":
            return HiServer;
        case "hi2:HiShare":
            return HiShare;
        case "hi2:HiShieldCheck":
            return HiShieldCheck;
        case "hi2:HiShieldExclamation":
            return HiShieldExclamation;
        case "hi2:HiShoppingBag":
            return HiShoppingBag;
        case "hi2:HiShoppingCart":
            return HiShoppingCart;
        case "hi2:HiSignalSlash":
            return HiSignalSlash;
        case "hi2:HiSignal":
            return HiSignal;
        case "hi2:HiSlash":
            return HiSlash;
        case "hi2:HiSparkles":
            return HiSparkles;
        case "hi2:HiSpeakerWave":
            return HiSpeakerWave;
        case "hi2:HiSpeakerXMark":
            return HiSpeakerXMark;
        case "hi2:HiSquare2Stack":
            return HiSquare2Stack;
        case "hi2:HiSquare3Stack3D":
            return HiSquare3Stack3D;
        case "hi2:HiSquares2X2":
            return HiSquares2X2;
        case "hi2:HiSquaresPlus":
            return HiSquaresPlus;
        case "hi2:HiStar":
            return HiStar;
        case "hi2:HiStopCircle":
            return HiStopCircle;
        case "hi2:HiStop":
            return HiStop;
        case "hi2:HiStrikethrough":
            return HiStrikethrough;
        case "hi2:HiSun":
            return HiSun;
        case "hi2:HiSwatch":
            return HiSwatch;
        case "hi2:HiTableCells":
            return HiTableCells;
        case "hi2:HiTag":
            return HiTag;
        case "hi2:HiTicket":
            return HiTicket;
        case "hi2:HiTrash":
            return HiTrash;
        case "hi2:HiTrophy":
            return HiTrophy;
        case "hi2:HiTruck":
            return HiTruck;
        case "hi2:HiTv":
            return HiTv;
        case "hi2:HiUnderline":
            return HiUnderline;
        case "hi2:HiUserCircle":
            return HiUserCircle;
        case "hi2:HiUserGroup":
            return HiUserGroup;
        case "hi2:HiUserMinus":
            return HiUserMinus;
        case "hi2:HiUserPlus":
            return HiUserPlus;
        case "hi2:HiUser":
            return HiUser;
        case "hi2:HiUsers":
            return HiUsers;
        case "hi2:HiVariable":
            return HiVariable;
        case "hi2:HiVideoCameraSlash":
            return HiVideoCameraSlash;
        case "hi2:HiVideoCamera":
            return HiVideoCamera;
        case "hi2:HiViewColumns":
            return HiViewColumns;
        case "hi2:HiViewfinderCircle":
            return HiViewfinderCircle;
        case "hi2:HiWallet":
            return HiWallet;
        case "hi2:HiWifi":
            return HiWifi;
        case "hi2:HiWindow":
            return HiWindow;
        case "hi2:HiWrenchScrewdriver":
            return HiWrenchScrewdriver;
        case "hi2:HiWrench":
            return HiWrench;
        case "hi2:HiXCircle":
            return HiXCircle;
        case "hi2:HiXMark":
            return HiXMark;
        case "hi2:HiOutlineAcademicCap":
            return HiOutlineAcademicCap;
        case "hi2:HiOutlineAdjustmentsHorizontal":
            return HiOutlineAdjustmentsHorizontal;
        case "hi2:HiOutlineAdjustmentsVertical":
            return HiOutlineAdjustmentsVertical;
        case "hi2:HiOutlineArchiveBoxArrowDown":
            return HiOutlineArchiveBoxArrowDown;
        case "hi2:HiOutlineArchiveBoxXMark":
            return HiOutlineArchiveBoxXMark;
        case "hi2:HiOutlineArchiveBox":
            return HiOutlineArchiveBox;
        case "hi2:HiOutlineArrowDownCircle":
            return HiOutlineArrowDownCircle;
        case "hi2:HiOutlineArrowDownLeft":
            return HiOutlineArrowDownLeft;
        case "hi2:HiOutlineArrowDownOnSquareStack":
            return HiOutlineArrowDownOnSquareStack;
        case "hi2:HiOutlineArrowDownOnSquare":
            return HiOutlineArrowDownOnSquare;
        case "hi2:HiOutlineArrowDownRight":
            return HiOutlineArrowDownRight;
        case "hi2:HiOutlineArrowDownTray":
            return HiOutlineArrowDownTray;
        case "hi2:HiOutlineArrowDown":
            return HiOutlineArrowDown;
        case "hi2:HiOutlineArrowLeftCircle":
            return HiOutlineArrowLeftCircle;
        case "hi2:HiOutlineArrowLeftEndOnRectangle":
            return HiOutlineArrowLeftEndOnRectangle;
        case "hi2:HiOutlineArrowLeftOnRectangle":
            return HiOutlineArrowLeftOnRectangle;
        case "hi2:HiOutlineArrowLeftStartOnRectangle":
            return HiOutlineArrowLeftStartOnRectangle;
        case "hi2:HiOutlineArrowLeft":
            return HiOutlineArrowLeft;
        case "hi2:HiOutlineArrowLongDown":
            return HiOutlineArrowLongDown;
        case "hi2:HiOutlineArrowLongLeft":
            return HiOutlineArrowLongLeft;
        case "hi2:HiOutlineArrowLongRight":
            return HiOutlineArrowLongRight;
        case "hi2:HiOutlineArrowLongUp":
            return HiOutlineArrowLongUp;
        case "hi2:HiOutlineArrowPathRoundedSquare":
            return HiOutlineArrowPathRoundedSquare;
        case "hi2:HiOutlineArrowPath":
            return HiOutlineArrowPath;
        case "hi2:HiOutlineArrowRightCircle":
            return HiOutlineArrowRightCircle;
        case "hi2:HiOutlineArrowRightEndOnRectangle":
            return HiOutlineArrowRightEndOnRectangle;
        case "hi2:HiOutlineArrowRightOnRectangle":
            return HiOutlineArrowRightOnRectangle;
        case "hi2:HiOutlineArrowRightStartOnRectangle":
            return HiOutlineArrowRightStartOnRectangle;
        case "hi2:HiOutlineArrowRight":
            return HiOutlineArrowRight;
        case "hi2:HiOutlineArrowSmallDown":
            return HiOutlineArrowSmallDown;
        case "hi2:HiOutlineArrowSmallLeft":
            return HiOutlineArrowSmallLeft;
        case "hi2:HiOutlineArrowSmallRight":
            return HiOutlineArrowSmallRight;
        case "hi2:HiOutlineArrowSmallUp":
            return HiOutlineArrowSmallUp;
        case "hi2:HiOutlineArrowTopRightOnSquare":
            return HiOutlineArrowTopRightOnSquare;
        case "hi2:HiOutlineArrowTrendingDown":
            return HiOutlineArrowTrendingDown;
        case "hi2:HiOutlineArrowTrendingUp":
            return HiOutlineArrowTrendingUp;
        case "hi2:HiOutlineArrowTurnDownLeft":
            return HiOutlineArrowTurnDownLeft;
        case "hi2:HiOutlineArrowTurnDownRight":
            return HiOutlineArrowTurnDownRight;
        case "hi2:HiOutlineArrowTurnLeftDown":
            return HiOutlineArrowTurnLeftDown;
        case "hi2:HiOutlineArrowTurnLeftUp":
            return HiOutlineArrowTurnLeftUp;
        case "hi2:HiOutlineArrowTurnRightDown":
            return HiOutlineArrowTurnRightDown;
        case "hi2:HiOutlineArrowTurnRightUp":
            return HiOutlineArrowTurnRightUp;
        case "hi2:HiOutlineArrowTurnUpLeft":
            return HiOutlineArrowTurnUpLeft;
        case "hi2:HiOutlineArrowTurnUpRight":
            return HiOutlineArrowTurnUpRight;
        case "hi2:HiOutlineArrowUpCircle":
            return HiOutlineArrowUpCircle;
        case "hi2:HiOutlineArrowUpLeft":
            return HiOutlineArrowUpLeft;
        case "hi2:HiOutlineArrowUpOnSquareStack":
            return HiOutlineArrowUpOnSquareStack;
        case "hi2:HiOutlineArrowUpOnSquare":
            return HiOutlineArrowUpOnSquare;
        case "hi2:HiOutlineArrowUpRight":
            return HiOutlineArrowUpRight;
        case "hi2:HiOutlineArrowUpTray":
            return HiOutlineArrowUpTray;
        case "hi2:HiOutlineArrowUp":
            return HiOutlineArrowUp;
        case "hi2:HiOutlineArrowUturnDown":
            return HiOutlineArrowUturnDown;
        case "hi2:HiOutlineArrowUturnLeft":
            return HiOutlineArrowUturnLeft;
        case "hi2:HiOutlineArrowUturnRight":
            return HiOutlineArrowUturnRight;
        case "hi2:HiOutlineArrowUturnUp":
            return HiOutlineArrowUturnUp;
        case "hi2:HiOutlineArrowsPointingIn":
            return HiOutlineArrowsPointingIn;
        case "hi2:HiOutlineArrowsPointingOut":
            return HiOutlineArrowsPointingOut;
        case "hi2:HiOutlineArrowsRightLeft":
            return HiOutlineArrowsRightLeft;
        case "hi2:HiOutlineArrowsUpDown":
            return HiOutlineArrowsUpDown;
        case "hi2:HiOutlineAtSymbol":
            return HiOutlineAtSymbol;
        case "hi2:HiOutlineBackspace":
            return HiOutlineBackspace;
        case "hi2:HiOutlineBackward":
            return HiOutlineBackward;
        case "hi2:HiOutlineBanknotes":
            return HiOutlineBanknotes;
        case "hi2:HiOutlineBars2":
            return HiOutlineBars2;
        case "hi2:HiOutlineBars3BottomLeft":
            return HiOutlineBars3BottomLeft;
        case "hi2:HiOutlineBars3BottomRight":
            return HiOutlineBars3BottomRight;
        case "hi2:HiOutlineBars3CenterLeft":
            return HiOutlineBars3CenterLeft;
        case "hi2:HiOutlineBars3":
            return HiOutlineBars3;
        case "hi2:HiOutlineBars4":
            return HiOutlineBars4;
        case "hi2:HiOutlineBarsArrowDown":
            return HiOutlineBarsArrowDown;
        case "hi2:HiOutlineBarsArrowUp":
            return HiOutlineBarsArrowUp;
        case "hi2:HiOutlineBattery0":
            return HiOutlineBattery0;
        case "hi2:HiOutlineBattery100":
            return HiOutlineBattery100;
        case "hi2:HiOutlineBattery50":
            return HiOutlineBattery50;
        case "hi2:HiOutlineBeaker":
            return HiOutlineBeaker;
        case "hi2:HiOutlineBellAlert":
            return HiOutlineBellAlert;
        case "hi2:HiOutlineBellSlash":
            return HiOutlineBellSlash;
        case "hi2:HiOutlineBellSnooze":
            return HiOutlineBellSnooze;
        case "hi2:HiOutlineBell":
            return HiOutlineBell;
        case "hi2:HiOutlineBold":
            return HiOutlineBold;
        case "hi2:HiOutlineBoltSlash":
            return HiOutlineBoltSlash;
        case "hi2:HiOutlineBolt":
            return HiOutlineBolt;
        case "hi2:HiOutlineBookOpen":
            return HiOutlineBookOpen;
        case "hi2:HiOutlineBookmarkSlash":
            return HiOutlineBookmarkSlash;
        case "hi2:HiOutlineBookmarkSquare":
            return HiOutlineBookmarkSquare;
        case "hi2:HiOutlineBookmark":
            return HiOutlineBookmark;
        case "hi2:HiOutlineBriefcase":
            return HiOutlineBriefcase;
        case "hi2:HiOutlineBugAnt":
            return HiOutlineBugAnt;
        case "hi2:HiOutlineBuildingLibrary":
            return HiOutlineBuildingLibrary;
        case "hi2:HiOutlineBuildingOffice2":
            return HiOutlineBuildingOffice2;
        case "hi2:HiOutlineBuildingOffice":
            return HiOutlineBuildingOffice;
        case "hi2:HiOutlineBuildingStorefront":
            return HiOutlineBuildingStorefront;
        case "hi2:HiOutlineCake":
            return HiOutlineCake;
        case "hi2:HiOutlineCalculator":
            return HiOutlineCalculator;
        case "hi2:HiOutlineCalendarDateRange":
            return HiOutlineCalendarDateRange;
        case "hi2:HiOutlineCalendarDays":
            return HiOutlineCalendarDays;
        case "hi2:HiOutlineCalendar":
            return HiOutlineCalendar;
        case "hi2:HiOutlineCamera":
            return HiOutlineCamera;
        case "hi2:HiOutlineChartBarSquare":
            return HiOutlineChartBarSquare;
        case "hi2:HiOutlineChartBar":
            return HiOutlineChartBar;
        case "hi2:HiOutlineChartPie":
            return HiOutlineChartPie;
        case "hi2:HiOutlineChatBubbleBottomCenterText":
            return HiOutlineChatBubbleBottomCenterText;
        case "hi2:HiOutlineChatBubbleBottomCenter":
            return HiOutlineChatBubbleBottomCenter;
        case "hi2:HiOutlineChatBubbleLeftEllipsis":
            return HiOutlineChatBubbleLeftEllipsis;
        case "hi2:HiOutlineChatBubbleLeftRight":
            return HiOutlineChatBubbleLeftRight;
        case "hi2:HiOutlineChatBubbleLeft":
            return HiOutlineChatBubbleLeft;
        case "hi2:HiOutlineChatBubbleOvalLeftEllipsis":
            return HiOutlineChatBubbleOvalLeftEllipsis;
        case "hi2:HiOutlineChatBubbleOvalLeft":
            return HiOutlineChatBubbleOvalLeft;
        case "hi2:HiOutlineCheckBadge":
            return HiOutlineCheckBadge;
        case "hi2:HiOutlineCheckCircle":
            return HiOutlineCheckCircle;
        case "hi2:HiOutlineCheck":
            return HiOutlineCheck;
        case "hi2:HiOutlineChevronDoubleDown":
            return HiOutlineChevronDoubleDown;
        case "hi2:HiOutlineChevronDoubleLeft":
            return HiOutlineChevronDoubleLeft;
        case "hi2:HiOutlineChevronDoubleRight":
            return HiOutlineChevronDoubleRight;
        case "hi2:HiOutlineChevronDoubleUp":
            return HiOutlineChevronDoubleUp;
        case "hi2:HiOutlineChevronDown":
            return HiOutlineChevronDown;
        case "hi2:HiOutlineChevronLeft":
            return HiOutlineChevronLeft;
        case "hi2:HiOutlineChevronRight":
            return HiOutlineChevronRight;
        case "hi2:HiOutlineChevronUpDown":
            return HiOutlineChevronUpDown;
        case "hi2:HiOutlineChevronUp":
            return HiOutlineChevronUp;
        case "hi2:HiOutlineCircleStack":
            return HiOutlineCircleStack;
        case "hi2:HiOutlineClipboardDocumentCheck":
            return HiOutlineClipboardDocumentCheck;
        case "hi2:HiOutlineClipboardDocumentList":
            return HiOutlineClipboardDocumentList;
        case "hi2:HiOutlineClipboardDocument":
            return HiOutlineClipboardDocument;
        case "hi2:HiOutlineClipboard":
            return HiOutlineClipboard;
        case "hi2:HiOutlineClock":
            return HiOutlineClock;
        case "hi2:HiOutlineCloudArrowDown":
            return HiOutlineCloudArrowDown;
        case "hi2:HiOutlineCloudArrowUp":
            return HiOutlineCloudArrowUp;
        case "hi2:HiOutlineCloud":
            return HiOutlineCloud;
        case "hi2:HiOutlineCodeBracketSquare":
            return HiOutlineCodeBracketSquare;
        case "hi2:HiOutlineCodeBracket":
            return HiOutlineCodeBracket;
        case "hi2:HiOutlineCog6Tooth":
            return HiOutlineCog6Tooth;
        case "hi2:HiOutlineCog8Tooth":
            return HiOutlineCog8Tooth;
        case "hi2:HiOutlineCog":
            return HiOutlineCog;
        case "hi2:HiOutlineCommandLine":
            return HiOutlineCommandLine;
        case "hi2:HiOutlineComputerDesktop":
            return HiOutlineComputerDesktop;
        case "hi2:HiOutlineCpuChip":
            return HiOutlineCpuChip;
        case "hi2:HiOutlineCreditCard":
            return HiOutlineCreditCard;
        case "hi2:HiOutlineCubeTransparent":
            return HiOutlineCubeTransparent;
        case "hi2:HiOutlineCube":
            return HiOutlineCube;
        case "hi2:HiOutlineCurrencyBangladeshi":
            return HiOutlineCurrencyBangladeshi;
        case "hi2:HiOutlineCurrencyDollar":
            return HiOutlineCurrencyDollar;
        case "hi2:HiOutlineCurrencyEuro":
            return HiOutlineCurrencyEuro;
        case "hi2:HiOutlineCurrencyPound":
            return HiOutlineCurrencyPound;
        case "hi2:HiOutlineCurrencyRupee":
            return HiOutlineCurrencyRupee;
        case "hi2:HiOutlineCurrencyYen":
            return HiOutlineCurrencyYen;
        case "hi2:HiOutlineCursorArrowRays":
            return HiOutlineCursorArrowRays;
        case "hi2:HiOutlineCursorArrowRipple":
            return HiOutlineCursorArrowRipple;
        case "hi2:HiOutlineDevicePhoneMobile":
            return HiOutlineDevicePhoneMobile;
        case "hi2:HiOutlineDeviceTablet":
            return HiOutlineDeviceTablet;
        case "hi2:HiOutlineDivide":
            return HiOutlineDivide;
        case "hi2:HiOutlineDocumentArrowDown":
            return HiOutlineDocumentArrowDown;
        case "hi2:HiOutlineDocumentArrowUp":
            return HiOutlineDocumentArrowUp;
        case "hi2:HiOutlineDocumentChartBar":
            return HiOutlineDocumentChartBar;
        case "hi2:HiOutlineDocumentCheck":
            return HiOutlineDocumentCheck;
        case "hi2:HiOutlineDocumentCurrencyBangladeshi":
            return HiOutlineDocumentCurrencyBangladeshi;
        case "hi2:HiOutlineDocumentCurrencyDollar":
            return HiOutlineDocumentCurrencyDollar;
        case "hi2:HiOutlineDocumentCurrencyEuro":
            return HiOutlineDocumentCurrencyEuro;
        case "hi2:HiOutlineDocumentCurrencyPound":
            return HiOutlineDocumentCurrencyPound;
        case "hi2:HiOutlineDocumentCurrencyRupee":
            return HiOutlineDocumentCurrencyRupee;
        case "hi2:HiOutlineDocumentCurrencyYen":
            return HiOutlineDocumentCurrencyYen;
        case "hi2:HiOutlineDocumentDuplicate":
            return HiOutlineDocumentDuplicate;
        case "hi2:HiOutlineDocumentMagnifyingGlass":
            return HiOutlineDocumentMagnifyingGlass;
        case "hi2:HiOutlineDocumentMinus":
            return HiOutlineDocumentMinus;
        case "hi2:HiOutlineDocumentPlus":
            return HiOutlineDocumentPlus;
        case "hi2:HiOutlineDocumentText":
            return HiOutlineDocumentText;
        case "hi2:HiOutlineDocument":
            return HiOutlineDocument;
        case "hi2:HiOutlineEllipsisHorizontalCircle":
            return HiOutlineEllipsisHorizontalCircle;
        case "hi2:HiOutlineEllipsisHorizontal":
            return HiOutlineEllipsisHorizontal;
        case "hi2:HiOutlineEllipsisVertical":
            return HiOutlineEllipsisVertical;
        case "hi2:HiOutlineEnvelopeOpen":
            return HiOutlineEnvelopeOpen;
        case "hi2:HiOutlineEnvelope":
            return HiOutlineEnvelope;
        case "hi2:HiOutlineEquals":
            return HiOutlineEquals;
        case "hi2:HiOutlineExclamationCircle":
            return HiOutlineExclamationCircle;
        case "hi2:HiOutlineExclamationTriangle":
            return HiOutlineExclamationTriangle;
        case "hi2:HiOutlineEyeDropper":
            return HiOutlineEyeDropper;
        case "hi2:HiOutlineEyeSlash":
            return HiOutlineEyeSlash;
        case "hi2:HiOutlineEye":
            return HiOutlineEye;
        case "hi2:HiOutlineFaceFrown":
            return HiOutlineFaceFrown;
        case "hi2:HiOutlineFaceSmile":
            return HiOutlineFaceSmile;
        case "hi2:HiOutlineFilm":
            return HiOutlineFilm;
        case "hi2:HiOutlineFingerPrint":
            return HiOutlineFingerPrint;
        case "hi2:HiOutlineFire":
            return HiOutlineFire;
        case "hi2:HiOutlineFlag":
            return HiOutlineFlag;
        case "hi2:HiOutlineFolderArrowDown":
            return HiOutlineFolderArrowDown;
        case "hi2:HiOutlineFolderMinus":
            return HiOutlineFolderMinus;
        case "hi2:HiOutlineFolderOpen":
            return HiOutlineFolderOpen;
        case "hi2:HiOutlineFolderPlus":
            return HiOutlineFolderPlus;
        case "hi2:HiOutlineFolder":
            return HiOutlineFolder;
        case "hi2:HiOutlineForward":
            return HiOutlineForward;
        case "hi2:HiOutlineFunnel":
            return HiOutlineFunnel;
        case "hi2:HiOutlineGif":
            return HiOutlineGif;
        case "hi2:HiOutlineGiftTop":
            return HiOutlineGiftTop;
        case "hi2:HiOutlineGift":
            return HiOutlineGift;
        case "hi2:HiOutlineGlobeAlt":
            return HiOutlineGlobeAlt;
        case "hi2:HiOutlineGlobeAmericas":
            return HiOutlineGlobeAmericas;
        case "hi2:HiOutlineGlobeAsiaAustralia":
            return HiOutlineGlobeAsiaAustralia;
        case "hi2:HiOutlineGlobeEuropeAfrica":
            return HiOutlineGlobeEuropeAfrica;
        case "hi2:HiOutlineH1":
            return HiOutlineH1;
        case "hi2:HiOutlineH2":
            return HiOutlineH2;
        case "hi2:HiOutlineH3":
            return HiOutlineH3;
        case "hi2:HiOutlineHandRaised":
            return HiOutlineHandRaised;
        case "hi2:HiOutlineHandThumbDown":
            return HiOutlineHandThumbDown;
        case "hi2:HiOutlineHandThumbUp":
            return HiOutlineHandThumbUp;
        case "hi2:HiOutlineHashtag":
            return HiOutlineHashtag;
        case "hi2:HiOutlineHeart":
            return HiOutlineHeart;
        case "hi2:HiOutlineHomeModern":
            return HiOutlineHomeModern;
        case "hi2:HiOutlineHome":
            return HiOutlineHome;
        case "hi2:HiOutlineIdentification":
            return HiOutlineIdentification;
        case "hi2:HiOutlineInboxArrowDown":
            return HiOutlineInboxArrowDown;
        case "hi2:HiOutlineInboxStack":
            return HiOutlineInboxStack;
        case "hi2:HiOutlineInbox":
            return HiOutlineInbox;
        case "hi2:HiOutlineInformationCircle":
            return HiOutlineInformationCircle;
        case "hi2:HiOutlineItalic":
            return HiOutlineItalic;
        case "hi2:HiOutlineKey":
            return HiOutlineKey;
        case "hi2:HiOutlineLanguage":
            return HiOutlineLanguage;
        case "hi2:HiOutlineLifebuoy":
            return HiOutlineLifebuoy;
        case "hi2:HiOutlineLightBulb":
            return HiOutlineLightBulb;
        case "hi2:HiOutlineLinkSlash":
            return HiOutlineLinkSlash;
        case "hi2:HiOutlineLink":
            return HiOutlineLink;
        case "hi2:HiOutlineListBullet":
            return HiOutlineListBullet;
        case "hi2:HiOutlineLockClosed":
            return HiOutlineLockClosed;
        case "hi2:HiOutlineLockOpen":
            return HiOutlineLockOpen;
        case "hi2:HiOutlineMagnifyingGlassCircle":
            return HiOutlineMagnifyingGlassCircle;
        case "hi2:HiOutlineMagnifyingGlassMinus":
            return HiOutlineMagnifyingGlassMinus;
        case "hi2:HiOutlineMagnifyingGlassPlus":
            return HiOutlineMagnifyingGlassPlus;
        case "hi2:HiOutlineMagnifyingGlass":
            return HiOutlineMagnifyingGlass;
        case "hi2:HiOutlineMapPin":
            return HiOutlineMapPin;
        case "hi2:HiOutlineMap":
            return HiOutlineMap;
        case "hi2:HiOutlineMegaphone":
            return HiOutlineMegaphone;
        case "hi2:HiOutlineMicrophone":
            return HiOutlineMicrophone;
        case "hi2:HiOutlineMinusCircle":
            return HiOutlineMinusCircle;
        case "hi2:HiOutlineMinusSmall":
            return HiOutlineMinusSmall;
        case "hi2:HiOutlineMinus":
            return HiOutlineMinus;
        case "hi2:HiOutlineMoon":
            return HiOutlineMoon;
        case "hi2:HiOutlineMusicalNote":
            return HiOutlineMusicalNote;
        case "hi2:HiOutlineNewspaper":
            return HiOutlineNewspaper;
        case "hi2:HiOutlineNoSymbol":
            return HiOutlineNoSymbol;
        case "hi2:HiOutlineNumberedList":
            return HiOutlineNumberedList;
        case "hi2:HiOutlinePaintBrush":
            return HiOutlinePaintBrush;
        case "hi2:HiOutlinePaperAirplane":
            return HiOutlinePaperAirplane;
        case "hi2:HiOutlinePaperClip":
            return HiOutlinePaperClip;
        case "hi2:HiOutlinePauseCircle":
            return HiOutlinePauseCircle;
        case "hi2:HiOutlinePause":
            return HiOutlinePause;
        case "hi2:HiOutlinePencilSquare":
            return HiOutlinePencilSquare;
        case "hi2:HiOutlinePencil":
            return HiOutlinePencil;
        case "hi2:HiOutlinePercentBadge":
            return HiOutlinePercentBadge;
        case "hi2:HiOutlinePhoneArrowDownLeft":
            return HiOutlinePhoneArrowDownLeft;
        case "hi2:HiOutlinePhoneArrowUpRight":
            return HiOutlinePhoneArrowUpRight;
        case "hi2:HiOutlinePhoneXMark":
            return HiOutlinePhoneXMark;
        case "hi2:HiOutlinePhone":
            return HiOutlinePhone;
        case "hi2:HiOutlinePhoto":
            return HiOutlinePhoto;
        case "hi2:HiOutlinePlayCircle":
            return HiOutlinePlayCircle;
        case "hi2:HiOutlinePlayPause":
            return HiOutlinePlayPause;
        case "hi2:HiOutlinePlay":
            return HiOutlinePlay;
        case "hi2:HiOutlinePlusCircle":
            return HiOutlinePlusCircle;
        case "hi2:HiOutlinePlusSmall":
            return HiOutlinePlusSmall;
        case "hi2:HiOutlinePlus":
            return HiOutlinePlus;
        case "hi2:HiOutlinePower":
            return HiOutlinePower;
        case "hi2:HiOutlinePresentationChartBar":
            return HiOutlinePresentationChartBar;
        case "hi2:HiOutlinePresentationChartLine":
            return HiOutlinePresentationChartLine;
        case "hi2:HiOutlinePrinter":
            return HiOutlinePrinter;
        case "hi2:HiOutlinePuzzlePiece":
            return HiOutlinePuzzlePiece;
        case "hi2:HiOutlineQrCode":
            return HiOutlineQrCode;
        case "hi2:HiOutlineQuestionMarkCircle":
            return HiOutlineQuestionMarkCircle;
        case "hi2:HiOutlineQueueList":
            return HiOutlineQueueList;
        case "hi2:HiOutlineRadio":
            return HiOutlineRadio;
        case "hi2:HiOutlineReceiptPercent":
            return HiOutlineReceiptPercent;
        case "hi2:HiOutlineReceiptRefund":
            return HiOutlineReceiptRefund;
        case "hi2:HiOutlineRectangleGroup":
            return HiOutlineRectangleGroup;
        case "hi2:HiOutlineRectangleStack":
            return HiOutlineRectangleStack;
        case "hi2:HiOutlineRocketLaunch":
            return HiOutlineRocketLaunch;
        case "hi2:HiOutlineRss":
            return HiOutlineRss;
        case "hi2:HiOutlineScale":
            return HiOutlineScale;
        case "hi2:HiOutlineScissors":
            return HiOutlineScissors;
        case "hi2:HiOutlineServerStack":
            return HiOutlineServerStack;
        case "hi2:HiOutlineServer":
            return HiOutlineServer;
        case "hi2:HiOutlineShare":
            return HiOutlineShare;
        case "hi2:HiOutlineShieldCheck":
            return HiOutlineShieldCheck;
        case "hi2:HiOutlineShieldExclamation":
            return HiOutlineShieldExclamation;
        case "hi2:HiOutlineShoppingBag":
            return HiOutlineShoppingBag;
        case "hi2:HiOutlineShoppingCart":
            return HiOutlineShoppingCart;
        case "hi2:HiOutlineSignalSlash":
            return HiOutlineSignalSlash;
        case "hi2:HiOutlineSignal":
            return HiOutlineSignal;
        case "hi2:HiOutlineSlash":
            return HiOutlineSlash;
        case "hi2:HiOutlineSparkles":
            return HiOutlineSparkles;
        case "hi2:HiOutlineSpeakerWave":
            return HiOutlineSpeakerWave;
        case "hi2:HiOutlineSpeakerXMark":
            return HiOutlineSpeakerXMark;
        case "hi2:HiOutlineSquare2Stack":
            return HiOutlineSquare2Stack;
        case "hi2:HiOutlineSquare3Stack3D":
            return HiOutlineSquare3Stack3D;
        case "hi2:HiOutlineSquares2X2":
            return HiOutlineSquares2X2;
        case "hi2:HiOutlineSquaresPlus":
            return HiOutlineSquaresPlus;
        case "hi2:HiOutlineStar":
            return HiOutlineStar;
        case "hi2:HiOutlineStopCircle":
            return HiOutlineStopCircle;
        case "hi2:HiOutlineStop":
            return HiOutlineStop;
        case "hi2:HiOutlineStrikethrough":
            return HiOutlineStrikethrough;
        case "hi2:HiOutlineSun":
            return HiOutlineSun;
        case "hi2:HiOutlineSwatch":
            return HiOutlineSwatch;
        case "hi2:HiOutlineTableCells":
            return HiOutlineTableCells;
        case "hi2:HiOutlineTag":
            return HiOutlineTag;
        case "hi2:HiOutlineTicket":
            return HiOutlineTicket;
        case "hi2:HiOutlineTrash":
            return HiOutlineTrash;
        case "hi2:HiOutlineTrophy":
            return HiOutlineTrophy;
        case "hi2:HiOutlineTruck":
            return HiOutlineTruck;
        case "hi2:HiOutlineTv":
            return HiOutlineTv;
        case "hi2:HiOutlineUnderline":
            return HiOutlineUnderline;
        case "hi2:HiOutlineUserCircle":
            return HiOutlineUserCircle;
        case "hi2:HiOutlineUserGroup":
            return HiOutlineUserGroup;
        case "hi2:HiOutlineUserMinus":
            return HiOutlineUserMinus;
        case "hi2:HiOutlineUserPlus":
            return HiOutlineUserPlus;
        case "hi2:HiOutlineUser":
            return HiOutlineUser;
        case "hi2:HiOutlineUsers":
            return HiOutlineUsers;
        case "hi2:HiOutlineVariable":
            return HiOutlineVariable;
        case "hi2:HiOutlineVideoCameraSlash":
            return HiOutlineVideoCameraSlash;
        case "hi2:HiOutlineVideoCamera":
            return HiOutlineVideoCamera;
        case "hi2:HiOutlineViewColumns":
            return HiOutlineViewColumns;
        case "hi2:HiOutlineViewfinderCircle":
            return HiOutlineViewfinderCircle;
        case "hi2:HiOutlineWallet":
            return HiOutlineWallet;
        case "hi2:HiOutlineWifi":
            return HiOutlineWifi;
        case "hi2:HiOutlineWindow":
            return HiOutlineWindow;
        case "hi2:HiOutlineWrenchScrewdriver":
            return HiOutlineWrenchScrewdriver;
        case "hi2:HiOutlineWrench":
            return HiOutlineWrench;
        case "hi2:HiOutlineXCircle":
            return HiOutlineXCircle;
        case "hi2:HiOutlineXMark":
            return HiOutlineXMark;
        case "hi2:HiMiniAcademicCap":
            return HiMiniAcademicCap;
        case "hi2:HiMiniAdjustmentsHorizontal":
            return HiMiniAdjustmentsHorizontal;
        case "hi2:HiMiniAdjustmentsVertical":
            return HiMiniAdjustmentsVertical;
        case "hi2:HiMiniArchiveBoxArrowDown":
            return HiMiniArchiveBoxArrowDown;
        case "hi2:HiMiniArchiveBoxXMark":
            return HiMiniArchiveBoxXMark;
        case "hi2:HiMiniArchiveBox":
            return HiMiniArchiveBox;
        case "hi2:HiMiniArrowDownCircle":
            return HiMiniArrowDownCircle;
        case "hi2:HiMiniArrowDownLeft":
            return HiMiniArrowDownLeft;
        case "hi2:HiMiniArrowDownOnSquareStack":
            return HiMiniArrowDownOnSquareStack;
        case "hi2:HiMiniArrowDownOnSquare":
            return HiMiniArrowDownOnSquare;
        case "hi2:HiMiniArrowDownRight":
            return HiMiniArrowDownRight;
        case "hi2:HiMiniArrowDownTray":
            return HiMiniArrowDownTray;
        case "hi2:HiMiniArrowDown":
            return HiMiniArrowDown;
        case "hi2:HiMiniArrowLeftCircle":
            return HiMiniArrowLeftCircle;
        case "hi2:HiMiniArrowLeftEndOnRectangle":
            return HiMiniArrowLeftEndOnRectangle;
        case "hi2:HiMiniArrowLeftOnRectangle":
            return HiMiniArrowLeftOnRectangle;
        case "hi2:HiMiniArrowLeftStartOnRectangle":
            return HiMiniArrowLeftStartOnRectangle;
        case "hi2:HiMiniArrowLeft":
            return HiMiniArrowLeft;
        case "hi2:HiMiniArrowLongDown":
            return HiMiniArrowLongDown;
        case "hi2:HiMiniArrowLongLeft":
            return HiMiniArrowLongLeft;
        case "hi2:HiMiniArrowLongRight":
            return HiMiniArrowLongRight;
        case "hi2:HiMiniArrowLongUp":
            return HiMiniArrowLongUp;
        case "hi2:HiMiniArrowPathRoundedSquare":
            return HiMiniArrowPathRoundedSquare;
        case "hi2:HiMiniArrowPath":
            return HiMiniArrowPath;
        case "hi2:HiMiniArrowRightCircle":
            return HiMiniArrowRightCircle;
        case "hi2:HiMiniArrowRightEndOnRectangle":
            return HiMiniArrowRightEndOnRectangle;
        case "hi2:HiMiniArrowRightOnRectangle":
            return HiMiniArrowRightOnRectangle;
        case "hi2:HiMiniArrowRightStartOnRectangle":
            return HiMiniArrowRightStartOnRectangle;
        case "hi2:HiMiniArrowRight":
            return HiMiniArrowRight;
        case "hi2:HiMiniArrowSmallDown":
            return HiMiniArrowSmallDown;
        case "hi2:HiMiniArrowSmallLeft":
            return HiMiniArrowSmallLeft;
        case "hi2:HiMiniArrowSmallRight":
            return HiMiniArrowSmallRight;
        case "hi2:HiMiniArrowSmallUp":
            return HiMiniArrowSmallUp;
        case "hi2:HiMiniArrowTopRightOnSquare":
            return HiMiniArrowTopRightOnSquare;
        case "hi2:HiMiniArrowTrendingDown":
            return HiMiniArrowTrendingDown;
        case "hi2:HiMiniArrowTrendingUp":
            return HiMiniArrowTrendingUp;
        case "hi2:HiMiniArrowTurnDownLeft":
            return HiMiniArrowTurnDownLeft;
        case "hi2:HiMiniArrowTurnDownRight":
            return HiMiniArrowTurnDownRight;
        case "hi2:HiMiniArrowTurnLeftDown":
            return HiMiniArrowTurnLeftDown;
        case "hi2:HiMiniArrowTurnLeftUp":
            return HiMiniArrowTurnLeftUp;
        case "hi2:HiMiniArrowTurnRightDown":
            return HiMiniArrowTurnRightDown;
        case "hi2:HiMiniArrowTurnRightUp":
            return HiMiniArrowTurnRightUp;
        case "hi2:HiMiniArrowTurnUpLeft":
            return HiMiniArrowTurnUpLeft;
        case "hi2:HiMiniArrowTurnUpRight":
            return HiMiniArrowTurnUpRight;
        case "hi2:HiMiniArrowUpCircle":
            return HiMiniArrowUpCircle;
        case "hi2:HiMiniArrowUpLeft":
            return HiMiniArrowUpLeft;
        case "hi2:HiMiniArrowUpOnSquareStack":
            return HiMiniArrowUpOnSquareStack;
        case "hi2:HiMiniArrowUpOnSquare":
            return HiMiniArrowUpOnSquare;
        case "hi2:HiMiniArrowUpRight":
            return HiMiniArrowUpRight;
        case "hi2:HiMiniArrowUpTray":
            return HiMiniArrowUpTray;
        case "hi2:HiMiniArrowUp":
            return HiMiniArrowUp;
        case "hi2:HiMiniArrowUturnDown":
            return HiMiniArrowUturnDown;
        case "hi2:HiMiniArrowUturnLeft":
            return HiMiniArrowUturnLeft;
        case "hi2:HiMiniArrowUturnRight":
            return HiMiniArrowUturnRight;
        case "hi2:HiMiniArrowUturnUp":
            return HiMiniArrowUturnUp;
        case "hi2:HiMiniArrowsPointingIn":
            return HiMiniArrowsPointingIn;
        case "hi2:HiMiniArrowsPointingOut":
            return HiMiniArrowsPointingOut;
        case "hi2:HiMiniArrowsRightLeft":
            return HiMiniArrowsRightLeft;
        case "hi2:HiMiniArrowsUpDown":
            return HiMiniArrowsUpDown;
        case "hi2:HiMiniAtSymbol":
            return HiMiniAtSymbol;
        case "hi2:HiMiniBackspace":
            return HiMiniBackspace;
        case "hi2:HiMiniBackward":
            return HiMiniBackward;
        case "hi2:HiMiniBanknotes":
            return HiMiniBanknotes;
        case "hi2:HiMiniBars2":
            return HiMiniBars2;
        case "hi2:HiMiniBars3BottomLeft":
            return HiMiniBars3BottomLeft;
        case "hi2:HiMiniBars3BottomRight":
            return HiMiniBars3BottomRight;
        case "hi2:HiMiniBars3CenterLeft":
            return HiMiniBars3CenterLeft;
        case "hi2:HiMiniBars3":
            return HiMiniBars3;
        case "hi2:HiMiniBars4":
            return HiMiniBars4;
        case "hi2:HiMiniBarsArrowDown":
            return HiMiniBarsArrowDown;
        case "hi2:HiMiniBarsArrowUp":
            return HiMiniBarsArrowUp;
        case "hi2:HiMiniBattery0":
            return HiMiniBattery0;
        case "hi2:HiMiniBattery100":
            return HiMiniBattery100;
        case "hi2:HiMiniBattery50":
            return HiMiniBattery50;
        case "hi2:HiMiniBeaker":
            return HiMiniBeaker;
        case "hi2:HiMiniBellAlert":
            return HiMiniBellAlert;
        case "hi2:HiMiniBellSlash":
            return HiMiniBellSlash;
        case "hi2:HiMiniBellSnooze":
            return HiMiniBellSnooze;
        case "hi2:HiMiniBell":
            return HiMiniBell;
        case "hi2:HiMiniBold":
            return HiMiniBold;
        case "hi2:HiMiniBoltSlash":
            return HiMiniBoltSlash;
        case "hi2:HiMiniBolt":
            return HiMiniBolt;
        case "hi2:HiMiniBookOpen":
            return HiMiniBookOpen;
        case "hi2:HiMiniBookmarkSlash":
            return HiMiniBookmarkSlash;
        case "hi2:HiMiniBookmarkSquare":
            return HiMiniBookmarkSquare;
        case "hi2:HiMiniBookmark":
            return HiMiniBookmark;
        case "hi2:HiMiniBriefcase":
            return HiMiniBriefcase;
        case "hi2:HiMiniBugAnt":
            return HiMiniBugAnt;
        case "hi2:HiMiniBuildingLibrary":
            return HiMiniBuildingLibrary;
        case "hi2:HiMiniBuildingOffice2":
            return HiMiniBuildingOffice2;
        case "hi2:HiMiniBuildingOffice":
            return HiMiniBuildingOffice;
        case "hi2:HiMiniBuildingStorefront":
            return HiMiniBuildingStorefront;
        case "hi2:HiMiniCake":
            return HiMiniCake;
        case "hi2:HiMiniCalculator":
            return HiMiniCalculator;
        case "hi2:HiMiniCalendarDateRange":
            return HiMiniCalendarDateRange;
        case "hi2:HiMiniCalendarDays":
            return HiMiniCalendarDays;
        case "hi2:HiMiniCalendar":
            return HiMiniCalendar;
        case "hi2:HiMiniCamera":
            return HiMiniCamera;
        case "hi2:HiMiniChartBarSquare":
            return HiMiniChartBarSquare;
        case "hi2:HiMiniChartBar":
            return HiMiniChartBar;
        case "hi2:HiMiniChartPie":
            return HiMiniChartPie;
        case "hi2:HiMiniChatBubbleBottomCenterText":
            return HiMiniChatBubbleBottomCenterText;
        case "hi2:HiMiniChatBubbleBottomCenter":
            return HiMiniChatBubbleBottomCenter;
        case "hi2:HiMiniChatBubbleLeftEllipsis":
            return HiMiniChatBubbleLeftEllipsis;
        case "hi2:HiMiniChatBubbleLeftRight":
            return HiMiniChatBubbleLeftRight;
        case "hi2:HiMiniChatBubbleLeft":
            return HiMiniChatBubbleLeft;
        case "hi2:HiMiniChatBubbleOvalLeftEllipsis":
            return HiMiniChatBubbleOvalLeftEllipsis;
        case "hi2:HiMiniChatBubbleOvalLeft":
            return HiMiniChatBubbleOvalLeft;
        case "hi2:HiMiniCheckBadge":
            return HiMiniCheckBadge;
        case "hi2:HiMiniCheckCircle":
            return HiMiniCheckCircle;
        case "hi2:HiMiniCheck":
            return HiMiniCheck;
        case "hi2:HiMiniChevronDoubleDown":
            return HiMiniChevronDoubleDown;
        case "hi2:HiMiniChevronDoubleLeft":
            return HiMiniChevronDoubleLeft;
        case "hi2:HiMiniChevronDoubleRight":
            return HiMiniChevronDoubleRight;
        case "hi2:HiMiniChevronDoubleUp":
            return HiMiniChevronDoubleUp;
        case "hi2:HiMiniChevronDown":
            return HiMiniChevronDown;
        case "hi2:HiMiniChevronLeft":
            return HiMiniChevronLeft;
        case "hi2:HiMiniChevronRight":
            return HiMiniChevronRight;
        case "hi2:HiMiniChevronUpDown":
            return HiMiniChevronUpDown;
        case "hi2:HiMiniChevronUp":
            return HiMiniChevronUp;
        case "hi2:HiMiniCircleStack":
            return HiMiniCircleStack;
        case "hi2:HiMiniClipboardDocumentCheck":
            return HiMiniClipboardDocumentCheck;
        case "hi2:HiMiniClipboardDocumentList":
            return HiMiniClipboardDocumentList;
        case "hi2:HiMiniClipboardDocument":
            return HiMiniClipboardDocument;
        case "hi2:HiMiniClipboard":
            return HiMiniClipboard;
        case "hi2:HiMiniClock":
            return HiMiniClock;
        case "hi2:HiMiniCloudArrowDown":
            return HiMiniCloudArrowDown;
        case "hi2:HiMiniCloudArrowUp":
            return HiMiniCloudArrowUp;
        case "hi2:HiMiniCloud":
            return HiMiniCloud;
        case "hi2:HiMiniCodeBracketSquare":
            return HiMiniCodeBracketSquare;
        case "hi2:HiMiniCodeBracket":
            return HiMiniCodeBracket;
        case "hi2:HiMiniCog6Tooth":
            return HiMiniCog6Tooth;
        case "hi2:HiMiniCog8Tooth":
            return HiMiniCog8Tooth;
        case "hi2:HiMiniCog":
            return HiMiniCog;
        case "hi2:HiMiniCommandLine":
            return HiMiniCommandLine;
        case "hi2:HiMiniComputerDesktop":
            return HiMiniComputerDesktop;
        case "hi2:HiMiniCpuChip":
            return HiMiniCpuChip;
        case "hi2:HiMiniCreditCard":
            return HiMiniCreditCard;
        case "hi2:HiMiniCubeTransparent":
            return HiMiniCubeTransparent;
        case "hi2:HiMiniCube":
            return HiMiniCube;
        case "hi2:HiMiniCurrencyBangladeshi":
            return HiMiniCurrencyBangladeshi;
        case "hi2:HiMiniCurrencyDollar":
            return HiMiniCurrencyDollar;
        case "hi2:HiMiniCurrencyEuro":
            return HiMiniCurrencyEuro;
        case "hi2:HiMiniCurrencyPound":
            return HiMiniCurrencyPound;
        case "hi2:HiMiniCurrencyRupee":
            return HiMiniCurrencyRupee;
        case "hi2:HiMiniCurrencyYen":
            return HiMiniCurrencyYen;
        case "hi2:HiMiniCursorArrowRays":
            return HiMiniCursorArrowRays;
        case "hi2:HiMiniCursorArrowRipple":
            return HiMiniCursorArrowRipple;
        case "hi2:HiMiniDevicePhoneMobile":
            return HiMiniDevicePhoneMobile;
        case "hi2:HiMiniDeviceTablet":
            return HiMiniDeviceTablet;
        case "hi2:HiMiniDivide":
            return HiMiniDivide;
        case "hi2:HiMiniDocumentArrowDown":
            return HiMiniDocumentArrowDown;
        case "hi2:HiMiniDocumentArrowUp":
            return HiMiniDocumentArrowUp;
        case "hi2:HiMiniDocumentChartBar":
            return HiMiniDocumentChartBar;
        case "hi2:HiMiniDocumentCheck":
            return HiMiniDocumentCheck;
        case "hi2:HiMiniDocumentCurrencyBangladeshi":
            return HiMiniDocumentCurrencyBangladeshi;
        case "hi2:HiMiniDocumentCurrencyDollar":
            return HiMiniDocumentCurrencyDollar;
        case "hi2:HiMiniDocumentCurrencyEuro":
            return HiMiniDocumentCurrencyEuro;
        case "hi2:HiMiniDocumentCurrencyPound":
            return HiMiniDocumentCurrencyPound;
        case "hi2:HiMiniDocumentCurrencyRupee":
            return HiMiniDocumentCurrencyRupee;
        case "hi2:HiMiniDocumentCurrencyYen":
            return HiMiniDocumentCurrencyYen;
        case "hi2:HiMiniDocumentDuplicate":
            return HiMiniDocumentDuplicate;
        case "hi2:HiMiniDocumentMagnifyingGlass":
            return HiMiniDocumentMagnifyingGlass;
        case "hi2:HiMiniDocumentMinus":
            return HiMiniDocumentMinus;
        case "hi2:HiMiniDocumentPlus":
            return HiMiniDocumentPlus;
        case "hi2:HiMiniDocumentText":
            return HiMiniDocumentText;
        case "hi2:HiMiniDocument":
            return HiMiniDocument;
        case "hi2:HiMiniEllipsisHorizontalCircle":
            return HiMiniEllipsisHorizontalCircle;
        case "hi2:HiMiniEllipsisHorizontal":
            return HiMiniEllipsisHorizontal;
        case "hi2:HiMiniEllipsisVertical":
            return HiMiniEllipsisVertical;
        case "hi2:HiMiniEnvelopeOpen":
            return HiMiniEnvelopeOpen;
        case "hi2:HiMiniEnvelope":
            return HiMiniEnvelope;
        case "hi2:HiMiniEquals":
            return HiMiniEquals;
        case "hi2:HiMiniExclamationCircle":
            return HiMiniExclamationCircle;
        case "hi2:HiMiniExclamationTriangle":
            return HiMiniExclamationTriangle;
        case "hi2:HiMiniEyeDropper":
            return HiMiniEyeDropper;
        case "hi2:HiMiniEyeSlash":
            return HiMiniEyeSlash;
        case "hi2:HiMiniEye":
            return HiMiniEye;
        case "hi2:HiMiniFaceFrown":
            return HiMiniFaceFrown;
        case "hi2:HiMiniFaceSmile":
            return HiMiniFaceSmile;
        case "hi2:HiMiniFilm":
            return HiMiniFilm;
        case "hi2:HiMiniFingerPrint":
            return HiMiniFingerPrint;
        case "hi2:HiMiniFire":
            return HiMiniFire;
        case "hi2:HiMiniFlag":
            return HiMiniFlag;
        case "hi2:HiMiniFolderArrowDown":
            return HiMiniFolderArrowDown;
        case "hi2:HiMiniFolderMinus":
            return HiMiniFolderMinus;
        case "hi2:HiMiniFolderOpen":
            return HiMiniFolderOpen;
        case "hi2:HiMiniFolderPlus":
            return HiMiniFolderPlus;
        case "hi2:HiMiniFolder":
            return HiMiniFolder;
        case "hi2:HiMiniForward":
            return HiMiniForward;
        case "hi2:HiMiniFunnel":
            return HiMiniFunnel;
        case "hi2:HiMiniGif":
            return HiMiniGif;
        case "hi2:HiMiniGiftTop":
            return HiMiniGiftTop;
        case "hi2:HiMiniGift":
            return HiMiniGift;
        case "hi2:HiMiniGlobeAlt":
            return HiMiniGlobeAlt;
        case "hi2:HiMiniGlobeAmericas":
            return HiMiniGlobeAmericas;
        case "hi2:HiMiniGlobeAsiaAustralia":
            return HiMiniGlobeAsiaAustralia;
        case "hi2:HiMiniGlobeEuropeAfrica":
            return HiMiniGlobeEuropeAfrica;
        case "hi2:HiMiniH1":
            return HiMiniH1;
        case "hi2:HiMiniH2":
            return HiMiniH2;
        case "hi2:HiMiniH3":
            return HiMiniH3;
        case "hi2:HiMiniHandRaised":
            return HiMiniHandRaised;
        case "hi2:HiMiniHandThumbDown":
            return HiMiniHandThumbDown;
        case "hi2:HiMiniHandThumbUp":
            return HiMiniHandThumbUp;
        case "hi2:HiMiniHashtag":
            return HiMiniHashtag;
        case "hi2:HiMiniHeart":
            return HiMiniHeart;
        case "hi2:HiMiniHomeModern":
            return HiMiniHomeModern;
        case "hi2:HiMiniHome":
            return HiMiniHome;
        case "hi2:HiMiniIdentification":
            return HiMiniIdentification;
        case "hi2:HiMiniInboxArrowDown":
            return HiMiniInboxArrowDown;
        case "hi2:HiMiniInboxStack":
            return HiMiniInboxStack;
        case "hi2:HiMiniInbox":
            return HiMiniInbox;
        case "hi2:HiMiniInformationCircle":
            return HiMiniInformationCircle;
        case "hi2:HiMiniItalic":
            return HiMiniItalic;
        case "hi2:HiMiniKey":
            return HiMiniKey;
        case "hi2:HiMiniLanguage":
            return HiMiniLanguage;
        case "hi2:HiMiniLifebuoy":
            return HiMiniLifebuoy;
        case "hi2:HiMiniLightBulb":
            return HiMiniLightBulb;
        case "hi2:HiMiniLinkSlash":
            return HiMiniLinkSlash;
        case "hi2:HiMiniLink":
            return HiMiniLink;
        case "hi2:HiMiniListBullet":
            return HiMiniListBullet;
        case "hi2:HiMiniLockClosed":
            return HiMiniLockClosed;
        case "hi2:HiMiniLockOpen":
            return HiMiniLockOpen;
        case "hi2:HiMiniMagnifyingGlassCircle":
            return HiMiniMagnifyingGlassCircle;
        case "hi2:HiMiniMagnifyingGlassMinus":
            return HiMiniMagnifyingGlassMinus;
        case "hi2:HiMiniMagnifyingGlassPlus":
            return HiMiniMagnifyingGlassPlus;
        case "hi2:HiMiniMagnifyingGlass":
            return HiMiniMagnifyingGlass;
        case "hi2:HiMiniMapPin":
            return HiMiniMapPin;
        case "hi2:HiMiniMap":
            return HiMiniMap;
        case "hi2:HiMiniMegaphone":
            return HiMiniMegaphone;
        case "hi2:HiMiniMicrophone":
            return HiMiniMicrophone;
        case "hi2:HiMiniMinusCircle":
            return HiMiniMinusCircle;
        case "hi2:HiMiniMinusSmall":
            return HiMiniMinusSmall;
        case "hi2:HiMiniMinus":
            return HiMiniMinus;
        case "hi2:HiMiniMoon":
            return HiMiniMoon;
        case "hi2:HiMiniMusicalNote":
            return HiMiniMusicalNote;
        case "hi2:HiMiniNewspaper":
            return HiMiniNewspaper;
        case "hi2:HiMiniNoSymbol":
            return HiMiniNoSymbol;
        case "hi2:HiMiniNumberedList":
            return HiMiniNumberedList;
        case "hi2:HiMiniPaintBrush":
            return HiMiniPaintBrush;
        case "hi2:HiMiniPaperAirplane":
            return HiMiniPaperAirplane;
        case "hi2:HiMiniPaperClip":
            return HiMiniPaperClip;
        case "hi2:HiMiniPauseCircle":
            return HiMiniPauseCircle;
        case "hi2:HiMiniPause":
            return HiMiniPause;
        case "hi2:HiMiniPencilSquare":
            return HiMiniPencilSquare;
        case "hi2:HiMiniPencil":
            return HiMiniPencil;
        case "hi2:HiMiniPercentBadge":
            return HiMiniPercentBadge;
        case "hi2:HiMiniPhoneArrowDownLeft":
            return HiMiniPhoneArrowDownLeft;
        case "hi2:HiMiniPhoneArrowUpRight":
            return HiMiniPhoneArrowUpRight;
        case "hi2:HiMiniPhoneXMark":
            return HiMiniPhoneXMark;
        case "hi2:HiMiniPhone":
            return HiMiniPhone;
        case "hi2:HiMiniPhoto":
            return HiMiniPhoto;
        case "hi2:HiMiniPlayCircle":
            return HiMiniPlayCircle;
        case "hi2:HiMiniPlayPause":
            return HiMiniPlayPause;
        case "hi2:HiMiniPlay":
            return HiMiniPlay;
        case "hi2:HiMiniPlusCircle":
            return HiMiniPlusCircle;
        case "hi2:HiMiniPlusSmall":
            return HiMiniPlusSmall;
        case "hi2:HiMiniPlus":
            return HiMiniPlus;
        case "hi2:HiMiniPower":
            return HiMiniPower;
        case "hi2:HiMiniPresentationChartBar":
            return HiMiniPresentationChartBar;
        case "hi2:HiMiniPresentationChartLine":
            return HiMiniPresentationChartLine;
        case "hi2:HiMiniPrinter":
            return HiMiniPrinter;
        case "hi2:HiMiniPuzzlePiece":
            return HiMiniPuzzlePiece;
        case "hi2:HiMiniQrCode":
            return HiMiniQrCode;
        case "hi2:HiMiniQuestionMarkCircle":
            return HiMiniQuestionMarkCircle;
        case "hi2:HiMiniQueueList":
            return HiMiniQueueList;
        case "hi2:HiMiniRadio":
            return HiMiniRadio;
        case "hi2:HiMiniReceiptPercent":
            return HiMiniReceiptPercent;
        case "hi2:HiMiniReceiptRefund":
            return HiMiniReceiptRefund;
        case "hi2:HiMiniRectangleGroup":
            return HiMiniRectangleGroup;
        case "hi2:HiMiniRectangleStack":
            return HiMiniRectangleStack;
        case "hi2:HiMiniRocketLaunch":
            return HiMiniRocketLaunch;
        case "hi2:HiMiniRss":
            return HiMiniRss;
        case "hi2:HiMiniScale":
            return HiMiniScale;
        case "hi2:HiMiniScissors":
            return HiMiniScissors;
        case "hi2:HiMiniServerStack":
            return HiMiniServerStack;
        case "hi2:HiMiniServer":
            return HiMiniServer;
        case "hi2:HiMiniShare":
            return HiMiniShare;
        case "hi2:HiMiniShieldCheck":
            return HiMiniShieldCheck;
        case "hi2:HiMiniShieldExclamation":
            return HiMiniShieldExclamation;
        case "hi2:HiMiniShoppingBag":
            return HiMiniShoppingBag;
        case "hi2:HiMiniShoppingCart":
            return HiMiniShoppingCart;
        case "hi2:HiMiniSignalSlash":
            return HiMiniSignalSlash;
        case "hi2:HiMiniSignal":
            return HiMiniSignal;
        case "hi2:HiMiniSlash":
            return HiMiniSlash;
        case "hi2:HiMiniSparkles":
            return HiMiniSparkles;
        case "hi2:HiMiniSpeakerWave":
            return HiMiniSpeakerWave;
        case "hi2:HiMiniSpeakerXMark":
            return HiMiniSpeakerXMark;
        case "hi2:HiMiniSquare2Stack":
            return HiMiniSquare2Stack;
        case "hi2:HiMiniSquare3Stack3D":
            return HiMiniSquare3Stack3D;
        case "hi2:HiMiniSquares2X2":
            return HiMiniSquares2X2;
        case "hi2:HiMiniSquaresPlus":
            return HiMiniSquaresPlus;
        case "hi2:HiMiniStar":
            return HiMiniStar;
        case "hi2:HiMiniStopCircle":
            return HiMiniStopCircle;
        case "hi2:HiMiniStop":
            return HiMiniStop;
        case "hi2:HiMiniStrikethrough":
            return HiMiniStrikethrough;
        case "hi2:HiMiniSun":
            return HiMiniSun;
        case "hi2:HiMiniSwatch":
            return HiMiniSwatch;
        case "hi2:HiMiniTableCells":
            return HiMiniTableCells;
        case "hi2:HiMiniTag":
            return HiMiniTag;
        case "hi2:HiMiniTicket":
            return HiMiniTicket;
        case "hi2:HiMiniTrash":
            return HiMiniTrash;
        case "hi2:HiMiniTrophy":
            return HiMiniTrophy;
        case "hi2:HiMiniTruck":
            return HiMiniTruck;
        case "hi2:HiMiniTv":
            return HiMiniTv;
        case "hi2:HiMiniUnderline":
            return HiMiniUnderline;
        case "hi2:HiMiniUserCircle":
            return HiMiniUserCircle;
        case "hi2:HiMiniUserGroup":
            return HiMiniUserGroup;
        case "hi2:HiMiniUserMinus":
            return HiMiniUserMinus;
        case "hi2:HiMiniUserPlus":
            return HiMiniUserPlus;
        case "hi2:HiMiniUser":
            return HiMiniUser;
        case "hi2:HiMiniUsers":
            return HiMiniUsers;
        case "hi2:HiMiniVariable":
            return HiMiniVariable;
        case "hi2:HiMiniVideoCameraSlash":
            return HiMiniVideoCameraSlash;
        case "hi2:HiMiniVideoCamera":
            return HiMiniVideoCamera;
        case "hi2:HiMiniViewColumns":
            return HiMiniViewColumns;
        case "hi2:HiMiniViewfinderCircle":
            return HiMiniViewfinderCircle;
        case "hi2:HiMiniWallet":
            return HiMiniWallet;
        case "hi2:HiMiniWifi":
            return HiMiniWifi;
        case "hi2:HiMiniWindow":
            return HiMiniWindow;
        case "hi2:HiMiniWrenchScrewdriver":
            return HiMiniWrenchScrewdriver;
        case "hi2:HiMiniWrench":
            return HiMiniWrench;
        case "hi2:HiMiniXCircle":
            return HiMiniXCircle;
        case "hi2:HiMiniXMark":
            return HiMiniXMark;
    }
}
