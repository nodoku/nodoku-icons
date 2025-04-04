import type {IconType} from "react-icons";

import {
    MdOutlinePhonePaused,
    MdOutlinePowerOff,
    MdOutlinePower,
    MdOutlinePriorityHigh,
    MdOutlineRunningWithErrors,
    MdOutlineSdCardAlert,
    MdOutlineSdCard,
    MdOutlineSimCardAlert,
    MdOutlineSmsFailed,
    MdOutlineSms,
    MdOutlineSupportAgent,
    MdOutlineSyncDisabled,
    MdOutlineSyncLock,
    MdOutlineSyncProblem,
    MdOutlineSync,
    MdOutlineSystemUpdate,
    MdOutlineTapAndPlay,
    MdOutlineTimeToLeave,
    MdOutlineTvOff,
    MdOutlineVibration,
    MdOutlineVideoChat,
    MdOutlineVoiceChat,
    MdOutlineVpnLock,
    MdOutlineWc,
    MdOutlineWifiOff,
    MdOutlineWifi,
    MdOutlineAcUnit,
    MdOutlineAirportShuttle,
    MdOutlineAllInclusive,
    MdOutlineApartment,
    MdOutlineBabyChangingStation,
    MdOutlineBackpack,
    MdOutlineBalcony,
    MdOutlineBathtub,
    MdOutlineBeachAccess,
    MdOutlineBento,
    MdOutlineBungalow,
    MdOutlineBusinessCenter,
    MdOutlineCabin,
    MdOutlineCarpenter,
    MdOutlineCasino,
    MdOutlineChalet,
    MdOutlineChargingStation,
    MdOutlineCheckroom,
    MdOutlineChildCare,
    MdOutlineChildFriendly,
    MdOutlineCorporateFare,
    MdOutlineCottage,
    MdOutlineCountertops,
    MdOutlineCrib,
    MdOutlineDesk,
    MdOutlineDoNotStep,
    MdOutlineDoNotTouch,
    MdOutlineDry,
    MdOutlineElevator,
    MdOutlineEscalatorWarning,
    MdOutlineEscalator,
    MdOutlineFamilyRestroom,
    MdOutlineFence,
    MdOutlineFireExtinguisher,
    MdOutlineFitnessCenter,
    MdOutlineFoodBank,
    MdOutlineFoundation,
    MdOutlineFreeBreakfast,
    MdOutlineGite,
    MdOutlineGolfCourse,
    MdOutlineGrass,
    MdOutlineHolidayVillage,
    MdOutlineHotTub,
    MdOutlineHouseSiding,
    MdOutlineHouse,
    MdOutlineHouseboat,
    MdOutlineIron,
    MdOutlineKitchen,
    MdOutlineMeetingRoom,
    MdOutlineMicrowave,
    MdOutlineNightShelter,
    MdOutlineNoBackpack,
    MdOutlineNoCell,
    MdOutlineNoDrinks,
    MdOutlineNoFlash,
    MdOutlineNoFood,
    MdOutlineNoMeetingRoom,
    MdOutlineNoPhotography,
    MdOutlineNoStroller,
    MdOutlineOtherHouses,
    MdOutlinePool,
    MdOutlineRiceBowl,
    MdOutlineRoofing,
    MdOutlineRoomPreferences,
    MdOutlineRoomService,
    MdOutlineRvHookup,
    MdOutlineSmokeFree,
    MdOutlineSmokingRooms,
    MdOutlineSoap,
    MdOutlineSpa,
    MdOutlineSportsBar,
    MdOutlineStairs,
    MdOutlineStorefront,
    MdOutlineStroller,
    MdOutlineTapas,
    MdOutlineTty,
    MdOutlineUmbrella,
    MdOutlineVapeFree,
    MdOutlineVapingRooms,
    MdOutlineVilla,
    MdOutlineWash,
    MdOutlineWaterDamage,
    MdOutlineWheelchairPickup,
    MdOutlineBathroom,
    MdOutlineBed,
    MdOutlineBedroomBaby,
    MdOutlineBedroomChild,
    MdOutlineBedroomParent,
    MdOutlineBlender,
    MdOutlineCameraIndoor,
    MdOutlineCameraOutdoor,
    MdOutlineChairAlt,
    MdOutlineChair,
    MdOutlineCoffeeMaker,
    MdOutlineCoffee,
    MdOutlineDining,
    MdOutlineDoorBack,
    MdOutlineDoorFront,
    MdOutlineDoorSliding,
    MdOutlineDoorbell,
    MdOutlineFeed,
    MdOutlineFlatware,
    MdOutlineGarage,
    MdOutlineLight,
    MdOutlineLiving,
    MdOutlineManageSearch,
    MdOutlinePodcasts,
    MdOutlineShower,
    MdOutlineTableBar,
    MdOutlineTableRestaurant,
    MdOutlineWindow,
    MdOutlineYard,
    MdOutline18UpRating,
    MdOutline6FtApart,
    MdOutlineAddModerator,
    MdOutlineAddReaction,
    MdOutlineArchitecture,
    MdOutlineAssistWalker,
    MdOutlineBackHand,
    MdOutlineBlind,
    MdOutlineBoy,
    MdOutlineCake,
    MdOutlineCatchingPokemon,
    MdOutlineCleanHands,
    MdOutlineCo2,
    MdOutlineCompost,
    MdOutlineConnectWithoutContact,
    MdOutlineConstruction,
    MdOutlineCookie,
    MdOutlineCoronavirus,
    MdOutlineCrueltyFree,
    MdOutlineCyclone,
    MdOutlineDeck,
    MdOutlineDiversity1,
    MdOutlineDiversity2,
    MdOutlineDiversity3,
    MdOutlineDomainAdd,
    MdOutlineDomain,
    MdOutlineDownhillSkiing,
    MdOutlineEditNotifications,
    MdOutlineElderlyWoman,
    MdOutlineElderly,
    MdOutlineEmojiEmotions,
    MdOutlineEmojiEvents,
    MdOutlineEmojiFlags,
    MdOutlineEmojiFoodBeverage,
    MdOutlineEmojiNature,
    MdOutlineEmojiObjects,
    MdOutlineEmojiPeople,
    MdOutlineEmojiSymbols,
    MdOutlineEmojiTransportation,
    MdOutlineEngineering,
    MdOutlineFace2,
    MdOutlineFace3,
    MdOutlineFace4,
    MdOutlineFace5,
    MdOutlineFace6,
    MdOutlineFacebook,
    MdOutlineFemale,
    MdOutlineFireplace,
    MdOutlineFitbit,
    MdOutlineFlood,
    MdOutlineFollowTheSigns,
    MdOutlineFrontHand,
    MdOutlineGirl,
    MdOutlineGroupAdd,
    MdOutlineGroupOff,
    MdOutlineGroupRemove,
    MdOutlineGroup,
    MdOutlineGroups2,
    MdOutlineGroups3,
    MdOutlineGroups,
    MdOutlineHandshake,
    MdOutlineHealthAndSafety,
    MdOutlineHeartBroken,
    MdOutlineHiking,
    MdOutlineHistoryEdu,
    MdOutlineHive,
    MdOutlineIceSkating,
    MdOutlineInterests,
    MdOutlineIosShare,
    MdOutlineKayaking,
    MdOutlineKingBed,
    MdOutlineKitesurfing,
    MdOutlineLandslide,
    MdOutlineLocationCity,
    MdOutlineLuggage,
    MdOutlineMale,
    MdOutlineMan2,
    MdOutlineMan3,
    MdOutlineMan4,
    MdOutlineMan,
    MdOutlineMasks,
    MdOutlineMilitaryTech,
    MdOutlineMoodBad,
    MdOutlineMood,
    MdOutlineNightsStay,
    MdOutlineNoAdultContent,
    MdOutlineNoLuggage,
    MdOutlineNordicWalking,
    MdOutlineNotificationAdd,
    MdOutlineNotificationsActive,
    MdOutlineNotificationsNone,
    MdOutlineNotificationsOff,
    MdOutlineNotificationsPaused,
    MdOutlineNotifications,
    MdOutlineOutdoorGrill,
    MdOutlinePages,
    MdOutlineParagliding,
    MdOutlinePartyMode,
    MdOutlinePeopleAlt,
    MdOutlinePeopleOutline,
    MdOutlinePeople,
    MdOutlinePerson2,
    MdOutlinePerson3,
    MdOutlinePerson4,
    MdOutlinePersonAddAlt1,
    MdOutlinePersonAddAlt,
    MdOutlinePersonAdd,
    MdOutlinePersonOff,
    MdOutlinePersonOutline,
    MdOutlinePersonRemoveAlt1,
    MdOutlinePersonRemove,
    MdOutlinePerson,
    MdOutlinePersonalInjury,
    MdOutlinePianoOff,
    MdOutlinePiano,
    MdOutlinePix,
    MdOutlinePlusOne,
    MdOutlinePoll,
    MdOutlinePrecisionManufacturing,
    MdOutlinePsychologyAlt,
    MdOutlinePsychology,
    MdOutlinePublicOff,
    MdOutlinePublic,
    MdOutlineRealEstateAgent,
    MdOutlineRecommend,
    MdOutlineRecycling,
    MdOutlineReduceCapacity,
    MdOutlineRemoveModerator,
    MdOutlineRollerSkating,
    MdOutlineSafetyDivider,
    MdOutlineSanitizer,
    MdOutlineScale,
    MdOutlineSchool,
    MdOutlineScience,
    MdOutlineScoreboard,
    MdOutlineScubaDiving,
    MdOutlineSelfImprovement,
    MdOutlineSentimentDissatisfied,
    MdOutlineSentimentNeutral,
    MdOutlineSentimentSatisfied,
    MdOutlineSentimentVeryDissatisfied,
    MdOutlineSentimentVerySatisfied,
    MdOutlineSevereCold,
    MdOutlineShare,
    MdOutlineSick,
    MdOutlineSignLanguage,
    MdOutlineSingleBed,
    MdOutlineSkateboarding,
    MdOutlineSledding,
    MdOutlineSnowboarding,
    MdOutlineSnowshoeing,
    MdOutlineSocialDistance,
    MdOutlineSouthAmerica,
    MdOutlineSportsBaseball,
    MdOutlineSportsBasketball,
    MdOutlineSportsCricket,
    MdOutlineSportsEsports,
    MdOutlineSportsFootball,
    MdOutlineSportsGolf,
    MdOutlineSportsGymnastics,
    MdOutlineSportsHandball,
    MdOutlineSportsHockey,
    MdOutlineSportsKabaddi,
    MdOutlineSportsMartialArts,
    MdOutlineSportsMma,
    MdOutlineSportsMotorsports,
    MdOutlineSportsRugby,
    MdOutlineSportsSoccer,
    MdOutlineSportsTennis,
    MdOutlineSportsVolleyball,
    MdOutlineSports,
    MdOutlineSurfing,
    MdOutlineSwitchAccount,
    MdOutlineThumbDownAlt,
    MdOutlineThumbUpAlt,
    MdOutlineThunderstorm,
    MdOutlineTornado,
    MdOutlineTransgender,
    MdOutlineTravelExplore,
    MdOutlineTsunami,
    MdOutlineVaccines,
    MdOutlineVolcano,
    MdOutlineWallet,
    MdOutlineWaterDrop,
    MdOutlineWavingHand,
    MdOutlineWhatsapp,
    MdOutlineWhatshot,
    MdOutlineWoman2,
    MdOutlineWoman,
    MdOutlineWorkspacePremium,
    MdOutlineCheckBoxOutlineBlank,
    MdOutlineCheckBox,
    MdOutlineIndeterminateCheckBox,
    MdOutlineRadioButtonChecked,
    MdOutlineRadioButtonUnchecked,
    MdOutlineStarBorderPurple500,
    MdOutlineStarBorder,
    MdOutlineStarHalf,
    MdOutlineStarOutline,
    MdOutlineStarPurple500,
    MdOutlineStar,
    MdOutlineToggleOff,
    MdOutlineToggleOn,
} from "react-icons/md"

