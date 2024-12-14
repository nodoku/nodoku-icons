import type {IconType} from "react-icons";

import {
    LiaPawSolid,
    LiaPaypal,
    LiaPeaceSolid,
    LiaPenAltSolid,
    LiaPenFancySolid,
    LiaPenNibSolid,
    LiaPenSolid,
    LiaPenSquareSolid,
    LiaPencilAltSolid,
    LiaPencilRulerSolid,
    LiaPennyArcade,
    LiaPeopleCarrySolid,
    LiaPepperHotSolid,
    LiaPercentSolid,
    LiaPercentageSolid,
    LiaPeriscope,
    LiaPersonBoothSolid,
    LiaPhabricator,
    LiaPhoenixFramework,
    LiaPhoenixSquadron,
    LiaPhoneAltSolid,
    LiaPhoneSlashSolid,
    LiaPhoneSolid,
    LiaPhoneSquareAltSolid,
    LiaPhoneSquareSolid,
    LiaPhoneVolumeSolid,
    LiaPhotoVideoSolid,
    LiaPhp,
    LiaPiedPiperAlt,
    LiaPiedPiperHat,
    LiaPiedPiperPp,
    LiaPiedPiper,
    LiaPiggyBankSolid,
    LiaPillsSolid,
    LiaPinterestP,
    LiaPinterestSquare,
    LiaPinterest,
    LiaPizzaSliceSolid,
    LiaPlaceOfWorshipSolid,
    LiaPlaneArrivalSolid,
    LiaPlaneDepartureSolid,
    LiaPlaneSolid,
    LiaPlayCircleSolid,
    LiaPlayCircle,
    LiaPlaySolid,
    LiaPlaystation,
    LiaPlugSolid,
    LiaPlusCircleSolid,
    LiaPlusSolid,
    LiaPlusSquareSolid,
    LiaPlusSquare,
    LiaPodcastSolid,
    LiaPollHSolid,
    LiaPollSolid,
    LiaPooSolid,
    LiaPooStormSolid,
    LiaPoopSolid,
    LiaPortraitSolid,
    LiaPoundSignSolid,
    LiaPowerOffSolid,
    LiaPraySolid,
    LiaPrayingHandsSolid,
    LiaPrescriptionBottleAltSolid,
    LiaPrescriptionBottleSolid,
    LiaPrescriptionSolid,
    LiaPrintSolid,
    LiaProceduresSolid,
    LiaProductHunt,
    LiaProjectDiagramSolid,
    LiaPushed,
    LiaPuzzlePieceSolid,
    LiaPython,
    LiaQq,
    LiaQrcodeSolid,
    LiaQuestionCircleSolid,
    LiaQuestionCircle,
    LiaQuestionSolid,
    LiaQuidditchSolid,
    LiaQuinscape,
    LiaQuora,
    LiaQuoteLeftSolid,
    LiaQuoteRightSolid,
    LiaQuranSolid,
    LiaRProject,
    LiaRadiationAltSolid,
    LiaRadiationSolid,
    LiaRainbowSolid,
    LiaRandomSolid,
    LiaRaspberryPi,
    LiaRavelry,
    LiaReact,
    LiaReacteurope,
    LiaReadme,
    LiaRebel,
    LiaReceiptSolid,
    LiaRecordVinylSolid,
    LiaRecycleSolid,
    LiaRedRiver,
    LiaRedditAlien,
    LiaRedditSquare,
    LiaReddit,
    LiaRedhat,
    LiaRedoAltSolid,
    LiaRedoSolid,
    LiaRegisteredSolid,
    LiaRegistered,
    LiaRemoveFormatSolid,
    LiaRenren,
    LiaReplyAllSolid,
    LiaReplySolid,
    LiaReplyd,
    LiaRepublicanSolid,
    LiaResearchgate,
    LiaResolving,
    LiaRestroomSolid,
    LiaRetweetSolid,
    LiaRev,
    LiaRibbonSolid,
    LiaRingSolid,
    LiaRoadSolid,
    LiaRobotSolid,
    LiaRocketSolid,
    LiaRocketchat,
    LiaRockrms,
    LiaRouteSolid,
    LiaRssSolid,
    LiaRssSquareSolid,
    LiaRubleSignSolid,
    LiaRulerCombinedSolid,
    LiaRulerHorizontalSolid,
    LiaRulerSolid,
    LiaRulerVerticalSolid,
    LiaRunningSolid,
    LiaRupeeSignSolid,
    LiaSadCrySolid,
    LiaSadCry,
    LiaSadTearSolid,
    LiaSadTear,
    LiaSafari,
    LiaSalesforce,
    LiaSass,
    LiaSatelliteDishSolid,
    LiaSatelliteSolid,
    LiaSaveSolid,
    LiaSave,
    LiaSchlix,
    LiaSchoolSolid,
    LiaScrewdriverSolid,
    LiaScribd,
    LiaScrollSolid,
    LiaSdCardSolid,
    LiaSearchDollarSolid,
    LiaSearchLocationSolid,
    LiaSearchMinusSolid,
    LiaSearchPlusSolid,
    LiaSearchSolid,
    LiaSearchengin,
    LiaSeedlingSolid,
    LiaSellcast,
    LiaSellsy,
    LiaServerSolid,
    LiaServicestack,
    LiaShapesSolid,
    LiaShareAltSolid,
    LiaShareAltSquareSolid,
    LiaShareSolid,
    LiaShareSquareSolid,
    LiaShareSquare,
    LiaShekelSignSolid,
    LiaShieldAltSolid,
    LiaShipSolid,
    LiaShippingFastSolid,
    LiaShirtsinbulk,
    LiaShoePrintsSolid,
    LiaShoppingBagSolid,
    LiaShoppingBasketSolid,
    LiaShoppingCartSolid,
    LiaShopware,
    LiaShowerSolid,
    LiaShuttleVanSolid,
    LiaSignInAltSolid,
    LiaSignLanguageSolid,
    LiaSignOutAltSolid,
    LiaSignSolid,
    LiaSignalSolid,
    LiaSignatureSolid,
    LiaSimCardSolid,
    LiaSimplybuilt,
    LiaSistrix,
    LiaSitemapSolid,
    LiaSith,
    LiaSkatingSolid,
    LiaSketch,
    LiaSkiingNordicSolid,
    LiaSkiingSolid,
    LiaSkullCrossbonesSolid,
    LiaSkullSolid,
    LiaSkyatlas,
    LiaSkype,
    LiaSlackHash,
    LiaSlack,
    LiaSlashSolid,
    LiaSleighSolid,
    LiaSlidersHSolid,
    LiaSlideshare,
    LiaSmileBeamSolid,
    LiaSmileBeam,
    LiaSmileSolid,
    LiaSmileWinkSolid,
    LiaSmileWink,
    LiaSmile,
    LiaSmogSolid,
    LiaSmokingBanSolid,
    LiaSmokingSolid,
    LiaSmsSolid,
    LiaSnapchatGhost,
    LiaSnapchatSquare,
    LiaSnapchat,
    LiaSnowboardingSolid,
    LiaSnowflakeSolid,
    LiaSnowflake,
    LiaSnowmanSolid,
    LiaSnowplowSolid,
    LiaSocksSolid,
    LiaSolarPanelSolid,
    LiaSortAlphaDownAltSolid,
    LiaSortAlphaDownSolid,
    LiaSortAlphaUpAltSolid,
    LiaSortAlphaUpSolid,
    LiaSortAmountDownAltSolid,
    LiaSortAmountDownSolid,
    LiaSortAmountUpAltSolid,
    LiaSortAmountUpSolid,
    LiaSortDownSolid,
    LiaSortNumericDownAltSolid,
    LiaSortNumericDownSolid,
    LiaSortNumericUpAltSolid,
    LiaSortNumericUpSolid,
    LiaSortSolid,
    LiaSortUpSolid,
    LiaSoundcloud,
    LiaSourcetree,
    LiaSpaSolid,
    LiaSpaceShuttleSolid,
    LiaSpeakap,
    LiaSpeakerDeck,
    LiaSpellCheckSolid,
    LiaSpiderSolid,
    LiaSpinnerSolid,
    LiaSplotchSolid,
    LiaSpotify,
    LiaSprayCanSolid,
    LiaSquareFullSolid,
    LiaSquareRootAltSolid,
    LiaSquareSolid,
    LiaSquare,
    LiaSquarespace,
    LiaStackExchange,
    LiaStackOverflow,
    LiaStackpath,
    LiaStampSolid,
    LiaStarAndCrescentSolid,
    LiaStarHalfAltSolid,
    LiaStarHalfSolid,
    LiaStarHalf,
    LiaStarOfDavidSolid,
    LiaStarOfLifeSolid,
    LiaStarSolid,
    LiaStar,
    LiaStaylinked,
    LiaSteamSquare,
    LiaSteamSymbol,
    LiaSteam,
    LiaStepBackwardSolid,
    LiaStepForwardSolid,
    LiaStethoscopeSolid,
    LiaStickerMule,
    LiaStickyNoteSolid,
    LiaStickyNote,
    LiaStopCircleSolid,
    LiaStopCircle,
    LiaStopSolid,
    LiaStopwatchSolid,
    LiaStoreAltSolid,
    LiaStoreSolid,
    LiaStrava,
    LiaStreamSolid,
    LiaStreetViewSolid,
    LiaStrikethroughSolid,
    LiaStripeS,
    LiaStripe,
    LiaStroopwafelSolid,
    LiaStudiovinari,
    LiaStumbleuponCircle,
    LiaStumbleupon,
    LiaSubscriptSolid,
    LiaSubwaySolid,
    LiaSuitcaseRollingSolid,
    LiaSuitcaseSolid,
    LiaSunSolid,
    LiaSun,
    LiaSuperpowers,
    LiaSuperscriptSolid,
    LiaSupple,
    LiaSurpriseSolid,
    LiaSurprise,
    LiaSuse,
    LiaSwatchbookSolid,
    LiaSwift,
    LiaSwimmerSolid,
    LiaSwimmingPoolSolid,
    LiaSymfony,
    LiaSynagogueSolid,
    LiaSyncAltSolid,
    LiaSyncSolid,
    LiaSyringeSolid,
    LiaTableSolid,
    LiaTableTennisSolid,
    LiaTabletAltSolid,
    LiaTabletSolid,
    LiaTabletsSolid,
    LiaTachometerAltSolid,
    LiaTagSolid,
    LiaTagsSolid,
    LiaTapeSolid,
    LiaTasksSolid,
    LiaTaxiSolid,
    LiaTeamspeak,
    LiaTeethOpenSolid,
    LiaTeethSolid,
    LiaTelegramPlane,
    LiaTelegram,
    LiaTemperatureHighSolid,
    LiaTemperatureLowSolid,
    LiaTencentWeibo,
    LiaTengeSolid,
    LiaTerminalSolid,
    LiaTextHeightSolid,
    LiaTextWidthSolid,
    LiaThLargeSolid,
    LiaThListSolid,
    LiaThSolid,
    LiaTheRedYeti,
    LiaTheaterMasksSolid,
    LiaThemeco,
    LiaThemeisle,
    LiaThermometerEmptySolid,
    LiaThermometerFullSolid,
    LiaThermometerHalfSolid,
    LiaThermometerQuarterSolid,
    LiaThermometerSolid,
    LiaThermometerThreeQuartersSolid,
    LiaThinkPeaks,
    LiaThumbsDownSolid,
    LiaThumbsDown,
    LiaThumbsUpSolid,
    LiaThumbsUp,
    LiaThumbtackSolid,
    LiaTicketAltSolid,
    LiaTimesCircleSolid,
    LiaTimesCircle,
    LiaTimesSolid,
    LiaTintSlashSolid,
    LiaTintSolid,
    LiaTiredSolid,
    LiaTired,
    LiaToggleOffSolid,
    LiaToggleOnSolid,
    LiaToiletPaperSolid,
    LiaToiletSolid,
    LiaToolboxSolid,
    LiaToolsSolid,
    LiaToothSolid,
    LiaTorahSolid,
    LiaToriiGateSolid,
    LiaTractorSolid,
    LiaTradeFederation,
    LiaTrademarkSolid,
    LiaTrafficLightSolid,
    LiaTrainSolid,
    LiaTramSolid,
    LiaTransgenderAltSolid,
    LiaTransgenderSolid,
    LiaTrashAltSolid,
    LiaTrashAlt,
    LiaTrashRestoreAltSolid,
    LiaTrashRestoreSolid,
    LiaTrashSolid,
    LiaTreeSolid,
    LiaTrello,
    LiaTripadvisor,
    LiaTrophySolid,
    LiaTruckLoadingSolid,
    LiaTruckMonsterSolid,
    LiaTruckMovingSolid,
    LiaTruckPickupSolid,
    LiaTruckSolid,
    LiaTshirtSolid,
    LiaTtySolid,
    LiaTumblrSquare,
    LiaTumblr,
    LiaTvSolid,
    LiaTwitch,
    LiaTwitterSquare,
    LiaTwitter,
    LiaTypo3,
    LiaUber,
    LiaUbuntu,
    LiaUikit,
    LiaUmbraco,
    LiaUmbrellaBeachSolid,
    LiaUmbrellaSolid,
    LiaUnderlineSolid,
    LiaUndoAltSolid,
    LiaUndoSolid,
    LiaUniregistry,
    LiaUniversalAccessSolid,
    LiaUniversitySolid,
    LiaUnlinkSolid,
    LiaUnlockAltSolid,
    LiaUnlockSolid,
    LiaUntappd,
    LiaUploadSolid,
    LiaUps,
    LiaUsb,
    LiaUserAltSlashSolid,
    LiaUserAltSolid,
    LiaUserAstronautSolid,
    LiaUserCheckSolid,
    LiaUserCircleSolid,
    LiaUserCircle,
    LiaUserClockSolid,
    LiaUserCogSolid,
    LiaUserEditSolid,
    LiaUserFriendsSolid,
    LiaUserGraduateSolid,
    LiaUserInjuredSolid,
    LiaUserLockSolid,
    LiaUserMdSolid,
    LiaUserMinusSolid,
    LiaUserNinjaSolid,
    LiaUserNurseSolid,
    LiaUserPlusSolid,
    LiaUserSecretSolid,
    LiaUserShieldSolid,
    LiaUserSlashSolid,
    LiaUserSolid,
    LiaUserTagSolid,
    LiaUserTieSolid,
    LiaUserTimesSolid,
    LiaUser,
    LiaUsersCogSolid,
    LiaUsersSolid,
    LiaUsps,
    LiaUssunnah,
    LiaUtensilSpoonSolid,
    LiaUtensilsSolid,
    LiaVaadin,
    LiaVectorSquareSolid,
    LiaVenusDoubleSolid,
    LiaVenusMarsSolid,
    LiaVenusSolid,
    LiaViacoin,
    LiaViadeoSquare,
    LiaViadeo,
    LiaVialSolid,
    LiaVialsSolid,
    LiaViber,
    LiaVideoSlashSolid,
    LiaVideoSolid,
    LiaViharaSolid,
    LiaVimeoSquare,
    LiaVimeoV,
    LiaVimeo,
    LiaVine,
    LiaVk,
    LiaVnv,
    LiaVoicemailSolid,
    LiaVolleyballBallSolid,
    LiaVolumeDownSolid,
    LiaVolumeMuteSolid,
    LiaVolumeOffSolid,
    LiaVolumeUpSolid,
    LiaVoteYeaSolid,
    LiaVrCardboardSolid,
    LiaVuejs,
    LiaWalkingSolid,
    LiaWalletSolid,
    LiaWarehouseSolid,
    LiaWaterSolid,
    LiaWaveSquareSolid,
    LiaWaze,
    LiaWeebly,
    LiaWeibo,
    LiaWeightHangingSolid,
    LiaWeightSolid,
    LiaWeixin,
    LiaWhatsappSquare,
    LiaWhatsapp,
    LiaWheelchairSolid,
    LiaWhmcs,
    LiaWifiSolid,
    LiaWikipediaW,
    LiaWindSolid,
    LiaWindowCloseSolid,
    LiaWindowClose,
    LiaWindowMaximizeSolid,
    LiaWindowMaximize,
    LiaWindowMinimizeSolid,
    LiaWindowMinimize,
    LiaWindowRestoreSolid,
    LiaWindowRestore,
    LiaWindows,
    LiaWineBottleSolid,
    LiaWineGlassAltSolid,
    LiaWineGlassSolid,
    LiaWix,
    LiaWizardsOfTheCoast,
    LiaWolfPackBattalion,
    LiaWonSignSolid,
    LiaWordpressSimple,
    LiaWordpress,
    LiaWpbeginner,
    LiaWpexplorer,
    LiaWpforms,
    LiaWpressr,
    LiaWrenchSolid,
    LiaXRaySolid,
    LiaXbox,
    LiaXingSquare,
    LiaXing,
    LiaYCombinator,
    LiaYahoo,
    LiaYammer,
    LiaYandexInternational,
    LiaYandex,
    LiaYarn,
    LiaYelp,
    LiaYenSignSolid,
    LiaYinYangSolid,
    LiaYoast,
    LiaYoutubeSquare,
    LiaYoutube,
    LiaZhihu,
} from "react-icons/lia"

