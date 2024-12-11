var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
export function nameToReactIcon_fa6_1(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, FaFileCode, FaFileContract, FaFileCsv, FaFileExcel, FaFileExport, FaFileImage, FaFileImport, FaFileInvoiceDollar, FaFileInvoice, FaFileLines, FaFileMedical, FaFilePdf, FaFilePen, FaFilePowerpoint, FaFilePrescription, FaFileShield, FaFileSignature, FaFileVideo, FaFileWaveform, FaFileWord, FaFileZipper, FaFile, FaFillDrip, FaFill, FaFilm, FaFilterCircleDollar, FaFilterCircleXmark, FaFilter, FaFingerprint, FaFireBurner, FaFireExtinguisher, FaFireFlameCurved, FaFireFlameSimple, FaFire, FaFishFins, FaFish, FaFlagCheckered, FaFlagUsa, FaFlag, FaFlaskVial, FaFlask, FaFloppyDisk, FaFlorinSign, FaFolderClosed, FaFolderMinus, FaFolderOpen, FaFolderPlus, FaFolderTree, FaFolder, FaFont, FaFootball, FaForwardFast, FaForwardStep, FaForward, FaFrancSign, FaFrog, FaFutbol, FaG, FaGamepad, FaGasPump, FaGaugeHigh, FaGaugeSimpleHigh, FaGaugeSimple, FaGauge, FaGavel, FaGear, FaGears, FaGem, FaGenderless, FaGhost, FaGift, FaGifts, FaGlassWaterDroplet, FaGlassWater, FaGlasses, FaGlobe, FaGolfBallTee, FaGopuram, FaGraduationCap, FaGreaterThanEqual, FaGreaterThan, FaGripLinesVertical, FaGripLines, FaGripVertical, FaGrip, FaGroupArrowsRotate, FaGuaraniSign, FaGuitar, FaGun, FaH, FaHammer, FaHamsa, FaHandBackFist, FaHandDots, FaHandFist, FaHandHoldingDollar, FaHandHoldingDroplet, FaHandHoldingHand, FaHandHoldingHeart, FaHandHoldingMedical, FaHandHolding, FaHandLizard, FaHandMiddleFinger, FaHandPeace, FaHandPointDown, FaHandPointLeft, FaHandPointRight, FaHandPointUp, FaHandPointer, FaHandScissors, FaHandSparkles, FaHandSpock, FaHand, FaHandcuffs, FaHandsAslInterpreting, FaHandsBound, FaHandsBubbles, FaHandsClapping, FaHandsHoldingChild, FaHandsHoldingCircle, FaHandsHolding, FaHandsPraying, FaHands, FaHandshakeAngle, FaHandshakeSimpleSlash, FaHandshakeSimple, FaHandshakeSlash, FaHandshake, FaHanukiah, FaHardDrive, FaHashtag, FaHatCowboySide, FaHatCowboy, FaHatWizard, FaHeadSideCoughSlash, FaHeadSideCough, FaHeadSideMask, FaHeadSideVirus, FaHeading, FaHeadphonesSimple, FaHeadphones, FaHeadset, FaHeartCircleBolt, FaHeartCircleCheck, FaHeartCircleExclamation, FaHeartCircleMinus, FaHeartCirclePlus, FaHeartCircleXmark, FaHeartCrack, FaHeartPulse, FaHeart, FaHelicopterSymbol, FaHelicopter, FaHelmetSafety, FaHelmetUn, FaHighlighter, FaHillAvalanche, FaHillRockslide, FaHippo, FaHockeyPuck, FaHollyBerry, FaHorseHead, FaHorse, FaHospitalUser, FaHospital, FaHotTubPerson, FaHotdog, FaHotel, FaHourglassEnd, FaHourglassHalf, FaHourglassStart, FaHourglass, FaHouseChimneyCrack, FaHouseChimneyMedical, FaHouseChimneyUser, FaHouseChimneyWindow, FaHouseChimney, FaHouseCircleCheck, FaHouseCircleExclamation, FaHouseCircleXmark, FaHouseCrack, FaHouseFire, FaHouseFlag, FaHouseFloodWaterCircleArrowRight, FaHouseFloodWater, FaHouseLaptop, FaHouseLock, FaHouseMedicalCircleCheck, FaHouseMedicalCircleExclamation, FaHouseMedicalCircleXmark, FaHouseMedicalFlag, FaHouseMedical, FaHouseSignal, FaHouseTsunami, FaHouseUser, FaHouse, FaHryvniaSign, FaHurricane, FaICursor, FaI, FaIceCream, FaIcicles, FaIcons, FaIdBadge, FaIdCardClip, FaIdCard, FaIgloo, FaImagePortrait, FaImage, FaImages, FaInbox, FaIndent, FaIndianRupeeSign, FaIndustry, FaInfinity, FaInfo, FaItalic, FaJ, FaJarWheat, FaJar, FaJedi, FaJetFighterUp, FaJetFighter, FaJoint, FaJugDetergent, FaK, FaKaaba, FaKey, FaKeyboard, FaKhanda, FaKipSign, FaKitMedical, FaKitchenSet, FaKiwiBird, FaL, FaLandMineOn, FaLandmarkDome, FaLandmarkFlag, FaLandmark, FaLanguage, FaLaptopCode, FaLaptopFile, FaLaptopMedical, FaLaptop, FaLariSign, FaLayerGroup, FaLeaf, FaLeftLong, FaLeftRight, FaLemon, FaLessThanEqual, FaLessThan, FaLifeRing, FaLightbulb, FaLinesLeaning, FaLinkSlash, FaLink, FaLiraSign, FaListCheck, FaListOl, FaListUl, FaList, FaLitecoinSign, FaLocationArrow, FaLocationCrosshairs, FaLocationDot, FaLocationPinLock, FaLocationPin, FaLockOpen, FaLock, FaLocust, FaLungsVirus, FaLungs, FaM, FaMagnet, FaMagnifyingGlassArrowRight, FaMagnifyingGlassChart, FaMagnifyingGlassDollar, FaMagnifyingGlassLocation, FaMagnifyingGlassMinus, FaMagnifyingGlassPlus, FaMagnifyingGlass, FaManatSign, FaMapLocationDot, FaMapLocation, FaMapPin, FaMap, FaMarker, FaMarsAndVenusBurst, FaMarsAndVenus, FaMarsDouble, FaMarsStrokeRight, FaMarsStrokeUp, FaMarsStroke, FaMars, FaMartiniGlassCitrus, FaMartiniGlassEmpty, FaMartiniGlass, FaMaskFace, FaMaskVentilator, FaMask, FaMasksTheater, FaMattressPillow, FaMaximize, FaMedal, FaMemory, FaMenorah, FaMercury, FaMessage, FaMeteor, FaMicrochip, FaMicrophoneLinesSlash, FaMicrophoneLines, FaMicrophoneSlash, FaMicrophone, FaMicroscope, FaMillSign, FaMinimize, FaMinus, FaMitten, FaMobileButton, FaMobileRetro, FaMobileScreenButton, FaMobileScreen, FaMobile, FaMoneyBill1Wave, FaMoneyBill1, FaMoneyBillTransfer, FaMoneyBillTrendUp, FaMoneyBillWave, FaMoneyBillWheat, FaMoneyBill, FaMoneyBills, FaMoneyCheckDollar, FaMoneyCheck, FaMonument, FaMoon, FaMortarPestle, FaMosque, FaMosquitoNet, FaMosquito, FaMotorcycle, FaMound, FaMountainCity, FaMountainSun, FaMountain, FaMugHot, FaMugSaucer, FaMusic, FaN, FaNairaSign, FaNetworkWired, FaNeuter, FaNewspaper, FaNotEqual, FaNotdef, FaNoteSticky, FaNotesMedical, FaO, FaObjectGroup, FaObjectUngroup, FaOilCan, FaOilWell, FaOm, FaOtter, FaOutdent, FaP, FaPager, FaPaintRoller, FaPaintbrush, FaPalette, FaPallet, FaPanorama, FaPaperPlane, FaPaperclip, FaParachuteBox, FaParagraph, FaPassport, FaPaste, FaPause, FaPaw, FaPeace, FaPenClip, FaPenFancy, FaPenNib, FaPenRuler, FaPenToSquare, FaPen, FaPencil, FaPeopleArrows, FaPeopleCarryBox, FaPeopleGroup, FaPeopleLine, FaPeoplePulling, FaPeopleRobbery, FaPeopleRoof, FaPepperHot, FaPercent, FaPersonArrowDownToLine, FaPersonArrowUpFromLine, FaPersonBiking, FaPersonBooth, FaPersonBreastfeeding, FaPersonBurst, FaPersonCane, FaPersonChalkboard, FaPersonCircleCheck, FaPersonCircleExclamation, FaPersonCircleMinus, FaPersonCirclePlus, FaPersonCircleQuestion, FaPersonCircleXmark, FaPersonDigging, FaPersonDotsFromLine, FaPersonDressBurst, FaPersonDress, FaPersonDrowning, FaPersonFallingBurst, FaPersonFalling, FaPersonHalfDress, FaPersonHarassing, FaPersonHiking, FaPersonMilitaryPointing, FaPersonMilitaryRifle, FaPersonMilitaryToPerson, FaPersonPraying, FaPersonPregnant, FaPersonRays, FaPersonRifle, FaPersonRunning, FaPersonShelter, FaPersonSkating, FaPersonSkiingNordic, FaPersonSkiing, FaPersonSnowboarding, FaPersonSwimming, FaPersonThroughWindow, FaPersonWalkingArrowLoopLeft, FaPersonWalkingArrowRight, FaPersonWalkingDashedLineArrowRight, FaPersonWalkingLuggage, FaPersonWalkingWithCane, FaPersonWalking, FaPerson, FaPesetaSign, FaPesoSign, FaPhoneFlip, FaPhoneSlash, FaPhoneVolume, FaPhone, FaPhotoFilm, FaPiggyBank, FaPills, FaPizzaSlice, FaPlaceOfWorship, FaPlaneArrival, FaPlaneCircleCheck, FaPlaneCircleExclamation, FaPlaneCircleXmark, FaPlaneDeparture, FaPlaneLock, FaPlaneSlash, FaPlaneUp, FaPlane, FaPlantWilt, FaPlateWheat, FaPlay, FaPlugCircleBolt, FaPlugCircleCheck, FaPlugCircleExclamation, FaPlugCircleMinus, FaPlugCirclePlus, FaPlugCircleXmark, FaPlug, FaPlusMinus, FaPlus, FaPodcast, FaPooStorm, FaPoo, FaPoop, FaPowerOff, FaPrescriptionBottleMedical, FaPrescriptionBottle, FaPrescription, FaPrint, FaPumpMedical, FaPumpSoap, FaPuzzlePiece, FaQ, FaQrcode, FaQuestion, FaQuoteLeft, FaQuoteRight, FaR, FaRadiation, FaRadio, FaRainbow, FaRankingStar, FaReceipt, FaRecordVinyl, FaRectangleAd, FaRectangleList, FaRectangleXmark, FaRecycle, FaRegistered, FaRepeat, FaReplyAll, FaReply, FaRepublican, FaRestroom, FaRetweet, FaRibbon, FaRightFromBracket, FaRightLeft, FaRightLong, FaRightToBracket, FaRing, FaRoadBarrier, FaRoadBridge, FaRoadCircleCheck, FaRoadCircleExclamation, FaRoadCircleXmark, FaRoadLock, FaRoadSpikes, FaRoad, FaRobot, FaRocket, FaRotateLeft, FaRotateRight, FaRotate, FaRoute, FaRss, FaRubleSign, FaRug, FaRulerCombined, FaRulerHorizontal, FaRulerVertical, FaRuler, FaRupeeSign, FaRupiahSign, FaS, FaSackDollar, FaSackXmark, FaSailboat, FaSatelliteDish, FaSatellite, FaScaleBalanced, FaScaleUnbalancedFlip, FaScaleUnbalanced, FaSchoolCircleCheck, FaSchoolCircleExclamation, FaSchoolCircleXmark, FaSchoolFlag, FaSchoolLock, FaSchool, FaScissors, FaScrewdriverWrench, FaScrewdriver, FaScrollTorah, FaScroll, FaSdCard, FaSection, FaSeedling, FaServer, FaShapes, FaShareFromSquare, FaShareNodes, FaShare, FaSheetPlastic, FaShekelSign, FaShieldCat, FaShieldDog, FaShieldHalved, FaShieldHeart, FaShieldVirus, FaShield, FaShip, FaShirt, FaShoePrints, FaShopLock, FaShopSlash, FaShop, FaShower, FaShrimp, FaShuffle, FaShuttleSpace, FaSignHanging, FaSignal, FaSignature, FaSignsPost, FaSimCard, FaSink, FaSitemap, FaSkullCrossbones, FaSkull, FaSlash, FaSleigh, FaSliders, FaSmog, FaSmoking, FaSnowflake, FaSnowman, FaSnowplow, FaSoap, FaSocks, FaSolarPanel, FaSortDown, FaSortUp, FaSort, FaSpa, FaSpaghettiMonsterFlying, FaSpellCheck, FaSpider, FaSpinner, FaSplotch, FaSpoon, FaSprayCanSparkles, FaSprayCan, FaSquareArrowUpRight, FaSquareCaretDown, FaSquareCaretLeft, FaSquareCaretRight, FaSquareCaretUp, FaSquareCheck, FaSquareEnvelope, FaSquareFull, FaSquareH, FaSquareMinus, FaSquareNfi, FaSquareParking, FaSquarePen, FaSquarePersonConfined, FaSquarePhoneFlip, FaSquarePhone, FaSquarePlus, FaSquarePollHorizontal, FaSquarePollVertical, FaSquareRootVariable, FaSquareRss, FaSquareShareNodes, FaSquareUpRight, FaSquareVirus, FaSquareXmark, FaSquare, FaStaffSnake, FaStairs, FaStamp, FaStapler, FaStarAndCrescent, FaStarHalfStroke, FaStarHalf, FaStarOfDavid, FaStarOfLife, FaStar, FaSterlingSign, FaStethoscope, FaStop, FaStopwatch20, FaStopwatch, FaStoreSlash, FaStore, FaStreetView, FaStrikethrough, FaStroopwafel, FaSubscript, FaSuitcaseMedical, FaSuitcaseRolling, FaSuitcase, FaSunPlantWilt, FaSun, FaSuperscript, FaSwatchbook, FaSynagogue, FaSyringe, FaT, FaTableCellsColumnLock, FaTableCellsLarge, FaTableCellsRowLock, FaTableCellsRowUnlock, FaTableCells, FaTableColumns, FaTableList, FaTableTennisPaddleBall, FaTable, FaTabletButton, FaTabletScreenButton, FaTablet, FaTablets, FaTachographDigital, FaTag, FaTags, FaTape, FaTarpDroplet, FaTarp, FaTaxi, FaTeethOpen, FaTeeth, FaTemperatureArrowDown, FaTemperatureArrowUp, FaTemperatureEmpty, FaTemperatureFull, FaTemperatureHalf, FaTemperatureHigh, FaTemperatureLow, FaTemperatureQuarter, FaTemperatureThreeQuarters, FaTengeSign, FaTentArrowDownToLine, FaTentArrowLeftRight, FaTentArrowTurnLeft, FaTentArrowsDown, FaTent, FaTents, FaTerminal, FaTextHeight, FaTextSlash, FaTextWidth, FaThermometer, FaThumbsDown, FaThumbsUp, FaThumbtackSlash, FaThumbtack, FaTicketSimple, FaTicket, FaTimeline, FaToggleOff, FaToggleOn, FaToiletPaperSlash, FaToiletPaper, FaToiletPortable, FaToilet, FaToiletsPortable, FaToolbox, FaTooth, FaToriiGate, FaTornado, FaTowerBroadcast, FaTowerCell, FaTowerObservation, FaTractor, FaTrademark, FaTrafficLight, FaTrailer, FaTrainSubway, FaTrainTram, FaTrain, FaTransgender, FaTrashArrowUp, FaTrashCanArrowUp, FaTrashCan, FaTrash, FaTreeCity, FaTree, FaTriangleExclamation, FaTrophy, FaTrowelBricks, FaTrowel, FaTruckArrowRight, FaTruckDroplet, FaTruckFast, FaTruckFieldUn, FaTruckField, FaTruckFront, FaTruckMedical, FaTruckMonster, FaTruckMoving, FaTruckPickup, FaTruckPlane, FaTruckRampBox, FaTruck, FaTty, FaTurkishLiraSign, FaTurnDown, FaTurnUp, FaTv, FaU, FaUmbrellaBeach, FaUmbrella, FaUnderline, FaUniversalAccess, FaUnlockKeyhole, FaUnlock, FaUpDownLeftRight, FaUpDown, FaUpLong, FaUpRightAndDownLeftFromCenter, FaUpRightFromSquare, FaUpload, FaUserAstronaut, FaUserCheck, FaUserClock, FaUserDoctor, FaUserGear, FaUserGraduate, FaUserGroup, FaUserInjured, FaUserLargeSlash, FaUserLarge, FaUserLock, FaUserMinus, FaUserNinja, FaUserNurse, FaUserPen, FaUserPlus, FaUserSecret, FaUserShield, FaUserSlash, FaUserTag, FaUserTie, FaUserXmark, FaUser, FaUsersBetweenLines, FaUsersGear, FaUsersLine, FaUsersRays, FaUsersRectangle, FaUsersSlash, FaUsersViewfinder, FaUsers, FaUtensils, FaV, FaVanShuttle, FaVault, FaVectorSquare, FaVenusDouble, FaVenusMars, FaVenus, FaVestPatches, FaVest, FaVialCircleCheck, FaVialVirus, FaVial, FaVials, FaVideoSlash, FaVideo, FaVihara, FaVirusCovidSlash, FaVirusCovid, FaVirusSlash, FaVirus, FaViruses, FaVoicemail, FaVolcano, FaVolleyball, FaVolumeHigh, FaVolumeLow, FaVolumeOff, FaVolumeXmark, FaVrCardboard, FaW, FaWalkieTalkie, FaWallet, FaWandMagicSparkles, FaWandMagic, FaWandSparkles, FaWarehouse, FaWaterLadder, FaWater, FaWaveSquare, FaWeightHanging, FaWeightScale, FaWheatAwnCircleExclamation, FaWheatAwn, FaWheelchairMove, FaWheelchair, FaWhiskeyGlass, FaWifi, FaWind, FaWindowMaximize, FaWindowMinimize, FaWindowRestore, FaWineBottle, FaWineGlassEmpty, FaWineGlass, FaWonSign, FaWorm, FaWrench, FaXRay, FaX, FaXmark, FaXmarksLines, FaY, FaYenSign, FaYinYang, FaZ, FaRegAddressBook, FaRegAddressCard, FaRegBellSlash, FaRegBell, FaRegBookmark, FaRegBuilding, FaRegCalendarCheck, FaRegCalendarDays, FaRegCalendarMinus, FaRegCalendarPlus, FaRegCalendarXmark, FaRegCalendar, FaRegChartBar, FaRegChessBishop, FaRegChessKing, FaRegChessKnight, FaRegChessPawn, FaRegChessQueen, FaRegChessRook, FaRegCircleCheck, FaRegCircleDot, FaRegCircleDown, FaRegCircleLeft, FaRegCirclePause, FaRegCirclePlay, FaRegCircleQuestion, FaRegCircleRight, FaRegCircleStop, FaRegCircleUp, FaRegCircleUser, FaRegCircleXmark, FaRegCircle, FaRegClipboard, FaRegClock, FaRegClone, FaRegClosedCaptioning, FaRegCommentDots, FaRegComment, FaRegComments, FaRegCompass, FaRegCopy, FaRegCopyright, FaRegCreditCard, FaRegEnvelopeOpen, FaRegEnvelope, FaRegEyeSlash, FaRegEye, FaRegFaceAngry, FaRegFaceDizzy, FaRegFaceFlushed, FaRegFaceFrownOpen, FaRegFaceFrown, FaRegFaceGrimace, FaRegFaceGrinBeamSweat, FaRegFaceGrinBeam, FaRegFaceGrinHearts, FaRegFaceGrinSquintTears, FaRegFaceGrinSquint, FaRegFaceGrinStars, FaRegFaceGrinTears, FaRegFaceGrinTongueSquint, FaRegFaceGrinTongueWink, FaRegFaceGrinTongue, FaRegFaceGrinWide, FaRegFaceGrinWink, FaRegFaceGrin, FaRegFaceKissBeam, FaRegFaceKissWinkHeart, FaRegFaceKiss, FaRegFaceLaughBeam, FaRegFaceLaughSquint, FaRegFaceLaughWink, FaRegFaceLaugh, FaRegFaceMehBlank, FaRegFaceMeh, FaRegFaceRollingEyes, FaRegFaceSadCry, FaRegFaceSadTear, FaRegFaceSmileBeam, FaRegFaceSmileWink, FaRegFaceSmile, FaRegFaceSurprise, FaRegFaceTired, FaRegFileAudio, FaRegFileCode, FaRegFileExcel, FaRegFileImage, FaRegFileLines, FaRegFilePdf, FaRegFilePowerpoint, FaRegFileVideo, FaRegFileWord, FaRegFileZipper, FaRegFile, FaRegFlag, FaRegFloppyDisk, FaRegFolderClosed, FaRegFolderOpen, FaRegFolder, FaRegFontAwesome, FaRegFutbol, FaRegGem, FaRegHandBackFist, FaRegHandLizard, FaRegHandPeace, FaRegHandPointDown, FaRegHandPointLeft, FaRegHandPointRight, FaRegHandPointUp, FaRegHandPointer, FaRegHandScissors, FaRegHandSpock, FaRegHand, FaRegHandshake, FaRegHardDrive;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "fa6:FaFileCode": return [3 /*break*/, 1];
                        case "fa6:FaFileContract": return [3 /*break*/, 3];
                        case "fa6:FaFileCsv": return [3 /*break*/, 5];
                        case "fa6:FaFileExcel": return [3 /*break*/, 7];
                        case "fa6:FaFileExport": return [3 /*break*/, 9];
                        case "fa6:FaFileImage": return [3 /*break*/, 11];
                        case "fa6:FaFileImport": return [3 /*break*/, 13];
                        case "fa6:FaFileInvoiceDollar": return [3 /*break*/, 15];
                        case "fa6:FaFileInvoice": return [3 /*break*/, 17];
                        case "fa6:FaFileLines": return [3 /*break*/, 19];
                        case "fa6:FaFileMedical": return [3 /*break*/, 21];
                        case "fa6:FaFilePdf": return [3 /*break*/, 23];
                        case "fa6:FaFilePen": return [3 /*break*/, 25];
                        case "fa6:FaFilePowerpoint": return [3 /*break*/, 27];
                        case "fa6:FaFilePrescription": return [3 /*break*/, 29];
                        case "fa6:FaFileShield": return [3 /*break*/, 31];
                        case "fa6:FaFileSignature": return [3 /*break*/, 33];
                        case "fa6:FaFileVideo": return [3 /*break*/, 35];
                        case "fa6:FaFileWaveform": return [3 /*break*/, 37];
                        case "fa6:FaFileWord": return [3 /*break*/, 39];
                        case "fa6:FaFileZipper": return [3 /*break*/, 41];
                        case "fa6:FaFile": return [3 /*break*/, 43];
                        case "fa6:FaFillDrip": return [3 /*break*/, 45];
                        case "fa6:FaFill": return [3 /*break*/, 47];
                        case "fa6:FaFilm": return [3 /*break*/, 49];
                        case "fa6:FaFilterCircleDollar": return [3 /*break*/, 51];
                        case "fa6:FaFilterCircleXmark": return [3 /*break*/, 53];
                        case "fa6:FaFilter": return [3 /*break*/, 55];
                        case "fa6:FaFingerprint": return [3 /*break*/, 57];
                        case "fa6:FaFireBurner": return [3 /*break*/, 59];
                        case "fa6:FaFireExtinguisher": return [3 /*break*/, 61];
                        case "fa6:FaFireFlameCurved": return [3 /*break*/, 63];
                        case "fa6:FaFireFlameSimple": return [3 /*break*/, 65];
                        case "fa6:FaFire": return [3 /*break*/, 67];
                        case "fa6:FaFishFins": return [3 /*break*/, 69];
                        case "fa6:FaFish": return [3 /*break*/, 71];
                        case "fa6:FaFlagCheckered": return [3 /*break*/, 73];
                        case "fa6:FaFlagUsa": return [3 /*break*/, 75];
                        case "fa6:FaFlag": return [3 /*break*/, 77];
                        case "fa6:FaFlaskVial": return [3 /*break*/, 79];
                        case "fa6:FaFlask": return [3 /*break*/, 81];
                        case "fa6:FaFloppyDisk": return [3 /*break*/, 83];
                        case "fa6:FaFlorinSign": return [3 /*break*/, 85];
                        case "fa6:FaFolderClosed": return [3 /*break*/, 87];
                        case "fa6:FaFolderMinus": return [3 /*break*/, 89];
                        case "fa6:FaFolderOpen": return [3 /*break*/, 91];
                        case "fa6:FaFolderPlus": return [3 /*break*/, 93];
                        case "fa6:FaFolderTree": return [3 /*break*/, 95];
                        case "fa6:FaFolder": return [3 /*break*/, 97];
                        case "fa6:FaFont": return [3 /*break*/, 99];
                        case "fa6:FaFootball": return [3 /*break*/, 101];
                        case "fa6:FaForwardFast": return [3 /*break*/, 103];
                        case "fa6:FaForwardStep": return [3 /*break*/, 105];
                        case "fa6:FaForward": return [3 /*break*/, 107];
                        case "fa6:FaFrancSign": return [3 /*break*/, 109];
                        case "fa6:FaFrog": return [3 /*break*/, 111];
                        case "fa6:FaFutbol": return [3 /*break*/, 113];
                        case "fa6:FaG": return [3 /*break*/, 115];
                        case "fa6:FaGamepad": return [3 /*break*/, 117];
                        case "fa6:FaGasPump": return [3 /*break*/, 119];
                        case "fa6:FaGaugeHigh": return [3 /*break*/, 121];
                        case "fa6:FaGaugeSimpleHigh": return [3 /*break*/, 123];
                        case "fa6:FaGaugeSimple": return [3 /*break*/, 125];
                        case "fa6:FaGauge": return [3 /*break*/, 127];
                        case "fa6:FaGavel": return [3 /*break*/, 129];
                        case "fa6:FaGear": return [3 /*break*/, 131];
                        case "fa6:FaGears": return [3 /*break*/, 133];
                        case "fa6:FaGem": return [3 /*break*/, 135];
                        case "fa6:FaGenderless": return [3 /*break*/, 137];
                        case "fa6:FaGhost": return [3 /*break*/, 139];
                        case "fa6:FaGift": return [3 /*break*/, 141];
                        case "fa6:FaGifts": return [3 /*break*/, 143];
                        case "fa6:FaGlassWaterDroplet": return [3 /*break*/, 145];
                        case "fa6:FaGlassWater": return [3 /*break*/, 147];
                        case "fa6:FaGlasses": return [3 /*break*/, 149];
                        case "fa6:FaGlobe": return [3 /*break*/, 151];
                        case "fa6:FaGolfBallTee": return [3 /*break*/, 153];
                        case "fa6:FaGopuram": return [3 /*break*/, 155];
                        case "fa6:FaGraduationCap": return [3 /*break*/, 157];
                        case "fa6:FaGreaterThanEqual": return [3 /*break*/, 159];
                        case "fa6:FaGreaterThan": return [3 /*break*/, 161];
                        case "fa6:FaGripLinesVertical": return [3 /*break*/, 163];
                        case "fa6:FaGripLines": return [3 /*break*/, 165];
                        case "fa6:FaGripVertical": return [3 /*break*/, 167];
                        case "fa6:FaGrip": return [3 /*break*/, 169];
                        case "fa6:FaGroupArrowsRotate": return [3 /*break*/, 171];
                        case "fa6:FaGuaraniSign": return [3 /*break*/, 173];
                        case "fa6:FaGuitar": return [3 /*break*/, 175];
                        case "fa6:FaGun": return [3 /*break*/, 177];
                        case "fa6:FaH": return [3 /*break*/, 179];
                        case "fa6:FaHammer": return [3 /*break*/, 181];
                        case "fa6:FaHamsa": return [3 /*break*/, 183];
                        case "fa6:FaHandBackFist": return [3 /*break*/, 185];
                        case "fa6:FaHandDots": return [3 /*break*/, 187];
                        case "fa6:FaHandFist": return [3 /*break*/, 189];
                        case "fa6:FaHandHoldingDollar": return [3 /*break*/, 191];
                        case "fa6:FaHandHoldingDroplet": return [3 /*break*/, 193];
                        case "fa6:FaHandHoldingHand": return [3 /*break*/, 195];
                        case "fa6:FaHandHoldingHeart": return [3 /*break*/, 197];
                        case "fa6:FaHandHoldingMedical": return [3 /*break*/, 199];
                        case "fa6:FaHandHolding": return [3 /*break*/, 201];
                        case "fa6:FaHandLizard": return [3 /*break*/, 203];
                        case "fa6:FaHandMiddleFinger": return [3 /*break*/, 205];
                        case "fa6:FaHandPeace": return [3 /*break*/, 207];
                        case "fa6:FaHandPointDown": return [3 /*break*/, 209];
                        case "fa6:FaHandPointLeft": return [3 /*break*/, 211];
                        case "fa6:FaHandPointRight": return [3 /*break*/, 213];
                        case "fa6:FaHandPointUp": return [3 /*break*/, 215];
                        case "fa6:FaHandPointer": return [3 /*break*/, 217];
                        case "fa6:FaHandScissors": return [3 /*break*/, 219];
                        case "fa6:FaHandSparkles": return [3 /*break*/, 221];
                        case "fa6:FaHandSpock": return [3 /*break*/, 223];
                        case "fa6:FaHand": return [3 /*break*/, 225];
                        case "fa6:FaHandcuffs": return [3 /*break*/, 227];
                        case "fa6:FaHandsAslInterpreting": return [3 /*break*/, 229];
                        case "fa6:FaHandsBound": return [3 /*break*/, 231];
                        case "fa6:FaHandsBubbles": return [3 /*break*/, 233];
                        case "fa6:FaHandsClapping": return [3 /*break*/, 235];
                        case "fa6:FaHandsHoldingChild": return [3 /*break*/, 237];
                        case "fa6:FaHandsHoldingCircle": return [3 /*break*/, 239];
                        case "fa6:FaHandsHolding": return [3 /*break*/, 241];
                        case "fa6:FaHandsPraying": return [3 /*break*/, 243];
                        case "fa6:FaHands": return [3 /*break*/, 245];
                        case "fa6:FaHandshakeAngle": return [3 /*break*/, 247];
                        case "fa6:FaHandshakeSimpleSlash": return [3 /*break*/, 249];
                        case "fa6:FaHandshakeSimple": return [3 /*break*/, 251];
                        case "fa6:FaHandshakeSlash": return [3 /*break*/, 253];
                        case "fa6:FaHandshake": return [3 /*break*/, 255];
                        case "fa6:FaHanukiah": return [3 /*break*/, 257];
                        case "fa6:FaHardDrive": return [3 /*break*/, 259];
                        case "fa6:FaHashtag": return [3 /*break*/, 261];
                        case "fa6:FaHatCowboySide": return [3 /*break*/, 263];
                        case "fa6:FaHatCowboy": return [3 /*break*/, 265];
                        case "fa6:FaHatWizard": return [3 /*break*/, 267];
                        case "fa6:FaHeadSideCoughSlash": return [3 /*break*/, 269];
                        case "fa6:FaHeadSideCough": return [3 /*break*/, 271];
                        case "fa6:FaHeadSideMask": return [3 /*break*/, 273];
                        case "fa6:FaHeadSideVirus": return [3 /*break*/, 275];
                        case "fa6:FaHeading": return [3 /*break*/, 277];
                        case "fa6:FaHeadphonesSimple": return [3 /*break*/, 279];
                        case "fa6:FaHeadphones": return [3 /*break*/, 281];
                        case "fa6:FaHeadset": return [3 /*break*/, 283];
                        case "fa6:FaHeartCircleBolt": return [3 /*break*/, 285];
                        case "fa6:FaHeartCircleCheck": return [3 /*break*/, 287];
                        case "fa6:FaHeartCircleExclamation": return [3 /*break*/, 289];
                        case "fa6:FaHeartCircleMinus": return [3 /*break*/, 291];
                        case "fa6:FaHeartCirclePlus": return [3 /*break*/, 293];
                        case "fa6:FaHeartCircleXmark": return [3 /*break*/, 295];
                        case "fa6:FaHeartCrack": return [3 /*break*/, 297];
                        case "fa6:FaHeartPulse": return [3 /*break*/, 299];
                        case "fa6:FaHeart": return [3 /*break*/, 301];
                        case "fa6:FaHelicopterSymbol": return [3 /*break*/, 303];
                        case "fa6:FaHelicopter": return [3 /*break*/, 305];
                        case "fa6:FaHelmetSafety": return [3 /*break*/, 307];
                        case "fa6:FaHelmetUn": return [3 /*break*/, 309];
                        case "fa6:FaHighlighter": return [3 /*break*/, 311];
                        case "fa6:FaHillAvalanche": return [3 /*break*/, 313];
                        case "fa6:FaHillRockslide": return [3 /*break*/, 315];
                        case "fa6:FaHippo": return [3 /*break*/, 317];
                        case "fa6:FaHockeyPuck": return [3 /*break*/, 319];
                        case "fa6:FaHollyBerry": return [3 /*break*/, 321];
                        case "fa6:FaHorseHead": return [3 /*break*/, 323];
                        case "fa6:FaHorse": return [3 /*break*/, 325];
                        case "fa6:FaHospitalUser": return [3 /*break*/, 327];
                        case "fa6:FaHospital": return [3 /*break*/, 329];
                        case "fa6:FaHotTubPerson": return [3 /*break*/, 331];
                        case "fa6:FaHotdog": return [3 /*break*/, 333];
                        case "fa6:FaHotel": return [3 /*break*/, 335];
                        case "fa6:FaHourglassEnd": return [3 /*break*/, 337];
                        case "fa6:FaHourglassHalf": return [3 /*break*/, 339];
                        case "fa6:FaHourglassStart": return [3 /*break*/, 341];
                        case "fa6:FaHourglass": return [3 /*break*/, 343];
                        case "fa6:FaHouseChimneyCrack": return [3 /*break*/, 345];
                        case "fa6:FaHouseChimneyMedical": return [3 /*break*/, 347];
                        case "fa6:FaHouseChimneyUser": return [3 /*break*/, 349];
                        case "fa6:FaHouseChimneyWindow": return [3 /*break*/, 351];
                        case "fa6:FaHouseChimney": return [3 /*break*/, 353];
                        case "fa6:FaHouseCircleCheck": return [3 /*break*/, 355];
                        case "fa6:FaHouseCircleExclamation": return [3 /*break*/, 357];
                        case "fa6:FaHouseCircleXmark": return [3 /*break*/, 359];
                        case "fa6:FaHouseCrack": return [3 /*break*/, 361];
                        case "fa6:FaHouseFire": return [3 /*break*/, 363];
                        case "fa6:FaHouseFlag": return [3 /*break*/, 365];
                        case "fa6:FaHouseFloodWaterCircleArrowRight": return [3 /*break*/, 367];
                        case "fa6:FaHouseFloodWater": return [3 /*break*/, 369];
                        case "fa6:FaHouseLaptop": return [3 /*break*/, 371];
                        case "fa6:FaHouseLock": return [3 /*break*/, 373];
                        case "fa6:FaHouseMedicalCircleCheck": return [3 /*break*/, 375];
                        case "fa6:FaHouseMedicalCircleExclamation": return [3 /*break*/, 377];
                        case "fa6:FaHouseMedicalCircleXmark": return [3 /*break*/, 379];
                        case "fa6:FaHouseMedicalFlag": return [3 /*break*/, 381];
                        case "fa6:FaHouseMedical": return [3 /*break*/, 383];
                        case "fa6:FaHouseSignal": return [3 /*break*/, 385];
                        case "fa6:FaHouseTsunami": return [3 /*break*/, 387];
                        case "fa6:FaHouseUser": return [3 /*break*/, 389];
                        case "fa6:FaHouse": return [3 /*break*/, 391];
                        case "fa6:FaHryvniaSign": return [3 /*break*/, 393];
                        case "fa6:FaHurricane": return [3 /*break*/, 395];
                        case "fa6:FaICursor": return [3 /*break*/, 397];
                        case "fa6:FaI": return [3 /*break*/, 399];
                        case "fa6:FaIceCream": return [3 /*break*/, 401];
                        case "fa6:FaIcicles": return [3 /*break*/, 403];
                        case "fa6:FaIcons": return [3 /*break*/, 405];
                        case "fa6:FaIdBadge": return [3 /*break*/, 407];
                        case "fa6:FaIdCardClip": return [3 /*break*/, 409];
                        case "fa6:FaIdCard": return [3 /*break*/, 411];
                        case "fa6:FaIgloo": return [3 /*break*/, 413];
                        case "fa6:FaImagePortrait": return [3 /*break*/, 415];
                        case "fa6:FaImage": return [3 /*break*/, 417];
                        case "fa6:FaImages": return [3 /*break*/, 419];
                        case "fa6:FaInbox": return [3 /*break*/, 421];
                        case "fa6:FaIndent": return [3 /*break*/, 423];
                        case "fa6:FaIndianRupeeSign": return [3 /*break*/, 425];
                        case "fa6:FaIndustry": return [3 /*break*/, 427];
                        case "fa6:FaInfinity": return [3 /*break*/, 429];
                        case "fa6:FaInfo": return [3 /*break*/, 431];
                        case "fa6:FaItalic": return [3 /*break*/, 433];
                        case "fa6:FaJ": return [3 /*break*/, 435];
                        case "fa6:FaJarWheat": return [3 /*break*/, 437];
                        case "fa6:FaJar": return [3 /*break*/, 439];
                        case "fa6:FaJedi": return [3 /*break*/, 441];
                        case "fa6:FaJetFighterUp": return [3 /*break*/, 443];
                        case "fa6:FaJetFighter": return [3 /*break*/, 445];
                        case "fa6:FaJoint": return [3 /*break*/, 447];
                        case "fa6:FaJugDetergent": return [3 /*break*/, 449];
                        case "fa6:FaK": return [3 /*break*/, 451];
                        case "fa6:FaKaaba": return [3 /*break*/, 453];
                        case "fa6:FaKey": return [3 /*break*/, 455];
                        case "fa6:FaKeyboard": return [3 /*break*/, 457];
                        case "fa6:FaKhanda": return [3 /*break*/, 459];
                        case "fa6:FaKipSign": return [3 /*break*/, 461];
                        case "fa6:FaKitMedical": return [3 /*break*/, 463];
                        case "fa6:FaKitchenSet": return [3 /*break*/, 465];
                        case "fa6:FaKiwiBird": return [3 /*break*/, 467];
                        case "fa6:FaL": return [3 /*break*/, 469];
                        case "fa6:FaLandMineOn": return [3 /*break*/, 471];
                        case "fa6:FaLandmarkDome": return [3 /*break*/, 473];
                        case "fa6:FaLandmarkFlag": return [3 /*break*/, 475];
                        case "fa6:FaLandmark": return [3 /*break*/, 477];
                        case "fa6:FaLanguage": return [3 /*break*/, 479];
                        case "fa6:FaLaptopCode": return [3 /*break*/, 481];
                        case "fa6:FaLaptopFile": return [3 /*break*/, 483];
                        case "fa6:FaLaptopMedical": return [3 /*break*/, 485];
                        case "fa6:FaLaptop": return [3 /*break*/, 487];
                        case "fa6:FaLariSign": return [3 /*break*/, 489];
                        case "fa6:FaLayerGroup": return [3 /*break*/, 491];
                        case "fa6:FaLeaf": return [3 /*break*/, 493];
                        case "fa6:FaLeftLong": return [3 /*break*/, 495];
                        case "fa6:FaLeftRight": return [3 /*break*/, 497];
                        case "fa6:FaLemon": return [3 /*break*/, 499];
                        case "fa6:FaLessThanEqual": return [3 /*break*/, 501];
                        case "fa6:FaLessThan": return [3 /*break*/, 503];
                        case "fa6:FaLifeRing": return [3 /*break*/, 505];
                        case "fa6:FaLightbulb": return [3 /*break*/, 507];
                        case "fa6:FaLinesLeaning": return [3 /*break*/, 509];
                        case "fa6:FaLinkSlash": return [3 /*break*/, 511];
                        case "fa6:FaLink": return [3 /*break*/, 513];
                        case "fa6:FaLiraSign": return [3 /*break*/, 515];
                        case "fa6:FaListCheck": return [3 /*break*/, 517];
                        case "fa6:FaListOl": return [3 /*break*/, 519];
                        case "fa6:FaListUl": return [3 /*break*/, 521];
                        case "fa6:FaList": return [3 /*break*/, 523];
                        case "fa6:FaLitecoinSign": return [3 /*break*/, 525];
                        case "fa6:FaLocationArrow": return [3 /*break*/, 527];
                        case "fa6:FaLocationCrosshairs": return [3 /*break*/, 529];
                        case "fa6:FaLocationDot": return [3 /*break*/, 531];
                        case "fa6:FaLocationPinLock": return [3 /*break*/, 533];
                        case "fa6:FaLocationPin": return [3 /*break*/, 535];
                        case "fa6:FaLockOpen": return [3 /*break*/, 537];
                        case "fa6:FaLock": return [3 /*break*/, 539];
                        case "fa6:FaLocust": return [3 /*break*/, 541];
                        case "fa6:FaLungsVirus": return [3 /*break*/, 543];
                        case "fa6:FaLungs": return [3 /*break*/, 545];
                        case "fa6:FaM": return [3 /*break*/, 547];
                        case "fa6:FaMagnet": return [3 /*break*/, 549];
                        case "fa6:FaMagnifyingGlassArrowRight": return [3 /*break*/, 551];
                        case "fa6:FaMagnifyingGlassChart": return [3 /*break*/, 553];
                        case "fa6:FaMagnifyingGlassDollar": return [3 /*break*/, 555];
                        case "fa6:FaMagnifyingGlassLocation": return [3 /*break*/, 557];
                        case "fa6:FaMagnifyingGlassMinus": return [3 /*break*/, 559];
                        case "fa6:FaMagnifyingGlassPlus": return [3 /*break*/, 561];
                        case "fa6:FaMagnifyingGlass": return [3 /*break*/, 563];
                        case "fa6:FaManatSign": return [3 /*break*/, 565];
                        case "fa6:FaMapLocationDot": return [3 /*break*/, 567];
                        case "fa6:FaMapLocation": return [3 /*break*/, 569];
                        case "fa6:FaMapPin": return [3 /*break*/, 571];
                        case "fa6:FaMap": return [3 /*break*/, 573];
                        case "fa6:FaMarker": return [3 /*break*/, 575];
                        case "fa6:FaMarsAndVenusBurst": return [3 /*break*/, 577];
                        case "fa6:FaMarsAndVenus": return [3 /*break*/, 579];
                        case "fa6:FaMarsDouble": return [3 /*break*/, 581];
                        case "fa6:FaMarsStrokeRight": return [3 /*break*/, 583];
                        case "fa6:FaMarsStrokeUp": return [3 /*break*/, 585];
                        case "fa6:FaMarsStroke": return [3 /*break*/, 587];
                        case "fa6:FaMars": return [3 /*break*/, 589];
                        case "fa6:FaMartiniGlassCitrus": return [3 /*break*/, 591];
                        case "fa6:FaMartiniGlassEmpty": return [3 /*break*/, 593];
                        case "fa6:FaMartiniGlass": return [3 /*break*/, 595];
                        case "fa6:FaMaskFace": return [3 /*break*/, 597];
                        case "fa6:FaMaskVentilator": return [3 /*break*/, 599];
                        case "fa6:FaMask": return [3 /*break*/, 601];
                        case "fa6:FaMasksTheater": return [3 /*break*/, 603];
                        case "fa6:FaMattressPillow": return [3 /*break*/, 605];
                        case "fa6:FaMaximize": return [3 /*break*/, 607];
                        case "fa6:FaMedal": return [3 /*break*/, 609];
                        case "fa6:FaMemory": return [3 /*break*/, 611];
                        case "fa6:FaMenorah": return [3 /*break*/, 613];
                        case "fa6:FaMercury": return [3 /*break*/, 615];
                        case "fa6:FaMessage": return [3 /*break*/, 617];
                        case "fa6:FaMeteor": return [3 /*break*/, 619];
                        case "fa6:FaMicrochip": return [3 /*break*/, 621];
                        case "fa6:FaMicrophoneLinesSlash": return [3 /*break*/, 623];
                        case "fa6:FaMicrophoneLines": return [3 /*break*/, 625];
                        case "fa6:FaMicrophoneSlash": return [3 /*break*/, 627];
                        case "fa6:FaMicrophone": return [3 /*break*/, 629];
                        case "fa6:FaMicroscope": return [3 /*break*/, 631];
                        case "fa6:FaMillSign": return [3 /*break*/, 633];
                        case "fa6:FaMinimize": return [3 /*break*/, 635];
                        case "fa6:FaMinus": return [3 /*break*/, 637];
                        case "fa6:FaMitten": return [3 /*break*/, 639];
                        case "fa6:FaMobileButton": return [3 /*break*/, 641];
                        case "fa6:FaMobileRetro": return [3 /*break*/, 643];
                        case "fa6:FaMobileScreenButton": return [3 /*break*/, 645];
                        case "fa6:FaMobileScreen": return [3 /*break*/, 647];
                        case "fa6:FaMobile": return [3 /*break*/, 649];
                        case "fa6:FaMoneyBill1Wave": return [3 /*break*/, 651];
                        case "fa6:FaMoneyBill1": return [3 /*break*/, 653];
                        case "fa6:FaMoneyBillTransfer": return [3 /*break*/, 655];
                        case "fa6:FaMoneyBillTrendUp": return [3 /*break*/, 657];
                        case "fa6:FaMoneyBillWave": return [3 /*break*/, 659];
                        case "fa6:FaMoneyBillWheat": return [3 /*break*/, 661];
                        case "fa6:FaMoneyBill": return [3 /*break*/, 663];
                        case "fa6:FaMoneyBills": return [3 /*break*/, 665];
                        case "fa6:FaMoneyCheckDollar": return [3 /*break*/, 667];
                        case "fa6:FaMoneyCheck": return [3 /*break*/, 669];
                        case "fa6:FaMonument": return [3 /*break*/, 671];
                        case "fa6:FaMoon": return [3 /*break*/, 673];
                        case "fa6:FaMortarPestle": return [3 /*break*/, 675];
                        case "fa6:FaMosque": return [3 /*break*/, 677];
                        case "fa6:FaMosquitoNet": return [3 /*break*/, 679];
                        case "fa6:FaMosquito": return [3 /*break*/, 681];
                        case "fa6:FaMotorcycle": return [3 /*break*/, 683];
                        case "fa6:FaMound": return [3 /*break*/, 685];
                        case "fa6:FaMountainCity": return [3 /*break*/, 687];
                        case "fa6:FaMountainSun": return [3 /*break*/, 689];
                        case "fa6:FaMountain": return [3 /*break*/, 691];
                        case "fa6:FaMugHot": return [3 /*break*/, 693];
                        case "fa6:FaMugSaucer": return [3 /*break*/, 695];
                        case "fa6:FaMusic": return [3 /*break*/, 697];
                        case "fa6:FaN": return [3 /*break*/, 699];
                        case "fa6:FaNairaSign": return [3 /*break*/, 701];
                        case "fa6:FaNetworkWired": return [3 /*break*/, 703];
                        case "fa6:FaNeuter": return [3 /*break*/, 705];
                        case "fa6:FaNewspaper": return [3 /*break*/, 707];
                        case "fa6:FaNotEqual": return [3 /*break*/, 709];
                        case "fa6:FaNotdef": return [3 /*break*/, 711];
                        case "fa6:FaNoteSticky": return [3 /*break*/, 713];
                        case "fa6:FaNotesMedical": return [3 /*break*/, 715];
                        case "fa6:FaO": return [3 /*break*/, 717];
                        case "fa6:FaObjectGroup": return [3 /*break*/, 719];
                        case "fa6:FaObjectUngroup": return [3 /*break*/, 721];
                        case "fa6:FaOilCan": return [3 /*break*/, 723];
                        case "fa6:FaOilWell": return [3 /*break*/, 725];
                        case "fa6:FaOm": return [3 /*break*/, 727];
                        case "fa6:FaOtter": return [3 /*break*/, 729];
                        case "fa6:FaOutdent": return [3 /*break*/, 731];
                        case "fa6:FaP": return [3 /*break*/, 733];
                        case "fa6:FaPager": return [3 /*break*/, 735];
                        case "fa6:FaPaintRoller": return [3 /*break*/, 737];
                        case "fa6:FaPaintbrush": return [3 /*break*/, 739];
                        case "fa6:FaPalette": return [3 /*break*/, 741];
                        case "fa6:FaPallet": return [3 /*break*/, 743];
                        case "fa6:FaPanorama": return [3 /*break*/, 745];
                        case "fa6:FaPaperPlane": return [3 /*break*/, 747];
                        case "fa6:FaPaperclip": return [3 /*break*/, 749];
                        case "fa6:FaParachuteBox": return [3 /*break*/, 751];
                        case "fa6:FaParagraph": return [3 /*break*/, 753];
                        case "fa6:FaPassport": return [3 /*break*/, 755];
                        case "fa6:FaPaste": return [3 /*break*/, 757];
                        case "fa6:FaPause": return [3 /*break*/, 759];
                        case "fa6:FaPaw": return [3 /*break*/, 761];
                        case "fa6:FaPeace": return [3 /*break*/, 763];
                        case "fa6:FaPenClip": return [3 /*break*/, 765];
                        case "fa6:FaPenFancy": return [3 /*break*/, 767];
                        case "fa6:FaPenNib": return [3 /*break*/, 769];
                        case "fa6:FaPenRuler": return [3 /*break*/, 771];
                        case "fa6:FaPenToSquare": return [3 /*break*/, 773];
                        case "fa6:FaPen": return [3 /*break*/, 775];
                        case "fa6:FaPencil": return [3 /*break*/, 777];
                        case "fa6:FaPeopleArrows": return [3 /*break*/, 779];
                        case "fa6:FaPeopleCarryBox": return [3 /*break*/, 781];
                        case "fa6:FaPeopleGroup": return [3 /*break*/, 783];
                        case "fa6:FaPeopleLine": return [3 /*break*/, 785];
                        case "fa6:FaPeoplePulling": return [3 /*break*/, 787];
                        case "fa6:FaPeopleRobbery": return [3 /*break*/, 789];
                        case "fa6:FaPeopleRoof": return [3 /*break*/, 791];
                        case "fa6:FaPepperHot": return [3 /*break*/, 793];
                        case "fa6:FaPercent": return [3 /*break*/, 795];
                        case "fa6:FaPersonArrowDownToLine": return [3 /*break*/, 797];
                        case "fa6:FaPersonArrowUpFromLine": return [3 /*break*/, 799];
                        case "fa6:FaPersonBiking": return [3 /*break*/, 801];
                        case "fa6:FaPersonBooth": return [3 /*break*/, 803];
                        case "fa6:FaPersonBreastfeeding": return [3 /*break*/, 805];
                        case "fa6:FaPersonBurst": return [3 /*break*/, 807];
                        case "fa6:FaPersonCane": return [3 /*break*/, 809];
                        case "fa6:FaPersonChalkboard": return [3 /*break*/, 811];
                        case "fa6:FaPersonCircleCheck": return [3 /*break*/, 813];
                        case "fa6:FaPersonCircleExclamation": return [3 /*break*/, 815];
                        case "fa6:FaPersonCircleMinus": return [3 /*break*/, 817];
                        case "fa6:FaPersonCirclePlus": return [3 /*break*/, 819];
                        case "fa6:FaPersonCircleQuestion": return [3 /*break*/, 821];
                        case "fa6:FaPersonCircleXmark": return [3 /*break*/, 823];
                        case "fa6:FaPersonDigging": return [3 /*break*/, 825];
                        case "fa6:FaPersonDotsFromLine": return [3 /*break*/, 827];
                        case "fa6:FaPersonDressBurst": return [3 /*break*/, 829];
                        case "fa6:FaPersonDress": return [3 /*break*/, 831];
                        case "fa6:FaPersonDrowning": return [3 /*break*/, 833];
                        case "fa6:FaPersonFallingBurst": return [3 /*break*/, 835];
                        case "fa6:FaPersonFalling": return [3 /*break*/, 837];
                        case "fa6:FaPersonHalfDress": return [3 /*break*/, 839];
                        case "fa6:FaPersonHarassing": return [3 /*break*/, 841];
                        case "fa6:FaPersonHiking": return [3 /*break*/, 843];
                        case "fa6:FaPersonMilitaryPointing": return [3 /*break*/, 845];
                        case "fa6:FaPersonMilitaryRifle": return [3 /*break*/, 847];
                        case "fa6:FaPersonMilitaryToPerson": return [3 /*break*/, 849];
                        case "fa6:FaPersonPraying": return [3 /*break*/, 851];
                        case "fa6:FaPersonPregnant": return [3 /*break*/, 853];
                        case "fa6:FaPersonRays": return [3 /*break*/, 855];
                        case "fa6:FaPersonRifle": return [3 /*break*/, 857];
                        case "fa6:FaPersonRunning": return [3 /*break*/, 859];
                        case "fa6:FaPersonShelter": return [3 /*break*/, 861];
                        case "fa6:FaPersonSkating": return [3 /*break*/, 863];
                        case "fa6:FaPersonSkiingNordic": return [3 /*break*/, 865];
                        case "fa6:FaPersonSkiing": return [3 /*break*/, 867];
                        case "fa6:FaPersonSnowboarding": return [3 /*break*/, 869];
                        case "fa6:FaPersonSwimming": return [3 /*break*/, 871];
                        case "fa6:FaPersonThroughWindow": return [3 /*break*/, 873];
                        case "fa6:FaPersonWalkingArrowLoopLeft": return [3 /*break*/, 875];
                        case "fa6:FaPersonWalkingArrowRight": return [3 /*break*/, 877];
                        case "fa6:FaPersonWalkingDashedLineArrowRight": return [3 /*break*/, 879];
                        case "fa6:FaPersonWalkingLuggage": return [3 /*break*/, 881];
                        case "fa6:FaPersonWalkingWithCane": return [3 /*break*/, 883];
                        case "fa6:FaPersonWalking": return [3 /*break*/, 885];
                        case "fa6:FaPerson": return [3 /*break*/, 887];
                        case "fa6:FaPesetaSign": return [3 /*break*/, 889];
                        case "fa6:FaPesoSign": return [3 /*break*/, 891];
                        case "fa6:FaPhoneFlip": return [3 /*break*/, 893];
                        case "fa6:FaPhoneSlash": return [3 /*break*/, 895];
                        case "fa6:FaPhoneVolume": return [3 /*break*/, 897];
                        case "fa6:FaPhone": return [3 /*break*/, 899];
                        case "fa6:FaPhotoFilm": return [3 /*break*/, 901];
                        case "fa6:FaPiggyBank": return [3 /*break*/, 903];
                        case "fa6:FaPills": return [3 /*break*/, 905];
                        case "fa6:FaPizzaSlice": return [3 /*break*/, 907];
                        case "fa6:FaPlaceOfWorship": return [3 /*break*/, 909];
                        case "fa6:FaPlaneArrival": return [3 /*break*/, 911];
                        case "fa6:FaPlaneCircleCheck": return [3 /*break*/, 913];
                        case "fa6:FaPlaneCircleExclamation": return [3 /*break*/, 915];
                        case "fa6:FaPlaneCircleXmark": return [3 /*break*/, 917];
                        case "fa6:FaPlaneDeparture": return [3 /*break*/, 919];
                        case "fa6:FaPlaneLock": return [3 /*break*/, 921];
                        case "fa6:FaPlaneSlash": return [3 /*break*/, 923];
                        case "fa6:FaPlaneUp": return [3 /*break*/, 925];
                        case "fa6:FaPlane": return [3 /*break*/, 927];
                        case "fa6:FaPlantWilt": return [3 /*break*/, 929];
                        case "fa6:FaPlateWheat": return [3 /*break*/, 931];
                        case "fa6:FaPlay": return [3 /*break*/, 933];
                        case "fa6:FaPlugCircleBolt": return [3 /*break*/, 935];
                        case "fa6:FaPlugCircleCheck": return [3 /*break*/, 937];
                        case "fa6:FaPlugCircleExclamation": return [3 /*break*/, 939];
                        case "fa6:FaPlugCircleMinus": return [3 /*break*/, 941];
                        case "fa6:FaPlugCirclePlus": return [3 /*break*/, 943];
                        case "fa6:FaPlugCircleXmark": return [3 /*break*/, 945];
                        case "fa6:FaPlug": return [3 /*break*/, 947];
                        case "fa6:FaPlusMinus": return [3 /*break*/, 949];
                        case "fa6:FaPlus": return [3 /*break*/, 951];
                        case "fa6:FaPodcast": return [3 /*break*/, 953];
                        case "fa6:FaPooStorm": return [3 /*break*/, 955];
                        case "fa6:FaPoo": return [3 /*break*/, 957];
                        case "fa6:FaPoop": return [3 /*break*/, 959];
                        case "fa6:FaPowerOff": return [3 /*break*/, 961];
                        case "fa6:FaPrescriptionBottleMedical": return [3 /*break*/, 963];
                        case "fa6:FaPrescriptionBottle": return [3 /*break*/, 965];
                        case "fa6:FaPrescription": return [3 /*break*/, 967];
                        case "fa6:FaPrint": return [3 /*break*/, 969];
                        case "fa6:FaPumpMedical": return [3 /*break*/, 971];
                        case "fa6:FaPumpSoap": return [3 /*break*/, 973];
                        case "fa6:FaPuzzlePiece": return [3 /*break*/, 975];
                        case "fa6:FaQ": return [3 /*break*/, 977];
                        case "fa6:FaQrcode": return [3 /*break*/, 979];
                        case "fa6:FaQuestion": return [3 /*break*/, 981];
                        case "fa6:FaQuoteLeft": return [3 /*break*/, 983];
                        case "fa6:FaQuoteRight": return [3 /*break*/, 985];
                        case "fa6:FaR": return [3 /*break*/, 987];
                        case "fa6:FaRadiation": return [3 /*break*/, 989];
                        case "fa6:FaRadio": return [3 /*break*/, 991];
                        case "fa6:FaRainbow": return [3 /*break*/, 993];
                        case "fa6:FaRankingStar": return [3 /*break*/, 995];
                        case "fa6:FaReceipt": return [3 /*break*/, 997];
                        case "fa6:FaRecordVinyl": return [3 /*break*/, 999];
                        case "fa6:FaRectangleAd": return [3 /*break*/, 1001];
                        case "fa6:FaRectangleList": return [3 /*break*/, 1003];
                        case "fa6:FaRectangleXmark": return [3 /*break*/, 1005];
                        case "fa6:FaRecycle": return [3 /*break*/, 1007];
                        case "fa6:FaRegistered": return [3 /*break*/, 1009];
                        case "fa6:FaRepeat": return [3 /*break*/, 1011];
                        case "fa6:FaReplyAll": return [3 /*break*/, 1013];
                        case "fa6:FaReply": return [3 /*break*/, 1015];
                        case "fa6:FaRepublican": return [3 /*break*/, 1017];
                        case "fa6:FaRestroom": return [3 /*break*/, 1019];
                        case "fa6:FaRetweet": return [3 /*break*/, 1021];
                        case "fa6:FaRibbon": return [3 /*break*/, 1023];
                        case "fa6:FaRightFromBracket": return [3 /*break*/, 1025];
                        case "fa6:FaRightLeft": return [3 /*break*/, 1027];
                        case "fa6:FaRightLong": return [3 /*break*/, 1029];
                        case "fa6:FaRightToBracket": return [3 /*break*/, 1031];
                        case "fa6:FaRing": return [3 /*break*/, 1033];
                        case "fa6:FaRoadBarrier": return [3 /*break*/, 1035];
                        case "fa6:FaRoadBridge": return [3 /*break*/, 1037];
                        case "fa6:FaRoadCircleCheck": return [3 /*break*/, 1039];
                        case "fa6:FaRoadCircleExclamation": return [3 /*break*/, 1041];
                        case "fa6:FaRoadCircleXmark": return [3 /*break*/, 1043];
                        case "fa6:FaRoadLock": return [3 /*break*/, 1045];
                        case "fa6:FaRoadSpikes": return [3 /*break*/, 1047];
                        case "fa6:FaRoad": return [3 /*break*/, 1049];
                        case "fa6:FaRobot": return [3 /*break*/, 1051];
                        case "fa6:FaRocket": return [3 /*break*/, 1053];
                        case "fa6:FaRotateLeft": return [3 /*break*/, 1055];
                        case "fa6:FaRotateRight": return [3 /*break*/, 1057];
                        case "fa6:FaRotate": return [3 /*break*/, 1059];
                        case "fa6:FaRoute": return [3 /*break*/, 1061];
                        case "fa6:FaRss": return [3 /*break*/, 1063];
                        case "fa6:FaRubleSign": return [3 /*break*/, 1065];
                        case "fa6:FaRug": return [3 /*break*/, 1067];
                        case "fa6:FaRulerCombined": return [3 /*break*/, 1069];
                        case "fa6:FaRulerHorizontal": return [3 /*break*/, 1071];
                        case "fa6:FaRulerVertical": return [3 /*break*/, 1073];
                        case "fa6:FaRuler": return [3 /*break*/, 1075];
                        case "fa6:FaRupeeSign": return [3 /*break*/, 1077];
                        case "fa6:FaRupiahSign": return [3 /*break*/, 1079];
                        case "fa6:FaS": return [3 /*break*/, 1081];
                        case "fa6:FaSackDollar": return [3 /*break*/, 1083];
                        case "fa6:FaSackXmark": return [3 /*break*/, 1085];
                        case "fa6:FaSailboat": return [3 /*break*/, 1087];
                        case "fa6:FaSatelliteDish": return [3 /*break*/, 1089];
                        case "fa6:FaSatellite": return [3 /*break*/, 1091];
                        case "fa6:FaScaleBalanced": return [3 /*break*/, 1093];
                        case "fa6:FaScaleUnbalancedFlip": return [3 /*break*/, 1095];
                        case "fa6:FaScaleUnbalanced": return [3 /*break*/, 1097];
                        case "fa6:FaSchoolCircleCheck": return [3 /*break*/, 1099];
                        case "fa6:FaSchoolCircleExclamation": return [3 /*break*/, 1101];
                        case "fa6:FaSchoolCircleXmark": return [3 /*break*/, 1103];
                        case "fa6:FaSchoolFlag": return [3 /*break*/, 1105];
                        case "fa6:FaSchoolLock": return [3 /*break*/, 1107];
                        case "fa6:FaSchool": return [3 /*break*/, 1109];
                        case "fa6:FaScissors": return [3 /*break*/, 1111];
                        case "fa6:FaScrewdriverWrench": return [3 /*break*/, 1113];
                        case "fa6:FaScrewdriver": return [3 /*break*/, 1115];
                        case "fa6:FaScrollTorah": return [3 /*break*/, 1117];
                        case "fa6:FaScroll": return [3 /*break*/, 1119];
                        case "fa6:FaSdCard": return [3 /*break*/, 1121];
                        case "fa6:FaSection": return [3 /*break*/, 1123];
                        case "fa6:FaSeedling": return [3 /*break*/, 1125];
                        case "fa6:FaServer": return [3 /*break*/, 1127];
                        case "fa6:FaShapes": return [3 /*break*/, 1129];
                        case "fa6:FaShareFromSquare": return [3 /*break*/, 1131];
                        case "fa6:FaShareNodes": return [3 /*break*/, 1133];
                        case "fa6:FaShare": return [3 /*break*/, 1135];
                        case "fa6:FaSheetPlastic": return [3 /*break*/, 1137];
                        case "fa6:FaShekelSign": return [3 /*break*/, 1139];
                        case "fa6:FaShieldCat": return [3 /*break*/, 1141];
                        case "fa6:FaShieldDog": return [3 /*break*/, 1143];
                        case "fa6:FaShieldHalved": return [3 /*break*/, 1145];
                        case "fa6:FaShieldHeart": return [3 /*break*/, 1147];
                        case "fa6:FaShieldVirus": return [3 /*break*/, 1149];
                        case "fa6:FaShield": return [3 /*break*/, 1151];
                        case "fa6:FaShip": return [3 /*break*/, 1153];
                        case "fa6:FaShirt": return [3 /*break*/, 1155];
                        case "fa6:FaShoePrints": return [3 /*break*/, 1157];
                        case "fa6:FaShopLock": return [3 /*break*/, 1159];
                        case "fa6:FaShopSlash": return [3 /*break*/, 1161];
                        case "fa6:FaShop": return [3 /*break*/, 1163];
                        case "fa6:FaShower": return [3 /*break*/, 1165];
                        case "fa6:FaShrimp": return [3 /*break*/, 1167];
                        case "fa6:FaShuffle": return [3 /*break*/, 1169];
                        case "fa6:FaShuttleSpace": return [3 /*break*/, 1171];
                        case "fa6:FaSignHanging": return [3 /*break*/, 1173];
                        case "fa6:FaSignal": return [3 /*break*/, 1175];
                        case "fa6:FaSignature": return [3 /*break*/, 1177];
                        case "fa6:FaSignsPost": return [3 /*break*/, 1179];
                        case "fa6:FaSimCard": return [3 /*break*/, 1181];
                        case "fa6:FaSink": return [3 /*break*/, 1183];
                        case "fa6:FaSitemap": return [3 /*break*/, 1185];
                        case "fa6:FaSkullCrossbones": return [3 /*break*/, 1187];
                        case "fa6:FaSkull": return [3 /*break*/, 1189];
                        case "fa6:FaSlash": return [3 /*break*/, 1191];
                        case "fa6:FaSleigh": return [3 /*break*/, 1193];
                        case "fa6:FaSliders": return [3 /*break*/, 1195];
                        case "fa6:FaSmog": return [3 /*break*/, 1197];
                        case "fa6:FaSmoking": return [3 /*break*/, 1199];
                        case "fa6:FaSnowflake": return [3 /*break*/, 1201];
                        case "fa6:FaSnowman": return [3 /*break*/, 1203];
                        case "fa6:FaSnowplow": return [3 /*break*/, 1205];
                        case "fa6:FaSoap": return [3 /*break*/, 1207];
                        case "fa6:FaSocks": return [3 /*break*/, 1209];
                        case "fa6:FaSolarPanel": return [3 /*break*/, 1211];
                        case "fa6:FaSortDown": return [3 /*break*/, 1213];
                        case "fa6:FaSortUp": return [3 /*break*/, 1215];
                        case "fa6:FaSort": return [3 /*break*/, 1217];
                        case "fa6:FaSpa": return [3 /*break*/, 1219];
                        case "fa6:FaSpaghettiMonsterFlying": return [3 /*break*/, 1221];
                        case "fa6:FaSpellCheck": return [3 /*break*/, 1223];
                        case "fa6:FaSpider": return [3 /*break*/, 1225];
                        case "fa6:FaSpinner": return [3 /*break*/, 1227];
                        case "fa6:FaSplotch": return [3 /*break*/, 1229];
                        case "fa6:FaSpoon": return [3 /*break*/, 1231];
                        case "fa6:FaSprayCanSparkles": return [3 /*break*/, 1233];
                        case "fa6:FaSprayCan": return [3 /*break*/, 1235];
                        case "fa6:FaSquareArrowUpRight": return [3 /*break*/, 1237];
                        case "fa6:FaSquareCaretDown": return [3 /*break*/, 1239];
                        case "fa6:FaSquareCaretLeft": return [3 /*break*/, 1241];
                        case "fa6:FaSquareCaretRight": return [3 /*break*/, 1243];
                        case "fa6:FaSquareCaretUp": return [3 /*break*/, 1245];
                        case "fa6:FaSquareCheck": return [3 /*break*/, 1247];
                        case "fa6:FaSquareEnvelope": return [3 /*break*/, 1249];
                        case "fa6:FaSquareFull": return [3 /*break*/, 1251];
                        case "fa6:FaSquareH": return [3 /*break*/, 1253];
                        case "fa6:FaSquareMinus": return [3 /*break*/, 1255];
                        case "fa6:FaSquareNfi": return [3 /*break*/, 1257];
                        case "fa6:FaSquareParking": return [3 /*break*/, 1259];
                        case "fa6:FaSquarePen": return [3 /*break*/, 1261];
                        case "fa6:FaSquarePersonConfined": return [3 /*break*/, 1263];
                        case "fa6:FaSquarePhoneFlip": return [3 /*break*/, 1265];
                        case "fa6:FaSquarePhone": return [3 /*break*/, 1267];
                        case "fa6:FaSquarePlus": return [3 /*break*/, 1269];
                        case "fa6:FaSquarePollHorizontal": return [3 /*break*/, 1271];
                        case "fa6:FaSquarePollVertical": return [3 /*break*/, 1273];
                        case "fa6:FaSquareRootVariable": return [3 /*break*/, 1275];
                        case "fa6:FaSquareRss": return [3 /*break*/, 1277];
                        case "fa6:FaSquareShareNodes": return [3 /*break*/, 1279];
                        case "fa6:FaSquareUpRight": return [3 /*break*/, 1281];
                        case "fa6:FaSquareVirus": return [3 /*break*/, 1283];
                        case "fa6:FaSquareXmark": return [3 /*break*/, 1285];
                        case "fa6:FaSquare": return [3 /*break*/, 1287];
                        case "fa6:FaStaffSnake": return [3 /*break*/, 1289];
                        case "fa6:FaStairs": return [3 /*break*/, 1291];
                        case "fa6:FaStamp": return [3 /*break*/, 1293];
                        case "fa6:FaStapler": return [3 /*break*/, 1295];
                        case "fa6:FaStarAndCrescent": return [3 /*break*/, 1297];
                        case "fa6:FaStarHalfStroke": return [3 /*break*/, 1299];
                        case "fa6:FaStarHalf": return [3 /*break*/, 1301];
                        case "fa6:FaStarOfDavid": return [3 /*break*/, 1303];
                        case "fa6:FaStarOfLife": return [3 /*break*/, 1305];
                        case "fa6:FaStar": return [3 /*break*/, 1307];
                        case "fa6:FaSterlingSign": return [3 /*break*/, 1309];
                        case "fa6:FaStethoscope": return [3 /*break*/, 1311];
                        case "fa6:FaStop": return [3 /*break*/, 1313];
                        case "fa6:FaStopwatch20": return [3 /*break*/, 1315];
                        case "fa6:FaStopwatch": return [3 /*break*/, 1317];
                        case "fa6:FaStoreSlash": return [3 /*break*/, 1319];
                        case "fa6:FaStore": return [3 /*break*/, 1321];
                        case "fa6:FaStreetView": return [3 /*break*/, 1323];
                        case "fa6:FaStrikethrough": return [3 /*break*/, 1325];
                        case "fa6:FaStroopwafel": return [3 /*break*/, 1327];
                        case "fa6:FaSubscript": return [3 /*break*/, 1329];
                        case "fa6:FaSuitcaseMedical": return [3 /*break*/, 1331];
                        case "fa6:FaSuitcaseRolling": return [3 /*break*/, 1333];
                        case "fa6:FaSuitcase": return [3 /*break*/, 1335];
                        case "fa6:FaSunPlantWilt": return [3 /*break*/, 1337];
                        case "fa6:FaSun": return [3 /*break*/, 1339];
                        case "fa6:FaSuperscript": return [3 /*break*/, 1341];
                        case "fa6:FaSwatchbook": return [3 /*break*/, 1343];
                        case "fa6:FaSynagogue": return [3 /*break*/, 1345];
                        case "fa6:FaSyringe": return [3 /*break*/, 1347];
                        case "fa6:FaT": return [3 /*break*/, 1349];
                        case "fa6:FaTableCellsColumnLock": return [3 /*break*/, 1351];
                        case "fa6:FaTableCellsLarge": return [3 /*break*/, 1353];
                        case "fa6:FaTableCellsRowLock": return [3 /*break*/, 1355];
                        case "fa6:FaTableCellsRowUnlock": return [3 /*break*/, 1357];
                        case "fa6:FaTableCells": return [3 /*break*/, 1359];
                        case "fa6:FaTableColumns": return [3 /*break*/, 1361];
                        case "fa6:FaTableList": return [3 /*break*/, 1363];
                        case "fa6:FaTableTennisPaddleBall": return [3 /*break*/, 1365];
                        case "fa6:FaTable": return [3 /*break*/, 1367];
                        case "fa6:FaTabletButton": return [3 /*break*/, 1369];
                        case "fa6:FaTabletScreenButton": return [3 /*break*/, 1371];
                        case "fa6:FaTablet": return [3 /*break*/, 1373];
                        case "fa6:FaTablets": return [3 /*break*/, 1375];
                        case "fa6:FaTachographDigital": return [3 /*break*/, 1377];
                        case "fa6:FaTag": return [3 /*break*/, 1379];
                        case "fa6:FaTags": return [3 /*break*/, 1381];
                        case "fa6:FaTape": return [3 /*break*/, 1383];
                        case "fa6:FaTarpDroplet": return [3 /*break*/, 1385];
                        case "fa6:FaTarp": return [3 /*break*/, 1387];
                        case "fa6:FaTaxi": return [3 /*break*/, 1389];
                        case "fa6:FaTeethOpen": return [3 /*break*/, 1391];
                        case "fa6:FaTeeth": return [3 /*break*/, 1393];
                        case "fa6:FaTemperatureArrowDown": return [3 /*break*/, 1395];
                        case "fa6:FaTemperatureArrowUp": return [3 /*break*/, 1397];
                        case "fa6:FaTemperatureEmpty": return [3 /*break*/, 1399];
                        case "fa6:FaTemperatureFull": return [3 /*break*/, 1401];
                        case "fa6:FaTemperatureHalf": return [3 /*break*/, 1403];
                        case "fa6:FaTemperatureHigh": return [3 /*break*/, 1405];
                        case "fa6:FaTemperatureLow": return [3 /*break*/, 1407];
                        case "fa6:FaTemperatureQuarter": return [3 /*break*/, 1409];
                        case "fa6:FaTemperatureThreeQuarters": return [3 /*break*/, 1411];
                        case "fa6:FaTengeSign": return [3 /*break*/, 1413];
                        case "fa6:FaTentArrowDownToLine": return [3 /*break*/, 1415];
                        case "fa6:FaTentArrowLeftRight": return [3 /*break*/, 1417];
                        case "fa6:FaTentArrowTurnLeft": return [3 /*break*/, 1419];
                        case "fa6:FaTentArrowsDown": return [3 /*break*/, 1421];
                        case "fa6:FaTent": return [3 /*break*/, 1423];
                        case "fa6:FaTents": return [3 /*break*/, 1425];
                        case "fa6:FaTerminal": return [3 /*break*/, 1427];
                        case "fa6:FaTextHeight": return [3 /*break*/, 1429];
                        case "fa6:FaTextSlash": return [3 /*break*/, 1431];
                        case "fa6:FaTextWidth": return [3 /*break*/, 1433];
                        case "fa6:FaThermometer": return [3 /*break*/, 1435];
                        case "fa6:FaThumbsDown": return [3 /*break*/, 1437];
                        case "fa6:FaThumbsUp": return [3 /*break*/, 1439];
                        case "fa6:FaThumbtackSlash": return [3 /*break*/, 1441];
                        case "fa6:FaThumbtack": return [3 /*break*/, 1443];
                        case "fa6:FaTicketSimple": return [3 /*break*/, 1445];
                        case "fa6:FaTicket": return [3 /*break*/, 1447];
                        case "fa6:FaTimeline": return [3 /*break*/, 1449];
                        case "fa6:FaToggleOff": return [3 /*break*/, 1451];
                        case "fa6:FaToggleOn": return [3 /*break*/, 1453];
                        case "fa6:FaToiletPaperSlash": return [3 /*break*/, 1455];
                        case "fa6:FaToiletPaper": return [3 /*break*/, 1457];
                        case "fa6:FaToiletPortable": return [3 /*break*/, 1459];
                        case "fa6:FaToilet": return [3 /*break*/, 1461];
                        case "fa6:FaToiletsPortable": return [3 /*break*/, 1463];
                        case "fa6:FaToolbox": return [3 /*break*/, 1465];
                        case "fa6:FaTooth": return [3 /*break*/, 1467];
                        case "fa6:FaToriiGate": return [3 /*break*/, 1469];
                        case "fa6:FaTornado": return [3 /*break*/, 1471];
                        case "fa6:FaTowerBroadcast": return [3 /*break*/, 1473];
                        case "fa6:FaTowerCell": return [3 /*break*/, 1475];
                        case "fa6:FaTowerObservation": return [3 /*break*/, 1477];
                        case "fa6:FaTractor": return [3 /*break*/, 1479];
                        case "fa6:FaTrademark": return [3 /*break*/, 1481];
                        case "fa6:FaTrafficLight": return [3 /*break*/, 1483];
                        case "fa6:FaTrailer": return [3 /*break*/, 1485];
                        case "fa6:FaTrainSubway": return [3 /*break*/, 1487];
                        case "fa6:FaTrainTram": return [3 /*break*/, 1489];
                        case "fa6:FaTrain": return [3 /*break*/, 1491];
                        case "fa6:FaTransgender": return [3 /*break*/, 1493];
                        case "fa6:FaTrashArrowUp": return [3 /*break*/, 1495];
                        case "fa6:FaTrashCanArrowUp": return [3 /*break*/, 1497];
                        case "fa6:FaTrashCan": return [3 /*break*/, 1499];
                        case "fa6:FaTrash": return [3 /*break*/, 1501];
                        case "fa6:FaTreeCity": return [3 /*break*/, 1503];
                        case "fa6:FaTree": return [3 /*break*/, 1505];
                        case "fa6:FaTriangleExclamation": return [3 /*break*/, 1507];
                        case "fa6:FaTrophy": return [3 /*break*/, 1509];
                        case "fa6:FaTrowelBricks": return [3 /*break*/, 1511];
                        case "fa6:FaTrowel": return [3 /*break*/, 1513];
                        case "fa6:FaTruckArrowRight": return [3 /*break*/, 1515];
                        case "fa6:FaTruckDroplet": return [3 /*break*/, 1517];
                        case "fa6:FaTruckFast": return [3 /*break*/, 1519];
                        case "fa6:FaTruckFieldUn": return [3 /*break*/, 1521];
                        case "fa6:FaTruckField": return [3 /*break*/, 1523];
                        case "fa6:FaTruckFront": return [3 /*break*/, 1525];
                        case "fa6:FaTruckMedical": return [3 /*break*/, 1527];
                        case "fa6:FaTruckMonster": return [3 /*break*/, 1529];
                        case "fa6:FaTruckMoving": return [3 /*break*/, 1531];
                        case "fa6:FaTruckPickup": return [3 /*break*/, 1533];
                        case "fa6:FaTruckPlane": return [3 /*break*/, 1535];
                        case "fa6:FaTruckRampBox": return [3 /*break*/, 1537];
                        case "fa6:FaTruck": return [3 /*break*/, 1539];
                        case "fa6:FaTty": return [3 /*break*/, 1541];
                        case "fa6:FaTurkishLiraSign": return [3 /*break*/, 1543];
                        case "fa6:FaTurnDown": return [3 /*break*/, 1545];
                        case "fa6:FaTurnUp": return [3 /*break*/, 1547];
                        case "fa6:FaTv": return [3 /*break*/, 1549];
                        case "fa6:FaU": return [3 /*break*/, 1551];
                        case "fa6:FaUmbrellaBeach": return [3 /*break*/, 1553];
                        case "fa6:FaUmbrella": return [3 /*break*/, 1555];
                        case "fa6:FaUnderline": return [3 /*break*/, 1557];
                        case "fa6:FaUniversalAccess": return [3 /*break*/, 1559];
                        case "fa6:FaUnlockKeyhole": return [3 /*break*/, 1561];
                        case "fa6:FaUnlock": return [3 /*break*/, 1563];
                        case "fa6:FaUpDownLeftRight": return [3 /*break*/, 1565];
                        case "fa6:FaUpDown": return [3 /*break*/, 1567];
                        case "fa6:FaUpLong": return [3 /*break*/, 1569];
                        case "fa6:FaUpRightAndDownLeftFromCenter": return [3 /*break*/, 1571];
                        case "fa6:FaUpRightFromSquare": return [3 /*break*/, 1573];
                        case "fa6:FaUpload": return [3 /*break*/, 1575];
                        case "fa6:FaUserAstronaut": return [3 /*break*/, 1577];
                        case "fa6:FaUserCheck": return [3 /*break*/, 1579];
                        case "fa6:FaUserClock": return [3 /*break*/, 1581];
                        case "fa6:FaUserDoctor": return [3 /*break*/, 1583];
                        case "fa6:FaUserGear": return [3 /*break*/, 1585];
                        case "fa6:FaUserGraduate": return [3 /*break*/, 1587];
                        case "fa6:FaUserGroup": return [3 /*break*/, 1589];
                        case "fa6:FaUserInjured": return [3 /*break*/, 1591];
                        case "fa6:FaUserLargeSlash": return [3 /*break*/, 1593];
                        case "fa6:FaUserLarge": return [3 /*break*/, 1595];
                        case "fa6:FaUserLock": return [3 /*break*/, 1597];
                        case "fa6:FaUserMinus": return [3 /*break*/, 1599];
                        case "fa6:FaUserNinja": return [3 /*break*/, 1601];
                        case "fa6:FaUserNurse": return [3 /*break*/, 1603];
                        case "fa6:FaUserPen": return [3 /*break*/, 1605];
                        case "fa6:FaUserPlus": return [3 /*break*/, 1607];
                        case "fa6:FaUserSecret": return [3 /*break*/, 1609];
                        case "fa6:FaUserShield": return [3 /*break*/, 1611];
                        case "fa6:FaUserSlash": return [3 /*break*/, 1613];
                        case "fa6:FaUserTag": return [3 /*break*/, 1615];
                        case "fa6:FaUserTie": return [3 /*break*/, 1617];
                        case "fa6:FaUserXmark": return [3 /*break*/, 1619];
                        case "fa6:FaUser": return [3 /*break*/, 1621];
                        case "fa6:FaUsersBetweenLines": return [3 /*break*/, 1623];
                        case "fa6:FaUsersGear": return [3 /*break*/, 1625];
                        case "fa6:FaUsersLine": return [3 /*break*/, 1627];
                        case "fa6:FaUsersRays": return [3 /*break*/, 1629];
                        case "fa6:FaUsersRectangle": return [3 /*break*/, 1631];
                        case "fa6:FaUsersSlash": return [3 /*break*/, 1633];
                        case "fa6:FaUsersViewfinder": return [3 /*break*/, 1635];
                        case "fa6:FaUsers": return [3 /*break*/, 1637];
                        case "fa6:FaUtensils": return [3 /*break*/, 1639];
                        case "fa6:FaV": return [3 /*break*/, 1641];
                        case "fa6:FaVanShuttle": return [3 /*break*/, 1643];
                        case "fa6:FaVault": return [3 /*break*/, 1645];
                        case "fa6:FaVectorSquare": return [3 /*break*/, 1647];
                        case "fa6:FaVenusDouble": return [3 /*break*/, 1649];
                        case "fa6:FaVenusMars": return [3 /*break*/, 1651];
                        case "fa6:FaVenus": return [3 /*break*/, 1653];
                        case "fa6:FaVestPatches": return [3 /*break*/, 1655];
                        case "fa6:FaVest": return [3 /*break*/, 1657];
                        case "fa6:FaVialCircleCheck": return [3 /*break*/, 1659];
                        case "fa6:FaVialVirus": return [3 /*break*/, 1661];
                        case "fa6:FaVial": return [3 /*break*/, 1663];
                        case "fa6:FaVials": return [3 /*break*/, 1665];
                        case "fa6:FaVideoSlash": return [3 /*break*/, 1667];
                        case "fa6:FaVideo": return [3 /*break*/, 1669];
                        case "fa6:FaVihara": return [3 /*break*/, 1671];
                        case "fa6:FaVirusCovidSlash": return [3 /*break*/, 1673];
                        case "fa6:FaVirusCovid": return [3 /*break*/, 1675];
                        case "fa6:FaVirusSlash": return [3 /*break*/, 1677];
                        case "fa6:FaVirus": return [3 /*break*/, 1679];
                        case "fa6:FaViruses": return [3 /*break*/, 1681];
                        case "fa6:FaVoicemail": return [3 /*break*/, 1683];
                        case "fa6:FaVolcano": return [3 /*break*/, 1685];
                        case "fa6:FaVolleyball": return [3 /*break*/, 1687];
                        case "fa6:FaVolumeHigh": return [3 /*break*/, 1689];
                        case "fa6:FaVolumeLow": return [3 /*break*/, 1691];
                        case "fa6:FaVolumeOff": return [3 /*break*/, 1693];
                        case "fa6:FaVolumeXmark": return [3 /*break*/, 1695];
                        case "fa6:FaVrCardboard": return [3 /*break*/, 1697];
                        case "fa6:FaW": return [3 /*break*/, 1699];
                        case "fa6:FaWalkieTalkie": return [3 /*break*/, 1701];
                        case "fa6:FaWallet": return [3 /*break*/, 1703];
                        case "fa6:FaWandMagicSparkles": return [3 /*break*/, 1705];
                        case "fa6:FaWandMagic": return [3 /*break*/, 1707];
                        case "fa6:FaWandSparkles": return [3 /*break*/, 1709];
                        case "fa6:FaWarehouse": return [3 /*break*/, 1711];
                        case "fa6:FaWaterLadder": return [3 /*break*/, 1713];
                        case "fa6:FaWater": return [3 /*break*/, 1715];
                        case "fa6:FaWaveSquare": return [3 /*break*/, 1717];
                        case "fa6:FaWeightHanging": return [3 /*break*/, 1719];
                        case "fa6:FaWeightScale": return [3 /*break*/, 1721];
                        case "fa6:FaWheatAwnCircleExclamation": return [3 /*break*/, 1723];
                        case "fa6:FaWheatAwn": return [3 /*break*/, 1725];
                        case "fa6:FaWheelchairMove": return [3 /*break*/, 1727];
                        case "fa6:FaWheelchair": return [3 /*break*/, 1729];
                        case "fa6:FaWhiskeyGlass": return [3 /*break*/, 1731];
                        case "fa6:FaWifi": return [3 /*break*/, 1733];
                        case "fa6:FaWind": return [3 /*break*/, 1735];
                        case "fa6:FaWindowMaximize": return [3 /*break*/, 1737];
                        case "fa6:FaWindowMinimize": return [3 /*break*/, 1739];
                        case "fa6:FaWindowRestore": return [3 /*break*/, 1741];
                        case "fa6:FaWineBottle": return [3 /*break*/, 1743];
                        case "fa6:FaWineGlassEmpty": return [3 /*break*/, 1745];
                        case "fa6:FaWineGlass": return [3 /*break*/, 1747];
                        case "fa6:FaWonSign": return [3 /*break*/, 1749];
                        case "fa6:FaWorm": return [3 /*break*/, 1751];
                        case "fa6:FaWrench": return [3 /*break*/, 1753];
                        case "fa6:FaXRay": return [3 /*break*/, 1755];
                        case "fa6:FaX": return [3 /*break*/, 1757];
                        case "fa6:FaXmark": return [3 /*break*/, 1759];
                        case "fa6:FaXmarksLines": return [3 /*break*/, 1761];
                        case "fa6:FaY": return [3 /*break*/, 1763];
                        case "fa6:FaYenSign": return [3 /*break*/, 1765];
                        case "fa6:FaYinYang": return [3 /*break*/, 1767];
                        case "fa6:FaZ": return [3 /*break*/, 1769];
                        case "fa6:FaRegAddressBook": return [3 /*break*/, 1771];
                        case "fa6:FaRegAddressCard": return [3 /*break*/, 1773];
                        case "fa6:FaRegBellSlash": return [3 /*break*/, 1775];
                        case "fa6:FaRegBell": return [3 /*break*/, 1777];
                        case "fa6:FaRegBookmark": return [3 /*break*/, 1779];
                        case "fa6:FaRegBuilding": return [3 /*break*/, 1781];
                        case "fa6:FaRegCalendarCheck": return [3 /*break*/, 1783];
                        case "fa6:FaRegCalendarDays": return [3 /*break*/, 1785];
                        case "fa6:FaRegCalendarMinus": return [3 /*break*/, 1787];
                        case "fa6:FaRegCalendarPlus": return [3 /*break*/, 1789];
                        case "fa6:FaRegCalendarXmark": return [3 /*break*/, 1791];
                        case "fa6:FaRegCalendar": return [3 /*break*/, 1793];
                        case "fa6:FaRegChartBar": return [3 /*break*/, 1795];
                        case "fa6:FaRegChessBishop": return [3 /*break*/, 1797];
                        case "fa6:FaRegChessKing": return [3 /*break*/, 1799];
                        case "fa6:FaRegChessKnight": return [3 /*break*/, 1801];
                        case "fa6:FaRegChessPawn": return [3 /*break*/, 1803];
                        case "fa6:FaRegChessQueen": return [3 /*break*/, 1805];
                        case "fa6:FaRegChessRook": return [3 /*break*/, 1807];
                        case "fa6:FaRegCircleCheck": return [3 /*break*/, 1809];
                        case "fa6:FaRegCircleDot": return [3 /*break*/, 1811];
                        case "fa6:FaRegCircleDown": return [3 /*break*/, 1813];
                        case "fa6:FaRegCircleLeft": return [3 /*break*/, 1815];
                        case "fa6:FaRegCirclePause": return [3 /*break*/, 1817];
                        case "fa6:FaRegCirclePlay": return [3 /*break*/, 1819];
                        case "fa6:FaRegCircleQuestion": return [3 /*break*/, 1821];
                        case "fa6:FaRegCircleRight": return [3 /*break*/, 1823];
                        case "fa6:FaRegCircleStop": return [3 /*break*/, 1825];
                        case "fa6:FaRegCircleUp": return [3 /*break*/, 1827];
                        case "fa6:FaRegCircleUser": return [3 /*break*/, 1829];
                        case "fa6:FaRegCircleXmark": return [3 /*break*/, 1831];
                        case "fa6:FaRegCircle": return [3 /*break*/, 1833];
                        case "fa6:FaRegClipboard": return [3 /*break*/, 1835];
                        case "fa6:FaRegClock": return [3 /*break*/, 1837];
                        case "fa6:FaRegClone": return [3 /*break*/, 1839];
                        case "fa6:FaRegClosedCaptioning": return [3 /*break*/, 1841];
                        case "fa6:FaRegCommentDots": return [3 /*break*/, 1843];
                        case "fa6:FaRegComment": return [3 /*break*/, 1845];
                        case "fa6:FaRegComments": return [3 /*break*/, 1847];
                        case "fa6:FaRegCompass": return [3 /*break*/, 1849];
                        case "fa6:FaRegCopy": return [3 /*break*/, 1851];
                        case "fa6:FaRegCopyright": return [3 /*break*/, 1853];
                        case "fa6:FaRegCreditCard": return [3 /*break*/, 1855];
                        case "fa6:FaRegEnvelopeOpen": return [3 /*break*/, 1857];
                        case "fa6:FaRegEnvelope": return [3 /*break*/, 1859];
                        case "fa6:FaRegEyeSlash": return [3 /*break*/, 1861];
                        case "fa6:FaRegEye": return [3 /*break*/, 1863];
                        case "fa6:FaRegFaceAngry": return [3 /*break*/, 1865];
                        case "fa6:FaRegFaceDizzy": return [3 /*break*/, 1867];
                        case "fa6:FaRegFaceFlushed": return [3 /*break*/, 1869];
                        case "fa6:FaRegFaceFrownOpen": return [3 /*break*/, 1871];
                        case "fa6:FaRegFaceFrown": return [3 /*break*/, 1873];
                        case "fa6:FaRegFaceGrimace": return [3 /*break*/, 1875];
                        case "fa6:FaRegFaceGrinBeamSweat": return [3 /*break*/, 1877];
                        case "fa6:FaRegFaceGrinBeam": return [3 /*break*/, 1879];
                        case "fa6:FaRegFaceGrinHearts": return [3 /*break*/, 1881];
                        case "fa6:FaRegFaceGrinSquintTears": return [3 /*break*/, 1883];
                        case "fa6:FaRegFaceGrinSquint": return [3 /*break*/, 1885];
                        case "fa6:FaRegFaceGrinStars": return [3 /*break*/, 1887];
                        case "fa6:FaRegFaceGrinTears": return [3 /*break*/, 1889];
                        case "fa6:FaRegFaceGrinTongueSquint": return [3 /*break*/, 1891];
                        case "fa6:FaRegFaceGrinTongueWink": return [3 /*break*/, 1893];
                        case "fa6:FaRegFaceGrinTongue": return [3 /*break*/, 1895];
                        case "fa6:FaRegFaceGrinWide": return [3 /*break*/, 1897];
                        case "fa6:FaRegFaceGrinWink": return [3 /*break*/, 1899];
                        case "fa6:FaRegFaceGrin": return [3 /*break*/, 1901];
                        case "fa6:FaRegFaceKissBeam": return [3 /*break*/, 1903];
                        case "fa6:FaRegFaceKissWinkHeart": return [3 /*break*/, 1905];
                        case "fa6:FaRegFaceKiss": return [3 /*break*/, 1907];
                        case "fa6:FaRegFaceLaughBeam": return [3 /*break*/, 1909];
                        case "fa6:FaRegFaceLaughSquint": return [3 /*break*/, 1911];
                        case "fa6:FaRegFaceLaughWink": return [3 /*break*/, 1913];
                        case "fa6:FaRegFaceLaugh": return [3 /*break*/, 1915];
                        case "fa6:FaRegFaceMehBlank": return [3 /*break*/, 1917];
                        case "fa6:FaRegFaceMeh": return [3 /*break*/, 1919];
                        case "fa6:FaRegFaceRollingEyes": return [3 /*break*/, 1921];
                        case "fa6:FaRegFaceSadCry": return [3 /*break*/, 1923];
                        case "fa6:FaRegFaceSadTear": return [3 /*break*/, 1925];
                        case "fa6:FaRegFaceSmileBeam": return [3 /*break*/, 1927];
                        case "fa6:FaRegFaceSmileWink": return [3 /*break*/, 1929];
                        case "fa6:FaRegFaceSmile": return [3 /*break*/, 1931];
                        case "fa6:FaRegFaceSurprise": return [3 /*break*/, 1933];
                        case "fa6:FaRegFaceTired": return [3 /*break*/, 1935];
                        case "fa6:FaRegFileAudio": return [3 /*break*/, 1937];
                        case "fa6:FaRegFileCode": return [3 /*break*/, 1939];
                        case "fa6:FaRegFileExcel": return [3 /*break*/, 1941];
                        case "fa6:FaRegFileImage": return [3 /*break*/, 1943];
                        case "fa6:FaRegFileLines": return [3 /*break*/, 1945];
                        case "fa6:FaRegFilePdf": return [3 /*break*/, 1947];
                        case "fa6:FaRegFilePowerpoint": return [3 /*break*/, 1949];
                        case "fa6:FaRegFileVideo": return [3 /*break*/, 1951];
                        case "fa6:FaRegFileWord": return [3 /*break*/, 1953];
                        case "fa6:FaRegFileZipper": return [3 /*break*/, 1955];
                        case "fa6:FaRegFile": return [3 /*break*/, 1957];
                        case "fa6:FaRegFlag": return [3 /*break*/, 1959];
                        case "fa6:FaRegFloppyDisk": return [3 /*break*/, 1961];
                        case "fa6:FaRegFolderClosed": return [3 /*break*/, 1963];
                        case "fa6:FaRegFolderOpen": return [3 /*break*/, 1965];
                        case "fa6:FaRegFolder": return [3 /*break*/, 1967];
                        case "fa6:FaRegFontAwesome": return [3 /*break*/, 1969];
                        case "fa6:FaRegFutbol": return [3 /*break*/, 1971];
                        case "fa6:FaRegGem": return [3 /*break*/, 1973];
                        case "fa6:FaRegHandBackFist": return [3 /*break*/, 1975];
                        case "fa6:FaRegHandLizard": return [3 /*break*/, 1977];
                        case "fa6:FaRegHandPeace": return [3 /*break*/, 1979];
                        case "fa6:FaRegHandPointDown": return [3 /*break*/, 1981];
                        case "fa6:FaRegHandPointLeft": return [3 /*break*/, 1983];
                        case "fa6:FaRegHandPointRight": return [3 /*break*/, 1985];
                        case "fa6:FaRegHandPointUp": return [3 /*break*/, 1987];
                        case "fa6:FaRegHandPointer": return [3 /*break*/, 1989];
                        case "fa6:FaRegHandScissors": return [3 /*break*/, 1991];
                        case "fa6:FaRegHandSpock": return [3 /*break*/, 1993];
                        case "fa6:FaRegHand": return [3 /*break*/, 1995];
                        case "fa6:FaRegHandshake": return [3 /*break*/, 1997];
                        case "fa6:FaRegHardDrive": return [3 /*break*/, 1999];
                    }
                    return [3 /*break*/, 2001];
                case 1: return [4 /*yield*/, import("react-icons/fa6")];
                case 2:
                    FaFileCode = (_b.sent()).FaFileCode;
                    return [2 /*return*/, FaFileCode];
                case 3: return [4 /*yield*/, import("react-icons/fa6")];
                case 4:
                    FaFileContract = (_b.sent()).FaFileContract;
                    return [2 /*return*/, FaFileContract];
                case 5: return [4 /*yield*/, import("react-icons/fa6")];
                case 6:
                    FaFileCsv = (_b.sent()).FaFileCsv;
                    return [2 /*return*/, FaFileCsv];
                case 7: return [4 /*yield*/, import("react-icons/fa6")];
                case 8:
                    FaFileExcel = (_b.sent()).FaFileExcel;
                    return [2 /*return*/, FaFileExcel];
                case 9: return [4 /*yield*/, import("react-icons/fa6")];
                case 10:
                    FaFileExport = (_b.sent()).FaFileExport;
                    return [2 /*return*/, FaFileExport];
                case 11: return [4 /*yield*/, import("react-icons/fa6")];
                case 12:
                    FaFileImage = (_b.sent()).FaFileImage;
                    return [2 /*return*/, FaFileImage];
                case 13: return [4 /*yield*/, import("react-icons/fa6")];
                case 14:
                    FaFileImport = (_b.sent()).FaFileImport;
                    return [2 /*return*/, FaFileImport];
                case 15: return [4 /*yield*/, import("react-icons/fa6")];
                case 16:
                    FaFileInvoiceDollar = (_b.sent()).FaFileInvoiceDollar;
                    return [2 /*return*/, FaFileInvoiceDollar];
                case 17: return [4 /*yield*/, import("react-icons/fa6")];
                case 18:
                    FaFileInvoice = (_b.sent()).FaFileInvoice;
                    return [2 /*return*/, FaFileInvoice];
                case 19: return [4 /*yield*/, import("react-icons/fa6")];
                case 20:
                    FaFileLines = (_b.sent()).FaFileLines;
                    return [2 /*return*/, FaFileLines];
                case 21: return [4 /*yield*/, import("react-icons/fa6")];
                case 22:
                    FaFileMedical = (_b.sent()).FaFileMedical;
                    return [2 /*return*/, FaFileMedical];
                case 23: return [4 /*yield*/, import("react-icons/fa6")];
                case 24:
                    FaFilePdf = (_b.sent()).FaFilePdf;
                    return [2 /*return*/, FaFilePdf];
                case 25: return [4 /*yield*/, import("react-icons/fa6")];
                case 26:
                    FaFilePen = (_b.sent()).FaFilePen;
                    return [2 /*return*/, FaFilePen];
                case 27: return [4 /*yield*/, import("react-icons/fa6")];
                case 28:
                    FaFilePowerpoint = (_b.sent()).FaFilePowerpoint;
                    return [2 /*return*/, FaFilePowerpoint];
                case 29: return [4 /*yield*/, import("react-icons/fa6")];
                case 30:
                    FaFilePrescription = (_b.sent()).FaFilePrescription;
                    return [2 /*return*/, FaFilePrescription];
                case 31: return [4 /*yield*/, import("react-icons/fa6")];
                case 32:
                    FaFileShield = (_b.sent()).FaFileShield;
                    return [2 /*return*/, FaFileShield];
                case 33: return [4 /*yield*/, import("react-icons/fa6")];
                case 34:
                    FaFileSignature = (_b.sent()).FaFileSignature;
                    return [2 /*return*/, FaFileSignature];
                case 35: return [4 /*yield*/, import("react-icons/fa6")];
                case 36:
                    FaFileVideo = (_b.sent()).FaFileVideo;
                    return [2 /*return*/, FaFileVideo];
                case 37: return [4 /*yield*/, import("react-icons/fa6")];
                case 38:
                    FaFileWaveform = (_b.sent()).FaFileWaveform;
                    return [2 /*return*/, FaFileWaveform];
                case 39: return [4 /*yield*/, import("react-icons/fa6")];
                case 40:
                    FaFileWord = (_b.sent()).FaFileWord;
                    return [2 /*return*/, FaFileWord];
                case 41: return [4 /*yield*/, import("react-icons/fa6")];
                case 42:
                    FaFileZipper = (_b.sent()).FaFileZipper;
                    return [2 /*return*/, FaFileZipper];
                case 43: return [4 /*yield*/, import("react-icons/fa6")];
                case 44:
                    FaFile = (_b.sent()).FaFile;
                    return [2 /*return*/, FaFile];
                case 45: return [4 /*yield*/, import("react-icons/fa6")];
                case 46:
                    FaFillDrip = (_b.sent()).FaFillDrip;
                    return [2 /*return*/, FaFillDrip];
                case 47: return [4 /*yield*/, import("react-icons/fa6")];
                case 48:
                    FaFill = (_b.sent()).FaFill;
                    return [2 /*return*/, FaFill];
                case 49: return [4 /*yield*/, import("react-icons/fa6")];
                case 50:
                    FaFilm = (_b.sent()).FaFilm;
                    return [2 /*return*/, FaFilm];
                case 51: return [4 /*yield*/, import("react-icons/fa6")];
                case 52:
                    FaFilterCircleDollar = (_b.sent()).FaFilterCircleDollar;
                    return [2 /*return*/, FaFilterCircleDollar];
                case 53: return [4 /*yield*/, import("react-icons/fa6")];
                case 54:
                    FaFilterCircleXmark = (_b.sent()).FaFilterCircleXmark;
                    return [2 /*return*/, FaFilterCircleXmark];
                case 55: return [4 /*yield*/, import("react-icons/fa6")];
                case 56:
                    FaFilter = (_b.sent()).FaFilter;
                    return [2 /*return*/, FaFilter];
                case 57: return [4 /*yield*/, import("react-icons/fa6")];
                case 58:
                    FaFingerprint = (_b.sent()).FaFingerprint;
                    return [2 /*return*/, FaFingerprint];
                case 59: return [4 /*yield*/, import("react-icons/fa6")];
                case 60:
                    FaFireBurner = (_b.sent()).FaFireBurner;
                    return [2 /*return*/, FaFireBurner];
                case 61: return [4 /*yield*/, import("react-icons/fa6")];
                case 62:
                    FaFireExtinguisher = (_b.sent()).FaFireExtinguisher;
                    return [2 /*return*/, FaFireExtinguisher];
                case 63: return [4 /*yield*/, import("react-icons/fa6")];
                case 64:
                    FaFireFlameCurved = (_b.sent()).FaFireFlameCurved;
                    return [2 /*return*/, FaFireFlameCurved];
                case 65: return [4 /*yield*/, import("react-icons/fa6")];
                case 66:
                    FaFireFlameSimple = (_b.sent()).FaFireFlameSimple;
                    return [2 /*return*/, FaFireFlameSimple];
                case 67: return [4 /*yield*/, import("react-icons/fa6")];
                case 68:
                    FaFire = (_b.sent()).FaFire;
                    return [2 /*return*/, FaFire];
                case 69: return [4 /*yield*/, import("react-icons/fa6")];
                case 70:
                    FaFishFins = (_b.sent()).FaFishFins;
                    return [2 /*return*/, FaFishFins];
                case 71: return [4 /*yield*/, import("react-icons/fa6")];
                case 72:
                    FaFish = (_b.sent()).FaFish;
                    return [2 /*return*/, FaFish];
                case 73: return [4 /*yield*/, import("react-icons/fa6")];
                case 74:
                    FaFlagCheckered = (_b.sent()).FaFlagCheckered;
                    return [2 /*return*/, FaFlagCheckered];
                case 75: return [4 /*yield*/, import("react-icons/fa6")];
                case 76:
                    FaFlagUsa = (_b.sent()).FaFlagUsa;
                    return [2 /*return*/, FaFlagUsa];
                case 77: return [4 /*yield*/, import("react-icons/fa6")];
                case 78:
                    FaFlag = (_b.sent()).FaFlag;
                    return [2 /*return*/, FaFlag];
                case 79: return [4 /*yield*/, import("react-icons/fa6")];
                case 80:
                    FaFlaskVial = (_b.sent()).FaFlaskVial;
                    return [2 /*return*/, FaFlaskVial];
                case 81: return [4 /*yield*/, import("react-icons/fa6")];
                case 82:
                    FaFlask = (_b.sent()).FaFlask;
                    return [2 /*return*/, FaFlask];
                case 83: return [4 /*yield*/, import("react-icons/fa6")];
                case 84:
                    FaFloppyDisk = (_b.sent()).FaFloppyDisk;
                    return [2 /*return*/, FaFloppyDisk];
                case 85: return [4 /*yield*/, import("react-icons/fa6")];
                case 86:
                    FaFlorinSign = (_b.sent()).FaFlorinSign;
                    return [2 /*return*/, FaFlorinSign];
                case 87: return [4 /*yield*/, import("react-icons/fa6")];
                case 88:
                    FaFolderClosed = (_b.sent()).FaFolderClosed;
                    return [2 /*return*/, FaFolderClosed];
                case 89: return [4 /*yield*/, import("react-icons/fa6")];
                case 90:
                    FaFolderMinus = (_b.sent()).FaFolderMinus;
                    return [2 /*return*/, FaFolderMinus];
                case 91: return [4 /*yield*/, import("react-icons/fa6")];
                case 92:
                    FaFolderOpen = (_b.sent()).FaFolderOpen;
                    return [2 /*return*/, FaFolderOpen];
                case 93: return [4 /*yield*/, import("react-icons/fa6")];
                case 94:
                    FaFolderPlus = (_b.sent()).FaFolderPlus;
                    return [2 /*return*/, FaFolderPlus];
                case 95: return [4 /*yield*/, import("react-icons/fa6")];
                case 96:
                    FaFolderTree = (_b.sent()).FaFolderTree;
                    return [2 /*return*/, FaFolderTree];
                case 97: return [4 /*yield*/, import("react-icons/fa6")];
                case 98:
                    FaFolder = (_b.sent()).FaFolder;
                    return [2 /*return*/, FaFolder];
                case 99: return [4 /*yield*/, import("react-icons/fa6")];
                case 100:
                    FaFont = (_b.sent()).FaFont;
                    return [2 /*return*/, FaFont];
                case 101: return [4 /*yield*/, import("react-icons/fa6")];
                case 102:
                    FaFootball = (_b.sent()).FaFootball;
                    return [2 /*return*/, FaFootball];
                case 103: return [4 /*yield*/, import("react-icons/fa6")];
                case 104:
                    FaForwardFast = (_b.sent()).FaForwardFast;
                    return [2 /*return*/, FaForwardFast];
                case 105: return [4 /*yield*/, import("react-icons/fa6")];
                case 106:
                    FaForwardStep = (_b.sent()).FaForwardStep;
                    return [2 /*return*/, FaForwardStep];
                case 107: return [4 /*yield*/, import("react-icons/fa6")];
                case 108:
                    FaForward = (_b.sent()).FaForward;
                    return [2 /*return*/, FaForward];
                case 109: return [4 /*yield*/, import("react-icons/fa6")];
                case 110:
                    FaFrancSign = (_b.sent()).FaFrancSign;
                    return [2 /*return*/, FaFrancSign];
                case 111: return [4 /*yield*/, import("react-icons/fa6")];
                case 112:
                    FaFrog = (_b.sent()).FaFrog;
                    return [2 /*return*/, FaFrog];
                case 113: return [4 /*yield*/, import("react-icons/fa6")];
                case 114:
                    FaFutbol = (_b.sent()).FaFutbol;
                    return [2 /*return*/, FaFutbol];
                case 115: return [4 /*yield*/, import("react-icons/fa6")];
                case 116:
                    FaG = (_b.sent()).FaG;
                    return [2 /*return*/, FaG];
                case 117: return [4 /*yield*/, import("react-icons/fa6")];
                case 118:
                    FaGamepad = (_b.sent()).FaGamepad;
                    return [2 /*return*/, FaGamepad];
                case 119: return [4 /*yield*/, import("react-icons/fa6")];
                case 120:
                    FaGasPump = (_b.sent()).FaGasPump;
                    return [2 /*return*/, FaGasPump];
                case 121: return [4 /*yield*/, import("react-icons/fa6")];
                case 122:
                    FaGaugeHigh = (_b.sent()).FaGaugeHigh;
                    return [2 /*return*/, FaGaugeHigh];
                case 123: return [4 /*yield*/, import("react-icons/fa6")];
                case 124:
                    FaGaugeSimpleHigh = (_b.sent()).FaGaugeSimpleHigh;
                    return [2 /*return*/, FaGaugeSimpleHigh];
                case 125: return [4 /*yield*/, import("react-icons/fa6")];
                case 126:
                    FaGaugeSimple = (_b.sent()).FaGaugeSimple;
                    return [2 /*return*/, FaGaugeSimple];
                case 127: return [4 /*yield*/, import("react-icons/fa6")];
                case 128:
                    FaGauge = (_b.sent()).FaGauge;
                    return [2 /*return*/, FaGauge];
                case 129: return [4 /*yield*/, import("react-icons/fa6")];
                case 130:
                    FaGavel = (_b.sent()).FaGavel;
                    return [2 /*return*/, FaGavel];
                case 131: return [4 /*yield*/, import("react-icons/fa6")];
                case 132:
                    FaGear = (_b.sent()).FaGear;
                    return [2 /*return*/, FaGear];
                case 133: return [4 /*yield*/, import("react-icons/fa6")];
                case 134:
                    FaGears = (_b.sent()).FaGears;
                    return [2 /*return*/, FaGears];
                case 135: return [4 /*yield*/, import("react-icons/fa6")];
                case 136:
                    FaGem = (_b.sent()).FaGem;
                    return [2 /*return*/, FaGem];
                case 137: return [4 /*yield*/, import("react-icons/fa6")];
                case 138:
                    FaGenderless = (_b.sent()).FaGenderless;
                    return [2 /*return*/, FaGenderless];
                case 139: return [4 /*yield*/, import("react-icons/fa6")];
                case 140:
                    FaGhost = (_b.sent()).FaGhost;
                    return [2 /*return*/, FaGhost];
                case 141: return [4 /*yield*/, import("react-icons/fa6")];
                case 142:
                    FaGift = (_b.sent()).FaGift;
                    return [2 /*return*/, FaGift];
                case 143: return [4 /*yield*/, import("react-icons/fa6")];
                case 144:
                    FaGifts = (_b.sent()).FaGifts;
                    return [2 /*return*/, FaGifts];
                case 145: return [4 /*yield*/, import("react-icons/fa6")];
                case 146:
                    FaGlassWaterDroplet = (_b.sent()).FaGlassWaterDroplet;
                    return [2 /*return*/, FaGlassWaterDroplet];
                case 147: return [4 /*yield*/, import("react-icons/fa6")];
                case 148:
                    FaGlassWater = (_b.sent()).FaGlassWater;
                    return [2 /*return*/, FaGlassWater];
                case 149: return [4 /*yield*/, import("react-icons/fa6")];
                case 150:
                    FaGlasses = (_b.sent()).FaGlasses;
                    return [2 /*return*/, FaGlasses];
                case 151: return [4 /*yield*/, import("react-icons/fa6")];
                case 152:
                    FaGlobe = (_b.sent()).FaGlobe;
                    return [2 /*return*/, FaGlobe];
                case 153: return [4 /*yield*/, import("react-icons/fa6")];
                case 154:
                    FaGolfBallTee = (_b.sent()).FaGolfBallTee;
                    return [2 /*return*/, FaGolfBallTee];
                case 155: return [4 /*yield*/, import("react-icons/fa6")];
                case 156:
                    FaGopuram = (_b.sent()).FaGopuram;
                    return [2 /*return*/, FaGopuram];
                case 157: return [4 /*yield*/, import("react-icons/fa6")];
                case 158:
                    FaGraduationCap = (_b.sent()).FaGraduationCap;
                    return [2 /*return*/, FaGraduationCap];
                case 159: return [4 /*yield*/, import("react-icons/fa6")];
                case 160:
                    FaGreaterThanEqual = (_b.sent()).FaGreaterThanEqual;
                    return [2 /*return*/, FaGreaterThanEqual];
                case 161: return [4 /*yield*/, import("react-icons/fa6")];
                case 162:
                    FaGreaterThan = (_b.sent()).FaGreaterThan;
                    return [2 /*return*/, FaGreaterThan];
                case 163: return [4 /*yield*/, import("react-icons/fa6")];
                case 164:
                    FaGripLinesVertical = (_b.sent()).FaGripLinesVertical;
                    return [2 /*return*/, FaGripLinesVertical];
                case 165: return [4 /*yield*/, import("react-icons/fa6")];
                case 166:
                    FaGripLines = (_b.sent()).FaGripLines;
                    return [2 /*return*/, FaGripLines];
                case 167: return [4 /*yield*/, import("react-icons/fa6")];
                case 168:
                    FaGripVertical = (_b.sent()).FaGripVertical;
                    return [2 /*return*/, FaGripVertical];
                case 169: return [4 /*yield*/, import("react-icons/fa6")];
                case 170:
                    FaGrip = (_b.sent()).FaGrip;
                    return [2 /*return*/, FaGrip];
                case 171: return [4 /*yield*/, import("react-icons/fa6")];
                case 172:
                    FaGroupArrowsRotate = (_b.sent()).FaGroupArrowsRotate;
                    return [2 /*return*/, FaGroupArrowsRotate];
                case 173: return [4 /*yield*/, import("react-icons/fa6")];
                case 174:
                    FaGuaraniSign = (_b.sent()).FaGuaraniSign;
                    return [2 /*return*/, FaGuaraniSign];
                case 175: return [4 /*yield*/, import("react-icons/fa6")];
                case 176:
                    FaGuitar = (_b.sent()).FaGuitar;
                    return [2 /*return*/, FaGuitar];
                case 177: return [4 /*yield*/, import("react-icons/fa6")];
                case 178:
                    FaGun = (_b.sent()).FaGun;
                    return [2 /*return*/, FaGun];
                case 179: return [4 /*yield*/, import("react-icons/fa6")];
                case 180:
                    FaH = (_b.sent()).FaH;
                    return [2 /*return*/, FaH];
                case 181: return [4 /*yield*/, import("react-icons/fa6")];
                case 182:
                    FaHammer = (_b.sent()).FaHammer;
                    return [2 /*return*/, FaHammer];
                case 183: return [4 /*yield*/, import("react-icons/fa6")];
                case 184:
                    FaHamsa = (_b.sent()).FaHamsa;
                    return [2 /*return*/, FaHamsa];
                case 185: return [4 /*yield*/, import("react-icons/fa6")];
                case 186:
                    FaHandBackFist = (_b.sent()).FaHandBackFist;
                    return [2 /*return*/, FaHandBackFist];
                case 187: return [4 /*yield*/, import("react-icons/fa6")];
                case 188:
                    FaHandDots = (_b.sent()).FaHandDots;
                    return [2 /*return*/, FaHandDots];
                case 189: return [4 /*yield*/, import("react-icons/fa6")];
                case 190:
                    FaHandFist = (_b.sent()).FaHandFist;
                    return [2 /*return*/, FaHandFist];
                case 191: return [4 /*yield*/, import("react-icons/fa6")];
                case 192:
                    FaHandHoldingDollar = (_b.sent()).FaHandHoldingDollar;
                    return [2 /*return*/, FaHandHoldingDollar];
                case 193: return [4 /*yield*/, import("react-icons/fa6")];
                case 194:
                    FaHandHoldingDroplet = (_b.sent()).FaHandHoldingDroplet;
                    return [2 /*return*/, FaHandHoldingDroplet];
                case 195: return [4 /*yield*/, import("react-icons/fa6")];
                case 196:
                    FaHandHoldingHand = (_b.sent()).FaHandHoldingHand;
                    return [2 /*return*/, FaHandHoldingHand];
                case 197: return [4 /*yield*/, import("react-icons/fa6")];
                case 198:
                    FaHandHoldingHeart = (_b.sent()).FaHandHoldingHeart;
                    return [2 /*return*/, FaHandHoldingHeart];
                case 199: return [4 /*yield*/, import("react-icons/fa6")];
                case 200:
                    FaHandHoldingMedical = (_b.sent()).FaHandHoldingMedical;
                    return [2 /*return*/, FaHandHoldingMedical];
                case 201: return [4 /*yield*/, import("react-icons/fa6")];
                case 202:
                    FaHandHolding = (_b.sent()).FaHandHolding;
                    return [2 /*return*/, FaHandHolding];
                case 203: return [4 /*yield*/, import("react-icons/fa6")];
                case 204:
                    FaHandLizard = (_b.sent()).FaHandLizard;
                    return [2 /*return*/, FaHandLizard];
                case 205: return [4 /*yield*/, import("react-icons/fa6")];
                case 206:
                    FaHandMiddleFinger = (_b.sent()).FaHandMiddleFinger;
                    return [2 /*return*/, FaHandMiddleFinger];
                case 207: return [4 /*yield*/, import("react-icons/fa6")];
                case 208:
                    FaHandPeace = (_b.sent()).FaHandPeace;
                    return [2 /*return*/, FaHandPeace];
                case 209: return [4 /*yield*/, import("react-icons/fa6")];
                case 210:
                    FaHandPointDown = (_b.sent()).FaHandPointDown;
                    return [2 /*return*/, FaHandPointDown];
                case 211: return [4 /*yield*/, import("react-icons/fa6")];
                case 212:
                    FaHandPointLeft = (_b.sent()).FaHandPointLeft;
                    return [2 /*return*/, FaHandPointLeft];
                case 213: return [4 /*yield*/, import("react-icons/fa6")];
                case 214:
                    FaHandPointRight = (_b.sent()).FaHandPointRight;
                    return [2 /*return*/, FaHandPointRight];
                case 215: return [4 /*yield*/, import("react-icons/fa6")];
                case 216:
                    FaHandPointUp = (_b.sent()).FaHandPointUp;
                    return [2 /*return*/, FaHandPointUp];
                case 217: return [4 /*yield*/, import("react-icons/fa6")];
                case 218:
                    FaHandPointer = (_b.sent()).FaHandPointer;
                    return [2 /*return*/, FaHandPointer];
                case 219: return [4 /*yield*/, import("react-icons/fa6")];
                case 220:
                    FaHandScissors = (_b.sent()).FaHandScissors;
                    return [2 /*return*/, FaHandScissors];
                case 221: return [4 /*yield*/, import("react-icons/fa6")];
                case 222:
                    FaHandSparkles = (_b.sent()).FaHandSparkles;
                    return [2 /*return*/, FaHandSparkles];
                case 223: return [4 /*yield*/, import("react-icons/fa6")];
                case 224:
                    FaHandSpock = (_b.sent()).FaHandSpock;
                    return [2 /*return*/, FaHandSpock];
                case 225: return [4 /*yield*/, import("react-icons/fa6")];
                case 226:
                    FaHand = (_b.sent()).FaHand;
                    return [2 /*return*/, FaHand];
                case 227: return [4 /*yield*/, import("react-icons/fa6")];
                case 228:
                    FaHandcuffs = (_b.sent()).FaHandcuffs;
                    return [2 /*return*/, FaHandcuffs];
                case 229: return [4 /*yield*/, import("react-icons/fa6")];
                case 230:
                    FaHandsAslInterpreting = (_b.sent()).FaHandsAslInterpreting;
                    return [2 /*return*/, FaHandsAslInterpreting];
                case 231: return [4 /*yield*/, import("react-icons/fa6")];
                case 232:
                    FaHandsBound = (_b.sent()).FaHandsBound;
                    return [2 /*return*/, FaHandsBound];
                case 233: return [4 /*yield*/, import("react-icons/fa6")];
                case 234:
                    FaHandsBubbles = (_b.sent()).FaHandsBubbles;
                    return [2 /*return*/, FaHandsBubbles];
                case 235: return [4 /*yield*/, import("react-icons/fa6")];
                case 236:
                    FaHandsClapping = (_b.sent()).FaHandsClapping;
                    return [2 /*return*/, FaHandsClapping];
                case 237: return [4 /*yield*/, import("react-icons/fa6")];
                case 238:
                    FaHandsHoldingChild = (_b.sent()).FaHandsHoldingChild;
                    return [2 /*return*/, FaHandsHoldingChild];
                case 239: return [4 /*yield*/, import("react-icons/fa6")];
                case 240:
                    FaHandsHoldingCircle = (_b.sent()).FaHandsHoldingCircle;
                    return [2 /*return*/, FaHandsHoldingCircle];
                case 241: return [4 /*yield*/, import("react-icons/fa6")];
                case 242:
                    FaHandsHolding = (_b.sent()).FaHandsHolding;
                    return [2 /*return*/, FaHandsHolding];
                case 243: return [4 /*yield*/, import("react-icons/fa6")];
                case 244:
                    FaHandsPraying = (_b.sent()).FaHandsPraying;
                    return [2 /*return*/, FaHandsPraying];
                case 245: return [4 /*yield*/, import("react-icons/fa6")];
                case 246:
                    FaHands = (_b.sent()).FaHands;
                    return [2 /*return*/, FaHands];
                case 247: return [4 /*yield*/, import("react-icons/fa6")];
                case 248:
                    FaHandshakeAngle = (_b.sent()).FaHandshakeAngle;
                    return [2 /*return*/, FaHandshakeAngle];
                case 249: return [4 /*yield*/, import("react-icons/fa6")];
                case 250:
                    FaHandshakeSimpleSlash = (_b.sent()).FaHandshakeSimpleSlash;
                    return [2 /*return*/, FaHandshakeSimpleSlash];
                case 251: return [4 /*yield*/, import("react-icons/fa6")];
                case 252:
                    FaHandshakeSimple = (_b.sent()).FaHandshakeSimple;
                    return [2 /*return*/, FaHandshakeSimple];
                case 253: return [4 /*yield*/, import("react-icons/fa6")];
                case 254:
                    FaHandshakeSlash = (_b.sent()).FaHandshakeSlash;
                    return [2 /*return*/, FaHandshakeSlash];
                case 255: return [4 /*yield*/, import("react-icons/fa6")];
                case 256:
                    FaHandshake = (_b.sent()).FaHandshake;
                    return [2 /*return*/, FaHandshake];
                case 257: return [4 /*yield*/, import("react-icons/fa6")];
                case 258:
                    FaHanukiah = (_b.sent()).FaHanukiah;
                    return [2 /*return*/, FaHanukiah];
                case 259: return [4 /*yield*/, import("react-icons/fa6")];
                case 260:
                    FaHardDrive = (_b.sent()).FaHardDrive;
                    return [2 /*return*/, FaHardDrive];
                case 261: return [4 /*yield*/, import("react-icons/fa6")];
                case 262:
                    FaHashtag = (_b.sent()).FaHashtag;
                    return [2 /*return*/, FaHashtag];
                case 263: return [4 /*yield*/, import("react-icons/fa6")];
                case 264:
                    FaHatCowboySide = (_b.sent()).FaHatCowboySide;
                    return [2 /*return*/, FaHatCowboySide];
                case 265: return [4 /*yield*/, import("react-icons/fa6")];
                case 266:
                    FaHatCowboy = (_b.sent()).FaHatCowboy;
                    return [2 /*return*/, FaHatCowboy];
                case 267: return [4 /*yield*/, import("react-icons/fa6")];
                case 268:
                    FaHatWizard = (_b.sent()).FaHatWizard;
                    return [2 /*return*/, FaHatWizard];
                case 269: return [4 /*yield*/, import("react-icons/fa6")];
                case 270:
                    FaHeadSideCoughSlash = (_b.sent()).FaHeadSideCoughSlash;
                    return [2 /*return*/, FaHeadSideCoughSlash];
                case 271: return [4 /*yield*/, import("react-icons/fa6")];
                case 272:
                    FaHeadSideCough = (_b.sent()).FaHeadSideCough;
                    return [2 /*return*/, FaHeadSideCough];
                case 273: return [4 /*yield*/, import("react-icons/fa6")];
                case 274:
                    FaHeadSideMask = (_b.sent()).FaHeadSideMask;
                    return [2 /*return*/, FaHeadSideMask];
                case 275: return [4 /*yield*/, import("react-icons/fa6")];
                case 276:
                    FaHeadSideVirus = (_b.sent()).FaHeadSideVirus;
                    return [2 /*return*/, FaHeadSideVirus];
                case 277: return [4 /*yield*/, import("react-icons/fa6")];
                case 278:
                    FaHeading = (_b.sent()).FaHeading;
                    return [2 /*return*/, FaHeading];
                case 279: return [4 /*yield*/, import("react-icons/fa6")];
                case 280:
                    FaHeadphonesSimple = (_b.sent()).FaHeadphonesSimple;
                    return [2 /*return*/, FaHeadphonesSimple];
                case 281: return [4 /*yield*/, import("react-icons/fa6")];
                case 282:
                    FaHeadphones = (_b.sent()).FaHeadphones;
                    return [2 /*return*/, FaHeadphones];
                case 283: return [4 /*yield*/, import("react-icons/fa6")];
                case 284:
                    FaHeadset = (_b.sent()).FaHeadset;
                    return [2 /*return*/, FaHeadset];
                case 285: return [4 /*yield*/, import("react-icons/fa6")];
                case 286:
                    FaHeartCircleBolt = (_b.sent()).FaHeartCircleBolt;
                    return [2 /*return*/, FaHeartCircleBolt];
                case 287: return [4 /*yield*/, import("react-icons/fa6")];
                case 288:
                    FaHeartCircleCheck = (_b.sent()).FaHeartCircleCheck;
                    return [2 /*return*/, FaHeartCircleCheck];
                case 289: return [4 /*yield*/, import("react-icons/fa6")];
                case 290:
                    FaHeartCircleExclamation = (_b.sent()).FaHeartCircleExclamation;
                    return [2 /*return*/, FaHeartCircleExclamation];
                case 291: return [4 /*yield*/, import("react-icons/fa6")];
                case 292:
                    FaHeartCircleMinus = (_b.sent()).FaHeartCircleMinus;
                    return [2 /*return*/, FaHeartCircleMinus];
                case 293: return [4 /*yield*/, import("react-icons/fa6")];
                case 294:
                    FaHeartCirclePlus = (_b.sent()).FaHeartCirclePlus;
                    return [2 /*return*/, FaHeartCirclePlus];
                case 295: return [4 /*yield*/, import("react-icons/fa6")];
                case 296:
                    FaHeartCircleXmark = (_b.sent()).FaHeartCircleXmark;
                    return [2 /*return*/, FaHeartCircleXmark];
                case 297: return [4 /*yield*/, import("react-icons/fa6")];
                case 298:
                    FaHeartCrack = (_b.sent()).FaHeartCrack;
                    return [2 /*return*/, FaHeartCrack];
                case 299: return [4 /*yield*/, import("react-icons/fa6")];
                case 300:
                    FaHeartPulse = (_b.sent()).FaHeartPulse;
                    return [2 /*return*/, FaHeartPulse];
                case 301: return [4 /*yield*/, import("react-icons/fa6")];
                case 302:
                    FaHeart = (_b.sent()).FaHeart;
                    return [2 /*return*/, FaHeart];
                case 303: return [4 /*yield*/, import("react-icons/fa6")];
                case 304:
                    FaHelicopterSymbol = (_b.sent()).FaHelicopterSymbol;
                    return [2 /*return*/, FaHelicopterSymbol];
                case 305: return [4 /*yield*/, import("react-icons/fa6")];
                case 306:
                    FaHelicopter = (_b.sent()).FaHelicopter;
                    return [2 /*return*/, FaHelicopter];
                case 307: return [4 /*yield*/, import("react-icons/fa6")];
                case 308:
                    FaHelmetSafety = (_b.sent()).FaHelmetSafety;
                    return [2 /*return*/, FaHelmetSafety];
                case 309: return [4 /*yield*/, import("react-icons/fa6")];
                case 310:
                    FaHelmetUn = (_b.sent()).FaHelmetUn;
                    return [2 /*return*/, FaHelmetUn];
                case 311: return [4 /*yield*/, import("react-icons/fa6")];
                case 312:
                    FaHighlighter = (_b.sent()).FaHighlighter;
                    return [2 /*return*/, FaHighlighter];
                case 313: return [4 /*yield*/, import("react-icons/fa6")];
                case 314:
                    FaHillAvalanche = (_b.sent()).FaHillAvalanche;
                    return [2 /*return*/, FaHillAvalanche];
                case 315: return [4 /*yield*/, import("react-icons/fa6")];
                case 316:
                    FaHillRockslide = (_b.sent()).FaHillRockslide;
                    return [2 /*return*/, FaHillRockslide];
                case 317: return [4 /*yield*/, import("react-icons/fa6")];
                case 318:
                    FaHippo = (_b.sent()).FaHippo;
                    return [2 /*return*/, FaHippo];
                case 319: return [4 /*yield*/, import("react-icons/fa6")];
                case 320:
                    FaHockeyPuck = (_b.sent()).FaHockeyPuck;
                    return [2 /*return*/, FaHockeyPuck];
                case 321: return [4 /*yield*/, import("react-icons/fa6")];
                case 322:
                    FaHollyBerry = (_b.sent()).FaHollyBerry;
                    return [2 /*return*/, FaHollyBerry];
                case 323: return [4 /*yield*/, import("react-icons/fa6")];
                case 324:
                    FaHorseHead = (_b.sent()).FaHorseHead;
                    return [2 /*return*/, FaHorseHead];
                case 325: return [4 /*yield*/, import("react-icons/fa6")];
                case 326:
                    FaHorse = (_b.sent()).FaHorse;
                    return [2 /*return*/, FaHorse];
                case 327: return [4 /*yield*/, import("react-icons/fa6")];
                case 328:
                    FaHospitalUser = (_b.sent()).FaHospitalUser;
                    return [2 /*return*/, FaHospitalUser];
                case 329: return [4 /*yield*/, import("react-icons/fa6")];
                case 330:
                    FaHospital = (_b.sent()).FaHospital;
                    return [2 /*return*/, FaHospital];
                case 331: return [4 /*yield*/, import("react-icons/fa6")];
                case 332:
                    FaHotTubPerson = (_b.sent()).FaHotTubPerson;
                    return [2 /*return*/, FaHotTubPerson];
                case 333: return [4 /*yield*/, import("react-icons/fa6")];
                case 334:
                    FaHotdog = (_b.sent()).FaHotdog;
                    return [2 /*return*/, FaHotdog];
                case 335: return [4 /*yield*/, import("react-icons/fa6")];
                case 336:
                    FaHotel = (_b.sent()).FaHotel;
                    return [2 /*return*/, FaHotel];
                case 337: return [4 /*yield*/, import("react-icons/fa6")];
                case 338:
                    FaHourglassEnd = (_b.sent()).FaHourglassEnd;
                    return [2 /*return*/, FaHourglassEnd];
                case 339: return [4 /*yield*/, import("react-icons/fa6")];
                case 340:
                    FaHourglassHalf = (_b.sent()).FaHourglassHalf;
                    return [2 /*return*/, FaHourglassHalf];
                case 341: return [4 /*yield*/, import("react-icons/fa6")];
                case 342:
                    FaHourglassStart = (_b.sent()).FaHourglassStart;
                    return [2 /*return*/, FaHourglassStart];
                case 343: return [4 /*yield*/, import("react-icons/fa6")];
                case 344:
                    FaHourglass = (_b.sent()).FaHourglass;
                    return [2 /*return*/, FaHourglass];
                case 345: return [4 /*yield*/, import("react-icons/fa6")];
                case 346:
                    FaHouseChimneyCrack = (_b.sent()).FaHouseChimneyCrack;
                    return [2 /*return*/, FaHouseChimneyCrack];
                case 347: return [4 /*yield*/, import("react-icons/fa6")];
                case 348:
                    FaHouseChimneyMedical = (_b.sent()).FaHouseChimneyMedical;
                    return [2 /*return*/, FaHouseChimneyMedical];
                case 349: return [4 /*yield*/, import("react-icons/fa6")];
                case 350:
                    FaHouseChimneyUser = (_b.sent()).FaHouseChimneyUser;
                    return [2 /*return*/, FaHouseChimneyUser];
                case 351: return [4 /*yield*/, import("react-icons/fa6")];
                case 352:
                    FaHouseChimneyWindow = (_b.sent()).FaHouseChimneyWindow;
                    return [2 /*return*/, FaHouseChimneyWindow];
                case 353: return [4 /*yield*/, import("react-icons/fa6")];
                case 354:
                    FaHouseChimney = (_b.sent()).FaHouseChimney;
                    return [2 /*return*/, FaHouseChimney];
                case 355: return [4 /*yield*/, import("react-icons/fa6")];
                case 356:
                    FaHouseCircleCheck = (_b.sent()).FaHouseCircleCheck;
                    return [2 /*return*/, FaHouseCircleCheck];
                case 357: return [4 /*yield*/, import("react-icons/fa6")];
                case 358:
                    FaHouseCircleExclamation = (_b.sent()).FaHouseCircleExclamation;
                    return [2 /*return*/, FaHouseCircleExclamation];
                case 359: return [4 /*yield*/, import("react-icons/fa6")];
                case 360:
                    FaHouseCircleXmark = (_b.sent()).FaHouseCircleXmark;
                    return [2 /*return*/, FaHouseCircleXmark];
                case 361: return [4 /*yield*/, import("react-icons/fa6")];
                case 362:
                    FaHouseCrack = (_b.sent()).FaHouseCrack;
                    return [2 /*return*/, FaHouseCrack];
                case 363: return [4 /*yield*/, import("react-icons/fa6")];
                case 364:
                    FaHouseFire = (_b.sent()).FaHouseFire;
                    return [2 /*return*/, FaHouseFire];
                case 365: return [4 /*yield*/, import("react-icons/fa6")];
                case 366:
                    FaHouseFlag = (_b.sent()).FaHouseFlag;
                    return [2 /*return*/, FaHouseFlag];
                case 367: return [4 /*yield*/, import("react-icons/fa6")];
                case 368:
                    FaHouseFloodWaterCircleArrowRight = (_b.sent()).FaHouseFloodWaterCircleArrowRight;
                    return [2 /*return*/, FaHouseFloodWaterCircleArrowRight];
                case 369: return [4 /*yield*/, import("react-icons/fa6")];
                case 370:
                    FaHouseFloodWater = (_b.sent()).FaHouseFloodWater;
                    return [2 /*return*/, FaHouseFloodWater];
                case 371: return [4 /*yield*/, import("react-icons/fa6")];
                case 372:
                    FaHouseLaptop = (_b.sent()).FaHouseLaptop;
                    return [2 /*return*/, FaHouseLaptop];
                case 373: return [4 /*yield*/, import("react-icons/fa6")];
                case 374:
                    FaHouseLock = (_b.sent()).FaHouseLock;
                    return [2 /*return*/, FaHouseLock];
                case 375: return [4 /*yield*/, import("react-icons/fa6")];
                case 376:
                    FaHouseMedicalCircleCheck = (_b.sent()).FaHouseMedicalCircleCheck;
                    return [2 /*return*/, FaHouseMedicalCircleCheck];
                case 377: return [4 /*yield*/, import("react-icons/fa6")];
                case 378:
                    FaHouseMedicalCircleExclamation = (_b.sent()).FaHouseMedicalCircleExclamation;
                    return [2 /*return*/, FaHouseMedicalCircleExclamation];
                case 379: return [4 /*yield*/, import("react-icons/fa6")];
                case 380:
                    FaHouseMedicalCircleXmark = (_b.sent()).FaHouseMedicalCircleXmark;
                    return [2 /*return*/, FaHouseMedicalCircleXmark];
                case 381: return [4 /*yield*/, import("react-icons/fa6")];
                case 382:
                    FaHouseMedicalFlag = (_b.sent()).FaHouseMedicalFlag;
                    return [2 /*return*/, FaHouseMedicalFlag];
                case 383: return [4 /*yield*/, import("react-icons/fa6")];
                case 384:
                    FaHouseMedical = (_b.sent()).FaHouseMedical;
                    return [2 /*return*/, FaHouseMedical];
                case 385: return [4 /*yield*/, import("react-icons/fa6")];
                case 386:
                    FaHouseSignal = (_b.sent()).FaHouseSignal;
                    return [2 /*return*/, FaHouseSignal];
                case 387: return [4 /*yield*/, import("react-icons/fa6")];
                case 388:
                    FaHouseTsunami = (_b.sent()).FaHouseTsunami;
                    return [2 /*return*/, FaHouseTsunami];
                case 389: return [4 /*yield*/, import("react-icons/fa6")];
                case 390:
                    FaHouseUser = (_b.sent()).FaHouseUser;
                    return [2 /*return*/, FaHouseUser];
                case 391: return [4 /*yield*/, import("react-icons/fa6")];
                case 392:
                    FaHouse = (_b.sent()).FaHouse;
                    return [2 /*return*/, FaHouse];
                case 393: return [4 /*yield*/, import("react-icons/fa6")];
                case 394:
                    FaHryvniaSign = (_b.sent()).FaHryvniaSign;
                    return [2 /*return*/, FaHryvniaSign];
                case 395: return [4 /*yield*/, import("react-icons/fa6")];
                case 396:
                    FaHurricane = (_b.sent()).FaHurricane;
                    return [2 /*return*/, FaHurricane];
                case 397: return [4 /*yield*/, import("react-icons/fa6")];
                case 398:
                    FaICursor = (_b.sent()).FaICursor;
                    return [2 /*return*/, FaICursor];
                case 399: return [4 /*yield*/, import("react-icons/fa6")];
                case 400:
                    FaI = (_b.sent()).FaI;
                    return [2 /*return*/, FaI];
                case 401: return [4 /*yield*/, import("react-icons/fa6")];
                case 402:
                    FaIceCream = (_b.sent()).FaIceCream;
                    return [2 /*return*/, FaIceCream];
                case 403: return [4 /*yield*/, import("react-icons/fa6")];
                case 404:
                    FaIcicles = (_b.sent()).FaIcicles;
                    return [2 /*return*/, FaIcicles];
                case 405: return [4 /*yield*/, import("react-icons/fa6")];
                case 406:
                    FaIcons = (_b.sent()).FaIcons;
                    return [2 /*return*/, FaIcons];
                case 407: return [4 /*yield*/, import("react-icons/fa6")];
                case 408:
                    FaIdBadge = (_b.sent()).FaIdBadge;
                    return [2 /*return*/, FaIdBadge];
                case 409: return [4 /*yield*/, import("react-icons/fa6")];
                case 410:
                    FaIdCardClip = (_b.sent()).FaIdCardClip;
                    return [2 /*return*/, FaIdCardClip];
                case 411: return [4 /*yield*/, import("react-icons/fa6")];
                case 412:
                    FaIdCard = (_b.sent()).FaIdCard;
                    return [2 /*return*/, FaIdCard];
                case 413: return [4 /*yield*/, import("react-icons/fa6")];
                case 414:
                    FaIgloo = (_b.sent()).FaIgloo;
                    return [2 /*return*/, FaIgloo];
                case 415: return [4 /*yield*/, import("react-icons/fa6")];
                case 416:
                    FaImagePortrait = (_b.sent()).FaImagePortrait;
                    return [2 /*return*/, FaImagePortrait];
                case 417: return [4 /*yield*/, import("react-icons/fa6")];
                case 418:
                    FaImage = (_b.sent()).FaImage;
                    return [2 /*return*/, FaImage];
                case 419: return [4 /*yield*/, import("react-icons/fa6")];
                case 420:
                    FaImages = (_b.sent()).FaImages;
                    return [2 /*return*/, FaImages];
                case 421: return [4 /*yield*/, import("react-icons/fa6")];
                case 422:
                    FaInbox = (_b.sent()).FaInbox;
                    return [2 /*return*/, FaInbox];
                case 423: return [4 /*yield*/, import("react-icons/fa6")];
                case 424:
                    FaIndent = (_b.sent()).FaIndent;
                    return [2 /*return*/, FaIndent];
                case 425: return [4 /*yield*/, import("react-icons/fa6")];
                case 426:
                    FaIndianRupeeSign = (_b.sent()).FaIndianRupeeSign;
                    return [2 /*return*/, FaIndianRupeeSign];
                case 427: return [4 /*yield*/, import("react-icons/fa6")];
                case 428:
                    FaIndustry = (_b.sent()).FaIndustry;
                    return [2 /*return*/, FaIndustry];
                case 429: return [4 /*yield*/, import("react-icons/fa6")];
                case 430:
                    FaInfinity = (_b.sent()).FaInfinity;
                    return [2 /*return*/, FaInfinity];
                case 431: return [4 /*yield*/, import("react-icons/fa6")];
                case 432:
                    FaInfo = (_b.sent()).FaInfo;
                    return [2 /*return*/, FaInfo];
                case 433: return [4 /*yield*/, import("react-icons/fa6")];
                case 434:
                    FaItalic = (_b.sent()).FaItalic;
                    return [2 /*return*/, FaItalic];
                case 435: return [4 /*yield*/, import("react-icons/fa6")];
                case 436:
                    FaJ = (_b.sent()).FaJ;
                    return [2 /*return*/, FaJ];
                case 437: return [4 /*yield*/, import("react-icons/fa6")];
                case 438:
                    FaJarWheat = (_b.sent()).FaJarWheat;
                    return [2 /*return*/, FaJarWheat];
                case 439: return [4 /*yield*/, import("react-icons/fa6")];
                case 440:
                    FaJar = (_b.sent()).FaJar;
                    return [2 /*return*/, FaJar];
                case 441: return [4 /*yield*/, import("react-icons/fa6")];
                case 442:
                    FaJedi = (_b.sent()).FaJedi;
                    return [2 /*return*/, FaJedi];
                case 443: return [4 /*yield*/, import("react-icons/fa6")];
                case 444:
                    FaJetFighterUp = (_b.sent()).FaJetFighterUp;
                    return [2 /*return*/, FaJetFighterUp];
                case 445: return [4 /*yield*/, import("react-icons/fa6")];
                case 446:
                    FaJetFighter = (_b.sent()).FaJetFighter;
                    return [2 /*return*/, FaJetFighter];
                case 447: return [4 /*yield*/, import("react-icons/fa6")];
                case 448:
                    FaJoint = (_b.sent()).FaJoint;
                    return [2 /*return*/, FaJoint];
                case 449: return [4 /*yield*/, import("react-icons/fa6")];
                case 450:
                    FaJugDetergent = (_b.sent()).FaJugDetergent;
                    return [2 /*return*/, FaJugDetergent];
                case 451: return [4 /*yield*/, import("react-icons/fa6")];
                case 452:
                    FaK = (_b.sent()).FaK;
                    return [2 /*return*/, FaK];
                case 453: return [4 /*yield*/, import("react-icons/fa6")];
                case 454:
                    FaKaaba = (_b.sent()).FaKaaba;
                    return [2 /*return*/, FaKaaba];
                case 455: return [4 /*yield*/, import("react-icons/fa6")];
                case 456:
                    FaKey = (_b.sent()).FaKey;
                    return [2 /*return*/, FaKey];
                case 457: return [4 /*yield*/, import("react-icons/fa6")];
                case 458:
                    FaKeyboard = (_b.sent()).FaKeyboard;
                    return [2 /*return*/, FaKeyboard];
                case 459: return [4 /*yield*/, import("react-icons/fa6")];
                case 460:
                    FaKhanda = (_b.sent()).FaKhanda;
                    return [2 /*return*/, FaKhanda];
                case 461: return [4 /*yield*/, import("react-icons/fa6")];
                case 462:
                    FaKipSign = (_b.sent()).FaKipSign;
                    return [2 /*return*/, FaKipSign];
                case 463: return [4 /*yield*/, import("react-icons/fa6")];
                case 464:
                    FaKitMedical = (_b.sent()).FaKitMedical;
                    return [2 /*return*/, FaKitMedical];
                case 465: return [4 /*yield*/, import("react-icons/fa6")];
                case 466:
                    FaKitchenSet = (_b.sent()).FaKitchenSet;
                    return [2 /*return*/, FaKitchenSet];
                case 467: return [4 /*yield*/, import("react-icons/fa6")];
                case 468:
                    FaKiwiBird = (_b.sent()).FaKiwiBird;
                    return [2 /*return*/, FaKiwiBird];
                case 469: return [4 /*yield*/, import("react-icons/fa6")];
                case 470:
                    FaL = (_b.sent()).FaL;
                    return [2 /*return*/, FaL];
                case 471: return [4 /*yield*/, import("react-icons/fa6")];
                case 472:
                    FaLandMineOn = (_b.sent()).FaLandMineOn;
                    return [2 /*return*/, FaLandMineOn];
                case 473: return [4 /*yield*/, import("react-icons/fa6")];
                case 474:
                    FaLandmarkDome = (_b.sent()).FaLandmarkDome;
                    return [2 /*return*/, FaLandmarkDome];
                case 475: return [4 /*yield*/, import("react-icons/fa6")];
                case 476:
                    FaLandmarkFlag = (_b.sent()).FaLandmarkFlag;
                    return [2 /*return*/, FaLandmarkFlag];
                case 477: return [4 /*yield*/, import("react-icons/fa6")];
                case 478:
                    FaLandmark = (_b.sent()).FaLandmark;
                    return [2 /*return*/, FaLandmark];
                case 479: return [4 /*yield*/, import("react-icons/fa6")];
                case 480:
                    FaLanguage = (_b.sent()).FaLanguage;
                    return [2 /*return*/, FaLanguage];
                case 481: return [4 /*yield*/, import("react-icons/fa6")];
                case 482:
                    FaLaptopCode = (_b.sent()).FaLaptopCode;
                    return [2 /*return*/, FaLaptopCode];
                case 483: return [4 /*yield*/, import("react-icons/fa6")];
                case 484:
                    FaLaptopFile = (_b.sent()).FaLaptopFile;
                    return [2 /*return*/, FaLaptopFile];
                case 485: return [4 /*yield*/, import("react-icons/fa6")];
                case 486:
                    FaLaptopMedical = (_b.sent()).FaLaptopMedical;
                    return [2 /*return*/, FaLaptopMedical];
                case 487: return [4 /*yield*/, import("react-icons/fa6")];
                case 488:
                    FaLaptop = (_b.sent()).FaLaptop;
                    return [2 /*return*/, FaLaptop];
                case 489: return [4 /*yield*/, import("react-icons/fa6")];
                case 490:
                    FaLariSign = (_b.sent()).FaLariSign;
                    return [2 /*return*/, FaLariSign];
                case 491: return [4 /*yield*/, import("react-icons/fa6")];
                case 492:
                    FaLayerGroup = (_b.sent()).FaLayerGroup;
                    return [2 /*return*/, FaLayerGroup];
                case 493: return [4 /*yield*/, import("react-icons/fa6")];
                case 494:
                    FaLeaf = (_b.sent()).FaLeaf;
                    return [2 /*return*/, FaLeaf];
                case 495: return [4 /*yield*/, import("react-icons/fa6")];
                case 496:
                    FaLeftLong = (_b.sent()).FaLeftLong;
                    return [2 /*return*/, FaLeftLong];
                case 497: return [4 /*yield*/, import("react-icons/fa6")];
                case 498:
                    FaLeftRight = (_b.sent()).FaLeftRight;
                    return [2 /*return*/, FaLeftRight];
                case 499: return [4 /*yield*/, import("react-icons/fa6")];
                case 500:
                    FaLemon = (_b.sent()).FaLemon;
                    return [2 /*return*/, FaLemon];
                case 501: return [4 /*yield*/, import("react-icons/fa6")];
                case 502:
                    FaLessThanEqual = (_b.sent()).FaLessThanEqual;
                    return [2 /*return*/, FaLessThanEqual];
                case 503: return [4 /*yield*/, import("react-icons/fa6")];
                case 504:
                    FaLessThan = (_b.sent()).FaLessThan;
                    return [2 /*return*/, FaLessThan];
                case 505: return [4 /*yield*/, import("react-icons/fa6")];
                case 506:
                    FaLifeRing = (_b.sent()).FaLifeRing;
                    return [2 /*return*/, FaLifeRing];
                case 507: return [4 /*yield*/, import("react-icons/fa6")];
                case 508:
                    FaLightbulb = (_b.sent()).FaLightbulb;
                    return [2 /*return*/, FaLightbulb];
                case 509: return [4 /*yield*/, import("react-icons/fa6")];
                case 510:
                    FaLinesLeaning = (_b.sent()).FaLinesLeaning;
                    return [2 /*return*/, FaLinesLeaning];
                case 511: return [4 /*yield*/, import("react-icons/fa6")];
                case 512:
                    FaLinkSlash = (_b.sent()).FaLinkSlash;
                    return [2 /*return*/, FaLinkSlash];
                case 513: return [4 /*yield*/, import("react-icons/fa6")];
                case 514:
                    FaLink = (_b.sent()).FaLink;
                    return [2 /*return*/, FaLink];
                case 515: return [4 /*yield*/, import("react-icons/fa6")];
                case 516:
                    FaLiraSign = (_b.sent()).FaLiraSign;
                    return [2 /*return*/, FaLiraSign];
                case 517: return [4 /*yield*/, import("react-icons/fa6")];
                case 518:
                    FaListCheck = (_b.sent()).FaListCheck;
                    return [2 /*return*/, FaListCheck];
                case 519: return [4 /*yield*/, import("react-icons/fa6")];
                case 520:
                    FaListOl = (_b.sent()).FaListOl;
                    return [2 /*return*/, FaListOl];
                case 521: return [4 /*yield*/, import("react-icons/fa6")];
                case 522:
                    FaListUl = (_b.sent()).FaListUl;
                    return [2 /*return*/, FaListUl];
                case 523: return [4 /*yield*/, import("react-icons/fa6")];
                case 524:
                    FaList = (_b.sent()).FaList;
                    return [2 /*return*/, FaList];
                case 525: return [4 /*yield*/, import("react-icons/fa6")];
                case 526:
                    FaLitecoinSign = (_b.sent()).FaLitecoinSign;
                    return [2 /*return*/, FaLitecoinSign];
                case 527: return [4 /*yield*/, import("react-icons/fa6")];
                case 528:
                    FaLocationArrow = (_b.sent()).FaLocationArrow;
                    return [2 /*return*/, FaLocationArrow];
                case 529: return [4 /*yield*/, import("react-icons/fa6")];
                case 530:
                    FaLocationCrosshairs = (_b.sent()).FaLocationCrosshairs;
                    return [2 /*return*/, FaLocationCrosshairs];
                case 531: return [4 /*yield*/, import("react-icons/fa6")];
                case 532:
                    FaLocationDot = (_b.sent()).FaLocationDot;
                    return [2 /*return*/, FaLocationDot];
                case 533: return [4 /*yield*/, import("react-icons/fa6")];
                case 534:
                    FaLocationPinLock = (_b.sent()).FaLocationPinLock;
                    return [2 /*return*/, FaLocationPinLock];
                case 535: return [4 /*yield*/, import("react-icons/fa6")];
                case 536:
                    FaLocationPin = (_b.sent()).FaLocationPin;
                    return [2 /*return*/, FaLocationPin];
                case 537: return [4 /*yield*/, import("react-icons/fa6")];
                case 538:
                    FaLockOpen = (_b.sent()).FaLockOpen;
                    return [2 /*return*/, FaLockOpen];
                case 539: return [4 /*yield*/, import("react-icons/fa6")];
                case 540:
                    FaLock = (_b.sent()).FaLock;
                    return [2 /*return*/, FaLock];
                case 541: return [4 /*yield*/, import("react-icons/fa6")];
                case 542:
                    FaLocust = (_b.sent()).FaLocust;
                    return [2 /*return*/, FaLocust];
                case 543: return [4 /*yield*/, import("react-icons/fa6")];
                case 544:
                    FaLungsVirus = (_b.sent()).FaLungsVirus;
                    return [2 /*return*/, FaLungsVirus];
                case 545: return [4 /*yield*/, import("react-icons/fa6")];
                case 546:
                    FaLungs = (_b.sent()).FaLungs;
                    return [2 /*return*/, FaLungs];
                case 547: return [4 /*yield*/, import("react-icons/fa6")];
                case 548:
                    FaM = (_b.sent()).FaM;
                    return [2 /*return*/, FaM];
                case 549: return [4 /*yield*/, import("react-icons/fa6")];
                case 550:
                    FaMagnet = (_b.sent()).FaMagnet;
                    return [2 /*return*/, FaMagnet];
                case 551: return [4 /*yield*/, import("react-icons/fa6")];
                case 552:
                    FaMagnifyingGlassArrowRight = (_b.sent()).FaMagnifyingGlassArrowRight;
                    return [2 /*return*/, FaMagnifyingGlassArrowRight];
                case 553: return [4 /*yield*/, import("react-icons/fa6")];
                case 554:
                    FaMagnifyingGlassChart = (_b.sent()).FaMagnifyingGlassChart;
                    return [2 /*return*/, FaMagnifyingGlassChart];
                case 555: return [4 /*yield*/, import("react-icons/fa6")];
                case 556:
                    FaMagnifyingGlassDollar = (_b.sent()).FaMagnifyingGlassDollar;
                    return [2 /*return*/, FaMagnifyingGlassDollar];
                case 557: return [4 /*yield*/, import("react-icons/fa6")];
                case 558:
                    FaMagnifyingGlassLocation = (_b.sent()).FaMagnifyingGlassLocation;
                    return [2 /*return*/, FaMagnifyingGlassLocation];
                case 559: return [4 /*yield*/, import("react-icons/fa6")];
                case 560:
                    FaMagnifyingGlassMinus = (_b.sent()).FaMagnifyingGlassMinus;
                    return [2 /*return*/, FaMagnifyingGlassMinus];
                case 561: return [4 /*yield*/, import("react-icons/fa6")];
                case 562:
                    FaMagnifyingGlassPlus = (_b.sent()).FaMagnifyingGlassPlus;
                    return [2 /*return*/, FaMagnifyingGlassPlus];
                case 563: return [4 /*yield*/, import("react-icons/fa6")];
                case 564:
                    FaMagnifyingGlass = (_b.sent()).FaMagnifyingGlass;
                    return [2 /*return*/, FaMagnifyingGlass];
                case 565: return [4 /*yield*/, import("react-icons/fa6")];
                case 566:
                    FaManatSign = (_b.sent()).FaManatSign;
                    return [2 /*return*/, FaManatSign];
                case 567: return [4 /*yield*/, import("react-icons/fa6")];
                case 568:
                    FaMapLocationDot = (_b.sent()).FaMapLocationDot;
                    return [2 /*return*/, FaMapLocationDot];
                case 569: return [4 /*yield*/, import("react-icons/fa6")];
                case 570:
                    FaMapLocation = (_b.sent()).FaMapLocation;
                    return [2 /*return*/, FaMapLocation];
                case 571: return [4 /*yield*/, import("react-icons/fa6")];
                case 572:
                    FaMapPin = (_b.sent()).FaMapPin;
                    return [2 /*return*/, FaMapPin];
                case 573: return [4 /*yield*/, import("react-icons/fa6")];
                case 574:
                    FaMap = (_b.sent()).FaMap;
                    return [2 /*return*/, FaMap];
                case 575: return [4 /*yield*/, import("react-icons/fa6")];
                case 576:
                    FaMarker = (_b.sent()).FaMarker;
                    return [2 /*return*/, FaMarker];
                case 577: return [4 /*yield*/, import("react-icons/fa6")];
                case 578:
                    FaMarsAndVenusBurst = (_b.sent()).FaMarsAndVenusBurst;
                    return [2 /*return*/, FaMarsAndVenusBurst];
                case 579: return [4 /*yield*/, import("react-icons/fa6")];
                case 580:
                    FaMarsAndVenus = (_b.sent()).FaMarsAndVenus;
                    return [2 /*return*/, FaMarsAndVenus];
                case 581: return [4 /*yield*/, import("react-icons/fa6")];
                case 582:
                    FaMarsDouble = (_b.sent()).FaMarsDouble;
                    return [2 /*return*/, FaMarsDouble];
                case 583: return [4 /*yield*/, import("react-icons/fa6")];
                case 584:
                    FaMarsStrokeRight = (_b.sent()).FaMarsStrokeRight;
                    return [2 /*return*/, FaMarsStrokeRight];
                case 585: return [4 /*yield*/, import("react-icons/fa6")];
                case 586:
                    FaMarsStrokeUp = (_b.sent()).FaMarsStrokeUp;
                    return [2 /*return*/, FaMarsStrokeUp];
                case 587: return [4 /*yield*/, import("react-icons/fa6")];
                case 588:
                    FaMarsStroke = (_b.sent()).FaMarsStroke;
                    return [2 /*return*/, FaMarsStroke];
                case 589: return [4 /*yield*/, import("react-icons/fa6")];
                case 590:
                    FaMars = (_b.sent()).FaMars;
                    return [2 /*return*/, FaMars];
                case 591: return [4 /*yield*/, import("react-icons/fa6")];
                case 592:
                    FaMartiniGlassCitrus = (_b.sent()).FaMartiniGlassCitrus;
                    return [2 /*return*/, FaMartiniGlassCitrus];
                case 593: return [4 /*yield*/, import("react-icons/fa6")];
                case 594:
                    FaMartiniGlassEmpty = (_b.sent()).FaMartiniGlassEmpty;
                    return [2 /*return*/, FaMartiniGlassEmpty];
                case 595: return [4 /*yield*/, import("react-icons/fa6")];
                case 596:
                    FaMartiniGlass = (_b.sent()).FaMartiniGlass;
                    return [2 /*return*/, FaMartiniGlass];
                case 597: return [4 /*yield*/, import("react-icons/fa6")];
                case 598:
                    FaMaskFace = (_b.sent()).FaMaskFace;
                    return [2 /*return*/, FaMaskFace];
                case 599: return [4 /*yield*/, import("react-icons/fa6")];
                case 600:
                    FaMaskVentilator = (_b.sent()).FaMaskVentilator;
                    return [2 /*return*/, FaMaskVentilator];
                case 601: return [4 /*yield*/, import("react-icons/fa6")];
                case 602:
                    FaMask = (_b.sent()).FaMask;
                    return [2 /*return*/, FaMask];
                case 603: return [4 /*yield*/, import("react-icons/fa6")];
                case 604:
                    FaMasksTheater = (_b.sent()).FaMasksTheater;
                    return [2 /*return*/, FaMasksTheater];
                case 605: return [4 /*yield*/, import("react-icons/fa6")];
                case 606:
                    FaMattressPillow = (_b.sent()).FaMattressPillow;
                    return [2 /*return*/, FaMattressPillow];
                case 607: return [4 /*yield*/, import("react-icons/fa6")];
                case 608:
                    FaMaximize = (_b.sent()).FaMaximize;
                    return [2 /*return*/, FaMaximize];
                case 609: return [4 /*yield*/, import("react-icons/fa6")];
                case 610:
                    FaMedal = (_b.sent()).FaMedal;
                    return [2 /*return*/, FaMedal];
                case 611: return [4 /*yield*/, import("react-icons/fa6")];
                case 612:
                    FaMemory = (_b.sent()).FaMemory;
                    return [2 /*return*/, FaMemory];
                case 613: return [4 /*yield*/, import("react-icons/fa6")];
                case 614:
                    FaMenorah = (_b.sent()).FaMenorah;
                    return [2 /*return*/, FaMenorah];
                case 615: return [4 /*yield*/, import("react-icons/fa6")];
                case 616:
                    FaMercury = (_b.sent()).FaMercury;
                    return [2 /*return*/, FaMercury];
                case 617: return [4 /*yield*/, import("react-icons/fa6")];
                case 618:
                    FaMessage = (_b.sent()).FaMessage;
                    return [2 /*return*/, FaMessage];
                case 619: return [4 /*yield*/, import("react-icons/fa6")];
                case 620:
                    FaMeteor = (_b.sent()).FaMeteor;
                    return [2 /*return*/, FaMeteor];
                case 621: return [4 /*yield*/, import("react-icons/fa6")];
                case 622:
                    FaMicrochip = (_b.sent()).FaMicrochip;
                    return [2 /*return*/, FaMicrochip];
                case 623: return [4 /*yield*/, import("react-icons/fa6")];
                case 624:
                    FaMicrophoneLinesSlash = (_b.sent()).FaMicrophoneLinesSlash;
                    return [2 /*return*/, FaMicrophoneLinesSlash];
                case 625: return [4 /*yield*/, import("react-icons/fa6")];
                case 626:
                    FaMicrophoneLines = (_b.sent()).FaMicrophoneLines;
                    return [2 /*return*/, FaMicrophoneLines];
                case 627: return [4 /*yield*/, import("react-icons/fa6")];
                case 628:
                    FaMicrophoneSlash = (_b.sent()).FaMicrophoneSlash;
                    return [2 /*return*/, FaMicrophoneSlash];
                case 629: return [4 /*yield*/, import("react-icons/fa6")];
                case 630:
                    FaMicrophone = (_b.sent()).FaMicrophone;
                    return [2 /*return*/, FaMicrophone];
                case 631: return [4 /*yield*/, import("react-icons/fa6")];
                case 632:
                    FaMicroscope = (_b.sent()).FaMicroscope;
                    return [2 /*return*/, FaMicroscope];
                case 633: return [4 /*yield*/, import("react-icons/fa6")];
                case 634:
                    FaMillSign = (_b.sent()).FaMillSign;
                    return [2 /*return*/, FaMillSign];
                case 635: return [4 /*yield*/, import("react-icons/fa6")];
                case 636:
                    FaMinimize = (_b.sent()).FaMinimize;
                    return [2 /*return*/, FaMinimize];
                case 637: return [4 /*yield*/, import("react-icons/fa6")];
                case 638:
                    FaMinus = (_b.sent()).FaMinus;
                    return [2 /*return*/, FaMinus];
                case 639: return [4 /*yield*/, import("react-icons/fa6")];
                case 640:
                    FaMitten = (_b.sent()).FaMitten;
                    return [2 /*return*/, FaMitten];
                case 641: return [4 /*yield*/, import("react-icons/fa6")];
                case 642:
                    FaMobileButton = (_b.sent()).FaMobileButton;
                    return [2 /*return*/, FaMobileButton];
                case 643: return [4 /*yield*/, import("react-icons/fa6")];
                case 644:
                    FaMobileRetro = (_b.sent()).FaMobileRetro;
                    return [2 /*return*/, FaMobileRetro];
                case 645: return [4 /*yield*/, import("react-icons/fa6")];
                case 646:
                    FaMobileScreenButton = (_b.sent()).FaMobileScreenButton;
                    return [2 /*return*/, FaMobileScreenButton];
                case 647: return [4 /*yield*/, import("react-icons/fa6")];
                case 648:
                    FaMobileScreen = (_b.sent()).FaMobileScreen;
                    return [2 /*return*/, FaMobileScreen];
                case 649: return [4 /*yield*/, import("react-icons/fa6")];
                case 650:
                    FaMobile = (_b.sent()).FaMobile;
                    return [2 /*return*/, FaMobile];
                case 651: return [4 /*yield*/, import("react-icons/fa6")];
                case 652:
                    FaMoneyBill1Wave = (_b.sent()).FaMoneyBill1Wave;
                    return [2 /*return*/, FaMoneyBill1Wave];
                case 653: return [4 /*yield*/, import("react-icons/fa6")];
                case 654:
                    FaMoneyBill1 = (_b.sent()).FaMoneyBill1;
                    return [2 /*return*/, FaMoneyBill1];
                case 655: return [4 /*yield*/, import("react-icons/fa6")];
                case 656:
                    FaMoneyBillTransfer = (_b.sent()).FaMoneyBillTransfer;
                    return [2 /*return*/, FaMoneyBillTransfer];
                case 657: return [4 /*yield*/, import("react-icons/fa6")];
                case 658:
                    FaMoneyBillTrendUp = (_b.sent()).FaMoneyBillTrendUp;
                    return [2 /*return*/, FaMoneyBillTrendUp];
                case 659: return [4 /*yield*/, import("react-icons/fa6")];
                case 660:
                    FaMoneyBillWave = (_b.sent()).FaMoneyBillWave;
                    return [2 /*return*/, FaMoneyBillWave];
                case 661: return [4 /*yield*/, import("react-icons/fa6")];
                case 662:
                    FaMoneyBillWheat = (_b.sent()).FaMoneyBillWheat;
                    return [2 /*return*/, FaMoneyBillWheat];
                case 663: return [4 /*yield*/, import("react-icons/fa6")];
                case 664:
                    FaMoneyBill = (_b.sent()).FaMoneyBill;
                    return [2 /*return*/, FaMoneyBill];
                case 665: return [4 /*yield*/, import("react-icons/fa6")];
                case 666:
                    FaMoneyBills = (_b.sent()).FaMoneyBills;
                    return [2 /*return*/, FaMoneyBills];
                case 667: return [4 /*yield*/, import("react-icons/fa6")];
                case 668:
                    FaMoneyCheckDollar = (_b.sent()).FaMoneyCheckDollar;
                    return [2 /*return*/, FaMoneyCheckDollar];
                case 669: return [4 /*yield*/, import("react-icons/fa6")];
                case 670:
                    FaMoneyCheck = (_b.sent()).FaMoneyCheck;
                    return [2 /*return*/, FaMoneyCheck];
                case 671: return [4 /*yield*/, import("react-icons/fa6")];
                case 672:
                    FaMonument = (_b.sent()).FaMonument;
                    return [2 /*return*/, FaMonument];
                case 673: return [4 /*yield*/, import("react-icons/fa6")];
                case 674:
                    FaMoon = (_b.sent()).FaMoon;
                    return [2 /*return*/, FaMoon];
                case 675: return [4 /*yield*/, import("react-icons/fa6")];
                case 676:
                    FaMortarPestle = (_b.sent()).FaMortarPestle;
                    return [2 /*return*/, FaMortarPestle];
                case 677: return [4 /*yield*/, import("react-icons/fa6")];
                case 678:
                    FaMosque = (_b.sent()).FaMosque;
                    return [2 /*return*/, FaMosque];
                case 679: return [4 /*yield*/, import("react-icons/fa6")];
                case 680:
                    FaMosquitoNet = (_b.sent()).FaMosquitoNet;
                    return [2 /*return*/, FaMosquitoNet];
                case 681: return [4 /*yield*/, import("react-icons/fa6")];
                case 682:
                    FaMosquito = (_b.sent()).FaMosquito;
                    return [2 /*return*/, FaMosquito];
                case 683: return [4 /*yield*/, import("react-icons/fa6")];
                case 684:
                    FaMotorcycle = (_b.sent()).FaMotorcycle;
                    return [2 /*return*/, FaMotorcycle];
                case 685: return [4 /*yield*/, import("react-icons/fa6")];
                case 686:
                    FaMound = (_b.sent()).FaMound;
                    return [2 /*return*/, FaMound];
                case 687: return [4 /*yield*/, import("react-icons/fa6")];
                case 688:
                    FaMountainCity = (_b.sent()).FaMountainCity;
                    return [2 /*return*/, FaMountainCity];
                case 689: return [4 /*yield*/, import("react-icons/fa6")];
                case 690:
                    FaMountainSun = (_b.sent()).FaMountainSun;
                    return [2 /*return*/, FaMountainSun];
                case 691: return [4 /*yield*/, import("react-icons/fa6")];
                case 692:
                    FaMountain = (_b.sent()).FaMountain;
                    return [2 /*return*/, FaMountain];
                case 693: return [4 /*yield*/, import("react-icons/fa6")];
                case 694:
                    FaMugHot = (_b.sent()).FaMugHot;
                    return [2 /*return*/, FaMugHot];
                case 695: return [4 /*yield*/, import("react-icons/fa6")];
                case 696:
                    FaMugSaucer = (_b.sent()).FaMugSaucer;
                    return [2 /*return*/, FaMugSaucer];
                case 697: return [4 /*yield*/, import("react-icons/fa6")];
                case 698:
                    FaMusic = (_b.sent()).FaMusic;
                    return [2 /*return*/, FaMusic];
                case 699: return [4 /*yield*/, import("react-icons/fa6")];
                case 700:
                    FaN = (_b.sent()).FaN;
                    return [2 /*return*/, FaN];
                case 701: return [4 /*yield*/, import("react-icons/fa6")];
                case 702:
                    FaNairaSign = (_b.sent()).FaNairaSign;
                    return [2 /*return*/, FaNairaSign];
                case 703: return [4 /*yield*/, import("react-icons/fa6")];
                case 704:
                    FaNetworkWired = (_b.sent()).FaNetworkWired;
                    return [2 /*return*/, FaNetworkWired];
                case 705: return [4 /*yield*/, import("react-icons/fa6")];
                case 706:
                    FaNeuter = (_b.sent()).FaNeuter;
                    return [2 /*return*/, FaNeuter];
                case 707: return [4 /*yield*/, import("react-icons/fa6")];
                case 708:
                    FaNewspaper = (_b.sent()).FaNewspaper;
                    return [2 /*return*/, FaNewspaper];
                case 709: return [4 /*yield*/, import("react-icons/fa6")];
                case 710:
                    FaNotEqual = (_b.sent()).FaNotEqual;
                    return [2 /*return*/, FaNotEqual];
                case 711: return [4 /*yield*/, import("react-icons/fa6")];
                case 712:
                    FaNotdef = (_b.sent()).FaNotdef;
                    return [2 /*return*/, FaNotdef];
                case 713: return [4 /*yield*/, import("react-icons/fa6")];
                case 714:
                    FaNoteSticky = (_b.sent()).FaNoteSticky;
                    return [2 /*return*/, FaNoteSticky];
                case 715: return [4 /*yield*/, import("react-icons/fa6")];
                case 716:
                    FaNotesMedical = (_b.sent()).FaNotesMedical;
                    return [2 /*return*/, FaNotesMedical];
                case 717: return [4 /*yield*/, import("react-icons/fa6")];
                case 718:
                    FaO = (_b.sent()).FaO;
                    return [2 /*return*/, FaO];
                case 719: return [4 /*yield*/, import("react-icons/fa6")];
                case 720:
                    FaObjectGroup = (_b.sent()).FaObjectGroup;
                    return [2 /*return*/, FaObjectGroup];
                case 721: return [4 /*yield*/, import("react-icons/fa6")];
                case 722:
                    FaObjectUngroup = (_b.sent()).FaObjectUngroup;
                    return [2 /*return*/, FaObjectUngroup];
                case 723: return [4 /*yield*/, import("react-icons/fa6")];
                case 724:
                    FaOilCan = (_b.sent()).FaOilCan;
                    return [2 /*return*/, FaOilCan];
                case 725: return [4 /*yield*/, import("react-icons/fa6")];
                case 726:
                    FaOilWell = (_b.sent()).FaOilWell;
                    return [2 /*return*/, FaOilWell];
                case 727: return [4 /*yield*/, import("react-icons/fa6")];
                case 728:
                    FaOm = (_b.sent()).FaOm;
                    return [2 /*return*/, FaOm];
                case 729: return [4 /*yield*/, import("react-icons/fa6")];
                case 730:
                    FaOtter = (_b.sent()).FaOtter;
                    return [2 /*return*/, FaOtter];
                case 731: return [4 /*yield*/, import("react-icons/fa6")];
                case 732:
                    FaOutdent = (_b.sent()).FaOutdent;
                    return [2 /*return*/, FaOutdent];
                case 733: return [4 /*yield*/, import("react-icons/fa6")];
                case 734:
                    FaP = (_b.sent()).FaP;
                    return [2 /*return*/, FaP];
                case 735: return [4 /*yield*/, import("react-icons/fa6")];
                case 736:
                    FaPager = (_b.sent()).FaPager;
                    return [2 /*return*/, FaPager];
                case 737: return [4 /*yield*/, import("react-icons/fa6")];
                case 738:
                    FaPaintRoller = (_b.sent()).FaPaintRoller;
                    return [2 /*return*/, FaPaintRoller];
                case 739: return [4 /*yield*/, import("react-icons/fa6")];
                case 740:
                    FaPaintbrush = (_b.sent()).FaPaintbrush;
                    return [2 /*return*/, FaPaintbrush];
                case 741: return [4 /*yield*/, import("react-icons/fa6")];
                case 742:
                    FaPalette = (_b.sent()).FaPalette;
                    return [2 /*return*/, FaPalette];
                case 743: return [4 /*yield*/, import("react-icons/fa6")];
                case 744:
                    FaPallet = (_b.sent()).FaPallet;
                    return [2 /*return*/, FaPallet];
                case 745: return [4 /*yield*/, import("react-icons/fa6")];
                case 746:
                    FaPanorama = (_b.sent()).FaPanorama;
                    return [2 /*return*/, FaPanorama];
                case 747: return [4 /*yield*/, import("react-icons/fa6")];
                case 748:
                    FaPaperPlane = (_b.sent()).FaPaperPlane;
                    return [2 /*return*/, FaPaperPlane];
                case 749: return [4 /*yield*/, import("react-icons/fa6")];
                case 750:
                    FaPaperclip = (_b.sent()).FaPaperclip;
                    return [2 /*return*/, FaPaperclip];
                case 751: return [4 /*yield*/, import("react-icons/fa6")];
                case 752:
                    FaParachuteBox = (_b.sent()).FaParachuteBox;
                    return [2 /*return*/, FaParachuteBox];
                case 753: return [4 /*yield*/, import("react-icons/fa6")];
                case 754:
                    FaParagraph = (_b.sent()).FaParagraph;
                    return [2 /*return*/, FaParagraph];
                case 755: return [4 /*yield*/, import("react-icons/fa6")];
                case 756:
                    FaPassport = (_b.sent()).FaPassport;
                    return [2 /*return*/, FaPassport];
                case 757: return [4 /*yield*/, import("react-icons/fa6")];
                case 758:
                    FaPaste = (_b.sent()).FaPaste;
                    return [2 /*return*/, FaPaste];
                case 759: return [4 /*yield*/, import("react-icons/fa6")];
                case 760:
                    FaPause = (_b.sent()).FaPause;
                    return [2 /*return*/, FaPause];
                case 761: return [4 /*yield*/, import("react-icons/fa6")];
                case 762:
                    FaPaw = (_b.sent()).FaPaw;
                    return [2 /*return*/, FaPaw];
                case 763: return [4 /*yield*/, import("react-icons/fa6")];
                case 764:
                    FaPeace = (_b.sent()).FaPeace;
                    return [2 /*return*/, FaPeace];
                case 765: return [4 /*yield*/, import("react-icons/fa6")];
                case 766:
                    FaPenClip = (_b.sent()).FaPenClip;
                    return [2 /*return*/, FaPenClip];
                case 767: return [4 /*yield*/, import("react-icons/fa6")];
                case 768:
                    FaPenFancy = (_b.sent()).FaPenFancy;
                    return [2 /*return*/, FaPenFancy];
                case 769: return [4 /*yield*/, import("react-icons/fa6")];
                case 770:
                    FaPenNib = (_b.sent()).FaPenNib;
                    return [2 /*return*/, FaPenNib];
                case 771: return [4 /*yield*/, import("react-icons/fa6")];
                case 772:
                    FaPenRuler = (_b.sent()).FaPenRuler;
                    return [2 /*return*/, FaPenRuler];
                case 773: return [4 /*yield*/, import("react-icons/fa6")];
                case 774:
                    FaPenToSquare = (_b.sent()).FaPenToSquare;
                    return [2 /*return*/, FaPenToSquare];
                case 775: return [4 /*yield*/, import("react-icons/fa6")];
                case 776:
                    FaPen = (_b.sent()).FaPen;
                    return [2 /*return*/, FaPen];
                case 777: return [4 /*yield*/, import("react-icons/fa6")];
                case 778:
                    FaPencil = (_b.sent()).FaPencil;
                    return [2 /*return*/, FaPencil];
                case 779: return [4 /*yield*/, import("react-icons/fa6")];
                case 780:
                    FaPeopleArrows = (_b.sent()).FaPeopleArrows;
                    return [2 /*return*/, FaPeopleArrows];
                case 781: return [4 /*yield*/, import("react-icons/fa6")];
                case 782:
                    FaPeopleCarryBox = (_b.sent()).FaPeopleCarryBox;
                    return [2 /*return*/, FaPeopleCarryBox];
                case 783: return [4 /*yield*/, import("react-icons/fa6")];
                case 784:
                    FaPeopleGroup = (_b.sent()).FaPeopleGroup;
                    return [2 /*return*/, FaPeopleGroup];
                case 785: return [4 /*yield*/, import("react-icons/fa6")];
                case 786:
                    FaPeopleLine = (_b.sent()).FaPeopleLine;
                    return [2 /*return*/, FaPeopleLine];
                case 787: return [4 /*yield*/, import("react-icons/fa6")];
                case 788:
                    FaPeoplePulling = (_b.sent()).FaPeoplePulling;
                    return [2 /*return*/, FaPeoplePulling];
                case 789: return [4 /*yield*/, import("react-icons/fa6")];
                case 790:
                    FaPeopleRobbery = (_b.sent()).FaPeopleRobbery;
                    return [2 /*return*/, FaPeopleRobbery];
                case 791: return [4 /*yield*/, import("react-icons/fa6")];
                case 792:
                    FaPeopleRoof = (_b.sent()).FaPeopleRoof;
                    return [2 /*return*/, FaPeopleRoof];
                case 793: return [4 /*yield*/, import("react-icons/fa6")];
                case 794:
                    FaPepperHot = (_b.sent()).FaPepperHot;
                    return [2 /*return*/, FaPepperHot];
                case 795: return [4 /*yield*/, import("react-icons/fa6")];
                case 796:
                    FaPercent = (_b.sent()).FaPercent;
                    return [2 /*return*/, FaPercent];
                case 797: return [4 /*yield*/, import("react-icons/fa6")];
                case 798:
                    FaPersonArrowDownToLine = (_b.sent()).FaPersonArrowDownToLine;
                    return [2 /*return*/, FaPersonArrowDownToLine];
                case 799: return [4 /*yield*/, import("react-icons/fa6")];
                case 800:
                    FaPersonArrowUpFromLine = (_b.sent()).FaPersonArrowUpFromLine;
                    return [2 /*return*/, FaPersonArrowUpFromLine];
                case 801: return [4 /*yield*/, import("react-icons/fa6")];
                case 802:
                    FaPersonBiking = (_b.sent()).FaPersonBiking;
                    return [2 /*return*/, FaPersonBiking];
                case 803: return [4 /*yield*/, import("react-icons/fa6")];
                case 804:
                    FaPersonBooth = (_b.sent()).FaPersonBooth;
                    return [2 /*return*/, FaPersonBooth];
                case 805: return [4 /*yield*/, import("react-icons/fa6")];
                case 806:
                    FaPersonBreastfeeding = (_b.sent()).FaPersonBreastfeeding;
                    return [2 /*return*/, FaPersonBreastfeeding];
                case 807: return [4 /*yield*/, import("react-icons/fa6")];
                case 808:
                    FaPersonBurst = (_b.sent()).FaPersonBurst;
                    return [2 /*return*/, FaPersonBurst];
                case 809: return [4 /*yield*/, import("react-icons/fa6")];
                case 810:
                    FaPersonCane = (_b.sent()).FaPersonCane;
                    return [2 /*return*/, FaPersonCane];
                case 811: return [4 /*yield*/, import("react-icons/fa6")];
                case 812:
                    FaPersonChalkboard = (_b.sent()).FaPersonChalkboard;
                    return [2 /*return*/, FaPersonChalkboard];
                case 813: return [4 /*yield*/, import("react-icons/fa6")];
                case 814:
                    FaPersonCircleCheck = (_b.sent()).FaPersonCircleCheck;
                    return [2 /*return*/, FaPersonCircleCheck];
                case 815: return [4 /*yield*/, import("react-icons/fa6")];
                case 816:
                    FaPersonCircleExclamation = (_b.sent()).FaPersonCircleExclamation;
                    return [2 /*return*/, FaPersonCircleExclamation];
                case 817: return [4 /*yield*/, import("react-icons/fa6")];
                case 818:
                    FaPersonCircleMinus = (_b.sent()).FaPersonCircleMinus;
                    return [2 /*return*/, FaPersonCircleMinus];
                case 819: return [4 /*yield*/, import("react-icons/fa6")];
                case 820:
                    FaPersonCirclePlus = (_b.sent()).FaPersonCirclePlus;
                    return [2 /*return*/, FaPersonCirclePlus];
                case 821: return [4 /*yield*/, import("react-icons/fa6")];
                case 822:
                    FaPersonCircleQuestion = (_b.sent()).FaPersonCircleQuestion;
                    return [2 /*return*/, FaPersonCircleQuestion];
                case 823: return [4 /*yield*/, import("react-icons/fa6")];
                case 824:
                    FaPersonCircleXmark = (_b.sent()).FaPersonCircleXmark;
                    return [2 /*return*/, FaPersonCircleXmark];
                case 825: return [4 /*yield*/, import("react-icons/fa6")];
                case 826:
                    FaPersonDigging = (_b.sent()).FaPersonDigging;
                    return [2 /*return*/, FaPersonDigging];
                case 827: return [4 /*yield*/, import("react-icons/fa6")];
                case 828:
                    FaPersonDotsFromLine = (_b.sent()).FaPersonDotsFromLine;
                    return [2 /*return*/, FaPersonDotsFromLine];
                case 829: return [4 /*yield*/, import("react-icons/fa6")];
                case 830:
                    FaPersonDressBurst = (_b.sent()).FaPersonDressBurst;
                    return [2 /*return*/, FaPersonDressBurst];
                case 831: return [4 /*yield*/, import("react-icons/fa6")];
                case 832:
                    FaPersonDress = (_b.sent()).FaPersonDress;
                    return [2 /*return*/, FaPersonDress];
                case 833: return [4 /*yield*/, import("react-icons/fa6")];
                case 834:
                    FaPersonDrowning = (_b.sent()).FaPersonDrowning;
                    return [2 /*return*/, FaPersonDrowning];
                case 835: return [4 /*yield*/, import("react-icons/fa6")];
                case 836:
                    FaPersonFallingBurst = (_b.sent()).FaPersonFallingBurst;
                    return [2 /*return*/, FaPersonFallingBurst];
                case 837: return [4 /*yield*/, import("react-icons/fa6")];
                case 838:
                    FaPersonFalling = (_b.sent()).FaPersonFalling;
                    return [2 /*return*/, FaPersonFalling];
                case 839: return [4 /*yield*/, import("react-icons/fa6")];
                case 840:
                    FaPersonHalfDress = (_b.sent()).FaPersonHalfDress;
                    return [2 /*return*/, FaPersonHalfDress];
                case 841: return [4 /*yield*/, import("react-icons/fa6")];
                case 842:
                    FaPersonHarassing = (_b.sent()).FaPersonHarassing;
                    return [2 /*return*/, FaPersonHarassing];
                case 843: return [4 /*yield*/, import("react-icons/fa6")];
                case 844:
                    FaPersonHiking = (_b.sent()).FaPersonHiking;
                    return [2 /*return*/, FaPersonHiking];
                case 845: return [4 /*yield*/, import("react-icons/fa6")];
                case 846:
                    FaPersonMilitaryPointing = (_b.sent()).FaPersonMilitaryPointing;
                    return [2 /*return*/, FaPersonMilitaryPointing];
                case 847: return [4 /*yield*/, import("react-icons/fa6")];
                case 848:
                    FaPersonMilitaryRifle = (_b.sent()).FaPersonMilitaryRifle;
                    return [2 /*return*/, FaPersonMilitaryRifle];
                case 849: return [4 /*yield*/, import("react-icons/fa6")];
                case 850:
                    FaPersonMilitaryToPerson = (_b.sent()).FaPersonMilitaryToPerson;
                    return [2 /*return*/, FaPersonMilitaryToPerson];
                case 851: return [4 /*yield*/, import("react-icons/fa6")];
                case 852:
                    FaPersonPraying = (_b.sent()).FaPersonPraying;
                    return [2 /*return*/, FaPersonPraying];
                case 853: return [4 /*yield*/, import("react-icons/fa6")];
                case 854:
                    FaPersonPregnant = (_b.sent()).FaPersonPregnant;
                    return [2 /*return*/, FaPersonPregnant];
                case 855: return [4 /*yield*/, import("react-icons/fa6")];
                case 856:
                    FaPersonRays = (_b.sent()).FaPersonRays;
                    return [2 /*return*/, FaPersonRays];
                case 857: return [4 /*yield*/, import("react-icons/fa6")];
                case 858:
                    FaPersonRifle = (_b.sent()).FaPersonRifle;
                    return [2 /*return*/, FaPersonRifle];
                case 859: return [4 /*yield*/, import("react-icons/fa6")];
                case 860:
                    FaPersonRunning = (_b.sent()).FaPersonRunning;
                    return [2 /*return*/, FaPersonRunning];
                case 861: return [4 /*yield*/, import("react-icons/fa6")];
                case 862:
                    FaPersonShelter = (_b.sent()).FaPersonShelter;
                    return [2 /*return*/, FaPersonShelter];
                case 863: return [4 /*yield*/, import("react-icons/fa6")];
                case 864:
                    FaPersonSkating = (_b.sent()).FaPersonSkating;
                    return [2 /*return*/, FaPersonSkating];
                case 865: return [4 /*yield*/, import("react-icons/fa6")];
                case 866:
                    FaPersonSkiingNordic = (_b.sent()).FaPersonSkiingNordic;
                    return [2 /*return*/, FaPersonSkiingNordic];
                case 867: return [4 /*yield*/, import("react-icons/fa6")];
                case 868:
                    FaPersonSkiing = (_b.sent()).FaPersonSkiing;
                    return [2 /*return*/, FaPersonSkiing];
                case 869: return [4 /*yield*/, import("react-icons/fa6")];
                case 870:
                    FaPersonSnowboarding = (_b.sent()).FaPersonSnowboarding;
                    return [2 /*return*/, FaPersonSnowboarding];
                case 871: return [4 /*yield*/, import("react-icons/fa6")];
                case 872:
                    FaPersonSwimming = (_b.sent()).FaPersonSwimming;
                    return [2 /*return*/, FaPersonSwimming];
                case 873: return [4 /*yield*/, import("react-icons/fa6")];
                case 874:
                    FaPersonThroughWindow = (_b.sent()).FaPersonThroughWindow;
                    return [2 /*return*/, FaPersonThroughWindow];
                case 875: return [4 /*yield*/, import("react-icons/fa6")];
                case 876:
                    FaPersonWalkingArrowLoopLeft = (_b.sent()).FaPersonWalkingArrowLoopLeft;
                    return [2 /*return*/, FaPersonWalkingArrowLoopLeft];
                case 877: return [4 /*yield*/, import("react-icons/fa6")];
                case 878:
                    FaPersonWalkingArrowRight = (_b.sent()).FaPersonWalkingArrowRight;
                    return [2 /*return*/, FaPersonWalkingArrowRight];
                case 879: return [4 /*yield*/, import("react-icons/fa6")];
                case 880:
                    FaPersonWalkingDashedLineArrowRight = (_b.sent()).FaPersonWalkingDashedLineArrowRight;
                    return [2 /*return*/, FaPersonWalkingDashedLineArrowRight];
                case 881: return [4 /*yield*/, import("react-icons/fa6")];
                case 882:
                    FaPersonWalkingLuggage = (_b.sent()).FaPersonWalkingLuggage;
                    return [2 /*return*/, FaPersonWalkingLuggage];
                case 883: return [4 /*yield*/, import("react-icons/fa6")];
                case 884:
                    FaPersonWalkingWithCane = (_b.sent()).FaPersonWalkingWithCane;
                    return [2 /*return*/, FaPersonWalkingWithCane];
                case 885: return [4 /*yield*/, import("react-icons/fa6")];
                case 886:
                    FaPersonWalking = (_b.sent()).FaPersonWalking;
                    return [2 /*return*/, FaPersonWalking];
                case 887: return [4 /*yield*/, import("react-icons/fa6")];
                case 888:
                    FaPerson = (_b.sent()).FaPerson;
                    return [2 /*return*/, FaPerson];
                case 889: return [4 /*yield*/, import("react-icons/fa6")];
                case 890:
                    FaPesetaSign = (_b.sent()).FaPesetaSign;
                    return [2 /*return*/, FaPesetaSign];
                case 891: return [4 /*yield*/, import("react-icons/fa6")];
                case 892:
                    FaPesoSign = (_b.sent()).FaPesoSign;
                    return [2 /*return*/, FaPesoSign];
                case 893: return [4 /*yield*/, import("react-icons/fa6")];
                case 894:
                    FaPhoneFlip = (_b.sent()).FaPhoneFlip;
                    return [2 /*return*/, FaPhoneFlip];
                case 895: return [4 /*yield*/, import("react-icons/fa6")];
                case 896:
                    FaPhoneSlash = (_b.sent()).FaPhoneSlash;
                    return [2 /*return*/, FaPhoneSlash];
                case 897: return [4 /*yield*/, import("react-icons/fa6")];
                case 898:
                    FaPhoneVolume = (_b.sent()).FaPhoneVolume;
                    return [2 /*return*/, FaPhoneVolume];
                case 899: return [4 /*yield*/, import("react-icons/fa6")];
                case 900:
                    FaPhone = (_b.sent()).FaPhone;
                    return [2 /*return*/, FaPhone];
                case 901: return [4 /*yield*/, import("react-icons/fa6")];
                case 902:
                    FaPhotoFilm = (_b.sent()).FaPhotoFilm;
                    return [2 /*return*/, FaPhotoFilm];
                case 903: return [4 /*yield*/, import("react-icons/fa6")];
                case 904:
                    FaPiggyBank = (_b.sent()).FaPiggyBank;
                    return [2 /*return*/, FaPiggyBank];
                case 905: return [4 /*yield*/, import("react-icons/fa6")];
                case 906:
                    FaPills = (_b.sent()).FaPills;
                    return [2 /*return*/, FaPills];
                case 907: return [4 /*yield*/, import("react-icons/fa6")];
                case 908:
                    FaPizzaSlice = (_b.sent()).FaPizzaSlice;
                    return [2 /*return*/, FaPizzaSlice];
                case 909: return [4 /*yield*/, import("react-icons/fa6")];
                case 910:
                    FaPlaceOfWorship = (_b.sent()).FaPlaceOfWorship;
                    return [2 /*return*/, FaPlaceOfWorship];
                case 911: return [4 /*yield*/, import("react-icons/fa6")];
                case 912:
                    FaPlaneArrival = (_b.sent()).FaPlaneArrival;
                    return [2 /*return*/, FaPlaneArrival];
                case 913: return [4 /*yield*/, import("react-icons/fa6")];
                case 914:
                    FaPlaneCircleCheck = (_b.sent()).FaPlaneCircleCheck;
                    return [2 /*return*/, FaPlaneCircleCheck];
                case 915: return [4 /*yield*/, import("react-icons/fa6")];
                case 916:
                    FaPlaneCircleExclamation = (_b.sent()).FaPlaneCircleExclamation;
                    return [2 /*return*/, FaPlaneCircleExclamation];
                case 917: return [4 /*yield*/, import("react-icons/fa6")];
                case 918:
                    FaPlaneCircleXmark = (_b.sent()).FaPlaneCircleXmark;
                    return [2 /*return*/, FaPlaneCircleXmark];
                case 919: return [4 /*yield*/, import("react-icons/fa6")];
                case 920:
                    FaPlaneDeparture = (_b.sent()).FaPlaneDeparture;
                    return [2 /*return*/, FaPlaneDeparture];
                case 921: return [4 /*yield*/, import("react-icons/fa6")];
                case 922:
                    FaPlaneLock = (_b.sent()).FaPlaneLock;
                    return [2 /*return*/, FaPlaneLock];
                case 923: return [4 /*yield*/, import("react-icons/fa6")];
                case 924:
                    FaPlaneSlash = (_b.sent()).FaPlaneSlash;
                    return [2 /*return*/, FaPlaneSlash];
                case 925: return [4 /*yield*/, import("react-icons/fa6")];
                case 926:
                    FaPlaneUp = (_b.sent()).FaPlaneUp;
                    return [2 /*return*/, FaPlaneUp];
                case 927: return [4 /*yield*/, import("react-icons/fa6")];
                case 928:
                    FaPlane = (_b.sent()).FaPlane;
                    return [2 /*return*/, FaPlane];
                case 929: return [4 /*yield*/, import("react-icons/fa6")];
                case 930:
                    FaPlantWilt = (_b.sent()).FaPlantWilt;
                    return [2 /*return*/, FaPlantWilt];
                case 931: return [4 /*yield*/, import("react-icons/fa6")];
                case 932:
                    FaPlateWheat = (_b.sent()).FaPlateWheat;
                    return [2 /*return*/, FaPlateWheat];
                case 933: return [4 /*yield*/, import("react-icons/fa6")];
                case 934:
                    FaPlay = (_b.sent()).FaPlay;
                    return [2 /*return*/, FaPlay];
                case 935: return [4 /*yield*/, import("react-icons/fa6")];
                case 936:
                    FaPlugCircleBolt = (_b.sent()).FaPlugCircleBolt;
                    return [2 /*return*/, FaPlugCircleBolt];
                case 937: return [4 /*yield*/, import("react-icons/fa6")];
                case 938:
                    FaPlugCircleCheck = (_b.sent()).FaPlugCircleCheck;
                    return [2 /*return*/, FaPlugCircleCheck];
                case 939: return [4 /*yield*/, import("react-icons/fa6")];
                case 940:
                    FaPlugCircleExclamation = (_b.sent()).FaPlugCircleExclamation;
                    return [2 /*return*/, FaPlugCircleExclamation];
                case 941: return [4 /*yield*/, import("react-icons/fa6")];
                case 942:
                    FaPlugCircleMinus = (_b.sent()).FaPlugCircleMinus;
                    return [2 /*return*/, FaPlugCircleMinus];
                case 943: return [4 /*yield*/, import("react-icons/fa6")];
                case 944:
                    FaPlugCirclePlus = (_b.sent()).FaPlugCirclePlus;
                    return [2 /*return*/, FaPlugCirclePlus];
                case 945: return [4 /*yield*/, import("react-icons/fa6")];
                case 946:
                    FaPlugCircleXmark = (_b.sent()).FaPlugCircleXmark;
                    return [2 /*return*/, FaPlugCircleXmark];
                case 947: return [4 /*yield*/, import("react-icons/fa6")];
                case 948:
                    FaPlug = (_b.sent()).FaPlug;
                    return [2 /*return*/, FaPlug];
                case 949: return [4 /*yield*/, import("react-icons/fa6")];
                case 950:
                    FaPlusMinus = (_b.sent()).FaPlusMinus;
                    return [2 /*return*/, FaPlusMinus];
                case 951: return [4 /*yield*/, import("react-icons/fa6")];
                case 952:
                    FaPlus = (_b.sent()).FaPlus;
                    return [2 /*return*/, FaPlus];
                case 953: return [4 /*yield*/, import("react-icons/fa6")];
                case 954:
                    FaPodcast = (_b.sent()).FaPodcast;
                    return [2 /*return*/, FaPodcast];
                case 955: return [4 /*yield*/, import("react-icons/fa6")];
                case 956:
                    FaPooStorm = (_b.sent()).FaPooStorm;
                    return [2 /*return*/, FaPooStorm];
                case 957: return [4 /*yield*/, import("react-icons/fa6")];
                case 958:
                    FaPoo = (_b.sent()).FaPoo;
                    return [2 /*return*/, FaPoo];
                case 959: return [4 /*yield*/, import("react-icons/fa6")];
                case 960:
                    FaPoop = (_b.sent()).FaPoop;
                    return [2 /*return*/, FaPoop];
                case 961: return [4 /*yield*/, import("react-icons/fa6")];
                case 962:
                    FaPowerOff = (_b.sent()).FaPowerOff;
                    return [2 /*return*/, FaPowerOff];
                case 963: return [4 /*yield*/, import("react-icons/fa6")];
                case 964:
                    FaPrescriptionBottleMedical = (_b.sent()).FaPrescriptionBottleMedical;
                    return [2 /*return*/, FaPrescriptionBottleMedical];
                case 965: return [4 /*yield*/, import("react-icons/fa6")];
                case 966:
                    FaPrescriptionBottle = (_b.sent()).FaPrescriptionBottle;
                    return [2 /*return*/, FaPrescriptionBottle];
                case 967: return [4 /*yield*/, import("react-icons/fa6")];
                case 968:
                    FaPrescription = (_b.sent()).FaPrescription;
                    return [2 /*return*/, FaPrescription];
                case 969: return [4 /*yield*/, import("react-icons/fa6")];
                case 970:
                    FaPrint = (_b.sent()).FaPrint;
                    return [2 /*return*/, FaPrint];
                case 971: return [4 /*yield*/, import("react-icons/fa6")];
                case 972:
                    FaPumpMedical = (_b.sent()).FaPumpMedical;
                    return [2 /*return*/, FaPumpMedical];
                case 973: return [4 /*yield*/, import("react-icons/fa6")];
                case 974:
                    FaPumpSoap = (_b.sent()).FaPumpSoap;
                    return [2 /*return*/, FaPumpSoap];
                case 975: return [4 /*yield*/, import("react-icons/fa6")];
                case 976:
                    FaPuzzlePiece = (_b.sent()).FaPuzzlePiece;
                    return [2 /*return*/, FaPuzzlePiece];
                case 977: return [4 /*yield*/, import("react-icons/fa6")];
                case 978:
                    FaQ = (_b.sent()).FaQ;
                    return [2 /*return*/, FaQ];
                case 979: return [4 /*yield*/, import("react-icons/fa6")];
                case 980:
                    FaQrcode = (_b.sent()).FaQrcode;
                    return [2 /*return*/, FaQrcode];
                case 981: return [4 /*yield*/, import("react-icons/fa6")];
                case 982:
                    FaQuestion = (_b.sent()).FaQuestion;
                    return [2 /*return*/, FaQuestion];
                case 983: return [4 /*yield*/, import("react-icons/fa6")];
                case 984:
                    FaQuoteLeft = (_b.sent()).FaQuoteLeft;
                    return [2 /*return*/, FaQuoteLeft];
                case 985: return [4 /*yield*/, import("react-icons/fa6")];
                case 986:
                    FaQuoteRight = (_b.sent()).FaQuoteRight;
                    return [2 /*return*/, FaQuoteRight];
                case 987: return [4 /*yield*/, import("react-icons/fa6")];
                case 988:
                    FaR = (_b.sent()).FaR;
                    return [2 /*return*/, FaR];
                case 989: return [4 /*yield*/, import("react-icons/fa6")];
                case 990:
                    FaRadiation = (_b.sent()).FaRadiation;
                    return [2 /*return*/, FaRadiation];
                case 991: return [4 /*yield*/, import("react-icons/fa6")];
                case 992:
                    FaRadio = (_b.sent()).FaRadio;
                    return [2 /*return*/, FaRadio];
                case 993: return [4 /*yield*/, import("react-icons/fa6")];
                case 994:
                    FaRainbow = (_b.sent()).FaRainbow;
                    return [2 /*return*/, FaRainbow];
                case 995: return [4 /*yield*/, import("react-icons/fa6")];
                case 996:
                    FaRankingStar = (_b.sent()).FaRankingStar;
                    return [2 /*return*/, FaRankingStar];
                case 997: return [4 /*yield*/, import("react-icons/fa6")];
                case 998:
                    FaReceipt = (_b.sent()).FaReceipt;
                    return [2 /*return*/, FaReceipt];
                case 999: return [4 /*yield*/, import("react-icons/fa6")];
                case 1000:
                    FaRecordVinyl = (_b.sent()).FaRecordVinyl;
                    return [2 /*return*/, FaRecordVinyl];
                case 1001: return [4 /*yield*/, import("react-icons/fa6")];
                case 1002:
                    FaRectangleAd = (_b.sent()).FaRectangleAd;
                    return [2 /*return*/, FaRectangleAd];
                case 1003: return [4 /*yield*/, import("react-icons/fa6")];
                case 1004:
                    FaRectangleList = (_b.sent()).FaRectangleList;
                    return [2 /*return*/, FaRectangleList];
                case 1005: return [4 /*yield*/, import("react-icons/fa6")];
                case 1006:
                    FaRectangleXmark = (_b.sent()).FaRectangleXmark;
                    return [2 /*return*/, FaRectangleXmark];
                case 1007: return [4 /*yield*/, import("react-icons/fa6")];
                case 1008:
                    FaRecycle = (_b.sent()).FaRecycle;
                    return [2 /*return*/, FaRecycle];
                case 1009: return [4 /*yield*/, import("react-icons/fa6")];
                case 1010:
                    FaRegistered = (_b.sent()).FaRegistered;
                    return [2 /*return*/, FaRegistered];
                case 1011: return [4 /*yield*/, import("react-icons/fa6")];
                case 1012:
                    FaRepeat = (_b.sent()).FaRepeat;
                    return [2 /*return*/, FaRepeat];
                case 1013: return [4 /*yield*/, import("react-icons/fa6")];
                case 1014:
                    FaReplyAll = (_b.sent()).FaReplyAll;
                    return [2 /*return*/, FaReplyAll];
                case 1015: return [4 /*yield*/, import("react-icons/fa6")];
                case 1016:
                    FaReply = (_b.sent()).FaReply;
                    return [2 /*return*/, FaReply];
                case 1017: return [4 /*yield*/, import("react-icons/fa6")];
                case 1018:
                    FaRepublican = (_b.sent()).FaRepublican;
                    return [2 /*return*/, FaRepublican];
                case 1019: return [4 /*yield*/, import("react-icons/fa6")];
                case 1020:
                    FaRestroom = (_b.sent()).FaRestroom;
                    return [2 /*return*/, FaRestroom];
                case 1021: return [4 /*yield*/, import("react-icons/fa6")];
                case 1022:
                    FaRetweet = (_b.sent()).FaRetweet;
                    return [2 /*return*/, FaRetweet];
                case 1023: return [4 /*yield*/, import("react-icons/fa6")];
                case 1024:
                    FaRibbon = (_b.sent()).FaRibbon;
                    return [2 /*return*/, FaRibbon];
                case 1025: return [4 /*yield*/, import("react-icons/fa6")];
                case 1026:
                    FaRightFromBracket = (_b.sent()).FaRightFromBracket;
                    return [2 /*return*/, FaRightFromBracket];
                case 1027: return [4 /*yield*/, import("react-icons/fa6")];
                case 1028:
                    FaRightLeft = (_b.sent()).FaRightLeft;
                    return [2 /*return*/, FaRightLeft];
                case 1029: return [4 /*yield*/, import("react-icons/fa6")];
                case 1030:
                    FaRightLong = (_b.sent()).FaRightLong;
                    return [2 /*return*/, FaRightLong];
                case 1031: return [4 /*yield*/, import("react-icons/fa6")];
                case 1032:
                    FaRightToBracket = (_b.sent()).FaRightToBracket;
                    return [2 /*return*/, FaRightToBracket];
                case 1033: return [4 /*yield*/, import("react-icons/fa6")];
                case 1034:
                    FaRing = (_b.sent()).FaRing;
                    return [2 /*return*/, FaRing];
                case 1035: return [4 /*yield*/, import("react-icons/fa6")];
                case 1036:
                    FaRoadBarrier = (_b.sent()).FaRoadBarrier;
                    return [2 /*return*/, FaRoadBarrier];
                case 1037: return [4 /*yield*/, import("react-icons/fa6")];
                case 1038:
                    FaRoadBridge = (_b.sent()).FaRoadBridge;
                    return [2 /*return*/, FaRoadBridge];
                case 1039: return [4 /*yield*/, import("react-icons/fa6")];
                case 1040:
                    FaRoadCircleCheck = (_b.sent()).FaRoadCircleCheck;
                    return [2 /*return*/, FaRoadCircleCheck];
                case 1041: return [4 /*yield*/, import("react-icons/fa6")];
                case 1042:
                    FaRoadCircleExclamation = (_b.sent()).FaRoadCircleExclamation;
                    return [2 /*return*/, FaRoadCircleExclamation];
                case 1043: return [4 /*yield*/, import("react-icons/fa6")];
                case 1044:
                    FaRoadCircleXmark = (_b.sent()).FaRoadCircleXmark;
                    return [2 /*return*/, FaRoadCircleXmark];
                case 1045: return [4 /*yield*/, import("react-icons/fa6")];
                case 1046:
                    FaRoadLock = (_b.sent()).FaRoadLock;
                    return [2 /*return*/, FaRoadLock];
                case 1047: return [4 /*yield*/, import("react-icons/fa6")];
                case 1048:
                    FaRoadSpikes = (_b.sent()).FaRoadSpikes;
                    return [2 /*return*/, FaRoadSpikes];
                case 1049: return [4 /*yield*/, import("react-icons/fa6")];
                case 1050:
                    FaRoad = (_b.sent()).FaRoad;
                    return [2 /*return*/, FaRoad];
                case 1051: return [4 /*yield*/, import("react-icons/fa6")];
                case 1052:
                    FaRobot = (_b.sent()).FaRobot;
                    return [2 /*return*/, FaRobot];
                case 1053: return [4 /*yield*/, import("react-icons/fa6")];
                case 1054:
                    FaRocket = (_b.sent()).FaRocket;
                    return [2 /*return*/, FaRocket];
                case 1055: return [4 /*yield*/, import("react-icons/fa6")];
                case 1056:
                    FaRotateLeft = (_b.sent()).FaRotateLeft;
                    return [2 /*return*/, FaRotateLeft];
                case 1057: return [4 /*yield*/, import("react-icons/fa6")];
                case 1058:
                    FaRotateRight = (_b.sent()).FaRotateRight;
                    return [2 /*return*/, FaRotateRight];
                case 1059: return [4 /*yield*/, import("react-icons/fa6")];
                case 1060:
                    FaRotate = (_b.sent()).FaRotate;
                    return [2 /*return*/, FaRotate];
                case 1061: return [4 /*yield*/, import("react-icons/fa6")];
                case 1062:
                    FaRoute = (_b.sent()).FaRoute;
                    return [2 /*return*/, FaRoute];
                case 1063: return [4 /*yield*/, import("react-icons/fa6")];
                case 1064:
                    FaRss = (_b.sent()).FaRss;
                    return [2 /*return*/, FaRss];
                case 1065: return [4 /*yield*/, import("react-icons/fa6")];
                case 1066:
                    FaRubleSign = (_b.sent()).FaRubleSign;
                    return [2 /*return*/, FaRubleSign];
                case 1067: return [4 /*yield*/, import("react-icons/fa6")];
                case 1068:
                    FaRug = (_b.sent()).FaRug;
                    return [2 /*return*/, FaRug];
                case 1069: return [4 /*yield*/, import("react-icons/fa6")];
                case 1070:
                    FaRulerCombined = (_b.sent()).FaRulerCombined;
                    return [2 /*return*/, FaRulerCombined];
                case 1071: return [4 /*yield*/, import("react-icons/fa6")];
                case 1072:
                    FaRulerHorizontal = (_b.sent()).FaRulerHorizontal;
                    return [2 /*return*/, FaRulerHorizontal];
                case 1073: return [4 /*yield*/, import("react-icons/fa6")];
                case 1074:
                    FaRulerVertical = (_b.sent()).FaRulerVertical;
                    return [2 /*return*/, FaRulerVertical];
                case 1075: return [4 /*yield*/, import("react-icons/fa6")];
                case 1076:
                    FaRuler = (_b.sent()).FaRuler;
                    return [2 /*return*/, FaRuler];
                case 1077: return [4 /*yield*/, import("react-icons/fa6")];
                case 1078:
                    FaRupeeSign = (_b.sent()).FaRupeeSign;
                    return [2 /*return*/, FaRupeeSign];
                case 1079: return [4 /*yield*/, import("react-icons/fa6")];
                case 1080:
                    FaRupiahSign = (_b.sent()).FaRupiahSign;
                    return [2 /*return*/, FaRupiahSign];
                case 1081: return [4 /*yield*/, import("react-icons/fa6")];
                case 1082:
                    FaS = (_b.sent()).FaS;
                    return [2 /*return*/, FaS];
                case 1083: return [4 /*yield*/, import("react-icons/fa6")];
                case 1084:
                    FaSackDollar = (_b.sent()).FaSackDollar;
                    return [2 /*return*/, FaSackDollar];
                case 1085: return [4 /*yield*/, import("react-icons/fa6")];
                case 1086:
                    FaSackXmark = (_b.sent()).FaSackXmark;
                    return [2 /*return*/, FaSackXmark];
                case 1087: return [4 /*yield*/, import("react-icons/fa6")];
                case 1088:
                    FaSailboat = (_b.sent()).FaSailboat;
                    return [2 /*return*/, FaSailboat];
                case 1089: return [4 /*yield*/, import("react-icons/fa6")];
                case 1090:
                    FaSatelliteDish = (_b.sent()).FaSatelliteDish;
                    return [2 /*return*/, FaSatelliteDish];
                case 1091: return [4 /*yield*/, import("react-icons/fa6")];
                case 1092:
                    FaSatellite = (_b.sent()).FaSatellite;
                    return [2 /*return*/, FaSatellite];
                case 1093: return [4 /*yield*/, import("react-icons/fa6")];
                case 1094:
                    FaScaleBalanced = (_b.sent()).FaScaleBalanced;
                    return [2 /*return*/, FaScaleBalanced];
                case 1095: return [4 /*yield*/, import("react-icons/fa6")];
                case 1096:
                    FaScaleUnbalancedFlip = (_b.sent()).FaScaleUnbalancedFlip;
                    return [2 /*return*/, FaScaleUnbalancedFlip];
                case 1097: return [4 /*yield*/, import("react-icons/fa6")];
                case 1098:
                    FaScaleUnbalanced = (_b.sent()).FaScaleUnbalanced;
                    return [2 /*return*/, FaScaleUnbalanced];
                case 1099: return [4 /*yield*/, import("react-icons/fa6")];
                case 1100:
                    FaSchoolCircleCheck = (_b.sent()).FaSchoolCircleCheck;
                    return [2 /*return*/, FaSchoolCircleCheck];
                case 1101: return [4 /*yield*/, import("react-icons/fa6")];
                case 1102:
                    FaSchoolCircleExclamation = (_b.sent()).FaSchoolCircleExclamation;
                    return [2 /*return*/, FaSchoolCircleExclamation];
                case 1103: return [4 /*yield*/, import("react-icons/fa6")];
                case 1104:
                    FaSchoolCircleXmark = (_b.sent()).FaSchoolCircleXmark;
                    return [2 /*return*/, FaSchoolCircleXmark];
                case 1105: return [4 /*yield*/, import("react-icons/fa6")];
                case 1106:
                    FaSchoolFlag = (_b.sent()).FaSchoolFlag;
                    return [2 /*return*/, FaSchoolFlag];
                case 1107: return [4 /*yield*/, import("react-icons/fa6")];
                case 1108:
                    FaSchoolLock = (_b.sent()).FaSchoolLock;
                    return [2 /*return*/, FaSchoolLock];
                case 1109: return [4 /*yield*/, import("react-icons/fa6")];
                case 1110:
                    FaSchool = (_b.sent()).FaSchool;
                    return [2 /*return*/, FaSchool];
                case 1111: return [4 /*yield*/, import("react-icons/fa6")];
                case 1112:
                    FaScissors = (_b.sent()).FaScissors;
                    return [2 /*return*/, FaScissors];
                case 1113: return [4 /*yield*/, import("react-icons/fa6")];
                case 1114:
                    FaScrewdriverWrench = (_b.sent()).FaScrewdriverWrench;
                    return [2 /*return*/, FaScrewdriverWrench];
                case 1115: return [4 /*yield*/, import("react-icons/fa6")];
                case 1116:
                    FaScrewdriver = (_b.sent()).FaScrewdriver;
                    return [2 /*return*/, FaScrewdriver];
                case 1117: return [4 /*yield*/, import("react-icons/fa6")];
                case 1118:
                    FaScrollTorah = (_b.sent()).FaScrollTorah;
                    return [2 /*return*/, FaScrollTorah];
                case 1119: return [4 /*yield*/, import("react-icons/fa6")];
                case 1120:
                    FaScroll = (_b.sent()).FaScroll;
                    return [2 /*return*/, FaScroll];
                case 1121: return [4 /*yield*/, import("react-icons/fa6")];
                case 1122:
                    FaSdCard = (_b.sent()).FaSdCard;
                    return [2 /*return*/, FaSdCard];
                case 1123: return [4 /*yield*/, import("react-icons/fa6")];
                case 1124:
                    FaSection = (_b.sent()).FaSection;
                    return [2 /*return*/, FaSection];
                case 1125: return [4 /*yield*/, import("react-icons/fa6")];
                case 1126:
                    FaSeedling = (_b.sent()).FaSeedling;
                    return [2 /*return*/, FaSeedling];
                case 1127: return [4 /*yield*/, import("react-icons/fa6")];
                case 1128:
                    FaServer = (_b.sent()).FaServer;
                    return [2 /*return*/, FaServer];
                case 1129: return [4 /*yield*/, import("react-icons/fa6")];
                case 1130:
                    FaShapes = (_b.sent()).FaShapes;
                    return [2 /*return*/, FaShapes];
                case 1131: return [4 /*yield*/, import("react-icons/fa6")];
                case 1132:
                    FaShareFromSquare = (_b.sent()).FaShareFromSquare;
                    return [2 /*return*/, FaShareFromSquare];
                case 1133: return [4 /*yield*/, import("react-icons/fa6")];
                case 1134:
                    FaShareNodes = (_b.sent()).FaShareNodes;
                    return [2 /*return*/, FaShareNodes];
                case 1135: return [4 /*yield*/, import("react-icons/fa6")];
                case 1136:
                    FaShare = (_b.sent()).FaShare;
                    return [2 /*return*/, FaShare];
                case 1137: return [4 /*yield*/, import("react-icons/fa6")];
                case 1138:
                    FaSheetPlastic = (_b.sent()).FaSheetPlastic;
                    return [2 /*return*/, FaSheetPlastic];
                case 1139: return [4 /*yield*/, import("react-icons/fa6")];
                case 1140:
                    FaShekelSign = (_b.sent()).FaShekelSign;
                    return [2 /*return*/, FaShekelSign];
                case 1141: return [4 /*yield*/, import("react-icons/fa6")];
                case 1142:
                    FaShieldCat = (_b.sent()).FaShieldCat;
                    return [2 /*return*/, FaShieldCat];
                case 1143: return [4 /*yield*/, import("react-icons/fa6")];
                case 1144:
                    FaShieldDog = (_b.sent()).FaShieldDog;
                    return [2 /*return*/, FaShieldDog];
                case 1145: return [4 /*yield*/, import("react-icons/fa6")];
                case 1146:
                    FaShieldHalved = (_b.sent()).FaShieldHalved;
                    return [2 /*return*/, FaShieldHalved];
                case 1147: return [4 /*yield*/, import("react-icons/fa6")];
                case 1148:
                    FaShieldHeart = (_b.sent()).FaShieldHeart;
                    return [2 /*return*/, FaShieldHeart];
                case 1149: return [4 /*yield*/, import("react-icons/fa6")];
                case 1150:
                    FaShieldVirus = (_b.sent()).FaShieldVirus;
                    return [2 /*return*/, FaShieldVirus];
                case 1151: return [4 /*yield*/, import("react-icons/fa6")];
                case 1152:
                    FaShield = (_b.sent()).FaShield;
                    return [2 /*return*/, FaShield];
                case 1153: return [4 /*yield*/, import("react-icons/fa6")];
                case 1154:
                    FaShip = (_b.sent()).FaShip;
                    return [2 /*return*/, FaShip];
                case 1155: return [4 /*yield*/, import("react-icons/fa6")];
                case 1156:
                    FaShirt = (_b.sent()).FaShirt;
                    return [2 /*return*/, FaShirt];
                case 1157: return [4 /*yield*/, import("react-icons/fa6")];
                case 1158:
                    FaShoePrints = (_b.sent()).FaShoePrints;
                    return [2 /*return*/, FaShoePrints];
                case 1159: return [4 /*yield*/, import("react-icons/fa6")];
                case 1160:
                    FaShopLock = (_b.sent()).FaShopLock;
                    return [2 /*return*/, FaShopLock];
                case 1161: return [4 /*yield*/, import("react-icons/fa6")];
                case 1162:
                    FaShopSlash = (_b.sent()).FaShopSlash;
                    return [2 /*return*/, FaShopSlash];
                case 1163: return [4 /*yield*/, import("react-icons/fa6")];
                case 1164:
                    FaShop = (_b.sent()).FaShop;
                    return [2 /*return*/, FaShop];
                case 1165: return [4 /*yield*/, import("react-icons/fa6")];
                case 1166:
                    FaShower = (_b.sent()).FaShower;
                    return [2 /*return*/, FaShower];
                case 1167: return [4 /*yield*/, import("react-icons/fa6")];
                case 1168:
                    FaShrimp = (_b.sent()).FaShrimp;
                    return [2 /*return*/, FaShrimp];
                case 1169: return [4 /*yield*/, import("react-icons/fa6")];
                case 1170:
                    FaShuffle = (_b.sent()).FaShuffle;
                    return [2 /*return*/, FaShuffle];
                case 1171: return [4 /*yield*/, import("react-icons/fa6")];
                case 1172:
                    FaShuttleSpace = (_b.sent()).FaShuttleSpace;
                    return [2 /*return*/, FaShuttleSpace];
                case 1173: return [4 /*yield*/, import("react-icons/fa6")];
                case 1174:
                    FaSignHanging = (_b.sent()).FaSignHanging;
                    return [2 /*return*/, FaSignHanging];
                case 1175: return [4 /*yield*/, import("react-icons/fa6")];
                case 1176:
                    FaSignal = (_b.sent()).FaSignal;
                    return [2 /*return*/, FaSignal];
                case 1177: return [4 /*yield*/, import("react-icons/fa6")];
                case 1178:
                    FaSignature = (_b.sent()).FaSignature;
                    return [2 /*return*/, FaSignature];
                case 1179: return [4 /*yield*/, import("react-icons/fa6")];
                case 1180:
                    FaSignsPost = (_b.sent()).FaSignsPost;
                    return [2 /*return*/, FaSignsPost];
                case 1181: return [4 /*yield*/, import("react-icons/fa6")];
                case 1182:
                    FaSimCard = (_b.sent()).FaSimCard;
                    return [2 /*return*/, FaSimCard];
                case 1183: return [4 /*yield*/, import("react-icons/fa6")];
                case 1184:
                    FaSink = (_b.sent()).FaSink;
                    return [2 /*return*/, FaSink];
                case 1185: return [4 /*yield*/, import("react-icons/fa6")];
                case 1186:
                    FaSitemap = (_b.sent()).FaSitemap;
                    return [2 /*return*/, FaSitemap];
                case 1187: return [4 /*yield*/, import("react-icons/fa6")];
                case 1188:
                    FaSkullCrossbones = (_b.sent()).FaSkullCrossbones;
                    return [2 /*return*/, FaSkullCrossbones];
                case 1189: return [4 /*yield*/, import("react-icons/fa6")];
                case 1190:
                    FaSkull = (_b.sent()).FaSkull;
                    return [2 /*return*/, FaSkull];
                case 1191: return [4 /*yield*/, import("react-icons/fa6")];
                case 1192:
                    FaSlash = (_b.sent()).FaSlash;
                    return [2 /*return*/, FaSlash];
                case 1193: return [4 /*yield*/, import("react-icons/fa6")];
                case 1194:
                    FaSleigh = (_b.sent()).FaSleigh;
                    return [2 /*return*/, FaSleigh];
                case 1195: return [4 /*yield*/, import("react-icons/fa6")];
                case 1196:
                    FaSliders = (_b.sent()).FaSliders;
                    return [2 /*return*/, FaSliders];
                case 1197: return [4 /*yield*/, import("react-icons/fa6")];
                case 1198:
                    FaSmog = (_b.sent()).FaSmog;
                    return [2 /*return*/, FaSmog];
                case 1199: return [4 /*yield*/, import("react-icons/fa6")];
                case 1200:
                    FaSmoking = (_b.sent()).FaSmoking;
                    return [2 /*return*/, FaSmoking];
                case 1201: return [4 /*yield*/, import("react-icons/fa6")];
                case 1202:
                    FaSnowflake = (_b.sent()).FaSnowflake;
                    return [2 /*return*/, FaSnowflake];
                case 1203: return [4 /*yield*/, import("react-icons/fa6")];
                case 1204:
                    FaSnowman = (_b.sent()).FaSnowman;
                    return [2 /*return*/, FaSnowman];
                case 1205: return [4 /*yield*/, import("react-icons/fa6")];
                case 1206:
                    FaSnowplow = (_b.sent()).FaSnowplow;
                    return [2 /*return*/, FaSnowplow];
                case 1207: return [4 /*yield*/, import("react-icons/fa6")];
                case 1208:
                    FaSoap = (_b.sent()).FaSoap;
                    return [2 /*return*/, FaSoap];
                case 1209: return [4 /*yield*/, import("react-icons/fa6")];
                case 1210:
                    FaSocks = (_b.sent()).FaSocks;
                    return [2 /*return*/, FaSocks];
                case 1211: return [4 /*yield*/, import("react-icons/fa6")];
                case 1212:
                    FaSolarPanel = (_b.sent()).FaSolarPanel;
                    return [2 /*return*/, FaSolarPanel];
                case 1213: return [4 /*yield*/, import("react-icons/fa6")];
                case 1214:
                    FaSortDown = (_b.sent()).FaSortDown;
                    return [2 /*return*/, FaSortDown];
                case 1215: return [4 /*yield*/, import("react-icons/fa6")];
                case 1216:
                    FaSortUp = (_b.sent()).FaSortUp;
                    return [2 /*return*/, FaSortUp];
                case 1217: return [4 /*yield*/, import("react-icons/fa6")];
                case 1218:
                    FaSort = (_b.sent()).FaSort;
                    return [2 /*return*/, FaSort];
                case 1219: return [4 /*yield*/, import("react-icons/fa6")];
                case 1220:
                    FaSpa = (_b.sent()).FaSpa;
                    return [2 /*return*/, FaSpa];
                case 1221: return [4 /*yield*/, import("react-icons/fa6")];
                case 1222:
                    FaSpaghettiMonsterFlying = (_b.sent()).FaSpaghettiMonsterFlying;
                    return [2 /*return*/, FaSpaghettiMonsterFlying];
                case 1223: return [4 /*yield*/, import("react-icons/fa6")];
                case 1224:
                    FaSpellCheck = (_b.sent()).FaSpellCheck;
                    return [2 /*return*/, FaSpellCheck];
                case 1225: return [4 /*yield*/, import("react-icons/fa6")];
                case 1226:
                    FaSpider = (_b.sent()).FaSpider;
                    return [2 /*return*/, FaSpider];
                case 1227: return [4 /*yield*/, import("react-icons/fa6")];
                case 1228:
                    FaSpinner = (_b.sent()).FaSpinner;
                    return [2 /*return*/, FaSpinner];
                case 1229: return [4 /*yield*/, import("react-icons/fa6")];
                case 1230:
                    FaSplotch = (_b.sent()).FaSplotch;
                    return [2 /*return*/, FaSplotch];
                case 1231: return [4 /*yield*/, import("react-icons/fa6")];
                case 1232:
                    FaSpoon = (_b.sent()).FaSpoon;
                    return [2 /*return*/, FaSpoon];
                case 1233: return [4 /*yield*/, import("react-icons/fa6")];
                case 1234:
                    FaSprayCanSparkles = (_b.sent()).FaSprayCanSparkles;
                    return [2 /*return*/, FaSprayCanSparkles];
                case 1235: return [4 /*yield*/, import("react-icons/fa6")];
                case 1236:
                    FaSprayCan = (_b.sent()).FaSprayCan;
                    return [2 /*return*/, FaSprayCan];
                case 1237: return [4 /*yield*/, import("react-icons/fa6")];
                case 1238:
                    FaSquareArrowUpRight = (_b.sent()).FaSquareArrowUpRight;
                    return [2 /*return*/, FaSquareArrowUpRight];
                case 1239: return [4 /*yield*/, import("react-icons/fa6")];
                case 1240:
                    FaSquareCaretDown = (_b.sent()).FaSquareCaretDown;
                    return [2 /*return*/, FaSquareCaretDown];
                case 1241: return [4 /*yield*/, import("react-icons/fa6")];
                case 1242:
                    FaSquareCaretLeft = (_b.sent()).FaSquareCaretLeft;
                    return [2 /*return*/, FaSquareCaretLeft];
                case 1243: return [4 /*yield*/, import("react-icons/fa6")];
                case 1244:
                    FaSquareCaretRight = (_b.sent()).FaSquareCaretRight;
                    return [2 /*return*/, FaSquareCaretRight];
                case 1245: return [4 /*yield*/, import("react-icons/fa6")];
                case 1246:
                    FaSquareCaretUp = (_b.sent()).FaSquareCaretUp;
                    return [2 /*return*/, FaSquareCaretUp];
                case 1247: return [4 /*yield*/, import("react-icons/fa6")];
                case 1248:
                    FaSquareCheck = (_b.sent()).FaSquareCheck;
                    return [2 /*return*/, FaSquareCheck];
                case 1249: return [4 /*yield*/, import("react-icons/fa6")];
                case 1250:
                    FaSquareEnvelope = (_b.sent()).FaSquareEnvelope;
                    return [2 /*return*/, FaSquareEnvelope];
                case 1251: return [4 /*yield*/, import("react-icons/fa6")];
                case 1252:
                    FaSquareFull = (_b.sent()).FaSquareFull;
                    return [2 /*return*/, FaSquareFull];
                case 1253: return [4 /*yield*/, import("react-icons/fa6")];
                case 1254:
                    FaSquareH = (_b.sent()).FaSquareH;
                    return [2 /*return*/, FaSquareH];
                case 1255: return [4 /*yield*/, import("react-icons/fa6")];
                case 1256:
                    FaSquareMinus = (_b.sent()).FaSquareMinus;
                    return [2 /*return*/, FaSquareMinus];
                case 1257: return [4 /*yield*/, import("react-icons/fa6")];
                case 1258:
                    FaSquareNfi = (_b.sent()).FaSquareNfi;
                    return [2 /*return*/, FaSquareNfi];
                case 1259: return [4 /*yield*/, import("react-icons/fa6")];
                case 1260:
                    FaSquareParking = (_b.sent()).FaSquareParking;
                    return [2 /*return*/, FaSquareParking];
                case 1261: return [4 /*yield*/, import("react-icons/fa6")];
                case 1262:
                    FaSquarePen = (_b.sent()).FaSquarePen;
                    return [2 /*return*/, FaSquarePen];
                case 1263: return [4 /*yield*/, import("react-icons/fa6")];
                case 1264:
                    FaSquarePersonConfined = (_b.sent()).FaSquarePersonConfined;
                    return [2 /*return*/, FaSquarePersonConfined];
                case 1265: return [4 /*yield*/, import("react-icons/fa6")];
                case 1266:
                    FaSquarePhoneFlip = (_b.sent()).FaSquarePhoneFlip;
                    return [2 /*return*/, FaSquarePhoneFlip];
                case 1267: return [4 /*yield*/, import("react-icons/fa6")];
                case 1268:
                    FaSquarePhone = (_b.sent()).FaSquarePhone;
                    return [2 /*return*/, FaSquarePhone];
                case 1269: return [4 /*yield*/, import("react-icons/fa6")];
                case 1270:
                    FaSquarePlus = (_b.sent()).FaSquarePlus;
                    return [2 /*return*/, FaSquarePlus];
                case 1271: return [4 /*yield*/, import("react-icons/fa6")];
                case 1272:
                    FaSquarePollHorizontal = (_b.sent()).FaSquarePollHorizontal;
                    return [2 /*return*/, FaSquarePollHorizontal];
                case 1273: return [4 /*yield*/, import("react-icons/fa6")];
                case 1274:
                    FaSquarePollVertical = (_b.sent()).FaSquarePollVertical;
                    return [2 /*return*/, FaSquarePollVertical];
                case 1275: return [4 /*yield*/, import("react-icons/fa6")];
                case 1276:
                    FaSquareRootVariable = (_b.sent()).FaSquareRootVariable;
                    return [2 /*return*/, FaSquareRootVariable];
                case 1277: return [4 /*yield*/, import("react-icons/fa6")];
                case 1278:
                    FaSquareRss = (_b.sent()).FaSquareRss;
                    return [2 /*return*/, FaSquareRss];
                case 1279: return [4 /*yield*/, import("react-icons/fa6")];
                case 1280:
                    FaSquareShareNodes = (_b.sent()).FaSquareShareNodes;
                    return [2 /*return*/, FaSquareShareNodes];
                case 1281: return [4 /*yield*/, import("react-icons/fa6")];
                case 1282:
                    FaSquareUpRight = (_b.sent()).FaSquareUpRight;
                    return [2 /*return*/, FaSquareUpRight];
                case 1283: return [4 /*yield*/, import("react-icons/fa6")];
                case 1284:
                    FaSquareVirus = (_b.sent()).FaSquareVirus;
                    return [2 /*return*/, FaSquareVirus];
                case 1285: return [4 /*yield*/, import("react-icons/fa6")];
                case 1286:
                    FaSquareXmark = (_b.sent()).FaSquareXmark;
                    return [2 /*return*/, FaSquareXmark];
                case 1287: return [4 /*yield*/, import("react-icons/fa6")];
                case 1288:
                    FaSquare = (_b.sent()).FaSquare;
                    return [2 /*return*/, FaSquare];
                case 1289: return [4 /*yield*/, import("react-icons/fa6")];
                case 1290:
                    FaStaffSnake = (_b.sent()).FaStaffSnake;
                    return [2 /*return*/, FaStaffSnake];
                case 1291: return [4 /*yield*/, import("react-icons/fa6")];
                case 1292:
                    FaStairs = (_b.sent()).FaStairs;
                    return [2 /*return*/, FaStairs];
                case 1293: return [4 /*yield*/, import("react-icons/fa6")];
                case 1294:
                    FaStamp = (_b.sent()).FaStamp;
                    return [2 /*return*/, FaStamp];
                case 1295: return [4 /*yield*/, import("react-icons/fa6")];
                case 1296:
                    FaStapler = (_b.sent()).FaStapler;
                    return [2 /*return*/, FaStapler];
                case 1297: return [4 /*yield*/, import("react-icons/fa6")];
                case 1298:
                    FaStarAndCrescent = (_b.sent()).FaStarAndCrescent;
                    return [2 /*return*/, FaStarAndCrescent];
                case 1299: return [4 /*yield*/, import("react-icons/fa6")];
                case 1300:
                    FaStarHalfStroke = (_b.sent()).FaStarHalfStroke;
                    return [2 /*return*/, FaStarHalfStroke];
                case 1301: return [4 /*yield*/, import("react-icons/fa6")];
                case 1302:
                    FaStarHalf = (_b.sent()).FaStarHalf;
                    return [2 /*return*/, FaStarHalf];
                case 1303: return [4 /*yield*/, import("react-icons/fa6")];
                case 1304:
                    FaStarOfDavid = (_b.sent()).FaStarOfDavid;
                    return [2 /*return*/, FaStarOfDavid];
                case 1305: return [4 /*yield*/, import("react-icons/fa6")];
                case 1306:
                    FaStarOfLife = (_b.sent()).FaStarOfLife;
                    return [2 /*return*/, FaStarOfLife];
                case 1307: return [4 /*yield*/, import("react-icons/fa6")];
                case 1308:
                    FaStar = (_b.sent()).FaStar;
                    return [2 /*return*/, FaStar];
                case 1309: return [4 /*yield*/, import("react-icons/fa6")];
                case 1310:
                    FaSterlingSign = (_b.sent()).FaSterlingSign;
                    return [2 /*return*/, FaSterlingSign];
                case 1311: return [4 /*yield*/, import("react-icons/fa6")];
                case 1312:
                    FaStethoscope = (_b.sent()).FaStethoscope;
                    return [2 /*return*/, FaStethoscope];
                case 1313: return [4 /*yield*/, import("react-icons/fa6")];
                case 1314:
                    FaStop = (_b.sent()).FaStop;
                    return [2 /*return*/, FaStop];
                case 1315: return [4 /*yield*/, import("react-icons/fa6")];
                case 1316:
                    FaStopwatch20 = (_b.sent()).FaStopwatch20;
                    return [2 /*return*/, FaStopwatch20];
                case 1317: return [4 /*yield*/, import("react-icons/fa6")];
                case 1318:
                    FaStopwatch = (_b.sent()).FaStopwatch;
                    return [2 /*return*/, FaStopwatch];
                case 1319: return [4 /*yield*/, import("react-icons/fa6")];
                case 1320:
                    FaStoreSlash = (_b.sent()).FaStoreSlash;
                    return [2 /*return*/, FaStoreSlash];
                case 1321: return [4 /*yield*/, import("react-icons/fa6")];
                case 1322:
                    FaStore = (_b.sent()).FaStore;
                    return [2 /*return*/, FaStore];
                case 1323: return [4 /*yield*/, import("react-icons/fa6")];
                case 1324:
                    FaStreetView = (_b.sent()).FaStreetView;
                    return [2 /*return*/, FaStreetView];
                case 1325: return [4 /*yield*/, import("react-icons/fa6")];
                case 1326:
                    FaStrikethrough = (_b.sent()).FaStrikethrough;
                    return [2 /*return*/, FaStrikethrough];
                case 1327: return [4 /*yield*/, import("react-icons/fa6")];
                case 1328:
                    FaStroopwafel = (_b.sent()).FaStroopwafel;
                    return [2 /*return*/, FaStroopwafel];
                case 1329: return [4 /*yield*/, import("react-icons/fa6")];
                case 1330:
                    FaSubscript = (_b.sent()).FaSubscript;
                    return [2 /*return*/, FaSubscript];
                case 1331: return [4 /*yield*/, import("react-icons/fa6")];
                case 1332:
                    FaSuitcaseMedical = (_b.sent()).FaSuitcaseMedical;
                    return [2 /*return*/, FaSuitcaseMedical];
                case 1333: return [4 /*yield*/, import("react-icons/fa6")];
                case 1334:
                    FaSuitcaseRolling = (_b.sent()).FaSuitcaseRolling;
                    return [2 /*return*/, FaSuitcaseRolling];
                case 1335: return [4 /*yield*/, import("react-icons/fa6")];
                case 1336:
                    FaSuitcase = (_b.sent()).FaSuitcase;
                    return [2 /*return*/, FaSuitcase];
                case 1337: return [4 /*yield*/, import("react-icons/fa6")];
                case 1338:
                    FaSunPlantWilt = (_b.sent()).FaSunPlantWilt;
                    return [2 /*return*/, FaSunPlantWilt];
                case 1339: return [4 /*yield*/, import("react-icons/fa6")];
                case 1340:
                    FaSun = (_b.sent()).FaSun;
                    return [2 /*return*/, FaSun];
                case 1341: return [4 /*yield*/, import("react-icons/fa6")];
                case 1342:
                    FaSuperscript = (_b.sent()).FaSuperscript;
                    return [2 /*return*/, FaSuperscript];
                case 1343: return [4 /*yield*/, import("react-icons/fa6")];
                case 1344:
                    FaSwatchbook = (_b.sent()).FaSwatchbook;
                    return [2 /*return*/, FaSwatchbook];
                case 1345: return [4 /*yield*/, import("react-icons/fa6")];
                case 1346:
                    FaSynagogue = (_b.sent()).FaSynagogue;
                    return [2 /*return*/, FaSynagogue];
                case 1347: return [4 /*yield*/, import("react-icons/fa6")];
                case 1348:
                    FaSyringe = (_b.sent()).FaSyringe;
                    return [2 /*return*/, FaSyringe];
                case 1349: return [4 /*yield*/, import("react-icons/fa6")];
                case 1350:
                    FaT = (_b.sent()).FaT;
                    return [2 /*return*/, FaT];
                case 1351: return [4 /*yield*/, import("react-icons/fa6")];
                case 1352:
                    FaTableCellsColumnLock = (_b.sent()).FaTableCellsColumnLock;
                    return [2 /*return*/, FaTableCellsColumnLock];
                case 1353: return [4 /*yield*/, import("react-icons/fa6")];
                case 1354:
                    FaTableCellsLarge = (_b.sent()).FaTableCellsLarge;
                    return [2 /*return*/, FaTableCellsLarge];
                case 1355: return [4 /*yield*/, import("react-icons/fa6")];
                case 1356:
                    FaTableCellsRowLock = (_b.sent()).FaTableCellsRowLock;
                    return [2 /*return*/, FaTableCellsRowLock];
                case 1357: return [4 /*yield*/, import("react-icons/fa6")];
                case 1358:
                    FaTableCellsRowUnlock = (_b.sent()).FaTableCellsRowUnlock;
                    return [2 /*return*/, FaTableCellsRowUnlock];
                case 1359: return [4 /*yield*/, import("react-icons/fa6")];
                case 1360:
                    FaTableCells = (_b.sent()).FaTableCells;
                    return [2 /*return*/, FaTableCells];
                case 1361: return [4 /*yield*/, import("react-icons/fa6")];
                case 1362:
                    FaTableColumns = (_b.sent()).FaTableColumns;
                    return [2 /*return*/, FaTableColumns];
                case 1363: return [4 /*yield*/, import("react-icons/fa6")];
                case 1364:
                    FaTableList = (_b.sent()).FaTableList;
                    return [2 /*return*/, FaTableList];
                case 1365: return [4 /*yield*/, import("react-icons/fa6")];
                case 1366:
                    FaTableTennisPaddleBall = (_b.sent()).FaTableTennisPaddleBall;
                    return [2 /*return*/, FaTableTennisPaddleBall];
                case 1367: return [4 /*yield*/, import("react-icons/fa6")];
                case 1368:
                    FaTable = (_b.sent()).FaTable;
                    return [2 /*return*/, FaTable];
                case 1369: return [4 /*yield*/, import("react-icons/fa6")];
                case 1370:
                    FaTabletButton = (_b.sent()).FaTabletButton;
                    return [2 /*return*/, FaTabletButton];
                case 1371: return [4 /*yield*/, import("react-icons/fa6")];
                case 1372:
                    FaTabletScreenButton = (_b.sent()).FaTabletScreenButton;
                    return [2 /*return*/, FaTabletScreenButton];
                case 1373: return [4 /*yield*/, import("react-icons/fa6")];
                case 1374:
                    FaTablet = (_b.sent()).FaTablet;
                    return [2 /*return*/, FaTablet];
                case 1375: return [4 /*yield*/, import("react-icons/fa6")];
                case 1376:
                    FaTablets = (_b.sent()).FaTablets;
                    return [2 /*return*/, FaTablets];
                case 1377: return [4 /*yield*/, import("react-icons/fa6")];
                case 1378:
                    FaTachographDigital = (_b.sent()).FaTachographDigital;
                    return [2 /*return*/, FaTachographDigital];
                case 1379: return [4 /*yield*/, import("react-icons/fa6")];
                case 1380:
                    FaTag = (_b.sent()).FaTag;
                    return [2 /*return*/, FaTag];
                case 1381: return [4 /*yield*/, import("react-icons/fa6")];
                case 1382:
                    FaTags = (_b.sent()).FaTags;
                    return [2 /*return*/, FaTags];
                case 1383: return [4 /*yield*/, import("react-icons/fa6")];
                case 1384:
                    FaTape = (_b.sent()).FaTape;
                    return [2 /*return*/, FaTape];
                case 1385: return [4 /*yield*/, import("react-icons/fa6")];
                case 1386:
                    FaTarpDroplet = (_b.sent()).FaTarpDroplet;
                    return [2 /*return*/, FaTarpDroplet];
                case 1387: return [4 /*yield*/, import("react-icons/fa6")];
                case 1388:
                    FaTarp = (_b.sent()).FaTarp;
                    return [2 /*return*/, FaTarp];
                case 1389: return [4 /*yield*/, import("react-icons/fa6")];
                case 1390:
                    FaTaxi = (_b.sent()).FaTaxi;
                    return [2 /*return*/, FaTaxi];
                case 1391: return [4 /*yield*/, import("react-icons/fa6")];
                case 1392:
                    FaTeethOpen = (_b.sent()).FaTeethOpen;
                    return [2 /*return*/, FaTeethOpen];
                case 1393: return [4 /*yield*/, import("react-icons/fa6")];
                case 1394:
                    FaTeeth = (_b.sent()).FaTeeth;
                    return [2 /*return*/, FaTeeth];
                case 1395: return [4 /*yield*/, import("react-icons/fa6")];
                case 1396:
                    FaTemperatureArrowDown = (_b.sent()).FaTemperatureArrowDown;
                    return [2 /*return*/, FaTemperatureArrowDown];
                case 1397: return [4 /*yield*/, import("react-icons/fa6")];
                case 1398:
                    FaTemperatureArrowUp = (_b.sent()).FaTemperatureArrowUp;
                    return [2 /*return*/, FaTemperatureArrowUp];
                case 1399: return [4 /*yield*/, import("react-icons/fa6")];
                case 1400:
                    FaTemperatureEmpty = (_b.sent()).FaTemperatureEmpty;
                    return [2 /*return*/, FaTemperatureEmpty];
                case 1401: return [4 /*yield*/, import("react-icons/fa6")];
                case 1402:
                    FaTemperatureFull = (_b.sent()).FaTemperatureFull;
                    return [2 /*return*/, FaTemperatureFull];
                case 1403: return [4 /*yield*/, import("react-icons/fa6")];
                case 1404:
                    FaTemperatureHalf = (_b.sent()).FaTemperatureHalf;
                    return [2 /*return*/, FaTemperatureHalf];
                case 1405: return [4 /*yield*/, import("react-icons/fa6")];
                case 1406:
                    FaTemperatureHigh = (_b.sent()).FaTemperatureHigh;
                    return [2 /*return*/, FaTemperatureHigh];
                case 1407: return [4 /*yield*/, import("react-icons/fa6")];
                case 1408:
                    FaTemperatureLow = (_b.sent()).FaTemperatureLow;
                    return [2 /*return*/, FaTemperatureLow];
                case 1409: return [4 /*yield*/, import("react-icons/fa6")];
                case 1410:
                    FaTemperatureQuarter = (_b.sent()).FaTemperatureQuarter;
                    return [2 /*return*/, FaTemperatureQuarter];
                case 1411: return [4 /*yield*/, import("react-icons/fa6")];
                case 1412:
                    FaTemperatureThreeQuarters = (_b.sent()).FaTemperatureThreeQuarters;
                    return [2 /*return*/, FaTemperatureThreeQuarters];
                case 1413: return [4 /*yield*/, import("react-icons/fa6")];
                case 1414:
                    FaTengeSign = (_b.sent()).FaTengeSign;
                    return [2 /*return*/, FaTengeSign];
                case 1415: return [4 /*yield*/, import("react-icons/fa6")];
                case 1416:
                    FaTentArrowDownToLine = (_b.sent()).FaTentArrowDownToLine;
                    return [2 /*return*/, FaTentArrowDownToLine];
                case 1417: return [4 /*yield*/, import("react-icons/fa6")];
                case 1418:
                    FaTentArrowLeftRight = (_b.sent()).FaTentArrowLeftRight;
                    return [2 /*return*/, FaTentArrowLeftRight];
                case 1419: return [4 /*yield*/, import("react-icons/fa6")];
                case 1420:
                    FaTentArrowTurnLeft = (_b.sent()).FaTentArrowTurnLeft;
                    return [2 /*return*/, FaTentArrowTurnLeft];
                case 1421: return [4 /*yield*/, import("react-icons/fa6")];
                case 1422:
                    FaTentArrowsDown = (_b.sent()).FaTentArrowsDown;
                    return [2 /*return*/, FaTentArrowsDown];
                case 1423: return [4 /*yield*/, import("react-icons/fa6")];
                case 1424:
                    FaTent = (_b.sent()).FaTent;
                    return [2 /*return*/, FaTent];
                case 1425: return [4 /*yield*/, import("react-icons/fa6")];
                case 1426:
                    FaTents = (_b.sent()).FaTents;
                    return [2 /*return*/, FaTents];
                case 1427: return [4 /*yield*/, import("react-icons/fa6")];
                case 1428:
                    FaTerminal = (_b.sent()).FaTerminal;
                    return [2 /*return*/, FaTerminal];
                case 1429: return [4 /*yield*/, import("react-icons/fa6")];
                case 1430:
                    FaTextHeight = (_b.sent()).FaTextHeight;
                    return [2 /*return*/, FaTextHeight];
                case 1431: return [4 /*yield*/, import("react-icons/fa6")];
                case 1432:
                    FaTextSlash = (_b.sent()).FaTextSlash;
                    return [2 /*return*/, FaTextSlash];
                case 1433: return [4 /*yield*/, import("react-icons/fa6")];
                case 1434:
                    FaTextWidth = (_b.sent()).FaTextWidth;
                    return [2 /*return*/, FaTextWidth];
                case 1435: return [4 /*yield*/, import("react-icons/fa6")];
                case 1436:
                    FaThermometer = (_b.sent()).FaThermometer;
                    return [2 /*return*/, FaThermometer];
                case 1437: return [4 /*yield*/, import("react-icons/fa6")];
                case 1438:
                    FaThumbsDown = (_b.sent()).FaThumbsDown;
                    return [2 /*return*/, FaThumbsDown];
                case 1439: return [4 /*yield*/, import("react-icons/fa6")];
                case 1440:
                    FaThumbsUp = (_b.sent()).FaThumbsUp;
                    return [2 /*return*/, FaThumbsUp];
                case 1441: return [4 /*yield*/, import("react-icons/fa6")];
                case 1442:
                    FaThumbtackSlash = (_b.sent()).FaThumbtackSlash;
                    return [2 /*return*/, FaThumbtackSlash];
                case 1443: return [4 /*yield*/, import("react-icons/fa6")];
                case 1444:
                    FaThumbtack = (_b.sent()).FaThumbtack;
                    return [2 /*return*/, FaThumbtack];
                case 1445: return [4 /*yield*/, import("react-icons/fa6")];
                case 1446:
                    FaTicketSimple = (_b.sent()).FaTicketSimple;
                    return [2 /*return*/, FaTicketSimple];
                case 1447: return [4 /*yield*/, import("react-icons/fa6")];
                case 1448:
                    FaTicket = (_b.sent()).FaTicket;
                    return [2 /*return*/, FaTicket];
                case 1449: return [4 /*yield*/, import("react-icons/fa6")];
                case 1450:
                    FaTimeline = (_b.sent()).FaTimeline;
                    return [2 /*return*/, FaTimeline];
                case 1451: return [4 /*yield*/, import("react-icons/fa6")];
                case 1452:
                    FaToggleOff = (_b.sent()).FaToggleOff;
                    return [2 /*return*/, FaToggleOff];
                case 1453: return [4 /*yield*/, import("react-icons/fa6")];
                case 1454:
                    FaToggleOn = (_b.sent()).FaToggleOn;
                    return [2 /*return*/, FaToggleOn];
                case 1455: return [4 /*yield*/, import("react-icons/fa6")];
                case 1456:
                    FaToiletPaperSlash = (_b.sent()).FaToiletPaperSlash;
                    return [2 /*return*/, FaToiletPaperSlash];
                case 1457: return [4 /*yield*/, import("react-icons/fa6")];
                case 1458:
                    FaToiletPaper = (_b.sent()).FaToiletPaper;
                    return [2 /*return*/, FaToiletPaper];
                case 1459: return [4 /*yield*/, import("react-icons/fa6")];
                case 1460:
                    FaToiletPortable = (_b.sent()).FaToiletPortable;
                    return [2 /*return*/, FaToiletPortable];
                case 1461: return [4 /*yield*/, import("react-icons/fa6")];
                case 1462:
                    FaToilet = (_b.sent()).FaToilet;
                    return [2 /*return*/, FaToilet];
                case 1463: return [4 /*yield*/, import("react-icons/fa6")];
                case 1464:
                    FaToiletsPortable = (_b.sent()).FaToiletsPortable;
                    return [2 /*return*/, FaToiletsPortable];
                case 1465: return [4 /*yield*/, import("react-icons/fa6")];
                case 1466:
                    FaToolbox = (_b.sent()).FaToolbox;
                    return [2 /*return*/, FaToolbox];
                case 1467: return [4 /*yield*/, import("react-icons/fa6")];
                case 1468:
                    FaTooth = (_b.sent()).FaTooth;
                    return [2 /*return*/, FaTooth];
                case 1469: return [4 /*yield*/, import("react-icons/fa6")];
                case 1470:
                    FaToriiGate = (_b.sent()).FaToriiGate;
                    return [2 /*return*/, FaToriiGate];
                case 1471: return [4 /*yield*/, import("react-icons/fa6")];
                case 1472:
                    FaTornado = (_b.sent()).FaTornado;
                    return [2 /*return*/, FaTornado];
                case 1473: return [4 /*yield*/, import("react-icons/fa6")];
                case 1474:
                    FaTowerBroadcast = (_b.sent()).FaTowerBroadcast;
                    return [2 /*return*/, FaTowerBroadcast];
                case 1475: return [4 /*yield*/, import("react-icons/fa6")];
                case 1476:
                    FaTowerCell = (_b.sent()).FaTowerCell;
                    return [2 /*return*/, FaTowerCell];
                case 1477: return [4 /*yield*/, import("react-icons/fa6")];
                case 1478:
                    FaTowerObservation = (_b.sent()).FaTowerObservation;
                    return [2 /*return*/, FaTowerObservation];
                case 1479: return [4 /*yield*/, import("react-icons/fa6")];
                case 1480:
                    FaTractor = (_b.sent()).FaTractor;
                    return [2 /*return*/, FaTractor];
                case 1481: return [4 /*yield*/, import("react-icons/fa6")];
                case 1482:
                    FaTrademark = (_b.sent()).FaTrademark;
                    return [2 /*return*/, FaTrademark];
                case 1483: return [4 /*yield*/, import("react-icons/fa6")];
                case 1484:
                    FaTrafficLight = (_b.sent()).FaTrafficLight;
                    return [2 /*return*/, FaTrafficLight];
                case 1485: return [4 /*yield*/, import("react-icons/fa6")];
                case 1486:
                    FaTrailer = (_b.sent()).FaTrailer;
                    return [2 /*return*/, FaTrailer];
                case 1487: return [4 /*yield*/, import("react-icons/fa6")];
                case 1488:
                    FaTrainSubway = (_b.sent()).FaTrainSubway;
                    return [2 /*return*/, FaTrainSubway];
                case 1489: return [4 /*yield*/, import("react-icons/fa6")];
                case 1490:
                    FaTrainTram = (_b.sent()).FaTrainTram;
                    return [2 /*return*/, FaTrainTram];
                case 1491: return [4 /*yield*/, import("react-icons/fa6")];
                case 1492:
                    FaTrain = (_b.sent()).FaTrain;
                    return [2 /*return*/, FaTrain];
                case 1493: return [4 /*yield*/, import("react-icons/fa6")];
                case 1494:
                    FaTransgender = (_b.sent()).FaTransgender;
                    return [2 /*return*/, FaTransgender];
                case 1495: return [4 /*yield*/, import("react-icons/fa6")];
                case 1496:
                    FaTrashArrowUp = (_b.sent()).FaTrashArrowUp;
                    return [2 /*return*/, FaTrashArrowUp];
                case 1497: return [4 /*yield*/, import("react-icons/fa6")];
                case 1498:
                    FaTrashCanArrowUp = (_b.sent()).FaTrashCanArrowUp;
                    return [2 /*return*/, FaTrashCanArrowUp];
                case 1499: return [4 /*yield*/, import("react-icons/fa6")];
                case 1500:
                    FaTrashCan = (_b.sent()).FaTrashCan;
                    return [2 /*return*/, FaTrashCan];
                case 1501: return [4 /*yield*/, import("react-icons/fa6")];
                case 1502:
                    FaTrash = (_b.sent()).FaTrash;
                    return [2 /*return*/, FaTrash];
                case 1503: return [4 /*yield*/, import("react-icons/fa6")];
                case 1504:
                    FaTreeCity = (_b.sent()).FaTreeCity;
                    return [2 /*return*/, FaTreeCity];
                case 1505: return [4 /*yield*/, import("react-icons/fa6")];
                case 1506:
                    FaTree = (_b.sent()).FaTree;
                    return [2 /*return*/, FaTree];
                case 1507: return [4 /*yield*/, import("react-icons/fa6")];
                case 1508:
                    FaTriangleExclamation = (_b.sent()).FaTriangleExclamation;
                    return [2 /*return*/, FaTriangleExclamation];
                case 1509: return [4 /*yield*/, import("react-icons/fa6")];
                case 1510:
                    FaTrophy = (_b.sent()).FaTrophy;
                    return [2 /*return*/, FaTrophy];
                case 1511: return [4 /*yield*/, import("react-icons/fa6")];
                case 1512:
                    FaTrowelBricks = (_b.sent()).FaTrowelBricks;
                    return [2 /*return*/, FaTrowelBricks];
                case 1513: return [4 /*yield*/, import("react-icons/fa6")];
                case 1514:
                    FaTrowel = (_b.sent()).FaTrowel;
                    return [2 /*return*/, FaTrowel];
                case 1515: return [4 /*yield*/, import("react-icons/fa6")];
                case 1516:
                    FaTruckArrowRight = (_b.sent()).FaTruckArrowRight;
                    return [2 /*return*/, FaTruckArrowRight];
                case 1517: return [4 /*yield*/, import("react-icons/fa6")];
                case 1518:
                    FaTruckDroplet = (_b.sent()).FaTruckDroplet;
                    return [2 /*return*/, FaTruckDroplet];
                case 1519: return [4 /*yield*/, import("react-icons/fa6")];
                case 1520:
                    FaTruckFast = (_b.sent()).FaTruckFast;
                    return [2 /*return*/, FaTruckFast];
                case 1521: return [4 /*yield*/, import("react-icons/fa6")];
                case 1522:
                    FaTruckFieldUn = (_b.sent()).FaTruckFieldUn;
                    return [2 /*return*/, FaTruckFieldUn];
                case 1523: return [4 /*yield*/, import("react-icons/fa6")];
                case 1524:
                    FaTruckField = (_b.sent()).FaTruckField;
                    return [2 /*return*/, FaTruckField];
                case 1525: return [4 /*yield*/, import("react-icons/fa6")];
                case 1526:
                    FaTruckFront = (_b.sent()).FaTruckFront;
                    return [2 /*return*/, FaTruckFront];
                case 1527: return [4 /*yield*/, import("react-icons/fa6")];
                case 1528:
                    FaTruckMedical = (_b.sent()).FaTruckMedical;
                    return [2 /*return*/, FaTruckMedical];
                case 1529: return [4 /*yield*/, import("react-icons/fa6")];
                case 1530:
                    FaTruckMonster = (_b.sent()).FaTruckMonster;
                    return [2 /*return*/, FaTruckMonster];
                case 1531: return [4 /*yield*/, import("react-icons/fa6")];
                case 1532:
                    FaTruckMoving = (_b.sent()).FaTruckMoving;
                    return [2 /*return*/, FaTruckMoving];
                case 1533: return [4 /*yield*/, import("react-icons/fa6")];
                case 1534:
                    FaTruckPickup = (_b.sent()).FaTruckPickup;
                    return [2 /*return*/, FaTruckPickup];
                case 1535: return [4 /*yield*/, import("react-icons/fa6")];
                case 1536:
                    FaTruckPlane = (_b.sent()).FaTruckPlane;
                    return [2 /*return*/, FaTruckPlane];
                case 1537: return [4 /*yield*/, import("react-icons/fa6")];
                case 1538:
                    FaTruckRampBox = (_b.sent()).FaTruckRampBox;
                    return [2 /*return*/, FaTruckRampBox];
                case 1539: return [4 /*yield*/, import("react-icons/fa6")];
                case 1540:
                    FaTruck = (_b.sent()).FaTruck;
                    return [2 /*return*/, FaTruck];
                case 1541: return [4 /*yield*/, import("react-icons/fa6")];
                case 1542:
                    FaTty = (_b.sent()).FaTty;
                    return [2 /*return*/, FaTty];
                case 1543: return [4 /*yield*/, import("react-icons/fa6")];
                case 1544:
                    FaTurkishLiraSign = (_b.sent()).FaTurkishLiraSign;
                    return [2 /*return*/, FaTurkishLiraSign];
                case 1545: return [4 /*yield*/, import("react-icons/fa6")];
                case 1546:
                    FaTurnDown = (_b.sent()).FaTurnDown;
                    return [2 /*return*/, FaTurnDown];
                case 1547: return [4 /*yield*/, import("react-icons/fa6")];
                case 1548:
                    FaTurnUp = (_b.sent()).FaTurnUp;
                    return [2 /*return*/, FaTurnUp];
                case 1549: return [4 /*yield*/, import("react-icons/fa6")];
                case 1550:
                    FaTv = (_b.sent()).FaTv;
                    return [2 /*return*/, FaTv];
                case 1551: return [4 /*yield*/, import("react-icons/fa6")];
                case 1552:
                    FaU = (_b.sent()).FaU;
                    return [2 /*return*/, FaU];
                case 1553: return [4 /*yield*/, import("react-icons/fa6")];
                case 1554:
                    FaUmbrellaBeach = (_b.sent()).FaUmbrellaBeach;
                    return [2 /*return*/, FaUmbrellaBeach];
                case 1555: return [4 /*yield*/, import("react-icons/fa6")];
                case 1556:
                    FaUmbrella = (_b.sent()).FaUmbrella;
                    return [2 /*return*/, FaUmbrella];
                case 1557: return [4 /*yield*/, import("react-icons/fa6")];
                case 1558:
                    FaUnderline = (_b.sent()).FaUnderline;
                    return [2 /*return*/, FaUnderline];
                case 1559: return [4 /*yield*/, import("react-icons/fa6")];
                case 1560:
                    FaUniversalAccess = (_b.sent()).FaUniversalAccess;
                    return [2 /*return*/, FaUniversalAccess];
                case 1561: return [4 /*yield*/, import("react-icons/fa6")];
                case 1562:
                    FaUnlockKeyhole = (_b.sent()).FaUnlockKeyhole;
                    return [2 /*return*/, FaUnlockKeyhole];
                case 1563: return [4 /*yield*/, import("react-icons/fa6")];
                case 1564:
                    FaUnlock = (_b.sent()).FaUnlock;
                    return [2 /*return*/, FaUnlock];
                case 1565: return [4 /*yield*/, import("react-icons/fa6")];
                case 1566:
                    FaUpDownLeftRight = (_b.sent()).FaUpDownLeftRight;
                    return [2 /*return*/, FaUpDownLeftRight];
                case 1567: return [4 /*yield*/, import("react-icons/fa6")];
                case 1568:
                    FaUpDown = (_b.sent()).FaUpDown;
                    return [2 /*return*/, FaUpDown];
                case 1569: return [4 /*yield*/, import("react-icons/fa6")];
                case 1570:
                    FaUpLong = (_b.sent()).FaUpLong;
                    return [2 /*return*/, FaUpLong];
                case 1571: return [4 /*yield*/, import("react-icons/fa6")];
                case 1572:
                    FaUpRightAndDownLeftFromCenter = (_b.sent()).FaUpRightAndDownLeftFromCenter;
                    return [2 /*return*/, FaUpRightAndDownLeftFromCenter];
                case 1573: return [4 /*yield*/, import("react-icons/fa6")];
                case 1574:
                    FaUpRightFromSquare = (_b.sent()).FaUpRightFromSquare;
                    return [2 /*return*/, FaUpRightFromSquare];
                case 1575: return [4 /*yield*/, import("react-icons/fa6")];
                case 1576:
                    FaUpload = (_b.sent()).FaUpload;
                    return [2 /*return*/, FaUpload];
                case 1577: return [4 /*yield*/, import("react-icons/fa6")];
                case 1578:
                    FaUserAstronaut = (_b.sent()).FaUserAstronaut;
                    return [2 /*return*/, FaUserAstronaut];
                case 1579: return [4 /*yield*/, import("react-icons/fa6")];
                case 1580:
                    FaUserCheck = (_b.sent()).FaUserCheck;
                    return [2 /*return*/, FaUserCheck];
                case 1581: return [4 /*yield*/, import("react-icons/fa6")];
                case 1582:
                    FaUserClock = (_b.sent()).FaUserClock;
                    return [2 /*return*/, FaUserClock];
                case 1583: return [4 /*yield*/, import("react-icons/fa6")];
                case 1584:
                    FaUserDoctor = (_b.sent()).FaUserDoctor;
                    return [2 /*return*/, FaUserDoctor];
                case 1585: return [4 /*yield*/, import("react-icons/fa6")];
                case 1586:
                    FaUserGear = (_b.sent()).FaUserGear;
                    return [2 /*return*/, FaUserGear];
                case 1587: return [4 /*yield*/, import("react-icons/fa6")];
                case 1588:
                    FaUserGraduate = (_b.sent()).FaUserGraduate;
                    return [2 /*return*/, FaUserGraduate];
                case 1589: return [4 /*yield*/, import("react-icons/fa6")];
                case 1590:
                    FaUserGroup = (_b.sent()).FaUserGroup;
                    return [2 /*return*/, FaUserGroup];
                case 1591: return [4 /*yield*/, import("react-icons/fa6")];
                case 1592:
                    FaUserInjured = (_b.sent()).FaUserInjured;
                    return [2 /*return*/, FaUserInjured];
                case 1593: return [4 /*yield*/, import("react-icons/fa6")];
                case 1594:
                    FaUserLargeSlash = (_b.sent()).FaUserLargeSlash;
                    return [2 /*return*/, FaUserLargeSlash];
                case 1595: return [4 /*yield*/, import("react-icons/fa6")];
                case 1596:
                    FaUserLarge = (_b.sent()).FaUserLarge;
                    return [2 /*return*/, FaUserLarge];
                case 1597: return [4 /*yield*/, import("react-icons/fa6")];
                case 1598:
                    FaUserLock = (_b.sent()).FaUserLock;
                    return [2 /*return*/, FaUserLock];
                case 1599: return [4 /*yield*/, import("react-icons/fa6")];
                case 1600:
                    FaUserMinus = (_b.sent()).FaUserMinus;
                    return [2 /*return*/, FaUserMinus];
                case 1601: return [4 /*yield*/, import("react-icons/fa6")];
                case 1602:
                    FaUserNinja = (_b.sent()).FaUserNinja;
                    return [2 /*return*/, FaUserNinja];
                case 1603: return [4 /*yield*/, import("react-icons/fa6")];
                case 1604:
                    FaUserNurse = (_b.sent()).FaUserNurse;
                    return [2 /*return*/, FaUserNurse];
                case 1605: return [4 /*yield*/, import("react-icons/fa6")];
                case 1606:
                    FaUserPen = (_b.sent()).FaUserPen;
                    return [2 /*return*/, FaUserPen];
                case 1607: return [4 /*yield*/, import("react-icons/fa6")];
                case 1608:
                    FaUserPlus = (_b.sent()).FaUserPlus;
                    return [2 /*return*/, FaUserPlus];
                case 1609: return [4 /*yield*/, import("react-icons/fa6")];
                case 1610:
                    FaUserSecret = (_b.sent()).FaUserSecret;
                    return [2 /*return*/, FaUserSecret];
                case 1611: return [4 /*yield*/, import("react-icons/fa6")];
                case 1612:
                    FaUserShield = (_b.sent()).FaUserShield;
                    return [2 /*return*/, FaUserShield];
                case 1613: return [4 /*yield*/, import("react-icons/fa6")];
                case 1614:
                    FaUserSlash = (_b.sent()).FaUserSlash;
                    return [2 /*return*/, FaUserSlash];
                case 1615: return [4 /*yield*/, import("react-icons/fa6")];
                case 1616:
                    FaUserTag = (_b.sent()).FaUserTag;
                    return [2 /*return*/, FaUserTag];
                case 1617: return [4 /*yield*/, import("react-icons/fa6")];
                case 1618:
                    FaUserTie = (_b.sent()).FaUserTie;
                    return [2 /*return*/, FaUserTie];
                case 1619: return [4 /*yield*/, import("react-icons/fa6")];
                case 1620:
                    FaUserXmark = (_b.sent()).FaUserXmark;
                    return [2 /*return*/, FaUserXmark];
                case 1621: return [4 /*yield*/, import("react-icons/fa6")];
                case 1622:
                    FaUser = (_b.sent()).FaUser;
                    return [2 /*return*/, FaUser];
                case 1623: return [4 /*yield*/, import("react-icons/fa6")];
                case 1624:
                    FaUsersBetweenLines = (_b.sent()).FaUsersBetweenLines;
                    return [2 /*return*/, FaUsersBetweenLines];
                case 1625: return [4 /*yield*/, import("react-icons/fa6")];
                case 1626:
                    FaUsersGear = (_b.sent()).FaUsersGear;
                    return [2 /*return*/, FaUsersGear];
                case 1627: return [4 /*yield*/, import("react-icons/fa6")];
                case 1628:
                    FaUsersLine = (_b.sent()).FaUsersLine;
                    return [2 /*return*/, FaUsersLine];
                case 1629: return [4 /*yield*/, import("react-icons/fa6")];
                case 1630:
                    FaUsersRays = (_b.sent()).FaUsersRays;
                    return [2 /*return*/, FaUsersRays];
                case 1631: return [4 /*yield*/, import("react-icons/fa6")];
                case 1632:
                    FaUsersRectangle = (_b.sent()).FaUsersRectangle;
                    return [2 /*return*/, FaUsersRectangle];
                case 1633: return [4 /*yield*/, import("react-icons/fa6")];
                case 1634:
                    FaUsersSlash = (_b.sent()).FaUsersSlash;
                    return [2 /*return*/, FaUsersSlash];
                case 1635: return [4 /*yield*/, import("react-icons/fa6")];
                case 1636:
                    FaUsersViewfinder = (_b.sent()).FaUsersViewfinder;
                    return [2 /*return*/, FaUsersViewfinder];
                case 1637: return [4 /*yield*/, import("react-icons/fa6")];
                case 1638:
                    FaUsers = (_b.sent()).FaUsers;
                    return [2 /*return*/, FaUsers];
                case 1639: return [4 /*yield*/, import("react-icons/fa6")];
                case 1640:
                    FaUtensils = (_b.sent()).FaUtensils;
                    return [2 /*return*/, FaUtensils];
                case 1641: return [4 /*yield*/, import("react-icons/fa6")];
                case 1642:
                    FaV = (_b.sent()).FaV;
                    return [2 /*return*/, FaV];
                case 1643: return [4 /*yield*/, import("react-icons/fa6")];
                case 1644:
                    FaVanShuttle = (_b.sent()).FaVanShuttle;
                    return [2 /*return*/, FaVanShuttle];
                case 1645: return [4 /*yield*/, import("react-icons/fa6")];
                case 1646:
                    FaVault = (_b.sent()).FaVault;
                    return [2 /*return*/, FaVault];
                case 1647: return [4 /*yield*/, import("react-icons/fa6")];
                case 1648:
                    FaVectorSquare = (_b.sent()).FaVectorSquare;
                    return [2 /*return*/, FaVectorSquare];
                case 1649: return [4 /*yield*/, import("react-icons/fa6")];
                case 1650:
                    FaVenusDouble = (_b.sent()).FaVenusDouble;
                    return [2 /*return*/, FaVenusDouble];
                case 1651: return [4 /*yield*/, import("react-icons/fa6")];
                case 1652:
                    FaVenusMars = (_b.sent()).FaVenusMars;
                    return [2 /*return*/, FaVenusMars];
                case 1653: return [4 /*yield*/, import("react-icons/fa6")];
                case 1654:
                    FaVenus = (_b.sent()).FaVenus;
                    return [2 /*return*/, FaVenus];
                case 1655: return [4 /*yield*/, import("react-icons/fa6")];
                case 1656:
                    FaVestPatches = (_b.sent()).FaVestPatches;
                    return [2 /*return*/, FaVestPatches];
                case 1657: return [4 /*yield*/, import("react-icons/fa6")];
                case 1658:
                    FaVest = (_b.sent()).FaVest;
                    return [2 /*return*/, FaVest];
                case 1659: return [4 /*yield*/, import("react-icons/fa6")];
                case 1660:
                    FaVialCircleCheck = (_b.sent()).FaVialCircleCheck;
                    return [2 /*return*/, FaVialCircleCheck];
                case 1661: return [4 /*yield*/, import("react-icons/fa6")];
                case 1662:
                    FaVialVirus = (_b.sent()).FaVialVirus;
                    return [2 /*return*/, FaVialVirus];
                case 1663: return [4 /*yield*/, import("react-icons/fa6")];
                case 1664:
                    FaVial = (_b.sent()).FaVial;
                    return [2 /*return*/, FaVial];
                case 1665: return [4 /*yield*/, import("react-icons/fa6")];
                case 1666:
                    FaVials = (_b.sent()).FaVials;
                    return [2 /*return*/, FaVials];
                case 1667: return [4 /*yield*/, import("react-icons/fa6")];
                case 1668:
                    FaVideoSlash = (_b.sent()).FaVideoSlash;
                    return [2 /*return*/, FaVideoSlash];
                case 1669: return [4 /*yield*/, import("react-icons/fa6")];
                case 1670:
                    FaVideo = (_b.sent()).FaVideo;
                    return [2 /*return*/, FaVideo];
                case 1671: return [4 /*yield*/, import("react-icons/fa6")];
                case 1672:
                    FaVihara = (_b.sent()).FaVihara;
                    return [2 /*return*/, FaVihara];
                case 1673: return [4 /*yield*/, import("react-icons/fa6")];
                case 1674:
                    FaVirusCovidSlash = (_b.sent()).FaVirusCovidSlash;
                    return [2 /*return*/, FaVirusCovidSlash];
                case 1675: return [4 /*yield*/, import("react-icons/fa6")];
                case 1676:
                    FaVirusCovid = (_b.sent()).FaVirusCovid;
                    return [2 /*return*/, FaVirusCovid];
                case 1677: return [4 /*yield*/, import("react-icons/fa6")];
                case 1678:
                    FaVirusSlash = (_b.sent()).FaVirusSlash;
                    return [2 /*return*/, FaVirusSlash];
                case 1679: return [4 /*yield*/, import("react-icons/fa6")];
                case 1680:
                    FaVirus = (_b.sent()).FaVirus;
                    return [2 /*return*/, FaVirus];
                case 1681: return [4 /*yield*/, import("react-icons/fa6")];
                case 1682:
                    FaViruses = (_b.sent()).FaViruses;
                    return [2 /*return*/, FaViruses];
                case 1683: return [4 /*yield*/, import("react-icons/fa6")];
                case 1684:
                    FaVoicemail = (_b.sent()).FaVoicemail;
                    return [2 /*return*/, FaVoicemail];
                case 1685: return [4 /*yield*/, import("react-icons/fa6")];
                case 1686:
                    FaVolcano = (_b.sent()).FaVolcano;
                    return [2 /*return*/, FaVolcano];
                case 1687: return [4 /*yield*/, import("react-icons/fa6")];
                case 1688:
                    FaVolleyball = (_b.sent()).FaVolleyball;
                    return [2 /*return*/, FaVolleyball];
                case 1689: return [4 /*yield*/, import("react-icons/fa6")];
                case 1690:
                    FaVolumeHigh = (_b.sent()).FaVolumeHigh;
                    return [2 /*return*/, FaVolumeHigh];
                case 1691: return [4 /*yield*/, import("react-icons/fa6")];
                case 1692:
                    FaVolumeLow = (_b.sent()).FaVolumeLow;
                    return [2 /*return*/, FaVolumeLow];
                case 1693: return [4 /*yield*/, import("react-icons/fa6")];
                case 1694:
                    FaVolumeOff = (_b.sent()).FaVolumeOff;
                    return [2 /*return*/, FaVolumeOff];
                case 1695: return [4 /*yield*/, import("react-icons/fa6")];
                case 1696:
                    FaVolumeXmark = (_b.sent()).FaVolumeXmark;
                    return [2 /*return*/, FaVolumeXmark];
                case 1697: return [4 /*yield*/, import("react-icons/fa6")];
                case 1698:
                    FaVrCardboard = (_b.sent()).FaVrCardboard;
                    return [2 /*return*/, FaVrCardboard];
                case 1699: return [4 /*yield*/, import("react-icons/fa6")];
                case 1700:
                    FaW = (_b.sent()).FaW;
                    return [2 /*return*/, FaW];
                case 1701: return [4 /*yield*/, import("react-icons/fa6")];
                case 1702:
                    FaWalkieTalkie = (_b.sent()).FaWalkieTalkie;
                    return [2 /*return*/, FaWalkieTalkie];
                case 1703: return [4 /*yield*/, import("react-icons/fa6")];
                case 1704:
                    FaWallet = (_b.sent()).FaWallet;
                    return [2 /*return*/, FaWallet];
                case 1705: return [4 /*yield*/, import("react-icons/fa6")];
                case 1706:
                    FaWandMagicSparkles = (_b.sent()).FaWandMagicSparkles;
                    return [2 /*return*/, FaWandMagicSparkles];
                case 1707: return [4 /*yield*/, import("react-icons/fa6")];
                case 1708:
                    FaWandMagic = (_b.sent()).FaWandMagic;
                    return [2 /*return*/, FaWandMagic];
                case 1709: return [4 /*yield*/, import("react-icons/fa6")];
                case 1710:
                    FaWandSparkles = (_b.sent()).FaWandSparkles;
                    return [2 /*return*/, FaWandSparkles];
                case 1711: return [4 /*yield*/, import("react-icons/fa6")];
                case 1712:
                    FaWarehouse = (_b.sent()).FaWarehouse;
                    return [2 /*return*/, FaWarehouse];
                case 1713: return [4 /*yield*/, import("react-icons/fa6")];
                case 1714:
                    FaWaterLadder = (_b.sent()).FaWaterLadder;
                    return [2 /*return*/, FaWaterLadder];
                case 1715: return [4 /*yield*/, import("react-icons/fa6")];
                case 1716:
                    FaWater = (_b.sent()).FaWater;
                    return [2 /*return*/, FaWater];
                case 1717: return [4 /*yield*/, import("react-icons/fa6")];
                case 1718:
                    FaWaveSquare = (_b.sent()).FaWaveSquare;
                    return [2 /*return*/, FaWaveSquare];
                case 1719: return [4 /*yield*/, import("react-icons/fa6")];
                case 1720:
                    FaWeightHanging = (_b.sent()).FaWeightHanging;
                    return [2 /*return*/, FaWeightHanging];
                case 1721: return [4 /*yield*/, import("react-icons/fa6")];
                case 1722:
                    FaWeightScale = (_b.sent()).FaWeightScale;
                    return [2 /*return*/, FaWeightScale];
                case 1723: return [4 /*yield*/, import("react-icons/fa6")];
                case 1724:
                    FaWheatAwnCircleExclamation = (_b.sent()).FaWheatAwnCircleExclamation;
                    return [2 /*return*/, FaWheatAwnCircleExclamation];
                case 1725: return [4 /*yield*/, import("react-icons/fa6")];
                case 1726:
                    FaWheatAwn = (_b.sent()).FaWheatAwn;
                    return [2 /*return*/, FaWheatAwn];
                case 1727: return [4 /*yield*/, import("react-icons/fa6")];
                case 1728:
                    FaWheelchairMove = (_b.sent()).FaWheelchairMove;
                    return [2 /*return*/, FaWheelchairMove];
                case 1729: return [4 /*yield*/, import("react-icons/fa6")];
                case 1730:
                    FaWheelchair = (_b.sent()).FaWheelchair;
                    return [2 /*return*/, FaWheelchair];
                case 1731: return [4 /*yield*/, import("react-icons/fa6")];
                case 1732:
                    FaWhiskeyGlass = (_b.sent()).FaWhiskeyGlass;
                    return [2 /*return*/, FaWhiskeyGlass];
                case 1733: return [4 /*yield*/, import("react-icons/fa6")];
                case 1734:
                    FaWifi = (_b.sent()).FaWifi;
                    return [2 /*return*/, FaWifi];
                case 1735: return [4 /*yield*/, import("react-icons/fa6")];
                case 1736:
                    FaWind = (_b.sent()).FaWind;
                    return [2 /*return*/, FaWind];
                case 1737: return [4 /*yield*/, import("react-icons/fa6")];
                case 1738:
                    FaWindowMaximize = (_b.sent()).FaWindowMaximize;
                    return [2 /*return*/, FaWindowMaximize];
                case 1739: return [4 /*yield*/, import("react-icons/fa6")];
                case 1740:
                    FaWindowMinimize = (_b.sent()).FaWindowMinimize;
                    return [2 /*return*/, FaWindowMinimize];
                case 1741: return [4 /*yield*/, import("react-icons/fa6")];
                case 1742:
                    FaWindowRestore = (_b.sent()).FaWindowRestore;
                    return [2 /*return*/, FaWindowRestore];
                case 1743: return [4 /*yield*/, import("react-icons/fa6")];
                case 1744:
                    FaWineBottle = (_b.sent()).FaWineBottle;
                    return [2 /*return*/, FaWineBottle];
                case 1745: return [4 /*yield*/, import("react-icons/fa6")];
                case 1746:
                    FaWineGlassEmpty = (_b.sent()).FaWineGlassEmpty;
                    return [2 /*return*/, FaWineGlassEmpty];
                case 1747: return [4 /*yield*/, import("react-icons/fa6")];
                case 1748:
                    FaWineGlass = (_b.sent()).FaWineGlass;
                    return [2 /*return*/, FaWineGlass];
                case 1749: return [4 /*yield*/, import("react-icons/fa6")];
                case 1750:
                    FaWonSign = (_b.sent()).FaWonSign;
                    return [2 /*return*/, FaWonSign];
                case 1751: return [4 /*yield*/, import("react-icons/fa6")];
                case 1752:
                    FaWorm = (_b.sent()).FaWorm;
                    return [2 /*return*/, FaWorm];
                case 1753: return [4 /*yield*/, import("react-icons/fa6")];
                case 1754:
                    FaWrench = (_b.sent()).FaWrench;
                    return [2 /*return*/, FaWrench];
                case 1755: return [4 /*yield*/, import("react-icons/fa6")];
                case 1756:
                    FaXRay = (_b.sent()).FaXRay;
                    return [2 /*return*/, FaXRay];
                case 1757: return [4 /*yield*/, import("react-icons/fa6")];
                case 1758:
                    FaX = (_b.sent()).FaX;
                    return [2 /*return*/, FaX];
                case 1759: return [4 /*yield*/, import("react-icons/fa6")];
                case 1760:
                    FaXmark = (_b.sent()).FaXmark;
                    return [2 /*return*/, FaXmark];
                case 1761: return [4 /*yield*/, import("react-icons/fa6")];
                case 1762:
                    FaXmarksLines = (_b.sent()).FaXmarksLines;
                    return [2 /*return*/, FaXmarksLines];
                case 1763: return [4 /*yield*/, import("react-icons/fa6")];
                case 1764:
                    FaY = (_b.sent()).FaY;
                    return [2 /*return*/, FaY];
                case 1765: return [4 /*yield*/, import("react-icons/fa6")];
                case 1766:
                    FaYenSign = (_b.sent()).FaYenSign;
                    return [2 /*return*/, FaYenSign];
                case 1767: return [4 /*yield*/, import("react-icons/fa6")];
                case 1768:
                    FaYinYang = (_b.sent()).FaYinYang;
                    return [2 /*return*/, FaYinYang];
                case 1769: return [4 /*yield*/, import("react-icons/fa6")];
                case 1770:
                    FaZ = (_b.sent()).FaZ;
                    return [2 /*return*/, FaZ];
                case 1771: return [4 /*yield*/, import("react-icons/fa6")];
                case 1772:
                    FaRegAddressBook = (_b.sent()).FaRegAddressBook;
                    return [2 /*return*/, FaRegAddressBook];
                case 1773: return [4 /*yield*/, import("react-icons/fa6")];
                case 1774:
                    FaRegAddressCard = (_b.sent()).FaRegAddressCard;
                    return [2 /*return*/, FaRegAddressCard];
                case 1775: return [4 /*yield*/, import("react-icons/fa6")];
                case 1776:
                    FaRegBellSlash = (_b.sent()).FaRegBellSlash;
                    return [2 /*return*/, FaRegBellSlash];
                case 1777: return [4 /*yield*/, import("react-icons/fa6")];
                case 1778:
                    FaRegBell = (_b.sent()).FaRegBell;
                    return [2 /*return*/, FaRegBell];
                case 1779: return [4 /*yield*/, import("react-icons/fa6")];
                case 1780:
                    FaRegBookmark = (_b.sent()).FaRegBookmark;
                    return [2 /*return*/, FaRegBookmark];
                case 1781: return [4 /*yield*/, import("react-icons/fa6")];
                case 1782:
                    FaRegBuilding = (_b.sent()).FaRegBuilding;
                    return [2 /*return*/, FaRegBuilding];
                case 1783: return [4 /*yield*/, import("react-icons/fa6")];
                case 1784:
                    FaRegCalendarCheck = (_b.sent()).FaRegCalendarCheck;
                    return [2 /*return*/, FaRegCalendarCheck];
                case 1785: return [4 /*yield*/, import("react-icons/fa6")];
                case 1786:
                    FaRegCalendarDays = (_b.sent()).FaRegCalendarDays;
                    return [2 /*return*/, FaRegCalendarDays];
                case 1787: return [4 /*yield*/, import("react-icons/fa6")];
                case 1788:
                    FaRegCalendarMinus = (_b.sent()).FaRegCalendarMinus;
                    return [2 /*return*/, FaRegCalendarMinus];
                case 1789: return [4 /*yield*/, import("react-icons/fa6")];
                case 1790:
                    FaRegCalendarPlus = (_b.sent()).FaRegCalendarPlus;
                    return [2 /*return*/, FaRegCalendarPlus];
                case 1791: return [4 /*yield*/, import("react-icons/fa6")];
                case 1792:
                    FaRegCalendarXmark = (_b.sent()).FaRegCalendarXmark;
                    return [2 /*return*/, FaRegCalendarXmark];
                case 1793: return [4 /*yield*/, import("react-icons/fa6")];
                case 1794:
                    FaRegCalendar = (_b.sent()).FaRegCalendar;
                    return [2 /*return*/, FaRegCalendar];
                case 1795: return [4 /*yield*/, import("react-icons/fa6")];
                case 1796:
                    FaRegChartBar = (_b.sent()).FaRegChartBar;
                    return [2 /*return*/, FaRegChartBar];
                case 1797: return [4 /*yield*/, import("react-icons/fa6")];
                case 1798:
                    FaRegChessBishop = (_b.sent()).FaRegChessBishop;
                    return [2 /*return*/, FaRegChessBishop];
                case 1799: return [4 /*yield*/, import("react-icons/fa6")];
                case 1800:
                    FaRegChessKing = (_b.sent()).FaRegChessKing;
                    return [2 /*return*/, FaRegChessKing];
                case 1801: return [4 /*yield*/, import("react-icons/fa6")];
                case 1802:
                    FaRegChessKnight = (_b.sent()).FaRegChessKnight;
                    return [2 /*return*/, FaRegChessKnight];
                case 1803: return [4 /*yield*/, import("react-icons/fa6")];
                case 1804:
                    FaRegChessPawn = (_b.sent()).FaRegChessPawn;
                    return [2 /*return*/, FaRegChessPawn];
                case 1805: return [4 /*yield*/, import("react-icons/fa6")];
                case 1806:
                    FaRegChessQueen = (_b.sent()).FaRegChessQueen;
                    return [2 /*return*/, FaRegChessQueen];
                case 1807: return [4 /*yield*/, import("react-icons/fa6")];
                case 1808:
                    FaRegChessRook = (_b.sent()).FaRegChessRook;
                    return [2 /*return*/, FaRegChessRook];
                case 1809: return [4 /*yield*/, import("react-icons/fa6")];
                case 1810:
                    FaRegCircleCheck = (_b.sent()).FaRegCircleCheck;
                    return [2 /*return*/, FaRegCircleCheck];
                case 1811: return [4 /*yield*/, import("react-icons/fa6")];
                case 1812:
                    FaRegCircleDot = (_b.sent()).FaRegCircleDot;
                    return [2 /*return*/, FaRegCircleDot];
                case 1813: return [4 /*yield*/, import("react-icons/fa6")];
                case 1814:
                    FaRegCircleDown = (_b.sent()).FaRegCircleDown;
                    return [2 /*return*/, FaRegCircleDown];
                case 1815: return [4 /*yield*/, import("react-icons/fa6")];
                case 1816:
                    FaRegCircleLeft = (_b.sent()).FaRegCircleLeft;
                    return [2 /*return*/, FaRegCircleLeft];
                case 1817: return [4 /*yield*/, import("react-icons/fa6")];
                case 1818:
                    FaRegCirclePause = (_b.sent()).FaRegCirclePause;
                    return [2 /*return*/, FaRegCirclePause];
                case 1819: return [4 /*yield*/, import("react-icons/fa6")];
                case 1820:
                    FaRegCirclePlay = (_b.sent()).FaRegCirclePlay;
                    return [2 /*return*/, FaRegCirclePlay];
                case 1821: return [4 /*yield*/, import("react-icons/fa6")];
                case 1822:
                    FaRegCircleQuestion = (_b.sent()).FaRegCircleQuestion;
                    return [2 /*return*/, FaRegCircleQuestion];
                case 1823: return [4 /*yield*/, import("react-icons/fa6")];
                case 1824:
                    FaRegCircleRight = (_b.sent()).FaRegCircleRight;
                    return [2 /*return*/, FaRegCircleRight];
                case 1825: return [4 /*yield*/, import("react-icons/fa6")];
                case 1826:
                    FaRegCircleStop = (_b.sent()).FaRegCircleStop;
                    return [2 /*return*/, FaRegCircleStop];
                case 1827: return [4 /*yield*/, import("react-icons/fa6")];
                case 1828:
                    FaRegCircleUp = (_b.sent()).FaRegCircleUp;
                    return [2 /*return*/, FaRegCircleUp];
                case 1829: return [4 /*yield*/, import("react-icons/fa6")];
                case 1830:
                    FaRegCircleUser = (_b.sent()).FaRegCircleUser;
                    return [2 /*return*/, FaRegCircleUser];
                case 1831: return [4 /*yield*/, import("react-icons/fa6")];
                case 1832:
                    FaRegCircleXmark = (_b.sent()).FaRegCircleXmark;
                    return [2 /*return*/, FaRegCircleXmark];
                case 1833: return [4 /*yield*/, import("react-icons/fa6")];
                case 1834:
                    FaRegCircle = (_b.sent()).FaRegCircle;
                    return [2 /*return*/, FaRegCircle];
                case 1835: return [4 /*yield*/, import("react-icons/fa6")];
                case 1836:
                    FaRegClipboard = (_b.sent()).FaRegClipboard;
                    return [2 /*return*/, FaRegClipboard];
                case 1837: return [4 /*yield*/, import("react-icons/fa6")];
                case 1838:
                    FaRegClock = (_b.sent()).FaRegClock;
                    return [2 /*return*/, FaRegClock];
                case 1839: return [4 /*yield*/, import("react-icons/fa6")];
                case 1840:
                    FaRegClone = (_b.sent()).FaRegClone;
                    return [2 /*return*/, FaRegClone];
                case 1841: return [4 /*yield*/, import("react-icons/fa6")];
                case 1842:
                    FaRegClosedCaptioning = (_b.sent()).FaRegClosedCaptioning;
                    return [2 /*return*/, FaRegClosedCaptioning];
                case 1843: return [4 /*yield*/, import("react-icons/fa6")];
                case 1844:
                    FaRegCommentDots = (_b.sent()).FaRegCommentDots;
                    return [2 /*return*/, FaRegCommentDots];
                case 1845: return [4 /*yield*/, import("react-icons/fa6")];
                case 1846:
                    FaRegComment = (_b.sent()).FaRegComment;
                    return [2 /*return*/, FaRegComment];
                case 1847: return [4 /*yield*/, import("react-icons/fa6")];
                case 1848:
                    FaRegComments = (_b.sent()).FaRegComments;
                    return [2 /*return*/, FaRegComments];
                case 1849: return [4 /*yield*/, import("react-icons/fa6")];
                case 1850:
                    FaRegCompass = (_b.sent()).FaRegCompass;
                    return [2 /*return*/, FaRegCompass];
                case 1851: return [4 /*yield*/, import("react-icons/fa6")];
                case 1852:
                    FaRegCopy = (_b.sent()).FaRegCopy;
                    return [2 /*return*/, FaRegCopy];
                case 1853: return [4 /*yield*/, import("react-icons/fa6")];
                case 1854:
                    FaRegCopyright = (_b.sent()).FaRegCopyright;
                    return [2 /*return*/, FaRegCopyright];
                case 1855: return [4 /*yield*/, import("react-icons/fa6")];
                case 1856:
                    FaRegCreditCard = (_b.sent()).FaRegCreditCard;
                    return [2 /*return*/, FaRegCreditCard];
                case 1857: return [4 /*yield*/, import("react-icons/fa6")];
                case 1858:
                    FaRegEnvelopeOpen = (_b.sent()).FaRegEnvelopeOpen;
                    return [2 /*return*/, FaRegEnvelopeOpen];
                case 1859: return [4 /*yield*/, import("react-icons/fa6")];
                case 1860:
                    FaRegEnvelope = (_b.sent()).FaRegEnvelope;
                    return [2 /*return*/, FaRegEnvelope];
                case 1861: return [4 /*yield*/, import("react-icons/fa6")];
                case 1862:
                    FaRegEyeSlash = (_b.sent()).FaRegEyeSlash;
                    return [2 /*return*/, FaRegEyeSlash];
                case 1863: return [4 /*yield*/, import("react-icons/fa6")];
                case 1864:
                    FaRegEye = (_b.sent()).FaRegEye;
                    return [2 /*return*/, FaRegEye];
                case 1865: return [4 /*yield*/, import("react-icons/fa6")];
                case 1866:
                    FaRegFaceAngry = (_b.sent()).FaRegFaceAngry;
                    return [2 /*return*/, FaRegFaceAngry];
                case 1867: return [4 /*yield*/, import("react-icons/fa6")];
                case 1868:
                    FaRegFaceDizzy = (_b.sent()).FaRegFaceDizzy;
                    return [2 /*return*/, FaRegFaceDizzy];
                case 1869: return [4 /*yield*/, import("react-icons/fa6")];
                case 1870:
                    FaRegFaceFlushed = (_b.sent()).FaRegFaceFlushed;
                    return [2 /*return*/, FaRegFaceFlushed];
                case 1871: return [4 /*yield*/, import("react-icons/fa6")];
                case 1872:
                    FaRegFaceFrownOpen = (_b.sent()).FaRegFaceFrownOpen;
                    return [2 /*return*/, FaRegFaceFrownOpen];
                case 1873: return [4 /*yield*/, import("react-icons/fa6")];
                case 1874:
                    FaRegFaceFrown = (_b.sent()).FaRegFaceFrown;
                    return [2 /*return*/, FaRegFaceFrown];
                case 1875: return [4 /*yield*/, import("react-icons/fa6")];
                case 1876:
                    FaRegFaceGrimace = (_b.sent()).FaRegFaceGrimace;
                    return [2 /*return*/, FaRegFaceGrimace];
                case 1877: return [4 /*yield*/, import("react-icons/fa6")];
                case 1878:
                    FaRegFaceGrinBeamSweat = (_b.sent()).FaRegFaceGrinBeamSweat;
                    return [2 /*return*/, FaRegFaceGrinBeamSweat];
                case 1879: return [4 /*yield*/, import("react-icons/fa6")];
                case 1880:
                    FaRegFaceGrinBeam = (_b.sent()).FaRegFaceGrinBeam;
                    return [2 /*return*/, FaRegFaceGrinBeam];
                case 1881: return [4 /*yield*/, import("react-icons/fa6")];
                case 1882:
                    FaRegFaceGrinHearts = (_b.sent()).FaRegFaceGrinHearts;
                    return [2 /*return*/, FaRegFaceGrinHearts];
                case 1883: return [4 /*yield*/, import("react-icons/fa6")];
                case 1884:
                    FaRegFaceGrinSquintTears = (_b.sent()).FaRegFaceGrinSquintTears;
                    return [2 /*return*/, FaRegFaceGrinSquintTears];
                case 1885: return [4 /*yield*/, import("react-icons/fa6")];
                case 1886:
                    FaRegFaceGrinSquint = (_b.sent()).FaRegFaceGrinSquint;
                    return [2 /*return*/, FaRegFaceGrinSquint];
                case 1887: return [4 /*yield*/, import("react-icons/fa6")];
                case 1888:
                    FaRegFaceGrinStars = (_b.sent()).FaRegFaceGrinStars;
                    return [2 /*return*/, FaRegFaceGrinStars];
                case 1889: return [4 /*yield*/, import("react-icons/fa6")];
                case 1890:
                    FaRegFaceGrinTears = (_b.sent()).FaRegFaceGrinTears;
                    return [2 /*return*/, FaRegFaceGrinTears];
                case 1891: return [4 /*yield*/, import("react-icons/fa6")];
                case 1892:
                    FaRegFaceGrinTongueSquint = (_b.sent()).FaRegFaceGrinTongueSquint;
                    return [2 /*return*/, FaRegFaceGrinTongueSquint];
                case 1893: return [4 /*yield*/, import("react-icons/fa6")];
                case 1894:
                    FaRegFaceGrinTongueWink = (_b.sent()).FaRegFaceGrinTongueWink;
                    return [2 /*return*/, FaRegFaceGrinTongueWink];
                case 1895: return [4 /*yield*/, import("react-icons/fa6")];
                case 1896:
                    FaRegFaceGrinTongue = (_b.sent()).FaRegFaceGrinTongue;
                    return [2 /*return*/, FaRegFaceGrinTongue];
                case 1897: return [4 /*yield*/, import("react-icons/fa6")];
                case 1898:
                    FaRegFaceGrinWide = (_b.sent()).FaRegFaceGrinWide;
                    return [2 /*return*/, FaRegFaceGrinWide];
                case 1899: return [4 /*yield*/, import("react-icons/fa6")];
                case 1900:
                    FaRegFaceGrinWink = (_b.sent()).FaRegFaceGrinWink;
                    return [2 /*return*/, FaRegFaceGrinWink];
                case 1901: return [4 /*yield*/, import("react-icons/fa6")];
                case 1902:
                    FaRegFaceGrin = (_b.sent()).FaRegFaceGrin;
                    return [2 /*return*/, FaRegFaceGrin];
                case 1903: return [4 /*yield*/, import("react-icons/fa6")];
                case 1904:
                    FaRegFaceKissBeam = (_b.sent()).FaRegFaceKissBeam;
                    return [2 /*return*/, FaRegFaceKissBeam];
                case 1905: return [4 /*yield*/, import("react-icons/fa6")];
                case 1906:
                    FaRegFaceKissWinkHeart = (_b.sent()).FaRegFaceKissWinkHeart;
                    return [2 /*return*/, FaRegFaceKissWinkHeart];
                case 1907: return [4 /*yield*/, import("react-icons/fa6")];
                case 1908:
                    FaRegFaceKiss = (_b.sent()).FaRegFaceKiss;
                    return [2 /*return*/, FaRegFaceKiss];
                case 1909: return [4 /*yield*/, import("react-icons/fa6")];
                case 1910:
                    FaRegFaceLaughBeam = (_b.sent()).FaRegFaceLaughBeam;
                    return [2 /*return*/, FaRegFaceLaughBeam];
                case 1911: return [4 /*yield*/, import("react-icons/fa6")];
                case 1912:
                    FaRegFaceLaughSquint = (_b.sent()).FaRegFaceLaughSquint;
                    return [2 /*return*/, FaRegFaceLaughSquint];
                case 1913: return [4 /*yield*/, import("react-icons/fa6")];
                case 1914:
                    FaRegFaceLaughWink = (_b.sent()).FaRegFaceLaughWink;
                    return [2 /*return*/, FaRegFaceLaughWink];
                case 1915: return [4 /*yield*/, import("react-icons/fa6")];
                case 1916:
                    FaRegFaceLaugh = (_b.sent()).FaRegFaceLaugh;
                    return [2 /*return*/, FaRegFaceLaugh];
                case 1917: return [4 /*yield*/, import("react-icons/fa6")];
                case 1918:
                    FaRegFaceMehBlank = (_b.sent()).FaRegFaceMehBlank;
                    return [2 /*return*/, FaRegFaceMehBlank];
                case 1919: return [4 /*yield*/, import("react-icons/fa6")];
                case 1920:
                    FaRegFaceMeh = (_b.sent()).FaRegFaceMeh;
                    return [2 /*return*/, FaRegFaceMeh];
                case 1921: return [4 /*yield*/, import("react-icons/fa6")];
                case 1922:
                    FaRegFaceRollingEyes = (_b.sent()).FaRegFaceRollingEyes;
                    return [2 /*return*/, FaRegFaceRollingEyes];
                case 1923: return [4 /*yield*/, import("react-icons/fa6")];
                case 1924:
                    FaRegFaceSadCry = (_b.sent()).FaRegFaceSadCry;
                    return [2 /*return*/, FaRegFaceSadCry];
                case 1925: return [4 /*yield*/, import("react-icons/fa6")];
                case 1926:
                    FaRegFaceSadTear = (_b.sent()).FaRegFaceSadTear;
                    return [2 /*return*/, FaRegFaceSadTear];
                case 1927: return [4 /*yield*/, import("react-icons/fa6")];
                case 1928:
                    FaRegFaceSmileBeam = (_b.sent()).FaRegFaceSmileBeam;
                    return [2 /*return*/, FaRegFaceSmileBeam];
                case 1929: return [4 /*yield*/, import("react-icons/fa6")];
                case 1930:
                    FaRegFaceSmileWink = (_b.sent()).FaRegFaceSmileWink;
                    return [2 /*return*/, FaRegFaceSmileWink];
                case 1931: return [4 /*yield*/, import("react-icons/fa6")];
                case 1932:
                    FaRegFaceSmile = (_b.sent()).FaRegFaceSmile;
                    return [2 /*return*/, FaRegFaceSmile];
                case 1933: return [4 /*yield*/, import("react-icons/fa6")];
                case 1934:
                    FaRegFaceSurprise = (_b.sent()).FaRegFaceSurprise;
                    return [2 /*return*/, FaRegFaceSurprise];
                case 1935: return [4 /*yield*/, import("react-icons/fa6")];
                case 1936:
                    FaRegFaceTired = (_b.sent()).FaRegFaceTired;
                    return [2 /*return*/, FaRegFaceTired];
                case 1937: return [4 /*yield*/, import("react-icons/fa6")];
                case 1938:
                    FaRegFileAudio = (_b.sent()).FaRegFileAudio;
                    return [2 /*return*/, FaRegFileAudio];
                case 1939: return [4 /*yield*/, import("react-icons/fa6")];
                case 1940:
                    FaRegFileCode = (_b.sent()).FaRegFileCode;
                    return [2 /*return*/, FaRegFileCode];
                case 1941: return [4 /*yield*/, import("react-icons/fa6")];
                case 1942:
                    FaRegFileExcel = (_b.sent()).FaRegFileExcel;
                    return [2 /*return*/, FaRegFileExcel];
                case 1943: return [4 /*yield*/, import("react-icons/fa6")];
                case 1944:
                    FaRegFileImage = (_b.sent()).FaRegFileImage;
                    return [2 /*return*/, FaRegFileImage];
                case 1945: return [4 /*yield*/, import("react-icons/fa6")];
                case 1946:
                    FaRegFileLines = (_b.sent()).FaRegFileLines;
                    return [2 /*return*/, FaRegFileLines];
                case 1947: return [4 /*yield*/, import("react-icons/fa6")];
                case 1948:
                    FaRegFilePdf = (_b.sent()).FaRegFilePdf;
                    return [2 /*return*/, FaRegFilePdf];
                case 1949: return [4 /*yield*/, import("react-icons/fa6")];
                case 1950:
                    FaRegFilePowerpoint = (_b.sent()).FaRegFilePowerpoint;
                    return [2 /*return*/, FaRegFilePowerpoint];
                case 1951: return [4 /*yield*/, import("react-icons/fa6")];
                case 1952:
                    FaRegFileVideo = (_b.sent()).FaRegFileVideo;
                    return [2 /*return*/, FaRegFileVideo];
                case 1953: return [4 /*yield*/, import("react-icons/fa6")];
                case 1954:
                    FaRegFileWord = (_b.sent()).FaRegFileWord;
                    return [2 /*return*/, FaRegFileWord];
                case 1955: return [4 /*yield*/, import("react-icons/fa6")];
                case 1956:
                    FaRegFileZipper = (_b.sent()).FaRegFileZipper;
                    return [2 /*return*/, FaRegFileZipper];
                case 1957: return [4 /*yield*/, import("react-icons/fa6")];
                case 1958:
                    FaRegFile = (_b.sent()).FaRegFile;
                    return [2 /*return*/, FaRegFile];
                case 1959: return [4 /*yield*/, import("react-icons/fa6")];
                case 1960:
                    FaRegFlag = (_b.sent()).FaRegFlag;
                    return [2 /*return*/, FaRegFlag];
                case 1961: return [4 /*yield*/, import("react-icons/fa6")];
                case 1962:
                    FaRegFloppyDisk = (_b.sent()).FaRegFloppyDisk;
                    return [2 /*return*/, FaRegFloppyDisk];
                case 1963: return [4 /*yield*/, import("react-icons/fa6")];
                case 1964:
                    FaRegFolderClosed = (_b.sent()).FaRegFolderClosed;
                    return [2 /*return*/, FaRegFolderClosed];
                case 1965: return [4 /*yield*/, import("react-icons/fa6")];
                case 1966:
                    FaRegFolderOpen = (_b.sent()).FaRegFolderOpen;
                    return [2 /*return*/, FaRegFolderOpen];
                case 1967: return [4 /*yield*/, import("react-icons/fa6")];
                case 1968:
                    FaRegFolder = (_b.sent()).FaRegFolder;
                    return [2 /*return*/, FaRegFolder];
                case 1969: return [4 /*yield*/, import("react-icons/fa6")];
                case 1970:
                    FaRegFontAwesome = (_b.sent()).FaRegFontAwesome;
                    return [2 /*return*/, FaRegFontAwesome];
                case 1971: return [4 /*yield*/, import("react-icons/fa6")];
                case 1972:
                    FaRegFutbol = (_b.sent()).FaRegFutbol;
                    return [2 /*return*/, FaRegFutbol];
                case 1973: return [4 /*yield*/, import("react-icons/fa6")];
                case 1974:
                    FaRegGem = (_b.sent()).FaRegGem;
                    return [2 /*return*/, FaRegGem];
                case 1975: return [4 /*yield*/, import("react-icons/fa6")];
                case 1976:
                    FaRegHandBackFist = (_b.sent()).FaRegHandBackFist;
                    return [2 /*return*/, FaRegHandBackFist];
                case 1977: return [4 /*yield*/, import("react-icons/fa6")];
                case 1978:
                    FaRegHandLizard = (_b.sent()).FaRegHandLizard;
                    return [2 /*return*/, FaRegHandLizard];
                case 1979: return [4 /*yield*/, import("react-icons/fa6")];
                case 1980:
                    FaRegHandPeace = (_b.sent()).FaRegHandPeace;
                    return [2 /*return*/, FaRegHandPeace];
                case 1981: return [4 /*yield*/, import("react-icons/fa6")];
                case 1982:
                    FaRegHandPointDown = (_b.sent()).FaRegHandPointDown;
                    return [2 /*return*/, FaRegHandPointDown];
                case 1983: return [4 /*yield*/, import("react-icons/fa6")];
                case 1984:
                    FaRegHandPointLeft = (_b.sent()).FaRegHandPointLeft;
                    return [2 /*return*/, FaRegHandPointLeft];
                case 1985: return [4 /*yield*/, import("react-icons/fa6")];
                case 1986:
                    FaRegHandPointRight = (_b.sent()).FaRegHandPointRight;
                    return [2 /*return*/, FaRegHandPointRight];
                case 1987: return [4 /*yield*/, import("react-icons/fa6")];
                case 1988:
                    FaRegHandPointUp = (_b.sent()).FaRegHandPointUp;
                    return [2 /*return*/, FaRegHandPointUp];
                case 1989: return [4 /*yield*/, import("react-icons/fa6")];
                case 1990:
                    FaRegHandPointer = (_b.sent()).FaRegHandPointer;
                    return [2 /*return*/, FaRegHandPointer];
                case 1991: return [4 /*yield*/, import("react-icons/fa6")];
                case 1992:
                    FaRegHandScissors = (_b.sent()).FaRegHandScissors;
                    return [2 /*return*/, FaRegHandScissors];
                case 1993: return [4 /*yield*/, import("react-icons/fa6")];
                case 1994:
                    FaRegHandSpock = (_b.sent()).FaRegHandSpock;
                    return [2 /*return*/, FaRegHandSpock];
                case 1995: return [4 /*yield*/, import("react-icons/fa6")];
                case 1996:
                    FaRegHand = (_b.sent()).FaRegHand;
                    return [2 /*return*/, FaRegHand];
                case 1997: return [4 /*yield*/, import("react-icons/fa6")];
                case 1998:
                    FaRegHandshake = (_b.sent()).FaRegHandshake;
                    return [2 /*return*/, FaRegHandshake];
                case 1999: return [4 /*yield*/, import("react-icons/fa6")];
                case 2000:
                    FaRegHardDrive = (_b.sent()).FaRegHardDrive;
                    return [2 /*return*/, FaRegHardDrive];
                case 2001: return [2 /*return*/];
            }
        });
    });
}
