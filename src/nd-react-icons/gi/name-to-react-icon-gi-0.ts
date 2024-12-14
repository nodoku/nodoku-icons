import type {IconType} from "react-icons";

import {
    Gi3dGlasses,
    Gi3dHammer,
    Gi3dMeeple,
    Gi3dStairs,
    GiAbacus,
    GiAbbotMeeple,
    GiAbdominalArmor,
    GiAbstract001,
    GiAbstract002,
    GiAbstract003,
    GiAbstract004,
    GiAbstract005,
    GiAbstract006,
    GiAbstract007,
    GiAbstract008,
    GiAbstract009,
    GiAbstract010,
    GiAbstract011,
    GiAbstract012,
    GiAbstract013,
    GiAbstract014,
    GiAbstract015,
    GiAbstract016,
    GiAbstract017,
    GiAbstract018,
    GiAbstract019,
    GiAbstract020,
    GiAbstract021,
    GiAbstract022,
    GiAbstract023,
    GiAbstract024,
    GiAbstract025,
    GiAbstract026,
    GiAbstract027,
    GiAbstract028,
    GiAbstract029,
    GiAbstract030,
    GiAbstract031,
    GiAbstract032,
    GiAbstract033,
    GiAbstract034,
    GiAbstract035,
    GiAbstract036,
    GiAbstract037,
    GiAbstract038,
    GiAbstract039,
    GiAbstract040,
    GiAbstract041,
    GiAbstract042,
    GiAbstract043,
    GiAbstract044,
    GiAbstract045,
    GiAbstract046,
    GiAbstract047,
    GiAbstract048,
    GiAbstract049,
    GiAbstract050,
    GiAbstract051,
    GiAbstract052,
    GiAbstract053,
    GiAbstract054,
    GiAbstract055,
    GiAbstract056,
    GiAbstract057,
    GiAbstract058,
    GiAbstract059,
    GiAbstract060,
    GiAbstract061,
    GiAbstract062,
    GiAbstract063,
    GiAbstract064,
    GiAbstract065,
    GiAbstract066,
    GiAbstract067,
    GiAbstract068,
    GiAbstract069,
    GiAbstract070,
    GiAbstract071,
    GiAbstract072,
    GiAbstract073,
    GiAbstract074,
    GiAbstract075,
    GiAbstract076,
    GiAbstract077,
    GiAbstract078,
    GiAbstract079,
    GiAbstract080,
    GiAbstract081,
    GiAbstract082,
    GiAbstract083,
    GiAbstract084,
    GiAbstract085,
    GiAbstract086,
    GiAbstract087,
    GiAbstract088,
    GiAbstract089,
    GiAbstract090,
    GiAbstract091,
    GiAbstract092,
    GiAbstract093,
    GiAbstract094,
    GiAbstract095,
    GiAbstract096,
    GiAbstract097,
    GiAbstract098,
    GiAbstract099,
    GiAbstract100,
    GiAbstract101,
    GiAbstract102,
    GiAbstract103,
    GiAbstract104,
    GiAbstract105,
    GiAbstract106,
    GiAbstract107,
    GiAbstract108,
    GiAbstract109,
    GiAbstract110,
    GiAbstract111,
    GiAbstract112,
    GiAbstract113,
    GiAbstract114,
    GiAbstract115,
    GiAbstract116,
    GiAbstract117,
    GiAbstract118,
    GiAbstract119,
    GiAbstract120,
    GiAbstract121,
    GiAccordion,
    GiAce,
    GiAchievement,
    GiAchillesHeel,
    GiAcidBlob,
    GiAcidTube,
    GiAcid,
    GiAcorn,
    GiAcousticMegaphone,
    GiAcrobatic,
    GiAerialSignal,
    GiAerodynamicHarpoon,
    GiAerosol,
    GiAfrica,
    GiAfterburn,
    GiAgave,
    GiAges,
    GiAirBalloon,
    GiAirForce,
    GiAirMan,
    GiAirZigzag,
    GiAirplaneArrival,
    GiAirplaneDeparture,
    GiAirplane,
    GiAirtightHatch,
    GiAk47,
    GiAk47U,
    GiAkhet,
    GiAlarmClock,
    GiAlgae,
    GiAlgeria,
    GiAlienBug,
    GiAlienEgg,
    GiAlienFire,
    GiAlienSkull,
    GiAlienStare,
    GiAllForOne,
    GiAllSeeingEye,
    GiAlliedStar,
    GiAlligatorClip,
    GiAlmond,
    GiAmberMosquito,
    GiAmbulance,
    GiAmericanFootballBall,
    GiAmericanFootballHelmet,
    GiAmericanFootballPlayer,
    GiAmericanShield,
    GiAmethyst,
    GiAmmoBox,
    GiAmmoniteFossil,
    GiAmmonite,
    GiAmphora,
    GiAmpleDress,
    GiAmplitude,
    GiAmputation,
    GiAnarchy,
    GiAnatomy,
    GiAnchor,
    GiAncientColumns,
    GiAncientRuins,
    GiAncientScrew,
    GiAncientSword,
    GiAndroidMask,
    GiAndromedaChain,
    GiAngelOutfit,
    GiAngelWings,
    GiAnglerFish,
    GiAngola,
    GiAngryEyes,
    GiAngularSpider,
    GiAnimalHide,
    GiAnimalSkull,
    GiAnkh,
    GiAnnexation,
    GiAnt,
    GiAntarctica,
    GiAnteater,
    GiAnthem,
    GiAntiAircraftGun,
    GiAntibody,
    GiAnticlockwiseRotation,
    GiAnts,
    GiAnubis,
    GiAnvilImpact,
    GiAnvil,
    GiApc,
    GiApolloCapsule,
    GiApothecary,
    GiAppleCore,
    GiAppleMaggot,
    GiAppleSeeds,
    GiAquarium,
    GiAquarius,
    GiAqueduct,
    GiArabicDoor,
    GiArcTriomphe,
    GiArchBridge,
    GiArchaeopteryxFossil,
    GiArcher,
    GiArcheryTarget,
    GiArchitectMask,
    GiArchiveRegister,
    GiArchiveResearch,
    GiArcingBolt,
    GiArena,
    GiAries,
    GiArmBandage,
    GiArmSling,
    GiArm,
    GiArmadilloTail,
    GiArmadillo,
    GiArmorDowngrade,
    GiArmorPunch,
    GiArmorUpgrade,
    GiArmorVest,
    GiArmoredBoomerang,
    GiArmoredPants,
    GiArmouredShell,
    GiArrest,
    GiArrowCluster,
    GiArrowCursor,
    GiArrowDunk,
    GiArrowFlights,
    GiArrowScope,
    GiArrowWings,
    GiArrowed,
    GiArrowhead,
    GiArrowsShield,
    GiArson,
    GiArtificialHive,
    GiArtificialIntelligence,
    GiArtilleryShell,
    GiAscendingBlock,
    GiAsianLantern,
    GiAsparagus,
    GiAspergillum,
    GiAssassinPocket,
    GiAsteroid,
    GiAstrolabe,
    GiAstronautHelmet,
    GiAtSea,
    GiAtlas,
    GiAtomCore,
    GiAtom,
    GiAtomicSlashes,
    GiAttachedShield,
    GiAubergine,
    GiAudioCassette,
    GiAura,
    GiAustralia,
    GiAutoRepair,
    GiAutogun,
    GiAutomaticSas,
    GiAvocado,
    GiAvoidance,
    GiAwareness,
    GiAxeInLog,
    GiAxeInStump,
    GiAxeSwing,
    GiAxeSword,
    GiAxolotl,
    GiAztecCalendarSun,
    GiAzulFlake,
    GiBabyBottle,
    GiBabyFace,
    GiBabyfootPlayers,
    GiBackForth,
    GiBackPain,
    GiBackboneShell,
    GiBackgammon,
    GiBackpack,
    GiBackstab,
    GiBackup,
    GiBackwardTime,
    GiBacon,
    GiBadBreath,
    GiBadGnome,
    GiBagpipes,
    GiBalaclava,
    GiBalkenkreuz,
    GiBallGlow,
    GiBallHeart,
    GiBallPyramid,
    GiBallerinaShoes,
    GiBallista,
    GiBalloonDog,
    GiBalloons,
    GiBambooFountain,
    GiBamboo,
    GiBananaBunch,
    GiBananaPeel,
    GiBananaPeeled,
    GiBanana,
    GiBandageRoll,
    GiBandaged,
    GiBandana,
    GiBandit,
    GiBangingGavel,
    GiBanjo,
    GiBank,
    GiBanknote,
    GiBaobab,
    GiBarStool,
    GiBarbarian,
    GiBarbecue,
    GiBarbedArrow,
    GiBarbedCoil,
    GiBarbedNails,
    GiBarbedSpear,
    GiBarbedStar,
    GiBarbedSun,
    GiBarbedWire,
    GiBarbute,
    GiBarefoot,
    GiBarn,
    GiBarracksTent,
    GiBarracks,
    GiBarrelLeak,
    GiBarrel,
    GiBarricade,
    GiBarrier,
    GiBaseDome,
    GiBaseballBat,
    GiBaseballGlove,
    GiBasket,
    GiBasketballBall,
    GiBasketballBasket,
    GiBasketballJersey,
    GiBassetHoundHead,
    GiBassoon,
    GiBastet,
    GiBatBlade,
    GiBatLeth,
    GiBatMask,
    GiBatWing,
    GiBat,
    GiBathtub,
    GiBaton,
    GiBatteredAxe,
    GiBatteries,
    GiBattery0,
    GiBattery100,
    GiBattery25,
    GiBattery50,
    GiBattery75,
    GiBatteryMinus,
    GiBatteryPackAlt,
    GiBatteryPack,
    GiBatteryPlus,
    GiBattleAxe,
    GiBattleGear,
    GiBattleMech,
    GiBattleTank,
    GiBattleship,
    GiBatwingEmblem,
    GiBayonet,
    GiBeachBag,
    GiBeachBall,
    GiBeachBucket,
    GiBeamSatellite,
    GiBeamWake,
    GiBeamsAura,
    GiBeanstalk,
    GiBearFace,
    GiBearHead,
    GiBeard,
    GiBeastEye,
    GiBeaver,
    GiBedLamp,
    GiBed,
    GiBee,
    GiBeech,
    GiBeehive,
    GiBeerBottle,
    GiBeerHorn,
    GiBeerStein,
    GiBeet,
    GiBeetleShell,
    GiBehold,
    GiBelgium,
    GiBellPepper,
    GiBellShield,
    GiBellows,
    GiBeltArmor,
    GiBeltBuckles,
    GiBelt,
    GiBerriesBowl,
    GiBerryBush,
    GiBestialFangs,
    GiBeveledStar,
    GiBiceps,
    GiBigDiamondRing,
    GiBigEgg,
    GiBigGear,
    GiBigWave,
    GiBilledCap,
    GiBindle,
    GiBinoculars,
    GiBiohazard,
    GiBiplane,
    GiBirchTrees,
    GiBirdCage,
    GiBirdClaw,
    GiBirdHouse,
    GiBirdLimb,
    GiBirdMask,
    GiBirdTwitter,
    GiBison,
    GiBlackBar,
    GiBlackBelt,
    GiBlackBook,
    GiBlackBridge,
    GiBlackFlag,
    GiBlackHandShield,
    GiBlackHoleBolas,
    GiBlackKnightHelm,
    GiBlackSea,
    GiBlackball,
    GiBlackcurrant,
    GiBlacksmith,
    GiBladeBite,
    GiBladeDrag,
    GiBladeFall,
    GiBlast,
    GiBlaster,
    GiBleedingEye,
    GiBleedingHeart,
    GiBleedingWound,
    GiBlender,
    GiBlindfold,
    GiBlockHouse,
    GiBlood,
    GiBloodyStash,
    GiBloodySword,
    GiBlunderbuss,
    GiBo,
    GiBoarEnsign,
    GiBoarTusks,
    GiBoar,
    GiBoatEngine,
    GiBoatFishing,
    GiBoatHorizon,
    GiBoatPropeller,
    GiBoba,
    GiBodyBalance,
    GiBodyHeight,
    GiBodySwapping,
    GiBoilingBubbles,
    GiBokChoy,
    GiBolas,
    GiBolivia,
    GiBoltBomb,
    GiBoltCutter,
    GiBoltDrop,
    GiBoltEye,
    GiBoltSaw,
    GiBoltShield,
    GiBoltSpellCast,
    GiBolterGun,
    GiBomber,
    GiBombingRun,
    GiBoneGnawer,
    GiBoneKnife,
    GiBoneMace,
    GiBonsaiTree,
    GiBookAura,
    GiBookCover,
    GiBookPile,
    GiBookStorm,
    GiBookmark,
    GiBookmarklet,
    GiBookshelf,
    GiBoombox,
    GiBoomerangCross,
    GiBoomerangSun,
    GiBoomerang,
    GiBootKick,
    GiBootPrints,
    GiBootStomp,
    GiBoots,
    GiBooze,
    GiBorderedShield,
    GiBossKey,
    GiBottleCap,
    GiBottleVapors,
    GiBottledBolt,
    GiBottledShadow,
    GiBottomRight3dArrow,
    GiBoulderDash,
    GiBouncingSpring,
    GiBouncingSword,
    GiBowArrow,
    GiBowString,
    GiBowTieRibbon,
    GiBowTie,
    GiBowels,
    GiBowenKnot,
    GiBowieKnife,
    GiBowlOfRice,
    GiBowlSpiral,
    GiBowlingAlley,
    GiBowlingPin,
    GiBowlingPropulsion,
    GiBowlingStrike,
    GiBowman,
    GiBoxCutter,
    GiBoxTrap,
    GiBoxUnpacking,
    GiBoxingGloveSurprise,
    GiBoxingGlove,
    GiBoxingRing,
    GiBracer,
    GiBracers,
    GiBrainDump,
    GiBrainFreeze,
    GiBrainLeak,
    GiBrainStem,
    GiBrainTentacle,
    GiBrain,
    GiBrainstorm,
    GiBranchArrow,
    GiBrandyBottle,
    GiBrasero,
    GiBrassEye,
    GiBrassKnuckles,
    GiBrazilFlag,
    GiBrazil,
    GiBreadSlice,
    GiBread,
    GiBreakingChain,
    GiBreastplate,
    GiBrickPile,
    GiBrickWall,
    GiBridge,
    GiBriefcase,
    GiBrightExplosion,
    GiBroadDagger,
    GiBroadheadArrow,
    GiBroadsword,
    GiBroccoli,
    GiBrodieHelmet,
    GiBrokenArrow,
    GiBrokenAxe,
    GiBrokenBone,
    GiBrokenBottle,
    GiBrokenHeartZone,
    GiBrokenHeart,
    GiBrokenPottery,
    GiBrokenRibbon,
    GiBrokenShield,
    GiBrokenSkull,
    GiBrokenTablet,
    GiBrokenWall,
    GiBroom,
    GiBrutalHelm,
    GiBrute,
    GiBubbleField,
    GiBubbles,
    GiBubblingBeam,
    GiBubblingBowl,
    GiBubblingFlask,
    GiBud,
    GiBuffaloHead,
    GiBugNet,
    GiBugleCall,
    GiBulb,
    GiBulgaria,
    GiBullHorns,
    GiBull,
    GiBulldozer,
    GiBulletBill,
    GiBulletImpacts,
    GiBullets,
    GiBullseye,
    GiBullyMinion,
    GiBundleGrenade,
    GiBunkBeds,
    GiBunkerAssault,
    GiBunker,
    GiBunnySlippers,
    GiBuoy,
    GiBurn,
    GiBurningBlobs,
    GiBurningBook,
    GiBurningDot,
    GiBurningEmbers,
    GiBurningEye,
    GiBurningForest,
    GiBurningMeteor,
    GiBurningPassion,
    GiBurningRoundShot,
    GiBurningSkull,
    GiBurningTree,
    GiBurstBlob,
    GiBusDoors,
    GiBusStop,
    GiBus,
    GiButterToast,
    GiButter,
    GiButterflyFlower,
    GiButterflyKnife,
    GiButterflyWarning,
    GiButterfly,
    GiButtonFinger,
    GiBuyCard,
    GiByzantinTemple,
    GiC96,
    GiCabbage,
    GiCableStayedBridge,
    GiCactusPot,
    GiCactusTap,
    GiCactus,
    GiCadillacHelm,
    GiCaduceus,
    GiCaesar,
    GiCage,
    GiCagedBall,
    GiCakeSlice,
    GiCalavera,
    GiCalculator,
    GiCaldera,
    GiCalendarHalfYear,
    GiCalendar,
    GiCaltrops,
    GiCamargueCross,
    GiCambodia,
    GiCamelHead,
    GiCamel,
    GiCampCookingPot,
    GiCampfire,
    GiCampingTent,
    GiCancel,
    GiCancer,
    GiCandleFlame,
    GiCandleHolder,
    GiCandleLight,
    GiCandleSkull,
    GiCandlebright,
    GiCandles,
    GiCandlestickPhone,
    GiCandyCanes,
    GiCannedFish,
    GiCannister,
    GiCannonBall,
    GiCannonShot,
    GiCannon,
    GiCanoe,
    GiCantua,
    GiCapeArmor,
    GiCape,
    GiCapitol,
    GiCapricorn,
    GiCaptainHatProfile,
    GiCapybara,
    GiCarBattery,
    GiCarDoor,
    GiCarKey,
    GiCarSeat,
    GiCarWheel,
    GiCarabiner,
    GiCarambola,
    GiCaravan,
    GiCaravel,
    GiCard10Clubs,
    GiCard10Diamonds,
    GiCard10Hearts,
    GiCard10Spades,
    GiCard2Clubs,
    GiCard2Diamonds,
    GiCard2Hearts,
    GiCard2Spades,
    GiCard3Clubs,
    GiCard3Diamonds,
    GiCard3Hearts,
    GiCard3Spades,
    GiCard4Clubs,
    GiCard4Diamonds,
    GiCard4Hearts,
    GiCard4Spades,
    GiCard5Clubs,
    GiCard5Diamonds,
    GiCard5Hearts,
    GiCard5Spades,
    GiCard6Clubs,
    GiCard6Diamonds,
    GiCard6Hearts,
    GiCard6Spades,
    GiCard7Clubs,
    GiCard7Diamonds,
    GiCard7Hearts,
    GiCard7Spades,
    GiCard8Clubs,
    GiCard8Diamonds,
    GiCard8Hearts,
    GiCard8Spades,
    GiCard9Clubs,
    GiCard9Diamonds,
    GiCard9Hearts,
    GiCard9Spades,
    GiCardAceClubs,
    GiCardAceDiamonds,
    GiCardAceHearts,
    GiCardAceSpades,
    GiCardBurn,
    GiCardDiscard,
    GiCardDraw,
    GiCardExchange,
    GiCardJackClubs,
    GiCardJackDiamonds,
    GiCardJackHearts,
    GiCardJackSpades,
    GiCardJoker,
    GiCardKingClubs,
    GiCardKingDiamonds,
    GiCardKingHearts,
    GiCardKingSpades,
    GiCardPick,
    GiCardPickup,
    GiCardPlay,
    GiCardQueenClubs,
    GiCardQueenDiamonds,
    GiCardQueenHearts,
    GiCardQueenSpades,
    GiCardRandom,
    GiCardboardBoxClosed,
    GiCardboardBox,
    GiCargoCrane,
    GiCargoCrate,
    GiCargoShip,
    GiCarillon,
    GiCarnivalMask,
    GiCarnivoreMouth,
    GiCarnivorousPlant,
    GiCarnyx,
    GiCarousel,
    GiCarpetBombing,
    GiCarrier,
    GiCarrion,
    GiCarrot,
    GiCartwheel,
    GiCash,
    GiCassowaryHead,
    GiCastleRuins,
    GiCastle,
    GiCat,
    GiCatapult,
    GiCatch,
    GiCaterpillar,
    GiCauldron,
    GiCavalry,
    GiCaveEntrance,
    GiCaveman,
    GiCctvCamera,
    GiCeilingBarnacle,
    GiCeilingLight,
    GiCelebrationFire,
    GiCellarBarrels,
    GiCementShoes,
    GiCentaurHeart,
    GiCentaur,
    GiCentipede,
    GiCenturionHelmet,
    GiCeremonialMask,
    GiChainLightning,
    GiChainMail,
    GiChainedArrowHeads,
    GiChainedHeart,
    GiChaingun,
    GiChainsaw,
    GiChakram,
    GiChaliceDrops,
    GiChalkOutlineMurder,
    GiChameleonGlyph,
    GiChampagneCork,
    GiChampions,
    GiChanterelles,
    GiCharacter,
    GiCharcuterie,
    GiChargedArrow,
    GiChargingBull,
    GiCharging,
    GiChariot,
    GiCharm,
    GiChart,
    GiChatBubble,
    GiCheckMark,
    GiCheckboxTree,
    GiCheckedShield,
    GiCheckeredDiamond,
    GiCheckeredFlag,
    GiChecklist,
    GiCheerful,
    GiCheeseWedge,
    GiChefToque,
    GiChelseaBoot,
    GiChemicalArrow,
    GiChemicalBolt,
    GiChemicalDrop,
    GiChemicalTank,
    GiCherish,
    GiCherry,
    GiChessBishop,
    GiChessKing,
    GiChessKnight,
    GiChessPawn,
    GiChessQueen,
    GiChessRook,
    GiChestArmor,
    GiChest,
    GiChestnutLeaf,
    GiChewedHeart,
    GiChewedSkull,
    GiChickenLeg,
    GiChickenOven,
    GiChicken,
    GiChiliPepper,
    GiChimney,
    GiChipsBag,
    GiChisel,
    GiChocolateBar,
    GiChoice,
    GiChoppedSkull,
    GiChopsticks,
    GiChurch,
    GiCigale,
    GiCigar,
    GiCigarette,
    GiCircleCage,
    GiCircleClaws,
    GiCircleForest,
    GiCircleSparks,
    GiCircle,
    GiCirclingFish,
    GiCircuitry,
    GiCircularSaw,
    GiCircularSawblade,
    GiCityCar,
    GiClamp,
    GiClapperboard,
    GiClarinet,
    GiClassicalKnowledge,
    GiClawHammer,
    GiClawSlashes,
    GiClawString,
    GiClaw,
    GiClaws,
    GiClayBrick,
    GiClaymoreExplosive,
    GiCleaver,
    GiCleopatra,
    GiClick,
    GiCliffCrossing,
    GiCloakDagger,
    GiCloak,
    GiClockwiseRotation,
    GiClockwork,
    GiClosedBarbute,
    GiClosedDoors,
    GiClothJar,
    GiClothes,
    GiClothesline,
    GiClothespin,
    GiCloudDownload,
    GiCloudRing,
    GiCloudUpload,
    GiCloudyFork,
    GiClout,
    GiCloverSpiked,
    GiClover,
    GiClown,
    GiClownfish,
    GiClubs,
    GiClusterBomb,
    GiCoaDeJima,
    GiCoalPile,
    GiCoalWagon,
    GiCobra,
    GiCobweb,
    GiCoconuts,
    GiCoffeeBeans,
    GiCoffeeCup,
    GiCoffeeMug,
    GiCoffeePot,
    GiCoffin,
    GiCogLock,
    GiCog,
    GiCogsplosion,
    GiCoiledNail,
    GiCoilingCurl,
    GiCoinflip,
    GiCoinsPile,
    GiCoins,
    GiColdHeart,
    GiColiseum,
    GiColombia,
    GiColombianStatue,
    GiColtM1911,
    GiColumnVase,
    GiComa,
    GiComb,
    GiCombinationLock,
    GiCometSpark,
    GiCommercialAirplane,
    GiCompactDisc,
    GiCompanionCube,
    GiCompass,
    GiComputerFan,
    GiComputing,
    GiConcentrationOrb,
    GiConcentricCrescents,
    GiConcreteBag,
    GiCondorEmblem,
    GiCondyluraSkull,
    GiConfirmed,
    GiConfrontation,
    GiCongress,
    GiConqueror,
    GiConsoleController,
    GiContortionist,
    GiContract,
    GiControlTower,
    GiConvergenceTarget,
    GiConversation,
    GiConverseShoe,
    GiConvict,
    GiConvince,
    GiConwayLifeGlider,
    GiCook,
    GiCookie,
    GiCookingGlove,
    GiCookingPot,
    GiCoolSpices,
    GiCooler,
    GiCootieCatcher,
    GiCoral,
    GiCorkHat,
    GiCorkedTube,
    GiCorkscrew,
    GiCorn,
    GiCornerExplosion,
    GiCornerFlag,
    GiCornucopia,
    GiCoronation,
    GiCorporal,
    GiCorset,
    GiCorsica,
    GiCosmicEgg,
    GiCottonFlower,
    GiCoveredJar,
    GiCow,
    GiCowboyBoot,
    GiCowboyHolster,
    GiCowled,
    GiCpuShot,
    GiCpu,
    GiCrabClaw,
    GiCrab,
    GiCrackedAlienSkull,
    GiCrackedBallDunk,
    GiCrackedDisc,
    GiCrackedGlass,
    GiCrackedHelm,
    GiCrackedMask,
    GiCrackedSaber,
    GiCrackedShield,
    GiCrafting,
    GiCrags,
    GiCrane,
    GiCreditsCurrency,
    GiCrenelCrown,
    GiCrenulatedShield,
    GiCrescentBlade,
} from "react-icons/gi"

