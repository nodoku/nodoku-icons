import type {IconType} from "react-icons";

import {
    TfiAgenda,
    TfiAlarmClock,
    TfiAlert,
    TfiAlignCenter,
    TfiAlignJustify,
    TfiAlignLeft,
    TfiAlignRight,
    TfiAnchor,
    TfiAndroid,
    TfiAngleDoubleDown,
    TfiAngleDoubleLeft,
    TfiAngleDoubleRight,
    TfiAngleDoubleUp,
    TfiAngleDown,
    TfiAngleLeft,
    TfiAngleRight,
    TfiAngleUp,
    TfiAnnouncement,
    TfiApple,
    TfiArchive,
    TfiArrowCircleDown,
    TfiArrowCircleLeft,
    TfiArrowCircleRight,
    TfiArrowCircleUp,
    TfiArrowDown,
    TfiArrowLeft,
    TfiArrowRight,
    TfiArrowTopLeft,
    TfiArrowTopRight,
    TfiArrowUp,
    TfiArrow,
    TfiArrowsCorner,
    TfiArrowsHorizontal,
    TfiArrowsVertical,
    TfiBackLeft,
    TfiBackRight,
    TfiBag,
    TfiBarChartAlt,
    TfiBarChart,
    TfiBasketball,
    TfiBell,
    TfiBlackboard,
    TfiBoltAlt,
    TfiBolt,
    TfiBook,
    TfiBookmarkAlt,
    TfiBookmark,
    TfiBriefcase,
    TfiBrushAlt,
    TfiBrush,
    TfiCalendar,
    TfiCamera,
    TfiCar,
    TfiCheckBox,
    TfiCheck,
    TfiClip,
    TfiClipboard,
    TfiClose,
    TfiCloudDown,
    TfiCloudUp,
    TfiCloud,
    TfiCommentAlt,
    TfiComment,
    TfiCommentsSmiley,
    TfiComments,
    TfiControlBackward,
    TfiControlEject,
    TfiControlForward,
    TfiControlPause,
    TfiControlPlay,
    TfiControlRecord,
    TfiControlShuffle,
    TfiControlSkipBackward,
    TfiControlSkipForward,
    TfiControlStop,
    TfiCreditCard,
    TfiCrown,
    TfiCss3,
    TfiCup,
    TfiCut,
    TfiDashboard,
    TfiDesktop,
    TfiDirectionAlt,
    TfiDirection,
    TfiDownload,
    TfiDribbble,
    TfiDropboxAlt,
    TfiDropbox,
    TfiDrupal,
    TfiEmail,
    TfiEnvelope,
    TfiEraser,
    TfiExchangeVertical,
    TfiExport,
    TfiEye,
    TfiFaceSad,
    TfiFaceSmile,
    TfiFacebook,
    TfiFile,
    TfiFiles,
    TfiFilter,
    TfiFlagAlt2,
    TfiFlagAlt,
    TfiFlag,
    TfiFlickrAlt,
    TfiFlickr,
    TfiFolder,
    TfiFullscreen,
    TfiGallery,
    TfiGame,
    TfiGift,
    TfiGithub,
    TfiGoogle,
    TfiHandDrag,
    TfiHandOpen,
    TfiHandPointDown,
    TfiHandPointLeft,
    TfiHandPointRight,
    TfiHandPointUp,
    TfiHandStop,
    TfiHarddrive,
    TfiHarddrives,
    TfiHeadphoneAlt,
    TfiHeadphone,
    TfiHeartBroken,
    TfiHeart,
    TfiHelpAlt,
    TfiHelp,
    TfiHome,
    TfiHtml5,
    TfiHummer,
    TfiIdBadge,
    TfiImage,
    TfiImport,
    TfiInfinite,
    TfiInfoAlt,
    TfiInfo,
    TfiInkPen,
    TfiInstagram,
    TfiItalic,
    TfiJoomla,
    TfiJsfiddle,
    TfiKey,
    TfiLayersAlt,
    TfiLayers,
    TfiLayoutAccordionList,
    TfiLayoutAccordionMerged,
    TfiLayoutAccordionSeparated,
    TfiLayoutColumn2Alt,
    TfiLayoutColumn2,
    TfiLayoutColumn3Alt,
    TfiLayoutColumn3,
    TfiLayoutColumn4Alt,
    TfiLayoutColumn4,
    TfiLayoutCtaBtnLeft,
    TfiLayoutCtaBtnRight,
    TfiLayoutCtaCenter,
    TfiLayoutCtaLeft,
    TfiLayoutCtaRight,
    TfiLayoutGrid2Alt,
    TfiLayoutGrid2Thumb,
    TfiLayoutGrid2,
    TfiLayoutGrid3Alt,
    TfiLayoutGrid3,
    TfiLayoutGrid4Alt,
    TfiLayoutGrid4,
    TfiLayoutLineSolid,
    TfiLayoutListLargeImage,
    TfiLayoutListPost,
    TfiLayoutListThumbAlt,
    TfiLayoutListThumb,
    TfiLayoutMediaCenterAlt,
    TfiLayoutMediaCenter,
    TfiLayoutMediaLeftAlt,
    TfiLayoutMediaLeft,
    TfiLayoutMediaOverlayAlt2,
    TfiLayoutMediaOverlayAlt,
    TfiLayoutMediaOverlay,
    TfiLayoutMediaRightAlt,
    TfiLayoutMediaRight,
    TfiLayoutMenuFull,
    TfiLayoutMenuSeparated,
    TfiLayoutMenuV,
    TfiLayoutMenu,
    TfiLayoutPlaceholder,
    TfiLayoutSidebar2,
    TfiLayoutSidebarLeft,
    TfiLayoutSidebarNone,
    TfiLayoutSidebarRight,
    TfiLayoutSliderAlt,
    TfiLayoutSlider,
    TfiLayoutTabMin,
    TfiLayoutTabV,
    TfiLayoutTabWindow,
    TfiLayoutTab,
    TfiLayoutWidthDefaultAlt,
    TfiLayoutWidthDefault,
    TfiLayoutWidthFull,
    TfiLayout,
    TfiLightBulb,
    TfiLineDashed,
    TfiLineDotted,
    TfiLineDouble,
    TfiLink,
    TfiLinkedin,
    TfiLinux,
    TfiListOl,
    TfiList,
    TfiLocationArrow,
    TfiLocationPin,
    TfiLock,
    TfiLoop,
    TfiMagnet,
    TfiMapAlt,
    TfiMap,
    TfiMarkerAlt,
    TfiMarker,
    TfiMedallAlt,
    TfiMedall,
    TfiMenuAlt,
    TfiMenu,
    TfiMicrophoneAlt,
    TfiMicrophone,
    TfiMicrosoftAlt,
    TfiMicrosoft,
    TfiMinus,
    TfiMobile,
    TfiMoney,
    TfiMoreAlt,
    TfiMore,
    TfiMouseAlt,
    TfiMouse,
    TfiMusicAlt,
    TfiMusic,
    TfiNa,
    TfiNewWindow,
    TfiNotepad,
    TfiPackage,
    TfiPaintBucket,
    TfiPaintRoller,
    TfiPalette,
    TfiPanel,
    TfiParagraph,
    TfiPencilAlt,
    TfiPencilAlt2,
    TfiPencil,
    TfiPieChart,
    TfiPinAlt,
    TfiPin,
    TfiPin2,
    TfiPinterestAlt,
    TfiPinterest,
    TfiPlug,
    TfiPlus,
    TfiPowerOff,
    TfiPrinter,
    TfiPulse,
    TfiQuoteLeft,
    TfiQuoteRight,
    TfiReceipt,
    TfiReddit,
    TfiReload,
    TfiRocket,
    TfiRssAlt,
    TfiRss,
    TfiRulerAlt2,
    TfiRulerAlt,
    TfiRulerPencil,
    TfiRuler,
    TfiSaveAlt,
    TfiSave,
    TfiSearch,
    TfiServer,
    TfiSettings,
    TfiShareAlt,
    TfiShare,
    TfiSharethisAlt,
    TfiSharethis,
    TfiShield,
    TfiShiftLeftAlt,
    TfiShiftLeft,
    TfiShiftRightAlt,
    TfiShiftRight,
    TfiShine,
    TfiShoppingCartFull,
    TfiShoppingCart,
    TfiShortcode,
    TfiSignal,
    TfiSkype,
    TfiSlice,
    TfiSmallcap,
    TfiSoundcloud,
    TfiSplitH,
    TfiSplitVAlt,
    TfiSplitV,
    TfiSpray,
    TfiStackOverflow,
    TfiStamp,
    TfiStar,
    TfiStatsDown,
    TfiStatsUp,
    TfiSupport,
    TfiTablet,
    TfiTag,
    TfiTarget,
    TfiText,
    TfiThemifyFaviconAlt,
    TfiThemifyFavicon,
    TfiThemifyLogo,
    TfiThought,
    TfiThumbDown,
    TfiThumbUp,
    TfiTicket,
    TfiTime,
    TfiTimer,
    TfiTrash,
    TfiTrello,
    TfiTruck,
    TfiTumblrAlt,
    TfiTumblr,
    TfiTwitterAlt,
    TfiTwitter,
    TfiUnderline,
    TfiUnlink,
    TfiUnlock,
    TfiUpload,
    TfiUppercase,
    TfiUser,
    TfiVector,
    TfiVideoCamera,
    TfiVideoClapper,
    TfiViewGrid,
    TfiViewListAlt,
    TfiViewList,
    TfiVimeoAlt,
    TfiVimeo,
    TfiVolume,
    TfiWallet,
    TfiWand,
    TfiWheelchair,
    TfiWidgetAlt,
    TfiWidget,
    TfiWidgetized,
    TfiWindow,
    TfiWordpress,
    TfiWorld,
    TfiWrite,
    TfiYahoo,
    TfiYoutube,
    TfiZip,
    TfiZoomIn,
    TfiZoomOut,
} from "react-icons/tfi"

