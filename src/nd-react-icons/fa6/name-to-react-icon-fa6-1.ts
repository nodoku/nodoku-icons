import type {IconType} from "react-icons";

import {
    FaFileCode,
    FaFileContract,
    FaFileCsv,
    FaFileExcel,
    FaFileExport,
    FaFileImage,
    FaFileImport,
    FaFileInvoiceDollar,
    FaFileInvoice,
    FaFileLines,
    FaFileMedical,
    FaFilePdf,
    FaFilePen,
    FaFilePowerpoint,
    FaFilePrescription,
    FaFileShield,
    FaFileSignature,
    FaFileVideo,
    FaFileWaveform,
    FaFileWord,
    FaFileZipper,
    FaFile,
    FaFillDrip,
    FaFill,
    FaFilm,
    FaFilterCircleDollar,
    FaFilterCircleXmark,
    FaFilter,
    FaFingerprint,
    FaFireBurner,
    FaFireExtinguisher,
    FaFireFlameCurved,
    FaFireFlameSimple,
    FaFire,
    FaFishFins,
    FaFish,
    FaFlagCheckered,
    FaFlagUsa,
    FaFlag,
    FaFlaskVial,
    FaFlask,
    FaFloppyDisk,
    FaFlorinSign,
    FaFolderClosed,
    FaFolderMinus,
    FaFolderOpen,
    FaFolderPlus,
    FaFolderTree,
    FaFolder,
    FaFont,
    FaFootball,
    FaForwardFast,
    FaForwardStep,
    FaForward,
    FaFrancSign,
    FaFrog,
    FaFutbol,
    FaG,
    FaGamepad,
    FaGasPump,
    FaGaugeHigh,
    FaGaugeSimpleHigh,
    FaGaugeSimple,
    FaGauge,
    FaGavel,
    FaGear,
    FaGears,
    FaGem,
    FaGenderless,
    FaGhost,
    FaGift,
    FaGifts,
    FaGlassWaterDroplet,
    FaGlassWater,
    FaGlasses,
    FaGlobe,
    FaGolfBallTee,
    FaGopuram,
    FaGraduationCap,
    FaGreaterThanEqual,
    FaGreaterThan,
    FaGripLinesVertical,
    FaGripLines,
    FaGripVertical,
    FaGrip,
    FaGroupArrowsRotate,
    FaGuaraniSign,
    FaGuitar,
    FaGun,
    FaH,
    FaHammer,
    FaHamsa,
    FaHandBackFist,
    FaHandDots,
    FaHandFist,
    FaHandHoldingDollar,
    FaHandHoldingDroplet,
    FaHandHoldingHand,
    FaHandHoldingHeart,
    FaHandHoldingMedical,
    FaHandHolding,
    FaHandLizard,
    FaHandMiddleFinger,
    FaHandPeace,
    FaHandPointDown,
    FaHandPointLeft,
    FaHandPointRight,
    FaHandPointUp,
    FaHandPointer,
    FaHandScissors,
    FaHandSparkles,
    FaHandSpock,
    FaHand,
    FaHandcuffs,
    FaHandsAslInterpreting,
    FaHandsBound,
    FaHandsBubbles,
    FaHandsClapping,
    FaHandsHoldingChild,
    FaHandsHoldingCircle,
    FaHandsHolding,
    FaHandsPraying,
    FaHands,
    FaHandshakeAngle,
    FaHandshakeSimpleSlash,
    FaHandshakeSimple,
    FaHandshakeSlash,
    FaHandshake,
    FaHanukiah,
    FaHardDrive,
    FaHashtag,
    FaHatCowboySide,
    FaHatCowboy,
    FaHatWizard,
    FaHeadSideCoughSlash,
    FaHeadSideCough,
    FaHeadSideMask,
    FaHeadSideVirus,
    FaHeading,
    FaHeadphonesSimple,
    FaHeadphones,
    FaHeadset,
    FaHeartCircleBolt,
    FaHeartCircleCheck,
    FaHeartCircleExclamation,
    FaHeartCircleMinus,
    FaHeartCirclePlus,
    FaHeartCircleXmark,
    FaHeartCrack,
    FaHeartPulse,
    FaHeart,
    FaHelicopterSymbol,
    FaHelicopter,
    FaHelmetSafety,
    FaHelmetUn,
    FaHighlighter,
    FaHillAvalanche,
    FaHillRockslide,
    FaHippo,
    FaHockeyPuck,
    FaHollyBerry,
    FaHorseHead,
    FaHorse,
    FaHospitalUser,
    FaHospital,
    FaHotTubPerson,
    FaHotdog,
    FaHotel,
    FaHourglassEnd,
    FaHourglassHalf,
    FaHourglassStart,
    FaHourglass,
    FaHouseChimneyCrack,
    FaHouseChimneyMedical,
    FaHouseChimneyUser,
    FaHouseChimneyWindow,
    FaHouseChimney,
    FaHouseCircleCheck,
    FaHouseCircleExclamation,
    FaHouseCircleXmark,
    FaHouseCrack,
    FaHouseFire,
    FaHouseFlag,
    FaHouseFloodWaterCircleArrowRight,
    FaHouseFloodWater,
    FaHouseLaptop,
    FaHouseLock,
    FaHouseMedicalCircleCheck,
    FaHouseMedicalCircleExclamation,
    FaHouseMedicalCircleXmark,
    FaHouseMedicalFlag,
    FaHouseMedical,
    FaHouseSignal,
    FaHouseTsunami,
    FaHouseUser,
    FaHouse,
    FaHryvniaSign,
    FaHurricane,
    FaICursor,
    FaI,
    FaIceCream,
    FaIcicles,
    FaIcons,
    FaIdBadge,
    FaIdCardClip,
    FaIdCard,
    FaIgloo,
    FaImagePortrait,
    FaImage,
    FaImages,
    FaInbox,
    FaIndent,
    FaIndianRupeeSign,
    FaIndustry,
    FaInfinity,
    FaInfo,
    FaItalic,
    FaJ,
    FaJarWheat,
    FaJar,
    FaJedi,
    FaJetFighterUp,
    FaJetFighter,
    FaJoint,
    FaJugDetergent,
    FaK,
    FaKaaba,
    FaKey,
    FaKeyboard,
    FaKhanda,
    FaKipSign,
    FaKitMedical,
    FaKitchenSet,
    FaKiwiBird,
    FaL,
    FaLandMineOn,
    FaLandmarkDome,
    FaLandmarkFlag,
    FaLandmark,
    FaLanguage,
    FaLaptopCode,
    FaLaptopFile,
    FaLaptopMedical,
    FaLaptop,
    FaLariSign,
    FaLayerGroup,
    FaLeaf,
    FaLeftLong,
    FaLeftRight,
    FaLemon,
    FaLessThanEqual,
    FaLessThan,
    FaLifeRing,
    FaLightbulb,
    FaLinesLeaning,
    FaLinkSlash,
    FaLink,
    FaLiraSign,
    FaListCheck,
    FaListOl,
    FaListUl,
    FaList,
    FaLitecoinSign,
    FaLocationArrow,
    FaLocationCrosshairs,
    FaLocationDot,
    FaLocationPinLock,
    FaLocationPin,
    FaLockOpen,
    FaLock,
    FaLocust,
    FaLungsVirus,
    FaLungs,
    FaM,
    FaMagnet,
    FaMagnifyingGlassArrowRight,
    FaMagnifyingGlassChart,
    FaMagnifyingGlassDollar,
    FaMagnifyingGlassLocation,
    FaMagnifyingGlassMinus,
    FaMagnifyingGlassPlus,
    FaMagnifyingGlass,
    FaManatSign,
    FaMapLocationDot,
    FaMapLocation,
    FaMapPin,
    FaMap,
    FaMarker,
    FaMarsAndVenusBurst,
    FaMarsAndVenus,
    FaMarsDouble,
    FaMarsStrokeRight,
    FaMarsStrokeUp,
    FaMarsStroke,
    FaMars,
    FaMartiniGlassCitrus,
    FaMartiniGlassEmpty,
    FaMartiniGlass,
    FaMaskFace,
    FaMaskVentilator,
    FaMask,
    FaMasksTheater,
    FaMattressPillow,
    FaMaximize,
    FaMedal,
    FaMemory,
    FaMenorah,
    FaMercury,
    FaMessage,
    FaMeteor,
    FaMicrochip,
    FaMicrophoneLinesSlash,
    FaMicrophoneLines,
    FaMicrophoneSlash,
    FaMicrophone,
    FaMicroscope,
    FaMillSign,
    FaMinimize,
    FaMinus,
    FaMitten,
    FaMobileButton,
    FaMobileRetro,
    FaMobileScreenButton,
    FaMobileScreen,
    FaMobile,
    FaMoneyBill1Wave,
    FaMoneyBill1,
    FaMoneyBillTransfer,
    FaMoneyBillTrendUp,
    FaMoneyBillWave,
    FaMoneyBillWheat,
    FaMoneyBill,
    FaMoneyBills,
    FaMoneyCheckDollar,
    FaMoneyCheck,
    FaMonument,
    FaMoon,
    FaMortarPestle,
    FaMosque,
    FaMosquitoNet,
    FaMosquito,
    FaMotorcycle,
    FaMound,
    FaMountainCity,
    FaMountainSun,
    FaMountain,
    FaMugHot,
    FaMugSaucer,
    FaMusic,
    FaN,
    FaNairaSign,
    FaNetworkWired,
    FaNeuter,
    FaNewspaper,
    FaNotEqual,
    FaNotdef,
    FaNoteSticky,
    FaNotesMedical,
    FaO,
    FaObjectGroup,
    FaObjectUngroup,
    FaOilCan,
    FaOilWell,
    FaOm,
    FaOtter,
    FaOutdent,
    FaP,
    FaPager,
    FaPaintRoller,
    FaPaintbrush,
    FaPalette,
    FaPallet,
    FaPanorama,
    FaPaperPlane,
    FaPaperclip,
    FaParachuteBox,
    FaParagraph,
    FaPassport,
    FaPaste,
    FaPause,
    FaPaw,
    FaPeace,
    FaPenClip,
    FaPenFancy,
    FaPenNib,
    FaPenRuler,
    FaPenToSquare,
    FaPen,
    FaPencil,
    FaPeopleArrows,
    FaPeopleCarryBox,
    FaPeopleGroup,
    FaPeopleLine,
    FaPeoplePulling,
    FaPeopleRobbery,
    FaPeopleRoof,
    FaPepperHot,
    FaPercent,
    FaPersonArrowDownToLine,
    FaPersonArrowUpFromLine,
    FaPersonBiking,
    FaPersonBooth,
    FaPersonBreastfeeding,
    FaPersonBurst,
    FaPersonCane,
    FaPersonChalkboard,
    FaPersonCircleCheck,
    FaPersonCircleExclamation,
    FaPersonCircleMinus,
    FaPersonCirclePlus,
    FaPersonCircleQuestion,
    FaPersonCircleXmark,
    FaPersonDigging,
    FaPersonDotsFromLine,
    FaPersonDressBurst,
    FaPersonDress,
    FaPersonDrowning,
    FaPersonFallingBurst,
    FaPersonFalling,
    FaPersonHalfDress,
    FaPersonHarassing,
    FaPersonHiking,
    FaPersonMilitaryPointing,
    FaPersonMilitaryRifle,
    FaPersonMilitaryToPerson,
    FaPersonPraying,
    FaPersonPregnant,
    FaPersonRays,
    FaPersonRifle,
    FaPersonRunning,
    FaPersonShelter,
    FaPersonSkating,
    FaPersonSkiingNordic,
    FaPersonSkiing,
    FaPersonSnowboarding,
    FaPersonSwimming,
    FaPersonThroughWindow,
    FaPersonWalkingArrowLoopLeft,
    FaPersonWalkingArrowRight,
    FaPersonWalkingDashedLineArrowRight,
    FaPersonWalkingLuggage,
    FaPersonWalkingWithCane,
    FaPersonWalking,
    FaPerson,
    FaPesetaSign,
    FaPesoSign,
    FaPhoneFlip,
    FaPhoneSlash,
    FaPhoneVolume,
    FaPhone,
    FaPhotoFilm,
    FaPiggyBank,
    FaPills,
    FaPizzaSlice,
    FaPlaceOfWorship,
    FaPlaneArrival,
    FaPlaneCircleCheck,
    FaPlaneCircleExclamation,
    FaPlaneCircleXmark,
    FaPlaneDeparture,
    FaPlaneLock,
    FaPlaneSlash,
    FaPlaneUp,
    FaPlane,
    FaPlantWilt,
    FaPlateWheat,
    FaPlay,
    FaPlugCircleBolt,
    FaPlugCircleCheck,
    FaPlugCircleExclamation,
    FaPlugCircleMinus,
    FaPlugCirclePlus,
    FaPlugCircleXmark,
    FaPlug,
    FaPlusMinus,
    FaPlus,
    FaPodcast,
    FaPooStorm,
    FaPoo,
    FaPoop,
    FaPowerOff,
    FaPrescriptionBottleMedical,
    FaPrescriptionBottle,
    FaPrescription,
    FaPrint,
    FaPumpMedical,
    FaPumpSoap,
    FaPuzzlePiece,
    FaQ,
    FaQrcode,
    FaQuestion,
    FaQuoteLeft,
    FaQuoteRight,
    FaR,
    FaRadiation,
    FaRadio,
    FaRainbow,
    FaRankingStar,
    FaReceipt,
    FaRecordVinyl,
    FaRectangleAd,
    FaRectangleList,
    FaRectangleXmark,
    FaRecycle,
    FaRegistered,
    FaRepeat,
    FaReplyAll,
    FaReply,
    FaRepublican,
    FaRestroom,
    FaRetweet,
    FaRibbon,
    FaRightFromBracket,
    FaRightLeft,
    FaRightLong,
    FaRightToBracket,
    FaRing,
    FaRoadBarrier,
    FaRoadBridge,
    FaRoadCircleCheck,
    FaRoadCircleExclamation,
    FaRoadCircleXmark,
    FaRoadLock,
    FaRoadSpikes,
    FaRoad,
    FaRobot,
    FaRocket,
    FaRotateLeft,
    FaRotateRight,
    FaRotate,
    FaRoute,
    FaRss,
    FaRubleSign,
    FaRug,
    FaRulerCombined,
    FaRulerHorizontal,
    FaRulerVertical,
    FaRuler,
    FaRupeeSign,
    FaRupiahSign,
    FaS,
    FaSackDollar,
    FaSackXmark,
    FaSailboat,
    FaSatelliteDish,
    FaSatellite,
    FaScaleBalanced,
    FaScaleUnbalancedFlip,
    FaScaleUnbalanced,
    FaSchoolCircleCheck,
    FaSchoolCircleExclamation,
    FaSchoolCircleXmark,
    FaSchoolFlag,
    FaSchoolLock,
    FaSchool,
    FaScissors,
    FaScrewdriverWrench,
    FaScrewdriver,
    FaScrollTorah,
    FaScroll,
    FaSdCard,
    FaSection,
    FaSeedling,
    FaServer,
    FaShapes,
    FaShareFromSquare,
    FaShareNodes,
    FaShare,
    FaSheetPlastic,
    FaShekelSign,
    FaShieldCat,
    FaShieldDog,
    FaShieldHalved,
    FaShieldHeart,
    FaShieldVirus,
    FaShield,
    FaShip,
    FaShirt,
    FaShoePrints,
    FaShopLock,
    FaShopSlash,
    FaShop,
    FaShower,
    FaShrimp,
    FaShuffle,
    FaShuttleSpace,
    FaSignHanging,
    FaSignal,
    FaSignature,
    FaSignsPost,
    FaSimCard,
    FaSink,
    FaSitemap,
    FaSkullCrossbones,
    FaSkull,
    FaSlash,
    FaSleigh,
    FaSliders,
    FaSmog,
    FaSmoking,
    FaSnowflake,
    FaSnowman,
    FaSnowplow,
    FaSoap,
    FaSocks,
    FaSolarPanel,
    FaSortDown,
    FaSortUp,
    FaSort,
    FaSpa,
    FaSpaghettiMonsterFlying,
    FaSpellCheck,
    FaSpider,
    FaSpinner,
    FaSplotch,
    FaSpoon,
    FaSprayCanSparkles,
    FaSprayCan,
    FaSquareArrowUpRight,
    FaSquareCaretDown,
    FaSquareCaretLeft,
    FaSquareCaretRight,
    FaSquareCaretUp,
    FaSquareCheck,
    FaSquareEnvelope,
    FaSquareFull,
    FaSquareH,
    FaSquareMinus,
    FaSquareNfi,
    FaSquareParking,
    FaSquarePen,
    FaSquarePersonConfined,
    FaSquarePhoneFlip,
    FaSquarePhone,
    FaSquarePlus,
    FaSquarePollHorizontal,
    FaSquarePollVertical,
    FaSquareRootVariable,
    FaSquareRss,
    FaSquareShareNodes,
    FaSquareUpRight,
    FaSquareVirus,
    FaSquareXmark,
    FaSquare,
    FaStaffSnake,
    FaStairs,
    FaStamp,
    FaStapler,
    FaStarAndCrescent,
    FaStarHalfStroke,
    FaStarHalf,
    FaStarOfDavid,
    FaStarOfLife,
    FaStar,
    FaSterlingSign,
    FaStethoscope,
    FaStop,
    FaStopwatch20,
    FaStopwatch,
    FaStoreSlash,
    FaStore,
    FaStreetView,
    FaStrikethrough,
    FaStroopwafel,
    FaSubscript,
    FaSuitcaseMedical,
    FaSuitcaseRolling,
    FaSuitcase,
    FaSunPlantWilt,
    FaSun,
    FaSuperscript,
    FaSwatchbook,
    FaSynagogue,
    FaSyringe,
    FaT,
    FaTableCellsColumnLock,
    FaTableCellsLarge,
    FaTableCellsRowLock,
    FaTableCellsRowUnlock,
    FaTableCells,
    FaTableColumns,
    FaTableList,
    FaTableTennisPaddleBall,
    FaTable,
    FaTabletButton,
    FaTabletScreenButton,
    FaTablet,
    FaTablets,
    FaTachographDigital,
    FaTag,
    FaTags,
    FaTape,
    FaTarpDroplet,
    FaTarp,
    FaTaxi,
    FaTeethOpen,
    FaTeeth,
    FaTemperatureArrowDown,
    FaTemperatureArrowUp,
    FaTemperatureEmpty,
    FaTemperatureFull,
    FaTemperatureHalf,
    FaTemperatureHigh,
    FaTemperatureLow,
    FaTemperatureQuarter,
    FaTemperatureThreeQuarters,
    FaTengeSign,
    FaTentArrowDownToLine,
    FaTentArrowLeftRight,
    FaTentArrowTurnLeft,
    FaTentArrowsDown,
    FaTent,
    FaTents,
    FaTerminal,
    FaTextHeight,
    FaTextSlash,
    FaTextWidth,
    FaThermometer,
    FaThumbsDown,
    FaThumbsUp,
    FaThumbtackSlash,
    FaThumbtack,
    FaTicketSimple,
    FaTicket,
    FaTimeline,
    FaToggleOff,
    FaToggleOn,
    FaToiletPaperSlash,
    FaToiletPaper,
    FaToiletPortable,
    FaToilet,
    FaToiletsPortable,
    FaToolbox,
    FaTooth,
    FaToriiGate,
    FaTornado,
    FaTowerBroadcast,
    FaTowerCell,
    FaTowerObservation,
    FaTractor,
    FaTrademark,
    FaTrafficLight,
    FaTrailer,
    FaTrainSubway,
    FaTrainTram,
    FaTrain,
    FaTransgender,
    FaTrashArrowUp,
    FaTrashCanArrowUp,
    FaTrashCan,
    FaTrash,
    FaTreeCity,
    FaTree,
    FaTriangleExclamation,
    FaTrophy,
    FaTrowelBricks,
    FaTrowel,
    FaTruckArrowRight,
    FaTruckDroplet,
    FaTruckFast,
    FaTruckFieldUn,
    FaTruckField,
    FaTruckFront,
    FaTruckMedical,
    FaTruckMonster,
    FaTruckMoving,
    FaTruckPickup,
    FaTruckPlane,
    FaTruckRampBox,
    FaTruck,
    FaTty,
    FaTurkishLiraSign,
    FaTurnDown,
    FaTurnUp,
    FaTv,
    FaU,
    FaUmbrellaBeach,
    FaUmbrella,
    FaUnderline,
    FaUniversalAccess,
    FaUnlockKeyhole,
    FaUnlock,
    FaUpDownLeftRight,
    FaUpDown,
    FaUpLong,
    FaUpRightAndDownLeftFromCenter,
    FaUpRightFromSquare,
    FaUpload,
    FaUserAstronaut,
    FaUserCheck,
    FaUserClock,
    FaUserDoctor,
    FaUserGear,
    FaUserGraduate,
    FaUserGroup,
    FaUserInjured,
    FaUserLargeSlash,
    FaUserLarge,
    FaUserLock,
    FaUserMinus,
    FaUserNinja,
    FaUserNurse,
    FaUserPen,
    FaUserPlus,
    FaUserSecret,
    FaUserShield,
    FaUserSlash,
    FaUserTag,
    FaUserTie,
    FaUserXmark,
    FaUser,
    FaUsersBetweenLines,
    FaUsersGear,
    FaUsersLine,
    FaUsersRays,
    FaUsersRectangle,
    FaUsersSlash,
    FaUsersViewfinder,
    FaUsers,
    FaUtensils,
    FaV,
    FaVanShuttle,
    FaVault,
    FaVectorSquare,
    FaVenusDouble,
    FaVenusMars,
    FaVenus,
    FaVestPatches,
    FaVest,
    FaVialCircleCheck,
    FaVialVirus,
    FaVial,
    FaVials,
    FaVideoSlash,
    FaVideo,
    FaVihara,
    FaVirusCovidSlash,
    FaVirusCovid,
    FaVirusSlash,
    FaVirus,
    FaViruses,
    FaVoicemail,
    FaVolcano,
    FaVolleyball,
    FaVolumeHigh,
    FaVolumeLow,
    FaVolumeOff,
    FaVolumeXmark,
    FaVrCardboard,
    FaW,
    FaWalkieTalkie,
    FaWallet,
    FaWandMagicSparkles,
    FaWandMagic,
    FaWandSparkles,
    FaWarehouse,
    FaWaterLadder,
    FaWater,
    FaWaveSquare,
    FaWeightHanging,
    FaWeightScale,
    FaWheatAwnCircleExclamation,
    FaWheatAwn,
    FaWheelchairMove,
    FaWheelchair,
    FaWhiskeyGlass,
    FaWifi,
    FaWind,
    FaWindowMaximize,
    FaWindowMinimize,
    FaWindowRestore,
    FaWineBottle,
    FaWineGlassEmpty,
    FaWineGlass,
    FaWonSign,
    FaWorm,
    FaWrench,
    FaXRay,
    FaX,
    FaXmark,
    FaXmarksLines,
    FaY,
    FaYenSign,
    FaYinYang,
    FaZ,
    FaRegAddressBook,
    FaRegAddressCard,
    FaRegBellSlash,
    FaRegBell,
    FaRegBookmark,
    FaRegBuilding,
    FaRegCalendarCheck,
    FaRegCalendarDays,
    FaRegCalendarMinus,
    FaRegCalendarPlus,
    FaRegCalendarXmark,
    FaRegCalendar,
    FaRegChartBar,
    FaRegChessBishop,
    FaRegChessKing,
    FaRegChessKnight,
    FaRegChessPawn,
    FaRegChessQueen,
    FaRegChessRook,
    FaRegCircleCheck,
    FaRegCircleDot,
    FaRegCircleDown,
    FaRegCircleLeft,
    FaRegCirclePause,
    FaRegCirclePlay,
    FaRegCircleQuestion,
    FaRegCircleRight,
    FaRegCircleStop,
    FaRegCircleUp,
    FaRegCircleUser,
    FaRegCircleXmark,
    FaRegCircle,
    FaRegClipboard,
    FaRegClock,
    FaRegClone,
    FaRegClosedCaptioning,
    FaRegCommentDots,
    FaRegComment,
    FaRegComments,
    FaRegCompass,
    FaRegCopy,
    FaRegCopyright,
    FaRegCreditCard,
    FaRegEnvelopeOpen,
    FaRegEnvelope,
    FaRegEyeSlash,
    FaRegEye,
    FaRegFaceAngry,
    FaRegFaceDizzy,
    FaRegFaceFlushed,
    FaRegFaceFrownOpen,
    FaRegFaceFrown,
    FaRegFaceGrimace,
    FaRegFaceGrinBeamSweat,
    FaRegFaceGrinBeam,
    FaRegFaceGrinHearts,
    FaRegFaceGrinSquintTears,
    FaRegFaceGrinSquint,
    FaRegFaceGrinStars,
    FaRegFaceGrinTears,
    FaRegFaceGrinTongueSquint,
    FaRegFaceGrinTongueWink,
    FaRegFaceGrinTongue,
    FaRegFaceGrinWide,
    FaRegFaceGrinWink,
    FaRegFaceGrin,
    FaRegFaceKissBeam,
    FaRegFaceKissWinkHeart,
    FaRegFaceKiss,
    FaRegFaceLaughBeam,
    FaRegFaceLaughSquint,
    FaRegFaceLaughWink,
    FaRegFaceLaugh,
    FaRegFaceMehBlank,
    FaRegFaceMeh,
    FaRegFaceRollingEyes,
    FaRegFaceSadCry,
    FaRegFaceSadTear,
    FaRegFaceSmileBeam,
    FaRegFaceSmileWink,
    FaRegFaceSmile,
    FaRegFaceSurprise,
    FaRegFaceTired,
    FaRegFileAudio,
    FaRegFileCode,
    FaRegFileExcel,
    FaRegFileImage,
    FaRegFileLines,
    FaRegFilePdf,
    FaRegFilePowerpoint,
    FaRegFileVideo,
    FaRegFileWord,
    FaRegFileZipper,
    FaRegFile,
    FaRegFlag,
    FaRegFloppyDisk,
    FaRegFolderClosed,
    FaRegFolderOpen,
    FaRegFolder,
    FaRegFontAwesome,
    FaRegFutbol,
    FaRegGem,
    FaRegHandBackFist,
    FaRegHandLizard,
    FaRegHandPeace,
    FaRegHandPointDown,
    FaRegHandPointLeft,
    FaRegHandPointRight,
    FaRegHandPointUp,
    FaRegHandPointer,
    FaRegHandScissors,
    FaRegHandSpock,
    FaRegHand,
    FaRegHandshake,
    FaRegHardDrive,
} from "react-icons/fa6"

