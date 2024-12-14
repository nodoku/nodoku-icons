import type {IconType} from "react-icons";

import {
    Lia500Px,
    LiaAccessibleIcon,
    LiaAccusoft,
    LiaAcquisitionsIncorporated,
    LiaAdSolid,
    LiaAddressBookSolid,
    LiaAddressBook,
    LiaAddressCardSolid,
    LiaAddressCard,
    LiaAdjustSolid,
    LiaAdn,
    LiaAdobe,
    LiaAdversal,
    LiaAffiliatetheme,
    LiaAirFreshenerSolid,
    LiaAirbnb,
    LiaAlgolia,
    LiaAlignCenterSolid,
    LiaAlignJustifySolid,
    LiaAlignLeftSolid,
    LiaAlignRightSolid,
    LiaAlipay,
    LiaAllergiesSolid,
    LiaAmazonPay,
    LiaAmazon,
    LiaAmbulanceSolid,
    LiaAmericanSignLanguageInterpretingSolid,
    LiaAmilia,
    LiaAnchorSolid,
    LiaAndroid,
    LiaAngellist,
    LiaAngleDoubleDownSolid,
    LiaAngleDoubleLeftSolid,
    LiaAngleDoubleRightSolid,
    LiaAngleDoubleUpSolid,
    LiaAngleDownSolid,
    LiaAngleLeftSolid,
    LiaAngleRightSolid,
    LiaAngleUpSolid,
    LiaAngrySolid,
    LiaAngry,
    LiaAngrycreative,
    LiaAngular,
    LiaAnkhSolid,
    LiaAppStoreIos,
    LiaAppStore,
    LiaApper,
    LiaAppleAltSolid,
    LiaApplePay,
    LiaApple,
    LiaArchiveSolid,
    LiaArchwaySolid,
    LiaArrowAltCircleDownSolid,
    LiaArrowAltCircleDown,
    LiaArrowAltCircleLeftSolid,
    LiaArrowAltCircleLeft,
    LiaArrowAltCircleRightSolid,
    LiaArrowAltCircleRight,
    LiaArrowAltCircleUpSolid,
    LiaArrowAltCircleUp,
    LiaArrowCircleDownSolid,
    LiaArrowCircleLeftSolid,
    LiaArrowCircleRightSolid,
    LiaArrowCircleUpSolid,
    LiaArrowDownSolid,
    LiaArrowLeftSolid,
    LiaArrowRightSolid,
    LiaArrowUpSolid,
    LiaArrowsAltHSolid,
    LiaArrowsAltSolid,
    LiaArrowsAltVSolid,
    LiaArtstation,
    LiaAssistiveListeningSystemsSolid,
    LiaAsteriskSolid,
    LiaAsymmetrik,
    LiaAtSolid,
    LiaAtlasSolid,
    LiaAtlassian,
    LiaAtomSolid,
    LiaAudible,
    LiaAudioDescriptionSolid,
    LiaAutoprefixer,
    LiaAvianex,
    LiaAviato,
    LiaAwardSolid,
    LiaAws,
    LiaBabyCarriageSolid,
    LiaBabySolid,
    LiaBackspaceSolid,
    LiaBackwardSolid,
    LiaBaconSolid,
    LiaBalanceScaleLeftSolid,
    LiaBalanceScaleRightSolid,
    LiaBalanceScaleSolid,
    LiaBanSolid,
    LiaBandAidSolid,
    LiaBandcamp,
    LiaBarcodeSolid,
    LiaBarsSolid,
    LiaBaseballBallSolid,
    LiaBasketballBallSolid,
    LiaBathSolid,
    LiaBatteryEmptySolid,
    LiaBatteryFullSolid,
    LiaBatteryHalfSolid,
    LiaBatteryQuarterSolid,
    LiaBatteryThreeQuartersSolid,
    LiaBattleNet,
    LiaBedSolid,
    LiaBeerSolid,
    LiaBehanceSquare,
    LiaBehance,
    LiaBellSlashSolid,
    LiaBellSlash,
    LiaBellSolid,
    LiaBell,
    LiaBezierCurveSolid,
    LiaBibleSolid,
    LiaBicycleSolid,
    LiaBikingSolid,
    LiaBimobject,
    LiaBinocularsSolid,
    LiaBiohazardSolid,
    LiaBirthdayCakeSolid,
    LiaBitbucket,
    LiaBitcoin,
    LiaBity,
    LiaBlackTie,
    LiaBlackberry,
    LiaBlenderPhoneSolid,
    LiaBlenderSolid,
    LiaBlindSolid,
    LiaBlogSolid,
    LiaBloggerB,
    LiaBlogger,
    LiaBluetoothB,
    LiaBluetooth,
    LiaBoldSolid,
    LiaBoltSolid,
    LiaBombSolid,
    LiaBoneSolid,
    LiaBongSolid,
    LiaBookDeadSolid,
    LiaBookMedicalSolid,
    LiaBookOpenSolid,
    LiaBookReaderSolid,
    LiaBookSolid,
    LiaBookmarkSolid,
    LiaBookmark,
    LiaBootstrap,
    LiaBorderAllSolid,
    LiaBorderNoneSolid,
    LiaBorderStyleSolid,
    LiaBowlingBallSolid,
    LiaBoxOpenSolid,
    LiaBoxSolid,
    LiaBoxesSolid,
    LiaBrailleSolid,
    LiaBrainSolid,
    LiaBreadSliceSolid,
    LiaBriefcaseMedicalSolid,
    LiaBriefcaseSolid,
    LiaBroadcastTowerSolid,
    LiaBroomSolid,
    LiaBrushSolid,
    LiaBtc,
    LiaBuffer,
    LiaBugSolid,
    LiaBuildingSolid,
    LiaBuilding,
    LiaBullhornSolid,
    LiaBullseyeSolid,
    LiaBurnSolid,
    LiaBuromobelexperte,
    LiaBusAltSolid,
    LiaBusSolid,
    LiaBusinessTimeSolid,
    LiaBuyNLarge,
    LiaBuysellads,
    LiaCalculatorSolid,
    LiaCalendarAltSolid,
    LiaCalendarAlt,
    LiaCalendarCheckSolid,
    LiaCalendarCheck,
    LiaCalendarDaySolid,
    LiaCalendarMinusSolid,
    LiaCalendarMinus,
    LiaCalendarPlusSolid,
    LiaCalendarPlus,
    LiaCalendarSolid,
    LiaCalendarTimesSolid,
    LiaCalendarTimes,
    LiaCalendarWeekSolid,
    LiaCalendar,
    LiaCameraRetroSolid,
    LiaCameraSolid,
    LiaCampgroundSolid,
    LiaCanadianMapleLeaf,
    LiaCandyCaneSolid,
    LiaCannabisSolid,
    LiaCapsulesSolid,
    LiaCarAltSolid,
    LiaCarBatterySolid,
    LiaCarCrashSolid,
    LiaCarSideSolid,
    LiaCarSolid,
    LiaCaretDownSolid,
    LiaCaretLeftSolid,
    LiaCaretRightSolid,
    LiaCaretSquareDownSolid,
    LiaCaretSquareDown,
    LiaCaretSquareLeftSolid,
    LiaCaretSquareLeft,
    LiaCaretSquareRightSolid,
    LiaCaretSquareRight,
    LiaCaretSquareUpSolid,
    LiaCaretSquareUp,
    LiaCaretUpSolid,
    LiaCarrotSolid,
    LiaCartArrowDownSolid,
    LiaCartPlusSolid,
    LiaCashRegisterSolid,
    LiaCatSolid,
    LiaCcAmazonPay,
    LiaCcAmex,
    LiaCcApplePay,
    LiaCcDinersClub,
    LiaCcDiscover,
    LiaCcJcb,
    LiaCcMastercard,
    LiaCcPaypal,
    LiaCcStripe,
    LiaCcVisa,
    LiaCentercode,
    LiaCentos,
    LiaCertificateSolid,
    LiaChairSolid,
    LiaChalkboardSolid,
    LiaChalkboardTeacherSolid,
    LiaChargingStationSolid,
    LiaChartAreaSolid,
    LiaChartBarSolid,
    LiaChartBar,
    LiaChartLineSolid,
    LiaChartPieSolid,
    LiaCheckCircleSolid,
    LiaCheckCircle,
    LiaCheckDoubleSolid,
    LiaCheckSolid,
    LiaCheckSquareSolid,
    LiaCheckSquare,
    LiaCheeseSolid,
    LiaChessBishopSolid,
    LiaChessBoardSolid,
    LiaChessKingSolid,
    LiaChessKnightSolid,
    LiaChessPawnSolid,
    LiaChessQueenSolid,
    LiaChessRookSolid,
    LiaChessSolid,
    LiaChevronCircleDownSolid,
    LiaChevronCircleLeftSolid,
    LiaChevronCircleRightSolid,
    LiaChevronCircleUpSolid,
    LiaChevronDownSolid,
    LiaChevronLeftSolid,
    LiaChevronRightSolid,
    LiaChevronUpSolid,
    LiaChildSolid,
    LiaChrome,
    LiaChromecast,
    LiaChurchSolid,
    LiaCircleNotchSolid,
    LiaCircleSolid,
    LiaCircle,
    LiaCitySolid,
    LiaClinicMedicalSolid,
    LiaClipboardCheckSolid,
    LiaClipboardListSolid,
    LiaClipboardSolid,
    LiaClipboard,
    LiaClockSolid,
    LiaClock,
    LiaCloneSolid,
    LiaClone,
    LiaClosedCaptioningSolid,
    LiaClosedCaptioning,
    LiaCloudDownloadAltSolid,
    LiaCloudMeatballSolid,
    LiaCloudMoonRainSolid,
    LiaCloudMoonSolid,
    LiaCloudRainSolid,
    LiaCloudShowersHeavySolid,
    LiaCloudSolid,
    LiaCloudSunRainSolid,
    LiaCloudSunSolid,
    LiaCloudUploadAltSolid,
    LiaCloudscale,
    LiaCloudsmith,
    LiaCloudversify,
    LiaCocktailSolid,
    LiaCodeBranchSolid,
    LiaCodeSolid,
    LiaCodepen,
    LiaCodiepie,
    LiaCoffeeSolid,
    LiaCogSolid,
    LiaCogsSolid,
    LiaCoinsSolid,
    LiaColumnsSolid,
    LiaCommentAltSolid,
    LiaCommentAlt,
    LiaCommentDollarSolid,
    LiaCommentDotsSolid,
    LiaCommentDots,
    LiaCommentMedicalSolid,
    LiaCommentSlashSolid,
    LiaCommentSolid,
    LiaComment,
    LiaCommentsDollarSolid,
    LiaCommentsSolid,
    LiaComments,
    LiaCompactDiscSolid,
    LiaCompassSolid,
    LiaCompass,
    LiaCompressArrowsAltSolid,
    LiaCompressSolid,
    LiaConciergeBellSolid,
    LiaConfluence,
    LiaConnectdevelop,
    LiaContao,
    LiaCookieBiteSolid,
    LiaCookieSolid,
    LiaCopySolid,
    LiaCopy,
    LiaCopyrightSolid,
    LiaCopyright,
    LiaCottonBureau,
    LiaCouchSolid,
    LiaCpanel,
    LiaCreativeCommonsBy,
    LiaCreativeCommonsNcEu,
    LiaCreativeCommonsNcJp,
    LiaCreativeCommonsNc,
    LiaCreativeCommonsNd,
    LiaCreativeCommonsPdAlt,
    LiaCreativeCommonsPd,
    LiaCreativeCommonsRemix,
    LiaCreativeCommonsSa,
    LiaCreativeCommonsSamplingPlus,
    LiaCreativeCommonsSampling,
    LiaCreativeCommonsShare,
    LiaCreativeCommonsZero,
    LiaCreativeCommons,
    LiaCreditCardSolid,
    LiaCreditCard,
    LiaCriticalRole,
    LiaCropAltSolid,
    LiaCropSolid,
    LiaCrossSolid,
    LiaCrosshairsSolid,
    LiaCrowSolid,
    LiaCrownSolid,
    LiaCrutchSolid,
    LiaCss3Alt,
    LiaCss3,
    LiaCubeSolid,
    LiaCubesSolid,
    LiaCutSolid,
    LiaCuttlefish,
    LiaDAndDBeyond,
    LiaDAndD,
    LiaDashcube,
    LiaDatabaseSolid,
    LiaDeafSolid,
    LiaDelicious,
    LiaDemocratSolid,
    LiaDeploydog,
    LiaDeskpro,
    LiaDesktopSolid,
    LiaDev,
    LiaDeviantart,
    LiaDharmachakraSolid,
    LiaDhl,
    LiaDiagnosesSolid,
    LiaDiaspora,
    LiaDiceD20Solid,
    LiaDiceD6Solid,
    LiaDiceFiveSolid,
    LiaDiceFourSolid,
    LiaDiceOneSolid,
    LiaDiceSixSolid,
    LiaDiceSolid,
    LiaDiceThreeSolid,
    LiaDiceTwoSolid,
    LiaDigg,
    LiaDigitalOcean,
    LiaDigitalTachographSolid,
    LiaDirectionsSolid,
    LiaDiscord,
    LiaDiscourse,
    LiaDivideSolid,
    LiaDizzySolid,
    LiaDizzy,
    LiaDnaSolid,
    LiaDochub,
    LiaDocker,
    LiaDogSolid,
    LiaDollarSignSolid,
    LiaDollyFlatbedSolid,
    LiaDollySolid,
    LiaDonateSolid,
    LiaDoorClosedSolid,
    LiaDoorOpenSolid,
    LiaDotCircleSolid,
    LiaDotCircle,
    LiaDoveSolid,
    LiaDownloadSolid,
    LiaDraft2Digital,
    LiaDraftingCompassSolid,
    LiaDragonSolid,
    LiaDrawPolygonSolid,
    LiaDribbbleSquare,
    LiaDribbble,
    LiaDropbox,
    LiaDrumSolid,
    LiaDrumSteelpanSolid,
    LiaDrumstickBiteSolid,
    LiaDrupal,
    LiaDumbbellSolid,
    LiaDumpsterFireSolid,
    LiaDumpsterSolid,
    LiaDungeonSolid,
    LiaDyalog,
    LiaEarlybirds,
    LiaEbay,
    LiaEdge,
    LiaEditSolid,
    LiaEdit,
    LiaEggSolid,
    LiaEjectSolid,
    LiaElementor,
    LiaEllipsisHSolid,
    LiaEllipsisVSolid,
    LiaEllo,
    LiaEmber,
    LiaEmpire,
    LiaEnvelopeOpenSolid,
    LiaEnvelopeOpenTextSolid,
    LiaEnvelopeOpen,
    LiaEnvelopeSolid,
    LiaEnvelopeSquareSolid,
    LiaEnvelope,
    LiaEnvira,
    LiaEqualsSolid,
    LiaEraserSolid,
    LiaErlang,
    LiaEthereum,
    LiaEthernetSolid,
    LiaEtsy,
    LiaEuroSignSolid,
    LiaEvernote,
    LiaExchangeAltSolid,
    LiaExclamationCircleSolid,
    LiaExclamationSolid,
    LiaExclamationTriangleSolid,
    LiaExpandArrowsAltSolid,
    LiaExpandSolid,
    LiaExpeditedssl,
    LiaExternalLinkAltSolid,
    LiaExternalLinkSquareAltSolid,
    LiaEyeDropperSolid,
    LiaEyeSlashSolid,
    LiaEyeSlash,
    LiaEyeSolid,
    LiaEye,
    LiaFacebookF,
    LiaFacebookMessenger,
    LiaFacebookSquare,
    LiaFacebook,
    LiaFanSolid,
    LiaFantasyFlightGames,
    LiaFastBackwardSolid,
    LiaFastForwardSolid,
    LiaFaxSolid,
    LiaFeatherAltSolid,
    LiaFeatherSolid,
    LiaFedex,
    LiaFedora,
    LiaFemaleSolid,
    LiaFighterJetSolid,
    LiaFigma,
    LiaFileAltSolid,
    LiaFileAlt,
    LiaFileArchiveSolid,
    LiaFileArchive,
    LiaFileAudioSolid,
    LiaFileAudio,
    LiaFileCodeSolid,
    LiaFileCode,
    LiaFileContractSolid,
    LiaFileCsvSolid,
    LiaFileDownloadSolid,
    LiaFileExcelSolid,
    LiaFileExcel,
    LiaFileExportSolid,
    LiaFileImageSolid,
    LiaFileImage,
    LiaFileImportSolid,
    LiaFileInvoiceDollarSolid,
    LiaFileInvoiceSolid,
    LiaFileMedicalAltSolid,
    LiaFileMedicalSolid,
    LiaFilePdfSolid,
    LiaFilePdf,
    LiaFilePowerpointSolid,
    LiaFilePowerpoint,
    LiaFilePrescriptionSolid,
    LiaFileSignatureSolid,
    LiaFileSolid,
    LiaFileUploadSolid,
    LiaFileVideoSolid,
    LiaFileVideo,
    LiaFileWordSolid,
    LiaFileWord,
    LiaFile,
    LiaFillDripSolid,
    LiaFillSolid,
    LiaFilmSolid,
    LiaFilterSolid,
    LiaFingerprintSolid,
    LiaFireAltSolid,
    LiaFireExtinguisherSolid,
    LiaFireSolid,
    LiaFirefox,
    LiaFirstAidSolid,
    LiaFirstOrderAlt,
    LiaFirstOrder,
    LiaFirstdraft,
    LiaFishSolid,
    LiaFistRaisedSolid,
    LiaFlagCheckeredSolid,
    LiaFlagSolid,
    LiaFlagUsaSolid,
    LiaFlag,
    LiaFlaskSolid,
    LiaFlickr,
    LiaFlipboard,
    LiaFlushedSolid,
    LiaFlushed,
    LiaFly,
    LiaFolderMinusSolid,
    LiaFolderOpenSolid,
    LiaFolderOpen,
    LiaFolderPlusSolid,
    LiaFolderSolid,
    LiaFolder,
    LiaFontAwesomeAlt,
    LiaFontAwesomeFlag,
    LiaFontAwesome,
    LiaFontSolid,
    LiaFonticonsFi,
    LiaFonticons,
    LiaFootballBallSolid,
    LiaFortAwesomeAlt,
    LiaFortAwesome,
    LiaForumbee,
    LiaForwardSolid,
    LiaFoursquare,
    LiaFreeCodeCamp,
    LiaFreebsd,
    LiaFrogSolid,
    LiaFrownOpenSolid,
    LiaFrownOpen,
    LiaFrownSolid,
    LiaFrown,
    LiaFulcrum,
    LiaFunnelDollarSolid,
    LiaFutbolSolid,
    LiaFutbol,
    LiaGalacticRepublic,
    LiaGalacticSenate,
    LiaGamepadSolid,
    LiaGasPumpSolid,
    LiaGavelSolid,
    LiaGemSolid,
    LiaGem,
    LiaGenderlessSolid,
    LiaGetPocket,
    LiaGgCircle,
    LiaGg,
    LiaGhostSolid,
    LiaGiftSolid,
    LiaGiftsSolid,
    LiaGitAlt,
    LiaGitSquare,
    LiaGit,
    LiaGithubAlt,
    LiaGithubSquare,
    LiaGithub,
    LiaGitkraken,
    LiaGitlab,
    LiaGitter,
    LiaGlassCheersSolid,
    LiaGlassMartiniAltSolid,
    LiaGlassMartiniSolid,
    LiaGlassWhiskeySolid,
    LiaGlassesSolid,
    LiaGlideG,
    LiaGlide,
    LiaGlobeAfricaSolid,
    LiaGlobeAmericasSolid,
    LiaGlobeAsiaSolid,
    LiaGlobeEuropeSolid,
    LiaGlobeSolid,
    LiaGofore,
    LiaGolfBallSolid,
    LiaGoodreadsG,
    LiaGoodreads,
    LiaGoogleDrive,
    LiaGooglePlay,
    LiaGooglePlusG,
    LiaGooglePlusSquare,
    LiaGooglePlus,
    LiaGoogleWallet,
    LiaGoogle,
    LiaGopuramSolid,
    LiaGraduationCapSolid,
    LiaGratipay,
    LiaGrav,
    LiaGreaterThanEqualSolid,
    LiaGreaterThanSolid,
    LiaGrimaceSolid,
    LiaGrimace,
    LiaGrinAltSolid,
    LiaGrinAlt,
    LiaGrinBeamSolid,
    LiaGrinBeamSweatSolid,
    LiaGrinBeamSweat,
    LiaGrinBeam,
    LiaGrinHeartsSolid,
    LiaGrinHearts,
    LiaGrinSolid,
    LiaGrinSquintSolid,
    LiaGrinSquintTearsSolid,
    LiaGrinSquintTears,
    LiaGrinSquint,
    LiaGrinStarsSolid,
    LiaGrinStars,
    LiaGrinTearsSolid,
    LiaGrinTears,
    LiaGrinTongueSolid,
    LiaGrinTongueSquintSolid,
    LiaGrinTongueSquint,
    LiaGrinTongueWinkSolid,
    LiaGrinTongueWink,
    LiaGrinTongue,
    LiaGrinWinkSolid,
    LiaGrinWink,
    LiaGrin,
    LiaGripHorizontalSolid,
    LiaGripLinesSolid,
    LiaGripLinesVerticalSolid,
    LiaGripVerticalSolid,
    LiaGripfire,
    LiaGrunt,
    LiaGuitarSolid,
    LiaGulp,
    LiaHSquareSolid,
    LiaHackerNewsSquare,
    LiaHackerNews,
    LiaHackerrank,
    LiaHamburgerSolid,
    LiaHammerSolid,
    LiaHamsaSolid,
    LiaHandHoldingHeartSolid,
    LiaHandHoldingSolid,
    LiaHandHoldingUsdSolid,
    LiaHandLizardSolid,
    LiaHandLizard,
    LiaHandMiddleFingerSolid,
    LiaHandPaperSolid,
    LiaHandPaper,
    LiaHandPeaceSolid,
    LiaHandPeace,
    LiaHandPointDownSolid,
    LiaHandPointDown,
    LiaHandPointLeftSolid,
    LiaHandPointLeft,
    LiaHandPointRightSolid,
    LiaHandPointRight,
    LiaHandPointUpSolid,
    LiaHandPointUp,
    LiaHandPointerSolid,
    LiaHandPointer,
    LiaHandRockSolid,
    LiaHandRock,
    LiaHandScissorsSolid,
    LiaHandScissors,
    LiaHandSpockSolid,
    LiaHandSpock,
    LiaHandsHelpingSolid,
    LiaHandsSolid,
    LiaHandshakeSolid,
    LiaHandshake,
    LiaHanukiahSolid,
    LiaHardHatSolid,
    LiaHashtagSolid,
    LiaHatCowboySideSolid,
    LiaHatCowboySolid,
    LiaHatWizardSolid,
    LiaHaykalSolid,
    LiaHddSolid,
    LiaHdd,
    LiaHeadingSolid,
    LiaHeadphonesAltSolid,
    LiaHeadphonesSolid,
    LiaHeadsetSolid,
    LiaHeartBrokenSolid,
    LiaHeartSolid,
    LiaHeart,
    LiaHeartbeatSolid,
    LiaHelicopterSolid,
    LiaHighlighterSolid,
    LiaHikingSolid,
    LiaHippoSolid,
    LiaHips,
    LiaHireAHelper,
    LiaHistorySolid,
    LiaHockeyPuckSolid,
    LiaHollyBerrySolid,
    LiaHomeSolid,
    LiaHooli,
    LiaHornbill,
    LiaHorseHeadSolid,
    LiaHorseSolid,
    LiaHospitalAltSolid,
    LiaHospitalSolid,
    LiaHospitalSymbolSolid,
    LiaHospital,
    LiaHotTubSolid,
    LiaHotdogSolid,
    LiaHotelSolid,
    LiaHotjar,
    LiaHourglassEndSolid,
    LiaHourglassHalfSolid,
    LiaHourglassSolid,
    LiaHourglassStartSolid,
    LiaHourglass,
    LiaHouseDamageSolid,
    LiaHouzz,
    LiaHryvniaSolid,
    LiaHtml5,
    LiaHubspot,
    LiaICursorSolid,
    LiaIceCreamSolid,
    LiaIciclesSolid,
    LiaIconsSolid,
    LiaIdBadgeSolid,
    LiaIdBadge,
    LiaIdCardAltSolid,
    LiaIdCardSolid,
    LiaIdCard,
    LiaIglooSolid,
    LiaImageSolid,
    LiaImage,
    LiaImagesSolid,
    LiaImages,
    LiaImdb,
    LiaInboxSolid,
    LiaIndentSolid,
    LiaIndustrySolid,
    LiaInfinitySolid,
    LiaInfoCircleSolid,
    LiaInfoSolid,
    LiaInstagram,
    LiaIntercom,
    LiaInternetExplorer,
    LiaInvision,
    LiaIoxhost,
    LiaItalicSolid,
    LiaItchIo,
    LiaItunesNote,
    LiaItunes,
    LiaJava,
    LiaJediOrder,
    LiaJediSolid,
    LiaJenkins,
    LiaJira,
    LiaJoget,
    LiaJointSolid,
    LiaJoomla,
    LiaJournalWhillsSolid,
    LiaJsSquare,
    LiaJs,
    LiaJsfiddle,
    LiaKaabaSolid,
    LiaKaggle,
    LiaKeySolid,
    LiaKeybase,
    LiaKeyboardSolid,
    LiaKeyboard,
    LiaKeycdn,
    LiaKhandaSolid,
    LiaKickstarterK,
    LiaKickstarter,
    LiaKissBeamSolid,
    LiaKissBeam,
    LiaKissSolid,
    LiaKissWinkHeartSolid,
    LiaKissWinkHeart,
    LiaKiss,
    LiaKiwiBirdSolid,
    LiaKorvue,
    LiaLandmarkSolid,
    LiaLanguageSolid,
    LiaLaptopCodeSolid,
    LiaLaptopMedicalSolid,
    LiaLaptopSolid,
    LiaLaravel,
    LiaLastfmSquare,
    LiaLastfm,
    LiaLaughBeamSolid,
    LiaLaughBeam,
    LiaLaughSolid,
    LiaLaughSquintSolid,
    LiaLaughSquint,
    LiaLaughWinkSolid,
    LiaLaughWink,
    LiaLaugh,
    LiaLayerGroupSolid,
    LiaLeafSolid,
    LiaLeanpub,
    LiaLemonSolid,
    LiaLemon,
    LiaLessThanEqualSolid,
    LiaLessThanSolid,
    LiaLess,
    LiaLevelDownAltSolid,
    LiaLevelUpAltSolid,
    LiaLifeRingSolid,
    LiaLifeRing,
    LiaLightbulbSolid,
    LiaLightbulb,
    LiaLine,
    LiaLinkSolid,
    LiaLinkedinIn,
    LiaLinkedin,
    LiaLinode,
    LiaLinux,
    LiaLiraSignSolid,
    LiaListAltSolid,
    LiaListAlt,
    LiaListOlSolid,
    LiaListSolid,
    LiaListUlSolid,
    LiaLocationArrowSolid,
    LiaLockOpenSolid,
    LiaLockSolid,
    LiaLongArrowAltDownSolid,
    LiaLongArrowAltLeftSolid,
    LiaLongArrowAltRightSolid,
    LiaLongArrowAltUpSolid,
    LiaLowVisionSolid,
    LiaLuggageCartSolid,
    LiaLyft,
    LiaMagento,
    LiaMagicSolid,
    LiaMagnetSolid,
    LiaMailBulkSolid,
    LiaMailchimp,
    LiaMaleSolid,
    LiaMandalorian,
    LiaMapMarkedAltSolid,
    LiaMapMarkedSolid,
    LiaMapMarkerAltSolid,
    LiaMapMarkerSolid,
    LiaMapPinSolid,
    LiaMapSignsSolid,
    LiaMapSolid,
    LiaMap,
    LiaMarkdown,
    LiaMarkerSolid,
    LiaMarsDoubleSolid,
    LiaMarsSolid,
    LiaMarsStrokeHSolid,
    LiaMarsStrokeSolid,
    LiaMarsStrokeVSolid,
    LiaMaskSolid,
    LiaMastodon,
    LiaMaxcdn,
    LiaMdb,
    LiaMedalSolid,
    LiaMedapps,
    LiaMediumM,
    LiaMedium,
    LiaMedkitSolid,
    LiaMedrt,
    LiaMeetup,
    LiaMegaport,
    LiaMehBlankSolid,
    LiaMehBlank,
    LiaMehRollingEyesSolid,
    LiaMehRollingEyes,
    LiaMehSolid,
    LiaMeh,
    LiaMemorySolid,
    LiaMendeley,
    LiaMenorahSolid,
    LiaMercurySolid,
    LiaMeteorSolid,
    LiaMicrochipSolid,
    LiaMicrophoneAltSlashSolid,
    LiaMicrophoneAltSolid,
    LiaMicrophoneSlashSolid,
    LiaMicrophoneSolid,
    LiaMicroscopeSolid,
    LiaMicrosoft,
    LiaMinusCircleSolid,
    LiaMinusSolid,
    LiaMinusSquareSolid,
    LiaMinusSquare,
    LiaMittenSolid,
    LiaMix,
    LiaMixcloud,
    LiaMizuni,
    LiaMobileAltSolid,
    LiaMobileSolid,
    LiaModx,
    LiaMonero,
    LiaMoneyBillAltSolid,
    LiaMoneyBillAlt,
    LiaMoneyBillSolid,
    LiaMoneyBillWaveAltSolid,
    LiaMoneyBillWaveSolid,
    LiaMoneyCheckAltSolid,
    LiaMoneyCheckSolid,
    LiaMonumentSolid,
    LiaMoonSolid,
    LiaMoon,
    LiaMortarPestleSolid,
    LiaMosqueSolid,
    LiaMotorcycleSolid,
    LiaMountainSolid,
    LiaMousePointerSolid,
    LiaMouseSolid,
    LiaMugHotSolid,
    LiaMusicSolid,
    LiaNapster,
    LiaNeos,
    LiaNetworkWiredSolid,
    LiaNeuterSolid,
    LiaNewspaperSolid,
    LiaNewspaper,
    LiaNimblr,
    LiaNodeJs,
    LiaNode,
    LiaNotEqualSolid,
    LiaNotesMedicalSolid,
    LiaNpm,
    LiaNs8,
    LiaNutritionix,
    LiaObjectGroupSolid,
    LiaObjectGroup,
    LiaObjectUngroupSolid,
    LiaObjectUngroup,
    LiaOdnoklassnikiSquare,
    LiaOdnoklassniki,
    LiaOilCanSolid,
    LiaOldRepublic,
    LiaOmSolid,
    LiaOpencart,
    LiaOpenid,
    LiaOpera,
    LiaOptinMonster,
    LiaOrcid,
    LiaOsi,
    LiaOtterSolid,
    LiaOutdentSolid,
    LiaPage4,
    LiaPagelines,
    LiaPagerSolid,
    LiaPaintBrushSolid,
    LiaPaintRollerSolid,
    LiaPaletteSolid,
    LiaPalfed,
    LiaPalletSolid,
    LiaPaperPlaneSolid,
    LiaPaperPlane,
    LiaPaperclipSolid,
    LiaParachuteBoxSolid,
    LiaParagraphSolid,
    LiaParkingSolid,
    LiaPassportSolid,
    LiaPastafarianismSolid,
    LiaPasteSolid,
    LiaPatreon,
    LiaPauseCircleSolid,
    LiaPauseCircle,
    LiaPauseSolid,
} from "react-icons/lia"

