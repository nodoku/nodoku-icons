import type {IconType} from "react-icons";

import {
    FaLongArrowAltUp,
    FaLowVision,
    FaLuggageCart,
    FaLungsVirus,
    FaLungs,
    FaMagic,
    FaMagnet,
    FaMailBulk,
    FaMale,
    FaMapMarkedAlt,
    FaMapMarked,
    FaMapMarkerAlt,
    FaMapMarker,
    FaMapPin,
    FaMapSigns,
    FaMap,
    FaMarker,
    FaMarsDouble,
    FaMarsStrokeH,
    FaMarsStrokeV,
    FaMarsStroke,
    FaMars,
    FaMask,
    FaMedal,
    FaMedkit,
    FaMehBlank,
    FaMehRollingEyes,
    FaMeh,
    FaMemory,
    FaMenorah,
    FaMercury,
    FaMeteor,
    FaMicrochip,
    FaMicrophoneAltSlash,
    FaMicrophoneAlt,
    FaMicrophoneSlash,
    FaMicrophone,
    FaMicroscope,
    FaMinusCircle,
    FaMinusSquare,
    FaMinus,
    FaMitten,
    FaMobileAlt,
    FaMobile,
    FaMoneyBillAlt,
    FaMoneyBillWaveAlt,
    FaMoneyBillWave,
    FaMoneyBill,
    FaMoneyCheckAlt,
    FaMoneyCheck,
    FaMonument,
    FaMoon,
    FaMortarPestle,
    FaMosque,
    FaMotorcycle,
    FaMountain,
    FaMousePointer,
    FaMouse,
    FaMugHot,
    FaMusic,
    FaNetworkWired,
    FaNeuter,
    FaNewspaper,
    FaNotEqual,
    FaNotesMedical,
    FaObjectGroup,
    FaObjectUngroup,
    FaOilCan,
    FaOm,
    FaOtter,
    FaOutdent,
    FaPager,
    FaPaintBrush,
    FaPaintRoller,
    FaPalette,
    FaPallet,
    FaPaperPlane,
    FaPaperclip,
    FaParachuteBox,
    FaParagraph,
    FaParking,
    FaPassport,
    FaPastafarianism,
    FaPaste,
    FaPauseCircle,
    FaPause,
    FaPaw,
    FaPeace,
    FaPenAlt,
    FaPenFancy,
    FaPenNib,
    FaPenSquare,
    FaPen,
    FaPencilAlt,
    FaPencilRuler,
    FaPeopleArrows,
    FaPeopleCarry,
    FaPepperHot,
    FaPercent,
    FaPercentage,
    FaPersonBooth,
    FaPhoneAlt,
    FaPhoneSlash,
    FaPhoneSquareAlt,
    FaPhoneSquare,
    FaPhoneVolume,
    FaPhone,
    FaPhotoVideo,
    FaPiggyBank,
    FaPills,
    FaPizzaSlice,
    FaPlaceOfWorship,
    FaPlaneArrival,
    FaPlaneDeparture,
    FaPlaneSlash,
    FaPlane,
    FaPlayCircle,
    FaPlay,
    FaPlug,
    FaPlusCircle,
    FaPlusSquare,
    FaPlus,
    FaPodcast,
    FaPollH,
    FaPoll,
    FaPooStorm,
    FaPoo,
    FaPoop,
    FaPortrait,
    FaPoundSign,
    FaPowerOff,
    FaPray,
    FaPrayingHands,
    FaPrescriptionBottleAlt,
    FaPrescriptionBottle,
    FaPrescription,
    FaPrint,
    FaProcedures,
    FaProjectDiagram,
    FaPumpMedical,
    FaPumpSoap,
    FaPuzzlePiece,
    FaQrcode,
    FaQuestionCircle,
    FaQuestion,
    FaQuidditch,
    FaQuoteLeft,
    FaQuoteRight,
    FaQuran,
    FaRadiationAlt,
    FaRadiation,
    FaRainbow,
    FaRandom,
    FaReceipt,
    FaRecordVinyl,
    FaRecycle,
    FaRedoAlt,
    FaRedo,
    FaRegistered,
    FaRemoveFormat,
    FaReplyAll,
    FaReply,
    FaRepublican,
    FaRestroom,
    FaRetweet,
    FaRibbon,
    FaRing,
    FaRoad,
    FaRobot,
    FaRocket,
    FaRoute,
    FaRssSquare,
    FaRss,
    FaRubleSign,
    FaRulerCombined,
    FaRulerHorizontal,
    FaRulerVertical,
    FaRuler,
    FaRunning,
    FaRupeeSign,
    FaSadCry,
    FaSadTear,
    FaSatelliteDish,
    FaSatellite,
    FaSave,
    FaSchool,
    FaScrewdriver,
    FaScroll,
    FaSdCard,
    FaSearchDollar,
    FaSearchLocation,
    FaSearchMinus,
    FaSearchPlus,
    FaSearch,
    FaSeedling,
    FaServer,
    FaShapes,
    FaShareAltSquare,
    FaShareAlt,
    FaShareSquare,
    FaShare,
    FaShekelSign,
    FaShieldAlt,
    FaShieldVirus,
    FaShip,
    FaShippingFast,
    FaShoePrints,
    FaShoppingBag,
    FaShoppingBasket,
    FaShoppingCart,
    FaShower,
    FaShuttleVan,
    FaSignInAlt,
    FaSignLanguage,
    FaSignOutAlt,
    FaSign,
    FaSignal,
    FaSignature,
    FaSimCard,
    FaSink,
    FaSitemap,
    FaSkating,
    FaSkiingNordic,
    FaSkiing,
    FaSkullCrossbones,
    FaSkull,
    FaSlash,
    FaSleigh,
    FaSlidersH,
    FaSmileBeam,
    FaSmileWink,
    FaSmile,
    FaSmog,
    FaSmokingBan,
    FaSmoking,
    FaSms,
    FaSnowboarding,
    FaSnowflake,
    FaSnowman,
    FaSnowplow,
    FaSoap,
    FaSocks,
    FaSolarPanel,
    FaSortAlphaDownAlt,
    FaSortAlphaDown,
    FaSortAlphaUpAlt,
    FaSortAlphaUp,
    FaSortAmountDownAlt,
    FaSortAmountDown,
    FaSortAmountUpAlt,
    FaSortAmountUp,
    FaSortDown,
    FaSortNumericDownAlt,
    FaSortNumericDown,
    FaSortNumericUpAlt,
    FaSortNumericUp,
    FaSortUp,
    FaSort,
    FaSpa,
    FaSpaceShuttle,
    FaSpellCheck,
    FaSpider,
    FaSpinner,
    FaSplotch,
    FaSprayCan,
    FaSquareFull,
    FaSquareRootAlt,
    FaSquare,
    FaStamp,
    FaStarAndCrescent,
    FaStarHalfAlt,
    FaStarHalf,
    FaStarOfDavid,
    FaStarOfLife,
    FaStar,
    FaStepBackward,
    FaStepForward,
    FaStethoscope,
    FaStickyNote,
    FaStopCircle,
    FaStop,
    FaStopwatch20,
    FaStopwatch,
    FaStoreAltSlash,
    FaStoreAlt,
    FaStoreSlash,
    FaStore,
    FaStream,
    FaStreetView,
    FaStrikethrough,
    FaStroopwafel,
    FaSubscript,
    FaSubway,
    FaSuitcaseRolling,
    FaSuitcase,
    FaSun,
    FaSuperscript,
    FaSurprise,
    FaSwatchbook,
    FaSwimmer,
    FaSwimmingPool,
    FaSynagogue,
    FaSyncAlt,
    FaSync,
    FaSyringe,
    FaTableTennis,
    FaTable,
    FaTabletAlt,
    FaTablet,
    FaTablets,
    FaTachometerAlt,
    FaTag,
    FaTags,
    FaTape,
    FaTasks,
    FaTaxi,
    FaTeethOpen,
    FaTeeth,
    FaTemperatureHigh,
    FaTemperatureLow,
    FaTenge,
    FaTerminal,
    FaTextHeight,
    FaTextWidth,
    FaThLarge,
    FaThList,
    FaTh,
    FaTheaterMasks,
    FaThermometerEmpty,
    FaThermometerFull,
    FaThermometerHalf,
    FaThermometerQuarter,
    FaThermometerThreeQuarters,
    FaThermometer,
    FaThumbsDown,
    FaThumbsUp,
    FaThumbtack,
    FaTicketAlt,
    FaTimesCircle,
    FaTimes,
    FaTintSlash,
    FaTint,
    FaTired,
    FaToggleOff,
    FaToggleOn,
    FaToiletPaperSlash,
    FaToiletPaper,
    FaToilet,
    FaToolbox,
    FaTools,
    FaTooth,
    FaTorah,
    FaToriiGate,
    FaTractor,
    FaTrademark,
    FaTrafficLight,
    FaTrailer,
    FaTrain,
    FaTram,
    FaTransgenderAlt,
    FaTransgender,
    FaTrashAlt,
    FaTrashRestoreAlt,
    FaTrashRestore,
    FaTrash,
    FaTree,
    FaTrophy,
    FaTruckLoading,
    FaTruckMonster,
    FaTruckMoving,
    FaTruckPickup,
    FaTruck,
    FaTshirt,
    FaTty,
    FaTv,
    FaUmbrellaBeach,
    FaUmbrella,
    FaUnderline,
    FaUndoAlt,
    FaUndo,
    FaUniversalAccess,
    FaUniversity,
    FaUnlink,
    FaUnlockAlt,
    FaUnlock,
    FaUpload,
    FaUserAltSlash,
    FaUserAlt,
    FaUserAstronaut,
    FaUserCheck,
    FaUserCircle,
    FaUserClock,
    FaUserCog,
    FaUserEdit,
    FaUserFriends,
    FaUserGraduate,
    FaUserInjured,
    FaUserLock,
    FaUserMd,
    FaUserMinus,
    FaUserNinja,
    FaUserNurse,
    FaUserPlus,
    FaUserSecret,
    FaUserShield,
    FaUserSlash,
    FaUserTag,
    FaUserTie,
    FaUserTimes,
    FaUser,
    FaUsersCog,
    FaUsersSlash,
    FaUsers,
    FaUtensilSpoon,
    FaUtensils,
    FaVectorSquare,
    FaVenusDouble,
    FaVenusMars,
    FaVenus,
    FaVestPatches,
    FaVest,
    FaVial,
    FaVials,
    FaVideoSlash,
    FaVideo,
    FaVihara,
    FaVirusSlash,
    FaVirus,
    FaViruses,
    FaVoicemail,
    FaVolleyballBall,
    FaVolumeDown,
    FaVolumeMute,
    FaVolumeOff,
    FaVolumeUp,
    FaVoteYea,
    FaVrCardboard,
    FaWalking,
    FaWallet,
    FaWarehouse,
    FaWater,
    FaWaveSquare,
    FaWeightHanging,
    FaWeight,
    FaWheelchair,
    FaWifi,
    FaWind,
    FaWindowClose,
    FaWindowMaximize,
    FaWindowMinimize,
    FaWindowRestore,
    FaWineBottle,
    FaWineGlassAlt,
    FaWineGlass,
    FaWonSign,
    FaWrench,
    FaXRay,
    FaYenSign,
    FaYinYang,
    FaRegAddressBook,
    FaRegAddressCard,
    FaRegAngry,
    FaRegArrowAltCircleDown,
    FaRegArrowAltCircleLeft,
    FaRegArrowAltCircleRight,
    FaRegArrowAltCircleUp,
    FaRegBellSlash,
    FaRegBell,
    FaRegBookmark,
    FaRegBuilding,
    FaRegCalendarAlt,
    FaRegCalendarCheck,
    FaRegCalendarMinus,
    FaRegCalendarPlus,
    FaRegCalendarTimes,
    FaRegCalendar,
    FaRegCaretSquareDown,
    FaRegCaretSquareLeft,
    FaRegCaretSquareRight,
    FaRegCaretSquareUp,
    FaRegChartBar,
    FaRegCheckCircle,
    FaRegCheckSquare,
    FaRegCircle,
    FaRegClipboard,
    FaRegClock,
    FaRegClone,
    FaRegClosedCaptioning,
    FaRegCommentAlt,
    FaRegCommentDots,
    FaRegComment,
    FaRegComments,
    FaRegCompass,
    FaRegCopy,
    FaRegCopyright,
    FaRegCreditCard,
    FaRegDizzy,
    FaRegDotCircle,
    FaRegEdit,
    FaRegEnvelopeOpen,
    FaRegEnvelope,
    FaRegEyeSlash,
    FaRegEye,
    FaRegFileAlt,
    FaRegFileArchive,
    FaRegFileAudio,
    FaRegFileCode,
    FaRegFileExcel,
    FaRegFileImage,
    FaRegFilePdf,
    FaRegFilePowerpoint,
    FaRegFileVideo,
    FaRegFileWord,
    FaRegFile,
    FaRegFlag,
    FaRegFlushed,
    FaRegFolderOpen,
    FaRegFolder,
    FaRegFontAwesomeLogoFull,
    FaRegFrownOpen,
    FaRegFrown,
    FaRegFutbol,
    FaRegGem,
    FaRegGrimace,
    FaRegGrinAlt,
    FaRegGrinBeamSweat,
    FaRegGrinBeam,
    FaRegGrinHearts,
    FaRegGrinSquintTears,
    FaRegGrinSquint,
    FaRegGrinStars,
    FaRegGrinTears,
    FaRegGrinTongueSquint,
    FaRegGrinTongueWink,
    FaRegGrinTongue,
    FaRegGrinWink,
    FaRegGrin,
    FaRegHandLizard,
    FaRegHandPaper,
    FaRegHandPeace,
    FaRegHandPointDown,
    FaRegHandPointLeft,
    FaRegHandPointRight,
    FaRegHandPointUp,
    FaRegHandPointer,
    FaRegHandRock,
    FaRegHandScissors,
    FaRegHandSpock,
    FaRegHandshake,
    FaRegHdd,
    FaRegHeart,
    FaRegHospital,
    FaRegHourglass,
    FaRegIdBadge,
    FaRegIdCard,
    FaRegImage,
    FaRegImages,
    FaRegKeyboard,
    FaRegKissBeam,
    FaRegKissWinkHeart,
    FaRegKiss,
    FaRegLaughBeam,
    FaRegLaughSquint,
    FaRegLaughWink,
    FaRegLaugh,
    FaRegLemon,
    FaRegLifeRing,
    FaRegLightbulb,
    FaRegListAlt,
    FaRegMap,
    FaRegMehBlank,
    FaRegMehRollingEyes,
    FaRegMeh,
    FaRegMinusSquare,
    FaRegMoneyBillAlt,
    FaRegMoon,
    FaRegNewspaper,
    FaRegObjectGroup,
    FaRegObjectUngroup,
    FaRegPaperPlane,
    FaRegPauseCircle,
    FaRegPlayCircle,
    FaRegPlusSquare,
    FaRegQuestionCircle,
    FaRegRegistered,
    FaRegSadCry,
    FaRegSadTear,
    FaRegSave,
    FaRegShareSquare,
    FaRegSmileBeam,
    FaRegSmileWink,
    FaRegSmile,
    FaRegSnowflake,
    FaRegSquare,
    FaRegStarHalf,
    FaRegStar,
    FaRegStickyNote,
    FaRegStopCircle,
    FaRegSun,
    FaRegSurprise,
    FaRegThumbsDown,
    FaRegThumbsUp,
    FaRegTimesCircle,
    FaRegTired,
    FaRegTrashAlt,
    FaRegUserCircle,
    FaRegUser,
    FaRegWindowClose,
    FaRegWindowMaximize,
    FaRegWindowMinimize,
    FaRegWindowRestore,
} from "react-icons/fa"

