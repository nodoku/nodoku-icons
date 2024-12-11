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
export function nameToReactIcon_bi_0(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, BiAbacus, BiAccessibility, BiAddToQueue, BiAdjust, BiAlarmAdd, BiAlarmExclamation, BiAlarmOff, BiAlarmSnooze, BiAlarm, BiAlbum, BiAlignJustify, BiAlignLeft, BiAlignMiddle, BiAlignRight, BiAnalyse, BiAnchor, BiAngry, BiAperture, BiArch, BiArchiveIn, BiArchiveOut, BiArchive, BiArea, BiArrowBack, BiArrowFromBottom, BiArrowFromLeft, BiArrowFromRight, BiArrowFromTop, BiArrowToBottom, BiArrowToLeft, BiArrowToRight, BiArrowToTop, BiAt, BiAtom, BiAward, BiBadgeCheck, BiBadge, BiBaguette, BiBall, BiBandAid, BiBarChartAlt2, BiBarChartAlt, BiBarChartSquare, BiBarChart, BiBarcodeReader, BiBarcode, BiBaseball, BiBasket, BiBasketball, BiBath, BiBattery, BiBed, BiBeenHere, BiBeer, BiBellMinus, BiBellOff, BiBellPlus, BiBell, BiBible, BiBitcoin, BiBlanket, BiBlock, BiBluetooth, BiBody, BiBold, BiBoltCircle, BiBomb, BiBone, BiBong, BiBookAdd, BiBookAlt, BiBookBookmark, BiBookContent, BiBookHeart, BiBookOpen, BiBookReader, BiBook, BiBookmarkAltMinus, BiBookmarkAltPlus, BiBookmarkAlt, BiBookmarkHeart, BiBookmarkMinus, BiBookmarkPlus, BiBookmark, BiBookmarks, BiBorderAll, BiBorderBottom, BiBorderInner, BiBorderLeft, BiBorderNone, BiBorderOuter, BiBorderRadius, BiBorderRight, BiBorderTop, BiBot, BiBowlHot, BiBowlRice, BiBowlingBall, BiBox, BiBracket, BiBraille, BiBrain, BiBriefcaseAlt2, BiBriefcaseAlt, BiBriefcase, BiBrightnessHalf, BiBrightness, BiBroadcast, BiBrushAlt, BiBrush, BiBugAlt, BiBug, BiBuildingHouse, BiBuilding, BiBuildings, BiBulb, BiBullseye, BiBuoy, BiBusSchool, BiBus, BiCabinet, BiCableCar, BiCake, BiCalculator, BiCalendarAlt, BiCalendarCheck, BiCalendarEdit, BiCalendarEvent, BiCalendarExclamation, BiCalendarHeart, BiCalendarMinus, BiCalendarPlus, BiCalendarStar, BiCalendarWeek, BiCalendarX, BiCalendar, BiCameraHome, BiCameraMovie, BiCameraOff, BiCamera, BiCandles, BiCapsule, BiCaptions, BiCar, BiCard, BiCaretDownCircle, BiCaretDownSquare, BiCaretDown, BiCaretLeftCircle, BiCaretLeftSquare, BiCaretLeft, BiCaretRightCircle, BiCaretRightSquare, BiCaretRight, BiCaretUpCircle, BiCaretUpSquare, BiCaretUp, BiCarousel, BiCartAdd, BiCartAlt, BiCartDownload, BiCart, BiCast, BiCategoryAlt, BiCategory, BiCctv, BiCertification, BiChair, BiChalkboard, BiChart, BiChat, BiCheckCircle, BiCheckDouble, BiCheckShield, BiCheckSquare, BiCheck, BiCheckboxChecked, BiCheckboxMinus, BiCheckboxSquare, BiCheckbox, BiCheese, BiChevronDownCircle, BiChevronDownSquare, BiChevronDown, BiChevronLeftCircle, BiChevronLeftSquare, BiChevronLeft, BiChevronRightCircle, BiChevronRightSquare, BiChevronRight, BiChevronUpCircle, BiChevronUpSquare, BiChevronUp, BiChevronsDown, BiChevronsLeft, BiChevronsRight, BiChevronsUp, BiChild, BiChip, BiChurch, BiCircleHalf, BiCircleQuarter, BiCircleThreeQuarter, BiCircle, BiClinic, BiClipboard, BiCloset, BiCloudDownload, BiCloudDrizzle, BiCloudLightRain, BiCloudLightning, BiCloudRain, BiCloudSnow, BiCloudUpload, BiCloud, BiCodeAlt, BiCodeBlock, BiCodeCurly, BiCode, BiCoffeeTogo, BiCoffee, BiCog, BiCoinStack, BiCoin, BiCollapseAlt, BiCollapseHorizontal, BiCollapseVertical, BiCollapse, BiCollection, BiColorFill, BiColor, BiColumns, BiCommand, BiCommentAdd, BiCommentCheck, BiCommentDetail, BiCommentDots, BiCommentEdit, BiCommentError, BiCommentMinus, BiCommentX, BiComment, BiCompass, BiConfused, BiConversation, BiCookie, BiCool, BiCopyAlt, BiCopy, BiCopyright, BiCreditCardAlt, BiCreditCardFront, BiCreditCard, BiCricketBall, BiCrop, BiCross, BiCrosshair, BiCrown, BiCubeAlt, BiCube, BiCuboid, BiCurrentLocation, BiCustomize, BiCut, BiCycling, BiCylinder, BiData, BiDesktop, BiDetail, BiDevices, BiDialpadAlt, BiDialpad, BiDiamond, BiDice1, BiDice2, BiDice3, BiDice4, BiDice5, BiDice6, BiDirections, BiDisc, BiDish, BiDislike, BiDizzy, BiDna, BiDockBottom, BiDockLeft, BiDockRight, BiDockTop, BiDollarCircle, BiDollar, BiDonateBlood, BiDonateHeart, BiDoorOpen, BiDotsHorizontalRounded, BiDotsHorizontal, BiDotsVerticalRounded, BiDotsVertical, BiDoughnutChart, BiDownArrowAlt, BiDownArrowCircle, BiDownArrow, BiDownload, BiDownvote, BiDrink, BiDroplet, BiDumbbell, BiDuplicate, BiEditAlt, BiEdit, BiEnvelopeOpen, BiEnvelope, BiEqualizer, BiEraser, BiErrorAlt, BiErrorCircle, BiError, BiEuro, BiExclude, BiExitFullscreen, BiExit, BiExpandAlt, BiExpandHorizontal, BiExpandVertical, BiExpand, BiExport, BiExtension, BiFace, BiFastForwardCircle, BiFastForward, BiFemaleSign, BiFemale, BiFileBlank, BiFileFind, BiFile, BiFilm, BiFilterAlt, BiFilter, BiFingerprint, BiFirstAid, BiFirstPage, BiFlag, BiFolderMinus, BiFolderOpen, BiFolderPlus, BiFolder, BiFontColor, BiFontFamily, BiFontSize, BiFont, BiFoodMenu, BiFoodTag, BiFootball, BiFork, BiFridge, BiFullscreen, BiGame, BiGasPump, BiGhost, BiGift, BiGitBranch, BiGitCommit, BiGitCompare, BiGitMerge, BiGitPullRequest, BiGitRepoForked, BiGlassesAlt, BiGlasses, BiGlobeAlt, BiGlobe, BiGridAlt, BiGridHorizontal, BiGridSmall, BiGridVertical, BiGrid, BiGroup, BiHandicap, BiHappyAlt, BiHappyBeaming, BiHappyHeartEyes, BiHappy, BiHardHat, BiHash, BiHdd, BiHeading, BiHeadphone, BiHealth, BiHeartCircle, BiHeartSquare, BiHeart, BiHelpCircle, BiHide, BiHighlight, BiHistory, BiHive, BiHomeAlt2, BiHomeAlt, BiHomeCircle, BiHomeHeart, BiHomeSmile, BiHome, BiHorizontalCenter, BiHorizontalLeft, BiHorizontalRight, BiHotel, BiHourglass, BiIdCard, BiImageAdd, BiImageAlt, BiImage, BiImages, BiImport, BiInfinite, BiInfoCircle, BiInfoSquare, BiInjection, BiIntersect, BiItalic, BiJoystickAlt, BiJoystickButton, BiJoystick, BiKey, BiKnife, BiLabel, BiLandscape, BiLaptop, BiLastPage, BiLaugh, BiLayerMinus, BiLayerPlus, BiLayer, BiLayout, BiLeaf, BiLeftArrowAlt, BiLeftArrowCircle, BiLeftArrow, BiLeftDownArrowCircle, BiLeftIndent, BiLeftTopArrowCircle, BiLemon, BiLibrary, BiLike, BiLineChartDown, BiLineChart, BiLinkAlt, BiLinkExternal, BiLink, BiLira, BiListCheck, BiListMinus, BiListOl, BiListPlus, BiListUl, BiLoaderAlt, BiLoaderCircle, BiLoader, BiLocationPlus, BiLockAlt, BiLockOpenAlt, BiLockOpen, BiLock, BiLogInCircle, BiLogIn, BiLogOutCircle, BiLogOut, BiLowVision, BiMagnet, BiMailSend, BiMaleFemale, BiMaleSign, BiMale, BiMapAlt, BiMapPin, BiMap, BiMask, BiMath, BiMedal, BiMehAlt, BiMehBlank, BiMeh, BiMemoryCard, BiMenuAltLeft, BiMenuAltRight, BiMenu, BiMerge, BiMessageAdd, BiMessageAltAdd, BiMessageAltCheck, BiMessageAltDetail, BiMessageAltDots, BiMessageAltEdit, BiMessageAltError, BiMessageAltMinus, BiMessageAltX, BiMessageAlt, BiMessageCheck, BiMessageDetail, BiMessageDots, BiMessageEdit, BiMessageError, BiMessageMinus, BiMessageRoundedAdd, BiMessageRoundedCheck, BiMessageRoundedDetail, BiMessageRoundedDots, BiMessageRoundedEdit, BiMessageRoundedError, BiMessageRoundedMinus, BiMessageRoundedX, BiMessageRounded, BiMessageSquareAdd, BiMessageSquareCheck, BiMessageSquareDetail, BiMessageSquareDots, BiMessageSquareEdit, BiMessageSquareError, BiMessageSquareMinus, BiMessageSquareX, BiMessageSquare, BiMessageX, BiMessage, BiMeteor, BiMicrochip, BiMicrophoneOff, BiMicrophone, BiMinusBack, BiMinusCircle, BiMinusFront, BiMinus, BiMobileAlt, BiMobileLandscape, BiMobileVibration, BiMobile, BiMoneyWithdraw, BiMoney, BiMoon, BiMouseAlt, BiMouse, BiMoveHorizontal, BiMoveVertical, BiMove, BiMoviePlay, BiMovie, BiMusic, BiNavigation, BiNetworkChart, BiNews, BiNoEntry, BiNoSignal, BiNote, BiNotepad, BiNotificationOff, BiNotification, BiObjectsHorizontalCenter, BiObjectsHorizontalLeft, BiObjectsHorizontalRight, BiObjectsVerticalBottom, BiObjectsVerticalCenter, BiObjectsVerticalTop, BiOutline, BiPackage, BiPaintRoll, BiPaint, BiPalette, BiPaperPlane, BiPaperclip, BiParagraph, BiParty, BiPaste, BiPauseCircle, BiPause, BiPen, BiPencil, BiPhoneCall, BiPhoneIncoming, BiPhoneOff, BiPhoneOutgoing, BiPhone, BiPhotoAlbum, BiPieChartAlt2, BiPieChartAlt, BiPieChart, BiPin, BiPlanet, BiPlayCircle, BiPlay, BiPlug, BiPlusCircle, BiPlusMedical, BiPlus, BiPodcast, BiPointer, BiPoll, BiPolygon, BiPopsicle, BiPound, BiPowerOff, BiPrinter, BiPulse, BiPurchaseTagAlt, BiPurchaseTag, BiPyramid, BiQrScan, BiQr, BiQuestionMark, BiRadar, BiRadioCircleMarked, BiRadioCircle, BiRadio, BiReceipt, BiRectangle, BiRecycle, BiRedo, BiReflectHorizontal, BiReflectVertical, BiRefresh, BiRegistered, BiRename, BiRepeat, BiReplyAll, BiReply, BiRepost, BiReset, BiRestaurant, BiRevision, BiRewindCircle, BiRewind, BiRfid, BiRightArrowAlt, BiRightArrowCircle, BiRightArrow, BiRightDownArrowCircle, BiRightIndent, BiRightTopArrowCircle, BiRocket, BiRotateLeft, BiRotateRight, BiRss, BiRuble, BiRuler, BiRun, BiRupee, BiSad, BiSave, BiScan, BiScatterChart, BiScreenshot, BiSearchAlt2, BiSearchAlt, BiSearch, BiSelectMultiple, BiSelection, BiSend, BiServer, BiShapeCircle, BiShapePolygon, BiShapeSquare, BiShapeTriangle, BiShareAlt, BiShare, BiShekel, BiShieldAlt2, BiShieldAlt, BiShieldMinus, BiShieldPlus, BiShieldQuarter, BiShieldX, BiShield, BiShocked, BiShoppingBag, BiShowAlt, BiShow, BiShower, BiShuffle, BiSidebar, BiSignal1, BiSignal2, BiSignal3, BiSignal4, BiSignal5, BiSitemap, BiSkipNextCircle, BiSkipNext, BiSkipPreviousCircle, BiSkipPrevious, BiSleepy, BiSliderAlt, BiSlider, BiSlideshow, BiSmile, BiSortAZ, BiSortAlt2, BiSortDown, BiSortUp, BiSortZA, BiSort, BiSpa, BiSpaceBar, BiSpeaker, BiSprayCan, BiSpreadsheet, BiSquareRounded, BiSquare, BiStar, BiStation, BiStats, BiSticker, BiStopCircle, BiStop, BiStopwatch, BiStoreAlt, BiStore, BiStreetView, BiStrikethrough, BiSubdirectoryLeft, BiSubdirectoryRight, BiSun, BiSupport, BiSushi, BiSwim, BiSync, BiTab, BiTable, BiTachometer, BiTagAlt, BiTag, BiTargetLock, BiTaskX, BiTask, BiTaxi, BiTennisBall, BiTerminal, BiTestTube, BiText, BiTimeFive, BiTime, BiTimer, BiTired, BiToggleLeft, BiToggleRight, BiTone, BiTrafficCone, BiTrain, BiTransferAlt, BiTransfer, BiTrashAlt, BiTrash, BiTrendingDown, BiTrendingUp, BiTrim, BiTrip, BiTrophy, BiTv, BiUnderline, BiUndo, BiUnite, BiUniversalAccess, BiUnlink, BiUpArrowAlt, BiUpArrowCircle, BiUpArrow, BiUpload, BiUpsideDown, BiUpvote, BiUsb, BiUserCheck, BiUserCircle, BiUserMinus, BiUserPin, BiUserPlus, BiUserVoice, BiUserX, BiUser, BiVector, BiVerticalBottom, BiVerticalCenter, BiVerticalTop, BiVial, BiVideoOff, BiVideoPlus, BiVideoRecording, BiVideo, BiVoicemail, BiVolumeFull, BiVolumeLow, BiVolumeMute, BiVolume, BiWalk, BiWalletAlt, BiWallet, BiWater, BiWebcam, BiWifi0, BiWifi1, BiWifi2, BiWifiOff, BiWifi, BiWind, BiWindowAlt, BiWindowClose, BiWindowOpen, BiWindow, BiWindows, BiWine, BiWinkSmile, BiWinkTongue, BiWon, BiWorld, BiWrench, BiXCircle, BiX, BiYen, BiZoomIn, BiZoomOut, BiSolidAddToQueue, BiSolidAdjustAlt, BiSolidAdjust, BiSolidAlarmAdd, BiSolidAlarmExclamation, BiSolidAlarmOff, BiSolidAlarmSnooze, BiSolidAlarm, BiSolidAlbum, BiSolidAmbulance, BiSolidAnalyse, BiSolidAngry, BiSolidArch, BiSolidArchiveIn, BiSolidArchiveOut, BiSolidArchive, BiSolidArea, BiSolidArrowFromBottom, BiSolidArrowFromLeft, BiSolidArrowFromRight, BiSolidArrowFromTop, BiSolidArrowToBottom, BiSolidArrowToLeft, BiSolidArrowToRight, BiSolidArrowToTop, BiSolidAward, BiSolidBabyCarriage, BiSolidBackpack, BiSolidBadgeCheck, BiSolidBadgeDollar, BiSolidBadge, BiSolidBaguette, BiSolidBall, BiSolidBalloon, BiSolidBandAid, BiSolidBank, BiSolidBarChartAlt2, BiSolidBarChartSquare, BiSolidBarcode, BiSolidBaseball, BiSolidBasket, BiSolidBasketball, BiSolidBath, BiSolidBatteryCharging, BiSolidBatteryFull, BiSolidBatteryLow, BiSolidBattery, BiSolidBed, BiSolidBeenHere, BiSolidBeer, BiSolidBellMinus, BiSolidBellOff, BiSolidBellPlus, BiSolidBellRing, BiSolidBell, BiSolidBible, BiSolidBinoculars, BiSolidBlanket, BiSolidBoltCircle, BiSolidBolt, BiSolidBomb, BiSolidBone, BiSolidBong, BiSolidBookAdd, BiSolidBookAlt, BiSolidBookBookmark, BiSolidBookContent, BiSolidBookHeart, BiSolidBookOpen, BiSolidBookReader, BiSolidBook, BiSolidBookmarkAltMinus, BiSolidBookmarkAltPlus, BiSolidBookmarkAlt, BiSolidBookmarkHeart, BiSolidBookmarkMinus, BiSolidBookmarkPlus, BiSolidBookmarkStar, BiSolidBookmark, BiSolidBookmarks, BiSolidBot, BiSolidBowlHot, BiSolidBowlRice, BiSolidBowlingBall, BiSolidBox, BiSolidBrain, BiSolidBriefcaseAlt2, BiSolidBriefcaseAlt, BiSolidBriefcase, BiSolidBrightnessHalf, BiSolidBrightness, BiSolidBrushAlt, BiSolidBrush, BiSolidBugAlt, BiSolidBug, BiSolidBuildingHouse, BiSolidBuilding, BiSolidBuildings, BiSolidBulb, BiSolidBullseye, BiSolidBuoy, BiSolidBusSchool, BiSolidBus, BiSolidBusiness, BiSolidCabinet, BiSolidCableCar, BiSolidCake, BiSolidCalculator, BiSolidCalendarAlt, BiSolidCalendarCheck, BiSolidCalendarEdit, BiSolidCalendarEvent, BiSolidCalendarExclamation, BiSolidCalendarHeart, BiSolidCalendarMinus, BiSolidCalendarPlus, BiSolidCalendarStar, BiSolidCalendarWeek, BiSolidCalendarX, BiSolidCalendar, BiSolidCameraHome, BiSolidCameraMovie, BiSolidCameraOff, BiSolidCameraPlus, BiSolidCamera, BiSolidCapsule, BiSolidCaptions, BiSolidCarBattery, BiSolidCarCrash, BiSolidCarGarage, BiSolidCarMechanic, BiSolidCarWash, BiSolidCar, BiSolidCard, BiSolidCaretDownCircle, BiSolidCaretDownSquare, BiSolidCaretLeftCircle, BiSolidCaretLeftSquare, BiSolidCaretRightCircle, BiSolidCaretRightSquare, BiSolidCaretUpCircle, BiSolidCaretUpSquare, BiSolidCarousel, BiSolidCartAdd, BiSolidCartAlt, BiSolidCartDownload, BiSolidCart, BiSolidCastle, BiSolidCat, BiSolidCategoryAlt, BiSolidCategory, BiSolidCctv, BiSolidCertification, BiSolidChalkboard, BiSolidChart, BiSolidChat, BiSolidCheckCircle, BiSolidCheckShield, BiSolidCheckSquare, BiSolidCheckboxChecked, BiSolidCheckboxMinus, BiSolidCheckbox, BiSolidCheese, BiSolidChess, BiSolidChevronDownCircle, BiSolidChevronDownSquare, BiSolidChevronDown, BiSolidChevronLeftCircle, BiSolidChevronLeftSquare, BiSolidChevronLeft, BiSolidChevronRightCircle, BiSolidChevronRightSquare, BiSolidChevronRight, BiSolidChevronUpCircle, BiSolidChevronUpSquare, BiSolidChevronUp, BiSolidChevronsDown, BiSolidChevronsLeft, BiSolidChevronsRight, BiSolidChevronsUp, BiSolidChip, BiSolidChurch, BiSolidCircleHalf, BiSolidCircleQuarter, BiSolidCircleThreeQuarter, BiSolidCircle;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "bi:BiAbacus": return [3 /*break*/, 1];
                        case "bi:BiAccessibility": return [3 /*break*/, 3];
                        case "bi:BiAddToQueue": return [3 /*break*/, 5];
                        case "bi:BiAdjust": return [3 /*break*/, 7];
                        case "bi:BiAlarmAdd": return [3 /*break*/, 9];
                        case "bi:BiAlarmExclamation": return [3 /*break*/, 11];
                        case "bi:BiAlarmOff": return [3 /*break*/, 13];
                        case "bi:BiAlarmSnooze": return [3 /*break*/, 15];
                        case "bi:BiAlarm": return [3 /*break*/, 17];
                        case "bi:BiAlbum": return [3 /*break*/, 19];
                        case "bi:BiAlignJustify": return [3 /*break*/, 21];
                        case "bi:BiAlignLeft": return [3 /*break*/, 23];
                        case "bi:BiAlignMiddle": return [3 /*break*/, 25];
                        case "bi:BiAlignRight": return [3 /*break*/, 27];
                        case "bi:BiAnalyse": return [3 /*break*/, 29];
                        case "bi:BiAnchor": return [3 /*break*/, 31];
                        case "bi:BiAngry": return [3 /*break*/, 33];
                        case "bi:BiAperture": return [3 /*break*/, 35];
                        case "bi:BiArch": return [3 /*break*/, 37];
                        case "bi:BiArchiveIn": return [3 /*break*/, 39];
                        case "bi:BiArchiveOut": return [3 /*break*/, 41];
                        case "bi:BiArchive": return [3 /*break*/, 43];
                        case "bi:BiArea": return [3 /*break*/, 45];
                        case "bi:BiArrowBack": return [3 /*break*/, 47];
                        case "bi:BiArrowFromBottom": return [3 /*break*/, 49];
                        case "bi:BiArrowFromLeft": return [3 /*break*/, 51];
                        case "bi:BiArrowFromRight": return [3 /*break*/, 53];
                        case "bi:BiArrowFromTop": return [3 /*break*/, 55];
                        case "bi:BiArrowToBottom": return [3 /*break*/, 57];
                        case "bi:BiArrowToLeft": return [3 /*break*/, 59];
                        case "bi:BiArrowToRight": return [3 /*break*/, 61];
                        case "bi:BiArrowToTop": return [3 /*break*/, 63];
                        case "bi:BiAt": return [3 /*break*/, 65];
                        case "bi:BiAtom": return [3 /*break*/, 67];
                        case "bi:BiAward": return [3 /*break*/, 69];
                        case "bi:BiBadgeCheck": return [3 /*break*/, 71];
                        case "bi:BiBadge": return [3 /*break*/, 73];
                        case "bi:BiBaguette": return [3 /*break*/, 75];
                        case "bi:BiBall": return [3 /*break*/, 77];
                        case "bi:BiBandAid": return [3 /*break*/, 79];
                        case "bi:BiBarChartAlt2": return [3 /*break*/, 81];
                        case "bi:BiBarChartAlt": return [3 /*break*/, 83];
                        case "bi:BiBarChartSquare": return [3 /*break*/, 85];
                        case "bi:BiBarChart": return [3 /*break*/, 87];
                        case "bi:BiBarcodeReader": return [3 /*break*/, 89];
                        case "bi:BiBarcode": return [3 /*break*/, 91];
                        case "bi:BiBaseball": return [3 /*break*/, 93];
                        case "bi:BiBasket": return [3 /*break*/, 95];
                        case "bi:BiBasketball": return [3 /*break*/, 97];
                        case "bi:BiBath": return [3 /*break*/, 99];
                        case "bi:BiBattery": return [3 /*break*/, 101];
                        case "bi:BiBed": return [3 /*break*/, 103];
                        case "bi:BiBeenHere": return [3 /*break*/, 105];
                        case "bi:BiBeer": return [3 /*break*/, 107];
                        case "bi:BiBellMinus": return [3 /*break*/, 109];
                        case "bi:BiBellOff": return [3 /*break*/, 111];
                        case "bi:BiBellPlus": return [3 /*break*/, 113];
                        case "bi:BiBell": return [3 /*break*/, 115];
                        case "bi:BiBible": return [3 /*break*/, 117];
                        case "bi:BiBitcoin": return [3 /*break*/, 119];
                        case "bi:BiBlanket": return [3 /*break*/, 121];
                        case "bi:BiBlock": return [3 /*break*/, 123];
                        case "bi:BiBluetooth": return [3 /*break*/, 125];
                        case "bi:BiBody": return [3 /*break*/, 127];
                        case "bi:BiBold": return [3 /*break*/, 129];
                        case "bi:BiBoltCircle": return [3 /*break*/, 131];
                        case "bi:BiBomb": return [3 /*break*/, 133];
                        case "bi:BiBone": return [3 /*break*/, 135];
                        case "bi:BiBong": return [3 /*break*/, 137];
                        case "bi:BiBookAdd": return [3 /*break*/, 139];
                        case "bi:BiBookAlt": return [3 /*break*/, 141];
                        case "bi:BiBookBookmark": return [3 /*break*/, 143];
                        case "bi:BiBookContent": return [3 /*break*/, 145];
                        case "bi:BiBookHeart": return [3 /*break*/, 147];
                        case "bi:BiBookOpen": return [3 /*break*/, 149];
                        case "bi:BiBookReader": return [3 /*break*/, 151];
                        case "bi:BiBook": return [3 /*break*/, 153];
                        case "bi:BiBookmarkAltMinus": return [3 /*break*/, 155];
                        case "bi:BiBookmarkAltPlus": return [3 /*break*/, 157];
                        case "bi:BiBookmarkAlt": return [3 /*break*/, 159];
                        case "bi:BiBookmarkHeart": return [3 /*break*/, 161];
                        case "bi:BiBookmarkMinus": return [3 /*break*/, 163];
                        case "bi:BiBookmarkPlus": return [3 /*break*/, 165];
                        case "bi:BiBookmark": return [3 /*break*/, 167];
                        case "bi:BiBookmarks": return [3 /*break*/, 169];
                        case "bi:BiBorderAll": return [3 /*break*/, 171];
                        case "bi:BiBorderBottom": return [3 /*break*/, 173];
                        case "bi:BiBorderInner": return [3 /*break*/, 175];
                        case "bi:BiBorderLeft": return [3 /*break*/, 177];
                        case "bi:BiBorderNone": return [3 /*break*/, 179];
                        case "bi:BiBorderOuter": return [3 /*break*/, 181];
                        case "bi:BiBorderRadius": return [3 /*break*/, 183];
                        case "bi:BiBorderRight": return [3 /*break*/, 185];
                        case "bi:BiBorderTop": return [3 /*break*/, 187];
                        case "bi:BiBot": return [3 /*break*/, 189];
                        case "bi:BiBowlHot": return [3 /*break*/, 191];
                        case "bi:BiBowlRice": return [3 /*break*/, 193];
                        case "bi:BiBowlingBall": return [3 /*break*/, 195];
                        case "bi:BiBox": return [3 /*break*/, 197];
                        case "bi:BiBracket": return [3 /*break*/, 199];
                        case "bi:BiBraille": return [3 /*break*/, 201];
                        case "bi:BiBrain": return [3 /*break*/, 203];
                        case "bi:BiBriefcaseAlt2": return [3 /*break*/, 205];
                        case "bi:BiBriefcaseAlt": return [3 /*break*/, 207];
                        case "bi:BiBriefcase": return [3 /*break*/, 209];
                        case "bi:BiBrightnessHalf": return [3 /*break*/, 211];
                        case "bi:BiBrightness": return [3 /*break*/, 213];
                        case "bi:BiBroadcast": return [3 /*break*/, 215];
                        case "bi:BiBrushAlt": return [3 /*break*/, 217];
                        case "bi:BiBrush": return [3 /*break*/, 219];
                        case "bi:BiBugAlt": return [3 /*break*/, 221];
                        case "bi:BiBug": return [3 /*break*/, 223];
                        case "bi:BiBuildingHouse": return [3 /*break*/, 225];
                        case "bi:BiBuilding": return [3 /*break*/, 227];
                        case "bi:BiBuildings": return [3 /*break*/, 229];
                        case "bi:BiBulb": return [3 /*break*/, 231];
                        case "bi:BiBullseye": return [3 /*break*/, 233];
                        case "bi:BiBuoy": return [3 /*break*/, 235];
                        case "bi:BiBusSchool": return [3 /*break*/, 237];
                        case "bi:BiBus": return [3 /*break*/, 239];
                        case "bi:BiCabinet": return [3 /*break*/, 241];
                        case "bi:BiCableCar": return [3 /*break*/, 243];
                        case "bi:BiCake": return [3 /*break*/, 245];
                        case "bi:BiCalculator": return [3 /*break*/, 247];
                        case "bi:BiCalendarAlt": return [3 /*break*/, 249];
                        case "bi:BiCalendarCheck": return [3 /*break*/, 251];
                        case "bi:BiCalendarEdit": return [3 /*break*/, 253];
                        case "bi:BiCalendarEvent": return [3 /*break*/, 255];
                        case "bi:BiCalendarExclamation": return [3 /*break*/, 257];
                        case "bi:BiCalendarHeart": return [3 /*break*/, 259];
                        case "bi:BiCalendarMinus": return [3 /*break*/, 261];
                        case "bi:BiCalendarPlus": return [3 /*break*/, 263];
                        case "bi:BiCalendarStar": return [3 /*break*/, 265];
                        case "bi:BiCalendarWeek": return [3 /*break*/, 267];
                        case "bi:BiCalendarX": return [3 /*break*/, 269];
                        case "bi:BiCalendar": return [3 /*break*/, 271];
                        case "bi:BiCameraHome": return [3 /*break*/, 273];
                        case "bi:BiCameraMovie": return [3 /*break*/, 275];
                        case "bi:BiCameraOff": return [3 /*break*/, 277];
                        case "bi:BiCamera": return [3 /*break*/, 279];
                        case "bi:BiCandles": return [3 /*break*/, 281];
                        case "bi:BiCapsule": return [3 /*break*/, 283];
                        case "bi:BiCaptions": return [3 /*break*/, 285];
                        case "bi:BiCar": return [3 /*break*/, 287];
                        case "bi:BiCard": return [3 /*break*/, 289];
                        case "bi:BiCaretDownCircle": return [3 /*break*/, 291];
                        case "bi:BiCaretDownSquare": return [3 /*break*/, 293];
                        case "bi:BiCaretDown": return [3 /*break*/, 295];
                        case "bi:BiCaretLeftCircle": return [3 /*break*/, 297];
                        case "bi:BiCaretLeftSquare": return [3 /*break*/, 299];
                        case "bi:BiCaretLeft": return [3 /*break*/, 301];
                        case "bi:BiCaretRightCircle": return [3 /*break*/, 303];
                        case "bi:BiCaretRightSquare": return [3 /*break*/, 305];
                        case "bi:BiCaretRight": return [3 /*break*/, 307];
                        case "bi:BiCaretUpCircle": return [3 /*break*/, 309];
                        case "bi:BiCaretUpSquare": return [3 /*break*/, 311];
                        case "bi:BiCaretUp": return [3 /*break*/, 313];
                        case "bi:BiCarousel": return [3 /*break*/, 315];
                        case "bi:BiCartAdd": return [3 /*break*/, 317];
                        case "bi:BiCartAlt": return [3 /*break*/, 319];
                        case "bi:BiCartDownload": return [3 /*break*/, 321];
                        case "bi:BiCart": return [3 /*break*/, 323];
                        case "bi:BiCast": return [3 /*break*/, 325];
                        case "bi:BiCategoryAlt": return [3 /*break*/, 327];
                        case "bi:BiCategory": return [3 /*break*/, 329];
                        case "bi:BiCctv": return [3 /*break*/, 331];
                        case "bi:BiCertification": return [3 /*break*/, 333];
                        case "bi:BiChair": return [3 /*break*/, 335];
                        case "bi:BiChalkboard": return [3 /*break*/, 337];
                        case "bi:BiChart": return [3 /*break*/, 339];
                        case "bi:BiChat": return [3 /*break*/, 341];
                        case "bi:BiCheckCircle": return [3 /*break*/, 343];
                        case "bi:BiCheckDouble": return [3 /*break*/, 345];
                        case "bi:BiCheckShield": return [3 /*break*/, 347];
                        case "bi:BiCheckSquare": return [3 /*break*/, 349];
                        case "bi:BiCheck": return [3 /*break*/, 351];
                        case "bi:BiCheckboxChecked": return [3 /*break*/, 353];
                        case "bi:BiCheckboxMinus": return [3 /*break*/, 355];
                        case "bi:BiCheckboxSquare": return [3 /*break*/, 357];
                        case "bi:BiCheckbox": return [3 /*break*/, 359];
                        case "bi:BiCheese": return [3 /*break*/, 361];
                        case "bi:BiChevronDownCircle": return [3 /*break*/, 363];
                        case "bi:BiChevronDownSquare": return [3 /*break*/, 365];
                        case "bi:BiChevronDown": return [3 /*break*/, 367];
                        case "bi:BiChevronLeftCircle": return [3 /*break*/, 369];
                        case "bi:BiChevronLeftSquare": return [3 /*break*/, 371];
                        case "bi:BiChevronLeft": return [3 /*break*/, 373];
                        case "bi:BiChevronRightCircle": return [3 /*break*/, 375];
                        case "bi:BiChevronRightSquare": return [3 /*break*/, 377];
                        case "bi:BiChevronRight": return [3 /*break*/, 379];
                        case "bi:BiChevronUpCircle": return [3 /*break*/, 381];
                        case "bi:BiChevronUpSquare": return [3 /*break*/, 383];
                        case "bi:BiChevronUp": return [3 /*break*/, 385];
                        case "bi:BiChevronsDown": return [3 /*break*/, 387];
                        case "bi:BiChevronsLeft": return [3 /*break*/, 389];
                        case "bi:BiChevronsRight": return [3 /*break*/, 391];
                        case "bi:BiChevronsUp": return [3 /*break*/, 393];
                        case "bi:BiChild": return [3 /*break*/, 395];
                        case "bi:BiChip": return [3 /*break*/, 397];
                        case "bi:BiChurch": return [3 /*break*/, 399];
                        case "bi:BiCircleHalf": return [3 /*break*/, 401];
                        case "bi:BiCircleQuarter": return [3 /*break*/, 403];
                        case "bi:BiCircleThreeQuarter": return [3 /*break*/, 405];
                        case "bi:BiCircle": return [3 /*break*/, 407];
                        case "bi:BiClinic": return [3 /*break*/, 409];
                        case "bi:BiClipboard": return [3 /*break*/, 411];
                        case "bi:BiCloset": return [3 /*break*/, 413];
                        case "bi:BiCloudDownload": return [3 /*break*/, 415];
                        case "bi:BiCloudDrizzle": return [3 /*break*/, 417];
                        case "bi:BiCloudLightRain": return [3 /*break*/, 419];
                        case "bi:BiCloudLightning": return [3 /*break*/, 421];
                        case "bi:BiCloudRain": return [3 /*break*/, 423];
                        case "bi:BiCloudSnow": return [3 /*break*/, 425];
                        case "bi:BiCloudUpload": return [3 /*break*/, 427];
                        case "bi:BiCloud": return [3 /*break*/, 429];
                        case "bi:BiCodeAlt": return [3 /*break*/, 431];
                        case "bi:BiCodeBlock": return [3 /*break*/, 433];
                        case "bi:BiCodeCurly": return [3 /*break*/, 435];
                        case "bi:BiCode": return [3 /*break*/, 437];
                        case "bi:BiCoffeeTogo": return [3 /*break*/, 439];
                        case "bi:BiCoffee": return [3 /*break*/, 441];
                        case "bi:BiCog": return [3 /*break*/, 443];
                        case "bi:BiCoinStack": return [3 /*break*/, 445];
                        case "bi:BiCoin": return [3 /*break*/, 447];
                        case "bi:BiCollapseAlt": return [3 /*break*/, 449];
                        case "bi:BiCollapseHorizontal": return [3 /*break*/, 451];
                        case "bi:BiCollapseVertical": return [3 /*break*/, 453];
                        case "bi:BiCollapse": return [3 /*break*/, 455];
                        case "bi:BiCollection": return [3 /*break*/, 457];
                        case "bi:BiColorFill": return [3 /*break*/, 459];
                        case "bi:BiColor": return [3 /*break*/, 461];
                        case "bi:BiColumns": return [3 /*break*/, 463];
                        case "bi:BiCommand": return [3 /*break*/, 465];
                        case "bi:BiCommentAdd": return [3 /*break*/, 467];
                        case "bi:BiCommentCheck": return [3 /*break*/, 469];
                        case "bi:BiCommentDetail": return [3 /*break*/, 471];
                        case "bi:BiCommentDots": return [3 /*break*/, 473];
                        case "bi:BiCommentEdit": return [3 /*break*/, 475];
                        case "bi:BiCommentError": return [3 /*break*/, 477];
                        case "bi:BiCommentMinus": return [3 /*break*/, 479];
                        case "bi:BiCommentX": return [3 /*break*/, 481];
                        case "bi:BiComment": return [3 /*break*/, 483];
                        case "bi:BiCompass": return [3 /*break*/, 485];
                        case "bi:BiConfused": return [3 /*break*/, 487];
                        case "bi:BiConversation": return [3 /*break*/, 489];
                        case "bi:BiCookie": return [3 /*break*/, 491];
                        case "bi:BiCool": return [3 /*break*/, 493];
                        case "bi:BiCopyAlt": return [3 /*break*/, 495];
                        case "bi:BiCopy": return [3 /*break*/, 497];
                        case "bi:BiCopyright": return [3 /*break*/, 499];
                        case "bi:BiCreditCardAlt": return [3 /*break*/, 501];
                        case "bi:BiCreditCardFront": return [3 /*break*/, 503];
                        case "bi:BiCreditCard": return [3 /*break*/, 505];
                        case "bi:BiCricketBall": return [3 /*break*/, 507];
                        case "bi:BiCrop": return [3 /*break*/, 509];
                        case "bi:BiCross": return [3 /*break*/, 511];
                        case "bi:BiCrosshair": return [3 /*break*/, 513];
                        case "bi:BiCrown": return [3 /*break*/, 515];
                        case "bi:BiCubeAlt": return [3 /*break*/, 517];
                        case "bi:BiCube": return [3 /*break*/, 519];
                        case "bi:BiCuboid": return [3 /*break*/, 521];
                        case "bi:BiCurrentLocation": return [3 /*break*/, 523];
                        case "bi:BiCustomize": return [3 /*break*/, 525];
                        case "bi:BiCut": return [3 /*break*/, 527];
                        case "bi:BiCycling": return [3 /*break*/, 529];
                        case "bi:BiCylinder": return [3 /*break*/, 531];
                        case "bi:BiData": return [3 /*break*/, 533];
                        case "bi:BiDesktop": return [3 /*break*/, 535];
                        case "bi:BiDetail": return [3 /*break*/, 537];
                        case "bi:BiDevices": return [3 /*break*/, 539];
                        case "bi:BiDialpadAlt": return [3 /*break*/, 541];
                        case "bi:BiDialpad": return [3 /*break*/, 543];
                        case "bi:BiDiamond": return [3 /*break*/, 545];
                        case "bi:BiDice1": return [3 /*break*/, 547];
                        case "bi:BiDice2": return [3 /*break*/, 549];
                        case "bi:BiDice3": return [3 /*break*/, 551];
                        case "bi:BiDice4": return [3 /*break*/, 553];
                        case "bi:BiDice5": return [3 /*break*/, 555];
                        case "bi:BiDice6": return [3 /*break*/, 557];
                        case "bi:BiDirections": return [3 /*break*/, 559];
                        case "bi:BiDisc": return [3 /*break*/, 561];
                        case "bi:BiDish": return [3 /*break*/, 563];
                        case "bi:BiDislike": return [3 /*break*/, 565];
                        case "bi:BiDizzy": return [3 /*break*/, 567];
                        case "bi:BiDna": return [3 /*break*/, 569];
                        case "bi:BiDockBottom": return [3 /*break*/, 571];
                        case "bi:BiDockLeft": return [3 /*break*/, 573];
                        case "bi:BiDockRight": return [3 /*break*/, 575];
                        case "bi:BiDockTop": return [3 /*break*/, 577];
                        case "bi:BiDollarCircle": return [3 /*break*/, 579];
                        case "bi:BiDollar": return [3 /*break*/, 581];
                        case "bi:BiDonateBlood": return [3 /*break*/, 583];
                        case "bi:BiDonateHeart": return [3 /*break*/, 585];
                        case "bi:BiDoorOpen": return [3 /*break*/, 587];
                        case "bi:BiDotsHorizontalRounded": return [3 /*break*/, 589];
                        case "bi:BiDotsHorizontal": return [3 /*break*/, 591];
                        case "bi:BiDotsVerticalRounded": return [3 /*break*/, 593];
                        case "bi:BiDotsVertical": return [3 /*break*/, 595];
                        case "bi:BiDoughnutChart": return [3 /*break*/, 597];
                        case "bi:BiDownArrowAlt": return [3 /*break*/, 599];
                        case "bi:BiDownArrowCircle": return [3 /*break*/, 601];
                        case "bi:BiDownArrow": return [3 /*break*/, 603];
                        case "bi:BiDownload": return [3 /*break*/, 605];
                        case "bi:BiDownvote": return [3 /*break*/, 607];
                        case "bi:BiDrink": return [3 /*break*/, 609];
                        case "bi:BiDroplet": return [3 /*break*/, 611];
                        case "bi:BiDumbbell": return [3 /*break*/, 613];
                        case "bi:BiDuplicate": return [3 /*break*/, 615];
                        case "bi:BiEditAlt": return [3 /*break*/, 617];
                        case "bi:BiEdit": return [3 /*break*/, 619];
                        case "bi:BiEnvelopeOpen": return [3 /*break*/, 621];
                        case "bi:BiEnvelope": return [3 /*break*/, 623];
                        case "bi:BiEqualizer": return [3 /*break*/, 625];
                        case "bi:BiEraser": return [3 /*break*/, 627];
                        case "bi:BiErrorAlt": return [3 /*break*/, 629];
                        case "bi:BiErrorCircle": return [3 /*break*/, 631];
                        case "bi:BiError": return [3 /*break*/, 633];
                        case "bi:BiEuro": return [3 /*break*/, 635];
                        case "bi:BiExclude": return [3 /*break*/, 637];
                        case "bi:BiExitFullscreen": return [3 /*break*/, 639];
                        case "bi:BiExit": return [3 /*break*/, 641];
                        case "bi:BiExpandAlt": return [3 /*break*/, 643];
                        case "bi:BiExpandHorizontal": return [3 /*break*/, 645];
                        case "bi:BiExpandVertical": return [3 /*break*/, 647];
                        case "bi:BiExpand": return [3 /*break*/, 649];
                        case "bi:BiExport": return [3 /*break*/, 651];
                        case "bi:BiExtension": return [3 /*break*/, 653];
                        case "bi:BiFace": return [3 /*break*/, 655];
                        case "bi:BiFastForwardCircle": return [3 /*break*/, 657];
                        case "bi:BiFastForward": return [3 /*break*/, 659];
                        case "bi:BiFemaleSign": return [3 /*break*/, 661];
                        case "bi:BiFemale": return [3 /*break*/, 663];
                        case "bi:BiFileBlank": return [3 /*break*/, 665];
                        case "bi:BiFileFind": return [3 /*break*/, 667];
                        case "bi:BiFile": return [3 /*break*/, 669];
                        case "bi:BiFilm": return [3 /*break*/, 671];
                        case "bi:BiFilterAlt": return [3 /*break*/, 673];
                        case "bi:BiFilter": return [3 /*break*/, 675];
                        case "bi:BiFingerprint": return [3 /*break*/, 677];
                        case "bi:BiFirstAid": return [3 /*break*/, 679];
                        case "bi:BiFirstPage": return [3 /*break*/, 681];
                        case "bi:BiFlag": return [3 /*break*/, 683];
                        case "bi:BiFolderMinus": return [3 /*break*/, 685];
                        case "bi:BiFolderOpen": return [3 /*break*/, 687];
                        case "bi:BiFolderPlus": return [3 /*break*/, 689];
                        case "bi:BiFolder": return [3 /*break*/, 691];
                        case "bi:BiFontColor": return [3 /*break*/, 693];
                        case "bi:BiFontFamily": return [3 /*break*/, 695];
                        case "bi:BiFontSize": return [3 /*break*/, 697];
                        case "bi:BiFont": return [3 /*break*/, 699];
                        case "bi:BiFoodMenu": return [3 /*break*/, 701];
                        case "bi:BiFoodTag": return [3 /*break*/, 703];
                        case "bi:BiFootball": return [3 /*break*/, 705];
                        case "bi:BiFork": return [3 /*break*/, 707];
                        case "bi:BiFridge": return [3 /*break*/, 709];
                        case "bi:BiFullscreen": return [3 /*break*/, 711];
                        case "bi:BiGame": return [3 /*break*/, 713];
                        case "bi:BiGasPump": return [3 /*break*/, 715];
                        case "bi:BiGhost": return [3 /*break*/, 717];
                        case "bi:BiGift": return [3 /*break*/, 719];
                        case "bi:BiGitBranch": return [3 /*break*/, 721];
                        case "bi:BiGitCommit": return [3 /*break*/, 723];
                        case "bi:BiGitCompare": return [3 /*break*/, 725];
                        case "bi:BiGitMerge": return [3 /*break*/, 727];
                        case "bi:BiGitPullRequest": return [3 /*break*/, 729];
                        case "bi:BiGitRepoForked": return [3 /*break*/, 731];
                        case "bi:BiGlassesAlt": return [3 /*break*/, 733];
                        case "bi:BiGlasses": return [3 /*break*/, 735];
                        case "bi:BiGlobeAlt": return [3 /*break*/, 737];
                        case "bi:BiGlobe": return [3 /*break*/, 739];
                        case "bi:BiGridAlt": return [3 /*break*/, 741];
                        case "bi:BiGridHorizontal": return [3 /*break*/, 743];
                        case "bi:BiGridSmall": return [3 /*break*/, 745];
                        case "bi:BiGridVertical": return [3 /*break*/, 747];
                        case "bi:BiGrid": return [3 /*break*/, 749];
                        case "bi:BiGroup": return [3 /*break*/, 751];
                        case "bi:BiHandicap": return [3 /*break*/, 753];
                        case "bi:BiHappyAlt": return [3 /*break*/, 755];
                        case "bi:BiHappyBeaming": return [3 /*break*/, 757];
                        case "bi:BiHappyHeartEyes": return [3 /*break*/, 759];
                        case "bi:BiHappy": return [3 /*break*/, 761];
                        case "bi:BiHardHat": return [3 /*break*/, 763];
                        case "bi:BiHash": return [3 /*break*/, 765];
                        case "bi:BiHdd": return [3 /*break*/, 767];
                        case "bi:BiHeading": return [3 /*break*/, 769];
                        case "bi:BiHeadphone": return [3 /*break*/, 771];
                        case "bi:BiHealth": return [3 /*break*/, 773];
                        case "bi:BiHeartCircle": return [3 /*break*/, 775];
                        case "bi:BiHeartSquare": return [3 /*break*/, 777];
                        case "bi:BiHeart": return [3 /*break*/, 779];
                        case "bi:BiHelpCircle": return [3 /*break*/, 781];
                        case "bi:BiHide": return [3 /*break*/, 783];
                        case "bi:BiHighlight": return [3 /*break*/, 785];
                        case "bi:BiHistory": return [3 /*break*/, 787];
                        case "bi:BiHive": return [3 /*break*/, 789];
                        case "bi:BiHomeAlt2": return [3 /*break*/, 791];
                        case "bi:BiHomeAlt": return [3 /*break*/, 793];
                        case "bi:BiHomeCircle": return [3 /*break*/, 795];
                        case "bi:BiHomeHeart": return [3 /*break*/, 797];
                        case "bi:BiHomeSmile": return [3 /*break*/, 799];
                        case "bi:BiHome": return [3 /*break*/, 801];
                        case "bi:BiHorizontalCenter": return [3 /*break*/, 803];
                        case "bi:BiHorizontalLeft": return [3 /*break*/, 805];
                        case "bi:BiHorizontalRight": return [3 /*break*/, 807];
                        case "bi:BiHotel": return [3 /*break*/, 809];
                        case "bi:BiHourglass": return [3 /*break*/, 811];
                        case "bi:BiIdCard": return [3 /*break*/, 813];
                        case "bi:BiImageAdd": return [3 /*break*/, 815];
                        case "bi:BiImageAlt": return [3 /*break*/, 817];
                        case "bi:BiImage": return [3 /*break*/, 819];
                        case "bi:BiImages": return [3 /*break*/, 821];
                        case "bi:BiImport": return [3 /*break*/, 823];
                        case "bi:BiInfinite": return [3 /*break*/, 825];
                        case "bi:BiInfoCircle": return [3 /*break*/, 827];
                        case "bi:BiInfoSquare": return [3 /*break*/, 829];
                        case "bi:BiInjection": return [3 /*break*/, 831];
                        case "bi:BiIntersect": return [3 /*break*/, 833];
                        case "bi:BiItalic": return [3 /*break*/, 835];
                        case "bi:BiJoystickAlt": return [3 /*break*/, 837];
                        case "bi:BiJoystickButton": return [3 /*break*/, 839];
                        case "bi:BiJoystick": return [3 /*break*/, 841];
                        case "bi:BiKey": return [3 /*break*/, 843];
                        case "bi:BiKnife": return [3 /*break*/, 845];
                        case "bi:BiLabel": return [3 /*break*/, 847];
                        case "bi:BiLandscape": return [3 /*break*/, 849];
                        case "bi:BiLaptop": return [3 /*break*/, 851];
                        case "bi:BiLastPage": return [3 /*break*/, 853];
                        case "bi:BiLaugh": return [3 /*break*/, 855];
                        case "bi:BiLayerMinus": return [3 /*break*/, 857];
                        case "bi:BiLayerPlus": return [3 /*break*/, 859];
                        case "bi:BiLayer": return [3 /*break*/, 861];
                        case "bi:BiLayout": return [3 /*break*/, 863];
                        case "bi:BiLeaf": return [3 /*break*/, 865];
                        case "bi:BiLeftArrowAlt": return [3 /*break*/, 867];
                        case "bi:BiLeftArrowCircle": return [3 /*break*/, 869];
                        case "bi:BiLeftArrow": return [3 /*break*/, 871];
                        case "bi:BiLeftDownArrowCircle": return [3 /*break*/, 873];
                        case "bi:BiLeftIndent": return [3 /*break*/, 875];
                        case "bi:BiLeftTopArrowCircle": return [3 /*break*/, 877];
                        case "bi:BiLemon": return [3 /*break*/, 879];
                        case "bi:BiLibrary": return [3 /*break*/, 881];
                        case "bi:BiLike": return [3 /*break*/, 883];
                        case "bi:BiLineChartDown": return [3 /*break*/, 885];
                        case "bi:BiLineChart": return [3 /*break*/, 887];
                        case "bi:BiLinkAlt": return [3 /*break*/, 889];
                        case "bi:BiLinkExternal": return [3 /*break*/, 891];
                        case "bi:BiLink": return [3 /*break*/, 893];
                        case "bi:BiLira": return [3 /*break*/, 895];
                        case "bi:BiListCheck": return [3 /*break*/, 897];
                        case "bi:BiListMinus": return [3 /*break*/, 899];
                        case "bi:BiListOl": return [3 /*break*/, 901];
                        case "bi:BiListPlus": return [3 /*break*/, 903];
                        case "bi:BiListUl": return [3 /*break*/, 905];
                        case "bi:BiLoaderAlt": return [3 /*break*/, 907];
                        case "bi:BiLoaderCircle": return [3 /*break*/, 909];
                        case "bi:BiLoader": return [3 /*break*/, 911];
                        case "bi:BiLocationPlus": return [3 /*break*/, 913];
                        case "bi:BiLockAlt": return [3 /*break*/, 915];
                        case "bi:BiLockOpenAlt": return [3 /*break*/, 917];
                        case "bi:BiLockOpen": return [3 /*break*/, 919];
                        case "bi:BiLock": return [3 /*break*/, 921];
                        case "bi:BiLogInCircle": return [3 /*break*/, 923];
                        case "bi:BiLogIn": return [3 /*break*/, 925];
                        case "bi:BiLogOutCircle": return [3 /*break*/, 927];
                        case "bi:BiLogOut": return [3 /*break*/, 929];
                        case "bi:BiLowVision": return [3 /*break*/, 931];
                        case "bi:BiMagnet": return [3 /*break*/, 933];
                        case "bi:BiMailSend": return [3 /*break*/, 935];
                        case "bi:BiMaleFemale": return [3 /*break*/, 937];
                        case "bi:BiMaleSign": return [3 /*break*/, 939];
                        case "bi:BiMale": return [3 /*break*/, 941];
                        case "bi:BiMapAlt": return [3 /*break*/, 943];
                        case "bi:BiMapPin": return [3 /*break*/, 945];
                        case "bi:BiMap": return [3 /*break*/, 947];
                        case "bi:BiMask": return [3 /*break*/, 949];
                        case "bi:BiMath": return [3 /*break*/, 951];
                        case "bi:BiMedal": return [3 /*break*/, 953];
                        case "bi:BiMehAlt": return [3 /*break*/, 955];
                        case "bi:BiMehBlank": return [3 /*break*/, 957];
                        case "bi:BiMeh": return [3 /*break*/, 959];
                        case "bi:BiMemoryCard": return [3 /*break*/, 961];
                        case "bi:BiMenuAltLeft": return [3 /*break*/, 963];
                        case "bi:BiMenuAltRight": return [3 /*break*/, 965];
                        case "bi:BiMenu": return [3 /*break*/, 967];
                        case "bi:BiMerge": return [3 /*break*/, 969];
                        case "bi:BiMessageAdd": return [3 /*break*/, 971];
                        case "bi:BiMessageAltAdd": return [3 /*break*/, 973];
                        case "bi:BiMessageAltCheck": return [3 /*break*/, 975];
                        case "bi:BiMessageAltDetail": return [3 /*break*/, 977];
                        case "bi:BiMessageAltDots": return [3 /*break*/, 979];
                        case "bi:BiMessageAltEdit": return [3 /*break*/, 981];
                        case "bi:BiMessageAltError": return [3 /*break*/, 983];
                        case "bi:BiMessageAltMinus": return [3 /*break*/, 985];
                        case "bi:BiMessageAltX": return [3 /*break*/, 987];
                        case "bi:BiMessageAlt": return [3 /*break*/, 989];
                        case "bi:BiMessageCheck": return [3 /*break*/, 991];
                        case "bi:BiMessageDetail": return [3 /*break*/, 993];
                        case "bi:BiMessageDots": return [3 /*break*/, 995];
                        case "bi:BiMessageEdit": return [3 /*break*/, 997];
                        case "bi:BiMessageError": return [3 /*break*/, 999];
                        case "bi:BiMessageMinus": return [3 /*break*/, 1001];
                        case "bi:BiMessageRoundedAdd": return [3 /*break*/, 1003];
                        case "bi:BiMessageRoundedCheck": return [3 /*break*/, 1005];
                        case "bi:BiMessageRoundedDetail": return [3 /*break*/, 1007];
                        case "bi:BiMessageRoundedDots": return [3 /*break*/, 1009];
                        case "bi:BiMessageRoundedEdit": return [3 /*break*/, 1011];
                        case "bi:BiMessageRoundedError": return [3 /*break*/, 1013];
                        case "bi:BiMessageRoundedMinus": return [3 /*break*/, 1015];
                        case "bi:BiMessageRoundedX": return [3 /*break*/, 1017];
                        case "bi:BiMessageRounded": return [3 /*break*/, 1019];
                        case "bi:BiMessageSquareAdd": return [3 /*break*/, 1021];
                        case "bi:BiMessageSquareCheck": return [3 /*break*/, 1023];
                        case "bi:BiMessageSquareDetail": return [3 /*break*/, 1025];
                        case "bi:BiMessageSquareDots": return [3 /*break*/, 1027];
                        case "bi:BiMessageSquareEdit": return [3 /*break*/, 1029];
                        case "bi:BiMessageSquareError": return [3 /*break*/, 1031];
                        case "bi:BiMessageSquareMinus": return [3 /*break*/, 1033];
                        case "bi:BiMessageSquareX": return [3 /*break*/, 1035];
                        case "bi:BiMessageSquare": return [3 /*break*/, 1037];
                        case "bi:BiMessageX": return [3 /*break*/, 1039];
                        case "bi:BiMessage": return [3 /*break*/, 1041];
                        case "bi:BiMeteor": return [3 /*break*/, 1043];
                        case "bi:BiMicrochip": return [3 /*break*/, 1045];
                        case "bi:BiMicrophoneOff": return [3 /*break*/, 1047];
                        case "bi:BiMicrophone": return [3 /*break*/, 1049];
                        case "bi:BiMinusBack": return [3 /*break*/, 1051];
                        case "bi:BiMinusCircle": return [3 /*break*/, 1053];
                        case "bi:BiMinusFront": return [3 /*break*/, 1055];
                        case "bi:BiMinus": return [3 /*break*/, 1057];
                        case "bi:BiMobileAlt": return [3 /*break*/, 1059];
                        case "bi:BiMobileLandscape": return [3 /*break*/, 1061];
                        case "bi:BiMobileVibration": return [3 /*break*/, 1063];
                        case "bi:BiMobile": return [3 /*break*/, 1065];
                        case "bi:BiMoneyWithdraw": return [3 /*break*/, 1067];
                        case "bi:BiMoney": return [3 /*break*/, 1069];
                        case "bi:BiMoon": return [3 /*break*/, 1071];
                        case "bi:BiMouseAlt": return [3 /*break*/, 1073];
                        case "bi:BiMouse": return [3 /*break*/, 1075];
                        case "bi:BiMoveHorizontal": return [3 /*break*/, 1077];
                        case "bi:BiMoveVertical": return [3 /*break*/, 1079];
                        case "bi:BiMove": return [3 /*break*/, 1081];
                        case "bi:BiMoviePlay": return [3 /*break*/, 1083];
                        case "bi:BiMovie": return [3 /*break*/, 1085];
                        case "bi:BiMusic": return [3 /*break*/, 1087];
                        case "bi:BiNavigation": return [3 /*break*/, 1089];
                        case "bi:BiNetworkChart": return [3 /*break*/, 1091];
                        case "bi:BiNews": return [3 /*break*/, 1093];
                        case "bi:BiNoEntry": return [3 /*break*/, 1095];
                        case "bi:BiNoSignal": return [3 /*break*/, 1097];
                        case "bi:BiNote": return [3 /*break*/, 1099];
                        case "bi:BiNotepad": return [3 /*break*/, 1101];
                        case "bi:BiNotificationOff": return [3 /*break*/, 1103];
                        case "bi:BiNotification": return [3 /*break*/, 1105];
                        case "bi:BiObjectsHorizontalCenter": return [3 /*break*/, 1107];
                        case "bi:BiObjectsHorizontalLeft": return [3 /*break*/, 1109];
                        case "bi:BiObjectsHorizontalRight": return [3 /*break*/, 1111];
                        case "bi:BiObjectsVerticalBottom": return [3 /*break*/, 1113];
                        case "bi:BiObjectsVerticalCenter": return [3 /*break*/, 1115];
                        case "bi:BiObjectsVerticalTop": return [3 /*break*/, 1117];
                        case "bi:BiOutline": return [3 /*break*/, 1119];
                        case "bi:BiPackage": return [3 /*break*/, 1121];
                        case "bi:BiPaintRoll": return [3 /*break*/, 1123];
                        case "bi:BiPaint": return [3 /*break*/, 1125];
                        case "bi:BiPalette": return [3 /*break*/, 1127];
                        case "bi:BiPaperPlane": return [3 /*break*/, 1129];
                        case "bi:BiPaperclip": return [3 /*break*/, 1131];
                        case "bi:BiParagraph": return [3 /*break*/, 1133];
                        case "bi:BiParty": return [3 /*break*/, 1135];
                        case "bi:BiPaste": return [3 /*break*/, 1137];
                        case "bi:BiPauseCircle": return [3 /*break*/, 1139];
                        case "bi:BiPause": return [3 /*break*/, 1141];
                        case "bi:BiPen": return [3 /*break*/, 1143];
                        case "bi:BiPencil": return [3 /*break*/, 1145];
                        case "bi:BiPhoneCall": return [3 /*break*/, 1147];
                        case "bi:BiPhoneIncoming": return [3 /*break*/, 1149];
                        case "bi:BiPhoneOff": return [3 /*break*/, 1151];
                        case "bi:BiPhoneOutgoing": return [3 /*break*/, 1153];
                        case "bi:BiPhone": return [3 /*break*/, 1155];
                        case "bi:BiPhotoAlbum": return [3 /*break*/, 1157];
                        case "bi:BiPieChartAlt2": return [3 /*break*/, 1159];
                        case "bi:BiPieChartAlt": return [3 /*break*/, 1161];
                        case "bi:BiPieChart": return [3 /*break*/, 1163];
                        case "bi:BiPin": return [3 /*break*/, 1165];
                        case "bi:BiPlanet": return [3 /*break*/, 1167];
                        case "bi:BiPlayCircle": return [3 /*break*/, 1169];
                        case "bi:BiPlay": return [3 /*break*/, 1171];
                        case "bi:BiPlug": return [3 /*break*/, 1173];
                        case "bi:BiPlusCircle": return [3 /*break*/, 1175];
                        case "bi:BiPlusMedical": return [3 /*break*/, 1177];
                        case "bi:BiPlus": return [3 /*break*/, 1179];
                        case "bi:BiPodcast": return [3 /*break*/, 1181];
                        case "bi:BiPointer": return [3 /*break*/, 1183];
                        case "bi:BiPoll": return [3 /*break*/, 1185];
                        case "bi:BiPolygon": return [3 /*break*/, 1187];
                        case "bi:BiPopsicle": return [3 /*break*/, 1189];
                        case "bi:BiPound": return [3 /*break*/, 1191];
                        case "bi:BiPowerOff": return [3 /*break*/, 1193];
                        case "bi:BiPrinter": return [3 /*break*/, 1195];
                        case "bi:BiPulse": return [3 /*break*/, 1197];
                        case "bi:BiPurchaseTagAlt": return [3 /*break*/, 1199];
                        case "bi:BiPurchaseTag": return [3 /*break*/, 1201];
                        case "bi:BiPyramid": return [3 /*break*/, 1203];
                        case "bi:BiQrScan": return [3 /*break*/, 1205];
                        case "bi:BiQr": return [3 /*break*/, 1207];
                        case "bi:BiQuestionMark": return [3 /*break*/, 1209];
                        case "bi:BiRadar": return [3 /*break*/, 1211];
                        case "bi:BiRadioCircleMarked": return [3 /*break*/, 1213];
                        case "bi:BiRadioCircle": return [3 /*break*/, 1215];
                        case "bi:BiRadio": return [3 /*break*/, 1217];
                        case "bi:BiReceipt": return [3 /*break*/, 1219];
                        case "bi:BiRectangle": return [3 /*break*/, 1221];
                        case "bi:BiRecycle": return [3 /*break*/, 1223];
                        case "bi:BiRedo": return [3 /*break*/, 1225];
                        case "bi:BiReflectHorizontal": return [3 /*break*/, 1227];
                        case "bi:BiReflectVertical": return [3 /*break*/, 1229];
                        case "bi:BiRefresh": return [3 /*break*/, 1231];
                        case "bi:BiRegistered": return [3 /*break*/, 1233];
                        case "bi:BiRename": return [3 /*break*/, 1235];
                        case "bi:BiRepeat": return [3 /*break*/, 1237];
                        case "bi:BiReplyAll": return [3 /*break*/, 1239];
                        case "bi:BiReply": return [3 /*break*/, 1241];
                        case "bi:BiRepost": return [3 /*break*/, 1243];
                        case "bi:BiReset": return [3 /*break*/, 1245];
                        case "bi:BiRestaurant": return [3 /*break*/, 1247];
                        case "bi:BiRevision": return [3 /*break*/, 1249];
                        case "bi:BiRewindCircle": return [3 /*break*/, 1251];
                        case "bi:BiRewind": return [3 /*break*/, 1253];
                        case "bi:BiRfid": return [3 /*break*/, 1255];
                        case "bi:BiRightArrowAlt": return [3 /*break*/, 1257];
                        case "bi:BiRightArrowCircle": return [3 /*break*/, 1259];
                        case "bi:BiRightArrow": return [3 /*break*/, 1261];
                        case "bi:BiRightDownArrowCircle": return [3 /*break*/, 1263];
                        case "bi:BiRightIndent": return [3 /*break*/, 1265];
                        case "bi:BiRightTopArrowCircle": return [3 /*break*/, 1267];
                        case "bi:BiRocket": return [3 /*break*/, 1269];
                        case "bi:BiRotateLeft": return [3 /*break*/, 1271];
                        case "bi:BiRotateRight": return [3 /*break*/, 1273];
                        case "bi:BiRss": return [3 /*break*/, 1275];
                        case "bi:BiRuble": return [3 /*break*/, 1277];
                        case "bi:BiRuler": return [3 /*break*/, 1279];
                        case "bi:BiRun": return [3 /*break*/, 1281];
                        case "bi:BiRupee": return [3 /*break*/, 1283];
                        case "bi:BiSad": return [3 /*break*/, 1285];
                        case "bi:BiSave": return [3 /*break*/, 1287];
                        case "bi:BiScan": return [3 /*break*/, 1289];
                        case "bi:BiScatterChart": return [3 /*break*/, 1291];
                        case "bi:BiScreenshot": return [3 /*break*/, 1293];
                        case "bi:BiSearchAlt2": return [3 /*break*/, 1295];
                        case "bi:BiSearchAlt": return [3 /*break*/, 1297];
                        case "bi:BiSearch": return [3 /*break*/, 1299];
                        case "bi:BiSelectMultiple": return [3 /*break*/, 1301];
                        case "bi:BiSelection": return [3 /*break*/, 1303];
                        case "bi:BiSend": return [3 /*break*/, 1305];
                        case "bi:BiServer": return [3 /*break*/, 1307];
                        case "bi:BiShapeCircle": return [3 /*break*/, 1309];
                        case "bi:BiShapePolygon": return [3 /*break*/, 1311];
                        case "bi:BiShapeSquare": return [3 /*break*/, 1313];
                        case "bi:BiShapeTriangle": return [3 /*break*/, 1315];
                        case "bi:BiShareAlt": return [3 /*break*/, 1317];
                        case "bi:BiShare": return [3 /*break*/, 1319];
                        case "bi:BiShekel": return [3 /*break*/, 1321];
                        case "bi:BiShieldAlt2": return [3 /*break*/, 1323];
                        case "bi:BiShieldAlt": return [3 /*break*/, 1325];
                        case "bi:BiShieldMinus": return [3 /*break*/, 1327];
                        case "bi:BiShieldPlus": return [3 /*break*/, 1329];
                        case "bi:BiShieldQuarter": return [3 /*break*/, 1331];
                        case "bi:BiShieldX": return [3 /*break*/, 1333];
                        case "bi:BiShield": return [3 /*break*/, 1335];
                        case "bi:BiShocked": return [3 /*break*/, 1337];
                        case "bi:BiShoppingBag": return [3 /*break*/, 1339];
                        case "bi:BiShowAlt": return [3 /*break*/, 1341];
                        case "bi:BiShow": return [3 /*break*/, 1343];
                        case "bi:BiShower": return [3 /*break*/, 1345];
                        case "bi:BiShuffle": return [3 /*break*/, 1347];
                        case "bi:BiSidebar": return [3 /*break*/, 1349];
                        case "bi:BiSignal1": return [3 /*break*/, 1351];
                        case "bi:BiSignal2": return [3 /*break*/, 1353];
                        case "bi:BiSignal3": return [3 /*break*/, 1355];
                        case "bi:BiSignal4": return [3 /*break*/, 1357];
                        case "bi:BiSignal5": return [3 /*break*/, 1359];
                        case "bi:BiSitemap": return [3 /*break*/, 1361];
                        case "bi:BiSkipNextCircle": return [3 /*break*/, 1363];
                        case "bi:BiSkipNext": return [3 /*break*/, 1365];
                        case "bi:BiSkipPreviousCircle": return [3 /*break*/, 1367];
                        case "bi:BiSkipPrevious": return [3 /*break*/, 1369];
                        case "bi:BiSleepy": return [3 /*break*/, 1371];
                        case "bi:BiSliderAlt": return [3 /*break*/, 1373];
                        case "bi:BiSlider": return [3 /*break*/, 1375];
                        case "bi:BiSlideshow": return [3 /*break*/, 1377];
                        case "bi:BiSmile": return [3 /*break*/, 1379];
                        case "bi:BiSortAZ": return [3 /*break*/, 1381];
                        case "bi:BiSortAlt2": return [3 /*break*/, 1383];
                        case "bi:BiSortDown": return [3 /*break*/, 1385];
                        case "bi:BiSortUp": return [3 /*break*/, 1387];
                        case "bi:BiSortZA": return [3 /*break*/, 1389];
                        case "bi:BiSort": return [3 /*break*/, 1391];
                        case "bi:BiSpa": return [3 /*break*/, 1393];
                        case "bi:BiSpaceBar": return [3 /*break*/, 1395];
                        case "bi:BiSpeaker": return [3 /*break*/, 1397];
                        case "bi:BiSprayCan": return [3 /*break*/, 1399];
                        case "bi:BiSpreadsheet": return [3 /*break*/, 1401];
                        case "bi:BiSquareRounded": return [3 /*break*/, 1403];
                        case "bi:BiSquare": return [3 /*break*/, 1405];
                        case "bi:BiStar": return [3 /*break*/, 1407];
                        case "bi:BiStation": return [3 /*break*/, 1409];
                        case "bi:BiStats": return [3 /*break*/, 1411];
                        case "bi:BiSticker": return [3 /*break*/, 1413];
                        case "bi:BiStopCircle": return [3 /*break*/, 1415];
                        case "bi:BiStop": return [3 /*break*/, 1417];
                        case "bi:BiStopwatch": return [3 /*break*/, 1419];
                        case "bi:BiStoreAlt": return [3 /*break*/, 1421];
                        case "bi:BiStore": return [3 /*break*/, 1423];
                        case "bi:BiStreetView": return [3 /*break*/, 1425];
                        case "bi:BiStrikethrough": return [3 /*break*/, 1427];
                        case "bi:BiSubdirectoryLeft": return [3 /*break*/, 1429];
                        case "bi:BiSubdirectoryRight": return [3 /*break*/, 1431];
                        case "bi:BiSun": return [3 /*break*/, 1433];
                        case "bi:BiSupport": return [3 /*break*/, 1435];
                        case "bi:BiSushi": return [3 /*break*/, 1437];
                        case "bi:BiSwim": return [3 /*break*/, 1439];
                        case "bi:BiSync": return [3 /*break*/, 1441];
                        case "bi:BiTab": return [3 /*break*/, 1443];
                        case "bi:BiTable": return [3 /*break*/, 1445];
                        case "bi:BiTachometer": return [3 /*break*/, 1447];
                        case "bi:BiTagAlt": return [3 /*break*/, 1449];
                        case "bi:BiTag": return [3 /*break*/, 1451];
                        case "bi:BiTargetLock": return [3 /*break*/, 1453];
                        case "bi:BiTaskX": return [3 /*break*/, 1455];
                        case "bi:BiTask": return [3 /*break*/, 1457];
                        case "bi:BiTaxi": return [3 /*break*/, 1459];
                        case "bi:BiTennisBall": return [3 /*break*/, 1461];
                        case "bi:BiTerminal": return [3 /*break*/, 1463];
                        case "bi:BiTestTube": return [3 /*break*/, 1465];
                        case "bi:BiText": return [3 /*break*/, 1467];
                        case "bi:BiTimeFive": return [3 /*break*/, 1469];
                        case "bi:BiTime": return [3 /*break*/, 1471];
                        case "bi:BiTimer": return [3 /*break*/, 1473];
                        case "bi:BiTired": return [3 /*break*/, 1475];
                        case "bi:BiToggleLeft": return [3 /*break*/, 1477];
                        case "bi:BiToggleRight": return [3 /*break*/, 1479];
                        case "bi:BiTone": return [3 /*break*/, 1481];
                        case "bi:BiTrafficCone": return [3 /*break*/, 1483];
                        case "bi:BiTrain": return [3 /*break*/, 1485];
                        case "bi:BiTransferAlt": return [3 /*break*/, 1487];
                        case "bi:BiTransfer": return [3 /*break*/, 1489];
                        case "bi:BiTrashAlt": return [3 /*break*/, 1491];
                        case "bi:BiTrash": return [3 /*break*/, 1493];
                        case "bi:BiTrendingDown": return [3 /*break*/, 1495];
                        case "bi:BiTrendingUp": return [3 /*break*/, 1497];
                        case "bi:BiTrim": return [3 /*break*/, 1499];
                        case "bi:BiTrip": return [3 /*break*/, 1501];
                        case "bi:BiTrophy": return [3 /*break*/, 1503];
                        case "bi:BiTv": return [3 /*break*/, 1505];
                        case "bi:BiUnderline": return [3 /*break*/, 1507];
                        case "bi:BiUndo": return [3 /*break*/, 1509];
                        case "bi:BiUnite": return [3 /*break*/, 1511];
                        case "bi:BiUniversalAccess": return [3 /*break*/, 1513];
                        case "bi:BiUnlink": return [3 /*break*/, 1515];
                        case "bi:BiUpArrowAlt": return [3 /*break*/, 1517];
                        case "bi:BiUpArrowCircle": return [3 /*break*/, 1519];
                        case "bi:BiUpArrow": return [3 /*break*/, 1521];
                        case "bi:BiUpload": return [3 /*break*/, 1523];
                        case "bi:BiUpsideDown": return [3 /*break*/, 1525];
                        case "bi:BiUpvote": return [3 /*break*/, 1527];
                        case "bi:BiUsb": return [3 /*break*/, 1529];
                        case "bi:BiUserCheck": return [3 /*break*/, 1531];
                        case "bi:BiUserCircle": return [3 /*break*/, 1533];
                        case "bi:BiUserMinus": return [3 /*break*/, 1535];
                        case "bi:BiUserPin": return [3 /*break*/, 1537];
                        case "bi:BiUserPlus": return [3 /*break*/, 1539];
                        case "bi:BiUserVoice": return [3 /*break*/, 1541];
                        case "bi:BiUserX": return [3 /*break*/, 1543];
                        case "bi:BiUser": return [3 /*break*/, 1545];
                        case "bi:BiVector": return [3 /*break*/, 1547];
                        case "bi:BiVerticalBottom": return [3 /*break*/, 1549];
                        case "bi:BiVerticalCenter": return [3 /*break*/, 1551];
                        case "bi:BiVerticalTop": return [3 /*break*/, 1553];
                        case "bi:BiVial": return [3 /*break*/, 1555];
                        case "bi:BiVideoOff": return [3 /*break*/, 1557];
                        case "bi:BiVideoPlus": return [3 /*break*/, 1559];
                        case "bi:BiVideoRecording": return [3 /*break*/, 1561];
                        case "bi:BiVideo": return [3 /*break*/, 1563];
                        case "bi:BiVoicemail": return [3 /*break*/, 1565];
                        case "bi:BiVolumeFull": return [3 /*break*/, 1567];
                        case "bi:BiVolumeLow": return [3 /*break*/, 1569];
                        case "bi:BiVolumeMute": return [3 /*break*/, 1571];
                        case "bi:BiVolume": return [3 /*break*/, 1573];
                        case "bi:BiWalk": return [3 /*break*/, 1575];
                        case "bi:BiWalletAlt": return [3 /*break*/, 1577];
                        case "bi:BiWallet": return [3 /*break*/, 1579];
                        case "bi:BiWater": return [3 /*break*/, 1581];
                        case "bi:BiWebcam": return [3 /*break*/, 1583];
                        case "bi:BiWifi0": return [3 /*break*/, 1585];
                        case "bi:BiWifi1": return [3 /*break*/, 1587];
                        case "bi:BiWifi2": return [3 /*break*/, 1589];
                        case "bi:BiWifiOff": return [3 /*break*/, 1591];
                        case "bi:BiWifi": return [3 /*break*/, 1593];
                        case "bi:BiWind": return [3 /*break*/, 1595];
                        case "bi:BiWindowAlt": return [3 /*break*/, 1597];
                        case "bi:BiWindowClose": return [3 /*break*/, 1599];
                        case "bi:BiWindowOpen": return [3 /*break*/, 1601];
                        case "bi:BiWindow": return [3 /*break*/, 1603];
                        case "bi:BiWindows": return [3 /*break*/, 1605];
                        case "bi:BiWine": return [3 /*break*/, 1607];
                        case "bi:BiWinkSmile": return [3 /*break*/, 1609];
                        case "bi:BiWinkTongue": return [3 /*break*/, 1611];
                        case "bi:BiWon": return [3 /*break*/, 1613];
                        case "bi:BiWorld": return [3 /*break*/, 1615];
                        case "bi:BiWrench": return [3 /*break*/, 1617];
                        case "bi:BiXCircle": return [3 /*break*/, 1619];
                        case "bi:BiX": return [3 /*break*/, 1621];
                        case "bi:BiYen": return [3 /*break*/, 1623];
                        case "bi:BiZoomIn": return [3 /*break*/, 1625];
                        case "bi:BiZoomOut": return [3 /*break*/, 1627];
                        case "bi:BiSolidAddToQueue": return [3 /*break*/, 1629];
                        case "bi:BiSolidAdjustAlt": return [3 /*break*/, 1631];
                        case "bi:BiSolidAdjust": return [3 /*break*/, 1633];
                        case "bi:BiSolidAlarmAdd": return [3 /*break*/, 1635];
                        case "bi:BiSolidAlarmExclamation": return [3 /*break*/, 1637];
                        case "bi:BiSolidAlarmOff": return [3 /*break*/, 1639];
                        case "bi:BiSolidAlarmSnooze": return [3 /*break*/, 1641];
                        case "bi:BiSolidAlarm": return [3 /*break*/, 1643];
                        case "bi:BiSolidAlbum": return [3 /*break*/, 1645];
                        case "bi:BiSolidAmbulance": return [3 /*break*/, 1647];
                        case "bi:BiSolidAnalyse": return [3 /*break*/, 1649];
                        case "bi:BiSolidAngry": return [3 /*break*/, 1651];
                        case "bi:BiSolidArch": return [3 /*break*/, 1653];
                        case "bi:BiSolidArchiveIn": return [3 /*break*/, 1655];
                        case "bi:BiSolidArchiveOut": return [3 /*break*/, 1657];
                        case "bi:BiSolidArchive": return [3 /*break*/, 1659];
                        case "bi:BiSolidArea": return [3 /*break*/, 1661];
                        case "bi:BiSolidArrowFromBottom": return [3 /*break*/, 1663];
                        case "bi:BiSolidArrowFromLeft": return [3 /*break*/, 1665];
                        case "bi:BiSolidArrowFromRight": return [3 /*break*/, 1667];
                        case "bi:BiSolidArrowFromTop": return [3 /*break*/, 1669];
                        case "bi:BiSolidArrowToBottom": return [3 /*break*/, 1671];
                        case "bi:BiSolidArrowToLeft": return [3 /*break*/, 1673];
                        case "bi:BiSolidArrowToRight": return [3 /*break*/, 1675];
                        case "bi:BiSolidArrowToTop": return [3 /*break*/, 1677];
                        case "bi:BiSolidAward": return [3 /*break*/, 1679];
                        case "bi:BiSolidBabyCarriage": return [3 /*break*/, 1681];
                        case "bi:BiSolidBackpack": return [3 /*break*/, 1683];
                        case "bi:BiSolidBadgeCheck": return [3 /*break*/, 1685];
                        case "bi:BiSolidBadgeDollar": return [3 /*break*/, 1687];
                        case "bi:BiSolidBadge": return [3 /*break*/, 1689];
                        case "bi:BiSolidBaguette": return [3 /*break*/, 1691];
                        case "bi:BiSolidBall": return [3 /*break*/, 1693];
                        case "bi:BiSolidBalloon": return [3 /*break*/, 1695];
                        case "bi:BiSolidBandAid": return [3 /*break*/, 1697];
                        case "bi:BiSolidBank": return [3 /*break*/, 1699];
                        case "bi:BiSolidBarChartAlt2": return [3 /*break*/, 1701];
                        case "bi:BiSolidBarChartSquare": return [3 /*break*/, 1703];
                        case "bi:BiSolidBarcode": return [3 /*break*/, 1705];
                        case "bi:BiSolidBaseball": return [3 /*break*/, 1707];
                        case "bi:BiSolidBasket": return [3 /*break*/, 1709];
                        case "bi:BiSolidBasketball": return [3 /*break*/, 1711];
                        case "bi:BiSolidBath": return [3 /*break*/, 1713];
                        case "bi:BiSolidBatteryCharging": return [3 /*break*/, 1715];
                        case "bi:BiSolidBatteryFull": return [3 /*break*/, 1717];
                        case "bi:BiSolidBatteryLow": return [3 /*break*/, 1719];
                        case "bi:BiSolidBattery": return [3 /*break*/, 1721];
                        case "bi:BiSolidBed": return [3 /*break*/, 1723];
                        case "bi:BiSolidBeenHere": return [3 /*break*/, 1725];
                        case "bi:BiSolidBeer": return [3 /*break*/, 1727];
                        case "bi:BiSolidBellMinus": return [3 /*break*/, 1729];
                        case "bi:BiSolidBellOff": return [3 /*break*/, 1731];
                        case "bi:BiSolidBellPlus": return [3 /*break*/, 1733];
                        case "bi:BiSolidBellRing": return [3 /*break*/, 1735];
                        case "bi:BiSolidBell": return [3 /*break*/, 1737];
                        case "bi:BiSolidBible": return [3 /*break*/, 1739];
                        case "bi:BiSolidBinoculars": return [3 /*break*/, 1741];
                        case "bi:BiSolidBlanket": return [3 /*break*/, 1743];
                        case "bi:BiSolidBoltCircle": return [3 /*break*/, 1745];
                        case "bi:BiSolidBolt": return [3 /*break*/, 1747];
                        case "bi:BiSolidBomb": return [3 /*break*/, 1749];
                        case "bi:BiSolidBone": return [3 /*break*/, 1751];
                        case "bi:BiSolidBong": return [3 /*break*/, 1753];
                        case "bi:BiSolidBookAdd": return [3 /*break*/, 1755];
                        case "bi:BiSolidBookAlt": return [3 /*break*/, 1757];
                        case "bi:BiSolidBookBookmark": return [3 /*break*/, 1759];
                        case "bi:BiSolidBookContent": return [3 /*break*/, 1761];
                        case "bi:BiSolidBookHeart": return [3 /*break*/, 1763];
                        case "bi:BiSolidBookOpen": return [3 /*break*/, 1765];
                        case "bi:BiSolidBookReader": return [3 /*break*/, 1767];
                        case "bi:BiSolidBook": return [3 /*break*/, 1769];
                        case "bi:BiSolidBookmarkAltMinus": return [3 /*break*/, 1771];
                        case "bi:BiSolidBookmarkAltPlus": return [3 /*break*/, 1773];
                        case "bi:BiSolidBookmarkAlt": return [3 /*break*/, 1775];
                        case "bi:BiSolidBookmarkHeart": return [3 /*break*/, 1777];
                        case "bi:BiSolidBookmarkMinus": return [3 /*break*/, 1779];
                        case "bi:BiSolidBookmarkPlus": return [3 /*break*/, 1781];
                        case "bi:BiSolidBookmarkStar": return [3 /*break*/, 1783];
                        case "bi:BiSolidBookmark": return [3 /*break*/, 1785];
                        case "bi:BiSolidBookmarks": return [3 /*break*/, 1787];
                        case "bi:BiSolidBot": return [3 /*break*/, 1789];
                        case "bi:BiSolidBowlHot": return [3 /*break*/, 1791];
                        case "bi:BiSolidBowlRice": return [3 /*break*/, 1793];
                        case "bi:BiSolidBowlingBall": return [3 /*break*/, 1795];
                        case "bi:BiSolidBox": return [3 /*break*/, 1797];
                        case "bi:BiSolidBrain": return [3 /*break*/, 1799];
                        case "bi:BiSolidBriefcaseAlt2": return [3 /*break*/, 1801];
                        case "bi:BiSolidBriefcaseAlt": return [3 /*break*/, 1803];
                        case "bi:BiSolidBriefcase": return [3 /*break*/, 1805];
                        case "bi:BiSolidBrightnessHalf": return [3 /*break*/, 1807];
                        case "bi:BiSolidBrightness": return [3 /*break*/, 1809];
                        case "bi:BiSolidBrushAlt": return [3 /*break*/, 1811];
                        case "bi:BiSolidBrush": return [3 /*break*/, 1813];
                        case "bi:BiSolidBugAlt": return [3 /*break*/, 1815];
                        case "bi:BiSolidBug": return [3 /*break*/, 1817];
                        case "bi:BiSolidBuildingHouse": return [3 /*break*/, 1819];
                        case "bi:BiSolidBuilding": return [3 /*break*/, 1821];
                        case "bi:BiSolidBuildings": return [3 /*break*/, 1823];
                        case "bi:BiSolidBulb": return [3 /*break*/, 1825];
                        case "bi:BiSolidBullseye": return [3 /*break*/, 1827];
                        case "bi:BiSolidBuoy": return [3 /*break*/, 1829];
                        case "bi:BiSolidBusSchool": return [3 /*break*/, 1831];
                        case "bi:BiSolidBus": return [3 /*break*/, 1833];
                        case "bi:BiSolidBusiness": return [3 /*break*/, 1835];
                        case "bi:BiSolidCabinet": return [3 /*break*/, 1837];
                        case "bi:BiSolidCableCar": return [3 /*break*/, 1839];
                        case "bi:BiSolidCake": return [3 /*break*/, 1841];
                        case "bi:BiSolidCalculator": return [3 /*break*/, 1843];
                        case "bi:BiSolidCalendarAlt": return [3 /*break*/, 1845];
                        case "bi:BiSolidCalendarCheck": return [3 /*break*/, 1847];
                        case "bi:BiSolidCalendarEdit": return [3 /*break*/, 1849];
                        case "bi:BiSolidCalendarEvent": return [3 /*break*/, 1851];
                        case "bi:BiSolidCalendarExclamation": return [3 /*break*/, 1853];
                        case "bi:BiSolidCalendarHeart": return [3 /*break*/, 1855];
                        case "bi:BiSolidCalendarMinus": return [3 /*break*/, 1857];
                        case "bi:BiSolidCalendarPlus": return [3 /*break*/, 1859];
                        case "bi:BiSolidCalendarStar": return [3 /*break*/, 1861];
                        case "bi:BiSolidCalendarWeek": return [3 /*break*/, 1863];
                        case "bi:BiSolidCalendarX": return [3 /*break*/, 1865];
                        case "bi:BiSolidCalendar": return [3 /*break*/, 1867];
                        case "bi:BiSolidCameraHome": return [3 /*break*/, 1869];
                        case "bi:BiSolidCameraMovie": return [3 /*break*/, 1871];
                        case "bi:BiSolidCameraOff": return [3 /*break*/, 1873];
                        case "bi:BiSolidCameraPlus": return [3 /*break*/, 1875];
                        case "bi:BiSolidCamera": return [3 /*break*/, 1877];
                        case "bi:BiSolidCapsule": return [3 /*break*/, 1879];
                        case "bi:BiSolidCaptions": return [3 /*break*/, 1881];
                        case "bi:BiSolidCarBattery": return [3 /*break*/, 1883];
                        case "bi:BiSolidCarCrash": return [3 /*break*/, 1885];
                        case "bi:BiSolidCarGarage": return [3 /*break*/, 1887];
                        case "bi:BiSolidCarMechanic": return [3 /*break*/, 1889];
                        case "bi:BiSolidCarWash": return [3 /*break*/, 1891];
                        case "bi:BiSolidCar": return [3 /*break*/, 1893];
                        case "bi:BiSolidCard": return [3 /*break*/, 1895];
                        case "bi:BiSolidCaretDownCircle": return [3 /*break*/, 1897];
                        case "bi:BiSolidCaretDownSquare": return [3 /*break*/, 1899];
                        case "bi:BiSolidCaretLeftCircle": return [3 /*break*/, 1901];
                        case "bi:BiSolidCaretLeftSquare": return [3 /*break*/, 1903];
                        case "bi:BiSolidCaretRightCircle": return [3 /*break*/, 1905];
                        case "bi:BiSolidCaretRightSquare": return [3 /*break*/, 1907];
                        case "bi:BiSolidCaretUpCircle": return [3 /*break*/, 1909];
                        case "bi:BiSolidCaretUpSquare": return [3 /*break*/, 1911];
                        case "bi:BiSolidCarousel": return [3 /*break*/, 1913];
                        case "bi:BiSolidCartAdd": return [3 /*break*/, 1915];
                        case "bi:BiSolidCartAlt": return [3 /*break*/, 1917];
                        case "bi:BiSolidCartDownload": return [3 /*break*/, 1919];
                        case "bi:BiSolidCart": return [3 /*break*/, 1921];
                        case "bi:BiSolidCastle": return [3 /*break*/, 1923];
                        case "bi:BiSolidCat": return [3 /*break*/, 1925];
                        case "bi:BiSolidCategoryAlt": return [3 /*break*/, 1927];
                        case "bi:BiSolidCategory": return [3 /*break*/, 1929];
                        case "bi:BiSolidCctv": return [3 /*break*/, 1931];
                        case "bi:BiSolidCertification": return [3 /*break*/, 1933];
                        case "bi:BiSolidChalkboard": return [3 /*break*/, 1935];
                        case "bi:BiSolidChart": return [3 /*break*/, 1937];
                        case "bi:BiSolidChat": return [3 /*break*/, 1939];
                        case "bi:BiSolidCheckCircle": return [3 /*break*/, 1941];
                        case "bi:BiSolidCheckShield": return [3 /*break*/, 1943];
                        case "bi:BiSolidCheckSquare": return [3 /*break*/, 1945];
                        case "bi:BiSolidCheckboxChecked": return [3 /*break*/, 1947];
                        case "bi:BiSolidCheckboxMinus": return [3 /*break*/, 1949];
                        case "bi:BiSolidCheckbox": return [3 /*break*/, 1951];
                        case "bi:BiSolidCheese": return [3 /*break*/, 1953];
                        case "bi:BiSolidChess": return [3 /*break*/, 1955];
                        case "bi:BiSolidChevronDownCircle": return [3 /*break*/, 1957];
                        case "bi:BiSolidChevronDownSquare": return [3 /*break*/, 1959];
                        case "bi:BiSolidChevronDown": return [3 /*break*/, 1961];
                        case "bi:BiSolidChevronLeftCircle": return [3 /*break*/, 1963];
                        case "bi:BiSolidChevronLeftSquare": return [3 /*break*/, 1965];
                        case "bi:BiSolidChevronLeft": return [3 /*break*/, 1967];
                        case "bi:BiSolidChevronRightCircle": return [3 /*break*/, 1969];
                        case "bi:BiSolidChevronRightSquare": return [3 /*break*/, 1971];
                        case "bi:BiSolidChevronRight": return [3 /*break*/, 1973];
                        case "bi:BiSolidChevronUpCircle": return [3 /*break*/, 1975];
                        case "bi:BiSolidChevronUpSquare": return [3 /*break*/, 1977];
                        case "bi:BiSolidChevronUp": return [3 /*break*/, 1979];
                        case "bi:BiSolidChevronsDown": return [3 /*break*/, 1981];
                        case "bi:BiSolidChevronsLeft": return [3 /*break*/, 1983];
                        case "bi:BiSolidChevronsRight": return [3 /*break*/, 1985];
                        case "bi:BiSolidChevronsUp": return [3 /*break*/, 1987];
                        case "bi:BiSolidChip": return [3 /*break*/, 1989];
                        case "bi:BiSolidChurch": return [3 /*break*/, 1991];
                        case "bi:BiSolidCircleHalf": return [3 /*break*/, 1993];
                        case "bi:BiSolidCircleQuarter": return [3 /*break*/, 1995];
                        case "bi:BiSolidCircleThreeQuarter": return [3 /*break*/, 1997];
                        case "bi:BiSolidCircle": return [3 /*break*/, 1999];
                    }
                    return [3 /*break*/, 2001];
                case 1: return [4 /*yield*/, import("react-icons/bi")];
                case 2:
                    BiAbacus = (_b.sent()).BiAbacus;
                    return [2 /*return*/, BiAbacus];
                case 3: return [4 /*yield*/, import("react-icons/bi")];
                case 4:
                    BiAccessibility = (_b.sent()).BiAccessibility;
                    return [2 /*return*/, BiAccessibility];
                case 5: return [4 /*yield*/, import("react-icons/bi")];
                case 6:
                    BiAddToQueue = (_b.sent()).BiAddToQueue;
                    return [2 /*return*/, BiAddToQueue];
                case 7: return [4 /*yield*/, import("react-icons/bi")];
                case 8:
                    BiAdjust = (_b.sent()).BiAdjust;
                    return [2 /*return*/, BiAdjust];
                case 9: return [4 /*yield*/, import("react-icons/bi")];
                case 10:
                    BiAlarmAdd = (_b.sent()).BiAlarmAdd;
                    return [2 /*return*/, BiAlarmAdd];
                case 11: return [4 /*yield*/, import("react-icons/bi")];
                case 12:
                    BiAlarmExclamation = (_b.sent()).BiAlarmExclamation;
                    return [2 /*return*/, BiAlarmExclamation];
                case 13: return [4 /*yield*/, import("react-icons/bi")];
                case 14:
                    BiAlarmOff = (_b.sent()).BiAlarmOff;
                    return [2 /*return*/, BiAlarmOff];
                case 15: return [4 /*yield*/, import("react-icons/bi")];
                case 16:
                    BiAlarmSnooze = (_b.sent()).BiAlarmSnooze;
                    return [2 /*return*/, BiAlarmSnooze];
                case 17: return [4 /*yield*/, import("react-icons/bi")];
                case 18:
                    BiAlarm = (_b.sent()).BiAlarm;
                    return [2 /*return*/, BiAlarm];
                case 19: return [4 /*yield*/, import("react-icons/bi")];
                case 20:
                    BiAlbum = (_b.sent()).BiAlbum;
                    return [2 /*return*/, BiAlbum];
                case 21: return [4 /*yield*/, import("react-icons/bi")];
                case 22:
                    BiAlignJustify = (_b.sent()).BiAlignJustify;
                    return [2 /*return*/, BiAlignJustify];
                case 23: return [4 /*yield*/, import("react-icons/bi")];
                case 24:
                    BiAlignLeft = (_b.sent()).BiAlignLeft;
                    return [2 /*return*/, BiAlignLeft];
                case 25: return [4 /*yield*/, import("react-icons/bi")];
                case 26:
                    BiAlignMiddle = (_b.sent()).BiAlignMiddle;
                    return [2 /*return*/, BiAlignMiddle];
                case 27: return [4 /*yield*/, import("react-icons/bi")];
                case 28:
                    BiAlignRight = (_b.sent()).BiAlignRight;
                    return [2 /*return*/, BiAlignRight];
                case 29: return [4 /*yield*/, import("react-icons/bi")];
                case 30:
                    BiAnalyse = (_b.sent()).BiAnalyse;
                    return [2 /*return*/, BiAnalyse];
                case 31: return [4 /*yield*/, import("react-icons/bi")];
                case 32:
                    BiAnchor = (_b.sent()).BiAnchor;
                    return [2 /*return*/, BiAnchor];
                case 33: return [4 /*yield*/, import("react-icons/bi")];
                case 34:
                    BiAngry = (_b.sent()).BiAngry;
                    return [2 /*return*/, BiAngry];
                case 35: return [4 /*yield*/, import("react-icons/bi")];
                case 36:
                    BiAperture = (_b.sent()).BiAperture;
                    return [2 /*return*/, BiAperture];
                case 37: return [4 /*yield*/, import("react-icons/bi")];
                case 38:
                    BiArch = (_b.sent()).BiArch;
                    return [2 /*return*/, BiArch];
                case 39: return [4 /*yield*/, import("react-icons/bi")];
                case 40:
                    BiArchiveIn = (_b.sent()).BiArchiveIn;
                    return [2 /*return*/, BiArchiveIn];
                case 41: return [4 /*yield*/, import("react-icons/bi")];
                case 42:
                    BiArchiveOut = (_b.sent()).BiArchiveOut;
                    return [2 /*return*/, BiArchiveOut];
                case 43: return [4 /*yield*/, import("react-icons/bi")];
                case 44:
                    BiArchive = (_b.sent()).BiArchive;
                    return [2 /*return*/, BiArchive];
                case 45: return [4 /*yield*/, import("react-icons/bi")];
                case 46:
                    BiArea = (_b.sent()).BiArea;
                    return [2 /*return*/, BiArea];
                case 47: return [4 /*yield*/, import("react-icons/bi")];
                case 48:
                    BiArrowBack = (_b.sent()).BiArrowBack;
                    return [2 /*return*/, BiArrowBack];
                case 49: return [4 /*yield*/, import("react-icons/bi")];
                case 50:
                    BiArrowFromBottom = (_b.sent()).BiArrowFromBottom;
                    return [2 /*return*/, BiArrowFromBottom];
                case 51: return [4 /*yield*/, import("react-icons/bi")];
                case 52:
                    BiArrowFromLeft = (_b.sent()).BiArrowFromLeft;
                    return [2 /*return*/, BiArrowFromLeft];
                case 53: return [4 /*yield*/, import("react-icons/bi")];
                case 54:
                    BiArrowFromRight = (_b.sent()).BiArrowFromRight;
                    return [2 /*return*/, BiArrowFromRight];
                case 55: return [4 /*yield*/, import("react-icons/bi")];
                case 56:
                    BiArrowFromTop = (_b.sent()).BiArrowFromTop;
                    return [2 /*return*/, BiArrowFromTop];
                case 57: return [4 /*yield*/, import("react-icons/bi")];
                case 58:
                    BiArrowToBottom = (_b.sent()).BiArrowToBottom;
                    return [2 /*return*/, BiArrowToBottom];
                case 59: return [4 /*yield*/, import("react-icons/bi")];
                case 60:
                    BiArrowToLeft = (_b.sent()).BiArrowToLeft;
                    return [2 /*return*/, BiArrowToLeft];
                case 61: return [4 /*yield*/, import("react-icons/bi")];
                case 62:
                    BiArrowToRight = (_b.sent()).BiArrowToRight;
                    return [2 /*return*/, BiArrowToRight];
                case 63: return [4 /*yield*/, import("react-icons/bi")];
                case 64:
                    BiArrowToTop = (_b.sent()).BiArrowToTop;
                    return [2 /*return*/, BiArrowToTop];
                case 65: return [4 /*yield*/, import("react-icons/bi")];
                case 66:
                    BiAt = (_b.sent()).BiAt;
                    return [2 /*return*/, BiAt];
                case 67: return [4 /*yield*/, import("react-icons/bi")];
                case 68:
                    BiAtom = (_b.sent()).BiAtom;
                    return [2 /*return*/, BiAtom];
                case 69: return [4 /*yield*/, import("react-icons/bi")];
                case 70:
                    BiAward = (_b.sent()).BiAward;
                    return [2 /*return*/, BiAward];
                case 71: return [4 /*yield*/, import("react-icons/bi")];
                case 72:
                    BiBadgeCheck = (_b.sent()).BiBadgeCheck;
                    return [2 /*return*/, BiBadgeCheck];
                case 73: return [4 /*yield*/, import("react-icons/bi")];
                case 74:
                    BiBadge = (_b.sent()).BiBadge;
                    return [2 /*return*/, BiBadge];
                case 75: return [4 /*yield*/, import("react-icons/bi")];
                case 76:
                    BiBaguette = (_b.sent()).BiBaguette;
                    return [2 /*return*/, BiBaguette];
                case 77: return [4 /*yield*/, import("react-icons/bi")];
                case 78:
                    BiBall = (_b.sent()).BiBall;
                    return [2 /*return*/, BiBall];
                case 79: return [4 /*yield*/, import("react-icons/bi")];
                case 80:
                    BiBandAid = (_b.sent()).BiBandAid;
                    return [2 /*return*/, BiBandAid];
                case 81: return [4 /*yield*/, import("react-icons/bi")];
                case 82:
                    BiBarChartAlt2 = (_b.sent()).BiBarChartAlt2;
                    return [2 /*return*/, BiBarChartAlt2];
                case 83: return [4 /*yield*/, import("react-icons/bi")];
                case 84:
                    BiBarChartAlt = (_b.sent()).BiBarChartAlt;
                    return [2 /*return*/, BiBarChartAlt];
                case 85: return [4 /*yield*/, import("react-icons/bi")];
                case 86:
                    BiBarChartSquare = (_b.sent()).BiBarChartSquare;
                    return [2 /*return*/, BiBarChartSquare];
                case 87: return [4 /*yield*/, import("react-icons/bi")];
                case 88:
                    BiBarChart = (_b.sent()).BiBarChart;
                    return [2 /*return*/, BiBarChart];
                case 89: return [4 /*yield*/, import("react-icons/bi")];
                case 90:
                    BiBarcodeReader = (_b.sent()).BiBarcodeReader;
                    return [2 /*return*/, BiBarcodeReader];
                case 91: return [4 /*yield*/, import("react-icons/bi")];
                case 92:
                    BiBarcode = (_b.sent()).BiBarcode;
                    return [2 /*return*/, BiBarcode];
                case 93: return [4 /*yield*/, import("react-icons/bi")];
                case 94:
                    BiBaseball = (_b.sent()).BiBaseball;
                    return [2 /*return*/, BiBaseball];
                case 95: return [4 /*yield*/, import("react-icons/bi")];
                case 96:
                    BiBasket = (_b.sent()).BiBasket;
                    return [2 /*return*/, BiBasket];
                case 97: return [4 /*yield*/, import("react-icons/bi")];
                case 98:
                    BiBasketball = (_b.sent()).BiBasketball;
                    return [2 /*return*/, BiBasketball];
                case 99: return [4 /*yield*/, import("react-icons/bi")];
                case 100:
                    BiBath = (_b.sent()).BiBath;
                    return [2 /*return*/, BiBath];
                case 101: return [4 /*yield*/, import("react-icons/bi")];
                case 102:
                    BiBattery = (_b.sent()).BiBattery;
                    return [2 /*return*/, BiBattery];
                case 103: return [4 /*yield*/, import("react-icons/bi")];
                case 104:
                    BiBed = (_b.sent()).BiBed;
                    return [2 /*return*/, BiBed];
                case 105: return [4 /*yield*/, import("react-icons/bi")];
                case 106:
                    BiBeenHere = (_b.sent()).BiBeenHere;
                    return [2 /*return*/, BiBeenHere];
                case 107: return [4 /*yield*/, import("react-icons/bi")];
                case 108:
                    BiBeer = (_b.sent()).BiBeer;
                    return [2 /*return*/, BiBeer];
                case 109: return [4 /*yield*/, import("react-icons/bi")];
                case 110:
                    BiBellMinus = (_b.sent()).BiBellMinus;
                    return [2 /*return*/, BiBellMinus];
                case 111: return [4 /*yield*/, import("react-icons/bi")];
                case 112:
                    BiBellOff = (_b.sent()).BiBellOff;
                    return [2 /*return*/, BiBellOff];
                case 113: return [4 /*yield*/, import("react-icons/bi")];
                case 114:
                    BiBellPlus = (_b.sent()).BiBellPlus;
                    return [2 /*return*/, BiBellPlus];
                case 115: return [4 /*yield*/, import("react-icons/bi")];
                case 116:
                    BiBell = (_b.sent()).BiBell;
                    return [2 /*return*/, BiBell];
                case 117: return [4 /*yield*/, import("react-icons/bi")];
                case 118:
                    BiBible = (_b.sent()).BiBible;
                    return [2 /*return*/, BiBible];
                case 119: return [4 /*yield*/, import("react-icons/bi")];
                case 120:
                    BiBitcoin = (_b.sent()).BiBitcoin;
                    return [2 /*return*/, BiBitcoin];
                case 121: return [4 /*yield*/, import("react-icons/bi")];
                case 122:
                    BiBlanket = (_b.sent()).BiBlanket;
                    return [2 /*return*/, BiBlanket];
                case 123: return [4 /*yield*/, import("react-icons/bi")];
                case 124:
                    BiBlock = (_b.sent()).BiBlock;
                    return [2 /*return*/, BiBlock];
                case 125: return [4 /*yield*/, import("react-icons/bi")];
                case 126:
                    BiBluetooth = (_b.sent()).BiBluetooth;
                    return [2 /*return*/, BiBluetooth];
                case 127: return [4 /*yield*/, import("react-icons/bi")];
                case 128:
                    BiBody = (_b.sent()).BiBody;
                    return [2 /*return*/, BiBody];
                case 129: return [4 /*yield*/, import("react-icons/bi")];
                case 130:
                    BiBold = (_b.sent()).BiBold;
                    return [2 /*return*/, BiBold];
                case 131: return [4 /*yield*/, import("react-icons/bi")];
                case 132:
                    BiBoltCircle = (_b.sent()).BiBoltCircle;
                    return [2 /*return*/, BiBoltCircle];
                case 133: return [4 /*yield*/, import("react-icons/bi")];
                case 134:
                    BiBomb = (_b.sent()).BiBomb;
                    return [2 /*return*/, BiBomb];
                case 135: return [4 /*yield*/, import("react-icons/bi")];
                case 136:
                    BiBone = (_b.sent()).BiBone;
                    return [2 /*return*/, BiBone];
                case 137: return [4 /*yield*/, import("react-icons/bi")];
                case 138:
                    BiBong = (_b.sent()).BiBong;
                    return [2 /*return*/, BiBong];
                case 139: return [4 /*yield*/, import("react-icons/bi")];
                case 140:
                    BiBookAdd = (_b.sent()).BiBookAdd;
                    return [2 /*return*/, BiBookAdd];
                case 141: return [4 /*yield*/, import("react-icons/bi")];
                case 142:
                    BiBookAlt = (_b.sent()).BiBookAlt;
                    return [2 /*return*/, BiBookAlt];
                case 143: return [4 /*yield*/, import("react-icons/bi")];
                case 144:
                    BiBookBookmark = (_b.sent()).BiBookBookmark;
                    return [2 /*return*/, BiBookBookmark];
                case 145: return [4 /*yield*/, import("react-icons/bi")];
                case 146:
                    BiBookContent = (_b.sent()).BiBookContent;
                    return [2 /*return*/, BiBookContent];
                case 147: return [4 /*yield*/, import("react-icons/bi")];
                case 148:
                    BiBookHeart = (_b.sent()).BiBookHeart;
                    return [2 /*return*/, BiBookHeart];
                case 149: return [4 /*yield*/, import("react-icons/bi")];
                case 150:
                    BiBookOpen = (_b.sent()).BiBookOpen;
                    return [2 /*return*/, BiBookOpen];
                case 151: return [4 /*yield*/, import("react-icons/bi")];
                case 152:
                    BiBookReader = (_b.sent()).BiBookReader;
                    return [2 /*return*/, BiBookReader];
                case 153: return [4 /*yield*/, import("react-icons/bi")];
                case 154:
                    BiBook = (_b.sent()).BiBook;
                    return [2 /*return*/, BiBook];
                case 155: return [4 /*yield*/, import("react-icons/bi")];
                case 156:
                    BiBookmarkAltMinus = (_b.sent()).BiBookmarkAltMinus;
                    return [2 /*return*/, BiBookmarkAltMinus];
                case 157: return [4 /*yield*/, import("react-icons/bi")];
                case 158:
                    BiBookmarkAltPlus = (_b.sent()).BiBookmarkAltPlus;
                    return [2 /*return*/, BiBookmarkAltPlus];
                case 159: return [4 /*yield*/, import("react-icons/bi")];
                case 160:
                    BiBookmarkAlt = (_b.sent()).BiBookmarkAlt;
                    return [2 /*return*/, BiBookmarkAlt];
                case 161: return [4 /*yield*/, import("react-icons/bi")];
                case 162:
                    BiBookmarkHeart = (_b.sent()).BiBookmarkHeart;
                    return [2 /*return*/, BiBookmarkHeart];
                case 163: return [4 /*yield*/, import("react-icons/bi")];
                case 164:
                    BiBookmarkMinus = (_b.sent()).BiBookmarkMinus;
                    return [2 /*return*/, BiBookmarkMinus];
                case 165: return [4 /*yield*/, import("react-icons/bi")];
                case 166:
                    BiBookmarkPlus = (_b.sent()).BiBookmarkPlus;
                    return [2 /*return*/, BiBookmarkPlus];
                case 167: return [4 /*yield*/, import("react-icons/bi")];
                case 168:
                    BiBookmark = (_b.sent()).BiBookmark;
                    return [2 /*return*/, BiBookmark];
                case 169: return [4 /*yield*/, import("react-icons/bi")];
                case 170:
                    BiBookmarks = (_b.sent()).BiBookmarks;
                    return [2 /*return*/, BiBookmarks];
                case 171: return [4 /*yield*/, import("react-icons/bi")];
                case 172:
                    BiBorderAll = (_b.sent()).BiBorderAll;
                    return [2 /*return*/, BiBorderAll];
                case 173: return [4 /*yield*/, import("react-icons/bi")];
                case 174:
                    BiBorderBottom = (_b.sent()).BiBorderBottom;
                    return [2 /*return*/, BiBorderBottom];
                case 175: return [4 /*yield*/, import("react-icons/bi")];
                case 176:
                    BiBorderInner = (_b.sent()).BiBorderInner;
                    return [2 /*return*/, BiBorderInner];
                case 177: return [4 /*yield*/, import("react-icons/bi")];
                case 178:
                    BiBorderLeft = (_b.sent()).BiBorderLeft;
                    return [2 /*return*/, BiBorderLeft];
                case 179: return [4 /*yield*/, import("react-icons/bi")];
                case 180:
                    BiBorderNone = (_b.sent()).BiBorderNone;
                    return [2 /*return*/, BiBorderNone];
                case 181: return [4 /*yield*/, import("react-icons/bi")];
                case 182:
                    BiBorderOuter = (_b.sent()).BiBorderOuter;
                    return [2 /*return*/, BiBorderOuter];
                case 183: return [4 /*yield*/, import("react-icons/bi")];
                case 184:
                    BiBorderRadius = (_b.sent()).BiBorderRadius;
                    return [2 /*return*/, BiBorderRadius];
                case 185: return [4 /*yield*/, import("react-icons/bi")];
                case 186:
                    BiBorderRight = (_b.sent()).BiBorderRight;
                    return [2 /*return*/, BiBorderRight];
                case 187: return [4 /*yield*/, import("react-icons/bi")];
                case 188:
                    BiBorderTop = (_b.sent()).BiBorderTop;
                    return [2 /*return*/, BiBorderTop];
                case 189: return [4 /*yield*/, import("react-icons/bi")];
                case 190:
                    BiBot = (_b.sent()).BiBot;
                    return [2 /*return*/, BiBot];
                case 191: return [4 /*yield*/, import("react-icons/bi")];
                case 192:
                    BiBowlHot = (_b.sent()).BiBowlHot;
                    return [2 /*return*/, BiBowlHot];
                case 193: return [4 /*yield*/, import("react-icons/bi")];
                case 194:
                    BiBowlRice = (_b.sent()).BiBowlRice;
                    return [2 /*return*/, BiBowlRice];
                case 195: return [4 /*yield*/, import("react-icons/bi")];
                case 196:
                    BiBowlingBall = (_b.sent()).BiBowlingBall;
                    return [2 /*return*/, BiBowlingBall];
                case 197: return [4 /*yield*/, import("react-icons/bi")];
                case 198:
                    BiBox = (_b.sent()).BiBox;
                    return [2 /*return*/, BiBox];
                case 199: return [4 /*yield*/, import("react-icons/bi")];
                case 200:
                    BiBracket = (_b.sent()).BiBracket;
                    return [2 /*return*/, BiBracket];
                case 201: return [4 /*yield*/, import("react-icons/bi")];
                case 202:
                    BiBraille = (_b.sent()).BiBraille;
                    return [2 /*return*/, BiBraille];
                case 203: return [4 /*yield*/, import("react-icons/bi")];
                case 204:
                    BiBrain = (_b.sent()).BiBrain;
                    return [2 /*return*/, BiBrain];
                case 205: return [4 /*yield*/, import("react-icons/bi")];
                case 206:
                    BiBriefcaseAlt2 = (_b.sent()).BiBriefcaseAlt2;
                    return [2 /*return*/, BiBriefcaseAlt2];
                case 207: return [4 /*yield*/, import("react-icons/bi")];
                case 208:
                    BiBriefcaseAlt = (_b.sent()).BiBriefcaseAlt;
                    return [2 /*return*/, BiBriefcaseAlt];
                case 209: return [4 /*yield*/, import("react-icons/bi")];
                case 210:
                    BiBriefcase = (_b.sent()).BiBriefcase;
                    return [2 /*return*/, BiBriefcase];
                case 211: return [4 /*yield*/, import("react-icons/bi")];
                case 212:
                    BiBrightnessHalf = (_b.sent()).BiBrightnessHalf;
                    return [2 /*return*/, BiBrightnessHalf];
                case 213: return [4 /*yield*/, import("react-icons/bi")];
                case 214:
                    BiBrightness = (_b.sent()).BiBrightness;
                    return [2 /*return*/, BiBrightness];
                case 215: return [4 /*yield*/, import("react-icons/bi")];
                case 216:
                    BiBroadcast = (_b.sent()).BiBroadcast;
                    return [2 /*return*/, BiBroadcast];
                case 217: return [4 /*yield*/, import("react-icons/bi")];
                case 218:
                    BiBrushAlt = (_b.sent()).BiBrushAlt;
                    return [2 /*return*/, BiBrushAlt];
                case 219: return [4 /*yield*/, import("react-icons/bi")];
                case 220:
                    BiBrush = (_b.sent()).BiBrush;
                    return [2 /*return*/, BiBrush];
                case 221: return [4 /*yield*/, import("react-icons/bi")];
                case 222:
                    BiBugAlt = (_b.sent()).BiBugAlt;
                    return [2 /*return*/, BiBugAlt];
                case 223: return [4 /*yield*/, import("react-icons/bi")];
                case 224:
                    BiBug = (_b.sent()).BiBug;
                    return [2 /*return*/, BiBug];
                case 225: return [4 /*yield*/, import("react-icons/bi")];
                case 226:
                    BiBuildingHouse = (_b.sent()).BiBuildingHouse;
                    return [2 /*return*/, BiBuildingHouse];
                case 227: return [4 /*yield*/, import("react-icons/bi")];
                case 228:
                    BiBuilding = (_b.sent()).BiBuilding;
                    return [2 /*return*/, BiBuilding];
                case 229: return [4 /*yield*/, import("react-icons/bi")];
                case 230:
                    BiBuildings = (_b.sent()).BiBuildings;
                    return [2 /*return*/, BiBuildings];
                case 231: return [4 /*yield*/, import("react-icons/bi")];
                case 232:
                    BiBulb = (_b.sent()).BiBulb;
                    return [2 /*return*/, BiBulb];
                case 233: return [4 /*yield*/, import("react-icons/bi")];
                case 234:
                    BiBullseye = (_b.sent()).BiBullseye;
                    return [2 /*return*/, BiBullseye];
                case 235: return [4 /*yield*/, import("react-icons/bi")];
                case 236:
                    BiBuoy = (_b.sent()).BiBuoy;
                    return [2 /*return*/, BiBuoy];
                case 237: return [4 /*yield*/, import("react-icons/bi")];
                case 238:
                    BiBusSchool = (_b.sent()).BiBusSchool;
                    return [2 /*return*/, BiBusSchool];
                case 239: return [4 /*yield*/, import("react-icons/bi")];
                case 240:
                    BiBus = (_b.sent()).BiBus;
                    return [2 /*return*/, BiBus];
                case 241: return [4 /*yield*/, import("react-icons/bi")];
                case 242:
                    BiCabinet = (_b.sent()).BiCabinet;
                    return [2 /*return*/, BiCabinet];
                case 243: return [4 /*yield*/, import("react-icons/bi")];
                case 244:
                    BiCableCar = (_b.sent()).BiCableCar;
                    return [2 /*return*/, BiCableCar];
                case 245: return [4 /*yield*/, import("react-icons/bi")];
                case 246:
                    BiCake = (_b.sent()).BiCake;
                    return [2 /*return*/, BiCake];
                case 247: return [4 /*yield*/, import("react-icons/bi")];
                case 248:
                    BiCalculator = (_b.sent()).BiCalculator;
                    return [2 /*return*/, BiCalculator];
                case 249: return [4 /*yield*/, import("react-icons/bi")];
                case 250:
                    BiCalendarAlt = (_b.sent()).BiCalendarAlt;
                    return [2 /*return*/, BiCalendarAlt];
                case 251: return [4 /*yield*/, import("react-icons/bi")];
                case 252:
                    BiCalendarCheck = (_b.sent()).BiCalendarCheck;
                    return [2 /*return*/, BiCalendarCheck];
                case 253: return [4 /*yield*/, import("react-icons/bi")];
                case 254:
                    BiCalendarEdit = (_b.sent()).BiCalendarEdit;
                    return [2 /*return*/, BiCalendarEdit];
                case 255: return [4 /*yield*/, import("react-icons/bi")];
                case 256:
                    BiCalendarEvent = (_b.sent()).BiCalendarEvent;
                    return [2 /*return*/, BiCalendarEvent];
                case 257: return [4 /*yield*/, import("react-icons/bi")];
                case 258:
                    BiCalendarExclamation = (_b.sent()).BiCalendarExclamation;
                    return [2 /*return*/, BiCalendarExclamation];
                case 259: return [4 /*yield*/, import("react-icons/bi")];
                case 260:
                    BiCalendarHeart = (_b.sent()).BiCalendarHeart;
                    return [2 /*return*/, BiCalendarHeart];
                case 261: return [4 /*yield*/, import("react-icons/bi")];
                case 262:
                    BiCalendarMinus = (_b.sent()).BiCalendarMinus;
                    return [2 /*return*/, BiCalendarMinus];
                case 263: return [4 /*yield*/, import("react-icons/bi")];
                case 264:
                    BiCalendarPlus = (_b.sent()).BiCalendarPlus;
                    return [2 /*return*/, BiCalendarPlus];
                case 265: return [4 /*yield*/, import("react-icons/bi")];
                case 266:
                    BiCalendarStar = (_b.sent()).BiCalendarStar;
                    return [2 /*return*/, BiCalendarStar];
                case 267: return [4 /*yield*/, import("react-icons/bi")];
                case 268:
                    BiCalendarWeek = (_b.sent()).BiCalendarWeek;
                    return [2 /*return*/, BiCalendarWeek];
                case 269: return [4 /*yield*/, import("react-icons/bi")];
                case 270:
                    BiCalendarX = (_b.sent()).BiCalendarX;
                    return [2 /*return*/, BiCalendarX];
                case 271: return [4 /*yield*/, import("react-icons/bi")];
                case 272:
                    BiCalendar = (_b.sent()).BiCalendar;
                    return [2 /*return*/, BiCalendar];
                case 273: return [4 /*yield*/, import("react-icons/bi")];
                case 274:
                    BiCameraHome = (_b.sent()).BiCameraHome;
                    return [2 /*return*/, BiCameraHome];
                case 275: return [4 /*yield*/, import("react-icons/bi")];
                case 276:
                    BiCameraMovie = (_b.sent()).BiCameraMovie;
                    return [2 /*return*/, BiCameraMovie];
                case 277: return [4 /*yield*/, import("react-icons/bi")];
                case 278:
                    BiCameraOff = (_b.sent()).BiCameraOff;
                    return [2 /*return*/, BiCameraOff];
                case 279: return [4 /*yield*/, import("react-icons/bi")];
                case 280:
                    BiCamera = (_b.sent()).BiCamera;
                    return [2 /*return*/, BiCamera];
                case 281: return [4 /*yield*/, import("react-icons/bi")];
                case 282:
                    BiCandles = (_b.sent()).BiCandles;
                    return [2 /*return*/, BiCandles];
                case 283: return [4 /*yield*/, import("react-icons/bi")];
                case 284:
                    BiCapsule = (_b.sent()).BiCapsule;
                    return [2 /*return*/, BiCapsule];
                case 285: return [4 /*yield*/, import("react-icons/bi")];
                case 286:
                    BiCaptions = (_b.sent()).BiCaptions;
                    return [2 /*return*/, BiCaptions];
                case 287: return [4 /*yield*/, import("react-icons/bi")];
                case 288:
                    BiCar = (_b.sent()).BiCar;
                    return [2 /*return*/, BiCar];
                case 289: return [4 /*yield*/, import("react-icons/bi")];
                case 290:
                    BiCard = (_b.sent()).BiCard;
                    return [2 /*return*/, BiCard];
                case 291: return [4 /*yield*/, import("react-icons/bi")];
                case 292:
                    BiCaretDownCircle = (_b.sent()).BiCaretDownCircle;
                    return [2 /*return*/, BiCaretDownCircle];
                case 293: return [4 /*yield*/, import("react-icons/bi")];
                case 294:
                    BiCaretDownSquare = (_b.sent()).BiCaretDownSquare;
                    return [2 /*return*/, BiCaretDownSquare];
                case 295: return [4 /*yield*/, import("react-icons/bi")];
                case 296:
                    BiCaretDown = (_b.sent()).BiCaretDown;
                    return [2 /*return*/, BiCaretDown];
                case 297: return [4 /*yield*/, import("react-icons/bi")];
                case 298:
                    BiCaretLeftCircle = (_b.sent()).BiCaretLeftCircle;
                    return [2 /*return*/, BiCaretLeftCircle];
                case 299: return [4 /*yield*/, import("react-icons/bi")];
                case 300:
                    BiCaretLeftSquare = (_b.sent()).BiCaretLeftSquare;
                    return [2 /*return*/, BiCaretLeftSquare];
                case 301: return [4 /*yield*/, import("react-icons/bi")];
                case 302:
                    BiCaretLeft = (_b.sent()).BiCaretLeft;
                    return [2 /*return*/, BiCaretLeft];
                case 303: return [4 /*yield*/, import("react-icons/bi")];
                case 304:
                    BiCaretRightCircle = (_b.sent()).BiCaretRightCircle;
                    return [2 /*return*/, BiCaretRightCircle];
                case 305: return [4 /*yield*/, import("react-icons/bi")];
                case 306:
                    BiCaretRightSquare = (_b.sent()).BiCaretRightSquare;
                    return [2 /*return*/, BiCaretRightSquare];
                case 307: return [4 /*yield*/, import("react-icons/bi")];
                case 308:
                    BiCaretRight = (_b.sent()).BiCaretRight;
                    return [2 /*return*/, BiCaretRight];
                case 309: return [4 /*yield*/, import("react-icons/bi")];
                case 310:
                    BiCaretUpCircle = (_b.sent()).BiCaretUpCircle;
                    return [2 /*return*/, BiCaretUpCircle];
                case 311: return [4 /*yield*/, import("react-icons/bi")];
                case 312:
                    BiCaretUpSquare = (_b.sent()).BiCaretUpSquare;
                    return [2 /*return*/, BiCaretUpSquare];
                case 313: return [4 /*yield*/, import("react-icons/bi")];
                case 314:
                    BiCaretUp = (_b.sent()).BiCaretUp;
                    return [2 /*return*/, BiCaretUp];
                case 315: return [4 /*yield*/, import("react-icons/bi")];
                case 316:
                    BiCarousel = (_b.sent()).BiCarousel;
                    return [2 /*return*/, BiCarousel];
                case 317: return [4 /*yield*/, import("react-icons/bi")];
                case 318:
                    BiCartAdd = (_b.sent()).BiCartAdd;
                    return [2 /*return*/, BiCartAdd];
                case 319: return [4 /*yield*/, import("react-icons/bi")];
                case 320:
                    BiCartAlt = (_b.sent()).BiCartAlt;
                    return [2 /*return*/, BiCartAlt];
                case 321: return [4 /*yield*/, import("react-icons/bi")];
                case 322:
                    BiCartDownload = (_b.sent()).BiCartDownload;
                    return [2 /*return*/, BiCartDownload];
                case 323: return [4 /*yield*/, import("react-icons/bi")];
                case 324:
                    BiCart = (_b.sent()).BiCart;
                    return [2 /*return*/, BiCart];
                case 325: return [4 /*yield*/, import("react-icons/bi")];
                case 326:
                    BiCast = (_b.sent()).BiCast;
                    return [2 /*return*/, BiCast];
                case 327: return [4 /*yield*/, import("react-icons/bi")];
                case 328:
                    BiCategoryAlt = (_b.sent()).BiCategoryAlt;
                    return [2 /*return*/, BiCategoryAlt];
                case 329: return [4 /*yield*/, import("react-icons/bi")];
                case 330:
                    BiCategory = (_b.sent()).BiCategory;
                    return [2 /*return*/, BiCategory];
                case 331: return [4 /*yield*/, import("react-icons/bi")];
                case 332:
                    BiCctv = (_b.sent()).BiCctv;
                    return [2 /*return*/, BiCctv];
                case 333: return [4 /*yield*/, import("react-icons/bi")];
                case 334:
                    BiCertification = (_b.sent()).BiCertification;
                    return [2 /*return*/, BiCertification];
                case 335: return [4 /*yield*/, import("react-icons/bi")];
                case 336:
                    BiChair = (_b.sent()).BiChair;
                    return [2 /*return*/, BiChair];
                case 337: return [4 /*yield*/, import("react-icons/bi")];
                case 338:
                    BiChalkboard = (_b.sent()).BiChalkboard;
                    return [2 /*return*/, BiChalkboard];
                case 339: return [4 /*yield*/, import("react-icons/bi")];
                case 340:
                    BiChart = (_b.sent()).BiChart;
                    return [2 /*return*/, BiChart];
                case 341: return [4 /*yield*/, import("react-icons/bi")];
                case 342:
                    BiChat = (_b.sent()).BiChat;
                    return [2 /*return*/, BiChat];
                case 343: return [4 /*yield*/, import("react-icons/bi")];
                case 344:
                    BiCheckCircle = (_b.sent()).BiCheckCircle;
                    return [2 /*return*/, BiCheckCircle];
                case 345: return [4 /*yield*/, import("react-icons/bi")];
                case 346:
                    BiCheckDouble = (_b.sent()).BiCheckDouble;
                    return [2 /*return*/, BiCheckDouble];
                case 347: return [4 /*yield*/, import("react-icons/bi")];
                case 348:
                    BiCheckShield = (_b.sent()).BiCheckShield;
                    return [2 /*return*/, BiCheckShield];
                case 349: return [4 /*yield*/, import("react-icons/bi")];
                case 350:
                    BiCheckSquare = (_b.sent()).BiCheckSquare;
                    return [2 /*return*/, BiCheckSquare];
                case 351: return [4 /*yield*/, import("react-icons/bi")];
                case 352:
                    BiCheck = (_b.sent()).BiCheck;
                    return [2 /*return*/, BiCheck];
                case 353: return [4 /*yield*/, import("react-icons/bi")];
                case 354:
                    BiCheckboxChecked = (_b.sent()).BiCheckboxChecked;
                    return [2 /*return*/, BiCheckboxChecked];
                case 355: return [4 /*yield*/, import("react-icons/bi")];
                case 356:
                    BiCheckboxMinus = (_b.sent()).BiCheckboxMinus;
                    return [2 /*return*/, BiCheckboxMinus];
                case 357: return [4 /*yield*/, import("react-icons/bi")];
                case 358:
                    BiCheckboxSquare = (_b.sent()).BiCheckboxSquare;
                    return [2 /*return*/, BiCheckboxSquare];
                case 359: return [4 /*yield*/, import("react-icons/bi")];
                case 360:
                    BiCheckbox = (_b.sent()).BiCheckbox;
                    return [2 /*return*/, BiCheckbox];
                case 361: return [4 /*yield*/, import("react-icons/bi")];
                case 362:
                    BiCheese = (_b.sent()).BiCheese;
                    return [2 /*return*/, BiCheese];
                case 363: return [4 /*yield*/, import("react-icons/bi")];
                case 364:
                    BiChevronDownCircle = (_b.sent()).BiChevronDownCircle;
                    return [2 /*return*/, BiChevronDownCircle];
                case 365: return [4 /*yield*/, import("react-icons/bi")];
                case 366:
                    BiChevronDownSquare = (_b.sent()).BiChevronDownSquare;
                    return [2 /*return*/, BiChevronDownSquare];
                case 367: return [4 /*yield*/, import("react-icons/bi")];
                case 368:
                    BiChevronDown = (_b.sent()).BiChevronDown;
                    return [2 /*return*/, BiChevronDown];
                case 369: return [4 /*yield*/, import("react-icons/bi")];
                case 370:
                    BiChevronLeftCircle = (_b.sent()).BiChevronLeftCircle;
                    return [2 /*return*/, BiChevronLeftCircle];
                case 371: return [4 /*yield*/, import("react-icons/bi")];
                case 372:
                    BiChevronLeftSquare = (_b.sent()).BiChevronLeftSquare;
                    return [2 /*return*/, BiChevronLeftSquare];
                case 373: return [4 /*yield*/, import("react-icons/bi")];
                case 374:
                    BiChevronLeft = (_b.sent()).BiChevronLeft;
                    return [2 /*return*/, BiChevronLeft];
                case 375: return [4 /*yield*/, import("react-icons/bi")];
                case 376:
                    BiChevronRightCircle = (_b.sent()).BiChevronRightCircle;
                    return [2 /*return*/, BiChevronRightCircle];
                case 377: return [4 /*yield*/, import("react-icons/bi")];
                case 378:
                    BiChevronRightSquare = (_b.sent()).BiChevronRightSquare;
                    return [2 /*return*/, BiChevronRightSquare];
                case 379: return [4 /*yield*/, import("react-icons/bi")];
                case 380:
                    BiChevronRight = (_b.sent()).BiChevronRight;
                    return [2 /*return*/, BiChevronRight];
                case 381: return [4 /*yield*/, import("react-icons/bi")];
                case 382:
                    BiChevronUpCircle = (_b.sent()).BiChevronUpCircle;
                    return [2 /*return*/, BiChevronUpCircle];
                case 383: return [4 /*yield*/, import("react-icons/bi")];
                case 384:
                    BiChevronUpSquare = (_b.sent()).BiChevronUpSquare;
                    return [2 /*return*/, BiChevronUpSquare];
                case 385: return [4 /*yield*/, import("react-icons/bi")];
                case 386:
                    BiChevronUp = (_b.sent()).BiChevronUp;
                    return [2 /*return*/, BiChevronUp];
                case 387: return [4 /*yield*/, import("react-icons/bi")];
                case 388:
                    BiChevronsDown = (_b.sent()).BiChevronsDown;
                    return [2 /*return*/, BiChevronsDown];
                case 389: return [4 /*yield*/, import("react-icons/bi")];
                case 390:
                    BiChevronsLeft = (_b.sent()).BiChevronsLeft;
                    return [2 /*return*/, BiChevronsLeft];
                case 391: return [4 /*yield*/, import("react-icons/bi")];
                case 392:
                    BiChevronsRight = (_b.sent()).BiChevronsRight;
                    return [2 /*return*/, BiChevronsRight];
                case 393: return [4 /*yield*/, import("react-icons/bi")];
                case 394:
                    BiChevronsUp = (_b.sent()).BiChevronsUp;
                    return [2 /*return*/, BiChevronsUp];
                case 395: return [4 /*yield*/, import("react-icons/bi")];
                case 396:
                    BiChild = (_b.sent()).BiChild;
                    return [2 /*return*/, BiChild];
                case 397: return [4 /*yield*/, import("react-icons/bi")];
                case 398:
                    BiChip = (_b.sent()).BiChip;
                    return [2 /*return*/, BiChip];
                case 399: return [4 /*yield*/, import("react-icons/bi")];
                case 400:
                    BiChurch = (_b.sent()).BiChurch;
                    return [2 /*return*/, BiChurch];
                case 401: return [4 /*yield*/, import("react-icons/bi")];
                case 402:
                    BiCircleHalf = (_b.sent()).BiCircleHalf;
                    return [2 /*return*/, BiCircleHalf];
                case 403: return [4 /*yield*/, import("react-icons/bi")];
                case 404:
                    BiCircleQuarter = (_b.sent()).BiCircleQuarter;
                    return [2 /*return*/, BiCircleQuarter];
                case 405: return [4 /*yield*/, import("react-icons/bi")];
                case 406:
                    BiCircleThreeQuarter = (_b.sent()).BiCircleThreeQuarter;
                    return [2 /*return*/, BiCircleThreeQuarter];
                case 407: return [4 /*yield*/, import("react-icons/bi")];
                case 408:
                    BiCircle = (_b.sent()).BiCircle;
                    return [2 /*return*/, BiCircle];
                case 409: return [4 /*yield*/, import("react-icons/bi")];
                case 410:
                    BiClinic = (_b.sent()).BiClinic;
                    return [2 /*return*/, BiClinic];
                case 411: return [4 /*yield*/, import("react-icons/bi")];
                case 412:
                    BiClipboard = (_b.sent()).BiClipboard;
                    return [2 /*return*/, BiClipboard];
                case 413: return [4 /*yield*/, import("react-icons/bi")];
                case 414:
                    BiCloset = (_b.sent()).BiCloset;
                    return [2 /*return*/, BiCloset];
                case 415: return [4 /*yield*/, import("react-icons/bi")];
                case 416:
                    BiCloudDownload = (_b.sent()).BiCloudDownload;
                    return [2 /*return*/, BiCloudDownload];
                case 417: return [4 /*yield*/, import("react-icons/bi")];
                case 418:
                    BiCloudDrizzle = (_b.sent()).BiCloudDrizzle;
                    return [2 /*return*/, BiCloudDrizzle];
                case 419: return [4 /*yield*/, import("react-icons/bi")];
                case 420:
                    BiCloudLightRain = (_b.sent()).BiCloudLightRain;
                    return [2 /*return*/, BiCloudLightRain];
                case 421: return [4 /*yield*/, import("react-icons/bi")];
                case 422:
                    BiCloudLightning = (_b.sent()).BiCloudLightning;
                    return [2 /*return*/, BiCloudLightning];
                case 423: return [4 /*yield*/, import("react-icons/bi")];
                case 424:
                    BiCloudRain = (_b.sent()).BiCloudRain;
                    return [2 /*return*/, BiCloudRain];
                case 425: return [4 /*yield*/, import("react-icons/bi")];
                case 426:
                    BiCloudSnow = (_b.sent()).BiCloudSnow;
                    return [2 /*return*/, BiCloudSnow];
                case 427: return [4 /*yield*/, import("react-icons/bi")];
                case 428:
                    BiCloudUpload = (_b.sent()).BiCloudUpload;
                    return [2 /*return*/, BiCloudUpload];
                case 429: return [4 /*yield*/, import("react-icons/bi")];
                case 430:
                    BiCloud = (_b.sent()).BiCloud;
                    return [2 /*return*/, BiCloud];
                case 431: return [4 /*yield*/, import("react-icons/bi")];
                case 432:
                    BiCodeAlt = (_b.sent()).BiCodeAlt;
                    return [2 /*return*/, BiCodeAlt];
                case 433: return [4 /*yield*/, import("react-icons/bi")];
                case 434:
                    BiCodeBlock = (_b.sent()).BiCodeBlock;
                    return [2 /*return*/, BiCodeBlock];
                case 435: return [4 /*yield*/, import("react-icons/bi")];
                case 436:
                    BiCodeCurly = (_b.sent()).BiCodeCurly;
                    return [2 /*return*/, BiCodeCurly];
                case 437: return [4 /*yield*/, import("react-icons/bi")];
                case 438:
                    BiCode = (_b.sent()).BiCode;
                    return [2 /*return*/, BiCode];
                case 439: return [4 /*yield*/, import("react-icons/bi")];
                case 440:
                    BiCoffeeTogo = (_b.sent()).BiCoffeeTogo;
                    return [2 /*return*/, BiCoffeeTogo];
                case 441: return [4 /*yield*/, import("react-icons/bi")];
                case 442:
                    BiCoffee = (_b.sent()).BiCoffee;
                    return [2 /*return*/, BiCoffee];
                case 443: return [4 /*yield*/, import("react-icons/bi")];
                case 444:
                    BiCog = (_b.sent()).BiCog;
                    return [2 /*return*/, BiCog];
                case 445: return [4 /*yield*/, import("react-icons/bi")];
                case 446:
                    BiCoinStack = (_b.sent()).BiCoinStack;
                    return [2 /*return*/, BiCoinStack];
                case 447: return [4 /*yield*/, import("react-icons/bi")];
                case 448:
                    BiCoin = (_b.sent()).BiCoin;
                    return [2 /*return*/, BiCoin];
                case 449: return [4 /*yield*/, import("react-icons/bi")];
                case 450:
                    BiCollapseAlt = (_b.sent()).BiCollapseAlt;
                    return [2 /*return*/, BiCollapseAlt];
                case 451: return [4 /*yield*/, import("react-icons/bi")];
                case 452:
                    BiCollapseHorizontal = (_b.sent()).BiCollapseHorizontal;
                    return [2 /*return*/, BiCollapseHorizontal];
                case 453: return [4 /*yield*/, import("react-icons/bi")];
                case 454:
                    BiCollapseVertical = (_b.sent()).BiCollapseVertical;
                    return [2 /*return*/, BiCollapseVertical];
                case 455: return [4 /*yield*/, import("react-icons/bi")];
                case 456:
                    BiCollapse = (_b.sent()).BiCollapse;
                    return [2 /*return*/, BiCollapse];
                case 457: return [4 /*yield*/, import("react-icons/bi")];
                case 458:
                    BiCollection = (_b.sent()).BiCollection;
                    return [2 /*return*/, BiCollection];
                case 459: return [4 /*yield*/, import("react-icons/bi")];
                case 460:
                    BiColorFill = (_b.sent()).BiColorFill;
                    return [2 /*return*/, BiColorFill];
                case 461: return [4 /*yield*/, import("react-icons/bi")];
                case 462:
                    BiColor = (_b.sent()).BiColor;
                    return [2 /*return*/, BiColor];
                case 463: return [4 /*yield*/, import("react-icons/bi")];
                case 464:
                    BiColumns = (_b.sent()).BiColumns;
                    return [2 /*return*/, BiColumns];
                case 465: return [4 /*yield*/, import("react-icons/bi")];
                case 466:
                    BiCommand = (_b.sent()).BiCommand;
                    return [2 /*return*/, BiCommand];
                case 467: return [4 /*yield*/, import("react-icons/bi")];
                case 468:
                    BiCommentAdd = (_b.sent()).BiCommentAdd;
                    return [2 /*return*/, BiCommentAdd];
                case 469: return [4 /*yield*/, import("react-icons/bi")];
                case 470:
                    BiCommentCheck = (_b.sent()).BiCommentCheck;
                    return [2 /*return*/, BiCommentCheck];
                case 471: return [4 /*yield*/, import("react-icons/bi")];
                case 472:
                    BiCommentDetail = (_b.sent()).BiCommentDetail;
                    return [2 /*return*/, BiCommentDetail];
                case 473: return [4 /*yield*/, import("react-icons/bi")];
                case 474:
                    BiCommentDots = (_b.sent()).BiCommentDots;
                    return [2 /*return*/, BiCommentDots];
                case 475: return [4 /*yield*/, import("react-icons/bi")];
                case 476:
                    BiCommentEdit = (_b.sent()).BiCommentEdit;
                    return [2 /*return*/, BiCommentEdit];
                case 477: return [4 /*yield*/, import("react-icons/bi")];
                case 478:
                    BiCommentError = (_b.sent()).BiCommentError;
                    return [2 /*return*/, BiCommentError];
                case 479: return [4 /*yield*/, import("react-icons/bi")];
                case 480:
                    BiCommentMinus = (_b.sent()).BiCommentMinus;
                    return [2 /*return*/, BiCommentMinus];
                case 481: return [4 /*yield*/, import("react-icons/bi")];
                case 482:
                    BiCommentX = (_b.sent()).BiCommentX;
                    return [2 /*return*/, BiCommentX];
                case 483: return [4 /*yield*/, import("react-icons/bi")];
                case 484:
                    BiComment = (_b.sent()).BiComment;
                    return [2 /*return*/, BiComment];
                case 485: return [4 /*yield*/, import("react-icons/bi")];
                case 486:
                    BiCompass = (_b.sent()).BiCompass;
                    return [2 /*return*/, BiCompass];
                case 487: return [4 /*yield*/, import("react-icons/bi")];
                case 488:
                    BiConfused = (_b.sent()).BiConfused;
                    return [2 /*return*/, BiConfused];
                case 489: return [4 /*yield*/, import("react-icons/bi")];
                case 490:
                    BiConversation = (_b.sent()).BiConversation;
                    return [2 /*return*/, BiConversation];
                case 491: return [4 /*yield*/, import("react-icons/bi")];
                case 492:
                    BiCookie = (_b.sent()).BiCookie;
                    return [2 /*return*/, BiCookie];
                case 493: return [4 /*yield*/, import("react-icons/bi")];
                case 494:
                    BiCool = (_b.sent()).BiCool;
                    return [2 /*return*/, BiCool];
                case 495: return [4 /*yield*/, import("react-icons/bi")];
                case 496:
                    BiCopyAlt = (_b.sent()).BiCopyAlt;
                    return [2 /*return*/, BiCopyAlt];
                case 497: return [4 /*yield*/, import("react-icons/bi")];
                case 498:
                    BiCopy = (_b.sent()).BiCopy;
                    return [2 /*return*/, BiCopy];
                case 499: return [4 /*yield*/, import("react-icons/bi")];
                case 500:
                    BiCopyright = (_b.sent()).BiCopyright;
                    return [2 /*return*/, BiCopyright];
                case 501: return [4 /*yield*/, import("react-icons/bi")];
                case 502:
                    BiCreditCardAlt = (_b.sent()).BiCreditCardAlt;
                    return [2 /*return*/, BiCreditCardAlt];
                case 503: return [4 /*yield*/, import("react-icons/bi")];
                case 504:
                    BiCreditCardFront = (_b.sent()).BiCreditCardFront;
                    return [2 /*return*/, BiCreditCardFront];
                case 505: return [4 /*yield*/, import("react-icons/bi")];
                case 506:
                    BiCreditCard = (_b.sent()).BiCreditCard;
                    return [2 /*return*/, BiCreditCard];
                case 507: return [4 /*yield*/, import("react-icons/bi")];
                case 508:
                    BiCricketBall = (_b.sent()).BiCricketBall;
                    return [2 /*return*/, BiCricketBall];
                case 509: return [4 /*yield*/, import("react-icons/bi")];
                case 510:
                    BiCrop = (_b.sent()).BiCrop;
                    return [2 /*return*/, BiCrop];
                case 511: return [4 /*yield*/, import("react-icons/bi")];
                case 512:
                    BiCross = (_b.sent()).BiCross;
                    return [2 /*return*/, BiCross];
                case 513: return [4 /*yield*/, import("react-icons/bi")];
                case 514:
                    BiCrosshair = (_b.sent()).BiCrosshair;
                    return [2 /*return*/, BiCrosshair];
                case 515: return [4 /*yield*/, import("react-icons/bi")];
                case 516:
                    BiCrown = (_b.sent()).BiCrown;
                    return [2 /*return*/, BiCrown];
                case 517: return [4 /*yield*/, import("react-icons/bi")];
                case 518:
                    BiCubeAlt = (_b.sent()).BiCubeAlt;
                    return [2 /*return*/, BiCubeAlt];
                case 519: return [4 /*yield*/, import("react-icons/bi")];
                case 520:
                    BiCube = (_b.sent()).BiCube;
                    return [2 /*return*/, BiCube];
                case 521: return [4 /*yield*/, import("react-icons/bi")];
                case 522:
                    BiCuboid = (_b.sent()).BiCuboid;
                    return [2 /*return*/, BiCuboid];
                case 523: return [4 /*yield*/, import("react-icons/bi")];
                case 524:
                    BiCurrentLocation = (_b.sent()).BiCurrentLocation;
                    return [2 /*return*/, BiCurrentLocation];
                case 525: return [4 /*yield*/, import("react-icons/bi")];
                case 526:
                    BiCustomize = (_b.sent()).BiCustomize;
                    return [2 /*return*/, BiCustomize];
                case 527: return [4 /*yield*/, import("react-icons/bi")];
                case 528:
                    BiCut = (_b.sent()).BiCut;
                    return [2 /*return*/, BiCut];
                case 529: return [4 /*yield*/, import("react-icons/bi")];
                case 530:
                    BiCycling = (_b.sent()).BiCycling;
                    return [2 /*return*/, BiCycling];
                case 531: return [4 /*yield*/, import("react-icons/bi")];
                case 532:
                    BiCylinder = (_b.sent()).BiCylinder;
                    return [2 /*return*/, BiCylinder];
                case 533: return [4 /*yield*/, import("react-icons/bi")];
                case 534:
                    BiData = (_b.sent()).BiData;
                    return [2 /*return*/, BiData];
                case 535: return [4 /*yield*/, import("react-icons/bi")];
                case 536:
                    BiDesktop = (_b.sent()).BiDesktop;
                    return [2 /*return*/, BiDesktop];
                case 537: return [4 /*yield*/, import("react-icons/bi")];
                case 538:
                    BiDetail = (_b.sent()).BiDetail;
                    return [2 /*return*/, BiDetail];
                case 539: return [4 /*yield*/, import("react-icons/bi")];
                case 540:
                    BiDevices = (_b.sent()).BiDevices;
                    return [2 /*return*/, BiDevices];
                case 541: return [4 /*yield*/, import("react-icons/bi")];
                case 542:
                    BiDialpadAlt = (_b.sent()).BiDialpadAlt;
                    return [2 /*return*/, BiDialpadAlt];
                case 543: return [4 /*yield*/, import("react-icons/bi")];
                case 544:
                    BiDialpad = (_b.sent()).BiDialpad;
                    return [2 /*return*/, BiDialpad];
                case 545: return [4 /*yield*/, import("react-icons/bi")];
                case 546:
                    BiDiamond = (_b.sent()).BiDiamond;
                    return [2 /*return*/, BiDiamond];
                case 547: return [4 /*yield*/, import("react-icons/bi")];
                case 548:
                    BiDice1 = (_b.sent()).BiDice1;
                    return [2 /*return*/, BiDice1];
                case 549: return [4 /*yield*/, import("react-icons/bi")];
                case 550:
                    BiDice2 = (_b.sent()).BiDice2;
                    return [2 /*return*/, BiDice2];
                case 551: return [4 /*yield*/, import("react-icons/bi")];
                case 552:
                    BiDice3 = (_b.sent()).BiDice3;
                    return [2 /*return*/, BiDice3];
                case 553: return [4 /*yield*/, import("react-icons/bi")];
                case 554:
                    BiDice4 = (_b.sent()).BiDice4;
                    return [2 /*return*/, BiDice4];
                case 555: return [4 /*yield*/, import("react-icons/bi")];
                case 556:
                    BiDice5 = (_b.sent()).BiDice5;
                    return [2 /*return*/, BiDice5];
                case 557: return [4 /*yield*/, import("react-icons/bi")];
                case 558:
                    BiDice6 = (_b.sent()).BiDice6;
                    return [2 /*return*/, BiDice6];
                case 559: return [4 /*yield*/, import("react-icons/bi")];
                case 560:
                    BiDirections = (_b.sent()).BiDirections;
                    return [2 /*return*/, BiDirections];
                case 561: return [4 /*yield*/, import("react-icons/bi")];
                case 562:
                    BiDisc = (_b.sent()).BiDisc;
                    return [2 /*return*/, BiDisc];
                case 563: return [4 /*yield*/, import("react-icons/bi")];
                case 564:
                    BiDish = (_b.sent()).BiDish;
                    return [2 /*return*/, BiDish];
                case 565: return [4 /*yield*/, import("react-icons/bi")];
                case 566:
                    BiDislike = (_b.sent()).BiDislike;
                    return [2 /*return*/, BiDislike];
                case 567: return [4 /*yield*/, import("react-icons/bi")];
                case 568:
                    BiDizzy = (_b.sent()).BiDizzy;
                    return [2 /*return*/, BiDizzy];
                case 569: return [4 /*yield*/, import("react-icons/bi")];
                case 570:
                    BiDna = (_b.sent()).BiDna;
                    return [2 /*return*/, BiDna];
                case 571: return [4 /*yield*/, import("react-icons/bi")];
                case 572:
                    BiDockBottom = (_b.sent()).BiDockBottom;
                    return [2 /*return*/, BiDockBottom];
                case 573: return [4 /*yield*/, import("react-icons/bi")];
                case 574:
                    BiDockLeft = (_b.sent()).BiDockLeft;
                    return [2 /*return*/, BiDockLeft];
                case 575: return [4 /*yield*/, import("react-icons/bi")];
                case 576:
                    BiDockRight = (_b.sent()).BiDockRight;
                    return [2 /*return*/, BiDockRight];
                case 577: return [4 /*yield*/, import("react-icons/bi")];
                case 578:
                    BiDockTop = (_b.sent()).BiDockTop;
                    return [2 /*return*/, BiDockTop];
                case 579: return [4 /*yield*/, import("react-icons/bi")];
                case 580:
                    BiDollarCircle = (_b.sent()).BiDollarCircle;
                    return [2 /*return*/, BiDollarCircle];
                case 581: return [4 /*yield*/, import("react-icons/bi")];
                case 582:
                    BiDollar = (_b.sent()).BiDollar;
                    return [2 /*return*/, BiDollar];
                case 583: return [4 /*yield*/, import("react-icons/bi")];
                case 584:
                    BiDonateBlood = (_b.sent()).BiDonateBlood;
                    return [2 /*return*/, BiDonateBlood];
                case 585: return [4 /*yield*/, import("react-icons/bi")];
                case 586:
                    BiDonateHeart = (_b.sent()).BiDonateHeart;
                    return [2 /*return*/, BiDonateHeart];
                case 587: return [4 /*yield*/, import("react-icons/bi")];
                case 588:
                    BiDoorOpen = (_b.sent()).BiDoorOpen;
                    return [2 /*return*/, BiDoorOpen];
                case 589: return [4 /*yield*/, import("react-icons/bi")];
                case 590:
                    BiDotsHorizontalRounded = (_b.sent()).BiDotsHorizontalRounded;
                    return [2 /*return*/, BiDotsHorizontalRounded];
                case 591: return [4 /*yield*/, import("react-icons/bi")];
                case 592:
                    BiDotsHorizontal = (_b.sent()).BiDotsHorizontal;
                    return [2 /*return*/, BiDotsHorizontal];
                case 593: return [4 /*yield*/, import("react-icons/bi")];
                case 594:
                    BiDotsVerticalRounded = (_b.sent()).BiDotsVerticalRounded;
                    return [2 /*return*/, BiDotsVerticalRounded];
                case 595: return [4 /*yield*/, import("react-icons/bi")];
                case 596:
                    BiDotsVertical = (_b.sent()).BiDotsVertical;
                    return [2 /*return*/, BiDotsVertical];
                case 597: return [4 /*yield*/, import("react-icons/bi")];
                case 598:
                    BiDoughnutChart = (_b.sent()).BiDoughnutChart;
                    return [2 /*return*/, BiDoughnutChart];
                case 599: return [4 /*yield*/, import("react-icons/bi")];
                case 600:
                    BiDownArrowAlt = (_b.sent()).BiDownArrowAlt;
                    return [2 /*return*/, BiDownArrowAlt];
                case 601: return [4 /*yield*/, import("react-icons/bi")];
                case 602:
                    BiDownArrowCircle = (_b.sent()).BiDownArrowCircle;
                    return [2 /*return*/, BiDownArrowCircle];
                case 603: return [4 /*yield*/, import("react-icons/bi")];
                case 604:
                    BiDownArrow = (_b.sent()).BiDownArrow;
                    return [2 /*return*/, BiDownArrow];
                case 605: return [4 /*yield*/, import("react-icons/bi")];
                case 606:
                    BiDownload = (_b.sent()).BiDownload;
                    return [2 /*return*/, BiDownload];
                case 607: return [4 /*yield*/, import("react-icons/bi")];
                case 608:
                    BiDownvote = (_b.sent()).BiDownvote;
                    return [2 /*return*/, BiDownvote];
                case 609: return [4 /*yield*/, import("react-icons/bi")];
                case 610:
                    BiDrink = (_b.sent()).BiDrink;
                    return [2 /*return*/, BiDrink];
                case 611: return [4 /*yield*/, import("react-icons/bi")];
                case 612:
                    BiDroplet = (_b.sent()).BiDroplet;
                    return [2 /*return*/, BiDroplet];
                case 613: return [4 /*yield*/, import("react-icons/bi")];
                case 614:
                    BiDumbbell = (_b.sent()).BiDumbbell;
                    return [2 /*return*/, BiDumbbell];
                case 615: return [4 /*yield*/, import("react-icons/bi")];
                case 616:
                    BiDuplicate = (_b.sent()).BiDuplicate;
                    return [2 /*return*/, BiDuplicate];
                case 617: return [4 /*yield*/, import("react-icons/bi")];
                case 618:
                    BiEditAlt = (_b.sent()).BiEditAlt;
                    return [2 /*return*/, BiEditAlt];
                case 619: return [4 /*yield*/, import("react-icons/bi")];
                case 620:
                    BiEdit = (_b.sent()).BiEdit;
                    return [2 /*return*/, BiEdit];
                case 621: return [4 /*yield*/, import("react-icons/bi")];
                case 622:
                    BiEnvelopeOpen = (_b.sent()).BiEnvelopeOpen;
                    return [2 /*return*/, BiEnvelopeOpen];
                case 623: return [4 /*yield*/, import("react-icons/bi")];
                case 624:
                    BiEnvelope = (_b.sent()).BiEnvelope;
                    return [2 /*return*/, BiEnvelope];
                case 625: return [4 /*yield*/, import("react-icons/bi")];
                case 626:
                    BiEqualizer = (_b.sent()).BiEqualizer;
                    return [2 /*return*/, BiEqualizer];
                case 627: return [4 /*yield*/, import("react-icons/bi")];
                case 628:
                    BiEraser = (_b.sent()).BiEraser;
                    return [2 /*return*/, BiEraser];
                case 629: return [4 /*yield*/, import("react-icons/bi")];
                case 630:
                    BiErrorAlt = (_b.sent()).BiErrorAlt;
                    return [2 /*return*/, BiErrorAlt];
                case 631: return [4 /*yield*/, import("react-icons/bi")];
                case 632:
                    BiErrorCircle = (_b.sent()).BiErrorCircle;
                    return [2 /*return*/, BiErrorCircle];
                case 633: return [4 /*yield*/, import("react-icons/bi")];
                case 634:
                    BiError = (_b.sent()).BiError;
                    return [2 /*return*/, BiError];
                case 635: return [4 /*yield*/, import("react-icons/bi")];
                case 636:
                    BiEuro = (_b.sent()).BiEuro;
                    return [2 /*return*/, BiEuro];
                case 637: return [4 /*yield*/, import("react-icons/bi")];
                case 638:
                    BiExclude = (_b.sent()).BiExclude;
                    return [2 /*return*/, BiExclude];
                case 639: return [4 /*yield*/, import("react-icons/bi")];
                case 640:
                    BiExitFullscreen = (_b.sent()).BiExitFullscreen;
                    return [2 /*return*/, BiExitFullscreen];
                case 641: return [4 /*yield*/, import("react-icons/bi")];
                case 642:
                    BiExit = (_b.sent()).BiExit;
                    return [2 /*return*/, BiExit];
                case 643: return [4 /*yield*/, import("react-icons/bi")];
                case 644:
                    BiExpandAlt = (_b.sent()).BiExpandAlt;
                    return [2 /*return*/, BiExpandAlt];
                case 645: return [4 /*yield*/, import("react-icons/bi")];
                case 646:
                    BiExpandHorizontal = (_b.sent()).BiExpandHorizontal;
                    return [2 /*return*/, BiExpandHorizontal];
                case 647: return [4 /*yield*/, import("react-icons/bi")];
                case 648:
                    BiExpandVertical = (_b.sent()).BiExpandVertical;
                    return [2 /*return*/, BiExpandVertical];
                case 649: return [4 /*yield*/, import("react-icons/bi")];
                case 650:
                    BiExpand = (_b.sent()).BiExpand;
                    return [2 /*return*/, BiExpand];
                case 651: return [4 /*yield*/, import("react-icons/bi")];
                case 652:
                    BiExport = (_b.sent()).BiExport;
                    return [2 /*return*/, BiExport];
                case 653: return [4 /*yield*/, import("react-icons/bi")];
                case 654:
                    BiExtension = (_b.sent()).BiExtension;
                    return [2 /*return*/, BiExtension];
                case 655: return [4 /*yield*/, import("react-icons/bi")];
                case 656:
                    BiFace = (_b.sent()).BiFace;
                    return [2 /*return*/, BiFace];
                case 657: return [4 /*yield*/, import("react-icons/bi")];
                case 658:
                    BiFastForwardCircle = (_b.sent()).BiFastForwardCircle;
                    return [2 /*return*/, BiFastForwardCircle];
                case 659: return [4 /*yield*/, import("react-icons/bi")];
                case 660:
                    BiFastForward = (_b.sent()).BiFastForward;
                    return [2 /*return*/, BiFastForward];
                case 661: return [4 /*yield*/, import("react-icons/bi")];
                case 662:
                    BiFemaleSign = (_b.sent()).BiFemaleSign;
                    return [2 /*return*/, BiFemaleSign];
                case 663: return [4 /*yield*/, import("react-icons/bi")];
                case 664:
                    BiFemale = (_b.sent()).BiFemale;
                    return [2 /*return*/, BiFemale];
                case 665: return [4 /*yield*/, import("react-icons/bi")];
                case 666:
                    BiFileBlank = (_b.sent()).BiFileBlank;
                    return [2 /*return*/, BiFileBlank];
                case 667: return [4 /*yield*/, import("react-icons/bi")];
                case 668:
                    BiFileFind = (_b.sent()).BiFileFind;
                    return [2 /*return*/, BiFileFind];
                case 669: return [4 /*yield*/, import("react-icons/bi")];
                case 670:
                    BiFile = (_b.sent()).BiFile;
                    return [2 /*return*/, BiFile];
                case 671: return [4 /*yield*/, import("react-icons/bi")];
                case 672:
                    BiFilm = (_b.sent()).BiFilm;
                    return [2 /*return*/, BiFilm];
                case 673: return [4 /*yield*/, import("react-icons/bi")];
                case 674:
                    BiFilterAlt = (_b.sent()).BiFilterAlt;
                    return [2 /*return*/, BiFilterAlt];
                case 675: return [4 /*yield*/, import("react-icons/bi")];
                case 676:
                    BiFilter = (_b.sent()).BiFilter;
                    return [2 /*return*/, BiFilter];
                case 677: return [4 /*yield*/, import("react-icons/bi")];
                case 678:
                    BiFingerprint = (_b.sent()).BiFingerprint;
                    return [2 /*return*/, BiFingerprint];
                case 679: return [4 /*yield*/, import("react-icons/bi")];
                case 680:
                    BiFirstAid = (_b.sent()).BiFirstAid;
                    return [2 /*return*/, BiFirstAid];
                case 681: return [4 /*yield*/, import("react-icons/bi")];
                case 682:
                    BiFirstPage = (_b.sent()).BiFirstPage;
                    return [2 /*return*/, BiFirstPage];
                case 683: return [4 /*yield*/, import("react-icons/bi")];
                case 684:
                    BiFlag = (_b.sent()).BiFlag;
                    return [2 /*return*/, BiFlag];
                case 685: return [4 /*yield*/, import("react-icons/bi")];
                case 686:
                    BiFolderMinus = (_b.sent()).BiFolderMinus;
                    return [2 /*return*/, BiFolderMinus];
                case 687: return [4 /*yield*/, import("react-icons/bi")];
                case 688:
                    BiFolderOpen = (_b.sent()).BiFolderOpen;
                    return [2 /*return*/, BiFolderOpen];
                case 689: return [4 /*yield*/, import("react-icons/bi")];
                case 690:
                    BiFolderPlus = (_b.sent()).BiFolderPlus;
                    return [2 /*return*/, BiFolderPlus];
                case 691: return [4 /*yield*/, import("react-icons/bi")];
                case 692:
                    BiFolder = (_b.sent()).BiFolder;
                    return [2 /*return*/, BiFolder];
                case 693: return [4 /*yield*/, import("react-icons/bi")];
                case 694:
                    BiFontColor = (_b.sent()).BiFontColor;
                    return [2 /*return*/, BiFontColor];
                case 695: return [4 /*yield*/, import("react-icons/bi")];
                case 696:
                    BiFontFamily = (_b.sent()).BiFontFamily;
                    return [2 /*return*/, BiFontFamily];
                case 697: return [4 /*yield*/, import("react-icons/bi")];
                case 698:
                    BiFontSize = (_b.sent()).BiFontSize;
                    return [2 /*return*/, BiFontSize];
                case 699: return [4 /*yield*/, import("react-icons/bi")];
                case 700:
                    BiFont = (_b.sent()).BiFont;
                    return [2 /*return*/, BiFont];
                case 701: return [4 /*yield*/, import("react-icons/bi")];
                case 702:
                    BiFoodMenu = (_b.sent()).BiFoodMenu;
                    return [2 /*return*/, BiFoodMenu];
                case 703: return [4 /*yield*/, import("react-icons/bi")];
                case 704:
                    BiFoodTag = (_b.sent()).BiFoodTag;
                    return [2 /*return*/, BiFoodTag];
                case 705: return [4 /*yield*/, import("react-icons/bi")];
                case 706:
                    BiFootball = (_b.sent()).BiFootball;
                    return [2 /*return*/, BiFootball];
                case 707: return [4 /*yield*/, import("react-icons/bi")];
                case 708:
                    BiFork = (_b.sent()).BiFork;
                    return [2 /*return*/, BiFork];
                case 709: return [4 /*yield*/, import("react-icons/bi")];
                case 710:
                    BiFridge = (_b.sent()).BiFridge;
                    return [2 /*return*/, BiFridge];
                case 711: return [4 /*yield*/, import("react-icons/bi")];
                case 712:
                    BiFullscreen = (_b.sent()).BiFullscreen;
                    return [2 /*return*/, BiFullscreen];
                case 713: return [4 /*yield*/, import("react-icons/bi")];
                case 714:
                    BiGame = (_b.sent()).BiGame;
                    return [2 /*return*/, BiGame];
                case 715: return [4 /*yield*/, import("react-icons/bi")];
                case 716:
                    BiGasPump = (_b.sent()).BiGasPump;
                    return [2 /*return*/, BiGasPump];
                case 717: return [4 /*yield*/, import("react-icons/bi")];
                case 718:
                    BiGhost = (_b.sent()).BiGhost;
                    return [2 /*return*/, BiGhost];
                case 719: return [4 /*yield*/, import("react-icons/bi")];
                case 720:
                    BiGift = (_b.sent()).BiGift;
                    return [2 /*return*/, BiGift];
                case 721: return [4 /*yield*/, import("react-icons/bi")];
                case 722:
                    BiGitBranch = (_b.sent()).BiGitBranch;
                    return [2 /*return*/, BiGitBranch];
                case 723: return [4 /*yield*/, import("react-icons/bi")];
                case 724:
                    BiGitCommit = (_b.sent()).BiGitCommit;
                    return [2 /*return*/, BiGitCommit];
                case 725: return [4 /*yield*/, import("react-icons/bi")];
                case 726:
                    BiGitCompare = (_b.sent()).BiGitCompare;
                    return [2 /*return*/, BiGitCompare];
                case 727: return [4 /*yield*/, import("react-icons/bi")];
                case 728:
                    BiGitMerge = (_b.sent()).BiGitMerge;
                    return [2 /*return*/, BiGitMerge];
                case 729: return [4 /*yield*/, import("react-icons/bi")];
                case 730:
                    BiGitPullRequest = (_b.sent()).BiGitPullRequest;
                    return [2 /*return*/, BiGitPullRequest];
                case 731: return [4 /*yield*/, import("react-icons/bi")];
                case 732:
                    BiGitRepoForked = (_b.sent()).BiGitRepoForked;
                    return [2 /*return*/, BiGitRepoForked];
                case 733: return [4 /*yield*/, import("react-icons/bi")];
                case 734:
                    BiGlassesAlt = (_b.sent()).BiGlassesAlt;
                    return [2 /*return*/, BiGlassesAlt];
                case 735: return [4 /*yield*/, import("react-icons/bi")];
                case 736:
                    BiGlasses = (_b.sent()).BiGlasses;
                    return [2 /*return*/, BiGlasses];
                case 737: return [4 /*yield*/, import("react-icons/bi")];
                case 738:
                    BiGlobeAlt = (_b.sent()).BiGlobeAlt;
                    return [2 /*return*/, BiGlobeAlt];
                case 739: return [4 /*yield*/, import("react-icons/bi")];
                case 740:
                    BiGlobe = (_b.sent()).BiGlobe;
                    return [2 /*return*/, BiGlobe];
                case 741: return [4 /*yield*/, import("react-icons/bi")];
                case 742:
                    BiGridAlt = (_b.sent()).BiGridAlt;
                    return [2 /*return*/, BiGridAlt];
                case 743: return [4 /*yield*/, import("react-icons/bi")];
                case 744:
                    BiGridHorizontal = (_b.sent()).BiGridHorizontal;
                    return [2 /*return*/, BiGridHorizontal];
                case 745: return [4 /*yield*/, import("react-icons/bi")];
                case 746:
                    BiGridSmall = (_b.sent()).BiGridSmall;
                    return [2 /*return*/, BiGridSmall];
                case 747: return [4 /*yield*/, import("react-icons/bi")];
                case 748:
                    BiGridVertical = (_b.sent()).BiGridVertical;
                    return [2 /*return*/, BiGridVertical];
                case 749: return [4 /*yield*/, import("react-icons/bi")];
                case 750:
                    BiGrid = (_b.sent()).BiGrid;
                    return [2 /*return*/, BiGrid];
                case 751: return [4 /*yield*/, import("react-icons/bi")];
                case 752:
                    BiGroup = (_b.sent()).BiGroup;
                    return [2 /*return*/, BiGroup];
                case 753: return [4 /*yield*/, import("react-icons/bi")];
                case 754:
                    BiHandicap = (_b.sent()).BiHandicap;
                    return [2 /*return*/, BiHandicap];
                case 755: return [4 /*yield*/, import("react-icons/bi")];
                case 756:
                    BiHappyAlt = (_b.sent()).BiHappyAlt;
                    return [2 /*return*/, BiHappyAlt];
                case 757: return [4 /*yield*/, import("react-icons/bi")];
                case 758:
                    BiHappyBeaming = (_b.sent()).BiHappyBeaming;
                    return [2 /*return*/, BiHappyBeaming];
                case 759: return [4 /*yield*/, import("react-icons/bi")];
                case 760:
                    BiHappyHeartEyes = (_b.sent()).BiHappyHeartEyes;
                    return [2 /*return*/, BiHappyHeartEyes];
                case 761: return [4 /*yield*/, import("react-icons/bi")];
                case 762:
                    BiHappy = (_b.sent()).BiHappy;
                    return [2 /*return*/, BiHappy];
                case 763: return [4 /*yield*/, import("react-icons/bi")];
                case 764:
                    BiHardHat = (_b.sent()).BiHardHat;
                    return [2 /*return*/, BiHardHat];
                case 765: return [4 /*yield*/, import("react-icons/bi")];
                case 766:
                    BiHash = (_b.sent()).BiHash;
                    return [2 /*return*/, BiHash];
                case 767: return [4 /*yield*/, import("react-icons/bi")];
                case 768:
                    BiHdd = (_b.sent()).BiHdd;
                    return [2 /*return*/, BiHdd];
                case 769: return [4 /*yield*/, import("react-icons/bi")];
                case 770:
                    BiHeading = (_b.sent()).BiHeading;
                    return [2 /*return*/, BiHeading];
                case 771: return [4 /*yield*/, import("react-icons/bi")];
                case 772:
                    BiHeadphone = (_b.sent()).BiHeadphone;
                    return [2 /*return*/, BiHeadphone];
                case 773: return [4 /*yield*/, import("react-icons/bi")];
                case 774:
                    BiHealth = (_b.sent()).BiHealth;
                    return [2 /*return*/, BiHealth];
                case 775: return [4 /*yield*/, import("react-icons/bi")];
                case 776:
                    BiHeartCircle = (_b.sent()).BiHeartCircle;
                    return [2 /*return*/, BiHeartCircle];
                case 777: return [4 /*yield*/, import("react-icons/bi")];
                case 778:
                    BiHeartSquare = (_b.sent()).BiHeartSquare;
                    return [2 /*return*/, BiHeartSquare];
                case 779: return [4 /*yield*/, import("react-icons/bi")];
                case 780:
                    BiHeart = (_b.sent()).BiHeart;
                    return [2 /*return*/, BiHeart];
                case 781: return [4 /*yield*/, import("react-icons/bi")];
                case 782:
                    BiHelpCircle = (_b.sent()).BiHelpCircle;
                    return [2 /*return*/, BiHelpCircle];
                case 783: return [4 /*yield*/, import("react-icons/bi")];
                case 784:
                    BiHide = (_b.sent()).BiHide;
                    return [2 /*return*/, BiHide];
                case 785: return [4 /*yield*/, import("react-icons/bi")];
                case 786:
                    BiHighlight = (_b.sent()).BiHighlight;
                    return [2 /*return*/, BiHighlight];
                case 787: return [4 /*yield*/, import("react-icons/bi")];
                case 788:
                    BiHistory = (_b.sent()).BiHistory;
                    return [2 /*return*/, BiHistory];
                case 789: return [4 /*yield*/, import("react-icons/bi")];
                case 790:
                    BiHive = (_b.sent()).BiHive;
                    return [2 /*return*/, BiHive];
                case 791: return [4 /*yield*/, import("react-icons/bi")];
                case 792:
                    BiHomeAlt2 = (_b.sent()).BiHomeAlt2;
                    return [2 /*return*/, BiHomeAlt2];
                case 793: return [4 /*yield*/, import("react-icons/bi")];
                case 794:
                    BiHomeAlt = (_b.sent()).BiHomeAlt;
                    return [2 /*return*/, BiHomeAlt];
                case 795: return [4 /*yield*/, import("react-icons/bi")];
                case 796:
                    BiHomeCircle = (_b.sent()).BiHomeCircle;
                    return [2 /*return*/, BiHomeCircle];
                case 797: return [4 /*yield*/, import("react-icons/bi")];
                case 798:
                    BiHomeHeart = (_b.sent()).BiHomeHeart;
                    return [2 /*return*/, BiHomeHeart];
                case 799: return [4 /*yield*/, import("react-icons/bi")];
                case 800:
                    BiHomeSmile = (_b.sent()).BiHomeSmile;
                    return [2 /*return*/, BiHomeSmile];
                case 801: return [4 /*yield*/, import("react-icons/bi")];
                case 802:
                    BiHome = (_b.sent()).BiHome;
                    return [2 /*return*/, BiHome];
                case 803: return [4 /*yield*/, import("react-icons/bi")];
                case 804:
                    BiHorizontalCenter = (_b.sent()).BiHorizontalCenter;
                    return [2 /*return*/, BiHorizontalCenter];
                case 805: return [4 /*yield*/, import("react-icons/bi")];
                case 806:
                    BiHorizontalLeft = (_b.sent()).BiHorizontalLeft;
                    return [2 /*return*/, BiHorizontalLeft];
                case 807: return [4 /*yield*/, import("react-icons/bi")];
                case 808:
                    BiHorizontalRight = (_b.sent()).BiHorizontalRight;
                    return [2 /*return*/, BiHorizontalRight];
                case 809: return [4 /*yield*/, import("react-icons/bi")];
                case 810:
                    BiHotel = (_b.sent()).BiHotel;
                    return [2 /*return*/, BiHotel];
                case 811: return [4 /*yield*/, import("react-icons/bi")];
                case 812:
                    BiHourglass = (_b.sent()).BiHourglass;
                    return [2 /*return*/, BiHourglass];
                case 813: return [4 /*yield*/, import("react-icons/bi")];
                case 814:
                    BiIdCard = (_b.sent()).BiIdCard;
                    return [2 /*return*/, BiIdCard];
                case 815: return [4 /*yield*/, import("react-icons/bi")];
                case 816:
                    BiImageAdd = (_b.sent()).BiImageAdd;
                    return [2 /*return*/, BiImageAdd];
                case 817: return [4 /*yield*/, import("react-icons/bi")];
                case 818:
                    BiImageAlt = (_b.sent()).BiImageAlt;
                    return [2 /*return*/, BiImageAlt];
                case 819: return [4 /*yield*/, import("react-icons/bi")];
                case 820:
                    BiImage = (_b.sent()).BiImage;
                    return [2 /*return*/, BiImage];
                case 821: return [4 /*yield*/, import("react-icons/bi")];
                case 822:
                    BiImages = (_b.sent()).BiImages;
                    return [2 /*return*/, BiImages];
                case 823: return [4 /*yield*/, import("react-icons/bi")];
                case 824:
                    BiImport = (_b.sent()).BiImport;
                    return [2 /*return*/, BiImport];
                case 825: return [4 /*yield*/, import("react-icons/bi")];
                case 826:
                    BiInfinite = (_b.sent()).BiInfinite;
                    return [2 /*return*/, BiInfinite];
                case 827: return [4 /*yield*/, import("react-icons/bi")];
                case 828:
                    BiInfoCircle = (_b.sent()).BiInfoCircle;
                    return [2 /*return*/, BiInfoCircle];
                case 829: return [4 /*yield*/, import("react-icons/bi")];
                case 830:
                    BiInfoSquare = (_b.sent()).BiInfoSquare;
                    return [2 /*return*/, BiInfoSquare];
                case 831: return [4 /*yield*/, import("react-icons/bi")];
                case 832:
                    BiInjection = (_b.sent()).BiInjection;
                    return [2 /*return*/, BiInjection];
                case 833: return [4 /*yield*/, import("react-icons/bi")];
                case 834:
                    BiIntersect = (_b.sent()).BiIntersect;
                    return [2 /*return*/, BiIntersect];
                case 835: return [4 /*yield*/, import("react-icons/bi")];
                case 836:
                    BiItalic = (_b.sent()).BiItalic;
                    return [2 /*return*/, BiItalic];
                case 837: return [4 /*yield*/, import("react-icons/bi")];
                case 838:
                    BiJoystickAlt = (_b.sent()).BiJoystickAlt;
                    return [2 /*return*/, BiJoystickAlt];
                case 839: return [4 /*yield*/, import("react-icons/bi")];
                case 840:
                    BiJoystickButton = (_b.sent()).BiJoystickButton;
                    return [2 /*return*/, BiJoystickButton];
                case 841: return [4 /*yield*/, import("react-icons/bi")];
                case 842:
                    BiJoystick = (_b.sent()).BiJoystick;
                    return [2 /*return*/, BiJoystick];
                case 843: return [4 /*yield*/, import("react-icons/bi")];
                case 844:
                    BiKey = (_b.sent()).BiKey;
                    return [2 /*return*/, BiKey];
                case 845: return [4 /*yield*/, import("react-icons/bi")];
                case 846:
                    BiKnife = (_b.sent()).BiKnife;
                    return [2 /*return*/, BiKnife];
                case 847: return [4 /*yield*/, import("react-icons/bi")];
                case 848:
                    BiLabel = (_b.sent()).BiLabel;
                    return [2 /*return*/, BiLabel];
                case 849: return [4 /*yield*/, import("react-icons/bi")];
                case 850:
                    BiLandscape = (_b.sent()).BiLandscape;
                    return [2 /*return*/, BiLandscape];
                case 851: return [4 /*yield*/, import("react-icons/bi")];
                case 852:
                    BiLaptop = (_b.sent()).BiLaptop;
                    return [2 /*return*/, BiLaptop];
                case 853: return [4 /*yield*/, import("react-icons/bi")];
                case 854:
                    BiLastPage = (_b.sent()).BiLastPage;
                    return [2 /*return*/, BiLastPage];
                case 855: return [4 /*yield*/, import("react-icons/bi")];
                case 856:
                    BiLaugh = (_b.sent()).BiLaugh;
                    return [2 /*return*/, BiLaugh];
                case 857: return [4 /*yield*/, import("react-icons/bi")];
                case 858:
                    BiLayerMinus = (_b.sent()).BiLayerMinus;
                    return [2 /*return*/, BiLayerMinus];
                case 859: return [4 /*yield*/, import("react-icons/bi")];
                case 860:
                    BiLayerPlus = (_b.sent()).BiLayerPlus;
                    return [2 /*return*/, BiLayerPlus];
                case 861: return [4 /*yield*/, import("react-icons/bi")];
                case 862:
                    BiLayer = (_b.sent()).BiLayer;
                    return [2 /*return*/, BiLayer];
                case 863: return [4 /*yield*/, import("react-icons/bi")];
                case 864:
                    BiLayout = (_b.sent()).BiLayout;
                    return [2 /*return*/, BiLayout];
                case 865: return [4 /*yield*/, import("react-icons/bi")];
                case 866:
                    BiLeaf = (_b.sent()).BiLeaf;
                    return [2 /*return*/, BiLeaf];
                case 867: return [4 /*yield*/, import("react-icons/bi")];
                case 868:
                    BiLeftArrowAlt = (_b.sent()).BiLeftArrowAlt;
                    return [2 /*return*/, BiLeftArrowAlt];
                case 869: return [4 /*yield*/, import("react-icons/bi")];
                case 870:
                    BiLeftArrowCircle = (_b.sent()).BiLeftArrowCircle;
                    return [2 /*return*/, BiLeftArrowCircle];
                case 871: return [4 /*yield*/, import("react-icons/bi")];
                case 872:
                    BiLeftArrow = (_b.sent()).BiLeftArrow;
                    return [2 /*return*/, BiLeftArrow];
                case 873: return [4 /*yield*/, import("react-icons/bi")];
                case 874:
                    BiLeftDownArrowCircle = (_b.sent()).BiLeftDownArrowCircle;
                    return [2 /*return*/, BiLeftDownArrowCircle];
                case 875: return [4 /*yield*/, import("react-icons/bi")];
                case 876:
                    BiLeftIndent = (_b.sent()).BiLeftIndent;
                    return [2 /*return*/, BiLeftIndent];
                case 877: return [4 /*yield*/, import("react-icons/bi")];
                case 878:
                    BiLeftTopArrowCircle = (_b.sent()).BiLeftTopArrowCircle;
                    return [2 /*return*/, BiLeftTopArrowCircle];
                case 879: return [4 /*yield*/, import("react-icons/bi")];
                case 880:
                    BiLemon = (_b.sent()).BiLemon;
                    return [2 /*return*/, BiLemon];
                case 881: return [4 /*yield*/, import("react-icons/bi")];
                case 882:
                    BiLibrary = (_b.sent()).BiLibrary;
                    return [2 /*return*/, BiLibrary];
                case 883: return [4 /*yield*/, import("react-icons/bi")];
                case 884:
                    BiLike = (_b.sent()).BiLike;
                    return [2 /*return*/, BiLike];
                case 885: return [4 /*yield*/, import("react-icons/bi")];
                case 886:
                    BiLineChartDown = (_b.sent()).BiLineChartDown;
                    return [2 /*return*/, BiLineChartDown];
                case 887: return [4 /*yield*/, import("react-icons/bi")];
                case 888:
                    BiLineChart = (_b.sent()).BiLineChart;
                    return [2 /*return*/, BiLineChart];
                case 889: return [4 /*yield*/, import("react-icons/bi")];
                case 890:
                    BiLinkAlt = (_b.sent()).BiLinkAlt;
                    return [2 /*return*/, BiLinkAlt];
                case 891: return [4 /*yield*/, import("react-icons/bi")];
                case 892:
                    BiLinkExternal = (_b.sent()).BiLinkExternal;
                    return [2 /*return*/, BiLinkExternal];
                case 893: return [4 /*yield*/, import("react-icons/bi")];
                case 894:
                    BiLink = (_b.sent()).BiLink;
                    return [2 /*return*/, BiLink];
                case 895: return [4 /*yield*/, import("react-icons/bi")];
                case 896:
                    BiLira = (_b.sent()).BiLira;
                    return [2 /*return*/, BiLira];
                case 897: return [4 /*yield*/, import("react-icons/bi")];
                case 898:
                    BiListCheck = (_b.sent()).BiListCheck;
                    return [2 /*return*/, BiListCheck];
                case 899: return [4 /*yield*/, import("react-icons/bi")];
                case 900:
                    BiListMinus = (_b.sent()).BiListMinus;
                    return [2 /*return*/, BiListMinus];
                case 901: return [4 /*yield*/, import("react-icons/bi")];
                case 902:
                    BiListOl = (_b.sent()).BiListOl;
                    return [2 /*return*/, BiListOl];
                case 903: return [4 /*yield*/, import("react-icons/bi")];
                case 904:
                    BiListPlus = (_b.sent()).BiListPlus;
                    return [2 /*return*/, BiListPlus];
                case 905: return [4 /*yield*/, import("react-icons/bi")];
                case 906:
                    BiListUl = (_b.sent()).BiListUl;
                    return [2 /*return*/, BiListUl];
                case 907: return [4 /*yield*/, import("react-icons/bi")];
                case 908:
                    BiLoaderAlt = (_b.sent()).BiLoaderAlt;
                    return [2 /*return*/, BiLoaderAlt];
                case 909: return [4 /*yield*/, import("react-icons/bi")];
                case 910:
                    BiLoaderCircle = (_b.sent()).BiLoaderCircle;
                    return [2 /*return*/, BiLoaderCircle];
                case 911: return [4 /*yield*/, import("react-icons/bi")];
                case 912:
                    BiLoader = (_b.sent()).BiLoader;
                    return [2 /*return*/, BiLoader];
                case 913: return [4 /*yield*/, import("react-icons/bi")];
                case 914:
                    BiLocationPlus = (_b.sent()).BiLocationPlus;
                    return [2 /*return*/, BiLocationPlus];
                case 915: return [4 /*yield*/, import("react-icons/bi")];
                case 916:
                    BiLockAlt = (_b.sent()).BiLockAlt;
                    return [2 /*return*/, BiLockAlt];
                case 917: return [4 /*yield*/, import("react-icons/bi")];
                case 918:
                    BiLockOpenAlt = (_b.sent()).BiLockOpenAlt;
                    return [2 /*return*/, BiLockOpenAlt];
                case 919: return [4 /*yield*/, import("react-icons/bi")];
                case 920:
                    BiLockOpen = (_b.sent()).BiLockOpen;
                    return [2 /*return*/, BiLockOpen];
                case 921: return [4 /*yield*/, import("react-icons/bi")];
                case 922:
                    BiLock = (_b.sent()).BiLock;
                    return [2 /*return*/, BiLock];
                case 923: return [4 /*yield*/, import("react-icons/bi")];
                case 924:
                    BiLogInCircle = (_b.sent()).BiLogInCircle;
                    return [2 /*return*/, BiLogInCircle];
                case 925: return [4 /*yield*/, import("react-icons/bi")];
                case 926:
                    BiLogIn = (_b.sent()).BiLogIn;
                    return [2 /*return*/, BiLogIn];
                case 927: return [4 /*yield*/, import("react-icons/bi")];
                case 928:
                    BiLogOutCircle = (_b.sent()).BiLogOutCircle;
                    return [2 /*return*/, BiLogOutCircle];
                case 929: return [4 /*yield*/, import("react-icons/bi")];
                case 930:
                    BiLogOut = (_b.sent()).BiLogOut;
                    return [2 /*return*/, BiLogOut];
                case 931: return [4 /*yield*/, import("react-icons/bi")];
                case 932:
                    BiLowVision = (_b.sent()).BiLowVision;
                    return [2 /*return*/, BiLowVision];
                case 933: return [4 /*yield*/, import("react-icons/bi")];
                case 934:
                    BiMagnet = (_b.sent()).BiMagnet;
                    return [2 /*return*/, BiMagnet];
                case 935: return [4 /*yield*/, import("react-icons/bi")];
                case 936:
                    BiMailSend = (_b.sent()).BiMailSend;
                    return [2 /*return*/, BiMailSend];
                case 937: return [4 /*yield*/, import("react-icons/bi")];
                case 938:
                    BiMaleFemale = (_b.sent()).BiMaleFemale;
                    return [2 /*return*/, BiMaleFemale];
                case 939: return [4 /*yield*/, import("react-icons/bi")];
                case 940:
                    BiMaleSign = (_b.sent()).BiMaleSign;
                    return [2 /*return*/, BiMaleSign];
                case 941: return [4 /*yield*/, import("react-icons/bi")];
                case 942:
                    BiMale = (_b.sent()).BiMale;
                    return [2 /*return*/, BiMale];
                case 943: return [4 /*yield*/, import("react-icons/bi")];
                case 944:
                    BiMapAlt = (_b.sent()).BiMapAlt;
                    return [2 /*return*/, BiMapAlt];
                case 945: return [4 /*yield*/, import("react-icons/bi")];
                case 946:
                    BiMapPin = (_b.sent()).BiMapPin;
                    return [2 /*return*/, BiMapPin];
                case 947: return [4 /*yield*/, import("react-icons/bi")];
                case 948:
                    BiMap = (_b.sent()).BiMap;
                    return [2 /*return*/, BiMap];
                case 949: return [4 /*yield*/, import("react-icons/bi")];
                case 950:
                    BiMask = (_b.sent()).BiMask;
                    return [2 /*return*/, BiMask];
                case 951: return [4 /*yield*/, import("react-icons/bi")];
                case 952:
                    BiMath = (_b.sent()).BiMath;
                    return [2 /*return*/, BiMath];
                case 953: return [4 /*yield*/, import("react-icons/bi")];
                case 954:
                    BiMedal = (_b.sent()).BiMedal;
                    return [2 /*return*/, BiMedal];
                case 955: return [4 /*yield*/, import("react-icons/bi")];
                case 956:
                    BiMehAlt = (_b.sent()).BiMehAlt;
                    return [2 /*return*/, BiMehAlt];
                case 957: return [4 /*yield*/, import("react-icons/bi")];
                case 958:
                    BiMehBlank = (_b.sent()).BiMehBlank;
                    return [2 /*return*/, BiMehBlank];
                case 959: return [4 /*yield*/, import("react-icons/bi")];
                case 960:
                    BiMeh = (_b.sent()).BiMeh;
                    return [2 /*return*/, BiMeh];
                case 961: return [4 /*yield*/, import("react-icons/bi")];
                case 962:
                    BiMemoryCard = (_b.sent()).BiMemoryCard;
                    return [2 /*return*/, BiMemoryCard];
                case 963: return [4 /*yield*/, import("react-icons/bi")];
                case 964:
                    BiMenuAltLeft = (_b.sent()).BiMenuAltLeft;
                    return [2 /*return*/, BiMenuAltLeft];
                case 965: return [4 /*yield*/, import("react-icons/bi")];
                case 966:
                    BiMenuAltRight = (_b.sent()).BiMenuAltRight;
                    return [2 /*return*/, BiMenuAltRight];
                case 967: return [4 /*yield*/, import("react-icons/bi")];
                case 968:
                    BiMenu = (_b.sent()).BiMenu;
                    return [2 /*return*/, BiMenu];
                case 969: return [4 /*yield*/, import("react-icons/bi")];
                case 970:
                    BiMerge = (_b.sent()).BiMerge;
                    return [2 /*return*/, BiMerge];
                case 971: return [4 /*yield*/, import("react-icons/bi")];
                case 972:
                    BiMessageAdd = (_b.sent()).BiMessageAdd;
                    return [2 /*return*/, BiMessageAdd];
                case 973: return [4 /*yield*/, import("react-icons/bi")];
                case 974:
                    BiMessageAltAdd = (_b.sent()).BiMessageAltAdd;
                    return [2 /*return*/, BiMessageAltAdd];
                case 975: return [4 /*yield*/, import("react-icons/bi")];
                case 976:
                    BiMessageAltCheck = (_b.sent()).BiMessageAltCheck;
                    return [2 /*return*/, BiMessageAltCheck];
                case 977: return [4 /*yield*/, import("react-icons/bi")];
                case 978:
                    BiMessageAltDetail = (_b.sent()).BiMessageAltDetail;
                    return [2 /*return*/, BiMessageAltDetail];
                case 979: return [4 /*yield*/, import("react-icons/bi")];
                case 980:
                    BiMessageAltDots = (_b.sent()).BiMessageAltDots;
                    return [2 /*return*/, BiMessageAltDots];
                case 981: return [4 /*yield*/, import("react-icons/bi")];
                case 982:
                    BiMessageAltEdit = (_b.sent()).BiMessageAltEdit;
                    return [2 /*return*/, BiMessageAltEdit];
                case 983: return [4 /*yield*/, import("react-icons/bi")];
                case 984:
                    BiMessageAltError = (_b.sent()).BiMessageAltError;
                    return [2 /*return*/, BiMessageAltError];
                case 985: return [4 /*yield*/, import("react-icons/bi")];
                case 986:
                    BiMessageAltMinus = (_b.sent()).BiMessageAltMinus;
                    return [2 /*return*/, BiMessageAltMinus];
                case 987: return [4 /*yield*/, import("react-icons/bi")];
                case 988:
                    BiMessageAltX = (_b.sent()).BiMessageAltX;
                    return [2 /*return*/, BiMessageAltX];
                case 989: return [4 /*yield*/, import("react-icons/bi")];
                case 990:
                    BiMessageAlt = (_b.sent()).BiMessageAlt;
                    return [2 /*return*/, BiMessageAlt];
                case 991: return [4 /*yield*/, import("react-icons/bi")];
                case 992:
                    BiMessageCheck = (_b.sent()).BiMessageCheck;
                    return [2 /*return*/, BiMessageCheck];
                case 993: return [4 /*yield*/, import("react-icons/bi")];
                case 994:
                    BiMessageDetail = (_b.sent()).BiMessageDetail;
                    return [2 /*return*/, BiMessageDetail];
                case 995: return [4 /*yield*/, import("react-icons/bi")];
                case 996:
                    BiMessageDots = (_b.sent()).BiMessageDots;
                    return [2 /*return*/, BiMessageDots];
                case 997: return [4 /*yield*/, import("react-icons/bi")];
                case 998:
                    BiMessageEdit = (_b.sent()).BiMessageEdit;
                    return [2 /*return*/, BiMessageEdit];
                case 999: return [4 /*yield*/, import("react-icons/bi")];
                case 1000:
                    BiMessageError = (_b.sent()).BiMessageError;
                    return [2 /*return*/, BiMessageError];
                case 1001: return [4 /*yield*/, import("react-icons/bi")];
                case 1002:
                    BiMessageMinus = (_b.sent()).BiMessageMinus;
                    return [2 /*return*/, BiMessageMinus];
                case 1003: return [4 /*yield*/, import("react-icons/bi")];
                case 1004:
                    BiMessageRoundedAdd = (_b.sent()).BiMessageRoundedAdd;
                    return [2 /*return*/, BiMessageRoundedAdd];
                case 1005: return [4 /*yield*/, import("react-icons/bi")];
                case 1006:
                    BiMessageRoundedCheck = (_b.sent()).BiMessageRoundedCheck;
                    return [2 /*return*/, BiMessageRoundedCheck];
                case 1007: return [4 /*yield*/, import("react-icons/bi")];
                case 1008:
                    BiMessageRoundedDetail = (_b.sent()).BiMessageRoundedDetail;
                    return [2 /*return*/, BiMessageRoundedDetail];
                case 1009: return [4 /*yield*/, import("react-icons/bi")];
                case 1010:
                    BiMessageRoundedDots = (_b.sent()).BiMessageRoundedDots;
                    return [2 /*return*/, BiMessageRoundedDots];
                case 1011: return [4 /*yield*/, import("react-icons/bi")];
                case 1012:
                    BiMessageRoundedEdit = (_b.sent()).BiMessageRoundedEdit;
                    return [2 /*return*/, BiMessageRoundedEdit];
                case 1013: return [4 /*yield*/, import("react-icons/bi")];
                case 1014:
                    BiMessageRoundedError = (_b.sent()).BiMessageRoundedError;
                    return [2 /*return*/, BiMessageRoundedError];
                case 1015: return [4 /*yield*/, import("react-icons/bi")];
                case 1016:
                    BiMessageRoundedMinus = (_b.sent()).BiMessageRoundedMinus;
                    return [2 /*return*/, BiMessageRoundedMinus];
                case 1017: return [4 /*yield*/, import("react-icons/bi")];
                case 1018:
                    BiMessageRoundedX = (_b.sent()).BiMessageRoundedX;
                    return [2 /*return*/, BiMessageRoundedX];
                case 1019: return [4 /*yield*/, import("react-icons/bi")];
                case 1020:
                    BiMessageRounded = (_b.sent()).BiMessageRounded;
                    return [2 /*return*/, BiMessageRounded];
                case 1021: return [4 /*yield*/, import("react-icons/bi")];
                case 1022:
                    BiMessageSquareAdd = (_b.sent()).BiMessageSquareAdd;
                    return [2 /*return*/, BiMessageSquareAdd];
                case 1023: return [4 /*yield*/, import("react-icons/bi")];
                case 1024:
                    BiMessageSquareCheck = (_b.sent()).BiMessageSquareCheck;
                    return [2 /*return*/, BiMessageSquareCheck];
                case 1025: return [4 /*yield*/, import("react-icons/bi")];
                case 1026:
                    BiMessageSquareDetail = (_b.sent()).BiMessageSquareDetail;
                    return [2 /*return*/, BiMessageSquareDetail];
                case 1027: return [4 /*yield*/, import("react-icons/bi")];
                case 1028:
                    BiMessageSquareDots = (_b.sent()).BiMessageSquareDots;
                    return [2 /*return*/, BiMessageSquareDots];
                case 1029: return [4 /*yield*/, import("react-icons/bi")];
                case 1030:
                    BiMessageSquareEdit = (_b.sent()).BiMessageSquareEdit;
                    return [2 /*return*/, BiMessageSquareEdit];
                case 1031: return [4 /*yield*/, import("react-icons/bi")];
                case 1032:
                    BiMessageSquareError = (_b.sent()).BiMessageSquareError;
                    return [2 /*return*/, BiMessageSquareError];
                case 1033: return [4 /*yield*/, import("react-icons/bi")];
                case 1034:
                    BiMessageSquareMinus = (_b.sent()).BiMessageSquareMinus;
                    return [2 /*return*/, BiMessageSquareMinus];
                case 1035: return [4 /*yield*/, import("react-icons/bi")];
                case 1036:
                    BiMessageSquareX = (_b.sent()).BiMessageSquareX;
                    return [2 /*return*/, BiMessageSquareX];
                case 1037: return [4 /*yield*/, import("react-icons/bi")];
                case 1038:
                    BiMessageSquare = (_b.sent()).BiMessageSquare;
                    return [2 /*return*/, BiMessageSquare];
                case 1039: return [4 /*yield*/, import("react-icons/bi")];
                case 1040:
                    BiMessageX = (_b.sent()).BiMessageX;
                    return [2 /*return*/, BiMessageX];
                case 1041: return [4 /*yield*/, import("react-icons/bi")];
                case 1042:
                    BiMessage = (_b.sent()).BiMessage;
                    return [2 /*return*/, BiMessage];
                case 1043: return [4 /*yield*/, import("react-icons/bi")];
                case 1044:
                    BiMeteor = (_b.sent()).BiMeteor;
                    return [2 /*return*/, BiMeteor];
                case 1045: return [4 /*yield*/, import("react-icons/bi")];
                case 1046:
                    BiMicrochip = (_b.sent()).BiMicrochip;
                    return [2 /*return*/, BiMicrochip];
                case 1047: return [4 /*yield*/, import("react-icons/bi")];
                case 1048:
                    BiMicrophoneOff = (_b.sent()).BiMicrophoneOff;
                    return [2 /*return*/, BiMicrophoneOff];
                case 1049: return [4 /*yield*/, import("react-icons/bi")];
                case 1050:
                    BiMicrophone = (_b.sent()).BiMicrophone;
                    return [2 /*return*/, BiMicrophone];
                case 1051: return [4 /*yield*/, import("react-icons/bi")];
                case 1052:
                    BiMinusBack = (_b.sent()).BiMinusBack;
                    return [2 /*return*/, BiMinusBack];
                case 1053: return [4 /*yield*/, import("react-icons/bi")];
                case 1054:
                    BiMinusCircle = (_b.sent()).BiMinusCircle;
                    return [2 /*return*/, BiMinusCircle];
                case 1055: return [4 /*yield*/, import("react-icons/bi")];
                case 1056:
                    BiMinusFront = (_b.sent()).BiMinusFront;
                    return [2 /*return*/, BiMinusFront];
                case 1057: return [4 /*yield*/, import("react-icons/bi")];
                case 1058:
                    BiMinus = (_b.sent()).BiMinus;
                    return [2 /*return*/, BiMinus];
                case 1059: return [4 /*yield*/, import("react-icons/bi")];
                case 1060:
                    BiMobileAlt = (_b.sent()).BiMobileAlt;
                    return [2 /*return*/, BiMobileAlt];
                case 1061: return [4 /*yield*/, import("react-icons/bi")];
                case 1062:
                    BiMobileLandscape = (_b.sent()).BiMobileLandscape;
                    return [2 /*return*/, BiMobileLandscape];
                case 1063: return [4 /*yield*/, import("react-icons/bi")];
                case 1064:
                    BiMobileVibration = (_b.sent()).BiMobileVibration;
                    return [2 /*return*/, BiMobileVibration];
                case 1065: return [4 /*yield*/, import("react-icons/bi")];
                case 1066:
                    BiMobile = (_b.sent()).BiMobile;
                    return [2 /*return*/, BiMobile];
                case 1067: return [4 /*yield*/, import("react-icons/bi")];
                case 1068:
                    BiMoneyWithdraw = (_b.sent()).BiMoneyWithdraw;
                    return [2 /*return*/, BiMoneyWithdraw];
                case 1069: return [4 /*yield*/, import("react-icons/bi")];
                case 1070:
                    BiMoney = (_b.sent()).BiMoney;
                    return [2 /*return*/, BiMoney];
                case 1071: return [4 /*yield*/, import("react-icons/bi")];
                case 1072:
                    BiMoon = (_b.sent()).BiMoon;
                    return [2 /*return*/, BiMoon];
                case 1073: return [4 /*yield*/, import("react-icons/bi")];
                case 1074:
                    BiMouseAlt = (_b.sent()).BiMouseAlt;
                    return [2 /*return*/, BiMouseAlt];
                case 1075: return [4 /*yield*/, import("react-icons/bi")];
                case 1076:
                    BiMouse = (_b.sent()).BiMouse;
                    return [2 /*return*/, BiMouse];
                case 1077: return [4 /*yield*/, import("react-icons/bi")];
                case 1078:
                    BiMoveHorizontal = (_b.sent()).BiMoveHorizontal;
                    return [2 /*return*/, BiMoveHorizontal];
                case 1079: return [4 /*yield*/, import("react-icons/bi")];
                case 1080:
                    BiMoveVertical = (_b.sent()).BiMoveVertical;
                    return [2 /*return*/, BiMoveVertical];
                case 1081: return [4 /*yield*/, import("react-icons/bi")];
                case 1082:
                    BiMove = (_b.sent()).BiMove;
                    return [2 /*return*/, BiMove];
                case 1083: return [4 /*yield*/, import("react-icons/bi")];
                case 1084:
                    BiMoviePlay = (_b.sent()).BiMoviePlay;
                    return [2 /*return*/, BiMoviePlay];
                case 1085: return [4 /*yield*/, import("react-icons/bi")];
                case 1086:
                    BiMovie = (_b.sent()).BiMovie;
                    return [2 /*return*/, BiMovie];
                case 1087: return [4 /*yield*/, import("react-icons/bi")];
                case 1088:
                    BiMusic = (_b.sent()).BiMusic;
                    return [2 /*return*/, BiMusic];
                case 1089: return [4 /*yield*/, import("react-icons/bi")];
                case 1090:
                    BiNavigation = (_b.sent()).BiNavigation;
                    return [2 /*return*/, BiNavigation];
                case 1091: return [4 /*yield*/, import("react-icons/bi")];
                case 1092:
                    BiNetworkChart = (_b.sent()).BiNetworkChart;
                    return [2 /*return*/, BiNetworkChart];
                case 1093: return [4 /*yield*/, import("react-icons/bi")];
                case 1094:
                    BiNews = (_b.sent()).BiNews;
                    return [2 /*return*/, BiNews];
                case 1095: return [4 /*yield*/, import("react-icons/bi")];
                case 1096:
                    BiNoEntry = (_b.sent()).BiNoEntry;
                    return [2 /*return*/, BiNoEntry];
                case 1097: return [4 /*yield*/, import("react-icons/bi")];
                case 1098:
                    BiNoSignal = (_b.sent()).BiNoSignal;
                    return [2 /*return*/, BiNoSignal];
                case 1099: return [4 /*yield*/, import("react-icons/bi")];
                case 1100:
                    BiNote = (_b.sent()).BiNote;
                    return [2 /*return*/, BiNote];
                case 1101: return [4 /*yield*/, import("react-icons/bi")];
                case 1102:
                    BiNotepad = (_b.sent()).BiNotepad;
                    return [2 /*return*/, BiNotepad];
                case 1103: return [4 /*yield*/, import("react-icons/bi")];
                case 1104:
                    BiNotificationOff = (_b.sent()).BiNotificationOff;
                    return [2 /*return*/, BiNotificationOff];
                case 1105: return [4 /*yield*/, import("react-icons/bi")];
                case 1106:
                    BiNotification = (_b.sent()).BiNotification;
                    return [2 /*return*/, BiNotification];
                case 1107: return [4 /*yield*/, import("react-icons/bi")];
                case 1108:
                    BiObjectsHorizontalCenter = (_b.sent()).BiObjectsHorizontalCenter;
                    return [2 /*return*/, BiObjectsHorizontalCenter];
                case 1109: return [4 /*yield*/, import("react-icons/bi")];
                case 1110:
                    BiObjectsHorizontalLeft = (_b.sent()).BiObjectsHorizontalLeft;
                    return [2 /*return*/, BiObjectsHorizontalLeft];
                case 1111: return [4 /*yield*/, import("react-icons/bi")];
                case 1112:
                    BiObjectsHorizontalRight = (_b.sent()).BiObjectsHorizontalRight;
                    return [2 /*return*/, BiObjectsHorizontalRight];
                case 1113: return [4 /*yield*/, import("react-icons/bi")];
                case 1114:
                    BiObjectsVerticalBottom = (_b.sent()).BiObjectsVerticalBottom;
                    return [2 /*return*/, BiObjectsVerticalBottom];
                case 1115: return [4 /*yield*/, import("react-icons/bi")];
                case 1116:
                    BiObjectsVerticalCenter = (_b.sent()).BiObjectsVerticalCenter;
                    return [2 /*return*/, BiObjectsVerticalCenter];
                case 1117: return [4 /*yield*/, import("react-icons/bi")];
                case 1118:
                    BiObjectsVerticalTop = (_b.sent()).BiObjectsVerticalTop;
                    return [2 /*return*/, BiObjectsVerticalTop];
                case 1119: return [4 /*yield*/, import("react-icons/bi")];
                case 1120:
                    BiOutline = (_b.sent()).BiOutline;
                    return [2 /*return*/, BiOutline];
                case 1121: return [4 /*yield*/, import("react-icons/bi")];
                case 1122:
                    BiPackage = (_b.sent()).BiPackage;
                    return [2 /*return*/, BiPackage];
                case 1123: return [4 /*yield*/, import("react-icons/bi")];
                case 1124:
                    BiPaintRoll = (_b.sent()).BiPaintRoll;
                    return [2 /*return*/, BiPaintRoll];
                case 1125: return [4 /*yield*/, import("react-icons/bi")];
                case 1126:
                    BiPaint = (_b.sent()).BiPaint;
                    return [2 /*return*/, BiPaint];
                case 1127: return [4 /*yield*/, import("react-icons/bi")];
                case 1128:
                    BiPalette = (_b.sent()).BiPalette;
                    return [2 /*return*/, BiPalette];
                case 1129: return [4 /*yield*/, import("react-icons/bi")];
                case 1130:
                    BiPaperPlane = (_b.sent()).BiPaperPlane;
                    return [2 /*return*/, BiPaperPlane];
                case 1131: return [4 /*yield*/, import("react-icons/bi")];
                case 1132:
                    BiPaperclip = (_b.sent()).BiPaperclip;
                    return [2 /*return*/, BiPaperclip];
                case 1133: return [4 /*yield*/, import("react-icons/bi")];
                case 1134:
                    BiParagraph = (_b.sent()).BiParagraph;
                    return [2 /*return*/, BiParagraph];
                case 1135: return [4 /*yield*/, import("react-icons/bi")];
                case 1136:
                    BiParty = (_b.sent()).BiParty;
                    return [2 /*return*/, BiParty];
                case 1137: return [4 /*yield*/, import("react-icons/bi")];
                case 1138:
                    BiPaste = (_b.sent()).BiPaste;
                    return [2 /*return*/, BiPaste];
                case 1139: return [4 /*yield*/, import("react-icons/bi")];
                case 1140:
                    BiPauseCircle = (_b.sent()).BiPauseCircle;
                    return [2 /*return*/, BiPauseCircle];
                case 1141: return [4 /*yield*/, import("react-icons/bi")];
                case 1142:
                    BiPause = (_b.sent()).BiPause;
                    return [2 /*return*/, BiPause];
                case 1143: return [4 /*yield*/, import("react-icons/bi")];
                case 1144:
                    BiPen = (_b.sent()).BiPen;
                    return [2 /*return*/, BiPen];
                case 1145: return [4 /*yield*/, import("react-icons/bi")];
                case 1146:
                    BiPencil = (_b.sent()).BiPencil;
                    return [2 /*return*/, BiPencil];
                case 1147: return [4 /*yield*/, import("react-icons/bi")];
                case 1148:
                    BiPhoneCall = (_b.sent()).BiPhoneCall;
                    return [2 /*return*/, BiPhoneCall];
                case 1149: return [4 /*yield*/, import("react-icons/bi")];
                case 1150:
                    BiPhoneIncoming = (_b.sent()).BiPhoneIncoming;
                    return [2 /*return*/, BiPhoneIncoming];
                case 1151: return [4 /*yield*/, import("react-icons/bi")];
                case 1152:
                    BiPhoneOff = (_b.sent()).BiPhoneOff;
                    return [2 /*return*/, BiPhoneOff];
                case 1153: return [4 /*yield*/, import("react-icons/bi")];
                case 1154:
                    BiPhoneOutgoing = (_b.sent()).BiPhoneOutgoing;
                    return [2 /*return*/, BiPhoneOutgoing];
                case 1155: return [4 /*yield*/, import("react-icons/bi")];
                case 1156:
                    BiPhone = (_b.sent()).BiPhone;
                    return [2 /*return*/, BiPhone];
                case 1157: return [4 /*yield*/, import("react-icons/bi")];
                case 1158:
                    BiPhotoAlbum = (_b.sent()).BiPhotoAlbum;
                    return [2 /*return*/, BiPhotoAlbum];
                case 1159: return [4 /*yield*/, import("react-icons/bi")];
                case 1160:
                    BiPieChartAlt2 = (_b.sent()).BiPieChartAlt2;
                    return [2 /*return*/, BiPieChartAlt2];
                case 1161: return [4 /*yield*/, import("react-icons/bi")];
                case 1162:
                    BiPieChartAlt = (_b.sent()).BiPieChartAlt;
                    return [2 /*return*/, BiPieChartAlt];
                case 1163: return [4 /*yield*/, import("react-icons/bi")];
                case 1164:
                    BiPieChart = (_b.sent()).BiPieChart;
                    return [2 /*return*/, BiPieChart];
                case 1165: return [4 /*yield*/, import("react-icons/bi")];
                case 1166:
                    BiPin = (_b.sent()).BiPin;
                    return [2 /*return*/, BiPin];
                case 1167: return [4 /*yield*/, import("react-icons/bi")];
                case 1168:
                    BiPlanet = (_b.sent()).BiPlanet;
                    return [2 /*return*/, BiPlanet];
                case 1169: return [4 /*yield*/, import("react-icons/bi")];
                case 1170:
                    BiPlayCircle = (_b.sent()).BiPlayCircle;
                    return [2 /*return*/, BiPlayCircle];
                case 1171: return [4 /*yield*/, import("react-icons/bi")];
                case 1172:
                    BiPlay = (_b.sent()).BiPlay;
                    return [2 /*return*/, BiPlay];
                case 1173: return [4 /*yield*/, import("react-icons/bi")];
                case 1174:
                    BiPlug = (_b.sent()).BiPlug;
                    return [2 /*return*/, BiPlug];
                case 1175: return [4 /*yield*/, import("react-icons/bi")];
                case 1176:
                    BiPlusCircle = (_b.sent()).BiPlusCircle;
                    return [2 /*return*/, BiPlusCircle];
                case 1177: return [4 /*yield*/, import("react-icons/bi")];
                case 1178:
                    BiPlusMedical = (_b.sent()).BiPlusMedical;
                    return [2 /*return*/, BiPlusMedical];
                case 1179: return [4 /*yield*/, import("react-icons/bi")];
                case 1180:
                    BiPlus = (_b.sent()).BiPlus;
                    return [2 /*return*/, BiPlus];
                case 1181: return [4 /*yield*/, import("react-icons/bi")];
                case 1182:
                    BiPodcast = (_b.sent()).BiPodcast;
                    return [2 /*return*/, BiPodcast];
                case 1183: return [4 /*yield*/, import("react-icons/bi")];
                case 1184:
                    BiPointer = (_b.sent()).BiPointer;
                    return [2 /*return*/, BiPointer];
                case 1185: return [4 /*yield*/, import("react-icons/bi")];
                case 1186:
                    BiPoll = (_b.sent()).BiPoll;
                    return [2 /*return*/, BiPoll];
                case 1187: return [4 /*yield*/, import("react-icons/bi")];
                case 1188:
                    BiPolygon = (_b.sent()).BiPolygon;
                    return [2 /*return*/, BiPolygon];
                case 1189: return [4 /*yield*/, import("react-icons/bi")];
                case 1190:
                    BiPopsicle = (_b.sent()).BiPopsicle;
                    return [2 /*return*/, BiPopsicle];
                case 1191: return [4 /*yield*/, import("react-icons/bi")];
                case 1192:
                    BiPound = (_b.sent()).BiPound;
                    return [2 /*return*/, BiPound];
                case 1193: return [4 /*yield*/, import("react-icons/bi")];
                case 1194:
                    BiPowerOff = (_b.sent()).BiPowerOff;
                    return [2 /*return*/, BiPowerOff];
                case 1195: return [4 /*yield*/, import("react-icons/bi")];
                case 1196:
                    BiPrinter = (_b.sent()).BiPrinter;
                    return [2 /*return*/, BiPrinter];
                case 1197: return [4 /*yield*/, import("react-icons/bi")];
                case 1198:
                    BiPulse = (_b.sent()).BiPulse;
                    return [2 /*return*/, BiPulse];
                case 1199: return [4 /*yield*/, import("react-icons/bi")];
                case 1200:
                    BiPurchaseTagAlt = (_b.sent()).BiPurchaseTagAlt;
                    return [2 /*return*/, BiPurchaseTagAlt];
                case 1201: return [4 /*yield*/, import("react-icons/bi")];
                case 1202:
                    BiPurchaseTag = (_b.sent()).BiPurchaseTag;
                    return [2 /*return*/, BiPurchaseTag];
                case 1203: return [4 /*yield*/, import("react-icons/bi")];
                case 1204:
                    BiPyramid = (_b.sent()).BiPyramid;
                    return [2 /*return*/, BiPyramid];
                case 1205: return [4 /*yield*/, import("react-icons/bi")];
                case 1206:
                    BiQrScan = (_b.sent()).BiQrScan;
                    return [2 /*return*/, BiQrScan];
                case 1207: return [4 /*yield*/, import("react-icons/bi")];
                case 1208:
                    BiQr = (_b.sent()).BiQr;
                    return [2 /*return*/, BiQr];
                case 1209: return [4 /*yield*/, import("react-icons/bi")];
                case 1210:
                    BiQuestionMark = (_b.sent()).BiQuestionMark;
                    return [2 /*return*/, BiQuestionMark];
                case 1211: return [4 /*yield*/, import("react-icons/bi")];
                case 1212:
                    BiRadar = (_b.sent()).BiRadar;
                    return [2 /*return*/, BiRadar];
                case 1213: return [4 /*yield*/, import("react-icons/bi")];
                case 1214:
                    BiRadioCircleMarked = (_b.sent()).BiRadioCircleMarked;
                    return [2 /*return*/, BiRadioCircleMarked];
                case 1215: return [4 /*yield*/, import("react-icons/bi")];
                case 1216:
                    BiRadioCircle = (_b.sent()).BiRadioCircle;
                    return [2 /*return*/, BiRadioCircle];
                case 1217: return [4 /*yield*/, import("react-icons/bi")];
                case 1218:
                    BiRadio = (_b.sent()).BiRadio;
                    return [2 /*return*/, BiRadio];
                case 1219: return [4 /*yield*/, import("react-icons/bi")];
                case 1220:
                    BiReceipt = (_b.sent()).BiReceipt;
                    return [2 /*return*/, BiReceipt];
                case 1221: return [4 /*yield*/, import("react-icons/bi")];
                case 1222:
                    BiRectangle = (_b.sent()).BiRectangle;
                    return [2 /*return*/, BiRectangle];
                case 1223: return [4 /*yield*/, import("react-icons/bi")];
                case 1224:
                    BiRecycle = (_b.sent()).BiRecycle;
                    return [2 /*return*/, BiRecycle];
                case 1225: return [4 /*yield*/, import("react-icons/bi")];
                case 1226:
                    BiRedo = (_b.sent()).BiRedo;
                    return [2 /*return*/, BiRedo];
                case 1227: return [4 /*yield*/, import("react-icons/bi")];
                case 1228:
                    BiReflectHorizontal = (_b.sent()).BiReflectHorizontal;
                    return [2 /*return*/, BiReflectHorizontal];
                case 1229: return [4 /*yield*/, import("react-icons/bi")];
                case 1230:
                    BiReflectVertical = (_b.sent()).BiReflectVertical;
                    return [2 /*return*/, BiReflectVertical];
                case 1231: return [4 /*yield*/, import("react-icons/bi")];
                case 1232:
                    BiRefresh = (_b.sent()).BiRefresh;
                    return [2 /*return*/, BiRefresh];
                case 1233: return [4 /*yield*/, import("react-icons/bi")];
                case 1234:
                    BiRegistered = (_b.sent()).BiRegistered;
                    return [2 /*return*/, BiRegistered];
                case 1235: return [4 /*yield*/, import("react-icons/bi")];
                case 1236:
                    BiRename = (_b.sent()).BiRename;
                    return [2 /*return*/, BiRename];
                case 1237: return [4 /*yield*/, import("react-icons/bi")];
                case 1238:
                    BiRepeat = (_b.sent()).BiRepeat;
                    return [2 /*return*/, BiRepeat];
                case 1239: return [4 /*yield*/, import("react-icons/bi")];
                case 1240:
                    BiReplyAll = (_b.sent()).BiReplyAll;
                    return [2 /*return*/, BiReplyAll];
                case 1241: return [4 /*yield*/, import("react-icons/bi")];
                case 1242:
                    BiReply = (_b.sent()).BiReply;
                    return [2 /*return*/, BiReply];
                case 1243: return [4 /*yield*/, import("react-icons/bi")];
                case 1244:
                    BiRepost = (_b.sent()).BiRepost;
                    return [2 /*return*/, BiRepost];
                case 1245: return [4 /*yield*/, import("react-icons/bi")];
                case 1246:
                    BiReset = (_b.sent()).BiReset;
                    return [2 /*return*/, BiReset];
                case 1247: return [4 /*yield*/, import("react-icons/bi")];
                case 1248:
                    BiRestaurant = (_b.sent()).BiRestaurant;
                    return [2 /*return*/, BiRestaurant];
                case 1249: return [4 /*yield*/, import("react-icons/bi")];
                case 1250:
                    BiRevision = (_b.sent()).BiRevision;
                    return [2 /*return*/, BiRevision];
                case 1251: return [4 /*yield*/, import("react-icons/bi")];
                case 1252:
                    BiRewindCircle = (_b.sent()).BiRewindCircle;
                    return [2 /*return*/, BiRewindCircle];
                case 1253: return [4 /*yield*/, import("react-icons/bi")];
                case 1254:
                    BiRewind = (_b.sent()).BiRewind;
                    return [2 /*return*/, BiRewind];
                case 1255: return [4 /*yield*/, import("react-icons/bi")];
                case 1256:
                    BiRfid = (_b.sent()).BiRfid;
                    return [2 /*return*/, BiRfid];
                case 1257: return [4 /*yield*/, import("react-icons/bi")];
                case 1258:
                    BiRightArrowAlt = (_b.sent()).BiRightArrowAlt;
                    return [2 /*return*/, BiRightArrowAlt];
                case 1259: return [4 /*yield*/, import("react-icons/bi")];
                case 1260:
                    BiRightArrowCircle = (_b.sent()).BiRightArrowCircle;
                    return [2 /*return*/, BiRightArrowCircle];
                case 1261: return [4 /*yield*/, import("react-icons/bi")];
                case 1262:
                    BiRightArrow = (_b.sent()).BiRightArrow;
                    return [2 /*return*/, BiRightArrow];
                case 1263: return [4 /*yield*/, import("react-icons/bi")];
                case 1264:
                    BiRightDownArrowCircle = (_b.sent()).BiRightDownArrowCircle;
                    return [2 /*return*/, BiRightDownArrowCircle];
                case 1265: return [4 /*yield*/, import("react-icons/bi")];
                case 1266:
                    BiRightIndent = (_b.sent()).BiRightIndent;
                    return [2 /*return*/, BiRightIndent];
                case 1267: return [4 /*yield*/, import("react-icons/bi")];
                case 1268:
                    BiRightTopArrowCircle = (_b.sent()).BiRightTopArrowCircle;
                    return [2 /*return*/, BiRightTopArrowCircle];
                case 1269: return [4 /*yield*/, import("react-icons/bi")];
                case 1270:
                    BiRocket = (_b.sent()).BiRocket;
                    return [2 /*return*/, BiRocket];
                case 1271: return [4 /*yield*/, import("react-icons/bi")];
                case 1272:
                    BiRotateLeft = (_b.sent()).BiRotateLeft;
                    return [2 /*return*/, BiRotateLeft];
                case 1273: return [4 /*yield*/, import("react-icons/bi")];
                case 1274:
                    BiRotateRight = (_b.sent()).BiRotateRight;
                    return [2 /*return*/, BiRotateRight];
                case 1275: return [4 /*yield*/, import("react-icons/bi")];
                case 1276:
                    BiRss = (_b.sent()).BiRss;
                    return [2 /*return*/, BiRss];
                case 1277: return [4 /*yield*/, import("react-icons/bi")];
                case 1278:
                    BiRuble = (_b.sent()).BiRuble;
                    return [2 /*return*/, BiRuble];
                case 1279: return [4 /*yield*/, import("react-icons/bi")];
                case 1280:
                    BiRuler = (_b.sent()).BiRuler;
                    return [2 /*return*/, BiRuler];
                case 1281: return [4 /*yield*/, import("react-icons/bi")];
                case 1282:
                    BiRun = (_b.sent()).BiRun;
                    return [2 /*return*/, BiRun];
                case 1283: return [4 /*yield*/, import("react-icons/bi")];
                case 1284:
                    BiRupee = (_b.sent()).BiRupee;
                    return [2 /*return*/, BiRupee];
                case 1285: return [4 /*yield*/, import("react-icons/bi")];
                case 1286:
                    BiSad = (_b.sent()).BiSad;
                    return [2 /*return*/, BiSad];
                case 1287: return [4 /*yield*/, import("react-icons/bi")];
                case 1288:
                    BiSave = (_b.sent()).BiSave;
                    return [2 /*return*/, BiSave];
                case 1289: return [4 /*yield*/, import("react-icons/bi")];
                case 1290:
                    BiScan = (_b.sent()).BiScan;
                    return [2 /*return*/, BiScan];
                case 1291: return [4 /*yield*/, import("react-icons/bi")];
                case 1292:
                    BiScatterChart = (_b.sent()).BiScatterChart;
                    return [2 /*return*/, BiScatterChart];
                case 1293: return [4 /*yield*/, import("react-icons/bi")];
                case 1294:
                    BiScreenshot = (_b.sent()).BiScreenshot;
                    return [2 /*return*/, BiScreenshot];
                case 1295: return [4 /*yield*/, import("react-icons/bi")];
                case 1296:
                    BiSearchAlt2 = (_b.sent()).BiSearchAlt2;
                    return [2 /*return*/, BiSearchAlt2];
                case 1297: return [4 /*yield*/, import("react-icons/bi")];
                case 1298:
                    BiSearchAlt = (_b.sent()).BiSearchAlt;
                    return [2 /*return*/, BiSearchAlt];
                case 1299: return [4 /*yield*/, import("react-icons/bi")];
                case 1300:
                    BiSearch = (_b.sent()).BiSearch;
                    return [2 /*return*/, BiSearch];
                case 1301: return [4 /*yield*/, import("react-icons/bi")];
                case 1302:
                    BiSelectMultiple = (_b.sent()).BiSelectMultiple;
                    return [2 /*return*/, BiSelectMultiple];
                case 1303: return [4 /*yield*/, import("react-icons/bi")];
                case 1304:
                    BiSelection = (_b.sent()).BiSelection;
                    return [2 /*return*/, BiSelection];
                case 1305: return [4 /*yield*/, import("react-icons/bi")];
                case 1306:
                    BiSend = (_b.sent()).BiSend;
                    return [2 /*return*/, BiSend];
                case 1307: return [4 /*yield*/, import("react-icons/bi")];
                case 1308:
                    BiServer = (_b.sent()).BiServer;
                    return [2 /*return*/, BiServer];
                case 1309: return [4 /*yield*/, import("react-icons/bi")];
                case 1310:
                    BiShapeCircle = (_b.sent()).BiShapeCircle;
                    return [2 /*return*/, BiShapeCircle];
                case 1311: return [4 /*yield*/, import("react-icons/bi")];
                case 1312:
                    BiShapePolygon = (_b.sent()).BiShapePolygon;
                    return [2 /*return*/, BiShapePolygon];
                case 1313: return [4 /*yield*/, import("react-icons/bi")];
                case 1314:
                    BiShapeSquare = (_b.sent()).BiShapeSquare;
                    return [2 /*return*/, BiShapeSquare];
                case 1315: return [4 /*yield*/, import("react-icons/bi")];
                case 1316:
                    BiShapeTriangle = (_b.sent()).BiShapeTriangle;
                    return [2 /*return*/, BiShapeTriangle];
                case 1317: return [4 /*yield*/, import("react-icons/bi")];
                case 1318:
                    BiShareAlt = (_b.sent()).BiShareAlt;
                    return [2 /*return*/, BiShareAlt];
                case 1319: return [4 /*yield*/, import("react-icons/bi")];
                case 1320:
                    BiShare = (_b.sent()).BiShare;
                    return [2 /*return*/, BiShare];
                case 1321: return [4 /*yield*/, import("react-icons/bi")];
                case 1322:
                    BiShekel = (_b.sent()).BiShekel;
                    return [2 /*return*/, BiShekel];
                case 1323: return [4 /*yield*/, import("react-icons/bi")];
                case 1324:
                    BiShieldAlt2 = (_b.sent()).BiShieldAlt2;
                    return [2 /*return*/, BiShieldAlt2];
                case 1325: return [4 /*yield*/, import("react-icons/bi")];
                case 1326:
                    BiShieldAlt = (_b.sent()).BiShieldAlt;
                    return [2 /*return*/, BiShieldAlt];
                case 1327: return [4 /*yield*/, import("react-icons/bi")];
                case 1328:
                    BiShieldMinus = (_b.sent()).BiShieldMinus;
                    return [2 /*return*/, BiShieldMinus];
                case 1329: return [4 /*yield*/, import("react-icons/bi")];
                case 1330:
                    BiShieldPlus = (_b.sent()).BiShieldPlus;
                    return [2 /*return*/, BiShieldPlus];
                case 1331: return [4 /*yield*/, import("react-icons/bi")];
                case 1332:
                    BiShieldQuarter = (_b.sent()).BiShieldQuarter;
                    return [2 /*return*/, BiShieldQuarter];
                case 1333: return [4 /*yield*/, import("react-icons/bi")];
                case 1334:
                    BiShieldX = (_b.sent()).BiShieldX;
                    return [2 /*return*/, BiShieldX];
                case 1335: return [4 /*yield*/, import("react-icons/bi")];
                case 1336:
                    BiShield = (_b.sent()).BiShield;
                    return [2 /*return*/, BiShield];
                case 1337: return [4 /*yield*/, import("react-icons/bi")];
                case 1338:
                    BiShocked = (_b.sent()).BiShocked;
                    return [2 /*return*/, BiShocked];
                case 1339: return [4 /*yield*/, import("react-icons/bi")];
                case 1340:
                    BiShoppingBag = (_b.sent()).BiShoppingBag;
                    return [2 /*return*/, BiShoppingBag];
                case 1341: return [4 /*yield*/, import("react-icons/bi")];
                case 1342:
                    BiShowAlt = (_b.sent()).BiShowAlt;
                    return [2 /*return*/, BiShowAlt];
                case 1343: return [4 /*yield*/, import("react-icons/bi")];
                case 1344:
                    BiShow = (_b.sent()).BiShow;
                    return [2 /*return*/, BiShow];
                case 1345: return [4 /*yield*/, import("react-icons/bi")];
                case 1346:
                    BiShower = (_b.sent()).BiShower;
                    return [2 /*return*/, BiShower];
                case 1347: return [4 /*yield*/, import("react-icons/bi")];
                case 1348:
                    BiShuffle = (_b.sent()).BiShuffle;
                    return [2 /*return*/, BiShuffle];
                case 1349: return [4 /*yield*/, import("react-icons/bi")];
                case 1350:
                    BiSidebar = (_b.sent()).BiSidebar;
                    return [2 /*return*/, BiSidebar];
                case 1351: return [4 /*yield*/, import("react-icons/bi")];
                case 1352:
                    BiSignal1 = (_b.sent()).BiSignal1;
                    return [2 /*return*/, BiSignal1];
                case 1353: return [4 /*yield*/, import("react-icons/bi")];
                case 1354:
                    BiSignal2 = (_b.sent()).BiSignal2;
                    return [2 /*return*/, BiSignal2];
                case 1355: return [4 /*yield*/, import("react-icons/bi")];
                case 1356:
                    BiSignal3 = (_b.sent()).BiSignal3;
                    return [2 /*return*/, BiSignal3];
                case 1357: return [4 /*yield*/, import("react-icons/bi")];
                case 1358:
                    BiSignal4 = (_b.sent()).BiSignal4;
                    return [2 /*return*/, BiSignal4];
                case 1359: return [4 /*yield*/, import("react-icons/bi")];
                case 1360:
                    BiSignal5 = (_b.sent()).BiSignal5;
                    return [2 /*return*/, BiSignal5];
                case 1361: return [4 /*yield*/, import("react-icons/bi")];
                case 1362:
                    BiSitemap = (_b.sent()).BiSitemap;
                    return [2 /*return*/, BiSitemap];
                case 1363: return [4 /*yield*/, import("react-icons/bi")];
                case 1364:
                    BiSkipNextCircle = (_b.sent()).BiSkipNextCircle;
                    return [2 /*return*/, BiSkipNextCircle];
                case 1365: return [4 /*yield*/, import("react-icons/bi")];
                case 1366:
                    BiSkipNext = (_b.sent()).BiSkipNext;
                    return [2 /*return*/, BiSkipNext];
                case 1367: return [4 /*yield*/, import("react-icons/bi")];
                case 1368:
                    BiSkipPreviousCircle = (_b.sent()).BiSkipPreviousCircle;
                    return [2 /*return*/, BiSkipPreviousCircle];
                case 1369: return [4 /*yield*/, import("react-icons/bi")];
                case 1370:
                    BiSkipPrevious = (_b.sent()).BiSkipPrevious;
                    return [2 /*return*/, BiSkipPrevious];
                case 1371: return [4 /*yield*/, import("react-icons/bi")];
                case 1372:
                    BiSleepy = (_b.sent()).BiSleepy;
                    return [2 /*return*/, BiSleepy];
                case 1373: return [4 /*yield*/, import("react-icons/bi")];
                case 1374:
                    BiSliderAlt = (_b.sent()).BiSliderAlt;
                    return [2 /*return*/, BiSliderAlt];
                case 1375: return [4 /*yield*/, import("react-icons/bi")];
                case 1376:
                    BiSlider = (_b.sent()).BiSlider;
                    return [2 /*return*/, BiSlider];
                case 1377: return [4 /*yield*/, import("react-icons/bi")];
                case 1378:
                    BiSlideshow = (_b.sent()).BiSlideshow;
                    return [2 /*return*/, BiSlideshow];
                case 1379: return [4 /*yield*/, import("react-icons/bi")];
                case 1380:
                    BiSmile = (_b.sent()).BiSmile;
                    return [2 /*return*/, BiSmile];
                case 1381: return [4 /*yield*/, import("react-icons/bi")];
                case 1382:
                    BiSortAZ = (_b.sent()).BiSortAZ;
                    return [2 /*return*/, BiSortAZ];
                case 1383: return [4 /*yield*/, import("react-icons/bi")];
                case 1384:
                    BiSortAlt2 = (_b.sent()).BiSortAlt2;
                    return [2 /*return*/, BiSortAlt2];
                case 1385: return [4 /*yield*/, import("react-icons/bi")];
                case 1386:
                    BiSortDown = (_b.sent()).BiSortDown;
                    return [2 /*return*/, BiSortDown];
                case 1387: return [4 /*yield*/, import("react-icons/bi")];
                case 1388:
                    BiSortUp = (_b.sent()).BiSortUp;
                    return [2 /*return*/, BiSortUp];
                case 1389: return [4 /*yield*/, import("react-icons/bi")];
                case 1390:
                    BiSortZA = (_b.sent()).BiSortZA;
                    return [2 /*return*/, BiSortZA];
                case 1391: return [4 /*yield*/, import("react-icons/bi")];
                case 1392:
                    BiSort = (_b.sent()).BiSort;
                    return [2 /*return*/, BiSort];
                case 1393: return [4 /*yield*/, import("react-icons/bi")];
                case 1394:
                    BiSpa = (_b.sent()).BiSpa;
                    return [2 /*return*/, BiSpa];
                case 1395: return [4 /*yield*/, import("react-icons/bi")];
                case 1396:
                    BiSpaceBar = (_b.sent()).BiSpaceBar;
                    return [2 /*return*/, BiSpaceBar];
                case 1397: return [4 /*yield*/, import("react-icons/bi")];
                case 1398:
                    BiSpeaker = (_b.sent()).BiSpeaker;
                    return [2 /*return*/, BiSpeaker];
                case 1399: return [4 /*yield*/, import("react-icons/bi")];
                case 1400:
                    BiSprayCan = (_b.sent()).BiSprayCan;
                    return [2 /*return*/, BiSprayCan];
                case 1401: return [4 /*yield*/, import("react-icons/bi")];
                case 1402:
                    BiSpreadsheet = (_b.sent()).BiSpreadsheet;
                    return [2 /*return*/, BiSpreadsheet];
                case 1403: return [4 /*yield*/, import("react-icons/bi")];
                case 1404:
                    BiSquareRounded = (_b.sent()).BiSquareRounded;
                    return [2 /*return*/, BiSquareRounded];
                case 1405: return [4 /*yield*/, import("react-icons/bi")];
                case 1406:
                    BiSquare = (_b.sent()).BiSquare;
                    return [2 /*return*/, BiSquare];
                case 1407: return [4 /*yield*/, import("react-icons/bi")];
                case 1408:
                    BiStar = (_b.sent()).BiStar;
                    return [2 /*return*/, BiStar];
                case 1409: return [4 /*yield*/, import("react-icons/bi")];
                case 1410:
                    BiStation = (_b.sent()).BiStation;
                    return [2 /*return*/, BiStation];
                case 1411: return [4 /*yield*/, import("react-icons/bi")];
                case 1412:
                    BiStats = (_b.sent()).BiStats;
                    return [2 /*return*/, BiStats];
                case 1413: return [4 /*yield*/, import("react-icons/bi")];
                case 1414:
                    BiSticker = (_b.sent()).BiSticker;
                    return [2 /*return*/, BiSticker];
                case 1415: return [4 /*yield*/, import("react-icons/bi")];
                case 1416:
                    BiStopCircle = (_b.sent()).BiStopCircle;
                    return [2 /*return*/, BiStopCircle];
                case 1417: return [4 /*yield*/, import("react-icons/bi")];
                case 1418:
                    BiStop = (_b.sent()).BiStop;
                    return [2 /*return*/, BiStop];
                case 1419: return [4 /*yield*/, import("react-icons/bi")];
                case 1420:
                    BiStopwatch = (_b.sent()).BiStopwatch;
                    return [2 /*return*/, BiStopwatch];
                case 1421: return [4 /*yield*/, import("react-icons/bi")];
                case 1422:
                    BiStoreAlt = (_b.sent()).BiStoreAlt;
                    return [2 /*return*/, BiStoreAlt];
                case 1423: return [4 /*yield*/, import("react-icons/bi")];
                case 1424:
                    BiStore = (_b.sent()).BiStore;
                    return [2 /*return*/, BiStore];
                case 1425: return [4 /*yield*/, import("react-icons/bi")];
                case 1426:
                    BiStreetView = (_b.sent()).BiStreetView;
                    return [2 /*return*/, BiStreetView];
                case 1427: return [4 /*yield*/, import("react-icons/bi")];
                case 1428:
                    BiStrikethrough = (_b.sent()).BiStrikethrough;
                    return [2 /*return*/, BiStrikethrough];
                case 1429: return [4 /*yield*/, import("react-icons/bi")];
                case 1430:
                    BiSubdirectoryLeft = (_b.sent()).BiSubdirectoryLeft;
                    return [2 /*return*/, BiSubdirectoryLeft];
                case 1431: return [4 /*yield*/, import("react-icons/bi")];
                case 1432:
                    BiSubdirectoryRight = (_b.sent()).BiSubdirectoryRight;
                    return [2 /*return*/, BiSubdirectoryRight];
                case 1433: return [4 /*yield*/, import("react-icons/bi")];
                case 1434:
                    BiSun = (_b.sent()).BiSun;
                    return [2 /*return*/, BiSun];
                case 1435: return [4 /*yield*/, import("react-icons/bi")];
                case 1436:
                    BiSupport = (_b.sent()).BiSupport;
                    return [2 /*return*/, BiSupport];
                case 1437: return [4 /*yield*/, import("react-icons/bi")];
                case 1438:
                    BiSushi = (_b.sent()).BiSushi;
                    return [2 /*return*/, BiSushi];
                case 1439: return [4 /*yield*/, import("react-icons/bi")];
                case 1440:
                    BiSwim = (_b.sent()).BiSwim;
                    return [2 /*return*/, BiSwim];
                case 1441: return [4 /*yield*/, import("react-icons/bi")];
                case 1442:
                    BiSync = (_b.sent()).BiSync;
                    return [2 /*return*/, BiSync];
                case 1443: return [4 /*yield*/, import("react-icons/bi")];
                case 1444:
                    BiTab = (_b.sent()).BiTab;
                    return [2 /*return*/, BiTab];
                case 1445: return [4 /*yield*/, import("react-icons/bi")];
                case 1446:
                    BiTable = (_b.sent()).BiTable;
                    return [2 /*return*/, BiTable];
                case 1447: return [4 /*yield*/, import("react-icons/bi")];
                case 1448:
                    BiTachometer = (_b.sent()).BiTachometer;
                    return [2 /*return*/, BiTachometer];
                case 1449: return [4 /*yield*/, import("react-icons/bi")];
                case 1450:
                    BiTagAlt = (_b.sent()).BiTagAlt;
                    return [2 /*return*/, BiTagAlt];
                case 1451: return [4 /*yield*/, import("react-icons/bi")];
                case 1452:
                    BiTag = (_b.sent()).BiTag;
                    return [2 /*return*/, BiTag];
                case 1453: return [4 /*yield*/, import("react-icons/bi")];
                case 1454:
                    BiTargetLock = (_b.sent()).BiTargetLock;
                    return [2 /*return*/, BiTargetLock];
                case 1455: return [4 /*yield*/, import("react-icons/bi")];
                case 1456:
                    BiTaskX = (_b.sent()).BiTaskX;
                    return [2 /*return*/, BiTaskX];
                case 1457: return [4 /*yield*/, import("react-icons/bi")];
                case 1458:
                    BiTask = (_b.sent()).BiTask;
                    return [2 /*return*/, BiTask];
                case 1459: return [4 /*yield*/, import("react-icons/bi")];
                case 1460:
                    BiTaxi = (_b.sent()).BiTaxi;
                    return [2 /*return*/, BiTaxi];
                case 1461: return [4 /*yield*/, import("react-icons/bi")];
                case 1462:
                    BiTennisBall = (_b.sent()).BiTennisBall;
                    return [2 /*return*/, BiTennisBall];
                case 1463: return [4 /*yield*/, import("react-icons/bi")];
                case 1464:
                    BiTerminal = (_b.sent()).BiTerminal;
                    return [2 /*return*/, BiTerminal];
                case 1465: return [4 /*yield*/, import("react-icons/bi")];
                case 1466:
                    BiTestTube = (_b.sent()).BiTestTube;
                    return [2 /*return*/, BiTestTube];
                case 1467: return [4 /*yield*/, import("react-icons/bi")];
                case 1468:
                    BiText = (_b.sent()).BiText;
                    return [2 /*return*/, BiText];
                case 1469: return [4 /*yield*/, import("react-icons/bi")];
                case 1470:
                    BiTimeFive = (_b.sent()).BiTimeFive;
                    return [2 /*return*/, BiTimeFive];
                case 1471: return [4 /*yield*/, import("react-icons/bi")];
                case 1472:
                    BiTime = (_b.sent()).BiTime;
                    return [2 /*return*/, BiTime];
                case 1473: return [4 /*yield*/, import("react-icons/bi")];
                case 1474:
                    BiTimer = (_b.sent()).BiTimer;
                    return [2 /*return*/, BiTimer];
                case 1475: return [4 /*yield*/, import("react-icons/bi")];
                case 1476:
                    BiTired = (_b.sent()).BiTired;
                    return [2 /*return*/, BiTired];
                case 1477: return [4 /*yield*/, import("react-icons/bi")];
                case 1478:
                    BiToggleLeft = (_b.sent()).BiToggleLeft;
                    return [2 /*return*/, BiToggleLeft];
                case 1479: return [4 /*yield*/, import("react-icons/bi")];
                case 1480:
                    BiToggleRight = (_b.sent()).BiToggleRight;
                    return [2 /*return*/, BiToggleRight];
                case 1481: return [4 /*yield*/, import("react-icons/bi")];
                case 1482:
                    BiTone = (_b.sent()).BiTone;
                    return [2 /*return*/, BiTone];
                case 1483: return [4 /*yield*/, import("react-icons/bi")];
                case 1484:
                    BiTrafficCone = (_b.sent()).BiTrafficCone;
                    return [2 /*return*/, BiTrafficCone];
                case 1485: return [4 /*yield*/, import("react-icons/bi")];
                case 1486:
                    BiTrain = (_b.sent()).BiTrain;
                    return [2 /*return*/, BiTrain];
                case 1487: return [4 /*yield*/, import("react-icons/bi")];
                case 1488:
                    BiTransferAlt = (_b.sent()).BiTransferAlt;
                    return [2 /*return*/, BiTransferAlt];
                case 1489: return [4 /*yield*/, import("react-icons/bi")];
                case 1490:
                    BiTransfer = (_b.sent()).BiTransfer;
                    return [2 /*return*/, BiTransfer];
                case 1491: return [4 /*yield*/, import("react-icons/bi")];
                case 1492:
                    BiTrashAlt = (_b.sent()).BiTrashAlt;
                    return [2 /*return*/, BiTrashAlt];
                case 1493: return [4 /*yield*/, import("react-icons/bi")];
                case 1494:
                    BiTrash = (_b.sent()).BiTrash;
                    return [2 /*return*/, BiTrash];
                case 1495: return [4 /*yield*/, import("react-icons/bi")];
                case 1496:
                    BiTrendingDown = (_b.sent()).BiTrendingDown;
                    return [2 /*return*/, BiTrendingDown];
                case 1497: return [4 /*yield*/, import("react-icons/bi")];
                case 1498:
                    BiTrendingUp = (_b.sent()).BiTrendingUp;
                    return [2 /*return*/, BiTrendingUp];
                case 1499: return [4 /*yield*/, import("react-icons/bi")];
                case 1500:
                    BiTrim = (_b.sent()).BiTrim;
                    return [2 /*return*/, BiTrim];
                case 1501: return [4 /*yield*/, import("react-icons/bi")];
                case 1502:
                    BiTrip = (_b.sent()).BiTrip;
                    return [2 /*return*/, BiTrip];
                case 1503: return [4 /*yield*/, import("react-icons/bi")];
                case 1504:
                    BiTrophy = (_b.sent()).BiTrophy;
                    return [2 /*return*/, BiTrophy];
                case 1505: return [4 /*yield*/, import("react-icons/bi")];
                case 1506:
                    BiTv = (_b.sent()).BiTv;
                    return [2 /*return*/, BiTv];
                case 1507: return [4 /*yield*/, import("react-icons/bi")];
                case 1508:
                    BiUnderline = (_b.sent()).BiUnderline;
                    return [2 /*return*/, BiUnderline];
                case 1509: return [4 /*yield*/, import("react-icons/bi")];
                case 1510:
                    BiUndo = (_b.sent()).BiUndo;
                    return [2 /*return*/, BiUndo];
                case 1511: return [4 /*yield*/, import("react-icons/bi")];
                case 1512:
                    BiUnite = (_b.sent()).BiUnite;
                    return [2 /*return*/, BiUnite];
                case 1513: return [4 /*yield*/, import("react-icons/bi")];
                case 1514:
                    BiUniversalAccess = (_b.sent()).BiUniversalAccess;
                    return [2 /*return*/, BiUniversalAccess];
                case 1515: return [4 /*yield*/, import("react-icons/bi")];
                case 1516:
                    BiUnlink = (_b.sent()).BiUnlink;
                    return [2 /*return*/, BiUnlink];
                case 1517: return [4 /*yield*/, import("react-icons/bi")];
                case 1518:
                    BiUpArrowAlt = (_b.sent()).BiUpArrowAlt;
                    return [2 /*return*/, BiUpArrowAlt];
                case 1519: return [4 /*yield*/, import("react-icons/bi")];
                case 1520:
                    BiUpArrowCircle = (_b.sent()).BiUpArrowCircle;
                    return [2 /*return*/, BiUpArrowCircle];
                case 1521: return [4 /*yield*/, import("react-icons/bi")];
                case 1522:
                    BiUpArrow = (_b.sent()).BiUpArrow;
                    return [2 /*return*/, BiUpArrow];
                case 1523: return [4 /*yield*/, import("react-icons/bi")];
                case 1524:
                    BiUpload = (_b.sent()).BiUpload;
                    return [2 /*return*/, BiUpload];
                case 1525: return [4 /*yield*/, import("react-icons/bi")];
                case 1526:
                    BiUpsideDown = (_b.sent()).BiUpsideDown;
                    return [2 /*return*/, BiUpsideDown];
                case 1527: return [4 /*yield*/, import("react-icons/bi")];
                case 1528:
                    BiUpvote = (_b.sent()).BiUpvote;
                    return [2 /*return*/, BiUpvote];
                case 1529: return [4 /*yield*/, import("react-icons/bi")];
                case 1530:
                    BiUsb = (_b.sent()).BiUsb;
                    return [2 /*return*/, BiUsb];
                case 1531: return [4 /*yield*/, import("react-icons/bi")];
                case 1532:
                    BiUserCheck = (_b.sent()).BiUserCheck;
                    return [2 /*return*/, BiUserCheck];
                case 1533: return [4 /*yield*/, import("react-icons/bi")];
                case 1534:
                    BiUserCircle = (_b.sent()).BiUserCircle;
                    return [2 /*return*/, BiUserCircle];
                case 1535: return [4 /*yield*/, import("react-icons/bi")];
                case 1536:
                    BiUserMinus = (_b.sent()).BiUserMinus;
                    return [2 /*return*/, BiUserMinus];
                case 1537: return [4 /*yield*/, import("react-icons/bi")];
                case 1538:
                    BiUserPin = (_b.sent()).BiUserPin;
                    return [2 /*return*/, BiUserPin];
                case 1539: return [4 /*yield*/, import("react-icons/bi")];
                case 1540:
                    BiUserPlus = (_b.sent()).BiUserPlus;
                    return [2 /*return*/, BiUserPlus];
                case 1541: return [4 /*yield*/, import("react-icons/bi")];
                case 1542:
                    BiUserVoice = (_b.sent()).BiUserVoice;
                    return [2 /*return*/, BiUserVoice];
                case 1543: return [4 /*yield*/, import("react-icons/bi")];
                case 1544:
                    BiUserX = (_b.sent()).BiUserX;
                    return [2 /*return*/, BiUserX];
                case 1545: return [4 /*yield*/, import("react-icons/bi")];
                case 1546:
                    BiUser = (_b.sent()).BiUser;
                    return [2 /*return*/, BiUser];
                case 1547: return [4 /*yield*/, import("react-icons/bi")];
                case 1548:
                    BiVector = (_b.sent()).BiVector;
                    return [2 /*return*/, BiVector];
                case 1549: return [4 /*yield*/, import("react-icons/bi")];
                case 1550:
                    BiVerticalBottom = (_b.sent()).BiVerticalBottom;
                    return [2 /*return*/, BiVerticalBottom];
                case 1551: return [4 /*yield*/, import("react-icons/bi")];
                case 1552:
                    BiVerticalCenter = (_b.sent()).BiVerticalCenter;
                    return [2 /*return*/, BiVerticalCenter];
                case 1553: return [4 /*yield*/, import("react-icons/bi")];
                case 1554:
                    BiVerticalTop = (_b.sent()).BiVerticalTop;
                    return [2 /*return*/, BiVerticalTop];
                case 1555: return [4 /*yield*/, import("react-icons/bi")];
                case 1556:
                    BiVial = (_b.sent()).BiVial;
                    return [2 /*return*/, BiVial];
                case 1557: return [4 /*yield*/, import("react-icons/bi")];
                case 1558:
                    BiVideoOff = (_b.sent()).BiVideoOff;
                    return [2 /*return*/, BiVideoOff];
                case 1559: return [4 /*yield*/, import("react-icons/bi")];
                case 1560:
                    BiVideoPlus = (_b.sent()).BiVideoPlus;
                    return [2 /*return*/, BiVideoPlus];
                case 1561: return [4 /*yield*/, import("react-icons/bi")];
                case 1562:
                    BiVideoRecording = (_b.sent()).BiVideoRecording;
                    return [2 /*return*/, BiVideoRecording];
                case 1563: return [4 /*yield*/, import("react-icons/bi")];
                case 1564:
                    BiVideo = (_b.sent()).BiVideo;
                    return [2 /*return*/, BiVideo];
                case 1565: return [4 /*yield*/, import("react-icons/bi")];
                case 1566:
                    BiVoicemail = (_b.sent()).BiVoicemail;
                    return [2 /*return*/, BiVoicemail];
                case 1567: return [4 /*yield*/, import("react-icons/bi")];
                case 1568:
                    BiVolumeFull = (_b.sent()).BiVolumeFull;
                    return [2 /*return*/, BiVolumeFull];
                case 1569: return [4 /*yield*/, import("react-icons/bi")];
                case 1570:
                    BiVolumeLow = (_b.sent()).BiVolumeLow;
                    return [2 /*return*/, BiVolumeLow];
                case 1571: return [4 /*yield*/, import("react-icons/bi")];
                case 1572:
                    BiVolumeMute = (_b.sent()).BiVolumeMute;
                    return [2 /*return*/, BiVolumeMute];
                case 1573: return [4 /*yield*/, import("react-icons/bi")];
                case 1574:
                    BiVolume = (_b.sent()).BiVolume;
                    return [2 /*return*/, BiVolume];
                case 1575: return [4 /*yield*/, import("react-icons/bi")];
                case 1576:
                    BiWalk = (_b.sent()).BiWalk;
                    return [2 /*return*/, BiWalk];
                case 1577: return [4 /*yield*/, import("react-icons/bi")];
                case 1578:
                    BiWalletAlt = (_b.sent()).BiWalletAlt;
                    return [2 /*return*/, BiWalletAlt];
                case 1579: return [4 /*yield*/, import("react-icons/bi")];
                case 1580:
                    BiWallet = (_b.sent()).BiWallet;
                    return [2 /*return*/, BiWallet];
                case 1581: return [4 /*yield*/, import("react-icons/bi")];
                case 1582:
                    BiWater = (_b.sent()).BiWater;
                    return [2 /*return*/, BiWater];
                case 1583: return [4 /*yield*/, import("react-icons/bi")];
                case 1584:
                    BiWebcam = (_b.sent()).BiWebcam;
                    return [2 /*return*/, BiWebcam];
                case 1585: return [4 /*yield*/, import("react-icons/bi")];
                case 1586:
                    BiWifi0 = (_b.sent()).BiWifi0;
                    return [2 /*return*/, BiWifi0];
                case 1587: return [4 /*yield*/, import("react-icons/bi")];
                case 1588:
                    BiWifi1 = (_b.sent()).BiWifi1;
                    return [2 /*return*/, BiWifi1];
                case 1589: return [4 /*yield*/, import("react-icons/bi")];
                case 1590:
                    BiWifi2 = (_b.sent()).BiWifi2;
                    return [2 /*return*/, BiWifi2];
                case 1591: return [4 /*yield*/, import("react-icons/bi")];
                case 1592:
                    BiWifiOff = (_b.sent()).BiWifiOff;
                    return [2 /*return*/, BiWifiOff];
                case 1593: return [4 /*yield*/, import("react-icons/bi")];
                case 1594:
                    BiWifi = (_b.sent()).BiWifi;
                    return [2 /*return*/, BiWifi];
                case 1595: return [4 /*yield*/, import("react-icons/bi")];
                case 1596:
                    BiWind = (_b.sent()).BiWind;
                    return [2 /*return*/, BiWind];
                case 1597: return [4 /*yield*/, import("react-icons/bi")];
                case 1598:
                    BiWindowAlt = (_b.sent()).BiWindowAlt;
                    return [2 /*return*/, BiWindowAlt];
                case 1599: return [4 /*yield*/, import("react-icons/bi")];
                case 1600:
                    BiWindowClose = (_b.sent()).BiWindowClose;
                    return [2 /*return*/, BiWindowClose];
                case 1601: return [4 /*yield*/, import("react-icons/bi")];
                case 1602:
                    BiWindowOpen = (_b.sent()).BiWindowOpen;
                    return [2 /*return*/, BiWindowOpen];
                case 1603: return [4 /*yield*/, import("react-icons/bi")];
                case 1604:
                    BiWindow = (_b.sent()).BiWindow;
                    return [2 /*return*/, BiWindow];
                case 1605: return [4 /*yield*/, import("react-icons/bi")];
                case 1606:
                    BiWindows = (_b.sent()).BiWindows;
                    return [2 /*return*/, BiWindows];
                case 1607: return [4 /*yield*/, import("react-icons/bi")];
                case 1608:
                    BiWine = (_b.sent()).BiWine;
                    return [2 /*return*/, BiWine];
                case 1609: return [4 /*yield*/, import("react-icons/bi")];
                case 1610:
                    BiWinkSmile = (_b.sent()).BiWinkSmile;
                    return [2 /*return*/, BiWinkSmile];
                case 1611: return [4 /*yield*/, import("react-icons/bi")];
                case 1612:
                    BiWinkTongue = (_b.sent()).BiWinkTongue;
                    return [2 /*return*/, BiWinkTongue];
                case 1613: return [4 /*yield*/, import("react-icons/bi")];
                case 1614:
                    BiWon = (_b.sent()).BiWon;
                    return [2 /*return*/, BiWon];
                case 1615: return [4 /*yield*/, import("react-icons/bi")];
                case 1616:
                    BiWorld = (_b.sent()).BiWorld;
                    return [2 /*return*/, BiWorld];
                case 1617: return [4 /*yield*/, import("react-icons/bi")];
                case 1618:
                    BiWrench = (_b.sent()).BiWrench;
                    return [2 /*return*/, BiWrench];
                case 1619: return [4 /*yield*/, import("react-icons/bi")];
                case 1620:
                    BiXCircle = (_b.sent()).BiXCircle;
                    return [2 /*return*/, BiXCircle];
                case 1621: return [4 /*yield*/, import("react-icons/bi")];
                case 1622:
                    BiX = (_b.sent()).BiX;
                    return [2 /*return*/, BiX];
                case 1623: return [4 /*yield*/, import("react-icons/bi")];
                case 1624:
                    BiYen = (_b.sent()).BiYen;
                    return [2 /*return*/, BiYen];
                case 1625: return [4 /*yield*/, import("react-icons/bi")];
                case 1626:
                    BiZoomIn = (_b.sent()).BiZoomIn;
                    return [2 /*return*/, BiZoomIn];
                case 1627: return [4 /*yield*/, import("react-icons/bi")];
                case 1628:
                    BiZoomOut = (_b.sent()).BiZoomOut;
                    return [2 /*return*/, BiZoomOut];
                case 1629: return [4 /*yield*/, import("react-icons/bi")];
                case 1630:
                    BiSolidAddToQueue = (_b.sent()).BiSolidAddToQueue;
                    return [2 /*return*/, BiSolidAddToQueue];
                case 1631: return [4 /*yield*/, import("react-icons/bi")];
                case 1632:
                    BiSolidAdjustAlt = (_b.sent()).BiSolidAdjustAlt;
                    return [2 /*return*/, BiSolidAdjustAlt];
                case 1633: return [4 /*yield*/, import("react-icons/bi")];
                case 1634:
                    BiSolidAdjust = (_b.sent()).BiSolidAdjust;
                    return [2 /*return*/, BiSolidAdjust];
                case 1635: return [4 /*yield*/, import("react-icons/bi")];
                case 1636:
                    BiSolidAlarmAdd = (_b.sent()).BiSolidAlarmAdd;
                    return [2 /*return*/, BiSolidAlarmAdd];
                case 1637: return [4 /*yield*/, import("react-icons/bi")];
                case 1638:
                    BiSolidAlarmExclamation = (_b.sent()).BiSolidAlarmExclamation;
                    return [2 /*return*/, BiSolidAlarmExclamation];
                case 1639: return [4 /*yield*/, import("react-icons/bi")];
                case 1640:
                    BiSolidAlarmOff = (_b.sent()).BiSolidAlarmOff;
                    return [2 /*return*/, BiSolidAlarmOff];
                case 1641: return [4 /*yield*/, import("react-icons/bi")];
                case 1642:
                    BiSolidAlarmSnooze = (_b.sent()).BiSolidAlarmSnooze;
                    return [2 /*return*/, BiSolidAlarmSnooze];
                case 1643: return [4 /*yield*/, import("react-icons/bi")];
                case 1644:
                    BiSolidAlarm = (_b.sent()).BiSolidAlarm;
                    return [2 /*return*/, BiSolidAlarm];
                case 1645: return [4 /*yield*/, import("react-icons/bi")];
                case 1646:
                    BiSolidAlbum = (_b.sent()).BiSolidAlbum;
                    return [2 /*return*/, BiSolidAlbum];
                case 1647: return [4 /*yield*/, import("react-icons/bi")];
                case 1648:
                    BiSolidAmbulance = (_b.sent()).BiSolidAmbulance;
                    return [2 /*return*/, BiSolidAmbulance];
                case 1649: return [4 /*yield*/, import("react-icons/bi")];
                case 1650:
                    BiSolidAnalyse = (_b.sent()).BiSolidAnalyse;
                    return [2 /*return*/, BiSolidAnalyse];
                case 1651: return [4 /*yield*/, import("react-icons/bi")];
                case 1652:
                    BiSolidAngry = (_b.sent()).BiSolidAngry;
                    return [2 /*return*/, BiSolidAngry];
                case 1653: return [4 /*yield*/, import("react-icons/bi")];
                case 1654:
                    BiSolidArch = (_b.sent()).BiSolidArch;
                    return [2 /*return*/, BiSolidArch];
                case 1655: return [4 /*yield*/, import("react-icons/bi")];
                case 1656:
                    BiSolidArchiveIn = (_b.sent()).BiSolidArchiveIn;
                    return [2 /*return*/, BiSolidArchiveIn];
                case 1657: return [4 /*yield*/, import("react-icons/bi")];
                case 1658:
                    BiSolidArchiveOut = (_b.sent()).BiSolidArchiveOut;
                    return [2 /*return*/, BiSolidArchiveOut];
                case 1659: return [4 /*yield*/, import("react-icons/bi")];
                case 1660:
                    BiSolidArchive = (_b.sent()).BiSolidArchive;
                    return [2 /*return*/, BiSolidArchive];
                case 1661: return [4 /*yield*/, import("react-icons/bi")];
                case 1662:
                    BiSolidArea = (_b.sent()).BiSolidArea;
                    return [2 /*return*/, BiSolidArea];
                case 1663: return [4 /*yield*/, import("react-icons/bi")];
                case 1664:
                    BiSolidArrowFromBottom = (_b.sent()).BiSolidArrowFromBottom;
                    return [2 /*return*/, BiSolidArrowFromBottom];
                case 1665: return [4 /*yield*/, import("react-icons/bi")];
                case 1666:
                    BiSolidArrowFromLeft = (_b.sent()).BiSolidArrowFromLeft;
                    return [2 /*return*/, BiSolidArrowFromLeft];
                case 1667: return [4 /*yield*/, import("react-icons/bi")];
                case 1668:
                    BiSolidArrowFromRight = (_b.sent()).BiSolidArrowFromRight;
                    return [2 /*return*/, BiSolidArrowFromRight];
                case 1669: return [4 /*yield*/, import("react-icons/bi")];
                case 1670:
                    BiSolidArrowFromTop = (_b.sent()).BiSolidArrowFromTop;
                    return [2 /*return*/, BiSolidArrowFromTop];
                case 1671: return [4 /*yield*/, import("react-icons/bi")];
                case 1672:
                    BiSolidArrowToBottom = (_b.sent()).BiSolidArrowToBottom;
                    return [2 /*return*/, BiSolidArrowToBottom];
                case 1673: return [4 /*yield*/, import("react-icons/bi")];
                case 1674:
                    BiSolidArrowToLeft = (_b.sent()).BiSolidArrowToLeft;
                    return [2 /*return*/, BiSolidArrowToLeft];
                case 1675: return [4 /*yield*/, import("react-icons/bi")];
                case 1676:
                    BiSolidArrowToRight = (_b.sent()).BiSolidArrowToRight;
                    return [2 /*return*/, BiSolidArrowToRight];
                case 1677: return [4 /*yield*/, import("react-icons/bi")];
                case 1678:
                    BiSolidArrowToTop = (_b.sent()).BiSolidArrowToTop;
                    return [2 /*return*/, BiSolidArrowToTop];
                case 1679: return [4 /*yield*/, import("react-icons/bi")];
                case 1680:
                    BiSolidAward = (_b.sent()).BiSolidAward;
                    return [2 /*return*/, BiSolidAward];
                case 1681: return [4 /*yield*/, import("react-icons/bi")];
                case 1682:
                    BiSolidBabyCarriage = (_b.sent()).BiSolidBabyCarriage;
                    return [2 /*return*/, BiSolidBabyCarriage];
                case 1683: return [4 /*yield*/, import("react-icons/bi")];
                case 1684:
                    BiSolidBackpack = (_b.sent()).BiSolidBackpack;
                    return [2 /*return*/, BiSolidBackpack];
                case 1685: return [4 /*yield*/, import("react-icons/bi")];
                case 1686:
                    BiSolidBadgeCheck = (_b.sent()).BiSolidBadgeCheck;
                    return [2 /*return*/, BiSolidBadgeCheck];
                case 1687: return [4 /*yield*/, import("react-icons/bi")];
                case 1688:
                    BiSolidBadgeDollar = (_b.sent()).BiSolidBadgeDollar;
                    return [2 /*return*/, BiSolidBadgeDollar];
                case 1689: return [4 /*yield*/, import("react-icons/bi")];
                case 1690:
                    BiSolidBadge = (_b.sent()).BiSolidBadge;
                    return [2 /*return*/, BiSolidBadge];
                case 1691: return [4 /*yield*/, import("react-icons/bi")];
                case 1692:
                    BiSolidBaguette = (_b.sent()).BiSolidBaguette;
                    return [2 /*return*/, BiSolidBaguette];
                case 1693: return [4 /*yield*/, import("react-icons/bi")];
                case 1694:
                    BiSolidBall = (_b.sent()).BiSolidBall;
                    return [2 /*return*/, BiSolidBall];
                case 1695: return [4 /*yield*/, import("react-icons/bi")];
                case 1696:
                    BiSolidBalloon = (_b.sent()).BiSolidBalloon;
                    return [2 /*return*/, BiSolidBalloon];
                case 1697: return [4 /*yield*/, import("react-icons/bi")];
                case 1698:
                    BiSolidBandAid = (_b.sent()).BiSolidBandAid;
                    return [2 /*return*/, BiSolidBandAid];
                case 1699: return [4 /*yield*/, import("react-icons/bi")];
                case 1700:
                    BiSolidBank = (_b.sent()).BiSolidBank;
                    return [2 /*return*/, BiSolidBank];
                case 1701: return [4 /*yield*/, import("react-icons/bi")];
                case 1702:
                    BiSolidBarChartAlt2 = (_b.sent()).BiSolidBarChartAlt2;
                    return [2 /*return*/, BiSolidBarChartAlt2];
                case 1703: return [4 /*yield*/, import("react-icons/bi")];
                case 1704:
                    BiSolidBarChartSquare = (_b.sent()).BiSolidBarChartSquare;
                    return [2 /*return*/, BiSolidBarChartSquare];
                case 1705: return [4 /*yield*/, import("react-icons/bi")];
                case 1706:
                    BiSolidBarcode = (_b.sent()).BiSolidBarcode;
                    return [2 /*return*/, BiSolidBarcode];
                case 1707: return [4 /*yield*/, import("react-icons/bi")];
                case 1708:
                    BiSolidBaseball = (_b.sent()).BiSolidBaseball;
                    return [2 /*return*/, BiSolidBaseball];
                case 1709: return [4 /*yield*/, import("react-icons/bi")];
                case 1710:
                    BiSolidBasket = (_b.sent()).BiSolidBasket;
                    return [2 /*return*/, BiSolidBasket];
                case 1711: return [4 /*yield*/, import("react-icons/bi")];
                case 1712:
                    BiSolidBasketball = (_b.sent()).BiSolidBasketball;
                    return [2 /*return*/, BiSolidBasketball];
                case 1713: return [4 /*yield*/, import("react-icons/bi")];
                case 1714:
                    BiSolidBath = (_b.sent()).BiSolidBath;
                    return [2 /*return*/, BiSolidBath];
                case 1715: return [4 /*yield*/, import("react-icons/bi")];
                case 1716:
                    BiSolidBatteryCharging = (_b.sent()).BiSolidBatteryCharging;
                    return [2 /*return*/, BiSolidBatteryCharging];
                case 1717: return [4 /*yield*/, import("react-icons/bi")];
                case 1718:
                    BiSolidBatteryFull = (_b.sent()).BiSolidBatteryFull;
                    return [2 /*return*/, BiSolidBatteryFull];
                case 1719: return [4 /*yield*/, import("react-icons/bi")];
                case 1720:
                    BiSolidBatteryLow = (_b.sent()).BiSolidBatteryLow;
                    return [2 /*return*/, BiSolidBatteryLow];
                case 1721: return [4 /*yield*/, import("react-icons/bi")];
                case 1722:
                    BiSolidBattery = (_b.sent()).BiSolidBattery;
                    return [2 /*return*/, BiSolidBattery];
                case 1723: return [4 /*yield*/, import("react-icons/bi")];
                case 1724:
                    BiSolidBed = (_b.sent()).BiSolidBed;
                    return [2 /*return*/, BiSolidBed];
                case 1725: return [4 /*yield*/, import("react-icons/bi")];
                case 1726:
                    BiSolidBeenHere = (_b.sent()).BiSolidBeenHere;
                    return [2 /*return*/, BiSolidBeenHere];
                case 1727: return [4 /*yield*/, import("react-icons/bi")];
                case 1728:
                    BiSolidBeer = (_b.sent()).BiSolidBeer;
                    return [2 /*return*/, BiSolidBeer];
                case 1729: return [4 /*yield*/, import("react-icons/bi")];
                case 1730:
                    BiSolidBellMinus = (_b.sent()).BiSolidBellMinus;
                    return [2 /*return*/, BiSolidBellMinus];
                case 1731: return [4 /*yield*/, import("react-icons/bi")];
                case 1732:
                    BiSolidBellOff = (_b.sent()).BiSolidBellOff;
                    return [2 /*return*/, BiSolidBellOff];
                case 1733: return [4 /*yield*/, import("react-icons/bi")];
                case 1734:
                    BiSolidBellPlus = (_b.sent()).BiSolidBellPlus;
                    return [2 /*return*/, BiSolidBellPlus];
                case 1735: return [4 /*yield*/, import("react-icons/bi")];
                case 1736:
                    BiSolidBellRing = (_b.sent()).BiSolidBellRing;
                    return [2 /*return*/, BiSolidBellRing];
                case 1737: return [4 /*yield*/, import("react-icons/bi")];
                case 1738:
                    BiSolidBell = (_b.sent()).BiSolidBell;
                    return [2 /*return*/, BiSolidBell];
                case 1739: return [4 /*yield*/, import("react-icons/bi")];
                case 1740:
                    BiSolidBible = (_b.sent()).BiSolidBible;
                    return [2 /*return*/, BiSolidBible];
                case 1741: return [4 /*yield*/, import("react-icons/bi")];
                case 1742:
                    BiSolidBinoculars = (_b.sent()).BiSolidBinoculars;
                    return [2 /*return*/, BiSolidBinoculars];
                case 1743: return [4 /*yield*/, import("react-icons/bi")];
                case 1744:
                    BiSolidBlanket = (_b.sent()).BiSolidBlanket;
                    return [2 /*return*/, BiSolidBlanket];
                case 1745: return [4 /*yield*/, import("react-icons/bi")];
                case 1746:
                    BiSolidBoltCircle = (_b.sent()).BiSolidBoltCircle;
                    return [2 /*return*/, BiSolidBoltCircle];
                case 1747: return [4 /*yield*/, import("react-icons/bi")];
                case 1748:
                    BiSolidBolt = (_b.sent()).BiSolidBolt;
                    return [2 /*return*/, BiSolidBolt];
                case 1749: return [4 /*yield*/, import("react-icons/bi")];
                case 1750:
                    BiSolidBomb = (_b.sent()).BiSolidBomb;
                    return [2 /*return*/, BiSolidBomb];
                case 1751: return [4 /*yield*/, import("react-icons/bi")];
                case 1752:
                    BiSolidBone = (_b.sent()).BiSolidBone;
                    return [2 /*return*/, BiSolidBone];
                case 1753: return [4 /*yield*/, import("react-icons/bi")];
                case 1754:
                    BiSolidBong = (_b.sent()).BiSolidBong;
                    return [2 /*return*/, BiSolidBong];
                case 1755: return [4 /*yield*/, import("react-icons/bi")];
                case 1756:
                    BiSolidBookAdd = (_b.sent()).BiSolidBookAdd;
                    return [2 /*return*/, BiSolidBookAdd];
                case 1757: return [4 /*yield*/, import("react-icons/bi")];
                case 1758:
                    BiSolidBookAlt = (_b.sent()).BiSolidBookAlt;
                    return [2 /*return*/, BiSolidBookAlt];
                case 1759: return [4 /*yield*/, import("react-icons/bi")];
                case 1760:
                    BiSolidBookBookmark = (_b.sent()).BiSolidBookBookmark;
                    return [2 /*return*/, BiSolidBookBookmark];
                case 1761: return [4 /*yield*/, import("react-icons/bi")];
                case 1762:
                    BiSolidBookContent = (_b.sent()).BiSolidBookContent;
                    return [2 /*return*/, BiSolidBookContent];
                case 1763: return [4 /*yield*/, import("react-icons/bi")];
                case 1764:
                    BiSolidBookHeart = (_b.sent()).BiSolidBookHeart;
                    return [2 /*return*/, BiSolidBookHeart];
                case 1765: return [4 /*yield*/, import("react-icons/bi")];
                case 1766:
                    BiSolidBookOpen = (_b.sent()).BiSolidBookOpen;
                    return [2 /*return*/, BiSolidBookOpen];
                case 1767: return [4 /*yield*/, import("react-icons/bi")];
                case 1768:
                    BiSolidBookReader = (_b.sent()).BiSolidBookReader;
                    return [2 /*return*/, BiSolidBookReader];
                case 1769: return [4 /*yield*/, import("react-icons/bi")];
                case 1770:
                    BiSolidBook = (_b.sent()).BiSolidBook;
                    return [2 /*return*/, BiSolidBook];
                case 1771: return [4 /*yield*/, import("react-icons/bi")];
                case 1772:
                    BiSolidBookmarkAltMinus = (_b.sent()).BiSolidBookmarkAltMinus;
                    return [2 /*return*/, BiSolidBookmarkAltMinus];
                case 1773: return [4 /*yield*/, import("react-icons/bi")];
                case 1774:
                    BiSolidBookmarkAltPlus = (_b.sent()).BiSolidBookmarkAltPlus;
                    return [2 /*return*/, BiSolidBookmarkAltPlus];
                case 1775: return [4 /*yield*/, import("react-icons/bi")];
                case 1776:
                    BiSolidBookmarkAlt = (_b.sent()).BiSolidBookmarkAlt;
                    return [2 /*return*/, BiSolidBookmarkAlt];
                case 1777: return [4 /*yield*/, import("react-icons/bi")];
                case 1778:
                    BiSolidBookmarkHeart = (_b.sent()).BiSolidBookmarkHeart;
                    return [2 /*return*/, BiSolidBookmarkHeart];
                case 1779: return [4 /*yield*/, import("react-icons/bi")];
                case 1780:
                    BiSolidBookmarkMinus = (_b.sent()).BiSolidBookmarkMinus;
                    return [2 /*return*/, BiSolidBookmarkMinus];
                case 1781: return [4 /*yield*/, import("react-icons/bi")];
                case 1782:
                    BiSolidBookmarkPlus = (_b.sent()).BiSolidBookmarkPlus;
                    return [2 /*return*/, BiSolidBookmarkPlus];
                case 1783: return [4 /*yield*/, import("react-icons/bi")];
                case 1784:
                    BiSolidBookmarkStar = (_b.sent()).BiSolidBookmarkStar;
                    return [2 /*return*/, BiSolidBookmarkStar];
                case 1785: return [4 /*yield*/, import("react-icons/bi")];
                case 1786:
                    BiSolidBookmark = (_b.sent()).BiSolidBookmark;
                    return [2 /*return*/, BiSolidBookmark];
                case 1787: return [4 /*yield*/, import("react-icons/bi")];
                case 1788:
                    BiSolidBookmarks = (_b.sent()).BiSolidBookmarks;
                    return [2 /*return*/, BiSolidBookmarks];
                case 1789: return [4 /*yield*/, import("react-icons/bi")];
                case 1790:
                    BiSolidBot = (_b.sent()).BiSolidBot;
                    return [2 /*return*/, BiSolidBot];
                case 1791: return [4 /*yield*/, import("react-icons/bi")];
                case 1792:
                    BiSolidBowlHot = (_b.sent()).BiSolidBowlHot;
                    return [2 /*return*/, BiSolidBowlHot];
                case 1793: return [4 /*yield*/, import("react-icons/bi")];
                case 1794:
                    BiSolidBowlRice = (_b.sent()).BiSolidBowlRice;
                    return [2 /*return*/, BiSolidBowlRice];
                case 1795: return [4 /*yield*/, import("react-icons/bi")];
                case 1796:
                    BiSolidBowlingBall = (_b.sent()).BiSolidBowlingBall;
                    return [2 /*return*/, BiSolidBowlingBall];
                case 1797: return [4 /*yield*/, import("react-icons/bi")];
                case 1798:
                    BiSolidBox = (_b.sent()).BiSolidBox;
                    return [2 /*return*/, BiSolidBox];
                case 1799: return [4 /*yield*/, import("react-icons/bi")];
                case 1800:
                    BiSolidBrain = (_b.sent()).BiSolidBrain;
                    return [2 /*return*/, BiSolidBrain];
                case 1801: return [4 /*yield*/, import("react-icons/bi")];
                case 1802:
                    BiSolidBriefcaseAlt2 = (_b.sent()).BiSolidBriefcaseAlt2;
                    return [2 /*return*/, BiSolidBriefcaseAlt2];
                case 1803: return [4 /*yield*/, import("react-icons/bi")];
                case 1804:
                    BiSolidBriefcaseAlt = (_b.sent()).BiSolidBriefcaseAlt;
                    return [2 /*return*/, BiSolidBriefcaseAlt];
                case 1805: return [4 /*yield*/, import("react-icons/bi")];
                case 1806:
                    BiSolidBriefcase = (_b.sent()).BiSolidBriefcase;
                    return [2 /*return*/, BiSolidBriefcase];
                case 1807: return [4 /*yield*/, import("react-icons/bi")];
                case 1808:
                    BiSolidBrightnessHalf = (_b.sent()).BiSolidBrightnessHalf;
                    return [2 /*return*/, BiSolidBrightnessHalf];
                case 1809: return [4 /*yield*/, import("react-icons/bi")];
                case 1810:
                    BiSolidBrightness = (_b.sent()).BiSolidBrightness;
                    return [2 /*return*/, BiSolidBrightness];
                case 1811: return [4 /*yield*/, import("react-icons/bi")];
                case 1812:
                    BiSolidBrushAlt = (_b.sent()).BiSolidBrushAlt;
                    return [2 /*return*/, BiSolidBrushAlt];
                case 1813: return [4 /*yield*/, import("react-icons/bi")];
                case 1814:
                    BiSolidBrush = (_b.sent()).BiSolidBrush;
                    return [2 /*return*/, BiSolidBrush];
                case 1815: return [4 /*yield*/, import("react-icons/bi")];
                case 1816:
                    BiSolidBugAlt = (_b.sent()).BiSolidBugAlt;
                    return [2 /*return*/, BiSolidBugAlt];
                case 1817: return [4 /*yield*/, import("react-icons/bi")];
                case 1818:
                    BiSolidBug = (_b.sent()).BiSolidBug;
                    return [2 /*return*/, BiSolidBug];
                case 1819: return [4 /*yield*/, import("react-icons/bi")];
                case 1820:
                    BiSolidBuildingHouse = (_b.sent()).BiSolidBuildingHouse;
                    return [2 /*return*/, BiSolidBuildingHouse];
                case 1821: return [4 /*yield*/, import("react-icons/bi")];
                case 1822:
                    BiSolidBuilding = (_b.sent()).BiSolidBuilding;
                    return [2 /*return*/, BiSolidBuilding];
                case 1823: return [4 /*yield*/, import("react-icons/bi")];
                case 1824:
                    BiSolidBuildings = (_b.sent()).BiSolidBuildings;
                    return [2 /*return*/, BiSolidBuildings];
                case 1825: return [4 /*yield*/, import("react-icons/bi")];
                case 1826:
                    BiSolidBulb = (_b.sent()).BiSolidBulb;
                    return [2 /*return*/, BiSolidBulb];
                case 1827: return [4 /*yield*/, import("react-icons/bi")];
                case 1828:
                    BiSolidBullseye = (_b.sent()).BiSolidBullseye;
                    return [2 /*return*/, BiSolidBullseye];
                case 1829: return [4 /*yield*/, import("react-icons/bi")];
                case 1830:
                    BiSolidBuoy = (_b.sent()).BiSolidBuoy;
                    return [2 /*return*/, BiSolidBuoy];
                case 1831: return [4 /*yield*/, import("react-icons/bi")];
                case 1832:
                    BiSolidBusSchool = (_b.sent()).BiSolidBusSchool;
                    return [2 /*return*/, BiSolidBusSchool];
                case 1833: return [4 /*yield*/, import("react-icons/bi")];
                case 1834:
                    BiSolidBus = (_b.sent()).BiSolidBus;
                    return [2 /*return*/, BiSolidBus];
                case 1835: return [4 /*yield*/, import("react-icons/bi")];
                case 1836:
                    BiSolidBusiness = (_b.sent()).BiSolidBusiness;
                    return [2 /*return*/, BiSolidBusiness];
                case 1837: return [4 /*yield*/, import("react-icons/bi")];
                case 1838:
                    BiSolidCabinet = (_b.sent()).BiSolidCabinet;
                    return [2 /*return*/, BiSolidCabinet];
                case 1839: return [4 /*yield*/, import("react-icons/bi")];
                case 1840:
                    BiSolidCableCar = (_b.sent()).BiSolidCableCar;
                    return [2 /*return*/, BiSolidCableCar];
                case 1841: return [4 /*yield*/, import("react-icons/bi")];
                case 1842:
                    BiSolidCake = (_b.sent()).BiSolidCake;
                    return [2 /*return*/, BiSolidCake];
                case 1843: return [4 /*yield*/, import("react-icons/bi")];
                case 1844:
                    BiSolidCalculator = (_b.sent()).BiSolidCalculator;
                    return [2 /*return*/, BiSolidCalculator];
                case 1845: return [4 /*yield*/, import("react-icons/bi")];
                case 1846:
                    BiSolidCalendarAlt = (_b.sent()).BiSolidCalendarAlt;
                    return [2 /*return*/, BiSolidCalendarAlt];
                case 1847: return [4 /*yield*/, import("react-icons/bi")];
                case 1848:
                    BiSolidCalendarCheck = (_b.sent()).BiSolidCalendarCheck;
                    return [2 /*return*/, BiSolidCalendarCheck];
                case 1849: return [4 /*yield*/, import("react-icons/bi")];
                case 1850:
                    BiSolidCalendarEdit = (_b.sent()).BiSolidCalendarEdit;
                    return [2 /*return*/, BiSolidCalendarEdit];
                case 1851: return [4 /*yield*/, import("react-icons/bi")];
                case 1852:
                    BiSolidCalendarEvent = (_b.sent()).BiSolidCalendarEvent;
                    return [2 /*return*/, BiSolidCalendarEvent];
                case 1853: return [4 /*yield*/, import("react-icons/bi")];
                case 1854:
                    BiSolidCalendarExclamation = (_b.sent()).BiSolidCalendarExclamation;
                    return [2 /*return*/, BiSolidCalendarExclamation];
                case 1855: return [4 /*yield*/, import("react-icons/bi")];
                case 1856:
                    BiSolidCalendarHeart = (_b.sent()).BiSolidCalendarHeart;
                    return [2 /*return*/, BiSolidCalendarHeart];
                case 1857: return [4 /*yield*/, import("react-icons/bi")];
                case 1858:
                    BiSolidCalendarMinus = (_b.sent()).BiSolidCalendarMinus;
                    return [2 /*return*/, BiSolidCalendarMinus];
                case 1859: return [4 /*yield*/, import("react-icons/bi")];
                case 1860:
                    BiSolidCalendarPlus = (_b.sent()).BiSolidCalendarPlus;
                    return [2 /*return*/, BiSolidCalendarPlus];
                case 1861: return [4 /*yield*/, import("react-icons/bi")];
                case 1862:
                    BiSolidCalendarStar = (_b.sent()).BiSolidCalendarStar;
                    return [2 /*return*/, BiSolidCalendarStar];
                case 1863: return [4 /*yield*/, import("react-icons/bi")];
                case 1864:
                    BiSolidCalendarWeek = (_b.sent()).BiSolidCalendarWeek;
                    return [2 /*return*/, BiSolidCalendarWeek];
                case 1865: return [4 /*yield*/, import("react-icons/bi")];
                case 1866:
                    BiSolidCalendarX = (_b.sent()).BiSolidCalendarX;
                    return [2 /*return*/, BiSolidCalendarX];
                case 1867: return [4 /*yield*/, import("react-icons/bi")];
                case 1868:
                    BiSolidCalendar = (_b.sent()).BiSolidCalendar;
                    return [2 /*return*/, BiSolidCalendar];
                case 1869: return [4 /*yield*/, import("react-icons/bi")];
                case 1870:
                    BiSolidCameraHome = (_b.sent()).BiSolidCameraHome;
                    return [2 /*return*/, BiSolidCameraHome];
                case 1871: return [4 /*yield*/, import("react-icons/bi")];
                case 1872:
                    BiSolidCameraMovie = (_b.sent()).BiSolidCameraMovie;
                    return [2 /*return*/, BiSolidCameraMovie];
                case 1873: return [4 /*yield*/, import("react-icons/bi")];
                case 1874:
                    BiSolidCameraOff = (_b.sent()).BiSolidCameraOff;
                    return [2 /*return*/, BiSolidCameraOff];
                case 1875: return [4 /*yield*/, import("react-icons/bi")];
                case 1876:
                    BiSolidCameraPlus = (_b.sent()).BiSolidCameraPlus;
                    return [2 /*return*/, BiSolidCameraPlus];
                case 1877: return [4 /*yield*/, import("react-icons/bi")];
                case 1878:
                    BiSolidCamera = (_b.sent()).BiSolidCamera;
                    return [2 /*return*/, BiSolidCamera];
                case 1879: return [4 /*yield*/, import("react-icons/bi")];
                case 1880:
                    BiSolidCapsule = (_b.sent()).BiSolidCapsule;
                    return [2 /*return*/, BiSolidCapsule];
                case 1881: return [4 /*yield*/, import("react-icons/bi")];
                case 1882:
                    BiSolidCaptions = (_b.sent()).BiSolidCaptions;
                    return [2 /*return*/, BiSolidCaptions];
                case 1883: return [4 /*yield*/, import("react-icons/bi")];
                case 1884:
                    BiSolidCarBattery = (_b.sent()).BiSolidCarBattery;
                    return [2 /*return*/, BiSolidCarBattery];
                case 1885: return [4 /*yield*/, import("react-icons/bi")];
                case 1886:
                    BiSolidCarCrash = (_b.sent()).BiSolidCarCrash;
                    return [2 /*return*/, BiSolidCarCrash];
                case 1887: return [4 /*yield*/, import("react-icons/bi")];
                case 1888:
                    BiSolidCarGarage = (_b.sent()).BiSolidCarGarage;
                    return [2 /*return*/, BiSolidCarGarage];
                case 1889: return [4 /*yield*/, import("react-icons/bi")];
                case 1890:
                    BiSolidCarMechanic = (_b.sent()).BiSolidCarMechanic;
                    return [2 /*return*/, BiSolidCarMechanic];
                case 1891: return [4 /*yield*/, import("react-icons/bi")];
                case 1892:
                    BiSolidCarWash = (_b.sent()).BiSolidCarWash;
                    return [2 /*return*/, BiSolidCarWash];
                case 1893: return [4 /*yield*/, import("react-icons/bi")];
                case 1894:
                    BiSolidCar = (_b.sent()).BiSolidCar;
                    return [2 /*return*/, BiSolidCar];
                case 1895: return [4 /*yield*/, import("react-icons/bi")];
                case 1896:
                    BiSolidCard = (_b.sent()).BiSolidCard;
                    return [2 /*return*/, BiSolidCard];
                case 1897: return [4 /*yield*/, import("react-icons/bi")];
                case 1898:
                    BiSolidCaretDownCircle = (_b.sent()).BiSolidCaretDownCircle;
                    return [2 /*return*/, BiSolidCaretDownCircle];
                case 1899: return [4 /*yield*/, import("react-icons/bi")];
                case 1900:
                    BiSolidCaretDownSquare = (_b.sent()).BiSolidCaretDownSquare;
                    return [2 /*return*/, BiSolidCaretDownSquare];
                case 1901: return [4 /*yield*/, import("react-icons/bi")];
                case 1902:
                    BiSolidCaretLeftCircle = (_b.sent()).BiSolidCaretLeftCircle;
                    return [2 /*return*/, BiSolidCaretLeftCircle];
                case 1903: return [4 /*yield*/, import("react-icons/bi")];
                case 1904:
                    BiSolidCaretLeftSquare = (_b.sent()).BiSolidCaretLeftSquare;
                    return [2 /*return*/, BiSolidCaretLeftSquare];
                case 1905: return [4 /*yield*/, import("react-icons/bi")];
                case 1906:
                    BiSolidCaretRightCircle = (_b.sent()).BiSolidCaretRightCircle;
                    return [2 /*return*/, BiSolidCaretRightCircle];
                case 1907: return [4 /*yield*/, import("react-icons/bi")];
                case 1908:
                    BiSolidCaretRightSquare = (_b.sent()).BiSolidCaretRightSquare;
                    return [2 /*return*/, BiSolidCaretRightSquare];
                case 1909: return [4 /*yield*/, import("react-icons/bi")];
                case 1910:
                    BiSolidCaretUpCircle = (_b.sent()).BiSolidCaretUpCircle;
                    return [2 /*return*/, BiSolidCaretUpCircle];
                case 1911: return [4 /*yield*/, import("react-icons/bi")];
                case 1912:
                    BiSolidCaretUpSquare = (_b.sent()).BiSolidCaretUpSquare;
                    return [2 /*return*/, BiSolidCaretUpSquare];
                case 1913: return [4 /*yield*/, import("react-icons/bi")];
                case 1914:
                    BiSolidCarousel = (_b.sent()).BiSolidCarousel;
                    return [2 /*return*/, BiSolidCarousel];
                case 1915: return [4 /*yield*/, import("react-icons/bi")];
                case 1916:
                    BiSolidCartAdd = (_b.sent()).BiSolidCartAdd;
                    return [2 /*return*/, BiSolidCartAdd];
                case 1917: return [4 /*yield*/, import("react-icons/bi")];
                case 1918:
                    BiSolidCartAlt = (_b.sent()).BiSolidCartAlt;
                    return [2 /*return*/, BiSolidCartAlt];
                case 1919: return [4 /*yield*/, import("react-icons/bi")];
                case 1920:
                    BiSolidCartDownload = (_b.sent()).BiSolidCartDownload;
                    return [2 /*return*/, BiSolidCartDownload];
                case 1921: return [4 /*yield*/, import("react-icons/bi")];
                case 1922:
                    BiSolidCart = (_b.sent()).BiSolidCart;
                    return [2 /*return*/, BiSolidCart];
                case 1923: return [4 /*yield*/, import("react-icons/bi")];
                case 1924:
                    BiSolidCastle = (_b.sent()).BiSolidCastle;
                    return [2 /*return*/, BiSolidCastle];
                case 1925: return [4 /*yield*/, import("react-icons/bi")];
                case 1926:
                    BiSolidCat = (_b.sent()).BiSolidCat;
                    return [2 /*return*/, BiSolidCat];
                case 1927: return [4 /*yield*/, import("react-icons/bi")];
                case 1928:
                    BiSolidCategoryAlt = (_b.sent()).BiSolidCategoryAlt;
                    return [2 /*return*/, BiSolidCategoryAlt];
                case 1929: return [4 /*yield*/, import("react-icons/bi")];
                case 1930:
                    BiSolidCategory = (_b.sent()).BiSolidCategory;
                    return [2 /*return*/, BiSolidCategory];
                case 1931: return [4 /*yield*/, import("react-icons/bi")];
                case 1932:
                    BiSolidCctv = (_b.sent()).BiSolidCctv;
                    return [2 /*return*/, BiSolidCctv];
                case 1933: return [4 /*yield*/, import("react-icons/bi")];
                case 1934:
                    BiSolidCertification = (_b.sent()).BiSolidCertification;
                    return [2 /*return*/, BiSolidCertification];
                case 1935: return [4 /*yield*/, import("react-icons/bi")];
                case 1936:
                    BiSolidChalkboard = (_b.sent()).BiSolidChalkboard;
                    return [2 /*return*/, BiSolidChalkboard];
                case 1937: return [4 /*yield*/, import("react-icons/bi")];
                case 1938:
                    BiSolidChart = (_b.sent()).BiSolidChart;
                    return [2 /*return*/, BiSolidChart];
                case 1939: return [4 /*yield*/, import("react-icons/bi")];
                case 1940:
                    BiSolidChat = (_b.sent()).BiSolidChat;
                    return [2 /*return*/, BiSolidChat];
                case 1941: return [4 /*yield*/, import("react-icons/bi")];
                case 1942:
                    BiSolidCheckCircle = (_b.sent()).BiSolidCheckCircle;
                    return [2 /*return*/, BiSolidCheckCircle];
                case 1943: return [4 /*yield*/, import("react-icons/bi")];
                case 1944:
                    BiSolidCheckShield = (_b.sent()).BiSolidCheckShield;
                    return [2 /*return*/, BiSolidCheckShield];
                case 1945: return [4 /*yield*/, import("react-icons/bi")];
                case 1946:
                    BiSolidCheckSquare = (_b.sent()).BiSolidCheckSquare;
                    return [2 /*return*/, BiSolidCheckSquare];
                case 1947: return [4 /*yield*/, import("react-icons/bi")];
                case 1948:
                    BiSolidCheckboxChecked = (_b.sent()).BiSolidCheckboxChecked;
                    return [2 /*return*/, BiSolidCheckboxChecked];
                case 1949: return [4 /*yield*/, import("react-icons/bi")];
                case 1950:
                    BiSolidCheckboxMinus = (_b.sent()).BiSolidCheckboxMinus;
                    return [2 /*return*/, BiSolidCheckboxMinus];
                case 1951: return [4 /*yield*/, import("react-icons/bi")];
                case 1952:
                    BiSolidCheckbox = (_b.sent()).BiSolidCheckbox;
                    return [2 /*return*/, BiSolidCheckbox];
                case 1953: return [4 /*yield*/, import("react-icons/bi")];
                case 1954:
                    BiSolidCheese = (_b.sent()).BiSolidCheese;
                    return [2 /*return*/, BiSolidCheese];
                case 1955: return [4 /*yield*/, import("react-icons/bi")];
                case 1956:
                    BiSolidChess = (_b.sent()).BiSolidChess;
                    return [2 /*return*/, BiSolidChess];
                case 1957: return [4 /*yield*/, import("react-icons/bi")];
                case 1958:
                    BiSolidChevronDownCircle = (_b.sent()).BiSolidChevronDownCircle;
                    return [2 /*return*/, BiSolidChevronDownCircle];
                case 1959: return [4 /*yield*/, import("react-icons/bi")];
                case 1960:
                    BiSolidChevronDownSquare = (_b.sent()).BiSolidChevronDownSquare;
                    return [2 /*return*/, BiSolidChevronDownSquare];
                case 1961: return [4 /*yield*/, import("react-icons/bi")];
                case 1962:
                    BiSolidChevronDown = (_b.sent()).BiSolidChevronDown;
                    return [2 /*return*/, BiSolidChevronDown];
                case 1963: return [4 /*yield*/, import("react-icons/bi")];
                case 1964:
                    BiSolidChevronLeftCircle = (_b.sent()).BiSolidChevronLeftCircle;
                    return [2 /*return*/, BiSolidChevronLeftCircle];
                case 1965: return [4 /*yield*/, import("react-icons/bi")];
                case 1966:
                    BiSolidChevronLeftSquare = (_b.sent()).BiSolidChevronLeftSquare;
                    return [2 /*return*/, BiSolidChevronLeftSquare];
                case 1967: return [4 /*yield*/, import("react-icons/bi")];
                case 1968:
                    BiSolidChevronLeft = (_b.sent()).BiSolidChevronLeft;
                    return [2 /*return*/, BiSolidChevronLeft];
                case 1969: return [4 /*yield*/, import("react-icons/bi")];
                case 1970:
                    BiSolidChevronRightCircle = (_b.sent()).BiSolidChevronRightCircle;
                    return [2 /*return*/, BiSolidChevronRightCircle];
                case 1971: return [4 /*yield*/, import("react-icons/bi")];
                case 1972:
                    BiSolidChevronRightSquare = (_b.sent()).BiSolidChevronRightSquare;
                    return [2 /*return*/, BiSolidChevronRightSquare];
                case 1973: return [4 /*yield*/, import("react-icons/bi")];
                case 1974:
                    BiSolidChevronRight = (_b.sent()).BiSolidChevronRight;
                    return [2 /*return*/, BiSolidChevronRight];
                case 1975: return [4 /*yield*/, import("react-icons/bi")];
                case 1976:
                    BiSolidChevronUpCircle = (_b.sent()).BiSolidChevronUpCircle;
                    return [2 /*return*/, BiSolidChevronUpCircle];
                case 1977: return [4 /*yield*/, import("react-icons/bi")];
                case 1978:
                    BiSolidChevronUpSquare = (_b.sent()).BiSolidChevronUpSquare;
                    return [2 /*return*/, BiSolidChevronUpSquare];
                case 1979: return [4 /*yield*/, import("react-icons/bi")];
                case 1980:
                    BiSolidChevronUp = (_b.sent()).BiSolidChevronUp;
                    return [2 /*return*/, BiSolidChevronUp];
                case 1981: return [4 /*yield*/, import("react-icons/bi")];
                case 1982:
                    BiSolidChevronsDown = (_b.sent()).BiSolidChevronsDown;
                    return [2 /*return*/, BiSolidChevronsDown];
                case 1983: return [4 /*yield*/, import("react-icons/bi")];
                case 1984:
                    BiSolidChevronsLeft = (_b.sent()).BiSolidChevronsLeft;
                    return [2 /*return*/, BiSolidChevronsLeft];
                case 1985: return [4 /*yield*/, import("react-icons/bi")];
                case 1986:
                    BiSolidChevronsRight = (_b.sent()).BiSolidChevronsRight;
                    return [2 /*return*/, BiSolidChevronsRight];
                case 1987: return [4 /*yield*/, import("react-icons/bi")];
                case 1988:
                    BiSolidChevronsUp = (_b.sent()).BiSolidChevronsUp;
                    return [2 /*return*/, BiSolidChevronsUp];
                case 1989: return [4 /*yield*/, import("react-icons/bi")];
                case 1990:
                    BiSolidChip = (_b.sent()).BiSolidChip;
                    return [2 /*return*/, BiSolidChip];
                case 1991: return [4 /*yield*/, import("react-icons/bi")];
                case 1992:
                    BiSolidChurch = (_b.sent()).BiSolidChurch;
                    return [2 /*return*/, BiSolidChurch];
                case 1993: return [4 /*yield*/, import("react-icons/bi")];
                case 1994:
                    BiSolidCircleHalf = (_b.sent()).BiSolidCircleHalf;
                    return [2 /*return*/, BiSolidCircleHalf];
                case 1995: return [4 /*yield*/, import("react-icons/bi")];
                case 1996:
                    BiSolidCircleQuarter = (_b.sent()).BiSolidCircleQuarter;
                    return [2 /*return*/, BiSolidCircleQuarter];
                case 1997: return [4 /*yield*/, import("react-icons/bi")];
                case 1998:
                    BiSolidCircleThreeQuarter = (_b.sent()).BiSolidCircleThreeQuarter;
                    return [2 /*return*/, BiSolidCircleThreeQuarter];
                case 1999: return [4 /*yield*/, import("react-icons/bi")];
                case 2000:
                    BiSolidCircle = (_b.sent()).BiSolidCircle;
                    return [2 /*return*/, BiSolidCircle];
                case 2001: return [2 /*return*/];
            }
        });
    });
}
