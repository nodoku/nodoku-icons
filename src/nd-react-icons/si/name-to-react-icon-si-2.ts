import type {IconType} from "react-icons";

import {
    SiOpenbadges,
    SiOpenbsd,
    SiOpenbugbounty,
    SiOpencollective,
    SiOpencontainersinitiative,
    SiOpencv,
    SiOpenfaas,
    SiOpengl,
    SiOpenhab,
    SiOpenid,
    SiOpenjdk,
    SiOpenjsfoundation,
    SiOpenlayers,
    SiOpenmediavault,
    SiOpenmined,
    SiOpennebula,
    SiOpenproject,
    SiOpenscad,
    SiOpensea,
    SiOpensearch,
    SiOpensourcehardware,
    SiOpensourceinitiative,
    SiOpenssl,
    SiOpenstack,
    SiOpenstreetmap,
    SiOpensuse,
    SiOpentelemetry,
    SiOpentext,
    SiOpentofu,
    SiOpenverse,
    SiOpenvpn,
    SiOpenwrt,
    SiOpenzeppelin,
    SiOpenzfs,
    SiOpera,
    SiOperagx,
    SiOpnsense,
    SiOppo,
    SiOpsgenie,
    SiOpslevel,
    SiOptimism,
    SiOracle,
    SiOrange,
    SiOrcid,
    SiOreilly,
    SiOrg,
    SiOrganicmaps,
    SiOrigin,
    SiOsano,
    SiOsf,
    SiOsgeo,
    SiOshkosh,
    SiOsmc,
    SiOsu,
    SiOtto,
    SiOutline,
    SiOvercast,
    SiOverleaf,
    SiOvh,
    SiOwasp,
    SiOwncloud,
    SiOxygen,
    SiOyo,
    SiP5Dotjs,
    SiPackagist,
    SiPacker,
    SiPackt,
    SiPaddle,
    SiPaddlepaddle,
    SiPaddypower,
    SiPagekit,
    SiPagerduty,
    SiPagespeedinsights,
    SiPagseguro,
    SiPalantir,
    SiPaloaltonetworks,
    SiPaloaltosoftware,
    SiPanasonic,
    SiPandas,
    SiPandora,
    SiPantheon,
    SiPaperlessngx,
    SiPaperspace,
    SiPaperswithcode,
    SiParamountplus,
    SiParitysubstrate,
    SiParrotsecurity,
    SiParsedotly,
    SiPassport,
    SiPastebin,
    SiPatreon,
    SiPaychex,
    SiPayhip,
    SiPayloadcms,
    SiPayoneer,
    SiPaypal,
    SiPaytm,
    SiPcgamingwiki,
    SiPdm,
    SiPdq,
    SiPeakdesign,
    SiPearson,
    SiPeerlist,
    SiPeertube,
    SiPegasusairlines,
    SiPelican,
    SiPeloton,
    SiPenny,
    SiPenpot,
    SiPercy,
    SiPerforce,
    SiPerl,
    SiPerplexity,
    SiPersistent,
    SiPersonio,
    SiPetsathome,
    SiPeugeot,
    SiPexels,
    SiPfsense,
    SiPhabricator,
    SiPhilipshue,
    SiPhoenixframework,
    SiPhonepe,
    SiPhosphoricons,
    SiPhotobucket,
    SiPhotocrowd,
    SiPhoton,
    SiPhotopea,
    SiPhp,
    SiPhpmyadmin,
    SiPhpstorm,
    SiPiaggiogroup,
    SiPiapro,
    SiPicardsurgeles,
    SiPicartodottv,
    SiPicnic,
    SiPicpay,
    SiPicrew,
    SiPicsart,
    SiPicxy,
    SiPihole,
    SiPimcore,
    SiPinboard,
    SiPinescript,
    SiPinetwork,
    SiPingdom,
    SiPino,
    SiPinterest,
    SiPioneerdj,
    SiPiped,
    SiPipx,
    SiPivotaltracker,
    SiPiwigo,
    SiPix,
    SiPixabay,
    SiPixelfed,
    SiPixiv,
    SiPixlr,
    SiPkgsrc,
    SiPlanet,
    SiPlanetscale,
    SiPlangrid,
    SiPlatformdotsh,
    SiPlatformio,
    SiPlatzi,
    SiPlausibleanalytics,
    SiPlaycanvas,
    SiPlayerdotme,
    SiPlayerfm,
    SiPlaystation,
    SiPlaystation2,
    SiPlaystation3,
    SiPlaystation4,
    SiPlaystation5,
    SiPlaystationportable,
    SiPlaystationvita,
    SiPleroma,
    SiPlesk,
    SiPlex,
    SiPlotly,
    SiPlume,
    SiPluralsight,
    SiPlurk,
    SiPluscodes,
    SiPm2,
    SiPnpm,
    SiPocket,
    SiPocketbase,
    SiPocketcasts,
    SiPodcastaddict,
    SiPodcastindex,
    SiPodman,
    SiPoe,
    SiPoetry,
    SiPointy,
    SiPokemon,
    SiPolars,
    SiPolestar,
    SiPolkadot,
    SiPoly,
    SiPolygon,
    SiPolymerproject,
    SiPolywork,
    SiPond5,
    SiPopos,
    SiPorkbun,
    SiPorsche,
    SiPortainer,
    SiPortswigger,
    SiPosit,
    SiPostcss,
    SiPostgresql,
    SiPosthog,
    SiPostman,
    SiPostmates,
    SiPowers,
    SiPrdotco,
    SiPreact,
    SiPrecommit,
    SiPrefect,
    SiPremierleague,
    SiPrepbytes,
    SiPrestashop,
    SiPresto,
    SiPrettier,
    SiPretzel,
    SiPrevention,
    SiPrezi,
    SiPrime,
    SiPrimefaces,
    SiPrimeng,
    SiPrimereact,
    SiPrimevideo,
    SiPrimevue,
    SiPrintables,
    SiPrisma,
    SiPrismic,
    SiPrivatedivision,
    SiPrivateinternetaccess,
    SiProbot,
    SiProcessingfoundation,
    SiProcesswire,
    SiProducthunt,
    SiProgate,
    SiProgress,
    SiPrometheus,
    SiPronounsdotpage,
    SiProsieben,
    SiProteus,
    SiProtocolsdotio,
    SiProtodotio,
    SiProton,
    SiProtoncalendar,
    SiProtondb,
    SiProtondrive,
    SiProtonmail,
    SiProtonvpn,
    SiProtools,
    SiProtractor,
    SiProxmox,
    SiPterodactyl,
    SiPubg,
    SiPublons,
    SiPubmed,
    SiPug,
    SiPulumi,
    SiPuma,
    SiPuppet,
    SiPuppeteer,
    SiPurescript,
    SiPurgecss,
    SiPurism,
    SiPushbullet,
    SiPusher,
    SiPwa,
    SiPycharm,
    SiPycqa,
    SiPydantic,
    SiPyg,
    SiPypi,
    SiPypy,
    SiPyscaffold,
    SiPysyft,
    SiPytest,
    SiPython,
    SiPythonanywhere,
    SiPytorch,
    SiPyup,
    SiQantas,
    SiQase,
    SiQatarairways,
    SiQbittorrent,
    SiQemu,
    SiQgis,
    SiQi,
    SiQiita,
    SiQiskit,
    SiQiwi,
    SiQlik,
    SiQmk,
    SiQnap,
    SiQt,
    SiQualcomm,
    SiQualtrics,
    SiQualys,
    SiQuantcast,
    SiQuantconnect,
    SiQuarkus,
    SiQuarto,
    SiQuasar,
    SiQubesos,
    SiQuest,
    SiQuickbooks,
    SiQuicklook,
    SiQuicktime,
    SiQuicktype,
    SiQuip,
    SiQuizlet,
    SiQuora,
    SiQwant,
    SiQwik,
    SiQwiklabs,
    SiQzone,
    SiR,
    SiR3,
    SiRabbitmq,
    SiRacket,
    SiRadar,
    SiRadarr,
    SiRadiopublic,
    SiRadixui,
    SiRadstudio,
    SiRailway,
    SiRainmeter,
    SiRakuten,
    SiRam,
    SiRancher,
    SiRapid,
    SiRarible,
    SiRasa,
    SiRaspberrypi,
    SiRavelry,
    SiRay,
    SiRaycast,
    SiRaylib,
    SiRazer,
    SiRazorpay,
    SiRclone,
    SiReact,
    SiReactbootstrap,
    SiReacthookform,
    SiReactiveresume,
    SiReactivex,
    SiReactos,
    SiReactquery,
    SiReactrouter,
    SiReacttable,
    SiReaddotcv,
    SiReadme,
    SiReadthedocs,
    SiRealm,
    SiReason,
    SiReasonstudios,
    SiRecoil,
    SiRed,
    SiRedash,
    SiRedbubble,
    SiRedbull,
    SiRedcandlegames,
    SiReddit,
    SiRedhat,
    SiRedhatopenshift,
    SiRedis,
    SiRedmine,
    SiRedox,
    SiRedragon,
    SiRedsys,
    SiRedux,
    SiReduxsaga,
    SiRedwoodjs,
    SiReebok,
    SiRefine,
    SiRefinedgithub,
    SiRelay,
    SiRelianceindustrieslimited,
    SiRemark,
    SiRemedyentertainment,
    SiRemix,
    SiRemovedotbg,
    SiRenault,
    SiRender,
    SiRenovate,
    SiRenpy,
    SiRenren,
    SiReplit,
    SiRepublicofgamers,
    SiRescript,
    SiRescuetime,
    SiResearchgate,
    SiResend,
    SiResharper,
    SiResurrectionremixos,
    SiRetool,
    SiRetroarch,
    SiRetropie,
    SiRevanced,
    SiRevealdotjs,
    SiReverbnation,
    SiRevoltdotchat,
    SiRevolut,
    SiRevue,
    SiRewe,
    SiRezgo,
    SiRhinoceros,
    SiRich,
    SiRider,
    SiRimacautomobili,
    SiRime,
    SiRing,
    SiRiotgames,
    SiRipple,
    SiRiscv,
    SiRiseup,
    SiRitzcarlton,
    SiRive,
    SiRoadmapdotsh,
    SiRoamresearch,
    SiRobinhood,
    SiRoblox,
    SiRobloxstudio,
    SiRoboflow,
    SiRobotframework,
    SiRocket,
    SiRocketdotchat,
    SiRocksdb,
    SiRockstargames,
    SiRockwellautomation,
    SiRockylinux,
    SiRoku,
    SiRoll20,
    SiRollsroyce,
    SiRollupdotjs,
    SiRoon,
    SiRootme,
    SiRoots,
    SiRootsbedrock,
    SiRootssage,
    SiRos,
    SiRossmann,
    SiRotaryinternational,
    SiRottentomatoes,
    SiRoundcube,
    SiRsocket,
    SiRss,
    SiRstudioide,
    SiRte,
    SiRtl,
    SiRtlzwei,
    SiRtm,
    SiRubocop,
    SiRuby,
    SiRubygems,
    SiRubymine,
    SiRubyonrails,
    SiRubysinatra,
    SiRuff,
    SiRumahweb,
    SiRumble,
    SiRundeck,
    SiRunkeeper,
    SiRunkit,
    SiRunrundotit,
    SiRust,
    SiRustdesk,
    SiRxdb,
    SiRyanair,
    SiRye,
    SiS7Airlines,
    SiSabanci,
    SiSafari,
    SiSage,
    SiSahibinden,
    SiSailfishos,
    SiSailsdotjs,
    SiSalesforce,
    SiSalla,
    SiSaltproject,
    SiSamsclub,
    SiSamsung,
    SiSamsungpay,
    SiSandisk,
    SiSanfranciscomunicipalrailway,
    SiSanic,
    SiSanity,
    SiSaopaulometro,
    SiSap,
    SiSartorius,
    SiSass,
    SiSat1,
    SiSatellite,
    SiSaturn,
    SiSaucelabs,
    SiSaudia,
    SiScala,
    SiScaleway,
    SiScania,
    SiSchneiderelectric,
    SiScikitlearn,
    SiScilab,
    SiScipy,
    SiScopus,
    SiScpfoundation,
    SiScrapbox,
    SiScrapy,
    SiScratch,
    SiScreencastify,
    SiScribd,
    SiScrimba,
    SiScrollreveal,
    SiScrumalliance,
    SiScrutinizerci,
    SiScylladb,
    SiSeagate,
    SiSearxng,
    SiSeat,
    SiSeatgeek,
    SiSecurityscorecard,
    SiSefaria,
    SiSega,
    SiSelenium,
    SiSellfy,
    SiSemanticrelease,
    SiSemanticscholar,
    SiSemanticui,
    SiSemanticuireact,
    SiSemanticweb,
    SiSemaphoreci,
    SiSemrush,
    SiSemver,
    SiSencha,
    SiSendgrid,
    SiSennheiser,
    SiSensu,
    SiSentry,
    SiSepa,
    SiSequelize,
    SiServerfault,
    SiServerless,
    SiSession,
    SiSessionize,
    SiSetapp,
    SiSfml,
    SiShadcnui,
    SiShadow,
    SiShanghaimetro,
    SiSharex,
    SiSharp,
    SiShazam,
    SiShell,
    SiShelly,
    SiShenzhenmetro,
    SiShieldsdotio,
    SiShikimori,
    SiShopee,
    SiShopify,
    SiShopware,
    SiShortcut,
    SiShowpad,
    SiShowtime,
    SiShowwcase,
    SiShutterstock,
    SiSidekiq,
    SiSidequest,
    SiSiemens,
    SiSifive,
    SiSignal,
    SiSilverairways,
    SiSimilarweb,
    SiSimkl,
    SiSimpleanalytics,
    SiSimpleicons,
    SiSimplelogin,
    SiSimplenote,
    SiSimplex,
    SiSinaweibo,
    SiSingaporeairlines,
    SiSinglestore,
    SiSitecore,
    SiSitepoint,
    SiSiyuan,
    SiSkaffold,
    SiSketch,
    SiSketchfab,
    SiSketchup,
    SiSkillshare,
    SiSkoda,
    SiSky,
    SiSkypack,
    SiSkyrock,
    SiSlack,
    SiSlackware,
    SiSlashdot,
    SiSlickpic,
    SiSlides,
    SiSlideshare,
    SiSlint,
    SiSmart,
    SiSmartthings,
    SiSmashdotgg,
    SiSmashingmagazine,
    SiSmrt,
    SiSmugmug,
    SiSnapchat,
    SiSnapcraft,
    SiSnapdragon,
    SiSncf,
    SiSnort,
    SiSnowflake,
    SiSnowpack,
    SiSnyk,
    SiSocialblade,
    SiSociety6,
    SiSocketdotio,
    SiSoftpedia,
    SiSogou,
    SiSolana,
    SiSolid,
    SiSolidity,
    SiSololearn,
    SiSolus,
    SiSonar,
    SiSonarcloud,
    SiSonarlint,
    SiSonarqube,
    SiSonarr,
    SiSonatype,
    SiSongkick,
    SiSongoda,
    SiSonicwall,
    SiSonos,
    SiSony,
    SiSoriana,
    SiSoundcharts,
    SiSoundcloud,
    SiSourceengine,
    SiSourceforge,
    SiSourcehut,
    SiSourcetree,
    SiSouthwestairlines,
    SiSpacemacs,
    SiSpaceship,
    SiSpacex,
    SiSpacy,
    SiSparkar,
    SiSparkasse,
    SiSparkfun,
    SiSparkpost,
    SiSpdx,
    SiSpeakerdeck,
    SiSpectrum,
    SiSpeedtest,
    SiSpeedypage,
    SiSphinx,
    SiSpigotmc,
    SiSpine,
    SiSpinnaker,
    SiSpinrilla,
    SiSplunk,
    SiSpoj,
    SiSpond,
    SiSpotify,
    SiSpotlight,
    SiSpreadshirt,
    SiSpreaker,
    SiSpringCreators,
    SiSpring,
    SiSpringboot,
    SiSpringsecurity,
    SiSpyderide,
    SiSqlalchemy,
    SiSqlite,
    SiSquare,
    SiSquareenix,
    SiSquarespace,
    SiSrgssr,
    SiSsrn,
    SiSst,
    SiStackbit,
    SiStackblitz,
    SiStackedit,
    SiStackexchange,
    SiStackhawk,
    SiStackoverflow,
    SiStackpath,
    SiStackshare,
    SiStadia,
    SiStaffbase,
    SiStagetimer,
    SiStandardjs,
    SiStandardresume,
    SiStarbucks,
    SiStardock,
    SiStarlingbank,
    SiStarship,
    SiStartpage,
    SiStartrek,
    SiStarz,
    SiStatamic,
    SiStatista,
    SiStatuspage,
    SiStatuspal,
    SiSteam,
    SiSteamdb,
    SiSteamdeck,
    SiSteamworks,
    SiSteelseries,
    SiSteem,
    SiSteemit,
    SiSteinberg,
    SiStellar,
    SiStencil,
    SiStencyl,
    SiStimulus,
    SiStitcher,
    SiStmicroelectronics,
    SiStockx,
    SiStopstalk,
    SiStoryblok,
    SiStorybook,
    SiStrapi,
    SiStrava,
    SiStreamlabs,
    SiStreamlit,
    SiStreamrunners,
    SiStremio,
    SiStripe,
    SiStrongswan,
    SiStryker,
    SiStubhub,
    SiStudio3T,
    SiStudyverse,
    SiStyledcomponents,
    SiStylelint,
    SiStyleshare,
    SiStylus,
    SiSubaru,
    SiSublimetext,
    SiSubstack,
    SiSubtitleedit,
    SiSubversion,
    SiSuckless,
    SiSui,
    SiSumologic,
    SiSuno,
    SiSunrise,
    SiSupabase,
    SiSupercrease,
    SiSupermicro,
    SiSuperuser,
    SiSurrealdb,
    SiSurveymonkey,
    SiSuse,
    SiSuzuki,
    SiSvelte,
    SiSvg,
    SiSvgdotjs,
    SiSvgo,
    SiSvgtrace,
    SiSwagger,
    SiSwarm,
    SiSway,
    SiSwc,
    SiSwift,
    SiSwiggy,
    SiSwiper,
    SiSwr,
    SiSymantec,
    SiSymbolab,
    SiSymfony,
    SiSymphony,
    SiSympy,
    SiSyncthing,
    SiSynology,
    SiSystem76,
    SiTabelog,
    SiTableau,
    SiTablecheck,
    SiTacobell,
    SiTado,
    SiTaichigraphics,
    SiTaichilang,
    SiTails,
    SiTailscale,
    SiTailwindcss,
    SiTaipy,
    SiTaketwointeractivesoftware,
    SiTalend,
    SiTalenthouse,
    SiTalos,
    SiTamiya,
    SiTampermonkey,
    SiTaobao,
    SiTapas,
    SiTarget,
    SiTarom,
    SiTask,
    SiTasmota,
    SiTata,
    SiTauri,
    SiTaxbuzz,
    SiTcs,
    SiTeal,
    SiTeamcity,
    SiTeamspeak,
    SiTeamviewer,
    SiTechcrunch,
    SiTed,
    SiTeepublic,
    SiTeespring,
    SiTekton,
    SiTele5,
    SiTelegram,
    SiTelegraph,
    SiTelequebec,
    SiTemporal,
    SiTencentqq,
    SiTensorflow,
    SiTeradata,
    SiTeratail,
    SiTermius,
    SiTerraform,
    SiTesco,
    SiTesla,
    SiTestcafe,
    SiTestin,
    SiTestinglibrary,
    SiTestrail,
    SiTether,
    SiTextpattern,
    SiTga,
    SiThangs,
    SiThanos,
    SiThealgorithms,
    SiTheboringcompany,
    SiTheconversation,
    SiThefinals,
    SiTheguardian,
    SiTheirishtimes,
    SiThemighty,
    SiThemodelsresource,
    SiThemoviedatabase,
    SiThenorthface,
    SiTheodinproject,
    SiTheregister,
    SiThesoundsresource,
    SiThespritersresource,
    SiThewashingtonpost,
    SiTheweatherchannel,
    SiThingiverse,
    SiThinkpad,
    SiThirdweb,
    SiThreadless,
    SiThreads,
    SiThreedotjs,
    SiThreema,
    SiThumbtack,
    SiThunderbird,
    SiThunderstore,
    SiThurgauerkantonalbank,
    SiThymeleaf,
    SiTicketmaster,
    SiTicktick,
    SiTidal,
    SiTiddlywiki,
    SiTide,
    SiTidyverse,
    SiTietoevry,
    SiTiktok,
    SiTildapublishing,
    SiTile,
    SiTimescale,
    SiTina,
    SiTinder,
    SiTindie,
    SiTinkercad,
    SiTinygrad,
    SiTinyletter,
    SiTistory,
    SiTldraw,
    SiTmobile,
    SiTmux,
    SiTodoist,
    SiToggl,
    SiToggltrack,
    SiTokyometro,
    SiToll,
    SiToml,
    SiTomorrowland,
    SiTon,
    SiTopcoder,
    SiTopdotgg,
    SiToptal,
    SiTorbrowser,
    SiTorproject,
    SiToshiba,
    SiTotvs,
    SiTourbox,
    SiTower,
    SiToyota,
    SiTplink,
    SiTqdm,
    SiTraccar,
    SiTradingview,
    SiTraefikmesh,
    SiTraefikproxy,
    SiTrailforks,
    SiTrainerroad,
    SiTrakt,
    SiTransifex,
    SiTransmission,
    SiTransportforireland,
    SiTransportforlondon,
    SiTravisci,
    SiTreehouse,
    SiTrello,
    SiTrendmicro,
    SiTreyarch,
    SiTricentis,
    SiTrilium,
    SiTriller,
    SiTrillertv,
    SiTrimble,
    SiTrino,
    SiTripadvisor,
    SiTripdotcom,
    SiTrivago,
    SiTrivy,
    SiTrove,
    SiTrpc,
    SiTruenas,
    SiTrueup,
    SiTrulia,
    SiTrustedshops,
    SiTrustpilot,
    SiTryhackme,
    SiTryitonline,
    SiTsnode,
    SiTubi,
    SiTui,
    SiTumblr,
    SiTunein,
    SiTurbo,
    SiTurborepo,
    SiTurbosquid,
    SiTurkishairlines,
    SiTurso,
    SiTutanota,
    SiTv4Play,
    SiTvtime,
    SiTwilio,
    SiTwinkly,
    SiTwinmotion,
    SiTwitch,
    SiTypeform,
    SiTypeorm,
    SiTyper,
    SiTypescript,
    SiTypo3,
    SiTypst,
    SiUber,
    SiUbereats,
    SiUbiquiti,
    SiUbisoft,
    SiUblockorigin,
    SiUbuntu,
    SiUbuntumate,
    SiUdacity,
    SiUdemy,
    SiUdotsdotnews,
    SiUfc,
    SiUikit,
    SiUipath,
    SiUkca,
    SiUlule,
    SiUmami,
    SiUmbraco,
    SiUml,
    SiUnacademy,
    SiUnderarmour,
    SiUnderscoredotjs,
    SiUndertale,
    SiUnicode,
    SiUnilever,
    SiUniqloJa,
    SiUniqlo,
    SiUnitedairlines,
    SiUnitednations,
    SiUnity,
    SiUnjs,
    SiUnlicense,
} from "react-icons/si"

