import type {IconType} from "react-icons";

import {
    HiAcademicCap,
    HiAdjustments,
    HiAnnotation,
    HiArchive,
    HiArrowCircleDown,
    HiArrowCircleLeft,
    HiArrowCircleRight,
    HiArrowCircleUp,
    HiArrowDown,
    HiArrowLeft,
    HiArrowNarrowDown,
    HiArrowNarrowLeft,
    HiArrowNarrowRight,
    HiArrowNarrowUp,
    HiArrowRight,
    HiArrowSmDown,
    HiArrowSmLeft,
    HiArrowSmRight,
    HiArrowSmUp,
    HiArrowUp,
    HiArrowsExpand,
    HiAtSymbol,
    HiBackspace,
    HiBadgeCheck,
    HiBan,
    HiBeaker,
    HiBell,
    HiBookOpen,
    HiBookmarkAlt,
    HiBookmark,
    HiBriefcase,
    HiCake,
    HiCalculator,
    HiCalendar,
    HiCamera,
    HiCash,
    HiChartBar,
    HiChartPie,
    HiChartSquareBar,
    HiChatAlt2,
    HiChatAlt,
    HiChat,
    HiCheckCircle,
    HiCheck,
    HiChevronDoubleDown,
    HiChevronDoubleLeft,
    HiChevronDoubleRight,
    HiChevronDoubleUp,
    HiChevronDown,
    HiChevronLeft,
    HiChevronRight,
    HiChevronUp,
    HiChip,
    HiClipboardCheck,
    HiClipboardCopy,
    HiClipboardList,
    HiClipboard,
    HiClock,
    HiCloudDownload,
    HiCloudUpload,
    HiCloud,
    HiCode,
    HiCog,
    HiCollection,
    HiColorSwatch,
    HiCreditCard,
    HiCubeTransparent,
    HiCube,
    HiCurrencyBangladeshi,
    HiCurrencyDollar,
    HiCurrencyEuro,
    HiCurrencyPound,
    HiCurrencyRupee,
    HiCurrencyYen,
    HiCursorClick,
    HiDatabase,
    HiDesktopComputer,
    HiDeviceMobile,
    HiDeviceTablet,
    HiDocumentAdd,
    HiDocumentDownload,
    HiDocumentDuplicate,
    HiDocumentRemove,
    HiDocumentReport,
    HiDocumentSearch,
    HiDocumentText,
    HiDocument,
    HiDotsCircleHorizontal,
    HiDotsHorizontal,
    HiDotsVertical,
    HiDownload,
    HiDuplicate,
    HiEmojiHappy,
    HiEmojiSad,
    HiExclamationCircle,
    HiExclamation,
    HiExternalLink,
    HiEyeOff,
    HiEye,
    HiFastForward,
    HiFilm,
    HiFilter,
    HiFingerPrint,
    HiFire,
    HiFlag,
    HiFolderAdd,
    HiFolderDownload,
    HiFolderOpen,
    HiFolderRemove,
    HiFolder,
    HiGift,
    HiGlobeAlt,
    HiGlobe,
    HiHand,
    HiHashtag,
    HiHeart,
    HiHome,
    HiIdentification,
    HiInboxIn,
    HiInbox,
    HiInformationCircle,
    HiKey,
    HiLibrary,
    HiLightBulb,
    HiLightningBolt,
    HiLink,
    HiLocationMarker,
    HiLockClosed,
    HiLockOpen,
    HiLogin,
    HiLogout,
    HiMailOpen,
    HiMail,
    HiMap,
    HiMenuAlt1,
    HiMenuAlt2,
    HiMenuAlt3,
    HiMenuAlt4,
    HiMenu,
    HiMicrophone,
    HiMinusCircle,
    HiMinusSm,
    HiMinus,
    HiMoon,
    HiMusicNote,
    HiNewspaper,
    HiOfficeBuilding,
    HiPaperAirplane,
    HiPaperClip,
    HiPause,
    HiPencilAlt,
    HiPencil,
    HiPhoneIncoming,
    HiPhoneMissedCall,
    HiPhoneOutgoing,
    HiPhone,
    HiPhotograph,
    HiPlay,
    HiPlusCircle,
    HiPlusSm,
    HiPlus,
    HiPresentationChartBar,
    HiPresentationChartLine,
    HiPrinter,
    HiPuzzle,
    HiQrcode,
    HiQuestionMarkCircle,
    HiReceiptRefund,
    HiReceiptTax,
    HiRefresh,
    HiReply,
    HiRewind,
    HiRss,
    HiSaveAs,
    HiSave,
    HiScale,
    HiScissors,
    HiSearchCircle,
    HiSearch,
    HiSelector,
    HiServer,
    HiShare,
    HiShieldCheck,
    HiShieldExclamation,
    HiShoppingBag,
    HiShoppingCart,
    HiSortAscending,
    HiSortDescending,
    HiSparkles,
    HiSpeakerphone,
    HiStar,
    HiStatusOffline,
    HiStatusOnline,
    HiStop,
    HiSun,
    HiSupport,
    HiSwitchHorizontal,
    HiSwitchVertical,
    HiTable,
    HiTag,
    HiTemplate,
    HiTerminal,
    HiThumbDown,
    HiThumbUp,
    HiTicket,
    HiTranslate,
    HiTrash,
    HiTrendingDown,
    HiTrendingUp,
    HiTruck,
    HiUpload,
    HiUserAdd,
    HiUserCircle,
    HiUserGroup,
    HiUserRemove,
    HiUser,
    HiUsers,
    HiVariable,
    HiVideoCamera,
    HiViewBoards,
    HiViewGridAdd,
    HiViewGrid,
    HiViewList,
    HiVolumeOff,
    HiVolumeUp,
    HiWifi,
    HiXCircle,
    HiX,
    HiZoomIn,
    HiZoomOut,
    HiOutlineAcademicCap,
    HiOutlineAdjustments,
    HiOutlineAnnotation,
    HiOutlineArchive,
    HiOutlineArrowCircleDown,
    HiOutlineArrowCircleLeft,
    HiOutlineArrowCircleRight,
    HiOutlineArrowCircleUp,
    HiOutlineArrowDown,
    HiOutlineArrowLeft,
    HiOutlineArrowNarrowDown,
    HiOutlineArrowNarrowLeft,
    HiOutlineArrowNarrowRight,
    HiOutlineArrowNarrowUp,
    HiOutlineArrowRight,
    HiOutlineArrowSmDown,
    HiOutlineArrowSmLeft,
    HiOutlineArrowSmRight,
    HiOutlineArrowSmUp,
    HiOutlineArrowUp,
    HiOutlineArrowsExpand,
    HiOutlineAtSymbol,
    HiOutlineBackspace,
    HiOutlineBadgeCheck,
    HiOutlineBan,
    HiOutlineBeaker,
    HiOutlineBell,
    HiOutlineBookOpen,
    HiOutlineBookmarkAlt,
    HiOutlineBookmark,
    HiOutlineBriefcase,
    HiOutlineCake,
    HiOutlineCalculator,
    HiOutlineCalendar,
    HiOutlineCamera,
    HiOutlineCash,
    HiOutlineChartBar,
    HiOutlineChartPie,
    HiOutlineChartSquareBar,
    HiOutlineChatAlt2,
    HiOutlineChatAlt,
    HiOutlineChat,
    HiOutlineCheckCircle,
    HiOutlineCheck,
    HiOutlineChevronDoubleDown,
    HiOutlineChevronDoubleLeft,
    HiOutlineChevronDoubleRight,
    HiOutlineChevronDoubleUp,
    HiOutlineChevronDown,
    HiOutlineChevronLeft,
    HiOutlineChevronRight,
    HiOutlineChevronUp,
    HiOutlineChip,
    HiOutlineClipboardCheck,
    HiOutlineClipboardCopy,
    HiOutlineClipboardList,
    HiOutlineClipboard,
    HiOutlineClock,
    HiOutlineCloudDownload,
    HiOutlineCloudUpload,
    HiOutlineCloud,
    HiOutlineCode,
    HiOutlineCog,
    HiOutlineCollection,
    HiOutlineColorSwatch,
    HiOutlineCreditCard,
    HiOutlineCubeTransparent,
    HiOutlineCube,
    HiOutlineCurrencyBangladeshi,
    HiOutlineCurrencyDollar,
    HiOutlineCurrencyEuro,
    HiOutlineCurrencyPound,
    HiOutlineCurrencyRupee,
    HiOutlineCurrencyYen,
    HiOutlineCursorClick,
    HiOutlineDatabase,
    HiOutlineDesktopComputer,
    HiOutlineDeviceMobile,
    HiOutlineDeviceTablet,
    HiOutlineDocumentAdd,
    HiOutlineDocumentDownload,
    HiOutlineDocumentDuplicate,
    HiOutlineDocumentRemove,
    HiOutlineDocumentReport,
    HiOutlineDocumentSearch,
    HiOutlineDocumentText,
    HiOutlineDocument,
    HiOutlineDotsCircleHorizontal,
    HiOutlineDotsHorizontal,
    HiOutlineDotsVertical,
    HiOutlineDownload,
    HiOutlineDuplicate,
    HiOutlineEmojiHappy,
    HiOutlineEmojiSad,
    HiOutlineExclamationCircle,
    HiOutlineExclamation,
    HiOutlineExternalLink,
    HiOutlineEyeOff,
    HiOutlineEye,
    HiOutlineFastForward,
    HiOutlineFilm,
    HiOutlineFilter,
    HiOutlineFingerPrint,
    HiOutlineFire,
    HiOutlineFlag,
    HiOutlineFolderAdd,
    HiOutlineFolderDownload,
    HiOutlineFolderOpen,
    HiOutlineFolderRemove,
    HiOutlineFolder,
    HiOutlineGift,
    HiOutlineGlobeAlt,
    HiOutlineGlobe,
    HiOutlineHand,
    HiOutlineHashtag,
    HiOutlineHeart,
    HiOutlineHome,
    HiOutlineIdentification,
    HiOutlineInboxIn,
    HiOutlineInbox,
    HiOutlineInformationCircle,
    HiOutlineKey,
    HiOutlineLibrary,
    HiOutlineLightBulb,
    HiOutlineLightningBolt,
    HiOutlineLink,
    HiOutlineLocationMarker,
    HiOutlineLockClosed,
    HiOutlineLockOpen,
    HiOutlineLogin,
    HiOutlineLogout,
    HiOutlineMailOpen,
    HiOutlineMail,
    HiOutlineMap,
    HiOutlineMenuAlt1,
    HiOutlineMenuAlt2,
    HiOutlineMenuAlt3,
    HiOutlineMenuAlt4,
    HiOutlineMenu,
    HiOutlineMicrophone,
    HiOutlineMinusCircle,
    HiOutlineMinusSm,
    HiOutlineMinus,
    HiOutlineMoon,
    HiOutlineMusicNote,
    HiOutlineNewspaper,
    HiOutlineOfficeBuilding,
    HiOutlinePaperAirplane,
    HiOutlinePaperClip,
    HiOutlinePause,
    HiOutlinePencilAlt,
    HiOutlinePencil,
    HiOutlinePhoneIncoming,
    HiOutlinePhoneMissedCall,
    HiOutlinePhoneOutgoing,
    HiOutlinePhone,
    HiOutlinePhotograph,
    HiOutlinePlay,
    HiOutlinePlusCircle,
    HiOutlinePlusSm,
    HiOutlinePlus,
    HiOutlinePresentationChartBar,
    HiOutlinePresentationChartLine,
    HiOutlinePrinter,
    HiOutlinePuzzle,
    HiOutlineQrcode,
    HiOutlineQuestionMarkCircle,
    HiOutlineReceiptRefund,
    HiOutlineReceiptTax,
    HiOutlineRefresh,
    HiOutlineReply,
    HiOutlineRewind,
    HiOutlineRss,
    HiOutlineSaveAs,
    HiOutlineSave,
    HiOutlineScale,
    HiOutlineScissors,
    HiOutlineSearchCircle,
    HiOutlineSearch,
    HiOutlineSelector,
    HiOutlineServer,
    HiOutlineShare,
    HiOutlineShieldCheck,
    HiOutlineShieldExclamation,
    HiOutlineShoppingBag,
    HiOutlineShoppingCart,
    HiOutlineSortAscending,
    HiOutlineSortDescending,
    HiOutlineSparkles,
    HiOutlineSpeakerphone,
    HiOutlineStar,
    HiOutlineStatusOffline,
    HiOutlineStatusOnline,
    HiOutlineStop,
    HiOutlineSun,
    HiOutlineSupport,
    HiOutlineSwitchHorizontal,
    HiOutlineSwitchVertical,
    HiOutlineTable,
    HiOutlineTag,
    HiOutlineTemplate,
    HiOutlineTerminal,
    HiOutlineThumbDown,
    HiOutlineThumbUp,
    HiOutlineTicket,
    HiOutlineTranslate,
    HiOutlineTrash,
    HiOutlineTrendingDown,
    HiOutlineTrendingUp,
    HiOutlineTruck,
    HiOutlineUpload,
    HiOutlineUserAdd,
    HiOutlineUserCircle,
    HiOutlineUserGroup,
    HiOutlineUserRemove,
    HiOutlineUser,
    HiOutlineUsers,
    HiOutlineVariable,
    HiOutlineVideoCamera,
    HiOutlineViewBoards,
    HiOutlineViewGridAdd,
    HiOutlineViewGrid,
    HiOutlineViewList,
    HiOutlineVolumeOff,
    HiOutlineVolumeUp,
    HiOutlineWifi,
    HiOutlineXCircle,
    HiOutlineX,
    HiOutlineZoomIn,
    HiOutlineZoomOut,
} from "react-icons/hi"

