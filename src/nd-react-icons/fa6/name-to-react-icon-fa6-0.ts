import type {IconType} from "react-icons";

import {
    Fa42Group,
    Fa500Px,
    FaAccessibleIcon,
    FaAccusoft,
    FaAdn,
    FaAdversal,
    FaAffiliatetheme,
    FaAirbnb,
    FaAlgolia,
    FaAlipay,
    FaAmazonPay,
    FaAmazon,
    FaAmilia,
    FaAndroid,
    FaAngellist,
    FaAngrycreative,
    FaAngular,
    FaAppStoreIos,
    FaAppStore,
    FaApper,
    FaApplePay,
    FaApple,
    FaArtstation,
    FaAsymmetrik,
    FaAtlassian,
    FaAudible,
    FaAutoprefixer,
    FaAvianex,
    FaAviato,
    FaAws,
    FaBandcamp,
    FaBattleNet,
    FaBehance,
    FaBilibili,
    FaBimobject,
    FaBitbucket,
    FaBitcoin,
    FaBity,
    FaBlackTie,
    FaBlackberry,
    FaBloggerB,
    FaBlogger,
    FaBluesky,
    FaBluetoothB,
    FaBluetooth,
    FaBootstrap,
    FaBots,
    FaBraveReverse,
    FaBrave,
    FaBtc,
    FaBuffer,
    FaBuromobelexperte,
    FaBuyNLarge,
    FaBuysellads,
    FaCanadianMapleLeaf,
    FaCcAmazonPay,
    FaCcAmex,
    FaCcApplePay,
    FaCcDinersClub,
    FaCcDiscover,
    FaCcJcb,
    FaCcMastercard,
    FaCcPaypal,
    FaCcStripe,
    FaCcVisa,
    FaCentercode,
    FaCentos,
    FaChrome,
    FaChromecast,
    FaCloudflare,
    FaCloudscale,
    FaCloudsmith,
    FaCloudversify,
    FaCmplid,
    FaCodepen,
    FaCodiepie,
    FaConfluence,
    FaConnectdevelop,
    FaContao,
    FaCottonBureau,
    FaCpanel,
    FaCreativeCommonsBy,
    FaCreativeCommonsNcEu,
    FaCreativeCommonsNcJp,
    FaCreativeCommonsNc,
    FaCreativeCommonsNd,
    FaCreativeCommonsPdAlt,
    FaCreativeCommonsPd,
    FaCreativeCommonsRemix,
    FaCreativeCommonsSa,
    FaCreativeCommonsSamplingPlus,
    FaCreativeCommonsSampling,
    FaCreativeCommonsShare,
    FaCreativeCommonsZero,
    FaCreativeCommons,
    FaCriticalRole,
    FaCss3Alt,
    FaCss3,
    FaCuttlefish,
    FaDAndDBeyond,
    FaDAndD,
    FaDailymotion,
    FaDartLang,
    FaDashcube,
    FaDebian,
    FaDeezer,
    FaDelicious,
    FaDeploydog,
    FaDeskpro,
    FaDev,
    FaDeviantart,
    FaDhl,
    FaDiaspora,
    FaDigg,
    FaDigitalOcean,
    FaDiscord,
    FaDiscourse,
    FaDochub,
    FaDocker,
    FaDraft2Digital,
    FaDribbble,
    FaDropbox,
    FaDrupal,
    FaDyalog,
    FaEarlybirds,
    FaEbay,
    FaEdgeLegacy,
    FaEdge,
    FaElementor,
    FaEllo,
    FaEmber,
    FaEmpire,
    FaEnvira,
    FaErlang,
    FaEthereum,
    FaEtsy,
    FaEvernote,
    FaExpeditedssl,
    FaFacebookF,
    FaFacebookMessenger,
    FaFacebook,
    FaFantasyFlightGames,
    FaFedex,
    FaFedora,
    FaFigma,
    FaFirefoxBrowser,
    FaFirefox,
    FaFirstOrderAlt,
    FaFirstOrder,
    FaFirstdraft,
    FaFlickr,
    FaFlipboard,
    FaFlutter,
    FaFly,
    FaFontAwesome,
    FaFonticonsFi,
    FaFonticons,
    FaFortAwesomeAlt,
    FaFortAwesome,
    FaForumbee,
    FaFoursquare,
    FaFreeCodeCamp,
    FaFreebsd,
    FaFulcrum,
    FaGalacticRepublic,
    FaGalacticSenate,
    FaGetPocket,
    FaGgCircle,
    FaGg,
    FaGitAlt,
    FaGit,
    FaGithubAlt,
    FaGithub,
    FaGitkraken,
    FaGitlab,
    FaGitter,
    FaGlideG,
    FaGlide,
    FaGofore,
    FaGolang,
    FaGoodreadsG,
    FaGoodreads,
    FaGoogleDrive,
    FaGooglePay,
    FaGooglePlay,
    FaGooglePlusG,
    FaGooglePlus,
    FaGoogleScholar,
    FaGoogleWallet,
    FaGoogle,
    FaGratipay,
    FaGrav,
    FaGripfire,
    FaGrunt,
    FaGuilded,
    FaGulp,
    FaHackerNews,
    FaHackerrank,
    FaHashnode,
    FaHips,
    FaHireAHelper,
    FaHive,
    FaHooli,
    FaHornbill,
    FaHotjar,
    FaHouzz,
    FaHtml5,
    FaHubspot,
    FaIdeal,
    FaImdb,
    FaInstagram,
    FaInstalod,
    FaIntercom,
    FaInternetExplorer,
    FaInvision,
    FaIoxhost,
    FaItchIo,
    FaItunesNote,
    FaItunes,
    FaJava,
    FaJediOrder,
    FaJenkins,
    FaJira,
    FaJoget,
    FaJoomla,
    FaJs,
    FaJsfiddle,
    FaJxl,
    FaKaggle,
    FaKeybase,
    FaKeycdn,
    FaKickstarterK,
    FaKickstarter,
    FaKorvue,
    FaLaravel,
    FaLastfm,
    FaLeanpub,
    FaLess,
    FaLetterboxd,
    FaLine,
    FaLinkedinIn,
    FaLinkedin,
    FaLinode,
    FaLinux,
    FaLyft,
    FaMagento,
    FaMailchimp,
    FaMandalorian,
    FaMarkdown,
    FaMastodon,
    FaMaxcdn,
    FaMdb,
    FaMedapps,
    FaMedium,
    FaMedrt,
    FaMeetup,
    FaMegaport,
    FaMendeley,
    FaMeta,
    FaMicroblog,
    FaMicrosoft,
    FaMintbit,
    FaMix,
    FaMixcloud,
    FaMixer,
    FaMizuni,
    FaModx,
    FaMonero,
    FaNapster,
    FaNeos,
    FaNfcDirectional,
    FaNfcSymbol,
    FaNimblr,
    FaNodeJs,
    FaNode,
    FaNpm,
    FaNs8,
    FaNutritionix,
    FaOctopusDeploy,
    FaOdnoklassniki,
    FaOdysee,
    FaOldRepublic,
    FaOpencart,
    FaOpenid,
    FaOpensuse,
    FaOpera,
    FaOptinMonster,
    FaOrcid,
    FaOsi,
    FaPadlet,
    FaPage4,
    FaPagelines,
    FaPalfed,
    FaPatreon,
    FaPaypal,
    FaPerbyte,
    FaPeriscope,
    FaPhabricator,
    FaPhoenixFramework,
    FaPhoenixSquadron,
    FaPhp,
    FaPiedPiperAlt,
    FaPiedPiperHat,
    FaPiedPiperPp,
    FaPiedPiper,
    FaPinterestP,
    FaPinterest,
    FaPix,
    FaPixiv,
    FaPlaystation,
    FaProductHunt,
    FaPushed,
    FaPython,
    FaQq,
    FaQuinscape,
    FaQuora,
    FaRProject,
    FaRaspberryPi,
    FaRavelry,
    FaReact,
    FaReacteurope,
    FaReadme,
    FaRebel,
    FaRedRiver,
    FaRedditAlien,
    FaReddit,
    FaRedhat,
    FaRenren,
    FaReplyd,
    FaResearchgate,
    FaResolving,
    FaRev,
    FaRocketchat,
    FaRockrms,
    FaRust,
    FaSafari,
    FaSalesforce,
    FaSass,
    FaSchlix,
    FaScreenpal,
    FaScribd,
    FaSearchengin,
    FaSellcast,
    FaSellsy,
    FaServicestack,
    FaShirtsinbulk,
    FaShoelace,
    FaShopify,
    FaShopware,
    FaSignalMessenger,
    FaSimplybuilt,
    FaSistrix,
    FaSith,
    FaSitrox,
    FaSketch,
    FaSkyatlas,
    FaSkype,
    FaSlack,
    FaSlideshare,
    FaSnapchat,
    FaSoundcloud,
    FaSourcetree,
    FaSpaceAwesome,
    FaSpeakap,
    FaSpeakerDeck,
    FaSpotify,
    FaSquareBehance,
    FaSquareDribbble,
    FaSquareFacebook,
    FaSquareFontAwesomeStroke,
    FaSquareFontAwesome,
    FaSquareGit,
    FaSquareGithub,
    FaSquareGitlab,
    FaSquareGooglePlus,
    FaSquareHackerNews,
    FaSquareInstagram,
    FaSquareJs,
    FaSquareLastfm,
    FaSquareLetterboxd,
    FaSquareOdnoklassniki,
    FaSquarePiedPiper,
    FaSquarePinterest,
    FaSquareReddit,
    FaSquareSnapchat,
    FaSquareSteam,
    FaSquareThreads,
    FaSquareTumblr,
    FaSquareTwitter,
    FaSquareUpwork,
    FaSquareViadeo,
    FaSquareVimeo,
    FaSquareWebAwesomeStroke,
    FaSquareWebAwesome,
    FaSquareWhatsapp,
    FaSquareXTwitter,
    FaSquareXing,
    FaSquareYoutube,
    FaSquarespace,
    FaStackExchange,
    FaStackOverflow,
    FaStackpath,
    FaStaylinked,
    FaSteamSymbol,
    FaSteam,
    FaStickerMule,
    FaStrava,
    FaStripeS,
    FaStripe,
    FaStubber,
    FaStudiovinari,
    FaStumbleuponCircle,
    FaStumbleupon,
    FaSuperpowers,
    FaSupple,
    FaSuse,
    FaSwift,
    FaSymfony,
    FaTeamspeak,
    FaTelegram,
    FaTencentWeibo,
    FaTheRedYeti,
    FaThemeco,
    FaThemeisle,
    FaThinkPeaks,
    FaThreads,
    FaTiktok,
    FaTradeFederation,
    FaTrello,
    FaTumblr,
    FaTwitch,
    FaTwitter,
    FaTypo3,
    FaUber,
    FaUbuntu,
    FaUikit,
    FaUmbraco,
    FaUncharted,
    FaUniregistry,
    FaUnity,
    FaUnsplash,
    FaUntappd,
    FaUps,
    FaUpwork,
    FaUsb,
    FaUsps,
    FaUssunnah,
    FaVaadin,
    FaViacoin,
    FaViadeo,
    FaViber,
    FaVimeoV,
    FaVimeo,
    FaVine,
    FaVk,
    FaVnv,
    FaVuejs,
    FaWatchmanMonitoring,
    FaWaze,
    FaWebAwesome,
    FaWebflow,
    FaWeebly,
    FaWeibo,
    FaWeixin,
    FaWhatsapp,
    FaWhmcs,
    FaWikipediaW,
    FaWindows,
    FaWirsindhandwerk,
    FaWix,
    FaWizardsOfTheCoast,
    FaWodu,
    FaWolfPackBattalion,
    FaWordpressSimple,
    FaWordpress,
    FaWpbeginner,
    FaWpexplorer,
    FaWpforms,
    FaWpressr,
    FaXTwitter,
    FaXbox,
    FaXing,
    FaYCombinator,
    FaYahoo,
    FaYammer,
    FaYandexInternational,
    FaYandex,
    FaYarn,
    FaYelp,
    FaYoast,
    FaYoutube,
    FaZhihu,
    Fa0,
    Fa1,
    Fa2,
    Fa3,
    Fa4,
    Fa5,
    Fa6,
    Fa7,
    Fa8,
    Fa9,
    FaA,
    FaAddressBook,
    FaAddressCard,
    FaAlignCenter,
    FaAlignJustify,
    FaAlignLeft,
    FaAlignRight,
    FaAnchorCircleCheck,
    FaAnchorCircleExclamation,
    FaAnchorCircleXmark,
    FaAnchorLock,
    FaAnchor,
    FaAngleDown,
    FaAngleLeft,
    FaAngleRight,
    FaAngleUp,
    FaAnglesDown,
    FaAnglesLeft,
    FaAnglesRight,
    FaAnglesUp,
    FaAnkh,
    FaAppleWhole,
    FaArchway,
    FaArrowDown19,
    FaArrowDown91,
    FaArrowDownAZ,
    FaArrowDownLong,
    FaArrowDownShortWide,
    FaArrowDownUpAcrossLine,
    FaArrowDownUpLock,
    FaArrowDownWideShort,
    FaArrowDownZA,
    FaArrowDown,
    FaArrowLeftLong,
    FaArrowLeft,
    FaArrowPointer,
    FaArrowRightArrowLeft,
    FaArrowRightFromBracket,
    FaArrowRightLong,
    FaArrowRightToBracket,
    FaArrowRightToCity,
    FaArrowRight,
    FaArrowRotateLeft,
    FaArrowRotateRight,
    FaArrowTrendDown,
    FaArrowTrendUp,
    FaArrowTurnDown,
    FaArrowTurnUp,
    FaArrowUp19,
    FaArrowUp91,
    FaArrowUpAZ,
    FaArrowUpFromBracket,
    FaArrowUpFromGroundWater,
    FaArrowUpFromWaterPump,
    FaArrowUpLong,
    FaArrowUpRightDots,
    FaArrowUpRightFromSquare,
    FaArrowUpShortWide,
    FaArrowUpWideShort,
    FaArrowUpZA,
    FaArrowUp,
    FaArrowsDownToLine,
    FaArrowsDownToPeople,
    FaArrowsLeftRightToLine,
    FaArrowsLeftRight,
    FaArrowsRotate,
    FaArrowsSpin,
    FaArrowsSplitUpAndLeft,
    FaArrowsToCircle,
    FaArrowsToDot,
    FaArrowsToEye,
    FaArrowsTurnRight,
    FaArrowsTurnToDots,
    FaArrowsUpDownLeftRight,
    FaArrowsUpDown,
    FaArrowsUpToLine,
    FaAsterisk,
    FaAt,
    FaAtom,
    FaAudioDescription,
    FaAustralSign,
    FaAward,
    FaB,
    FaBabyCarriage,
    FaBaby,
    FaBackwardFast,
    FaBackwardStep,
    FaBackward,
    FaBacon,
    FaBacteria,
    FaBacterium,
    FaBagShopping,
    FaBahai,
    FaBahtSign,
    FaBanSmoking,
    FaBan,
    FaBandage,
    FaBangladeshiTakaSign,
    FaBarcode,
    FaBarsProgress,
    FaBarsStaggered,
    FaBars,
    FaBaseballBatBall,
    FaBaseball,
    FaBasketShopping,
    FaBasketball,
    FaBath,
    FaBatteryEmpty,
    FaBatteryFull,
    FaBatteryHalf,
    FaBatteryQuarter,
    FaBatteryThreeQuarters,
    FaBedPulse,
    FaBed,
    FaBeerMugEmpty,
    FaBellConcierge,
    FaBellSlash,
    FaBell,
    FaBezierCurve,
    FaBicycle,
    FaBinoculars,
    FaBiohazard,
    FaBitcoinSign,
    FaBlenderPhone,
    FaBlender,
    FaBlog,
    FaBold,
    FaBoltLightning,
    FaBolt,
    FaBomb,
    FaBone,
    FaBong,
    FaBookAtlas,
    FaBookBible,
    FaBookBookmark,
    FaBookJournalWhills,
    FaBookMedical,
    FaBookOpenReader,
    FaBookOpen,
    FaBookQuran,
    FaBookSkull,
    FaBookTanakh,
    FaBook,
    FaBookmark,
    FaBorderAll,
    FaBorderNone,
    FaBorderTopLeft,
    FaBoreHole,
    FaBottleDroplet,
    FaBottleWater,
    FaBowlFood,
    FaBowlRice,
    FaBowlingBall,
    FaBoxArchive,
    FaBoxOpen,
    FaBoxTissue,
    FaBox,
    FaBoxesPacking,
    FaBoxesStacked,
    FaBraille,
    FaBrain,
    FaBrazilianRealSign,
    FaBreadSlice,
    FaBridgeCircleCheck,
    FaBridgeCircleExclamation,
    FaBridgeCircleXmark,
    FaBridgeLock,
    FaBridgeWater,
    FaBridge,
    FaBriefcaseMedical,
    FaBriefcase,
    FaBroomBall,
    FaBroom,
    FaBrush,
    FaBucket,
    FaBugSlash,
    FaBug,
    FaBugs,
    FaBuildingCircleArrowRight,
    FaBuildingCircleCheck,
    FaBuildingCircleExclamation,
    FaBuildingCircleXmark,
    FaBuildingColumns,
    FaBuildingFlag,
    FaBuildingLock,
    FaBuildingNgo,
    FaBuildingShield,
    FaBuildingUn,
    FaBuildingUser,
    FaBuildingWheat,
    FaBuilding,
    FaBullhorn,
    FaBullseye,
    FaBurger,
    FaBurst,
    FaBusSimple,
    FaBus,
    FaBusinessTime,
    FaC,
    FaCableCar,
    FaCakeCandles,
    FaCalculator,
    FaCalendarCheck,
    FaCalendarDay,
    FaCalendarDays,
    FaCalendarMinus,
    FaCalendarPlus,
    FaCalendarWeek,
    FaCalendarXmark,
    FaCalendar,
    FaCameraRetro,
    FaCameraRotate,
    FaCamera,
    FaCampground,
    FaCandyCane,
    FaCannabis,
    FaCapsules,
    FaCarBattery,
    FaCarBurst,
    FaCarOn,
    FaCarRear,
    FaCarSide,
    FaCarTunnel,
    FaCar,
    FaCaravan,
    FaCaretDown,
    FaCaretLeft,
    FaCaretRight,
    FaCaretUp,
    FaCarrot,
    FaCartArrowDown,
    FaCartFlatbedSuitcase,
    FaCartFlatbed,
    FaCartPlus,
    FaCartShopping,
    FaCashRegister,
    FaCat,
    FaCediSign,
    FaCentSign,
    FaCertificate,
    FaChair,
    FaChalkboardUser,
    FaChalkboard,
    FaChampagneGlasses,
    FaChargingStation,
    FaChartArea,
    FaChartBar,
    FaChartColumn,
    FaChartGantt,
    FaChartLine,
    FaChartPie,
    FaChartSimple,
    FaCheckDouble,
    FaCheckToSlot,
    FaCheck,
    FaCheese,
    FaChessBishop,
    FaChessBoard,
    FaChessKing,
    FaChessKnight,
    FaChessPawn,
    FaChessQueen,
    FaChessRook,
    FaChess,
    FaChevronDown,
    FaChevronLeft,
    FaChevronRight,
    FaChevronUp,
    FaChildCombatant,
    FaChildDress,
    FaChildReaching,
    FaChild,
    FaChildren,
    FaChurch,
    FaCircleArrowDown,
    FaCircleArrowLeft,
    FaCircleArrowRight,
    FaCircleArrowUp,
    FaCircleCheck,
    FaCircleChevronDown,
    FaCircleChevronLeft,
    FaCircleChevronRight,
    FaCircleChevronUp,
    FaCircleDollarToSlot,
    FaCircleDot,
    FaCircleDown,
    FaCircleExclamation,
    FaCircleH,
    FaCircleHalfStroke,
    FaCircleInfo,
    FaCircleLeft,
    FaCircleMinus,
    FaCircleNodes,
    FaCircleNotch,
    FaCirclePause,
    FaCirclePlay,
    FaCirclePlus,
    FaCircleQuestion,
    FaCircleRadiation,
    FaCircleRight,
    FaCircleStop,
    FaCircleUp,
    FaCircleUser,
    FaCircleXmark,
    FaCircle,
    FaCity,
    FaClapperboard,
    FaClipboardCheck,
    FaClipboardList,
    FaClipboardQuestion,
    FaClipboardUser,
    FaClipboard,
    FaClockRotateLeft,
    FaClock,
    FaClone,
    FaClosedCaptioning,
    FaCloudArrowDown,
    FaCloudArrowUp,
    FaCloudBolt,
    FaCloudMeatball,
    FaCloudMoonRain,
    FaCloudMoon,
    FaCloudRain,
    FaCloudShowersHeavy,
    FaCloudShowersWater,
    FaCloudSunRain,
    FaCloudSun,
    FaCloud,
    FaClover,
    FaCodeBranch,
    FaCodeCommit,
    FaCodeCompare,
    FaCodeFork,
    FaCodeMerge,
    FaCodePullRequest,
    FaCode,
    FaCoins,
    FaColonSign,
    FaCommentDollar,
    FaCommentDots,
    FaCommentMedical,
    FaCommentSlash,
    FaCommentSms,
    FaComment,
    FaCommentsDollar,
    FaComments,
    FaCompactDisc,
    FaCompassDrafting,
    FaCompass,
    FaCompress,
    FaComputerMouse,
    FaComputer,
    FaCookieBite,
    FaCookie,
    FaCopy,
    FaCopyright,
    FaCouch,
    FaCow,
    FaCreditCard,
    FaCropSimple,
    FaCrop,
    FaCross,
    FaCrosshairs,
    FaCrow,
    FaCrown,
    FaCrutch,
    FaCruzeiroSign,
    FaCube,
    FaCubesStacked,
    FaCubes,
    FaD,
    FaDatabase,
    FaDeleteLeft,
    FaDemocrat,
    FaDesktop,
    FaDharmachakra,
    FaDiagramNext,
    FaDiagramPredecessor,
    FaDiagramProject,
    FaDiagramSuccessor,
    FaDiamondTurnRight,
    FaDiamond,
    FaDiceD20,
    FaDiceD6,
    FaDiceFive,
    FaDiceFour,
    FaDiceOne,
    FaDiceSix,
    FaDiceThree,
    FaDiceTwo,
    FaDice,
    FaDisease,
    FaDisplay,
    FaDivide,
    FaDna,
    FaDog,
    FaDollarSign,
    FaDolly,
    FaDongSign,
    FaDoorClosed,
    FaDoorOpen,
    FaDove,
    FaDownLeftAndUpRightToCenter,
    FaDownLong,
    FaDownload,
    FaDragon,
    FaDrawPolygon,
    FaDropletSlash,
    FaDroplet,
    FaDrumSteelpan,
    FaDrum,
    FaDrumstickBite,
    FaDumbbell,
    FaDumpsterFire,
    FaDumpster,
    FaDungeon,
    FaE,
    FaEarDeaf,
    FaEarListen,
    FaEarthAfrica,
    FaEarthAmericas,
    FaEarthAsia,
    FaEarthEurope,
    FaEarthOceania,
    FaEgg,
    FaEject,
    FaElevator,
    FaEllipsisVertical,
    FaEllipsis,
    FaEnvelopeCircleCheck,
    FaEnvelopeOpenText,
    FaEnvelopeOpen,
    FaEnvelope,
    FaEnvelopesBulk,
    FaEquals,
    FaEraser,
    FaEthernet,
    FaEuroSign,
    FaExclamation,
    FaExpand,
    FaExplosion,
    FaEyeDropper,
    FaEyeLowVision,
    FaEyeSlash,
    FaEye,
    FaF,
    FaFaceAngry,
    FaFaceDizzy,
    FaFaceFlushed,
    FaFaceFrownOpen,
    FaFaceFrown,
    FaFaceGrimace,
    FaFaceGrinBeamSweat,
    FaFaceGrinBeam,
    FaFaceGrinHearts,
    FaFaceGrinSquintTears,
    FaFaceGrinSquint,
    FaFaceGrinStars,
    FaFaceGrinTears,
    FaFaceGrinTongueSquint,
    FaFaceGrinTongueWink,
    FaFaceGrinTongue,
    FaFaceGrinWide,
    FaFaceGrinWink,
    FaFaceGrin,
    FaFaceKissBeam,
    FaFaceKissWinkHeart,
    FaFaceKiss,
    FaFaceLaughBeam,
    FaFaceLaughSquint,
    FaFaceLaughWink,
    FaFaceLaugh,
    FaFaceMehBlank,
    FaFaceMeh,
    FaFaceRollingEyes,
    FaFaceSadCry,
    FaFaceSadTear,
    FaFaceSmileBeam,
    FaFaceSmileWink,
    FaFaceSmile,
    FaFaceSurprise,
    FaFaceTired,
    FaFan,
    FaFaucetDrip,
    FaFaucet,
    FaFax,
    FaFeatherPointed,
    FaFeather,
    FaFerry,
    FaFileArrowDown,
    FaFileArrowUp,
    FaFileAudio,
    FaFileCircleCheck,
    FaFileCircleExclamation,
    FaFileCircleMinus,
    FaFileCirclePlus,
    FaFileCircleQuestion,
    FaFileCircleXmark,
} from "react-icons/fa6"

