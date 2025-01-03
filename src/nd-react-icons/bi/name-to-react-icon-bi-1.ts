import type {IconType} from "react-icons";

import {
    BiSolidCity,
    BiSolidClinic,
    BiSolidCloudDownload,
    BiSolidCloudLightning,
    BiSolidCloudRain,
    BiSolidCloudUpload,
    BiSolidCloud,
    BiSolidCoffeeAlt,
    BiSolidCoffeeBean,
    BiSolidCoffeeTogo,
    BiSolidCoffee,
    BiSolidCog,
    BiSolidCoinStack,
    BiSolidCoin,
    BiSolidCollection,
    BiSolidColorFill,
    BiSolidColor,
    BiSolidCommentAdd,
    BiSolidCommentCheck,
    BiSolidCommentDetail,
    BiSolidCommentDots,
    BiSolidCommentEdit,
    BiSolidCommentError,
    BiSolidCommentMinus,
    BiSolidCommentX,
    BiSolidComment,
    BiSolidCompass,
    BiSolidComponent,
    BiSolidConfused,
    BiSolidContact,
    BiSolidConversation,
    BiSolidCookie,
    BiSolidCool,
    BiSolidCopyAlt,
    BiSolidCopy,
    BiSolidCopyright,
    BiSolidCoupon,
    BiSolidCreditCardAlt,
    BiSolidCreditCardFront,
    BiSolidCreditCard,
    BiSolidCricketBall,
    BiSolidCrop,
    BiSolidCrown,
    BiSolidCubeAlt,
    BiSolidCube,
    BiSolidCuboid,
    BiSolidCustomize,
    BiSolidCylinder,
    BiSolidDashboard,
    BiSolidData,
    BiSolidDetail,
    BiSolidDevices,
    BiSolidDiamond,
    BiSolidDice1,
    BiSolidDice2,
    BiSolidDice3,
    BiSolidDice4,
    BiSolidDice5,
    BiSolidDice6,
    BiSolidDirectionLeft,
    BiSolidDirectionRight,
    BiSolidDirections,
    BiSolidDisc,
    BiSolidDiscount,
    BiSolidDish,
    BiSolidDislike,
    BiSolidDizzy,
    BiSolidDockBottom,
    BiSolidDockLeft,
    BiSolidDockRight,
    BiSolidDockTop,
    BiSolidDog,
    BiSolidDollarCircle,
    BiSolidDonateBlood,
    BiSolidDonateHeart,
    BiSolidDoorOpen,
    BiSolidDoughnutChart,
    BiSolidDownArrowAlt,
    BiSolidDownArrowCircle,
    BiSolidDownArrowSquare,
    BiSolidDownArrow,
    BiSolidDownload,
    BiSolidDownvote,
    BiSolidDrink,
    BiSolidDropletHalf,
    BiSolidDroplet,
    BiSolidDryer,
    BiSolidDuplicate,
    BiSolidEditAlt,
    BiSolidEditLocation,
    BiSolidEdit,
    BiSolidEject,
    BiSolidEnvelopeOpen,
    BiSolidEnvelope,
    BiSolidEraser,
    BiSolidErrorAlt,
    BiSolidErrorCircle,
    BiSolidError,
    BiSolidEvStation,
    BiSolidExit,
    BiSolidExtension,
    BiSolidEyedropper,
    BiSolidFaceMask,
    BiSolidFace,
    BiSolidFactory,
    BiSolidFastForwardCircle,
    BiSolidFileArchive,
    BiSolidFileBlank,
    BiSolidFileCss,
    BiSolidFileDoc,
    BiSolidFileExport,
    BiSolidFileFind,
    BiSolidFileGif,
    BiSolidFileHtml,
    BiSolidFileImage,
    BiSolidFileImport,
    BiSolidFileJpg,
    BiSolidFileJs,
    BiSolidFileJson,
    BiSolidFileMd,
    BiSolidFilePdf,
    BiSolidFilePlus,
    BiSolidFilePng,
    BiSolidFileTxt,
    BiSolidFile,
    BiSolidFilm,
    BiSolidFilterAlt,
    BiSolidFirstAid,
    BiSolidFlagAlt,
    BiSolidFlagCheckered,
    BiSolidFlag,
    BiSolidFlame,
    BiSolidFlask,
    BiSolidFlorist,
    BiSolidFolderMinus,
    BiSolidFolderOpen,
    BiSolidFolderPlus,
    BiSolidFolder,
    BiSolidFoodMenu,
    BiSolidFridge,
    BiSolidGame,
    BiSolidGasPump,
    BiSolidGhost,
    BiSolidGift,
    BiSolidGraduation,
    BiSolidGridAlt,
    BiSolidGrid,
    BiSolidGroup,
    BiSolidGuitarAmp,
    BiSolidHandDown,
    BiSolidHandLeft,
    BiSolidHandRight,
    BiSolidHandUp,
    BiSolidHand,
    BiSolidHappyAlt,
    BiSolidHappyBeaming,
    BiSolidHappyHeartEyes,
    BiSolidHappy,
    BiSolidHardHat,
    BiSolidHdd,
    BiSolidHeartCircle,
    BiSolidHeartSquare,
    BiSolidHeart,
    BiSolidHelpCircle,
    BiSolidHide,
    BiSolidHomeAlt2,
    BiSolidHomeCircle,
    BiSolidHomeHeart,
    BiSolidHomeSmile,
    BiSolidHome,
    BiSolidHot,
    BiSolidHotel,
    BiSolidHourglassBottom,
    BiSolidHourglassTop,
    BiSolidHourglass,
    BiSolidIdCard,
    BiSolidImageAdd,
    BiSolidImageAlt,
    BiSolidImage,
    BiSolidInbox,
    BiSolidInfoCircle,
    BiSolidInfoSquare,
    BiSolidInjection,
    BiSolidInstitution,
    BiSolidInvader,
    BiSolidJoystickAlt,
    BiSolidJoystickButton,
    BiSolidJoystick,
    BiSolidKey,
    BiSolidKeyboard,
    BiSolidLabel,
    BiSolidLandmark,
    BiSolidLandscape,
    BiSolidLaugh,
    BiSolidLayerMinus,
    BiSolidLayerPlus,
    BiSolidLayer,
    BiSolidLayout,
    BiSolidLeaf,
    BiSolidLeftArrowAlt,
    BiSolidLeftArrowCircle,
    BiSolidLeftArrowSquare,
    BiSolidLeftArrow,
    BiSolidLeftDownArrowCircle,
    BiSolidLeftTopArrowCircle,
    BiSolidLemon,
    BiSolidLike,
    BiSolidLocationPlus,
    BiSolidLockAlt,
    BiSolidLockOpenAlt,
    BiSolidLockOpen,
    BiSolidLock,
    BiSolidLogInCircle,
    BiSolidLogIn,
    BiSolidLogOutCircle,
    BiSolidLogOut,
    BiSolidLowVision,
    BiSolidMagicWand,
    BiSolidMagnet,
    BiSolidMapAlt,
    BiSolidMapPin,
    BiSolidMap,
    BiSolidMask,
    BiSolidMedal,
    BiSolidMegaphone,
    BiSolidMehAlt,
    BiSolidMehBlank,
    BiSolidMeh,
    BiSolidMemoryCard,
    BiSolidMessageAdd,
    BiSolidMessageAltAdd,
    BiSolidMessageAltCheck,
    BiSolidMessageAltDetail,
    BiSolidMessageAltDots,
    BiSolidMessageAltEdit,
    BiSolidMessageAltError,
    BiSolidMessageAltMinus,
    BiSolidMessageAltX,
    BiSolidMessageAlt,
    BiSolidMessageCheck,
    BiSolidMessageDetail,
    BiSolidMessageDots,
    BiSolidMessageEdit,
    BiSolidMessageError,
    BiSolidMessageMinus,
    BiSolidMessageRoundedAdd,
    BiSolidMessageRoundedCheck,
    BiSolidMessageRoundedDetail,
    BiSolidMessageRoundedDots,
    BiSolidMessageRoundedEdit,
    BiSolidMessageRoundedError,
    BiSolidMessageRoundedMinus,
    BiSolidMessageRoundedX,
    BiSolidMessageRounded,
    BiSolidMessageSquareAdd,
    BiSolidMessageSquareCheck,
    BiSolidMessageSquareDetail,
    BiSolidMessageSquareDots,
    BiSolidMessageSquareEdit,
    BiSolidMessageSquareError,
    BiSolidMessageSquareMinus,
    BiSolidMessageSquareX,
    BiSolidMessageSquare,
    BiSolidMessageX,
    BiSolidMessage,
    BiSolidMeteor,
    BiSolidMicrochip,
    BiSolidMicrophoneAlt,
    BiSolidMicrophoneOff,
    BiSolidMicrophone,
    BiSolidMinusCircle,
    BiSolidMinusSquare,
    BiSolidMobileVibration,
    BiSolidMobile,
    BiSolidMoon,
    BiSolidMouseAlt,
    BiSolidMouse,
    BiSolidMoviePlay,
    BiSolidMovie,
    BiSolidMusic,
    BiSolidNavigation,
    BiSolidNetworkChart,
    BiSolidNews,
    BiSolidNoEntry,
    BiSolidNote,
    BiSolidNotepad,
    BiSolidNotificationOff,
    BiSolidNotification,
    BiSolidObjectsHorizontalCenter,
    BiSolidObjectsHorizontalLeft,
    BiSolidObjectsHorizontalRight,
    BiSolidObjectsVerticalBottom,
    BiSolidObjectsVerticalCenter,
    BiSolidObjectsVerticalTop,
    BiSolidOffer,
    BiSolidPackage,
    BiSolidPaintRoll,
    BiSolidPaint,
    BiSolidPalette,
    BiSolidPaperPlane,
    BiSolidParking,
    BiSolidParty,
    BiSolidPaste,
    BiSolidPear,
    BiSolidPen,
    BiSolidPencil,
    BiSolidPhoneCall,
    BiSolidPhoneIncoming,
    BiSolidPhoneOff,
    BiSolidPhoneOutgoing,
    BiSolidPhone,
    BiSolidPhotoAlbum,
    BiSolidPiano,
    BiSolidPieChartAlt2,
    BiSolidPieChartAlt,
    BiSolidPieChart,
    BiSolidPin,
    BiSolidPizza,
    BiSolidPlaneAlt,
    BiSolidPlaneLand,
    BiSolidPlaneTakeOff,
    BiSolidPlane,
    BiSolidPlanet,
    BiSolidPlaylist,
    BiSolidPlug,
    BiSolidPlusCircle,
    BiSolidPlusSquare,
    BiSolidPointer,
    BiSolidPolygon,
    BiSolidPopsicle,
    BiSolidPrinter,
    BiSolidPurchaseTagAlt,
    BiSolidPurchaseTag,
    BiSolidPyramid,
    BiSolidQuoteAltLeft,
    BiSolidQuoteAltRight,
    BiSolidQuoteLeft,
    BiSolidQuoteRight,
    BiSolidQuoteSingleLeft,
    BiSolidQuoteSingleRight,
    BiSolidRadiation,
    BiSolidRadio,
    BiSolidReceipt,
    BiSolidRectangle,
    BiSolidRegistered,
    BiSolidRename,
    BiSolidReport,
    BiSolidRewindCircle,
    BiSolidRightArrowAlt,
    BiSolidRightArrowCircle,
    BiSolidRightArrowSquare,
    BiSolidRightArrow,
    BiSolidRightDownArrowCircle,
    BiSolidRightTopArrowCircle,
    BiSolidRocket,
    BiSolidRuler,
    BiSolidSad,
    BiSolidSave,
    BiSolidSchool,
    BiSolidSearchAlt2,
    BiSolidSearch,
    BiSolidSelectMultiple,
    BiSolidSend,
    BiSolidServer,
    BiSolidShapes,
    BiSolidShareAlt,
    BiSolidShare,
    BiSolidShieldAlt2,
    BiSolidShieldMinus,
    BiSolidShieldPlus,
    BiSolidShieldX,
    BiSolidShield,
    BiSolidShip,
    BiSolidShocked,
    BiSolidShoppingBagAlt,
    BiSolidShoppingBag,
    BiSolidShoppingBags,
    BiSolidShow,
    BiSolidShower,
    BiSolidSkipNextCircle,
    BiSolidSkipPreviousCircle,
    BiSolidSkull,
    BiSolidSleepy,
    BiSolidSlideshow,
    BiSolidSmile,
    BiSolidSortAlt,
    BiSolidSpa,
    BiSolidSpeaker,
    BiSolidSprayCan,
    BiSolidSpreadsheet,
    BiSolidSquareRounded,
    BiSolidSquare,
    BiSolidStarHalf,
    BiSolidStar,
    BiSolidSticker,
    BiSolidStopwatch,
    BiSolidStoreAlt,
    BiSolidStore,
    BiSolidSun,
    BiSolidSushi,
    BiSolidTShirt,
    BiSolidTachometer,
    BiSolidTagAlt,
    BiSolidTagX,
    BiSolidTag,
    BiSolidTaxi,
    BiSolidTennisBall,
    BiSolidTerminal,
    BiSolidThermometer,
    BiSolidTimeFive,
    BiSolidTime,
    BiSolidTimer,
    BiSolidTired,
    BiSolidToTop,
    BiSolidToggleLeft,
    BiSolidToggleRight,
    BiSolidTone,
    BiSolidTorch,
    BiSolidTrafficBarrier,
    BiSolidTrafficCone,
    BiSolidTraffic,
    BiSolidTrain,
    BiSolidTrashAlt,
    BiSolidTrash,
    BiSolidTreeAlt,
    BiSolidTree,
    BiSolidTrophy,
    BiSolidTruck,
    BiSolidTv,
    BiSolidUniversalAccess,
    BiSolidUpArrowAlt,
    BiSolidUpArrowCircle,
    BiSolidUpArrowSquare,
    BiSolidUpArrow,
    BiSolidUpsideDown,
    BiSolidUpvote,
    BiSolidUserAccount,
    BiSolidUserBadge,
    BiSolidUserCheck,
    BiSolidUserCircle,
    BiSolidUserDetail,
    BiSolidUserMinus,
    BiSolidUserPin,
    BiSolidUserPlus,
    BiSolidUserRectangle,
    BiSolidUserVoice,
    BiSolidUserX,
    BiSolidUser,
    BiSolidVector,
    BiSolidVial,
    BiSolidVideoOff,
    BiSolidVideoPlus,
    BiSolidVideoRecording,
    BiSolidVideo,
    BiSolidVideos,
    BiSolidVirusBlock,
    BiSolidVirus,
    BiSolidVolumeFull,
    BiSolidVolumeLow,
    BiSolidVolumeMute,
    BiSolidVolume,
    BiSolidWalletAlt,
    BiSolidWallet,
    BiSolidWasher,
    BiSolidWatchAlt,
    BiSolidWatch,
    BiSolidWebcam,
    BiSolidWidget,
    BiSolidWindowAlt,
    BiSolidWine,
    BiSolidWinkSmile,
    BiSolidWinkTongue,
    BiSolidWrench,
    BiSolidXCircle,
    BiSolidXSquare,
    BiSolidYinYang,
    BiSolidZap,
    BiSolidZoomIn,
    BiSolidZoomOut,
    BiLogo500Px,
    BiLogo99Designs,
    BiLogoAdobe,
    BiLogoAirbnb,
    BiLogoAlgolia,
    BiLogoAmazon,
    BiLogoAndroid,
    BiLogoAngular,
    BiLogoApple,
    BiLogoAudible,
    BiLogoAws,
    BiLogoBaidu,
    BiLogoBehance,
    BiLogoBing,
    BiLogoBitcoin,
    BiLogoBlender,
    BiLogoBlogger,
    BiLogoBootstrap,
    BiLogoCPlusPlus,
    BiLogoChrome,
    BiLogoCodepen,
    BiLogoCreativeCommons,
    BiLogoCss3,
    BiLogoDailymotion,
    BiLogoDeezer,
    BiLogoDevTo,
    BiLogoDeviantart,
    BiLogoDigg,
    BiLogoDigitalocean,
    BiLogoDiscordAlt,
    BiLogoDiscord,
    BiLogoDiscourse,
    BiLogoDjango,
    BiLogoDocker,
    BiLogoDribbble,
    BiLogoDropbox,
    BiLogoDrupal,
    BiLogoEbay,
    BiLogoEdge,
    BiLogoEtsy,
    BiLogoFacebookCircle,
    BiLogoFacebookSquare,
    BiLogoFacebook,
    BiLogoFigma,
    BiLogoFirebase,
    BiLogoFirefox,
    BiLogoFlask,
    BiLogoFlickrSquare,
    BiLogoFlickr,
    BiLogoFlutter,
    BiLogoFoursquare,
    BiLogoGit,
    BiLogoGithub,
    BiLogoGitlab,
    BiLogoGmail,
    BiLogoGoLang,
    BiLogoGoogleCloud,
    BiLogoGooglePlusCircle,
    BiLogoGooglePlus,
    BiLogoGoogle,
    BiLogoGraphql,
    BiLogoHeroku,
    BiLogoHtml5,
    BiLogoImdb,
    BiLogoInstagramAlt,
    BiLogoInstagram,
    BiLogoInternetExplorer,
    BiLogoInvision,
    BiLogoJava,
    BiLogoJavascript,
    BiLogoJoomla,
    BiLogoJquery,
    BiLogoJsfiddle,
    BiLogoKickstarter,
    BiLogoKubernetes,
    BiLogoLess,
    BiLogoLinkedinSquare,
    BiLogoLinkedin,
    BiLogoMagento,
    BiLogoMailchimp,
    BiLogoMarkdown,
    BiLogoMastercard,
    BiLogoMastodon,
    BiLogoMediumOld,
    BiLogoMediumSquare,
    BiLogoMedium,
    BiLogoMessenger,
    BiLogoMeta,
    BiLogoMicrosoftTeams,
    BiLogoMicrosoft,
    BiLogoMongodb,
    BiLogoNetlify,
    BiLogoNodejs,
    BiLogoOkRu,
    BiLogoOpera,
    BiLogoPatreon,
    BiLogoPaypal,
    BiLogoPeriscope,
    BiLogoPhp,
    BiLogoPinterestAlt,
    BiLogoPinterest,
    BiLogoPlayStore,
    BiLogoPocket,
    BiLogoPostgresql,
    BiLogoProductHunt,
    BiLogoPython,
    BiLogoQuora,
    BiLogoReact,
    BiLogoRedbubble,
    BiLogoReddit,
    BiLogoRedux,
    BiLogoSass,
    BiLogoShopify,
    BiLogoSketch,
    BiLogoSkype,
    BiLogoSlackOld,
    BiLogoSlack,
    BiLogoSnapchat,
    BiLogoSoundcloud,
    BiLogoSpotify,
    BiLogoSpringBoot,
    BiLogoSquarespace,
    BiLogoStackOverflow,
    BiLogoSteam,
    BiLogoStripe,
    BiLogoTailwindCss,
    BiLogoTelegram,
    BiLogoTiktok,
    BiLogoTrello,
    BiLogoTripAdvisor,
    BiLogoTumblr,
    BiLogoTux,
    BiLogoTwitch,
    BiLogoTwitter,
    BiLogoTypescript,
    BiLogoUnity,
    BiLogoUnsplash,
    BiLogoUpwork,
    BiLogoVenmo,
    BiLogoVimeo,
    BiLogoVisa,
    BiLogoVisualStudio,
    BiLogoVk,
    BiLogoVuejs,
    BiLogoWhatsappSquare,
    BiLogoWhatsapp,
    BiLogoWikipedia,
    BiLogoWindows,
    BiLogoWix,
    BiLogoWordpress,
    BiLogoXing,
    BiLogoYahoo,
    BiLogoYelp,
    BiLogoYoutube,
    BiLogoZoom,
} from "react-icons/bi"

