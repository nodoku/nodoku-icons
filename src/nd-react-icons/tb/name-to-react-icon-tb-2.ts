import type {IconType} from "react-icons";

import {
    TbCar,
    TbCarambola,
    TbCaravan,
    TbCardboardsOff,
    TbCardboards,
    TbCards,
    TbCaretDown,
    TbCaretLeftRight,
    TbCaretLeft,
    TbCaretRight,
    TbCaretUpDown,
    TbCaretUp,
    TbCarouselHorizontal,
    TbCarouselVertical,
    TbCarrotOff,
    TbCarrot,
    TbCashBanknoteOff,
    TbCashBanknote,
    TbCashOff,
    TbCashRegister,
    TbCash,
    TbCastOff,
    TbCast,
    TbCat,
    TbCategory2,
    TbCategoryMinus,
    TbCategoryPlus,
    TbCategory,
    TbCeOff,
    TbCe,
    TbCellSignal1,
    TbCellSignal2,
    TbCellSignal3,
    TbCellSignal4,
    TbCellSignal5,
    TbCellSignalOff,
    TbCell,
    TbCertificate2Off,
    TbCertificate2,
    TbCertificateOff,
    TbCertificate,
    TbChairDirector,
    TbChalkboardOff,
    TbChalkboard,
    TbChargingPile,
    TbChartArcs3,
    TbChartArcs,
    TbChartAreaLine,
    TbChartArea,
    TbChartArrowsVertical,
    TbChartArrows,
    TbChartBarOff,
    TbChartBarPopular,
    TbChartBar,
    TbChartBubble,
    TbChartCandle,
    TbChartCircles,
    TbChartCohort,
    TbChartColumn,
    TbChartCovariate,
    TbChartDonut2,
    TbChartDonut3,
    TbChartDonut4,
    TbChartDonut,
    TbChartDots2,
    TbChartDots3,
    TbChartDots,
    TbChartFunnel,
    TbChartGridDots,
    TbChartHistogram,
    TbChartInfographic,
    TbChartLine,
    TbChartPie2,
    TbChartPie3,
    TbChartPie4,
    TbChartPieOff,
    TbChartPie,
    TbChartPpf,
    TbChartRadar,
    TbChartSankey,
    TbChartScatter3D,
    TbChartScatter,
    TbChartTreemap,
    TbCheck,
    TbCheckbox,
    TbChecklist,
    TbChecks,
    TbCheckupList,
    TbCheese,
    TbChefHatOff,
    TbChefHat,
    TbCherry,
    TbChessBishop,
    TbChessKing,
    TbChessKnight,
    TbChessQueen,
    TbChessRook,
    TbChess,
    TbChevronCompactDown,
    TbChevronCompactLeft,
    TbChevronCompactRight,
    TbChevronCompactUp,
    TbChevronDownLeft,
    TbChevronDownRight,
    TbChevronDown,
    TbChevronLeftPipe,
    TbChevronLeft,
    TbChevronRightPipe,
    TbChevronRight,
    TbChevronUpLeft,
    TbChevronUpRight,
    TbChevronUp,
    TbChevronsDownLeft,
    TbChevronsDownRight,
    TbChevronsDown,
    TbChevronsLeft,
    TbChevronsRight,
    TbChevronsUpLeft,
    TbChevronsUpRight,
    TbChevronsUp,
    TbChisel,
    TbChristmasBall,
    TbChristmasTreeOff,
    TbChristmasTree,
    TbCircleArrowDownLeft,
    TbCircleArrowDownRight,
    TbCircleArrowDown,
    TbCircleArrowLeft,
    TbCircleArrowRight,
    TbCircleArrowUpLeft,
    TbCircleArrowUpRight,
    TbCircleArrowUp,
    TbCircleCaretDown,
    TbCircleCaretLeft,
    TbCircleCaretRight,
    TbCircleCaretUp,
    TbCircleCheck,
    TbCircleChevronDown,
    TbCircleChevronLeft,
    TbCircleChevronRight,
    TbCircleChevronUp,
    TbCircleChevronsDown,
    TbCircleChevronsLeft,
    TbCircleChevronsRight,
    TbCircleChevronsUp,
    TbCircleDashedCheck,
    TbCircleDashedLetterA,
    TbCircleDashedLetterB,
    TbCircleDashedLetterC,
    TbCircleDashedLetterD,
    TbCircleDashedLetterE,
    TbCircleDashedLetterF,
    TbCircleDashedLetterG,
    TbCircleDashedLetterH,
    TbCircleDashedLetterI,
    TbCircleDashedLetterJ,
    TbCircleDashedLetterK,
    TbCircleDashedLetterL,
    TbCircleDashedLetterM,
    TbCircleDashedLetterN,
    TbCircleDashedLetterO,
    TbCircleDashedLetterP,
    TbCircleDashedLetterQ,
    TbCircleDashedLetterR,
    TbCircleDashedLetterS,
    TbCircleDashedLetterT,
    TbCircleDashedLetterU,
    TbCircleDashedLetterV,
    TbCircleDashedLetterW,
    TbCircleDashedLetterX,
    TbCircleDashedLetterY,
    TbCircleDashedLetterZ,
    TbCircleDashedMinus,
    TbCircleDashedNumber0,
    TbCircleDashedNumber1,
    TbCircleDashedNumber2,
    TbCircleDashedNumber3,
    TbCircleDashedNumber4,
    TbCircleDashedNumber5,
    TbCircleDashedNumber6,
    TbCircleDashedNumber7,
    TbCircleDashedNumber8,
    TbCircleDashedNumber9,
    TbCircleDashedPercentage,
    TbCircleDashedPlus,
    TbCircleDashedX,
    TbCircleDashed,
    TbCircleDot,
    TbCircleDottedLetterA,
    TbCircleDottedLetterB,
    TbCircleDottedLetterC,
    TbCircleDottedLetterD,
    TbCircleDottedLetterE,
    TbCircleDottedLetterF,
    TbCircleDottedLetterG,
    TbCircleDottedLetterH,
    TbCircleDottedLetterI,
    TbCircleDottedLetterJ,
    TbCircleDottedLetterK,
    TbCircleDottedLetterL,
    TbCircleDottedLetterM,
    TbCircleDottedLetterN,
    TbCircleDottedLetterO,
    TbCircleDottedLetterP,
    TbCircleDottedLetterQ,
    TbCircleDottedLetterR,
    TbCircleDottedLetterS,
    TbCircleDottedLetterT,
    TbCircleDottedLetterU,
    TbCircleDottedLetterV,
    TbCircleDottedLetterW,
    TbCircleDottedLetterX,
    TbCircleDottedLetterY,
    TbCircleDottedLetterZ,
    TbCircleDotted,
    TbCircleHalf2,
    TbCircleHalfVertical,
    TbCircleHalf,
    TbCircleKey,
    TbCircleLetterA,
    TbCircleLetterB,
    TbCircleLetterC,
    TbCircleLetterD,
    TbCircleLetterE,
    TbCircleLetterF,
    TbCircleLetterG,
    TbCircleLetterH,
    TbCircleLetterI,
    TbCircleLetterJ,
    TbCircleLetterK,
    TbCircleLetterL,
    TbCircleLetterM,
    TbCircleLetterN,
    TbCircleLetterO,
    TbCircleLetterP,
    TbCircleLetterQ,
    TbCircleLetterR,
    TbCircleLetterS,
    TbCircleLetterT,
    TbCircleLetterU,
    TbCircleLetterV,
    TbCircleLetterW,
    TbCircleLetterX,
    TbCircleLetterY,
    TbCircleLetterZ,
    TbCircleMinus2,
    TbCircleMinus,
    TbCircleNumber0,
    TbCircleNumber1,
    TbCircleNumber2,
    TbCircleNumber3,
    TbCircleNumber4,
    TbCircleNumber5,
    TbCircleNumber6,
    TbCircleNumber7,
    TbCircleNumber8,
    TbCircleNumber9,
    TbCircleOff,
    TbCirclePercentage,
    TbCirclePlus2,
    TbCirclePlus,
    TbCircleRectangleOff,
    TbCircleRectangle,
    TbCircleSquare,
    TbCircleTriangle,
    TbCircleX,
    TbCircle,
    TbCirclesRelation,
    TbCircles,
    TbCircuitAmmeter,
    TbCircuitBattery,
    TbCircuitBulb,
    TbCircuitCapacitorPolarized,
    TbCircuitCapacitor,
    TbCircuitCellPlus,
    TbCircuitCell,
    TbCircuitChangeover,
    TbCircuitDiodeZener,
    TbCircuitDiode,
    TbCircuitGroundDigital,
    TbCircuitGround,
    TbCircuitInductor,
    TbCircuitMotor,
    TbCircuitPushbutton,
    TbCircuitResistor,
    TbCircuitSwitchClosed,
    TbCircuitSwitchOpen,
    TbCircuitVoltmeter,
    TbClearAll,
    TbClearFormatting,
    TbClick,
    TbCliffJumping,
    TbClipboardCheck,
    TbClipboardCopy,
    TbClipboardData,
    TbClipboardHeart,
    TbClipboardList,
    TbClipboardOff,
    TbClipboardPlus,
    TbClipboardSearch,
    TbClipboardSmile,
    TbClipboardText,
    TbClipboardTypography,
    TbClipboardX,
    TbClipboard,
    TbClock12,
    TbClock2,
    TbClock24,
    TbClockBitcoin,
    TbClockBolt,
    TbClockCancel,
    TbClockCheck,
    TbClockCode,
    TbClockCog,
    TbClockDollar,
    TbClockDown,
    TbClockEdit,
    TbClockExclamation,
    TbClockHeart,
    TbClockHour1,
    TbClockHour10,
    TbClockHour11,
    TbClockHour12,
    TbClockHour2,
    TbClockHour3,
    TbClockHour4,
    TbClockHour5,
    TbClockHour6,
    TbClockHour7,
    TbClockHour8,
    TbClockHour9,
    TbClockMinus,
    TbClockOff,
    TbClockPause,
    TbClockPin,
    TbClockPlay,
    TbClockPlus,
    TbClockQuestion,
    TbClockRecord,
    TbClockSearch,
    TbClockShare,
    TbClockShield,
    TbClockStar,
    TbClockStop,
    TbClockUp,
    TbClockX,
    TbClock,
    TbClothesRackOff,
    TbClothesRack,
    TbCloudBitcoin,
    TbCloudBolt,
    TbCloudCancel,
    TbCloudCheck,
    TbCloudCode,
    TbCloudCog,
    TbCloudComputing,
    TbCloudDataConnection,
    TbCloudDollar,
    TbCloudDown,
    TbCloudDownload,
    TbCloudExclamation,
    TbCloudFog,
    TbCloudHeart,
    TbCloudLockOpen,
    TbCloudLock,
    TbCloudMinus,
    TbCloudNetwork,
    TbCloudOff,
    TbCloudPause,
    TbCloudPin,
    TbCloudPlus,
    TbCloudQuestion,
    TbCloudRain,
    TbCloudSearch,
    TbCloudShare,
    TbCloudSnow,
    TbCloudStar,
    TbCloudStorm,
    TbCloudUp,
    TbCloudUpload,
    TbCloudX,
    TbCloud,
    TbClover2,
    TbClover,
    TbClubs,
    TbCodeAsterisk,
    TbCodeCircle2,
    TbCodeCircle,
    TbCodeDots,
    TbCodeMinus,
    TbCodeOff,
    TbCodePlus,
    TbCodeVariableMinus,
    TbCodeVariablePlus,
    TbCodeVariable,
    TbCode,
    TbCoffeeOff,
    TbCoffee,
    TbCoffin,
    TbCoinBitcoin,
    TbCoinEuro,
    TbCoinMonero,
    TbCoinOff,
    TbCoinPound,
    TbCoinRupee,
    TbCoinTaka,
    TbCoinYen,
    TbCoinYuan,
    TbCoin,
    TbCoins,
    TbColorFilter,
    TbColorPickerOff,
    TbColorPicker,
    TbColorSwatchOff,
    TbColorSwatch,
    TbColumnInsertLeft,
    TbColumnInsertRight,
    TbColumnRemove,
    TbColumns1,
    TbColumns2,
    TbColumns3,
    TbColumnsOff,
    TbColumns,
    TbComet,
    TbCommandOff,
    TbCommand,
    TbCompassOff,
    TbCompass,
    TbComponentsOff,
    TbComponents,
    TbCone2,
    TbConeOff,
    TbConePlus,
    TbCone,
    TbConfettiOff,
    TbConfetti,
    TbConfucius,
    TbCongruentTo,
    TbContainerOff,
    TbContainer,
    TbContract,
    TbContrast2Off,
    TbContrast2,
    TbContrastOff,
    TbContrast,
    TbCooker,
    TbCookieMan,
    TbCookieOff,
    TbCookie,
    TbCopyCheck,
    TbCopyMinus,
    TbCopyOff,
    TbCopyPlus,
    TbCopyX,
    TbCopy,
    TbCopyleftOff,
    TbCopyleft,
    TbCopyrightOff,
    TbCopyright,
    TbCornerDownLeftDouble,
    TbCornerDownLeft,
    TbCornerDownRightDouble,
    TbCornerDownRight,
    TbCornerLeftDownDouble,
    TbCornerLeftDown,
    TbCornerLeftUpDouble,
    TbCornerLeftUp,
    TbCornerRightDownDouble,
    TbCornerRightDown,
    TbCornerRightUpDouble,
    TbCornerRightUp,
    TbCornerUpLeftDouble,
    TbCornerUpLeft,
    TbCornerUpRightDouble,
    TbCornerUpRight,
    TbCpu2,
    TbCpuOff,
    TbCpu,
    TbCraneOff,
    TbCrane,
    TbCreativeCommonsBy,
    TbCreativeCommonsNc,
    TbCreativeCommonsNd,
    TbCreativeCommonsOff,
    TbCreativeCommonsSa,
    TbCreativeCommonsZero,
    TbCreativeCommons,
    TbCreditCardOff,
    TbCreditCardPay,
    TbCreditCardRefund,
    TbCreditCard,
    TbCricket,
    TbCrop11,
    TbCrop169,
    TbCrop32,
    TbCrop54,
    TbCrop75,
    TbCropLandscape,
    TbCropPortrait,
    TbCrop,
    TbCrossOff,
    TbCross,
    TbCrosshair,
    TbCrownOff,
    TbCrown,
    TbCrutchesOff,
    TbCrutches,
    TbCrystalBall,
    TbCsv,
    TbCube3dSphereOff,
    TbCube3dSphere,
    TbCubeOff,
    TbCubePlus,
    TbCubeSend,
    TbCubeSpark,
    TbCubeUnfolded,
    TbCube,
    TbCupOff,
    TbCup,
    TbCurling,
    TbCurlyLoop,
    TbCurrencyAfghani,
    TbCurrencyBahraini,
    TbCurrencyBaht,
    TbCurrencyBitcoin,
    TbCurrencyCent,
    TbCurrencyDinar,
    TbCurrencyDirham,
    TbCurrencyDogecoin,
    TbCurrencyDollarAustralian,
    TbCurrencyDollarBrunei,
    TbCurrencyDollarCanadian,
    TbCurrencyDollarGuyanese,
    TbCurrencyDollarOff,
    TbCurrencyDollarSingapore,
    TbCurrencyDollarZimbabwean,
    TbCurrencyDollar,
    TbCurrencyDong,
    TbCurrencyDram,
    TbCurrencyEthereum,
    TbCurrencyEuroOff,
    TbCurrencyEuro,
    TbCurrencyFlorin,
    TbCurrencyForint,
    TbCurrencyFrank,
    TbCurrencyGuarani,
    TbCurrencyHryvnia,
    TbCurrencyIranianRial,
    TbCurrencyKip,
    TbCurrencyKroneCzech,
    TbCurrencyKroneDanish,
    TbCurrencyKroneSwedish,
    TbCurrencyLari,
    TbCurrencyLeu,
    TbCurrencyLira,
    TbCurrencyLitecoin,
    TbCurrencyLyd,
    TbCurrencyManat,
    TbCurrencyMonero,
    TbCurrencyNaira,
    TbCurrencyNano,
    TbCurrencyOff,
    TbCurrencyPaanga,
    TbCurrencyPeso,
    TbCurrencyPoundOff,
    TbCurrencyPound,
    TbCurrencyQuetzal,
    TbCurrencyReal,
    TbCurrencyRenminbi,
    TbCurrencyRipple,
    TbCurrencyRiyal,
    TbCurrencyRubel,
    TbCurrencyRufiyaa,
    TbCurrencyRupeeNepalese,
    TbCurrencyRupee,
    TbCurrencyShekel,
    TbCurrencySolana,
    TbCurrencySom,
    TbCurrencyTaka,
    TbCurrencyTenge,
    TbCurrencyTugrik,
    TbCurrencyWon,
    TbCurrencyXrp,
    TbCurrencyYenOff,
    TbCurrencyYen,
    TbCurrencyYuan,
    TbCurrencyZloty,
    TbCurrency,
    TbCurrentLocationOff,
    TbCurrentLocation,
    TbCursorOff,
    TbCursorText,
    TbCut,
    TbCylinderOff,
    TbCylinderPlus,
    TbCylinder,
    TbDashboardOff,
    TbDashboard,
    TbDatabaseCog,
    TbDatabaseDollar,
    TbDatabaseEdit,
    TbDatabaseExclamation,
    TbDatabaseExport,
    TbDatabaseHeart,
    TbDatabaseImport,
    TbDatabaseLeak,
    TbDatabaseMinus,
    TbDatabaseOff,
    TbDatabasePlus,
    TbDatabaseSearch,
    TbDatabaseShare,
    TbDatabaseSmile,
    TbDatabaseStar,
    TbDatabaseX,
    TbDatabase,
    TbDecimal,
    TbDeer,
    TbDelta,
    TbDentalBroken,
    TbDentalOff,
    TbDental,
    TbDeselect,
    TbDesk,
    TbDetailsOff,
    TbDetails,
    TbDeviceAirpodsCase,
    TbDeviceAirpods,
    TbDeviceAirtag,
    TbDeviceAnalytics,
    TbDeviceAudioTape,
    TbDeviceCameraPhone,
    TbDeviceCctvOff,
    TbDeviceCctv,
    TbDeviceComputerCameraOff,
    TbDeviceComputerCamera,
    TbDeviceDesktopAnalytics,
    TbDeviceDesktopBolt,
    TbDeviceDesktopCancel,
    TbDeviceDesktopCheck,
    TbDeviceDesktopCode,
    TbDeviceDesktopCog,
    TbDeviceDesktopDollar,
    TbDeviceDesktopDown,
    TbDeviceDesktopExclamation,
    TbDeviceDesktopHeart,
    TbDeviceDesktopMinus,
    TbDeviceDesktopOff,
    TbDeviceDesktopPause,
    TbDeviceDesktopPin,
    TbDeviceDesktopPlus,
    TbDeviceDesktopQuestion,
    TbDeviceDesktopSearch,
    TbDeviceDesktopShare,
    TbDeviceDesktopStar,
    TbDeviceDesktopUp,
    TbDeviceDesktopX,
    TbDeviceDesktop,
    TbDeviceFloppy,
    TbDeviceGamepad2,
    TbDeviceGamepad3,
    TbDeviceGamepad,
    TbDeviceHeartMonitor,
    TbDeviceImacBolt,
    TbDeviceImacCancel,
    TbDeviceImacCheck,
    TbDeviceImacCode,
    TbDeviceImacCog,
    TbDeviceImacDollar,
    TbDeviceImacDown,
    TbDeviceImacExclamation,
    TbDeviceImacHeart,
    TbDeviceImacMinus,
    TbDeviceImacOff,
    TbDeviceImacPause,
    TbDeviceImacPin,
    TbDeviceImacPlus,
    TbDeviceImacQuestion,
    TbDeviceImacSearch,
    TbDeviceImacShare,
    TbDeviceImacStar,
    TbDeviceImacUp,
    TbDeviceImacX,
    TbDeviceImac,
    TbDeviceIpadBolt,
    TbDeviceIpadCancel,
    TbDeviceIpadCheck,
    TbDeviceIpadCode,
    TbDeviceIpadCog,
    TbDeviceIpadDollar,
    TbDeviceIpadDown,
    TbDeviceIpadExclamation,
    TbDeviceIpadHeart,
    TbDeviceIpadHorizontalBolt,
    TbDeviceIpadHorizontalCancel,
    TbDeviceIpadHorizontalCheck,
    TbDeviceIpadHorizontalCode,
    TbDeviceIpadHorizontalCog,
    TbDeviceIpadHorizontalDollar,
    TbDeviceIpadHorizontalDown,
    TbDeviceIpadHorizontalExclamation,
    TbDeviceIpadHorizontalHeart,
    TbDeviceIpadHorizontalMinus,
    TbDeviceIpadHorizontalOff,
    TbDeviceIpadHorizontalPause,
    TbDeviceIpadHorizontalPin,
    TbDeviceIpadHorizontalPlus,
    TbDeviceIpadHorizontalQuestion,
    TbDeviceIpadHorizontalSearch,
    TbDeviceIpadHorizontalShare,
    TbDeviceIpadHorizontalStar,
    TbDeviceIpadHorizontalUp,
    TbDeviceIpadHorizontalX,
    TbDeviceIpadHorizontal,
    TbDeviceIpadMinus,
    TbDeviceIpadOff,
    TbDeviceIpadPause,
    TbDeviceIpadPin,
    TbDeviceIpadPlus,
    TbDeviceIpadQuestion,
    TbDeviceIpadSearch,
    TbDeviceIpadShare,
    TbDeviceIpadStar,
    TbDeviceIpadUp,
    TbDeviceIpadX,
    TbDeviceIpad,
    TbDeviceLandlinePhone,
    TbDeviceLaptopOff,
    TbDeviceLaptop,
    TbDeviceMobileBolt,
    TbDeviceMobileCancel,
    TbDeviceMobileCharging,
    TbDeviceMobileCheck,
    TbDeviceMobileCode,
    TbDeviceMobileCog,
    TbDeviceMobileDollar,
    TbDeviceMobileDown,
    TbDeviceMobileExclamation,
    TbDeviceMobileHeart,
    TbDeviceMobileMessage,
    TbDeviceMobileMinus,
    TbDeviceMobileOff,
    TbDeviceMobilePause,
    TbDeviceMobilePin,
    TbDeviceMobilePlus,
    TbDeviceMobileQuestion,
    TbDeviceMobileRotated,
    TbDeviceMobileSearch,
    TbDeviceMobileShare,
    TbDeviceMobileStar,
    TbDeviceMobileUp,
    TbDeviceMobileVibration,
    TbDeviceMobileX,
    TbDeviceMobile,
    TbDeviceNintendoOff,
    TbDeviceNintendo,
    TbDeviceProjector,
    TbDeviceRemote,
    TbDeviceSdCard,
    TbDeviceSim1,
    TbDeviceSim2,
    TbDeviceSim3,
    TbDeviceSim,
    TbDeviceSpeakerOff,
    TbDeviceSpeaker,
    TbDeviceTabletBolt,
    TbDeviceTabletCancel,
    TbDeviceTabletCheck,
    TbDeviceTabletCode,
    TbDeviceTabletCog,
    TbDeviceTabletDollar,
    TbDeviceTabletDown,
    TbDeviceTabletExclamation,
    TbDeviceTabletHeart,
    TbDeviceTabletMinus,
    TbDeviceTabletOff,
    TbDeviceTabletPause,
    TbDeviceTabletPin,
    TbDeviceTabletPlus,
    TbDeviceTabletQuestion,
    TbDeviceTabletSearch,
    TbDeviceTabletShare,
    TbDeviceTabletStar,
    TbDeviceTabletUp,
    TbDeviceTabletX,
    TbDeviceTablet,
    TbDeviceTvOff,
    TbDeviceTvOld,
    TbDeviceTv,
    TbDeviceUnknown,
    TbDeviceUsb,
    TbDeviceVisionPro,
    TbDeviceWatchBolt,
    TbDeviceWatchCancel,
    TbDeviceWatchCheck,
    TbDeviceWatchCode,
    TbDeviceWatchCog,
    TbDeviceWatchDollar,
    TbDeviceWatchDown,
    TbDeviceWatchExclamation,
    TbDeviceWatchHeart,
    TbDeviceWatchMinus,
    TbDeviceWatchOff,
    TbDeviceWatchPause,
    TbDeviceWatchPin,
    TbDeviceWatchPlus,
    TbDeviceWatchQuestion,
    TbDeviceWatchSearch,
    TbDeviceWatchShare,
    TbDeviceWatchStar,
    TbDeviceWatchStats2,
    TbDeviceWatchStats,
    TbDeviceWatchUp,
    TbDeviceWatchX,
    TbDeviceWatch,
    TbDevices2,
    TbDevicesBolt,
    TbDevicesCancel,
    TbDevicesCheck,
    TbDevicesCode,
    TbDevicesCog,
    TbDevicesDollar,
    TbDevicesDown,
    TbDevicesExclamation,
    TbDevicesHeart,
    TbDevicesMinus,
    TbDevicesOff,
    TbDevicesPause,
    TbDevicesPcOff,
    TbDevicesPc,
    TbDevicesPin,
    TbDevicesPlus,
    TbDevicesQuestion,
    TbDevicesSearch,
    TbDevicesShare,
    TbDevicesStar,
    TbDevicesUp,
    TbDevicesX,
    TbDevices,
    TbDiaboloOff,
    TbDiaboloPlus,
    TbDiabolo,
    TbDialpadOff,
    TbDialpad,
    TbDiamondOff,
    TbDiamond,
    TbDiamonds,
    TbDiaper,
    TbDice1,
    TbDice2,
    TbDice3,
    TbDice4,
    TbDice5,
    TbDice6,
    TbDice,
    TbDimensions,
    TbDirectionArrows,
    TbDirectionHorizontal,
    TbDirectionSignOff,
    TbDirectionSign,
    TbDirection,
    TbDirectionsOff,
    TbDirections,
    TbDisabled2,
    TbDisabledOff,
    TbDisabled,
    TbDiscGolf,
    TbDiscOff,
    TbDisc,
    TbDiscountOff,
    TbDiscount,
    TbDivide,
    TbDna2Off,
    TbDna2,
    TbDnaOff,
    TbDna,
    TbDogBowl,
    TbDog,
    TbDoorEnter,
    TbDoorExit,
    TbDoorOff,
    TbDoor,
    TbDotsCircleHorizontal,
    TbDotsDiagonal2,
    TbDotsDiagonal,
    TbDotsVertical,
    TbDots,
    TbDownloadOff,
    TbDownload,
    TbDragDrop2,
    TbDragDrop,
    TbDroneOff,
    TbDrone,
    TbDropCircle,
    TbDropletBolt,
    TbDropletCancel,
    TbDropletCheck,
    TbDropletCode,
    TbDropletCog,
    TbDropletDollar,
    TbDropletDown,
    TbDropletExclamation,
    TbDropletHalf2,
    TbDropletHalf,
    TbDropletHeart,
    TbDropletMinus,
    TbDropletOff,
    TbDropletPause,
    TbDropletPin,
    TbDropletPlus,
    TbDropletQuestion,
    TbDropletSearch,
    TbDropletShare,
    TbDropletStar,
    TbDropletUp,
    TbDropletX,
    TbDroplet,
    TbDroplets,
    TbDualScreen,
    TbDumpling,
    TbEPassport,
    TbEarOff,
    TbEarScan,
    TbEar,
    TbEaseInControlPoint,
    TbEaseInOutControlPoints,
    TbEaseInOut,
    TbEaseIn,
    TbEaseOutControlPoint,
    TbEaseOut,
    TbEditCircleOff,
    TbEditCircle,
    TbEditOff,
    TbEdit,
    TbEggCracked,
    TbEggFried,
    TbEggOff,
    TbEgg,
    TbEggs,
    TbElevatorOff,
    TbElevator,
    TbEmergencyBed,
    TbEmpathizeOff,
    TbEmpathize,
    TbEmphasis,
    TbEngineOff,
    TbEngine,
    TbEqualDouble,
    TbEqualNot,
    TbEqual,
    TbEraserOff,
    TbEraser,
    TbError404Off,
    TbError404,
    TbEscalatorDown,
    TbEscalatorUp,
    TbEscalator,
    TbExchangeOff,
    TbExchange,
    TbExclamationCircle,
    TbExclamationMarkOff,
    TbExclamationMark,
    TbExplicitOff,
    TbExplicit,
    TbExposure0,
    TbExposureMinus1,
    TbExposureMinus2,
    TbExposureOff,
    TbExposurePlus1,
    TbExposurePlus2,
    TbExposure,
    TbExternalLinkOff,
    TbExternalLink,
    TbEyeBitcoin,
    TbEyeBolt,
    TbEyeCancel,
    TbEyeCheck,
    TbEyeClosed,
    TbEyeCode,
    TbEyeCog,
    TbEyeDiscount,
    TbEyeDollar,
    TbEyeDotted,
    TbEyeDown,
    TbEyeEdit,
    TbEyeExclamation,
    TbEyeHeart,
    TbEyeMinus,
    TbEyeOff,
    TbEyePause,
    TbEyePin,
    TbEyePlus,
    TbEyeQuestion,
    TbEyeSearch,
    TbEyeShare,
    TbEyeSpark,
    TbEyeStar,
    TbEyeTable,
    TbEyeUp,
    TbEyeX,
    TbEye,
} from "react-icons/tb"

