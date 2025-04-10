import type {IconType} from "react-icons";

import {
    ImHome,
    ImHome2,
    ImHome3,
    ImOffice,
    ImNewspaper,
    ImPencil,
    ImPencil2,
    ImQuill,
    ImPen,
    ImBlog,
    ImEyedropper,
    ImDroplet,
    ImPaintFormat,
    ImImage,
    ImImages,
    ImCamera,
    ImHeadphones,
    ImMusic,
    ImPlay,
    ImFilm,
    ImVideoCamera,
    ImDice,
    ImPacman,
    ImSpades,
    ImClubs,
    ImDiamonds,
    ImBullhorn,
    ImConnection,
    ImPodcast,
    ImFeed,
    ImMic,
    ImBook,
    ImBooks,
    ImLibrary,
    ImFileText,
    ImProfile,
    ImFileEmpty,
    ImFilesEmpty,
    ImFileText2,
    ImFilePicture,
    ImFileMusic,
    ImFilePlay,
    ImFileVideo,
    ImFileZip,
    ImCopy,
    ImPaste,
    ImStack,
    ImFolder,
    ImFolderOpen,
    ImFolderPlus,
    ImFolderMinus,
    ImFolderDownload,
    ImFolderUpload,
    ImPriceTag,
    ImPriceTags,
    ImBarcode,
    ImQrcode,
    ImTicket,
    ImCart,
    ImCoinDollar,
    ImCoinEuro,
    ImCoinPound,
    ImCoinYen,
    ImCreditCard,
    ImCalculator,
    ImLifebuoy,
    ImPhone,
    ImPhoneHangUp,
    ImAddressBook,
    ImEnvelop,
    ImPushpin,
    ImLocation,
    ImLocation2,
    ImCompass,
    ImCompass2,
    ImMap,
    ImMap2,
    ImHistory,
    ImClock,
    ImClock2,
    ImAlarm,
    ImBell,
    ImStopwatch,
    ImCalendar,
    ImPrinter,
    ImKeyboard,
    ImDisplay,
    ImLaptop,
    ImMobile,
    ImMobile2,
    ImTablet,
    ImTv,
    ImDrawer,
    ImDrawer2,
    ImBoxAdd,
    ImBoxRemove,
    ImDownload,
    ImUpload,
    ImFloppyDisk,
    ImDrive,
    ImDatabase,
    ImUndo,
    ImRedo,
    ImUndo2,
    ImRedo2,
    ImForward,
    ImReply,
    ImBubble,
    ImBubbles,
    ImBubbles2,
    ImBubble2,
    ImBubbles3,
    ImBubbles4,
    ImUser,
    ImUsers,
    ImUserPlus,
    ImUserMinus,
    ImUserCheck,
    ImUserTie,
    ImQuotesLeft,
    ImQuotesRight,
    ImHourGlass,
    ImSpinner,
    ImSpinner2,
    ImSpinner3,
    ImSpinner4,
    ImSpinner5,
    ImSpinner6,
    ImSpinner7,
    ImSpinner8,
    ImSpinner9,
    ImSpinner10,
    ImSpinner11,
    ImBinoculars,
    ImSearch,
    ImZoomIn,
    ImZoomOut,
    ImEnlarge,
    ImShrink,
    ImEnlarge2,
    ImShrink2,
    ImKey,
    ImKey2,
    ImLock,
    ImUnlocked,
    ImWrench,
    ImEqualizer,
    ImEqualizer2,
    ImCog,
    ImCogs,
    ImHammer,
    ImMagicWand,
    ImAidKit,
    ImBug,
    ImPieChart,
    ImStatsDots,
    ImStatsBars,
    ImStatsBars2,
    ImTrophy,
    ImGift,
    ImGlass,
    ImGlass2,
    ImMug,
    ImSpoonKnife,
    ImLeaf,
    ImRocket,
    ImMeter,
    ImMeter2,
    ImHammer2,
    ImFire,
    ImLab,
    ImMagnet,
    ImBin,
    ImBin2,
    ImBriefcase,
    ImAirplane,
    ImTruck,
    ImRoad,
    ImAccessibility,
    ImTarget,
    ImShield,
    ImPower,
    ImSwitch,
    ImPowerCord,
    ImClipboard,
    ImListNumbered,
    ImList,
    ImList2,
    ImTree,
    ImMenu,
    ImMenu2,
    ImMenu3,
    ImMenu4,
    ImCloud,
    ImCloudDownload,
    ImCloudUpload,
    ImCloudCheck,
    ImDownload2,
    ImUpload2,
    ImDownload3,
    ImUpload3,
    ImSphere,
    ImEarth,
    ImLink,
    ImFlag,
    ImAttachment,
    ImEye,
    ImEyePlus,
    ImEyeMinus,
    ImEyeBlocked,
    ImBookmark,
    ImBookmarks,
    ImSun,
    ImContrast,
    ImBrightnessContrast,
    ImStarEmpty,
    ImStarHalf,
    ImStarFull,
    ImHeart,
    ImHeartBroken,
    ImMan,
    ImWoman,
    ImManWoman,
    ImHappy,
    ImHappy2,
    ImSmile,
    ImSmile2,
    ImTongue,
    ImTongue2,
    ImSad,
    ImSad2,
    ImWink,
    ImWink2,
    ImGrin,
    ImGrin2,
    ImCool,
    ImCool2,
    ImAngry,
    ImAngry2,
    ImEvil,
    ImEvil2,
    ImShocked,
    ImShocked2,
    ImBaffled,
    ImBaffled2,
    ImConfused,
    ImConfused2,
    ImNeutral,
    ImNeutral2,
    ImHipster,
    ImHipster2,
    ImWondering,
    ImWondering2,
    ImSleepy,
    ImSleepy2,
    ImFrustrated,
    ImFrustrated2,
    ImCrying,
    ImCrying2,
    ImPointUp,
    ImPointRight,
    ImPointDown,
    ImPointLeft,
    ImWarning,
    ImNotification,
    ImQuestion,
    ImPlus,
    ImMinus,
    ImInfo,
    ImCancelCircle,
    ImBlocked,
    ImCross,
    ImCheckmark,
    ImCheckmark2,
    ImSpellCheck,
    ImEnter,
    ImExit,
    ImPlay2,
    ImPause,
    ImStop,
    ImPrevious,
    ImNext,
    ImBackward,
    ImForward2,
    ImPlay3,
    ImPause2,
    ImStop2,
    ImBackward2,
    ImForward3,
    ImFirst,
    ImLast,
    ImPrevious2,
    ImNext2,
    ImEject,
    ImVolumeHigh,
    ImVolumeMedium,
    ImVolumeLow,
    ImVolumeMute,
    ImVolumeMute2,
    ImVolumeIncrease,
    ImVolumeDecrease,
    ImLoop,
    ImLoop2,
    ImInfinite,
    ImShuffle,
    ImArrowUpLeft,
    ImArrowUp,
    ImArrowUpRight,
    ImArrowRight,
    ImArrowDownRight,
    ImArrowDown,
    ImArrowDownLeft,
    ImArrowLeft,
    ImArrowUpLeft2,
    ImArrowUp2,
    ImArrowUpRight2,
    ImArrowRight2,
    ImArrowDownRight2,
    ImArrowDown2,
    ImArrowDownLeft2,
    ImArrowLeft2,
    ImCircleUp,
    ImCircleRight,
    ImCircleDown,
    ImCircleLeft,
    ImTab,
    ImMoveUp,
    ImMoveDown,
    ImSortAlphaAsc,
    ImSortAlphaDesc,
    ImSortNumericAsc,
    ImSortNumbericDesc,
    ImSortAmountAsc,
    ImSortAmountDesc,
    ImCommand,
    ImShift,
    ImCtrl,
    ImOpt,
    ImCheckboxChecked,
    ImCheckboxUnchecked,
    ImRadioChecked,
    ImRadioChecked2,
    ImRadioUnchecked,
    ImCrop,
    ImMakeGroup,
    ImUngroup,
    ImScissors,
    ImFilter,
    ImFont,
    ImLigature,
    ImLigature2,
    ImTextHeight,
    ImTextWidth,
    ImFontSize,
    ImBold,
    ImUnderline,
    ImItalic,
    ImStrikethrough,
    ImOmega,
    ImSigma,
    ImPageBreak,
    ImSuperscript,
    ImSubscript,
    ImSuperscript2,
    ImSubscript2,
    ImTextColor,
    ImPagebreak,
    ImClearFormatting,
    ImTable,
    ImTable2,
    ImInsertTemplate,
    ImPilcrow,
    ImLtr,
    ImRtl,
    ImSection,
    ImParagraphLeft,
    ImParagraphCenter,
    ImParagraphRight,
    ImParagraphJustify,
    ImIndentIncrease,
    ImIndentDecrease,
    ImShare,
    ImNewTab,
    ImEmbed,
    ImEmbed2,
    ImTerminal,
    ImShare2,
    ImMail,
    ImMail2,
    ImMail3,
    ImMail4,
    ImAmazon,
    ImGoogle,
    ImGoogle2,
    ImGoogle3,
    ImGooglePlus,
    ImGooglePlus2,
    ImGooglePlus3,
    ImHangouts,
    ImGoogleDrive,
    ImFacebook,
    ImFacebook2,
    ImInstagram,
    ImWhatsapp,
    ImSpotify,
    ImTelegram,
    ImTwitter,
    ImVine,
    ImVk,
    ImRenren,
    ImSinaWeibo,
    ImRss,
    ImRss2,
    ImYoutube,
    ImYoutube2,
    ImTwitch,
    ImVimeo,
    ImVimeo2,
    ImLanyrd,
    ImFlickr,
    ImFlickr2,
    ImFlickr3,
    ImFlickr4,
    ImDribbble,
    ImBehance,
    ImBehance2,
    ImDeviantart,
    Im500Px,
    ImSteam,
    ImSteam2,
    ImDropbox,
    ImOnedrive,
    ImGithub,
    ImNpm,
    ImBasecamp,
    ImTrello,
    ImWordpress,
    ImJoomla,
    ImEllo,
    ImBlogger,
    ImBlogger2,
    ImTumblr,
    ImTumblr2,
    ImYahoo,
    ImYahoo2,
    ImTux,
    ImAppleinc,
    ImFinder,
    ImAndroid,
    ImWindows,
    ImWindows8,
    ImSoundcloud,
    ImSoundcloud2,
    ImSkype,
    ImReddit,
    ImHackernews,
    ImWikipedia,
    ImLinkedin,
    ImLinkedin2,
    ImLastfm,
    ImLastfm2,
    ImDelicious,
    ImStumbleupon,
    ImStumbleupon2,
    ImStackoverflow,
    ImPinterest,
    ImPinterest2,
    ImXing,
    ImXing2,
    ImFlattr,
    ImFoursquare,
    ImYelp,
    ImPaypal,
    ImChrome,
    ImFirefox,
    ImIe,
    ImEdge,
    ImSafari,
    ImOpera,
    ImFilePdf,
    ImFileOpenoffice,
    ImFileWord,
    ImFileExcel,
    ImLibreoffice,
    ImHtmlFive,
    ImHtmlFive2,
    ImCss3,
    ImGit,
    ImCodepen,
    ImSvg,
    ImIcoMoon,
} from "react-icons/im"

