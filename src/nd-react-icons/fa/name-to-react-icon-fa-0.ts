import type {IconType} from "react-icons";

import {
    Fa500Px,
    FaAccessibleIcon,
    FaAccusoft,
    FaAcquisitionsIncorporated,
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
    FaBehanceSquare,
    FaBehance,
    FaBimobject,
    FaBitbucket,
    FaBitcoin,
    FaBity,
    FaBlackTie,
    FaBlackberry,
    FaBloggerB,
    FaBlogger,
    FaBluetoothB,
    FaBluetooth,
    FaBootstrap,
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
    FaDashcube,
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
    FaDribbbleSquare,
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
    FaFacebookSquare,
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
    FaFly,
    FaFontAwesomeAlt,
    FaFontAwesomeFlag,
    FaFontAwesomeLogoFull,
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
    FaGitSquare,
    FaGit,
    FaGithubAlt,
    FaGithubSquare,
    FaGithub,
    FaGitkraken,
    FaGitlab,
    FaGitter,
    FaGlideG,
    FaGlide,
    FaGofore,
    FaGoodreadsG,
    FaGoodreads,
    FaGoogleDrive,
    FaGooglePay,
    FaGooglePlay,
    FaGooglePlusG,
    FaGooglePlusSquare,
    FaGooglePlus,
    FaGoogleWallet,
    FaGoogle,
    FaGratipay,
    FaGrav,
    FaGripfire,
    FaGrunt,
    FaGuilded,
    FaGulp,
    FaHackerNewsSquare,
    FaHackerNews,
    FaHackerrank,
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
    FaInnosoft,
    FaInstagramSquare,
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
    FaJsSquare,
    FaJs,
    FaJsfiddle,
    FaKaggle,
    FaKeybase,
    FaKeycdn,
    FaKickstarterK,
    FaKickstarter,
    FaKorvue,
    FaLaravel,
    FaLastfmSquare,
    FaLastfm,
    FaLeanpub,
    FaLess,
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
    FaMediumM,
    FaMedium,
    FaMedrt,
    FaMeetup,
    FaMegaport,
    FaMendeley,
    FaMicroblog,
    FaMicrosoft,
    FaMix,
    FaMixcloud,
    FaMixer,
    FaMizuni,
    FaModx,
    FaMonero,
    FaNapster,
    FaNeos,
    FaNimblr,
    FaNodeJs,
    FaNode,
    FaNpm,
    FaNs8,
    FaNutritionix,
    FaOctopusDeploy,
    FaOdnoklassnikiSquare,
    FaOdnoklassniki,
    FaOldRepublic,
    FaOpencart,
    FaOpenid,
    FaOpera,
    FaOptinMonster,
    FaOrcid,
    FaOsi,
    FaPage4,
    FaPagelines,
    FaPalfed,
    FaPatreon,
    FaPaypal,
    FaPennyArcade,
    FaPerbyte,
    FaPeriscope,
    FaPhabricator,
    FaPhoenixFramework,
    FaPhoenixSquadron,
    FaPhp,
    FaPiedPiperAlt,
    FaPiedPiperHat,
    FaPiedPiperPp,
    FaPiedPiperSquare,
    FaPiedPiper,
    FaPinterestP,
    FaPinterestSquare,
    FaPinterest,
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
    FaRedditSquare,
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
    FaScribd,
    FaSearchengin,
    FaSellcast,
    FaSellsy,
    FaServicestack,
    FaShirtsinbulk,
    FaShopify,
    FaShopware,
    FaSimplybuilt,
    FaSistrix,
    FaSith,
    FaSketch,
    FaSkyatlas,
    FaSkype,
    FaSlackHash,
    FaSlack,
    FaSlideshare,
    FaSnapchatGhost,
    FaSnapchatSquare,
    FaSnapchat,
    FaSoundcloud,
    FaSourcetree,
    FaSpeakap,
    FaSpeakerDeck,
    FaSpotify,
    FaSquarespace,
    FaStackExchange,
    FaStackOverflow,
    FaStackpath,
    FaStaylinked,
    FaSteamSquare,
    FaSteamSymbol,
    FaSteam,
    FaStickerMule,
    FaStrava,
    FaStripeS,
    FaStripe,
    FaStudiovinari,
    FaStumbleuponCircle,
    FaStumbleupon,
    FaSuperpowers,
    FaSupple,
    FaSuse,
    FaSwift,
    FaSymfony,
    FaTeamspeak,
    FaTelegramPlane,
    FaTelegram,
    FaTencentWeibo,
    FaTheRedYeti,
    FaThemeco,
    FaThemeisle,
    FaThinkPeaks,
    FaTiktok,
    FaTradeFederation,
    FaTrello,
    FaTripadvisor,
    FaTumblrSquare,
    FaTumblr,
    FaTwitch,
    FaTwitterSquare,
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
    FaUsb,
    FaUsps,
    FaUssunnah,
    FaVaadin,
    FaViacoin,
    FaViadeoSquare,
    FaViadeo,
    FaViber,
    FaVimeoSquare,
    FaVimeoV,
    FaVimeo,
    FaVine,
    FaVk,
    FaVnv,
    FaVuejs,
    FaWatchmanMonitoring,
    FaWaze,
    FaWeebly,
    FaWeibo,
    FaWeixin,
    FaWhatsappSquare,
    FaWhatsapp,
    FaWhmcs,
    FaWikipediaW,
    FaWindows,
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
    FaXbox,
    FaXingSquare,
    FaXing,
    FaYCombinator,
    FaYahoo,
    FaYammer,
    FaYandexInternational,
    FaYandex,
    FaYarn,
    FaYelp,
    FaYoast,
    FaYoutubeSquare,
    FaYoutube,
    FaZhihu,
    FaAd,
    FaAddressBook,
    FaAddressCard,
    FaAdjust,
    FaAirFreshener,
    FaAlignCenter,
    FaAlignJustify,
    FaAlignLeft,
    FaAlignRight,
    FaAllergies,
    FaAmbulance,
    FaAmericanSignLanguageInterpreting,
    FaAnchor,
    FaAngleDoubleDown,
    FaAngleDoubleLeft,
    FaAngleDoubleRight,
    FaAngleDoubleUp,
    FaAngleDown,
    FaAngleLeft,
    FaAngleRight,
    FaAngleUp,
    FaAngry,
    FaAnkh,
    FaAppleAlt,
    FaArchive,
    FaArchway,
    FaArrowAltCircleDown,
    FaArrowAltCircleLeft,
    FaArrowAltCircleRight,
    FaArrowAltCircleUp,
    FaArrowCircleDown,
    FaArrowCircleLeft,
    FaArrowCircleRight,
    FaArrowCircleUp,
    FaArrowDown,
    FaArrowLeft,
    FaArrowRight,
    FaArrowUp,
    FaArrowsAltH,
    FaArrowsAltV,
    FaArrowsAlt,
    FaAssistiveListeningSystems,
    FaAsterisk,
    FaAt,
    FaAtlas,
    FaAtom,
    FaAudioDescription,
    FaAward,
    FaBabyCarriage,
    FaBaby,
    FaBackspace,
    FaBackward,
    FaBacon,
    FaBacteria,
    FaBacterium,
    FaBahai,
    FaBalanceScaleLeft,
    FaBalanceScaleRight,
    FaBalanceScale,
    FaBan,
    FaBandAid,
    FaBarcode,
    FaBars,
    FaBaseballBall,
    FaBasketballBall,
    FaBath,
    FaBatteryEmpty,
    FaBatteryFull,
    FaBatteryHalf,
    FaBatteryQuarter,
    FaBatteryThreeQuarters,
    FaBed,
    FaBeer,
    FaBellSlash,
    FaBell,
    FaBezierCurve,
    FaBible,
    FaBicycle,
    FaBiking,
    FaBinoculars,
    FaBiohazard,
    FaBirthdayCake,
    FaBlenderPhone,
    FaBlender,
    FaBlind,
    FaBlog,
    FaBold,
    FaBolt,
    FaBomb,
    FaBone,
    FaBong,
    FaBookDead,
    FaBookMedical,
    FaBookOpen,
    FaBookReader,
    FaBook,
    FaBookmark,
    FaBorderAll,
    FaBorderNone,
    FaBorderStyle,
    FaBowlingBall,
    FaBoxOpen,
    FaBoxTissue,
    FaBox,
    FaBoxes,
    FaBraille,
    FaBrain,
    FaBreadSlice,
    FaBriefcaseMedical,
    FaBriefcase,
    FaBroadcastTower,
    FaBroom,
    FaBrush,
    FaBug,
    FaBuilding,
    FaBullhorn,
    FaBullseye,
    FaBurn,
    FaBusAlt,
    FaBus,
    FaBusinessTime,
    FaCalculator,
    FaCalendarAlt,
    FaCalendarCheck,
    FaCalendarDay,
    FaCalendarMinus,
    FaCalendarPlus,
    FaCalendarTimes,
    FaCalendarWeek,
    FaCalendar,
    FaCameraRetro,
    FaCamera,
    FaCampground,
    FaCandyCane,
    FaCannabis,
    FaCapsules,
    FaCarAlt,
    FaCarBattery,
    FaCarCrash,
    FaCarSide,
    FaCar,
    FaCaravan,
    FaCaretDown,
    FaCaretLeft,
    FaCaretRight,
    FaCaretSquareDown,
    FaCaretSquareLeft,
    FaCaretSquareRight,
    FaCaretSquareUp,
    FaCaretUp,
    FaCarrot,
    FaCartArrowDown,
    FaCartPlus,
    FaCashRegister,
    FaCat,
    FaCertificate,
    FaChair,
    FaChalkboardTeacher,
    FaChalkboard,
    FaChargingStation,
    FaChartArea,
    FaChartBar,
    FaChartLine,
    FaChartPie,
    FaCheckCircle,
    FaCheckDouble,
    FaCheckSquare,
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
    FaChevronCircleDown,
    FaChevronCircleLeft,
    FaChevronCircleRight,
    FaChevronCircleUp,
    FaChevronDown,
    FaChevronLeft,
    FaChevronRight,
    FaChevronUp,
    FaChild,
    FaChurch,
    FaCircleNotch,
    FaCircle,
    FaCity,
    FaClinicMedical,
    FaClipboardCheck,
    FaClipboardList,
    FaClipboard,
    FaClock,
    FaClone,
    FaClosedCaptioning,
    FaCloudDownloadAlt,
    FaCloudMeatball,
    FaCloudMoonRain,
    FaCloudMoon,
    FaCloudRain,
    FaCloudShowersHeavy,
    FaCloudSunRain,
    FaCloudSun,
    FaCloudUploadAlt,
    FaCloud,
    FaCocktail,
    FaCodeBranch,
    FaCode,
    FaCoffee,
    FaCog,
    FaCogs,
    FaCoins,
    FaColumns,
    FaCommentAlt,
    FaCommentDollar,
    FaCommentDots,
    FaCommentMedical,
    FaCommentSlash,
    FaComment,
    FaCommentsDollar,
    FaComments,
    FaCompactDisc,
    FaCompass,
    FaCompressAlt,
    FaCompressArrowsAlt,
    FaCompress,
    FaConciergeBell,
    FaCookieBite,
    FaCookie,
    FaCopy,
    FaCopyright,
    FaCouch,
    FaCreditCard,
    FaCropAlt,
    FaCrop,
    FaCross,
    FaCrosshairs,
    FaCrow,
    FaCrown,
    FaCrutch,
    FaCube,
    FaCubes,
    FaCut,
    FaDatabase,
    FaDeaf,
    FaDemocrat,
    FaDesktop,
    FaDharmachakra,
    FaDiagnoses,
    FaDiceD20,
    FaDiceD6,
    FaDiceFive,
    FaDiceFour,
    FaDiceOne,
    FaDiceSix,
    FaDiceThree,
    FaDiceTwo,
    FaDice,
    FaDigitalTachograph,
    FaDirections,
    FaDisease,
    FaDivide,
    FaDizzy,
    FaDna,
    FaDog,
    FaDollarSign,
    FaDollyFlatbed,
    FaDolly,
    FaDonate,
    FaDoorClosed,
    FaDoorOpen,
    FaDotCircle,
    FaDove,
    FaDownload,
    FaDraftingCompass,
    FaDragon,
    FaDrawPolygon,
    FaDrumSteelpan,
    FaDrum,
    FaDrumstickBite,
    FaDumbbell,
    FaDumpsterFire,
    FaDumpster,
    FaDungeon,
    FaEdit,
    FaEgg,
    FaEject,
    FaEllipsisH,
    FaEllipsisV,
    FaEnvelopeOpenText,
    FaEnvelopeOpen,
    FaEnvelopeSquare,
    FaEnvelope,
    FaEquals,
    FaEraser,
    FaEthernet,
    FaEuroSign,
    FaExchangeAlt,
    FaExclamationCircle,
    FaExclamationTriangle,
    FaExclamation,
    FaExpandAlt,
    FaExpandArrowsAlt,
    FaExpand,
    FaExternalLinkAlt,
    FaExternalLinkSquareAlt,
    FaEyeDropper,
    FaEyeSlash,
    FaEye,
    FaFan,
    FaFastBackward,
    FaFastForward,
    FaFaucet,
    FaFax,
    FaFeatherAlt,
    FaFeather,
    FaFemale,
    FaFighterJet,
    FaFileAlt,
    FaFileArchive,
    FaFileAudio,
    FaFileCode,
    FaFileContract,
    FaFileCsv,
    FaFileDownload,
    FaFileExcel,
    FaFileExport,
    FaFileImage,
    FaFileImport,
    FaFileInvoiceDollar,
    FaFileInvoice,
    FaFileMedicalAlt,
    FaFileMedical,
    FaFilePdf,
    FaFilePowerpoint,
    FaFilePrescription,
    FaFileSignature,
    FaFileUpload,
    FaFileVideo,
    FaFileWord,
    FaFile,
    FaFillDrip,
    FaFill,
    FaFilm,
    FaFilter,
    FaFingerprint,
    FaFireAlt,
    FaFireExtinguisher,
    FaFire,
    FaFirstAid,
    FaFish,
    FaFistRaised,
    FaFlagCheckered,
    FaFlagUsa,
    FaFlag,
    FaFlask,
    FaFlushed,
    FaFolderMinus,
    FaFolderOpen,
    FaFolderPlus,
    FaFolder,
    FaFont,
    FaFootballBall,
    FaForward,
    FaFrog,
    FaFrownOpen,
    FaFrown,
    FaFunnelDollar,
    FaFutbol,
    FaGamepad,
    FaGasPump,
    FaGavel,
    FaGem,
    FaGenderless,
    FaGhost,
    FaGift,
    FaGifts,
    FaGlassCheers,
    FaGlassMartiniAlt,
    FaGlassMartini,
    FaGlassWhiskey,
    FaGlasses,
    FaGlobeAfrica,
    FaGlobeAmericas,
    FaGlobeAsia,
    FaGlobeEurope,
    FaGlobe,
    FaGolfBall,
    FaGopuram,
    FaGraduationCap,
    FaGreaterThanEqual,
    FaGreaterThan,
    FaGrimace,
    FaGrinAlt,
    FaGrinBeamSweat,
    FaGrinBeam,
    FaGrinHearts,
    FaGrinSquintTears,
    FaGrinSquint,
    FaGrinStars,
    FaGrinTears,
    FaGrinTongueSquint,
    FaGrinTongueWink,
    FaGrinTongue,
    FaGrinWink,
    FaGrin,
    FaGripHorizontal,
    FaGripLinesVertical,
    FaGripLines,
    FaGripVertical,
    FaGuitar,
    FaHSquare,
    FaHamburger,
    FaHammer,
    FaHamsa,
    FaHandHoldingHeart,
    FaHandHoldingMedical,
    FaHandHoldingUsd,
    FaHandHoldingWater,
    FaHandHolding,
    FaHandLizard,
    FaHandMiddleFinger,
    FaHandPaper,
    FaHandPeace,
    FaHandPointDown,
    FaHandPointLeft,
    FaHandPointRight,
    FaHandPointUp,
    FaHandPointer,
    FaHandRock,
    FaHandScissors,
    FaHandSparkles,
    FaHandSpock,
    FaHandsHelping,
    FaHandsWash,
    FaHands,
    FaHandshakeAltSlash,
    FaHandshakeSlash,
    FaHandshake,
    FaHanukiah,
    FaHardHat,
    FaHashtag,
    FaHatCowboySide,
    FaHatCowboy,
    FaHatWizard,
    FaHdd,
    FaHeadSideCoughSlash,
    FaHeadSideCough,
    FaHeadSideMask,
    FaHeadSideVirus,
    FaHeading,
    FaHeadphonesAlt,
    FaHeadphones,
    FaHeadset,
    FaHeartBroken,
    FaHeart,
    FaHeartbeat,
    FaHelicopter,
    FaHighlighter,
    FaHiking,
    FaHippo,
    FaHistory,
    FaHockeyPuck,
    FaHollyBerry,
    FaHome,
    FaHorseHead,
    FaHorse,
    FaHospitalAlt,
    FaHospitalSymbol,
    FaHospitalUser,
    FaHospital,
    FaHotTub,
    FaHotdog,
    FaHotel,
    FaHourglassEnd,
    FaHourglassHalf,
    FaHourglassStart,
    FaHourglass,
    FaHouseDamage,
    FaHouseUser,
    FaHryvnia,
    FaICursor,
    FaIceCream,
    FaIcicles,
    FaIcons,
    FaIdBadge,
    FaIdCardAlt,
    FaIdCard,
    FaIgloo,
    FaImage,
    FaImages,
    FaInbox,
    FaIndent,
    FaIndustry,
    FaInfinity,
    FaInfoCircle,
    FaInfo,
    FaItalic,
    FaJedi,
    FaJoint,
    FaJournalWhills,
    FaKaaba,
    FaKey,
    FaKeyboard,
    FaKhanda,
    FaKissBeam,
    FaKissWinkHeart,
    FaKiss,
    FaKiwiBird,
    FaLandmark,
    FaLanguage,
    FaLaptopCode,
    FaLaptopHouse,
    FaLaptopMedical,
    FaLaptop,
    FaLaughBeam,
    FaLaughSquint,
    FaLaughWink,
    FaLaugh,
    FaLayerGroup,
    FaLeaf,
    FaLemon,
    FaLessThanEqual,
    FaLessThan,
    FaLevelDownAlt,
    FaLevelUpAlt,
    FaLifeRing,
    FaLightbulb,
    FaLink,
    FaLiraSign,
    FaListAlt,
    FaListOl,
    FaListUl,
    FaList,
    FaLocationArrow,
    FaLockOpen,
    FaLock,
    FaLongArrowAltDown,
    FaLongArrowAltLeft,
    FaLongArrowAltRight,
} from "react-icons/fa"