export function nameToReactIcon_gi_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "gi:Gi3dGlasses":
            return Gi3dGlasses;
        case "gi:Gi3dHammer":
            return Gi3dHammer;
        case "gi:Gi3dMeeple":
            return Gi3dMeeple;
        case "gi:Gi3dStairs":
            return Gi3dStairs;
        case "gi:GiAbacus":
            return GiAbacus;
        case "gi:GiAbbotMeeple":
            return GiAbbotMeeple;
        case "gi:GiAbdominalArmor":
            return GiAbdominalArmor;
        case "gi:GiAbstract001":
            return GiAbstract001;
        case "gi:GiAbstract002":
            return GiAbstract002;
        case "gi:GiAbstract003":
            return GiAbstract003;
        case "gi:GiAbstract004":
            return GiAbstract004;
        case "gi:GiAbstract005":
            return GiAbstract005;
        case "gi:GiAbstract006":
            return GiAbstract006;
        case "gi:GiAbstract007":
            return GiAbstract007;
        case "gi:GiAbstract008":
            return GiAbstract008;
        case "gi:GiAbstract009":
            return GiAbstract009;
        case "gi:GiAbstract010":
            return GiAbstract010;
        case "gi:GiAbstract011":
            return GiAbstract011;
        case "gi:GiAbstract012":
            return GiAbstract012;
        case "gi:GiAbstract013":
            return GiAbstract013;
        case "gi:GiAbstract014":
            return GiAbstract014;
        case "gi:GiAbstract015":
            return GiAbstract015;
        case "gi:GiAbstract016":
            return GiAbstract016;
        case "gi:GiAbstract017":
            return GiAbstract017;
        case "gi:GiAbstract018":
            return GiAbstract018;
        case "gi:GiAbstract019":
            return GiAbstract019;
        case "gi:GiAbstract020":
            return GiAbstract020;
        case "gi:GiAbstract021":
            return GiAbstract021;
        case "gi:GiAbstract022":
            return GiAbstract022;
        case "gi:GiAbstract023":
            return GiAbstract023;
        case "gi:GiAbstract024":
            return GiAbstract024;
        case "gi:GiAbstract025":
            return GiAbstract025;
        case "gi:GiAbstract026":
            return GiAbstract026;
        case "gi:GiAbstract027":
            return GiAbstract027;
        case "gi:GiAbstract028":
            return GiAbstract028;
        case "gi:GiAbstract029":
            return GiAbstract029;
        case "gi:GiAbstract030":
            return GiAbstract030;
        case "gi:GiAbstract031":
            return GiAbstract031;
        case "gi:GiAbstract032":
            return GiAbstract032;
        case "gi:GiAbstract033":
            return GiAbstract033;
        case "gi:GiAbstract034":
            return GiAbstract034;
        case "gi:GiAbstract035":
            return GiAbstract035;
        case "gi:GiAbstract036":
            return GiAbstract036;
        case "gi:GiAbstract037":
            return GiAbstract037;
        case "gi:GiAbstract038":
            return GiAbstract038;
        case "gi:GiAbstract039":
            return GiAbstract039;
        case "gi:GiAbstract040":
            return GiAbstract040;
        case "gi:GiAbstract041":
            return GiAbstract041;
        case "gi:GiAbstract042":
            return GiAbstract042;
        case "gi:GiAbstract043":
            return GiAbstract043;
        case "gi:GiAbstract044":
            return GiAbstract044;
        case "gi:GiAbstract045":
            return GiAbstract045;
        case "gi:GiAbstract046":
            return GiAbstract046;
        case "gi:GiAbstract047":
            return GiAbstract047;
        case "gi:GiAbstract048":
            return GiAbstract048;
        case "gi:GiAbstract049":
            return GiAbstract049;
        case "gi:GiAbstract050":
            return GiAbstract050;
        case "gi:GiAbstract051":
            return GiAbstract051;
        case "gi:GiAbstract052":
            return GiAbstract052;
        case "gi:GiAbstract053":
            return GiAbstract053;
        case "gi:GiAbstract054":
            return GiAbstract054;
        case "gi:GiAbstract055":
            return GiAbstract055;
        case "gi:GiAbstract056":
            return GiAbstract056;
        case "gi:GiAbstract057":
            return GiAbstract057;
        case "gi:GiAbstract058":
            return GiAbstract058;
        case "gi:GiAbstract059":
            return GiAbstract059;
        case "gi:GiAbstract060":
            return GiAbstract060;
        case "gi:GiAbstract061":
            return GiAbstract061;
        case "gi:GiAbstract062":
            return GiAbstract062;
        case "gi:GiAbstract063":
            return GiAbstract063;
        case "gi:GiAbstract064":
            return GiAbstract064;
        case "gi:GiAbstract065":
            return GiAbstract065;
        case "gi:GiAbstract066":
            return GiAbstract066;
        case "gi:GiAbstract067":
            return GiAbstract067;
        case "gi:GiAbstract068":
            return GiAbstract068;
        case "gi:GiAbstract069":
            return GiAbstract069;
        case "gi:GiAbstract070":
            return GiAbstract070;
        case "gi:GiAbstract071":
            return GiAbstract071;
        case "gi:GiAbstract072":
            return GiAbstract072;
        case "gi:GiAbstract073":
            return GiAbstract073;
        case "gi:GiAbstract074":
            return GiAbstract074;
        case "gi:GiAbstract075":
            return GiAbstract075;
        case "gi:GiAbstract076":
            return GiAbstract076;
        case "gi:GiAbstract077":
            return GiAbstract077;
        case "gi:GiAbstract078":
            return GiAbstract078;
        case "gi:GiAbstract079":
            return GiAbstract079;
        case "gi:GiAbstract080":
            return GiAbstract080;
        case "gi:GiAbstract081":
            return GiAbstract081;
        case "gi:GiAbstract082":
            return GiAbstract082;
        case "gi:GiAbstract083":
            return GiAbstract083;
        case "gi:GiAbstract084":
            return GiAbstract084;
        case "gi:GiAbstract085":
            return GiAbstract085;
        case "gi:GiAbstract086":
            return GiAbstract086;
        case "gi:GiAbstract087":
            return GiAbstract087;
        case "gi:GiAbstract088":
            return GiAbstract088;
        case "gi:GiAbstract089":
            return GiAbstract089;
        case "gi:GiAbstract090":
            return GiAbstract090;
        case "gi:GiAbstract091":
            return GiAbstract091;
        case "gi:GiAbstract092":
            return GiAbstract092;
        case "gi:GiAbstract093":
            return GiAbstract093;
        case "gi:GiAbstract094":
            return GiAbstract094;
        case "gi:GiAbstract095":
            return GiAbstract095;
        case "gi:GiAbstract096":
            return GiAbstract096;
        case "gi:GiAbstract097":
            return GiAbstract097;
        case "gi:GiAbstract098":
            return GiAbstract098;
        case "gi:GiAbstract099":
            return GiAbstract099;
        case "gi:GiAbstract100":
            return GiAbstract100;
        case "gi:GiAbstract101":
            return GiAbstract101;
        case "gi:GiAbstract102":
            return GiAbstract102;
        case "gi:GiAbstract103":
            return GiAbstract103;
        case "gi:GiAbstract104":
            return GiAbstract104;
        case "gi:GiAbstract105":
            return GiAbstract105;
        case "gi:GiAbstract106":
            return GiAbstract106;
        case "gi:GiAbstract107":
            return GiAbstract107;
        case "gi:GiAbstract108":
            return GiAbstract108;
        case "gi:GiAbstract109":
            return GiAbstract109;
        case "gi:GiAbstract110":
            return GiAbstract110;
        case "gi:GiAbstract111":
            return GiAbstract111;
        case "gi:GiAbstract112":
            return GiAbstract112;
        case "gi:GiAbstract113":
            return GiAbstract113;
        case "gi:GiAbstract114":
            return GiAbstract114;
        case "gi:GiAbstract115":
            return GiAbstract115;
        case "gi:GiAbstract116":
            return GiAbstract116;
        case "gi:GiAbstract117":
            return GiAbstract117;
        case "gi:GiAbstract118":
            return GiAbstract118;
        case "gi:GiAbstract119":
            return GiAbstract119;
        case "gi:GiAbstract120":
            return GiAbstract120;
        case "gi:GiAbstract121":
            return GiAbstract121;
        case "gi:GiAccordion":
            return GiAccordion;
        case "gi:GiAce":
            return GiAce;
        case "gi:GiAchievement":
            return GiAchievement;
        case "gi:GiAchillesHeel":
            return GiAchillesHeel;
        case "gi:GiAcidBlob":
            return GiAcidBlob;
        case "gi:GiAcidTube":
            return GiAcidTube;
        case "gi:GiAcid":
            return GiAcid;
        case "gi:GiAcorn":
            return GiAcorn;
        case "gi:GiAcousticMegaphone":
            return GiAcousticMegaphone;
        case "gi:GiAcrobatic":
            return GiAcrobatic;
        case "gi:GiAerialSignal":
            return GiAerialSignal;
        case "gi:GiAerodynamicHarpoon":
            return GiAerodynamicHarpoon;
        case "gi:GiAerosol":
            return GiAerosol;
        case "gi:GiAfrica":
            return GiAfrica;
        case "gi:GiAfterburn":
            return GiAfterburn;
        case "gi:GiAgave":
            return GiAgave;
        case "gi:GiAges":
            return GiAges;
        case "gi:GiAirBalloon":
            return GiAirBalloon;
        case "gi:GiAirForce":
            return GiAirForce;
        case "gi:GiAirMan":
            return GiAirMan;
        case "gi:GiAirZigzag":
            return GiAirZigzag;
        case "gi:GiAirplaneArrival":
            return GiAirplaneArrival;
        case "gi:GiAirplaneDeparture":
            return GiAirplaneDeparture;
        case "gi:GiAirplane":
            return GiAirplane;
        case "gi:GiAirtightHatch":
            return GiAirtightHatch;
        case "gi:GiAk47":
            return GiAk47;
        case "gi:GiAk47U":
            return GiAk47U;
        case "gi:GiAkhet":
            return GiAkhet;
        case "gi:GiAlarmClock":
            return GiAlarmClock;
        case "gi:GiAlgae":
            return GiAlgae;
        case "gi:GiAlgeria":
            return GiAlgeria;
        case "gi:GiAlienBug":
            return GiAlienBug;
        case "gi:GiAlienEgg":
            return GiAlienEgg;
        case "gi:GiAlienFire":
            return GiAlienFire;
        case "gi:GiAlienSkull":
            return GiAlienSkull;
        case "gi:GiAlienStare":
            return GiAlienStare;
        case "gi:GiAllForOne":
            return GiAllForOne;
        case "gi:GiAllSeeingEye":
            return GiAllSeeingEye;
        case "gi:GiAlliedStar":
            return GiAlliedStar;
        case "gi:GiAlligatorClip":
            return GiAlligatorClip;
        case "gi:GiAlmond":
            return GiAlmond;
        case "gi:GiAmberMosquito":
            return GiAmberMosquito;
        case "gi:GiAmbulance":
            return GiAmbulance;
        case "gi:GiAmericanFootballBall":
            return GiAmericanFootballBall;
        case "gi:GiAmericanFootballHelmet":
            return GiAmericanFootballHelmet;
        case "gi:GiAmericanFootballPlayer":
            return GiAmericanFootballPlayer;
        case "gi:GiAmericanShield":
            return GiAmericanShield;
        case "gi:GiAmethyst":
            return GiAmethyst;
        case "gi:GiAmmoBox":
            return GiAmmoBox;
        case "gi:GiAmmoniteFossil":
            return GiAmmoniteFossil;
        case "gi:GiAmmonite":
            return GiAmmonite;
        case "gi:GiAmphora":
            return GiAmphora;
        case "gi:GiAmpleDress":
            return GiAmpleDress;
        case "gi:GiAmplitude":
            return GiAmplitude;
        case "gi:GiAmputation":
            return GiAmputation;
        case "gi:GiAnarchy":
            return GiAnarchy;
        case "gi:GiAnatomy":
            return GiAnatomy;
        case "gi:GiAnchor":
            return GiAnchor;
        case "gi:GiAncientColumns":
            return GiAncientColumns;
        case "gi:GiAncientRuins":
            return GiAncientRuins;
        case "gi:GiAncientScrew":
            return GiAncientScrew;
        case "gi:GiAncientSword":
            return GiAncientSword;
        case "gi:GiAndroidMask":
            return GiAndroidMask;
        case "gi:GiAndromedaChain":
            return GiAndromedaChain;
        case "gi:GiAngelOutfit":
            return GiAngelOutfit;
        case "gi:GiAngelWings":
            return GiAngelWings;
        case "gi:GiAnglerFish":
            return GiAnglerFish;
        case "gi:GiAngola":
            return GiAngola;
        case "gi:GiAngryEyes":
            return GiAngryEyes;
        case "gi:GiAngularSpider":
            return GiAngularSpider;
        case "gi:GiAnimalHide":
            return GiAnimalHide;
        case "gi:GiAnimalSkull":
            return GiAnimalSkull;
        case "gi:GiAnkh":
            return GiAnkh;
        case "gi:GiAnnexation":
            return GiAnnexation;
        case "gi:GiAnt":
            return GiAnt;
        case "gi:GiAntarctica":
            return GiAntarctica;
        case "gi:GiAnteater":
            return GiAnteater;
        case "gi:GiAnthem":
            return GiAnthem;
        case "gi:GiAntiAircraftGun":
            return GiAntiAircraftGun;
        case "gi:GiAntibody":
            return GiAntibody;
        case "gi:GiAnticlockwiseRotation":
            return GiAnticlockwiseRotation;
        case "gi:GiAnts":
            return GiAnts;
        case "gi:GiAnubis":
            return GiAnubis;
        case "gi:GiAnvilImpact":
            return GiAnvilImpact;
        case "gi:GiAnvil":
            return GiAnvil;
        case "gi:GiApc":
            return GiApc;
        case "gi:GiApolloCapsule":
            return GiApolloCapsule;
        case "gi:GiApothecary":
            return GiApothecary;
        case "gi:GiAppleCore":
            return GiAppleCore;
        case "gi:GiAppleMaggot":
            return GiAppleMaggot;
        case "gi:GiAppleSeeds":
            return GiAppleSeeds;
        case "gi:GiAquarium":
            return GiAquarium;
        case "gi:GiAquarius":
            return GiAquarius;
        case "gi:GiAqueduct":
            return GiAqueduct;
        case "gi:GiArabicDoor":
            return GiArabicDoor;
        case "gi:GiArcTriomphe":
            return GiArcTriomphe;
        case "gi:GiArchBridge":
            return GiArchBridge;
        case "gi:GiArchaeopteryxFossil":
            return GiArchaeopteryxFossil;
        case "gi:GiArcher":
            return GiArcher;
        case "gi:GiArcheryTarget":
            return GiArcheryTarget;
        case "gi:GiArchitectMask":
            return GiArchitectMask;
        case "gi:GiArchiveRegister":
            return GiArchiveRegister;
        case "gi:GiArchiveResearch":
            return GiArchiveResearch;
        case "gi:GiArcingBolt":
            return GiArcingBolt;
        case "gi:GiArena":
            return GiArena;
        case "gi:GiAries":
            return GiAries;
        case "gi:GiArmBandage":
            return GiArmBandage;
        case "gi:GiArmSling":
            return GiArmSling;
        case "gi:GiArm":
            return GiArm;
        case "gi:GiArmadilloTail":
            return GiArmadilloTail;
        case "gi:GiArmadillo":
            return GiArmadillo;
        case "gi:GiArmorDowngrade":
            return GiArmorDowngrade;
        case "gi:GiArmorPunch":
            return GiArmorPunch;
        case "gi:GiArmorUpgrade":
            return GiArmorUpgrade;
        case "gi:GiArmorVest":
            return GiArmorVest;
        case "gi:GiArmoredBoomerang":
            return GiArmoredBoomerang;
        case "gi:GiArmoredPants":
            return GiArmoredPants;
        case "gi:GiArmouredShell":
            return GiArmouredShell;
        case "gi:GiArrest":
            return GiArrest;
        case "gi:GiArrowCluster":
            return GiArrowCluster;
        case "gi:GiArrowCursor":
            return GiArrowCursor;
        case "gi:GiArrowDunk":
            return GiArrowDunk;
        case "gi:GiArrowFlights":
            return GiArrowFlights;
        case "gi:GiArrowScope":
            return GiArrowScope;
        case "gi:GiArrowWings":
            return GiArrowWings;
        case "gi:GiArrowed":
            return GiArrowed;
        case "gi:GiArrowhead":
            return GiArrowhead;
        case "gi:GiArrowsShield":
            return GiArrowsShield;
        case "gi:GiArson":
            return GiArson;
        case "gi:GiArtificialHive":
            return GiArtificialHive;
        case "gi:GiArtificialIntelligence":
            return GiArtificialIntelligence;
        case "gi:GiArtilleryShell":
            return GiArtilleryShell;
        case "gi:GiAscendingBlock":
            return GiAscendingBlock;
        case "gi:GiAsianLantern":
            return GiAsianLantern;
        case "gi:GiAsparagus":
            return GiAsparagus;
        case "gi:GiAspergillum":
            return GiAspergillum;
        case "gi:GiAssassinPocket":
            return GiAssassinPocket;
        case "gi:GiAsteroid":
            return GiAsteroid;
        case "gi:GiAstrolabe":
            return GiAstrolabe;
        case "gi:GiAstronautHelmet":
            return GiAstronautHelmet;
        case "gi:GiAtSea":
            return GiAtSea;
        case "gi:GiAtlas":
            return GiAtlas;
        case "gi:GiAtomCore":
            return GiAtomCore;
        case "gi:GiAtom":
            return GiAtom;
        case "gi:GiAtomicSlashes":
            return GiAtomicSlashes;
        case "gi:GiAttachedShield":
            return GiAttachedShield;
        case "gi:GiAubergine":
            return GiAubergine;
        case "gi:GiAudioCassette":
            return GiAudioCassette;
        case "gi:GiAura":
            return GiAura;
        case "gi:GiAustralia":
            return GiAustralia;
        case "gi:GiAutoRepair":
            return GiAutoRepair;
        case "gi:GiAutogun":
            return GiAutogun;
        case "gi:GiAutomaticSas":
            return GiAutomaticSas;
        case "gi:GiAvocado":
            return GiAvocado;
        case "gi:GiAvoidance":
            return GiAvoidance;
        case "gi:GiAwareness":
            return GiAwareness;
        case "gi:GiAxeInLog":
            return GiAxeInLog;
        case "gi:GiAxeInStump":
            return GiAxeInStump;
        case "gi:GiAxeSwing":
            return GiAxeSwing;
        case "gi:GiAxeSword":
            return GiAxeSword;
        case "gi:GiAxolotl":
            return GiAxolotl;
        case "gi:GiAztecCalendarSun":
            return GiAztecCalendarSun;
        case "gi:GiAzulFlake":
            return GiAzulFlake;
        case "gi:GiBabyBottle":
            return GiBabyBottle;
        case "gi:GiBabyFace":
            return GiBabyFace;
        case "gi:GiBabyfootPlayers":
            return GiBabyfootPlayers;
        case "gi:GiBackForth":
            return GiBackForth;
        case "gi:GiBackPain":
            return GiBackPain;
        case "gi:GiBackboneShell":
            return GiBackboneShell;
        case "gi:GiBackgammon":
            return GiBackgammon;
        case "gi:GiBackpack":
            return GiBackpack;
        case "gi:GiBackstab":
            return GiBackstab;
        case "gi:GiBackup":
            return GiBackup;
        case "gi:GiBackwardTime":
            return GiBackwardTime;
        case "gi:GiBacon":
            return GiBacon;
        case "gi:GiBadBreath":
            return GiBadBreath;
        case "gi:GiBadGnome":
            return GiBadGnome;
        case "gi:GiBagpipes":
            return GiBagpipes;
        case "gi:GiBalaclava":
            return GiBalaclava;
        case "gi:GiBalkenkreuz":
            return GiBalkenkreuz;
        case "gi:GiBallGlow":
            return GiBallGlow;
        case "gi:GiBallHeart":
            return GiBallHeart;
        case "gi:GiBallPyramid":
            return GiBallPyramid;
        case "gi:GiBallerinaShoes":
            return GiBallerinaShoes;
        case "gi:GiBallista":
            return GiBallista;
        case "gi:GiBalloonDog":
            return GiBalloonDog;
        case "gi:GiBalloons":
            return GiBalloons;
        case "gi:GiBambooFountain":
            return GiBambooFountain;
        case "gi:GiBamboo":
            return GiBamboo;
        case "gi:GiBananaBunch":
            return GiBananaBunch;
        case "gi:GiBananaPeel":
            return GiBananaPeel;
        case "gi:GiBananaPeeled":
            return GiBananaPeeled;
        case "gi:GiBanana":
            return GiBanana;
        case "gi:GiBandageRoll":
            return GiBandageRoll;
        case "gi:GiBandaged":
            return GiBandaged;
        case "gi:GiBandana":
            return GiBandana;
        case "gi:GiBandit":
            return GiBandit;
        case "gi:GiBangingGavel":
            return GiBangingGavel;
        case "gi:GiBanjo":
            return GiBanjo;
        case "gi:GiBank":
            return GiBank;
        case "gi:GiBanknote":
            return GiBanknote;
        case "gi:GiBaobab":
            return GiBaobab;
        case "gi:GiBarStool":
            return GiBarStool;
        case "gi:GiBarbarian":
            return GiBarbarian;
        case "gi:GiBarbecue":
            return GiBarbecue;
        case "gi:GiBarbedArrow":
            return GiBarbedArrow;
        case "gi:GiBarbedCoil":
            return GiBarbedCoil;
        case "gi:GiBarbedNails":
            return GiBarbedNails;
        case "gi:GiBarbedSpear":
            return GiBarbedSpear;
        case "gi:GiBarbedStar":
            return GiBarbedStar;
        case "gi:GiBarbedSun":
            return GiBarbedSun;
        case "gi:GiBarbedWire":
            return GiBarbedWire;
        case "gi:GiBarbute":
            return GiBarbute;
        case "gi:GiBarefoot":
            return GiBarefoot;
        case "gi:GiBarn":
            return GiBarn;
        case "gi:GiBarracksTent":
            return GiBarracksTent;
        case "gi:GiBarracks":
            return GiBarracks;
        case "gi:GiBarrelLeak":
            return GiBarrelLeak;
        case "gi:GiBarrel":
            return GiBarrel;
        case "gi:GiBarricade":
            return GiBarricade;
        case "gi:GiBarrier":
            return GiBarrier;
        case "gi:GiBaseDome":
            return GiBaseDome;
        case "gi:GiBaseballBat":
            return GiBaseballBat;
        case "gi:GiBaseballGlove":
            return GiBaseballGlove;
        case "gi:GiBasket":
            return GiBasket;
        case "gi:GiBasketballBall":
            return GiBasketballBall;
        case "gi:GiBasketballBasket":
            return GiBasketballBasket;
        case "gi:GiBasketballJersey":
            return GiBasketballJersey;
        case "gi:GiBassetHoundHead":
            return GiBassetHoundHead;
        case "gi:GiBassoon":
            return GiBassoon;
        case "gi:GiBastet":
            return GiBastet;
        case "gi:GiBatBlade":
            return GiBatBlade;
        case "gi:GiBatLeth":
            return GiBatLeth;
        case "gi:GiBatMask":
            return GiBatMask;
        case "gi:GiBatWing":
            return GiBatWing;
        case "gi:GiBat":
            return GiBat;
        case "gi:GiBathtub":
            return GiBathtub;
        case "gi:GiBaton":
            return GiBaton;
        case "gi:GiBatteredAxe":
            return GiBatteredAxe;
        case "gi:GiBatteries":
            return GiBatteries;
        case "gi:GiBattery0":
            return GiBattery0;
        case "gi:GiBattery100":
            return GiBattery100;
        case "gi:GiBattery25":
            return GiBattery25;
        case "gi:GiBattery50":
            return GiBattery50;
        case "gi:GiBattery75":
            return GiBattery75;
        case "gi:GiBatteryMinus":
            return GiBatteryMinus;
        case "gi:GiBatteryPackAlt":
            return GiBatteryPackAlt;
        case "gi:GiBatteryPack":
            return GiBatteryPack;
        case "gi:GiBatteryPlus":
            return GiBatteryPlus;
        case "gi:GiBattleAxe":
            return GiBattleAxe;
        case "gi:GiBattleGear":
            return GiBattleGear;
        case "gi:GiBattleMech":
            return GiBattleMech;
        case "gi:GiBattleTank":
            return GiBattleTank;
        case "gi:GiBattleship":
            return GiBattleship;
        case "gi:GiBatwingEmblem":
            return GiBatwingEmblem;
        case "gi:GiBayonet":
            return GiBayonet;
        case "gi:GiBeachBag":
            return GiBeachBag;
        case "gi:GiBeachBall":
            return GiBeachBall;
        case "gi:GiBeachBucket":
            return GiBeachBucket;
        case "gi:GiBeamSatellite":
            return GiBeamSatellite;
        case "gi:GiBeamWake":
            return GiBeamWake;
        case "gi:GiBeamsAura":
            return GiBeamsAura;
        case "gi:GiBeanstalk":
            return GiBeanstalk;
        case "gi:GiBearFace":
            return GiBearFace;
        case "gi:GiBearHead":
            return GiBearHead;
        case "gi:GiBeard":
            return GiBeard;
        case "gi:GiBeastEye":
            return GiBeastEye;
        case "gi:GiBeaver":
            return GiBeaver;
        case "gi:GiBedLamp":
            return GiBedLamp;
        case "gi:GiBed":
            return GiBed;
        case "gi:GiBee":
            return GiBee;
        case "gi:GiBeech":
            return GiBeech;
        case "gi:GiBeehive":
            return GiBeehive;
        case "gi:GiBeerBottle":
            return GiBeerBottle;
        case "gi:GiBeerHorn":
            return GiBeerHorn;
        case "gi:GiBeerStein":
            return GiBeerStein;
        case "gi:GiBeet":
            return GiBeet;
        case "gi:GiBeetleShell":
            return GiBeetleShell;
        case "gi:GiBehold":
            return GiBehold;
        case "gi:GiBelgium":
            return GiBelgium;
        case "gi:GiBellPepper":
            return GiBellPepper;
        case "gi:GiBellShield":
            return GiBellShield;
        case "gi:GiBellows":
            return GiBellows;
        case "gi:GiBeltArmor":
            return GiBeltArmor;
        case "gi:GiBeltBuckles":
            return GiBeltBuckles;
        case "gi:GiBelt":
            return GiBelt;
        case "gi:GiBerriesBowl":
            return GiBerriesBowl;
        case "gi:GiBerryBush":
            return GiBerryBush;
        case "gi:GiBestialFangs":
            return GiBestialFangs;
        case "gi:GiBeveledStar":
            return GiBeveledStar;
        case "gi:GiBiceps":
            return GiBiceps;
        case "gi:GiBigDiamondRing":
            return GiBigDiamondRing;
        case "gi:GiBigEgg":
            return GiBigEgg;
        case "gi:GiBigGear":
            return GiBigGear;
        case "gi:GiBigWave":
            return GiBigWave;
        case "gi:GiBilledCap":
            return GiBilledCap;
        case "gi:GiBindle":
            return GiBindle;
        case "gi:GiBinoculars":
            return GiBinoculars;
        case "gi:GiBiohazard":
            return GiBiohazard;
        case "gi:GiBiplane":
            return GiBiplane;
        case "gi:GiBirchTrees":
            return GiBirchTrees;
        case "gi:GiBirdCage":
            return GiBirdCage;
        case "gi:GiBirdClaw":
            return GiBirdClaw;
        case "gi:GiBirdHouse":
            return GiBirdHouse;
        case "gi:GiBirdLimb":
            return GiBirdLimb;
        case "gi:GiBirdMask":
            return GiBirdMask;
        case "gi:GiBirdTwitter":
            return GiBirdTwitter;
        case "gi:GiBison":
            return GiBison;
        case "gi:GiBlackBar":
            return GiBlackBar;
        case "gi:GiBlackBelt":
            return GiBlackBelt;
        case "gi:GiBlackBook":
            return GiBlackBook;
        case "gi:GiBlackBridge":
            return GiBlackBridge;
        case "gi:GiBlackFlag":
            return GiBlackFlag;
        case "gi:GiBlackHandShield":
            return GiBlackHandShield;
        case "gi:GiBlackHoleBolas":
            return GiBlackHoleBolas;
        case "gi:GiBlackKnightHelm":
            return GiBlackKnightHelm;
        case "gi:GiBlackSea":
            return GiBlackSea;
        case "gi:GiBlackball":
            return GiBlackball;
        case "gi:GiBlackcurrant":
            return GiBlackcurrant;
        case "gi:GiBlacksmith":
            return GiBlacksmith;
        case "gi:GiBladeBite":
            return GiBladeBite;
        case "gi:GiBladeDrag":
            return GiBladeDrag;
        case "gi:GiBladeFall":
            return GiBladeFall;
        case "gi:GiBlast":
            return GiBlast;
        case "gi:GiBlaster":
            return GiBlaster;
        case "gi:GiBleedingEye":
            return GiBleedingEye;
        case "gi:GiBleedingHeart":
            return GiBleedingHeart;
        case "gi:GiBleedingWound":
            return GiBleedingWound;
        case "gi:GiBlender":
            return GiBlender;
        case "gi:GiBlindfold":
            return GiBlindfold;
        case "gi:GiBlockHouse":
            return GiBlockHouse;
        case "gi:GiBlood":
            return GiBlood;
        case "gi:GiBloodyStash":
            return GiBloodyStash;
        case "gi:GiBloodySword":
            return GiBloodySword;
        case "gi:GiBlunderbuss":
            return GiBlunderbuss;
        case "gi:GiBo":
            return GiBo;
        case "gi:GiBoarEnsign":
            return GiBoarEnsign;
        case "gi:GiBoarTusks":
            return GiBoarTusks;
        case "gi:GiBoar":
            return GiBoar;
        case "gi:GiBoatEngine":
            return GiBoatEngine;
        case "gi:GiBoatFishing":
            return GiBoatFishing;
        case "gi:GiBoatHorizon":
            return GiBoatHorizon;
        case "gi:GiBoatPropeller":
            return GiBoatPropeller;
        case "gi:GiBoba":
            return GiBoba;
        case "gi:GiBodyBalance":
            return GiBodyBalance;
        case "gi:GiBodyHeight":
            return GiBodyHeight;
        case "gi:GiBodySwapping":
            return GiBodySwapping;
        case "gi:GiBoilingBubbles":
            return GiBoilingBubbles;
        case "gi:GiBokChoy":
            return GiBokChoy;
        case "gi:GiBolas":
            return GiBolas;
        case "gi:GiBolivia":
            return GiBolivia;
        case "gi:GiBoltBomb":
            return GiBoltBomb;
        case "gi:GiBoltCutter":
            return GiBoltCutter;
        case "gi:GiBoltDrop":
            return GiBoltDrop;
        case "gi:GiBoltEye":
            return GiBoltEye;
        case "gi:GiBoltSaw":
            return GiBoltSaw;
        case "gi:GiBoltShield":
            return GiBoltShield;
        case "gi:GiBoltSpellCast":
            return GiBoltSpellCast;
        case "gi:GiBolterGun":
            return GiBolterGun;
        case "gi:GiBomber":
            return GiBomber;
        case "gi:GiBombingRun":
            return GiBombingRun;
        case "gi:GiBoneGnawer":
            return GiBoneGnawer;
        case "gi:GiBoneKnife":
            return GiBoneKnife;
        case "gi:GiBoneMace":
            return GiBoneMace;
        case "gi:GiBonsaiTree":
            return GiBonsaiTree;
        case "gi:GiBookAura":
            return GiBookAura;
        case "gi:GiBookCover":
            return GiBookCover;
        case "gi:GiBookPile":
            return GiBookPile;
        case "gi:GiBookStorm":
            return GiBookStorm;
        case "gi:GiBookmark":
            return GiBookmark;
        case "gi:GiBookmarklet":
            return GiBookmarklet;
        case "gi:GiBookshelf":
            return GiBookshelf;
        case "gi:GiBoombox":
            return GiBoombox;
        case "gi:GiBoomerangCross":
            return GiBoomerangCross;
        case "gi:GiBoomerangSun":
            return GiBoomerangSun;
        case "gi:GiBoomerang":
            return GiBoomerang;
        case "gi:GiBootKick":
            return GiBootKick;
        case "gi:GiBootPrints":
            return GiBootPrints;
        case "gi:GiBootStomp":
            return GiBootStomp;
        case "gi:GiBoots":
            return GiBoots;
        case "gi:GiBooze":
            return GiBooze;
        case "gi:GiBorderedShield":
            return GiBorderedShield;
        case "gi:GiBossKey":
            return GiBossKey;
        case "gi:GiBottleCap":
            return GiBottleCap;
        case "gi:GiBottleVapors":
            return GiBottleVapors;
        case "gi:GiBottledBolt":
            return GiBottledBolt;
        case "gi:GiBottledShadow":
            return GiBottledShadow;
        case "gi:GiBottomRight3dArrow":
            return GiBottomRight3dArrow;
        case "gi:GiBoulderDash":
            return GiBoulderDash;
        case "gi:GiBouncingSpring":
            return GiBouncingSpring;
        case "gi:GiBouncingSword":
            return GiBouncingSword;
        case "gi:GiBowArrow":
            return GiBowArrow;
        case "gi:GiBowString":
            return GiBowString;
        case "gi:GiBowTieRibbon":
            return GiBowTieRibbon;
        case "gi:GiBowTie":
            return GiBowTie;
        case "gi:GiBowels":
            return GiBowels;
        case "gi:GiBowenKnot":
            return GiBowenKnot;
        case "gi:GiBowieKnife":
            return GiBowieKnife;
        case "gi:GiBowlOfRice":
            return GiBowlOfRice;
        case "gi:GiBowlSpiral":
            return GiBowlSpiral;
        case "gi:GiBowlingAlley":
            return GiBowlingAlley;
        case "gi:GiBowlingPin":
            return GiBowlingPin;
        case "gi:GiBowlingPropulsion":
            return GiBowlingPropulsion;
        case "gi:GiBowlingStrike":
            return GiBowlingStrike;
        case "gi:GiBowman":
            return GiBowman;
        case "gi:GiBoxCutter":
            return GiBoxCutter;
        case "gi:GiBoxTrap":
            return GiBoxTrap;
        case "gi:GiBoxUnpacking":
            return GiBoxUnpacking;
        case "gi:GiBoxingGloveSurprise":
            return GiBoxingGloveSurprise;
        case "gi:GiBoxingGlove":
            return GiBoxingGlove;
        case "gi:GiBoxingRing":
            return GiBoxingRing;
        case "gi:GiBracer":
            return GiBracer;
        case "gi:GiBracers":
            return GiBracers;
        case "gi:GiBrainDump":
            return GiBrainDump;
        case "gi:GiBrainFreeze":
            return GiBrainFreeze;
        case "gi:GiBrainLeak":
            return GiBrainLeak;
        case "gi:GiBrainStem":
            return GiBrainStem;
        case "gi:GiBrainTentacle":
            return GiBrainTentacle;
        case "gi:GiBrain":
            return GiBrain;
        case "gi:GiBrainstorm":
            return GiBrainstorm;
        case "gi:GiBranchArrow":
            return GiBranchArrow;
        case "gi:GiBrandyBottle":
            return GiBrandyBottle;
        case "gi:GiBrasero":
            return GiBrasero;
        case "gi:GiBrassEye":
            return GiBrassEye;
        case "gi:GiBrassKnuckles":
            return GiBrassKnuckles;
        case "gi:GiBrazilFlag":
            return GiBrazilFlag;
        case "gi:GiBrazil":
            return GiBrazil;
        case "gi:GiBreadSlice":
            return GiBreadSlice;
        case "gi:GiBread":
            return GiBread;
        case "gi:GiBreakingChain":
            return GiBreakingChain;
        case "gi:GiBreastplate":
            return GiBreastplate;
        case "gi:GiBrickPile":
            return GiBrickPile;
        case "gi:GiBrickWall":
            return GiBrickWall;
        case "gi:GiBridge":
            return GiBridge;
        case "gi:GiBriefcase":
            return GiBriefcase;
        case "gi:GiBrightExplosion":
            return GiBrightExplosion;
        case "gi:GiBroadDagger":
            return GiBroadDagger;
        case "gi:GiBroadheadArrow":
            return GiBroadheadArrow;
        case "gi:GiBroadsword":
            return GiBroadsword;
        case "gi:GiBroccoli":
            return GiBroccoli;
        case "gi:GiBrodieHelmet":
            return GiBrodieHelmet;
        case "gi:GiBrokenArrow":
            return GiBrokenArrow;
        case "gi:GiBrokenAxe":
            return GiBrokenAxe;
        case "gi:GiBrokenBone":
            return GiBrokenBone;
        case "gi:GiBrokenBottle":
            return GiBrokenBottle;
        case "gi:GiBrokenHeartZone":
            return GiBrokenHeartZone;
        case "gi:GiBrokenHeart":
            return GiBrokenHeart;
        case "gi:GiBrokenPottery":
            return GiBrokenPottery;
        case "gi:GiBrokenRibbon":
            return GiBrokenRibbon;
        case "gi:GiBrokenShield":
            return GiBrokenShield;
        case "gi:GiBrokenSkull":
            return GiBrokenSkull;
        case "gi:GiBrokenTablet":
            return GiBrokenTablet;
        case "gi:GiBrokenWall":
            return GiBrokenWall;
        case "gi:GiBroom":
            return GiBroom;
        case "gi:GiBrutalHelm":
            return GiBrutalHelm;
        case "gi:GiBrute":
            return GiBrute;
        case "gi:GiBubbleField":
            return GiBubbleField;
        case "gi:GiBubbles":
            return GiBubbles;
        case "gi:GiBubblingBeam":
            return GiBubblingBeam;
        case "gi:GiBubblingBowl":
            return GiBubblingBowl;
        case "gi:GiBubblingFlask":
            return GiBubblingFlask;
        case "gi:GiBud":
            return GiBud;
        case "gi:GiBuffaloHead":
            return GiBuffaloHead;
        case "gi:GiBugNet":
            return GiBugNet;
        case "gi:GiBugleCall":
            return GiBugleCall;
        case "gi:GiBulb":
            return GiBulb;
        case "gi:GiBulgaria":
            return GiBulgaria;
        case "gi:GiBullHorns":
            return GiBullHorns;
        case "gi:GiBull":
            return GiBull;
        case "gi:GiBulldozer":
            return GiBulldozer;
        case "gi:GiBulletBill":
            return GiBulletBill;
        case "gi:GiBulletImpacts":
            return GiBulletImpacts;
        case "gi:GiBullets":
            return GiBullets;
        case "gi:GiBullseye":
            return GiBullseye;
        case "gi:GiBullyMinion":
            return GiBullyMinion;
        case "gi:GiBundleGrenade":
            return GiBundleGrenade;
        case "gi:GiBunkBeds":
            return GiBunkBeds;
        case "gi:GiBunkerAssault":
            return GiBunkerAssault;
        case "gi:GiBunker":
            return GiBunker;
        case "gi:GiBunnySlippers":
            return GiBunnySlippers;
        case "gi:GiBuoy":
            return GiBuoy;
        case "gi:GiBurn":
            return GiBurn;
        case "gi:GiBurningBlobs":
            return GiBurningBlobs;
        case "gi:GiBurningBook":
            return GiBurningBook;
        case "gi:GiBurningDot":
            return GiBurningDot;
        case "gi:GiBurningEmbers":
            return GiBurningEmbers;
        case "gi:GiBurningEye":
            return GiBurningEye;
        case "gi:GiBurningForest":
            return GiBurningForest;
        case "gi:GiBurningMeteor":
            return GiBurningMeteor;
        case "gi:GiBurningPassion":
            return GiBurningPassion;
        case "gi:GiBurningRoundShot":
            return GiBurningRoundShot;
        case "gi:GiBurningSkull":
            return GiBurningSkull;
        case "gi:GiBurningTree":
            return GiBurningTree;
        case "gi:GiBurstBlob":
            return GiBurstBlob;
        case "gi:GiBusDoors":
            return GiBusDoors;
        case "gi:GiBusStop":
            return GiBusStop;
        case "gi:GiBus":
            return GiBus;
        case "gi:GiButterToast":
            return GiButterToast;
        case "gi:GiButter":
            return GiButter;
        case "gi:GiButterflyFlower":
            return GiButterflyFlower;
        case "gi:GiButterflyKnife":
            return GiButterflyKnife;
        case "gi:GiButterflyWarning":
            return GiButterflyWarning;
        case "gi:GiButterfly":
            return GiButterfly;
        case "gi:GiButtonFinger":
            return GiButtonFinger;
        case "gi:GiBuyCard":
            return GiBuyCard;
        case "gi:GiByzantinTemple":
            return GiByzantinTemple;
        case "gi:GiC96":
            return GiC96;
        case "gi:GiCabbage":
            return GiCabbage;
        case "gi:GiCableStayedBridge":
            return GiCableStayedBridge;
        case "gi:GiCactusPot":
            return GiCactusPot;
        case "gi:GiCactusTap":
            return GiCactusTap;
        case "gi:GiCactus":
            return GiCactus;
        case "gi:GiCadillacHelm":
            return GiCadillacHelm;
        case "gi:GiCaduceus":
            return GiCaduceus;
        case "gi:GiCaesar":
            return GiCaesar;
        case "gi:GiCage":
            return GiCage;
        case "gi:GiCagedBall":
            return GiCagedBall;
        case "gi:GiCakeSlice":
            return GiCakeSlice;
        case "gi:GiCalavera":
            return GiCalavera;
        case "gi:GiCalculator":
            return GiCalculator;
        case "gi:GiCaldera":
            return GiCaldera;
        case "gi:GiCalendarHalfYear":
            return GiCalendarHalfYear;
        case "gi:GiCalendar":
            return GiCalendar;
        case "gi:GiCaltrops":
            return GiCaltrops;
        case "gi:GiCamargueCross":
            return GiCamargueCross;
        case "gi:GiCambodia":
            return GiCambodia;
        case "gi:GiCamelHead":
            return GiCamelHead;
        case "gi:GiCamel":
            return GiCamel;
        case "gi:GiCampCookingPot":
            return GiCampCookingPot;
        case "gi:GiCampfire":
            return GiCampfire;
        case "gi:GiCampingTent":
            return GiCampingTent;
        case "gi:GiCancel":
            return GiCancel;
        case "gi:GiCancer":
            return GiCancer;
        case "gi:GiCandleFlame":
            return GiCandleFlame;
        case "gi:GiCandleHolder":
            return GiCandleHolder;
        case "gi:GiCandleLight":
            return GiCandleLight;
        case "gi:GiCandleSkull":
            return GiCandleSkull;
        case "gi:GiCandlebright":
            return GiCandlebright;
        case "gi:GiCandles":
            return GiCandles;
        case "gi:GiCandlestickPhone":
            return GiCandlestickPhone;
        case "gi:GiCandyCanes":
            return GiCandyCanes;
        case "gi:GiCannedFish":
            return GiCannedFish;
        case "gi:GiCannister":
            return GiCannister;
        case "gi:GiCannonBall":
            return GiCannonBall;
        case "gi:GiCannonShot":
            return GiCannonShot;
        case "gi:GiCannon":
            return GiCannon;
        case "gi:GiCanoe":
            return GiCanoe;
        case "gi:GiCantua":
            return GiCantua;
        case "gi:GiCapeArmor":
            return GiCapeArmor;
        case "gi:GiCape":
            return GiCape;
        case "gi:GiCapitol":
            return GiCapitol;
        case "gi:GiCapricorn":
            return GiCapricorn;
        case "gi:GiCaptainHatProfile":
            return GiCaptainHatProfile;
        case "gi:GiCapybara":
            return GiCapybara;
        case "gi:GiCarBattery":
            return GiCarBattery;
        case "gi:GiCarDoor":
            return GiCarDoor;
        case "gi:GiCarKey":
            return GiCarKey;
        case "gi:GiCarSeat":
            return GiCarSeat;
        case "gi:GiCarWheel":
            return GiCarWheel;
        case "gi:GiCarabiner":
            return GiCarabiner;
        case "gi:GiCarambola":
            return GiCarambola;
        case "gi:GiCaravan":
            return GiCaravan;
        case "gi:GiCaravel":
            return GiCaravel;
        case "gi:GiCard10Clubs":
            return GiCard10Clubs;
        case "gi:GiCard10Diamonds":
            return GiCard10Diamonds;
        case "gi:GiCard10Hearts":
            return GiCard10Hearts;
        case "gi:GiCard10Spades":
            return GiCard10Spades;
        case "gi:GiCard2Clubs":
            return GiCard2Clubs;
        case "gi:GiCard2Diamonds":
            return GiCard2Diamonds;
        case "gi:GiCard2Hearts":
            return GiCard2Hearts;
        case "gi:GiCard2Spades":
            return GiCard2Spades;
        case "gi:GiCard3Clubs":
            return GiCard3Clubs;
        case "gi:GiCard3Diamonds":
            return GiCard3Diamonds;
        case "gi:GiCard3Hearts":
            return GiCard3Hearts;
        case "gi:GiCard3Spades":
            return GiCard3Spades;
        case "gi:GiCard4Clubs":
            return GiCard4Clubs;
        case "gi:GiCard4Diamonds":
            return GiCard4Diamonds;
        case "gi:GiCard4Hearts":
            return GiCard4Hearts;
        case "gi:GiCard4Spades":
            return GiCard4Spades;
        case "gi:GiCard5Clubs":
            return GiCard5Clubs;
        case "gi:GiCard5Diamonds":
            return GiCard5Diamonds;
        case "gi:GiCard5Hearts":
            return GiCard5Hearts;
        case "gi:GiCard5Spades":
            return GiCard5Spades;
        case "gi:GiCard6Clubs":
            return GiCard6Clubs;
        case "gi:GiCard6Diamonds":
            return GiCard6Diamonds;
        case "gi:GiCard6Hearts":
            return GiCard6Hearts;
        case "gi:GiCard6Spades":
            return GiCard6Spades;
        case "gi:GiCard7Clubs":
            return GiCard7Clubs;
        case "gi:GiCard7Diamonds":
            return GiCard7Diamonds;
        case "gi:GiCard7Hearts":
            return GiCard7Hearts;
        case "gi:GiCard7Spades":
            return GiCard7Spades;
        case "gi:GiCard8Clubs":
            return GiCard8Clubs;
        case "gi:GiCard8Diamonds":
            return GiCard8Diamonds;
        case "gi:GiCard8Hearts":
            return GiCard8Hearts;
        case "gi:GiCard8Spades":
            return GiCard8Spades;
        case "gi:GiCard9Clubs":
            return GiCard9Clubs;
        case "gi:GiCard9Diamonds":
            return GiCard9Diamonds;
        case "gi:GiCard9Hearts":
            return GiCard9Hearts;
        case "gi:GiCard9Spades":
            return GiCard9Spades;
        case "gi:GiCardAceClubs":
            return GiCardAceClubs;
        case "gi:GiCardAceDiamonds":
            return GiCardAceDiamonds;
        case "gi:GiCardAceHearts":
            return GiCardAceHearts;
        case "gi:GiCardAceSpades":
            return GiCardAceSpades;
        case "gi:GiCardBurn":
            return GiCardBurn;
        case "gi:GiCardDiscard":
            return GiCardDiscard;
        case "gi:GiCardDraw":
            return GiCardDraw;
        case "gi:GiCardExchange":
            return GiCardExchange;
        case "gi:GiCardJackClubs":
            return GiCardJackClubs;
        case "gi:GiCardJackDiamonds":
            return GiCardJackDiamonds;
        case "gi:GiCardJackHearts":
            return GiCardJackHearts;
        case "gi:GiCardJackSpades":
            return GiCardJackSpades;
        case "gi:GiCardJoker":
            return GiCardJoker;
        case "gi:GiCardKingClubs":
            return GiCardKingClubs;
        case "gi:GiCardKingDiamonds":
            return GiCardKingDiamonds;
        case "gi:GiCardKingHearts":
            return GiCardKingHearts;
        case "gi:GiCardKingSpades":
            return GiCardKingSpades;
        case "gi:GiCardPick":
            return GiCardPick;
        case "gi:GiCardPickup":
            return GiCardPickup;
        case "gi:GiCardPlay":
            return GiCardPlay;
        case "gi:GiCardQueenClubs":
            return GiCardQueenClubs;
        case "gi:GiCardQueenDiamonds":
            return GiCardQueenDiamonds;
        case "gi:GiCardQueenHearts":
            return GiCardQueenHearts;
        case "gi:GiCardQueenSpades":
            return GiCardQueenSpades;
        case "gi:GiCardRandom":
            return GiCardRandom;
        case "gi:GiCardboardBoxClosed":
            return GiCardboardBoxClosed;
        case "gi:GiCardboardBox":
            return GiCardboardBox;
        case "gi:GiCargoCrane":
            return GiCargoCrane;
        case "gi:GiCargoCrate":
            return GiCargoCrate;
        case "gi:GiCargoShip":
            return GiCargoShip;
        case "gi:GiCarillon":
            return GiCarillon;
        case "gi:GiCarnivalMask":
            return GiCarnivalMask;
        case "gi:GiCarnivoreMouth":
            return GiCarnivoreMouth;
        case "gi:GiCarnivorousPlant":
            return GiCarnivorousPlant;
        case "gi:GiCarnyx":
            return GiCarnyx;
        case "gi:GiCarousel":
            return GiCarousel;
        case "gi:GiCarpetBombing":
            return GiCarpetBombing;
        case "gi:GiCarrier":
            return GiCarrier;
        case "gi:GiCarrion":
            return GiCarrion;
        case "gi:GiCarrot":
            return GiCarrot;
        case "gi:GiCartwheel":
            return GiCartwheel;
        case "gi:GiCash":
            return GiCash;
        case "gi:GiCassowaryHead":
            return GiCassowaryHead;
        case "gi:GiCastleRuins":
            return GiCastleRuins;
        case "gi:GiCastle":
            return GiCastle;
        case "gi:GiCat":
            return GiCat;
        case "gi:GiCatapult":
            return GiCatapult;
        case "gi:GiCatch":
            return GiCatch;
        case "gi:GiCaterpillar":
            return GiCaterpillar;
        case "gi:GiCauldron":
            return GiCauldron;
        case "gi:GiCavalry":
            return GiCavalry;
        case "gi:GiCaveEntrance":
            return GiCaveEntrance;
        case "gi:GiCaveman":
            return GiCaveman;
        case "gi:GiCctvCamera":
            return GiCctvCamera;
        case "gi:GiCeilingBarnacle":
            return GiCeilingBarnacle;
        case "gi:GiCeilingLight":
            return GiCeilingLight;
        case "gi:GiCelebrationFire":
            return GiCelebrationFire;
        case "gi:GiCellarBarrels":
            return GiCellarBarrels;
        case "gi:GiCementShoes":
            return GiCementShoes;
        case "gi:GiCentaurHeart":
            return GiCentaurHeart;
        case "gi:GiCentaur":
            return GiCentaur;
        case "gi:GiCentipede":
            return GiCentipede;
        case "gi:GiCenturionHelmet":
            return GiCenturionHelmet;
        case "gi:GiCeremonialMask":
            return GiCeremonialMask;
        case "gi:GiChainLightning":
            return GiChainLightning;
        case "gi:GiChainMail":
            return GiChainMail;
        case "gi:GiChainedArrowHeads":
            return GiChainedArrowHeads;
        case "gi:GiChainedHeart":
            return GiChainedHeart;
        case "gi:GiChaingun":
            return GiChaingun;
        case "gi:GiChainsaw":
            return GiChainsaw;
        case "gi:GiChakram":
            return GiChakram;
        case "gi:GiChaliceDrops":
            return GiChaliceDrops;
        case "gi:GiChalkOutlineMurder":
            return GiChalkOutlineMurder;
        case "gi:GiChameleonGlyph":
            return GiChameleonGlyph;
        case "gi:GiChampagneCork":
            return GiChampagneCork;
        case "gi:GiChampions":
            return GiChampions;
        case "gi:GiChanterelles":
            return GiChanterelles;
        case "gi:GiCharacter":
            return GiCharacter;
        case "gi:GiCharcuterie":
            return GiCharcuterie;
        case "gi:GiChargedArrow":
            return GiChargedArrow;
        case "gi:GiChargingBull":
            return GiChargingBull;
        case "gi:GiCharging":
            return GiCharging;
        case "gi:GiChariot":
            return GiChariot;
        case "gi:GiCharm":
            return GiCharm;
        case "gi:GiChart":
            return GiChart;
        case "gi:GiChatBubble":
            return GiChatBubble;
        case "gi:GiCheckMark":
            return GiCheckMark;
        case "gi:GiCheckboxTree":
            return GiCheckboxTree;
        case "gi:GiCheckedShield":
            return GiCheckedShield;
        case "gi:GiCheckeredDiamond":
            return GiCheckeredDiamond;
        case "gi:GiCheckeredFlag":
            return GiCheckeredFlag;
        case "gi:GiChecklist":
            return GiChecklist;
        case "gi:GiCheerful":
            return GiCheerful;
        case "gi:GiCheeseWedge":
            return GiCheeseWedge;
        case "gi:GiChefToque":
            return GiChefToque;
        case "gi:GiChelseaBoot":
            return GiChelseaBoot;
        case "gi:GiChemicalArrow":
            return GiChemicalArrow;
        case "gi:GiChemicalBolt":
            return GiChemicalBolt;
        case "gi:GiChemicalDrop":
            return GiChemicalDrop;
        case "gi:GiChemicalTank":
            return GiChemicalTank;
        case "gi:GiCherish":
            return GiCherish;
        case "gi:GiCherry":
            return GiCherry;
        case "gi:GiChessBishop":
            return GiChessBishop;
        case "gi:GiChessKing":
            return GiChessKing;
        case "gi:GiChessKnight":
            return GiChessKnight;
        case "gi:GiChessPawn":
            return GiChessPawn;
        case "gi:GiChessQueen":
            return GiChessQueen;
        case "gi:GiChessRook":
            return GiChessRook;
        case "gi:GiChestArmor":
            return GiChestArmor;
        case "gi:GiChest":
            return GiChest;
        case "gi:GiChestnutLeaf":
            return GiChestnutLeaf;
        case "gi:GiChewedHeart":
            return GiChewedHeart;
        case "gi:GiChewedSkull":
            return GiChewedSkull;
        case "gi:GiChickenLeg":
            return GiChickenLeg;
        case "gi:GiChickenOven":
            return GiChickenOven;
        case "gi:GiChicken":
            return GiChicken;
        case "gi:GiChiliPepper":
            return GiChiliPepper;
        case "gi:GiChimney":
            return GiChimney;
        case "gi:GiChipsBag":
            return GiChipsBag;
        case "gi:GiChisel":
            return GiChisel;
        case "gi:GiChocolateBar":
            return GiChocolateBar;
        case "gi:GiChoice":
            return GiChoice;
        case "gi:GiChoppedSkull":
            return GiChoppedSkull;
        case "gi:GiChopsticks":
            return GiChopsticks;
        case "gi:GiChurch":
            return GiChurch;
        case "gi:GiCigale":
            return GiCigale;
        case "gi:GiCigar":
            return GiCigar;
        case "gi:GiCigarette":
            return GiCigarette;
        case "gi:GiCircleCage":
            return GiCircleCage;
        case "gi:GiCircleClaws":
            return GiCircleClaws;
        case "gi:GiCircleForest":
            return GiCircleForest;
        case "gi:GiCircleSparks":
            return GiCircleSparks;
        case "gi:GiCircle":
            return GiCircle;
        case "gi:GiCirclingFish":
            return GiCirclingFish;
        case "gi:GiCircuitry":
            return GiCircuitry;
        case "gi:GiCircularSaw":
            return GiCircularSaw;
        case "gi:GiCircularSawblade":
            return GiCircularSawblade;
        case "gi:GiCityCar":
            return GiCityCar;
        case "gi:GiClamp":
            return GiClamp;
        case "gi:GiClapperboard":
            return GiClapperboard;
        case "gi:GiClarinet":
            return GiClarinet;
        case "gi:GiClassicalKnowledge":
            return GiClassicalKnowledge;
        case "gi:GiClawHammer":
            return GiClawHammer;
        case "gi:GiClawSlashes":
            return GiClawSlashes;
        case "gi:GiClawString":
            return GiClawString;
        case "gi:GiClaw":
            return GiClaw;
        case "gi:GiClaws":
            return GiClaws;
        case "gi:GiClayBrick":
            return GiClayBrick;
        case "gi:GiClaymoreExplosive":
            return GiClaymoreExplosive;
        case "gi:GiCleaver":
            return GiCleaver;
        case "gi:GiCleopatra":
            return GiCleopatra;
        case "gi:GiClick":
            return GiClick;
        case "gi:GiCliffCrossing":
            return GiCliffCrossing;
        case "gi:GiCloakDagger":
            return GiCloakDagger;
        case "gi:GiCloak":
            return GiCloak;
        case "gi:GiClockwiseRotation":
            return GiClockwiseRotation;
        case "gi:GiClockwork":
            return GiClockwork;
        case "gi:GiClosedBarbute":
            return GiClosedBarbute;
        case "gi:GiClosedDoors":
            return GiClosedDoors;
        case "gi:GiClothJar":
            return GiClothJar;
        case "gi:GiClothes":
            return GiClothes;
        case "gi:GiClothesline":
            return GiClothesline;
        case "gi:GiClothespin":
            return GiClothespin;
        case "gi:GiCloudDownload":
            return GiCloudDownload;
        case "gi:GiCloudRing":
            return GiCloudRing;
        case "gi:GiCloudUpload":
            return GiCloudUpload;
        case "gi:GiCloudyFork":
            return GiCloudyFork;
        case "gi:GiClout":
            return GiClout;
        case "gi:GiCloverSpiked":
            return GiCloverSpiked;
        case "gi:GiClover":
            return GiClover;
        case "gi:GiClown":
            return GiClown;
        case "gi:GiClownfish":
            return GiClownfish;
        case "gi:GiClubs":
            return GiClubs;
        case "gi:GiClusterBomb":
            return GiClusterBomb;
        case "gi:GiCoaDeJima":
            return GiCoaDeJima;
        case "gi:GiCoalPile":
            return GiCoalPile;
        case "gi:GiCoalWagon":
            return GiCoalWagon;
        case "gi:GiCobra":
            return GiCobra;
        case "gi:GiCobweb":
            return GiCobweb;
        case "gi:GiCoconuts":
            return GiCoconuts;
        case "gi:GiCoffeeBeans":
            return GiCoffeeBeans;
        case "gi:GiCoffeeCup":
            return GiCoffeeCup;
        case "gi:GiCoffeeMug":
            return GiCoffeeMug;
        case "gi:GiCoffeePot":
            return GiCoffeePot;
        case "gi:GiCoffin":
            return GiCoffin;
        case "gi:GiCogLock":
            return GiCogLock;
        case "gi:GiCog":
            return GiCog;
        case "gi:GiCogsplosion":
            return GiCogsplosion;
        case "gi:GiCoiledNail":
            return GiCoiledNail;
        case "gi:GiCoilingCurl":
            return GiCoilingCurl;
        case "gi:GiCoinflip":
            return GiCoinflip;
        case "gi:GiCoinsPile":
            return GiCoinsPile;
        case "gi:GiCoins":
            return GiCoins;
        case "gi:GiColdHeart":
            return GiColdHeart;
        case "gi:GiColiseum":
            return GiColiseum;
        case "gi:GiColombia":
            return GiColombia;
        case "gi:GiColombianStatue":
            return GiColombianStatue;
        case "gi:GiColtM1911":
            return GiColtM1911;
        case "gi:GiColumnVase":
            return GiColumnVase;
        case "gi:GiComa":
            return GiComa;
        case "gi:GiComb":
            return GiComb;
        case "gi:GiCombinationLock":
            return GiCombinationLock;
        case "gi:GiCometSpark":
            return GiCometSpark;
        case "gi:GiCommercialAirplane":
            return GiCommercialAirplane;
        case "gi:GiCompactDisc":
            return GiCompactDisc;
        case "gi:GiCompanionCube":
            return GiCompanionCube;
        case "gi:GiCompass":
            return GiCompass;
        case "gi:GiComputerFan":
            return GiComputerFan;
        case "gi:GiComputing":
            return GiComputing;
        case "gi:GiConcentrationOrb":
            return GiConcentrationOrb;
        case "gi:GiConcentricCrescents":
            return GiConcentricCrescents;
        case "gi:GiConcreteBag":
            return GiConcreteBag;
        case "gi:GiCondorEmblem":
            return GiCondorEmblem;
        case "gi:GiCondyluraSkull":
            return GiCondyluraSkull;
        case "gi:GiConfirmed":
            return GiConfirmed;
        case "gi:GiConfrontation":
            return GiConfrontation;
        case "gi:GiCongress":
            return GiCongress;
        case "gi:GiConqueror":
            return GiConqueror;
        case "gi:GiConsoleController":
            return GiConsoleController;
        case "gi:GiContortionist":
            return GiContortionist;
        case "gi:GiContract":
            return GiContract;
        case "gi:GiControlTower":
            return GiControlTower;
        case "gi:GiConvergenceTarget":
            return GiConvergenceTarget;
        case "gi:GiConversation":
            return GiConversation;
        case "gi:GiConverseShoe":
            return GiConverseShoe;
        case "gi:GiConvict":
            return GiConvict;
        case "gi:GiConvince":
            return GiConvince;
        case "gi:GiConwayLifeGlider":
            return GiConwayLifeGlider;
        case "gi:GiCook":
            return GiCook;
        case "gi:GiCookie":
            return GiCookie;
        case "gi:GiCookingGlove":
            return GiCookingGlove;
        case "gi:GiCookingPot":
            return GiCookingPot;
        case "gi:GiCoolSpices":
            return GiCoolSpices;
        case "gi:GiCooler":
            return GiCooler;
        case "gi:GiCootieCatcher":
            return GiCootieCatcher;
        case "gi:GiCoral":
            return GiCoral;
        case "gi:GiCorkHat":
            return GiCorkHat;
        case "gi:GiCorkedTube":
            return GiCorkedTube;
        case "gi:GiCorkscrew":
            return GiCorkscrew;
        case "gi:GiCorn":
            return GiCorn;
        case "gi:GiCornerExplosion":
            return GiCornerExplosion;
        case "gi:GiCornerFlag":
            return GiCornerFlag;
        case "gi:GiCornucopia":
            return GiCornucopia;
        case "gi:GiCoronation":
            return GiCoronation;
        case "gi:GiCorporal":
            return GiCorporal;
        case "gi:GiCorset":
            return GiCorset;
        case "gi:GiCorsica":
            return GiCorsica;
        case "gi:GiCosmicEgg":
            return GiCosmicEgg;
        case "gi:GiCottonFlower":
            return GiCottonFlower;
        case "gi:GiCoveredJar":
            return GiCoveredJar;
        case "gi:GiCow":
            return GiCow;
        case "gi:GiCowboyBoot":
            return GiCowboyBoot;
        case "gi:GiCowboyHolster":
            return GiCowboyHolster;
        case "gi:GiCowled":
            return GiCowled;
        case "gi:GiCpuShot":
            return GiCpuShot;
        case "gi:GiCpu":
            return GiCpu;
        case "gi:GiCrabClaw":
            return GiCrabClaw;
        case "gi:GiCrab":
            return GiCrab;
        case "gi:GiCrackedAlienSkull":
            return GiCrackedAlienSkull;
        case "gi:GiCrackedBallDunk":
            return GiCrackedBallDunk;
        case "gi:GiCrackedDisc":
            return GiCrackedDisc;
        case "gi:GiCrackedGlass":
            return GiCrackedGlass;
        case "gi:GiCrackedHelm":
            return GiCrackedHelm;
        case "gi:GiCrackedMask":
            return GiCrackedMask;
        case "gi:GiCrackedSaber":
            return GiCrackedSaber;
        case "gi:GiCrackedShield":
            return GiCrackedShield;
        case "gi:GiCrafting":
            return GiCrafting;
        case "gi:GiCrags":
            return GiCrags;
        case "gi:GiCrane":
            return GiCrane;
        case "gi:GiCreditsCurrency":
            return GiCreditsCurrency;
        case "gi:GiCrenelCrown":
            return GiCrenelCrown;
        case "gi:GiCrenulatedShield":
            return GiCrenulatedShield;
        case "gi:GiCrescentBlade":
            return GiCrescentBlade;
    }
}
