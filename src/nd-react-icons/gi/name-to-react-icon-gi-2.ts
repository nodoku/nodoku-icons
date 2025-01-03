import type {IconType} from "react-icons";

import {
    GiItalia,
    GiIvoryTusks,
    GiJBrick,
    GiJackPlug,
    GiJamesBondAperture,
    GiJapan,
    GiJapaneseBridge,
    GiJasmine,
    GiJasonMask,
    GiJawbone,
    GiJawlessCyclop,
    GiJeep,
    GiJellyBeans,
    GiJelly,
    GiJellyfish,
    GiJerrycan,
    GiJerusalemCross,
    GiJesterHat,
    GiJetFighter,
    GiJetPack,
    GiJetpack,
    GiJewelCrown,
    GiJeweledChalice,
    GiJigsawBox,
    GiJigsawPiece,
    GiJoin,
    GiJoint,
    GiJourney,
    GiJoystick,
    GiJug,
    GiJuggler,
    GiJugglingClubs,
    GiJugglingSeal,
    GiJumpAcross,
    GiJumpingDog,
    GiJumpingRope,
    GiJungle,
    GiJupiter,
    GiJusticeStar,
    GiKaleidoscopePearls,
    GiKangaroo,
    GiKatana,
    GiKebabSpit,
    GiKenkuHead,
    GiKenya,
    GiKetchup,
    GiKevlarVest,
    GiKevlar,
    GiKeyCard,
    GiKeyLock,
    GiKey,
    GiKeyboard,
    GiKeyring,
    GiKickScooter,
    GiKidSlide,
    GiKidneys,
    GiKimono,
    GiKindle,
    GiKingJuMask,
    GiKing,
    GiKitchenKnives,
    GiKitchenScale,
    GiKitchenTap,
    GiKite,
    GiKiwiBird,
    GiKiwiFruit,
    GiKlingon,
    GiKnapsack,
    GiKneeBandage,
    GiKneeCap,
    GiKneePad,
    GiKneeling,
    GiKnifeFork,
    GiKnifeThrust,
    GiKnightBanner,
    GiKnockedOutStars,
    GiKnockout,
    GiKnot,
    GiKoala,
    GiKoholintEgg,
    GiKrakenTentacle,
    GiKusarigama,
    GiLBrick,
    GiLabCoat,
    GiLabradorHead,
    GiLadder,
    GiLaddersPlatform,
    GiLadle,
    GiLadybug,
    GiLamellar,
    GiLampreyMouth,
    GiLandMine,
    GiLanternFlame,
    GiLantern,
    GiLaptop,
    GiLargeDress,
    GiLargePaintBrush,
    GiLargeWound,
    GiLaserBlast,
    GiLaserBurst,
    GiLaserGun,
    GiLaserPrecision,
    GiLaserSparks,
    GiLaserTurret,
    GiLaserWarning,
    GiLaserburn,
    GiLasso,
    GiLatvia,
    GiLaurelCrown,
    GiLaurelsTrophy,
    GiLaurels,
    GiLava,
    GiLawStar,
    GiLayeredArmor,
    GiLeadPipe,
    GiLeafSkeleton,
    GiLeafSwirl,
    GiLeak,
    GiLeakySkull,
    GiLeapfrog,
    GiLeatherArmor,
    GiLeatherBoot,
    GiLeatherVest,
    GiLed,
    GiLeeEnfield,
    GiLeechingWorm,
    GiLeek,
    GiLegArmor,
    GiLeg,
    GiLemon,
    GiLeo,
    GiLetterBomb,
    GiLevelCrossing,
    GiLevelEndFlag,
    GiLevelFourAdvanced,
    GiLevelFour,
    GiLevelThreeAdvanced,
    GiLevelThree,
    GiLevelTwoAdvanced,
    GiLevelTwo,
    GiLever,
    GiLiar,
    GiLibertyWing,
    GiLibra,
    GiLibya,
    GiLifeBar,
    GiLifeBuoy,
    GiLifeInTheBalance,
    GiLifeJacket,
    GiLifeSupport,
    GiLifeTap,
    GiLift,
    GiLightBackpack,
    GiLightBulb,
    GiLightFighter,
    GiLightHelm,
    GiLightProjector,
    GiLightSabers,
    GiLightThornyTriskelion,
    GiLighter,
    GiLighthouse,
    GiLightningArc,
    GiLightningBow,
    GiLightningBranches,
    GiLightningDissipation,
    GiLightningDome,
    GiLightningElectron,
    GiLightningFlame,
    GiLightningFrequency,
    GiLightningHelix,
    GiLightningMask,
    GiLightningSaber,
    GiLightningShadow,
    GiLightningShield,
    GiLightningShout,
    GiLightningSlashes,
    GiLightningSpanner,
    GiLightningStorm,
    GiLightningTear,
    GiLightningTree,
    GiLightningTrio,
    GiLilyPads,
    GiLindenLeaf,
    GiLinkedRings,
    GiLion,
    GiLips,
    GiLipstick,
    GiLiquidSoap,
    GiLitCandelabra,
    GiLiver,
    GiLizardTongue,
    GiLizardman,
    GiLoad,
    GiLobArrow,
    GiLockPicking,
    GiLockSpy,
    GiLockedBox,
    GiLockedChest,
    GiLockedDoor,
    GiLockedFortress,
    GiLockedHeart,
    GiLockers,
    GiLockpicks,
    GiLog,
    GiLogging,
    GiLogicGateAnd,
    GiLogicGateNand,
    GiLogicGateNor,
    GiLogicGateNot,
    GiLogicGateNxor,
    GiLogicGateOr,
    GiLogicGateXor,
    GiLoincloth,
    GiLongAntennaeBug,
    GiLongLeggedSpider,
    GiLookAt,
    GiLorgnette,
    GiLostLimb,
    GiLotusFlower,
    GiLotus,
    GiLouvrePyramid,
    GiLoveHowl,
    GiLoveInjection,
    GiLoveLetter,
    GiLoveMystery,
    GiLoveSong,
    GiLovers,
    GiLowTide,
    GiLuchador,
    GiLuciferCannon,
    GiLuckyFisherman,
    GiLuger,
    GiLunarModule,
    GiLunarWand,
    GiLungs,
    GiLynxHead,
    GiLyre,
    GiM3GreaseGun,
    GiMac10,
    GiMaceHead,
    GiMachete,
    GiMachineGunMagazine,
    GiMachineGun,
    GiMadScientist,
    GiMaggot,
    GiMagicAxe,
    GiMagicBroom,
    GiMagicGate,
    GiMagicHat,
    GiMagicLamp,
    GiMagicPalm,
    GiMagicPortal,
    GiMagicPotion,
    GiMagicShield,
    GiMagicSwirl,
    GiMagicTrident,
    GiMagickTrick,
    GiMagnetBlast,
    GiMagnetMan,
    GiMagnet,
    GiMagnifyingGlass,
    GiMailShirt,
    GiMailbox,
    GiMailedFist,
    GiMale,
    GiMammoth,
    GiManacles,
    GiMandrillHead,
    GiMantaRay,
    GiMantrap,
    GiManualJuicer,
    GiManualMeatGrinder,
    GiMapleLeaf,
    GiMaracas,
    GiMarbleTap,
    GiMarbles,
    GiMarrowDrain,
    GiMarsCuriosity,
    GiMarsPathfinder,
    GiMarshmallows,
    GiMartini,
    GiMartyrMemorial,
    GiMaskedSpider,
    GiMasonJar,
    GiMassDriver,
    GiMasterOfArms,
    GiMatchHead,
    GiMatchTip,
    GiMatchbox,
    GiMaterialsScience,
    GiMatryoshkaDolls,
    GiMatterStates,
    GiMayanPyramid,
    GiMazeCornea,
    GiMazeSaw,
    GiMaze,
    GiMeal,
    GiMeatCleaver,
    GiMeatHook,
    GiMeat,
    GiMechaHead,
    GiMechaMask,
    GiMechanicGarage,
    GiMechanicalArm,
    GiMedalSkull,
    GiMedal,
    GiMedallist,
    GiMedicalDrip,
    GiMedicalPackAlt,
    GiMedicalPack,
    GiMedicalThermometer,
    GiMedicinePills,
    GiMedicines,
    GiMedievalBarracks,
    GiMedievalGate,
    GiMedievalPavilion,
    GiMeditation,
    GiMedusaHead,
    GiMeepleArmy,
    GiMeepleCircle,
    GiMeepleGroup,
    GiMeepleKing,
    GiMeeple,
    GiMegabot,
    GiMegaphone,
    GiMeltingIceCube,
    GiMeltingMetal,
    GiMenhir,
    GiMermaid,
    GiMeshBall,
    GiMeshNetwork,
    GiMetalBar,
    GiMetalBoot,
    GiMetalDisc,
    GiMetalGolemHead,
    GiMetalHand,
    GiMetalPlate,
    GiMetalScales,
    GiMetalSkirt,
    GiMeteorImpact,
    GiMetroid,
    GiMetronome,
    GiMexico,
    GiMicrochip,
    GiMicrophone,
    GiMicroscopeLens,
    GiMicroscope,
    GiMiddleArrow,
    GiMidnightClaw,
    GiMightyBoosh,
    GiMightyForce,
    GiMightyHorn,
    GiMightySpanner,
    GiMilitaryAmbulance,
    GiMilitaryFort,
    GiMilkCarton,
    GiMilleniumKey,
    GiMimicChest,
    GiMineExplosion,
    GiMineTruck,
    GiMineWagon,
    GiMinefield,
    GiMiner,
    GiMineralHeart,
    GiMineralPearls,
    GiMinerals,
    GiMiniSubmarine,
    GiMinigun,
    GiMiningHelmet,
    GiMining,
    GiMinions,
    GiMinotaur,
    GiMiracleMedecine,
    GiMirrorMirror,
    GiMisdirection,
    GiMissileLauncher,
    GiMissileMech,
    GiMissilePod,
    GiMissileSwarm,
    GiMiteAlt,
    GiMite,
    GiMoai,
    GiModernCity,
    GiMoebiusStar,
    GiMoebiusTrefoil,
    GiMoebiusTriangle,
    GiMokaPot,
    GiMoldova,
    GiMolecule,
    GiMolotov,
    GiMonaLisa,
    GiMonclerJacket,
    GiMoneyStack,
    GiMongolia,
    GiMonkFace,
    GiMonkeyWrench,
    GiMonkey,
    GiMonoWheelRobot,
    GiMonsterGrasp,
    GiMonsteraLeaf,
    GiMonumentValley,
    GiMoonBats,
    GiMoonClaws,
    GiMoonOrbit,
    GiMoon,
    GiMooringBollard,
    GiMorbidHumour,
    GiMorgueFeet,
    GiMorphBall,
    GiMortar,
    GiMountainCave,
    GiMountainClimbing,
    GiMountainRoad,
    GiMountains,
    GiMountaintop,
    GiMountedKnight,
    GiMouse,
    GiMouthWatering,
    GiMove,
    GiMovementSensor,
    GiMp40,
    GiMp5,
    GiMp5K,
    GiMucousPillar,
    GiMugShot,
    GiMultiDirections,
    GiMultipleTargets,
    GiMummyHead,
    GiMuscleFat,
    GiMuscleUp,
    GiMuscularTorso,
    GiMushroomCloud,
    GiMushroomGills,
    GiMushroomHouse,
    GiMushroom,
    GiMushroomsCluster,
    GiMushrooms,
    GiMusicSpell,
    GiMusicalKeyboard,
    GiMusicalNotes,
    GiMusicalScore,
    GiMusket,
    GiMussel,
    GiMustache,
    GiMute,
    GiNachos,
    GiNailedFoot,
    GiNailedHead,
    GiNails,
    GiNanoBot,
    GiNautilusShell,
    GiNeckBite,
    GiNecklaceDisplay,
    GiNecklace,
    GiNeedleDrill,
    GiNeedleJaws,
    GiNefertiti,
    GiNestBirds,
    GiNestEggs,
    GiNestedEclipses,
    GiNestedHearts,
    GiNestedHexagons,
    GiNetworkBars,
    GiNewBorn,
    GiNewShoot,
    GiNewspaper,
    GiNextButton,
    GiNigeria,
    GiNightSky,
    GiNightSleep,
    GiNightVision,
    GiNinjaArmor,
    GiNinjaHead,
    GiNinjaHeroicStance,
    GiNinjaMask,
    GiNinjaStar,
    GiNinjaVelociraptor,
    GiNodular,
    GiNoodleBall,
    GiNoodles,
    GiNorthStarShuriken,
    GiNoseFront,
    GiNoseSide,
    GiNotebook,
    GiNothingToSay,
    GiNuclearBomb,
    GiNuclearPlant,
    GiNuclearWaste,
    GiNuclear,
    GiNunFace,
    GiNunchaku,
    GiNurseFemale,
    GiNurseMale,
    GiOBrick,
    GiOakLeaf,
    GiOak,
    GiOasis,
    GiOat,
    GiObelisk,
    GiObservatory,
    GiOcarina,
    GiOccupy,
    GiOctogonalEye,
    GiOctoman,
    GiOctopus,
    GiOden,
    GiOfficeChair,
    GiOffshorePlatform,
    GiOgre,
    GiOilDrum,
    GiOilPump,
    GiOilRig,
    GiOilySpiral,
    GiOldKing,
    GiOldLantern,
    GiOldMicrophone,
    GiOldWagon,
    GiOlive,
    GiOmega,
    GiOnSight,
    GiOnTarget,
    GiOneEyed,
    GiOni,
    GiOnigori,
    GiOpenBook,
    GiOpenChest,
    GiOpenFolder,
    GiOpenGate,
    GiOpenPalm,
    GiOpenTreasureChest,
    GiOpenWound,
    GiOpenedFoodCan,
    GiOpeningShell,
    GiOphiuchus,
    GiOppidum,
    GiOppositeHearts,
    GiOppression,
    GiOrangeSlice,
    GiOrange,
    GiOrbDirection,
    GiOrbWand,
    GiOrbit,
    GiOrbitalRays,
    GiOrbital,
    GiOrcHead,
    GiOre,
    GiOrganigram,
    GiOstrich,
    GiOuroboros,
    GiOutbackHat,
    GiOverInfinity,
    GiOverdose,
    GiOverdrive,
    GiOverhead,
    GiOverkill,
    GiOverlordHelm,
    GiOvermind,
    GiOwl,
    GiOysterPearl,
    GiOyster,
    GiP90,
    GiPackedPlanks,
    GiPaddleSteamer,
    GiPaddles,
    GiPadlockOpen,
    GiPadlock,
    GiPagoda,
    GiPaintBrush,
    GiPaintBucket,
    GiPaintRoller,
    GiPaintedPottery,
    GiPalette,
    GiPalisade,
    GiPalmTree,
    GiPalm,
    GiPanFlute,
    GiPanda,
    GiPangolin,
    GiPanzerfaust,
    GiPaperArrow,
    GiPaperBagCrumpled,
    GiPaperBagFolded,
    GiPaperBagOpen,
    GiPaperBoat,
    GiPaperBomb,
    GiPaperClip,
    GiPaperCrane,
    GiPaperFrog,
    GiPaperLantern,
    GiPaperPlane,
    GiPaperTray,
    GiPaperWindmill,
    GiPaper,
    GiPapers,
    GiPapyrus,
    GiParachute,
    GiParaguay,
    GiParanoia,
    GiParasaurolophus,
    GiParkBench,
    GiParmecia,
    GiParrotHead,
    GiPartyFlags,
    GiPartyHat,
    GiPartyPopper,
    GiPassport,
    GiPathDistance,
    GiPathTile,
    GiPauldrons,
    GiPauseButton,
    GiPawFront,
    GiPawHeart,
    GiPawPrint,
    GiPaw,
    GiPawn,
    GiPayMoney,
    GiPc,
    GiPeaceDove,
    GiPeach,
    GiPeaks,
    GiPeanut,
    GiPear,
    GiPearlEarring,
    GiPearlNecklace,
    GiPeas,
    GiPegasus,
    GiPelvisBone,
    GiPencilBrush,
    GiPencilRuler,
    GiPencil,
    GiPendantKey,
    GiPendulumSwing,
    GiPenguin,
    GiPentacle,
    GiPentagramRose,
    GiPentarrowsTornado,
    GiPerfumeBottle,
    GiPeriscope,
    GiPerpendicularRings,
    GiPersonInBed,
    GiPerson,
    GiPerspectiveDiceFive,
    GiPerspectiveDiceFour,
    GiPerspectiveDiceOne,
    GiPerspectiveDiceSixFacesFive,
    GiPerspectiveDiceSixFacesFour,
    GiPerspectiveDiceSixFacesOne,
    GiPerspectiveDiceSixFacesRandom,
    GiPerspectiveDiceSixFacesSix,
    GiPerspectiveDiceSixFacesThree,
    GiPerspectiveDiceSixFacesTwo,
    GiPerspectiveDiceSix,
    GiPerspectiveDiceThree,
    GiPerspectiveDiceTwo,
    GiPeru,
    GiPestleMortar,
    GiPharoah,
    GiPhone,
    GiPhotoCamera,
    GiPhrygianCap,
    GiPianist,
    GiPianoKeys,
    GiPickOfDestiny,
    GiPickelhaube,
    GiPickle,
    GiPieChart,
    GiPieSlice,
    GiPieceSkull,
    GiPiercedBody,
    GiPiercedHeart,
    GiPiercingSword,
    GiPigFace,
    GiPig,
    GiPiggyBank,
    GiPikeman,
    GiPilgrimHat,
    GiPillDrop,
    GiPill,
    GiPillow,
    GiPimiento,
    GiPin,
    GiPinata,
    GiPinballFlipper,
    GiPincers,
    GiPineTree,
    GiPineapple,
    GiPingPongBat,
    GiPipeOrgan,
    GiPipes,
    GiPiranha,
    GiPirateCannon,
    GiPirateCaptain,
    GiPirateCoat,
    GiPirateFlag,
    GiPirateGrave,
    GiPirateHat,
    GiPirateHook,
    GiPirateSkull,
    GiPisaTower,
    GiPisces,
    GiPistolGun,
    GiPitchfork,
    GiPizzaCutter,
    GiPizzaSlice,
    GiPlagueDoctorProfile,
    GiPlainArrow,
    GiPlainCircle,
    GiPlainDagger,
    GiPlainSquare,
    GiPlanePilot,
    GiPlaneWing,
    GiPlanetConquest,
    GiPlanetCore,
    GiPlanks,
    GiPlantRoots,
    GiPlantSeed,
    GiPlantWatering,
    GiPlantsAndAnimals,
    GiPlasmaBolt,
    GiPlasticDuck,
    GiPlastron,
    GiPlateClaw,
    GiPlatform,
    GiPlayButton,
    GiPlayerBase,
    GiPlayerNext,
    GiPlayerPrevious,
    GiPlayerTime,
    GiPlesiosaurus,
    GiPlow,
    GiPlug,
    GiPlunger,
    GiPocketBow,
    GiPocketRadio,
    GiPocketWatch,
    GiPodiumSecond,
    GiPodiumThird,
    GiPodiumWinner,
    GiPodium,
    GiPointing,
    GiPointyHat,
    GiPointySword,
    GiPoisonBottle,
    GiPoisonCloud,
    GiPoisonGas,
    GiPoison,
    GiPokecog,
    GiPokerHand,
    GiPoland,
    GiPolarBear,
    GiPolarStar,
    GiPoliceBadge,
    GiPoliceCar,
    GiPoliceOfficerHead,
    GiPoliceTarget,
    GiPollenDust,
    GiPoloShirt,
    GiPoncho,
    GiPoolDive,
    GiPoolTableCorner,
    GiPoolTriangle,
    GiPopcorn,
    GiPopeCrown,
    GiPoppy,
    GiPorcelainVase,
    GiPorcupine,
    GiPorcupinefish,
    GiPortal,
    GiPortculis,
    GiPortrait,
    GiPortugal,
    GiPositionMarker,
    GiPostOffice,
    GiPostStamp,
    GiPotato,
    GiPotionBall,
    GiPotionOfMadness,
    GiPounce,
    GiPouringChalice,
    GiPouringPot,
    GiPowderBag,
    GiPowder,
    GiPowerButton,
    GiPowerGenerator,
    GiPowerLightning,
    GiPowerRing,
    GiPrayerBeads,
    GiPrayer,
    GiPrayingMantis,
    GiPresent,
    GiPressureCooker,
    GiPrettyFangs,
    GiPretzel,
    GiPreviousButton,
    GiPriceTag,
    GiPrimitiveNecklace,
    GiPrimitiveTorch,
    GiPrism,
    GiPrisoner,
    GiPrivateFirstClass,
    GiPrivate,
    GiProcessor,
    GiProfit,
    GiProgression,
    GiPropellerBeanie,
    GiProtectionGlasses,
    GiPschentDoubleCrown,
    GiPsychicWaves,
    GiPterodactylus,
    GiPteruges,
    GiPublicSpeaker,
    GiPull,
    GiPulleyHook,
    GiPulse,
    GiPummeled,
    GiPumpkinLantern,
    GiPumpkinMask,
    GiPumpkin,
    GiPunchBlast,
    GiPunch,
    GiPunchingBag,
    GiPuppet,
    GiPurpleTentacle,
    GiPush,
    GiPuzzle,
    GiPylon,
    GiPyre,
    GiPyromaniac,
    GiQaitbayCitadel,
    GiQuakeStomp,
    GiQueenCrown,
    GiQuickMan,
    GiQuickSlash,
    GiQuicksand,
    GiQuillInk,
    GiQuill,
    GiQuiver,
    GiRabbitHead,
    GiRabbit,
    GiRaccoonHead,
    GiRaceCar,
    GiRadarCrossSection,
    GiRadarDish,
    GiRadarSweep,
    GiRaddish,
    GiRadialBalance,
    GiRadiations,
    GiRadioTower,
    GiRadioactive,
    GiRaft,
    GiRaggedWound,
    GiRailRoad,
    GiRailway,
    GiRainbowStar,
    GiRaining,
    GiRaiseSkeleton,
    GiRaiseZombie,
    GiRake,
    GiRallyTheTroops,
    GiRamProfile,
    GiRam,
    GiRanchGate,
    GiRank1,
    GiRank2,
    GiRank3,
    GiRapidshareArrow,
    GiRaspberry,
    GiRat,
    GiRattlesnake,
    GiRaven,
    GiRawEgg,
    GiRayGun,
    GiRazorBlade,
    GiRazor,
    GiReactor,
    GiRead,
    GiReaperScythe,
    GiRearAura,
    GiReceiveMoney,
    GiRecycle,
    GiRedCarpet,
    GiReed,
    GiRefinery,
    GiRegeneration,
    GiRelationshipBounds,
    GiRelicBlade,
    GiReloadGunBarrel,
    GiRemedy,
    GiRempart,
    GiReptileTail,
    GiResize,
    GiResonance,
    GiRestingVampire,
    GiReticule,
    GiRetroController,
    GiReturnArrow,
    GiRevolt,
    GiRevolver,
    GiRhinocerosHorn,
    GiRialtoBridge,
    GiRibbonMedal,
    GiRibbonShield,
    GiRibbon,
    GiRibcage,
    GiRiceCooker,
    GiRifle,
    GiRingBox,
    GiRingMould,
    GiRing,
    GiRingedBeam,
    GiRingedPlanet,
    GiRingingAlarm,
    GiRingingBell,
    GiRingmaster,
    GiRiotShield,
    GiRiver,
    GiRoad,
    GiRoastChicken,
    GiRobberHand,
    GiRobberMask,
    GiRobber,
    GiRobe,
    GiRobinHoodHat,
    GiRobotAntennas,
    GiRobotGolem,
    GiRobotGrab,
    GiRobotHelmet,
    GiRobotLeg,
    GiRockGolem,
    GiRock,
    GiRocketFlight,
    GiRocketThruster,
    GiRocket,
    GiRockingChair,
    GiRodOfAsclepius,
    GiRogue,
    GiRolledCloth,
    GiRollerSkate,
    GiRollingBomb,
    GiRollingDiceCup,
    GiRollingDices,
    GiRollingEnergy,
    GiRollingSuitcase,
    GiRomanShield,
    GiRomanToga,
    GiRooster,
    GiRootTip,
    GiRopeBridge,
    GiRopeCoil,
    GiRopeDart,
    GiRopeway,
    GiRosaShield,
    GiRose,
    GiRotaryPhone,
    GiRoughWound,
    GiRoundBottomFlask,
    GiRoundKnob,
    GiRoundShield,
    GiRoundSilo,
    GiRoundStar,
    GiRoundStrawBale,
    GiRoundStruck,
    GiRoundTable,
    GiRoyalLove,
    GiRss,
    GiRubElHizb,
    GiRubberBoot,
    GiRugbyConversion,
    GiRuleBook,
    GiRun,
    GiRuneStone,
    GiRuneSword,
    GiRunningNinja,
    GiRunningShoe,
    GiRupee,
    GiRustySword,
    GiSBrick,
    GiSaberAndPistol,
    GiSaberSlash,
    GiSaberTooth,
    GiSaberToothedCatHead,
    GiSabersChoc,
    GiSacrificialDagger,
    GiSadCrab,
    GiSaddle,
    GiSafetyPin,
    GiSagittarius,
    GiSai,
    GiSail,
    GiSailboat,
    GiSaintBasilCathedral,
    GiSaiyanSuit,
    GiSalamander,
    GiSalmon,
    GiSaloonDoors,
    GiSaloon,
    GiSaltShaker,
    GiSamaraMosque,
    GiSamuraiHelmet,
    GiSamusHelmet,
} from "react-icons/gi"