export function nameToReactIcon_tfi_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "tfi:TfiAgenda":
            return TfiAgenda;
        case "tfi:TfiAlarmClock":
            return TfiAlarmClock;
        case "tfi:TfiAlert":
            return TfiAlert;
        case "tfi:TfiAlignCenter":
            return TfiAlignCenter;
        case "tfi:TfiAlignJustify":
            return TfiAlignJustify;
        case "tfi:TfiAlignLeft":
            return TfiAlignLeft;
        case "tfi:TfiAlignRight":
            return TfiAlignRight;
        case "tfi:TfiAnchor":
            return TfiAnchor;
        case "tfi:TfiAndroid":
            return TfiAndroid;
        case "tfi:TfiAngleDoubleDown":
            return TfiAngleDoubleDown;
        case "tfi:TfiAngleDoubleLeft":
            return TfiAngleDoubleLeft;
        case "tfi:TfiAngleDoubleRight":
            return TfiAngleDoubleRight;
        case "tfi:TfiAngleDoubleUp":
            return TfiAngleDoubleUp;
        case "tfi:TfiAngleDown":
            return TfiAngleDown;
        case "tfi:TfiAngleLeft":
            return TfiAngleLeft;
        case "tfi:TfiAngleRight":
            return TfiAngleRight;
        case "tfi:TfiAngleUp":
            return TfiAngleUp;
        case "tfi:TfiAnnouncement":
            return TfiAnnouncement;
        case "tfi:TfiApple":
            return TfiApple;
        case "tfi:TfiArchive":
            return TfiArchive;
        case "tfi:TfiArrowCircleDown":
            return TfiArrowCircleDown;
        case "tfi:TfiArrowCircleLeft":
            return TfiArrowCircleLeft;
        case "tfi:TfiArrowCircleRight":
            return TfiArrowCircleRight;
        case "tfi:TfiArrowCircleUp":
            return TfiArrowCircleUp;
        case "tfi:TfiArrowDown":
            return TfiArrowDown;
        case "tfi:TfiArrowLeft":
            return TfiArrowLeft;
        case "tfi:TfiArrowRight":
            return TfiArrowRight;
        case "tfi:TfiArrowTopLeft":
            return TfiArrowTopLeft;
        case "tfi:TfiArrowTopRight":
            return TfiArrowTopRight;
        case "tfi:TfiArrowUp":
            return TfiArrowUp;
        case "tfi:TfiArrow":
            return TfiArrow;
        case "tfi:TfiArrowsCorner":
            return TfiArrowsCorner;
        case "tfi:TfiArrowsHorizontal":
            return TfiArrowsHorizontal;
        case "tfi:TfiArrowsVertical":
            return TfiArrowsVertical;
        case "tfi:TfiBackLeft":
            return TfiBackLeft;
        case "tfi:TfiBackRight":
            return TfiBackRight;
        case "tfi:TfiBag":
            return TfiBag;
        case "tfi:TfiBarChartAlt":
            return TfiBarChartAlt;
        case "tfi:TfiBarChart":
            return TfiBarChart;
        case "tfi:TfiBasketball":
            return TfiBasketball;
        case "tfi:TfiBell":
            return TfiBell;
        case "tfi:TfiBlackboard":
            return TfiBlackboard;
        case "tfi:TfiBoltAlt":
            return TfiBoltAlt;
        case "tfi:TfiBolt":
            return TfiBolt;
        case "tfi:TfiBook":
            return TfiBook;
        case "tfi:TfiBookmarkAlt":
            return TfiBookmarkAlt;
        case "tfi:TfiBookmark":
            return TfiBookmark;
        case "tfi:TfiBriefcase":
            return TfiBriefcase;
        case "tfi:TfiBrushAlt":
            return TfiBrushAlt;
        case "tfi:TfiBrush":
            return TfiBrush;
        case "tfi:TfiCalendar":
            return TfiCalendar;
        case "tfi:TfiCamera":
            return TfiCamera;
        case "tfi:TfiCar":
            return TfiCar;
        case "tfi:TfiCheckBox":
            return TfiCheckBox;
        case "tfi:TfiCheck":
            return TfiCheck;
        case "tfi:TfiClip":
            return TfiClip;
        case "tfi:TfiClipboard":
            return TfiClipboard;
        case "tfi:TfiClose":
            return TfiClose;
        case "tfi:TfiCloudDown":
            return TfiCloudDown;
        case "tfi:TfiCloudUp":
            return TfiCloudUp;
        case "tfi:TfiCloud":
            return TfiCloud;
        case "tfi:TfiCommentAlt":
            return TfiCommentAlt;
        case "tfi:TfiComment":
            return TfiComment;
        case "tfi:TfiCommentsSmiley":
            return TfiCommentsSmiley;
        case "tfi:TfiComments":
            return TfiComments;
        case "tfi:TfiControlBackward":
            return TfiControlBackward;
        case "tfi:TfiControlEject":
            return TfiControlEject;
        case "tfi:TfiControlForward":
            return TfiControlForward;
        case "tfi:TfiControlPause":
            return TfiControlPause;
        case "tfi:TfiControlPlay":
            return TfiControlPlay;
        case "tfi:TfiControlRecord":
            return TfiControlRecord;
        case "tfi:TfiControlShuffle":
            return TfiControlShuffle;
        case "tfi:TfiControlSkipBackward":
            return TfiControlSkipBackward;
        case "tfi:TfiControlSkipForward":
            return TfiControlSkipForward;
        case "tfi:TfiControlStop":
            return TfiControlStop;
        case "tfi:TfiCreditCard":
            return TfiCreditCard;
        case "tfi:TfiCrown":
            return TfiCrown;
        case "tfi:TfiCss3":
            return TfiCss3;
        case "tfi:TfiCup":
            return TfiCup;
        case "tfi:TfiCut":
            return TfiCut;
        case "tfi:TfiDashboard":
            return TfiDashboard;
        case "tfi:TfiDesktop":
            return TfiDesktop;
        case "tfi:TfiDirectionAlt":
            return TfiDirectionAlt;
        case "tfi:TfiDirection":
            return TfiDirection;
        case "tfi:TfiDownload":
            return TfiDownload;
        case "tfi:TfiDribbble":
            return TfiDribbble;
        case "tfi:TfiDropboxAlt":
            return TfiDropboxAlt;
        case "tfi:TfiDropbox":
            return TfiDropbox;
        case "tfi:TfiDrupal":
            return TfiDrupal;
        case "tfi:TfiEmail":
            return TfiEmail;
        case "tfi:TfiEnvelope":
            return TfiEnvelope;
        case "tfi:TfiEraser":
            return TfiEraser;
        case "tfi:TfiExchangeVertical":
            return TfiExchangeVertical;
        case "tfi:TfiExport":
            return TfiExport;
        case "tfi:TfiEye":
            return TfiEye;
        case "tfi:TfiFaceSad":
            return TfiFaceSad;
        case "tfi:TfiFaceSmile":
            return TfiFaceSmile;
        case "tfi:TfiFacebook":
            return TfiFacebook;
        case "tfi:TfiFile":
            return TfiFile;
        case "tfi:TfiFiles":
            return TfiFiles;
        case "tfi:TfiFilter":
            return TfiFilter;
        case "tfi:TfiFlagAlt2":
            return TfiFlagAlt2;
        case "tfi:TfiFlagAlt":
            return TfiFlagAlt;
        case "tfi:TfiFlag":
            return TfiFlag;
        case "tfi:TfiFlickrAlt":
            return TfiFlickrAlt;
        case "tfi:TfiFlickr":
            return TfiFlickr;
        case "tfi:TfiFolder":
            return TfiFolder;
        case "tfi:TfiFullscreen":
            return TfiFullscreen;
        case "tfi:TfiGallery":
            return TfiGallery;
        case "tfi:TfiGame":
            return TfiGame;
        case "tfi:TfiGift":
            return TfiGift;
        case "tfi:TfiGithub":
            return TfiGithub;
        case "tfi:TfiGoogle":
            return TfiGoogle;
        case "tfi:TfiHandDrag":
            return TfiHandDrag;
        case "tfi:TfiHandOpen":
            return TfiHandOpen;
        case "tfi:TfiHandPointDown":
            return TfiHandPointDown;
        case "tfi:TfiHandPointLeft":
            return TfiHandPointLeft;
        case "tfi:TfiHandPointRight":
            return TfiHandPointRight;
        case "tfi:TfiHandPointUp":
            return TfiHandPointUp;
        case "tfi:TfiHandStop":
            return TfiHandStop;
        case "tfi:TfiHarddrive":
            return TfiHarddrive;
        case "tfi:TfiHarddrives":
            return TfiHarddrives;
        case "tfi:TfiHeadphoneAlt":
            return TfiHeadphoneAlt;
        case "tfi:TfiHeadphone":
            return TfiHeadphone;
        case "tfi:TfiHeartBroken":
            return TfiHeartBroken;
        case "tfi:TfiHeart":
            return TfiHeart;
        case "tfi:TfiHelpAlt":
            return TfiHelpAlt;
        case "tfi:TfiHelp":
            return TfiHelp;
        case "tfi:TfiHome":
            return TfiHome;
        case "tfi:TfiHtml5":
            return TfiHtml5;
        case "tfi:TfiHummer":
            return TfiHummer;
        case "tfi:TfiIdBadge":
            return TfiIdBadge;
        case "tfi:TfiImage":
            return TfiImage;
        case "tfi:TfiImport":
            return TfiImport;
        case "tfi:TfiInfinite":
            return TfiInfinite;
        case "tfi:TfiInfoAlt":
            return TfiInfoAlt;
        case "tfi:TfiInfo":
            return TfiInfo;
        case "tfi:TfiInkPen":
            return TfiInkPen;
        case "tfi:TfiInstagram":
            return TfiInstagram;
        case "tfi:TfiItalic":
            return TfiItalic;
        case "tfi:TfiJoomla":
            return TfiJoomla;
        case "tfi:TfiJsfiddle":
            return TfiJsfiddle;
        case "tfi:TfiKey":
            return TfiKey;
        case "tfi:TfiLayersAlt":
            return TfiLayersAlt;
        case "tfi:TfiLayers":
            return TfiLayers;
        case "tfi:TfiLayoutAccordionList":
            return TfiLayoutAccordionList;
        case "tfi:TfiLayoutAccordionMerged":
            return TfiLayoutAccordionMerged;
        case "tfi:TfiLayoutAccordionSeparated":
            return TfiLayoutAccordionSeparated;
        case "tfi:TfiLayoutColumn2Alt":
            return TfiLayoutColumn2Alt;
        case "tfi:TfiLayoutColumn2":
            return TfiLayoutColumn2;
        case "tfi:TfiLayoutColumn3Alt":
            return TfiLayoutColumn3Alt;
        case "tfi:TfiLayoutColumn3":
            return TfiLayoutColumn3;
        case "tfi:TfiLayoutColumn4Alt":
            return TfiLayoutColumn4Alt;
        case "tfi:TfiLayoutColumn4":
            return TfiLayoutColumn4;
        case "tfi:TfiLayoutCtaBtnLeft":
            return TfiLayoutCtaBtnLeft;
        case "tfi:TfiLayoutCtaBtnRight":
            return TfiLayoutCtaBtnRight;
        case "tfi:TfiLayoutCtaCenter":
            return TfiLayoutCtaCenter;
        case "tfi:TfiLayoutCtaLeft":
            return TfiLayoutCtaLeft;
        case "tfi:TfiLayoutCtaRight":
            return TfiLayoutCtaRight;
        case "tfi:TfiLayoutGrid2Alt":
            return TfiLayoutGrid2Alt;
        case "tfi:TfiLayoutGrid2Thumb":
            return TfiLayoutGrid2Thumb;
        case "tfi:TfiLayoutGrid2":
            return TfiLayoutGrid2;
        case "tfi:TfiLayoutGrid3Alt":
            return TfiLayoutGrid3Alt;
        case "tfi:TfiLayoutGrid3":
            return TfiLayoutGrid3;
        case "tfi:TfiLayoutGrid4Alt":
            return TfiLayoutGrid4Alt;
        case "tfi:TfiLayoutGrid4":
            return TfiLayoutGrid4;
        case "tfi:TfiLayoutLineSolid":
            return TfiLayoutLineSolid;
        case "tfi:TfiLayoutListLargeImage":
            return TfiLayoutListLargeImage;
        case "tfi:TfiLayoutListPost":
            return TfiLayoutListPost;
        case "tfi:TfiLayoutListThumbAlt":
            return TfiLayoutListThumbAlt;
        case "tfi:TfiLayoutListThumb":
            return TfiLayoutListThumb;
        case "tfi:TfiLayoutMediaCenterAlt":
            return TfiLayoutMediaCenterAlt;
        case "tfi:TfiLayoutMediaCenter":
            return TfiLayoutMediaCenter;
        case "tfi:TfiLayoutMediaLeftAlt":
            return TfiLayoutMediaLeftAlt;
        case "tfi:TfiLayoutMediaLeft":
            return TfiLayoutMediaLeft;
        case "tfi:TfiLayoutMediaOverlayAlt2":
            return TfiLayoutMediaOverlayAlt2;
        case "tfi:TfiLayoutMediaOverlayAlt":
            return TfiLayoutMediaOverlayAlt;
        case "tfi:TfiLayoutMediaOverlay":
            return TfiLayoutMediaOverlay;
        case "tfi:TfiLayoutMediaRightAlt":
            return TfiLayoutMediaRightAlt;
        case "tfi:TfiLayoutMediaRight":
            return TfiLayoutMediaRight;
        case "tfi:TfiLayoutMenuFull":
            return TfiLayoutMenuFull;
        case "tfi:TfiLayoutMenuSeparated":
            return TfiLayoutMenuSeparated;
        case "tfi:TfiLayoutMenuV":
            return TfiLayoutMenuV;
        case "tfi:TfiLayoutMenu":
            return TfiLayoutMenu;
        case "tfi:TfiLayoutPlaceholder":
            return TfiLayoutPlaceholder;
        case "tfi:TfiLayoutSidebar2":
            return TfiLayoutSidebar2;
        case "tfi:TfiLayoutSidebarLeft":
            return TfiLayoutSidebarLeft;
        case "tfi:TfiLayoutSidebarNone":
            return TfiLayoutSidebarNone;
        case "tfi:TfiLayoutSidebarRight":
            return TfiLayoutSidebarRight;
        case "tfi:TfiLayoutSliderAlt":
            return TfiLayoutSliderAlt;
        case "tfi:TfiLayoutSlider":
            return TfiLayoutSlider;
        case "tfi:TfiLayoutTabMin":
            return TfiLayoutTabMin;
        case "tfi:TfiLayoutTabV":
            return TfiLayoutTabV;
        case "tfi:TfiLayoutTabWindow":
            return TfiLayoutTabWindow;
        case "tfi:TfiLayoutTab":
            return TfiLayoutTab;
        case "tfi:TfiLayoutWidthDefaultAlt":
            return TfiLayoutWidthDefaultAlt;
        case "tfi:TfiLayoutWidthDefault":
            return TfiLayoutWidthDefault;
        case "tfi:TfiLayoutWidthFull":
            return TfiLayoutWidthFull;
        case "tfi:TfiLayout":
            return TfiLayout;
        case "tfi:TfiLightBulb":
            return TfiLightBulb;
        case "tfi:TfiLineDashed":
            return TfiLineDashed;
        case "tfi:TfiLineDotted":
            return TfiLineDotted;
        case "tfi:TfiLineDouble":
            return TfiLineDouble;
        case "tfi:TfiLink":
            return TfiLink;
        case "tfi:TfiLinkedin":
            return TfiLinkedin;
        case "tfi:TfiLinux":
            return TfiLinux;
        case "tfi:TfiListOl":
            return TfiListOl;
        case "tfi:TfiList":
            return TfiList;
        case "tfi:TfiLocationArrow":
            return TfiLocationArrow;
        case "tfi:TfiLocationPin":
            return TfiLocationPin;
        case "tfi:TfiLock":
            return TfiLock;
        case "tfi:TfiLoop":
            return TfiLoop;
        case "tfi:TfiMagnet":
            return TfiMagnet;
        case "tfi:TfiMapAlt":
            return TfiMapAlt;
        case "tfi:TfiMap":
            return TfiMap;
        case "tfi:TfiMarkerAlt":
            return TfiMarkerAlt;
        case "tfi:TfiMarker":
            return TfiMarker;
        case "tfi:TfiMedallAlt":
            return TfiMedallAlt;
        case "tfi:TfiMedall":
            return TfiMedall;
        case "tfi:TfiMenuAlt":
            return TfiMenuAlt;
        case "tfi:TfiMenu":
            return TfiMenu;
        case "tfi:TfiMicrophoneAlt":
            return TfiMicrophoneAlt;
        case "tfi:TfiMicrophone":
            return TfiMicrophone;
        case "tfi:TfiMicrosoftAlt":
            return TfiMicrosoftAlt;
        case "tfi:TfiMicrosoft":
            return TfiMicrosoft;
        case "tfi:TfiMinus":
            return TfiMinus;
        case "tfi:TfiMobile":
            return TfiMobile;
        case "tfi:TfiMoney":
            return TfiMoney;
        case "tfi:TfiMoreAlt":
            return TfiMoreAlt;
        case "tfi:TfiMore":
            return TfiMore;
        case "tfi:TfiMouseAlt":
            return TfiMouseAlt;
        case "tfi:TfiMouse":
            return TfiMouse;
        case "tfi:TfiMusicAlt":
            return TfiMusicAlt;
        case "tfi:TfiMusic":
            return TfiMusic;
        case "tfi:TfiNa":
            return TfiNa;
        case "tfi:TfiNewWindow":
            return TfiNewWindow;
        case "tfi:TfiNotepad":
            return TfiNotepad;
        case "tfi:TfiPackage":
            return TfiPackage;
        case "tfi:TfiPaintBucket":
            return TfiPaintBucket;
        case "tfi:TfiPaintRoller":
            return TfiPaintRoller;
        case "tfi:TfiPalette":
            return TfiPalette;
        case "tfi:TfiPanel":
            return TfiPanel;
        case "tfi:TfiParagraph":
            return TfiParagraph;
        case "tfi:TfiPencilAlt":
            return TfiPencilAlt;
        case "tfi:TfiPencilAlt2":
            return TfiPencilAlt2;
        case "tfi:TfiPencil":
            return TfiPencil;
        case "tfi:TfiPieChart":
            return TfiPieChart;
        case "tfi:TfiPinAlt":
            return TfiPinAlt;
        case "tfi:TfiPin":
            return TfiPin;
        case "tfi:TfiPin2":
            return TfiPin2;
        case "tfi:TfiPinterestAlt":
            return TfiPinterestAlt;
        case "tfi:TfiPinterest":
            return TfiPinterest;
        case "tfi:TfiPlug":
            return TfiPlug;
        case "tfi:TfiPlus":
            return TfiPlus;
        case "tfi:TfiPowerOff":
            return TfiPowerOff;
        case "tfi:TfiPrinter":
            return TfiPrinter;
        case "tfi:TfiPulse":
            return TfiPulse;
        case "tfi:TfiQuoteLeft":
            return TfiQuoteLeft;
        case "tfi:TfiQuoteRight":
            return TfiQuoteRight;
        case "tfi:TfiReceipt":
            return TfiReceipt;
        case "tfi:TfiReddit":
            return TfiReddit;
        case "tfi:TfiReload":
            return TfiReload;
        case "tfi:TfiRocket":
            return TfiRocket;
        case "tfi:TfiRssAlt":
            return TfiRssAlt;
        case "tfi:TfiRss":
            return TfiRss;
        case "tfi:TfiRulerAlt2":
            return TfiRulerAlt2;
        case "tfi:TfiRulerAlt":
            return TfiRulerAlt;
        case "tfi:TfiRulerPencil":
            return TfiRulerPencil;
        case "tfi:TfiRuler":
            return TfiRuler;
        case "tfi:TfiSaveAlt":
            return TfiSaveAlt;
        case "tfi:TfiSave":
            return TfiSave;
        case "tfi:TfiSearch":
            return TfiSearch;
        case "tfi:TfiServer":
            return TfiServer;
        case "tfi:TfiSettings":
            return TfiSettings;
        case "tfi:TfiShareAlt":
            return TfiShareAlt;
        case "tfi:TfiShare":
            return TfiShare;
        case "tfi:TfiSharethisAlt":
            return TfiSharethisAlt;
        case "tfi:TfiSharethis":
            return TfiSharethis;
        case "tfi:TfiShield":
            return TfiShield;
        case "tfi:TfiShiftLeftAlt":
            return TfiShiftLeftAlt;
        case "tfi:TfiShiftLeft":
            return TfiShiftLeft;
        case "tfi:TfiShiftRightAlt":
            return TfiShiftRightAlt;
        case "tfi:TfiShiftRight":
            return TfiShiftRight;
        case "tfi:TfiShine":
            return TfiShine;
        case "tfi:TfiShoppingCartFull":
            return TfiShoppingCartFull;
        case "tfi:TfiShoppingCart":
            return TfiShoppingCart;
        case "tfi:TfiShortcode":
            return TfiShortcode;
        case "tfi:TfiSignal":
            return TfiSignal;
        case "tfi:TfiSkype":
            return TfiSkype;
        case "tfi:TfiSlice":
            return TfiSlice;
        case "tfi:TfiSmallcap":
            return TfiSmallcap;
        case "tfi:TfiSoundcloud":
            return TfiSoundcloud;
        case "tfi:TfiSplitH":
            return TfiSplitH;
        case "tfi:TfiSplitVAlt":
            return TfiSplitVAlt;
        case "tfi:TfiSplitV":
            return TfiSplitV;
        case "tfi:TfiSpray":
            return TfiSpray;
        case "tfi:TfiStackOverflow":
            return TfiStackOverflow;
        case "tfi:TfiStamp":
            return TfiStamp;
        case "tfi:TfiStar":
            return TfiStar;
        case "tfi:TfiStatsDown":
            return TfiStatsDown;
        case "tfi:TfiStatsUp":
            return TfiStatsUp;
        case "tfi:TfiSupport":
            return TfiSupport;
        case "tfi:TfiTablet":
            return TfiTablet;
        case "tfi:TfiTag":
            return TfiTag;
        case "tfi:TfiTarget":
            return TfiTarget;
        case "tfi:TfiText":
            return TfiText;
        case "tfi:TfiThemifyFaviconAlt":
            return TfiThemifyFaviconAlt;
        case "tfi:TfiThemifyFavicon":
            return TfiThemifyFavicon;
        case "tfi:TfiThemifyLogo":
            return TfiThemifyLogo;
        case "tfi:TfiThought":
            return TfiThought;
        case "tfi:TfiThumbDown":
            return TfiThumbDown;
        case "tfi:TfiThumbUp":
            return TfiThumbUp;
        case "tfi:TfiTicket":
            return TfiTicket;
        case "tfi:TfiTime":
            return TfiTime;
        case "tfi:TfiTimer":
            return TfiTimer;
        case "tfi:TfiTrash":
            return TfiTrash;
        case "tfi:TfiTrello":
            return TfiTrello;
        case "tfi:TfiTruck":
            return TfiTruck;
        case "tfi:TfiTumblrAlt":
            return TfiTumblrAlt;
        case "tfi:TfiTumblr":
            return TfiTumblr;
        case "tfi:TfiTwitterAlt":
            return TfiTwitterAlt;
        case "tfi:TfiTwitter":
            return TfiTwitter;
        case "tfi:TfiUnderline":
            return TfiUnderline;
        case "tfi:TfiUnlink":
            return TfiUnlink;
        case "tfi:TfiUnlock":
            return TfiUnlock;
        case "tfi:TfiUpload":
            return TfiUpload;
        case "tfi:TfiUppercase":
            return TfiUppercase;
        case "tfi:TfiUser":
            return TfiUser;
        case "tfi:TfiVector":
            return TfiVector;
        case "tfi:TfiVideoCamera":
            return TfiVideoCamera;
        case "tfi:TfiVideoClapper":
            return TfiVideoClapper;
        case "tfi:TfiViewGrid":
            return TfiViewGrid;
        case "tfi:TfiViewListAlt":
            return TfiViewListAlt;
        case "tfi:TfiViewList":
            return TfiViewList;
        case "tfi:TfiVimeoAlt":
            return TfiVimeoAlt;
        case "tfi:TfiVimeo":
            return TfiVimeo;
        case "tfi:TfiVolume":
            return TfiVolume;
        case "tfi:TfiWallet":
            return TfiWallet;
        case "tfi:TfiWand":
            return TfiWand;
        case "tfi:TfiWheelchair":
            return TfiWheelchair;
        case "tfi:TfiWidgetAlt":
            return TfiWidgetAlt;
        case "tfi:TfiWidget":
            return TfiWidget;
        case "tfi:TfiWidgetized":
            return TfiWidgetized;
        case "tfi:TfiWindow":
            return TfiWindow;
        case "tfi:TfiWordpress":
            return TfiWordpress;
        case "tfi:TfiWorld":
            return TfiWorld;
        case "tfi:TfiWrite":
            return TfiWrite;
        case "tfi:TfiYahoo":
            return TfiYahoo;
        case "tfi:TfiYoutube":
            return TfiYoutube;
        case "tfi:TfiZip":
            return TfiZip;
        case "tfi:TfiZoomIn":
            return TfiZoomIn;
        case "tfi:TfiZoomOut":
            return TfiZoomOut;
    }
}
