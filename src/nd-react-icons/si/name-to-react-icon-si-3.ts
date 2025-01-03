import type {IconType} from "react-icons";

import {
    SiUnocss,
    SiUnpkg,
    SiUnraid,
    SiUnrealengine,
    SiUnsplash,
    SiUntappd,
    SiUpcloud,
    SiUphold,
    SiUplabs,
    SiUpptime,
    SiUps,
    SiUpstash,
    SiUptimekuma,
    SiUptobox,
    SiUpwork,
    SiUsps,
    SiUtorrent,
    SiUv,
    SiV,
    SiV2Ex,
    SiV8,
    SiVaadin,
    SiVagrant,
    SiVala,
    SiValorant,
    SiValve,
    SiVapor,
    SiVault,
    SiVaultwarden,
    SiVauxhall,
    SiVbulletin,
    SiVectary,
    SiVectorlogozone,
    SiVectorworks,
    SiVeeam,
    SiVeed,
    SiVeepee,
    SiVega,
    SiVegas,
    SiVelog,
    SiVencord,
    SiVenmo,
    SiVercel,
    SiVerdaccio,
    SiVeritas,
    SiVerizon,
    SiVespa,
    SiVestel,
    SiVexxhost,
    SiVfairs,
    SiViadeo,
    SiViaplay,
    SiViber,
    SiViblo,
    SiVictoriametrics,
    SiVictronenergy,
    SiVim,
    SiVimeo,
    SiVimeolivestream,
    SiVirgin,
    SiVirginatlantic,
    SiVirginmedia,
    SiVirtualbox,
    SiVirustotal,
    SiVisa,
    SiVisx,
    SiVite,
    SiVitepress,
    SiVitess,
    SiVitest,
    SiVivaldi,
    SiVivawallet,
    SiVivino,
    SiVivint,
    SiVivo,
    SiVk,
    SiVlcmediaplayer,
    SiVmware,
    SiVodafone,
    SiVoidlinux,
    SiVoipdotms,
    SiVolkswagen,
    SiVolvo,
    SiVonage,
    SiVorondesign,
    SiVowpalwabbit,
    SiVox,
    SiVrchat,
    SiVsco,
    SiVscodium,
    SiVtex,
    SiVuedotjs,
    SiVuetify,
    SiVulkan,
    SiVultr,
    SiVyond,
    SiW3Schools,
    SiWacom,
    SiWagmi,
    SiWagtail,
    SiWails,
    SiWakatime,
    SiWalkman,
    SiWallabag,
    SiWalletconnect,
    SiWalmart,
    SiWantedly,
    SiWappalyzer,
    SiWarnerbros,
    SiWarp,
    SiWasabi,
    SiWasmcloud,
    SiWasmer,
    SiWatchtower,
    SiWattpad,
    SiWayland,
    SiWaze,
    SiWazirx,
    SiWearos,
    SiWeasyl,
    SiWeb3Dotjs,
    SiWebassembly,
    SiWebauthn,
    SiWebcomponentsdotorg,
    SiWebdriverio,
    SiWebex,
    SiWebflow,
    SiWebgl,
    SiWebgpu,
    SiWeblate,
    SiWebmin,
    SiWebmoney,
    SiWebpack,
    SiWebrtc,
    SiWebstorm,
    SiWebtoon,
    SiWebtrees,
    SiWechat,
    SiWegame,
    SiWeightsandbiases,
    SiWelcometothejungle,
    SiWellfound,
    SiWellsfargo,
    SiWemo,
    SiWesterndigital,
    SiWesternunion,
    SiWetransfer,
    SiWezterm,
    SiWgpu,
    SiWhatsapp,
    SiWheniwork,
    SiWii,
    SiWiiu,
    SiWikibooks,
    SiWikidata,
    SiWikidotgg,
    SiWikidotjs,
    SiWikimediacommons,
    SiWikimediafoundation,
    SiWikipedia,
    SiWikiquote,
    SiWikiversity,
    SiWikivoyage,
    SiWinamp,
    SiWine,
    SiWipro,
    SiWire,
    SiWireguard,
    SiWireshark,
    SiWise,
    SiWish,
    SiWistia,
    SiWix,
    SiWizzair,
    SiWolfram,
    SiWolframlanguage,
    SiWolframmathematica,
    SiWondershare,
    SiWondersharefilmora,
    SiWoo,
    SiWoocommerce,
    SiWordpress,
    SiWorkplace,
    SiWorldhealthorganization,
    SiWpengine,
    SiWpexplorer,
    SiWprocket,
    SiWritedotas,
    SiWwe,
    SiWwise,
    SiWykop,
    SiWyze,
    SiX,
    SiXampp,
    SiXcode,
    SiXdadevelopers,
    SiXdotorg,
    SiXendit,
    SiXero,
    SiXfce,
    SiXiaohongshu,
    SiXiaomi,
    SiXing,
    SiXml,
    SiXmpp,
    SiXo,
    SiXrp,
    SiXsplit,
    SiXstate,
    SiXubuntu,
    SiYabai,
    SiYale,
    SiYamahacorporation,
    SiYamahamotorcorporation,
    SiYaml,
    SiYandexcloud,
    SiYarn,
    SiYcombinator,
    SiYelp,
    SiYeti,
    SiYii,
    SiYoast,
    SiYoutube,
    SiYoutubegaming,
    SiYoutubekids,
    SiYoutubemusic,
    SiYoutubeshorts,
    SiYoutubestudio,
    SiYoutubetv,
    SiYr,
    SiYubico,
    SiYunohost,
    SiZabka,
    SiZaim,
    SiZalando,
    SiZalo,
    SiZap,
    SiZapier,
    SiZara,
    SiZazzle,
    SiZcash,
    SiZcool,
    SiZdf,
    SiZebpay,
    SiZebratechnologies,
    SiZedindustries,
    SiZelle,
    SiZend,
    SiZendesk,
    SiZenn,
    SiZenodo,
    SiZensar,
    SiZerodha,
    SiZerotier,
    SiZerply,
    SiZettlr,
    SiZhihu,
    SiZig,
    SiZigbee,
    SiZigbee2Mqtt,
    SiZiggo,
    SiZilch,
    SiZillow,
    SiZincsearch,
    SiZingat,
    SiZod,
    SiZoho,
    SiZoiper,
    SiZomato,
    SiZoom,
    SiZorin,
    SiZotero,
    SiZsh,
    SiZulip,
    SiZyte,
} from "react-icons/si"

