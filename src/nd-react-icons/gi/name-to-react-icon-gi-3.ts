import type {IconType} from "react-icons";

import {
    GiSandCastle,
    GiSandSnake,
    GiSandal,
    GiSandsOfTime,
    GiSandstorm,
    GiSandwich,
    GiSaphir,
    GiSarcophagus,
    GiSasquatch,
    GiSatelliteCommunication,
    GiSattelite,
    GiSaucepan,
    GiSauropodHead,
    GiSauropodSkeleton,
    GiSausage,
    GiSausagesRibbon,
    GiSaveArrow,
    GiSave,
    GiSawClaw,
    GiSawedOffShotgun,
    GiSaxophone,
    GiScabbard,
    GiScaleMail,
    GiScales,
    GiScallop,
    GiScalpelStrike,
    GiScalpel,
    GiScarWound,
    GiScarabBeetle,
    GiScarecrow,
    GiSchoolBag,
    GiSchoolOfFish,
    GiScissors,
    GiScooter,
    GiScorpio,
    GiScorpionTail,
    GiScorpion,
    GiScoutShip,
    GiScreaming,
    GiScreenImpact,
    GiScrew,
    GiScrewdriver,
    GiScrollQuill,
    GiScrollUnfurled,
    GiScubaMask,
    GiScubaTanks,
    GiScythe,
    GiSeaCliff,
    GiSeaCreature,
    GiSeaDragon,
    GiSeaSerpent,
    GiSeaStar,
    GiSeaTurtle,
    GiSeagull,
    GiSeahorse,
    GiSeatedMouse,
    GiSecretBook,
    GiSecretDoor,
    GiSecurityGate,
    GiSeedling,
    GiSelect,
    GiSelfLove,
    GiSellCard,
    GiSemiClosedEye,
    GiSensuousness,
    GiSentryGun,
    GiSergeant,
    GiSerratedSlash,
    GiServerRack,
    GiSesame,
    GiSettingsKnobs,
    GiSevenPointedStar,
    GiSeveredHand,
    GiSewedShell,
    GiSewingMachine,
    GiSewingNeedle,
    GiSewingString,
    GiSextant,
    GiShadowFollower,
    GiShadowGrasp,
    GiShakingHands,
    GiShamblingMound,
    GiShamblingZombie,
    GiShamrock,
    GiShardSword,
    GiShare,
    GiSharkBite,
    GiSharkFin,
    GiSharkJaws,
    GiSharpAxe,
    GiSharpCrown,
    GiSharpHalberd,
    GiSharpLips,
    GiSharpShuriken,
    GiSharpSmile,
    GiSharpedTeethSkull,
    GiShatter,
    GiShatteredGlass,
    GiShatteredHeart,
    GiShatteredSword,
    GiShears,
    GiSheep,
    GiSheikahEye,
    GiShepherdsCrook,
    GiSherlockHolmes,
    GiShieldBash,
    GiShieldBounces,
    GiShieldDisabled,
    GiShieldEchoes,
    GiShieldImpact,
    GiShieldOpposition,
    GiShieldReflect,
    GiShield,
    GiShieldcomb,
    GiShiningClaw,
    GiShiningHeart,
    GiShiningSword,
    GiShintoShrineMirror,
    GiShintoShrine,
    GiShinyApple,
    GiShinyEntrance,
    GiShinyIris,
    GiShinyOmega,
    GiShinyPurse,
    GiShipBow,
    GiShipWheel,
    GiShipWreck,
    GiShirtButton,
    GiShirt,
    GiShoebillStork,
    GiShoonerSailboat,
    GiShop,
    GiShoppingBag,
    GiShoppingCart,
    GiShorts,
    GiShotgunRounds,
    GiShotgun,
    GiShoulderArmor,
    GiShoulderBag,
    GiShoulderScales,
    GiShouting,
    GiShower,
    GiShrimp,
    GiShrug,
    GiShurikenAperture,
    GiShuriken,
    GiShutRose,
    GiShuttlecock,
    GiSickle,
    GiSideswipe,
    GiSiegeRam,
    GiSiegeTower,
    GiSightDisabled,
    GiSilence,
    GiSilenced,
    GiSilex,
    GiSilverBullet,
    GiSinagot,
    GiSing,
    GiSinkingShip,
    GiSinkingTrap,
    GiSinusoidalBeam,
    GiSiren,
    GiSittingDog,
    GiSixEyes,
    GiSkateboard,
    GiSkeletalHand,
    GiSkeletonInside,
    GiSkeletonKey,
    GiSkeleton,
    GiSkiBoot,
    GiSkidMark,
    GiSkier,
    GiSkills,
    GiSkippingRope,
    GiSkirt,
    GiSkis,
    GiSkullBolt,
    GiSkullCrack,
    GiSkullCrossedBones,
    GiSkullInJar,
    GiSkullMask,
    GiSkullRing,
    GiSkullSabertooth,
    GiSkullShield,
    GiSkullSignet,
    GiSkullSlices,
    GiSkullStaff,
    GiSkullWithSyringe,
    GiSlalom,
    GiSlap,
    GiSlashedShield,
    GiSlaveryWhip,
    GiSleepingBag,
    GiSleepy,
    GiSleevelessJacket,
    GiSleevelessTop,
    GiSlicedBread,
    GiSlicedMushroom,
    GiSlicedSausage,
    GiSlicingArrow,
    GiSlime,
    GiSling,
    GiSlingshot,
    GiSlipknot,
    GiSlippers,
    GiSloth,
    GiSlowBlob,
    GiSlumberingSanctuary,
    GiSly,
    GiSmallFire,
    GiSmallFishingSailboat,
    GiSmart,
    GiSmartphone,
    GiSmashArrows,
    GiSmitten,
    GiSmokeBomb,
    GiSmokingFinger,
    GiSmokingOrb,
    GiSmokingPipe,
    GiSmokingVolcano,
    GiSnailEyes,
    GiSnail,
    GiSnakeBite,
    GiSnakeEgg,
    GiSnakeJar,
    GiSnakeSpiral,
    GiSnakeTongue,
    GiSnakeTotem,
    GiSnake,
    GiSnatch,
    GiSniffingDog,
    GiSnitchQuidditchBall,
    GiSnorkel,
    GiSnout,
    GiSnowBottle,
    GiSnowboard,
    GiSnowflake1,
    GiSnowflake2,
    GiSnowing,
    GiSnowman,
    GiSoapExperiment,
    GiSoap,
    GiSoccerBall,
    GiSoccerField,
    GiSoccerKick,
    GiSocks,
    GiSodaCan,
    GiSofa,
    GiSolarPower,
    GiSolarSystem,
    GiSolarTime,
    GiSolderingIron,
    GiSolidLeaf,
    GiSombrero,
    GiSonicBoom,
    GiSonicLightning,
    GiSonicScreech,
    GiSonicShoes,
    GiSonicShout,
    GiSoulVessel,
    GiSoundOff,
    GiSoundOn,
    GiSoundWaves,
    GiSouthAfricaFlag,
    GiSouthAfrica,
    GiSouthAmerica,
    GiSouthKorea,
    GiSpaceNeedle,
    GiSpaceShuttle,
    GiSpaceSuit,
    GiSpaceship,
    GiSpadeSkull,
    GiSpade,
    GiSpades,
    GiSpain,
    GiSpanner,
    GiSparkPlug,
    GiSparkSpirit,
    GiSparkles,
    GiSparklingSabre,
    GiSparkyBomb,
    GiSparrow,
    GiSpartanHelmet,
    GiSpartan,
    GiSpatter,
    GiSpawnNode,
    GiSpeakerOff,
    GiSpeaker,
    GiSpearFeather,
    GiSpearHook,
    GiSpearfishing,
    GiSpears,
    GiSpectacleLenses,
    GiSpectacles,
    GiSpectreM4,
    GiSpectre,
    GiSpeedBoat,
    GiSpeedometer,
    GiSpellBook,
    GiSpermWhale,
    GiSpiderAlt,
    GiSpiderBot,
    GiSpiderEye,
    GiSpiderFace,
    GiSpiderMask,
    GiSpiderWeb,
    GiSpikeball,
    GiSpikedArmor,
    GiSpikedBall,
    GiSpikedBat,
    GiSpikedCollar,
    GiSpikedDragonHead,
    GiSpikedFence,
    GiSpikedHalo,
    GiSpikedMace,
    GiSpikedShell,
    GiSpikedShield,
    GiSpikedShoulderArmor,
    GiSpikedSnail,
    GiSpikedTail,
    GiSpikedTentacle,
    GiSpikedTrunk,
    GiSpikedWall,
    GiSpikesFull,
    GiSpikesHalf,
    GiSpikesInit,
    GiSpikes,
    GiSpikyEclipse,
    GiSpikyExplosion,
    GiSpikyField,
    GiSpikyPit,
    GiSpikyWing,
    GiSpill,
    GiSpinalCoil,
    GiSpineArrow,
    GiSpinningBlades,
    GiSpinningRibbons,
    GiSpinningSword,
    GiSpinningTop,
    GiSpinningWheel,
    GiSpiralArrow,
    GiSpiralBloom,
    GiSpiralBottle,
    GiSpiralHilt,
    GiSpiralLollipop,
    GiSpiralShell,
    GiSpiralTentacle,
    GiSpiralThrust,
    GiSplash,
    GiSplashyStream,
    GiSplitArrows,
    GiSplitBody,
    GiSplitCross,
    GiSplurt,
    GiSpockHand,
    GiSpookyHouse,
    GiSpoon,
    GiSportMedal,
    GiSpotedFlower,
    GiSpottedArrowhead,
    GiSpottedBug,
    GiSpottedMushroom,
    GiSpottedWound,
    GiSpoutnik,
    GiSpray,
    GiSpring,
    GiSprint,
    GiSproutDisc,
    GiSprout,
    GiSpy,
    GiSpyglass,
    GiSquareBottle,
    GiSquare,
    GiSquib,
    GiSquidHead,
    GiSquid,
    GiSquirrel,
    GiSriLanka,
    GiStabbedNote,
    GiStable,
    GiStack,
    GiStagHead,
    GiStahlhelm,
    GiStairsCake,
    GiStairsGoal,
    GiStairs,
    GiStakeHammer,
    GiStakesFence,
    GiStalactites,
    GiStalagtite,
    GiStamper,
    GiStandingPotion,
    GiStaplerHeavyDuty,
    GiStaplerPneumatic,
    GiStapler,
    GiStarAltar,
    GiStarCycle,
    GiStarFlag,
    GiStarFormation,
    GiStarGate,
    GiStarKey,
    GiStarMedal,
    GiStarProminences,
    GiStarPupil,
    GiStarSattelites,
    GiStarShuriken,
    GiStarSkull,
    GiStarStruck,
    GiStarSwirl,
    GiStarfighter,
    GiStarsStack,
    GiStaryu,
    GiStaticGuard,
    GiStaticWaves,
    GiStatic,
    GiSteak,
    GiStealthBomber,
    GiSteamBlast,
    GiSteamLocomotive,
    GiSteam,
    GiSteampunkGoggles,
    GiSteelClaws,
    GiSteelDoor,
    GiSteeltoeBoots,
    GiSteelwingEmblem,
    GiSteeringWheel,
    GiStegosaurusScales,
    GiStethoscope,
    GiSteyrAug,
    GiStickFrame,
    GiStickGrenade,
    GiStickSplitting,
    GiStickingPlaster,
    GiStickyBoot,
    GiStigmata,
    GiStiletto,
    GiStitchedWound,
    GiStockpiles,
    GiStomach,
    GiStompTornado,
    GiStomp,
    GiStoneAxe,
    GiStoneBlock,
    GiStoneBridge,
    GiStoneBust,
    GiStoneCrafting,
    GiStonePath,
    GiStonePile,
    GiStoneSpear,
    GiStoneSphere,
    GiStoneStack,
    GiStoneTablet,
    GiStoneThrone,
    GiStoneTower,
    GiStoneWall,
    GiStoneWheel,
    GiStonedSkull,
    GiStopSign,
    GiStopwatch,
    GiStorkDelivery,
    GiStrafe,
    GiStraightPipe,
    GiStrawberry,
    GiStreetLight,
    GiStrikingArrows,
    GiStrikingBalls,
    GiStrikingClamps,
    GiStrikingDiamonds,
    GiStrikingSplinter,
    GiStripedSun,
    GiStripedSword,
    GiStrongMan,
    GiStrong,
    GiStrongbox,
    GiStumpRegrowth,
    GiStunGrenade,
    GiSubmarineMissile,
    GiSubmarine,
    GiSubway,
    GiSuckeredTentacle,
    GiSugarCane,
    GiSuicide,
    GiSuitcase,
    GiSuits,
    GiSummits,
    GiSunCloud,
    GiSunPriest,
    GiSunRadiations,
    GiSunSpear,
    GiSun,
    GiSunbeams,
    GiSundial,
    GiSunflower,
    GiSunglasses,
    GiSunkenEye,
    GiSunrise,
    GiSunset,
    GiSuperMushroom,
    GiSupersonicArrow,
    GiSupersonicBullet,
    GiSurfBoard,
    GiSurferVan,
    GiSurprisedSkull,
    GiSurprised,
    GiSurroundedEye,
    GiSurroundedShield,
    GiSushis,
    GiSuspensionBridge,
    GiSuspicious,
    GiSverdIFjell,
    GiSwallow,
    GiSwallower,
    GiSwampBat,
    GiSwamp,
    GiSwanBreeze,
    GiSwan,
    GiSwapBag,
    GiSwimfins,
    GiSwipeCard,
    GiSwirlRing,
    GiSwirlString,
    GiSwirledShell,
    GiSwissArmyKnife,
    GiSwitchWeapon,
    GiSwitchblade,
    GiSwitzerland,
    GiSwordAltar,
    GiSwordArray,
    GiSwordBrandish,
    GiSwordBreak,
    GiSwordClash,
    GiSwordHilt,
    GiSwordInStone,
    GiSwordMold,
    GiSwordSlice,
    GiSwordSmithing,
    GiSwordSpade,
    GiSwordSpin,
    GiSwordTie,
    GiSwordWound,
    GiSwordman,
    GiSwordsEmblem,
    GiSwordsPower,
    GiSwordwoman,
    GiSydneyOperaHouse,
    GiSyringe,
    GiTBrick,
    GiTRexSkull,
    GiTShirt,
    GiTabiBoot,
    GiTable,
    GiTablet,
    GiTabletopPlayers,
    GiTacos,
    GiTadpole,
    GiTakeMyMoney,
    GiTalk,
    GiTallBridge,
    GiTambourine,
    GiTangerine,
    GiTankTop,
    GiTankTread,
    GiTank,
    GiTanzania,
    GiTap,
    GiTapir,
    GiTargetArrows,
    GiTargetDummy,
    GiTargetLaser,
    GiTargetPoster,
    GiTargetPrize,
    GiTargetShot,
    GiTargeted,
    GiTargeting,
    GiTatteredBanner,
    GiTaurus,
    GiTavernSign,
    GiTeacher,
    GiTeamDowngrade,
    GiTeamIdea,
    GiTeamUpgrade,
    GiTeapotLeaves,
    GiTeapot,
    GiTearTracks,
    GiTearing,
    GiTec9,
    GiTechnoHeart,
    GiTeePipe,
    GiTelefrag,
    GiTelepathy,
    GiTeleport,
    GiTelescopicBaton,
    GiTellerMine,
    GiTemplarEye,
    GiTemplarHeart,
    GiTemplarShield,
    GiTempleDoor,
    GiTempleGate,
    GiTemporaryShield,
    GiTemptation,
    GiTennisBall,
    GiTennisCourt,
    GiTennisRacket,
    GiTensionSnowflake,
    GiTentacleHeart,
    GiTentacleStrike,
    GiTentaclesBarrier,
    GiTentaclesSkull,
    GiTentacurl,
    GiTerror,
    GiTeslaCoil,
    GiTeslaTurret,
    GiTesla,
    GiTestTubes,
    GiTexas,
    GiTheaterCurtains,
    GiTheater,
    GiThermometerCold,
    GiThermometerHot,
    GiThermometerScale,
    GiThink,
    GiThirdEye,
    GiThompsonM1,
    GiThompsonM1928,
    GiThorFist,
    GiThorHammer,
    GiThornHelix,
    GiThornedArrow,
    GiThornyTentacle,
    GiThornyVine,
    GiThreeBurningBalls,
    GiThreeFriends,
    GiThreeKeys,
    GiThreeLeaves,
    GiThreePointedShuriken,
    GiThroneKing,
    GiThrowingBall,
    GiThrownCharcoal,
    GiThrownDaggers,
    GiThrownKnife,
    GiThrownSpear,
    GiThrustBend,
    GiThrust,
    GiThumbDown,
    GiThumbUp,
    GiThunderBlade,
    GiThunderSkull,
    GiThunderStruck,
    GiThunderball,
    GiThwomp,
    GiTiara,
    GiTicTacToe,
    GiTick,
    GiTicket,
    GiTie,
    GiTiedScroll,
    GiTigerHead,
    GiTiger,
    GiTightrope,
    GiTimeBomb,
    GiTimeDynamite,
    GiTimeSynchronization,
    GiTimeTrap,
    GiTinker,
    GiTipi,
    GiTireIronCross,
    GiTireIron,
    GiTireTracks,
    GiTiredEye,
    GiToadTeeth,
    GiToaster,
    GiToggles,
    GiToken,
    GiTomahawk,
    GiTomato,
    GiTombstone,
    GiTongue,
    GiToolbox,
    GiTooth,
    GiToothbrush,
    GiTopHat,
    GiTopPaw,
    GiTopaz,
    GiTorc,
    GiTorch,
    GiTornadoDiscs,
    GiTornado,
    GiTorpedo,
    GiTortoise,
    GiTotemHead,
    GiTotemMask,
    GiTotem,
    GiToucan,
    GiTowTruck,
    GiTowel,
    GiTowerBridge,
    GiTowerFall,
    GiTowerFlag,
    GiToyMallet,
    GiTrackedRobot,
    GiTrade,
    GiTrafficCone,
    GiTrafficLightsGreen,
    GiTrafficLightsOrange,
    GiTrafficLightsReadyToGo,
    GiTrafficLightsRed,
    GiTrail,
    GiTrample,
    GiTransform,
    GiTransfuse,
    GiTransparentSlime,
    GiTransparentTubes,
    GiTransportationRings,
    GiTrapMask,
    GiTrashCan,
    GiTravelDress,
    GiTread,
    GiTreasureMap,
    GiTrebuchet,
    GiTreeBeehive,
    GiTreeBranch,
    GiTreeDoor,
    GiTreeFace,
    GiTreeGrowth,
    GiTreeRoots,
    GiTreeSwing,
    GiTreehouse,
    GiTrefoilLily,
    GiTrefoilShuriken,
    GiTrenchAssault,
    GiTrenchBodyArmor,
    GiTrenchKnife,
    GiTrenchSpade,
    GiTriangleTarget,
    GiTribalGear,
    GiTribalMask,
    GiTribalPendant,
    GiTribalShield,
    GiTribunalJury,
    GiTriceratopsHead,
    GiTridentShield,
    GiTrident,
    GiTriforce,
    GiTriggerHurt,
    GiTrilobite,
    GiTrinacria,
    GiTriorb,
    GiTripleBeak,
    GiTripleClaws,
    GiTripleCorn,
    GiTripleGate,
    GiTripleLock,
    GiTripleNeedle,
    GiTriplePlier,
    GiTripleScratches,
    GiTripleShells,
    GiTripleSkulls,
    GiTripleYin,
    GiTripwire,
    GiTriquetra,
    GiTrireme,
    GiTritonHead,
    GiTroglodyte,
    GiTrojanHorse,
    GiTroll,
    GiTrombone,
    GiTronArrow,
    GiTrophiesShelf,
    GiTrophyCup,
    GiTrophy,
    GiTropicalFish,
    GiTrousers,
    GiTrowel,
    GiTruce,
    GiTruck,
    GiTrumpetFlag,
    GiTrumpet,
    GiTrunkMushroom,
    GiTuba,
    GiTumbleweed,
    GiTumor,
    GiTumulus,
    GiTunePitch,
    GiTunisia,
    GiTurban,
    GiTurbine,
    GiTurd,
    GiTurnstile,
    GiTurret,
    GiTurtleShell,
    GiTurtle,
    GiTusksFlag,
    GiTvRemote,
    GiTvTower,
    GiTv,
    GiTwinShell,
    GiTwirlCenter,
    GiTwirlyFlower,
    GiTwister,
    GiTwoCoins,
    GiTwoFeathers,
    GiTwoHandedSword,
    GiTwoShadows,
    GiTyre,
    GiUbisoftSun,
    GiUdder,
    GiUfo,
    GiUltrasound,
    GiUluru,
    GiUmbrellaBayonet,
    GiUmbrella,
    GiUnbalanced,
    GiUncertainty,
    GiUndergroundCave,
    GiUnderhand,
    GiUnderwearShorts,
    GiUnderwear,
    GiUnfriendlyFire,
    GiUnicorn,
    GiUnicycle,
    GiUnionJack,
    GiUnlitBomb,
    GiUnlitCandelabra,
    GiUnlocking,
    GiUnplugged,
    GiUnstableOrb,
    GiUnstableProjectile,
    GiUpCard,
    GiUpgrade,
    GiUprising,
    GiUrsaMajor,
    GiUruguay,
    GiUsaFlag,
    GiUsable,
    GiUsbKey,
    GiUshanka,
    GiUzi,
    GiVacuumCleaner,
    GiValley,
    GiValve,
    GiVampireCape,
    GiVampireDracula,
    GiVanDammeSplit,
    GiVanillaFlower,
    GiVelocipede,
    GiVelociraptorTracks,
    GiVelociraptor,
    GiVendingMachine,
    GiVenezuela,
    GiVenusFlytrap,
    GiVenusOfWillendorf,
    GiVerticalBanner,
    GiVerticalFlip,
    GiVhs,
    GiVial,
    GiVibratingBall,
    GiVibratingShield,
    GiVibratingSmartphone,
    GiVideoCamera,
    GiVideoConference,
    GiVikingChurch,
    GiVikingHead,
    GiVikingHelmet,
    GiVikingLonghouse,
    GiVikingShield,
    GiVileFluid,
    GiVillage,
    GiVineFlower,
    GiVineLeaf,
    GiVineWhip,
    GiVines,
    GiVintageRobot,
    GiViola,
    GiViolin,
    GiVirgo,
    GiVirtualMarker,
    GiVirus,
    GiVisoredHelm,
    GiVitruvianMan,
    GiVolcano,
    GiVolleyballBall,
    GiVomiting,
    GiVoodooDoll,
    GiVortex,
    GiVote,
    GiVrHeadset,
    GiVulture,
    GiVuvuzelas,
    GiWalk,
    GiWalkieTalkie,
    GiWalkingBoot,
    GiWalkingScout,
    GiWalkingTurret,
    GiWallLight,
    GiWallet,
    GiWalrusHead,
    GiWaltherPpk,
    GiWantedReward,
    GiWarAxe,
    GiWarBonnet,
    GiWarPick,
    GiWarhammer,
    GiWarlockEye,
    GiWarlockHood,
    GiWarpPipe,
    GiWashingMachine,
    GiWaspSting,
    GiWatch,
    GiWatchtower,
    GiWaterBolt,
    GiWaterBottle,
    GiWaterDivinerStick,
    GiWaterDrop,
    GiWaterFlask,
    GiWaterFountain,
    GiWaterGallon,
    GiWaterGun,
    GiWaterMill,
    GiWaterPolo,
    GiWaterRecycling,
    GiWaterSplash,
    GiWaterTank,
    GiWaterTower,
    GiWaterfall,
    GiWateringCan,
    GiWatermelon,
    GiWaveCrest,
    GiWaveStrike,
    GiWaveSurfer,
    GiWaves,
    GiWavyChains,
    GiWavyItinerary,
    GiWaxSeal,
    GiWaxTablet,
    GiWebSpit,
    GiWeightCrush,
    GiWeightLiftingDown,
    GiWeightLiftingUp,
    GiWeightScale,
    GiWeight,
    GiWell,
    GiWerewolf,
    GiWesternHat,
    GiWhaleTail,
    GiWheat,
    GiWheelbarrow,
    GiWhip,
    GiWhiplash,
    GiWhirlpoolShuriken,
    GiWhirlwind,
    GiWhisk,
    GiWhistle,
    GiWhiteBook,
    GiWhiteTower,
    GiWideArrowDunk,
    GiWifiRouter,
    GiWildfires,
    GiWilliamTellSkull,
    GiWilliamTell,
    GiWillowTree,
    GiWinchesterRifle,
    GiWindHole,
    GiWindSlap,
    GiWindTurbine,
    GiWindchimes,
    GiWindmill,
    GiWindowBars,
    GiWindow,
    GiWindpump,
    GiWindsock,
    GiWindyStripes,
    GiWineBottle,
    GiWineGlass,
    GiWingCloak,
    GiWingedArrow,
    GiWingedEmblem,
    GiWingedLeg,
    GiWingedScepter,
    GiWingedShield,
    GiWingedSword,
    GiWingfoot,
    GiWinterGloves,
    GiWinterHat,
    GiWireCoil,
    GiWireframeGlobe,
    GiWisdom,
    GiWitchFace,
    GiWitchFlight,
    GiWizardFace,
    GiWizardStaff,
    GiWok,
    GiWolfHead,
    GiWolfHowl,
    GiWolfTrap,
    GiWolverineClaws,
    GiWomanElfFace,
    GiWoodAxe,
    GiWoodBeam,
    GiWoodCabin,
} from "react-icons/gi"

