import type {IconType} from "react-icons";

import {
    SiFluentbit,
    SiFluentd,
    SiFluke,
    SiFlutter,
    SiFlux,
    SiFluxus,
    SiFlydotio,
    SiFlyway,
    SiFmod,
    SiFnac,
    SiFolium,
    SiFonoma,
    SiFontawesome,
    SiFontbase,
    SiFontforge,
    SiFoobar2000,
    SiFoodpanda,
    SiFord,
    SiForgejo,
    SiFormik,
    SiFormspree,
    SiFormstack,
    SiFortinet,
    SiFortran,
    SiFossa,
    SiFossilscm,
    SiFoundryvirtualtabletop,
    SiFoursquare,
    SiFoursquarecityguide,
    SiFox,
    SiFoxtel,
    SiFozzy,
    SiFramer,
    SiFramework,
    SiFramework7,
    SiFranprix,
    SiFrappe,
    SiFraunhofergesellschaft,
    SiFreebsd,
    SiFreecad,
    SiFreecodecamp,
    SiFreedesktopdotorg,
    SiFreelancer,
    SiFreelancermap,
    SiFreenas,
    SiFreenet,
    SiFreepik,
    SiFresh,
    SiFrontendmentor,
    SiFrontify,
    SiFsecure,
    SiFsharp,
    SiFubo,
    SiFueler,
    SiFugacloud,
    SiFujifilm,
    SiFujitsu,
    SiFunimation,
    SiFuraffinity,
    SiFurrynetwork,
    SiFusionauth,
    SiFuturelearn,
    SiG2,
    SiG2A,
    SiG2G,
    SiGalaxus,
    SiGameandwatch,
    SiGamebanana,
    SiGamedeveloper,
    SiGamejolt,
    SiGameloft,
    SiGamemaker,
    SiGamescience,
    SiGarmin,
    SiGatling,
    SiGatsby,
    SiGcore,
    SiGdal,
    SiGeant,
    SiGeeksforgeeks,
    SiGeneralelectric,
    SiGeneralmotors,
    SiGenius,
    SiGentoo,
    SiGeocaching,
    SiGeode,
    SiGeopandas,
    SiGerrit,
    SiGetx,
    SiGhost,
    SiGhostery,
    SiGimp,
    SiGin,
    SiGiphy,
    SiGit,
    SiGitbook,
    SiGitconnected,
    SiGitea,
    SiGitee,
    SiGitextensions,
    SiGitforwindows,
    SiGithub,
    SiGithubactions,
    SiGithubcopilot,
    SiGithubpages,
    SiGithubsponsors,
    SiGitignoredotio,
    SiGitkraken,
    SiGitlab,
    SiGitlfs,
    SiGitpod,
    SiGitter,
    SiGlassdoor,
    SiGlide,
    SiGlitch,
    SiGlobus,
    SiGlovo,
    SiGltf,
    SiGmail,
    SiGmx,
    SiGnome,
    SiGnometerminal,
    SiGnu,
    SiGnubash,
    SiGnuemacs,
    SiGnuicecat,
    SiGnuprivacyguard,
    SiGnusocial,
    SiGo,
    SiGocd,
    SiGodaddy,
    SiGodotengine,
    SiGofundme,
    SiGogdotcom,
    SiGojek,
    SiGoland,
    SiGoldenline,
    SiGoldmansachs,
    SiGoodreads,
    SiGoogle,
    SiGoogleadmob,
    SiGoogleads,
    SiGoogleadsense,
    SiGoogleanalytics,
    SiGoogleappsscript,
    SiGoogleassistant,
    SiGoogleauthenticator,
    SiGooglebigquery,
    SiGooglebigtable,
    SiGooglecalendar,
    SiGooglecampaignmanager360,
    SiGooglecardboard,
    SiGooglechat,
    SiGooglechrome,
    SiGooglechronicle,
    SiGoogleclassroom,
    SiGooglecloud,
    SiGooglecloudcomposer,
    SiGooglecloudspanner,
    SiGooglecloudstorage,
    SiGooglecolab,
    SiGooglecontaineroptimizedos,
    SiGoogledataflow,
    SiGoogledataproc,
    SiGoogledatastudio,
    SiGoogledisplayandvideo360,
    SiGoogledocs,
    SiGoogledrive,
    SiGoogleearth,
    SiGoogleearthengine,
    SiGooglefit,
    SiGooglefonts,
    SiGoogleforms,
    SiGooglegemini,
    SiGooglehome,
    SiGooglekeep,
    SiGooglelens,
    SiGooglemaps,
    SiGooglemarketingplatform,
    SiGooglemeet,
    SiGooglemessages,
    SiGooglenearby,
    SiGooglenews,
    SiGooglepay,
    SiGooglephotos,
    SiGoogleplay,
    SiGooglepubsub,
    SiGooglescholar,
    SiGooglesearchconsole,
    SiGooglesheets,
    SiGoogleslides,
    SiGooglestreetview,
    SiGoogletagmanager,
    SiGoogletasks,
    SiGoogletranslate,
    SiGotomeeting,
    SiGrab,
    SiGradle,
    SiGradleplaypublisher,
    SiGrafana,
    SiGrammarly,
    SiGrandfrais,
    SiGrapheneos,
    SiGraphite,
    SiGraphql,
    SiGrav,
    SiGravatar,
    SiGraylog,
    SiGreasyfork,
    SiGreatlearning,
    SiGreenhouse,
    SiGreensock,
    SiGriddotai,
    SiGridsome,
    SiGrocy,
    SiGroupme,
    SiGroupon,
    SiGrubhub,
    SiGrunt,
    SiGsk,
    SiGsmarenadotcom,
    SiGstreamer,
    SiGtk,
    SiGuangzhoumetro,
    SiGuilded,
    SiGuitarpro,
    SiGulp,
    SiGumroad,
    SiGumtree,
    SiGunicorn,
    SiGurobi,
    SiGusto,
    SiGutenberg,
    SiH3,
    SiHabr,
    SiHackaday,
    SiHackclub,
    SiHackerearth,
    SiHackernoon,
    SiHackerone,
    SiHackerrank,
    SiHackster,
    SiHackthebox,
    SiHal,
    SiHandlebarsdotjs,
    SiHandm,
    SiHandshakeProtocol,
    SiHandshake,
    SiHappycow,
    SiHarbor,
    SiHarmonyos,
    SiHashicorp,
    SiHashnode,
    SiHaskell,
    SiHasura,
    SiHatenabookmark,
    SiHaveibeenpwned,
    SiHaxe,
    SiHbo,
    SiHcl,
    SiHdfcbank,
    SiHeadlessui,
    SiHeadphonezone,
    SiHeadspace,
    SiHearth,
    SiHearthisdotat,
    SiHedera,
    SiHelium,
    SiHelix,
    SiHellofresh,
    SiHellyhansen,
    SiHelm,
    SiHelpdesk,
    SiHelpscout,
    SiHepsiemlak,
    SiHere,
    SiHermes,
    SiHeroku,
    SiHetzner,
    SiHevy,
    SiHexlet,
    SiHexo,
    SiHey,
    SiHibernate,
    SiHibob,
    SiHilton,
    SiHiltonhotelsandresorts,
    SiHitachi,
    SiHiveBlockchain,
    SiHive,
    SiHivemq,
    SiHomarr,
    SiHomeadvisor,
    SiHomeassistant,
    SiHomeassistantcommunitystore,
    SiHomebrew,
    SiHomebridge,
    SiHomepage,
    SiHomify,
    SiHonda,
    SiHoney,
    SiHoneybadger,
    SiHoneygain,
    SiHono,
    SiHonor,
    SiHootsuite,
    SiHoppscotch,
    SiHostinger,
    SiHotelsdotcom,
    SiHotjar,
    SiHotwire,
    SiHoudini,
    SiHouzz,
    SiHp,
    SiHsbc,
    SiHtc,
    SiHtcvive,
    SiHtml5,
    SiHtmlacademy,
    SiHtmx,
    SiHtop,
    SiHttpie,
    SiHuawei,
    SiHubspot,
    SiHuggingface,
    SiHugo,
    SiHumblebundle,
    SiHumhub,
    SiHungryjacks,
    SiHusqvarna,
    SiHyper,
    SiHyperskill,
    SiHyperx,
    SiHypothesis,
    SiHyprland,
    SiHyundai,
    SiI18Next,
    SiI3,
    SiIata,
    SiIbeacon,
    SiIberia,
    SiIced,
    SiIceland,
    SiIcicibank,
    SiIcinga,
    SiIcloud,
    SiIcomoon,
    SiIcon,
    SiIconfinder,
    SiIconify,
    SiIconjar,
    SiIcons8,
    SiIcq,
    SiIeee,
    SiIfixit,
    SiIfood,
    SiIfttt,
    SiIgdb,
    SiIgn,
    SiIheartradio,
    SiIkea,
    SiIledefrancemobilites,
    SiImagedotsc,
    SiImagej,
    SiImdb,
    SiImessage,
    SiImgur,
    SiImmer,
    SiImmich,
    SiImou,
    SiImprovmx,
    SiIndeed,
    SiIndiansuperleague,
    SiIndiehackers,
    SiIndigo,
    SiInductiveautomation,
    SiInertia,
    SiInfiniti,
    SiInfluxdb,
    SiInfomaniak,
    SiInfoq,
    SiInformatica,
    SiInfosys,
    SiInfracost,
    SiIngress,
    SiInkdrop,
    SiInkscape,
    SiInoreader,
    SiInsomnia,
    SiInspire,
    SiInsta360,
    SiInstacart,
    SiInstagram,
    SiInstapaper,
    SiInstatus,
    SiInstructables,
    SiInstructure,
    SiIntel,
    SiIntellijidea,
    SiInteractiondesignfoundation,
    SiInteractjs,
    SiInterbase,
    SiIntercom,
    SiIntermarche,
    SiInternetarchive,
    SiInternetcomputer,
    SiIntigriti,
    SiIntuit,
    SiInvision,
    SiInvoiceninja,
    SiIobroker,
    SiIonic,
    SiIonos,
    SiIos,
    SiIota,
    SiIpfs,
    SiIris,
    SiIrobot,
    SiIsc2,
    SiIssuu,
    SiIstio,
    SiItchdotio,
    SiIterm2,
    SiItunes,
    SiItvx,
    SiIveco,
    SiJabber,
    SiJaeger,
    SiJaguar,
    SiJamboard,
    SiJameson,
    SiJamstack,
    SiJapanairlines,
    SiJasmine,
    SiJavascript,
    SiJbl,
    SiJcb,
    SiJeep,
    SiJekyll,
    SiJellyfin,
    SiJenkins,
    SiJest,
    SiJet,
    SiJetblue,
    SiJetbrains,
    SiJetpackcompose,
    SiJfrog,
    SiJfrogpipelines,
    SiJhipster,
    SiJinja,
    SiJira,
    SiJirasoftware,
    SiJitpack,
    SiJitsi,
    SiJohndeere,
    SiJoomla,
    SiJoplin,
    SiJordan,
    SiJouav,
    SiJovian,
    SiJpeg,
    SiJquery,
    SiJrgroup,
    SiJsdelivr,
    SiJsfiddle,
    SiJson,
    SiJsonwebtokens,
    SiJsr,
    SiJss,
    SiJuce,
    SiJuejin,
    SiJuke,
    SiJulia,
    SiJunipernetworks,
    SiJunit5,
    SiJupyter,
    SiJusteat,
    SiJustgiving,
    SiK3S,
    SiK6,
    SiKaggle,
    SiKagi,
    SiKahoot,
    SiKaios,
    SiKakao,
    SiKakaotalk,
    SiKalilinux,
    SiKamailio,
    SiKaniko,
    SiKarlsruherverkehrsverbund,
    SiKasasmart,
    SiKashflow,
    SiKaspersky,
    SiKatacoda,
    SiKatana,
    SiKaufland,
    SiKde,
    SiKdenlive,
    SiKdeplasma,
    SiKedro,
    SiKeenetic,
    SiKeepachangelog,
    SiKeepassxc,
    SiKeeper,
    SiKeeweb,
    SiKentico,
    SiKeras,
    SiKeybase,
    SiKeycdn,
    SiKeycloak,
    SiKeystone,
    SiKfc,
    SiKhanacademy,
    SiKhronosgroup,
    SiKia,
    SiKibana,
    SiKicad,
    SiKick,
    SiKickstarter,
    SiKik,
    SiKingstontechnology,
    SiKinopoisk,
    SiKinsta,
    SiKirby,
    SiKit,
    SiKitsu,
    SiKlarna,
    SiKleinanzeigen,
    SiKlm,
    SiKlook,
    SiKnative,
    SiKnexdotjs,
    SiKnime,
    SiKnip,
    SiKnowledgebase,
    SiKnown,
    SiKoa,
    SiKoc,
    SiKodak,
    SiKodi,
    SiKoenigsegg,
    SiKofax,
    SiKofi,
    SiKomoot,
    SiKonami,
    SiKong,
    SiKongregate,
    SiKonva,
    SiKotlin,
    SiKoyeb,
    SiKrita,
    SiKtm,
    SiKtor,
    SiKuaishou,
    SiKubernetes,
    SiKubuntu,
    SiKucoin,
    SiKueski,
    SiKuma,
    SiKununu,
    SiKuula,
    SiKx,
    SiKyocera,
    SiLabview,
    SiLada,
    SiLamborghini,
    SiLandrover,
    SiLangchain,
    SiLanguagetool,
    SiLapce,
    SiLaragon,
    SiLaravel,
    SiLaravelhorizon,
    SiLaravelnova,
    SiLastdotfm,
    SiLastpass,
    SiLatex,
    SiLaunchpad,
    SiLazarus,
    SiLazyvim,
    SiLbry,
    SiLeaderprice,
    SiLeaflet,
    SiLeagueoflegends,
    SiLeanpub,
    SiLeetcode,
    SiLefthook,
    SiLegacygames,
    SiLeica,
    SiLemmy,
    SiLemonsqueezy,
    SiLenovo,
    SiLens,
    SiLeptos,
    SiLequipe,
    SiLerna,
    SiLeroymerlin,
    SiLeslibraires,
    SiLess,
    SiLetsencrypt,
    SiLetterboxd,
    SiLevelsdotfyi,
    SiLg,
    SiLiberadotchat,
    SiLiberapay,
    SiLibrariesdotio,
    SiLibrarything,
    SiLibreoffice,
    SiLibreofficebase,
    SiLibreofficecalc,
    SiLibreofficedraw,
    SiLibreofficeimpress,
    SiLibreofficemath,
    SiLibreofficewriter,
    SiLibretranslate,
    SiLibretube,
    SiLibrewolf,
    SiLibuv,
    SiLichess,
    SiLidl,
    SiLifx,
    SiLightburn,
    SiLighthouse,
    SiLightning,
    SiLimesurvey,
    SiLine,
    SiLineageos,
    SiLinear,
    SiLining,
    SiLinkedin,
    SiLinkerd,
    SiLinkfire,
    SiLinksys,
    SiLinktree,
    SiLinphone,
    SiLintcode,
    SiLinux,
    SiLinuxcontainers,
    SiLinuxfoundation,
    SiLinuxmint,
    SiLinuxprofessionalinstitute,
    SiLinuxserver,
    SiLionair,
    SiLiquibase,
    SiListmonk,
    SiLit,
    SiLitecoin,
    SiLiteral,
    SiLitiengine,
    SiLivechat,
    SiLivejournal,
    SiLivewire,
    SiLlvm,
    SiLmms,
    SiLobsters,
    SiLocal,
    SiLodash,
    SiLogitech,
    SiLogitechg,
    SiLogmein,
    SiLogseq,
    SiLogstash,
    SiLooker,
    SiLoom,
    SiLoop,
    SiLoopback,
    SiLootcrate,
    SiLospec,
    SiLotpolishairlines,
    SiLtspice,
    SiLua,
    SiLubuntu,
    SiLucia,
    SiLucid,
    SiLucide,
    SiLudwig,
    SiLufthansa,
    SiLumen,
    SiLunacy,
    SiLutris,
    SiLvgl,
    SiLydia,
    SiLyft,
    SiMaas,
    SiMacos,
    SiMacpaw,
    SiMacys,
    SiMagasinsu,
    SiMagento,
    SiMagic,
    SiMagisk,
    SiMahindra,
    SiMailboxdotorg,
    SiMailchimp,
    SiMaildotcom,
    SiMaildotru,
    SiMailgun,
    SiMailtrap,
    SiMainwp,
    SiMajorleaguehacking,
    SiMake,
    SiMakerbot,
    SiMalt,
    SiMalwarebytes,
    SiMambaui,
    SiMamp,
    SiMan,
    SiManageiq,
    SiManjaro,
    SiMantine,
    SiMapbox,
    SiMapillary,
    SiMaplibre,
    SiMaptiler,
    SiMariadb,
    SiMariadbfoundation,
    SiMarkdown,
    SiMarketo,
    SiMarko,
    SiMarriott,
    SiMarvelapp,
    SiMaserati,
    SiMastercard,
    SiMastercomfig,
    SiMastodon,
    SiMaterialdesign,
    SiMaterialdesignicons,
    SiMaterialformkdocs,
    SiMatillion,
    SiMatomo,
    SiMatrix,
    SiMatterdotjs,
    SiMattermost,
    SiMatternet,
    SiMautic,
    SiMax,
    SiMaxplanckgesellschaft,
    SiMaytag,
    SiMazda,
    SiMaze,
    SiMcafee,
    SiMcdonalds,
    SiMclaren,
    SiMdbook,
    SiMdnwebdocs,
    SiMdx,
    SiMediafire,
    SiMediamarkt,
    SiMediapipe,
    SiMediatek,
    SiMedibangpaint,
    SiMedium,
    SiMedusa,
    SiMeetup,
    SiMega,
    SiMeilisearch,
    SiMeituan,
    SiMeizu,
    SiMendeley,
    SiMentorcruise,
    SiMercadopago,
    SiMercedes,
    SiMerck,
    SiMercurial,
    SiMermaid,
    SiMessenger,
    SiMeta,
    SiMetabase,
    SiMetacritic,
    SiMetafilter,
    SiMetasploit,
    SiMeteor,
    SiMetro,
    SiMetrodelaciudaddemexico,
    SiMetrodemadrid,
    SiMetrodeparis,
    SiMewe,
    SiMg,
    SiMicrobit,
    SiMicrodotblog,
    SiMicroeditor,
    SiMicrogenetics,
    SiMicropython,
    SiMicrostation,
    SiMicrostrategy,
    SiMidi,
    SiMigadu,
    SiMihoyo,
    SiMikrotik,
    SiMilanote,
    SiMilvus,
    SiMinds,
    SiMinetest,
    SiMingww64,
    SiMini,
    SiMinio,
    SiMintlify,
    SiMinutemailer,
    SiMiraheze,
    SiMiro,
    SiMisskey,
    SiMitsubishi,
    SiMix,
    SiMixcloud,
    SiMixpanel,
    SiMlb,
    SiMlflow,
    SiMobx,
    SiMobxstatetree,
    SiMocha,
    SiMockserviceworker,
    SiModal,
    SiModin,
    SiModrinth,
    SiModx,
    SiMojeek,
    SiMoleculer,
    SiMomenteo,
    SiMonero,
    SiMoneygram,
    SiMongodb,
    SiMongoose,
    SiMongoosedotws,
    SiMonica,
    SiMonkeytie,
    SiMonkeytype,
    SiMonogame,
    SiMonoprix,
    SiMonster,
    SiMonzo,
    SiMoo,
    SiMoodle,
    SiMoonrepo,
    SiMoq,
    SiMoqups,
    SiMorrisons,
    SiMoscowmetro,
    SiMotorola,
    SiMovistar,
    SiMozilla,
    SiMpv,
    SiMqtt,
    SiMsi,
    SiMsibusiness,
    SiMta,
    SiMtr,
    SiMubi,
    SiMui,
    SiMulesoft,
    SiMuller,
    SiMullvad,
    SiMultisim,
    SiMumble,
    SiMuo,
    SiMural,
    SiMusescore,
    SiMusicbrainz,
    SiMxlinux,
    SiMyanimelist,
    SiMyget,
    SiMyob,
    SiMyspace,
    SiMysql,
    SiN26,
    SiN8N,
    SiNamebase,
    SiNamecheap,
    SiNamemc,
    SiNamesilo,
    SiNamuwiki,
    SiNano,
    SiNanostores,
    SiNapster,
    SiNasa,
    SiNationalgrid,
    SiNationalrail,
    SiNativescript,
    SiNatsdotio,
    SiNaver,
    SiNba,
    SiNbb,
    SiNbc,
    SiNdr,
    SiNear,
    SiNebula,
    SiNec,
    SiNeo4J,
    SiNeovim,
    SiNeptune,
    SiNestjs,
    SiNetapp,
    SiNetbsd,
    SiNetcup,
    SiNetdata,
    SiNeteasecloudmusic,
    SiNetflix,
    SiNetgear,
    SiNetlify,
    SiNette,
    SiNetto,
    SiNeutralinojs,
    SiNewbalance,
    SiNewegg,
    SiNewjapanprowrestling,
    SiNewrelic,
    SiNewyorktimes,
    SiNexon,
    SiNextbilliondotai,
    SiNextcloud,
    SiNextdns,
    SiNextdoor,
    SiNextdotjs,
    SiNextra,
    SiNextui,
    SiNexusmods,
    SiNfc,
    SiNginx,
    SiNginxproxymanager,
    SiNgrok,
    SiNgrx,
    SiNhl,
    SiNicehash,
    SiNiconico,
    SiNike,
    SiNikon,
    SiNim,
    SiNintendo,
    SiNintendo3Ds,
    SiNintendogamecube,
    SiNintendoswitch,
    SiNissan,
    SiNixos,
    SiNodedotjs,
    SiNodemon,
    SiNodered,
    SiNokia,
    SiNomad,
    SiNorco,
    SiNordicsemiconductor,
    SiNordvpn,
    SiNormalizedotcss,
    SiNorton,
    SiNorwegian,
    SiNotepadplusplus,
    SiNotion,
    SiNotist,
    SiNounproject,
    SiNovu,
    SiNow,
    SiNpm,
    SiNrwl,
    SiNsis,
    SiNtfy,
    SiNubank,
    SiNucleo,
    SiNuget,
    SiNuke,
    SiNumba,
    SiNumpy,
    SiNunjucks,
    SiNushell,
    SiNutanix,
    SiNuxtdotjs,
    SiNvidia,
    SiNvm,
    SiNx,
    SiNxp,
    SiNzxt,
    SiO2,
    SiObb,
    SiObservable,
    SiObsidian,
    SiObsstudio,
    SiOcaml,
    SiOclif,
    SiOctanerender,
    SiOctave,
    SiOctobercms,
    SiOctoprint,
    SiOctopusdeploy,
    SiOculus,
    SiOdin,
    SiOdnoklassniki,
    SiOdoo,
    SiOdysee,
    SiOhdear,
    SiOkcupid,
    SiOkta,
    SiOkx,
    SiOllama,
    SiOneplus,
    SiOnlyfans,
    SiOnlyoffice,
    SiOnnx,
    SiOnstar,
    SiOpel,
    SiOpenaccess,
    SiOpenai,
    SiOpenaigym,
    SiOpenapiinitiative,
} from "react-icons/si"