export function nameToReactIcon_si_3(iconName: string): IconType | undefined {

    switch(iconName) {
        case "si:SiUnocss":
            return SiUnocss;
        case "si:SiUnpkg":
            return SiUnpkg;
        case "si:SiUnraid":
            return SiUnraid;
        case "si:SiUnrealengine":
            return SiUnrealengine;
        case "si:SiUnsplash":
            return SiUnsplash;
        case "si:SiUntappd":
            return SiUntappd;
        case "si:SiUpcloud":
            return SiUpcloud;
        case "si:SiUphold":
            return SiUphold;
        case "si:SiUplabs":
            return SiUplabs;
        case "si:SiUpptime":
            return SiUpptime;
        case "si:SiUps":
            return SiUps;
        case "si:SiUpstash":
            return SiUpstash;
        case "si:SiUptimekuma":
            return SiUptimekuma;
        case "si:SiUptobox":
            return SiUptobox;
        case "si:SiUpwork":
            return SiUpwork;
        case "si:SiUsps":
            return SiUsps;
        case "si:SiUtorrent":
            return SiUtorrent;
        case "si:SiUv":
            return SiUv;
        case "si:SiV":
            return SiV;
        case "si:SiV2Ex":
            return SiV2Ex;
        case "si:SiV8":
            return SiV8;
        case "si:SiVaadin":
            return SiVaadin;
        case "si:SiVagrant":
            return SiVagrant;
        case "si:SiVala":
            return SiVala;
        case "si:SiValorant":
            return SiValorant;
        case "si:SiValve":
            return SiValve;
        case "si:SiVapor":
            return SiVapor;
        case "si:SiVault":
            return SiVault;
        case "si:SiVaultwarden":
            return SiVaultwarden;
        case "si:SiVauxhall":
            return SiVauxhall;
        case "si:SiVbulletin":
            return SiVbulletin;
        case "si:SiVectary":
            return SiVectary;
        case "si:SiVectorlogozone":
            return SiVectorlogozone;
        case "si:SiVectorworks":
            return SiVectorworks;
        case "si:SiVeeam":
            return SiVeeam;
        case "si:SiVeed":
            return SiVeed;
        case "si:SiVeepee":
            return SiVeepee;
        case "si:SiVega":
            return SiVega;
        case "si:SiVegas":
            return SiVegas;
        case "si:SiVelog":
            return SiVelog;
        case "si:SiVencord":
            return SiVencord;
        case "si:SiVenmo":
            return SiVenmo;
        case "si:SiVercel":
            return SiVercel;
        case "si:SiVerdaccio":
            return SiVerdaccio;
        case "si:SiVeritas":
            return SiVeritas;
        case "si:SiVerizon":
            return SiVerizon;
        case "si:SiVespa":
            return SiVespa;
        case "si:SiVestel":
            return SiVestel;
        case "si:SiVexxhost":
            return SiVexxhost;
        case "si:SiVfairs":
            return SiVfairs;
        case "si:SiViadeo":
            return SiViadeo;
        case "si:SiViaplay":
            return SiViaplay;
        case "si:SiViber":
            return SiViber;
        case "si:SiViblo":
            return SiViblo;
        case "si:SiVictoriametrics":
            return SiVictoriametrics;
        case "si:SiVictronenergy":
            return SiVictronenergy;
        case "si:SiVim":
            return SiVim;
        case "si:SiVimeo":
            return SiVimeo;
        case "si:SiVimeolivestream":
            return SiVimeolivestream;
        case "si:SiVirgin":
            return SiVirgin;
        case "si:SiVirginatlantic":
            return SiVirginatlantic;
        case "si:SiVirginmedia":
            return SiVirginmedia;
        case "si:SiVirtualbox":
            return SiVirtualbox;
        case "si:SiVirustotal":
            return SiVirustotal;
        case "si:SiVisa":
            return SiVisa;
        case "si:SiVisx":
            return SiVisx;
        case "si:SiVite":
            return SiVite;
        case "si:SiVitepress":
            return SiVitepress;
        case "si:SiVitess":
            return SiVitess;
        case "si:SiVitest":
            return SiVitest;
        case "si:SiVivaldi":
            return SiVivaldi;
        case "si:SiVivawallet":
            return SiVivawallet;
        case "si:SiVivino":
            return SiVivino;
        case "si:SiVivint":
            return SiVivint;
        case "si:SiVivo":
            return SiVivo;
        case "si:SiVk":
            return SiVk;
        case "si:SiVlcmediaplayer":
            return SiVlcmediaplayer;
        case "si:SiVmware":
            return SiVmware;
        case "si:SiVodafone":
            return SiVodafone;
        case "si:SiVoidlinux":
            return SiVoidlinux;
        case "si:SiVoipdotms":
            return SiVoipdotms;
        case "si:SiVolkswagen":
            return SiVolkswagen;
        case "si:SiVolvo":
            return SiVolvo;
        case "si:SiVonage":
            return SiVonage;
        case "si:SiVorondesign":
            return SiVorondesign;
        case "si:SiVowpalwabbit":
            return SiVowpalwabbit;
        case "si:SiVox":
            return SiVox;
        case "si:SiVrchat":
            return SiVrchat;
        case "si:SiVsco":
            return SiVsco;
        case "si:SiVscodium":
            return SiVscodium;
        case "si:SiVtex":
            return SiVtex;
        case "si:SiVuedotjs":
            return SiVuedotjs;
        case "si:SiVuetify":
            return SiVuetify;
        case "si:SiVulkan":
            return SiVulkan;
        case "si:SiVultr":
            return SiVultr;
        case "si:SiVyond":
            return SiVyond;
        case "si:SiW3Schools":
            return SiW3Schools;
        case "si:SiWacom":
            return SiWacom;
        case "si:SiWagmi":
            return SiWagmi;
        case "si:SiWagtail":
            return SiWagtail;
        case "si:SiWails":
            return SiWails;
        case "si:SiWakatime":
            return SiWakatime;
        case "si:SiWalkman":
            return SiWalkman;
        case "si:SiWallabag":
            return SiWallabag;
        case "si:SiWalletconnect":
            return SiWalletconnect;
        case "si:SiWalmart":
            return SiWalmart;
        case "si:SiWantedly":
            return SiWantedly;
        case "si:SiWappalyzer":
            return SiWappalyzer;
        case "si:SiWarnerbros":
            return SiWarnerbros;
        case "si:SiWarp":
            return SiWarp;
        case "si:SiWasabi":
            return SiWasabi;
        case "si:SiWasmcloud":
            return SiWasmcloud;
        case "si:SiWasmer":
            return SiWasmer;
        case "si:SiWatchtower":
            return SiWatchtower;
        case "si:SiWattpad":
            return SiWattpad;
        case "si:SiWayland":
            return SiWayland;
        case "si:SiWaze":
            return SiWaze;
        case "si:SiWazirx":
            return SiWazirx;
        case "si:SiWearos":
            return SiWearos;
        case "si:SiWeasyl":
            return SiWeasyl;
        case "si:SiWeb3Dotjs":
            return SiWeb3Dotjs;
        case "si:SiWebassembly":
            return SiWebassembly;
        case "si:SiWebauthn":
            return SiWebauthn;
        case "si:SiWebcomponentsdotorg":
            return SiWebcomponentsdotorg;
        case "si:SiWebdriverio":
            return SiWebdriverio;
        case "si:SiWebex":
            return SiWebex;
        case "si:SiWebflow":
            return SiWebflow;
        case "si:SiWebgl":
            return SiWebgl;
        case "si:SiWebgpu":
            return SiWebgpu;
        case "si:SiWeblate":
            return SiWeblate;
        case "si:SiWebmin":
            return SiWebmin;
        case "si:SiWebmoney":
            return SiWebmoney;
        case "si:SiWebpack":
            return SiWebpack;
        case "si:SiWebrtc":
            return SiWebrtc;
        case "si:SiWebstorm":
            return SiWebstorm;
        case "si:SiWebtoon":
            return SiWebtoon;
        case "si:SiWebtrees":
            return SiWebtrees;
        case "si:SiWechat":
            return SiWechat;
        case "si:SiWegame":
            return SiWegame;
        case "si:SiWeightsandbiases":
            return SiWeightsandbiases;
        case "si:SiWelcometothejungle":
            return SiWelcometothejungle;
        case "si:SiWellfound":
            return SiWellfound;
        case "si:SiWellsfargo":
            return SiWellsfargo;
        case "si:SiWemo":
            return SiWemo;
        case "si:SiWesterndigital":
            return SiWesterndigital;
        case "si:SiWesternunion":
            return SiWesternunion;
        case "si:SiWetransfer":
            return SiWetransfer;
        case "si:SiWezterm":
            return SiWezterm;
        case "si:SiWgpu":
            return SiWgpu;
        case "si:SiWhatsapp":
            return SiWhatsapp;
        case "si:SiWheniwork":
            return SiWheniwork;
        case "si:SiWii":
            return SiWii;
        case "si:SiWiiu":
            return SiWiiu;
        case "si:SiWikibooks":
            return SiWikibooks;
        case "si:SiWikidata":
            return SiWikidata;
        case "si:SiWikidotgg":
            return SiWikidotgg;
        case "si:SiWikidotjs":
            return SiWikidotjs;
        case "si:SiWikimediacommons":
            return SiWikimediacommons;
        case "si:SiWikimediafoundation":
            return SiWikimediafoundation;
        case "si:SiWikipedia":
            return SiWikipedia;
        case "si:SiWikiquote":
            return SiWikiquote;
        case "si:SiWikiversity":
            return SiWikiversity;
        case "si:SiWikivoyage":
            return SiWikivoyage;
        case "si:SiWinamp":
            return SiWinamp;
        case "si:SiWine":
            return SiWine;
        case "si:SiWipro":
            return SiWipro;
        case "si:SiWire":
            return SiWire;
        case "si:SiWireguard":
            return SiWireguard;
        case "si:SiWireshark":
            return SiWireshark;
        case "si:SiWise":
            return SiWise;
        case "si:SiWish":
            return SiWish;
        case "si:SiWistia":
            return SiWistia;
        case "si:SiWix":
            return SiWix;
        case "si:SiWizzair":
            return SiWizzair;
        case "si:SiWolfram":
            return SiWolfram;
        case "si:SiWolframlanguage":
            return SiWolframlanguage;
        case "si:SiWolframmathematica":
            return SiWolframmathematica;
        case "si:SiWondershare":
            return SiWondershare;
        case "si:SiWondersharefilmora":
            return SiWondersharefilmora;
        case "si:SiWoo":
            return SiWoo;
        case "si:SiWoocommerce":
            return SiWoocommerce;
        case "si:SiWordpress":
            return SiWordpress;
        case "si:SiWorkplace":
            return SiWorkplace;
        case "si:SiWorldhealthorganization":
            return SiWorldhealthorganization;
        case "si:SiWpengine":
            return SiWpengine;
        case "si:SiWpexplorer":
            return SiWpexplorer;
        case "si:SiWprocket":
            return SiWprocket;
        case "si:SiWritedotas":
            return SiWritedotas;
        case "si:SiWwe":
            return SiWwe;
        case "si:SiWwise":
            return SiWwise;
        case "si:SiWykop":
            return SiWykop;
        case "si:SiWyze":
            return SiWyze;
        case "si:SiX":
            return SiX;
        case "si:SiXampp":
            return SiXampp;
        case "si:SiXcode":
            return SiXcode;
        case "si:SiXdadevelopers":
            return SiXdadevelopers;
        case "si:SiXdotorg":
            return SiXdotorg;
        case "si:SiXendit":
            return SiXendit;
        case "si:SiXero":
            return SiXero;
        case "si:SiXfce":
            return SiXfce;
        case "si:SiXiaohongshu":
            return SiXiaohongshu;
        case "si:SiXiaomi":
            return SiXiaomi;
        case "si:SiXing":
            return SiXing;
        case "si:SiXml":
            return SiXml;
        case "si:SiXmpp":
            return SiXmpp;
        case "si:SiXo":
            return SiXo;
        case "si:SiXrp":
            return SiXrp;
        case "si:SiXsplit":
            return SiXsplit;
        case "si:SiXstate":
            return SiXstate;
        case "si:SiXubuntu":
            return SiXubuntu;
        case "si:SiYabai":
            return SiYabai;
        case "si:SiYale":
            return SiYale;
        case "si:SiYamahacorporation":
            return SiYamahacorporation;
        case "si:SiYamahamotorcorporation":
            return SiYamahamotorcorporation;
        case "si:SiYaml":
            return SiYaml;
        case "si:SiYandexcloud":
            return SiYandexcloud;
        case "si:SiYarn":
            return SiYarn;
        case "si:SiYcombinator":
            return SiYcombinator;
        case "si:SiYelp":
            return SiYelp;
        case "si:SiYeti":
            return SiYeti;
        case "si:SiYii":
            return SiYii;
        case "si:SiYoast":
            return SiYoast;
        case "si:SiYoutube":
            return SiYoutube;
        case "si:SiYoutubegaming":
            return SiYoutubegaming;
        case "si:SiYoutubekids":
            return SiYoutubekids;
        case "si:SiYoutubemusic":
            return SiYoutubemusic;
        case "si:SiYoutubeshorts":
            return SiYoutubeshorts;
        case "si:SiYoutubestudio":
            return SiYoutubestudio;
        case "si:SiYoutubetv":
            return SiYoutubetv;
        case "si:SiYr":
            return SiYr;
        case "si:SiYubico":
            return SiYubico;
        case "si:SiYunohost":
            return SiYunohost;
        case "si:SiZabka":
            return SiZabka;
        case "si:SiZaim":
            return SiZaim;
        case "si:SiZalando":
            return SiZalando;
        case "si:SiZalo":
            return SiZalo;
        case "si:SiZap":
            return SiZap;
        case "si:SiZapier":
            return SiZapier;
        case "si:SiZara":
            return SiZara;
        case "si:SiZazzle":
            return SiZazzle;
        case "si:SiZcash":
            return SiZcash;
        case "si:SiZcool":
            return SiZcool;
        case "si:SiZdf":
            return SiZdf;
        case "si:SiZebpay":
            return SiZebpay;
        case "si:SiZebratechnologies":
            return SiZebratechnologies;
        case "si:SiZedindustries":
            return SiZedindustries;
        case "si:SiZelle":
            return SiZelle;
        case "si:SiZend":
            return SiZend;
        case "si:SiZendesk":
            return SiZendesk;
        case "si:SiZenn":
            return SiZenn;
        case "si:SiZenodo":
            return SiZenodo;
        case "si:SiZensar":
            return SiZensar;
        case "si:SiZerodha":
            return SiZerodha;
        case "si:SiZerotier":
            return SiZerotier;
        case "si:SiZerply":
            return SiZerply;
        case "si:SiZettlr":
            return SiZettlr;
        case "si:SiZhihu":
            return SiZhihu;
        case "si:SiZig":
            return SiZig;
        case "si:SiZigbee":
            return SiZigbee;
        case "si:SiZigbee2Mqtt":
            return SiZigbee2Mqtt;
        case "si:SiZiggo":
            return SiZiggo;
        case "si:SiZilch":
            return SiZilch;
        case "si:SiZillow":
            return SiZillow;
        case "si:SiZincsearch":
            return SiZincsearch;
        case "si:SiZingat":
            return SiZingat;
        case "si:SiZod":
            return SiZod;
        case "si:SiZoho":
            return SiZoho;
        case "si:SiZoiper":
            return SiZoiper;
        case "si:SiZomato":
            return SiZomato;
        case "si:SiZoom":
            return SiZoom;
        case "si:SiZorin":
            return SiZorin;
        case "si:SiZotero":
            return SiZotero;
        case "si:SiZsh":
            return SiZsh;
        case "si:SiZulip":
            return SiZulip;
        case "si:SiZyte":
            return SiZyte;
    }
}