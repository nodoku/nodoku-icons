import type {IconType} from "react-icons";

import {
    Si1001Tracklists,
    Si1And1,
    Si1Dot1Dot1Dot1,
    Si1Panel,
    Si1Password,
    Si2Fas,
    Si2K,
    Si30Secondsofcode,
    Si365Datascience,
    Si3M,
    Si42,
    Si4Chan,
    Si4D,
    Si500Px,
    Si7Zip,
    Si99Designs,
    Si9Gag,
    SiAbbott,
    SiAbbrobotstudio,
    SiAbbvie,
    SiAboutdotme,
    SiAbstract,
    SiAbusedotch,
    SiAcademia,
    SiAccenture,
    SiAccusoft,
    SiAccuweather,
    SiAcer,
    SiAcm,
    SiActigraph,
    SiActivision,
    SiActivitypub,
    SiActix,
    SiActualbudget,
    SiAcura,
    SiAdafruit,
    SiAdblock,
    SiAdblockplus,
    SiAddydotio,
    SiAdguard,
    SiAdidas,
    SiAdminer,
    SiAdobe,
    SiAdobeacrobatreader,
    SiAdobeaftereffects,
    SiAdobeaudition,
    SiAdobecreativecloud,
    SiAdobedreamweaver,
    SiAdobefonts,
    SiAdobeillustrator,
    SiAdobeindesign,
    SiAdobelightroom,
    SiAdobelightroomclassic,
    SiAdobephotoshop,
    SiAdobepremierepro,
    SiAdobexd,
    SiAdonisjs,
    SiAdp,
    SiAdroll,
    SiAdventofcode,
    SiAdyen,
    SiAegisauthenticator,
    SiAerlingus,
    SiAeroflot,
    SiAeromexico,
    SiAerospike,
    SiAew,
    SiAffine,
    SiAffinity,
    SiAffinitydesigner,
    SiAffinityphoto,
    SiAffinitypublisher,
    SiAframe,
    SiAfterpay,
    SiAftership,
    SiAgora,
    SiAib,
    SiAidungeon,
    SiAiohttp,
    SiAiqfome,
    SiAirasia,
    SiAirbnb,
    SiAirbrake,
    SiAirbus,
    SiAirbyte,
    SiAircall,
    SiAircanada,
    SiAirchina,
    SiAirfrance,
    SiAirindia,
    SiAirplayaudio,
    SiAirplayvideo,
    SiAirserbia,
    SiAirtable,
    SiAirtel,
    SiAirtransat,
    SiAjv,
    SiAkamai,
    SiAkasaair,
    SiAkaunting,
    SiAkiflow,
    SiAlacritty,
    SiAlamy,
    SiAlbertheijn,
    SiAlby,
    SiAlchemy,
    SiAldinord,
    SiAldisud,
    SiAlfaromeo,
    SiAlfred,
    SiAlgolia,
    SiAlgorand,
    SiAlibabacloud,
    SiAlibabadotcom,
    SiAlienware,
    SiAliexpress,
    SiAlipay,
    SiAllegro,
    SiAlliedmodders,
    SiAllocine,
    SiAlltrails,
    SiAlmalinux,
    SiAlpinedotjs,
    SiAlpinelinux,
    SiAlternativeto,
    SiAlteryx,
    SiAltiumdesigner,
    SiAlwaysdata,
    SiAlx,
    SiAmazon,
    SiAmazonalexa,
    SiAmazonapigateway,
    SiAmazoncloudwatch,
    SiAmazoncognito,
    SiAmazondocumentdb,
    SiAmazondynamodb,
    SiAmazonec2,
    SiAmazonecs,
    SiAmazoneks,
    SiAmazonelasticache,
    SiAmazonfiretv,
    SiAmazongames,
    SiAmazoniam,
    SiAmazonlumberyard,
    SiAmazonluna,
    SiAmazonmusic,
    SiAmazonpay,
    SiAmazonprime,
    SiAmazonrds,
    SiAmazonredshift,
    SiAmazonroute53,
    SiAmazons3,
    SiAmazonsimpleemailservice,
    SiAmazonsqs,
    SiAmazonwebservices,
    SiAmd,
    SiAmeba,
    SiAmericanairlines,
    SiAmericanexpress,
    SiAmg,
    SiAmp,
    SiAmul,
    SiAna,
    SiAnaconda,
    SiAnalogue,
    SiAndela,
    SiAndroid,
    SiAndroidauto,
    SiAndroidstudio,
    SiAngular,
    SiAnilist,
    SiAnimalplanet,
    SiAnkermake,
    SiAnki,
    SiAnsible,
    SiAnswer,
    SiAnsys,
    SiAnta,
    SiAntdesign,
    SiAntena3,
    SiAnthropic,
    SiAnycubic,
    SiAnydesk,
    SiAnytype,
    SiAol,
    SiApache,
    SiApacheairflow,
    SiApacheant,
    SiApachecassandra,
    SiApachecloudstack,
    SiApachecordova,
    SiApachecouchdb,
    SiApachedolphinscheduler,
    SiApachedruid,
    SiApacheecharts,
    SiApacheflink,
    SiApachefreemarker,
    SiApachegroovy,
    SiApacheguacamole,
    SiApachehadoop,
    SiApachehbase,
    SiApachehive,
    SiApachejmeter,
    SiApachekafka,
    SiApachekylin,
    SiApachelucene,
    SiApachemaven,
    SiApachenetbeanside,
    SiApachenifi,
    SiApacheopenoffice,
    SiApacheparquet,
    SiApachepulsar,
    SiApacherocketmq,
    SiApachesolr,
    SiApachespark,
    SiApachestorm,
    SiApachesuperset,
    SiApachetomcat,
    SiAparat,
    SiApifox,
    SiApmterminals,
    SiApollographql,
    SiApostrophe,
    SiAppgallery,
    SiAppian,
    SiAppium,
    SiApple,
    SiApplearcade,
    SiApplemusic,
    SiApplenews,
    SiApplepay,
    SiApplepodcasts,
    SiAppletv,
    SiAppsignal,
    SiAppsmith,
    SiAppstore,
    SiAppveyor,
    SiAppwrite,
    SiAqua,
    SiAral,
    SiArangodb,
    SiArc,
    SiArcgis,
    SiArchicad,
    SiArchiveofourown,
    SiArchlinux,
    SiArdour,
    SiArduino,
    SiArgo,
    SiArgos,
    SiAriakit,
    SiArkecosystem,
    SiArlo,
    SiArm,
    SiArmkeil,
    SiArstechnica,
    SiArtifacthub,
    SiArtixlinux,
    SiArtstation,
    SiArxiv,
    SiAsahilinux,
    SiAsana,
    SiAsciidoctor,
    SiAsciinema,
    SiAsda,
    SiAseprite,
    SiAskfm,
    SiAssemblyscript,
    SiAsterisk,
    SiAstonmartin,
    SiAstra,
    SiAstral,
    SiAstro,
    SiAsus,
    SiAtandt,
    SiAtari,
    SiAtlasos,
    SiAtlassian,
    SiAuchan,
    SiAudacity,
    SiAudi,
    SiAudible,
    SiAudiobookshelf,
    SiAudioboom,
    SiAudiomack,
    SiAudiotechnica,
    SiAurelia,
    SiAuth0,
    SiAuthelia,
    SiAuthentik,
    SiAuthy,
    SiAutocad,
    SiAutocannon,
    SiAutodesk,
    SiAutodeskmaya,
    SiAutodeskrevit,
    SiAutohotkey,
    SiAutoit,
    SiAutomattic,
    SiAutoprefixer,
    SiAutozone,
    SiAvajs,
    SiAvast,
    SiAvianca,
    SiAvira,
    SiAwesomelists,
    SiAwesomewm,
    SiAwsamplify,
    SiAwselasticloadbalancing,
    SiAwsfargate,
    SiAwslambda,
    SiAwsorganizations,
    SiAwssecretsmanager,
    SiAwwwards,
    SiAxios,
    SiBabel,
    SiBabelio,
    SiBabylondotjs,
    SiBackblaze,
    SiBackbone,
    SiBackbonedotjs,
    SiBackendless,
    SiBackstage,
    SiBadoo,
    SiBaidu,
    SiBakalari,
    SiBamboo,
    SiBambulab,
    SiBandcamp,
    SiBandlab,
    SiBandrautomation,
    SiBandsintown,
    SiBankofamerica,
    SiBarclays,
    SiBaremetrics,
    SiBarmenia,
    SiBasecamp,
    SiBaserow,
    SiBasicattentiontoken,
    SiBastyon,
    SiBat,
    SiBata,
    SiBattledotnet,
    SiBazel,
    SiBeatport,
    SiBeats,
    SiBeatsbydre,
    SiBeatstars,
    SiBeekeeperstudio,
    SiBehance,
    SiBeijingsubway,
    SiBem,
    SiBentley,
    SiBento,
    SiBentobox,
    SiBentoml,
    SiBereal,
    SiBetfair,
    SiBetterstack,
    SiBevy,
    SiBigbasket,
    SiBigbluebutton,
    SiBigcartel,
    SiBigcommerce,
    SiBilibili,
    SiBillboard,
    SiBim,
    SiBinance,
    SiBiolink,
    SiBiome,
    SiBisecthosting,
    SiBit,
    SiBitbucket,
    SiBitcoin,
    SiBitcoincash,
    SiBitcoinsv,
    SiBitcomet,
    SiBitdefender,
    SiBitly,
    SiBitrise,
    SiBittorrent,
    SiBitwarden,
    SiBitwig,
    SiBlackberry,
    SiBlackmagicdesign,
    SiBlazemeter,
    SiBlazor,
    SiBlender,
    SiBlockbench,
    SiBlockchaindotcom,
    SiBlogger,
    SiBloglovin,
    SiBlueprint,
    SiBluesky,
    SiBluesound,
    SiBluetooth,
    SiBmcsoftware,
    SiBmw,
    SiBnbchain,
    SiBoardgamegeek,
    SiBoat,
    SiBoehringeringelheim,
    SiBoeing,
    SiBombardier,
    SiBookalope,
    SiBookbub,
    SiBookmeter,
    SiBookmyshow,
    SiBookstack,
    SiBoost,
    SiBoosty,
    SiBoots,
    SiBootstrap,
    SiBorgbackup,
    SiBosch,
    SiBose,
    SiBotblecms,
    SiBoulanger,
    SiBower,
    SiBox,
    SiBoxysvg,
    SiBraintree,
    SiBrandfolder,
    SiBrave,
    SiBreaker,
    SiBrenntag,
    SiBrevo,
    SiBrex,
    SiBricks,
    SiBritishairways,
    SiBroadcom,
    SiBruno,
    SiBsd,
    SiBspwm,
    SiBt,
    SiBuddy,
    SiBudibase,
    SiBuefy,
    SiBuffer,
    SiBugatti,
    SiBugcrowd,
    SiBugsnag,
    SiBuhl,
    SiBuildkite,
    SiBuiltbybit,
    SiBukalapak,
    SiBulma,
    SiBun,
    SiBungie,
    SiBunq,
    SiBurgerking,
    SiBurpsuite,
    SiBurton,
    SiBuymeacoffee,
    SiBuysellads,
    SiBuzzfeed,
    SiBvg,
    SiByjus,
    SiBytedance,
    SiC,
    SiCachet,
    SiCaddy,
    SiCadillac,
    SiCafepress,
    SiCaffeine,
    SiCairographics,
    SiCairometro,
    SiCakephp,
    SiCaldotcom,
    SiCalendly,
    SiCalibreweb,
    SiCampaignmonitor,
    SiCamunda,
    SiCanonical,
    SiCanva,
    SiCanvas,
    SiCapacitor,
    SiCaprover,
    SiCardano,
    SiCarlsberggroup,
    SiCarrd,
    SiCarrefour,
    SiCarthrottle,
    SiCarto,
    SiCashapp,
    SiCastbox,
    SiCastorama,
    SiCastro,
    SiCaterpillar,
    SiCbc,
    SiCbs,
    SiCcc,
    SiCcleaner,
    SiCdprojekt,
    SiCe,
    SiCelery,
    SiCelestron,
    SiCentos,
    SiCeph,
    SiCesium,
    SiChai,
    SiChainguard,
    SiChainlink,
    SiChakraui,
    SiChannel4,
    SiCharles,
    SiChartdotjs,
    SiChartmogul,
    SiChase,
    SiChatbot,
    SiChatwoot,
    SiCheckio,
    SiCheckmarx,
    SiCheckmk,
    SiChedraui,
    SiCheerio,
    SiChef,
    SiChemex,
    SiChessdotcom,
    SiChevrolet,
    SiChianetwork,
    SiChinaeasternairlines,
    SiChinasouthernairlines,
    SiChocolatey,
    SiChromatic,
    SiChromecast,
    SiChromewebstore,
    SiChrysler,
    SiChupachups,
    SiCilium,
    SiCinema4D,
    SiCinnamon,
    SiCircle,
    SiCircleci,
    SiCircuitverse,
    SiCirrusci,
    SiCisco,
    SiCitrix,
    SiCitroen,
    SiCivicrm,
    SiCivo,
    SiCkeditor4,
    SiClarifai,
    SiClaris,
    SiClarivate,
    SiClaude,
    SiClerk,
    SiClevercloud,
    SiClickhouse,
    SiClickup,
    SiClion,
    SiCliqz,
    SiClockify,
    SiClojure,
    SiCloud66,
    SiCloudbees,
    SiCloudcannon,
    SiCloudera,
    SiCloudflare,
    SiCloudflarepages,
    SiCloudflareworkers,
    SiCloudfoundry,
    SiCloudinary,
    SiCloudron,
    SiCloudsmith,
    SiCloudways,
    SiClubforce,
    SiClubhouse,
    SiClyp,
    SiCmake,
    SiCncf,
    SiCnet,
    SiCnn,
    SiCocacola,
    SiCockpit,
    SiCockroachlabs,
    SiCocoapods,
    SiCocos,
    SiCoda,
    SiCodacy,
    SiCodeberg,
    SiCodeblocks,
    SiCodecademy,
    SiCodeceptjs,
    SiCodechef,
    SiCodeclimate,
    SiCodecov,
    SiCodecrafters,
    SiCodefactor,
    SiCodeforces,
    SiCodefresh,
    SiCodeigniter,
    SiCodeium,
    SiCodemagic,
    SiCodementor,
    SiCodemirror,
    SiCodenewbie,
    SiCodepen,
    SiCodeproject,
    SiCoder,
    SiCodersrank,
    SiCoderwall,
    SiCodesandbox,
    SiCodeship,
    SiCodesignal,
    SiCodestream,
    SiCodewars,
    SiCodingame,
    SiCodingninjas,
    SiCodio,
    SiCoffeescript,
    SiCoggle,
    SiCognizant,
    SiCohost,
    SiCoil,
    SiCoinbase,
    SiCoinmarketcap,
    SiComicfury,
    SiComma,
    SiCommerzbank,
    SiCommitlint,
    SiCommodore,
    SiCommonworkflowlanguage,
    SiCompilerexplorer,
    SiComposer,
    SiComptia,
    SiComsol,
    SiConan,
    SiConcourse,
    SiCondaforge,
    SiConekta,
    SiConfluence,
    SiConstruct3,
    SiConsul,
    SiContabo,
    SiContactlesspayment,
    SiContainerd,
    SiContao,
    SiContentful,
    SiContentstack,
    SiContinente,
    SiContributorcovenant,
    SiConventionalcommits,
    SiConvertio,
    SiCookiecutter,
    SiCoolermaster,
    SiCoop,
    SiCopaairlines,
    SiCoppel,
    SiCora,
    SiCoreldraw,
    SiCoronaengine,
    SiCoronarenderer,
    SiCorsair,
    SiCouchbase,
    SiCounterstrike,
    SiCountingworkspro,
    SiCoursera,
    SiCoveralls,
    SiCoze,
    SiCpanel,
    SiCplusplus,
    SiCplusplusbuilder,
    SiCraftcms,
    SiCraftsman,
    SiCratedb,
    SiCrayon,
    SiCreality,
    SiCreatereactapp,
    SiCreativecommons,
    SiCreativetechnology,
    SiCredly,
    SiCrehana,
    SiCrewunited,
    SiCriticalrole,
    SiCrowdin,
    SiCrowdsource,
    SiCrunchbase,
    SiCrunchyroll,
    SiCryengine,
    SiCryptpad,
    SiCrystal,
    SiCsdn,
    SiCss3,
    SiCssdesignawards,
    SiCssmodules,
    SiCsswizardry,
    SiCts,
    SiCucumber,
    SiCultura,
    SiCurl,
    SiCurseforge,
    SiCustomink,
    SiCyberdefenders,
    SiCycling74,
    SiCypress,
    SiCytoscapedotjs,
    SiD,
    SiD3Dotjs,
    SiDacia,
    SiDaf,
    SiDailydotdev,
    SiDailymotion,
    SiDaisyui,
    SiDapr,
    SiDarkreader,
    SiDart,
    SiDarty,
    SiDaserste,
    SiDash,
    SiDashlane,
    SiDask,
    SiDassaultsystemes,
    SiDatabricks,
    SiDatacamp,
    SiDatadog,
    SiDatadotai,
    SiDatagrip,
    SiDataiku,
    SiDatastax,
    SiDatefns,
    SiDatev,
    SiDatocms,
    SiDatto,
    SiDavinciresolve,
    SiDazhongdianping,
    SiDazn,
    SiDbeaver,
    SiDblp,
    SiDbt,
    SiDcentertainment,
    SiDebian,
    SiDebridlink,
    SiDecapcms,
    SiDecentraland,
    SiDedge,
    SiDeepcool,
    SiDeepgram,
    SiDeepin,
    SiDeepl,
    SiDeepnote,
    SiDelicious,
    SiDeliveroo,
    SiDell,
    SiDelonghi,
    SiDelphi,
    SiDelta,
    SiDeluge,
    SiDeno,
    SiDenon,
    SiDependabot,
    SiDependencycheck,
    SiDepositphotos,
    SiDerspiegel,
    SiDeutschebahn,
    SiDeutschebank,
    SiDeutschepost,
    SiDeutschewelle,
    SiDevdotto,
    SiDevexpress,
    SiDeviantart,
    SiDevpost,
    SiDevrant,
    SiDgraph,
    SiDhl,
    SiDiagramsdotnet,
    SiDialogflow,
    SiDiaspora,
    SiDictionarydotcom,
    SiDigg,
    SiDigikeyelectronics,
    SiDigitalocean,
    SiDinersclub,
    SiDior,
    SiDirectus,
    SiDiscogs,
    SiDiscord,
    SiDiscourse,
    SiDiscover,
    SiDisqus,
    SiDisroot,
    SiDistrokid,
    SiDjango,
    SiDji,
    SiDlib,
    SiDlna,
    SiDm,
    SiDocker,
    SiDocsdotrs,
    SiDocsify,
    SiDoctrine,
    SiDocusaurus,
    SiDogecoin,
    SiDoi,
    SiDolby,
    SiDoordash,
    SiDota2,
    SiDotenv,
    SiDotnet,
    SiDouban,
    SiDoubanread,
    SiDovecot,
    SiDovetail,
    SiDowndetector,
    SiDoxygen,
    SiDpd,
    SiDragonframe,
    SiDraugiemdotlv,
    SiDreamstime,
    SiDribbble,
    SiDrizzle,
    SiDrone,
    SiDrooble,
    SiDropbox,
    SiDrupal,
    SiDsautomobiles,
    SiDts,
    SiDtube,
    SiDucati,
    SiDuckdb,
    SiDuckduckgo,
    SiDungeonsanddragons,
    SiDunked,
    SiDunzo,
    SiDuolingo,
    SiDuplicati,
    SiDvc,
    SiDwavesystems,
    SiDwm,
    SiDynatrace,
    SiE,
    SiE3,
    SiEa,
    SiEac,
    SiEagle,
    SiEasyeda,
    SiEasyjet,
    SiEbay,
    SiEbox,
    SiEclipseadoptium,
    SiEclipseche,
    SiEclipseide,
    SiEclipsejetty,
    SiEclipsemosquitto,
    SiEclipsevertdotx,
    SiEcosia,
    SiEcovacs,
    SiEdeka,
    SiEdgeimpulse,
    SiEditorconfig,
    SiEdotleclerc,
    SiEducative,
    SiEdx,
    SiEgghead,
    SiEgnyte,
    SiEight,
    SiEightsleep,
    SiEjs,
    SiElastic,
    SiElasticcloud,
    SiElasticsearch,
    SiElasticstack,
    SiElavon,
    SiElectron,
    SiElectronbuilder,
    SiElectronfiddle,
    SiElegoo,
    SiElement,
    SiElementary,
    SiElementor,
    SiElevenlabs,
    SiEleventy,
    SiElgato,
    SiElixir,
    SiEljueves,
    SiEllo,
    SiElm,
    SiElsevier,
    SiEmbarcadero,
    SiEmbark,
    SiEmberdotjs,
    SiEmby,
    SiEmirates,
    SiEmlakjet,
    SiEmpirekred,
    SiEndeavouros,
    SiEngadget,
    SiEnpass,
    SiEnterprisedb,
    SiEnvato,
    SiEnvoyproxy,
    SiEpel,
    SiEpicgames,
    SiEpson,
    SiEquinixmetal,
    SiEraser,
    SiEricsson,
    SiErlang,
    SiErpnext,
    SiEsbuild,
    SiEsea,
    SiEslgaming,
    SiEslint,
    SiEsotericsoftware,
    SiEsphome,
    SiEspressif,
    SiEsri,
    SiEtcd,
    SiEthereum,
    SiEthers,
    SiEthiopianairlines,
    SiEtihadairways,
    SiEtsy,
    SiEventbrite,
    SiEventstore,
    SiEvernote,
    SiExcalidraw,
    SiExercism,
    SiExordo,
    SiExoscale,
    SiExpedia,
    SiExpensify,
    SiExpertsexchange,
    SiExpo,
    SiExpress,
    SiExpressvpn,
    SiEyeem,
    SiF1,
    SiF5,
    SiFacebook,
    SiFacebookgaming,
    SiFacebooklive,
    SiFaceit,
    SiFacepunch,
    SiFairphone,
    SiFalco,
    SiFalcon,
    SiFampay,
    SiFandango,
    SiFandom,
    SiFanfou,
    SiFantom,
    SiFarcaster,
    SiFareharbor,
    SiFarfetch,
    SiFastapi,
    SiFastify,
    SiFastlane,
    SiFastly,
    SiFathom,
    SiFauna,
    SiFavro,
    SiFcc,
    SiFdroid,
    SiFeathub,
    SiFedex,
    SiFedora,
    SiFeedly,
    SiFerrari,
    SiFerrarinv,
    SiFerretdb,
    SiFfmpeg,
    SiFi,
    SiFiat,
    SiFidoalliance,
    SiFifa,
    SiFig,
    SiFigma,
    SiFigshare,
    SiFila,
    SiFilament,
    SiFiledotio,
    SiFiles,
    SiFilezilla,
    SiFineco,
    SiFing,
    SiFirebase,
    SiFirefish,
    SiFireflyiii,
    SiFirefox,
    SiFirefoxbrowser,
    SiFireship,
    SiFirewalla,
    SiFirst,
    SiFishshell,
    SiFitbit,
    SiFivem,
    SiFiverr,
    SiFizz,
    SiFlashforge,
    SiFlask,
    SiFlat,
    SiFlathub,
    SiFlatpak,
    SiFlickr,
    SiFlightaware,
    SiFlipboard,
    SiFlipkart,
    SiFloatplane,
    SiFlood,
} from "react-icons/si"