export function nameToReactIcon_lia_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "lia:Lia500Px":
            return Lia500Px;
        case "lia:LiaAccessibleIcon":
            return LiaAccessibleIcon;
        case "lia:LiaAccusoft":
            return LiaAccusoft;
        case "lia:LiaAcquisitionsIncorporated":
            return LiaAcquisitionsIncorporated;
        case "lia:LiaAdSolid":
            return LiaAdSolid;
        case "lia:LiaAddressBookSolid":
            return LiaAddressBookSolid;
        case "lia:LiaAddressBook":
            return LiaAddressBook;
        case "lia:LiaAddressCardSolid":
            return LiaAddressCardSolid;
        case "lia:LiaAddressCard":
            return LiaAddressCard;
        case "lia:LiaAdjustSolid":
            return LiaAdjustSolid;
        case "lia:LiaAdn":
            return LiaAdn;
        case "lia:LiaAdobe":
            return LiaAdobe;
        case "lia:LiaAdversal":
            return LiaAdversal;
        case "lia:LiaAffiliatetheme":
            return LiaAffiliatetheme;
        case "lia:LiaAirFreshenerSolid":
            return LiaAirFreshenerSolid;
        case "lia:LiaAirbnb":
            return LiaAirbnb;
        case "lia:LiaAlgolia":
            return LiaAlgolia;
        case "lia:LiaAlignCenterSolid":
            return LiaAlignCenterSolid;
        case "lia:LiaAlignJustifySolid":
            return LiaAlignJustifySolid;
        case "lia:LiaAlignLeftSolid":
            return LiaAlignLeftSolid;
        case "lia:LiaAlignRightSolid":
            return LiaAlignRightSolid;
        case "lia:LiaAlipay":
            return LiaAlipay;
        case "lia:LiaAllergiesSolid":
            return LiaAllergiesSolid;
        case "lia:LiaAmazonPay":
            return LiaAmazonPay;
        case "lia:LiaAmazon":
            return LiaAmazon;
        case "lia:LiaAmbulanceSolid":
            return LiaAmbulanceSolid;
        case "lia:LiaAmericanSignLanguageInterpretingSolid":
            return LiaAmericanSignLanguageInterpretingSolid;
        case "lia:LiaAmilia":
            return LiaAmilia;
        case "lia:LiaAnchorSolid":
            return LiaAnchorSolid;
        case "lia:LiaAndroid":
            return LiaAndroid;
        case "lia:LiaAngellist":
            return LiaAngellist;
        case "lia:LiaAngleDoubleDownSolid":
            return LiaAngleDoubleDownSolid;
        case "lia:LiaAngleDoubleLeftSolid":
            return LiaAngleDoubleLeftSolid;
        case "lia:LiaAngleDoubleRightSolid":
            return LiaAngleDoubleRightSolid;
        case "lia:LiaAngleDoubleUpSolid":
            return LiaAngleDoubleUpSolid;
        case "lia:LiaAngleDownSolid":
            return LiaAngleDownSolid;
        case "lia:LiaAngleLeftSolid":
            return LiaAngleLeftSolid;
        case "lia:LiaAngleRightSolid":
            return LiaAngleRightSolid;
        case "lia:LiaAngleUpSolid":
            return LiaAngleUpSolid;
        case "lia:LiaAngrySolid":
            return LiaAngrySolid;
        case "lia:LiaAngry":
            return LiaAngry;
        case "lia:LiaAngrycreative":
            return LiaAngrycreative;
        case "lia:LiaAngular":
            return LiaAngular;
        case "lia:LiaAnkhSolid":
            return LiaAnkhSolid;
        case "lia:LiaAppStoreIos":
            return LiaAppStoreIos;
        case "lia:LiaAppStore":
            return LiaAppStore;
        case "lia:LiaApper":
            return LiaApper;
        case "lia:LiaAppleAltSolid":
            return LiaAppleAltSolid;
        case "lia:LiaApplePay":
            return LiaApplePay;
        case "lia:LiaApple":
            return LiaApple;
        case "lia:LiaArchiveSolid":
            return LiaArchiveSolid;
        case "lia:LiaArchwaySolid":
            return LiaArchwaySolid;
        case "lia:LiaArrowAltCircleDownSolid":
            return LiaArrowAltCircleDownSolid;
        case "lia:LiaArrowAltCircleDown":
            return LiaArrowAltCircleDown;
        case "lia:LiaArrowAltCircleLeftSolid":
            return LiaArrowAltCircleLeftSolid;
        case "lia:LiaArrowAltCircleLeft":
            return LiaArrowAltCircleLeft;
        case "lia:LiaArrowAltCircleRightSolid":
            return LiaArrowAltCircleRightSolid;
        case "lia:LiaArrowAltCircleRight":
            return LiaArrowAltCircleRight;
        case "lia:LiaArrowAltCircleUpSolid":
            return LiaArrowAltCircleUpSolid;
        case "lia:LiaArrowAltCircleUp":
            return LiaArrowAltCircleUp;
        case "lia:LiaArrowCircleDownSolid":
            return LiaArrowCircleDownSolid;
        case "lia:LiaArrowCircleLeftSolid":
            return LiaArrowCircleLeftSolid;
        case "lia:LiaArrowCircleRightSolid":
            return LiaArrowCircleRightSolid;
        case "lia:LiaArrowCircleUpSolid":
            return LiaArrowCircleUpSolid;
        case "lia:LiaArrowDownSolid":
            return LiaArrowDownSolid;
        case "lia:LiaArrowLeftSolid":
            return LiaArrowLeftSolid;
        case "lia:LiaArrowRightSolid":
            return LiaArrowRightSolid;
        case "lia:LiaArrowUpSolid":
            return LiaArrowUpSolid;
        case "lia:LiaArrowsAltHSolid":
            return LiaArrowsAltHSolid;
        case "lia:LiaArrowsAltSolid":
            return LiaArrowsAltSolid;
        case "lia:LiaArrowsAltVSolid":
            return LiaArrowsAltVSolid;
        case "lia:LiaArtstation":
            return LiaArtstation;
        case "lia:LiaAssistiveListeningSystemsSolid":
            return LiaAssistiveListeningSystemsSolid;
        case "lia:LiaAsteriskSolid":
            return LiaAsteriskSolid;
        case "lia:LiaAsymmetrik":
            return LiaAsymmetrik;
        case "lia:LiaAtSolid":
            return LiaAtSolid;
        case "lia:LiaAtlasSolid":
            return LiaAtlasSolid;
        case "lia:LiaAtlassian":
            return LiaAtlassian;
        case "lia:LiaAtomSolid":
            return LiaAtomSolid;
        case "lia:LiaAudible":
            return LiaAudible;
        case "lia:LiaAudioDescriptionSolid":
            return LiaAudioDescriptionSolid;
        case "lia:LiaAutoprefixer":
            return LiaAutoprefixer;
        case "lia:LiaAvianex":
            return LiaAvianex;
        case "lia:LiaAviato":
            return LiaAviato;
        case "lia:LiaAwardSolid":
            return LiaAwardSolid;
        case "lia:LiaAws":
            return LiaAws;
        case "lia:LiaBabyCarriageSolid":
            return LiaBabyCarriageSolid;
        case "lia:LiaBabySolid":
            return LiaBabySolid;
        case "lia:LiaBackspaceSolid":
            return LiaBackspaceSolid;
        case "lia:LiaBackwardSolid":
            return LiaBackwardSolid;
        case "lia:LiaBaconSolid":
            return LiaBaconSolid;
        case "lia:LiaBalanceScaleLeftSolid":
            return LiaBalanceScaleLeftSolid;
        case "lia:LiaBalanceScaleRightSolid":
            return LiaBalanceScaleRightSolid;
        case "lia:LiaBalanceScaleSolid":
            return LiaBalanceScaleSolid;
        case "lia:LiaBanSolid":
            return LiaBanSolid;
        case "lia:LiaBandAidSolid":
            return LiaBandAidSolid;
        case "lia:LiaBandcamp":
            return LiaBandcamp;
        case "lia:LiaBarcodeSolid":
            return LiaBarcodeSolid;
        case "lia:LiaBarsSolid":
            return LiaBarsSolid;
        case "lia:LiaBaseballBallSolid":
            return LiaBaseballBallSolid;
        case "lia:LiaBasketballBallSolid":
            return LiaBasketballBallSolid;
        case "lia:LiaBathSolid":
            return LiaBathSolid;
        case "lia:LiaBatteryEmptySolid":
            return LiaBatteryEmptySolid;
        case "lia:LiaBatteryFullSolid":
            return LiaBatteryFullSolid;
        case "lia:LiaBatteryHalfSolid":
            return LiaBatteryHalfSolid;
        case "lia:LiaBatteryQuarterSolid":
            return LiaBatteryQuarterSolid;
        case "lia:LiaBatteryThreeQuartersSolid":
            return LiaBatteryThreeQuartersSolid;
        case "lia:LiaBattleNet":
            return LiaBattleNet;
        case "lia:LiaBedSolid":
            return LiaBedSolid;
        case "lia:LiaBeerSolid":
            return LiaBeerSolid;
        case "lia:LiaBehanceSquare":
            return LiaBehanceSquare;
        case "lia:LiaBehance":
            return LiaBehance;
        case "lia:LiaBellSlashSolid":
            return LiaBellSlashSolid;
        case "lia:LiaBellSlash":
            return LiaBellSlash;
        case "lia:LiaBellSolid":
            return LiaBellSolid;
        case "lia:LiaBell":
            return LiaBell;
        case "lia:LiaBezierCurveSolid":
            return LiaBezierCurveSolid;
        case "lia:LiaBibleSolid":
            return LiaBibleSolid;
        case "lia:LiaBicycleSolid":
            return LiaBicycleSolid;
        case "lia:LiaBikingSolid":
            return LiaBikingSolid;
        case "lia:LiaBimobject":
            return LiaBimobject;
        case "lia:LiaBinocularsSolid":
            return LiaBinocularsSolid;
        case "lia:LiaBiohazardSolid":
            return LiaBiohazardSolid;
        case "lia:LiaBirthdayCakeSolid":
            return LiaBirthdayCakeSolid;
        case "lia:LiaBitbucket":
            return LiaBitbucket;
        case "lia:LiaBitcoin":
            return LiaBitcoin;
        case "lia:LiaBity":
            return LiaBity;
        case "lia:LiaBlackTie":
            return LiaBlackTie;
        case "lia:LiaBlackberry":
            return LiaBlackberry;
        case "lia:LiaBlenderPhoneSolid":
            return LiaBlenderPhoneSolid;
        case "lia:LiaBlenderSolid":
            return LiaBlenderSolid;
        case "lia:LiaBlindSolid":
            return LiaBlindSolid;
        case "lia:LiaBlogSolid":
            return LiaBlogSolid;
        case "lia:LiaBloggerB":
            return LiaBloggerB;
        case "lia:LiaBlogger":
            return LiaBlogger;
        case "lia:LiaBluetoothB":
            return LiaBluetoothB;
        case "lia:LiaBluetooth":
            return LiaBluetooth;
        case "lia:LiaBoldSolid":
            return LiaBoldSolid;
        case "lia:LiaBoltSolid":
            return LiaBoltSolid;
        case "lia:LiaBombSolid":
            return LiaBombSolid;
        case "lia:LiaBoneSolid":
            return LiaBoneSolid;
        case "lia:LiaBongSolid":
            return LiaBongSolid;
        case "lia:LiaBookDeadSolid":
            return LiaBookDeadSolid;
        case "lia:LiaBookMedicalSolid":
            return LiaBookMedicalSolid;
        case "lia:LiaBookOpenSolid":
            return LiaBookOpenSolid;
        case "lia:LiaBookReaderSolid":
            return LiaBookReaderSolid;
        case "lia:LiaBookSolid":
            return LiaBookSolid;
        case "lia:LiaBookmarkSolid":
            return LiaBookmarkSolid;
        case "lia:LiaBookmark":
            return LiaBookmark;
        case "lia:LiaBootstrap":
            return LiaBootstrap;
        case "lia:LiaBorderAllSolid":
            return LiaBorderAllSolid;
        case "lia:LiaBorderNoneSolid":
            return LiaBorderNoneSolid;
        case "lia:LiaBorderStyleSolid":
            return LiaBorderStyleSolid;
        case "lia:LiaBowlingBallSolid":
            return LiaBowlingBallSolid;
        case "lia:LiaBoxOpenSolid":
            return LiaBoxOpenSolid;
        case "lia:LiaBoxSolid":
            return LiaBoxSolid;
        case "lia:LiaBoxesSolid":
            return LiaBoxesSolid;
        case "lia:LiaBrailleSolid":
            return LiaBrailleSolid;
        case "lia:LiaBrainSolid":
            return LiaBrainSolid;
        case "lia:LiaBreadSliceSolid":
            return LiaBreadSliceSolid;
        case "lia:LiaBriefcaseMedicalSolid":
            return LiaBriefcaseMedicalSolid;
        case "lia:LiaBriefcaseSolid":
            return LiaBriefcaseSolid;
        case "lia:LiaBroadcastTowerSolid":
            return LiaBroadcastTowerSolid;
        case "lia:LiaBroomSolid":
            return LiaBroomSolid;
        case "lia:LiaBrushSolid":
            return LiaBrushSolid;
        case "lia:LiaBtc":
            return LiaBtc;
        case "lia:LiaBuffer":
            return LiaBuffer;
        case "lia:LiaBugSolid":
            return LiaBugSolid;
        case "lia:LiaBuildingSolid":
            return LiaBuildingSolid;
        case "lia:LiaBuilding":
            return LiaBuilding;
        case "lia:LiaBullhornSolid":
            return LiaBullhornSolid;
        case "lia:LiaBullseyeSolid":
            return LiaBullseyeSolid;
        case "lia:LiaBurnSolid":
            return LiaBurnSolid;
        case "lia:LiaBuromobelexperte":
            return LiaBuromobelexperte;
        case "lia:LiaBusAltSolid":
            return LiaBusAltSolid;
        case "lia:LiaBusSolid":
            return LiaBusSolid;
        case "lia:LiaBusinessTimeSolid":
            return LiaBusinessTimeSolid;
        case "lia:LiaBuyNLarge":
            return LiaBuyNLarge;
        case "lia:LiaBuysellads":
            return LiaBuysellads;
        case "lia:LiaCalculatorSolid":
            return LiaCalculatorSolid;
        case "lia:LiaCalendarAltSolid":
            return LiaCalendarAltSolid;
        case "lia:LiaCalendarAlt":
            return LiaCalendarAlt;
        case "lia:LiaCalendarCheckSolid":
            return LiaCalendarCheckSolid;
        case "lia:LiaCalendarCheck":
            return LiaCalendarCheck;
        case "lia:LiaCalendarDaySolid":
            return LiaCalendarDaySolid;
        case "lia:LiaCalendarMinusSolid":
            return LiaCalendarMinusSolid;
        case "lia:LiaCalendarMinus":
            return LiaCalendarMinus;
        case "lia:LiaCalendarPlusSolid":
            return LiaCalendarPlusSolid;
        case "lia:LiaCalendarPlus":
            return LiaCalendarPlus;
        case "lia:LiaCalendarSolid":
            return LiaCalendarSolid;
        case "lia:LiaCalendarTimesSolid":
            return LiaCalendarTimesSolid;
        case "lia:LiaCalendarTimes":
            return LiaCalendarTimes;
        case "lia:LiaCalendarWeekSolid":
            return LiaCalendarWeekSolid;
        case "lia:LiaCalendar":
            return LiaCalendar;
        case "lia:LiaCameraRetroSolid":
            return LiaCameraRetroSolid;
        case "lia:LiaCameraSolid":
            return LiaCameraSolid;
        case "lia:LiaCampgroundSolid":
            return LiaCampgroundSolid;
        case "lia:LiaCanadianMapleLeaf":
            return LiaCanadianMapleLeaf;
        case "lia:LiaCandyCaneSolid":
            return LiaCandyCaneSolid;
        case "lia:LiaCannabisSolid":
            return LiaCannabisSolid;
        case "lia:LiaCapsulesSolid":
            return LiaCapsulesSolid;
        case "lia:LiaCarAltSolid":
            return LiaCarAltSolid;
        case "lia:LiaCarBatterySolid":
            return LiaCarBatterySolid;
        case "lia:LiaCarCrashSolid":
            return LiaCarCrashSolid;
        case "lia:LiaCarSideSolid":
            return LiaCarSideSolid;
        case "lia:LiaCarSolid":
            return LiaCarSolid;
        case "lia:LiaCaretDownSolid":
            return LiaCaretDownSolid;
        case "lia:LiaCaretLeftSolid":
            return LiaCaretLeftSolid;
        case "lia:LiaCaretRightSolid":
            return LiaCaretRightSolid;
        case "lia:LiaCaretSquareDownSolid":
            return LiaCaretSquareDownSolid;
        case "lia:LiaCaretSquareDown":
            return LiaCaretSquareDown;
        case "lia:LiaCaretSquareLeftSolid":
            return LiaCaretSquareLeftSolid;
        case "lia:LiaCaretSquareLeft":
            return LiaCaretSquareLeft;
        case "lia:LiaCaretSquareRightSolid":
            return LiaCaretSquareRightSolid;
        case "lia:LiaCaretSquareRight":
            return LiaCaretSquareRight;
        case "lia:LiaCaretSquareUpSolid":
            return LiaCaretSquareUpSolid;
        case "lia:LiaCaretSquareUp":
            return LiaCaretSquareUp;
        case "lia:LiaCaretUpSolid":
            return LiaCaretUpSolid;
        case "lia:LiaCarrotSolid":
            return LiaCarrotSolid;
        case "lia:LiaCartArrowDownSolid":
            return LiaCartArrowDownSolid;
        case "lia:LiaCartPlusSolid":
            return LiaCartPlusSolid;
        case "lia:LiaCashRegisterSolid":
            return LiaCashRegisterSolid;
        case "lia:LiaCatSolid":
            return LiaCatSolid;
        case "lia:LiaCcAmazonPay":
            return LiaCcAmazonPay;
        case "lia:LiaCcAmex":
            return LiaCcAmex;
        case "lia:LiaCcApplePay":
            return LiaCcApplePay;
        case "lia:LiaCcDinersClub":
            return LiaCcDinersClub;
        case "lia:LiaCcDiscover":
            return LiaCcDiscover;
        case "lia:LiaCcJcb":
            return LiaCcJcb;
        case "lia:LiaCcMastercard":
            return LiaCcMastercard;
        case "lia:LiaCcPaypal":
            return LiaCcPaypal;
        case "lia:LiaCcStripe":
            return LiaCcStripe;
        case "lia:LiaCcVisa":
            return LiaCcVisa;
        case "lia:LiaCentercode":
            return LiaCentercode;
        case "lia:LiaCentos":
            return LiaCentos;
        case "lia:LiaCertificateSolid":
            return LiaCertificateSolid;
        case "lia:LiaChairSolid":
            return LiaChairSolid;
        case "lia:LiaChalkboardSolid":
            return LiaChalkboardSolid;
        case "lia:LiaChalkboardTeacherSolid":
            return LiaChalkboardTeacherSolid;
        case "lia:LiaChargingStationSolid":
            return LiaChargingStationSolid;
        case "lia:LiaChartAreaSolid":
            return LiaChartAreaSolid;
        case "lia:LiaChartBarSolid":
            return LiaChartBarSolid;
        case "lia:LiaChartBar":
            return LiaChartBar;
        case "lia:LiaChartLineSolid":
            return LiaChartLineSolid;
        case "lia:LiaChartPieSolid":
            return LiaChartPieSolid;
        case "lia:LiaCheckCircleSolid":
            return LiaCheckCircleSolid;
        case "lia:LiaCheckCircle":
            return LiaCheckCircle;
        case "lia:LiaCheckDoubleSolid":
            return LiaCheckDoubleSolid;
        case "lia:LiaCheckSolid":
            return LiaCheckSolid;
        case "lia:LiaCheckSquareSolid":
            return LiaCheckSquareSolid;
        case "lia:LiaCheckSquare":
            return LiaCheckSquare;
        case "lia:LiaCheeseSolid":
            return LiaCheeseSolid;
        case "lia:LiaChessBishopSolid":
            return LiaChessBishopSolid;
        case "lia:LiaChessBoardSolid":
            return LiaChessBoardSolid;
        case "lia:LiaChessKingSolid":
            return LiaChessKingSolid;
        case "lia:LiaChessKnightSolid":
            return LiaChessKnightSolid;
        case "lia:LiaChessPawnSolid":
            return LiaChessPawnSolid;
        case "lia:LiaChessQueenSolid":
            return LiaChessQueenSolid;
        case "lia:LiaChessRookSolid":
            return LiaChessRookSolid;
        case "lia:LiaChessSolid":
            return LiaChessSolid;
        case "lia:LiaChevronCircleDownSolid":
            return LiaChevronCircleDownSolid;
        case "lia:LiaChevronCircleLeftSolid":
            return LiaChevronCircleLeftSolid;
        case "lia:LiaChevronCircleRightSolid":
            return LiaChevronCircleRightSolid;
        case "lia:LiaChevronCircleUpSolid":
            return LiaChevronCircleUpSolid;
        case "lia:LiaChevronDownSolid":
            return LiaChevronDownSolid;
        case "lia:LiaChevronLeftSolid":
            return LiaChevronLeftSolid;
        case "lia:LiaChevronRightSolid":
            return LiaChevronRightSolid;
        case "lia:LiaChevronUpSolid":
            return LiaChevronUpSolid;
        case "lia:LiaChildSolid":
            return LiaChildSolid;
        case "lia:LiaChrome":
            return LiaChrome;
        case "lia:LiaChromecast":
            return LiaChromecast;
        case "lia:LiaChurchSolid":
            return LiaChurchSolid;
        case "lia:LiaCircleNotchSolid":
            return LiaCircleNotchSolid;
        case "lia:LiaCircleSolid":
            return LiaCircleSolid;
        case "lia:LiaCircle":
            return LiaCircle;
        case "lia:LiaCitySolid":
            return LiaCitySolid;
        case "lia:LiaClinicMedicalSolid":
            return LiaClinicMedicalSolid;
        case "lia:LiaClipboardCheckSolid":
            return LiaClipboardCheckSolid;
        case "lia:LiaClipboardListSolid":
            return LiaClipboardListSolid;
        case "lia:LiaClipboardSolid":
            return LiaClipboardSolid;
        case "lia:LiaClipboard":
            return LiaClipboard;
        case "lia:LiaClockSolid":
            return LiaClockSolid;
        case "lia:LiaClock":
            return LiaClock;
        case "lia:LiaCloneSolid":
            return LiaCloneSolid;
        case "lia:LiaClone":
            return LiaClone;
        case "lia:LiaClosedCaptioningSolid":
            return LiaClosedCaptioningSolid;
        case "lia:LiaClosedCaptioning":
            return LiaClosedCaptioning;
        case "lia:LiaCloudDownloadAltSolid":
            return LiaCloudDownloadAltSolid;
        case "lia:LiaCloudMeatballSolid":
            return LiaCloudMeatballSolid;
        case "lia:LiaCloudMoonRainSolid":
            return LiaCloudMoonRainSolid;
        case "lia:LiaCloudMoonSolid":
            return LiaCloudMoonSolid;
        case "lia:LiaCloudRainSolid":
            return LiaCloudRainSolid;
        case "lia:LiaCloudShowersHeavySolid":
            return LiaCloudShowersHeavySolid;
        case "lia:LiaCloudSolid":
            return LiaCloudSolid;
        case "lia:LiaCloudSunRainSolid":
            return LiaCloudSunRainSolid;
        case "lia:LiaCloudSunSolid":
            return LiaCloudSunSolid;
        case "lia:LiaCloudUploadAltSolid":
            return LiaCloudUploadAltSolid;
        case "lia:LiaCloudscale":
            return LiaCloudscale;
        case "lia:LiaCloudsmith":
            return LiaCloudsmith;
        case "lia:LiaCloudversify":
            return LiaCloudversify;
        case "lia:LiaCocktailSolid":
            return LiaCocktailSolid;
        case "lia:LiaCodeBranchSolid":
            return LiaCodeBranchSolid;
        case "lia:LiaCodeSolid":
            return LiaCodeSolid;
        case "lia:LiaCodepen":
            return LiaCodepen;
        case "lia:LiaCodiepie":
            return LiaCodiepie;
        case "lia:LiaCoffeeSolid":
            return LiaCoffeeSolid;
        case "lia:LiaCogSolid":
            return LiaCogSolid;
        case "lia:LiaCogsSolid":
            return LiaCogsSolid;
        case "lia:LiaCoinsSolid":
            return LiaCoinsSolid;
        case "lia:LiaColumnsSolid":
            return LiaColumnsSolid;
        case "lia:LiaCommentAltSolid":
            return LiaCommentAltSolid;
        case "lia:LiaCommentAlt":
            return LiaCommentAlt;
        case "lia:LiaCommentDollarSolid":
            return LiaCommentDollarSolid;
        case "lia:LiaCommentDotsSolid":
            return LiaCommentDotsSolid;
        case "lia:LiaCommentDots":
            return LiaCommentDots;
        case "lia:LiaCommentMedicalSolid":
            return LiaCommentMedicalSolid;
        case "lia:LiaCommentSlashSolid":
            return LiaCommentSlashSolid;
        case "lia:LiaCommentSolid":
            return LiaCommentSolid;
        case "lia:LiaComment":
            return LiaComment;
        case "lia:LiaCommentsDollarSolid":
            return LiaCommentsDollarSolid;
        case "lia:LiaCommentsSolid":
            return LiaCommentsSolid;
        case "lia:LiaComments":
            return LiaComments;
        case "lia:LiaCompactDiscSolid":
            return LiaCompactDiscSolid;
        case "lia:LiaCompassSolid":
            return LiaCompassSolid;
        case "lia:LiaCompass":
            return LiaCompass;
        case "lia:LiaCompressArrowsAltSolid":
            return LiaCompressArrowsAltSolid;
        case "lia:LiaCompressSolid":
            return LiaCompressSolid;
        case "lia:LiaConciergeBellSolid":
            return LiaConciergeBellSolid;
        case "lia:LiaConfluence":
            return LiaConfluence;
        case "lia:LiaConnectdevelop":
            return LiaConnectdevelop;
        case "lia:LiaContao":
            return LiaContao;
        case "lia:LiaCookieBiteSolid":
            return LiaCookieBiteSolid;
        case "lia:LiaCookieSolid":
            return LiaCookieSolid;
        case "lia:LiaCopySolid":
            return LiaCopySolid;
        case "lia:LiaCopy":
            return LiaCopy;
        case "lia:LiaCopyrightSolid":
            return LiaCopyrightSolid;
        case "lia:LiaCopyright":
            return LiaCopyright;
        case "lia:LiaCottonBureau":
            return LiaCottonBureau;
        case "lia:LiaCouchSolid":
            return LiaCouchSolid;
        case "lia:LiaCpanel":
            return LiaCpanel;
        case "lia:LiaCreativeCommonsBy":
            return LiaCreativeCommonsBy;
        case "lia:LiaCreativeCommonsNcEu":
            return LiaCreativeCommonsNcEu;
        case "lia:LiaCreativeCommonsNcJp":
            return LiaCreativeCommonsNcJp;
        case "lia:LiaCreativeCommonsNc":
            return LiaCreativeCommonsNc;
        case "lia:LiaCreativeCommonsNd":
            return LiaCreativeCommonsNd;
        case "lia:LiaCreativeCommonsPdAlt":
            return LiaCreativeCommonsPdAlt;
        case "lia:LiaCreativeCommonsPd":
            return LiaCreativeCommonsPd;
        case "lia:LiaCreativeCommonsRemix":
            return LiaCreativeCommonsRemix;
        case "lia:LiaCreativeCommonsSa":
            return LiaCreativeCommonsSa;
        case "lia:LiaCreativeCommonsSamplingPlus":
            return LiaCreativeCommonsSamplingPlus;
        case "lia:LiaCreativeCommonsSampling":
            return LiaCreativeCommonsSampling;
        case "lia:LiaCreativeCommonsShare":
            return LiaCreativeCommonsShare;
        case "lia:LiaCreativeCommonsZero":
            return LiaCreativeCommonsZero;
        case "lia:LiaCreativeCommons":
            return LiaCreativeCommons;
        case "lia:LiaCreditCardSolid":
            return LiaCreditCardSolid;
        case "lia:LiaCreditCard":
            return LiaCreditCard;
        case "lia:LiaCriticalRole":
            return LiaCriticalRole;
        case "lia:LiaCropAltSolid":
            return LiaCropAltSolid;
        case "lia:LiaCropSolid":
            return LiaCropSolid;
        case "lia:LiaCrossSolid":
            return LiaCrossSolid;
        case "lia:LiaCrosshairsSolid":
            return LiaCrosshairsSolid;
        case "lia:LiaCrowSolid":
            return LiaCrowSolid;
        case "lia:LiaCrownSolid":
            return LiaCrownSolid;
        case "lia:LiaCrutchSolid":
            return LiaCrutchSolid;
        case "lia:LiaCss3Alt":
            return LiaCss3Alt;
        case "lia:LiaCss3":
            return LiaCss3;
        case "lia:LiaCubeSolid":
            return LiaCubeSolid;
        case "lia:LiaCubesSolid":
            return LiaCubesSolid;
        case "lia:LiaCutSolid":
            return LiaCutSolid;
        case "lia:LiaCuttlefish":
            return LiaCuttlefish;
        case "lia:LiaDAndDBeyond":
            return LiaDAndDBeyond;
        case "lia:LiaDAndD":
            return LiaDAndD;
        case "lia:LiaDashcube":
            return LiaDashcube;
        case "lia:LiaDatabaseSolid":
            return LiaDatabaseSolid;
        case "lia:LiaDeafSolid":
            return LiaDeafSolid;
        case "lia:LiaDelicious":
            return LiaDelicious;
        case "lia:LiaDemocratSolid":
            return LiaDemocratSolid;
        case "lia:LiaDeploydog":
            return LiaDeploydog;
        case "lia:LiaDeskpro":
            return LiaDeskpro;
        case "lia:LiaDesktopSolid":
            return LiaDesktopSolid;
        case "lia:LiaDev":
            return LiaDev;
        case "lia:LiaDeviantart":
            return LiaDeviantart;
        case "lia:LiaDharmachakraSolid":
            return LiaDharmachakraSolid;
        case "lia:LiaDhl":
            return LiaDhl;
        case "lia:LiaDiagnosesSolid":
            return LiaDiagnosesSolid;
        case "lia:LiaDiaspora":
            return LiaDiaspora;
        case "lia:LiaDiceD20Solid":
            return LiaDiceD20Solid;
        case "lia:LiaDiceD6Solid":
            return LiaDiceD6Solid;
        case "lia:LiaDiceFiveSolid":
            return LiaDiceFiveSolid;
        case "lia:LiaDiceFourSolid":
            return LiaDiceFourSolid;
        case "lia:LiaDiceOneSolid":
            return LiaDiceOneSolid;
        case "lia:LiaDiceSixSolid":
            return LiaDiceSixSolid;
        case "lia:LiaDiceSolid":
            return LiaDiceSolid;
        case "lia:LiaDiceThreeSolid":
            return LiaDiceThreeSolid;
        case "lia:LiaDiceTwoSolid":
            return LiaDiceTwoSolid;
        case "lia:LiaDigg":
            return LiaDigg;
        case "lia:LiaDigitalOcean":
            return LiaDigitalOcean;
        case "lia:LiaDigitalTachographSolid":
            return LiaDigitalTachographSolid;
        case "lia:LiaDirectionsSolid":
            return LiaDirectionsSolid;
        case "lia:LiaDiscord":
            return LiaDiscord;
        case "lia:LiaDiscourse":
            return LiaDiscourse;
        case "lia:LiaDivideSolid":
            return LiaDivideSolid;
        case "lia:LiaDizzySolid":
            return LiaDizzySolid;
        case "lia:LiaDizzy":
            return LiaDizzy;
        case "lia:LiaDnaSolid":
            return LiaDnaSolid;
        case "lia:LiaDochub":
            return LiaDochub;
        case "lia:LiaDocker":
            return LiaDocker;
        case "lia:LiaDogSolid":
            return LiaDogSolid;
        case "lia:LiaDollarSignSolid":
            return LiaDollarSignSolid;
        case "lia:LiaDollyFlatbedSolid":
            return LiaDollyFlatbedSolid;
        case "lia:LiaDollySolid":
            return LiaDollySolid;
        case "lia:LiaDonateSolid":
            return LiaDonateSolid;
        case "lia:LiaDoorClosedSolid":
            return LiaDoorClosedSolid;
        case "lia:LiaDoorOpenSolid":
            return LiaDoorOpenSolid;
        case "lia:LiaDotCircleSolid":
            return LiaDotCircleSolid;
        case "lia:LiaDotCircle":
            return LiaDotCircle;
        case "lia:LiaDoveSolid":
            return LiaDoveSolid;
        case "lia:LiaDownloadSolid":
            return LiaDownloadSolid;
        case "lia:LiaDraft2Digital":
            return LiaDraft2Digital;
        case "lia:LiaDraftingCompassSolid":
            return LiaDraftingCompassSolid;
        case "lia:LiaDragonSolid":
            return LiaDragonSolid;
        case "lia:LiaDrawPolygonSolid":
            return LiaDrawPolygonSolid;
        case "lia:LiaDribbbleSquare":
            return LiaDribbbleSquare;
        case "lia:LiaDribbble":
            return LiaDribbble;
        case "lia:LiaDropbox":
            return LiaDropbox;
        case "lia:LiaDrumSolid":
            return LiaDrumSolid;
        case "lia:LiaDrumSteelpanSolid":
            return LiaDrumSteelpanSolid;
        case "lia:LiaDrumstickBiteSolid":
            return LiaDrumstickBiteSolid;
        case "lia:LiaDrupal":
            return LiaDrupal;
        case "lia:LiaDumbbellSolid":
            return LiaDumbbellSolid;
        case "lia:LiaDumpsterFireSolid":
            return LiaDumpsterFireSolid;
        case "lia:LiaDumpsterSolid":
            return LiaDumpsterSolid;
        case "lia:LiaDungeonSolid":
            return LiaDungeonSolid;
        case "lia:LiaDyalog":
            return LiaDyalog;
        case "lia:LiaEarlybirds":
            return LiaEarlybirds;
        case "lia:LiaEbay":
            return LiaEbay;
        case "lia:LiaEdge":
            return LiaEdge;
        case "lia:LiaEditSolid":
            return LiaEditSolid;
        case "lia:LiaEdit":
            return LiaEdit;
        case "lia:LiaEggSolid":
            return LiaEggSolid;
        case "lia:LiaEjectSolid":
            return LiaEjectSolid;
        case "lia:LiaElementor":
            return LiaElementor;
        case "lia:LiaEllipsisHSolid":
            return LiaEllipsisHSolid;
        case "lia:LiaEllipsisVSolid":
            return LiaEllipsisVSolid;
        case "lia:LiaEllo":
            return LiaEllo;
        case "lia:LiaEmber":
            return LiaEmber;
        case "lia:LiaEmpire":
            return LiaEmpire;
        case "lia:LiaEnvelopeOpenSolid":
            return LiaEnvelopeOpenSolid;
        case "lia:LiaEnvelopeOpenTextSolid":
            return LiaEnvelopeOpenTextSolid;
        case "lia:LiaEnvelopeOpen":
            return LiaEnvelopeOpen;
        case "lia:LiaEnvelopeSolid":
            return LiaEnvelopeSolid;
        case "lia:LiaEnvelopeSquareSolid":
            return LiaEnvelopeSquareSolid;
        case "lia:LiaEnvelope":
            return LiaEnvelope;
        case "lia:LiaEnvira":
            return LiaEnvira;
        case "lia:LiaEqualsSolid":
            return LiaEqualsSolid;
        case "lia:LiaEraserSolid":
            return LiaEraserSolid;
        case "lia:LiaErlang":
            return LiaErlang;
        case "lia:LiaEthereum":
            return LiaEthereum;
        case "lia:LiaEthernetSolid":
            return LiaEthernetSolid;
        case "lia:LiaEtsy":
            return LiaEtsy;
        case "lia:LiaEuroSignSolid":
            return LiaEuroSignSolid;
        case "lia:LiaEvernote":
            return LiaEvernote;
        case "lia:LiaExchangeAltSolid":
            return LiaExchangeAltSolid;
        case "lia:LiaExclamationCircleSolid":
            return LiaExclamationCircleSolid;
        case "lia:LiaExclamationSolid":
            return LiaExclamationSolid;
        case "lia:LiaExclamationTriangleSolid":
            return LiaExclamationTriangleSolid;
        case "lia:LiaExpandArrowsAltSolid":
            return LiaExpandArrowsAltSolid;
        case "lia:LiaExpandSolid":
            return LiaExpandSolid;
        case "lia:LiaExpeditedssl":
            return LiaExpeditedssl;
        case "lia:LiaExternalLinkAltSolid":
            return LiaExternalLinkAltSolid;
        case "lia:LiaExternalLinkSquareAltSolid":
            return LiaExternalLinkSquareAltSolid;
        case "lia:LiaEyeDropperSolid":
            return LiaEyeDropperSolid;
        case "lia:LiaEyeSlashSolid":
            return LiaEyeSlashSolid;
        case "lia:LiaEyeSlash":
            return LiaEyeSlash;
        case "lia:LiaEyeSolid":
            return LiaEyeSolid;
        case "lia:LiaEye":
            return LiaEye;
        case "lia:LiaFacebookF":
            return LiaFacebookF;
        case "lia:LiaFacebookMessenger":
            return LiaFacebookMessenger;
        case "lia:LiaFacebookSquare":
            return LiaFacebookSquare;
        case "lia:LiaFacebook":
            return LiaFacebook;
        case "lia:LiaFanSolid":
            return LiaFanSolid;
        case "lia:LiaFantasyFlightGames":
            return LiaFantasyFlightGames;
        case "lia:LiaFastBackwardSolid":
            return LiaFastBackwardSolid;
        case "lia:LiaFastForwardSolid":
            return LiaFastForwardSolid;
        case "lia:LiaFaxSolid":
            return LiaFaxSolid;
        case "lia:LiaFeatherAltSolid":
            return LiaFeatherAltSolid;
        case "lia:LiaFeatherSolid":
            return LiaFeatherSolid;
        case "lia:LiaFedex":
            return LiaFedex;
        case "lia:LiaFedora":
            return LiaFedora;
        case "lia:LiaFemaleSolid":
            return LiaFemaleSolid;
        case "lia:LiaFighterJetSolid":
            return LiaFighterJetSolid;
        case "lia:LiaFigma":
            return LiaFigma;
        case "lia:LiaFileAltSolid":
            return LiaFileAltSolid;
        case "lia:LiaFileAlt":
            return LiaFileAlt;
        case "lia:LiaFileArchiveSolid":
            return LiaFileArchiveSolid;
        case "lia:LiaFileArchive":
            return LiaFileArchive;
        case "lia:LiaFileAudioSolid":
            return LiaFileAudioSolid;
        case "lia:LiaFileAudio":
            return LiaFileAudio;
        case "lia:LiaFileCodeSolid":
            return LiaFileCodeSolid;
        case "lia:LiaFileCode":
            return LiaFileCode;
        case "lia:LiaFileContractSolid":
            return LiaFileContractSolid;
        case "lia:LiaFileCsvSolid":
            return LiaFileCsvSolid;
        case "lia:LiaFileDownloadSolid":
            return LiaFileDownloadSolid;
        case "lia:LiaFileExcelSolid":
            return LiaFileExcelSolid;
        case "lia:LiaFileExcel":
            return LiaFileExcel;
        case "lia:LiaFileExportSolid":
            return LiaFileExportSolid;
        case "lia:LiaFileImageSolid":
            return LiaFileImageSolid;
        case "lia:LiaFileImage":
            return LiaFileImage;
        case "lia:LiaFileImportSolid":
            return LiaFileImportSolid;
        case "lia:LiaFileInvoiceDollarSolid":
            return LiaFileInvoiceDollarSolid;
        case "lia:LiaFileInvoiceSolid":
            return LiaFileInvoiceSolid;
        case "lia:LiaFileMedicalAltSolid":
            return LiaFileMedicalAltSolid;
        case "lia:LiaFileMedicalSolid":
            return LiaFileMedicalSolid;
        case "lia:LiaFilePdfSolid":
            return LiaFilePdfSolid;
        case "lia:LiaFilePdf":
            return LiaFilePdf;
        case "lia:LiaFilePowerpointSolid":
            return LiaFilePowerpointSolid;
        case "lia:LiaFilePowerpoint":
            return LiaFilePowerpoint;
        case "lia:LiaFilePrescriptionSolid":
            return LiaFilePrescriptionSolid;
        case "lia:LiaFileSignatureSolid":
            return LiaFileSignatureSolid;
        case "lia:LiaFileSolid":
            return LiaFileSolid;
        case "lia:LiaFileUploadSolid":
            return LiaFileUploadSolid;
        case "lia:LiaFileVideoSolid":
            return LiaFileVideoSolid;
        case "lia:LiaFileVideo":
            return LiaFileVideo;
        case "lia:LiaFileWordSolid":
            return LiaFileWordSolid;
        case "lia:LiaFileWord":
            return LiaFileWord;
        case "lia:LiaFile":
            return LiaFile;
        case "lia:LiaFillDripSolid":
            return LiaFillDripSolid;
        case "lia:LiaFillSolid":
            return LiaFillSolid;
        case "lia:LiaFilmSolid":
            return LiaFilmSolid;
        case "lia:LiaFilterSolid":
            return LiaFilterSolid;
        case "lia:LiaFingerprintSolid":
            return LiaFingerprintSolid;
        case "lia:LiaFireAltSolid":
            return LiaFireAltSolid;
        case "lia:LiaFireExtinguisherSolid":
            return LiaFireExtinguisherSolid;
        case "lia:LiaFireSolid":
            return LiaFireSolid;
        case "lia:LiaFirefox":
            return LiaFirefox;
        case "lia:LiaFirstAidSolid":
            return LiaFirstAidSolid;
        case "lia:LiaFirstOrderAlt":
            return LiaFirstOrderAlt;
        case "lia:LiaFirstOrder":
            return LiaFirstOrder;
        case "lia:LiaFirstdraft":
            return LiaFirstdraft;
        case "lia:LiaFishSolid":
            return LiaFishSolid;
        case "lia:LiaFistRaisedSolid":
            return LiaFistRaisedSolid;
        case "lia:LiaFlagCheckeredSolid":
            return LiaFlagCheckeredSolid;
        case "lia:LiaFlagSolid":
            return LiaFlagSolid;
        case "lia:LiaFlagUsaSolid":
            return LiaFlagUsaSolid;
        case "lia:LiaFlag":
            return LiaFlag;
        case "lia:LiaFlaskSolid":
            return LiaFlaskSolid;
        case "lia:LiaFlickr":
            return LiaFlickr;
        case "lia:LiaFlipboard":
            return LiaFlipboard;
        case "lia:LiaFlushedSolid":
            return LiaFlushedSolid;
        case "lia:LiaFlushed":
            return LiaFlushed;
        case "lia:LiaFly":
            return LiaFly;
        case "lia:LiaFolderMinusSolid":
            return LiaFolderMinusSolid;
        case "lia:LiaFolderOpenSolid":
            return LiaFolderOpenSolid;
        case "lia:LiaFolderOpen":
            return LiaFolderOpen;
        case "lia:LiaFolderPlusSolid":
            return LiaFolderPlusSolid;
        case "lia:LiaFolderSolid":
            return LiaFolderSolid;
        case "lia:LiaFolder":
            return LiaFolder;
        case "lia:LiaFontAwesomeAlt":
            return LiaFontAwesomeAlt;
        case "lia:LiaFontAwesomeFlag":
            return LiaFontAwesomeFlag;
        case "lia:LiaFontAwesome":
            return LiaFontAwesome;
        case "lia:LiaFontSolid":
            return LiaFontSolid;
        case "lia:LiaFonticonsFi":
            return LiaFonticonsFi;
        case "lia:LiaFonticons":
            return LiaFonticons;
        case "lia:LiaFootballBallSolid":
            return LiaFootballBallSolid;
        case "lia:LiaFortAwesomeAlt":
            return LiaFortAwesomeAlt;
        case "lia:LiaFortAwesome":
            return LiaFortAwesome;
        case "lia:LiaForumbee":
            return LiaForumbee;
        case "lia:LiaForwardSolid":
            return LiaForwardSolid;
        case "lia:LiaFoursquare":
            return LiaFoursquare;
        case "lia:LiaFreeCodeCamp":
            return LiaFreeCodeCamp;
        case "lia:LiaFreebsd":
            return LiaFreebsd;
        case "lia:LiaFrogSolid":
            return LiaFrogSolid;
        case "lia:LiaFrownOpenSolid":
            return LiaFrownOpenSolid;
        case "lia:LiaFrownOpen":
            return LiaFrownOpen;
        case "lia:LiaFrownSolid":
            return LiaFrownSolid;
        case "lia:LiaFrown":
            return LiaFrown;
        case "lia:LiaFulcrum":
            return LiaFulcrum;
        case "lia:LiaFunnelDollarSolid":
            return LiaFunnelDollarSolid;
        case "lia:LiaFutbolSolid":
            return LiaFutbolSolid;
        case "lia:LiaFutbol":
            return LiaFutbol;
        case "lia:LiaGalacticRepublic":
            return LiaGalacticRepublic;
        case "lia:LiaGalacticSenate":
            return LiaGalacticSenate;
        case "lia:LiaGamepadSolid":
            return LiaGamepadSolid;
        case "lia:LiaGasPumpSolid":
            return LiaGasPumpSolid;
        case "lia:LiaGavelSolid":
            return LiaGavelSolid;
        case "lia:LiaGemSolid":
            return LiaGemSolid;
        case "lia:LiaGem":
            return LiaGem;
        case "lia:LiaGenderlessSolid":
            return LiaGenderlessSolid;
        case "lia:LiaGetPocket":
            return LiaGetPocket;
        case "lia:LiaGgCircle":
            return LiaGgCircle;
        case "lia:LiaGg":
            return LiaGg;
        case "lia:LiaGhostSolid":
            return LiaGhostSolid;
        case "lia:LiaGiftSolid":
            return LiaGiftSolid;
        case "lia:LiaGiftsSolid":
            return LiaGiftsSolid;
        case "lia:LiaGitAlt":
            return LiaGitAlt;
        case "lia:LiaGitSquare":
            return LiaGitSquare;
        case "lia:LiaGit":
            return LiaGit;
        case "lia:LiaGithubAlt":
            return LiaGithubAlt;
        case "lia:LiaGithubSquare":
            return LiaGithubSquare;
        case "lia:LiaGithub":
            return LiaGithub;
        case "lia:LiaGitkraken":
            return LiaGitkraken;
        case "lia:LiaGitlab":
            return LiaGitlab;
        case "lia:LiaGitter":
            return LiaGitter;
        case "lia:LiaGlassCheersSolid":
            return LiaGlassCheersSolid;
        case "lia:LiaGlassMartiniAltSolid":
            return LiaGlassMartiniAltSolid;
        case "lia:LiaGlassMartiniSolid":
            return LiaGlassMartiniSolid;
        case "lia:LiaGlassWhiskeySolid":
            return LiaGlassWhiskeySolid;
        case "lia:LiaGlassesSolid":
            return LiaGlassesSolid;
        case "lia:LiaGlideG":
            return LiaGlideG;
        case "lia:LiaGlide":
            return LiaGlide;
        case "lia:LiaGlobeAfricaSolid":
            return LiaGlobeAfricaSolid;
        case "lia:LiaGlobeAmericasSolid":
            return LiaGlobeAmericasSolid;
        case "lia:LiaGlobeAsiaSolid":
            return LiaGlobeAsiaSolid;
        case "lia:LiaGlobeEuropeSolid":
            return LiaGlobeEuropeSolid;
        case "lia:LiaGlobeSolid":
            return LiaGlobeSolid;
        case "lia:LiaGofore":
            return LiaGofore;
        case "lia:LiaGolfBallSolid":
            return LiaGolfBallSolid;
        case "lia:LiaGoodreadsG":
            return LiaGoodreadsG;
        case "lia:LiaGoodreads":
            return LiaGoodreads;
        case "lia:LiaGoogleDrive":
            return LiaGoogleDrive;
        case "lia:LiaGooglePlay":
            return LiaGooglePlay;
        case "lia:LiaGooglePlusG":
            return LiaGooglePlusG;
        case "lia:LiaGooglePlusSquare":
            return LiaGooglePlusSquare;
        case "lia:LiaGooglePlus":
            return LiaGooglePlus;
        case "lia:LiaGoogleWallet":
            return LiaGoogleWallet;
        case "lia:LiaGoogle":
            return LiaGoogle;
        case "lia:LiaGopuramSolid":
            return LiaGopuramSolid;
        case "lia:LiaGraduationCapSolid":
            return LiaGraduationCapSolid;
        case "lia:LiaGratipay":
            return LiaGratipay;
        case "lia:LiaGrav":
            return LiaGrav;
        case "lia:LiaGreaterThanEqualSolid":
            return LiaGreaterThanEqualSolid;
        case "lia:LiaGreaterThanSolid":
            return LiaGreaterThanSolid;
        case "lia:LiaGrimaceSolid":
            return LiaGrimaceSolid;
        case "lia:LiaGrimace":
            return LiaGrimace;
        case "lia:LiaGrinAltSolid":
            return LiaGrinAltSolid;
        case "lia:LiaGrinAlt":
            return LiaGrinAlt;
        case "lia:LiaGrinBeamSolid":
            return LiaGrinBeamSolid;
        case "lia:LiaGrinBeamSweatSolid":
            return LiaGrinBeamSweatSolid;
        case "lia:LiaGrinBeamSweat":
            return LiaGrinBeamSweat;
        case "lia:LiaGrinBeam":
            return LiaGrinBeam;
        case "lia:LiaGrinHeartsSolid":
            return LiaGrinHeartsSolid;
        case "lia:LiaGrinHearts":
            return LiaGrinHearts;
        case "lia:LiaGrinSolid":
            return LiaGrinSolid;
        case "lia:LiaGrinSquintSolid":
            return LiaGrinSquintSolid;
        case "lia:LiaGrinSquintTearsSolid":
            return LiaGrinSquintTearsSolid;
        case "lia:LiaGrinSquintTears":
            return LiaGrinSquintTears;
        case "lia:LiaGrinSquint":
            return LiaGrinSquint;
        case "lia:LiaGrinStarsSolid":
            return LiaGrinStarsSolid;
        case "lia:LiaGrinStars":
            return LiaGrinStars;
        case "lia:LiaGrinTearsSolid":
            return LiaGrinTearsSolid;
        case "lia:LiaGrinTears":
            return LiaGrinTears;
        case "lia:LiaGrinTongueSolid":
            return LiaGrinTongueSolid;
        case "lia:LiaGrinTongueSquintSolid":
            return LiaGrinTongueSquintSolid;
        case "lia:LiaGrinTongueSquint":
            return LiaGrinTongueSquint;
        case "lia:LiaGrinTongueWinkSolid":
            return LiaGrinTongueWinkSolid;
        case "lia:LiaGrinTongueWink":
            return LiaGrinTongueWink;
        case "lia:LiaGrinTongue":
            return LiaGrinTongue;
        case "lia:LiaGrinWinkSolid":
            return LiaGrinWinkSolid;
        case "lia:LiaGrinWink":
            return LiaGrinWink;
        case "lia:LiaGrin":
            return LiaGrin;
        case "lia:LiaGripHorizontalSolid":
            return LiaGripHorizontalSolid;
        case "lia:LiaGripLinesSolid":
            return LiaGripLinesSolid;
        case "lia:LiaGripLinesVerticalSolid":
            return LiaGripLinesVerticalSolid;
        case "lia:LiaGripVerticalSolid":
            return LiaGripVerticalSolid;
        case "lia:LiaGripfire":
            return LiaGripfire;
        case "lia:LiaGrunt":
            return LiaGrunt;
        case "lia:LiaGuitarSolid":
            return LiaGuitarSolid;
        case "lia:LiaGulp":
            return LiaGulp;
        case "lia:LiaHSquareSolid":
            return LiaHSquareSolid;
        case "lia:LiaHackerNewsSquare":
            return LiaHackerNewsSquare;
        case "lia:LiaHackerNews":
            return LiaHackerNews;
        case "lia:LiaHackerrank":
            return LiaHackerrank;
        case "lia:LiaHamburgerSolid":
            return LiaHamburgerSolid;
        case "lia:LiaHammerSolid":
            return LiaHammerSolid;
        case "lia:LiaHamsaSolid":
            return LiaHamsaSolid;
        case "lia:LiaHandHoldingHeartSolid":
            return LiaHandHoldingHeartSolid;
        case "lia:LiaHandHoldingSolid":
            return LiaHandHoldingSolid;
        case "lia:LiaHandHoldingUsdSolid":
            return LiaHandHoldingUsdSolid;
        case "lia:LiaHandLizardSolid":
            return LiaHandLizardSolid;
        case "lia:LiaHandLizard":
            return LiaHandLizard;
        case "lia:LiaHandMiddleFingerSolid":
            return LiaHandMiddleFingerSolid;
        case "lia:LiaHandPaperSolid":
            return LiaHandPaperSolid;
        case "lia:LiaHandPaper":
            return LiaHandPaper;
        case "lia:LiaHandPeaceSolid":
            return LiaHandPeaceSolid;
        case "lia:LiaHandPeace":
            return LiaHandPeace;
        case "lia:LiaHandPointDownSolid":
            return LiaHandPointDownSolid;
        case "lia:LiaHandPointDown":
            return LiaHandPointDown;
        case "lia:LiaHandPointLeftSolid":
            return LiaHandPointLeftSolid;
        case "lia:LiaHandPointLeft":
            return LiaHandPointLeft;
        case "lia:LiaHandPointRightSolid":
            return LiaHandPointRightSolid;
        case "lia:LiaHandPointRight":
            return LiaHandPointRight;
        case "lia:LiaHandPointUpSolid":
            return LiaHandPointUpSolid;
        case "lia:LiaHandPointUp":
            return LiaHandPointUp;
        case "lia:LiaHandPointerSolid":
            return LiaHandPointerSolid;
        case "lia:LiaHandPointer":
            return LiaHandPointer;
        case "lia:LiaHandRockSolid":
            return LiaHandRockSolid;
        case "lia:LiaHandRock":
            return LiaHandRock;
        case "lia:LiaHandScissorsSolid":
            return LiaHandScissorsSolid;
        case "lia:LiaHandScissors":
            return LiaHandScissors;
        case "lia:LiaHandSpockSolid":
            return LiaHandSpockSolid;
        case "lia:LiaHandSpock":
            return LiaHandSpock;
        case "lia:LiaHandsHelpingSolid":
            return LiaHandsHelpingSolid;
        case "lia:LiaHandsSolid":
            return LiaHandsSolid;
        case "lia:LiaHandshakeSolid":
            return LiaHandshakeSolid;
        case "lia:LiaHandshake":
            return LiaHandshake;
        case "lia:LiaHanukiahSolid":
            return LiaHanukiahSolid;
        case "lia:LiaHardHatSolid":
            return LiaHardHatSolid;
        case "lia:LiaHashtagSolid":
            return LiaHashtagSolid;
        case "lia:LiaHatCowboySideSolid":
            return LiaHatCowboySideSolid;
        case "lia:LiaHatCowboySolid":
            return LiaHatCowboySolid;
        case "lia:LiaHatWizardSolid":
            return LiaHatWizardSolid;
        case "lia:LiaHaykalSolid":
            return LiaHaykalSolid;
        case "lia:LiaHddSolid":
            return LiaHddSolid;
        case "lia:LiaHdd":
            return LiaHdd;
        case "lia:LiaHeadingSolid":
            return LiaHeadingSolid;
        case "lia:LiaHeadphonesAltSolid":
            return LiaHeadphonesAltSolid;
        case "lia:LiaHeadphonesSolid":
            return LiaHeadphonesSolid;
        case "lia:LiaHeadsetSolid":
            return LiaHeadsetSolid;
        case "lia:LiaHeartBrokenSolid":
            return LiaHeartBrokenSolid;
        case "lia:LiaHeartSolid":
            return LiaHeartSolid;
        case "lia:LiaHeart":
            return LiaHeart;
        case "lia:LiaHeartbeatSolid":
            return LiaHeartbeatSolid;
        case "lia:LiaHelicopterSolid":
            return LiaHelicopterSolid;
        case "lia:LiaHighlighterSolid":
            return LiaHighlighterSolid;
        case "lia:LiaHikingSolid":
            return LiaHikingSolid;
        case "lia:LiaHippoSolid":
            return LiaHippoSolid;
        case "lia:LiaHips":
            return LiaHips;
        case "lia:LiaHireAHelper":
            return LiaHireAHelper;
        case "lia:LiaHistorySolid":
            return LiaHistorySolid;
        case "lia:LiaHockeyPuckSolid":
            return LiaHockeyPuckSolid;
        case "lia:LiaHollyBerrySolid":
            return LiaHollyBerrySolid;
        case "lia:LiaHomeSolid":
            return LiaHomeSolid;
        case "lia:LiaHooli":
            return LiaHooli;
        case "lia:LiaHornbill":
            return LiaHornbill;
        case "lia:LiaHorseHeadSolid":
            return LiaHorseHeadSolid;
        case "lia:LiaHorseSolid":
            return LiaHorseSolid;
        case "lia:LiaHospitalAltSolid":
            return LiaHospitalAltSolid;
        case "lia:LiaHospitalSolid":
            return LiaHospitalSolid;
        case "lia:LiaHospitalSymbolSolid":
            return LiaHospitalSymbolSolid;
        case "lia:LiaHospital":
            return LiaHospital;
        case "lia:LiaHotTubSolid":
            return LiaHotTubSolid;
        case "lia:LiaHotdogSolid":
            return LiaHotdogSolid;
        case "lia:LiaHotelSolid":
            return LiaHotelSolid;
        case "lia:LiaHotjar":
            return LiaHotjar;
        case "lia:LiaHourglassEndSolid":
            return LiaHourglassEndSolid;
        case "lia:LiaHourglassHalfSolid":
            return LiaHourglassHalfSolid;
        case "lia:LiaHourglassSolid":
            return LiaHourglassSolid;
        case "lia:LiaHourglassStartSolid":
            return LiaHourglassStartSolid;
        case "lia:LiaHourglass":
            return LiaHourglass;
        case "lia:LiaHouseDamageSolid":
            return LiaHouseDamageSolid;
        case "lia:LiaHouzz":
            return LiaHouzz;
        case "lia:LiaHryvniaSolid":
            return LiaHryvniaSolid;
        case "lia:LiaHtml5":
            return LiaHtml5;
        case "lia:LiaHubspot":
            return LiaHubspot;
        case "lia:LiaICursorSolid":
            return LiaICursorSolid;
        case "lia:LiaIceCreamSolid":
            return LiaIceCreamSolid;
        case "lia:LiaIciclesSolid":
            return LiaIciclesSolid;
        case "lia:LiaIconsSolid":
            return LiaIconsSolid;
        case "lia:LiaIdBadgeSolid":
            return LiaIdBadgeSolid;
        case "lia:LiaIdBadge":
            return LiaIdBadge;
        case "lia:LiaIdCardAltSolid":
            return LiaIdCardAltSolid;
        case "lia:LiaIdCardSolid":
            return LiaIdCardSolid;
        case "lia:LiaIdCard":
            return LiaIdCard;
        case "lia:LiaIglooSolid":
            return LiaIglooSolid;
        case "lia:LiaImageSolid":
            return LiaImageSolid;
        case "lia:LiaImage":
            return LiaImage;
        case "lia:LiaImagesSolid":
            return LiaImagesSolid;
        case "lia:LiaImages":
            return LiaImages;
        case "lia:LiaImdb":
            return LiaImdb;
        case "lia:LiaInboxSolid":
            return LiaInboxSolid;
        case "lia:LiaIndentSolid":
            return LiaIndentSolid;
        case "lia:LiaIndustrySolid":
            return LiaIndustrySolid;
        case "lia:LiaInfinitySolid":
            return LiaInfinitySolid;
        case "lia:LiaInfoCircleSolid":
            return LiaInfoCircleSolid;
        case "lia:LiaInfoSolid":
            return LiaInfoSolid;
        case "lia:LiaInstagram":
            return LiaInstagram;
        case "lia:LiaIntercom":
            return LiaIntercom;
        case "lia:LiaInternetExplorer":
            return LiaInternetExplorer;
        case "lia:LiaInvision":
            return LiaInvision;
        case "lia:LiaIoxhost":
            return LiaIoxhost;
        case "lia:LiaItalicSolid":
            return LiaItalicSolid;
        case "lia:LiaItchIo":
            return LiaItchIo;
        case "lia:LiaItunesNote":
            return LiaItunesNote;
        case "lia:LiaItunes":
            return LiaItunes;
        case "lia:LiaJava":
            return LiaJava;
        case "lia:LiaJediOrder":
            return LiaJediOrder;
        case "lia:LiaJediSolid":
            return LiaJediSolid;
        case "lia:LiaJenkins":
            return LiaJenkins;
        case "lia:LiaJira":
            return LiaJira;
        case "lia:LiaJoget":
            return LiaJoget;
        case "lia:LiaJointSolid":
            return LiaJointSolid;
        case "lia:LiaJoomla":
            return LiaJoomla;
        case "lia:LiaJournalWhillsSolid":
            return LiaJournalWhillsSolid;
        case "lia:LiaJsSquare":
            return LiaJsSquare;
        case "lia:LiaJs":
            return LiaJs;
        case "lia:LiaJsfiddle":
            return LiaJsfiddle;
        case "lia:LiaKaabaSolid":
            return LiaKaabaSolid;
        case "lia:LiaKaggle":
            return LiaKaggle;
        case "lia:LiaKeySolid":
            return LiaKeySolid;
        case "lia:LiaKeybase":
            return LiaKeybase;
        case "lia:LiaKeyboardSolid":
            return LiaKeyboardSolid;
        case "lia:LiaKeyboard":
            return LiaKeyboard;
        case "lia:LiaKeycdn":
            return LiaKeycdn;
        case "lia:LiaKhandaSolid":
            return LiaKhandaSolid;
        case "lia:LiaKickstarterK":
            return LiaKickstarterK;
        case "lia:LiaKickstarter":
            return LiaKickstarter;
        case "lia:LiaKissBeamSolid":
            return LiaKissBeamSolid;
        case "lia:LiaKissBeam":
            return LiaKissBeam;
        case "lia:LiaKissSolid":
            return LiaKissSolid;
        case "lia:LiaKissWinkHeartSolid":
            return LiaKissWinkHeartSolid;
        case "lia:LiaKissWinkHeart":
            return LiaKissWinkHeart;
        case "lia:LiaKiss":
            return LiaKiss;
        case "lia:LiaKiwiBirdSolid":
            return LiaKiwiBirdSolid;
        case "lia:LiaKorvue":
            return LiaKorvue;
        case "lia:LiaLandmarkSolid":
            return LiaLandmarkSolid;
        case "lia:LiaLanguageSolid":
            return LiaLanguageSolid;
        case "lia:LiaLaptopCodeSolid":
            return LiaLaptopCodeSolid;
        case "lia:LiaLaptopMedicalSolid":
            return LiaLaptopMedicalSolid;
        case "lia:LiaLaptopSolid":
            return LiaLaptopSolid;
        case "lia:LiaLaravel":
            return LiaLaravel;
        case "lia:LiaLastfmSquare":
            return LiaLastfmSquare;
        case "lia:LiaLastfm":
            return LiaLastfm;
        case "lia:LiaLaughBeamSolid":
            return LiaLaughBeamSolid;
        case "lia:LiaLaughBeam":
            return LiaLaughBeam;
        case "lia:LiaLaughSolid":
            return LiaLaughSolid;
        case "lia:LiaLaughSquintSolid":
            return LiaLaughSquintSolid;
        case "lia:LiaLaughSquint":
            return LiaLaughSquint;
        case "lia:LiaLaughWinkSolid":
            return LiaLaughWinkSolid;
        case "lia:LiaLaughWink":
            return LiaLaughWink;
        case "lia:LiaLaugh":
            return LiaLaugh;
        case "lia:LiaLayerGroupSolid":
            return LiaLayerGroupSolid;
        case "lia:LiaLeafSolid":
            return LiaLeafSolid;
        case "lia:LiaLeanpub":
            return LiaLeanpub;
        case "lia:LiaLemonSolid":
            return LiaLemonSolid;
        case "lia:LiaLemon":
            return LiaLemon;
        case "lia:LiaLessThanEqualSolid":
            return LiaLessThanEqualSolid;
        case "lia:LiaLessThanSolid":
            return LiaLessThanSolid;
        case "lia:LiaLess":
            return LiaLess;
        case "lia:LiaLevelDownAltSolid":
            return LiaLevelDownAltSolid;
        case "lia:LiaLevelUpAltSolid":
            return LiaLevelUpAltSolid;
        case "lia:LiaLifeRingSolid":
            return LiaLifeRingSolid;
        case "lia:LiaLifeRing":
            return LiaLifeRing;
        case "lia:LiaLightbulbSolid":
            return LiaLightbulbSolid;
        case "lia:LiaLightbulb":
            return LiaLightbulb;
        case "lia:LiaLine":
            return LiaLine;
        case "lia:LiaLinkSolid":
            return LiaLinkSolid;
        case "lia:LiaLinkedinIn":
            return LiaLinkedinIn;
        case "lia:LiaLinkedin":
            return LiaLinkedin;
        case "lia:LiaLinode":
            return LiaLinode;
        case "lia:LiaLinux":
            return LiaLinux;
        case "lia:LiaLiraSignSolid":
            return LiaLiraSignSolid;
        case "lia:LiaListAltSolid":
            return LiaListAltSolid;
        case "lia:LiaListAlt":
            return LiaListAlt;
        case "lia:LiaListOlSolid":
            return LiaListOlSolid;
        case "lia:LiaListSolid":
            return LiaListSolid;
        case "lia:LiaListUlSolid":
            return LiaListUlSolid;
        case "lia:LiaLocationArrowSolid":
            return LiaLocationArrowSolid;
        case "lia:LiaLockOpenSolid":
            return LiaLockOpenSolid;
        case "lia:LiaLockSolid":
            return LiaLockSolid;
        case "lia:LiaLongArrowAltDownSolid":
            return LiaLongArrowAltDownSolid;
        case "lia:LiaLongArrowAltLeftSolid":
            return LiaLongArrowAltLeftSolid;
        case "lia:LiaLongArrowAltRightSolid":
            return LiaLongArrowAltRightSolid;
        case "lia:LiaLongArrowAltUpSolid":
            return LiaLongArrowAltUpSolid;
        case "lia:LiaLowVisionSolid":
            return LiaLowVisionSolid;
        case "lia:LiaLuggageCartSolid":
            return LiaLuggageCartSolid;
        case "lia:LiaLyft":
            return LiaLyft;
        case "lia:LiaMagento":
            return LiaMagento;
        case "lia:LiaMagicSolid":
            return LiaMagicSolid;
        case "lia:LiaMagnetSolid":
            return LiaMagnetSolid;
        case "lia:LiaMailBulkSolid":
            return LiaMailBulkSolid;
        case "lia:LiaMailchimp":
            return LiaMailchimp;
        case "lia:LiaMaleSolid":
            return LiaMaleSolid;
        case "lia:LiaMandalorian":
            return LiaMandalorian;
        case "lia:LiaMapMarkedAltSolid":
            return LiaMapMarkedAltSolid;
        case "lia:LiaMapMarkedSolid":
            return LiaMapMarkedSolid;
        case "lia:LiaMapMarkerAltSolid":
            return LiaMapMarkerAltSolid;
        case "lia:LiaMapMarkerSolid":
            return LiaMapMarkerSolid;
        case "lia:LiaMapPinSolid":
            return LiaMapPinSolid;
        case "lia:LiaMapSignsSolid":
            return LiaMapSignsSolid;
        case "lia:LiaMapSolid":
            return LiaMapSolid;
        case "lia:LiaMap":
            return LiaMap;
        case "lia:LiaMarkdown":
            return LiaMarkdown;
        case "lia:LiaMarkerSolid":
            return LiaMarkerSolid;
        case "lia:LiaMarsDoubleSolid":
            return LiaMarsDoubleSolid;
        case "lia:LiaMarsSolid":
            return LiaMarsSolid;
        case "lia:LiaMarsStrokeHSolid":
            return LiaMarsStrokeHSolid;
        case "lia:LiaMarsStrokeSolid":
            return LiaMarsStrokeSolid;
        case "lia:LiaMarsStrokeVSolid":
            return LiaMarsStrokeVSolid;
        case "lia:LiaMaskSolid":
            return LiaMaskSolid;
        case "lia:LiaMastodon":
            return LiaMastodon;
        case "lia:LiaMaxcdn":
            return LiaMaxcdn;
        case "lia:LiaMdb":
            return LiaMdb;
        case "lia:LiaMedalSolid":
            return LiaMedalSolid;
        case "lia:LiaMedapps":
            return LiaMedapps;
        case "lia:LiaMediumM":
            return LiaMediumM;
        case "lia:LiaMedium":
            return LiaMedium;
        case "lia:LiaMedkitSolid":
            return LiaMedkitSolid;
        case "lia:LiaMedrt":
            return LiaMedrt;
        case "lia:LiaMeetup":
            return LiaMeetup;
        case "lia:LiaMegaport":
            return LiaMegaport;
        case "lia:LiaMehBlankSolid":
            return LiaMehBlankSolid;
        case "lia:LiaMehBlank":
            return LiaMehBlank;
        case "lia:LiaMehRollingEyesSolid":
            return LiaMehRollingEyesSolid;
        case "lia:LiaMehRollingEyes":
            return LiaMehRollingEyes;
        case "lia:LiaMehSolid":
            return LiaMehSolid;
        case "lia:LiaMeh":
            return LiaMeh;
        case "lia:LiaMemorySolid":
            return LiaMemorySolid;
        case "lia:LiaMendeley":
            return LiaMendeley;
        case "lia:LiaMenorahSolid":
            return LiaMenorahSolid;
        case "lia:LiaMercurySolid":
            return LiaMercurySolid;
        case "lia:LiaMeteorSolid":
            return LiaMeteorSolid;
        case "lia:LiaMicrochipSolid":
            return LiaMicrochipSolid;
        case "lia:LiaMicrophoneAltSlashSolid":
            return LiaMicrophoneAltSlashSolid;
        case "lia:LiaMicrophoneAltSolid":
            return LiaMicrophoneAltSolid;
        case "lia:LiaMicrophoneSlashSolid":
            return LiaMicrophoneSlashSolid;
        case "lia:LiaMicrophoneSolid":
            return LiaMicrophoneSolid;
        case "lia:LiaMicroscopeSolid":
            return LiaMicroscopeSolid;
        case "lia:LiaMicrosoft":
            return LiaMicrosoft;
        case "lia:LiaMinusCircleSolid":
            return LiaMinusCircleSolid;
        case "lia:LiaMinusSolid":
            return LiaMinusSolid;
        case "lia:LiaMinusSquareSolid":
            return LiaMinusSquareSolid;
        case "lia:LiaMinusSquare":
            return LiaMinusSquare;
        case "lia:LiaMittenSolid":
            return LiaMittenSolid;
        case "lia:LiaMix":
            return LiaMix;
        case "lia:LiaMixcloud":
            return LiaMixcloud;
        case "lia:LiaMizuni":
            return LiaMizuni;
        case "lia:LiaMobileAltSolid":
            return LiaMobileAltSolid;
        case "lia:LiaMobileSolid":
            return LiaMobileSolid;
        case "lia:LiaModx":
            return LiaModx;
        case "lia:LiaMonero":
            return LiaMonero;
        case "lia:LiaMoneyBillAltSolid":
            return LiaMoneyBillAltSolid;
        case "lia:LiaMoneyBillAlt":
            return LiaMoneyBillAlt;
        case "lia:LiaMoneyBillSolid":
            return LiaMoneyBillSolid;
        case "lia:LiaMoneyBillWaveAltSolid":
            return LiaMoneyBillWaveAltSolid;
        case "lia:LiaMoneyBillWaveSolid":
            return LiaMoneyBillWaveSolid;
        case "lia:LiaMoneyCheckAltSolid":
            return LiaMoneyCheckAltSolid;
        case "lia:LiaMoneyCheckSolid":
            return LiaMoneyCheckSolid;
        case "lia:LiaMonumentSolid":
            return LiaMonumentSolid;
        case "lia:LiaMoonSolid":
            return LiaMoonSolid;
        case "lia:LiaMoon":
            return LiaMoon;
        case "lia:LiaMortarPestleSolid":
            return LiaMortarPestleSolid;
        case "lia:LiaMosqueSolid":
            return LiaMosqueSolid;
        case "lia:LiaMotorcycleSolid":
            return LiaMotorcycleSolid;
        case "lia:LiaMountainSolid":
            return LiaMountainSolid;
        case "lia:LiaMousePointerSolid":
            return LiaMousePointerSolid;
        case "lia:LiaMouseSolid":
            return LiaMouseSolid;
        case "lia:LiaMugHotSolid":
            return LiaMugHotSolid;
        case "lia:LiaMusicSolid":
            return LiaMusicSolid;
        case "lia:LiaNapster":
            return LiaNapster;
        case "lia:LiaNeos":
            return LiaNeos;
        case "lia:LiaNetworkWiredSolid":
            return LiaNetworkWiredSolid;
        case "lia:LiaNeuterSolid":
            return LiaNeuterSolid;
        case "lia:LiaNewspaperSolid":
            return LiaNewspaperSolid;
        case "lia:LiaNewspaper":
            return LiaNewspaper;
        case "lia:LiaNimblr":
            return LiaNimblr;
        case "lia:LiaNodeJs":
            return LiaNodeJs;
        case "lia:LiaNode":
            return LiaNode;
        case "lia:LiaNotEqualSolid":
            return LiaNotEqualSolid;
        case "lia:LiaNotesMedicalSolid":
            return LiaNotesMedicalSolid;
        case "lia:LiaNpm":
            return LiaNpm;
        case "lia:LiaNs8":
            return LiaNs8;
        case "lia:LiaNutritionix":
            return LiaNutritionix;
        case "lia:LiaObjectGroupSolid":
            return LiaObjectGroupSolid;
        case "lia:LiaObjectGroup":
            return LiaObjectGroup;
        case "lia:LiaObjectUngroupSolid":
            return LiaObjectUngroupSolid;
        case "lia:LiaObjectUngroup":
            return LiaObjectUngroup;
        case "lia:LiaOdnoklassnikiSquare":
            return LiaOdnoklassnikiSquare;
        case "lia:LiaOdnoklassniki":
            return LiaOdnoklassniki;
        case "lia:LiaOilCanSolid":
            return LiaOilCanSolid;
        case "lia:LiaOldRepublic":
            return LiaOldRepublic;
        case "lia:LiaOmSolid":
            return LiaOmSolid;
        case "lia:LiaOpencart":
            return LiaOpencart;
        case "lia:LiaOpenid":
            return LiaOpenid;
        case "lia:LiaOpera":
            return LiaOpera;
        case "lia:LiaOptinMonster":
            return LiaOptinMonster;
        case "lia:LiaOrcid":
            return LiaOrcid;
        case "lia:LiaOsi":
            return LiaOsi;
        case "lia:LiaOtterSolid":
            return LiaOtterSolid;
        case "lia:LiaOutdentSolid":
            return LiaOutdentSolid;
        case "lia:LiaPage4":
            return LiaPage4;
        case "lia:LiaPagelines":
            return LiaPagelines;
        case "lia:LiaPagerSolid":
            return LiaPagerSolid;
        case "lia:LiaPaintBrushSolid":
            return LiaPaintBrushSolid;
        case "lia:LiaPaintRollerSolid":
            return LiaPaintRollerSolid;
        case "lia:LiaPaletteSolid":
            return LiaPaletteSolid;
        case "lia:LiaPalfed":
            return LiaPalfed;
        case "lia:LiaPalletSolid":
            return LiaPalletSolid;
        case "lia:LiaPaperPlaneSolid":
            return LiaPaperPlaneSolid;
        case "lia:LiaPaperPlane":
            return LiaPaperPlane;
        case "lia:LiaPaperclipSolid":
            return LiaPaperclipSolid;
        case "lia:LiaParachuteBoxSolid":
            return LiaParachuteBoxSolid;
        case "lia:LiaParagraphSolid":
            return LiaParagraphSolid;
        case "lia:LiaParkingSolid":
            return LiaParkingSolid;
        case "lia:LiaPassportSolid":
            return LiaPassportSolid;
        case "lia:LiaPastafarianismSolid":
            return LiaPastafarianismSolid;
        case "lia:LiaPasteSolid":
            return LiaPasteSolid;
        case "lia:LiaPatreon":
            return LiaPatreon;
        case "lia:LiaPauseCircleSolid":
            return LiaPauseCircleSolid;
        case "lia:LiaPauseCircle":
            return LiaPauseCircle;
        case "lia:LiaPauseSolid":
            return LiaPauseSolid;
    }
}
