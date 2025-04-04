import type {IconType} from "react-icons";

import {
    TbArrowBadgeRight,
    TbArrowBadgeUp,
    TbArrowBarBoth,
    TbArrowBarDown,
    TbArrowBarLeft,
    TbArrowBarRight,
    TbArrowBarToDown,
    TbArrowBarToLeft,
    TbArrowBarToRight,
    TbArrowBarToUp,
    TbArrowBarUp,
    TbArrowBearLeft2,
    TbArrowBearLeft,
    TbArrowBearRight2,
    TbArrowBearRight,
    TbArrowBigDownLine,
    TbArrowBigDownLines,
    TbArrowBigDown,
    TbArrowBigLeftLine,
    TbArrowBigLeftLines,
    TbArrowBigLeft,
    TbArrowBigRightLine,
    TbArrowBigRightLines,
    TbArrowBigRight,
    TbArrowBigUpLine,
    TbArrowBigUpLines,
    TbArrowBigUp,
    TbArrowBounce,
    TbArrowCapsule,
    TbArrowCurveLeft,
    TbArrowCurveRight,
    TbArrowDownBar,
    TbArrowDownCircle,
    TbArrowDownDashed,
    TbArrowDownFromArc,
    TbArrowDownLeftCircle,
    TbArrowDownLeft,
    TbArrowDownRhombus,
    TbArrowDownRightCircle,
    TbArrowDownRight,
    TbArrowDownSquare,
    TbArrowDownTail,
    TbArrowDownToArc,
    TbArrowDown,
    TbArrowElbowLeft,
    TbArrowElbowRight,
    TbArrowFork,
    TbArrowForwardUpDouble,
    TbArrowForwardUp,
    TbArrowForward,
    TbArrowGuide,
    TbArrowIteration,
    TbArrowLeftBar,
    TbArrowLeftCircle,
    TbArrowLeftDashed,
    TbArrowLeftFromArc,
    TbArrowLeftRhombus,
    TbArrowLeftRight,
    TbArrowLeftSquare,
    TbArrowLeftTail,
    TbArrowLeftToArc,
    TbArrowLeft,
    TbArrowLoopLeft2,
    TbArrowLoopLeft,
    TbArrowLoopRight2,
    TbArrowLoopRight,
    TbArrowMergeAltLeft,
    TbArrowMergeAltRight,
    TbArrowMergeBoth,
    TbArrowMergeLeft,
    TbArrowMergeRight,
    TbArrowMerge,
    TbArrowMoveDown,
    TbArrowMoveLeft,
    TbArrowMoveRight,
    TbArrowMoveUp,
    TbArrowNarrowDownDashed,
    TbArrowNarrowDown,
    TbArrowNarrowLeftDashed,
    TbArrowNarrowLeft,
    TbArrowNarrowRightDashed,
    TbArrowNarrowRight,
    TbArrowNarrowUpDashed,
    TbArrowNarrowUp,
    TbArrowRampLeft2,
    TbArrowRampLeft3,
    TbArrowRampLeft,
    TbArrowRampRight2,
    TbArrowRampRight3,
    TbArrowRampRight,
    TbArrowRightBar,
    TbArrowRightCircle,
    TbArrowRightDashed,
    TbArrowRightFromArc,
    TbArrowRightRhombus,
    TbArrowRightSquare,
    TbArrowRightTail,
    TbArrowRightToArc,
    TbArrowRight,
    TbArrowRotaryFirstLeft,
    TbArrowRotaryFirstRight,
    TbArrowRotaryLastLeft,
    TbArrowRotaryLastRight,
    TbArrowRotaryLeft,
    TbArrowRotaryRight,
    TbArrowRotaryStraight,
    TbArrowRoundaboutLeft,
    TbArrowRoundaboutRight,
    TbArrowSharpTurnLeft,
    TbArrowSharpTurnRight,
    TbArrowUpBar,
    TbArrowUpCircle,
    TbArrowUpDashed,
    TbArrowUpFromArc,
    TbArrowUpLeftCircle,
    TbArrowUpLeft,
    TbArrowUpRhombus,
    TbArrowUpRightCircle,
    TbArrowUpRight,
    TbArrowUpSquare,
    TbArrowUpTail,
    TbArrowUpToArc,
    TbArrowUp,
    TbArrowWaveLeftDown,
    TbArrowWaveLeftUp,
    TbArrowWaveRightDown,
    TbArrowWaveRightUp,
    TbArrowZigZag,
    TbArrowsCross,
    TbArrowsDiagonal2,
    TbArrowsDiagonalMinimize2,
    TbArrowsDiagonalMinimize,
    TbArrowsDiagonal,
    TbArrowsDiff,
    TbArrowsDoubleNeSw,
    TbArrowsDoubleNwSe,
    TbArrowsDoubleSeNw,
    TbArrowsDoubleSwNe,
    TbArrowsDownUp,
    TbArrowsDown,
    TbArrowsExchange2,
    TbArrowsExchange,
    TbArrowsHorizontal,
    TbArrowsJoin2,
    TbArrowsJoin,
    TbArrowsLeftDown,
    TbArrowsLeftRight,
    TbArrowsLeft,
    TbArrowsMaximize,
    TbArrowsMinimize,
    TbArrowsMoveHorizontal,
    TbArrowsMoveVertical,
    TbArrowsMove,
    TbArrowsRandom,
    TbArrowsRightDown,
    TbArrowsRightLeft,
    TbArrowsRight,
    TbArrowsShuffle2,
    TbArrowsShuffle,
    TbArrowsSort,
    TbArrowsSplit2,
    TbArrowsSplit,
    TbArrowsTransferDown,
    TbArrowsTransferUpDown,
    TbArrowsTransferUp,
    TbArrowsUpDown,
    TbArrowsUpLeft,
    TbArrowsUpRight,
    TbArrowsUp,
    TbArrowsVertical,
    TbArtboardOff,
    TbArtboard,
    TbArticleOff,
    TbArticle,
    TbAspectRatioOff,
    TbAspectRatio,
    TbAssemblyOff,
    TbAssembly,
    TbAsset,
    TbAsteriskSimple,
    TbAsterisk,
    TbAtOff,
    TbAt,
    TbAtom2,
    TbAtomOff,
    TbAtom,
    TbAugmentedReality2,
    TbAugmentedRealityOff,
    TbAugmentedReality,
    TbAuth2Fa,
    TbAutomaticGearbox,
    TbAutomation,
    TbAvocado,
    TbAwardOff,
    TbAward,
    TbAxe,
    TbAxisX,
    TbAxisY,
    TbBabyBottle,
    TbBabyCarriage,
    TbBackground,
    TbBackhoe,
    TbBackpackOff,
    TbBackpack,
    TbBackslash,
    TbBackspace,
    TbBadge2K,
    TbBadge3D,
    TbBadge3K,
    TbBadge4K,
    TbBadge5K,
    TbBadge8K,
    TbBadgeAdOff,
    TbBadgeAd,
    TbBadgeAr,
    TbBadgeCc,
    TbBadgeHd,
    TbBadgeOff,
    TbBadgeSd,
    TbBadgeTm,
    TbBadgeVo,
    TbBadgeVr,
    TbBadgeWc,
    TbBadge,
    TbBadgesOff,
    TbBadges,
    TbBaguette,
    TbBallAmericanFootballOff,
    TbBallAmericanFootball,
    TbBallBaseball,
    TbBallBasketball,
    TbBallBowling,
    TbBallFootballOff,
    TbBallFootball,
    TbBallTennis,
    TbBallVolleyball,
    TbBalloonOff,
    TbBalloon,
    TbBallpenOff,
    TbBallpen,
    TbBan,
    TbBandageOff,
    TbBandage,
    TbBarbellOff,
    TbBarbell,
    TbBarcodeOff,
    TbBarcode,
    TbBarrelOff,
    TbBarrel,
    TbBarrierBlockOff,
    TbBarrierBlock,
    TbBaselineDensityLarge,
    TbBaselineDensityMedium,
    TbBaselineDensitySmall,
    TbBaseline,
    TbBasketBolt,
    TbBasketCancel,
    TbBasketCheck,
    TbBasketCode,
    TbBasketCog,
    TbBasketDiscount,
    TbBasketDollar,
    TbBasketDown,
    TbBasketExclamation,
    TbBasketHeart,
    TbBasketMinus,
    TbBasketOff,
    TbBasketPause,
    TbBasketPin,
    TbBasketPlus,
    TbBasketQuestion,
    TbBasketSearch,
    TbBasketShare,
    TbBasketStar,
    TbBasketUp,
    TbBasketX,
    TbBasket,
    TbBat,
    TbBathOff,
    TbBath,
    TbBattery1,
    TbBattery2,
    TbBattery3,
    TbBattery4,
    TbBatteryAutomotive,
    TbBatteryCharging2,
    TbBatteryCharging,
    TbBatteryEco,
    TbBatteryExclamation,
    TbBatteryOff,
    TbBatterySpark,
    TbBatteryVertical1,
    TbBatteryVertical2,
    TbBatteryVertical3,
    TbBatteryVertical4,
    TbBatteryVerticalCharging2,
    TbBatteryVerticalCharging,
    TbBatteryVerticalEco,
    TbBatteryVerticalExclamation,
    TbBatteryVerticalOff,
    TbBatteryVertical,
    TbBattery,
    TbBeachOff,
    TbBeach,
    TbBedFlat,
    TbBedOff,
    TbBed,
    TbBeerOff,
    TbBeer,
    TbBellBolt,
    TbBellCancel,
    TbBellCheck,
    TbBellCode,
    TbBellCog,
    TbBellDollar,
    TbBellDown,
    TbBellExclamation,
    TbBellHeart,
    TbBellMinus,
    TbBellOff,
    TbBellPause,
    TbBellPin,
    TbBellPlus,
    TbBellQuestion,
    TbBellRinging2,
    TbBellRinging,
    TbBellSchool,
    TbBellSearch,
    TbBellShare,
    TbBellStar,
    TbBellUp,
    TbBellX,
    TbBellZ,
    TbBell,
    TbBeta,
    TbBible,
    TbBikeOff,
    TbBike,
    TbBinaryOff,
    TbBinaryTree2,
    TbBinaryTree,
    TbBinary,
    TbBinoculars,
    TbBiohazardOff,
    TbBiohazard,
    TbBlade,
    TbBleachChlorine,
    TbBleachNoChlorine,
    TbBleachOff,
    TbBleach,
    TbBlendMode,
    TbBlender,
    TbBlob,
    TbBlockquote,
    TbBlocks,
    TbBluetoothConnected,
    TbBluetoothOff,
    TbBluetoothX,
    TbBluetooth,
    TbBlurOff,
    TbBlur,
    TbBmp,
    TbBodyScan,
    TbBoldOff,
    TbBold,
    TbBoltOff,
    TbBolt,
    TbBomb,
    TbBoneOff,
    TbBone,
    TbBongOff,
    TbBong,
    TbBook2,
    TbBookDownload,
    TbBookOff,
    TbBookUpload,
    TbBook,
    TbBookmarkAi,
    TbBookmarkEdit,
    TbBookmarkMinus,
    TbBookmarkOff,
    TbBookmarkPlus,
    TbBookmarkQuestion,
    TbBookmark,
    TbBookmarksOff,
    TbBookmarks,
    TbBooksOff,
    TbBooks,
    TbBoom,
    TbBorderAll,
    TbBorderBottomPlus,
    TbBorderBottom,
    TbBorderCornerIos,
    TbBorderCornerPill,
    TbBorderCornerRounded,
    TbBorderCornerSquare,
    TbBorderCorners,
    TbBorderHorizontal,
    TbBorderInner,
    TbBorderLeftPlus,
    TbBorderLeft,
    TbBorderNone,
    TbBorderOuter,
    TbBorderRadius,
    TbBorderRightPlus,
    TbBorderRight,
    TbBorderSides,
    TbBorderStyle2,
    TbBorderStyle,
    TbBorderTopPlus,
    TbBorderTop,
    TbBorderVertical,
    TbBottleOff,
    TbBottle,
    TbBounceLeft,
    TbBounceRight,
    TbBow,
    TbBowlChopsticks,
    TbBowlSpoon,
    TbBowl,
    TbBowling,
    TbBoxAlignBottomLeft,
    TbBoxAlignBottomRight,
    TbBoxAlignBottom,
    TbBoxAlignLeft,
    TbBoxAlignRight,
    TbBoxAlignTopLeft,
    TbBoxAlignTopRight,
    TbBoxAlignTop,
    TbBoxMargin,
    TbBoxModel2Off,
    TbBoxModel2,
    TbBoxModelOff,
    TbBoxModel,
    TbBoxMultiple0,
    TbBoxMultiple1,
    TbBoxMultiple2,
    TbBoxMultiple3,
    TbBoxMultiple4,
    TbBoxMultiple5,
    TbBoxMultiple6,
    TbBoxMultiple7,
    TbBoxMultiple8,
    TbBoxMultiple9,
    TbBoxMultiple,
    TbBoxOff,
    TbBoxPadding,
    TbBox,
    TbBracesOff,
    TbBraces,
    TbBracketsAngleOff,
    TbBracketsAngle,
    TbBracketsContainEnd,
    TbBracketsContainStart,
    TbBracketsContain,
    TbBracketsOff,
    TbBrackets,
    TbBraille,
    TbBrain,
    TbBrand4Chan,
    TbBrandAbstract,
    TbBrandAdobeAfterEffect,
    TbBrandAdobeIllustrator,
    TbBrandAdobeIndesign,
    TbBrandAdobePhotoshop,
    TbBrandAdobePremier,
    TbBrandAdobeXd,
    TbBrandAdobe,
    TbBrandAdonisJs,
    TbBrandAirbnb,
    TbBrandAirtable,
    TbBrandAlgolia,
    TbBrandAlipay,
    TbBrandAlpineJs,
    TbBrandAmazon,
    TbBrandAmd,
    TbBrandAmie,
    TbBrandAmigo,
    TbBrandAmongUs,
    TbBrandAndroid,
    TbBrandAngular,
    TbBrandAnsible,
    TbBrandAo3,
    TbBrandAppgallery,
    TbBrandAppleArcade,
    TbBrandAppleNews,
    TbBrandApplePodcast,
    TbBrandApple,
    TbBrandAppstore,
    TbBrandArc,
    TbBrandAsana,
    TbBrandAstro,
    TbBrandAuth0,
    TbBrandAws,
    TbBrandAzure,
    TbBrandBackbone,
    TbBrandBadoo,
    TbBrandBaidu,
    TbBrandBandcamp,
    TbBrandBandlab,
    TbBrandBeats,
    TbBrandBebo,
    TbBrandBehance,
    TbBrandBilibili,
    TbBrandBinance,
    TbBrandBing,
    TbBrandBitbucket,
    TbBrandBlackberry,
    TbBrandBlender,
    TbBrandBlogger,
    TbBrandBluesky,
    TbBrandBooking,
    TbBrandBootstrap,
    TbBrandBulma,
    TbBrandBumble,
    TbBrandBunpo,
    TbBrandCSharp,
    TbBrandCake,
    TbBrandCakephp,
    TbBrandCampaignmonitor,
    TbBrandCarbon,
    TbBrandCashapp,
    TbBrandChrome,
    TbBrandCinema4D,
    TbBrandCitymapper,
    TbBrandCloudflare,
    TbBrandCodecov,
    TbBrandCodepen,
    TbBrandCodesandbox,
    TbBrandCohost,
    TbBrandCoinbase,
    TbBrandComedyCentral,
    TbBrandCoreos,
    TbBrandCouchdb,
    TbBrandCouchsurfing,
    TbBrandCpp,
    TbBrandCraft,
    TbBrandCrunchbase,
    TbBrandCss3,
    TbBrandCtemplar,
    TbBrandCucumber,
    TbBrandCupra,
    TbBrandCypress,
    TbBrandD3,
    TbBrandDatabricks,
    TbBrandDaysCounter,
    TbBrandDcos,
    TbBrandDebian,
    TbBrandDeezer,
    TbBrandDeliveroo,
    TbBrandDeno,
    TbBrandDenodo,
    TbBrandDeviantart,
    TbBrandDigg,
    TbBrandDingtalk,
    TbBrandDiscord,
    TbBrandDisney,
    TbBrandDisqus,
    TbBrandDjango,
    TbBrandDocker,
    TbBrandDoctrine,
    TbBrandDolbyDigital,
    TbBrandDouban,
    TbBrandDribbble,
    TbBrandDrops,
    TbBrandDrupal,
    TbBrandEdge,
    TbBrandElastic,
    TbBrandElectronicArts,
    TbBrandEmber,
    TbBrandEnvato,
    TbBrandEtsy,
    TbBrandEvernote,
    TbBrandFacebook,
    TbBrandFeedly,
    TbBrandFigma,
    TbBrandFilezilla,
    TbBrandFinder,
    TbBrandFirebase,
    TbBrandFirefox,
    TbBrandFiverr,
    TbBrandFlickr,
    TbBrandFlightradar24,
    TbBrandFlipboard,
    TbBrandFlutter,
    TbBrandFortnite,
    TbBrandFoursquare,
    TbBrandFramerMotion,
    TbBrandFramer,
    TbBrandFunimation,
    TbBrandGatsby,
    TbBrandGit,
    TbBrandGithubCopilot,
    TbBrandGithub,
    TbBrandGitlab,
    TbBrandGmail,
    TbBrandGolang,
    TbBrandGoogleAnalytics,
    TbBrandGoogleBigQuery,
    TbBrandGoogleDrive,
    TbBrandGoogleFit,
    TbBrandGoogleHome,
    TbBrandGoogleMaps,
    TbBrandGoogleOne,
    TbBrandGooglePhotos,
    TbBrandGooglePlay,
    TbBrandGooglePodcasts,
    TbBrandGoogle,
    TbBrandGrammarly,
    TbBrandGraphql,
    TbBrandGravatar,
    TbBrandGrindr,
    TbBrandGuardian,
    TbBrandGumroad,
    TbBrandHackerrank,
    TbBrandHbo,
    TbBrandHeadlessui,
    TbBrandHexo,
    TbBrandHipchat,
    TbBrandHtml5,
    TbBrandInertia,
    TbBrandInstagram,
    TbBrandIntercom,
    TbBrandItch,
    TbBrandJavascript,
    TbBrandJuejin,
    TbBrandKakoTalk,
    TbBrandKbin,
    TbBrandKick,
    TbBrandKickstarter,
    TbBrandKotlin,
    TbBrandLaravel,
    TbBrandLastfm,
    TbBrandLeetcode,
    TbBrandLetterboxd,
    TbBrandLine,
    TbBrandLinkedin,
    TbBrandLinktree,
    TbBrandLinqpad,
    TbBrandLivewire,
    TbBrandLoom,
    TbBrandMailgun,
    TbBrandMantine,
    TbBrandMastercard,
    TbBrandMastodon,
    TbBrandMatrix,
    TbBrandMcdonalds,
    TbBrandMedium,
    TbBrandMeetup,
    TbBrandMercedes,
    TbBrandMessenger,
    TbBrandMeta,
    TbBrandMetabrainz,
    TbBrandMinecraft,
    TbBrandMiniprogram,
    TbBrandMixpanel,
    TbBrandMonday,
    TbBrandMongodb,
    TbBrandMyOppo,
    TbBrandMysql,
    TbBrandNationalGeographic,
    TbBrandNem,
    TbBrandNetbeans,
    TbBrandNeteaseMusic,
    TbBrandNetflix,
    TbBrandNexo,
    TbBrandNextcloud,
    TbBrandNextjs,
    TbBrandNodejs,
    TbBrandNordVpn,
    TbBrandNotion,
    TbBrandNpm,
    TbBrandNuxt,
    TbBrandNytimes,
    TbBrandOauth,
    TbBrandOffice,
    TbBrandOkRu,
    TbBrandOnedrive,
    TbBrandOnlyfans,
    TbBrandOpenSource,
    TbBrandOpenai,
    TbBrandOpenvpn,
    TbBrandOpera,
    TbBrandPagekit,
    TbBrandParsinta,
    TbBrandPatreon,
    TbBrandPaypal,
    TbBrandPaypay,
    TbBrandPeanut,
    TbBrandPepsi,
    TbBrandPhp,
    TbBrandPicsart,
    TbBrandPinterest,
    TbBrandPlanetscale,
    TbBrandPnpm,
    TbBrandPocket,
    TbBrandPolymer,
    TbBrandPowershell,
    TbBrandPrintables,
    TbBrandPrisma,
    TbBrandProducthunt,
    TbBrandPushbullet,
    TbBrandPushover,
    TbBrandPython,
    TbBrandQq,
    TbBrandRadixUi,
    TbBrandReactNative,
    TbBrandReact,
    TbBrandReason,
    TbBrandReddit,
    TbBrandRedhat,
    TbBrandRedux,
    TbBrandRevolut,
    TbBrandRumble,
    TbBrandRust,
    TbBrandSafari,
    TbBrandSamsungpass,
    TbBrandSass,
    TbBrandSentry,
    TbBrandSharik,
    TbBrandShazam,
    TbBrandShopee,
    TbBrandSketch,
    TbBrandSkype,
    TbBrandSlack,
    TbBrandSnapchat,
    TbBrandSnapseed,
    TbBrandSnowflake,
    TbBrandSocketIo,
    TbBrandSolidjs,
    TbBrandSoundcloud,
    TbBrandSpacehey,
    TbBrandSpeedtest,
    TbBrandSpotify,
    TbBrandStackoverflow,
    TbBrandStackshare,
    TbBrandSteam,
    TbBrandStocktwits,
    TbBrandStorj,
    TbBrandStorybook,
    TbBrandStorytel,
    TbBrandStrava,
    TbBrandStripe,
    TbBrandSublimeText,
    TbBrandSugarizer,
    TbBrandSupabase,
    TbBrandSuperhuman,
    TbBrandSupernova,
    TbBrandSurfshark,
    TbBrandSvelte,
    TbBrandSwift,
    TbBrandSymfony,
    TbBrandTabler,
    TbBrandTailwind,
    TbBrandTaobao,
    TbBrandTeams,
    TbBrandTed,
    TbBrandTelegram,
    TbBrandTerraform,
    TbBrandTesla,
    TbBrandTether,
    TbBrandThingiverse,
    TbBrandThreads,
    TbBrandThreejs,
    TbBrandTidal,
    TbBrandTiktok,
    TbBrandTinder,
    TbBrandTopbuzz,
    TbBrandTorchain,
    TbBrandToyota,
    TbBrandTrello,
    TbBrandTripadvisor,
    TbBrandTumblr,
    TbBrandTwilio,
    TbBrandTwitch,
    TbBrandTwitter,
    TbBrandTypescript,
    TbBrandUber,
    TbBrandUbuntu,
    TbBrandUnity,
    TbBrandUnsplash,
    TbBrandUpwork,
    TbBrandValorant,
    TbBrandVercel,
    TbBrandVimeo,
    TbBrandVinted,
    TbBrandVisa,
    TbBrandVisualStudio,
    TbBrandVite,
    TbBrandVivaldi,
    TbBrandVk,
    TbBrandVlc,
    TbBrandVolkswagen,
    TbBrandVsco,
    TbBrandVscode,
    TbBrandVue,
    TbBrandWalmart,
    TbBrandWaze,
    TbBrandWebflow,
    TbBrandWechat,
    TbBrandWeibo,
    TbBrandWhatsapp,
    TbBrandWikipedia,
    TbBrandWindows,
    TbBrandWindy,
    TbBrandWish,
    TbBrandWix,
    TbBrandWordpress,
    TbBrandX,
    TbBrandXamarin,
    TbBrandXbox,
    TbBrandXdeep,
    TbBrandXing,
    TbBrandYahoo,
    TbBrandYandex,
    TbBrandYarn,
    TbBrandYatse,
    TbBrandYcombinator,
    TbBrandYoutubeKids,
    TbBrandYoutube,
    TbBrandZalando,
    TbBrandZapier,
    TbBrandZeit,
    TbBrandZhihu,
    TbBrandZoom,
    TbBrandZulip,
    TbBrandZwift,
    TbBreadOff,
    TbBread,
    TbBriefcase2,
    TbBriefcaseOff,
    TbBriefcase,
    TbBrightness2,
    TbBrightnessAuto,
    TbBrightnessDown,
    TbBrightnessHalf,
    TbBrightnessOff,
    TbBrightnessUp,
    TbBrightness,
    TbBroadcastOff,
    TbBroadcast,
    TbBrowserCheck,
    TbBrowserMaximize,
    TbBrowserMinus,
    TbBrowserOff,
    TbBrowserPlus,
    TbBrowserShare,
    TbBrowserX,
    TbBrowser,
    TbBrushOff,
    TbBrush,
    TbBubbleMinus,
    TbBubblePlus,
    TbBubbleTea2,
    TbBubbleTea,
    TbBubbleText,
    TbBubbleX,
    TbBubble,
    TbBucketDroplet,
    TbBucketOff,
    TbBucket,
    TbBugOff,
    TbBug,
    TbBuildingAirport,
    TbBuildingArch,
    TbBuildingBank,
    TbBuildingBridge2,
    TbBuildingBridge,
    TbBuildingBroadcastTower,
    TbBuildingBurjAlArab,
    TbBuildingCarousel,
    TbBuildingCastle,
    TbBuildingChurch,
    TbBuildingCircus,
    TbBuildingCog,
    TbBuildingCommunity,
    TbBuildingCottage,
    TbBuildingEstate,
    TbBuildingFactory2,
    TbBuildingFactory,
    TbBuildingFortress,
    TbBuildingHospital,
    TbBuildingLighthouse,
    TbBuildingMinus,
    TbBuildingMonument,
    TbBuildingMosque,
    TbBuildingOff,
    TbBuildingPavilion,
    TbBuildingPlus,
    TbBuildingSkyscraper,
    TbBuildingStadium,
    TbBuildingStore,
    TbBuildingTunnel,
    TbBuildingWarehouse,
    TbBuildingWindTurbine,
    TbBuilding,
    TbBuildings,
    TbBulbOff,
    TbBulb,
    TbBulldozer,
    TbBurger,
    TbBusOff,
    TbBusStop,
    TbBus,
    TbBusinessplan,
    TbButterfly,
    TbCactusOff,
    TbCactus,
    TbCakeOff,
    TbCakeRoll,
    TbCake,
    TbCalculatorOff,
    TbCalculator,
    TbCalendarBolt,
    TbCalendarCancel,
    TbCalendarCheck,
    TbCalendarClock,
    TbCalendarCode,
    TbCalendarCog,
    TbCalendarDollar,
    TbCalendarDot,
    TbCalendarDown,
    TbCalendarDue,
    TbCalendarEvent,
    TbCalendarExclamation,
    TbCalendarHeart,
    TbCalendarMinus,
    TbCalendarMonth,
    TbCalendarOff,
    TbCalendarPause,
    TbCalendarPin,
    TbCalendarPlus,
    TbCalendarQuestion,
    TbCalendarRepeat,
    TbCalendarSad,
    TbCalendarSearch,
    TbCalendarShare,
    TbCalendarSmile,
    TbCalendarStar,
    TbCalendarStats,
    TbCalendarTime,
    TbCalendarUp,
    TbCalendarUser,
    TbCalendarWeek,
    TbCalendarX,
    TbCalendar,
    TbCameraAi,
    TbCameraBitcoin,
    TbCameraBolt,
    TbCameraCancel,
    TbCameraCheck,
    TbCameraCode,
    TbCameraCog,
    TbCameraDollar,
    TbCameraDown,
    TbCameraExclamation,
    TbCameraHeart,
    TbCameraMinus,
    TbCameraMoon,
    TbCameraOff,
    TbCameraPause,
    TbCameraPin,
    TbCameraPlus,
    TbCameraQuestion,
    TbCameraRotate,
    TbCameraSearch,
    TbCameraSelfie,
    TbCameraShare,
    TbCameraSpark,
    TbCameraStar,
    TbCameraUp,
    TbCameraX,
    TbCamera,
    TbCamper,
    TbCampfire,
    TbCancel,
    TbCandle,
    TbCandyOff,
    TbCandy,
    TbCane,
    TbCannabis,
    TbCapProjecting,
    TbCapRounded,
    TbCapStraight,
    TbCapsuleHorizontal,
    TbCapsule,
    TbCaptureOff,
    TbCapture,
    TbCar4Wd,
    TbCarCrane,
    TbCarCrash,
    TbCarFan1,
    TbCarFan2,
    TbCarFan3,
    TbCarFanAuto,
    TbCarFan,
    TbCarGarage,
    TbCarOff,
    TbCarSuv,
    TbCarTurbine,
} from "react-icons/tb"