export function nameToReactIcon_fa6_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "fa6:Fa42Group":
            return Fa42Group;
        case "fa6:Fa500Px":
            return Fa500Px;
        case "fa6:FaAccessibleIcon":
            return FaAccessibleIcon;
        case "fa6:FaAccusoft":
            return FaAccusoft;
        case "fa6:FaAdn":
            return FaAdn;
        case "fa6:FaAdversal":
            return FaAdversal;
        case "fa6:FaAffiliatetheme":
            return FaAffiliatetheme;
        case "fa6:FaAirbnb":
            return FaAirbnb;
        case "fa6:FaAlgolia":
            return FaAlgolia;
        case "fa6:FaAlipay":
            return FaAlipay;
        case "fa6:FaAmazonPay":
            return FaAmazonPay;
        case "fa6:FaAmazon":
            return FaAmazon;
        case "fa6:FaAmilia":
            return FaAmilia;
        case "fa6:FaAndroid":
            return FaAndroid;
        case "fa6:FaAngellist":
            return FaAngellist;
        case "fa6:FaAngrycreative":
            return FaAngrycreative;
        case "fa6:FaAngular":
            return FaAngular;
        case "fa6:FaAppStoreIos":
            return FaAppStoreIos;
        case "fa6:FaAppStore":
            return FaAppStore;
        case "fa6:FaApper":
            return FaApper;
        case "fa6:FaApplePay":
            return FaApplePay;
        case "fa6:FaApple":
            return FaApple;
        case "fa6:FaArtstation":
            return FaArtstation;
        case "fa6:FaAsymmetrik":
            return FaAsymmetrik;
        case "fa6:FaAtlassian":
            return FaAtlassian;
        case "fa6:FaAudible":
            return FaAudible;
        case "fa6:FaAutoprefixer":
            return FaAutoprefixer;
        case "fa6:FaAvianex":
            return FaAvianex;
        case "fa6:FaAviato":
            return FaAviato;
        case "fa6:FaAws":
            return FaAws;
        case "fa6:FaBandcamp":
            return FaBandcamp;
        case "fa6:FaBattleNet":
            return FaBattleNet;
        case "fa6:FaBehance":
            return FaBehance;
        case "fa6:FaBilibili":
            return FaBilibili;
        case "fa6:FaBimobject":
            return FaBimobject;
        case "fa6:FaBitbucket":
            return FaBitbucket;
        case "fa6:FaBitcoin":
            return FaBitcoin;
        case "fa6:FaBity":
            return FaBity;
        case "fa6:FaBlackTie":
            return FaBlackTie;
        case "fa6:FaBlackberry":
            return FaBlackberry;
        case "fa6:FaBloggerB":
            return FaBloggerB;
        case "fa6:FaBlogger":
            return FaBlogger;
        case "fa6:FaBluesky":
            return FaBluesky;
        case "fa6:FaBluetoothB":
            return FaBluetoothB;
        case "fa6:FaBluetooth":
            return FaBluetooth;
        case "fa6:FaBootstrap":
            return FaBootstrap;
        case "fa6:FaBots":
            return FaBots;
        case "fa6:FaBraveReverse":
            return FaBraveReverse;
        case "fa6:FaBrave":
            return FaBrave;
        case "fa6:FaBtc":
            return FaBtc;
        case "fa6:FaBuffer":
            return FaBuffer;
        case "fa6:FaBuromobelexperte":
            return FaBuromobelexperte;
        case "fa6:FaBuyNLarge":
            return FaBuyNLarge;
        case "fa6:FaBuysellads":
            return FaBuysellads;
        case "fa6:FaCanadianMapleLeaf":
            return FaCanadianMapleLeaf;
        case "fa6:FaCcAmazonPay":
            return FaCcAmazonPay;
        case "fa6:FaCcAmex":
            return FaCcAmex;
        case "fa6:FaCcApplePay":
            return FaCcApplePay;
        case "fa6:FaCcDinersClub":
            return FaCcDinersClub;
        case "fa6:FaCcDiscover":
            return FaCcDiscover;
        case "fa6:FaCcJcb":
            return FaCcJcb;
        case "fa6:FaCcMastercard":
            return FaCcMastercard;
        case "fa6:FaCcPaypal":
            return FaCcPaypal;
        case "fa6:FaCcStripe":
            return FaCcStripe;
        case "fa6:FaCcVisa":
            return FaCcVisa;
        case "fa6:FaCentercode":
            return FaCentercode;
        case "fa6:FaCentos":
            return FaCentos;
        case "fa6:FaChrome":
            return FaChrome;
        case "fa6:FaChromecast":
            return FaChromecast;
        case "fa6:FaCloudflare":
            return FaCloudflare;
        case "fa6:FaCloudscale":
            return FaCloudscale;
        case "fa6:FaCloudsmith":
            return FaCloudsmith;
        case "fa6:FaCloudversify":
            return FaCloudversify;
        case "fa6:FaCmplid":
            return FaCmplid;
        case "fa6:FaCodepen":
            return FaCodepen;
        case "fa6:FaCodiepie":
            return FaCodiepie;
        case "fa6:FaConfluence":
            return FaConfluence;
        case "fa6:FaConnectdevelop":
            return FaConnectdevelop;
        case "fa6:FaContao":
            return FaContao;
        case "fa6:FaCottonBureau":
            return FaCottonBureau;
        case "fa6:FaCpanel":
            return FaCpanel;
        case "fa6:FaCreativeCommonsBy":
            return FaCreativeCommonsBy;
        case "fa6:FaCreativeCommonsNcEu":
            return FaCreativeCommonsNcEu;
        case "fa6:FaCreativeCommonsNcJp":
            return FaCreativeCommonsNcJp;
        case "fa6:FaCreativeCommonsNc":
            return FaCreativeCommonsNc;
        case "fa6:FaCreativeCommonsNd":
            return FaCreativeCommonsNd;
        case "fa6:FaCreativeCommonsPdAlt":
            return FaCreativeCommonsPdAlt;
        case "fa6:FaCreativeCommonsPd":
            return FaCreativeCommonsPd;
        case "fa6:FaCreativeCommonsRemix":
            return FaCreativeCommonsRemix;
        case "fa6:FaCreativeCommonsSa":
            return FaCreativeCommonsSa;
        case "fa6:FaCreativeCommonsSamplingPlus":
            return FaCreativeCommonsSamplingPlus;
        case "fa6:FaCreativeCommonsSampling":
            return FaCreativeCommonsSampling;
        case "fa6:FaCreativeCommonsShare":
            return FaCreativeCommonsShare;
        case "fa6:FaCreativeCommonsZero":
            return FaCreativeCommonsZero;
        case "fa6:FaCreativeCommons":
            return FaCreativeCommons;
        case "fa6:FaCriticalRole":
            return FaCriticalRole;
        case "fa6:FaCss3Alt":
            return FaCss3Alt;
        case "fa6:FaCss3":
            return FaCss3;
        case "fa6:FaCuttlefish":
            return FaCuttlefish;
        case "fa6:FaDAndDBeyond":
            return FaDAndDBeyond;
        case "fa6:FaDAndD":
            return FaDAndD;
        case "fa6:FaDailymotion":
            return FaDailymotion;
        case "fa6:FaDartLang":
            return FaDartLang;
        case "fa6:FaDashcube":
            return FaDashcube;
        case "fa6:FaDebian":
            return FaDebian;
        case "fa6:FaDeezer":
            return FaDeezer;
        case "fa6:FaDelicious":
            return FaDelicious;
        case "fa6:FaDeploydog":
            return FaDeploydog;
        case "fa6:FaDeskpro":
            return FaDeskpro;
        case "fa6:FaDev":
            return FaDev;
        case "fa6:FaDeviantart":
            return FaDeviantart;
        case "fa6:FaDhl":
            return FaDhl;
        case "fa6:FaDiaspora":
            return FaDiaspora;
        case "fa6:FaDigg":
            return FaDigg;
        case "fa6:FaDigitalOcean":
            return FaDigitalOcean;
        case "fa6:FaDiscord":
            return FaDiscord;
        case "fa6:FaDiscourse":
            return FaDiscourse;
        case "fa6:FaDochub":
            return FaDochub;
        case "fa6:FaDocker":
            return FaDocker;
        case "fa6:FaDraft2Digital":
            return FaDraft2Digital;
        case "fa6:FaDribbble":
            return FaDribbble;
        case "fa6:FaDropbox":
            return FaDropbox;
        case "fa6:FaDrupal":
            return FaDrupal;
        case "fa6:FaDyalog":
            return FaDyalog;
        case "fa6:FaEarlybirds":
            return FaEarlybirds;
        case "fa6:FaEbay":
            return FaEbay;
        case "fa6:FaEdgeLegacy":
            return FaEdgeLegacy;
        case "fa6:FaEdge":
            return FaEdge;
        case "fa6:FaElementor":
            return FaElementor;
        case "fa6:FaEllo":
            return FaEllo;
        case "fa6:FaEmber":
            return FaEmber;
        case "fa6:FaEmpire":
            return FaEmpire;
        case "fa6:FaEnvira":
            return FaEnvira;
        case "fa6:FaErlang":
            return FaErlang;
        case "fa6:FaEthereum":
            return FaEthereum;
        case "fa6:FaEtsy":
            return FaEtsy;
        case "fa6:FaEvernote":
            return FaEvernote;
        case "fa6:FaExpeditedssl":
            return FaExpeditedssl;
        case "fa6:FaFacebookF":
            return FaFacebookF;
        case "fa6:FaFacebookMessenger":
            return FaFacebookMessenger;
        case "fa6:FaFacebook":
            return FaFacebook;
        case "fa6:FaFantasyFlightGames":
            return FaFantasyFlightGames;
        case "fa6:FaFedex":
            return FaFedex;
        case "fa6:FaFedora":
            return FaFedora;
        case "fa6:FaFigma":
            return FaFigma;
        case "fa6:FaFirefoxBrowser":
            return FaFirefoxBrowser;
        case "fa6:FaFirefox":
            return FaFirefox;
        case "fa6:FaFirstOrderAlt":
            return FaFirstOrderAlt;
        case "fa6:FaFirstOrder":
            return FaFirstOrder;
        case "fa6:FaFirstdraft":
            return FaFirstdraft;
        case "fa6:FaFlickr":
            return FaFlickr;
        case "fa6:FaFlipboard":
            return FaFlipboard;
        case "fa6:FaFlutter":
            return FaFlutter;
        case "fa6:FaFly":
            return FaFly;
        case "fa6:FaFontAwesome":
            return FaFontAwesome;
        case "fa6:FaFonticonsFi":
            return FaFonticonsFi;
        case "fa6:FaFonticons":
            return FaFonticons;
        case "fa6:FaFortAwesomeAlt":
            return FaFortAwesomeAlt;
        case "fa6:FaFortAwesome":
            return FaFortAwesome;
        case "fa6:FaForumbee":
            return FaForumbee;
        case "fa6:FaFoursquare":
            return FaFoursquare;
        case "fa6:FaFreeCodeCamp":
            return FaFreeCodeCamp;
        case "fa6:FaFreebsd":
            return FaFreebsd;
        case "fa6:FaFulcrum":
            return FaFulcrum;
        case "fa6:FaGalacticRepublic":
            return FaGalacticRepublic;
        case "fa6:FaGalacticSenate":
            return FaGalacticSenate;
        case "fa6:FaGetPocket":
            return FaGetPocket;
        case "fa6:FaGgCircle":
            return FaGgCircle;
        case "fa6:FaGg":
            return FaGg;
        case "fa6:FaGitAlt":
            return FaGitAlt;
        case "fa6:FaGit":
            return FaGit;
        case "fa6:FaGithubAlt":
            return FaGithubAlt;
        case "fa6:FaGithub":
            return FaGithub;
        case "fa6:FaGitkraken":
            return FaGitkraken;
        case "fa6:FaGitlab":
            return FaGitlab;
        case "fa6:FaGitter":
            return FaGitter;
        case "fa6:FaGlideG":
            return FaGlideG;
        case "fa6:FaGlide":
            return FaGlide;
        case "fa6:FaGofore":
            return FaGofore;
        case "fa6:FaGolang":
            return FaGolang;
        case "fa6:FaGoodreadsG":
            return FaGoodreadsG;
        case "fa6:FaGoodreads":
            return FaGoodreads;
        case "fa6:FaGoogleDrive":
            return FaGoogleDrive;
        case "fa6:FaGooglePay":
            return FaGooglePay;
        case "fa6:FaGooglePlay":
            return FaGooglePlay;
        case "fa6:FaGooglePlusG":
            return FaGooglePlusG;
        case "fa6:FaGooglePlus":
            return FaGooglePlus;
        case "fa6:FaGoogleScholar":
            return FaGoogleScholar;
        case "fa6:FaGoogleWallet":
            return FaGoogleWallet;
        case "fa6:FaGoogle":
            return FaGoogle;
        case "fa6:FaGratipay":
            return FaGratipay;
        case "fa6:FaGrav":
            return FaGrav;
        case "fa6:FaGripfire":
            return FaGripfire;
        case "fa6:FaGrunt":
            return FaGrunt;
        case "fa6:FaGuilded":
            return FaGuilded;
        case "fa6:FaGulp":
            return FaGulp;
        case "fa6:FaHackerNews":
            return FaHackerNews;
        case "fa6:FaHackerrank":
            return FaHackerrank;
        case "fa6:FaHashnode":
            return FaHashnode;
        case "fa6:FaHips":
            return FaHips;
        case "fa6:FaHireAHelper":
            return FaHireAHelper;
        case "fa6:FaHive":
            return FaHive;
        case "fa6:FaHooli":
            return FaHooli;
        case "fa6:FaHornbill":
            return FaHornbill;
        case "fa6:FaHotjar":
            return FaHotjar;
        case "fa6:FaHouzz":
            return FaHouzz;
        case "fa6:FaHtml5":
            return FaHtml5;
        case "fa6:FaHubspot":
            return FaHubspot;
        case "fa6:FaIdeal":
            return FaIdeal;
        case "fa6:FaImdb":
            return FaImdb;
        case "fa6:FaInstagram":
            return FaInstagram;
        case "fa6:FaInstalod":
            return FaInstalod;
        case "fa6:FaIntercom":
            return FaIntercom;
        case "fa6:FaInternetExplorer":
            return FaInternetExplorer;
        case "fa6:FaInvision":
            return FaInvision;
        case "fa6:FaIoxhost":
            return FaIoxhost;
        case "fa6:FaItchIo":
            return FaItchIo;
        case "fa6:FaItunesNote":
            return FaItunesNote;
        case "fa6:FaItunes":
            return FaItunes;
        case "fa6:FaJava":
            return FaJava;
        case "fa6:FaJediOrder":
            return FaJediOrder;
        case "fa6:FaJenkins":
            return FaJenkins;
        case "fa6:FaJira":
            return FaJira;
        case "fa6:FaJoget":
            return FaJoget;
        case "fa6:FaJoomla":
            return FaJoomla;
        case "fa6:FaJs":
            return FaJs;
        case "fa6:FaJsfiddle":
            return FaJsfiddle;
        case "fa6:FaJxl":
            return FaJxl;
        case "fa6:FaKaggle":
            return FaKaggle;
        case "fa6:FaKeybase":
            return FaKeybase;
        case "fa6:FaKeycdn":
            return FaKeycdn;
        case "fa6:FaKickstarterK":
            return FaKickstarterK;
        case "fa6:FaKickstarter":
            return FaKickstarter;
        case "fa6:FaKorvue":
            return FaKorvue;
        case "fa6:FaLaravel":
            return FaLaravel;
        case "fa6:FaLastfm":
            return FaLastfm;
        case "fa6:FaLeanpub":
            return FaLeanpub;
        case "fa6:FaLess":
            return FaLess;
        case "fa6:FaLetterboxd":
            return FaLetterboxd;
        case "fa6:FaLine":
            return FaLine;
        case "fa6:FaLinkedinIn":
            return FaLinkedinIn;
        case "fa6:FaLinkedin":
            return FaLinkedin;
        case "fa6:FaLinode":
            return FaLinode;
        case "fa6:FaLinux":
            return FaLinux;
        case "fa6:FaLyft":
            return FaLyft;
        case "fa6:FaMagento":
            return FaMagento;
        case "fa6:FaMailchimp":
            return FaMailchimp;
        case "fa6:FaMandalorian":
            return FaMandalorian;
        case "fa6:FaMarkdown":
            return FaMarkdown;
        case "fa6:FaMastodon":
            return FaMastodon;
        case "fa6:FaMaxcdn":
            return FaMaxcdn;
        case "fa6:FaMdb":
            return FaMdb;
        case "fa6:FaMedapps":
            return FaMedapps;
        case "fa6:FaMedium":
            return FaMedium;
        case "fa6:FaMedrt":
            return FaMedrt;
        case "fa6:FaMeetup":
            return FaMeetup;
        case "fa6:FaMegaport":
            return FaMegaport;
        case "fa6:FaMendeley":
            return FaMendeley;
        case "fa6:FaMeta":
            return FaMeta;
        case "fa6:FaMicroblog":
            return FaMicroblog;
        case "fa6:FaMicrosoft":
            return FaMicrosoft;
        case "fa6:FaMintbit":
            return FaMintbit;
        case "fa6:FaMix":
            return FaMix;
        case "fa6:FaMixcloud":
            return FaMixcloud;
        case "fa6:FaMixer":
            return FaMixer;
        case "fa6:FaMizuni":
            return FaMizuni;
        case "fa6:FaModx":
            return FaModx;
        case "fa6:FaMonero":
            return FaMonero;
        case "fa6:FaNapster":
            return FaNapster;
        case "fa6:FaNeos":
            return FaNeos;
        case "fa6:FaNfcDirectional":
            return FaNfcDirectional;
        case "fa6:FaNfcSymbol":
            return FaNfcSymbol;
        case "fa6:FaNimblr":
            return FaNimblr;
        case "fa6:FaNodeJs":
            return FaNodeJs;
        case "fa6:FaNode":
            return FaNode;
        case "fa6:FaNpm":
            return FaNpm;
        case "fa6:FaNs8":
            return FaNs8;
        case "fa6:FaNutritionix":
            return FaNutritionix;
        case "fa6:FaOctopusDeploy":
            return FaOctopusDeploy;
        case "fa6:FaOdnoklassniki":
            return FaOdnoklassniki;
        case "fa6:FaOdysee":
            return FaOdysee;
        case "fa6:FaOldRepublic":
            return FaOldRepublic;
        case "fa6:FaOpencart":
            return FaOpencart;
        case "fa6:FaOpenid":
            return FaOpenid;
        case "fa6:FaOpensuse":
            return FaOpensuse;
        case "fa6:FaOpera":
            return FaOpera;
        case "fa6:FaOptinMonster":
            return FaOptinMonster;
        case "fa6:FaOrcid":
            return FaOrcid;
        case "fa6:FaOsi":
            return FaOsi;
        case "fa6:FaPadlet":
            return FaPadlet;
        case "fa6:FaPage4":
            return FaPage4;
        case "fa6:FaPagelines":
            return FaPagelines;
        case "fa6:FaPalfed":
            return FaPalfed;
        case "fa6:FaPatreon":
            return FaPatreon;
        case "fa6:FaPaypal":
            return FaPaypal;
        case "fa6:FaPerbyte":
            return FaPerbyte;
        case "fa6:FaPeriscope":
            return FaPeriscope;
        case "fa6:FaPhabricator":
            return FaPhabricator;
        case "fa6:FaPhoenixFramework":
            return FaPhoenixFramework;
        case "fa6:FaPhoenixSquadron":
            return FaPhoenixSquadron;
        case "fa6:FaPhp":
            return FaPhp;
        case "fa6:FaPiedPiperAlt":
            return FaPiedPiperAlt;
        case "fa6:FaPiedPiperHat":
            return FaPiedPiperHat;
        case "fa6:FaPiedPiperPp":
            return FaPiedPiperPp;
        case "fa6:FaPiedPiper":
            return FaPiedPiper;
        case "fa6:FaPinterestP":
            return FaPinterestP;
        case "fa6:FaPinterest":
            return FaPinterest;
        case "fa6:FaPix":
            return FaPix;
        case "fa6:FaPixiv":
            return FaPixiv;
        case "fa6:FaPlaystation":
            return FaPlaystation;
        case "fa6:FaProductHunt":
            return FaProductHunt;
        case "fa6:FaPushed":
            return FaPushed;
        case "fa6:FaPython":
            return FaPython;
        case "fa6:FaQq":
            return FaQq;
        case "fa6:FaQuinscape":
            return FaQuinscape;
        case "fa6:FaQuora":
            return FaQuora;
        case "fa6:FaRProject":
            return FaRProject;
        case "fa6:FaRaspberryPi":
            return FaRaspberryPi;
        case "fa6:FaRavelry":
            return FaRavelry;
        case "fa6:FaReact":
            return FaReact;
        case "fa6:FaReacteurope":
            return FaReacteurope;
        case "fa6:FaReadme":
            return FaReadme;
        case "fa6:FaRebel":
            return FaRebel;
        case "fa6:FaRedRiver":
            return FaRedRiver;
        case "fa6:FaRedditAlien":
            return FaRedditAlien;
        case "fa6:FaReddit":
            return FaReddit;
        case "fa6:FaRedhat":
            return FaRedhat;
        case "fa6:FaRenren":
            return FaRenren;
        case "fa6:FaReplyd":
            return FaReplyd;
        case "fa6:FaResearchgate":
            return FaResearchgate;
        case "fa6:FaResolving":
            return FaResolving;
        case "fa6:FaRev":
            return FaRev;
        case "fa6:FaRocketchat":
            return FaRocketchat;
        case "fa6:FaRockrms":
            return FaRockrms;
        case "fa6:FaRust":
            return FaRust;
        case "fa6:FaSafari":
            return FaSafari;
        case "fa6:FaSalesforce":
            return FaSalesforce;
        case "fa6:FaSass":
            return FaSass;
        case "fa6:FaSchlix":
            return FaSchlix;
        case "fa6:FaScreenpal":
            return FaScreenpal;
        case "fa6:FaScribd":
            return FaScribd;
        case "fa6:FaSearchengin":
            return FaSearchengin;
        case "fa6:FaSellcast":
            return FaSellcast;
        case "fa6:FaSellsy":
            return FaSellsy;
        case "fa6:FaServicestack":
            return FaServicestack;
        case "fa6:FaShirtsinbulk":
            return FaShirtsinbulk;
        case "fa6:FaShoelace":
            return FaShoelace;
        case "fa6:FaShopify":
            return FaShopify;
        case "fa6:FaShopware":
            return FaShopware;
        case "fa6:FaSignalMessenger":
            return FaSignalMessenger;
        case "fa6:FaSimplybuilt":
            return FaSimplybuilt;
        case "fa6:FaSistrix":
            return FaSistrix;
        case "fa6:FaSith":
            return FaSith;
        case "fa6:FaSitrox":
            return FaSitrox;
        case "fa6:FaSketch":
            return FaSketch;
        case "fa6:FaSkyatlas":
            return FaSkyatlas;
        case "fa6:FaSkype":
            return FaSkype;
        case "fa6:FaSlack":
            return FaSlack;
        case "fa6:FaSlideshare":
            return FaSlideshare;
        case "fa6:FaSnapchat":
            return FaSnapchat;
        case "fa6:FaSoundcloud":
            return FaSoundcloud;
        case "fa6:FaSourcetree":
            return FaSourcetree;
        case "fa6:FaSpaceAwesome":
            return FaSpaceAwesome;
        case "fa6:FaSpeakap":
            return FaSpeakap;
        case "fa6:FaSpeakerDeck":
            return FaSpeakerDeck;
        case "fa6:FaSpotify":
            return FaSpotify;
        case "fa6:FaSquareBehance":
            return FaSquareBehance;
        case "fa6:FaSquareDribbble":
            return FaSquareDribbble;
        case "fa6:FaSquareFacebook":
            return FaSquareFacebook;
        case "fa6:FaSquareFontAwesomeStroke":
            return FaSquareFontAwesomeStroke;
        case "fa6:FaSquareFontAwesome":
            return FaSquareFontAwesome;
        case "fa6:FaSquareGit":
            return FaSquareGit;
        case "fa6:FaSquareGithub":
            return FaSquareGithub;
        case "fa6:FaSquareGitlab":
            return FaSquareGitlab;
        case "fa6:FaSquareGooglePlus":
            return FaSquareGooglePlus;
        case "fa6:FaSquareHackerNews":
            return FaSquareHackerNews;
        case "fa6:FaSquareInstagram":
            return FaSquareInstagram;
        case "fa6:FaSquareJs":
            return FaSquareJs;
        case "fa6:FaSquareLastfm":
            return FaSquareLastfm;
        case "fa6:FaSquareLetterboxd":
            return FaSquareLetterboxd;
        case "fa6:FaSquareOdnoklassniki":
            return FaSquareOdnoklassniki;
        case "fa6:FaSquarePiedPiper":
            return FaSquarePiedPiper;
        case "fa6:FaSquarePinterest":
            return FaSquarePinterest;
        case "fa6:FaSquareReddit":
            return FaSquareReddit;
        case "fa6:FaSquareSnapchat":
            return FaSquareSnapchat;
        case "fa6:FaSquareSteam":
            return FaSquareSteam;
        case "fa6:FaSquareThreads":
            return FaSquareThreads;
        case "fa6:FaSquareTumblr":
            return FaSquareTumblr;
        case "fa6:FaSquareTwitter":
            return FaSquareTwitter;
        case "fa6:FaSquareUpwork":
            return FaSquareUpwork;
        case "fa6:FaSquareViadeo":
            return FaSquareViadeo;
        case "fa6:FaSquareVimeo":
            return FaSquareVimeo;
        case "fa6:FaSquareWebAwesomeStroke":
            return FaSquareWebAwesomeStroke;
        case "fa6:FaSquareWebAwesome":
            return FaSquareWebAwesome;
        case "fa6:FaSquareWhatsapp":
            return FaSquareWhatsapp;
        case "fa6:FaSquareXTwitter":
            return FaSquareXTwitter;
        case "fa6:FaSquareXing":
            return FaSquareXing;
        case "fa6:FaSquareYoutube":
            return FaSquareYoutube;
        case "fa6:FaSquarespace":
            return FaSquarespace;
        case "fa6:FaStackExchange":
            return FaStackExchange;
        case "fa6:FaStackOverflow":
            return FaStackOverflow;
        case "fa6:FaStackpath":
            return FaStackpath;
        case "fa6:FaStaylinked":
            return FaStaylinked;
        case "fa6:FaSteamSymbol":
            return FaSteamSymbol;
        case "fa6:FaSteam":
            return FaSteam;
        case "fa6:FaStickerMule":
            return FaStickerMule;
        case "fa6:FaStrava":
            return FaStrava;
        case "fa6:FaStripeS":
            return FaStripeS;
        case "fa6:FaStripe":
            return FaStripe;
        case "fa6:FaStubber":
            return FaStubber;
        case "fa6:FaStudiovinari":
            return FaStudiovinari;
        case "fa6:FaStumbleuponCircle":
            return FaStumbleuponCircle;
        case "fa6:FaStumbleupon":
            return FaStumbleupon;
        case "fa6:FaSuperpowers":
            return FaSuperpowers;
        case "fa6:FaSupple":
            return FaSupple;
        case "fa6:FaSuse":
            return FaSuse;
        case "fa6:FaSwift":
            return FaSwift;
        case "fa6:FaSymfony":
            return FaSymfony;
        case "fa6:FaTeamspeak":
            return FaTeamspeak;
        case "fa6:FaTelegram":
            return FaTelegram;
        case "fa6:FaTencentWeibo":
            return FaTencentWeibo;
        case "fa6:FaTheRedYeti":
            return FaTheRedYeti;
        case "fa6:FaThemeco":
            return FaThemeco;
        case "fa6:FaThemeisle":
            return FaThemeisle;
        case "fa6:FaThinkPeaks":
            return FaThinkPeaks;
        case "fa6:FaThreads":
            return FaThreads;
        case "fa6:FaTiktok":
            return FaTiktok;
        case "fa6:FaTradeFederation":
            return FaTradeFederation;
        case "fa6:FaTrello":
            return FaTrello;
        case "fa6:FaTumblr":
            return FaTumblr;
        case "fa6:FaTwitch":
            return FaTwitch;
        case "fa6:FaTwitter":
            return FaTwitter;
        case "fa6:FaTypo3":
            return FaTypo3;
        case "fa6:FaUber":
            return FaUber;
        case "fa6:FaUbuntu":
            return FaUbuntu;
        case "fa6:FaUikit":
            return FaUikit;
        case "fa6:FaUmbraco":
            return FaUmbraco;
        case "fa6:FaUncharted":
            return FaUncharted;
        case "fa6:FaUniregistry":
            return FaUniregistry;
        case "fa6:FaUnity":
            return FaUnity;
        case "fa6:FaUnsplash":
            return FaUnsplash;
        case "fa6:FaUntappd":
            return FaUntappd;
        case "fa6:FaUps":
            return FaUps;
        case "fa6:FaUpwork":
            return FaUpwork;
        case "fa6:FaUsb":
            return FaUsb;
        case "fa6:FaUsps":
            return FaUsps;
        case "fa6:FaUssunnah":
            return FaUssunnah;
        case "fa6:FaVaadin":
            return FaVaadin;
        case "fa6:FaViacoin":
            return FaViacoin;
        case "fa6:FaViadeo":
            return FaViadeo;
        case "fa6:FaViber":
            return FaViber;
        case "fa6:FaVimeoV":
            return FaVimeoV;
        case "fa6:FaVimeo":
            return FaVimeo;
        case "fa6:FaVine":
            return FaVine;
        case "fa6:FaVk":
            return FaVk;
        case "fa6:FaVnv":
            return FaVnv;
        case "fa6:FaVuejs":
            return FaVuejs;
        case "fa6:FaWatchmanMonitoring":
            return FaWatchmanMonitoring;
        case "fa6:FaWaze":
            return FaWaze;
        case "fa6:FaWebAwesome":
            return FaWebAwesome;
        case "fa6:FaWebflow":
            return FaWebflow;
        case "fa6:FaWeebly":
            return FaWeebly;
        case "fa6:FaWeibo":
            return FaWeibo;
        case "fa6:FaWeixin":
            return FaWeixin;
        case "fa6:FaWhatsapp":
            return FaWhatsapp;
        case "fa6:FaWhmcs":
            return FaWhmcs;
        case "fa6:FaWikipediaW":
            return FaWikipediaW;
        case "fa6:FaWindows":
            return FaWindows;
        case "fa6:FaWirsindhandwerk":
            return FaWirsindhandwerk;
        case "fa6:FaWix":
            return FaWix;
        case "fa6:FaWizardsOfTheCoast":
            return FaWizardsOfTheCoast;
        case "fa6:FaWodu":
            return FaWodu;
        case "fa6:FaWolfPackBattalion":
            return FaWolfPackBattalion;
        case "fa6:FaWordpressSimple":
            return FaWordpressSimple;
        case "fa6:FaWordpress":
            return FaWordpress;
        case "fa6:FaWpbeginner":
            return FaWpbeginner;
        case "fa6:FaWpexplorer":
            return FaWpexplorer;
        case "fa6:FaWpforms":
            return FaWpforms;
        case "fa6:FaWpressr":
            return FaWpressr;
        case "fa6:FaXTwitter":
            return FaXTwitter;
        case "fa6:FaXbox":
            return FaXbox;
        case "fa6:FaXing":
            return FaXing;
        case "fa6:FaYCombinator":
            return FaYCombinator;
        case "fa6:FaYahoo":
            return FaYahoo;
        case "fa6:FaYammer":
            return FaYammer;
        case "fa6:FaYandexInternational":
            return FaYandexInternational;
        case "fa6:FaYandex":
            return FaYandex;
        case "fa6:FaYarn":
            return FaYarn;
        case "fa6:FaYelp":
            return FaYelp;
        case "fa6:FaYoast":
            return FaYoast;
        case "fa6:FaYoutube":
            return FaYoutube;
        case "fa6:FaZhihu":
            return FaZhihu;
        case "fa6:Fa0":
            return Fa0;
        case "fa6:Fa1":
            return Fa1;
        case "fa6:Fa2":
            return Fa2;
        case "fa6:Fa3":
            return Fa3;
        case "fa6:Fa4":
            return Fa4;
        case "fa6:Fa5":
            return Fa5;
        case "fa6:Fa6":
            return Fa6;
        case "fa6:Fa7":
            return Fa7;
        case "fa6:Fa8":
            return Fa8;
        case "fa6:Fa9":
            return Fa9;
        case "fa6:FaA":
            return FaA;
        case "fa6:FaAddressBook":
            return FaAddressBook;
        case "fa6:FaAddressCard":
            return FaAddressCard;
        case "fa6:FaAlignCenter":
            return FaAlignCenter;
        case "fa6:FaAlignJustify":
            return FaAlignJustify;
        case "fa6:FaAlignLeft":
            return FaAlignLeft;
        case "fa6:FaAlignRight":
            return FaAlignRight;
        case "fa6:FaAnchorCircleCheck":
            return FaAnchorCircleCheck;
        case "fa6:FaAnchorCircleExclamation":
            return FaAnchorCircleExclamation;
        case "fa6:FaAnchorCircleXmark":
            return FaAnchorCircleXmark;
        case "fa6:FaAnchorLock":
            return FaAnchorLock;
        case "fa6:FaAnchor":
            return FaAnchor;
        case "fa6:FaAngleDown":
            return FaAngleDown;
        case "fa6:FaAngleLeft":
            return FaAngleLeft;
        case "fa6:FaAngleRight":
            return FaAngleRight;
        case "fa6:FaAngleUp":
            return FaAngleUp;
        case "fa6:FaAnglesDown":
            return FaAnglesDown;
        case "fa6:FaAnglesLeft":
            return FaAnglesLeft;
        case "fa6:FaAnglesRight":
            return FaAnglesRight;
        case "fa6:FaAnglesUp":
            return FaAnglesUp;
        case "fa6:FaAnkh":
            return FaAnkh;
        case "fa6:FaAppleWhole":
            return FaAppleWhole;
        case "fa6:FaArchway":
            return FaArchway;
        case "fa6:FaArrowDown19":
            return FaArrowDown19;
        case "fa6:FaArrowDown91":
            return FaArrowDown91;
        case "fa6:FaArrowDownAZ":
            return FaArrowDownAZ;
        case "fa6:FaArrowDownLong":
            return FaArrowDownLong;
        case "fa6:FaArrowDownShortWide":
            return FaArrowDownShortWide;
        case "fa6:FaArrowDownUpAcrossLine":
            return FaArrowDownUpAcrossLine;
        case "fa6:FaArrowDownUpLock":
            return FaArrowDownUpLock;
        case "fa6:FaArrowDownWideShort":
            return FaArrowDownWideShort;
        case "fa6:FaArrowDownZA":
            return FaArrowDownZA;
        case "fa6:FaArrowDown":
            return FaArrowDown;
        case "fa6:FaArrowLeftLong":
            return FaArrowLeftLong;
        case "fa6:FaArrowLeft":
            return FaArrowLeft;
        case "fa6:FaArrowPointer":
            return FaArrowPointer;
        case "fa6:FaArrowRightArrowLeft":
            return FaArrowRightArrowLeft;
        case "fa6:FaArrowRightFromBracket":
            return FaArrowRightFromBracket;
        case "fa6:FaArrowRightLong":
            return FaArrowRightLong;
        case "fa6:FaArrowRightToBracket":
            return FaArrowRightToBracket;
        case "fa6:FaArrowRightToCity":
            return FaArrowRightToCity;
        case "fa6:FaArrowRight":
            return FaArrowRight;
        case "fa6:FaArrowRotateLeft":
            return FaArrowRotateLeft;
        case "fa6:FaArrowRotateRight":
            return FaArrowRotateRight;
        case "fa6:FaArrowTrendDown":
            return FaArrowTrendDown;
        case "fa6:FaArrowTrendUp":
            return FaArrowTrendUp;
        case "fa6:FaArrowTurnDown":
            return FaArrowTurnDown;
        case "fa6:FaArrowTurnUp":
            return FaArrowTurnUp;
        case "fa6:FaArrowUp19":
            return FaArrowUp19;
        case "fa6:FaArrowUp91":
            return FaArrowUp91;
        case "fa6:FaArrowUpAZ":
            return FaArrowUpAZ;
        case "fa6:FaArrowUpFromBracket":
            return FaArrowUpFromBracket;
        case "fa6:FaArrowUpFromGroundWater":
            return FaArrowUpFromGroundWater;
        case "fa6:FaArrowUpFromWaterPump":
            return FaArrowUpFromWaterPump;
        case "fa6:FaArrowUpLong":
            return FaArrowUpLong;
        case "fa6:FaArrowUpRightDots":
            return FaArrowUpRightDots;
        case "fa6:FaArrowUpRightFromSquare":
            return FaArrowUpRightFromSquare;
        case "fa6:FaArrowUpShortWide":
            return FaArrowUpShortWide;
        case "fa6:FaArrowUpWideShort":
            return FaArrowUpWideShort;
        case "fa6:FaArrowUpZA":
            return FaArrowUpZA;
        case "fa6:FaArrowUp":
            return FaArrowUp;
        case "fa6:FaArrowsDownToLine":
            return FaArrowsDownToLine;
        case "fa6:FaArrowsDownToPeople":
            return FaArrowsDownToPeople;
        case "fa6:FaArrowsLeftRightToLine":
            return FaArrowsLeftRightToLine;
        case "fa6:FaArrowsLeftRight":
            return FaArrowsLeftRight;
        case "fa6:FaArrowsRotate":
            return FaArrowsRotate;
        case "fa6:FaArrowsSpin":
            return FaArrowsSpin;
        case "fa6:FaArrowsSplitUpAndLeft":
            return FaArrowsSplitUpAndLeft;
        case "fa6:FaArrowsToCircle":
            return FaArrowsToCircle;
        case "fa6:FaArrowsToDot":
            return FaArrowsToDot;
        case "fa6:FaArrowsToEye":
            return FaArrowsToEye;
        case "fa6:FaArrowsTurnRight":
            return FaArrowsTurnRight;
        case "fa6:FaArrowsTurnToDots":
            return FaArrowsTurnToDots;
        case "fa6:FaArrowsUpDownLeftRight":
            return FaArrowsUpDownLeftRight;
        case "fa6:FaArrowsUpDown":
            return FaArrowsUpDown;
        case "fa6:FaArrowsUpToLine":
            return FaArrowsUpToLine;
        case "fa6:FaAsterisk":
            return FaAsterisk;
        case "fa6:FaAt":
            return FaAt;
        case "fa6:FaAtom":
            return FaAtom;
        case "fa6:FaAudioDescription":
            return FaAudioDescription;
        case "fa6:FaAustralSign":
            return FaAustralSign;
        case "fa6:FaAward":
            return FaAward;
        case "fa6:FaB":
            return FaB;
        case "fa6:FaBabyCarriage":
            return FaBabyCarriage;
        case "fa6:FaBaby":
            return FaBaby;
        case "fa6:FaBackwardFast":
            return FaBackwardFast;
        case "fa6:FaBackwardStep":
            return FaBackwardStep;
        case "fa6:FaBackward":
            return FaBackward;
        case "fa6:FaBacon":
            return FaBacon;
        case "fa6:FaBacteria":
            return FaBacteria;
        case "fa6:FaBacterium":
            return FaBacterium;
        case "fa6:FaBagShopping":
            return FaBagShopping;
        case "fa6:FaBahai":
            return FaBahai;
        case "fa6:FaBahtSign":
            return FaBahtSign;
        case "fa6:FaBanSmoking":
            return FaBanSmoking;
        case "fa6:FaBan":
            return FaBan;
        case "fa6:FaBandage":
            return FaBandage;
        case "fa6:FaBangladeshiTakaSign":
            return FaBangladeshiTakaSign;
        case "fa6:FaBarcode":
            return FaBarcode;
        case "fa6:FaBarsProgress":
            return FaBarsProgress;
        case "fa6:FaBarsStaggered":
            return FaBarsStaggered;
        case "fa6:FaBars":
            return FaBars;
        case "fa6:FaBaseballBatBall":
            return FaBaseballBatBall;
        case "fa6:FaBaseball":
            return FaBaseball;
        case "fa6:FaBasketShopping":
            return FaBasketShopping;
        case "fa6:FaBasketball":
            return FaBasketball;
        case "fa6:FaBath":
            return FaBath;
        case "fa6:FaBatteryEmpty":
            return FaBatteryEmpty;
        case "fa6:FaBatteryFull":
            return FaBatteryFull;
        case "fa6:FaBatteryHalf":
            return FaBatteryHalf;
        case "fa6:FaBatteryQuarter":
            return FaBatteryQuarter;
        case "fa6:FaBatteryThreeQuarters":
            return FaBatteryThreeQuarters;
        case "fa6:FaBedPulse":
            return FaBedPulse;
        case "fa6:FaBed":
            return FaBed;
        case "fa6:FaBeerMugEmpty":
            return FaBeerMugEmpty;
        case "fa6:FaBellConcierge":
            return FaBellConcierge;
        case "fa6:FaBellSlash":
            return FaBellSlash;
        case "fa6:FaBell":
            return FaBell;
        case "fa6:FaBezierCurve":
            return FaBezierCurve;
        case "fa6:FaBicycle":
            return FaBicycle;
        case "fa6:FaBinoculars":
            return FaBinoculars;
        case "fa6:FaBiohazard":
            return FaBiohazard;
        case "fa6:FaBitcoinSign":
            return FaBitcoinSign;
        case "fa6:FaBlenderPhone":
            return FaBlenderPhone;
        case "fa6:FaBlender":
            return FaBlender;
        case "fa6:FaBlog":
            return FaBlog;
        case "fa6:FaBold":
            return FaBold;
        case "fa6:FaBoltLightning":
            return FaBoltLightning;
        case "fa6:FaBolt":
            return FaBolt;
        case "fa6:FaBomb":
            return FaBomb;
        case "fa6:FaBone":
            return FaBone;
        case "fa6:FaBong":
            return FaBong;
        case "fa6:FaBookAtlas":
            return FaBookAtlas;
        case "fa6:FaBookBible":
            return FaBookBible;
        case "fa6:FaBookBookmark":
            return FaBookBookmark;
        case "fa6:FaBookJournalWhills":
            return FaBookJournalWhills;
        case "fa6:FaBookMedical":
            return FaBookMedical;
        case "fa6:FaBookOpenReader":
            return FaBookOpenReader;
        case "fa6:FaBookOpen":
            return FaBookOpen;
        case "fa6:FaBookQuran":
            return FaBookQuran;
        case "fa6:FaBookSkull":
            return FaBookSkull;
        case "fa6:FaBookTanakh":
            return FaBookTanakh;
        case "fa6:FaBook":
            return FaBook;
        case "fa6:FaBookmark":
            return FaBookmark;
        case "fa6:FaBorderAll":
            return FaBorderAll;
        case "fa6:FaBorderNone":
            return FaBorderNone;
        case "fa6:FaBorderTopLeft":
            return FaBorderTopLeft;
        case "fa6:FaBoreHole":
            return FaBoreHole;
        case "fa6:FaBottleDroplet":
            return FaBottleDroplet;
        case "fa6:FaBottleWater":
            return FaBottleWater;
        case "fa6:FaBowlFood":
            return FaBowlFood;
        case "fa6:FaBowlRice":
            return FaBowlRice;
        case "fa6:FaBowlingBall":
            return FaBowlingBall;
        case "fa6:FaBoxArchive":
            return FaBoxArchive;
        case "fa6:FaBoxOpen":
            return FaBoxOpen;
        case "fa6:FaBoxTissue":
            return FaBoxTissue;
        case "fa6:FaBox":
            return FaBox;
        case "fa6:FaBoxesPacking":
            return FaBoxesPacking;
        case "fa6:FaBoxesStacked":
            return FaBoxesStacked;
        case "fa6:FaBraille":
            return FaBraille;
        case "fa6:FaBrain":
            return FaBrain;
        case "fa6:FaBrazilianRealSign":
            return FaBrazilianRealSign;
        case "fa6:FaBreadSlice":
            return FaBreadSlice;
        case "fa6:FaBridgeCircleCheck":
            return FaBridgeCircleCheck;
        case "fa6:FaBridgeCircleExclamation":
            return FaBridgeCircleExclamation;
        case "fa6:FaBridgeCircleXmark":
            return FaBridgeCircleXmark;
        case "fa6:FaBridgeLock":
            return FaBridgeLock;
        case "fa6:FaBridgeWater":
            return FaBridgeWater;
        case "fa6:FaBridge":
            return FaBridge;
        case "fa6:FaBriefcaseMedical":
            return FaBriefcaseMedical;
        case "fa6:FaBriefcase":
            return FaBriefcase;
        case "fa6:FaBroomBall":
            return FaBroomBall;
        case "fa6:FaBroom":
            return FaBroom;
        case "fa6:FaBrush":
            return FaBrush;
        case "fa6:FaBucket":
            return FaBucket;
        case "fa6:FaBugSlash":
            return FaBugSlash;
        case "fa6:FaBug":
            return FaBug;
        case "fa6:FaBugs":
            return FaBugs;
        case "fa6:FaBuildingCircleArrowRight":
            return FaBuildingCircleArrowRight;
        case "fa6:FaBuildingCircleCheck":
            return FaBuildingCircleCheck;
        case "fa6:FaBuildingCircleExclamation":
            return FaBuildingCircleExclamation;
        case "fa6:FaBuildingCircleXmark":
            return FaBuildingCircleXmark;
        case "fa6:FaBuildingColumns":
            return FaBuildingColumns;
        case "fa6:FaBuildingFlag":
            return FaBuildingFlag;
        case "fa6:FaBuildingLock":
            return FaBuildingLock;
        case "fa6:FaBuildingNgo":
            return FaBuildingNgo;
        case "fa6:FaBuildingShield":
            return FaBuildingShield;
        case "fa6:FaBuildingUn":
            return FaBuildingUn;
        case "fa6:FaBuildingUser":
            return FaBuildingUser;
        case "fa6:FaBuildingWheat":
            return FaBuildingWheat;
        case "fa6:FaBuilding":
            return FaBuilding;
        case "fa6:FaBullhorn":
            return FaBullhorn;
        case "fa6:FaBullseye":
            return FaBullseye;
        case "fa6:FaBurger":
            return FaBurger;
        case "fa6:FaBurst":
            return FaBurst;
        case "fa6:FaBusSimple":
            return FaBusSimple;
        case "fa6:FaBus":
            return FaBus;
        case "fa6:FaBusinessTime":
            return FaBusinessTime;
        case "fa6:FaC":
            return FaC;
        case "fa6:FaCableCar":
            return FaCableCar;
        case "fa6:FaCakeCandles":
            return FaCakeCandles;
        case "fa6:FaCalculator":
            return FaCalculator;
        case "fa6:FaCalendarCheck":
            return FaCalendarCheck;
        case "fa6:FaCalendarDay":
            return FaCalendarDay;
        case "fa6:FaCalendarDays":
            return FaCalendarDays;
        case "fa6:FaCalendarMinus":
            return FaCalendarMinus;
        case "fa6:FaCalendarPlus":
            return FaCalendarPlus;
        case "fa6:FaCalendarWeek":
            return FaCalendarWeek;
        case "fa6:FaCalendarXmark":
            return FaCalendarXmark;
        case "fa6:FaCalendar":
            return FaCalendar;
        case "fa6:FaCameraRetro":
            return FaCameraRetro;
        case "fa6:FaCameraRotate":
            return FaCameraRotate;
        case "fa6:FaCamera":
            return FaCamera;
        case "fa6:FaCampground":
            return FaCampground;
        case "fa6:FaCandyCane":
            return FaCandyCane;
        case "fa6:FaCannabis":
            return FaCannabis;
        case "fa6:FaCapsules":
            return FaCapsules;
        case "fa6:FaCarBattery":
            return FaCarBattery;
        case "fa6:FaCarBurst":
            return FaCarBurst;
        case "fa6:FaCarOn":
            return FaCarOn;
        case "fa6:FaCarRear":
            return FaCarRear;
        case "fa6:FaCarSide":
            return FaCarSide;
        case "fa6:FaCarTunnel":
            return FaCarTunnel;
        case "fa6:FaCar":
            return FaCar;
        case "fa6:FaCaravan":
            return FaCaravan;
        case "fa6:FaCaretDown":
            return FaCaretDown;
        case "fa6:FaCaretLeft":
            return FaCaretLeft;
        case "fa6:FaCaretRight":
            return FaCaretRight;
        case "fa6:FaCaretUp":
            return FaCaretUp;
        case "fa6:FaCarrot":
            return FaCarrot;
        case "fa6:FaCartArrowDown":
            return FaCartArrowDown;
        case "fa6:FaCartFlatbedSuitcase":
            return FaCartFlatbedSuitcase;
        case "fa6:FaCartFlatbed":
            return FaCartFlatbed;
        case "fa6:FaCartPlus":
            return FaCartPlus;
        case "fa6:FaCartShopping":
            return FaCartShopping;
        case "fa6:FaCashRegister":
            return FaCashRegister;
        case "fa6:FaCat":
            return FaCat;
        case "fa6:FaCediSign":
            return FaCediSign;
        case "fa6:FaCentSign":
            return FaCentSign;
        case "fa6:FaCertificate":
            return FaCertificate;
        case "fa6:FaChair":
            return FaChair;
        case "fa6:FaChalkboardUser":
            return FaChalkboardUser;
        case "fa6:FaChalkboard":
            return FaChalkboard;
        case "fa6:FaChampagneGlasses":
            return FaChampagneGlasses;
        case "fa6:FaChargingStation":
            return FaChargingStation;
        case "fa6:FaChartArea":
            return FaChartArea;
        case "fa6:FaChartBar":
            return FaChartBar;
        case "fa6:FaChartColumn":
            return FaChartColumn;
        case "fa6:FaChartGantt":
            return FaChartGantt;
        case "fa6:FaChartLine":
            return FaChartLine;
        case "fa6:FaChartPie":
            return FaChartPie;
        case "fa6:FaChartSimple":
            return FaChartSimple;
        case "fa6:FaCheckDouble":
            return FaCheckDouble;
        case "fa6:FaCheckToSlot":
            return FaCheckToSlot;
        case "fa6:FaCheck":
            return FaCheck;
        case "fa6:FaCheese":
            return FaCheese;
        case "fa6:FaChessBishop":
            return FaChessBishop;
        case "fa6:FaChessBoard":
            return FaChessBoard;
        case "fa6:FaChessKing":
            return FaChessKing;
        case "fa6:FaChessKnight":
            return FaChessKnight;
        case "fa6:FaChessPawn":
            return FaChessPawn;
        case "fa6:FaChessQueen":
            return FaChessQueen;
        case "fa6:FaChessRook":
            return FaChessRook;
        case "fa6:FaChess":
            return FaChess;
        case "fa6:FaChevronDown":
            return FaChevronDown;
        case "fa6:FaChevronLeft":
            return FaChevronLeft;
        case "fa6:FaChevronRight":
            return FaChevronRight;
        case "fa6:FaChevronUp":
            return FaChevronUp;
        case "fa6:FaChildCombatant":
            return FaChildCombatant;
        case "fa6:FaChildDress":
            return FaChildDress;
        case "fa6:FaChildReaching":
            return FaChildReaching;
        case "fa6:FaChild":
            return FaChild;
        case "fa6:FaChildren":
            return FaChildren;
        case "fa6:FaChurch":
            return FaChurch;
        case "fa6:FaCircleArrowDown":
            return FaCircleArrowDown;
        case "fa6:FaCircleArrowLeft":
            return FaCircleArrowLeft;
        case "fa6:FaCircleArrowRight":
            return FaCircleArrowRight;
        case "fa6:FaCircleArrowUp":
            return FaCircleArrowUp;
        case "fa6:FaCircleCheck":
            return FaCircleCheck;
        case "fa6:FaCircleChevronDown":
            return FaCircleChevronDown;
        case "fa6:FaCircleChevronLeft":
            return FaCircleChevronLeft;
        case "fa6:FaCircleChevronRight":
            return FaCircleChevronRight;
        case "fa6:FaCircleChevronUp":
            return FaCircleChevronUp;
        case "fa6:FaCircleDollarToSlot":
            return FaCircleDollarToSlot;
        case "fa6:FaCircleDot":
            return FaCircleDot;
        case "fa6:FaCircleDown":
            return FaCircleDown;
        case "fa6:FaCircleExclamation":
            return FaCircleExclamation;
        case "fa6:FaCircleH":
            return FaCircleH;
        case "fa6:FaCircleHalfStroke":
            return FaCircleHalfStroke;
        case "fa6:FaCircleInfo":
            return FaCircleInfo;
        case "fa6:FaCircleLeft":
            return FaCircleLeft;
        case "fa6:FaCircleMinus":
            return FaCircleMinus;
        case "fa6:FaCircleNodes":
            return FaCircleNodes;
        case "fa6:FaCircleNotch":
            return FaCircleNotch;
        case "fa6:FaCirclePause":
            return FaCirclePause;
        case "fa6:FaCirclePlay":
            return FaCirclePlay;
        case "fa6:FaCirclePlus":
            return FaCirclePlus;
        case "fa6:FaCircleQuestion":
            return FaCircleQuestion;
        case "fa6:FaCircleRadiation":
            return FaCircleRadiation;
        case "fa6:FaCircleRight":
            return FaCircleRight;
        case "fa6:FaCircleStop":
            return FaCircleStop;
        case "fa6:FaCircleUp":
            return FaCircleUp;
        case "fa6:FaCircleUser":
            return FaCircleUser;
        case "fa6:FaCircleXmark":
            return FaCircleXmark;
        case "fa6:FaCircle":
            return FaCircle;
        case "fa6:FaCity":
            return FaCity;
        case "fa6:FaClapperboard":
            return FaClapperboard;
        case "fa6:FaClipboardCheck":
            return FaClipboardCheck;
        case "fa6:FaClipboardList":
            return FaClipboardList;
        case "fa6:FaClipboardQuestion":
            return FaClipboardQuestion;
        case "fa6:FaClipboardUser":
            return FaClipboardUser;
        case "fa6:FaClipboard":
            return FaClipboard;
        case "fa6:FaClockRotateLeft":
            return FaClockRotateLeft;
        case "fa6:FaClock":
            return FaClock;
        case "fa6:FaClone":
            return FaClone;
        case "fa6:FaClosedCaptioning":
            return FaClosedCaptioning;
        case "fa6:FaCloudArrowDown":
            return FaCloudArrowDown;
        case "fa6:FaCloudArrowUp":
            return FaCloudArrowUp;
        case "fa6:FaCloudBolt":
            return FaCloudBolt;
        case "fa6:FaCloudMeatball":
            return FaCloudMeatball;
        case "fa6:FaCloudMoonRain":
            return FaCloudMoonRain;
        case "fa6:FaCloudMoon":
            return FaCloudMoon;
        case "fa6:FaCloudRain":
            return FaCloudRain;
        case "fa6:FaCloudShowersHeavy":
            return FaCloudShowersHeavy;
        case "fa6:FaCloudShowersWater":
            return FaCloudShowersWater;
        case "fa6:FaCloudSunRain":
            return FaCloudSunRain;
        case "fa6:FaCloudSun":
            return FaCloudSun;
        case "fa6:FaCloud":
            return FaCloud;
        case "fa6:FaClover":
            return FaClover;
        case "fa6:FaCodeBranch":
            return FaCodeBranch;
        case "fa6:FaCodeCommit":
            return FaCodeCommit;
        case "fa6:FaCodeCompare":
            return FaCodeCompare;
        case "fa6:FaCodeFork":
            return FaCodeFork;
        case "fa6:FaCodeMerge":
            return FaCodeMerge;
        case "fa6:FaCodePullRequest":
            return FaCodePullRequest;
        case "fa6:FaCode":
            return FaCode;
        case "fa6:FaCoins":
            return FaCoins;
        case "fa6:FaColonSign":
            return FaColonSign;
        case "fa6:FaCommentDollar":
            return FaCommentDollar;
        case "fa6:FaCommentDots":
            return FaCommentDots;
        case "fa6:FaCommentMedical":
            return FaCommentMedical;
        case "fa6:FaCommentSlash":
            return FaCommentSlash;
        case "fa6:FaCommentSms":
            return FaCommentSms;
        case "fa6:FaComment":
            return FaComment;
        case "fa6:FaCommentsDollar":
            return FaCommentsDollar;
        case "fa6:FaComments":
            return FaComments;
        case "fa6:FaCompactDisc":
            return FaCompactDisc;
        case "fa6:FaCompassDrafting":
            return FaCompassDrafting;
        case "fa6:FaCompass":
            return FaCompass;
        case "fa6:FaCompress":
            return FaCompress;
        case "fa6:FaComputerMouse":
            return FaComputerMouse;
        case "fa6:FaComputer":
            return FaComputer;
        case "fa6:FaCookieBite":
            return FaCookieBite;
        case "fa6:FaCookie":
            return FaCookie;
        case "fa6:FaCopy":
            return FaCopy;
        case "fa6:FaCopyright":
            return FaCopyright;
        case "fa6:FaCouch":
            return FaCouch;
        case "fa6:FaCow":
            return FaCow;
        case "fa6:FaCreditCard":
            return FaCreditCard;
        case "fa6:FaCropSimple":
            return FaCropSimple;
        case "fa6:FaCrop":
            return FaCrop;
        case "fa6:FaCross":
            return FaCross;
        case "fa6:FaCrosshairs":
            return FaCrosshairs;
        case "fa6:FaCrow":
            return FaCrow;
        case "fa6:FaCrown":
            return FaCrown;
        case "fa6:FaCrutch":
            return FaCrutch;
        case "fa6:FaCruzeiroSign":
            return FaCruzeiroSign;
        case "fa6:FaCube":
            return FaCube;
        case "fa6:FaCubesStacked":
            return FaCubesStacked;
        case "fa6:FaCubes":
            return FaCubes;
        case "fa6:FaD":
            return FaD;
        case "fa6:FaDatabase":
            return FaDatabase;
        case "fa6:FaDeleteLeft":
            return FaDeleteLeft;
        case "fa6:FaDemocrat":
            return FaDemocrat;
        case "fa6:FaDesktop":
            return FaDesktop;
        case "fa6:FaDharmachakra":
            return FaDharmachakra;
        case "fa6:FaDiagramNext":
            return FaDiagramNext;
        case "fa6:FaDiagramPredecessor":
            return FaDiagramPredecessor;
        case "fa6:FaDiagramProject":
            return FaDiagramProject;
        case "fa6:FaDiagramSuccessor":
            return FaDiagramSuccessor;
        case "fa6:FaDiamondTurnRight":
            return FaDiamondTurnRight;
        case "fa6:FaDiamond":
            return FaDiamond;
        case "fa6:FaDiceD20":
            return FaDiceD20;
        case "fa6:FaDiceD6":
            return FaDiceD6;
        case "fa6:FaDiceFive":
            return FaDiceFive;
        case "fa6:FaDiceFour":
            return FaDiceFour;
        case "fa6:FaDiceOne":
            return FaDiceOne;
        case "fa6:FaDiceSix":
            return FaDiceSix;
        case "fa6:FaDiceThree":
            return FaDiceThree;
        case "fa6:FaDiceTwo":
            return FaDiceTwo;
        case "fa6:FaDice":
            return FaDice;
        case "fa6:FaDisease":
            return FaDisease;
        case "fa6:FaDisplay":
            return FaDisplay;
        case "fa6:FaDivide":
            return FaDivide;
        case "fa6:FaDna":
            return FaDna;
        case "fa6:FaDog":
            return FaDog;
        case "fa6:FaDollarSign":
            return FaDollarSign;
        case "fa6:FaDolly":
            return FaDolly;
        case "fa6:FaDongSign":
            return FaDongSign;
        case "fa6:FaDoorClosed":
            return FaDoorClosed;
        case "fa6:FaDoorOpen":
            return FaDoorOpen;
        case "fa6:FaDove":
            return FaDove;
        case "fa6:FaDownLeftAndUpRightToCenter":
            return FaDownLeftAndUpRightToCenter;
        case "fa6:FaDownLong":
            return FaDownLong;
        case "fa6:FaDownload":
            return FaDownload;
        case "fa6:FaDragon":
            return FaDragon;
        case "fa6:FaDrawPolygon":
            return FaDrawPolygon;
        case "fa6:FaDropletSlash":
            return FaDropletSlash;
        case "fa6:FaDroplet":
            return FaDroplet;
        case "fa6:FaDrumSteelpan":
            return FaDrumSteelpan;
        case "fa6:FaDrum":
            return FaDrum;
        case "fa6:FaDrumstickBite":
            return FaDrumstickBite;
        case "fa6:FaDumbbell":
            return FaDumbbell;
        case "fa6:FaDumpsterFire":
            return FaDumpsterFire;
        case "fa6:FaDumpster":
            return FaDumpster;
        case "fa6:FaDungeon":
            return FaDungeon;
        case "fa6:FaE":
            return FaE;
        case "fa6:FaEarDeaf":
            return FaEarDeaf;
        case "fa6:FaEarListen":
            return FaEarListen;
        case "fa6:FaEarthAfrica":
            return FaEarthAfrica;
        case "fa6:FaEarthAmericas":
            return FaEarthAmericas;
        case "fa6:FaEarthAsia":
            return FaEarthAsia;
        case "fa6:FaEarthEurope":
            return FaEarthEurope;
        case "fa6:FaEarthOceania":
            return FaEarthOceania;
        case "fa6:FaEgg":
            return FaEgg;
        case "fa6:FaEject":
            return FaEject;
        case "fa6:FaElevator":
            return FaElevator;
        case "fa6:FaEllipsisVertical":
            return FaEllipsisVertical;
        case "fa6:FaEllipsis":
            return FaEllipsis;
        case "fa6:FaEnvelopeCircleCheck":
            return FaEnvelopeCircleCheck;
        case "fa6:FaEnvelopeOpenText":
            return FaEnvelopeOpenText;
        case "fa6:FaEnvelopeOpen":
            return FaEnvelopeOpen;
        case "fa6:FaEnvelope":
            return FaEnvelope;
        case "fa6:FaEnvelopesBulk":
            return FaEnvelopesBulk;
        case "fa6:FaEquals":
            return FaEquals;
        case "fa6:FaEraser":
            return FaEraser;
        case "fa6:FaEthernet":
            return FaEthernet;
        case "fa6:FaEuroSign":
            return FaEuroSign;
        case "fa6:FaExclamation":
            return FaExclamation;
        case "fa6:FaExpand":
            return FaExpand;
        case "fa6:FaExplosion":
            return FaExplosion;
        case "fa6:FaEyeDropper":
            return FaEyeDropper;
        case "fa6:FaEyeLowVision":
            return FaEyeLowVision;
        case "fa6:FaEyeSlash":
            return FaEyeSlash;
        case "fa6:FaEye":
            return FaEye;
        case "fa6:FaF":
            return FaF;
        case "fa6:FaFaceAngry":
            return FaFaceAngry;
        case "fa6:FaFaceDizzy":
            return FaFaceDizzy;
        case "fa6:FaFaceFlushed":
            return FaFaceFlushed;
        case "fa6:FaFaceFrownOpen":
            return FaFaceFrownOpen;
        case "fa6:FaFaceFrown":
            return FaFaceFrown;
        case "fa6:FaFaceGrimace":
            return FaFaceGrimace;
        case "fa6:FaFaceGrinBeamSweat":
            return FaFaceGrinBeamSweat;
        case "fa6:FaFaceGrinBeam":
            return FaFaceGrinBeam;
        case "fa6:FaFaceGrinHearts":
            return FaFaceGrinHearts;
        case "fa6:FaFaceGrinSquintTears":
            return FaFaceGrinSquintTears;
        case "fa6:FaFaceGrinSquint":
            return FaFaceGrinSquint;
        case "fa6:FaFaceGrinStars":
            return FaFaceGrinStars;
        case "fa6:FaFaceGrinTears":
            return FaFaceGrinTears;
        case "fa6:FaFaceGrinTongueSquint":
            return FaFaceGrinTongueSquint;
        case "fa6:FaFaceGrinTongueWink":
            return FaFaceGrinTongueWink;
        case "fa6:FaFaceGrinTongue":
            return FaFaceGrinTongue;
        case "fa6:FaFaceGrinWide":
            return FaFaceGrinWide;
        case "fa6:FaFaceGrinWink":
            return FaFaceGrinWink;
        case "fa6:FaFaceGrin":
            return FaFaceGrin;
        case "fa6:FaFaceKissBeam":
            return FaFaceKissBeam;
        case "fa6:FaFaceKissWinkHeart":
            return FaFaceKissWinkHeart;
        case "fa6:FaFaceKiss":
            return FaFaceKiss;
        case "fa6:FaFaceLaughBeam":
            return FaFaceLaughBeam;
        case "fa6:FaFaceLaughSquint":
            return FaFaceLaughSquint;
        case "fa6:FaFaceLaughWink":
            return FaFaceLaughWink;
        case "fa6:FaFaceLaugh":
            return FaFaceLaugh;
        case "fa6:FaFaceMehBlank":
            return FaFaceMehBlank;
        case "fa6:FaFaceMeh":
            return FaFaceMeh;
        case "fa6:FaFaceRollingEyes":
            return FaFaceRollingEyes;
        case "fa6:FaFaceSadCry":
            return FaFaceSadCry;
        case "fa6:FaFaceSadTear":
            return FaFaceSadTear;
        case "fa6:FaFaceSmileBeam":
            return FaFaceSmileBeam;
        case "fa6:FaFaceSmileWink":
            return FaFaceSmileWink;
        case "fa6:FaFaceSmile":
            return FaFaceSmile;
        case "fa6:FaFaceSurprise":
            return FaFaceSurprise;
        case "fa6:FaFaceTired":
            return FaFaceTired;
        case "fa6:FaFan":
            return FaFan;
        case "fa6:FaFaucetDrip":
            return FaFaucetDrip;
        case "fa6:FaFaucet":
            return FaFaucet;
        case "fa6:FaFax":
            return FaFax;
        case "fa6:FaFeatherPointed":
            return FaFeatherPointed;
        case "fa6:FaFeather":
            return FaFeather;
        case "fa6:FaFerry":
            return FaFerry;
        case "fa6:FaFileArrowDown":
            return FaFileArrowDown;
        case "fa6:FaFileArrowUp":
            return FaFileArrowUp;
        case "fa6:FaFileAudio":
            return FaFileAudio;
        case "fa6:FaFileCircleCheck":
            return FaFileCircleCheck;
        case "fa6:FaFileCircleExclamation":
            return FaFileCircleExclamation;
        case "fa6:FaFileCircleMinus":
            return FaFileCircleMinus;
        case "fa6:FaFileCirclePlus":
            return FaFileCirclePlus;
        case "fa6:FaFileCircleQuestion":
            return FaFileCircleQuestion;
        case "fa6:FaFileCircleXmark":
            return FaFileCircleXmark;
    }
}
