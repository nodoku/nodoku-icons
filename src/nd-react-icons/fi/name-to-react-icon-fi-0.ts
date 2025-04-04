import type {IconType} from "react-icons";

import {
    FiActivity,
    FiAirplay,
    FiAlertCircle,
    FiAlertOctagon,
    FiAlertTriangle,
    FiAlignCenter,
    FiAlignJustify,
    FiAlignLeft,
    FiAlignRight,
    FiAnchor,
    FiAperture,
    FiArchive,
    FiArrowDownCircle,
    FiArrowDownLeft,
    FiArrowDownRight,
    FiArrowDown,
    FiArrowLeftCircle,
    FiArrowLeft,
    FiArrowRightCircle,
    FiArrowRight,
    FiArrowUpCircle,
    FiArrowUpLeft,
    FiArrowUpRight,
    FiArrowUp,
    FiAtSign,
    FiAward,
    FiBarChart2,
    FiBarChart,
    FiBatteryCharging,
    FiBattery,
    FiBellOff,
    FiBell,
    FiBluetooth,
    FiBold,
    FiBookOpen,
    FiBook,
    FiBookmark,
    FiBox,
    FiBriefcase,
    FiCalendar,
    FiCameraOff,
    FiCamera,
    FiCast,
    FiCheckCircle,
    FiCheckSquare,
    FiCheck,
    FiChevronDown,
    FiChevronLeft,
    FiChevronRight,
    FiChevronUp,
    FiChevronsDown,
    FiChevronsLeft,
    FiChevronsRight,
    FiChevronsUp,
    FiChrome,
    FiCircle,
    FiClipboard,
    FiClock,
    FiCloudDrizzle,
    FiCloudLightning,
    FiCloudOff,
    FiCloudRain,
    FiCloudSnow,
    FiCloud,
    FiCode,
    FiCodepen,
    FiCodesandbox,
    FiCoffee,
    FiColumns,
    FiCommand,
    FiCompass,
    FiCopy,
    FiCornerDownLeft,
    FiCornerDownRight,
    FiCornerLeftDown,
    FiCornerLeftUp,
    FiCornerRightDown,
    FiCornerRightUp,
    FiCornerUpLeft,
    FiCornerUpRight,
    FiCpu,
    FiCreditCard,
    FiCrop,
    FiCrosshair,
    FiDatabase,
    FiDelete,
    FiDisc,
    FiDivideCircle,
    FiDivideSquare,
    FiDivide,
    FiDollarSign,
    FiDownloadCloud,
    FiDownload,
    FiDribbble,
    FiDroplet,
    FiEdit2,
    FiEdit3,
    FiEdit,
    FiExternalLink,
    FiEyeOff,
    FiEye,
    FiFacebook,
    FiFastForward,
    FiFeather,
    FiFigma,
    FiFileMinus,
    FiFilePlus,
    FiFileText,
    FiFile,
    FiFilm,
    FiFilter,
    FiFlag,
    FiFolderMinus,
    FiFolderPlus,
    FiFolder,
    FiFramer,
    FiFrown,
    FiGift,
    FiGitBranch,
    FiGitCommit,
    FiGitMerge,
    FiGitPullRequest,
    FiGithub,
    FiGitlab,
    FiGlobe,
    FiGrid,
    FiHardDrive,
    FiHash,
    FiHeadphones,
    FiHeart,
    FiHelpCircle,
    FiHexagon,
    FiHome,
    FiImage,
    FiInbox,
    FiInfo,
    FiInstagram,
    FiItalic,
    FiKey,
    FiLayers,
    FiLayout,
    FiLifeBuoy,
    FiLink2,
    FiLink,
    FiLinkedin,
    FiList,
    FiLoader,
    FiLock,
    FiLogIn,
    FiLogOut,
    FiMail,
    FiMapPin,
    FiMap,
    FiMaximize2,
    FiMaximize,
    FiMeh,
    FiMenu,
    FiMessageCircle,
    FiMessageSquare,
    FiMicOff,
    FiMic,
    FiMinimize2,
    FiMinimize,
    FiMinusCircle,
    FiMinusSquare,
    FiMinus,
    FiMonitor,
    FiMoon,
    FiMoreHorizontal,
    FiMoreVertical,
    FiMousePointer,
    FiMove,
    FiMusic,
    FiNavigation2,
    FiNavigation,
    FiOctagon,
    FiPackage,
    FiPaperclip,
    FiPauseCircle,
    FiPause,
    FiPenTool,
    FiPercent,
    FiPhoneCall,
    FiPhoneForwarded,
    FiPhoneIncoming,
    FiPhoneMissed,
    FiPhoneOff,
    FiPhoneOutgoing,
    FiPhone,
    FiPieChart,
    FiPlayCircle,
    FiPlay,
    FiPlusCircle,
    FiPlusSquare,
    FiPlus,
    FiPocket,
    FiPower,
    FiPrinter,
    FiRadio,
    FiRefreshCcw,
    FiRefreshCw,
    FiRepeat,
    FiRewind,
    FiRotateCcw,
    FiRotateCw,
    FiRss,
    FiSave,
    FiScissors,
    FiSearch,
    FiSend,
    FiServer,
    FiSettings,
    FiShare2,
    FiShare,
    FiShieldOff,
    FiShield,
    FiShoppingBag,
    FiShoppingCart,
    FiShuffle,
    FiSidebar,
    FiSkipBack,
    FiSkipForward,
    FiSlack,
    FiSlash,
    FiSliders,
    FiSmartphone,
    FiSmile,
    FiSpeaker,
    FiSquare,
    FiStar,
    FiStopCircle,
    FiSun,
    FiSunrise,
    FiSunset,
    FiTable,
    FiTablet,
    FiTag,
    FiTarget,
    FiTerminal,
    FiThermometer,
    FiThumbsDown,
    FiThumbsUp,
    FiToggleLeft,
    FiToggleRight,
    FiTool,
    FiTrash2,
    FiTrash,
    FiTrello,
    FiTrendingDown,
    FiTrendingUp,
    FiTriangle,
    FiTruck,
    FiTv,
    FiTwitch,
    FiTwitter,
    FiType,
    FiUmbrella,
    FiUnderline,
    FiUnlock,
    FiUploadCloud,
    FiUpload,
    FiUserCheck,
    FiUserMinus,
    FiUserPlus,
    FiUserX,
    FiUser,
    FiUsers,
    FiVideoOff,
    FiVideo,
    FiVoicemail,
    FiVolume1,
    FiVolume2,
    FiVolumeX,
    FiVolume,
    FiWatch,
    FiWifiOff,
    FiWifi,
    FiWind,
    FiXCircle,
    FiXOctagon,
    FiXSquare,
    FiX,
    FiYoutube,
    FiZapOff,
    FiZap,
    FiZoomIn,
    FiZoomOut,
} from "react-icons/fi"

