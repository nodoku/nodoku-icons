import type {IconType} from "react-icons";

import {
    PiNotePencil,
    PiNote,
    PiNotebook,
    PiNotepad,
    PiNotification,
    PiNotionLogo,
    PiNuclearPlant,
    PiNumberCircleEight,
    PiNumberCircleFive,
    PiNumberCircleFour,
    PiNumberCircleNine,
    PiNumberCircleOne,
    PiNumberCircleSeven,
    PiNumberCircleSix,
    PiNumberCircleThree,
    PiNumberCircleTwo,
    PiNumberCircleZero,
    PiNumberEight,
    PiNumberFive,
    PiNumberFour,
    PiNumberNine,
    PiNumberOne,
    PiNumberSeven,
    PiNumberSix,
    PiNumberSquareEight,
    PiNumberSquareFive,
    PiNumberSquareFour,
    PiNumberSquareNine,
    PiNumberSquareOne,
    PiNumberSquareSeven,
    PiNumberSquareSix,
    PiNumberSquareThree,
    PiNumberSquareTwo,
    PiNumberSquareZero,
    PiNumberThree,
    PiNumberTwo,
    PiNumberZero,
    PiNumpad,
    PiNut,
    PiNyTimesLogo,
    PiOctagon,
    PiOfficeChair,
    PiOnigiri,
    PiOpenAiLogo,
    PiOption,
    PiOrangeSlice,
    PiOrange,
    PiOven,
    PiPackage,
    PiPaintBrushBroad,
    PiPaintBrushHousehold,
    PiPaintBrush,
    PiPaintBucket,
    PiPaintRoller,
    PiPalette,
    PiPanorama,
    PiPants,
    PiPaperPlaneRight,
    PiPaperPlaneTilt,
    PiPaperPlane,
    PiPaperclipHorizontal,
    PiPaperclip,
    PiParachute,
    PiParagraph,
    PiParallelogram,
    PiPark,
    PiPassword,
    PiPath,
    PiPatreonLogo,
    PiPauseCircle,
    PiPause,
    PiPawPrint,
    PiPaypalLogo,
    PiPeace,
    PiPenNibStraight,
    PiPenNib,
    PiPen,
    PiPencilCircle,
    PiPencilLine,
    PiPencilRuler,
    PiPencilSimpleLine,
    PiPencilSimpleSlash,
    PiPencilSimple,
    PiPencilSlash,
    PiPencil,
    PiPentagon,
    PiPentagram,
    PiPepper,
    PiPercent,
    PiPersonArmsSpread,
    PiPersonSimpleBike,
    PiPersonSimpleCircle,
    PiPersonSimpleHike,
    PiPersonSimpleRun,
    PiPersonSimpleSki,
    PiPersonSimpleSnowboard,
    PiPersonSimpleSwim,
    PiPersonSimpleTaiChi,
    PiPersonSimpleThrow,
    PiPersonSimpleWalk,
    PiPersonSimple,
    PiPerson,
    PiPerspective,
    PiPhoneCall,
    PiPhoneDisconnect,
    PiPhoneIncoming,
    PiPhoneList,
    PiPhoneOutgoing,
    PiPhonePause,
    PiPhonePlus,
    PiPhoneSlash,
    PiPhoneTransfer,
    PiPhoneX,
    PiPhone,
    PiPhosphorLogo,
    PiPi,
    PiPianoKeys,
    PiPicnicTable,
    PiPictureInPicture,
    PiPiggyBank,
    PiPill,
    PiPingPong,
    PiPintGlass,
    PiPinterestLogo,
    PiPinwheel,
    PiPipeWrench,
    PiPipe,
    PiPixLogo,
    PiPizza,
    PiPlaceholder,
    PiPlanet,
    PiPlant,
    PiPlayCircle,
    PiPlayPause,
    PiPlay,
    PiPlaylist,
    PiPlugCharging,
    PiPlug,
    PiPlugsConnected,
    PiPlugs,
    PiPlusCircle,
    PiPlusMinus,
    PiPlusSquare,
    PiPlus,
    PiPokerChip,
    PiPoliceCar,
    PiPolygon,
    PiPopcorn,
    PiPopsicle,
    PiPottedPlant,
    PiPower,
    PiPrescription,
    PiPresentationChart,
    PiPresentation,
    PiPrinter,
    PiProhibitInset,
    PiProhibit,
    PiProjectorScreenChart,
    PiProjectorScreen,
    PiPulse,
    PiPushPinSimpleSlash,
    PiPushPinSimple,
    PiPushPinSlash,
    PiPushPin,
    PiPuzzlePiece,
    PiQrCode,
    PiQuestionMark,
    PiQuestion,
    PiQueue,
    PiQuotes,
    PiRabbit,
    PiRacquet,
    PiRadical,
    PiRadioButton,
    PiRadio,
    PiRadioactive,
    PiRainbowCloud,
    PiRainbow,
    PiRanking,
    PiReadCvLogo,
    PiReceiptX,
    PiReceipt,
    PiRecord,
    PiRectangleDashed,
    PiRectangle,
    PiRecycle,
    PiRedditLogo,
    PiRepeatOnce,
    PiRepeat,
    PiReplitLogo,
    PiResize,
    PiRewindCircle,
    PiRewind,
    PiRoadHorizon,
    PiRobot,
    PiRocketLaunch,
    PiRocket,
    PiRowsPlusBottom,
    PiRowsPlusTop,
    PiRows,
    PiRssSimple,
    PiRss,
    PiRug,
    PiRuler,
    PiSailboat,
    PiScales,
    PiScanSmiley,
    PiScan,
    PiScissors,
    PiScooter,
    PiScreencast,
    PiScrewdriver,
    PiScribbleLoop,
    PiScribble,
    PiScroll,
    PiSealCheck,
    PiSealPercent,
    PiSealQuestion,
    PiSealWarning,
    PiSeal,
    PiSeat,
    PiSeatbelt,
    PiSecurityCamera,
    PiSelectionAll,
    PiSelectionBackground,
    PiSelectionForeground,
    PiSelectionInverse,
    PiSelectionPlus,
    PiSelectionSlash,
    PiSelection,
    PiShapes,
    PiShareFat,
    PiShareNetwork,
    PiShare,
    PiShieldCheck,
    PiShieldCheckered,
    PiShieldChevron,
    PiShieldPlus,
    PiShieldSlash,
    PiShieldStar,
    PiShieldWarning,
    PiShield,
    PiShippingContainer,
    PiShirtFolded,
    PiShootingStar,
    PiShoppingBagOpen,
    PiShoppingBag,
    PiShoppingCartSimple,
    PiShoppingCart,
    PiShovel,
    PiShower,
    PiShrimp,
    PiShuffleAngular,
    PiShuffleSimple,
    PiShuffle,
    PiSidebarSimple,
    PiSidebar,
    PiSigma,
    PiSignIn,
    PiSignOut,
    PiSignature,
    PiSignpost,
    PiSimCard,
    PiSiren,
    PiSketchLogo,
    PiSkipBackCircle,
    PiSkipBack,
    PiSkipForwardCircle,
    PiSkipForward,
    PiSkull,
    PiSkypeLogo,
    PiSlackLogo,
    PiSlidersHorizontal,
    PiSliders,
    PiSlideshow,
    PiSmileyAngry,
    PiSmileyBlank,
    PiSmileyMeh,
    PiSmileyMelting,
    PiSmileyNervous,
    PiSmileySad,
    PiSmileySticker,
    PiSmileyWink,
    PiSmileyXEyes,
    PiSmiley,
    PiSnapchatLogo,
    PiSneakerMove,
    PiSneaker,
    PiSnowflake,
    PiSoccerBall,
    PiSock,
    PiSolarPanel,
    PiSolarRoof,
    PiSortAscending,
    PiSortDescending,
    PiSoundcloudLogo,
    PiSpade,
    PiSparkle,
    PiSpeakerHifi,
    PiSpeakerHigh,
    PiSpeakerLow,
    PiSpeakerNone,
    PiSpeakerSimpleHigh,
    PiSpeakerSimpleLow,
    PiSpeakerSimpleNone,
    PiSpeakerSimpleSlash,
    PiSpeakerSimpleX,
    PiSpeakerSlash,
    PiSpeakerX,
    PiSpeedometer,
    PiSphere,
    PiSpinnerBall,
    PiSpinnerGap,
    PiSpinner,
    PiSpiral,
    PiSplitHorizontal,
    PiSplitVertical,
    PiSpotifyLogo,
    PiSprayBottle,
    PiSquareHalfBottom,
    PiSquareHalf,
    PiSquareLogo,
    PiSquareSplitHorizontal,
    PiSquareSplitVertical,
    PiSquare,
    PiSquaresFour,
    PiStackMinus,
    PiStackOverflowLogo,
    PiStackPlus,
    PiStackSimple,
    PiStack,
    PiStairs,
    PiStamp,
    PiStandardDefinition,
    PiStarAndCrescent,
    PiStarFour,
    PiStarHalf,
    PiStarOfDavid,
    PiStar,
    PiSteamLogo,
    PiSteeringWheel,
    PiSteps,
    PiStethoscope,
    PiSticker,
    PiStool,
    PiStopCircle,
    PiStop,
    PiStorefront,
    PiStrategy,
    PiStripeLogo,
    PiStudent,
    PiSubsetOf,
    PiSubsetProperOf,
    PiSubtitlesSlash,
    PiSubtitles,
    PiSubtractSquare,
    PiSubtract,
    PiSubway,
    PiSuitcaseRolling,
    PiSuitcaseSimple,
    PiSuitcase,
    PiSunDim,
    PiSunHorizon,
    PiSun,
    PiSunglasses,
    PiSupersetOf,
    PiSupersetProperOf,
    PiSwap,
    PiSwatches,
    PiSwimmingPool,
    PiSword,
    PiSynagogue,
    PiSyringe,
    PiTShirt,
    PiTable,
    PiTabs,
    PiTagChevron,
    PiTagSimple,
    PiTag,
    PiTarget,
    PiTaxi,
    PiTeaBag,
    PiTelegramLogo,
    PiTelevisionSimple,
    PiTelevision,
    PiTennisBall,
    PiTent,
    PiTerminalWindow,
    PiTerminal,
    PiTestTube,
    PiTextAUnderline,
    PiTextAa,
    PiTextAlignCenter,
    PiTextAlignJustify,
    PiTextAlignLeft,
    PiTextAlignRight,
    PiTextB,
    PiTextColumns,
    PiTextHFive,
    PiTextHFour,
    PiTextHOne,
    PiTextHSix,
    PiTextHThree,
    PiTextHTwo,
    PiTextH,
    PiTextIndent,
    PiTextItalic,
    PiTextOutdent,
    PiTextStrikethrough,
    PiTextSubscript,
    PiTextSuperscript,
    PiTextTSlash,
    PiTextT,
    PiTextUnderline,
    PiTextbox,
    PiThermometerCold,
    PiThermometerHot,
    PiThermometerSimple,
    PiThermometer,
    PiThreadsLogo,
    PiThreeD,
    PiThumbsDown,
    PiThumbsUp,
    PiTicket,
    PiTidalLogo,
    PiTiktokLogo,
    PiTilde,
    PiTimer,
    PiTipJar,
    PiTipi,
    PiTire,
    PiToggleLeft,
    PiToggleRight,
    PiToiletPaper,
    PiToilet,
    PiToolbox,
    PiTooth,
    PiTornado,
    PiToteSimple,
    PiTote,
    PiTowel,
    PiTractor,
    PiTrademarkRegistered,
    PiTrademark,
    PiTrafficCone,
    PiTrafficSign,
    PiTrafficSignal,
    PiTrainRegional,
    PiTrainSimple,
    PiTrain,
    PiTram,
    PiTranslate,
    PiTrashSimple,
    PiTrash,
    PiTrayArrowDown,
    PiTrayArrowUp,
    PiTray,
    PiTreasureChest,
    PiTreeEvergreen,
    PiTreePalm,
    PiTreeStructure,
    PiTreeView,
    PiTree,
    PiTrendDown,
    PiTrendUp,
    PiTriangleDashed,
    PiTriangle,
    PiTrolleySuitcase,
    PiTrolley,
    PiTrophy,
    PiTruckTrailer,
    PiTruck,
    PiTumblrLogo,
    PiTwitchLogo,
    PiTwitterLogo,
    PiUmbrellaSimple,
    PiUmbrella,
    PiUnion,
    PiUniteSquare,
    PiUnite,
    PiUploadSimple,
    PiUpload,
    PiUsb,
    PiUserCheck,
    PiUserCircleCheck,
    PiUserCircleDashed,
    PiUserCircleGear,
    PiUserCircleMinus,
    PiUserCirclePlus,
    PiUserCircle,
    PiUserFocus,
    PiUserGear,
    PiUserList,
    PiUserMinus,
    PiUserPlus,
    PiUserRectangle,
    PiUserSound,
    PiUserSquare,
    PiUserSwitch,
    PiUser,
    PiUsersFour,
    PiUsersThree,
    PiUsers,
    PiVan,
    PiVault,
    PiVectorThree,
    PiVectorTwo,
    PiVibrate,
    PiVideoCameraSlash,
    PiVideoCamera,
    PiVideoConference,
    PiVideo,
    PiVignette,
    PiVinylRecord,
    PiVirtualReality,
    PiVirus,
    PiVisor,
    PiVoicemail,
    PiVolleyball,
    PiWall,
    PiWallet,
    PiWarehouse,
    PiWarningCircle,
    PiWarningDiamond,
    PiWarningOctagon,
    PiWarning,
    PiWashingMachine,
    PiWatch,
    PiWaveSawtooth,
    PiWaveSine,
    PiWaveSquare,
    PiWaveTriangle,
    PiWaveformSlash,
    PiWaveform,
    PiWaves,
    PiWebcamSlash,
    PiWebcam,
    PiWebhooksLogo,
    PiWechatLogo,
    PiWhatsappLogo,
    PiWheelchairMotion,
    PiWheelchair,
    PiWifiHigh,
    PiWifiLow,
    PiWifiMedium,
    PiWifiNone,
    PiWifiSlash,
    PiWifiX,
    PiWind,
    PiWindmill,
    PiWindowsLogo,
    PiWine,
    PiWrench,
    PiXCircle,
    PiXLogo,
    PiXSquare,
    PiX,
    PiYarn,
    PiYinYang,
    PiYoutubeLogo,
    PiAcornThin,
    PiAddressBookTabsThin,
    PiAddressBookThin,
    PiAirTrafficControlThin,
    PiAirplaneInFlightThin,
    PiAirplaneLandingThin,
    PiAirplaneTakeoffThin,
    PiAirplaneTaxiingThin,
    PiAirplaneThin,
    PiAirplaneTiltThin,
    PiAirplayThin,
    PiAlarmThin,
    PiAlienThin,
    PiAlignBottomSimpleThin,
    PiAlignBottomThin,
    PiAlignCenterHorizontalSimpleThin,
    PiAlignCenterHorizontalThin,
    PiAlignCenterVerticalSimpleThin,
    PiAlignCenterVerticalThin,
    PiAlignLeftSimpleThin,
    PiAlignLeftThin,
    PiAlignRightSimpleThin,
    PiAlignRightThin,
    PiAlignTopSimpleThin,
    PiAlignTopThin,
    PiAmazonLogoThin,
    PiAmbulanceThin,
    PiAnchorSimpleThin,
    PiAnchorThin,
    PiAndroidLogoThin,
    PiAngleThin,
    PiAngularLogoThin,
    PiApertureThin,
    PiAppStoreLogoThin,
    PiAppWindowThin,
    PiAppleLogoThin,
    PiApplePodcastsLogoThin,
    PiApproximateEqualsThin,
    PiArchiveThin,
    PiArmchairThin,
    PiArrowArcLeftThin,
    PiArrowArcRightThin,
    PiArrowBendDoubleUpLeftThin,
    PiArrowBendDoubleUpRightThin,
    PiArrowBendDownLeftThin,
    PiArrowBendDownRightThin,
    PiArrowBendLeftDownThin,
    PiArrowBendLeftUpThin,
    PiArrowBendRightDownThin,
    PiArrowBendRightUpThin,
    PiArrowBendUpLeftThin,
    PiArrowBendUpRightThin,
    PiArrowCircleDownLeftThin,
    PiArrowCircleDownRightThin,
    PiArrowCircleDownThin,
    PiArrowCircleLeftThin,
    PiArrowCircleRightThin,
    PiArrowCircleUpLeftThin,
    PiArrowCircleUpRightThin,
    PiArrowCircleUpThin,
    PiArrowClockwiseThin,
    PiArrowCounterClockwiseThin,
    PiArrowDownLeftThin,
    PiArrowDownRightThin,
    PiArrowDownThin,
    PiArrowElbowDownLeftThin,
    PiArrowElbowDownRightThin,
    PiArrowElbowLeftDownThin,
    PiArrowElbowLeftThin,
    PiArrowElbowLeftUpThin,
    PiArrowElbowRightDownThin,
    PiArrowElbowRightThin,
    PiArrowElbowRightUpThin,
    PiArrowElbowUpLeftThin,
    PiArrowElbowUpRightThin,
    PiArrowFatDownThin,
    PiArrowFatLeftThin,
    PiArrowFatLineDownThin,
    PiArrowFatLineLeftThin,
    PiArrowFatLineRightThin,
    PiArrowFatLineUpThin,
    PiArrowFatLinesDownThin,
    PiArrowFatLinesLeftThin,
    PiArrowFatLinesRightThin,
    PiArrowFatLinesUpThin,
    PiArrowFatRightThin,
    PiArrowFatUpThin,
    PiArrowLeftThin,
    PiArrowLineDownLeftThin,
    PiArrowLineDownRightThin,
    PiArrowLineDownThin,
    PiArrowLineLeftThin,
    PiArrowLineRightThin,
    PiArrowLineUpLeftThin,
    PiArrowLineUpRightThin,
    PiArrowLineUpThin,
    PiArrowRightThin,
    PiArrowSquareDownLeftThin,
    PiArrowSquareDownRightThin,
    PiArrowSquareDownThin,
    PiArrowSquareInThin,
    PiArrowSquareLeftThin,
    PiArrowSquareOutThin,
    PiArrowSquareRightThin,
    PiArrowSquareUpLeftThin,
    PiArrowSquareUpRightThin,
    PiArrowSquareUpThin,
    PiArrowUDownLeftThin,
    PiArrowUDownRightThin,
    PiArrowULeftDownThin,
    PiArrowULeftUpThin,
    PiArrowURightDownThin,
    PiArrowURightUpThin,
    PiArrowUUpLeftThin,
    PiArrowUUpRightThin,
    PiArrowUpLeftThin,
    PiArrowUpRightThin,
    PiArrowUpThin,
    PiArrowsClockwiseThin,
    PiArrowsCounterClockwiseThin,
    PiArrowsDownUpThin,
    PiArrowsHorizontalThin,
    PiArrowsInCardinalThin,
    PiArrowsInLineHorizontalThin,
    PiArrowsInLineVerticalThin,
    PiArrowsInSimpleThin,
    PiArrowsInThin,
    PiArrowsLeftRightThin,
    PiArrowsMergeThin,
    PiArrowsOutCardinalThin,
    PiArrowsOutLineHorizontalThin,
    PiArrowsOutLineVerticalThin,
    PiArrowsOutSimpleThin,
    PiArrowsOutThin,
    PiArrowsSplitThin,
    PiArrowsVerticalThin,
    PiArticleMediumThin,
    PiArticleNyTimesThin,
    PiArticleThin,
    PiAsclepiusThin,
    PiAsteriskSimpleThin,
    PiAsteriskThin,
    PiAtThin,
    PiAtomThin,
    PiAvocadoThin,
    PiAxeThin,
    PiBabyCarriageThin,
    PiBabyThin,
    PiBackpackThin,
    PiBackspaceThin,
    PiBagSimpleThin,
    PiBagThin,
    PiBalloonThin,
    PiBandaidsThin,
    PiBankThin,
    PiBarbellThin,
    PiBarcodeThin,
    PiBarnThin,
    PiBarricadeThin,
    PiBaseballCapThin,
    PiBaseballHelmetThin,
    PiBaseballThin,
    PiBasketThin,
    PiBasketballThin,
    PiBathtubThin,
    PiBatteryChargingThin,
    PiBatteryChargingVerticalThin,
    PiBatteryEmptyThin,
    PiBatteryFullThin,
    PiBatteryHighThin,
    PiBatteryLowThin,
    PiBatteryMediumThin,
    PiBatteryPlusThin,
    PiBatteryPlusVerticalThin,
    PiBatteryVerticalEmptyThin,
    PiBatteryVerticalFullThin,
    PiBatteryVerticalHighThin,
    PiBatteryVerticalLowThin,
    PiBatteryVerticalMediumThin,
    PiBatteryWarningThin,
    PiBatteryWarningVerticalThin,
    PiBeachBallThin,
    PiBeanieThin,
    PiBedThin,
    PiBeerBottleThin,
    PiBeerSteinThin,
    PiBehanceLogoThin,
    PiBellRingingThin,
    PiBellSimpleRingingThin,
    PiBellSimpleSlashThin,
    PiBellSimpleThin,
    PiBellSimpleZThin,
    PiBellSlashThin,
    PiBellThin,
    PiBellZThin,
    PiBeltThin,
    PiBezierCurveThin,
    PiBicycleThin,
    PiBinaryThin,
    PiBinocularsThin,
    PiBiohazardThin,
    PiBirdThin,
    PiBlueprintThin,
    PiBluetoothConnectedThin,
    PiBluetoothSlashThin,
    PiBluetoothThin,
    PiBluetoothXThin,
    PiBoatThin,
    PiBombThin,
    PiBoneThin,
    PiBookBookmarkThin,
    PiBookOpenTextThin,
    PiBookOpenThin,
    PiBookOpenUserThin,
    PiBookThin,
    PiBookmarkSimpleThin,
    PiBookmarkThin,
    PiBookmarksSimpleThin,
    PiBookmarksThin,
    PiBooksThin,
    PiBootThin,
    PiBoulesThin,
    PiBoundingBoxThin,
    PiBowlFoodThin,
    PiBowlSteamThin,
    PiBowlingBallThin,
    PiBoxArrowDownThin,
    PiBoxArrowUpThin,
    PiBoxingGloveThin,
    PiBracketsAngleThin,
    PiBracketsCurlyThin,
    PiBracketsRoundThin,
    PiBracketsSquareThin,
    PiBrainThin,
    PiBrandyThin,
    PiBreadThin,
    PiBridgeThin,
    PiBriefcaseMetalThin,
    PiBriefcaseThin,
    PiBroadcastThin,
    PiBroomThin,
    PiBrowserThin,
    PiBrowsersThin,
    PiBugBeetleThin,
    PiBugDroidThin,
    PiBugThin,
    PiBuildingApartmentThin,
    PiBuildingOfficeThin,
    PiBuildingThin,
    PiBuildingsThin,
    PiBulldozerThin,
    PiBusThin,
    PiButterflyThin,
    PiCableCarThin,
    PiCactusThin,
    PiCakeThin,
    PiCalculatorThin,
    PiCalendarBlankThin,
    PiCalendarCheckThin,
    PiCalendarDotThin,
    PiCalendarDotsThin,
    PiCalendarHeartThin,
    PiCalendarMinusThin,
    PiCalendarPlusThin,
    PiCalendarSlashThin,
    PiCalendarStarThin,
    PiCalendarThin,
    PiCalendarXThin,
    PiCallBellThin,
    PiCameraPlusThin,
    PiCameraRotateThin,
    PiCameraSlashThin,
    PiCameraThin,
    PiCampfireThin,
    PiCarBatteryThin,
    PiCarProfileThin,
    PiCarSimpleThin,
    PiCarThin,
    PiCardholderThin,
    PiCardsThin,
    PiCardsThreeThin,
    PiCaretCircleDoubleDownThin,
    PiCaretCircleDoubleLeftThin,
    PiCaretCircleDoubleRightThin,
    PiCaretCircleDoubleUpThin,
    PiCaretCircleDownThin,
    PiCaretCircleLeftThin,
    PiCaretCircleRightThin,
    PiCaretCircleUpDownThin,
    PiCaretCircleUpThin,
    PiCaretDoubleDownThin,
    PiCaretDoubleLeftThin,
    PiCaretDoubleRightThin,
    PiCaretDoubleUpThin,
    PiCaretDownThin,
    PiCaretLeftThin,
    PiCaretLineDownThin,
    PiCaretLineLeftThin,
    PiCaretLineRightThin,
    PiCaretLineUpThin,
    PiCaretRightThin,
    PiCaretUpDownThin,
    PiCaretUpThin,
    PiCarrotThin,
    PiCashRegisterThin,
    PiCassetteTapeThin,
    PiCastleTurretThin,
    PiCatThin,
    PiCellSignalFullThin,
    PiCellSignalHighThin,
    PiCellSignalLowThin,
    PiCellSignalMediumThin,
    PiCellSignalNoneThin,
    PiCellSignalSlashThin,
    PiCellSignalXThin,
    PiCellTowerThin,
    PiCertificateThin,
    PiChairThin,
    PiChalkboardSimpleThin,
    PiChalkboardTeacherThin,
    PiChalkboardThin,
    PiChampagneThin,
    PiChargingStationThin,
    PiChartBarHorizontalThin,
    PiChartBarThin,
    PiChartDonutThin,
    PiChartLineDownThin,
    PiChartLineThin,
    PiChartLineUpThin,
    PiChartPieSliceThin,
    PiChartPieThin,
    PiChartPolarThin,
    PiChartScatterThin,
    PiChatCenteredDotsThin,
    PiChatCenteredSlashThin,
    PiChatCenteredTextThin,
    PiChatCenteredThin,
    PiChatCircleDotsThin,
    PiChatCircleSlashThin,
    PiChatCircleTextThin,
    PiChatCircleThin,
    PiChatDotsThin,
    PiChatSlashThin,
    PiChatTeardropDotsThin,
    PiChatTeardropSlashThin,
    PiChatTeardropTextThin,
    PiChatTeardropThin,
    PiChatTextThin,
    PiChatThin,
    PiChatsCircleThin,
    PiChatsTeardropThin,
    PiChatsThin,
    PiCheckCircleThin,
    PiCheckFatThin,
    PiCheckSquareOffsetThin,
    PiCheckSquareThin,
    PiCheckThin,
    PiCheckerboardThin,
    PiChecksThin,
    PiCheersThin,
    PiCheeseThin,
    PiChefHatThin,
    PiCherriesThin,
    PiChurchThin,
    PiCigaretteSlashThin,
    PiCigaretteThin,
    PiCircleDashedThin,
    PiCircleHalfThin,
    PiCircleHalfTiltThin,
    PiCircleNotchThin,
    PiCircleThin,
    PiCirclesFourThin,
    PiCirclesThreePlusThin,
    PiCirclesThreeThin,
    PiCircuitryThin,
    PiCityThin,
    PiClipboardTextThin,
    PiClipboardThin,
    PiClockAfternoonThin,
    PiClockClockwiseThin,
    PiClockCountdownThin,
    PiClockCounterClockwiseThin,
    PiClockThin,
    PiClockUserThin,
    PiClosedCaptioningThin,
    PiCloudArrowDownThin,
    PiCloudArrowUpThin,
    PiCloudCheckThin,
    PiCloudFogThin,
    PiCloudLightningThin,
    PiCloudMoonThin,
    PiCloudRainThin,
    PiCloudSlashThin,
    PiCloudSnowThin,
    PiCloudSunThin,
    PiCloudThin,
    PiCloudWarningThin,
    PiCloudXThin,
    PiCloverThin,
    PiClubThin,
    PiCoatHangerThin,
    PiCodaLogoThin,
    PiCodeBlockThin,
    PiCodeSimpleThin,
    PiCodeThin,
    PiCodepenLogoThin,
    PiCodesandboxLogoThin,
    PiCoffeeBeanThin,
    PiCoffeeThin,
    PiCoinThin,
    PiCoinVerticalThin,
    PiCoinsThin,
    PiColumnsPlusLeftThin,
    PiColumnsPlusRightThin,
    PiColumnsThin,
    PiCommandThin,
    PiCompassRoseThin,
    PiCompassThin,
    PiCompassToolThin,
    PiComputerTowerThin,
    PiConfettiThin,
    PiContactlessPaymentThin,
    PiControlThin,
    PiCookieThin,
    PiCookingPotThin,
    PiCopySimpleThin,
    PiCopyThin,
    PiCopyleftThin,
    PiCopyrightThin,
    PiCornersInThin,
    PiCornersOutThin,
    PiCouchThin,
    PiCourtBasketballThin,
    PiCowThin,
    PiCowboyHatThin,
    PiCpuThin,
    PiCraneThin,
    PiCraneTowerThin,
    PiCreditCardThin,
    PiCricketThin,
} from "react-icons/pi"