export function nameToReactIcon_fa_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "fa:Fa500Px":
            return Fa500Px;
        case "fa:FaAccessibleIcon":
            return FaAccessibleIcon;
        case "fa:FaAccusoft":
            return FaAccusoft;
        case "fa:FaAcquisitionsIncorporated":
            return FaAcquisitionsIncorporated;
        case "fa:FaAdn":
            return FaAdn;
        case "fa:FaAdversal":
            return FaAdversal;
        case "fa:FaAffiliatetheme":
            return FaAffiliatetheme;
        case "fa:FaAirbnb":
            return FaAirbnb;
        case "fa:FaAlgolia":
            return FaAlgolia;
        case "fa:FaAlipay":
            return FaAlipay;
        case "fa:FaAmazonPay":
            return FaAmazonPay;
        case "fa:FaAmazon":
            return FaAmazon;
        case "fa:FaAmilia":
            return FaAmilia;
        case "fa:FaAndroid":
            return FaAndroid;
        case "fa:FaAngellist":
            return FaAngellist;
        case "fa:FaAngrycreative":
            return FaAngrycreative;
        case "fa:FaAngular":
            return FaAngular;
        case "fa:FaAppStoreIos":
            return FaAppStoreIos;
        case "fa:FaAppStore":
            return FaAppStore;
        case "fa:FaApper":
            return FaApper;
        case "fa:FaApplePay":
            return FaApplePay;
        case "fa:FaApple":
            return FaApple;
        case "fa:FaArtstation":
            return FaArtstation;
        case "fa:FaAsymmetrik":
            return FaAsymmetrik;
        case "fa:FaAtlassian":
            return FaAtlassian;
        case "fa:FaAudible":
            return FaAudible;
        case "fa:FaAutoprefixer":
            return FaAutoprefixer;
        case "fa:FaAvianex":
            return FaAvianex;
        case "fa:FaAviato":
            return FaAviato;
        case "fa:FaAws":
            return FaAws;
        case "fa:FaBandcamp":
            return FaBandcamp;
        case "fa:FaBattleNet":
            return FaBattleNet;
        case "fa:FaBehanceSquare":
            return FaBehanceSquare;
        case "fa:FaBehance":
            return FaBehance;
        case "fa:FaBimobject":
            return FaBimobject;
        case "fa:FaBitbucket":
            return FaBitbucket;
        case "fa:FaBitcoin":
            return FaBitcoin;
        case "fa:FaBity":
            return FaBity;
        case "fa:FaBlackTie":
            return FaBlackTie;
        case "fa:FaBlackberry":
            return FaBlackberry;
        case "fa:FaBloggerB":
            return FaBloggerB;
        case "fa:FaBlogger":
            return FaBlogger;
        case "fa:FaBluetoothB":
            return FaBluetoothB;
        case "fa:FaBluetooth":
            return FaBluetooth;
        case "fa:FaBootstrap":
            return FaBootstrap;
        case "fa:FaBtc":
            return FaBtc;
        case "fa:FaBuffer":
            return FaBuffer;
        case "fa:FaBuromobelexperte":
            return FaBuromobelexperte;
        case "fa:FaBuyNLarge":
            return FaBuyNLarge;
        case "fa:FaBuysellads":
            return FaBuysellads;
        case "fa:FaCanadianMapleLeaf":
            return FaCanadianMapleLeaf;
        case "fa:FaCcAmazonPay":
            return FaCcAmazonPay;
        case "fa:FaCcAmex":
            return FaCcAmex;
        case "fa:FaCcApplePay":
            return FaCcApplePay;
        case "fa:FaCcDinersClub":
            return FaCcDinersClub;
        case "fa:FaCcDiscover":
            return FaCcDiscover;
        case "fa:FaCcJcb":
            return FaCcJcb;
        case "fa:FaCcMastercard":
            return FaCcMastercard;
        case "fa:FaCcPaypal":
            return FaCcPaypal;
        case "fa:FaCcStripe":
            return FaCcStripe;
        case "fa:FaCcVisa":
            return FaCcVisa;
        case "fa:FaCentercode":
            return FaCentercode;
        case "fa:FaCentos":
            return FaCentos;
        case "fa:FaChrome":
            return FaChrome;
        case "fa:FaChromecast":
            return FaChromecast;
        case "fa:FaCloudflare":
            return FaCloudflare;
        case "fa:FaCloudscale":
            return FaCloudscale;
        case "fa:FaCloudsmith":
            return FaCloudsmith;
        case "fa:FaCloudversify":
            return FaCloudversify;
        case "fa:FaCodepen":
            return FaCodepen;
        case "fa:FaCodiepie":
            return FaCodiepie;
        case "fa:FaConfluence":
            return FaConfluence;
        case "fa:FaConnectdevelop":
            return FaConnectdevelop;
        case "fa:FaContao":
            return FaContao;
        case "fa:FaCottonBureau":
            return FaCottonBureau;
        case "fa:FaCpanel":
            return FaCpanel;
        case "fa:FaCreativeCommonsBy":
            return FaCreativeCommonsBy;
        case "fa:FaCreativeCommonsNcEu":
            return FaCreativeCommonsNcEu;
        case "fa:FaCreativeCommonsNcJp":
            return FaCreativeCommonsNcJp;
        case "fa:FaCreativeCommonsNc":
            return FaCreativeCommonsNc;
        case "fa:FaCreativeCommonsNd":
            return FaCreativeCommonsNd;
        case "fa:FaCreativeCommonsPdAlt":
            return FaCreativeCommonsPdAlt;
        case "fa:FaCreativeCommonsPd":
            return FaCreativeCommonsPd;
        case "fa:FaCreativeCommonsRemix":
            return FaCreativeCommonsRemix;
        case "fa:FaCreativeCommonsSa":
            return FaCreativeCommonsSa;
        case "fa:FaCreativeCommonsSamplingPlus":
            return FaCreativeCommonsSamplingPlus;
        case "fa:FaCreativeCommonsSampling":
            return FaCreativeCommonsSampling;
        case "fa:FaCreativeCommonsShare":
            return FaCreativeCommonsShare;
        case "fa:FaCreativeCommonsZero":
            return FaCreativeCommonsZero;
        case "fa:FaCreativeCommons":
            return FaCreativeCommons;
        case "fa:FaCriticalRole":
            return FaCriticalRole;
        case "fa:FaCss3Alt":
            return FaCss3Alt;
        case "fa:FaCss3":
            return FaCss3;
        case "fa:FaCuttlefish":
            return FaCuttlefish;
        case "fa:FaDAndDBeyond":
            return FaDAndDBeyond;
        case "fa:FaDAndD":
            return FaDAndD;
        case "fa:FaDailymotion":
            return FaDailymotion;
        case "fa:FaDashcube":
            return FaDashcube;
        case "fa:FaDeezer":
            return FaDeezer;
        case "fa:FaDelicious":
            return FaDelicious;
        case "fa:FaDeploydog":
            return FaDeploydog;
        case "fa:FaDeskpro":
            return FaDeskpro;
        case "fa:FaDev":
            return FaDev;
        case "fa:FaDeviantart":
            return FaDeviantart;
        case "fa:FaDhl":
            return FaDhl;
        case "fa:FaDiaspora":
            return FaDiaspora;
        case "fa:FaDigg":
            return FaDigg;
        case "fa:FaDigitalOcean":
            return FaDigitalOcean;
        case "fa:FaDiscord":
            return FaDiscord;
        case "fa:FaDiscourse":
            return FaDiscourse;
        case "fa:FaDochub":
            return FaDochub;
        case "fa:FaDocker":
            return FaDocker;
        case "fa:FaDraft2Digital":
            return FaDraft2Digital;
        case "fa:FaDribbbleSquare":
            return FaDribbbleSquare;
        case "fa:FaDribbble":
            return FaDribbble;
        case "fa:FaDropbox":
            return FaDropbox;
        case "fa:FaDrupal":
            return FaDrupal;
        case "fa:FaDyalog":
            return FaDyalog;
        case "fa:FaEarlybirds":
            return FaEarlybirds;
        case "fa:FaEbay":
            return FaEbay;
        case "fa:FaEdgeLegacy":
            return FaEdgeLegacy;
        case "fa:FaEdge":
            return FaEdge;
        case "fa:FaElementor":
            return FaElementor;
        case "fa:FaEllo":
            return FaEllo;
        case "fa:FaEmber":
            return FaEmber;
        case "fa:FaEmpire":
            return FaEmpire;
        case "fa:FaEnvira":
            return FaEnvira;
        case "fa:FaErlang":
            return FaErlang;
        case "fa:FaEthereum":
            return FaEthereum;
        case "fa:FaEtsy":
            return FaEtsy;
        case "fa:FaEvernote":
            return FaEvernote;
        case "fa:FaExpeditedssl":
            return FaExpeditedssl;
        case "fa:FaFacebookF":
            return FaFacebookF;
        case "fa:FaFacebookMessenger":
            return FaFacebookMessenger;
        case "fa:FaFacebookSquare":
            return FaFacebookSquare;
        case "fa:FaFacebook":
            return FaFacebook;
        case "fa:FaFantasyFlightGames":
            return FaFantasyFlightGames;
        case "fa:FaFedex":
            return FaFedex;
        case "fa:FaFedora":
            return FaFedora;
        case "fa:FaFigma":
            return FaFigma;
        case "fa:FaFirefoxBrowser":
            return FaFirefoxBrowser;
        case "fa:FaFirefox":
            return FaFirefox;
        case "fa:FaFirstOrderAlt":
            return FaFirstOrderAlt;
        case "fa:FaFirstOrder":
            return FaFirstOrder;
        case "fa:FaFirstdraft":
            return FaFirstdraft;
        case "fa:FaFlickr":
            return FaFlickr;
        case "fa:FaFlipboard":
            return FaFlipboard;
        case "fa:FaFly":
            return FaFly;
        case "fa:FaFontAwesomeAlt":
            return FaFontAwesomeAlt;
        case "fa:FaFontAwesomeFlag":
            return FaFontAwesomeFlag;
        case "fa:FaFontAwesomeLogoFull":
            return FaFontAwesomeLogoFull;
        case "fa:FaFontAwesome":
            return FaFontAwesome;
        case "fa:FaFonticonsFi":
            return FaFonticonsFi;
        case "fa:FaFonticons":
            return FaFonticons;
        case "fa:FaFortAwesomeAlt":
            return FaFortAwesomeAlt;
        case "fa:FaFortAwesome":
            return FaFortAwesome;
        case "fa:FaForumbee":
            return FaForumbee;
        case "fa:FaFoursquare":
            return FaFoursquare;
        case "fa:FaFreeCodeCamp":
            return FaFreeCodeCamp;
        case "fa:FaFreebsd":
            return FaFreebsd;
        case "fa:FaFulcrum":
            return FaFulcrum;
        case "fa:FaGalacticRepublic":
            return FaGalacticRepublic;
        case "fa:FaGalacticSenate":
            return FaGalacticSenate;
        case "fa:FaGetPocket":
            return FaGetPocket;
        case "fa:FaGgCircle":
            return FaGgCircle;
        case "fa:FaGg":
            return FaGg;
        case "fa:FaGitAlt":
            return FaGitAlt;
        case "fa:FaGitSquare":
            return FaGitSquare;
        case "fa:FaGit":
            return FaGit;
        case "fa:FaGithubAlt":
            return FaGithubAlt;
        case "fa:FaGithubSquare":
            return FaGithubSquare;
        case "fa:FaGithub":
            return FaGithub;
        case "fa:FaGitkraken":
            return FaGitkraken;
        case "fa:FaGitlab":
            return FaGitlab;
        case "fa:FaGitter":
            return FaGitter;
        case "fa:FaGlideG":
            return FaGlideG;
        case "fa:FaGlide":
            return FaGlide;
        case "fa:FaGofore":
            return FaGofore;
        case "fa:FaGoodreadsG":
            return FaGoodreadsG;
        case "fa:FaGoodreads":
            return FaGoodreads;
        case "fa:FaGoogleDrive":
            return FaGoogleDrive;
        case "fa:FaGooglePay":
            return FaGooglePay;
        case "fa:FaGooglePlay":
            return FaGooglePlay;
        case "fa:FaGooglePlusG":
            return FaGooglePlusG;
        case "fa:FaGooglePlusSquare":
            return FaGooglePlusSquare;
        case "fa:FaGooglePlus":
            return FaGooglePlus;
        case "fa:FaGoogleWallet":
            return FaGoogleWallet;
        case "fa:FaGoogle":
            return FaGoogle;
        case "fa:FaGratipay":
            return FaGratipay;
        case "fa:FaGrav":
            return FaGrav;
        case "fa:FaGripfire":
            return FaGripfire;
        case "fa:FaGrunt":
            return FaGrunt;
        case "fa:FaGuilded":
            return FaGuilded;
        case "fa:FaGulp":
            return FaGulp;
        case "fa:FaHackerNewsSquare":
            return FaHackerNewsSquare;
        case "fa:FaHackerNews":
            return FaHackerNews;
        case "fa:FaHackerrank":
            return FaHackerrank;
        case "fa:FaHips":
            return FaHips;
        case "fa:FaHireAHelper":
            return FaHireAHelper;
        case "fa:FaHive":
            return FaHive;
        case "fa:FaHooli":
            return FaHooli;
        case "fa:FaHornbill":
            return FaHornbill;
        case "fa:FaHotjar":
            return FaHotjar;
        case "fa:FaHouzz":
            return FaHouzz;
        case "fa:FaHtml5":
            return FaHtml5;
        case "fa:FaHubspot":
            return FaHubspot;
        case "fa:FaIdeal":
            return FaIdeal;
        case "fa:FaImdb":
            return FaImdb;
        case "fa:FaInnosoft":
            return FaInnosoft;
        case "fa:FaInstagramSquare":
            return FaInstagramSquare;
        case "fa:FaInstagram":
            return FaInstagram;
        case "fa:FaInstalod":
            return FaInstalod;
        case "fa:FaIntercom":
            return FaIntercom;
        case "fa:FaInternetExplorer":
            return FaInternetExplorer;
        case "fa:FaInvision":
            return FaInvision;
        case "fa:FaIoxhost":
            return FaIoxhost;
        case "fa:FaItchIo":
            return FaItchIo;
        case "fa:FaItunesNote":
            return FaItunesNote;
        case "fa:FaItunes":
            return FaItunes;
        case "fa:FaJava":
            return FaJava;
        case "fa:FaJediOrder":
            return FaJediOrder;
        case "fa:FaJenkins":
            return FaJenkins;
        case "fa:FaJira":
            return FaJira;
        case "fa:FaJoget":
            return FaJoget;
        case "fa:FaJoomla":
            return FaJoomla;
        case "fa:FaJsSquare":
            return FaJsSquare;
        case "fa:FaJs":
            return FaJs;
        case "fa:FaJsfiddle":
            return FaJsfiddle;
        case "fa:FaKaggle":
            return FaKaggle;
        case "fa:FaKeybase":
            return FaKeybase;
        case "fa:FaKeycdn":
            return FaKeycdn;
        case "fa:FaKickstarterK":
            return FaKickstarterK;
        case "fa:FaKickstarter":
            return FaKickstarter;
        case "fa:FaKorvue":
            return FaKorvue;
        case "fa:FaLaravel":
            return FaLaravel;
        case "fa:FaLastfmSquare":
            return FaLastfmSquare;
        case "fa:FaLastfm":
            return FaLastfm;
        case "fa:FaLeanpub":
            return FaLeanpub;
        case "fa:FaLess":
            return FaLess;
        case "fa:FaLine":
            return FaLine;
        case "fa:FaLinkedinIn":
            return FaLinkedinIn;
        case "fa:FaLinkedin":
            return FaLinkedin;
        case "fa:FaLinode":
            return FaLinode;
        case "fa:FaLinux":
            return FaLinux;
        case "fa:FaLyft":
            return FaLyft;
        case "fa:FaMagento":
            return FaMagento;
        case "fa:FaMailchimp":
            return FaMailchimp;
        case "fa:FaMandalorian":
            return FaMandalorian;
        case "fa:FaMarkdown":
            return FaMarkdown;
        case "fa:FaMastodon":
            return FaMastodon;
        case "fa:FaMaxcdn":
            return FaMaxcdn;
        case "fa:FaMdb":
            return FaMdb;
        case "fa:FaMedapps":
            return FaMedapps;
        case "fa:FaMediumM":
            return FaMediumM;
        case "fa:FaMedium":
            return FaMedium;
        case "fa:FaMedrt":
            return FaMedrt;
        case "fa:FaMeetup":
            return FaMeetup;
        case "fa:FaMegaport":
            return FaMegaport;
        case "fa:FaMendeley":
            return FaMendeley;
        case "fa:FaMicroblog":
            return FaMicroblog;
        case "fa:FaMicrosoft":
            return FaMicrosoft;
        case "fa:FaMix":
            return FaMix;
        case "fa:FaMixcloud":
            return FaMixcloud;
        case "fa:FaMixer":
            return FaMixer;
        case "fa:FaMizuni":
            return FaMizuni;
        case "fa:FaModx":
            return FaModx;
        case "fa:FaMonero":
            return FaMonero;
        case "fa:FaNapster":
            return FaNapster;
        case "fa:FaNeos":
            return FaNeos;
        case "fa:FaNimblr":
            return FaNimblr;
        case "fa:FaNodeJs":
            return FaNodeJs;
        case "fa:FaNode":
            return FaNode;
        case "fa:FaNpm":
            return FaNpm;
        case "fa:FaNs8":
            return FaNs8;
        case "fa:FaNutritionix":
            return FaNutritionix;
        case "fa:FaOctopusDeploy":
            return FaOctopusDeploy;
        case "fa:FaOdnoklassnikiSquare":
            return FaOdnoklassnikiSquare;
        case "fa:FaOdnoklassniki":
            return FaOdnoklassniki;
        case "fa:FaOldRepublic":
            return FaOldRepublic;
        case "fa:FaOpencart":
            return FaOpencart;
        case "fa:FaOpenid":
            return FaOpenid;
        case "fa:FaOpera":
            return FaOpera;
        case "fa:FaOptinMonster":
            return FaOptinMonster;
        case "fa:FaOrcid":
            return FaOrcid;
        case "fa:FaOsi":
            return FaOsi;
        case "fa:FaPage4":
            return FaPage4;
        case "fa:FaPagelines":
            return FaPagelines;
        case "fa:FaPalfed":
            return FaPalfed;
        case "fa:FaPatreon":
            return FaPatreon;
        case "fa:FaPaypal":
            return FaPaypal;
        case "fa:FaPennyArcade":
            return FaPennyArcade;
        case "fa:FaPerbyte":
            return FaPerbyte;
        case "fa:FaPeriscope":
            return FaPeriscope;
        case "fa:FaPhabricator":
            return FaPhabricator;
        case "fa:FaPhoenixFramework":
            return FaPhoenixFramework;
        case "fa:FaPhoenixSquadron":
            return FaPhoenixSquadron;
        case "fa:FaPhp":
            return FaPhp;
        case "fa:FaPiedPiperAlt":
            return FaPiedPiperAlt;
        case "fa:FaPiedPiperHat":
            return FaPiedPiperHat;
        case "fa:FaPiedPiperPp":
            return FaPiedPiperPp;
        case "fa:FaPiedPiperSquare":
            return FaPiedPiperSquare;
        case "fa:FaPiedPiper":
            return FaPiedPiper;
        case "fa:FaPinterestP":
            return FaPinterestP;
        case "fa:FaPinterestSquare":
            return FaPinterestSquare;
        case "fa:FaPinterest":
            return FaPinterest;
        case "fa:FaPlaystation":
            return FaPlaystation;
        case "fa:FaProductHunt":
            return FaProductHunt;
        case "fa:FaPushed":
            return FaPushed;
        case "fa:FaPython":
            return FaPython;
        case "fa:FaQq":
            return FaQq;
        case "fa:FaQuinscape":
            return FaQuinscape;
        case "fa:FaQuora":
            return FaQuora;
        case "fa:FaRProject":
            return FaRProject;
        case "fa:FaRaspberryPi":
            return FaRaspberryPi;
        case "fa:FaRavelry":
            return FaRavelry;
        case "fa:FaReact":
            return FaReact;
        case "fa:FaReacteurope":
            return FaReacteurope;
        case "fa:FaReadme":
            return FaReadme;
        case "fa:FaRebel":
            return FaRebel;
        case "fa:FaRedRiver":
            return FaRedRiver;
        case "fa:FaRedditAlien":
            return FaRedditAlien;
        case "fa:FaRedditSquare":
            return FaRedditSquare;
        case "fa:FaReddit":
            return FaReddit;
        case "fa:FaRedhat":
            return FaRedhat;
        case "fa:FaRenren":
            return FaRenren;
        case "fa:FaReplyd":
            return FaReplyd;
        case "fa:FaResearchgate":
            return FaResearchgate;
        case "fa:FaResolving":
            return FaResolving;
        case "fa:FaRev":
            return FaRev;
        case "fa:FaRocketchat":
            return FaRocketchat;
        case "fa:FaRockrms":
            return FaRockrms;
        case "fa:FaRust":
            return FaRust;
        case "fa:FaSafari":
            return FaSafari;
        case "fa:FaSalesforce":
            return FaSalesforce;
        case "fa:FaSass":
            return FaSass;
        case "fa:FaSchlix":
            return FaSchlix;
        case "fa:FaScribd":
            return FaScribd;
        case "fa:FaSearchengin":
            return FaSearchengin;
        case "fa:FaSellcast":
            return FaSellcast;
        case "fa:FaSellsy":
            return FaSellsy;
        case "fa:FaServicestack":
            return FaServicestack;
        case "fa:FaShirtsinbulk":
            return FaShirtsinbulk;
        case "fa:FaShopify":
            return FaShopify;
        case "fa:FaShopware":
            return FaShopware;
        case "fa:FaSimplybuilt":
            return FaSimplybuilt;
        case "fa:FaSistrix":
            return FaSistrix;
        case "fa:FaSith":
            return FaSith;
        case "fa:FaSketch":
            return FaSketch;
        case "fa:FaSkyatlas":
            return FaSkyatlas;
        case "fa:FaSkype":
            return FaSkype;
        case "fa:FaSlackHash":
            return FaSlackHash;
        case "fa:FaSlack":
            return FaSlack;
        case "fa:FaSlideshare":
            return FaSlideshare;
        case "fa:FaSnapchatGhost":
            return FaSnapchatGhost;
        case "fa:FaSnapchatSquare":
            return FaSnapchatSquare;
        case "fa:FaSnapchat":
            return FaSnapchat;
        case "fa:FaSoundcloud":
            return FaSoundcloud;
        case "fa:FaSourcetree":
            return FaSourcetree;
        case "fa:FaSpeakap":
            return FaSpeakap;
        case "fa:FaSpeakerDeck":
            return FaSpeakerDeck;
        case "fa:FaSpotify":
            return FaSpotify;
        case "fa:FaSquarespace":
            return FaSquarespace;
        case "fa:FaStackExchange":
            return FaStackExchange;
        case "fa:FaStackOverflow":
            return FaStackOverflow;
        case "fa:FaStackpath":
            return FaStackpath;
        case "fa:FaStaylinked":
            return FaStaylinked;
        case "fa:FaSteamSquare":
            return FaSteamSquare;
        case "fa:FaSteamSymbol":
            return FaSteamSymbol;
        case "fa:FaSteam":
            return FaSteam;
        case "fa:FaStickerMule":
            return FaStickerMule;
        case "fa:FaStrava":
            return FaStrava;
        case "fa:FaStripeS":
            return FaStripeS;
        case "fa:FaStripe":
            return FaStripe;
        case "fa:FaStudiovinari":
            return FaStudiovinari;
        case "fa:FaStumbleuponCircle":
            return FaStumbleuponCircle;
        case "fa:FaStumbleupon":
            return FaStumbleupon;
        case "fa:FaSuperpowers":
            return FaSuperpowers;
        case "fa:FaSupple":
            return FaSupple;
        case "fa:FaSuse":
            return FaSuse;
        case "fa:FaSwift":
            return FaSwift;
        case "fa:FaSymfony":
            return FaSymfony;
        case "fa:FaTeamspeak":
            return FaTeamspeak;
        case "fa:FaTelegramPlane":
            return FaTelegramPlane;
        case "fa:FaTelegram":
            return FaTelegram;
        case "fa:FaTencentWeibo":
            return FaTencentWeibo;
        case "fa:FaTheRedYeti":
            return FaTheRedYeti;
        case "fa:FaThemeco":
            return FaThemeco;
        case "fa:FaThemeisle":
            return FaThemeisle;
        case "fa:FaThinkPeaks":
            return FaThinkPeaks;
        case "fa:FaTiktok":
            return FaTiktok;
        case "fa:FaTradeFederation":
            return FaTradeFederation;
        case "fa:FaTrello":
            return FaTrello;
        case "fa:FaTripadvisor":
            return FaTripadvisor;
        case "fa:FaTumblrSquare":
            return FaTumblrSquare;
        case "fa:FaTumblr":
            return FaTumblr;
        case "fa:FaTwitch":
            return FaTwitch;
        case "fa:FaTwitterSquare":
            return FaTwitterSquare;
        case "fa:FaTwitter":
            return FaTwitter;
        case "fa:FaTypo3":
            return FaTypo3;
        case "fa:FaUber":
            return FaUber;
        case "fa:FaUbuntu":
            return FaUbuntu;
        case "fa:FaUikit":
            return FaUikit;
        case "fa:FaUmbraco":
            return FaUmbraco;
        case "fa:FaUncharted":
            return FaUncharted;
        case "fa:FaUniregistry":
            return FaUniregistry;
        case "fa:FaUnity":
            return FaUnity;
        case "fa:FaUnsplash":
            return FaUnsplash;
        case "fa:FaUntappd":
            return FaUntappd;
        case "fa:FaUps":
            return FaUps;
        case "fa:FaUsb":
            return FaUsb;
        case "fa:FaUsps":
            return FaUsps;
        case "fa:FaUssunnah":
            return FaUssunnah;
        case "fa:FaVaadin":
            return FaVaadin;
        case "fa:FaViacoin":
            return FaViacoin;
        case "fa:FaViadeoSquare":
            return FaViadeoSquare;
        case "fa:FaViadeo":
            return FaViadeo;
        case "fa:FaViber":
            return FaViber;
        case "fa:FaVimeoSquare":
            return FaVimeoSquare;
        case "fa:FaVimeoV":
            return FaVimeoV;
        case "fa:FaVimeo":
            return FaVimeo;
        case "fa:FaVine":
            return FaVine;
        case "fa:FaVk":
            return FaVk;
        case "fa:FaVnv":
            return FaVnv;
        case "fa:FaVuejs":
            return FaVuejs;
        case "fa:FaWatchmanMonitoring":
            return FaWatchmanMonitoring;
        case "fa:FaWaze":
            return FaWaze;
        case "fa:FaWeebly":
            return FaWeebly;
        case "fa:FaWeibo":
            return FaWeibo;
        case "fa:FaWeixin":
            return FaWeixin;
        case "fa:FaWhatsappSquare":
            return FaWhatsappSquare;
        case "fa:FaWhatsapp":
            return FaWhatsapp;
        case "fa:FaWhmcs":
            return FaWhmcs;
        case "fa:FaWikipediaW":
            return FaWikipediaW;
        case "fa:FaWindows":
            return FaWindows;
        case "fa:FaWix":
            return FaWix;
        case "fa:FaWizardsOfTheCoast":
            return FaWizardsOfTheCoast;
        case "fa:FaWodu":
            return FaWodu;
        case "fa:FaWolfPackBattalion":
            return FaWolfPackBattalion;
        case "fa:FaWordpressSimple":
            return FaWordpressSimple;
        case "fa:FaWordpress":
            return FaWordpress;
        case "fa:FaWpbeginner":
            return FaWpbeginner;
        case "fa:FaWpexplorer":
            return FaWpexplorer;
        case "fa:FaWpforms":
            return FaWpforms;
        case "fa:FaWpressr":
            return FaWpressr;
        case "fa:FaXbox":
            return FaXbox;
        case "fa:FaXingSquare":
            return FaXingSquare;
        case "fa:FaXing":
            return FaXing;
        case "fa:FaYCombinator":
            return FaYCombinator;
        case "fa:FaYahoo":
            return FaYahoo;
        case "fa:FaYammer":
            return FaYammer;
        case "fa:FaYandexInternational":
            return FaYandexInternational;
        case "fa:FaYandex":
            return FaYandex;
        case "fa:FaYarn":
            return FaYarn;
        case "fa:FaYelp":
            return FaYelp;
        case "fa:FaYoast":
            return FaYoast;
        case "fa:FaYoutubeSquare":
            return FaYoutubeSquare;
        case "fa:FaYoutube":
            return FaYoutube;
        case "fa:FaZhihu":
            return FaZhihu;
        case "fa:FaAd":
            return FaAd;
        case "fa:FaAddressBook":
            return FaAddressBook;
        case "fa:FaAddressCard":
            return FaAddressCard;
        case "fa:FaAdjust":
            return FaAdjust;
        case "fa:FaAirFreshener":
            return FaAirFreshener;
        case "fa:FaAlignCenter":
            return FaAlignCenter;
        case "fa:FaAlignJustify":
            return FaAlignJustify;
        case "fa:FaAlignLeft":
            return FaAlignLeft;
        case "fa:FaAlignRight":
            return FaAlignRight;
        case "fa:FaAllergies":
            return FaAllergies;
        case "fa:FaAmbulance":
            return FaAmbulance;
        case "fa:FaAmericanSignLanguageInterpreting":
            return FaAmericanSignLanguageInterpreting;
        case "fa:FaAnchor":
            return FaAnchor;
        case "fa:FaAngleDoubleDown":
            return FaAngleDoubleDown;
        case "fa:FaAngleDoubleLeft":
            return FaAngleDoubleLeft;
        case "fa:FaAngleDoubleRight":
            return FaAngleDoubleRight;
        case "fa:FaAngleDoubleUp":
            return FaAngleDoubleUp;
        case "fa:FaAngleDown":
            return FaAngleDown;
        case "fa:FaAngleLeft":
            return FaAngleLeft;
        case "fa:FaAngleRight":
            return FaAngleRight;
        case "fa:FaAngleUp":
            return FaAngleUp;
        case "fa:FaAngry":
            return FaAngry;
        case "fa:FaAnkh":
            return FaAnkh;
        case "fa:FaAppleAlt":
            return FaAppleAlt;
        case "fa:FaArchive":
            return FaArchive;
        case "fa:FaArchway":
            return FaArchway;
        case "fa:FaArrowAltCircleDown":
            return FaArrowAltCircleDown;
        case "fa:FaArrowAltCircleLeft":
            return FaArrowAltCircleLeft;
        case "fa:FaArrowAltCircleRight":
            return FaArrowAltCircleRight;
        case "fa:FaArrowAltCircleUp":
            return FaArrowAltCircleUp;
        case "fa:FaArrowCircleDown":
            return FaArrowCircleDown;
        case "fa:FaArrowCircleLeft":
            return FaArrowCircleLeft;
        case "fa:FaArrowCircleRight":
            return FaArrowCircleRight;
        case "fa:FaArrowCircleUp":
            return FaArrowCircleUp;
        case "fa:FaArrowDown":
            return FaArrowDown;
        case "fa:FaArrowLeft":
            return FaArrowLeft;
        case "fa:FaArrowRight":
            return FaArrowRight;
        case "fa:FaArrowUp":
            return FaArrowUp;
        case "fa:FaArrowsAltH":
            return FaArrowsAltH;
        case "fa:FaArrowsAltV":
            return FaArrowsAltV;
        case "fa:FaArrowsAlt":
            return FaArrowsAlt;
        case "fa:FaAssistiveListeningSystems":
            return FaAssistiveListeningSystems;
        case "fa:FaAsterisk":
            return FaAsterisk;
        case "fa:FaAt":
            return FaAt;
        case "fa:FaAtlas":
            return FaAtlas;
        case "fa:FaAtom":
            return FaAtom;
        case "fa:FaAudioDescription":
            return FaAudioDescription;
        case "fa:FaAward":
            return FaAward;
        case "fa:FaBabyCarriage":
            return FaBabyCarriage;
        case "fa:FaBaby":
            return FaBaby;
        case "fa:FaBackspace":
            return FaBackspace;
        case "fa:FaBackward":
            return FaBackward;
        case "fa:FaBacon":
            return FaBacon;
        case "fa:FaBacteria":
            return FaBacteria;
        case "fa:FaBacterium":
            return FaBacterium;
        case "fa:FaBahai":
            return FaBahai;
        case "fa:FaBalanceScaleLeft":
            return FaBalanceScaleLeft;
        case "fa:FaBalanceScaleRight":
            return FaBalanceScaleRight;
        case "fa:FaBalanceScale":
            return FaBalanceScale;
        case "fa:FaBan":
            return FaBan;
        case "fa:FaBandAid":
            return FaBandAid;
        case "fa:FaBarcode":
            return FaBarcode;
        case "fa:FaBars":
            return FaBars;
        case "fa:FaBaseballBall":
            return FaBaseballBall;
        case "fa:FaBasketballBall":
            return FaBasketballBall;
        case "fa:FaBath":
            return FaBath;
        case "fa:FaBatteryEmpty":
            return FaBatteryEmpty;
        case "fa:FaBatteryFull":
            return FaBatteryFull;
        case "fa:FaBatteryHalf":
            return FaBatteryHalf;
        case "fa:FaBatteryQuarter":
            return FaBatteryQuarter;
        case "fa:FaBatteryThreeQuarters":
            return FaBatteryThreeQuarters;
        case "fa:FaBed":
            return FaBed;
        case "fa:FaBeer":
            return FaBeer;
        case "fa:FaBellSlash":
            return FaBellSlash;
        case "fa:FaBell":
            return FaBell;
        case "fa:FaBezierCurve":
            return FaBezierCurve;
        case "fa:FaBible":
            return FaBible;
        case "fa:FaBicycle":
            return FaBicycle;
        case "fa:FaBiking":
            return FaBiking;
        case "fa:FaBinoculars":
            return FaBinoculars;
        case "fa:FaBiohazard":
            return FaBiohazard;
        case "fa:FaBirthdayCake":
            return FaBirthdayCake;
        case "fa:FaBlenderPhone":
            return FaBlenderPhone;
        case "fa:FaBlender":
            return FaBlender;
        case "fa:FaBlind":
            return FaBlind;
        case "fa:FaBlog":
            return FaBlog;
        case "fa:FaBold":
            return FaBold;
        case "fa:FaBolt":
            return FaBolt;
        case "fa:FaBomb":
            return FaBomb;
        case "fa:FaBone":
            return FaBone;
        case "fa:FaBong":
            return FaBong;
        case "fa:FaBookDead":
            return FaBookDead;
        case "fa:FaBookMedical":
            return FaBookMedical;
        case "fa:FaBookOpen":
            return FaBookOpen;
        case "fa:FaBookReader":
            return FaBookReader;
        case "fa:FaBook":
            return FaBook;
        case "fa:FaBookmark":
            return FaBookmark;
        case "fa:FaBorderAll":
            return FaBorderAll;
        case "fa:FaBorderNone":
            return FaBorderNone;
        case "fa:FaBorderStyle":
            return FaBorderStyle;
        case "fa:FaBowlingBall":
            return FaBowlingBall;
        case "fa:FaBoxOpen":
            return FaBoxOpen;
        case "fa:FaBoxTissue":
            return FaBoxTissue;
        case "fa:FaBox":
            return FaBox;
        case "fa:FaBoxes":
            return FaBoxes;
        case "fa:FaBraille":
            return FaBraille;
        case "fa:FaBrain":
            return FaBrain;
        case "fa:FaBreadSlice":
            return FaBreadSlice;
        case "fa:FaBriefcaseMedical":
            return FaBriefcaseMedical;
        case "fa:FaBriefcase":
            return FaBriefcase;
        case "fa:FaBroadcastTower":
            return FaBroadcastTower;
        case "fa:FaBroom":
            return FaBroom;
        case "fa:FaBrush":
            return FaBrush;
        case "fa:FaBug":
            return FaBug;
        case "fa:FaBuilding":
            return FaBuilding;
        case "fa:FaBullhorn":
            return FaBullhorn;
        case "fa:FaBullseye":
            return FaBullseye;
        case "fa:FaBurn":
            return FaBurn;
        case "fa:FaBusAlt":
            return FaBusAlt;
        case "fa:FaBus":
            return FaBus;
        case "fa:FaBusinessTime":
            return FaBusinessTime;
        case "fa:FaCalculator":
            return FaCalculator;
        case "fa:FaCalendarAlt":
            return FaCalendarAlt;
        case "fa:FaCalendarCheck":
            return FaCalendarCheck;
        case "fa:FaCalendarDay":
            return FaCalendarDay;
        case "fa:FaCalendarMinus":
            return FaCalendarMinus;
        case "fa:FaCalendarPlus":
            return FaCalendarPlus;
        case "fa:FaCalendarTimes":
            return FaCalendarTimes;
        case "fa:FaCalendarWeek":
            return FaCalendarWeek;
        case "fa:FaCalendar":
            return FaCalendar;
        case "fa:FaCameraRetro":
            return FaCameraRetro;
        case "fa:FaCamera":
            return FaCamera;
        case "fa:FaCampground":
            return FaCampground;
        case "fa:FaCandyCane":
            return FaCandyCane;
        case "fa:FaCannabis":
            return FaCannabis;
        case "fa:FaCapsules":
            return FaCapsules;
        case "fa:FaCarAlt":
            return FaCarAlt;
        case "fa:FaCarBattery":
            return FaCarBattery;
        case "fa:FaCarCrash":
            return FaCarCrash;
        case "fa:FaCarSide":
            return FaCarSide;
        case "fa:FaCar":
            return FaCar;
        case "fa:FaCaravan":
            return FaCaravan;
        case "fa:FaCaretDown":
            return FaCaretDown;
        case "fa:FaCaretLeft":
            return FaCaretLeft;
        case "fa:FaCaretRight":
            return FaCaretRight;
        case "fa:FaCaretSquareDown":
            return FaCaretSquareDown;
        case "fa:FaCaretSquareLeft":
            return FaCaretSquareLeft;
        case "fa:FaCaretSquareRight":
            return FaCaretSquareRight;
        case "fa:FaCaretSquareUp":
            return FaCaretSquareUp;
        case "fa:FaCaretUp":
            return FaCaretUp;
        case "fa:FaCarrot":
            return FaCarrot;
        case "fa:FaCartArrowDown":
            return FaCartArrowDown;
        case "fa:FaCartPlus":
            return FaCartPlus;
        case "fa:FaCashRegister":
            return FaCashRegister;
        case "fa:FaCat":
            return FaCat;
        case "fa:FaCertificate":
            return FaCertificate;
        case "fa:FaChair":
            return FaChair;
        case "fa:FaChalkboardTeacher":
            return FaChalkboardTeacher;
        case "fa:FaChalkboard":
            return FaChalkboard;
        case "fa:FaChargingStation":
            return FaChargingStation;
        case "fa:FaChartArea":
            return FaChartArea;
        case "fa:FaChartBar":
            return FaChartBar;
        case "fa:FaChartLine":
            return FaChartLine;
        case "fa:FaChartPie":
            return FaChartPie;
        case "fa:FaCheckCircle":
            return FaCheckCircle;
        case "fa:FaCheckDouble":
            return FaCheckDouble;
        case "fa:FaCheckSquare":
            return FaCheckSquare;
        case "fa:FaCheck":
            return FaCheck;
        case "fa:FaCheese":
            return FaCheese;
        case "fa:FaChessBishop":
            return FaChessBishop;
        case "fa:FaChessBoard":
            return FaChessBoard;
        case "fa:FaChessKing":
            return FaChessKing;
        case "fa:FaChessKnight":
            return FaChessKnight;
        case "fa:FaChessPawn":
            return FaChessPawn;
        case "fa:FaChessQueen":
            return FaChessQueen;
        case "fa:FaChessRook":
            return FaChessRook;
        case "fa:FaChess":
            return FaChess;
        case "fa:FaChevronCircleDown":
            return FaChevronCircleDown;
        case "fa:FaChevronCircleLeft":
            return FaChevronCircleLeft;
        case "fa:FaChevronCircleRight":
            return FaChevronCircleRight;
        case "fa:FaChevronCircleUp":
            return FaChevronCircleUp;
        case "fa:FaChevronDown":
            return FaChevronDown;
        case "fa:FaChevronLeft":
            return FaChevronLeft;
        case "fa:FaChevronRight":
            return FaChevronRight;
        case "fa:FaChevronUp":
            return FaChevronUp;
        case "fa:FaChild":
            return FaChild;
        case "fa:FaChurch":
            return FaChurch;
        case "fa:FaCircleNotch":
            return FaCircleNotch;
        case "fa:FaCircle":
            return FaCircle;
        case "fa:FaCity":
            return FaCity;
        case "fa:FaClinicMedical":
            return FaClinicMedical;
        case "fa:FaClipboardCheck":
            return FaClipboardCheck;
        case "fa:FaClipboardList":
            return FaClipboardList;
        case "fa:FaClipboard":
            return FaClipboard;
        case "fa:FaClock":
            return FaClock;
        case "fa:FaClone":
            return FaClone;
        case "fa:FaClosedCaptioning":
            return FaClosedCaptioning;
        case "fa:FaCloudDownloadAlt":
            return FaCloudDownloadAlt;
        case "fa:FaCloudMeatball":
            return FaCloudMeatball;
        case "fa:FaCloudMoonRain":
            return FaCloudMoonRain;
        case "fa:FaCloudMoon":
            return FaCloudMoon;
        case "fa:FaCloudRain":
            return FaCloudRain;
        case "fa:FaCloudShowersHeavy":
            return FaCloudShowersHeavy;
        case "fa:FaCloudSunRain":
            return FaCloudSunRain;
        case "fa:FaCloudSun":
            return FaCloudSun;
        case "fa:FaCloudUploadAlt":
            return FaCloudUploadAlt;
        case "fa:FaCloud":
            return FaCloud;
        case "fa:FaCocktail":
            return FaCocktail;
        case "fa:FaCodeBranch":
            return FaCodeBranch;
        case "fa:FaCode":
            return FaCode;
        case "fa:FaCoffee":
            return FaCoffee;
        case "fa:FaCog":
            return FaCog;
        case "fa:FaCogs":
            return FaCogs;
        case "fa:FaCoins":
            return FaCoins;
        case "fa:FaColumns":
            return FaColumns;
        case "fa:FaCommentAlt":
            return FaCommentAlt;
        case "fa:FaCommentDollar":
            return FaCommentDollar;
        case "fa:FaCommentDots":
            return FaCommentDots;
        case "fa:FaCommentMedical":
            return FaCommentMedical;
        case "fa:FaCommentSlash":
            return FaCommentSlash;
        case "fa:FaComment":
            return FaComment;
        case "fa:FaCommentsDollar":
            return FaCommentsDollar;
        case "fa:FaComments":
            return FaComments;
        case "fa:FaCompactDisc":
            return FaCompactDisc;
        case "fa:FaCompass":
            return FaCompass;
        case "fa:FaCompressAlt":
            return FaCompressAlt;
        case "fa:FaCompressArrowsAlt":
            return FaCompressArrowsAlt;
        case "fa:FaCompress":
            return FaCompress;
        case "fa:FaConciergeBell":
            return FaConciergeBell;
        case "fa:FaCookieBite":
            return FaCookieBite;
        case "fa:FaCookie":
            return FaCookie;
        case "fa:FaCopy":
            return FaCopy;
        case "fa:FaCopyright":
            return FaCopyright;
        case "fa:FaCouch":
            return FaCouch;
        case "fa:FaCreditCard":
            return FaCreditCard;
        case "fa:FaCropAlt":
            return FaCropAlt;
        case "fa:FaCrop":
            return FaCrop;
        case "fa:FaCross":
            return FaCross;
        case "fa:FaCrosshairs":
            return FaCrosshairs;
        case "fa:FaCrow":
            return FaCrow;
        case "fa:FaCrown":
            return FaCrown;
        case "fa:FaCrutch":
            return FaCrutch;
        case "fa:FaCube":
            return FaCube;
        case "fa:FaCubes":
            return FaCubes;
        case "fa:FaCut":
            return FaCut;
        case "fa:FaDatabase":
            return FaDatabase;
        case "fa:FaDeaf":
            return FaDeaf;
        case "fa:FaDemocrat":
            return FaDemocrat;
        case "fa:FaDesktop":
            return FaDesktop;
        case "fa:FaDharmachakra":
            return FaDharmachakra;
        case "fa:FaDiagnoses":
            return FaDiagnoses;
        case "fa:FaDiceD20":
            return FaDiceD20;
        case "fa:FaDiceD6":
            return FaDiceD6;
        case "fa:FaDiceFive":
            return FaDiceFive;
        case "fa:FaDiceFour":
            return FaDiceFour;
        case "fa:FaDiceOne":
            return FaDiceOne;
        case "fa:FaDiceSix":
            return FaDiceSix;
        case "fa:FaDiceThree":
            return FaDiceThree;
        case "fa:FaDiceTwo":
            return FaDiceTwo;
        case "fa:FaDice":
            return FaDice;
        case "fa:FaDigitalTachograph":
            return FaDigitalTachograph;
        case "fa:FaDirections":
            return FaDirections;
        case "fa:FaDisease":
            return FaDisease;
        case "fa:FaDivide":
            return FaDivide;
        case "fa:FaDizzy":
            return FaDizzy;
        case "fa:FaDna":
            return FaDna;
        case "fa:FaDog":
            return FaDog;
        case "fa:FaDollarSign":
            return FaDollarSign;
        case "fa:FaDollyFlatbed":
            return FaDollyFlatbed;
        case "fa:FaDolly":
            return FaDolly;
        case "fa:FaDonate":
            return FaDonate;
        case "fa:FaDoorClosed":
            return FaDoorClosed;
        case "fa:FaDoorOpen":
            return FaDoorOpen;
        case "fa:FaDotCircle":
            return FaDotCircle;
        case "fa:FaDove":
            return FaDove;
        case "fa:FaDownload":
            return FaDownload;
        case "fa:FaDraftingCompass":
            return FaDraftingCompass;
        case "fa:FaDragon":
            return FaDragon;
        case "fa:FaDrawPolygon":
            return FaDrawPolygon;
        case "fa:FaDrumSteelpan":
            return FaDrumSteelpan;
        case "fa:FaDrum":
            return FaDrum;
        case "fa:FaDrumstickBite":
            return FaDrumstickBite;
        case "fa:FaDumbbell":
            return FaDumbbell;
        case "fa:FaDumpsterFire":
            return FaDumpsterFire;
        case "fa:FaDumpster":
            return FaDumpster;
        case "fa:FaDungeon":
            return FaDungeon;
        case "fa:FaEdit":
            return FaEdit;
        case "fa:FaEgg":
            return FaEgg;
        case "fa:FaEject":
            return FaEject;
        case "fa:FaEllipsisH":
            return FaEllipsisH;
        case "fa:FaEllipsisV":
            return FaEllipsisV;
        case "fa:FaEnvelopeOpenText":
            return FaEnvelopeOpenText;
        case "fa:FaEnvelopeOpen":
            return FaEnvelopeOpen;
        case "fa:FaEnvelopeSquare":
            return FaEnvelopeSquare;
        case "fa:FaEnvelope":
            return FaEnvelope;
        case "fa:FaEquals":
            return FaEquals;
        case "fa:FaEraser":
            return FaEraser;
        case "fa:FaEthernet":
            return FaEthernet;
        case "fa:FaEuroSign":
            return FaEuroSign;
        case "fa:FaExchangeAlt":
            return FaExchangeAlt;
        case "fa:FaExclamationCircle":
            return FaExclamationCircle;
        case "fa:FaExclamationTriangle":
            return FaExclamationTriangle;
        case "fa:FaExclamation":
            return FaExclamation;
        case "fa:FaExpandAlt":
            return FaExpandAlt;
        case "fa:FaExpandArrowsAlt":
            return FaExpandArrowsAlt;
        case "fa:FaExpand":
            return FaExpand;
        case "fa:FaExternalLinkAlt":
            return FaExternalLinkAlt;
        case "fa:FaExternalLinkSquareAlt":
            return FaExternalLinkSquareAlt;
        case "fa:FaEyeDropper":
            return FaEyeDropper;
        case "fa:FaEyeSlash":
            return FaEyeSlash;
        case "fa:FaEye":
            return FaEye;
        case "fa:FaFan":
            return FaFan;
        case "fa:FaFastBackward":
            return FaFastBackward;
        case "fa:FaFastForward":
            return FaFastForward;
        case "fa:FaFaucet":
            return FaFaucet;
        case "fa:FaFax":
            return FaFax;
        case "fa:FaFeatherAlt":
            return FaFeatherAlt;
        case "fa:FaFeather":
            return FaFeather;
        case "fa:FaFemale":
            return FaFemale;
        case "fa:FaFighterJet":
            return FaFighterJet;
        case "fa:FaFileAlt":
            return FaFileAlt;
        case "fa:FaFileArchive":
            return FaFileArchive;
        case "fa:FaFileAudio":
            return FaFileAudio;
        case "fa:FaFileCode":
            return FaFileCode;
        case "fa:FaFileContract":
            return FaFileContract;
        case "fa:FaFileCsv":
            return FaFileCsv;
        case "fa:FaFileDownload":
            return FaFileDownload;
        case "fa:FaFileExcel":
            return FaFileExcel;
        case "fa:FaFileExport":
            return FaFileExport;
        case "fa:FaFileImage":
            return FaFileImage;
        case "fa:FaFileImport":
            return FaFileImport;
        case "fa:FaFileInvoiceDollar":
            return FaFileInvoiceDollar;
        case "fa:FaFileInvoice":
            return FaFileInvoice;
        case "fa:FaFileMedicalAlt":
            return FaFileMedicalAlt;
        case "fa:FaFileMedical":
            return FaFileMedical;
        case "fa:FaFilePdf":
            return FaFilePdf;
        case "fa:FaFilePowerpoint":
            return FaFilePowerpoint;
        case "fa:FaFilePrescription":
            return FaFilePrescription;
        case "fa:FaFileSignature":
            return FaFileSignature;
        case "fa:FaFileUpload":
            return FaFileUpload;
        case "fa:FaFileVideo":
            return FaFileVideo;
        case "fa:FaFileWord":
            return FaFileWord;
        case "fa:FaFile":
            return FaFile;
        case "fa:FaFillDrip":
            return FaFillDrip;
        case "fa:FaFill":
            return FaFill;
        case "fa:FaFilm":
            return FaFilm;
        case "fa:FaFilter":
            return FaFilter;
        case "fa:FaFingerprint":
            return FaFingerprint;
        case "fa:FaFireAlt":
            return FaFireAlt;
        case "fa:FaFireExtinguisher":
            return FaFireExtinguisher;
        case "fa:FaFire":
            return FaFire;
        case "fa:FaFirstAid":
            return FaFirstAid;
        case "fa:FaFish":
            return FaFish;
        case "fa:FaFistRaised":
            return FaFistRaised;
        case "fa:FaFlagCheckered":
            return FaFlagCheckered;
        case "fa:FaFlagUsa":
            return FaFlagUsa;
        case "fa:FaFlag":
            return FaFlag;
        case "fa:FaFlask":
            return FaFlask;
        case "fa:FaFlushed":
            return FaFlushed;
        case "fa:FaFolderMinus":
            return FaFolderMinus;
        case "fa:FaFolderOpen":
            return FaFolderOpen;
        case "fa:FaFolderPlus":
            return FaFolderPlus;
        case "fa:FaFolder":
            return FaFolder;
        case "fa:FaFont":
            return FaFont;
        case "fa:FaFootballBall":
            return FaFootballBall;
        case "fa:FaForward":
            return FaForward;
        case "fa:FaFrog":
            return FaFrog;
        case "fa:FaFrownOpen":
            return FaFrownOpen;
        case "fa:FaFrown":
            return FaFrown;
        case "fa:FaFunnelDollar":
            return FaFunnelDollar;
        case "fa:FaFutbol":
            return FaFutbol;
        case "fa:FaGamepad":
            return FaGamepad;
        case "fa:FaGasPump":
            return FaGasPump;
        case "fa:FaGavel":
            return FaGavel;
        case "fa:FaGem":
            return FaGem;
        case "fa:FaGenderless":
            return FaGenderless;
        case "fa:FaGhost":
            return FaGhost;
        case "fa:FaGift":
            return FaGift;
        case "fa:FaGifts":
            return FaGifts;
        case "fa:FaGlassCheers":
            return FaGlassCheers;
        case "fa:FaGlassMartiniAlt":
            return FaGlassMartiniAlt;
        case "fa:FaGlassMartini":
            return FaGlassMartini;
        case "fa:FaGlassWhiskey":
            return FaGlassWhiskey;
        case "fa:FaGlasses":
            return FaGlasses;
        case "fa:FaGlobeAfrica":
            return FaGlobeAfrica;
        case "fa:FaGlobeAmericas":
            return FaGlobeAmericas;
        case "fa:FaGlobeAsia":
            return FaGlobeAsia;
        case "fa:FaGlobeEurope":
            return FaGlobeEurope;
        case "fa:FaGlobe":
            return FaGlobe;
        case "fa:FaGolfBall":
            return FaGolfBall;
        case "fa:FaGopuram":
            return FaGopuram;
        case "fa:FaGraduationCap":
            return FaGraduationCap;
        case "fa:FaGreaterThanEqual":
            return FaGreaterThanEqual;
        case "fa:FaGreaterThan":
            return FaGreaterThan;
        case "fa:FaGrimace":
            return FaGrimace;
        case "fa:FaGrinAlt":
            return FaGrinAlt;
        case "fa:FaGrinBeamSweat":
            return FaGrinBeamSweat;
        case "fa:FaGrinBeam":
            return FaGrinBeam;
        case "fa:FaGrinHearts":
            return FaGrinHearts;
        case "fa:FaGrinSquintTears":
            return FaGrinSquintTears;
        case "fa:FaGrinSquint":
            return FaGrinSquint;
        case "fa:FaGrinStars":
            return FaGrinStars;
        case "fa:FaGrinTears":
            return FaGrinTears;
        case "fa:FaGrinTongueSquint":
            return FaGrinTongueSquint;
        case "fa:FaGrinTongueWink":
            return FaGrinTongueWink;
        case "fa:FaGrinTongue":
            return FaGrinTongue;
        case "fa:FaGrinWink":
            return FaGrinWink;
        case "fa:FaGrin":
            return FaGrin;
        case "fa:FaGripHorizontal":
            return FaGripHorizontal;
        case "fa:FaGripLinesVertical":
            return FaGripLinesVertical;
        case "fa:FaGripLines":
            return FaGripLines;
        case "fa:FaGripVertical":
            return FaGripVertical;
        case "fa:FaGuitar":
            return FaGuitar;
        case "fa:FaHSquare":
            return FaHSquare;
        case "fa:FaHamburger":
            return FaHamburger;
        case "fa:FaHammer":
            return FaHammer;
        case "fa:FaHamsa":
            return FaHamsa;
        case "fa:FaHandHoldingHeart":
            return FaHandHoldingHeart;
        case "fa:FaHandHoldingMedical":
            return FaHandHoldingMedical;
        case "fa:FaHandHoldingUsd":
            return FaHandHoldingUsd;
        case "fa:FaHandHoldingWater":
            return FaHandHoldingWater;
        case "fa:FaHandHolding":
            return FaHandHolding;
        case "fa:FaHandLizard":
            return FaHandLizard;
        case "fa:FaHandMiddleFinger":
            return FaHandMiddleFinger;
        case "fa:FaHandPaper":
            return FaHandPaper;
        case "fa:FaHandPeace":
            return FaHandPeace;
        case "fa:FaHandPointDown":
            return FaHandPointDown;
        case "fa:FaHandPointLeft":
            return FaHandPointLeft;
        case "fa:FaHandPointRight":
            return FaHandPointRight;
        case "fa:FaHandPointUp":
            return FaHandPointUp;
        case "fa:FaHandPointer":
            return FaHandPointer;
        case "fa:FaHandRock":
            return FaHandRock;
        case "fa:FaHandScissors":
            return FaHandScissors;
        case "fa:FaHandSparkles":
            return FaHandSparkles;
        case "fa:FaHandSpock":
            return FaHandSpock;
        case "fa:FaHandsHelping":
            return FaHandsHelping;
        case "fa:FaHandsWash":
            return FaHandsWash;
        case "fa:FaHands":
            return FaHands;
        case "fa:FaHandshakeAltSlash":
            return FaHandshakeAltSlash;
        case "fa:FaHandshakeSlash":
            return FaHandshakeSlash;
        case "fa:FaHandshake":
            return FaHandshake;
        case "fa:FaHanukiah":
            return FaHanukiah;
        case "fa:FaHardHat":
            return FaHardHat;
        case "fa:FaHashtag":
            return FaHashtag;
        case "fa:FaHatCowboySide":
            return FaHatCowboySide;
        case "fa:FaHatCowboy":
            return FaHatCowboy;
        case "fa:FaHatWizard":
            return FaHatWizard;
        case "fa:FaHdd":
            return FaHdd;
        case "fa:FaHeadSideCoughSlash":
            return FaHeadSideCoughSlash;
        case "fa:FaHeadSideCough":
            return FaHeadSideCough;
        case "fa:FaHeadSideMask":
            return FaHeadSideMask;
        case "fa:FaHeadSideVirus":
            return FaHeadSideVirus;
        case "fa:FaHeading":
            return FaHeading;
        case "fa:FaHeadphonesAlt":
            return FaHeadphonesAlt;
        case "fa:FaHeadphones":
            return FaHeadphones;
        case "fa:FaHeadset":
            return FaHeadset;
        case "fa:FaHeartBroken":
            return FaHeartBroken;
        case "fa:FaHeart":
            return FaHeart;
        case "fa:FaHeartbeat":
            return FaHeartbeat;
        case "fa:FaHelicopter":
            return FaHelicopter;
        case "fa:FaHighlighter":
            return FaHighlighter;
        case "fa:FaHiking":
            return FaHiking;
        case "fa:FaHippo":
            return FaHippo;
        case "fa:FaHistory":
            return FaHistory;
        case "fa:FaHockeyPuck":
            return FaHockeyPuck;
        case "fa:FaHollyBerry":
            return FaHollyBerry;
        case "fa:FaHome":
            return FaHome;
        case "fa:FaHorseHead":
            return FaHorseHead;
        case "fa:FaHorse":
            return FaHorse;
        case "fa:FaHospitalAlt":
            return FaHospitalAlt;
        case "fa:FaHospitalSymbol":
            return FaHospitalSymbol;
        case "fa:FaHospitalUser":
            return FaHospitalUser;
        case "fa:FaHospital":
            return FaHospital;
        case "fa:FaHotTub":
            return FaHotTub;
        case "fa:FaHotdog":
            return FaHotdog;
        case "fa:FaHotel":
            return FaHotel;
        case "fa:FaHourglassEnd":
            return FaHourglassEnd;
        case "fa:FaHourglassHalf":
            return FaHourglassHalf;
        case "fa:FaHourglassStart":
            return FaHourglassStart;
        case "fa:FaHourglass":
            return FaHourglass;
        case "fa:FaHouseDamage":
            return FaHouseDamage;
        case "fa:FaHouseUser":
            return FaHouseUser;
        case "fa:FaHryvnia":
            return FaHryvnia;
        case "fa:FaICursor":
            return FaICursor;
        case "fa:FaIceCream":
            return FaIceCream;
        case "fa:FaIcicles":
            return FaIcicles;
        case "fa:FaIcons":
            return FaIcons;
        case "fa:FaIdBadge":
            return FaIdBadge;
        case "fa:FaIdCardAlt":
            return FaIdCardAlt;
        case "fa:FaIdCard":
            return FaIdCard;
        case "fa:FaIgloo":
            return FaIgloo;
        case "fa:FaImage":
            return FaImage;
        case "fa:FaImages":
            return FaImages;
        case "fa:FaInbox":
            return FaInbox;
        case "fa:FaIndent":
            return FaIndent;
        case "fa:FaIndustry":
            return FaIndustry;
        case "fa:FaInfinity":
            return FaInfinity;
        case "fa:FaInfoCircle":
            return FaInfoCircle;
        case "fa:FaInfo":
            return FaInfo;
        case "fa:FaItalic":
            return FaItalic;
        case "fa:FaJedi":
            return FaJedi;
        case "fa:FaJoint":
            return FaJoint;
        case "fa:FaJournalWhills":
            return FaJournalWhills;
        case "fa:FaKaaba":
            return FaKaaba;
        case "fa:FaKey":
            return FaKey;
        case "fa:FaKeyboard":
            return FaKeyboard;
        case "fa:FaKhanda":
            return FaKhanda;
        case "fa:FaKissBeam":
            return FaKissBeam;
        case "fa:FaKissWinkHeart":
            return FaKissWinkHeart;
        case "fa:FaKiss":
            return FaKiss;
        case "fa:FaKiwiBird":
            return FaKiwiBird;
        case "fa:FaLandmark":
            return FaLandmark;
        case "fa:FaLanguage":
            return FaLanguage;
        case "fa:FaLaptopCode":
            return FaLaptopCode;
        case "fa:FaLaptopHouse":
            return FaLaptopHouse;
        case "fa:FaLaptopMedical":
            return FaLaptopMedical;
        case "fa:FaLaptop":
            return FaLaptop;
        case "fa:FaLaughBeam":
            return FaLaughBeam;
        case "fa:FaLaughSquint":
            return FaLaughSquint;
        case "fa:FaLaughWink":
            return FaLaughWink;
        case "fa:FaLaugh":
            return FaLaugh;
        case "fa:FaLayerGroup":
            return FaLayerGroup;
        case "fa:FaLeaf":
            return FaLeaf;
        case "fa:FaLemon":
            return FaLemon;
        case "fa:FaLessThanEqual":
            return FaLessThanEqual;
        case "fa:FaLessThan":
            return FaLessThan;
        case "fa:FaLevelDownAlt":
            return FaLevelDownAlt;
        case "fa:FaLevelUpAlt":
            return FaLevelUpAlt;
        case "fa:FaLifeRing":
            return FaLifeRing;
        case "fa:FaLightbulb":
            return FaLightbulb;
        case "fa:FaLink":
            return FaLink;
        case "fa:FaLiraSign":
            return FaLiraSign;
        case "fa:FaListAlt":
            return FaListAlt;
        case "fa:FaListOl":
            return FaListOl;
        case "fa:FaListUl":
            return FaListUl;
        case "fa:FaList":
            return FaList;
        case "fa:FaLocationArrow":
            return FaLocationArrow;
        case "fa:FaLockOpen":
            return FaLockOpen;
        case "fa:FaLock":
            return FaLock;
        case "fa:FaLongArrowAltDown":
            return FaLongArrowAltDown;
        case "fa:FaLongArrowAltLeft":
            return FaLongArrowAltLeft;
        case "fa:FaLongArrowAltRight":
            return FaLongArrowAltRight;
    }
}