export function nameToReactIcon_bi_1(iconName: string): IconType | undefined {

    switch(iconName) {
        case "bi:BiSolidCity":
            return BiSolidCity;
        case "bi:BiSolidClinic":
            return BiSolidClinic;
        case "bi:BiSolidCloudDownload":
            return BiSolidCloudDownload;
        case "bi:BiSolidCloudLightning":
            return BiSolidCloudLightning;
        case "bi:BiSolidCloudRain":
            return BiSolidCloudRain;
        case "bi:BiSolidCloudUpload":
            return BiSolidCloudUpload;
        case "bi:BiSolidCloud":
            return BiSolidCloud;
        case "bi:BiSolidCoffeeAlt":
            return BiSolidCoffeeAlt;
        case "bi:BiSolidCoffeeBean":
            return BiSolidCoffeeBean;
        case "bi:BiSolidCoffeeTogo":
            return BiSolidCoffeeTogo;
        case "bi:BiSolidCoffee":
            return BiSolidCoffee;
        case "bi:BiSolidCog":
            return BiSolidCog;
        case "bi:BiSolidCoinStack":
            return BiSolidCoinStack;
        case "bi:BiSolidCoin":
            return BiSolidCoin;
        case "bi:BiSolidCollection":
            return BiSolidCollection;
        case "bi:BiSolidColorFill":
            return BiSolidColorFill;
        case "bi:BiSolidColor":
            return BiSolidColor;
        case "bi:BiSolidCommentAdd":
            return BiSolidCommentAdd;
        case "bi:BiSolidCommentCheck":
            return BiSolidCommentCheck;
        case "bi:BiSolidCommentDetail":
            return BiSolidCommentDetail;
        case "bi:BiSolidCommentDots":
            return BiSolidCommentDots;
        case "bi:BiSolidCommentEdit":
            return BiSolidCommentEdit;
        case "bi:BiSolidCommentError":
            return BiSolidCommentError;
        case "bi:BiSolidCommentMinus":
            return BiSolidCommentMinus;
        case "bi:BiSolidCommentX":
            return BiSolidCommentX;
        case "bi:BiSolidComment":
            return BiSolidComment;
        case "bi:BiSolidCompass":
            return BiSolidCompass;
        case "bi:BiSolidComponent":
            return BiSolidComponent;
        case "bi:BiSolidConfused":
            return BiSolidConfused;
        case "bi:BiSolidContact":
            return BiSolidContact;
        case "bi:BiSolidConversation":
            return BiSolidConversation;
        case "bi:BiSolidCookie":
            return BiSolidCookie;
        case "bi:BiSolidCool":
            return BiSolidCool;
        case "bi:BiSolidCopyAlt":
            return BiSolidCopyAlt;
        case "bi:BiSolidCopy":
            return BiSolidCopy;
        case "bi:BiSolidCopyright":
            return BiSolidCopyright;
        case "bi:BiSolidCoupon":
            return BiSolidCoupon;
        case "bi:BiSolidCreditCardAlt":
            return BiSolidCreditCardAlt;
        case "bi:BiSolidCreditCardFront":
            return BiSolidCreditCardFront;
        case "bi:BiSolidCreditCard":
            return BiSolidCreditCard;
        case "bi:BiSolidCricketBall":
            return BiSolidCricketBall;
        case "bi:BiSolidCrop":
            return BiSolidCrop;
        case "bi:BiSolidCrown":
            return BiSolidCrown;
        case "bi:BiSolidCubeAlt":
            return BiSolidCubeAlt;
        case "bi:BiSolidCube":
            return BiSolidCube;
        case "bi:BiSolidCuboid":
            return BiSolidCuboid;
        case "bi:BiSolidCustomize":
            return BiSolidCustomize;
        case "bi:BiSolidCylinder":
            return BiSolidCylinder;
        case "bi:BiSolidDashboard":
            return BiSolidDashboard;
        case "bi:BiSolidData":
            return BiSolidData;
        case "bi:BiSolidDetail":
            return BiSolidDetail;
        case "bi:BiSolidDevices":
            return BiSolidDevices;
        case "bi:BiSolidDiamond":
            return BiSolidDiamond;
        case "bi:BiSolidDice1":
            return BiSolidDice1;
        case "bi:BiSolidDice2":
            return BiSolidDice2;
        case "bi:BiSolidDice3":
            return BiSolidDice3;
        case "bi:BiSolidDice4":
            return BiSolidDice4;
        case "bi:BiSolidDice5":
            return BiSolidDice5;
        case "bi:BiSolidDice6":
            return BiSolidDice6;
        case "bi:BiSolidDirectionLeft":
            return BiSolidDirectionLeft;
        case "bi:BiSolidDirectionRight":
            return BiSolidDirectionRight;
        case "bi:BiSolidDirections":
            return BiSolidDirections;
        case "bi:BiSolidDisc":
            return BiSolidDisc;
        case "bi:BiSolidDiscount":
            return BiSolidDiscount;
        case "bi:BiSolidDish":
            return BiSolidDish;
        case "bi:BiSolidDislike":
            return BiSolidDislike;
        case "bi:BiSolidDizzy":
            return BiSolidDizzy;
        case "bi:BiSolidDockBottom":
            return BiSolidDockBottom;
        case "bi:BiSolidDockLeft":
            return BiSolidDockLeft;
        case "bi:BiSolidDockRight":
            return BiSolidDockRight;
        case "bi:BiSolidDockTop":
            return BiSolidDockTop;
        case "bi:BiSolidDog":
            return BiSolidDog;
        case "bi:BiSolidDollarCircle":
            return BiSolidDollarCircle;
        case "bi:BiSolidDonateBlood":
            return BiSolidDonateBlood;
        case "bi:BiSolidDonateHeart":
            return BiSolidDonateHeart;
        case "bi:BiSolidDoorOpen":
            return BiSolidDoorOpen;
        case "bi:BiSolidDoughnutChart":
            return BiSolidDoughnutChart;
        case "bi:BiSolidDownArrowAlt":
            return BiSolidDownArrowAlt;
        case "bi:BiSolidDownArrowCircle":
            return BiSolidDownArrowCircle;
        case "bi:BiSolidDownArrowSquare":
            return BiSolidDownArrowSquare;
        case "bi:BiSolidDownArrow":
            return BiSolidDownArrow;
        case "bi:BiSolidDownload":
            return BiSolidDownload;
        case "bi:BiSolidDownvote":
            return BiSolidDownvote;
        case "bi:BiSolidDrink":
            return BiSolidDrink;
        case "bi:BiSolidDropletHalf":
            return BiSolidDropletHalf;
        case "bi:BiSolidDroplet":
            return BiSolidDroplet;
        case "bi:BiSolidDryer":
            return BiSolidDryer;
        case "bi:BiSolidDuplicate":
            return BiSolidDuplicate;
        case "bi:BiSolidEditAlt":
            return BiSolidEditAlt;
        case "bi:BiSolidEditLocation":
            return BiSolidEditLocation;
        case "bi:BiSolidEdit":
            return BiSolidEdit;
        case "bi:BiSolidEject":
            return BiSolidEject;
        case "bi:BiSolidEnvelopeOpen":
            return BiSolidEnvelopeOpen;
        case "bi:BiSolidEnvelope":
            return BiSolidEnvelope;
        case "bi:BiSolidEraser":
            return BiSolidEraser;
        case "bi:BiSolidErrorAlt":
            return BiSolidErrorAlt;
        case "bi:BiSolidErrorCircle":
            return BiSolidErrorCircle;
        case "bi:BiSolidError":
            return BiSolidError;
        case "bi:BiSolidEvStation":
            return BiSolidEvStation;
        case "bi:BiSolidExit":
            return BiSolidExit;
        case "bi:BiSolidExtension":
            return BiSolidExtension;
        case "bi:BiSolidEyedropper":
            return BiSolidEyedropper;
        case "bi:BiSolidFaceMask":
            return BiSolidFaceMask;
        case "bi:BiSolidFace":
            return BiSolidFace;
        case "bi:BiSolidFactory":
            return BiSolidFactory;
        case "bi:BiSolidFastForwardCircle":
            return BiSolidFastForwardCircle;
        case "bi:BiSolidFileArchive":
            return BiSolidFileArchive;
        case "bi:BiSolidFileBlank":
            return BiSolidFileBlank;
        case "bi:BiSolidFileCss":
            return BiSolidFileCss;
        case "bi:BiSolidFileDoc":
            return BiSolidFileDoc;
        case "bi:BiSolidFileExport":
            return BiSolidFileExport;
        case "bi:BiSolidFileFind":
            return BiSolidFileFind;
        case "bi:BiSolidFileGif":
            return BiSolidFileGif;
        case "bi:BiSolidFileHtml":
            return BiSolidFileHtml;
        case "bi:BiSolidFileImage":
            return BiSolidFileImage;
        case "bi:BiSolidFileImport":
            return BiSolidFileImport;
        case "bi:BiSolidFileJpg":
            return BiSolidFileJpg;
        case "bi:BiSolidFileJs":
            return BiSolidFileJs;
        case "bi:BiSolidFileJson":
            return BiSolidFileJson;
        case "bi:BiSolidFileMd":
            return BiSolidFileMd;
        case "bi:BiSolidFilePdf":
            return BiSolidFilePdf;
        case "bi:BiSolidFilePlus":
            return BiSolidFilePlus;
        case "bi:BiSolidFilePng":
            return BiSolidFilePng;
        case "bi:BiSolidFileTxt":
            return BiSolidFileTxt;
        case "bi:BiSolidFile":
            return BiSolidFile;
        case "bi:BiSolidFilm":
            return BiSolidFilm;
        case "bi:BiSolidFilterAlt":
            return BiSolidFilterAlt;
        case "bi:BiSolidFirstAid":
            return BiSolidFirstAid;
        case "bi:BiSolidFlagAlt":
            return BiSolidFlagAlt;
        case "bi:BiSolidFlagCheckered":
            return BiSolidFlagCheckered;
        case "bi:BiSolidFlag":
            return BiSolidFlag;
        case "bi:BiSolidFlame":
            return BiSolidFlame;
        case "bi:BiSolidFlask":
            return BiSolidFlask;
        case "bi:BiSolidFlorist":
            return BiSolidFlorist;
        case "bi:BiSolidFolderMinus":
            return BiSolidFolderMinus;
        case "bi:BiSolidFolderOpen":
            return BiSolidFolderOpen;
        case "bi:BiSolidFolderPlus":
            return BiSolidFolderPlus;
        case "bi:BiSolidFolder":
            return BiSolidFolder;
        case "bi:BiSolidFoodMenu":
            return BiSolidFoodMenu;
        case "bi:BiSolidFridge":
            return BiSolidFridge;
        case "bi:BiSolidGame":
            return BiSolidGame;
        case "bi:BiSolidGasPump":
            return BiSolidGasPump;
        case "bi:BiSolidGhost":
            return BiSolidGhost;
        case "bi:BiSolidGift":
            return BiSolidGift;
        case "bi:BiSolidGraduation":
            return BiSolidGraduation;
        case "bi:BiSolidGridAlt":
            return BiSolidGridAlt;
        case "bi:BiSolidGrid":
            return BiSolidGrid;
        case "bi:BiSolidGroup":
            return BiSolidGroup;
        case "bi:BiSolidGuitarAmp":
            return BiSolidGuitarAmp;
        case "bi:BiSolidHandDown":
            return BiSolidHandDown;
        case "bi:BiSolidHandLeft":
            return BiSolidHandLeft;
        case "bi:BiSolidHandRight":
            return BiSolidHandRight;
        case "bi:BiSolidHandUp":
            return BiSolidHandUp;
        case "bi:BiSolidHand":
            return BiSolidHand;
        case "bi:BiSolidHappyAlt":
            return BiSolidHappyAlt;
        case "bi:BiSolidHappyBeaming":
            return BiSolidHappyBeaming;
        case "bi:BiSolidHappyHeartEyes":
            return BiSolidHappyHeartEyes;
        case "bi:BiSolidHappy":
            return BiSolidHappy;
        case "bi:BiSolidHardHat":
            return BiSolidHardHat;
        case "bi:BiSolidHdd":
            return BiSolidHdd;
        case "bi:BiSolidHeartCircle":
            return BiSolidHeartCircle;
        case "bi:BiSolidHeartSquare":
            return BiSolidHeartSquare;
        case "bi:BiSolidHeart":
            return BiSolidHeart;
        case "bi:BiSolidHelpCircle":
            return BiSolidHelpCircle;
        case "bi:BiSolidHide":
            return BiSolidHide;
        case "bi:BiSolidHomeAlt2":
            return BiSolidHomeAlt2;
        case "bi:BiSolidHomeCircle":
            return BiSolidHomeCircle;
        case "bi:BiSolidHomeHeart":
            return BiSolidHomeHeart;
        case "bi:BiSolidHomeSmile":
            return BiSolidHomeSmile;
        case "bi:BiSolidHome":
            return BiSolidHome;
        case "bi:BiSolidHot":
            return BiSolidHot;
        case "bi:BiSolidHotel":
            return BiSolidHotel;
        case "bi:BiSolidHourglassBottom":
            return BiSolidHourglassBottom;
        case "bi:BiSolidHourglassTop":
            return BiSolidHourglassTop;
        case "bi:BiSolidHourglass":
            return BiSolidHourglass;
        case "bi:BiSolidIdCard":
            return BiSolidIdCard;
        case "bi:BiSolidImageAdd":
            return BiSolidImageAdd;
        case "bi:BiSolidImageAlt":
            return BiSolidImageAlt;
        case "bi:BiSolidImage":
            return BiSolidImage;
        case "bi:BiSolidInbox":
            return BiSolidInbox;
        case "bi:BiSolidInfoCircle":
            return BiSolidInfoCircle;
        case "bi:BiSolidInfoSquare":
            return BiSolidInfoSquare;
        case "bi:BiSolidInjection":
            return BiSolidInjection;
        case "bi:BiSolidInstitution":
            return BiSolidInstitution;
        case "bi:BiSolidInvader":
            return BiSolidInvader;
        case "bi:BiSolidJoystickAlt":
            return BiSolidJoystickAlt;
        case "bi:BiSolidJoystickButton":
            return BiSolidJoystickButton;
        case "bi:BiSolidJoystick":
            return BiSolidJoystick;
        case "bi:BiSolidKey":
            return BiSolidKey;
        case "bi:BiSolidKeyboard":
            return BiSolidKeyboard;
        case "bi:BiSolidLabel":
            return BiSolidLabel;
        case "bi:BiSolidLandmark":
            return BiSolidLandmark;
        case "bi:BiSolidLandscape":
            return BiSolidLandscape;
        case "bi:BiSolidLaugh":
            return BiSolidLaugh;
        case "bi:BiSolidLayerMinus":
            return BiSolidLayerMinus;
        case "bi:BiSolidLayerPlus":
            return BiSolidLayerPlus;
        case "bi:BiSolidLayer":
            return BiSolidLayer;
        case "bi:BiSolidLayout":
            return BiSolidLayout;
        case "bi:BiSolidLeaf":
            return BiSolidLeaf;
        case "bi:BiSolidLeftArrowAlt":
            return BiSolidLeftArrowAlt;
        case "bi:BiSolidLeftArrowCircle":
            return BiSolidLeftArrowCircle;
        case "bi:BiSolidLeftArrowSquare":
            return BiSolidLeftArrowSquare;
        case "bi:BiSolidLeftArrow":
            return BiSolidLeftArrow;
        case "bi:BiSolidLeftDownArrowCircle":
            return BiSolidLeftDownArrowCircle;
        case "bi:BiSolidLeftTopArrowCircle":
            return BiSolidLeftTopArrowCircle;
        case "bi:BiSolidLemon":
            return BiSolidLemon;
        case "bi:BiSolidLike":
            return BiSolidLike;
        case "bi:BiSolidLocationPlus":
            return BiSolidLocationPlus;
        case "bi:BiSolidLockAlt":
            return BiSolidLockAlt;
        case "bi:BiSolidLockOpenAlt":
            return BiSolidLockOpenAlt;
        case "bi:BiSolidLockOpen":
            return BiSolidLockOpen;
        case "bi:BiSolidLock":
            return BiSolidLock;
        case "bi:BiSolidLogInCircle":
            return BiSolidLogInCircle;
        case "bi:BiSolidLogIn":
            return BiSolidLogIn;
        case "bi:BiSolidLogOutCircle":
            return BiSolidLogOutCircle;
        case "bi:BiSolidLogOut":
            return BiSolidLogOut;
        case "bi:BiSolidLowVision":
            return BiSolidLowVision;
        case "bi:BiSolidMagicWand":
            return BiSolidMagicWand;
        case "bi:BiSolidMagnet":
            return BiSolidMagnet;
        case "bi:BiSolidMapAlt":
            return BiSolidMapAlt;
        case "bi:BiSolidMapPin":
            return BiSolidMapPin;
        case "bi:BiSolidMap":
            return BiSolidMap;
        case "bi:BiSolidMask":
            return BiSolidMask;
        case "bi:BiSolidMedal":
            return BiSolidMedal;
        case "bi:BiSolidMegaphone":
            return BiSolidMegaphone;
        case "bi:BiSolidMehAlt":
            return BiSolidMehAlt;
        case "bi:BiSolidMehBlank":
            return BiSolidMehBlank;
        case "bi:BiSolidMeh":
            return BiSolidMeh;
        case "bi:BiSolidMemoryCard":
            return BiSolidMemoryCard;
        case "bi:BiSolidMessageAdd":
            return BiSolidMessageAdd;
        case "bi:BiSolidMessageAltAdd":
            return BiSolidMessageAltAdd;
        case "bi:BiSolidMessageAltCheck":
            return BiSolidMessageAltCheck;
        case "bi:BiSolidMessageAltDetail":
            return BiSolidMessageAltDetail;
        case "bi:BiSolidMessageAltDots":
            return BiSolidMessageAltDots;
        case "bi:BiSolidMessageAltEdit":
            return BiSolidMessageAltEdit;
        case "bi:BiSolidMessageAltError":
            return BiSolidMessageAltError;
        case "bi:BiSolidMessageAltMinus":
            return BiSolidMessageAltMinus;
        case "bi:BiSolidMessageAltX":
            return BiSolidMessageAltX;
        case "bi:BiSolidMessageAlt":
            return BiSolidMessageAlt;
        case "bi:BiSolidMessageCheck":
            return BiSolidMessageCheck;
        case "bi:BiSolidMessageDetail":
            return BiSolidMessageDetail;
        case "bi:BiSolidMessageDots":
            return BiSolidMessageDots;
        case "bi:BiSolidMessageEdit":
            return BiSolidMessageEdit;
        case "bi:BiSolidMessageError":
            return BiSolidMessageError;
        case "bi:BiSolidMessageMinus":
            return BiSolidMessageMinus;
        case "bi:BiSolidMessageRoundedAdd":
            return BiSolidMessageRoundedAdd;
        case "bi:BiSolidMessageRoundedCheck":
            return BiSolidMessageRoundedCheck;
        case "bi:BiSolidMessageRoundedDetail":
            return BiSolidMessageRoundedDetail;
        case "bi:BiSolidMessageRoundedDots":
            return BiSolidMessageRoundedDots;
        case "bi:BiSolidMessageRoundedEdit":
            return BiSolidMessageRoundedEdit;
        case "bi:BiSolidMessageRoundedError":
            return BiSolidMessageRoundedError;
        case "bi:BiSolidMessageRoundedMinus":
            return BiSolidMessageRoundedMinus;
        case "bi:BiSolidMessageRoundedX":
            return BiSolidMessageRoundedX;
        case "bi:BiSolidMessageRounded":
            return BiSolidMessageRounded;
        case "bi:BiSolidMessageSquareAdd":
            return BiSolidMessageSquareAdd;
        case "bi:BiSolidMessageSquareCheck":
            return BiSolidMessageSquareCheck;
        case "bi:BiSolidMessageSquareDetail":
            return BiSolidMessageSquareDetail;
        case "bi:BiSolidMessageSquareDots":
            return BiSolidMessageSquareDots;
        case "bi:BiSolidMessageSquareEdit":
            return BiSolidMessageSquareEdit;
        case "bi:BiSolidMessageSquareError":
            return BiSolidMessageSquareError;
        case "bi:BiSolidMessageSquareMinus":
            return BiSolidMessageSquareMinus;
        case "bi:BiSolidMessageSquareX":
            return BiSolidMessageSquareX;
        case "bi:BiSolidMessageSquare":
            return BiSolidMessageSquare;
        case "bi:BiSolidMessageX":
            return BiSolidMessageX;
        case "bi:BiSolidMessage":
            return BiSolidMessage;
        case "bi:BiSolidMeteor":
            return BiSolidMeteor;
        case "bi:BiSolidMicrochip":
            return BiSolidMicrochip;
        case "bi:BiSolidMicrophoneAlt":
            return BiSolidMicrophoneAlt;
        case "bi:BiSolidMicrophoneOff":
            return BiSolidMicrophoneOff;
        case "bi:BiSolidMicrophone":
            return BiSolidMicrophone;
        case "bi:BiSolidMinusCircle":
            return BiSolidMinusCircle;
        case "bi:BiSolidMinusSquare":
            return BiSolidMinusSquare;
        case "bi:BiSolidMobileVibration":
            return BiSolidMobileVibration;
        case "bi:BiSolidMobile":
            return BiSolidMobile;
        case "bi:BiSolidMoon":
            return BiSolidMoon;
        case "bi:BiSolidMouseAlt":
            return BiSolidMouseAlt;
        case "bi:BiSolidMouse":
            return BiSolidMouse;
        case "bi:BiSolidMoviePlay":
            return BiSolidMoviePlay;
        case "bi:BiSolidMovie":
            return BiSolidMovie;
        case "bi:BiSolidMusic":
            return BiSolidMusic;
        case "bi:BiSolidNavigation":
            return BiSolidNavigation;
        case "bi:BiSolidNetworkChart":
            return BiSolidNetworkChart;
        case "bi:BiSolidNews":
            return BiSolidNews;
        case "bi:BiSolidNoEntry":
            return BiSolidNoEntry;
        case "bi:BiSolidNote":
            return BiSolidNote;
        case "bi:BiSolidNotepad":
            return BiSolidNotepad;
        case "bi:BiSolidNotificationOff":
            return BiSolidNotificationOff;
        case "bi:BiSolidNotification":
            return BiSolidNotification;
        case "bi:BiSolidObjectsHorizontalCenter":
            return BiSolidObjectsHorizontalCenter;
        case "bi:BiSolidObjectsHorizontalLeft":
            return BiSolidObjectsHorizontalLeft;
        case "bi:BiSolidObjectsHorizontalRight":
            return BiSolidObjectsHorizontalRight;
        case "bi:BiSolidObjectsVerticalBottom":
            return BiSolidObjectsVerticalBottom;
        case "bi:BiSolidObjectsVerticalCenter":
            return BiSolidObjectsVerticalCenter;
        case "bi:BiSolidObjectsVerticalTop":
            return BiSolidObjectsVerticalTop;
        case "bi:BiSolidOffer":
            return BiSolidOffer;
        case "bi:BiSolidPackage":
            return BiSolidPackage;
        case "bi:BiSolidPaintRoll":
            return BiSolidPaintRoll;
        case "bi:BiSolidPaint":
            return BiSolidPaint;
        case "bi:BiSolidPalette":
            return BiSolidPalette;
        case "bi:BiSolidPaperPlane":
            return BiSolidPaperPlane;
        case "bi:BiSolidParking":
            return BiSolidParking;
        case "bi:BiSolidParty":
            return BiSolidParty;
        case "bi:BiSolidPaste":
            return BiSolidPaste;
        case "bi:BiSolidPear":
            return BiSolidPear;
        case "bi:BiSolidPen":
            return BiSolidPen;
        case "bi:BiSolidPencil":
            return BiSolidPencil;
        case "bi:BiSolidPhoneCall":
            return BiSolidPhoneCall;
        case "bi:BiSolidPhoneIncoming":
            return BiSolidPhoneIncoming;
        case "bi:BiSolidPhoneOff":
            return BiSolidPhoneOff;
        case "bi:BiSolidPhoneOutgoing":
            return BiSolidPhoneOutgoing;
        case "bi:BiSolidPhone":
            return BiSolidPhone;
        case "bi:BiSolidPhotoAlbum":
            return BiSolidPhotoAlbum;
        case "bi:BiSolidPiano":
            return BiSolidPiano;
        case "bi:BiSolidPieChartAlt2":
            return BiSolidPieChartAlt2;
        case "bi:BiSolidPieChartAlt":
            return BiSolidPieChartAlt;
        case "bi:BiSolidPieChart":
            return BiSolidPieChart;
        case "bi:BiSolidPin":
            return BiSolidPin;
        case "bi:BiSolidPizza":
            return BiSolidPizza;
        case "bi:BiSolidPlaneAlt":
            return BiSolidPlaneAlt;
        case "bi:BiSolidPlaneLand":
            return BiSolidPlaneLand;
        case "bi:BiSolidPlaneTakeOff":
            return BiSolidPlaneTakeOff;
        case "bi:BiSolidPlane":
            return BiSolidPlane;
        case "bi:BiSolidPlanet":
            return BiSolidPlanet;
        case "bi:BiSolidPlaylist":
            return BiSolidPlaylist;
        case "bi:BiSolidPlug":
            return BiSolidPlug;
        case "bi:BiSolidPlusCircle":
            return BiSolidPlusCircle;
        case "bi:BiSolidPlusSquare":
            return BiSolidPlusSquare;
        case "bi:BiSolidPointer":
            return BiSolidPointer;
        case "bi:BiSolidPolygon":
            return BiSolidPolygon;
        case "bi:BiSolidPopsicle":
            return BiSolidPopsicle;
        case "bi:BiSolidPrinter":
            return BiSolidPrinter;
        case "bi:BiSolidPurchaseTagAlt":
            return BiSolidPurchaseTagAlt;
        case "bi:BiSolidPurchaseTag":
            return BiSolidPurchaseTag;
        case "bi:BiSolidPyramid":
            return BiSolidPyramid;
        case "bi:BiSolidQuoteAltLeft":
            return BiSolidQuoteAltLeft;
        case "bi:BiSolidQuoteAltRight":
            return BiSolidQuoteAltRight;
        case "bi:BiSolidQuoteLeft":
            return BiSolidQuoteLeft;
        case "bi:BiSolidQuoteRight":
            return BiSolidQuoteRight;
        case "bi:BiSolidQuoteSingleLeft":
            return BiSolidQuoteSingleLeft;
        case "bi:BiSolidQuoteSingleRight":
            return BiSolidQuoteSingleRight;
        case "bi:BiSolidRadiation":
            return BiSolidRadiation;
        case "bi:BiSolidRadio":
            return BiSolidRadio;
        case "bi:BiSolidReceipt":
            return BiSolidReceipt;
        case "bi:BiSolidRectangle":
            return BiSolidRectangle;
        case "bi:BiSolidRegistered":
            return BiSolidRegistered;
        case "bi:BiSolidRename":
            return BiSolidRename;
        case "bi:BiSolidReport":
            return BiSolidReport;
        case "bi:BiSolidRewindCircle":
            return BiSolidRewindCircle;
        case "bi:BiSolidRightArrowAlt":
            return BiSolidRightArrowAlt;
        case "bi:BiSolidRightArrowCircle":
            return BiSolidRightArrowCircle;
        case "bi:BiSolidRightArrowSquare":
            return BiSolidRightArrowSquare;
        case "bi:BiSolidRightArrow":
            return BiSolidRightArrow;
        case "bi:BiSolidRightDownArrowCircle":
            return BiSolidRightDownArrowCircle;
        case "bi:BiSolidRightTopArrowCircle":
            return BiSolidRightTopArrowCircle;
        case "bi:BiSolidRocket":
            return BiSolidRocket;
        case "bi:BiSolidRuler":
            return BiSolidRuler;
        case "bi:BiSolidSad":
            return BiSolidSad;
        case "bi:BiSolidSave":
            return BiSolidSave;
        case "bi:BiSolidSchool":
            return BiSolidSchool;
        case "bi:BiSolidSearchAlt2":
            return BiSolidSearchAlt2;
        case "bi:BiSolidSearch":
            return BiSolidSearch;
        case "bi:BiSolidSelectMultiple":
            return BiSolidSelectMultiple;
        case "bi:BiSolidSend":
            return BiSolidSend;
        case "bi:BiSolidServer":
            return BiSolidServer;
        case "bi:BiSolidShapes":
            return BiSolidShapes;
        case "bi:BiSolidShareAlt":
            return BiSolidShareAlt;
        case "bi:BiSolidShare":
            return BiSolidShare;
        case "bi:BiSolidShieldAlt2":
            return BiSolidShieldAlt2;
        case "bi:BiSolidShieldMinus":
            return BiSolidShieldMinus;
        case "bi:BiSolidShieldPlus":
            return BiSolidShieldPlus;
        case "bi:BiSolidShieldX":
            return BiSolidShieldX;
        case "bi:BiSolidShield":
            return BiSolidShield;
        case "bi:BiSolidShip":
            return BiSolidShip;
        case "bi:BiSolidShocked":
            return BiSolidShocked;
        case "bi:BiSolidShoppingBagAlt":
            return BiSolidShoppingBagAlt;
        case "bi:BiSolidShoppingBag":
            return BiSolidShoppingBag;
        case "bi:BiSolidShoppingBags":
            return BiSolidShoppingBags;
        case "bi:BiSolidShow":
            return BiSolidShow;
        case "bi:BiSolidShower":
            return BiSolidShower;
        case "bi:BiSolidSkipNextCircle":
            return BiSolidSkipNextCircle;
        case "bi:BiSolidSkipPreviousCircle":
            return BiSolidSkipPreviousCircle;
        case "bi:BiSolidSkull":
            return BiSolidSkull;
        case "bi:BiSolidSleepy":
            return BiSolidSleepy;
        case "bi:BiSolidSlideshow":
            return BiSolidSlideshow;
        case "bi:BiSolidSmile":
            return BiSolidSmile;
        case "bi:BiSolidSortAlt":
            return BiSolidSortAlt;
        case "bi:BiSolidSpa":
            return BiSolidSpa;
        case "bi:BiSolidSpeaker":
            return BiSolidSpeaker;
        case "bi:BiSolidSprayCan":
            return BiSolidSprayCan;
        case "bi:BiSolidSpreadsheet":
            return BiSolidSpreadsheet;
        case "bi:BiSolidSquareRounded":
            return BiSolidSquareRounded;
        case "bi:BiSolidSquare":
            return BiSolidSquare;
        case "bi:BiSolidStarHalf":
            return BiSolidStarHalf;
        case "bi:BiSolidStar":
            return BiSolidStar;
        case "bi:BiSolidSticker":
            return BiSolidSticker;
        case "bi:BiSolidStopwatch":
            return BiSolidStopwatch;
        case "bi:BiSolidStoreAlt":
            return BiSolidStoreAlt;
        case "bi:BiSolidStore":
            return BiSolidStore;
        case "bi:BiSolidSun":
            return BiSolidSun;
        case "bi:BiSolidSushi":
            return BiSolidSushi;
        case "bi:BiSolidTShirt":
            return BiSolidTShirt;
        case "bi:BiSolidTachometer":
            return BiSolidTachometer;
        case "bi:BiSolidTagAlt":
            return BiSolidTagAlt;
        case "bi:BiSolidTagX":
            return BiSolidTagX;
        case "bi:BiSolidTag":
            return BiSolidTag;
        case "bi:BiSolidTaxi":
            return BiSolidTaxi;
        case "bi:BiSolidTennisBall":
            return BiSolidTennisBall;
        case "bi:BiSolidTerminal":
            return BiSolidTerminal;
        case "bi:BiSolidThermometer":
            return BiSolidThermometer;
        case "bi:BiSolidTimeFive":
            return BiSolidTimeFive;
        case "bi:BiSolidTime":
            return BiSolidTime;
        case "bi:BiSolidTimer":
            return BiSolidTimer;
        case "bi:BiSolidTired":
            return BiSolidTired;
        case "bi:BiSolidToTop":
            return BiSolidToTop;
        case "bi:BiSolidToggleLeft":
            return BiSolidToggleLeft;
        case "bi:BiSolidToggleRight":
            return BiSolidToggleRight;
        case "bi:BiSolidTone":
            return BiSolidTone;
        case "bi:BiSolidTorch":
            return BiSolidTorch;
        case "bi:BiSolidTrafficBarrier":
            return BiSolidTrafficBarrier;
        case "bi:BiSolidTrafficCone":
            return BiSolidTrafficCone;
        case "bi:BiSolidTraffic":
            return BiSolidTraffic;
        case "bi:BiSolidTrain":
            return BiSolidTrain;
        case "bi:BiSolidTrashAlt":
            return BiSolidTrashAlt;
        case "bi:BiSolidTrash":
            return BiSolidTrash;
        case "bi:BiSolidTreeAlt":
            return BiSolidTreeAlt;
        case "bi:BiSolidTree":
            return BiSolidTree;
        case "bi:BiSolidTrophy":
            return BiSolidTrophy;
        case "bi:BiSolidTruck":
            return BiSolidTruck;
        case "bi:BiSolidTv":
            return BiSolidTv;
        case "bi:BiSolidUniversalAccess":
            return BiSolidUniversalAccess;
        case "bi:BiSolidUpArrowAlt":
            return BiSolidUpArrowAlt;
        case "bi:BiSolidUpArrowCircle":
            return BiSolidUpArrowCircle;
        case "bi:BiSolidUpArrowSquare":
            return BiSolidUpArrowSquare;
        case "bi:BiSolidUpArrow":
            return BiSolidUpArrow;
        case "bi:BiSolidUpsideDown":
            return BiSolidUpsideDown;
        case "bi:BiSolidUpvote":
            return BiSolidUpvote;
        case "bi:BiSolidUserAccount":
            return BiSolidUserAccount;
        case "bi:BiSolidUserBadge":
            return BiSolidUserBadge;
        case "bi:BiSolidUserCheck":
            return BiSolidUserCheck;
        case "bi:BiSolidUserCircle":
            return BiSolidUserCircle;
        case "bi:BiSolidUserDetail":
            return BiSolidUserDetail;
        case "bi:BiSolidUserMinus":
            return BiSolidUserMinus;
        case "bi:BiSolidUserPin":
            return BiSolidUserPin;
        case "bi:BiSolidUserPlus":
            return BiSolidUserPlus;
        case "bi:BiSolidUserRectangle":
            return BiSolidUserRectangle;
        case "bi:BiSolidUserVoice":
            return BiSolidUserVoice;
        case "bi:BiSolidUserX":
            return BiSolidUserX;
        case "bi:BiSolidUser":
            return BiSolidUser;
        case "bi:BiSolidVector":
            return BiSolidVector;
        case "bi:BiSolidVial":
            return BiSolidVial;
        case "bi:BiSolidVideoOff":
            return BiSolidVideoOff;
        case "bi:BiSolidVideoPlus":
            return BiSolidVideoPlus;
        case "bi:BiSolidVideoRecording":
            return BiSolidVideoRecording;
        case "bi:BiSolidVideo":
            return BiSolidVideo;
        case "bi:BiSolidVideos":
            return BiSolidVideos;
        case "bi:BiSolidVirusBlock":
            return BiSolidVirusBlock;
        case "bi:BiSolidVirus":
            return BiSolidVirus;
        case "bi:BiSolidVolumeFull":
            return BiSolidVolumeFull;
        case "bi:BiSolidVolumeLow":
            return BiSolidVolumeLow;
        case "bi:BiSolidVolumeMute":
            return BiSolidVolumeMute;
        case "bi:BiSolidVolume":
            return BiSolidVolume;
        case "bi:BiSolidWalletAlt":
            return BiSolidWalletAlt;
        case "bi:BiSolidWallet":
            return BiSolidWallet;
        case "bi:BiSolidWasher":
            return BiSolidWasher;
        case "bi:BiSolidWatchAlt":
            return BiSolidWatchAlt;
        case "bi:BiSolidWatch":
            return BiSolidWatch;
        case "bi:BiSolidWebcam":
            return BiSolidWebcam;
        case "bi:BiSolidWidget":
            return BiSolidWidget;
        case "bi:BiSolidWindowAlt":
            return BiSolidWindowAlt;
        case "bi:BiSolidWine":
            return BiSolidWine;
        case "bi:BiSolidWinkSmile":
            return BiSolidWinkSmile;
        case "bi:BiSolidWinkTongue":
            return BiSolidWinkTongue;
        case "bi:BiSolidWrench":
            return BiSolidWrench;
        case "bi:BiSolidXCircle":
            return BiSolidXCircle;
        case "bi:BiSolidXSquare":
            return BiSolidXSquare;
        case "bi:BiSolidYinYang":
            return BiSolidYinYang;
        case "bi:BiSolidZap":
            return BiSolidZap;
        case "bi:BiSolidZoomIn":
            return BiSolidZoomIn;
        case "bi:BiSolidZoomOut":
            return BiSolidZoomOut;
        case "bi:BiLogo500Px":
            return BiLogo500Px;
        case "bi:BiLogo99Designs":
            return BiLogo99Designs;
        case "bi:BiLogoAdobe":
            return BiLogoAdobe;
        case "bi:BiLogoAirbnb":
            return BiLogoAirbnb;
        case "bi:BiLogoAlgolia":
            return BiLogoAlgolia;
        case "bi:BiLogoAmazon":
            return BiLogoAmazon;
        case "bi:BiLogoAndroid":
            return BiLogoAndroid;
        case "bi:BiLogoAngular":
            return BiLogoAngular;
        case "bi:BiLogoApple":
            return BiLogoApple;
        case "bi:BiLogoAudible":
            return BiLogoAudible;
        case "bi:BiLogoAws":
            return BiLogoAws;
        case "bi:BiLogoBaidu":
            return BiLogoBaidu;
        case "bi:BiLogoBehance":
            return BiLogoBehance;
        case "bi:BiLogoBing":
            return BiLogoBing;
        case "bi:BiLogoBitcoin":
            return BiLogoBitcoin;
        case "bi:BiLogoBlender":
            return BiLogoBlender;
        case "bi:BiLogoBlogger":
            return BiLogoBlogger;
        case "bi:BiLogoBootstrap":
            return BiLogoBootstrap;
        case "bi:BiLogoCPlusPlus":
            return BiLogoCPlusPlus;
        case "bi:BiLogoChrome":
            return BiLogoChrome;
        case "bi:BiLogoCodepen":
            return BiLogoCodepen;
        case "bi:BiLogoCreativeCommons":
            return BiLogoCreativeCommons;
        case "bi:BiLogoCss3":
            return BiLogoCss3;
        case "bi:BiLogoDailymotion":
            return BiLogoDailymotion;
        case "bi:BiLogoDeezer":
            return BiLogoDeezer;
        case "bi:BiLogoDevTo":
            return BiLogoDevTo;
        case "bi:BiLogoDeviantart":
            return BiLogoDeviantart;
        case "bi:BiLogoDigg":
            return BiLogoDigg;
        case "bi:BiLogoDigitalocean":
            return BiLogoDigitalocean;
        case "bi:BiLogoDiscordAlt":
            return BiLogoDiscordAlt;
        case "bi:BiLogoDiscord":
            return BiLogoDiscord;
        case "bi:BiLogoDiscourse":
            return BiLogoDiscourse;
        case "bi:BiLogoDjango":
            return BiLogoDjango;
        case "bi:BiLogoDocker":
            return BiLogoDocker;
        case "bi:BiLogoDribbble":
            return BiLogoDribbble;
        case "bi:BiLogoDropbox":
            return BiLogoDropbox;
        case "bi:BiLogoDrupal":
            return BiLogoDrupal;
        case "bi:BiLogoEbay":
            return BiLogoEbay;
        case "bi:BiLogoEdge":
            return BiLogoEdge;
        case "bi:BiLogoEtsy":
            return BiLogoEtsy;
        case "bi:BiLogoFacebookCircle":
            return BiLogoFacebookCircle;
        case "bi:BiLogoFacebookSquare":
            return BiLogoFacebookSquare;
        case "bi:BiLogoFacebook":
            return BiLogoFacebook;
        case "bi:BiLogoFigma":
            return BiLogoFigma;
        case "bi:BiLogoFirebase":
            return BiLogoFirebase;
        case "bi:BiLogoFirefox":
            return BiLogoFirefox;
        case "bi:BiLogoFlask":
            return BiLogoFlask;
        case "bi:BiLogoFlickrSquare":
            return BiLogoFlickrSquare;
        case "bi:BiLogoFlickr":
            return BiLogoFlickr;
        case "bi:BiLogoFlutter":
            return BiLogoFlutter;
        case "bi:BiLogoFoursquare":
            return BiLogoFoursquare;
        case "bi:BiLogoGit":
            return BiLogoGit;
        case "bi:BiLogoGithub":
            return BiLogoGithub;
        case "bi:BiLogoGitlab":
            return BiLogoGitlab;
        case "bi:BiLogoGmail":
            return BiLogoGmail;
        case "bi:BiLogoGoLang":
            return BiLogoGoLang;
        case "bi:BiLogoGoogleCloud":
            return BiLogoGoogleCloud;
        case "bi:BiLogoGooglePlusCircle":
            return BiLogoGooglePlusCircle;
        case "bi:BiLogoGooglePlus":
            return BiLogoGooglePlus;
        case "bi:BiLogoGoogle":
            return BiLogoGoogle;
        case "bi:BiLogoGraphql":
            return BiLogoGraphql;
        case "bi:BiLogoHeroku":
            return BiLogoHeroku;
        case "bi:BiLogoHtml5":
            return BiLogoHtml5;
        case "bi:BiLogoImdb":
            return BiLogoImdb;
        case "bi:BiLogoInstagramAlt":
            return BiLogoInstagramAlt;
        case "bi:BiLogoInstagram":
            return BiLogoInstagram;
        case "bi:BiLogoInternetExplorer":
            return BiLogoInternetExplorer;
        case "bi:BiLogoInvision":
            return BiLogoInvision;
        case "bi:BiLogoJava":
            return BiLogoJava;
        case "bi:BiLogoJavascript":
            return BiLogoJavascript;
        case "bi:BiLogoJoomla":
            return BiLogoJoomla;
        case "bi:BiLogoJquery":
            return BiLogoJquery;
        case "bi:BiLogoJsfiddle":
            return BiLogoJsfiddle;
        case "bi:BiLogoKickstarter":
            return BiLogoKickstarter;
        case "bi:BiLogoKubernetes":
            return BiLogoKubernetes;
        case "bi:BiLogoLess":
            return BiLogoLess;
        case "bi:BiLogoLinkedinSquare":
            return BiLogoLinkedinSquare;
        case "bi:BiLogoLinkedin":
            return BiLogoLinkedin;
        case "bi:BiLogoMagento":
            return BiLogoMagento;
        case "bi:BiLogoMailchimp":
            return BiLogoMailchimp;
        case "bi:BiLogoMarkdown":
            return BiLogoMarkdown;
        case "bi:BiLogoMastercard":
            return BiLogoMastercard;
        case "bi:BiLogoMastodon":
            return BiLogoMastodon;
        case "bi:BiLogoMediumOld":
            return BiLogoMediumOld;
        case "bi:BiLogoMediumSquare":
            return BiLogoMediumSquare;
        case "bi:BiLogoMedium":
            return BiLogoMedium;
        case "bi:BiLogoMessenger":
            return BiLogoMessenger;
        case "bi:BiLogoMeta":
            return BiLogoMeta;
        case "bi:BiLogoMicrosoftTeams":
            return BiLogoMicrosoftTeams;
        case "bi:BiLogoMicrosoft":
            return BiLogoMicrosoft;
        case "bi:BiLogoMongodb":
            return BiLogoMongodb;
        case "bi:BiLogoNetlify":
            return BiLogoNetlify;
        case "bi:BiLogoNodejs":
            return BiLogoNodejs;
        case "bi:BiLogoOkRu":
            return BiLogoOkRu;
        case "bi:BiLogoOpera":
            return BiLogoOpera;
        case "bi:BiLogoPatreon":
            return BiLogoPatreon;
        case "bi:BiLogoPaypal":
            return BiLogoPaypal;
        case "bi:BiLogoPeriscope":
            return BiLogoPeriscope;
        case "bi:BiLogoPhp":
            return BiLogoPhp;
        case "bi:BiLogoPinterestAlt":
            return BiLogoPinterestAlt;
        case "bi:BiLogoPinterest":
            return BiLogoPinterest;
        case "bi:BiLogoPlayStore":
            return BiLogoPlayStore;
        case "bi:BiLogoPocket":
            return BiLogoPocket;
        case "bi:BiLogoPostgresql":
            return BiLogoPostgresql;
        case "bi:BiLogoProductHunt":
            return BiLogoProductHunt;
        case "bi:BiLogoPython":
            return BiLogoPython;
        case "bi:BiLogoQuora":
            return BiLogoQuora;
        case "bi:BiLogoReact":
            return BiLogoReact;
        case "bi:BiLogoRedbubble":
            return BiLogoRedbubble;
        case "bi:BiLogoReddit":
            return BiLogoReddit;
        case "bi:BiLogoRedux":
            return BiLogoRedux;
        case "bi:BiLogoSass":
            return BiLogoSass;
        case "bi:BiLogoShopify":
            return BiLogoShopify;
        case "bi:BiLogoSketch":
            return BiLogoSketch;
        case "bi:BiLogoSkype":
            return BiLogoSkype;
        case "bi:BiLogoSlackOld":
            return BiLogoSlackOld;
        case "bi:BiLogoSlack":
            return BiLogoSlack;
        case "bi:BiLogoSnapchat":
            return BiLogoSnapchat;
        case "bi:BiLogoSoundcloud":
            return BiLogoSoundcloud;
        case "bi:BiLogoSpotify":
            return BiLogoSpotify;
        case "bi:BiLogoSpringBoot":
            return BiLogoSpringBoot;
        case "bi:BiLogoSquarespace":
            return BiLogoSquarespace;
        case "bi:BiLogoStackOverflow":
            return BiLogoStackOverflow;
        case "bi:BiLogoSteam":
            return BiLogoSteam;
        case "bi:BiLogoStripe":
            return BiLogoStripe;
        case "bi:BiLogoTailwindCss":
            return BiLogoTailwindCss;
        case "bi:BiLogoTelegram":
            return BiLogoTelegram;
        case "bi:BiLogoTiktok":
            return BiLogoTiktok;
        case "bi:BiLogoTrello":
            return BiLogoTrello;
        case "bi:BiLogoTripAdvisor":
            return BiLogoTripAdvisor;
        case "bi:BiLogoTumblr":
            return BiLogoTumblr;
        case "bi:BiLogoTux":
            return BiLogoTux;
        case "bi:BiLogoTwitch":
            return BiLogoTwitch;
        case "bi:BiLogoTwitter":
            return BiLogoTwitter;
        case "bi:BiLogoTypescript":
            return BiLogoTypescript;
        case "bi:BiLogoUnity":
            return BiLogoUnity;
        case "bi:BiLogoUnsplash":
            return BiLogoUnsplash;
        case "bi:BiLogoUpwork":
            return BiLogoUpwork;
        case "bi:BiLogoVenmo":
            return BiLogoVenmo;
        case "bi:BiLogoVimeo":
            return BiLogoVimeo;
        case "bi:BiLogoVisa":
            return BiLogoVisa;
        case "bi:BiLogoVisualStudio":
            return BiLogoVisualStudio;
        case "bi:BiLogoVk":
            return BiLogoVk;
        case "bi:BiLogoVuejs":
            return BiLogoVuejs;
        case "bi:BiLogoWhatsappSquare":
            return BiLogoWhatsappSquare;
        case "bi:BiLogoWhatsapp":
            return BiLogoWhatsapp;
        case "bi:BiLogoWikipedia":
            return BiLogoWikipedia;
        case "bi:BiLogoWindows":
            return BiLogoWindows;
        case "bi:BiLogoWix":
            return BiLogoWix;
        case "bi:BiLogoWordpress":
            return BiLogoWordpress;
        case "bi:BiLogoXing":
            return BiLogoXing;
        case "bi:BiLogoYahoo":
            return BiLogoYahoo;
        case "bi:BiLogoYelp":
            return BiLogoYelp;
        case "bi:BiLogoYoutube":
            return BiLogoYoutube;
        case "bi:BiLogoZoom":
            return BiLogoZoom;
    }
}