export function nameToReactIcon_im_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "im:ImHome":
            return ImHome;
        case "im:ImHome2":
            return ImHome2;
        case "im:ImHome3":
            return ImHome3;
        case "im:ImOffice":
            return ImOffice;
        case "im:ImNewspaper":
            return ImNewspaper;
        case "im:ImPencil":
            return ImPencil;
        case "im:ImPencil2":
            return ImPencil2;
        case "im:ImQuill":
            return ImQuill;
        case "im:ImPen":
            return ImPen;
        case "im:ImBlog":
            return ImBlog;
        case "im:ImEyedropper":
            return ImEyedropper;
        case "im:ImDroplet":
            return ImDroplet;
        case "im:ImPaintFormat":
            return ImPaintFormat;
        case "im:ImImage":
            return ImImage;
        case "im:ImImages":
            return ImImages;
        case "im:ImCamera":
            return ImCamera;
        case "im:ImHeadphones":
            return ImHeadphones;
        case "im:ImMusic":
            return ImMusic;
        case "im:ImPlay":
            return ImPlay;
        case "im:ImFilm":
            return ImFilm;
        case "im:ImVideoCamera":
            return ImVideoCamera;
        case "im:ImDice":
            return ImDice;
        case "im:ImPacman":
            return ImPacman;
        case "im:ImSpades":
            return ImSpades;
        case "im:ImClubs":
            return ImClubs;
        case "im:ImDiamonds":
            return ImDiamonds;
        case "im:ImBullhorn":
            return ImBullhorn;
        case "im:ImConnection":
            return ImConnection;
        case "im:ImPodcast":
            return ImPodcast;
        case "im:ImFeed":
            return ImFeed;
        case "im:ImMic":
            return ImMic;
        case "im:ImBook":
            return ImBook;
        case "im:ImBooks":
            return ImBooks;
        case "im:ImLibrary":
            return ImLibrary;
        case "im:ImFileText":
            return ImFileText;
        case "im:ImProfile":
            return ImProfile;
        case "im:ImFileEmpty":
            return ImFileEmpty;
        case "im:ImFilesEmpty":
            return ImFilesEmpty;
        case "im:ImFileText2":
            return ImFileText2;
        case "im:ImFilePicture":
            return ImFilePicture;
        case "im:ImFileMusic":
            return ImFileMusic;
        case "im:ImFilePlay":
            return ImFilePlay;
        case "im:ImFileVideo":
            return ImFileVideo;
        case "im:ImFileZip":
            return ImFileZip;
        case "im:ImCopy":
            return ImCopy;
        case "im:ImPaste":
            return ImPaste;
        case "im:ImStack":
            return ImStack;
        case "im:ImFolder":
            return ImFolder;
        case "im:ImFolderOpen":
            return ImFolderOpen;
        case "im:ImFolderPlus":
            return ImFolderPlus;
        case "im:ImFolderMinus":
            return ImFolderMinus;
        case "im:ImFolderDownload":
            return ImFolderDownload;
        case "im:ImFolderUpload":
            return ImFolderUpload;
        case "im:ImPriceTag":
            return ImPriceTag;
        case "im:ImPriceTags":
            return ImPriceTags;
        case "im:ImBarcode":
            return ImBarcode;
        case "im:ImQrcode":
            return ImQrcode;
        case "im:ImTicket":
            return ImTicket;
        case "im:ImCart":
            return ImCart;
        case "im:ImCoinDollar":
            return ImCoinDollar;
        case "im:ImCoinEuro":
            return ImCoinEuro;
        case "im:ImCoinPound":
            return ImCoinPound;
        case "im:ImCoinYen":
            return ImCoinYen;
        case "im:ImCreditCard":
            return ImCreditCard;
        case "im:ImCalculator":
            return ImCalculator;
        case "im:ImLifebuoy":
            return ImLifebuoy;
        case "im:ImPhone":
            return ImPhone;
        case "im:ImPhoneHangUp":
            return ImPhoneHangUp;
        case "im:ImAddressBook":
            return ImAddressBook;
        case "im:ImEnvelop":
            return ImEnvelop;
        case "im:ImPushpin":
            return ImPushpin;
        case "im:ImLocation":
            return ImLocation;
        case "im:ImLocation2":
            return ImLocation2;
        case "im:ImCompass":
            return ImCompass;
        case "im:ImCompass2":
            return ImCompass2;
        case "im:ImMap":
            return ImMap;
        case "im:ImMap2":
            return ImMap2;
        case "im:ImHistory":
            return ImHistory;
        case "im:ImClock":
            return ImClock;
        case "im:ImClock2":
            return ImClock2;
        case "im:ImAlarm":
            return ImAlarm;
        case "im:ImBell":
            return ImBell;
        case "im:ImStopwatch":
            return ImStopwatch;
        case "im:ImCalendar":
            return ImCalendar;
        case "im:ImPrinter":
            return ImPrinter;
        case "im:ImKeyboard":
            return ImKeyboard;
        case "im:ImDisplay":
            return ImDisplay;
        case "im:ImLaptop":
            return ImLaptop;
        case "im:ImMobile":
            return ImMobile;
        case "im:ImMobile2":
            return ImMobile2;
        case "im:ImTablet":
            return ImTablet;
        case "im:ImTv":
            return ImTv;
        case "im:ImDrawer":
            return ImDrawer;
        case "im:ImDrawer2":
            return ImDrawer2;
        case "im:ImBoxAdd":
            return ImBoxAdd;
        case "im:ImBoxRemove":
            return ImBoxRemove;
        case "im:ImDownload":
            return ImDownload;
        case "im:ImUpload":
            return ImUpload;
        case "im:ImFloppyDisk":
            return ImFloppyDisk;
        case "im:ImDrive":
            return ImDrive;
        case "im:ImDatabase":
            return ImDatabase;
        case "im:ImUndo":
            return ImUndo;
        case "im:ImRedo":
            return ImRedo;
        case "im:ImUndo2":
            return ImUndo2;
        case "im:ImRedo2":
            return ImRedo2;
        case "im:ImForward":
            return ImForward;
        case "im:ImReply":
            return ImReply;
        case "im:ImBubble":
            return ImBubble;
        case "im:ImBubbles":
            return ImBubbles;
        case "im:ImBubbles2":
            return ImBubbles2;
        case "im:ImBubble2":
            return ImBubble2;
        case "im:ImBubbles3":
            return ImBubbles3;
        case "im:ImBubbles4":
            return ImBubbles4;
        case "im:ImUser":
            return ImUser;
        case "im:ImUsers":
            return ImUsers;
        case "im:ImUserPlus":
            return ImUserPlus;
        case "im:ImUserMinus":
            return ImUserMinus;
        case "im:ImUserCheck":
            return ImUserCheck;
        case "im:ImUserTie":
            return ImUserTie;
        case "im:ImQuotesLeft":
            return ImQuotesLeft;
        case "im:ImQuotesRight":
            return ImQuotesRight;
        case "im:ImHourGlass":
            return ImHourGlass;
        case "im:ImSpinner":
            return ImSpinner;
        case "im:ImSpinner2":
            return ImSpinner2;
        case "im:ImSpinner3":
            return ImSpinner3;
        case "im:ImSpinner4":
            return ImSpinner4;
        case "im:ImSpinner5":
            return ImSpinner5;
        case "im:ImSpinner6":
            return ImSpinner6;
        case "im:ImSpinner7":
            return ImSpinner7;
        case "im:ImSpinner8":
            return ImSpinner8;
        case "im:ImSpinner9":
            return ImSpinner9;
        case "im:ImSpinner10":
            return ImSpinner10;
        case "im:ImSpinner11":
            return ImSpinner11;
        case "im:ImBinoculars":
            return ImBinoculars;
        case "im:ImSearch":
            return ImSearch;
        case "im:ImZoomIn":
            return ImZoomIn;
        case "im:ImZoomOut":
            return ImZoomOut;
        case "im:ImEnlarge":
            return ImEnlarge;
        case "im:ImShrink":
            return ImShrink;
        case "im:ImEnlarge2":
            return ImEnlarge2;
        case "im:ImShrink2":
            return ImShrink2;
        case "im:ImKey":
            return ImKey;
        case "im:ImKey2":
            return ImKey2;
        case "im:ImLock":
            return ImLock;
        case "im:ImUnlocked":
            return ImUnlocked;
        case "im:ImWrench":
            return ImWrench;
        case "im:ImEqualizer":
            return ImEqualizer;
        case "im:ImEqualizer2":
            return ImEqualizer2;
        case "im:ImCog":
            return ImCog;
        case "im:ImCogs":
            return ImCogs;
        case "im:ImHammer":
            return ImHammer;
        case "im:ImMagicWand":
            return ImMagicWand;
        case "im:ImAidKit":
            return ImAidKit;
        case "im:ImBug":
            return ImBug;
        case "im:ImPieChart":
            return ImPieChart;
        case "im:ImStatsDots":
            return ImStatsDots;
        case "im:ImStatsBars":
            return ImStatsBars;
        case "im:ImStatsBars2":
            return ImStatsBars2;
        case "im:ImTrophy":
            return ImTrophy;
        case "im:ImGift":
            return ImGift;
        case "im:ImGlass":
            return ImGlass;
        case "im:ImGlass2":
            return ImGlass2;
        case "im:ImMug":
            return ImMug;
        case "im:ImSpoonKnife":
            return ImSpoonKnife;
        case "im:ImLeaf":
            return ImLeaf;
        case "im:ImRocket":
            return ImRocket;
        case "im:ImMeter":
            return ImMeter;
        case "im:ImMeter2":
            return ImMeter2;
        case "im:ImHammer2":
            return ImHammer2;
        case "im:ImFire":
            return ImFire;
        case "im:ImLab":
            return ImLab;
        case "im:ImMagnet":
            return ImMagnet;
        case "im:ImBin":
            return ImBin;
        case "im:ImBin2":
            return ImBin2;
        case "im:ImBriefcase":
            return ImBriefcase;
        case "im:ImAirplane":
            return ImAirplane;
        case "im:ImTruck":
            return ImTruck;
        case "im:ImRoad":
            return ImRoad;
        case "im:ImAccessibility":
            return ImAccessibility;
        case "im:ImTarget":
            return ImTarget;
        case "im:ImShield":
            return ImShield;
        case "im:ImPower":
            return ImPower;
        case "im:ImSwitch":
            return ImSwitch;
        case "im:ImPowerCord":
            return ImPowerCord;
        case "im:ImClipboard":
            return ImClipboard;
        case "im:ImListNumbered":
            return ImListNumbered;
        case "im:ImList":
            return ImList;
        case "im:ImList2":
            return ImList2;
        case "im:ImTree":
            return ImTree;
        case "im:ImMenu":
            return ImMenu;
        case "im:ImMenu2":
            return ImMenu2;
        case "im:ImMenu3":
            return ImMenu3;
        case "im:ImMenu4":
            return ImMenu4;
        case "im:ImCloud":
            return ImCloud;
        case "im:ImCloudDownload":
            return ImCloudDownload;
        case "im:ImCloudUpload":
            return ImCloudUpload;
        case "im:ImCloudCheck":
            return ImCloudCheck;
        case "im:ImDownload2":
            return ImDownload2;
        case "im:ImUpload2":
            return ImUpload2;
        case "im:ImDownload3":
            return ImDownload3;
        case "im:ImUpload3":
            return ImUpload3;
        case "im:ImSphere":
            return ImSphere;
        case "im:ImEarth":
            return ImEarth;
        case "im:ImLink":
            return ImLink;
        case "im:ImFlag":
            return ImFlag;
        case "im:ImAttachment":
            return ImAttachment;
        case "im:ImEye":
            return ImEye;
        case "im:ImEyePlus":
            return ImEyePlus;
        case "im:ImEyeMinus":
            return ImEyeMinus;
        case "im:ImEyeBlocked":
            return ImEyeBlocked;
        case "im:ImBookmark":
            return ImBookmark;
        case "im:ImBookmarks":
            return ImBookmarks;
        case "im:ImSun":
            return ImSun;
        case "im:ImContrast":
            return ImContrast;
        case "im:ImBrightnessContrast":
            return ImBrightnessContrast;
        case "im:ImStarEmpty":
            return ImStarEmpty;
        case "im:ImStarHalf":
            return ImStarHalf;
        case "im:ImStarFull":
            return ImStarFull;
        case "im:ImHeart":
            return ImHeart;
        case "im:ImHeartBroken":
            return ImHeartBroken;
        case "im:ImMan":
            return ImMan;
        case "im:ImWoman":
            return ImWoman;
        case "im:ImManWoman":
            return ImManWoman;
        case "im:ImHappy":
            return ImHappy;
        case "im:ImHappy2":
            return ImHappy2;
        case "im:ImSmile":
            return ImSmile;
        case "im:ImSmile2":
            return ImSmile2;
        case "im:ImTongue":
            return ImTongue;
        case "im:ImTongue2":
            return ImTongue2;
        case "im:ImSad":
            return ImSad;
        case "im:ImSad2":
            return ImSad2;
        case "im:ImWink":
            return ImWink;
        case "im:ImWink2":
            return ImWink2;
        case "im:ImGrin":
            return ImGrin;
        case "im:ImGrin2":
            return ImGrin2;
        case "im:ImCool":
            return ImCool;
        case "im:ImCool2":
            return ImCool2;
        case "im:ImAngry":
            return ImAngry;
        case "im:ImAngry2":
            return ImAngry2;
        case "im:ImEvil":
            return ImEvil;
        case "im:ImEvil2":
            return ImEvil2;
        case "im:ImShocked":
            return ImShocked;
        case "im:ImShocked2":
            return ImShocked2;
        case "im:ImBaffled":
            return ImBaffled;
        case "im:ImBaffled2":
            return ImBaffled2;
        case "im:ImConfused":
            return ImConfused;
        case "im:ImConfused2":
            return ImConfused2;
        case "im:ImNeutral":
            return ImNeutral;
        case "im:ImNeutral2":
            return ImNeutral2;
        case "im:ImHipster":
            return ImHipster;
        case "im:ImHipster2":
            return ImHipster2;
        case "im:ImWondering":
            return ImWondering;
        case "im:ImWondering2":
            return ImWondering2;
        case "im:ImSleepy":
            return ImSleepy;
        case "im:ImSleepy2":
            return ImSleepy2;
        case "im:ImFrustrated":
            return ImFrustrated;
        case "im:ImFrustrated2":
            return ImFrustrated2;
        case "im:ImCrying":
            return ImCrying;
        case "im:ImCrying2":
            return ImCrying2;
        case "im:ImPointUp":
            return ImPointUp;
        case "im:ImPointRight":
            return ImPointRight;
        case "im:ImPointDown":
            return ImPointDown;
        case "im:ImPointLeft":
            return ImPointLeft;
        case "im:ImWarning":
            return ImWarning;
        case "im:ImNotification":
            return ImNotification;
        case "im:ImQuestion":
            return ImQuestion;
        case "im:ImPlus":
            return ImPlus;
        case "im:ImMinus":
            return ImMinus;
        case "im:ImInfo":
            return ImInfo;
        case "im:ImCancelCircle":
            return ImCancelCircle;
        case "im:ImBlocked":
            return ImBlocked;
        case "im:ImCross":
            return ImCross;
        case "im:ImCheckmark":
            return ImCheckmark;
        case "im:ImCheckmark2":
            return ImCheckmark2;
        case "im:ImSpellCheck":
            return ImSpellCheck;
        case "im:ImEnter":
            return ImEnter;
        case "im:ImExit":
            return ImExit;
        case "im:ImPlay2":
            return ImPlay2;
        case "im:ImPause":
            return ImPause;
        case "im:ImStop":
            return ImStop;
        case "im:ImPrevious":
            return ImPrevious;
        case "im:ImNext":
            return ImNext;
        case "im:ImBackward":
            return ImBackward;
        case "im:ImForward2":
            return ImForward2;
        case "im:ImPlay3":
            return ImPlay3;
        case "im:ImPause2":
            return ImPause2;
        case "im:ImStop2":
            return ImStop2;
        case "im:ImBackward2":
            return ImBackward2;
        case "im:ImForward3":
            return ImForward3;
        case "im:ImFirst":
            return ImFirst;
        case "im:ImLast":
            return ImLast;
        case "im:ImPrevious2":
            return ImPrevious2;
        case "im:ImNext2":
            return ImNext2;
        case "im:ImEject":
            return ImEject;
        case "im:ImVolumeHigh":
            return ImVolumeHigh;
        case "im:ImVolumeMedium":
            return ImVolumeMedium;
        case "im:ImVolumeLow":
            return ImVolumeLow;
        case "im:ImVolumeMute":
            return ImVolumeMute;
        case "im:ImVolumeMute2":
            return ImVolumeMute2;
        case "im:ImVolumeIncrease":
            return ImVolumeIncrease;
        case "im:ImVolumeDecrease":
            return ImVolumeDecrease;
        case "im:ImLoop":
            return ImLoop;
        case "im:ImLoop2":
            return ImLoop2;
        case "im:ImInfinite":
            return ImInfinite;
        case "im:ImShuffle":
            return ImShuffle;
        case "im:ImArrowUpLeft":
            return ImArrowUpLeft;
        case "im:ImArrowUp":
            return ImArrowUp;
        case "im:ImArrowUpRight":
            return ImArrowUpRight;
        case "im:ImArrowRight":
            return ImArrowRight;
        case "im:ImArrowDownRight":
            return ImArrowDownRight;
        case "im:ImArrowDown":
            return ImArrowDown;
        case "im:ImArrowDownLeft":
            return ImArrowDownLeft;
        case "im:ImArrowLeft":
            return ImArrowLeft;
        case "im:ImArrowUpLeft2":
            return ImArrowUpLeft2;
        case "im:ImArrowUp2":
            return ImArrowUp2;
        case "im:ImArrowUpRight2":
            return ImArrowUpRight2;
        case "im:ImArrowRight2":
            return ImArrowRight2;
        case "im:ImArrowDownRight2":
            return ImArrowDownRight2;
        case "im:ImArrowDown2":
            return ImArrowDown2;
        case "im:ImArrowDownLeft2":
            return ImArrowDownLeft2;
        case "im:ImArrowLeft2":
            return ImArrowLeft2;
        case "im:ImCircleUp":
            return ImCircleUp;
        case "im:ImCircleRight":
            return ImCircleRight;
        case "im:ImCircleDown":
            return ImCircleDown;
        case "im:ImCircleLeft":
            return ImCircleLeft;
        case "im:ImTab":
            return ImTab;
        case "im:ImMoveUp":
            return ImMoveUp;
        case "im:ImMoveDown":
            return ImMoveDown;
        case "im:ImSortAlphaAsc":
            return ImSortAlphaAsc;
        case "im:ImSortAlphaDesc":
            return ImSortAlphaDesc;
        case "im:ImSortNumericAsc":
            return ImSortNumericAsc;
        case "im:ImSortNumbericDesc":
            return ImSortNumbericDesc;
        case "im:ImSortAmountAsc":
            return ImSortAmountAsc;
        case "im:ImSortAmountDesc":
            return ImSortAmountDesc;
        case "im:ImCommand":
            return ImCommand;
        case "im:ImShift":
            return ImShift;
        case "im:ImCtrl":
            return ImCtrl;
        case "im:ImOpt":
            return ImOpt;
        case "im:ImCheckboxChecked":
            return ImCheckboxChecked;
        case "im:ImCheckboxUnchecked":
            return ImCheckboxUnchecked;
        case "im:ImRadioChecked":
            return ImRadioChecked;
        case "im:ImRadioChecked2":
            return ImRadioChecked2;
        case "im:ImRadioUnchecked":
            return ImRadioUnchecked;
        case "im:ImCrop":
            return ImCrop;
        case "im:ImMakeGroup":
            return ImMakeGroup;
        case "im:ImUngroup":
            return ImUngroup;
        case "im:ImScissors":
            return ImScissors;
        case "im:ImFilter":
            return ImFilter;
        case "im:ImFont":
            return ImFont;
        case "im:ImLigature":
            return ImLigature;
        case "im:ImLigature2":
            return ImLigature2;
        case "im:ImTextHeight":
            return ImTextHeight;
        case "im:ImTextWidth":
            return ImTextWidth;
        case "im:ImFontSize":
            return ImFontSize;
        case "im:ImBold":
            return ImBold;
        case "im:ImUnderline":
            return ImUnderline;
        case "im:ImItalic":
            return ImItalic;
        case "im:ImStrikethrough":
            return ImStrikethrough;
        case "im:ImOmega":
            return ImOmega;
        case "im:ImSigma":
            return ImSigma;
        case "im:ImPageBreak":
            return ImPageBreak;
        case "im:ImSuperscript":
            return ImSuperscript;
        case "im:ImSubscript":
            return ImSubscript;
        case "im:ImSuperscript2":
            return ImSuperscript2;
        case "im:ImSubscript2":
            return ImSubscript2;
        case "im:ImTextColor":
            return ImTextColor;
        case "im:ImPagebreak":
            return ImPagebreak;
        case "im:ImClearFormatting":
            return ImClearFormatting;
        case "im:ImTable":
            return ImTable;
        case "im:ImTable2":
            return ImTable2;
        case "im:ImInsertTemplate":
            return ImInsertTemplate;
        case "im:ImPilcrow":
            return ImPilcrow;
        case "im:ImLtr":
            return ImLtr;
        case "im:ImRtl":
            return ImRtl;
        case "im:ImSection":
            return ImSection;
        case "im:ImParagraphLeft":
            return ImParagraphLeft;
        case "im:ImParagraphCenter":
            return ImParagraphCenter;
        case "im:ImParagraphRight":
            return ImParagraphRight;
        case "im:ImParagraphJustify":
            return ImParagraphJustify;
        case "im:ImIndentIncrease":
            return ImIndentIncrease;
        case "im:ImIndentDecrease":
            return ImIndentDecrease;
        case "im:ImShare":
            return ImShare;
        case "im:ImNewTab":
            return ImNewTab;
        case "im:ImEmbed":
            return ImEmbed;
        case "im:ImEmbed2":
            return ImEmbed2;
        case "im:ImTerminal":
            return ImTerminal;
        case "im:ImShare2":
            return ImShare2;
        case "im:ImMail":
            return ImMail;
        case "im:ImMail2":
            return ImMail2;
        case "im:ImMail3":
            return ImMail3;
        case "im:ImMail4":
            return ImMail4;
        case "im:ImAmazon":
            return ImAmazon;
        case "im:ImGoogle":
            return ImGoogle;
        case "im:ImGoogle2":
            return ImGoogle2;
        case "im:ImGoogle3":
            return ImGoogle3;
        case "im:ImGooglePlus":
            return ImGooglePlus;
        case "im:ImGooglePlus2":
            return ImGooglePlus2;
        case "im:ImGooglePlus3":
            return ImGooglePlus3;
        case "im:ImHangouts":
            return ImHangouts;
        case "im:ImGoogleDrive":
            return ImGoogleDrive;
        case "im:ImFacebook":
            return ImFacebook;
        case "im:ImFacebook2":
            return ImFacebook2;
        case "im:ImInstagram":
            return ImInstagram;
        case "im:ImWhatsapp":
            return ImWhatsapp;
        case "im:ImSpotify":
            return ImSpotify;
        case "im:ImTelegram":
            return ImTelegram;
        case "im:ImTwitter":
            return ImTwitter;
        case "im:ImVine":
            return ImVine;
        case "im:ImVk":
            return ImVk;
        case "im:ImRenren":
            return ImRenren;
        case "im:ImSinaWeibo":
            return ImSinaWeibo;
        case "im:ImRss":
            return ImRss;
        case "im:ImRss2":
            return ImRss2;
        case "im:ImYoutube":
            return ImYoutube;
        case "im:ImYoutube2":
            return ImYoutube2;
        case "im:ImTwitch":
            return ImTwitch;
        case "im:ImVimeo":
            return ImVimeo;
        case "im:ImVimeo2":
            return ImVimeo2;
        case "im:ImLanyrd":
            return ImLanyrd;
        case "im:ImFlickr":
            return ImFlickr;
        case "im:ImFlickr2":
            return ImFlickr2;
        case "im:ImFlickr3":
            return ImFlickr3;
        case "im:ImFlickr4":
            return ImFlickr4;
        case "im:ImDribbble":
            return ImDribbble;
        case "im:ImBehance":
            return ImBehance;
        case "im:ImBehance2":
            return ImBehance2;
        case "im:ImDeviantart":
            return ImDeviantart;
        case "im:Im500Px":
            return Im500Px;
        case "im:ImSteam":
            return ImSteam;
        case "im:ImSteam2":
            return ImSteam2;
        case "im:ImDropbox":
            return ImDropbox;
        case "im:ImOnedrive":
            return ImOnedrive;
        case "im:ImGithub":
            return ImGithub;
        case "im:ImNpm":
            return ImNpm;
        case "im:ImBasecamp":
            return ImBasecamp;
        case "im:ImTrello":
            return ImTrello;
        case "im:ImWordpress":
            return ImWordpress;
        case "im:ImJoomla":
            return ImJoomla;
        case "im:ImEllo":
            return ImEllo;
        case "im:ImBlogger":
            return ImBlogger;
        case "im:ImBlogger2":
            return ImBlogger2;
        case "im:ImTumblr":
            return ImTumblr;
        case "im:ImTumblr2":
            return ImTumblr2;
        case "im:ImYahoo":
            return ImYahoo;
        case "im:ImYahoo2":
            return ImYahoo2;
        case "im:ImTux":
            return ImTux;
        case "im:ImAppleinc":
            return ImAppleinc;
        case "im:ImFinder":
            return ImFinder;
        case "im:ImAndroid":
            return ImAndroid;
        case "im:ImWindows":
            return ImWindows;
        case "im:ImWindows8":
            return ImWindows8;
        case "im:ImSoundcloud":
            return ImSoundcloud;
        case "im:ImSoundcloud2":
            return ImSoundcloud2;
        case "im:ImSkype":
            return ImSkype;
        case "im:ImReddit":
            return ImReddit;
        case "im:ImHackernews":
            return ImHackernews;
        case "im:ImWikipedia":
            return ImWikipedia;
        case "im:ImLinkedin":
            return ImLinkedin;
        case "im:ImLinkedin2":
            return ImLinkedin2;
        case "im:ImLastfm":
            return ImLastfm;
        case "im:ImLastfm2":
            return ImLastfm2;
        case "im:ImDelicious":
            return ImDelicious;
        case "im:ImStumbleupon":
            return ImStumbleupon;
        case "im:ImStumbleupon2":
            return ImStumbleupon2;
        case "im:ImStackoverflow":
            return ImStackoverflow;
        case "im:ImPinterest":
            return ImPinterest;
        case "im:ImPinterest2":
            return ImPinterest2;
        case "im:ImXing":
            return ImXing;
        case "im:ImXing2":
            return ImXing2;
        case "im:ImFlattr":
            return ImFlattr;
        case "im:ImFoursquare":
            return ImFoursquare;
        case "im:ImYelp":
            return ImYelp;
        case "im:ImPaypal":
            return ImPaypal;
        case "im:ImChrome":
            return ImChrome;
        case "im:ImFirefox":
            return ImFirefox;
        case "im:ImIe":
            return ImIe;
        case "im:ImEdge":
            return ImEdge;
        case "im:ImSafari":
            return ImSafari;
        case "im:ImOpera":
            return ImOpera;
        case "im:ImFilePdf":
            return ImFilePdf;
        case "im:ImFileOpenoffice":
            return ImFileOpenoffice;
        case "im:ImFileWord":
            return ImFileWord;
        case "im:ImFileExcel":
            return ImFileExcel;
        case "im:ImLibreoffice":
            return ImLibreoffice;
        case "im:ImHtmlFive":
            return ImHtmlFive;
        case "im:ImHtmlFive2":
            return ImHtmlFive2;
        case "im:ImCss3":
            return ImCss3;
        case "im:ImGit":
            return ImGit;
        case "im:ImCodepen":
            return ImCodepen;
        case "im:ImSvg":
            return ImSvg;
        case "im:ImIcoMoon":
            return ImIcoMoon;
    }
}
