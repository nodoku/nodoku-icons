import type {IconType} from "react-icons";

import {
    PiVignetteLight,
    PiVinylRecordLight,
    PiVirtualRealityLight,
    PiVirusLight,
    PiVisorLight,
    PiVoicemailLight,
    PiVolleyballLight,
    PiWallLight,
    PiWalletLight,
    PiWarehouseLight,
    PiWarningCircleLight,
    PiWarningDiamondLight,
    PiWarningLight,
    PiWarningOctagonLight,
    PiWashingMachineLight,
    PiWatchLight,
    PiWaveSawtoothLight,
    PiWaveSineLight,
    PiWaveSquareLight,
    PiWaveTriangleLight,
    PiWaveformLight,
    PiWaveformSlashLight,
    PiWavesLight,
    PiWebcamLight,
    PiWebcamSlashLight,
    PiWebhooksLogoLight,
    PiWechatLogoLight,
    PiWhatsappLogoLight,
    PiWheelchairLight,
    PiWheelchairMotionLight,
    PiWifiHighLight,
    PiWifiLowLight,
    PiWifiMediumLight,
    PiWifiNoneLight,
    PiWifiSlashLight,
    PiWifiXLight,
    PiWindLight,
    PiWindmillLight,
    PiWindowsLogoLight,
    PiWineLight,
    PiWrenchLight,
    PiXCircleLight,
    PiXLight,
    PiXLogoLight,
    PiXSquareLight,
    PiYarnLight,
    PiYinYangLight,
    PiYoutubeLogoLight,
    PiAcorn,
    PiAddressBookTabs,
    PiAddressBook,
    PiAirTrafficControl,
    PiAirplaneInFlight,
    PiAirplaneLanding,
    PiAirplaneTakeoff,
    PiAirplaneTaxiing,
    PiAirplaneTilt,
    PiAirplane,
    PiAirplay,
    PiAlarm,
    PiAlien,
    PiAlignBottomSimple,
    PiAlignBottom,
    PiAlignCenterHorizontalSimple,
    PiAlignCenterHorizontal,
    PiAlignCenterVerticalSimple,
    PiAlignCenterVertical,
    PiAlignLeftSimple,
    PiAlignLeft,
    PiAlignRightSimple,
    PiAlignRight,
    PiAlignTopSimple,
    PiAlignTop,
    PiAmazonLogo,
    PiAmbulance,
    PiAnchorSimple,
    PiAnchor,
    PiAndroidLogo,
    PiAngle,
    PiAngularLogo,
    PiAperture,
    PiAppStoreLogo,
    PiAppWindow,
    PiAppleLogo,
    PiApplePodcastsLogo,
    PiApproximateEquals,
    PiArchive,
    PiArmchair,
    PiArrowArcLeft,
    PiArrowArcRight,
    PiArrowBendDoubleUpLeft,
    PiArrowBendDoubleUpRight,
    PiArrowBendDownLeft,
    PiArrowBendDownRight,
    PiArrowBendLeftDown,
    PiArrowBendLeftUp,
    PiArrowBendRightDown,
    PiArrowBendRightUp,
    PiArrowBendUpLeft,
    PiArrowBendUpRight,
    PiArrowCircleDownLeft,
    PiArrowCircleDownRight,
    PiArrowCircleDown,
    PiArrowCircleLeft,
    PiArrowCircleRight,
    PiArrowCircleUpLeft,
    PiArrowCircleUpRight,
    PiArrowCircleUp,
    PiArrowClockwise,
    PiArrowCounterClockwise,
    PiArrowDownLeft,
    PiArrowDownRight,
    PiArrowDown,
    PiArrowElbowDownLeft,
    PiArrowElbowDownRight,
    PiArrowElbowLeftDown,
    PiArrowElbowLeftUp,
    PiArrowElbowLeft,
    PiArrowElbowRightDown,
    PiArrowElbowRightUp,
    PiArrowElbowRight,
    PiArrowElbowUpLeft,
    PiArrowElbowUpRight,
    PiArrowFatDown,
    PiArrowFatLeft,
    PiArrowFatLineDown,
    PiArrowFatLineLeft,
    PiArrowFatLineRight,
    PiArrowFatLineUp,
    PiArrowFatLinesDown,
    PiArrowFatLinesLeft,
    PiArrowFatLinesRight,
    PiArrowFatLinesUp,
    PiArrowFatRight,
    PiArrowFatUp,
    PiArrowLeft,
    PiArrowLineDownLeft,
    PiArrowLineDownRight,
    PiArrowLineDown,
    PiArrowLineLeft,
    PiArrowLineRight,
    PiArrowLineUpLeft,
    PiArrowLineUpRight,
    PiArrowLineUp,
    PiArrowRight,
    PiArrowSquareDownLeft,
    PiArrowSquareDownRight,
    PiArrowSquareDown,
    PiArrowSquareIn,
    PiArrowSquareLeft,
    PiArrowSquareOut,
    PiArrowSquareRight,
    PiArrowSquareUpLeft,
    PiArrowSquareUpRight,
    PiArrowSquareUp,
    PiArrowUDownLeft,
    PiArrowUDownRight,
    PiArrowULeftDown,
    PiArrowULeftUp,
    PiArrowURightDown,
    PiArrowURightUp,
    PiArrowUUpLeft,
    PiArrowUUpRight,
    PiArrowUpLeft,
    PiArrowUpRight,
    PiArrowUp,
    PiArrowsClockwise,
    PiArrowsCounterClockwise,
    PiArrowsDownUp,
    PiArrowsHorizontal,
    PiArrowsInCardinal,
    PiArrowsInLineHorizontal,
    PiArrowsInLineVertical,
    PiArrowsInSimple,
    PiArrowsIn,
    PiArrowsLeftRight,
    PiArrowsMerge,
    PiArrowsOutCardinal,
    PiArrowsOutLineHorizontal,
    PiArrowsOutLineVertical,
    PiArrowsOutSimple,
    PiArrowsOut,
    PiArrowsSplit,
    PiArrowsVertical,
    PiArticleMedium,
    PiArticleNyTimes,
    PiArticle,
    PiAsclepius,
    PiAsteriskSimple,
    PiAsterisk,
    PiAt,
    PiAtom,
    PiAvocado,
    PiAxe,
    PiBabyCarriage,
    PiBaby,
    PiBackpack,
    PiBackspace,
    PiBagSimple,
    PiBag,
    PiBalloon,
    PiBandaids,
    PiBank,
    PiBarbell,
    PiBarcode,
    PiBarn,
    PiBarricade,
    PiBaseballCap,
    PiBaseballHelmet,
    PiBaseball,
    PiBasket,
    PiBasketball,
    PiBathtub,
    PiBatteryChargingVertical,
    PiBatteryCharging,
    PiBatteryEmpty,
    PiBatteryFull,
    PiBatteryHigh,
    PiBatteryLow,
    PiBatteryMedium,
    PiBatteryPlusVertical,
    PiBatteryPlus,
    PiBatteryVerticalEmpty,
    PiBatteryVerticalFull,
    PiBatteryVerticalHigh,
    PiBatteryVerticalLow,
    PiBatteryVerticalMedium,
    PiBatteryWarningVertical,
    PiBatteryWarning,
    PiBeachBall,
    PiBeanie,
    PiBed,
    PiBeerBottle,
    PiBeerStein,
    PiBehanceLogo,
    PiBellRinging,
    PiBellSimpleRinging,
    PiBellSimpleSlash,
    PiBellSimpleZ,
    PiBellSimple,
    PiBellSlash,
    PiBellZ,
    PiBell,
    PiBelt,
    PiBezierCurve,
    PiBicycle,
    PiBinary,
    PiBinoculars,
    PiBiohazard,
    PiBird,
    PiBlueprint,
    PiBluetoothConnected,
    PiBluetoothSlash,
    PiBluetoothX,
    PiBluetooth,
    PiBoat,
    PiBomb,
    PiBone,
    PiBookBookmark,
    PiBookOpenText,
    PiBookOpenUser,
    PiBookOpen,
    PiBook,
    PiBookmarkSimple,
    PiBookmark,
    PiBookmarksSimple,
    PiBookmarks,
    PiBooks,
    PiBoot,
    PiBoules,
    PiBoundingBox,
    PiBowlFood,
    PiBowlSteam,
    PiBowlingBall,
    PiBoxArrowDown,
    PiBoxArrowUp,
    PiBoxingGlove,
    PiBracketsAngle,
    PiBracketsCurly,
    PiBracketsRound,
    PiBracketsSquare,
    PiBrain,
    PiBrandy,
    PiBread,
    PiBridge,
    PiBriefcaseMetal,
    PiBriefcase,
    PiBroadcast,
    PiBroom,
    PiBrowser,
    PiBrowsers,
    PiBugBeetle,
    PiBugDroid,
    PiBug,
    PiBuildingApartment,
    PiBuildingOffice,
    PiBuilding,
    PiBuildings,
    PiBulldozer,
    PiBus,
    PiButterfly,
    PiCableCar,
    PiCactus,
    PiCake,
    PiCalculator,
    PiCalendarBlank,
    PiCalendarCheck,
    PiCalendarDot,
    PiCalendarDots,
    PiCalendarHeart,
    PiCalendarMinus,
    PiCalendarPlus,
    PiCalendarSlash,
    PiCalendarStar,
    PiCalendarX,
    PiCalendar,
    PiCallBell,
    PiCameraPlus,
    PiCameraRotate,
    PiCameraSlash,
    PiCamera,
    PiCampfire,
    PiCarBattery,
    PiCarProfile,
    PiCarSimple,
    PiCar,
    PiCardholder,
    PiCardsThree,
    PiCards,
    PiCaretCircleDoubleDown,
    PiCaretCircleDoubleLeft,
    PiCaretCircleDoubleRight,
    PiCaretCircleDoubleUp,
    PiCaretCircleDown,
    PiCaretCircleLeft,
    PiCaretCircleRight,
    PiCaretCircleUpDown,
    PiCaretCircleUp,
    PiCaretDoubleDown,
    PiCaretDoubleLeft,
    PiCaretDoubleRight,
    PiCaretDoubleUp,
    PiCaretDown,
    PiCaretLeft,
    PiCaretLineDown,
    PiCaretLineLeft,
    PiCaretLineRight,
    PiCaretLineUp,
    PiCaretRight,
    PiCaretUpDown,
    PiCaretUp,
    PiCarrot,
    PiCashRegister,
    PiCassetteTape,
    PiCastleTurret,
    PiCat,
    PiCellSignalFull,
    PiCellSignalHigh,
    PiCellSignalLow,
    PiCellSignalMedium,
    PiCellSignalNone,
    PiCellSignalSlash,
    PiCellSignalX,
    PiCellTower,
    PiCertificate,
    PiChair,
    PiChalkboardSimple,
    PiChalkboardTeacher,
    PiChalkboard,
    PiChampagne,
    PiChargingStation,
    PiChartBarHorizontal,
    PiChartBar,
    PiChartDonut,
    PiChartLineDown,
    PiChartLineUp,
    PiChartLine,
    PiChartPieSlice,
    PiChartPie,
    PiChartPolar,
    PiChartScatter,
    PiChatCenteredDots,
    PiChatCenteredSlash,
    PiChatCenteredText,
    PiChatCentered,
    PiChatCircleDots,
    PiChatCircleSlash,
    PiChatCircleText,
    PiChatCircle,
    PiChatDots,
    PiChatSlash,
    PiChatTeardropDots,
    PiChatTeardropSlash,
    PiChatTeardropText,
    PiChatTeardrop,
    PiChatText,
    PiChat,
    PiChatsCircle,
    PiChatsTeardrop,
    PiChats,
    PiCheckCircle,
    PiCheckFat,
    PiCheckSquareOffset,
    PiCheckSquare,
    PiCheck,
    PiCheckerboard,
    PiChecks,
    PiCheers,
    PiCheese,
    PiChefHat,
    PiCherries,
    PiChurch,
    PiCigaretteSlash,
    PiCigarette,
    PiCircleDashed,
    PiCircleHalfTilt,
    PiCircleHalf,
    PiCircleNotch,
    PiCircle,
    PiCirclesFour,
    PiCirclesThreePlus,
    PiCirclesThree,
    PiCircuitry,
    PiCity,
    PiClipboardText,
    PiClipboard,
    PiClockAfternoon,
    PiClockClockwise,
    PiClockCountdown,
    PiClockCounterClockwise,
    PiClockUser,
    PiClock,
    PiClosedCaptioning,
    PiCloudArrowDown,
    PiCloudArrowUp,
    PiCloudCheck,
    PiCloudFog,
    PiCloudLightning,
    PiCloudMoon,
    PiCloudRain,
    PiCloudSlash,
    PiCloudSnow,
    PiCloudSun,
    PiCloudWarning,
    PiCloudX,
    PiCloud,
    PiClover,
    PiClub,
    PiCoatHanger,
    PiCodaLogo,
    PiCodeBlock,
    PiCodeSimple,
    PiCode,
    PiCodepenLogo,
    PiCodesandboxLogo,
    PiCoffeeBean,
    PiCoffee,
    PiCoinVertical,
    PiCoin,
    PiCoins,
    PiColumnsPlusLeft,
    PiColumnsPlusRight,
    PiColumns,
    PiCommand,
    PiCompassRose,
    PiCompassTool,
    PiCompass,
    PiComputerTower,
    PiConfetti,
    PiContactlessPayment,
    PiControl,
    PiCookie,
    PiCookingPot,
    PiCopySimple,
    PiCopy,
    PiCopyleft,
    PiCopyright,
    PiCornersIn,
    PiCornersOut,
    PiCouch,
    PiCourtBasketball,
    PiCow,
    PiCowboyHat,
    PiCpu,
    PiCraneTower,
    PiCrane,
    PiCreditCard,
    PiCricket,
    PiCrop,
    PiCross,
    PiCrosshairSimple,
    PiCrosshair,
    PiCrownCross,
    PiCrownSimple,
    PiCrown,
    PiCubeFocus,
    PiCubeTransparent,
    PiCube,
    PiCurrencyBtc,
    PiCurrencyCircleDollar,
    PiCurrencyCny,
    PiCurrencyDollarSimple,
    PiCurrencyDollar,
    PiCurrencyEth,
    PiCurrencyEur,
    PiCurrencyGbp,
    PiCurrencyInr,
    PiCurrencyJpy,
    PiCurrencyKrw,
    PiCurrencyKzt,
    PiCurrencyNgn,
    PiCurrencyRub,
    PiCursorClick,
    PiCursorText,
    PiCursor,
    PiCylinder,
    PiDatabase,
    PiDesk,
    PiDesktopTower,
    PiDesktop,
    PiDetective,
    PiDevToLogo,
    PiDeviceMobileCamera,
    PiDeviceMobileSlash,
    PiDeviceMobileSpeaker,
    PiDeviceMobile,
    PiDeviceRotate,
    PiDeviceTabletCamera,
    PiDeviceTabletSpeaker,
    PiDeviceTablet,
    PiDevices,
    PiDiamond,
    PiDiamondsFour,
    PiDiceFive,
    PiDiceFour,
    PiDiceOne,
    PiDiceSix,
    PiDiceThree,
    PiDiceTwo,
    PiDisc,
    PiDiscoBall,
    PiDiscordLogo,
    PiDivide,
    PiDna,
    PiDog,
    PiDoorOpen,
    PiDoor,
    PiDotOutline,
    PiDot,
    PiDotsNine,
    PiDotsSixVertical,
    PiDotsSix,
    PiDotsThreeCircleVertical,
    PiDotsThreeCircle,
    PiDotsThreeOutlineVertical,
    PiDotsThreeOutline,
    PiDotsThreeVertical,
    PiDotsThree,
    PiDownloadSimple,
    PiDownload,
    PiDress,
    PiDresser,
    PiDribbbleLogo,
    PiDrone,
    PiDropHalfBottom,
    PiDropHalf,
    PiDropSimple,
    PiDropSlash,
    PiDrop,
    PiDropboxLogo,
    PiEarSlash,
    PiEar,
    PiEggCrack,
    PiEgg,
    PiEjectSimple,
    PiEject,
    PiElevator,
    PiEmpty,
    PiEngine,
    PiEnvelopeOpen,
    PiEnvelopeSimpleOpen,
    PiEnvelopeSimple,
    PiEnvelope,
    PiEqualizer,
    PiEquals,
    PiEraser,
    PiEscalatorDown,
    PiEscalatorUp,
    PiExam,
    PiExclamationMark,
    PiExcludeSquare,
    PiExclude,
    PiExport,
    PiEyeClosed,
    PiEyeSlash,
    PiEye,
    PiEyedropperSample,
    PiEyedropper,
    PiEyeglasses,
    PiEyes,
    PiFaceMask,
    PiFacebookLogo,
    PiFactory,
    PiFadersHorizontal,
    PiFaders,
    PiFalloutShelter,
    PiFan,
    PiFarm,
    PiFastForwardCircle,
    PiFastForward,
    PiFeather,
    PiFediverseLogo,
    PiFigmaLogo,
    PiFileArchive,
    PiFileArrowDown,
    PiFileArrowUp,
    PiFileAudio,
    PiFileCSharp,
    PiFileC,
    PiFileCloud,
    PiFileCode,
    PiFileCpp,
    PiFileCss,
    PiFileCsv,
    PiFileDashed,
    PiFileDoc,
    PiFileHtml,
    PiFileImage,
    PiFileIni,
    PiFileJpg,
    PiFileJs,
    PiFileJsx,
    PiFileLock,
    PiFileMagnifyingGlass,
    PiFileMd,
    PiFileMinus,
    PiFilePdf,
    PiFilePlus,
    PiFilePng,
    PiFilePpt,
    PiFilePy,
    PiFileRs,
    PiFileSql,
    PiFileSvg,
    PiFileText,
    PiFileTs,
    PiFileTsx,
    PiFileTxt,
    PiFileVideo,
    PiFileVue,
    PiFileX,
    PiFileXls,
    PiFileZip,
    PiFile,
    PiFiles,
    PiFilmReel,
    PiFilmScript,
    PiFilmSlate,
    PiFilmStrip,
    PiFingerprintSimple,
    PiFingerprint,
    PiFinnTheHuman,
    PiFireExtinguisher,
    PiFireSimple,
    PiFireTruck,
    PiFire,
    PiFirstAidKit,
    PiFirstAid,
    PiFishSimple,
    PiFish,
    PiFlagBannerFold,
    PiFlagBanner,
    PiFlagCheckered,
    PiFlagPennant,
    PiFlag,
    PiFlame,
    PiFlashlight,
    PiFlask,
    PiFlipHorizontal,
    PiFlipVertical,
    PiFloppyDiskBack,
    PiFloppyDisk,
    PiFlowArrow,
    PiFlowerLotus,
    PiFlowerTulip,
    PiFlower,
    PiFlyingSaucer,
    PiFolderDashed,
    PiFolderLock,
    PiFolderMinus,
    PiFolderOpen,
    PiFolderPlus,
    PiFolderSimpleDashed,
    PiFolderSimpleLock,
    PiFolderSimpleMinus,
    PiFolderSimplePlus,
    PiFolderSimpleStar,
    PiFolderSimpleUser,
    PiFolderSimple,
    PiFolderStar,
    PiFolderUser,
    PiFolder,
    PiFolders,
    PiFootballHelmet,
    PiFootball,
    PiFootprints,
    PiForkKnife,
    PiFourK,
    PiFrameCorners,
    PiFramerLogo,
    PiFunction,
    PiFunnelSimpleX,
    PiFunnelSimple,
    PiFunnelX,
    PiFunnel,
    PiGameController,
    PiGarage,
    PiGasCan,
    PiGasPump,
    PiGauge,
    PiGavel,
    PiGearFine,
    PiGearSix,
    PiGear,
    PiGenderFemale,
    PiGenderIntersex,
    PiGenderMale,
    PiGenderNeuter,
    PiGenderNonbinary,
    PiGenderTransgender,
    PiGhost,
    PiGif,
    PiGift,
    PiGitBranch,
    PiGitCommit,
    PiGitDiff,
    PiGitFork,
    PiGitMerge,
    PiGitPullRequest,
    PiGithubLogo,
    PiGitlabLogoSimple,
    PiGitlabLogo,
    PiGlobeHemisphereEast,
    PiGlobeHemisphereWest,
    PiGlobeSimpleX,
    PiGlobeSimple,
    PiGlobeStand,
    PiGlobeX,
    PiGlobe,
    PiGoggles,
    PiGolf,
    PiGoodreadsLogo,
    PiGoogleCardboardLogo,
    PiGoogleChromeLogo,
    PiGoogleDriveLogo,
    PiGoogleLogo,
    PiGooglePhotosLogo,
    PiGooglePlayLogo,
    PiGooglePodcastsLogo,
    PiGpsFix,
    PiGpsSlash,
    PiGps,
    PiGradient,
    PiGraduationCap,
    PiGrainsSlash,
    PiGrains,
    PiGraph,
    PiGraphicsCard,
    PiGreaterThanOrEqual,
    PiGreaterThan,
    PiGridFour,
    PiGridNine,
    PiGuitar,
    PiHairDryer,
    PiHamburger,
    PiHammer,
    PiHandArrowDown,
    PiHandArrowUp,
    PiHandCoins,
    PiHandDeposit,
    PiHandEye,
    PiHandFist,
    PiHandGrabbing,
    PiHandHeart,
    PiHandPalm,
    PiHandPeace,
    PiHandPointing,
    PiHandSoap,
    PiHandSwipeLeft,
    PiHandSwipeRight,
    PiHandTap,
    PiHandWaving,
    PiHandWithdraw,
    PiHand,
    PiHandbagSimple,
    PiHandbag,
    PiHandsClapping,
    PiHandsPraying,
    PiHandshake,
    PiHardDrive,
    PiHardDrives,
    PiHardHat,
    PiHashStraight,
    PiHash,
    PiHeadCircuit,
    PiHeadlights,
    PiHeadphones,
    PiHeadset,
    PiHeartBreak,
    PiHeartHalf,
    PiHeartStraightBreak,
    PiHeartStraight,
    PiHeart,
    PiHeartbeat,
    PiHexagon,
    PiHighDefinition,
    PiHighHeel,
    PiHighlighterCircle,
    PiHighlighter,
    PiHockey,
    PiHoodie,
    PiHorse,
    PiHospital,
    PiHourglassHigh,
    PiHourglassLow,
    PiHourglassMedium,
    PiHourglassSimpleHigh,
    PiHourglassSimpleLow,
    PiHourglassSimpleMedium,
    PiHourglassSimple,
    PiHourglass,
    PiHouseLine,
    PiHouseSimple,
    PiHouse,
    PiHurricane,
    PiIceCream,
    PiIdentificationBadge,
    PiIdentificationCard,
    PiImageBroken,
    PiImageSquare,
    PiImage,
    PiImagesSquare,
    PiImages,
    PiInfinity,
    PiInfo,
    PiInstagramLogo,
    PiIntersectSquare,
    PiIntersectThree,
    PiIntersect,
    PiIntersection,
    PiInvoice,
    PiIsland,
    PiJarLabel,
    PiJar,
    PiJeep,
    PiJoystick,
    PiKanban,
    PiKeyReturn,
    PiKey,
    PiKeyboard,
    PiKeyhole,
    PiKnife,
    PiLadderSimple,
    PiLadder,
    PiLampPendant,
    PiLamp,
    PiLaptop,
    PiLasso,
    PiLastfmLogo,
    PiLayout,
    PiLeaf,
    PiLectern,
    PiLegoSmiley,
    PiLego,
    PiLessThanOrEqual,
    PiLessThan,
    PiLetterCircleH,
    PiLetterCircleP,
    PiLetterCircleV,
    PiLifebuoy,
    PiLightbulbFilament,
    PiLightbulb,
    PiLighthouse,
    PiLightningA,
    PiLightningSlash,
    PiLightning,
    PiLineSegment,
    PiLineSegments,
    PiLineVertical,
    PiLinkBreak,
    PiLinkSimpleBreak,
    PiLinkSimpleHorizontalBreak,
    PiLinkSimpleHorizontal,
    PiLinkSimple,
    PiLink,
    PiLinkedinLogo,
    PiLinktreeLogo,
    PiLinuxLogo,
    PiListBullets,
    PiListChecks,
    PiListDashes,
    PiListHeart,
    PiListMagnifyingGlass,
    PiListNumbers,
    PiListPlus,
    PiListStar,
    PiList,
    PiLockKeyOpen,
    PiLockKey,
    PiLockLaminatedOpen,
    PiLockLaminated,
    PiLockOpen,
    PiLockSimpleOpen,
    PiLockSimple,
    PiLock,
    PiLockers,
    PiLog,
    PiMagicWand,
    PiMagnetStraight,
    PiMagnet,
    PiMagnifyingGlassMinus,
    PiMagnifyingGlassPlus,
    PiMagnifyingGlass,
    PiMailbox,
    PiMapPinArea,
    PiMapPinLine,
    PiMapPinPlus,
    PiMapPinSimpleArea,
    PiMapPinSimpleLine,
    PiMapPinSimple,
    PiMapPin,
    PiMapTrifold,
    PiMarkdownLogo,
    PiMarkerCircle,
    PiMartini,
    PiMaskHappy,
    PiMaskSad,
    PiMastodonLogo,
    PiMathOperations,
    PiMatrixLogo,
    PiMedalMilitary,
    PiMedal,
    PiMediumLogo,
    PiMegaphoneSimple,
    PiMegaphone,
    PiMemberOf,
    PiMemory,
    PiMessengerLogo,
    PiMetaLogo,
    PiMeteor,
    PiMetronome,
    PiMicrophoneSlash,
    PiMicrophoneStage,
    PiMicrophone,
    PiMicroscope,
    PiMicrosoftExcelLogo,
    PiMicrosoftOutlookLogo,
    PiMicrosoftPowerpointLogo,
    PiMicrosoftTeamsLogo,
    PiMicrosoftWordLogo,
    PiMinusCircle,
    PiMinusSquare,
    PiMinus,
    PiMoneyWavy,
    PiMoney,
    PiMonitorArrowUp,
    PiMonitorPlay,
    PiMonitor,
    PiMoonStars,
    PiMoon,
    PiMopedFront,
    PiMoped,
    PiMosque,
    PiMotorcycle,
    PiMountains,
    PiMouseLeftClick,
    PiMouseMiddleClick,
    PiMouseRightClick,
    PiMouseScroll,
    PiMouseSimple,
    PiMouse,
    PiMusicNoteSimple,
    PiMusicNote,
    PiMusicNotesMinus,
    PiMusicNotesPlus,
    PiMusicNotesSimple,
    PiMusicNotes,
    PiNavigationArrow,
    PiNeedle,
    PiNetworkSlash,
    PiNetworkX,
    PiNetwork,
    PiNewspaperClipping,
    PiNewspaper,
    PiNotEquals,
    PiNotMemberOf,
    PiNotSubsetOf,
    PiNotSupersetOf,
    PiNotches,
    PiNoteBlank,
} from "react-icons/pi"

