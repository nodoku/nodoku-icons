import type {IconType} from "react-icons";

import {
    TiAdjustBrightness,
    TiAdjustContrast,
    TiAnchorOutline,
    TiAnchor,
    TiArchive,
    TiArrowBackOutline,
    TiArrowBack,
    TiArrowDownOutline,
    TiArrowDownThick,
    TiArrowDown,
    TiArrowForwardOutline,
    TiArrowForward,
    TiArrowLeftOutline,
    TiArrowLeftThick,
    TiArrowLeft,
    TiArrowLoopOutline,
    TiArrowLoop,
    TiArrowMaximiseOutline,
    TiArrowMaximise,
    TiArrowMinimiseOutline,
    TiArrowMinimise,
    TiArrowMoveOutline,
    TiArrowMove,
    TiArrowRepeatOutline,
    TiArrowRepeat,
    TiArrowRightOutline,
    TiArrowRightThick,
    TiArrowRight,
    TiArrowShuffle,
    TiArrowSortedDown,
    TiArrowSortedUp,
    TiArrowSyncOutline,
    TiArrowSync,
    TiArrowUnsorted,
    TiArrowUpOutline,
    TiArrowUpThick,
    TiArrowUp,
    TiAt,
    TiAttachmentOutline,
    TiAttachment,
    TiBackspaceOutline,
    TiBackspace,
    TiBatteryCharge,
    TiBatteryFull,
    TiBatteryHigh,
    TiBatteryLow,
    TiBatteryMid,
    TiBeaker,
    TiBeer,
    TiBell,
    TiBook,
    TiBookmark,
    TiBriefcase,
    TiBrush,
    TiBusinessCard,
    TiCalculator,
    TiCalendarOutline,
    TiCalendar,
    TiCameraOutline,
    TiCamera,
    TiCancelOutline,
    TiCancel,
    TiChartAreaOutline,
    TiChartArea,
    TiChartBarOutline,
    TiChartBar,
    TiChartLineOutline,
    TiChartLine,
    TiChartPieOutline,
    TiChartPie,
    TiChevronLeftOutline,
    TiChevronLeft,
    TiChevronRightOutline,
    TiChevronRight,
    TiClipboard,
    TiCloudStorageOutline,
    TiCloudStorage,
    TiCodeOutline,
    TiCode,
    TiCoffee,
    TiCogOutline,
    TiCog,
    TiCompass,
    TiContacts,
    TiCreditCard,
    TiCss3,
    TiDatabase,
    TiDeleteOutline,
    TiDelete,
    TiDeviceDesktop,
    TiDeviceLaptop,
    TiDevicePhone,
    TiDeviceTablet,
    TiDirections,
    TiDivideOutline,
    TiDivide,
    TiDocumentAdd,
    TiDocumentDelete,
    TiDocumentText,
    TiDocument,
    TiDownloadOutline,
    TiDownload,
    TiDropbox,
    TiEdit,
    TiEjectOutline,
    TiEject,
    TiEqualsOutline,
    TiEquals,
    TiExportOutline,
    TiExport,
    TiEyeOutline,
    TiEye,
    TiFeather,
    TiFilm,
    TiFilter,
    TiFlagOutline,
    TiFlag,
    TiFlashOutline,
    TiFlash,
    TiFlowChildren,
    TiFlowMerge,
    TiFlowParallel,
    TiFlowSwitch,
    TiFolderAdd,
    TiFolderDelete,
    TiFolderOpen,
    TiFolder,
    TiGift,
    TiGlobeOutline,
    TiGlobe,
    TiGroupOutline,
    TiGroup,
    TiHeadphones,
    TiHeartFullOutline,
    TiHeartHalfOutline,
    TiHeartOutline,
    TiHeart,
    TiHomeOutline,
    TiHome,
    TiHtml5,
    TiImageOutline,
    TiImage,
    TiInfinityOutline,
    TiInfinity,
    TiInfoLargeOutline,
    TiInfoLarge,
    TiInfoOutline,
    TiInfo,
    TiInputCheckedOutline,
    TiInputChecked,
    TiKeyOutline,
    TiKey,
    TiKeyboard,
    TiLeaf,
    TiLightbulb,
    TiLinkOutline,
    TiLink,
    TiLocationArrowOutline,
    TiLocationArrow,
    TiLocationOutline,
    TiLocation,
    TiLockClosedOutline,
    TiLockClosed,
    TiLockOpenOutline,
    TiLockOpen,
    TiMail,
    TiMap,
    TiMediaEjectOutline,
    TiMediaEject,
    TiMediaFastForwardOutline,
    TiMediaFastForward,
    TiMediaPauseOutline,
    TiMediaPause,
    TiMediaPlayOutline,
    TiMediaPlayReverseOutline,
    TiMediaPlayReverse,
    TiMediaPlay,
    TiMediaRecordOutline,
    TiMediaRecord,
    TiMediaRewindOutline,
    TiMediaRewind,
    TiMediaStopOutline,
    TiMediaStop,
    TiMessageTyping,
    TiMessage,
    TiMessages,
    TiMicrophoneOutline,
    TiMicrophone,
    TiMinusOutline,
    TiMinus,
    TiMortarBoard,
    TiNews,
    TiNotesOutline,
    TiNotes,
    TiPen,
    TiPencil,
    TiPhoneOutline,
    TiPhone,
    TiPiOutline,
    TiPi,
    TiPinOutline,
    TiPin,
    TiPipette,
    TiPlaneOutline,
    TiPlane,
    TiPlug,
    TiPlusOutline,
    TiPlus,
    TiPointOfInterestOutline,
    TiPointOfInterest,
    TiPowerOutline,
    TiPower,
    TiPrinter,
    TiPuzzleOutline,
    TiPuzzle,
    TiRadarOutline,
    TiRadar,
    TiRefreshOutline,
    TiRefresh,
    TiRssOutline,
    TiRss,
    TiScissorsOutline,
    TiScissors,
    TiShoppingBag,
    TiShoppingCart,
    TiSocialAtCircular,
    TiSocialDribbbleCircular,
    TiSocialDribbble,
    TiSocialFacebookCircular,
    TiSocialFacebook,
    TiSocialFlickrCircular,
    TiSocialFlickr,
    TiSocialGithubCircular,
    TiSocialGithub,
    TiSocialGooglePlusCircular,
    TiSocialGooglePlus,
    TiSocialInstagramCircular,
    TiSocialInstagram,
    TiSocialLastFmCircular,
    TiSocialLastFm,
    TiSocialLinkedinCircular,
    TiSocialLinkedin,
    TiSocialPinterestCircular,
    TiSocialPinterest,
    TiSocialSkypeOutline,
    TiSocialSkype,
    TiSocialTumblerCircular,
    TiSocialTumbler,
    TiSocialTwitterCircular,
    TiSocialTwitter,
    TiSocialVimeoCircular,
    TiSocialVimeo,
    TiSocialYoutubeCircular,
    TiSocialYoutube,
    TiSortAlphabeticallyOutline,
    TiSortAlphabetically,
    TiSortNumericallyOutline,
    TiSortNumerically,
    TiSpannerOutline,
    TiSpanner,
    TiSpiral,
    TiStarFullOutline,
    TiStarHalfOutline,
    TiStarHalf,
    TiStarOutline,
    TiStar,
    TiStarburstOutline,
    TiStarburst,
    TiStopwatch,
    TiSupport,
    TiTabsOutline,
    TiTag,
    TiTags,
    TiThLargeOutline,
    TiThLarge,
    TiThListOutline,
    TiThList,
    TiThMenuOutline,
    TiThMenu,
    TiThSmallOutline,
    TiThSmall,
    TiThermometer,
    TiThumbsDown,
    TiThumbsOk,
    TiThumbsUp,
    TiTickOutline,
    TiTick,
    TiTicket,
    TiTime,
    TiTimesOutline,
    TiTimes,
    TiTrash,
    TiTree,
    TiUploadOutline,
    TiUpload,
    TiUserAddOutline,
    TiUserAdd,
    TiUserDeleteOutline,
    TiUserDelete,
    TiUserOutline,
    TiUser,
    TiVendorAndroid,
    TiVendorApple,
    TiVendorMicrosoft,
    TiVideoOutline,
    TiVideo,
    TiVolumeDown,
    TiVolumeMute,
    TiVolumeUp,
    TiVolume,
    TiWarningOutline,
    TiWarning,
    TiWatch,
    TiWavesOutline,
    TiWaves,
    TiWeatherCloudy,
    TiWeatherDownpour,
    TiWeatherNight,
    TiWeatherPartlySunny,
    TiWeatherShower,
    TiWeatherSnow,
    TiWeatherStormy,
    TiWeatherSunny,
    TiWeatherWindyCloudy,
    TiWeatherWindy,
    TiWiFiOutline,
    TiWiFi,
    TiWine,
    TiWorldOutline,
    TiWorld,
    TiZoomInOutline,
    TiZoomIn,
    TiZoomOutOutline,
    TiZoomOut,
    TiZoomOutline,
    TiZoom,
} from "react-icons/ti"

