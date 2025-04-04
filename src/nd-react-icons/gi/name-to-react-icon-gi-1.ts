import type {IconType} from "react-icons";

import {
    GiCrescentStaff,
    GiCrestedHelmet,
    GiCricketBat,
    GiCricket,
    GiCrimeSceneTape,
    GiCrocJaws,
    GiCrocSword,
    GiCroissant,
    GiCroissantsPupil,
    GiCrookFlail,
    GiCrossFlare,
    GiCrossMark,
    GiCrossShield,
    GiCrossbow,
    GiCrosscutSaw,
    GiCrossedAirFlows,
    GiCrossedAxes,
    GiCrossedBones,
    GiCrossedChains,
    GiCrossedClaws,
    GiCrossedPistols,
    GiCrossedSabres,
    GiCrossedSlashes,
    GiCrossedSwords,
    GiCrosshairArrow,
    GiCrosshair,
    GiCrossroad,
    GiCrowDive,
    GiCrowNest,
    GiCrowbar,
    GiCrownCoin,
    GiCrownOfThorns,
    GiCrown,
    GiCrownedExplosion,
    GiCrownedHeart,
    GiCrownedSkull,
    GiCrucifix,
    GiCruiser,
    GiCrumblingBall,
    GiCrush,
    GiCryoChamber,
    GiCryptEntrance,
    GiCrystalBall,
    GiCrystalBars,
    GiCrystalCluster,
    GiCrystalEarrings,
    GiCrystalEye,
    GiCrystalGrowth,
    GiCrystalShine,
    GiCrystalShrine,
    GiCrystalWand,
    GiCrystalize,
    GiCuauhtli,
    GiCube,
    GiCubeforce,
    GiCubes,
    GiCuckooClock,
    GiCultist,
    GiCupcake,
    GiCupidonArrow,
    GiCurledLeaf,
    GiCurledTentacle,
    GiCurlingStone,
    GiCurlingVines,
    GiCurlyMask,
    GiCurlyWing,
    GiCursedStar,
    GiCurvyKnife,
    GiCustodianHelmet,
    GiCutDiamond,
    GiCutLemon,
    GiCutPalm,
    GiCyberEye,
    GiCyborgFace,
    GiCycle,
    GiCycling,
    GiCyclops,
    GiCzSkorpion,
    GiD10,
    GiD12,
    GiD4,
    GiDaemonPull,
    GiDaemonSkull,
    GiDaggerRose,
    GiDaggers,
    GiDaisy,
    GiDam,
    GiDamagedHouse,
    GiDandelionFlower,
    GiDango,
    GiDarkSquad,
    GiDart,
    GiDatabase,
    GiDeadEye,
    GiDeadHead,
    GiDeadWood,
    GiDeadlyStrike,
    GiDeathJuice,
    GiDeathNote,
    GiDeathSkull,
    GiDeathStar,
    GiDeathZone,
    GiDeathcab,
    GiDecapitation,
    GiDeerHead,
    GiDeerTrack,
    GiDeer,
    GiDefenseSatellite,
    GiDefensiveWall,
    GiDefibrilate,
    GiDekuTree,
    GiDelicatePerfume,
    GiDelighted,
    GiDeliveryDrone,
    GiDemolish,
    GiDervishSwords,
    GiDesertEagle,
    GiDesertSkull,
    GiDesert,
    GiDeshretRedCrown,
    GiDeskLamp,
    GiDesk,
    GiDespair,
    GiDetonator,
    GiDetour,
    GiDevilMask,
    GiDew,
    GiDiabloSkull,
    GiDiagram,
    GiDialPadlock,
    GiDiamondHard,
    GiDiamondHilt,
    GiDiamondRing,
    GiDiamondTrophy,
    GiDiamondsSmile,
    GiDiamonds,
    GiDiceEightFacesEight,
    GiDiceFire,
    GiDiceShield,
    GiDiceSixFacesFive,
    GiDiceSixFacesFour,
    GiDiceSixFacesOne,
    GiDiceSixFacesSix,
    GiDiceSixFacesThree,
    GiDiceSixFacesTwo,
    GiDiceTarget,
    GiDiceTwentyFacesOne,
    GiDiceTwentyFacesTwenty,
    GiDigDug,
    GiDigHole,
    GiDigitalTrace,
    GiDimetrodon,
    GiDinosaurBones,
    GiDinosaurEgg,
    GiDinosaurRex,
    GiDiplodocus,
    GiDiploma,
    GiDirectionSign,
    GiDirectionSigns,
    GiDirectorChair,
    GiDirewolf,
    GiDiscGolfBag,
    GiDiscGolfBasket,
    GiDisc,
    GiDiscobolus,
    GiDiscussion,
    GiDisintegrate,
    GiDistraction,
    GiDistressSignal,
    GiDivergence,
    GiDivert,
    GiDividedSpiral,
    GiDividedSquare,
    GiDivingDagger,
    GiDivingHelmet,
    GiDjedPillar,
    GiDjembe,
    GiDjinn,
    GiDna1,
    GiDna2,
    GiDoctorFace,
    GiDodge,
    GiDodging,
    GiDogBowl,
    GiDogHouse,
    GiDolmen,
    GiDolphin,
    GiDominoMask,
    GiDominoTiles,
    GiDonerKebab,
    GiDonkey,
    GiDonut,
    GiDoorHandle,
    GiDoorRingHandle,
    GiDoorWatcher,
    GiDoor,
    GiDoorway,
    GiDorsalScales,
    GiDoubleDiaphragm,
    GiDoubleDragon,
    GiDoubleFaceMask,
    GiDoubleFish,
    GiDoubleNecklace,
    GiDoubleQuaver,
    GiDoubleRingedOrb,
    GiDoubleShot,
    GiDoubleStreetLights,
    GiDoubled,
    GiDoughRoller,
    GiDove,
    GiDozen,
    GiDragonBalls,
    GiDragonBreath,
    GiDragonHead,
    GiDragonOrb,
    GiDragonShield,
    GiDragonSpiral,
    GiDragonfly,
    GiDrakkarDragon,
    GiDrakkar,
    GiDramaMasks,
    GiDrawbridge,
    GiDreadSkull,
    GiDread,
    GiDreadnought,
    GiDreamCatcher,
    GiDress,
    GiDrill,
    GiDrinkMe,
    GiDrinking,
    GiDrippingBlade,
    GiDrippingGoo,
    GiDrippingHoney,
    GiDrippingKnife,
    GiDrippingStar,
    GiDrippingStone,
    GiDrippingSword,
    GiDrippingTube,
    GiDropEarrings,
    GiDropWeapon,
    GiDrop,
    GiDropletSplash,
    GiDroplets,
    GiDrowning,
    GiDrumKit,
    GiDrum,
    GiDualityMask,
    GiDuality,
    GiDuckPalm,
    GiDuck,
    GiDuel,
    GiDuffelBag,
    GiDumplingBao,
    GiDumpling,
    GiDunceCap,
    GiDungeonGate,
    GiDungeonLight,
    GiDuration,
    GiDustCloud,
    GiDutchBike,
    GiDwarfFace,
    GiDwarfHelmet,
    GiDwarfKing,
    GiDwennimmen,
    GiDynamite,
    GiEagleEmblem,
    GiEagleHead,
    GiEarbuds,
    GiEarrings,
    GiEarthAfricaEurope,
    GiEarthAmerica,
    GiEarthAsiaOceania,
    GiEarthCrack,
    GiEarthSpit,
    GiEarthWorm,
    GiEarwig,
    GiEasel,
    GiEasterEgg,
    GiEatingPelican,
    GiEating,
    GiEchoRipples,
    GiEclipseFlare,
    GiEclipseSaw,
    GiEclipse,
    GiEcology,
    GiEdgeCrack,
    GiEdgedShield,
    GiEel,
    GiEggClutch,
    GiEggDefense,
    GiEggEye,
    GiEggPod,
    GiEgypt,
    GiEgyptianBird,
    GiEgyptianProfile,
    GiEgyptianPyramids,
    GiEgyptianSphinx,
    GiEgyptianTemple,
    GiEgyptianUrns,
    GiEgyptianWalk,
    GiEightBall,
    GiElbowPad,
    GiElderberry,
    GiElectricWhip,
    GiElectric,
    GiElectricalCrescent,
    GiElectricalResistance,
    GiElectricalSocket,
    GiElephantHead,
    GiElephant,
    GiElevator,
    GiElfEar,
    GiElfHelmet,
    GiElvenCastle,
    GiEmberShot,
    GiEmbrassedEnergy,
    GiEmbryo,
    GiEmeraldNecklace,
    GiEmerald,
    GiEmptyChessboard,
    GiEmptyHourglass,
    GiEmptyMetalBucketHandle,
    GiEmptyMetalBucket,
    GiEmptyWoodBucketHandle,
    GiEmptyWoodBucket,
    GiEncirclement,
    GiEnergise,
    GiEnergyArrow,
    GiEnergyBreath,
    GiEnergyShield,
    GiEnergySword,
    GiEnergyTank,
    GiEngagementRing,
    GiEnlightenment,
    GiEnrage,
    GiEntMouth,
    GiEntangledTyphoon,
    GiEntryDoor,
    GiEnvelope,
    GiErlenmeyer,
    GiErmine,
    GiEruption,
    GiEscalator,
    GiEskimo,
    GiEternalLove,
    GiEuropeanFlag,
    GiEvasion,
    GiEvilBat,
    GiEvilBook,
    GiEvilBud,
    GiEvilComet,
    GiEvilEyes,
    GiEvilFork,
    GiEvilHand,
    GiEvilLove,
    GiEvilMinion,
    GiEvilMoon,
    GiEvilTower,
    GiEvilTree,
    GiEvilWings,
    GiExecutionerHood,
    GiExitDoor,
    GiExpand,
    GiExpandedRays,
    GiExpander,
    GiExpense,
    GiExplodingPlanet,
    GiExplosionRays,
    GiExplosiveMaterials,
    GiExplosiveMeeting,
    GiExtraLucid,
    GiExtraTime,
    GiExtractionOrb,
    GiEyeOfHorus,
    GiEyeShield,
    GiEyeTarget,
    GiEyeball,
    GiEyedropper,
    GiEyelashes,
    GiEyepatch,
    GiEyestalk,
    GiFClef,
    GiF1Car,
    GiFaceToFace,
    GiFactoryArm,
    GiFactory,
    GiFairyWand,
    GiFairyWings,
    GiFairy,
    GiFalconMoon,
    GiFallDown,
    GiFallingBlob,
    GiFallingBomb,
    GiFallingBoulder,
    GiFallingEye,
    GiFallingLeaf,
    GiFallingOvoid,
    GiFallingRocks,
    GiFallingStar,
    GiFalling,
    GiFalloutShelter,
    GiFamas,
    GiFamilyHouse,
    GiFamilyTree,
    GiFangedSkull,
    GiFangsCircle,
    GiFangs,
    GiFarmTractor,
    GiFarmer,
    GiFastArrow,
    GiFastBackwardButton,
    GiFastForwardButton,
    GiFastNoodles,
    GiFat,
    GiFeatherNecklace,
    GiFeatherWound,
    GiFeather,
    GiFeatheredWing,
    GiFedora,
    GiFeline,
    GiFemaleLegs,
    GiFemaleVampire,
    GiFemale,
    GiFencer,
    GiFern,
    GiFertilizerBag,
    GiFetus,
    GiFez,
    GiFieldGun,
    GiField,
    GiFigurehead,
    GiFiles,
    GiFilmProjector,
    GiFilmSpool,
    GiFilmStrip,
    GiFinch,
    GiFingerPrint,
    GiFingernail,
    GiFingersCrossed,
    GiFinishLine,
    GiFireAce,
    GiFireAxe,
    GiFireBomb,
    GiFireBottle,
    GiFireBowl,
    GiFireBreath,
    GiFireDash,
    GiFireExtinguisher,
    GiFireFlower,
    GiFireGem,
    GiFirePunch,
    GiFireRay,
    GiFireRing,
    GiFireShield,
    GiFireShrine,
    GiFireSilhouette,
    GiFireSpellCast,
    GiFireTail,
    GiFireWave,
    GiFireZone,
    GiFire,
    GiFireball,
    GiFireflake,
    GiFireplace,
    GiFirewall,
    GiFireworkRocket,
    GiFirstAidKit,
    GiFishBucket,
    GiFishCooked,
    GiFishCorpse,
    GiFishEggs,
    GiFishEscape,
    GiFishMonster,
    GiFishScales,
    GiFishSmoking,
    GiFishbone,
    GiFishhookFork,
    GiFishingBoat,
    GiFishingHook,
    GiFishingJig,
    GiFishingLure,
    GiFishingNet,
    GiFishingPole,
    GiFishingSpoon,
    GiFishing,
    GiFission,
    GiFist,
    GiFizzingFlask,
    GiFlagObjective,
    GiFlail,
    GiFlake,
    GiFlameClaws,
    GiFlameSpin,
    GiFlameTunnel,
    GiFlame,
    GiFlamedLeaf,
    GiFlamer,
    GiFlamethrowerSoldier,
    GiFlamethrower,
    GiFlamingArrow,
    GiFlamingClaw,
    GiFlamingSheet,
    GiFlamingTrident,
    GiFlamingo,
    GiFlangedMace,
    GiFlashGrenade,
    GiFlashlight,
    GiFlatHammer,
    GiFlatPawPrint,
    GiFlatPlatform,
    GiFlatStar,
    GiFlatTire,
    GiFlatbedCovered,
    GiFlatbed,
    GiFlatfish,
    GiFlax,
    GiFleshyMass,
    GiFleurDeLys,
    GiFlexibleLamp,
    GiFlexibleStar,
    GiFlintSpark,
    GiFlipFlops,
    GiFloatingCrystal,
    GiFloatingGhost,
    GiFloatingPlatforms,
    GiFloatingTentacles,
    GiFlood,
    GiFloorHatch,
    GiFloorPolisher,
    GiFlour,
    GiFlowerEmblem,
    GiFlowerHat,
    GiFlowerPot,
    GiFlowerStar,
    GiFlowerTwirl,
    GiFlowers,
    GiFluffyCloud,
    GiFluffyFlame,
    GiFluffySwirl,
    GiFluffyTrefoil,
    GiFluffyWing,
    GiFlute,
    GiFly,
    GiFlyingBeetle,
    GiFlyingDagger,
    GiFlyingFlag,
    GiFlyingFox,
    GiFlyingShuriken,
    GiFlyingTarget,
    GiFlyingTrout,
    GiFnFal,
    GiFoam,
    GiFoamyDisc,
    GiFocusedLightning,
    GiFogLight,
    GiFog,
    GiFoldedPaper,
    GiFomorian,
    GiFoodChain,
    GiFoodTruck,
    GiFootPlaster,
    GiFootTrip,
    GiFootprint,
    GiFootsteps,
    GiFootyField,
    GiForearm,
    GiForestCamp,
    GiForestEntrance,
    GiForest,
    GiForkKnifeSpoon,
    GiForklift,
    GiForwardField,
    GiForwardSun,
    GiFossil,
    GiFoundryBucket,
    GiFountainPen,
    GiFountain,
    GiFoxHead,
    GiFoxTail,
    GiFox,
    GiFragmentedMeteor,
    GiFragmentedSword,
    GiFragrance,
    GiFrance,
    GiFrankensteinCreature,
    GiFrayedArrow,
    GiFreedomDove,
    GiFreemasonry,
    GiFrenchFries,
    GiFrenchHorn,
    GiFriedEggs,
    GiFriedFish,
    GiFrisbee,
    GiFroeAndMallet,
    GiFrogFoot,
    GiFrogPrince,
    GiFrog,
    GiFrontTeeth,
    GiFrontalLobe,
    GiFrostfire,
    GiFrozenArrow,
    GiFrozenBlock,
    GiFrozenBody,
    GiFrozenOrb,
    GiFrozenRing,
    GiFruitBowl,
    GiFruitTree,
    GiFruiting,
    GiFuelTank,
    GiFuji,
    GiFulguroPunch,
    GiFullFolder,
    GiFullMetalBucketHandle,
    GiFullMetalBucket,
    GiFullMotorcycleHelmet,
    GiFullPizza,
    GiFullWoodBucketHandle,
    GiFullWoodBucket,
    GiFunnel,
    GiFurBoot,
    GiFurShirt,
    GiFurnace,
    GiGClef,
    GiGalaxy,
    GiGalea,
    GiGalleon,
    GiGalley,
    GiGameConsole,
    GiGamepadCross,
    GiGamepad,
    GiGardeningShears,
    GiGargoyle,
    GiGarlic,
    GiGasMask,
    GiGasPump,
    GiGasStove,
    GiGate,
    GiGaulsHelm,
    GiGauntlet,
    GiGavel,
    GiGaze,
    GiGearHammer,
    GiGearStickPattern,
    GiGearStick,
    GiGears,
    GiGecko,
    GiGemChain,
    GiGemNecklace,
    GiGemPendant,
    GiGemini,
    GiGems,
    GiGhostAlly,
    GiGhost,
    GiGiantSquid,
    GiGiant,
    GiGibbet,
    GiGiftOfKnowledge,
    GiGiftTrap,
    GiGingerbreadMan,
    GiGinkgoLeaf,
    GiGladius,
    GiGlaive,
    GiGlassBall,
    GiGlassCelebration,
    GiGlassHeart,
    GiGlassShot,
    GiGlider,
    GiGlobeRing,
    GiGlobe,
    GiGlock,
    GiGloop,
    GiGloves,
    GiGlowingArtifact,
    GiGlowingHands,
    GiGluttonousSmile,
    GiGluttony,
    GiGoalKeeper,
    GiGoat,
    GiGoblinCamp,
    GiGoblinHead,
    GiGoldBar,
    GiGoldMine,
    GiGoldNuggets,
    GiGoldScarab,
    GiGoldShell,
    GiGoldStack,
    GiGolemHead,
    GiGolfFlag,
    GiGolfTee,
    GiGong,
    GiGooExplosion,
    GiGooSkull,
    GiGooSpurt,
    GiGooeyDaemon,
    GiGooeyEyedSun,
    GiGooeyImpact,
    GiGooeyMolecule,
    GiGooeySword,
    GiGoose,
    GiGorilla,
    GiGothicCross,
    GiGps,
    GiGrab,
    GiGraduateCap,
    GiGrainBundle,
    GiGrain,
    GiGranary,
    GiGrandPiano,
    GiGrapes,
    GiGrapple,
    GiGraspingClaws,
    GiGraspingSlug,
    GiGrassMushroom,
    GiGrass,
    GiGraveFlowers,
    GiGraveyard,
    GiGreaseTrap,
    GiGreatPyramid,
    GiGreatWarTank,
    GiGreaves,
    GiGreekSphinx,
    GiGreekTemple,
    GiGreenPower,
    GiGreenhouse,
    GiGrenade,
    GiGriffinShield,
    GiGriffinSymbol,
    GiGrimReaper,
    GiGroundSprout,
    GiGroundbreaker,
    GiGroupedDrops,
    GiGrowth,
    GiGuardedTower,
    GiGuards,
    GiGuatemala,
    GiGuillotine,
    GiGuitarBassHead,
    GiGuitarHead,
    GiGuitar,
    GiGunRose,
    GiGunStock,
    GiGunshot,
    GiGymBag,
    GiH2O,
    GiHabitatDome,
    GiHadesSymbol,
    GiHairStrands,
    GiHalberdShuriken,
    GiHalberd,
    GiHalfBodyCrawling,
    GiHalfDead,
    GiHalfHeart,
    GiHalfLog,
    GiHalfTornado,
    GiHalt,
    GiHamShank,
    GiHamburgerMenu,
    GiHamburger,
    GiHammerBreak,
    GiHammerDrop,
    GiHammerNails,
    GiHammerSickle,
    GiHandBag,
    GiHandBandage,
    GiHandGrip,
    GiHandOfGod,
    GiHandOk,
    GiHandSaw,
    GiHandTruck,
    GiHandWing,
    GiHand,
    GiHandcuffed,
    GiHandcuffs,
    GiHandheldFan,
    GiHangGlider,
    GiHanger,
    GiHangingSign,
    GiHangingSpider,
    GiHappySkull,
    GiHarborDock,
    GiHarp,
    GiHarpoonChain,
    GiHarpoonTrident,
    GiHarpy,
    GiHarryPotterSkull,
    GiHastyGrave,
    GiHatchet,
    GiHatchets,
    GiHaunting,
    GiHawkEmblem,
    GiHazardSign,
    GiHazmatSuit,
    GiHeadShot,
    GiHeadbandKnot,
    GiHeadphones,
    GiHeadshot,
    GiHealingShield,
    GiHealing,
    GiHealthCapsule,
    GiHealthDecrease,
    GiHealthIncrease,
    GiHealthNormal,
    GiHealthPotion,
    GiHearingDisabled,
    GiHeartArmor,
    GiHeartBattery,
    GiHeartBeats,
    GiHeartBottle,
    GiHeartDrop,
    GiHeartEarrings,
    GiHeartInside,
    GiHeartKey,
    GiHeartMinus,
    GiHeartNecklace,
    GiHeartOrgan,
    GiHeartPlus,
    GiHeartShield,
    GiHeartStake,
    GiHeartTower,
    GiHeartWings,
    GiHeartburn,
    GiHearts,
    GiHeatHaze,
    GiHeavenGate,
    GiHeavyArrow,
    GiHeavyBullets,
    GiHeavyCollar,
    GiHeavyFall,
    GiHeavyFighter,
    GiHeavyHelm,
    GiHeavyLightning,
    GiHeavyRain,
    GiHeavyThornyTriskelion,
    GiHeavyTimer,
    GiHedgehog,
    GiHedjetWhiteCrown,
    GiHelicoprion,
    GiHelicopterTail,
    GiHelicopter,
    GiHellCrosses,
    GiHelmetHeadShot,
    GiHelmet,
    GiHelp,
    GiHemp,
    GiHeptagram,
    GiHeraldicSun,
    GiHerbsBundle,
    GiHeron,
    GiHexagonalNut,
    GiHexes,
    GiHidden,
    GiHieroglyphLegs,
    GiHieroglyphY,
    GiHighFive,
    GiHighGrass,
    GiHighHeel,
    GiHighKick,
    GiHighPunch,
    GiHighShot,
    GiHighTide,
    GiHighlighter,
    GiHiking,
    GiHillConquest,
    GiHillFort,
    GiHills,
    GiHistogram,
    GiHiveMind,
    GiHive,
    GiHobbitDoor,
    GiHobbitDwelling,
    GiHockey,
    GiHoleLadder,
    GiHole,
    GiHollowCat,
    GiHolosphere,
    GiHolyGrail,
    GiHolyHandGrenade,
    GiHolyOak,
    GiHolySymbol,
    GiHolyWater,
    GiHomeGarage,
    GiHoneyJar,
    GiHoneycomb,
    GiHoneypot,
    GiHood,
    GiHoodedAssassin,
    GiHoodedFigure,
    GiHoodie,
    GiHoof,
    GiHook,
    GiHops,
    GiHorizonRoad,
    GiHorizontalFlip,
    GiHornInternal,
    GiHornedHelm,
    GiHornedReptile,
    GiHornedSkull,
    GiHorseHead,
    GiHorseshoe,
    GiHorus,
    GiHospitalCross,
    GiHospital,
    GiHotDog,
    GiHotMeal,
    GiHotSpices,
    GiHotSurface,
    GiHound,
    GiHourglass,
    GiHouseKeys,
    GiHouse,
    GiHumanCannonball,
    GiHumanEar,
    GiHumanPyramid,
    GiHumanTarget,
    GiHummingbird,
    GiHungary,
    GiHunterEyes,
    GiHuntingBolas,
    GiHuntingHorn,
    GiHut,
    GiHutsVillage,
    GiHydraShot,
    GiHydra,
    GiHyenaHead,
    GiHypersonicBolt,
    GiHypersonicMelon,
    GiHypodermicTest,
    GiIBeam,
    GiIBrick,
    GiIbis,
    GiIcarus,
    GiIceBolt,
    GiIceBomb,
    GiIceCreamCone,
    GiIceCreamScoop,
    GiIceCube,
    GiIceCubes,
    GiIceGolem,
    GiIceIris,
    GiIcePop,
    GiIceShield,
    GiIceSkate,
    GiIceSpear,
    GiIceSpellCast,
    GiIceberg,
    GiIcebergs,
    GiIceland,
    GiIciclesAura,
    GiIciclesFence,
    GiIdCard,
    GiIdea,
    GiIfrit,
    GiIgloo,
    GiImbricatedArrows,
    GiImpLaugh,
    GiImp,
    GiImpactPoint,
    GiImperialCrown,
    GiImplosion,
    GiImprisoned,
    GiInauguration,
    GiIncense,
    GiIncisors,
    GiIncomingRocket,
    GiIncubator,
    GiIndiaGate,
    GiIndianPalace,
    GiInfernoBomb,
    GiInfestedMass,
    GiInfinity,
    GiInfo,
    GiInjustice,
    GiInkSwirl,
    GiInnerSelf,
    GiInsectJaws,
    GiInspiration,
    GiInterceptorShip,
    GiInterdiction,
    GiInterlacedTentacles,
    GiInterleavedArrows,
    GiInterleavedClaws,
    GiInternalInjury,
    GiInternalOrgan,
    GiInterstellarPath,
    GiIntricateNecklace,
    GiInvertedDice1,
    GiInvertedDice2,
    GiInvertedDice3,
    GiInvertedDice4,
    GiInvertedDice5,
    GiInvertedDice6,
    GiInvisibleFace,
    GiInvisible,
    GiIonCannonBlast,
    GiIonicColumn,
    GiIraq,
    GiIronCross,
    GiIronHulledWarship,
    GiIronMask,
    GiIsland,
} from "react-icons/gi"