export function nameToReactIcon_tb_1(iconName: string): IconType | undefined {

    switch(iconName) {
        case "tb:TbArrowBadgeRight":
            return TbArrowBadgeRight;
        case "tb:TbArrowBadgeUp":
            return TbArrowBadgeUp;
        case "tb:TbArrowBarBoth":
            return TbArrowBarBoth;
        case "tb:TbArrowBarDown":
            return TbArrowBarDown;
        case "tb:TbArrowBarLeft":
            return TbArrowBarLeft;
        case "tb:TbArrowBarRight":
            return TbArrowBarRight;
        case "tb:TbArrowBarToDown":
            return TbArrowBarToDown;
        case "tb:TbArrowBarToLeft":
            return TbArrowBarToLeft;
        case "tb:TbArrowBarToRight":
            return TbArrowBarToRight;
        case "tb:TbArrowBarToUp":
            return TbArrowBarToUp;
        case "tb:TbArrowBarUp":
            return TbArrowBarUp;
        case "tb:TbArrowBearLeft2":
            return TbArrowBearLeft2;
        case "tb:TbArrowBearLeft":
            return TbArrowBearLeft;
        case "tb:TbArrowBearRight2":
            return TbArrowBearRight2;
        case "tb:TbArrowBearRight":
            return TbArrowBearRight;
        case "tb:TbArrowBigDownLine":
            return TbArrowBigDownLine;
        case "tb:TbArrowBigDownLines":
            return TbArrowBigDownLines;
        case "tb:TbArrowBigDown":
            return TbArrowBigDown;
        case "tb:TbArrowBigLeftLine":
            return TbArrowBigLeftLine;
        case "tb:TbArrowBigLeftLines":
            return TbArrowBigLeftLines;
        case "tb:TbArrowBigLeft":
            return TbArrowBigLeft;
        case "tb:TbArrowBigRightLine":
            return TbArrowBigRightLine;
        case "tb:TbArrowBigRightLines":
            return TbArrowBigRightLines;
        case "tb:TbArrowBigRight":
            return TbArrowBigRight;
        case "tb:TbArrowBigUpLine":
            return TbArrowBigUpLine;
        case "tb:TbArrowBigUpLines":
            return TbArrowBigUpLines;
        case "tb:TbArrowBigUp":
            return TbArrowBigUp;
        case "tb:TbArrowBounce":
            return TbArrowBounce;
        case "tb:TbArrowCapsule":
            return TbArrowCapsule;
        case "tb:TbArrowCurveLeft":
            return TbArrowCurveLeft;
        case "tb:TbArrowCurveRight":
            return TbArrowCurveRight;
        case "tb:TbArrowDownBar":
            return TbArrowDownBar;
        case "tb:TbArrowDownCircle":
            return TbArrowDownCircle;
        case "tb:TbArrowDownDashed":
            return TbArrowDownDashed;
        case "tb:TbArrowDownFromArc":
            return TbArrowDownFromArc;
        case "tb:TbArrowDownLeftCircle":
            return TbArrowDownLeftCircle;
        case "tb:TbArrowDownLeft":
            return TbArrowDownLeft;
        case "tb:TbArrowDownRhombus":
            return TbArrowDownRhombus;
        case "tb:TbArrowDownRightCircle":
            return TbArrowDownRightCircle;
        case "tb:TbArrowDownRight":
            return TbArrowDownRight;
        case "tb:TbArrowDownSquare":
            return TbArrowDownSquare;
        case "tb:TbArrowDownTail":
            return TbArrowDownTail;
        case "tb:TbArrowDownToArc":
            return TbArrowDownToArc;
        case "tb:TbArrowDown":
            return TbArrowDown;
        case "tb:TbArrowElbowLeft":
            return TbArrowElbowLeft;
        case "tb:TbArrowElbowRight":
            return TbArrowElbowRight;
        case "tb:TbArrowFork":
            return TbArrowFork;
        case "tb:TbArrowForwardUpDouble":
            return TbArrowForwardUpDouble;
        case "tb:TbArrowForwardUp":
            return TbArrowForwardUp;
        case "tb:TbArrowForward":
            return TbArrowForward;
        case "tb:TbArrowGuide":
            return TbArrowGuide;
        case "tb:TbArrowIteration":
            return TbArrowIteration;
        case "tb:TbArrowLeftBar":
            return TbArrowLeftBar;
        case "tb:TbArrowLeftCircle":
            return TbArrowLeftCircle;
        case "tb:TbArrowLeftDashed":
            return TbArrowLeftDashed;
        case "tb:TbArrowLeftFromArc":
            return TbArrowLeftFromArc;
        case "tb:TbArrowLeftRhombus":
            return TbArrowLeftRhombus;
        case "tb:TbArrowLeftRight":
            return TbArrowLeftRight;
        case "tb:TbArrowLeftSquare":
            return TbArrowLeftSquare;
        case "tb:TbArrowLeftTail":
            return TbArrowLeftTail;
        case "tb:TbArrowLeftToArc":
            return TbArrowLeftToArc;
        case "tb:TbArrowLeft":
            return TbArrowLeft;
        case "tb:TbArrowLoopLeft2":
            return TbArrowLoopLeft2;
        case "tb:TbArrowLoopLeft":
            return TbArrowLoopLeft;
        case "tb:TbArrowLoopRight2":
            return TbArrowLoopRight2;
        case "tb:TbArrowLoopRight":
            return TbArrowLoopRight;
        case "tb:TbArrowMergeAltLeft":
            return TbArrowMergeAltLeft;
        case "tb:TbArrowMergeAltRight":
            return TbArrowMergeAltRight;
        case "tb:TbArrowMergeBoth":
            return TbArrowMergeBoth;
        case "tb:TbArrowMergeLeft":
            return TbArrowMergeLeft;
        case "tb:TbArrowMergeRight":
            return TbArrowMergeRight;
        case "tb:TbArrowMerge":
            return TbArrowMerge;
        case "tb:TbArrowMoveDown":
            return TbArrowMoveDown;
        case "tb:TbArrowMoveLeft":
            return TbArrowMoveLeft;
        case "tb:TbArrowMoveRight":
            return TbArrowMoveRight;
        case "tb:TbArrowMoveUp":
            return TbArrowMoveUp;
        case "tb:TbArrowNarrowDownDashed":
            return TbArrowNarrowDownDashed;
        case "tb:TbArrowNarrowDown":
            return TbArrowNarrowDown;
        case "tb:TbArrowNarrowLeftDashed":
            return TbArrowNarrowLeftDashed;
        case "tb:TbArrowNarrowLeft":
            return TbArrowNarrowLeft;
        case "tb:TbArrowNarrowRightDashed":
            return TbArrowNarrowRightDashed;
        case "tb:TbArrowNarrowRight":
            return TbArrowNarrowRight;
        case "tb:TbArrowNarrowUpDashed":
            return TbArrowNarrowUpDashed;
        case "tb:TbArrowNarrowUp":
            return TbArrowNarrowUp;
        case "tb:TbArrowRampLeft2":
            return TbArrowRampLeft2;
        case "tb:TbArrowRampLeft3":
            return TbArrowRampLeft3;
        case "tb:TbArrowRampLeft":
            return TbArrowRampLeft;
        case "tb:TbArrowRampRight2":
            return TbArrowRampRight2;
        case "tb:TbArrowRampRight3":
            return TbArrowRampRight3;
        case "tb:TbArrowRampRight":
            return TbArrowRampRight;
        case "tb:TbArrowRightBar":
            return TbArrowRightBar;
        case "tb:TbArrowRightCircle":
            return TbArrowRightCircle;
        case "tb:TbArrowRightDashed":
            return TbArrowRightDashed;
        case "tb:TbArrowRightFromArc":
            return TbArrowRightFromArc;
        case "tb:TbArrowRightRhombus":
            return TbArrowRightRhombus;
        case "tb:TbArrowRightSquare":
            return TbArrowRightSquare;
        case "tb:TbArrowRightTail":
            return TbArrowRightTail;
        case "tb:TbArrowRightToArc":
            return TbArrowRightToArc;
        case "tb:TbArrowRight":
            return TbArrowRight;
        case "tb:TbArrowRotaryFirstLeft":
            return TbArrowRotaryFirstLeft;
        case "tb:TbArrowRotaryFirstRight":
            return TbArrowRotaryFirstRight;
        case "tb:TbArrowRotaryLastLeft":
            return TbArrowRotaryLastLeft;
        case "tb:TbArrowRotaryLastRight":
            return TbArrowRotaryLastRight;
        case "tb:TbArrowRotaryLeft":
            return TbArrowRotaryLeft;
        case "tb:TbArrowRotaryRight":
            return TbArrowRotaryRight;
        case "tb:TbArrowRotaryStraight":
            return TbArrowRotaryStraight;
        case "tb:TbArrowRoundaboutLeft":
            return TbArrowRoundaboutLeft;
        case "tb:TbArrowRoundaboutRight":
            return TbArrowRoundaboutRight;
        case "tb:TbArrowSharpTurnLeft":
            return TbArrowSharpTurnLeft;
        case "tb:TbArrowSharpTurnRight":
            return TbArrowSharpTurnRight;
        case "tb:TbArrowUpBar":
            return TbArrowUpBar;
        case "tb:TbArrowUpCircle":
            return TbArrowUpCircle;
        case "tb:TbArrowUpDashed":
            return TbArrowUpDashed;
        case "tb:TbArrowUpFromArc":
            return TbArrowUpFromArc;
        case "tb:TbArrowUpLeftCircle":
            return TbArrowUpLeftCircle;
        case "tb:TbArrowUpLeft":
            return TbArrowUpLeft;
        case "tb:TbArrowUpRhombus":
            return TbArrowUpRhombus;
        case "tb:TbArrowUpRightCircle":
            return TbArrowUpRightCircle;
        case "tb:TbArrowUpRight":
            return TbArrowUpRight;
        case "tb:TbArrowUpSquare":
            return TbArrowUpSquare;
        case "tb:TbArrowUpTail":
            return TbArrowUpTail;
        case "tb:TbArrowUpToArc":
            return TbArrowUpToArc;
        case "tb:TbArrowUp":
            return TbArrowUp;
        case "tb:TbArrowWaveLeftDown":
            return TbArrowWaveLeftDown;
        case "tb:TbArrowWaveLeftUp":
            return TbArrowWaveLeftUp;
        case "tb:TbArrowWaveRightDown":
            return TbArrowWaveRightDown;
        case "tb:TbArrowWaveRightUp":
            return TbArrowWaveRightUp;
        case "tb:TbArrowZigZag":
            return TbArrowZigZag;
        case "tb:TbArrowsCross":
            return TbArrowsCross;
        case "tb:TbArrowsDiagonal2":
            return TbArrowsDiagonal2;
        case "tb:TbArrowsDiagonalMinimize2":
            return TbArrowsDiagonalMinimize2;
        case "tb:TbArrowsDiagonalMinimize":
            return TbArrowsDiagonalMinimize;
        case "tb:TbArrowsDiagonal":
            return TbArrowsDiagonal;
        case "tb:TbArrowsDiff":
            return TbArrowsDiff;
        case "tb:TbArrowsDoubleNeSw":
            return TbArrowsDoubleNeSw;
        case "tb:TbArrowsDoubleNwSe":
            return TbArrowsDoubleNwSe;
        case "tb:TbArrowsDoubleSeNw":
            return TbArrowsDoubleSeNw;
        case "tb:TbArrowsDoubleSwNe":
            return TbArrowsDoubleSwNe;
        case "tb:TbArrowsDownUp":
            return TbArrowsDownUp;
        case "tb:TbArrowsDown":
            return TbArrowsDown;
        case "tb:TbArrowsExchange2":
            return TbArrowsExchange2;
        case "tb:TbArrowsExchange":
            return TbArrowsExchange;
        case "tb:TbArrowsHorizontal":
            return TbArrowsHorizontal;
        case "tb:TbArrowsJoin2":
            return TbArrowsJoin2;
        case "tb:TbArrowsJoin":
            return TbArrowsJoin;
        case "tb:TbArrowsLeftDown":
            return TbArrowsLeftDown;
        case "tb:TbArrowsLeftRight":
            return TbArrowsLeftRight;
        case "tb:TbArrowsLeft":
            return TbArrowsLeft;
        case "tb:TbArrowsMaximize":
            return TbArrowsMaximize;
        case "tb:TbArrowsMinimize":
            return TbArrowsMinimize;
        case "tb:TbArrowsMoveHorizontal":
            return TbArrowsMoveHorizontal;
        case "tb:TbArrowsMoveVertical":
            return TbArrowsMoveVertical;
        case "tb:TbArrowsMove":
            return TbArrowsMove;
        case "tb:TbArrowsRandom":
            return TbArrowsRandom;
        case "tb:TbArrowsRightDown":
            return TbArrowsRightDown;
        case "tb:TbArrowsRightLeft":
            return TbArrowsRightLeft;
        case "tb:TbArrowsRight":
            return TbArrowsRight;
        case "tb:TbArrowsShuffle2":
            return TbArrowsShuffle2;
        case "tb:TbArrowsShuffle":
            return TbArrowsShuffle;
        case "tb:TbArrowsSort":
            return TbArrowsSort;
        case "tb:TbArrowsSplit2":
            return TbArrowsSplit2;
        case "tb:TbArrowsSplit":
            return TbArrowsSplit;
        case "tb:TbArrowsTransferDown":
            return TbArrowsTransferDown;
        case "tb:TbArrowsTransferUpDown":
            return TbArrowsTransferUpDown;
        case "tb:TbArrowsTransferUp":
            return TbArrowsTransferUp;
        case "tb:TbArrowsUpDown":
            return TbArrowsUpDown;
        case "tb:TbArrowsUpLeft":
            return TbArrowsUpLeft;
        case "tb:TbArrowsUpRight":
            return TbArrowsUpRight;
        case "tb:TbArrowsUp":
            return TbArrowsUp;
        case "tb:TbArrowsVertical":
            return TbArrowsVertical;
        case "tb:TbArtboardOff":
            return TbArtboardOff;
        case "tb:TbArtboard":
            return TbArtboard;
        case "tb:TbArticleOff":
            return TbArticleOff;
        case "tb:TbArticle":
            return TbArticle;
        case "tb:TbAspectRatioOff":
            return TbAspectRatioOff;
        case "tb:TbAspectRatio":
            return TbAspectRatio;
        case "tb:TbAssemblyOff":
            return TbAssemblyOff;
        case "tb:TbAssembly":
            return TbAssembly;
        case "tb:TbAsset":
            return TbAsset;
        case "tb:TbAsteriskSimple":
            return TbAsteriskSimple;
        case "tb:TbAsterisk":
            return TbAsterisk;
        case "tb:TbAtOff":
            return TbAtOff;
        case "tb:TbAt":
            return TbAt;
        case "tb:TbAtom2":
            return TbAtom2;
        case "tb:TbAtomOff":
            return TbAtomOff;
        case "tb:TbAtom":
            return TbAtom;
        case "tb:TbAugmentedReality2":
            return TbAugmentedReality2;
        case "tb:TbAugmentedRealityOff":
            return TbAugmentedRealityOff;
        case "tb:TbAugmentedReality":
            return TbAugmentedReality;
        case "tb:TbAuth2Fa":
            return TbAuth2Fa;
        case "tb:TbAutomaticGearbox":
            return TbAutomaticGearbox;
        case "tb:TbAutomation":
            return TbAutomation;
        case "tb:TbAvocado":
            return TbAvocado;
        case "tb:TbAwardOff":
            return TbAwardOff;
        case "tb:TbAward":
            return TbAward;
        case "tb:TbAxe":
            return TbAxe;
        case "tb:TbAxisX":
            return TbAxisX;
        case "tb:TbAxisY":
            return TbAxisY;
        case "tb:TbBabyBottle":
            return TbBabyBottle;
        case "tb:TbBabyCarriage":
            return TbBabyCarriage;
        case "tb:TbBackground":
            return TbBackground;
        case "tb:TbBackhoe":
            return TbBackhoe;
        case "tb:TbBackpackOff":
            return TbBackpackOff;
        case "tb:TbBackpack":
            return TbBackpack;
        case "tb:TbBackslash":
            return TbBackslash;
        case "tb:TbBackspace":
            return TbBackspace;
        case "tb:TbBadge2K":
            return TbBadge2K;
        case "tb:TbBadge3D":
            return TbBadge3D;
        case "tb:TbBadge3K":
            return TbBadge3K;
        case "tb:TbBadge4K":
            return TbBadge4K;
        case "tb:TbBadge5K":
            return TbBadge5K;
        case "tb:TbBadge8K":
            return TbBadge8K;
        case "tb:TbBadgeAdOff":
            return TbBadgeAdOff;
        case "tb:TbBadgeAd":
            return TbBadgeAd;
        case "tb:TbBadgeAr":
            return TbBadgeAr;
        case "tb:TbBadgeCc":
            return TbBadgeCc;
        case "tb:TbBadgeHd":
            return TbBadgeHd;
        case "tb:TbBadgeOff":
            return TbBadgeOff;
        case "tb:TbBadgeSd":
            return TbBadgeSd;
        case "tb:TbBadgeTm":
            return TbBadgeTm;
        case "tb:TbBadgeVo":
            return TbBadgeVo;
        case "tb:TbBadgeVr":
            return TbBadgeVr;
        case "tb:TbBadgeWc":
            return TbBadgeWc;
        case "tb:TbBadge":
            return TbBadge;
        case "tb:TbBadgesOff":
            return TbBadgesOff;
        case "tb:TbBadges":
            return TbBadges;
        case "tb:TbBaguette":
            return TbBaguette;
        case "tb:TbBallAmericanFootballOff":
            return TbBallAmericanFootballOff;
        case "tb:TbBallAmericanFootball":
            return TbBallAmericanFootball;
        case "tb:TbBallBaseball":
            return TbBallBaseball;
        case "tb:TbBallBasketball":
            return TbBallBasketball;
        case "tb:TbBallBowling":
            return TbBallBowling;
        case "tb:TbBallFootballOff":
            return TbBallFootballOff;
        case "tb:TbBallFootball":
            return TbBallFootball;
        case "tb:TbBallTennis":
            return TbBallTennis;
        case "tb:TbBallVolleyball":
            return TbBallVolleyball;
        case "tb:TbBalloonOff":
            return TbBalloonOff;
        case "tb:TbBalloon":
            return TbBalloon;
        case "tb:TbBallpenOff":
            return TbBallpenOff;
        case "tb:TbBallpen":
            return TbBallpen;
        case "tb:TbBan":
            return TbBan;
        case "tb:TbBandageOff":
            return TbBandageOff;
        case "tb:TbBandage":
            return TbBandage;
        case "tb:TbBarbellOff":
            return TbBarbellOff;
        case "tb:TbBarbell":
            return TbBarbell;
        case "tb:TbBarcodeOff":
            return TbBarcodeOff;
        case "tb:TbBarcode":
            return TbBarcode;
        case "tb:TbBarrelOff":
            return TbBarrelOff;
        case "tb:TbBarrel":
            return TbBarrel;
        case "tb:TbBarrierBlockOff":
            return TbBarrierBlockOff;
        case "tb:TbBarrierBlock":
            return TbBarrierBlock;
        case "tb:TbBaselineDensityLarge":
            return TbBaselineDensityLarge;
        case "tb:TbBaselineDensityMedium":
            return TbBaselineDensityMedium;
        case "tb:TbBaselineDensitySmall":
            return TbBaselineDensitySmall;
        case "tb:TbBaseline":
            return TbBaseline;
        case "tb:TbBasketBolt":
            return TbBasketBolt;
        case "tb:TbBasketCancel":
            return TbBasketCancel;
        case "tb:TbBasketCheck":
            return TbBasketCheck;
        case "tb:TbBasketCode":
            return TbBasketCode;
        case "tb:TbBasketCog":
            return TbBasketCog;
        case "tb:TbBasketDiscount":
            return TbBasketDiscount;
        case "tb:TbBasketDollar":
            return TbBasketDollar;
        case "tb:TbBasketDown":
            return TbBasketDown;
        case "tb:TbBasketExclamation":
            return TbBasketExclamation;
        case "tb:TbBasketHeart":
            return TbBasketHeart;
        case "tb:TbBasketMinus":
            return TbBasketMinus;
        case "tb:TbBasketOff":
            return TbBasketOff;
        case "tb:TbBasketPause":
            return TbBasketPause;
        case "tb:TbBasketPin":
            return TbBasketPin;
        case "tb:TbBasketPlus":
            return TbBasketPlus;
        case "tb:TbBasketQuestion":
            return TbBasketQuestion;
        case "tb:TbBasketSearch":
            return TbBasketSearch;
        case "tb:TbBasketShare":
            return TbBasketShare;
        case "tb:TbBasketStar":
            return TbBasketStar;
        case "tb:TbBasketUp":
            return TbBasketUp;
        case "tb:TbBasketX":
            return TbBasketX;
        case "tb:TbBasket":
            return TbBasket;
        case "tb:TbBat":
            return TbBat;
        case "tb:TbBathOff":
            return TbBathOff;
        case "tb:TbBath":
            return TbBath;
        case "tb:TbBattery1":
            return TbBattery1;
        case "tb:TbBattery2":
            return TbBattery2;
        case "tb:TbBattery3":
            return TbBattery3;
        case "tb:TbBattery4":
            return TbBattery4;
        case "tb:TbBatteryAutomotive":
            return TbBatteryAutomotive;
        case "tb:TbBatteryCharging2":
            return TbBatteryCharging2;
        case "tb:TbBatteryCharging":
            return TbBatteryCharging;
        case "tb:TbBatteryEco":
            return TbBatteryEco;
        case "tb:TbBatteryExclamation":
            return TbBatteryExclamation;
        case "tb:TbBatteryOff":
            return TbBatteryOff;
        case "tb:TbBatterySpark":
            return TbBatterySpark;
        case "tb:TbBatteryVertical1":
            return TbBatteryVertical1;
        case "tb:TbBatteryVertical2":
            return TbBatteryVertical2;
        case "tb:TbBatteryVertical3":
            return TbBatteryVertical3;
        case "tb:TbBatteryVertical4":
            return TbBatteryVertical4;
        case "tb:TbBatteryVerticalCharging2":
            return TbBatteryVerticalCharging2;
        case "tb:TbBatteryVerticalCharging":
            return TbBatteryVerticalCharging;
        case "tb:TbBatteryVerticalEco":
            return TbBatteryVerticalEco;
        case "tb:TbBatteryVerticalExclamation":
            return TbBatteryVerticalExclamation;
        case "tb:TbBatteryVerticalOff":
            return TbBatteryVerticalOff;
        case "tb:TbBatteryVertical":
            return TbBatteryVertical;
        case "tb:TbBattery":
            return TbBattery;
        case "tb:TbBeachOff":
            return TbBeachOff;
        case "tb:TbBeach":
            return TbBeach;
        case "tb:TbBedFlat":
            return TbBedFlat;
        case "tb:TbBedOff":
            return TbBedOff;
        case "tb:TbBed":
            return TbBed;
        case "tb:TbBeerOff":
            return TbBeerOff;
        case "tb:TbBeer":
            return TbBeer;
        case "tb:TbBellBolt":
            return TbBellBolt;
        case "tb:TbBellCancel":
            return TbBellCancel;
        case "tb:TbBellCheck":
            return TbBellCheck;
        case "tb:TbBellCode":
            return TbBellCode;
        case "tb:TbBellCog":
            return TbBellCog;
        case "tb:TbBellDollar":
            return TbBellDollar;
        case "tb:TbBellDown":
            return TbBellDown;
        case "tb:TbBellExclamation":
            return TbBellExclamation;
        case "tb:TbBellHeart":
            return TbBellHeart;
        case "tb:TbBellMinus":
            return TbBellMinus;
        case "tb:TbBellOff":
            return TbBellOff;
        case "tb:TbBellPause":
            return TbBellPause;
        case "tb:TbBellPin":
            return TbBellPin;
        case "tb:TbBellPlus":
            return TbBellPlus;
        case "tb:TbBellQuestion":
            return TbBellQuestion;
        case "tb:TbBellRinging2":
            return TbBellRinging2;
        case "tb:TbBellRinging":
            return TbBellRinging;
        case "tb:TbBellSchool":
            return TbBellSchool;
        case "tb:TbBellSearch":
            return TbBellSearch;
        case "tb:TbBellShare":
            return TbBellShare;
        case "tb:TbBellStar":
            return TbBellStar;
        case "tb:TbBellUp":
            return TbBellUp;
        case "tb:TbBellX":
            return TbBellX;
        case "tb:TbBellZ":
            return TbBellZ;
        case "tb:TbBell":
            return TbBell;
        case "tb:TbBeta":
            return TbBeta;
        case "tb:TbBible":
            return TbBible;
        case "tb:TbBikeOff":
            return TbBikeOff;
        case "tb:TbBike":
            return TbBike;
        case "tb:TbBinaryOff":
            return TbBinaryOff;
        case "tb:TbBinaryTree2":
            return TbBinaryTree2;
        case "tb:TbBinaryTree":
            return TbBinaryTree;
        case "tb:TbBinary":
            return TbBinary;
        case "tb:TbBinoculars":
            return TbBinoculars;
        case "tb:TbBiohazardOff":
            return TbBiohazardOff;
        case "tb:TbBiohazard":
            return TbBiohazard;
        case "tb:TbBlade":
            return TbBlade;
        case "tb:TbBleachChlorine":
            return TbBleachChlorine;
        case "tb:TbBleachNoChlorine":
            return TbBleachNoChlorine;
        case "tb:TbBleachOff":
            return TbBleachOff;
        case "tb:TbBleach":
            return TbBleach;
        case "tb:TbBlendMode":
            return TbBlendMode;
        case "tb:TbBlender":
            return TbBlender;
        case "tb:TbBlob":
            return TbBlob;
        case "tb:TbBlockquote":
            return TbBlockquote;
        case "tb:TbBlocks":
            return TbBlocks;
        case "tb:TbBluetoothConnected":
            return TbBluetoothConnected;
        case "tb:TbBluetoothOff":
            return TbBluetoothOff;
        case "tb:TbBluetoothX":
            return TbBluetoothX;
        case "tb:TbBluetooth":
            return TbBluetooth;
        case "tb:TbBlurOff":
            return TbBlurOff;
        case "tb:TbBlur":
            return TbBlur;
        case "tb:TbBmp":
            return TbBmp;
        case "tb:TbBodyScan":
            return TbBodyScan;
        case "tb:TbBoldOff":
            return TbBoldOff;
        case "tb:TbBold":
            return TbBold;
        case "tb:TbBoltOff":
            return TbBoltOff;
        case "tb:TbBolt":
            return TbBolt;
        case "tb:TbBomb":
            return TbBomb;
        case "tb:TbBoneOff":
            return TbBoneOff;
        case "tb:TbBone":
            return TbBone;
        case "tb:TbBongOff":
            return TbBongOff;
        case "tb:TbBong":
            return TbBong;
        case "tb:TbBook2":
            return TbBook2;
        case "tb:TbBookDownload":
            return TbBookDownload;
        case "tb:TbBookOff":
            return TbBookOff;
        case "tb:TbBookUpload":
            return TbBookUpload;
        case "tb:TbBook":
            return TbBook;
        case "tb:TbBookmarkAi":
            return TbBookmarkAi;
        case "tb:TbBookmarkEdit":
            return TbBookmarkEdit;
        case "tb:TbBookmarkMinus":
            return TbBookmarkMinus;
        case "tb:TbBookmarkOff":
            return TbBookmarkOff;
        case "tb:TbBookmarkPlus":
            return TbBookmarkPlus;
        case "tb:TbBookmarkQuestion":
            return TbBookmarkQuestion;
        case "tb:TbBookmark":
            return TbBookmark;
        case "tb:TbBookmarksOff":
            return TbBookmarksOff;
        case "tb:TbBookmarks":
            return TbBookmarks;
        case "tb:TbBooksOff":
            return TbBooksOff;
        case "tb:TbBooks":
            return TbBooks;
        case "tb:TbBoom":
            return TbBoom;
        case "tb:TbBorderAll":
            return TbBorderAll;
        case "tb:TbBorderBottomPlus":
            return TbBorderBottomPlus;
        case "tb:TbBorderBottom":
            return TbBorderBottom;
        case "tb:TbBorderCornerIos":
            return TbBorderCornerIos;
        case "tb:TbBorderCornerPill":
            return TbBorderCornerPill;
        case "tb:TbBorderCornerRounded":
            return TbBorderCornerRounded;
        case "tb:TbBorderCornerSquare":
            return TbBorderCornerSquare;
        case "tb:TbBorderCorners":
            return TbBorderCorners;
        case "tb:TbBorderHorizontal":
            return TbBorderHorizontal;
        case "tb:TbBorderInner":
            return TbBorderInner;
        case "tb:TbBorderLeftPlus":
            return TbBorderLeftPlus;
        case "tb:TbBorderLeft":
            return TbBorderLeft;
        case "tb:TbBorderNone":
            return TbBorderNone;
        case "tb:TbBorderOuter":
            return TbBorderOuter;
        case "tb:TbBorderRadius":
            return TbBorderRadius;
        case "tb:TbBorderRightPlus":
            return TbBorderRightPlus;
        case "tb:TbBorderRight":
            return TbBorderRight;
        case "tb:TbBorderSides":
            return TbBorderSides;
        case "tb:TbBorderStyle2":
            return TbBorderStyle2;
        case "tb:TbBorderStyle":
            return TbBorderStyle;
        case "tb:TbBorderTopPlus":
            return TbBorderTopPlus;
        case "tb:TbBorderTop":
            return TbBorderTop;
        case "tb:TbBorderVertical":
            return TbBorderVertical;
        case "tb:TbBottleOff":
            return TbBottleOff;
        case "tb:TbBottle":
            return TbBottle;
        case "tb:TbBounceLeft":
            return TbBounceLeft;
        case "tb:TbBounceRight":
            return TbBounceRight;
        case "tb:TbBow":
            return TbBow;
        case "tb:TbBowlChopsticks":
            return TbBowlChopsticks;
        case "tb:TbBowlSpoon":
            return TbBowlSpoon;
        case "tb:TbBowl":
            return TbBowl;
        case "tb:TbBowling":
            return TbBowling;
        case "tb:TbBoxAlignBottomLeft":
            return TbBoxAlignBottomLeft;
        case "tb:TbBoxAlignBottomRight":
            return TbBoxAlignBottomRight;
        case "tb:TbBoxAlignBottom":
            return TbBoxAlignBottom;
        case "tb:TbBoxAlignLeft":
            return TbBoxAlignLeft;
        case "tb:TbBoxAlignRight":
            return TbBoxAlignRight;
        case "tb:TbBoxAlignTopLeft":
            return TbBoxAlignTopLeft;
        case "tb:TbBoxAlignTopRight":
            return TbBoxAlignTopRight;
        case "tb:TbBoxAlignTop":
            return TbBoxAlignTop;
        case "tb:TbBoxMargin":
            return TbBoxMargin;
        case "tb:TbBoxModel2Off":
            return TbBoxModel2Off;
        case "tb:TbBoxModel2":
            return TbBoxModel2;
        case "tb:TbBoxModelOff":
            return TbBoxModelOff;
        case "tb:TbBoxModel":
            return TbBoxModel;
        case "tb:TbBoxMultiple0":
            return TbBoxMultiple0;
        case "tb:TbBoxMultiple1":
            return TbBoxMultiple1;
        case "tb:TbBoxMultiple2":
            return TbBoxMultiple2;
        case "tb:TbBoxMultiple3":
            return TbBoxMultiple3;
        case "tb:TbBoxMultiple4":
            return TbBoxMultiple4;
        case "tb:TbBoxMultiple5":
            return TbBoxMultiple5;
        case "tb:TbBoxMultiple6":
            return TbBoxMultiple6;
        case "tb:TbBoxMultiple7":
            return TbBoxMultiple7;
        case "tb:TbBoxMultiple8":
            return TbBoxMultiple8;
        case "tb:TbBoxMultiple9":
            return TbBoxMultiple9;
        case "tb:TbBoxMultiple":
            return TbBoxMultiple;
        case "tb:TbBoxOff":
            return TbBoxOff;
        case "tb:TbBoxPadding":
            return TbBoxPadding;
        case "tb:TbBox":
            return TbBox;
        case "tb:TbBracesOff":
            return TbBracesOff;
        case "tb:TbBraces":
            return TbBraces;
        case "tb:TbBracketsAngleOff":
            return TbBracketsAngleOff;
        case "tb:TbBracketsAngle":
            return TbBracketsAngle;
        case "tb:TbBracketsContainEnd":
            return TbBracketsContainEnd;
        case "tb:TbBracketsContainStart":
            return TbBracketsContainStart;
        case "tb:TbBracketsContain":
            return TbBracketsContain;
        case "tb:TbBracketsOff":
            return TbBracketsOff;
        case "tb:TbBrackets":
            return TbBrackets;
        case "tb:TbBraille":
            return TbBraille;
        case "tb:TbBrain":
            return TbBrain;
        case "tb:TbBrand4Chan":
            return TbBrand4Chan;
        case "tb:TbBrandAbstract":
            return TbBrandAbstract;
        case "tb:TbBrandAdobeAfterEffect":
            return TbBrandAdobeAfterEffect;
        case "tb:TbBrandAdobeIllustrator":
            return TbBrandAdobeIllustrator;
        case "tb:TbBrandAdobeIndesign":
            return TbBrandAdobeIndesign;
        case "tb:TbBrandAdobePhotoshop":
            return TbBrandAdobePhotoshop;
        case "tb:TbBrandAdobePremier":
            return TbBrandAdobePremier;
        case "tb:TbBrandAdobeXd":
            return TbBrandAdobeXd;
        case "tb:TbBrandAdobe":
            return TbBrandAdobe;
        case "tb:TbBrandAdonisJs":
            return TbBrandAdonisJs;
        case "tb:TbBrandAirbnb":
            return TbBrandAirbnb;
        case "tb:TbBrandAirtable":
            return TbBrandAirtable;
        case "tb:TbBrandAlgolia":
            return TbBrandAlgolia;
        case "tb:TbBrandAlipay":
            return TbBrandAlipay;
        case "tb:TbBrandAlpineJs":
            return TbBrandAlpineJs;
        case "tb:TbBrandAmazon":
            return TbBrandAmazon;
        case "tb:TbBrandAmd":
            return TbBrandAmd;
        case "tb:TbBrandAmie":
            return TbBrandAmie;
        case "tb:TbBrandAmigo":
            return TbBrandAmigo;
        case "tb:TbBrandAmongUs":
            return TbBrandAmongUs;
        case "tb:TbBrandAndroid":
            return TbBrandAndroid;
        case "tb:TbBrandAngular":
            return TbBrandAngular;
        case "tb:TbBrandAnsible":
            return TbBrandAnsible;
        case "tb:TbBrandAo3":
            return TbBrandAo3;
        case "tb:TbBrandAppgallery":
            return TbBrandAppgallery;
        case "tb:TbBrandAppleArcade":
            return TbBrandAppleArcade;
        case "tb:TbBrandAppleNews":
            return TbBrandAppleNews;
        case "tb:TbBrandApplePodcast":
            return TbBrandApplePodcast;
        case "tb:TbBrandApple":
            return TbBrandApple;
        case "tb:TbBrandAppstore":
            return TbBrandAppstore;
        case "tb:TbBrandArc":
            return TbBrandArc;
        case "tb:TbBrandAsana":
            return TbBrandAsana;
        case "tb:TbBrandAstro":
            return TbBrandAstro;
        case "tb:TbBrandAuth0":
            return TbBrandAuth0;
        case "tb:TbBrandAws":
            return TbBrandAws;
        case "tb:TbBrandAzure":
            return TbBrandAzure;
        case "tb:TbBrandBackbone":
            return TbBrandBackbone;
        case "tb:TbBrandBadoo":
            return TbBrandBadoo;
        case "tb:TbBrandBaidu":
            return TbBrandBaidu;
        case "tb:TbBrandBandcamp":
            return TbBrandBandcamp;
        case "tb:TbBrandBandlab":
            return TbBrandBandlab;
        case "tb:TbBrandBeats":
            return TbBrandBeats;
        case "tb:TbBrandBebo":
            return TbBrandBebo;
        case "tb:TbBrandBehance":
            return TbBrandBehance;
        case "tb:TbBrandBilibili":
            return TbBrandBilibili;
        case "tb:TbBrandBinance":
            return TbBrandBinance;
        case "tb:TbBrandBing":
            return TbBrandBing;
        case "tb:TbBrandBitbucket":
            return TbBrandBitbucket;
        case "tb:TbBrandBlackberry":
            return TbBrandBlackberry;
        case "tb:TbBrandBlender":
            return TbBrandBlender;
        case "tb:TbBrandBlogger":
            return TbBrandBlogger;
        case "tb:TbBrandBluesky":
            return TbBrandBluesky;
        case "tb:TbBrandBooking":
            return TbBrandBooking;
        case "tb:TbBrandBootstrap":
            return TbBrandBootstrap;
        case "tb:TbBrandBulma":
            return TbBrandBulma;
        case "tb:TbBrandBumble":
            return TbBrandBumble;
        case "tb:TbBrandBunpo":
            return TbBrandBunpo;
        case "tb:TbBrandCSharp":
            return TbBrandCSharp;
        case "tb:TbBrandCake":
            return TbBrandCake;
        case "tb:TbBrandCakephp":
            return TbBrandCakephp;
        case "tb:TbBrandCampaignmonitor":
            return TbBrandCampaignmonitor;
        case "tb:TbBrandCarbon":
            return TbBrandCarbon;
        case "tb:TbBrandCashapp":
            return TbBrandCashapp;
        case "tb:TbBrandChrome":
            return TbBrandChrome;
        case "tb:TbBrandCinema4D":
            return TbBrandCinema4D;
        case "tb:TbBrandCitymapper":
            return TbBrandCitymapper;
        case "tb:TbBrandCloudflare":
            return TbBrandCloudflare;
        case "tb:TbBrandCodecov":
            return TbBrandCodecov;
        case "tb:TbBrandCodepen":
            return TbBrandCodepen;
        case "tb:TbBrandCodesandbox":
            return TbBrandCodesandbox;
        case "tb:TbBrandCohost":
            return TbBrandCohost;
        case "tb:TbBrandCoinbase":
            return TbBrandCoinbase;
        case "tb:TbBrandComedyCentral":
            return TbBrandComedyCentral;
        case "tb:TbBrandCoreos":
            return TbBrandCoreos;
        case "tb:TbBrandCouchdb":
            return TbBrandCouchdb;
        case "tb:TbBrandCouchsurfing":
            return TbBrandCouchsurfing;
        case "tb:TbBrandCpp":
            return TbBrandCpp;
        case "tb:TbBrandCraft":
            return TbBrandCraft;
        case "tb:TbBrandCrunchbase":
            return TbBrandCrunchbase;
        case "tb:TbBrandCss3":
            return TbBrandCss3;
        case "tb:TbBrandCtemplar":
            return TbBrandCtemplar;
        case "tb:TbBrandCucumber":
            return TbBrandCucumber;
        case "tb:TbBrandCupra":
            return TbBrandCupra;
        case "tb:TbBrandCypress":
            return TbBrandCypress;
        case "tb:TbBrandD3":
            return TbBrandD3;
        case "tb:TbBrandDatabricks":
            return TbBrandDatabricks;
        case "tb:TbBrandDaysCounter":
            return TbBrandDaysCounter;
        case "tb:TbBrandDcos":
            return TbBrandDcos;
        case "tb:TbBrandDebian":
            return TbBrandDebian;
        case "tb:TbBrandDeezer":
            return TbBrandDeezer;
        case "tb:TbBrandDeliveroo":
            return TbBrandDeliveroo;
        case "tb:TbBrandDeno":
            return TbBrandDeno;
        case "tb:TbBrandDenodo":
            return TbBrandDenodo;
        case "tb:TbBrandDeviantart":
            return TbBrandDeviantart;
        case "tb:TbBrandDigg":
            return TbBrandDigg;
        case "tb:TbBrandDingtalk":
            return TbBrandDingtalk;
        case "tb:TbBrandDiscord":
            return TbBrandDiscord;
        case "tb:TbBrandDisney":
            return TbBrandDisney;
        case "tb:TbBrandDisqus":
            return TbBrandDisqus;
        case "tb:TbBrandDjango":
            return TbBrandDjango;
        case "tb:TbBrandDocker":
            return TbBrandDocker;
        case "tb:TbBrandDoctrine":
            return TbBrandDoctrine;
        case "tb:TbBrandDolbyDigital":
            return TbBrandDolbyDigital;
        case "tb:TbBrandDouban":
            return TbBrandDouban;
        case "tb:TbBrandDribbble":
            return TbBrandDribbble;
        case "tb:TbBrandDrops":
            return TbBrandDrops;
        case "tb:TbBrandDrupal":
            return TbBrandDrupal;
        case "tb:TbBrandEdge":
            return TbBrandEdge;
        case "tb:TbBrandElastic":
            return TbBrandElastic;
        case "tb:TbBrandElectronicArts":
            return TbBrandElectronicArts;
        case "tb:TbBrandEmber":
            return TbBrandEmber;
        case "tb:TbBrandEnvato":
            return TbBrandEnvato;
        case "tb:TbBrandEtsy":
            return TbBrandEtsy;
        case "tb:TbBrandEvernote":
            return TbBrandEvernote;
        case "tb:TbBrandFacebook":
            return TbBrandFacebook;
        case "tb:TbBrandFeedly":
            return TbBrandFeedly;
        case "tb:TbBrandFigma":
            return TbBrandFigma;
        case "tb:TbBrandFilezilla":
            return TbBrandFilezilla;
        case "tb:TbBrandFinder":
            return TbBrandFinder;
        case "tb:TbBrandFirebase":
            return TbBrandFirebase;
        case "tb:TbBrandFirefox":
            return TbBrandFirefox;
        case "tb:TbBrandFiverr":
            return TbBrandFiverr;
        case "tb:TbBrandFlickr":
            return TbBrandFlickr;
        case "tb:TbBrandFlightradar24":
            return TbBrandFlightradar24;
        case "tb:TbBrandFlipboard":
            return TbBrandFlipboard;
        case "tb:TbBrandFlutter":
            return TbBrandFlutter;
        case "tb:TbBrandFortnite":
            return TbBrandFortnite;
        case "tb:TbBrandFoursquare":
            return TbBrandFoursquare;
        case "tb:TbBrandFramerMotion":
            return TbBrandFramerMotion;
        case "tb:TbBrandFramer":
            return TbBrandFramer;
        case "tb:TbBrandFunimation":
            return TbBrandFunimation;
        case "tb:TbBrandGatsby":
            return TbBrandGatsby;
        case "tb:TbBrandGit":
            return TbBrandGit;
        case "tb:TbBrandGithubCopilot":
            return TbBrandGithubCopilot;
        case "tb:TbBrandGithub":
            return TbBrandGithub;
        case "tb:TbBrandGitlab":
            return TbBrandGitlab;
        case "tb:TbBrandGmail":
            return TbBrandGmail;
        case "tb:TbBrandGolang":
            return TbBrandGolang;
        case "tb:TbBrandGoogleAnalytics":
            return TbBrandGoogleAnalytics;
        case "tb:TbBrandGoogleBigQuery":
            return TbBrandGoogleBigQuery;
        case "tb:TbBrandGoogleDrive":
            return TbBrandGoogleDrive;
        case "tb:TbBrandGoogleFit":
            return TbBrandGoogleFit;
        case "tb:TbBrandGoogleHome":
            return TbBrandGoogleHome;
        case "tb:TbBrandGoogleMaps":
            return TbBrandGoogleMaps;
        case "tb:TbBrandGoogleOne":
            return TbBrandGoogleOne;
        case "tb:TbBrandGooglePhotos":
            return TbBrandGooglePhotos;
        case "tb:TbBrandGooglePlay":
            return TbBrandGooglePlay;
        case "tb:TbBrandGooglePodcasts":
            return TbBrandGooglePodcasts;
        case "tb:TbBrandGoogle":
            return TbBrandGoogle;
        case "tb:TbBrandGrammarly":
            return TbBrandGrammarly;
        case "tb:TbBrandGraphql":
            return TbBrandGraphql;
        case "tb:TbBrandGravatar":
            return TbBrandGravatar;
        case "tb:TbBrandGrindr":
            return TbBrandGrindr;
        case "tb:TbBrandGuardian":
            return TbBrandGuardian;
        case "tb:TbBrandGumroad":
            return TbBrandGumroad;
        case "tb:TbBrandHackerrank":
            return TbBrandHackerrank;
        case "tb:TbBrandHbo":
            return TbBrandHbo;
        case "tb:TbBrandHeadlessui":
            return TbBrandHeadlessui;
        case "tb:TbBrandHexo":
            return TbBrandHexo;
        case "tb:TbBrandHipchat":
            return TbBrandHipchat;
        case "tb:TbBrandHtml5":
            return TbBrandHtml5;
        case "tb:TbBrandInertia":
            return TbBrandInertia;
        case "tb:TbBrandInstagram":
            return TbBrandInstagram;
        case "tb:TbBrandIntercom":
            return TbBrandIntercom;
        case "tb:TbBrandItch":
            return TbBrandItch;
        case "tb:TbBrandJavascript":
            return TbBrandJavascript;
        case "tb:TbBrandJuejin":
            return TbBrandJuejin;
        case "tb:TbBrandKakoTalk":
            return TbBrandKakoTalk;
        case "tb:TbBrandKbin":
            return TbBrandKbin;
        case "tb:TbBrandKick":
            return TbBrandKick;
        case "tb:TbBrandKickstarter":
            return TbBrandKickstarter;
        case "tb:TbBrandKotlin":
            return TbBrandKotlin;
        case "tb:TbBrandLaravel":
            return TbBrandLaravel;
        case "tb:TbBrandLastfm":
            return TbBrandLastfm;
        case "tb:TbBrandLeetcode":
            return TbBrandLeetcode;
        case "tb:TbBrandLetterboxd":
            return TbBrandLetterboxd;
        case "tb:TbBrandLine":
            return TbBrandLine;
        case "tb:TbBrandLinkedin":
            return TbBrandLinkedin;
        case "tb:TbBrandLinktree":
            return TbBrandLinktree;
        case "tb:TbBrandLinqpad":
            return TbBrandLinqpad;
        case "tb:TbBrandLivewire":
            return TbBrandLivewire;
        case "tb:TbBrandLoom":
            return TbBrandLoom;
        case "tb:TbBrandMailgun":
            return TbBrandMailgun;
        case "tb:TbBrandMantine":
            return TbBrandMantine;
        case "tb:TbBrandMastercard":
            return TbBrandMastercard;
        case "tb:TbBrandMastodon":
            return TbBrandMastodon;
        case "tb:TbBrandMatrix":
            return TbBrandMatrix;
        case "tb:TbBrandMcdonalds":
            return TbBrandMcdonalds;
        case "tb:TbBrandMedium":
            return TbBrandMedium;
        case "tb:TbBrandMeetup":
            return TbBrandMeetup;
        case "tb:TbBrandMercedes":
            return TbBrandMercedes;
        case "tb:TbBrandMessenger":
            return TbBrandMessenger;
        case "tb:TbBrandMeta":
            return TbBrandMeta;
        case "tb:TbBrandMetabrainz":
            return TbBrandMetabrainz;
        case "tb:TbBrandMinecraft":
            return TbBrandMinecraft;
        case "tb:TbBrandMiniprogram":
            return TbBrandMiniprogram;
        case "tb:TbBrandMixpanel":
            return TbBrandMixpanel;
        case "tb:TbBrandMonday":
            return TbBrandMonday;
        case "tb:TbBrandMongodb":
            return TbBrandMongodb;
        case "tb:TbBrandMyOppo":
            return TbBrandMyOppo;
        case "tb:TbBrandMysql":
            return TbBrandMysql;
        case "tb:TbBrandNationalGeographic":
            return TbBrandNationalGeographic;
        case "tb:TbBrandNem":
            return TbBrandNem;
        case "tb:TbBrandNetbeans":
            return TbBrandNetbeans;
        case "tb:TbBrandNeteaseMusic":
            return TbBrandNeteaseMusic;
        case "tb:TbBrandNetflix":
            return TbBrandNetflix;
        case "tb:TbBrandNexo":
            return TbBrandNexo;
        case "tb:TbBrandNextcloud":
            return TbBrandNextcloud;
        case "tb:TbBrandNextjs":
            return TbBrandNextjs;
        case "tb:TbBrandNodejs":
            return TbBrandNodejs;
        case "tb:TbBrandNordVpn":
            return TbBrandNordVpn;
        case "tb:TbBrandNotion":
            return TbBrandNotion;
        case "tb:TbBrandNpm":
            return TbBrandNpm;
        case "tb:TbBrandNuxt":
            return TbBrandNuxt;
        case "tb:TbBrandNytimes":
            return TbBrandNytimes;
        case "tb:TbBrandOauth":
            return TbBrandOauth;
        case "tb:TbBrandOffice":
            return TbBrandOffice;
        case "tb:TbBrandOkRu":
            return TbBrandOkRu;
        case "tb:TbBrandOnedrive":
            return TbBrandOnedrive;
        case "tb:TbBrandOnlyfans":
            return TbBrandOnlyfans;
        case "tb:TbBrandOpenSource":
            return TbBrandOpenSource;
        case "tb:TbBrandOpenai":
            return TbBrandOpenai;
        case "tb:TbBrandOpenvpn":
            return TbBrandOpenvpn;
        case "tb:TbBrandOpera":
            return TbBrandOpera;
        case "tb:TbBrandPagekit":
            return TbBrandPagekit;
        case "tb:TbBrandParsinta":
            return TbBrandParsinta;
        case "tb:TbBrandPatreon":
            return TbBrandPatreon;
        case "tb:TbBrandPaypal":
            return TbBrandPaypal;
        case "tb:TbBrandPaypay":
            return TbBrandPaypay;
        case "tb:TbBrandPeanut":
            return TbBrandPeanut;
        case "tb:TbBrandPepsi":
            return TbBrandPepsi;
        case "tb:TbBrandPhp":
            return TbBrandPhp;
        case "tb:TbBrandPicsart":
            return TbBrandPicsart;
        case "tb:TbBrandPinterest":
            return TbBrandPinterest;
        case "tb:TbBrandPlanetscale":
            return TbBrandPlanetscale;
        case "tb:TbBrandPnpm":
            return TbBrandPnpm;
        case "tb:TbBrandPocket":
            return TbBrandPocket;
        case "tb:TbBrandPolymer":
            return TbBrandPolymer;
        case "tb:TbBrandPowershell":
            return TbBrandPowershell;
        case "tb:TbBrandPrintables":
            return TbBrandPrintables;
        case "tb:TbBrandPrisma":
            return TbBrandPrisma;
        case "tb:TbBrandProducthunt":
            return TbBrandProducthunt;
        case "tb:TbBrandPushbullet":
            return TbBrandPushbullet;
        case "tb:TbBrandPushover":
            return TbBrandPushover;
        case "tb:TbBrandPython":
            return TbBrandPython;
        case "tb:TbBrandQq":
            return TbBrandQq;
        case "tb:TbBrandRadixUi":
            return TbBrandRadixUi;
        case "tb:TbBrandReactNative":
            return TbBrandReactNative;
        case "tb:TbBrandReact":
            return TbBrandReact;
        case "tb:TbBrandReason":
            return TbBrandReason;
        case "tb:TbBrandReddit":
            return TbBrandReddit;
        case "tb:TbBrandRedhat":
            return TbBrandRedhat;
        case "tb:TbBrandRedux":
            return TbBrandRedux;
        case "tb:TbBrandRevolut":
            return TbBrandRevolut;
        case "tb:TbBrandRumble":
            return TbBrandRumble;
        case "tb:TbBrandRust":
            return TbBrandRust;
        case "tb:TbBrandSafari":
            return TbBrandSafari;
        case "tb:TbBrandSamsungpass":
            return TbBrandSamsungpass;
        case "tb:TbBrandSass":
            return TbBrandSass;
        case "tb:TbBrandSentry":
            return TbBrandSentry;
        case "tb:TbBrandSharik":
            return TbBrandSharik;
        case "tb:TbBrandShazam":
            return TbBrandShazam;
        case "tb:TbBrandShopee":
            return TbBrandShopee;
        case "tb:TbBrandSketch":
            return TbBrandSketch;
        case "tb:TbBrandSkype":
            return TbBrandSkype;
        case "tb:TbBrandSlack":
            return TbBrandSlack;
        case "tb:TbBrandSnapchat":
            return TbBrandSnapchat;
        case "tb:TbBrandSnapseed":
            return TbBrandSnapseed;
        case "tb:TbBrandSnowflake":
            return TbBrandSnowflake;
        case "tb:TbBrandSocketIo":
            return TbBrandSocketIo;
        case "tb:TbBrandSolidjs":
            return TbBrandSolidjs;
        case "tb:TbBrandSoundcloud":
            return TbBrandSoundcloud;
        case "tb:TbBrandSpacehey":
            return TbBrandSpacehey;
        case "tb:TbBrandSpeedtest":
            return TbBrandSpeedtest;
        case "tb:TbBrandSpotify":
            return TbBrandSpotify;
        case "tb:TbBrandStackoverflow":
            return TbBrandStackoverflow;
        case "tb:TbBrandStackshare":
            return TbBrandStackshare;
        case "tb:TbBrandSteam":
            return TbBrandSteam;
        case "tb:TbBrandStocktwits":
            return TbBrandStocktwits;
        case "tb:TbBrandStorj":
            return TbBrandStorj;
        case "tb:TbBrandStorybook":
            return TbBrandStorybook;
        case "tb:TbBrandStorytel":
            return TbBrandStorytel;
        case "tb:TbBrandStrava":
            return TbBrandStrava;
        case "tb:TbBrandStripe":
            return TbBrandStripe;
        case "tb:TbBrandSublimeText":
            return TbBrandSublimeText;
        case "tb:TbBrandSugarizer":
            return TbBrandSugarizer;
        case "tb:TbBrandSupabase":
            return TbBrandSupabase;
        case "tb:TbBrandSuperhuman":
            return TbBrandSuperhuman;
        case "tb:TbBrandSupernova":
            return TbBrandSupernova;
        case "tb:TbBrandSurfshark":
            return TbBrandSurfshark;
        case "tb:TbBrandSvelte":
            return TbBrandSvelte;
        case "tb:TbBrandSwift":
            return TbBrandSwift;
        case "tb:TbBrandSymfony":
            return TbBrandSymfony;
        case "tb:TbBrandTabler":
            return TbBrandTabler;
        case "tb:TbBrandTailwind":
            return TbBrandTailwind;
        case "tb:TbBrandTaobao":
            return TbBrandTaobao;
        case "tb:TbBrandTeams":
            return TbBrandTeams;
        case "tb:TbBrandTed":
            return TbBrandTed;
        case "tb:TbBrandTelegram":
            return TbBrandTelegram;
        case "tb:TbBrandTerraform":
            return TbBrandTerraform;
        case "tb:TbBrandTesla":
            return TbBrandTesla;
        case "tb:TbBrandTether":
            return TbBrandTether;
        case "tb:TbBrandThingiverse":
            return TbBrandThingiverse;
        case "tb:TbBrandThreads":
            return TbBrandThreads;
        case "tb:TbBrandThreejs":
            return TbBrandThreejs;
        case "tb:TbBrandTidal":
            return TbBrandTidal;
        case "tb:TbBrandTiktok":
            return TbBrandTiktok;
        case "tb:TbBrandTinder":
            return TbBrandTinder;
        case "tb:TbBrandTopbuzz":
            return TbBrandTopbuzz;
        case "tb:TbBrandTorchain":
            return TbBrandTorchain;
        case "tb:TbBrandToyota":
            return TbBrandToyota;
        case "tb:TbBrandTrello":
            return TbBrandTrello;
        case "tb:TbBrandTripadvisor":
            return TbBrandTripadvisor;
        case "tb:TbBrandTumblr":
            return TbBrandTumblr;
        case "tb:TbBrandTwilio":
            return TbBrandTwilio;
        case "tb:TbBrandTwitch":
            return TbBrandTwitch;
        case "tb:TbBrandTwitter":
            return TbBrandTwitter;
        case "tb:TbBrandTypescript":
            return TbBrandTypescript;
        case "tb:TbBrandUber":
            return TbBrandUber;
        case "tb:TbBrandUbuntu":
            return TbBrandUbuntu;
        case "tb:TbBrandUnity":
            return TbBrandUnity;
        case "tb:TbBrandUnsplash":
            return TbBrandUnsplash;
        case "tb:TbBrandUpwork":
            return TbBrandUpwork;
        case "tb:TbBrandValorant":
            return TbBrandValorant;
        case "tb:TbBrandVercel":
            return TbBrandVercel;
        case "tb:TbBrandVimeo":
            return TbBrandVimeo;
        case "tb:TbBrandVinted":
            return TbBrandVinted;
        case "tb:TbBrandVisa":
            return TbBrandVisa;
        case "tb:TbBrandVisualStudio":
            return TbBrandVisualStudio;
        case "tb:TbBrandVite":
            return TbBrandVite;
        case "tb:TbBrandVivaldi":
            return TbBrandVivaldi;
        case "tb:TbBrandVk":
            return TbBrandVk;
        case "tb:TbBrandVlc":
            return TbBrandVlc;
        case "tb:TbBrandVolkswagen":
            return TbBrandVolkswagen;
        case "tb:TbBrandVsco":
            return TbBrandVsco;
        case "tb:TbBrandVscode":
            return TbBrandVscode;
        case "tb:TbBrandVue":
            return TbBrandVue;
        case "tb:TbBrandWalmart":
            return TbBrandWalmart;
        case "tb:TbBrandWaze":
            return TbBrandWaze;
        case "tb:TbBrandWebflow":
            return TbBrandWebflow;
        case "tb:TbBrandWechat":
            return TbBrandWechat;
        case "tb:TbBrandWeibo":
            return TbBrandWeibo;
        case "tb:TbBrandWhatsapp":
            return TbBrandWhatsapp;
        case "tb:TbBrandWikipedia":
            return TbBrandWikipedia;
        case "tb:TbBrandWindows":
            return TbBrandWindows;
        case "tb:TbBrandWindy":
            return TbBrandWindy;
        case "tb:TbBrandWish":
            return TbBrandWish;
        case "tb:TbBrandWix":
            return TbBrandWix;
        case "tb:TbBrandWordpress":
            return TbBrandWordpress;
        case "tb:TbBrandX":
            return TbBrandX;
        case "tb:TbBrandXamarin":
            return TbBrandXamarin;
        case "tb:TbBrandXbox":
            return TbBrandXbox;
        case "tb:TbBrandXdeep":
            return TbBrandXdeep;
        case "tb:TbBrandXing":
            return TbBrandXing;
        case "tb:TbBrandYahoo":
            return TbBrandYahoo;
        case "tb:TbBrandYandex":
            return TbBrandYandex;
        case "tb:TbBrandYarn":
            return TbBrandYarn;
        case "tb:TbBrandYatse":
            return TbBrandYatse;
        case "tb:TbBrandYcombinator":
            return TbBrandYcombinator;
        case "tb:TbBrandYoutubeKids":
            return TbBrandYoutubeKids;
        case "tb:TbBrandYoutube":
            return TbBrandYoutube;
        case "tb:TbBrandZalando":
            return TbBrandZalando;
        case "tb:TbBrandZapier":
            return TbBrandZapier;
        case "tb:TbBrandZeit":
            return TbBrandZeit;
        case "tb:TbBrandZhihu":
            return TbBrandZhihu;
        case "tb:TbBrandZoom":
            return TbBrandZoom;
        case "tb:TbBrandZulip":
            return TbBrandZulip;
        case "tb:TbBrandZwift":
            return TbBrandZwift;
        case "tb:TbBreadOff":
            return TbBreadOff;
        case "tb:TbBread":
            return TbBread;
        case "tb:TbBriefcase2":
            return TbBriefcase2;
        case "tb:TbBriefcaseOff":
            return TbBriefcaseOff;
        case "tb:TbBriefcase":
            return TbBriefcase;
        case "tb:TbBrightness2":
            return TbBrightness2;
        case "tb:TbBrightnessAuto":
            return TbBrightnessAuto;
        case "tb:TbBrightnessDown":
            return TbBrightnessDown;
        case "tb:TbBrightnessHalf":
            return TbBrightnessHalf;
        case "tb:TbBrightnessOff":
            return TbBrightnessOff;
        case "tb:TbBrightnessUp":
            return TbBrightnessUp;
        case "tb:TbBrightness":
            return TbBrightness;
        case "tb:TbBroadcastOff":
            return TbBroadcastOff;
        case "tb:TbBroadcast":
            return TbBroadcast;
        case "tb:TbBrowserCheck":
            return TbBrowserCheck;
        case "tb:TbBrowserMaximize":
            return TbBrowserMaximize;
        case "tb:TbBrowserMinus":
            return TbBrowserMinus;
        case "tb:TbBrowserOff":
            return TbBrowserOff;
        case "tb:TbBrowserPlus":
            return TbBrowserPlus;
        case "tb:TbBrowserShare":
            return TbBrowserShare;
        case "tb:TbBrowserX":
            return TbBrowserX;
        case "tb:TbBrowser":
            return TbBrowser;
        case "tb:TbBrushOff":
            return TbBrushOff;
        case "tb:TbBrush":
            return TbBrush;
        case "tb:TbBubbleMinus":
            return TbBubbleMinus;
        case "tb:TbBubblePlus":
            return TbBubblePlus;
        case "tb:TbBubbleTea2":
            return TbBubbleTea2;
        case "tb:TbBubbleTea":
            return TbBubbleTea;
        case "tb:TbBubbleText":
            return TbBubbleText;
        case "tb:TbBubbleX":
            return TbBubbleX;
        case "tb:TbBubble":
            return TbBubble;
        case "tb:TbBucketDroplet":
            return TbBucketDroplet;
        case "tb:TbBucketOff":
            return TbBucketOff;
        case "tb:TbBucket":
            return TbBucket;
        case "tb:TbBugOff":
            return TbBugOff;
        case "tb:TbBug":
            return TbBug;
        case "tb:TbBuildingAirport":
            return TbBuildingAirport;
        case "tb:TbBuildingArch":
            return TbBuildingArch;
        case "tb:TbBuildingBank":
            return TbBuildingBank;
        case "tb:TbBuildingBridge2":
            return TbBuildingBridge2;
        case "tb:TbBuildingBridge":
            return TbBuildingBridge;
        case "tb:TbBuildingBroadcastTower":
            return TbBuildingBroadcastTower;
        case "tb:TbBuildingBurjAlArab":
            return TbBuildingBurjAlArab;
        case "tb:TbBuildingCarousel":
            return TbBuildingCarousel;
        case "tb:TbBuildingCastle":
            return TbBuildingCastle;
        case "tb:TbBuildingChurch":
            return TbBuildingChurch;
        case "tb:TbBuildingCircus":
            return TbBuildingCircus;
        case "tb:TbBuildingCog":
            return TbBuildingCog;
        case "tb:TbBuildingCommunity":
            return TbBuildingCommunity;
        case "tb:TbBuildingCottage":
            return TbBuildingCottage;
        case "tb:TbBuildingEstate":
            return TbBuildingEstate;
        case "tb:TbBuildingFactory2":
            return TbBuildingFactory2;
        case "tb:TbBuildingFactory":
            return TbBuildingFactory;
        case "tb:TbBuildingFortress":
            return TbBuildingFortress;
        case "tb:TbBuildingHospital":
            return TbBuildingHospital;
        case "tb:TbBuildingLighthouse":
            return TbBuildingLighthouse;
        case "tb:TbBuildingMinus":
            return TbBuildingMinus;
        case "tb:TbBuildingMonument":
            return TbBuildingMonument;
        case "tb:TbBuildingMosque":
            return TbBuildingMosque;
        case "tb:TbBuildingOff":
            return TbBuildingOff;
        case "tb:TbBuildingPavilion":
            return TbBuildingPavilion;
        case "tb:TbBuildingPlus":
            return TbBuildingPlus;
        case "tb:TbBuildingSkyscraper":
            return TbBuildingSkyscraper;
        case "tb:TbBuildingStadium":
            return TbBuildingStadium;
        case "tb:TbBuildingStore":
            return TbBuildingStore;
        case "tb:TbBuildingTunnel":
            return TbBuildingTunnel;
        case "tb:TbBuildingWarehouse":
            return TbBuildingWarehouse;
        case "tb:TbBuildingWindTurbine":
            return TbBuildingWindTurbine;
        case "tb:TbBuilding":
            return TbBuilding;
        case "tb:TbBuildings":
            return TbBuildings;
        case "tb:TbBulbOff":
            return TbBulbOff;
        case "tb:TbBulb":
            return TbBulb;
        case "tb:TbBulldozer":
            return TbBulldozer;
        case "tb:TbBurger":
            return TbBurger;
        case "tb:TbBusOff":
            return TbBusOff;
        case "tb:TbBusStop":
            return TbBusStop;
        case "tb:TbBus":
            return TbBus;
        case "tb:TbBusinessplan":
            return TbBusinessplan;
        case "tb:TbButterfly":
            return TbButterfly;
        case "tb:TbCactusOff":
            return TbCactusOff;
        case "tb:TbCactus":
            return TbCactus;
        case "tb:TbCakeOff":
            return TbCakeOff;
        case "tb:TbCakeRoll":
            return TbCakeRoll;
        case "tb:TbCake":
            return TbCake;
        case "tb:TbCalculatorOff":
            return TbCalculatorOff;
        case "tb:TbCalculator":
            return TbCalculator;
        case "tb:TbCalendarBolt":
            return TbCalendarBolt;
        case "tb:TbCalendarCancel":
            return TbCalendarCancel;
        case "tb:TbCalendarCheck":
            return TbCalendarCheck;
        case "tb:TbCalendarClock":
            return TbCalendarClock;
        case "tb:TbCalendarCode":
            return TbCalendarCode;
        case "tb:TbCalendarCog":
            return TbCalendarCog;
        case "tb:TbCalendarDollar":
            return TbCalendarDollar;
        case "tb:TbCalendarDot":
            return TbCalendarDot;
        case "tb:TbCalendarDown":
            return TbCalendarDown;
        case "tb:TbCalendarDue":
            return TbCalendarDue;
        case "tb:TbCalendarEvent":
            return TbCalendarEvent;
        case "tb:TbCalendarExclamation":
            return TbCalendarExclamation;
        case "tb:TbCalendarHeart":
            return TbCalendarHeart;
        case "tb:TbCalendarMinus":
            return TbCalendarMinus;
        case "tb:TbCalendarMonth":
            return TbCalendarMonth;
        case "tb:TbCalendarOff":
            return TbCalendarOff;
        case "tb:TbCalendarPause":
            return TbCalendarPause;
        case "tb:TbCalendarPin":
            return TbCalendarPin;
        case "tb:TbCalendarPlus":
            return TbCalendarPlus;
        case "tb:TbCalendarQuestion":
            return TbCalendarQuestion;
        case "tb:TbCalendarRepeat":
            return TbCalendarRepeat;
        case "tb:TbCalendarSad":
            return TbCalendarSad;
        case "tb:TbCalendarSearch":
            return TbCalendarSearch;
        case "tb:TbCalendarShare":
            return TbCalendarShare;
        case "tb:TbCalendarSmile":
            return TbCalendarSmile;
        case "tb:TbCalendarStar":
            return TbCalendarStar;
        case "tb:TbCalendarStats":
            return TbCalendarStats;
        case "tb:TbCalendarTime":
            return TbCalendarTime;
        case "tb:TbCalendarUp":
            return TbCalendarUp;
        case "tb:TbCalendarUser":
            return TbCalendarUser;
        case "tb:TbCalendarWeek":
            return TbCalendarWeek;
        case "tb:TbCalendarX":
            return TbCalendarX;
        case "tb:TbCalendar":
            return TbCalendar;
        case "tb:TbCameraAi":
            return TbCameraAi;
        case "tb:TbCameraBitcoin":
            return TbCameraBitcoin;
        case "tb:TbCameraBolt":
            return TbCameraBolt;
        case "tb:TbCameraCancel":
            return TbCameraCancel;
        case "tb:TbCameraCheck":
            return TbCameraCheck;
        case "tb:TbCameraCode":
            return TbCameraCode;
        case "tb:TbCameraCog":
            return TbCameraCog;
        case "tb:TbCameraDollar":
            return TbCameraDollar;
        case "tb:TbCameraDown":
            return TbCameraDown;
        case "tb:TbCameraExclamation":
            return TbCameraExclamation;
        case "tb:TbCameraHeart":
            return TbCameraHeart;
        case "tb:TbCameraMinus":
            return TbCameraMinus;
        case "tb:TbCameraMoon":
            return TbCameraMoon;
        case "tb:TbCameraOff":
            return TbCameraOff;
        case "tb:TbCameraPause":
            return TbCameraPause;
        case "tb:TbCameraPin":
            return TbCameraPin;
        case "tb:TbCameraPlus":
            return TbCameraPlus;
        case "tb:TbCameraQuestion":
            return TbCameraQuestion;
        case "tb:TbCameraRotate":
            return TbCameraRotate;
        case "tb:TbCameraSearch":
            return TbCameraSearch;
        case "tb:TbCameraSelfie":
            return TbCameraSelfie;
        case "tb:TbCameraShare":
            return TbCameraShare;
        case "tb:TbCameraSpark":
            return TbCameraSpark;
        case "tb:TbCameraStar":
            return TbCameraStar;
        case "tb:TbCameraUp":
            return TbCameraUp;
        case "tb:TbCameraX":
            return TbCameraX;
        case "tb:TbCamera":
            return TbCamera;
        case "tb:TbCamper":
            return TbCamper;
        case "tb:TbCampfire":
            return TbCampfire;
        case "tb:TbCancel":
            return TbCancel;
        case "tb:TbCandle":
            return TbCandle;
        case "tb:TbCandyOff":
            return TbCandyOff;
        case "tb:TbCandy":
            return TbCandy;
        case "tb:TbCane":
            return TbCane;
        case "tb:TbCannabis":
            return TbCannabis;
        case "tb:TbCapProjecting":
            return TbCapProjecting;
        case "tb:TbCapRounded":
            return TbCapRounded;
        case "tb:TbCapStraight":
            return TbCapStraight;
        case "tb:TbCapsuleHorizontal":
            return TbCapsuleHorizontal;
        case "tb:TbCapsule":
            return TbCapsule;
        case "tb:TbCaptureOff":
            return TbCaptureOff;
        case "tb:TbCapture":
            return TbCapture;
        case "tb:TbCar4Wd":
            return TbCar4Wd;
        case "tb:TbCarCrane":
            return TbCarCrane;
        case "tb:TbCarCrash":
            return TbCarCrash;
        case "tb:TbCarFan1":
            return TbCarFan1;
        case "tb:TbCarFan2":
            return TbCarFan2;
        case "tb:TbCarFan3":
            return TbCarFan3;
        case "tb:TbCarFanAuto":
            return TbCarFanAuto;
        case "tb:TbCarFan":
            return TbCarFan;
        case "tb:TbCarGarage":
            return TbCarGarage;
        case "tb:TbCarOff":
            return TbCarOff;
        case "tb:TbCarSuv":
            return TbCarSuv;
        case "tb:TbCarTurbine":
            return TbCarTurbine;
    }
}