export function nameToReactIcon_gi_2(iconName: string): IconType | undefined {

    switch(iconName) {
        case "gi:GiItalia":
            return GiItalia;
        case "gi:GiIvoryTusks":
            return GiIvoryTusks;
        case "gi:GiJBrick":
            return GiJBrick;
        case "gi:GiJackPlug":
            return GiJackPlug;
        case "gi:GiJamesBondAperture":
            return GiJamesBondAperture;
        case "gi:GiJapan":
            return GiJapan;
        case "gi:GiJapaneseBridge":
            return GiJapaneseBridge;
        case "gi:GiJasmine":
            return GiJasmine;
        case "gi:GiJasonMask":
            return GiJasonMask;
        case "gi:GiJawbone":
            return GiJawbone;
        case "gi:GiJawlessCyclop":
            return GiJawlessCyclop;
        case "gi:GiJeep":
            return GiJeep;
        case "gi:GiJellyBeans":
            return GiJellyBeans;
        case "gi:GiJelly":
            return GiJelly;
        case "gi:GiJellyfish":
            return GiJellyfish;
        case "gi:GiJerrycan":
            return GiJerrycan;
        case "gi:GiJerusalemCross":
            return GiJerusalemCross;
        case "gi:GiJesterHat":
            return GiJesterHat;
        case "gi:GiJetFighter":
            return GiJetFighter;
        case "gi:GiJetPack":
            return GiJetPack;
        case "gi:GiJetpack":
            return GiJetpack;
        case "gi:GiJewelCrown":
            return GiJewelCrown;
        case "gi:GiJeweledChalice":
            return GiJeweledChalice;
        case "gi:GiJigsawBox":
            return GiJigsawBox;
        case "gi:GiJigsawPiece":
            return GiJigsawPiece;
        case "gi:GiJoin":
            return GiJoin;
        case "gi:GiJoint":
            return GiJoint;
        case "gi:GiJourney":
            return GiJourney;
        case "gi:GiJoystick":
            return GiJoystick;
        case "gi:GiJug":
            return GiJug;
        case "gi:GiJuggler":
            return GiJuggler;
        case "gi:GiJugglingClubs":
            return GiJugglingClubs;
        case "gi:GiJugglingSeal":
            return GiJugglingSeal;
        case "gi:GiJumpAcross":
            return GiJumpAcross;
        case "gi:GiJumpingDog":
            return GiJumpingDog;
        case "gi:GiJumpingRope":
            return GiJumpingRope;
        case "gi:GiJungle":
            return GiJungle;
        case "gi:GiJupiter":
            return GiJupiter;
        case "gi:GiJusticeStar":
            return GiJusticeStar;
        case "gi:GiKaleidoscopePearls":
            return GiKaleidoscopePearls;
        case "gi:GiKangaroo":
            return GiKangaroo;
        case "gi:GiKatana":
            return GiKatana;
        case "gi:GiKebabSpit":
            return GiKebabSpit;
        case "gi:GiKenkuHead":
            return GiKenkuHead;
        case "gi:GiKenya":
            return GiKenya;
        case "gi:GiKetchup":
            return GiKetchup;
        case "gi:GiKevlarVest":
            return GiKevlarVest;
        case "gi:GiKevlar":
            return GiKevlar;
        case "gi:GiKeyCard":
            return GiKeyCard;
        case "gi:GiKeyLock":
            return GiKeyLock;
        case "gi:GiKey":
            return GiKey;
        case "gi:GiKeyboard":
            return GiKeyboard;
        case "gi:GiKeyring":
            return GiKeyring;
        case "gi:GiKickScooter":
            return GiKickScooter;
        case "gi:GiKidSlide":
            return GiKidSlide;
        case "gi:GiKidneys":
            return GiKidneys;
        case "gi:GiKimono":
            return GiKimono;
        case "gi:GiKindle":
            return GiKindle;
        case "gi:GiKingJuMask":
            return GiKingJuMask;
        case "gi:GiKing":
            return GiKing;
        case "gi:GiKitchenKnives":
            return GiKitchenKnives;
        case "gi:GiKitchenScale":
            return GiKitchenScale;
        case "gi:GiKitchenTap":
            return GiKitchenTap;
        case "gi:GiKite":
            return GiKite;
        case "gi:GiKiwiBird":
            return GiKiwiBird;
        case "gi:GiKiwiFruit":
            return GiKiwiFruit;
        case "gi:GiKlingon":
            return GiKlingon;
        case "gi:GiKnapsack":
            return GiKnapsack;
        case "gi:GiKneeBandage":
            return GiKneeBandage;
        case "gi:GiKneeCap":
            return GiKneeCap;
        case "gi:GiKneePad":
            return GiKneePad;
        case "gi:GiKneeling":
            return GiKneeling;
        case "gi:GiKnifeFork":
            return GiKnifeFork;
        case "gi:GiKnifeThrust":
            return GiKnifeThrust;
        case "gi:GiKnightBanner":
            return GiKnightBanner;
        case "gi:GiKnockedOutStars":
            return GiKnockedOutStars;
        case "gi:GiKnockout":
            return GiKnockout;
        case "gi:GiKnot":
            return GiKnot;
        case "gi:GiKoala":
            return GiKoala;
        case "gi:GiKoholintEgg":
            return GiKoholintEgg;
        case "gi:GiKrakenTentacle":
            return GiKrakenTentacle;
        case "gi:GiKusarigama":
            return GiKusarigama;
        case "gi:GiLBrick":
            return GiLBrick;
        case "gi:GiLabCoat":
            return GiLabCoat;
        case "gi:GiLabradorHead":
            return GiLabradorHead;
        case "gi:GiLadder":
            return GiLadder;
        case "gi:GiLaddersPlatform":
            return GiLaddersPlatform;
        case "gi:GiLadle":
            return GiLadle;
        case "gi:GiLadybug":
            return GiLadybug;
        case "gi:GiLamellar":
            return GiLamellar;
        case "gi:GiLampreyMouth":
            return GiLampreyMouth;
        case "gi:GiLandMine":
            return GiLandMine;
        case "gi:GiLanternFlame":
            return GiLanternFlame;
        case "gi:GiLantern":
            return GiLantern;
        case "gi:GiLaptop":
            return GiLaptop;
        case "gi:GiLargeDress":
            return GiLargeDress;
        case "gi:GiLargePaintBrush":
            return GiLargePaintBrush;
        case "gi:GiLargeWound":
            return GiLargeWound;
        case "gi:GiLaserBlast":
            return GiLaserBlast;
        case "gi:GiLaserBurst":
            return GiLaserBurst;
        case "gi:GiLaserGun":
            return GiLaserGun;
        case "gi:GiLaserPrecision":
            return GiLaserPrecision;
        case "gi:GiLaserSparks":
            return GiLaserSparks;
        case "gi:GiLaserTurret":
            return GiLaserTurret;
        case "gi:GiLaserWarning":
            return GiLaserWarning;
        case "gi:GiLaserburn":
            return GiLaserburn;
        case "gi:GiLasso":
            return GiLasso;
        case "gi:GiLatvia":
            return GiLatvia;
        case "gi:GiLaurelCrown":
            return GiLaurelCrown;
        case "gi:GiLaurelsTrophy":
            return GiLaurelsTrophy;
        case "gi:GiLaurels":
            return GiLaurels;
        case "gi:GiLava":
            return GiLava;
        case "gi:GiLawStar":
            return GiLawStar;
        case "gi:GiLayeredArmor":
            return GiLayeredArmor;
        case "gi:GiLeadPipe":
            return GiLeadPipe;
        case "gi:GiLeafSkeleton":
            return GiLeafSkeleton;
        case "gi:GiLeafSwirl":
            return GiLeafSwirl;
        case "gi:GiLeak":
            return GiLeak;
        case "gi:GiLeakySkull":
            return GiLeakySkull;
        case "gi:GiLeapfrog":
            return GiLeapfrog;
        case "gi:GiLeatherArmor":
            return GiLeatherArmor;
        case "gi:GiLeatherBoot":
            return GiLeatherBoot;
        case "gi:GiLeatherVest":
            return GiLeatherVest;
        case "gi:GiLed":
            return GiLed;
        case "gi:GiLeeEnfield":
            return GiLeeEnfield;
        case "gi:GiLeechingWorm":
            return GiLeechingWorm;
        case "gi:GiLeek":
            return GiLeek;
        case "gi:GiLegArmor":
            return GiLegArmor;
        case "gi:GiLeg":
            return GiLeg;
        case "gi:GiLemon":
            return GiLemon;
        case "gi:GiLeo":
            return GiLeo;
        case "gi:GiLetterBomb":
            return GiLetterBomb;
        case "gi:GiLevelCrossing":
            return GiLevelCrossing;
        case "gi:GiLevelEndFlag":
            return GiLevelEndFlag;
        case "gi:GiLevelFourAdvanced":
            return GiLevelFourAdvanced;
        case "gi:GiLevelFour":
            return GiLevelFour;
        case "gi:GiLevelThreeAdvanced":
            return GiLevelThreeAdvanced;
        case "gi:GiLevelThree":
            return GiLevelThree;
        case "gi:GiLevelTwoAdvanced":
            return GiLevelTwoAdvanced;
        case "gi:GiLevelTwo":
            return GiLevelTwo;
        case "gi:GiLever":
            return GiLever;
        case "gi:GiLiar":
            return GiLiar;
        case "gi:GiLibertyWing":
            return GiLibertyWing;
        case "gi:GiLibra":
            return GiLibra;
        case "gi:GiLibya":
            return GiLibya;
        case "gi:GiLifeBar":
            return GiLifeBar;
        case "gi:GiLifeBuoy":
            return GiLifeBuoy;
        case "gi:GiLifeInTheBalance":
            return GiLifeInTheBalance;
        case "gi:GiLifeJacket":
            return GiLifeJacket;
        case "gi:GiLifeSupport":
            return GiLifeSupport;
        case "gi:GiLifeTap":
            return GiLifeTap;
        case "gi:GiLift":
            return GiLift;
        case "gi:GiLightBackpack":
            return GiLightBackpack;
        case "gi:GiLightBulb":
            return GiLightBulb;
        case "gi:GiLightFighter":
            return GiLightFighter;
        case "gi:GiLightHelm":
            return GiLightHelm;
        case "gi:GiLightProjector":
            return GiLightProjector;
        case "gi:GiLightSabers":
            return GiLightSabers;
        case "gi:GiLightThornyTriskelion":
            return GiLightThornyTriskelion;
        case "gi:GiLighter":
            return GiLighter;
        case "gi:GiLighthouse":
            return GiLighthouse;
        case "gi:GiLightningArc":
            return GiLightningArc;
        case "gi:GiLightningBow":
            return GiLightningBow;
        case "gi:GiLightningBranches":
            return GiLightningBranches;
        case "gi:GiLightningDissipation":
            return GiLightningDissipation;
        case "gi:GiLightningDome":
            return GiLightningDome;
        case "gi:GiLightningElectron":
            return GiLightningElectron;
        case "gi:GiLightningFlame":
            return GiLightningFlame;
        case "gi:GiLightningFrequency":
            return GiLightningFrequency;
        case "gi:GiLightningHelix":
            return GiLightningHelix;
        case "gi:GiLightningMask":
            return GiLightningMask;
        case "gi:GiLightningSaber":
            return GiLightningSaber;
        case "gi:GiLightningShadow":
            return GiLightningShadow;
        case "gi:GiLightningShield":
            return GiLightningShield;
        case "gi:GiLightningShout":
            return GiLightningShout;
        case "gi:GiLightningSlashes":
            return GiLightningSlashes;
        case "gi:GiLightningSpanner":
            return GiLightningSpanner;
        case "gi:GiLightningStorm":
            return GiLightningStorm;
        case "gi:GiLightningTear":
            return GiLightningTear;
        case "gi:GiLightningTree":
            return GiLightningTree;
        case "gi:GiLightningTrio":
            return GiLightningTrio;
        case "gi:GiLilyPads":
            return GiLilyPads;
        case "gi:GiLindenLeaf":
            return GiLindenLeaf;
        case "gi:GiLinkedRings":
            return GiLinkedRings;
        case "gi:GiLion":
            return GiLion;
        case "gi:GiLips":
            return GiLips;
        case "gi:GiLipstick":
            return GiLipstick;
        case "gi:GiLiquidSoap":
            return GiLiquidSoap;
        case "gi:GiLitCandelabra":
            return GiLitCandelabra;
        case "gi:GiLiver":
            return GiLiver;
        case "gi:GiLizardTongue":
            return GiLizardTongue;
        case "gi:GiLizardman":
            return GiLizardman;
        case "gi:GiLoad":
            return GiLoad;
        case "gi:GiLobArrow":
            return GiLobArrow;
        case "gi:GiLockPicking":
            return GiLockPicking;
        case "gi:GiLockSpy":
            return GiLockSpy;
        case "gi:GiLockedBox":
            return GiLockedBox;
        case "gi:GiLockedChest":
            return GiLockedChest;
        case "gi:GiLockedDoor":
            return GiLockedDoor;
        case "gi:GiLockedFortress":
            return GiLockedFortress;
        case "gi:GiLockedHeart":
            return GiLockedHeart;
        case "gi:GiLockers":
            return GiLockers;
        case "gi:GiLockpicks":
            return GiLockpicks;
        case "gi:GiLog":
            return GiLog;
        case "gi:GiLogging":
            return GiLogging;
        case "gi:GiLogicGateAnd":
            return GiLogicGateAnd;
        case "gi:GiLogicGateNand":
            return GiLogicGateNand;
        case "gi:GiLogicGateNor":
            return GiLogicGateNor;
        case "gi:GiLogicGateNot":
            return GiLogicGateNot;
        case "gi:GiLogicGateNxor":
            return GiLogicGateNxor;
        case "gi:GiLogicGateOr":
            return GiLogicGateOr;
        case "gi:GiLogicGateXor":
            return GiLogicGateXor;
        case "gi:GiLoincloth":
            return GiLoincloth;
        case "gi:GiLongAntennaeBug":
            return GiLongAntennaeBug;
        case "gi:GiLongLeggedSpider":
            return GiLongLeggedSpider;
        case "gi:GiLookAt":
            return GiLookAt;
        case "gi:GiLorgnette":
            return GiLorgnette;
        case "gi:GiLostLimb":
            return GiLostLimb;
        case "gi:GiLotusFlower":
            return GiLotusFlower;
        case "gi:GiLotus":
            return GiLotus;
        case "gi:GiLouvrePyramid":
            return GiLouvrePyramid;
        case "gi:GiLoveHowl":
            return GiLoveHowl;
        case "gi:GiLoveInjection":
            return GiLoveInjection;
        case "gi:GiLoveLetter":
            return GiLoveLetter;
        case "gi:GiLoveMystery":
            return GiLoveMystery;
        case "gi:GiLoveSong":
            return GiLoveSong;
        case "gi:GiLovers":
            return GiLovers;
        case "gi:GiLowTide":
            return GiLowTide;
        case "gi:GiLuchador":
            return GiLuchador;
        case "gi:GiLuciferCannon":
            return GiLuciferCannon;
        case "gi:GiLuckyFisherman":
            return GiLuckyFisherman;
        case "gi:GiLuger":
            return GiLuger;
        case "gi:GiLunarModule":
            return GiLunarModule;
        case "gi:GiLunarWand":
            return GiLunarWand;
        case "gi:GiLungs":
            return GiLungs;
        case "gi:GiLynxHead":
            return GiLynxHead;
        case "gi:GiLyre":
            return GiLyre;
        case "gi:GiM3GreaseGun":
            return GiM3GreaseGun;
        case "gi:GiMac10":
            return GiMac10;
        case "gi:GiMaceHead":
            return GiMaceHead;
        case "gi:GiMachete":
            return GiMachete;
        case "gi:GiMachineGunMagazine":
            return GiMachineGunMagazine;
        case "gi:GiMachineGun":
            return GiMachineGun;
        case "gi:GiMadScientist":
            return GiMadScientist;
        case "gi:GiMaggot":
            return GiMaggot;
        case "gi:GiMagicAxe":
            return GiMagicAxe;
        case "gi:GiMagicBroom":
            return GiMagicBroom;
        case "gi:GiMagicGate":
            return GiMagicGate;
        case "gi:GiMagicHat":
            return GiMagicHat;
        case "gi:GiMagicLamp":
            return GiMagicLamp;
        case "gi:GiMagicPalm":
            return GiMagicPalm;
        case "gi:GiMagicPortal":
            return GiMagicPortal;
        case "gi:GiMagicPotion":
            return GiMagicPotion;
        case "gi:GiMagicShield":
            return GiMagicShield;
        case "gi:GiMagicSwirl":
            return GiMagicSwirl;
        case "gi:GiMagicTrident":
            return GiMagicTrident;
        case "gi:GiMagickTrick":
            return GiMagickTrick;
        case "gi:GiMagnetBlast":
            return GiMagnetBlast;
        case "gi:GiMagnetMan":
            return GiMagnetMan;
        case "gi:GiMagnet":
            return GiMagnet;
        case "gi:GiMagnifyingGlass":
            return GiMagnifyingGlass;
        case "gi:GiMailShirt":
            return GiMailShirt;
        case "gi:GiMailbox":
            return GiMailbox;
        case "gi:GiMailedFist":
            return GiMailedFist;
        case "gi:GiMale":
            return GiMale;
        case "gi:GiMammoth":
            return GiMammoth;
        case "gi:GiManacles":
            return GiManacles;
        case "gi:GiMandrillHead":
            return GiMandrillHead;
        case "gi:GiMantaRay":
            return GiMantaRay;
        case "gi:GiMantrap":
            return GiMantrap;
        case "gi:GiManualJuicer":
            return GiManualJuicer;
        case "gi:GiManualMeatGrinder":
            return GiManualMeatGrinder;
        case "gi:GiMapleLeaf":
            return GiMapleLeaf;
        case "gi:GiMaracas":
            return GiMaracas;
        case "gi:GiMarbleTap":
            return GiMarbleTap;
        case "gi:GiMarbles":
            return GiMarbles;
        case "gi:GiMarrowDrain":
            return GiMarrowDrain;
        case "gi:GiMarsCuriosity":
            return GiMarsCuriosity;
        case "gi:GiMarsPathfinder":
            return GiMarsPathfinder;
        case "gi:GiMarshmallows":
            return GiMarshmallows;
        case "gi:GiMartini":
            return GiMartini;
        case "gi:GiMartyrMemorial":
            return GiMartyrMemorial;
        case "gi:GiMaskedSpider":
            return GiMaskedSpider;
        case "gi:GiMasonJar":
            return GiMasonJar;
        case "gi:GiMassDriver":
            return GiMassDriver;
        case "gi:GiMasterOfArms":
            return GiMasterOfArms;
        case "gi:GiMatchHead":
            return GiMatchHead;
        case "gi:GiMatchTip":
            return GiMatchTip;
        case "gi:GiMatchbox":
            return GiMatchbox;
        case "gi:GiMaterialsScience":
            return GiMaterialsScience;
        case "gi:GiMatryoshkaDolls":
            return GiMatryoshkaDolls;
        case "gi:GiMatterStates":
            return GiMatterStates;
        case "gi:GiMayanPyramid":
            return GiMayanPyramid;
        case "gi:GiMazeCornea":
            return GiMazeCornea;
        case "gi:GiMazeSaw":
            return GiMazeSaw;
        case "gi:GiMaze":
            return GiMaze;
        case "gi:GiMeal":
            return GiMeal;
        case "gi:GiMeatCleaver":
            return GiMeatCleaver;
        case "gi:GiMeatHook":
            return GiMeatHook;
        case "gi:GiMeat":
            return GiMeat;
        case "gi:GiMechaHead":
            return GiMechaHead;
        case "gi:GiMechaMask":
            return GiMechaMask;
        case "gi:GiMechanicGarage":
            return GiMechanicGarage;
        case "gi:GiMechanicalArm":
            return GiMechanicalArm;
        case "gi:GiMedalSkull":
            return GiMedalSkull;
        case "gi:GiMedal":
            return GiMedal;
        case "gi:GiMedallist":
            return GiMedallist;
        case "gi:GiMedicalDrip":
            return GiMedicalDrip;
        case "gi:GiMedicalPackAlt":
            return GiMedicalPackAlt;
        case "gi:GiMedicalPack":
            return GiMedicalPack;
        case "gi:GiMedicalThermometer":
            return GiMedicalThermometer;
        case "gi:GiMedicinePills":
            return GiMedicinePills;
        case "gi:GiMedicines":
            return GiMedicines;
        case "gi:GiMedievalBarracks":
            return GiMedievalBarracks;
        case "gi:GiMedievalGate":
            return GiMedievalGate;
        case "gi:GiMedievalPavilion":
            return GiMedievalPavilion;
        case "gi:GiMeditation":
            return GiMeditation;
        case "gi:GiMedusaHead":
            return GiMedusaHead;
        case "gi:GiMeepleArmy":
            return GiMeepleArmy;
        case "gi:GiMeepleCircle":
            return GiMeepleCircle;
        case "gi:GiMeepleGroup":
            return GiMeepleGroup;
        case "gi:GiMeepleKing":
            return GiMeepleKing;
        case "gi:GiMeeple":
            return GiMeeple;
        case "gi:GiMegabot":
            return GiMegabot;
        case "gi:GiMegaphone":
            return GiMegaphone;
        case "gi:GiMeltingIceCube":
            return GiMeltingIceCube;
        case "gi:GiMeltingMetal":
            return GiMeltingMetal;
        case "gi:GiMenhir":
            return GiMenhir;
        case "gi:GiMermaid":
            return GiMermaid;
        case "gi:GiMeshBall":
            return GiMeshBall;
        case "gi:GiMeshNetwork":
            return GiMeshNetwork;
        case "gi:GiMetalBar":
            return GiMetalBar;
        case "gi:GiMetalBoot":
            return GiMetalBoot;
        case "gi:GiMetalDisc":
            return GiMetalDisc;
        case "gi:GiMetalGolemHead":
            return GiMetalGolemHead;
        case "gi:GiMetalHand":
            return GiMetalHand;
        case "gi:GiMetalPlate":
            return GiMetalPlate;
        case "gi:GiMetalScales":
            return GiMetalScales;
        case "gi:GiMetalSkirt":
            return GiMetalSkirt;
        case "gi:GiMeteorImpact":
            return GiMeteorImpact;
        case "gi:GiMetroid":
            return GiMetroid;
        case "gi:GiMetronome":
            return GiMetronome;
        case "gi:GiMexico":
            return GiMexico;
        case "gi:GiMicrochip":
            return GiMicrochip;
        case "gi:GiMicrophone":
            return GiMicrophone;
        case "gi:GiMicroscopeLens":
            return GiMicroscopeLens;
        case "gi:GiMicroscope":
            return GiMicroscope;
        case "gi:GiMiddleArrow":
            return GiMiddleArrow;
        case "gi:GiMidnightClaw":
            return GiMidnightClaw;
        case "gi:GiMightyBoosh":
            return GiMightyBoosh;
        case "gi:GiMightyForce":
            return GiMightyForce;
        case "gi:GiMightyHorn":
            return GiMightyHorn;
        case "gi:GiMightySpanner":
            return GiMightySpanner;
        case "gi:GiMilitaryAmbulance":
            return GiMilitaryAmbulance;
        case "gi:GiMilitaryFort":
            return GiMilitaryFort;
        case "gi:GiMilkCarton":
            return GiMilkCarton;
        case "gi:GiMilleniumKey":
            return GiMilleniumKey;
        case "gi:GiMimicChest":
            return GiMimicChest;
        case "gi:GiMineExplosion":
            return GiMineExplosion;
        case "gi:GiMineTruck":
            return GiMineTruck;
        case "gi:GiMineWagon":
            return GiMineWagon;
        case "gi:GiMinefield":
            return GiMinefield;
        case "gi:GiMiner":
            return GiMiner;
        case "gi:GiMineralHeart":
            return GiMineralHeart;
        case "gi:GiMineralPearls":
            return GiMineralPearls;
        case "gi:GiMinerals":
            return GiMinerals;
        case "gi:GiMiniSubmarine":
            return GiMiniSubmarine;
        case "gi:GiMinigun":
            return GiMinigun;
        case "gi:GiMiningHelmet":
            return GiMiningHelmet;
        case "gi:GiMining":
            return GiMining;
        case "gi:GiMinions":
            return GiMinions;
        case "gi:GiMinotaur":
            return GiMinotaur;
        case "gi:GiMiracleMedecine":
            return GiMiracleMedecine;
        case "gi:GiMirrorMirror":
            return GiMirrorMirror;
        case "gi:GiMisdirection":
            return GiMisdirection;
        case "gi:GiMissileLauncher":
            return GiMissileLauncher;
        case "gi:GiMissileMech":
            return GiMissileMech;
        case "gi:GiMissilePod":
            return GiMissilePod;
        case "gi:GiMissileSwarm":
            return GiMissileSwarm;
        case "gi:GiMiteAlt":
            return GiMiteAlt;
        case "gi:GiMite":
            return GiMite;
        case "gi:GiMoai":
            return GiMoai;
        case "gi:GiModernCity":
            return GiModernCity;
        case "gi:GiMoebiusStar":
            return GiMoebiusStar;
        case "gi:GiMoebiusTrefoil":
            return GiMoebiusTrefoil;
        case "gi:GiMoebiusTriangle":
            return GiMoebiusTriangle;
        case "gi:GiMokaPot":
            return GiMokaPot;
        case "gi:GiMoldova":
            return GiMoldova;
        case "gi:GiMolecule":
            return GiMolecule;
        case "gi:GiMolotov":
            return GiMolotov;
        case "gi:GiMonaLisa":
            return GiMonaLisa;
        case "gi:GiMonclerJacket":
            return GiMonclerJacket;
        case "gi:GiMoneyStack":
            return GiMoneyStack;
        case "gi:GiMongolia":
            return GiMongolia;
        case "gi:GiMonkFace":
            return GiMonkFace;
        case "gi:GiMonkeyWrench":
            return GiMonkeyWrench;
        case "gi:GiMonkey":
            return GiMonkey;
        case "gi:GiMonoWheelRobot":
            return GiMonoWheelRobot;
        case "gi:GiMonsterGrasp":
            return GiMonsterGrasp;
        case "gi:GiMonsteraLeaf":
            return GiMonsteraLeaf;
        case "gi:GiMonumentValley":
            return GiMonumentValley;
        case "gi:GiMoonBats":
            return GiMoonBats;
        case "gi:GiMoonClaws":
            return GiMoonClaws;
        case "gi:GiMoonOrbit":
            return GiMoonOrbit;
        case "gi:GiMoon":
            return GiMoon;
        case "gi:GiMooringBollard":
            return GiMooringBollard;
        case "gi:GiMorbidHumour":
            return GiMorbidHumour;
        case "gi:GiMorgueFeet":
            return GiMorgueFeet;
        case "gi:GiMorphBall":
            return GiMorphBall;
        case "gi:GiMortar":
            return GiMortar;
        case "gi:GiMountainCave":
            return GiMountainCave;
        case "gi:GiMountainClimbing":
            return GiMountainClimbing;
        case "gi:GiMountainRoad":
            return GiMountainRoad;
        case "gi:GiMountains":
            return GiMountains;
        case "gi:GiMountaintop":
            return GiMountaintop;
        case "gi:GiMountedKnight":
            return GiMountedKnight;
        case "gi:GiMouse":
            return GiMouse;
        case "gi:GiMouthWatering":
            return GiMouthWatering;
        case "gi:GiMove":
            return GiMove;
        case "gi:GiMovementSensor":
            return GiMovementSensor;
        case "gi:GiMp40":
            return GiMp40;
        case "gi:GiMp5":
            return GiMp5;
        case "gi:GiMp5K":
            return GiMp5K;
        case "gi:GiMucousPillar":
            return GiMucousPillar;
        case "gi:GiMugShot":
            return GiMugShot;
        case "gi:GiMultiDirections":
            return GiMultiDirections;
        case "gi:GiMultipleTargets":
            return GiMultipleTargets;
        case "gi:GiMummyHead":
            return GiMummyHead;
        case "gi:GiMuscleFat":
            return GiMuscleFat;
        case "gi:GiMuscleUp":
            return GiMuscleUp;
        case "gi:GiMuscularTorso":
            return GiMuscularTorso;
        case "gi:GiMushroomCloud":
            return GiMushroomCloud;
        case "gi:GiMushroomGills":
            return GiMushroomGills;
        case "gi:GiMushroomHouse":
            return GiMushroomHouse;
        case "gi:GiMushroom":
            return GiMushroom;
        case "gi:GiMushroomsCluster":
            return GiMushroomsCluster;
        case "gi:GiMushrooms":
            return GiMushrooms;
        case "gi:GiMusicSpell":
            return GiMusicSpell;
        case "gi:GiMusicalKeyboard":
            return GiMusicalKeyboard;
        case "gi:GiMusicalNotes":
            return GiMusicalNotes;
        case "gi:GiMusicalScore":
            return GiMusicalScore;
        case "gi:GiMusket":
            return GiMusket;
        case "gi:GiMussel":
            return GiMussel;
        case "gi:GiMustache":
            return GiMustache;
        case "gi:GiMute":
            return GiMute;
        case "gi:GiNachos":
            return GiNachos;
        case "gi:GiNailedFoot":
            return GiNailedFoot;
        case "gi:GiNailedHead":
            return GiNailedHead;
        case "gi:GiNails":
            return GiNails;
        case "gi:GiNanoBot":
            return GiNanoBot;
        case "gi:GiNautilusShell":
            return GiNautilusShell;
        case "gi:GiNeckBite":
            return GiNeckBite;
        case "gi:GiNecklaceDisplay":
            return GiNecklaceDisplay;
        case "gi:GiNecklace":
            return GiNecklace;
        case "gi:GiNeedleDrill":
            return GiNeedleDrill;
        case "gi:GiNeedleJaws":
            return GiNeedleJaws;
        case "gi:GiNefertiti":
            return GiNefertiti;
        case "gi:GiNestBirds":
            return GiNestBirds;
        case "gi:GiNestEggs":
            return GiNestEggs;
        case "gi:GiNestedEclipses":
            return GiNestedEclipses;
        case "gi:GiNestedHearts":
            return GiNestedHearts;
        case "gi:GiNestedHexagons":
            return GiNestedHexagons;
        case "gi:GiNetworkBars":
            return GiNetworkBars;
        case "gi:GiNewBorn":
            return GiNewBorn;
        case "gi:GiNewShoot":
            return GiNewShoot;
        case "gi:GiNewspaper":
            return GiNewspaper;
        case "gi:GiNextButton":
            return GiNextButton;
        case "gi:GiNigeria":
            return GiNigeria;
        case "gi:GiNightSky":
            return GiNightSky;
        case "gi:GiNightSleep":
            return GiNightSleep;
        case "gi:GiNightVision":
            return GiNightVision;
        case "gi:GiNinjaArmor":
            return GiNinjaArmor;
        case "gi:GiNinjaHead":
            return GiNinjaHead;
        case "gi:GiNinjaHeroicStance":
            return GiNinjaHeroicStance;
        case "gi:GiNinjaMask":
            return GiNinjaMask;
        case "gi:GiNinjaStar":
            return GiNinjaStar;
        case "gi:GiNinjaVelociraptor":
            return GiNinjaVelociraptor;
        case "gi:GiNodular":
            return GiNodular;
        case "gi:GiNoodleBall":
            return GiNoodleBall;
        case "gi:GiNoodles":
            return GiNoodles;
        case "gi:GiNorthStarShuriken":
            return GiNorthStarShuriken;
        case "gi:GiNoseFront":
            return GiNoseFront;
        case "gi:GiNoseSide":
            return GiNoseSide;
        case "gi:GiNotebook":
            return GiNotebook;
        case "gi:GiNothingToSay":
            return GiNothingToSay;
        case "gi:GiNuclearBomb":
            return GiNuclearBomb;
        case "gi:GiNuclearPlant":
            return GiNuclearPlant;
        case "gi:GiNuclearWaste":
            return GiNuclearWaste;
        case "gi:GiNuclear":
            return GiNuclear;
        case "gi:GiNunFace":
            return GiNunFace;
        case "gi:GiNunchaku":
            return GiNunchaku;
        case "gi:GiNurseFemale":
            return GiNurseFemale;
        case "gi:GiNurseMale":
            return GiNurseMale;
        case "gi:GiOBrick":
            return GiOBrick;
        case "gi:GiOakLeaf":
            return GiOakLeaf;
        case "gi:GiOak":
            return GiOak;
        case "gi:GiOasis":
            return GiOasis;
        case "gi:GiOat":
            return GiOat;
        case "gi:GiObelisk":
            return GiObelisk;
        case "gi:GiObservatory":
            return GiObservatory;
        case "gi:GiOcarina":
            return GiOcarina;
        case "gi:GiOccupy":
            return GiOccupy;
        case "gi:GiOctogonalEye":
            return GiOctogonalEye;
        case "gi:GiOctoman":
            return GiOctoman;
        case "gi:GiOctopus":
            return GiOctopus;
        case "gi:GiOden":
            return GiOden;
        case "gi:GiOfficeChair":
            return GiOfficeChair;
        case "gi:GiOffshorePlatform":
            return GiOffshorePlatform;
        case "gi:GiOgre":
            return GiOgre;
        case "gi:GiOilDrum":
            return GiOilDrum;
        case "gi:GiOilPump":
            return GiOilPump;
        case "gi:GiOilRig":
            return GiOilRig;
        case "gi:GiOilySpiral":
            return GiOilySpiral;
        case "gi:GiOldKing":
            return GiOldKing;
        case "gi:GiOldLantern":
            return GiOldLantern;
        case "gi:GiOldMicrophone":
            return GiOldMicrophone;
        case "gi:GiOldWagon":
            return GiOldWagon;
        case "gi:GiOlive":
            return GiOlive;
        case "gi:GiOmega":
            return GiOmega;
        case "gi:GiOnSight":
            return GiOnSight;
        case "gi:GiOnTarget":
            return GiOnTarget;
        case "gi:GiOneEyed":
            return GiOneEyed;
        case "gi:GiOni":
            return GiOni;
        case "gi:GiOnigori":
            return GiOnigori;
        case "gi:GiOpenBook":
            return GiOpenBook;
        case "gi:GiOpenChest":
            return GiOpenChest;
        case "gi:GiOpenFolder":
            return GiOpenFolder;
        case "gi:GiOpenGate":
            return GiOpenGate;
        case "gi:GiOpenPalm":
            return GiOpenPalm;
        case "gi:GiOpenTreasureChest":
            return GiOpenTreasureChest;
        case "gi:GiOpenWound":
            return GiOpenWound;
        case "gi:GiOpenedFoodCan":
            return GiOpenedFoodCan;
        case "gi:GiOpeningShell":
            return GiOpeningShell;
        case "gi:GiOphiuchus":
            return GiOphiuchus;
        case "gi:GiOppidum":
            return GiOppidum;
        case "gi:GiOppositeHearts":
            return GiOppositeHearts;
        case "gi:GiOppression":
            return GiOppression;
        case "gi:GiOrangeSlice":
            return GiOrangeSlice;
        case "gi:GiOrange":
            return GiOrange;
        case "gi:GiOrbDirection":
            return GiOrbDirection;
        case "gi:GiOrbWand":
            return GiOrbWand;
        case "gi:GiOrbit":
            return GiOrbit;
        case "gi:GiOrbitalRays":
            return GiOrbitalRays;
        case "gi:GiOrbital":
            return GiOrbital;
        case "gi:GiOrcHead":
            return GiOrcHead;
        case "gi:GiOre":
            return GiOre;
        case "gi:GiOrganigram":
            return GiOrganigram;
        case "gi:GiOstrich":
            return GiOstrich;
        case "gi:GiOuroboros":
            return GiOuroboros;
        case "gi:GiOutbackHat":
            return GiOutbackHat;
        case "gi:GiOverInfinity":
            return GiOverInfinity;
        case "gi:GiOverdose":
            return GiOverdose;
        case "gi:GiOverdrive":
            return GiOverdrive;
        case "gi:GiOverhead":
            return GiOverhead;
        case "gi:GiOverkill":
            return GiOverkill;
        case "gi:GiOverlordHelm":
            return GiOverlordHelm;
        case "gi:GiOvermind":
            return GiOvermind;
        case "gi:GiOwl":
            return GiOwl;
        case "gi:GiOysterPearl":
            return GiOysterPearl;
        case "gi:GiOyster":
            return GiOyster;
        case "gi:GiP90":
            return GiP90;
        case "gi:GiPackedPlanks":
            return GiPackedPlanks;
        case "gi:GiPaddleSteamer":
            return GiPaddleSteamer;
        case "gi:GiPaddles":
            return GiPaddles;
        case "gi:GiPadlockOpen":
            return GiPadlockOpen;
        case "gi:GiPadlock":
            return GiPadlock;
        case "gi:GiPagoda":
            return GiPagoda;
        case "gi:GiPaintBrush":
            return GiPaintBrush;
        case "gi:GiPaintBucket":
            return GiPaintBucket;
        case "gi:GiPaintRoller":
            return GiPaintRoller;
        case "gi:GiPaintedPottery":
            return GiPaintedPottery;
        case "gi:GiPalette":
            return GiPalette;
        case "gi:GiPalisade":
            return GiPalisade;
        case "gi:GiPalmTree":
            return GiPalmTree;
        case "gi:GiPalm":
            return GiPalm;
        case "gi:GiPanFlute":
            return GiPanFlute;
        case "gi:GiPanda":
            return GiPanda;
        case "gi:GiPangolin":
            return GiPangolin;
        case "gi:GiPanzerfaust":
            return GiPanzerfaust;
        case "gi:GiPaperArrow":
            return GiPaperArrow;
        case "gi:GiPaperBagCrumpled":
            return GiPaperBagCrumpled;
        case "gi:GiPaperBagFolded":
            return GiPaperBagFolded;
        case "gi:GiPaperBagOpen":
            return GiPaperBagOpen;
        case "gi:GiPaperBoat":
            return GiPaperBoat;
        case "gi:GiPaperBomb":
            return GiPaperBomb;
        case "gi:GiPaperClip":
            return GiPaperClip;
        case "gi:GiPaperCrane":
            return GiPaperCrane;
        case "gi:GiPaperFrog":
            return GiPaperFrog;
        case "gi:GiPaperLantern":
            return GiPaperLantern;
        case "gi:GiPaperPlane":
            return GiPaperPlane;
        case "gi:GiPaperTray":
            return GiPaperTray;
        case "gi:GiPaperWindmill":
            return GiPaperWindmill;
        case "gi:GiPaper":
            return GiPaper;
        case "gi:GiPapers":
            return GiPapers;
        case "gi:GiPapyrus":
            return GiPapyrus;
        case "gi:GiParachute":
            return GiParachute;
        case "gi:GiParaguay":
            return GiParaguay;
        case "gi:GiParanoia":
            return GiParanoia;
        case "gi:GiParasaurolophus":
            return GiParasaurolophus;
        case "gi:GiParkBench":
            return GiParkBench;
        case "gi:GiParmecia":
            return GiParmecia;
        case "gi:GiParrotHead":
            return GiParrotHead;
        case "gi:GiPartyFlags":
            return GiPartyFlags;
        case "gi:GiPartyHat":
            return GiPartyHat;
        case "gi:GiPartyPopper":
            return GiPartyPopper;
        case "gi:GiPassport":
            return GiPassport;
        case "gi:GiPathDistance":
            return GiPathDistance;
        case "gi:GiPathTile":
            return GiPathTile;
        case "gi:GiPauldrons":
            return GiPauldrons;
        case "gi:GiPauseButton":
            return GiPauseButton;
        case "gi:GiPawFront":
            return GiPawFront;
        case "gi:GiPawHeart":
            return GiPawHeart;
        case "gi:GiPawPrint":
            return GiPawPrint;
        case "gi:GiPaw":
            return GiPaw;
        case "gi:GiPawn":
            return GiPawn;
        case "gi:GiPayMoney":
            return GiPayMoney;
        case "gi:GiPc":
            return GiPc;
        case "gi:GiPeaceDove":
            return GiPeaceDove;
        case "gi:GiPeach":
            return GiPeach;
        case "gi:GiPeaks":
            return GiPeaks;
        case "gi:GiPeanut":
            return GiPeanut;
        case "gi:GiPear":
            return GiPear;
        case "gi:GiPearlEarring":
            return GiPearlEarring;
        case "gi:GiPearlNecklace":
            return GiPearlNecklace;
        case "gi:GiPeas":
            return GiPeas;
        case "gi:GiPegasus":
            return GiPegasus;
        case "gi:GiPelvisBone":
            return GiPelvisBone;
        case "gi:GiPencilBrush":
            return GiPencilBrush;
        case "gi:GiPencilRuler":
            return GiPencilRuler;
        case "gi:GiPencil":
            return GiPencil;
        case "gi:GiPendantKey":
            return GiPendantKey;
        case "gi:GiPendulumSwing":
            return GiPendulumSwing;
        case "gi:GiPenguin":
            return GiPenguin;
        case "gi:GiPentacle":
            return GiPentacle;
        case "gi:GiPentagramRose":
            return GiPentagramRose;
        case "gi:GiPentarrowsTornado":
            return GiPentarrowsTornado;
        case "gi:GiPerfumeBottle":
            return GiPerfumeBottle;
        case "gi:GiPeriscope":
            return GiPeriscope;
        case "gi:GiPerpendicularRings":
            return GiPerpendicularRings;
        case "gi:GiPersonInBed":
            return GiPersonInBed;
        case "gi:GiPerson":
            return GiPerson;
        case "gi:GiPerspectiveDiceFive":
            return GiPerspectiveDiceFive;
        case "gi:GiPerspectiveDiceFour":
            return GiPerspectiveDiceFour;
        case "gi:GiPerspectiveDiceOne":
            return GiPerspectiveDiceOne;
        case "gi:GiPerspectiveDiceSixFacesFive":
            return GiPerspectiveDiceSixFacesFive;
        case "gi:GiPerspectiveDiceSixFacesFour":
            return GiPerspectiveDiceSixFacesFour;
        case "gi:GiPerspectiveDiceSixFacesOne":
            return GiPerspectiveDiceSixFacesOne;
        case "gi:GiPerspectiveDiceSixFacesRandom":
            return GiPerspectiveDiceSixFacesRandom;
        case "gi:GiPerspectiveDiceSixFacesSix":
            return GiPerspectiveDiceSixFacesSix;
        case "gi:GiPerspectiveDiceSixFacesThree":
            return GiPerspectiveDiceSixFacesThree;
        case "gi:GiPerspectiveDiceSixFacesTwo":
            return GiPerspectiveDiceSixFacesTwo;
        case "gi:GiPerspectiveDiceSix":
            return GiPerspectiveDiceSix;
        case "gi:GiPerspectiveDiceThree":
            return GiPerspectiveDiceThree;
        case "gi:GiPerspectiveDiceTwo":
            return GiPerspectiveDiceTwo;
        case "gi:GiPeru":
            return GiPeru;
        case "gi:GiPestleMortar":
            return GiPestleMortar;
        case "gi:GiPharoah":
            return GiPharoah;
        case "gi:GiPhone":
            return GiPhone;
        case "gi:GiPhotoCamera":
            return GiPhotoCamera;
        case "gi:GiPhrygianCap":
            return GiPhrygianCap;
        case "gi:GiPianist":
            return GiPianist;
        case "gi:GiPianoKeys":
            return GiPianoKeys;
        case "gi:GiPickOfDestiny":
            return GiPickOfDestiny;
        case "gi:GiPickelhaube":
            return GiPickelhaube;
        case "gi:GiPickle":
            return GiPickle;
        case "gi:GiPieChart":
            return GiPieChart;
        case "gi:GiPieSlice":
            return GiPieSlice;
        case "gi:GiPieceSkull":
            return GiPieceSkull;
        case "gi:GiPiercedBody":
            return GiPiercedBody;
        case "gi:GiPiercedHeart":
            return GiPiercedHeart;
        case "gi:GiPiercingSword":
            return GiPiercingSword;
        case "gi:GiPigFace":
            return GiPigFace;
        case "gi:GiPig":
            return GiPig;
        case "gi:GiPiggyBank":
            return GiPiggyBank;
        case "gi:GiPikeman":
            return GiPikeman;
        case "gi:GiPilgrimHat":
            return GiPilgrimHat;
        case "gi:GiPillDrop":
            return GiPillDrop;
        case "gi:GiPill":
            return GiPill;
        case "gi:GiPillow":
            return GiPillow;
        case "gi:GiPimiento":
            return GiPimiento;
        case "gi:GiPin":
            return GiPin;
        case "gi:GiPinata":
            return GiPinata;
        case "gi:GiPinballFlipper":
            return GiPinballFlipper;
        case "gi:GiPincers":
            return GiPincers;
        case "gi:GiPineTree":
            return GiPineTree;
        case "gi:GiPineapple":
            return GiPineapple;
        case "gi:GiPingPongBat":
            return GiPingPongBat;
        case "gi:GiPipeOrgan":
            return GiPipeOrgan;
        case "gi:GiPipes":
            return GiPipes;
        case "gi:GiPiranha":
            return GiPiranha;
        case "gi:GiPirateCannon":
            return GiPirateCannon;
        case "gi:GiPirateCaptain":
            return GiPirateCaptain;
        case "gi:GiPirateCoat":
            return GiPirateCoat;
        case "gi:GiPirateFlag":
            return GiPirateFlag;
        case "gi:GiPirateGrave":
            return GiPirateGrave;
        case "gi:GiPirateHat":
            return GiPirateHat;
        case "gi:GiPirateHook":
            return GiPirateHook;
        case "gi:GiPirateSkull":
            return GiPirateSkull;
        case "gi:GiPisaTower":
            return GiPisaTower;
        case "gi:GiPisces":
            return GiPisces;
        case "gi:GiPistolGun":
            return GiPistolGun;
        case "gi:GiPitchfork":
            return GiPitchfork;
        case "gi:GiPizzaCutter":
            return GiPizzaCutter;
        case "gi:GiPizzaSlice":
            return GiPizzaSlice;
        case "gi:GiPlagueDoctorProfile":
            return GiPlagueDoctorProfile;
        case "gi:GiPlainArrow":
            return GiPlainArrow;
        case "gi:GiPlainCircle":
            return GiPlainCircle;
        case "gi:GiPlainDagger":
            return GiPlainDagger;
        case "gi:GiPlainSquare":
            return GiPlainSquare;
        case "gi:GiPlanePilot":
            return GiPlanePilot;
        case "gi:GiPlaneWing":
            return GiPlaneWing;
        case "gi:GiPlanetConquest":
            return GiPlanetConquest;
        case "gi:GiPlanetCore":
            return GiPlanetCore;
        case "gi:GiPlanks":
            return GiPlanks;
        case "gi:GiPlantRoots":
            return GiPlantRoots;
        case "gi:GiPlantSeed":
            return GiPlantSeed;
        case "gi:GiPlantWatering":
            return GiPlantWatering;
        case "gi:GiPlantsAndAnimals":
            return GiPlantsAndAnimals;
        case "gi:GiPlasmaBolt":
            return GiPlasmaBolt;
        case "gi:GiPlasticDuck":
            return GiPlasticDuck;
        case "gi:GiPlastron":
            return GiPlastron;
        case "gi:GiPlateClaw":
            return GiPlateClaw;
        case "gi:GiPlatform":
            return GiPlatform;
        case "gi:GiPlayButton":
            return GiPlayButton;
        case "gi:GiPlayerBase":
            return GiPlayerBase;
        case "gi:GiPlayerNext":
            return GiPlayerNext;
        case "gi:GiPlayerPrevious":
            return GiPlayerPrevious;
        case "gi:GiPlayerTime":
            return GiPlayerTime;
        case "gi:GiPlesiosaurus":
            return GiPlesiosaurus;
        case "gi:GiPlow":
            return GiPlow;
        case "gi:GiPlug":
            return GiPlug;
        case "gi:GiPlunger":
            return GiPlunger;
        case "gi:GiPocketBow":
            return GiPocketBow;
        case "gi:GiPocketRadio":
            return GiPocketRadio;
        case "gi:GiPocketWatch":
            return GiPocketWatch;
        case "gi:GiPodiumSecond":
            return GiPodiumSecond;
        case "gi:GiPodiumThird":
            return GiPodiumThird;
        case "gi:GiPodiumWinner":
            return GiPodiumWinner;
        case "gi:GiPodium":
            return GiPodium;
        case "gi:GiPointing":
            return GiPointing;
        case "gi:GiPointyHat":
            return GiPointyHat;
        case "gi:GiPointySword":
            return GiPointySword;
        case "gi:GiPoisonBottle":
            return GiPoisonBottle;
        case "gi:GiPoisonCloud":
            return GiPoisonCloud;
        case "gi:GiPoisonGas":
            return GiPoisonGas;
        case "gi:GiPoison":
            return GiPoison;
        case "gi:GiPokecog":
            return GiPokecog;
        case "gi:GiPokerHand":
            return GiPokerHand;
        case "gi:GiPoland":
            return GiPoland;
        case "gi:GiPolarBear":
            return GiPolarBear;
        case "gi:GiPolarStar":
            return GiPolarStar;
        case "gi:GiPoliceBadge":
            return GiPoliceBadge;
        case "gi:GiPoliceCar":
            return GiPoliceCar;
        case "gi:GiPoliceOfficerHead":
            return GiPoliceOfficerHead;
        case "gi:GiPoliceTarget":
            return GiPoliceTarget;
        case "gi:GiPollenDust":
            return GiPollenDust;
        case "gi:GiPoloShirt":
            return GiPoloShirt;
        case "gi:GiPoncho":
            return GiPoncho;
        case "gi:GiPoolDive":
            return GiPoolDive;
        case "gi:GiPoolTableCorner":
            return GiPoolTableCorner;
        case "gi:GiPoolTriangle":
            return GiPoolTriangle;
        case "gi:GiPopcorn":
            return GiPopcorn;
        case "gi:GiPopeCrown":
            return GiPopeCrown;
        case "gi:GiPoppy":
            return GiPoppy;
        case "gi:GiPorcelainVase":
            return GiPorcelainVase;
        case "gi:GiPorcupine":
            return GiPorcupine;
        case "gi:GiPorcupinefish":
            return GiPorcupinefish;
        case "gi:GiPortal":
            return GiPortal;
        case "gi:GiPortculis":
            return GiPortculis;
        case "gi:GiPortrait":
            return GiPortrait;
        case "gi:GiPortugal":
            return GiPortugal;
        case "gi:GiPositionMarker":
            return GiPositionMarker;
        case "gi:GiPostOffice":
            return GiPostOffice;
        case "gi:GiPostStamp":
            return GiPostStamp;
        case "gi:GiPotato":
            return GiPotato;
        case "gi:GiPotionBall":
            return GiPotionBall;
        case "gi:GiPotionOfMadness":
            return GiPotionOfMadness;
        case "gi:GiPounce":
            return GiPounce;
        case "gi:GiPouringChalice":
            return GiPouringChalice;
        case "gi:GiPouringPot":
            return GiPouringPot;
        case "gi:GiPowderBag":
            return GiPowderBag;
        case "gi:GiPowder":
            return GiPowder;
        case "gi:GiPowerButton":
            return GiPowerButton;
        case "gi:GiPowerGenerator":
            return GiPowerGenerator;
        case "gi:GiPowerLightning":
            return GiPowerLightning;
        case "gi:GiPowerRing":
            return GiPowerRing;
        case "gi:GiPrayerBeads":
            return GiPrayerBeads;
        case "gi:GiPrayer":
            return GiPrayer;
        case "gi:GiPrayingMantis":
            return GiPrayingMantis;
        case "gi:GiPresent":
            return GiPresent;
        case "gi:GiPressureCooker":
            return GiPressureCooker;
        case "gi:GiPrettyFangs":
            return GiPrettyFangs;
        case "gi:GiPretzel":
            return GiPretzel;
        case "gi:GiPreviousButton":
            return GiPreviousButton;
        case "gi:GiPriceTag":
            return GiPriceTag;
        case "gi:GiPrimitiveNecklace":
            return GiPrimitiveNecklace;
        case "gi:GiPrimitiveTorch":
            return GiPrimitiveTorch;
        case "gi:GiPrism":
            return GiPrism;
        case "gi:GiPrisoner":
            return GiPrisoner;
        case "gi:GiPrivateFirstClass":
            return GiPrivateFirstClass;
        case "gi:GiPrivate":
            return GiPrivate;
        case "gi:GiProcessor":
            return GiProcessor;
        case "gi:GiProfit":
            return GiProfit;
        case "gi:GiProgression":
            return GiProgression;
        case "gi:GiPropellerBeanie":
            return GiPropellerBeanie;
        case "gi:GiProtectionGlasses":
            return GiProtectionGlasses;
        case "gi:GiPschentDoubleCrown":
            return GiPschentDoubleCrown;
        case "gi:GiPsychicWaves":
            return GiPsychicWaves;
        case "gi:GiPterodactylus":
            return GiPterodactylus;
        case "gi:GiPteruges":
            return GiPteruges;
        case "gi:GiPublicSpeaker":
            return GiPublicSpeaker;
        case "gi:GiPull":
            return GiPull;
        case "gi:GiPulleyHook":
            return GiPulleyHook;
        case "gi:GiPulse":
            return GiPulse;
        case "gi:GiPummeled":
            return GiPummeled;
        case "gi:GiPumpkinLantern":
            return GiPumpkinLantern;
        case "gi:GiPumpkinMask":
            return GiPumpkinMask;
        case "gi:GiPumpkin":
            return GiPumpkin;
        case "gi:GiPunchBlast":
            return GiPunchBlast;
        case "gi:GiPunch":
            return GiPunch;
        case "gi:GiPunchingBag":
            return GiPunchingBag;
        case "gi:GiPuppet":
            return GiPuppet;
        case "gi:GiPurpleTentacle":
            return GiPurpleTentacle;
        case "gi:GiPush":
            return GiPush;
        case "gi:GiPuzzle":
            return GiPuzzle;
        case "gi:GiPylon":
            return GiPylon;
        case "gi:GiPyre":
            return GiPyre;
        case "gi:GiPyromaniac":
            return GiPyromaniac;
        case "gi:GiQaitbayCitadel":
            return GiQaitbayCitadel;
        case "gi:GiQuakeStomp":
            return GiQuakeStomp;
        case "gi:GiQueenCrown":
            return GiQueenCrown;
        case "gi:GiQuickMan":
            return GiQuickMan;
        case "gi:GiQuickSlash":
            return GiQuickSlash;
        case "gi:GiQuicksand":
            return GiQuicksand;
        case "gi:GiQuillInk":
            return GiQuillInk;
        case "gi:GiQuill":
            return GiQuill;
        case "gi:GiQuiver":
            return GiQuiver;
        case "gi:GiRabbitHead":
            return GiRabbitHead;
        case "gi:GiRabbit":
            return GiRabbit;
        case "gi:GiRaccoonHead":
            return GiRaccoonHead;
        case "gi:GiRaceCar":
            return GiRaceCar;
        case "gi:GiRadarCrossSection":
            return GiRadarCrossSection;
        case "gi:GiRadarDish":
            return GiRadarDish;
        case "gi:GiRadarSweep":
            return GiRadarSweep;
        case "gi:GiRaddish":
            return GiRaddish;
        case "gi:GiRadialBalance":
            return GiRadialBalance;
        case "gi:GiRadiations":
            return GiRadiations;
        case "gi:GiRadioTower":
            return GiRadioTower;
        case "gi:GiRadioactive":
            return GiRadioactive;
        case "gi:GiRaft":
            return GiRaft;
        case "gi:GiRaggedWound":
            return GiRaggedWound;
        case "gi:GiRailRoad":
            return GiRailRoad;
        case "gi:GiRailway":
            return GiRailway;
        case "gi:GiRainbowStar":
            return GiRainbowStar;
        case "gi:GiRaining":
            return GiRaining;
        case "gi:GiRaiseSkeleton":
            return GiRaiseSkeleton;
        case "gi:GiRaiseZombie":
            return GiRaiseZombie;
        case "gi:GiRake":
            return GiRake;
        case "gi:GiRallyTheTroops":
            return GiRallyTheTroops;
        case "gi:GiRamProfile":
            return GiRamProfile;
        case "gi:GiRam":
            return GiRam;
        case "gi:GiRanchGate":
            return GiRanchGate;
        case "gi:GiRank1":
            return GiRank1;
        case "gi:GiRank2":
            return GiRank2;
        case "gi:GiRank3":
            return GiRank3;
        case "gi:GiRapidshareArrow":
            return GiRapidshareArrow;
        case "gi:GiRaspberry":
            return GiRaspberry;
        case "gi:GiRat":
            return GiRat;
        case "gi:GiRattlesnake":
            return GiRattlesnake;
        case "gi:GiRaven":
            return GiRaven;
        case "gi:GiRawEgg":
            return GiRawEgg;
        case "gi:GiRayGun":
            return GiRayGun;
        case "gi:GiRazorBlade":
            return GiRazorBlade;
        case "gi:GiRazor":
            return GiRazor;
        case "gi:GiReactor":
            return GiReactor;
        case "gi:GiRead":
            return GiRead;
        case "gi:GiReaperScythe":
            return GiReaperScythe;
        case "gi:GiRearAura":
            return GiRearAura;
        case "gi:GiReceiveMoney":
            return GiReceiveMoney;
        case "gi:GiRecycle":
            return GiRecycle;
        case "gi:GiRedCarpet":
            return GiRedCarpet;
        case "gi:GiReed":
            return GiReed;
        case "gi:GiRefinery":
            return GiRefinery;
        case "gi:GiRegeneration":
            return GiRegeneration;
        case "gi:GiRelationshipBounds":
            return GiRelationshipBounds;
        case "gi:GiRelicBlade":
            return GiRelicBlade;
        case "gi:GiReloadGunBarrel":
            return GiReloadGunBarrel;
        case "gi:GiRemedy":
            return GiRemedy;
        case "gi:GiRempart":
            return GiRempart;
        case "gi:GiReptileTail":
            return GiReptileTail;
        case "gi:GiResize":
            return GiResize;
        case "gi:GiResonance":
            return GiResonance;
        case "gi:GiRestingVampire":
            return GiRestingVampire;
        case "gi:GiReticule":
            return GiReticule;
        case "gi:GiRetroController":
            return GiRetroController;
        case "gi:GiReturnArrow":
            return GiReturnArrow;
        case "gi:GiRevolt":
            return GiRevolt;
        case "gi:GiRevolver":
            return GiRevolver;
        case "gi:GiRhinocerosHorn":
            return GiRhinocerosHorn;
        case "gi:GiRialtoBridge":
            return GiRialtoBridge;
        case "gi:GiRibbonMedal":
            return GiRibbonMedal;
        case "gi:GiRibbonShield":
            return GiRibbonShield;
        case "gi:GiRibbon":
            return GiRibbon;
        case "gi:GiRibcage":
            return GiRibcage;
        case "gi:GiRiceCooker":
            return GiRiceCooker;
        case "gi:GiRifle":
            return GiRifle;
        case "gi:GiRingBox":
            return GiRingBox;
        case "gi:GiRingMould":
            return GiRingMould;
        case "gi:GiRing":
            return GiRing;
        case "gi:GiRingedBeam":
            return GiRingedBeam;
        case "gi:GiRingedPlanet":
            return GiRingedPlanet;
        case "gi:GiRingingAlarm":
            return GiRingingAlarm;
        case "gi:GiRingingBell":
            return GiRingingBell;
        case "gi:GiRingmaster":
            return GiRingmaster;
        case "gi:GiRiotShield":
            return GiRiotShield;
        case "gi:GiRiver":
            return GiRiver;
        case "gi:GiRoad":
            return GiRoad;
        case "gi:GiRoastChicken":
            return GiRoastChicken;
        case "gi:GiRobberHand":
            return GiRobberHand;
        case "gi:GiRobberMask":
            return GiRobberMask;
        case "gi:GiRobber":
            return GiRobber;
        case "gi:GiRobe":
            return GiRobe;
        case "gi:GiRobinHoodHat":
            return GiRobinHoodHat;
        case "gi:GiRobotAntennas":
            return GiRobotAntennas;
        case "gi:GiRobotGolem":
            return GiRobotGolem;
        case "gi:GiRobotGrab":
            return GiRobotGrab;
        case "gi:GiRobotHelmet":
            return GiRobotHelmet;
        case "gi:GiRobotLeg":
            return GiRobotLeg;
        case "gi:GiRockGolem":
            return GiRockGolem;
        case "gi:GiRock":
            return GiRock;
        case "gi:GiRocketFlight":
            return GiRocketFlight;
        case "gi:GiRocketThruster":
            return GiRocketThruster;
        case "gi:GiRocket":
            return GiRocket;
        case "gi:GiRockingChair":
            return GiRockingChair;
        case "gi:GiRodOfAsclepius":
            return GiRodOfAsclepius;
        case "gi:GiRogue":
            return GiRogue;
        case "gi:GiRolledCloth":
            return GiRolledCloth;
        case "gi:GiRollerSkate":
            return GiRollerSkate;
        case "gi:GiRollingBomb":
            return GiRollingBomb;
        case "gi:GiRollingDiceCup":
            return GiRollingDiceCup;
        case "gi:GiRollingDices":
            return GiRollingDices;
        case "gi:GiRollingEnergy":
            return GiRollingEnergy;
        case "gi:GiRollingSuitcase":
            return GiRollingSuitcase;
        case "gi:GiRomanShield":
            return GiRomanShield;
        case "gi:GiRomanToga":
            return GiRomanToga;
        case "gi:GiRooster":
            return GiRooster;
        case "gi:GiRootTip":
            return GiRootTip;
        case "gi:GiRopeBridge":
            return GiRopeBridge;
        case "gi:GiRopeCoil":
            return GiRopeCoil;
        case "gi:GiRopeDart":
            return GiRopeDart;
        case "gi:GiRopeway":
            return GiRopeway;
        case "gi:GiRosaShield":
            return GiRosaShield;
        case "gi:GiRose":
            return GiRose;
        case "gi:GiRotaryPhone":
            return GiRotaryPhone;
        case "gi:GiRoughWound":
            return GiRoughWound;
        case "gi:GiRoundBottomFlask":
            return GiRoundBottomFlask;
        case "gi:GiRoundKnob":
            return GiRoundKnob;
        case "gi:GiRoundShield":
            return GiRoundShield;
        case "gi:GiRoundSilo":
            return GiRoundSilo;
        case "gi:GiRoundStar":
            return GiRoundStar;
        case "gi:GiRoundStrawBale":
            return GiRoundStrawBale;
        case "gi:GiRoundStruck":
            return GiRoundStruck;
        case "gi:GiRoundTable":
            return GiRoundTable;
        case "gi:GiRoyalLove":
            return GiRoyalLove;
        case "gi:GiRss":
            return GiRss;
        case "gi:GiRubElHizb":
            return GiRubElHizb;
        case "gi:GiRubberBoot":
            return GiRubberBoot;
        case "gi:GiRugbyConversion":
            return GiRugbyConversion;
        case "gi:GiRuleBook":
            return GiRuleBook;
        case "gi:GiRun":
            return GiRun;
        case "gi:GiRuneStone":
            return GiRuneStone;
        case "gi:GiRuneSword":
            return GiRuneSword;
        case "gi:GiRunningNinja":
            return GiRunningNinja;
        case "gi:GiRunningShoe":
            return GiRunningShoe;
        case "gi:GiRupee":
            return GiRupee;
        case "gi:GiRustySword":
            return GiRustySword;
        case "gi:GiSBrick":
            return GiSBrick;
        case "gi:GiSaberAndPistol":
            return GiSaberAndPistol;
        case "gi:GiSaberSlash":
            return GiSaberSlash;
        case "gi:GiSaberTooth":
            return GiSaberTooth;
        case "gi:GiSaberToothedCatHead":
            return GiSaberToothedCatHead;
        case "gi:GiSabersChoc":
            return GiSabersChoc;
        case "gi:GiSacrificialDagger":
            return GiSacrificialDagger;
        case "gi:GiSadCrab":
            return GiSadCrab;
        case "gi:GiSaddle":
            return GiSaddle;
        case "gi:GiSafetyPin":
            return GiSafetyPin;
        case "gi:GiSagittarius":
            return GiSagittarius;
        case "gi:GiSai":
            return GiSai;
        case "gi:GiSail":
            return GiSail;
        case "gi:GiSailboat":
            return GiSailboat;
        case "gi:GiSaintBasilCathedral":
            return GiSaintBasilCathedral;
        case "gi:GiSaiyanSuit":
            return GiSaiyanSuit;
        case "gi:GiSalamander":
            return GiSalamander;
        case "gi:GiSalmon":
            return GiSalmon;
        case "gi:GiSaloonDoors":
            return GiSaloonDoors;
        case "gi:GiSaloon":
            return GiSaloon;
        case "gi:GiSaltShaker":
            return GiSaltShaker;
        case "gi:GiSamaraMosque":
            return GiSamaraMosque;
        case "gi:GiSamuraiHelmet":
            return GiSamuraiHelmet;
        case "gi:GiSamusHelmet":
            return GiSamusHelmet;
    }
}