export function nameToReactIcon_pi_6(iconName: string): IconType | undefined {

    switch(iconName) {
        case "pi:PiVignetteLight":
            return PiVignetteLight;
        case "pi:PiVinylRecordLight":
            return PiVinylRecordLight;
        case "pi:PiVirtualRealityLight":
            return PiVirtualRealityLight;
        case "pi:PiVirusLight":
            return PiVirusLight;
        case "pi:PiVisorLight":
            return PiVisorLight;
        case "pi:PiVoicemailLight":
            return PiVoicemailLight;
        case "pi:PiVolleyballLight":
            return PiVolleyballLight;
        case "pi:PiWallLight":
            return PiWallLight;
        case "pi:PiWalletLight":
            return PiWalletLight;
        case "pi:PiWarehouseLight":
            return PiWarehouseLight;
        case "pi:PiWarningCircleLight":
            return PiWarningCircleLight;
        case "pi:PiWarningDiamondLight":
            return PiWarningDiamondLight;
        case "pi:PiWarningLight":
            return PiWarningLight;
        case "pi:PiWarningOctagonLight":
            return PiWarningOctagonLight;
        case "pi:PiWashingMachineLight":
            return PiWashingMachineLight;
        case "pi:PiWatchLight":
            return PiWatchLight;
        case "pi:PiWaveSawtoothLight":
            return PiWaveSawtoothLight;
        case "pi:PiWaveSineLight":
            return PiWaveSineLight;
        case "pi:PiWaveSquareLight":
            return PiWaveSquareLight;
        case "pi:PiWaveTriangleLight":
            return PiWaveTriangleLight;
        case "pi:PiWaveformLight":
            return PiWaveformLight;
        case "pi:PiWaveformSlashLight":
            return PiWaveformSlashLight;
        case "pi:PiWavesLight":
            return PiWavesLight;
        case "pi:PiWebcamLight":
            return PiWebcamLight;
        case "pi:PiWebcamSlashLight":
            return PiWebcamSlashLight;
        case "pi:PiWebhooksLogoLight":
            return PiWebhooksLogoLight;
        case "pi:PiWechatLogoLight":
            return PiWechatLogoLight;
        case "pi:PiWhatsappLogoLight":
            return PiWhatsappLogoLight;
        case "pi:PiWheelchairLight":
            return PiWheelchairLight;
        case "pi:PiWheelchairMotionLight":
            return PiWheelchairMotionLight;
        case "pi:PiWifiHighLight":
            return PiWifiHighLight;
        case "pi:PiWifiLowLight":
            return PiWifiLowLight;
        case "pi:PiWifiMediumLight":
            return PiWifiMediumLight;
        case "pi:PiWifiNoneLight":
            return PiWifiNoneLight;
        case "pi:PiWifiSlashLight":
            return PiWifiSlashLight;
        case "pi:PiWifiXLight":
            return PiWifiXLight;
        case "pi:PiWindLight":
            return PiWindLight;
        case "pi:PiWindmillLight":
            return PiWindmillLight;
        case "pi:PiWindowsLogoLight":
            return PiWindowsLogoLight;
        case "pi:PiWineLight":
            return PiWineLight;
        case "pi:PiWrenchLight":
            return PiWrenchLight;
        case "pi:PiXCircleLight":
            return PiXCircleLight;
        case "pi:PiXLight":
            return PiXLight;
        case "pi:PiXLogoLight":
            return PiXLogoLight;
        case "pi:PiXSquareLight":
            return PiXSquareLight;
        case "pi:PiYarnLight":
            return PiYarnLight;
        case "pi:PiYinYangLight":
            return PiYinYangLight;
        case "pi:PiYoutubeLogoLight":
            return PiYoutubeLogoLight;
        case "pi:PiAcorn":
            return PiAcorn;
        case "pi:PiAddressBookTabs":
            return PiAddressBookTabs;
        case "pi:PiAddressBook":
            return PiAddressBook;
        case "pi:PiAirTrafficControl":
            return PiAirTrafficControl;
        case "pi:PiAirplaneInFlight":
            return PiAirplaneInFlight;
        case "pi:PiAirplaneLanding":
            return PiAirplaneLanding;
        case "pi:PiAirplaneTakeoff":
            return PiAirplaneTakeoff;
        case "pi:PiAirplaneTaxiing":
            return PiAirplaneTaxiing;
        case "pi:PiAirplaneTilt":
            return PiAirplaneTilt;
        case "pi:PiAirplane":
            return PiAirplane;
        case "pi:PiAirplay":
            return PiAirplay;
        case "pi:PiAlarm":
            return PiAlarm;
        case "pi:PiAlien":
            return PiAlien;
        case "pi:PiAlignBottomSimple":
            return PiAlignBottomSimple;
        case "pi:PiAlignBottom":
            return PiAlignBottom;
        case "pi:PiAlignCenterHorizontalSimple":
            return PiAlignCenterHorizontalSimple;
        case "pi:PiAlignCenterHorizontal":
            return PiAlignCenterHorizontal;
        case "pi:PiAlignCenterVerticalSimple":
            return PiAlignCenterVerticalSimple;
        case "pi:PiAlignCenterVertical":
            return PiAlignCenterVertical;
        case "pi:PiAlignLeftSimple":
            return PiAlignLeftSimple;
        case "pi:PiAlignLeft":
            return PiAlignLeft;
        case "pi:PiAlignRightSimple":
            return PiAlignRightSimple;
        case "pi:PiAlignRight":
            return PiAlignRight;
        case "pi:PiAlignTopSimple":
            return PiAlignTopSimple;
        case "pi:PiAlignTop":
            return PiAlignTop;
        case "pi:PiAmazonLogo":
            return PiAmazonLogo;
        case "pi:PiAmbulance":
            return PiAmbulance;
        case "pi:PiAnchorSimple":
            return PiAnchorSimple;
        case "pi:PiAnchor":
            return PiAnchor;
        case "pi:PiAndroidLogo":
            return PiAndroidLogo;
        case "pi:PiAngle":
            return PiAngle;
        case "pi:PiAngularLogo":
            return PiAngularLogo;
        case "pi:PiAperture":
            return PiAperture;
        case "pi:PiAppStoreLogo":
            return PiAppStoreLogo;
        case "pi:PiAppWindow":
            return PiAppWindow;
        case "pi:PiAppleLogo":
            return PiAppleLogo;
        case "pi:PiApplePodcastsLogo":
            return PiApplePodcastsLogo;
        case "pi:PiApproximateEquals":
            return PiApproximateEquals;
        case "pi:PiArchive":
            return PiArchive;
        case "pi:PiArmchair":
            return PiArmchair;
        case "pi:PiArrowArcLeft":
            return PiArrowArcLeft;
        case "pi:PiArrowArcRight":
            return PiArrowArcRight;
        case "pi:PiArrowBendDoubleUpLeft":
            return PiArrowBendDoubleUpLeft;
        case "pi:PiArrowBendDoubleUpRight":
            return PiArrowBendDoubleUpRight;
        case "pi:PiArrowBendDownLeft":
            return PiArrowBendDownLeft;
        case "pi:PiArrowBendDownRight":
            return PiArrowBendDownRight;
        case "pi:PiArrowBendLeftDown":
            return PiArrowBendLeftDown;
        case "pi:PiArrowBendLeftUp":
            return PiArrowBendLeftUp;
        case "pi:PiArrowBendRightDown":
            return PiArrowBendRightDown;
        case "pi:PiArrowBendRightUp":
            return PiArrowBendRightUp;
        case "pi:PiArrowBendUpLeft":
            return PiArrowBendUpLeft;
        case "pi:PiArrowBendUpRight":
            return PiArrowBendUpRight;
        case "pi:PiArrowCircleDownLeft":
            return PiArrowCircleDownLeft;
        case "pi:PiArrowCircleDownRight":
            return PiArrowCircleDownRight;
        case "pi:PiArrowCircleDown":
            return PiArrowCircleDown;
        case "pi:PiArrowCircleLeft":
            return PiArrowCircleLeft;
        case "pi:PiArrowCircleRight":
            return PiArrowCircleRight;
        case "pi:PiArrowCircleUpLeft":
            return PiArrowCircleUpLeft;
        case "pi:PiArrowCircleUpRight":
            return PiArrowCircleUpRight;
        case "pi:PiArrowCircleUp":
            return PiArrowCircleUp;
        case "pi:PiArrowClockwise":
            return PiArrowClockwise;
        case "pi:PiArrowCounterClockwise":
            return PiArrowCounterClockwise;
        case "pi:PiArrowDownLeft":
            return PiArrowDownLeft;
        case "pi:PiArrowDownRight":
            return PiArrowDownRight;
        case "pi:PiArrowDown":
            return PiArrowDown;
        case "pi:PiArrowElbowDownLeft":
            return PiArrowElbowDownLeft;
        case "pi:PiArrowElbowDownRight":
            return PiArrowElbowDownRight;
        case "pi:PiArrowElbowLeftDown":
            return PiArrowElbowLeftDown;
        case "pi:PiArrowElbowLeftUp":
            return PiArrowElbowLeftUp;
        case "pi:PiArrowElbowLeft":
            return PiArrowElbowLeft;
        case "pi:PiArrowElbowRightDown":
            return PiArrowElbowRightDown;
        case "pi:PiArrowElbowRightUp":
            return PiArrowElbowRightUp;
        case "pi:PiArrowElbowRight":
            return PiArrowElbowRight;
        case "pi:PiArrowElbowUpLeft":
            return PiArrowElbowUpLeft;
        case "pi:PiArrowElbowUpRight":
            return PiArrowElbowUpRight;
        case "pi:PiArrowFatDown":
            return PiArrowFatDown;
        case "pi:PiArrowFatLeft":
            return PiArrowFatLeft;
        case "pi:PiArrowFatLineDown":
            return PiArrowFatLineDown;
        case "pi:PiArrowFatLineLeft":
            return PiArrowFatLineLeft;
        case "pi:PiArrowFatLineRight":
            return PiArrowFatLineRight;
        case "pi:PiArrowFatLineUp":
            return PiArrowFatLineUp;
        case "pi:PiArrowFatLinesDown":
            return PiArrowFatLinesDown;
        case "pi:PiArrowFatLinesLeft":
            return PiArrowFatLinesLeft;
        case "pi:PiArrowFatLinesRight":
            return PiArrowFatLinesRight;
        case "pi:PiArrowFatLinesUp":
            return PiArrowFatLinesUp;
        case "pi:PiArrowFatRight":
            return PiArrowFatRight;
        case "pi:PiArrowFatUp":
            return PiArrowFatUp;
        case "pi:PiArrowLeft":
            return PiArrowLeft;
        case "pi:PiArrowLineDownLeft":
            return PiArrowLineDownLeft;
        case "pi:PiArrowLineDownRight":
            return PiArrowLineDownRight;
        case "pi:PiArrowLineDown":
            return PiArrowLineDown;
        case "pi:PiArrowLineLeft":
            return PiArrowLineLeft;
        case "pi:PiArrowLineRight":
            return PiArrowLineRight;
        case "pi:PiArrowLineUpLeft":
            return PiArrowLineUpLeft;
        case "pi:PiArrowLineUpRight":
            return PiArrowLineUpRight;
        case "pi:PiArrowLineUp":
            return PiArrowLineUp;
        case "pi:PiArrowRight":
            return PiArrowRight;
        case "pi:PiArrowSquareDownLeft":
            return PiArrowSquareDownLeft;
        case "pi:PiArrowSquareDownRight":
            return PiArrowSquareDownRight;
        case "pi:PiArrowSquareDown":
            return PiArrowSquareDown;
        case "pi:PiArrowSquareIn":
            return PiArrowSquareIn;
        case "pi:PiArrowSquareLeft":
            return PiArrowSquareLeft;
        case "pi:PiArrowSquareOut":
            return PiArrowSquareOut;
        case "pi:PiArrowSquareRight":
            return PiArrowSquareRight;
        case "pi:PiArrowSquareUpLeft":
            return PiArrowSquareUpLeft;
        case "pi:PiArrowSquareUpRight":
            return PiArrowSquareUpRight;
        case "pi:PiArrowSquareUp":
            return PiArrowSquareUp;
        case "pi:PiArrowUDownLeft":
            return PiArrowUDownLeft;
        case "pi:PiArrowUDownRight":
            return PiArrowUDownRight;
        case "pi:PiArrowULeftDown":
            return PiArrowULeftDown;
        case "pi:PiArrowULeftUp":
            return PiArrowULeftUp;
        case "pi:PiArrowURightDown":
            return PiArrowURightDown;
        case "pi:PiArrowURightUp":
            return PiArrowURightUp;
        case "pi:PiArrowUUpLeft":
            return PiArrowUUpLeft;
        case "pi:PiArrowUUpRight":
            return PiArrowUUpRight;
        case "pi:PiArrowUpLeft":
            return PiArrowUpLeft;
        case "pi:PiArrowUpRight":
            return PiArrowUpRight;
        case "pi:PiArrowUp":
            return PiArrowUp;
        case "pi:PiArrowsClockwise":
            return PiArrowsClockwise;
        case "pi:PiArrowsCounterClockwise":
            return PiArrowsCounterClockwise;
        case "pi:PiArrowsDownUp":
            return PiArrowsDownUp;
        case "pi:PiArrowsHorizontal":
            return PiArrowsHorizontal;
        case "pi:PiArrowsInCardinal":
            return PiArrowsInCardinal;
        case "pi:PiArrowsInLineHorizontal":
            return PiArrowsInLineHorizontal;
        case "pi:PiArrowsInLineVertical":
            return PiArrowsInLineVertical;
        case "pi:PiArrowsInSimple":
            return PiArrowsInSimple;
        case "pi:PiArrowsIn":
            return PiArrowsIn;
        case "pi:PiArrowsLeftRight":
            return PiArrowsLeftRight;
        case "pi:PiArrowsMerge":
            return PiArrowsMerge;
        case "pi:PiArrowsOutCardinal":
            return PiArrowsOutCardinal;
        case "pi:PiArrowsOutLineHorizontal":
            return PiArrowsOutLineHorizontal;
        case "pi:PiArrowsOutLineVertical":
            return PiArrowsOutLineVertical;
        case "pi:PiArrowsOutSimple":
            return PiArrowsOutSimple;
        case "pi:PiArrowsOut":
            return PiArrowsOut;
        case "pi:PiArrowsSplit":
            return PiArrowsSplit;
        case "pi:PiArrowsVertical":
            return PiArrowsVertical;
        case "pi:PiArticleMedium":
            return PiArticleMedium;
        case "pi:PiArticleNyTimes":
            return PiArticleNyTimes;
        case "pi:PiArticle":
            return PiArticle;
        case "pi:PiAsclepius":
            return PiAsclepius;
        case "pi:PiAsteriskSimple":
            return PiAsteriskSimple;
        case "pi:PiAsterisk":
            return PiAsterisk;
        case "pi:PiAt":
            return PiAt;
        case "pi:PiAtom":
            return PiAtom;
        case "pi:PiAvocado":
            return PiAvocado;
        case "pi:PiAxe":
            return PiAxe;
        case "pi:PiBabyCarriage":
            return PiBabyCarriage;
        case "pi:PiBaby":
            return PiBaby;
        case "pi:PiBackpack":
            return PiBackpack;
        case "pi:PiBackspace":
            return PiBackspace;
        case "pi:PiBagSimple":
            return PiBagSimple;
        case "pi:PiBag":
            return PiBag;
        case "pi:PiBalloon":
            return PiBalloon;
        case "pi:PiBandaids":
            return PiBandaids;
        case "pi:PiBank":
            return PiBank;
        case "pi:PiBarbell":
            return PiBarbell;
        case "pi:PiBarcode":
            return PiBarcode;
        case "pi:PiBarn":
            return PiBarn;
        case "pi:PiBarricade":
            return PiBarricade;
        case "pi:PiBaseballCap":
            return PiBaseballCap;
        case "pi:PiBaseballHelmet":
            return PiBaseballHelmet;
        case "pi:PiBaseball":
            return PiBaseball;
        case "pi:PiBasket":
            return PiBasket;
        case "pi:PiBasketball":
            return PiBasketball;
        case "pi:PiBathtub":
            return PiBathtub;
        case "pi:PiBatteryChargingVertical":
            return PiBatteryChargingVertical;
        case "pi:PiBatteryCharging":
            return PiBatteryCharging;
        case "pi:PiBatteryEmpty":
            return PiBatteryEmpty;
        case "pi:PiBatteryFull":
            return PiBatteryFull;
        case "pi:PiBatteryHigh":
            return PiBatteryHigh;
        case "pi:PiBatteryLow":
            return PiBatteryLow;
        case "pi:PiBatteryMedium":
            return PiBatteryMedium;
        case "pi:PiBatteryPlusVertical":
            return PiBatteryPlusVertical;
        case "pi:PiBatteryPlus":
            return PiBatteryPlus;
        case "pi:PiBatteryVerticalEmpty":
            return PiBatteryVerticalEmpty;
        case "pi:PiBatteryVerticalFull":
            return PiBatteryVerticalFull;
        case "pi:PiBatteryVerticalHigh":
            return PiBatteryVerticalHigh;
        case "pi:PiBatteryVerticalLow":
            return PiBatteryVerticalLow;
        case "pi:PiBatteryVerticalMedium":
            return PiBatteryVerticalMedium;
        case "pi:PiBatteryWarningVertical":
            return PiBatteryWarningVertical;
        case "pi:PiBatteryWarning":
            return PiBatteryWarning;
        case "pi:PiBeachBall":
            return PiBeachBall;
        case "pi:PiBeanie":
            return PiBeanie;
        case "pi:PiBed":
            return PiBed;
        case "pi:PiBeerBottle":
            return PiBeerBottle;
        case "pi:PiBeerStein":
            return PiBeerStein;
        case "pi:PiBehanceLogo":
            return PiBehanceLogo;
        case "pi:PiBellRinging":
            return PiBellRinging;
        case "pi:PiBellSimpleRinging":
            return PiBellSimpleRinging;
        case "pi:PiBellSimpleSlash":
            return PiBellSimpleSlash;
        case "pi:PiBellSimpleZ":
            return PiBellSimpleZ;
        case "pi:PiBellSimple":
            return PiBellSimple;
        case "pi:PiBellSlash":
            return PiBellSlash;
        case "pi:PiBellZ":
            return PiBellZ;
        case "pi:PiBell":
            return PiBell;
        case "pi:PiBelt":
            return PiBelt;
        case "pi:PiBezierCurve":
            return PiBezierCurve;
        case "pi:PiBicycle":
            return PiBicycle;
        case "pi:PiBinary":
            return PiBinary;
        case "pi:PiBinoculars":
            return PiBinoculars;
        case "pi:PiBiohazard":
            return PiBiohazard;
        case "pi:PiBird":
            return PiBird;
        case "pi:PiBlueprint":
            return PiBlueprint;
        case "pi:PiBluetoothConnected":
            return PiBluetoothConnected;
        case "pi:PiBluetoothSlash":
            return PiBluetoothSlash;
        case "pi:PiBluetoothX":
            return PiBluetoothX;
        case "pi:PiBluetooth":
            return PiBluetooth;
        case "pi:PiBoat":
            return PiBoat;
        case "pi:PiBomb":
            return PiBomb;
        case "pi:PiBone":
            return PiBone;
        case "pi:PiBookBookmark":
            return PiBookBookmark;
        case "pi:PiBookOpenText":
            return PiBookOpenText;
        case "pi:PiBookOpenUser":
            return PiBookOpenUser;
        case "pi:PiBookOpen":
            return PiBookOpen;
        case "pi:PiBook":
            return PiBook;
        case "pi:PiBookmarkSimple":
            return PiBookmarkSimple;
        case "pi:PiBookmark":
            return PiBookmark;
        case "pi:PiBookmarksSimple":
            return PiBookmarksSimple;
        case "pi:PiBookmarks":
            return PiBookmarks;
        case "pi:PiBooks":
            return PiBooks;
        case "pi:PiBoot":
            return PiBoot;
        case "pi:PiBoules":
            return PiBoules;
        case "pi:PiBoundingBox":
            return PiBoundingBox;
        case "pi:PiBowlFood":
            return PiBowlFood;
        case "pi:PiBowlSteam":
            return PiBowlSteam;
        case "pi:PiBowlingBall":
            return PiBowlingBall;
        case "pi:PiBoxArrowDown":
            return PiBoxArrowDown;
        case "pi:PiBoxArrowUp":
            return PiBoxArrowUp;
        case "pi:PiBoxingGlove":
            return PiBoxingGlove;
        case "pi:PiBracketsAngle":
            return PiBracketsAngle;
        case "pi:PiBracketsCurly":
            return PiBracketsCurly;
        case "pi:PiBracketsRound":
            return PiBracketsRound;
        case "pi:PiBracketsSquare":
            return PiBracketsSquare;
        case "pi:PiBrain":
            return PiBrain;
        case "pi:PiBrandy":
            return PiBrandy;
        case "pi:PiBread":
            return PiBread;
        case "pi:PiBridge":
            return PiBridge;
        case "pi:PiBriefcaseMetal":
            return PiBriefcaseMetal;
        case "pi:PiBriefcase":
            return PiBriefcase;
        case "pi:PiBroadcast":
            return PiBroadcast;
        case "pi:PiBroom":
            return PiBroom;
        case "pi:PiBrowser":
            return PiBrowser;
        case "pi:PiBrowsers":
            return PiBrowsers;
        case "pi:PiBugBeetle":
            return PiBugBeetle;
        case "pi:PiBugDroid":
            return PiBugDroid;
        case "pi:PiBug":
            return PiBug;
        case "pi:PiBuildingApartment":
            return PiBuildingApartment;
        case "pi:PiBuildingOffice":
            return PiBuildingOffice;
        case "pi:PiBuilding":
            return PiBuilding;
        case "pi:PiBuildings":
            return PiBuildings;
        case "pi:PiBulldozer":
            return PiBulldozer;
        case "pi:PiBus":
            return PiBus;
        case "pi:PiButterfly":
            return PiButterfly;
        case "pi:PiCableCar":
            return PiCableCar;
        case "pi:PiCactus":
            return PiCactus;
        case "pi:PiCake":
            return PiCake;
        case "pi:PiCalculator":
            return PiCalculator;
        case "pi:PiCalendarBlank":
            return PiCalendarBlank;
        case "pi:PiCalendarCheck":
            return PiCalendarCheck;
        case "pi:PiCalendarDot":
            return PiCalendarDot;
        case "pi:PiCalendarDots":
            return PiCalendarDots;
        case "pi:PiCalendarHeart":
            return PiCalendarHeart;
        case "pi:PiCalendarMinus":
            return PiCalendarMinus;
        case "pi:PiCalendarPlus":
            return PiCalendarPlus;
        case "pi:PiCalendarSlash":
            return PiCalendarSlash;
        case "pi:PiCalendarStar":
            return PiCalendarStar;
        case "pi:PiCalendarX":
            return PiCalendarX;
        case "pi:PiCalendar":
            return PiCalendar;
        case "pi:PiCallBell":
            return PiCallBell;
        case "pi:PiCameraPlus":
            return PiCameraPlus;
        case "pi:PiCameraRotate":
            return PiCameraRotate;
        case "pi:PiCameraSlash":
            return PiCameraSlash;
        case "pi:PiCamera":
            return PiCamera;
        case "pi:PiCampfire":
            return PiCampfire;
        case "pi:PiCarBattery":
            return PiCarBattery;
        case "pi:PiCarProfile":
            return PiCarProfile;
        case "pi:PiCarSimple":
            return PiCarSimple;
        case "pi:PiCar":
            return PiCar;
        case "pi:PiCardholder":
            return PiCardholder;
        case "pi:PiCardsThree":
            return PiCardsThree;
        case "pi:PiCards":
            return PiCards;
        case "pi:PiCaretCircleDoubleDown":
            return PiCaretCircleDoubleDown;
        case "pi:PiCaretCircleDoubleLeft":
            return PiCaretCircleDoubleLeft;
        case "pi:PiCaretCircleDoubleRight":
            return PiCaretCircleDoubleRight;
        case "pi:PiCaretCircleDoubleUp":
            return PiCaretCircleDoubleUp;
        case "pi:PiCaretCircleDown":
            return PiCaretCircleDown;
        case "pi:PiCaretCircleLeft":
            return PiCaretCircleLeft;
        case "pi:PiCaretCircleRight":
            return PiCaretCircleRight;
        case "pi:PiCaretCircleUpDown":
            return PiCaretCircleUpDown;
        case "pi:PiCaretCircleUp":
            return PiCaretCircleUp;
        case "pi:PiCaretDoubleDown":
            return PiCaretDoubleDown;
        case "pi:PiCaretDoubleLeft":
            return PiCaretDoubleLeft;
        case "pi:PiCaretDoubleRight":
            return PiCaretDoubleRight;
        case "pi:PiCaretDoubleUp":
            return PiCaretDoubleUp;
        case "pi:PiCaretDown":
            return PiCaretDown;
        case "pi:PiCaretLeft":
            return PiCaretLeft;
        case "pi:PiCaretLineDown":
            return PiCaretLineDown;
        case "pi:PiCaretLineLeft":
            return PiCaretLineLeft;
        case "pi:PiCaretLineRight":
            return PiCaretLineRight;
        case "pi:PiCaretLineUp":
            return PiCaretLineUp;
        case "pi:PiCaretRight":
            return PiCaretRight;
        case "pi:PiCaretUpDown":
            return PiCaretUpDown;
        case "pi:PiCaretUp":
            return PiCaretUp;
        case "pi:PiCarrot":
            return PiCarrot;
        case "pi:PiCashRegister":
            return PiCashRegister;
        case "pi:PiCassetteTape":
            return PiCassetteTape;
        case "pi:PiCastleTurret":
            return PiCastleTurret;
        case "pi:PiCat":
            return PiCat;
        case "pi:PiCellSignalFull":
            return PiCellSignalFull;
        case "pi:PiCellSignalHigh":
            return PiCellSignalHigh;
        case "pi:PiCellSignalLow":
            return PiCellSignalLow;
        case "pi:PiCellSignalMedium":
            return PiCellSignalMedium;
        case "pi:PiCellSignalNone":
            return PiCellSignalNone;
        case "pi:PiCellSignalSlash":
            return PiCellSignalSlash;
        case "pi:PiCellSignalX":
            return PiCellSignalX;
        case "pi:PiCellTower":
            return PiCellTower;
        case "pi:PiCertificate":
            return PiCertificate;
        case "pi:PiChair":
            return PiChair;
        case "pi:PiChalkboardSimple":
            return PiChalkboardSimple;
        case "pi:PiChalkboardTeacher":
            return PiChalkboardTeacher;
        case "pi:PiChalkboard":
            return PiChalkboard;
        case "pi:PiChampagne":
            return PiChampagne;
        case "pi:PiChargingStation":
            return PiChargingStation;
        case "pi:PiChartBarHorizontal":
            return PiChartBarHorizontal;
        case "pi:PiChartBar":
            return PiChartBar;
        case "pi:PiChartDonut":
            return PiChartDonut;
        case "pi:PiChartLineDown":
            return PiChartLineDown;
        case "pi:PiChartLineUp":
            return PiChartLineUp;
        case "pi:PiChartLine":
            return PiChartLine;
        case "pi:PiChartPieSlice":
            return PiChartPieSlice;
        case "pi:PiChartPie":
            return PiChartPie;
        case "pi:PiChartPolar":
            return PiChartPolar;
        case "pi:PiChartScatter":
            return PiChartScatter;
        case "pi:PiChatCenteredDots":
            return PiChatCenteredDots;
        case "pi:PiChatCenteredSlash":
            return PiChatCenteredSlash;
        case "pi:PiChatCenteredText":
            return PiChatCenteredText;
        case "pi:PiChatCentered":
            return PiChatCentered;
        case "pi:PiChatCircleDots":
            return PiChatCircleDots;
        case "pi:PiChatCircleSlash":
            return PiChatCircleSlash;
        case "pi:PiChatCircleText":
            return PiChatCircleText;
        case "pi:PiChatCircle":
            return PiChatCircle;
        case "pi:PiChatDots":
            return PiChatDots;
        case "pi:PiChatSlash":
            return PiChatSlash;
        case "pi:PiChatTeardropDots":
            return PiChatTeardropDots;
        case "pi:PiChatTeardropSlash":
            return PiChatTeardropSlash;
        case "pi:PiChatTeardropText":
            return PiChatTeardropText;
        case "pi:PiChatTeardrop":
            return PiChatTeardrop;
        case "pi:PiChatText":
            return PiChatText;
        case "pi:PiChat":
            return PiChat;
        case "pi:PiChatsCircle":
            return PiChatsCircle;
        case "pi:PiChatsTeardrop":
            return PiChatsTeardrop;
        case "pi:PiChats":
            return PiChats;
        case "pi:PiCheckCircle":
            return PiCheckCircle;
        case "pi:PiCheckFat":
            return PiCheckFat;
        case "pi:PiCheckSquareOffset":
            return PiCheckSquareOffset;
        case "pi:PiCheckSquare":
            return PiCheckSquare;
        case "pi:PiCheck":
            return PiCheck;
        case "pi:PiCheckerboard":
            return PiCheckerboard;
        case "pi:PiChecks":
            return PiChecks;
        case "pi:PiCheers":
            return PiCheers;
        case "pi:PiCheese":
            return PiCheese;
        case "pi:PiChefHat":
            return PiChefHat;
        case "pi:PiCherries":
            return PiCherries;
        case "pi:PiChurch":
            return PiChurch;
        case "pi:PiCigaretteSlash":
            return PiCigaretteSlash;
        case "pi:PiCigarette":
            return PiCigarette;
        case "pi:PiCircleDashed":
            return PiCircleDashed;
        case "pi:PiCircleHalfTilt":
            return PiCircleHalfTilt;
        case "pi:PiCircleHalf":
            return PiCircleHalf;
        case "pi:PiCircleNotch":
            return PiCircleNotch;
        case "pi:PiCircle":
            return PiCircle;
        case "pi:PiCirclesFour":
            return PiCirclesFour;
        case "pi:PiCirclesThreePlus":
            return PiCirclesThreePlus;
        case "pi:PiCirclesThree":
            return PiCirclesThree;
        case "pi:PiCircuitry":
            return PiCircuitry;
        case "pi:PiCity":
            return PiCity;
        case "pi:PiClipboardText":
            return PiClipboardText;
        case "pi:PiClipboard":
            return PiClipboard;
        case "pi:PiClockAfternoon":
            return PiClockAfternoon;
        case "pi:PiClockClockwise":
            return PiClockClockwise;
        case "pi:PiClockCountdown":
            return PiClockCountdown;
        case "pi:PiClockCounterClockwise":
            return PiClockCounterClockwise;
        case "pi:PiClockUser":
            return PiClockUser;
        case "pi:PiClock":
            return PiClock;
        case "pi:PiClosedCaptioning":
            return PiClosedCaptioning;
        case "pi:PiCloudArrowDown":
            return PiCloudArrowDown;
        case "pi:PiCloudArrowUp":
            return PiCloudArrowUp;
        case "pi:PiCloudCheck":
            return PiCloudCheck;
        case "pi:PiCloudFog":
            return PiCloudFog;
        case "pi:PiCloudLightning":
            return PiCloudLightning;
        case "pi:PiCloudMoon":
            return PiCloudMoon;
        case "pi:PiCloudRain":
            return PiCloudRain;
        case "pi:PiCloudSlash":
            return PiCloudSlash;
        case "pi:PiCloudSnow":
            return PiCloudSnow;
        case "pi:PiCloudSun":
            return PiCloudSun;
        case "pi:PiCloudWarning":
            return PiCloudWarning;
        case "pi:PiCloudX":
            return PiCloudX;
        case "pi:PiCloud":
            return PiCloud;
        case "pi:PiClover":
            return PiClover;
        case "pi:PiClub":
            return PiClub;
        case "pi:PiCoatHanger":
            return PiCoatHanger;
        case "pi:PiCodaLogo":
            return PiCodaLogo;
        case "pi:PiCodeBlock":
            return PiCodeBlock;
        case "pi:PiCodeSimple":
            return PiCodeSimple;
        case "pi:PiCode":
            return PiCode;
        case "pi:PiCodepenLogo":
            return PiCodepenLogo;
        case "pi:PiCodesandboxLogo":
            return PiCodesandboxLogo;
        case "pi:PiCoffeeBean":
            return PiCoffeeBean;
        case "pi:PiCoffee":
            return PiCoffee;
        case "pi:PiCoinVertical":
            return PiCoinVertical;
        case "pi:PiCoin":
            return PiCoin;
        case "pi:PiCoins":
            return PiCoins;
        case "pi:PiColumnsPlusLeft":
            return PiColumnsPlusLeft;
        case "pi:PiColumnsPlusRight":
            return PiColumnsPlusRight;
        case "pi:PiColumns":
            return PiColumns;
        case "pi:PiCommand":
            return PiCommand;
        case "pi:PiCompassRose":
            return PiCompassRose;
        case "pi:PiCompassTool":
            return PiCompassTool;
        case "pi:PiCompass":
            return PiCompass;
        case "pi:PiComputerTower":
            return PiComputerTower;
        case "pi:PiConfetti":
            return PiConfetti;
        case "pi:PiContactlessPayment":
            return PiContactlessPayment;
        case "pi:PiControl":
            return PiControl;
        case "pi:PiCookie":
            return PiCookie;
        case "pi:PiCookingPot":
            return PiCookingPot;
        case "pi:PiCopySimple":
            return PiCopySimple;
        case "pi:PiCopy":
            return PiCopy;
        case "pi:PiCopyleft":
            return PiCopyleft;
        case "pi:PiCopyright":
            return PiCopyright;
        case "pi:PiCornersIn":
            return PiCornersIn;
        case "pi:PiCornersOut":
            return PiCornersOut;
        case "pi:PiCouch":
            return PiCouch;
        case "pi:PiCourtBasketball":
            return PiCourtBasketball;
        case "pi:PiCow":
            return PiCow;
        case "pi:PiCowboyHat":
            return PiCowboyHat;
        case "pi:PiCpu":
            return PiCpu;
        case "pi:PiCraneTower":
            return PiCraneTower;
        case "pi:PiCrane":
            return PiCrane;
        case "pi:PiCreditCard":
            return PiCreditCard;
        case "pi:PiCricket":
            return PiCricket;
        case "pi:PiCrop":
            return PiCrop;
        case "pi:PiCross":
            return PiCross;
        case "pi:PiCrosshairSimple":
            return PiCrosshairSimple;
        case "pi:PiCrosshair":
            return PiCrosshair;
        case "pi:PiCrownCross":
            return PiCrownCross;
        case "pi:PiCrownSimple":
            return PiCrownSimple;
        case "pi:PiCrown":
            return PiCrown;
        case "pi:PiCubeFocus":
            return PiCubeFocus;
        case "pi:PiCubeTransparent":
            return PiCubeTransparent;
        case "pi:PiCube":
            return PiCube;
        case "pi:PiCurrencyBtc":
            return PiCurrencyBtc;
        case "pi:PiCurrencyCircleDollar":
            return PiCurrencyCircleDollar;
        case "pi:PiCurrencyCny":
            return PiCurrencyCny;
        case "pi:PiCurrencyDollarSimple":
            return PiCurrencyDollarSimple;
        case "pi:PiCurrencyDollar":
            return PiCurrencyDollar;
        case "pi:PiCurrencyEth":
            return PiCurrencyEth;
        case "pi:PiCurrencyEur":
            return PiCurrencyEur;
        case "pi:PiCurrencyGbp":
            return PiCurrencyGbp;
        case "pi:PiCurrencyInr":
            return PiCurrencyInr;
        case "pi:PiCurrencyJpy":
            return PiCurrencyJpy;
        case "pi:PiCurrencyKrw":
            return PiCurrencyKrw;
        case "pi:PiCurrencyKzt":
            return PiCurrencyKzt;
        case "pi:PiCurrencyNgn":
            return PiCurrencyNgn;
        case "pi:PiCurrencyRub":
            return PiCurrencyRub;
        case "pi:PiCursorClick":
            return PiCursorClick;
        case "pi:PiCursorText":
            return PiCursorText;
        case "pi:PiCursor":
            return PiCursor;
        case "pi:PiCylinder":
            return PiCylinder;
        case "pi:PiDatabase":
            return PiDatabase;
        case "pi:PiDesk":
            return PiDesk;
        case "pi:PiDesktopTower":
            return PiDesktopTower;
        case "pi:PiDesktop":
            return PiDesktop;
        case "pi:PiDetective":
            return PiDetective;
        case "pi:PiDevToLogo":
            return PiDevToLogo;
        case "pi:PiDeviceMobileCamera":
            return PiDeviceMobileCamera;
        case "pi:PiDeviceMobileSlash":
            return PiDeviceMobileSlash;
        case "pi:PiDeviceMobileSpeaker":
            return PiDeviceMobileSpeaker;
        case "pi:PiDeviceMobile":
            return PiDeviceMobile;
        case "pi:PiDeviceRotate":
            return PiDeviceRotate;
        case "pi:PiDeviceTabletCamera":
            return PiDeviceTabletCamera;
        case "pi:PiDeviceTabletSpeaker":
            return PiDeviceTabletSpeaker;
        case "pi:PiDeviceTablet":
            return PiDeviceTablet;
        case "pi:PiDevices":
            return PiDevices;
        case "pi:PiDiamond":
            return PiDiamond;
        case "pi:PiDiamondsFour":
            return PiDiamondsFour;
        case "pi:PiDiceFive":
            return PiDiceFive;
        case "pi:PiDiceFour":
            return PiDiceFour;
        case "pi:PiDiceOne":
            return PiDiceOne;
        case "pi:PiDiceSix":
            return PiDiceSix;
        case "pi:PiDiceThree":
            return PiDiceThree;
        case "pi:PiDiceTwo":
            return PiDiceTwo;
        case "pi:PiDisc":
            return PiDisc;
        case "pi:PiDiscoBall":
            return PiDiscoBall;
        case "pi:PiDiscordLogo":
            return PiDiscordLogo;
        case "pi:PiDivide":
            return PiDivide;
        case "pi:PiDna":
            return PiDna;
        case "pi:PiDog":
            return PiDog;
        case "pi:PiDoorOpen":
            return PiDoorOpen;
        case "pi:PiDoor":
            return PiDoor;
        case "pi:PiDotOutline":
            return PiDotOutline;
        case "pi:PiDot":
            return PiDot;
        case "pi:PiDotsNine":
            return PiDotsNine;
        case "pi:PiDotsSixVertical":
            return PiDotsSixVertical;
        case "pi:PiDotsSix":
            return PiDotsSix;
        case "pi:PiDotsThreeCircleVertical":
            return PiDotsThreeCircleVertical;
        case "pi:PiDotsThreeCircle":
            return PiDotsThreeCircle;
        case "pi:PiDotsThreeOutlineVertical":
            return PiDotsThreeOutlineVertical;
        case "pi:PiDotsThreeOutline":
            return PiDotsThreeOutline;
        case "pi:PiDotsThreeVertical":
            return PiDotsThreeVertical;
        case "pi:PiDotsThree":
            return PiDotsThree;
        case "pi:PiDownloadSimple":
            return PiDownloadSimple;
        case "pi:PiDownload":
            return PiDownload;
        case "pi:PiDress":
            return PiDress;
        case "pi:PiDresser":
            return PiDresser;
        case "pi:PiDribbbleLogo":
            return PiDribbbleLogo;
        case "pi:PiDrone":
            return PiDrone;
        case "pi:PiDropHalfBottom":
            return PiDropHalfBottom;
        case "pi:PiDropHalf":
            return PiDropHalf;
        case "pi:PiDropSimple":
            return PiDropSimple;
        case "pi:PiDropSlash":
            return PiDropSlash;
        case "pi:PiDrop":
            return PiDrop;
        case "pi:PiDropboxLogo":
            return PiDropboxLogo;
        case "pi:PiEarSlash":
            return PiEarSlash;
        case "pi:PiEar":
            return PiEar;
        case "pi:PiEggCrack":
            return PiEggCrack;
        case "pi:PiEgg":
            return PiEgg;
        case "pi:PiEjectSimple":
            return PiEjectSimple;
        case "pi:PiEject":
            return PiEject;
        case "pi:PiElevator":
            return PiElevator;
        case "pi:PiEmpty":
            return PiEmpty;
        case "pi:PiEngine":
            return PiEngine;
        case "pi:PiEnvelopeOpen":
            return PiEnvelopeOpen;
        case "pi:PiEnvelopeSimpleOpen":
            return PiEnvelopeSimpleOpen;
        case "pi:PiEnvelopeSimple":
            return PiEnvelopeSimple;
        case "pi:PiEnvelope":
            return PiEnvelope;
        case "pi:PiEqualizer":
            return PiEqualizer;
        case "pi:PiEquals":
            return PiEquals;
        case "pi:PiEraser":
            return PiEraser;
        case "pi:PiEscalatorDown":
            return PiEscalatorDown;
        case "pi:PiEscalatorUp":
            return PiEscalatorUp;
        case "pi:PiExam":
            return PiExam;
        case "pi:PiExclamationMark":
            return PiExclamationMark;
        case "pi:PiExcludeSquare":
            return PiExcludeSquare;
        case "pi:PiExclude":
            return PiExclude;
        case "pi:PiExport":
            return PiExport;
        case "pi:PiEyeClosed":
            return PiEyeClosed;
        case "pi:PiEyeSlash":
            return PiEyeSlash;
        case "pi:PiEye":
            return PiEye;
        case "pi:PiEyedropperSample":
            return PiEyedropperSample;
        case "pi:PiEyedropper":
            return PiEyedropper;
        case "pi:PiEyeglasses":
            return PiEyeglasses;
        case "pi:PiEyes":
            return PiEyes;
        case "pi:PiFaceMask":
            return PiFaceMask;
        case "pi:PiFacebookLogo":
            return PiFacebookLogo;
        case "pi:PiFactory":
            return PiFactory;
        case "pi:PiFadersHorizontal":
            return PiFadersHorizontal;
        case "pi:PiFaders":
            return PiFaders;
        case "pi:PiFalloutShelter":
            return PiFalloutShelter;
        case "pi:PiFan":
            return PiFan;
        case "pi:PiFarm":
            return PiFarm;
        case "pi:PiFastForwardCircle":
            return PiFastForwardCircle;
        case "pi:PiFastForward":
            return PiFastForward;
        case "pi:PiFeather":
            return PiFeather;
        case "pi:PiFediverseLogo":
            return PiFediverseLogo;
        case "pi:PiFigmaLogo":
            return PiFigmaLogo;
        case "pi:PiFileArchive":
            return PiFileArchive;
        case "pi:PiFileArrowDown":
            return PiFileArrowDown;
        case "pi:PiFileArrowUp":
            return PiFileArrowUp;
        case "pi:PiFileAudio":
            return PiFileAudio;
        case "pi:PiFileCSharp":
            return PiFileCSharp;
        case "pi:PiFileC":
            return PiFileC;
        case "pi:PiFileCloud":
            return PiFileCloud;
        case "pi:PiFileCode":
            return PiFileCode;
        case "pi:PiFileCpp":
            return PiFileCpp;
        case "pi:PiFileCss":
            return PiFileCss;
        case "pi:PiFileCsv":
            return PiFileCsv;
        case "pi:PiFileDashed":
            return PiFileDashed;
        case "pi:PiFileDoc":
            return PiFileDoc;
        case "pi:PiFileHtml":
            return PiFileHtml;
        case "pi:PiFileImage":
            return PiFileImage;
        case "pi:PiFileIni":
            return PiFileIni;
        case "pi:PiFileJpg":
            return PiFileJpg;
        case "pi:PiFileJs":
            return PiFileJs;
        case "pi:PiFileJsx":
            return PiFileJsx;
        case "pi:PiFileLock":
            return PiFileLock;
        case "pi:PiFileMagnifyingGlass":
            return PiFileMagnifyingGlass;
        case "pi:PiFileMd":
            return PiFileMd;
        case "pi:PiFileMinus":
            return PiFileMinus;
        case "pi:PiFilePdf":
            return PiFilePdf;
        case "pi:PiFilePlus":
            return PiFilePlus;
        case "pi:PiFilePng":
            return PiFilePng;
        case "pi:PiFilePpt":
            return PiFilePpt;
        case "pi:PiFilePy":
            return PiFilePy;
        case "pi:PiFileRs":
            return PiFileRs;
        case "pi:PiFileSql":
            return PiFileSql;
        case "pi:PiFileSvg":
            return PiFileSvg;
        case "pi:PiFileText":
            return PiFileText;
        case "pi:PiFileTs":
            return PiFileTs;
        case "pi:PiFileTsx":
            return PiFileTsx;
        case "pi:PiFileTxt":
            return PiFileTxt;
        case "pi:PiFileVideo":
            return PiFileVideo;
        case "pi:PiFileVue":
            return PiFileVue;
        case "pi:PiFileX":
            return PiFileX;
        case "pi:PiFileXls":
            return PiFileXls;
        case "pi:PiFileZip":
            return PiFileZip;
        case "pi:PiFile":
            return PiFile;
        case "pi:PiFiles":
            return PiFiles;
        case "pi:PiFilmReel":
            return PiFilmReel;
        case "pi:PiFilmScript":
            return PiFilmScript;
        case "pi:PiFilmSlate":
            return PiFilmSlate;
        case "pi:PiFilmStrip":
            return PiFilmStrip;
        case "pi:PiFingerprintSimple":
            return PiFingerprintSimple;
        case "pi:PiFingerprint":
            return PiFingerprint;
        case "pi:PiFinnTheHuman":
            return PiFinnTheHuman;
        case "pi:PiFireExtinguisher":
            return PiFireExtinguisher;
        case "pi:PiFireSimple":
            return PiFireSimple;
        case "pi:PiFireTruck":
            return PiFireTruck;
        case "pi:PiFire":
            return PiFire;
        case "pi:PiFirstAidKit":
            return PiFirstAidKit;
        case "pi:PiFirstAid":
            return PiFirstAid;
        case "pi:PiFishSimple":
            return PiFishSimple;
        case "pi:PiFish":
            return PiFish;
        case "pi:PiFlagBannerFold":
            return PiFlagBannerFold;
        case "pi:PiFlagBanner":
            return PiFlagBanner;
        case "pi:PiFlagCheckered":
            return PiFlagCheckered;
        case "pi:PiFlagPennant":
            return PiFlagPennant;
        case "pi:PiFlag":
            return PiFlag;
        case "pi:PiFlame":
            return PiFlame;
        case "pi:PiFlashlight":
            return PiFlashlight;
        case "pi:PiFlask":
            return PiFlask;
        case "pi:PiFlipHorizontal":
            return PiFlipHorizontal;
        case "pi:PiFlipVertical":
            return PiFlipVertical;
        case "pi:PiFloppyDiskBack":
            return PiFloppyDiskBack;
        case "pi:PiFloppyDisk":
            return PiFloppyDisk;
        case "pi:PiFlowArrow":
            return PiFlowArrow;
        case "pi:PiFlowerLotus":
            return PiFlowerLotus;
        case "pi:PiFlowerTulip":
            return PiFlowerTulip;
        case "pi:PiFlower":
            return PiFlower;
        case "pi:PiFlyingSaucer":
            return PiFlyingSaucer;
        case "pi:PiFolderDashed":
            return PiFolderDashed;
        case "pi:PiFolderLock":
            return PiFolderLock;
        case "pi:PiFolderMinus":
            return PiFolderMinus;
        case "pi:PiFolderOpen":
            return PiFolderOpen;
        case "pi:PiFolderPlus":
            return PiFolderPlus;
        case "pi:PiFolderSimpleDashed":
            return PiFolderSimpleDashed;
        case "pi:PiFolderSimpleLock":
            return PiFolderSimpleLock;
        case "pi:PiFolderSimpleMinus":
            return PiFolderSimpleMinus;
        case "pi:PiFolderSimplePlus":
            return PiFolderSimplePlus;
        case "pi:PiFolderSimpleStar":
            return PiFolderSimpleStar;
        case "pi:PiFolderSimpleUser":
            return PiFolderSimpleUser;
        case "pi:PiFolderSimple":
            return PiFolderSimple;
        case "pi:PiFolderStar":
            return PiFolderStar;
        case "pi:PiFolderUser":
            return PiFolderUser;
        case "pi:PiFolder":
            return PiFolder;
        case "pi:PiFolders":
            return PiFolders;
        case "pi:PiFootballHelmet":
            return PiFootballHelmet;
        case "pi:PiFootball":
            return PiFootball;
        case "pi:PiFootprints":
            return PiFootprints;
        case "pi:PiForkKnife":
            return PiForkKnife;
        case "pi:PiFourK":
            return PiFourK;
        case "pi:PiFrameCorners":
            return PiFrameCorners;
        case "pi:PiFramerLogo":
            return PiFramerLogo;
        case "pi:PiFunction":
            return PiFunction;
        case "pi:PiFunnelSimpleX":
            return PiFunnelSimpleX;
        case "pi:PiFunnelSimple":
            return PiFunnelSimple;
        case "pi:PiFunnelX":
            return PiFunnelX;
        case "pi:PiFunnel":
            return PiFunnel;
        case "pi:PiGameController":
            return PiGameController;
        case "pi:PiGarage":
            return PiGarage;
        case "pi:PiGasCan":
            return PiGasCan;
        case "pi:PiGasPump":
            return PiGasPump;
        case "pi:PiGauge":
            return PiGauge;
        case "pi:PiGavel":
            return PiGavel;
        case "pi:PiGearFine":
            return PiGearFine;
        case "pi:PiGearSix":
            return PiGearSix;
        case "pi:PiGear":
            return PiGear;
        case "pi:PiGenderFemale":
            return PiGenderFemale;
        case "pi:PiGenderIntersex":
            return PiGenderIntersex;
        case "pi:PiGenderMale":
            return PiGenderMale;
        case "pi:PiGenderNeuter":
            return PiGenderNeuter;
        case "pi:PiGenderNonbinary":
            return PiGenderNonbinary;
        case "pi:PiGenderTransgender":
            return PiGenderTransgender;
        case "pi:PiGhost":
            return PiGhost;
        case "pi:PiGif":
            return PiGif;
        case "pi:PiGift":
            return PiGift;
        case "pi:PiGitBranch":
            return PiGitBranch;
        case "pi:PiGitCommit":
            return PiGitCommit;
        case "pi:PiGitDiff":
            return PiGitDiff;
        case "pi:PiGitFork":
            return PiGitFork;
        case "pi:PiGitMerge":
            return PiGitMerge;
        case "pi:PiGitPullRequest":
            return PiGitPullRequest;
        case "pi:PiGithubLogo":
            return PiGithubLogo;
        case "pi:PiGitlabLogoSimple":
            return PiGitlabLogoSimple;
        case "pi:PiGitlabLogo":
            return PiGitlabLogo;
        case "pi:PiGlobeHemisphereEast":
            return PiGlobeHemisphereEast;
        case "pi:PiGlobeHemisphereWest":
            return PiGlobeHemisphereWest;
        case "pi:PiGlobeSimpleX":
            return PiGlobeSimpleX;
        case "pi:PiGlobeSimple":
            return PiGlobeSimple;
        case "pi:PiGlobeStand":
            return PiGlobeStand;
        case "pi:PiGlobeX":
            return PiGlobeX;
        case "pi:PiGlobe":
            return PiGlobe;
        case "pi:PiGoggles":
            return PiGoggles;
        case "pi:PiGolf":
            return PiGolf;
        case "pi:PiGoodreadsLogo":
            return PiGoodreadsLogo;
        case "pi:PiGoogleCardboardLogo":
            return PiGoogleCardboardLogo;
        case "pi:PiGoogleChromeLogo":
            return PiGoogleChromeLogo;
        case "pi:PiGoogleDriveLogo":
            return PiGoogleDriveLogo;
        case "pi:PiGoogleLogo":
            return PiGoogleLogo;
        case "pi:PiGooglePhotosLogo":
            return PiGooglePhotosLogo;
        case "pi:PiGooglePlayLogo":
            return PiGooglePlayLogo;
        case "pi:PiGooglePodcastsLogo":
            return PiGooglePodcastsLogo;
        case "pi:PiGpsFix":
            return PiGpsFix;
        case "pi:PiGpsSlash":
            return PiGpsSlash;
        case "pi:PiGps":
            return PiGps;
        case "pi:PiGradient":
            return PiGradient;
        case "pi:PiGraduationCap":
            return PiGraduationCap;
        case "pi:PiGrainsSlash":
            return PiGrainsSlash;
        case "pi:PiGrains":
            return PiGrains;
        case "pi:PiGraph":
            return PiGraph;
        case "pi:PiGraphicsCard":
            return PiGraphicsCard;
        case "pi:PiGreaterThanOrEqual":
            return PiGreaterThanOrEqual;
        case "pi:PiGreaterThan":
            return PiGreaterThan;
        case "pi:PiGridFour":
            return PiGridFour;
        case "pi:PiGridNine":
            return PiGridNine;
        case "pi:PiGuitar":
            return PiGuitar;
        case "pi:PiHairDryer":
            return PiHairDryer;
        case "pi:PiHamburger":
            return PiHamburger;
        case "pi:PiHammer":
            return PiHammer;
        case "pi:PiHandArrowDown":
            return PiHandArrowDown;
        case "pi:PiHandArrowUp":
            return PiHandArrowUp;
        case "pi:PiHandCoins":
            return PiHandCoins;
        case "pi:PiHandDeposit":
            return PiHandDeposit;
        case "pi:PiHandEye":
            return PiHandEye;
        case "pi:PiHandFist":
            return PiHandFist;
        case "pi:PiHandGrabbing":
            return PiHandGrabbing;
        case "pi:PiHandHeart":
            return PiHandHeart;
        case "pi:PiHandPalm":
            return PiHandPalm;
        case "pi:PiHandPeace":
            return PiHandPeace;
        case "pi:PiHandPointing":
            return PiHandPointing;
        case "pi:PiHandSoap":
            return PiHandSoap;
        case "pi:PiHandSwipeLeft":
            return PiHandSwipeLeft;
        case "pi:PiHandSwipeRight":
            return PiHandSwipeRight;
        case "pi:PiHandTap":
            return PiHandTap;
        case "pi:PiHandWaving":
            return PiHandWaving;
        case "pi:PiHandWithdraw":
            return PiHandWithdraw;
        case "pi:PiHand":
            return PiHand;
        case "pi:PiHandbagSimple":
            return PiHandbagSimple;
        case "pi:PiHandbag":
            return PiHandbag;
        case "pi:PiHandsClapping":
            return PiHandsClapping;
        case "pi:PiHandsPraying":
            return PiHandsPraying;
        case "pi:PiHandshake":
            return PiHandshake;
        case "pi:PiHardDrive":
            return PiHardDrive;
        case "pi:PiHardDrives":
            return PiHardDrives;
        case "pi:PiHardHat":
            return PiHardHat;
        case "pi:PiHashStraight":
            return PiHashStraight;
        case "pi:PiHash":
            return PiHash;
        case "pi:PiHeadCircuit":
            return PiHeadCircuit;
        case "pi:PiHeadlights":
            return PiHeadlights;
        case "pi:PiHeadphones":
            return PiHeadphones;
        case "pi:PiHeadset":
            return PiHeadset;
        case "pi:PiHeartBreak":
            return PiHeartBreak;
        case "pi:PiHeartHalf":
            return PiHeartHalf;
        case "pi:PiHeartStraightBreak":
            return PiHeartStraightBreak;
        case "pi:PiHeartStraight":
            return PiHeartStraight;
        case "pi:PiHeart":
            return PiHeart;
        case "pi:PiHeartbeat":
            return PiHeartbeat;
        case "pi:PiHexagon":
            return PiHexagon;
        case "pi:PiHighDefinition":
            return PiHighDefinition;
        case "pi:PiHighHeel":
            return PiHighHeel;
        case "pi:PiHighlighterCircle":
            return PiHighlighterCircle;
        case "pi:PiHighlighter":
            return PiHighlighter;
        case "pi:PiHockey":
            return PiHockey;
        case "pi:PiHoodie":
            return PiHoodie;
        case "pi:PiHorse":
            return PiHorse;
        case "pi:PiHospital":
            return PiHospital;
        case "pi:PiHourglassHigh":
            return PiHourglassHigh;
        case "pi:PiHourglassLow":
            return PiHourglassLow;
        case "pi:PiHourglassMedium":
            return PiHourglassMedium;
        case "pi:PiHourglassSimpleHigh":
            return PiHourglassSimpleHigh;
        case "pi:PiHourglassSimpleLow":
            return PiHourglassSimpleLow;
        case "pi:PiHourglassSimpleMedium":
            return PiHourglassSimpleMedium;
        case "pi:PiHourglassSimple":
            return PiHourglassSimple;
        case "pi:PiHourglass":
            return PiHourglass;
        case "pi:PiHouseLine":
            return PiHouseLine;
        case "pi:PiHouseSimple":
            return PiHouseSimple;
        case "pi:PiHouse":
            return PiHouse;
        case "pi:PiHurricane":
            return PiHurricane;
        case "pi:PiIceCream":
            return PiIceCream;
        case "pi:PiIdentificationBadge":
            return PiIdentificationBadge;
        case "pi:PiIdentificationCard":
            return PiIdentificationCard;
        case "pi:PiImageBroken":
            return PiImageBroken;
        case "pi:PiImageSquare":
            return PiImageSquare;
        case "pi:PiImage":
            return PiImage;
        case "pi:PiImagesSquare":
            return PiImagesSquare;
        case "pi:PiImages":
            return PiImages;
        case "pi:PiInfinity":
            return PiInfinity;
        case "pi:PiInfo":
            return PiInfo;
        case "pi:PiInstagramLogo":
            return PiInstagramLogo;
        case "pi:PiIntersectSquare":
            return PiIntersectSquare;
        case "pi:PiIntersectThree":
            return PiIntersectThree;
        case "pi:PiIntersect":
            return PiIntersect;
        case "pi:PiIntersection":
            return PiIntersection;
        case "pi:PiInvoice":
            return PiInvoice;
        case "pi:PiIsland":
            return PiIsland;
        case "pi:PiJarLabel":
            return PiJarLabel;
        case "pi:PiJar":
            return PiJar;
        case "pi:PiJeep":
            return PiJeep;
        case "pi:PiJoystick":
            return PiJoystick;
        case "pi:PiKanban":
            return PiKanban;
        case "pi:PiKeyReturn":
            return PiKeyReturn;
        case "pi:PiKey":
            return PiKey;
        case "pi:PiKeyboard":
            return PiKeyboard;
        case "pi:PiKeyhole":
            return PiKeyhole;
        case "pi:PiKnife":
            return PiKnife;
        case "pi:PiLadderSimple":
            return PiLadderSimple;
        case "pi:PiLadder":
            return PiLadder;
        case "pi:PiLampPendant":
            return PiLampPendant;
        case "pi:PiLamp":
            return PiLamp;
        case "pi:PiLaptop":
            return PiLaptop;
        case "pi:PiLasso":
            return PiLasso;
        case "pi:PiLastfmLogo":
            return PiLastfmLogo;
        case "pi:PiLayout":
            return PiLayout;
        case "pi:PiLeaf":
            return PiLeaf;
        case "pi:PiLectern":
            return PiLectern;
        case "pi:PiLegoSmiley":
            return PiLegoSmiley;
        case "pi:PiLego":
            return PiLego;
        case "pi:PiLessThanOrEqual":
            return PiLessThanOrEqual;
        case "pi:PiLessThan":
            return PiLessThan;
        case "pi:PiLetterCircleH":
            return PiLetterCircleH;
        case "pi:PiLetterCircleP":
            return PiLetterCircleP;
        case "pi:PiLetterCircleV":
            return PiLetterCircleV;
        case "pi:PiLifebuoy":
            return PiLifebuoy;
        case "pi:PiLightbulbFilament":
            return PiLightbulbFilament;
        case "pi:PiLightbulb":
            return PiLightbulb;
        case "pi:PiLighthouse":
            return PiLighthouse;
        case "pi:PiLightningA":
            return PiLightningA;
        case "pi:PiLightningSlash":
            return PiLightningSlash;
        case "pi:PiLightning":
            return PiLightning;
        case "pi:PiLineSegment":
            return PiLineSegment;
        case "pi:PiLineSegments":
            return PiLineSegments;
        case "pi:PiLineVertical":
            return PiLineVertical;
        case "pi:PiLinkBreak":
            return PiLinkBreak;
        case "pi:PiLinkSimpleBreak":
            return PiLinkSimpleBreak;
        case "pi:PiLinkSimpleHorizontalBreak":
            return PiLinkSimpleHorizontalBreak;
        case "pi:PiLinkSimpleHorizontal":
            return PiLinkSimpleHorizontal;
        case "pi:PiLinkSimple":
            return PiLinkSimple;
        case "pi:PiLink":
            return PiLink;
        case "pi:PiLinkedinLogo":
            return PiLinkedinLogo;
        case "pi:PiLinktreeLogo":
            return PiLinktreeLogo;
        case "pi:PiLinuxLogo":
            return PiLinuxLogo;
        case "pi:PiListBullets":
            return PiListBullets;
        case "pi:PiListChecks":
            return PiListChecks;
        case "pi:PiListDashes":
            return PiListDashes;
        case "pi:PiListHeart":
            return PiListHeart;
        case "pi:PiListMagnifyingGlass":
            return PiListMagnifyingGlass;
        case "pi:PiListNumbers":
            return PiListNumbers;
        case "pi:PiListPlus":
            return PiListPlus;
        case "pi:PiListStar":
            return PiListStar;
        case "pi:PiList":
            return PiList;
        case "pi:PiLockKeyOpen":
            return PiLockKeyOpen;
        case "pi:PiLockKey":
            return PiLockKey;
        case "pi:PiLockLaminatedOpen":
            return PiLockLaminatedOpen;
        case "pi:PiLockLaminated":
            return PiLockLaminated;
        case "pi:PiLockOpen":
            return PiLockOpen;
        case "pi:PiLockSimpleOpen":
            return PiLockSimpleOpen;
        case "pi:PiLockSimple":
            return PiLockSimple;
        case "pi:PiLock":
            return PiLock;
        case "pi:PiLockers":
            return PiLockers;
        case "pi:PiLog":
            return PiLog;
        case "pi:PiMagicWand":
            return PiMagicWand;
        case "pi:PiMagnetStraight":
            return PiMagnetStraight;
        case "pi:PiMagnet":
            return PiMagnet;
        case "pi:PiMagnifyingGlassMinus":
            return PiMagnifyingGlassMinus;
        case "pi:PiMagnifyingGlassPlus":
            return PiMagnifyingGlassPlus;
        case "pi:PiMagnifyingGlass":
            return PiMagnifyingGlass;
        case "pi:PiMailbox":
            return PiMailbox;
        case "pi:PiMapPinArea":
            return PiMapPinArea;
        case "pi:PiMapPinLine":
            return PiMapPinLine;
        case "pi:PiMapPinPlus":
            return PiMapPinPlus;
        case "pi:PiMapPinSimpleArea":
            return PiMapPinSimpleArea;
        case "pi:PiMapPinSimpleLine":
            return PiMapPinSimpleLine;
        case "pi:PiMapPinSimple":
            return PiMapPinSimple;
        case "pi:PiMapPin":
            return PiMapPin;
        case "pi:PiMapTrifold":
            return PiMapTrifold;
        case "pi:PiMarkdownLogo":
            return PiMarkdownLogo;
        case "pi:PiMarkerCircle":
            return PiMarkerCircle;
        case "pi:PiMartini":
            return PiMartini;
        case "pi:PiMaskHappy":
            return PiMaskHappy;
        case "pi:PiMaskSad":
            return PiMaskSad;
        case "pi:PiMastodonLogo":
            return PiMastodonLogo;
        case "pi:PiMathOperations":
            return PiMathOperations;
        case "pi:PiMatrixLogo":
            return PiMatrixLogo;
        case "pi:PiMedalMilitary":
            return PiMedalMilitary;
        case "pi:PiMedal":
            return PiMedal;
        case "pi:PiMediumLogo":
            return PiMediumLogo;
        case "pi:PiMegaphoneSimple":
            return PiMegaphoneSimple;
        case "pi:PiMegaphone":
            return PiMegaphone;
        case "pi:PiMemberOf":
            return PiMemberOf;
        case "pi:PiMemory":
            return PiMemory;
        case "pi:PiMessengerLogo":
            return PiMessengerLogo;
        case "pi:PiMetaLogo":
            return PiMetaLogo;
        case "pi:PiMeteor":
            return PiMeteor;
        case "pi:PiMetronome":
            return PiMetronome;
        case "pi:PiMicrophoneSlash":
            return PiMicrophoneSlash;
        case "pi:PiMicrophoneStage":
            return PiMicrophoneStage;
        case "pi:PiMicrophone":
            return PiMicrophone;
        case "pi:PiMicroscope":
            return PiMicroscope;
        case "pi:PiMicrosoftExcelLogo":
            return PiMicrosoftExcelLogo;
        case "pi:PiMicrosoftOutlookLogo":
            return PiMicrosoftOutlookLogo;
        case "pi:PiMicrosoftPowerpointLogo":
            return PiMicrosoftPowerpointLogo;
        case "pi:PiMicrosoftTeamsLogo":
            return PiMicrosoftTeamsLogo;
        case "pi:PiMicrosoftWordLogo":
            return PiMicrosoftWordLogo;
        case "pi:PiMinusCircle":
            return PiMinusCircle;
        case "pi:PiMinusSquare":
            return PiMinusSquare;
        case "pi:PiMinus":
            return PiMinus;
        case "pi:PiMoneyWavy":
            return PiMoneyWavy;
        case "pi:PiMoney":
            return PiMoney;
        case "pi:PiMonitorArrowUp":
            return PiMonitorArrowUp;
        case "pi:PiMonitorPlay":
            return PiMonitorPlay;
        case "pi:PiMonitor":
            return PiMonitor;
        case "pi:PiMoonStars":
            return PiMoonStars;
        case "pi:PiMoon":
            return PiMoon;
        case "pi:PiMopedFront":
            return PiMopedFront;
        case "pi:PiMoped":
            return PiMoped;
        case "pi:PiMosque":
            return PiMosque;
        case "pi:PiMotorcycle":
            return PiMotorcycle;
        case "pi:PiMountains":
            return PiMountains;
        case "pi:PiMouseLeftClick":
            return PiMouseLeftClick;
        case "pi:PiMouseMiddleClick":
            return PiMouseMiddleClick;
        case "pi:PiMouseRightClick":
            return PiMouseRightClick;
        case "pi:PiMouseScroll":
            return PiMouseScroll;
        case "pi:PiMouseSimple":
            return PiMouseSimple;
        case "pi:PiMouse":
            return PiMouse;
        case "pi:PiMusicNoteSimple":
            return PiMusicNoteSimple;
        case "pi:PiMusicNote":
            return PiMusicNote;
        case "pi:PiMusicNotesMinus":
            return PiMusicNotesMinus;
        case "pi:PiMusicNotesPlus":
            return PiMusicNotesPlus;
        case "pi:PiMusicNotesSimple":
            return PiMusicNotesSimple;
        case "pi:PiMusicNotes":
            return PiMusicNotes;
        case "pi:PiNavigationArrow":
            return PiNavigationArrow;
        case "pi:PiNeedle":
            return PiNeedle;
        case "pi:PiNetworkSlash":
            return PiNetworkSlash;
        case "pi:PiNetworkX":
            return PiNetworkX;
        case "pi:PiNetwork":
            return PiNetwork;
        case "pi:PiNewspaperClipping":
            return PiNewspaperClipping;
        case "pi:PiNewspaper":
            return PiNewspaper;
        case "pi:PiNotEquals":
            return PiNotEquals;
        case "pi:PiNotMemberOf":
            return PiNotMemberOf;
        case "pi:PiNotSubsetOf":
            return PiNotSubsetOf;
        case "pi:PiNotSupersetOf":
            return PiNotSupersetOf;
        case "pi:PiNotches":
            return PiNotches;
        case "pi:PiNoteBlank":
            return PiNoteBlank;
    }
}
