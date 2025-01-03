import type {IconType} from "react-icons";

import {
    IoIosAddCircleOutline,
    IoIosAddCircle,
    IoIosAdd,
    IoIosAirplane,
    IoIosAlarm,
    IoIosAlbums,
    IoIosAlert,
    IoIosAmericanFootball,
    IoIosAnalytics,
    IoIosAperture,
    IoIosApps,
    IoIosAppstore,
    IoIosArchive,
    IoIosArrowBack,
    IoIosArrowDown,
    IoIosArrowDropdownCircle,
    IoIosArrowDropdown,
    IoIosArrowDropleftCircle,
    IoIosArrowDropleft,
    IoIosArrowDroprightCircle,
    IoIosArrowDropright,
    IoIosArrowDropupCircle,
    IoIosArrowDropup,
    IoIosArrowForward,
    IoIosArrowRoundBack,
    IoIosArrowRoundDown,
    IoIosArrowRoundForward,
    IoIosArrowRoundUp,
    IoIosArrowUp,
    IoIosAt,
    IoIosAttach,
    IoIosBackspace,
    IoIosBarcode,
    IoIosBaseball,
    IoIosBasket,
    IoIosBasketball,
    IoIosBatteryCharging,
    IoIosBatteryDead,
    IoIosBatteryFull,
    IoIosBeaker,
    IoIosBed,
    IoIosBeer,
    IoIosBicycle,
    IoIosBluetooth,
    IoIosBoat,
    IoIosBody,
    IoIosBonfire,
    IoIosBook,
    IoIosBookmark,
    IoIosBookmarks,
    IoIosBowtie,
    IoIosBriefcase,
    IoIosBrowsers,
    IoIosBrush,
    IoIosBug,
    IoIosBuild,
    IoIosBulb,
    IoIosBus,
    IoIosBusiness,
    IoIosCafe,
    IoIosCalculator,
    IoIosCalendar,
    IoIosCall,
    IoIosCamera,
    IoIosCar,
    IoIosCard,
    IoIosCart,
    IoIosCash,
    IoIosCellular,
    IoIosChatboxes,
    IoIosChatbubbles,
    IoIosCheckboxOutline,
    IoIosCheckbox,
    IoIosCheckmarkCircleOutline,
    IoIosCheckmarkCircle,
    IoIosCheckmark,
    IoIosClipboard,
    IoIosClock,
    IoIosCloseCircleOutline,
    IoIosCloseCircle,
    IoIosClose,
    IoIosCloudCircle,
    IoIosCloudDone,
    IoIosCloudDownload,
    IoIosCloudOutline,
    IoIosCloudUpload,
    IoIosCloud,
    IoIosCloudyNight,
    IoIosCloudy,
    IoIosCodeDownload,
    IoIosCodeWorking,
    IoIosCode,
    IoIosCog,
    IoIosColorFill,
    IoIosColorFilter,
    IoIosColorPalette,
    IoIosColorWand,
    IoIosCompass,
    IoIosConstruct,
    IoIosContact,
    IoIosContacts,
    IoIosContract,
    IoIosContrast,
    IoIosCopy,
    IoIosCreate,
    IoIosCrop,
    IoIosCube,
    IoIosCut,
    IoIosDesktop,
    IoIosDisc,
    IoIosDocument,
    IoIosDoneAll,
    IoIosDownload,
    IoIosEasel,
    IoIosEgg,
    IoIosExit,
    IoIosExpand,
    IoIosEyeOff,
    IoIosEye,
    IoIosFastforward,
    IoIosFemale,
    IoIosFiling,
    IoIosFilm,
    IoIosFingerPrint,
    IoIosFitness,
    IoIosFlag,
    IoIosFlame,
    IoIosFlashOff,
    IoIosFlash,
    IoIosFlashlight,
    IoIosFlask,
    IoIosFlower,
    IoIosFolderOpen,
    IoIosFolder,
    IoIosFootball,
    IoIosFunnel,
    IoIosGift,
    IoIosGitBranch,
    IoIosGitCommit,
    IoIosGitCompare,
    IoIosGitMerge,
    IoIosGitNetwork,
    IoIosGitPullRequest,
    IoIosGlasses,
    IoIosGlobe,
    IoIosGrid,
    IoIosHammer,
    IoIosHand,
    IoIosHappy,
    IoIosHeadset,
    IoIosHeartDislike,
    IoIosHeartEmpty,
    IoIosHeartHalf,
    IoIosHeart,
    IoIosHelpBuoy,
    IoIosHelpCircleOutline,
    IoIosHelpCircle,
    IoIosHelp,
    IoIosHome,
    IoIosHourglass,
    IoIosIceCream,
    IoIosImage,
    IoIosImages,
    IoIosInfinite,
    IoIosInformationCircleOutline,
    IoIosInformationCircle,
    IoIosInformation,
    IoIosJet,
    IoIosJournal,
    IoIosKey,
    IoIosKeypad,
    IoIosLaptop,
    IoIosLeaf,
    IoIosLink,
    IoIosListBox,
    IoIosList,
    IoIosLocate,
    IoIosLock,
    IoIosLogIn,
    IoIosLogOut,
    IoIosMagnet,
    IoIosMailOpen,
    IoIosMailUnread,
    IoIosMail,
    IoIosMale,
    IoIosMan,
    IoIosMap,
    IoIosMedal,
    IoIosMedical,
    IoIosMedkit,
    IoIosMegaphone,
    IoIosMenu,
    IoIosMicOff,
    IoIosMic,
    IoIosMicrophone,
    IoIosMoon,
    IoIosMore,
    IoIosMove,
    IoIosMusicalNote,
    IoIosMusicalNotes,
    IoIosNavigate,
    IoIosNotificationsOff,
    IoIosNotificationsOutline,
    IoIosNotifications,
    IoIosNuclear,
    IoIosNutrition,
    IoIosOpen,
    IoIosOptions,
    IoIosOutlet,
    IoIosPaperPlane,
    IoIosPaper,
    IoIosPartlySunny,
    IoIosPause,
    IoIosPaw,
    IoIosPeople,
    IoIosPersonAdd,
    IoIosPerson,
    IoIosPhoneLandscape,
    IoIosPhonePortrait,
    IoIosPhotos,
    IoIosPie,
    IoIosPin,
    IoIosPint,
    IoIosPizza,
    IoIosPlanet,
    IoIosPlayCircle,
    IoIosPlay,
    IoIosPodium,
    IoIosPower,
    IoIosPricetag,
    IoIosPricetags,
    IoIosPrint,
    IoIosPulse,
    IoIosQrScanner,
    IoIosQuote,
    IoIosRadioButtonOff,
    IoIosRadioButtonOn,
    IoIosRadio,
    IoIosRainy,
    IoIosRecording,
    IoIosRedo,
    IoIosRefreshCircle,
    IoIosRefresh,
    IoIosRemoveCircleOutline,
    IoIosRemoveCircle,
    IoIosRemove,
    IoIosReorder,
    IoIosRepeat,
    IoIosResize,
    IoIosRestaurant,
    IoIosReturnLeft,
    IoIosReturnRight,
    IoIosReverseCamera,
    IoIosRewind,
    IoIosRibbon,
    IoIosRocket,
    IoIosRose,
    IoIosSad,
    IoIosSave,
    IoIosSchool,
    IoIosSearch,
    IoIosSend,
    IoIosSettings,
    IoIosShareAlt,
    IoIosShare,
    IoIosShirt,
    IoIosShuffle,
    IoIosSkipBackward,
    IoIosSkipForward,
    IoIosSnow,
    IoIosSpeedometer,
    IoIosSquareOutline,
    IoIosSquare,
    IoIosStarHalf,
    IoIosStarOutline,
    IoIosStar,
    IoIosStats,
    IoIosStopwatch,
    IoIosSubway,
    IoIosSunny,
    IoIosSwap,
    IoIosSwitch,
    IoIosSync,
    IoIosTabletLandscape,
    IoIosTabletPortrait,
    IoIosTennisball,
    IoIosText,
    IoIosThermometer,
    IoIosThumbsDown,
    IoIosThumbsUp,
    IoIosThunderstorm,
    IoIosTime,
    IoIosTimer,
    IoIosToday,
    IoIosTrain,
    IoIosTransgender,
    IoIosTrash,
    IoIosTrendingDown,
    IoIosTrendingUp,
    IoIosTrophy,
    IoIosTv,
    IoIosUmbrella,
    IoIosUndo,
    IoIosUnlock,
    IoIosVideocam,
    IoIosVolumeHigh,
    IoIosVolumeLow,
    IoIosVolumeMute,
    IoIosVolumeOff,
    IoIosWalk,
    IoIosWallet,
    IoIosWarning,
    IoIosWatch,
    IoIosWater,
    IoIosWifi,
    IoIosWine,
    IoIosWoman,
    IoLogoAndroid,
    IoLogoAngular,
    IoLogoApple,
    IoLogoBitbucket,
    IoLogoBitcoin,
    IoLogoBuffer,
    IoLogoChrome,
    IoLogoClosedCaptioning,
    IoLogoCodepen,
    IoLogoCss3,
    IoLogoDesignernews,
    IoLogoDribbble,
    IoLogoDropbox,
    IoLogoEuro,
    IoLogoFacebook,
    IoLogoFlickr,
    IoLogoFoursquare,
    IoLogoFreebsdDevil,
    IoLogoGameControllerA,
    IoLogoGameControllerB,
    IoLogoGithub,
    IoLogoGoogle,
    IoLogoGoogleplus,
    IoLogoHackernews,
    IoLogoHtml5,
    IoLogoInstagram,
    IoLogoIonic,
    IoLogoIonitron,
    IoLogoJavascript,
    IoLogoLinkedin,
    IoLogoMarkdown,
    IoLogoModelS,
    IoLogoNoSmoking,
    IoLogoNodejs,
    IoLogoNpm,
    IoLogoOctocat,
    IoLogoPinterest,
    IoLogoPlaystation,
    IoLogoPolymer,
    IoLogoPython,
    IoLogoReddit,
    IoLogoRss,
    IoLogoSass,
    IoLogoSkype,
    IoLogoSlack,
    IoLogoSnapchat,
    IoLogoSteam,
    IoLogoTumblr,
    IoLogoTux,
    IoLogoTwitch,
    IoLogoTwitter,
    IoLogoUsd,
    IoLogoVimeo,
    IoLogoVk,
    IoLogoWhatsapp,
    IoLogoWindows,
    IoLogoWordpress,
    IoLogoXbox,
    IoLogoXing,
    IoLogoYahoo,
    IoLogoYen,
    IoLogoYoutube,
    IoMdAddCircleOutline,
    IoMdAddCircle,
    IoMdAdd,
    IoMdAirplane,
    IoMdAlarm,
    IoMdAlbums,
    IoMdAlert,
    IoMdAmericanFootball,
    IoMdAnalytics,
    IoMdAperture,
    IoMdApps,
    IoMdAppstore,
    IoMdArchive,
    IoMdArrowBack,
    IoMdArrowDown,
    IoMdArrowDropdownCircle,
    IoMdArrowDropdown,
    IoMdArrowDropleftCircle,
    IoMdArrowDropleft,
    IoMdArrowDroprightCircle,
    IoMdArrowDropright,
    IoMdArrowDropupCircle,
    IoMdArrowDropup,
    IoMdArrowForward,
    IoMdArrowRoundBack,
    IoMdArrowRoundDown,
    IoMdArrowRoundForward,
    IoMdArrowRoundUp,
    IoMdArrowUp,
    IoMdAt,
    IoMdAttach,
    IoMdBackspace,
    IoMdBarcode,
    IoMdBaseball,
    IoMdBasket,
    IoMdBasketball,
    IoMdBatteryCharging,
    IoMdBatteryDead,
    IoMdBatteryFull,
    IoMdBeaker,
    IoMdBed,
    IoMdBeer,
    IoMdBicycle,
    IoMdBluetooth,
    IoMdBoat,
    IoMdBody,
    IoMdBonfire,
    IoMdBook,
    IoMdBookmark,
    IoMdBookmarks,
    IoMdBowtie,
    IoMdBriefcase,
    IoMdBrowsers,
    IoMdBrush,
    IoMdBug,
    IoMdBuild,
    IoMdBulb,
    IoMdBus,
    IoMdBusiness,
    IoMdCafe,
    IoMdCalculator,
    IoMdCalendar,
    IoMdCall,
    IoMdCamera,
    IoMdCar,
    IoMdCard,
    IoMdCart,
    IoMdCash,
    IoMdCellular,
    IoMdChatboxes,
    IoMdChatbubbles,
    IoMdCheckboxOutline,
    IoMdCheckbox,
    IoMdCheckmarkCircleOutline,
    IoMdCheckmarkCircle,
    IoMdCheckmark,
    IoMdClipboard,
    IoMdClock,
    IoMdCloseCircleOutline,
    IoMdCloseCircle,
    IoMdClose,
    IoMdCloudCircle,
    IoMdCloudDone,
    IoMdCloudDownload,
    IoMdCloudOutline,
    IoMdCloudUpload,
    IoMdCloud,
    IoMdCloudyNight,
    IoMdCloudy,
    IoMdCodeDownload,
    IoMdCodeWorking,
    IoMdCode,
    IoMdCog,
    IoMdColorFill,
    IoMdColorFilter,
    IoMdColorPalette,
    IoMdColorWand,
    IoMdCompass,
    IoMdConstruct,
    IoMdContact,
    IoMdContacts,
    IoMdContract,
    IoMdContrast,
    IoMdCopy,
    IoMdCreate,
    IoMdCrop,
    IoMdCube,
    IoMdCut,
    IoMdDesktop,
    IoMdDisc,
    IoMdDocument,
    IoMdDoneAll,
    IoMdDownload,
    IoMdEasel,
    IoMdEgg,
    IoMdExit,
    IoMdExpand,
    IoMdEyeOff,
    IoMdEye,
    IoMdFastforward,
    IoMdFemale,
    IoMdFiling,
    IoMdFilm,
    IoMdFingerPrint,
    IoMdFitness,
    IoMdFlag,
    IoMdFlame,
    IoMdFlashOff,
    IoMdFlash,
    IoMdFlashlight,
    IoMdFlask,
    IoMdFlower,
    IoMdFolderOpen,
    IoMdFolder,
    IoMdFootball,
    IoMdFunnel,
    IoMdGift,
    IoMdGitBranch,
    IoMdGitCommit,
    IoMdGitCompare,
    IoMdGitMerge,
    IoMdGitNetwork,
    IoMdGitPullRequest,
    IoMdGlasses,
    IoMdGlobe,
    IoMdGrid,
    IoMdHammer,
    IoMdHand,
    IoMdHappy,
    IoMdHeadset,
    IoMdHeartDislike,
    IoMdHeartEmpty,
    IoMdHeartHalf,
    IoMdHeart,
    IoMdHelpBuoy,
    IoMdHelpCircleOutline,
    IoMdHelpCircle,
    IoMdHelp,
    IoMdHome,
    IoMdHourglass,
    IoMdIceCream,
    IoMdImage,
    IoMdImages,
    IoMdInfinite,
    IoMdInformationCircleOutline,
    IoMdInformationCircle,
    IoMdInformation,
    IoMdJet,
    IoMdJournal,
    IoMdKey,
    IoMdKeypad,
    IoMdLaptop,
    IoMdLeaf,
    IoMdLink,
    IoMdListBox,
    IoMdList,
    IoMdLocate,
    IoMdLock,
    IoMdLogIn,
    IoMdLogOut,
    IoMdMagnet,
    IoMdMailOpen,
    IoMdMailUnread,
    IoMdMail,
    IoMdMale,
    IoMdMan,
    IoMdMap,
    IoMdMedal,
    IoMdMedical,
    IoMdMedkit,
    IoMdMegaphone,
    IoMdMenu,
    IoMdMicOff,
    IoMdMic,
    IoMdMicrophone,
    IoMdMoon,
    IoMdMore,
    IoMdMove,
    IoMdMusicalNote,
    IoMdMusicalNotes,
    IoMdNavigate,
    IoMdNotificationsOff,
    IoMdNotificationsOutline,
    IoMdNotifications,
    IoMdNuclear,
    IoMdNutrition,
    IoMdOpen,
    IoMdOptions,
    IoMdOutlet,
    IoMdPaperPlane,
    IoMdPaper,
    IoMdPartlySunny,
    IoMdPause,
    IoMdPaw,
    IoMdPeople,
    IoMdPersonAdd,
    IoMdPerson,
    IoMdPhoneLandscape,
    IoMdPhonePortrait,
    IoMdPhotos,
    IoMdPie,
    IoMdPin,
    IoMdPint,
    IoMdPizza,
    IoMdPlanet,
    IoMdPlayCircle,
    IoMdPlay,
    IoMdPodium,
    IoMdPower,
    IoMdPricetag,
    IoMdPricetags,
    IoMdPrint,
    IoMdPulse,
    IoMdQrScanner,
    IoMdQuote,
    IoMdRadioButtonOff,
    IoMdRadioButtonOn,
    IoMdRadio,
    IoMdRainy,
    IoMdRecording,
    IoMdRedo,
    IoMdRefreshCircle,
    IoMdRefresh,
    IoMdRemoveCircleOutline,
    IoMdRemoveCircle,
    IoMdRemove,
    IoMdReorder,
    IoMdRepeat,
    IoMdResize,
    IoMdRestaurant,
    IoMdReturnLeft,
    IoMdReturnRight,
    IoMdReverseCamera,
    IoMdRewind,
    IoMdRibbon,
    IoMdRocket,
    IoMdRose,
    IoMdSad,
    IoMdSave,
    IoMdSchool,
    IoMdSearch,
    IoMdSend,
    IoMdSettings,
    IoMdShareAlt,
    IoMdShare,
    IoMdShirt,
    IoMdShuffle,
    IoMdSkipBackward,
    IoMdSkipForward,
    IoMdSnow,
    IoMdSpeedometer,
    IoMdSquareOutline,
    IoMdSquare,
    IoMdStarHalf,
    IoMdStarOutline,
    IoMdStar,
    IoMdStats,
    IoMdStopwatch,
    IoMdSubway,
    IoMdSunny,
    IoMdSwap,
    IoMdSwitch,
    IoMdSync,
    IoMdTabletLandscape,
    IoMdTabletPortrait,
    IoMdTennisball,
    IoMdText,
    IoMdThermometer,
    IoMdThumbsDown,
    IoMdThumbsUp,
    IoMdThunderstorm,
    IoMdTime,
    IoMdTimer,
    IoMdToday,
    IoMdTrain,
    IoMdTransgender,
    IoMdTrash,
    IoMdTrendingDown,
    IoMdTrendingUp,
    IoMdTrophy,
    IoMdTv,
    IoMdUmbrella,
    IoMdUndo,
    IoMdUnlock,
    IoMdVideocam,
    IoMdVolumeHigh,
    IoMdVolumeLow,
    IoMdVolumeMute,
    IoMdVolumeOff,
    IoMdWalk,
    IoMdWallet,
    IoMdWarning,
    IoMdWatch,
    IoMdWater,
    IoMdWifi,
    IoMdWine,
    IoMdWoman,
} from "react-icons/io"