export function nameToReactIcon_fi_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "fi:FiActivity":
            return FiActivity;
        case "fi:FiAirplay":
            return FiAirplay;
        case "fi:FiAlertCircle":
            return FiAlertCircle;
        case "fi:FiAlertOctagon":
            return FiAlertOctagon;
        case "fi:FiAlertTriangle":
            return FiAlertTriangle;
        case "fi:FiAlignCenter":
            return FiAlignCenter;
        case "fi:FiAlignJustify":
            return FiAlignJustify;
        case "fi:FiAlignLeft":
            return FiAlignLeft;
        case "fi:FiAlignRight":
            return FiAlignRight;
        case "fi:FiAnchor":
            return FiAnchor;
        case "fi:FiAperture":
            return FiAperture;
        case "fi:FiArchive":
            return FiArchive;
        case "fi:FiArrowDownCircle":
            return FiArrowDownCircle;
        case "fi:FiArrowDownLeft":
            return FiArrowDownLeft;
        case "fi:FiArrowDownRight":
            return FiArrowDownRight;
        case "fi:FiArrowDown":
            return FiArrowDown;
        case "fi:FiArrowLeftCircle":
            return FiArrowLeftCircle;
        case "fi:FiArrowLeft":
            return FiArrowLeft;
        case "fi:FiArrowRightCircle":
            return FiArrowRightCircle;
        case "fi:FiArrowRight":
            return FiArrowRight;
        case "fi:FiArrowUpCircle":
            return FiArrowUpCircle;
        case "fi:FiArrowUpLeft":
            return FiArrowUpLeft;
        case "fi:FiArrowUpRight":
            return FiArrowUpRight;
        case "fi:FiArrowUp":
            return FiArrowUp;
        case "fi:FiAtSign":
            return FiAtSign;
        case "fi:FiAward":
            return FiAward;
        case "fi:FiBarChart2":
            return FiBarChart2;
        case "fi:FiBarChart":
            return FiBarChart;
        case "fi:FiBatteryCharging":
            return FiBatteryCharging;
        case "fi:FiBattery":
            return FiBattery;
        case "fi:FiBellOff":
            return FiBellOff;
        case "fi:FiBell":
            return FiBell;
        case "fi:FiBluetooth":
            return FiBluetooth;
        case "fi:FiBold":
            return FiBold;
        case "fi:FiBookOpen":
            return FiBookOpen;
        case "fi:FiBook":
            return FiBook;
        case "fi:FiBookmark":
            return FiBookmark;
        case "fi:FiBox":
            return FiBox;
        case "fi:FiBriefcase":
            return FiBriefcase;
        case "fi:FiCalendar":
            return FiCalendar;
        case "fi:FiCameraOff":
            return FiCameraOff;
        case "fi:FiCamera":
            return FiCamera;
        case "fi:FiCast":
            return FiCast;
        case "fi:FiCheckCircle":
            return FiCheckCircle;
        case "fi:FiCheckSquare":
            return FiCheckSquare;
        case "fi:FiCheck":
            return FiCheck;
        case "fi:FiChevronDown":
            return FiChevronDown;
        case "fi:FiChevronLeft":
            return FiChevronLeft;
        case "fi:FiChevronRight":
            return FiChevronRight;
        case "fi:FiChevronUp":
            return FiChevronUp;
        case "fi:FiChevronsDown":
            return FiChevronsDown;
        case "fi:FiChevronsLeft":
            return FiChevronsLeft;
        case "fi:FiChevronsRight":
            return FiChevronsRight;
        case "fi:FiChevronsUp":
            return FiChevronsUp;
        case "fi:FiChrome":
            return FiChrome;
        case "fi:FiCircle":
            return FiCircle;
        case "fi:FiClipboard":
            return FiClipboard;
        case "fi:FiClock":
            return FiClock;
        case "fi:FiCloudDrizzle":
            return FiCloudDrizzle;
        case "fi:FiCloudLightning":
            return FiCloudLightning;
        case "fi:FiCloudOff":
            return FiCloudOff;
        case "fi:FiCloudRain":
            return FiCloudRain;
        case "fi:FiCloudSnow":
            return FiCloudSnow;
        case "fi:FiCloud":
            return FiCloud;
        case "fi:FiCode":
            return FiCode;
        case "fi:FiCodepen":
            return FiCodepen;
        case "fi:FiCodesandbox":
            return FiCodesandbox;
        case "fi:FiCoffee":
            return FiCoffee;
        case "fi:FiColumns":
            return FiColumns;
        case "fi:FiCommand":
            return FiCommand;
        case "fi:FiCompass":
            return FiCompass;
        case "fi:FiCopy":
            return FiCopy;
        case "fi:FiCornerDownLeft":
            return FiCornerDownLeft;
        case "fi:FiCornerDownRight":
            return FiCornerDownRight;
        case "fi:FiCornerLeftDown":
            return FiCornerLeftDown;
        case "fi:FiCornerLeftUp":
            return FiCornerLeftUp;
        case "fi:FiCornerRightDown":
            return FiCornerRightDown;
        case "fi:FiCornerRightUp":
            return FiCornerRightUp;
        case "fi:FiCornerUpLeft":
            return FiCornerUpLeft;
        case "fi:FiCornerUpRight":
            return FiCornerUpRight;
        case "fi:FiCpu":
            return FiCpu;
        case "fi:FiCreditCard":
            return FiCreditCard;
        case "fi:FiCrop":
            return FiCrop;
        case "fi:FiCrosshair":
            return FiCrosshair;
        case "fi:FiDatabase":
            return FiDatabase;
        case "fi:FiDelete":
            return FiDelete;
        case "fi:FiDisc":
            return FiDisc;
        case "fi:FiDivideCircle":
            return FiDivideCircle;
        case "fi:FiDivideSquare":
            return FiDivideSquare;
        case "fi:FiDivide":
            return FiDivide;
        case "fi:FiDollarSign":
            return FiDollarSign;
        case "fi:FiDownloadCloud":
            return FiDownloadCloud;
        case "fi:FiDownload":
            return FiDownload;
        case "fi:FiDribbble":
            return FiDribbble;
        case "fi:FiDroplet":
            return FiDroplet;
        case "fi:FiEdit2":
            return FiEdit2;
        case "fi:FiEdit3":
            return FiEdit3;
        case "fi:FiEdit":
            return FiEdit;
        case "fi:FiExternalLink":
            return FiExternalLink;
        case "fi:FiEyeOff":
            return FiEyeOff;
        case "fi:FiEye":
            return FiEye;
        case "fi:FiFacebook":
            return FiFacebook;
        case "fi:FiFastForward":
            return FiFastForward;
        case "fi:FiFeather":
            return FiFeather;
        case "fi:FiFigma":
            return FiFigma;
        case "fi:FiFileMinus":
            return FiFileMinus;
        case "fi:FiFilePlus":
            return FiFilePlus;
        case "fi:FiFileText":
            return FiFileText;
        case "fi:FiFile":
            return FiFile;
        case "fi:FiFilm":
            return FiFilm;
        case "fi:FiFilter":
            return FiFilter;
        case "fi:FiFlag":
            return FiFlag;
        case "fi:FiFolderMinus":
            return FiFolderMinus;
        case "fi:FiFolderPlus":
            return FiFolderPlus;
        case "fi:FiFolder":
            return FiFolder;
        case "fi:FiFramer":
            return FiFramer;
        case "fi:FiFrown":
            return FiFrown;
        case "fi:FiGift":
            return FiGift;
        case "fi:FiGitBranch":
            return FiGitBranch;
        case "fi:FiGitCommit":
            return FiGitCommit;
        case "fi:FiGitMerge":
            return FiGitMerge;
        case "fi:FiGitPullRequest":
            return FiGitPullRequest;
        case "fi:FiGithub":
            return FiGithub;
        case "fi:FiGitlab":
            return FiGitlab;
        case "fi:FiGlobe":
            return FiGlobe;
        case "fi:FiGrid":
            return FiGrid;
        case "fi:FiHardDrive":
            return FiHardDrive;
        case "fi:FiHash":
            return FiHash;
        case "fi:FiHeadphones":
            return FiHeadphones;
        case "fi:FiHeart":
            return FiHeart;
        case "fi:FiHelpCircle":
            return FiHelpCircle;
        case "fi:FiHexagon":
            return FiHexagon;
        case "fi:FiHome":
            return FiHome;
        case "fi:FiImage":
            return FiImage;
        case "fi:FiInbox":
            return FiInbox;
        case "fi:FiInfo":
            return FiInfo;
        case "fi:FiInstagram":
            return FiInstagram;
        case "fi:FiItalic":
            return FiItalic;
        case "fi:FiKey":
            return FiKey;
        case "fi:FiLayers":
            return FiLayers;
        case "fi:FiLayout":
            return FiLayout;
        case "fi:FiLifeBuoy":
            return FiLifeBuoy;
        case "fi:FiLink2":
            return FiLink2;
        case "fi:FiLink":
            return FiLink;
        case "fi:FiLinkedin":
            return FiLinkedin;
        case "fi:FiList":
            return FiList;
        case "fi:FiLoader":
            return FiLoader;
        case "fi:FiLock":
            return FiLock;
        case "fi:FiLogIn":
            return FiLogIn;
        case "fi:FiLogOut":
            return FiLogOut;
        case "fi:FiMail":
            return FiMail;
        case "fi:FiMapPin":
            return FiMapPin;
        case "fi:FiMap":
            return FiMap;
        case "fi:FiMaximize2":
            return FiMaximize2;
        case "fi:FiMaximize":
            return FiMaximize;
        case "fi:FiMeh":
            return FiMeh;
        case "fi:FiMenu":
            return FiMenu;
        case "fi:FiMessageCircle":
            return FiMessageCircle;
        case "fi:FiMessageSquare":
            return FiMessageSquare;
        case "fi:FiMicOff":
            return FiMicOff;
        case "fi:FiMic":
            return FiMic;
        case "fi:FiMinimize2":
            return FiMinimize2;
        case "fi:FiMinimize":
            return FiMinimize;
        case "fi:FiMinusCircle":
            return FiMinusCircle;
        case "fi:FiMinusSquare":
            return FiMinusSquare;
        case "fi:FiMinus":
            return FiMinus;
        case "fi:FiMonitor":
            return FiMonitor;
        case "fi:FiMoon":
            return FiMoon;
        case "fi:FiMoreHorizontal":
            return FiMoreHorizontal;
        case "fi:FiMoreVertical":
            return FiMoreVertical;
        case "fi:FiMousePointer":
            return FiMousePointer;
        case "fi:FiMove":
            return FiMove;
        case "fi:FiMusic":
            return FiMusic;
        case "fi:FiNavigation2":
            return FiNavigation2;
        case "fi:FiNavigation":
            return FiNavigation;
        case "fi:FiOctagon":
            return FiOctagon;
        case "fi:FiPackage":
            return FiPackage;
        case "fi:FiPaperclip":
            return FiPaperclip;
        case "fi:FiPauseCircle":
            return FiPauseCircle;
        case "fi:FiPause":
            return FiPause;
        case "fi:FiPenTool":
            return FiPenTool;
        case "fi:FiPercent":
            return FiPercent;
        case "fi:FiPhoneCall":
            return FiPhoneCall;
        case "fi:FiPhoneForwarded":
            return FiPhoneForwarded;
        case "fi:FiPhoneIncoming":
            return FiPhoneIncoming;
        case "fi:FiPhoneMissed":
            return FiPhoneMissed;
        case "fi:FiPhoneOff":
            return FiPhoneOff;
        case "fi:FiPhoneOutgoing":
            return FiPhoneOutgoing;
        case "fi:FiPhone":
            return FiPhone;
        case "fi:FiPieChart":
            return FiPieChart;
        case "fi:FiPlayCircle":
            return FiPlayCircle;
        case "fi:FiPlay":
            return FiPlay;
        case "fi:FiPlusCircle":
            return FiPlusCircle;
        case "fi:FiPlusSquare":
            return FiPlusSquare;
        case "fi:FiPlus":
            return FiPlus;
        case "fi:FiPocket":
            return FiPocket;
        case "fi:FiPower":
            return FiPower;
        case "fi:FiPrinter":
            return FiPrinter;
        case "fi:FiRadio":
            return FiRadio;
        case "fi:FiRefreshCcw":
            return FiRefreshCcw;
        case "fi:FiRefreshCw":
            return FiRefreshCw;
        case "fi:FiRepeat":
            return FiRepeat;
        case "fi:FiRewind":
            return FiRewind;
        case "fi:FiRotateCcw":
            return FiRotateCcw;
        case "fi:FiRotateCw":
            return FiRotateCw;
        case "fi:FiRss":
            return FiRss;
        case "fi:FiSave":
            return FiSave;
        case "fi:FiScissors":
            return FiScissors;
        case "fi:FiSearch":
            return FiSearch;
        case "fi:FiSend":
            return FiSend;
        case "fi:FiServer":
            return FiServer;
        case "fi:FiSettings":
            return FiSettings;
        case "fi:FiShare2":
            return FiShare2;
        case "fi:FiShare":
            return FiShare;
        case "fi:FiShieldOff":
            return FiShieldOff;
        case "fi:FiShield":
            return FiShield;
        case "fi:FiShoppingBag":
            return FiShoppingBag;
        case "fi:FiShoppingCart":
            return FiShoppingCart;
        case "fi:FiShuffle":
            return FiShuffle;
        case "fi:FiSidebar":
            return FiSidebar;
        case "fi:FiSkipBack":
            return FiSkipBack;
        case "fi:FiSkipForward":
            return FiSkipForward;
        case "fi:FiSlack":
            return FiSlack;
        case "fi:FiSlash":
            return FiSlash;
        case "fi:FiSliders":
            return FiSliders;
        case "fi:FiSmartphone":
            return FiSmartphone;
        case "fi:FiSmile":
            return FiSmile;
        case "fi:FiSpeaker":
            return FiSpeaker;
        case "fi:FiSquare":
            return FiSquare;
        case "fi:FiStar":
            return FiStar;
        case "fi:FiStopCircle":
            return FiStopCircle;
        case "fi:FiSun":
            return FiSun;
        case "fi:FiSunrise":
            return FiSunrise;
        case "fi:FiSunset":
            return FiSunset;
        case "fi:FiTable":
            return FiTable;
        case "fi:FiTablet":
            return FiTablet;
        case "fi:FiTag":
            return FiTag;
        case "fi:FiTarget":
            return FiTarget;
        case "fi:FiTerminal":
            return FiTerminal;
        case "fi:FiThermometer":
            return FiThermometer;
        case "fi:FiThumbsDown":
            return FiThumbsDown;
        case "fi:FiThumbsUp":
            return FiThumbsUp;
        case "fi:FiToggleLeft":
            return FiToggleLeft;
        case "fi:FiToggleRight":
            return FiToggleRight;
        case "fi:FiTool":
            return FiTool;
        case "fi:FiTrash2":
            return FiTrash2;
        case "fi:FiTrash":
            return FiTrash;
        case "fi:FiTrello":
            return FiTrello;
        case "fi:FiTrendingDown":
            return FiTrendingDown;
        case "fi:FiTrendingUp":
            return FiTrendingUp;
        case "fi:FiTriangle":
            return FiTriangle;
        case "fi:FiTruck":
            return FiTruck;
        case "fi:FiTv":
            return FiTv;
        case "fi:FiTwitch":
            return FiTwitch;
        case "fi:FiTwitter":
            return FiTwitter;
        case "fi:FiType":
            return FiType;
        case "fi:FiUmbrella":
            return FiUmbrella;
        case "fi:FiUnderline":
            return FiUnderline;
        case "fi:FiUnlock":
            return FiUnlock;
        case "fi:FiUploadCloud":
            return FiUploadCloud;
        case "fi:FiUpload":
            return FiUpload;
        case "fi:FiUserCheck":
            return FiUserCheck;
        case "fi:FiUserMinus":
            return FiUserMinus;
        case "fi:FiUserPlus":
            return FiUserPlus;
        case "fi:FiUserX":
            return FiUserX;
        case "fi:FiUser":
            return FiUser;
        case "fi:FiUsers":
            return FiUsers;
        case "fi:FiVideoOff":
            return FiVideoOff;
        case "fi:FiVideo":
            return FiVideo;
        case "fi:FiVoicemail":
            return FiVoicemail;
        case "fi:FiVolume1":
            return FiVolume1;
        case "fi:FiVolume2":
            return FiVolume2;
        case "fi:FiVolumeX":
            return FiVolumeX;
        case "fi:FiVolume":
            return FiVolume;
        case "fi:FiWatch":
            return FiWatch;
        case "fi:FiWifiOff":
            return FiWifiOff;
        case "fi:FiWifi":
            return FiWifi;
        case "fi:FiWind":
            return FiWind;
        case "fi:FiXCircle":
            return FiXCircle;
        case "fi:FiXOctagon":
            return FiXOctagon;
        case "fi:FiXSquare":
            return FiXSquare;
        case "fi:FiX":
            return FiX;
        case "fi:FiYoutube":
            return FiYoutube;
        case "fi:FiZapOff":
            return FiZapOff;
        case "fi:FiZap":
            return FiZap;
        case "fi:FiZoomIn":
            return FiZoomIn;
        case "fi:FiZoomOut":
            return FiZoomOut;
    }
}