export function nameToReactIcon_si_1(iconName: string): IconType | undefined {

    switch(iconName) {
        case "si:SiFluentbit":
            return SiFluentbit;
        case "si:SiFluentd":
            return SiFluentd;
        case "si:SiFluke":
            return SiFluke;
        case "si:SiFlutter":
            return SiFlutter;
        case "si:SiFlux":
            return SiFlux;
        case "si:SiFluxus":
            return SiFluxus;
        case "si:SiFlydotio":
            return SiFlydotio;
        case "si:SiFlyway":
            return SiFlyway;
        case "si:SiFmod":
            return SiFmod;
        case "si:SiFnac":
            return SiFnac;
        case "si:SiFolium":
            return SiFolium;
        case "si:SiFonoma":
            return SiFonoma;
        case "si:SiFontawesome":
            return SiFontawesome;
        case "si:SiFontbase":
            return SiFontbase;
        case "si:SiFontforge":
            return SiFontforge;
        case "si:SiFoobar2000":
            return SiFoobar2000;
        case "si:SiFoodpanda":
            return SiFoodpanda;
        case "si:SiFord":
            return SiFord;
        case "si:SiForgejo":
            return SiForgejo;
        case "si:SiFormik":
            return SiFormik;
        case "si:SiFormspree":
            return SiFormspree;
        case "si:SiFormstack":
            return SiFormstack;
        case "si:SiFortinet":
            return SiFortinet;
        case "si:SiFortran":
            return SiFortran;
        case "si:SiFossa":
            return SiFossa;
        case "si:SiFossilscm":
            return SiFossilscm;
        case "si:SiFoundryvirtualtabletop":
            return SiFoundryvirtualtabletop;
        case "si:SiFoursquare":
            return SiFoursquare;
        case "si:SiFoursquarecityguide":
            return SiFoursquarecityguide;
        case "si:SiFox":
            return SiFox;
        case "si:SiFoxtel":
            return SiFoxtel;
        case "si:SiFozzy":
            return SiFozzy;
        case "si:SiFramer":
            return SiFramer;
        case "si:SiFramework":
            return SiFramework;
        case "si:SiFramework7":
            return SiFramework7;
        case "si:SiFranprix":
            return SiFranprix;
        case "si:SiFrappe":
            return SiFrappe;
        case "si:SiFraunhofergesellschaft":
            return SiFraunhofergesellschaft;
        case "si:SiFreebsd":
            return SiFreebsd;
        case "si:SiFreecad":
            return SiFreecad;
        case "si:SiFreecodecamp":
            return SiFreecodecamp;
        case "si:SiFreedesktopdotorg":
            return SiFreedesktopdotorg;
        case "si:SiFreelancer":
            return SiFreelancer;
        case "si:SiFreelancermap":
            return SiFreelancermap;
        case "si:SiFreenas":
            return SiFreenas;
        case "si:SiFreenet":
            return SiFreenet;
        case "si:SiFreepik":
            return SiFreepik;
        case "si:SiFresh":
            return SiFresh;
        case "si:SiFrontendmentor":
            return SiFrontendmentor;
        case "si:SiFrontify":
            return SiFrontify;
        case "si:SiFsecure":
            return SiFsecure;
        case "si:SiFsharp":
            return SiFsharp;
        case "si:SiFubo":
            return SiFubo;
        case "si:SiFueler":
            return SiFueler;
        case "si:SiFugacloud":
            return SiFugacloud;
        case "si:SiFujifilm":
            return SiFujifilm;
        case "si:SiFujitsu":
            return SiFujitsu;
        case "si:SiFunimation":
            return SiFunimation;
        case "si:SiFuraffinity":
            return SiFuraffinity;
        case "si:SiFurrynetwork":
            return SiFurrynetwork;
        case "si:SiFusionauth":
            return SiFusionauth;
        case "si:SiFuturelearn":
            return SiFuturelearn;
        case "si:SiG2":
            return SiG2;
        case "si:SiG2A":
            return SiG2A;
        case "si:SiG2G":
            return SiG2G;
        case "si:SiGalaxus":
            return SiGalaxus;
        case "si:SiGameandwatch":
            return SiGameandwatch;
        case "si:SiGamebanana":
            return SiGamebanana;
        case "si:SiGamedeveloper":
            return SiGamedeveloper;
        case "si:SiGamejolt":
            return SiGamejolt;
        case "si:SiGameloft":
            return SiGameloft;
        case "si:SiGamemaker":
            return SiGamemaker;
        case "si:SiGamescience":
            return SiGamescience;
        case "si:SiGarmin":
            return SiGarmin;
        case "si:SiGatling":
            return SiGatling;
        case "si:SiGatsby":
            return SiGatsby;
        case "si:SiGcore":
            return SiGcore;
        case "si:SiGdal":
            return SiGdal;
        case "si:SiGeant":
            return SiGeant;
        case "si:SiGeeksforgeeks":
            return SiGeeksforgeeks;
        case "si:SiGeneralelectric":
            return SiGeneralelectric;
        case "si:SiGeneralmotors":
            return SiGeneralmotors;
        case "si:SiGenius":
            return SiGenius;
        case "si:SiGentoo":
            return SiGentoo;
        case "si:SiGeocaching":
            return SiGeocaching;
        case "si:SiGeode":
            return SiGeode;
        case "si:SiGeopandas":
            return SiGeopandas;
        case "si:SiGerrit":
            return SiGerrit;
        case "si:SiGetx":
            return SiGetx;
        case "si:SiGhost":
            return SiGhost;
        case "si:SiGhostery":
            return SiGhostery;
        case "si:SiGimp":
            return SiGimp;
        case "si:SiGin":
            return SiGin;
        case "si:SiGiphy":
            return SiGiphy;
        case "si:SiGit":
            return SiGit;
        case "si:SiGitbook":
            return SiGitbook;
        case "si:SiGitconnected":
            return SiGitconnected;
        case "si:SiGitea":
            return SiGitea;
        case "si:SiGitee":
            return SiGitee;
        case "si:SiGitextensions":
            return SiGitextensions;
        case "si:SiGitforwindows":
            return SiGitforwindows;
        case "si:SiGithub":
            return SiGithub;
        case "si:SiGithubactions":
            return SiGithubactions;
        case "si:SiGithubcopilot":
            return SiGithubcopilot;
        case "si:SiGithubpages":
            return SiGithubpages;
        case "si:SiGithubsponsors":
            return SiGithubsponsors;
        case "si:SiGitignoredotio":
            return SiGitignoredotio;
        case "si:SiGitkraken":
            return SiGitkraken;
        case "si:SiGitlab":
            return SiGitlab;
        case "si:SiGitlfs":
            return SiGitlfs;
        case "si:SiGitpod":
            return SiGitpod;
        case "si:SiGitter":
            return SiGitter;
        case "si:SiGlassdoor":
            return SiGlassdoor;
        case "si:SiGlide":
            return SiGlide;
        case "si:SiGlitch":
            return SiGlitch;
        case "si:SiGlobus":
            return SiGlobus;
        case "si:SiGlovo":
            return SiGlovo;
        case "si:SiGltf":
            return SiGltf;
        case "si:SiGmail":
            return SiGmail;
        case "si:SiGmx":
            return SiGmx;
        case "si:SiGnome":
            return SiGnome;
        case "si:SiGnometerminal":
            return SiGnometerminal;
        case "si:SiGnu":
            return SiGnu;
        case "si:SiGnubash":
            return SiGnubash;
        case "si:SiGnuemacs":
            return SiGnuemacs;
        case "si:SiGnuicecat":
            return SiGnuicecat;
        case "si:SiGnuprivacyguard":
            return SiGnuprivacyguard;
        case "si:SiGnusocial":
            return SiGnusocial;
        case "si:SiGo":
            return SiGo;
        case "si:SiGocd":
            return SiGocd;
        case "si:SiGodaddy":
            return SiGodaddy;
        case "si:SiGodotengine":
            return SiGodotengine;
        case "si:SiGofundme":
            return SiGofundme;
        case "si:SiGogdotcom":
            return SiGogdotcom;
        case "si:SiGojek":
            return SiGojek;
        case "si:SiGoland":
            return SiGoland;
        case "si:SiGoldenline":
            return SiGoldenline;
        case "si:SiGoldmansachs":
            return SiGoldmansachs;
        case "si:SiGoodreads":
            return SiGoodreads;
        case "si:SiGoogle":
            return SiGoogle;
        case "si:SiGoogleadmob":
            return SiGoogleadmob;
        case "si:SiGoogleads":
            return SiGoogleads;
        case "si:SiGoogleadsense":
            return SiGoogleadsense;
        case "si:SiGoogleanalytics":
            return SiGoogleanalytics;
        case "si:SiGoogleappsscript":
            return SiGoogleappsscript;
        case "si:SiGoogleassistant":
            return SiGoogleassistant;
        case "si:SiGoogleauthenticator":
            return SiGoogleauthenticator;
        case "si:SiGooglebigquery":
            return SiGooglebigquery;
        case "si:SiGooglebigtable":
            return SiGooglebigtable;
        case "si:SiGooglecalendar":
            return SiGooglecalendar;
        case "si:SiGooglecampaignmanager360":
            return SiGooglecampaignmanager360;
        case "si:SiGooglecardboard":
            return SiGooglecardboard;
        case "si:SiGooglechat":
            return SiGooglechat;
        case "si:SiGooglechrome":
            return SiGooglechrome;
        case "si:SiGooglechronicle":
            return SiGooglechronicle;
        case "si:SiGoogleclassroom":
            return SiGoogleclassroom;
        case "si:SiGooglecloud":
            return SiGooglecloud;
        case "si:SiGooglecloudcomposer":
            return SiGooglecloudcomposer;
        case "si:SiGooglecloudspanner":
            return SiGooglecloudspanner;
        case "si:SiGooglecloudstorage":
            return SiGooglecloudstorage;
        case "si:SiGooglecolab":
            return SiGooglecolab;
        case "si:SiGooglecontaineroptimizedos":
            return SiGooglecontaineroptimizedos;
        case "si:SiGoogledataflow":
            return SiGoogledataflow;
        case "si:SiGoogledataproc":
            return SiGoogledataproc;
        case "si:SiGoogledatastudio":
            return SiGoogledatastudio;
        case "si:SiGoogledisplayandvideo360":
            return SiGoogledisplayandvideo360;
        case "si:SiGoogledocs":
            return SiGoogledocs;
        case "si:SiGoogledrive":
            return SiGoogledrive;
        case "si:SiGoogleearth":
            return SiGoogleearth;
        case "si:SiGoogleearthengine":
            return SiGoogleearthengine;
        case "si:SiGooglefit":
            return SiGooglefit;
        case "si:SiGooglefonts":
            return SiGooglefonts;
        case "si:SiGoogleforms":
            return SiGoogleforms;
        case "si:SiGooglegemini":
            return SiGooglegemini;
        case "si:SiGooglehome":
            return SiGooglehome;
        case "si:SiGooglekeep":
            return SiGooglekeep;
        case "si:SiGooglelens":
            return SiGooglelens;
        case "si:SiGooglemaps":
            return SiGooglemaps;
        case "si:SiGooglemarketingplatform":
            return SiGooglemarketingplatform;
        case "si:SiGooglemeet":
            return SiGooglemeet;
        case "si:SiGooglemessages":
            return SiGooglemessages;
        case "si:SiGooglenearby":
            return SiGooglenearby;
        case "si:SiGooglenews":
            return SiGooglenews;
        case "si:SiGooglepay":
            return SiGooglepay;
        case "si:SiGooglephotos":
            return SiGooglephotos;
        case "si:SiGoogleplay":
            return SiGoogleplay;
        case "si:SiGooglepubsub":
            return SiGooglepubsub;
        case "si:SiGooglescholar":
            return SiGooglescholar;
        case "si:SiGooglesearchconsole":
            return SiGooglesearchconsole;
        case "si:SiGooglesheets":
            return SiGooglesheets;
        case "si:SiGoogleslides":
            return SiGoogleslides;
        case "si:SiGooglestreetview":
            return SiGooglestreetview;
        case "si:SiGoogletagmanager":
            return SiGoogletagmanager;
        case "si:SiGoogletasks":
            return SiGoogletasks;
        case "si:SiGoogletranslate":
            return SiGoogletranslate;
        case "si:SiGotomeeting":
            return SiGotomeeting;
        case "si:SiGrab":
            return SiGrab;
        case "si:SiGradle":
            return SiGradle;
        case "si:SiGradleplaypublisher":
            return SiGradleplaypublisher;
        case "si:SiGrafana":
            return SiGrafana;
        case "si:SiGrammarly":
            return SiGrammarly;
        case "si:SiGrandfrais":
            return SiGrandfrais;
        case "si:SiGrapheneos":
            return SiGrapheneos;
        case "si:SiGraphite":
            return SiGraphite;
        case "si:SiGraphql":
            return SiGraphql;
        case "si:SiGrav":
            return SiGrav;
        case "si:SiGravatar":
            return SiGravatar;
        case "si:SiGraylog":
            return SiGraylog;
        case "si:SiGreasyfork":
            return SiGreasyfork;
        case "si:SiGreatlearning":
            return SiGreatlearning;
        case "si:SiGreenhouse":
            return SiGreenhouse;
        case "si:SiGreensock":
            return SiGreensock;
        case "si:SiGriddotai":
            return SiGriddotai;
        case "si:SiGridsome":
            return SiGridsome;
        case "si:SiGrocy":
            return SiGrocy;
        case "si:SiGroupme":
            return SiGroupme;
        case "si:SiGroupon":
            return SiGroupon;
        case "si:SiGrubhub":
            return SiGrubhub;
        case "si:SiGrunt":
            return SiGrunt;
        case "si:SiGsk":
            return SiGsk;
        case "si:SiGsmarenadotcom":
            return SiGsmarenadotcom;
        case "si:SiGstreamer":
            return SiGstreamer;
        case "si:SiGtk":
            return SiGtk;
        case "si:SiGuangzhoumetro":
            return SiGuangzhoumetro;
        case "si:SiGuilded":
            return SiGuilded;
        case "si:SiGuitarpro":
            return SiGuitarpro;
        case "si:SiGulp":
            return SiGulp;
        case "si:SiGumroad":
            return SiGumroad;
        case "si:SiGumtree":
            return SiGumtree;
        case "si:SiGunicorn":
            return SiGunicorn;
        case "si:SiGurobi":
            return SiGurobi;
        case "si:SiGusto":
            return SiGusto;
        case "si:SiGutenberg":
            return SiGutenberg;
        case "si:SiH3":
            return SiH3;
        case "si:SiHabr":
            return SiHabr;
        case "si:SiHackaday":
            return SiHackaday;
        case "si:SiHackclub":
            return SiHackclub;
        case "si:SiHackerearth":
            return SiHackerearth;
        case "si:SiHackernoon":
            return SiHackernoon;
        case "si:SiHackerone":
            return SiHackerone;
        case "si:SiHackerrank":
            return SiHackerrank;
        case "si:SiHackster":
            return SiHackster;
        case "si:SiHackthebox":
            return SiHackthebox;
        case "si:SiHal":
            return SiHal;
        case "si:SiHandlebarsdotjs":
            return SiHandlebarsdotjs;
        case "si:SiHandm":
            return SiHandm;
        case "si:SiHandshakeProtocol":
            return SiHandshakeProtocol;
        case "si:SiHandshake":
            return SiHandshake;
        case "si:SiHappycow":
            return SiHappycow;
        case "si:SiHarbor":
            return SiHarbor;
        case "si:SiHarmonyos":
            return SiHarmonyos;
        case "si:SiHashicorp":
            return SiHashicorp;
        case "si:SiHashnode":
            return SiHashnode;
        case "si:SiHaskell":
            return SiHaskell;
        case "si:SiHasura":
            return SiHasura;
        case "si:SiHatenabookmark":
            return SiHatenabookmark;
        case "si:SiHaveibeenpwned":
            return SiHaveibeenpwned;
        case "si:SiHaxe":
            return SiHaxe;
        case "si:SiHbo":
            return SiHbo;
        case "si:SiHcl":
            return SiHcl;
        case "si:SiHdfcbank":
            return SiHdfcbank;
        case "si:SiHeadlessui":
            return SiHeadlessui;
        case "si:SiHeadphonezone":
            return SiHeadphonezone;
        case "si:SiHeadspace":
            return SiHeadspace;
        case "si:SiHearth":
            return SiHearth;
        case "si:SiHearthisdotat":
            return SiHearthisdotat;
        case "si:SiHedera":
            return SiHedera;
        case "si:SiHelium":
            return SiHelium;
        case "si:SiHelix":
            return SiHelix;
        case "si:SiHellofresh":
            return SiHellofresh;
        case "si:SiHellyhansen":
            return SiHellyhansen;
        case "si:SiHelm":
            return SiHelm;
        case "si:SiHelpdesk":
            return SiHelpdesk;
        case "si:SiHelpscout":
            return SiHelpscout;
        case "si:SiHepsiemlak":
            return SiHepsiemlak;
        case "si:SiHere":
            return SiHere;
        case "si:SiHermes":
            return SiHermes;
        case "si:SiHeroku":
            return SiHeroku;
        case "si:SiHetzner":
            return SiHetzner;
        case "si:SiHevy":
            return SiHevy;
        case "si:SiHexlet":
            return SiHexlet;
        case "si:SiHexo":
            return SiHexo;
        case "si:SiHey":
            return SiHey;
        case "si:SiHibernate":
            return SiHibernate;
        case "si:SiHibob":
            return SiHibob;
        case "si:SiHilton":
            return SiHilton;
        case "si:SiHiltonhotelsandresorts":
            return SiHiltonhotelsandresorts;
        case "si:SiHitachi":
            return SiHitachi;
        case "si:SiHiveBlockchain":
            return SiHiveBlockchain;
        case "si:SiHive":
            return SiHive;
        case "si:SiHivemq":
            return SiHivemq;
        case "si:SiHomarr":
            return SiHomarr;
        case "si:SiHomeadvisor":
            return SiHomeadvisor;
        case "si:SiHomeassistant":
            return SiHomeassistant;
        case "si:SiHomeassistantcommunitystore":
            return SiHomeassistantcommunitystore;
        case "si:SiHomebrew":
            return SiHomebrew;
        case "si:SiHomebridge":
            return SiHomebridge;
        case "si:SiHomepage":
            return SiHomepage;
        case "si:SiHomify":
            return SiHomify;
        case "si:SiHonda":
            return SiHonda;
        case "si:SiHoney":
            return SiHoney;
        case "si:SiHoneybadger":
            return SiHoneybadger;
        case "si:SiHoneygain":
            return SiHoneygain;
        case "si:SiHono":
            return SiHono;
        case "si:SiHonor":
            return SiHonor;
        case "si:SiHootsuite":
            return SiHootsuite;
        case "si:SiHoppscotch":
            return SiHoppscotch;
        case "si:SiHostinger":
            return SiHostinger;
        case "si:SiHotelsdotcom":
            return SiHotelsdotcom;
        case "si:SiHotjar":
            return SiHotjar;
        case "si:SiHotwire":
            return SiHotwire;
        case "si:SiHoudini":
            return SiHoudini;
        case "si:SiHouzz":
            return SiHouzz;
        case "si:SiHp":
            return SiHp;
        case "si:SiHsbc":
            return SiHsbc;
        case "si:SiHtc":
            return SiHtc;
        case "si:SiHtcvive":
            return SiHtcvive;
        case "si:SiHtml5":
            return SiHtml5;
        case "si:SiHtmlacademy":
            return SiHtmlacademy;
        case "si:SiHtmx":
            return SiHtmx;
        case "si:SiHtop":
            return SiHtop;
        case "si:SiHttpie":
            return SiHttpie;
        case "si:SiHuawei":
            return SiHuawei;
        case "si:SiHubspot":
            return SiHubspot;
        case "si:SiHuggingface":
            return SiHuggingface;
        case "si:SiHugo":
            return SiHugo;
        case "si:SiHumblebundle":
            return SiHumblebundle;
        case "si:SiHumhub":
            return SiHumhub;
        case "si:SiHungryjacks":
            return SiHungryjacks;
        case "si:SiHusqvarna":
            return SiHusqvarna;
        case "si:SiHyper":
            return SiHyper;
        case "si:SiHyperskill":
            return SiHyperskill;
        case "si:SiHyperx":
            return SiHyperx;
        case "si:SiHypothesis":
            return SiHypothesis;
        case "si:SiHyprland":
            return SiHyprland;
        case "si:SiHyundai":
            return SiHyundai;
        case "si:SiI18Next":
            return SiI18Next;
        case "si:SiI3":
            return SiI3;
        case "si:SiIata":
            return SiIata;
        case "si:SiIbeacon":
            return SiIbeacon;
        case "si:SiIberia":
            return SiIberia;
        case "si:SiIced":
            return SiIced;
        case "si:SiIceland":
            return SiIceland;
        case "si:SiIcicibank":
            return SiIcicibank;
        case "si:SiIcinga":
            return SiIcinga;
        case "si:SiIcloud":
            return SiIcloud;
        case "si:SiIcomoon":
            return SiIcomoon;
        case "si:SiIcon":
            return SiIcon;
        case "si:SiIconfinder":
            return SiIconfinder;
        case "si:SiIconify":
            return SiIconify;
        case "si:SiIconjar":
            return SiIconjar;
        case "si:SiIcons8":
            return SiIcons8;
        case "si:SiIcq":
            return SiIcq;
        case "si:SiIeee":
            return SiIeee;
        case "si:SiIfixit":
            return SiIfixit;
        case "si:SiIfood":
            return SiIfood;
        case "si:SiIfttt":
            return SiIfttt;
        case "si:SiIgdb":
            return SiIgdb;
        case "si:SiIgn":
            return SiIgn;
        case "si:SiIheartradio":
            return SiIheartradio;
        case "si:SiIkea":
            return SiIkea;
        case "si:SiIledefrancemobilites":
            return SiIledefrancemobilites;
        case "si:SiImagedotsc":
            return SiImagedotsc;
        case "si:SiImagej":
            return SiImagej;
        case "si:SiImdb":
            return SiImdb;
        case "si:SiImessage":
            return SiImessage;
        case "si:SiImgur":
            return SiImgur;
        case "si:SiImmer":
            return SiImmer;
        case "si:SiImmich":
            return SiImmich;
        case "si:SiImou":
            return SiImou;
        case "si:SiImprovmx":
            return SiImprovmx;
        case "si:SiIndeed":
            return SiIndeed;
        case "si:SiIndiansuperleague":
            return SiIndiansuperleague;
        case "si:SiIndiehackers":
            return SiIndiehackers;
        case "si:SiIndigo":
            return SiIndigo;
        case "si:SiInductiveautomation":
            return SiInductiveautomation;
        case "si:SiInertia":
            return SiInertia;
        case "si:SiInfiniti":
            return SiInfiniti;
        case "si:SiInfluxdb":
            return SiInfluxdb;
        case "si:SiInfomaniak":
            return SiInfomaniak;
        case "si:SiInfoq":
            return SiInfoq;
        case "si:SiInformatica":
            return SiInformatica;
        case "si:SiInfosys":
            return SiInfosys;
        case "si:SiInfracost":
            return SiInfracost;
        case "si:SiIngress":
            return SiIngress;
        case "si:SiInkdrop":
            return SiInkdrop;
        case "si:SiInkscape":
            return SiInkscape;
        case "si:SiInoreader":
            return SiInoreader;
        case "si:SiInsomnia":
            return SiInsomnia;
        case "si:SiInspire":
            return SiInspire;
        case "si:SiInsta360":
            return SiInsta360;
        case "si:SiInstacart":
            return SiInstacart;
        case "si:SiInstagram":
            return SiInstagram;
        case "si:SiInstapaper":
            return SiInstapaper;
        case "si:SiInstatus":
            return SiInstatus;
        case "si:SiInstructables":
            return SiInstructables;
        case "si:SiInstructure":
            return SiInstructure;
        case "si:SiIntel":
            return SiIntel;
        case "si:SiIntellijidea":
            return SiIntellijidea;
        case "si:SiInteractiondesignfoundation":
            return SiInteractiondesignfoundation;
        case "si:SiInteractjs":
            return SiInteractjs;
        case "si:SiInterbase":
            return SiInterbase;
        case "si:SiIntercom":
            return SiIntercom;
        case "si:SiIntermarche":
            return SiIntermarche;
        case "si:SiInternetarchive":
            return SiInternetarchive;
        case "si:SiInternetcomputer":
            return SiInternetcomputer;
        case "si:SiIntigriti":
            return SiIntigriti;
        case "si:SiIntuit":
            return SiIntuit;
        case "si:SiInvision":
            return SiInvision;
        case "si:SiInvoiceninja":
            return SiInvoiceninja;
        case "si:SiIobroker":
            return SiIobroker;
        case "si:SiIonic":
            return SiIonic;
        case "si:SiIonos":
            return SiIonos;
        case "si:SiIos":
            return SiIos;
        case "si:SiIota":
            return SiIota;
        case "si:SiIpfs":
            return SiIpfs;
        case "si:SiIris":
            return SiIris;
        case "si:SiIrobot":
            return SiIrobot;
        case "si:SiIsc2":
            return SiIsc2;
        case "si:SiIssuu":
            return SiIssuu;
        case "si:SiIstio":
            return SiIstio;
        case "si:SiItchdotio":
            return SiItchdotio;
        case "si:SiIterm2":
            return SiIterm2;
        case "si:SiItunes":
            return SiItunes;
        case "si:SiItvx":
            return SiItvx;
        case "si:SiIveco":
            return SiIveco;
        case "si:SiJabber":
            return SiJabber;
        case "si:SiJaeger":
            return SiJaeger;
        case "si:SiJaguar":
            return SiJaguar;
        case "si:SiJamboard":
            return SiJamboard;
        case "si:SiJameson":
            return SiJameson;
        case "si:SiJamstack":
            return SiJamstack;
        case "si:SiJapanairlines":
            return SiJapanairlines;
        case "si:SiJasmine":
            return SiJasmine;
        case "si:SiJavascript":
            return SiJavascript;
        case "si:SiJbl":
            return SiJbl;
        case "si:SiJcb":
            return SiJcb;
        case "si:SiJeep":
            return SiJeep;
        case "si:SiJekyll":
            return SiJekyll;
        case "si:SiJellyfin":
            return SiJellyfin;
        case "si:SiJenkins":
            return SiJenkins;
        case "si:SiJest":
            return SiJest;
        case "si:SiJet":
            return SiJet;
        case "si:SiJetblue":
            return SiJetblue;
        case "si:SiJetbrains":
            return SiJetbrains;
        case "si:SiJetpackcompose":
            return SiJetpackcompose;
        case "si:SiJfrog":
            return SiJfrog;
        case "si:SiJfrogpipelines":
            return SiJfrogpipelines;
        case "si:SiJhipster":
            return SiJhipster;
        case "si:SiJinja":
            return SiJinja;
        case "si:SiJira":
            return SiJira;
        case "si:SiJirasoftware":
            return SiJirasoftware;
        case "si:SiJitpack":
            return SiJitpack;
        case "si:SiJitsi":
            return SiJitsi;
        case "si:SiJohndeere":
            return SiJohndeere;
        case "si:SiJoomla":
            return SiJoomla;
        case "si:SiJoplin":
            return SiJoplin;
        case "si:SiJordan":
            return SiJordan;
        case "si:SiJouav":
            return SiJouav;
        case "si:SiJovian":
            return SiJovian;
        case "si:SiJpeg":
            return SiJpeg;
        case "si:SiJquery":
            return SiJquery;
        case "si:SiJrgroup":
            return SiJrgroup;
        case "si:SiJsdelivr":
            return SiJsdelivr;
        case "si:SiJsfiddle":
            return SiJsfiddle;
        case "si:SiJson":
            return SiJson;
        case "si:SiJsonwebtokens":
            return SiJsonwebtokens;
        case "si:SiJsr":
            return SiJsr;
        case "si:SiJss":
            return SiJss;
        case "si:SiJuce":
            return SiJuce;
        case "si:SiJuejin":
            return SiJuejin;
        case "si:SiJuke":
            return SiJuke;
        case "si:SiJulia":
            return SiJulia;
        case "si:SiJunipernetworks":
            return SiJunipernetworks;
        case "si:SiJunit5":
            return SiJunit5;
        case "si:SiJupyter":
            return SiJupyter;
        case "si:SiJusteat":
            return SiJusteat;
        case "si:SiJustgiving":
            return SiJustgiving;
        case "si:SiK3S":
            return SiK3S;
        case "si:SiK6":
            return SiK6;
        case "si:SiKaggle":
            return SiKaggle;
        case "si:SiKagi":
            return SiKagi;
        case "si:SiKahoot":
            return SiKahoot;
        case "si:SiKaios":
            return SiKaios;
        case "si:SiKakao":
            return SiKakao;
        case "si:SiKakaotalk":
            return SiKakaotalk;
        case "si:SiKalilinux":
            return SiKalilinux;
        case "si:SiKamailio":
            return SiKamailio;
        case "si:SiKaniko":
            return SiKaniko;
        case "si:SiKarlsruherverkehrsverbund":
            return SiKarlsruherverkehrsverbund;
        case "si:SiKasasmart":
            return SiKasasmart;
        case "si:SiKashflow":
            return SiKashflow;
        case "si:SiKaspersky":
            return SiKaspersky;
        case "si:SiKatacoda":
            return SiKatacoda;
        case "si:SiKatana":
            return SiKatana;
        case "si:SiKaufland":
            return SiKaufland;
        case "si:SiKde":
            return SiKde;
        case "si:SiKdenlive":
            return SiKdenlive;
        case "si:SiKdeplasma":
            return SiKdeplasma;
        case "si:SiKedro":
            return SiKedro;
        case "si:SiKeenetic":
            return SiKeenetic;
        case "si:SiKeepachangelog":
            return SiKeepachangelog;
        case "si:SiKeepassxc":
            return SiKeepassxc;
        case "si:SiKeeper":
            return SiKeeper;
        case "si:SiKeeweb":
            return SiKeeweb;
        case "si:SiKentico":
            return SiKentico;
        case "si:SiKeras":
            return SiKeras;
        case "si:SiKeybase":
            return SiKeybase;
        case "si:SiKeycdn":
            return SiKeycdn;
        case "si:SiKeycloak":
            return SiKeycloak;
        case "si:SiKeystone":
            return SiKeystone;
        case "si:SiKfc":
            return SiKfc;
        case "si:SiKhanacademy":
            return SiKhanacademy;
        case "si:SiKhronosgroup":
            return SiKhronosgroup;
        case "si:SiKia":
            return SiKia;
        case "si:SiKibana":
            return SiKibana;
        case "si:SiKicad":
            return SiKicad;
        case "si:SiKick":
            return SiKick;
        case "si:SiKickstarter":
            return SiKickstarter;
        case "si:SiKik":
            return SiKik;
        case "si:SiKingstontechnology":
            return SiKingstontechnology;
        case "si:SiKinopoisk":
            return SiKinopoisk;
        case "si:SiKinsta":
            return SiKinsta;
        case "si:SiKirby":
            return SiKirby;
        case "si:SiKit":
            return SiKit;
        case "si:SiKitsu":
            return SiKitsu;
        case "si:SiKlarna":
            return SiKlarna;
        case "si:SiKleinanzeigen":
            return SiKleinanzeigen;
        case "si:SiKlm":
            return SiKlm;
        case "si:SiKlook":
            return SiKlook;
        case "si:SiKnative":
            return SiKnative;
        case "si:SiKnexdotjs":
            return SiKnexdotjs;
        case "si:SiKnime":
            return SiKnime;
        case "si:SiKnip":
            return SiKnip;
        case "si:SiKnowledgebase":
            return SiKnowledgebase;
        case "si:SiKnown":
            return SiKnown;
        case "si:SiKoa":
            return SiKoa;
        case "si:SiKoc":
            return SiKoc;
        case "si:SiKodak":
            return SiKodak;
        case "si:SiKodi":
            return SiKodi;
        case "si:SiKoenigsegg":
            return SiKoenigsegg;
        case "si:SiKofax":
            return SiKofax;
        case "si:SiKofi":
            return SiKofi;
        case "si:SiKomoot":
            return SiKomoot;
        case "si:SiKonami":
            return SiKonami;
        case "si:SiKong":
            return SiKong;
        case "si:SiKongregate":
            return SiKongregate;
        case "si:SiKonva":
            return SiKonva;
        case "si:SiKotlin":
            return SiKotlin;
        case "si:SiKoyeb":
            return SiKoyeb;
        case "si:SiKrita":
            return SiKrita;
        case "si:SiKtm":
            return SiKtm;
        case "si:SiKtor":
            return SiKtor;
        case "si:SiKuaishou":
            return SiKuaishou;
        case "si:SiKubernetes":
            return SiKubernetes;
        case "si:SiKubuntu":
            return SiKubuntu;
        case "si:SiKucoin":
            return SiKucoin;
        case "si:SiKueski":
            return SiKueski;
        case "si:SiKuma":
            return SiKuma;
        case "si:SiKununu":
            return SiKununu;
        case "si:SiKuula":
            return SiKuula;
        case "si:SiKx":
            return SiKx;
        case "si:SiKyocera":
            return SiKyocera;
        case "si:SiLabview":
            return SiLabview;
        case "si:SiLada":
            return SiLada;
        case "si:SiLamborghini":
            return SiLamborghini;
        case "si:SiLandrover":
            return SiLandrover;
        case "si:SiLangchain":
            return SiLangchain;
        case "si:SiLanguagetool":
            return SiLanguagetool;
        case "si:SiLapce":
            return SiLapce;
        case "si:SiLaragon":
            return SiLaragon;
        case "si:SiLaravel":
            return SiLaravel;
        case "si:SiLaravelhorizon":
            return SiLaravelhorizon;
        case "si:SiLaravelnova":
            return SiLaravelnova;
        case "si:SiLastdotfm":
            return SiLastdotfm;
        case "si:SiLastpass":
            return SiLastpass;
        case "si:SiLatex":
            return SiLatex;
        case "si:SiLaunchpad":
            return SiLaunchpad;
        case "si:SiLazarus":
            return SiLazarus;
        case "si:SiLazyvim":
            return SiLazyvim;
        case "si:SiLbry":
            return SiLbry;
        case "si:SiLeaderprice":
            return SiLeaderprice;
        case "si:SiLeaflet":
            return SiLeaflet;
        case "si:SiLeagueoflegends":
            return SiLeagueoflegends;
        case "si:SiLeanpub":
            return SiLeanpub;
        case "si:SiLeetcode":
            return SiLeetcode;
        case "si:SiLefthook":
            return SiLefthook;
        case "si:SiLegacygames":
            return SiLegacygames;
        case "si:SiLeica":
            return SiLeica;
        case "si:SiLemmy":
            return SiLemmy;
        case "si:SiLemonsqueezy":
            return SiLemonsqueezy;
        case "si:SiLenovo":
            return SiLenovo;
        case "si:SiLens":
            return SiLens;
        case "si:SiLeptos":
            return SiLeptos;
        case "si:SiLequipe":
            return SiLequipe;
        case "si:SiLerna":
            return SiLerna;
        case "si:SiLeroymerlin":
            return SiLeroymerlin;
        case "si:SiLeslibraires":
            return SiLeslibraires;
        case "si:SiLess":
            return SiLess;
        case "si:SiLetsencrypt":
            return SiLetsencrypt;
        case "si:SiLetterboxd":
            return SiLetterboxd;
        case "si:SiLevelsdotfyi":
            return SiLevelsdotfyi;
        case "si:SiLg":
            return SiLg;
        case "si:SiLiberadotchat":
            return SiLiberadotchat;
        case "si:SiLiberapay":
            return SiLiberapay;
        case "si:SiLibrariesdotio":
            return SiLibrariesdotio;
        case "si:SiLibrarything":
            return SiLibrarything;
        case "si:SiLibreoffice":
            return SiLibreoffice;
        case "si:SiLibreofficebase":
            return SiLibreofficebase;
        case "si:SiLibreofficecalc":
            return SiLibreofficecalc;
        case "si:SiLibreofficedraw":
            return SiLibreofficedraw;
        case "si:SiLibreofficeimpress":
            return SiLibreofficeimpress;
        case "si:SiLibreofficemath":
            return SiLibreofficemath;
        case "si:SiLibreofficewriter":
            return SiLibreofficewriter;
        case "si:SiLibretranslate":
            return SiLibretranslate;
        case "si:SiLibretube":
            return SiLibretube;
        case "si:SiLibrewolf":
            return SiLibrewolf;
        case "si:SiLibuv":
            return SiLibuv;
        case "si:SiLichess":
            return SiLichess;
        case "si:SiLidl":
            return SiLidl;
        case "si:SiLifx":
            return SiLifx;
        case "si:SiLightburn":
            return SiLightburn;
        case "si:SiLighthouse":
            return SiLighthouse;
        case "si:SiLightning":
            return SiLightning;
        case "si:SiLimesurvey":
            return SiLimesurvey;
        case "si:SiLine":
            return SiLine;
        case "si:SiLineageos":
            return SiLineageos;
        case "si:SiLinear":
            return SiLinear;
        case "si:SiLining":
            return SiLining;
        case "si:SiLinkedin":
            return SiLinkedin;
        case "si:SiLinkerd":
            return SiLinkerd;
        case "si:SiLinkfire":
            return SiLinkfire;
        case "si:SiLinksys":
            return SiLinksys;
        case "si:SiLinktree":
            return SiLinktree;
        case "si:SiLinphone":
            return SiLinphone;
        case "si:SiLintcode":
            return SiLintcode;
        case "si:SiLinux":
            return SiLinux;
        case "si:SiLinuxcontainers":
            return SiLinuxcontainers;
        case "si:SiLinuxfoundation":
            return SiLinuxfoundation;
        case "si:SiLinuxmint":
            return SiLinuxmint;
        case "si:SiLinuxprofessionalinstitute":
            return SiLinuxprofessionalinstitute;
        case "si:SiLinuxserver":
            return SiLinuxserver;
        case "si:SiLionair":
            return SiLionair;
        case "si:SiLiquibase":
            return SiLiquibase;
        case "si:SiListmonk":
            return SiListmonk;
        case "si:SiLit":
            return SiLit;
        case "si:SiLitecoin":
            return SiLitecoin;
        case "si:SiLiteral":
            return SiLiteral;
        case "si:SiLitiengine":
            return SiLitiengine;
        case "si:SiLivechat":
            return SiLivechat;
        case "si:SiLivejournal":
            return SiLivejournal;
        case "si:SiLivewire":
            return SiLivewire;
        case "si:SiLlvm":
            return SiLlvm;
        case "si:SiLmms":
            return SiLmms;
        case "si:SiLobsters":
            return SiLobsters;
        case "si:SiLocal":
            return SiLocal;
        case "si:SiLodash":
            return SiLodash;
        case "si:SiLogitech":
            return SiLogitech;
        case "si:SiLogitechg":
            return SiLogitechg;
        case "si:SiLogmein":
            return SiLogmein;
        case "si:SiLogseq":
            return SiLogseq;
        case "si:SiLogstash":
            return SiLogstash;
        case "si:SiLooker":
            return SiLooker;
        case "si:SiLoom":
            return SiLoom;
        case "si:SiLoop":
            return SiLoop;
        case "si:SiLoopback":
            return SiLoopback;
        case "si:SiLootcrate":
            return SiLootcrate;
        case "si:SiLospec":
            return SiLospec;
        case "si:SiLotpolishairlines":
            return SiLotpolishairlines;
        case "si:SiLtspice":
            return SiLtspice;
        case "si:SiLua":
            return SiLua;
        case "si:SiLubuntu":
            return SiLubuntu;
        case "si:SiLucia":
            return SiLucia;
        case "si:SiLucid":
            return SiLucid;
        case "si:SiLucide":
            return SiLucide;
        case "si:SiLudwig":
            return SiLudwig;
        case "si:SiLufthansa":
            return SiLufthansa;
        case "si:SiLumen":
            return SiLumen;
        case "si:SiLunacy":
            return SiLunacy;
        case "si:SiLutris":
            return SiLutris;
        case "si:SiLvgl":
            return SiLvgl;
        case "si:SiLydia":
            return SiLydia;
        case "si:SiLyft":
            return SiLyft;
        case "si:SiMaas":
            return SiMaas;
        case "si:SiMacos":
            return SiMacos;
        case "si:SiMacpaw":
            return SiMacpaw;
        case "si:SiMacys":
            return SiMacys;
        case "si:SiMagasinsu":
            return SiMagasinsu;
        case "si:SiMagento":
            return SiMagento;
        case "si:SiMagic":
            return SiMagic;
        case "si:SiMagisk":
            return SiMagisk;
        case "si:SiMahindra":
            return SiMahindra;
        case "si:SiMailboxdotorg":
            return SiMailboxdotorg;
        case "si:SiMailchimp":
            return SiMailchimp;
        case "si:SiMaildotcom":
            return SiMaildotcom;
        case "si:SiMaildotru":
            return SiMaildotru;
        case "si:SiMailgun":
            return SiMailgun;
        case "si:SiMailtrap":
            return SiMailtrap;
        case "si:SiMainwp":
            return SiMainwp;
        case "si:SiMajorleaguehacking":
            return SiMajorleaguehacking;
        case "si:SiMake":
            return SiMake;
        case "si:SiMakerbot":
            return SiMakerbot;
        case "si:SiMalt":
            return SiMalt;
        case "si:SiMalwarebytes":
            return SiMalwarebytes;
        case "si:SiMambaui":
            return SiMambaui;
        case "si:SiMamp":
            return SiMamp;
        case "si:SiMan":
            return SiMan;
        case "si:SiManageiq":
            return SiManageiq;
        case "si:SiManjaro":
            return SiManjaro;
        case "si:SiMantine":
            return SiMantine;
        case "si:SiMapbox":
            return SiMapbox;
        case "si:SiMapillary":
            return SiMapillary;
        case "si:SiMaplibre":
            return SiMaplibre;
        case "si:SiMaptiler":
            return SiMaptiler;
        case "si:SiMariadb":
            return SiMariadb;
        case "si:SiMariadbfoundation":
            return SiMariadbfoundation;
        case "si:SiMarkdown":
            return SiMarkdown;
        case "si:SiMarketo":
            return SiMarketo;
        case "si:SiMarko":
            return SiMarko;
        case "si:SiMarriott":
            return SiMarriott;
        case "si:SiMarvelapp":
            return SiMarvelapp;
        case "si:SiMaserati":
            return SiMaserati;
        case "si:SiMastercard":
            return SiMastercard;
        case "si:SiMastercomfig":
            return SiMastercomfig;
        case "si:SiMastodon":
            return SiMastodon;
        case "si:SiMaterialdesign":
            return SiMaterialdesign;
        case "si:SiMaterialdesignicons":
            return SiMaterialdesignicons;
        case "si:SiMaterialformkdocs":
            return SiMaterialformkdocs;
        case "si:SiMatillion":
            return SiMatillion;
        case "si:SiMatomo":
            return SiMatomo;
        case "si:SiMatrix":
            return SiMatrix;
        case "si:SiMatterdotjs":
            return SiMatterdotjs;
        case "si:SiMattermost":
            return SiMattermost;
        case "si:SiMatternet":
            return SiMatternet;
        case "si:SiMautic":
            return SiMautic;
        case "si:SiMax":
            return SiMax;
        case "si:SiMaxplanckgesellschaft":
            return SiMaxplanckgesellschaft;
        case "si:SiMaytag":
            return SiMaytag;
        case "si:SiMazda":
            return SiMazda;
        case "si:SiMaze":
            return SiMaze;
        case "si:SiMcafee":
            return SiMcafee;
        case "si:SiMcdonalds":
            return SiMcdonalds;
        case "si:SiMclaren":
            return SiMclaren;
        case "si:SiMdbook":
            return SiMdbook;
        case "si:SiMdnwebdocs":
            return SiMdnwebdocs;
        case "si:SiMdx":
            return SiMdx;
        case "si:SiMediafire":
            return SiMediafire;
        case "si:SiMediamarkt":
            return SiMediamarkt;
        case "si:SiMediapipe":
            return SiMediapipe;
        case "si:SiMediatek":
            return SiMediatek;
        case "si:SiMedibangpaint":
            return SiMedibangpaint;
        case "si:SiMedium":
            return SiMedium;
        case "si:SiMedusa":
            return SiMedusa;
        case "si:SiMeetup":
            return SiMeetup;
        case "si:SiMega":
            return SiMega;
        case "si:SiMeilisearch":
            return SiMeilisearch;
        case "si:SiMeituan":
            return SiMeituan;
        case "si:SiMeizu":
            return SiMeizu;
        case "si:SiMendeley":
            return SiMendeley;
        case "si:SiMentorcruise":
            return SiMentorcruise;
        case "si:SiMercadopago":
            return SiMercadopago;
        case "si:SiMercedes":
            return SiMercedes;
        case "si:SiMerck":
            return SiMerck;
        case "si:SiMercurial":
            return SiMercurial;
        case "si:SiMermaid":
            return SiMermaid;
        case "si:SiMessenger":
            return SiMessenger;
        case "si:SiMeta":
            return SiMeta;
        case "si:SiMetabase":
            return SiMetabase;
        case "si:SiMetacritic":
            return SiMetacritic;
        case "si:SiMetafilter":
            return SiMetafilter;
        case "si:SiMetasploit":
            return SiMetasploit;
        case "si:SiMeteor":
            return SiMeteor;
        case "si:SiMetro":
            return SiMetro;
        case "si:SiMetrodelaciudaddemexico":
            return SiMetrodelaciudaddemexico;
        case "si:SiMetrodemadrid":
            return SiMetrodemadrid;
        case "si:SiMetrodeparis":
            return SiMetrodeparis;
        case "si:SiMewe":
            return SiMewe;
        case "si:SiMg":
            return SiMg;
        case "si:SiMicrobit":
            return SiMicrobit;
        case "si:SiMicrodotblog":
            return SiMicrodotblog;
        case "si:SiMicroeditor":
            return SiMicroeditor;
        case "si:SiMicrogenetics":
            return SiMicrogenetics;
        case "si:SiMicropython":
            return SiMicropython;
        case "si:SiMicrostation":
            return SiMicrostation;
        case "si:SiMicrostrategy":
            return SiMicrostrategy;
        case "si:SiMidi":
            return SiMidi;
        case "si:SiMigadu":
            return SiMigadu;
        case "si:SiMihoyo":
            return SiMihoyo;
        case "si:SiMikrotik":
            return SiMikrotik;
        case "si:SiMilanote":
            return SiMilanote;
        case "si:SiMilvus":
            return SiMilvus;
        case "si:SiMinds":
            return SiMinds;
        case "si:SiMinetest":
            return SiMinetest;
        case "si:SiMingww64":
            return SiMingww64;
        case "si:SiMini":
            return SiMini;
        case "si:SiMinio":
            return SiMinio;
        case "si:SiMintlify":
            return SiMintlify;
        case "si:SiMinutemailer":
            return SiMinutemailer;
        case "si:SiMiraheze":
            return SiMiraheze;
        case "si:SiMiro":
            return SiMiro;
        case "si:SiMisskey":
            return SiMisskey;
        case "si:SiMitsubishi":
            return SiMitsubishi;
        case "si:SiMix":
            return SiMix;
        case "si:SiMixcloud":
            return SiMixcloud;
        case "si:SiMixpanel":
            return SiMixpanel;
        case "si:SiMlb":
            return SiMlb;
        case "si:SiMlflow":
            return SiMlflow;
        case "si:SiMobx":
            return SiMobx;
        case "si:SiMobxstatetree":
            return SiMobxstatetree;
        case "si:SiMocha":
            return SiMocha;
        case "si:SiMockserviceworker":
            return SiMockserviceworker;
        case "si:SiModal":
            return SiModal;
        case "si:SiModin":
            return SiModin;
        case "si:SiModrinth":
            return SiModrinth;
        case "si:SiModx":
            return SiModx;
        case "si:SiMojeek":
            return SiMojeek;
        case "si:SiMoleculer":
            return SiMoleculer;
        case "si:SiMomenteo":
            return SiMomenteo;
        case "si:SiMonero":
            return SiMonero;
        case "si:SiMoneygram":
            return SiMoneygram;
        case "si:SiMongodb":
            return SiMongodb;
        case "si:SiMongoose":
            return SiMongoose;
        case "si:SiMongoosedotws":
            return SiMongoosedotws;
        case "si:SiMonica":
            return SiMonica;
        case "si:SiMonkeytie":
            return SiMonkeytie;
        case "si:SiMonkeytype":
            return SiMonkeytype;
        case "si:SiMonogame":
            return SiMonogame;
        case "si:SiMonoprix":
            return SiMonoprix;
        case "si:SiMonster":
            return SiMonster;
        case "si:SiMonzo":
            return SiMonzo;
        case "si:SiMoo":
            return SiMoo;
        case "si:SiMoodle":
            return SiMoodle;
        case "si:SiMoonrepo":
            return SiMoonrepo;
        case "si:SiMoq":
            return SiMoq;
        case "si:SiMoqups":
            return SiMoqups;
        case "si:SiMorrisons":
            return SiMorrisons;
        case "si:SiMoscowmetro":
            return SiMoscowmetro;
        case "si:SiMotorola":
            return SiMotorola;
        case "si:SiMovistar":
            return SiMovistar;
        case "si:SiMozilla":
            return SiMozilla;
        case "si:SiMpv":
            return SiMpv;
        case "si:SiMqtt":
            return SiMqtt;
        case "si:SiMsi":
            return SiMsi;
        case "si:SiMsibusiness":
            return SiMsibusiness;
        case "si:SiMta":
            return SiMta;
        case "si:SiMtr":
            return SiMtr;
        case "si:SiMubi":
            return SiMubi;
        case "si:SiMui":
            return SiMui;
        case "si:SiMulesoft":
            return SiMulesoft;
        case "si:SiMuller":
            return SiMuller;
        case "si:SiMullvad":
            return SiMullvad;
        case "si:SiMultisim":
            return SiMultisim;
        case "si:SiMumble":
            return SiMumble;
        case "si:SiMuo":
            return SiMuo;
        case "si:SiMural":
            return SiMural;
        case "si:SiMusescore":
            return SiMusescore;
        case "si:SiMusicbrainz":
            return SiMusicbrainz;
        case "si:SiMxlinux":
            return SiMxlinux;
        case "si:SiMyanimelist":
            return SiMyanimelist;
        case "si:SiMyget":
            return SiMyget;
        case "si:SiMyob":
            return SiMyob;
        case "si:SiMyspace":
            return SiMyspace;
        case "si:SiMysql":
            return SiMysql;
        case "si:SiN26":
            return SiN26;
        case "si:SiN8N":
            return SiN8N;
        case "si:SiNamebase":
            return SiNamebase;
        case "si:SiNamecheap":
            return SiNamecheap;
        case "si:SiNamemc":
            return SiNamemc;
        case "si:SiNamesilo":
            return SiNamesilo;
        case "si:SiNamuwiki":
            return SiNamuwiki;
        case "si:SiNano":
            return SiNano;
        case "si:SiNanostores":
            return SiNanostores;
        case "si:SiNapster":
            return SiNapster;
        case "si:SiNasa":
            return SiNasa;
        case "si:SiNationalgrid":
            return SiNationalgrid;
        case "si:SiNationalrail":
            return SiNationalrail;
        case "si:SiNativescript":
            return SiNativescript;
        case "si:SiNatsdotio":
            return SiNatsdotio;
        case "si:SiNaver":
            return SiNaver;
        case "si:SiNba":
            return SiNba;
        case "si:SiNbb":
            return SiNbb;
        case "si:SiNbc":
            return SiNbc;
        case "si:SiNdr":
            return SiNdr;
        case "si:SiNear":
            return SiNear;
        case "si:SiNebula":
            return SiNebula;
        case "si:SiNec":
            return SiNec;
        case "si:SiNeo4J":
            return SiNeo4J;
        case "si:SiNeovim":
            return SiNeovim;
        case "si:SiNeptune":
            return SiNeptune;
        case "si:SiNestjs":
            return SiNestjs;
        case "si:SiNetapp":
            return SiNetapp;
        case "si:SiNetbsd":
            return SiNetbsd;
        case "si:SiNetcup":
            return SiNetcup;
        case "si:SiNetdata":
            return SiNetdata;
        case "si:SiNeteasecloudmusic":
            return SiNeteasecloudmusic;
        case "si:SiNetflix":
            return SiNetflix;
        case "si:SiNetgear":
            return SiNetgear;
        case "si:SiNetlify":
            return SiNetlify;
        case "si:SiNette":
            return SiNette;
        case "si:SiNetto":
            return SiNetto;
        case "si:SiNeutralinojs":
            return SiNeutralinojs;
        case "si:SiNewbalance":
            return SiNewbalance;
        case "si:SiNewegg":
            return SiNewegg;
        case "si:SiNewjapanprowrestling":
            return SiNewjapanprowrestling;
        case "si:SiNewrelic":
            return SiNewrelic;
        case "si:SiNewyorktimes":
            return SiNewyorktimes;
        case "si:SiNexon":
            return SiNexon;
        case "si:SiNextbilliondotai":
            return SiNextbilliondotai;
        case "si:SiNextcloud":
            return SiNextcloud;
        case "si:SiNextdns":
            return SiNextdns;
        case "si:SiNextdoor":
            return SiNextdoor;
        case "si:SiNextdotjs":
            return SiNextdotjs;
        case "si:SiNextra":
            return SiNextra;
        case "si:SiNextui":
            return SiNextui;
        case "si:SiNexusmods":
            return SiNexusmods;
        case "si:SiNfc":
            return SiNfc;
        case "si:SiNginx":
            return SiNginx;
        case "si:SiNginxproxymanager":
            return SiNginxproxymanager;
        case "si:SiNgrok":
            return SiNgrok;
        case "si:SiNgrx":
            return SiNgrx;
        case "si:SiNhl":
            return SiNhl;
        case "si:SiNicehash":
            return SiNicehash;
        case "si:SiNiconico":
            return SiNiconico;
        case "si:SiNike":
            return SiNike;
        case "si:SiNikon":
            return SiNikon;
        case "si:SiNim":
            return SiNim;
        case "si:SiNintendo":
            return SiNintendo;
        case "si:SiNintendo3Ds":
            return SiNintendo3Ds;
        case "si:SiNintendogamecube":
            return SiNintendogamecube;
        case "si:SiNintendoswitch":
            return SiNintendoswitch;
        case "si:SiNissan":
            return SiNissan;
        case "si:SiNixos":
            return SiNixos;
        case "si:SiNodedotjs":
            return SiNodedotjs;
        case "si:SiNodemon":
            return SiNodemon;
        case "si:SiNodered":
            return SiNodered;
        case "si:SiNokia":
            return SiNokia;
        case "si:SiNomad":
            return SiNomad;
        case "si:SiNorco":
            return SiNorco;
        case "si:SiNordicsemiconductor":
            return SiNordicsemiconductor;
        case "si:SiNordvpn":
            return SiNordvpn;
        case "si:SiNormalizedotcss":
            return SiNormalizedotcss;
        case "si:SiNorton":
            return SiNorton;
        case "si:SiNorwegian":
            return SiNorwegian;
        case "si:SiNotepadplusplus":
            return SiNotepadplusplus;
        case "si:SiNotion":
            return SiNotion;
        case "si:SiNotist":
            return SiNotist;
        case "si:SiNounproject":
            return SiNounproject;
        case "si:SiNovu":
            return SiNovu;
        case "si:SiNow":
            return SiNow;
        case "si:SiNpm":
            return SiNpm;
        case "si:SiNrwl":
            return SiNrwl;
        case "si:SiNsis":
            return SiNsis;
        case "si:SiNtfy":
            return SiNtfy;
        case "si:SiNubank":
            return SiNubank;
        case "si:SiNucleo":
            return SiNucleo;
        case "si:SiNuget":
            return SiNuget;
        case "si:SiNuke":
            return SiNuke;
        case "si:SiNumba":
            return SiNumba;
        case "si:SiNumpy":
            return SiNumpy;
        case "si:SiNunjucks":
            return SiNunjucks;
        case "si:SiNushell":
            return SiNushell;
        case "si:SiNutanix":
            return SiNutanix;
        case "si:SiNuxtdotjs":
            return SiNuxtdotjs;
        case "si:SiNvidia":
            return SiNvidia;
        case "si:SiNvm":
            return SiNvm;
        case "si:SiNx":
            return SiNx;
        case "si:SiNxp":
            return SiNxp;
        case "si:SiNzxt":
            return SiNzxt;
        case "si:SiO2":
            return SiO2;
        case "si:SiObb":
            return SiObb;
        case "si:SiObservable":
            return SiObservable;
        case "si:SiObsidian":
            return SiObsidian;
        case "si:SiObsstudio":
            return SiObsstudio;
        case "si:SiOcaml":
            return SiOcaml;
        case "si:SiOclif":
            return SiOclif;
        case "si:SiOctanerender":
            return SiOctanerender;
        case "si:SiOctave":
            return SiOctave;
        case "si:SiOctobercms":
            return SiOctobercms;
        case "si:SiOctoprint":
            return SiOctoprint;
        case "si:SiOctopusdeploy":
            return SiOctopusdeploy;
        case "si:SiOculus":
            return SiOculus;
        case "si:SiOdin":
            return SiOdin;
        case "si:SiOdnoklassniki":
            return SiOdnoklassniki;
        case "si:SiOdoo":
            return SiOdoo;
        case "si:SiOdysee":
            return SiOdysee;
        case "si:SiOhdear":
            return SiOhdear;
        case "si:SiOkcupid":
            return SiOkcupid;
        case "si:SiOkta":
            return SiOkta;
        case "si:SiOkx":
            return SiOkx;
        case "si:SiOllama":
            return SiOllama;
        case "si:SiOneplus":
            return SiOneplus;
        case "si:SiOnlyfans":
            return SiOnlyfans;
        case "si:SiOnlyoffice":
            return SiOnlyoffice;
        case "si:SiOnnx":
            return SiOnnx;
        case "si:SiOnstar":
            return SiOnstar;
        case "si:SiOpel":
            return SiOpel;
        case "si:SiOpenaccess":
            return SiOpenaccess;
        case "si:SiOpenai":
            return SiOpenai;
        case "si:SiOpenaigym":
            return SiOpenaigym;
        case "si:SiOpenapiinitiative":
            return SiOpenapiinitiative;
    }
}
