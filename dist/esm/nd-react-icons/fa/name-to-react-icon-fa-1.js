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
export function nameToReactIcon_fa_1(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, FaLongArrowAltUp, FaLowVision, FaLuggageCart, FaLungsVirus, FaLungs, FaMagic, FaMagnet, FaMailBulk, FaMale, FaMapMarkedAlt, FaMapMarked, FaMapMarkerAlt, FaMapMarker, FaMapPin, FaMapSigns, FaMap, FaMarker, FaMarsDouble, FaMarsStrokeH, FaMarsStrokeV, FaMarsStroke, FaMars, FaMask, FaMedal, FaMedkit, FaMehBlank, FaMehRollingEyes, FaMeh, FaMemory, FaMenorah, FaMercury, FaMeteor, FaMicrochip, FaMicrophoneAltSlash, FaMicrophoneAlt, FaMicrophoneSlash, FaMicrophone, FaMicroscope, FaMinusCircle, FaMinusSquare, FaMinus, FaMitten, FaMobileAlt, FaMobile, FaMoneyBillAlt, FaMoneyBillWaveAlt, FaMoneyBillWave, FaMoneyBill, FaMoneyCheckAlt, FaMoneyCheck, FaMonument, FaMoon, FaMortarPestle, FaMosque, FaMotorcycle, FaMountain, FaMousePointer, FaMouse, FaMugHot, FaMusic, FaNetworkWired, FaNeuter, FaNewspaper, FaNotEqual, FaNotesMedical, FaObjectGroup, FaObjectUngroup, FaOilCan, FaOm, FaOtter, FaOutdent, FaPager, FaPaintBrush, FaPaintRoller, FaPalette, FaPallet, FaPaperPlane, FaPaperclip, FaParachuteBox, FaParagraph, FaParking, FaPassport, FaPastafarianism, FaPaste, FaPauseCircle, FaPause, FaPaw, FaPeace, FaPenAlt, FaPenFancy, FaPenNib, FaPenSquare, FaPen, FaPencilAlt, FaPencilRuler, FaPeopleArrows, FaPeopleCarry, FaPepperHot, FaPercent, FaPercentage, FaPersonBooth, FaPhoneAlt, FaPhoneSlash, FaPhoneSquareAlt, FaPhoneSquare, FaPhoneVolume, FaPhone, FaPhotoVideo, FaPiggyBank, FaPills, FaPizzaSlice, FaPlaceOfWorship, FaPlaneArrival, FaPlaneDeparture, FaPlaneSlash, FaPlane, FaPlayCircle, FaPlay, FaPlug, FaPlusCircle, FaPlusSquare, FaPlus, FaPodcast, FaPollH, FaPoll, FaPooStorm, FaPoo, FaPoop, FaPortrait, FaPoundSign, FaPowerOff, FaPray, FaPrayingHands, FaPrescriptionBottleAlt, FaPrescriptionBottle, FaPrescription, FaPrint, FaProcedures, FaProjectDiagram, FaPumpMedical, FaPumpSoap, FaPuzzlePiece, FaQrcode, FaQuestionCircle, FaQuestion, FaQuidditch, FaQuoteLeft, FaQuoteRight, FaQuran, FaRadiationAlt, FaRadiation, FaRainbow, FaRandom, FaReceipt, FaRecordVinyl, FaRecycle, FaRedoAlt, FaRedo, FaRegistered, FaRemoveFormat, FaReplyAll, FaReply, FaRepublican, FaRestroom, FaRetweet, FaRibbon, FaRing, FaRoad, FaRobot, FaRocket, FaRoute, FaRssSquare, FaRss, FaRubleSign, FaRulerCombined, FaRulerHorizontal, FaRulerVertical, FaRuler, FaRunning, FaRupeeSign, FaSadCry, FaSadTear, FaSatelliteDish, FaSatellite, FaSave, FaSchool, FaScrewdriver, FaScroll, FaSdCard, FaSearchDollar, FaSearchLocation, FaSearchMinus, FaSearchPlus, FaSearch, FaSeedling, FaServer, FaShapes, FaShareAltSquare, FaShareAlt, FaShareSquare, FaShare, FaShekelSign, FaShieldAlt, FaShieldVirus, FaShip, FaShippingFast, FaShoePrints, FaShoppingBag, FaShoppingBasket, FaShoppingCart, FaShower, FaShuttleVan, FaSignInAlt, FaSignLanguage, FaSignOutAlt, FaSign, FaSignal, FaSignature, FaSimCard, FaSink, FaSitemap, FaSkating, FaSkiingNordic, FaSkiing, FaSkullCrossbones, FaSkull, FaSlash, FaSleigh, FaSlidersH, FaSmileBeam, FaSmileWink, FaSmile, FaSmog, FaSmokingBan, FaSmoking, FaSms, FaSnowboarding, FaSnowflake, FaSnowman, FaSnowplow, FaSoap, FaSocks, FaSolarPanel, FaSortAlphaDownAlt, FaSortAlphaDown, FaSortAlphaUpAlt, FaSortAlphaUp, FaSortAmountDownAlt, FaSortAmountDown, FaSortAmountUpAlt, FaSortAmountUp, FaSortDown, FaSortNumericDownAlt, FaSortNumericDown, FaSortNumericUpAlt, FaSortNumericUp, FaSortUp, FaSort, FaSpa, FaSpaceShuttle, FaSpellCheck, FaSpider, FaSpinner, FaSplotch, FaSprayCan, FaSquareFull, FaSquareRootAlt, FaSquare, FaStamp, FaStarAndCrescent, FaStarHalfAlt, FaStarHalf, FaStarOfDavid, FaStarOfLife, FaStar, FaStepBackward, FaStepForward, FaStethoscope, FaStickyNote, FaStopCircle, FaStop, FaStopwatch20, FaStopwatch, FaStoreAltSlash, FaStoreAlt, FaStoreSlash, FaStore, FaStream, FaStreetView, FaStrikethrough, FaStroopwafel, FaSubscript, FaSubway, FaSuitcaseRolling, FaSuitcase, FaSun, FaSuperscript, FaSurprise, FaSwatchbook, FaSwimmer, FaSwimmingPool, FaSynagogue, FaSyncAlt, FaSync, FaSyringe, FaTableTennis, FaTable, FaTabletAlt, FaTablet, FaTablets, FaTachometerAlt, FaTag, FaTags, FaTape, FaTasks, FaTaxi, FaTeethOpen, FaTeeth, FaTemperatureHigh, FaTemperatureLow, FaTenge, FaTerminal, FaTextHeight, FaTextWidth, FaThLarge, FaThList, FaTh, FaTheaterMasks, FaThermometerEmpty, FaThermometerFull, FaThermometerHalf, FaThermometerQuarter, FaThermometerThreeQuarters, FaThermometer, FaThumbsDown, FaThumbsUp, FaThumbtack, FaTicketAlt, FaTimesCircle, FaTimes, FaTintSlash, FaTint, FaTired, FaToggleOff, FaToggleOn, FaToiletPaperSlash, FaToiletPaper, FaToilet, FaToolbox, FaTools, FaTooth, FaTorah, FaToriiGate, FaTractor, FaTrademark, FaTrafficLight, FaTrailer, FaTrain, FaTram, FaTransgenderAlt, FaTransgender, FaTrashAlt, FaTrashRestoreAlt, FaTrashRestore, FaTrash, FaTree, FaTrophy, FaTruckLoading, FaTruckMonster, FaTruckMoving, FaTruckPickup, FaTruck, FaTshirt, FaTty, FaTv, FaUmbrellaBeach, FaUmbrella, FaUnderline, FaUndoAlt, FaUndo, FaUniversalAccess, FaUniversity, FaUnlink, FaUnlockAlt, FaUnlock, FaUpload, FaUserAltSlash, FaUserAlt, FaUserAstronaut, FaUserCheck, FaUserCircle, FaUserClock, FaUserCog, FaUserEdit, FaUserFriends, FaUserGraduate, FaUserInjured, FaUserLock, FaUserMd, FaUserMinus, FaUserNinja, FaUserNurse, FaUserPlus, FaUserSecret, FaUserShield, FaUserSlash, FaUserTag, FaUserTie, FaUserTimes, FaUser, FaUsersCog, FaUsersSlash, FaUsers, FaUtensilSpoon, FaUtensils, FaVectorSquare, FaVenusDouble, FaVenusMars, FaVenus, FaVestPatches, FaVest, FaVial, FaVials, FaVideoSlash, FaVideo, FaVihara, FaVirusSlash, FaVirus, FaViruses, FaVoicemail, FaVolleyballBall, FaVolumeDown, FaVolumeMute, FaVolumeOff, FaVolumeUp, FaVoteYea, FaVrCardboard, FaWalking, FaWallet, FaWarehouse, FaWater, FaWaveSquare, FaWeightHanging, FaWeight, FaWheelchair, FaWifi, FaWind, FaWindowClose, FaWindowMaximize, FaWindowMinimize, FaWindowRestore, FaWineBottle, FaWineGlassAlt, FaWineGlass, FaWonSign, FaWrench, FaXRay, FaYenSign, FaYinYang, FaRegAddressBook, FaRegAddressCard, FaRegAngry, FaRegArrowAltCircleDown, FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight, FaRegArrowAltCircleUp, FaRegBellSlash, FaRegBell, FaRegBookmark, FaRegBuilding, FaRegCalendarAlt, FaRegCalendarCheck, FaRegCalendarMinus, FaRegCalendarPlus, FaRegCalendarTimes, FaRegCalendar, FaRegCaretSquareDown, FaRegCaretSquareLeft, FaRegCaretSquareRight, FaRegCaretSquareUp, FaRegChartBar, FaRegCheckCircle, FaRegCheckSquare, FaRegCircle, FaRegClipboard, FaRegClock, FaRegClone, FaRegClosedCaptioning, FaRegCommentAlt, FaRegCommentDots, FaRegComment, FaRegComments, FaRegCompass, FaRegCopy, FaRegCopyright, FaRegCreditCard, FaRegDizzy, FaRegDotCircle, FaRegEdit, FaRegEnvelopeOpen, FaRegEnvelope, FaRegEyeSlash, FaRegEye, FaRegFileAlt, FaRegFileArchive, FaRegFileAudio, FaRegFileCode, FaRegFileExcel, FaRegFileImage, FaRegFilePdf, FaRegFilePowerpoint, FaRegFileVideo, FaRegFileWord, FaRegFile, FaRegFlag, FaRegFlushed, FaRegFolderOpen, FaRegFolder, FaRegFontAwesomeLogoFull, FaRegFrownOpen, FaRegFrown, FaRegFutbol, FaRegGem, FaRegGrimace, FaRegGrinAlt, FaRegGrinBeamSweat, FaRegGrinBeam, FaRegGrinHearts, FaRegGrinSquintTears, FaRegGrinSquint, FaRegGrinStars, FaRegGrinTears, FaRegGrinTongueSquint, FaRegGrinTongueWink, FaRegGrinTongue, FaRegGrinWink, FaRegGrin, FaRegHandLizard, FaRegHandPaper, FaRegHandPeace, FaRegHandPointDown, FaRegHandPointLeft, FaRegHandPointRight, FaRegHandPointUp, FaRegHandPointer, FaRegHandRock, FaRegHandScissors, FaRegHandSpock, FaRegHandshake, FaRegHdd, FaRegHeart, FaRegHospital, FaRegHourglass, FaRegIdBadge, FaRegIdCard, FaRegImage, FaRegImages, FaRegKeyboard, FaRegKissBeam, FaRegKissWinkHeart, FaRegKiss, FaRegLaughBeam, FaRegLaughSquint, FaRegLaughWink, FaRegLaugh, FaRegLemon, FaRegLifeRing, FaRegLightbulb, FaRegListAlt, FaRegMap, FaRegMehBlank, FaRegMehRollingEyes, FaRegMeh, FaRegMinusSquare, FaRegMoneyBillAlt, FaRegMoon, FaRegNewspaper, FaRegObjectGroup, FaRegObjectUngroup, FaRegPaperPlane, FaRegPauseCircle, FaRegPlayCircle, FaRegPlusSquare, FaRegQuestionCircle, FaRegRegistered, FaRegSadCry, FaRegSadTear, FaRegSave, FaRegShareSquare, FaRegSmileBeam, FaRegSmileWink, FaRegSmile, FaRegSnowflake, FaRegSquare, FaRegStarHalf, FaRegStar, FaRegStickyNote, FaRegStopCircle, FaRegSun, FaRegSurprise, FaRegThumbsDown, FaRegThumbsUp, FaRegTimesCircle, FaRegTired, FaRegTrashAlt, FaRegUserCircle, FaRegUser, FaRegWindowClose, FaRegWindowMaximize, FaRegWindowMinimize, FaRegWindowRestore;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "fa:FaLongArrowAltUp": return [3 /*break*/, 1];
                        case "fa:FaLowVision": return [3 /*break*/, 3];
                        case "fa:FaLuggageCart": return [3 /*break*/, 5];
                        case "fa:FaLungsVirus": return [3 /*break*/, 7];
                        case "fa:FaLungs": return [3 /*break*/, 9];
                        case "fa:FaMagic": return [3 /*break*/, 11];
                        case "fa:FaMagnet": return [3 /*break*/, 13];
                        case "fa:FaMailBulk": return [3 /*break*/, 15];
                        case "fa:FaMale": return [3 /*break*/, 17];
                        case "fa:FaMapMarkedAlt": return [3 /*break*/, 19];
                        case "fa:FaMapMarked": return [3 /*break*/, 21];
                        case "fa:FaMapMarkerAlt": return [3 /*break*/, 23];
                        case "fa:FaMapMarker": return [3 /*break*/, 25];
                        case "fa:FaMapPin": return [3 /*break*/, 27];
                        case "fa:FaMapSigns": return [3 /*break*/, 29];
                        case "fa:FaMap": return [3 /*break*/, 31];
                        case "fa:FaMarker": return [3 /*break*/, 33];
                        case "fa:FaMarsDouble": return [3 /*break*/, 35];
                        case "fa:FaMarsStrokeH": return [3 /*break*/, 37];
                        case "fa:FaMarsStrokeV": return [3 /*break*/, 39];
                        case "fa:FaMarsStroke": return [3 /*break*/, 41];
                        case "fa:FaMars": return [3 /*break*/, 43];
                        case "fa:FaMask": return [3 /*break*/, 45];
                        case "fa:FaMedal": return [3 /*break*/, 47];
                        case "fa:FaMedkit": return [3 /*break*/, 49];
                        case "fa:FaMehBlank": return [3 /*break*/, 51];
                        case "fa:FaMehRollingEyes": return [3 /*break*/, 53];
                        case "fa:FaMeh": return [3 /*break*/, 55];
                        case "fa:FaMemory": return [3 /*break*/, 57];
                        case "fa:FaMenorah": return [3 /*break*/, 59];
                        case "fa:FaMercury": return [3 /*break*/, 61];
                        case "fa:FaMeteor": return [3 /*break*/, 63];
                        case "fa:FaMicrochip": return [3 /*break*/, 65];
                        case "fa:FaMicrophoneAltSlash": return [3 /*break*/, 67];
                        case "fa:FaMicrophoneAlt": return [3 /*break*/, 69];
                        case "fa:FaMicrophoneSlash": return [3 /*break*/, 71];
                        case "fa:FaMicrophone": return [3 /*break*/, 73];
                        case "fa:FaMicroscope": return [3 /*break*/, 75];
                        case "fa:FaMinusCircle": return [3 /*break*/, 77];
                        case "fa:FaMinusSquare": return [3 /*break*/, 79];
                        case "fa:FaMinus": return [3 /*break*/, 81];
                        case "fa:FaMitten": return [3 /*break*/, 83];
                        case "fa:FaMobileAlt": return [3 /*break*/, 85];
                        case "fa:FaMobile": return [3 /*break*/, 87];
                        case "fa:FaMoneyBillAlt": return [3 /*break*/, 89];
                        case "fa:FaMoneyBillWaveAlt": return [3 /*break*/, 91];
                        case "fa:FaMoneyBillWave": return [3 /*break*/, 93];
                        case "fa:FaMoneyBill": return [3 /*break*/, 95];
                        case "fa:FaMoneyCheckAlt": return [3 /*break*/, 97];
                        case "fa:FaMoneyCheck": return [3 /*break*/, 99];
                        case "fa:FaMonument": return [3 /*break*/, 101];
                        case "fa:FaMoon": return [3 /*break*/, 103];
                        case "fa:FaMortarPestle": return [3 /*break*/, 105];
                        case "fa:FaMosque": return [3 /*break*/, 107];
                        case "fa:FaMotorcycle": return [3 /*break*/, 109];
                        case "fa:FaMountain": return [3 /*break*/, 111];
                        case "fa:FaMousePointer": return [3 /*break*/, 113];
                        case "fa:FaMouse": return [3 /*break*/, 115];
                        case "fa:FaMugHot": return [3 /*break*/, 117];
                        case "fa:FaMusic": return [3 /*break*/, 119];
                        case "fa:FaNetworkWired": return [3 /*break*/, 121];
                        case "fa:FaNeuter": return [3 /*break*/, 123];
                        case "fa:FaNewspaper": return [3 /*break*/, 125];
                        case "fa:FaNotEqual": return [3 /*break*/, 127];
                        case "fa:FaNotesMedical": return [3 /*break*/, 129];
                        case "fa:FaObjectGroup": return [3 /*break*/, 131];
                        case "fa:FaObjectUngroup": return [3 /*break*/, 133];
                        case "fa:FaOilCan": return [3 /*break*/, 135];
                        case "fa:FaOm": return [3 /*break*/, 137];
                        case "fa:FaOtter": return [3 /*break*/, 139];
                        case "fa:FaOutdent": return [3 /*break*/, 141];
                        case "fa:FaPager": return [3 /*break*/, 143];
                        case "fa:FaPaintBrush": return [3 /*break*/, 145];
                        case "fa:FaPaintRoller": return [3 /*break*/, 147];
                        case "fa:FaPalette": return [3 /*break*/, 149];
                        case "fa:FaPallet": return [3 /*break*/, 151];
                        case "fa:FaPaperPlane": return [3 /*break*/, 153];
                        case "fa:FaPaperclip": return [3 /*break*/, 155];
                        case "fa:FaParachuteBox": return [3 /*break*/, 157];
                        case "fa:FaParagraph": return [3 /*break*/, 159];
                        case "fa:FaParking": return [3 /*break*/, 161];
                        case "fa:FaPassport": return [3 /*break*/, 163];
                        case "fa:FaPastafarianism": return [3 /*break*/, 165];
                        case "fa:FaPaste": return [3 /*break*/, 167];
                        case "fa:FaPauseCircle": return [3 /*break*/, 169];
                        case "fa:FaPause": return [3 /*break*/, 171];
                        case "fa:FaPaw": return [3 /*break*/, 173];
                        case "fa:FaPeace": return [3 /*break*/, 175];
                        case "fa:FaPenAlt": return [3 /*break*/, 177];
                        case "fa:FaPenFancy": return [3 /*break*/, 179];
                        case "fa:FaPenNib": return [3 /*break*/, 181];
                        case "fa:FaPenSquare": return [3 /*break*/, 183];
                        case "fa:FaPen": return [3 /*break*/, 185];
                        case "fa:FaPencilAlt": return [3 /*break*/, 187];
                        case "fa:FaPencilRuler": return [3 /*break*/, 189];
                        case "fa:FaPeopleArrows": return [3 /*break*/, 191];
                        case "fa:FaPeopleCarry": return [3 /*break*/, 193];
                        case "fa:FaPepperHot": return [3 /*break*/, 195];
                        case "fa:FaPercent": return [3 /*break*/, 197];
                        case "fa:FaPercentage": return [3 /*break*/, 199];
                        case "fa:FaPersonBooth": return [3 /*break*/, 201];
                        case "fa:FaPhoneAlt": return [3 /*break*/, 203];
                        case "fa:FaPhoneSlash": return [3 /*break*/, 205];
                        case "fa:FaPhoneSquareAlt": return [3 /*break*/, 207];
                        case "fa:FaPhoneSquare": return [3 /*break*/, 209];
                        case "fa:FaPhoneVolume": return [3 /*break*/, 211];
                        case "fa:FaPhone": return [3 /*break*/, 213];
                        case "fa:FaPhotoVideo": return [3 /*break*/, 215];
                        case "fa:FaPiggyBank": return [3 /*break*/, 217];
                        case "fa:FaPills": return [3 /*break*/, 219];
                        case "fa:FaPizzaSlice": return [3 /*break*/, 221];
                        case "fa:FaPlaceOfWorship": return [3 /*break*/, 223];
                        case "fa:FaPlaneArrival": return [3 /*break*/, 225];
                        case "fa:FaPlaneDeparture": return [3 /*break*/, 227];
                        case "fa:FaPlaneSlash": return [3 /*break*/, 229];
                        case "fa:FaPlane": return [3 /*break*/, 231];
                        case "fa:FaPlayCircle": return [3 /*break*/, 233];
                        case "fa:FaPlay": return [3 /*break*/, 235];
                        case "fa:FaPlug": return [3 /*break*/, 237];
                        case "fa:FaPlusCircle": return [3 /*break*/, 239];
                        case "fa:FaPlusSquare": return [3 /*break*/, 241];
                        case "fa:FaPlus": return [3 /*break*/, 243];
                        case "fa:FaPodcast": return [3 /*break*/, 245];
                        case "fa:FaPollH": return [3 /*break*/, 247];
                        case "fa:FaPoll": return [3 /*break*/, 249];
                        case "fa:FaPooStorm": return [3 /*break*/, 251];
                        case "fa:FaPoo": return [3 /*break*/, 253];
                        case "fa:FaPoop": return [3 /*break*/, 255];
                        case "fa:FaPortrait": return [3 /*break*/, 257];
                        case "fa:FaPoundSign": return [3 /*break*/, 259];
                        case "fa:FaPowerOff": return [3 /*break*/, 261];
                        case "fa:FaPray": return [3 /*break*/, 263];
                        case "fa:FaPrayingHands": return [3 /*break*/, 265];
                        case "fa:FaPrescriptionBottleAlt": return [3 /*break*/, 267];
                        case "fa:FaPrescriptionBottle": return [3 /*break*/, 269];
                        case "fa:FaPrescription": return [3 /*break*/, 271];
                        case "fa:FaPrint": return [3 /*break*/, 273];
                        case "fa:FaProcedures": return [3 /*break*/, 275];
                        case "fa:FaProjectDiagram": return [3 /*break*/, 277];
                        case "fa:FaPumpMedical": return [3 /*break*/, 279];
                        case "fa:FaPumpSoap": return [3 /*break*/, 281];
                        case "fa:FaPuzzlePiece": return [3 /*break*/, 283];
                        case "fa:FaQrcode": return [3 /*break*/, 285];
                        case "fa:FaQuestionCircle": return [3 /*break*/, 287];
                        case "fa:FaQuestion": return [3 /*break*/, 289];
                        case "fa:FaQuidditch": return [3 /*break*/, 291];
                        case "fa:FaQuoteLeft": return [3 /*break*/, 293];
                        case "fa:FaQuoteRight": return [3 /*break*/, 295];
                        case "fa:FaQuran": return [3 /*break*/, 297];
                        case "fa:FaRadiationAlt": return [3 /*break*/, 299];
                        case "fa:FaRadiation": return [3 /*break*/, 301];
                        case "fa:FaRainbow": return [3 /*break*/, 303];
                        case "fa:FaRandom": return [3 /*break*/, 305];
                        case "fa:FaReceipt": return [3 /*break*/, 307];
                        case "fa:FaRecordVinyl": return [3 /*break*/, 309];
                        case "fa:FaRecycle": return [3 /*break*/, 311];
                        case "fa:FaRedoAlt": return [3 /*break*/, 313];
                        case "fa:FaRedo": return [3 /*break*/, 315];
                        case "fa:FaRegistered": return [3 /*break*/, 317];
                        case "fa:FaRemoveFormat": return [3 /*break*/, 319];
                        case "fa:FaReplyAll": return [3 /*break*/, 321];
                        case "fa:FaReply": return [3 /*break*/, 323];
                        case "fa:FaRepublican": return [3 /*break*/, 325];
                        case "fa:FaRestroom": return [3 /*break*/, 327];
                        case "fa:FaRetweet": return [3 /*break*/, 329];
                        case "fa:FaRibbon": return [3 /*break*/, 331];
                        case "fa:FaRing": return [3 /*break*/, 333];
                        case "fa:FaRoad": return [3 /*break*/, 335];
                        case "fa:FaRobot": return [3 /*break*/, 337];
                        case "fa:FaRocket": return [3 /*break*/, 339];
                        case "fa:FaRoute": return [3 /*break*/, 341];
                        case "fa:FaRssSquare": return [3 /*break*/, 343];
                        case "fa:FaRss": return [3 /*break*/, 345];
                        case "fa:FaRubleSign": return [3 /*break*/, 347];
                        case "fa:FaRulerCombined": return [3 /*break*/, 349];
                        case "fa:FaRulerHorizontal": return [3 /*break*/, 351];
                        case "fa:FaRulerVertical": return [3 /*break*/, 353];
                        case "fa:FaRuler": return [3 /*break*/, 355];
                        case "fa:FaRunning": return [3 /*break*/, 357];
                        case "fa:FaRupeeSign": return [3 /*break*/, 359];
                        case "fa:FaSadCry": return [3 /*break*/, 361];
                        case "fa:FaSadTear": return [3 /*break*/, 363];
                        case "fa:FaSatelliteDish": return [3 /*break*/, 365];
                        case "fa:FaSatellite": return [3 /*break*/, 367];
                        case "fa:FaSave": return [3 /*break*/, 369];
                        case "fa:FaSchool": return [3 /*break*/, 371];
                        case "fa:FaScrewdriver": return [3 /*break*/, 373];
                        case "fa:FaScroll": return [3 /*break*/, 375];
                        case "fa:FaSdCard": return [3 /*break*/, 377];
                        case "fa:FaSearchDollar": return [3 /*break*/, 379];
                        case "fa:FaSearchLocation": return [3 /*break*/, 381];
                        case "fa:FaSearchMinus": return [3 /*break*/, 383];
                        case "fa:FaSearchPlus": return [3 /*break*/, 385];
                        case "fa:FaSearch": return [3 /*break*/, 387];
                        case "fa:FaSeedling": return [3 /*break*/, 389];
                        case "fa:FaServer": return [3 /*break*/, 391];
                        case "fa:FaShapes": return [3 /*break*/, 393];
                        case "fa:FaShareAltSquare": return [3 /*break*/, 395];
                        case "fa:FaShareAlt": return [3 /*break*/, 397];
                        case "fa:FaShareSquare": return [3 /*break*/, 399];
                        case "fa:FaShare": return [3 /*break*/, 401];
                        case "fa:FaShekelSign": return [3 /*break*/, 403];
                        case "fa:FaShieldAlt": return [3 /*break*/, 405];
                        case "fa:FaShieldVirus": return [3 /*break*/, 407];
                        case "fa:FaShip": return [3 /*break*/, 409];
                        case "fa:FaShippingFast": return [3 /*break*/, 411];
                        case "fa:FaShoePrints": return [3 /*break*/, 413];
                        case "fa:FaShoppingBag": return [3 /*break*/, 415];
                        case "fa:FaShoppingBasket": return [3 /*break*/, 417];
                        case "fa:FaShoppingCart": return [3 /*break*/, 419];
                        case "fa:FaShower": return [3 /*break*/, 421];
                        case "fa:FaShuttleVan": return [3 /*break*/, 423];
                        case "fa:FaSignInAlt": return [3 /*break*/, 425];
                        case "fa:FaSignLanguage": return [3 /*break*/, 427];
                        case "fa:FaSignOutAlt": return [3 /*break*/, 429];
                        case "fa:FaSign": return [3 /*break*/, 431];
                        case "fa:FaSignal": return [3 /*break*/, 433];
                        case "fa:FaSignature": return [3 /*break*/, 435];
                        case "fa:FaSimCard": return [3 /*break*/, 437];
                        case "fa:FaSink": return [3 /*break*/, 439];
                        case "fa:FaSitemap": return [3 /*break*/, 441];
                        case "fa:FaSkating": return [3 /*break*/, 443];
                        case "fa:FaSkiingNordic": return [3 /*break*/, 445];
                        case "fa:FaSkiing": return [3 /*break*/, 447];
                        case "fa:FaSkullCrossbones": return [3 /*break*/, 449];
                        case "fa:FaSkull": return [3 /*break*/, 451];
                        case "fa:FaSlash": return [3 /*break*/, 453];
                        case "fa:FaSleigh": return [3 /*break*/, 455];
                        case "fa:FaSlidersH": return [3 /*break*/, 457];
                        case "fa:FaSmileBeam": return [3 /*break*/, 459];
                        case "fa:FaSmileWink": return [3 /*break*/, 461];
                        case "fa:FaSmile": return [3 /*break*/, 463];
                        case "fa:FaSmog": return [3 /*break*/, 465];
                        case "fa:FaSmokingBan": return [3 /*break*/, 467];
                        case "fa:FaSmoking": return [3 /*break*/, 469];
                        case "fa:FaSms": return [3 /*break*/, 471];
                        case "fa:FaSnowboarding": return [3 /*break*/, 473];
                        case "fa:FaSnowflake": return [3 /*break*/, 475];
                        case "fa:FaSnowman": return [3 /*break*/, 477];
                        case "fa:FaSnowplow": return [3 /*break*/, 479];
                        case "fa:FaSoap": return [3 /*break*/, 481];
                        case "fa:FaSocks": return [3 /*break*/, 483];
                        case "fa:FaSolarPanel": return [3 /*break*/, 485];
                        case "fa:FaSortAlphaDownAlt": return [3 /*break*/, 487];
                        case "fa:FaSortAlphaDown": return [3 /*break*/, 489];
                        case "fa:FaSortAlphaUpAlt": return [3 /*break*/, 491];
                        case "fa:FaSortAlphaUp": return [3 /*break*/, 493];
                        case "fa:FaSortAmountDownAlt": return [3 /*break*/, 495];
                        case "fa:FaSortAmountDown": return [3 /*break*/, 497];
                        case "fa:FaSortAmountUpAlt": return [3 /*break*/, 499];
                        case "fa:FaSortAmountUp": return [3 /*break*/, 501];
                        case "fa:FaSortDown": return [3 /*break*/, 503];
                        case "fa:FaSortNumericDownAlt": return [3 /*break*/, 505];
                        case "fa:FaSortNumericDown": return [3 /*break*/, 507];
                        case "fa:FaSortNumericUpAlt": return [3 /*break*/, 509];
                        case "fa:FaSortNumericUp": return [3 /*break*/, 511];
                        case "fa:FaSortUp": return [3 /*break*/, 513];
                        case "fa:FaSort": return [3 /*break*/, 515];
                        case "fa:FaSpa": return [3 /*break*/, 517];
                        case "fa:FaSpaceShuttle": return [3 /*break*/, 519];
                        case "fa:FaSpellCheck": return [3 /*break*/, 521];
                        case "fa:FaSpider": return [3 /*break*/, 523];
                        case "fa:FaSpinner": return [3 /*break*/, 525];
                        case "fa:FaSplotch": return [3 /*break*/, 527];
                        case "fa:FaSprayCan": return [3 /*break*/, 529];
                        case "fa:FaSquareFull": return [3 /*break*/, 531];
                        case "fa:FaSquareRootAlt": return [3 /*break*/, 533];
                        case "fa:FaSquare": return [3 /*break*/, 535];
                        case "fa:FaStamp": return [3 /*break*/, 537];
                        case "fa:FaStarAndCrescent": return [3 /*break*/, 539];
                        case "fa:FaStarHalfAlt": return [3 /*break*/, 541];
                        case "fa:FaStarHalf": return [3 /*break*/, 543];
                        case "fa:FaStarOfDavid": return [3 /*break*/, 545];
                        case "fa:FaStarOfLife": return [3 /*break*/, 547];
                        case "fa:FaStar": return [3 /*break*/, 549];
                        case "fa:FaStepBackward": return [3 /*break*/, 551];
                        case "fa:FaStepForward": return [3 /*break*/, 553];
                        case "fa:FaStethoscope": return [3 /*break*/, 555];
                        case "fa:FaStickyNote": return [3 /*break*/, 557];
                        case "fa:FaStopCircle": return [3 /*break*/, 559];
                        case "fa:FaStop": return [3 /*break*/, 561];
                        case "fa:FaStopwatch20": return [3 /*break*/, 563];
                        case "fa:FaStopwatch": return [3 /*break*/, 565];
                        case "fa:FaStoreAltSlash": return [3 /*break*/, 567];
                        case "fa:FaStoreAlt": return [3 /*break*/, 569];
                        case "fa:FaStoreSlash": return [3 /*break*/, 571];
                        case "fa:FaStore": return [3 /*break*/, 573];
                        case "fa:FaStream": return [3 /*break*/, 575];
                        case "fa:FaStreetView": return [3 /*break*/, 577];
                        case "fa:FaStrikethrough": return [3 /*break*/, 579];
                        case "fa:FaStroopwafel": return [3 /*break*/, 581];
                        case "fa:FaSubscript": return [3 /*break*/, 583];
                        case "fa:FaSubway": return [3 /*break*/, 585];
                        case "fa:FaSuitcaseRolling": return [3 /*break*/, 587];
                        case "fa:FaSuitcase": return [3 /*break*/, 589];
                        case "fa:FaSun": return [3 /*break*/, 591];
                        case "fa:FaSuperscript": return [3 /*break*/, 593];
                        case "fa:FaSurprise": return [3 /*break*/, 595];
                        case "fa:FaSwatchbook": return [3 /*break*/, 597];
                        case "fa:FaSwimmer": return [3 /*break*/, 599];
                        case "fa:FaSwimmingPool": return [3 /*break*/, 601];
                        case "fa:FaSynagogue": return [3 /*break*/, 603];
                        case "fa:FaSyncAlt": return [3 /*break*/, 605];
                        case "fa:FaSync": return [3 /*break*/, 607];
                        case "fa:FaSyringe": return [3 /*break*/, 609];
                        case "fa:FaTableTennis": return [3 /*break*/, 611];
                        case "fa:FaTable": return [3 /*break*/, 613];
                        case "fa:FaTabletAlt": return [3 /*break*/, 615];
                        case "fa:FaTablet": return [3 /*break*/, 617];
                        case "fa:FaTablets": return [3 /*break*/, 619];
                        case "fa:FaTachometerAlt": return [3 /*break*/, 621];
                        case "fa:FaTag": return [3 /*break*/, 623];
                        case "fa:FaTags": return [3 /*break*/, 625];
                        case "fa:FaTape": return [3 /*break*/, 627];
                        case "fa:FaTasks": return [3 /*break*/, 629];
                        case "fa:FaTaxi": return [3 /*break*/, 631];
                        case "fa:FaTeethOpen": return [3 /*break*/, 633];
                        case "fa:FaTeeth": return [3 /*break*/, 635];
                        case "fa:FaTemperatureHigh": return [3 /*break*/, 637];
                        case "fa:FaTemperatureLow": return [3 /*break*/, 639];
                        case "fa:FaTenge": return [3 /*break*/, 641];
                        case "fa:FaTerminal": return [3 /*break*/, 643];
                        case "fa:FaTextHeight": return [3 /*break*/, 645];
                        case "fa:FaTextWidth": return [3 /*break*/, 647];
                        case "fa:FaThLarge": return [3 /*break*/, 649];
                        case "fa:FaThList": return [3 /*break*/, 651];
                        case "fa:FaTh": return [3 /*break*/, 653];
                        case "fa:FaTheaterMasks": return [3 /*break*/, 655];
                        case "fa:FaThermometerEmpty": return [3 /*break*/, 657];
                        case "fa:FaThermometerFull": return [3 /*break*/, 659];
                        case "fa:FaThermometerHalf": return [3 /*break*/, 661];
                        case "fa:FaThermometerQuarter": return [3 /*break*/, 663];
                        case "fa:FaThermometerThreeQuarters": return [3 /*break*/, 665];
                        case "fa:FaThermometer": return [3 /*break*/, 667];
                        case "fa:FaThumbsDown": return [3 /*break*/, 669];
                        case "fa:FaThumbsUp": return [3 /*break*/, 671];
                        case "fa:FaThumbtack": return [3 /*break*/, 673];
                        case "fa:FaTicketAlt": return [3 /*break*/, 675];
                        case "fa:FaTimesCircle": return [3 /*break*/, 677];
                        case "fa:FaTimes": return [3 /*break*/, 679];
                        case "fa:FaTintSlash": return [3 /*break*/, 681];
                        case "fa:FaTint": return [3 /*break*/, 683];
                        case "fa:FaTired": return [3 /*break*/, 685];
                        case "fa:FaToggleOff": return [3 /*break*/, 687];
                        case "fa:FaToggleOn": return [3 /*break*/, 689];
                        case "fa:FaToiletPaperSlash": return [3 /*break*/, 691];
                        case "fa:FaToiletPaper": return [3 /*break*/, 693];
                        case "fa:FaToilet": return [3 /*break*/, 695];
                        case "fa:FaToolbox": return [3 /*break*/, 697];
                        case "fa:FaTools": return [3 /*break*/, 699];
                        case "fa:FaTooth": return [3 /*break*/, 701];
                        case "fa:FaTorah": return [3 /*break*/, 703];
                        case "fa:FaToriiGate": return [3 /*break*/, 705];
                        case "fa:FaTractor": return [3 /*break*/, 707];
                        case "fa:FaTrademark": return [3 /*break*/, 709];
                        case "fa:FaTrafficLight": return [3 /*break*/, 711];
                        case "fa:FaTrailer": return [3 /*break*/, 713];
                        case "fa:FaTrain": return [3 /*break*/, 715];
                        case "fa:FaTram": return [3 /*break*/, 717];
                        case "fa:FaTransgenderAlt": return [3 /*break*/, 719];
                        case "fa:FaTransgender": return [3 /*break*/, 721];
                        case "fa:FaTrashAlt": return [3 /*break*/, 723];
                        case "fa:FaTrashRestoreAlt": return [3 /*break*/, 725];
                        case "fa:FaTrashRestore": return [3 /*break*/, 727];
                        case "fa:FaTrash": return [3 /*break*/, 729];
                        case "fa:FaTree": return [3 /*break*/, 731];
                        case "fa:FaTrophy": return [3 /*break*/, 733];
                        case "fa:FaTruckLoading": return [3 /*break*/, 735];
                        case "fa:FaTruckMonster": return [3 /*break*/, 737];
                        case "fa:FaTruckMoving": return [3 /*break*/, 739];
                        case "fa:FaTruckPickup": return [3 /*break*/, 741];
                        case "fa:FaTruck": return [3 /*break*/, 743];
                        case "fa:FaTshirt": return [3 /*break*/, 745];
                        case "fa:FaTty": return [3 /*break*/, 747];
                        case "fa:FaTv": return [3 /*break*/, 749];
                        case "fa:FaUmbrellaBeach": return [3 /*break*/, 751];
                        case "fa:FaUmbrella": return [3 /*break*/, 753];
                        case "fa:FaUnderline": return [3 /*break*/, 755];
                        case "fa:FaUndoAlt": return [3 /*break*/, 757];
                        case "fa:FaUndo": return [3 /*break*/, 759];
                        case "fa:FaUniversalAccess": return [3 /*break*/, 761];
                        case "fa:FaUniversity": return [3 /*break*/, 763];
                        case "fa:FaUnlink": return [3 /*break*/, 765];
                        case "fa:FaUnlockAlt": return [3 /*break*/, 767];
                        case "fa:FaUnlock": return [3 /*break*/, 769];
                        case "fa:FaUpload": return [3 /*break*/, 771];
                        case "fa:FaUserAltSlash": return [3 /*break*/, 773];
                        case "fa:FaUserAlt": return [3 /*break*/, 775];
                        case "fa:FaUserAstronaut": return [3 /*break*/, 777];
                        case "fa:FaUserCheck": return [3 /*break*/, 779];
                        case "fa:FaUserCircle": return [3 /*break*/, 781];
                        case "fa:FaUserClock": return [3 /*break*/, 783];
                        case "fa:FaUserCog": return [3 /*break*/, 785];
                        case "fa:FaUserEdit": return [3 /*break*/, 787];
                        case "fa:FaUserFriends": return [3 /*break*/, 789];
                        case "fa:FaUserGraduate": return [3 /*break*/, 791];
                        case "fa:FaUserInjured": return [3 /*break*/, 793];
                        case "fa:FaUserLock": return [3 /*break*/, 795];
                        case "fa:FaUserMd": return [3 /*break*/, 797];
                        case "fa:FaUserMinus": return [3 /*break*/, 799];
                        case "fa:FaUserNinja": return [3 /*break*/, 801];
                        case "fa:FaUserNurse": return [3 /*break*/, 803];
                        case "fa:FaUserPlus": return [3 /*break*/, 805];
                        case "fa:FaUserSecret": return [3 /*break*/, 807];
                        case "fa:FaUserShield": return [3 /*break*/, 809];
                        case "fa:FaUserSlash": return [3 /*break*/, 811];
                        case "fa:FaUserTag": return [3 /*break*/, 813];
                        case "fa:FaUserTie": return [3 /*break*/, 815];
                        case "fa:FaUserTimes": return [3 /*break*/, 817];
                        case "fa:FaUser": return [3 /*break*/, 819];
                        case "fa:FaUsersCog": return [3 /*break*/, 821];
                        case "fa:FaUsersSlash": return [3 /*break*/, 823];
                        case "fa:FaUsers": return [3 /*break*/, 825];
                        case "fa:FaUtensilSpoon": return [3 /*break*/, 827];
                        case "fa:FaUtensils": return [3 /*break*/, 829];
                        case "fa:FaVectorSquare": return [3 /*break*/, 831];
                        case "fa:FaVenusDouble": return [3 /*break*/, 833];
                        case "fa:FaVenusMars": return [3 /*break*/, 835];
                        case "fa:FaVenus": return [3 /*break*/, 837];
                        case "fa:FaVestPatches": return [3 /*break*/, 839];
                        case "fa:FaVest": return [3 /*break*/, 841];
                        case "fa:FaVial": return [3 /*break*/, 843];
                        case "fa:FaVials": return [3 /*break*/, 845];
                        case "fa:FaVideoSlash": return [3 /*break*/, 847];
                        case "fa:FaVideo": return [3 /*break*/, 849];
                        case "fa:FaVihara": return [3 /*break*/, 851];
                        case "fa:FaVirusSlash": return [3 /*break*/, 853];
                        case "fa:FaVirus": return [3 /*break*/, 855];
                        case "fa:FaViruses": return [3 /*break*/, 857];
                        case "fa:FaVoicemail": return [3 /*break*/, 859];
                        case "fa:FaVolleyballBall": return [3 /*break*/, 861];
                        case "fa:FaVolumeDown": return [3 /*break*/, 863];
                        case "fa:FaVolumeMute": return [3 /*break*/, 865];
                        case "fa:FaVolumeOff": return [3 /*break*/, 867];
                        case "fa:FaVolumeUp": return [3 /*break*/, 869];
                        case "fa:FaVoteYea": return [3 /*break*/, 871];
                        case "fa:FaVrCardboard": return [3 /*break*/, 873];
                        case "fa:FaWalking": return [3 /*break*/, 875];
                        case "fa:FaWallet": return [3 /*break*/, 877];
                        case "fa:FaWarehouse": return [3 /*break*/, 879];
                        case "fa:FaWater": return [3 /*break*/, 881];
                        case "fa:FaWaveSquare": return [3 /*break*/, 883];
                        case "fa:FaWeightHanging": return [3 /*break*/, 885];
                        case "fa:FaWeight": return [3 /*break*/, 887];
                        case "fa:FaWheelchair": return [3 /*break*/, 889];
                        case "fa:FaWifi": return [3 /*break*/, 891];
                        case "fa:FaWind": return [3 /*break*/, 893];
                        case "fa:FaWindowClose": return [3 /*break*/, 895];
                        case "fa:FaWindowMaximize": return [3 /*break*/, 897];
                        case "fa:FaWindowMinimize": return [3 /*break*/, 899];
                        case "fa:FaWindowRestore": return [3 /*break*/, 901];
                        case "fa:FaWineBottle": return [3 /*break*/, 903];
                        case "fa:FaWineGlassAlt": return [3 /*break*/, 905];
                        case "fa:FaWineGlass": return [3 /*break*/, 907];
                        case "fa:FaWonSign": return [3 /*break*/, 909];
                        case "fa:FaWrench": return [3 /*break*/, 911];
                        case "fa:FaXRay": return [3 /*break*/, 913];
                        case "fa:FaYenSign": return [3 /*break*/, 915];
                        case "fa:FaYinYang": return [3 /*break*/, 917];
                        case "fa:FaRegAddressBook": return [3 /*break*/, 919];
                        case "fa:FaRegAddressCard": return [3 /*break*/, 921];
                        case "fa:FaRegAngry": return [3 /*break*/, 923];
                        case "fa:FaRegArrowAltCircleDown": return [3 /*break*/, 925];
                        case "fa:FaRegArrowAltCircleLeft": return [3 /*break*/, 927];
                        case "fa:FaRegArrowAltCircleRight": return [3 /*break*/, 929];
                        case "fa:FaRegArrowAltCircleUp": return [3 /*break*/, 931];
                        case "fa:FaRegBellSlash": return [3 /*break*/, 933];
                        case "fa:FaRegBell": return [3 /*break*/, 935];
                        case "fa:FaRegBookmark": return [3 /*break*/, 937];
                        case "fa:FaRegBuilding": return [3 /*break*/, 939];
                        case "fa:FaRegCalendarAlt": return [3 /*break*/, 941];
                        case "fa:FaRegCalendarCheck": return [3 /*break*/, 943];
                        case "fa:FaRegCalendarMinus": return [3 /*break*/, 945];
                        case "fa:FaRegCalendarPlus": return [3 /*break*/, 947];
                        case "fa:FaRegCalendarTimes": return [3 /*break*/, 949];
                        case "fa:FaRegCalendar": return [3 /*break*/, 951];
                        case "fa:FaRegCaretSquareDown": return [3 /*break*/, 953];
                        case "fa:FaRegCaretSquareLeft": return [3 /*break*/, 955];
                        case "fa:FaRegCaretSquareRight": return [3 /*break*/, 957];
                        case "fa:FaRegCaretSquareUp": return [3 /*break*/, 959];
                        case "fa:FaRegChartBar": return [3 /*break*/, 961];
                        case "fa:FaRegCheckCircle": return [3 /*break*/, 963];
                        case "fa:FaRegCheckSquare": return [3 /*break*/, 965];
                        case "fa:FaRegCircle": return [3 /*break*/, 967];
                        case "fa:FaRegClipboard": return [3 /*break*/, 969];
                        case "fa:FaRegClock": return [3 /*break*/, 971];
                        case "fa:FaRegClone": return [3 /*break*/, 973];
                        case "fa:FaRegClosedCaptioning": return [3 /*break*/, 975];
                        case "fa:FaRegCommentAlt": return [3 /*break*/, 977];
                        case "fa:FaRegCommentDots": return [3 /*break*/, 979];
                        case "fa:FaRegComment": return [3 /*break*/, 981];
                        case "fa:FaRegComments": return [3 /*break*/, 983];
                        case "fa:FaRegCompass": return [3 /*break*/, 985];
                        case "fa:FaRegCopy": return [3 /*break*/, 987];
                        case "fa:FaRegCopyright": return [3 /*break*/, 989];
                        case "fa:FaRegCreditCard": return [3 /*break*/, 991];
                        case "fa:FaRegDizzy": return [3 /*break*/, 993];
                        case "fa:FaRegDotCircle": return [3 /*break*/, 995];
                        case "fa:FaRegEdit": return [3 /*break*/, 997];
                        case "fa:FaRegEnvelopeOpen": return [3 /*break*/, 999];
                        case "fa:FaRegEnvelope": return [3 /*break*/, 1001];
                        case "fa:FaRegEyeSlash": return [3 /*break*/, 1003];
                        case "fa:FaRegEye": return [3 /*break*/, 1005];
                        case "fa:FaRegFileAlt": return [3 /*break*/, 1007];
                        case "fa:FaRegFileArchive": return [3 /*break*/, 1009];
                        case "fa:FaRegFileAudio": return [3 /*break*/, 1011];
                        case "fa:FaRegFileCode": return [3 /*break*/, 1013];
                        case "fa:FaRegFileExcel": return [3 /*break*/, 1015];
                        case "fa:FaRegFileImage": return [3 /*break*/, 1017];
                        case "fa:FaRegFilePdf": return [3 /*break*/, 1019];
                        case "fa:FaRegFilePowerpoint": return [3 /*break*/, 1021];
                        case "fa:FaRegFileVideo": return [3 /*break*/, 1023];
                        case "fa:FaRegFileWord": return [3 /*break*/, 1025];
                        case "fa:FaRegFile": return [3 /*break*/, 1027];
                        case "fa:FaRegFlag": return [3 /*break*/, 1029];
                        case "fa:FaRegFlushed": return [3 /*break*/, 1031];
                        case "fa:FaRegFolderOpen": return [3 /*break*/, 1033];
                        case "fa:FaRegFolder": return [3 /*break*/, 1035];
                        case "fa:FaRegFontAwesomeLogoFull": return [3 /*break*/, 1037];
                        case "fa:FaRegFrownOpen": return [3 /*break*/, 1039];
                        case "fa:FaRegFrown": return [3 /*break*/, 1041];
                        case "fa:FaRegFutbol": return [3 /*break*/, 1043];
                        case "fa:FaRegGem": return [3 /*break*/, 1045];
                        case "fa:FaRegGrimace": return [3 /*break*/, 1047];
                        case "fa:FaRegGrinAlt": return [3 /*break*/, 1049];
                        case "fa:FaRegGrinBeamSweat": return [3 /*break*/, 1051];
                        case "fa:FaRegGrinBeam": return [3 /*break*/, 1053];
                        case "fa:FaRegGrinHearts": return [3 /*break*/, 1055];
                        case "fa:FaRegGrinSquintTears": return [3 /*break*/, 1057];
                        case "fa:FaRegGrinSquint": return [3 /*break*/, 1059];
                        case "fa:FaRegGrinStars": return [3 /*break*/, 1061];
                        case "fa:FaRegGrinTears": return [3 /*break*/, 1063];
                        case "fa:FaRegGrinTongueSquint": return [3 /*break*/, 1065];
                        case "fa:FaRegGrinTongueWink": return [3 /*break*/, 1067];
                        case "fa:FaRegGrinTongue": return [3 /*break*/, 1069];
                        case "fa:FaRegGrinWink": return [3 /*break*/, 1071];
                        case "fa:FaRegGrin": return [3 /*break*/, 1073];
                        case "fa:FaRegHandLizard": return [3 /*break*/, 1075];
                        case "fa:FaRegHandPaper": return [3 /*break*/, 1077];
                        case "fa:FaRegHandPeace": return [3 /*break*/, 1079];
                        case "fa:FaRegHandPointDown": return [3 /*break*/, 1081];
                        case "fa:FaRegHandPointLeft": return [3 /*break*/, 1083];
                        case "fa:FaRegHandPointRight": return [3 /*break*/, 1085];
                        case "fa:FaRegHandPointUp": return [3 /*break*/, 1087];
                        case "fa:FaRegHandPointer": return [3 /*break*/, 1089];
                        case "fa:FaRegHandRock": return [3 /*break*/, 1091];
                        case "fa:FaRegHandScissors": return [3 /*break*/, 1093];
                        case "fa:FaRegHandSpock": return [3 /*break*/, 1095];
                        case "fa:FaRegHandshake": return [3 /*break*/, 1097];
                        case "fa:FaRegHdd": return [3 /*break*/, 1099];
                        case "fa:FaRegHeart": return [3 /*break*/, 1101];
                        case "fa:FaRegHospital": return [3 /*break*/, 1103];
                        case "fa:FaRegHourglass": return [3 /*break*/, 1105];
                        case "fa:FaRegIdBadge": return [3 /*break*/, 1107];
                        case "fa:FaRegIdCard": return [3 /*break*/, 1109];
                        case "fa:FaRegImage": return [3 /*break*/, 1111];
                        case "fa:FaRegImages": return [3 /*break*/, 1113];
                        case "fa:FaRegKeyboard": return [3 /*break*/, 1115];
                        case "fa:FaRegKissBeam": return [3 /*break*/, 1117];
                        case "fa:FaRegKissWinkHeart": return [3 /*break*/, 1119];
                        case "fa:FaRegKiss": return [3 /*break*/, 1121];
                        case "fa:FaRegLaughBeam": return [3 /*break*/, 1123];
                        case "fa:FaRegLaughSquint": return [3 /*break*/, 1125];
                        case "fa:FaRegLaughWink": return [3 /*break*/, 1127];
                        case "fa:FaRegLaugh": return [3 /*break*/, 1129];
                        case "fa:FaRegLemon": return [3 /*break*/, 1131];
                        case "fa:FaRegLifeRing": return [3 /*break*/, 1133];
                        case "fa:FaRegLightbulb": return [3 /*break*/, 1135];
                        case "fa:FaRegListAlt": return [3 /*break*/, 1137];
                        case "fa:FaRegMap": return [3 /*break*/, 1139];
                        case "fa:FaRegMehBlank": return [3 /*break*/, 1141];
                        case "fa:FaRegMehRollingEyes": return [3 /*break*/, 1143];
                        case "fa:FaRegMeh": return [3 /*break*/, 1145];
                        case "fa:FaRegMinusSquare": return [3 /*break*/, 1147];
                        case "fa:FaRegMoneyBillAlt": return [3 /*break*/, 1149];
                        case "fa:FaRegMoon": return [3 /*break*/, 1151];
                        case "fa:FaRegNewspaper": return [3 /*break*/, 1153];
                        case "fa:FaRegObjectGroup": return [3 /*break*/, 1155];
                        case "fa:FaRegObjectUngroup": return [3 /*break*/, 1157];
                        case "fa:FaRegPaperPlane": return [3 /*break*/, 1159];
                        case "fa:FaRegPauseCircle": return [3 /*break*/, 1161];
                        case "fa:FaRegPlayCircle": return [3 /*break*/, 1163];
                        case "fa:FaRegPlusSquare": return [3 /*break*/, 1165];
                        case "fa:FaRegQuestionCircle": return [3 /*break*/, 1167];
                        case "fa:FaRegRegistered": return [3 /*break*/, 1169];
                        case "fa:FaRegSadCry": return [3 /*break*/, 1171];
                        case "fa:FaRegSadTear": return [3 /*break*/, 1173];
                        case "fa:FaRegSave": return [3 /*break*/, 1175];
                        case "fa:FaRegShareSquare": return [3 /*break*/, 1177];
                        case "fa:FaRegSmileBeam": return [3 /*break*/, 1179];
                        case "fa:FaRegSmileWink": return [3 /*break*/, 1181];
                        case "fa:FaRegSmile": return [3 /*break*/, 1183];
                        case "fa:FaRegSnowflake": return [3 /*break*/, 1185];
                        case "fa:FaRegSquare": return [3 /*break*/, 1187];
                        case "fa:FaRegStarHalf": return [3 /*break*/, 1189];
                        case "fa:FaRegStar": return [3 /*break*/, 1191];
                        case "fa:FaRegStickyNote": return [3 /*break*/, 1193];
                        case "fa:FaRegStopCircle": return [3 /*break*/, 1195];
                        case "fa:FaRegSun": return [3 /*break*/, 1197];
                        case "fa:FaRegSurprise": return [3 /*break*/, 1199];
                        case "fa:FaRegThumbsDown": return [3 /*break*/, 1201];
                        case "fa:FaRegThumbsUp": return [3 /*break*/, 1203];
                        case "fa:FaRegTimesCircle": return [3 /*break*/, 1205];
                        case "fa:FaRegTired": return [3 /*break*/, 1207];
                        case "fa:FaRegTrashAlt": return [3 /*break*/, 1209];
                        case "fa:FaRegUserCircle": return [3 /*break*/, 1211];
                        case "fa:FaRegUser": return [3 /*break*/, 1213];
                        case "fa:FaRegWindowClose": return [3 /*break*/, 1215];
                        case "fa:FaRegWindowMaximize": return [3 /*break*/, 1217];
                        case "fa:FaRegWindowMinimize": return [3 /*break*/, 1219];
                        case "fa:FaRegWindowRestore": return [3 /*break*/, 1221];
                    }
                    return [3 /*break*/, 1223];
                case 1: return [4 /*yield*/, import("react-icons/fa")];
                case 2:
                    FaLongArrowAltUp = (_b.sent()).FaLongArrowAltUp;
                    return [2 /*return*/, FaLongArrowAltUp];
                case 3: return [4 /*yield*/, import("react-icons/fa")];
                case 4:
                    FaLowVision = (_b.sent()).FaLowVision;
                    return [2 /*return*/, FaLowVision];
                case 5: return [4 /*yield*/, import("react-icons/fa")];
                case 6:
                    FaLuggageCart = (_b.sent()).FaLuggageCart;
                    return [2 /*return*/, FaLuggageCart];
                case 7: return [4 /*yield*/, import("react-icons/fa")];
                case 8:
                    FaLungsVirus = (_b.sent()).FaLungsVirus;
                    return [2 /*return*/, FaLungsVirus];
                case 9: return [4 /*yield*/, import("react-icons/fa")];
                case 10:
                    FaLungs = (_b.sent()).FaLungs;
                    return [2 /*return*/, FaLungs];
                case 11: return [4 /*yield*/, import("react-icons/fa")];
                case 12:
                    FaMagic = (_b.sent()).FaMagic;
                    return [2 /*return*/, FaMagic];
                case 13: return [4 /*yield*/, import("react-icons/fa")];
                case 14:
                    FaMagnet = (_b.sent()).FaMagnet;
                    return [2 /*return*/, FaMagnet];
                case 15: return [4 /*yield*/, import("react-icons/fa")];
                case 16:
                    FaMailBulk = (_b.sent()).FaMailBulk;
                    return [2 /*return*/, FaMailBulk];
                case 17: return [4 /*yield*/, import("react-icons/fa")];
                case 18:
                    FaMale = (_b.sent()).FaMale;
                    return [2 /*return*/, FaMale];
                case 19: return [4 /*yield*/, import("react-icons/fa")];
                case 20:
                    FaMapMarkedAlt = (_b.sent()).FaMapMarkedAlt;
                    return [2 /*return*/, FaMapMarkedAlt];
                case 21: return [4 /*yield*/, import("react-icons/fa")];
                case 22:
                    FaMapMarked = (_b.sent()).FaMapMarked;
                    return [2 /*return*/, FaMapMarked];
                case 23: return [4 /*yield*/, import("react-icons/fa")];
                case 24:
                    FaMapMarkerAlt = (_b.sent()).FaMapMarkerAlt;
                    return [2 /*return*/, FaMapMarkerAlt];
                case 25: return [4 /*yield*/, import("react-icons/fa")];
                case 26:
                    FaMapMarker = (_b.sent()).FaMapMarker;
                    return [2 /*return*/, FaMapMarker];
                case 27: return [4 /*yield*/, import("react-icons/fa")];
                case 28:
                    FaMapPin = (_b.sent()).FaMapPin;
                    return [2 /*return*/, FaMapPin];
                case 29: return [4 /*yield*/, import("react-icons/fa")];
                case 30:
                    FaMapSigns = (_b.sent()).FaMapSigns;
                    return [2 /*return*/, FaMapSigns];
                case 31: return [4 /*yield*/, import("react-icons/fa")];
                case 32:
                    FaMap = (_b.sent()).FaMap;
                    return [2 /*return*/, FaMap];
                case 33: return [4 /*yield*/, import("react-icons/fa")];
                case 34:
                    FaMarker = (_b.sent()).FaMarker;
                    return [2 /*return*/, FaMarker];
                case 35: return [4 /*yield*/, import("react-icons/fa")];
                case 36:
                    FaMarsDouble = (_b.sent()).FaMarsDouble;
                    return [2 /*return*/, FaMarsDouble];
                case 37: return [4 /*yield*/, import("react-icons/fa")];
                case 38:
                    FaMarsStrokeH = (_b.sent()).FaMarsStrokeH;
                    return [2 /*return*/, FaMarsStrokeH];
                case 39: return [4 /*yield*/, import("react-icons/fa")];
                case 40:
                    FaMarsStrokeV = (_b.sent()).FaMarsStrokeV;
                    return [2 /*return*/, FaMarsStrokeV];
                case 41: return [4 /*yield*/, import("react-icons/fa")];
                case 42:
                    FaMarsStroke = (_b.sent()).FaMarsStroke;
                    return [2 /*return*/, FaMarsStroke];
                case 43: return [4 /*yield*/, import("react-icons/fa")];
                case 44:
                    FaMars = (_b.sent()).FaMars;
                    return [2 /*return*/, FaMars];
                case 45: return [4 /*yield*/, import("react-icons/fa")];
                case 46:
                    FaMask = (_b.sent()).FaMask;
                    return [2 /*return*/, FaMask];
                case 47: return [4 /*yield*/, import("react-icons/fa")];
                case 48:
                    FaMedal = (_b.sent()).FaMedal;
                    return [2 /*return*/, FaMedal];
                case 49: return [4 /*yield*/, import("react-icons/fa")];
                case 50:
                    FaMedkit = (_b.sent()).FaMedkit;
                    return [2 /*return*/, FaMedkit];
                case 51: return [4 /*yield*/, import("react-icons/fa")];
                case 52:
                    FaMehBlank = (_b.sent()).FaMehBlank;
                    return [2 /*return*/, FaMehBlank];
                case 53: return [4 /*yield*/, import("react-icons/fa")];
                case 54:
                    FaMehRollingEyes = (_b.sent()).FaMehRollingEyes;
                    return [2 /*return*/, FaMehRollingEyes];
                case 55: return [4 /*yield*/, import("react-icons/fa")];
                case 56:
                    FaMeh = (_b.sent()).FaMeh;
                    return [2 /*return*/, FaMeh];
                case 57: return [4 /*yield*/, import("react-icons/fa")];
                case 58:
                    FaMemory = (_b.sent()).FaMemory;
                    return [2 /*return*/, FaMemory];
                case 59: return [4 /*yield*/, import("react-icons/fa")];
                case 60:
                    FaMenorah = (_b.sent()).FaMenorah;
                    return [2 /*return*/, FaMenorah];
                case 61: return [4 /*yield*/, import("react-icons/fa")];
                case 62:
                    FaMercury = (_b.sent()).FaMercury;
                    return [2 /*return*/, FaMercury];
                case 63: return [4 /*yield*/, import("react-icons/fa")];
                case 64:
                    FaMeteor = (_b.sent()).FaMeteor;
                    return [2 /*return*/, FaMeteor];
                case 65: return [4 /*yield*/, import("react-icons/fa")];
                case 66:
                    FaMicrochip = (_b.sent()).FaMicrochip;
                    return [2 /*return*/, FaMicrochip];
                case 67: return [4 /*yield*/, import("react-icons/fa")];
                case 68:
                    FaMicrophoneAltSlash = (_b.sent()).FaMicrophoneAltSlash;
                    return [2 /*return*/, FaMicrophoneAltSlash];
                case 69: return [4 /*yield*/, import("react-icons/fa")];
                case 70:
                    FaMicrophoneAlt = (_b.sent()).FaMicrophoneAlt;
                    return [2 /*return*/, FaMicrophoneAlt];
                case 71: return [4 /*yield*/, import("react-icons/fa")];
                case 72:
                    FaMicrophoneSlash = (_b.sent()).FaMicrophoneSlash;
                    return [2 /*return*/, FaMicrophoneSlash];
                case 73: return [4 /*yield*/, import("react-icons/fa")];
                case 74:
                    FaMicrophone = (_b.sent()).FaMicrophone;
                    return [2 /*return*/, FaMicrophone];
                case 75: return [4 /*yield*/, import("react-icons/fa")];
                case 76:
                    FaMicroscope = (_b.sent()).FaMicroscope;
                    return [2 /*return*/, FaMicroscope];
                case 77: return [4 /*yield*/, import("react-icons/fa")];
                case 78:
                    FaMinusCircle = (_b.sent()).FaMinusCircle;
                    return [2 /*return*/, FaMinusCircle];
                case 79: return [4 /*yield*/, import("react-icons/fa")];
                case 80:
                    FaMinusSquare = (_b.sent()).FaMinusSquare;
                    return [2 /*return*/, FaMinusSquare];
                case 81: return [4 /*yield*/, import("react-icons/fa")];
                case 82:
                    FaMinus = (_b.sent()).FaMinus;
                    return [2 /*return*/, FaMinus];
                case 83: return [4 /*yield*/, import("react-icons/fa")];
                case 84:
                    FaMitten = (_b.sent()).FaMitten;
                    return [2 /*return*/, FaMitten];
                case 85: return [4 /*yield*/, import("react-icons/fa")];
                case 86:
                    FaMobileAlt = (_b.sent()).FaMobileAlt;
                    return [2 /*return*/, FaMobileAlt];
                case 87: return [4 /*yield*/, import("react-icons/fa")];
                case 88:
                    FaMobile = (_b.sent()).FaMobile;
                    return [2 /*return*/, FaMobile];
                case 89: return [4 /*yield*/, import("react-icons/fa")];
                case 90:
                    FaMoneyBillAlt = (_b.sent()).FaMoneyBillAlt;
                    return [2 /*return*/, FaMoneyBillAlt];
                case 91: return [4 /*yield*/, import("react-icons/fa")];
                case 92:
                    FaMoneyBillWaveAlt = (_b.sent()).FaMoneyBillWaveAlt;
                    return [2 /*return*/, FaMoneyBillWaveAlt];
                case 93: return [4 /*yield*/, import("react-icons/fa")];
                case 94:
                    FaMoneyBillWave = (_b.sent()).FaMoneyBillWave;
                    return [2 /*return*/, FaMoneyBillWave];
                case 95: return [4 /*yield*/, import("react-icons/fa")];
                case 96:
                    FaMoneyBill = (_b.sent()).FaMoneyBill;
                    return [2 /*return*/, FaMoneyBill];
                case 97: return [4 /*yield*/, import("react-icons/fa")];
                case 98:
                    FaMoneyCheckAlt = (_b.sent()).FaMoneyCheckAlt;
                    return [2 /*return*/, FaMoneyCheckAlt];
                case 99: return [4 /*yield*/, import("react-icons/fa")];
                case 100:
                    FaMoneyCheck = (_b.sent()).FaMoneyCheck;
                    return [2 /*return*/, FaMoneyCheck];
                case 101: return [4 /*yield*/, import("react-icons/fa")];
                case 102:
                    FaMonument = (_b.sent()).FaMonument;
                    return [2 /*return*/, FaMonument];
                case 103: return [4 /*yield*/, import("react-icons/fa")];
                case 104:
                    FaMoon = (_b.sent()).FaMoon;
                    return [2 /*return*/, FaMoon];
                case 105: return [4 /*yield*/, import("react-icons/fa")];
                case 106:
                    FaMortarPestle = (_b.sent()).FaMortarPestle;
                    return [2 /*return*/, FaMortarPestle];
                case 107: return [4 /*yield*/, import("react-icons/fa")];
                case 108:
                    FaMosque = (_b.sent()).FaMosque;
                    return [2 /*return*/, FaMosque];
                case 109: return [4 /*yield*/, import("react-icons/fa")];
                case 110:
                    FaMotorcycle = (_b.sent()).FaMotorcycle;
                    return [2 /*return*/, FaMotorcycle];
                case 111: return [4 /*yield*/, import("react-icons/fa")];
                case 112:
                    FaMountain = (_b.sent()).FaMountain;
                    return [2 /*return*/, FaMountain];
                case 113: return [4 /*yield*/, import("react-icons/fa")];
                case 114:
                    FaMousePointer = (_b.sent()).FaMousePointer;
                    return [2 /*return*/, FaMousePointer];
                case 115: return [4 /*yield*/, import("react-icons/fa")];
                case 116:
                    FaMouse = (_b.sent()).FaMouse;
                    return [2 /*return*/, FaMouse];
                case 117: return [4 /*yield*/, import("react-icons/fa")];
                case 118:
                    FaMugHot = (_b.sent()).FaMugHot;
                    return [2 /*return*/, FaMugHot];
                case 119: return [4 /*yield*/, import("react-icons/fa")];
                case 120:
                    FaMusic = (_b.sent()).FaMusic;
                    return [2 /*return*/, FaMusic];
                case 121: return [4 /*yield*/, import("react-icons/fa")];
                case 122:
                    FaNetworkWired = (_b.sent()).FaNetworkWired;
                    return [2 /*return*/, FaNetworkWired];
                case 123: return [4 /*yield*/, import("react-icons/fa")];
                case 124:
                    FaNeuter = (_b.sent()).FaNeuter;
                    return [2 /*return*/, FaNeuter];
                case 125: return [4 /*yield*/, import("react-icons/fa")];
                case 126:
                    FaNewspaper = (_b.sent()).FaNewspaper;
                    return [2 /*return*/, FaNewspaper];
                case 127: return [4 /*yield*/, import("react-icons/fa")];
                case 128:
                    FaNotEqual = (_b.sent()).FaNotEqual;
                    return [2 /*return*/, FaNotEqual];
                case 129: return [4 /*yield*/, import("react-icons/fa")];
                case 130:
                    FaNotesMedical = (_b.sent()).FaNotesMedical;
                    return [2 /*return*/, FaNotesMedical];
                case 131: return [4 /*yield*/, import("react-icons/fa")];
                case 132:
                    FaObjectGroup = (_b.sent()).FaObjectGroup;
                    return [2 /*return*/, FaObjectGroup];
                case 133: return [4 /*yield*/, import("react-icons/fa")];
                case 134:
                    FaObjectUngroup = (_b.sent()).FaObjectUngroup;
                    return [2 /*return*/, FaObjectUngroup];
                case 135: return [4 /*yield*/, import("react-icons/fa")];
                case 136:
                    FaOilCan = (_b.sent()).FaOilCan;
                    return [2 /*return*/, FaOilCan];
                case 137: return [4 /*yield*/, import("react-icons/fa")];
                case 138:
                    FaOm = (_b.sent()).FaOm;
                    return [2 /*return*/, FaOm];
                case 139: return [4 /*yield*/, import("react-icons/fa")];
                case 140:
                    FaOtter = (_b.sent()).FaOtter;
                    return [2 /*return*/, FaOtter];
                case 141: return [4 /*yield*/, import("react-icons/fa")];
                case 142:
                    FaOutdent = (_b.sent()).FaOutdent;
                    return [2 /*return*/, FaOutdent];
                case 143: return [4 /*yield*/, import("react-icons/fa")];
                case 144:
                    FaPager = (_b.sent()).FaPager;
                    return [2 /*return*/, FaPager];
                case 145: return [4 /*yield*/, import("react-icons/fa")];
                case 146:
                    FaPaintBrush = (_b.sent()).FaPaintBrush;
                    return [2 /*return*/, FaPaintBrush];
                case 147: return [4 /*yield*/, import("react-icons/fa")];
                case 148:
                    FaPaintRoller = (_b.sent()).FaPaintRoller;
                    return [2 /*return*/, FaPaintRoller];
                case 149: return [4 /*yield*/, import("react-icons/fa")];
                case 150:
                    FaPalette = (_b.sent()).FaPalette;
                    return [2 /*return*/, FaPalette];
                case 151: return [4 /*yield*/, import("react-icons/fa")];
                case 152:
                    FaPallet = (_b.sent()).FaPallet;
                    return [2 /*return*/, FaPallet];
                case 153: return [4 /*yield*/, import("react-icons/fa")];
                case 154:
                    FaPaperPlane = (_b.sent()).FaPaperPlane;
                    return [2 /*return*/, FaPaperPlane];
                case 155: return [4 /*yield*/, import("react-icons/fa")];
                case 156:
                    FaPaperclip = (_b.sent()).FaPaperclip;
                    return [2 /*return*/, FaPaperclip];
                case 157: return [4 /*yield*/, import("react-icons/fa")];
                case 158:
                    FaParachuteBox = (_b.sent()).FaParachuteBox;
                    return [2 /*return*/, FaParachuteBox];
                case 159: return [4 /*yield*/, import("react-icons/fa")];
                case 160:
                    FaParagraph = (_b.sent()).FaParagraph;
                    return [2 /*return*/, FaParagraph];
                case 161: return [4 /*yield*/, import("react-icons/fa")];
                case 162:
                    FaParking = (_b.sent()).FaParking;
                    return [2 /*return*/, FaParking];
                case 163: return [4 /*yield*/, import("react-icons/fa")];
                case 164:
                    FaPassport = (_b.sent()).FaPassport;
                    return [2 /*return*/, FaPassport];
                case 165: return [4 /*yield*/, import("react-icons/fa")];
                case 166:
                    FaPastafarianism = (_b.sent()).FaPastafarianism;
                    return [2 /*return*/, FaPastafarianism];
                case 167: return [4 /*yield*/, import("react-icons/fa")];
                case 168:
                    FaPaste = (_b.sent()).FaPaste;
                    return [2 /*return*/, FaPaste];
                case 169: return [4 /*yield*/, import("react-icons/fa")];
                case 170:
                    FaPauseCircle = (_b.sent()).FaPauseCircle;
                    return [2 /*return*/, FaPauseCircle];
                case 171: return [4 /*yield*/, import("react-icons/fa")];
                case 172:
                    FaPause = (_b.sent()).FaPause;
                    return [2 /*return*/, FaPause];
                case 173: return [4 /*yield*/, import("react-icons/fa")];
                case 174:
                    FaPaw = (_b.sent()).FaPaw;
                    return [2 /*return*/, FaPaw];
                case 175: return [4 /*yield*/, import("react-icons/fa")];
                case 176:
                    FaPeace = (_b.sent()).FaPeace;
                    return [2 /*return*/, FaPeace];
                case 177: return [4 /*yield*/, import("react-icons/fa")];
                case 178:
                    FaPenAlt = (_b.sent()).FaPenAlt;
                    return [2 /*return*/, FaPenAlt];
                case 179: return [4 /*yield*/, import("react-icons/fa")];
                case 180:
                    FaPenFancy = (_b.sent()).FaPenFancy;
                    return [2 /*return*/, FaPenFancy];
                case 181: return [4 /*yield*/, import("react-icons/fa")];
                case 182:
                    FaPenNib = (_b.sent()).FaPenNib;
                    return [2 /*return*/, FaPenNib];
                case 183: return [4 /*yield*/, import("react-icons/fa")];
                case 184:
                    FaPenSquare = (_b.sent()).FaPenSquare;
                    return [2 /*return*/, FaPenSquare];
                case 185: return [4 /*yield*/, import("react-icons/fa")];
                case 186:
                    FaPen = (_b.sent()).FaPen;
                    return [2 /*return*/, FaPen];
                case 187: return [4 /*yield*/, import("react-icons/fa")];
                case 188:
                    FaPencilAlt = (_b.sent()).FaPencilAlt;
                    return [2 /*return*/, FaPencilAlt];
                case 189: return [4 /*yield*/, import("react-icons/fa")];
                case 190:
                    FaPencilRuler = (_b.sent()).FaPencilRuler;
                    return [2 /*return*/, FaPencilRuler];
                case 191: return [4 /*yield*/, import("react-icons/fa")];
                case 192:
                    FaPeopleArrows = (_b.sent()).FaPeopleArrows;
                    return [2 /*return*/, FaPeopleArrows];
                case 193: return [4 /*yield*/, import("react-icons/fa")];
                case 194:
                    FaPeopleCarry = (_b.sent()).FaPeopleCarry;
                    return [2 /*return*/, FaPeopleCarry];
                case 195: return [4 /*yield*/, import("react-icons/fa")];
                case 196:
                    FaPepperHot = (_b.sent()).FaPepperHot;
                    return [2 /*return*/, FaPepperHot];
                case 197: return [4 /*yield*/, import("react-icons/fa")];
                case 198:
                    FaPercent = (_b.sent()).FaPercent;
                    return [2 /*return*/, FaPercent];
                case 199: return [4 /*yield*/, import("react-icons/fa")];
                case 200:
                    FaPercentage = (_b.sent()).FaPercentage;
                    return [2 /*return*/, FaPercentage];
                case 201: return [4 /*yield*/, import("react-icons/fa")];
                case 202:
                    FaPersonBooth = (_b.sent()).FaPersonBooth;
                    return [2 /*return*/, FaPersonBooth];
                case 203: return [4 /*yield*/, import("react-icons/fa")];
                case 204:
                    FaPhoneAlt = (_b.sent()).FaPhoneAlt;
                    return [2 /*return*/, FaPhoneAlt];
                case 205: return [4 /*yield*/, import("react-icons/fa")];
                case 206:
                    FaPhoneSlash = (_b.sent()).FaPhoneSlash;
                    return [2 /*return*/, FaPhoneSlash];
                case 207: return [4 /*yield*/, import("react-icons/fa")];
                case 208:
                    FaPhoneSquareAlt = (_b.sent()).FaPhoneSquareAlt;
                    return [2 /*return*/, FaPhoneSquareAlt];
                case 209: return [4 /*yield*/, import("react-icons/fa")];
                case 210:
                    FaPhoneSquare = (_b.sent()).FaPhoneSquare;
                    return [2 /*return*/, FaPhoneSquare];
                case 211: return [4 /*yield*/, import("react-icons/fa")];
                case 212:
                    FaPhoneVolume = (_b.sent()).FaPhoneVolume;
                    return [2 /*return*/, FaPhoneVolume];
                case 213: return [4 /*yield*/, import("react-icons/fa")];
                case 214:
                    FaPhone = (_b.sent()).FaPhone;
                    return [2 /*return*/, FaPhone];
                case 215: return [4 /*yield*/, import("react-icons/fa")];
                case 216:
                    FaPhotoVideo = (_b.sent()).FaPhotoVideo;
                    return [2 /*return*/, FaPhotoVideo];
                case 217: return [4 /*yield*/, import("react-icons/fa")];
                case 218:
                    FaPiggyBank = (_b.sent()).FaPiggyBank;
                    return [2 /*return*/, FaPiggyBank];
                case 219: return [4 /*yield*/, import("react-icons/fa")];
                case 220:
                    FaPills = (_b.sent()).FaPills;
                    return [2 /*return*/, FaPills];
                case 221: return [4 /*yield*/, import("react-icons/fa")];
                case 222:
                    FaPizzaSlice = (_b.sent()).FaPizzaSlice;
                    return [2 /*return*/, FaPizzaSlice];
                case 223: return [4 /*yield*/, import("react-icons/fa")];
                case 224:
                    FaPlaceOfWorship = (_b.sent()).FaPlaceOfWorship;
                    return [2 /*return*/, FaPlaceOfWorship];
                case 225: return [4 /*yield*/, import("react-icons/fa")];
                case 226:
                    FaPlaneArrival = (_b.sent()).FaPlaneArrival;
                    return [2 /*return*/, FaPlaneArrival];
                case 227: return [4 /*yield*/, import("react-icons/fa")];
                case 228:
                    FaPlaneDeparture = (_b.sent()).FaPlaneDeparture;
                    return [2 /*return*/, FaPlaneDeparture];
                case 229: return [4 /*yield*/, import("react-icons/fa")];
                case 230:
                    FaPlaneSlash = (_b.sent()).FaPlaneSlash;
                    return [2 /*return*/, FaPlaneSlash];
                case 231: return [4 /*yield*/, import("react-icons/fa")];
                case 232:
                    FaPlane = (_b.sent()).FaPlane;
                    return [2 /*return*/, FaPlane];
                case 233: return [4 /*yield*/, import("react-icons/fa")];
                case 234:
                    FaPlayCircle = (_b.sent()).FaPlayCircle;
                    return [2 /*return*/, FaPlayCircle];
                case 235: return [4 /*yield*/, import("react-icons/fa")];
                case 236:
                    FaPlay = (_b.sent()).FaPlay;
                    return [2 /*return*/, FaPlay];
                case 237: return [4 /*yield*/, import("react-icons/fa")];
                case 238:
                    FaPlug = (_b.sent()).FaPlug;
                    return [2 /*return*/, FaPlug];
                case 239: return [4 /*yield*/, import("react-icons/fa")];
                case 240:
                    FaPlusCircle = (_b.sent()).FaPlusCircle;
                    return [2 /*return*/, FaPlusCircle];
                case 241: return [4 /*yield*/, import("react-icons/fa")];
                case 242:
                    FaPlusSquare = (_b.sent()).FaPlusSquare;
                    return [2 /*return*/, FaPlusSquare];
                case 243: return [4 /*yield*/, import("react-icons/fa")];
                case 244:
                    FaPlus = (_b.sent()).FaPlus;
                    return [2 /*return*/, FaPlus];
                case 245: return [4 /*yield*/, import("react-icons/fa")];
                case 246:
                    FaPodcast = (_b.sent()).FaPodcast;
                    return [2 /*return*/, FaPodcast];
                case 247: return [4 /*yield*/, import("react-icons/fa")];
                case 248:
                    FaPollH = (_b.sent()).FaPollH;
                    return [2 /*return*/, FaPollH];
                case 249: return [4 /*yield*/, import("react-icons/fa")];
                case 250:
                    FaPoll = (_b.sent()).FaPoll;
                    return [2 /*return*/, FaPoll];
                case 251: return [4 /*yield*/, import("react-icons/fa")];
                case 252:
                    FaPooStorm = (_b.sent()).FaPooStorm;
                    return [2 /*return*/, FaPooStorm];
                case 253: return [4 /*yield*/, import("react-icons/fa")];
                case 254:
                    FaPoo = (_b.sent()).FaPoo;
                    return [2 /*return*/, FaPoo];
                case 255: return [4 /*yield*/, import("react-icons/fa")];
                case 256:
                    FaPoop = (_b.sent()).FaPoop;
                    return [2 /*return*/, FaPoop];
                case 257: return [4 /*yield*/, import("react-icons/fa")];
                case 258:
                    FaPortrait = (_b.sent()).FaPortrait;
                    return [2 /*return*/, FaPortrait];
                case 259: return [4 /*yield*/, import("react-icons/fa")];
                case 260:
                    FaPoundSign = (_b.sent()).FaPoundSign;
                    return [2 /*return*/, FaPoundSign];
                case 261: return [4 /*yield*/, import("react-icons/fa")];
                case 262:
                    FaPowerOff = (_b.sent()).FaPowerOff;
                    return [2 /*return*/, FaPowerOff];
                case 263: return [4 /*yield*/, import("react-icons/fa")];
                case 264:
                    FaPray = (_b.sent()).FaPray;
                    return [2 /*return*/, FaPray];
                case 265: return [4 /*yield*/, import("react-icons/fa")];
                case 266:
                    FaPrayingHands = (_b.sent()).FaPrayingHands;
                    return [2 /*return*/, FaPrayingHands];
                case 267: return [4 /*yield*/, import("react-icons/fa")];
                case 268:
                    FaPrescriptionBottleAlt = (_b.sent()).FaPrescriptionBottleAlt;
                    return [2 /*return*/, FaPrescriptionBottleAlt];
                case 269: return [4 /*yield*/, import("react-icons/fa")];
                case 270:
                    FaPrescriptionBottle = (_b.sent()).FaPrescriptionBottle;
                    return [2 /*return*/, FaPrescriptionBottle];
                case 271: return [4 /*yield*/, import("react-icons/fa")];
                case 272:
                    FaPrescription = (_b.sent()).FaPrescription;
                    return [2 /*return*/, FaPrescription];
                case 273: return [4 /*yield*/, import("react-icons/fa")];
                case 274:
                    FaPrint = (_b.sent()).FaPrint;
                    return [2 /*return*/, FaPrint];
                case 275: return [4 /*yield*/, import("react-icons/fa")];
                case 276:
                    FaProcedures = (_b.sent()).FaProcedures;
                    return [2 /*return*/, FaProcedures];
                case 277: return [4 /*yield*/, import("react-icons/fa")];
                case 278:
                    FaProjectDiagram = (_b.sent()).FaProjectDiagram;
                    return [2 /*return*/, FaProjectDiagram];
                case 279: return [4 /*yield*/, import("react-icons/fa")];
                case 280:
                    FaPumpMedical = (_b.sent()).FaPumpMedical;
                    return [2 /*return*/, FaPumpMedical];
                case 281: return [4 /*yield*/, import("react-icons/fa")];
                case 282:
                    FaPumpSoap = (_b.sent()).FaPumpSoap;
                    return [2 /*return*/, FaPumpSoap];
                case 283: return [4 /*yield*/, import("react-icons/fa")];
                case 284:
                    FaPuzzlePiece = (_b.sent()).FaPuzzlePiece;
                    return [2 /*return*/, FaPuzzlePiece];
                case 285: return [4 /*yield*/, import("react-icons/fa")];
                case 286:
                    FaQrcode = (_b.sent()).FaQrcode;
                    return [2 /*return*/, FaQrcode];
                case 287: return [4 /*yield*/, import("react-icons/fa")];
                case 288:
                    FaQuestionCircle = (_b.sent()).FaQuestionCircle;
                    return [2 /*return*/, FaQuestionCircle];
                case 289: return [4 /*yield*/, import("react-icons/fa")];
                case 290:
                    FaQuestion = (_b.sent()).FaQuestion;
                    return [2 /*return*/, FaQuestion];
                case 291: return [4 /*yield*/, import("react-icons/fa")];
                case 292:
                    FaQuidditch = (_b.sent()).FaQuidditch;
                    return [2 /*return*/, FaQuidditch];
                case 293: return [4 /*yield*/, import("react-icons/fa")];
                case 294:
                    FaQuoteLeft = (_b.sent()).FaQuoteLeft;
                    return [2 /*return*/, FaQuoteLeft];
                case 295: return [4 /*yield*/, import("react-icons/fa")];
                case 296:
                    FaQuoteRight = (_b.sent()).FaQuoteRight;
                    return [2 /*return*/, FaQuoteRight];
                case 297: return [4 /*yield*/, import("react-icons/fa")];
                case 298:
                    FaQuran = (_b.sent()).FaQuran;
                    return [2 /*return*/, FaQuran];
                case 299: return [4 /*yield*/, import("react-icons/fa")];
                case 300:
                    FaRadiationAlt = (_b.sent()).FaRadiationAlt;
                    return [2 /*return*/, FaRadiationAlt];
                case 301: return [4 /*yield*/, import("react-icons/fa")];
                case 302:
                    FaRadiation = (_b.sent()).FaRadiation;
                    return [2 /*return*/, FaRadiation];
                case 303: return [4 /*yield*/, import("react-icons/fa")];
                case 304:
                    FaRainbow = (_b.sent()).FaRainbow;
                    return [2 /*return*/, FaRainbow];
                case 305: return [4 /*yield*/, import("react-icons/fa")];
                case 306:
                    FaRandom = (_b.sent()).FaRandom;
                    return [2 /*return*/, FaRandom];
                case 307: return [4 /*yield*/, import("react-icons/fa")];
                case 308:
                    FaReceipt = (_b.sent()).FaReceipt;
                    return [2 /*return*/, FaReceipt];
                case 309: return [4 /*yield*/, import("react-icons/fa")];
                case 310:
                    FaRecordVinyl = (_b.sent()).FaRecordVinyl;
                    return [2 /*return*/, FaRecordVinyl];
                case 311: return [4 /*yield*/, import("react-icons/fa")];
                case 312:
                    FaRecycle = (_b.sent()).FaRecycle;
                    return [2 /*return*/, FaRecycle];
                case 313: return [4 /*yield*/, import("react-icons/fa")];
                case 314:
                    FaRedoAlt = (_b.sent()).FaRedoAlt;
                    return [2 /*return*/, FaRedoAlt];
                case 315: return [4 /*yield*/, import("react-icons/fa")];
                case 316:
                    FaRedo = (_b.sent()).FaRedo;
                    return [2 /*return*/, FaRedo];
                case 317: return [4 /*yield*/, import("react-icons/fa")];
                case 318:
                    FaRegistered = (_b.sent()).FaRegistered;
                    return [2 /*return*/, FaRegistered];
                case 319: return [4 /*yield*/, import("react-icons/fa")];
                case 320:
                    FaRemoveFormat = (_b.sent()).FaRemoveFormat;
                    return [2 /*return*/, FaRemoveFormat];
                case 321: return [4 /*yield*/, import("react-icons/fa")];
                case 322:
                    FaReplyAll = (_b.sent()).FaReplyAll;
                    return [2 /*return*/, FaReplyAll];
                case 323: return [4 /*yield*/, import("react-icons/fa")];
                case 324:
                    FaReply = (_b.sent()).FaReply;
                    return [2 /*return*/, FaReply];
                case 325: return [4 /*yield*/, import("react-icons/fa")];
                case 326:
                    FaRepublican = (_b.sent()).FaRepublican;
                    return [2 /*return*/, FaRepublican];
                case 327: return [4 /*yield*/, import("react-icons/fa")];
                case 328:
                    FaRestroom = (_b.sent()).FaRestroom;
                    return [2 /*return*/, FaRestroom];
                case 329: return [4 /*yield*/, import("react-icons/fa")];
                case 330:
                    FaRetweet = (_b.sent()).FaRetweet;
                    return [2 /*return*/, FaRetweet];
                case 331: return [4 /*yield*/, import("react-icons/fa")];
                case 332:
                    FaRibbon = (_b.sent()).FaRibbon;
                    return [2 /*return*/, FaRibbon];
                case 333: return [4 /*yield*/, import("react-icons/fa")];
                case 334:
                    FaRing = (_b.sent()).FaRing;
                    return [2 /*return*/, FaRing];
                case 335: return [4 /*yield*/, import("react-icons/fa")];
                case 336:
                    FaRoad = (_b.sent()).FaRoad;
                    return [2 /*return*/, FaRoad];
                case 337: return [4 /*yield*/, import("react-icons/fa")];
                case 338:
                    FaRobot = (_b.sent()).FaRobot;
                    return [2 /*return*/, FaRobot];
                case 339: return [4 /*yield*/, import("react-icons/fa")];
                case 340:
                    FaRocket = (_b.sent()).FaRocket;
                    return [2 /*return*/, FaRocket];
                case 341: return [4 /*yield*/, import("react-icons/fa")];
                case 342:
                    FaRoute = (_b.sent()).FaRoute;
                    return [2 /*return*/, FaRoute];
                case 343: return [4 /*yield*/, import("react-icons/fa")];
                case 344:
                    FaRssSquare = (_b.sent()).FaRssSquare;
                    return [2 /*return*/, FaRssSquare];
                case 345: return [4 /*yield*/, import("react-icons/fa")];
                case 346:
                    FaRss = (_b.sent()).FaRss;
                    return [2 /*return*/, FaRss];
                case 347: return [4 /*yield*/, import("react-icons/fa")];
                case 348:
                    FaRubleSign = (_b.sent()).FaRubleSign;
                    return [2 /*return*/, FaRubleSign];
                case 349: return [4 /*yield*/, import("react-icons/fa")];
                case 350:
                    FaRulerCombined = (_b.sent()).FaRulerCombined;
                    return [2 /*return*/, FaRulerCombined];
                case 351: return [4 /*yield*/, import("react-icons/fa")];
                case 352:
                    FaRulerHorizontal = (_b.sent()).FaRulerHorizontal;
                    return [2 /*return*/, FaRulerHorizontal];
                case 353: return [4 /*yield*/, import("react-icons/fa")];
                case 354:
                    FaRulerVertical = (_b.sent()).FaRulerVertical;
                    return [2 /*return*/, FaRulerVertical];
                case 355: return [4 /*yield*/, import("react-icons/fa")];
                case 356:
                    FaRuler = (_b.sent()).FaRuler;
                    return [2 /*return*/, FaRuler];
                case 357: return [4 /*yield*/, import("react-icons/fa")];
                case 358:
                    FaRunning = (_b.sent()).FaRunning;
                    return [2 /*return*/, FaRunning];
                case 359: return [4 /*yield*/, import("react-icons/fa")];
                case 360:
                    FaRupeeSign = (_b.sent()).FaRupeeSign;
                    return [2 /*return*/, FaRupeeSign];
                case 361: return [4 /*yield*/, import("react-icons/fa")];
                case 362:
                    FaSadCry = (_b.sent()).FaSadCry;
                    return [2 /*return*/, FaSadCry];
                case 363: return [4 /*yield*/, import("react-icons/fa")];
                case 364:
                    FaSadTear = (_b.sent()).FaSadTear;
                    return [2 /*return*/, FaSadTear];
                case 365: return [4 /*yield*/, import("react-icons/fa")];
                case 366:
                    FaSatelliteDish = (_b.sent()).FaSatelliteDish;
                    return [2 /*return*/, FaSatelliteDish];
                case 367: return [4 /*yield*/, import("react-icons/fa")];
                case 368:
                    FaSatellite = (_b.sent()).FaSatellite;
                    return [2 /*return*/, FaSatellite];
                case 369: return [4 /*yield*/, import("react-icons/fa")];
                case 370:
                    FaSave = (_b.sent()).FaSave;
                    return [2 /*return*/, FaSave];
                case 371: return [4 /*yield*/, import("react-icons/fa")];
                case 372:
                    FaSchool = (_b.sent()).FaSchool;
                    return [2 /*return*/, FaSchool];
                case 373: return [4 /*yield*/, import("react-icons/fa")];
                case 374:
                    FaScrewdriver = (_b.sent()).FaScrewdriver;
                    return [2 /*return*/, FaScrewdriver];
                case 375: return [4 /*yield*/, import("react-icons/fa")];
                case 376:
                    FaScroll = (_b.sent()).FaScroll;
                    return [2 /*return*/, FaScroll];
                case 377: return [4 /*yield*/, import("react-icons/fa")];
                case 378:
                    FaSdCard = (_b.sent()).FaSdCard;
                    return [2 /*return*/, FaSdCard];
                case 379: return [4 /*yield*/, import("react-icons/fa")];
                case 380:
                    FaSearchDollar = (_b.sent()).FaSearchDollar;
                    return [2 /*return*/, FaSearchDollar];
                case 381: return [4 /*yield*/, import("react-icons/fa")];
                case 382:
                    FaSearchLocation = (_b.sent()).FaSearchLocation;
                    return [2 /*return*/, FaSearchLocation];
                case 383: return [4 /*yield*/, import("react-icons/fa")];
                case 384:
                    FaSearchMinus = (_b.sent()).FaSearchMinus;
                    return [2 /*return*/, FaSearchMinus];
                case 385: return [4 /*yield*/, import("react-icons/fa")];
                case 386:
                    FaSearchPlus = (_b.sent()).FaSearchPlus;
                    return [2 /*return*/, FaSearchPlus];
                case 387: return [4 /*yield*/, import("react-icons/fa")];
                case 388:
                    FaSearch = (_b.sent()).FaSearch;
                    return [2 /*return*/, FaSearch];
                case 389: return [4 /*yield*/, import("react-icons/fa")];
                case 390:
                    FaSeedling = (_b.sent()).FaSeedling;
                    return [2 /*return*/, FaSeedling];
                case 391: return [4 /*yield*/, import("react-icons/fa")];
                case 392:
                    FaServer = (_b.sent()).FaServer;
                    return [2 /*return*/, FaServer];
                case 393: return [4 /*yield*/, import("react-icons/fa")];
                case 394:
                    FaShapes = (_b.sent()).FaShapes;
                    return [2 /*return*/, FaShapes];
                case 395: return [4 /*yield*/, import("react-icons/fa")];
                case 396:
                    FaShareAltSquare = (_b.sent()).FaShareAltSquare;
                    return [2 /*return*/, FaShareAltSquare];
                case 397: return [4 /*yield*/, import("react-icons/fa")];
                case 398:
                    FaShareAlt = (_b.sent()).FaShareAlt;
                    return [2 /*return*/, FaShareAlt];
                case 399: return [4 /*yield*/, import("react-icons/fa")];
                case 400:
                    FaShareSquare = (_b.sent()).FaShareSquare;
                    return [2 /*return*/, FaShareSquare];
                case 401: return [4 /*yield*/, import("react-icons/fa")];
                case 402:
                    FaShare = (_b.sent()).FaShare;
                    return [2 /*return*/, FaShare];
                case 403: return [4 /*yield*/, import("react-icons/fa")];
                case 404:
                    FaShekelSign = (_b.sent()).FaShekelSign;
                    return [2 /*return*/, FaShekelSign];
                case 405: return [4 /*yield*/, import("react-icons/fa")];
                case 406:
                    FaShieldAlt = (_b.sent()).FaShieldAlt;
                    return [2 /*return*/, FaShieldAlt];
                case 407: return [4 /*yield*/, import("react-icons/fa")];
                case 408:
                    FaShieldVirus = (_b.sent()).FaShieldVirus;
                    return [2 /*return*/, FaShieldVirus];
                case 409: return [4 /*yield*/, import("react-icons/fa")];
                case 410:
                    FaShip = (_b.sent()).FaShip;
                    return [2 /*return*/, FaShip];
                case 411: return [4 /*yield*/, import("react-icons/fa")];
                case 412:
                    FaShippingFast = (_b.sent()).FaShippingFast;
                    return [2 /*return*/, FaShippingFast];
                case 413: return [4 /*yield*/, import("react-icons/fa")];
                case 414:
                    FaShoePrints = (_b.sent()).FaShoePrints;
                    return [2 /*return*/, FaShoePrints];
                case 415: return [4 /*yield*/, import("react-icons/fa")];
                case 416:
                    FaShoppingBag = (_b.sent()).FaShoppingBag;
                    return [2 /*return*/, FaShoppingBag];
                case 417: return [4 /*yield*/, import("react-icons/fa")];
                case 418:
                    FaShoppingBasket = (_b.sent()).FaShoppingBasket;
                    return [2 /*return*/, FaShoppingBasket];
                case 419: return [4 /*yield*/, import("react-icons/fa")];
                case 420:
                    FaShoppingCart = (_b.sent()).FaShoppingCart;
                    return [2 /*return*/, FaShoppingCart];
                case 421: return [4 /*yield*/, import("react-icons/fa")];
                case 422:
                    FaShower = (_b.sent()).FaShower;
                    return [2 /*return*/, FaShower];
                case 423: return [4 /*yield*/, import("react-icons/fa")];
                case 424:
                    FaShuttleVan = (_b.sent()).FaShuttleVan;
                    return [2 /*return*/, FaShuttleVan];
                case 425: return [4 /*yield*/, import("react-icons/fa")];
                case 426:
                    FaSignInAlt = (_b.sent()).FaSignInAlt;
                    return [2 /*return*/, FaSignInAlt];
                case 427: return [4 /*yield*/, import("react-icons/fa")];
                case 428:
                    FaSignLanguage = (_b.sent()).FaSignLanguage;
                    return [2 /*return*/, FaSignLanguage];
                case 429: return [4 /*yield*/, import("react-icons/fa")];
                case 430:
                    FaSignOutAlt = (_b.sent()).FaSignOutAlt;
                    return [2 /*return*/, FaSignOutAlt];
                case 431: return [4 /*yield*/, import("react-icons/fa")];
                case 432:
                    FaSign = (_b.sent()).FaSign;
                    return [2 /*return*/, FaSign];
                case 433: return [4 /*yield*/, import("react-icons/fa")];
                case 434:
                    FaSignal = (_b.sent()).FaSignal;
                    return [2 /*return*/, FaSignal];
                case 435: return [4 /*yield*/, import("react-icons/fa")];
                case 436:
                    FaSignature = (_b.sent()).FaSignature;
                    return [2 /*return*/, FaSignature];
                case 437: return [4 /*yield*/, import("react-icons/fa")];
                case 438:
                    FaSimCard = (_b.sent()).FaSimCard;
                    return [2 /*return*/, FaSimCard];
                case 439: return [4 /*yield*/, import("react-icons/fa")];
                case 440:
                    FaSink = (_b.sent()).FaSink;
                    return [2 /*return*/, FaSink];
                case 441: return [4 /*yield*/, import("react-icons/fa")];
                case 442:
                    FaSitemap = (_b.sent()).FaSitemap;
                    return [2 /*return*/, FaSitemap];
                case 443: return [4 /*yield*/, import("react-icons/fa")];
                case 444:
                    FaSkating = (_b.sent()).FaSkating;
                    return [2 /*return*/, FaSkating];
                case 445: return [4 /*yield*/, import("react-icons/fa")];
                case 446:
                    FaSkiingNordic = (_b.sent()).FaSkiingNordic;
                    return [2 /*return*/, FaSkiingNordic];
                case 447: return [4 /*yield*/, import("react-icons/fa")];
                case 448:
                    FaSkiing = (_b.sent()).FaSkiing;
                    return [2 /*return*/, FaSkiing];
                case 449: return [4 /*yield*/, import("react-icons/fa")];
                case 450:
                    FaSkullCrossbones = (_b.sent()).FaSkullCrossbones;
                    return [2 /*return*/, FaSkullCrossbones];
                case 451: return [4 /*yield*/, import("react-icons/fa")];
                case 452:
                    FaSkull = (_b.sent()).FaSkull;
                    return [2 /*return*/, FaSkull];
                case 453: return [4 /*yield*/, import("react-icons/fa")];
                case 454:
                    FaSlash = (_b.sent()).FaSlash;
                    return [2 /*return*/, FaSlash];
                case 455: return [4 /*yield*/, import("react-icons/fa")];
                case 456:
                    FaSleigh = (_b.sent()).FaSleigh;
                    return [2 /*return*/, FaSleigh];
                case 457: return [4 /*yield*/, import("react-icons/fa")];
                case 458:
                    FaSlidersH = (_b.sent()).FaSlidersH;
                    return [2 /*return*/, FaSlidersH];
                case 459: return [4 /*yield*/, import("react-icons/fa")];
                case 460:
                    FaSmileBeam = (_b.sent()).FaSmileBeam;
                    return [2 /*return*/, FaSmileBeam];
                case 461: return [4 /*yield*/, import("react-icons/fa")];
                case 462:
                    FaSmileWink = (_b.sent()).FaSmileWink;
                    return [2 /*return*/, FaSmileWink];
                case 463: return [4 /*yield*/, import("react-icons/fa")];
                case 464:
                    FaSmile = (_b.sent()).FaSmile;
                    return [2 /*return*/, FaSmile];
                case 465: return [4 /*yield*/, import("react-icons/fa")];
                case 466:
                    FaSmog = (_b.sent()).FaSmog;
                    return [2 /*return*/, FaSmog];
                case 467: return [4 /*yield*/, import("react-icons/fa")];
                case 468:
                    FaSmokingBan = (_b.sent()).FaSmokingBan;
                    return [2 /*return*/, FaSmokingBan];
                case 469: return [4 /*yield*/, import("react-icons/fa")];
                case 470:
                    FaSmoking = (_b.sent()).FaSmoking;
                    return [2 /*return*/, FaSmoking];
                case 471: return [4 /*yield*/, import("react-icons/fa")];
                case 472:
                    FaSms = (_b.sent()).FaSms;
                    return [2 /*return*/, FaSms];
                case 473: return [4 /*yield*/, import("react-icons/fa")];
                case 474:
                    FaSnowboarding = (_b.sent()).FaSnowboarding;
                    return [2 /*return*/, FaSnowboarding];
                case 475: return [4 /*yield*/, import("react-icons/fa")];
                case 476:
                    FaSnowflake = (_b.sent()).FaSnowflake;
                    return [2 /*return*/, FaSnowflake];
                case 477: return [4 /*yield*/, import("react-icons/fa")];
                case 478:
                    FaSnowman = (_b.sent()).FaSnowman;
                    return [2 /*return*/, FaSnowman];
                case 479: return [4 /*yield*/, import("react-icons/fa")];
                case 480:
                    FaSnowplow = (_b.sent()).FaSnowplow;
                    return [2 /*return*/, FaSnowplow];
                case 481: return [4 /*yield*/, import("react-icons/fa")];
                case 482:
                    FaSoap = (_b.sent()).FaSoap;
                    return [2 /*return*/, FaSoap];
                case 483: return [4 /*yield*/, import("react-icons/fa")];
                case 484:
                    FaSocks = (_b.sent()).FaSocks;
                    return [2 /*return*/, FaSocks];
                case 485: return [4 /*yield*/, import("react-icons/fa")];
                case 486:
                    FaSolarPanel = (_b.sent()).FaSolarPanel;
                    return [2 /*return*/, FaSolarPanel];
                case 487: return [4 /*yield*/, import("react-icons/fa")];
                case 488:
                    FaSortAlphaDownAlt = (_b.sent()).FaSortAlphaDownAlt;
                    return [2 /*return*/, FaSortAlphaDownAlt];
                case 489: return [4 /*yield*/, import("react-icons/fa")];
                case 490:
                    FaSortAlphaDown = (_b.sent()).FaSortAlphaDown;
                    return [2 /*return*/, FaSortAlphaDown];
                case 491: return [4 /*yield*/, import("react-icons/fa")];
                case 492:
                    FaSortAlphaUpAlt = (_b.sent()).FaSortAlphaUpAlt;
                    return [2 /*return*/, FaSortAlphaUpAlt];
                case 493: return [4 /*yield*/, import("react-icons/fa")];
                case 494:
                    FaSortAlphaUp = (_b.sent()).FaSortAlphaUp;
                    return [2 /*return*/, FaSortAlphaUp];
                case 495: return [4 /*yield*/, import("react-icons/fa")];
                case 496:
                    FaSortAmountDownAlt = (_b.sent()).FaSortAmountDownAlt;
                    return [2 /*return*/, FaSortAmountDownAlt];
                case 497: return [4 /*yield*/, import("react-icons/fa")];
                case 498:
                    FaSortAmountDown = (_b.sent()).FaSortAmountDown;
                    return [2 /*return*/, FaSortAmountDown];
                case 499: return [4 /*yield*/, import("react-icons/fa")];
                case 500:
                    FaSortAmountUpAlt = (_b.sent()).FaSortAmountUpAlt;
                    return [2 /*return*/, FaSortAmountUpAlt];
                case 501: return [4 /*yield*/, import("react-icons/fa")];
                case 502:
                    FaSortAmountUp = (_b.sent()).FaSortAmountUp;
                    return [2 /*return*/, FaSortAmountUp];
                case 503: return [4 /*yield*/, import("react-icons/fa")];
                case 504:
                    FaSortDown = (_b.sent()).FaSortDown;
                    return [2 /*return*/, FaSortDown];
                case 505: return [4 /*yield*/, import("react-icons/fa")];
                case 506:
                    FaSortNumericDownAlt = (_b.sent()).FaSortNumericDownAlt;
                    return [2 /*return*/, FaSortNumericDownAlt];
                case 507: return [4 /*yield*/, import("react-icons/fa")];
                case 508:
                    FaSortNumericDown = (_b.sent()).FaSortNumericDown;
                    return [2 /*return*/, FaSortNumericDown];
                case 509: return [4 /*yield*/, import("react-icons/fa")];
                case 510:
                    FaSortNumericUpAlt = (_b.sent()).FaSortNumericUpAlt;
                    return [2 /*return*/, FaSortNumericUpAlt];
                case 511: return [4 /*yield*/, import("react-icons/fa")];
                case 512:
                    FaSortNumericUp = (_b.sent()).FaSortNumericUp;
                    return [2 /*return*/, FaSortNumericUp];
                case 513: return [4 /*yield*/, import("react-icons/fa")];
                case 514:
                    FaSortUp = (_b.sent()).FaSortUp;
                    return [2 /*return*/, FaSortUp];
                case 515: return [4 /*yield*/, import("react-icons/fa")];
                case 516:
                    FaSort = (_b.sent()).FaSort;
                    return [2 /*return*/, FaSort];
                case 517: return [4 /*yield*/, import("react-icons/fa")];
                case 518:
                    FaSpa = (_b.sent()).FaSpa;
                    return [2 /*return*/, FaSpa];
                case 519: return [4 /*yield*/, import("react-icons/fa")];
                case 520:
                    FaSpaceShuttle = (_b.sent()).FaSpaceShuttle;
                    return [2 /*return*/, FaSpaceShuttle];
                case 521: return [4 /*yield*/, import("react-icons/fa")];
                case 522:
                    FaSpellCheck = (_b.sent()).FaSpellCheck;
                    return [2 /*return*/, FaSpellCheck];
                case 523: return [4 /*yield*/, import("react-icons/fa")];
                case 524:
                    FaSpider = (_b.sent()).FaSpider;
                    return [2 /*return*/, FaSpider];
                case 525: return [4 /*yield*/, import("react-icons/fa")];
                case 526:
                    FaSpinner = (_b.sent()).FaSpinner;
                    return [2 /*return*/, FaSpinner];
                case 527: return [4 /*yield*/, import("react-icons/fa")];
                case 528:
                    FaSplotch = (_b.sent()).FaSplotch;
                    return [2 /*return*/, FaSplotch];
                case 529: return [4 /*yield*/, import("react-icons/fa")];
                case 530:
                    FaSprayCan = (_b.sent()).FaSprayCan;
                    return [2 /*return*/, FaSprayCan];
                case 531: return [4 /*yield*/, import("react-icons/fa")];
                case 532:
                    FaSquareFull = (_b.sent()).FaSquareFull;
                    return [2 /*return*/, FaSquareFull];
                case 533: return [4 /*yield*/, import("react-icons/fa")];
                case 534:
                    FaSquareRootAlt = (_b.sent()).FaSquareRootAlt;
                    return [2 /*return*/, FaSquareRootAlt];
                case 535: return [4 /*yield*/, import("react-icons/fa")];
                case 536:
                    FaSquare = (_b.sent()).FaSquare;
                    return [2 /*return*/, FaSquare];
                case 537: return [4 /*yield*/, import("react-icons/fa")];
                case 538:
                    FaStamp = (_b.sent()).FaStamp;
                    return [2 /*return*/, FaStamp];
                case 539: return [4 /*yield*/, import("react-icons/fa")];
                case 540:
                    FaStarAndCrescent = (_b.sent()).FaStarAndCrescent;
                    return [2 /*return*/, FaStarAndCrescent];
                case 541: return [4 /*yield*/, import("react-icons/fa")];
                case 542:
                    FaStarHalfAlt = (_b.sent()).FaStarHalfAlt;
                    return [2 /*return*/, FaStarHalfAlt];
                case 543: return [4 /*yield*/, import("react-icons/fa")];
                case 544:
                    FaStarHalf = (_b.sent()).FaStarHalf;
                    return [2 /*return*/, FaStarHalf];
                case 545: return [4 /*yield*/, import("react-icons/fa")];
                case 546:
                    FaStarOfDavid = (_b.sent()).FaStarOfDavid;
                    return [2 /*return*/, FaStarOfDavid];
                case 547: return [4 /*yield*/, import("react-icons/fa")];
                case 548:
                    FaStarOfLife = (_b.sent()).FaStarOfLife;
                    return [2 /*return*/, FaStarOfLife];
                case 549: return [4 /*yield*/, import("react-icons/fa")];
                case 550:
                    FaStar = (_b.sent()).FaStar;
                    return [2 /*return*/, FaStar];
                case 551: return [4 /*yield*/, import("react-icons/fa")];
                case 552:
                    FaStepBackward = (_b.sent()).FaStepBackward;
                    return [2 /*return*/, FaStepBackward];
                case 553: return [4 /*yield*/, import("react-icons/fa")];
                case 554:
                    FaStepForward = (_b.sent()).FaStepForward;
                    return [2 /*return*/, FaStepForward];
                case 555: return [4 /*yield*/, import("react-icons/fa")];
                case 556:
                    FaStethoscope = (_b.sent()).FaStethoscope;
                    return [2 /*return*/, FaStethoscope];
                case 557: return [4 /*yield*/, import("react-icons/fa")];
                case 558:
                    FaStickyNote = (_b.sent()).FaStickyNote;
                    return [2 /*return*/, FaStickyNote];
                case 559: return [4 /*yield*/, import("react-icons/fa")];
                case 560:
                    FaStopCircle = (_b.sent()).FaStopCircle;
                    return [2 /*return*/, FaStopCircle];
                case 561: return [4 /*yield*/, import("react-icons/fa")];
                case 562:
                    FaStop = (_b.sent()).FaStop;
                    return [2 /*return*/, FaStop];
                case 563: return [4 /*yield*/, import("react-icons/fa")];
                case 564:
                    FaStopwatch20 = (_b.sent()).FaStopwatch20;
                    return [2 /*return*/, FaStopwatch20];
                case 565: return [4 /*yield*/, import("react-icons/fa")];
                case 566:
                    FaStopwatch = (_b.sent()).FaStopwatch;
                    return [2 /*return*/, FaStopwatch];
                case 567: return [4 /*yield*/, import("react-icons/fa")];
                case 568:
                    FaStoreAltSlash = (_b.sent()).FaStoreAltSlash;
                    return [2 /*return*/, FaStoreAltSlash];
                case 569: return [4 /*yield*/, import("react-icons/fa")];
                case 570:
                    FaStoreAlt = (_b.sent()).FaStoreAlt;
                    return [2 /*return*/, FaStoreAlt];
                case 571: return [4 /*yield*/, import("react-icons/fa")];
                case 572:
                    FaStoreSlash = (_b.sent()).FaStoreSlash;
                    return [2 /*return*/, FaStoreSlash];
                case 573: return [4 /*yield*/, import("react-icons/fa")];
                case 574:
                    FaStore = (_b.sent()).FaStore;
                    return [2 /*return*/, FaStore];
                case 575: return [4 /*yield*/, import("react-icons/fa")];
                case 576:
                    FaStream = (_b.sent()).FaStream;
                    return [2 /*return*/, FaStream];
                case 577: return [4 /*yield*/, import("react-icons/fa")];
                case 578:
                    FaStreetView = (_b.sent()).FaStreetView;
                    return [2 /*return*/, FaStreetView];
                case 579: return [4 /*yield*/, import("react-icons/fa")];
                case 580:
                    FaStrikethrough = (_b.sent()).FaStrikethrough;
                    return [2 /*return*/, FaStrikethrough];
                case 581: return [4 /*yield*/, import("react-icons/fa")];
                case 582:
                    FaStroopwafel = (_b.sent()).FaStroopwafel;
                    return [2 /*return*/, FaStroopwafel];
                case 583: return [4 /*yield*/, import("react-icons/fa")];
                case 584:
                    FaSubscript = (_b.sent()).FaSubscript;
                    return [2 /*return*/, FaSubscript];
                case 585: return [4 /*yield*/, import("react-icons/fa")];
                case 586:
                    FaSubway = (_b.sent()).FaSubway;
                    return [2 /*return*/, FaSubway];
                case 587: return [4 /*yield*/, import("react-icons/fa")];
                case 588:
                    FaSuitcaseRolling = (_b.sent()).FaSuitcaseRolling;
                    return [2 /*return*/, FaSuitcaseRolling];
                case 589: return [4 /*yield*/, import("react-icons/fa")];
                case 590:
                    FaSuitcase = (_b.sent()).FaSuitcase;
                    return [2 /*return*/, FaSuitcase];
                case 591: return [4 /*yield*/, import("react-icons/fa")];
                case 592:
                    FaSun = (_b.sent()).FaSun;
                    return [2 /*return*/, FaSun];
                case 593: return [4 /*yield*/, import("react-icons/fa")];
                case 594:
                    FaSuperscript = (_b.sent()).FaSuperscript;
                    return [2 /*return*/, FaSuperscript];
                case 595: return [4 /*yield*/, import("react-icons/fa")];
                case 596:
                    FaSurprise = (_b.sent()).FaSurprise;
                    return [2 /*return*/, FaSurprise];
                case 597: return [4 /*yield*/, import("react-icons/fa")];
                case 598:
                    FaSwatchbook = (_b.sent()).FaSwatchbook;
                    return [2 /*return*/, FaSwatchbook];
                case 599: return [4 /*yield*/, import("react-icons/fa")];
                case 600:
                    FaSwimmer = (_b.sent()).FaSwimmer;
                    return [2 /*return*/, FaSwimmer];
                case 601: return [4 /*yield*/, import("react-icons/fa")];
                case 602:
                    FaSwimmingPool = (_b.sent()).FaSwimmingPool;
                    return [2 /*return*/, FaSwimmingPool];
                case 603: return [4 /*yield*/, import("react-icons/fa")];
                case 604:
                    FaSynagogue = (_b.sent()).FaSynagogue;
                    return [2 /*return*/, FaSynagogue];
                case 605: return [4 /*yield*/, import("react-icons/fa")];
                case 606:
                    FaSyncAlt = (_b.sent()).FaSyncAlt;
                    return [2 /*return*/, FaSyncAlt];
                case 607: return [4 /*yield*/, import("react-icons/fa")];
                case 608:
                    FaSync = (_b.sent()).FaSync;
                    return [2 /*return*/, FaSync];
                case 609: return [4 /*yield*/, import("react-icons/fa")];
                case 610:
                    FaSyringe = (_b.sent()).FaSyringe;
                    return [2 /*return*/, FaSyringe];
                case 611: return [4 /*yield*/, import("react-icons/fa")];
                case 612:
                    FaTableTennis = (_b.sent()).FaTableTennis;
                    return [2 /*return*/, FaTableTennis];
                case 613: return [4 /*yield*/, import("react-icons/fa")];
                case 614:
                    FaTable = (_b.sent()).FaTable;
                    return [2 /*return*/, FaTable];
                case 615: return [4 /*yield*/, import("react-icons/fa")];
                case 616:
                    FaTabletAlt = (_b.sent()).FaTabletAlt;
                    return [2 /*return*/, FaTabletAlt];
                case 617: return [4 /*yield*/, import("react-icons/fa")];
                case 618:
                    FaTablet = (_b.sent()).FaTablet;
                    return [2 /*return*/, FaTablet];
                case 619: return [4 /*yield*/, import("react-icons/fa")];
                case 620:
                    FaTablets = (_b.sent()).FaTablets;
                    return [2 /*return*/, FaTablets];
                case 621: return [4 /*yield*/, import("react-icons/fa")];
                case 622:
                    FaTachometerAlt = (_b.sent()).FaTachometerAlt;
                    return [2 /*return*/, FaTachometerAlt];
                case 623: return [4 /*yield*/, import("react-icons/fa")];
                case 624:
                    FaTag = (_b.sent()).FaTag;
                    return [2 /*return*/, FaTag];
                case 625: return [4 /*yield*/, import("react-icons/fa")];
                case 626:
                    FaTags = (_b.sent()).FaTags;
                    return [2 /*return*/, FaTags];
                case 627: return [4 /*yield*/, import("react-icons/fa")];
                case 628:
                    FaTape = (_b.sent()).FaTape;
                    return [2 /*return*/, FaTape];
                case 629: return [4 /*yield*/, import("react-icons/fa")];
                case 630:
                    FaTasks = (_b.sent()).FaTasks;
                    return [2 /*return*/, FaTasks];
                case 631: return [4 /*yield*/, import("react-icons/fa")];
                case 632:
                    FaTaxi = (_b.sent()).FaTaxi;
                    return [2 /*return*/, FaTaxi];
                case 633: return [4 /*yield*/, import("react-icons/fa")];
                case 634:
                    FaTeethOpen = (_b.sent()).FaTeethOpen;
                    return [2 /*return*/, FaTeethOpen];
                case 635: return [4 /*yield*/, import("react-icons/fa")];
                case 636:
                    FaTeeth = (_b.sent()).FaTeeth;
                    return [2 /*return*/, FaTeeth];
                case 637: return [4 /*yield*/, import("react-icons/fa")];
                case 638:
                    FaTemperatureHigh = (_b.sent()).FaTemperatureHigh;
                    return [2 /*return*/, FaTemperatureHigh];
                case 639: return [4 /*yield*/, import("react-icons/fa")];
                case 640:
                    FaTemperatureLow = (_b.sent()).FaTemperatureLow;
                    return [2 /*return*/, FaTemperatureLow];
                case 641: return [4 /*yield*/, import("react-icons/fa")];
                case 642:
                    FaTenge = (_b.sent()).FaTenge;
                    return [2 /*return*/, FaTenge];
                case 643: return [4 /*yield*/, import("react-icons/fa")];
                case 644:
                    FaTerminal = (_b.sent()).FaTerminal;
                    return [2 /*return*/, FaTerminal];
                case 645: return [4 /*yield*/, import("react-icons/fa")];
                case 646:
                    FaTextHeight = (_b.sent()).FaTextHeight;
                    return [2 /*return*/, FaTextHeight];
                case 647: return [4 /*yield*/, import("react-icons/fa")];
                case 648:
                    FaTextWidth = (_b.sent()).FaTextWidth;
                    return [2 /*return*/, FaTextWidth];
                case 649: return [4 /*yield*/, import("react-icons/fa")];
                case 650:
                    FaThLarge = (_b.sent()).FaThLarge;
                    return [2 /*return*/, FaThLarge];
                case 651: return [4 /*yield*/, import("react-icons/fa")];
                case 652:
                    FaThList = (_b.sent()).FaThList;
                    return [2 /*return*/, FaThList];
                case 653: return [4 /*yield*/, import("react-icons/fa")];
                case 654:
                    FaTh = (_b.sent()).FaTh;
                    return [2 /*return*/, FaTh];
                case 655: return [4 /*yield*/, import("react-icons/fa")];
                case 656:
                    FaTheaterMasks = (_b.sent()).FaTheaterMasks;
                    return [2 /*return*/, FaTheaterMasks];
                case 657: return [4 /*yield*/, import("react-icons/fa")];
                case 658:
                    FaThermometerEmpty = (_b.sent()).FaThermometerEmpty;
                    return [2 /*return*/, FaThermometerEmpty];
                case 659: return [4 /*yield*/, import("react-icons/fa")];
                case 660:
                    FaThermometerFull = (_b.sent()).FaThermometerFull;
                    return [2 /*return*/, FaThermometerFull];
                case 661: return [4 /*yield*/, import("react-icons/fa")];
                case 662:
                    FaThermometerHalf = (_b.sent()).FaThermometerHalf;
                    return [2 /*return*/, FaThermometerHalf];
                case 663: return [4 /*yield*/, import("react-icons/fa")];
                case 664:
                    FaThermometerQuarter = (_b.sent()).FaThermometerQuarter;
                    return [2 /*return*/, FaThermometerQuarter];
                case 665: return [4 /*yield*/, import("react-icons/fa")];
                case 666:
                    FaThermometerThreeQuarters = (_b.sent()).FaThermometerThreeQuarters;
                    return [2 /*return*/, FaThermometerThreeQuarters];
                case 667: return [4 /*yield*/, import("react-icons/fa")];
                case 668:
                    FaThermometer = (_b.sent()).FaThermometer;
                    return [2 /*return*/, FaThermometer];
                case 669: return [4 /*yield*/, import("react-icons/fa")];
                case 670:
                    FaThumbsDown = (_b.sent()).FaThumbsDown;
                    return [2 /*return*/, FaThumbsDown];
                case 671: return [4 /*yield*/, import("react-icons/fa")];
                case 672:
                    FaThumbsUp = (_b.sent()).FaThumbsUp;
                    return [2 /*return*/, FaThumbsUp];
                case 673: return [4 /*yield*/, import("react-icons/fa")];
                case 674:
                    FaThumbtack = (_b.sent()).FaThumbtack;
                    return [2 /*return*/, FaThumbtack];
                case 675: return [4 /*yield*/, import("react-icons/fa")];
                case 676:
                    FaTicketAlt = (_b.sent()).FaTicketAlt;
                    return [2 /*return*/, FaTicketAlt];
                case 677: return [4 /*yield*/, import("react-icons/fa")];
                case 678:
                    FaTimesCircle = (_b.sent()).FaTimesCircle;
                    return [2 /*return*/, FaTimesCircle];
                case 679: return [4 /*yield*/, import("react-icons/fa")];
                case 680:
                    FaTimes = (_b.sent()).FaTimes;
                    return [2 /*return*/, FaTimes];
                case 681: return [4 /*yield*/, import("react-icons/fa")];
                case 682:
                    FaTintSlash = (_b.sent()).FaTintSlash;
                    return [2 /*return*/, FaTintSlash];
                case 683: return [4 /*yield*/, import("react-icons/fa")];
                case 684:
                    FaTint = (_b.sent()).FaTint;
                    return [2 /*return*/, FaTint];
                case 685: return [4 /*yield*/, import("react-icons/fa")];
                case 686:
                    FaTired = (_b.sent()).FaTired;
                    return [2 /*return*/, FaTired];
                case 687: return [4 /*yield*/, import("react-icons/fa")];
                case 688:
                    FaToggleOff = (_b.sent()).FaToggleOff;
                    return [2 /*return*/, FaToggleOff];
                case 689: return [4 /*yield*/, import("react-icons/fa")];
                case 690:
                    FaToggleOn = (_b.sent()).FaToggleOn;
                    return [2 /*return*/, FaToggleOn];
                case 691: return [4 /*yield*/, import("react-icons/fa")];
                case 692:
                    FaToiletPaperSlash = (_b.sent()).FaToiletPaperSlash;
                    return [2 /*return*/, FaToiletPaperSlash];
                case 693: return [4 /*yield*/, import("react-icons/fa")];
                case 694:
                    FaToiletPaper = (_b.sent()).FaToiletPaper;
                    return [2 /*return*/, FaToiletPaper];
                case 695: return [4 /*yield*/, import("react-icons/fa")];
                case 696:
                    FaToilet = (_b.sent()).FaToilet;
                    return [2 /*return*/, FaToilet];
                case 697: return [4 /*yield*/, import("react-icons/fa")];
                case 698:
                    FaToolbox = (_b.sent()).FaToolbox;
                    return [2 /*return*/, FaToolbox];
                case 699: return [4 /*yield*/, import("react-icons/fa")];
                case 700:
                    FaTools = (_b.sent()).FaTools;
                    return [2 /*return*/, FaTools];
                case 701: return [4 /*yield*/, import("react-icons/fa")];
                case 702:
                    FaTooth = (_b.sent()).FaTooth;
                    return [2 /*return*/, FaTooth];
                case 703: return [4 /*yield*/, import("react-icons/fa")];
                case 704:
                    FaTorah = (_b.sent()).FaTorah;
                    return [2 /*return*/, FaTorah];
                case 705: return [4 /*yield*/, import("react-icons/fa")];
                case 706:
                    FaToriiGate = (_b.sent()).FaToriiGate;
                    return [2 /*return*/, FaToriiGate];
                case 707: return [4 /*yield*/, import("react-icons/fa")];
                case 708:
                    FaTractor = (_b.sent()).FaTractor;
                    return [2 /*return*/, FaTractor];
                case 709: return [4 /*yield*/, import("react-icons/fa")];
                case 710:
                    FaTrademark = (_b.sent()).FaTrademark;
                    return [2 /*return*/, FaTrademark];
                case 711: return [4 /*yield*/, import("react-icons/fa")];
                case 712:
                    FaTrafficLight = (_b.sent()).FaTrafficLight;
                    return [2 /*return*/, FaTrafficLight];
                case 713: return [4 /*yield*/, import("react-icons/fa")];
                case 714:
                    FaTrailer = (_b.sent()).FaTrailer;
                    return [2 /*return*/, FaTrailer];
                case 715: return [4 /*yield*/, import("react-icons/fa")];
                case 716:
                    FaTrain = (_b.sent()).FaTrain;
                    return [2 /*return*/, FaTrain];
                case 717: return [4 /*yield*/, import("react-icons/fa")];
                case 718:
                    FaTram = (_b.sent()).FaTram;
                    return [2 /*return*/, FaTram];
                case 719: return [4 /*yield*/, import("react-icons/fa")];
                case 720:
                    FaTransgenderAlt = (_b.sent()).FaTransgenderAlt;
                    return [2 /*return*/, FaTransgenderAlt];
                case 721: return [4 /*yield*/, import("react-icons/fa")];
                case 722:
                    FaTransgender = (_b.sent()).FaTransgender;
                    return [2 /*return*/, FaTransgender];
                case 723: return [4 /*yield*/, import("react-icons/fa")];
                case 724:
                    FaTrashAlt = (_b.sent()).FaTrashAlt;
                    return [2 /*return*/, FaTrashAlt];
                case 725: return [4 /*yield*/, import("react-icons/fa")];
                case 726:
                    FaTrashRestoreAlt = (_b.sent()).FaTrashRestoreAlt;
                    return [2 /*return*/, FaTrashRestoreAlt];
                case 727: return [4 /*yield*/, import("react-icons/fa")];
                case 728:
                    FaTrashRestore = (_b.sent()).FaTrashRestore;
                    return [2 /*return*/, FaTrashRestore];
                case 729: return [4 /*yield*/, import("react-icons/fa")];
                case 730:
                    FaTrash = (_b.sent()).FaTrash;
                    return [2 /*return*/, FaTrash];
                case 731: return [4 /*yield*/, import("react-icons/fa")];
                case 732:
                    FaTree = (_b.sent()).FaTree;
                    return [2 /*return*/, FaTree];
                case 733: return [4 /*yield*/, import("react-icons/fa")];
                case 734:
                    FaTrophy = (_b.sent()).FaTrophy;
                    return [2 /*return*/, FaTrophy];
                case 735: return [4 /*yield*/, import("react-icons/fa")];
                case 736:
                    FaTruckLoading = (_b.sent()).FaTruckLoading;
                    return [2 /*return*/, FaTruckLoading];
                case 737: return [4 /*yield*/, import("react-icons/fa")];
                case 738:
                    FaTruckMonster = (_b.sent()).FaTruckMonster;
                    return [2 /*return*/, FaTruckMonster];
                case 739: return [4 /*yield*/, import("react-icons/fa")];
                case 740:
                    FaTruckMoving = (_b.sent()).FaTruckMoving;
                    return [2 /*return*/, FaTruckMoving];
                case 741: return [4 /*yield*/, import("react-icons/fa")];
                case 742:
                    FaTruckPickup = (_b.sent()).FaTruckPickup;
                    return [2 /*return*/, FaTruckPickup];
                case 743: return [4 /*yield*/, import("react-icons/fa")];
                case 744:
                    FaTruck = (_b.sent()).FaTruck;
                    return [2 /*return*/, FaTruck];
                case 745: return [4 /*yield*/, import("react-icons/fa")];
                case 746:
                    FaTshirt = (_b.sent()).FaTshirt;
                    return [2 /*return*/, FaTshirt];
                case 747: return [4 /*yield*/, import("react-icons/fa")];
                case 748:
                    FaTty = (_b.sent()).FaTty;
                    return [2 /*return*/, FaTty];
                case 749: return [4 /*yield*/, import("react-icons/fa")];
                case 750:
                    FaTv = (_b.sent()).FaTv;
                    return [2 /*return*/, FaTv];
                case 751: return [4 /*yield*/, import("react-icons/fa")];
                case 752:
                    FaUmbrellaBeach = (_b.sent()).FaUmbrellaBeach;
                    return [2 /*return*/, FaUmbrellaBeach];
                case 753: return [4 /*yield*/, import("react-icons/fa")];
                case 754:
                    FaUmbrella = (_b.sent()).FaUmbrella;
                    return [2 /*return*/, FaUmbrella];
                case 755: return [4 /*yield*/, import("react-icons/fa")];
                case 756:
                    FaUnderline = (_b.sent()).FaUnderline;
                    return [2 /*return*/, FaUnderline];
                case 757: return [4 /*yield*/, import("react-icons/fa")];
                case 758:
                    FaUndoAlt = (_b.sent()).FaUndoAlt;
                    return [2 /*return*/, FaUndoAlt];
                case 759: return [4 /*yield*/, import("react-icons/fa")];
                case 760:
                    FaUndo = (_b.sent()).FaUndo;
                    return [2 /*return*/, FaUndo];
                case 761: return [4 /*yield*/, import("react-icons/fa")];
                case 762:
                    FaUniversalAccess = (_b.sent()).FaUniversalAccess;
                    return [2 /*return*/, FaUniversalAccess];
                case 763: return [4 /*yield*/, import("react-icons/fa")];
                case 764:
                    FaUniversity = (_b.sent()).FaUniversity;
                    return [2 /*return*/, FaUniversity];
                case 765: return [4 /*yield*/, import("react-icons/fa")];
                case 766:
                    FaUnlink = (_b.sent()).FaUnlink;
                    return [2 /*return*/, FaUnlink];
                case 767: return [4 /*yield*/, import("react-icons/fa")];
                case 768:
                    FaUnlockAlt = (_b.sent()).FaUnlockAlt;
                    return [2 /*return*/, FaUnlockAlt];
                case 769: return [4 /*yield*/, import("react-icons/fa")];
                case 770:
                    FaUnlock = (_b.sent()).FaUnlock;
                    return [2 /*return*/, FaUnlock];
                case 771: return [4 /*yield*/, import("react-icons/fa")];
                case 772:
                    FaUpload = (_b.sent()).FaUpload;
                    return [2 /*return*/, FaUpload];
                case 773: return [4 /*yield*/, import("react-icons/fa")];
                case 774:
                    FaUserAltSlash = (_b.sent()).FaUserAltSlash;
                    return [2 /*return*/, FaUserAltSlash];
                case 775: return [4 /*yield*/, import("react-icons/fa")];
                case 776:
                    FaUserAlt = (_b.sent()).FaUserAlt;
                    return [2 /*return*/, FaUserAlt];
                case 777: return [4 /*yield*/, import("react-icons/fa")];
                case 778:
                    FaUserAstronaut = (_b.sent()).FaUserAstronaut;
                    return [2 /*return*/, FaUserAstronaut];
                case 779: return [4 /*yield*/, import("react-icons/fa")];
                case 780:
                    FaUserCheck = (_b.sent()).FaUserCheck;
                    return [2 /*return*/, FaUserCheck];
                case 781: return [4 /*yield*/, import("react-icons/fa")];
                case 782:
                    FaUserCircle = (_b.sent()).FaUserCircle;
                    return [2 /*return*/, FaUserCircle];
                case 783: return [4 /*yield*/, import("react-icons/fa")];
                case 784:
                    FaUserClock = (_b.sent()).FaUserClock;
                    return [2 /*return*/, FaUserClock];
                case 785: return [4 /*yield*/, import("react-icons/fa")];
                case 786:
                    FaUserCog = (_b.sent()).FaUserCog;
                    return [2 /*return*/, FaUserCog];
                case 787: return [4 /*yield*/, import("react-icons/fa")];
                case 788:
                    FaUserEdit = (_b.sent()).FaUserEdit;
                    return [2 /*return*/, FaUserEdit];
                case 789: return [4 /*yield*/, import("react-icons/fa")];
                case 790:
                    FaUserFriends = (_b.sent()).FaUserFriends;
                    return [2 /*return*/, FaUserFriends];
                case 791: return [4 /*yield*/, import("react-icons/fa")];
                case 792:
                    FaUserGraduate = (_b.sent()).FaUserGraduate;
                    return [2 /*return*/, FaUserGraduate];
                case 793: return [4 /*yield*/, import("react-icons/fa")];
                case 794:
                    FaUserInjured = (_b.sent()).FaUserInjured;
                    return [2 /*return*/, FaUserInjured];
                case 795: return [4 /*yield*/, import("react-icons/fa")];
                case 796:
                    FaUserLock = (_b.sent()).FaUserLock;
                    return [2 /*return*/, FaUserLock];
                case 797: return [4 /*yield*/, import("react-icons/fa")];
                case 798:
                    FaUserMd = (_b.sent()).FaUserMd;
                    return [2 /*return*/, FaUserMd];
                case 799: return [4 /*yield*/, import("react-icons/fa")];
                case 800:
                    FaUserMinus = (_b.sent()).FaUserMinus;
                    return [2 /*return*/, FaUserMinus];
                case 801: return [4 /*yield*/, import("react-icons/fa")];
                case 802:
                    FaUserNinja = (_b.sent()).FaUserNinja;
                    return [2 /*return*/, FaUserNinja];
                case 803: return [4 /*yield*/, import("react-icons/fa")];
                case 804:
                    FaUserNurse = (_b.sent()).FaUserNurse;
                    return [2 /*return*/, FaUserNurse];
                case 805: return [4 /*yield*/, import("react-icons/fa")];
                case 806:
                    FaUserPlus = (_b.sent()).FaUserPlus;
                    return [2 /*return*/, FaUserPlus];
                case 807: return [4 /*yield*/, import("react-icons/fa")];
                case 808:
                    FaUserSecret = (_b.sent()).FaUserSecret;
                    return [2 /*return*/, FaUserSecret];
                case 809: return [4 /*yield*/, import("react-icons/fa")];
                case 810:
                    FaUserShield = (_b.sent()).FaUserShield;
                    return [2 /*return*/, FaUserShield];
                case 811: return [4 /*yield*/, import("react-icons/fa")];
                case 812:
                    FaUserSlash = (_b.sent()).FaUserSlash;
                    return [2 /*return*/, FaUserSlash];
                case 813: return [4 /*yield*/, import("react-icons/fa")];
                case 814:
                    FaUserTag = (_b.sent()).FaUserTag;
                    return [2 /*return*/, FaUserTag];
                case 815: return [4 /*yield*/, import("react-icons/fa")];
                case 816:
                    FaUserTie = (_b.sent()).FaUserTie;
                    return [2 /*return*/, FaUserTie];
                case 817: return [4 /*yield*/, import("react-icons/fa")];
                case 818:
                    FaUserTimes = (_b.sent()).FaUserTimes;
                    return [2 /*return*/, FaUserTimes];
                case 819: return [4 /*yield*/, import("react-icons/fa")];
                case 820:
                    FaUser = (_b.sent()).FaUser;
                    return [2 /*return*/, FaUser];
                case 821: return [4 /*yield*/, import("react-icons/fa")];
                case 822:
                    FaUsersCog = (_b.sent()).FaUsersCog;
                    return [2 /*return*/, FaUsersCog];
                case 823: return [4 /*yield*/, import("react-icons/fa")];
                case 824:
                    FaUsersSlash = (_b.sent()).FaUsersSlash;
                    return [2 /*return*/, FaUsersSlash];
                case 825: return [4 /*yield*/, import("react-icons/fa")];
                case 826:
                    FaUsers = (_b.sent()).FaUsers;
                    return [2 /*return*/, FaUsers];
                case 827: return [4 /*yield*/, import("react-icons/fa")];
                case 828:
                    FaUtensilSpoon = (_b.sent()).FaUtensilSpoon;
                    return [2 /*return*/, FaUtensilSpoon];
                case 829: return [4 /*yield*/, import("react-icons/fa")];
                case 830:
                    FaUtensils = (_b.sent()).FaUtensils;
                    return [2 /*return*/, FaUtensils];
                case 831: return [4 /*yield*/, import("react-icons/fa")];
                case 832:
                    FaVectorSquare = (_b.sent()).FaVectorSquare;
                    return [2 /*return*/, FaVectorSquare];
                case 833: return [4 /*yield*/, import("react-icons/fa")];
                case 834:
                    FaVenusDouble = (_b.sent()).FaVenusDouble;
                    return [2 /*return*/, FaVenusDouble];
                case 835: return [4 /*yield*/, import("react-icons/fa")];
                case 836:
                    FaVenusMars = (_b.sent()).FaVenusMars;
                    return [2 /*return*/, FaVenusMars];
                case 837: return [4 /*yield*/, import("react-icons/fa")];
                case 838:
                    FaVenus = (_b.sent()).FaVenus;
                    return [2 /*return*/, FaVenus];
                case 839: return [4 /*yield*/, import("react-icons/fa")];
                case 840:
                    FaVestPatches = (_b.sent()).FaVestPatches;
                    return [2 /*return*/, FaVestPatches];
                case 841: return [4 /*yield*/, import("react-icons/fa")];
                case 842:
                    FaVest = (_b.sent()).FaVest;
                    return [2 /*return*/, FaVest];
                case 843: return [4 /*yield*/, import("react-icons/fa")];
                case 844:
                    FaVial = (_b.sent()).FaVial;
                    return [2 /*return*/, FaVial];
                case 845: return [4 /*yield*/, import("react-icons/fa")];
                case 846:
                    FaVials = (_b.sent()).FaVials;
                    return [2 /*return*/, FaVials];
                case 847: return [4 /*yield*/, import("react-icons/fa")];
                case 848:
                    FaVideoSlash = (_b.sent()).FaVideoSlash;
                    return [2 /*return*/, FaVideoSlash];
                case 849: return [4 /*yield*/, import("react-icons/fa")];
                case 850:
                    FaVideo = (_b.sent()).FaVideo;
                    return [2 /*return*/, FaVideo];
                case 851: return [4 /*yield*/, import("react-icons/fa")];
                case 852:
                    FaVihara = (_b.sent()).FaVihara;
                    return [2 /*return*/, FaVihara];
                case 853: return [4 /*yield*/, import("react-icons/fa")];
                case 854:
                    FaVirusSlash = (_b.sent()).FaVirusSlash;
                    return [2 /*return*/, FaVirusSlash];
                case 855: return [4 /*yield*/, import("react-icons/fa")];
                case 856:
                    FaVirus = (_b.sent()).FaVirus;
                    return [2 /*return*/, FaVirus];
                case 857: return [4 /*yield*/, import("react-icons/fa")];
                case 858:
                    FaViruses = (_b.sent()).FaViruses;
                    return [2 /*return*/, FaViruses];
                case 859: return [4 /*yield*/, import("react-icons/fa")];
                case 860:
                    FaVoicemail = (_b.sent()).FaVoicemail;
                    return [2 /*return*/, FaVoicemail];
                case 861: return [4 /*yield*/, import("react-icons/fa")];
                case 862:
                    FaVolleyballBall = (_b.sent()).FaVolleyballBall;
                    return [2 /*return*/, FaVolleyballBall];
                case 863: return [4 /*yield*/, import("react-icons/fa")];
                case 864:
                    FaVolumeDown = (_b.sent()).FaVolumeDown;
                    return [2 /*return*/, FaVolumeDown];
                case 865: return [4 /*yield*/, import("react-icons/fa")];
                case 866:
                    FaVolumeMute = (_b.sent()).FaVolumeMute;
                    return [2 /*return*/, FaVolumeMute];
                case 867: return [4 /*yield*/, import("react-icons/fa")];
                case 868:
                    FaVolumeOff = (_b.sent()).FaVolumeOff;
                    return [2 /*return*/, FaVolumeOff];
                case 869: return [4 /*yield*/, import("react-icons/fa")];
                case 870:
                    FaVolumeUp = (_b.sent()).FaVolumeUp;
                    return [2 /*return*/, FaVolumeUp];
                case 871: return [4 /*yield*/, import("react-icons/fa")];
                case 872:
                    FaVoteYea = (_b.sent()).FaVoteYea;
                    return [2 /*return*/, FaVoteYea];
                case 873: return [4 /*yield*/, import("react-icons/fa")];
                case 874:
                    FaVrCardboard = (_b.sent()).FaVrCardboard;
                    return [2 /*return*/, FaVrCardboard];
                case 875: return [4 /*yield*/, import("react-icons/fa")];
                case 876:
                    FaWalking = (_b.sent()).FaWalking;
                    return [2 /*return*/, FaWalking];
                case 877: return [4 /*yield*/, import("react-icons/fa")];
                case 878:
                    FaWallet = (_b.sent()).FaWallet;
                    return [2 /*return*/, FaWallet];
                case 879: return [4 /*yield*/, import("react-icons/fa")];
                case 880:
                    FaWarehouse = (_b.sent()).FaWarehouse;
                    return [2 /*return*/, FaWarehouse];
                case 881: return [4 /*yield*/, import("react-icons/fa")];
                case 882:
                    FaWater = (_b.sent()).FaWater;
                    return [2 /*return*/, FaWater];
                case 883: return [4 /*yield*/, import("react-icons/fa")];
                case 884:
                    FaWaveSquare = (_b.sent()).FaWaveSquare;
                    return [2 /*return*/, FaWaveSquare];
                case 885: return [4 /*yield*/, import("react-icons/fa")];
                case 886:
                    FaWeightHanging = (_b.sent()).FaWeightHanging;
                    return [2 /*return*/, FaWeightHanging];
                case 887: return [4 /*yield*/, import("react-icons/fa")];
                case 888:
                    FaWeight = (_b.sent()).FaWeight;
                    return [2 /*return*/, FaWeight];
                case 889: return [4 /*yield*/, import("react-icons/fa")];
                case 890:
                    FaWheelchair = (_b.sent()).FaWheelchair;
                    return [2 /*return*/, FaWheelchair];
                case 891: return [4 /*yield*/, import("react-icons/fa")];
                case 892:
                    FaWifi = (_b.sent()).FaWifi;
                    return [2 /*return*/, FaWifi];
                case 893: return [4 /*yield*/, import("react-icons/fa")];
                case 894:
                    FaWind = (_b.sent()).FaWind;
                    return [2 /*return*/, FaWind];
                case 895: return [4 /*yield*/, import("react-icons/fa")];
                case 896:
                    FaWindowClose = (_b.sent()).FaWindowClose;
                    return [2 /*return*/, FaWindowClose];
                case 897: return [4 /*yield*/, import("react-icons/fa")];
                case 898:
                    FaWindowMaximize = (_b.sent()).FaWindowMaximize;
                    return [2 /*return*/, FaWindowMaximize];
                case 899: return [4 /*yield*/, import("react-icons/fa")];
                case 900:
                    FaWindowMinimize = (_b.sent()).FaWindowMinimize;
                    return [2 /*return*/, FaWindowMinimize];
                case 901: return [4 /*yield*/, import("react-icons/fa")];
                case 902:
                    FaWindowRestore = (_b.sent()).FaWindowRestore;
                    return [2 /*return*/, FaWindowRestore];
                case 903: return [4 /*yield*/, import("react-icons/fa")];
                case 904:
                    FaWineBottle = (_b.sent()).FaWineBottle;
                    return [2 /*return*/, FaWineBottle];
                case 905: return [4 /*yield*/, import("react-icons/fa")];
                case 906:
                    FaWineGlassAlt = (_b.sent()).FaWineGlassAlt;
                    return [2 /*return*/, FaWineGlassAlt];
                case 907: return [4 /*yield*/, import("react-icons/fa")];
                case 908:
                    FaWineGlass = (_b.sent()).FaWineGlass;
                    return [2 /*return*/, FaWineGlass];
                case 909: return [4 /*yield*/, import("react-icons/fa")];
                case 910:
                    FaWonSign = (_b.sent()).FaWonSign;
                    return [2 /*return*/, FaWonSign];
                case 911: return [4 /*yield*/, import("react-icons/fa")];
                case 912:
                    FaWrench = (_b.sent()).FaWrench;
                    return [2 /*return*/, FaWrench];
                case 913: return [4 /*yield*/, import("react-icons/fa")];
                case 914:
                    FaXRay = (_b.sent()).FaXRay;
                    return [2 /*return*/, FaXRay];
                case 915: return [4 /*yield*/, import("react-icons/fa")];
                case 916:
                    FaYenSign = (_b.sent()).FaYenSign;
                    return [2 /*return*/, FaYenSign];
                case 917: return [4 /*yield*/, import("react-icons/fa")];
                case 918:
                    FaYinYang = (_b.sent()).FaYinYang;
                    return [2 /*return*/, FaYinYang];
                case 919: return [4 /*yield*/, import("react-icons/fa")];
                case 920:
                    FaRegAddressBook = (_b.sent()).FaRegAddressBook;
                    return [2 /*return*/, FaRegAddressBook];
                case 921: return [4 /*yield*/, import("react-icons/fa")];
                case 922:
                    FaRegAddressCard = (_b.sent()).FaRegAddressCard;
                    return [2 /*return*/, FaRegAddressCard];
                case 923: return [4 /*yield*/, import("react-icons/fa")];
                case 924:
                    FaRegAngry = (_b.sent()).FaRegAngry;
                    return [2 /*return*/, FaRegAngry];
                case 925: return [4 /*yield*/, import("react-icons/fa")];
                case 926:
                    FaRegArrowAltCircleDown = (_b.sent()).FaRegArrowAltCircleDown;
                    return [2 /*return*/, FaRegArrowAltCircleDown];
                case 927: return [4 /*yield*/, import("react-icons/fa")];
                case 928:
                    FaRegArrowAltCircleLeft = (_b.sent()).FaRegArrowAltCircleLeft;
                    return [2 /*return*/, FaRegArrowAltCircleLeft];
                case 929: return [4 /*yield*/, import("react-icons/fa")];
                case 930:
                    FaRegArrowAltCircleRight = (_b.sent()).FaRegArrowAltCircleRight;
                    return [2 /*return*/, FaRegArrowAltCircleRight];
                case 931: return [4 /*yield*/, import("react-icons/fa")];
                case 932:
                    FaRegArrowAltCircleUp = (_b.sent()).FaRegArrowAltCircleUp;
                    return [2 /*return*/, FaRegArrowAltCircleUp];
                case 933: return [4 /*yield*/, import("react-icons/fa")];
                case 934:
                    FaRegBellSlash = (_b.sent()).FaRegBellSlash;
                    return [2 /*return*/, FaRegBellSlash];
                case 935: return [4 /*yield*/, import("react-icons/fa")];
                case 936:
                    FaRegBell = (_b.sent()).FaRegBell;
                    return [2 /*return*/, FaRegBell];
                case 937: return [4 /*yield*/, import("react-icons/fa")];
                case 938:
                    FaRegBookmark = (_b.sent()).FaRegBookmark;
                    return [2 /*return*/, FaRegBookmark];
                case 939: return [4 /*yield*/, import("react-icons/fa")];
                case 940:
                    FaRegBuilding = (_b.sent()).FaRegBuilding;
                    return [2 /*return*/, FaRegBuilding];
                case 941: return [4 /*yield*/, import("react-icons/fa")];
                case 942:
                    FaRegCalendarAlt = (_b.sent()).FaRegCalendarAlt;
                    return [2 /*return*/, FaRegCalendarAlt];
                case 943: return [4 /*yield*/, import("react-icons/fa")];
                case 944:
                    FaRegCalendarCheck = (_b.sent()).FaRegCalendarCheck;
                    return [2 /*return*/, FaRegCalendarCheck];
                case 945: return [4 /*yield*/, import("react-icons/fa")];
                case 946:
                    FaRegCalendarMinus = (_b.sent()).FaRegCalendarMinus;
                    return [2 /*return*/, FaRegCalendarMinus];
                case 947: return [4 /*yield*/, import("react-icons/fa")];
                case 948:
                    FaRegCalendarPlus = (_b.sent()).FaRegCalendarPlus;
                    return [2 /*return*/, FaRegCalendarPlus];
                case 949: return [4 /*yield*/, import("react-icons/fa")];
                case 950:
                    FaRegCalendarTimes = (_b.sent()).FaRegCalendarTimes;
                    return [2 /*return*/, FaRegCalendarTimes];
                case 951: return [4 /*yield*/, import("react-icons/fa")];
                case 952:
                    FaRegCalendar = (_b.sent()).FaRegCalendar;
                    return [2 /*return*/, FaRegCalendar];
                case 953: return [4 /*yield*/, import("react-icons/fa")];
                case 954:
                    FaRegCaretSquareDown = (_b.sent()).FaRegCaretSquareDown;
                    return [2 /*return*/, FaRegCaretSquareDown];
                case 955: return [4 /*yield*/, import("react-icons/fa")];
                case 956:
                    FaRegCaretSquareLeft = (_b.sent()).FaRegCaretSquareLeft;
                    return [2 /*return*/, FaRegCaretSquareLeft];
                case 957: return [4 /*yield*/, import("react-icons/fa")];
                case 958:
                    FaRegCaretSquareRight = (_b.sent()).FaRegCaretSquareRight;
                    return [2 /*return*/, FaRegCaretSquareRight];
                case 959: return [4 /*yield*/, import("react-icons/fa")];
                case 960:
                    FaRegCaretSquareUp = (_b.sent()).FaRegCaretSquareUp;
                    return [2 /*return*/, FaRegCaretSquareUp];
                case 961: return [4 /*yield*/, import("react-icons/fa")];
                case 962:
                    FaRegChartBar = (_b.sent()).FaRegChartBar;
                    return [2 /*return*/, FaRegChartBar];
                case 963: return [4 /*yield*/, import("react-icons/fa")];
                case 964:
                    FaRegCheckCircle = (_b.sent()).FaRegCheckCircle;
                    return [2 /*return*/, FaRegCheckCircle];
                case 965: return [4 /*yield*/, import("react-icons/fa")];
                case 966:
                    FaRegCheckSquare = (_b.sent()).FaRegCheckSquare;
                    return [2 /*return*/, FaRegCheckSquare];
                case 967: return [4 /*yield*/, import("react-icons/fa")];
                case 968:
                    FaRegCircle = (_b.sent()).FaRegCircle;
                    return [2 /*return*/, FaRegCircle];
                case 969: return [4 /*yield*/, import("react-icons/fa")];
                case 970:
                    FaRegClipboard = (_b.sent()).FaRegClipboard;
                    return [2 /*return*/, FaRegClipboard];
                case 971: return [4 /*yield*/, import("react-icons/fa")];
                case 972:
                    FaRegClock = (_b.sent()).FaRegClock;
                    return [2 /*return*/, FaRegClock];
                case 973: return [4 /*yield*/, import("react-icons/fa")];
                case 974:
                    FaRegClone = (_b.sent()).FaRegClone;
                    return [2 /*return*/, FaRegClone];
                case 975: return [4 /*yield*/, import("react-icons/fa")];
                case 976:
                    FaRegClosedCaptioning = (_b.sent()).FaRegClosedCaptioning;
                    return [2 /*return*/, FaRegClosedCaptioning];
                case 977: return [4 /*yield*/, import("react-icons/fa")];
                case 978:
                    FaRegCommentAlt = (_b.sent()).FaRegCommentAlt;
                    return [2 /*return*/, FaRegCommentAlt];
                case 979: return [4 /*yield*/, import("react-icons/fa")];
                case 980:
                    FaRegCommentDots = (_b.sent()).FaRegCommentDots;
                    return [2 /*return*/, FaRegCommentDots];
                case 981: return [4 /*yield*/, import("react-icons/fa")];
                case 982:
                    FaRegComment = (_b.sent()).FaRegComment;
                    return [2 /*return*/, FaRegComment];
                case 983: return [4 /*yield*/, import("react-icons/fa")];
                case 984:
                    FaRegComments = (_b.sent()).FaRegComments;
                    return [2 /*return*/, FaRegComments];
                case 985: return [4 /*yield*/, import("react-icons/fa")];
                case 986:
                    FaRegCompass = (_b.sent()).FaRegCompass;
                    return [2 /*return*/, FaRegCompass];
                case 987: return [4 /*yield*/, import("react-icons/fa")];
                case 988:
                    FaRegCopy = (_b.sent()).FaRegCopy;
                    return [2 /*return*/, FaRegCopy];
                case 989: return [4 /*yield*/, import("react-icons/fa")];
                case 990:
                    FaRegCopyright = (_b.sent()).FaRegCopyright;
                    return [2 /*return*/, FaRegCopyright];
                case 991: return [4 /*yield*/, import("react-icons/fa")];
                case 992:
                    FaRegCreditCard = (_b.sent()).FaRegCreditCard;
                    return [2 /*return*/, FaRegCreditCard];
                case 993: return [4 /*yield*/, import("react-icons/fa")];
                case 994:
                    FaRegDizzy = (_b.sent()).FaRegDizzy;
                    return [2 /*return*/, FaRegDizzy];
                case 995: return [4 /*yield*/, import("react-icons/fa")];
                case 996:
                    FaRegDotCircle = (_b.sent()).FaRegDotCircle;
                    return [2 /*return*/, FaRegDotCircle];
                case 997: return [4 /*yield*/, import("react-icons/fa")];
                case 998:
                    FaRegEdit = (_b.sent()).FaRegEdit;
                    return [2 /*return*/, FaRegEdit];
                case 999: return [4 /*yield*/, import("react-icons/fa")];
                case 1000:
                    FaRegEnvelopeOpen = (_b.sent()).FaRegEnvelopeOpen;
                    return [2 /*return*/, FaRegEnvelopeOpen];
                case 1001: return [4 /*yield*/, import("react-icons/fa")];
                case 1002:
                    FaRegEnvelope = (_b.sent()).FaRegEnvelope;
                    return [2 /*return*/, FaRegEnvelope];
                case 1003: return [4 /*yield*/, import("react-icons/fa")];
                case 1004:
                    FaRegEyeSlash = (_b.sent()).FaRegEyeSlash;
                    return [2 /*return*/, FaRegEyeSlash];
                case 1005: return [4 /*yield*/, import("react-icons/fa")];
                case 1006:
                    FaRegEye = (_b.sent()).FaRegEye;
                    return [2 /*return*/, FaRegEye];
                case 1007: return [4 /*yield*/, import("react-icons/fa")];
                case 1008:
                    FaRegFileAlt = (_b.sent()).FaRegFileAlt;
                    return [2 /*return*/, FaRegFileAlt];
                case 1009: return [4 /*yield*/, import("react-icons/fa")];
                case 1010:
                    FaRegFileArchive = (_b.sent()).FaRegFileArchive;
                    return [2 /*return*/, FaRegFileArchive];
                case 1011: return [4 /*yield*/, import("react-icons/fa")];
                case 1012:
                    FaRegFileAudio = (_b.sent()).FaRegFileAudio;
                    return [2 /*return*/, FaRegFileAudio];
                case 1013: return [4 /*yield*/, import("react-icons/fa")];
                case 1014:
                    FaRegFileCode = (_b.sent()).FaRegFileCode;
                    return [2 /*return*/, FaRegFileCode];
                case 1015: return [4 /*yield*/, import("react-icons/fa")];
                case 1016:
                    FaRegFileExcel = (_b.sent()).FaRegFileExcel;
                    return [2 /*return*/, FaRegFileExcel];
                case 1017: return [4 /*yield*/, import("react-icons/fa")];
                case 1018:
                    FaRegFileImage = (_b.sent()).FaRegFileImage;
                    return [2 /*return*/, FaRegFileImage];
                case 1019: return [4 /*yield*/, import("react-icons/fa")];
                case 1020:
                    FaRegFilePdf = (_b.sent()).FaRegFilePdf;
                    return [2 /*return*/, FaRegFilePdf];
                case 1021: return [4 /*yield*/, import("react-icons/fa")];
                case 1022:
                    FaRegFilePowerpoint = (_b.sent()).FaRegFilePowerpoint;
                    return [2 /*return*/, FaRegFilePowerpoint];
                case 1023: return [4 /*yield*/, import("react-icons/fa")];
                case 1024:
                    FaRegFileVideo = (_b.sent()).FaRegFileVideo;
                    return [2 /*return*/, FaRegFileVideo];
                case 1025: return [4 /*yield*/, import("react-icons/fa")];
                case 1026:
                    FaRegFileWord = (_b.sent()).FaRegFileWord;
                    return [2 /*return*/, FaRegFileWord];
                case 1027: return [4 /*yield*/, import("react-icons/fa")];
                case 1028:
                    FaRegFile = (_b.sent()).FaRegFile;
                    return [2 /*return*/, FaRegFile];
                case 1029: return [4 /*yield*/, import("react-icons/fa")];
                case 1030:
                    FaRegFlag = (_b.sent()).FaRegFlag;
                    return [2 /*return*/, FaRegFlag];
                case 1031: return [4 /*yield*/, import("react-icons/fa")];
                case 1032:
                    FaRegFlushed = (_b.sent()).FaRegFlushed;
                    return [2 /*return*/, FaRegFlushed];
                case 1033: return [4 /*yield*/, import("react-icons/fa")];
                case 1034:
                    FaRegFolderOpen = (_b.sent()).FaRegFolderOpen;
                    return [2 /*return*/, FaRegFolderOpen];
                case 1035: return [4 /*yield*/, import("react-icons/fa")];
                case 1036:
                    FaRegFolder = (_b.sent()).FaRegFolder;
                    return [2 /*return*/, FaRegFolder];
                case 1037: return [4 /*yield*/, import("react-icons/fa")];
                case 1038:
                    FaRegFontAwesomeLogoFull = (_b.sent()).FaRegFontAwesomeLogoFull;
                    return [2 /*return*/, FaRegFontAwesomeLogoFull];
                case 1039: return [4 /*yield*/, import("react-icons/fa")];
                case 1040:
                    FaRegFrownOpen = (_b.sent()).FaRegFrownOpen;
                    return [2 /*return*/, FaRegFrownOpen];
                case 1041: return [4 /*yield*/, import("react-icons/fa")];
                case 1042:
                    FaRegFrown = (_b.sent()).FaRegFrown;
                    return [2 /*return*/, FaRegFrown];
                case 1043: return [4 /*yield*/, import("react-icons/fa")];
                case 1044:
                    FaRegFutbol = (_b.sent()).FaRegFutbol;
                    return [2 /*return*/, FaRegFutbol];
                case 1045: return [4 /*yield*/, import("react-icons/fa")];
                case 1046:
                    FaRegGem = (_b.sent()).FaRegGem;
                    return [2 /*return*/, FaRegGem];
                case 1047: return [4 /*yield*/, import("react-icons/fa")];
                case 1048:
                    FaRegGrimace = (_b.sent()).FaRegGrimace;
                    return [2 /*return*/, FaRegGrimace];
                case 1049: return [4 /*yield*/, import("react-icons/fa")];
                case 1050:
                    FaRegGrinAlt = (_b.sent()).FaRegGrinAlt;
                    return [2 /*return*/, FaRegGrinAlt];
                case 1051: return [4 /*yield*/, import("react-icons/fa")];
                case 1052:
                    FaRegGrinBeamSweat = (_b.sent()).FaRegGrinBeamSweat;
                    return [2 /*return*/, FaRegGrinBeamSweat];
                case 1053: return [4 /*yield*/, import("react-icons/fa")];
                case 1054:
                    FaRegGrinBeam = (_b.sent()).FaRegGrinBeam;
                    return [2 /*return*/, FaRegGrinBeam];
                case 1055: return [4 /*yield*/, import("react-icons/fa")];
                case 1056:
                    FaRegGrinHearts = (_b.sent()).FaRegGrinHearts;
                    return [2 /*return*/, FaRegGrinHearts];
                case 1057: return [4 /*yield*/, import("react-icons/fa")];
                case 1058:
                    FaRegGrinSquintTears = (_b.sent()).FaRegGrinSquintTears;
                    return [2 /*return*/, FaRegGrinSquintTears];
                case 1059: return [4 /*yield*/, import("react-icons/fa")];
                case 1060:
                    FaRegGrinSquint = (_b.sent()).FaRegGrinSquint;
                    return [2 /*return*/, FaRegGrinSquint];
                case 1061: return [4 /*yield*/, import("react-icons/fa")];
                case 1062:
                    FaRegGrinStars = (_b.sent()).FaRegGrinStars;
                    return [2 /*return*/, FaRegGrinStars];
                case 1063: return [4 /*yield*/, import("react-icons/fa")];
                case 1064:
                    FaRegGrinTears = (_b.sent()).FaRegGrinTears;
                    return [2 /*return*/, FaRegGrinTears];
                case 1065: return [4 /*yield*/, import("react-icons/fa")];
                case 1066:
                    FaRegGrinTongueSquint = (_b.sent()).FaRegGrinTongueSquint;
                    return [2 /*return*/, FaRegGrinTongueSquint];
                case 1067: return [4 /*yield*/, import("react-icons/fa")];
                case 1068:
                    FaRegGrinTongueWink = (_b.sent()).FaRegGrinTongueWink;
                    return [2 /*return*/, FaRegGrinTongueWink];
                case 1069: return [4 /*yield*/, import("react-icons/fa")];
                case 1070:
                    FaRegGrinTongue = (_b.sent()).FaRegGrinTongue;
                    return [2 /*return*/, FaRegGrinTongue];
                case 1071: return [4 /*yield*/, import("react-icons/fa")];
                case 1072:
                    FaRegGrinWink = (_b.sent()).FaRegGrinWink;
                    return [2 /*return*/, FaRegGrinWink];
                case 1073: return [4 /*yield*/, import("react-icons/fa")];
                case 1074:
                    FaRegGrin = (_b.sent()).FaRegGrin;
                    return [2 /*return*/, FaRegGrin];
                case 1075: return [4 /*yield*/, import("react-icons/fa")];
                case 1076:
                    FaRegHandLizard = (_b.sent()).FaRegHandLizard;
                    return [2 /*return*/, FaRegHandLizard];
                case 1077: return [4 /*yield*/, import("react-icons/fa")];
                case 1078:
                    FaRegHandPaper = (_b.sent()).FaRegHandPaper;
                    return [2 /*return*/, FaRegHandPaper];
                case 1079: return [4 /*yield*/, import("react-icons/fa")];
                case 1080:
                    FaRegHandPeace = (_b.sent()).FaRegHandPeace;
                    return [2 /*return*/, FaRegHandPeace];
                case 1081: return [4 /*yield*/, import("react-icons/fa")];
                case 1082:
                    FaRegHandPointDown = (_b.sent()).FaRegHandPointDown;
                    return [2 /*return*/, FaRegHandPointDown];
                case 1083: return [4 /*yield*/, import("react-icons/fa")];
                case 1084:
                    FaRegHandPointLeft = (_b.sent()).FaRegHandPointLeft;
                    return [2 /*return*/, FaRegHandPointLeft];
                case 1085: return [4 /*yield*/, import("react-icons/fa")];
                case 1086:
                    FaRegHandPointRight = (_b.sent()).FaRegHandPointRight;
                    return [2 /*return*/, FaRegHandPointRight];
                case 1087: return [4 /*yield*/, import("react-icons/fa")];
                case 1088:
                    FaRegHandPointUp = (_b.sent()).FaRegHandPointUp;
                    return [2 /*return*/, FaRegHandPointUp];
                case 1089: return [4 /*yield*/, import("react-icons/fa")];
                case 1090:
                    FaRegHandPointer = (_b.sent()).FaRegHandPointer;
                    return [2 /*return*/, FaRegHandPointer];
                case 1091: return [4 /*yield*/, import("react-icons/fa")];
                case 1092:
                    FaRegHandRock = (_b.sent()).FaRegHandRock;
                    return [2 /*return*/, FaRegHandRock];
                case 1093: return [4 /*yield*/, import("react-icons/fa")];
                case 1094:
                    FaRegHandScissors = (_b.sent()).FaRegHandScissors;
                    return [2 /*return*/, FaRegHandScissors];
                case 1095: return [4 /*yield*/, import("react-icons/fa")];
                case 1096:
                    FaRegHandSpock = (_b.sent()).FaRegHandSpock;
                    return [2 /*return*/, FaRegHandSpock];
                case 1097: return [4 /*yield*/, import("react-icons/fa")];
                case 1098:
                    FaRegHandshake = (_b.sent()).FaRegHandshake;
                    return [2 /*return*/, FaRegHandshake];
                case 1099: return [4 /*yield*/, import("react-icons/fa")];
                case 1100:
                    FaRegHdd = (_b.sent()).FaRegHdd;
                    return [2 /*return*/, FaRegHdd];
                case 1101: return [4 /*yield*/, import("react-icons/fa")];
                case 1102:
                    FaRegHeart = (_b.sent()).FaRegHeart;
                    return [2 /*return*/, FaRegHeart];
                case 1103: return [4 /*yield*/, import("react-icons/fa")];
                case 1104:
                    FaRegHospital = (_b.sent()).FaRegHospital;
                    return [2 /*return*/, FaRegHospital];
                case 1105: return [4 /*yield*/, import("react-icons/fa")];
                case 1106:
                    FaRegHourglass = (_b.sent()).FaRegHourglass;
                    return [2 /*return*/, FaRegHourglass];
                case 1107: return [4 /*yield*/, import("react-icons/fa")];
                case 1108:
                    FaRegIdBadge = (_b.sent()).FaRegIdBadge;
                    return [2 /*return*/, FaRegIdBadge];
                case 1109: return [4 /*yield*/, import("react-icons/fa")];
                case 1110:
                    FaRegIdCard = (_b.sent()).FaRegIdCard;
                    return [2 /*return*/, FaRegIdCard];
                case 1111: return [4 /*yield*/, import("react-icons/fa")];
                case 1112:
                    FaRegImage = (_b.sent()).FaRegImage;
                    return [2 /*return*/, FaRegImage];
                case 1113: return [4 /*yield*/, import("react-icons/fa")];
                case 1114:
                    FaRegImages = (_b.sent()).FaRegImages;
                    return [2 /*return*/, FaRegImages];
                case 1115: return [4 /*yield*/, import("react-icons/fa")];
                case 1116:
                    FaRegKeyboard = (_b.sent()).FaRegKeyboard;
                    return [2 /*return*/, FaRegKeyboard];
                case 1117: return [4 /*yield*/, import("react-icons/fa")];
                case 1118:
                    FaRegKissBeam = (_b.sent()).FaRegKissBeam;
                    return [2 /*return*/, FaRegKissBeam];
                case 1119: return [4 /*yield*/, import("react-icons/fa")];
                case 1120:
                    FaRegKissWinkHeart = (_b.sent()).FaRegKissWinkHeart;
                    return [2 /*return*/, FaRegKissWinkHeart];
                case 1121: return [4 /*yield*/, import("react-icons/fa")];
                case 1122:
                    FaRegKiss = (_b.sent()).FaRegKiss;
                    return [2 /*return*/, FaRegKiss];
                case 1123: return [4 /*yield*/, import("react-icons/fa")];
                case 1124:
                    FaRegLaughBeam = (_b.sent()).FaRegLaughBeam;
                    return [2 /*return*/, FaRegLaughBeam];
                case 1125: return [4 /*yield*/, import("react-icons/fa")];
                case 1126:
                    FaRegLaughSquint = (_b.sent()).FaRegLaughSquint;
                    return [2 /*return*/, FaRegLaughSquint];
                case 1127: return [4 /*yield*/, import("react-icons/fa")];
                case 1128:
                    FaRegLaughWink = (_b.sent()).FaRegLaughWink;
                    return [2 /*return*/, FaRegLaughWink];
                case 1129: return [4 /*yield*/, import("react-icons/fa")];
                case 1130:
                    FaRegLaugh = (_b.sent()).FaRegLaugh;
                    return [2 /*return*/, FaRegLaugh];
                case 1131: return [4 /*yield*/, import("react-icons/fa")];
                case 1132:
                    FaRegLemon = (_b.sent()).FaRegLemon;
                    return [2 /*return*/, FaRegLemon];
                case 1133: return [4 /*yield*/, import("react-icons/fa")];
                case 1134:
                    FaRegLifeRing = (_b.sent()).FaRegLifeRing;
                    return [2 /*return*/, FaRegLifeRing];
                case 1135: return [4 /*yield*/, import("react-icons/fa")];
                case 1136:
                    FaRegLightbulb = (_b.sent()).FaRegLightbulb;
                    return [2 /*return*/, FaRegLightbulb];
                case 1137: return [4 /*yield*/, import("react-icons/fa")];
                case 1138:
                    FaRegListAlt = (_b.sent()).FaRegListAlt;
                    return [2 /*return*/, FaRegListAlt];
                case 1139: return [4 /*yield*/, import("react-icons/fa")];
                case 1140:
                    FaRegMap = (_b.sent()).FaRegMap;
                    return [2 /*return*/, FaRegMap];
                case 1141: return [4 /*yield*/, import("react-icons/fa")];
                case 1142:
                    FaRegMehBlank = (_b.sent()).FaRegMehBlank;
                    return [2 /*return*/, FaRegMehBlank];
                case 1143: return [4 /*yield*/, import("react-icons/fa")];
                case 1144:
                    FaRegMehRollingEyes = (_b.sent()).FaRegMehRollingEyes;
                    return [2 /*return*/, FaRegMehRollingEyes];
                case 1145: return [4 /*yield*/, import("react-icons/fa")];
                case 1146:
                    FaRegMeh = (_b.sent()).FaRegMeh;
                    return [2 /*return*/, FaRegMeh];
                case 1147: return [4 /*yield*/, import("react-icons/fa")];
                case 1148:
                    FaRegMinusSquare = (_b.sent()).FaRegMinusSquare;
                    return [2 /*return*/, FaRegMinusSquare];
                case 1149: return [4 /*yield*/, import("react-icons/fa")];
                case 1150:
                    FaRegMoneyBillAlt = (_b.sent()).FaRegMoneyBillAlt;
                    return [2 /*return*/, FaRegMoneyBillAlt];
                case 1151: return [4 /*yield*/, import("react-icons/fa")];
                case 1152:
                    FaRegMoon = (_b.sent()).FaRegMoon;
                    return [2 /*return*/, FaRegMoon];
                case 1153: return [4 /*yield*/, import("react-icons/fa")];
                case 1154:
                    FaRegNewspaper = (_b.sent()).FaRegNewspaper;
                    return [2 /*return*/, FaRegNewspaper];
                case 1155: return [4 /*yield*/, import("react-icons/fa")];
                case 1156:
                    FaRegObjectGroup = (_b.sent()).FaRegObjectGroup;
                    return [2 /*return*/, FaRegObjectGroup];
                case 1157: return [4 /*yield*/, import("react-icons/fa")];
                case 1158:
                    FaRegObjectUngroup = (_b.sent()).FaRegObjectUngroup;
                    return [2 /*return*/, FaRegObjectUngroup];
                case 1159: return [4 /*yield*/, import("react-icons/fa")];
                case 1160:
                    FaRegPaperPlane = (_b.sent()).FaRegPaperPlane;
                    return [2 /*return*/, FaRegPaperPlane];
                case 1161: return [4 /*yield*/, import("react-icons/fa")];
                case 1162:
                    FaRegPauseCircle = (_b.sent()).FaRegPauseCircle;
                    return [2 /*return*/, FaRegPauseCircle];
                case 1163: return [4 /*yield*/, import("react-icons/fa")];
                case 1164:
                    FaRegPlayCircle = (_b.sent()).FaRegPlayCircle;
                    return [2 /*return*/, FaRegPlayCircle];
                case 1165: return [4 /*yield*/, import("react-icons/fa")];
                case 1166:
                    FaRegPlusSquare = (_b.sent()).FaRegPlusSquare;
                    return [2 /*return*/, FaRegPlusSquare];
                case 1167: return [4 /*yield*/, import("react-icons/fa")];
                case 1168:
                    FaRegQuestionCircle = (_b.sent()).FaRegQuestionCircle;
                    return [2 /*return*/, FaRegQuestionCircle];
                case 1169: return [4 /*yield*/, import("react-icons/fa")];
                case 1170:
                    FaRegRegistered = (_b.sent()).FaRegRegistered;
                    return [2 /*return*/, FaRegRegistered];
                case 1171: return [4 /*yield*/, import("react-icons/fa")];
                case 1172:
                    FaRegSadCry = (_b.sent()).FaRegSadCry;
                    return [2 /*return*/, FaRegSadCry];
                case 1173: return [4 /*yield*/, import("react-icons/fa")];
                case 1174:
                    FaRegSadTear = (_b.sent()).FaRegSadTear;
                    return [2 /*return*/, FaRegSadTear];
                case 1175: return [4 /*yield*/, import("react-icons/fa")];
                case 1176:
                    FaRegSave = (_b.sent()).FaRegSave;
                    return [2 /*return*/, FaRegSave];
                case 1177: return [4 /*yield*/, import("react-icons/fa")];
                case 1178:
                    FaRegShareSquare = (_b.sent()).FaRegShareSquare;
                    return [2 /*return*/, FaRegShareSquare];
                case 1179: return [4 /*yield*/, import("react-icons/fa")];
                case 1180:
                    FaRegSmileBeam = (_b.sent()).FaRegSmileBeam;
                    return [2 /*return*/, FaRegSmileBeam];
                case 1181: return [4 /*yield*/, import("react-icons/fa")];
                case 1182:
                    FaRegSmileWink = (_b.sent()).FaRegSmileWink;
                    return [2 /*return*/, FaRegSmileWink];
                case 1183: return [4 /*yield*/, import("react-icons/fa")];
                case 1184:
                    FaRegSmile = (_b.sent()).FaRegSmile;
                    return [2 /*return*/, FaRegSmile];
                case 1185: return [4 /*yield*/, import("react-icons/fa")];
                case 1186:
                    FaRegSnowflake = (_b.sent()).FaRegSnowflake;
                    return [2 /*return*/, FaRegSnowflake];
                case 1187: return [4 /*yield*/, import("react-icons/fa")];
                case 1188:
                    FaRegSquare = (_b.sent()).FaRegSquare;
                    return [2 /*return*/, FaRegSquare];
                case 1189: return [4 /*yield*/, import("react-icons/fa")];
                case 1190:
                    FaRegStarHalf = (_b.sent()).FaRegStarHalf;
                    return [2 /*return*/, FaRegStarHalf];
                case 1191: return [4 /*yield*/, import("react-icons/fa")];
                case 1192:
                    FaRegStar = (_b.sent()).FaRegStar;
                    return [2 /*return*/, FaRegStar];
                case 1193: return [4 /*yield*/, import("react-icons/fa")];
                case 1194:
                    FaRegStickyNote = (_b.sent()).FaRegStickyNote;
                    return [2 /*return*/, FaRegStickyNote];
                case 1195: return [4 /*yield*/, import("react-icons/fa")];
                case 1196:
                    FaRegStopCircle = (_b.sent()).FaRegStopCircle;
                    return [2 /*return*/, FaRegStopCircle];
                case 1197: return [4 /*yield*/, import("react-icons/fa")];
                case 1198:
                    FaRegSun = (_b.sent()).FaRegSun;
                    return [2 /*return*/, FaRegSun];
                case 1199: return [4 /*yield*/, import("react-icons/fa")];
                case 1200:
                    FaRegSurprise = (_b.sent()).FaRegSurprise;
                    return [2 /*return*/, FaRegSurprise];
                case 1201: return [4 /*yield*/, import("react-icons/fa")];
                case 1202:
                    FaRegThumbsDown = (_b.sent()).FaRegThumbsDown;
                    return [2 /*return*/, FaRegThumbsDown];
                case 1203: return [4 /*yield*/, import("react-icons/fa")];
                case 1204:
                    FaRegThumbsUp = (_b.sent()).FaRegThumbsUp;
                    return [2 /*return*/, FaRegThumbsUp];
                case 1205: return [4 /*yield*/, import("react-icons/fa")];
                case 1206:
                    FaRegTimesCircle = (_b.sent()).FaRegTimesCircle;
                    return [2 /*return*/, FaRegTimesCircle];
                case 1207: return [4 /*yield*/, import("react-icons/fa")];
                case 1208:
                    FaRegTired = (_b.sent()).FaRegTired;
                    return [2 /*return*/, FaRegTired];
                case 1209: return [4 /*yield*/, import("react-icons/fa")];
                case 1210:
                    FaRegTrashAlt = (_b.sent()).FaRegTrashAlt;
                    return [2 /*return*/, FaRegTrashAlt];
                case 1211: return [4 /*yield*/, import("react-icons/fa")];
                case 1212:
                    FaRegUserCircle = (_b.sent()).FaRegUserCircle;
                    return [2 /*return*/, FaRegUserCircle];
                case 1213: return [4 /*yield*/, import("react-icons/fa")];
                case 1214:
                    FaRegUser = (_b.sent()).FaRegUser;
                    return [2 /*return*/, FaRegUser];
                case 1215: return [4 /*yield*/, import("react-icons/fa")];
                case 1216:
                    FaRegWindowClose = (_b.sent()).FaRegWindowClose;
                    return [2 /*return*/, FaRegWindowClose];
                case 1217: return [4 /*yield*/, import("react-icons/fa")];
                case 1218:
                    FaRegWindowMaximize = (_b.sent()).FaRegWindowMaximize;
                    return [2 /*return*/, FaRegWindowMaximize];
                case 1219: return [4 /*yield*/, import("react-icons/fa")];
                case 1220:
                    FaRegWindowMinimize = (_b.sent()).FaRegWindowMinimize;
                    return [2 /*return*/, FaRegWindowMinimize];
                case 1221: return [4 /*yield*/, import("react-icons/fa")];
                case 1222:
                    FaRegWindowRestore = (_b.sent()).FaRegWindowRestore;
                    return [2 /*return*/, FaRegWindowRestore];
                case 1223: return [2 /*return*/];
            }
        });
    });
}