export function nameToReactIcon_gi_1(iconName: string): IconType | undefined {

    switch(iconName) {
        case "gi:GiCrescentStaff":
            return GiCrescentStaff;
        case "gi:GiCrestedHelmet":
            return GiCrestedHelmet;
        case "gi:GiCricketBat":
            return GiCricketBat;
        case "gi:GiCricket":
            return GiCricket;
        case "gi:GiCrimeSceneTape":
            return GiCrimeSceneTape;
        case "gi:GiCrocJaws":
            return GiCrocJaws;
        case "gi:GiCrocSword":
            return GiCrocSword;
        case "gi:GiCroissant":
            return GiCroissant;
        case "gi:GiCroissantsPupil":
            return GiCroissantsPupil;
        case "gi:GiCrookFlail":
            return GiCrookFlail;
        case "gi:GiCrossFlare":
            return GiCrossFlare;
        case "gi:GiCrossMark":
            return GiCrossMark;
        case "gi:GiCrossShield":
            return GiCrossShield;
        case "gi:GiCrossbow":
            return GiCrossbow;
        case "gi:GiCrosscutSaw":
            return GiCrosscutSaw;
        case "gi:GiCrossedAirFlows":
            return GiCrossedAirFlows;
        case "gi:GiCrossedAxes":
            return GiCrossedAxes;
        case "gi:GiCrossedBones":
            return GiCrossedBones;
        case "gi:GiCrossedChains":
            return GiCrossedChains;
        case "gi:GiCrossedClaws":
            return GiCrossedClaws;
        case "gi:GiCrossedPistols":
            return GiCrossedPistols;
        case "gi:GiCrossedSabres":
            return GiCrossedSabres;
        case "gi:GiCrossedSlashes":
            return GiCrossedSlashes;
        case "gi:GiCrossedSwords":
            return GiCrossedSwords;
        case "gi:GiCrosshairArrow":
            return GiCrosshairArrow;
        case "gi:GiCrosshair":
            return GiCrosshair;
        case "gi:GiCrossroad":
            return GiCrossroad;
        case "gi:GiCrowDive":
            return GiCrowDive;
        case "gi:GiCrowNest":
            return GiCrowNest;
        case "gi:GiCrowbar":
            return GiCrowbar;
        case "gi:GiCrownCoin":
            return GiCrownCoin;
        case "gi:GiCrownOfThorns":
            return GiCrownOfThorns;
        case "gi:GiCrown":
            return GiCrown;
        case "gi:GiCrownedExplosion":
            return GiCrownedExplosion;
        case "gi:GiCrownedHeart":
            return GiCrownedHeart;
        case "gi:GiCrownedSkull":
            return GiCrownedSkull;
        case "gi:GiCrucifix":
            return GiCrucifix;
        case "gi:GiCruiser":
            return GiCruiser;
        case "gi:GiCrumblingBall":
            return GiCrumblingBall;
        case "gi:GiCrush":
            return GiCrush;
        case "gi:GiCryoChamber":
            return GiCryoChamber;
        case "gi:GiCryptEntrance":
            return GiCryptEntrance;
        case "gi:GiCrystalBall":
            return GiCrystalBall;
        case "gi:GiCrystalBars":
            return GiCrystalBars;
        case "gi:GiCrystalCluster":
            return GiCrystalCluster;
        case "gi:GiCrystalEarrings":
            return GiCrystalEarrings;
        case "gi:GiCrystalEye":
            return GiCrystalEye;
        case "gi:GiCrystalGrowth":
            return GiCrystalGrowth;
        case "gi:GiCrystalShine":
            return GiCrystalShine;
        case "gi:GiCrystalShrine":
            return GiCrystalShrine;
        case "gi:GiCrystalWand":
            return GiCrystalWand;
        case "gi:GiCrystalize":
            return GiCrystalize;
        case "gi:GiCuauhtli":
            return GiCuauhtli;
        case "gi:GiCube":
            return GiCube;
        case "gi:GiCubeforce":
            return GiCubeforce;
        case "gi:GiCubes":
            return GiCubes;
        case "gi:GiCuckooClock":
            return GiCuckooClock;
        case "gi:GiCultist":
            return GiCultist;
        case "gi:GiCupcake":
            return GiCupcake;
        case "gi:GiCupidonArrow":
            return GiCupidonArrow;
        case "gi:GiCurledLeaf":
            return GiCurledLeaf;
        case "gi:GiCurledTentacle":
            return GiCurledTentacle;
        case "gi:GiCurlingStone":
            return GiCurlingStone;
        case "gi:GiCurlingVines":
            return GiCurlingVines;
        case "gi:GiCurlyMask":
            return GiCurlyMask;
        case "gi:GiCurlyWing":
            return GiCurlyWing;
        case "gi:GiCursedStar":
            return GiCursedStar;
        case "gi:GiCurvyKnife":
            return GiCurvyKnife;
        case "gi:GiCustodianHelmet":
            return GiCustodianHelmet;
        case "gi:GiCutDiamond":
            return GiCutDiamond;
        case "gi:GiCutLemon":
            return GiCutLemon;
        case "gi:GiCutPalm":
            return GiCutPalm;
        case "gi:GiCyberEye":
            return GiCyberEye;
        case "gi:GiCyborgFace":
            return GiCyborgFace;
        case "gi:GiCycle":
            return GiCycle;
        case "gi:GiCycling":
            return GiCycling;
        case "gi:GiCyclops":
            return GiCyclops;
        case "gi:GiCzSkorpion":
            return GiCzSkorpion;
        case "gi:GiD10":
            return GiD10;
        case "gi:GiD12":
            return GiD12;
        case "gi:GiD4":
            return GiD4;
        case "gi:GiDaemonPull":
            return GiDaemonPull;
        case "gi:GiDaemonSkull":
            return GiDaemonSkull;
        case "gi:GiDaggerRose":
            return GiDaggerRose;
        case "gi:GiDaggers":
            return GiDaggers;
        case "gi:GiDaisy":
            return GiDaisy;
        case "gi:GiDam":
            return GiDam;
        case "gi:GiDamagedHouse":
            return GiDamagedHouse;
        case "gi:GiDandelionFlower":
            return GiDandelionFlower;
        case "gi:GiDango":
            return GiDango;
        case "gi:GiDarkSquad":
            return GiDarkSquad;
        case "gi:GiDart":
            return GiDart;
        case "gi:GiDatabase":
            return GiDatabase;
        case "gi:GiDeadEye":
            return GiDeadEye;
        case "gi:GiDeadHead":
            return GiDeadHead;
        case "gi:GiDeadWood":
            return GiDeadWood;
        case "gi:GiDeadlyStrike":
            return GiDeadlyStrike;
        case "gi:GiDeathJuice":
            return GiDeathJuice;
        case "gi:GiDeathNote":
            return GiDeathNote;
        case "gi:GiDeathSkull":
            return GiDeathSkull;
        case "gi:GiDeathStar":
            return GiDeathStar;
        case "gi:GiDeathZone":
            return GiDeathZone;
        case "gi:GiDeathcab":
            return GiDeathcab;
        case "gi:GiDecapitation":
            return GiDecapitation;
        case "gi:GiDeerHead":
            return GiDeerHead;
        case "gi:GiDeerTrack":
            return GiDeerTrack;
        case "gi:GiDeer":
            return GiDeer;
        case "gi:GiDefenseSatellite":
            return GiDefenseSatellite;
        case "gi:GiDefensiveWall":
            return GiDefensiveWall;
        case "gi:GiDefibrilate":
            return GiDefibrilate;
        case "gi:GiDekuTree":
            return GiDekuTree;
        case "gi:GiDelicatePerfume":
            return GiDelicatePerfume;
        case "gi:GiDelighted":
            return GiDelighted;
        case "gi:GiDeliveryDrone":
            return GiDeliveryDrone;
        case "gi:GiDemolish":
            return GiDemolish;
        case "gi:GiDervishSwords":
            return GiDervishSwords;
        case "gi:GiDesertEagle":
            return GiDesertEagle;
        case "gi:GiDesertSkull":
            return GiDesertSkull;
        case "gi:GiDesert":
            return GiDesert;
        case "gi:GiDeshretRedCrown":
            return GiDeshretRedCrown;
        case "gi:GiDeskLamp":
            return GiDeskLamp;
        case "gi:GiDesk":
            return GiDesk;
        case "gi:GiDespair":
            return GiDespair;
        case "gi:GiDetonator":
            return GiDetonator;
        case "gi:GiDetour":
            return GiDetour;
        case "gi:GiDevilMask":
            return GiDevilMask;
        case "gi:GiDew":
            return GiDew;
        case "gi:GiDiabloSkull":
            return GiDiabloSkull;
        case "gi:GiDiagram":
            return GiDiagram;
        case "gi:GiDialPadlock":
            return GiDialPadlock;
        case "gi:GiDiamondHard":
            return GiDiamondHard;
        case "gi:GiDiamondHilt":
            return GiDiamondHilt;
        case "gi:GiDiamondRing":
            return GiDiamondRing;
        case "gi:GiDiamondTrophy":
            return GiDiamondTrophy;
        case "gi:GiDiamondsSmile":
            return GiDiamondsSmile;
        case "gi:GiDiamonds":
            return GiDiamonds;
        case "gi:GiDiceEightFacesEight":
            return GiDiceEightFacesEight;
        case "gi:GiDiceFire":
            return GiDiceFire;
        case "gi:GiDiceShield":
            return GiDiceShield;
        case "gi:GiDiceSixFacesFive":
            return GiDiceSixFacesFive;
        case "gi:GiDiceSixFacesFour":
            return GiDiceSixFacesFour;
        case "gi:GiDiceSixFacesOne":
            return GiDiceSixFacesOne;
        case "gi:GiDiceSixFacesSix":
            return GiDiceSixFacesSix;
        case "gi:GiDiceSixFacesThree":
            return GiDiceSixFacesThree;
        case "gi:GiDiceSixFacesTwo":
            return GiDiceSixFacesTwo;
        case "gi:GiDiceTarget":
            return GiDiceTarget;
        case "gi:GiDiceTwentyFacesOne":
            return GiDiceTwentyFacesOne;
        case "gi:GiDiceTwentyFacesTwenty":
            return GiDiceTwentyFacesTwenty;
        case "gi:GiDigDug":
            return GiDigDug;
        case "gi:GiDigHole":
            return GiDigHole;
        case "gi:GiDigitalTrace":
            return GiDigitalTrace;
        case "gi:GiDimetrodon":
            return GiDimetrodon;
        case "gi:GiDinosaurBones":
            return GiDinosaurBones;
        case "gi:GiDinosaurEgg":
            return GiDinosaurEgg;
        case "gi:GiDinosaurRex":
            return GiDinosaurRex;
        case "gi:GiDiplodocus":
            return GiDiplodocus;
        case "gi:GiDiploma":
            return GiDiploma;
        case "gi:GiDirectionSign":
            return GiDirectionSign;
        case "gi:GiDirectionSigns":
            return GiDirectionSigns;
        case "gi:GiDirectorChair":
            return GiDirectorChair;
        case "gi:GiDirewolf":
            return GiDirewolf;
        case "gi:GiDiscGolfBag":
            return GiDiscGolfBag;
        case "gi:GiDiscGolfBasket":
            return GiDiscGolfBasket;
        case "gi:GiDisc":
            return GiDisc;
        case "gi:GiDiscobolus":
            return GiDiscobolus;
        case "gi:GiDiscussion":
            return GiDiscussion;
        case "gi:GiDisintegrate":
            return GiDisintegrate;
        case "gi:GiDistraction":
            return GiDistraction;
        case "gi:GiDistressSignal":
            return GiDistressSignal;
        case "gi:GiDivergence":
            return GiDivergence;
        case "gi:GiDivert":
            return GiDivert;
        case "gi:GiDividedSpiral":
            return GiDividedSpiral;
        case "gi:GiDividedSquare":
            return GiDividedSquare;
        case "gi:GiDivingDagger":
            return GiDivingDagger;
        case "gi:GiDivingHelmet":
            return GiDivingHelmet;
        case "gi:GiDjedPillar":
            return GiDjedPillar;
        case "gi:GiDjembe":
            return GiDjembe;
        case "gi:GiDjinn":
            return GiDjinn;
        case "gi:GiDna1":
            return GiDna1;
        case "gi:GiDna2":
            return GiDna2;
        case "gi:GiDoctorFace":
            return GiDoctorFace;
        case "gi:GiDodge":
            return GiDodge;
        case "gi:GiDodging":
            return GiDodging;
        case "gi:GiDogBowl":
            return GiDogBowl;
        case "gi:GiDogHouse":
            return GiDogHouse;
        case "gi:GiDolmen":
            return GiDolmen;
        case "gi:GiDolphin":
            return GiDolphin;
        case "gi:GiDominoMask":
            return GiDominoMask;
        case "gi:GiDominoTiles":
            return GiDominoTiles;
        case "gi:GiDonerKebab":
            return GiDonerKebab;
        case "gi:GiDonkey":
            return GiDonkey;
        case "gi:GiDonut":
            return GiDonut;
        case "gi:GiDoorHandle":
            return GiDoorHandle;
        case "gi:GiDoorRingHandle":
            return GiDoorRingHandle;
        case "gi:GiDoorWatcher":
            return GiDoorWatcher;
        case "gi:GiDoor":
            return GiDoor;
        case "gi:GiDoorway":
            return GiDoorway;
        case "gi:GiDorsalScales":
            return GiDorsalScales;
        case "gi:GiDoubleDiaphragm":
            return GiDoubleDiaphragm;
        case "gi:GiDoubleDragon":
            return GiDoubleDragon;
        case "gi:GiDoubleFaceMask":
            return GiDoubleFaceMask;
        case "gi:GiDoubleFish":
            return GiDoubleFish;
        case "gi:GiDoubleNecklace":
            return GiDoubleNecklace;
        case "gi:GiDoubleQuaver":
            return GiDoubleQuaver;
        case "gi:GiDoubleRingedOrb":
            return GiDoubleRingedOrb;
        case "gi:GiDoubleShot":
            return GiDoubleShot;
        case "gi:GiDoubleStreetLights":
            return GiDoubleStreetLights;
        case "gi:GiDoubled":
            return GiDoubled;
        case "gi:GiDoughRoller":
            return GiDoughRoller;
        case "gi:GiDove":
            return GiDove;
        case "gi:GiDozen":
            return GiDozen;
        case "gi:GiDragonBalls":
            return GiDragonBalls;
        case "gi:GiDragonBreath":
            return GiDragonBreath;
        case "gi:GiDragonHead":
            return GiDragonHead;
        case "gi:GiDragonOrb":
            return GiDragonOrb;
        case "gi:GiDragonShield":
            return GiDragonShield;
        case "gi:GiDragonSpiral":
            return GiDragonSpiral;
        case "gi:GiDragonfly":
            return GiDragonfly;
        case "gi:GiDrakkarDragon":
            return GiDrakkarDragon;
        case "gi:GiDrakkar":
            return GiDrakkar;
        case "gi:GiDramaMasks":
            return GiDramaMasks;
        case "gi:GiDrawbridge":
            return GiDrawbridge;
        case "gi:GiDreadSkull":
            return GiDreadSkull;
        case "gi:GiDread":
            return GiDread;
        case "gi:GiDreadnought":
            return GiDreadnought;
        case "gi:GiDreamCatcher":
            return GiDreamCatcher;
        case "gi:GiDress":
            return GiDress;
        case "gi:GiDrill":
            return GiDrill;
        case "gi:GiDrinkMe":
            return GiDrinkMe;
        case "gi:GiDrinking":
            return GiDrinking;
        case "gi:GiDrippingBlade":
            return GiDrippingBlade;
        case "gi:GiDrippingGoo":
            return GiDrippingGoo;
        case "gi:GiDrippingHoney":
            return GiDrippingHoney;
        case "gi:GiDrippingKnife":
            return GiDrippingKnife;
        case "gi:GiDrippingStar":
            return GiDrippingStar;
        case "gi:GiDrippingStone":
            return GiDrippingStone;
        case "gi:GiDrippingSword":
            return GiDrippingSword;
        case "gi:GiDrippingTube":
            return GiDrippingTube;
        case "gi:GiDropEarrings":
            return GiDropEarrings;
        case "gi:GiDropWeapon":
            return GiDropWeapon;
        case "gi:GiDrop":
            return GiDrop;
        case "gi:GiDropletSplash":
            return GiDropletSplash;
        case "gi:GiDroplets":
            return GiDroplets;
        case "gi:GiDrowning":
            return GiDrowning;
        case "gi:GiDrumKit":
            return GiDrumKit;
        case "gi:GiDrum":
            return GiDrum;
        case "gi:GiDualityMask":
            return GiDualityMask;
        case "gi:GiDuality":
            return GiDuality;
        case "gi:GiDuckPalm":
            return GiDuckPalm;
        case "gi:GiDuck":
            return GiDuck;
        case "gi:GiDuel":
            return GiDuel;
        case "gi:GiDuffelBag":
            return GiDuffelBag;
        case "gi:GiDumplingBao":
            return GiDumplingBao;
        case "gi:GiDumpling":
            return GiDumpling;
        case "gi:GiDunceCap":
            return GiDunceCap;
        case "gi:GiDungeonGate":
            return GiDungeonGate;
        case "gi:GiDungeonLight":
            return GiDungeonLight;
        case "gi:GiDuration":
            return GiDuration;
        case "gi:GiDustCloud":
            return GiDustCloud;
        case "gi:GiDutchBike":
            return GiDutchBike;
        case "gi:GiDwarfFace":
            return GiDwarfFace;
        case "gi:GiDwarfHelmet":
            return GiDwarfHelmet;
        case "gi:GiDwarfKing":
            return GiDwarfKing;
        case "gi:GiDwennimmen":
            return GiDwennimmen;
        case "gi:GiDynamite":
            return GiDynamite;
        case "gi:GiEagleEmblem":
            return GiEagleEmblem;
        case "gi:GiEagleHead":
            return GiEagleHead;
        case "gi:GiEarbuds":
            return GiEarbuds;
        case "gi:GiEarrings":
            return GiEarrings;
        case "gi:GiEarthAfricaEurope":
            return GiEarthAfricaEurope;
        case "gi:GiEarthAmerica":
            return GiEarthAmerica;
        case "gi:GiEarthAsiaOceania":
            return GiEarthAsiaOceania;
        case "gi:GiEarthCrack":
            return GiEarthCrack;
        case "gi:GiEarthSpit":
            return GiEarthSpit;
        case "gi:GiEarthWorm":
            return GiEarthWorm;
        case "gi:GiEarwig":
            return GiEarwig;
        case "gi:GiEasel":
            return GiEasel;
        case "gi:GiEasterEgg":
            return GiEasterEgg;
        case "gi:GiEatingPelican":
            return GiEatingPelican;
        case "gi:GiEating":
            return GiEating;
        case "gi:GiEchoRipples":
            return GiEchoRipples;
        case "gi:GiEclipseFlare":
            return GiEclipseFlare;
        case "gi:GiEclipseSaw":
            return GiEclipseSaw;
        case "gi:GiEclipse":
            return GiEclipse;
        case "gi:GiEcology":
            return GiEcology;
        case "gi:GiEdgeCrack":
            return GiEdgeCrack;
        case "gi:GiEdgedShield":
            return GiEdgedShield;
        case "gi:GiEel":
            return GiEel;
        case "gi:GiEggClutch":
            return GiEggClutch;
        case "gi:GiEggDefense":
            return GiEggDefense;
        case "gi:GiEggEye":
            return GiEggEye;
        case "gi:GiEggPod":
            return GiEggPod;
        case "gi:GiEgypt":
            return GiEgypt;
        case "gi:GiEgyptianBird":
            return GiEgyptianBird;
        case "gi:GiEgyptianProfile":
            return GiEgyptianProfile;
        case "gi:GiEgyptianPyramids":
            return GiEgyptianPyramids;
        case "gi:GiEgyptianSphinx":
            return GiEgyptianSphinx;
        case "gi:GiEgyptianTemple":
            return GiEgyptianTemple;
        case "gi:GiEgyptianUrns":
            return GiEgyptianUrns;
        case "gi:GiEgyptianWalk":
            return GiEgyptianWalk;
        case "gi:GiEightBall":
            return GiEightBall;
        case "gi:GiElbowPad":
            return GiElbowPad;
        case "gi:GiElderberry":
            return GiElderberry;
        case "gi:GiElectricWhip":
            return GiElectricWhip;
        case "gi:GiElectric":
            return GiElectric;
        case "gi:GiElectricalCrescent":
            return GiElectricalCrescent;
        case "gi:GiElectricalResistance":
            return GiElectricalResistance;
        case "gi:GiElectricalSocket":
            return GiElectricalSocket;
        case "gi:GiElephantHead":
            return GiElephantHead;
        case "gi:GiElephant":
            return GiElephant;
        case "gi:GiElevator":
            return GiElevator;
        case "gi:GiElfEar":
            return GiElfEar;
        case "gi:GiElfHelmet":
            return GiElfHelmet;
        case "gi:GiElvenCastle":
            return GiElvenCastle;
        case "gi:GiEmberShot":
            return GiEmberShot;
        case "gi:GiEmbrassedEnergy":
            return GiEmbrassedEnergy;
        case "gi:GiEmbryo":
            return GiEmbryo;
        case "gi:GiEmeraldNecklace":
            return GiEmeraldNecklace;
        case "gi:GiEmerald":
            return GiEmerald;
        case "gi:GiEmptyChessboard":
            return GiEmptyChessboard;
        case "gi:GiEmptyHourglass":
            return GiEmptyHourglass;
        case "gi:GiEmptyMetalBucketHandle":
            return GiEmptyMetalBucketHandle;
        case "gi:GiEmptyMetalBucket":
            return GiEmptyMetalBucket;
        case "gi:GiEmptyWoodBucketHandle":
            return GiEmptyWoodBucketHandle;
        case "gi:GiEmptyWoodBucket":
            return GiEmptyWoodBucket;
        case "gi:GiEncirclement":
            return GiEncirclement;
        case "gi:GiEnergise":
            return GiEnergise;
        case "gi:GiEnergyArrow":
            return GiEnergyArrow;
        case "gi:GiEnergyBreath":
            return GiEnergyBreath;
        case "gi:GiEnergyShield":
            return GiEnergyShield;
        case "gi:GiEnergySword":
            return GiEnergySword;
        case "gi:GiEnergyTank":
            return GiEnergyTank;
        case "gi:GiEngagementRing":
            return GiEngagementRing;
        case "gi:GiEnlightenment":
            return GiEnlightenment;
        case "gi:GiEnrage":
            return GiEnrage;
        case "gi:GiEntMouth":
            return GiEntMouth;
        case "gi:GiEntangledTyphoon":
            return GiEntangledTyphoon;
        case "gi:GiEntryDoor":
            return GiEntryDoor;
        case "gi:GiEnvelope":
            return GiEnvelope;
        case "gi:GiErlenmeyer":
            return GiErlenmeyer;
        case "gi:GiErmine":
            return GiErmine;
        case "gi:GiEruption":
            return GiEruption;
        case "gi:GiEscalator":
            return GiEscalator;
        case "gi:GiEskimo":
            return GiEskimo;
        case "gi:GiEternalLove":
            return GiEternalLove;
        case "gi:GiEuropeanFlag":
            return GiEuropeanFlag;
        case "gi:GiEvasion":
            return GiEvasion;
        case "gi:GiEvilBat":
            return GiEvilBat;
        case "gi:GiEvilBook":
            return GiEvilBook;
        case "gi:GiEvilBud":
            return GiEvilBud;
        case "gi:GiEvilComet":
            return GiEvilComet;
        case "gi:GiEvilEyes":
            return GiEvilEyes;
        case "gi:GiEvilFork":
            return GiEvilFork;
        case "gi:GiEvilHand":
            return GiEvilHand;
        case "gi:GiEvilLove":
            return GiEvilLove;
        case "gi:GiEvilMinion":
            return GiEvilMinion;
        case "gi:GiEvilMoon":
            return GiEvilMoon;
        case "gi:GiEvilTower":
            return GiEvilTower;
        case "gi:GiEvilTree":
            return GiEvilTree;
        case "gi:GiEvilWings":
            return GiEvilWings;
        case "gi:GiExecutionerHood":
            return GiExecutionerHood;
        case "gi:GiExitDoor":
            return GiExitDoor;
        case "gi:GiExpand":
            return GiExpand;
        case "gi:GiExpandedRays":
            return GiExpandedRays;
        case "gi:GiExpander":
            return GiExpander;
        case "gi:GiExpense":
            return GiExpense;
        case "gi:GiExplodingPlanet":
            return GiExplodingPlanet;
        case "gi:GiExplosionRays":
            return GiExplosionRays;
        case "gi:GiExplosiveMaterials":
            return GiExplosiveMaterials;
        case "gi:GiExplosiveMeeting":
            return GiExplosiveMeeting;
        case "gi:GiExtraLucid":
            return GiExtraLucid;
        case "gi:GiExtraTime":
            return GiExtraTime;
        case "gi:GiExtractionOrb":
            return GiExtractionOrb;
        case "gi:GiEyeOfHorus":
            return GiEyeOfHorus;
        case "gi:GiEyeShield":
            return GiEyeShield;
        case "gi:GiEyeTarget":
            return GiEyeTarget;
        case "gi:GiEyeball":
            return GiEyeball;
        case "gi:GiEyedropper":
            return GiEyedropper;
        case "gi:GiEyelashes":
            return GiEyelashes;
        case "gi:GiEyepatch":
            return GiEyepatch;
        case "gi:GiEyestalk":
            return GiEyestalk;
        case "gi:GiFClef":
            return GiFClef;
        case "gi:GiF1Car":
            return GiF1Car;
        case "gi:GiFaceToFace":
            return GiFaceToFace;
        case "gi:GiFactoryArm":
            return GiFactoryArm;
        case "gi:GiFactory":
            return GiFactory;
        case "gi:GiFairyWand":
            return GiFairyWand;
        case "gi:GiFairyWings":
            return GiFairyWings;
        case "gi:GiFairy":
            return GiFairy;
        case "gi:GiFalconMoon":
            return GiFalconMoon;
        case "gi:GiFallDown":
            return GiFallDown;
        case "gi:GiFallingBlob":
            return GiFallingBlob;
        case "gi:GiFallingBomb":
            return GiFallingBomb;
        case "gi:GiFallingBoulder":
            return GiFallingBoulder;
        case "gi:GiFallingEye":
            return GiFallingEye;
        case "gi:GiFallingLeaf":
            return GiFallingLeaf;
        case "gi:GiFallingOvoid":
            return GiFallingOvoid;
        case "gi:GiFallingRocks":
            return GiFallingRocks;
        case "gi:GiFallingStar":
            return GiFallingStar;
        case "gi:GiFalling":
            return GiFalling;
        case "gi:GiFalloutShelter":
            return GiFalloutShelter;
        case "gi:GiFamas":
            return GiFamas;
        case "gi:GiFamilyHouse":
            return GiFamilyHouse;
        case "gi:GiFamilyTree":
            return GiFamilyTree;
        case "gi:GiFangedSkull":
            return GiFangedSkull;
        case "gi:GiFangsCircle":
            return GiFangsCircle;
        case "gi:GiFangs":
            return GiFangs;
        case "gi:GiFarmTractor":
            return GiFarmTractor;
        case "gi:GiFarmer":
            return GiFarmer;
        case "gi:GiFastArrow":
            return GiFastArrow;
        case "gi:GiFastBackwardButton":
            return GiFastBackwardButton;
        case "gi:GiFastForwardButton":
            return GiFastForwardButton;
        case "gi:GiFastNoodles":
            return GiFastNoodles;
        case "gi:GiFat":
            return GiFat;
        case "gi:GiFeatherNecklace":
            return GiFeatherNecklace;
        case "gi:GiFeatherWound":
            return GiFeatherWound;
        case "gi:GiFeather":
            return GiFeather;
        case "gi:GiFeatheredWing":
            return GiFeatheredWing;
        case "gi:GiFedora":
            return GiFedora;
        case "gi:GiFeline":
            return GiFeline;
        case "gi:GiFemaleLegs":
            return GiFemaleLegs;
        case "gi:GiFemaleVampire":
            return GiFemaleVampire;
        case "gi:GiFemale":
            return GiFemale;
        case "gi:GiFencer":
            return GiFencer;
        case "gi:GiFern":
            return GiFern;
        case "gi:GiFertilizerBag":
            return GiFertilizerBag;
        case "gi:GiFetus":
            return GiFetus;
        case "gi:GiFez":
            return GiFez;
        case "gi:GiFieldGun":
            return GiFieldGun;
        case "gi:GiField":
            return GiField;
        case "gi:GiFigurehead":
            return GiFigurehead;
        case "gi:GiFiles":
            return GiFiles;
        case "gi:GiFilmProjector":
            return GiFilmProjector;
        case "gi:GiFilmSpool":
            return GiFilmSpool;
        case "gi:GiFilmStrip":
            return GiFilmStrip;
        case "gi:GiFinch":
            return GiFinch;
        case "gi:GiFingerPrint":
            return GiFingerPrint;
        case "gi:GiFingernail":
            return GiFingernail;
        case "gi:GiFingersCrossed":
            return GiFingersCrossed;
        case "gi:GiFinishLine":
            return GiFinishLine;
        case "gi:GiFireAce":
            return GiFireAce;
        case "gi:GiFireAxe":
            return GiFireAxe;
        case "gi:GiFireBomb":
            return GiFireBomb;
        case "gi:GiFireBottle":
            return GiFireBottle;
        case "gi:GiFireBowl":
            return GiFireBowl;
        case "gi:GiFireBreath":
            return GiFireBreath;
        case "gi:GiFireDash":
            return GiFireDash;
        case "gi:GiFireExtinguisher":
            return GiFireExtinguisher;
        case "gi:GiFireFlower":
            return GiFireFlower;
        case "gi:GiFireGem":
            return GiFireGem;
        case "gi:GiFirePunch":
            return GiFirePunch;
        case "gi:GiFireRay":
            return GiFireRay;
        case "gi:GiFireRing":
            return GiFireRing;
        case "gi:GiFireShield":
            return GiFireShield;
        case "gi:GiFireShrine":
            return GiFireShrine;
        case "gi:GiFireSilhouette":
            return GiFireSilhouette;
        case "gi:GiFireSpellCast":
            return GiFireSpellCast;
        case "gi:GiFireTail":
            return GiFireTail;
        case "gi:GiFireWave":
            return GiFireWave;
        case "gi:GiFireZone":
            return GiFireZone;
        case "gi:GiFire":
            return GiFire;
        case "gi:GiFireball":
            return GiFireball;
        case "gi:GiFireflake":
            return GiFireflake;
        case "gi:GiFireplace":
            return GiFireplace;
        case "gi:GiFirewall":
            return GiFirewall;
        case "gi:GiFireworkRocket":
            return GiFireworkRocket;
        case "gi:GiFirstAidKit":
            return GiFirstAidKit;
        case "gi:GiFishBucket":
            return GiFishBucket;
        case "gi:GiFishCooked":
            return GiFishCooked;
        case "gi:GiFishCorpse":
            return GiFishCorpse;
        case "gi:GiFishEggs":
            return GiFishEggs;
        case "gi:GiFishEscape":
            return GiFishEscape;
        case "gi:GiFishMonster":
            return GiFishMonster;
        case "gi:GiFishScales":
            return GiFishScales;
        case "gi:GiFishSmoking":
            return GiFishSmoking;
        case "gi:GiFishbone":
            return GiFishbone;
        case "gi:GiFishhookFork":
            return GiFishhookFork;
        case "gi:GiFishingBoat":
            return GiFishingBoat;
        case "gi:GiFishingHook":
            return GiFishingHook;
        case "gi:GiFishingJig":
            return GiFishingJig;
        case "gi:GiFishingLure":
            return GiFishingLure;
        case "gi:GiFishingNet":
            return GiFishingNet;
        case "gi:GiFishingPole":
            return GiFishingPole;
        case "gi:GiFishingSpoon":
            return GiFishingSpoon;
        case "gi:GiFishing":
            return GiFishing;
        case "gi:GiFission":
            return GiFission;
        case "gi:GiFist":
            return GiFist;
        case "gi:GiFizzingFlask":
            return GiFizzingFlask;
        case "gi:GiFlagObjective":
            return GiFlagObjective;
        case "gi:GiFlail":
            return GiFlail;
        case "gi:GiFlake":
            return GiFlake;
        case "gi:GiFlameClaws":
            return GiFlameClaws;
        case "gi:GiFlameSpin":
            return GiFlameSpin;
        case "gi:GiFlameTunnel":
            return GiFlameTunnel;
        case "gi:GiFlame":
            return GiFlame;
        case "gi:GiFlamedLeaf":
            return GiFlamedLeaf;
        case "gi:GiFlamer":
            return GiFlamer;
        case "gi:GiFlamethrowerSoldier":
            return GiFlamethrowerSoldier;
        case "gi:GiFlamethrower":
            return GiFlamethrower;
        case "gi:GiFlamingArrow":
            return GiFlamingArrow;
        case "gi:GiFlamingClaw":
            return GiFlamingClaw;
        case "gi:GiFlamingSheet":
            return GiFlamingSheet;
        case "gi:GiFlamingTrident":
            return GiFlamingTrident;
        case "gi:GiFlamingo":
            return GiFlamingo;
        case "gi:GiFlangedMace":
            return GiFlangedMace;
        case "gi:GiFlashGrenade":
            return GiFlashGrenade;
        case "gi:GiFlashlight":
            return GiFlashlight;
        case "gi:GiFlatHammer":
            return GiFlatHammer;
        case "gi:GiFlatPawPrint":
            return GiFlatPawPrint;
        case "gi:GiFlatPlatform":
            return GiFlatPlatform;
        case "gi:GiFlatStar":
            return GiFlatStar;
        case "gi:GiFlatTire":
            return GiFlatTire;
        case "gi:GiFlatbedCovered":
            return GiFlatbedCovered;
        case "gi:GiFlatbed":
            return GiFlatbed;
        case "gi:GiFlatfish":
            return GiFlatfish;
        case "gi:GiFlax":
            return GiFlax;
        case "gi:GiFleshyMass":
            return GiFleshyMass;
        case "gi:GiFleurDeLys":
            return GiFleurDeLys;
        case "gi:GiFlexibleLamp":
            return GiFlexibleLamp;
        case "gi:GiFlexibleStar":
            return GiFlexibleStar;
        case "gi:GiFlintSpark":
            return GiFlintSpark;
        case "gi:GiFlipFlops":
            return GiFlipFlops;
        case "gi:GiFloatingCrystal":
            return GiFloatingCrystal;
        case "gi:GiFloatingGhost":
            return GiFloatingGhost;
        case "gi:GiFloatingPlatforms":
            return GiFloatingPlatforms;
        case "gi:GiFloatingTentacles":
            return GiFloatingTentacles;
        case "gi:GiFlood":
            return GiFlood;
        case "gi:GiFloorHatch":
            return GiFloorHatch;
        case "gi:GiFloorPolisher":
            return GiFloorPolisher;
        case "gi:GiFlour":
            return GiFlour;
        case "gi:GiFlowerEmblem":
            return GiFlowerEmblem;
        case "gi:GiFlowerHat":
            return GiFlowerHat;
        case "gi:GiFlowerPot":
            return GiFlowerPot;
        case "gi:GiFlowerStar":
            return GiFlowerStar;
        case "gi:GiFlowerTwirl":
            return GiFlowerTwirl;
        case "gi:GiFlowers":
            return GiFlowers;
        case "gi:GiFluffyCloud":
            return GiFluffyCloud;
        case "gi:GiFluffyFlame":
            return GiFluffyFlame;
        case "gi:GiFluffySwirl":
            return GiFluffySwirl;
        case "gi:GiFluffyTrefoil":
            return GiFluffyTrefoil;
        case "gi:GiFluffyWing":
            return GiFluffyWing;
        case "gi:GiFlute":
            return GiFlute;
        case "gi:GiFly":
            return GiFly;
        case "gi:GiFlyingBeetle":
            return GiFlyingBeetle;
        case "gi:GiFlyingDagger":
            return GiFlyingDagger;
        case "gi:GiFlyingFlag":
            return GiFlyingFlag;
        case "gi:GiFlyingFox":
            return GiFlyingFox;
        case "gi:GiFlyingShuriken":
            return GiFlyingShuriken;
        case "gi:GiFlyingTarget":
            return GiFlyingTarget;
        case "gi:GiFlyingTrout":
            return GiFlyingTrout;
        case "gi:GiFnFal":
            return GiFnFal;
        case "gi:GiFoam":
            return GiFoam;
        case "gi:GiFoamyDisc":
            return GiFoamyDisc;
        case "gi:GiFocusedLightning":
            return GiFocusedLightning;
        case "gi:GiFogLight":
            return GiFogLight;
        case "gi:GiFog":
            return GiFog;
        case "gi:GiFoldedPaper":
            return GiFoldedPaper;
        case "gi:GiFomorian":
            return GiFomorian;
        case "gi:GiFoodChain":
            return GiFoodChain;
        case "gi:GiFoodTruck":
            return GiFoodTruck;
        case "gi:GiFootPlaster":
            return GiFootPlaster;
        case "gi:GiFootTrip":
            return GiFootTrip;
        case "gi:GiFootprint":
            return GiFootprint;
        case "gi:GiFootsteps":
            return GiFootsteps;
        case "gi:GiFootyField":
            return GiFootyField;
        case "gi:GiForearm":
            return GiForearm;
        case "gi:GiForestCamp":
            return GiForestCamp;
        case "gi:GiForestEntrance":
            return GiForestEntrance;
        case "gi:GiForest":
            return GiForest;
        case "gi:GiForkKnifeSpoon":
            return GiForkKnifeSpoon;
        case "gi:GiForklift":
            return GiForklift;
        case "gi:GiForwardField":
            return GiForwardField;
        case "gi:GiForwardSun":
            return GiForwardSun;
        case "gi:GiFossil":
            return GiFossil;
        case "gi:GiFoundryBucket":
            return GiFoundryBucket;
        case "gi:GiFountainPen":
            return GiFountainPen;
        case "gi:GiFountain":
            return GiFountain;
        case "gi:GiFoxHead":
            return GiFoxHead;
        case "gi:GiFoxTail":
            return GiFoxTail;
        case "gi:GiFox":
            return GiFox;
        case "gi:GiFragmentedMeteor":
            return GiFragmentedMeteor;
        case "gi:GiFragmentedSword":
            return GiFragmentedSword;
        case "gi:GiFragrance":
            return GiFragrance;
        case "gi:GiFrance":
            return GiFrance;
        case "gi:GiFrankensteinCreature":
            return GiFrankensteinCreature;
        case "gi:GiFrayedArrow":
            return GiFrayedArrow;
        case "gi:GiFreedomDove":
            return GiFreedomDove;
        case "gi:GiFreemasonry":
            return GiFreemasonry;
        case "gi:GiFrenchFries":
            return GiFrenchFries;
        case "gi:GiFrenchHorn":
            return GiFrenchHorn;
        case "gi:GiFriedEggs":
            return GiFriedEggs;
        case "gi:GiFriedFish":
            return GiFriedFish;
        case "gi:GiFrisbee":
            return GiFrisbee;
        case "gi:GiFroeAndMallet":
            return GiFroeAndMallet;
        case "gi:GiFrogFoot":
            return GiFrogFoot;
        case "gi:GiFrogPrince":
            return GiFrogPrince;
        case "gi:GiFrog":
            return GiFrog;
        case "gi:GiFrontTeeth":
            return GiFrontTeeth;
        case "gi:GiFrontalLobe":
            return GiFrontalLobe;
        case "gi:GiFrostfire":
            return GiFrostfire;
        case "gi:GiFrozenArrow":
            return GiFrozenArrow;
        case "gi:GiFrozenBlock":
            return GiFrozenBlock;
        case "gi:GiFrozenBody":
            return GiFrozenBody;
        case "gi:GiFrozenOrb":
            return GiFrozenOrb;
        case "gi:GiFrozenRing":
            return GiFrozenRing;
        case "gi:GiFruitBowl":
            return GiFruitBowl;
        case "gi:GiFruitTree":
            return GiFruitTree;
        case "gi:GiFruiting":
            return GiFruiting;
        case "gi:GiFuelTank":
            return GiFuelTank;
        case "gi:GiFuji":
            return GiFuji;
        case "gi:GiFulguroPunch":
            return GiFulguroPunch;
        case "gi:GiFullFolder":
            return GiFullFolder;
        case "gi:GiFullMetalBucketHandle":
            return GiFullMetalBucketHandle;
        case "gi:GiFullMetalBucket":
            return GiFullMetalBucket;
        case "gi:GiFullMotorcycleHelmet":
            return GiFullMotorcycleHelmet;
        case "gi:GiFullPizza":
            return GiFullPizza;
        case "gi:GiFullWoodBucketHandle":
            return GiFullWoodBucketHandle;
        case "gi:GiFullWoodBucket":
            return GiFullWoodBucket;
        case "gi:GiFunnel":
            return GiFunnel;
        case "gi:GiFurBoot":
            return GiFurBoot;
        case "gi:GiFurShirt":
            return GiFurShirt;
        case "gi:GiFurnace":
            return GiFurnace;
        case "gi:GiGClef":
            return GiGClef;
        case "gi:GiGalaxy":
            return GiGalaxy;
        case "gi:GiGalea":
            return GiGalea;
        case "gi:GiGalleon":
            return GiGalleon;
        case "gi:GiGalley":
            return GiGalley;
        case "gi:GiGameConsole":
            return GiGameConsole;
        case "gi:GiGamepadCross":
            return GiGamepadCross;
        case "gi:GiGamepad":
            return GiGamepad;
        case "gi:GiGardeningShears":
            return GiGardeningShears;
        case "gi:GiGargoyle":
            return GiGargoyle;
        case "gi:GiGarlic":
            return GiGarlic;
        case "gi:GiGasMask":
            return GiGasMask;
        case "gi:GiGasPump":
            return GiGasPump;
        case "gi:GiGasStove":
            return GiGasStove;
        case "gi:GiGate":
            return GiGate;
        case "gi:GiGaulsHelm":
            return GiGaulsHelm;
        case "gi:GiGauntlet":
            return GiGauntlet;
        case "gi:GiGavel":
            return GiGavel;
        case "gi:GiGaze":
            return GiGaze;
        case "gi:GiGearHammer":
            return GiGearHammer;
        case "gi:GiGearStickPattern":
            return GiGearStickPattern;
        case "gi:GiGearStick":
            return GiGearStick;
        case "gi:GiGears":
            return GiGears;
        case "gi:GiGecko":
            return GiGecko;
        case "gi:GiGemChain":
            return GiGemChain;
        case "gi:GiGemNecklace":
            return GiGemNecklace;
        case "gi:GiGemPendant":
            return GiGemPendant;
        case "gi:GiGemini":
            return GiGemini;
        case "gi:GiGems":
            return GiGems;
        case "gi:GiGhostAlly":
            return GiGhostAlly;
        case "gi:GiGhost":
            return GiGhost;
        case "gi:GiGiantSquid":
            return GiGiantSquid;
        case "gi:GiGiant":
            return GiGiant;
        case "gi:GiGibbet":
            return GiGibbet;
        case "gi:GiGiftOfKnowledge":
            return GiGiftOfKnowledge;
        case "gi:GiGiftTrap":
            return GiGiftTrap;
        case "gi:GiGingerbreadMan":
            return GiGingerbreadMan;
        case "gi:GiGinkgoLeaf":
            return GiGinkgoLeaf;
        case "gi:GiGladius":
            return GiGladius;
        case "gi:GiGlaive":
            return GiGlaive;
        case "gi:GiGlassBall":
            return GiGlassBall;
        case "gi:GiGlassCelebration":
            return GiGlassCelebration;
        case "gi:GiGlassHeart":
            return GiGlassHeart;
        case "gi:GiGlassShot":
            return GiGlassShot;
        case "gi:GiGlider":
            return GiGlider;
        case "gi:GiGlobeRing":
            return GiGlobeRing;
        case "gi:GiGlobe":
            return GiGlobe;
        case "gi:GiGlock":
            return GiGlock;
        case "gi:GiGloop":
            return GiGloop;
        case "gi:GiGloves":
            return GiGloves;
        case "gi:GiGlowingArtifact":
            return GiGlowingArtifact;
        case "gi:GiGlowingHands":
            return GiGlowingHands;
        case "gi:GiGluttonousSmile":
            return GiGluttonousSmile;
        case "gi:GiGluttony":
            return GiGluttony;
        case "gi:GiGoalKeeper":
            return GiGoalKeeper;
        case "gi:GiGoat":
            return GiGoat;
        case "gi:GiGoblinCamp":
            return GiGoblinCamp;
        case "gi:GiGoblinHead":
            return GiGoblinHead;
        case "gi:GiGoldBar":
            return GiGoldBar;
        case "gi:GiGoldMine":
            return GiGoldMine;
        case "gi:GiGoldNuggets":
            return GiGoldNuggets;
        case "gi:GiGoldScarab":
            return GiGoldScarab;
        case "gi:GiGoldShell":
            return GiGoldShell;
        case "gi:GiGoldStack":
            return GiGoldStack;
        case "gi:GiGolemHead":
            return GiGolemHead;
        case "gi:GiGolfFlag":
            return GiGolfFlag;
        case "gi:GiGolfTee":
            return GiGolfTee;
        case "gi:GiGong":
            return GiGong;
        case "gi:GiGooExplosion":
            return GiGooExplosion;
        case "gi:GiGooSkull":
            return GiGooSkull;
        case "gi:GiGooSpurt":
            return GiGooSpurt;
        case "gi:GiGooeyDaemon":
            return GiGooeyDaemon;
        case "gi:GiGooeyEyedSun":
            return GiGooeyEyedSun;
        case "gi:GiGooeyImpact":
            return GiGooeyImpact;
        case "gi:GiGooeyMolecule":
            return GiGooeyMolecule;
        case "gi:GiGooeySword":
            return GiGooeySword;
        case "gi:GiGoose":
            return GiGoose;
        case "gi:GiGorilla":
            return GiGorilla;
        case "gi:GiGothicCross":
            return GiGothicCross;
        case "gi:GiGps":
            return GiGps;
        case "gi:GiGrab":
            return GiGrab;
        case "gi:GiGraduateCap":
            return GiGraduateCap;
        case "gi:GiGrainBundle":
            return GiGrainBundle;
        case "gi:GiGrain":
            return GiGrain;
        case "gi:GiGranary":
            return GiGranary;
        case "gi:GiGrandPiano":
            return GiGrandPiano;
        case "gi:GiGrapes":
            return GiGrapes;
        case "gi:GiGrapple":
            return GiGrapple;
        case "gi:GiGraspingClaws":
            return GiGraspingClaws;
        case "gi:GiGraspingSlug":
            return GiGraspingSlug;
        case "gi:GiGrassMushroom":
            return GiGrassMushroom;
        case "gi:GiGrass":
            return GiGrass;
        case "gi:GiGraveFlowers":
            return GiGraveFlowers;
        case "gi:GiGraveyard":
            return GiGraveyard;
        case "gi:GiGreaseTrap":
            return GiGreaseTrap;
        case "gi:GiGreatPyramid":
            return GiGreatPyramid;
        case "gi:GiGreatWarTank":
            return GiGreatWarTank;
        case "gi:GiGreaves":
            return GiGreaves;
        case "gi:GiGreekSphinx":
            return GiGreekSphinx;
        case "gi:GiGreekTemple":
            return GiGreekTemple;
        case "gi:GiGreenPower":
            return GiGreenPower;
        case "gi:GiGreenhouse":
            return GiGreenhouse;
        case "gi:GiGrenade":
            return GiGrenade;
        case "gi:GiGriffinShield":
            return GiGriffinShield;
        case "gi:GiGriffinSymbol":
            return GiGriffinSymbol;
        case "gi:GiGrimReaper":
            return GiGrimReaper;
        case "gi:GiGroundSprout":
            return GiGroundSprout;
        case "gi:GiGroundbreaker":
            return GiGroundbreaker;
        case "gi:GiGroupedDrops":
            return GiGroupedDrops;
        case "gi:GiGrowth":
            return GiGrowth;
        case "gi:GiGuardedTower":
            return GiGuardedTower;
        case "gi:GiGuards":
            return GiGuards;
        case "gi:GiGuatemala":
            return GiGuatemala;
        case "gi:GiGuillotine":
            return GiGuillotine;
        case "gi:GiGuitarBassHead":
            return GiGuitarBassHead;
        case "gi:GiGuitarHead":
            return GiGuitarHead;
        case "gi:GiGuitar":
            return GiGuitar;
        case "gi:GiGunRose":
            return GiGunRose;
        case "gi:GiGunStock":
            return GiGunStock;
        case "gi:GiGunshot":
            return GiGunshot;
        case "gi:GiGymBag":
            return GiGymBag;
        case "gi:GiH2O":
            return GiH2O;
        case "gi:GiHabitatDome":
            return GiHabitatDome;
        case "gi:GiHadesSymbol":
            return GiHadesSymbol;
        case "gi:GiHairStrands":
            return GiHairStrands;
        case "gi:GiHalberdShuriken":
            return GiHalberdShuriken;
        case "gi:GiHalberd":
            return GiHalberd;
        case "gi:GiHalfBodyCrawling":
            return GiHalfBodyCrawling;
        case "gi:GiHalfDead":
            return GiHalfDead;
        case "gi:GiHalfHeart":
            return GiHalfHeart;
        case "gi:GiHalfLog":
            return GiHalfLog;
        case "gi:GiHalfTornado":
            return GiHalfTornado;
        case "gi:GiHalt":
            return GiHalt;
        case "gi:GiHamShank":
            return GiHamShank;
        case "gi:GiHamburgerMenu":
            return GiHamburgerMenu;
        case "gi:GiHamburger":
            return GiHamburger;
        case "gi:GiHammerBreak":
            return GiHammerBreak;
        case "gi:GiHammerDrop":
            return GiHammerDrop;
        case "gi:GiHammerNails":
            return GiHammerNails;
        case "gi:GiHammerSickle":
            return GiHammerSickle;
        case "gi:GiHandBag":
            return GiHandBag;
        case "gi:GiHandBandage":
            return GiHandBandage;
        case "gi:GiHandGrip":
            return GiHandGrip;
        case "gi:GiHandOfGod":
            return GiHandOfGod;
        case "gi:GiHandOk":
            return GiHandOk;
        case "gi:GiHandSaw":
            return GiHandSaw;
        case "gi:GiHandTruck":
            return GiHandTruck;
        case "gi:GiHandWing":
            return GiHandWing;
        case "gi:GiHand":
            return GiHand;
        case "gi:GiHandcuffed":
            return GiHandcuffed;
        case "gi:GiHandcuffs":
            return GiHandcuffs;
        case "gi:GiHandheldFan":
            return GiHandheldFan;
        case "gi:GiHangGlider":
            return GiHangGlider;
        case "gi:GiHanger":
            return GiHanger;
        case "gi:GiHangingSign":
            return GiHangingSign;
        case "gi:GiHangingSpider":
            return GiHangingSpider;
        case "gi:GiHappySkull":
            return GiHappySkull;
        case "gi:GiHarborDock":
            return GiHarborDock;
        case "gi:GiHarp":
            return GiHarp;
        case "gi:GiHarpoonChain":
            return GiHarpoonChain;
        case "gi:GiHarpoonTrident":
            return GiHarpoonTrident;
        case "gi:GiHarpy":
            return GiHarpy;
        case "gi:GiHarryPotterSkull":
            return GiHarryPotterSkull;
        case "gi:GiHastyGrave":
            return GiHastyGrave;
        case "gi:GiHatchet":
            return GiHatchet;
        case "gi:GiHatchets":
            return GiHatchets;
        case "gi:GiHaunting":
            return GiHaunting;
        case "gi:GiHawkEmblem":
            return GiHawkEmblem;
        case "gi:GiHazardSign":
            return GiHazardSign;
        case "gi:GiHazmatSuit":
            return GiHazmatSuit;
        case "gi:GiHeadShot":
            return GiHeadShot;
        case "gi:GiHeadbandKnot":
            return GiHeadbandKnot;
        case "gi:GiHeadphones":
            return GiHeadphones;
        case "gi:GiHeadshot":
            return GiHeadshot;
        case "gi:GiHealingShield":
            return GiHealingShield;
        case "gi:GiHealing":
            return GiHealing;
        case "gi:GiHealthCapsule":
            return GiHealthCapsule;
        case "gi:GiHealthDecrease":
            return GiHealthDecrease;
        case "gi:GiHealthIncrease":
            return GiHealthIncrease;
        case "gi:GiHealthNormal":
            return GiHealthNormal;
        case "gi:GiHealthPotion":
            return GiHealthPotion;
        case "gi:GiHearingDisabled":
            return GiHearingDisabled;
        case "gi:GiHeartArmor":
            return GiHeartArmor;
        case "gi:GiHeartBattery":
            return GiHeartBattery;
        case "gi:GiHeartBeats":
            return GiHeartBeats;
        case "gi:GiHeartBottle":
            return GiHeartBottle;
        case "gi:GiHeartDrop":
            return GiHeartDrop;
        case "gi:GiHeartEarrings":
            return GiHeartEarrings;
        case "gi:GiHeartInside":
            return GiHeartInside;
        case "gi:GiHeartKey":
            return GiHeartKey;
        case "gi:GiHeartMinus":
            return GiHeartMinus;
        case "gi:GiHeartNecklace":
            return GiHeartNecklace;
        case "gi:GiHeartOrgan":
            return GiHeartOrgan;
        case "gi:GiHeartPlus":
            return GiHeartPlus;
        case "gi:GiHeartShield":
            return GiHeartShield;
        case "gi:GiHeartStake":
            return GiHeartStake;
        case "gi:GiHeartTower":
            return GiHeartTower;
        case "gi:GiHeartWings":
            return GiHeartWings;
        case "gi:GiHeartburn":
            return GiHeartburn;
        case "gi:GiHearts":
            return GiHearts;
        case "gi:GiHeatHaze":
            return GiHeatHaze;
        case "gi:GiHeavenGate":
            return GiHeavenGate;
        case "gi:GiHeavyArrow":
            return GiHeavyArrow;
        case "gi:GiHeavyBullets":
            return GiHeavyBullets;
        case "gi:GiHeavyCollar":
            return GiHeavyCollar;
        case "gi:GiHeavyFall":
            return GiHeavyFall;
        case "gi:GiHeavyFighter":
            return GiHeavyFighter;
        case "gi:GiHeavyHelm":
            return GiHeavyHelm;
        case "gi:GiHeavyLightning":
            return GiHeavyLightning;
        case "gi:GiHeavyRain":
            return GiHeavyRain;
        case "gi:GiHeavyThornyTriskelion":
            return GiHeavyThornyTriskelion;
        case "gi:GiHeavyTimer":
            return GiHeavyTimer;
        case "gi:GiHedgehog":
            return GiHedgehog;
        case "gi:GiHedjetWhiteCrown":
            return GiHedjetWhiteCrown;
        case "gi:GiHelicoprion":
            return GiHelicoprion;
        case "gi:GiHelicopterTail":
            return GiHelicopterTail;
        case "gi:GiHelicopter":
            return GiHelicopter;
        case "gi:GiHellCrosses":
            return GiHellCrosses;
        case "gi:GiHelmetHeadShot":
            return GiHelmetHeadShot;
        case "gi:GiHelmet":
            return GiHelmet;
        case "gi:GiHelp":
            return GiHelp;
        case "gi:GiHemp":
            return GiHemp;
        case "gi:GiHeptagram":
            return GiHeptagram;
        case "gi:GiHeraldicSun":
            return GiHeraldicSun;
        case "gi:GiHerbsBundle":
            return GiHerbsBundle;
        case "gi:GiHeron":
            return GiHeron;
        case "gi:GiHexagonalNut":
            return GiHexagonalNut;
        case "gi:GiHexes":
            return GiHexes;
        case "gi:GiHidden":
            return GiHidden;
        case "gi:GiHieroglyphLegs":
            return GiHieroglyphLegs;
        case "gi:GiHieroglyphY":
            return GiHieroglyphY;
        case "gi:GiHighFive":
            return GiHighFive;
        case "gi:GiHighGrass":
            return GiHighGrass;
        case "gi:GiHighHeel":
            return GiHighHeel;
        case "gi:GiHighKick":
            return GiHighKick;
        case "gi:GiHighPunch":
            return GiHighPunch;
        case "gi:GiHighShot":
            return GiHighShot;
        case "gi:GiHighTide":
            return GiHighTide;
        case "gi:GiHighlighter":
            return GiHighlighter;
        case "gi:GiHiking":
            return GiHiking;
        case "gi:GiHillConquest":
            return GiHillConquest;
        case "gi:GiHillFort":
            return GiHillFort;
        case "gi:GiHills":
            return GiHills;
        case "gi:GiHistogram":
            return GiHistogram;
        case "gi:GiHiveMind":
            return GiHiveMind;
        case "gi:GiHive":
            return GiHive;
        case "gi:GiHobbitDoor":
            return GiHobbitDoor;
        case "gi:GiHobbitDwelling":
            return GiHobbitDwelling;
        case "gi:GiHockey":
            return GiHockey;
        case "gi:GiHoleLadder":
            return GiHoleLadder;
        case "gi:GiHole":
            return GiHole;
        case "gi:GiHollowCat":
            return GiHollowCat;
        case "gi:GiHolosphere":
            return GiHolosphere;
        case "gi:GiHolyGrail":
            return GiHolyGrail;
        case "gi:GiHolyHandGrenade":
            return GiHolyHandGrenade;
        case "gi:GiHolyOak":
            return GiHolyOak;
        case "gi:GiHolySymbol":
            return GiHolySymbol;
        case "gi:GiHolyWater":
            return GiHolyWater;
        case "gi:GiHomeGarage":
            return GiHomeGarage;
        case "gi:GiHoneyJar":
            return GiHoneyJar;
        case "gi:GiHoneycomb":
            return GiHoneycomb;
        case "gi:GiHoneypot":
            return GiHoneypot;
        case "gi:GiHood":
            return GiHood;
        case "gi:GiHoodedAssassin":
            return GiHoodedAssassin;
        case "gi:GiHoodedFigure":
            return GiHoodedFigure;
        case "gi:GiHoodie":
            return GiHoodie;
        case "gi:GiHoof":
            return GiHoof;
        case "gi:GiHook":
            return GiHook;
        case "gi:GiHops":
            return GiHops;
        case "gi:GiHorizonRoad":
            return GiHorizonRoad;
        case "gi:GiHorizontalFlip":
            return GiHorizontalFlip;
        case "gi:GiHornInternal":
            return GiHornInternal;
        case "gi:GiHornedHelm":
            return GiHornedHelm;
        case "gi:GiHornedReptile":
            return GiHornedReptile;
        case "gi:GiHornedSkull":
            return GiHornedSkull;
        case "gi:GiHorseHead":
            return GiHorseHead;
        case "gi:GiHorseshoe":
            return GiHorseshoe;
        case "gi:GiHorus":
            return GiHorus;
        case "gi:GiHospitalCross":
            return GiHospitalCross;
        case "gi:GiHospital":
            return GiHospital;
        case "gi:GiHotDog":
            return GiHotDog;
        case "gi:GiHotMeal":
            return GiHotMeal;
        case "gi:GiHotSpices":
            return GiHotSpices;
        case "gi:GiHotSurface":
            return GiHotSurface;
        case "gi:GiHound":
            return GiHound;
        case "gi:GiHourglass":
            return GiHourglass;
        case "gi:GiHouseKeys":
            return GiHouseKeys;
        case "gi:GiHouse":
            return GiHouse;
        case "gi:GiHumanCannonball":
            return GiHumanCannonball;
        case "gi:GiHumanEar":
            return GiHumanEar;
        case "gi:GiHumanPyramid":
            return GiHumanPyramid;
        case "gi:GiHumanTarget":
            return GiHumanTarget;
        case "gi:GiHummingbird":
            return GiHummingbird;
        case "gi:GiHungary":
            return GiHungary;
        case "gi:GiHunterEyes":
            return GiHunterEyes;
        case "gi:GiHuntingBolas":
            return GiHuntingBolas;
        case "gi:GiHuntingHorn":
            return GiHuntingHorn;
        case "gi:GiHut":
            return GiHut;
        case "gi:GiHutsVillage":
            return GiHutsVillage;
        case "gi:GiHydraShot":
            return GiHydraShot;
        case "gi:GiHydra":
            return GiHydra;
        case "gi:GiHyenaHead":
            return GiHyenaHead;
        case "gi:GiHypersonicBolt":
            return GiHypersonicBolt;
        case "gi:GiHypersonicMelon":
            return GiHypersonicMelon;
        case "gi:GiHypodermicTest":
            return GiHypodermicTest;
        case "gi:GiIBeam":
            return GiIBeam;
        case "gi:GiIBrick":
            return GiIBrick;
        case "gi:GiIbis":
            return GiIbis;
        case "gi:GiIcarus":
            return GiIcarus;
        case "gi:GiIceBolt":
            return GiIceBolt;
        case "gi:GiIceBomb":
            return GiIceBomb;
        case "gi:GiIceCreamCone":
            return GiIceCreamCone;
        case "gi:GiIceCreamScoop":
            return GiIceCreamScoop;
        case "gi:GiIceCube":
            return GiIceCube;
        case "gi:GiIceCubes":
            return GiIceCubes;
        case "gi:GiIceGolem":
            return GiIceGolem;
        case "gi:GiIceIris":
            return GiIceIris;
        case "gi:GiIcePop":
            return GiIcePop;
        case "gi:GiIceShield":
            return GiIceShield;
        case "gi:GiIceSkate":
            return GiIceSkate;
        case "gi:GiIceSpear":
            return GiIceSpear;
        case "gi:GiIceSpellCast":
            return GiIceSpellCast;
        case "gi:GiIceberg":
            return GiIceberg;
        case "gi:GiIcebergs":
            return GiIcebergs;
        case "gi:GiIceland":
            return GiIceland;
        case "gi:GiIciclesAura":
            return GiIciclesAura;
        case "gi:GiIciclesFence":
            return GiIciclesFence;
        case "gi:GiIdCard":
            return GiIdCard;
        case "gi:GiIdea":
            return GiIdea;
        case "gi:GiIfrit":
            return GiIfrit;
        case "gi:GiIgloo":
            return GiIgloo;
        case "gi:GiImbricatedArrows":
            return GiImbricatedArrows;
        case "gi:GiImpLaugh":
            return GiImpLaugh;
        case "gi:GiImp":
            return GiImp;
        case "gi:GiImpactPoint":
            return GiImpactPoint;
        case "gi:GiImperialCrown":
            return GiImperialCrown;
        case "gi:GiImplosion":
            return GiImplosion;
        case "gi:GiImprisoned":
            return GiImprisoned;
        case "gi:GiInauguration":
            return GiInauguration;
        case "gi:GiIncense":
            return GiIncense;
        case "gi:GiIncisors":
            return GiIncisors;
        case "gi:GiIncomingRocket":
            return GiIncomingRocket;
        case "gi:GiIncubator":
            return GiIncubator;
        case "gi:GiIndiaGate":
            return GiIndiaGate;
        case "gi:GiIndianPalace":
            return GiIndianPalace;
        case "gi:GiInfernoBomb":
            return GiInfernoBomb;
        case "gi:GiInfestedMass":
            return GiInfestedMass;
        case "gi:GiInfinity":
            return GiInfinity;
        case "gi:GiInfo":
            return GiInfo;
        case "gi:GiInjustice":
            return GiInjustice;
        case "gi:GiInkSwirl":
            return GiInkSwirl;
        case "gi:GiInnerSelf":
            return GiInnerSelf;
        case "gi:GiInsectJaws":
            return GiInsectJaws;
        case "gi:GiInspiration":
            return GiInspiration;
        case "gi:GiInterceptorShip":
            return GiInterceptorShip;
        case "gi:GiInterdiction":
            return GiInterdiction;
        case "gi:GiInterlacedTentacles":
            return GiInterlacedTentacles;
        case "gi:GiInterleavedArrows":
            return GiInterleavedArrows;
        case "gi:GiInterleavedClaws":
            return GiInterleavedClaws;
        case "gi:GiInternalInjury":
            return GiInternalInjury;
        case "gi:GiInternalOrgan":
            return GiInternalOrgan;
        case "gi:GiInterstellarPath":
            return GiInterstellarPath;
        case "gi:GiIntricateNecklace":
            return GiIntricateNecklace;
        case "gi:GiInvertedDice1":
            return GiInvertedDice1;
        case "gi:GiInvertedDice2":
            return GiInvertedDice2;
        case "gi:GiInvertedDice3":
            return GiInvertedDice3;
        case "gi:GiInvertedDice4":
            return GiInvertedDice4;
        case "gi:GiInvertedDice5":
            return GiInvertedDice5;
        case "gi:GiInvertedDice6":
            return GiInvertedDice6;
        case "gi:GiInvisibleFace":
            return GiInvisibleFace;
        case "gi:GiInvisible":
            return GiInvisible;
        case "gi:GiIonCannonBlast":
            return GiIonCannonBlast;
        case "gi:GiIonicColumn":
            return GiIonicColumn;
        case "gi:GiIraq":
            return GiIraq;
        case "gi:GiIronCross":
            return GiIronCross;
        case "gi:GiIronHulledWarship":
            return GiIronHulledWarship;
        case "gi:GiIronMask":
            return GiIronMask;
        case "gi:GiIsland":
            return GiIsland;
    }
}