export function nameToReactIcon_fa6_1(iconName: string): IconType | undefined {

    switch(iconName) {
        case "fa6:FaFileCode":
            return FaFileCode;
        case "fa6:FaFileContract":
            return FaFileContract;
        case "fa6:FaFileCsv":
            return FaFileCsv;
        case "fa6:FaFileExcel":
            return FaFileExcel;
        case "fa6:FaFileExport":
            return FaFileExport;
        case "fa6:FaFileImage":
            return FaFileImage;
        case "fa6:FaFileImport":
            return FaFileImport;
        case "fa6:FaFileInvoiceDollar":
            return FaFileInvoiceDollar;
        case "fa6:FaFileInvoice":
            return FaFileInvoice;
        case "fa6:FaFileLines":
            return FaFileLines;
        case "fa6:FaFileMedical":
            return FaFileMedical;
        case "fa6:FaFilePdf":
            return FaFilePdf;
        case "fa6:FaFilePen":
            return FaFilePen;
        case "fa6:FaFilePowerpoint":
            return FaFilePowerpoint;
        case "fa6:FaFilePrescription":
            return FaFilePrescription;
        case "fa6:FaFileShield":
            return FaFileShield;
        case "fa6:FaFileSignature":
            return FaFileSignature;
        case "fa6:FaFileVideo":
            return FaFileVideo;
        case "fa6:FaFileWaveform":
            return FaFileWaveform;
        case "fa6:FaFileWord":
            return FaFileWord;
        case "fa6:FaFileZipper":
            return FaFileZipper;
        case "fa6:FaFile":
            return FaFile;
        case "fa6:FaFillDrip":
            return FaFillDrip;
        case "fa6:FaFill":
            return FaFill;
        case "fa6:FaFilm":
            return FaFilm;
        case "fa6:FaFilterCircleDollar":
            return FaFilterCircleDollar;
        case "fa6:FaFilterCircleXmark":
            return FaFilterCircleXmark;
        case "fa6:FaFilter":
            return FaFilter;
        case "fa6:FaFingerprint":
            return FaFingerprint;
        case "fa6:FaFireBurner":
            return FaFireBurner;
        case "fa6:FaFireExtinguisher":
            return FaFireExtinguisher;
        case "fa6:FaFireFlameCurved":
            return FaFireFlameCurved;
        case "fa6:FaFireFlameSimple":
            return FaFireFlameSimple;
        case "fa6:FaFire":
            return FaFire;
        case "fa6:FaFishFins":
            return FaFishFins;
        case "fa6:FaFish":
            return FaFish;
        case "fa6:FaFlagCheckered":
            return FaFlagCheckered;
        case "fa6:FaFlagUsa":
            return FaFlagUsa;
        case "fa6:FaFlag":
            return FaFlag;
        case "fa6:FaFlaskVial":
            return FaFlaskVial;
        case "fa6:FaFlask":
            return FaFlask;
        case "fa6:FaFloppyDisk":
            return FaFloppyDisk;
        case "fa6:FaFlorinSign":
            return FaFlorinSign;
        case "fa6:FaFolderClosed":
            return FaFolderClosed;
        case "fa6:FaFolderMinus":
            return FaFolderMinus;
        case "fa6:FaFolderOpen":
            return FaFolderOpen;
        case "fa6:FaFolderPlus":
            return FaFolderPlus;
        case "fa6:FaFolderTree":
            return FaFolderTree;
        case "fa6:FaFolder":
            return FaFolder;
        case "fa6:FaFont":
            return FaFont;
        case "fa6:FaFootball":
            return FaFootball;
        case "fa6:FaForwardFast":
            return FaForwardFast;
        case "fa6:FaForwardStep":
            return FaForwardStep;
        case "fa6:FaForward":
            return FaForward;
        case "fa6:FaFrancSign":
            return FaFrancSign;
        case "fa6:FaFrog":
            return FaFrog;
        case "fa6:FaFutbol":
            return FaFutbol;
        case "fa6:FaG":
            return FaG;
        case "fa6:FaGamepad":
            return FaGamepad;
        case "fa6:FaGasPump":
            return FaGasPump;
        case "fa6:FaGaugeHigh":
            return FaGaugeHigh;
        case "fa6:FaGaugeSimpleHigh":
            return FaGaugeSimpleHigh;
        case "fa6:FaGaugeSimple":
            return FaGaugeSimple;
        case "fa6:FaGauge":
            return FaGauge;
        case "fa6:FaGavel":
            return FaGavel;
        case "fa6:FaGear":
            return FaGear;
        case "fa6:FaGears":
            return FaGears;
        case "fa6:FaGem":
            return FaGem;
        case "fa6:FaGenderless":
            return FaGenderless;
        case "fa6:FaGhost":
            return FaGhost;
        case "fa6:FaGift":
            return FaGift;
        case "fa6:FaGifts":
            return FaGifts;
        case "fa6:FaGlassWaterDroplet":
            return FaGlassWaterDroplet;
        case "fa6:FaGlassWater":
            return FaGlassWater;
        case "fa6:FaGlasses":
            return FaGlasses;
        case "fa6:FaGlobe":
            return FaGlobe;
        case "fa6:FaGolfBallTee":
            return FaGolfBallTee;
        case "fa6:FaGopuram":
            return FaGopuram;
        case "fa6:FaGraduationCap":
            return FaGraduationCap;
        case "fa6:FaGreaterThanEqual":
            return FaGreaterThanEqual;
        case "fa6:FaGreaterThan":
            return FaGreaterThan;
        case "fa6:FaGripLinesVertical":
            return FaGripLinesVertical;
        case "fa6:FaGripLines":
            return FaGripLines;
        case "fa6:FaGripVertical":
            return FaGripVertical;
        case "fa6:FaGrip":
            return FaGrip;
        case "fa6:FaGroupArrowsRotate":
            return FaGroupArrowsRotate;
        case "fa6:FaGuaraniSign":
            return FaGuaraniSign;
        case "fa6:FaGuitar":
            return FaGuitar;
        case "fa6:FaGun":
            return FaGun;
        case "fa6:FaH":
            return FaH;
        case "fa6:FaHammer":
            return FaHammer;
        case "fa6:FaHamsa":
            return FaHamsa;
        case "fa6:FaHandBackFist":
            return FaHandBackFist;
        case "fa6:FaHandDots":
            return FaHandDots;
        case "fa6:FaHandFist":
            return FaHandFist;
        case "fa6:FaHandHoldingDollar":
            return FaHandHoldingDollar;
        case "fa6:FaHandHoldingDroplet":
            return FaHandHoldingDroplet;
        case "fa6:FaHandHoldingHand":
            return FaHandHoldingHand;
        case "fa6:FaHandHoldingHeart":
            return FaHandHoldingHeart;
        case "fa6:FaHandHoldingMedical":
            return FaHandHoldingMedical;
        case "fa6:FaHandHolding":
            return FaHandHolding;
        case "fa6:FaHandLizard":
            return FaHandLizard;
        case "fa6:FaHandMiddleFinger":
            return FaHandMiddleFinger;
        case "fa6:FaHandPeace":
            return FaHandPeace;
        case "fa6:FaHandPointDown":
            return FaHandPointDown;
        case "fa6:FaHandPointLeft":
            return FaHandPointLeft;
        case "fa6:FaHandPointRight":
            return FaHandPointRight;
        case "fa6:FaHandPointUp":
            return FaHandPointUp;
        case "fa6:FaHandPointer":
            return FaHandPointer;
        case "fa6:FaHandScissors":
            return FaHandScissors;
        case "fa6:FaHandSparkles":
            return FaHandSparkles;
        case "fa6:FaHandSpock":
            return FaHandSpock;
        case "fa6:FaHand":
            return FaHand;
        case "fa6:FaHandcuffs":
            return FaHandcuffs;
        case "fa6:FaHandsAslInterpreting":
            return FaHandsAslInterpreting;
        case "fa6:FaHandsBound":
            return FaHandsBound;
        case "fa6:FaHandsBubbles":
            return FaHandsBubbles;
        case "fa6:FaHandsClapping":
            return FaHandsClapping;
        case "fa6:FaHandsHoldingChild":
            return FaHandsHoldingChild;
        case "fa6:FaHandsHoldingCircle":
            return FaHandsHoldingCircle;
        case "fa6:FaHandsHolding":
            return FaHandsHolding;
        case "fa6:FaHandsPraying":
            return FaHandsPraying;
        case "fa6:FaHands":
            return FaHands;
        case "fa6:FaHandshakeAngle":
            return FaHandshakeAngle;
        case "fa6:FaHandshakeSimpleSlash":
            return FaHandshakeSimpleSlash;
        case "fa6:FaHandshakeSimple":
            return FaHandshakeSimple;
        case "fa6:FaHandshakeSlash":
            return FaHandshakeSlash;
        case "fa6:FaHandshake":
            return FaHandshake;
        case "fa6:FaHanukiah":
            return FaHanukiah;
        case "fa6:FaHardDrive":
            return FaHardDrive;
        case "fa6:FaHashtag":
            return FaHashtag;
        case "fa6:FaHatCowboySide":
            return FaHatCowboySide;
        case "fa6:FaHatCowboy":
            return FaHatCowboy;
        case "fa6:FaHatWizard":
            return FaHatWizard;
        case "fa6:FaHeadSideCoughSlash":
            return FaHeadSideCoughSlash;
        case "fa6:FaHeadSideCough":
            return FaHeadSideCough;
        case "fa6:FaHeadSideMask":
            return FaHeadSideMask;
        case "fa6:FaHeadSideVirus":
            return FaHeadSideVirus;
        case "fa6:FaHeading":
            return FaHeading;
        case "fa6:FaHeadphonesSimple":
            return FaHeadphonesSimple;
        case "fa6:FaHeadphones":
            return FaHeadphones;
        case "fa6:FaHeadset":
            return FaHeadset;
        case "fa6:FaHeartCircleBolt":
            return FaHeartCircleBolt;
        case "fa6:FaHeartCircleCheck":
            return FaHeartCircleCheck;
        case "fa6:FaHeartCircleExclamation":
            return FaHeartCircleExclamation;
        case "fa6:FaHeartCircleMinus":
            return FaHeartCircleMinus;
        case "fa6:FaHeartCirclePlus":
            return FaHeartCirclePlus;
        case "fa6:FaHeartCircleXmark":
            return FaHeartCircleXmark;
        case "fa6:FaHeartCrack":
            return FaHeartCrack;
        case "fa6:FaHeartPulse":
            return FaHeartPulse;
        case "fa6:FaHeart":
            return FaHeart;
        case "fa6:FaHelicopterSymbol":
            return FaHelicopterSymbol;
        case "fa6:FaHelicopter":
            return FaHelicopter;
        case "fa6:FaHelmetSafety":
            return FaHelmetSafety;
        case "fa6:FaHelmetUn":
            return FaHelmetUn;
        case "fa6:FaHighlighter":
            return FaHighlighter;
        case "fa6:FaHillAvalanche":
            return FaHillAvalanche;
        case "fa6:FaHillRockslide":
            return FaHillRockslide;
        case "fa6:FaHippo":
            return FaHippo;
        case "fa6:FaHockeyPuck":
            return FaHockeyPuck;
        case "fa6:FaHollyBerry":
            return FaHollyBerry;
        case "fa6:FaHorseHead":
            return FaHorseHead;
        case "fa6:FaHorse":
            return FaHorse;
        case "fa6:FaHospitalUser":
            return FaHospitalUser;
        case "fa6:FaHospital":
            return FaHospital;
        case "fa6:FaHotTubPerson":
            return FaHotTubPerson;
        case "fa6:FaHotdog":
            return FaHotdog;
        case "fa6:FaHotel":
            return FaHotel;
        case "fa6:FaHourglassEnd":
            return FaHourglassEnd;
        case "fa6:FaHourglassHalf":
            return FaHourglassHalf;
        case "fa6:FaHourglassStart":
            return FaHourglassStart;
        case "fa6:FaHourglass":
            return FaHourglass;
        case "fa6:FaHouseChimneyCrack":
            return FaHouseChimneyCrack;
        case "fa6:FaHouseChimneyMedical":
            return FaHouseChimneyMedical;
        case "fa6:FaHouseChimneyUser":
            return FaHouseChimneyUser;
        case "fa6:FaHouseChimneyWindow":
            return FaHouseChimneyWindow;
        case "fa6:FaHouseChimney":
            return FaHouseChimney;
        case "fa6:FaHouseCircleCheck":
            return FaHouseCircleCheck;
        case "fa6:FaHouseCircleExclamation":
            return FaHouseCircleExclamation;
        case "fa6:FaHouseCircleXmark":
            return FaHouseCircleXmark;
        case "fa6:FaHouseCrack":
            return FaHouseCrack;
        case "fa6:FaHouseFire":
            return FaHouseFire;
        case "fa6:FaHouseFlag":
            return FaHouseFlag;
        case "fa6:FaHouseFloodWaterCircleArrowRight":
            return FaHouseFloodWaterCircleArrowRight;
        case "fa6:FaHouseFloodWater":
            return FaHouseFloodWater;
        case "fa6:FaHouseLaptop":
            return FaHouseLaptop;
        case "fa6:FaHouseLock":
            return FaHouseLock;
        case "fa6:FaHouseMedicalCircleCheck":
            return FaHouseMedicalCircleCheck;
        case "fa6:FaHouseMedicalCircleExclamation":
            return FaHouseMedicalCircleExclamation;
        case "fa6:FaHouseMedicalCircleXmark":
            return FaHouseMedicalCircleXmark;
        case "fa6:FaHouseMedicalFlag":
            return FaHouseMedicalFlag;
        case "fa6:FaHouseMedical":
            return FaHouseMedical;
        case "fa6:FaHouseSignal":
            return FaHouseSignal;
        case "fa6:FaHouseTsunami":
            return FaHouseTsunami;
        case "fa6:FaHouseUser":
            return FaHouseUser;
        case "fa6:FaHouse":
            return FaHouse;
        case "fa6:FaHryvniaSign":
            return FaHryvniaSign;
        case "fa6:FaHurricane":
            return FaHurricane;
        case "fa6:FaICursor":
            return FaICursor;
        case "fa6:FaI":
            return FaI;
        case "fa6:FaIceCream":
            return FaIceCream;
        case "fa6:FaIcicles":
            return FaIcicles;
        case "fa6:FaIcons":
            return FaIcons;
        case "fa6:FaIdBadge":
            return FaIdBadge;
        case "fa6:FaIdCardClip":
            return FaIdCardClip;
        case "fa6:FaIdCard":
            return FaIdCard;
        case "fa6:FaIgloo":
            return FaIgloo;
        case "fa6:FaImagePortrait":
            return FaImagePortrait;
        case "fa6:FaImage":
            return FaImage;
        case "fa6:FaImages":
            return FaImages;
        case "fa6:FaInbox":
            return FaInbox;
        case "fa6:FaIndent":
            return FaIndent;
        case "fa6:FaIndianRupeeSign":
            return FaIndianRupeeSign;
        case "fa6:FaIndustry":
            return FaIndustry;
        case "fa6:FaInfinity":
            return FaInfinity;
        case "fa6:FaInfo":
            return FaInfo;
        case "fa6:FaItalic":
            return FaItalic;
        case "fa6:FaJ":
            return FaJ;
        case "fa6:FaJarWheat":
            return FaJarWheat;
        case "fa6:FaJar":
            return FaJar;
        case "fa6:FaJedi":
            return FaJedi;
        case "fa6:FaJetFighterUp":
            return FaJetFighterUp;
        case "fa6:FaJetFighter":
            return FaJetFighter;
        case "fa6:FaJoint":
            return FaJoint;
        case "fa6:FaJugDetergent":
            return FaJugDetergent;
        case "fa6:FaK":
            return FaK;
        case "fa6:FaKaaba":
            return FaKaaba;
        case "fa6:FaKey":
            return FaKey;
        case "fa6:FaKeyboard":
            return FaKeyboard;
        case "fa6:FaKhanda":
            return FaKhanda;
        case "fa6:FaKipSign":
            return FaKipSign;
        case "fa6:FaKitMedical":
            return FaKitMedical;
        case "fa6:FaKitchenSet":
            return FaKitchenSet;
        case "fa6:FaKiwiBird":
            return FaKiwiBird;
        case "fa6:FaL":
            return FaL;
        case "fa6:FaLandMineOn":
            return FaLandMineOn;
        case "fa6:FaLandmarkDome":
            return FaLandmarkDome;
        case "fa6:FaLandmarkFlag":
            return FaLandmarkFlag;
        case "fa6:FaLandmark":
            return FaLandmark;
        case "fa6:FaLanguage":
            return FaLanguage;
        case "fa6:FaLaptopCode":
            return FaLaptopCode;
        case "fa6:FaLaptopFile":
            return FaLaptopFile;
        case "fa6:FaLaptopMedical":
            return FaLaptopMedical;
        case "fa6:FaLaptop":
            return FaLaptop;
        case "fa6:FaLariSign":
            return FaLariSign;
        case "fa6:FaLayerGroup":
            return FaLayerGroup;
        case "fa6:FaLeaf":
            return FaLeaf;
        case "fa6:FaLeftLong":
            return FaLeftLong;
        case "fa6:FaLeftRight":
            return FaLeftRight;
        case "fa6:FaLemon":
            return FaLemon;
        case "fa6:FaLessThanEqual":
            return FaLessThanEqual;
        case "fa6:FaLessThan":
            return FaLessThan;
        case "fa6:FaLifeRing":
            return FaLifeRing;
        case "fa6:FaLightbulb":
            return FaLightbulb;
        case "fa6:FaLinesLeaning":
            return FaLinesLeaning;
        case "fa6:FaLinkSlash":
            return FaLinkSlash;
        case "fa6:FaLink":
            return FaLink;
        case "fa6:FaLiraSign":
            return FaLiraSign;
        case "fa6:FaListCheck":
            return FaListCheck;
        case "fa6:FaListOl":
            return FaListOl;
        case "fa6:FaListUl":
            return FaListUl;
        case "fa6:FaList":
            return FaList;
        case "fa6:FaLitecoinSign":
            return FaLitecoinSign;
        case "fa6:FaLocationArrow":
            return FaLocationArrow;
        case "fa6:FaLocationCrosshairs":
            return FaLocationCrosshairs;
        case "fa6:FaLocationDot":
            return FaLocationDot;
        case "fa6:FaLocationPinLock":
            return FaLocationPinLock;
        case "fa6:FaLocationPin":
            return FaLocationPin;
        case "fa6:FaLockOpen":
            return FaLockOpen;
        case "fa6:FaLock":
            return FaLock;
        case "fa6:FaLocust":
            return FaLocust;
        case "fa6:FaLungsVirus":
            return FaLungsVirus;
        case "fa6:FaLungs":
            return FaLungs;
        case "fa6:FaM":
            return FaM;
        case "fa6:FaMagnet":
            return FaMagnet;
        case "fa6:FaMagnifyingGlassArrowRight":
            return FaMagnifyingGlassArrowRight;
        case "fa6:FaMagnifyingGlassChart":
            return FaMagnifyingGlassChart;
        case "fa6:FaMagnifyingGlassDollar":
            return FaMagnifyingGlassDollar;
        case "fa6:FaMagnifyingGlassLocation":
            return FaMagnifyingGlassLocation;
        case "fa6:FaMagnifyingGlassMinus":
            return FaMagnifyingGlassMinus;
        case "fa6:FaMagnifyingGlassPlus":
            return FaMagnifyingGlassPlus;
        case "fa6:FaMagnifyingGlass":
            return FaMagnifyingGlass;
        case "fa6:FaManatSign":
            return FaManatSign;
        case "fa6:FaMapLocationDot":
            return FaMapLocationDot;
        case "fa6:FaMapLocation":
            return FaMapLocation;
        case "fa6:FaMapPin":
            return FaMapPin;
        case "fa6:FaMap":
            return FaMap;
        case "fa6:FaMarker":
            return FaMarker;
        case "fa6:FaMarsAndVenusBurst":
            return FaMarsAndVenusBurst;
        case "fa6:FaMarsAndVenus":
            return FaMarsAndVenus;
        case "fa6:FaMarsDouble":
            return FaMarsDouble;
        case "fa6:FaMarsStrokeRight":
            return FaMarsStrokeRight;
        case "fa6:FaMarsStrokeUp":
            return FaMarsStrokeUp;
        case "fa6:FaMarsStroke":
            return FaMarsStroke;
        case "fa6:FaMars":
            return FaMars;
        case "fa6:FaMartiniGlassCitrus":
            return FaMartiniGlassCitrus;
        case "fa6:FaMartiniGlassEmpty":
            return FaMartiniGlassEmpty;
        case "fa6:FaMartiniGlass":
            return FaMartiniGlass;
        case "fa6:FaMaskFace":
            return FaMaskFace;
        case "fa6:FaMaskVentilator":
            return FaMaskVentilator;
        case "fa6:FaMask":
            return FaMask;
        case "fa6:FaMasksTheater":
            return FaMasksTheater;
        case "fa6:FaMattressPillow":
            return FaMattressPillow;
        case "fa6:FaMaximize":
            return FaMaximize;
        case "fa6:FaMedal":
            return FaMedal;
        case "fa6:FaMemory":
            return FaMemory;
        case "fa6:FaMenorah":
            return FaMenorah;
        case "fa6:FaMercury":
            return FaMercury;
        case "fa6:FaMessage":
            return FaMessage;
        case "fa6:FaMeteor":
            return FaMeteor;
        case "fa6:FaMicrochip":
            return FaMicrochip;
        case "fa6:FaMicrophoneLinesSlash":
            return FaMicrophoneLinesSlash;
        case "fa6:FaMicrophoneLines":
            return FaMicrophoneLines;
        case "fa6:FaMicrophoneSlash":
            return FaMicrophoneSlash;
        case "fa6:FaMicrophone":
            return FaMicrophone;
        case "fa6:FaMicroscope":
            return FaMicroscope;
        case "fa6:FaMillSign":
            return FaMillSign;
        case "fa6:FaMinimize":
            return FaMinimize;
        case "fa6:FaMinus":
            return FaMinus;
        case "fa6:FaMitten":
            return FaMitten;
        case "fa6:FaMobileButton":
            return FaMobileButton;
        case "fa6:FaMobileRetro":
            return FaMobileRetro;
        case "fa6:FaMobileScreenButton":
            return FaMobileScreenButton;
        case "fa6:FaMobileScreen":
            return FaMobileScreen;
        case "fa6:FaMobile":
            return FaMobile;
        case "fa6:FaMoneyBill1Wave":
            return FaMoneyBill1Wave;
        case "fa6:FaMoneyBill1":
            return FaMoneyBill1;
        case "fa6:FaMoneyBillTransfer":
            return FaMoneyBillTransfer;
        case "fa6:FaMoneyBillTrendUp":
            return FaMoneyBillTrendUp;
        case "fa6:FaMoneyBillWave":
            return FaMoneyBillWave;
        case "fa6:FaMoneyBillWheat":
            return FaMoneyBillWheat;
        case "fa6:FaMoneyBill":
            return FaMoneyBill;
        case "fa6:FaMoneyBills":
            return FaMoneyBills;
        case "fa6:FaMoneyCheckDollar":
            return FaMoneyCheckDollar;
        case "fa6:FaMoneyCheck":
            return FaMoneyCheck;
        case "fa6:FaMonument":
            return FaMonument;
        case "fa6:FaMoon":
            return FaMoon;
        case "fa6:FaMortarPestle":
            return FaMortarPestle;
        case "fa6:FaMosque":
            return FaMosque;
        case "fa6:FaMosquitoNet":
            return FaMosquitoNet;
        case "fa6:FaMosquito":
            return FaMosquito;
        case "fa6:FaMotorcycle":
            return FaMotorcycle;
        case "fa6:FaMound":
            return FaMound;
        case "fa6:FaMountainCity":
            return FaMountainCity;
        case "fa6:FaMountainSun":
            return FaMountainSun;
        case "fa6:FaMountain":
            return FaMountain;
        case "fa6:FaMugHot":
            return FaMugHot;
        case "fa6:FaMugSaucer":
            return FaMugSaucer;
        case "fa6:FaMusic":
            return FaMusic;
        case "fa6:FaN":
            return FaN;
        case "fa6:FaNairaSign":
            return FaNairaSign;
        case "fa6:FaNetworkWired":
            return FaNetworkWired;
        case "fa6:FaNeuter":
            return FaNeuter;
        case "fa6:FaNewspaper":
            return FaNewspaper;
        case "fa6:FaNotEqual":
            return FaNotEqual;
        case "fa6:FaNotdef":
            return FaNotdef;
        case "fa6:FaNoteSticky":
            return FaNoteSticky;
        case "fa6:FaNotesMedical":
            return FaNotesMedical;
        case "fa6:FaO":
            return FaO;
        case "fa6:FaObjectGroup":
            return FaObjectGroup;
        case "fa6:FaObjectUngroup":
            return FaObjectUngroup;
        case "fa6:FaOilCan":
            return FaOilCan;
        case "fa6:FaOilWell":
            return FaOilWell;
        case "fa6:FaOm":
            return FaOm;
        case "fa6:FaOtter":
            return FaOtter;
        case "fa6:FaOutdent":
            return FaOutdent;
        case "fa6:FaP":
            return FaP;
        case "fa6:FaPager":
            return FaPager;
        case "fa6:FaPaintRoller":
            return FaPaintRoller;
        case "fa6:FaPaintbrush":
            return FaPaintbrush;
        case "fa6:FaPalette":
            return FaPalette;
        case "fa6:FaPallet":
            return FaPallet;
        case "fa6:FaPanorama":
            return FaPanorama;
        case "fa6:FaPaperPlane":
            return FaPaperPlane;
        case "fa6:FaPaperclip":
            return FaPaperclip;
        case "fa6:FaParachuteBox":
            return FaParachuteBox;
        case "fa6:FaParagraph":
            return FaParagraph;
        case "fa6:FaPassport":
            return FaPassport;
        case "fa6:FaPaste":
            return FaPaste;
        case "fa6:FaPause":
            return FaPause;
        case "fa6:FaPaw":
            return FaPaw;
        case "fa6:FaPeace":
            return FaPeace;
        case "fa6:FaPenClip":
            return FaPenClip;
        case "fa6:FaPenFancy":
            return FaPenFancy;
        case "fa6:FaPenNib":
            return FaPenNib;
        case "fa6:FaPenRuler":
            return FaPenRuler;
        case "fa6:FaPenToSquare":
            return FaPenToSquare;
        case "fa6:FaPen":
            return FaPen;
        case "fa6:FaPencil":
            return FaPencil;
        case "fa6:FaPeopleArrows":
            return FaPeopleArrows;
        case "fa6:FaPeopleCarryBox":
            return FaPeopleCarryBox;
        case "fa6:FaPeopleGroup":
            return FaPeopleGroup;
        case "fa6:FaPeopleLine":
            return FaPeopleLine;
        case "fa6:FaPeoplePulling":
            return FaPeoplePulling;
        case "fa6:FaPeopleRobbery":
            return FaPeopleRobbery;
        case "fa6:FaPeopleRoof":
            return FaPeopleRoof;
        case "fa6:FaPepperHot":
            return FaPepperHot;
        case "fa6:FaPercent":
            return FaPercent;
        case "fa6:FaPersonArrowDownToLine":
            return FaPersonArrowDownToLine;
        case "fa6:FaPersonArrowUpFromLine":
            return FaPersonArrowUpFromLine;
        case "fa6:FaPersonBiking":
            return FaPersonBiking;
        case "fa6:FaPersonBooth":
            return FaPersonBooth;
        case "fa6:FaPersonBreastfeeding":
            return FaPersonBreastfeeding;
        case "fa6:FaPersonBurst":
            return FaPersonBurst;
        case "fa6:FaPersonCane":
            return FaPersonCane;
        case "fa6:FaPersonChalkboard":
            return FaPersonChalkboard;
        case "fa6:FaPersonCircleCheck":
            return FaPersonCircleCheck;
        case "fa6:FaPersonCircleExclamation":
            return FaPersonCircleExclamation;
        case "fa6:FaPersonCircleMinus":
            return FaPersonCircleMinus;
        case "fa6:FaPersonCirclePlus":
            return FaPersonCirclePlus;
        case "fa6:FaPersonCircleQuestion":
            return FaPersonCircleQuestion;
        case "fa6:FaPersonCircleXmark":
            return FaPersonCircleXmark;
        case "fa6:FaPersonDigging":
            return FaPersonDigging;
        case "fa6:FaPersonDotsFromLine":
            return FaPersonDotsFromLine;
        case "fa6:FaPersonDressBurst":
            return FaPersonDressBurst;
        case "fa6:FaPersonDress":
            return FaPersonDress;
        case "fa6:FaPersonDrowning":
            return FaPersonDrowning;
        case "fa6:FaPersonFallingBurst":
            return FaPersonFallingBurst;
        case "fa6:FaPersonFalling":
            return FaPersonFalling;
        case "fa6:FaPersonHalfDress":
            return FaPersonHalfDress;
        case "fa6:FaPersonHarassing":
            return FaPersonHarassing;
        case "fa6:FaPersonHiking":
            return FaPersonHiking;
        case "fa6:FaPersonMilitaryPointing":
            return FaPersonMilitaryPointing;
        case "fa6:FaPersonMilitaryRifle":
            return FaPersonMilitaryRifle;
        case "fa6:FaPersonMilitaryToPerson":
            return FaPersonMilitaryToPerson;
        case "fa6:FaPersonPraying":
            return FaPersonPraying;
        case "fa6:FaPersonPregnant":
            return FaPersonPregnant;
        case "fa6:FaPersonRays":
            return FaPersonRays;
        case "fa6:FaPersonRifle":
            return FaPersonRifle;
        case "fa6:FaPersonRunning":
            return FaPersonRunning;
        case "fa6:FaPersonShelter":
            return FaPersonShelter;
        case "fa6:FaPersonSkating":
            return FaPersonSkating;
        case "fa6:FaPersonSkiingNordic":
            return FaPersonSkiingNordic;
        case "fa6:FaPersonSkiing":
            return FaPersonSkiing;
        case "fa6:FaPersonSnowboarding":
            return FaPersonSnowboarding;
        case "fa6:FaPersonSwimming":
            return FaPersonSwimming;
        case "fa6:FaPersonThroughWindow":
            return FaPersonThroughWindow;
        case "fa6:FaPersonWalkingArrowLoopLeft":
            return FaPersonWalkingArrowLoopLeft;
        case "fa6:FaPersonWalkingArrowRight":
            return FaPersonWalkingArrowRight;
        case "fa6:FaPersonWalkingDashedLineArrowRight":
            return FaPersonWalkingDashedLineArrowRight;
        case "fa6:FaPersonWalkingLuggage":
            return FaPersonWalkingLuggage;
        case "fa6:FaPersonWalkingWithCane":
            return FaPersonWalkingWithCane;
        case "fa6:FaPersonWalking":
            return FaPersonWalking;
        case "fa6:FaPerson":
            return FaPerson;
        case "fa6:FaPesetaSign":
            return FaPesetaSign;
        case "fa6:FaPesoSign":
            return FaPesoSign;
        case "fa6:FaPhoneFlip":
            return FaPhoneFlip;
        case "fa6:FaPhoneSlash":
            return FaPhoneSlash;
        case "fa6:FaPhoneVolume":
            return FaPhoneVolume;
        case "fa6:FaPhone":
            return FaPhone;
        case "fa6:FaPhotoFilm":
            return FaPhotoFilm;
        case "fa6:FaPiggyBank":
            return FaPiggyBank;
        case "fa6:FaPills":
            return FaPills;
        case "fa6:FaPizzaSlice":
            return FaPizzaSlice;
        case "fa6:FaPlaceOfWorship":
            return FaPlaceOfWorship;
        case "fa6:FaPlaneArrival":
            return FaPlaneArrival;
        case "fa6:FaPlaneCircleCheck":
            return FaPlaneCircleCheck;
        case "fa6:FaPlaneCircleExclamation":
            return FaPlaneCircleExclamation;
        case "fa6:FaPlaneCircleXmark":
            return FaPlaneCircleXmark;
        case "fa6:FaPlaneDeparture":
            return FaPlaneDeparture;
        case "fa6:FaPlaneLock":
            return FaPlaneLock;
        case "fa6:FaPlaneSlash":
            return FaPlaneSlash;
        case "fa6:FaPlaneUp":
            return FaPlaneUp;
        case "fa6:FaPlane":
            return FaPlane;
        case "fa6:FaPlantWilt":
            return FaPlantWilt;
        case "fa6:FaPlateWheat":
            return FaPlateWheat;
        case "fa6:FaPlay":
            return FaPlay;
        case "fa6:FaPlugCircleBolt":
            return FaPlugCircleBolt;
        case "fa6:FaPlugCircleCheck":
            return FaPlugCircleCheck;
        case "fa6:FaPlugCircleExclamation":
            return FaPlugCircleExclamation;
        case "fa6:FaPlugCircleMinus":
            return FaPlugCircleMinus;
        case "fa6:FaPlugCirclePlus":
            return FaPlugCirclePlus;
        case "fa6:FaPlugCircleXmark":
            return FaPlugCircleXmark;
        case "fa6:FaPlug":
            return FaPlug;
        case "fa6:FaPlusMinus":
            return FaPlusMinus;
        case "fa6:FaPlus":
            return FaPlus;
        case "fa6:FaPodcast":
            return FaPodcast;
        case "fa6:FaPooStorm":
            return FaPooStorm;
        case "fa6:FaPoo":
            return FaPoo;
        case "fa6:FaPoop":
            return FaPoop;
        case "fa6:FaPowerOff":
            return FaPowerOff;
        case "fa6:FaPrescriptionBottleMedical":
            return FaPrescriptionBottleMedical;
        case "fa6:FaPrescriptionBottle":
            return FaPrescriptionBottle;
        case "fa6:FaPrescription":
            return FaPrescription;
        case "fa6:FaPrint":
            return FaPrint;
        case "fa6:FaPumpMedical":
            return FaPumpMedical;
        case "fa6:FaPumpSoap":
            return FaPumpSoap;
        case "fa6:FaPuzzlePiece":
            return FaPuzzlePiece;
        case "fa6:FaQ":
            return FaQ;
        case "fa6:FaQrcode":
            return FaQrcode;
        case "fa6:FaQuestion":
            return FaQuestion;
        case "fa6:FaQuoteLeft":
            return FaQuoteLeft;
        case "fa6:FaQuoteRight":
            return FaQuoteRight;
        case "fa6:FaR":
            return FaR;
        case "fa6:FaRadiation":
            return FaRadiation;
        case "fa6:FaRadio":
            return FaRadio;
        case "fa6:FaRainbow":
            return FaRainbow;
        case "fa6:FaRankingStar":
            return FaRankingStar;
        case "fa6:FaReceipt":
            return FaReceipt;
        case "fa6:FaRecordVinyl":
            return FaRecordVinyl;
        case "fa6:FaRectangleAd":
            return FaRectangleAd;
        case "fa6:FaRectangleList":
            return FaRectangleList;
        case "fa6:FaRectangleXmark":
            return FaRectangleXmark;
        case "fa6:FaRecycle":
            return FaRecycle;
        case "fa6:FaRegistered":
            return FaRegistered;
        case "fa6:FaRepeat":
            return FaRepeat;
        case "fa6:FaReplyAll":
            return FaReplyAll;
        case "fa6:FaReply":
            return FaReply;
        case "fa6:FaRepublican":
            return FaRepublican;
        case "fa6:FaRestroom":
            return FaRestroom;
        case "fa6:FaRetweet":
            return FaRetweet;
        case "fa6:FaRibbon":
            return FaRibbon;
        case "fa6:FaRightFromBracket":
            return FaRightFromBracket;
        case "fa6:FaRightLeft":
            return FaRightLeft;
        case "fa6:FaRightLong":
            return FaRightLong;
        case "fa6:FaRightToBracket":
            return FaRightToBracket;
        case "fa6:FaRing":
            return FaRing;
        case "fa6:FaRoadBarrier":
            return FaRoadBarrier;
        case "fa6:FaRoadBridge":
            return FaRoadBridge;
        case "fa6:FaRoadCircleCheck":
            return FaRoadCircleCheck;
        case "fa6:FaRoadCircleExclamation":
            return FaRoadCircleExclamation;
        case "fa6:FaRoadCircleXmark":
            return FaRoadCircleXmark;
        case "fa6:FaRoadLock":
            return FaRoadLock;
        case "fa6:FaRoadSpikes":
            return FaRoadSpikes;
        case "fa6:FaRoad":
            return FaRoad;
        case "fa6:FaRobot":
            return FaRobot;
        case "fa6:FaRocket":
            return FaRocket;
        case "fa6:FaRotateLeft":
            return FaRotateLeft;
        case "fa6:FaRotateRight":
            return FaRotateRight;
        case "fa6:FaRotate":
            return FaRotate;
        case "fa6:FaRoute":
            return FaRoute;
        case "fa6:FaRss":
            return FaRss;
        case "fa6:FaRubleSign":
            return FaRubleSign;
        case "fa6:FaRug":
            return FaRug;
        case "fa6:FaRulerCombined":
            return FaRulerCombined;
        case "fa6:FaRulerHorizontal":
            return FaRulerHorizontal;
        case "fa6:FaRulerVertical":
            return FaRulerVertical;
        case "fa6:FaRuler":
            return FaRuler;
        case "fa6:FaRupeeSign":
            return FaRupeeSign;
        case "fa6:FaRupiahSign":
            return FaRupiahSign;
        case "fa6:FaS":
            return FaS;
        case "fa6:FaSackDollar":
            return FaSackDollar;
        case "fa6:FaSackXmark":
            return FaSackXmark;
        case "fa6:FaSailboat":
            return FaSailboat;
        case "fa6:FaSatelliteDish":
            return FaSatelliteDish;
        case "fa6:FaSatellite":
            return FaSatellite;
        case "fa6:FaScaleBalanced":
            return FaScaleBalanced;
        case "fa6:FaScaleUnbalancedFlip":
            return FaScaleUnbalancedFlip;
        case "fa6:FaScaleUnbalanced":
            return FaScaleUnbalanced;
        case "fa6:FaSchoolCircleCheck":
            return FaSchoolCircleCheck;
        case "fa6:FaSchoolCircleExclamation":
            return FaSchoolCircleExclamation;
        case "fa6:FaSchoolCircleXmark":
            return FaSchoolCircleXmark;
        case "fa6:FaSchoolFlag":
            return FaSchoolFlag;
        case "fa6:FaSchoolLock":
            return FaSchoolLock;
        case "fa6:FaSchool":
            return FaSchool;
        case "fa6:FaScissors":
            return FaScissors;
        case "fa6:FaScrewdriverWrench":
            return FaScrewdriverWrench;
        case "fa6:FaScrewdriver":
            return FaScrewdriver;
        case "fa6:FaScrollTorah":
            return FaScrollTorah;
        case "fa6:FaScroll":
            return FaScroll;
        case "fa6:FaSdCard":
            return FaSdCard;
        case "fa6:FaSection":
            return FaSection;
        case "fa6:FaSeedling":
            return FaSeedling;
        case "fa6:FaServer":
            return FaServer;
        case "fa6:FaShapes":
            return FaShapes;
        case "fa6:FaShareFromSquare":
            return FaShareFromSquare;
        case "fa6:FaShareNodes":
            return FaShareNodes;
        case "fa6:FaShare":
            return FaShare;
        case "fa6:FaSheetPlastic":
            return FaSheetPlastic;
        case "fa6:FaShekelSign":
            return FaShekelSign;
        case "fa6:FaShieldCat":
            return FaShieldCat;
        case "fa6:FaShieldDog":
            return FaShieldDog;
        case "fa6:FaShieldHalved":
            return FaShieldHalved;
        case "fa6:FaShieldHeart":
            return FaShieldHeart;
        case "fa6:FaShieldVirus":
            return FaShieldVirus;
        case "fa6:FaShield":
            return FaShield;
        case "fa6:FaShip":
            return FaShip;
        case "fa6:FaShirt":
            return FaShirt;
        case "fa6:FaShoePrints":
            return FaShoePrints;
        case "fa6:FaShopLock":
            return FaShopLock;
        case "fa6:FaShopSlash":
            return FaShopSlash;
        case "fa6:FaShop":
            return FaShop;
        case "fa6:FaShower":
            return FaShower;
        case "fa6:FaShrimp":
            return FaShrimp;
        case "fa6:FaShuffle":
            return FaShuffle;
        case "fa6:FaShuttleSpace":
            return FaShuttleSpace;
        case "fa6:FaSignHanging":
            return FaSignHanging;
        case "fa6:FaSignal":
            return FaSignal;
        case "fa6:FaSignature":
            return FaSignature;
        case "fa6:FaSignsPost":
            return FaSignsPost;
        case "fa6:FaSimCard":
            return FaSimCard;
        case "fa6:FaSink":
            return FaSink;
        case "fa6:FaSitemap":
            return FaSitemap;
        case "fa6:FaSkullCrossbones":
            return FaSkullCrossbones;
        case "fa6:FaSkull":
            return FaSkull;
        case "fa6:FaSlash":
            return FaSlash;
        case "fa6:FaSleigh":
            return FaSleigh;
        case "fa6:FaSliders":
            return FaSliders;
        case "fa6:FaSmog":
            return FaSmog;
        case "fa6:FaSmoking":
            return FaSmoking;
        case "fa6:FaSnowflake":
            return FaSnowflake;
        case "fa6:FaSnowman":
            return FaSnowman;
        case "fa6:FaSnowplow":
            return FaSnowplow;
        case "fa6:FaSoap":
            return FaSoap;
        case "fa6:FaSocks":
            return FaSocks;
        case "fa6:FaSolarPanel":
            return FaSolarPanel;
        case "fa6:FaSortDown":
            return FaSortDown;
        case "fa6:FaSortUp":
            return FaSortUp;
        case "fa6:FaSort":
            return FaSort;
        case "fa6:FaSpa":
            return FaSpa;
        case "fa6:FaSpaghettiMonsterFlying":
            return FaSpaghettiMonsterFlying;
        case "fa6:FaSpellCheck":
            return FaSpellCheck;
        case "fa6:FaSpider":
            return FaSpider;
        case "fa6:FaSpinner":
            return FaSpinner;
        case "fa6:FaSplotch":
            return FaSplotch;
        case "fa6:FaSpoon":
            return FaSpoon;
        case "fa6:FaSprayCanSparkles":
            return FaSprayCanSparkles;
        case "fa6:FaSprayCan":
            return FaSprayCan;
        case "fa6:FaSquareArrowUpRight":
            return FaSquareArrowUpRight;
        case "fa6:FaSquareCaretDown":
            return FaSquareCaretDown;
        case "fa6:FaSquareCaretLeft":
            return FaSquareCaretLeft;
        case "fa6:FaSquareCaretRight":
            return FaSquareCaretRight;
        case "fa6:FaSquareCaretUp":
            return FaSquareCaretUp;
        case "fa6:FaSquareCheck":
            return FaSquareCheck;
        case "fa6:FaSquareEnvelope":
            return FaSquareEnvelope;
        case "fa6:FaSquareFull":
            return FaSquareFull;
        case "fa6:FaSquareH":
            return FaSquareH;
        case "fa6:FaSquareMinus":
            return FaSquareMinus;
        case "fa6:FaSquareNfi":
            return FaSquareNfi;
        case "fa6:FaSquareParking":
            return FaSquareParking;
        case "fa6:FaSquarePen":
            return FaSquarePen;
        case "fa6:FaSquarePersonConfined":
            return FaSquarePersonConfined;
        case "fa6:FaSquarePhoneFlip":
            return FaSquarePhoneFlip;
        case "fa6:FaSquarePhone":
            return FaSquarePhone;
        case "fa6:FaSquarePlus":
            return FaSquarePlus;
        case "fa6:FaSquarePollHorizontal":
            return FaSquarePollHorizontal;
        case "fa6:FaSquarePollVertical":
            return FaSquarePollVertical;
        case "fa6:FaSquareRootVariable":
            return FaSquareRootVariable;
        case "fa6:FaSquareRss":
            return FaSquareRss;
        case "fa6:FaSquareShareNodes":
            return FaSquareShareNodes;
        case "fa6:FaSquareUpRight":
            return FaSquareUpRight;
        case "fa6:FaSquareVirus":
            return FaSquareVirus;
        case "fa6:FaSquareXmark":
            return FaSquareXmark;
        case "fa6:FaSquare":
            return FaSquare;
        case "fa6:FaStaffSnake":
            return FaStaffSnake;
        case "fa6:FaStairs":
            return FaStairs;
        case "fa6:FaStamp":
            return FaStamp;
        case "fa6:FaStapler":
            return FaStapler;
        case "fa6:FaStarAndCrescent":
            return FaStarAndCrescent;
        case "fa6:FaStarHalfStroke":
            return FaStarHalfStroke;
        case "fa6:FaStarHalf":
            return FaStarHalf;
        case "fa6:FaStarOfDavid":
            return FaStarOfDavid;
        case "fa6:FaStarOfLife":
            return FaStarOfLife;
        case "fa6:FaStar":
            return FaStar;
        case "fa6:FaSterlingSign":
            return FaSterlingSign;
        case "fa6:FaStethoscope":
            return FaStethoscope;
        case "fa6:FaStop":
            return FaStop;
        case "fa6:FaStopwatch20":
            return FaStopwatch20;
        case "fa6:FaStopwatch":
            return FaStopwatch;
        case "fa6:FaStoreSlash":
            return FaStoreSlash;
        case "fa6:FaStore":
            return FaStore;
        case "fa6:FaStreetView":
            return FaStreetView;
        case "fa6:FaStrikethrough":
            return FaStrikethrough;
        case "fa6:FaStroopwafel":
            return FaStroopwafel;
        case "fa6:FaSubscript":
            return FaSubscript;
        case "fa6:FaSuitcaseMedical":
            return FaSuitcaseMedical;
        case "fa6:FaSuitcaseRolling":
            return FaSuitcaseRolling;
        case "fa6:FaSuitcase":
            return FaSuitcase;
        case "fa6:FaSunPlantWilt":
            return FaSunPlantWilt;
        case "fa6:FaSun":
            return FaSun;
        case "fa6:FaSuperscript":
            return FaSuperscript;
        case "fa6:FaSwatchbook":
            return FaSwatchbook;
        case "fa6:FaSynagogue":
            return FaSynagogue;
        case "fa6:FaSyringe":
            return FaSyringe;
        case "fa6:FaT":
            return FaT;
        case "fa6:FaTableCellsColumnLock":
            return FaTableCellsColumnLock;
        case "fa6:FaTableCellsLarge":
            return FaTableCellsLarge;
        case "fa6:FaTableCellsRowLock":
            return FaTableCellsRowLock;
        case "fa6:FaTableCellsRowUnlock":
            return FaTableCellsRowUnlock;
        case "fa6:FaTableCells":
            return FaTableCells;
        case "fa6:FaTableColumns":
            return FaTableColumns;
        case "fa6:FaTableList":
            return FaTableList;
        case "fa6:FaTableTennisPaddleBall":
            return FaTableTennisPaddleBall;
        case "fa6:FaTable":
            return FaTable;
        case "fa6:FaTabletButton":
            return FaTabletButton;
        case "fa6:FaTabletScreenButton":
            return FaTabletScreenButton;
        case "fa6:FaTablet":
            return FaTablet;
        case "fa6:FaTablets":
            return FaTablets;
        case "fa6:FaTachographDigital":
            return FaTachographDigital;
        case "fa6:FaTag":
            return FaTag;
        case "fa6:FaTags":
            return FaTags;
        case "fa6:FaTape":
            return FaTape;
        case "fa6:FaTarpDroplet":
            return FaTarpDroplet;
        case "fa6:FaTarp":
            return FaTarp;
        case "fa6:FaTaxi":
            return FaTaxi;
        case "fa6:FaTeethOpen":
            return FaTeethOpen;
        case "fa6:FaTeeth":
            return FaTeeth;
        case "fa6:FaTemperatureArrowDown":
            return FaTemperatureArrowDown;
        case "fa6:FaTemperatureArrowUp":
            return FaTemperatureArrowUp;
        case "fa6:FaTemperatureEmpty":
            return FaTemperatureEmpty;
        case "fa6:FaTemperatureFull":
            return FaTemperatureFull;
        case "fa6:FaTemperatureHalf":
            return FaTemperatureHalf;
        case "fa6:FaTemperatureHigh":
            return FaTemperatureHigh;
        case "fa6:FaTemperatureLow":
            return FaTemperatureLow;
        case "fa6:FaTemperatureQuarter":
            return FaTemperatureQuarter;
        case "fa6:FaTemperatureThreeQuarters":
            return FaTemperatureThreeQuarters;
        case "fa6:FaTengeSign":
            return FaTengeSign;
        case "fa6:FaTentArrowDownToLine":
            return FaTentArrowDownToLine;
        case "fa6:FaTentArrowLeftRight":
            return FaTentArrowLeftRight;
        case "fa6:FaTentArrowTurnLeft":
            return FaTentArrowTurnLeft;
        case "fa6:FaTentArrowsDown":
            return FaTentArrowsDown;
        case "fa6:FaTent":
            return FaTent;
        case "fa6:FaTents":
            return FaTents;
        case "fa6:FaTerminal":
            return FaTerminal;
        case "fa6:FaTextHeight":
            return FaTextHeight;
        case "fa6:FaTextSlash":
            return FaTextSlash;
        case "fa6:FaTextWidth":
            return FaTextWidth;
        case "fa6:FaThermometer":
            return FaThermometer;
        case "fa6:FaThumbsDown":
            return FaThumbsDown;
        case "fa6:FaThumbsUp":
            return FaThumbsUp;
        case "fa6:FaThumbtackSlash":
            return FaThumbtackSlash;
        case "fa6:FaThumbtack":
            return FaThumbtack;
        case "fa6:FaTicketSimple":
            return FaTicketSimple;
        case "fa6:FaTicket":
            return FaTicket;
        case "fa6:FaTimeline":
            return FaTimeline;
        case "fa6:FaToggleOff":
            return FaToggleOff;
        case "fa6:FaToggleOn":
            return FaToggleOn;
        case "fa6:FaToiletPaperSlash":
            return FaToiletPaperSlash;
        case "fa6:FaToiletPaper":
            return FaToiletPaper;
        case "fa6:FaToiletPortable":
            return FaToiletPortable;
        case "fa6:FaToilet":
            return FaToilet;
        case "fa6:FaToiletsPortable":
            return FaToiletsPortable;
        case "fa6:FaToolbox":
            return FaToolbox;
        case "fa6:FaTooth":
            return FaTooth;
        case "fa6:FaToriiGate":
            return FaToriiGate;
        case "fa6:FaTornado":
            return FaTornado;
        case "fa6:FaTowerBroadcast":
            return FaTowerBroadcast;
        case "fa6:FaTowerCell":
            return FaTowerCell;
        case "fa6:FaTowerObservation":
            return FaTowerObservation;
        case "fa6:FaTractor":
            return FaTractor;
        case "fa6:FaTrademark":
            return FaTrademark;
        case "fa6:FaTrafficLight":
            return FaTrafficLight;
        case "fa6:FaTrailer":
            return FaTrailer;
        case "fa6:FaTrainSubway":
            return FaTrainSubway;
        case "fa6:FaTrainTram":
            return FaTrainTram;
        case "fa6:FaTrain":
            return FaTrain;
        case "fa6:FaTransgender":
            return FaTransgender;
        case "fa6:FaTrashArrowUp":
            return FaTrashArrowUp;
        case "fa6:FaTrashCanArrowUp":
            return FaTrashCanArrowUp;
        case "fa6:FaTrashCan":
            return FaTrashCan;
        case "fa6:FaTrash":
            return FaTrash;
        case "fa6:FaTreeCity":
            return FaTreeCity;
        case "fa6:FaTree":
            return FaTree;
        case "fa6:FaTriangleExclamation":
            return FaTriangleExclamation;
        case "fa6:FaTrophy":
            return FaTrophy;
        case "fa6:FaTrowelBricks":
            return FaTrowelBricks;
        case "fa6:FaTrowel":
            return FaTrowel;
        case "fa6:FaTruckArrowRight":
            return FaTruckArrowRight;
        case "fa6:FaTruckDroplet":
            return FaTruckDroplet;
        case "fa6:FaTruckFast":
            return FaTruckFast;
        case "fa6:FaTruckFieldUn":
            return FaTruckFieldUn;
        case "fa6:FaTruckField":
            return FaTruckField;
        case "fa6:FaTruckFront":
            return FaTruckFront;
        case "fa6:FaTruckMedical":
            return FaTruckMedical;
        case "fa6:FaTruckMonster":
            return FaTruckMonster;
        case "fa6:FaTruckMoving":
            return FaTruckMoving;
        case "fa6:FaTruckPickup":
            return FaTruckPickup;
        case "fa6:FaTruckPlane":
            return FaTruckPlane;
        case "fa6:FaTruckRampBox":
            return FaTruckRampBox;
        case "fa6:FaTruck":
            return FaTruck;
        case "fa6:FaTty":
            return FaTty;
        case "fa6:FaTurkishLiraSign":
            return FaTurkishLiraSign;
        case "fa6:FaTurnDown":
            return FaTurnDown;
        case "fa6:FaTurnUp":
            return FaTurnUp;
        case "fa6:FaTv":
            return FaTv;
        case "fa6:FaU":
            return FaU;
        case "fa6:FaUmbrellaBeach":
            return FaUmbrellaBeach;
        case "fa6:FaUmbrella":
            return FaUmbrella;
        case "fa6:FaUnderline":
            return FaUnderline;
        case "fa6:FaUniversalAccess":
            return FaUniversalAccess;
        case "fa6:FaUnlockKeyhole":
            return FaUnlockKeyhole;
        case "fa6:FaUnlock":
            return FaUnlock;
        case "fa6:FaUpDownLeftRight":
            return FaUpDownLeftRight;
        case "fa6:FaUpDown":
            return FaUpDown;
        case "fa6:FaUpLong":
            return FaUpLong;
        case "fa6:FaUpRightAndDownLeftFromCenter":
            return FaUpRightAndDownLeftFromCenter;
        case "fa6:FaUpRightFromSquare":
            return FaUpRightFromSquare;
        case "fa6:FaUpload":
            return FaUpload;
        case "fa6:FaUserAstronaut":
            return FaUserAstronaut;
        case "fa6:FaUserCheck":
            return FaUserCheck;
        case "fa6:FaUserClock":
            return FaUserClock;
        case "fa6:FaUserDoctor":
            return FaUserDoctor;
        case "fa6:FaUserGear":
            return FaUserGear;
        case "fa6:FaUserGraduate":
            return FaUserGraduate;
        case "fa6:FaUserGroup":
            return FaUserGroup;
        case "fa6:FaUserInjured":
            return FaUserInjured;
        case "fa6:FaUserLargeSlash":
            return FaUserLargeSlash;
        case "fa6:FaUserLarge":
            return FaUserLarge;
        case "fa6:FaUserLock":
            return FaUserLock;
        case "fa6:FaUserMinus":
            return FaUserMinus;
        case "fa6:FaUserNinja":
            return FaUserNinja;
        case "fa6:FaUserNurse":
            return FaUserNurse;
        case "fa6:FaUserPen":
            return FaUserPen;
        case "fa6:FaUserPlus":
            return FaUserPlus;
        case "fa6:FaUserSecret":
            return FaUserSecret;
        case "fa6:FaUserShield":
            return FaUserShield;
        case "fa6:FaUserSlash":
            return FaUserSlash;
        case "fa6:FaUserTag":
            return FaUserTag;
        case "fa6:FaUserTie":
            return FaUserTie;
        case "fa6:FaUserXmark":
            return FaUserXmark;
        case "fa6:FaUser":
            return FaUser;
        case "fa6:FaUsersBetweenLines":
            return FaUsersBetweenLines;
        case "fa6:FaUsersGear":
            return FaUsersGear;
        case "fa6:FaUsersLine":
            return FaUsersLine;
        case "fa6:FaUsersRays":
            return FaUsersRays;
        case "fa6:FaUsersRectangle":
            return FaUsersRectangle;
        case "fa6:FaUsersSlash":
            return FaUsersSlash;
        case "fa6:FaUsersViewfinder":
            return FaUsersViewfinder;
        case "fa6:FaUsers":
            return FaUsers;
        case "fa6:FaUtensils":
            return FaUtensils;
        case "fa6:FaV":
            return FaV;
        case "fa6:FaVanShuttle":
            return FaVanShuttle;
        case "fa6:FaVault":
            return FaVault;
        case "fa6:FaVectorSquare":
            return FaVectorSquare;
        case "fa6:FaVenusDouble":
            return FaVenusDouble;
        case "fa6:FaVenusMars":
            return FaVenusMars;
        case "fa6:FaVenus":
            return FaVenus;
        case "fa6:FaVestPatches":
            return FaVestPatches;
        case "fa6:FaVest":
            return FaVest;
        case "fa6:FaVialCircleCheck":
            return FaVialCircleCheck;
        case "fa6:FaVialVirus":
            return FaVialVirus;
        case "fa6:FaVial":
            return FaVial;
        case "fa6:FaVials":
            return FaVials;
        case "fa6:FaVideoSlash":
            return FaVideoSlash;
        case "fa6:FaVideo":
            return FaVideo;
        case "fa6:FaVihara":
            return FaVihara;
        case "fa6:FaVirusCovidSlash":
            return FaVirusCovidSlash;
        case "fa6:FaVirusCovid":
            return FaVirusCovid;
        case "fa6:FaVirusSlash":
            return FaVirusSlash;
        case "fa6:FaVirus":
            return FaVirus;
        case "fa6:FaViruses":
            return FaViruses;
        case "fa6:FaVoicemail":
            return FaVoicemail;
        case "fa6:FaVolcano":
            return FaVolcano;
        case "fa6:FaVolleyball":
            return FaVolleyball;
        case "fa6:FaVolumeHigh":
            return FaVolumeHigh;
        case "fa6:FaVolumeLow":
            return FaVolumeLow;
        case "fa6:FaVolumeOff":
            return FaVolumeOff;
        case "fa6:FaVolumeXmark":
            return FaVolumeXmark;
        case "fa6:FaVrCardboard":
            return FaVrCardboard;
        case "fa6:FaW":
            return FaW;
        case "fa6:FaWalkieTalkie":
            return FaWalkieTalkie;
        case "fa6:FaWallet":
            return FaWallet;
        case "fa6:FaWandMagicSparkles":
            return FaWandMagicSparkles;
        case "fa6:FaWandMagic":
            return FaWandMagic;
        case "fa6:FaWandSparkles":
            return FaWandSparkles;
        case "fa6:FaWarehouse":
            return FaWarehouse;
        case "fa6:FaWaterLadder":
            return FaWaterLadder;
        case "fa6:FaWater":
            return FaWater;
        case "fa6:FaWaveSquare":
            return FaWaveSquare;
        case "fa6:FaWeightHanging":
            return FaWeightHanging;
        case "fa6:FaWeightScale":
            return FaWeightScale;
        case "fa6:FaWheatAwnCircleExclamation":
            return FaWheatAwnCircleExclamation;
        case "fa6:FaWheatAwn":
            return FaWheatAwn;
        case "fa6:FaWheelchairMove":
            return FaWheelchairMove;
        case "fa6:FaWheelchair":
            return FaWheelchair;
        case "fa6:FaWhiskeyGlass":
            return FaWhiskeyGlass;
        case "fa6:FaWifi":
            return FaWifi;
        case "fa6:FaWind":
            return FaWind;
        case "fa6:FaWindowMaximize":
            return FaWindowMaximize;
        case "fa6:FaWindowMinimize":
            return FaWindowMinimize;
        case "fa6:FaWindowRestore":
            return FaWindowRestore;
        case "fa6:FaWineBottle":
            return FaWineBottle;
        case "fa6:FaWineGlassEmpty":
            return FaWineGlassEmpty;
        case "fa6:FaWineGlass":
            return FaWineGlass;
        case "fa6:FaWonSign":
            return FaWonSign;
        case "fa6:FaWorm":
            return FaWorm;
        case "fa6:FaWrench":
            return FaWrench;
        case "fa6:FaXRay":
            return FaXRay;
        case "fa6:FaX":
            return FaX;
        case "fa6:FaXmark":
            return FaXmark;
        case "fa6:FaXmarksLines":
            return FaXmarksLines;
        case "fa6:FaY":
            return FaY;
        case "fa6:FaYenSign":
            return FaYenSign;
        case "fa6:FaYinYang":
            return FaYinYang;
        case "fa6:FaZ":
            return FaZ;
        case "fa6:FaRegAddressBook":
            return FaRegAddressBook;
        case "fa6:FaRegAddressCard":
            return FaRegAddressCard;
        case "fa6:FaRegBellSlash":
            return FaRegBellSlash;
        case "fa6:FaRegBell":
            return FaRegBell;
        case "fa6:FaRegBookmark":
            return FaRegBookmark;
        case "fa6:FaRegBuilding":
            return FaRegBuilding;
        case "fa6:FaRegCalendarCheck":
            return FaRegCalendarCheck;
        case "fa6:FaRegCalendarDays":
            return FaRegCalendarDays;
        case "fa6:FaRegCalendarMinus":
            return FaRegCalendarMinus;
        case "fa6:FaRegCalendarPlus":
            return FaRegCalendarPlus;
        case "fa6:FaRegCalendarXmark":
            return FaRegCalendarXmark;
        case "fa6:FaRegCalendar":
            return FaRegCalendar;
        case "fa6:FaRegChartBar":
            return FaRegChartBar;
        case "fa6:FaRegChessBishop":
            return FaRegChessBishop;
        case "fa6:FaRegChessKing":
            return FaRegChessKing;
        case "fa6:FaRegChessKnight":
            return FaRegChessKnight;
        case "fa6:FaRegChessPawn":
            return FaRegChessPawn;
        case "fa6:FaRegChessQueen":
            return FaRegChessQueen;
        case "fa6:FaRegChessRook":
            return FaRegChessRook;
        case "fa6:FaRegCircleCheck":
            return FaRegCircleCheck;
        case "fa6:FaRegCircleDot":
            return FaRegCircleDot;
        case "fa6:FaRegCircleDown":
            return FaRegCircleDown;
        case "fa6:FaRegCircleLeft":
            return FaRegCircleLeft;
        case "fa6:FaRegCirclePause":
            return FaRegCirclePause;
        case "fa6:FaRegCirclePlay":
            return FaRegCirclePlay;
        case "fa6:FaRegCircleQuestion":
            return FaRegCircleQuestion;
        case "fa6:FaRegCircleRight":
            return FaRegCircleRight;
        case "fa6:FaRegCircleStop":
            return FaRegCircleStop;
        case "fa6:FaRegCircleUp":
            return FaRegCircleUp;
        case "fa6:FaRegCircleUser":
            return FaRegCircleUser;
        case "fa6:FaRegCircleXmark":
            return FaRegCircleXmark;
        case "fa6:FaRegCircle":
            return FaRegCircle;
        case "fa6:FaRegClipboard":
            return FaRegClipboard;
        case "fa6:FaRegClock":
            return FaRegClock;
        case "fa6:FaRegClone":
            return FaRegClone;
        case "fa6:FaRegClosedCaptioning":
            return FaRegClosedCaptioning;
        case "fa6:FaRegCommentDots":
            return FaRegCommentDots;
        case "fa6:FaRegComment":
            return FaRegComment;
        case "fa6:FaRegComments":
            return FaRegComments;
        case "fa6:FaRegCompass":
            return FaRegCompass;
        case "fa6:FaRegCopy":
            return FaRegCopy;
        case "fa6:FaRegCopyright":
            return FaRegCopyright;
        case "fa6:FaRegCreditCard":
            return FaRegCreditCard;
        case "fa6:FaRegEnvelopeOpen":
            return FaRegEnvelopeOpen;
        case "fa6:FaRegEnvelope":
            return FaRegEnvelope;
        case "fa6:FaRegEyeSlash":
            return FaRegEyeSlash;
        case "fa6:FaRegEye":
            return FaRegEye;
        case "fa6:FaRegFaceAngry":
            return FaRegFaceAngry;
        case "fa6:FaRegFaceDizzy":
            return FaRegFaceDizzy;
        case "fa6:FaRegFaceFlushed":
            return FaRegFaceFlushed;
        case "fa6:FaRegFaceFrownOpen":
            return FaRegFaceFrownOpen;
        case "fa6:FaRegFaceFrown":
            return FaRegFaceFrown;
        case "fa6:FaRegFaceGrimace":
            return FaRegFaceGrimace;
        case "fa6:FaRegFaceGrinBeamSweat":
            return FaRegFaceGrinBeamSweat;
        case "fa6:FaRegFaceGrinBeam":
            return FaRegFaceGrinBeam;
        case "fa6:FaRegFaceGrinHearts":
            return FaRegFaceGrinHearts;
        case "fa6:FaRegFaceGrinSquintTears":
            return FaRegFaceGrinSquintTears;
        case "fa6:FaRegFaceGrinSquint":
            return FaRegFaceGrinSquint;
        case "fa6:FaRegFaceGrinStars":
            return FaRegFaceGrinStars;
        case "fa6:FaRegFaceGrinTears":
            return FaRegFaceGrinTears;
        case "fa6:FaRegFaceGrinTongueSquint":
            return FaRegFaceGrinTongueSquint;
        case "fa6:FaRegFaceGrinTongueWink":
            return FaRegFaceGrinTongueWink;
        case "fa6:FaRegFaceGrinTongue":
            return FaRegFaceGrinTongue;
        case "fa6:FaRegFaceGrinWide":
            return FaRegFaceGrinWide;
        case "fa6:FaRegFaceGrinWink":
            return FaRegFaceGrinWink;
        case "fa6:FaRegFaceGrin":
            return FaRegFaceGrin;
        case "fa6:FaRegFaceKissBeam":
            return FaRegFaceKissBeam;
        case "fa6:FaRegFaceKissWinkHeart":
            return FaRegFaceKissWinkHeart;
        case "fa6:FaRegFaceKiss":
            return FaRegFaceKiss;
        case "fa6:FaRegFaceLaughBeam":
            return FaRegFaceLaughBeam;
        case "fa6:FaRegFaceLaughSquint":
            return FaRegFaceLaughSquint;
        case "fa6:FaRegFaceLaughWink":
            return FaRegFaceLaughWink;
        case "fa6:FaRegFaceLaugh":
            return FaRegFaceLaugh;
        case "fa6:FaRegFaceMehBlank":
            return FaRegFaceMehBlank;
        case "fa6:FaRegFaceMeh":
            return FaRegFaceMeh;
        case "fa6:FaRegFaceRollingEyes":
            return FaRegFaceRollingEyes;
        case "fa6:FaRegFaceSadCry":
            return FaRegFaceSadCry;
        case "fa6:FaRegFaceSadTear":
            return FaRegFaceSadTear;
        case "fa6:FaRegFaceSmileBeam":
            return FaRegFaceSmileBeam;
        case "fa6:FaRegFaceSmileWink":
            return FaRegFaceSmileWink;
        case "fa6:FaRegFaceSmile":
            return FaRegFaceSmile;
        case "fa6:FaRegFaceSurprise":
            return FaRegFaceSurprise;
        case "fa6:FaRegFaceTired":
            return FaRegFaceTired;
        case "fa6:FaRegFileAudio":
            return FaRegFileAudio;
        case "fa6:FaRegFileCode":
            return FaRegFileCode;
        case "fa6:FaRegFileExcel":
            return FaRegFileExcel;
        case "fa6:FaRegFileImage":
            return FaRegFileImage;
        case "fa6:FaRegFileLines":
            return FaRegFileLines;
        case "fa6:FaRegFilePdf":
            return FaRegFilePdf;
        case "fa6:FaRegFilePowerpoint":
            return FaRegFilePowerpoint;
        case "fa6:FaRegFileVideo":
            return FaRegFileVideo;
        case "fa6:FaRegFileWord":
            return FaRegFileWord;
        case "fa6:FaRegFileZipper":
            return FaRegFileZipper;
        case "fa6:FaRegFile":
            return FaRegFile;
        case "fa6:FaRegFlag":
            return FaRegFlag;
        case "fa6:FaRegFloppyDisk":
            return FaRegFloppyDisk;
        case "fa6:FaRegFolderClosed":
            return FaRegFolderClosed;
        case "fa6:FaRegFolderOpen":
            return FaRegFolderOpen;
        case "fa6:FaRegFolder":
            return FaRegFolder;
        case "fa6:FaRegFontAwesome":
            return FaRegFontAwesome;
        case "fa6:FaRegFutbol":
            return FaRegFutbol;
        case "fa6:FaRegGem":
            return FaRegGem;
        case "fa6:FaRegHandBackFist":
            return FaRegHandBackFist;
        case "fa6:FaRegHandLizard":
            return FaRegHandLizard;
        case "fa6:FaRegHandPeace":
            return FaRegHandPeace;
        case "fa6:FaRegHandPointDown":
            return FaRegHandPointDown;
        case "fa6:FaRegHandPointLeft":
            return FaRegHandPointLeft;
        case "fa6:FaRegHandPointRight":
            return FaRegHandPointRight;
        case "fa6:FaRegHandPointUp":
            return FaRegHandPointUp;
        case "fa6:FaRegHandPointer":
            return FaRegHandPointer;
        case "fa6:FaRegHandScissors":
            return FaRegHandScissors;
        case "fa6:FaRegHandSpock":
            return FaRegHandSpock;
        case "fa6:FaRegHand":
            return FaRegHand;
        case "fa6:FaRegHandshake":
            return FaRegHandshake;
        case "fa6:FaRegHardDrive":
            return FaRegHardDrive;
    }
}