export function nameToReactIcon_tb_2(iconName: string): IconType | undefined {

    switch(iconName) {
        case "tb:TbCar":
            return TbCar;
        case "tb:TbCarambola":
            return TbCarambola;
        case "tb:TbCaravan":
            return TbCaravan;
        case "tb:TbCardboardsOff":
            return TbCardboardsOff;
        case "tb:TbCardboards":
            return TbCardboards;
        case "tb:TbCards":
            return TbCards;
        case "tb:TbCaretDown":
            return TbCaretDown;
        case "tb:TbCaretLeftRight":
            return TbCaretLeftRight;
        case "tb:TbCaretLeft":
            return TbCaretLeft;
        case "tb:TbCaretRight":
            return TbCaretRight;
        case "tb:TbCaretUpDown":
            return TbCaretUpDown;
        case "tb:TbCaretUp":
            return TbCaretUp;
        case "tb:TbCarouselHorizontal":
            return TbCarouselHorizontal;
        case "tb:TbCarouselVertical":
            return TbCarouselVertical;
        case "tb:TbCarrotOff":
            return TbCarrotOff;
        case "tb:TbCarrot":
            return TbCarrot;
        case "tb:TbCashBanknoteOff":
            return TbCashBanknoteOff;
        case "tb:TbCashBanknote":
            return TbCashBanknote;
        case "tb:TbCashOff":
            return TbCashOff;
        case "tb:TbCashRegister":
            return TbCashRegister;
        case "tb:TbCash":
            return TbCash;
        case "tb:TbCastOff":
            return TbCastOff;
        case "tb:TbCast":
            return TbCast;
        case "tb:TbCat":
            return TbCat;
        case "tb:TbCategory2":
            return TbCategory2;
        case "tb:TbCategoryMinus":
            return TbCategoryMinus;
        case "tb:TbCategoryPlus":
            return TbCategoryPlus;
        case "tb:TbCategory":
            return TbCategory;
        case "tb:TbCeOff":
            return TbCeOff;
        case "tb:TbCe":
            return TbCe;
        case "tb:TbCellSignal1":
            return TbCellSignal1;
        case "tb:TbCellSignal2":
            return TbCellSignal2;
        case "tb:TbCellSignal3":
            return TbCellSignal3;
        case "tb:TbCellSignal4":
            return TbCellSignal4;
        case "tb:TbCellSignal5":
            return TbCellSignal5;
        case "tb:TbCellSignalOff":
            return TbCellSignalOff;
        case "tb:TbCell":
            return TbCell;
        case "tb:TbCertificate2Off":
            return TbCertificate2Off;
        case "tb:TbCertificate2":
            return TbCertificate2;
        case "tb:TbCertificateOff":
            return TbCertificateOff;
        case "tb:TbCertificate":
            return TbCertificate;
        case "tb:TbChairDirector":
            return TbChairDirector;
        case "tb:TbChalkboardOff":
            return TbChalkboardOff;
        case "tb:TbChalkboard":
            return TbChalkboard;
        case "tb:TbChargingPile":
            return TbChargingPile;
        case "tb:TbChartArcs3":
            return TbChartArcs3;
        case "tb:TbChartArcs":
            return TbChartArcs;
        case "tb:TbChartAreaLine":
            return TbChartAreaLine;
        case "tb:TbChartArea":
            return TbChartArea;
        case "tb:TbChartArrowsVertical":
            return TbChartArrowsVertical;
        case "tb:TbChartArrows":
            return TbChartArrows;
        case "tb:TbChartBarOff":
            return TbChartBarOff;
        case "tb:TbChartBarPopular":
            return TbChartBarPopular;
        case "tb:TbChartBar":
            return TbChartBar;
        case "tb:TbChartBubble":
            return TbChartBubble;
        case "tb:TbChartCandle":
            return TbChartCandle;
        case "tb:TbChartCircles":
            return TbChartCircles;
        case "tb:TbChartCohort":
            return TbChartCohort;
        case "tb:TbChartColumn":
            return TbChartColumn;
        case "tb:TbChartCovariate":
            return TbChartCovariate;
        case "tb:TbChartDonut2":
            return TbChartDonut2;
        case "tb:TbChartDonut3":
            return TbChartDonut3;
        case "tb:TbChartDonut4":
            return TbChartDonut4;
        case "tb:TbChartDonut":
            return TbChartDonut;
        case "tb:TbChartDots2":
            return TbChartDots2;
        case "tb:TbChartDots3":
            return TbChartDots3;
        case "tb:TbChartDots":
            return TbChartDots;
        case "tb:TbChartFunnel":
            return TbChartFunnel;
        case "tb:TbChartGridDots":
            return TbChartGridDots;
        case "tb:TbChartHistogram":
            return TbChartHistogram;
        case "tb:TbChartInfographic":
            return TbChartInfographic;
        case "tb:TbChartLine":
            return TbChartLine;
        case "tb:TbChartPie2":
            return TbChartPie2;
        case "tb:TbChartPie3":
            return TbChartPie3;
        case "tb:TbChartPie4":
            return TbChartPie4;
        case "tb:TbChartPieOff":
            return TbChartPieOff;
        case "tb:TbChartPie":
            return TbChartPie;
        case "tb:TbChartPpf":
            return TbChartPpf;
        case "tb:TbChartRadar":
            return TbChartRadar;
        case "tb:TbChartSankey":
            return TbChartSankey;
        case "tb:TbChartScatter3D":
            return TbChartScatter3D;
        case "tb:TbChartScatter":
            return TbChartScatter;
        case "tb:TbChartTreemap":
            return TbChartTreemap;
        case "tb:TbCheck":
            return TbCheck;
        case "tb:TbCheckbox":
            return TbCheckbox;
        case "tb:TbChecklist":
            return TbChecklist;
        case "tb:TbChecks":
            return TbChecks;
        case "tb:TbCheckupList":
            return TbCheckupList;
        case "tb:TbCheese":
            return TbCheese;
        case "tb:TbChefHatOff":
            return TbChefHatOff;
        case "tb:TbChefHat":
            return TbChefHat;
        case "tb:TbCherry":
            return TbCherry;
        case "tb:TbChessBishop":
            return TbChessBishop;
        case "tb:TbChessKing":
            return TbChessKing;
        case "tb:TbChessKnight":
            return TbChessKnight;
        case "tb:TbChessQueen":
            return TbChessQueen;
        case "tb:TbChessRook":
            return TbChessRook;
        case "tb:TbChess":
            return TbChess;
        case "tb:TbChevronCompactDown":
            return TbChevronCompactDown;
        case "tb:TbChevronCompactLeft":
            return TbChevronCompactLeft;
        case "tb:TbChevronCompactRight":
            return TbChevronCompactRight;
        case "tb:TbChevronCompactUp":
            return TbChevronCompactUp;
        case "tb:TbChevronDownLeft":
            return TbChevronDownLeft;
        case "tb:TbChevronDownRight":
            return TbChevronDownRight;
        case "tb:TbChevronDown":
            return TbChevronDown;
        case "tb:TbChevronLeftPipe":
            return TbChevronLeftPipe;
        case "tb:TbChevronLeft":
            return TbChevronLeft;
        case "tb:TbChevronRightPipe":
            return TbChevronRightPipe;
        case "tb:TbChevronRight":
            return TbChevronRight;
        case "tb:TbChevronUpLeft":
            return TbChevronUpLeft;
        case "tb:TbChevronUpRight":
            return TbChevronUpRight;
        case "tb:TbChevronUp":
            return TbChevronUp;
        case "tb:TbChevronsDownLeft":
            return TbChevronsDownLeft;
        case "tb:TbChevronsDownRight":
            return TbChevronsDownRight;
        case "tb:TbChevronsDown":
            return TbChevronsDown;
        case "tb:TbChevronsLeft":
            return TbChevronsLeft;
        case "tb:TbChevronsRight":
            return TbChevronsRight;
        case "tb:TbChevronsUpLeft":
            return TbChevronsUpLeft;
        case "tb:TbChevronsUpRight":
            return TbChevronsUpRight;
        case "tb:TbChevronsUp":
            return TbChevronsUp;
        case "tb:TbChisel":
            return TbChisel;
        case "tb:TbChristmasBall":
            return TbChristmasBall;
        case "tb:TbChristmasTreeOff":
            return TbChristmasTreeOff;
        case "tb:TbChristmasTree":
            return TbChristmasTree;
        case "tb:TbCircleArrowDownLeft":
            return TbCircleArrowDownLeft;
        case "tb:TbCircleArrowDownRight":
            return TbCircleArrowDownRight;
        case "tb:TbCircleArrowDown":
            return TbCircleArrowDown;
        case "tb:TbCircleArrowLeft":
            return TbCircleArrowLeft;
        case "tb:TbCircleArrowRight":
            return TbCircleArrowRight;
        case "tb:TbCircleArrowUpLeft":
            return TbCircleArrowUpLeft;
        case "tb:TbCircleArrowUpRight":
            return TbCircleArrowUpRight;
        case "tb:TbCircleArrowUp":
            return TbCircleArrowUp;
        case "tb:TbCircleCaretDown":
            return TbCircleCaretDown;
        case "tb:TbCircleCaretLeft":
            return TbCircleCaretLeft;
        case "tb:TbCircleCaretRight":
            return TbCircleCaretRight;
        case "tb:TbCircleCaretUp":
            return TbCircleCaretUp;
        case "tb:TbCircleCheck":
            return TbCircleCheck;
        case "tb:TbCircleChevronDown":
            return TbCircleChevronDown;
        case "tb:TbCircleChevronLeft":
            return TbCircleChevronLeft;
        case "tb:TbCircleChevronRight":
            return TbCircleChevronRight;
        case "tb:TbCircleChevronUp":
            return TbCircleChevronUp;
        case "tb:TbCircleChevronsDown":
            return TbCircleChevronsDown;
        case "tb:TbCircleChevronsLeft":
            return TbCircleChevronsLeft;
        case "tb:TbCircleChevronsRight":
            return TbCircleChevronsRight;
        case "tb:TbCircleChevronsUp":
            return TbCircleChevronsUp;
        case "tb:TbCircleDashedCheck":
            return TbCircleDashedCheck;
        case "tb:TbCircleDashedLetterA":
            return TbCircleDashedLetterA;
        case "tb:TbCircleDashedLetterB":
            return TbCircleDashedLetterB;
        case "tb:TbCircleDashedLetterC":
            return TbCircleDashedLetterC;
        case "tb:TbCircleDashedLetterD":
            return TbCircleDashedLetterD;
        case "tb:TbCircleDashedLetterE":
            return TbCircleDashedLetterE;
        case "tb:TbCircleDashedLetterF":
            return TbCircleDashedLetterF;
        case "tb:TbCircleDashedLetterG":
            return TbCircleDashedLetterG;
        case "tb:TbCircleDashedLetterH":
            return TbCircleDashedLetterH;
        case "tb:TbCircleDashedLetterI":
            return TbCircleDashedLetterI;
        case "tb:TbCircleDashedLetterJ":
            return TbCircleDashedLetterJ;
        case "tb:TbCircleDashedLetterK":
            return TbCircleDashedLetterK;
        case "tb:TbCircleDashedLetterL":
            return TbCircleDashedLetterL;
        case "tb:TbCircleDashedLetterM":
            return TbCircleDashedLetterM;
        case "tb:TbCircleDashedLetterN":
            return TbCircleDashedLetterN;
        case "tb:TbCircleDashedLetterO":
            return TbCircleDashedLetterO;
        case "tb:TbCircleDashedLetterP":
            return TbCircleDashedLetterP;
        case "tb:TbCircleDashedLetterQ":
            return TbCircleDashedLetterQ;
        case "tb:TbCircleDashedLetterR":
            return TbCircleDashedLetterR;
        case "tb:TbCircleDashedLetterS":
            return TbCircleDashedLetterS;
        case "tb:TbCircleDashedLetterT":
            return TbCircleDashedLetterT;
        case "tb:TbCircleDashedLetterU":
            return TbCircleDashedLetterU;
        case "tb:TbCircleDashedLetterV":
            return TbCircleDashedLetterV;
        case "tb:TbCircleDashedLetterW":
            return TbCircleDashedLetterW;
        case "tb:TbCircleDashedLetterX":
            return TbCircleDashedLetterX;
        case "tb:TbCircleDashedLetterY":
            return TbCircleDashedLetterY;
        case "tb:TbCircleDashedLetterZ":
            return TbCircleDashedLetterZ;
        case "tb:TbCircleDashedMinus":
            return TbCircleDashedMinus;
        case "tb:TbCircleDashedNumber0":
            return TbCircleDashedNumber0;
        case "tb:TbCircleDashedNumber1":
            return TbCircleDashedNumber1;
        case "tb:TbCircleDashedNumber2":
            return TbCircleDashedNumber2;
        case "tb:TbCircleDashedNumber3":
            return TbCircleDashedNumber3;
        case "tb:TbCircleDashedNumber4":
            return TbCircleDashedNumber4;
        case "tb:TbCircleDashedNumber5":
            return TbCircleDashedNumber5;
        case "tb:TbCircleDashedNumber6":
            return TbCircleDashedNumber6;
        case "tb:TbCircleDashedNumber7":
            return TbCircleDashedNumber7;
        case "tb:TbCircleDashedNumber8":
            return TbCircleDashedNumber8;
        case "tb:TbCircleDashedNumber9":
            return TbCircleDashedNumber9;
        case "tb:TbCircleDashedPercentage":
            return TbCircleDashedPercentage;
        case "tb:TbCircleDashedPlus":
            return TbCircleDashedPlus;
        case "tb:TbCircleDashedX":
            return TbCircleDashedX;
        case "tb:TbCircleDashed":
            return TbCircleDashed;
        case "tb:TbCircleDot":
            return TbCircleDot;
        case "tb:TbCircleDottedLetterA":
            return TbCircleDottedLetterA;
        case "tb:TbCircleDottedLetterB":
            return TbCircleDottedLetterB;
        case "tb:TbCircleDottedLetterC":
            return TbCircleDottedLetterC;
        case "tb:TbCircleDottedLetterD":
            return TbCircleDottedLetterD;
        case "tb:TbCircleDottedLetterE":
            return TbCircleDottedLetterE;
        case "tb:TbCircleDottedLetterF":
            return TbCircleDottedLetterF;
        case "tb:TbCircleDottedLetterG":
            return TbCircleDottedLetterG;
        case "tb:TbCircleDottedLetterH":
            return TbCircleDottedLetterH;
        case "tb:TbCircleDottedLetterI":
            return TbCircleDottedLetterI;
        case "tb:TbCircleDottedLetterJ":
            return TbCircleDottedLetterJ;
        case "tb:TbCircleDottedLetterK":
            return TbCircleDottedLetterK;
        case "tb:TbCircleDottedLetterL":
            return TbCircleDottedLetterL;
        case "tb:TbCircleDottedLetterM":
            return TbCircleDottedLetterM;
        case "tb:TbCircleDottedLetterN":
            return TbCircleDottedLetterN;
        case "tb:TbCircleDottedLetterO":
            return TbCircleDottedLetterO;
        case "tb:TbCircleDottedLetterP":
            return TbCircleDottedLetterP;
        case "tb:TbCircleDottedLetterQ":
            return TbCircleDottedLetterQ;
        case "tb:TbCircleDottedLetterR":
            return TbCircleDottedLetterR;
        case "tb:TbCircleDottedLetterS":
            return TbCircleDottedLetterS;
        case "tb:TbCircleDottedLetterT":
            return TbCircleDottedLetterT;
        case "tb:TbCircleDottedLetterU":
            return TbCircleDottedLetterU;
        case "tb:TbCircleDottedLetterV":
            return TbCircleDottedLetterV;
        case "tb:TbCircleDottedLetterW":
            return TbCircleDottedLetterW;
        case "tb:TbCircleDottedLetterX":
            return TbCircleDottedLetterX;
        case "tb:TbCircleDottedLetterY":
            return TbCircleDottedLetterY;
        case "tb:TbCircleDottedLetterZ":
            return TbCircleDottedLetterZ;
        case "tb:TbCircleDotted":
            return TbCircleDotted;
        case "tb:TbCircleHalf2":
            return TbCircleHalf2;
        case "tb:TbCircleHalfVertical":
            return TbCircleHalfVertical;
        case "tb:TbCircleHalf":
            return TbCircleHalf;
        case "tb:TbCircleKey":
            return TbCircleKey;
        case "tb:TbCircleLetterA":
            return TbCircleLetterA;
        case "tb:TbCircleLetterB":
            return TbCircleLetterB;
        case "tb:TbCircleLetterC":
            return TbCircleLetterC;
        case "tb:TbCircleLetterD":
            return TbCircleLetterD;
        case "tb:TbCircleLetterE":
            return TbCircleLetterE;
        case "tb:TbCircleLetterF":
            return TbCircleLetterF;
        case "tb:TbCircleLetterG":
            return TbCircleLetterG;
        case "tb:TbCircleLetterH":
            return TbCircleLetterH;
        case "tb:TbCircleLetterI":
            return TbCircleLetterI;
        case "tb:TbCircleLetterJ":
            return TbCircleLetterJ;
        case "tb:TbCircleLetterK":
            return TbCircleLetterK;
        case "tb:TbCircleLetterL":
            return TbCircleLetterL;
        case "tb:TbCircleLetterM":
            return TbCircleLetterM;
        case "tb:TbCircleLetterN":
            return TbCircleLetterN;
        case "tb:TbCircleLetterO":
            return TbCircleLetterO;
        case "tb:TbCircleLetterP":
            return TbCircleLetterP;
        case "tb:TbCircleLetterQ":
            return TbCircleLetterQ;
        case "tb:TbCircleLetterR":
            return TbCircleLetterR;
        case "tb:TbCircleLetterS":
            return TbCircleLetterS;
        case "tb:TbCircleLetterT":
            return TbCircleLetterT;
        case "tb:TbCircleLetterU":
            return TbCircleLetterU;
        case "tb:TbCircleLetterV":
            return TbCircleLetterV;
        case "tb:TbCircleLetterW":
            return TbCircleLetterW;
        case "tb:TbCircleLetterX":
            return TbCircleLetterX;
        case "tb:TbCircleLetterY":
            return TbCircleLetterY;
        case "tb:TbCircleLetterZ":
            return TbCircleLetterZ;
        case "tb:TbCircleMinus2":
            return TbCircleMinus2;
        case "tb:TbCircleMinus":
            return TbCircleMinus;
        case "tb:TbCircleNumber0":
            return TbCircleNumber0;
        case "tb:TbCircleNumber1":
            return TbCircleNumber1;
        case "tb:TbCircleNumber2":
            return TbCircleNumber2;
        case "tb:TbCircleNumber3":
            return TbCircleNumber3;
        case "tb:TbCircleNumber4":
            return TbCircleNumber4;
        case "tb:TbCircleNumber5":
            return TbCircleNumber5;
        case "tb:TbCircleNumber6":
            return TbCircleNumber6;
        case "tb:TbCircleNumber7":
            return TbCircleNumber7;
        case "tb:TbCircleNumber8":
            return TbCircleNumber8;
        case "tb:TbCircleNumber9":
            return TbCircleNumber9;
        case "tb:TbCircleOff":
            return TbCircleOff;
        case "tb:TbCirclePercentage":
            return TbCirclePercentage;
        case "tb:TbCirclePlus2":
            return TbCirclePlus2;
        case "tb:TbCirclePlus":
            return TbCirclePlus;
        case "tb:TbCircleRectangleOff":
            return TbCircleRectangleOff;
        case "tb:TbCircleRectangle":
            return TbCircleRectangle;
        case "tb:TbCircleSquare":
            return TbCircleSquare;
        case "tb:TbCircleTriangle":
            return TbCircleTriangle;
        case "tb:TbCircleX":
            return TbCircleX;
        case "tb:TbCircle":
            return TbCircle;
        case "tb:TbCirclesRelation":
            return TbCirclesRelation;
        case "tb:TbCircles":
            return TbCircles;
        case "tb:TbCircuitAmmeter":
            return TbCircuitAmmeter;
        case "tb:TbCircuitBattery":
            return TbCircuitBattery;
        case "tb:TbCircuitBulb":
            return TbCircuitBulb;
        case "tb:TbCircuitCapacitorPolarized":
            return TbCircuitCapacitorPolarized;
        case "tb:TbCircuitCapacitor":
            return TbCircuitCapacitor;
        case "tb:TbCircuitCellPlus":
            return TbCircuitCellPlus;
        case "tb:TbCircuitCell":
            return TbCircuitCell;
        case "tb:TbCircuitChangeover":
            return TbCircuitChangeover;
        case "tb:TbCircuitDiodeZener":
            return TbCircuitDiodeZener;
        case "tb:TbCircuitDiode":
            return TbCircuitDiode;
        case "tb:TbCircuitGroundDigital":
            return TbCircuitGroundDigital;
        case "tb:TbCircuitGround":
            return TbCircuitGround;
        case "tb:TbCircuitInductor":
            return TbCircuitInductor;
        case "tb:TbCircuitMotor":
            return TbCircuitMotor;
        case "tb:TbCircuitPushbutton":
            return TbCircuitPushbutton;
        case "tb:TbCircuitResistor":
            return TbCircuitResistor;
        case "tb:TbCircuitSwitchClosed":
            return TbCircuitSwitchClosed;
        case "tb:TbCircuitSwitchOpen":
            return TbCircuitSwitchOpen;
        case "tb:TbCircuitVoltmeter":
            return TbCircuitVoltmeter;
        case "tb:TbClearAll":
            return TbClearAll;
        case "tb:TbClearFormatting":
            return TbClearFormatting;
        case "tb:TbClick":
            return TbClick;
        case "tb:TbCliffJumping":
            return TbCliffJumping;
        case "tb:TbClipboardCheck":
            return TbClipboardCheck;
        case "tb:TbClipboardCopy":
            return TbClipboardCopy;
        case "tb:TbClipboardData":
            return TbClipboardData;
        case "tb:TbClipboardHeart":
            return TbClipboardHeart;
        case "tb:TbClipboardList":
            return TbClipboardList;
        case "tb:TbClipboardOff":
            return TbClipboardOff;
        case "tb:TbClipboardPlus":
            return TbClipboardPlus;
        case "tb:TbClipboardSearch":
            return TbClipboardSearch;
        case "tb:TbClipboardSmile":
            return TbClipboardSmile;
        case "tb:TbClipboardText":
            return TbClipboardText;
        case "tb:TbClipboardTypography":
            return TbClipboardTypography;
        case "tb:TbClipboardX":
            return TbClipboardX;
        case "tb:TbClipboard":
            return TbClipboard;
        case "tb:TbClock12":
            return TbClock12;
        case "tb:TbClock2":
            return TbClock2;
        case "tb:TbClock24":
            return TbClock24;
        case "tb:TbClockBitcoin":
            return TbClockBitcoin;
        case "tb:TbClockBolt":
            return TbClockBolt;
        case "tb:TbClockCancel":
            return TbClockCancel;
        case "tb:TbClockCheck":
            return TbClockCheck;
        case "tb:TbClockCode":
            return TbClockCode;
        case "tb:TbClockCog":
            return TbClockCog;
        case "tb:TbClockDollar":
            return TbClockDollar;
        case "tb:TbClockDown":
            return TbClockDown;
        case "tb:TbClockEdit":
            return TbClockEdit;
        case "tb:TbClockExclamation":
            return TbClockExclamation;
        case "tb:TbClockHeart":
            return TbClockHeart;
        case "tb:TbClockHour1":
            return TbClockHour1;
        case "tb:TbClockHour10":
            return TbClockHour10;
        case "tb:TbClockHour11":
            return TbClockHour11;
        case "tb:TbClockHour12":
            return TbClockHour12;
        case "tb:TbClockHour2":
            return TbClockHour2;
        case "tb:TbClockHour3":
            return TbClockHour3;
        case "tb:TbClockHour4":
            return TbClockHour4;
        case "tb:TbClockHour5":
            return TbClockHour5;
        case "tb:TbClockHour6":
            return TbClockHour6;
        case "tb:TbClockHour7":
            return TbClockHour7;
        case "tb:TbClockHour8":
            return TbClockHour8;
        case "tb:TbClockHour9":
            return TbClockHour9;
        case "tb:TbClockMinus":
            return TbClockMinus;
        case "tb:TbClockOff":
            return TbClockOff;
        case "tb:TbClockPause":
            return TbClockPause;
        case "tb:TbClockPin":
            return TbClockPin;
        case "tb:TbClockPlay":
            return TbClockPlay;
        case "tb:TbClockPlus":
            return TbClockPlus;
        case "tb:TbClockQuestion":
            return TbClockQuestion;
        case "tb:TbClockRecord":
            return TbClockRecord;
        case "tb:TbClockSearch":
            return TbClockSearch;
        case "tb:TbClockShare":
            return TbClockShare;
        case "tb:TbClockShield":
            return TbClockShield;
        case "tb:TbClockStar":
            return TbClockStar;
        case "tb:TbClockStop":
            return TbClockStop;
        case "tb:TbClockUp":
            return TbClockUp;
        case "tb:TbClockX":
            return TbClockX;
        case "tb:TbClock":
            return TbClock;
        case "tb:TbClothesRackOff":
            return TbClothesRackOff;
        case "tb:TbClothesRack":
            return TbClothesRack;
        case "tb:TbCloudBitcoin":
            return TbCloudBitcoin;
        case "tb:TbCloudBolt":
            return TbCloudBolt;
        case "tb:TbCloudCancel":
            return TbCloudCancel;
        case "tb:TbCloudCheck":
            return TbCloudCheck;
        case "tb:TbCloudCode":
            return TbCloudCode;
        case "tb:TbCloudCog":
            return TbCloudCog;
        case "tb:TbCloudComputing":
            return TbCloudComputing;
        case "tb:TbCloudDataConnection":
            return TbCloudDataConnection;
        case "tb:TbCloudDollar":
            return TbCloudDollar;
        case "tb:TbCloudDown":
            return TbCloudDown;
        case "tb:TbCloudDownload":
            return TbCloudDownload;
        case "tb:TbCloudExclamation":
            return TbCloudExclamation;
        case "tb:TbCloudFog":
            return TbCloudFog;
        case "tb:TbCloudHeart":
            return TbCloudHeart;
        case "tb:TbCloudLockOpen":
            return TbCloudLockOpen;
        case "tb:TbCloudLock":
            return TbCloudLock;
        case "tb:TbCloudMinus":
            return TbCloudMinus;
        case "tb:TbCloudNetwork":
            return TbCloudNetwork;
        case "tb:TbCloudOff":
            return TbCloudOff;
        case "tb:TbCloudPause":
            return TbCloudPause;
        case "tb:TbCloudPin":
            return TbCloudPin;
        case "tb:TbCloudPlus":
            return TbCloudPlus;
        case "tb:TbCloudQuestion":
            return TbCloudQuestion;
        case "tb:TbCloudRain":
            return TbCloudRain;
        case "tb:TbCloudSearch":
            return TbCloudSearch;
        case "tb:TbCloudShare":
            return TbCloudShare;
        case "tb:TbCloudSnow":
            return TbCloudSnow;
        case "tb:TbCloudStar":
            return TbCloudStar;
        case "tb:TbCloudStorm":
            return TbCloudStorm;
        case "tb:TbCloudUp":
            return TbCloudUp;
        case "tb:TbCloudUpload":
            return TbCloudUpload;
        case "tb:TbCloudX":
            return TbCloudX;
        case "tb:TbCloud":
            return TbCloud;
        case "tb:TbClover2":
            return TbClover2;
        case "tb:TbClover":
            return TbClover;
        case "tb:TbClubs":
            return TbClubs;
        case "tb:TbCodeAsterisk":
            return TbCodeAsterisk;
        case "tb:TbCodeCircle2":
            return TbCodeCircle2;
        case "tb:TbCodeCircle":
            return TbCodeCircle;
        case "tb:TbCodeDots":
            return TbCodeDots;
        case "tb:TbCodeMinus":
            return TbCodeMinus;
        case "tb:TbCodeOff":
            return TbCodeOff;
        case "tb:TbCodePlus":
            return TbCodePlus;
        case "tb:TbCodeVariableMinus":
            return TbCodeVariableMinus;
        case "tb:TbCodeVariablePlus":
            return TbCodeVariablePlus;
        case "tb:TbCodeVariable":
            return TbCodeVariable;
        case "tb:TbCode":
            return TbCode;
        case "tb:TbCoffeeOff":
            return TbCoffeeOff;
        case "tb:TbCoffee":
            return TbCoffee;
        case "tb:TbCoffin":
            return TbCoffin;
        case "tb:TbCoinBitcoin":
            return TbCoinBitcoin;
        case "tb:TbCoinEuro":
            return TbCoinEuro;
        case "tb:TbCoinMonero":
            return TbCoinMonero;
        case "tb:TbCoinOff":
            return TbCoinOff;
        case "tb:TbCoinPound":
            return TbCoinPound;
        case "tb:TbCoinRupee":
            return TbCoinRupee;
        case "tb:TbCoinTaka":
            return TbCoinTaka;
        case "tb:TbCoinYen":
            return TbCoinYen;
        case "tb:TbCoinYuan":
            return TbCoinYuan;
        case "tb:TbCoin":
            return TbCoin;
        case "tb:TbCoins":
            return TbCoins;
        case "tb:TbColorFilter":
            return TbColorFilter;
        case "tb:TbColorPickerOff":
            return TbColorPickerOff;
        case "tb:TbColorPicker":
            return TbColorPicker;
        case "tb:TbColorSwatchOff":
            return TbColorSwatchOff;
        case "tb:TbColorSwatch":
            return TbColorSwatch;
        case "tb:TbColumnInsertLeft":
            return TbColumnInsertLeft;
        case "tb:TbColumnInsertRight":
            return TbColumnInsertRight;
        case "tb:TbColumnRemove":
            return TbColumnRemove;
        case "tb:TbColumns1":
            return TbColumns1;
        case "tb:TbColumns2":
            return TbColumns2;
        case "tb:TbColumns3":
            return TbColumns3;
        case "tb:TbColumnsOff":
            return TbColumnsOff;
        case "tb:TbColumns":
            return TbColumns;
        case "tb:TbComet":
            return TbComet;
        case "tb:TbCommandOff":
            return TbCommandOff;
        case "tb:TbCommand":
            return TbCommand;
        case "tb:TbCompassOff":
            return TbCompassOff;
        case "tb:TbCompass":
            return TbCompass;
        case "tb:TbComponentsOff":
            return TbComponentsOff;
        case "tb:TbComponents":
            return TbComponents;
        case "tb:TbCone2":
            return TbCone2;
        case "tb:TbConeOff":
            return TbConeOff;
        case "tb:TbConePlus":
            return TbConePlus;
        case "tb:TbCone":
            return TbCone;
        case "tb:TbConfettiOff":
            return TbConfettiOff;
        case "tb:TbConfetti":
            return TbConfetti;
        case "tb:TbConfucius":
            return TbConfucius;
        case "tb:TbCongruentTo":
            return TbCongruentTo;
        case "tb:TbContainerOff":
            return TbContainerOff;
        case "tb:TbContainer":
            return TbContainer;
        case "tb:TbContract":
            return TbContract;
        case "tb:TbContrast2Off":
            return TbContrast2Off;
        case "tb:TbContrast2":
            return TbContrast2;
        case "tb:TbContrastOff":
            return TbContrastOff;
        case "tb:TbContrast":
            return TbContrast;
        case "tb:TbCooker":
            return TbCooker;
        case "tb:TbCookieMan":
            return TbCookieMan;
        case "tb:TbCookieOff":
            return TbCookieOff;
        case "tb:TbCookie":
            return TbCookie;
        case "tb:TbCopyCheck":
            return TbCopyCheck;
        case "tb:TbCopyMinus":
            return TbCopyMinus;
        case "tb:TbCopyOff":
            return TbCopyOff;
        case "tb:TbCopyPlus":
            return TbCopyPlus;
        case "tb:TbCopyX":
            return TbCopyX;
        case "tb:TbCopy":
            return TbCopy;
        case "tb:TbCopyleftOff":
            return TbCopyleftOff;
        case "tb:TbCopyleft":
            return TbCopyleft;
        case "tb:TbCopyrightOff":
            return TbCopyrightOff;
        case "tb:TbCopyright":
            return TbCopyright;
        case "tb:TbCornerDownLeftDouble":
            return TbCornerDownLeftDouble;
        case "tb:TbCornerDownLeft":
            return TbCornerDownLeft;
        case "tb:TbCornerDownRightDouble":
            return TbCornerDownRightDouble;
        case "tb:TbCornerDownRight":
            return TbCornerDownRight;
        case "tb:TbCornerLeftDownDouble":
            return TbCornerLeftDownDouble;
        case "tb:TbCornerLeftDown":
            return TbCornerLeftDown;
        case "tb:TbCornerLeftUpDouble":
            return TbCornerLeftUpDouble;
        case "tb:TbCornerLeftUp":
            return TbCornerLeftUp;
        case "tb:TbCornerRightDownDouble":
            return TbCornerRightDownDouble;
        case "tb:TbCornerRightDown":
            return TbCornerRightDown;
        case "tb:TbCornerRightUpDouble":
            return TbCornerRightUpDouble;
        case "tb:TbCornerRightUp":
            return TbCornerRightUp;
        case "tb:TbCornerUpLeftDouble":
            return TbCornerUpLeftDouble;
        case "tb:TbCornerUpLeft":
            return TbCornerUpLeft;
        case "tb:TbCornerUpRightDouble":
            return TbCornerUpRightDouble;
        case "tb:TbCornerUpRight":
            return TbCornerUpRight;
        case "tb:TbCpu2":
            return TbCpu2;
        case "tb:TbCpuOff":
            return TbCpuOff;
        case "tb:TbCpu":
            return TbCpu;
        case "tb:TbCraneOff":
            return TbCraneOff;
        case "tb:TbCrane":
            return TbCrane;
        case "tb:TbCreativeCommonsBy":
            return TbCreativeCommonsBy;
        case "tb:TbCreativeCommonsNc":
            return TbCreativeCommonsNc;
        case "tb:TbCreativeCommonsNd":
            return TbCreativeCommonsNd;
        case "tb:TbCreativeCommonsOff":
            return TbCreativeCommonsOff;
        case "tb:TbCreativeCommonsSa":
            return TbCreativeCommonsSa;
        case "tb:TbCreativeCommonsZero":
            return TbCreativeCommonsZero;
        case "tb:TbCreativeCommons":
            return TbCreativeCommons;
        case "tb:TbCreditCardOff":
            return TbCreditCardOff;
        case "tb:TbCreditCardPay":
            return TbCreditCardPay;
        case "tb:TbCreditCardRefund":
            return TbCreditCardRefund;
        case "tb:TbCreditCard":
            return TbCreditCard;
        case "tb:TbCricket":
            return TbCricket;
        case "tb:TbCrop11":
            return TbCrop11;
        case "tb:TbCrop169":
            return TbCrop169;
        case "tb:TbCrop32":
            return TbCrop32;
        case "tb:TbCrop54":
            return TbCrop54;
        case "tb:TbCrop75":
            return TbCrop75;
        case "tb:TbCropLandscape":
            return TbCropLandscape;
        case "tb:TbCropPortrait":
            return TbCropPortrait;
        case "tb:TbCrop":
            return TbCrop;
        case "tb:TbCrossOff":
            return TbCrossOff;
        case "tb:TbCross":
            return TbCross;
        case "tb:TbCrosshair":
            return TbCrosshair;
        case "tb:TbCrownOff":
            return TbCrownOff;
        case "tb:TbCrown":
            return TbCrown;
        case "tb:TbCrutchesOff":
            return TbCrutchesOff;
        case "tb:TbCrutches":
            return TbCrutches;
        case "tb:TbCrystalBall":
            return TbCrystalBall;
        case "tb:TbCsv":
            return TbCsv;
        case "tb:TbCube3dSphereOff":
            return TbCube3dSphereOff;
        case "tb:TbCube3dSphere":
            return TbCube3dSphere;
        case "tb:TbCubeOff":
            return TbCubeOff;
        case "tb:TbCubePlus":
            return TbCubePlus;
        case "tb:TbCubeSend":
            return TbCubeSend;
        case "tb:TbCubeSpark":
            return TbCubeSpark;
        case "tb:TbCubeUnfolded":
            return TbCubeUnfolded;
        case "tb:TbCube":
            return TbCube;
        case "tb:TbCupOff":
            return TbCupOff;
        case "tb:TbCup":
            return TbCup;
        case "tb:TbCurling":
            return TbCurling;
        case "tb:TbCurlyLoop":
            return TbCurlyLoop;
        case "tb:TbCurrencyAfghani":
            return TbCurrencyAfghani;
        case "tb:TbCurrencyBahraini":
            return TbCurrencyBahraini;
        case "tb:TbCurrencyBaht":
            return TbCurrencyBaht;
        case "tb:TbCurrencyBitcoin":
            return TbCurrencyBitcoin;
        case "tb:TbCurrencyCent":
            return TbCurrencyCent;
        case "tb:TbCurrencyDinar":
            return TbCurrencyDinar;
        case "tb:TbCurrencyDirham":
            return TbCurrencyDirham;
        case "tb:TbCurrencyDogecoin":
            return TbCurrencyDogecoin;
        case "tb:TbCurrencyDollarAustralian":
            return TbCurrencyDollarAustralian;
        case "tb:TbCurrencyDollarBrunei":
            return TbCurrencyDollarBrunei;
        case "tb:TbCurrencyDollarCanadian":
            return TbCurrencyDollarCanadian;
        case "tb:TbCurrencyDollarGuyanese":
            return TbCurrencyDollarGuyanese;
        case "tb:TbCurrencyDollarOff":
            return TbCurrencyDollarOff;
        case "tb:TbCurrencyDollarSingapore":
            return TbCurrencyDollarSingapore;
        case "tb:TbCurrencyDollarZimbabwean":
            return TbCurrencyDollarZimbabwean;
        case "tb:TbCurrencyDollar":
            return TbCurrencyDollar;
        case "tb:TbCurrencyDong":
            return TbCurrencyDong;
        case "tb:TbCurrencyDram":
            return TbCurrencyDram;
        case "tb:TbCurrencyEthereum":
            return TbCurrencyEthereum;
        case "tb:TbCurrencyEuroOff":
            return TbCurrencyEuroOff;
        case "tb:TbCurrencyEuro":
            return TbCurrencyEuro;
        case "tb:TbCurrencyFlorin":
            return TbCurrencyFlorin;
        case "tb:TbCurrencyForint":
            return TbCurrencyForint;
        case "tb:TbCurrencyFrank":
            return TbCurrencyFrank;
        case "tb:TbCurrencyGuarani":
            return TbCurrencyGuarani;
        case "tb:TbCurrencyHryvnia":
            return TbCurrencyHryvnia;
        case "tb:TbCurrencyIranianRial":
            return TbCurrencyIranianRial;
        case "tb:TbCurrencyKip":
            return TbCurrencyKip;
        case "tb:TbCurrencyKroneCzech":
            return TbCurrencyKroneCzech;
        case "tb:TbCurrencyKroneDanish":
            return TbCurrencyKroneDanish;
        case "tb:TbCurrencyKroneSwedish":
            return TbCurrencyKroneSwedish;
        case "tb:TbCurrencyLari":
            return TbCurrencyLari;
        case "tb:TbCurrencyLeu":
            return TbCurrencyLeu;
        case "tb:TbCurrencyLira":
            return TbCurrencyLira;
        case "tb:TbCurrencyLitecoin":
            return TbCurrencyLitecoin;
        case "tb:TbCurrencyLyd":
            return TbCurrencyLyd;
        case "tb:TbCurrencyManat":
            return TbCurrencyManat;
        case "tb:TbCurrencyMonero":
            return TbCurrencyMonero;
        case "tb:TbCurrencyNaira":
            return TbCurrencyNaira;
        case "tb:TbCurrencyNano":
            return TbCurrencyNano;
        case "tb:TbCurrencyOff":
            return TbCurrencyOff;
        case "tb:TbCurrencyPaanga":
            return TbCurrencyPaanga;
        case "tb:TbCurrencyPeso":
            return TbCurrencyPeso;
        case "tb:TbCurrencyPoundOff":
            return TbCurrencyPoundOff;
        case "tb:TbCurrencyPound":
            return TbCurrencyPound;
        case "tb:TbCurrencyQuetzal":
            return TbCurrencyQuetzal;
        case "tb:TbCurrencyReal":
            return TbCurrencyReal;
        case "tb:TbCurrencyRenminbi":
            return TbCurrencyRenminbi;
        case "tb:TbCurrencyRipple":
            return TbCurrencyRipple;
        case "tb:TbCurrencyRiyal":
            return TbCurrencyRiyal;
        case "tb:TbCurrencyRubel":
            return TbCurrencyRubel;
        case "tb:TbCurrencyRufiyaa":
            return TbCurrencyRufiyaa;
        case "tb:TbCurrencyRupeeNepalese":
            return TbCurrencyRupeeNepalese;
        case "tb:TbCurrencyRupee":
            return TbCurrencyRupee;
        case "tb:TbCurrencyShekel":
            return TbCurrencyShekel;
        case "tb:TbCurrencySolana":
            return TbCurrencySolana;
        case "tb:TbCurrencySom":
            return TbCurrencySom;
        case "tb:TbCurrencyTaka":
            return TbCurrencyTaka;
        case "tb:TbCurrencyTenge":
            return TbCurrencyTenge;
        case "tb:TbCurrencyTugrik":
            return TbCurrencyTugrik;
        case "tb:TbCurrencyWon":
            return TbCurrencyWon;
        case "tb:TbCurrencyXrp":
            return TbCurrencyXrp;
        case "tb:TbCurrencyYenOff":
            return TbCurrencyYenOff;
        case "tb:TbCurrencyYen":
            return TbCurrencyYen;
        case "tb:TbCurrencyYuan":
            return TbCurrencyYuan;
        case "tb:TbCurrencyZloty":
            return TbCurrencyZloty;
        case "tb:TbCurrency":
            return TbCurrency;
        case "tb:TbCurrentLocationOff":
            return TbCurrentLocationOff;
        case "tb:TbCurrentLocation":
            return TbCurrentLocation;
        case "tb:TbCursorOff":
            return TbCursorOff;
        case "tb:TbCursorText":
            return TbCursorText;
        case "tb:TbCut":
            return TbCut;
        case "tb:TbCylinderOff":
            return TbCylinderOff;
        case "tb:TbCylinderPlus":
            return TbCylinderPlus;
        case "tb:TbCylinder":
            return TbCylinder;
        case "tb:TbDashboardOff":
            return TbDashboardOff;
        case "tb:TbDashboard":
            return TbDashboard;
        case "tb:TbDatabaseCog":
            return TbDatabaseCog;
        case "tb:TbDatabaseDollar":
            return TbDatabaseDollar;
        case "tb:TbDatabaseEdit":
            return TbDatabaseEdit;
        case "tb:TbDatabaseExclamation":
            return TbDatabaseExclamation;
        case "tb:TbDatabaseExport":
            return TbDatabaseExport;
        case "tb:TbDatabaseHeart":
            return TbDatabaseHeart;
        case "tb:TbDatabaseImport":
            return TbDatabaseImport;
        case "tb:TbDatabaseLeak":
            return TbDatabaseLeak;
        case "tb:TbDatabaseMinus":
            return TbDatabaseMinus;
        case "tb:TbDatabaseOff":
            return TbDatabaseOff;
        case "tb:TbDatabasePlus":
            return TbDatabasePlus;
        case "tb:TbDatabaseSearch":
            return TbDatabaseSearch;
        case "tb:TbDatabaseShare":
            return TbDatabaseShare;
        case "tb:TbDatabaseSmile":
            return TbDatabaseSmile;
        case "tb:TbDatabaseStar":
            return TbDatabaseStar;
        case "tb:TbDatabaseX":
            return TbDatabaseX;
        case "tb:TbDatabase":
            return TbDatabase;
        case "tb:TbDecimal":
            return TbDecimal;
        case "tb:TbDeer":
            return TbDeer;
        case "tb:TbDelta":
            return TbDelta;
        case "tb:TbDentalBroken":
            return TbDentalBroken;
        case "tb:TbDentalOff":
            return TbDentalOff;
        case "tb:TbDental":
            return TbDental;
        case "tb:TbDeselect":
            return TbDeselect;
        case "tb:TbDesk":
            return TbDesk;
        case "tb:TbDetailsOff":
            return TbDetailsOff;
        case "tb:TbDetails":
            return TbDetails;
        case "tb:TbDeviceAirpodsCase":
            return TbDeviceAirpodsCase;
        case "tb:TbDeviceAirpods":
            return TbDeviceAirpods;
        case "tb:TbDeviceAirtag":
            return TbDeviceAirtag;
        case "tb:TbDeviceAnalytics":
            return TbDeviceAnalytics;
        case "tb:TbDeviceAudioTape":
            return TbDeviceAudioTape;
        case "tb:TbDeviceCameraPhone":
            return TbDeviceCameraPhone;
        case "tb:TbDeviceCctvOff":
            return TbDeviceCctvOff;
        case "tb:TbDeviceCctv":
            return TbDeviceCctv;
        case "tb:TbDeviceComputerCameraOff":
            return TbDeviceComputerCameraOff;
        case "tb:TbDeviceComputerCamera":
            return TbDeviceComputerCamera;
        case "tb:TbDeviceDesktopAnalytics":
            return TbDeviceDesktopAnalytics;
        case "tb:TbDeviceDesktopBolt":
            return TbDeviceDesktopBolt;
        case "tb:TbDeviceDesktopCancel":
            return TbDeviceDesktopCancel;
        case "tb:TbDeviceDesktopCheck":
            return TbDeviceDesktopCheck;
        case "tb:TbDeviceDesktopCode":
            return TbDeviceDesktopCode;
        case "tb:TbDeviceDesktopCog":
            return TbDeviceDesktopCog;
        case "tb:TbDeviceDesktopDollar":
            return TbDeviceDesktopDollar;
        case "tb:TbDeviceDesktopDown":
            return TbDeviceDesktopDown;
        case "tb:TbDeviceDesktopExclamation":
            return TbDeviceDesktopExclamation;
        case "tb:TbDeviceDesktopHeart":
            return TbDeviceDesktopHeart;
        case "tb:TbDeviceDesktopMinus":
            return TbDeviceDesktopMinus;
        case "tb:TbDeviceDesktopOff":
            return TbDeviceDesktopOff;
        case "tb:TbDeviceDesktopPause":
            return TbDeviceDesktopPause;
        case "tb:TbDeviceDesktopPin":
            return TbDeviceDesktopPin;
        case "tb:TbDeviceDesktopPlus":
            return TbDeviceDesktopPlus;
        case "tb:TbDeviceDesktopQuestion":
            return TbDeviceDesktopQuestion;
        case "tb:TbDeviceDesktopSearch":
            return TbDeviceDesktopSearch;
        case "tb:TbDeviceDesktopShare":
            return TbDeviceDesktopShare;
        case "tb:TbDeviceDesktopStar":
            return TbDeviceDesktopStar;
        case "tb:TbDeviceDesktopUp":
            return TbDeviceDesktopUp;
        case "tb:TbDeviceDesktopX":
            return TbDeviceDesktopX;
        case "tb:TbDeviceDesktop":
            return TbDeviceDesktop;
        case "tb:TbDeviceFloppy":
            return TbDeviceFloppy;
        case "tb:TbDeviceGamepad2":
            return TbDeviceGamepad2;
        case "tb:TbDeviceGamepad3":
            return TbDeviceGamepad3;
        case "tb:TbDeviceGamepad":
            return TbDeviceGamepad;
        case "tb:TbDeviceHeartMonitor":
            return TbDeviceHeartMonitor;
        case "tb:TbDeviceImacBolt":
            return TbDeviceImacBolt;
        case "tb:TbDeviceImacCancel":
            return TbDeviceImacCancel;
        case "tb:TbDeviceImacCheck":
            return TbDeviceImacCheck;
        case "tb:TbDeviceImacCode":
            return TbDeviceImacCode;
        case "tb:TbDeviceImacCog":
            return TbDeviceImacCog;
        case "tb:TbDeviceImacDollar":
            return TbDeviceImacDollar;
        case "tb:TbDeviceImacDown":
            return TbDeviceImacDown;
        case "tb:TbDeviceImacExclamation":
            return TbDeviceImacExclamation;
        case "tb:TbDeviceImacHeart":
            return TbDeviceImacHeart;
        case "tb:TbDeviceImacMinus":
            return TbDeviceImacMinus;
        case "tb:TbDeviceImacOff":
            return TbDeviceImacOff;
        case "tb:TbDeviceImacPause":
            return TbDeviceImacPause;
        case "tb:TbDeviceImacPin":
            return TbDeviceImacPin;
        case "tb:TbDeviceImacPlus":
            return TbDeviceImacPlus;
        case "tb:TbDeviceImacQuestion":
            return TbDeviceImacQuestion;
        case "tb:TbDeviceImacSearch":
            return TbDeviceImacSearch;
        case "tb:TbDeviceImacShare":
            return TbDeviceImacShare;
        case "tb:TbDeviceImacStar":
            return TbDeviceImacStar;
        case "tb:TbDeviceImacUp":
            return TbDeviceImacUp;
        case "tb:TbDeviceImacX":
            return TbDeviceImacX;
        case "tb:TbDeviceImac":
            return TbDeviceImac;
        case "tb:TbDeviceIpadBolt":
            return TbDeviceIpadBolt;
        case "tb:TbDeviceIpadCancel":
            return TbDeviceIpadCancel;
        case "tb:TbDeviceIpadCheck":
            return TbDeviceIpadCheck;
        case "tb:TbDeviceIpadCode":
            return TbDeviceIpadCode;
        case "tb:TbDeviceIpadCog":
            return TbDeviceIpadCog;
        case "tb:TbDeviceIpadDollar":
            return TbDeviceIpadDollar;
        case "tb:TbDeviceIpadDown":
            return TbDeviceIpadDown;
        case "tb:TbDeviceIpadExclamation":
            return TbDeviceIpadExclamation;
        case "tb:TbDeviceIpadHeart":
            return TbDeviceIpadHeart;
        case "tb:TbDeviceIpadHorizontalBolt":
            return TbDeviceIpadHorizontalBolt;
        case "tb:TbDeviceIpadHorizontalCancel":
            return TbDeviceIpadHorizontalCancel;
        case "tb:TbDeviceIpadHorizontalCheck":
            return TbDeviceIpadHorizontalCheck;
        case "tb:TbDeviceIpadHorizontalCode":
            return TbDeviceIpadHorizontalCode;
        case "tb:TbDeviceIpadHorizontalCog":
            return TbDeviceIpadHorizontalCog;
        case "tb:TbDeviceIpadHorizontalDollar":
            return TbDeviceIpadHorizontalDollar;
        case "tb:TbDeviceIpadHorizontalDown":
            return TbDeviceIpadHorizontalDown;
        case "tb:TbDeviceIpadHorizontalExclamation":
            return TbDeviceIpadHorizontalExclamation;
        case "tb:TbDeviceIpadHorizontalHeart":
            return TbDeviceIpadHorizontalHeart;
        case "tb:TbDeviceIpadHorizontalMinus":
            return TbDeviceIpadHorizontalMinus;
        case "tb:TbDeviceIpadHorizontalOff":
            return TbDeviceIpadHorizontalOff;
        case "tb:TbDeviceIpadHorizontalPause":
            return TbDeviceIpadHorizontalPause;
        case "tb:TbDeviceIpadHorizontalPin":
            return TbDeviceIpadHorizontalPin;
        case "tb:TbDeviceIpadHorizontalPlus":
            return TbDeviceIpadHorizontalPlus;
        case "tb:TbDeviceIpadHorizontalQuestion":
            return TbDeviceIpadHorizontalQuestion;
        case "tb:TbDeviceIpadHorizontalSearch":
            return TbDeviceIpadHorizontalSearch;
        case "tb:TbDeviceIpadHorizontalShare":
            return TbDeviceIpadHorizontalShare;
        case "tb:TbDeviceIpadHorizontalStar":
            return TbDeviceIpadHorizontalStar;
        case "tb:TbDeviceIpadHorizontalUp":
            return TbDeviceIpadHorizontalUp;
        case "tb:TbDeviceIpadHorizontalX":
            return TbDeviceIpadHorizontalX;
        case "tb:TbDeviceIpadHorizontal":
            return TbDeviceIpadHorizontal;
        case "tb:TbDeviceIpadMinus":
            return TbDeviceIpadMinus;
        case "tb:TbDeviceIpadOff":
            return TbDeviceIpadOff;
        case "tb:TbDeviceIpadPause":
            return TbDeviceIpadPause;
        case "tb:TbDeviceIpadPin":
            return TbDeviceIpadPin;
        case "tb:TbDeviceIpadPlus":
            return TbDeviceIpadPlus;
        case "tb:TbDeviceIpadQuestion":
            return TbDeviceIpadQuestion;
        case "tb:TbDeviceIpadSearch":
            return TbDeviceIpadSearch;
        case "tb:TbDeviceIpadShare":
            return TbDeviceIpadShare;
        case "tb:TbDeviceIpadStar":
            return TbDeviceIpadStar;
        case "tb:TbDeviceIpadUp":
            return TbDeviceIpadUp;
        case "tb:TbDeviceIpadX":
            return TbDeviceIpadX;
        case "tb:TbDeviceIpad":
            return TbDeviceIpad;
        case "tb:TbDeviceLandlinePhone":
            return TbDeviceLandlinePhone;
        case "tb:TbDeviceLaptopOff":
            return TbDeviceLaptopOff;
        case "tb:TbDeviceLaptop":
            return TbDeviceLaptop;
        case "tb:TbDeviceMobileBolt":
            return TbDeviceMobileBolt;
        case "tb:TbDeviceMobileCancel":
            return TbDeviceMobileCancel;
        case "tb:TbDeviceMobileCharging":
            return TbDeviceMobileCharging;
        case "tb:TbDeviceMobileCheck":
            return TbDeviceMobileCheck;
        case "tb:TbDeviceMobileCode":
            return TbDeviceMobileCode;
        case "tb:TbDeviceMobileCog":
            return TbDeviceMobileCog;
        case "tb:TbDeviceMobileDollar":
            return TbDeviceMobileDollar;
        case "tb:TbDeviceMobileDown":
            return TbDeviceMobileDown;
        case "tb:TbDeviceMobileExclamation":
            return TbDeviceMobileExclamation;
        case "tb:TbDeviceMobileHeart":
            return TbDeviceMobileHeart;
        case "tb:TbDeviceMobileMessage":
            return TbDeviceMobileMessage;
        case "tb:TbDeviceMobileMinus":
            return TbDeviceMobileMinus;
        case "tb:TbDeviceMobileOff":
            return TbDeviceMobileOff;
        case "tb:TbDeviceMobilePause":
            return TbDeviceMobilePause;
        case "tb:TbDeviceMobilePin":
            return TbDeviceMobilePin;
        case "tb:TbDeviceMobilePlus":
            return TbDeviceMobilePlus;
        case "tb:TbDeviceMobileQuestion":
            return TbDeviceMobileQuestion;
        case "tb:TbDeviceMobileRotated":
            return TbDeviceMobileRotated;
        case "tb:TbDeviceMobileSearch":
            return TbDeviceMobileSearch;
        case "tb:TbDeviceMobileShare":
            return TbDeviceMobileShare;
        case "tb:TbDeviceMobileStar":
            return TbDeviceMobileStar;
        case "tb:TbDeviceMobileUp":
            return TbDeviceMobileUp;
        case "tb:TbDeviceMobileVibration":
            return TbDeviceMobileVibration;
        case "tb:TbDeviceMobileX":
            return TbDeviceMobileX;
        case "tb:TbDeviceMobile":
            return TbDeviceMobile;
        case "tb:TbDeviceNintendoOff":
            return TbDeviceNintendoOff;
        case "tb:TbDeviceNintendo":
            return TbDeviceNintendo;
        case "tb:TbDeviceProjector":
            return TbDeviceProjector;
        case "tb:TbDeviceRemote":
            return TbDeviceRemote;
        case "tb:TbDeviceSdCard":
            return TbDeviceSdCard;
        case "tb:TbDeviceSim1":
            return TbDeviceSim1;
        case "tb:TbDeviceSim2":
            return TbDeviceSim2;
        case "tb:TbDeviceSim3":
            return TbDeviceSim3;
        case "tb:TbDeviceSim":
            return TbDeviceSim;
        case "tb:TbDeviceSpeakerOff":
            return TbDeviceSpeakerOff;
        case "tb:TbDeviceSpeaker":
            return TbDeviceSpeaker;
        case "tb:TbDeviceTabletBolt":
            return TbDeviceTabletBolt;
        case "tb:TbDeviceTabletCancel":
            return TbDeviceTabletCancel;
        case "tb:TbDeviceTabletCheck":
            return TbDeviceTabletCheck;
        case "tb:TbDeviceTabletCode":
            return TbDeviceTabletCode;
        case "tb:TbDeviceTabletCog":
            return TbDeviceTabletCog;
        case "tb:TbDeviceTabletDollar":
            return TbDeviceTabletDollar;
        case "tb:TbDeviceTabletDown":
            return TbDeviceTabletDown;
        case "tb:TbDeviceTabletExclamation":
            return TbDeviceTabletExclamation;
        case "tb:TbDeviceTabletHeart":
            return TbDeviceTabletHeart;
        case "tb:TbDeviceTabletMinus":
            return TbDeviceTabletMinus;
        case "tb:TbDeviceTabletOff":
            return TbDeviceTabletOff;
        case "tb:TbDeviceTabletPause":
            return TbDeviceTabletPause;
        case "tb:TbDeviceTabletPin":
            return TbDeviceTabletPin;
        case "tb:TbDeviceTabletPlus":
            return TbDeviceTabletPlus;
        case "tb:TbDeviceTabletQuestion":
            return TbDeviceTabletQuestion;
        case "tb:TbDeviceTabletSearch":
            return TbDeviceTabletSearch;
        case "tb:TbDeviceTabletShare":
            return TbDeviceTabletShare;
        case "tb:TbDeviceTabletStar":
            return TbDeviceTabletStar;
        case "tb:TbDeviceTabletUp":
            return TbDeviceTabletUp;
        case "tb:TbDeviceTabletX":
            return TbDeviceTabletX;
        case "tb:TbDeviceTablet":
            return TbDeviceTablet;
        case "tb:TbDeviceTvOff":
            return TbDeviceTvOff;
        case "tb:TbDeviceTvOld":
            return TbDeviceTvOld;
        case "tb:TbDeviceTv":
            return TbDeviceTv;
        case "tb:TbDeviceUnknown":
            return TbDeviceUnknown;
        case "tb:TbDeviceUsb":
            return TbDeviceUsb;
        case "tb:TbDeviceVisionPro":
            return TbDeviceVisionPro;
        case "tb:TbDeviceWatchBolt":
            return TbDeviceWatchBolt;
        case "tb:TbDeviceWatchCancel":
            return TbDeviceWatchCancel;
        case "tb:TbDeviceWatchCheck":
            return TbDeviceWatchCheck;
        case "tb:TbDeviceWatchCode":
            return TbDeviceWatchCode;
        case "tb:TbDeviceWatchCog":
            return TbDeviceWatchCog;
        case "tb:TbDeviceWatchDollar":
            return TbDeviceWatchDollar;
        case "tb:TbDeviceWatchDown":
            return TbDeviceWatchDown;
        case "tb:TbDeviceWatchExclamation":
            return TbDeviceWatchExclamation;
        case "tb:TbDeviceWatchHeart":
            return TbDeviceWatchHeart;
        case "tb:TbDeviceWatchMinus":
            return TbDeviceWatchMinus;
        case "tb:TbDeviceWatchOff":
            return TbDeviceWatchOff;
        case "tb:TbDeviceWatchPause":
            return TbDeviceWatchPause;
        case "tb:TbDeviceWatchPin":
            return TbDeviceWatchPin;
        case "tb:TbDeviceWatchPlus":
            return TbDeviceWatchPlus;
        case "tb:TbDeviceWatchQuestion":
            return TbDeviceWatchQuestion;
        case "tb:TbDeviceWatchSearch":
            return TbDeviceWatchSearch;
        case "tb:TbDeviceWatchShare":
            return TbDeviceWatchShare;
        case "tb:TbDeviceWatchStar":
            return TbDeviceWatchStar;
        case "tb:TbDeviceWatchStats2":
            return TbDeviceWatchStats2;
        case "tb:TbDeviceWatchStats":
            return TbDeviceWatchStats;
        case "tb:TbDeviceWatchUp":
            return TbDeviceWatchUp;
        case "tb:TbDeviceWatchX":
            return TbDeviceWatchX;
        case "tb:TbDeviceWatch":
            return TbDeviceWatch;
        case "tb:TbDevices2":
            return TbDevices2;
        case "tb:TbDevicesBolt":
            return TbDevicesBolt;
        case "tb:TbDevicesCancel":
            return TbDevicesCancel;
        case "tb:TbDevicesCheck":
            return TbDevicesCheck;
        case "tb:TbDevicesCode":
            return TbDevicesCode;
        case "tb:TbDevicesCog":
            return TbDevicesCog;
        case "tb:TbDevicesDollar":
            return TbDevicesDollar;
        case "tb:TbDevicesDown":
            return TbDevicesDown;
        case "tb:TbDevicesExclamation":
            return TbDevicesExclamation;
        case "tb:TbDevicesHeart":
            return TbDevicesHeart;
        case "tb:TbDevicesMinus":
            return TbDevicesMinus;
        case "tb:TbDevicesOff":
            return TbDevicesOff;
        case "tb:TbDevicesPause":
            return TbDevicesPause;
        case "tb:TbDevicesPcOff":
            return TbDevicesPcOff;
        case "tb:TbDevicesPc":
            return TbDevicesPc;
        case "tb:TbDevicesPin":
            return TbDevicesPin;
        case "tb:TbDevicesPlus":
            return TbDevicesPlus;
        case "tb:TbDevicesQuestion":
            return TbDevicesQuestion;
        case "tb:TbDevicesSearch":
            return TbDevicesSearch;
        case "tb:TbDevicesShare":
            return TbDevicesShare;
        case "tb:TbDevicesStar":
            return TbDevicesStar;
        case "tb:TbDevicesUp":
            return TbDevicesUp;
        case "tb:TbDevicesX":
            return TbDevicesX;
        case "tb:TbDevices":
            return TbDevices;
        case "tb:TbDiaboloOff":
            return TbDiaboloOff;
        case "tb:TbDiaboloPlus":
            return TbDiaboloPlus;
        case "tb:TbDiabolo":
            return TbDiabolo;
        case "tb:TbDialpadOff":
            return TbDialpadOff;
        case "tb:TbDialpad":
            return TbDialpad;
        case "tb:TbDiamondOff":
            return TbDiamondOff;
        case "tb:TbDiamond":
            return TbDiamond;
        case "tb:TbDiamonds":
            return TbDiamonds;
        case "tb:TbDiaper":
            return TbDiaper;
        case "tb:TbDice1":
            return TbDice1;
        case "tb:TbDice2":
            return TbDice2;
        case "tb:TbDice3":
            return TbDice3;
        case "tb:TbDice4":
            return TbDice4;
        case "tb:TbDice5":
            return TbDice5;
        case "tb:TbDice6":
            return TbDice6;
        case "tb:TbDice":
            return TbDice;
        case "tb:TbDimensions":
            return TbDimensions;
        case "tb:TbDirectionArrows":
            return TbDirectionArrows;
        case "tb:TbDirectionHorizontal":
            return TbDirectionHorizontal;
        case "tb:TbDirectionSignOff":
            return TbDirectionSignOff;
        case "tb:TbDirectionSign":
            return TbDirectionSign;
        case "tb:TbDirection":
            return TbDirection;
        case "tb:TbDirectionsOff":
            return TbDirectionsOff;
        case "tb:TbDirections":
            return TbDirections;
        case "tb:TbDisabled2":
            return TbDisabled2;
        case "tb:TbDisabledOff":
            return TbDisabledOff;
        case "tb:TbDisabled":
            return TbDisabled;
        case "tb:TbDiscGolf":
            return TbDiscGolf;
        case "tb:TbDiscOff":
            return TbDiscOff;
        case "tb:TbDisc":
            return TbDisc;
        case "tb:TbDiscountOff":
            return TbDiscountOff;
        case "tb:TbDiscount":
            return TbDiscount;
        case "tb:TbDivide":
            return TbDivide;
        case "tb:TbDna2Off":
            return TbDna2Off;
        case "tb:TbDna2":
            return TbDna2;
        case "tb:TbDnaOff":
            return TbDnaOff;
        case "tb:TbDna":
            return TbDna;
        case "tb:TbDogBowl":
            return TbDogBowl;
        case "tb:TbDog":
            return TbDog;
        case "tb:TbDoorEnter":
            return TbDoorEnter;
        case "tb:TbDoorExit":
            return TbDoorExit;
        case "tb:TbDoorOff":
            return TbDoorOff;
        case "tb:TbDoor":
            return TbDoor;
        case "tb:TbDotsCircleHorizontal":
            return TbDotsCircleHorizontal;
        case "tb:TbDotsDiagonal2":
            return TbDotsDiagonal2;
        case "tb:TbDotsDiagonal":
            return TbDotsDiagonal;
        case "tb:TbDotsVertical":
            return TbDotsVertical;
        case "tb:TbDots":
            return TbDots;
        case "tb:TbDownloadOff":
            return TbDownloadOff;
        case "tb:TbDownload":
            return TbDownload;
        case "tb:TbDragDrop2":
            return TbDragDrop2;
        case "tb:TbDragDrop":
            return TbDragDrop;
        case "tb:TbDroneOff":
            return TbDroneOff;
        case "tb:TbDrone":
            return TbDrone;
        case "tb:TbDropCircle":
            return TbDropCircle;
        case "tb:TbDropletBolt":
            return TbDropletBolt;
        case "tb:TbDropletCancel":
            return TbDropletCancel;
        case "tb:TbDropletCheck":
            return TbDropletCheck;
        case "tb:TbDropletCode":
            return TbDropletCode;
        case "tb:TbDropletCog":
            return TbDropletCog;
        case "tb:TbDropletDollar":
            return TbDropletDollar;
        case "tb:TbDropletDown":
            return TbDropletDown;
        case "tb:TbDropletExclamation":
            return TbDropletExclamation;
        case "tb:TbDropletHalf2":
            return TbDropletHalf2;
        case "tb:TbDropletHalf":
            return TbDropletHalf;
        case "tb:TbDropletHeart":
            return TbDropletHeart;
        case "tb:TbDropletMinus":
            return TbDropletMinus;
        case "tb:TbDropletOff":
            return TbDropletOff;
        case "tb:TbDropletPause":
            return TbDropletPause;
        case "tb:TbDropletPin":
            return TbDropletPin;
        case "tb:TbDropletPlus":
            return TbDropletPlus;
        case "tb:TbDropletQuestion":
            return TbDropletQuestion;
        case "tb:TbDropletSearch":
            return TbDropletSearch;
        case "tb:TbDropletShare":
            return TbDropletShare;
        case "tb:TbDropletStar":
            return TbDropletStar;
        case "tb:TbDropletUp":
            return TbDropletUp;
        case "tb:TbDropletX":
            return TbDropletX;
        case "tb:TbDroplet":
            return TbDroplet;
        case "tb:TbDroplets":
            return TbDroplets;
        case "tb:TbDualScreen":
            return TbDualScreen;
        case "tb:TbDumpling":
            return TbDumpling;
        case "tb:TbEPassport":
            return TbEPassport;
        case "tb:TbEarOff":
            return TbEarOff;
        case "tb:TbEarScan":
            return TbEarScan;
        case "tb:TbEar":
            return TbEar;
        case "tb:TbEaseInControlPoint":
            return TbEaseInControlPoint;
        case "tb:TbEaseInOutControlPoints":
            return TbEaseInOutControlPoints;
        case "tb:TbEaseInOut":
            return TbEaseInOut;
        case "tb:TbEaseIn":
            return TbEaseIn;
        case "tb:TbEaseOutControlPoint":
            return TbEaseOutControlPoint;
        case "tb:TbEaseOut":
            return TbEaseOut;
        case "tb:TbEditCircleOff":
            return TbEditCircleOff;
        case "tb:TbEditCircle":
            return TbEditCircle;
        case "tb:TbEditOff":
            return TbEditOff;
        case "tb:TbEdit":
            return TbEdit;
        case "tb:TbEggCracked":
            return TbEggCracked;
        case "tb:TbEggFried":
            return TbEggFried;
        case "tb:TbEggOff":
            return TbEggOff;
        case "tb:TbEgg":
            return TbEgg;
        case "tb:TbEggs":
            return TbEggs;
        case "tb:TbElevatorOff":
            return TbElevatorOff;
        case "tb:TbElevator":
            return TbElevator;
        case "tb:TbEmergencyBed":
            return TbEmergencyBed;
        case "tb:TbEmpathizeOff":
            return TbEmpathizeOff;
        case "tb:TbEmpathize":
            return TbEmpathize;
        case "tb:TbEmphasis":
            return TbEmphasis;
        case "tb:TbEngineOff":
            return TbEngineOff;
        case "tb:TbEngine":
            return TbEngine;
        case "tb:TbEqualDouble":
            return TbEqualDouble;
        case "tb:TbEqualNot":
            return TbEqualNot;
        case "tb:TbEqual":
            return TbEqual;
        case "tb:TbEraserOff":
            return TbEraserOff;
        case "tb:TbEraser":
            return TbEraser;
        case "tb:TbError404Off":
            return TbError404Off;
        case "tb:TbError404":
            return TbError404;
        case "tb:TbEscalatorDown":
            return TbEscalatorDown;
        case "tb:TbEscalatorUp":
            return TbEscalatorUp;
        case "tb:TbEscalator":
            return TbEscalator;
        case "tb:TbExchangeOff":
            return TbExchangeOff;
        case "tb:TbExchange":
            return TbExchange;
        case "tb:TbExclamationCircle":
            return TbExclamationCircle;
        case "tb:TbExclamationMarkOff":
            return TbExclamationMarkOff;
        case "tb:TbExclamationMark":
            return TbExclamationMark;
        case "tb:TbExplicitOff":
            return TbExplicitOff;
        case "tb:TbExplicit":
            return TbExplicit;
        case "tb:TbExposure0":
            return TbExposure0;
        case "tb:TbExposureMinus1":
            return TbExposureMinus1;
        case "tb:TbExposureMinus2":
            return TbExposureMinus2;
        case "tb:TbExposureOff":
            return TbExposureOff;
        case "tb:TbExposurePlus1":
            return TbExposurePlus1;
        case "tb:TbExposurePlus2":
            return TbExposurePlus2;
        case "tb:TbExposure":
            return TbExposure;
        case "tb:TbExternalLinkOff":
            return TbExternalLinkOff;
        case "tb:TbExternalLink":
            return TbExternalLink;
        case "tb:TbEyeBitcoin":
            return TbEyeBitcoin;
        case "tb:TbEyeBolt":
            return TbEyeBolt;
        case "tb:TbEyeCancel":
            return TbEyeCancel;
        case "tb:TbEyeCheck":
            return TbEyeCheck;
        case "tb:TbEyeClosed":
            return TbEyeClosed;
        case "tb:TbEyeCode":
            return TbEyeCode;
        case "tb:TbEyeCog":
            return TbEyeCog;
        case "tb:TbEyeDiscount":
            return TbEyeDiscount;
        case "tb:TbEyeDollar":
            return TbEyeDollar;
        case "tb:TbEyeDotted":
            return TbEyeDotted;
        case "tb:TbEyeDown":
            return TbEyeDown;
        case "tb:TbEyeEdit":
            return TbEyeEdit;
        case "tb:TbEyeExclamation":
            return TbEyeExclamation;
        case "tb:TbEyeHeart":
            return TbEyeHeart;
        case "tb:TbEyeMinus":
            return TbEyeMinus;
        case "tb:TbEyeOff":
            return TbEyeOff;
        case "tb:TbEyePause":
            return TbEyePause;
        case "tb:TbEyePin":
            return TbEyePin;
        case "tb:TbEyePlus":
            return TbEyePlus;
        case "tb:TbEyeQuestion":
            return TbEyeQuestion;
        case "tb:TbEyeSearch":
            return TbEyeSearch;
        case "tb:TbEyeShare":
            return TbEyeShare;
        case "tb:TbEyeSpark":
            return TbEyeSpark;
        case "tb:TbEyeStar":
            return TbEyeStar;
        case "tb:TbEyeTable":
            return TbEyeTable;
        case "tb:TbEyeUp":
            return TbEyeUp;
        case "tb:TbEyeX":
            return TbEyeX;
        case "tb:TbEye":
            return TbEye;
    }
}