export function nameToReactIcon_io_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "io:IoIosAddCircleOutline":
            return IoIosAddCircleOutline;
        case "io:IoIosAddCircle":
            return IoIosAddCircle;
        case "io:IoIosAdd":
            return IoIosAdd;
        case "io:IoIosAirplane":
            return IoIosAirplane;
        case "io:IoIosAlarm":
            return IoIosAlarm;
        case "io:IoIosAlbums":
            return IoIosAlbums;
        case "io:IoIosAlert":
            return IoIosAlert;
        case "io:IoIosAmericanFootball":
            return IoIosAmericanFootball;
        case "io:IoIosAnalytics":
            return IoIosAnalytics;
        case "io:IoIosAperture":
            return IoIosAperture;
        case "io:IoIosApps":
            return IoIosApps;
        case "io:IoIosAppstore":
            return IoIosAppstore;
        case "io:IoIosArchive":
            return IoIosArchive;
        case "io:IoIosArrowBack":
            return IoIosArrowBack;
        case "io:IoIosArrowDown":
            return IoIosArrowDown;
        case "io:IoIosArrowDropdownCircle":
            return IoIosArrowDropdownCircle;
        case "io:IoIosArrowDropdown":
            return IoIosArrowDropdown;
        case "io:IoIosArrowDropleftCircle":
            return IoIosArrowDropleftCircle;
        case "io:IoIosArrowDropleft":
            return IoIosArrowDropleft;
        case "io:IoIosArrowDroprightCircle":
            return IoIosArrowDroprightCircle;
        case "io:IoIosArrowDropright":
            return IoIosArrowDropright;
        case "io:IoIosArrowDropupCircle":
            return IoIosArrowDropupCircle;
        case "io:IoIosArrowDropup":
            return IoIosArrowDropup;
        case "io:IoIosArrowForward":
            return IoIosArrowForward;
        case "io:IoIosArrowRoundBack":
            return IoIosArrowRoundBack;
        case "io:IoIosArrowRoundDown":
            return IoIosArrowRoundDown;
        case "io:IoIosArrowRoundForward":
            return IoIosArrowRoundForward;
        case "io:IoIosArrowRoundUp":
            return IoIosArrowRoundUp;
        case "io:IoIosArrowUp":
            return IoIosArrowUp;
        case "io:IoIosAt":
            return IoIosAt;
        case "io:IoIosAttach":
            return IoIosAttach;
        case "io:IoIosBackspace":
            return IoIosBackspace;
        case "io:IoIosBarcode":
            return IoIosBarcode;
        case "io:IoIosBaseball":
            return IoIosBaseball;
        case "io:IoIosBasket":
            return IoIosBasket;
        case "io:IoIosBasketball":
            return IoIosBasketball;
        case "io:IoIosBatteryCharging":
            return IoIosBatteryCharging;
        case "io:IoIosBatteryDead":
            return IoIosBatteryDead;
        case "io:IoIosBatteryFull":
            return IoIosBatteryFull;
        case "io:IoIosBeaker":
            return IoIosBeaker;
        case "io:IoIosBed":
            return IoIosBed;
        case "io:IoIosBeer":
            return IoIosBeer;
        case "io:IoIosBicycle":
            return IoIosBicycle;
        case "io:IoIosBluetooth":
            return IoIosBluetooth;
        case "io:IoIosBoat":
            return IoIosBoat;
        case "io:IoIosBody":
            return IoIosBody;
        case "io:IoIosBonfire":
            return IoIosBonfire;
        case "io:IoIosBook":
            return IoIosBook;
        case "io:IoIosBookmark":
            return IoIosBookmark;
        case "io:IoIosBookmarks":
            return IoIosBookmarks;
        case "io:IoIosBowtie":
            return IoIosBowtie;
        case "io:IoIosBriefcase":
            return IoIosBriefcase;
        case "io:IoIosBrowsers":
            return IoIosBrowsers;
        case "io:IoIosBrush":
            return IoIosBrush;
        case "io:IoIosBug":
            return IoIosBug;
        case "io:IoIosBuild":
            return IoIosBuild;
        case "io:IoIosBulb":
            return IoIosBulb;
        case "io:IoIosBus":
            return IoIosBus;
        case "io:IoIosBusiness":
            return IoIosBusiness;
        case "io:IoIosCafe":
            return IoIosCafe;
        case "io:IoIosCalculator":
            return IoIosCalculator;
        case "io:IoIosCalendar":
            return IoIosCalendar;
        case "io:IoIosCall":
            return IoIosCall;
        case "io:IoIosCamera":
            return IoIosCamera;
        case "io:IoIosCar":
            return IoIosCar;
        case "io:IoIosCard":
            return IoIosCard;
        case "io:IoIosCart":
            return IoIosCart;
        case "io:IoIosCash":
            return IoIosCash;
        case "io:IoIosCellular":
            return IoIosCellular;
        case "io:IoIosChatboxes":
            return IoIosChatboxes;
        case "io:IoIosChatbubbles":
            return IoIosChatbubbles;
        case "io:IoIosCheckboxOutline":
            return IoIosCheckboxOutline;
        case "io:IoIosCheckbox":
            return IoIosCheckbox;
        case "io:IoIosCheckmarkCircleOutline":
            return IoIosCheckmarkCircleOutline;
        case "io:IoIosCheckmarkCircle":
            return IoIosCheckmarkCircle;
        case "io:IoIosCheckmark":
            return IoIosCheckmark;
        case "io:IoIosClipboard":
            return IoIosClipboard;
        case "io:IoIosClock":
            return IoIosClock;
        case "io:IoIosCloseCircleOutline":
            return IoIosCloseCircleOutline;
        case "io:IoIosCloseCircle":
            return IoIosCloseCircle;
        case "io:IoIosClose":
            return IoIosClose;
        case "io:IoIosCloudCircle":
            return IoIosCloudCircle;
        case "io:IoIosCloudDone":
            return IoIosCloudDone;
        case "io:IoIosCloudDownload":
            return IoIosCloudDownload;
        case "io:IoIosCloudOutline":
            return IoIosCloudOutline;
        case "io:IoIosCloudUpload":
            return IoIosCloudUpload;
        case "io:IoIosCloud":
            return IoIosCloud;
        case "io:IoIosCloudyNight":
            return IoIosCloudyNight;
        case "io:IoIosCloudy":
            return IoIosCloudy;
        case "io:IoIosCodeDownload":
            return IoIosCodeDownload;
        case "io:IoIosCodeWorking":
            return IoIosCodeWorking;
        case "io:IoIosCode":
            return IoIosCode;
        case "io:IoIosCog":
            return IoIosCog;
        case "io:IoIosColorFill":
            return IoIosColorFill;
        case "io:IoIosColorFilter":
            return IoIosColorFilter;
        case "io:IoIosColorPalette":
            return IoIosColorPalette;
        case "io:IoIosColorWand":
            return IoIosColorWand;
        case "io:IoIosCompass":
            return IoIosCompass;
        case "io:IoIosConstruct":
            return IoIosConstruct;
        case "io:IoIosContact":
            return IoIosContact;
        case "io:IoIosContacts":
            return IoIosContacts;
        case "io:IoIosContract":
            return IoIosContract;
        case "io:IoIosContrast":
            return IoIosContrast;
        case "io:IoIosCopy":
            return IoIosCopy;
        case "io:IoIosCreate":
            return IoIosCreate;
        case "io:IoIosCrop":
            return IoIosCrop;
        case "io:IoIosCube":
            return IoIosCube;
        case "io:IoIosCut":
            return IoIosCut;
        case "io:IoIosDesktop":
            return IoIosDesktop;
        case "io:IoIosDisc":
            return IoIosDisc;
        case "io:IoIosDocument":
            return IoIosDocument;
        case "io:IoIosDoneAll":
            return IoIosDoneAll;
        case "io:IoIosDownload":
            return IoIosDownload;
        case "io:IoIosEasel":
            return IoIosEasel;
        case "io:IoIosEgg":
            return IoIosEgg;
        case "io:IoIosExit":
            return IoIosExit;
        case "io:IoIosExpand":
            return IoIosExpand;
        case "io:IoIosEyeOff":
            return IoIosEyeOff;
        case "io:IoIosEye":
            return IoIosEye;
        case "io:IoIosFastforward":
            return IoIosFastforward;
        case "io:IoIosFemale":
            return IoIosFemale;
        case "io:IoIosFiling":
            return IoIosFiling;
        case "io:IoIosFilm":
            return IoIosFilm;
        case "io:IoIosFingerPrint":
            return IoIosFingerPrint;
        case "io:IoIosFitness":
            return IoIosFitness;
        case "io:IoIosFlag":
            return IoIosFlag;
        case "io:IoIosFlame":
            return IoIosFlame;
        case "io:IoIosFlashOff":
            return IoIosFlashOff;
        case "io:IoIosFlash":
            return IoIosFlash;
        case "io:IoIosFlashlight":
            return IoIosFlashlight;
        case "io:IoIosFlask":
            return IoIosFlask;
        case "io:IoIosFlower":
            return IoIosFlower;
        case "io:IoIosFolderOpen":
            return IoIosFolderOpen;
        case "io:IoIosFolder":
            return IoIosFolder;
        case "io:IoIosFootball":
            return IoIosFootball;
        case "io:IoIosFunnel":
            return IoIosFunnel;
        case "io:IoIosGift":
            return IoIosGift;
        case "io:IoIosGitBranch":
            return IoIosGitBranch;
        case "io:IoIosGitCommit":
            return IoIosGitCommit;
        case "io:IoIosGitCompare":
            return IoIosGitCompare;
        case "io:IoIosGitMerge":
            return IoIosGitMerge;
        case "io:IoIosGitNetwork":
            return IoIosGitNetwork;
        case "io:IoIosGitPullRequest":
            return IoIosGitPullRequest;
        case "io:IoIosGlasses":
            return IoIosGlasses;
        case "io:IoIosGlobe":
            return IoIosGlobe;
        case "io:IoIosGrid":
            return IoIosGrid;
        case "io:IoIosHammer":
            return IoIosHammer;
        case "io:IoIosHand":
            return IoIosHand;
        case "io:IoIosHappy":
            return IoIosHappy;
        case "io:IoIosHeadset":
            return IoIosHeadset;
        case "io:IoIosHeartDislike":
            return IoIosHeartDislike;
        case "io:IoIosHeartEmpty":
            return IoIosHeartEmpty;
        case "io:IoIosHeartHalf":
            return IoIosHeartHalf;
        case "io:IoIosHeart":
            return IoIosHeart;
        case "io:IoIosHelpBuoy":
            return IoIosHelpBuoy;
        case "io:IoIosHelpCircleOutline":
            return IoIosHelpCircleOutline;
        case "io:IoIosHelpCircle":
            return IoIosHelpCircle;
        case "io:IoIosHelp":
            return IoIosHelp;
        case "io:IoIosHome":
            return IoIosHome;
        case "io:IoIosHourglass":
            return IoIosHourglass;
        case "io:IoIosIceCream":
            return IoIosIceCream;
        case "io:IoIosImage":
            return IoIosImage;
        case "io:IoIosImages":
            return IoIosImages;
        case "io:IoIosInfinite":
            return IoIosInfinite;
        case "io:IoIosInformationCircleOutline":
            return IoIosInformationCircleOutline;
        case "io:IoIosInformationCircle":
            return IoIosInformationCircle;
        case "io:IoIosInformation":
            return IoIosInformation;
        case "io:IoIosJet":
            return IoIosJet;
        case "io:IoIosJournal":
            return IoIosJournal;
        case "io:IoIosKey":
            return IoIosKey;
        case "io:IoIosKeypad":
            return IoIosKeypad;
        case "io:IoIosLaptop":
            return IoIosLaptop;
        case "io:IoIosLeaf":
            return IoIosLeaf;
        case "io:IoIosLink":
            return IoIosLink;
        case "io:IoIosListBox":
            return IoIosListBox;
        case "io:IoIosList":
            return IoIosList;
        case "io:IoIosLocate":
            return IoIosLocate;
        case "io:IoIosLock":
            return IoIosLock;
        case "io:IoIosLogIn":
            return IoIosLogIn;
        case "io:IoIosLogOut":
            return IoIosLogOut;
        case "io:IoIosMagnet":
            return IoIosMagnet;
        case "io:IoIosMailOpen":
            return IoIosMailOpen;
        case "io:IoIosMailUnread":
            return IoIosMailUnread;
        case "io:IoIosMail":
            return IoIosMail;
        case "io:IoIosMale":
            return IoIosMale;
        case "io:IoIosMan":
            return IoIosMan;
        case "io:IoIosMap":
            return IoIosMap;
        case "io:IoIosMedal":
            return IoIosMedal;
        case "io:IoIosMedical":
            return IoIosMedical;
        case "io:IoIosMedkit":
            return IoIosMedkit;
        case "io:IoIosMegaphone":
            return IoIosMegaphone;
        case "io:IoIosMenu":
            return IoIosMenu;
        case "io:IoIosMicOff":
            return IoIosMicOff;
        case "io:IoIosMic":
            return IoIosMic;
        case "io:IoIosMicrophone":
            return IoIosMicrophone;
        case "io:IoIosMoon":
            return IoIosMoon;
        case "io:IoIosMore":
            return IoIosMore;
        case "io:IoIosMove":
            return IoIosMove;
        case "io:IoIosMusicalNote":
            return IoIosMusicalNote;
        case "io:IoIosMusicalNotes":
            return IoIosMusicalNotes;
        case "io:IoIosNavigate":
            return IoIosNavigate;
        case "io:IoIosNotificationsOff":
            return IoIosNotificationsOff;
        case "io:IoIosNotificationsOutline":
            return IoIosNotificationsOutline;
        case "io:IoIosNotifications":
            return IoIosNotifications;
        case "io:IoIosNuclear":
            return IoIosNuclear;
        case "io:IoIosNutrition":
            return IoIosNutrition;
        case "io:IoIosOpen":
            return IoIosOpen;
        case "io:IoIosOptions":
            return IoIosOptions;
        case "io:IoIosOutlet":
            return IoIosOutlet;
        case "io:IoIosPaperPlane":
            return IoIosPaperPlane;
        case "io:IoIosPaper":
            return IoIosPaper;
        case "io:IoIosPartlySunny":
            return IoIosPartlySunny;
        case "io:IoIosPause":
            return IoIosPause;
        case "io:IoIosPaw":
            return IoIosPaw;
        case "io:IoIosPeople":
            return IoIosPeople;
        case "io:IoIosPersonAdd":
            return IoIosPersonAdd;
        case "io:IoIosPerson":
            return IoIosPerson;
        case "io:IoIosPhoneLandscape":
            return IoIosPhoneLandscape;
        case "io:IoIosPhonePortrait":
            return IoIosPhonePortrait;
        case "io:IoIosPhotos":
            return IoIosPhotos;
        case "io:IoIosPie":
            return IoIosPie;
        case "io:IoIosPin":
            return IoIosPin;
        case "io:IoIosPint":
            return IoIosPint;
        case "io:IoIosPizza":
            return IoIosPizza;
        case "io:IoIosPlanet":
            return IoIosPlanet;
        case "io:IoIosPlayCircle":
            return IoIosPlayCircle;
        case "io:IoIosPlay":
            return IoIosPlay;
        case "io:IoIosPodium":
            return IoIosPodium;
        case "io:IoIosPower":
            return IoIosPower;
        case "io:IoIosPricetag":
            return IoIosPricetag;
        case "io:IoIosPricetags":
            return IoIosPricetags;
        case "io:IoIosPrint":
            return IoIosPrint;
        case "io:IoIosPulse":
            return IoIosPulse;
        case "io:IoIosQrScanner":
            return IoIosQrScanner;
        case "io:IoIosQuote":
            return IoIosQuote;
        case "io:IoIosRadioButtonOff":
            return IoIosRadioButtonOff;
        case "io:IoIosRadioButtonOn":
            return IoIosRadioButtonOn;
        case "io:IoIosRadio":
            return IoIosRadio;
        case "io:IoIosRainy":
            return IoIosRainy;
        case "io:IoIosRecording":
            return IoIosRecording;
        case "io:IoIosRedo":
            return IoIosRedo;
        case "io:IoIosRefreshCircle":
            return IoIosRefreshCircle;
        case "io:IoIosRefresh":
            return IoIosRefresh;
        case "io:IoIosRemoveCircleOutline":
            return IoIosRemoveCircleOutline;
        case "io:IoIosRemoveCircle":
            return IoIosRemoveCircle;
        case "io:IoIosRemove":
            return IoIosRemove;
        case "io:IoIosReorder":
            return IoIosReorder;
        case "io:IoIosRepeat":
            return IoIosRepeat;
        case "io:IoIosResize":
            return IoIosResize;
        case "io:IoIosRestaurant":
            return IoIosRestaurant;
        case "io:IoIosReturnLeft":
            return IoIosReturnLeft;
        case "io:IoIosReturnRight":
            return IoIosReturnRight;
        case "io:IoIosReverseCamera":
            return IoIosReverseCamera;
        case "io:IoIosRewind":
            return IoIosRewind;
        case "io:IoIosRibbon":
            return IoIosRibbon;
        case "io:IoIosRocket":
            return IoIosRocket;
        case "io:IoIosRose":
            return IoIosRose;
        case "io:IoIosSad":
            return IoIosSad;
        case "io:IoIosSave":
            return IoIosSave;
        case "io:IoIosSchool":
            return IoIosSchool;
        case "io:IoIosSearch":
            return IoIosSearch;
        case "io:IoIosSend":
            return IoIosSend;
        case "io:IoIosSettings":
            return IoIosSettings;
        case "io:IoIosShareAlt":
            return IoIosShareAlt;
        case "io:IoIosShare":
            return IoIosShare;
        case "io:IoIosShirt":
            return IoIosShirt;
        case "io:IoIosShuffle":
            return IoIosShuffle;
        case "io:IoIosSkipBackward":
            return IoIosSkipBackward;
        case "io:IoIosSkipForward":
            return IoIosSkipForward;
        case "io:IoIosSnow":
            return IoIosSnow;
        case "io:IoIosSpeedometer":
            return IoIosSpeedometer;
        case "io:IoIosSquareOutline":
            return IoIosSquareOutline;
        case "io:IoIosSquare":
            return IoIosSquare;
        case "io:IoIosStarHalf":
            return IoIosStarHalf;
        case "io:IoIosStarOutline":
            return IoIosStarOutline;
        case "io:IoIosStar":
            return IoIosStar;
        case "io:IoIosStats":
            return IoIosStats;
        case "io:IoIosStopwatch":
            return IoIosStopwatch;
        case "io:IoIosSubway":
            return IoIosSubway;
        case "io:IoIosSunny":
            return IoIosSunny;
        case "io:IoIosSwap":
            return IoIosSwap;
        case "io:IoIosSwitch":
            return IoIosSwitch;
        case "io:IoIosSync":
            return IoIosSync;
        case "io:IoIosTabletLandscape":
            return IoIosTabletLandscape;
        case "io:IoIosTabletPortrait":
            return IoIosTabletPortrait;
        case "io:IoIosTennisball":
            return IoIosTennisball;
        case "io:IoIosText":
            return IoIosText;
        case "io:IoIosThermometer":
            return IoIosThermometer;
        case "io:IoIosThumbsDown":
            return IoIosThumbsDown;
        case "io:IoIosThumbsUp":
            return IoIosThumbsUp;
        case "io:IoIosThunderstorm":
            return IoIosThunderstorm;
        case "io:IoIosTime":
            return IoIosTime;
        case "io:IoIosTimer":
            return IoIosTimer;
        case "io:IoIosToday":
            return IoIosToday;
        case "io:IoIosTrain":
            return IoIosTrain;
        case "io:IoIosTransgender":
            return IoIosTransgender;
        case "io:IoIosTrash":
            return IoIosTrash;
        case "io:IoIosTrendingDown":
            return IoIosTrendingDown;
        case "io:IoIosTrendingUp":
            return IoIosTrendingUp;
        case "io:IoIosTrophy":
            return IoIosTrophy;
        case "io:IoIosTv":
            return IoIosTv;
        case "io:IoIosUmbrella":
            return IoIosUmbrella;
        case "io:IoIosUndo":
            return IoIosUndo;
        case "io:IoIosUnlock":
            return IoIosUnlock;
        case "io:IoIosVideocam":
            return IoIosVideocam;
        case "io:IoIosVolumeHigh":
            return IoIosVolumeHigh;
        case "io:IoIosVolumeLow":
            return IoIosVolumeLow;
        case "io:IoIosVolumeMute":
            return IoIosVolumeMute;
        case "io:IoIosVolumeOff":
            return IoIosVolumeOff;
        case "io:IoIosWalk":
            return IoIosWalk;
        case "io:IoIosWallet":
            return IoIosWallet;
        case "io:IoIosWarning":
            return IoIosWarning;
        case "io:IoIosWatch":
            return IoIosWatch;
        case "io:IoIosWater":
            return IoIosWater;
        case "io:IoIosWifi":
            return IoIosWifi;
        case "io:IoIosWine":
            return IoIosWine;
        case "io:IoIosWoman":
            return IoIosWoman;
        case "io:IoLogoAndroid":
            return IoLogoAndroid;
        case "io:IoLogoAngular":
            return IoLogoAngular;
        case "io:IoLogoApple":
            return IoLogoApple;
        case "io:IoLogoBitbucket":
            return IoLogoBitbucket;
        case "io:IoLogoBitcoin":
            return IoLogoBitcoin;
        case "io:IoLogoBuffer":
            return IoLogoBuffer;
        case "io:IoLogoChrome":
            return IoLogoChrome;
        case "io:IoLogoClosedCaptioning":
            return IoLogoClosedCaptioning;
        case "io:IoLogoCodepen":
            return IoLogoCodepen;
        case "io:IoLogoCss3":
            return IoLogoCss3;
        case "io:IoLogoDesignernews":
            return IoLogoDesignernews;
        case "io:IoLogoDribbble":
            return IoLogoDribbble;
        case "io:IoLogoDropbox":
            return IoLogoDropbox;
        case "io:IoLogoEuro":
            return IoLogoEuro;
        case "io:IoLogoFacebook":
            return IoLogoFacebook;
        case "io:IoLogoFlickr":
            return IoLogoFlickr;
        case "io:IoLogoFoursquare":
            return IoLogoFoursquare;
        case "io:IoLogoFreebsdDevil":
            return IoLogoFreebsdDevil;
        case "io:IoLogoGameControllerA":
            return IoLogoGameControllerA;
        case "io:IoLogoGameControllerB":
            return IoLogoGameControllerB;
        case "io:IoLogoGithub":
            return IoLogoGithub;
        case "io:IoLogoGoogle":
            return IoLogoGoogle;
        case "io:IoLogoGoogleplus":
            return IoLogoGoogleplus;
        case "io:IoLogoHackernews":
            return IoLogoHackernews;
        case "io:IoLogoHtml5":
            return IoLogoHtml5;
        case "io:IoLogoInstagram":
            return IoLogoInstagram;
        case "io:IoLogoIonic":
            return IoLogoIonic;
        case "io:IoLogoIonitron":
            return IoLogoIonitron;
        case "io:IoLogoJavascript":
            return IoLogoJavascript;
        case "io:IoLogoLinkedin":
            return IoLogoLinkedin;
        case "io:IoLogoMarkdown":
            return IoLogoMarkdown;
        case "io:IoLogoModelS":
            return IoLogoModelS;
        case "io:IoLogoNoSmoking":
            return IoLogoNoSmoking;
        case "io:IoLogoNodejs":
            return IoLogoNodejs;
        case "io:IoLogoNpm":
            return IoLogoNpm;
        case "io:IoLogoOctocat":
            return IoLogoOctocat;
        case "io:IoLogoPinterest":
            return IoLogoPinterest;
        case "io:IoLogoPlaystation":
            return IoLogoPlaystation;
        case "io:IoLogoPolymer":
            return IoLogoPolymer;
        case "io:IoLogoPython":
            return IoLogoPython;
        case "io:IoLogoReddit":
            return IoLogoReddit;
        case "io:IoLogoRss":
            return IoLogoRss;
        case "io:IoLogoSass":
            return IoLogoSass;
        case "io:IoLogoSkype":
            return IoLogoSkype;
        case "io:IoLogoSlack":
            return IoLogoSlack;
        case "io:IoLogoSnapchat":
            return IoLogoSnapchat;
        case "io:IoLogoSteam":
            return IoLogoSteam;
        case "io:IoLogoTumblr":
            return IoLogoTumblr;
        case "io:IoLogoTux":
            return IoLogoTux;
        case "io:IoLogoTwitch":
            return IoLogoTwitch;
        case "io:IoLogoTwitter":
            return IoLogoTwitter;
        case "io:IoLogoUsd":
            return IoLogoUsd;
        case "io:IoLogoVimeo":
            return IoLogoVimeo;
        case "io:IoLogoVk":
            return IoLogoVk;
        case "io:IoLogoWhatsapp":
            return IoLogoWhatsapp;
        case "io:IoLogoWindows":
            return IoLogoWindows;
        case "io:IoLogoWordpress":
            return IoLogoWordpress;
        case "io:IoLogoXbox":
            return IoLogoXbox;
        case "io:IoLogoXing":
            return IoLogoXing;
        case "io:IoLogoYahoo":
            return IoLogoYahoo;
        case "io:IoLogoYen":
            return IoLogoYen;
        case "io:IoLogoYoutube":
            return IoLogoYoutube;
        case "io:IoMdAddCircleOutline":
            return IoMdAddCircleOutline;
        case "io:IoMdAddCircle":
            return IoMdAddCircle;
        case "io:IoMdAdd":
            return IoMdAdd;
        case "io:IoMdAirplane":
            return IoMdAirplane;
        case "io:IoMdAlarm":
            return IoMdAlarm;
        case "io:IoMdAlbums":
            return IoMdAlbums;
        case "io:IoMdAlert":
            return IoMdAlert;
        case "io:IoMdAmericanFootball":
            return IoMdAmericanFootball;
        case "io:IoMdAnalytics":
            return IoMdAnalytics;
        case "io:IoMdAperture":
            return IoMdAperture;
        case "io:IoMdApps":
            return IoMdApps;
        case "io:IoMdAppstore":
            return IoMdAppstore;
        case "io:IoMdArchive":
            return IoMdArchive;
        case "io:IoMdArrowBack":
            return IoMdArrowBack;
        case "io:IoMdArrowDown":
            return IoMdArrowDown;
        case "io:IoMdArrowDropdownCircle":
            return IoMdArrowDropdownCircle;
        case "io:IoMdArrowDropdown":
            return IoMdArrowDropdown;
        case "io:IoMdArrowDropleftCircle":
            return IoMdArrowDropleftCircle;
        case "io:IoMdArrowDropleft":
            return IoMdArrowDropleft;
        case "io:IoMdArrowDroprightCircle":
            return IoMdArrowDroprightCircle;
        case "io:IoMdArrowDropright":
            return IoMdArrowDropright;
        case "io:IoMdArrowDropupCircle":
            return IoMdArrowDropupCircle;
        case "io:IoMdArrowDropup":
            return IoMdArrowDropup;
        case "io:IoMdArrowForward":
            return IoMdArrowForward;
        case "io:IoMdArrowRoundBack":
            return IoMdArrowRoundBack;
        case "io:IoMdArrowRoundDown":
            return IoMdArrowRoundDown;
        case "io:IoMdArrowRoundForward":
            return IoMdArrowRoundForward;
        case "io:IoMdArrowRoundUp":
            return IoMdArrowRoundUp;
        case "io:IoMdArrowUp":
            return IoMdArrowUp;
        case "io:IoMdAt":
            return IoMdAt;
        case "io:IoMdAttach":
            return IoMdAttach;
        case "io:IoMdBackspace":
            return IoMdBackspace;
        case "io:IoMdBarcode":
            return IoMdBarcode;
        case "io:IoMdBaseball":
            return IoMdBaseball;
        case "io:IoMdBasket":
            return IoMdBasket;
        case "io:IoMdBasketball":
            return IoMdBasketball;
        case "io:IoMdBatteryCharging":
            return IoMdBatteryCharging;
        case "io:IoMdBatteryDead":
            return IoMdBatteryDead;
        case "io:IoMdBatteryFull":
            return IoMdBatteryFull;
        case "io:IoMdBeaker":
            return IoMdBeaker;
        case "io:IoMdBed":
            return IoMdBed;
        case "io:IoMdBeer":
            return IoMdBeer;
        case "io:IoMdBicycle":
            return IoMdBicycle;
        case "io:IoMdBluetooth":
            return IoMdBluetooth;
        case "io:IoMdBoat":
            return IoMdBoat;
        case "io:IoMdBody":
            return IoMdBody;
        case "io:IoMdBonfire":
            return IoMdBonfire;
        case "io:IoMdBook":
            return IoMdBook;
        case "io:IoMdBookmark":
            return IoMdBookmark;
        case "io:IoMdBookmarks":
            return IoMdBookmarks;
        case "io:IoMdBowtie":
            return IoMdBowtie;
        case "io:IoMdBriefcase":
            return IoMdBriefcase;
        case "io:IoMdBrowsers":
            return IoMdBrowsers;
        case "io:IoMdBrush":
            return IoMdBrush;
        case "io:IoMdBug":
            return IoMdBug;
        case "io:IoMdBuild":
            return IoMdBuild;
        case "io:IoMdBulb":
            return IoMdBulb;
        case "io:IoMdBus":
            return IoMdBus;
        case "io:IoMdBusiness":
            return IoMdBusiness;
        case "io:IoMdCafe":
            return IoMdCafe;
        case "io:IoMdCalculator":
            return IoMdCalculator;
        case "io:IoMdCalendar":
            return IoMdCalendar;
        case "io:IoMdCall":
            return IoMdCall;
        case "io:IoMdCamera":
            return IoMdCamera;
        case "io:IoMdCar":
            return IoMdCar;
        case "io:IoMdCard":
            return IoMdCard;
        case "io:IoMdCart":
            return IoMdCart;
        case "io:IoMdCash":
            return IoMdCash;
        case "io:IoMdCellular":
            return IoMdCellular;
        case "io:IoMdChatboxes":
            return IoMdChatboxes;
        case "io:IoMdChatbubbles":
            return IoMdChatbubbles;
        case "io:IoMdCheckboxOutline":
            return IoMdCheckboxOutline;
        case "io:IoMdCheckbox":
            return IoMdCheckbox;
        case "io:IoMdCheckmarkCircleOutline":
            return IoMdCheckmarkCircleOutline;
        case "io:IoMdCheckmarkCircle":
            return IoMdCheckmarkCircle;
        case "io:IoMdCheckmark":
            return IoMdCheckmark;
        case "io:IoMdClipboard":
            return IoMdClipboard;
        case "io:IoMdClock":
            return IoMdClock;
        case "io:IoMdCloseCircleOutline":
            return IoMdCloseCircleOutline;
        case "io:IoMdCloseCircle":
            return IoMdCloseCircle;
        case "io:IoMdClose":
            return IoMdClose;
        case "io:IoMdCloudCircle":
            return IoMdCloudCircle;
        case "io:IoMdCloudDone":
            return IoMdCloudDone;
        case "io:IoMdCloudDownload":
            return IoMdCloudDownload;
        case "io:IoMdCloudOutline":
            return IoMdCloudOutline;
        case "io:IoMdCloudUpload":
            return IoMdCloudUpload;
        case "io:IoMdCloud":
            return IoMdCloud;
        case "io:IoMdCloudyNight":
            return IoMdCloudyNight;
        case "io:IoMdCloudy":
            return IoMdCloudy;
        case "io:IoMdCodeDownload":
            return IoMdCodeDownload;
        case "io:IoMdCodeWorking":
            return IoMdCodeWorking;
        case "io:IoMdCode":
            return IoMdCode;
        case "io:IoMdCog":
            return IoMdCog;
        case "io:IoMdColorFill":
            return IoMdColorFill;
        case "io:IoMdColorFilter":
            return IoMdColorFilter;
        case "io:IoMdColorPalette":
            return IoMdColorPalette;
        case "io:IoMdColorWand":
            return IoMdColorWand;
        case "io:IoMdCompass":
            return IoMdCompass;
        case "io:IoMdConstruct":
            return IoMdConstruct;
        case "io:IoMdContact":
            return IoMdContact;
        case "io:IoMdContacts":
            return IoMdContacts;
        case "io:IoMdContract":
            return IoMdContract;
        case "io:IoMdContrast":
            return IoMdContrast;
        case "io:IoMdCopy":
            return IoMdCopy;
        case "io:IoMdCreate":
            return IoMdCreate;
        case "io:IoMdCrop":
            return IoMdCrop;
        case "io:IoMdCube":
            return IoMdCube;
        case "io:IoMdCut":
            return IoMdCut;
        case "io:IoMdDesktop":
            return IoMdDesktop;
        case "io:IoMdDisc":
            return IoMdDisc;
        case "io:IoMdDocument":
            return IoMdDocument;
        case "io:IoMdDoneAll":
            return IoMdDoneAll;
        case "io:IoMdDownload":
            return IoMdDownload;
        case "io:IoMdEasel":
            return IoMdEasel;
        case "io:IoMdEgg":
            return IoMdEgg;
        case "io:IoMdExit":
            return IoMdExit;
        case "io:IoMdExpand":
            return IoMdExpand;
        case "io:IoMdEyeOff":
            return IoMdEyeOff;
        case "io:IoMdEye":
            return IoMdEye;
        case "io:IoMdFastforward":
            return IoMdFastforward;
        case "io:IoMdFemale":
            return IoMdFemale;
        case "io:IoMdFiling":
            return IoMdFiling;
        case "io:IoMdFilm":
            return IoMdFilm;
        case "io:IoMdFingerPrint":
            return IoMdFingerPrint;
        case "io:IoMdFitness":
            return IoMdFitness;
        case "io:IoMdFlag":
            return IoMdFlag;
        case "io:IoMdFlame":
            return IoMdFlame;
        case "io:IoMdFlashOff":
            return IoMdFlashOff;
        case "io:IoMdFlash":
            return IoMdFlash;
        case "io:IoMdFlashlight":
            return IoMdFlashlight;
        case "io:IoMdFlask":
            return IoMdFlask;
        case "io:IoMdFlower":
            return IoMdFlower;
        case "io:IoMdFolderOpen":
            return IoMdFolderOpen;
        case "io:IoMdFolder":
            return IoMdFolder;
        case "io:IoMdFootball":
            return IoMdFootball;
        case "io:IoMdFunnel":
            return IoMdFunnel;
        case "io:IoMdGift":
            return IoMdGift;
        case "io:IoMdGitBranch":
            return IoMdGitBranch;
        case "io:IoMdGitCommit":
            return IoMdGitCommit;
        case "io:IoMdGitCompare":
            return IoMdGitCompare;
        case "io:IoMdGitMerge":
            return IoMdGitMerge;
        case "io:IoMdGitNetwork":
            return IoMdGitNetwork;
        case "io:IoMdGitPullRequest":
            return IoMdGitPullRequest;
        case "io:IoMdGlasses":
            return IoMdGlasses;
        case "io:IoMdGlobe":
            return IoMdGlobe;
        case "io:IoMdGrid":
            return IoMdGrid;
        case "io:IoMdHammer":
            return IoMdHammer;
        case "io:IoMdHand":
            return IoMdHand;
        case "io:IoMdHappy":
            return IoMdHappy;
        case "io:IoMdHeadset":
            return IoMdHeadset;
        case "io:IoMdHeartDislike":
            return IoMdHeartDislike;
        case "io:IoMdHeartEmpty":
            return IoMdHeartEmpty;
        case "io:IoMdHeartHalf":
            return IoMdHeartHalf;
        case "io:IoMdHeart":
            return IoMdHeart;
        case "io:IoMdHelpBuoy":
            return IoMdHelpBuoy;
        case "io:IoMdHelpCircleOutline":
            return IoMdHelpCircleOutline;
        case "io:IoMdHelpCircle":
            return IoMdHelpCircle;
        case "io:IoMdHelp":
            return IoMdHelp;
        case "io:IoMdHome":
            return IoMdHome;
        case "io:IoMdHourglass":
            return IoMdHourglass;
        case "io:IoMdIceCream":
            return IoMdIceCream;
        case "io:IoMdImage":
            return IoMdImage;
        case "io:IoMdImages":
            return IoMdImages;
        case "io:IoMdInfinite":
            return IoMdInfinite;
        case "io:IoMdInformationCircleOutline":
            return IoMdInformationCircleOutline;
        case "io:IoMdInformationCircle":
            return IoMdInformationCircle;
        case "io:IoMdInformation":
            return IoMdInformation;
        case "io:IoMdJet":
            return IoMdJet;
        case "io:IoMdJournal":
            return IoMdJournal;
        case "io:IoMdKey":
            return IoMdKey;
        case "io:IoMdKeypad":
            return IoMdKeypad;
        case "io:IoMdLaptop":
            return IoMdLaptop;
        case "io:IoMdLeaf":
            return IoMdLeaf;
        case "io:IoMdLink":
            return IoMdLink;
        case "io:IoMdListBox":
            return IoMdListBox;
        case "io:IoMdList":
            return IoMdList;
        case "io:IoMdLocate":
            return IoMdLocate;
        case "io:IoMdLock":
            return IoMdLock;
        case "io:IoMdLogIn":
            return IoMdLogIn;
        case "io:IoMdLogOut":
            return IoMdLogOut;
        case "io:IoMdMagnet":
            return IoMdMagnet;
        case "io:IoMdMailOpen":
            return IoMdMailOpen;
        case "io:IoMdMailUnread":
            return IoMdMailUnread;
        case "io:IoMdMail":
            return IoMdMail;
        case "io:IoMdMale":
            return IoMdMale;
        case "io:IoMdMan":
            return IoMdMan;
        case "io:IoMdMap":
            return IoMdMap;
        case "io:IoMdMedal":
            return IoMdMedal;
        case "io:IoMdMedical":
            return IoMdMedical;
        case "io:IoMdMedkit":
            return IoMdMedkit;
        case "io:IoMdMegaphone":
            return IoMdMegaphone;
        case "io:IoMdMenu":
            return IoMdMenu;
        case "io:IoMdMicOff":
            return IoMdMicOff;
        case "io:IoMdMic":
            return IoMdMic;
        case "io:IoMdMicrophone":
            return IoMdMicrophone;
        case "io:IoMdMoon":
            return IoMdMoon;
        case "io:IoMdMore":
            return IoMdMore;
        case "io:IoMdMove":
            return IoMdMove;
        case "io:IoMdMusicalNote":
            return IoMdMusicalNote;
        case "io:IoMdMusicalNotes":
            return IoMdMusicalNotes;
        case "io:IoMdNavigate":
            return IoMdNavigate;
        case "io:IoMdNotificationsOff":
            return IoMdNotificationsOff;
        case "io:IoMdNotificationsOutline":
            return IoMdNotificationsOutline;
        case "io:IoMdNotifications":
            return IoMdNotifications;
        case "io:IoMdNuclear":
            return IoMdNuclear;
        case "io:IoMdNutrition":
            return IoMdNutrition;
        case "io:IoMdOpen":
            return IoMdOpen;
        case "io:IoMdOptions":
            return IoMdOptions;
        case "io:IoMdOutlet":
            return IoMdOutlet;
        case "io:IoMdPaperPlane":
            return IoMdPaperPlane;
        case "io:IoMdPaper":
            return IoMdPaper;
        case "io:IoMdPartlySunny":
            return IoMdPartlySunny;
        case "io:IoMdPause":
            return IoMdPause;
        case "io:IoMdPaw":
            return IoMdPaw;
        case "io:IoMdPeople":
            return IoMdPeople;
        case "io:IoMdPersonAdd":
            return IoMdPersonAdd;
        case "io:IoMdPerson":
            return IoMdPerson;
        case "io:IoMdPhoneLandscape":
            return IoMdPhoneLandscape;
        case "io:IoMdPhonePortrait":
            return IoMdPhonePortrait;
        case "io:IoMdPhotos":
            return IoMdPhotos;
        case "io:IoMdPie":
            return IoMdPie;
        case "io:IoMdPin":
            return IoMdPin;
        case "io:IoMdPint":
            return IoMdPint;
        case "io:IoMdPizza":
            return IoMdPizza;
        case "io:IoMdPlanet":
            return IoMdPlanet;
        case "io:IoMdPlayCircle":
            return IoMdPlayCircle;
        case "io:IoMdPlay":
            return IoMdPlay;
        case "io:IoMdPodium":
            return IoMdPodium;
        case "io:IoMdPower":
            return IoMdPower;
        case "io:IoMdPricetag":
            return IoMdPricetag;
        case "io:IoMdPricetags":
            return IoMdPricetags;
        case "io:IoMdPrint":
            return IoMdPrint;
        case "io:IoMdPulse":
            return IoMdPulse;
        case "io:IoMdQrScanner":
            return IoMdQrScanner;
        case "io:IoMdQuote":
            return IoMdQuote;
        case "io:IoMdRadioButtonOff":
            return IoMdRadioButtonOff;
        case "io:IoMdRadioButtonOn":
            return IoMdRadioButtonOn;
        case "io:IoMdRadio":
            return IoMdRadio;
        case "io:IoMdRainy":
            return IoMdRainy;
        case "io:IoMdRecording":
            return IoMdRecording;
        case "io:IoMdRedo":
            return IoMdRedo;
        case "io:IoMdRefreshCircle":
            return IoMdRefreshCircle;
        case "io:IoMdRefresh":
            return IoMdRefresh;
        case "io:IoMdRemoveCircleOutline":
            return IoMdRemoveCircleOutline;
        case "io:IoMdRemoveCircle":
            return IoMdRemoveCircle;
        case "io:IoMdRemove":
            return IoMdRemove;
        case "io:IoMdReorder":
            return IoMdReorder;
        case "io:IoMdRepeat":
            return IoMdRepeat;
        case "io:IoMdResize":
            return IoMdResize;
        case "io:IoMdRestaurant":
            return IoMdRestaurant;
        case "io:IoMdReturnLeft":
            return IoMdReturnLeft;
        case "io:IoMdReturnRight":
            return IoMdReturnRight;
        case "io:IoMdReverseCamera":
            return IoMdReverseCamera;
        case "io:IoMdRewind":
            return IoMdRewind;
        case "io:IoMdRibbon":
            return IoMdRibbon;
        case "io:IoMdRocket":
            return IoMdRocket;
        case "io:IoMdRose":
            return IoMdRose;
        case "io:IoMdSad":
            return IoMdSad;
        case "io:IoMdSave":
            return IoMdSave;
        case "io:IoMdSchool":
            return IoMdSchool;
        case "io:IoMdSearch":
            return IoMdSearch;
        case "io:IoMdSend":
            return IoMdSend;
        case "io:IoMdSettings":
            return IoMdSettings;
        case "io:IoMdShareAlt":
            return IoMdShareAlt;
        case "io:IoMdShare":
            return IoMdShare;
        case "io:IoMdShirt":
            return IoMdShirt;
        case "io:IoMdShuffle":
            return IoMdShuffle;
        case "io:IoMdSkipBackward":
            return IoMdSkipBackward;
        case "io:IoMdSkipForward":
            return IoMdSkipForward;
        case "io:IoMdSnow":
            return IoMdSnow;
        case "io:IoMdSpeedometer":
            return IoMdSpeedometer;
        case "io:IoMdSquareOutline":
            return IoMdSquareOutline;
        case "io:IoMdSquare":
            return IoMdSquare;
        case "io:IoMdStarHalf":
            return IoMdStarHalf;
        case "io:IoMdStarOutline":
            return IoMdStarOutline;
        case "io:IoMdStar":
            return IoMdStar;
        case "io:IoMdStats":
            return IoMdStats;
        case "io:IoMdStopwatch":
            return IoMdStopwatch;
        case "io:IoMdSubway":
            return IoMdSubway;
        case "io:IoMdSunny":
            return IoMdSunny;
        case "io:IoMdSwap":
            return IoMdSwap;
        case "io:IoMdSwitch":
            return IoMdSwitch;
        case "io:IoMdSync":
            return IoMdSync;
        case "io:IoMdTabletLandscape":
            return IoMdTabletLandscape;
        case "io:IoMdTabletPortrait":
            return IoMdTabletPortrait;
        case "io:IoMdTennisball":
            return IoMdTennisball;
        case "io:IoMdText":
            return IoMdText;
        case "io:IoMdThermometer":
            return IoMdThermometer;
        case "io:IoMdThumbsDown":
            return IoMdThumbsDown;
        case "io:IoMdThumbsUp":
            return IoMdThumbsUp;
        case "io:IoMdThunderstorm":
            return IoMdThunderstorm;
        case "io:IoMdTime":
            return IoMdTime;
        case "io:IoMdTimer":
            return IoMdTimer;
        case "io:IoMdToday":
            return IoMdToday;
        case "io:IoMdTrain":
            return IoMdTrain;
        case "io:IoMdTransgender":
            return IoMdTransgender;
        case "io:IoMdTrash":
            return IoMdTrash;
        case "io:IoMdTrendingDown":
            return IoMdTrendingDown;
        case "io:IoMdTrendingUp":
            return IoMdTrendingUp;
        case "io:IoMdTrophy":
            return IoMdTrophy;
        case "io:IoMdTv":
            return IoMdTv;
        case "io:IoMdUmbrella":
            return IoMdUmbrella;
        case "io:IoMdUndo":
            return IoMdUndo;
        case "io:IoMdUnlock":
            return IoMdUnlock;
        case "io:IoMdVideocam":
            return IoMdVideocam;
        case "io:IoMdVolumeHigh":
            return IoMdVolumeHigh;
        case "io:IoMdVolumeLow":
            return IoMdVolumeLow;
        case "io:IoMdVolumeMute":
            return IoMdVolumeMute;
        case "io:IoMdVolumeOff":
            return IoMdVolumeOff;
        case "io:IoMdWalk":
            return IoMdWalk;
        case "io:IoMdWallet":
            return IoMdWallet;
        case "io:IoMdWarning":
            return IoMdWarning;
        case "io:IoMdWatch":
            return IoMdWatch;
        case "io:IoMdWater":
            return IoMdWater;
        case "io:IoMdWifi":
            return IoMdWifi;
        case "io:IoMdWine":
            return IoMdWine;
        case "io:IoMdWoman":
            return IoMdWoman;
    }
}