export function nameToReactIcon_gi_3(iconName: string): IconType | undefined {

    switch(iconName) {
        case "gi:GiSandCastle":
            return GiSandCastle;
        case "gi:GiSandSnake":
            return GiSandSnake;
        case "gi:GiSandal":
            return GiSandal;
        case "gi:GiSandsOfTime":
            return GiSandsOfTime;
        case "gi:GiSandstorm":
            return GiSandstorm;
        case "gi:GiSandwich":
            return GiSandwich;
        case "gi:GiSaphir":
            return GiSaphir;
        case "gi:GiSarcophagus":
            return GiSarcophagus;
        case "gi:GiSasquatch":
            return GiSasquatch;
        case "gi:GiSatelliteCommunication":
            return GiSatelliteCommunication;
        case "gi:GiSattelite":
            return GiSattelite;
        case "gi:GiSaucepan":
            return GiSaucepan;
        case "gi:GiSauropodHead":
            return GiSauropodHead;
        case "gi:GiSauropodSkeleton":
            return GiSauropodSkeleton;
        case "gi:GiSausage":
            return GiSausage;
        case "gi:GiSausagesRibbon":
            return GiSausagesRibbon;
        case "gi:GiSaveArrow":
            return GiSaveArrow;
        case "gi:GiSave":
            return GiSave;
        case "gi:GiSawClaw":
            return GiSawClaw;
        case "gi:GiSawedOffShotgun":
            return GiSawedOffShotgun;
        case "gi:GiSaxophone":
            return GiSaxophone;
        case "gi:GiScabbard":
            return GiScabbard;
        case "gi:GiScaleMail":
            return GiScaleMail;
        case "gi:GiScales":
            return GiScales;
        case "gi:GiScallop":
            return GiScallop;
        case "gi:GiScalpelStrike":
            return GiScalpelStrike;
        case "gi:GiScalpel":
            return GiScalpel;
        case "gi:GiScarWound":
            return GiScarWound;
        case "gi:GiScarabBeetle":
            return GiScarabBeetle;
        case "gi:GiScarecrow":
            return GiScarecrow;
        case "gi:GiSchoolBag":
            return GiSchoolBag;
        case "gi:GiSchoolOfFish":
            return GiSchoolOfFish;
        case "gi:GiScissors":
            return GiScissors;
        case "gi:GiScooter":
            return GiScooter;
        case "gi:GiScorpio":
            return GiScorpio;
        case "gi:GiScorpionTail":
            return GiScorpionTail;
        case "gi:GiScorpion":
            return GiScorpion;
        case "gi:GiScoutShip":
            return GiScoutShip;
        case "gi:GiScreaming":
            return GiScreaming;
        case "gi:GiScreenImpact":
            return GiScreenImpact;
        case "gi:GiScrew":
            return GiScrew;
        case "gi:GiScrewdriver":
            return GiScrewdriver;
        case "gi:GiScrollQuill":
            return GiScrollQuill;
        case "gi:GiScrollUnfurled":
            return GiScrollUnfurled;
        case "gi:GiScubaMask":
            return GiScubaMask;
        case "gi:GiScubaTanks":
            return GiScubaTanks;
        case "gi:GiScythe":
            return GiScythe;
        case "gi:GiSeaCliff":
            return GiSeaCliff;
        case "gi:GiSeaCreature":
            return GiSeaCreature;
        case "gi:GiSeaDragon":
            return GiSeaDragon;
        case "gi:GiSeaSerpent":
            return GiSeaSerpent;
        case "gi:GiSeaStar":
            return GiSeaStar;
        case "gi:GiSeaTurtle":
            return GiSeaTurtle;
        case "gi:GiSeagull":
            return GiSeagull;
        case "gi:GiSeahorse":
            return GiSeahorse;
        case "gi:GiSeatedMouse":
            return GiSeatedMouse;
        case "gi:GiSecretBook":
            return GiSecretBook;
        case "gi:GiSecretDoor":
            return GiSecretDoor;
        case "gi:GiSecurityGate":
            return GiSecurityGate;
        case "gi:GiSeedling":
            return GiSeedling;
        case "gi:GiSelect":
            return GiSelect;
        case "gi:GiSelfLove":
            return GiSelfLove;
        case "gi:GiSellCard":
            return GiSellCard;
        case "gi:GiSemiClosedEye":
            return GiSemiClosedEye;
        case "gi:GiSensuousness":
            return GiSensuousness;
        case "gi:GiSentryGun":
            return GiSentryGun;
        case "gi:GiSergeant":
            return GiSergeant;
        case "gi:GiSerratedSlash":
            return GiSerratedSlash;
        case "gi:GiServerRack":
            return GiServerRack;
        case "gi:GiSesame":
            return GiSesame;
        case "gi:GiSettingsKnobs":
            return GiSettingsKnobs;
        case "gi:GiSevenPointedStar":
            return GiSevenPointedStar;
        case "gi:GiSeveredHand":
            return GiSeveredHand;
        case "gi:GiSewedShell":
            return GiSewedShell;
        case "gi:GiSewingMachine":
            return GiSewingMachine;
        case "gi:GiSewingNeedle":
            return GiSewingNeedle;
        case "gi:GiSewingString":
            return GiSewingString;
        case "gi:GiSextant":
            return GiSextant;
        case "gi:GiShadowFollower":
            return GiShadowFollower;
        case "gi:GiShadowGrasp":
            return GiShadowGrasp;
        case "gi:GiShakingHands":
            return GiShakingHands;
        case "gi:GiShamblingMound":
            return GiShamblingMound;
        case "gi:GiShamblingZombie":
            return GiShamblingZombie;
        case "gi:GiShamrock":
            return GiShamrock;
        case "gi:GiShardSword":
            return GiShardSword;
        case "gi:GiShare":
            return GiShare;
        case "gi:GiSharkBite":
            return GiSharkBite;
        case "gi:GiSharkFin":
            return GiSharkFin;
        case "gi:GiSharkJaws":
            return GiSharkJaws;
        case "gi:GiSharpAxe":
            return GiSharpAxe;
        case "gi:GiSharpCrown":
            return GiSharpCrown;
        case "gi:GiSharpHalberd":
            return GiSharpHalberd;
        case "gi:GiSharpLips":
            return GiSharpLips;
        case "gi:GiSharpShuriken":
            return GiSharpShuriken;
        case "gi:GiSharpSmile":
            return GiSharpSmile;
        case "gi:GiSharpedTeethSkull":
            return GiSharpedTeethSkull;
        case "gi:GiShatter":
            return GiShatter;
        case "gi:GiShatteredGlass":
            return GiShatteredGlass;
        case "gi:GiShatteredHeart":
            return GiShatteredHeart;
        case "gi:GiShatteredSword":
            return GiShatteredSword;
        case "gi:GiShears":
            return GiShears;
        case "gi:GiSheep":
            return GiSheep;
        case "gi:GiSheikahEye":
            return GiSheikahEye;
        case "gi:GiShepherdsCrook":
            return GiShepherdsCrook;
        case "gi:GiSherlockHolmes":
            return GiSherlockHolmes;
        case "gi:GiShieldBash":
            return GiShieldBash;
        case "gi:GiShieldBounces":
            return GiShieldBounces;
        case "gi:GiShieldDisabled":
            return GiShieldDisabled;
        case "gi:GiShieldEchoes":
            return GiShieldEchoes;
        case "gi:GiShieldImpact":
            return GiShieldImpact;
        case "gi:GiShieldOpposition":
            return GiShieldOpposition;
        case "gi:GiShieldReflect":
            return GiShieldReflect;
        case "gi:GiShield":
            return GiShield;
        case "gi:GiShieldcomb":
            return GiShieldcomb;
        case "gi:GiShiningClaw":
            return GiShiningClaw;
        case "gi:GiShiningHeart":
            return GiShiningHeart;
        case "gi:GiShiningSword":
            return GiShiningSword;
        case "gi:GiShintoShrineMirror":
            return GiShintoShrineMirror;
        case "gi:GiShintoShrine":
            return GiShintoShrine;
        case "gi:GiShinyApple":
            return GiShinyApple;
        case "gi:GiShinyEntrance":
            return GiShinyEntrance;
        case "gi:GiShinyIris":
            return GiShinyIris;
        case "gi:GiShinyOmega":
            return GiShinyOmega;
        case "gi:GiShinyPurse":
            return GiShinyPurse;
        case "gi:GiShipBow":
            return GiShipBow;
        case "gi:GiShipWheel":
            return GiShipWheel;
        case "gi:GiShipWreck":
            return GiShipWreck;
        case "gi:GiShirtButton":
            return GiShirtButton;
        case "gi:GiShirt":
            return GiShirt;
        case "gi:GiShoebillStork":
            return GiShoebillStork;
        case "gi:GiShoonerSailboat":
            return GiShoonerSailboat;
        case "gi:GiShop":
            return GiShop;
        case "gi:GiShoppingBag":
            return GiShoppingBag;
        case "gi:GiShoppingCart":
            return GiShoppingCart;
        case "gi:GiShorts":
            return GiShorts;
        case "gi:GiShotgunRounds":
            return GiShotgunRounds;
        case "gi:GiShotgun":
            return GiShotgun;
        case "gi:GiShoulderArmor":
            return GiShoulderArmor;
        case "gi:GiShoulderBag":
            return GiShoulderBag;
        case "gi:GiShoulderScales":
            return GiShoulderScales;
        case "gi:GiShouting":
            return GiShouting;
        case "gi:GiShower":
            return GiShower;
        case "gi:GiShrimp":
            return GiShrimp;
        case "gi:GiShrug":
            return GiShrug;
        case "gi:GiShurikenAperture":
            return GiShurikenAperture;
        case "gi:GiShuriken":
            return GiShuriken;
        case "gi:GiShutRose":
            return GiShutRose;
        case "gi:GiShuttlecock":
            return GiShuttlecock;
        case "gi:GiSickle":
            return GiSickle;
        case "gi:GiSideswipe":
            return GiSideswipe;
        case "gi:GiSiegeRam":
            return GiSiegeRam;
        case "gi:GiSiegeTower":
            return GiSiegeTower;
        case "gi:GiSightDisabled":
            return GiSightDisabled;
        case "gi:GiSilence":
            return GiSilence;
        case "gi:GiSilenced":
            return GiSilenced;
        case "gi:GiSilex":
            return GiSilex;
        case "gi:GiSilverBullet":
            return GiSilverBullet;
        case "gi:GiSinagot":
            return GiSinagot;
        case "gi:GiSing":
            return GiSing;
        case "gi:GiSinkingShip":
            return GiSinkingShip;
        case "gi:GiSinkingTrap":
            return GiSinkingTrap;
        case "gi:GiSinusoidalBeam":
            return GiSinusoidalBeam;
        case "gi:GiSiren":
            return GiSiren;
        case "gi:GiSittingDog":
            return GiSittingDog;
        case "gi:GiSixEyes":
            return GiSixEyes;
        case "gi:GiSkateboard":
            return GiSkateboard;
        case "gi:GiSkeletalHand":
            return GiSkeletalHand;
        case "gi:GiSkeletonInside":
            return GiSkeletonInside;
        case "gi:GiSkeletonKey":
            return GiSkeletonKey;
        case "gi:GiSkeleton":
            return GiSkeleton;
        case "gi:GiSkiBoot":
            return GiSkiBoot;
        case "gi:GiSkidMark":
            return GiSkidMark;
        case "gi:GiSkier":
            return GiSkier;
        case "gi:GiSkills":
            return GiSkills;
        case "gi:GiSkippingRope":
            return GiSkippingRope;
        case "gi:GiSkirt":
            return GiSkirt;
        case "gi:GiSkis":
            return GiSkis;
        case "gi:GiSkullBolt":
            return GiSkullBolt;
        case "gi:GiSkullCrack":
            return GiSkullCrack;
        case "gi:GiSkullCrossedBones":
            return GiSkullCrossedBones;
        case "gi:GiSkullInJar":
            return GiSkullInJar;
        case "gi:GiSkullMask":
            return GiSkullMask;
        case "gi:GiSkullRing":
            return GiSkullRing;
        case "gi:GiSkullSabertooth":
            return GiSkullSabertooth;
        case "gi:GiSkullShield":
            return GiSkullShield;
        case "gi:GiSkullSignet":
            return GiSkullSignet;
        case "gi:GiSkullSlices":
            return GiSkullSlices;
        case "gi:GiSkullStaff":
            return GiSkullStaff;
        case "gi:GiSkullWithSyringe":
            return GiSkullWithSyringe;
        case "gi:GiSlalom":
            return GiSlalom;
        case "gi:GiSlap":
            return GiSlap;
        case "gi:GiSlashedShield":
            return GiSlashedShield;
        case "gi:GiSlaveryWhip":
            return GiSlaveryWhip;
        case "gi:GiSleepingBag":
            return GiSleepingBag;
        case "gi:GiSleepy":
            return GiSleepy;
        case "gi:GiSleevelessJacket":
            return GiSleevelessJacket;
        case "gi:GiSleevelessTop":
            return GiSleevelessTop;
        case "gi:GiSlicedBread":
            return GiSlicedBread;
        case "gi:GiSlicedMushroom":
            return GiSlicedMushroom;
        case "gi:GiSlicedSausage":
            return GiSlicedSausage;
        case "gi:GiSlicingArrow":
            return GiSlicingArrow;
        case "gi:GiSlime":
            return GiSlime;
        case "gi:GiSling":
            return GiSling;
        case "gi:GiSlingshot":
            return GiSlingshot;
        case "gi:GiSlipknot":
            return GiSlipknot;
        case "gi:GiSlippers":
            return GiSlippers;
        case "gi:GiSloth":
            return GiSloth;
        case "gi:GiSlowBlob":
            return GiSlowBlob;
        case "gi:GiSlumberingSanctuary":
            return GiSlumberingSanctuary;
        case "gi:GiSly":
            return GiSly;
        case "gi:GiSmallFire":
            return GiSmallFire;
        case "gi:GiSmallFishingSailboat":
            return GiSmallFishingSailboat;
        case "gi:GiSmart":
            return GiSmart;
        case "gi:GiSmartphone":
            return GiSmartphone;
        case "gi:GiSmashArrows":
            return GiSmashArrows;
        case "gi:GiSmitten":
            return GiSmitten;
        case "gi:GiSmokeBomb":
            return GiSmokeBomb;
        case "gi:GiSmokingFinger":
            return GiSmokingFinger;
        case "gi:GiSmokingOrb":
            return GiSmokingOrb;
        case "gi:GiSmokingPipe":
            return GiSmokingPipe;
        case "gi:GiSmokingVolcano":
            return GiSmokingVolcano;
        case "gi:GiSnailEyes":
            return GiSnailEyes;
        case "gi:GiSnail":
            return GiSnail;
        case "gi:GiSnakeBite":
            return GiSnakeBite;
        case "gi:GiSnakeEgg":
            return GiSnakeEgg;
        case "gi:GiSnakeJar":
            return GiSnakeJar;
        case "gi:GiSnakeSpiral":
            return GiSnakeSpiral;
        case "gi:GiSnakeTongue":
            return GiSnakeTongue;
        case "gi:GiSnakeTotem":
            return GiSnakeTotem;
        case "gi:GiSnake":
            return GiSnake;
        case "gi:GiSnatch":
            return GiSnatch;
        case "gi:GiSniffingDog":
            return GiSniffingDog;
        case "gi:GiSnitchQuidditchBall":
            return GiSnitchQuidditchBall;
        case "gi:GiSnorkel":
            return GiSnorkel;
        case "gi:GiSnout":
            return GiSnout;
        case "gi:GiSnowBottle":
            return GiSnowBottle;
        case "gi:GiSnowboard":
            return GiSnowboard;
        case "gi:GiSnowflake1":
            return GiSnowflake1;
        case "gi:GiSnowflake2":
            return GiSnowflake2;
        case "gi:GiSnowing":
            return GiSnowing;
        case "gi:GiSnowman":
            return GiSnowman;
        case "gi:GiSoapExperiment":
            return GiSoapExperiment;
        case "gi:GiSoap":
            return GiSoap;
        case "gi:GiSoccerBall":
            return GiSoccerBall;
        case "gi:GiSoccerField":
            return GiSoccerField;
        case "gi:GiSoccerKick":
            return GiSoccerKick;
        case "gi:GiSocks":
            return GiSocks;
        case "gi:GiSodaCan":
            return GiSodaCan;
        case "gi:GiSofa":
            return GiSofa;
        case "gi:GiSolarPower":
            return GiSolarPower;
        case "gi:GiSolarSystem":
            return GiSolarSystem;
        case "gi:GiSolarTime":
            return GiSolarTime;
        case "gi:GiSolderingIron":
            return GiSolderingIron;
        case "gi:GiSolidLeaf":
            return GiSolidLeaf;
        case "gi:GiSombrero":
            return GiSombrero;
        case "gi:GiSonicBoom":
            return GiSonicBoom;
        case "gi:GiSonicLightning":
            return GiSonicLightning;
        case "gi:GiSonicScreech":
            return GiSonicScreech;
        case "gi:GiSonicShoes":
            return GiSonicShoes;
        case "gi:GiSonicShout":
            return GiSonicShout;
        case "gi:GiSoulVessel":
            return GiSoulVessel;
        case "gi:GiSoundOff":
            return GiSoundOff;
        case "gi:GiSoundOn":
            return GiSoundOn;
        case "gi:GiSoundWaves":
            return GiSoundWaves;
        case "gi:GiSouthAfricaFlag":
            return GiSouthAfricaFlag;
        case "gi:GiSouthAfrica":
            return GiSouthAfrica;
        case "gi:GiSouthAmerica":
            return GiSouthAmerica;
        case "gi:GiSouthKorea":
            return GiSouthKorea;
        case "gi:GiSpaceNeedle":
            return GiSpaceNeedle;
        case "gi:GiSpaceShuttle":
            return GiSpaceShuttle;
        case "gi:GiSpaceSuit":
            return GiSpaceSuit;
        case "gi:GiSpaceship":
            return GiSpaceship;
        case "gi:GiSpadeSkull":
            return GiSpadeSkull;
        case "gi:GiSpade":
            return GiSpade;
        case "gi:GiSpades":
            return GiSpades;
        case "gi:GiSpain":
            return GiSpain;
        case "gi:GiSpanner":
            return GiSpanner;
        case "gi:GiSparkPlug":
            return GiSparkPlug;
        case "gi:GiSparkSpirit":
            return GiSparkSpirit;
        case "gi:GiSparkles":
            return GiSparkles;
        case "gi:GiSparklingSabre":
            return GiSparklingSabre;
        case "gi:GiSparkyBomb":
            return GiSparkyBomb;
        case "gi:GiSparrow":
            return GiSparrow;
        case "gi:GiSpartanHelmet":
            return GiSpartanHelmet;
        case "gi:GiSpartan":
            return GiSpartan;
        case "gi:GiSpatter":
            return GiSpatter;
        case "gi:GiSpawnNode":
            return GiSpawnNode;
        case "gi:GiSpeakerOff":
            return GiSpeakerOff;
        case "gi:GiSpeaker":
            return GiSpeaker;
        case "gi:GiSpearFeather":
            return GiSpearFeather;
        case "gi:GiSpearHook":
            return GiSpearHook;
        case "gi:GiSpearfishing":
            return GiSpearfishing;
        case "gi:GiSpears":
            return GiSpears;
        case "gi:GiSpectacleLenses":
            return GiSpectacleLenses;
        case "gi:GiSpectacles":
            return GiSpectacles;
        case "gi:GiSpectreM4":
            return GiSpectreM4;
        case "gi:GiSpectre":
            return GiSpectre;
        case "gi:GiSpeedBoat":
            return GiSpeedBoat;
        case "gi:GiSpeedometer":
            return GiSpeedometer;
        case "gi:GiSpellBook":
            return GiSpellBook;
        case "gi:GiSpermWhale":
            return GiSpermWhale;
        case "gi:GiSpiderAlt":
            return GiSpiderAlt;
        case "gi:GiSpiderBot":
            return GiSpiderBot;
        case "gi:GiSpiderEye":
            return GiSpiderEye;
        case "gi:GiSpiderFace":
            return GiSpiderFace;
        case "gi:GiSpiderMask":
            return GiSpiderMask;
        case "gi:GiSpiderWeb":
            return GiSpiderWeb;
        case "gi:GiSpikeball":
            return GiSpikeball;
        case "gi:GiSpikedArmor":
            return GiSpikedArmor;
        case "gi:GiSpikedBall":
            return GiSpikedBall;
        case "gi:GiSpikedBat":
            return GiSpikedBat;
        case "gi:GiSpikedCollar":
            return GiSpikedCollar;
        case "gi:GiSpikedDragonHead":
            return GiSpikedDragonHead;
        case "gi:GiSpikedFence":
            return GiSpikedFence;
        case "gi:GiSpikedHalo":
            return GiSpikedHalo;
        case "gi:GiSpikedMace":
            return GiSpikedMace;
        case "gi:GiSpikedShell":
            return GiSpikedShell;
        case "gi:GiSpikedShield":
            return GiSpikedShield;
        case "gi:GiSpikedShoulderArmor":
            return GiSpikedShoulderArmor;
        case "gi:GiSpikedSnail":
            return GiSpikedSnail;
        case "gi:GiSpikedTail":
            return GiSpikedTail;
        case "gi:GiSpikedTentacle":
            return GiSpikedTentacle;
        case "gi:GiSpikedTrunk":
            return GiSpikedTrunk;
        case "gi:GiSpikedWall":
            return GiSpikedWall;
        case "gi:GiSpikesFull":
            return GiSpikesFull;
        case "gi:GiSpikesHalf":
            return GiSpikesHalf;
        case "gi:GiSpikesInit":
            return GiSpikesInit;
        case "gi:GiSpikes":
            return GiSpikes;
        case "gi:GiSpikyEclipse":
            return GiSpikyEclipse;
        case "gi:GiSpikyExplosion":
            return GiSpikyExplosion;
        case "gi:GiSpikyField":
            return GiSpikyField;
        case "gi:GiSpikyPit":
            return GiSpikyPit;
        case "gi:GiSpikyWing":
            return GiSpikyWing;
        case "gi:GiSpill":
            return GiSpill;
        case "gi:GiSpinalCoil":
            return GiSpinalCoil;
        case "gi:GiSpineArrow":
            return GiSpineArrow;
        case "gi:GiSpinningBlades":
            return GiSpinningBlades;
        case "gi:GiSpinningRibbons":
            return GiSpinningRibbons;
        case "gi:GiSpinningSword":
            return GiSpinningSword;
        case "gi:GiSpinningTop":
            return GiSpinningTop;
        case "gi:GiSpinningWheel":
            return GiSpinningWheel;
        case "gi:GiSpiralArrow":
            return GiSpiralArrow;
        case "gi:GiSpiralBloom":
            return GiSpiralBloom;
        case "gi:GiSpiralBottle":
            return GiSpiralBottle;
        case "gi:GiSpiralHilt":
            return GiSpiralHilt;
        case "gi:GiSpiralLollipop":
            return GiSpiralLollipop;
        case "gi:GiSpiralShell":
            return GiSpiralShell;
        case "gi:GiSpiralTentacle":
            return GiSpiralTentacle;
        case "gi:GiSpiralThrust":
            return GiSpiralThrust;
        case "gi:GiSplash":
            return GiSplash;
        case "gi:GiSplashyStream":
            return GiSplashyStream;
        case "gi:GiSplitArrows":
            return GiSplitArrows;
        case "gi:GiSplitBody":
            return GiSplitBody;
        case "gi:GiSplitCross":
            return GiSplitCross;
        case "gi:GiSplurt":
            return GiSplurt;
        case "gi:GiSpockHand":
            return GiSpockHand;
        case "gi:GiSpookyHouse":
            return GiSpookyHouse;
        case "gi:GiSpoon":
            return GiSpoon;
        case "gi:GiSportMedal":
            return GiSportMedal;
        case "gi:GiSpotedFlower":
            return GiSpotedFlower;
        case "gi:GiSpottedArrowhead":
            return GiSpottedArrowhead;
        case "gi:GiSpottedBug":
            return GiSpottedBug;
        case "gi:GiSpottedMushroom":
            return GiSpottedMushroom;
        case "gi:GiSpottedWound":
            return GiSpottedWound;
        case "gi:GiSpoutnik":
            return GiSpoutnik;
        case "gi:GiSpray":
            return GiSpray;
        case "gi:GiSpring":
            return GiSpring;
        case "gi:GiSprint":
            return GiSprint;
        case "gi:GiSproutDisc":
            return GiSproutDisc;
        case "gi:GiSprout":
            return GiSprout;
        case "gi:GiSpy":
            return GiSpy;
        case "gi:GiSpyglass":
            return GiSpyglass;
        case "gi:GiSquareBottle":
            return GiSquareBottle;
        case "gi:GiSquare":
            return GiSquare;
        case "gi:GiSquib":
            return GiSquib;
        case "gi:GiSquidHead":
            return GiSquidHead;
        case "gi:GiSquid":
            return GiSquid;
        case "gi:GiSquirrel":
            return GiSquirrel;
        case "gi:GiSriLanka":
            return GiSriLanka;
        case "gi:GiStabbedNote":
            return GiStabbedNote;
        case "gi:GiStable":
            return GiStable;
        case "gi:GiStack":
            return GiStack;
        case "gi:GiStagHead":
            return GiStagHead;
        case "gi:GiStahlhelm":
            return GiStahlhelm;
        case "gi:GiStairsCake":
            return GiStairsCake;
        case "gi:GiStairsGoal":
            return GiStairsGoal;
        case "gi:GiStairs":
            return GiStairs;
        case "gi:GiStakeHammer":
            return GiStakeHammer;
        case "gi:GiStakesFence":
            return GiStakesFence;
        case "gi:GiStalactites":
            return GiStalactites;
        case "gi:GiStalagtite":
            return GiStalagtite;
        case "gi:GiStamper":
            return GiStamper;
        case "gi:GiStandingPotion":
            return GiStandingPotion;
        case "gi:GiStaplerHeavyDuty":
            return GiStaplerHeavyDuty;
        case "gi:GiStaplerPneumatic":
            return GiStaplerPneumatic;
        case "gi:GiStapler":
            return GiStapler;
        case "gi:GiStarAltar":
            return GiStarAltar;
        case "gi:GiStarCycle":
            return GiStarCycle;
        case "gi:GiStarFlag":
            return GiStarFlag;
        case "gi:GiStarFormation":
            return GiStarFormation;
        case "gi:GiStarGate":
            return GiStarGate;
        case "gi:GiStarKey":
            return GiStarKey;
        case "gi:GiStarMedal":
            return GiStarMedal;
        case "gi:GiStarProminences":
            return GiStarProminences;
        case "gi:GiStarPupil":
            return GiStarPupil;
        case "gi:GiStarSattelites":
            return GiStarSattelites;
        case "gi:GiStarShuriken":
            return GiStarShuriken;
        case "gi:GiStarSkull":
            return GiStarSkull;
        case "gi:GiStarStruck":
            return GiStarStruck;
        case "gi:GiStarSwirl":
            return GiStarSwirl;
        case "gi:GiStarfighter":
            return GiStarfighter;
        case "gi:GiStarsStack":
            return GiStarsStack;
        case "gi:GiStaryu":
            return GiStaryu;
        case "gi:GiStaticGuard":
            return GiStaticGuard;
        case "gi:GiStaticWaves":
            return GiStaticWaves;
        case "gi:GiStatic":
            return GiStatic;
        case "gi:GiSteak":
            return GiSteak;
        case "gi:GiStealthBomber":
            return GiStealthBomber;
        case "gi:GiSteamBlast":
            return GiSteamBlast;
        case "gi:GiSteamLocomotive":
            return GiSteamLocomotive;
        case "gi:GiSteam":
            return GiSteam;
        case "gi:GiSteampunkGoggles":
            return GiSteampunkGoggles;
        case "gi:GiSteelClaws":
            return GiSteelClaws;
        case "gi:GiSteelDoor":
            return GiSteelDoor;
        case "gi:GiSteeltoeBoots":
            return GiSteeltoeBoots;
        case "gi:GiSteelwingEmblem":
            return GiSteelwingEmblem;
        case "gi:GiSteeringWheel":
            return GiSteeringWheel;
        case "gi:GiStegosaurusScales":
            return GiStegosaurusScales;
        case "gi:GiStethoscope":
            return GiStethoscope;
        case "gi:GiSteyrAug":
            return GiSteyrAug;
        case "gi:GiStickFrame":
            return GiStickFrame;
        case "gi:GiStickGrenade":
            return GiStickGrenade;
        case "gi:GiStickSplitting":
            return GiStickSplitting;
        case "gi:GiStickingPlaster":
            return GiStickingPlaster;
        case "gi:GiStickyBoot":
            return GiStickyBoot;
        case "gi:GiStigmata":
            return GiStigmata;
        case "gi:GiStiletto":
            return GiStiletto;
        case "gi:GiStitchedWound":
            return GiStitchedWound;
        case "gi:GiStockpiles":
            return GiStockpiles;
        case "gi:GiStomach":
            return GiStomach;
        case "gi:GiStompTornado":
            return GiStompTornado;
        case "gi:GiStomp":
            return GiStomp;
        case "gi:GiStoneAxe":
            return GiStoneAxe;
        case "gi:GiStoneBlock":
            return GiStoneBlock;
        case "gi:GiStoneBridge":
            return GiStoneBridge;
        case "gi:GiStoneBust":
            return GiStoneBust;
        case "gi:GiStoneCrafting":
            return GiStoneCrafting;
        case "gi:GiStonePath":
            return GiStonePath;
        case "gi:GiStonePile":
            return GiStonePile;
        case "gi:GiStoneSpear":
            return GiStoneSpear;
        case "gi:GiStoneSphere":
            return GiStoneSphere;
        case "gi:GiStoneStack":
            return GiStoneStack;
        case "gi:GiStoneTablet":
            return GiStoneTablet;
        case "gi:GiStoneThrone":
            return GiStoneThrone;
        case "gi:GiStoneTower":
            return GiStoneTower;
        case "gi:GiStoneWall":
            return GiStoneWall;
        case "gi:GiStoneWheel":
            return GiStoneWheel;
        case "gi:GiStonedSkull":
            return GiStonedSkull;
        case "gi:GiStopSign":
            return GiStopSign;
        case "gi:GiStopwatch":
            return GiStopwatch;
        case "gi:GiStorkDelivery":
            return GiStorkDelivery;
        case "gi:GiStrafe":
            return GiStrafe;
        case "gi:GiStraightPipe":
            return GiStraightPipe;
        case "gi:GiStrawberry":
            return GiStrawberry;
        case "gi:GiStreetLight":
            return GiStreetLight;
        case "gi:GiStrikingArrows":
            return GiStrikingArrows;
        case "gi:GiStrikingBalls":
            return GiStrikingBalls;
        case "gi:GiStrikingClamps":
            return GiStrikingClamps;
        case "gi:GiStrikingDiamonds":
            return GiStrikingDiamonds;
        case "gi:GiStrikingSplinter":
            return GiStrikingSplinter;
        case "gi:GiStripedSun":
            return GiStripedSun;
        case "gi:GiStripedSword":
            return GiStripedSword;
        case "gi:GiStrongMan":
            return GiStrongMan;
        case "gi:GiStrong":
            return GiStrong;
        case "gi:GiStrongbox":
            return GiStrongbox;
        case "gi:GiStumpRegrowth":
            return GiStumpRegrowth;
        case "gi:GiStunGrenade":
            return GiStunGrenade;
        case "gi:GiSubmarineMissile":
            return GiSubmarineMissile;
        case "gi:GiSubmarine":
            return GiSubmarine;
        case "gi:GiSubway":
            return GiSubway;
        case "gi:GiSuckeredTentacle":
            return GiSuckeredTentacle;
        case "gi:GiSugarCane":
            return GiSugarCane;
        case "gi:GiSuicide":
            return GiSuicide;
        case "gi:GiSuitcase":
            return GiSuitcase;
        case "gi:GiSuits":
            return GiSuits;
        case "gi:GiSummits":
            return GiSummits;
        case "gi:GiSunCloud":
            return GiSunCloud;
        case "gi:GiSunPriest":
            return GiSunPriest;
        case "gi:GiSunRadiations":
            return GiSunRadiations;
        case "gi:GiSunSpear":
            return GiSunSpear;
        case "gi:GiSun":
            return GiSun;
        case "gi:GiSunbeams":
            return GiSunbeams;
        case "gi:GiSundial":
            return GiSundial;
        case "gi:GiSunflower":
            return GiSunflower;
        case "gi:GiSunglasses":
            return GiSunglasses;
        case "gi:GiSunkenEye":
            return GiSunkenEye;
        case "gi:GiSunrise":
            return GiSunrise;
        case "gi:GiSunset":
            return GiSunset;
        case "gi:GiSuperMushroom":
            return GiSuperMushroom;
        case "gi:GiSupersonicArrow":
            return GiSupersonicArrow;
        case "gi:GiSupersonicBullet":
            return GiSupersonicBullet;
        case "gi:GiSurfBoard":
            return GiSurfBoard;
        case "gi:GiSurferVan":
            return GiSurferVan;
        case "gi:GiSurprisedSkull":
            return GiSurprisedSkull;
        case "gi:GiSurprised":
            return GiSurprised;
        case "gi:GiSurroundedEye":
            return GiSurroundedEye;
        case "gi:GiSurroundedShield":
            return GiSurroundedShield;
        case "gi:GiSushis":
            return GiSushis;
        case "gi:GiSuspensionBridge":
            return GiSuspensionBridge;
        case "gi:GiSuspicious":
            return GiSuspicious;
        case "gi:GiSverdIFjell":
            return GiSverdIFjell;
        case "gi:GiSwallow":
            return GiSwallow;
        case "gi:GiSwallower":
            return GiSwallower;
        case "gi:GiSwampBat":
            return GiSwampBat;
        case "gi:GiSwamp":
            return GiSwamp;
        case "gi:GiSwanBreeze":
            return GiSwanBreeze;
        case "gi:GiSwan":
            return GiSwan;
        case "gi:GiSwapBag":
            return GiSwapBag;
        case "gi:GiSwimfins":
            return GiSwimfins;
        case "gi:GiSwipeCard":
            return GiSwipeCard;
        case "gi:GiSwirlRing":
            return GiSwirlRing;
        case "gi:GiSwirlString":
            return GiSwirlString;
        case "gi:GiSwirledShell":
            return GiSwirledShell;
        case "gi:GiSwissArmyKnife":
            return GiSwissArmyKnife;
        case "gi:GiSwitchWeapon":
            return GiSwitchWeapon;
        case "gi:GiSwitchblade":
            return GiSwitchblade;
        case "gi:GiSwitzerland":
            return GiSwitzerland;
        case "gi:GiSwordAltar":
            return GiSwordAltar;
        case "gi:GiSwordArray":
            return GiSwordArray;
        case "gi:GiSwordBrandish":
            return GiSwordBrandish;
        case "gi:GiSwordBreak":
            return GiSwordBreak;
        case "gi:GiSwordClash":
            return GiSwordClash;
        case "gi:GiSwordHilt":
            return GiSwordHilt;
        case "gi:GiSwordInStone":
            return GiSwordInStone;
        case "gi:GiSwordMold":
            return GiSwordMold;
        case "gi:GiSwordSlice":
            return GiSwordSlice;
        case "gi:GiSwordSmithing":
            return GiSwordSmithing;
        case "gi:GiSwordSpade":
            return GiSwordSpade;
        case "gi:GiSwordSpin":
            return GiSwordSpin;
        case "gi:GiSwordTie":
            return GiSwordTie;
        case "gi:GiSwordWound":
            return GiSwordWound;
        case "gi:GiSwordman":
            return GiSwordman;
        case "gi:GiSwordsEmblem":
            return GiSwordsEmblem;
        case "gi:GiSwordsPower":
            return GiSwordsPower;
        case "gi:GiSwordwoman":
            return GiSwordwoman;
        case "gi:GiSydneyOperaHouse":
            return GiSydneyOperaHouse;
        case "gi:GiSyringe":
            return GiSyringe;
        case "gi:GiTBrick":
            return GiTBrick;
        case "gi:GiTRexSkull":
            return GiTRexSkull;
        case "gi:GiTShirt":
            return GiTShirt;
        case "gi:GiTabiBoot":
            return GiTabiBoot;
        case "gi:GiTable":
            return GiTable;
        case "gi:GiTablet":
            return GiTablet;
        case "gi:GiTabletopPlayers":
            return GiTabletopPlayers;
        case "gi:GiTacos":
            return GiTacos;
        case "gi:GiTadpole":
            return GiTadpole;
        case "gi:GiTakeMyMoney":
            return GiTakeMyMoney;
        case "gi:GiTalk":
            return GiTalk;
        case "gi:GiTallBridge":
            return GiTallBridge;
        case "gi:GiTambourine":
            return GiTambourine;
        case "gi:GiTangerine":
            return GiTangerine;
        case "gi:GiTankTop":
            return GiTankTop;
        case "gi:GiTankTread":
            return GiTankTread;
        case "gi:GiTank":
            return GiTank;
        case "gi:GiTanzania":
            return GiTanzania;
        case "gi:GiTap":
            return GiTap;
        case "gi:GiTapir":
            return GiTapir;
        case "gi:GiTargetArrows":
            return GiTargetArrows;
        case "gi:GiTargetDummy":
            return GiTargetDummy;
        case "gi:GiTargetLaser":
            return GiTargetLaser;
        case "gi:GiTargetPoster":
            return GiTargetPoster;
        case "gi:GiTargetPrize":
            return GiTargetPrize;
        case "gi:GiTargetShot":
            return GiTargetShot;
        case "gi:GiTargeted":
            return GiTargeted;
        case "gi:GiTargeting":
            return GiTargeting;
        case "gi:GiTatteredBanner":
            return GiTatteredBanner;
        case "gi:GiTaurus":
            return GiTaurus;
        case "gi:GiTavernSign":
            return GiTavernSign;
        case "gi:GiTeacher":
            return GiTeacher;
        case "gi:GiTeamDowngrade":
            return GiTeamDowngrade;
        case "gi:GiTeamIdea":
            return GiTeamIdea;
        case "gi:GiTeamUpgrade":
            return GiTeamUpgrade;
        case "gi:GiTeapotLeaves":
            return GiTeapotLeaves;
        case "gi:GiTeapot":
            return GiTeapot;
        case "gi:GiTearTracks":
            return GiTearTracks;
        case "gi:GiTearing":
            return GiTearing;
        case "gi:GiTec9":
            return GiTec9;
        case "gi:GiTechnoHeart":
            return GiTechnoHeart;
        case "gi:GiTeePipe":
            return GiTeePipe;
        case "gi:GiTelefrag":
            return GiTelefrag;
        case "gi:GiTelepathy":
            return GiTelepathy;
        case "gi:GiTeleport":
            return GiTeleport;
        case "gi:GiTelescopicBaton":
            return GiTelescopicBaton;
        case "gi:GiTellerMine":
            return GiTellerMine;
        case "gi:GiTemplarEye":
            return GiTemplarEye;
        case "gi:GiTemplarHeart":
            return GiTemplarHeart;
        case "gi:GiTemplarShield":
            return GiTemplarShield;
        case "gi:GiTempleDoor":
            return GiTempleDoor;
        case "gi:GiTempleGate":
            return GiTempleGate;
        case "gi:GiTemporaryShield":
            return GiTemporaryShield;
        case "gi:GiTemptation":
            return GiTemptation;
        case "gi:GiTennisBall":
            return GiTennisBall;
        case "gi:GiTennisCourt":
            return GiTennisCourt;
        case "gi:GiTennisRacket":
            return GiTennisRacket;
        case "gi:GiTensionSnowflake":
            return GiTensionSnowflake;
        case "gi:GiTentacleHeart":
            return GiTentacleHeart;
        case "gi:GiTentacleStrike":
            return GiTentacleStrike;
        case "gi:GiTentaclesBarrier":
            return GiTentaclesBarrier;
        case "gi:GiTentaclesSkull":
            return GiTentaclesSkull;
        case "gi:GiTentacurl":
            return GiTentacurl;
        case "gi:GiTerror":
            return GiTerror;
        case "gi:GiTeslaCoil":
            return GiTeslaCoil;
        case "gi:GiTeslaTurret":
            return GiTeslaTurret;
        case "gi:GiTesla":
            return GiTesla;
        case "gi:GiTestTubes":
            return GiTestTubes;
        case "gi:GiTexas":
            return GiTexas;
        case "gi:GiTheaterCurtains":
            return GiTheaterCurtains;
        case "gi:GiTheater":
            return GiTheater;
        case "gi:GiThermometerCold":
            return GiThermometerCold;
        case "gi:GiThermometerHot":
            return GiThermometerHot;
        case "gi:GiThermometerScale":
            return GiThermometerScale;
        case "gi:GiThink":
            return GiThink;
        case "gi:GiThirdEye":
            return GiThirdEye;
        case "gi:GiThompsonM1":
            return GiThompsonM1;
        case "gi:GiThompsonM1928":
            return GiThompsonM1928;
        case "gi:GiThorFist":
            return GiThorFist;
        case "gi:GiThorHammer":
            return GiThorHammer;
        case "gi:GiThornHelix":
            return GiThornHelix;
        case "gi:GiThornedArrow":
            return GiThornedArrow;
        case "gi:GiThornyTentacle":
            return GiThornyTentacle;
        case "gi:GiThornyVine":
            return GiThornyVine;
        case "gi:GiThreeBurningBalls":
            return GiThreeBurningBalls;
        case "gi:GiThreeFriends":
            return GiThreeFriends;
        case "gi:GiThreeKeys":
            return GiThreeKeys;
        case "gi:GiThreeLeaves":
            return GiThreeLeaves;
        case "gi:GiThreePointedShuriken":
            return GiThreePointedShuriken;
        case "gi:GiThroneKing":
            return GiThroneKing;
        case "gi:GiThrowingBall":
            return GiThrowingBall;
        case "gi:GiThrownCharcoal":
            return GiThrownCharcoal;
        case "gi:GiThrownDaggers":
            return GiThrownDaggers;
        case "gi:GiThrownKnife":
            return GiThrownKnife;
        case "gi:GiThrownSpear":
            return GiThrownSpear;
        case "gi:GiThrustBend":
            return GiThrustBend;
        case "gi:GiThrust":
            return GiThrust;
        case "gi:GiThumbDown":
            return GiThumbDown;
        case "gi:GiThumbUp":
            return GiThumbUp;
        case "gi:GiThunderBlade":
            return GiThunderBlade;
        case "gi:GiThunderSkull":
            return GiThunderSkull;
        case "gi:GiThunderStruck":
            return GiThunderStruck;
        case "gi:GiThunderball":
            return GiThunderball;
        case "gi:GiThwomp":
            return GiThwomp;
        case "gi:GiTiara":
            return GiTiara;
        case "gi:GiTicTacToe":
            return GiTicTacToe;
        case "gi:GiTick":
            return GiTick;
        case "gi:GiTicket":
            return GiTicket;
        case "gi:GiTie":
            return GiTie;
        case "gi:GiTiedScroll":
            return GiTiedScroll;
        case "gi:GiTigerHead":
            return GiTigerHead;
        case "gi:GiTiger":
            return GiTiger;
        case "gi:GiTightrope":
            return GiTightrope;
        case "gi:GiTimeBomb":
            return GiTimeBomb;
        case "gi:GiTimeDynamite":
            return GiTimeDynamite;
        case "gi:GiTimeSynchronization":
            return GiTimeSynchronization;
        case "gi:GiTimeTrap":
            return GiTimeTrap;
        case "gi:GiTinker":
            return GiTinker;
        case "gi:GiTipi":
            return GiTipi;
        case "gi:GiTireIronCross":
            return GiTireIronCross;
        case "gi:GiTireIron":
            return GiTireIron;
        case "gi:GiTireTracks":
            return GiTireTracks;
        case "gi:GiTiredEye":
            return GiTiredEye;
        case "gi:GiToadTeeth":
            return GiToadTeeth;
        case "gi:GiToaster":
            return GiToaster;
        case "gi:GiToggles":
            return GiToggles;
        case "gi:GiToken":
            return GiToken;
        case "gi:GiTomahawk":
            return GiTomahawk;
        case "gi:GiTomato":
            return GiTomato;
        case "gi:GiTombstone":
            return GiTombstone;
        case "gi:GiTongue":
            return GiTongue;
        case "gi:GiToolbox":
            return GiToolbox;
        case "gi:GiTooth":
            return GiTooth;
        case "gi:GiToothbrush":
            return GiToothbrush;
        case "gi:GiTopHat":
            return GiTopHat;
        case "gi:GiTopPaw":
            return GiTopPaw;
        case "gi:GiTopaz":
            return GiTopaz;
        case "gi:GiTorc":
            return GiTorc;
        case "gi:GiTorch":
            return GiTorch;
        case "gi:GiTornadoDiscs":
            return GiTornadoDiscs;
        case "gi:GiTornado":
            return GiTornado;
        case "gi:GiTorpedo":
            return GiTorpedo;
        case "gi:GiTortoise":
            return GiTortoise;
        case "gi:GiTotemHead":
            return GiTotemHead;
        case "gi:GiTotemMask":
            return GiTotemMask;
        case "gi:GiTotem":
            return GiTotem;
        case "gi:GiToucan":
            return GiToucan;
        case "gi:GiTowTruck":
            return GiTowTruck;
        case "gi:GiTowel":
            return GiTowel;
        case "gi:GiTowerBridge":
            return GiTowerBridge;
        case "gi:GiTowerFall":
            return GiTowerFall;
        case "gi:GiTowerFlag":
            return GiTowerFlag;
        case "gi:GiToyMallet":
            return GiToyMallet;
        case "gi:GiTrackedRobot":
            return GiTrackedRobot;
        case "gi:GiTrade":
            return GiTrade;
        case "gi:GiTrafficCone":
            return GiTrafficCone;
        case "gi:GiTrafficLightsGreen":
            return GiTrafficLightsGreen;
        case "gi:GiTrafficLightsOrange":
            return GiTrafficLightsOrange;
        case "gi:GiTrafficLightsReadyToGo":
            return GiTrafficLightsReadyToGo;
        case "gi:GiTrafficLightsRed":
            return GiTrafficLightsRed;
        case "gi:GiTrail":
            return GiTrail;
        case "gi:GiTrample":
            return GiTrample;
        case "gi:GiTransform":
            return GiTransform;
        case "gi:GiTransfuse":
            return GiTransfuse;
        case "gi:GiTransparentSlime":
            return GiTransparentSlime;
        case "gi:GiTransparentTubes":
            return GiTransparentTubes;
        case "gi:GiTransportationRings":
            return GiTransportationRings;
        case "gi:GiTrapMask":
            return GiTrapMask;
        case "gi:GiTrashCan":
            return GiTrashCan;
        case "gi:GiTravelDress":
            return GiTravelDress;
        case "gi:GiTread":
            return GiTread;
        case "gi:GiTreasureMap":
            return GiTreasureMap;
        case "gi:GiTrebuchet":
            return GiTrebuchet;
        case "gi:GiTreeBeehive":
            return GiTreeBeehive;
        case "gi:GiTreeBranch":
            return GiTreeBranch;
        case "gi:GiTreeDoor":
            return GiTreeDoor;
        case "gi:GiTreeFace":
            return GiTreeFace;
        case "gi:GiTreeGrowth":
            return GiTreeGrowth;
        case "gi:GiTreeRoots":
            return GiTreeRoots;
        case "gi:GiTreeSwing":
            return GiTreeSwing;
        case "gi:GiTreehouse":
            return GiTreehouse;
        case "gi:GiTrefoilLily":
            return GiTrefoilLily;
        case "gi:GiTrefoilShuriken":
            return GiTrefoilShuriken;
        case "gi:GiTrenchAssault":
            return GiTrenchAssault;
        case "gi:GiTrenchBodyArmor":
            return GiTrenchBodyArmor;
        case "gi:GiTrenchKnife":
            return GiTrenchKnife;
        case "gi:GiTrenchSpade":
            return GiTrenchSpade;
        case "gi:GiTriangleTarget":
            return GiTriangleTarget;
        case "gi:GiTribalGear":
            return GiTribalGear;
        case "gi:GiTribalMask":
            return GiTribalMask;
        case "gi:GiTribalPendant":
            return GiTribalPendant;
        case "gi:GiTribalShield":
            return GiTribalShield;
        case "gi:GiTribunalJury":
            return GiTribunalJury;
        case "gi:GiTriceratopsHead":
            return GiTriceratopsHead;
        case "gi:GiTridentShield":
            return GiTridentShield;
        case "gi:GiTrident":
            return GiTrident;
        case "gi:GiTriforce":
            return GiTriforce;
        case "gi:GiTriggerHurt":
            return GiTriggerHurt;
        case "gi:GiTrilobite":
            return GiTrilobite;
        case "gi:GiTrinacria":
            return GiTrinacria;
        case "gi:GiTriorb":
            return GiTriorb;
        case "gi:GiTripleBeak":
            return GiTripleBeak;
        case "gi:GiTripleClaws":
            return GiTripleClaws;
        case "gi:GiTripleCorn":
            return GiTripleCorn;
        case "gi:GiTripleGate":
            return GiTripleGate;
        case "gi:GiTripleLock":
            return GiTripleLock;
        case "gi:GiTripleNeedle":
            return GiTripleNeedle;
        case "gi:GiTriplePlier":
            return GiTriplePlier;
        case "gi:GiTripleScratches":
            return GiTripleScratches;
        case "gi:GiTripleShells":
            return GiTripleShells;
        case "gi:GiTripleSkulls":
            return GiTripleSkulls;
        case "gi:GiTripleYin":
            return GiTripleYin;
        case "gi:GiTripwire":
            return GiTripwire;
        case "gi:GiTriquetra":
            return GiTriquetra;
        case "gi:GiTrireme":
            return GiTrireme;
        case "gi:GiTritonHead":
            return GiTritonHead;
        case "gi:GiTroglodyte":
            return GiTroglodyte;
        case "gi:GiTrojanHorse":
            return GiTrojanHorse;
        case "gi:GiTroll":
            return GiTroll;
        case "gi:GiTrombone":
            return GiTrombone;
        case "gi:GiTronArrow":
            return GiTronArrow;
        case "gi:GiTrophiesShelf":
            return GiTrophiesShelf;
        case "gi:GiTrophyCup":
            return GiTrophyCup;
        case "gi:GiTrophy":
            return GiTrophy;
        case "gi:GiTropicalFish":
            return GiTropicalFish;
        case "gi:GiTrousers":
            return GiTrousers;
        case "gi:GiTrowel":
            return GiTrowel;
        case "gi:GiTruce":
            return GiTruce;
        case "gi:GiTruck":
            return GiTruck;
        case "gi:GiTrumpetFlag":
            return GiTrumpetFlag;
        case "gi:GiTrumpet":
            return GiTrumpet;
        case "gi:GiTrunkMushroom":
            return GiTrunkMushroom;
        case "gi:GiTuba":
            return GiTuba;
        case "gi:GiTumbleweed":
            return GiTumbleweed;
        case "gi:GiTumor":
            return GiTumor;
        case "gi:GiTumulus":
            return GiTumulus;
        case "gi:GiTunePitch":
            return GiTunePitch;
        case "gi:GiTunisia":
            return GiTunisia;
        case "gi:GiTurban":
            return GiTurban;
        case "gi:GiTurbine":
            return GiTurbine;
        case "gi:GiTurd":
            return GiTurd;
        case "gi:GiTurnstile":
            return GiTurnstile;
        case "gi:GiTurret":
            return GiTurret;
        case "gi:GiTurtleShell":
            return GiTurtleShell;
        case "gi:GiTurtle":
            return GiTurtle;
        case "gi:GiTusksFlag":
            return GiTusksFlag;
        case "gi:GiTvRemote":
            return GiTvRemote;
        case "gi:GiTvTower":
            return GiTvTower;
        case "gi:GiTv":
            return GiTv;
        case "gi:GiTwinShell":
            return GiTwinShell;
        case "gi:GiTwirlCenter":
            return GiTwirlCenter;
        case "gi:GiTwirlyFlower":
            return GiTwirlyFlower;
        case "gi:GiTwister":
            return GiTwister;
        case "gi:GiTwoCoins":
            return GiTwoCoins;
        case "gi:GiTwoFeathers":
            return GiTwoFeathers;
        case "gi:GiTwoHandedSword":
            return GiTwoHandedSword;
        case "gi:GiTwoShadows":
            return GiTwoShadows;
        case "gi:GiTyre":
            return GiTyre;
        case "gi:GiUbisoftSun":
            return GiUbisoftSun;
        case "gi:GiUdder":
            return GiUdder;
        case "gi:GiUfo":
            return GiUfo;
        case "gi:GiUltrasound":
            return GiUltrasound;
        case "gi:GiUluru":
            return GiUluru;
        case "gi:GiUmbrellaBayonet":
            return GiUmbrellaBayonet;
        case "gi:GiUmbrella":
            return GiUmbrella;
        case "gi:GiUnbalanced":
            return GiUnbalanced;
        case "gi:GiUncertainty":
            return GiUncertainty;
        case "gi:GiUndergroundCave":
            return GiUndergroundCave;
        case "gi:GiUnderhand":
            return GiUnderhand;
        case "gi:GiUnderwearShorts":
            return GiUnderwearShorts;
        case "gi:GiUnderwear":
            return GiUnderwear;
        case "gi:GiUnfriendlyFire":
            return GiUnfriendlyFire;
        case "gi:GiUnicorn":
            return GiUnicorn;
        case "gi:GiUnicycle":
            return GiUnicycle;
        case "gi:GiUnionJack":
            return GiUnionJack;
        case "gi:GiUnlitBomb":
            return GiUnlitBomb;
        case "gi:GiUnlitCandelabra":
            return GiUnlitCandelabra;
        case "gi:GiUnlocking":
            return GiUnlocking;
        case "gi:GiUnplugged":
            return GiUnplugged;
        case "gi:GiUnstableOrb":
            return GiUnstableOrb;
        case "gi:GiUnstableProjectile":
            return GiUnstableProjectile;
        case "gi:GiUpCard":
            return GiUpCard;
        case "gi:GiUpgrade":
            return GiUpgrade;
        case "gi:GiUprising":
            return GiUprising;
        case "gi:GiUrsaMajor":
            return GiUrsaMajor;
        case "gi:GiUruguay":
            return GiUruguay;
        case "gi:GiUsaFlag":
            return GiUsaFlag;
        case "gi:GiUsable":
            return GiUsable;
        case "gi:GiUsbKey":
            return GiUsbKey;
        case "gi:GiUshanka":
            return GiUshanka;
        case "gi:GiUzi":
            return GiUzi;
        case "gi:GiVacuumCleaner":
            return GiVacuumCleaner;
        case "gi:GiValley":
            return GiValley;
        case "gi:GiValve":
            return GiValve;
        case "gi:GiVampireCape":
            return GiVampireCape;
        case "gi:GiVampireDracula":
            return GiVampireDracula;
        case "gi:GiVanDammeSplit":
            return GiVanDammeSplit;
        case "gi:GiVanillaFlower":
            return GiVanillaFlower;
        case "gi:GiVelocipede":
            return GiVelocipede;
        case "gi:GiVelociraptorTracks":
            return GiVelociraptorTracks;
        case "gi:GiVelociraptor":
            return GiVelociraptor;
        case "gi:GiVendingMachine":
            return GiVendingMachine;
        case "gi:GiVenezuela":
            return GiVenezuela;
        case "gi:GiVenusFlytrap":
            return GiVenusFlytrap;
        case "gi:GiVenusOfWillendorf":
            return GiVenusOfWillendorf;
        case "gi:GiVerticalBanner":
            return GiVerticalBanner;
        case "gi:GiVerticalFlip":
            return GiVerticalFlip;
        case "gi:GiVhs":
            return GiVhs;
        case "gi:GiVial":
            return GiVial;
        case "gi:GiVibratingBall":
            return GiVibratingBall;
        case "gi:GiVibratingShield":
            return GiVibratingShield;
        case "gi:GiVibratingSmartphone":
            return GiVibratingSmartphone;
        case "gi:GiVideoCamera":
            return GiVideoCamera;
        case "gi:GiVideoConference":
            return GiVideoConference;
        case "gi:GiVikingChurch":
            return GiVikingChurch;
        case "gi:GiVikingHead":
            return GiVikingHead;
        case "gi:GiVikingHelmet":
            return GiVikingHelmet;
        case "gi:GiVikingLonghouse":
            return GiVikingLonghouse;
        case "gi:GiVikingShield":
            return GiVikingShield;
        case "gi:GiVileFluid":
            return GiVileFluid;
        case "gi:GiVillage":
            return GiVillage;
        case "gi:GiVineFlower":
            return GiVineFlower;
        case "gi:GiVineLeaf":
            return GiVineLeaf;
        case "gi:GiVineWhip":
            return GiVineWhip;
        case "gi:GiVines":
            return GiVines;
        case "gi:GiVintageRobot":
            return GiVintageRobot;
        case "gi:GiViola":
            return GiViola;
        case "gi:GiViolin":
            return GiViolin;
        case "gi:GiVirgo":
            return GiVirgo;
        case "gi:GiVirtualMarker":
            return GiVirtualMarker;
        case "gi:GiVirus":
            return GiVirus;
        case "gi:GiVisoredHelm":
            return GiVisoredHelm;
        case "gi:GiVitruvianMan":
            return GiVitruvianMan;
        case "gi:GiVolcano":
            return GiVolcano;
        case "gi:GiVolleyballBall":
            return GiVolleyballBall;
        case "gi:GiVomiting":
            return GiVomiting;
        case "gi:GiVoodooDoll":
            return GiVoodooDoll;
        case "gi:GiVortex":
            return GiVortex;
        case "gi:GiVote":
            return GiVote;
        case "gi:GiVrHeadset":
            return GiVrHeadset;
        case "gi:GiVulture":
            return GiVulture;
        case "gi:GiVuvuzelas":
            return GiVuvuzelas;
        case "gi:GiWalk":
            return GiWalk;
        case "gi:GiWalkieTalkie":
            return GiWalkieTalkie;
        case "gi:GiWalkingBoot":
            return GiWalkingBoot;
        case "gi:GiWalkingScout":
            return GiWalkingScout;
        case "gi:GiWalkingTurret":
            return GiWalkingTurret;
        case "gi:GiWallLight":
            return GiWallLight;
        case "gi:GiWallet":
            return GiWallet;
        case "gi:GiWalrusHead":
            return GiWalrusHead;
        case "gi:GiWaltherPpk":
            return GiWaltherPpk;
        case "gi:GiWantedReward":
            return GiWantedReward;
        case "gi:GiWarAxe":
            return GiWarAxe;
        case "gi:GiWarBonnet":
            return GiWarBonnet;
        case "gi:GiWarPick":
            return GiWarPick;
        case "gi:GiWarhammer":
            return GiWarhammer;
        case "gi:GiWarlockEye":
            return GiWarlockEye;
        case "gi:GiWarlockHood":
            return GiWarlockHood;
        case "gi:GiWarpPipe":
            return GiWarpPipe;
        case "gi:GiWashingMachine":
            return GiWashingMachine;
        case "gi:GiWaspSting":
            return GiWaspSting;
        case "gi:GiWatch":
            return GiWatch;
        case "gi:GiWatchtower":
            return GiWatchtower;
        case "gi:GiWaterBolt":
            return GiWaterBolt;
        case "gi:GiWaterBottle":
            return GiWaterBottle;
        case "gi:GiWaterDivinerStick":
            return GiWaterDivinerStick;
        case "gi:GiWaterDrop":
            return GiWaterDrop;
        case "gi:GiWaterFlask":
            return GiWaterFlask;
        case "gi:GiWaterFountain":
            return GiWaterFountain;
        case "gi:GiWaterGallon":
            return GiWaterGallon;
        case "gi:GiWaterGun":
            return GiWaterGun;
        case "gi:GiWaterMill":
            return GiWaterMill;
        case "gi:GiWaterPolo":
            return GiWaterPolo;
        case "gi:GiWaterRecycling":
            return GiWaterRecycling;
        case "gi:GiWaterSplash":
            return GiWaterSplash;
        case "gi:GiWaterTank":
            return GiWaterTank;
        case "gi:GiWaterTower":
            return GiWaterTower;
        case "gi:GiWaterfall":
            return GiWaterfall;
        case "gi:GiWateringCan":
            return GiWateringCan;
        case "gi:GiWatermelon":
            return GiWatermelon;
        case "gi:GiWaveCrest":
            return GiWaveCrest;
        case "gi:GiWaveStrike":
            return GiWaveStrike;
        case "gi:GiWaveSurfer":
            return GiWaveSurfer;
        case "gi:GiWaves":
            return GiWaves;
        case "gi:GiWavyChains":
            return GiWavyChains;
        case "gi:GiWavyItinerary":
            return GiWavyItinerary;
        case "gi:GiWaxSeal":
            return GiWaxSeal;
        case "gi:GiWaxTablet":
            return GiWaxTablet;
        case "gi:GiWebSpit":
            return GiWebSpit;
        case "gi:GiWeightCrush":
            return GiWeightCrush;
        case "gi:GiWeightLiftingDown":
            return GiWeightLiftingDown;
        case "gi:GiWeightLiftingUp":
            return GiWeightLiftingUp;
        case "gi:GiWeightScale":
            return GiWeightScale;
        case "gi:GiWeight":
            return GiWeight;
        case "gi:GiWell":
            return GiWell;
        case "gi:GiWerewolf":
            return GiWerewolf;
        case "gi:GiWesternHat":
            return GiWesternHat;
        case "gi:GiWhaleTail":
            return GiWhaleTail;
        case "gi:GiWheat":
            return GiWheat;
        case "gi:GiWheelbarrow":
            return GiWheelbarrow;
        case "gi:GiWhip":
            return GiWhip;
        case "gi:GiWhiplash":
            return GiWhiplash;
        case "gi:GiWhirlpoolShuriken":
            return GiWhirlpoolShuriken;
        case "gi:GiWhirlwind":
            return GiWhirlwind;
        case "gi:GiWhisk":
            return GiWhisk;
        case "gi:GiWhistle":
            return GiWhistle;
        case "gi:GiWhiteBook":
            return GiWhiteBook;
        case "gi:GiWhiteTower":
            return GiWhiteTower;
        case "gi:GiWideArrowDunk":
            return GiWideArrowDunk;
        case "gi:GiWifiRouter":
            return GiWifiRouter;
        case "gi:GiWildfires":
            return GiWildfires;
        case "gi:GiWilliamTellSkull":
            return GiWilliamTellSkull;
        case "gi:GiWilliamTell":
            return GiWilliamTell;
        case "gi:GiWillowTree":
            return GiWillowTree;
        case "gi:GiWinchesterRifle":
            return GiWinchesterRifle;
        case "gi:GiWindHole":
            return GiWindHole;
        case "gi:GiWindSlap":
            return GiWindSlap;
        case "gi:GiWindTurbine":
            return GiWindTurbine;
        case "gi:GiWindchimes":
            return GiWindchimes;
        case "gi:GiWindmill":
            return GiWindmill;
        case "gi:GiWindowBars":
            return GiWindowBars;
        case "gi:GiWindow":
            return GiWindow;
        case "gi:GiWindpump":
            return GiWindpump;
        case "gi:GiWindsock":
            return GiWindsock;
        case "gi:GiWindyStripes":
            return GiWindyStripes;
        case "gi:GiWineBottle":
            return GiWineBottle;
        case "gi:GiWineGlass":
            return GiWineGlass;
        case "gi:GiWingCloak":
            return GiWingCloak;
        case "gi:GiWingedArrow":
            return GiWingedArrow;
        case "gi:GiWingedEmblem":
            return GiWingedEmblem;
        case "gi:GiWingedLeg":
            return GiWingedLeg;
        case "gi:GiWingedScepter":
            return GiWingedScepter;
        case "gi:GiWingedShield":
            return GiWingedShield;
        case "gi:GiWingedSword":
            return GiWingedSword;
        case "gi:GiWingfoot":
            return GiWingfoot;
        case "gi:GiWinterGloves":
            return GiWinterGloves;
        case "gi:GiWinterHat":
            return GiWinterHat;
        case "gi:GiWireCoil":
            return GiWireCoil;
        case "gi:GiWireframeGlobe":
            return GiWireframeGlobe;
        case "gi:GiWisdom":
            return GiWisdom;
        case "gi:GiWitchFace":
            return GiWitchFace;
        case "gi:GiWitchFlight":
            return GiWitchFlight;
        case "gi:GiWizardFace":
            return GiWizardFace;
        case "gi:GiWizardStaff":
            return GiWizardStaff;
        case "gi:GiWok":
            return GiWok;
        case "gi:GiWolfHead":
            return GiWolfHead;
        case "gi:GiWolfHowl":
            return GiWolfHowl;
        case "gi:GiWolfTrap":
            return GiWolfTrap;
        case "gi:GiWolverineClaws":
            return GiWolverineClaws;
        case "gi:GiWomanElfFace":
            return GiWomanElfFace;
        case "gi:GiWoodAxe":
            return GiWoodAxe;
        case "gi:GiWoodBeam":
            return GiWoodBeam;
        case "gi:GiWoodCabin":
            return GiWoodCabin;
    }
}