export function nameToReactIcon_fa_1(iconName: string): IconType | undefined {

    switch(iconName) {
        case "fa:FaLongArrowAltUp":
            return FaLongArrowAltUp;
        case "fa:FaLowVision":
            return FaLowVision;
        case "fa:FaLuggageCart":
            return FaLuggageCart;
        case "fa:FaLungsVirus":
            return FaLungsVirus;
        case "fa:FaLungs":
            return FaLungs;
        case "fa:FaMagic":
            return FaMagic;
        case "fa:FaMagnet":
            return FaMagnet;
        case "fa:FaMailBulk":
            return FaMailBulk;
        case "fa:FaMale":
            return FaMale;
        case "fa:FaMapMarkedAlt":
            return FaMapMarkedAlt;
        case "fa:FaMapMarked":
            return FaMapMarked;
        case "fa:FaMapMarkerAlt":
            return FaMapMarkerAlt;
        case "fa:FaMapMarker":
            return FaMapMarker;
        case "fa:FaMapPin":
            return FaMapPin;
        case "fa:FaMapSigns":
            return FaMapSigns;
        case "fa:FaMap":
            return FaMap;
        case "fa:FaMarker":
            return FaMarker;
        case "fa:FaMarsDouble":
            return FaMarsDouble;
        case "fa:FaMarsStrokeH":
            return FaMarsStrokeH;
        case "fa:FaMarsStrokeV":
            return FaMarsStrokeV;
        case "fa:FaMarsStroke":
            return FaMarsStroke;
        case "fa:FaMars":
            return FaMars;
        case "fa:FaMask":
            return FaMask;
        case "fa:FaMedal":
            return FaMedal;
        case "fa:FaMedkit":
            return FaMedkit;
        case "fa:FaMehBlank":
            return FaMehBlank;
        case "fa:FaMehRollingEyes":
            return FaMehRollingEyes;
        case "fa:FaMeh":
            return FaMeh;
        case "fa:FaMemory":
            return FaMemory;
        case "fa:FaMenorah":
            return FaMenorah;
        case "fa:FaMercury":
            return FaMercury;
        case "fa:FaMeteor":
            return FaMeteor;
        case "fa:FaMicrochip":
            return FaMicrochip;
        case "fa:FaMicrophoneAltSlash":
            return FaMicrophoneAltSlash;
        case "fa:FaMicrophoneAlt":
            return FaMicrophoneAlt;
        case "fa:FaMicrophoneSlash":
            return FaMicrophoneSlash;
        case "fa:FaMicrophone":
            return FaMicrophone;
        case "fa:FaMicroscope":
            return FaMicroscope;
        case "fa:FaMinusCircle":
            return FaMinusCircle;
        case "fa:FaMinusSquare":
            return FaMinusSquare;
        case "fa:FaMinus":
            return FaMinus;
        case "fa:FaMitten":
            return FaMitten;
        case "fa:FaMobileAlt":
            return FaMobileAlt;
        case "fa:FaMobile":
            return FaMobile;
        case "fa:FaMoneyBillAlt":
            return FaMoneyBillAlt;
        case "fa:FaMoneyBillWaveAlt":
            return FaMoneyBillWaveAlt;
        case "fa:FaMoneyBillWave":
            return FaMoneyBillWave;
        case "fa:FaMoneyBill":
            return FaMoneyBill;
        case "fa:FaMoneyCheckAlt":
            return FaMoneyCheckAlt;
        case "fa:FaMoneyCheck":
            return FaMoneyCheck;
        case "fa:FaMonument":
            return FaMonument;
        case "fa:FaMoon":
            return FaMoon;
        case "fa:FaMortarPestle":
            return FaMortarPestle;
        case "fa:FaMosque":
            return FaMosque;
        case "fa:FaMotorcycle":
            return FaMotorcycle;
        case "fa:FaMountain":
            return FaMountain;
        case "fa:FaMousePointer":
            return FaMousePointer;
        case "fa:FaMouse":
            return FaMouse;
        case "fa:FaMugHot":
            return FaMugHot;
        case "fa:FaMusic":
            return FaMusic;
        case "fa:FaNetworkWired":
            return FaNetworkWired;
        case "fa:FaNeuter":
            return FaNeuter;
        case "fa:FaNewspaper":
            return FaNewspaper;
        case "fa:FaNotEqual":
            return FaNotEqual;
        case "fa:FaNotesMedical":
            return FaNotesMedical;
        case "fa:FaObjectGroup":
            return FaObjectGroup;
        case "fa:FaObjectUngroup":
            return FaObjectUngroup;
        case "fa:FaOilCan":
            return FaOilCan;
        case "fa:FaOm":
            return FaOm;
        case "fa:FaOtter":
            return FaOtter;
        case "fa:FaOutdent":
            return FaOutdent;
        case "fa:FaPager":
            return FaPager;
        case "fa:FaPaintBrush":
            return FaPaintBrush;
        case "fa:FaPaintRoller":
            return FaPaintRoller;
        case "fa:FaPalette":
            return FaPalette;
        case "fa:FaPallet":
            return FaPallet;
        case "fa:FaPaperPlane":
            return FaPaperPlane;
        case "fa:FaPaperclip":
            return FaPaperclip;
        case "fa:FaParachuteBox":
            return FaParachuteBox;
        case "fa:FaParagraph":
            return FaParagraph;
        case "fa:FaParking":
            return FaParking;
        case "fa:FaPassport":
            return FaPassport;
        case "fa:FaPastafarianism":
            return FaPastafarianism;
        case "fa:FaPaste":
            return FaPaste;
        case "fa:FaPauseCircle":
            return FaPauseCircle;
        case "fa:FaPause":
            return FaPause;
        case "fa:FaPaw":
            return FaPaw;
        case "fa:FaPeace":
            return FaPeace;
        case "fa:FaPenAlt":
            return FaPenAlt;
        case "fa:FaPenFancy":
            return FaPenFancy;
        case "fa:FaPenNib":
            return FaPenNib;
        case "fa:FaPenSquare":
            return FaPenSquare;
        case "fa:FaPen":
            return FaPen;
        case "fa:FaPencilAlt":
            return FaPencilAlt;
        case "fa:FaPencilRuler":
            return FaPencilRuler;
        case "fa:FaPeopleArrows":
            return FaPeopleArrows;
        case "fa:FaPeopleCarry":
            return FaPeopleCarry;
        case "fa:FaPepperHot":
            return FaPepperHot;
        case "fa:FaPercent":
            return FaPercent;
        case "fa:FaPercentage":
            return FaPercentage;
        case "fa:FaPersonBooth":
            return FaPersonBooth;
        case "fa:FaPhoneAlt":
            return FaPhoneAlt;
        case "fa:FaPhoneSlash":
            return FaPhoneSlash;
        case "fa:FaPhoneSquareAlt":
            return FaPhoneSquareAlt;
        case "fa:FaPhoneSquare":
            return FaPhoneSquare;
        case "fa:FaPhoneVolume":
            return FaPhoneVolume;
        case "fa:FaPhone":
            return FaPhone;
        case "fa:FaPhotoVideo":
            return FaPhotoVideo;
        case "fa:FaPiggyBank":
            return FaPiggyBank;
        case "fa:FaPills":
            return FaPills;
        case "fa:FaPizzaSlice":
            return FaPizzaSlice;
        case "fa:FaPlaceOfWorship":
            return FaPlaceOfWorship;
        case "fa:FaPlaneArrival":
            return FaPlaneArrival;
        case "fa:FaPlaneDeparture":
            return FaPlaneDeparture;
        case "fa:FaPlaneSlash":
            return FaPlaneSlash;
        case "fa:FaPlane":
            return FaPlane;
        case "fa:FaPlayCircle":
            return FaPlayCircle;
        case "fa:FaPlay":
            return FaPlay;
        case "fa:FaPlug":
            return FaPlug;
        case "fa:FaPlusCircle":
            return FaPlusCircle;
        case "fa:FaPlusSquare":
            return FaPlusSquare;
        case "fa:FaPlus":
            return FaPlus;
        case "fa:FaPodcast":
            return FaPodcast;
        case "fa:FaPollH":
            return FaPollH;
        case "fa:FaPoll":
            return FaPoll;
        case "fa:FaPooStorm":
            return FaPooStorm;
        case "fa:FaPoo":
            return FaPoo;
        case "fa:FaPoop":
            return FaPoop;
        case "fa:FaPortrait":
            return FaPortrait;
        case "fa:FaPoundSign":
            return FaPoundSign;
        case "fa:FaPowerOff":
            return FaPowerOff;
        case "fa:FaPray":
            return FaPray;
        case "fa:FaPrayingHands":
            return FaPrayingHands;
        case "fa:FaPrescriptionBottleAlt":
            return FaPrescriptionBottleAlt;
        case "fa:FaPrescriptionBottle":
            return FaPrescriptionBottle;
        case "fa:FaPrescription":
            return FaPrescription;
        case "fa:FaPrint":
            return FaPrint;
        case "fa:FaProcedures":
            return FaProcedures;
        case "fa:FaProjectDiagram":
            return FaProjectDiagram;
        case "fa:FaPumpMedical":
            return FaPumpMedical;
        case "fa:FaPumpSoap":
            return FaPumpSoap;
        case "fa:FaPuzzlePiece":
            return FaPuzzlePiece;
        case "fa:FaQrcode":
            return FaQrcode;
        case "fa:FaQuestionCircle":
            return FaQuestionCircle;
        case "fa:FaQuestion":
            return FaQuestion;
        case "fa:FaQuidditch":
            return FaQuidditch;
        case "fa:FaQuoteLeft":
            return FaQuoteLeft;
        case "fa:FaQuoteRight":
            return FaQuoteRight;
        case "fa:FaQuran":
            return FaQuran;
        case "fa:FaRadiationAlt":
            return FaRadiationAlt;
        case "fa:FaRadiation":
            return FaRadiation;
        case "fa:FaRainbow":
            return FaRainbow;
        case "fa:FaRandom":
            return FaRandom;
        case "fa:FaReceipt":
            return FaReceipt;
        case "fa:FaRecordVinyl":
            return FaRecordVinyl;
        case "fa:FaRecycle":
            return FaRecycle;
        case "fa:FaRedoAlt":
            return FaRedoAlt;
        case "fa:FaRedo":
            return FaRedo;
        case "fa:FaRegistered":
            return FaRegistered;
        case "fa:FaRemoveFormat":
            return FaRemoveFormat;
        case "fa:FaReplyAll":
            return FaReplyAll;
        case "fa:FaReply":
            return FaReply;
        case "fa:FaRepublican":
            return FaRepublican;
        case "fa:FaRestroom":
            return FaRestroom;
        case "fa:FaRetweet":
            return FaRetweet;
        case "fa:FaRibbon":
            return FaRibbon;
        case "fa:FaRing":
            return FaRing;
        case "fa:FaRoad":
            return FaRoad;
        case "fa:FaRobot":
            return FaRobot;
        case "fa:FaRocket":
            return FaRocket;
        case "fa:FaRoute":
            return FaRoute;
        case "fa:FaRssSquare":
            return FaRssSquare;
        case "fa:FaRss":
            return FaRss;
        case "fa:FaRubleSign":
            return FaRubleSign;
        case "fa:FaRulerCombined":
            return FaRulerCombined;
        case "fa:FaRulerHorizontal":
            return FaRulerHorizontal;
        case "fa:FaRulerVertical":
            return FaRulerVertical;
        case "fa:FaRuler":
            return FaRuler;
        case "fa:FaRunning":
            return FaRunning;
        case "fa:FaRupeeSign":
            return FaRupeeSign;
        case "fa:FaSadCry":
            return FaSadCry;
        case "fa:FaSadTear":
            return FaSadTear;
        case "fa:FaSatelliteDish":
            return FaSatelliteDish;
        case "fa:FaSatellite":
            return FaSatellite;
        case "fa:FaSave":
            return FaSave;
        case "fa:FaSchool":
            return FaSchool;
        case "fa:FaScrewdriver":
            return FaScrewdriver;
        case "fa:FaScroll":
            return FaScroll;
        case "fa:FaSdCard":
            return FaSdCard;
        case "fa:FaSearchDollar":
            return FaSearchDollar;
        case "fa:FaSearchLocation":
            return FaSearchLocation;
        case "fa:FaSearchMinus":
            return FaSearchMinus;
        case "fa:FaSearchPlus":
            return FaSearchPlus;
        case "fa:FaSearch":
            return FaSearch;
        case "fa:FaSeedling":
            return FaSeedling;
        case "fa:FaServer":
            return FaServer;
        case "fa:FaShapes":
            return FaShapes;
        case "fa:FaShareAltSquare":
            return FaShareAltSquare;
        case "fa:FaShareAlt":
            return FaShareAlt;
        case "fa:FaShareSquare":
            return FaShareSquare;
        case "fa:FaShare":
            return FaShare;
        case "fa:FaShekelSign":
            return FaShekelSign;
        case "fa:FaShieldAlt":
            return FaShieldAlt;
        case "fa:FaShieldVirus":
            return FaShieldVirus;
        case "fa:FaShip":
            return FaShip;
        case "fa:FaShippingFast":
            return FaShippingFast;
        case "fa:FaShoePrints":
            return FaShoePrints;
        case "fa:FaShoppingBag":
            return FaShoppingBag;
        case "fa:FaShoppingBasket":
            return FaShoppingBasket;
        case "fa:FaShoppingCart":
            return FaShoppingCart;
        case "fa:FaShower":
            return FaShower;
        case "fa:FaShuttleVan":
            return FaShuttleVan;
        case "fa:FaSignInAlt":
            return FaSignInAlt;
        case "fa:FaSignLanguage":
            return FaSignLanguage;
        case "fa:FaSignOutAlt":
            return FaSignOutAlt;
        case "fa:FaSign":
            return FaSign;
        case "fa:FaSignal":
            return FaSignal;
        case "fa:FaSignature":
            return FaSignature;
        case "fa:FaSimCard":
            return FaSimCard;
        case "fa:FaSink":
            return FaSink;
        case "fa:FaSitemap":
            return FaSitemap;
        case "fa:FaSkating":
            return FaSkating;
        case "fa:FaSkiingNordic":
            return FaSkiingNordic;
        case "fa:FaSkiing":
            return FaSkiing;
        case "fa:FaSkullCrossbones":
            return FaSkullCrossbones;
        case "fa:FaSkull":
            return FaSkull;
        case "fa:FaSlash":
            return FaSlash;
        case "fa:FaSleigh":
            return FaSleigh;
        case "fa:FaSlidersH":
            return FaSlidersH;
        case "fa:FaSmileBeam":
            return FaSmileBeam;
        case "fa:FaSmileWink":
            return FaSmileWink;
        case "fa:FaSmile":
            return FaSmile;
        case "fa:FaSmog":
            return FaSmog;
        case "fa:FaSmokingBan":
            return FaSmokingBan;
        case "fa:FaSmoking":
            return FaSmoking;
        case "fa:FaSms":
            return FaSms;
        case "fa:FaSnowboarding":
            return FaSnowboarding;
        case "fa:FaSnowflake":
            return FaSnowflake;
        case "fa:FaSnowman":
            return FaSnowman;
        case "fa:FaSnowplow":
            return FaSnowplow;
        case "fa:FaSoap":
            return FaSoap;
        case "fa:FaSocks":
            return FaSocks;
        case "fa:FaSolarPanel":
            return FaSolarPanel;
        case "fa:FaSortAlphaDownAlt":
            return FaSortAlphaDownAlt;
        case "fa:FaSortAlphaDown":
            return FaSortAlphaDown;
        case "fa:FaSortAlphaUpAlt":
            return FaSortAlphaUpAlt;
        case "fa:FaSortAlphaUp":
            return FaSortAlphaUp;
        case "fa:FaSortAmountDownAlt":
            return FaSortAmountDownAlt;
        case "fa:FaSortAmountDown":
            return FaSortAmountDown;
        case "fa:FaSortAmountUpAlt":
            return FaSortAmountUpAlt;
        case "fa:FaSortAmountUp":
            return FaSortAmountUp;
        case "fa:FaSortDown":
            return FaSortDown;
        case "fa:FaSortNumericDownAlt":
            return FaSortNumericDownAlt;
        case "fa:FaSortNumericDown":
            return FaSortNumericDown;
        case "fa:FaSortNumericUpAlt":
            return FaSortNumericUpAlt;
        case "fa:FaSortNumericUp":
            return FaSortNumericUp;
        case "fa:FaSortUp":
            return FaSortUp;
        case "fa:FaSort":
            return FaSort;
        case "fa:FaSpa":
            return FaSpa;
        case "fa:FaSpaceShuttle":
            return FaSpaceShuttle;
        case "fa:FaSpellCheck":
            return FaSpellCheck;
        case "fa:FaSpider":
            return FaSpider;
        case "fa:FaSpinner":
            return FaSpinner;
        case "fa:FaSplotch":
            return FaSplotch;
        case "fa:FaSprayCan":
            return FaSprayCan;
        case "fa:FaSquareFull":
            return FaSquareFull;
        case "fa:FaSquareRootAlt":
            return FaSquareRootAlt;
        case "fa:FaSquare":
            return FaSquare;
        case "fa:FaStamp":
            return FaStamp;
        case "fa:FaStarAndCrescent":
            return FaStarAndCrescent;
        case "fa:FaStarHalfAlt":
            return FaStarHalfAlt;
        case "fa:FaStarHalf":
            return FaStarHalf;
        case "fa:FaStarOfDavid":
            return FaStarOfDavid;
        case "fa:FaStarOfLife":
            return FaStarOfLife;
        case "fa:FaStar":
            return FaStar;
        case "fa:FaStepBackward":
            return FaStepBackward;
        case "fa:FaStepForward":
            return FaStepForward;
        case "fa:FaStethoscope":
            return FaStethoscope;
        case "fa:FaStickyNote":
            return FaStickyNote;
        case "fa:FaStopCircle":
            return FaStopCircle;
        case "fa:FaStop":
            return FaStop;
        case "fa:FaStopwatch20":
            return FaStopwatch20;
        case "fa:FaStopwatch":
            return FaStopwatch;
        case "fa:FaStoreAltSlash":
            return FaStoreAltSlash;
        case "fa:FaStoreAlt":
            return FaStoreAlt;
        case "fa:FaStoreSlash":
            return FaStoreSlash;
        case "fa:FaStore":
            return FaStore;
        case "fa:FaStream":
            return FaStream;
        case "fa:FaStreetView":
            return FaStreetView;
        case "fa:FaStrikethrough":
            return FaStrikethrough;
        case "fa:FaStroopwafel":
            return FaStroopwafel;
        case "fa:FaSubscript":
            return FaSubscript;
        case "fa:FaSubway":
            return FaSubway;
        case "fa:FaSuitcaseRolling":
            return FaSuitcaseRolling;
        case "fa:FaSuitcase":
            return FaSuitcase;
        case "fa:FaSun":
            return FaSun;
        case "fa:FaSuperscript":
            return FaSuperscript;
        case "fa:FaSurprise":
            return FaSurprise;
        case "fa:FaSwatchbook":
            return FaSwatchbook;
        case "fa:FaSwimmer":
            return FaSwimmer;
        case "fa:FaSwimmingPool":
            return FaSwimmingPool;
        case "fa:FaSynagogue":
            return FaSynagogue;
        case "fa:FaSyncAlt":
            return FaSyncAlt;
        case "fa:FaSync":
            return FaSync;
        case "fa:FaSyringe":
            return FaSyringe;
        case "fa:FaTableTennis":
            return FaTableTennis;
        case "fa:FaTable":
            return FaTable;
        case "fa:FaTabletAlt":
            return FaTabletAlt;
        case "fa:FaTablet":
            return FaTablet;
        case "fa:FaTablets":
            return FaTablets;
        case "fa:FaTachometerAlt":
            return FaTachometerAlt;
        case "fa:FaTag":
            return FaTag;
        case "fa:FaTags":
            return FaTags;
        case "fa:FaTape":
            return FaTape;
        case "fa:FaTasks":
            return FaTasks;
        case "fa:FaTaxi":
            return FaTaxi;
        case "fa:FaTeethOpen":
            return FaTeethOpen;
        case "fa:FaTeeth":
            return FaTeeth;
        case "fa:FaTemperatureHigh":
            return FaTemperatureHigh;
        case "fa:FaTemperatureLow":
            return FaTemperatureLow;
        case "fa:FaTenge":
            return FaTenge;
        case "fa:FaTerminal":
            return FaTerminal;
        case "fa:FaTextHeight":
            return FaTextHeight;
        case "fa:FaTextWidth":
            return FaTextWidth;
        case "fa:FaThLarge":
            return FaThLarge;
        case "fa:FaThList":
            return FaThList;
        case "fa:FaTh":
            return FaTh;
        case "fa:FaTheaterMasks":
            return FaTheaterMasks;
        case "fa:FaThermometerEmpty":
            return FaThermometerEmpty;
        case "fa:FaThermometerFull":
            return FaThermometerFull;
        case "fa:FaThermometerHalf":
            return FaThermometerHalf;
        case "fa:FaThermometerQuarter":
            return FaThermometerQuarter;
        case "fa:FaThermometerThreeQuarters":
            return FaThermometerThreeQuarters;
        case "fa:FaThermometer":
            return FaThermometer;
        case "fa:FaThumbsDown":
            return FaThumbsDown;
        case "fa:FaThumbsUp":
            return FaThumbsUp;
        case "fa:FaThumbtack":
            return FaThumbtack;
        case "fa:FaTicketAlt":
            return FaTicketAlt;
        case "fa:FaTimesCircle":
            return FaTimesCircle;
        case "fa:FaTimes":
            return FaTimes;
        case "fa:FaTintSlash":
            return FaTintSlash;
        case "fa:FaTint":
            return FaTint;
        case "fa:FaTired":
            return FaTired;
        case "fa:FaToggleOff":
            return FaToggleOff;
        case "fa:FaToggleOn":
            return FaToggleOn;
        case "fa:FaToiletPaperSlash":
            return FaToiletPaperSlash;
        case "fa:FaToiletPaper":
            return FaToiletPaper;
        case "fa:FaToilet":
            return FaToilet;
        case "fa:FaToolbox":
            return FaToolbox;
        case "fa:FaTools":
            return FaTools;
        case "fa:FaTooth":
            return FaTooth;
        case "fa:FaTorah":
            return FaTorah;
        case "fa:FaToriiGate":
            return FaToriiGate;
        case "fa:FaTractor":
            return FaTractor;
        case "fa:FaTrademark":
            return FaTrademark;
        case "fa:FaTrafficLight":
            return FaTrafficLight;
        case "fa:FaTrailer":
            return FaTrailer;
        case "fa:FaTrain":
            return FaTrain;
        case "fa:FaTram":
            return FaTram;
        case "fa:FaTransgenderAlt":
            return FaTransgenderAlt;
        case "fa:FaTransgender":
            return FaTransgender;
        case "fa:FaTrashAlt":
            return FaTrashAlt;
        case "fa:FaTrashRestoreAlt":
            return FaTrashRestoreAlt;
        case "fa:FaTrashRestore":
            return FaTrashRestore;
        case "fa:FaTrash":
            return FaTrash;
        case "fa:FaTree":
            return FaTree;
        case "fa:FaTrophy":
            return FaTrophy;
        case "fa:FaTruckLoading":
            return FaTruckLoading;
        case "fa:FaTruckMonster":
            return FaTruckMonster;
        case "fa:FaTruckMoving":
            return FaTruckMoving;
        case "fa:FaTruckPickup":
            return FaTruckPickup;
        case "fa:FaTruck":
            return FaTruck;
        case "fa:FaTshirt":
            return FaTshirt;
        case "fa:FaTty":
            return FaTty;
        case "fa:FaTv":
            return FaTv;
        case "fa:FaUmbrellaBeach":
            return FaUmbrellaBeach;
        case "fa:FaUmbrella":
            return FaUmbrella;
        case "fa:FaUnderline":
            return FaUnderline;
        case "fa:FaUndoAlt":
            return FaUndoAlt;
        case "fa:FaUndo":
            return FaUndo;
        case "fa:FaUniversalAccess":
            return FaUniversalAccess;
        case "fa:FaUniversity":
            return FaUniversity;
        case "fa:FaUnlink":
            return FaUnlink;
        case "fa:FaUnlockAlt":
            return FaUnlockAlt;
        case "fa:FaUnlock":
            return FaUnlock;
        case "fa:FaUpload":
            return FaUpload;
        case "fa:FaUserAltSlash":
            return FaUserAltSlash;
        case "fa:FaUserAlt":
            return FaUserAlt;
        case "fa:FaUserAstronaut":
            return FaUserAstronaut;
        case "fa:FaUserCheck":
            return FaUserCheck;
        case "fa:FaUserCircle":
            return FaUserCircle;
        case "fa:FaUserClock":
            return FaUserClock;
        case "fa:FaUserCog":
            return FaUserCog;
        case "fa:FaUserEdit":
            return FaUserEdit;
        case "fa:FaUserFriends":
            return FaUserFriends;
        case "fa:FaUserGraduate":
            return FaUserGraduate;
        case "fa:FaUserInjured":
            return FaUserInjured;
        case "fa:FaUserLock":
            return FaUserLock;
        case "fa:FaUserMd":
            return FaUserMd;
        case "fa:FaUserMinus":
            return FaUserMinus;
        case "fa:FaUserNinja":
            return FaUserNinja;
        case "fa:FaUserNurse":
            return FaUserNurse;
        case "fa:FaUserPlus":
            return FaUserPlus;
        case "fa:FaUserSecret":
            return FaUserSecret;
        case "fa:FaUserShield":
            return FaUserShield;
        case "fa:FaUserSlash":
            return FaUserSlash;
        case "fa:FaUserTag":
            return FaUserTag;
        case "fa:FaUserTie":
            return FaUserTie;
        case "fa:FaUserTimes":
            return FaUserTimes;
        case "fa:FaUser":
            return FaUser;
        case "fa:FaUsersCog":
            return FaUsersCog;
        case "fa:FaUsersSlash":
            return FaUsersSlash;
        case "fa:FaUsers":
            return FaUsers;
        case "fa:FaUtensilSpoon":
            return FaUtensilSpoon;
        case "fa:FaUtensils":
            return FaUtensils;
        case "fa:FaVectorSquare":
            return FaVectorSquare;
        case "fa:FaVenusDouble":
            return FaVenusDouble;
        case "fa:FaVenusMars":
            return FaVenusMars;
        case "fa:FaVenus":
            return FaVenus;
        case "fa:FaVestPatches":
            return FaVestPatches;
        case "fa:FaVest":
            return FaVest;
        case "fa:FaVial":
            return FaVial;
        case "fa:FaVials":
            return FaVials;
        case "fa:FaVideoSlash":
            return FaVideoSlash;
        case "fa:FaVideo":
            return FaVideo;
        case "fa:FaVihara":
            return FaVihara;
        case "fa:FaVirusSlash":
            return FaVirusSlash;
        case "fa:FaVirus":
            return FaVirus;
        case "fa:FaViruses":
            return FaViruses;
        case "fa:FaVoicemail":
            return FaVoicemail;
        case "fa:FaVolleyballBall":
            return FaVolleyballBall;
        case "fa:FaVolumeDown":
            return FaVolumeDown;
        case "fa:FaVolumeMute":
            return FaVolumeMute;
        case "fa:FaVolumeOff":
            return FaVolumeOff;
        case "fa:FaVolumeUp":
            return FaVolumeUp;
        case "fa:FaVoteYea":
            return FaVoteYea;
        case "fa:FaVrCardboard":
            return FaVrCardboard;
        case "fa:FaWalking":
            return FaWalking;
        case "fa:FaWallet":
            return FaWallet;
        case "fa:FaWarehouse":
            return FaWarehouse;
        case "fa:FaWater":
            return FaWater;
        case "fa:FaWaveSquare":
            return FaWaveSquare;
        case "fa:FaWeightHanging":
            return FaWeightHanging;
        case "fa:FaWeight":
            return FaWeight;
        case "fa:FaWheelchair":
            return FaWheelchair;
        case "fa:FaWifi":
            return FaWifi;
        case "fa:FaWind":
            return FaWind;
        case "fa:FaWindowClose":
            return FaWindowClose;
        case "fa:FaWindowMaximize":
            return FaWindowMaximize;
        case "fa:FaWindowMinimize":
            return FaWindowMinimize;
        case "fa:FaWindowRestore":
            return FaWindowRestore;
        case "fa:FaWineBottle":
            return FaWineBottle;
        case "fa:FaWineGlassAlt":
            return FaWineGlassAlt;
        case "fa:FaWineGlass":
            return FaWineGlass;
        case "fa:FaWonSign":
            return FaWonSign;
        case "fa:FaWrench":
            return FaWrench;
        case "fa:FaXRay":
            return FaXRay;
        case "fa:FaYenSign":
            return FaYenSign;
        case "fa:FaYinYang":
            return FaYinYang;
        case "fa:FaRegAddressBook":
            return FaRegAddressBook;
        case "fa:FaRegAddressCard":
            return FaRegAddressCard;
        case "fa:FaRegAngry":
            return FaRegAngry;
        case "fa:FaRegArrowAltCircleDown":
            return FaRegArrowAltCircleDown;
        case "fa:FaRegArrowAltCircleLeft":
            return FaRegArrowAltCircleLeft;
        case "fa:FaRegArrowAltCircleRight":
            return FaRegArrowAltCircleRight;
        case "fa:FaRegArrowAltCircleUp":
            return FaRegArrowAltCircleUp;
        case "fa:FaRegBellSlash":
            return FaRegBellSlash;
        case "fa:FaRegBell":
            return FaRegBell;
        case "fa:FaRegBookmark":
            return FaRegBookmark;
        case "fa:FaRegBuilding":
            return FaRegBuilding;
        case "fa:FaRegCalendarAlt":
            return FaRegCalendarAlt;
        case "fa:FaRegCalendarCheck":
            return FaRegCalendarCheck;
        case "fa:FaRegCalendarMinus":
            return FaRegCalendarMinus;
        case "fa:FaRegCalendarPlus":
            return FaRegCalendarPlus;
        case "fa:FaRegCalendarTimes":
            return FaRegCalendarTimes;
        case "fa:FaRegCalendar":
            return FaRegCalendar;
        case "fa:FaRegCaretSquareDown":
            return FaRegCaretSquareDown;
        case "fa:FaRegCaretSquareLeft":
            return FaRegCaretSquareLeft;
        case "fa:FaRegCaretSquareRight":
            return FaRegCaretSquareRight;
        case "fa:FaRegCaretSquareUp":
            return FaRegCaretSquareUp;
        case "fa:FaRegChartBar":
            return FaRegChartBar;
        case "fa:FaRegCheckCircle":
            return FaRegCheckCircle;
        case "fa:FaRegCheckSquare":
            return FaRegCheckSquare;
        case "fa:FaRegCircle":
            return FaRegCircle;
        case "fa:FaRegClipboard":
            return FaRegClipboard;
        case "fa:FaRegClock":
            return FaRegClock;
        case "fa:FaRegClone":
            return FaRegClone;
        case "fa:FaRegClosedCaptioning":
            return FaRegClosedCaptioning;
        case "fa:FaRegCommentAlt":
            return FaRegCommentAlt;
        case "fa:FaRegCommentDots":
            return FaRegCommentDots;
        case "fa:FaRegComment":
            return FaRegComment;
        case "fa:FaRegComments":
            return FaRegComments;
        case "fa:FaRegCompass":
            return FaRegCompass;
        case "fa:FaRegCopy":
            return FaRegCopy;
        case "fa:FaRegCopyright":
            return FaRegCopyright;
        case "fa:FaRegCreditCard":
            return FaRegCreditCard;
        case "fa:FaRegDizzy":
            return FaRegDizzy;
        case "fa:FaRegDotCircle":
            return FaRegDotCircle;
        case "fa:FaRegEdit":
            return FaRegEdit;
        case "fa:FaRegEnvelopeOpen":
            return FaRegEnvelopeOpen;
        case "fa:FaRegEnvelope":
            return FaRegEnvelope;
        case "fa:FaRegEyeSlash":
            return FaRegEyeSlash;
        case "fa:FaRegEye":
            return FaRegEye;
        case "fa:FaRegFileAlt":
            return FaRegFileAlt;
        case "fa:FaRegFileArchive":
            return FaRegFileArchive;
        case "fa:FaRegFileAudio":
            return FaRegFileAudio;
        case "fa:FaRegFileCode":
            return FaRegFileCode;
        case "fa:FaRegFileExcel":
            return FaRegFileExcel;
        case "fa:FaRegFileImage":
            return FaRegFileImage;
        case "fa:FaRegFilePdf":
            return FaRegFilePdf;
        case "fa:FaRegFilePowerpoint":
            return FaRegFilePowerpoint;
        case "fa:FaRegFileVideo":
            return FaRegFileVideo;
        case "fa:FaRegFileWord":
            return FaRegFileWord;
        case "fa:FaRegFile":
            return FaRegFile;
        case "fa:FaRegFlag":
            return FaRegFlag;
        case "fa:FaRegFlushed":
            return FaRegFlushed;
        case "fa:FaRegFolderOpen":
            return FaRegFolderOpen;
        case "fa:FaRegFolder":
            return FaRegFolder;
        case "fa:FaRegFontAwesomeLogoFull":
            return FaRegFontAwesomeLogoFull;
        case "fa:FaRegFrownOpen":
            return FaRegFrownOpen;
        case "fa:FaRegFrown":
            return FaRegFrown;
        case "fa:FaRegFutbol":
            return FaRegFutbol;
        case "fa:FaRegGem":
            return FaRegGem;
        case "fa:FaRegGrimace":
            return FaRegGrimace;
        case "fa:FaRegGrinAlt":
            return FaRegGrinAlt;
        case "fa:FaRegGrinBeamSweat":
            return FaRegGrinBeamSweat;
        case "fa:FaRegGrinBeam":
            return FaRegGrinBeam;
        case "fa:FaRegGrinHearts":
            return FaRegGrinHearts;
        case "fa:FaRegGrinSquintTears":
            return FaRegGrinSquintTears;
        case "fa:FaRegGrinSquint":
            return FaRegGrinSquint;
        case "fa:FaRegGrinStars":
            return FaRegGrinStars;
        case "fa:FaRegGrinTears":
            return FaRegGrinTears;
        case "fa:FaRegGrinTongueSquint":
            return FaRegGrinTongueSquint;
        case "fa:FaRegGrinTongueWink":
            return FaRegGrinTongueWink;
        case "fa:FaRegGrinTongue":
            return FaRegGrinTongue;
        case "fa:FaRegGrinWink":
            return FaRegGrinWink;
        case "fa:FaRegGrin":
            return FaRegGrin;
        case "fa:FaRegHandLizard":
            return FaRegHandLizard;
        case "fa:FaRegHandPaper":
            return FaRegHandPaper;
        case "fa:FaRegHandPeace":
            return FaRegHandPeace;
        case "fa:FaRegHandPointDown":
            return FaRegHandPointDown;
        case "fa:FaRegHandPointLeft":
            return FaRegHandPointLeft;
        case "fa:FaRegHandPointRight":
            return FaRegHandPointRight;
        case "fa:FaRegHandPointUp":
            return FaRegHandPointUp;
        case "fa:FaRegHandPointer":
            return FaRegHandPointer;
        case "fa:FaRegHandRock":
            return FaRegHandRock;
        case "fa:FaRegHandScissors":
            return FaRegHandScissors;
        case "fa:FaRegHandSpock":
            return FaRegHandSpock;
        case "fa:FaRegHandshake":
            return FaRegHandshake;
        case "fa:FaRegHdd":
            return FaRegHdd;
        case "fa:FaRegHeart":
            return FaRegHeart;
        case "fa:FaRegHospital":
            return FaRegHospital;
        case "fa:FaRegHourglass":
            return FaRegHourglass;
        case "fa:FaRegIdBadge":
            return FaRegIdBadge;
        case "fa:FaRegIdCard":
            return FaRegIdCard;
        case "fa:FaRegImage":
            return FaRegImage;
        case "fa:FaRegImages":
            return FaRegImages;
        case "fa:FaRegKeyboard":
            return FaRegKeyboard;
        case "fa:FaRegKissBeam":
            return FaRegKissBeam;
        case "fa:FaRegKissWinkHeart":
            return FaRegKissWinkHeart;
        case "fa:FaRegKiss":
            return FaRegKiss;
        case "fa:FaRegLaughBeam":
            return FaRegLaughBeam;
        case "fa:FaRegLaughSquint":
            return FaRegLaughSquint;
        case "fa:FaRegLaughWink":
            return FaRegLaughWink;
        case "fa:FaRegLaugh":
            return FaRegLaugh;
        case "fa:FaRegLemon":
            return FaRegLemon;
        case "fa:FaRegLifeRing":
            return FaRegLifeRing;
        case "fa:FaRegLightbulb":
            return FaRegLightbulb;
        case "fa:FaRegListAlt":
            return FaRegListAlt;
        case "fa:FaRegMap":
            return FaRegMap;
        case "fa:FaRegMehBlank":
            return FaRegMehBlank;
        case "fa:FaRegMehRollingEyes":
            return FaRegMehRollingEyes;
        case "fa:FaRegMeh":
            return FaRegMeh;
        case "fa:FaRegMinusSquare":
            return FaRegMinusSquare;
        case "fa:FaRegMoneyBillAlt":
            return FaRegMoneyBillAlt;
        case "fa:FaRegMoon":
            return FaRegMoon;
        case "fa:FaRegNewspaper":
            return FaRegNewspaper;
        case "fa:FaRegObjectGroup":
            return FaRegObjectGroup;
        case "fa:FaRegObjectUngroup":
            return FaRegObjectUngroup;
        case "fa:FaRegPaperPlane":
            return FaRegPaperPlane;
        case "fa:FaRegPauseCircle":
            return FaRegPauseCircle;
        case "fa:FaRegPlayCircle":
            return FaRegPlayCircle;
        case "fa:FaRegPlusSquare":
            return FaRegPlusSquare;
        case "fa:FaRegQuestionCircle":
            return FaRegQuestionCircle;
        case "fa:FaRegRegistered":
            return FaRegRegistered;
        case "fa:FaRegSadCry":
            return FaRegSadCry;
        case "fa:FaRegSadTear":
            return FaRegSadTear;
        case "fa:FaRegSave":
            return FaRegSave;
        case "fa:FaRegShareSquare":
            return FaRegShareSquare;
        case "fa:FaRegSmileBeam":
            return FaRegSmileBeam;
        case "fa:FaRegSmileWink":
            return FaRegSmileWink;
        case "fa:FaRegSmile":
            return FaRegSmile;
        case "fa:FaRegSnowflake":
            return FaRegSnowflake;
        case "fa:FaRegSquare":
            return FaRegSquare;
        case "fa:FaRegStarHalf":
            return FaRegStarHalf;
        case "fa:FaRegStar":
            return FaRegStar;
        case "fa:FaRegStickyNote":
            return FaRegStickyNote;
        case "fa:FaRegStopCircle":
            return FaRegStopCircle;
        case "fa:FaRegSun":
            return FaRegSun;
        case "fa:FaRegSurprise":
            return FaRegSurprise;
        case "fa:FaRegThumbsDown":
            return FaRegThumbsDown;
        case "fa:FaRegThumbsUp":
            return FaRegThumbsUp;
        case "fa:FaRegTimesCircle":
            return FaRegTimesCircle;
        case "fa:FaRegTired":
            return FaRegTired;
        case "fa:FaRegTrashAlt":
            return FaRegTrashAlt;
        case "fa:FaRegUserCircle":
            return FaRegUserCircle;
        case "fa:FaRegUser":
            return FaRegUser;
        case "fa:FaRegWindowClose":
            return FaRegWindowClose;
        case "fa:FaRegWindowMaximize":
            return FaRegWindowMaximize;
        case "fa:FaRegWindowMinimize":
            return FaRegWindowMinimize;
        case "fa:FaRegWindowRestore":
            return FaRegWindowRestore;
    }
}