export function nameToReactIcon_pi_7(iconName: string): IconType | undefined {

    switch(iconName) {
        case "pi:PiNotePencil":
            return PiNotePencil;
        case "pi:PiNote":
            return PiNote;
        case "pi:PiNotebook":
            return PiNotebook;
        case "pi:PiNotepad":
            return PiNotepad;
        case "pi:PiNotification":
            return PiNotification;
        case "pi:PiNotionLogo":
            return PiNotionLogo;
        case "pi:PiNuclearPlant":
            return PiNuclearPlant;
        case "pi:PiNumberCircleEight":
            return PiNumberCircleEight;
        case "pi:PiNumberCircleFive":
            return PiNumberCircleFive;
        case "pi:PiNumberCircleFour":
            return PiNumberCircleFour;
        case "pi:PiNumberCircleNine":
            return PiNumberCircleNine;
        case "pi:PiNumberCircleOne":
            return PiNumberCircleOne;
        case "pi:PiNumberCircleSeven":
            return PiNumberCircleSeven;
        case "pi:PiNumberCircleSix":
            return PiNumberCircleSix;
        case "pi:PiNumberCircleThree":
            return PiNumberCircleThree;
        case "pi:PiNumberCircleTwo":
            return PiNumberCircleTwo;
        case "pi:PiNumberCircleZero":
            return PiNumberCircleZero;
        case "pi:PiNumberEight":
            return PiNumberEight;
        case "pi:PiNumberFive":
            return PiNumberFive;
        case "pi:PiNumberFour":
            return PiNumberFour;
        case "pi:PiNumberNine":
            return PiNumberNine;
        case "pi:PiNumberOne":
            return PiNumberOne;
        case "pi:PiNumberSeven":
            return PiNumberSeven;
        case "pi:PiNumberSix":
            return PiNumberSix;
        case "pi:PiNumberSquareEight":
            return PiNumberSquareEight;
        case "pi:PiNumberSquareFive":
            return PiNumberSquareFive;
        case "pi:PiNumberSquareFour":
            return PiNumberSquareFour;
        case "pi:PiNumberSquareNine":
            return PiNumberSquareNine;
        case "pi:PiNumberSquareOne":
            return PiNumberSquareOne;
        case "pi:PiNumberSquareSeven":
            return PiNumberSquareSeven;
        case "pi:PiNumberSquareSix":
            return PiNumberSquareSix;
        case "pi:PiNumberSquareThree":
            return PiNumberSquareThree;
        case "pi:PiNumberSquareTwo":
            return PiNumberSquareTwo;
        case "pi:PiNumberSquareZero":
            return PiNumberSquareZero;
        case "pi:PiNumberThree":
            return PiNumberThree;
        case "pi:PiNumberTwo":
            return PiNumberTwo;
        case "pi:PiNumberZero":
            return PiNumberZero;
        case "pi:PiNumpad":
            return PiNumpad;
        case "pi:PiNut":
            return PiNut;
        case "pi:PiNyTimesLogo":
            return PiNyTimesLogo;
        case "pi:PiOctagon":
            return PiOctagon;
        case "pi:PiOfficeChair":
            return PiOfficeChair;
        case "pi:PiOnigiri":
            return PiOnigiri;
        case "pi:PiOpenAiLogo":
            return PiOpenAiLogo;
        case "pi:PiOption":
            return PiOption;
        case "pi:PiOrangeSlice":
            return PiOrangeSlice;
        case "pi:PiOrange":
            return PiOrange;
        case "pi:PiOven":
            return PiOven;
        case "pi:PiPackage":
            return PiPackage;
        case "pi:PiPaintBrushBroad":
            return PiPaintBrushBroad;
        case "pi:PiPaintBrushHousehold":
            return PiPaintBrushHousehold;
        case "pi:PiPaintBrush":
            return PiPaintBrush;
        case "pi:PiPaintBucket":
            return PiPaintBucket;
        case "pi:PiPaintRoller":
            return PiPaintRoller;
        case "pi:PiPalette":
            return PiPalette;
        case "pi:PiPanorama":
            return PiPanorama;
        case "pi:PiPants":
            return PiPants;
        case "pi:PiPaperPlaneRight":
            return PiPaperPlaneRight;
        case "pi:PiPaperPlaneTilt":
            return PiPaperPlaneTilt;
        case "pi:PiPaperPlane":
            return PiPaperPlane;
        case "pi:PiPaperclipHorizontal":
            return PiPaperclipHorizontal;
        case "pi:PiPaperclip":
            return PiPaperclip;
        case "pi:PiParachute":
            return PiParachute;
        case "pi:PiParagraph":
            return PiParagraph;
        case "pi:PiParallelogram":
            return PiParallelogram;
        case "pi:PiPark":
            return PiPark;
        case "pi:PiPassword":
            return PiPassword;
        case "pi:PiPath":
            return PiPath;
        case "pi:PiPatreonLogo":
            return PiPatreonLogo;
        case "pi:PiPauseCircle":
            return PiPauseCircle;
        case "pi:PiPause":
            return PiPause;
        case "pi:PiPawPrint":
            return PiPawPrint;
        case "pi:PiPaypalLogo":
            return PiPaypalLogo;
        case "pi:PiPeace":
            return PiPeace;
        case "pi:PiPenNibStraight":
            return PiPenNibStraight;
        case "pi:PiPenNib":
            return PiPenNib;
        case "pi:PiPen":
            return PiPen;
        case "pi:PiPencilCircle":
            return PiPencilCircle;
        case "pi:PiPencilLine":
            return PiPencilLine;
        case "pi:PiPencilRuler":
            return PiPencilRuler;
        case "pi:PiPencilSimpleLine":
            return PiPencilSimpleLine;
        case "pi:PiPencilSimpleSlash":
            return PiPencilSimpleSlash;
        case "pi:PiPencilSimple":
            return PiPencilSimple;
        case "pi:PiPencilSlash":
            return PiPencilSlash;
        case "pi:PiPencil":
            return PiPencil;
        case "pi:PiPentagon":
            return PiPentagon;
        case "pi:PiPentagram":
            return PiPentagram;
        case "pi:PiPepper":
            return PiPepper;
        case "pi:PiPercent":
            return PiPercent;
        case "pi:PiPersonArmsSpread":
            return PiPersonArmsSpread;
        case "pi:PiPersonSimpleBike":
            return PiPersonSimpleBike;
        case "pi:PiPersonSimpleCircle":
            return PiPersonSimpleCircle;
        case "pi:PiPersonSimpleHike":
            return PiPersonSimpleHike;
        case "pi:PiPersonSimpleRun":
            return PiPersonSimpleRun;
        case "pi:PiPersonSimpleSki":
            return PiPersonSimpleSki;
        case "pi:PiPersonSimpleSnowboard":
            return PiPersonSimpleSnowboard;
        case "pi:PiPersonSimpleSwim":
            return PiPersonSimpleSwim;
        case "pi:PiPersonSimpleTaiChi":
            return PiPersonSimpleTaiChi;
        case "pi:PiPersonSimpleThrow":
            return PiPersonSimpleThrow;
        case "pi:PiPersonSimpleWalk":
            return PiPersonSimpleWalk;
        case "pi:PiPersonSimple":
            return PiPersonSimple;
        case "pi:PiPerson":
            return PiPerson;
        case "pi:PiPerspective":
            return PiPerspective;
        case "pi:PiPhoneCall":
            return PiPhoneCall;
        case "pi:PiPhoneDisconnect":
            return PiPhoneDisconnect;
        case "pi:PiPhoneIncoming":
            return PiPhoneIncoming;
        case "pi:PiPhoneList":
            return PiPhoneList;
        case "pi:PiPhoneOutgoing":
            return PiPhoneOutgoing;
        case "pi:PiPhonePause":
            return PiPhonePause;
        case "pi:PiPhonePlus":
            return PiPhonePlus;
        case "pi:PiPhoneSlash":
            return PiPhoneSlash;
        case "pi:PiPhoneTransfer":
            return PiPhoneTransfer;
        case "pi:PiPhoneX":
            return PiPhoneX;
        case "pi:PiPhone":
            return PiPhone;
        case "pi:PiPhosphorLogo":
            return PiPhosphorLogo;
        case "pi:PiPi":
            return PiPi;
        case "pi:PiPianoKeys":
            return PiPianoKeys;
        case "pi:PiPicnicTable":
            return PiPicnicTable;
        case "pi:PiPictureInPicture":
            return PiPictureInPicture;
        case "pi:PiPiggyBank":
            return PiPiggyBank;
        case "pi:PiPill":
            return PiPill;
        case "pi:PiPingPong":
            return PiPingPong;
        case "pi:PiPintGlass":
            return PiPintGlass;
        case "pi:PiPinterestLogo":
            return PiPinterestLogo;
        case "pi:PiPinwheel":
            return PiPinwheel;
        case "pi:PiPipeWrench":
            return PiPipeWrench;
        case "pi:PiPipe":
            return PiPipe;
        case "pi:PiPixLogo":
            return PiPixLogo;
        case "pi:PiPizza":
            return PiPizza;
        case "pi:PiPlaceholder":
            return PiPlaceholder;
        case "pi:PiPlanet":
            return PiPlanet;
        case "pi:PiPlant":
            return PiPlant;
        case "pi:PiPlayCircle":
            return PiPlayCircle;
        case "pi:PiPlayPause":
            return PiPlayPause;
        case "pi:PiPlay":
            return PiPlay;
        case "pi:PiPlaylist":
            return PiPlaylist;
        case "pi:PiPlugCharging":
            return PiPlugCharging;
        case "pi:PiPlug":
            return PiPlug;
        case "pi:PiPlugsConnected":
            return PiPlugsConnected;
        case "pi:PiPlugs":
            return PiPlugs;
        case "pi:PiPlusCircle":
            return PiPlusCircle;
        case "pi:PiPlusMinus":
            return PiPlusMinus;
        case "pi:PiPlusSquare":
            return PiPlusSquare;
        case "pi:PiPlus":
            return PiPlus;
        case "pi:PiPokerChip":
            return PiPokerChip;
        case "pi:PiPoliceCar":
            return PiPoliceCar;
        case "pi:PiPolygon":
            return PiPolygon;
        case "pi:PiPopcorn":
            return PiPopcorn;
        case "pi:PiPopsicle":
            return PiPopsicle;
        case "pi:PiPottedPlant":
            return PiPottedPlant;
        case "pi:PiPower":
            return PiPower;
        case "pi:PiPrescription":
            return PiPrescription;
        case "pi:PiPresentationChart":
            return PiPresentationChart;
        case "pi:PiPresentation":
            return PiPresentation;
        case "pi:PiPrinter":
            return PiPrinter;
        case "pi:PiProhibitInset":
            return PiProhibitInset;
        case "pi:PiProhibit":
            return PiProhibit;
        case "pi:PiProjectorScreenChart":
            return PiProjectorScreenChart;
        case "pi:PiProjectorScreen":
            return PiProjectorScreen;
        case "pi:PiPulse":
            return PiPulse;
        case "pi:PiPushPinSimpleSlash":
            return PiPushPinSimpleSlash;
        case "pi:PiPushPinSimple":
            return PiPushPinSimple;
        case "pi:PiPushPinSlash":
            return PiPushPinSlash;
        case "pi:PiPushPin":
            return PiPushPin;
        case "pi:PiPuzzlePiece":
            return PiPuzzlePiece;
        case "pi:PiQrCode":
            return PiQrCode;
        case "pi:PiQuestionMark":
            return PiQuestionMark;
        case "pi:PiQuestion":
            return PiQuestion;
        case "pi:PiQueue":
            return PiQueue;
        case "pi:PiQuotes":
            return PiQuotes;
        case "pi:PiRabbit":
            return PiRabbit;
        case "pi:PiRacquet":
            return PiRacquet;
        case "pi:PiRadical":
            return PiRadical;
        case "pi:PiRadioButton":
            return PiRadioButton;
        case "pi:PiRadio":
            return PiRadio;
        case "pi:PiRadioactive":
            return PiRadioactive;
        case "pi:PiRainbowCloud":
            return PiRainbowCloud;
        case "pi:PiRainbow":
            return PiRainbow;
        case "pi:PiRanking":
            return PiRanking;
        case "pi:PiReadCvLogo":
            return PiReadCvLogo;
        case "pi:PiReceiptX":
            return PiReceiptX;
        case "pi:PiReceipt":
            return PiReceipt;
        case "pi:PiRecord":
            return PiRecord;
        case "pi:PiRectangleDashed":
            return PiRectangleDashed;
        case "pi:PiRectangle":
            return PiRectangle;
        case "pi:PiRecycle":
            return PiRecycle;
        case "pi:PiRedditLogo":
            return PiRedditLogo;
        case "pi:PiRepeatOnce":
            return PiRepeatOnce;
        case "pi:PiRepeat":
            return PiRepeat;
        case "pi:PiReplitLogo":
            return PiReplitLogo;
        case "pi:PiResize":
            return PiResize;
        case "pi:PiRewindCircle":
            return PiRewindCircle;
        case "pi:PiRewind":
            return PiRewind;
        case "pi:PiRoadHorizon":
            return PiRoadHorizon;
        case "pi:PiRobot":
            return PiRobot;
        case "pi:PiRocketLaunch":
            return PiRocketLaunch;
        case "pi:PiRocket":
            return PiRocket;
        case "pi:PiRowsPlusBottom":
            return PiRowsPlusBottom;
        case "pi:PiRowsPlusTop":
            return PiRowsPlusTop;
        case "pi:PiRows":
            return PiRows;
        case "pi:PiRssSimple":
            return PiRssSimple;
        case "pi:PiRss":
            return PiRss;
        case "pi:PiRug":
            return PiRug;
        case "pi:PiRuler":
            return PiRuler;
        case "pi:PiSailboat":
            return PiSailboat;
        case "pi:PiScales":
            return PiScales;
        case "pi:PiScanSmiley":
            return PiScanSmiley;
        case "pi:PiScan":
            return PiScan;
        case "pi:PiScissors":
            return PiScissors;
        case "pi:PiScooter":
            return PiScooter;
        case "pi:PiScreencast":
            return PiScreencast;
        case "pi:PiScrewdriver":
            return PiScrewdriver;
        case "pi:PiScribbleLoop":
            return PiScribbleLoop;
        case "pi:PiScribble":
            return PiScribble;
        case "pi:PiScroll":
            return PiScroll;
        case "pi:PiSealCheck":
            return PiSealCheck;
        case "pi:PiSealPercent":
            return PiSealPercent;
        case "pi:PiSealQuestion":
            return PiSealQuestion;
        case "pi:PiSealWarning":
            return PiSealWarning;
        case "pi:PiSeal":
            return PiSeal;
        case "pi:PiSeat":
            return PiSeat;
        case "pi:PiSeatbelt":
            return PiSeatbelt;
        case "pi:PiSecurityCamera":
            return PiSecurityCamera;
        case "pi:PiSelectionAll":
            return PiSelectionAll;
        case "pi:PiSelectionBackground":
            return PiSelectionBackground;
        case "pi:PiSelectionForeground":
            return PiSelectionForeground;
        case "pi:PiSelectionInverse":
            return PiSelectionInverse;
        case "pi:PiSelectionPlus":
            return PiSelectionPlus;
        case "pi:PiSelectionSlash":
            return PiSelectionSlash;
        case "pi:PiSelection":
            return PiSelection;
        case "pi:PiShapes":
            return PiShapes;
        case "pi:PiShareFat":
            return PiShareFat;
        case "pi:PiShareNetwork":
            return PiShareNetwork;
        case "pi:PiShare":
            return PiShare;
        case "pi:PiShieldCheck":
            return PiShieldCheck;
        case "pi:PiShieldCheckered":
            return PiShieldCheckered;
        case "pi:PiShieldChevron":
            return PiShieldChevron;
        case "pi:PiShieldPlus":
            return PiShieldPlus;
        case "pi:PiShieldSlash":
            return PiShieldSlash;
        case "pi:PiShieldStar":
            return PiShieldStar;
        case "pi:PiShieldWarning":
            return PiShieldWarning;
        case "pi:PiShield":
            return PiShield;
        case "pi:PiShippingContainer":
            return PiShippingContainer;
        case "pi:PiShirtFolded":
            return PiShirtFolded;
        case "pi:PiShootingStar":
            return PiShootingStar;
        case "pi:PiShoppingBagOpen":
            return PiShoppingBagOpen;
        case "pi:PiShoppingBag":
            return PiShoppingBag;
        case "pi:PiShoppingCartSimple":
            return PiShoppingCartSimple;
        case "pi:PiShoppingCart":
            return PiShoppingCart;
        case "pi:PiShovel":
            return PiShovel;
        case "pi:PiShower":
            return PiShower;
        case "pi:PiShrimp":
            return PiShrimp;
        case "pi:PiShuffleAngular":
            return PiShuffleAngular;
        case "pi:PiShuffleSimple":
            return PiShuffleSimple;
        case "pi:PiShuffle":
            return PiShuffle;
        case "pi:PiSidebarSimple":
            return PiSidebarSimple;
        case "pi:PiSidebar":
            return PiSidebar;
        case "pi:PiSigma":
            return PiSigma;
        case "pi:PiSignIn":
            return PiSignIn;
        case "pi:PiSignOut":
            return PiSignOut;
        case "pi:PiSignature":
            return PiSignature;
        case "pi:PiSignpost":
            return PiSignpost;
        case "pi:PiSimCard":
            return PiSimCard;
        case "pi:PiSiren":
            return PiSiren;
        case "pi:PiSketchLogo":
            return PiSketchLogo;
        case "pi:PiSkipBackCircle":
            return PiSkipBackCircle;
        case "pi:PiSkipBack":
            return PiSkipBack;
        case "pi:PiSkipForwardCircle":
            return PiSkipForwardCircle;
        case "pi:PiSkipForward":
            return PiSkipForward;
        case "pi:PiSkull":
            return PiSkull;
        case "pi:PiSkypeLogo":
            return PiSkypeLogo;
        case "pi:PiSlackLogo":
            return PiSlackLogo;
        case "pi:PiSlidersHorizontal":
            return PiSlidersHorizontal;
        case "pi:PiSliders":
            return PiSliders;
        case "pi:PiSlideshow":
            return PiSlideshow;
        case "pi:PiSmileyAngry":
            return PiSmileyAngry;
        case "pi:PiSmileyBlank":
            return PiSmileyBlank;
        case "pi:PiSmileyMeh":
            return PiSmileyMeh;
        case "pi:PiSmileyMelting":
            return PiSmileyMelting;
        case "pi:PiSmileyNervous":
            return PiSmileyNervous;
        case "pi:PiSmileySad":
            return PiSmileySad;
        case "pi:PiSmileySticker":
            return PiSmileySticker;
        case "pi:PiSmileyWink":
            return PiSmileyWink;
        case "pi:PiSmileyXEyes":
            return PiSmileyXEyes;
        case "pi:PiSmiley":
            return PiSmiley;
        case "pi:PiSnapchatLogo":
            return PiSnapchatLogo;
        case "pi:PiSneakerMove":
            return PiSneakerMove;
        case "pi:PiSneaker":
            return PiSneaker;
        case "pi:PiSnowflake":
            return PiSnowflake;
        case "pi:PiSoccerBall":
            return PiSoccerBall;
        case "pi:PiSock":
            return PiSock;
        case "pi:PiSolarPanel":
            return PiSolarPanel;
        case "pi:PiSolarRoof":
            return PiSolarRoof;
        case "pi:PiSortAscending":
            return PiSortAscending;
        case "pi:PiSortDescending":
            return PiSortDescending;
        case "pi:PiSoundcloudLogo":
            return PiSoundcloudLogo;
        case "pi:PiSpade":
            return PiSpade;
        case "pi:PiSparkle":
            return PiSparkle;
        case "pi:PiSpeakerHifi":
            return PiSpeakerHifi;
        case "pi:PiSpeakerHigh":
            return PiSpeakerHigh;
        case "pi:PiSpeakerLow":
            return PiSpeakerLow;
        case "pi:PiSpeakerNone":
            return PiSpeakerNone;
        case "pi:PiSpeakerSimpleHigh":
            return PiSpeakerSimpleHigh;
        case "pi:PiSpeakerSimpleLow":
            return PiSpeakerSimpleLow;
        case "pi:PiSpeakerSimpleNone":
            return PiSpeakerSimpleNone;
        case "pi:PiSpeakerSimpleSlash":
            return PiSpeakerSimpleSlash;
        case "pi:PiSpeakerSimpleX":
            return PiSpeakerSimpleX;
        case "pi:PiSpeakerSlash":
            return PiSpeakerSlash;
        case "pi:PiSpeakerX":
            return PiSpeakerX;
        case "pi:PiSpeedometer":
            return PiSpeedometer;
        case "pi:PiSphere":
            return PiSphere;
        case "pi:PiSpinnerBall":
            return PiSpinnerBall;
        case "pi:PiSpinnerGap":
            return PiSpinnerGap;
        case "pi:PiSpinner":
            return PiSpinner;
        case "pi:PiSpiral":
            return PiSpiral;
        case "pi:PiSplitHorizontal":
            return PiSplitHorizontal;
        case "pi:PiSplitVertical":
            return PiSplitVertical;
        case "pi:PiSpotifyLogo":
            return PiSpotifyLogo;
        case "pi:PiSprayBottle":
            return PiSprayBottle;
        case "pi:PiSquareHalfBottom":
            return PiSquareHalfBottom;
        case "pi:PiSquareHalf":
            return PiSquareHalf;
        case "pi:PiSquareLogo":
            return PiSquareLogo;
        case "pi:PiSquareSplitHorizontal":
            return PiSquareSplitHorizontal;
        case "pi:PiSquareSplitVertical":
            return PiSquareSplitVertical;
        case "pi:PiSquare":
            return PiSquare;
        case "pi:PiSquaresFour":
            return PiSquaresFour;
        case "pi:PiStackMinus":
            return PiStackMinus;
        case "pi:PiStackOverflowLogo":
            return PiStackOverflowLogo;
        case "pi:PiStackPlus":
            return PiStackPlus;
        case "pi:PiStackSimple":
            return PiStackSimple;
        case "pi:PiStack":
            return PiStack;
        case "pi:PiStairs":
            return PiStairs;
        case "pi:PiStamp":
            return PiStamp;
        case "pi:PiStandardDefinition":
            return PiStandardDefinition;
        case "pi:PiStarAndCrescent":
            return PiStarAndCrescent;
        case "pi:PiStarFour":
            return PiStarFour;
        case "pi:PiStarHalf":
            return PiStarHalf;
        case "pi:PiStarOfDavid":
            return PiStarOfDavid;
        case "pi:PiStar":
            return PiStar;
        case "pi:PiSteamLogo":
            return PiSteamLogo;
        case "pi:PiSteeringWheel":
            return PiSteeringWheel;
        case "pi:PiSteps":
            return PiSteps;
        case "pi:PiStethoscope":
            return PiStethoscope;
        case "pi:PiSticker":
            return PiSticker;
        case "pi:PiStool":
            return PiStool;
        case "pi:PiStopCircle":
            return PiStopCircle;
        case "pi:PiStop":
            return PiStop;
        case "pi:PiStorefront":
            return PiStorefront;
        case "pi:PiStrategy":
            return PiStrategy;
        case "pi:PiStripeLogo":
            return PiStripeLogo;
        case "pi:PiStudent":
            return PiStudent;
        case "pi:PiSubsetOf":
            return PiSubsetOf;
        case "pi:PiSubsetProperOf":
            return PiSubsetProperOf;
        case "pi:PiSubtitlesSlash":
            return PiSubtitlesSlash;
        case "pi:PiSubtitles":
            return PiSubtitles;
        case "pi:PiSubtractSquare":
            return PiSubtractSquare;
        case "pi:PiSubtract":
            return PiSubtract;
        case "pi:PiSubway":
            return PiSubway;
        case "pi:PiSuitcaseRolling":
            return PiSuitcaseRolling;
        case "pi:PiSuitcaseSimple":
            return PiSuitcaseSimple;
        case "pi:PiSuitcase":
            return PiSuitcase;
        case "pi:PiSunDim":
            return PiSunDim;
        case "pi:PiSunHorizon":
            return PiSunHorizon;
        case "pi:PiSun":
            return PiSun;
        case "pi:PiSunglasses":
            return PiSunglasses;
        case "pi:PiSupersetOf":
            return PiSupersetOf;
        case "pi:PiSupersetProperOf":
            return PiSupersetProperOf;
        case "pi:PiSwap":
            return PiSwap;
        case "pi:PiSwatches":
            return PiSwatches;
        case "pi:PiSwimmingPool":
            return PiSwimmingPool;
        case "pi:PiSword":
            return PiSword;
        case "pi:PiSynagogue":
            return PiSynagogue;
        case "pi:PiSyringe":
            return PiSyringe;
        case "pi:PiTShirt":
            return PiTShirt;
        case "pi:PiTable":
            return PiTable;
        case "pi:PiTabs":
            return PiTabs;
        case "pi:PiTagChevron":
            return PiTagChevron;
        case "pi:PiTagSimple":
            return PiTagSimple;
        case "pi:PiTag":
            return PiTag;
        case "pi:PiTarget":
            return PiTarget;
        case "pi:PiTaxi":
            return PiTaxi;
        case "pi:PiTeaBag":
            return PiTeaBag;
        case "pi:PiTelegramLogo":
            return PiTelegramLogo;
        case "pi:PiTelevisionSimple":
            return PiTelevisionSimple;
        case "pi:PiTelevision":
            return PiTelevision;
        case "pi:PiTennisBall":
            return PiTennisBall;
        case "pi:PiTent":
            return PiTent;
        case "pi:PiTerminalWindow":
            return PiTerminalWindow;
        case "pi:PiTerminal":
            return PiTerminal;
        case "pi:PiTestTube":
            return PiTestTube;
        case "pi:PiTextAUnderline":
            return PiTextAUnderline;
        case "pi:PiTextAa":
            return PiTextAa;
        case "pi:PiTextAlignCenter":
            return PiTextAlignCenter;
        case "pi:PiTextAlignJustify":
            return PiTextAlignJustify;
        case "pi:PiTextAlignLeft":
            return PiTextAlignLeft;
        case "pi:PiTextAlignRight":
            return PiTextAlignRight;
        case "pi:PiTextB":
            return PiTextB;
        case "pi:PiTextColumns":
            return PiTextColumns;
        case "pi:PiTextHFive":
            return PiTextHFive;
        case "pi:PiTextHFour":
            return PiTextHFour;
        case "pi:PiTextHOne":
            return PiTextHOne;
        case "pi:PiTextHSix":
            return PiTextHSix;
        case "pi:PiTextHThree":
            return PiTextHThree;
        case "pi:PiTextHTwo":
            return PiTextHTwo;
        case "pi:PiTextH":
            return PiTextH;
        case "pi:PiTextIndent":
            return PiTextIndent;
        case "pi:PiTextItalic":
            return PiTextItalic;
        case "pi:PiTextOutdent":
            return PiTextOutdent;
        case "pi:PiTextStrikethrough":
            return PiTextStrikethrough;
        case "pi:PiTextSubscript":
            return PiTextSubscript;
        case "pi:PiTextSuperscript":
            return PiTextSuperscript;
        case "pi:PiTextTSlash":
            return PiTextTSlash;
        case "pi:PiTextT":
            return PiTextT;
        case "pi:PiTextUnderline":
            return PiTextUnderline;
        case "pi:PiTextbox":
            return PiTextbox;
        case "pi:PiThermometerCold":
            return PiThermometerCold;
        case "pi:PiThermometerHot":
            return PiThermometerHot;
        case "pi:PiThermometerSimple":
            return PiThermometerSimple;
        case "pi:PiThermometer":
            return PiThermometer;
        case "pi:PiThreadsLogo":
            return PiThreadsLogo;
        case "pi:PiThreeD":
            return PiThreeD;
        case "pi:PiThumbsDown":
            return PiThumbsDown;
        case "pi:PiThumbsUp":
            return PiThumbsUp;
        case "pi:PiTicket":
            return PiTicket;
        case "pi:PiTidalLogo":
            return PiTidalLogo;
        case "pi:PiTiktokLogo":
            return PiTiktokLogo;
        case "pi:PiTilde":
            return PiTilde;
        case "pi:PiTimer":
            return PiTimer;
        case "pi:PiTipJar":
            return PiTipJar;
        case "pi:PiTipi":
            return PiTipi;
        case "pi:PiTire":
            return PiTire;
        case "pi:PiToggleLeft":
            return PiToggleLeft;
        case "pi:PiToggleRight":
            return PiToggleRight;
        case "pi:PiToiletPaper":
            return PiToiletPaper;
        case "pi:PiToilet":
            return PiToilet;
        case "pi:PiToolbox":
            return PiToolbox;
        case "pi:PiTooth":
            return PiTooth;
        case "pi:PiTornado":
            return PiTornado;
        case "pi:PiToteSimple":
            return PiToteSimple;
        case "pi:PiTote":
            return PiTote;
        case "pi:PiTowel":
            return PiTowel;
        case "pi:PiTractor":
            return PiTractor;
        case "pi:PiTrademarkRegistered":
            return PiTrademarkRegistered;
        case "pi:PiTrademark":
            return PiTrademark;
        case "pi:PiTrafficCone":
            return PiTrafficCone;
        case "pi:PiTrafficSign":
            return PiTrafficSign;
        case "pi:PiTrafficSignal":
            return PiTrafficSignal;
        case "pi:PiTrainRegional":
            return PiTrainRegional;
        case "pi:PiTrainSimple":
            return PiTrainSimple;
        case "pi:PiTrain":
            return PiTrain;
        case "pi:PiTram":
            return PiTram;
        case "pi:PiTranslate":
            return PiTranslate;
        case "pi:PiTrashSimple":
            return PiTrashSimple;
        case "pi:PiTrash":
            return PiTrash;
        case "pi:PiTrayArrowDown":
            return PiTrayArrowDown;
        case "pi:PiTrayArrowUp":
            return PiTrayArrowUp;
        case "pi:PiTray":
            return PiTray;
        case "pi:PiTreasureChest":
            return PiTreasureChest;
        case "pi:PiTreeEvergreen":
            return PiTreeEvergreen;
        case "pi:PiTreePalm":
            return PiTreePalm;
        case "pi:PiTreeStructure":
            return PiTreeStructure;
        case "pi:PiTreeView":
            return PiTreeView;
        case "pi:PiTree":
            return PiTree;
        case "pi:PiTrendDown":
            return PiTrendDown;
        case "pi:PiTrendUp":
            return PiTrendUp;
        case "pi:PiTriangleDashed":
            return PiTriangleDashed;
        case "pi:PiTriangle":
            return PiTriangle;
        case "pi:PiTrolleySuitcase":
            return PiTrolleySuitcase;
        case "pi:PiTrolley":
            return PiTrolley;
        case "pi:PiTrophy":
            return PiTrophy;
        case "pi:PiTruckTrailer":
            return PiTruckTrailer;
        case "pi:PiTruck":
            return PiTruck;
        case "pi:PiTumblrLogo":
            return PiTumblrLogo;
        case "pi:PiTwitchLogo":
            return PiTwitchLogo;
        case "pi:PiTwitterLogo":
            return PiTwitterLogo;
        case "pi:PiUmbrellaSimple":
            return PiUmbrellaSimple;
        case "pi:PiUmbrella":
            return PiUmbrella;
        case "pi:PiUnion":
            return PiUnion;
        case "pi:PiUniteSquare":
            return PiUniteSquare;
        case "pi:PiUnite":
            return PiUnite;
        case "pi:PiUploadSimple":
            return PiUploadSimple;
        case "pi:PiUpload":
            return PiUpload;
        case "pi:PiUsb":
            return PiUsb;
        case "pi:PiUserCheck":
            return PiUserCheck;
        case "pi:PiUserCircleCheck":
            return PiUserCircleCheck;
        case "pi:PiUserCircleDashed":
            return PiUserCircleDashed;
        case "pi:PiUserCircleGear":
            return PiUserCircleGear;
        case "pi:PiUserCircleMinus":
            return PiUserCircleMinus;
        case "pi:PiUserCirclePlus":
            return PiUserCirclePlus;
        case "pi:PiUserCircle":
            return PiUserCircle;
        case "pi:PiUserFocus":
            return PiUserFocus;
        case "pi:PiUserGear":
            return PiUserGear;
        case "pi:PiUserList":
            return PiUserList;
        case "pi:PiUserMinus":
            return PiUserMinus;
        case "pi:PiUserPlus":
            return PiUserPlus;
        case "pi:PiUserRectangle":
            return PiUserRectangle;
        case "pi:PiUserSound":
            return PiUserSound;
        case "pi:PiUserSquare":
            return PiUserSquare;
        case "pi:PiUserSwitch":
            return PiUserSwitch;
        case "pi:PiUser":
            return PiUser;
        case "pi:PiUsersFour":
            return PiUsersFour;
        case "pi:PiUsersThree":
            return PiUsersThree;
        case "pi:PiUsers":
            return PiUsers;
        case "pi:PiVan":
            return PiVan;
        case "pi:PiVault":
            return PiVault;
        case "pi:PiVectorThree":
            return PiVectorThree;
        case "pi:PiVectorTwo":
            return PiVectorTwo;
        case "pi:PiVibrate":
            return PiVibrate;
        case "pi:PiVideoCameraSlash":
            return PiVideoCameraSlash;
        case "pi:PiVideoCamera":
            return PiVideoCamera;
        case "pi:PiVideoConference":
            return PiVideoConference;
        case "pi:PiVideo":
            return PiVideo;
        case "pi:PiVignette":
            return PiVignette;
        case "pi:PiVinylRecord":
            return PiVinylRecord;
        case "pi:PiVirtualReality":
            return PiVirtualReality;
        case "pi:PiVirus":
            return PiVirus;
        case "pi:PiVisor":
            return PiVisor;
        case "pi:PiVoicemail":
            return PiVoicemail;
        case "pi:PiVolleyball":
            return PiVolleyball;
        case "pi:PiWall":
            return PiWall;
        case "pi:PiWallet":
            return PiWallet;
        case "pi:PiWarehouse":
            return PiWarehouse;
        case "pi:PiWarningCircle":
            return PiWarningCircle;
        case "pi:PiWarningDiamond":
            return PiWarningDiamond;
        case "pi:PiWarningOctagon":
            return PiWarningOctagon;
        case "pi:PiWarning":
            return PiWarning;
        case "pi:PiWashingMachine":
            return PiWashingMachine;
        case "pi:PiWatch":
            return PiWatch;
        case "pi:PiWaveSawtooth":
            return PiWaveSawtooth;
        case "pi:PiWaveSine":
            return PiWaveSine;
        case "pi:PiWaveSquare":
            return PiWaveSquare;
        case "pi:PiWaveTriangle":
            return PiWaveTriangle;
        case "pi:PiWaveformSlash":
            return PiWaveformSlash;
        case "pi:PiWaveform":
            return PiWaveform;
        case "pi:PiWaves":
            return PiWaves;
        case "pi:PiWebcamSlash":
            return PiWebcamSlash;
        case "pi:PiWebcam":
            return PiWebcam;
        case "pi:PiWebhooksLogo":
            return PiWebhooksLogo;
        case "pi:PiWechatLogo":
            return PiWechatLogo;
        case "pi:PiWhatsappLogo":
            return PiWhatsappLogo;
        case "pi:PiWheelchairMotion":
            return PiWheelchairMotion;
        case "pi:PiWheelchair":
            return PiWheelchair;
        case "pi:PiWifiHigh":
            return PiWifiHigh;
        case "pi:PiWifiLow":
            return PiWifiLow;
        case "pi:PiWifiMedium":
            return PiWifiMedium;
        case "pi:PiWifiNone":
            return PiWifiNone;
        case "pi:PiWifiSlash":
            return PiWifiSlash;
        case "pi:PiWifiX":
            return PiWifiX;
        case "pi:PiWind":
            return PiWind;
        case "pi:PiWindmill":
            return PiWindmill;
        case "pi:PiWindowsLogo":
            return PiWindowsLogo;
        case "pi:PiWine":
            return PiWine;
        case "pi:PiWrench":
            return PiWrench;
        case "pi:PiXCircle":
            return PiXCircle;
        case "pi:PiXLogo":
            return PiXLogo;
        case "pi:PiXSquare":
            return PiXSquare;
        case "pi:PiX":
            return PiX;
        case "pi:PiYarn":
            return PiYarn;
        case "pi:PiYinYang":
            return PiYinYang;
        case "pi:PiYoutubeLogo":
            return PiYoutubeLogo;
        case "pi:PiAcornThin":
            return PiAcornThin;
        case "pi:PiAddressBookTabsThin":
            return PiAddressBookTabsThin;
        case "pi:PiAddressBookThin":
            return PiAddressBookThin;
        case "pi:PiAirTrafficControlThin":
            return PiAirTrafficControlThin;
        case "pi:PiAirplaneInFlightThin":
            return PiAirplaneInFlightThin;
        case "pi:PiAirplaneLandingThin":
            return PiAirplaneLandingThin;
        case "pi:PiAirplaneTakeoffThin":
            return PiAirplaneTakeoffThin;
        case "pi:PiAirplaneTaxiingThin":
            return PiAirplaneTaxiingThin;
        case "pi:PiAirplaneThin":
            return PiAirplaneThin;
        case "pi:PiAirplaneTiltThin":
            return PiAirplaneTiltThin;
        case "pi:PiAirplayThin":
            return PiAirplayThin;
        case "pi:PiAlarmThin":
            return PiAlarmThin;
        case "pi:PiAlienThin":
            return PiAlienThin;
        case "pi:PiAlignBottomSimpleThin":
            return PiAlignBottomSimpleThin;
        case "pi:PiAlignBottomThin":
            return PiAlignBottomThin;
        case "pi:PiAlignCenterHorizontalSimpleThin":
            return PiAlignCenterHorizontalSimpleThin;
        case "pi:PiAlignCenterHorizontalThin":
            return PiAlignCenterHorizontalThin;
        case "pi:PiAlignCenterVerticalSimpleThin":
            return PiAlignCenterVerticalSimpleThin;
        case "pi:PiAlignCenterVerticalThin":
            return PiAlignCenterVerticalThin;
        case "pi:PiAlignLeftSimpleThin":
            return PiAlignLeftSimpleThin;
        case "pi:PiAlignLeftThin":
            return PiAlignLeftThin;
        case "pi:PiAlignRightSimpleThin":
            return PiAlignRightSimpleThin;
        case "pi:PiAlignRightThin":
            return PiAlignRightThin;
        case "pi:PiAlignTopSimpleThin":
            return PiAlignTopSimpleThin;
        case "pi:PiAlignTopThin":
            return PiAlignTopThin;
        case "pi:PiAmazonLogoThin":
            return PiAmazonLogoThin;
        case "pi:PiAmbulanceThin":
            return PiAmbulanceThin;
        case "pi:PiAnchorSimpleThin":
            return PiAnchorSimpleThin;
        case "pi:PiAnchorThin":
            return PiAnchorThin;
        case "pi:PiAndroidLogoThin":
            return PiAndroidLogoThin;
        case "pi:PiAngleThin":
            return PiAngleThin;
        case "pi:PiAngularLogoThin":
            return PiAngularLogoThin;
        case "pi:PiApertureThin":
            return PiApertureThin;
        case "pi:PiAppStoreLogoThin":
            return PiAppStoreLogoThin;
        case "pi:PiAppWindowThin":
            return PiAppWindowThin;
        case "pi:PiAppleLogoThin":
            return PiAppleLogoThin;
        case "pi:PiApplePodcastsLogoThin":
            return PiApplePodcastsLogoThin;
        case "pi:PiApproximateEqualsThin":
            return PiApproximateEqualsThin;
        case "pi:PiArchiveThin":
            return PiArchiveThin;
        case "pi:PiArmchairThin":
            return PiArmchairThin;
        case "pi:PiArrowArcLeftThin":
            return PiArrowArcLeftThin;
        case "pi:PiArrowArcRightThin":
            return PiArrowArcRightThin;
        case "pi:PiArrowBendDoubleUpLeftThin":
            return PiArrowBendDoubleUpLeftThin;
        case "pi:PiArrowBendDoubleUpRightThin":
            return PiArrowBendDoubleUpRightThin;
        case "pi:PiArrowBendDownLeftThin":
            return PiArrowBendDownLeftThin;
        case "pi:PiArrowBendDownRightThin":
            return PiArrowBendDownRightThin;
        case "pi:PiArrowBendLeftDownThin":
            return PiArrowBendLeftDownThin;
        case "pi:PiArrowBendLeftUpThin":
            return PiArrowBendLeftUpThin;
        case "pi:PiArrowBendRightDownThin":
            return PiArrowBendRightDownThin;
        case "pi:PiArrowBendRightUpThin":
            return PiArrowBendRightUpThin;
        case "pi:PiArrowBendUpLeftThin":
            return PiArrowBendUpLeftThin;
        case "pi:PiArrowBendUpRightThin":
            return PiArrowBendUpRightThin;
        case "pi:PiArrowCircleDownLeftThin":
            return PiArrowCircleDownLeftThin;
        case "pi:PiArrowCircleDownRightThin":
            return PiArrowCircleDownRightThin;
        case "pi:PiArrowCircleDownThin":
            return PiArrowCircleDownThin;
        case "pi:PiArrowCircleLeftThin":
            return PiArrowCircleLeftThin;
        case "pi:PiArrowCircleRightThin":
            return PiArrowCircleRightThin;
        case "pi:PiArrowCircleUpLeftThin":
            return PiArrowCircleUpLeftThin;
        case "pi:PiArrowCircleUpRightThin":
            return PiArrowCircleUpRightThin;
        case "pi:PiArrowCircleUpThin":
            return PiArrowCircleUpThin;
        case "pi:PiArrowClockwiseThin":
            return PiArrowClockwiseThin;
        case "pi:PiArrowCounterClockwiseThin":
            return PiArrowCounterClockwiseThin;
        case "pi:PiArrowDownLeftThin":
            return PiArrowDownLeftThin;
        case "pi:PiArrowDownRightThin":
            return PiArrowDownRightThin;
        case "pi:PiArrowDownThin":
            return PiArrowDownThin;
        case "pi:PiArrowElbowDownLeftThin":
            return PiArrowElbowDownLeftThin;
        case "pi:PiArrowElbowDownRightThin":
            return PiArrowElbowDownRightThin;
        case "pi:PiArrowElbowLeftDownThin":
            return PiArrowElbowLeftDownThin;
        case "pi:PiArrowElbowLeftThin":
            return PiArrowElbowLeftThin;
        case "pi:PiArrowElbowLeftUpThin":
            return PiArrowElbowLeftUpThin;
        case "pi:PiArrowElbowRightDownThin":
            return PiArrowElbowRightDownThin;
        case "pi:PiArrowElbowRightThin":
            return PiArrowElbowRightThin;
        case "pi:PiArrowElbowRightUpThin":
            return PiArrowElbowRightUpThin;
        case "pi:PiArrowElbowUpLeftThin":
            return PiArrowElbowUpLeftThin;
        case "pi:PiArrowElbowUpRightThin":
            return PiArrowElbowUpRightThin;
        case "pi:PiArrowFatDownThin":
            return PiArrowFatDownThin;
        case "pi:PiArrowFatLeftThin":
            return PiArrowFatLeftThin;
        case "pi:PiArrowFatLineDownThin":
            return PiArrowFatLineDownThin;
        case "pi:PiArrowFatLineLeftThin":
            return PiArrowFatLineLeftThin;
        case "pi:PiArrowFatLineRightThin":
            return PiArrowFatLineRightThin;
        case "pi:PiArrowFatLineUpThin":
            return PiArrowFatLineUpThin;
        case "pi:PiArrowFatLinesDownThin":
            return PiArrowFatLinesDownThin;
        case "pi:PiArrowFatLinesLeftThin":
            return PiArrowFatLinesLeftThin;
        case "pi:PiArrowFatLinesRightThin":
            return PiArrowFatLinesRightThin;
        case "pi:PiArrowFatLinesUpThin":
            return PiArrowFatLinesUpThin;
        case "pi:PiArrowFatRightThin":
            return PiArrowFatRightThin;
        case "pi:PiArrowFatUpThin":
            return PiArrowFatUpThin;
        case "pi:PiArrowLeftThin":
            return PiArrowLeftThin;
        case "pi:PiArrowLineDownLeftThin":
            return PiArrowLineDownLeftThin;
        case "pi:PiArrowLineDownRightThin":
            return PiArrowLineDownRightThin;
        case "pi:PiArrowLineDownThin":
            return PiArrowLineDownThin;
        case "pi:PiArrowLineLeftThin":
            return PiArrowLineLeftThin;
        case "pi:PiArrowLineRightThin":
            return PiArrowLineRightThin;
        case "pi:PiArrowLineUpLeftThin":
            return PiArrowLineUpLeftThin;
        case "pi:PiArrowLineUpRightThin":
            return PiArrowLineUpRightThin;
        case "pi:PiArrowLineUpThin":
            return PiArrowLineUpThin;
        case "pi:PiArrowRightThin":
            return PiArrowRightThin;
        case "pi:PiArrowSquareDownLeftThin":
            return PiArrowSquareDownLeftThin;
        case "pi:PiArrowSquareDownRightThin":
            return PiArrowSquareDownRightThin;
        case "pi:PiArrowSquareDownThin":
            return PiArrowSquareDownThin;
        case "pi:PiArrowSquareInThin":
            return PiArrowSquareInThin;
        case "pi:PiArrowSquareLeftThin":
            return PiArrowSquareLeftThin;
        case "pi:PiArrowSquareOutThin":
            return PiArrowSquareOutThin;
        case "pi:PiArrowSquareRightThin":
            return PiArrowSquareRightThin;
        case "pi:PiArrowSquareUpLeftThin":
            return PiArrowSquareUpLeftThin;
        case "pi:PiArrowSquareUpRightThin":
            return PiArrowSquareUpRightThin;
        case "pi:PiArrowSquareUpThin":
            return PiArrowSquareUpThin;
        case "pi:PiArrowUDownLeftThin":
            return PiArrowUDownLeftThin;
        case "pi:PiArrowUDownRightThin":
            return PiArrowUDownRightThin;
        case "pi:PiArrowULeftDownThin":
            return PiArrowULeftDownThin;
        case "pi:PiArrowULeftUpThin":
            return PiArrowULeftUpThin;
        case "pi:PiArrowURightDownThin":
            return PiArrowURightDownThin;
        case "pi:PiArrowURightUpThin":
            return PiArrowURightUpThin;
        case "pi:PiArrowUUpLeftThin":
            return PiArrowUUpLeftThin;
        case "pi:PiArrowUUpRightThin":
            return PiArrowUUpRightThin;
        case "pi:PiArrowUpLeftThin":
            return PiArrowUpLeftThin;
        case "pi:PiArrowUpRightThin":
            return PiArrowUpRightThin;
        case "pi:PiArrowUpThin":
            return PiArrowUpThin;
        case "pi:PiArrowsClockwiseThin":
            return PiArrowsClockwiseThin;
        case "pi:PiArrowsCounterClockwiseThin":
            return PiArrowsCounterClockwiseThin;
        case "pi:PiArrowsDownUpThin":
            return PiArrowsDownUpThin;
        case "pi:PiArrowsHorizontalThin":
            return PiArrowsHorizontalThin;
        case "pi:PiArrowsInCardinalThin":
            return PiArrowsInCardinalThin;
        case "pi:PiArrowsInLineHorizontalThin":
            return PiArrowsInLineHorizontalThin;
        case "pi:PiArrowsInLineVerticalThin":
            return PiArrowsInLineVerticalThin;
        case "pi:PiArrowsInSimpleThin":
            return PiArrowsInSimpleThin;
        case "pi:PiArrowsInThin":
            return PiArrowsInThin;
        case "pi:PiArrowsLeftRightThin":
            return PiArrowsLeftRightThin;
        case "pi:PiArrowsMergeThin":
            return PiArrowsMergeThin;
        case "pi:PiArrowsOutCardinalThin":
            return PiArrowsOutCardinalThin;
        case "pi:PiArrowsOutLineHorizontalThin":
            return PiArrowsOutLineHorizontalThin;
        case "pi:PiArrowsOutLineVerticalThin":
            return PiArrowsOutLineVerticalThin;
        case "pi:PiArrowsOutSimpleThin":
            return PiArrowsOutSimpleThin;
        case "pi:PiArrowsOutThin":
            return PiArrowsOutThin;
        case "pi:PiArrowsSplitThin":
            return PiArrowsSplitThin;
        case "pi:PiArrowsVerticalThin":
            return PiArrowsVerticalThin;
        case "pi:PiArticleMediumThin":
            return PiArticleMediumThin;
        case "pi:PiArticleNyTimesThin":
            return PiArticleNyTimesThin;
        case "pi:PiArticleThin":
            return PiArticleThin;
        case "pi:PiAsclepiusThin":
            return PiAsclepiusThin;
        case "pi:PiAsteriskSimpleThin":
            return PiAsteriskSimpleThin;
        case "pi:PiAsteriskThin":
            return PiAsteriskThin;
        case "pi:PiAtThin":
            return PiAtThin;
        case "pi:PiAtomThin":
            return PiAtomThin;
        case "pi:PiAvocadoThin":
            return PiAvocadoThin;
        case "pi:PiAxeThin":
            return PiAxeThin;
        case "pi:PiBabyCarriageThin":
            return PiBabyCarriageThin;
        case "pi:PiBabyThin":
            return PiBabyThin;
        case "pi:PiBackpackThin":
            return PiBackpackThin;
        case "pi:PiBackspaceThin":
            return PiBackspaceThin;
        case "pi:PiBagSimpleThin":
            return PiBagSimpleThin;
        case "pi:PiBagThin":
            return PiBagThin;
        case "pi:PiBalloonThin":
            return PiBalloonThin;
        case "pi:PiBandaidsThin":
            return PiBandaidsThin;
        case "pi:PiBankThin":
            return PiBankThin;
        case "pi:PiBarbellThin":
            return PiBarbellThin;
        case "pi:PiBarcodeThin":
            return PiBarcodeThin;
        case "pi:PiBarnThin":
            return PiBarnThin;
        case "pi:PiBarricadeThin":
            return PiBarricadeThin;
        case "pi:PiBaseballCapThin":
            return PiBaseballCapThin;
        case "pi:PiBaseballHelmetThin":
            return PiBaseballHelmetThin;
        case "pi:PiBaseballThin":
            return PiBaseballThin;
        case "pi:PiBasketThin":
            return PiBasketThin;
        case "pi:PiBasketballThin":
            return PiBasketballThin;
        case "pi:PiBathtubThin":
            return PiBathtubThin;
        case "pi:PiBatteryChargingThin":
            return PiBatteryChargingThin;
        case "pi:PiBatteryChargingVerticalThin":
            return PiBatteryChargingVerticalThin;
        case "pi:PiBatteryEmptyThin":
            return PiBatteryEmptyThin;
        case "pi:PiBatteryFullThin":
            return PiBatteryFullThin;
        case "pi:PiBatteryHighThin":
            return PiBatteryHighThin;
        case "pi:PiBatteryLowThin":
            return PiBatteryLowThin;
        case "pi:PiBatteryMediumThin":
            return PiBatteryMediumThin;
        case "pi:PiBatteryPlusThin":
            return PiBatteryPlusThin;
        case "pi:PiBatteryPlusVerticalThin":
            return PiBatteryPlusVerticalThin;
        case "pi:PiBatteryVerticalEmptyThin":
            return PiBatteryVerticalEmptyThin;
        case "pi:PiBatteryVerticalFullThin":
            return PiBatteryVerticalFullThin;
        case "pi:PiBatteryVerticalHighThin":
            return PiBatteryVerticalHighThin;
        case "pi:PiBatteryVerticalLowThin":
            return PiBatteryVerticalLowThin;
        case "pi:PiBatteryVerticalMediumThin":
            return PiBatteryVerticalMediumThin;
        case "pi:PiBatteryWarningThin":
            return PiBatteryWarningThin;
        case "pi:PiBatteryWarningVerticalThin":
            return PiBatteryWarningVerticalThin;
        case "pi:PiBeachBallThin":
            return PiBeachBallThin;
        case "pi:PiBeanieThin":
            return PiBeanieThin;
        case "pi:PiBedThin":
            return PiBedThin;
        case "pi:PiBeerBottleThin":
            return PiBeerBottleThin;
        case "pi:PiBeerSteinThin":
            return PiBeerSteinThin;
        case "pi:PiBehanceLogoThin":
            return PiBehanceLogoThin;
        case "pi:PiBellRingingThin":
            return PiBellRingingThin;
        case "pi:PiBellSimpleRingingThin":
            return PiBellSimpleRingingThin;
        case "pi:PiBellSimpleSlashThin":
            return PiBellSimpleSlashThin;
        case "pi:PiBellSimpleThin":
            return PiBellSimpleThin;
        case "pi:PiBellSimpleZThin":
            return PiBellSimpleZThin;
        case "pi:PiBellSlashThin":
            return PiBellSlashThin;
        case "pi:PiBellThin":
            return PiBellThin;
        case "pi:PiBellZThin":
            return PiBellZThin;
        case "pi:PiBeltThin":
            return PiBeltThin;
        case "pi:PiBezierCurveThin":
            return PiBezierCurveThin;
        case "pi:PiBicycleThin":
            return PiBicycleThin;
        case "pi:PiBinaryThin":
            return PiBinaryThin;
        case "pi:PiBinocularsThin":
            return PiBinocularsThin;
        case "pi:PiBiohazardThin":
            return PiBiohazardThin;
        case "pi:PiBirdThin":
            return PiBirdThin;
        case "pi:PiBlueprintThin":
            return PiBlueprintThin;
        case "pi:PiBluetoothConnectedThin":
            return PiBluetoothConnectedThin;
        case "pi:PiBluetoothSlashThin":
            return PiBluetoothSlashThin;
        case "pi:PiBluetoothThin":
            return PiBluetoothThin;
        case "pi:PiBluetoothXThin":
            return PiBluetoothXThin;
        case "pi:PiBoatThin":
            return PiBoatThin;
        case "pi:PiBombThin":
            return PiBombThin;
        case "pi:PiBoneThin":
            return PiBoneThin;
        case "pi:PiBookBookmarkThin":
            return PiBookBookmarkThin;
        case "pi:PiBookOpenTextThin":
            return PiBookOpenTextThin;
        case "pi:PiBookOpenThin":
            return PiBookOpenThin;
        case "pi:PiBookOpenUserThin":
            return PiBookOpenUserThin;
        case "pi:PiBookThin":
            return PiBookThin;
        case "pi:PiBookmarkSimpleThin":
            return PiBookmarkSimpleThin;
        case "pi:PiBookmarkThin":
            return PiBookmarkThin;
        case "pi:PiBookmarksSimpleThin":
            return PiBookmarksSimpleThin;
        case "pi:PiBookmarksThin":
            return PiBookmarksThin;
        case "pi:PiBooksThin":
            return PiBooksThin;
        case "pi:PiBootThin":
            return PiBootThin;
        case "pi:PiBoulesThin":
            return PiBoulesThin;
        case "pi:PiBoundingBoxThin":
            return PiBoundingBoxThin;
        case "pi:PiBowlFoodThin":
            return PiBowlFoodThin;
        case "pi:PiBowlSteamThin":
            return PiBowlSteamThin;
        case "pi:PiBowlingBallThin":
            return PiBowlingBallThin;
        case "pi:PiBoxArrowDownThin":
            return PiBoxArrowDownThin;
        case "pi:PiBoxArrowUpThin":
            return PiBoxArrowUpThin;
        case "pi:PiBoxingGloveThin":
            return PiBoxingGloveThin;
        case "pi:PiBracketsAngleThin":
            return PiBracketsAngleThin;
        case "pi:PiBracketsCurlyThin":
            return PiBracketsCurlyThin;
        case "pi:PiBracketsRoundThin":
            return PiBracketsRoundThin;
        case "pi:PiBracketsSquareThin":
            return PiBracketsSquareThin;
        case "pi:PiBrainThin":
            return PiBrainThin;
        case "pi:PiBrandyThin":
            return PiBrandyThin;
        case "pi:PiBreadThin":
            return PiBreadThin;
        case "pi:PiBridgeThin":
            return PiBridgeThin;
        case "pi:PiBriefcaseMetalThin":
            return PiBriefcaseMetalThin;
        case "pi:PiBriefcaseThin":
            return PiBriefcaseThin;
        case "pi:PiBroadcastThin":
            return PiBroadcastThin;
        case "pi:PiBroomThin":
            return PiBroomThin;
        case "pi:PiBrowserThin":
            return PiBrowserThin;
        case "pi:PiBrowsersThin":
            return PiBrowsersThin;
        case "pi:PiBugBeetleThin":
            return PiBugBeetleThin;
        case "pi:PiBugDroidThin":
            return PiBugDroidThin;
        case "pi:PiBugThin":
            return PiBugThin;
        case "pi:PiBuildingApartmentThin":
            return PiBuildingApartmentThin;
        case "pi:PiBuildingOfficeThin":
            return PiBuildingOfficeThin;
        case "pi:PiBuildingThin":
            return PiBuildingThin;
        case "pi:PiBuildingsThin":
            return PiBuildingsThin;
        case "pi:PiBulldozerThin":
            return PiBulldozerThin;
        case "pi:PiBusThin":
            return PiBusThin;
        case "pi:PiButterflyThin":
            return PiButterflyThin;
        case "pi:PiCableCarThin":
            return PiCableCarThin;
        case "pi:PiCactusThin":
            return PiCactusThin;
        case "pi:PiCakeThin":
            return PiCakeThin;
        case "pi:PiCalculatorThin":
            return PiCalculatorThin;
        case "pi:PiCalendarBlankThin":
            return PiCalendarBlankThin;
        case "pi:PiCalendarCheckThin":
            return PiCalendarCheckThin;
        case "pi:PiCalendarDotThin":
            return PiCalendarDotThin;
        case "pi:PiCalendarDotsThin":
            return PiCalendarDotsThin;
        case "pi:PiCalendarHeartThin":
            return PiCalendarHeartThin;
        case "pi:PiCalendarMinusThin":
            return PiCalendarMinusThin;
        case "pi:PiCalendarPlusThin":
            return PiCalendarPlusThin;
        case "pi:PiCalendarSlashThin":
            return PiCalendarSlashThin;
        case "pi:PiCalendarStarThin":
            return PiCalendarStarThin;
        case "pi:PiCalendarThin":
            return PiCalendarThin;
        case "pi:PiCalendarXThin":
            return PiCalendarXThin;
        case "pi:PiCallBellThin":
            return PiCallBellThin;
        case "pi:PiCameraPlusThin":
            return PiCameraPlusThin;
        case "pi:PiCameraRotateThin":
            return PiCameraRotateThin;
        case "pi:PiCameraSlashThin":
            return PiCameraSlashThin;
        case "pi:PiCameraThin":
            return PiCameraThin;
        case "pi:PiCampfireThin":
            return PiCampfireThin;
        case "pi:PiCarBatteryThin":
            return PiCarBatteryThin;
        case "pi:PiCarProfileThin":
            return PiCarProfileThin;
        case "pi:PiCarSimpleThin":
            return PiCarSimpleThin;
        case "pi:PiCarThin":
            return PiCarThin;
        case "pi:PiCardholderThin":
            return PiCardholderThin;
        case "pi:PiCardsThin":
            return PiCardsThin;
        case "pi:PiCardsThreeThin":
            return PiCardsThreeThin;
        case "pi:PiCaretCircleDoubleDownThin":
            return PiCaretCircleDoubleDownThin;
        case "pi:PiCaretCircleDoubleLeftThin":
            return PiCaretCircleDoubleLeftThin;
        case "pi:PiCaretCircleDoubleRightThin":
            return PiCaretCircleDoubleRightThin;
        case "pi:PiCaretCircleDoubleUpThin":
            return PiCaretCircleDoubleUpThin;
        case "pi:PiCaretCircleDownThin":
            return PiCaretCircleDownThin;
        case "pi:PiCaretCircleLeftThin":
            return PiCaretCircleLeftThin;
        case "pi:PiCaretCircleRightThin":
            return PiCaretCircleRightThin;
        case "pi:PiCaretCircleUpDownThin":
            return PiCaretCircleUpDownThin;
        case "pi:PiCaretCircleUpThin":
            return PiCaretCircleUpThin;
        case "pi:PiCaretDoubleDownThin":
            return PiCaretDoubleDownThin;
        case "pi:PiCaretDoubleLeftThin":
            return PiCaretDoubleLeftThin;
        case "pi:PiCaretDoubleRightThin":
            return PiCaretDoubleRightThin;
        case "pi:PiCaretDoubleUpThin":
            return PiCaretDoubleUpThin;
        case "pi:PiCaretDownThin":
            return PiCaretDownThin;
        case "pi:PiCaretLeftThin":
            return PiCaretLeftThin;
        case "pi:PiCaretLineDownThin":
            return PiCaretLineDownThin;
        case "pi:PiCaretLineLeftThin":
            return PiCaretLineLeftThin;
        case "pi:PiCaretLineRightThin":
            return PiCaretLineRightThin;
        case "pi:PiCaretLineUpThin":
            return PiCaretLineUpThin;
        case "pi:PiCaretRightThin":
            return PiCaretRightThin;
        case "pi:PiCaretUpDownThin":
            return PiCaretUpDownThin;
        case "pi:PiCaretUpThin":
            return PiCaretUpThin;
        case "pi:PiCarrotThin":
            return PiCarrotThin;
        case "pi:PiCashRegisterThin":
            return PiCashRegisterThin;
        case "pi:PiCassetteTapeThin":
            return PiCassetteTapeThin;
        case "pi:PiCastleTurretThin":
            return PiCastleTurretThin;
        case "pi:PiCatThin":
            return PiCatThin;
        case "pi:PiCellSignalFullThin":
            return PiCellSignalFullThin;
        case "pi:PiCellSignalHighThin":
            return PiCellSignalHighThin;
        case "pi:PiCellSignalLowThin":
            return PiCellSignalLowThin;
        case "pi:PiCellSignalMediumThin":
            return PiCellSignalMediumThin;
        case "pi:PiCellSignalNoneThin":
            return PiCellSignalNoneThin;
        case "pi:PiCellSignalSlashThin":
            return PiCellSignalSlashThin;
        case "pi:PiCellSignalXThin":
            return PiCellSignalXThin;
        case "pi:PiCellTowerThin":
            return PiCellTowerThin;
        case "pi:PiCertificateThin":
            return PiCertificateThin;
        case "pi:PiChairThin":
            return PiChairThin;
        case "pi:PiChalkboardSimpleThin":
            return PiChalkboardSimpleThin;
        case "pi:PiChalkboardTeacherThin":
            return PiChalkboardTeacherThin;
        case "pi:PiChalkboardThin":
            return PiChalkboardThin;
        case "pi:PiChampagneThin":
            return PiChampagneThin;
        case "pi:PiChargingStationThin":
            return PiChargingStationThin;
        case "pi:PiChartBarHorizontalThin":
            return PiChartBarHorizontalThin;
        case "pi:PiChartBarThin":
            return PiChartBarThin;
        case "pi:PiChartDonutThin":
            return PiChartDonutThin;
        case "pi:PiChartLineDownThin":
            return PiChartLineDownThin;
        case "pi:PiChartLineThin":
            return PiChartLineThin;
        case "pi:PiChartLineUpThin":
            return PiChartLineUpThin;
        case "pi:PiChartPieSliceThin":
            return PiChartPieSliceThin;
        case "pi:PiChartPieThin":
            return PiChartPieThin;
        case "pi:PiChartPolarThin":
            return PiChartPolarThin;
        case "pi:PiChartScatterThin":
            return PiChartScatterThin;
        case "pi:PiChatCenteredDotsThin":
            return PiChatCenteredDotsThin;
        case "pi:PiChatCenteredSlashThin":
            return PiChatCenteredSlashThin;
        case "pi:PiChatCenteredTextThin":
            return PiChatCenteredTextThin;
        case "pi:PiChatCenteredThin":
            return PiChatCenteredThin;
        case "pi:PiChatCircleDotsThin":
            return PiChatCircleDotsThin;
        case "pi:PiChatCircleSlashThin":
            return PiChatCircleSlashThin;
        case "pi:PiChatCircleTextThin":
            return PiChatCircleTextThin;
        case "pi:PiChatCircleThin":
            return PiChatCircleThin;
        case "pi:PiChatDotsThin":
            return PiChatDotsThin;
        case "pi:PiChatSlashThin":
            return PiChatSlashThin;
        case "pi:PiChatTeardropDotsThin":
            return PiChatTeardropDotsThin;
        case "pi:PiChatTeardropSlashThin":
            return PiChatTeardropSlashThin;
        case "pi:PiChatTeardropTextThin":
            return PiChatTeardropTextThin;
        case "pi:PiChatTeardropThin":
            return PiChatTeardropThin;
        case "pi:PiChatTextThin":
            return PiChatTextThin;
        case "pi:PiChatThin":
            return PiChatThin;
        case "pi:PiChatsCircleThin":
            return PiChatsCircleThin;
        case "pi:PiChatsTeardropThin":
            return PiChatsTeardropThin;
        case "pi:PiChatsThin":
            return PiChatsThin;
        case "pi:PiCheckCircleThin":
            return PiCheckCircleThin;
        case "pi:PiCheckFatThin":
            return PiCheckFatThin;
        case "pi:PiCheckSquareOffsetThin":
            return PiCheckSquareOffsetThin;
        case "pi:PiCheckSquareThin":
            return PiCheckSquareThin;
        case "pi:PiCheckThin":
            return PiCheckThin;
        case "pi:PiCheckerboardThin":
            return PiCheckerboardThin;
        case "pi:PiChecksThin":
            return PiChecksThin;
        case "pi:PiCheersThin":
            return PiCheersThin;
        case "pi:PiCheeseThin":
            return PiCheeseThin;
        case "pi:PiChefHatThin":
            return PiChefHatThin;
        case "pi:PiCherriesThin":
            return PiCherriesThin;
        case "pi:PiChurchThin":
            return PiChurchThin;
        case "pi:PiCigaretteSlashThin":
            return PiCigaretteSlashThin;
        case "pi:PiCigaretteThin":
            return PiCigaretteThin;
        case "pi:PiCircleDashedThin":
            return PiCircleDashedThin;
        case "pi:PiCircleHalfThin":
            return PiCircleHalfThin;
        case "pi:PiCircleHalfTiltThin":
            return PiCircleHalfTiltThin;
        case "pi:PiCircleNotchThin":
            return PiCircleNotchThin;
        case "pi:PiCircleThin":
            return PiCircleThin;
        case "pi:PiCirclesFourThin":
            return PiCirclesFourThin;
        case "pi:PiCirclesThreePlusThin":
            return PiCirclesThreePlusThin;
        case "pi:PiCirclesThreeThin":
            return PiCirclesThreeThin;
        case "pi:PiCircuitryThin":
            return PiCircuitryThin;
        case "pi:PiCityThin":
            return PiCityThin;
        case "pi:PiClipboardTextThin":
            return PiClipboardTextThin;
        case "pi:PiClipboardThin":
            return PiClipboardThin;
        case "pi:PiClockAfternoonThin":
            return PiClockAfternoonThin;
        case "pi:PiClockClockwiseThin":
            return PiClockClockwiseThin;
        case "pi:PiClockCountdownThin":
            return PiClockCountdownThin;
        case "pi:PiClockCounterClockwiseThin":
            return PiClockCounterClockwiseThin;
        case "pi:PiClockThin":
            return PiClockThin;
        case "pi:PiClockUserThin":
            return PiClockUserThin;
        case "pi:PiClosedCaptioningThin":
            return PiClosedCaptioningThin;
        case "pi:PiCloudArrowDownThin":
            return PiCloudArrowDownThin;
        case "pi:PiCloudArrowUpThin":
            return PiCloudArrowUpThin;
        case "pi:PiCloudCheckThin":
            return PiCloudCheckThin;
        case "pi:PiCloudFogThin":
            return PiCloudFogThin;
        case "pi:PiCloudLightningThin":
            return PiCloudLightningThin;
        case "pi:PiCloudMoonThin":
            return PiCloudMoonThin;
        case "pi:PiCloudRainThin":
            return PiCloudRainThin;
        case "pi:PiCloudSlashThin":
            return PiCloudSlashThin;
        case "pi:PiCloudSnowThin":
            return PiCloudSnowThin;
        case "pi:PiCloudSunThin":
            return PiCloudSunThin;
        case "pi:PiCloudThin":
            return PiCloudThin;
        case "pi:PiCloudWarningThin":
            return PiCloudWarningThin;
        case "pi:PiCloudXThin":
            return PiCloudXThin;
        case "pi:PiCloverThin":
            return PiCloverThin;
        case "pi:PiClubThin":
            return PiClubThin;
        case "pi:PiCoatHangerThin":
            return PiCoatHangerThin;
        case "pi:PiCodaLogoThin":
            return PiCodaLogoThin;
        case "pi:PiCodeBlockThin":
            return PiCodeBlockThin;
        case "pi:PiCodeSimpleThin":
            return PiCodeSimpleThin;
        case "pi:PiCodeThin":
            return PiCodeThin;
        case "pi:PiCodepenLogoThin":
            return PiCodepenLogoThin;
        case "pi:PiCodesandboxLogoThin":
            return PiCodesandboxLogoThin;
        case "pi:PiCoffeeBeanThin":
            return PiCoffeeBeanThin;
        case "pi:PiCoffeeThin":
            return PiCoffeeThin;
        case "pi:PiCoinThin":
            return PiCoinThin;
        case "pi:PiCoinVerticalThin":
            return PiCoinVerticalThin;
        case "pi:PiCoinsThin":
            return PiCoinsThin;
        case "pi:PiColumnsPlusLeftThin":
            return PiColumnsPlusLeftThin;
        case "pi:PiColumnsPlusRightThin":
            return PiColumnsPlusRightThin;
        case "pi:PiColumnsThin":
            return PiColumnsThin;
        case "pi:PiCommandThin":
            return PiCommandThin;
        case "pi:PiCompassRoseThin":
            return PiCompassRoseThin;
        case "pi:PiCompassThin":
            return PiCompassThin;
        case "pi:PiCompassToolThin":
            return PiCompassToolThin;
        case "pi:PiComputerTowerThin":
            return PiComputerTowerThin;
        case "pi:PiConfettiThin":
            return PiConfettiThin;
        case "pi:PiContactlessPaymentThin":
            return PiContactlessPaymentThin;
        case "pi:PiControlThin":
            return PiControlThin;
        case "pi:PiCookieThin":
            return PiCookieThin;
        case "pi:PiCookingPotThin":
            return PiCookingPotThin;
        case "pi:PiCopySimpleThin":
            return PiCopySimpleThin;
        case "pi:PiCopyThin":
            return PiCopyThin;
        case "pi:PiCopyleftThin":
            return PiCopyleftThin;
        case "pi:PiCopyrightThin":
            return PiCopyrightThin;
        case "pi:PiCornersInThin":
            return PiCornersInThin;
        case "pi:PiCornersOutThin":
            return PiCornersOutThin;
        case "pi:PiCouchThin":
            return PiCouchThin;
        case "pi:PiCourtBasketballThin":
            return PiCourtBasketballThin;
        case "pi:PiCowThin":
            return PiCowThin;
        case "pi:PiCowboyHatThin":
            return PiCowboyHatThin;
        case "pi:PiCpuThin":
            return PiCpuThin;
        case "pi:PiCraneThin":
            return PiCraneThin;
        case "pi:PiCraneTowerThin":
            return PiCraneTowerThin;
        case "pi:PiCreditCardThin":
            return PiCreditCardThin;
        case "pi:PiCricketThin":
            return PiCricketThin;
    }
}