export function nameToReactIcon_si_2(iconName: string): IconType | undefined {

    switch(iconName) {
        case "si:SiOpenbadges":
            return SiOpenbadges;
        case "si:SiOpenbsd":
            return SiOpenbsd;
        case "si:SiOpenbugbounty":
            return SiOpenbugbounty;
        case "si:SiOpencollective":
            return SiOpencollective;
        case "si:SiOpencontainersinitiative":
            return SiOpencontainersinitiative;
        case "si:SiOpencv":
            return SiOpencv;
        case "si:SiOpenfaas":
            return SiOpenfaas;
        case "si:SiOpengl":
            return SiOpengl;
        case "si:SiOpenhab":
            return SiOpenhab;
        case "si:SiOpenid":
            return SiOpenid;
        case "si:SiOpenjdk":
            return SiOpenjdk;
        case "si:SiOpenjsfoundation":
            return SiOpenjsfoundation;
        case "si:SiOpenlayers":
            return SiOpenlayers;
        case "si:SiOpenmediavault":
            return SiOpenmediavault;
        case "si:SiOpenmined":
            return SiOpenmined;
        case "si:SiOpennebula":
            return SiOpennebula;
        case "si:SiOpenproject":
            return SiOpenproject;
        case "si:SiOpenscad":
            return SiOpenscad;
        case "si:SiOpensea":
            return SiOpensea;
        case "si:SiOpensearch":
            return SiOpensearch;
        case "si:SiOpensourcehardware":
            return SiOpensourcehardware;
        case "si:SiOpensourceinitiative":
            return SiOpensourceinitiative;
        case "si:SiOpenssl":
            return SiOpenssl;
        case "si:SiOpenstack":
            return SiOpenstack;
        case "si:SiOpenstreetmap":
            return SiOpenstreetmap;
        case "si:SiOpensuse":
            return SiOpensuse;
        case "si:SiOpentelemetry":
            return SiOpentelemetry;
        case "si:SiOpentext":
            return SiOpentext;
        case "si:SiOpentofu":
            return SiOpentofu;
        case "si:SiOpenverse":
            return SiOpenverse;
        case "si:SiOpenvpn":
            return SiOpenvpn;
        case "si:SiOpenwrt":
            return SiOpenwrt;
        case "si:SiOpenzeppelin":
            return SiOpenzeppelin;
        case "si:SiOpenzfs":
            return SiOpenzfs;
        case "si:SiOpera":
            return SiOpera;
        case "si:SiOperagx":
            return SiOperagx;
        case "si:SiOpnsense":
            return SiOpnsense;
        case "si:SiOppo":
            return SiOppo;
        case "si:SiOpsgenie":
            return SiOpsgenie;
        case "si:SiOpslevel":
            return SiOpslevel;
        case "si:SiOptimism":
            return SiOptimism;
        case "si:SiOracle":
            return SiOracle;
        case "si:SiOrange":
            return SiOrange;
        case "si:SiOrcid":
            return SiOrcid;
        case "si:SiOreilly":
            return SiOreilly;
        case "si:SiOrg":
            return SiOrg;
        case "si:SiOrganicmaps":
            return SiOrganicmaps;
        case "si:SiOrigin":
            return SiOrigin;
        case "si:SiOsano":
            return SiOsano;
        case "si:SiOsf":
            return SiOsf;
        case "si:SiOsgeo":
            return SiOsgeo;
        case "si:SiOshkosh":
            return SiOshkosh;
        case "si:SiOsmc":
            return SiOsmc;
        case "si:SiOsu":
            return SiOsu;
        case "si:SiOtto":
            return SiOtto;
        case "si:SiOutline":
            return SiOutline;
        case "si:SiOvercast":
            return SiOvercast;
        case "si:SiOverleaf":
            return SiOverleaf;
        case "si:SiOvh":
            return SiOvh;
        case "si:SiOwasp":
            return SiOwasp;
        case "si:SiOwncloud":
            return SiOwncloud;
        case "si:SiOxygen":
            return SiOxygen;
        case "si:SiOyo":
            return SiOyo;
        case "si:SiP5Dotjs":
            return SiP5Dotjs;
        case "si:SiPackagist":
            return SiPackagist;
        case "si:SiPacker":
            return SiPacker;
        case "si:SiPackt":
            return SiPackt;
        case "si:SiPaddle":
            return SiPaddle;
        case "si:SiPaddlepaddle":
            return SiPaddlepaddle;
        case "si:SiPaddypower":
            return SiPaddypower;
        case "si:SiPagekit":
            return SiPagekit;
        case "si:SiPagerduty":
            return SiPagerduty;
        case "si:SiPagespeedinsights":
            return SiPagespeedinsights;
        case "si:SiPagseguro":
            return SiPagseguro;
        case "si:SiPalantir":
            return SiPalantir;
        case "si:SiPaloaltonetworks":
            return SiPaloaltonetworks;
        case "si:SiPaloaltosoftware":
            return SiPaloaltosoftware;
        case "si:SiPanasonic":
            return SiPanasonic;
        case "si:SiPandas":
            return SiPandas;
        case "si:SiPandora":
            return SiPandora;
        case "si:SiPantheon":
            return SiPantheon;
        case "si:SiPaperlessngx":
            return SiPaperlessngx;
        case "si:SiPaperspace":
            return SiPaperspace;
        case "si:SiPaperswithcode":
            return SiPaperswithcode;
        case "si:SiParamountplus":
            return SiParamountplus;
        case "si:SiParitysubstrate":
            return SiParitysubstrate;
        case "si:SiParrotsecurity":
            return SiParrotsecurity;
        case "si:SiParsedotly":
            return SiParsedotly;
        case "si:SiPassport":
            return SiPassport;
        case "si:SiPastebin":
            return SiPastebin;
        case "si:SiPatreon":
            return SiPatreon;
        case "si:SiPaychex":
            return SiPaychex;
        case "si:SiPayhip":
            return SiPayhip;
        case "si:SiPayloadcms":
            return SiPayloadcms;
        case "si:SiPayoneer":
            return SiPayoneer;
        case "si:SiPaypal":
            return SiPaypal;
        case "si:SiPaytm":
            return SiPaytm;
        case "si:SiPcgamingwiki":
            return SiPcgamingwiki;
        case "si:SiPdm":
            return SiPdm;
        case "si:SiPdq":
            return SiPdq;
        case "si:SiPeakdesign":
            return SiPeakdesign;
        case "si:SiPearson":
            return SiPearson;
        case "si:SiPeerlist":
            return SiPeerlist;
        case "si:SiPeertube":
            return SiPeertube;
        case "si:SiPegasusairlines":
            return SiPegasusairlines;
        case "si:SiPelican":
            return SiPelican;
        case "si:SiPeloton":
            return SiPeloton;
        case "si:SiPenny":
            return SiPenny;
        case "si:SiPenpot":
            return SiPenpot;
        case "si:SiPercy":
            return SiPercy;
        case "si:SiPerforce":
            return SiPerforce;
        case "si:SiPerl":
            return SiPerl;
        case "si:SiPerplexity":
            return SiPerplexity;
        case "si:SiPersistent":
            return SiPersistent;
        case "si:SiPersonio":
            return SiPersonio;
        case "si:SiPetsathome":
            return SiPetsathome;
        case "si:SiPeugeot":
            return SiPeugeot;
        case "si:SiPexels":
            return SiPexels;
        case "si:SiPfsense":
            return SiPfsense;
        case "si:SiPhabricator":
            return SiPhabricator;
        case "si:SiPhilipshue":
            return SiPhilipshue;
        case "si:SiPhoenixframework":
            return SiPhoenixframework;
        case "si:SiPhonepe":
            return SiPhonepe;
        case "si:SiPhosphoricons":
            return SiPhosphoricons;
        case "si:SiPhotobucket":
            return SiPhotobucket;
        case "si:SiPhotocrowd":
            return SiPhotocrowd;
        case "si:SiPhoton":
            return SiPhoton;
        case "si:SiPhotopea":
            return SiPhotopea;
        case "si:SiPhp":
            return SiPhp;
        case "si:SiPhpmyadmin":
            return SiPhpmyadmin;
        case "si:SiPhpstorm":
            return SiPhpstorm;
        case "si:SiPiaggiogroup":
            return SiPiaggiogroup;
        case "si:SiPiapro":
            return SiPiapro;
        case "si:SiPicardsurgeles":
            return SiPicardsurgeles;
        case "si:SiPicartodottv":
            return SiPicartodottv;
        case "si:SiPicnic":
            return SiPicnic;
        case "si:SiPicpay":
            return SiPicpay;
        case "si:SiPicrew":
            return SiPicrew;
        case "si:SiPicsart":
            return SiPicsart;
        case "si:SiPicxy":
            return SiPicxy;
        case "si:SiPihole":
            return SiPihole;
        case "si:SiPimcore":
            return SiPimcore;
        case "si:SiPinboard":
            return SiPinboard;
        case "si:SiPinescript":
            return SiPinescript;
        case "si:SiPinetwork":
            return SiPinetwork;
        case "si:SiPingdom":
            return SiPingdom;
        case "si:SiPino":
            return SiPino;
        case "si:SiPinterest":
            return SiPinterest;
        case "si:SiPioneerdj":
            return SiPioneerdj;
        case "si:SiPiped":
            return SiPiped;
        case "si:SiPipx":
            return SiPipx;
        case "si:SiPivotaltracker":
            return SiPivotaltracker;
        case "si:SiPiwigo":
            return SiPiwigo;
        case "si:SiPix":
            return SiPix;
        case "si:SiPixabay":
            return SiPixabay;
        case "si:SiPixelfed":
            return SiPixelfed;
        case "si:SiPixiv":
            return SiPixiv;
        case "si:SiPixlr":
            return SiPixlr;
        case "si:SiPkgsrc":
            return SiPkgsrc;
        case "si:SiPlanet":
            return SiPlanet;
        case "si:SiPlanetscale":
            return SiPlanetscale;
        case "si:SiPlangrid":
            return SiPlangrid;
        case "si:SiPlatformdotsh":
            return SiPlatformdotsh;
        case "si:SiPlatformio":
            return SiPlatformio;
        case "si:SiPlatzi":
            return SiPlatzi;
        case "si:SiPlausibleanalytics":
            return SiPlausibleanalytics;
        case "si:SiPlaycanvas":
            return SiPlaycanvas;
        case "si:SiPlayerdotme":
            return SiPlayerdotme;
        case "si:SiPlayerfm":
            return SiPlayerfm;
        case "si:SiPlaystation":
            return SiPlaystation;
        case "si:SiPlaystation2":
            return SiPlaystation2;
        case "si:SiPlaystation3":
            return SiPlaystation3;
        case "si:SiPlaystation4":
            return SiPlaystation4;
        case "si:SiPlaystation5":
            return SiPlaystation5;
        case "si:SiPlaystationportable":
            return SiPlaystationportable;
        case "si:SiPlaystationvita":
            return SiPlaystationvita;
        case "si:SiPleroma":
            return SiPleroma;
        case "si:SiPlesk":
            return SiPlesk;
        case "si:SiPlex":
            return SiPlex;
        case "si:SiPlotly":
            return SiPlotly;
        case "si:SiPlume":
            return SiPlume;
        case "si:SiPluralsight":
            return SiPluralsight;
        case "si:SiPlurk":
            return SiPlurk;
        case "si:SiPluscodes":
            return SiPluscodes;
        case "si:SiPm2":
            return SiPm2;
        case "si:SiPnpm":
            return SiPnpm;
        case "si:SiPocket":
            return SiPocket;
        case "si:SiPocketbase":
            return SiPocketbase;
        case "si:SiPocketcasts":
            return SiPocketcasts;
        case "si:SiPodcastaddict":
            return SiPodcastaddict;
        case "si:SiPodcastindex":
            return SiPodcastindex;
        case "si:SiPodman":
            return SiPodman;
        case "si:SiPoe":
            return SiPoe;
        case "si:SiPoetry":
            return SiPoetry;
        case "si:SiPointy":
            return SiPointy;
        case "si:SiPokemon":
            return SiPokemon;
        case "si:SiPolars":
            return SiPolars;
        case "si:SiPolestar":
            return SiPolestar;
        case "si:SiPolkadot":
            return SiPolkadot;
        case "si:SiPoly":
            return SiPoly;
        case "si:SiPolygon":
            return SiPolygon;
        case "si:SiPolymerproject":
            return SiPolymerproject;
        case "si:SiPolywork":
            return SiPolywork;
        case "si:SiPond5":
            return SiPond5;
        case "si:SiPopos":
            return SiPopos;
        case "si:SiPorkbun":
            return SiPorkbun;
        case "si:SiPorsche":
            return SiPorsche;
        case "si:SiPortainer":
            return SiPortainer;
        case "si:SiPortswigger":
            return SiPortswigger;
        case "si:SiPosit":
            return SiPosit;
        case "si:SiPostcss":
            return SiPostcss;
        case "si:SiPostgresql":
            return SiPostgresql;
        case "si:SiPosthog":
            return SiPosthog;
        case "si:SiPostman":
            return SiPostman;
        case "si:SiPostmates":
            return SiPostmates;
        case "si:SiPowers":
            return SiPowers;
        case "si:SiPrdotco":
            return SiPrdotco;
        case "si:SiPreact":
            return SiPreact;
        case "si:SiPrecommit":
            return SiPrecommit;
        case "si:SiPrefect":
            return SiPrefect;
        case "si:SiPremierleague":
            return SiPremierleague;
        case "si:SiPrepbytes":
            return SiPrepbytes;
        case "si:SiPrestashop":
            return SiPrestashop;
        case "si:SiPresto":
            return SiPresto;
        case "si:SiPrettier":
            return SiPrettier;
        case "si:SiPretzel":
            return SiPretzel;
        case "si:SiPrevention":
            return SiPrevention;
        case "si:SiPrezi":
            return SiPrezi;
        case "si:SiPrime":
            return SiPrime;
        case "si:SiPrimefaces":
            return SiPrimefaces;
        case "si:SiPrimeng":
            return SiPrimeng;
        case "si:SiPrimereact":
            return SiPrimereact;
        case "si:SiPrimevideo":
            return SiPrimevideo;
        case "si:SiPrimevue":
            return SiPrimevue;
        case "si:SiPrintables":
            return SiPrintables;
        case "si:SiPrisma":
            return SiPrisma;
        case "si:SiPrismic":
            return SiPrismic;
        case "si:SiPrivatedivision":
            return SiPrivatedivision;
        case "si:SiPrivateinternetaccess":
            return SiPrivateinternetaccess;
        case "si:SiProbot":
            return SiProbot;
        case "si:SiProcessingfoundation":
            return SiProcessingfoundation;
        case "si:SiProcesswire":
            return SiProcesswire;
        case "si:SiProducthunt":
            return SiProducthunt;
        case "si:SiProgate":
            return SiProgate;
        case "si:SiProgress":
            return SiProgress;
        case "si:SiPrometheus":
            return SiPrometheus;
        case "si:SiPronounsdotpage":
            return SiPronounsdotpage;
        case "si:SiProsieben":
            return SiProsieben;
        case "si:SiProteus":
            return SiProteus;
        case "si:SiProtocolsdotio":
            return SiProtocolsdotio;
        case "si:SiProtodotio":
            return SiProtodotio;
        case "si:SiProton":
            return SiProton;
        case "si:SiProtoncalendar":
            return SiProtoncalendar;
        case "si:SiProtondb":
            return SiProtondb;
        case "si:SiProtondrive":
            return SiProtondrive;
        case "si:SiProtonmail":
            return SiProtonmail;
        case "si:SiProtonvpn":
            return SiProtonvpn;
        case "si:SiProtools":
            return SiProtools;
        case "si:SiProtractor":
            return SiProtractor;
        case "si:SiProxmox":
            return SiProxmox;
        case "si:SiPterodactyl":
            return SiPterodactyl;
        case "si:SiPubg":
            return SiPubg;
        case "si:SiPublons":
            return SiPublons;
        case "si:SiPubmed":
            return SiPubmed;
        case "si:SiPug":
            return SiPug;
        case "si:SiPulumi":
            return SiPulumi;
        case "si:SiPuma":
            return SiPuma;
        case "si:SiPuppet":
            return SiPuppet;
        case "si:SiPuppeteer":
            return SiPuppeteer;
        case "si:SiPurescript":
            return SiPurescript;
        case "si:SiPurgecss":
            return SiPurgecss;
        case "si:SiPurism":
            return SiPurism;
        case "si:SiPushbullet":
            return SiPushbullet;
        case "si:SiPusher":
            return SiPusher;
        case "si:SiPwa":
            return SiPwa;
        case "si:SiPycharm":
            return SiPycharm;
        case "si:SiPycqa":
            return SiPycqa;
        case "si:SiPydantic":
            return SiPydantic;
        case "si:SiPyg":
            return SiPyg;
        case "si:SiPypi":
            return SiPypi;
        case "si:SiPypy":
            return SiPypy;
        case "si:SiPyscaffold":
            return SiPyscaffold;
        case "si:SiPysyft":
            return SiPysyft;
        case "si:SiPytest":
            return SiPytest;
        case "si:SiPython":
            return SiPython;
        case "si:SiPythonanywhere":
            return SiPythonanywhere;
        case "si:SiPytorch":
            return SiPytorch;
        case "si:SiPyup":
            return SiPyup;
        case "si:SiQantas":
            return SiQantas;
        case "si:SiQase":
            return SiQase;
        case "si:SiQatarairways":
            return SiQatarairways;
        case "si:SiQbittorrent":
            return SiQbittorrent;
        case "si:SiQemu":
            return SiQemu;
        case "si:SiQgis":
            return SiQgis;
        case "si:SiQi":
            return SiQi;
        case "si:SiQiita":
            return SiQiita;
        case "si:SiQiskit":
            return SiQiskit;
        case "si:SiQiwi":
            return SiQiwi;
        case "si:SiQlik":
            return SiQlik;
        case "si:SiQmk":
            return SiQmk;
        case "si:SiQnap":
            return SiQnap;
        case "si:SiQt":
            return SiQt;
        case "si:SiQualcomm":
            return SiQualcomm;
        case "si:SiQualtrics":
            return SiQualtrics;
        case "si:SiQualys":
            return SiQualys;
        case "si:SiQuantcast":
            return SiQuantcast;
        case "si:SiQuantconnect":
            return SiQuantconnect;
        case "si:SiQuarkus":
            return SiQuarkus;
        case "si:SiQuarto":
            return SiQuarto;
        case "si:SiQuasar":
            return SiQuasar;
        case "si:SiQubesos":
            return SiQubesos;
        case "si:SiQuest":
            return SiQuest;
        case "si:SiQuickbooks":
            return SiQuickbooks;
        case "si:SiQuicklook":
            return SiQuicklook;
        case "si:SiQuicktime":
            return SiQuicktime;
        case "si:SiQuicktype":
            return SiQuicktype;
        case "si:SiQuip":
            return SiQuip;
        case "si:SiQuizlet":
            return SiQuizlet;
        case "si:SiQuora":
            return SiQuora;
        case "si:SiQwant":
            return SiQwant;
        case "si:SiQwik":
            return SiQwik;
        case "si:SiQwiklabs":
            return SiQwiklabs;
        case "si:SiQzone":
            return SiQzone;
        case "si:SiR":
            return SiR;
        case "si:SiR3":
            return SiR3;
        case "si:SiRabbitmq":
            return SiRabbitmq;
        case "si:SiRacket":
            return SiRacket;
        case "si:SiRadar":
            return SiRadar;
        case "si:SiRadarr":
            return SiRadarr;
        case "si:SiRadiopublic":
            return SiRadiopublic;
        case "si:SiRadixui":
            return SiRadixui;
        case "si:SiRadstudio":
            return SiRadstudio;
        case "si:SiRailway":
            return SiRailway;
        case "si:SiRainmeter":
            return SiRainmeter;
        case "si:SiRakuten":
            return SiRakuten;
        case "si:SiRam":
            return SiRam;
        case "si:SiRancher":
            return SiRancher;
        case "si:SiRapid":
            return SiRapid;
        case "si:SiRarible":
            return SiRarible;
        case "si:SiRasa":
            return SiRasa;
        case "si:SiRaspberrypi":
            return SiRaspberrypi;
        case "si:SiRavelry":
            return SiRavelry;
        case "si:SiRay":
            return SiRay;
        case "si:SiRaycast":
            return SiRaycast;
        case "si:SiRaylib":
            return SiRaylib;
        case "si:SiRazer":
            return SiRazer;
        case "si:SiRazorpay":
            return SiRazorpay;
        case "si:SiRclone":
            return SiRclone;
        case "si:SiReact":
            return SiReact;
        case "si:SiReactbootstrap":
            return SiReactbootstrap;
        case "si:SiReacthookform":
            return SiReacthookform;
        case "si:SiReactiveresume":
            return SiReactiveresume;
        case "si:SiReactivex":
            return SiReactivex;
        case "si:SiReactos":
            return SiReactos;
        case "si:SiReactquery":
            return SiReactquery;
        case "si:SiReactrouter":
            return SiReactrouter;
        case "si:SiReacttable":
            return SiReacttable;
        case "si:SiReaddotcv":
            return SiReaddotcv;
        case "si:SiReadme":
            return SiReadme;
        case "si:SiReadthedocs":
            return SiReadthedocs;
        case "si:SiRealm":
            return SiRealm;
        case "si:SiReason":
            return SiReason;
        case "si:SiReasonstudios":
            return SiReasonstudios;
        case "si:SiRecoil":
            return SiRecoil;
        case "si:SiRed":
            return SiRed;
        case "si:SiRedash":
            return SiRedash;
        case "si:SiRedbubble":
            return SiRedbubble;
        case "si:SiRedbull":
            return SiRedbull;
        case "si:SiRedcandlegames":
            return SiRedcandlegames;
        case "si:SiReddit":
            return SiReddit;
        case "si:SiRedhat":
            return SiRedhat;
        case "si:SiRedhatopenshift":
            return SiRedhatopenshift;
        case "si:SiRedis":
            return SiRedis;
        case "si:SiRedmine":
            return SiRedmine;
        case "si:SiRedox":
            return SiRedox;
        case "si:SiRedragon":
            return SiRedragon;
        case "si:SiRedsys":
            return SiRedsys;
        case "si:SiRedux":
            return SiRedux;
        case "si:SiReduxsaga":
            return SiReduxsaga;
        case "si:SiRedwoodjs":
            return SiRedwoodjs;
        case "si:SiReebok":
            return SiReebok;
        case "si:SiRefine":
            return SiRefine;
        case "si:SiRefinedgithub":
            return SiRefinedgithub;
        case "si:SiRelay":
            return SiRelay;
        case "si:SiRelianceindustrieslimited":
            return SiRelianceindustrieslimited;
        case "si:SiRemark":
            return SiRemark;
        case "si:SiRemedyentertainment":
            return SiRemedyentertainment;
        case "si:SiRemix":
            return SiRemix;
        case "si:SiRemovedotbg":
            return SiRemovedotbg;
        case "si:SiRenault":
            return SiRenault;
        case "si:SiRender":
            return SiRender;
        case "si:SiRenovate":
            return SiRenovate;
        case "si:SiRenpy":
            return SiRenpy;
        case "si:SiRenren":
            return SiRenren;
        case "si:SiReplit":
            return SiReplit;
        case "si:SiRepublicofgamers":
            return SiRepublicofgamers;
        case "si:SiRescript":
            return SiRescript;
        case "si:SiRescuetime":
            return SiRescuetime;
        case "si:SiResearchgate":
            return SiResearchgate;
        case "si:SiResend":
            return SiResend;
        case "si:SiResharper":
            return SiResharper;
        case "si:SiResurrectionremixos":
            return SiResurrectionremixos;
        case "si:SiRetool":
            return SiRetool;
        case "si:SiRetroarch":
            return SiRetroarch;
        case "si:SiRetropie":
            return SiRetropie;
        case "si:SiRevanced":
            return SiRevanced;
        case "si:SiRevealdotjs":
            return SiRevealdotjs;
        case "si:SiReverbnation":
            return SiReverbnation;
        case "si:SiRevoltdotchat":
            return SiRevoltdotchat;
        case "si:SiRevolut":
            return SiRevolut;
        case "si:SiRevue":
            return SiRevue;
        case "si:SiRewe":
            return SiRewe;
        case "si:SiRezgo":
            return SiRezgo;
        case "si:SiRhinoceros":
            return SiRhinoceros;
        case "si:SiRich":
            return SiRich;
        case "si:SiRider":
            return SiRider;
        case "si:SiRimacautomobili":
            return SiRimacautomobili;
        case "si:SiRime":
            return SiRime;
        case "si:SiRing":
            return SiRing;
        case "si:SiRiotgames":
            return SiRiotgames;
        case "si:SiRipple":
            return SiRipple;
        case "si:SiRiscv":
            return SiRiscv;
        case "si:SiRiseup":
            return SiRiseup;
        case "si:SiRitzcarlton":
            return SiRitzcarlton;
        case "si:SiRive":
            return SiRive;
        case "si:SiRoadmapdotsh":
            return SiRoadmapdotsh;
        case "si:SiRoamresearch":
            return SiRoamresearch;
        case "si:SiRobinhood":
            return SiRobinhood;
        case "si:SiRoblox":
            return SiRoblox;
        case "si:SiRobloxstudio":
            return SiRobloxstudio;
        case "si:SiRoboflow":
            return SiRoboflow;
        case "si:SiRobotframework":
            return SiRobotframework;
        case "si:SiRocket":
            return SiRocket;
        case "si:SiRocketdotchat":
            return SiRocketdotchat;
        case "si:SiRocksdb":
            return SiRocksdb;
        case "si:SiRockstargames":
            return SiRockstargames;
        case "si:SiRockwellautomation":
            return SiRockwellautomation;
        case "si:SiRockylinux":
            return SiRockylinux;
        case "si:SiRoku":
            return SiRoku;
        case "si:SiRoll20":
            return SiRoll20;
        case "si:SiRollsroyce":
            return SiRollsroyce;
        case "si:SiRollupdotjs":
            return SiRollupdotjs;
        case "si:SiRoon":
            return SiRoon;
        case "si:SiRootme":
            return SiRootme;
        case "si:SiRoots":
            return SiRoots;
        case "si:SiRootsbedrock":
            return SiRootsbedrock;
        case "si:SiRootssage":
            return SiRootssage;
        case "si:SiRos":
            return SiRos;
        case "si:SiRossmann":
            return SiRossmann;
        case "si:SiRotaryinternational":
            return SiRotaryinternational;
        case "si:SiRottentomatoes":
            return SiRottentomatoes;
        case "si:SiRoundcube":
            return SiRoundcube;
        case "si:SiRsocket":
            return SiRsocket;
        case "si:SiRss":
            return SiRss;
        case "si:SiRstudioide":
            return SiRstudioide;
        case "si:SiRte":
            return SiRte;
        case "si:SiRtl":
            return SiRtl;
        case "si:SiRtlzwei":
            return SiRtlzwei;
        case "si:SiRtm":
            return SiRtm;
        case "si:SiRubocop":
            return SiRubocop;
        case "si:SiRuby":
            return SiRuby;
        case "si:SiRubygems":
            return SiRubygems;
        case "si:SiRubymine":
            return SiRubymine;
        case "si:SiRubyonrails":
            return SiRubyonrails;
        case "si:SiRubysinatra":
            return SiRubysinatra;
        case "si:SiRuff":
            return SiRuff;
        case "si:SiRumahweb":
            return SiRumahweb;
        case "si:SiRumble":
            return SiRumble;
        case "si:SiRundeck":
            return SiRundeck;
        case "si:SiRunkeeper":
            return SiRunkeeper;
        case "si:SiRunkit":
            return SiRunkit;
        case "si:SiRunrundotit":
            return SiRunrundotit;
        case "si:SiRust":
            return SiRust;
        case "si:SiRustdesk":
            return SiRustdesk;
        case "si:SiRxdb":
            return SiRxdb;
        case "si:SiRyanair":
            return SiRyanair;
        case "si:SiRye":
            return SiRye;
        case "si:SiS7Airlines":
            return SiS7Airlines;
        case "si:SiSabanci":
            return SiSabanci;
        case "si:SiSafari":
            return SiSafari;
        case "si:SiSage":
            return SiSage;
        case "si:SiSahibinden":
            return SiSahibinden;
        case "si:SiSailfishos":
            return SiSailfishos;
        case "si:SiSailsdotjs":
            return SiSailsdotjs;
        case "si:SiSalesforce":
            return SiSalesforce;
        case "si:SiSalla":
            return SiSalla;
        case "si:SiSaltproject":
            return SiSaltproject;
        case "si:SiSamsclub":
            return SiSamsclub;
        case "si:SiSamsung":
            return SiSamsung;
        case "si:SiSamsungpay":
            return SiSamsungpay;
        case "si:SiSandisk":
            return SiSandisk;
        case "si:SiSanfranciscomunicipalrailway":
            return SiSanfranciscomunicipalrailway;
        case "si:SiSanic":
            return SiSanic;
        case "si:SiSanity":
            return SiSanity;
        case "si:SiSaopaulometro":
            return SiSaopaulometro;
        case "si:SiSap":
            return SiSap;
        case "si:SiSartorius":
            return SiSartorius;
        case "si:SiSass":
            return SiSass;
        case "si:SiSat1":
            return SiSat1;
        case "si:SiSatellite":
            return SiSatellite;
        case "si:SiSaturn":
            return SiSaturn;
        case "si:SiSaucelabs":
            return SiSaucelabs;
        case "si:SiSaudia":
            return SiSaudia;
        case "si:SiScala":
            return SiScala;
        case "si:SiScaleway":
            return SiScaleway;
        case "si:SiScania":
            return SiScania;
        case "si:SiSchneiderelectric":
            return SiSchneiderelectric;
        case "si:SiScikitlearn":
            return SiScikitlearn;
        case "si:SiScilab":
            return SiScilab;
        case "si:SiScipy":
            return SiScipy;
        case "si:SiScopus":
            return SiScopus;
        case "si:SiScpfoundation":
            return SiScpfoundation;
        case "si:SiScrapbox":
            return SiScrapbox;
        case "si:SiScrapy":
            return SiScrapy;
        case "si:SiScratch":
            return SiScratch;
        case "si:SiScreencastify":
            return SiScreencastify;
        case "si:SiScribd":
            return SiScribd;
        case "si:SiScrimba":
            return SiScrimba;
        case "si:SiScrollreveal":
            return SiScrollreveal;
        case "si:SiScrumalliance":
            return SiScrumalliance;
        case "si:SiScrutinizerci":
            return SiScrutinizerci;
        case "si:SiScylladb":
            return SiScylladb;
        case "si:SiSeagate":
            return SiSeagate;
        case "si:SiSearxng":
            return SiSearxng;
        case "si:SiSeat":
            return SiSeat;
        case "si:SiSeatgeek":
            return SiSeatgeek;
        case "si:SiSecurityscorecard":
            return SiSecurityscorecard;
        case "si:SiSefaria":
            return SiSefaria;
        case "si:SiSega":
            return SiSega;
        case "si:SiSelenium":
            return SiSelenium;
        case "si:SiSellfy":
            return SiSellfy;
        case "si:SiSemanticrelease":
            return SiSemanticrelease;
        case "si:SiSemanticscholar":
            return SiSemanticscholar;
        case "si:SiSemanticui":
            return SiSemanticui;
        case "si:SiSemanticuireact":
            return SiSemanticuireact;
        case "si:SiSemanticweb":
            return SiSemanticweb;
        case "si:SiSemaphoreci":
            return SiSemaphoreci;
        case "si:SiSemrush":
            return SiSemrush;
        case "si:SiSemver":
            return SiSemver;
        case "si:SiSencha":
            return SiSencha;
        case "si:SiSendgrid":
            return SiSendgrid;
        case "si:SiSennheiser":
            return SiSennheiser;
        case "si:SiSensu":
            return SiSensu;
        case "si:SiSentry":
            return SiSentry;
        case "si:SiSepa":
            return SiSepa;
        case "si:SiSequelize":
            return SiSequelize;
        case "si:SiServerfault":
            return SiServerfault;
        case "si:SiServerless":
            return SiServerless;
        case "si:SiSession":
            return SiSession;
        case "si:SiSessionize":
            return SiSessionize;
        case "si:SiSetapp":
            return SiSetapp;
        case "si:SiSfml":
            return SiSfml;
        case "si:SiShadcnui":
            return SiShadcnui;
        case "si:SiShadow":
            return SiShadow;
        case "si:SiShanghaimetro":
            return SiShanghaimetro;
        case "si:SiSharex":
            return SiSharex;
        case "si:SiSharp":
            return SiSharp;
        case "si:SiShazam":
            return SiShazam;
        case "si:SiShell":
            return SiShell;
        case "si:SiShelly":
            return SiShelly;
        case "si:SiShenzhenmetro":
            return SiShenzhenmetro;
        case "si:SiShieldsdotio":
            return SiShieldsdotio;
        case "si:SiShikimori":
            return SiShikimori;
        case "si:SiShopee":
            return SiShopee;
        case "si:SiShopify":
            return SiShopify;
        case "si:SiShopware":
            return SiShopware;
        case "si:SiShortcut":
            return SiShortcut;
        case "si:SiShowpad":
            return SiShowpad;
        case "si:SiShowtime":
            return SiShowtime;
        case "si:SiShowwcase":
            return SiShowwcase;
        case "si:SiShutterstock":
            return SiShutterstock;
        case "si:SiSidekiq":
            return SiSidekiq;
        case "si:SiSidequest":
            return SiSidequest;
        case "si:SiSiemens":
            return SiSiemens;
        case "si:SiSifive":
            return SiSifive;
        case "si:SiSignal":
            return SiSignal;
        case "si:SiSilverairways":
            return SiSilverairways;
        case "si:SiSimilarweb":
            return SiSimilarweb;
        case "si:SiSimkl":
            return SiSimkl;
        case "si:SiSimpleanalytics":
            return SiSimpleanalytics;
        case "si:SiSimpleicons":
            return SiSimpleicons;
        case "si:SiSimplelogin":
            return SiSimplelogin;
        case "si:SiSimplenote":
            return SiSimplenote;
        case "si:SiSimplex":
            return SiSimplex;
        case "si:SiSinaweibo":
            return SiSinaweibo;
        case "si:SiSingaporeairlines":
            return SiSingaporeairlines;
        case "si:SiSinglestore":
            return SiSinglestore;
        case "si:SiSitecore":
            return SiSitecore;
        case "si:SiSitepoint":
            return SiSitepoint;
        case "si:SiSiyuan":
            return SiSiyuan;
        case "si:SiSkaffold":
            return SiSkaffold;
        case "si:SiSketch":
            return SiSketch;
        case "si:SiSketchfab":
            return SiSketchfab;
        case "si:SiSketchup":
            return SiSketchup;
        case "si:SiSkillshare":
            return SiSkillshare;
        case "si:SiSkoda":
            return SiSkoda;
        case "si:SiSky":
            return SiSky;
        case "si:SiSkypack":
            return SiSkypack;
        case "si:SiSkyrock":
            return SiSkyrock;
        case "si:SiSlack":
            return SiSlack;
        case "si:SiSlackware":
            return SiSlackware;
        case "si:SiSlashdot":
            return SiSlashdot;
        case "si:SiSlickpic":
            return SiSlickpic;
        case "si:SiSlides":
            return SiSlides;
        case "si:SiSlideshare":
            return SiSlideshare;
        case "si:SiSlint":
            return SiSlint;
        case "si:SiSmart":
            return SiSmart;
        case "si:SiSmartthings":
            return SiSmartthings;
        case "si:SiSmashdotgg":
            return SiSmashdotgg;
        case "si:SiSmashingmagazine":
            return SiSmashingmagazine;
        case "si:SiSmrt":
            return SiSmrt;
        case "si:SiSmugmug":
            return SiSmugmug;
        case "si:SiSnapchat":
            return SiSnapchat;
        case "si:SiSnapcraft":
            return SiSnapcraft;
        case "si:SiSnapdragon":
            return SiSnapdragon;
        case "si:SiSncf":
            return SiSncf;
        case "si:SiSnort":
            return SiSnort;
        case "si:SiSnowflake":
            return SiSnowflake;
        case "si:SiSnowpack":
            return SiSnowpack;
        case "si:SiSnyk":
            return SiSnyk;
        case "si:SiSocialblade":
            return SiSocialblade;
        case "si:SiSociety6":
            return SiSociety6;
        case "si:SiSocketdotio":
            return SiSocketdotio;
        case "si:SiSoftpedia":
            return SiSoftpedia;
        case "si:SiSogou":
            return SiSogou;
        case "si:SiSolana":
            return SiSolana;
        case "si:SiSolid":
            return SiSolid;
        case "si:SiSolidity":
            return SiSolidity;
        case "si:SiSololearn":
            return SiSololearn;
        case "si:SiSolus":
            return SiSolus;
        case "si:SiSonar":
            return SiSonar;
        case "si:SiSonarcloud":
            return SiSonarcloud;
        case "si:SiSonarlint":
            return SiSonarlint;
        case "si:SiSonarqube":
            return SiSonarqube;
        case "si:SiSonarr":
            return SiSonarr;
        case "si:SiSonatype":
            return SiSonatype;
        case "si:SiSongkick":
            return SiSongkick;
        case "si:SiSongoda":
            return SiSongoda;
        case "si:SiSonicwall":
            return SiSonicwall;
        case "si:SiSonos":
            return SiSonos;
        case "si:SiSony":
            return SiSony;
        case "si:SiSoriana":
            return SiSoriana;
        case "si:SiSoundcharts":
            return SiSoundcharts;
        case "si:SiSoundcloud":
            return SiSoundcloud;
        case "si:SiSourceengine":
            return SiSourceengine;
        case "si:SiSourceforge":
            return SiSourceforge;
        case "si:SiSourcehut":
            return SiSourcehut;
        case "si:SiSourcetree":
            return SiSourcetree;
        case "si:SiSouthwestairlines":
            return SiSouthwestairlines;
        case "si:SiSpacemacs":
            return SiSpacemacs;
        case "si:SiSpaceship":
            return SiSpaceship;
        case "si:SiSpacex":
            return SiSpacex;
        case "si:SiSpacy":
            return SiSpacy;
        case "si:SiSparkar":
            return SiSparkar;
        case "si:SiSparkasse":
            return SiSparkasse;
        case "si:SiSparkfun":
            return SiSparkfun;
        case "si:SiSparkpost":
            return SiSparkpost;
        case "si:SiSpdx":
            return SiSpdx;
        case "si:SiSpeakerdeck":
            return SiSpeakerdeck;
        case "si:SiSpectrum":
            return SiSpectrum;
        case "si:SiSpeedtest":
            return SiSpeedtest;
        case "si:SiSpeedypage":
            return SiSpeedypage;
        case "si:SiSphinx":
            return SiSphinx;
        case "si:SiSpigotmc":
            return SiSpigotmc;
        case "si:SiSpine":
            return SiSpine;
        case "si:SiSpinnaker":
            return SiSpinnaker;
        case "si:SiSpinrilla":
            return SiSpinrilla;
        case "si:SiSplunk":
            return SiSplunk;
        case "si:SiSpoj":
            return SiSpoj;
        case "si:SiSpond":
            return SiSpond;
        case "si:SiSpotify":
            return SiSpotify;
        case "si:SiSpotlight":
            return SiSpotlight;
        case "si:SiSpreadshirt":
            return SiSpreadshirt;
        case "si:SiSpreaker":
            return SiSpreaker;
        case "si:SiSpringCreators":
            return SiSpringCreators;
        case "si:SiSpring":
            return SiSpring;
        case "si:SiSpringboot":
            return SiSpringboot;
        case "si:SiSpringsecurity":
            return SiSpringsecurity;
        case "si:SiSpyderide":
            return SiSpyderide;
        case "si:SiSqlalchemy":
            return SiSqlalchemy;
        case "si:SiSqlite":
            return SiSqlite;
        case "si:SiSquare":
            return SiSquare;
        case "si:SiSquareenix":
            return SiSquareenix;
        case "si:SiSquarespace":
            return SiSquarespace;
        case "si:SiSrgssr":
            return SiSrgssr;
        case "si:SiSsrn":
            return SiSsrn;
        case "si:SiSst":
            return SiSst;
        case "si:SiStackbit":
            return SiStackbit;
        case "si:SiStackblitz":
            return SiStackblitz;
        case "si:SiStackedit":
            return SiStackedit;
        case "si:SiStackexchange":
            return SiStackexchange;
        case "si:SiStackhawk":
            return SiStackhawk;
        case "si:SiStackoverflow":
            return SiStackoverflow;
        case "si:SiStackpath":
            return SiStackpath;
        case "si:SiStackshare":
            return SiStackshare;
        case "si:SiStadia":
            return SiStadia;
        case "si:SiStaffbase":
            return SiStaffbase;
        case "si:SiStagetimer":
            return SiStagetimer;
        case "si:SiStandardjs":
            return SiStandardjs;
        case "si:SiStandardresume":
            return SiStandardresume;
        case "si:SiStarbucks":
            return SiStarbucks;
        case "si:SiStardock":
            return SiStardock;
        case "si:SiStarlingbank":
            return SiStarlingbank;
        case "si:SiStarship":
            return SiStarship;
        case "si:SiStartpage":
            return SiStartpage;
        case "si:SiStartrek":
            return SiStartrek;
        case "si:SiStarz":
            return SiStarz;
        case "si:SiStatamic":
            return SiStatamic;
        case "si:SiStatista":
            return SiStatista;
        case "si:SiStatuspage":
            return SiStatuspage;
        case "si:SiStatuspal":
            return SiStatuspal;
        case "si:SiSteam":
            return SiSteam;
        case "si:SiSteamdb":
            return SiSteamdb;
        case "si:SiSteamdeck":
            return SiSteamdeck;
        case "si:SiSteamworks":
            return SiSteamworks;
        case "si:SiSteelseries":
            return SiSteelseries;
        case "si:SiSteem":
            return SiSteem;
        case "si:SiSteemit":
            return SiSteemit;
        case "si:SiSteinberg":
            return SiSteinberg;
        case "si:SiStellar":
            return SiStellar;
        case "si:SiStencil":
            return SiStencil;
        case "si:SiStencyl":
            return SiStencyl;
        case "si:SiStimulus":
            return SiStimulus;
        case "si:SiStitcher":
            return SiStitcher;
        case "si:SiStmicroelectronics":
            return SiStmicroelectronics;
        case "si:SiStockx":
            return SiStockx;
        case "si:SiStopstalk":
            return SiStopstalk;
        case "si:SiStoryblok":
            return SiStoryblok;
        case "si:SiStorybook":
            return SiStorybook;
        case "si:SiStrapi":
            return SiStrapi;
        case "si:SiStrava":
            return SiStrava;
        case "si:SiStreamlabs":
            return SiStreamlabs;
        case "si:SiStreamlit":
            return SiStreamlit;
        case "si:SiStreamrunners":
            return SiStreamrunners;
        case "si:SiStremio":
            return SiStremio;
        case "si:SiStripe":
            return SiStripe;
        case "si:SiStrongswan":
            return SiStrongswan;
        case "si:SiStryker":
            return SiStryker;
        case "si:SiStubhub":
            return SiStubhub;
        case "si:SiStudio3T":
            return SiStudio3T;
        case "si:SiStudyverse":
            return SiStudyverse;
        case "si:SiStyledcomponents":
            return SiStyledcomponents;
        case "si:SiStylelint":
            return SiStylelint;
        case "si:SiStyleshare":
            return SiStyleshare;
        case "si:SiStylus":
            return SiStylus;
        case "si:SiSubaru":
            return SiSubaru;
        case "si:SiSublimetext":
            return SiSublimetext;
        case "si:SiSubstack":
            return SiSubstack;
        case "si:SiSubtitleedit":
            return SiSubtitleedit;
        case "si:SiSubversion":
            return SiSubversion;
        case "si:SiSuckless":
            return SiSuckless;
        case "si:SiSui":
            return SiSui;
        case "si:SiSumologic":
            return SiSumologic;
        case "si:SiSuno":
            return SiSuno;
        case "si:SiSunrise":
            return SiSunrise;
        case "si:SiSupabase":
            return SiSupabase;
        case "si:SiSupercrease":
            return SiSupercrease;
        case "si:SiSupermicro":
            return SiSupermicro;
        case "si:SiSuperuser":
            return SiSuperuser;
        case "si:SiSurrealdb":
            return SiSurrealdb;
        case "si:SiSurveymonkey":
            return SiSurveymonkey;
        case "si:SiSuse":
            return SiSuse;
        case "si:SiSuzuki":
            return SiSuzuki;
        case "si:SiSvelte":
            return SiSvelte;
        case "si:SiSvg":
            return SiSvg;
        case "si:SiSvgdotjs":
            return SiSvgdotjs;
        case "si:SiSvgo":
            return SiSvgo;
        case "si:SiSvgtrace":
            return SiSvgtrace;
        case "si:SiSwagger":
            return SiSwagger;
        case "si:SiSwarm":
            return SiSwarm;
        case "si:SiSway":
            return SiSway;
        case "si:SiSwc":
            return SiSwc;
        case "si:SiSwift":
            return SiSwift;
        case "si:SiSwiggy":
            return SiSwiggy;
        case "si:SiSwiper":
            return SiSwiper;
        case "si:SiSwr":
            return SiSwr;
        case "si:SiSymantec":
            return SiSymantec;
        case "si:SiSymbolab":
            return SiSymbolab;
        case "si:SiSymfony":
            return SiSymfony;
        case "si:SiSymphony":
            return SiSymphony;
        case "si:SiSympy":
            return SiSympy;
        case "si:SiSyncthing":
            return SiSyncthing;
        case "si:SiSynology":
            return SiSynology;
        case "si:SiSystem76":
            return SiSystem76;
        case "si:SiTabelog":
            return SiTabelog;
        case "si:SiTableau":
            return SiTableau;
        case "si:SiTablecheck":
            return SiTablecheck;
        case "si:SiTacobell":
            return SiTacobell;
        case "si:SiTado":
            return SiTado;
        case "si:SiTaichigraphics":
            return SiTaichigraphics;
        case "si:SiTaichilang":
            return SiTaichilang;
        case "si:SiTails":
            return SiTails;
        case "si:SiTailscale":
            return SiTailscale;
        case "si:SiTailwindcss":
            return SiTailwindcss;
        case "si:SiTaipy":
            return SiTaipy;
        case "si:SiTaketwointeractivesoftware":
            return SiTaketwointeractivesoftware;
        case "si:SiTalend":
            return SiTalend;
        case "si:SiTalenthouse":
            return SiTalenthouse;
        case "si:SiTalos":
            return SiTalos;
        case "si:SiTamiya":
            return SiTamiya;
        case "si:SiTampermonkey":
            return SiTampermonkey;
        case "si:SiTaobao":
            return SiTaobao;
        case "si:SiTapas":
            return SiTapas;
        case "si:SiTarget":
            return SiTarget;
        case "si:SiTarom":
            return SiTarom;
        case "si:SiTask":
            return SiTask;
        case "si:SiTasmota":
            return SiTasmota;
        case "si:SiTata":
            return SiTata;
        case "si:SiTauri":
            return SiTauri;
        case "si:SiTaxbuzz":
            return SiTaxbuzz;
        case "si:SiTcs":
            return SiTcs;
        case "si:SiTeal":
            return SiTeal;
        case "si:SiTeamcity":
            return SiTeamcity;
        case "si:SiTeamspeak":
            return SiTeamspeak;
        case "si:SiTeamviewer":
            return SiTeamviewer;
        case "si:SiTechcrunch":
            return SiTechcrunch;
        case "si:SiTed":
            return SiTed;
        case "si:SiTeepublic":
            return SiTeepublic;
        case "si:SiTeespring":
            return SiTeespring;
        case "si:SiTekton":
            return SiTekton;
        case "si:SiTele5":
            return SiTele5;
        case "si:SiTelegram":
            return SiTelegram;
        case "si:SiTelegraph":
            return SiTelegraph;
        case "si:SiTelequebec":
            return SiTelequebec;
        case "si:SiTemporal":
            return SiTemporal;
        case "si:SiTencentqq":
            return SiTencentqq;
        case "si:SiTensorflow":
            return SiTensorflow;
        case "si:SiTeradata":
            return SiTeradata;
        case "si:SiTeratail":
            return SiTeratail;
        case "si:SiTermius":
            return SiTermius;
        case "si:SiTerraform":
            return SiTerraform;
        case "si:SiTesco":
            return SiTesco;
        case "si:SiTesla":
            return SiTesla;
        case "si:SiTestcafe":
            return SiTestcafe;
        case "si:SiTestin":
            return SiTestin;
        case "si:SiTestinglibrary":
            return SiTestinglibrary;
        case "si:SiTestrail":
            return SiTestrail;
        case "si:SiTether":
            return SiTether;
        case "si:SiTextpattern":
            return SiTextpattern;
        case "si:SiTga":
            return SiTga;
        case "si:SiThangs":
            return SiThangs;
        case "si:SiThanos":
            return SiThanos;
        case "si:SiThealgorithms":
            return SiThealgorithms;
        case "si:SiTheboringcompany":
            return SiTheboringcompany;
        case "si:SiTheconversation":
            return SiTheconversation;
        case "si:SiThefinals":
            return SiThefinals;
        case "si:SiTheguardian":
            return SiTheguardian;
        case "si:SiTheirishtimes":
            return SiTheirishtimes;
        case "si:SiThemighty":
            return SiThemighty;
        case "si:SiThemodelsresource":
            return SiThemodelsresource;
        case "si:SiThemoviedatabase":
            return SiThemoviedatabase;
        case "si:SiThenorthface":
            return SiThenorthface;
        case "si:SiTheodinproject":
            return SiTheodinproject;
        case "si:SiTheregister":
            return SiTheregister;
        case "si:SiThesoundsresource":
            return SiThesoundsresource;
        case "si:SiThespritersresource":
            return SiThespritersresource;
        case "si:SiThewashingtonpost":
            return SiThewashingtonpost;
        case "si:SiTheweatherchannel":
            return SiTheweatherchannel;
        case "si:SiThingiverse":
            return SiThingiverse;
        case "si:SiThinkpad":
            return SiThinkpad;
        case "si:SiThirdweb":
            return SiThirdweb;
        case "si:SiThreadless":
            return SiThreadless;
        case "si:SiThreads":
            return SiThreads;
        case "si:SiThreedotjs":
            return SiThreedotjs;
        case "si:SiThreema":
            return SiThreema;
        case "si:SiThumbtack":
            return SiThumbtack;
        case "si:SiThunderbird":
            return SiThunderbird;
        case "si:SiThunderstore":
            return SiThunderstore;
        case "si:SiThurgauerkantonalbank":
            return SiThurgauerkantonalbank;
        case "si:SiThymeleaf":
            return SiThymeleaf;
        case "si:SiTicketmaster":
            return SiTicketmaster;
        case "si:SiTicktick":
            return SiTicktick;
        case "si:SiTidal":
            return SiTidal;
        case "si:SiTiddlywiki":
            return SiTiddlywiki;
        case "si:SiTide":
            return SiTide;
        case "si:SiTidyverse":
            return SiTidyverse;
        case "si:SiTietoevry":
            return SiTietoevry;
        case "si:SiTiktok":
            return SiTiktok;
        case "si:SiTildapublishing":
            return SiTildapublishing;
        case "si:SiTile":
            return SiTile;
        case "si:SiTimescale":
            return SiTimescale;
        case "si:SiTina":
            return SiTina;
        case "si:SiTinder":
            return SiTinder;
        case "si:SiTindie":
            return SiTindie;
        case "si:SiTinkercad":
            return SiTinkercad;
        case "si:SiTinygrad":
            return SiTinygrad;
        case "si:SiTinyletter":
            return SiTinyletter;
        case "si:SiTistory":
            return SiTistory;
        case "si:SiTldraw":
            return SiTldraw;
        case "si:SiTmobile":
            return SiTmobile;
        case "si:SiTmux":
            return SiTmux;
        case "si:SiTodoist":
            return SiTodoist;
        case "si:SiToggl":
            return SiToggl;
        case "si:SiToggltrack":
            return SiToggltrack;
        case "si:SiTokyometro":
            return SiTokyometro;
        case "si:SiToll":
            return SiToll;
        case "si:SiToml":
            return SiToml;
        case "si:SiTomorrowland":
            return SiTomorrowland;
        case "si:SiTon":
            return SiTon;
        case "si:SiTopcoder":
            return SiTopcoder;
        case "si:SiTopdotgg":
            return SiTopdotgg;
        case "si:SiToptal":
            return SiToptal;
        case "si:SiTorbrowser":
            return SiTorbrowser;
        case "si:SiTorproject":
            return SiTorproject;
        case "si:SiToshiba":
            return SiToshiba;
        case "si:SiTotvs":
            return SiTotvs;
        case "si:SiTourbox":
            return SiTourbox;
        case "si:SiTower":
            return SiTower;
        case "si:SiToyota":
            return SiToyota;
        case "si:SiTplink":
            return SiTplink;
        case "si:SiTqdm":
            return SiTqdm;
        case "si:SiTraccar":
            return SiTraccar;
        case "si:SiTradingview":
            return SiTradingview;
        case "si:SiTraefikmesh":
            return SiTraefikmesh;
        case "si:SiTraefikproxy":
            return SiTraefikproxy;
        case "si:SiTrailforks":
            return SiTrailforks;
        case "si:SiTrainerroad":
            return SiTrainerroad;
        case "si:SiTrakt":
            return SiTrakt;
        case "si:SiTransifex":
            return SiTransifex;
        case "si:SiTransmission":
            return SiTransmission;
        case "si:SiTransportforireland":
            return SiTransportforireland;
        case "si:SiTransportforlondon":
            return SiTransportforlondon;
        case "si:SiTravisci":
            return SiTravisci;
        case "si:SiTreehouse":
            return SiTreehouse;
        case "si:SiTrello":
            return SiTrello;
        case "si:SiTrendmicro":
            return SiTrendmicro;
        case "si:SiTreyarch":
            return SiTreyarch;
        case "si:SiTricentis":
            return SiTricentis;
        case "si:SiTrilium":
            return SiTrilium;
        case "si:SiTriller":
            return SiTriller;
        case "si:SiTrillertv":
            return SiTrillertv;
        case "si:SiTrimble":
            return SiTrimble;
        case "si:SiTrino":
            return SiTrino;
        case "si:SiTripadvisor":
            return SiTripadvisor;
        case "si:SiTripdotcom":
            return SiTripdotcom;
        case "si:SiTrivago":
            return SiTrivago;
        case "si:SiTrivy":
            return SiTrivy;
        case "si:SiTrove":
            return SiTrove;
        case "si:SiTrpc":
            return SiTrpc;
        case "si:SiTruenas":
            return SiTruenas;
        case "si:SiTrueup":
            return SiTrueup;
        case "si:SiTrulia":
            return SiTrulia;
        case "si:SiTrustedshops":
            return SiTrustedshops;
        case "si:SiTrustpilot":
            return SiTrustpilot;
        case "si:SiTryhackme":
            return SiTryhackme;
        case "si:SiTryitonline":
            return SiTryitonline;
        case "si:SiTsnode":
            return SiTsnode;
        case "si:SiTubi":
            return SiTubi;
        case "si:SiTui":
            return SiTui;
        case "si:SiTumblr":
            return SiTumblr;
        case "si:SiTunein":
            return SiTunein;
        case "si:SiTurbo":
            return SiTurbo;
        case "si:SiTurborepo":
            return SiTurborepo;
        case "si:SiTurbosquid":
            return SiTurbosquid;
        case "si:SiTurkishairlines":
            return SiTurkishairlines;
        case "si:SiTurso":
            return SiTurso;
        case "si:SiTutanota":
            return SiTutanota;
        case "si:SiTv4Play":
            return SiTv4Play;
        case "si:SiTvtime":
            return SiTvtime;
        case "si:SiTwilio":
            return SiTwilio;
        case "si:SiTwinkly":
            return SiTwinkly;
        case "si:SiTwinmotion":
            return SiTwinmotion;
        case "si:SiTwitch":
            return SiTwitch;
        case "si:SiTypeform":
            return SiTypeform;
        case "si:SiTypeorm":
            return SiTypeorm;
        case "si:SiTyper":
            return SiTyper;
        case "si:SiTypescript":
            return SiTypescript;
        case "si:SiTypo3":
            return SiTypo3;
        case "si:SiTypst":
            return SiTypst;
        case "si:SiUber":
            return SiUber;
        case "si:SiUbereats":
            return SiUbereats;
        case "si:SiUbiquiti":
            return SiUbiquiti;
        case "si:SiUbisoft":
            return SiUbisoft;
        case "si:SiUblockorigin":
            return SiUblockorigin;
        case "si:SiUbuntu":
            return SiUbuntu;
        case "si:SiUbuntumate":
            return SiUbuntumate;
        case "si:SiUdacity":
            return SiUdacity;
        case "si:SiUdemy":
            return SiUdemy;
        case "si:SiUdotsdotnews":
            return SiUdotsdotnews;
        case "si:SiUfc":
            return SiUfc;
        case "si:SiUikit":
            return SiUikit;
        case "si:SiUipath":
            return SiUipath;
        case "si:SiUkca":
            return SiUkca;
        case "si:SiUlule":
            return SiUlule;
        case "si:SiUmami":
            return SiUmami;
        case "si:SiUmbraco":
            return SiUmbraco;
        case "si:SiUml":
            return SiUml;
        case "si:SiUnacademy":
            return SiUnacademy;
        case "si:SiUnderarmour":
            return SiUnderarmour;
        case "si:SiUnderscoredotjs":
            return SiUnderscoredotjs;
        case "si:SiUndertale":
            return SiUndertale;
        case "si:SiUnicode":
            return SiUnicode;
        case "si:SiUnilever":
            return SiUnilever;
        case "si:SiUniqloJa":
            return SiUniqloJa;
        case "si:SiUniqlo":
            return SiUniqlo;
        case "si:SiUnitedairlines":
            return SiUnitedairlines;
        case "si:SiUnitednations":
            return SiUnitednations;
        case "si:SiUnity":
            return SiUnity;
        case "si:SiUnjs":
            return SiUnjs;
        case "si:SiUnlicense":
            return SiUnlicense;
    }
}