export function nameToReactIcon_lia_1(iconName: string): IconType | undefined {

    switch(iconName) {
        case "lia:LiaPawSolid":
            return LiaPawSolid;
        case "lia:LiaPaypal":
            return LiaPaypal;
        case "lia:LiaPeaceSolid":
            return LiaPeaceSolid;
        case "lia:LiaPenAltSolid":
            return LiaPenAltSolid;
        case "lia:LiaPenFancySolid":
            return LiaPenFancySolid;
        case "lia:LiaPenNibSolid":
            return LiaPenNibSolid;
        case "lia:LiaPenSolid":
            return LiaPenSolid;
        case "lia:LiaPenSquareSolid":
            return LiaPenSquareSolid;
        case "lia:LiaPencilAltSolid":
            return LiaPencilAltSolid;
        case "lia:LiaPencilRulerSolid":
            return LiaPencilRulerSolid;
        case "lia:LiaPennyArcade":
            return LiaPennyArcade;
        case "lia:LiaPeopleCarrySolid":
            return LiaPeopleCarrySolid;
        case "lia:LiaPepperHotSolid":
            return LiaPepperHotSolid;
        case "lia:LiaPercentSolid":
            return LiaPercentSolid;
        case "lia:LiaPercentageSolid":
            return LiaPercentageSolid;
        case "lia:LiaPeriscope":
            return LiaPeriscope;
        case "lia:LiaPersonBoothSolid":
            return LiaPersonBoothSolid;
        case "lia:LiaPhabricator":
            return LiaPhabricator;
        case "lia:LiaPhoenixFramework":
            return LiaPhoenixFramework;
        case "lia:LiaPhoenixSquadron":
            return LiaPhoenixSquadron;
        case "lia:LiaPhoneAltSolid":
            return LiaPhoneAltSolid;
        case "lia:LiaPhoneSlashSolid":
            return LiaPhoneSlashSolid;
        case "lia:LiaPhoneSolid":
            return LiaPhoneSolid;
        case "lia:LiaPhoneSquareAltSolid":
            return LiaPhoneSquareAltSolid;
        case "lia:LiaPhoneSquareSolid":
            return LiaPhoneSquareSolid;
        case "lia:LiaPhoneVolumeSolid":
            return LiaPhoneVolumeSolid;
        case "lia:LiaPhotoVideoSolid":
            return LiaPhotoVideoSolid;
        case "lia:LiaPhp":
            return LiaPhp;
        case "lia:LiaPiedPiperAlt":
            return LiaPiedPiperAlt;
        case "lia:LiaPiedPiperHat":
            return LiaPiedPiperHat;
        case "lia:LiaPiedPiperPp":
            return LiaPiedPiperPp;
        case "lia:LiaPiedPiper":
            return LiaPiedPiper;
        case "lia:LiaPiggyBankSolid":
            return LiaPiggyBankSolid;
        case "lia:LiaPillsSolid":
            return LiaPillsSolid;
        case "lia:LiaPinterestP":
            return LiaPinterestP;
        case "lia:LiaPinterestSquare":
            return LiaPinterestSquare;
        case "lia:LiaPinterest":
            return LiaPinterest;
        case "lia:LiaPizzaSliceSolid":
            return LiaPizzaSliceSolid;
        case "lia:LiaPlaceOfWorshipSolid":
            return LiaPlaceOfWorshipSolid;
        case "lia:LiaPlaneArrivalSolid":
            return LiaPlaneArrivalSolid;
        case "lia:LiaPlaneDepartureSolid":
            return LiaPlaneDepartureSolid;
        case "lia:LiaPlaneSolid":
            return LiaPlaneSolid;
        case "lia:LiaPlayCircleSolid":
            return LiaPlayCircleSolid;
        case "lia:LiaPlayCircle":
            return LiaPlayCircle;
        case "lia:LiaPlaySolid":
            return LiaPlaySolid;
        case "lia:LiaPlaystation":
            return LiaPlaystation;
        case "lia:LiaPlugSolid":
            return LiaPlugSolid;
        case "lia:LiaPlusCircleSolid":
            return LiaPlusCircleSolid;
        case "lia:LiaPlusSolid":
            return LiaPlusSolid;
        case "lia:LiaPlusSquareSolid":
            return LiaPlusSquareSolid;
        case "lia:LiaPlusSquare":
            return LiaPlusSquare;
        case "lia:LiaPodcastSolid":
            return LiaPodcastSolid;
        case "lia:LiaPollHSolid":
            return LiaPollHSolid;
        case "lia:LiaPollSolid":
            return LiaPollSolid;
        case "lia:LiaPooSolid":
            return LiaPooSolid;
        case "lia:LiaPooStormSolid":
            return LiaPooStormSolid;
        case "lia:LiaPoopSolid":
            return LiaPoopSolid;
        case "lia:LiaPortraitSolid":
            return LiaPortraitSolid;
        case "lia:LiaPoundSignSolid":
            return LiaPoundSignSolid;
        case "lia:LiaPowerOffSolid":
            return LiaPowerOffSolid;
        case "lia:LiaPraySolid":
            return LiaPraySolid;
        case "lia:LiaPrayingHandsSolid":
            return LiaPrayingHandsSolid;
        case "lia:LiaPrescriptionBottleAltSolid":
            return LiaPrescriptionBottleAltSolid;
        case "lia:LiaPrescriptionBottleSolid":
            return LiaPrescriptionBottleSolid;
        case "lia:LiaPrescriptionSolid":
            return LiaPrescriptionSolid;
        case "lia:LiaPrintSolid":
            return LiaPrintSolid;
        case "lia:LiaProceduresSolid":
            return LiaProceduresSolid;
        case "lia:LiaProductHunt":
            return LiaProductHunt;
        case "lia:LiaProjectDiagramSolid":
            return LiaProjectDiagramSolid;
        case "lia:LiaPushed":
            return LiaPushed;
        case "lia:LiaPuzzlePieceSolid":
            return LiaPuzzlePieceSolid;
        case "lia:LiaPython":
            return LiaPython;
        case "lia:LiaQq":
            return LiaQq;
        case "lia:LiaQrcodeSolid":
            return LiaQrcodeSolid;
        case "lia:LiaQuestionCircleSolid":
            return LiaQuestionCircleSolid;
        case "lia:LiaQuestionCircle":
            return LiaQuestionCircle;
        case "lia:LiaQuestionSolid":
            return LiaQuestionSolid;
        case "lia:LiaQuidditchSolid":
            return LiaQuidditchSolid;
        case "lia:LiaQuinscape":
            return LiaQuinscape;
        case "lia:LiaQuora":
            return LiaQuora;
        case "lia:LiaQuoteLeftSolid":
            return LiaQuoteLeftSolid;
        case "lia:LiaQuoteRightSolid":
            return LiaQuoteRightSolid;
        case "lia:LiaQuranSolid":
            return LiaQuranSolid;
        case "lia:LiaRProject":
            return LiaRProject;
        case "lia:LiaRadiationAltSolid":
            return LiaRadiationAltSolid;
        case "lia:LiaRadiationSolid":
            return LiaRadiationSolid;
        case "lia:LiaRainbowSolid":
            return LiaRainbowSolid;
        case "lia:LiaRandomSolid":
            return LiaRandomSolid;
        case "lia:LiaRaspberryPi":
            return LiaRaspberryPi;
        case "lia:LiaRavelry":
            return LiaRavelry;
        case "lia:LiaReact":
            return LiaReact;
        case "lia:LiaReacteurope":
            return LiaReacteurope;
        case "lia:LiaReadme":
            return LiaReadme;
        case "lia:LiaRebel":
            return LiaRebel;
        case "lia:LiaReceiptSolid":
            return LiaReceiptSolid;
        case "lia:LiaRecordVinylSolid":
            return LiaRecordVinylSolid;
        case "lia:LiaRecycleSolid":
            return LiaRecycleSolid;
        case "lia:LiaRedRiver":
            return LiaRedRiver;
        case "lia:LiaRedditAlien":
            return LiaRedditAlien;
        case "lia:LiaRedditSquare":
            return LiaRedditSquare;
        case "lia:LiaReddit":
            return LiaReddit;
        case "lia:LiaRedhat":
            return LiaRedhat;
        case "lia:LiaRedoAltSolid":
            return LiaRedoAltSolid;
        case "lia:LiaRedoSolid":
            return LiaRedoSolid;
        case "lia:LiaRegisteredSolid":
            return LiaRegisteredSolid;
        case "lia:LiaRegistered":
            return LiaRegistered;
        case "lia:LiaRemoveFormatSolid":
            return LiaRemoveFormatSolid;
        case "lia:LiaRenren":
            return LiaRenren;
        case "lia:LiaReplyAllSolid":
            return LiaReplyAllSolid;
        case "lia:LiaReplySolid":
            return LiaReplySolid;
        case "lia:LiaReplyd":
            return LiaReplyd;
        case "lia:LiaRepublicanSolid":
            return LiaRepublicanSolid;
        case "lia:LiaResearchgate":
            return LiaResearchgate;
        case "lia:LiaResolving":
            return LiaResolving;
        case "lia:LiaRestroomSolid":
            return LiaRestroomSolid;
        case "lia:LiaRetweetSolid":
            return LiaRetweetSolid;
        case "lia:LiaRev":
            return LiaRev;
        case "lia:LiaRibbonSolid":
            return LiaRibbonSolid;
        case "lia:LiaRingSolid":
            return LiaRingSolid;
        case "lia:LiaRoadSolid":
            return LiaRoadSolid;
        case "lia:LiaRobotSolid":
            return LiaRobotSolid;
        case "lia:LiaRocketSolid":
            return LiaRocketSolid;
        case "lia:LiaRocketchat":
            return LiaRocketchat;
        case "lia:LiaRockrms":
            return LiaRockrms;
        case "lia:LiaRouteSolid":
            return LiaRouteSolid;
        case "lia:LiaRssSolid":
            return LiaRssSolid;
        case "lia:LiaRssSquareSolid":
            return LiaRssSquareSolid;
        case "lia:LiaRubleSignSolid":
            return LiaRubleSignSolid;
        case "lia:LiaRulerCombinedSolid":
            return LiaRulerCombinedSolid;
        case "lia:LiaRulerHorizontalSolid":
            return LiaRulerHorizontalSolid;
        case "lia:LiaRulerSolid":
            return LiaRulerSolid;
        case "lia:LiaRulerVerticalSolid":
            return LiaRulerVerticalSolid;
        case "lia:LiaRunningSolid":
            return LiaRunningSolid;
        case "lia:LiaRupeeSignSolid":
            return LiaRupeeSignSolid;
        case "lia:LiaSadCrySolid":
            return LiaSadCrySolid;
        case "lia:LiaSadCry":
            return LiaSadCry;
        case "lia:LiaSadTearSolid":
            return LiaSadTearSolid;
        case "lia:LiaSadTear":
            return LiaSadTear;
        case "lia:LiaSafari":
            return LiaSafari;
        case "lia:LiaSalesforce":
            return LiaSalesforce;
        case "lia:LiaSass":
            return LiaSass;
        case "lia:LiaSatelliteDishSolid":
            return LiaSatelliteDishSolid;
        case "lia:LiaSatelliteSolid":
            return LiaSatelliteSolid;
        case "lia:LiaSaveSolid":
            return LiaSaveSolid;
        case "lia:LiaSave":
            return LiaSave;
        case "lia:LiaSchlix":
            return LiaSchlix;
        case "lia:LiaSchoolSolid":
            return LiaSchoolSolid;
        case "lia:LiaScrewdriverSolid":
            return LiaScrewdriverSolid;
        case "lia:LiaScribd":
            return LiaScribd;
        case "lia:LiaScrollSolid":
            return LiaScrollSolid;
        case "lia:LiaSdCardSolid":
            return LiaSdCardSolid;
        case "lia:LiaSearchDollarSolid":
            return LiaSearchDollarSolid;
        case "lia:LiaSearchLocationSolid":
            return LiaSearchLocationSolid;
        case "lia:LiaSearchMinusSolid":
            return LiaSearchMinusSolid;
        case "lia:LiaSearchPlusSolid":
            return LiaSearchPlusSolid;
        case "lia:LiaSearchSolid":
            return LiaSearchSolid;
        case "lia:LiaSearchengin":
            return LiaSearchengin;
        case "lia:LiaSeedlingSolid":
            return LiaSeedlingSolid;
        case "lia:LiaSellcast":
            return LiaSellcast;
        case "lia:LiaSellsy":
            return LiaSellsy;
        case "lia:LiaServerSolid":
            return LiaServerSolid;
        case "lia:LiaServicestack":
            return LiaServicestack;
        case "lia:LiaShapesSolid":
            return LiaShapesSolid;
        case "lia:LiaShareAltSolid":
            return LiaShareAltSolid;
        case "lia:LiaShareAltSquareSolid":
            return LiaShareAltSquareSolid;
        case "lia:LiaShareSolid":
            return LiaShareSolid;
        case "lia:LiaShareSquareSolid":
            return LiaShareSquareSolid;
        case "lia:LiaShareSquare":
            return LiaShareSquare;
        case "lia:LiaShekelSignSolid":
            return LiaShekelSignSolid;
        case "lia:LiaShieldAltSolid":
            return LiaShieldAltSolid;
        case "lia:LiaShipSolid":
            return LiaShipSolid;
        case "lia:LiaShippingFastSolid":
            return LiaShippingFastSolid;
        case "lia:LiaShirtsinbulk":
            return LiaShirtsinbulk;
        case "lia:LiaShoePrintsSolid":
            return LiaShoePrintsSolid;
        case "lia:LiaShoppingBagSolid":
            return LiaShoppingBagSolid;
        case "lia:LiaShoppingBasketSolid":
            return LiaShoppingBasketSolid;
        case "lia:LiaShoppingCartSolid":
            return LiaShoppingCartSolid;
        case "lia:LiaShopware":
            return LiaShopware;
        case "lia:LiaShowerSolid":
            return LiaShowerSolid;
        case "lia:LiaShuttleVanSolid":
            return LiaShuttleVanSolid;
        case "lia:LiaSignInAltSolid":
            return LiaSignInAltSolid;
        case "lia:LiaSignLanguageSolid":
            return LiaSignLanguageSolid;
        case "lia:LiaSignOutAltSolid":
            return LiaSignOutAltSolid;
        case "lia:LiaSignSolid":
            return LiaSignSolid;
        case "lia:LiaSignalSolid":
            return LiaSignalSolid;
        case "lia:LiaSignatureSolid":
            return LiaSignatureSolid;
        case "lia:LiaSimCardSolid":
            return LiaSimCardSolid;
        case "lia:LiaSimplybuilt":
            return LiaSimplybuilt;
        case "lia:LiaSistrix":
            return LiaSistrix;
        case "lia:LiaSitemapSolid":
            return LiaSitemapSolid;
        case "lia:LiaSith":
            return LiaSith;
        case "lia:LiaSkatingSolid":
            return LiaSkatingSolid;
        case "lia:LiaSketch":
            return LiaSketch;
        case "lia:LiaSkiingNordicSolid":
            return LiaSkiingNordicSolid;
        case "lia:LiaSkiingSolid":
            return LiaSkiingSolid;
        case "lia:LiaSkullCrossbonesSolid":
            return LiaSkullCrossbonesSolid;
        case "lia:LiaSkullSolid":
            return LiaSkullSolid;
        case "lia:LiaSkyatlas":
            return LiaSkyatlas;
        case "lia:LiaSkype":
            return LiaSkype;
        case "lia:LiaSlackHash":
            return LiaSlackHash;
        case "lia:LiaSlack":
            return LiaSlack;
        case "lia:LiaSlashSolid":
            return LiaSlashSolid;
        case "lia:LiaSleighSolid":
            return LiaSleighSolid;
        case "lia:LiaSlidersHSolid":
            return LiaSlidersHSolid;
        case "lia:LiaSlideshare":
            return LiaSlideshare;
        case "lia:LiaSmileBeamSolid":
            return LiaSmileBeamSolid;
        case "lia:LiaSmileBeam":
            return LiaSmileBeam;
        case "lia:LiaSmileSolid":
            return LiaSmileSolid;
        case "lia:LiaSmileWinkSolid":
            return LiaSmileWinkSolid;
        case "lia:LiaSmileWink":
            return LiaSmileWink;
        case "lia:LiaSmile":
            return LiaSmile;
        case "lia:LiaSmogSolid":
            return LiaSmogSolid;
        case "lia:LiaSmokingBanSolid":
            return LiaSmokingBanSolid;
        case "lia:LiaSmokingSolid":
            return LiaSmokingSolid;
        case "lia:LiaSmsSolid":
            return LiaSmsSolid;
        case "lia:LiaSnapchatGhost":
            return LiaSnapchatGhost;
        case "lia:LiaSnapchatSquare":
            return LiaSnapchatSquare;
        case "lia:LiaSnapchat":
            return LiaSnapchat;
        case "lia:LiaSnowboardingSolid":
            return LiaSnowboardingSolid;
        case "lia:LiaSnowflakeSolid":
            return LiaSnowflakeSolid;
        case "lia:LiaSnowflake":
            return LiaSnowflake;
        case "lia:LiaSnowmanSolid":
            return LiaSnowmanSolid;
        case "lia:LiaSnowplowSolid":
            return LiaSnowplowSolid;
        case "lia:LiaSocksSolid":
            return LiaSocksSolid;
        case "lia:LiaSolarPanelSolid":
            return LiaSolarPanelSolid;
        case "lia:LiaSortAlphaDownAltSolid":
            return LiaSortAlphaDownAltSolid;
        case "lia:LiaSortAlphaDownSolid":
            return LiaSortAlphaDownSolid;
        case "lia:LiaSortAlphaUpAltSolid":
            return LiaSortAlphaUpAltSolid;
        case "lia:LiaSortAlphaUpSolid":
            return LiaSortAlphaUpSolid;
        case "lia:LiaSortAmountDownAltSolid":
            return LiaSortAmountDownAltSolid;
        case "lia:LiaSortAmountDownSolid":
            return LiaSortAmountDownSolid;
        case "lia:LiaSortAmountUpAltSolid":
            return LiaSortAmountUpAltSolid;
        case "lia:LiaSortAmountUpSolid":
            return LiaSortAmountUpSolid;
        case "lia:LiaSortDownSolid":
            return LiaSortDownSolid;
        case "lia:LiaSortNumericDownAltSolid":
            return LiaSortNumericDownAltSolid;
        case "lia:LiaSortNumericDownSolid":
            return LiaSortNumericDownSolid;
        case "lia:LiaSortNumericUpAltSolid":
            return LiaSortNumericUpAltSolid;
        case "lia:LiaSortNumericUpSolid":
            return LiaSortNumericUpSolid;
        case "lia:LiaSortSolid":
            return LiaSortSolid;
        case "lia:LiaSortUpSolid":
            return LiaSortUpSolid;
        case "lia:LiaSoundcloud":
            return LiaSoundcloud;
        case "lia:LiaSourcetree":
            return LiaSourcetree;
        case "lia:LiaSpaSolid":
            return LiaSpaSolid;
        case "lia:LiaSpaceShuttleSolid":
            return LiaSpaceShuttleSolid;
        case "lia:LiaSpeakap":
            return LiaSpeakap;
        case "lia:LiaSpeakerDeck":
            return LiaSpeakerDeck;
        case "lia:LiaSpellCheckSolid":
            return LiaSpellCheckSolid;
        case "lia:LiaSpiderSolid":
            return LiaSpiderSolid;
        case "lia:LiaSpinnerSolid":
            return LiaSpinnerSolid;
        case "lia:LiaSplotchSolid":
            return LiaSplotchSolid;
        case "lia:LiaSpotify":
            return LiaSpotify;
        case "lia:LiaSprayCanSolid":
            return LiaSprayCanSolid;
        case "lia:LiaSquareFullSolid":
            return LiaSquareFullSolid;
        case "lia:LiaSquareRootAltSolid":
            return LiaSquareRootAltSolid;
        case "lia:LiaSquareSolid":
            return LiaSquareSolid;
        case "lia:LiaSquare":
            return LiaSquare;
        case "lia:LiaSquarespace":
            return LiaSquarespace;
        case "lia:LiaStackExchange":
            return LiaStackExchange;
        case "lia:LiaStackOverflow":
            return LiaStackOverflow;
        case "lia:LiaStackpath":
            return LiaStackpath;
        case "lia:LiaStampSolid":
            return LiaStampSolid;
        case "lia:LiaStarAndCrescentSolid":
            return LiaStarAndCrescentSolid;
        case "lia:LiaStarHalfAltSolid":
            return LiaStarHalfAltSolid;
        case "lia:LiaStarHalfSolid":
            return LiaStarHalfSolid;
        case "lia:LiaStarHalf":
            return LiaStarHalf;
        case "lia:LiaStarOfDavidSolid":
            return LiaStarOfDavidSolid;
        case "lia:LiaStarOfLifeSolid":
            return LiaStarOfLifeSolid;
        case "lia:LiaStarSolid":
            return LiaStarSolid;
        case "lia:LiaStar":
            return LiaStar;
        case "lia:LiaStaylinked":
            return LiaStaylinked;
        case "lia:LiaSteamSquare":
            return LiaSteamSquare;
        case "lia:LiaSteamSymbol":
            return LiaSteamSymbol;
        case "lia:LiaSteam":
            return LiaSteam;
        case "lia:LiaStepBackwardSolid":
            return LiaStepBackwardSolid;
        case "lia:LiaStepForwardSolid":
            return LiaStepForwardSolid;
        case "lia:LiaStethoscopeSolid":
            return LiaStethoscopeSolid;
        case "lia:LiaStickerMule":
            return LiaStickerMule;
        case "lia:LiaStickyNoteSolid":
            return LiaStickyNoteSolid;
        case "lia:LiaStickyNote":
            return LiaStickyNote;
        case "lia:LiaStopCircleSolid":
            return LiaStopCircleSolid;
        case "lia:LiaStopCircle":
            return LiaStopCircle;
        case "lia:LiaStopSolid":
            return LiaStopSolid;
        case "lia:LiaStopwatchSolid":
            return LiaStopwatchSolid;
        case "lia:LiaStoreAltSolid":
            return LiaStoreAltSolid;
        case "lia:LiaStoreSolid":
            return LiaStoreSolid;
        case "lia:LiaStrava":
            return LiaStrava;
        case "lia:LiaStreamSolid":
            return LiaStreamSolid;
        case "lia:LiaStreetViewSolid":
            return LiaStreetViewSolid;
        case "lia:LiaStrikethroughSolid":
            return LiaStrikethroughSolid;
        case "lia:LiaStripeS":
            return LiaStripeS;
        case "lia:LiaStripe":
            return LiaStripe;
        case "lia:LiaStroopwafelSolid":
            return LiaStroopwafelSolid;
        case "lia:LiaStudiovinari":
            return LiaStudiovinari;
        case "lia:LiaStumbleuponCircle":
            return LiaStumbleuponCircle;
        case "lia:LiaStumbleupon":
            return LiaStumbleupon;
        case "lia:LiaSubscriptSolid":
            return LiaSubscriptSolid;
        case "lia:LiaSubwaySolid":
            return LiaSubwaySolid;
        case "lia:LiaSuitcaseRollingSolid":
            return LiaSuitcaseRollingSolid;
        case "lia:LiaSuitcaseSolid":
            return LiaSuitcaseSolid;
        case "lia:LiaSunSolid":
            return LiaSunSolid;
        case "lia:LiaSun":
            return LiaSun;
        case "lia:LiaSuperpowers":
            return LiaSuperpowers;
        case "lia:LiaSuperscriptSolid":
            return LiaSuperscriptSolid;
        case "lia:LiaSupple":
            return LiaSupple;
        case "lia:LiaSurpriseSolid":
            return LiaSurpriseSolid;
        case "lia:LiaSurprise":
            return LiaSurprise;
        case "lia:LiaSuse":
            return LiaSuse;
        case "lia:LiaSwatchbookSolid":
            return LiaSwatchbookSolid;
        case "lia:LiaSwift":
            return LiaSwift;
        case "lia:LiaSwimmerSolid":
            return LiaSwimmerSolid;
        case "lia:LiaSwimmingPoolSolid":
            return LiaSwimmingPoolSolid;
        case "lia:LiaSymfony":
            return LiaSymfony;
        case "lia:LiaSynagogueSolid":
            return LiaSynagogueSolid;
        case "lia:LiaSyncAltSolid":
            return LiaSyncAltSolid;
        case "lia:LiaSyncSolid":
            return LiaSyncSolid;
        case "lia:LiaSyringeSolid":
            return LiaSyringeSolid;
        case "lia:LiaTableSolid":
            return LiaTableSolid;
        case "lia:LiaTableTennisSolid":
            return LiaTableTennisSolid;
        case "lia:LiaTabletAltSolid":
            return LiaTabletAltSolid;
        case "lia:LiaTabletSolid":
            return LiaTabletSolid;
        case "lia:LiaTabletsSolid":
            return LiaTabletsSolid;
        case "lia:LiaTachometerAltSolid":
            return LiaTachometerAltSolid;
        case "lia:LiaTagSolid":
            return LiaTagSolid;
        case "lia:LiaTagsSolid":
            return LiaTagsSolid;
        case "lia:LiaTapeSolid":
            return LiaTapeSolid;
        case "lia:LiaTasksSolid":
            return LiaTasksSolid;
        case "lia:LiaTaxiSolid":
            return LiaTaxiSolid;
        case "lia:LiaTeamspeak":
            return LiaTeamspeak;
        case "lia:LiaTeethOpenSolid":
            return LiaTeethOpenSolid;
        case "lia:LiaTeethSolid":
            return LiaTeethSolid;
        case "lia:LiaTelegramPlane":
            return LiaTelegramPlane;
        case "lia:LiaTelegram":
            return LiaTelegram;
        case "lia:LiaTemperatureHighSolid":
            return LiaTemperatureHighSolid;
        case "lia:LiaTemperatureLowSolid":
            return LiaTemperatureLowSolid;
        case "lia:LiaTencentWeibo":
            return LiaTencentWeibo;
        case "lia:LiaTengeSolid":
            return LiaTengeSolid;
        case "lia:LiaTerminalSolid":
            return LiaTerminalSolid;
        case "lia:LiaTextHeightSolid":
            return LiaTextHeightSolid;
        case "lia:LiaTextWidthSolid":
            return LiaTextWidthSolid;
        case "lia:LiaThLargeSolid":
            return LiaThLargeSolid;
        case "lia:LiaThListSolid":
            return LiaThListSolid;
        case "lia:LiaThSolid":
            return LiaThSolid;
        case "lia:LiaTheRedYeti":
            return LiaTheRedYeti;
        case "lia:LiaTheaterMasksSolid":
            return LiaTheaterMasksSolid;
        case "lia:LiaThemeco":
            return LiaThemeco;
        case "lia:LiaThemeisle":
            return LiaThemeisle;
        case "lia:LiaThermometerEmptySolid":
            return LiaThermometerEmptySolid;
        case "lia:LiaThermometerFullSolid":
            return LiaThermometerFullSolid;
        case "lia:LiaThermometerHalfSolid":
            return LiaThermometerHalfSolid;
        case "lia:LiaThermometerQuarterSolid":
            return LiaThermometerQuarterSolid;
        case "lia:LiaThermometerSolid":
            return LiaThermometerSolid;
        case "lia:LiaThermometerThreeQuartersSolid":
            return LiaThermometerThreeQuartersSolid;
        case "lia:LiaThinkPeaks":
            return LiaThinkPeaks;
        case "lia:LiaThumbsDownSolid":
            return LiaThumbsDownSolid;
        case "lia:LiaThumbsDown":
            return LiaThumbsDown;
        case "lia:LiaThumbsUpSolid":
            return LiaThumbsUpSolid;
        case "lia:LiaThumbsUp":
            return LiaThumbsUp;
        case "lia:LiaThumbtackSolid":
            return LiaThumbtackSolid;
        case "lia:LiaTicketAltSolid":
            return LiaTicketAltSolid;
        case "lia:LiaTimesCircleSolid":
            return LiaTimesCircleSolid;
        case "lia:LiaTimesCircle":
            return LiaTimesCircle;
        case "lia:LiaTimesSolid":
            return LiaTimesSolid;
        case "lia:LiaTintSlashSolid":
            return LiaTintSlashSolid;
        case "lia:LiaTintSolid":
            return LiaTintSolid;
        case "lia:LiaTiredSolid":
            return LiaTiredSolid;
        case "lia:LiaTired":
            return LiaTired;
        case "lia:LiaToggleOffSolid":
            return LiaToggleOffSolid;
        case "lia:LiaToggleOnSolid":
            return LiaToggleOnSolid;
        case "lia:LiaToiletPaperSolid":
            return LiaToiletPaperSolid;
        case "lia:LiaToiletSolid":
            return LiaToiletSolid;
        case "lia:LiaToolboxSolid":
            return LiaToolboxSolid;
        case "lia:LiaToolsSolid":
            return LiaToolsSolid;
        case "lia:LiaToothSolid":
            return LiaToothSolid;
        case "lia:LiaTorahSolid":
            return LiaTorahSolid;
        case "lia:LiaToriiGateSolid":
            return LiaToriiGateSolid;
        case "lia:LiaTractorSolid":
            return LiaTractorSolid;
        case "lia:LiaTradeFederation":
            return LiaTradeFederation;
        case "lia:LiaTrademarkSolid":
            return LiaTrademarkSolid;
        case "lia:LiaTrafficLightSolid":
            return LiaTrafficLightSolid;
        case "lia:LiaTrainSolid":
            return LiaTrainSolid;
        case "lia:LiaTramSolid":
            return LiaTramSolid;
        case "lia:LiaTransgenderAltSolid":
            return LiaTransgenderAltSolid;
        case "lia:LiaTransgenderSolid":
            return LiaTransgenderSolid;
        case "lia:LiaTrashAltSolid":
            return LiaTrashAltSolid;
        case "lia:LiaTrashAlt":
            return LiaTrashAlt;
        case "lia:LiaTrashRestoreAltSolid":
            return LiaTrashRestoreAltSolid;
        case "lia:LiaTrashRestoreSolid":
            return LiaTrashRestoreSolid;
        case "lia:LiaTrashSolid":
            return LiaTrashSolid;
        case "lia:LiaTreeSolid":
            return LiaTreeSolid;
        case "lia:LiaTrello":
            return LiaTrello;
        case "lia:LiaTripadvisor":
            return LiaTripadvisor;
        case "lia:LiaTrophySolid":
            return LiaTrophySolid;
        case "lia:LiaTruckLoadingSolid":
            return LiaTruckLoadingSolid;
        case "lia:LiaTruckMonsterSolid":
            return LiaTruckMonsterSolid;
        case "lia:LiaTruckMovingSolid":
            return LiaTruckMovingSolid;
        case "lia:LiaTruckPickupSolid":
            return LiaTruckPickupSolid;
        case "lia:LiaTruckSolid":
            return LiaTruckSolid;
        case "lia:LiaTshirtSolid":
            return LiaTshirtSolid;
        case "lia:LiaTtySolid":
            return LiaTtySolid;
        case "lia:LiaTumblrSquare":
            return LiaTumblrSquare;
        case "lia:LiaTumblr":
            return LiaTumblr;
        case "lia:LiaTvSolid":
            return LiaTvSolid;
        case "lia:LiaTwitch":
            return LiaTwitch;
        case "lia:LiaTwitterSquare":
            return LiaTwitterSquare;
        case "lia:LiaTwitter":
            return LiaTwitter;
        case "lia:LiaTypo3":
            return LiaTypo3;
        case "lia:LiaUber":
            return LiaUber;
        case "lia:LiaUbuntu":
            return LiaUbuntu;
        case "lia:LiaUikit":
            return LiaUikit;
        case "lia:LiaUmbraco":
            return LiaUmbraco;
        case "lia:LiaUmbrellaBeachSolid":
            return LiaUmbrellaBeachSolid;
        case "lia:LiaUmbrellaSolid":
            return LiaUmbrellaSolid;
        case "lia:LiaUnderlineSolid":
            return LiaUnderlineSolid;
        case "lia:LiaUndoAltSolid":
            return LiaUndoAltSolid;
        case "lia:LiaUndoSolid":
            return LiaUndoSolid;
        case "lia:LiaUniregistry":
            return LiaUniregistry;
        case "lia:LiaUniversalAccessSolid":
            return LiaUniversalAccessSolid;
        case "lia:LiaUniversitySolid":
            return LiaUniversitySolid;
        case "lia:LiaUnlinkSolid":
            return LiaUnlinkSolid;
        case "lia:LiaUnlockAltSolid":
            return LiaUnlockAltSolid;
        case "lia:LiaUnlockSolid":
            return LiaUnlockSolid;
        case "lia:LiaUntappd":
            return LiaUntappd;
        case "lia:LiaUploadSolid":
            return LiaUploadSolid;
        case "lia:LiaUps":
            return LiaUps;
        case "lia:LiaUsb":
            return LiaUsb;
        case "lia:LiaUserAltSlashSolid":
            return LiaUserAltSlashSolid;
        case "lia:LiaUserAltSolid":
            return LiaUserAltSolid;
        case "lia:LiaUserAstronautSolid":
            return LiaUserAstronautSolid;
        case "lia:LiaUserCheckSolid":
            return LiaUserCheckSolid;
        case "lia:LiaUserCircleSolid":
            return LiaUserCircleSolid;
        case "lia:LiaUserCircle":
            return LiaUserCircle;
        case "lia:LiaUserClockSolid":
            return LiaUserClockSolid;
        case "lia:LiaUserCogSolid":
            return LiaUserCogSolid;
        case "lia:LiaUserEditSolid":
            return LiaUserEditSolid;
        case "lia:LiaUserFriendsSolid":
            return LiaUserFriendsSolid;
        case "lia:LiaUserGraduateSolid":
            return LiaUserGraduateSolid;
        case "lia:LiaUserInjuredSolid":
            return LiaUserInjuredSolid;
        case "lia:LiaUserLockSolid":
            return LiaUserLockSolid;
        case "lia:LiaUserMdSolid":
            return LiaUserMdSolid;
        case "lia:LiaUserMinusSolid":
            return LiaUserMinusSolid;
        case "lia:LiaUserNinjaSolid":
            return LiaUserNinjaSolid;
        case "lia:LiaUserNurseSolid":
            return LiaUserNurseSolid;
        case "lia:LiaUserPlusSolid":
            return LiaUserPlusSolid;
        case "lia:LiaUserSecretSolid":
            return LiaUserSecretSolid;
        case "lia:LiaUserShieldSolid":
            return LiaUserShieldSolid;
        case "lia:LiaUserSlashSolid":
            return LiaUserSlashSolid;
        case "lia:LiaUserSolid":
            return LiaUserSolid;
        case "lia:LiaUserTagSolid":
            return LiaUserTagSolid;
        case "lia:LiaUserTieSolid":
            return LiaUserTieSolid;
        case "lia:LiaUserTimesSolid":
            return LiaUserTimesSolid;
        case "lia:LiaUser":
            return LiaUser;
        case "lia:LiaUsersCogSolid":
            return LiaUsersCogSolid;
        case "lia:LiaUsersSolid":
            return LiaUsersSolid;
        case "lia:LiaUsps":
            return LiaUsps;
        case "lia:LiaUssunnah":
            return LiaUssunnah;
        case "lia:LiaUtensilSpoonSolid":
            return LiaUtensilSpoonSolid;
        case "lia:LiaUtensilsSolid":
            return LiaUtensilsSolid;
        case "lia:LiaVaadin":
            return LiaVaadin;
        case "lia:LiaVectorSquareSolid":
            return LiaVectorSquareSolid;
        case "lia:LiaVenusDoubleSolid":
            return LiaVenusDoubleSolid;
        case "lia:LiaVenusMarsSolid":
            return LiaVenusMarsSolid;
        case "lia:LiaVenusSolid":
            return LiaVenusSolid;
        case "lia:LiaViacoin":
            return LiaViacoin;
        case "lia:LiaViadeoSquare":
            return LiaViadeoSquare;
        case "lia:LiaViadeo":
            return LiaViadeo;
        case "lia:LiaVialSolid":
            return LiaVialSolid;
        case "lia:LiaVialsSolid":
            return LiaVialsSolid;
        case "lia:LiaViber":
            return LiaViber;
        case "lia:LiaVideoSlashSolid":
            return LiaVideoSlashSolid;
        case "lia:LiaVideoSolid":
            return LiaVideoSolid;
        case "lia:LiaViharaSolid":
            return LiaViharaSolid;
        case "lia:LiaVimeoSquare":
            return LiaVimeoSquare;
        case "lia:LiaVimeoV":
            return LiaVimeoV;
        case "lia:LiaVimeo":
            return LiaVimeo;
        case "lia:LiaVine":
            return LiaVine;
        case "lia:LiaVk":
            return LiaVk;
        case "lia:LiaVnv":
            return LiaVnv;
        case "lia:LiaVoicemailSolid":
            return LiaVoicemailSolid;
        case "lia:LiaVolleyballBallSolid":
            return LiaVolleyballBallSolid;
        case "lia:LiaVolumeDownSolid":
            return LiaVolumeDownSolid;
        case "lia:LiaVolumeMuteSolid":
            return LiaVolumeMuteSolid;
        case "lia:LiaVolumeOffSolid":
            return LiaVolumeOffSolid;
        case "lia:LiaVolumeUpSolid":
            return LiaVolumeUpSolid;
        case "lia:LiaVoteYeaSolid":
            return LiaVoteYeaSolid;
        case "lia:LiaVrCardboardSolid":
            return LiaVrCardboardSolid;
        case "lia:LiaVuejs":
            return LiaVuejs;
        case "lia:LiaWalkingSolid":
            return LiaWalkingSolid;
        case "lia:LiaWalletSolid":
            return LiaWalletSolid;
        case "lia:LiaWarehouseSolid":
            return LiaWarehouseSolid;
        case "lia:LiaWaterSolid":
            return LiaWaterSolid;
        case "lia:LiaWaveSquareSolid":
            return LiaWaveSquareSolid;
        case "lia:LiaWaze":
            return LiaWaze;
        case "lia:LiaWeebly":
            return LiaWeebly;
        case "lia:LiaWeibo":
            return LiaWeibo;
        case "lia:LiaWeightHangingSolid":
            return LiaWeightHangingSolid;
        case "lia:LiaWeightSolid":
            return LiaWeightSolid;
        case "lia:LiaWeixin":
            return LiaWeixin;
        case "lia:LiaWhatsappSquare":
            return LiaWhatsappSquare;
        case "lia:LiaWhatsapp":
            return LiaWhatsapp;
        case "lia:LiaWheelchairSolid":
            return LiaWheelchairSolid;
        case "lia:LiaWhmcs":
            return LiaWhmcs;
        case "lia:LiaWifiSolid":
            return LiaWifiSolid;
        case "lia:LiaWikipediaW":
            return LiaWikipediaW;
        case "lia:LiaWindSolid":
            return LiaWindSolid;
        case "lia:LiaWindowCloseSolid":
            return LiaWindowCloseSolid;
        case "lia:LiaWindowClose":
            return LiaWindowClose;
        case "lia:LiaWindowMaximizeSolid":
            return LiaWindowMaximizeSolid;
        case "lia:LiaWindowMaximize":
            return LiaWindowMaximize;
        case "lia:LiaWindowMinimizeSolid":
            return LiaWindowMinimizeSolid;
        case "lia:LiaWindowMinimize":
            return LiaWindowMinimize;
        case "lia:LiaWindowRestoreSolid":
            return LiaWindowRestoreSolid;
        case "lia:LiaWindowRestore":
            return LiaWindowRestore;
        case "lia:LiaWindows":
            return LiaWindows;
        case "lia:LiaWineBottleSolid":
            return LiaWineBottleSolid;
        case "lia:LiaWineGlassAltSolid":
            return LiaWineGlassAltSolid;
        case "lia:LiaWineGlassSolid":
            return LiaWineGlassSolid;
        case "lia:LiaWix":
            return LiaWix;
        case "lia:LiaWizardsOfTheCoast":
            return LiaWizardsOfTheCoast;
        case "lia:LiaWolfPackBattalion":
            return LiaWolfPackBattalion;
        case "lia:LiaWonSignSolid":
            return LiaWonSignSolid;
        case "lia:LiaWordpressSimple":
            return LiaWordpressSimple;
        case "lia:LiaWordpress":
            return LiaWordpress;
        case "lia:LiaWpbeginner":
            return LiaWpbeginner;
        case "lia:LiaWpexplorer":
            return LiaWpexplorer;
        case "lia:LiaWpforms":
            return LiaWpforms;
        case "lia:LiaWpressr":
            return LiaWpressr;
        case "lia:LiaWrenchSolid":
            return LiaWrenchSolid;
        case "lia:LiaXRaySolid":
            return LiaXRaySolid;
        case "lia:LiaXbox":
            return LiaXbox;
        case "lia:LiaXingSquare":
            return LiaXingSquare;
        case "lia:LiaXing":
            return LiaXing;
        case "lia:LiaYCombinator":
            return LiaYCombinator;
        case "lia:LiaYahoo":
            return LiaYahoo;
        case "lia:LiaYammer":
            return LiaYammer;
        case "lia:LiaYandexInternational":
            return LiaYandexInternational;
        case "lia:LiaYandex":
            return LiaYandex;
        case "lia:LiaYarn":
            return LiaYarn;
        case "lia:LiaYelp":
            return LiaYelp;
        case "lia:LiaYenSignSolid":
            return LiaYenSignSolid;
        case "lia:LiaYinYangSolid":
            return LiaYinYangSolid;
        case "lia:LiaYoast":
            return LiaYoast;
        case "lia:LiaYoutubeSquare":
            return LiaYoutubeSquare;
        case "lia:LiaYoutube":
            return LiaYoutube;
        case "lia:LiaZhihu":
            return LiaZhihu;
    }
}