export function nameToReactIcon_hi_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "hi:HiAcademicCap":
            return HiAcademicCap;
        case "hi:HiAdjustments":
            return HiAdjustments;
        case "hi:HiAnnotation":
            return HiAnnotation;
        case "hi:HiArchive":
            return HiArchive;
        case "hi:HiArrowCircleDown":
            return HiArrowCircleDown;
        case "hi:HiArrowCircleLeft":
            return HiArrowCircleLeft;
        case "hi:HiArrowCircleRight":
            return HiArrowCircleRight;
        case "hi:HiArrowCircleUp":
            return HiArrowCircleUp;
        case "hi:HiArrowDown":
            return HiArrowDown;
        case "hi:HiArrowLeft":
            return HiArrowLeft;
        case "hi:HiArrowNarrowDown":
            return HiArrowNarrowDown;
        case "hi:HiArrowNarrowLeft":
            return HiArrowNarrowLeft;
        case "hi:HiArrowNarrowRight":
            return HiArrowNarrowRight;
        case "hi:HiArrowNarrowUp":
            return HiArrowNarrowUp;
        case "hi:HiArrowRight":
            return HiArrowRight;
        case "hi:HiArrowSmDown":
            return HiArrowSmDown;
        case "hi:HiArrowSmLeft":
            return HiArrowSmLeft;
        case "hi:HiArrowSmRight":
            return HiArrowSmRight;
        case "hi:HiArrowSmUp":
            return HiArrowSmUp;
        case "hi:HiArrowUp":
            return HiArrowUp;
        case "hi:HiArrowsExpand":
            return HiArrowsExpand;
        case "hi:HiAtSymbol":
            return HiAtSymbol;
        case "hi:HiBackspace":
            return HiBackspace;
        case "hi:HiBadgeCheck":
            return HiBadgeCheck;
        case "hi:HiBan":
            return HiBan;
        case "hi:HiBeaker":
            return HiBeaker;
        case "hi:HiBell":
            return HiBell;
        case "hi:HiBookOpen":
            return HiBookOpen;
        case "hi:HiBookmarkAlt":
            return HiBookmarkAlt;
        case "hi:HiBookmark":
            return HiBookmark;
        case "hi:HiBriefcase":
            return HiBriefcase;
        case "hi:HiCake":
            return HiCake;
        case "hi:HiCalculator":
            return HiCalculator;
        case "hi:HiCalendar":
            return HiCalendar;
        case "hi:HiCamera":
            return HiCamera;
        case "hi:HiCash":
            return HiCash;
        case "hi:HiChartBar":
            return HiChartBar;
        case "hi:HiChartPie":
            return HiChartPie;
        case "hi:HiChartSquareBar":
            return HiChartSquareBar;
        case "hi:HiChatAlt2":
            return HiChatAlt2;
        case "hi:HiChatAlt":
            return HiChatAlt;
        case "hi:HiChat":
            return HiChat;
        case "hi:HiCheckCircle":
            return HiCheckCircle;
        case "hi:HiCheck":
            return HiCheck;
        case "hi:HiChevronDoubleDown":
            return HiChevronDoubleDown;
        case "hi:HiChevronDoubleLeft":
            return HiChevronDoubleLeft;
        case "hi:HiChevronDoubleRight":
            return HiChevronDoubleRight;
        case "hi:HiChevronDoubleUp":
            return HiChevronDoubleUp;
        case "hi:HiChevronDown":
            return HiChevronDown;
        case "hi:HiChevronLeft":
            return HiChevronLeft;
        case "hi:HiChevronRight":
            return HiChevronRight;
        case "hi:HiChevronUp":
            return HiChevronUp;
        case "hi:HiChip":
            return HiChip;
        case "hi:HiClipboardCheck":
            return HiClipboardCheck;
        case "hi:HiClipboardCopy":
            return HiClipboardCopy;
        case "hi:HiClipboardList":
            return HiClipboardList;
        case "hi:HiClipboard":
            return HiClipboard;
        case "hi:HiClock":
            return HiClock;
        case "hi:HiCloudDownload":
            return HiCloudDownload;
        case "hi:HiCloudUpload":
            return HiCloudUpload;
        case "hi:HiCloud":
            return HiCloud;
        case "hi:HiCode":
            return HiCode;
        case "hi:HiCog":
            return HiCog;
        case "hi:HiCollection":
            return HiCollection;
        case "hi:HiColorSwatch":
            return HiColorSwatch;
        case "hi:HiCreditCard":
            return HiCreditCard;
        case "hi:HiCubeTransparent":
            return HiCubeTransparent;
        case "hi:HiCube":
            return HiCube;
        case "hi:HiCurrencyBangladeshi":
            return HiCurrencyBangladeshi;
        case "hi:HiCurrencyDollar":
            return HiCurrencyDollar;
        case "hi:HiCurrencyEuro":
            return HiCurrencyEuro;
        case "hi:HiCurrencyPound":
            return HiCurrencyPound;
        case "hi:HiCurrencyRupee":
            return HiCurrencyRupee;
        case "hi:HiCurrencyYen":
            return HiCurrencyYen;
        case "hi:HiCursorClick":
            return HiCursorClick;
        case "hi:HiDatabase":
            return HiDatabase;
        case "hi:HiDesktopComputer":
            return HiDesktopComputer;
        case "hi:HiDeviceMobile":
            return HiDeviceMobile;
        case "hi:HiDeviceTablet":
            return HiDeviceTablet;
        case "hi:HiDocumentAdd":
            return HiDocumentAdd;
        case "hi:HiDocumentDownload":
            return HiDocumentDownload;
        case "hi:HiDocumentDuplicate":
            return HiDocumentDuplicate;
        case "hi:HiDocumentRemove":
            return HiDocumentRemove;
        case "hi:HiDocumentReport":
            return HiDocumentReport;
        case "hi:HiDocumentSearch":
            return HiDocumentSearch;
        case "hi:HiDocumentText":
            return HiDocumentText;
        case "hi:HiDocument":
            return HiDocument;
        case "hi:HiDotsCircleHorizontal":
            return HiDotsCircleHorizontal;
        case "hi:HiDotsHorizontal":
            return HiDotsHorizontal;
        case "hi:HiDotsVertical":
            return HiDotsVertical;
        case "hi:HiDownload":
            return HiDownload;
        case "hi:HiDuplicate":
            return HiDuplicate;
        case "hi:HiEmojiHappy":
            return HiEmojiHappy;
        case "hi:HiEmojiSad":
            return HiEmojiSad;
        case "hi:HiExclamationCircle":
            return HiExclamationCircle;
        case "hi:HiExclamation":
            return HiExclamation;
        case "hi:HiExternalLink":
            return HiExternalLink;
        case "hi:HiEyeOff":
            return HiEyeOff;
        case "hi:HiEye":
            return HiEye;
        case "hi:HiFastForward":
            return HiFastForward;
        case "hi:HiFilm":
            return HiFilm;
        case "hi:HiFilter":
            return HiFilter;
        case "hi:HiFingerPrint":
            return HiFingerPrint;
        case "hi:HiFire":
            return HiFire;
        case "hi:HiFlag":
            return HiFlag;
        case "hi:HiFolderAdd":
            return HiFolderAdd;
        case "hi:HiFolderDownload":
            return HiFolderDownload;
        case "hi:HiFolderOpen":
            return HiFolderOpen;
        case "hi:HiFolderRemove":
            return HiFolderRemove;
        case "hi:HiFolder":
            return HiFolder;
        case "hi:HiGift":
            return HiGift;
        case "hi:HiGlobeAlt":
            return HiGlobeAlt;
        case "hi:HiGlobe":
            return HiGlobe;
        case "hi:HiHand":
            return HiHand;
        case "hi:HiHashtag":
            return HiHashtag;
        case "hi:HiHeart":
            return HiHeart;
        case "hi:HiHome":
            return HiHome;
        case "hi:HiIdentification":
            return HiIdentification;
        case "hi:HiInboxIn":
            return HiInboxIn;
        case "hi:HiInbox":
            return HiInbox;
        case "hi:HiInformationCircle":
            return HiInformationCircle;
        case "hi:HiKey":
            return HiKey;
        case "hi:HiLibrary":
            return HiLibrary;
        case "hi:HiLightBulb":
            return HiLightBulb;
        case "hi:HiLightningBolt":
            return HiLightningBolt;
        case "hi:HiLink":
            return HiLink;
        case "hi:HiLocationMarker":
            return HiLocationMarker;
        case "hi:HiLockClosed":
            return HiLockClosed;
        case "hi:HiLockOpen":
            return HiLockOpen;
        case "hi:HiLogin":
            return HiLogin;
        case "hi:HiLogout":
            return HiLogout;
        case "hi:HiMailOpen":
            return HiMailOpen;
        case "hi:HiMail":
            return HiMail;
        case "hi:HiMap":
            return HiMap;
        case "hi:HiMenuAlt1":
            return HiMenuAlt1;
        case "hi:HiMenuAlt2":
            return HiMenuAlt2;
        case "hi:HiMenuAlt3":
            return HiMenuAlt3;
        case "hi:HiMenuAlt4":
            return HiMenuAlt4;
        case "hi:HiMenu":
            return HiMenu;
        case "hi:HiMicrophone":
            return HiMicrophone;
        case "hi:HiMinusCircle":
            return HiMinusCircle;
        case "hi:HiMinusSm":
            return HiMinusSm;
        case "hi:HiMinus":
            return HiMinus;
        case "hi:HiMoon":
            return HiMoon;
        case "hi:HiMusicNote":
            return HiMusicNote;
        case "hi:HiNewspaper":
            return HiNewspaper;
        case "hi:HiOfficeBuilding":
            return HiOfficeBuilding;
        case "hi:HiPaperAirplane":
            return HiPaperAirplane;
        case "hi:HiPaperClip":
            return HiPaperClip;
        case "hi:HiPause":
            return HiPause;
        case "hi:HiPencilAlt":
            return HiPencilAlt;
        case "hi:HiPencil":
            return HiPencil;
        case "hi:HiPhoneIncoming":
            return HiPhoneIncoming;
        case "hi:HiPhoneMissedCall":
            return HiPhoneMissedCall;
        case "hi:HiPhoneOutgoing":
            return HiPhoneOutgoing;
        case "hi:HiPhone":
            return HiPhone;
        case "hi:HiPhotograph":
            return HiPhotograph;
        case "hi:HiPlay":
            return HiPlay;
        case "hi:HiPlusCircle":
            return HiPlusCircle;
        case "hi:HiPlusSm":
            return HiPlusSm;
        case "hi:HiPlus":
            return HiPlus;
        case "hi:HiPresentationChartBar":
            return HiPresentationChartBar;
        case "hi:HiPresentationChartLine":
            return HiPresentationChartLine;
        case "hi:HiPrinter":
            return HiPrinter;
        case "hi:HiPuzzle":
            return HiPuzzle;
        case "hi:HiQrcode":
            return HiQrcode;
        case "hi:HiQuestionMarkCircle":
            return HiQuestionMarkCircle;
        case "hi:HiReceiptRefund":
            return HiReceiptRefund;
        case "hi:HiReceiptTax":
            return HiReceiptTax;
        case "hi:HiRefresh":
            return HiRefresh;
        case "hi:HiReply":
            return HiReply;
        case "hi:HiRewind":
            return HiRewind;
        case "hi:HiRss":
            return HiRss;
        case "hi:HiSaveAs":
            return HiSaveAs;
        case "hi:HiSave":
            return HiSave;
        case "hi:HiScale":
            return HiScale;
        case "hi:HiScissors":
            return HiScissors;
        case "hi:HiSearchCircle":
            return HiSearchCircle;
        case "hi:HiSearch":
            return HiSearch;
        case "hi:HiSelector":
            return HiSelector;
        case "hi:HiServer":
            return HiServer;
        case "hi:HiShare":
            return HiShare;
        case "hi:HiShieldCheck":
            return HiShieldCheck;
        case "hi:HiShieldExclamation":
            return HiShieldExclamation;
        case "hi:HiShoppingBag":
            return HiShoppingBag;
        case "hi:HiShoppingCart":
            return HiShoppingCart;
        case "hi:HiSortAscending":
            return HiSortAscending;
        case "hi:HiSortDescending":
            return HiSortDescending;
        case "hi:HiSparkles":
            return HiSparkles;
        case "hi:HiSpeakerphone":
            return HiSpeakerphone;
        case "hi:HiStar":
            return HiStar;
        case "hi:HiStatusOffline":
            return HiStatusOffline;
        case "hi:HiStatusOnline":
            return HiStatusOnline;
        case "hi:HiStop":
            return HiStop;
        case "hi:HiSun":
            return HiSun;
        case "hi:HiSupport":
            return HiSupport;
        case "hi:HiSwitchHorizontal":
            return HiSwitchHorizontal;
        case "hi:HiSwitchVertical":
            return HiSwitchVertical;
        case "hi:HiTable":
            return HiTable;
        case "hi:HiTag":
            return HiTag;
        case "hi:HiTemplate":
            return HiTemplate;
        case "hi:HiTerminal":
            return HiTerminal;
        case "hi:HiThumbDown":
            return HiThumbDown;
        case "hi:HiThumbUp":
            return HiThumbUp;
        case "hi:HiTicket":
            return HiTicket;
        case "hi:HiTranslate":
            return HiTranslate;
        case "hi:HiTrash":
            return HiTrash;
        case "hi:HiTrendingDown":
            return HiTrendingDown;
        case "hi:HiTrendingUp":
            return HiTrendingUp;
        case "hi:HiTruck":
            return HiTruck;
        case "hi:HiUpload":
            return HiUpload;
        case "hi:HiUserAdd":
            return HiUserAdd;
        case "hi:HiUserCircle":
            return HiUserCircle;
        case "hi:HiUserGroup":
            return HiUserGroup;
        case "hi:HiUserRemove":
            return HiUserRemove;
        case "hi:HiUser":
            return HiUser;
        case "hi:HiUsers":
            return HiUsers;
        case "hi:HiVariable":
            return HiVariable;
        case "hi:HiVideoCamera":
            return HiVideoCamera;
        case "hi:HiViewBoards":
            return HiViewBoards;
        case "hi:HiViewGridAdd":
            return HiViewGridAdd;
        case "hi:HiViewGrid":
            return HiViewGrid;
        case "hi:HiViewList":
            return HiViewList;
        case "hi:HiVolumeOff":
            return HiVolumeOff;
        case "hi:HiVolumeUp":
            return HiVolumeUp;
        case "hi:HiWifi":
            return HiWifi;
        case "hi:HiXCircle":
            return HiXCircle;
        case "hi:HiX":
            return HiX;
        case "hi:HiZoomIn":
            return HiZoomIn;
        case "hi:HiZoomOut":
            return HiZoomOut;
        case "hi:HiOutlineAcademicCap":
            return HiOutlineAcademicCap;
        case "hi:HiOutlineAdjustments":
            return HiOutlineAdjustments;
        case "hi:HiOutlineAnnotation":
            return HiOutlineAnnotation;
        case "hi:HiOutlineArchive":
            return HiOutlineArchive;
        case "hi:HiOutlineArrowCircleDown":
            return HiOutlineArrowCircleDown;
        case "hi:HiOutlineArrowCircleLeft":
            return HiOutlineArrowCircleLeft;
        case "hi:HiOutlineArrowCircleRight":
            return HiOutlineArrowCircleRight;
        case "hi:HiOutlineArrowCircleUp":
            return HiOutlineArrowCircleUp;
        case "hi:HiOutlineArrowDown":
            return HiOutlineArrowDown;
        case "hi:HiOutlineArrowLeft":
            return HiOutlineArrowLeft;
        case "hi:HiOutlineArrowNarrowDown":
            return HiOutlineArrowNarrowDown;
        case "hi:HiOutlineArrowNarrowLeft":
            return HiOutlineArrowNarrowLeft;
        case "hi:HiOutlineArrowNarrowRight":
            return HiOutlineArrowNarrowRight;
        case "hi:HiOutlineArrowNarrowUp":
            return HiOutlineArrowNarrowUp;
        case "hi:HiOutlineArrowRight":
            return HiOutlineArrowRight;
        case "hi:HiOutlineArrowSmDown":
            return HiOutlineArrowSmDown;
        case "hi:HiOutlineArrowSmLeft":
            return HiOutlineArrowSmLeft;
        case "hi:HiOutlineArrowSmRight":
            return HiOutlineArrowSmRight;
        case "hi:HiOutlineArrowSmUp":
            return HiOutlineArrowSmUp;
        case "hi:HiOutlineArrowUp":
            return HiOutlineArrowUp;
        case "hi:HiOutlineArrowsExpand":
            return HiOutlineArrowsExpand;
        case "hi:HiOutlineAtSymbol":
            return HiOutlineAtSymbol;
        case "hi:HiOutlineBackspace":
            return HiOutlineBackspace;
        case "hi:HiOutlineBadgeCheck":
            return HiOutlineBadgeCheck;
        case "hi:HiOutlineBan":
            return HiOutlineBan;
        case "hi:HiOutlineBeaker":
            return HiOutlineBeaker;
        case "hi:HiOutlineBell":
            return HiOutlineBell;
        case "hi:HiOutlineBookOpen":
            return HiOutlineBookOpen;
        case "hi:HiOutlineBookmarkAlt":
            return HiOutlineBookmarkAlt;
        case "hi:HiOutlineBookmark":
            return HiOutlineBookmark;
        case "hi:HiOutlineBriefcase":
            return HiOutlineBriefcase;
        case "hi:HiOutlineCake":
            return HiOutlineCake;
        case "hi:HiOutlineCalculator":
            return HiOutlineCalculator;
        case "hi:HiOutlineCalendar":
            return HiOutlineCalendar;
        case "hi:HiOutlineCamera":
            return HiOutlineCamera;
        case "hi:HiOutlineCash":
            return HiOutlineCash;
        case "hi:HiOutlineChartBar":
            return HiOutlineChartBar;
        case "hi:HiOutlineChartPie":
            return HiOutlineChartPie;
        case "hi:HiOutlineChartSquareBar":
            return HiOutlineChartSquareBar;
        case "hi:HiOutlineChatAlt2":
            return HiOutlineChatAlt2;
        case "hi:HiOutlineChatAlt":
            return HiOutlineChatAlt;
        case "hi:HiOutlineChat":
            return HiOutlineChat;
        case "hi:HiOutlineCheckCircle":
            return HiOutlineCheckCircle;
        case "hi:HiOutlineCheck":
            return HiOutlineCheck;
        case "hi:HiOutlineChevronDoubleDown":
            return HiOutlineChevronDoubleDown;
        case "hi:HiOutlineChevronDoubleLeft":
            return HiOutlineChevronDoubleLeft;
        case "hi:HiOutlineChevronDoubleRight":
            return HiOutlineChevronDoubleRight;
        case "hi:HiOutlineChevronDoubleUp":
            return HiOutlineChevronDoubleUp;
        case "hi:HiOutlineChevronDown":
            return HiOutlineChevronDown;
        case "hi:HiOutlineChevronLeft":
            return HiOutlineChevronLeft;
        case "hi:HiOutlineChevronRight":
            return HiOutlineChevronRight;
        case "hi:HiOutlineChevronUp":
            return HiOutlineChevronUp;
        case "hi:HiOutlineChip":
            return HiOutlineChip;
        case "hi:HiOutlineClipboardCheck":
            return HiOutlineClipboardCheck;
        case "hi:HiOutlineClipboardCopy":
            return HiOutlineClipboardCopy;
        case "hi:HiOutlineClipboardList":
            return HiOutlineClipboardList;
        case "hi:HiOutlineClipboard":
            return HiOutlineClipboard;
        case "hi:HiOutlineClock":
            return HiOutlineClock;
        case "hi:HiOutlineCloudDownload":
            return HiOutlineCloudDownload;
        case "hi:HiOutlineCloudUpload":
            return HiOutlineCloudUpload;
        case "hi:HiOutlineCloud":
            return HiOutlineCloud;
        case "hi:HiOutlineCode":
            return HiOutlineCode;
        case "hi:HiOutlineCog":
            return HiOutlineCog;
        case "hi:HiOutlineCollection":
            return HiOutlineCollection;
        case "hi:HiOutlineColorSwatch":
            return HiOutlineColorSwatch;
        case "hi:HiOutlineCreditCard":
            return HiOutlineCreditCard;
        case "hi:HiOutlineCubeTransparent":
            return HiOutlineCubeTransparent;
        case "hi:HiOutlineCube":
            return HiOutlineCube;
        case "hi:HiOutlineCurrencyBangladeshi":
            return HiOutlineCurrencyBangladeshi;
        case "hi:HiOutlineCurrencyDollar":
            return HiOutlineCurrencyDollar;
        case "hi:HiOutlineCurrencyEuro":
            return HiOutlineCurrencyEuro;
        case "hi:HiOutlineCurrencyPound":
            return HiOutlineCurrencyPound;
        case "hi:HiOutlineCurrencyRupee":
            return HiOutlineCurrencyRupee;
        case "hi:HiOutlineCurrencyYen":
            return HiOutlineCurrencyYen;
        case "hi:HiOutlineCursorClick":
            return HiOutlineCursorClick;
        case "hi:HiOutlineDatabase":
            return HiOutlineDatabase;
        case "hi:HiOutlineDesktopComputer":
            return HiOutlineDesktopComputer;
        case "hi:HiOutlineDeviceMobile":
            return HiOutlineDeviceMobile;
        case "hi:HiOutlineDeviceTablet":
            return HiOutlineDeviceTablet;
        case "hi:HiOutlineDocumentAdd":
            return HiOutlineDocumentAdd;
        case "hi:HiOutlineDocumentDownload":
            return HiOutlineDocumentDownload;
        case "hi:HiOutlineDocumentDuplicate":
            return HiOutlineDocumentDuplicate;
        case "hi:HiOutlineDocumentRemove":
            return HiOutlineDocumentRemove;
        case "hi:HiOutlineDocumentReport":
            return HiOutlineDocumentReport;
        case "hi:HiOutlineDocumentSearch":
            return HiOutlineDocumentSearch;
        case "hi:HiOutlineDocumentText":
            return HiOutlineDocumentText;
        case "hi:HiOutlineDocument":
            return HiOutlineDocument;
        case "hi:HiOutlineDotsCircleHorizontal":
            return HiOutlineDotsCircleHorizontal;
        case "hi:HiOutlineDotsHorizontal":
            return HiOutlineDotsHorizontal;
        case "hi:HiOutlineDotsVertical":
            return HiOutlineDotsVertical;
        case "hi:HiOutlineDownload":
            return HiOutlineDownload;
        case "hi:HiOutlineDuplicate":
            return HiOutlineDuplicate;
        case "hi:HiOutlineEmojiHappy":
            return HiOutlineEmojiHappy;
        case "hi:HiOutlineEmojiSad":
            return HiOutlineEmojiSad;
        case "hi:HiOutlineExclamationCircle":
            return HiOutlineExclamationCircle;
        case "hi:HiOutlineExclamation":
            return HiOutlineExclamation;
        case "hi:HiOutlineExternalLink":
            return HiOutlineExternalLink;
        case "hi:HiOutlineEyeOff":
            return HiOutlineEyeOff;
        case "hi:HiOutlineEye":
            return HiOutlineEye;
        case "hi:HiOutlineFastForward":
            return HiOutlineFastForward;
        case "hi:HiOutlineFilm":
            return HiOutlineFilm;
        case "hi:HiOutlineFilter":
            return HiOutlineFilter;
        case "hi:HiOutlineFingerPrint":
            return HiOutlineFingerPrint;
        case "hi:HiOutlineFire":
            return HiOutlineFire;
        case "hi:HiOutlineFlag":
            return HiOutlineFlag;
        case "hi:HiOutlineFolderAdd":
            return HiOutlineFolderAdd;
        case "hi:HiOutlineFolderDownload":
            return HiOutlineFolderDownload;
        case "hi:HiOutlineFolderOpen":
            return HiOutlineFolderOpen;
        case "hi:HiOutlineFolderRemove":
            return HiOutlineFolderRemove;
        case "hi:HiOutlineFolder":
            return HiOutlineFolder;
        case "hi:HiOutlineGift":
            return HiOutlineGift;
        case "hi:HiOutlineGlobeAlt":
            return HiOutlineGlobeAlt;
        case "hi:HiOutlineGlobe":
            return HiOutlineGlobe;
        case "hi:HiOutlineHand":
            return HiOutlineHand;
        case "hi:HiOutlineHashtag":
            return HiOutlineHashtag;
        case "hi:HiOutlineHeart":
            return HiOutlineHeart;
        case "hi:HiOutlineHome":
            return HiOutlineHome;
        case "hi:HiOutlineIdentification":
            return HiOutlineIdentification;
        case "hi:HiOutlineInboxIn":
            return HiOutlineInboxIn;
        case "hi:HiOutlineInbox":
            return HiOutlineInbox;
        case "hi:HiOutlineInformationCircle":
            return HiOutlineInformationCircle;
        case "hi:HiOutlineKey":
            return HiOutlineKey;
        case "hi:HiOutlineLibrary":
            return HiOutlineLibrary;
        case "hi:HiOutlineLightBulb":
            return HiOutlineLightBulb;
        case "hi:HiOutlineLightningBolt":
            return HiOutlineLightningBolt;
        case "hi:HiOutlineLink":
            return HiOutlineLink;
        case "hi:HiOutlineLocationMarker":
            return HiOutlineLocationMarker;
        case "hi:HiOutlineLockClosed":
            return HiOutlineLockClosed;
        case "hi:HiOutlineLockOpen":
            return HiOutlineLockOpen;
        case "hi:HiOutlineLogin":
            return HiOutlineLogin;
        case "hi:HiOutlineLogout":
            return HiOutlineLogout;
        case "hi:HiOutlineMailOpen":
            return HiOutlineMailOpen;
        case "hi:HiOutlineMail":
            return HiOutlineMail;
        case "hi:HiOutlineMap":
            return HiOutlineMap;
        case "hi:HiOutlineMenuAlt1":
            return HiOutlineMenuAlt1;
        case "hi:HiOutlineMenuAlt2":
            return HiOutlineMenuAlt2;
        case "hi:HiOutlineMenuAlt3":
            return HiOutlineMenuAlt3;
        case "hi:HiOutlineMenuAlt4":
            return HiOutlineMenuAlt4;
        case "hi:HiOutlineMenu":
            return HiOutlineMenu;
        case "hi:HiOutlineMicrophone":
            return HiOutlineMicrophone;
        case "hi:HiOutlineMinusCircle":
            return HiOutlineMinusCircle;
        case "hi:HiOutlineMinusSm":
            return HiOutlineMinusSm;
        case "hi:HiOutlineMinus":
            return HiOutlineMinus;
        case "hi:HiOutlineMoon":
            return HiOutlineMoon;
        case "hi:HiOutlineMusicNote":
            return HiOutlineMusicNote;
        case "hi:HiOutlineNewspaper":
            return HiOutlineNewspaper;
        case "hi:HiOutlineOfficeBuilding":
            return HiOutlineOfficeBuilding;
        case "hi:HiOutlinePaperAirplane":
            return HiOutlinePaperAirplane;
        case "hi:HiOutlinePaperClip":
            return HiOutlinePaperClip;
        case "hi:HiOutlinePause":
            return HiOutlinePause;
        case "hi:HiOutlinePencilAlt":
            return HiOutlinePencilAlt;
        case "hi:HiOutlinePencil":
            return HiOutlinePencil;
        case "hi:HiOutlinePhoneIncoming":
            return HiOutlinePhoneIncoming;
        case "hi:HiOutlinePhoneMissedCall":
            return HiOutlinePhoneMissedCall;
        case "hi:HiOutlinePhoneOutgoing":
            return HiOutlinePhoneOutgoing;
        case "hi:HiOutlinePhone":
            return HiOutlinePhone;
        case "hi:HiOutlinePhotograph":
            return HiOutlinePhotograph;
        case "hi:HiOutlinePlay":
            return HiOutlinePlay;
        case "hi:HiOutlinePlusCircle":
            return HiOutlinePlusCircle;
        case "hi:HiOutlinePlusSm":
            return HiOutlinePlusSm;
        case "hi:HiOutlinePlus":
            return HiOutlinePlus;
        case "hi:HiOutlinePresentationChartBar":
            return HiOutlinePresentationChartBar;
        case "hi:HiOutlinePresentationChartLine":
            return HiOutlinePresentationChartLine;
        case "hi:HiOutlinePrinter":
            return HiOutlinePrinter;
        case "hi:HiOutlinePuzzle":
            return HiOutlinePuzzle;
        case "hi:HiOutlineQrcode":
            return HiOutlineQrcode;
        case "hi:HiOutlineQuestionMarkCircle":
            return HiOutlineQuestionMarkCircle;
        case "hi:HiOutlineReceiptRefund":
            return HiOutlineReceiptRefund;
        case "hi:HiOutlineReceiptTax":
            return HiOutlineReceiptTax;
        case "hi:HiOutlineRefresh":
            return HiOutlineRefresh;
        case "hi:HiOutlineReply":
            return HiOutlineReply;
        case "hi:HiOutlineRewind":
            return HiOutlineRewind;
        case "hi:HiOutlineRss":
            return HiOutlineRss;
        case "hi:HiOutlineSaveAs":
            return HiOutlineSaveAs;
        case "hi:HiOutlineSave":
            return HiOutlineSave;
        case "hi:HiOutlineScale":
            return HiOutlineScale;
        case "hi:HiOutlineScissors":
            return HiOutlineScissors;
        case "hi:HiOutlineSearchCircle":
            return HiOutlineSearchCircle;
        case "hi:HiOutlineSearch":
            return HiOutlineSearch;
        case "hi:HiOutlineSelector":
            return HiOutlineSelector;
        case "hi:HiOutlineServer":
            return HiOutlineServer;
        case "hi:HiOutlineShare":
            return HiOutlineShare;
        case "hi:HiOutlineShieldCheck":
            return HiOutlineShieldCheck;
        case "hi:HiOutlineShieldExclamation":
            return HiOutlineShieldExclamation;
        case "hi:HiOutlineShoppingBag":
            return HiOutlineShoppingBag;
        case "hi:HiOutlineShoppingCart":
            return HiOutlineShoppingCart;
        case "hi:HiOutlineSortAscending":
            return HiOutlineSortAscending;
        case "hi:HiOutlineSortDescending":
            return HiOutlineSortDescending;
        case "hi:HiOutlineSparkles":
            return HiOutlineSparkles;
        case "hi:HiOutlineSpeakerphone":
            return HiOutlineSpeakerphone;
        case "hi:HiOutlineStar":
            return HiOutlineStar;
        case "hi:HiOutlineStatusOffline":
            return HiOutlineStatusOffline;
        case "hi:HiOutlineStatusOnline":
            return HiOutlineStatusOnline;
        case "hi:HiOutlineStop":
            return HiOutlineStop;
        case "hi:HiOutlineSun":
            return HiOutlineSun;
        case "hi:HiOutlineSupport":
            return HiOutlineSupport;
        case "hi:HiOutlineSwitchHorizontal":
            return HiOutlineSwitchHorizontal;
        case "hi:HiOutlineSwitchVertical":
            return HiOutlineSwitchVertical;
        case "hi:HiOutlineTable":
            return HiOutlineTable;
        case "hi:HiOutlineTag":
            return HiOutlineTag;
        case "hi:HiOutlineTemplate":
            return HiOutlineTemplate;
        case "hi:HiOutlineTerminal":
            return HiOutlineTerminal;
        case "hi:HiOutlineThumbDown":
            return HiOutlineThumbDown;
        case "hi:HiOutlineThumbUp":
            return HiOutlineThumbUp;
        case "hi:HiOutlineTicket":
            return HiOutlineTicket;
        case "hi:HiOutlineTranslate":
            return HiOutlineTranslate;
        case "hi:HiOutlineTrash":
            return HiOutlineTrash;
        case "hi:HiOutlineTrendingDown":
            return HiOutlineTrendingDown;
        case "hi:HiOutlineTrendingUp":
            return HiOutlineTrendingUp;
        case "hi:HiOutlineTruck":
            return HiOutlineTruck;
        case "hi:HiOutlineUpload":
            return HiOutlineUpload;
        case "hi:HiOutlineUserAdd":
            return HiOutlineUserAdd;
        case "hi:HiOutlineUserCircle":
            return HiOutlineUserCircle;
        case "hi:HiOutlineUserGroup":
            return HiOutlineUserGroup;
        case "hi:HiOutlineUserRemove":
            return HiOutlineUserRemove;
        case "hi:HiOutlineUser":
            return HiOutlineUser;
        case "hi:HiOutlineUsers":
            return HiOutlineUsers;
        case "hi:HiOutlineVariable":
            return HiOutlineVariable;
        case "hi:HiOutlineVideoCamera":
            return HiOutlineVideoCamera;
        case "hi:HiOutlineViewBoards":
            return HiOutlineViewBoards;
        case "hi:HiOutlineViewGridAdd":
            return HiOutlineViewGridAdd;
        case "hi:HiOutlineViewGrid":
            return HiOutlineViewGrid;
        case "hi:HiOutlineViewList":
            return HiOutlineViewList;
        case "hi:HiOutlineVolumeOff":
            return HiOutlineVolumeOff;
        case "hi:HiOutlineVolumeUp":
            return HiOutlineVolumeUp;
        case "hi:HiOutlineWifi":
            return HiOutlineWifi;
        case "hi:HiOutlineXCircle":
            return HiOutlineXCircle;
        case "hi:HiOutlineX":
            return HiOutlineX;
        case "hi:HiOutlineZoomIn":
            return HiOutlineZoomIn;
        case "hi:HiOutlineZoomOut":
            return HiOutlineZoomOut;
    }
}
