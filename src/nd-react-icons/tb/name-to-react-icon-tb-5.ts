import type {IconType} from "react-icons";

import {
    TbShoppingCartSearch,
    TbShoppingCartShare,
    TbShoppingCartStar,
    TbShoppingCartUp,
    TbShoppingCartX,
    TbShoppingCart,
    TbShovelPitchforks,
    TbShovel,
    TbShredder,
    TbSignLeft,
    TbSignRight,
    TbSignal2G,
    TbSignal3G,
    TbSignal4gPlus,
    TbSignal4G,
    TbSignal5G,
    TbSignal6G,
    TbSignalE,
    TbSignalG,
    TbSignalHPlus,
    TbSignalH,
    TbSignalLte,
    TbSignatureOff,
    TbSignature,
    TbSitemapOff,
    TbSitemap,
    TbSkateboardOff,
    TbSkateboard,
    TbSkateboarding,
    TbSkewX,
    TbSkewY,
    TbSkiJumping,
    TbSkull,
    TbSlash,
    TbSlashes,
    TbSleigh,
    TbSlice,
    TbSlideshow,
    TbSmartHomeOff,
    TbSmartHome,
    TbSmokingNo,
    TbSmoking,
    TbSnowboarding,
    TbSnowflakeOff,
    TbSnowflake,
    TbSnowman,
    TbSoccerField,
    TbSocialOff,
    TbSocial,
    TbSock,
    TbSofaOff,
    TbSofa,
    TbSolarElectricity,
    TbSolarPanel2,
    TbSolarPanel,
    TbSort09,
    TbSort90,
    TbSortAZ,
    TbSortAscending2,
    TbSortAscendingLetters,
    TbSortAscendingNumbers,
    TbSortAscendingShapes,
    TbSortAscendingSmallBig,
    TbSortAscending,
    TbSortDescending2,
    TbSortDescendingLetters,
    TbSortDescendingNumbers,
    TbSortDescendingShapes,
    TbSortDescendingSmallBig,
    TbSortDescending,
    TbSortZA,
    TbSos,
    TbSoupOff,
    TbSoup,
    TbSourceCode,
    TbSpaceOff,
    TbSpace,
    TbSpaces,
    TbSpacingHorizontal,
    TbSpacingVertical,
    TbSpade,
    TbSparkles,
    TbSpeakerphone,
    TbSpeedboat,
    TbSphereOff,
    TbSpherePlus,
    TbSphere,
    TbSpider,
    TbSpiralOff,
    TbSpiral,
    TbSportBillard,
    TbSpray,
    TbSpyOff,
    TbSpy,
    TbSql,
    TbSquareArrowDown,
    TbSquareArrowLeft,
    TbSquareArrowRight,
    TbSquareArrowUp,
    TbSquareAsterisk,
    TbSquareCheck,
    TbSquareChevronDown,
    TbSquareChevronLeft,
    TbSquareChevronRight,
    TbSquareChevronUp,
    TbSquareChevronsDown,
    TbSquareChevronsLeft,
    TbSquareChevronsRight,
    TbSquareChevronsUp,
    TbSquareDashed,
    TbSquareDot,
    TbSquareF0,
    TbSquareF1,
    TbSquareF2,
    TbSquareF3,
    TbSquareF4,
    TbSquareF5,
    TbSquareF6,
    TbSquareF7,
    TbSquareF8,
    TbSquareF9,
    TbSquareForbid2,
    TbSquareForbid,
    TbSquareHalf,
    TbSquareKey,
    TbSquareLetterA,
    TbSquareLetterB,
    TbSquareLetterC,
    TbSquareLetterD,
    TbSquareLetterE,
    TbSquareLetterF,
    TbSquareLetterG,
    TbSquareLetterH,
    TbSquareLetterI,
    TbSquareLetterJ,
    TbSquareLetterK,
    TbSquareLetterL,
    TbSquareLetterM,
    TbSquareLetterN,
    TbSquareLetterO,
    TbSquareLetterP,
    TbSquareLetterQ,
    TbSquareLetterR,
    TbSquareLetterS,
    TbSquareLetterT,
    TbSquareLetterU,
    TbSquareLetterV,
    TbSquareLetterW,
    TbSquareLetterX,
    TbSquareLetterY,
    TbSquareLetterZ,
    TbSquareMinus,
    TbSquareNumber0,
    TbSquareNumber1,
    TbSquareNumber2,
    TbSquareNumber3,
    TbSquareNumber4,
    TbSquareNumber5,
    TbSquareNumber6,
    TbSquareNumber7,
    TbSquareNumber8,
    TbSquareNumber9,
    TbSquareOff,
    TbSquarePercentage,
    TbSquarePlus2,
    TbSquarePlus,
    TbSquareRoot2,
    TbSquareRoot,
    TbSquareRotatedForbid2,
    TbSquareRotatedForbid,
    TbSquareRotatedOff,
    TbSquareRotated,
    TbSquareRoundedArrowDown,
    TbSquareRoundedArrowLeft,
    TbSquareRoundedArrowRight,
    TbSquareRoundedArrowUp,
    TbSquareRoundedCheck,
    TbSquareRoundedChevronDown,
    TbSquareRoundedChevronLeft,
    TbSquareRoundedChevronRight,
    TbSquareRoundedChevronUp,
    TbSquareRoundedChevronsDown,
    TbSquareRoundedChevronsLeft,
    TbSquareRoundedChevronsRight,
    TbSquareRoundedChevronsUp,
    TbSquareRoundedLetterA,
    TbSquareRoundedLetterB,
    TbSquareRoundedLetterC,
    TbSquareRoundedLetterD,
    TbSquareRoundedLetterE,
    TbSquareRoundedLetterF,
    TbSquareRoundedLetterG,
    TbSquareRoundedLetterH,
    TbSquareRoundedLetterI,
    TbSquareRoundedLetterJ,
    TbSquareRoundedLetterK,
    TbSquareRoundedLetterL,
    TbSquareRoundedLetterM,
    TbSquareRoundedLetterN,
    TbSquareRoundedLetterO,
    TbSquareRoundedLetterP,
    TbSquareRoundedLetterQ,
    TbSquareRoundedLetterR,
    TbSquareRoundedLetterS,
    TbSquareRoundedLetterT,
    TbSquareRoundedLetterU,
    TbSquareRoundedLetterV,
    TbSquareRoundedLetterW,
    TbSquareRoundedLetterX,
    TbSquareRoundedLetterY,
    TbSquareRoundedLetterZ,
    TbSquareRoundedMinus2,
    TbSquareRoundedMinus,
    TbSquareRoundedNumber0,
    TbSquareRoundedNumber1,
    TbSquareRoundedNumber2,
    TbSquareRoundedNumber3,
    TbSquareRoundedNumber4,
    TbSquareRoundedNumber5,
    TbSquareRoundedNumber6,
    TbSquareRoundedNumber7,
    TbSquareRoundedNumber8,
    TbSquareRoundedNumber9,
    TbSquareRoundedPercentage,
    TbSquareRoundedPlus2,
    TbSquareRoundedPlus,
    TbSquareRoundedX,
    TbSquareRounded,
    TbSquareToggleHorizontal,
    TbSquareToggle,
    TbSquareX,
    TbSquare,
    TbSquaresDiagonal,
    TbSquaresSelected,
    TbSquares,
    TbStack2,
    TbStack3,
    TbStackBack,
    TbStackBackward,
    TbStackForward,
    TbStackFront,
    TbStackMiddle,
    TbStackPop,
    TbStackPush,
    TbStack,
    TbStairsDown,
    TbStairsUp,
    TbStairs,
    TbStarHalf,
    TbStarOff,
    TbStar,
    TbStarsOff,
    TbStars,
    TbStatusChange,
    TbSteam,
    TbSteeringWheelOff,
    TbSteeringWheel,
    TbStepInto,
    TbStepOut,
    TbStereoGlasses,
    TbStethoscopeOff,
    TbStethoscope,
    TbSticker2,
    TbSticker,
    TbStopwatch,
    TbStormOff,
    TbStorm,
    TbStretching2,
    TbStretching,
    TbStrikethrough,
    TbSubmarine,
    TbSubscript,
    TbSubtask,
    TbSumOff,
    TbSum,
    TbSunElectricity,
    TbSunHigh,
    TbSunLow,
    TbSunMoon,
    TbSunOff,
    TbSunWind,
    TbSun,
    TbSunglasses,
    TbSunrise,
    TbSunset2,
    TbSunset,
    TbSuperscript,
    TbSvg,
    TbSwimming,
    TbSwipeDown,
    TbSwipeLeft,
    TbSwipeRight,
    TbSwipeUp,
    TbSwipe,
    TbSwitch2,
    TbSwitch3,
    TbSwitchHorizontal,
    TbSwitchVertical,
    TbSwitch,
    TbSwordOff,
    TbSword,
    TbSwords,
    TbTableAlias,
    TbTableColumn,
    TbTableDashed,
    TbTableDown,
    TbTableExport,
    TbTableHeart,
    TbTableImport,
    TbTableMinus,
    TbTableOff,
    TbTableOptions,
    TbTablePlus,
    TbTableRow,
    TbTableShare,
    TbTableShortcut,
    TbTableSpark,
    TbTable,
    TbTagMinus,
    TbTagOff,
    TbTagPlus,
    TbTagStarred,
    TbTag,
    TbTagsOff,
    TbTags,
    TbTallymark1,
    TbTallymark2,
    TbTallymark3,
    TbTallymark4,
    TbTallymarks,
    TbTank,
    TbTargetArrow,
    TbTargetOff,
    TbTarget,
    TbTaxEuro,
    TbTaxPound,
    TbTax,
    TbTeapot,
    TbTelescopeOff,
    TbTelescope,
    TbTemperatureCelsius,
    TbTemperatureFahrenheit,
    TbTemperatureMinus,
    TbTemperatureOff,
    TbTemperaturePlus,
    TbTemperatureSnow,
    TbTemperatureSun,
    TbTemperature,
    TbTemplateOff,
    TbTemplate,
    TbTentOff,
    TbTent,
    TbTerminal2,
    TbTerminal,
    TbTestPipe2,
    TbTestPipeOff,
    TbTestPipe,
    TbTex,
    TbTextCaption,
    TbTextColor,
    TbTextDecrease,
    TbTextDirectionLtr,
    TbTextDirectionRtl,
    TbTextGrammar,
    TbTextIncrease,
    TbTextOrientation,
    TbTextPlus,
    TbTextRecognition,
    TbTextResize,
    TbTextScan2,
    TbTextSize,
    TbTextSpellcheck,
    TbTextWrapColumn,
    TbTextWrapDisabled,
    TbTextWrap,
    TbTexture,
    TbTheater,
    TbThermometer,
    TbThumbDownOff,
    TbThumbDown,
    TbThumbUpOff,
    TbThumbUp,
    TbTicTac,
    TbTicketOff,
    TbTicket,
    TbTie,
    TbTilde,
    TbTiltShiftOff,
    TbTiltShift,
    TbTimeDuration0,
    TbTimeDuration10,
    TbTimeDuration15,
    TbTimeDuration30,
    TbTimeDuration45,
    TbTimeDuration5,
    TbTimeDuration60,
    TbTimeDuration90,
    TbTimeDurationOff,
    TbTimelineEventExclamation,
    TbTimelineEventMinus,
    TbTimelineEventPlus,
    TbTimelineEventText,
    TbTimelineEventX,
    TbTimelineEvent,
    TbTimeline,
    TbTimezone,
    TbTipJarEuro,
    TbTipJarPound,
    TbTipJar,
    TbTir,
    TbToggleLeft,
    TbToggleRight,
    TbToiletPaperOff,
    TbToiletPaper,
    TbToml,
    TbTool,
    TbToolsKitchen2Off,
    TbToolsKitchen2,
    TbToolsKitchen3,
    TbToolsKitchenOff,
    TbToolsKitchen,
    TbToolsOff,
    TbTools,
    TbTooltip,
    TbTopologyBus,
    TbTopologyComplex,
    TbTopologyFullHierarchy,
    TbTopologyFull,
    TbTopologyRing2,
    TbTopologyRing3,
    TbTopologyRing,
    TbTopologyStar2,
    TbTopologyStar3,
    TbTopologyStarRing2,
    TbTopologyStarRing3,
    TbTopologyStarRing,
    TbTopologyStar,
    TbTorii,
    TbTornado,
    TbTournament,
    TbTowerOff,
    TbTower,
    TbTrack,
    TbTractor,
    TbTrademark,
    TbTrafficConeOff,
    TbTrafficCone,
    TbTrafficLightsOff,
    TbTrafficLights,
    TbTrain,
    TbTransactionBitcoin,
    TbTransactionDollar,
    TbTransactionEuro,
    TbTransactionPound,
    TbTransactionRupee,
    TbTransactionYen,
    TbTransactionYuan,
    TbTransferIn,
    TbTransferOut,
    TbTransferVertical,
    TbTransfer,
    TbTransformPointBottomLeft,
    TbTransformPointBottomRight,
    TbTransformPointTopLeft,
    TbTransformPointTopRight,
    TbTransformPoint,
    TbTransform,
    TbTransitionBottom,
    TbTransitionLeft,
    TbTransitionRight,
    TbTransitionTop,
    TbTrashOff,
    TbTrashX,
    TbTrash,
    TbTreadmill,
    TbTree,
    TbTrees,
    TbTrekking,
    TbTrendingDown2,
    TbTrendingDown3,
    TbTrendingDown,
    TbTrendingUp2,
    TbTrendingUp3,
    TbTrendingUp,
    TbTriangleInverted,
    TbTriangleMinus2,
    TbTriangleMinus,
    TbTriangleOff,
    TbTrianglePlus2,
    TbTrianglePlus,
    TbTriangleSquareCircle,
    TbTriangle,
    TbTriangles,
    TbTrident,
    TbTrolley,
    TbTrophyOff,
    TbTrophy,
    TbTrowel,
    TbTruckDelivery,
    TbTruckLoading,
    TbTruckOff,
    TbTruckReturn,
    TbTruck,
    TbTxt,
    TbTypeface,
    TbTypographyOff,
    TbTypography,
    TbUTurnLeft,
    TbUTurnRight,
    TbUfoOff,
    TbUfo,
    TbUhd,
    TbUmbrella2,
    TbUmbrellaClosed2,
    TbUmbrellaClosed,
    TbUmbrellaOff,
    TbUmbrella,
    TbUnderline,
    TbUniverse,
    TbUnlink,
    TbUpload,
    TbUrgent,
    TbUsb,
    TbUserBitcoin,
    TbUserBolt,
    TbUserCancel,
    TbUserCheck,
    TbUserCircle,
    TbUserCode,
    TbUserCog,
    TbUserDollar,
    TbUserDown,
    TbUserEdit,
    TbUserExclamation,
    TbUserHeart,
    TbUserHexagon,
    TbUserMinus,
    TbUserOff,
    TbUserPause,
    TbUserPentagon,
    TbUserPin,
    TbUserPlus,
    TbUserQuestion,
    TbUserScan,
    TbUserScreen,
    TbUserSearch,
    TbUserShare,
    TbUserShield,
    TbUserSquareRounded,
    TbUserSquare,
    TbUserStar,
    TbUserUp,
    TbUserX,
    TbUser,
    TbUsersGroup,
    TbUsersMinus,
    TbUsersPlus,
    TbUsers,
    TbUvIndex,
    TbUxCircle,
    TbVaccineBottleOff,
    TbVaccineBottle,
    TbVaccineOff,
    TbVaccine,
    TbVacuumCleaner,
    TbVariableMinus,
    TbVariableOff,
    TbVariablePlus,
    TbVariable,
    TbVectorBezier2,
    TbVectorBezierArc,
    TbVectorBezierCircle,
    TbVectorBezier,
    TbVectorOff,
    TbVectorSpline,
    TbVectorTriangleOff,
    TbVectorTriangle,
    TbVector,
    TbVenus,
    TbVersionsOff,
    TbVersions,
    TbVideoMinus,
    TbVideoOff,
    TbVideoPlus,
    TbVideo,
    TbView360Arrow,
    TbView360Number,
    TbView360Off,
    TbView360,
    TbViewfinderOff,
    TbViewfinder,
    TbViewportNarrow,
    TbViewportShort,
    TbViewportTall,
    TbViewportWide,
    TbVinyl,
    TbVipOff,
    TbVip,
    TbVirusOff,
    TbVirusSearch,
    TbVirus,
    TbVocabularyOff,
    TbVocabulary,
    TbVolcano,
    TbVolume2,
    TbVolume3,
    TbVolumeOff,
    TbVolume,
    TbVs,
    TbWalk,
    TbWallOff,
    TbWall,
    TbWalletOff,
    TbWallet,
    TbWallpaperOff,
    TbWallpaper,
    TbWandOff,
    TbWand,
    TbWashDry1,
    TbWashDry2,
    TbWashDry3,
    TbWashDryA,
    TbWashDryDip,
    TbWashDryF,
    TbWashDryFlat,
    TbWashDryHang,
    TbWashDryOff,
    TbWashDryP,
    TbWashDryShade,
    TbWashDryW,
    TbWashDry,
    TbWashDrycleanOff,
    TbWashDryclean,
    TbWashEco,
    TbWashGentle,
    TbWashHand,
    TbWashMachine,
    TbWashOff,
    TbWashPress,
    TbWashTemperature1,
    TbWashTemperature2,
    TbWashTemperature3,
    TbWashTemperature4,
    TbWashTemperature5,
    TbWashTemperature6,
    TbWashTumbleDry,
    TbWashTumbleOff,
    TbWash,
    TbWaterpolo,
    TbWaveSawTool,
    TbWaveSine,
    TbWaveSquare,
    TbWavesElectricity,
    TbWebhookOff,
    TbWebhook,
    TbWeight,
    TbWheatOff,
    TbWheat,
    TbWheel,
    TbWheelchairOff,
    TbWheelchair,
    TbWhirl,
    TbWifi0,
    TbWifi1,
    TbWifi2,
    TbWifiOff,
    TbWifi,
    TbWindElectricity,
    TbWindOff,
    TbWind,
    TbWindmillOff,
    TbWindmill,
    TbWindowMaximize,
    TbWindowMinimize,
    TbWindowOff,
    TbWindow,
    TbWindsock,
    TbWiperWash,
    TbWiper,
    TbWoman,
    TbWood,
    TbWorldBolt,
    TbWorldCancel,
    TbWorldCheck,
    TbWorldCode,
    TbWorldCog,
    TbWorldDollar,
    TbWorldDown,
    TbWorldDownload,
    TbWorldExclamation,
    TbWorldHeart,
    TbWorldLatitude,
    TbWorldLongitude,
    TbWorldMinus,
    TbWorldOff,
    TbWorldPause,
    TbWorldPin,
    TbWorldPlus,
    TbWorldQuestion,
    TbWorldSearch,
    TbWorldShare,
    TbWorldStar,
    TbWorldUp,
    TbWorldUpload,
    TbWorldWww,
    TbWorldX,
    TbWorld,
    TbWreckingBall,
    TbWritingOff,
    TbWritingSignOff,
    TbWritingSign,
    TbWriting,
    TbXPowerY,
    TbX,
    TbXboxA,
    TbXboxB,
    TbXboxX,
    TbXboxY,
    TbXd,
    TbXxx,
    TbYinYang,
    TbYoga,
    TbZeppelinOff,
    TbZeppelin,
    TbZip,
    TbZodiacAquarius,
    TbZodiacAries,
    TbZodiacCancer,
    TbZodiacCapricorn,
    TbZodiacGemini,
    TbZodiacLeo,
    TbZodiacLibra,
    TbZodiacPisces,
    TbZodiacSagittarius,
    TbZodiacScorpio,
    TbZodiacTaurus,
    TbZodiacVirgo,
    TbZoomCancel,
    TbZoomCheck,
    TbZoomCode,
    TbZoomExclamation,
    TbZoomInArea,
    TbZoomIn,
    TbZoomMoney,
    TbZoomOutArea,
    TbZoomOut,
    TbZoomPan,
    TbZoomQuestion,
    TbZoomReplace,
    TbZoomReset,
    TbZoomScan,
    TbZoom,
    TbZzzOff,
    TbZzz,
} from "react-icons/tb"