export function nameToReactIcon_si_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "si:Si1001Tracklists":
            return Si1001Tracklists;
        case "si:Si1And1":
            return Si1And1;
        case "si:Si1Dot1Dot1Dot1":
            return Si1Dot1Dot1Dot1;
        case "si:Si1Panel":
            return Si1Panel;
        case "si:Si1Password":
            return Si1Password;
        case "si:Si2Fas":
            return Si2Fas;
        case "si:Si2K":
            return Si2K;
        case "si:Si30Secondsofcode":
            return Si30Secondsofcode;
        case "si:Si365Datascience":
            return Si365Datascience;
        case "si:Si3M":
            return Si3M;
        case "si:Si42":
            return Si42;
        case "si:Si4Chan":
            return Si4Chan;
        case "si:Si4D":
            return Si4D;
        case "si:Si500Px":
            return Si500Px;
        case "si:Si7Zip":
            return Si7Zip;
        case "si:Si99Designs":
            return Si99Designs;
        case "si:Si9Gag":
            return Si9Gag;
        case "si:SiAbbott":
            return SiAbbott;
        case "si:SiAbbrobotstudio":
            return SiAbbrobotstudio;
        case "si:SiAbbvie":
            return SiAbbvie;
        case "si:SiAboutdotme":
            return SiAboutdotme;
        case "si:SiAbstract":
            return SiAbstract;
        case "si:SiAbusedotch":
            return SiAbusedotch;
        case "si:SiAcademia":
            return SiAcademia;
        case "si:SiAccenture":
            return SiAccenture;
        case "si:SiAccusoft":
            return SiAccusoft;
        case "si:SiAccuweather":
            return SiAccuweather;
        case "si:SiAcer":
            return SiAcer;
        case "si:SiAcm":
            return SiAcm;
        case "si:SiActigraph":
            return SiActigraph;
        case "si:SiActivision":
            return SiActivision;
        case "si:SiActivitypub":
            return SiActivitypub;
        case "si:SiActix":
            return SiActix;
        case "si:SiActualbudget":
            return SiActualbudget;
        case "si:SiAcura":
            return SiAcura;
        case "si:SiAdafruit":
            return SiAdafruit;
        case "si:SiAdblock":
            return SiAdblock;
        case "si:SiAdblockplus":
            return SiAdblockplus;
        case "si:SiAddydotio":
            return SiAddydotio;
        case "si:SiAdguard":
            return SiAdguard;
        case "si:SiAdidas":
            return SiAdidas;
        case "si:SiAdminer":
            return SiAdminer;
        case "si:SiAdobe":
            return SiAdobe;
        case "si:SiAdobeacrobatreader":
            return SiAdobeacrobatreader;
        case "si:SiAdobeaftereffects":
            return SiAdobeaftereffects;
        case "si:SiAdobeaudition":
            return SiAdobeaudition;
        case "si:SiAdobecreativecloud":
            return SiAdobecreativecloud;
        case "si:SiAdobedreamweaver":
            return SiAdobedreamweaver;
        case "si:SiAdobefonts":
            return SiAdobefonts;
        case "si:SiAdobeillustrator":
            return SiAdobeillustrator;
        case "si:SiAdobeindesign":
            return SiAdobeindesign;
        case "si:SiAdobelightroom":
            return SiAdobelightroom;
        case "si:SiAdobelightroomclassic":
            return SiAdobelightroomclassic;
        case "si:SiAdobephotoshop":
            return SiAdobephotoshop;
        case "si:SiAdobepremierepro":
            return SiAdobepremierepro;
        case "si:SiAdobexd":
            return SiAdobexd;
        case "si:SiAdonisjs":
            return SiAdonisjs;
        case "si:SiAdp":
            return SiAdp;
        case "si:SiAdroll":
            return SiAdroll;
        case "si:SiAdventofcode":
            return SiAdventofcode;
        case "si:SiAdyen":
            return SiAdyen;
        case "si:SiAegisauthenticator":
            return SiAegisauthenticator;
        case "si:SiAerlingus":
            return SiAerlingus;
        case "si:SiAeroflot":
            return SiAeroflot;
        case "si:SiAeromexico":
            return SiAeromexico;
        case "si:SiAerospike":
            return SiAerospike;
        case "si:SiAew":
            return SiAew;
        case "si:SiAffine":
            return SiAffine;
        case "si:SiAffinity":
            return SiAffinity;
        case "si:SiAffinitydesigner":
            return SiAffinitydesigner;
        case "si:SiAffinityphoto":
            return SiAffinityphoto;
        case "si:SiAffinitypublisher":
            return SiAffinitypublisher;
        case "si:SiAframe":
            return SiAframe;
        case "si:SiAfterpay":
            return SiAfterpay;
        case "si:SiAftership":
            return SiAftership;
        case "si:SiAgora":
            return SiAgora;
        case "si:SiAib":
            return SiAib;
        case "si:SiAidungeon":
            return SiAidungeon;
        case "si:SiAiohttp":
            return SiAiohttp;
        case "si:SiAiqfome":
            return SiAiqfome;
        case "si:SiAirasia":
            return SiAirasia;
        case "si:SiAirbnb":
            return SiAirbnb;
        case "si:SiAirbrake":
            return SiAirbrake;
        case "si:SiAirbus":
            return SiAirbus;
        case "si:SiAirbyte":
            return SiAirbyte;
        case "si:SiAircall":
            return SiAircall;
        case "si:SiAircanada":
            return SiAircanada;
        case "si:SiAirchina":
            return SiAirchina;
        case "si:SiAirfrance":
            return SiAirfrance;
        case "si:SiAirindia":
            return SiAirindia;
        case "si:SiAirplayaudio":
            return SiAirplayaudio;
        case "si:SiAirplayvideo":
            return SiAirplayvideo;
        case "si:SiAirserbia":
            return SiAirserbia;
        case "si:SiAirtable":
            return SiAirtable;
        case "si:SiAirtel":
            return SiAirtel;
        case "si:SiAirtransat":
            return SiAirtransat;
        case "si:SiAjv":
            return SiAjv;
        case "si:SiAkamai":
            return SiAkamai;
        case "si:SiAkasaair":
            return SiAkasaair;
        case "si:SiAkaunting":
            return SiAkaunting;
        case "si:SiAkiflow":
            return SiAkiflow;
        case "si:SiAlacritty":
            return SiAlacritty;
        case "si:SiAlamy":
            return SiAlamy;
        case "si:SiAlbertheijn":
            return SiAlbertheijn;
        case "si:SiAlby":
            return SiAlby;
        case "si:SiAlchemy":
            return SiAlchemy;
        case "si:SiAldinord":
            return SiAldinord;
        case "si:SiAldisud":
            return SiAldisud;
        case "si:SiAlfaromeo":
            return SiAlfaromeo;
        case "si:SiAlfred":
            return SiAlfred;
        case "si:SiAlgolia":
            return SiAlgolia;
        case "si:SiAlgorand":
            return SiAlgorand;
        case "si:SiAlibabacloud":
            return SiAlibabacloud;
        case "si:SiAlibabadotcom":
            return SiAlibabadotcom;
        case "si:SiAlienware":
            return SiAlienware;
        case "si:SiAliexpress":
            return SiAliexpress;
        case "si:SiAlipay":
            return SiAlipay;
        case "si:SiAllegro":
            return SiAllegro;
        case "si:SiAlliedmodders":
            return SiAlliedmodders;
        case "si:SiAllocine":
            return SiAllocine;
        case "si:SiAlltrails":
            return SiAlltrails;
        case "si:SiAlmalinux":
            return SiAlmalinux;
        case "si:SiAlpinedotjs":
            return SiAlpinedotjs;
        case "si:SiAlpinelinux":
            return SiAlpinelinux;
        case "si:SiAlternativeto":
            return SiAlternativeto;
        case "si:SiAlteryx":
            return SiAlteryx;
        case "si:SiAltiumdesigner":
            return SiAltiumdesigner;
        case "si:SiAlwaysdata":
            return SiAlwaysdata;
        case "si:SiAlx":
            return SiAlx;
        case "si:SiAmazon":
            return SiAmazon;
        case "si:SiAmazonalexa":
            return SiAmazonalexa;
        case "si:SiAmazonapigateway":
            return SiAmazonapigateway;
        case "si:SiAmazoncloudwatch":
            return SiAmazoncloudwatch;
        case "si:SiAmazoncognito":
            return SiAmazoncognito;
        case "si:SiAmazondocumentdb":
            return SiAmazondocumentdb;
        case "si:SiAmazondynamodb":
            return SiAmazondynamodb;
        case "si:SiAmazonec2":
            return SiAmazonec2;
        case "si:SiAmazonecs":
            return SiAmazonecs;
        case "si:SiAmazoneks":
            return SiAmazoneks;
        case "si:SiAmazonelasticache":
            return SiAmazonelasticache;
        case "si:SiAmazonfiretv":
            return SiAmazonfiretv;
        case "si:SiAmazongames":
            return SiAmazongames;
        case "si:SiAmazoniam":
            return SiAmazoniam;
        case "si:SiAmazonlumberyard":
            return SiAmazonlumberyard;
        case "si:SiAmazonluna":
            return SiAmazonluna;
        case "si:SiAmazonmusic":
            return SiAmazonmusic;
        case "si:SiAmazonpay":
            return SiAmazonpay;
        case "si:SiAmazonprime":
            return SiAmazonprime;
        case "si:SiAmazonrds":
            return SiAmazonrds;
        case "si:SiAmazonredshift":
            return SiAmazonredshift;
        case "si:SiAmazonroute53":
            return SiAmazonroute53;
        case "si:SiAmazons3":
            return SiAmazons3;
        case "si:SiAmazonsimpleemailservice":
            return SiAmazonsimpleemailservice;
        case "si:SiAmazonsqs":
            return SiAmazonsqs;
        case "si:SiAmazonwebservices":
            return SiAmazonwebservices;
        case "si:SiAmd":
            return SiAmd;
        case "si:SiAmeba":
            return SiAmeba;
        case "si:SiAmericanairlines":
            return SiAmericanairlines;
        case "si:SiAmericanexpress":
            return SiAmericanexpress;
        case "si:SiAmg":
            return SiAmg;
        case "si:SiAmp":
            return SiAmp;
        case "si:SiAmul":
            return SiAmul;
        case "si:SiAna":
            return SiAna;
        case "si:SiAnaconda":
            return SiAnaconda;
        case "si:SiAnalogue":
            return SiAnalogue;
        case "si:SiAndela":
            return SiAndela;
        case "si:SiAndroid":
            return SiAndroid;
        case "si:SiAndroidauto":
            return SiAndroidauto;
        case "si:SiAndroidstudio":
            return SiAndroidstudio;
        case "si:SiAngular":
            return SiAngular;
        case "si:SiAnilist":
            return SiAnilist;
        case "si:SiAnimalplanet":
            return SiAnimalplanet;
        case "si:SiAnkermake":
            return SiAnkermake;
        case "si:SiAnki":
            return SiAnki;
        case "si:SiAnsible":
            return SiAnsible;
        case "si:SiAnswer":
            return SiAnswer;
        case "si:SiAnsys":
            return SiAnsys;
        case "si:SiAnta":
            return SiAnta;
        case "si:SiAntdesign":
            return SiAntdesign;
        case "si:SiAntena3":
            return SiAntena3;
        case "si:SiAnthropic":
            return SiAnthropic;
        case "si:SiAnycubic":
            return SiAnycubic;
        case "si:SiAnydesk":
            return SiAnydesk;
        case "si:SiAnytype":
            return SiAnytype;
        case "si:SiAol":
            return SiAol;
        case "si:SiApache":
            return SiApache;
        case "si:SiApacheairflow":
            return SiApacheairflow;
        case "si:SiApacheant":
            return SiApacheant;
        case "si:SiApachecassandra":
            return SiApachecassandra;
        case "si:SiApachecloudstack":
            return SiApachecloudstack;
        case "si:SiApachecordova":
            return SiApachecordova;
        case "si:SiApachecouchdb":
            return SiApachecouchdb;
        case "si:SiApachedolphinscheduler":
            return SiApachedolphinscheduler;
        case "si:SiApachedruid":
            return SiApachedruid;
        case "si:SiApacheecharts":
            return SiApacheecharts;
        case "si:SiApacheflink":
            return SiApacheflink;
        case "si:SiApachefreemarker":
            return SiApachefreemarker;
        case "si:SiApachegroovy":
            return SiApachegroovy;
        case "si:SiApacheguacamole":
            return SiApacheguacamole;
        case "si:SiApachehadoop":
            return SiApachehadoop;
        case "si:SiApachehbase":
            return SiApachehbase;
        case "si:SiApachehive":
            return SiApachehive;
        case "si:SiApachejmeter":
            return SiApachejmeter;
        case "si:SiApachekafka":
            return SiApachekafka;
        case "si:SiApachekylin":
            return SiApachekylin;
        case "si:SiApachelucene":
            return SiApachelucene;
        case "si:SiApachemaven":
            return SiApachemaven;
        case "si:SiApachenetbeanside":
            return SiApachenetbeanside;
        case "si:SiApachenifi":
            return SiApachenifi;
        case "si:SiApacheopenoffice":
            return SiApacheopenoffice;
        case "si:SiApacheparquet":
            return SiApacheparquet;
        case "si:SiApachepulsar":
            return SiApachepulsar;
        case "si:SiApacherocketmq":
            return SiApacherocketmq;
        case "si:SiApachesolr":
            return SiApachesolr;
        case "si:SiApachespark":
            return SiApachespark;
        case "si:SiApachestorm":
            return SiApachestorm;
        case "si:SiApachesuperset":
            return SiApachesuperset;
        case "si:SiApachetomcat":
            return SiApachetomcat;
        case "si:SiAparat":
            return SiAparat;
        case "si:SiApifox":
            return SiApifox;
        case "si:SiApmterminals":
            return SiApmterminals;
        case "si:SiApollographql":
            return SiApollographql;
        case "si:SiApostrophe":
            return SiApostrophe;
        case "si:SiAppgallery":
            return SiAppgallery;
        case "si:SiAppian":
            return SiAppian;
        case "si:SiAppium":
            return SiAppium;
        case "si:SiApple":
            return SiApple;
        case "si:SiApplearcade":
            return SiApplearcade;
        case "si:SiApplemusic":
            return SiApplemusic;
        case "si:SiApplenews":
            return SiApplenews;
        case "si:SiApplepay":
            return SiApplepay;
        case "si:SiApplepodcasts":
            return SiApplepodcasts;
        case "si:SiAppletv":
            return SiAppletv;
        case "si:SiAppsignal":
            return SiAppsignal;
        case "si:SiAppsmith":
            return SiAppsmith;
        case "si:SiAppstore":
            return SiAppstore;
        case "si:SiAppveyor":
            return SiAppveyor;
        case "si:SiAppwrite":
            return SiAppwrite;
        case "si:SiAqua":
            return SiAqua;
        case "si:SiAral":
            return SiAral;
        case "si:SiArangodb":
            return SiArangodb;
        case "si:SiArc":
            return SiArc;
        case "si:SiArcgis":
            return SiArcgis;
        case "si:SiArchicad":
            return SiArchicad;
        case "si:SiArchiveofourown":
            return SiArchiveofourown;
        case "si:SiArchlinux":
            return SiArchlinux;
        case "si:SiArdour":
            return SiArdour;
        case "si:SiArduino":
            return SiArduino;
        case "si:SiArgo":
            return SiArgo;
        case "si:SiArgos":
            return SiArgos;
        case "si:SiAriakit":
            return SiAriakit;
        case "si:SiArkecosystem":
            return SiArkecosystem;
        case "si:SiArlo":
            return SiArlo;
        case "si:SiArm":
            return SiArm;
        case "si:SiArmkeil":
            return SiArmkeil;
        case "si:SiArstechnica":
            return SiArstechnica;
        case "si:SiArtifacthub":
            return SiArtifacthub;
        case "si:SiArtixlinux":
            return SiArtixlinux;
        case "si:SiArtstation":
            return SiArtstation;
        case "si:SiArxiv":
            return SiArxiv;
        case "si:SiAsahilinux":
            return SiAsahilinux;
        case "si:SiAsana":
            return SiAsana;
        case "si:SiAsciidoctor":
            return SiAsciidoctor;
        case "si:SiAsciinema":
            return SiAsciinema;
        case "si:SiAsda":
            return SiAsda;
        case "si:SiAseprite":
            return SiAseprite;
        case "si:SiAskfm":
            return SiAskfm;
        case "si:SiAssemblyscript":
            return SiAssemblyscript;
        case "si:SiAsterisk":
            return SiAsterisk;
        case "si:SiAstonmartin":
            return SiAstonmartin;
        case "si:SiAstra":
            return SiAstra;
        case "si:SiAstral":
            return SiAstral;
        case "si:SiAstro":
            return SiAstro;
        case "si:SiAsus":
            return SiAsus;
        case "si:SiAtandt":
            return SiAtandt;
        case "si:SiAtari":
            return SiAtari;
        case "si:SiAtlasos":
            return SiAtlasos;
        case "si:SiAtlassian":
            return SiAtlassian;
        case "si:SiAuchan":
            return SiAuchan;
        case "si:SiAudacity":
            return SiAudacity;
        case "si:SiAudi":
            return SiAudi;
        case "si:SiAudible":
            return SiAudible;
        case "si:SiAudiobookshelf":
            return SiAudiobookshelf;
        case "si:SiAudioboom":
            return SiAudioboom;
        case "si:SiAudiomack":
            return SiAudiomack;
        case "si:SiAudiotechnica":
            return SiAudiotechnica;
        case "si:SiAurelia":
            return SiAurelia;
        case "si:SiAuth0":
            return SiAuth0;
        case "si:SiAuthelia":
            return SiAuthelia;
        case "si:SiAuthentik":
            return SiAuthentik;
        case "si:SiAuthy":
            return SiAuthy;
        case "si:SiAutocad":
            return SiAutocad;
        case "si:SiAutocannon":
            return SiAutocannon;
        case "si:SiAutodesk":
            return SiAutodesk;
        case "si:SiAutodeskmaya":
            return SiAutodeskmaya;
        case "si:SiAutodeskrevit":
            return SiAutodeskrevit;
        case "si:SiAutohotkey":
            return SiAutohotkey;
        case "si:SiAutoit":
            return SiAutoit;
        case "si:SiAutomattic":
            return SiAutomattic;
        case "si:SiAutoprefixer":
            return SiAutoprefixer;
        case "si:SiAutozone":
            return SiAutozone;
        case "si:SiAvajs":
            return SiAvajs;
        case "si:SiAvast":
            return SiAvast;
        case "si:SiAvianca":
            return SiAvianca;
        case "si:SiAvira":
            return SiAvira;
        case "si:SiAwesomelists":
            return SiAwesomelists;
        case "si:SiAwesomewm":
            return SiAwesomewm;
        case "si:SiAwsamplify":
            return SiAwsamplify;
        case "si:SiAwselasticloadbalancing":
            return SiAwselasticloadbalancing;
        case "si:SiAwsfargate":
            return SiAwsfargate;
        case "si:SiAwslambda":
            return SiAwslambda;
        case "si:SiAwsorganizations":
            return SiAwsorganizations;
        case "si:SiAwssecretsmanager":
            return SiAwssecretsmanager;
        case "si:SiAwwwards":
            return SiAwwwards;
        case "si:SiAxios":
            return SiAxios;
        case "si:SiBabel":
            return SiBabel;
        case "si:SiBabelio":
            return SiBabelio;
        case "si:SiBabylondotjs":
            return SiBabylondotjs;
        case "si:SiBackblaze":
            return SiBackblaze;
        case "si:SiBackbone":
            return SiBackbone;
        case "si:SiBackbonedotjs":
            return SiBackbonedotjs;
        case "si:SiBackendless":
            return SiBackendless;
        case "si:SiBackstage":
            return SiBackstage;
        case "si:SiBadoo":
            return SiBadoo;
        case "si:SiBaidu":
            return SiBaidu;
        case "si:SiBakalari":
            return SiBakalari;
        case "si:SiBamboo":
            return SiBamboo;
        case "si:SiBambulab":
            return SiBambulab;
        case "si:SiBandcamp":
            return SiBandcamp;
        case "si:SiBandlab":
            return SiBandlab;
        case "si:SiBandrautomation":
            return SiBandrautomation;
        case "si:SiBandsintown":
            return SiBandsintown;
        case "si:SiBankofamerica":
            return SiBankofamerica;
        case "si:SiBarclays":
            return SiBarclays;
        case "si:SiBaremetrics":
            return SiBaremetrics;
        case "si:SiBarmenia":
            return SiBarmenia;
        case "si:SiBasecamp":
            return SiBasecamp;
        case "si:SiBaserow":
            return SiBaserow;
        case "si:SiBasicattentiontoken":
            return SiBasicattentiontoken;
        case "si:SiBastyon":
            return SiBastyon;
        case "si:SiBat":
            return SiBat;
        case "si:SiBata":
            return SiBata;
        case "si:SiBattledotnet":
            return SiBattledotnet;
        case "si:SiBazel":
            return SiBazel;
        case "si:SiBeatport":
            return SiBeatport;
        case "si:SiBeats":
            return SiBeats;
        case "si:SiBeatsbydre":
            return SiBeatsbydre;
        case "si:SiBeatstars":
            return SiBeatstars;
        case "si:SiBeekeeperstudio":
            return SiBeekeeperstudio;
        case "si:SiBehance":
            return SiBehance;
        case "si:SiBeijingsubway":
            return SiBeijingsubway;
        case "si:SiBem":
            return SiBem;
        case "si:SiBentley":
            return SiBentley;
        case "si:SiBento":
            return SiBento;
        case "si:SiBentobox":
            return SiBentobox;
        case "si:SiBentoml":
            return SiBentoml;
        case "si:SiBereal":
            return SiBereal;
        case "si:SiBetfair":
            return SiBetfair;
        case "si:SiBetterstack":
            return SiBetterstack;
        case "si:SiBevy":
            return SiBevy;
        case "si:SiBigbasket":
            return SiBigbasket;
        case "si:SiBigbluebutton":
            return SiBigbluebutton;
        case "si:SiBigcartel":
            return SiBigcartel;
        case "si:SiBigcommerce":
            return SiBigcommerce;
        case "si:SiBilibili":
            return SiBilibili;
        case "si:SiBillboard":
            return SiBillboard;
        case "si:SiBim":
            return SiBim;
        case "si:SiBinance":
            return SiBinance;
        case "si:SiBiolink":
            return SiBiolink;
        case "si:SiBiome":
            return SiBiome;
        case "si:SiBisecthosting":
            return SiBisecthosting;
        case "si:SiBit":
            return SiBit;
        case "si:SiBitbucket":
            return SiBitbucket;
        case "si:SiBitcoin":
            return SiBitcoin;
        case "si:SiBitcoincash":
            return SiBitcoincash;
        case "si:SiBitcoinsv":
            return SiBitcoinsv;
        case "si:SiBitcomet":
            return SiBitcomet;
        case "si:SiBitdefender":
            return SiBitdefender;
        case "si:SiBitly":
            return SiBitly;
        case "si:SiBitrise":
            return SiBitrise;
        case "si:SiBittorrent":
            return SiBittorrent;
        case "si:SiBitwarden":
            return SiBitwarden;
        case "si:SiBitwig":
            return SiBitwig;
        case "si:SiBlackberry":
            return SiBlackberry;
        case "si:SiBlackmagicdesign":
            return SiBlackmagicdesign;
        case "si:SiBlazemeter":
            return SiBlazemeter;
        case "si:SiBlazor":
            return SiBlazor;
        case "si:SiBlender":
            return SiBlender;
        case "si:SiBlockbench":
            return SiBlockbench;
        case "si:SiBlockchaindotcom":
            return SiBlockchaindotcom;
        case "si:SiBlogger":
            return SiBlogger;
        case "si:SiBloglovin":
            return SiBloglovin;
        case "si:SiBlueprint":
            return SiBlueprint;
        case "si:SiBluesky":
            return SiBluesky;
        case "si:SiBluesound":
            return SiBluesound;
        case "si:SiBluetooth":
            return SiBluetooth;
        case "si:SiBmcsoftware":
            return SiBmcsoftware;
        case "si:SiBmw":
            return SiBmw;
        case "si:SiBnbchain":
            return SiBnbchain;
        case "si:SiBoardgamegeek":
            return SiBoardgamegeek;
        case "si:SiBoat":
            return SiBoat;
        case "si:SiBoehringeringelheim":
            return SiBoehringeringelheim;
        case "si:SiBoeing":
            return SiBoeing;
        case "si:SiBombardier":
            return SiBombardier;
        case "si:SiBookalope":
            return SiBookalope;
        case "si:SiBookbub":
            return SiBookbub;
        case "si:SiBookmeter":
            return SiBookmeter;
        case "si:SiBookmyshow":
            return SiBookmyshow;
        case "si:SiBookstack":
            return SiBookstack;
        case "si:SiBoost":
            return SiBoost;
        case "si:SiBoosty":
            return SiBoosty;
        case "si:SiBoots":
            return SiBoots;
        case "si:SiBootstrap":
            return SiBootstrap;
        case "si:SiBorgbackup":
            return SiBorgbackup;
        case "si:SiBosch":
            return SiBosch;
        case "si:SiBose":
            return SiBose;
        case "si:SiBotblecms":
            return SiBotblecms;
        case "si:SiBoulanger":
            return SiBoulanger;
        case "si:SiBower":
            return SiBower;
        case "si:SiBox":
            return SiBox;
        case "si:SiBoxysvg":
            return SiBoxysvg;
        case "si:SiBraintree":
            return SiBraintree;
        case "si:SiBrandfolder":
            return SiBrandfolder;
        case "si:SiBrave":
            return SiBrave;
        case "si:SiBreaker":
            return SiBreaker;
        case "si:SiBrenntag":
            return SiBrenntag;
        case "si:SiBrevo":
            return SiBrevo;
        case "si:SiBrex":
            return SiBrex;
        case "si:SiBricks":
            return SiBricks;
        case "si:SiBritishairways":
            return SiBritishairways;
        case "si:SiBroadcom":
            return SiBroadcom;
        case "si:SiBruno":
            return SiBruno;
        case "si:SiBsd":
            return SiBsd;
        case "si:SiBspwm":
            return SiBspwm;
        case "si:SiBt":
            return SiBt;
        case "si:SiBuddy":
            return SiBuddy;
        case "si:SiBudibase":
            return SiBudibase;
        case "si:SiBuefy":
            return SiBuefy;
        case "si:SiBuffer":
            return SiBuffer;
        case "si:SiBugatti":
            return SiBugatti;
        case "si:SiBugcrowd":
            return SiBugcrowd;
        case "si:SiBugsnag":
            return SiBugsnag;
        case "si:SiBuhl":
            return SiBuhl;
        case "si:SiBuildkite":
            return SiBuildkite;
        case "si:SiBuiltbybit":
            return SiBuiltbybit;
        case "si:SiBukalapak":
            return SiBukalapak;
        case "si:SiBulma":
            return SiBulma;
        case "si:SiBun":
            return SiBun;
        case "si:SiBungie":
            return SiBungie;
        case "si:SiBunq":
            return SiBunq;
        case "si:SiBurgerking":
            return SiBurgerking;
        case "si:SiBurpsuite":
            return SiBurpsuite;
        case "si:SiBurton":
            return SiBurton;
        case "si:SiBuymeacoffee":
            return SiBuymeacoffee;
        case "si:SiBuysellads":
            return SiBuysellads;
        case "si:SiBuzzfeed":
            return SiBuzzfeed;
        case "si:SiBvg":
            return SiBvg;
        case "si:SiByjus":
            return SiByjus;
        case "si:SiBytedance":
            return SiBytedance;
        case "si:SiC":
            return SiC;
        case "si:SiCachet":
            return SiCachet;
        case "si:SiCaddy":
            return SiCaddy;
        case "si:SiCadillac":
            return SiCadillac;
        case "si:SiCafepress":
            return SiCafepress;
        case "si:SiCaffeine":
            return SiCaffeine;
        case "si:SiCairographics":
            return SiCairographics;
        case "si:SiCairometro":
            return SiCairometro;
        case "si:SiCakephp":
            return SiCakephp;
        case "si:SiCaldotcom":
            return SiCaldotcom;
        case "si:SiCalendly":
            return SiCalendly;
        case "si:SiCalibreweb":
            return SiCalibreweb;
        case "si:SiCampaignmonitor":
            return SiCampaignmonitor;
        case "si:SiCamunda":
            return SiCamunda;
        case "si:SiCanonical":
            return SiCanonical;
        case "si:SiCanva":
            return SiCanva;
        case "si:SiCanvas":
            return SiCanvas;
        case "si:SiCapacitor":
            return SiCapacitor;
        case "si:SiCaprover":
            return SiCaprover;
        case "si:SiCardano":
            return SiCardano;
        case "si:SiCarlsberggroup":
            return SiCarlsberggroup;
        case "si:SiCarrd":
            return SiCarrd;
        case "si:SiCarrefour":
            return SiCarrefour;
        case "si:SiCarthrottle":
            return SiCarthrottle;
        case "si:SiCarto":
            return SiCarto;
        case "si:SiCashapp":
            return SiCashapp;
        case "si:SiCastbox":
            return SiCastbox;
        case "si:SiCastorama":
            return SiCastorama;
        case "si:SiCastro":
            return SiCastro;
        case "si:SiCaterpillar":
            return SiCaterpillar;
        case "si:SiCbc":
            return SiCbc;
        case "si:SiCbs":
            return SiCbs;
        case "si:SiCcc":
            return SiCcc;
        case "si:SiCcleaner":
            return SiCcleaner;
        case "si:SiCdprojekt":
            return SiCdprojekt;
        case "si:SiCe":
            return SiCe;
        case "si:SiCelery":
            return SiCelery;
        case "si:SiCelestron":
            return SiCelestron;
        case "si:SiCentos":
            return SiCentos;
        case "si:SiCeph":
            return SiCeph;
        case "si:SiCesium":
            return SiCesium;
        case "si:SiChai":
            return SiChai;
        case "si:SiChainguard":
            return SiChainguard;
        case "si:SiChainlink":
            return SiChainlink;
        case "si:SiChakraui":
            return SiChakraui;
        case "si:SiChannel4":
            return SiChannel4;
        case "si:SiCharles":
            return SiCharles;
        case "si:SiChartdotjs":
            return SiChartdotjs;
        case "si:SiChartmogul":
            return SiChartmogul;
        case "si:SiChase":
            return SiChase;
        case "si:SiChatbot":
            return SiChatbot;
        case "si:SiChatwoot":
            return SiChatwoot;
        case "si:SiCheckio":
            return SiCheckio;
        case "si:SiCheckmarx":
            return SiCheckmarx;
        case "si:SiCheckmk":
            return SiCheckmk;
        case "si:SiChedraui":
            return SiChedraui;
        case "si:SiCheerio":
            return SiCheerio;
        case "si:SiChef":
            return SiChef;
        case "si:SiChemex":
            return SiChemex;
        case "si:SiChessdotcom":
            return SiChessdotcom;
        case "si:SiChevrolet":
            return SiChevrolet;
        case "si:SiChianetwork":
            return SiChianetwork;
        case "si:SiChinaeasternairlines":
            return SiChinaeasternairlines;
        case "si:SiChinasouthernairlines":
            return SiChinasouthernairlines;
        case "si:SiChocolatey":
            return SiChocolatey;
        case "si:SiChromatic":
            return SiChromatic;
        case "si:SiChromecast":
            return SiChromecast;
        case "si:SiChromewebstore":
            return SiChromewebstore;
        case "si:SiChrysler":
            return SiChrysler;
        case "si:SiChupachups":
            return SiChupachups;
        case "si:SiCilium":
            return SiCilium;
        case "si:SiCinema4D":
            return SiCinema4D;
        case "si:SiCinnamon":
            return SiCinnamon;
        case "si:SiCircle":
            return SiCircle;
        case "si:SiCircleci":
            return SiCircleci;
        case "si:SiCircuitverse":
            return SiCircuitverse;
        case "si:SiCirrusci":
            return SiCirrusci;
        case "si:SiCisco":
            return SiCisco;
        case "si:SiCitrix":
            return SiCitrix;
        case "si:SiCitroen":
            return SiCitroen;
        case "si:SiCivicrm":
            return SiCivicrm;
        case "si:SiCivo":
            return SiCivo;
        case "si:SiCkeditor4":
            return SiCkeditor4;
        case "si:SiClarifai":
            return SiClarifai;
        case "si:SiClaris":
            return SiClaris;
        case "si:SiClarivate":
            return SiClarivate;
        case "si:SiClaude":
            return SiClaude;
        case "si:SiClerk":
            return SiClerk;
        case "si:SiClevercloud":
            return SiClevercloud;
        case "si:SiClickhouse":
            return SiClickhouse;
        case "si:SiClickup":
            return SiClickup;
        case "si:SiClion":
            return SiClion;
        case "si:SiCliqz":
            return SiCliqz;
        case "si:SiClockify":
            return SiClockify;
        case "si:SiClojure":
            return SiClojure;
        case "si:SiCloud66":
            return SiCloud66;
        case "si:SiCloudbees":
            return SiCloudbees;
        case "si:SiCloudcannon":
            return SiCloudcannon;
        case "si:SiCloudera":
            return SiCloudera;
        case "si:SiCloudflare":
            return SiCloudflare;
        case "si:SiCloudflarepages":
            return SiCloudflarepages;
        case "si:SiCloudflareworkers":
            return SiCloudflareworkers;
        case "si:SiCloudfoundry":
            return SiCloudfoundry;
        case "si:SiCloudinary":
            return SiCloudinary;
        case "si:SiCloudron":
            return SiCloudron;
        case "si:SiCloudsmith":
            return SiCloudsmith;
        case "si:SiCloudways":
            return SiCloudways;
        case "si:SiClubforce":
            return SiClubforce;
        case "si:SiClubhouse":
            return SiClubhouse;
        case "si:SiClyp":
            return SiClyp;
        case "si:SiCmake":
            return SiCmake;
        case "si:SiCncf":
            return SiCncf;
        case "si:SiCnet":
            return SiCnet;
        case "si:SiCnn":
            return SiCnn;
        case "si:SiCocacola":
            return SiCocacola;
        case "si:SiCockpit":
            return SiCockpit;
        case "si:SiCockroachlabs":
            return SiCockroachlabs;
        case "si:SiCocoapods":
            return SiCocoapods;
        case "si:SiCocos":
            return SiCocos;
        case "si:SiCoda":
            return SiCoda;
        case "si:SiCodacy":
            return SiCodacy;
        case "si:SiCodeberg":
            return SiCodeberg;
        case "si:SiCodeblocks":
            return SiCodeblocks;
        case "si:SiCodecademy":
            return SiCodecademy;
        case "si:SiCodeceptjs":
            return SiCodeceptjs;
        case "si:SiCodechef":
            return SiCodechef;
        case "si:SiCodeclimate":
            return SiCodeclimate;
        case "si:SiCodecov":
            return SiCodecov;
        case "si:SiCodecrafters":
            return SiCodecrafters;
        case "si:SiCodefactor":
            return SiCodefactor;
        case "si:SiCodeforces":
            return SiCodeforces;
        case "si:SiCodefresh":
            return SiCodefresh;
        case "si:SiCodeigniter":
            return SiCodeigniter;
        case "si:SiCodeium":
            return SiCodeium;
        case "si:SiCodemagic":
            return SiCodemagic;
        case "si:SiCodementor":
            return SiCodementor;
        case "si:SiCodemirror":
            return SiCodemirror;
        case "si:SiCodenewbie":
            return SiCodenewbie;
        case "si:SiCodepen":
            return SiCodepen;
        case "si:SiCodeproject":
            return SiCodeproject;
        case "si:SiCoder":
            return SiCoder;
        case "si:SiCodersrank":
            return SiCodersrank;
        case "si:SiCoderwall":
            return SiCoderwall;
        case "si:SiCodesandbox":
            return SiCodesandbox;
        case "si:SiCodeship":
            return SiCodeship;
        case "si:SiCodesignal":
            return SiCodesignal;
        case "si:SiCodestream":
            return SiCodestream;
        case "si:SiCodewars":
            return SiCodewars;
        case "si:SiCodingame":
            return SiCodingame;
        case "si:SiCodingninjas":
            return SiCodingninjas;
        case "si:SiCodio":
            return SiCodio;
        case "si:SiCoffeescript":
            return SiCoffeescript;
        case "si:SiCoggle":
            return SiCoggle;
        case "si:SiCognizant":
            return SiCognizant;
        case "si:SiCohost":
            return SiCohost;
        case "si:SiCoil":
            return SiCoil;
        case "si:SiCoinbase":
            return SiCoinbase;
        case "si:SiCoinmarketcap":
            return SiCoinmarketcap;
        case "si:SiComicfury":
            return SiComicfury;
        case "si:SiComma":
            return SiComma;
        case "si:SiCommerzbank":
            return SiCommerzbank;
        case "si:SiCommitlint":
            return SiCommitlint;
        case "si:SiCommodore":
            return SiCommodore;
        case "si:SiCommonworkflowlanguage":
            return SiCommonworkflowlanguage;
        case "si:SiCompilerexplorer":
            return SiCompilerexplorer;
        case "si:SiComposer":
            return SiComposer;
        case "si:SiComptia":
            return SiComptia;
        case "si:SiComsol":
            return SiComsol;
        case "si:SiConan":
            return SiConan;
        case "si:SiConcourse":
            return SiConcourse;
        case "si:SiCondaforge":
            return SiCondaforge;
        case "si:SiConekta":
            return SiConekta;
        case "si:SiConfluence":
            return SiConfluence;
        case "si:SiConstruct3":
            return SiConstruct3;
        case "si:SiConsul":
            return SiConsul;
        case "si:SiContabo":
            return SiContabo;
        case "si:SiContactlesspayment":
            return SiContactlesspayment;
        case "si:SiContainerd":
            return SiContainerd;
        case "si:SiContao":
            return SiContao;
        case "si:SiContentful":
            return SiContentful;
        case "si:SiContentstack":
            return SiContentstack;
        case "si:SiContinente":
            return SiContinente;
        case "si:SiContributorcovenant":
            return SiContributorcovenant;
        case "si:SiConventionalcommits":
            return SiConventionalcommits;
        case "si:SiConvertio":
            return SiConvertio;
        case "si:SiCookiecutter":
            return SiCookiecutter;
        case "si:SiCoolermaster":
            return SiCoolermaster;
        case "si:SiCoop":
            return SiCoop;
        case "si:SiCopaairlines":
            return SiCopaairlines;
        case "si:SiCoppel":
            return SiCoppel;
        case "si:SiCora":
            return SiCora;
        case "si:SiCoreldraw":
            return SiCoreldraw;
        case "si:SiCoronaengine":
            return SiCoronaengine;
        case "si:SiCoronarenderer":
            return SiCoronarenderer;
        case "si:SiCorsair":
            return SiCorsair;
        case "si:SiCouchbase":
            return SiCouchbase;
        case "si:SiCounterstrike":
            return SiCounterstrike;
        case "si:SiCountingworkspro":
            return SiCountingworkspro;
        case "si:SiCoursera":
            return SiCoursera;
        case "si:SiCoveralls":
            return SiCoveralls;
        case "si:SiCoze":
            return SiCoze;
        case "si:SiCpanel":
            return SiCpanel;
        case "si:SiCplusplus":
            return SiCplusplus;
        case "si:SiCplusplusbuilder":
            return SiCplusplusbuilder;
        case "si:SiCraftcms":
            return SiCraftcms;
        case "si:SiCraftsman":
            return SiCraftsman;
        case "si:SiCratedb":
            return SiCratedb;
        case "si:SiCrayon":
            return SiCrayon;
        case "si:SiCreality":
            return SiCreality;
        case "si:SiCreatereactapp":
            return SiCreatereactapp;
        case "si:SiCreativecommons":
            return SiCreativecommons;
        case "si:SiCreativetechnology":
            return SiCreativetechnology;
        case "si:SiCredly":
            return SiCredly;
        case "si:SiCrehana":
            return SiCrehana;
        case "si:SiCrewunited":
            return SiCrewunited;
        case "si:SiCriticalrole":
            return SiCriticalrole;
        case "si:SiCrowdin":
            return SiCrowdin;
        case "si:SiCrowdsource":
            return SiCrowdsource;
        case "si:SiCrunchbase":
            return SiCrunchbase;
        case "si:SiCrunchyroll":
            return SiCrunchyroll;
        case "si:SiCryengine":
            return SiCryengine;
        case "si:SiCryptpad":
            return SiCryptpad;
        case "si:SiCrystal":
            return SiCrystal;
        case "si:SiCsdn":
            return SiCsdn;
        case "si:SiCss3":
            return SiCss3;
        case "si:SiCssdesignawards":
            return SiCssdesignawards;
        case "si:SiCssmodules":
            return SiCssmodules;
        case "si:SiCsswizardry":
            return SiCsswizardry;
        case "si:SiCts":
            return SiCts;
        case "si:SiCucumber":
            return SiCucumber;
        case "si:SiCultura":
            return SiCultura;
        case "si:SiCurl":
            return SiCurl;
        case "si:SiCurseforge":
            return SiCurseforge;
        case "si:SiCustomink":
            return SiCustomink;
        case "si:SiCyberdefenders":
            return SiCyberdefenders;
        case "si:SiCycling74":
            return SiCycling74;
        case "si:SiCypress":
            return SiCypress;
        case "si:SiCytoscapedotjs":
            return SiCytoscapedotjs;
        case "si:SiD":
            return SiD;
        case "si:SiD3Dotjs":
            return SiD3Dotjs;
        case "si:SiDacia":
            return SiDacia;
        case "si:SiDaf":
            return SiDaf;
        case "si:SiDailydotdev":
            return SiDailydotdev;
        case "si:SiDailymotion":
            return SiDailymotion;
        case "si:SiDaisyui":
            return SiDaisyui;
        case "si:SiDapr":
            return SiDapr;
        case "si:SiDarkreader":
            return SiDarkreader;
        case "si:SiDart":
            return SiDart;
        case "si:SiDarty":
            return SiDarty;
        case "si:SiDaserste":
            return SiDaserste;
        case "si:SiDash":
            return SiDash;
        case "si:SiDashlane":
            return SiDashlane;
        case "si:SiDask":
            return SiDask;
        case "si:SiDassaultsystemes":
            return SiDassaultsystemes;
        case "si:SiDatabricks":
            return SiDatabricks;
        case "si:SiDatacamp":
            return SiDatacamp;
        case "si:SiDatadog":
            return SiDatadog;
        case "si:SiDatadotai":
            return SiDatadotai;
        case "si:SiDatagrip":
            return SiDatagrip;
        case "si:SiDataiku":
            return SiDataiku;
        case "si:SiDatastax":
            return SiDatastax;
        case "si:SiDatefns":
            return SiDatefns;
        case "si:SiDatev":
            return SiDatev;
        case "si:SiDatocms":
            return SiDatocms;
        case "si:SiDatto":
            return SiDatto;
        case "si:SiDavinciresolve":
            return SiDavinciresolve;
        case "si:SiDazhongdianping":
            return SiDazhongdianping;
        case "si:SiDazn":
            return SiDazn;
        case "si:SiDbeaver":
            return SiDbeaver;
        case "si:SiDblp":
            return SiDblp;
        case "si:SiDbt":
            return SiDbt;
        case "si:SiDcentertainment":
            return SiDcentertainment;
        case "si:SiDebian":
            return SiDebian;
        case "si:SiDebridlink":
            return SiDebridlink;
        case "si:SiDecapcms":
            return SiDecapcms;
        case "si:SiDecentraland":
            return SiDecentraland;
        case "si:SiDedge":
            return SiDedge;
        case "si:SiDeepcool":
            return SiDeepcool;
        case "si:SiDeepgram":
            return SiDeepgram;
        case "si:SiDeepin":
            return SiDeepin;
        case "si:SiDeepl":
            return SiDeepl;
        case "si:SiDeepnote":
            return SiDeepnote;
        case "si:SiDelicious":
            return SiDelicious;
        case "si:SiDeliveroo":
            return SiDeliveroo;
        case "si:SiDell":
            return SiDell;
        case "si:SiDelonghi":
            return SiDelonghi;
        case "si:SiDelphi":
            return SiDelphi;
        case "si:SiDelta":
            return SiDelta;
        case "si:SiDeluge":
            return SiDeluge;
        case "si:SiDeno":
            return SiDeno;
        case "si:SiDenon":
            return SiDenon;
        case "si:SiDependabot":
            return SiDependabot;
        case "si:SiDependencycheck":
            return SiDependencycheck;
        case "si:SiDepositphotos":
            return SiDepositphotos;
        case "si:SiDerspiegel":
            return SiDerspiegel;
        case "si:SiDeutschebahn":
            return SiDeutschebahn;
        case "si:SiDeutschebank":
            return SiDeutschebank;
        case "si:SiDeutschepost":
            return SiDeutschepost;
        case "si:SiDeutschewelle":
            return SiDeutschewelle;
        case "si:SiDevdotto":
            return SiDevdotto;
        case "si:SiDevexpress":
            return SiDevexpress;
        case "si:SiDeviantart":
            return SiDeviantart;
        case "si:SiDevpost":
            return SiDevpost;
        case "si:SiDevrant":
            return SiDevrant;
        case "si:SiDgraph":
            return SiDgraph;
        case "si:SiDhl":
            return SiDhl;
        case "si:SiDiagramsdotnet":
            return SiDiagramsdotnet;
        case "si:SiDialogflow":
            return SiDialogflow;
        case "si:SiDiaspora":
            return SiDiaspora;
        case "si:SiDictionarydotcom":
            return SiDictionarydotcom;
        case "si:SiDigg":
            return SiDigg;
        case "si:SiDigikeyelectronics":
            return SiDigikeyelectronics;
        case "si:SiDigitalocean":
            return SiDigitalocean;
        case "si:SiDinersclub":
            return SiDinersclub;
        case "si:SiDior":
            return SiDior;
        case "si:SiDirectus":
            return SiDirectus;
        case "si:SiDiscogs":
            return SiDiscogs;
        case "si:SiDiscord":
            return SiDiscord;
        case "si:SiDiscourse":
            return SiDiscourse;
        case "si:SiDiscover":
            return SiDiscover;
        case "si:SiDisqus":
            return SiDisqus;
        case "si:SiDisroot":
            return SiDisroot;
        case "si:SiDistrokid":
            return SiDistrokid;
        case "si:SiDjango":
            return SiDjango;
        case "si:SiDji":
            return SiDji;
        case "si:SiDlib":
            return SiDlib;
        case "si:SiDlna":
            return SiDlna;
        case "si:SiDm":
            return SiDm;
        case "si:SiDocker":
            return SiDocker;
        case "si:SiDocsdotrs":
            return SiDocsdotrs;
        case "si:SiDocsify":
            return SiDocsify;
        case "si:SiDoctrine":
            return SiDoctrine;
        case "si:SiDocusaurus":
            return SiDocusaurus;
        case "si:SiDogecoin":
            return SiDogecoin;
        case "si:SiDoi":
            return SiDoi;
        case "si:SiDolby":
            return SiDolby;
        case "si:SiDoordash":
            return SiDoordash;
        case "si:SiDota2":
            return SiDota2;
        case "si:SiDotenv":
            return SiDotenv;
        case "si:SiDotnet":
            return SiDotnet;
        case "si:SiDouban":
            return SiDouban;
        case "si:SiDoubanread":
            return SiDoubanread;
        case "si:SiDovecot":
            return SiDovecot;
        case "si:SiDovetail":
            return SiDovetail;
        case "si:SiDowndetector":
            return SiDowndetector;
        case "si:SiDoxygen":
            return SiDoxygen;
        case "si:SiDpd":
            return SiDpd;
        case "si:SiDragonframe":
            return SiDragonframe;
        case "si:SiDraugiemdotlv":
            return SiDraugiemdotlv;
        case "si:SiDreamstime":
            return SiDreamstime;
        case "si:SiDribbble":
            return SiDribbble;
        case "si:SiDrizzle":
            return SiDrizzle;
        case "si:SiDrone":
            return SiDrone;
        case "si:SiDrooble":
            return SiDrooble;
        case "si:SiDropbox":
            return SiDropbox;
        case "si:SiDrupal":
            return SiDrupal;
        case "si:SiDsautomobiles":
            return SiDsautomobiles;
        case "si:SiDts":
            return SiDts;
        case "si:SiDtube":
            return SiDtube;
        case "si:SiDucati":
            return SiDucati;
        case "si:SiDuckdb":
            return SiDuckdb;
        case "si:SiDuckduckgo":
            return SiDuckduckgo;
        case "si:SiDungeonsanddragons":
            return SiDungeonsanddragons;
        case "si:SiDunked":
            return SiDunked;
        case "si:SiDunzo":
            return SiDunzo;
        case "si:SiDuolingo":
            return SiDuolingo;
        case "si:SiDuplicati":
            return SiDuplicati;
        case "si:SiDvc":
            return SiDvc;
        case "si:SiDwavesystems":
            return SiDwavesystems;
        case "si:SiDwm":
            return SiDwm;
        case "si:SiDynatrace":
            return SiDynatrace;
        case "si:SiE":
            return SiE;
        case "si:SiE3":
            return SiE3;
        case "si:SiEa":
            return SiEa;
        case "si:SiEac":
            return SiEac;
        case "si:SiEagle":
            return SiEagle;
        case "si:SiEasyeda":
            return SiEasyeda;
        case "si:SiEasyjet":
            return SiEasyjet;
        case "si:SiEbay":
            return SiEbay;
        case "si:SiEbox":
            return SiEbox;
        case "si:SiEclipseadoptium":
            return SiEclipseadoptium;
        case "si:SiEclipseche":
            return SiEclipseche;
        case "si:SiEclipseide":
            return SiEclipseide;
        case "si:SiEclipsejetty":
            return SiEclipsejetty;
        case "si:SiEclipsemosquitto":
            return SiEclipsemosquitto;
        case "si:SiEclipsevertdotx":
            return SiEclipsevertdotx;
        case "si:SiEcosia":
            return SiEcosia;
        case "si:SiEcovacs":
            return SiEcovacs;
        case "si:SiEdeka":
            return SiEdeka;
        case "si:SiEdgeimpulse":
            return SiEdgeimpulse;
        case "si:SiEditorconfig":
            return SiEditorconfig;
        case "si:SiEdotleclerc":
            return SiEdotleclerc;
        case "si:SiEducative":
            return SiEducative;
        case "si:SiEdx":
            return SiEdx;
        case "si:SiEgghead":
            return SiEgghead;
        case "si:SiEgnyte":
            return SiEgnyte;
        case "si:SiEight":
            return SiEight;
        case "si:SiEightsleep":
            return SiEightsleep;
        case "si:SiEjs":
            return SiEjs;
        case "si:SiElastic":
            return SiElastic;
        case "si:SiElasticcloud":
            return SiElasticcloud;
        case "si:SiElasticsearch":
            return SiElasticsearch;
        case "si:SiElasticstack":
            return SiElasticstack;
        case "si:SiElavon":
            return SiElavon;
        case "si:SiElectron":
            return SiElectron;
        case "si:SiElectronbuilder":
            return SiElectronbuilder;
        case "si:SiElectronfiddle":
            return SiElectronfiddle;
        case "si:SiElegoo":
            return SiElegoo;
        case "si:SiElement":
            return SiElement;
        case "si:SiElementary":
            return SiElementary;
        case "si:SiElementor":
            return SiElementor;
        case "si:SiElevenlabs":
            return SiElevenlabs;
        case "si:SiEleventy":
            return SiEleventy;
        case "si:SiElgato":
            return SiElgato;
        case "si:SiElixir":
            return SiElixir;
        case "si:SiEljueves":
            return SiEljueves;
        case "si:SiEllo":
            return SiEllo;
        case "si:SiElm":
            return SiElm;
        case "si:SiElsevier":
            return SiElsevier;
        case "si:SiEmbarcadero":
            return SiEmbarcadero;
        case "si:SiEmbark":
            return SiEmbark;
        case "si:SiEmberdotjs":
            return SiEmberdotjs;
        case "si:SiEmby":
            return SiEmby;
        case "si:SiEmirates":
            return SiEmirates;
        case "si:SiEmlakjet":
            return SiEmlakjet;
        case "si:SiEmpirekred":
            return SiEmpirekred;
        case "si:SiEndeavouros":
            return SiEndeavouros;
        case "si:SiEngadget":
            return SiEngadget;
        case "si:SiEnpass":
            return SiEnpass;
        case "si:SiEnterprisedb":
            return SiEnterprisedb;
        case "si:SiEnvato":
            return SiEnvato;
        case "si:SiEnvoyproxy":
            return SiEnvoyproxy;
        case "si:SiEpel":
            return SiEpel;
        case "si:SiEpicgames":
            return SiEpicgames;
        case "si:SiEpson":
            return SiEpson;
        case "si:SiEquinixmetal":
            return SiEquinixmetal;
        case "si:SiEraser":
            return SiEraser;
        case "si:SiEricsson":
            return SiEricsson;
        case "si:SiErlang":
            return SiErlang;
        case "si:SiErpnext":
            return SiErpnext;
        case "si:SiEsbuild":
            return SiEsbuild;
        case "si:SiEsea":
            return SiEsea;
        case "si:SiEslgaming":
            return SiEslgaming;
        case "si:SiEslint":
            return SiEslint;
        case "si:SiEsotericsoftware":
            return SiEsotericsoftware;
        case "si:SiEsphome":
            return SiEsphome;
        case "si:SiEspressif":
            return SiEspressif;
        case "si:SiEsri":
            return SiEsri;
        case "si:SiEtcd":
            return SiEtcd;
        case "si:SiEthereum":
            return SiEthereum;
        case "si:SiEthers":
            return SiEthers;
        case "si:SiEthiopianairlines":
            return SiEthiopianairlines;
        case "si:SiEtihadairways":
            return SiEtihadairways;
        case "si:SiEtsy":
            return SiEtsy;
        case "si:SiEventbrite":
            return SiEventbrite;
        case "si:SiEventstore":
            return SiEventstore;
        case "si:SiEvernote":
            return SiEvernote;
        case "si:SiExcalidraw":
            return SiExcalidraw;
        case "si:SiExercism":
            return SiExercism;
        case "si:SiExordo":
            return SiExordo;
        case "si:SiExoscale":
            return SiExoscale;
        case "si:SiExpedia":
            return SiExpedia;
        case "si:SiExpensify":
            return SiExpensify;
        case "si:SiExpertsexchange":
            return SiExpertsexchange;
        case "si:SiExpo":
            return SiExpo;
        case "si:SiExpress":
            return SiExpress;
        case "si:SiExpressvpn":
            return SiExpressvpn;
        case "si:SiEyeem":
            return SiEyeem;
        case "si:SiF1":
            return SiF1;
        case "si:SiF5":
            return SiF5;
        case "si:SiFacebook":
            return SiFacebook;
        case "si:SiFacebookgaming":
            return SiFacebookgaming;
        case "si:SiFacebooklive":
            return SiFacebooklive;
        case "si:SiFaceit":
            return SiFaceit;
        case "si:SiFacepunch":
            return SiFacepunch;
        case "si:SiFairphone":
            return SiFairphone;
        case "si:SiFalco":
            return SiFalco;
        case "si:SiFalcon":
            return SiFalcon;
        case "si:SiFampay":
            return SiFampay;
        case "si:SiFandango":
            return SiFandango;
        case "si:SiFandom":
            return SiFandom;
        case "si:SiFanfou":
            return SiFanfou;
        case "si:SiFantom":
            return SiFantom;
        case "si:SiFarcaster":
            return SiFarcaster;
        case "si:SiFareharbor":
            return SiFareharbor;
        case "si:SiFarfetch":
            return SiFarfetch;
        case "si:SiFastapi":
            return SiFastapi;
        case "si:SiFastify":
            return SiFastify;
        case "si:SiFastlane":
            return SiFastlane;
        case "si:SiFastly":
            return SiFastly;
        case "si:SiFathom":
            return SiFathom;
        case "si:SiFauna":
            return SiFauna;
        case "si:SiFavro":
            return SiFavro;
        case "si:SiFcc":
            return SiFcc;
        case "si:SiFdroid":
            return SiFdroid;
        case "si:SiFeathub":
            return SiFeathub;
        case "si:SiFedex":
            return SiFedex;
        case "si:SiFedora":
            return SiFedora;
        case "si:SiFeedly":
            return SiFeedly;
        case "si:SiFerrari":
            return SiFerrari;
        case "si:SiFerrarinv":
            return SiFerrarinv;
        case "si:SiFerretdb":
            return SiFerretdb;
        case "si:SiFfmpeg":
            return SiFfmpeg;
        case "si:SiFi":
            return SiFi;
        case "si:SiFiat":
            return SiFiat;
        case "si:SiFidoalliance":
            return SiFidoalliance;
        case "si:SiFifa":
            return SiFifa;
        case "si:SiFig":
            return SiFig;
        case "si:SiFigma":
            return SiFigma;
        case "si:SiFigshare":
            return SiFigshare;
        case "si:SiFila":
            return SiFila;
        case "si:SiFilament":
            return SiFilament;
        case "si:SiFiledotio":
            return SiFiledotio;
        case "si:SiFiles":
            return SiFiles;
        case "si:SiFilezilla":
            return SiFilezilla;
        case "si:SiFineco":
            return SiFineco;
        case "si:SiFing":
            return SiFing;
        case "si:SiFirebase":
            return SiFirebase;
        case "si:SiFirefish":
            return SiFirefish;
        case "si:SiFireflyiii":
            return SiFireflyiii;
        case "si:SiFirefox":
            return SiFirefox;
        case "si:SiFirefoxbrowser":
            return SiFirefoxbrowser;
        case "si:SiFireship":
            return SiFireship;
        case "si:SiFirewalla":
            return SiFirewalla;
        case "si:SiFirst":
            return SiFirst;
        case "si:SiFishshell":
            return SiFishshell;
        case "si:SiFitbit":
            return SiFitbit;
        case "si:SiFivem":
            return SiFivem;
        case "si:SiFiverr":
            return SiFiverr;
        case "si:SiFizz":
            return SiFizz;
        case "si:SiFlashforge":
            return SiFlashforge;
        case "si:SiFlask":
            return SiFlask;
        case "si:SiFlat":
            return SiFlat;
        case "si:SiFlathub":
            return SiFlathub;
        case "si:SiFlatpak":
            return SiFlatpak;
        case "si:SiFlickr":
            return SiFlickr;
        case "si:SiFlightaware":
            return SiFlightaware;
        case "si:SiFlipboard":
            return SiFlipboard;
        case "si:SiFlipkart":
            return SiFlipkart;
        case "si:SiFloatplane":
            return SiFloatplane;
        case "si:SiFlood":
            return SiFlood;
    }
}