export function nameToReactIcon_ti_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "ti:TiAdjustBrightness":
            return TiAdjustBrightness;
        case "ti:TiAdjustContrast":
            return TiAdjustContrast;
        case "ti:TiAnchorOutline":
            return TiAnchorOutline;
        case "ti:TiAnchor":
            return TiAnchor;
        case "ti:TiArchive":
            return TiArchive;
        case "ti:TiArrowBackOutline":
            return TiArrowBackOutline;
        case "ti:TiArrowBack":
            return TiArrowBack;
        case "ti:TiArrowDownOutline":
            return TiArrowDownOutline;
        case "ti:TiArrowDownThick":
            return TiArrowDownThick;
        case "ti:TiArrowDown":
            return TiArrowDown;
        case "ti:TiArrowForwardOutline":
            return TiArrowForwardOutline;
        case "ti:TiArrowForward":
            return TiArrowForward;
        case "ti:TiArrowLeftOutline":
            return TiArrowLeftOutline;
        case "ti:TiArrowLeftThick":
            return TiArrowLeftThick;
        case "ti:TiArrowLeft":
            return TiArrowLeft;
        case "ti:TiArrowLoopOutline":
            return TiArrowLoopOutline;
        case "ti:TiArrowLoop":
            return TiArrowLoop;
        case "ti:TiArrowMaximiseOutline":
            return TiArrowMaximiseOutline;
        case "ti:TiArrowMaximise":
            return TiArrowMaximise;
        case "ti:TiArrowMinimiseOutline":
            return TiArrowMinimiseOutline;
        case "ti:TiArrowMinimise":
            return TiArrowMinimise;
        case "ti:TiArrowMoveOutline":
            return TiArrowMoveOutline;
        case "ti:TiArrowMove":
            return TiArrowMove;
        case "ti:TiArrowRepeatOutline":
            return TiArrowRepeatOutline;
        case "ti:TiArrowRepeat":
            return TiArrowRepeat;
        case "ti:TiArrowRightOutline":
            return TiArrowRightOutline;
        case "ti:TiArrowRightThick":
            return TiArrowRightThick;
        case "ti:TiArrowRight":
            return TiArrowRight;
        case "ti:TiArrowShuffle":
            return TiArrowShuffle;
        case "ti:TiArrowSortedDown":
            return TiArrowSortedDown;
        case "ti:TiArrowSortedUp":
            return TiArrowSortedUp;
        case "ti:TiArrowSyncOutline":
            return TiArrowSyncOutline;
        case "ti:TiArrowSync":
            return TiArrowSync;
        case "ti:TiArrowUnsorted":
            return TiArrowUnsorted;
        case "ti:TiArrowUpOutline":
            return TiArrowUpOutline;
        case "ti:TiArrowUpThick":
            return TiArrowUpThick;
        case "ti:TiArrowUp":
            return TiArrowUp;
        case "ti:TiAt":
            return TiAt;
        case "ti:TiAttachmentOutline":
            return TiAttachmentOutline;
        case "ti:TiAttachment":
            return TiAttachment;
        case "ti:TiBackspaceOutline":
            return TiBackspaceOutline;
        case "ti:TiBackspace":
            return TiBackspace;
        case "ti:TiBatteryCharge":
            return TiBatteryCharge;
        case "ti:TiBatteryFull":
            return TiBatteryFull;
        case "ti:TiBatteryHigh":
            return TiBatteryHigh;
        case "ti:TiBatteryLow":
            return TiBatteryLow;
        case "ti:TiBatteryMid":
            return TiBatteryMid;
        case "ti:TiBeaker":
            return TiBeaker;
        case "ti:TiBeer":
            return TiBeer;
        case "ti:TiBell":
            return TiBell;
        case "ti:TiBook":
            return TiBook;
        case "ti:TiBookmark":
            return TiBookmark;
        case "ti:TiBriefcase":
            return TiBriefcase;
        case "ti:TiBrush":
            return TiBrush;
        case "ti:TiBusinessCard":
            return TiBusinessCard;
        case "ti:TiCalculator":
            return TiCalculator;
        case "ti:TiCalendarOutline":
            return TiCalendarOutline;
        case "ti:TiCalendar":
            return TiCalendar;
        case "ti:TiCameraOutline":
            return TiCameraOutline;
        case "ti:TiCamera":
            return TiCamera;
        case "ti:TiCancelOutline":
            return TiCancelOutline;
        case "ti:TiCancel":
            return TiCancel;
        case "ti:TiChartAreaOutline":
            return TiChartAreaOutline;
        case "ti:TiChartArea":
            return TiChartArea;
        case "ti:TiChartBarOutline":
            return TiChartBarOutline;
        case "ti:TiChartBar":
            return TiChartBar;
        case "ti:TiChartLineOutline":
            return TiChartLineOutline;
        case "ti:TiChartLine":
            return TiChartLine;
        case "ti:TiChartPieOutline":
            return TiChartPieOutline;
        case "ti:TiChartPie":
            return TiChartPie;
        case "ti:TiChevronLeftOutline":
            return TiChevronLeftOutline;
        case "ti:TiChevronLeft":
            return TiChevronLeft;
        case "ti:TiChevronRightOutline":
            return TiChevronRightOutline;
        case "ti:TiChevronRight":
            return TiChevronRight;
        case "ti:TiClipboard":
            return TiClipboard;
        case "ti:TiCloudStorageOutline":
            return TiCloudStorageOutline;
        case "ti:TiCloudStorage":
            return TiCloudStorage;
        case "ti:TiCodeOutline":
            return TiCodeOutline;
        case "ti:TiCode":
            return TiCode;
        case "ti:TiCoffee":
            return TiCoffee;
        case "ti:TiCogOutline":
            return TiCogOutline;
        case "ti:TiCog":
            return TiCog;
        case "ti:TiCompass":
            return TiCompass;
        case "ti:TiContacts":
            return TiContacts;
        case "ti:TiCreditCard":
            return TiCreditCard;
        case "ti:TiCss3":
            return TiCss3;
        case "ti:TiDatabase":
            return TiDatabase;
        case "ti:TiDeleteOutline":
            return TiDeleteOutline;
        case "ti:TiDelete":
            return TiDelete;
        case "ti:TiDeviceDesktop":
            return TiDeviceDesktop;
        case "ti:TiDeviceLaptop":
            return TiDeviceLaptop;
        case "ti:TiDevicePhone":
            return TiDevicePhone;
        case "ti:TiDeviceTablet":
            return TiDeviceTablet;
        case "ti:TiDirections":
            return TiDirections;
        case "ti:TiDivideOutline":
            return TiDivideOutline;
        case "ti:TiDivide":
            return TiDivide;
        case "ti:TiDocumentAdd":
            return TiDocumentAdd;
        case "ti:TiDocumentDelete":
            return TiDocumentDelete;
        case "ti:TiDocumentText":
            return TiDocumentText;
        case "ti:TiDocument":
            return TiDocument;
        case "ti:TiDownloadOutline":
            return TiDownloadOutline;
        case "ti:TiDownload":
            return TiDownload;
        case "ti:TiDropbox":
            return TiDropbox;
        case "ti:TiEdit":
            return TiEdit;
        case "ti:TiEjectOutline":
            return TiEjectOutline;
        case "ti:TiEject":
            return TiEject;
        case "ti:TiEqualsOutline":
            return TiEqualsOutline;
        case "ti:TiEquals":
            return TiEquals;
        case "ti:TiExportOutline":
            return TiExportOutline;
        case "ti:TiExport":
            return TiExport;
        case "ti:TiEyeOutline":
            return TiEyeOutline;
        case "ti:TiEye":
            return TiEye;
        case "ti:TiFeather":
            return TiFeather;
        case "ti:TiFilm":
            return TiFilm;
        case "ti:TiFilter":
            return TiFilter;
        case "ti:TiFlagOutline":
            return TiFlagOutline;
        case "ti:TiFlag":
            return TiFlag;
        case "ti:TiFlashOutline":
            return TiFlashOutline;
        case "ti:TiFlash":
            return TiFlash;
        case "ti:TiFlowChildren":
            return TiFlowChildren;
        case "ti:TiFlowMerge":
            return TiFlowMerge;
        case "ti:TiFlowParallel":
            return TiFlowParallel;
        case "ti:TiFlowSwitch":
            return TiFlowSwitch;
        case "ti:TiFolderAdd":
            return TiFolderAdd;
        case "ti:TiFolderDelete":
            return TiFolderDelete;
        case "ti:TiFolderOpen":
            return TiFolderOpen;
        case "ti:TiFolder":
            return TiFolder;
        case "ti:TiGift":
            return TiGift;
        case "ti:TiGlobeOutline":
            return TiGlobeOutline;
        case "ti:TiGlobe":
            return TiGlobe;
        case "ti:TiGroupOutline":
            return TiGroupOutline;
        case "ti:TiGroup":
            return TiGroup;
        case "ti:TiHeadphones":
            return TiHeadphones;
        case "ti:TiHeartFullOutline":
            return TiHeartFullOutline;
        case "ti:TiHeartHalfOutline":
            return TiHeartHalfOutline;
        case "ti:TiHeartOutline":
            return TiHeartOutline;
        case "ti:TiHeart":
            return TiHeart;
        case "ti:TiHomeOutline":
            return TiHomeOutline;
        case "ti:TiHome":
            return TiHome;
        case "ti:TiHtml5":
            return TiHtml5;
        case "ti:TiImageOutline":
            return TiImageOutline;
        case "ti:TiImage":
            return TiImage;
        case "ti:TiInfinityOutline":
            return TiInfinityOutline;
        case "ti:TiInfinity":
            return TiInfinity;
        case "ti:TiInfoLargeOutline":
            return TiInfoLargeOutline;
        case "ti:TiInfoLarge":
            return TiInfoLarge;
        case "ti:TiInfoOutline":
            return TiInfoOutline;
        case "ti:TiInfo":
            return TiInfo;
        case "ti:TiInputCheckedOutline":
            return TiInputCheckedOutline;
        case "ti:TiInputChecked":
            return TiInputChecked;
        case "ti:TiKeyOutline":
            return TiKeyOutline;
        case "ti:TiKey":
            return TiKey;
        case "ti:TiKeyboard":
            return TiKeyboard;
        case "ti:TiLeaf":
            return TiLeaf;
        case "ti:TiLightbulb":
            return TiLightbulb;
        case "ti:TiLinkOutline":
            return TiLinkOutline;
        case "ti:TiLink":
            return TiLink;
        case "ti:TiLocationArrowOutline":
            return TiLocationArrowOutline;
        case "ti:TiLocationArrow":
            return TiLocationArrow;
        case "ti:TiLocationOutline":
            return TiLocationOutline;
        case "ti:TiLocation":
            return TiLocation;
        case "ti:TiLockClosedOutline":
            return TiLockClosedOutline;
        case "ti:TiLockClosed":
            return TiLockClosed;
        case "ti:TiLockOpenOutline":
            return TiLockOpenOutline;
        case "ti:TiLockOpen":
            return TiLockOpen;
        case "ti:TiMail":
            return TiMail;
        case "ti:TiMap":
            return TiMap;
        case "ti:TiMediaEjectOutline":
            return TiMediaEjectOutline;
        case "ti:TiMediaEject":
            return TiMediaEject;
        case "ti:TiMediaFastForwardOutline":
            return TiMediaFastForwardOutline;
        case "ti:TiMediaFastForward":
            return TiMediaFastForward;
        case "ti:TiMediaPauseOutline":
            return TiMediaPauseOutline;
        case "ti:TiMediaPause":
            return TiMediaPause;
        case "ti:TiMediaPlayOutline":
            return TiMediaPlayOutline;
        case "ti:TiMediaPlayReverseOutline":
            return TiMediaPlayReverseOutline;
        case "ti:TiMediaPlayReverse":
            return TiMediaPlayReverse;
        case "ti:TiMediaPlay":
            return TiMediaPlay;
        case "ti:TiMediaRecordOutline":
            return TiMediaRecordOutline;
        case "ti:TiMediaRecord":
            return TiMediaRecord;
        case "ti:TiMediaRewindOutline":
            return TiMediaRewindOutline;
        case "ti:TiMediaRewind":
            return TiMediaRewind;
        case "ti:TiMediaStopOutline":
            return TiMediaStopOutline;
        case "ti:TiMediaStop":
            return TiMediaStop;
        case "ti:TiMessageTyping":
            return TiMessageTyping;
        case "ti:TiMessage":
            return TiMessage;
        case "ti:TiMessages":
            return TiMessages;
        case "ti:TiMicrophoneOutline":
            return TiMicrophoneOutline;
        case "ti:TiMicrophone":
            return TiMicrophone;
        case "ti:TiMinusOutline":
            return TiMinusOutline;
        case "ti:TiMinus":
            return TiMinus;
        case "ti:TiMortarBoard":
            return TiMortarBoard;
        case "ti:TiNews":
            return TiNews;
        case "ti:TiNotesOutline":
            return TiNotesOutline;
        case "ti:TiNotes":
            return TiNotes;
        case "ti:TiPen":
            return TiPen;
        case "ti:TiPencil":
            return TiPencil;
        case "ti:TiPhoneOutline":
            return TiPhoneOutline;
        case "ti:TiPhone":
            return TiPhone;
        case "ti:TiPiOutline":
            return TiPiOutline;
        case "ti:TiPi":
            return TiPi;
        case "ti:TiPinOutline":
            return TiPinOutline;
        case "ti:TiPin":
            return TiPin;
        case "ti:TiPipette":
            return TiPipette;
        case "ti:TiPlaneOutline":
            return TiPlaneOutline;
        case "ti:TiPlane":
            return TiPlane;
        case "ti:TiPlug":
            return TiPlug;
        case "ti:TiPlusOutline":
            return TiPlusOutline;
        case "ti:TiPlus":
            return TiPlus;
        case "ti:TiPointOfInterestOutline":
            return TiPointOfInterestOutline;
        case "ti:TiPointOfInterest":
            return TiPointOfInterest;
        case "ti:TiPowerOutline":
            return TiPowerOutline;
        case "ti:TiPower":
            return TiPower;
        case "ti:TiPrinter":
            return TiPrinter;
        case "ti:TiPuzzleOutline":
            return TiPuzzleOutline;
        case "ti:TiPuzzle":
            return TiPuzzle;
        case "ti:TiRadarOutline":
            return TiRadarOutline;
        case "ti:TiRadar":
            return TiRadar;
        case "ti:TiRefreshOutline":
            return TiRefreshOutline;
        case "ti:TiRefresh":
            return TiRefresh;
        case "ti:TiRssOutline":
            return TiRssOutline;
        case "ti:TiRss":
            return TiRss;
        case "ti:TiScissorsOutline":
            return TiScissorsOutline;
        case "ti:TiScissors":
            return TiScissors;
        case "ti:TiShoppingBag":
            return TiShoppingBag;
        case "ti:TiShoppingCart":
            return TiShoppingCart;
        case "ti:TiSocialAtCircular":
            return TiSocialAtCircular;
        case "ti:TiSocialDribbbleCircular":
            return TiSocialDribbbleCircular;
        case "ti:TiSocialDribbble":
            return TiSocialDribbble;
        case "ti:TiSocialFacebookCircular":
            return TiSocialFacebookCircular;
        case "ti:TiSocialFacebook":
            return TiSocialFacebook;
        case "ti:TiSocialFlickrCircular":
            return TiSocialFlickrCircular;
        case "ti:TiSocialFlickr":
            return TiSocialFlickr;
        case "ti:TiSocialGithubCircular":
            return TiSocialGithubCircular;
        case "ti:TiSocialGithub":
            return TiSocialGithub;
        case "ti:TiSocialGooglePlusCircular":
            return TiSocialGooglePlusCircular;
        case "ti:TiSocialGooglePlus":
            return TiSocialGooglePlus;
        case "ti:TiSocialInstagramCircular":
            return TiSocialInstagramCircular;
        case "ti:TiSocialInstagram":
            return TiSocialInstagram;
        case "ti:TiSocialLastFmCircular":
            return TiSocialLastFmCircular;
        case "ti:TiSocialLastFm":
            return TiSocialLastFm;
        case "ti:TiSocialLinkedinCircular":
            return TiSocialLinkedinCircular;
        case "ti:TiSocialLinkedin":
            return TiSocialLinkedin;
        case "ti:TiSocialPinterestCircular":
            return TiSocialPinterestCircular;
        case "ti:TiSocialPinterest":
            return TiSocialPinterest;
        case "ti:TiSocialSkypeOutline":
            return TiSocialSkypeOutline;
        case "ti:TiSocialSkype":
            return TiSocialSkype;
        case "ti:TiSocialTumblerCircular":
            return TiSocialTumblerCircular;
        case "ti:TiSocialTumbler":
            return TiSocialTumbler;
        case "ti:TiSocialTwitterCircular":
            return TiSocialTwitterCircular;
        case "ti:TiSocialTwitter":
            return TiSocialTwitter;
        case "ti:TiSocialVimeoCircular":
            return TiSocialVimeoCircular;
        case "ti:TiSocialVimeo":
            return TiSocialVimeo;
        case "ti:TiSocialYoutubeCircular":
            return TiSocialYoutubeCircular;
        case "ti:TiSocialYoutube":
            return TiSocialYoutube;
        case "ti:TiSortAlphabeticallyOutline":
            return TiSortAlphabeticallyOutline;
        case "ti:TiSortAlphabetically":
            return TiSortAlphabetically;
        case "ti:TiSortNumericallyOutline":
            return TiSortNumericallyOutline;
        case "ti:TiSortNumerically":
            return TiSortNumerically;
        case "ti:TiSpannerOutline":
            return TiSpannerOutline;
        case "ti:TiSpanner":
            return TiSpanner;
        case "ti:TiSpiral":
            return TiSpiral;
        case "ti:TiStarFullOutline":
            return TiStarFullOutline;
        case "ti:TiStarHalfOutline":
            return TiStarHalfOutline;
        case "ti:TiStarHalf":
            return TiStarHalf;
        case "ti:TiStarOutline":
            return TiStarOutline;
        case "ti:TiStar":
            return TiStar;
        case "ti:TiStarburstOutline":
            return TiStarburstOutline;
        case "ti:TiStarburst":
            return TiStarburst;
        case "ti:TiStopwatch":
            return TiStopwatch;
        case "ti:TiSupport":
            return TiSupport;
        case "ti:TiTabsOutline":
            return TiTabsOutline;
        case "ti:TiTag":
            return TiTag;
        case "ti:TiTags":
            return TiTags;
        case "ti:TiThLargeOutline":
            return TiThLargeOutline;
        case "ti:TiThLarge":
            return TiThLarge;
        case "ti:TiThListOutline":
            return TiThListOutline;
        case "ti:TiThList":
            return TiThList;
        case "ti:TiThMenuOutline":
            return TiThMenuOutline;
        case "ti:TiThMenu":
            return TiThMenu;
        case "ti:TiThSmallOutline":
            return TiThSmallOutline;
        case "ti:TiThSmall":
            return TiThSmall;
        case "ti:TiThermometer":
            return TiThermometer;
        case "ti:TiThumbsDown":
            return TiThumbsDown;
        case "ti:TiThumbsOk":
            return TiThumbsOk;
        case "ti:TiThumbsUp":
            return TiThumbsUp;
        case "ti:TiTickOutline":
            return TiTickOutline;
        case "ti:TiTick":
            return TiTick;
        case "ti:TiTicket":
            return TiTicket;
        case "ti:TiTime":
            return TiTime;
        case "ti:TiTimesOutline":
            return TiTimesOutline;
        case "ti:TiTimes":
            return TiTimes;
        case "ti:TiTrash":
            return TiTrash;
        case "ti:TiTree":
            return TiTree;
        case "ti:TiUploadOutline":
            return TiUploadOutline;
        case "ti:TiUpload":
            return TiUpload;
        case "ti:TiUserAddOutline":
            return TiUserAddOutline;
        case "ti:TiUserAdd":
            return TiUserAdd;
        case "ti:TiUserDeleteOutline":
            return TiUserDeleteOutline;
        case "ti:TiUserDelete":
            return TiUserDelete;
        case "ti:TiUserOutline":
            return TiUserOutline;
        case "ti:TiUser":
            return TiUser;
        case "ti:TiVendorAndroid":
            return TiVendorAndroid;
        case "ti:TiVendorApple":
            return TiVendorApple;
        case "ti:TiVendorMicrosoft":
            return TiVendorMicrosoft;
        case "ti:TiVideoOutline":
            return TiVideoOutline;
        case "ti:TiVideo":
            return TiVideo;
        case "ti:TiVolumeDown":
            return TiVolumeDown;
        case "ti:TiVolumeMute":
            return TiVolumeMute;
        case "ti:TiVolumeUp":
            return TiVolumeUp;
        case "ti:TiVolume":
            return TiVolume;
        case "ti:TiWarningOutline":
            return TiWarningOutline;
        case "ti:TiWarning":
            return TiWarning;
        case "ti:TiWatch":
            return TiWatch;
        case "ti:TiWavesOutline":
            return TiWavesOutline;
        case "ti:TiWaves":
            return TiWaves;
        case "ti:TiWeatherCloudy":
            return TiWeatherCloudy;
        case "ti:TiWeatherDownpour":
            return TiWeatherDownpour;
        case "ti:TiWeatherNight":
            return TiWeatherNight;
        case "ti:TiWeatherPartlySunny":
            return TiWeatherPartlySunny;
        case "ti:TiWeatherShower":
            return TiWeatherShower;
        case "ti:TiWeatherSnow":
            return TiWeatherSnow;
        case "ti:TiWeatherStormy":
            return TiWeatherStormy;
        case "ti:TiWeatherSunny":
            return TiWeatherSunny;
        case "ti:TiWeatherWindyCloudy":
            return TiWeatherWindyCloudy;
        case "ti:TiWeatherWindy":
            return TiWeatherWindy;
        case "ti:TiWiFiOutline":
            return TiWiFiOutline;
        case "ti:TiWiFi":
            return TiWiFi;
        case "ti:TiWine":
            return TiWine;
        case "ti:TiWorldOutline":
            return TiWorldOutline;
        case "ti:TiWorld":
            return TiWorld;
        case "ti:TiZoomInOutline":
            return TiZoomInOutline;
        case "ti:TiZoomIn":
            return TiZoomIn;
        case "ti:TiZoomOutOutline":
            return TiZoomOutOutline;
        case "ti:TiZoomOut":
            return TiZoomOut;
        case "ti:TiZoomOutline":
            return TiZoomOutline;
        case "ti:TiZoom":
            return TiZoom;
    }
}