export function nameToReactIcon_md_4(iconName: string): IconType | undefined {

    switch(iconName) {
        case "md:MdOutlinePhonePaused":
            return MdOutlinePhonePaused;
        case "md:MdOutlinePowerOff":
            return MdOutlinePowerOff;
        case "md:MdOutlinePower":
            return MdOutlinePower;
        case "md:MdOutlinePriorityHigh":
            return MdOutlinePriorityHigh;
        case "md:MdOutlineRunningWithErrors":
            return MdOutlineRunningWithErrors;
        case "md:MdOutlineSdCardAlert":
            return MdOutlineSdCardAlert;
        case "md:MdOutlineSdCard":
            return MdOutlineSdCard;
        case "md:MdOutlineSimCardAlert":
            return MdOutlineSimCardAlert;
        case "md:MdOutlineSmsFailed":
            return MdOutlineSmsFailed;
        case "md:MdOutlineSms":
            return MdOutlineSms;
        case "md:MdOutlineSupportAgent":
            return MdOutlineSupportAgent;
        case "md:MdOutlineSyncDisabled":
            return MdOutlineSyncDisabled;
        case "md:MdOutlineSyncLock":
            return MdOutlineSyncLock;
        case "md:MdOutlineSyncProblem":
            return MdOutlineSyncProblem;
        case "md:MdOutlineSync":
            return MdOutlineSync;
        case "md:MdOutlineSystemUpdate":
            return MdOutlineSystemUpdate;
        case "md:MdOutlineTapAndPlay":
            return MdOutlineTapAndPlay;
        case "md:MdOutlineTimeToLeave":
            return MdOutlineTimeToLeave;
        case "md:MdOutlineTvOff":
            return MdOutlineTvOff;
        case "md:MdOutlineVibration":
            return MdOutlineVibration;
        case "md:MdOutlineVideoChat":
            return MdOutlineVideoChat;
        case "md:MdOutlineVoiceChat":
            return MdOutlineVoiceChat;
        case "md:MdOutlineVpnLock":
            return MdOutlineVpnLock;
        case "md:MdOutlineWc":
            return MdOutlineWc;
        case "md:MdOutlineWifiOff":
            return MdOutlineWifiOff;
        case "md:MdOutlineWifi":
            return MdOutlineWifi;
        case "md:MdOutlineAcUnit":
            return MdOutlineAcUnit;
        case "md:MdOutlineAirportShuttle":
            return MdOutlineAirportShuttle;
        case "md:MdOutlineAllInclusive":
            return MdOutlineAllInclusive;
        case "md:MdOutlineApartment":
            return MdOutlineApartment;
        case "md:MdOutlineBabyChangingStation":
            return MdOutlineBabyChangingStation;
        case "md:MdOutlineBackpack":
            return MdOutlineBackpack;
        case "md:MdOutlineBalcony":
            return MdOutlineBalcony;
        case "md:MdOutlineBathtub":
            return MdOutlineBathtub;
        case "md:MdOutlineBeachAccess":
            return MdOutlineBeachAccess;
        case "md:MdOutlineBento":
            return MdOutlineBento;
        case "md:MdOutlineBungalow":
            return MdOutlineBungalow;
        case "md:MdOutlineBusinessCenter":
            return MdOutlineBusinessCenter;
        case "md:MdOutlineCabin":
            return MdOutlineCabin;
        case "md:MdOutlineCarpenter":
            return MdOutlineCarpenter;
        case "md:MdOutlineCasino":
            return MdOutlineCasino;
        case "md:MdOutlineChalet":
            return MdOutlineChalet;
        case "md:MdOutlineChargingStation":
            return MdOutlineChargingStation;
        case "md:MdOutlineCheckroom":
            return MdOutlineCheckroom;
        case "md:MdOutlineChildCare":
            return MdOutlineChildCare;
        case "md:MdOutlineChildFriendly":
            return MdOutlineChildFriendly;
        case "md:MdOutlineCorporateFare":
            return MdOutlineCorporateFare;
        case "md:MdOutlineCottage":
            return MdOutlineCottage;
        case "md:MdOutlineCountertops":
            return MdOutlineCountertops;
        case "md:MdOutlineCrib":
            return MdOutlineCrib;
        case "md:MdOutlineDesk":
            return MdOutlineDesk;
        case "md:MdOutlineDoNotStep":
            return MdOutlineDoNotStep;
        case "md:MdOutlineDoNotTouch":
            return MdOutlineDoNotTouch;
        case "md:MdOutlineDry":
            return MdOutlineDry;
        case "md:MdOutlineElevator":
            return MdOutlineElevator;
        case "md:MdOutlineEscalatorWarning":
            return MdOutlineEscalatorWarning;
        case "md:MdOutlineEscalator":
            return MdOutlineEscalator;
        case "md:MdOutlineFamilyRestroom":
            return MdOutlineFamilyRestroom;
        case "md:MdOutlineFence":
            return MdOutlineFence;
        case "md:MdOutlineFireExtinguisher":
            return MdOutlineFireExtinguisher;
        case "md:MdOutlineFitnessCenter":
            return MdOutlineFitnessCenter;
        case "md:MdOutlineFoodBank":
            return MdOutlineFoodBank;
        case "md:MdOutlineFoundation":
            return MdOutlineFoundation;
        case "md:MdOutlineFreeBreakfast":
            return MdOutlineFreeBreakfast;
        case "md:MdOutlineGite":
            return MdOutlineGite;
        case "md:MdOutlineGolfCourse":
            return MdOutlineGolfCourse;
        case "md:MdOutlineGrass":
            return MdOutlineGrass;
        case "md:MdOutlineHolidayVillage":
            return MdOutlineHolidayVillage;
        case "md:MdOutlineHotTub":
            return MdOutlineHotTub;
        case "md:MdOutlineHouseSiding":
            return MdOutlineHouseSiding;
        case "md:MdOutlineHouse":
            return MdOutlineHouse;
        case "md:MdOutlineHouseboat":
            return MdOutlineHouseboat;
        case "md:MdOutlineIron":
            return MdOutlineIron;
        case "md:MdOutlineKitchen":
            return MdOutlineKitchen;
        case "md:MdOutlineMeetingRoom":
            return MdOutlineMeetingRoom;
        case "md:MdOutlineMicrowave":
            return MdOutlineMicrowave;
        case "md:MdOutlineNightShelter":
            return MdOutlineNightShelter;
        case "md:MdOutlineNoBackpack":
            return MdOutlineNoBackpack;
        case "md:MdOutlineNoCell":
            return MdOutlineNoCell;
        case "md:MdOutlineNoDrinks":
            return MdOutlineNoDrinks;
        case "md:MdOutlineNoFlash":
            return MdOutlineNoFlash;
        case "md:MdOutlineNoFood":
            return MdOutlineNoFood;
        case "md:MdOutlineNoMeetingRoom":
            return MdOutlineNoMeetingRoom;
        case "md:MdOutlineNoPhotography":
            return MdOutlineNoPhotography;
        case "md:MdOutlineNoStroller":
            return MdOutlineNoStroller;
        case "md:MdOutlineOtherHouses":
            return MdOutlineOtherHouses;
        case "md:MdOutlinePool":
            return MdOutlinePool;
        case "md:MdOutlineRiceBowl":
            return MdOutlineRiceBowl;
        case "md:MdOutlineRoofing":
            return MdOutlineRoofing;
        case "md:MdOutlineRoomPreferences":
            return MdOutlineRoomPreferences;
        case "md:MdOutlineRoomService":
            return MdOutlineRoomService;
        case "md:MdOutlineRvHookup":
            return MdOutlineRvHookup;
        case "md:MdOutlineSmokeFree":
            return MdOutlineSmokeFree;
        case "md:MdOutlineSmokingRooms":
            return MdOutlineSmokingRooms;
        case "md:MdOutlineSoap":
            return MdOutlineSoap;
        case "md:MdOutlineSpa":
            return MdOutlineSpa;
        case "md:MdOutlineSportsBar":
            return MdOutlineSportsBar;
        case "md:MdOutlineStairs":
            return MdOutlineStairs;
        case "md:MdOutlineStorefront":
            return MdOutlineStorefront;
        case "md:MdOutlineStroller":
            return MdOutlineStroller;
        case "md:MdOutlineTapas":
            return MdOutlineTapas;
        case "md:MdOutlineTty":
            return MdOutlineTty;
        case "md:MdOutlineUmbrella":
            return MdOutlineUmbrella;
        case "md:MdOutlineVapeFree":
            return MdOutlineVapeFree;
        case "md:MdOutlineVapingRooms":
            return MdOutlineVapingRooms;
        case "md:MdOutlineVilla":
            return MdOutlineVilla;
        case "md:MdOutlineWash":
            return MdOutlineWash;
        case "md:MdOutlineWaterDamage":
            return MdOutlineWaterDamage;
        case "md:MdOutlineWheelchairPickup":
            return MdOutlineWheelchairPickup;
        case "md:MdOutlineBathroom":
            return MdOutlineBathroom;
        case "md:MdOutlineBed":
            return MdOutlineBed;
        case "md:MdOutlineBedroomBaby":
            return MdOutlineBedroomBaby;
        case "md:MdOutlineBedroomChild":
            return MdOutlineBedroomChild;
        case "md:MdOutlineBedroomParent":
            return MdOutlineBedroomParent;
        case "md:MdOutlineBlender":
            return MdOutlineBlender;
        case "md:MdOutlineCameraIndoor":
            return MdOutlineCameraIndoor;
        case "md:MdOutlineCameraOutdoor":
            return MdOutlineCameraOutdoor;
        case "md:MdOutlineChairAlt":
            return MdOutlineChairAlt;
        case "md:MdOutlineChair":
            return MdOutlineChair;
        case "md:MdOutlineCoffeeMaker":
            return MdOutlineCoffeeMaker;
        case "md:MdOutlineCoffee":
            return MdOutlineCoffee;
        case "md:MdOutlineDining":
            return MdOutlineDining;
        case "md:MdOutlineDoorBack":
            return MdOutlineDoorBack;
        case "md:MdOutlineDoorFront":
            return MdOutlineDoorFront;
        case "md:MdOutlineDoorSliding":
            return MdOutlineDoorSliding;
        case "md:MdOutlineDoorbell":
            return MdOutlineDoorbell;
        case "md:MdOutlineFeed":
            return MdOutlineFeed;
        case "md:MdOutlineFlatware":
            return MdOutlineFlatware;
        case "md:MdOutlineGarage":
            return MdOutlineGarage;
        case "md:MdOutlineLight":
            return MdOutlineLight;
        case "md:MdOutlineLiving":
            return MdOutlineLiving;
        case "md:MdOutlineManageSearch":
            return MdOutlineManageSearch;
        case "md:MdOutlinePodcasts":
            return MdOutlinePodcasts;
        case "md:MdOutlineShower":
            return MdOutlineShower;
        case "md:MdOutlineTableBar":
            return MdOutlineTableBar;
        case "md:MdOutlineTableRestaurant":
            return MdOutlineTableRestaurant;
        case "md:MdOutlineWindow":
            return MdOutlineWindow;
        case "md:MdOutlineYard":
            return MdOutlineYard;
        case "md:MdOutline18UpRating":
            return MdOutline18UpRating;
        case "md:MdOutline6FtApart":
            return MdOutline6FtApart;
        case "md:MdOutlineAddModerator":
            return MdOutlineAddModerator;
        case "md:MdOutlineAddReaction":
            return MdOutlineAddReaction;
        case "md:MdOutlineArchitecture":
            return MdOutlineArchitecture;
        case "md:MdOutlineAssistWalker":
            return MdOutlineAssistWalker;
        case "md:MdOutlineBackHand":
            return MdOutlineBackHand;
        case "md:MdOutlineBlind":
            return MdOutlineBlind;
        case "md:MdOutlineBoy":
            return MdOutlineBoy;
        case "md:MdOutlineCake":
            return MdOutlineCake;
        case "md:MdOutlineCatchingPokemon":
            return MdOutlineCatchingPokemon;
        case "md:MdOutlineCleanHands":
            return MdOutlineCleanHands;
        case "md:MdOutlineCo2":
            return MdOutlineCo2;
        case "md:MdOutlineCompost":
            return MdOutlineCompost;
        case "md:MdOutlineConnectWithoutContact":
            return MdOutlineConnectWithoutContact;
        case "md:MdOutlineConstruction":
            return MdOutlineConstruction;
        case "md:MdOutlineCookie":
            return MdOutlineCookie;
        case "md:MdOutlineCoronavirus":
            return MdOutlineCoronavirus;
        case "md:MdOutlineCrueltyFree":
            return MdOutlineCrueltyFree;
        case "md:MdOutlineCyclone":
            return MdOutlineCyclone;
        case "md:MdOutlineDeck":
            return MdOutlineDeck;
        case "md:MdOutlineDiversity1":
            return MdOutlineDiversity1;
        case "md:MdOutlineDiversity2":
            return MdOutlineDiversity2;
        case "md:MdOutlineDiversity3":
            return MdOutlineDiversity3;
        case "md:MdOutlineDomainAdd":
            return MdOutlineDomainAdd;
        case "md:MdOutlineDomain":
            return MdOutlineDomain;
        case "md:MdOutlineDownhillSkiing":
            return MdOutlineDownhillSkiing;
        case "md:MdOutlineEditNotifications":
            return MdOutlineEditNotifications;
        case "md:MdOutlineElderlyWoman":
            return MdOutlineElderlyWoman;
        case "md:MdOutlineElderly":
            return MdOutlineElderly;
        case "md:MdOutlineEmojiEmotions":
            return MdOutlineEmojiEmotions;
        case "md:MdOutlineEmojiEvents":
            return MdOutlineEmojiEvents;
        case "md:MdOutlineEmojiFlags":
            return MdOutlineEmojiFlags;
        case "md:MdOutlineEmojiFoodBeverage":
            return MdOutlineEmojiFoodBeverage;
        case "md:MdOutlineEmojiNature":
            return MdOutlineEmojiNature;
        case "md:MdOutlineEmojiObjects":
            return MdOutlineEmojiObjects;
        case "md:MdOutlineEmojiPeople":
            return MdOutlineEmojiPeople;
        case "md:MdOutlineEmojiSymbols":
            return MdOutlineEmojiSymbols;
        case "md:MdOutlineEmojiTransportation":
            return MdOutlineEmojiTransportation;
        case "md:MdOutlineEngineering":
            return MdOutlineEngineering;
        case "md:MdOutlineFace2":
            return MdOutlineFace2;
        case "md:MdOutlineFace3":
            return MdOutlineFace3;
        case "md:MdOutlineFace4":
            return MdOutlineFace4;
        case "md:MdOutlineFace5":
            return MdOutlineFace5;
        case "md:MdOutlineFace6":
            return MdOutlineFace6;
        case "md:MdOutlineFacebook":
            return MdOutlineFacebook;
        case "md:MdOutlineFemale":
            return MdOutlineFemale;
        case "md:MdOutlineFireplace":
            return MdOutlineFireplace;
        case "md:MdOutlineFitbit":
            return MdOutlineFitbit;
        case "md:MdOutlineFlood":
            return MdOutlineFlood;
        case "md:MdOutlineFollowTheSigns":
            return MdOutlineFollowTheSigns;
        case "md:MdOutlineFrontHand":
            return MdOutlineFrontHand;
        case "md:MdOutlineGirl":
            return MdOutlineGirl;
        case "md:MdOutlineGroupAdd":
            return MdOutlineGroupAdd;
        case "md:MdOutlineGroupOff":
            return MdOutlineGroupOff;
        case "md:MdOutlineGroupRemove":
            return MdOutlineGroupRemove;
        case "md:MdOutlineGroup":
            return MdOutlineGroup;
        case "md:MdOutlineGroups2":
            return MdOutlineGroups2;
        case "md:MdOutlineGroups3":
            return MdOutlineGroups3;
        case "md:MdOutlineGroups":
            return MdOutlineGroups;
        case "md:MdOutlineHandshake":
            return MdOutlineHandshake;
        case "md:MdOutlineHealthAndSafety":
            return MdOutlineHealthAndSafety;
        case "md:MdOutlineHeartBroken":
            return MdOutlineHeartBroken;
        case "md:MdOutlineHiking":
            return MdOutlineHiking;
        case "md:MdOutlineHistoryEdu":
            return MdOutlineHistoryEdu;
        case "md:MdOutlineHive":
            return MdOutlineHive;
        case "md:MdOutlineIceSkating":
            return MdOutlineIceSkating;
        case "md:MdOutlineInterests":
            return MdOutlineInterests;
        case "md:MdOutlineIosShare":
            return MdOutlineIosShare;
        case "md:MdOutlineKayaking":
            return MdOutlineKayaking;
        case "md:MdOutlineKingBed":
            return MdOutlineKingBed;
        case "md:MdOutlineKitesurfing":
            return MdOutlineKitesurfing;
        case "md:MdOutlineLandslide":
            return MdOutlineLandslide;
        case "md:MdOutlineLocationCity":
            return MdOutlineLocationCity;
        case "md:MdOutlineLuggage":
            return MdOutlineLuggage;
        case "md:MdOutlineMale":
            return MdOutlineMale;
        case "md:MdOutlineMan2":
            return MdOutlineMan2;
        case "md:MdOutlineMan3":
            return MdOutlineMan3;
        case "md:MdOutlineMan4":
            return MdOutlineMan4;
        case "md:MdOutlineMan":
            return MdOutlineMan;
        case "md:MdOutlineMasks":
            return MdOutlineMasks;
        case "md:MdOutlineMilitaryTech":
            return MdOutlineMilitaryTech;
        case "md:MdOutlineMoodBad":
            return MdOutlineMoodBad;
        case "md:MdOutlineMood":
            return MdOutlineMood;
        case "md:MdOutlineNightsStay":
            return MdOutlineNightsStay;
        case "md:MdOutlineNoAdultContent":
            return MdOutlineNoAdultContent;
        case "md:MdOutlineNoLuggage":
            return MdOutlineNoLuggage;
        case "md:MdOutlineNordicWalking":
            return MdOutlineNordicWalking;
        case "md:MdOutlineNotificationAdd":
            return MdOutlineNotificationAdd;
        case "md:MdOutlineNotificationsActive":
            return MdOutlineNotificationsActive;
        case "md:MdOutlineNotificationsNone":
            return MdOutlineNotificationsNone;
        case "md:MdOutlineNotificationsOff":
            return MdOutlineNotificationsOff;
        case "md:MdOutlineNotificationsPaused":
            return MdOutlineNotificationsPaused;
        case "md:MdOutlineNotifications":
            return MdOutlineNotifications;
        case "md:MdOutlineOutdoorGrill":
            return MdOutlineOutdoorGrill;
        case "md:MdOutlinePages":
            return MdOutlinePages;
        case "md:MdOutlineParagliding":
            return MdOutlineParagliding;
        case "md:MdOutlinePartyMode":
            return MdOutlinePartyMode;
        case "md:MdOutlinePeopleAlt":
            return MdOutlinePeopleAlt;
        case "md:MdOutlinePeopleOutline":
            return MdOutlinePeopleOutline;
        case "md:MdOutlinePeople":
            return MdOutlinePeople;
        case "md:MdOutlinePerson2":
            return MdOutlinePerson2;
        case "md:MdOutlinePerson3":
            return MdOutlinePerson3;
        case "md:MdOutlinePerson4":
            return MdOutlinePerson4;
        case "md:MdOutlinePersonAddAlt1":
            return MdOutlinePersonAddAlt1;
        case "md:MdOutlinePersonAddAlt":
            return MdOutlinePersonAddAlt;
        case "md:MdOutlinePersonAdd":
            return MdOutlinePersonAdd;
        case "md:MdOutlinePersonOff":
            return MdOutlinePersonOff;
        case "md:MdOutlinePersonOutline":
            return MdOutlinePersonOutline;
        case "md:MdOutlinePersonRemoveAlt1":
            return MdOutlinePersonRemoveAlt1;
        case "md:MdOutlinePersonRemove":
            return MdOutlinePersonRemove;
        case "md:MdOutlinePerson":
            return MdOutlinePerson;
        case "md:MdOutlinePersonalInjury":
            return MdOutlinePersonalInjury;
        case "md:MdOutlinePianoOff":
            return MdOutlinePianoOff;
        case "md:MdOutlinePiano":
            return MdOutlinePiano;
        case "md:MdOutlinePix":
            return MdOutlinePix;
        case "md:MdOutlinePlusOne":
            return MdOutlinePlusOne;
        case "md:MdOutlinePoll":
            return MdOutlinePoll;
        case "md:MdOutlinePrecisionManufacturing":
            return MdOutlinePrecisionManufacturing;
        case "md:MdOutlinePsychologyAlt":
            return MdOutlinePsychologyAlt;
        case "md:MdOutlinePsychology":
            return MdOutlinePsychology;
        case "md:MdOutlinePublicOff":
            return MdOutlinePublicOff;
        case "md:MdOutlinePublic":
            return MdOutlinePublic;
        case "md:MdOutlineRealEstateAgent":
            return MdOutlineRealEstateAgent;
        case "md:MdOutlineRecommend":
            return MdOutlineRecommend;
        case "md:MdOutlineRecycling":
            return MdOutlineRecycling;
        case "md:MdOutlineReduceCapacity":
            return MdOutlineReduceCapacity;
        case "md:MdOutlineRemoveModerator":
            return MdOutlineRemoveModerator;
        case "md:MdOutlineRollerSkating":
            return MdOutlineRollerSkating;
        case "md:MdOutlineSafetyDivider":
            return MdOutlineSafetyDivider;
        case "md:MdOutlineSanitizer":
            return MdOutlineSanitizer;
        case "md:MdOutlineScale":
            return MdOutlineScale;
        case "md:MdOutlineSchool":
            return MdOutlineSchool;
        case "md:MdOutlineScience":
            return MdOutlineScience;
        case "md:MdOutlineScoreboard":
            return MdOutlineScoreboard;
        case "md:MdOutlineScubaDiving":
            return MdOutlineScubaDiving;
        case "md:MdOutlineSelfImprovement":
            return MdOutlineSelfImprovement;
        case "md:MdOutlineSentimentDissatisfied":
            return MdOutlineSentimentDissatisfied;
        case "md:MdOutlineSentimentNeutral":
            return MdOutlineSentimentNeutral;
        case "md:MdOutlineSentimentSatisfied":
            return MdOutlineSentimentSatisfied;
        case "md:MdOutlineSentimentVeryDissatisfied":
            return MdOutlineSentimentVeryDissatisfied;
        case "md:MdOutlineSentimentVerySatisfied":
            return MdOutlineSentimentVerySatisfied;
        case "md:MdOutlineSevereCold":
            return MdOutlineSevereCold;
        case "md:MdOutlineShare":
            return MdOutlineShare;
        case "md:MdOutlineSick":
            return MdOutlineSick;
        case "md:MdOutlineSignLanguage":
            return MdOutlineSignLanguage;
        case "md:MdOutlineSingleBed":
            return MdOutlineSingleBed;
        case "md:MdOutlineSkateboarding":
            return MdOutlineSkateboarding;
        case "md:MdOutlineSledding":
            return MdOutlineSledding;
        case "md:MdOutlineSnowboarding":
            return MdOutlineSnowboarding;
        case "md:MdOutlineSnowshoeing":
            return MdOutlineSnowshoeing;
        case "md:MdOutlineSocialDistance":
            return MdOutlineSocialDistance;
        case "md:MdOutlineSouthAmerica":
            return MdOutlineSouthAmerica;
        case "md:MdOutlineSportsBaseball":
            return MdOutlineSportsBaseball;
        case "md:MdOutlineSportsBasketball":
            return MdOutlineSportsBasketball;
        case "md:MdOutlineSportsCricket":
            return MdOutlineSportsCricket;
        case "md:MdOutlineSportsEsports":
            return MdOutlineSportsEsports;
        case "md:MdOutlineSportsFootball":
            return MdOutlineSportsFootball;
        case "md:MdOutlineSportsGolf":
            return MdOutlineSportsGolf;
        case "md:MdOutlineSportsGymnastics":
            return MdOutlineSportsGymnastics;
        case "md:MdOutlineSportsHandball":
            return MdOutlineSportsHandball;
        case "md:MdOutlineSportsHockey":
            return MdOutlineSportsHockey;
        case "md:MdOutlineSportsKabaddi":
            return MdOutlineSportsKabaddi;
        case "md:MdOutlineSportsMartialArts":
            return MdOutlineSportsMartialArts;
        case "md:MdOutlineSportsMma":
            return MdOutlineSportsMma;
        case "md:MdOutlineSportsMotorsports":
            return MdOutlineSportsMotorsports;
        case "md:MdOutlineSportsRugby":
            return MdOutlineSportsRugby;
        case "md:MdOutlineSportsSoccer":
            return MdOutlineSportsSoccer;
        case "md:MdOutlineSportsTennis":
            return MdOutlineSportsTennis;
        case "md:MdOutlineSportsVolleyball":
            return MdOutlineSportsVolleyball;
        case "md:MdOutlineSports":
            return MdOutlineSports;
        case "md:MdOutlineSurfing":
            return MdOutlineSurfing;
        case "md:MdOutlineSwitchAccount":
            return MdOutlineSwitchAccount;
        case "md:MdOutlineThumbDownAlt":
            return MdOutlineThumbDownAlt;
        case "md:MdOutlineThumbUpAlt":
            return MdOutlineThumbUpAlt;
        case "md:MdOutlineThunderstorm":
            return MdOutlineThunderstorm;
        case "md:MdOutlineTornado":
            return MdOutlineTornado;
        case "md:MdOutlineTransgender":
            return MdOutlineTransgender;
        case "md:MdOutlineTravelExplore":
            return MdOutlineTravelExplore;
        case "md:MdOutlineTsunami":
            return MdOutlineTsunami;
        case "md:MdOutlineVaccines":
            return MdOutlineVaccines;
        case "md:MdOutlineVolcano":
            return MdOutlineVolcano;
        case "md:MdOutlineWallet":
            return MdOutlineWallet;
        case "md:MdOutlineWaterDrop":
            return MdOutlineWaterDrop;
        case "md:MdOutlineWavingHand":
            return MdOutlineWavingHand;
        case "md:MdOutlineWhatsapp":
            return MdOutlineWhatsapp;
        case "md:MdOutlineWhatshot":
            return MdOutlineWhatshot;
        case "md:MdOutlineWoman2":
            return MdOutlineWoman2;
        case "md:MdOutlineWoman":
            return MdOutlineWoman;
        case "md:MdOutlineWorkspacePremium":
            return MdOutlineWorkspacePremium;
        case "md:MdOutlineCheckBoxOutlineBlank":
            return MdOutlineCheckBoxOutlineBlank;
        case "md:MdOutlineCheckBox":
            return MdOutlineCheckBox;
        case "md:MdOutlineIndeterminateCheckBox":
            return MdOutlineIndeterminateCheckBox;
        case "md:MdOutlineRadioButtonChecked":
            return MdOutlineRadioButtonChecked;
        case "md:MdOutlineRadioButtonUnchecked":
            return MdOutlineRadioButtonUnchecked;
        case "md:MdOutlineStarBorderPurple500":
            return MdOutlineStarBorderPurple500;
        case "md:MdOutlineStarBorder":
            return MdOutlineStarBorder;
        case "md:MdOutlineStarHalf":
            return MdOutlineStarHalf;
        case "md:MdOutlineStarOutline":
            return MdOutlineStarOutline;
        case "md:MdOutlineStarPurple500":
            return MdOutlineStarPurple500;
        case "md:MdOutlineStar":
            return MdOutlineStar;
        case "md:MdOutlineToggleOff":
            return MdOutlineToggleOff;
        case "md:MdOutlineToggleOn":
            return MdOutlineToggleOn;
    }
}