export function nameToReactIcon_tb_5(iconName: string): IconType | undefined {

    switch(iconName) {
        case "tb:TbShoppingCartSearch":
            return TbShoppingCartSearch;
        case "tb:TbShoppingCartShare":
            return TbShoppingCartShare;
        case "tb:TbShoppingCartStar":
            return TbShoppingCartStar;
        case "tb:TbShoppingCartUp":
            return TbShoppingCartUp;
        case "tb:TbShoppingCartX":
            return TbShoppingCartX;
        case "tb:TbShoppingCart":
            return TbShoppingCart;
        case "tb:TbShovelPitchforks":
            return TbShovelPitchforks;
        case "tb:TbShovel":
            return TbShovel;
        case "tb:TbShredder":
            return TbShredder;
        case "tb:TbSignLeft":
            return TbSignLeft;
        case "tb:TbSignRight":
            return TbSignRight;
        case "tb:TbSignal2G":
            return TbSignal2G;
        case "tb:TbSignal3G":
            return TbSignal3G;
        case "tb:TbSignal4gPlus":
            return TbSignal4gPlus;
        case "tb:TbSignal4G":
            return TbSignal4G;
        case "tb:TbSignal5G":
            return TbSignal5G;
        case "tb:TbSignal6G":
            return TbSignal6G;
        case "tb:TbSignalE":
            return TbSignalE;
        case "tb:TbSignalG":
            return TbSignalG;
        case "tb:TbSignalHPlus":
            return TbSignalHPlus;
        case "tb:TbSignalH":
            return TbSignalH;
        case "tb:TbSignalLte":
            return TbSignalLte;
        case "tb:TbSignatureOff":
            return TbSignatureOff;
        case "tb:TbSignature":
            return TbSignature;
        case "tb:TbSitemapOff":
            return TbSitemapOff;
        case "tb:TbSitemap":
            return TbSitemap;
        case "tb:TbSkateboardOff":
            return TbSkateboardOff;
        case "tb:TbSkateboard":
            return TbSkateboard;
        case "tb:TbSkateboarding":
            return TbSkateboarding;
        case "tb:TbSkewX":
            return TbSkewX;
        case "tb:TbSkewY":
            return TbSkewY;
        case "tb:TbSkiJumping":
            return TbSkiJumping;
        case "tb:TbSkull":
            return TbSkull;
        case "tb:TbSlash":
            return TbSlash;
        case "tb:TbSlashes":
            return TbSlashes;
        case "tb:TbSleigh":
            return TbSleigh;
        case "tb:TbSlice":
            return TbSlice;
        case "tb:TbSlideshow":
            return TbSlideshow;
        case "tb:TbSmartHomeOff":
            return TbSmartHomeOff;
        case "tb:TbSmartHome":
            return TbSmartHome;
        case "tb:TbSmokingNo":
            return TbSmokingNo;
        case "tb:TbSmoking":
            return TbSmoking;
        case "tb:TbSnowboarding":
            return TbSnowboarding;
        case "tb:TbSnowflakeOff":
            return TbSnowflakeOff;
        case "tb:TbSnowflake":
            return TbSnowflake;
        case "tb:TbSnowman":
            return TbSnowman;
        case "tb:TbSoccerField":
            return TbSoccerField;
        case "tb:TbSocialOff":
            return TbSocialOff;
        case "tb:TbSocial":
            return TbSocial;
        case "tb:TbSock":
            return TbSock;
        case "tb:TbSofaOff":
            return TbSofaOff;
        case "tb:TbSofa":
            return TbSofa;
        case "tb:TbSolarElectricity":
            return TbSolarElectricity;
        case "tb:TbSolarPanel2":
            return TbSolarPanel2;
        case "tb:TbSolarPanel":
            return TbSolarPanel;
        case "tb:TbSort09":
            return TbSort09;
        case "tb:TbSort90":
            return TbSort90;
        case "tb:TbSortAZ":
            return TbSortAZ;
        case "tb:TbSortAscending2":
            return TbSortAscending2;
        case "tb:TbSortAscendingLetters":
            return TbSortAscendingLetters;
        case "tb:TbSortAscendingNumbers":
            return TbSortAscendingNumbers;
        case "tb:TbSortAscendingShapes":
            return TbSortAscendingShapes;
        case "tb:TbSortAscendingSmallBig":
            return TbSortAscendingSmallBig;
        case "tb:TbSortAscending":
            return TbSortAscending;
        case "tb:TbSortDescending2":
            return TbSortDescending2;
        case "tb:TbSortDescendingLetters":
            return TbSortDescendingLetters;
        case "tb:TbSortDescendingNumbers":
            return TbSortDescendingNumbers;
        case "tb:TbSortDescendingShapes":
            return TbSortDescendingShapes;
        case "tb:TbSortDescendingSmallBig":
            return TbSortDescendingSmallBig;
        case "tb:TbSortDescending":
            return TbSortDescending;
        case "tb:TbSortZA":
            return TbSortZA;
        case "tb:TbSos":
            return TbSos;
        case "tb:TbSoupOff":
            return TbSoupOff;
        case "tb:TbSoup":
            return TbSoup;
        case "tb:TbSourceCode":
            return TbSourceCode;
        case "tb:TbSpaceOff":
            return TbSpaceOff;
        case "tb:TbSpace":
            return TbSpace;
        case "tb:TbSpaces":
            return TbSpaces;
        case "tb:TbSpacingHorizontal":
            return TbSpacingHorizontal;
        case "tb:TbSpacingVertical":
            return TbSpacingVertical;
        case "tb:TbSpade":
            return TbSpade;
        case "tb:TbSparkles":
            return TbSparkles;
        case "tb:TbSpeakerphone":
            return TbSpeakerphone;
        case "tb:TbSpeedboat":
            return TbSpeedboat;
        case "tb:TbSphereOff":
            return TbSphereOff;
        case "tb:TbSpherePlus":
            return TbSpherePlus;
        case "tb:TbSphere":
            return TbSphere;
        case "tb:TbSpider":
            return TbSpider;
        case "tb:TbSpiralOff":
            return TbSpiralOff;
        case "tb:TbSpiral":
            return TbSpiral;
        case "tb:TbSportBillard":
            return TbSportBillard;
        case "tb:TbSpray":
            return TbSpray;
        case "tb:TbSpyOff":
            return TbSpyOff;
        case "tb:TbSpy":
            return TbSpy;
        case "tb:TbSql":
            return TbSql;
        case "tb:TbSquareArrowDown":
            return TbSquareArrowDown;
        case "tb:TbSquareArrowLeft":
            return TbSquareArrowLeft;
        case "tb:TbSquareArrowRight":
            return TbSquareArrowRight;
        case "tb:TbSquareArrowUp":
            return TbSquareArrowUp;
        case "tb:TbSquareAsterisk":
            return TbSquareAsterisk;
        case "tb:TbSquareCheck":
            return TbSquareCheck;
        case "tb:TbSquareChevronDown":
            return TbSquareChevronDown;
        case "tb:TbSquareChevronLeft":
            return TbSquareChevronLeft;
        case "tb:TbSquareChevronRight":
            return TbSquareChevronRight;
        case "tb:TbSquareChevronUp":
            return TbSquareChevronUp;
        case "tb:TbSquareChevronsDown":
            return TbSquareChevronsDown;
        case "tb:TbSquareChevronsLeft":
            return TbSquareChevronsLeft;
        case "tb:TbSquareChevronsRight":
            return TbSquareChevronsRight;
        case "tb:TbSquareChevronsUp":
            return TbSquareChevronsUp;
        case "tb:TbSquareDashed":
            return TbSquareDashed;
        case "tb:TbSquareDot":
            return TbSquareDot;
        case "tb:TbSquareF0":
            return TbSquareF0;
        case "tb:TbSquareF1":
            return TbSquareF1;
        case "tb:TbSquareF2":
            return TbSquareF2;
        case "tb:TbSquareF3":
            return TbSquareF3;
        case "tb:TbSquareF4":
            return TbSquareF4;
        case "tb:TbSquareF5":
            return TbSquareF5;
        case "tb:TbSquareF6":
            return TbSquareF6;
        case "tb:TbSquareF7":
            return TbSquareF7;
        case "tb:TbSquareF8":
            return TbSquareF8;
        case "tb:TbSquareF9":
            return TbSquareF9;
        case "tb:TbSquareForbid2":
            return TbSquareForbid2;
        case "tb:TbSquareForbid":
            return TbSquareForbid;
        case "tb:TbSquareHalf":
            return TbSquareHalf;
        case "tb:TbSquareKey":
            return TbSquareKey;
        case "tb:TbSquareLetterA":
            return TbSquareLetterA;
        case "tb:TbSquareLetterB":
            return TbSquareLetterB;
        case "tb:TbSquareLetterC":
            return TbSquareLetterC;
        case "tb:TbSquareLetterD":
            return TbSquareLetterD;
        case "tb:TbSquareLetterE":
            return TbSquareLetterE;
        case "tb:TbSquareLetterF":
            return TbSquareLetterF;
        case "tb:TbSquareLetterG":
            return TbSquareLetterG;
        case "tb:TbSquareLetterH":
            return TbSquareLetterH;
        case "tb:TbSquareLetterI":
            return TbSquareLetterI;
        case "tb:TbSquareLetterJ":
            return TbSquareLetterJ;
        case "tb:TbSquareLetterK":
            return TbSquareLetterK;
        case "tb:TbSquareLetterL":
            return TbSquareLetterL;
        case "tb:TbSquareLetterM":
            return TbSquareLetterM;
        case "tb:TbSquareLetterN":
            return TbSquareLetterN;
        case "tb:TbSquareLetterO":
            return TbSquareLetterO;
        case "tb:TbSquareLetterP":
            return TbSquareLetterP;
        case "tb:TbSquareLetterQ":
            return TbSquareLetterQ;
        case "tb:TbSquareLetterR":
            return TbSquareLetterR;
        case "tb:TbSquareLetterS":
            return TbSquareLetterS;
        case "tb:TbSquareLetterT":
            return TbSquareLetterT;
        case "tb:TbSquareLetterU":
            return TbSquareLetterU;
        case "tb:TbSquareLetterV":
            return TbSquareLetterV;
        case "tb:TbSquareLetterW":
            return TbSquareLetterW;
        case "tb:TbSquareLetterX":
            return TbSquareLetterX;
        case "tb:TbSquareLetterY":
            return TbSquareLetterY;
        case "tb:TbSquareLetterZ":
            return TbSquareLetterZ;
        case "tb:TbSquareMinus":
            return TbSquareMinus;
        case "tb:TbSquareNumber0":
            return TbSquareNumber0;
        case "tb:TbSquareNumber1":
            return TbSquareNumber1;
        case "tb:TbSquareNumber2":
            return TbSquareNumber2;
        case "tb:TbSquareNumber3":
            return TbSquareNumber3;
        case "tb:TbSquareNumber4":
            return TbSquareNumber4;
        case "tb:TbSquareNumber5":
            return TbSquareNumber5;
        case "tb:TbSquareNumber6":
            return TbSquareNumber6;
        case "tb:TbSquareNumber7":
            return TbSquareNumber7;
        case "tb:TbSquareNumber8":
            return TbSquareNumber8;
        case "tb:TbSquareNumber9":
            return TbSquareNumber9;
        case "tb:TbSquareOff":
            return TbSquareOff;
        case "tb:TbSquarePercentage":
            return TbSquarePercentage;
        case "tb:TbSquarePlus2":
            return TbSquarePlus2;
        case "tb:TbSquarePlus":
            return TbSquarePlus;
        case "tb:TbSquareRoot2":
            return TbSquareRoot2;
        case "tb:TbSquareRoot":
            return TbSquareRoot;
        case "tb:TbSquareRotatedForbid2":
            return TbSquareRotatedForbid2;
        case "tb:TbSquareRotatedForbid":
            return TbSquareRotatedForbid;
        case "tb:TbSquareRotatedOff":
            return TbSquareRotatedOff;
        case "tb:TbSquareRotated":
            return TbSquareRotated;
        case "tb:TbSquareRoundedArrowDown":
            return TbSquareRoundedArrowDown;
        case "tb:TbSquareRoundedArrowLeft":
            return TbSquareRoundedArrowLeft;
        case "tb:TbSquareRoundedArrowRight":
            return TbSquareRoundedArrowRight;
        case "tb:TbSquareRoundedArrowUp":
            return TbSquareRoundedArrowUp;
        case "tb:TbSquareRoundedCheck":
            return TbSquareRoundedCheck;
        case "tb:TbSquareRoundedChevronDown":
            return TbSquareRoundedChevronDown;
        case "tb:TbSquareRoundedChevronLeft":
            return TbSquareRoundedChevronLeft;
        case "tb:TbSquareRoundedChevronRight":
            return TbSquareRoundedChevronRight;
        case "tb:TbSquareRoundedChevronUp":
            return TbSquareRoundedChevronUp;
        case "tb:TbSquareRoundedChevronsDown":
            return TbSquareRoundedChevronsDown;
        case "tb:TbSquareRoundedChevronsLeft":
            return TbSquareRoundedChevronsLeft;
        case "tb:TbSquareRoundedChevronsRight":
            return TbSquareRoundedChevronsRight;
        case "tb:TbSquareRoundedChevronsUp":
            return TbSquareRoundedChevronsUp;
        case "tb:TbSquareRoundedLetterA":
            return TbSquareRoundedLetterA;
        case "tb:TbSquareRoundedLetterB":
            return TbSquareRoundedLetterB;
        case "tb:TbSquareRoundedLetterC":
            return TbSquareRoundedLetterC;
        case "tb:TbSquareRoundedLetterD":
            return TbSquareRoundedLetterD;
        case "tb:TbSquareRoundedLetterE":
            return TbSquareRoundedLetterE;
        case "tb:TbSquareRoundedLetterF":
            return TbSquareRoundedLetterF;
        case "tb:TbSquareRoundedLetterG":
            return TbSquareRoundedLetterG;
        case "tb:TbSquareRoundedLetterH":
            return TbSquareRoundedLetterH;
        case "tb:TbSquareRoundedLetterI":
            return TbSquareRoundedLetterI;
        case "tb:TbSquareRoundedLetterJ":
            return TbSquareRoundedLetterJ;
        case "tb:TbSquareRoundedLetterK":
            return TbSquareRoundedLetterK;
        case "tb:TbSquareRoundedLetterL":
            return TbSquareRoundedLetterL;
        case "tb:TbSquareRoundedLetterM":
            return TbSquareRoundedLetterM;
        case "tb:TbSquareRoundedLetterN":
            return TbSquareRoundedLetterN;
        case "tb:TbSquareRoundedLetterO":
            return TbSquareRoundedLetterO;
        case "tb:TbSquareRoundedLetterP":
            return TbSquareRoundedLetterP;
        case "tb:TbSquareRoundedLetterQ":
            return TbSquareRoundedLetterQ;
        case "tb:TbSquareRoundedLetterR":
            return TbSquareRoundedLetterR;
        case "tb:TbSquareRoundedLetterS":
            return TbSquareRoundedLetterS;
        case "tb:TbSquareRoundedLetterT":
            return TbSquareRoundedLetterT;
        case "tb:TbSquareRoundedLetterU":
            return TbSquareRoundedLetterU;
        case "tb:TbSquareRoundedLetterV":
            return TbSquareRoundedLetterV;
        case "tb:TbSquareRoundedLetterW":
            return TbSquareRoundedLetterW;
        case "tb:TbSquareRoundedLetterX":
            return TbSquareRoundedLetterX;
        case "tb:TbSquareRoundedLetterY":
            return TbSquareRoundedLetterY;
        case "tb:TbSquareRoundedLetterZ":
            return TbSquareRoundedLetterZ;
        case "tb:TbSquareRoundedMinus2":
            return TbSquareRoundedMinus2;
        case "tb:TbSquareRoundedMinus":
            return TbSquareRoundedMinus;
        case "tb:TbSquareRoundedNumber0":
            return TbSquareRoundedNumber0;
        case "tb:TbSquareRoundedNumber1":
            return TbSquareRoundedNumber1;
        case "tb:TbSquareRoundedNumber2":
            return TbSquareRoundedNumber2;
        case "tb:TbSquareRoundedNumber3":
            return TbSquareRoundedNumber3;
        case "tb:TbSquareRoundedNumber4":
            return TbSquareRoundedNumber4;
        case "tb:TbSquareRoundedNumber5":
            return TbSquareRoundedNumber5;
        case "tb:TbSquareRoundedNumber6":
            return TbSquareRoundedNumber6;
        case "tb:TbSquareRoundedNumber7":
            return TbSquareRoundedNumber7;
        case "tb:TbSquareRoundedNumber8":
            return TbSquareRoundedNumber8;
        case "tb:TbSquareRoundedNumber9":
            return TbSquareRoundedNumber9;
        case "tb:TbSquareRoundedPercentage":
            return TbSquareRoundedPercentage;
        case "tb:TbSquareRoundedPlus2":
            return TbSquareRoundedPlus2;
        case "tb:TbSquareRoundedPlus":
            return TbSquareRoundedPlus;
        case "tb:TbSquareRoundedX":
            return TbSquareRoundedX;
        case "tb:TbSquareRounded":
            return TbSquareRounded;
        case "tb:TbSquareToggleHorizontal":
            return TbSquareToggleHorizontal;
        case "tb:TbSquareToggle":
            return TbSquareToggle;
        case "tb:TbSquareX":
            return TbSquareX;
        case "tb:TbSquare":
            return TbSquare;
        case "tb:TbSquaresDiagonal":
            return TbSquaresDiagonal;
        case "tb:TbSquaresSelected":
            return TbSquaresSelected;
        case "tb:TbSquares":
            return TbSquares;
        case "tb:TbStack2":
            return TbStack2;
        case "tb:TbStack3":
            return TbStack3;
        case "tb:TbStackBack":
            return TbStackBack;
        case "tb:TbStackBackward":
            return TbStackBackward;
        case "tb:TbStackForward":
            return TbStackForward;
        case "tb:TbStackFront":
            return TbStackFront;
        case "tb:TbStackMiddle":
            return TbStackMiddle;
        case "tb:TbStackPop":
            return TbStackPop;
        case "tb:TbStackPush":
            return TbStackPush;
        case "tb:TbStack":
            return TbStack;
        case "tb:TbStairsDown":
            return TbStairsDown;
        case "tb:TbStairsUp":
            return TbStairsUp;
        case "tb:TbStairs":
            return TbStairs;
        case "tb:TbStarHalf":
            return TbStarHalf;
        case "tb:TbStarOff":
            return TbStarOff;
        case "tb:TbStar":
            return TbStar;
        case "tb:TbStarsOff":
            return TbStarsOff;
        case "tb:TbStars":
            return TbStars;
        case "tb:TbStatusChange":
            return TbStatusChange;
        case "tb:TbSteam":
            return TbSteam;
        case "tb:TbSteeringWheelOff":
            return TbSteeringWheelOff;
        case "tb:TbSteeringWheel":
            return TbSteeringWheel;
        case "tb:TbStepInto":
            return TbStepInto;
        case "tb:TbStepOut":
            return TbStepOut;
        case "tb:TbStereoGlasses":
            return TbStereoGlasses;
        case "tb:TbStethoscopeOff":
            return TbStethoscopeOff;
        case "tb:TbStethoscope":
            return TbStethoscope;
        case "tb:TbSticker2":
            return TbSticker2;
        case "tb:TbSticker":
            return TbSticker;
        case "tb:TbStopwatch":
            return TbStopwatch;
        case "tb:TbStormOff":
            return TbStormOff;
        case "tb:TbStorm":
            return TbStorm;
        case "tb:TbStretching2":
            return TbStretching2;
        case "tb:TbStretching":
            return TbStretching;
        case "tb:TbStrikethrough":
            return TbStrikethrough;
        case "tb:TbSubmarine":
            return TbSubmarine;
        case "tb:TbSubscript":
            return TbSubscript;
        case "tb:TbSubtask":
            return TbSubtask;
        case "tb:TbSumOff":
            return TbSumOff;
        case "tb:TbSum":
            return TbSum;
        case "tb:TbSunElectricity":
            return TbSunElectricity;
        case "tb:TbSunHigh":
            return TbSunHigh;
        case "tb:TbSunLow":
            return TbSunLow;
        case "tb:TbSunMoon":
            return TbSunMoon;
        case "tb:TbSunOff":
            return TbSunOff;
        case "tb:TbSunWind":
            return TbSunWind;
        case "tb:TbSun":
            return TbSun;
        case "tb:TbSunglasses":
            return TbSunglasses;
        case "tb:TbSunrise":
            return TbSunrise;
        case "tb:TbSunset2":
            return TbSunset2;
        case "tb:TbSunset":
            return TbSunset;
        case "tb:TbSuperscript":
            return TbSuperscript;
        case "tb:TbSvg":
            return TbSvg;
        case "tb:TbSwimming":
            return TbSwimming;
        case "tb:TbSwipeDown":
            return TbSwipeDown;
        case "tb:TbSwipeLeft":
            return TbSwipeLeft;
        case "tb:TbSwipeRight":
            return TbSwipeRight;
        case "tb:TbSwipeUp":
            return TbSwipeUp;
        case "tb:TbSwipe":
            return TbSwipe;
        case "tb:TbSwitch2":
            return TbSwitch2;
        case "tb:TbSwitch3":
            return TbSwitch3;
        case "tb:TbSwitchHorizontal":
            return TbSwitchHorizontal;
        case "tb:TbSwitchVertical":
            return TbSwitchVertical;
        case "tb:TbSwitch":
            return TbSwitch;
        case "tb:TbSwordOff":
            return TbSwordOff;
        case "tb:TbSword":
            return TbSword;
        case "tb:TbSwords":
            return TbSwords;
        case "tb:TbTableAlias":
            return TbTableAlias;
        case "tb:TbTableColumn":
            return TbTableColumn;
        case "tb:TbTableDashed":
            return TbTableDashed;
        case "tb:TbTableDown":
            return TbTableDown;
        case "tb:TbTableExport":
            return TbTableExport;
        case "tb:TbTableHeart":
            return TbTableHeart;
        case "tb:TbTableImport":
            return TbTableImport;
        case "tb:TbTableMinus":
            return TbTableMinus;
        case "tb:TbTableOff":
            return TbTableOff;
        case "tb:TbTableOptions":
            return TbTableOptions;
        case "tb:TbTablePlus":
            return TbTablePlus;
        case "tb:TbTableRow":
            return TbTableRow;
        case "tb:TbTableShare":
            return TbTableShare;
        case "tb:TbTableShortcut":
            return TbTableShortcut;
        case "tb:TbTableSpark":
            return TbTableSpark;
        case "tb:TbTable":
            return TbTable;
        case "tb:TbTagMinus":
            return TbTagMinus;
        case "tb:TbTagOff":
            return TbTagOff;
        case "tb:TbTagPlus":
            return TbTagPlus;
        case "tb:TbTagStarred":
            return TbTagStarred;
        case "tb:TbTag":
            return TbTag;
        case "tb:TbTagsOff":
            return TbTagsOff;
        case "tb:TbTags":
            return TbTags;
        case "tb:TbTallymark1":
            return TbTallymark1;
        case "tb:TbTallymark2":
            return TbTallymark2;
        case "tb:TbTallymark3":
            return TbTallymark3;
        case "tb:TbTallymark4":
            return TbTallymark4;
        case "tb:TbTallymarks":
            return TbTallymarks;
        case "tb:TbTank":
            return TbTank;
        case "tb:TbTargetArrow":
            return TbTargetArrow;
        case "tb:TbTargetOff":
            return TbTargetOff;
        case "tb:TbTarget":
            return TbTarget;
        case "tb:TbTaxEuro":
            return TbTaxEuro;
        case "tb:TbTaxPound":
            return TbTaxPound;
        case "tb:TbTax":
            return TbTax;
        case "tb:TbTeapot":
            return TbTeapot;
        case "tb:TbTelescopeOff":
            return TbTelescopeOff;
        case "tb:TbTelescope":
            return TbTelescope;
        case "tb:TbTemperatureCelsius":
            return TbTemperatureCelsius;
        case "tb:TbTemperatureFahrenheit":
            return TbTemperatureFahrenheit;
        case "tb:TbTemperatureMinus":
            return TbTemperatureMinus;
        case "tb:TbTemperatureOff":
            return TbTemperatureOff;
        case "tb:TbTemperaturePlus":
            return TbTemperaturePlus;
        case "tb:TbTemperatureSnow":
            return TbTemperatureSnow;
        case "tb:TbTemperatureSun":
            return TbTemperatureSun;
        case "tb:TbTemperature":
            return TbTemperature;
        case "tb:TbTemplateOff":
            return TbTemplateOff;
        case "tb:TbTemplate":
            return TbTemplate;
        case "tb:TbTentOff":
            return TbTentOff;
        case "tb:TbTent":
            return TbTent;
        case "tb:TbTerminal2":
            return TbTerminal2;
        case "tb:TbTerminal":
            return TbTerminal;
        case "tb:TbTestPipe2":
            return TbTestPipe2;
        case "tb:TbTestPipeOff":
            return TbTestPipeOff;
        case "tb:TbTestPipe":
            return TbTestPipe;
        case "tb:TbTex":
            return TbTex;
        case "tb:TbTextCaption":
            return TbTextCaption;
        case "tb:TbTextColor":
            return TbTextColor;
        case "tb:TbTextDecrease":
            return TbTextDecrease;
        case "tb:TbTextDirectionLtr":
            return TbTextDirectionLtr;
        case "tb:TbTextDirectionRtl":
            return TbTextDirectionRtl;
        case "tb:TbTextGrammar":
            return TbTextGrammar;
        case "tb:TbTextIncrease":
            return TbTextIncrease;
        case "tb:TbTextOrientation":
            return TbTextOrientation;
        case "tb:TbTextPlus":
            return TbTextPlus;
        case "tb:TbTextRecognition":
            return TbTextRecognition;
        case "tb:TbTextResize":
            return TbTextResize;
        case "tb:TbTextScan2":
            return TbTextScan2;
        case "tb:TbTextSize":
            return TbTextSize;
        case "tb:TbTextSpellcheck":
            return TbTextSpellcheck;
        case "tb:TbTextWrapColumn":
            return TbTextWrapColumn;
        case "tb:TbTextWrapDisabled":
            return TbTextWrapDisabled;
        case "tb:TbTextWrap":
            return TbTextWrap;
        case "tb:TbTexture":
            return TbTexture;
        case "tb:TbTheater":
            return TbTheater;
        case "tb:TbThermometer":
            return TbThermometer;
        case "tb:TbThumbDownOff":
            return TbThumbDownOff;
        case "tb:TbThumbDown":
            return TbThumbDown;
        case "tb:TbThumbUpOff":
            return TbThumbUpOff;
        case "tb:TbThumbUp":
            return TbThumbUp;
        case "tb:TbTicTac":
            return TbTicTac;
        case "tb:TbTicketOff":
            return TbTicketOff;
        case "tb:TbTicket":
            return TbTicket;
        case "tb:TbTie":
            return TbTie;
        case "tb:TbTilde":
            return TbTilde;
        case "tb:TbTiltShiftOff":
            return TbTiltShiftOff;
        case "tb:TbTiltShift":
            return TbTiltShift;
        case "tb:TbTimeDuration0":
            return TbTimeDuration0;
        case "tb:TbTimeDuration10":
            return TbTimeDuration10;
        case "tb:TbTimeDuration15":
            return TbTimeDuration15;
        case "tb:TbTimeDuration30":
            return TbTimeDuration30;
        case "tb:TbTimeDuration45":
            return TbTimeDuration45;
        case "tb:TbTimeDuration5":
            return TbTimeDuration5;
        case "tb:TbTimeDuration60":
            return TbTimeDuration60;
        case "tb:TbTimeDuration90":
            return TbTimeDuration90;
        case "tb:TbTimeDurationOff":
            return TbTimeDurationOff;
        case "tb:TbTimelineEventExclamation":
            return TbTimelineEventExclamation;
        case "tb:TbTimelineEventMinus":
            return TbTimelineEventMinus;
        case "tb:TbTimelineEventPlus":
            return TbTimelineEventPlus;
        case "tb:TbTimelineEventText":
            return TbTimelineEventText;
        case "tb:TbTimelineEventX":
            return TbTimelineEventX;
        case "tb:TbTimelineEvent":
            return TbTimelineEvent;
        case "tb:TbTimeline":
            return TbTimeline;
        case "tb:TbTimezone":
            return TbTimezone;
        case "tb:TbTipJarEuro":
            return TbTipJarEuro;
        case "tb:TbTipJarPound":
            return TbTipJarPound;
        case "tb:TbTipJar":
            return TbTipJar;
        case "tb:TbTir":
            return TbTir;
        case "tb:TbToggleLeft":
            return TbToggleLeft;
        case "tb:TbToggleRight":
            return TbToggleRight;
        case "tb:TbToiletPaperOff":
            return TbToiletPaperOff;
        case "tb:TbToiletPaper":
            return TbToiletPaper;
        case "tb:TbToml":
            return TbToml;
        case "tb:TbTool":
            return TbTool;
        case "tb:TbToolsKitchen2Off":
            return TbToolsKitchen2Off;
        case "tb:TbToolsKitchen2":
            return TbToolsKitchen2;
        case "tb:TbToolsKitchen3":
            return TbToolsKitchen3;
        case "tb:TbToolsKitchenOff":
            return TbToolsKitchenOff;
        case "tb:TbToolsKitchen":
            return TbToolsKitchen;
        case "tb:TbToolsOff":
            return TbToolsOff;
        case "tb:TbTools":
            return TbTools;
        case "tb:TbTooltip":
            return TbTooltip;
        case "tb:TbTopologyBus":
            return TbTopologyBus;
        case "tb:TbTopologyComplex":
            return TbTopologyComplex;
        case "tb:TbTopologyFullHierarchy":
            return TbTopologyFullHierarchy;
        case "tb:TbTopologyFull":
            return TbTopologyFull;
        case "tb:TbTopologyRing2":
            return TbTopologyRing2;
        case "tb:TbTopologyRing3":
            return TbTopologyRing3;
        case "tb:TbTopologyRing":
            return TbTopologyRing;
        case "tb:TbTopologyStar2":
            return TbTopologyStar2;
        case "tb:TbTopologyStar3":
            return TbTopologyStar3;
        case "tb:TbTopologyStarRing2":
            return TbTopologyStarRing2;
        case "tb:TbTopologyStarRing3":
            return TbTopologyStarRing3;
        case "tb:TbTopologyStarRing":
            return TbTopologyStarRing;
        case "tb:TbTopologyStar":
            return TbTopologyStar;
        case "tb:TbTorii":
            return TbTorii;
        case "tb:TbTornado":
            return TbTornado;
        case "tb:TbTournament":
            return TbTournament;
        case "tb:TbTowerOff":
            return TbTowerOff;
        case "tb:TbTower":
            return TbTower;
        case "tb:TbTrack":
            return TbTrack;
        case "tb:TbTractor":
            return TbTractor;
        case "tb:TbTrademark":
            return TbTrademark;
        case "tb:TbTrafficConeOff":
            return TbTrafficConeOff;
        case "tb:TbTrafficCone":
            return TbTrafficCone;
        case "tb:TbTrafficLightsOff":
            return TbTrafficLightsOff;
        case "tb:TbTrafficLights":
            return TbTrafficLights;
        case "tb:TbTrain":
            return TbTrain;
        case "tb:TbTransactionBitcoin":
            return TbTransactionBitcoin;
        case "tb:TbTransactionDollar":
            return TbTransactionDollar;
        case "tb:TbTransactionEuro":
            return TbTransactionEuro;
        case "tb:TbTransactionPound":
            return TbTransactionPound;
        case "tb:TbTransactionRupee":
            return TbTransactionRupee;
        case "tb:TbTransactionYen":
            return TbTransactionYen;
        case "tb:TbTransactionYuan":
            return TbTransactionYuan;
        case "tb:TbTransferIn":
            return TbTransferIn;
        case "tb:TbTransferOut":
            return TbTransferOut;
        case "tb:TbTransferVertical":
            return TbTransferVertical;
        case "tb:TbTransfer":
            return TbTransfer;
        case "tb:TbTransformPointBottomLeft":
            return TbTransformPointBottomLeft;
        case "tb:TbTransformPointBottomRight":
            return TbTransformPointBottomRight;
        case "tb:TbTransformPointTopLeft":
            return TbTransformPointTopLeft;
        case "tb:TbTransformPointTopRight":
            return TbTransformPointTopRight;
        case "tb:TbTransformPoint":
            return TbTransformPoint;
        case "tb:TbTransform":
            return TbTransform;
        case "tb:TbTransitionBottom":
            return TbTransitionBottom;
        case "tb:TbTransitionLeft":
            return TbTransitionLeft;
        case "tb:TbTransitionRight":
            return TbTransitionRight;
        case "tb:TbTransitionTop":
            return TbTransitionTop;
        case "tb:TbTrashOff":
            return TbTrashOff;
        case "tb:TbTrashX":
            return TbTrashX;
        case "tb:TbTrash":
            return TbTrash;
        case "tb:TbTreadmill":
            return TbTreadmill;
        case "tb:TbTree":
            return TbTree;
        case "tb:TbTrees":
            return TbTrees;
        case "tb:TbTrekking":
            return TbTrekking;
        case "tb:TbTrendingDown2":
            return TbTrendingDown2;
        case "tb:TbTrendingDown3":
            return TbTrendingDown3;
        case "tb:TbTrendingDown":
            return TbTrendingDown;
        case "tb:TbTrendingUp2":
            return TbTrendingUp2;
        case "tb:TbTrendingUp3":
            return TbTrendingUp3;
        case "tb:TbTrendingUp":
            return TbTrendingUp;
        case "tb:TbTriangleInverted":
            return TbTriangleInverted;
        case "tb:TbTriangleMinus2":
            return TbTriangleMinus2;
        case "tb:TbTriangleMinus":
            return TbTriangleMinus;
        case "tb:TbTriangleOff":
            return TbTriangleOff;
        case "tb:TbTrianglePlus2":
            return TbTrianglePlus2;
        case "tb:TbTrianglePlus":
            return TbTrianglePlus;
        case "tb:TbTriangleSquareCircle":
            return TbTriangleSquareCircle;
        case "tb:TbTriangle":
            return TbTriangle;
        case "tb:TbTriangles":
            return TbTriangles;
        case "tb:TbTrident":
            return TbTrident;
        case "tb:TbTrolley":
            return TbTrolley;
        case "tb:TbTrophyOff":
            return TbTrophyOff;
        case "tb:TbTrophy":
            return TbTrophy;
        case "tb:TbTrowel":
            return TbTrowel;
        case "tb:TbTruckDelivery":
            return TbTruckDelivery;
        case "tb:TbTruckLoading":
            return TbTruckLoading;
        case "tb:TbTruckOff":
            return TbTruckOff;
        case "tb:TbTruckReturn":
            return TbTruckReturn;
        case "tb:TbTruck":
            return TbTruck;
        case "tb:TbTxt":
            return TbTxt;
        case "tb:TbTypeface":
            return TbTypeface;
        case "tb:TbTypographyOff":
            return TbTypographyOff;
        case "tb:TbTypography":
            return TbTypography;
        case "tb:TbUTurnLeft":
            return TbUTurnLeft;
        case "tb:TbUTurnRight":
            return TbUTurnRight;
        case "tb:TbUfoOff":
            return TbUfoOff;
        case "tb:TbUfo":
            return TbUfo;
        case "tb:TbUhd":
            return TbUhd;
        case "tb:TbUmbrella2":
            return TbUmbrella2;
        case "tb:TbUmbrellaClosed2":
            return TbUmbrellaClosed2;
        case "tb:TbUmbrellaClosed":
            return TbUmbrellaClosed;
        case "tb:TbUmbrellaOff":
            return TbUmbrellaOff;
        case "tb:TbUmbrella":
            return TbUmbrella;
        case "tb:TbUnderline":
            return TbUnderline;
        case "tb:TbUniverse":
            return TbUniverse;
        case "tb:TbUnlink":
            return TbUnlink;
        case "tb:TbUpload":
            return TbUpload;
        case "tb:TbUrgent":
            return TbUrgent;
        case "tb:TbUsb":
            return TbUsb;
        case "tb:TbUserBitcoin":
            return TbUserBitcoin;
        case "tb:TbUserBolt":
            return TbUserBolt;
        case "tb:TbUserCancel":
            return TbUserCancel;
        case "tb:TbUserCheck":
            return TbUserCheck;
        case "tb:TbUserCircle":
            return TbUserCircle;
        case "tb:TbUserCode":
            return TbUserCode;
        case "tb:TbUserCog":
            return TbUserCog;
        case "tb:TbUserDollar":
            return TbUserDollar;
        case "tb:TbUserDown":
            return TbUserDown;
        case "tb:TbUserEdit":
            return TbUserEdit;
        case "tb:TbUserExclamation":
            return TbUserExclamation;
        case "tb:TbUserHeart":
            return TbUserHeart;
        case "tb:TbUserHexagon":
            return TbUserHexagon;
        case "tb:TbUserMinus":
            return TbUserMinus;
        case "tb:TbUserOff":
            return TbUserOff;
        case "tb:TbUserPause":
            return TbUserPause;
        case "tb:TbUserPentagon":
            return TbUserPentagon;
        case "tb:TbUserPin":
            return TbUserPin;
        case "tb:TbUserPlus":
            return TbUserPlus;
        case "tb:TbUserQuestion":
            return TbUserQuestion;
        case "tb:TbUserScan":
            return TbUserScan;
        case "tb:TbUserScreen":
            return TbUserScreen;
        case "tb:TbUserSearch":
            return TbUserSearch;
        case "tb:TbUserShare":
            return TbUserShare;
        case "tb:TbUserShield":
            return TbUserShield;
        case "tb:TbUserSquareRounded":
            return TbUserSquareRounded;
        case "tb:TbUserSquare":
            return TbUserSquare;
        case "tb:TbUserStar":
            return TbUserStar;
        case "tb:TbUserUp":
            return TbUserUp;
        case "tb:TbUserX":
            return TbUserX;
        case "tb:TbUser":
            return TbUser;
        case "tb:TbUsersGroup":
            return TbUsersGroup;
        case "tb:TbUsersMinus":
            return TbUsersMinus;
        case "tb:TbUsersPlus":
            return TbUsersPlus;
        case "tb:TbUsers":
            return TbUsers;
        case "tb:TbUvIndex":
            return TbUvIndex;
        case "tb:TbUxCircle":
            return TbUxCircle;
        case "tb:TbVaccineBottleOff":
            return TbVaccineBottleOff;
        case "tb:TbVaccineBottle":
            return TbVaccineBottle;
        case "tb:TbVaccineOff":
            return TbVaccineOff;
        case "tb:TbVaccine":
            return TbVaccine;
        case "tb:TbVacuumCleaner":
            return TbVacuumCleaner;
        case "tb:TbVariableMinus":
            return TbVariableMinus;
        case "tb:TbVariableOff":
            return TbVariableOff;
        case "tb:TbVariablePlus":
            return TbVariablePlus;
        case "tb:TbVariable":
            return TbVariable;
        case "tb:TbVectorBezier2":
            return TbVectorBezier2;
        case "tb:TbVectorBezierArc":
            return TbVectorBezierArc;
        case "tb:TbVectorBezierCircle":
            return TbVectorBezierCircle;
        case "tb:TbVectorBezier":
            return TbVectorBezier;
        case "tb:TbVectorOff":
            return TbVectorOff;
        case "tb:TbVectorSpline":
            return TbVectorSpline;
        case "tb:TbVectorTriangleOff":
            return TbVectorTriangleOff;
        case "tb:TbVectorTriangle":
            return TbVectorTriangle;
        case "tb:TbVector":
            return TbVector;
        case "tb:TbVenus":
            return TbVenus;
        case "tb:TbVersionsOff":
            return TbVersionsOff;
        case "tb:TbVersions":
            return TbVersions;
        case "tb:TbVideoMinus":
            return TbVideoMinus;
        case "tb:TbVideoOff":
            return TbVideoOff;
        case "tb:TbVideoPlus":
            return TbVideoPlus;
        case "tb:TbVideo":
            return TbVideo;
        case "tb:TbView360Arrow":
            return TbView360Arrow;
        case "tb:TbView360Number":
            return TbView360Number;
        case "tb:TbView360Off":
            return TbView360Off;
        case "tb:TbView360":
            return TbView360;
        case "tb:TbViewfinderOff":
            return TbViewfinderOff;
        case "tb:TbViewfinder":
            return TbViewfinder;
        case "tb:TbViewportNarrow":
            return TbViewportNarrow;
        case "tb:TbViewportShort":
            return TbViewportShort;
        case "tb:TbViewportTall":
            return TbViewportTall;
        case "tb:TbViewportWide":
            return TbViewportWide;
        case "tb:TbVinyl":
            return TbVinyl;
        case "tb:TbVipOff":
            return TbVipOff;
        case "tb:TbVip":
            return TbVip;
        case "tb:TbVirusOff":
            return TbVirusOff;
        case "tb:TbVirusSearch":
            return TbVirusSearch;
        case "tb:TbVirus":
            return TbVirus;
        case "tb:TbVocabularyOff":
            return TbVocabularyOff;
        case "tb:TbVocabulary":
            return TbVocabulary;
        case "tb:TbVolcano":
            return TbVolcano;
        case "tb:TbVolume2":
            return TbVolume2;
        case "tb:TbVolume3":
            return TbVolume3;
        case "tb:TbVolumeOff":
            return TbVolumeOff;
        case "tb:TbVolume":
            return TbVolume;
        case "tb:TbVs":
            return TbVs;
        case "tb:TbWalk":
            return TbWalk;
        case "tb:TbWallOff":
            return TbWallOff;
        case "tb:TbWall":
            return TbWall;
        case "tb:TbWalletOff":
            return TbWalletOff;
        case "tb:TbWallet":
            return TbWallet;
        case "tb:TbWallpaperOff":
            return TbWallpaperOff;
        case "tb:TbWallpaper":
            return TbWallpaper;
        case "tb:TbWandOff":
            return TbWandOff;
        case "tb:TbWand":
            return TbWand;
        case "tb:TbWashDry1":
            return TbWashDry1;
        case "tb:TbWashDry2":
            return TbWashDry2;
        case "tb:TbWashDry3":
            return TbWashDry3;
        case "tb:TbWashDryA":
            return TbWashDryA;
        case "tb:TbWashDryDip":
            return TbWashDryDip;
        case "tb:TbWashDryF":
            return TbWashDryF;
        case "tb:TbWashDryFlat":
            return TbWashDryFlat;
        case "tb:TbWashDryHang":
            return TbWashDryHang;
        case "tb:TbWashDryOff":
            return TbWashDryOff;
        case "tb:TbWashDryP":
            return TbWashDryP;
        case "tb:TbWashDryShade":
            return TbWashDryShade;
        case "tb:TbWashDryW":
            return TbWashDryW;
        case "tb:TbWashDry":
            return TbWashDry;
        case "tb:TbWashDrycleanOff":
            return TbWashDrycleanOff;
        case "tb:TbWashDryclean":
            return TbWashDryclean;
        case "tb:TbWashEco":
            return TbWashEco;
        case "tb:TbWashGentle":
            return TbWashGentle;
        case "tb:TbWashHand":
            return TbWashHand;
        case "tb:TbWashMachine":
            return TbWashMachine;
        case "tb:TbWashOff":
            return TbWashOff;
        case "tb:TbWashPress":
            return TbWashPress;
        case "tb:TbWashTemperature1":
            return TbWashTemperature1;
        case "tb:TbWashTemperature2":
            return TbWashTemperature2;
        case "tb:TbWashTemperature3":
            return TbWashTemperature3;
        case "tb:TbWashTemperature4":
            return TbWashTemperature4;
        case "tb:TbWashTemperature5":
            return TbWashTemperature5;
        case "tb:TbWashTemperature6":
            return TbWashTemperature6;
        case "tb:TbWashTumbleDry":
            return TbWashTumbleDry;
        case "tb:TbWashTumbleOff":
            return TbWashTumbleOff;
        case "tb:TbWash":
            return TbWash;
        case "tb:TbWaterpolo":
            return TbWaterpolo;
        case "tb:TbWaveSawTool":
            return TbWaveSawTool;
        case "tb:TbWaveSine":
            return TbWaveSine;
        case "tb:TbWaveSquare":
            return TbWaveSquare;
        case "tb:TbWavesElectricity":
            return TbWavesElectricity;
        case "tb:TbWebhookOff":
            return TbWebhookOff;
        case "tb:TbWebhook":
            return TbWebhook;
        case "tb:TbWeight":
            return TbWeight;
        case "tb:TbWheatOff":
            return TbWheatOff;
        case "tb:TbWheat":
            return TbWheat;
        case "tb:TbWheel":
            return TbWheel;
        case "tb:TbWheelchairOff":
            return TbWheelchairOff;
        case "tb:TbWheelchair":
            return TbWheelchair;
        case "tb:TbWhirl":
            return TbWhirl;
        case "tb:TbWifi0":
            return TbWifi0;
        case "tb:TbWifi1":
            return TbWifi1;
        case "tb:TbWifi2":
            return TbWifi2;
        case "tb:TbWifiOff":
            return TbWifiOff;
        case "tb:TbWifi":
            return TbWifi;
        case "tb:TbWindElectricity":
            return TbWindElectricity;
        case "tb:TbWindOff":
            return TbWindOff;
        case "tb:TbWind":
            return TbWind;
        case "tb:TbWindmillOff":
            return TbWindmillOff;
        case "tb:TbWindmill":
            return TbWindmill;
        case "tb:TbWindowMaximize":
            return TbWindowMaximize;
        case "tb:TbWindowMinimize":
            return TbWindowMinimize;
        case "tb:TbWindowOff":
            return TbWindowOff;
        case "tb:TbWindow":
            return TbWindow;
        case "tb:TbWindsock":
            return TbWindsock;
        case "tb:TbWiperWash":
            return TbWiperWash;
        case "tb:TbWiper":
            return TbWiper;
        case "tb:TbWoman":
            return TbWoman;
        case "tb:TbWood":
            return TbWood;
        case "tb:TbWorldBolt":
            return TbWorldBolt;
        case "tb:TbWorldCancel":
            return TbWorldCancel;
        case "tb:TbWorldCheck":
            return TbWorldCheck;
        case "tb:TbWorldCode":
            return TbWorldCode;
        case "tb:TbWorldCog":
            return TbWorldCog;
        case "tb:TbWorldDollar":
            return TbWorldDollar;
        case "tb:TbWorldDown":
            return TbWorldDown;
        case "tb:TbWorldDownload":
            return TbWorldDownload;
        case "tb:TbWorldExclamation":
            return TbWorldExclamation;
        case "tb:TbWorldHeart":
            return TbWorldHeart;
        case "tb:TbWorldLatitude":
            return TbWorldLatitude;
        case "tb:TbWorldLongitude":
            return TbWorldLongitude;
        case "tb:TbWorldMinus":
            return TbWorldMinus;
        case "tb:TbWorldOff":
            return TbWorldOff;
        case "tb:TbWorldPause":
            return TbWorldPause;
        case "tb:TbWorldPin":
            return TbWorldPin;
        case "tb:TbWorldPlus":
            return TbWorldPlus;
        case "tb:TbWorldQuestion":
            return TbWorldQuestion;
        case "tb:TbWorldSearch":
            return TbWorldSearch;
        case "tb:TbWorldShare":
            return TbWorldShare;
        case "tb:TbWorldStar":
            return TbWorldStar;
        case "tb:TbWorldUp":
            return TbWorldUp;
        case "tb:TbWorldUpload":
            return TbWorldUpload;
        case "tb:TbWorldWww":
            return TbWorldWww;
        case "tb:TbWorldX":
            return TbWorldX;
        case "tb:TbWorld":
            return TbWorld;
        case "tb:TbWreckingBall":
            return TbWreckingBall;
        case "tb:TbWritingOff":
            return TbWritingOff;
        case "tb:TbWritingSignOff":
            return TbWritingSignOff;
        case "tb:TbWritingSign":
            return TbWritingSign;
        case "tb:TbWriting":
            return TbWriting;
        case "tb:TbXPowerY":
            return TbXPowerY;
        case "tb:TbX":
            return TbX;
        case "tb:TbXboxA":
            return TbXboxA;
        case "tb:TbXboxB":
            return TbXboxB;
        case "tb:TbXboxX":
            return TbXboxX;
        case "tb:TbXboxY":
            return TbXboxY;
        case "tb:TbXd":
            return TbXd;
        case "tb:TbXxx":
            return TbXxx;
        case "tb:TbYinYang":
            return TbYinYang;
        case "tb:TbYoga":
            return TbYoga;
        case "tb:TbZeppelinOff":
            return TbZeppelinOff;
        case "tb:TbZeppelin":
            return TbZeppelin;
        case "tb:TbZip":
            return TbZip;
        case "tb:TbZodiacAquarius":
            return TbZodiacAquarius;
        case "tb:TbZodiacAries":
            return TbZodiacAries;
        case "tb:TbZodiacCancer":
            return TbZodiacCancer;
        case "tb:TbZodiacCapricorn":
            return TbZodiacCapricorn;
        case "tb:TbZodiacGemini":
            return TbZodiacGemini;
        case "tb:TbZodiacLeo":
            return TbZodiacLeo;
        case "tb:TbZodiacLibra":
            return TbZodiacLibra;
        case "tb:TbZodiacPisces":
            return TbZodiacPisces;
        case "tb:TbZodiacSagittarius":
            return TbZodiacSagittarius;
        case "tb:TbZodiacScorpio":
            return TbZodiacScorpio;
        case "tb:TbZodiacTaurus":
            return TbZodiacTaurus;
        case "tb:TbZodiacVirgo":
            return TbZodiacVirgo;
        case "tb:TbZoomCancel":
            return TbZoomCancel;
        case "tb:TbZoomCheck":
            return TbZoomCheck;
        case "tb:TbZoomCode":
            return TbZoomCode;
        case "tb:TbZoomExclamation":
            return TbZoomExclamation;
        case "tb:TbZoomInArea":
            return TbZoomInArea;
        case "tb:TbZoomIn":
            return TbZoomIn;
        case "tb:TbZoomMoney":
            return TbZoomMoney;
        case "tb:TbZoomOutArea":
            return TbZoomOutArea;
        case "tb:TbZoomOut":
            return TbZoomOut;
        case "tb:TbZoomPan":
            return TbZoomPan;
        case "tb:TbZoomQuestion":
            return TbZoomQuestion;
        case "tb:TbZoomReplace":
            return TbZoomReplace;
        case "tb:TbZoomReset":
            return TbZoomReset;
        case "tb:TbZoomScan":
            return TbZoomScan;
        case "tb:TbZoom":
            return TbZoom;
        case "tb:TbZzzOff":
            return TbZzzOff;
        case "tb:TbZzz":
            return TbZzz;
    }
}
