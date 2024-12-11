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
export function nameToReactIcon_bi_1(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, BiSolidCity, BiSolidClinic, BiSolidCloudDownload, BiSolidCloudLightning, BiSolidCloudRain, BiSolidCloudUpload, BiSolidCloud, BiSolidCoffeeAlt, BiSolidCoffeeBean, BiSolidCoffeeTogo, BiSolidCoffee, BiSolidCog, BiSolidCoinStack, BiSolidCoin, BiSolidCollection, BiSolidColorFill, BiSolidColor, BiSolidCommentAdd, BiSolidCommentCheck, BiSolidCommentDetail, BiSolidCommentDots, BiSolidCommentEdit, BiSolidCommentError, BiSolidCommentMinus, BiSolidCommentX, BiSolidComment, BiSolidCompass, BiSolidComponent, BiSolidConfused, BiSolidContact, BiSolidConversation, BiSolidCookie, BiSolidCool, BiSolidCopyAlt, BiSolidCopy, BiSolidCopyright, BiSolidCoupon, BiSolidCreditCardAlt, BiSolidCreditCardFront, BiSolidCreditCard, BiSolidCricketBall, BiSolidCrop, BiSolidCrown, BiSolidCubeAlt, BiSolidCube, BiSolidCuboid, BiSolidCustomize, BiSolidCylinder, BiSolidDashboard, BiSolidData, BiSolidDetail, BiSolidDevices, BiSolidDiamond, BiSolidDice1, BiSolidDice2, BiSolidDice3, BiSolidDice4, BiSolidDice5, BiSolidDice6, BiSolidDirectionLeft, BiSolidDirectionRight, BiSolidDirections, BiSolidDisc, BiSolidDiscount, BiSolidDish, BiSolidDislike, BiSolidDizzy, BiSolidDockBottom, BiSolidDockLeft, BiSolidDockRight, BiSolidDockTop, BiSolidDog, BiSolidDollarCircle, BiSolidDonateBlood, BiSolidDonateHeart, BiSolidDoorOpen, BiSolidDoughnutChart, BiSolidDownArrowAlt, BiSolidDownArrowCircle, BiSolidDownArrowSquare, BiSolidDownArrow, BiSolidDownload, BiSolidDownvote, BiSolidDrink, BiSolidDropletHalf, BiSolidDroplet, BiSolidDryer, BiSolidDuplicate, BiSolidEditAlt, BiSolidEditLocation, BiSolidEdit, BiSolidEject, BiSolidEnvelopeOpen, BiSolidEnvelope, BiSolidEraser, BiSolidErrorAlt, BiSolidErrorCircle, BiSolidError, BiSolidEvStation, BiSolidExit, BiSolidExtension, BiSolidEyedropper, BiSolidFaceMask, BiSolidFace, BiSolidFactory, BiSolidFastForwardCircle, BiSolidFileArchive, BiSolidFileBlank, BiSolidFileCss, BiSolidFileDoc, BiSolidFileExport, BiSolidFileFind, BiSolidFileGif, BiSolidFileHtml, BiSolidFileImage, BiSolidFileImport, BiSolidFileJpg, BiSolidFileJs, BiSolidFileJson, BiSolidFileMd, BiSolidFilePdf, BiSolidFilePlus, BiSolidFilePng, BiSolidFileTxt, BiSolidFile, BiSolidFilm, BiSolidFilterAlt, BiSolidFirstAid, BiSolidFlagAlt, BiSolidFlagCheckered, BiSolidFlag, BiSolidFlame, BiSolidFlask, BiSolidFlorist, BiSolidFolderMinus, BiSolidFolderOpen, BiSolidFolderPlus, BiSolidFolder, BiSolidFoodMenu, BiSolidFridge, BiSolidGame, BiSolidGasPump, BiSolidGhost, BiSolidGift, BiSolidGraduation, BiSolidGridAlt, BiSolidGrid, BiSolidGroup, BiSolidGuitarAmp, BiSolidHandDown, BiSolidHandLeft, BiSolidHandRight, BiSolidHandUp, BiSolidHand, BiSolidHappyAlt, BiSolidHappyBeaming, BiSolidHappyHeartEyes, BiSolidHappy, BiSolidHardHat, BiSolidHdd, BiSolidHeartCircle, BiSolidHeartSquare, BiSolidHeart, BiSolidHelpCircle, BiSolidHide, BiSolidHomeAlt2, BiSolidHomeCircle, BiSolidHomeHeart, BiSolidHomeSmile, BiSolidHome, BiSolidHot, BiSolidHotel, BiSolidHourglassBottom, BiSolidHourglassTop, BiSolidHourglass, BiSolidIdCard, BiSolidImageAdd, BiSolidImageAlt, BiSolidImage, BiSolidInbox, BiSolidInfoCircle, BiSolidInfoSquare, BiSolidInjection, BiSolidInstitution, BiSolidInvader, BiSolidJoystickAlt, BiSolidJoystickButton, BiSolidJoystick, BiSolidKey, BiSolidKeyboard, BiSolidLabel, BiSolidLandmark, BiSolidLandscape, BiSolidLaugh, BiSolidLayerMinus, BiSolidLayerPlus, BiSolidLayer, BiSolidLayout, BiSolidLeaf, BiSolidLeftArrowAlt, BiSolidLeftArrowCircle, BiSolidLeftArrowSquare, BiSolidLeftArrow, BiSolidLeftDownArrowCircle, BiSolidLeftTopArrowCircle, BiSolidLemon, BiSolidLike, BiSolidLocationPlus, BiSolidLockAlt, BiSolidLockOpenAlt, BiSolidLockOpen, BiSolidLock, BiSolidLogInCircle, BiSolidLogIn, BiSolidLogOutCircle, BiSolidLogOut, BiSolidLowVision, BiSolidMagicWand, BiSolidMagnet, BiSolidMapAlt, BiSolidMapPin, BiSolidMap, BiSolidMask, BiSolidMedal, BiSolidMegaphone, BiSolidMehAlt, BiSolidMehBlank, BiSolidMeh, BiSolidMemoryCard, BiSolidMessageAdd, BiSolidMessageAltAdd, BiSolidMessageAltCheck, BiSolidMessageAltDetail, BiSolidMessageAltDots, BiSolidMessageAltEdit, BiSolidMessageAltError, BiSolidMessageAltMinus, BiSolidMessageAltX, BiSolidMessageAlt, BiSolidMessageCheck, BiSolidMessageDetail, BiSolidMessageDots, BiSolidMessageEdit, BiSolidMessageError, BiSolidMessageMinus, BiSolidMessageRoundedAdd, BiSolidMessageRoundedCheck, BiSolidMessageRoundedDetail, BiSolidMessageRoundedDots, BiSolidMessageRoundedEdit, BiSolidMessageRoundedError, BiSolidMessageRoundedMinus, BiSolidMessageRoundedX, BiSolidMessageRounded, BiSolidMessageSquareAdd, BiSolidMessageSquareCheck, BiSolidMessageSquareDetail, BiSolidMessageSquareDots, BiSolidMessageSquareEdit, BiSolidMessageSquareError, BiSolidMessageSquareMinus, BiSolidMessageSquareX, BiSolidMessageSquare, BiSolidMessageX, BiSolidMessage, BiSolidMeteor, BiSolidMicrochip, BiSolidMicrophoneAlt, BiSolidMicrophoneOff, BiSolidMicrophone, BiSolidMinusCircle, BiSolidMinusSquare, BiSolidMobileVibration, BiSolidMobile, BiSolidMoon, BiSolidMouseAlt, BiSolidMouse, BiSolidMoviePlay, BiSolidMovie, BiSolidMusic, BiSolidNavigation, BiSolidNetworkChart, BiSolidNews, BiSolidNoEntry, BiSolidNote, BiSolidNotepad, BiSolidNotificationOff, BiSolidNotification, BiSolidObjectsHorizontalCenter, BiSolidObjectsHorizontalLeft, BiSolidObjectsHorizontalRight, BiSolidObjectsVerticalBottom, BiSolidObjectsVerticalCenter, BiSolidObjectsVerticalTop, BiSolidOffer, BiSolidPackage, BiSolidPaintRoll, BiSolidPaint, BiSolidPalette, BiSolidPaperPlane, BiSolidParking, BiSolidParty, BiSolidPaste, BiSolidPear, BiSolidPen, BiSolidPencil, BiSolidPhoneCall, BiSolidPhoneIncoming, BiSolidPhoneOff, BiSolidPhoneOutgoing, BiSolidPhone, BiSolidPhotoAlbum, BiSolidPiano, BiSolidPieChartAlt2, BiSolidPieChartAlt, BiSolidPieChart, BiSolidPin, BiSolidPizza, BiSolidPlaneAlt, BiSolidPlaneLand, BiSolidPlaneTakeOff, BiSolidPlane, BiSolidPlanet, BiSolidPlaylist, BiSolidPlug, BiSolidPlusCircle, BiSolidPlusSquare, BiSolidPointer, BiSolidPolygon, BiSolidPopsicle, BiSolidPrinter, BiSolidPurchaseTagAlt, BiSolidPurchaseTag, BiSolidPyramid, BiSolidQuoteAltLeft, BiSolidQuoteAltRight, BiSolidQuoteLeft, BiSolidQuoteRight, BiSolidQuoteSingleLeft, BiSolidQuoteSingleRight, BiSolidRadiation, BiSolidRadio, BiSolidReceipt, BiSolidRectangle, BiSolidRegistered, BiSolidRename, BiSolidReport, BiSolidRewindCircle, BiSolidRightArrowAlt, BiSolidRightArrowCircle, BiSolidRightArrowSquare, BiSolidRightArrow, BiSolidRightDownArrowCircle, BiSolidRightTopArrowCircle, BiSolidRocket, BiSolidRuler, BiSolidSad, BiSolidSave, BiSolidSchool, BiSolidSearchAlt2, BiSolidSearch, BiSolidSelectMultiple, BiSolidSend, BiSolidServer, BiSolidShapes, BiSolidShareAlt, BiSolidShare, BiSolidShieldAlt2, BiSolidShieldMinus, BiSolidShieldPlus, BiSolidShieldX, BiSolidShield, BiSolidShip, BiSolidShocked, BiSolidShoppingBagAlt, BiSolidShoppingBag, BiSolidShoppingBags, BiSolidShow, BiSolidShower, BiSolidSkipNextCircle, BiSolidSkipPreviousCircle, BiSolidSkull, BiSolidSleepy, BiSolidSlideshow, BiSolidSmile, BiSolidSortAlt, BiSolidSpa, BiSolidSpeaker, BiSolidSprayCan, BiSolidSpreadsheet, BiSolidSquareRounded, BiSolidSquare, BiSolidStarHalf, BiSolidStar, BiSolidSticker, BiSolidStopwatch, BiSolidStoreAlt, BiSolidStore, BiSolidSun, BiSolidSushi, BiSolidTShirt, BiSolidTachometer, BiSolidTagAlt, BiSolidTagX, BiSolidTag, BiSolidTaxi, BiSolidTennisBall, BiSolidTerminal, BiSolidThermometer, BiSolidTimeFive, BiSolidTime, BiSolidTimer, BiSolidTired, BiSolidToTop, BiSolidToggleLeft, BiSolidToggleRight, BiSolidTone, BiSolidTorch, BiSolidTrafficBarrier, BiSolidTrafficCone, BiSolidTraffic, BiSolidTrain, BiSolidTrashAlt, BiSolidTrash, BiSolidTreeAlt, BiSolidTree, BiSolidTrophy, BiSolidTruck, BiSolidTv, BiSolidUniversalAccess, BiSolidUpArrowAlt, BiSolidUpArrowCircle, BiSolidUpArrowSquare, BiSolidUpArrow, BiSolidUpsideDown, BiSolidUpvote, BiSolidUserAccount, BiSolidUserBadge, BiSolidUserCheck, BiSolidUserCircle, BiSolidUserDetail, BiSolidUserMinus, BiSolidUserPin, BiSolidUserPlus, BiSolidUserRectangle, BiSolidUserVoice, BiSolidUserX, BiSolidUser, BiSolidVector, BiSolidVial, BiSolidVideoOff, BiSolidVideoPlus, BiSolidVideoRecording, BiSolidVideo, BiSolidVideos, BiSolidVirusBlock, BiSolidVirus, BiSolidVolumeFull, BiSolidVolumeLow, BiSolidVolumeMute, BiSolidVolume, BiSolidWalletAlt, BiSolidWallet, BiSolidWasher, BiSolidWatchAlt, BiSolidWatch, BiSolidWebcam, BiSolidWidget, BiSolidWindowAlt, BiSolidWine, BiSolidWinkSmile, BiSolidWinkTongue, BiSolidWrench, BiSolidXCircle, BiSolidXSquare, BiSolidYinYang, BiSolidZap, BiSolidZoomIn, BiSolidZoomOut, BiLogo500Px, BiLogo99Designs, BiLogoAdobe, BiLogoAirbnb, BiLogoAlgolia, BiLogoAmazon, BiLogoAndroid, BiLogoAngular, BiLogoApple, BiLogoAudible, BiLogoAws, BiLogoBaidu, BiLogoBehance, BiLogoBing, BiLogoBitcoin, BiLogoBlender, BiLogoBlogger, BiLogoBootstrap, BiLogoCPlusPlus, BiLogoChrome, BiLogoCodepen, BiLogoCreativeCommons, BiLogoCss3, BiLogoDailymotion, BiLogoDeezer, BiLogoDevTo, BiLogoDeviantart, BiLogoDigg, BiLogoDigitalocean, BiLogoDiscordAlt, BiLogoDiscord, BiLogoDiscourse, BiLogoDjango, BiLogoDocker, BiLogoDribbble, BiLogoDropbox, BiLogoDrupal, BiLogoEbay, BiLogoEdge, BiLogoEtsy, BiLogoFacebookCircle, BiLogoFacebookSquare, BiLogoFacebook, BiLogoFigma, BiLogoFirebase, BiLogoFirefox, BiLogoFlask, BiLogoFlickrSquare, BiLogoFlickr, BiLogoFlutter, BiLogoFoursquare, BiLogoGit, BiLogoGithub, BiLogoGitlab, BiLogoGmail, BiLogoGoLang, BiLogoGoogleCloud, BiLogoGooglePlusCircle, BiLogoGooglePlus, BiLogoGoogle, BiLogoGraphql, BiLogoHeroku, BiLogoHtml5, BiLogoImdb, BiLogoInstagramAlt, BiLogoInstagram, BiLogoInternetExplorer, BiLogoInvision, BiLogoJava, BiLogoJavascript, BiLogoJoomla, BiLogoJquery, BiLogoJsfiddle, BiLogoKickstarter, BiLogoKubernetes, BiLogoLess, BiLogoLinkedinSquare, BiLogoLinkedin, BiLogoMagento, BiLogoMailchimp, BiLogoMarkdown, BiLogoMastercard, BiLogoMastodon, BiLogoMediumOld, BiLogoMediumSquare, BiLogoMedium, BiLogoMessenger, BiLogoMeta, BiLogoMicrosoftTeams, BiLogoMicrosoft, BiLogoMongodb, BiLogoNetlify, BiLogoNodejs, BiLogoOkRu, BiLogoOpera, BiLogoPatreon, BiLogoPaypal, BiLogoPeriscope, BiLogoPhp, BiLogoPinterestAlt, BiLogoPinterest, BiLogoPlayStore, BiLogoPocket, BiLogoPostgresql, BiLogoProductHunt, BiLogoPython, BiLogoQuora, BiLogoReact, BiLogoRedbubble, BiLogoReddit, BiLogoRedux, BiLogoSass, BiLogoShopify, BiLogoSketch, BiLogoSkype, BiLogoSlackOld, BiLogoSlack, BiLogoSnapchat, BiLogoSoundcloud, BiLogoSpotify, BiLogoSpringBoot, BiLogoSquarespace, BiLogoStackOverflow, BiLogoSteam, BiLogoStripe, BiLogoTailwindCss, BiLogoTelegram, BiLogoTiktok, BiLogoTrello, BiLogoTripAdvisor, BiLogoTumblr, BiLogoTux, BiLogoTwitch, BiLogoTwitter, BiLogoTypescript, BiLogoUnity, BiLogoUnsplash, BiLogoUpwork, BiLogoVenmo, BiLogoVimeo, BiLogoVisa, BiLogoVisualStudio, BiLogoVk, BiLogoVuejs, BiLogoWhatsappSquare, BiLogoWhatsapp, BiLogoWikipedia, BiLogoWindows, BiLogoWix, BiLogoWordpress, BiLogoXing, BiLogoYahoo, BiLogoYelp, BiLogoYoutube, BiLogoZoom;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "bi:BiSolidCity": return [3 /*break*/, 1];
                        case "bi:BiSolidClinic": return [3 /*break*/, 3];
                        case "bi:BiSolidCloudDownload": return [3 /*break*/, 5];
                        case "bi:BiSolidCloudLightning": return [3 /*break*/, 7];
                        case "bi:BiSolidCloudRain": return [3 /*break*/, 9];
                        case "bi:BiSolidCloudUpload": return [3 /*break*/, 11];
                        case "bi:BiSolidCloud": return [3 /*break*/, 13];
                        case "bi:BiSolidCoffeeAlt": return [3 /*break*/, 15];
                        case "bi:BiSolidCoffeeBean": return [3 /*break*/, 17];
                        case "bi:BiSolidCoffeeTogo": return [3 /*break*/, 19];
                        case "bi:BiSolidCoffee": return [3 /*break*/, 21];
                        case "bi:BiSolidCog": return [3 /*break*/, 23];
                        case "bi:BiSolidCoinStack": return [3 /*break*/, 25];
                        case "bi:BiSolidCoin": return [3 /*break*/, 27];
                        case "bi:BiSolidCollection": return [3 /*break*/, 29];
                        case "bi:BiSolidColorFill": return [3 /*break*/, 31];
                        case "bi:BiSolidColor": return [3 /*break*/, 33];
                        case "bi:BiSolidCommentAdd": return [3 /*break*/, 35];
                        case "bi:BiSolidCommentCheck": return [3 /*break*/, 37];
                        case "bi:BiSolidCommentDetail": return [3 /*break*/, 39];
                        case "bi:BiSolidCommentDots": return [3 /*break*/, 41];
                        case "bi:BiSolidCommentEdit": return [3 /*break*/, 43];
                        case "bi:BiSolidCommentError": return [3 /*break*/, 45];
                        case "bi:BiSolidCommentMinus": return [3 /*break*/, 47];
                        case "bi:BiSolidCommentX": return [3 /*break*/, 49];
                        case "bi:BiSolidComment": return [3 /*break*/, 51];
                        case "bi:BiSolidCompass": return [3 /*break*/, 53];
                        case "bi:BiSolidComponent": return [3 /*break*/, 55];
                        case "bi:BiSolidConfused": return [3 /*break*/, 57];
                        case "bi:BiSolidContact": return [3 /*break*/, 59];
                        case "bi:BiSolidConversation": return [3 /*break*/, 61];
                        case "bi:BiSolidCookie": return [3 /*break*/, 63];
                        case "bi:BiSolidCool": return [3 /*break*/, 65];
                        case "bi:BiSolidCopyAlt": return [3 /*break*/, 67];
                        case "bi:BiSolidCopy": return [3 /*break*/, 69];
                        case "bi:BiSolidCopyright": return [3 /*break*/, 71];
                        case "bi:BiSolidCoupon": return [3 /*break*/, 73];
                        case "bi:BiSolidCreditCardAlt": return [3 /*break*/, 75];
                        case "bi:BiSolidCreditCardFront": return [3 /*break*/, 77];
                        case "bi:BiSolidCreditCard": return [3 /*break*/, 79];
                        case "bi:BiSolidCricketBall": return [3 /*break*/, 81];
                        case "bi:BiSolidCrop": return [3 /*break*/, 83];
                        case "bi:BiSolidCrown": return [3 /*break*/, 85];
                        case "bi:BiSolidCubeAlt": return [3 /*break*/, 87];
                        case "bi:BiSolidCube": return [3 /*break*/, 89];
                        case "bi:BiSolidCuboid": return [3 /*break*/, 91];
                        case "bi:BiSolidCustomize": return [3 /*break*/, 93];
                        case "bi:BiSolidCylinder": return [3 /*break*/, 95];
                        case "bi:BiSolidDashboard": return [3 /*break*/, 97];
                        case "bi:BiSolidData": return [3 /*break*/, 99];
                        case "bi:BiSolidDetail": return [3 /*break*/, 101];
                        case "bi:BiSolidDevices": return [3 /*break*/, 103];
                        case "bi:BiSolidDiamond": return [3 /*break*/, 105];
                        case "bi:BiSolidDice1": return [3 /*break*/, 107];
                        case "bi:BiSolidDice2": return [3 /*break*/, 109];
                        case "bi:BiSolidDice3": return [3 /*break*/, 111];
                        case "bi:BiSolidDice4": return [3 /*break*/, 113];
                        case "bi:BiSolidDice5": return [3 /*break*/, 115];
                        case "bi:BiSolidDice6": return [3 /*break*/, 117];
                        case "bi:BiSolidDirectionLeft": return [3 /*break*/, 119];
                        case "bi:BiSolidDirectionRight": return [3 /*break*/, 121];
                        case "bi:BiSolidDirections": return [3 /*break*/, 123];
                        case "bi:BiSolidDisc": return [3 /*break*/, 125];
                        case "bi:BiSolidDiscount": return [3 /*break*/, 127];
                        case "bi:BiSolidDish": return [3 /*break*/, 129];
                        case "bi:BiSolidDislike": return [3 /*break*/, 131];
                        case "bi:BiSolidDizzy": return [3 /*break*/, 133];
                        case "bi:BiSolidDockBottom": return [3 /*break*/, 135];
                        case "bi:BiSolidDockLeft": return [3 /*break*/, 137];
                        case "bi:BiSolidDockRight": return [3 /*break*/, 139];
                        case "bi:BiSolidDockTop": return [3 /*break*/, 141];
                        case "bi:BiSolidDog": return [3 /*break*/, 143];
                        case "bi:BiSolidDollarCircle": return [3 /*break*/, 145];
                        case "bi:BiSolidDonateBlood": return [3 /*break*/, 147];
                        case "bi:BiSolidDonateHeart": return [3 /*break*/, 149];
                        case "bi:BiSolidDoorOpen": return [3 /*break*/, 151];
                        case "bi:BiSolidDoughnutChart": return [3 /*break*/, 153];
                        case "bi:BiSolidDownArrowAlt": return [3 /*break*/, 155];
                        case "bi:BiSolidDownArrowCircle": return [3 /*break*/, 157];
                        case "bi:BiSolidDownArrowSquare": return [3 /*break*/, 159];
                        case "bi:BiSolidDownArrow": return [3 /*break*/, 161];
                        case "bi:BiSolidDownload": return [3 /*break*/, 163];
                        case "bi:BiSolidDownvote": return [3 /*break*/, 165];
                        case "bi:BiSolidDrink": return [3 /*break*/, 167];
                        case "bi:BiSolidDropletHalf": return [3 /*break*/, 169];
                        case "bi:BiSolidDroplet": return [3 /*break*/, 171];
                        case "bi:BiSolidDryer": return [3 /*break*/, 173];
                        case "bi:BiSolidDuplicate": return [3 /*break*/, 175];
                        case "bi:BiSolidEditAlt": return [3 /*break*/, 177];
                        case "bi:BiSolidEditLocation": return [3 /*break*/, 179];
                        case "bi:BiSolidEdit": return [3 /*break*/, 181];
                        case "bi:BiSolidEject": return [3 /*break*/, 183];
                        case "bi:BiSolidEnvelopeOpen": return [3 /*break*/, 185];
                        case "bi:BiSolidEnvelope": return [3 /*break*/, 187];
                        case "bi:BiSolidEraser": return [3 /*break*/, 189];
                        case "bi:BiSolidErrorAlt": return [3 /*break*/, 191];
                        case "bi:BiSolidErrorCircle": return [3 /*break*/, 193];
                        case "bi:BiSolidError": return [3 /*break*/, 195];
                        case "bi:BiSolidEvStation": return [3 /*break*/, 197];
                        case "bi:BiSolidExit": return [3 /*break*/, 199];
                        case "bi:BiSolidExtension": return [3 /*break*/, 201];
                        case "bi:BiSolidEyedropper": return [3 /*break*/, 203];
                        case "bi:BiSolidFaceMask": return [3 /*break*/, 205];
                        case "bi:BiSolidFace": return [3 /*break*/, 207];
                        case "bi:BiSolidFactory": return [3 /*break*/, 209];
                        case "bi:BiSolidFastForwardCircle": return [3 /*break*/, 211];
                        case "bi:BiSolidFileArchive": return [3 /*break*/, 213];
                        case "bi:BiSolidFileBlank": return [3 /*break*/, 215];
                        case "bi:BiSolidFileCss": return [3 /*break*/, 217];
                        case "bi:BiSolidFileDoc": return [3 /*break*/, 219];
                        case "bi:BiSolidFileExport": return [3 /*break*/, 221];
                        case "bi:BiSolidFileFind": return [3 /*break*/, 223];
                        case "bi:BiSolidFileGif": return [3 /*break*/, 225];
                        case "bi:BiSolidFileHtml": return [3 /*break*/, 227];
                        case "bi:BiSolidFileImage": return [3 /*break*/, 229];
                        case "bi:BiSolidFileImport": return [3 /*break*/, 231];
                        case "bi:BiSolidFileJpg": return [3 /*break*/, 233];
                        case "bi:BiSolidFileJs": return [3 /*break*/, 235];
                        case "bi:BiSolidFileJson": return [3 /*break*/, 237];
                        case "bi:BiSolidFileMd": return [3 /*break*/, 239];
                        case "bi:BiSolidFilePdf": return [3 /*break*/, 241];
                        case "bi:BiSolidFilePlus": return [3 /*break*/, 243];
                        case "bi:BiSolidFilePng": return [3 /*break*/, 245];
                        case "bi:BiSolidFileTxt": return [3 /*break*/, 247];
                        case "bi:BiSolidFile": return [3 /*break*/, 249];
                        case "bi:BiSolidFilm": return [3 /*break*/, 251];
                        case "bi:BiSolidFilterAlt": return [3 /*break*/, 253];
                        case "bi:BiSolidFirstAid": return [3 /*break*/, 255];
                        case "bi:BiSolidFlagAlt": return [3 /*break*/, 257];
                        case "bi:BiSolidFlagCheckered": return [3 /*break*/, 259];
                        case "bi:BiSolidFlag": return [3 /*break*/, 261];
                        case "bi:BiSolidFlame": return [3 /*break*/, 263];
                        case "bi:BiSolidFlask": return [3 /*break*/, 265];
                        case "bi:BiSolidFlorist": return [3 /*break*/, 267];
                        case "bi:BiSolidFolderMinus": return [3 /*break*/, 269];
                        case "bi:BiSolidFolderOpen": return [3 /*break*/, 271];
                        case "bi:BiSolidFolderPlus": return [3 /*break*/, 273];
                        case "bi:BiSolidFolder": return [3 /*break*/, 275];
                        case "bi:BiSolidFoodMenu": return [3 /*break*/, 277];
                        case "bi:BiSolidFridge": return [3 /*break*/, 279];
                        case "bi:BiSolidGame": return [3 /*break*/, 281];
                        case "bi:BiSolidGasPump": return [3 /*break*/, 283];
                        case "bi:BiSolidGhost": return [3 /*break*/, 285];
                        case "bi:BiSolidGift": return [3 /*break*/, 287];
                        case "bi:BiSolidGraduation": return [3 /*break*/, 289];
                        case "bi:BiSolidGridAlt": return [3 /*break*/, 291];
                        case "bi:BiSolidGrid": return [3 /*break*/, 293];
                        case "bi:BiSolidGroup": return [3 /*break*/, 295];
                        case "bi:BiSolidGuitarAmp": return [3 /*break*/, 297];
                        case "bi:BiSolidHandDown": return [3 /*break*/, 299];
                        case "bi:BiSolidHandLeft": return [3 /*break*/, 301];
                        case "bi:BiSolidHandRight": return [3 /*break*/, 303];
                        case "bi:BiSolidHandUp": return [3 /*break*/, 305];
                        case "bi:BiSolidHand": return [3 /*break*/, 307];
                        case "bi:BiSolidHappyAlt": return [3 /*break*/, 309];
                        case "bi:BiSolidHappyBeaming": return [3 /*break*/, 311];
                        case "bi:BiSolidHappyHeartEyes": return [3 /*break*/, 313];
                        case "bi:BiSolidHappy": return [3 /*break*/, 315];
                        case "bi:BiSolidHardHat": return [3 /*break*/, 317];
                        case "bi:BiSolidHdd": return [3 /*break*/, 319];
                        case "bi:BiSolidHeartCircle": return [3 /*break*/, 321];
                        case "bi:BiSolidHeartSquare": return [3 /*break*/, 323];
                        case "bi:BiSolidHeart": return [3 /*break*/, 325];
                        case "bi:BiSolidHelpCircle": return [3 /*break*/, 327];
                        case "bi:BiSolidHide": return [3 /*break*/, 329];
                        case "bi:BiSolidHomeAlt2": return [3 /*break*/, 331];
                        case "bi:BiSolidHomeCircle": return [3 /*break*/, 333];
                        case "bi:BiSolidHomeHeart": return [3 /*break*/, 335];
                        case "bi:BiSolidHomeSmile": return [3 /*break*/, 337];
                        case "bi:BiSolidHome": return [3 /*break*/, 339];
                        case "bi:BiSolidHot": return [3 /*break*/, 341];
                        case "bi:BiSolidHotel": return [3 /*break*/, 343];
                        case "bi:BiSolidHourglassBottom": return [3 /*break*/, 345];
                        case "bi:BiSolidHourglassTop": return [3 /*break*/, 347];
                        case "bi:BiSolidHourglass": return [3 /*break*/, 349];
                        case "bi:BiSolidIdCard": return [3 /*break*/, 351];
                        case "bi:BiSolidImageAdd": return [3 /*break*/, 353];
                        case "bi:BiSolidImageAlt": return [3 /*break*/, 355];
                        case "bi:BiSolidImage": return [3 /*break*/, 357];
                        case "bi:BiSolidInbox": return [3 /*break*/, 359];
                        case "bi:BiSolidInfoCircle": return [3 /*break*/, 361];
                        case "bi:BiSolidInfoSquare": return [3 /*break*/, 363];
                        case "bi:BiSolidInjection": return [3 /*break*/, 365];
                        case "bi:BiSolidInstitution": return [3 /*break*/, 367];
                        case "bi:BiSolidInvader": return [3 /*break*/, 369];
                        case "bi:BiSolidJoystickAlt": return [3 /*break*/, 371];
                        case "bi:BiSolidJoystickButton": return [3 /*break*/, 373];
                        case "bi:BiSolidJoystick": return [3 /*break*/, 375];
                        case "bi:BiSolidKey": return [3 /*break*/, 377];
                        case "bi:BiSolidKeyboard": return [3 /*break*/, 379];
                        case "bi:BiSolidLabel": return [3 /*break*/, 381];
                        case "bi:BiSolidLandmark": return [3 /*break*/, 383];
                        case "bi:BiSolidLandscape": return [3 /*break*/, 385];
                        case "bi:BiSolidLaugh": return [3 /*break*/, 387];
                        case "bi:BiSolidLayerMinus": return [3 /*break*/, 389];
                        case "bi:BiSolidLayerPlus": return [3 /*break*/, 391];
                        case "bi:BiSolidLayer": return [3 /*break*/, 393];
                        case "bi:BiSolidLayout": return [3 /*break*/, 395];
                        case "bi:BiSolidLeaf": return [3 /*break*/, 397];
                        case "bi:BiSolidLeftArrowAlt": return [3 /*break*/, 399];
                        case "bi:BiSolidLeftArrowCircle": return [3 /*break*/, 401];
                        case "bi:BiSolidLeftArrowSquare": return [3 /*break*/, 403];
                        case "bi:BiSolidLeftArrow": return [3 /*break*/, 405];
                        case "bi:BiSolidLeftDownArrowCircle": return [3 /*break*/, 407];
                        case "bi:BiSolidLeftTopArrowCircle": return [3 /*break*/, 409];
                        case "bi:BiSolidLemon": return [3 /*break*/, 411];
                        case "bi:BiSolidLike": return [3 /*break*/, 413];
                        case "bi:BiSolidLocationPlus": return [3 /*break*/, 415];
                        case "bi:BiSolidLockAlt": return [3 /*break*/, 417];
                        case "bi:BiSolidLockOpenAlt": return [3 /*break*/, 419];
                        case "bi:BiSolidLockOpen": return [3 /*break*/, 421];
                        case "bi:BiSolidLock": return [3 /*break*/, 423];
                        case "bi:BiSolidLogInCircle": return [3 /*break*/, 425];
                        case "bi:BiSolidLogIn": return [3 /*break*/, 427];
                        case "bi:BiSolidLogOutCircle": return [3 /*break*/, 429];
                        case "bi:BiSolidLogOut": return [3 /*break*/, 431];
                        case "bi:BiSolidLowVision": return [3 /*break*/, 433];
                        case "bi:BiSolidMagicWand": return [3 /*break*/, 435];
                        case "bi:BiSolidMagnet": return [3 /*break*/, 437];
                        case "bi:BiSolidMapAlt": return [3 /*break*/, 439];
                        case "bi:BiSolidMapPin": return [3 /*break*/, 441];
                        case "bi:BiSolidMap": return [3 /*break*/, 443];
                        case "bi:BiSolidMask": return [3 /*break*/, 445];
                        case "bi:BiSolidMedal": return [3 /*break*/, 447];
                        case "bi:BiSolidMegaphone": return [3 /*break*/, 449];
                        case "bi:BiSolidMehAlt": return [3 /*break*/, 451];
                        case "bi:BiSolidMehBlank": return [3 /*break*/, 453];
                        case "bi:BiSolidMeh": return [3 /*break*/, 455];
                        case "bi:BiSolidMemoryCard": return [3 /*break*/, 457];
                        case "bi:BiSolidMessageAdd": return [3 /*break*/, 459];
                        case "bi:BiSolidMessageAltAdd": return [3 /*break*/, 461];
                        case "bi:BiSolidMessageAltCheck": return [3 /*break*/, 463];
                        case "bi:BiSolidMessageAltDetail": return [3 /*break*/, 465];
                        case "bi:BiSolidMessageAltDots": return [3 /*break*/, 467];
                        case "bi:BiSolidMessageAltEdit": return [3 /*break*/, 469];
                        case "bi:BiSolidMessageAltError": return [3 /*break*/, 471];
                        case "bi:BiSolidMessageAltMinus": return [3 /*break*/, 473];
                        case "bi:BiSolidMessageAltX": return [3 /*break*/, 475];
                        case "bi:BiSolidMessageAlt": return [3 /*break*/, 477];
                        case "bi:BiSolidMessageCheck": return [3 /*break*/, 479];
                        case "bi:BiSolidMessageDetail": return [3 /*break*/, 481];
                        case "bi:BiSolidMessageDots": return [3 /*break*/, 483];
                        case "bi:BiSolidMessageEdit": return [3 /*break*/, 485];
                        case "bi:BiSolidMessageError": return [3 /*break*/, 487];
                        case "bi:BiSolidMessageMinus": return [3 /*break*/, 489];
                        case "bi:BiSolidMessageRoundedAdd": return [3 /*break*/, 491];
                        case "bi:BiSolidMessageRoundedCheck": return [3 /*break*/, 493];
                        case "bi:BiSolidMessageRoundedDetail": return [3 /*break*/, 495];
                        case "bi:BiSolidMessageRoundedDots": return [3 /*break*/, 497];
                        case "bi:BiSolidMessageRoundedEdit": return [3 /*break*/, 499];
                        case "bi:BiSolidMessageRoundedError": return [3 /*break*/, 501];
                        case "bi:BiSolidMessageRoundedMinus": return [3 /*break*/, 503];
                        case "bi:BiSolidMessageRoundedX": return [3 /*break*/, 505];
                        case "bi:BiSolidMessageRounded": return [3 /*break*/, 507];
                        case "bi:BiSolidMessageSquareAdd": return [3 /*break*/, 509];
                        case "bi:BiSolidMessageSquareCheck": return [3 /*break*/, 511];
                        case "bi:BiSolidMessageSquareDetail": return [3 /*break*/, 513];
                        case "bi:BiSolidMessageSquareDots": return [3 /*break*/, 515];
                        case "bi:BiSolidMessageSquareEdit": return [3 /*break*/, 517];
                        case "bi:BiSolidMessageSquareError": return [3 /*break*/, 519];
                        case "bi:BiSolidMessageSquareMinus": return [3 /*break*/, 521];
                        case "bi:BiSolidMessageSquareX": return [3 /*break*/, 523];
                        case "bi:BiSolidMessageSquare": return [3 /*break*/, 525];
                        case "bi:BiSolidMessageX": return [3 /*break*/, 527];
                        case "bi:BiSolidMessage": return [3 /*break*/, 529];
                        case "bi:BiSolidMeteor": return [3 /*break*/, 531];
                        case "bi:BiSolidMicrochip": return [3 /*break*/, 533];
                        case "bi:BiSolidMicrophoneAlt": return [3 /*break*/, 535];
                        case "bi:BiSolidMicrophoneOff": return [3 /*break*/, 537];
                        case "bi:BiSolidMicrophone": return [3 /*break*/, 539];
                        case "bi:BiSolidMinusCircle": return [3 /*break*/, 541];
                        case "bi:BiSolidMinusSquare": return [3 /*break*/, 543];
                        case "bi:BiSolidMobileVibration": return [3 /*break*/, 545];
                        case "bi:BiSolidMobile": return [3 /*break*/, 547];
                        case "bi:BiSolidMoon": return [3 /*break*/, 549];
                        case "bi:BiSolidMouseAlt": return [3 /*break*/, 551];
                        case "bi:BiSolidMouse": return [3 /*break*/, 553];
                        case "bi:BiSolidMoviePlay": return [3 /*break*/, 555];
                        case "bi:BiSolidMovie": return [3 /*break*/, 557];
                        case "bi:BiSolidMusic": return [3 /*break*/, 559];
                        case "bi:BiSolidNavigation": return [3 /*break*/, 561];
                        case "bi:BiSolidNetworkChart": return [3 /*break*/, 563];
                        case "bi:BiSolidNews": return [3 /*break*/, 565];
                        case "bi:BiSolidNoEntry": return [3 /*break*/, 567];
                        case "bi:BiSolidNote": return [3 /*break*/, 569];
                        case "bi:BiSolidNotepad": return [3 /*break*/, 571];
                        case "bi:BiSolidNotificationOff": return [3 /*break*/, 573];
                        case "bi:BiSolidNotification": return [3 /*break*/, 575];
                        case "bi:BiSolidObjectsHorizontalCenter": return [3 /*break*/, 577];
                        case "bi:BiSolidObjectsHorizontalLeft": return [3 /*break*/, 579];
                        case "bi:BiSolidObjectsHorizontalRight": return [3 /*break*/, 581];
                        case "bi:BiSolidObjectsVerticalBottom": return [3 /*break*/, 583];
                        case "bi:BiSolidObjectsVerticalCenter": return [3 /*break*/, 585];
                        case "bi:BiSolidObjectsVerticalTop": return [3 /*break*/, 587];
                        case "bi:BiSolidOffer": return [3 /*break*/, 589];
                        case "bi:BiSolidPackage": return [3 /*break*/, 591];
                        case "bi:BiSolidPaintRoll": return [3 /*break*/, 593];
                        case "bi:BiSolidPaint": return [3 /*break*/, 595];
                        case "bi:BiSolidPalette": return [3 /*break*/, 597];
                        case "bi:BiSolidPaperPlane": return [3 /*break*/, 599];
                        case "bi:BiSolidParking": return [3 /*break*/, 601];
                        case "bi:BiSolidParty": return [3 /*break*/, 603];
                        case "bi:BiSolidPaste": return [3 /*break*/, 605];
                        case "bi:BiSolidPear": return [3 /*break*/, 607];
                        case "bi:BiSolidPen": return [3 /*break*/, 609];
                        case "bi:BiSolidPencil": return [3 /*break*/, 611];
                        case "bi:BiSolidPhoneCall": return [3 /*break*/, 613];
                        case "bi:BiSolidPhoneIncoming": return [3 /*break*/, 615];
                        case "bi:BiSolidPhoneOff": return [3 /*break*/, 617];
                        case "bi:BiSolidPhoneOutgoing": return [3 /*break*/, 619];
                        case "bi:BiSolidPhone": return [3 /*break*/, 621];
                        case "bi:BiSolidPhotoAlbum": return [3 /*break*/, 623];
                        case "bi:BiSolidPiano": return [3 /*break*/, 625];
                        case "bi:BiSolidPieChartAlt2": return [3 /*break*/, 627];
                        case "bi:BiSolidPieChartAlt": return [3 /*break*/, 629];
                        case "bi:BiSolidPieChart": return [3 /*break*/, 631];
                        case "bi:BiSolidPin": return [3 /*break*/, 633];
                        case "bi:BiSolidPizza": return [3 /*break*/, 635];
                        case "bi:BiSolidPlaneAlt": return [3 /*break*/, 637];
                        case "bi:BiSolidPlaneLand": return [3 /*break*/, 639];
                        case "bi:BiSolidPlaneTakeOff": return [3 /*break*/, 641];
                        case "bi:BiSolidPlane": return [3 /*break*/, 643];
                        case "bi:BiSolidPlanet": return [3 /*break*/, 645];
                        case "bi:BiSolidPlaylist": return [3 /*break*/, 647];
                        case "bi:BiSolidPlug": return [3 /*break*/, 649];
                        case "bi:BiSolidPlusCircle": return [3 /*break*/, 651];
                        case "bi:BiSolidPlusSquare": return [3 /*break*/, 653];
                        case "bi:BiSolidPointer": return [3 /*break*/, 655];
                        case "bi:BiSolidPolygon": return [3 /*break*/, 657];
                        case "bi:BiSolidPopsicle": return [3 /*break*/, 659];
                        case "bi:BiSolidPrinter": return [3 /*break*/, 661];
                        case "bi:BiSolidPurchaseTagAlt": return [3 /*break*/, 663];
                        case "bi:BiSolidPurchaseTag": return [3 /*break*/, 665];
                        case "bi:BiSolidPyramid": return [3 /*break*/, 667];
                        case "bi:BiSolidQuoteAltLeft": return [3 /*break*/, 669];
                        case "bi:BiSolidQuoteAltRight": return [3 /*break*/, 671];
                        case "bi:BiSolidQuoteLeft": return [3 /*break*/, 673];
                        case "bi:BiSolidQuoteRight": return [3 /*break*/, 675];
                        case "bi:BiSolidQuoteSingleLeft": return [3 /*break*/, 677];
                        case "bi:BiSolidQuoteSingleRight": return [3 /*break*/, 679];
                        case "bi:BiSolidRadiation": return [3 /*break*/, 681];
                        case "bi:BiSolidRadio": return [3 /*break*/, 683];
                        case "bi:BiSolidReceipt": return [3 /*break*/, 685];
                        case "bi:BiSolidRectangle": return [3 /*break*/, 687];
                        case "bi:BiSolidRegistered": return [3 /*break*/, 689];
                        case "bi:BiSolidRename": return [3 /*break*/, 691];
                        case "bi:BiSolidReport": return [3 /*break*/, 693];
                        case "bi:BiSolidRewindCircle": return [3 /*break*/, 695];
                        case "bi:BiSolidRightArrowAlt": return [3 /*break*/, 697];
                        case "bi:BiSolidRightArrowCircle": return [3 /*break*/, 699];
                        case "bi:BiSolidRightArrowSquare": return [3 /*break*/, 701];
                        case "bi:BiSolidRightArrow": return [3 /*break*/, 703];
                        case "bi:BiSolidRightDownArrowCircle": return [3 /*break*/, 705];
                        case "bi:BiSolidRightTopArrowCircle": return [3 /*break*/, 707];
                        case "bi:BiSolidRocket": return [3 /*break*/, 709];
                        case "bi:BiSolidRuler": return [3 /*break*/, 711];
                        case "bi:BiSolidSad": return [3 /*break*/, 713];
                        case "bi:BiSolidSave": return [3 /*break*/, 715];
                        case "bi:BiSolidSchool": return [3 /*break*/, 717];
                        case "bi:BiSolidSearchAlt2": return [3 /*break*/, 719];
                        case "bi:BiSolidSearch": return [3 /*break*/, 721];
                        case "bi:BiSolidSelectMultiple": return [3 /*break*/, 723];
                        case "bi:BiSolidSend": return [3 /*break*/, 725];
                        case "bi:BiSolidServer": return [3 /*break*/, 727];
                        case "bi:BiSolidShapes": return [3 /*break*/, 729];
                        case "bi:BiSolidShareAlt": return [3 /*break*/, 731];
                        case "bi:BiSolidShare": return [3 /*break*/, 733];
                        case "bi:BiSolidShieldAlt2": return [3 /*break*/, 735];
                        case "bi:BiSolidShieldMinus": return [3 /*break*/, 737];
                        case "bi:BiSolidShieldPlus": return [3 /*break*/, 739];
                        case "bi:BiSolidShieldX": return [3 /*break*/, 741];
                        case "bi:BiSolidShield": return [3 /*break*/, 743];
                        case "bi:BiSolidShip": return [3 /*break*/, 745];
                        case "bi:BiSolidShocked": return [3 /*break*/, 747];
                        case "bi:BiSolidShoppingBagAlt": return [3 /*break*/, 749];
                        case "bi:BiSolidShoppingBag": return [3 /*break*/, 751];
                        case "bi:BiSolidShoppingBags": return [3 /*break*/, 753];
                        case "bi:BiSolidShow": return [3 /*break*/, 755];
                        case "bi:BiSolidShower": return [3 /*break*/, 757];
                        case "bi:BiSolidSkipNextCircle": return [3 /*break*/, 759];
                        case "bi:BiSolidSkipPreviousCircle": return [3 /*break*/, 761];
                        case "bi:BiSolidSkull": return [3 /*break*/, 763];
                        case "bi:BiSolidSleepy": return [3 /*break*/, 765];
                        case "bi:BiSolidSlideshow": return [3 /*break*/, 767];
                        case "bi:BiSolidSmile": return [3 /*break*/, 769];
                        case "bi:BiSolidSortAlt": return [3 /*break*/, 771];
                        case "bi:BiSolidSpa": return [3 /*break*/, 773];
                        case "bi:BiSolidSpeaker": return [3 /*break*/, 775];
                        case "bi:BiSolidSprayCan": return [3 /*break*/, 777];
                        case "bi:BiSolidSpreadsheet": return [3 /*break*/, 779];
                        case "bi:BiSolidSquareRounded": return [3 /*break*/, 781];
                        case "bi:BiSolidSquare": return [3 /*break*/, 783];
                        case "bi:BiSolidStarHalf": return [3 /*break*/, 785];
                        case "bi:BiSolidStar": return [3 /*break*/, 787];
                        case "bi:BiSolidSticker": return [3 /*break*/, 789];
                        case "bi:BiSolidStopwatch": return [3 /*break*/, 791];
                        case "bi:BiSolidStoreAlt": return [3 /*break*/, 793];
                        case "bi:BiSolidStore": return [3 /*break*/, 795];
                        case "bi:BiSolidSun": return [3 /*break*/, 797];
                        case "bi:BiSolidSushi": return [3 /*break*/, 799];
                        case "bi:BiSolidTShirt": return [3 /*break*/, 801];
                        case "bi:BiSolidTachometer": return [3 /*break*/, 803];
                        case "bi:BiSolidTagAlt": return [3 /*break*/, 805];
                        case "bi:BiSolidTagX": return [3 /*break*/, 807];
                        case "bi:BiSolidTag": return [3 /*break*/, 809];
                        case "bi:BiSolidTaxi": return [3 /*break*/, 811];
                        case "bi:BiSolidTennisBall": return [3 /*break*/, 813];
                        case "bi:BiSolidTerminal": return [3 /*break*/, 815];
                        case "bi:BiSolidThermometer": return [3 /*break*/, 817];
                        case "bi:BiSolidTimeFive": return [3 /*break*/, 819];
                        case "bi:BiSolidTime": return [3 /*break*/, 821];
                        case "bi:BiSolidTimer": return [3 /*break*/, 823];
                        case "bi:BiSolidTired": return [3 /*break*/, 825];
                        case "bi:BiSolidToTop": return [3 /*break*/, 827];
                        case "bi:BiSolidToggleLeft": return [3 /*break*/, 829];
                        case "bi:BiSolidToggleRight": return [3 /*break*/, 831];
                        case "bi:BiSolidTone": return [3 /*break*/, 833];
                        case "bi:BiSolidTorch": return [3 /*break*/, 835];
                        case "bi:BiSolidTrafficBarrier": return [3 /*break*/, 837];
                        case "bi:BiSolidTrafficCone": return [3 /*break*/, 839];
                        case "bi:BiSolidTraffic": return [3 /*break*/, 841];
                        case "bi:BiSolidTrain": return [3 /*break*/, 843];
                        case "bi:BiSolidTrashAlt": return [3 /*break*/, 845];
                        case "bi:BiSolidTrash": return [3 /*break*/, 847];
                        case "bi:BiSolidTreeAlt": return [3 /*break*/, 849];
                        case "bi:BiSolidTree": return [3 /*break*/, 851];
                        case "bi:BiSolidTrophy": return [3 /*break*/, 853];
                        case "bi:BiSolidTruck": return [3 /*break*/, 855];
                        case "bi:BiSolidTv": return [3 /*break*/, 857];
                        case "bi:BiSolidUniversalAccess": return [3 /*break*/, 859];
                        case "bi:BiSolidUpArrowAlt": return [3 /*break*/, 861];
                        case "bi:BiSolidUpArrowCircle": return [3 /*break*/, 863];
                        case "bi:BiSolidUpArrowSquare": return [3 /*break*/, 865];
                        case "bi:BiSolidUpArrow": return [3 /*break*/, 867];
                        case "bi:BiSolidUpsideDown": return [3 /*break*/, 869];
                        case "bi:BiSolidUpvote": return [3 /*break*/, 871];
                        case "bi:BiSolidUserAccount": return [3 /*break*/, 873];
                        case "bi:BiSolidUserBadge": return [3 /*break*/, 875];
                        case "bi:BiSolidUserCheck": return [3 /*break*/, 877];
                        case "bi:BiSolidUserCircle": return [3 /*break*/, 879];
                        case "bi:BiSolidUserDetail": return [3 /*break*/, 881];
                        case "bi:BiSolidUserMinus": return [3 /*break*/, 883];
                        case "bi:BiSolidUserPin": return [3 /*break*/, 885];
                        case "bi:BiSolidUserPlus": return [3 /*break*/, 887];
                        case "bi:BiSolidUserRectangle": return [3 /*break*/, 889];
                        case "bi:BiSolidUserVoice": return [3 /*break*/, 891];
                        case "bi:BiSolidUserX": return [3 /*break*/, 893];
                        case "bi:BiSolidUser": return [3 /*break*/, 895];
                        case "bi:BiSolidVector": return [3 /*break*/, 897];
                        case "bi:BiSolidVial": return [3 /*break*/, 899];
                        case "bi:BiSolidVideoOff": return [3 /*break*/, 901];
                        case "bi:BiSolidVideoPlus": return [3 /*break*/, 903];
                        case "bi:BiSolidVideoRecording": return [3 /*break*/, 905];
                        case "bi:BiSolidVideo": return [3 /*break*/, 907];
                        case "bi:BiSolidVideos": return [3 /*break*/, 909];
                        case "bi:BiSolidVirusBlock": return [3 /*break*/, 911];
                        case "bi:BiSolidVirus": return [3 /*break*/, 913];
                        case "bi:BiSolidVolumeFull": return [3 /*break*/, 915];
                        case "bi:BiSolidVolumeLow": return [3 /*break*/, 917];
                        case "bi:BiSolidVolumeMute": return [3 /*break*/, 919];
                        case "bi:BiSolidVolume": return [3 /*break*/, 921];
                        case "bi:BiSolidWalletAlt": return [3 /*break*/, 923];
                        case "bi:BiSolidWallet": return [3 /*break*/, 925];
                        case "bi:BiSolidWasher": return [3 /*break*/, 927];
                        case "bi:BiSolidWatchAlt": return [3 /*break*/, 929];
                        case "bi:BiSolidWatch": return [3 /*break*/, 931];
                        case "bi:BiSolidWebcam": return [3 /*break*/, 933];
                        case "bi:BiSolidWidget": return [3 /*break*/, 935];
                        case "bi:BiSolidWindowAlt": return [3 /*break*/, 937];
                        case "bi:BiSolidWine": return [3 /*break*/, 939];
                        case "bi:BiSolidWinkSmile": return [3 /*break*/, 941];
                        case "bi:BiSolidWinkTongue": return [3 /*break*/, 943];
                        case "bi:BiSolidWrench": return [3 /*break*/, 945];
                        case "bi:BiSolidXCircle": return [3 /*break*/, 947];
                        case "bi:BiSolidXSquare": return [3 /*break*/, 949];
                        case "bi:BiSolidYinYang": return [3 /*break*/, 951];
                        case "bi:BiSolidZap": return [3 /*break*/, 953];
                        case "bi:BiSolidZoomIn": return [3 /*break*/, 955];
                        case "bi:BiSolidZoomOut": return [3 /*break*/, 957];
                        case "bi:BiLogo500Px": return [3 /*break*/, 959];
                        case "bi:BiLogo99Designs": return [3 /*break*/, 961];
                        case "bi:BiLogoAdobe": return [3 /*break*/, 963];
                        case "bi:BiLogoAirbnb": return [3 /*break*/, 965];
                        case "bi:BiLogoAlgolia": return [3 /*break*/, 967];
                        case "bi:BiLogoAmazon": return [3 /*break*/, 969];
                        case "bi:BiLogoAndroid": return [3 /*break*/, 971];
                        case "bi:BiLogoAngular": return [3 /*break*/, 973];
                        case "bi:BiLogoApple": return [3 /*break*/, 975];
                        case "bi:BiLogoAudible": return [3 /*break*/, 977];
                        case "bi:BiLogoAws": return [3 /*break*/, 979];
                        case "bi:BiLogoBaidu": return [3 /*break*/, 981];
                        case "bi:BiLogoBehance": return [3 /*break*/, 983];
                        case "bi:BiLogoBing": return [3 /*break*/, 985];
                        case "bi:BiLogoBitcoin": return [3 /*break*/, 987];
                        case "bi:BiLogoBlender": return [3 /*break*/, 989];
                        case "bi:BiLogoBlogger": return [3 /*break*/, 991];
                        case "bi:BiLogoBootstrap": return [3 /*break*/, 993];
                        case "bi:BiLogoCPlusPlus": return [3 /*break*/, 995];
                        case "bi:BiLogoChrome": return [3 /*break*/, 997];
                        case "bi:BiLogoCodepen": return [3 /*break*/, 999];
                        case "bi:BiLogoCreativeCommons": return [3 /*break*/, 1001];
                        case "bi:BiLogoCss3": return [3 /*break*/, 1003];
                        case "bi:BiLogoDailymotion": return [3 /*break*/, 1005];
                        case "bi:BiLogoDeezer": return [3 /*break*/, 1007];
                        case "bi:BiLogoDevTo": return [3 /*break*/, 1009];
                        case "bi:BiLogoDeviantart": return [3 /*break*/, 1011];
                        case "bi:BiLogoDigg": return [3 /*break*/, 1013];
                        case "bi:BiLogoDigitalocean": return [3 /*break*/, 1015];
                        case "bi:BiLogoDiscordAlt": return [3 /*break*/, 1017];
                        case "bi:BiLogoDiscord": return [3 /*break*/, 1019];
                        case "bi:BiLogoDiscourse": return [3 /*break*/, 1021];
                        case "bi:BiLogoDjango": return [3 /*break*/, 1023];
                        case "bi:BiLogoDocker": return [3 /*break*/, 1025];
                        case "bi:BiLogoDribbble": return [3 /*break*/, 1027];
                        case "bi:BiLogoDropbox": return [3 /*break*/, 1029];
                        case "bi:BiLogoDrupal": return [3 /*break*/, 1031];
                        case "bi:BiLogoEbay": return [3 /*break*/, 1033];
                        case "bi:BiLogoEdge": return [3 /*break*/, 1035];
                        case "bi:BiLogoEtsy": return [3 /*break*/, 1037];
                        case "bi:BiLogoFacebookCircle": return [3 /*break*/, 1039];
                        case "bi:BiLogoFacebookSquare": return [3 /*break*/, 1041];
                        case "bi:BiLogoFacebook": return [3 /*break*/, 1043];
                        case "bi:BiLogoFigma": return [3 /*break*/, 1045];
                        case "bi:BiLogoFirebase": return [3 /*break*/, 1047];
                        case "bi:BiLogoFirefox": return [3 /*break*/, 1049];
                        case "bi:BiLogoFlask": return [3 /*break*/, 1051];
                        case "bi:BiLogoFlickrSquare": return [3 /*break*/, 1053];
                        case "bi:BiLogoFlickr": return [3 /*break*/, 1055];
                        case "bi:BiLogoFlutter": return [3 /*break*/, 1057];
                        case "bi:BiLogoFoursquare": return [3 /*break*/, 1059];
                        case "bi:BiLogoGit": return [3 /*break*/, 1061];
                        case "bi:BiLogoGithub": return [3 /*break*/, 1063];
                        case "bi:BiLogoGitlab": return [3 /*break*/, 1065];
                        case "bi:BiLogoGmail": return [3 /*break*/, 1067];
                        case "bi:BiLogoGoLang": return [3 /*break*/, 1069];
                        case "bi:BiLogoGoogleCloud": return [3 /*break*/, 1071];
                        case "bi:BiLogoGooglePlusCircle": return [3 /*break*/, 1073];
                        case "bi:BiLogoGooglePlus": return [3 /*break*/, 1075];
                        case "bi:BiLogoGoogle": return [3 /*break*/, 1077];
                        case "bi:BiLogoGraphql": return [3 /*break*/, 1079];
                        case "bi:BiLogoHeroku": return [3 /*break*/, 1081];
                        case "bi:BiLogoHtml5": return [3 /*break*/, 1083];
                        case "bi:BiLogoImdb": return [3 /*break*/, 1085];
                        case "bi:BiLogoInstagramAlt": return [3 /*break*/, 1087];
                        case "bi:BiLogoInstagram": return [3 /*break*/, 1089];
                        case "bi:BiLogoInternetExplorer": return [3 /*break*/, 1091];
                        case "bi:BiLogoInvision": return [3 /*break*/, 1093];
                        case "bi:BiLogoJava": return [3 /*break*/, 1095];
                        case "bi:BiLogoJavascript": return [3 /*break*/, 1097];
                        case "bi:BiLogoJoomla": return [3 /*break*/, 1099];
                        case "bi:BiLogoJquery": return [3 /*break*/, 1101];
                        case "bi:BiLogoJsfiddle": return [3 /*break*/, 1103];
                        case "bi:BiLogoKickstarter": return [3 /*break*/, 1105];
                        case "bi:BiLogoKubernetes": return [3 /*break*/, 1107];
                        case "bi:BiLogoLess": return [3 /*break*/, 1109];
                        case "bi:BiLogoLinkedinSquare": return [3 /*break*/, 1111];
                        case "bi:BiLogoLinkedin": return [3 /*break*/, 1113];
                        case "bi:BiLogoMagento": return [3 /*break*/, 1115];
                        case "bi:BiLogoMailchimp": return [3 /*break*/, 1117];
                        case "bi:BiLogoMarkdown": return [3 /*break*/, 1119];
                        case "bi:BiLogoMastercard": return [3 /*break*/, 1121];
                        case "bi:BiLogoMastodon": return [3 /*break*/, 1123];
                        case "bi:BiLogoMediumOld": return [3 /*break*/, 1125];
                        case "bi:BiLogoMediumSquare": return [3 /*break*/, 1127];
                        case "bi:BiLogoMedium": return [3 /*break*/, 1129];
                        case "bi:BiLogoMessenger": return [3 /*break*/, 1131];
                        case "bi:BiLogoMeta": return [3 /*break*/, 1133];
                        case "bi:BiLogoMicrosoftTeams": return [3 /*break*/, 1135];
                        case "bi:BiLogoMicrosoft": return [3 /*break*/, 1137];
                        case "bi:BiLogoMongodb": return [3 /*break*/, 1139];
                        case "bi:BiLogoNetlify": return [3 /*break*/, 1141];
                        case "bi:BiLogoNodejs": return [3 /*break*/, 1143];
                        case "bi:BiLogoOkRu": return [3 /*break*/, 1145];
                        case "bi:BiLogoOpera": return [3 /*break*/, 1147];
                        case "bi:BiLogoPatreon": return [3 /*break*/, 1149];
                        case "bi:BiLogoPaypal": return [3 /*break*/, 1151];
                        case "bi:BiLogoPeriscope": return [3 /*break*/, 1153];
                        case "bi:BiLogoPhp": return [3 /*break*/, 1155];
                        case "bi:BiLogoPinterestAlt": return [3 /*break*/, 1157];
                        case "bi:BiLogoPinterest": return [3 /*break*/, 1159];
                        case "bi:BiLogoPlayStore": return [3 /*break*/, 1161];
                        case "bi:BiLogoPocket": return [3 /*break*/, 1163];
                        case "bi:BiLogoPostgresql": return [3 /*break*/, 1165];
                        case "bi:BiLogoProductHunt": return [3 /*break*/, 1167];
                        case "bi:BiLogoPython": return [3 /*break*/, 1169];
                        case "bi:BiLogoQuora": return [3 /*break*/, 1171];
                        case "bi:BiLogoReact": return [3 /*break*/, 1173];
                        case "bi:BiLogoRedbubble": return [3 /*break*/, 1175];
                        case "bi:BiLogoReddit": return [3 /*break*/, 1177];
                        case "bi:BiLogoRedux": return [3 /*break*/, 1179];
                        case "bi:BiLogoSass": return [3 /*break*/, 1181];
                        case "bi:BiLogoShopify": return [3 /*break*/, 1183];
                        case "bi:BiLogoSketch": return [3 /*break*/, 1185];
                        case "bi:BiLogoSkype": return [3 /*break*/, 1187];
                        case "bi:BiLogoSlackOld": return [3 /*break*/, 1189];
                        case "bi:BiLogoSlack": return [3 /*break*/, 1191];
                        case "bi:BiLogoSnapchat": return [3 /*break*/, 1193];
                        case "bi:BiLogoSoundcloud": return [3 /*break*/, 1195];
                        case "bi:BiLogoSpotify": return [3 /*break*/, 1197];
                        case "bi:BiLogoSpringBoot": return [3 /*break*/, 1199];
                        case "bi:BiLogoSquarespace": return [3 /*break*/, 1201];
                        case "bi:BiLogoStackOverflow": return [3 /*break*/, 1203];
                        case "bi:BiLogoSteam": return [3 /*break*/, 1205];
                        case "bi:BiLogoStripe": return [3 /*break*/, 1207];
                        case "bi:BiLogoTailwindCss": return [3 /*break*/, 1209];
                        case "bi:BiLogoTelegram": return [3 /*break*/, 1211];
                        case "bi:BiLogoTiktok": return [3 /*break*/, 1213];
                        case "bi:BiLogoTrello": return [3 /*break*/, 1215];
                        case "bi:BiLogoTripAdvisor": return [3 /*break*/, 1217];
                        case "bi:BiLogoTumblr": return [3 /*break*/, 1219];
                        case "bi:BiLogoTux": return [3 /*break*/, 1221];
                        case "bi:BiLogoTwitch": return [3 /*break*/, 1223];
                        case "bi:BiLogoTwitter": return [3 /*break*/, 1225];
                        case "bi:BiLogoTypescript": return [3 /*break*/, 1227];
                        case "bi:BiLogoUnity": return [3 /*break*/, 1229];
                        case "bi:BiLogoUnsplash": return [3 /*break*/, 1231];
                        case "bi:BiLogoUpwork": return [3 /*break*/, 1233];
                        case "bi:BiLogoVenmo": return [3 /*break*/, 1235];
                        case "bi:BiLogoVimeo": return [3 /*break*/, 1237];
                        case "bi:BiLogoVisa": return [3 /*break*/, 1239];
                        case "bi:BiLogoVisualStudio": return [3 /*break*/, 1241];
                        case "bi:BiLogoVk": return [3 /*break*/, 1243];
                        case "bi:BiLogoVuejs": return [3 /*break*/, 1245];
                        case "bi:BiLogoWhatsappSquare": return [3 /*break*/, 1247];
                        case "bi:BiLogoWhatsapp": return [3 /*break*/, 1249];
                        case "bi:BiLogoWikipedia": return [3 /*break*/, 1251];
                        case "bi:BiLogoWindows": return [3 /*break*/, 1253];
                        case "bi:BiLogoWix": return [3 /*break*/, 1255];
                        case "bi:BiLogoWordpress": return [3 /*break*/, 1257];
                        case "bi:BiLogoXing": return [3 /*break*/, 1259];
                        case "bi:BiLogoYahoo": return [3 /*break*/, 1261];
                        case "bi:BiLogoYelp": return [3 /*break*/, 1263];
                        case "bi:BiLogoYoutube": return [3 /*break*/, 1265];
                        case "bi:BiLogoZoom": return [3 /*break*/, 1267];
                    }
                    return [3 /*break*/, 1269];
                case 1: return [4 /*yield*/, import("react-icons/bi")];
                case 2:
                    BiSolidCity = (_b.sent()).BiSolidCity;
                    return [2 /*return*/, BiSolidCity];
                case 3: return [4 /*yield*/, import("react-icons/bi")];
                case 4:
                    BiSolidClinic = (_b.sent()).BiSolidClinic;
                    return [2 /*return*/, BiSolidClinic];
                case 5: return [4 /*yield*/, import("react-icons/bi")];
                case 6:
                    BiSolidCloudDownload = (_b.sent()).BiSolidCloudDownload;
                    return [2 /*return*/, BiSolidCloudDownload];
                case 7: return [4 /*yield*/, import("react-icons/bi")];
                case 8:
                    BiSolidCloudLightning = (_b.sent()).BiSolidCloudLightning;
                    return [2 /*return*/, BiSolidCloudLightning];
                case 9: return [4 /*yield*/, import("react-icons/bi")];
                case 10:
                    BiSolidCloudRain = (_b.sent()).BiSolidCloudRain;
                    return [2 /*return*/, BiSolidCloudRain];
                case 11: return [4 /*yield*/, import("react-icons/bi")];
                case 12:
                    BiSolidCloudUpload = (_b.sent()).BiSolidCloudUpload;
                    return [2 /*return*/, BiSolidCloudUpload];
                case 13: return [4 /*yield*/, import("react-icons/bi")];
                case 14:
                    BiSolidCloud = (_b.sent()).BiSolidCloud;
                    return [2 /*return*/, BiSolidCloud];
                case 15: return [4 /*yield*/, import("react-icons/bi")];
                case 16:
                    BiSolidCoffeeAlt = (_b.sent()).BiSolidCoffeeAlt;
                    return [2 /*return*/, BiSolidCoffeeAlt];
                case 17: return [4 /*yield*/, import("react-icons/bi")];
                case 18:
                    BiSolidCoffeeBean = (_b.sent()).BiSolidCoffeeBean;
                    return [2 /*return*/, BiSolidCoffeeBean];
                case 19: return [4 /*yield*/, import("react-icons/bi")];
                case 20:
                    BiSolidCoffeeTogo = (_b.sent()).BiSolidCoffeeTogo;
                    return [2 /*return*/, BiSolidCoffeeTogo];
                case 21: return [4 /*yield*/, import("react-icons/bi")];
                case 22:
                    BiSolidCoffee = (_b.sent()).BiSolidCoffee;
                    return [2 /*return*/, BiSolidCoffee];
                case 23: return [4 /*yield*/, import("react-icons/bi")];
                case 24:
                    BiSolidCog = (_b.sent()).BiSolidCog;
                    return [2 /*return*/, BiSolidCog];
                case 25: return [4 /*yield*/, import("react-icons/bi")];
                case 26:
                    BiSolidCoinStack = (_b.sent()).BiSolidCoinStack;
                    return [2 /*return*/, BiSolidCoinStack];
                case 27: return [4 /*yield*/, import("react-icons/bi")];
                case 28:
                    BiSolidCoin = (_b.sent()).BiSolidCoin;
                    return [2 /*return*/, BiSolidCoin];
                case 29: return [4 /*yield*/, import("react-icons/bi")];
                case 30:
                    BiSolidCollection = (_b.sent()).BiSolidCollection;
                    return [2 /*return*/, BiSolidCollection];
                case 31: return [4 /*yield*/, import("react-icons/bi")];
                case 32:
                    BiSolidColorFill = (_b.sent()).BiSolidColorFill;
                    return [2 /*return*/, BiSolidColorFill];
                case 33: return [4 /*yield*/, import("react-icons/bi")];
                case 34:
                    BiSolidColor = (_b.sent()).BiSolidColor;
                    return [2 /*return*/, BiSolidColor];
                case 35: return [4 /*yield*/, import("react-icons/bi")];
                case 36:
                    BiSolidCommentAdd = (_b.sent()).BiSolidCommentAdd;
                    return [2 /*return*/, BiSolidCommentAdd];
                case 37: return [4 /*yield*/, import("react-icons/bi")];
                case 38:
                    BiSolidCommentCheck = (_b.sent()).BiSolidCommentCheck;
                    return [2 /*return*/, BiSolidCommentCheck];
                case 39: return [4 /*yield*/, import("react-icons/bi")];
                case 40:
                    BiSolidCommentDetail = (_b.sent()).BiSolidCommentDetail;
                    return [2 /*return*/, BiSolidCommentDetail];
                case 41: return [4 /*yield*/, import("react-icons/bi")];
                case 42:
                    BiSolidCommentDots = (_b.sent()).BiSolidCommentDots;
                    return [2 /*return*/, BiSolidCommentDots];
                case 43: return [4 /*yield*/, import("react-icons/bi")];
                case 44:
                    BiSolidCommentEdit = (_b.sent()).BiSolidCommentEdit;
                    return [2 /*return*/, BiSolidCommentEdit];
                case 45: return [4 /*yield*/, import("react-icons/bi")];
                case 46:
                    BiSolidCommentError = (_b.sent()).BiSolidCommentError;
                    return [2 /*return*/, BiSolidCommentError];
                case 47: return [4 /*yield*/, import("react-icons/bi")];
                case 48:
                    BiSolidCommentMinus = (_b.sent()).BiSolidCommentMinus;
                    return [2 /*return*/, BiSolidCommentMinus];
                case 49: return [4 /*yield*/, import("react-icons/bi")];
                case 50:
                    BiSolidCommentX = (_b.sent()).BiSolidCommentX;
                    return [2 /*return*/, BiSolidCommentX];
                case 51: return [4 /*yield*/, import("react-icons/bi")];
                case 52:
                    BiSolidComment = (_b.sent()).BiSolidComment;
                    return [2 /*return*/, BiSolidComment];
                case 53: return [4 /*yield*/, import("react-icons/bi")];
                case 54:
                    BiSolidCompass = (_b.sent()).BiSolidCompass;
                    return [2 /*return*/, BiSolidCompass];
                case 55: return [4 /*yield*/, import("react-icons/bi")];
                case 56:
                    BiSolidComponent = (_b.sent()).BiSolidComponent;
                    return [2 /*return*/, BiSolidComponent];
                case 57: return [4 /*yield*/, import("react-icons/bi")];
                case 58:
                    BiSolidConfused = (_b.sent()).BiSolidConfused;
                    return [2 /*return*/, BiSolidConfused];
                case 59: return [4 /*yield*/, import("react-icons/bi")];
                case 60:
                    BiSolidContact = (_b.sent()).BiSolidContact;
                    return [2 /*return*/, BiSolidContact];
                case 61: return [4 /*yield*/, import("react-icons/bi")];
                case 62:
                    BiSolidConversation = (_b.sent()).BiSolidConversation;
                    return [2 /*return*/, BiSolidConversation];
                case 63: return [4 /*yield*/, import("react-icons/bi")];
                case 64:
                    BiSolidCookie = (_b.sent()).BiSolidCookie;
                    return [2 /*return*/, BiSolidCookie];
                case 65: return [4 /*yield*/, import("react-icons/bi")];
                case 66:
                    BiSolidCool = (_b.sent()).BiSolidCool;
                    return [2 /*return*/, BiSolidCool];
                case 67: return [4 /*yield*/, import("react-icons/bi")];
                case 68:
                    BiSolidCopyAlt = (_b.sent()).BiSolidCopyAlt;
                    return [2 /*return*/, BiSolidCopyAlt];
                case 69: return [4 /*yield*/, import("react-icons/bi")];
                case 70:
                    BiSolidCopy = (_b.sent()).BiSolidCopy;
                    return [2 /*return*/, BiSolidCopy];
                case 71: return [4 /*yield*/, import("react-icons/bi")];
                case 72:
                    BiSolidCopyright = (_b.sent()).BiSolidCopyright;
                    return [2 /*return*/, BiSolidCopyright];
                case 73: return [4 /*yield*/, import("react-icons/bi")];
                case 74:
                    BiSolidCoupon = (_b.sent()).BiSolidCoupon;
                    return [2 /*return*/, BiSolidCoupon];
                case 75: return [4 /*yield*/, import("react-icons/bi")];
                case 76:
                    BiSolidCreditCardAlt = (_b.sent()).BiSolidCreditCardAlt;
                    return [2 /*return*/, BiSolidCreditCardAlt];
                case 77: return [4 /*yield*/, import("react-icons/bi")];
                case 78:
                    BiSolidCreditCardFront = (_b.sent()).BiSolidCreditCardFront;
                    return [2 /*return*/, BiSolidCreditCardFront];
                case 79: return [4 /*yield*/, import("react-icons/bi")];
                case 80:
                    BiSolidCreditCard = (_b.sent()).BiSolidCreditCard;
                    return [2 /*return*/, BiSolidCreditCard];
                case 81: return [4 /*yield*/, import("react-icons/bi")];
                case 82:
                    BiSolidCricketBall = (_b.sent()).BiSolidCricketBall;
                    return [2 /*return*/, BiSolidCricketBall];
                case 83: return [4 /*yield*/, import("react-icons/bi")];
                case 84:
                    BiSolidCrop = (_b.sent()).BiSolidCrop;
                    return [2 /*return*/, BiSolidCrop];
                case 85: return [4 /*yield*/, import("react-icons/bi")];
                case 86:
                    BiSolidCrown = (_b.sent()).BiSolidCrown;
                    return [2 /*return*/, BiSolidCrown];
                case 87: return [4 /*yield*/, import("react-icons/bi")];
                case 88:
                    BiSolidCubeAlt = (_b.sent()).BiSolidCubeAlt;
                    return [2 /*return*/, BiSolidCubeAlt];
                case 89: return [4 /*yield*/, import("react-icons/bi")];
                case 90:
                    BiSolidCube = (_b.sent()).BiSolidCube;
                    return [2 /*return*/, BiSolidCube];
                case 91: return [4 /*yield*/, import("react-icons/bi")];
                case 92:
                    BiSolidCuboid = (_b.sent()).BiSolidCuboid;
                    return [2 /*return*/, BiSolidCuboid];
                case 93: return [4 /*yield*/, import("react-icons/bi")];
                case 94:
                    BiSolidCustomize = (_b.sent()).BiSolidCustomize;
                    return [2 /*return*/, BiSolidCustomize];
                case 95: return [4 /*yield*/, import("react-icons/bi")];
                case 96:
                    BiSolidCylinder = (_b.sent()).BiSolidCylinder;
                    return [2 /*return*/, BiSolidCylinder];
                case 97: return [4 /*yield*/, import("react-icons/bi")];
                case 98:
                    BiSolidDashboard = (_b.sent()).BiSolidDashboard;
                    return [2 /*return*/, BiSolidDashboard];
                case 99: return [4 /*yield*/, import("react-icons/bi")];
                case 100:
                    BiSolidData = (_b.sent()).BiSolidData;
                    return [2 /*return*/, BiSolidData];
                case 101: return [4 /*yield*/, import("react-icons/bi")];
                case 102:
                    BiSolidDetail = (_b.sent()).BiSolidDetail;
                    return [2 /*return*/, BiSolidDetail];
                case 103: return [4 /*yield*/, import("react-icons/bi")];
                case 104:
                    BiSolidDevices = (_b.sent()).BiSolidDevices;
                    return [2 /*return*/, BiSolidDevices];
                case 105: return [4 /*yield*/, import("react-icons/bi")];
                case 106:
                    BiSolidDiamond = (_b.sent()).BiSolidDiamond;
                    return [2 /*return*/, BiSolidDiamond];
                case 107: return [4 /*yield*/, import("react-icons/bi")];
                case 108:
                    BiSolidDice1 = (_b.sent()).BiSolidDice1;
                    return [2 /*return*/, BiSolidDice1];
                case 109: return [4 /*yield*/, import("react-icons/bi")];
                case 110:
                    BiSolidDice2 = (_b.sent()).BiSolidDice2;
                    return [2 /*return*/, BiSolidDice2];
                case 111: return [4 /*yield*/, import("react-icons/bi")];
                case 112:
                    BiSolidDice3 = (_b.sent()).BiSolidDice3;
                    return [2 /*return*/, BiSolidDice3];
                case 113: return [4 /*yield*/, import("react-icons/bi")];
                case 114:
                    BiSolidDice4 = (_b.sent()).BiSolidDice4;
                    return [2 /*return*/, BiSolidDice4];
                case 115: return [4 /*yield*/, import("react-icons/bi")];
                case 116:
                    BiSolidDice5 = (_b.sent()).BiSolidDice5;
                    return [2 /*return*/, BiSolidDice5];
                case 117: return [4 /*yield*/, import("react-icons/bi")];
                case 118:
                    BiSolidDice6 = (_b.sent()).BiSolidDice6;
                    return [2 /*return*/, BiSolidDice6];
                case 119: return [4 /*yield*/, import("react-icons/bi")];
                case 120:
                    BiSolidDirectionLeft = (_b.sent()).BiSolidDirectionLeft;
                    return [2 /*return*/, BiSolidDirectionLeft];
                case 121: return [4 /*yield*/, import("react-icons/bi")];
                case 122:
                    BiSolidDirectionRight = (_b.sent()).BiSolidDirectionRight;
                    return [2 /*return*/, BiSolidDirectionRight];
                case 123: return [4 /*yield*/, import("react-icons/bi")];
                case 124:
                    BiSolidDirections = (_b.sent()).BiSolidDirections;
                    return [2 /*return*/, BiSolidDirections];
                case 125: return [4 /*yield*/, import("react-icons/bi")];
                case 126:
                    BiSolidDisc = (_b.sent()).BiSolidDisc;
                    return [2 /*return*/, BiSolidDisc];
                case 127: return [4 /*yield*/, import("react-icons/bi")];
                case 128:
                    BiSolidDiscount = (_b.sent()).BiSolidDiscount;
                    return [2 /*return*/, BiSolidDiscount];
                case 129: return [4 /*yield*/, import("react-icons/bi")];
                case 130:
                    BiSolidDish = (_b.sent()).BiSolidDish;
                    return [2 /*return*/, BiSolidDish];
                case 131: return [4 /*yield*/, import("react-icons/bi")];
                case 132:
                    BiSolidDislike = (_b.sent()).BiSolidDislike;
                    return [2 /*return*/, BiSolidDislike];
                case 133: return [4 /*yield*/, import("react-icons/bi")];
                case 134:
                    BiSolidDizzy = (_b.sent()).BiSolidDizzy;
                    return [2 /*return*/, BiSolidDizzy];
                case 135: return [4 /*yield*/, import("react-icons/bi")];
                case 136:
                    BiSolidDockBottom = (_b.sent()).BiSolidDockBottom;
                    return [2 /*return*/, BiSolidDockBottom];
                case 137: return [4 /*yield*/, import("react-icons/bi")];
                case 138:
                    BiSolidDockLeft = (_b.sent()).BiSolidDockLeft;
                    return [2 /*return*/, BiSolidDockLeft];
                case 139: return [4 /*yield*/, import("react-icons/bi")];
                case 140:
                    BiSolidDockRight = (_b.sent()).BiSolidDockRight;
                    return [2 /*return*/, BiSolidDockRight];
                case 141: return [4 /*yield*/, import("react-icons/bi")];
                case 142:
                    BiSolidDockTop = (_b.sent()).BiSolidDockTop;
                    return [2 /*return*/, BiSolidDockTop];
                case 143: return [4 /*yield*/, import("react-icons/bi")];
                case 144:
                    BiSolidDog = (_b.sent()).BiSolidDog;
                    return [2 /*return*/, BiSolidDog];
                case 145: return [4 /*yield*/, import("react-icons/bi")];
                case 146:
                    BiSolidDollarCircle = (_b.sent()).BiSolidDollarCircle;
                    return [2 /*return*/, BiSolidDollarCircle];
                case 147: return [4 /*yield*/, import("react-icons/bi")];
                case 148:
                    BiSolidDonateBlood = (_b.sent()).BiSolidDonateBlood;
                    return [2 /*return*/, BiSolidDonateBlood];
                case 149: return [4 /*yield*/, import("react-icons/bi")];
                case 150:
                    BiSolidDonateHeart = (_b.sent()).BiSolidDonateHeart;
                    return [2 /*return*/, BiSolidDonateHeart];
                case 151: return [4 /*yield*/, import("react-icons/bi")];
                case 152:
                    BiSolidDoorOpen = (_b.sent()).BiSolidDoorOpen;
                    return [2 /*return*/, BiSolidDoorOpen];
                case 153: return [4 /*yield*/, import("react-icons/bi")];
                case 154:
                    BiSolidDoughnutChart = (_b.sent()).BiSolidDoughnutChart;
                    return [2 /*return*/, BiSolidDoughnutChart];
                case 155: return [4 /*yield*/, import("react-icons/bi")];
                case 156:
                    BiSolidDownArrowAlt = (_b.sent()).BiSolidDownArrowAlt;
                    return [2 /*return*/, BiSolidDownArrowAlt];
                case 157: return [4 /*yield*/, import("react-icons/bi")];
                case 158:
                    BiSolidDownArrowCircle = (_b.sent()).BiSolidDownArrowCircle;
                    return [2 /*return*/, BiSolidDownArrowCircle];
                case 159: return [4 /*yield*/, import("react-icons/bi")];
                case 160:
                    BiSolidDownArrowSquare = (_b.sent()).BiSolidDownArrowSquare;
                    return [2 /*return*/, BiSolidDownArrowSquare];
                case 161: return [4 /*yield*/, import("react-icons/bi")];
                case 162:
                    BiSolidDownArrow = (_b.sent()).BiSolidDownArrow;
                    return [2 /*return*/, BiSolidDownArrow];
                case 163: return [4 /*yield*/, import("react-icons/bi")];
                case 164:
                    BiSolidDownload = (_b.sent()).BiSolidDownload;
                    return [2 /*return*/, BiSolidDownload];
                case 165: return [4 /*yield*/, import("react-icons/bi")];
                case 166:
                    BiSolidDownvote = (_b.sent()).BiSolidDownvote;
                    return [2 /*return*/, BiSolidDownvote];
                case 167: return [4 /*yield*/, import("react-icons/bi")];
                case 168:
                    BiSolidDrink = (_b.sent()).BiSolidDrink;
                    return [2 /*return*/, BiSolidDrink];
                case 169: return [4 /*yield*/, import("react-icons/bi")];
                case 170:
                    BiSolidDropletHalf = (_b.sent()).BiSolidDropletHalf;
                    return [2 /*return*/, BiSolidDropletHalf];
                case 171: return [4 /*yield*/, import("react-icons/bi")];
                case 172:
                    BiSolidDroplet = (_b.sent()).BiSolidDroplet;
                    return [2 /*return*/, BiSolidDroplet];
                case 173: return [4 /*yield*/, import("react-icons/bi")];
                case 174:
                    BiSolidDryer = (_b.sent()).BiSolidDryer;
                    return [2 /*return*/, BiSolidDryer];
                case 175: return [4 /*yield*/, import("react-icons/bi")];
                case 176:
                    BiSolidDuplicate = (_b.sent()).BiSolidDuplicate;
                    return [2 /*return*/, BiSolidDuplicate];
                case 177: return [4 /*yield*/, import("react-icons/bi")];
                case 178:
                    BiSolidEditAlt = (_b.sent()).BiSolidEditAlt;
                    return [2 /*return*/, BiSolidEditAlt];
                case 179: return [4 /*yield*/, import("react-icons/bi")];
                case 180:
                    BiSolidEditLocation = (_b.sent()).BiSolidEditLocation;
                    return [2 /*return*/, BiSolidEditLocation];
                case 181: return [4 /*yield*/, import("react-icons/bi")];
                case 182:
                    BiSolidEdit = (_b.sent()).BiSolidEdit;
                    return [2 /*return*/, BiSolidEdit];
                case 183: return [4 /*yield*/, import("react-icons/bi")];
                case 184:
                    BiSolidEject = (_b.sent()).BiSolidEject;
                    return [2 /*return*/, BiSolidEject];
                case 185: return [4 /*yield*/, import("react-icons/bi")];
                case 186:
                    BiSolidEnvelopeOpen = (_b.sent()).BiSolidEnvelopeOpen;
                    return [2 /*return*/, BiSolidEnvelopeOpen];
                case 187: return [4 /*yield*/, import("react-icons/bi")];
                case 188:
                    BiSolidEnvelope = (_b.sent()).BiSolidEnvelope;
                    return [2 /*return*/, BiSolidEnvelope];
                case 189: return [4 /*yield*/, import("react-icons/bi")];
                case 190:
                    BiSolidEraser = (_b.sent()).BiSolidEraser;
                    return [2 /*return*/, BiSolidEraser];
                case 191: return [4 /*yield*/, import("react-icons/bi")];
                case 192:
                    BiSolidErrorAlt = (_b.sent()).BiSolidErrorAlt;
                    return [2 /*return*/, BiSolidErrorAlt];
                case 193: return [4 /*yield*/, import("react-icons/bi")];
                case 194:
                    BiSolidErrorCircle = (_b.sent()).BiSolidErrorCircle;
                    return [2 /*return*/, BiSolidErrorCircle];
                case 195: return [4 /*yield*/, import("react-icons/bi")];
                case 196:
                    BiSolidError = (_b.sent()).BiSolidError;
                    return [2 /*return*/, BiSolidError];
                case 197: return [4 /*yield*/, import("react-icons/bi")];
                case 198:
                    BiSolidEvStation = (_b.sent()).BiSolidEvStation;
                    return [2 /*return*/, BiSolidEvStation];
                case 199: return [4 /*yield*/, import("react-icons/bi")];
                case 200:
                    BiSolidExit = (_b.sent()).BiSolidExit;
                    return [2 /*return*/, BiSolidExit];
                case 201: return [4 /*yield*/, import("react-icons/bi")];
                case 202:
                    BiSolidExtension = (_b.sent()).BiSolidExtension;
                    return [2 /*return*/, BiSolidExtension];
                case 203: return [4 /*yield*/, import("react-icons/bi")];
                case 204:
                    BiSolidEyedropper = (_b.sent()).BiSolidEyedropper;
                    return [2 /*return*/, BiSolidEyedropper];
                case 205: return [4 /*yield*/, import("react-icons/bi")];
                case 206:
                    BiSolidFaceMask = (_b.sent()).BiSolidFaceMask;
                    return [2 /*return*/, BiSolidFaceMask];
                case 207: return [4 /*yield*/, import("react-icons/bi")];
                case 208:
                    BiSolidFace = (_b.sent()).BiSolidFace;
                    return [2 /*return*/, BiSolidFace];
                case 209: return [4 /*yield*/, import("react-icons/bi")];
                case 210:
                    BiSolidFactory = (_b.sent()).BiSolidFactory;
                    return [2 /*return*/, BiSolidFactory];
                case 211: return [4 /*yield*/, import("react-icons/bi")];
                case 212:
                    BiSolidFastForwardCircle = (_b.sent()).BiSolidFastForwardCircle;
                    return [2 /*return*/, BiSolidFastForwardCircle];
                case 213: return [4 /*yield*/, import("react-icons/bi")];
                case 214:
                    BiSolidFileArchive = (_b.sent()).BiSolidFileArchive;
                    return [2 /*return*/, BiSolidFileArchive];
                case 215: return [4 /*yield*/, import("react-icons/bi")];
                case 216:
                    BiSolidFileBlank = (_b.sent()).BiSolidFileBlank;
                    return [2 /*return*/, BiSolidFileBlank];
                case 217: return [4 /*yield*/, import("react-icons/bi")];
                case 218:
                    BiSolidFileCss = (_b.sent()).BiSolidFileCss;
                    return [2 /*return*/, BiSolidFileCss];
                case 219: return [4 /*yield*/, import("react-icons/bi")];
                case 220:
                    BiSolidFileDoc = (_b.sent()).BiSolidFileDoc;
                    return [2 /*return*/, BiSolidFileDoc];
                case 221: return [4 /*yield*/, import("react-icons/bi")];
                case 222:
                    BiSolidFileExport = (_b.sent()).BiSolidFileExport;
                    return [2 /*return*/, BiSolidFileExport];
                case 223: return [4 /*yield*/, import("react-icons/bi")];
                case 224:
                    BiSolidFileFind = (_b.sent()).BiSolidFileFind;
                    return [2 /*return*/, BiSolidFileFind];
                case 225: return [4 /*yield*/, import("react-icons/bi")];
                case 226:
                    BiSolidFileGif = (_b.sent()).BiSolidFileGif;
                    return [2 /*return*/, BiSolidFileGif];
                case 227: return [4 /*yield*/, import("react-icons/bi")];
                case 228:
                    BiSolidFileHtml = (_b.sent()).BiSolidFileHtml;
                    return [2 /*return*/, BiSolidFileHtml];
                case 229: return [4 /*yield*/, import("react-icons/bi")];
                case 230:
                    BiSolidFileImage = (_b.sent()).BiSolidFileImage;
                    return [2 /*return*/, BiSolidFileImage];
                case 231: return [4 /*yield*/, import("react-icons/bi")];
                case 232:
                    BiSolidFileImport = (_b.sent()).BiSolidFileImport;
                    return [2 /*return*/, BiSolidFileImport];
                case 233: return [4 /*yield*/, import("react-icons/bi")];
                case 234:
                    BiSolidFileJpg = (_b.sent()).BiSolidFileJpg;
                    return [2 /*return*/, BiSolidFileJpg];
                case 235: return [4 /*yield*/, import("react-icons/bi")];
                case 236:
                    BiSolidFileJs = (_b.sent()).BiSolidFileJs;
                    return [2 /*return*/, BiSolidFileJs];
                case 237: return [4 /*yield*/, import("react-icons/bi")];
                case 238:
                    BiSolidFileJson = (_b.sent()).BiSolidFileJson;
                    return [2 /*return*/, BiSolidFileJson];
                case 239: return [4 /*yield*/, import("react-icons/bi")];
                case 240:
                    BiSolidFileMd = (_b.sent()).BiSolidFileMd;
                    return [2 /*return*/, BiSolidFileMd];
                case 241: return [4 /*yield*/, import("react-icons/bi")];
                case 242:
                    BiSolidFilePdf = (_b.sent()).BiSolidFilePdf;
                    return [2 /*return*/, BiSolidFilePdf];
                case 243: return [4 /*yield*/, import("react-icons/bi")];
                case 244:
                    BiSolidFilePlus = (_b.sent()).BiSolidFilePlus;
                    return [2 /*return*/, BiSolidFilePlus];
                case 245: return [4 /*yield*/, import("react-icons/bi")];
                case 246:
                    BiSolidFilePng = (_b.sent()).BiSolidFilePng;
                    return [2 /*return*/, BiSolidFilePng];
                case 247: return [4 /*yield*/, import("react-icons/bi")];
                case 248:
                    BiSolidFileTxt = (_b.sent()).BiSolidFileTxt;
                    return [2 /*return*/, BiSolidFileTxt];
                case 249: return [4 /*yield*/, import("react-icons/bi")];
                case 250:
                    BiSolidFile = (_b.sent()).BiSolidFile;
                    return [2 /*return*/, BiSolidFile];
                case 251: return [4 /*yield*/, import("react-icons/bi")];
                case 252:
                    BiSolidFilm = (_b.sent()).BiSolidFilm;
                    return [2 /*return*/, BiSolidFilm];
                case 253: return [4 /*yield*/, import("react-icons/bi")];
                case 254:
                    BiSolidFilterAlt = (_b.sent()).BiSolidFilterAlt;
                    return [2 /*return*/, BiSolidFilterAlt];
                case 255: return [4 /*yield*/, import("react-icons/bi")];
                case 256:
                    BiSolidFirstAid = (_b.sent()).BiSolidFirstAid;
                    return [2 /*return*/, BiSolidFirstAid];
                case 257: return [4 /*yield*/, import("react-icons/bi")];
                case 258:
                    BiSolidFlagAlt = (_b.sent()).BiSolidFlagAlt;
                    return [2 /*return*/, BiSolidFlagAlt];
                case 259: return [4 /*yield*/, import("react-icons/bi")];
                case 260:
                    BiSolidFlagCheckered = (_b.sent()).BiSolidFlagCheckered;
                    return [2 /*return*/, BiSolidFlagCheckered];
                case 261: return [4 /*yield*/, import("react-icons/bi")];
                case 262:
                    BiSolidFlag = (_b.sent()).BiSolidFlag;
                    return [2 /*return*/, BiSolidFlag];
                case 263: return [4 /*yield*/, import("react-icons/bi")];
                case 264:
                    BiSolidFlame = (_b.sent()).BiSolidFlame;
                    return [2 /*return*/, BiSolidFlame];
                case 265: return [4 /*yield*/, import("react-icons/bi")];
                case 266:
                    BiSolidFlask = (_b.sent()).BiSolidFlask;
                    return [2 /*return*/, BiSolidFlask];
                case 267: return [4 /*yield*/, import("react-icons/bi")];
                case 268:
                    BiSolidFlorist = (_b.sent()).BiSolidFlorist;
                    return [2 /*return*/, BiSolidFlorist];
                case 269: return [4 /*yield*/, import("react-icons/bi")];
                case 270:
                    BiSolidFolderMinus = (_b.sent()).BiSolidFolderMinus;
                    return [2 /*return*/, BiSolidFolderMinus];
                case 271: return [4 /*yield*/, import("react-icons/bi")];
                case 272:
                    BiSolidFolderOpen = (_b.sent()).BiSolidFolderOpen;
                    return [2 /*return*/, BiSolidFolderOpen];
                case 273: return [4 /*yield*/, import("react-icons/bi")];
                case 274:
                    BiSolidFolderPlus = (_b.sent()).BiSolidFolderPlus;
                    return [2 /*return*/, BiSolidFolderPlus];
                case 275: return [4 /*yield*/, import("react-icons/bi")];
                case 276:
                    BiSolidFolder = (_b.sent()).BiSolidFolder;
                    return [2 /*return*/, BiSolidFolder];
                case 277: return [4 /*yield*/, import("react-icons/bi")];
                case 278:
                    BiSolidFoodMenu = (_b.sent()).BiSolidFoodMenu;
                    return [2 /*return*/, BiSolidFoodMenu];
                case 279: return [4 /*yield*/, import("react-icons/bi")];
                case 280:
                    BiSolidFridge = (_b.sent()).BiSolidFridge;
                    return [2 /*return*/, BiSolidFridge];
                case 281: return [4 /*yield*/, import("react-icons/bi")];
                case 282:
                    BiSolidGame = (_b.sent()).BiSolidGame;
                    return [2 /*return*/, BiSolidGame];
                case 283: return [4 /*yield*/, import("react-icons/bi")];
                case 284:
                    BiSolidGasPump = (_b.sent()).BiSolidGasPump;
                    return [2 /*return*/, BiSolidGasPump];
                case 285: return [4 /*yield*/, import("react-icons/bi")];
                case 286:
                    BiSolidGhost = (_b.sent()).BiSolidGhost;
                    return [2 /*return*/, BiSolidGhost];
                case 287: return [4 /*yield*/, import("react-icons/bi")];
                case 288:
                    BiSolidGift = (_b.sent()).BiSolidGift;
                    return [2 /*return*/, BiSolidGift];
                case 289: return [4 /*yield*/, import("react-icons/bi")];
                case 290:
                    BiSolidGraduation = (_b.sent()).BiSolidGraduation;
                    return [2 /*return*/, BiSolidGraduation];
                case 291: return [4 /*yield*/, import("react-icons/bi")];
                case 292:
                    BiSolidGridAlt = (_b.sent()).BiSolidGridAlt;
                    return [2 /*return*/, BiSolidGridAlt];
                case 293: return [4 /*yield*/, import("react-icons/bi")];
                case 294:
                    BiSolidGrid = (_b.sent()).BiSolidGrid;
                    return [2 /*return*/, BiSolidGrid];
                case 295: return [4 /*yield*/, import("react-icons/bi")];
                case 296:
                    BiSolidGroup = (_b.sent()).BiSolidGroup;
                    return [2 /*return*/, BiSolidGroup];
                case 297: return [4 /*yield*/, import("react-icons/bi")];
                case 298:
                    BiSolidGuitarAmp = (_b.sent()).BiSolidGuitarAmp;
                    return [2 /*return*/, BiSolidGuitarAmp];
                case 299: return [4 /*yield*/, import("react-icons/bi")];
                case 300:
                    BiSolidHandDown = (_b.sent()).BiSolidHandDown;
                    return [2 /*return*/, BiSolidHandDown];
                case 301: return [4 /*yield*/, import("react-icons/bi")];
                case 302:
                    BiSolidHandLeft = (_b.sent()).BiSolidHandLeft;
                    return [2 /*return*/, BiSolidHandLeft];
                case 303: return [4 /*yield*/, import("react-icons/bi")];
                case 304:
                    BiSolidHandRight = (_b.sent()).BiSolidHandRight;
                    return [2 /*return*/, BiSolidHandRight];
                case 305: return [4 /*yield*/, import("react-icons/bi")];
                case 306:
                    BiSolidHandUp = (_b.sent()).BiSolidHandUp;
                    return [2 /*return*/, BiSolidHandUp];
                case 307: return [4 /*yield*/, import("react-icons/bi")];
                case 308:
                    BiSolidHand = (_b.sent()).BiSolidHand;
                    return [2 /*return*/, BiSolidHand];
                case 309: return [4 /*yield*/, import("react-icons/bi")];
                case 310:
                    BiSolidHappyAlt = (_b.sent()).BiSolidHappyAlt;
                    return [2 /*return*/, BiSolidHappyAlt];
                case 311: return [4 /*yield*/, import("react-icons/bi")];
                case 312:
                    BiSolidHappyBeaming = (_b.sent()).BiSolidHappyBeaming;
                    return [2 /*return*/, BiSolidHappyBeaming];
                case 313: return [4 /*yield*/, import("react-icons/bi")];
                case 314:
                    BiSolidHappyHeartEyes = (_b.sent()).BiSolidHappyHeartEyes;
                    return [2 /*return*/, BiSolidHappyHeartEyes];
                case 315: return [4 /*yield*/, import("react-icons/bi")];
                case 316:
                    BiSolidHappy = (_b.sent()).BiSolidHappy;
                    return [2 /*return*/, BiSolidHappy];
                case 317: return [4 /*yield*/, import("react-icons/bi")];
                case 318:
                    BiSolidHardHat = (_b.sent()).BiSolidHardHat;
                    return [2 /*return*/, BiSolidHardHat];
                case 319: return [4 /*yield*/, import("react-icons/bi")];
                case 320:
                    BiSolidHdd = (_b.sent()).BiSolidHdd;
                    return [2 /*return*/, BiSolidHdd];
                case 321: return [4 /*yield*/, import("react-icons/bi")];
                case 322:
                    BiSolidHeartCircle = (_b.sent()).BiSolidHeartCircle;
                    return [2 /*return*/, BiSolidHeartCircle];
                case 323: return [4 /*yield*/, import("react-icons/bi")];
                case 324:
                    BiSolidHeartSquare = (_b.sent()).BiSolidHeartSquare;
                    return [2 /*return*/, BiSolidHeartSquare];
                case 325: return [4 /*yield*/, import("react-icons/bi")];
                case 326:
                    BiSolidHeart = (_b.sent()).BiSolidHeart;
                    return [2 /*return*/, BiSolidHeart];
                case 327: return [4 /*yield*/, import("react-icons/bi")];
                case 328:
                    BiSolidHelpCircle = (_b.sent()).BiSolidHelpCircle;
                    return [2 /*return*/, BiSolidHelpCircle];
                case 329: return [4 /*yield*/, import("react-icons/bi")];
                case 330:
                    BiSolidHide = (_b.sent()).BiSolidHide;
                    return [2 /*return*/, BiSolidHide];
                case 331: return [4 /*yield*/, import("react-icons/bi")];
                case 332:
                    BiSolidHomeAlt2 = (_b.sent()).BiSolidHomeAlt2;
                    return [2 /*return*/, BiSolidHomeAlt2];
                case 333: return [4 /*yield*/, import("react-icons/bi")];
                case 334:
                    BiSolidHomeCircle = (_b.sent()).BiSolidHomeCircle;
                    return [2 /*return*/, BiSolidHomeCircle];
                case 335: return [4 /*yield*/, import("react-icons/bi")];
                case 336:
                    BiSolidHomeHeart = (_b.sent()).BiSolidHomeHeart;
                    return [2 /*return*/, BiSolidHomeHeart];
                case 337: return [4 /*yield*/, import("react-icons/bi")];
                case 338:
                    BiSolidHomeSmile = (_b.sent()).BiSolidHomeSmile;
                    return [2 /*return*/, BiSolidHomeSmile];
                case 339: return [4 /*yield*/, import("react-icons/bi")];
                case 340:
                    BiSolidHome = (_b.sent()).BiSolidHome;
                    return [2 /*return*/, BiSolidHome];
                case 341: return [4 /*yield*/, import("react-icons/bi")];
                case 342:
                    BiSolidHot = (_b.sent()).BiSolidHot;
                    return [2 /*return*/, BiSolidHot];
                case 343: return [4 /*yield*/, import("react-icons/bi")];
                case 344:
                    BiSolidHotel = (_b.sent()).BiSolidHotel;
                    return [2 /*return*/, BiSolidHotel];
                case 345: return [4 /*yield*/, import("react-icons/bi")];
                case 346:
                    BiSolidHourglassBottom = (_b.sent()).BiSolidHourglassBottom;
                    return [2 /*return*/, BiSolidHourglassBottom];
                case 347: return [4 /*yield*/, import("react-icons/bi")];
                case 348:
                    BiSolidHourglassTop = (_b.sent()).BiSolidHourglassTop;
                    return [2 /*return*/, BiSolidHourglassTop];
                case 349: return [4 /*yield*/, import("react-icons/bi")];
                case 350:
                    BiSolidHourglass = (_b.sent()).BiSolidHourglass;
                    return [2 /*return*/, BiSolidHourglass];
                case 351: return [4 /*yield*/, import("react-icons/bi")];
                case 352:
                    BiSolidIdCard = (_b.sent()).BiSolidIdCard;
                    return [2 /*return*/, BiSolidIdCard];
                case 353: return [4 /*yield*/, import("react-icons/bi")];
                case 354:
                    BiSolidImageAdd = (_b.sent()).BiSolidImageAdd;
                    return [2 /*return*/, BiSolidImageAdd];
                case 355: return [4 /*yield*/, import("react-icons/bi")];
                case 356:
                    BiSolidImageAlt = (_b.sent()).BiSolidImageAlt;
                    return [2 /*return*/, BiSolidImageAlt];
                case 357: return [4 /*yield*/, import("react-icons/bi")];
                case 358:
                    BiSolidImage = (_b.sent()).BiSolidImage;
                    return [2 /*return*/, BiSolidImage];
                case 359: return [4 /*yield*/, import("react-icons/bi")];
                case 360:
                    BiSolidInbox = (_b.sent()).BiSolidInbox;
                    return [2 /*return*/, BiSolidInbox];
                case 361: return [4 /*yield*/, import("react-icons/bi")];
                case 362:
                    BiSolidInfoCircle = (_b.sent()).BiSolidInfoCircle;
                    return [2 /*return*/, BiSolidInfoCircle];
                case 363: return [4 /*yield*/, import("react-icons/bi")];
                case 364:
                    BiSolidInfoSquare = (_b.sent()).BiSolidInfoSquare;
                    return [2 /*return*/, BiSolidInfoSquare];
                case 365: return [4 /*yield*/, import("react-icons/bi")];
                case 366:
                    BiSolidInjection = (_b.sent()).BiSolidInjection;
                    return [2 /*return*/, BiSolidInjection];
                case 367: return [4 /*yield*/, import("react-icons/bi")];
                case 368:
                    BiSolidInstitution = (_b.sent()).BiSolidInstitution;
                    return [2 /*return*/, BiSolidInstitution];
                case 369: return [4 /*yield*/, import("react-icons/bi")];
                case 370:
                    BiSolidInvader = (_b.sent()).BiSolidInvader;
                    return [2 /*return*/, BiSolidInvader];
                case 371: return [4 /*yield*/, import("react-icons/bi")];
                case 372:
                    BiSolidJoystickAlt = (_b.sent()).BiSolidJoystickAlt;
                    return [2 /*return*/, BiSolidJoystickAlt];
                case 373: return [4 /*yield*/, import("react-icons/bi")];
                case 374:
                    BiSolidJoystickButton = (_b.sent()).BiSolidJoystickButton;
                    return [2 /*return*/, BiSolidJoystickButton];
                case 375: return [4 /*yield*/, import("react-icons/bi")];
                case 376:
                    BiSolidJoystick = (_b.sent()).BiSolidJoystick;
                    return [2 /*return*/, BiSolidJoystick];
                case 377: return [4 /*yield*/, import("react-icons/bi")];
                case 378:
                    BiSolidKey = (_b.sent()).BiSolidKey;
                    return [2 /*return*/, BiSolidKey];
                case 379: return [4 /*yield*/, import("react-icons/bi")];
                case 380:
                    BiSolidKeyboard = (_b.sent()).BiSolidKeyboard;
                    return [2 /*return*/, BiSolidKeyboard];
                case 381: return [4 /*yield*/, import("react-icons/bi")];
                case 382:
                    BiSolidLabel = (_b.sent()).BiSolidLabel;
                    return [2 /*return*/, BiSolidLabel];
                case 383: return [4 /*yield*/, import("react-icons/bi")];
                case 384:
                    BiSolidLandmark = (_b.sent()).BiSolidLandmark;
                    return [2 /*return*/, BiSolidLandmark];
                case 385: return [4 /*yield*/, import("react-icons/bi")];
                case 386:
                    BiSolidLandscape = (_b.sent()).BiSolidLandscape;
                    return [2 /*return*/, BiSolidLandscape];
                case 387: return [4 /*yield*/, import("react-icons/bi")];
                case 388:
                    BiSolidLaugh = (_b.sent()).BiSolidLaugh;
                    return [2 /*return*/, BiSolidLaugh];
                case 389: return [4 /*yield*/, import("react-icons/bi")];
                case 390:
                    BiSolidLayerMinus = (_b.sent()).BiSolidLayerMinus;
                    return [2 /*return*/, BiSolidLayerMinus];
                case 391: return [4 /*yield*/, import("react-icons/bi")];
                case 392:
                    BiSolidLayerPlus = (_b.sent()).BiSolidLayerPlus;
                    return [2 /*return*/, BiSolidLayerPlus];
                case 393: return [4 /*yield*/, import("react-icons/bi")];
                case 394:
                    BiSolidLayer = (_b.sent()).BiSolidLayer;
                    return [2 /*return*/, BiSolidLayer];
                case 395: return [4 /*yield*/, import("react-icons/bi")];
                case 396:
                    BiSolidLayout = (_b.sent()).BiSolidLayout;
                    return [2 /*return*/, BiSolidLayout];
                case 397: return [4 /*yield*/, import("react-icons/bi")];
                case 398:
                    BiSolidLeaf = (_b.sent()).BiSolidLeaf;
                    return [2 /*return*/, BiSolidLeaf];
                case 399: return [4 /*yield*/, import("react-icons/bi")];
                case 400:
                    BiSolidLeftArrowAlt = (_b.sent()).BiSolidLeftArrowAlt;
                    return [2 /*return*/, BiSolidLeftArrowAlt];
                case 401: return [4 /*yield*/, import("react-icons/bi")];
                case 402:
                    BiSolidLeftArrowCircle = (_b.sent()).BiSolidLeftArrowCircle;
                    return [2 /*return*/, BiSolidLeftArrowCircle];
                case 403: return [4 /*yield*/, import("react-icons/bi")];
                case 404:
                    BiSolidLeftArrowSquare = (_b.sent()).BiSolidLeftArrowSquare;
                    return [2 /*return*/, BiSolidLeftArrowSquare];
                case 405: return [4 /*yield*/, import("react-icons/bi")];
                case 406:
                    BiSolidLeftArrow = (_b.sent()).BiSolidLeftArrow;
                    return [2 /*return*/, BiSolidLeftArrow];
                case 407: return [4 /*yield*/, import("react-icons/bi")];
                case 408:
                    BiSolidLeftDownArrowCircle = (_b.sent()).BiSolidLeftDownArrowCircle;
                    return [2 /*return*/, BiSolidLeftDownArrowCircle];
                case 409: return [4 /*yield*/, import("react-icons/bi")];
                case 410:
                    BiSolidLeftTopArrowCircle = (_b.sent()).BiSolidLeftTopArrowCircle;
                    return [2 /*return*/, BiSolidLeftTopArrowCircle];
                case 411: return [4 /*yield*/, import("react-icons/bi")];
                case 412:
                    BiSolidLemon = (_b.sent()).BiSolidLemon;
                    return [2 /*return*/, BiSolidLemon];
                case 413: return [4 /*yield*/, import("react-icons/bi")];
                case 414:
                    BiSolidLike = (_b.sent()).BiSolidLike;
                    return [2 /*return*/, BiSolidLike];
                case 415: return [4 /*yield*/, import("react-icons/bi")];
                case 416:
                    BiSolidLocationPlus = (_b.sent()).BiSolidLocationPlus;
                    return [2 /*return*/, BiSolidLocationPlus];
                case 417: return [4 /*yield*/, import("react-icons/bi")];
                case 418:
                    BiSolidLockAlt = (_b.sent()).BiSolidLockAlt;
                    return [2 /*return*/, BiSolidLockAlt];
                case 419: return [4 /*yield*/, import("react-icons/bi")];
                case 420:
                    BiSolidLockOpenAlt = (_b.sent()).BiSolidLockOpenAlt;
                    return [2 /*return*/, BiSolidLockOpenAlt];
                case 421: return [4 /*yield*/, import("react-icons/bi")];
                case 422:
                    BiSolidLockOpen = (_b.sent()).BiSolidLockOpen;
                    return [2 /*return*/, BiSolidLockOpen];
                case 423: return [4 /*yield*/, import("react-icons/bi")];
                case 424:
                    BiSolidLock = (_b.sent()).BiSolidLock;
                    return [2 /*return*/, BiSolidLock];
                case 425: return [4 /*yield*/, import("react-icons/bi")];
                case 426:
                    BiSolidLogInCircle = (_b.sent()).BiSolidLogInCircle;
                    return [2 /*return*/, BiSolidLogInCircle];
                case 427: return [4 /*yield*/, import("react-icons/bi")];
                case 428:
                    BiSolidLogIn = (_b.sent()).BiSolidLogIn;
                    return [2 /*return*/, BiSolidLogIn];
                case 429: return [4 /*yield*/, import("react-icons/bi")];
                case 430:
                    BiSolidLogOutCircle = (_b.sent()).BiSolidLogOutCircle;
                    return [2 /*return*/, BiSolidLogOutCircle];
                case 431: return [4 /*yield*/, import("react-icons/bi")];
                case 432:
                    BiSolidLogOut = (_b.sent()).BiSolidLogOut;
                    return [2 /*return*/, BiSolidLogOut];
                case 433: return [4 /*yield*/, import("react-icons/bi")];
                case 434:
                    BiSolidLowVision = (_b.sent()).BiSolidLowVision;
                    return [2 /*return*/, BiSolidLowVision];
                case 435: return [4 /*yield*/, import("react-icons/bi")];
                case 436:
                    BiSolidMagicWand = (_b.sent()).BiSolidMagicWand;
                    return [2 /*return*/, BiSolidMagicWand];
                case 437: return [4 /*yield*/, import("react-icons/bi")];
                case 438:
                    BiSolidMagnet = (_b.sent()).BiSolidMagnet;
                    return [2 /*return*/, BiSolidMagnet];
                case 439: return [4 /*yield*/, import("react-icons/bi")];
                case 440:
                    BiSolidMapAlt = (_b.sent()).BiSolidMapAlt;
                    return [2 /*return*/, BiSolidMapAlt];
                case 441: return [4 /*yield*/, import("react-icons/bi")];
                case 442:
                    BiSolidMapPin = (_b.sent()).BiSolidMapPin;
                    return [2 /*return*/, BiSolidMapPin];
                case 443: return [4 /*yield*/, import("react-icons/bi")];
                case 444:
                    BiSolidMap = (_b.sent()).BiSolidMap;
                    return [2 /*return*/, BiSolidMap];
                case 445: return [4 /*yield*/, import("react-icons/bi")];
                case 446:
                    BiSolidMask = (_b.sent()).BiSolidMask;
                    return [2 /*return*/, BiSolidMask];
                case 447: return [4 /*yield*/, import("react-icons/bi")];
                case 448:
                    BiSolidMedal = (_b.sent()).BiSolidMedal;
                    return [2 /*return*/, BiSolidMedal];
                case 449: return [4 /*yield*/, import("react-icons/bi")];
                case 450:
                    BiSolidMegaphone = (_b.sent()).BiSolidMegaphone;
                    return [2 /*return*/, BiSolidMegaphone];
                case 451: return [4 /*yield*/, import("react-icons/bi")];
                case 452:
                    BiSolidMehAlt = (_b.sent()).BiSolidMehAlt;
                    return [2 /*return*/, BiSolidMehAlt];
                case 453: return [4 /*yield*/, import("react-icons/bi")];
                case 454:
                    BiSolidMehBlank = (_b.sent()).BiSolidMehBlank;
                    return [2 /*return*/, BiSolidMehBlank];
                case 455: return [4 /*yield*/, import("react-icons/bi")];
                case 456:
                    BiSolidMeh = (_b.sent()).BiSolidMeh;
                    return [2 /*return*/, BiSolidMeh];
                case 457: return [4 /*yield*/, import("react-icons/bi")];
                case 458:
                    BiSolidMemoryCard = (_b.sent()).BiSolidMemoryCard;
                    return [2 /*return*/, BiSolidMemoryCard];
                case 459: return [4 /*yield*/, import("react-icons/bi")];
                case 460:
                    BiSolidMessageAdd = (_b.sent()).BiSolidMessageAdd;
                    return [2 /*return*/, BiSolidMessageAdd];
                case 461: return [4 /*yield*/, import("react-icons/bi")];
                case 462:
                    BiSolidMessageAltAdd = (_b.sent()).BiSolidMessageAltAdd;
                    return [2 /*return*/, BiSolidMessageAltAdd];
                case 463: return [4 /*yield*/, import("react-icons/bi")];
                case 464:
                    BiSolidMessageAltCheck = (_b.sent()).BiSolidMessageAltCheck;
                    return [2 /*return*/, BiSolidMessageAltCheck];
                case 465: return [4 /*yield*/, import("react-icons/bi")];
                case 466:
                    BiSolidMessageAltDetail = (_b.sent()).BiSolidMessageAltDetail;
                    return [2 /*return*/, BiSolidMessageAltDetail];
                case 467: return [4 /*yield*/, import("react-icons/bi")];
                case 468:
                    BiSolidMessageAltDots = (_b.sent()).BiSolidMessageAltDots;
                    return [2 /*return*/, BiSolidMessageAltDots];
                case 469: return [4 /*yield*/, import("react-icons/bi")];
                case 470:
                    BiSolidMessageAltEdit = (_b.sent()).BiSolidMessageAltEdit;
                    return [2 /*return*/, BiSolidMessageAltEdit];
                case 471: return [4 /*yield*/, import("react-icons/bi")];
                case 472:
                    BiSolidMessageAltError = (_b.sent()).BiSolidMessageAltError;
                    return [2 /*return*/, BiSolidMessageAltError];
                case 473: return [4 /*yield*/, import("react-icons/bi")];
                case 474:
                    BiSolidMessageAltMinus = (_b.sent()).BiSolidMessageAltMinus;
                    return [2 /*return*/, BiSolidMessageAltMinus];
                case 475: return [4 /*yield*/, import("react-icons/bi")];
                case 476:
                    BiSolidMessageAltX = (_b.sent()).BiSolidMessageAltX;
                    return [2 /*return*/, BiSolidMessageAltX];
                case 477: return [4 /*yield*/, import("react-icons/bi")];
                case 478:
                    BiSolidMessageAlt = (_b.sent()).BiSolidMessageAlt;
                    return [2 /*return*/, BiSolidMessageAlt];
                case 479: return [4 /*yield*/, import("react-icons/bi")];
                case 480:
                    BiSolidMessageCheck = (_b.sent()).BiSolidMessageCheck;
                    return [2 /*return*/, BiSolidMessageCheck];
                case 481: return [4 /*yield*/, import("react-icons/bi")];
                case 482:
                    BiSolidMessageDetail = (_b.sent()).BiSolidMessageDetail;
                    return [2 /*return*/, BiSolidMessageDetail];
                case 483: return [4 /*yield*/, import("react-icons/bi")];
                case 484:
                    BiSolidMessageDots = (_b.sent()).BiSolidMessageDots;
                    return [2 /*return*/, BiSolidMessageDots];
                case 485: return [4 /*yield*/, import("react-icons/bi")];
                case 486:
                    BiSolidMessageEdit = (_b.sent()).BiSolidMessageEdit;
                    return [2 /*return*/, BiSolidMessageEdit];
                case 487: return [4 /*yield*/, import("react-icons/bi")];
                case 488:
                    BiSolidMessageError = (_b.sent()).BiSolidMessageError;
                    return [2 /*return*/, BiSolidMessageError];
                case 489: return [4 /*yield*/, import("react-icons/bi")];
                case 490:
                    BiSolidMessageMinus = (_b.sent()).BiSolidMessageMinus;
                    return [2 /*return*/, BiSolidMessageMinus];
                case 491: return [4 /*yield*/, import("react-icons/bi")];
                case 492:
                    BiSolidMessageRoundedAdd = (_b.sent()).BiSolidMessageRoundedAdd;
                    return [2 /*return*/, BiSolidMessageRoundedAdd];
                case 493: return [4 /*yield*/, import("react-icons/bi")];
                case 494:
                    BiSolidMessageRoundedCheck = (_b.sent()).BiSolidMessageRoundedCheck;
                    return [2 /*return*/, BiSolidMessageRoundedCheck];
                case 495: return [4 /*yield*/, import("react-icons/bi")];
                case 496:
                    BiSolidMessageRoundedDetail = (_b.sent()).BiSolidMessageRoundedDetail;
                    return [2 /*return*/, BiSolidMessageRoundedDetail];
                case 497: return [4 /*yield*/, import("react-icons/bi")];
                case 498:
                    BiSolidMessageRoundedDots = (_b.sent()).BiSolidMessageRoundedDots;
                    return [2 /*return*/, BiSolidMessageRoundedDots];
                case 499: return [4 /*yield*/, import("react-icons/bi")];
                case 500:
                    BiSolidMessageRoundedEdit = (_b.sent()).BiSolidMessageRoundedEdit;
                    return [2 /*return*/, BiSolidMessageRoundedEdit];
                case 501: return [4 /*yield*/, import("react-icons/bi")];
                case 502:
                    BiSolidMessageRoundedError = (_b.sent()).BiSolidMessageRoundedError;
                    return [2 /*return*/, BiSolidMessageRoundedError];
                case 503: return [4 /*yield*/, import("react-icons/bi")];
                case 504:
                    BiSolidMessageRoundedMinus = (_b.sent()).BiSolidMessageRoundedMinus;
                    return [2 /*return*/, BiSolidMessageRoundedMinus];
                case 505: return [4 /*yield*/, import("react-icons/bi")];
                case 506:
                    BiSolidMessageRoundedX = (_b.sent()).BiSolidMessageRoundedX;
                    return [2 /*return*/, BiSolidMessageRoundedX];
                case 507: return [4 /*yield*/, import("react-icons/bi")];
                case 508:
                    BiSolidMessageRounded = (_b.sent()).BiSolidMessageRounded;
                    return [2 /*return*/, BiSolidMessageRounded];
                case 509: return [4 /*yield*/, import("react-icons/bi")];
                case 510:
                    BiSolidMessageSquareAdd = (_b.sent()).BiSolidMessageSquareAdd;
                    return [2 /*return*/, BiSolidMessageSquareAdd];
                case 511: return [4 /*yield*/, import("react-icons/bi")];
                case 512:
                    BiSolidMessageSquareCheck = (_b.sent()).BiSolidMessageSquareCheck;
                    return [2 /*return*/, BiSolidMessageSquareCheck];
                case 513: return [4 /*yield*/, import("react-icons/bi")];
                case 514:
                    BiSolidMessageSquareDetail = (_b.sent()).BiSolidMessageSquareDetail;
                    return [2 /*return*/, BiSolidMessageSquareDetail];
                case 515: return [4 /*yield*/, import("react-icons/bi")];
                case 516:
                    BiSolidMessageSquareDots = (_b.sent()).BiSolidMessageSquareDots;
                    return [2 /*return*/, BiSolidMessageSquareDots];
                case 517: return [4 /*yield*/, import("react-icons/bi")];
                case 518:
                    BiSolidMessageSquareEdit = (_b.sent()).BiSolidMessageSquareEdit;
                    return [2 /*return*/, BiSolidMessageSquareEdit];
                case 519: return [4 /*yield*/, import("react-icons/bi")];
                case 520:
                    BiSolidMessageSquareError = (_b.sent()).BiSolidMessageSquareError;
                    return [2 /*return*/, BiSolidMessageSquareError];
                case 521: return [4 /*yield*/, import("react-icons/bi")];
                case 522:
                    BiSolidMessageSquareMinus = (_b.sent()).BiSolidMessageSquareMinus;
                    return [2 /*return*/, BiSolidMessageSquareMinus];
                case 523: return [4 /*yield*/, import("react-icons/bi")];
                case 524:
                    BiSolidMessageSquareX = (_b.sent()).BiSolidMessageSquareX;
                    return [2 /*return*/, BiSolidMessageSquareX];
                case 525: return [4 /*yield*/, import("react-icons/bi")];
                case 526:
                    BiSolidMessageSquare = (_b.sent()).BiSolidMessageSquare;
                    return [2 /*return*/, BiSolidMessageSquare];
                case 527: return [4 /*yield*/, import("react-icons/bi")];
                case 528:
                    BiSolidMessageX = (_b.sent()).BiSolidMessageX;
                    return [2 /*return*/, BiSolidMessageX];
                case 529: return [4 /*yield*/, import("react-icons/bi")];
                case 530:
                    BiSolidMessage = (_b.sent()).BiSolidMessage;
                    return [2 /*return*/, BiSolidMessage];
                case 531: return [4 /*yield*/, import("react-icons/bi")];
                case 532:
                    BiSolidMeteor = (_b.sent()).BiSolidMeteor;
                    return [2 /*return*/, BiSolidMeteor];
                case 533: return [4 /*yield*/, import("react-icons/bi")];
                case 534:
                    BiSolidMicrochip = (_b.sent()).BiSolidMicrochip;
                    return [2 /*return*/, BiSolidMicrochip];
                case 535: return [4 /*yield*/, import("react-icons/bi")];
                case 536:
                    BiSolidMicrophoneAlt = (_b.sent()).BiSolidMicrophoneAlt;
                    return [2 /*return*/, BiSolidMicrophoneAlt];
                case 537: return [4 /*yield*/, import("react-icons/bi")];
                case 538:
                    BiSolidMicrophoneOff = (_b.sent()).BiSolidMicrophoneOff;
                    return [2 /*return*/, BiSolidMicrophoneOff];
                case 539: return [4 /*yield*/, import("react-icons/bi")];
                case 540:
                    BiSolidMicrophone = (_b.sent()).BiSolidMicrophone;
                    return [2 /*return*/, BiSolidMicrophone];
                case 541: return [4 /*yield*/, import("react-icons/bi")];
                case 542:
                    BiSolidMinusCircle = (_b.sent()).BiSolidMinusCircle;
                    return [2 /*return*/, BiSolidMinusCircle];
                case 543: return [4 /*yield*/, import("react-icons/bi")];
                case 544:
                    BiSolidMinusSquare = (_b.sent()).BiSolidMinusSquare;
                    return [2 /*return*/, BiSolidMinusSquare];
                case 545: return [4 /*yield*/, import("react-icons/bi")];
                case 546:
                    BiSolidMobileVibration = (_b.sent()).BiSolidMobileVibration;
                    return [2 /*return*/, BiSolidMobileVibration];
                case 547: return [4 /*yield*/, import("react-icons/bi")];
                case 548:
                    BiSolidMobile = (_b.sent()).BiSolidMobile;
                    return [2 /*return*/, BiSolidMobile];
                case 549: return [4 /*yield*/, import("react-icons/bi")];
                case 550:
                    BiSolidMoon = (_b.sent()).BiSolidMoon;
                    return [2 /*return*/, BiSolidMoon];
                case 551: return [4 /*yield*/, import("react-icons/bi")];
                case 552:
                    BiSolidMouseAlt = (_b.sent()).BiSolidMouseAlt;
                    return [2 /*return*/, BiSolidMouseAlt];
                case 553: return [4 /*yield*/, import("react-icons/bi")];
                case 554:
                    BiSolidMouse = (_b.sent()).BiSolidMouse;
                    return [2 /*return*/, BiSolidMouse];
                case 555: return [4 /*yield*/, import("react-icons/bi")];
                case 556:
                    BiSolidMoviePlay = (_b.sent()).BiSolidMoviePlay;
                    return [2 /*return*/, BiSolidMoviePlay];
                case 557: return [4 /*yield*/, import("react-icons/bi")];
                case 558:
                    BiSolidMovie = (_b.sent()).BiSolidMovie;
                    return [2 /*return*/, BiSolidMovie];
                case 559: return [4 /*yield*/, import("react-icons/bi")];
                case 560:
                    BiSolidMusic = (_b.sent()).BiSolidMusic;
                    return [2 /*return*/, BiSolidMusic];
                case 561: return [4 /*yield*/, import("react-icons/bi")];
                case 562:
                    BiSolidNavigation = (_b.sent()).BiSolidNavigation;
                    return [2 /*return*/, BiSolidNavigation];
                case 563: return [4 /*yield*/, import("react-icons/bi")];
                case 564:
                    BiSolidNetworkChart = (_b.sent()).BiSolidNetworkChart;
                    return [2 /*return*/, BiSolidNetworkChart];
                case 565: return [4 /*yield*/, import("react-icons/bi")];
                case 566:
                    BiSolidNews = (_b.sent()).BiSolidNews;
                    return [2 /*return*/, BiSolidNews];
                case 567: return [4 /*yield*/, import("react-icons/bi")];
                case 568:
                    BiSolidNoEntry = (_b.sent()).BiSolidNoEntry;
                    return [2 /*return*/, BiSolidNoEntry];
                case 569: return [4 /*yield*/, import("react-icons/bi")];
                case 570:
                    BiSolidNote = (_b.sent()).BiSolidNote;
                    return [2 /*return*/, BiSolidNote];
                case 571: return [4 /*yield*/, import("react-icons/bi")];
                case 572:
                    BiSolidNotepad = (_b.sent()).BiSolidNotepad;
                    return [2 /*return*/, BiSolidNotepad];
                case 573: return [4 /*yield*/, import("react-icons/bi")];
                case 574:
                    BiSolidNotificationOff = (_b.sent()).BiSolidNotificationOff;
                    return [2 /*return*/, BiSolidNotificationOff];
                case 575: return [4 /*yield*/, import("react-icons/bi")];
                case 576:
                    BiSolidNotification = (_b.sent()).BiSolidNotification;
                    return [2 /*return*/, BiSolidNotification];
                case 577: return [4 /*yield*/, import("react-icons/bi")];
                case 578:
                    BiSolidObjectsHorizontalCenter = (_b.sent()).BiSolidObjectsHorizontalCenter;
                    return [2 /*return*/, BiSolidObjectsHorizontalCenter];
                case 579: return [4 /*yield*/, import("react-icons/bi")];
                case 580:
                    BiSolidObjectsHorizontalLeft = (_b.sent()).BiSolidObjectsHorizontalLeft;
                    return [2 /*return*/, BiSolidObjectsHorizontalLeft];
                case 581: return [4 /*yield*/, import("react-icons/bi")];
                case 582:
                    BiSolidObjectsHorizontalRight = (_b.sent()).BiSolidObjectsHorizontalRight;
                    return [2 /*return*/, BiSolidObjectsHorizontalRight];
                case 583: return [4 /*yield*/, import("react-icons/bi")];
                case 584:
                    BiSolidObjectsVerticalBottom = (_b.sent()).BiSolidObjectsVerticalBottom;
                    return [2 /*return*/, BiSolidObjectsVerticalBottom];
                case 585: return [4 /*yield*/, import("react-icons/bi")];
                case 586:
                    BiSolidObjectsVerticalCenter = (_b.sent()).BiSolidObjectsVerticalCenter;
                    return [2 /*return*/, BiSolidObjectsVerticalCenter];
                case 587: return [4 /*yield*/, import("react-icons/bi")];
                case 588:
                    BiSolidObjectsVerticalTop = (_b.sent()).BiSolidObjectsVerticalTop;
                    return [2 /*return*/, BiSolidObjectsVerticalTop];
                case 589: return [4 /*yield*/, import("react-icons/bi")];
                case 590:
                    BiSolidOffer = (_b.sent()).BiSolidOffer;
                    return [2 /*return*/, BiSolidOffer];
                case 591: return [4 /*yield*/, import("react-icons/bi")];
                case 592:
                    BiSolidPackage = (_b.sent()).BiSolidPackage;
                    return [2 /*return*/, BiSolidPackage];
                case 593: return [4 /*yield*/, import("react-icons/bi")];
                case 594:
                    BiSolidPaintRoll = (_b.sent()).BiSolidPaintRoll;
                    return [2 /*return*/, BiSolidPaintRoll];
                case 595: return [4 /*yield*/, import("react-icons/bi")];
                case 596:
                    BiSolidPaint = (_b.sent()).BiSolidPaint;
                    return [2 /*return*/, BiSolidPaint];
                case 597: return [4 /*yield*/, import("react-icons/bi")];
                case 598:
                    BiSolidPalette = (_b.sent()).BiSolidPalette;
                    return [2 /*return*/, BiSolidPalette];
                case 599: return [4 /*yield*/, import("react-icons/bi")];
                case 600:
                    BiSolidPaperPlane = (_b.sent()).BiSolidPaperPlane;
                    return [2 /*return*/, BiSolidPaperPlane];
                case 601: return [4 /*yield*/, import("react-icons/bi")];
                case 602:
                    BiSolidParking = (_b.sent()).BiSolidParking;
                    return [2 /*return*/, BiSolidParking];
                case 603: return [4 /*yield*/, import("react-icons/bi")];
                case 604:
                    BiSolidParty = (_b.sent()).BiSolidParty;
                    return [2 /*return*/, BiSolidParty];
                case 605: return [4 /*yield*/, import("react-icons/bi")];
                case 606:
                    BiSolidPaste = (_b.sent()).BiSolidPaste;
                    return [2 /*return*/, BiSolidPaste];
                case 607: return [4 /*yield*/, import("react-icons/bi")];
                case 608:
                    BiSolidPear = (_b.sent()).BiSolidPear;
                    return [2 /*return*/, BiSolidPear];
                case 609: return [4 /*yield*/, import("react-icons/bi")];
                case 610:
                    BiSolidPen = (_b.sent()).BiSolidPen;
                    return [2 /*return*/, BiSolidPen];
                case 611: return [4 /*yield*/, import("react-icons/bi")];
                case 612:
                    BiSolidPencil = (_b.sent()).BiSolidPencil;
                    return [2 /*return*/, BiSolidPencil];
                case 613: return [4 /*yield*/, import("react-icons/bi")];
                case 614:
                    BiSolidPhoneCall = (_b.sent()).BiSolidPhoneCall;
                    return [2 /*return*/, BiSolidPhoneCall];
                case 615: return [4 /*yield*/, import("react-icons/bi")];
                case 616:
                    BiSolidPhoneIncoming = (_b.sent()).BiSolidPhoneIncoming;
                    return [2 /*return*/, BiSolidPhoneIncoming];
                case 617: return [4 /*yield*/, import("react-icons/bi")];
                case 618:
                    BiSolidPhoneOff = (_b.sent()).BiSolidPhoneOff;
                    return [2 /*return*/, BiSolidPhoneOff];
                case 619: return [4 /*yield*/, import("react-icons/bi")];
                case 620:
                    BiSolidPhoneOutgoing = (_b.sent()).BiSolidPhoneOutgoing;
                    return [2 /*return*/, BiSolidPhoneOutgoing];
                case 621: return [4 /*yield*/, import("react-icons/bi")];
                case 622:
                    BiSolidPhone = (_b.sent()).BiSolidPhone;
                    return [2 /*return*/, BiSolidPhone];
                case 623: return [4 /*yield*/, import("react-icons/bi")];
                case 624:
                    BiSolidPhotoAlbum = (_b.sent()).BiSolidPhotoAlbum;
                    return [2 /*return*/, BiSolidPhotoAlbum];
                case 625: return [4 /*yield*/, import("react-icons/bi")];
                case 626:
                    BiSolidPiano = (_b.sent()).BiSolidPiano;
                    return [2 /*return*/, BiSolidPiano];
                case 627: return [4 /*yield*/, import("react-icons/bi")];
                case 628:
                    BiSolidPieChartAlt2 = (_b.sent()).BiSolidPieChartAlt2;
                    return [2 /*return*/, BiSolidPieChartAlt2];
                case 629: return [4 /*yield*/, import("react-icons/bi")];
                case 630:
                    BiSolidPieChartAlt = (_b.sent()).BiSolidPieChartAlt;
                    return [2 /*return*/, BiSolidPieChartAlt];
                case 631: return [4 /*yield*/, import("react-icons/bi")];
                case 632:
                    BiSolidPieChart = (_b.sent()).BiSolidPieChart;
                    return [2 /*return*/, BiSolidPieChart];
                case 633: return [4 /*yield*/, import("react-icons/bi")];
                case 634:
                    BiSolidPin = (_b.sent()).BiSolidPin;
                    return [2 /*return*/, BiSolidPin];
                case 635: return [4 /*yield*/, import("react-icons/bi")];
                case 636:
                    BiSolidPizza = (_b.sent()).BiSolidPizza;
                    return [2 /*return*/, BiSolidPizza];
                case 637: return [4 /*yield*/, import("react-icons/bi")];
                case 638:
                    BiSolidPlaneAlt = (_b.sent()).BiSolidPlaneAlt;
                    return [2 /*return*/, BiSolidPlaneAlt];
                case 639: return [4 /*yield*/, import("react-icons/bi")];
                case 640:
                    BiSolidPlaneLand = (_b.sent()).BiSolidPlaneLand;
                    return [2 /*return*/, BiSolidPlaneLand];
                case 641: return [4 /*yield*/, import("react-icons/bi")];
                case 642:
                    BiSolidPlaneTakeOff = (_b.sent()).BiSolidPlaneTakeOff;
                    return [2 /*return*/, BiSolidPlaneTakeOff];
                case 643: return [4 /*yield*/, import("react-icons/bi")];
                case 644:
                    BiSolidPlane = (_b.sent()).BiSolidPlane;
                    return [2 /*return*/, BiSolidPlane];
                case 645: return [4 /*yield*/, import("react-icons/bi")];
                case 646:
                    BiSolidPlanet = (_b.sent()).BiSolidPlanet;
                    return [2 /*return*/, BiSolidPlanet];
                case 647: return [4 /*yield*/, import("react-icons/bi")];
                case 648:
                    BiSolidPlaylist = (_b.sent()).BiSolidPlaylist;
                    return [2 /*return*/, BiSolidPlaylist];
                case 649: return [4 /*yield*/, import("react-icons/bi")];
                case 650:
                    BiSolidPlug = (_b.sent()).BiSolidPlug;
                    return [2 /*return*/, BiSolidPlug];
                case 651: return [4 /*yield*/, import("react-icons/bi")];
                case 652:
                    BiSolidPlusCircle = (_b.sent()).BiSolidPlusCircle;
                    return [2 /*return*/, BiSolidPlusCircle];
                case 653: return [4 /*yield*/, import("react-icons/bi")];
                case 654:
                    BiSolidPlusSquare = (_b.sent()).BiSolidPlusSquare;
                    return [2 /*return*/, BiSolidPlusSquare];
                case 655: return [4 /*yield*/, import("react-icons/bi")];
                case 656:
                    BiSolidPointer = (_b.sent()).BiSolidPointer;
                    return [2 /*return*/, BiSolidPointer];
                case 657: return [4 /*yield*/, import("react-icons/bi")];
                case 658:
                    BiSolidPolygon = (_b.sent()).BiSolidPolygon;
                    return [2 /*return*/, BiSolidPolygon];
                case 659: return [4 /*yield*/, import("react-icons/bi")];
                case 660:
                    BiSolidPopsicle = (_b.sent()).BiSolidPopsicle;
                    return [2 /*return*/, BiSolidPopsicle];
                case 661: return [4 /*yield*/, import("react-icons/bi")];
                case 662:
                    BiSolidPrinter = (_b.sent()).BiSolidPrinter;
                    return [2 /*return*/, BiSolidPrinter];
                case 663: return [4 /*yield*/, import("react-icons/bi")];
                case 664:
                    BiSolidPurchaseTagAlt = (_b.sent()).BiSolidPurchaseTagAlt;
                    return [2 /*return*/, BiSolidPurchaseTagAlt];
                case 665: return [4 /*yield*/, import("react-icons/bi")];
                case 666:
                    BiSolidPurchaseTag = (_b.sent()).BiSolidPurchaseTag;
                    return [2 /*return*/, BiSolidPurchaseTag];
                case 667: return [4 /*yield*/, import("react-icons/bi")];
                case 668:
                    BiSolidPyramid = (_b.sent()).BiSolidPyramid;
                    return [2 /*return*/, BiSolidPyramid];
                case 669: return [4 /*yield*/, import("react-icons/bi")];
                case 670:
                    BiSolidQuoteAltLeft = (_b.sent()).BiSolidQuoteAltLeft;
                    return [2 /*return*/, BiSolidQuoteAltLeft];
                case 671: return [4 /*yield*/, import("react-icons/bi")];
                case 672:
                    BiSolidQuoteAltRight = (_b.sent()).BiSolidQuoteAltRight;
                    return [2 /*return*/, BiSolidQuoteAltRight];
                case 673: return [4 /*yield*/, import("react-icons/bi")];
                case 674:
                    BiSolidQuoteLeft = (_b.sent()).BiSolidQuoteLeft;
                    return [2 /*return*/, BiSolidQuoteLeft];
                case 675: return [4 /*yield*/, import("react-icons/bi")];
                case 676:
                    BiSolidQuoteRight = (_b.sent()).BiSolidQuoteRight;
                    return [2 /*return*/, BiSolidQuoteRight];
                case 677: return [4 /*yield*/, import("react-icons/bi")];
                case 678:
                    BiSolidQuoteSingleLeft = (_b.sent()).BiSolidQuoteSingleLeft;
                    return [2 /*return*/, BiSolidQuoteSingleLeft];
                case 679: return [4 /*yield*/, import("react-icons/bi")];
                case 680:
                    BiSolidQuoteSingleRight = (_b.sent()).BiSolidQuoteSingleRight;
                    return [2 /*return*/, BiSolidQuoteSingleRight];
                case 681: return [4 /*yield*/, import("react-icons/bi")];
                case 682:
                    BiSolidRadiation = (_b.sent()).BiSolidRadiation;
                    return [2 /*return*/, BiSolidRadiation];
                case 683: return [4 /*yield*/, import("react-icons/bi")];
                case 684:
                    BiSolidRadio = (_b.sent()).BiSolidRadio;
                    return [2 /*return*/, BiSolidRadio];
                case 685: return [4 /*yield*/, import("react-icons/bi")];
                case 686:
                    BiSolidReceipt = (_b.sent()).BiSolidReceipt;
                    return [2 /*return*/, BiSolidReceipt];
                case 687: return [4 /*yield*/, import("react-icons/bi")];
                case 688:
                    BiSolidRectangle = (_b.sent()).BiSolidRectangle;
                    return [2 /*return*/, BiSolidRectangle];
                case 689: return [4 /*yield*/, import("react-icons/bi")];
                case 690:
                    BiSolidRegistered = (_b.sent()).BiSolidRegistered;
                    return [2 /*return*/, BiSolidRegistered];
                case 691: return [4 /*yield*/, import("react-icons/bi")];
                case 692:
                    BiSolidRename = (_b.sent()).BiSolidRename;
                    return [2 /*return*/, BiSolidRename];
                case 693: return [4 /*yield*/, import("react-icons/bi")];
                case 694:
                    BiSolidReport = (_b.sent()).BiSolidReport;
                    return [2 /*return*/, BiSolidReport];
                case 695: return [4 /*yield*/, import("react-icons/bi")];
                case 696:
                    BiSolidRewindCircle = (_b.sent()).BiSolidRewindCircle;
                    return [2 /*return*/, BiSolidRewindCircle];
                case 697: return [4 /*yield*/, import("react-icons/bi")];
                case 698:
                    BiSolidRightArrowAlt = (_b.sent()).BiSolidRightArrowAlt;
                    return [2 /*return*/, BiSolidRightArrowAlt];
                case 699: return [4 /*yield*/, import("react-icons/bi")];
                case 700:
                    BiSolidRightArrowCircle = (_b.sent()).BiSolidRightArrowCircle;
                    return [2 /*return*/, BiSolidRightArrowCircle];
                case 701: return [4 /*yield*/, import("react-icons/bi")];
                case 702:
                    BiSolidRightArrowSquare = (_b.sent()).BiSolidRightArrowSquare;
                    return [2 /*return*/, BiSolidRightArrowSquare];
                case 703: return [4 /*yield*/, import("react-icons/bi")];
                case 704:
                    BiSolidRightArrow = (_b.sent()).BiSolidRightArrow;
                    return [2 /*return*/, BiSolidRightArrow];
                case 705: return [4 /*yield*/, import("react-icons/bi")];
                case 706:
                    BiSolidRightDownArrowCircle = (_b.sent()).BiSolidRightDownArrowCircle;
                    return [2 /*return*/, BiSolidRightDownArrowCircle];
                case 707: return [4 /*yield*/, import("react-icons/bi")];
                case 708:
                    BiSolidRightTopArrowCircle = (_b.sent()).BiSolidRightTopArrowCircle;
                    return [2 /*return*/, BiSolidRightTopArrowCircle];
                case 709: return [4 /*yield*/, import("react-icons/bi")];
                case 710:
                    BiSolidRocket = (_b.sent()).BiSolidRocket;
                    return [2 /*return*/, BiSolidRocket];
                case 711: return [4 /*yield*/, import("react-icons/bi")];
                case 712:
                    BiSolidRuler = (_b.sent()).BiSolidRuler;
                    return [2 /*return*/, BiSolidRuler];
                case 713: return [4 /*yield*/, import("react-icons/bi")];
                case 714:
                    BiSolidSad = (_b.sent()).BiSolidSad;
                    return [2 /*return*/, BiSolidSad];
                case 715: return [4 /*yield*/, import("react-icons/bi")];
                case 716:
                    BiSolidSave = (_b.sent()).BiSolidSave;
                    return [2 /*return*/, BiSolidSave];
                case 717: return [4 /*yield*/, import("react-icons/bi")];
                case 718:
                    BiSolidSchool = (_b.sent()).BiSolidSchool;
                    return [2 /*return*/, BiSolidSchool];
                case 719: return [4 /*yield*/, import("react-icons/bi")];
                case 720:
                    BiSolidSearchAlt2 = (_b.sent()).BiSolidSearchAlt2;
                    return [2 /*return*/, BiSolidSearchAlt2];
                case 721: return [4 /*yield*/, import("react-icons/bi")];
                case 722:
                    BiSolidSearch = (_b.sent()).BiSolidSearch;
                    return [2 /*return*/, BiSolidSearch];
                case 723: return [4 /*yield*/, import("react-icons/bi")];
                case 724:
                    BiSolidSelectMultiple = (_b.sent()).BiSolidSelectMultiple;
                    return [2 /*return*/, BiSolidSelectMultiple];
                case 725: return [4 /*yield*/, import("react-icons/bi")];
                case 726:
                    BiSolidSend = (_b.sent()).BiSolidSend;
                    return [2 /*return*/, BiSolidSend];
                case 727: return [4 /*yield*/, import("react-icons/bi")];
                case 728:
                    BiSolidServer = (_b.sent()).BiSolidServer;
                    return [2 /*return*/, BiSolidServer];
                case 729: return [4 /*yield*/, import("react-icons/bi")];
                case 730:
                    BiSolidShapes = (_b.sent()).BiSolidShapes;
                    return [2 /*return*/, BiSolidShapes];
                case 731: return [4 /*yield*/, import("react-icons/bi")];
                case 732:
                    BiSolidShareAlt = (_b.sent()).BiSolidShareAlt;
                    return [2 /*return*/, BiSolidShareAlt];
                case 733: return [4 /*yield*/, import("react-icons/bi")];
                case 734:
                    BiSolidShare = (_b.sent()).BiSolidShare;
                    return [2 /*return*/, BiSolidShare];
                case 735: return [4 /*yield*/, import("react-icons/bi")];
                case 736:
                    BiSolidShieldAlt2 = (_b.sent()).BiSolidShieldAlt2;
                    return [2 /*return*/, BiSolidShieldAlt2];
                case 737: return [4 /*yield*/, import("react-icons/bi")];
                case 738:
                    BiSolidShieldMinus = (_b.sent()).BiSolidShieldMinus;
                    return [2 /*return*/, BiSolidShieldMinus];
                case 739: return [4 /*yield*/, import("react-icons/bi")];
                case 740:
                    BiSolidShieldPlus = (_b.sent()).BiSolidShieldPlus;
                    return [2 /*return*/, BiSolidShieldPlus];
                case 741: return [4 /*yield*/, import("react-icons/bi")];
                case 742:
                    BiSolidShieldX = (_b.sent()).BiSolidShieldX;
                    return [2 /*return*/, BiSolidShieldX];
                case 743: return [4 /*yield*/, import("react-icons/bi")];
                case 744:
                    BiSolidShield = (_b.sent()).BiSolidShield;
                    return [2 /*return*/, BiSolidShield];
                case 745: return [4 /*yield*/, import("react-icons/bi")];
                case 746:
                    BiSolidShip = (_b.sent()).BiSolidShip;
                    return [2 /*return*/, BiSolidShip];
                case 747: return [4 /*yield*/, import("react-icons/bi")];
                case 748:
                    BiSolidShocked = (_b.sent()).BiSolidShocked;
                    return [2 /*return*/, BiSolidShocked];
                case 749: return [4 /*yield*/, import("react-icons/bi")];
                case 750:
                    BiSolidShoppingBagAlt = (_b.sent()).BiSolidShoppingBagAlt;
                    return [2 /*return*/, BiSolidShoppingBagAlt];
                case 751: return [4 /*yield*/, import("react-icons/bi")];
                case 752:
                    BiSolidShoppingBag = (_b.sent()).BiSolidShoppingBag;
                    return [2 /*return*/, BiSolidShoppingBag];
                case 753: return [4 /*yield*/, import("react-icons/bi")];
                case 754:
                    BiSolidShoppingBags = (_b.sent()).BiSolidShoppingBags;
                    return [2 /*return*/, BiSolidShoppingBags];
                case 755: return [4 /*yield*/, import("react-icons/bi")];
                case 756:
                    BiSolidShow = (_b.sent()).BiSolidShow;
                    return [2 /*return*/, BiSolidShow];
                case 757: return [4 /*yield*/, import("react-icons/bi")];
                case 758:
                    BiSolidShower = (_b.sent()).BiSolidShower;
                    return [2 /*return*/, BiSolidShower];
                case 759: return [4 /*yield*/, import("react-icons/bi")];
                case 760:
                    BiSolidSkipNextCircle = (_b.sent()).BiSolidSkipNextCircle;
                    return [2 /*return*/, BiSolidSkipNextCircle];
                case 761: return [4 /*yield*/, import("react-icons/bi")];
                case 762:
                    BiSolidSkipPreviousCircle = (_b.sent()).BiSolidSkipPreviousCircle;
                    return [2 /*return*/, BiSolidSkipPreviousCircle];
                case 763: return [4 /*yield*/, import("react-icons/bi")];
                case 764:
                    BiSolidSkull = (_b.sent()).BiSolidSkull;
                    return [2 /*return*/, BiSolidSkull];
                case 765: return [4 /*yield*/, import("react-icons/bi")];
                case 766:
                    BiSolidSleepy = (_b.sent()).BiSolidSleepy;
                    return [2 /*return*/, BiSolidSleepy];
                case 767: return [4 /*yield*/, import("react-icons/bi")];
                case 768:
                    BiSolidSlideshow = (_b.sent()).BiSolidSlideshow;
                    return [2 /*return*/, BiSolidSlideshow];
                case 769: return [4 /*yield*/, import("react-icons/bi")];
                case 770:
                    BiSolidSmile = (_b.sent()).BiSolidSmile;
                    return [2 /*return*/, BiSolidSmile];
                case 771: return [4 /*yield*/, import("react-icons/bi")];
                case 772:
                    BiSolidSortAlt = (_b.sent()).BiSolidSortAlt;
                    return [2 /*return*/, BiSolidSortAlt];
                case 773: return [4 /*yield*/, import("react-icons/bi")];
                case 774:
                    BiSolidSpa = (_b.sent()).BiSolidSpa;
                    return [2 /*return*/, BiSolidSpa];
                case 775: return [4 /*yield*/, import("react-icons/bi")];
                case 776:
                    BiSolidSpeaker = (_b.sent()).BiSolidSpeaker;
                    return [2 /*return*/, BiSolidSpeaker];
                case 777: return [4 /*yield*/, import("react-icons/bi")];
                case 778:
                    BiSolidSprayCan = (_b.sent()).BiSolidSprayCan;
                    return [2 /*return*/, BiSolidSprayCan];
                case 779: return [4 /*yield*/, import("react-icons/bi")];
                case 780:
                    BiSolidSpreadsheet = (_b.sent()).BiSolidSpreadsheet;
                    return [2 /*return*/, BiSolidSpreadsheet];
                case 781: return [4 /*yield*/, import("react-icons/bi")];
                case 782:
                    BiSolidSquareRounded = (_b.sent()).BiSolidSquareRounded;
                    return [2 /*return*/, BiSolidSquareRounded];
                case 783: return [4 /*yield*/, import("react-icons/bi")];
                case 784:
                    BiSolidSquare = (_b.sent()).BiSolidSquare;
                    return [2 /*return*/, BiSolidSquare];
                case 785: return [4 /*yield*/, import("react-icons/bi")];
                case 786:
                    BiSolidStarHalf = (_b.sent()).BiSolidStarHalf;
                    return [2 /*return*/, BiSolidStarHalf];
                case 787: return [4 /*yield*/, import("react-icons/bi")];
                case 788:
                    BiSolidStar = (_b.sent()).BiSolidStar;
                    return [2 /*return*/, BiSolidStar];
                case 789: return [4 /*yield*/, import("react-icons/bi")];
                case 790:
                    BiSolidSticker = (_b.sent()).BiSolidSticker;
                    return [2 /*return*/, BiSolidSticker];
                case 791: return [4 /*yield*/, import("react-icons/bi")];
                case 792:
                    BiSolidStopwatch = (_b.sent()).BiSolidStopwatch;
                    return [2 /*return*/, BiSolidStopwatch];
                case 793: return [4 /*yield*/, import("react-icons/bi")];
                case 794:
                    BiSolidStoreAlt = (_b.sent()).BiSolidStoreAlt;
                    return [2 /*return*/, BiSolidStoreAlt];
                case 795: return [4 /*yield*/, import("react-icons/bi")];
                case 796:
                    BiSolidStore = (_b.sent()).BiSolidStore;
                    return [2 /*return*/, BiSolidStore];
                case 797: return [4 /*yield*/, import("react-icons/bi")];
                case 798:
                    BiSolidSun = (_b.sent()).BiSolidSun;
                    return [2 /*return*/, BiSolidSun];
                case 799: return [4 /*yield*/, import("react-icons/bi")];
                case 800:
                    BiSolidSushi = (_b.sent()).BiSolidSushi;
                    return [2 /*return*/, BiSolidSushi];
                case 801: return [4 /*yield*/, import("react-icons/bi")];
                case 802:
                    BiSolidTShirt = (_b.sent()).BiSolidTShirt;
                    return [2 /*return*/, BiSolidTShirt];
                case 803: return [4 /*yield*/, import("react-icons/bi")];
                case 804:
                    BiSolidTachometer = (_b.sent()).BiSolidTachometer;
                    return [2 /*return*/, BiSolidTachometer];
                case 805: return [4 /*yield*/, import("react-icons/bi")];
                case 806:
                    BiSolidTagAlt = (_b.sent()).BiSolidTagAlt;
                    return [2 /*return*/, BiSolidTagAlt];
                case 807: return [4 /*yield*/, import("react-icons/bi")];
                case 808:
                    BiSolidTagX = (_b.sent()).BiSolidTagX;
                    return [2 /*return*/, BiSolidTagX];
                case 809: return [4 /*yield*/, import("react-icons/bi")];
                case 810:
                    BiSolidTag = (_b.sent()).BiSolidTag;
                    return [2 /*return*/, BiSolidTag];
                case 811: return [4 /*yield*/, import("react-icons/bi")];
                case 812:
                    BiSolidTaxi = (_b.sent()).BiSolidTaxi;
                    return [2 /*return*/, BiSolidTaxi];
                case 813: return [4 /*yield*/, import("react-icons/bi")];
                case 814:
                    BiSolidTennisBall = (_b.sent()).BiSolidTennisBall;
                    return [2 /*return*/, BiSolidTennisBall];
                case 815: return [4 /*yield*/, import("react-icons/bi")];
                case 816:
                    BiSolidTerminal = (_b.sent()).BiSolidTerminal;
                    return [2 /*return*/, BiSolidTerminal];
                case 817: return [4 /*yield*/, import("react-icons/bi")];
                case 818:
                    BiSolidThermometer = (_b.sent()).BiSolidThermometer;
                    return [2 /*return*/, BiSolidThermometer];
                case 819: return [4 /*yield*/, import("react-icons/bi")];
                case 820:
                    BiSolidTimeFive = (_b.sent()).BiSolidTimeFive;
                    return [2 /*return*/, BiSolidTimeFive];
                case 821: return [4 /*yield*/, import("react-icons/bi")];
                case 822:
                    BiSolidTime = (_b.sent()).BiSolidTime;
                    return [2 /*return*/, BiSolidTime];
                case 823: return [4 /*yield*/, import("react-icons/bi")];
                case 824:
                    BiSolidTimer = (_b.sent()).BiSolidTimer;
                    return [2 /*return*/, BiSolidTimer];
                case 825: return [4 /*yield*/, import("react-icons/bi")];
                case 826:
                    BiSolidTired = (_b.sent()).BiSolidTired;
                    return [2 /*return*/, BiSolidTired];
                case 827: return [4 /*yield*/, import("react-icons/bi")];
                case 828:
                    BiSolidToTop = (_b.sent()).BiSolidToTop;
                    return [2 /*return*/, BiSolidToTop];
                case 829: return [4 /*yield*/, import("react-icons/bi")];
                case 830:
                    BiSolidToggleLeft = (_b.sent()).BiSolidToggleLeft;
                    return [2 /*return*/, BiSolidToggleLeft];
                case 831: return [4 /*yield*/, import("react-icons/bi")];
                case 832:
                    BiSolidToggleRight = (_b.sent()).BiSolidToggleRight;
                    return [2 /*return*/, BiSolidToggleRight];
                case 833: return [4 /*yield*/, import("react-icons/bi")];
                case 834:
                    BiSolidTone = (_b.sent()).BiSolidTone;
                    return [2 /*return*/, BiSolidTone];
                case 835: return [4 /*yield*/, import("react-icons/bi")];
                case 836:
                    BiSolidTorch = (_b.sent()).BiSolidTorch;
                    return [2 /*return*/, BiSolidTorch];
                case 837: return [4 /*yield*/, import("react-icons/bi")];
                case 838:
                    BiSolidTrafficBarrier = (_b.sent()).BiSolidTrafficBarrier;
                    return [2 /*return*/, BiSolidTrafficBarrier];
                case 839: return [4 /*yield*/, import("react-icons/bi")];
                case 840:
                    BiSolidTrafficCone = (_b.sent()).BiSolidTrafficCone;
                    return [2 /*return*/, BiSolidTrafficCone];
                case 841: return [4 /*yield*/, import("react-icons/bi")];
                case 842:
                    BiSolidTraffic = (_b.sent()).BiSolidTraffic;
                    return [2 /*return*/, BiSolidTraffic];
                case 843: return [4 /*yield*/, import("react-icons/bi")];
                case 844:
                    BiSolidTrain = (_b.sent()).BiSolidTrain;
                    return [2 /*return*/, BiSolidTrain];
                case 845: return [4 /*yield*/, import("react-icons/bi")];
                case 846:
                    BiSolidTrashAlt = (_b.sent()).BiSolidTrashAlt;
                    return [2 /*return*/, BiSolidTrashAlt];
                case 847: return [4 /*yield*/, import("react-icons/bi")];
                case 848:
                    BiSolidTrash = (_b.sent()).BiSolidTrash;
                    return [2 /*return*/, BiSolidTrash];
                case 849: return [4 /*yield*/, import("react-icons/bi")];
                case 850:
                    BiSolidTreeAlt = (_b.sent()).BiSolidTreeAlt;
                    return [2 /*return*/, BiSolidTreeAlt];
                case 851: return [4 /*yield*/, import("react-icons/bi")];
                case 852:
                    BiSolidTree = (_b.sent()).BiSolidTree;
                    return [2 /*return*/, BiSolidTree];
                case 853: return [4 /*yield*/, import("react-icons/bi")];
                case 854:
                    BiSolidTrophy = (_b.sent()).BiSolidTrophy;
                    return [2 /*return*/, BiSolidTrophy];
                case 855: return [4 /*yield*/, import("react-icons/bi")];
                case 856:
                    BiSolidTruck = (_b.sent()).BiSolidTruck;
                    return [2 /*return*/, BiSolidTruck];
                case 857: return [4 /*yield*/, import("react-icons/bi")];
                case 858:
                    BiSolidTv = (_b.sent()).BiSolidTv;
                    return [2 /*return*/, BiSolidTv];
                case 859: return [4 /*yield*/, import("react-icons/bi")];
                case 860:
                    BiSolidUniversalAccess = (_b.sent()).BiSolidUniversalAccess;
                    return [2 /*return*/, BiSolidUniversalAccess];
                case 861: return [4 /*yield*/, import("react-icons/bi")];
                case 862:
                    BiSolidUpArrowAlt = (_b.sent()).BiSolidUpArrowAlt;
                    return [2 /*return*/, BiSolidUpArrowAlt];
                case 863: return [4 /*yield*/, import("react-icons/bi")];
                case 864:
                    BiSolidUpArrowCircle = (_b.sent()).BiSolidUpArrowCircle;
                    return [2 /*return*/, BiSolidUpArrowCircle];
                case 865: return [4 /*yield*/, import("react-icons/bi")];
                case 866:
                    BiSolidUpArrowSquare = (_b.sent()).BiSolidUpArrowSquare;
                    return [2 /*return*/, BiSolidUpArrowSquare];
                case 867: return [4 /*yield*/, import("react-icons/bi")];
                case 868:
                    BiSolidUpArrow = (_b.sent()).BiSolidUpArrow;
                    return [2 /*return*/, BiSolidUpArrow];
                case 869: return [4 /*yield*/, import("react-icons/bi")];
                case 870:
                    BiSolidUpsideDown = (_b.sent()).BiSolidUpsideDown;
                    return [2 /*return*/, BiSolidUpsideDown];
                case 871: return [4 /*yield*/, import("react-icons/bi")];
                case 872:
                    BiSolidUpvote = (_b.sent()).BiSolidUpvote;
                    return [2 /*return*/, BiSolidUpvote];
                case 873: return [4 /*yield*/, import("react-icons/bi")];
                case 874:
                    BiSolidUserAccount = (_b.sent()).BiSolidUserAccount;
                    return [2 /*return*/, BiSolidUserAccount];
                case 875: return [4 /*yield*/, import("react-icons/bi")];
                case 876:
                    BiSolidUserBadge = (_b.sent()).BiSolidUserBadge;
                    return [2 /*return*/, BiSolidUserBadge];
                case 877: return [4 /*yield*/, import("react-icons/bi")];
                case 878:
                    BiSolidUserCheck = (_b.sent()).BiSolidUserCheck;
                    return [2 /*return*/, BiSolidUserCheck];
                case 879: return [4 /*yield*/, import("react-icons/bi")];
                case 880:
                    BiSolidUserCircle = (_b.sent()).BiSolidUserCircle;
                    return [2 /*return*/, BiSolidUserCircle];
                case 881: return [4 /*yield*/, import("react-icons/bi")];
                case 882:
                    BiSolidUserDetail = (_b.sent()).BiSolidUserDetail;
                    return [2 /*return*/, BiSolidUserDetail];
                case 883: return [4 /*yield*/, import("react-icons/bi")];
                case 884:
                    BiSolidUserMinus = (_b.sent()).BiSolidUserMinus;
                    return [2 /*return*/, BiSolidUserMinus];
                case 885: return [4 /*yield*/, import("react-icons/bi")];
                case 886:
                    BiSolidUserPin = (_b.sent()).BiSolidUserPin;
                    return [2 /*return*/, BiSolidUserPin];
                case 887: return [4 /*yield*/, import("react-icons/bi")];
                case 888:
                    BiSolidUserPlus = (_b.sent()).BiSolidUserPlus;
                    return [2 /*return*/, BiSolidUserPlus];
                case 889: return [4 /*yield*/, import("react-icons/bi")];
                case 890:
                    BiSolidUserRectangle = (_b.sent()).BiSolidUserRectangle;
                    return [2 /*return*/, BiSolidUserRectangle];
                case 891: return [4 /*yield*/, import("react-icons/bi")];
                case 892:
                    BiSolidUserVoice = (_b.sent()).BiSolidUserVoice;
                    return [2 /*return*/, BiSolidUserVoice];
                case 893: return [4 /*yield*/, import("react-icons/bi")];
                case 894:
                    BiSolidUserX = (_b.sent()).BiSolidUserX;
                    return [2 /*return*/, BiSolidUserX];
                case 895: return [4 /*yield*/, import("react-icons/bi")];
                case 896:
                    BiSolidUser = (_b.sent()).BiSolidUser;
                    return [2 /*return*/, BiSolidUser];
                case 897: return [4 /*yield*/, import("react-icons/bi")];
                case 898:
                    BiSolidVector = (_b.sent()).BiSolidVector;
                    return [2 /*return*/, BiSolidVector];
                case 899: return [4 /*yield*/, import("react-icons/bi")];
                case 900:
                    BiSolidVial = (_b.sent()).BiSolidVial;
                    return [2 /*return*/, BiSolidVial];
                case 901: return [4 /*yield*/, import("react-icons/bi")];
                case 902:
                    BiSolidVideoOff = (_b.sent()).BiSolidVideoOff;
                    return [2 /*return*/, BiSolidVideoOff];
                case 903: return [4 /*yield*/, import("react-icons/bi")];
                case 904:
                    BiSolidVideoPlus = (_b.sent()).BiSolidVideoPlus;
                    return [2 /*return*/, BiSolidVideoPlus];
                case 905: return [4 /*yield*/, import("react-icons/bi")];
                case 906:
                    BiSolidVideoRecording = (_b.sent()).BiSolidVideoRecording;
                    return [2 /*return*/, BiSolidVideoRecording];
                case 907: return [4 /*yield*/, import("react-icons/bi")];
                case 908:
                    BiSolidVideo = (_b.sent()).BiSolidVideo;
                    return [2 /*return*/, BiSolidVideo];
                case 909: return [4 /*yield*/, import("react-icons/bi")];
                case 910:
                    BiSolidVideos = (_b.sent()).BiSolidVideos;
                    return [2 /*return*/, BiSolidVideos];
                case 911: return [4 /*yield*/, import("react-icons/bi")];
                case 912:
                    BiSolidVirusBlock = (_b.sent()).BiSolidVirusBlock;
                    return [2 /*return*/, BiSolidVirusBlock];
                case 913: return [4 /*yield*/, import("react-icons/bi")];
                case 914:
                    BiSolidVirus = (_b.sent()).BiSolidVirus;
                    return [2 /*return*/, BiSolidVirus];
                case 915: return [4 /*yield*/, import("react-icons/bi")];
                case 916:
                    BiSolidVolumeFull = (_b.sent()).BiSolidVolumeFull;
                    return [2 /*return*/, BiSolidVolumeFull];
                case 917: return [4 /*yield*/, import("react-icons/bi")];
                case 918:
                    BiSolidVolumeLow = (_b.sent()).BiSolidVolumeLow;
                    return [2 /*return*/, BiSolidVolumeLow];
                case 919: return [4 /*yield*/, import("react-icons/bi")];
                case 920:
                    BiSolidVolumeMute = (_b.sent()).BiSolidVolumeMute;
                    return [2 /*return*/, BiSolidVolumeMute];
                case 921: return [4 /*yield*/, import("react-icons/bi")];
                case 922:
                    BiSolidVolume = (_b.sent()).BiSolidVolume;
                    return [2 /*return*/, BiSolidVolume];
                case 923: return [4 /*yield*/, import("react-icons/bi")];
                case 924:
                    BiSolidWalletAlt = (_b.sent()).BiSolidWalletAlt;
                    return [2 /*return*/, BiSolidWalletAlt];
                case 925: return [4 /*yield*/, import("react-icons/bi")];
                case 926:
                    BiSolidWallet = (_b.sent()).BiSolidWallet;
                    return [2 /*return*/, BiSolidWallet];
                case 927: return [4 /*yield*/, import("react-icons/bi")];
                case 928:
                    BiSolidWasher = (_b.sent()).BiSolidWasher;
                    return [2 /*return*/, BiSolidWasher];
                case 929: return [4 /*yield*/, import("react-icons/bi")];
                case 930:
                    BiSolidWatchAlt = (_b.sent()).BiSolidWatchAlt;
                    return [2 /*return*/, BiSolidWatchAlt];
                case 931: return [4 /*yield*/, import("react-icons/bi")];
                case 932:
                    BiSolidWatch = (_b.sent()).BiSolidWatch;
                    return [2 /*return*/, BiSolidWatch];
                case 933: return [4 /*yield*/, import("react-icons/bi")];
                case 934:
                    BiSolidWebcam = (_b.sent()).BiSolidWebcam;
                    return [2 /*return*/, BiSolidWebcam];
                case 935: return [4 /*yield*/, import("react-icons/bi")];
                case 936:
                    BiSolidWidget = (_b.sent()).BiSolidWidget;
                    return [2 /*return*/, BiSolidWidget];
                case 937: return [4 /*yield*/, import("react-icons/bi")];
                case 938:
                    BiSolidWindowAlt = (_b.sent()).BiSolidWindowAlt;
                    return [2 /*return*/, BiSolidWindowAlt];
                case 939: return [4 /*yield*/, import("react-icons/bi")];
                case 940:
                    BiSolidWine = (_b.sent()).BiSolidWine;
                    return [2 /*return*/, BiSolidWine];
                case 941: return [4 /*yield*/, import("react-icons/bi")];
                case 942:
                    BiSolidWinkSmile = (_b.sent()).BiSolidWinkSmile;
                    return [2 /*return*/, BiSolidWinkSmile];
                case 943: return [4 /*yield*/, import("react-icons/bi")];
                case 944:
                    BiSolidWinkTongue = (_b.sent()).BiSolidWinkTongue;
                    return [2 /*return*/, BiSolidWinkTongue];
                case 945: return [4 /*yield*/, import("react-icons/bi")];
                case 946:
                    BiSolidWrench = (_b.sent()).BiSolidWrench;
                    return [2 /*return*/, BiSolidWrench];
                case 947: return [4 /*yield*/, import("react-icons/bi")];
                case 948:
                    BiSolidXCircle = (_b.sent()).BiSolidXCircle;
                    return [2 /*return*/, BiSolidXCircle];
                case 949: return [4 /*yield*/, import("react-icons/bi")];
                case 950:
                    BiSolidXSquare = (_b.sent()).BiSolidXSquare;
                    return [2 /*return*/, BiSolidXSquare];
                case 951: return [4 /*yield*/, import("react-icons/bi")];
                case 952:
                    BiSolidYinYang = (_b.sent()).BiSolidYinYang;
                    return [2 /*return*/, BiSolidYinYang];
                case 953: return [4 /*yield*/, import("react-icons/bi")];
                case 954:
                    BiSolidZap = (_b.sent()).BiSolidZap;
                    return [2 /*return*/, BiSolidZap];
                case 955: return [4 /*yield*/, import("react-icons/bi")];
                case 956:
                    BiSolidZoomIn = (_b.sent()).BiSolidZoomIn;
                    return [2 /*return*/, BiSolidZoomIn];
                case 957: return [4 /*yield*/, import("react-icons/bi")];
                case 958:
                    BiSolidZoomOut = (_b.sent()).BiSolidZoomOut;
                    return [2 /*return*/, BiSolidZoomOut];
                case 959: return [4 /*yield*/, import("react-icons/bi")];
                case 960:
                    BiLogo500Px = (_b.sent()).BiLogo500Px;
                    return [2 /*return*/, BiLogo500Px];
                case 961: return [4 /*yield*/, import("react-icons/bi")];
                case 962:
                    BiLogo99Designs = (_b.sent()).BiLogo99Designs;
                    return [2 /*return*/, BiLogo99Designs];
                case 963: return [4 /*yield*/, import("react-icons/bi")];
                case 964:
                    BiLogoAdobe = (_b.sent()).BiLogoAdobe;
                    return [2 /*return*/, BiLogoAdobe];
                case 965: return [4 /*yield*/, import("react-icons/bi")];
                case 966:
                    BiLogoAirbnb = (_b.sent()).BiLogoAirbnb;
                    return [2 /*return*/, BiLogoAirbnb];
                case 967: return [4 /*yield*/, import("react-icons/bi")];
                case 968:
                    BiLogoAlgolia = (_b.sent()).BiLogoAlgolia;
                    return [2 /*return*/, BiLogoAlgolia];
                case 969: return [4 /*yield*/, import("react-icons/bi")];
                case 970:
                    BiLogoAmazon = (_b.sent()).BiLogoAmazon;
                    return [2 /*return*/, BiLogoAmazon];
                case 971: return [4 /*yield*/, import("react-icons/bi")];
                case 972:
                    BiLogoAndroid = (_b.sent()).BiLogoAndroid;
                    return [2 /*return*/, BiLogoAndroid];
                case 973: return [4 /*yield*/, import("react-icons/bi")];
                case 974:
                    BiLogoAngular = (_b.sent()).BiLogoAngular;
                    return [2 /*return*/, BiLogoAngular];
                case 975: return [4 /*yield*/, import("react-icons/bi")];
                case 976:
                    BiLogoApple = (_b.sent()).BiLogoApple;
                    return [2 /*return*/, BiLogoApple];
                case 977: return [4 /*yield*/, import("react-icons/bi")];
                case 978:
                    BiLogoAudible = (_b.sent()).BiLogoAudible;
                    return [2 /*return*/, BiLogoAudible];
                case 979: return [4 /*yield*/, import("react-icons/bi")];
                case 980:
                    BiLogoAws = (_b.sent()).BiLogoAws;
                    return [2 /*return*/, BiLogoAws];
                case 981: return [4 /*yield*/, import("react-icons/bi")];
                case 982:
                    BiLogoBaidu = (_b.sent()).BiLogoBaidu;
                    return [2 /*return*/, BiLogoBaidu];
                case 983: return [4 /*yield*/, import("react-icons/bi")];
                case 984:
                    BiLogoBehance = (_b.sent()).BiLogoBehance;
                    return [2 /*return*/, BiLogoBehance];
                case 985: return [4 /*yield*/, import("react-icons/bi")];
                case 986:
                    BiLogoBing = (_b.sent()).BiLogoBing;
                    return [2 /*return*/, BiLogoBing];
                case 987: return [4 /*yield*/, import("react-icons/bi")];
                case 988:
                    BiLogoBitcoin = (_b.sent()).BiLogoBitcoin;
                    return [2 /*return*/, BiLogoBitcoin];
                case 989: return [4 /*yield*/, import("react-icons/bi")];
                case 990:
                    BiLogoBlender = (_b.sent()).BiLogoBlender;
                    return [2 /*return*/, BiLogoBlender];
                case 991: return [4 /*yield*/, import("react-icons/bi")];
                case 992:
                    BiLogoBlogger = (_b.sent()).BiLogoBlogger;
                    return [2 /*return*/, BiLogoBlogger];
                case 993: return [4 /*yield*/, import("react-icons/bi")];
                case 994:
                    BiLogoBootstrap = (_b.sent()).BiLogoBootstrap;
                    return [2 /*return*/, BiLogoBootstrap];
                case 995: return [4 /*yield*/, import("react-icons/bi")];
                case 996:
                    BiLogoCPlusPlus = (_b.sent()).BiLogoCPlusPlus;
                    return [2 /*return*/, BiLogoCPlusPlus];
                case 997: return [4 /*yield*/, import("react-icons/bi")];
                case 998:
                    BiLogoChrome = (_b.sent()).BiLogoChrome;
                    return [2 /*return*/, BiLogoChrome];
                case 999: return [4 /*yield*/, import("react-icons/bi")];
                case 1000:
                    BiLogoCodepen = (_b.sent()).BiLogoCodepen;
                    return [2 /*return*/, BiLogoCodepen];
                case 1001: return [4 /*yield*/, import("react-icons/bi")];
                case 1002:
                    BiLogoCreativeCommons = (_b.sent()).BiLogoCreativeCommons;
                    return [2 /*return*/, BiLogoCreativeCommons];
                case 1003: return [4 /*yield*/, import("react-icons/bi")];
                case 1004:
                    BiLogoCss3 = (_b.sent()).BiLogoCss3;
                    return [2 /*return*/, BiLogoCss3];
                case 1005: return [4 /*yield*/, import("react-icons/bi")];
                case 1006:
                    BiLogoDailymotion = (_b.sent()).BiLogoDailymotion;
                    return [2 /*return*/, BiLogoDailymotion];
                case 1007: return [4 /*yield*/, import("react-icons/bi")];
                case 1008:
                    BiLogoDeezer = (_b.sent()).BiLogoDeezer;
                    return [2 /*return*/, BiLogoDeezer];
                case 1009: return [4 /*yield*/, import("react-icons/bi")];
                case 1010:
                    BiLogoDevTo = (_b.sent()).BiLogoDevTo;
                    return [2 /*return*/, BiLogoDevTo];
                case 1011: return [4 /*yield*/, import("react-icons/bi")];
                case 1012:
                    BiLogoDeviantart = (_b.sent()).BiLogoDeviantart;
                    return [2 /*return*/, BiLogoDeviantart];
                case 1013: return [4 /*yield*/, import("react-icons/bi")];
                case 1014:
                    BiLogoDigg = (_b.sent()).BiLogoDigg;
                    return [2 /*return*/, BiLogoDigg];
                case 1015: return [4 /*yield*/, import("react-icons/bi")];
                case 1016:
                    BiLogoDigitalocean = (_b.sent()).BiLogoDigitalocean;
                    return [2 /*return*/, BiLogoDigitalocean];
                case 1017: return [4 /*yield*/, import("react-icons/bi")];
                case 1018:
                    BiLogoDiscordAlt = (_b.sent()).BiLogoDiscordAlt;
                    return [2 /*return*/, BiLogoDiscordAlt];
                case 1019: return [4 /*yield*/, import("react-icons/bi")];
                case 1020:
                    BiLogoDiscord = (_b.sent()).BiLogoDiscord;
                    return [2 /*return*/, BiLogoDiscord];
                case 1021: return [4 /*yield*/, import("react-icons/bi")];
                case 1022:
                    BiLogoDiscourse = (_b.sent()).BiLogoDiscourse;
                    return [2 /*return*/, BiLogoDiscourse];
                case 1023: return [4 /*yield*/, import("react-icons/bi")];
                case 1024:
                    BiLogoDjango = (_b.sent()).BiLogoDjango;
                    return [2 /*return*/, BiLogoDjango];
                case 1025: return [4 /*yield*/, import("react-icons/bi")];
                case 1026:
                    BiLogoDocker = (_b.sent()).BiLogoDocker;
                    return [2 /*return*/, BiLogoDocker];
                case 1027: return [4 /*yield*/, import("react-icons/bi")];
                case 1028:
                    BiLogoDribbble = (_b.sent()).BiLogoDribbble;
                    return [2 /*return*/, BiLogoDribbble];
                case 1029: return [4 /*yield*/, import("react-icons/bi")];
                case 1030:
                    BiLogoDropbox = (_b.sent()).BiLogoDropbox;
                    return [2 /*return*/, BiLogoDropbox];
                case 1031: return [4 /*yield*/, import("react-icons/bi")];
                case 1032:
                    BiLogoDrupal = (_b.sent()).BiLogoDrupal;
                    return [2 /*return*/, BiLogoDrupal];
                case 1033: return [4 /*yield*/, import("react-icons/bi")];
                case 1034:
                    BiLogoEbay = (_b.sent()).BiLogoEbay;
                    return [2 /*return*/, BiLogoEbay];
                case 1035: return [4 /*yield*/, import("react-icons/bi")];
                case 1036:
                    BiLogoEdge = (_b.sent()).BiLogoEdge;
                    return [2 /*return*/, BiLogoEdge];
                case 1037: return [4 /*yield*/, import("react-icons/bi")];
                case 1038:
                    BiLogoEtsy = (_b.sent()).BiLogoEtsy;
                    return [2 /*return*/, BiLogoEtsy];
                case 1039: return [4 /*yield*/, import("react-icons/bi")];
                case 1040:
                    BiLogoFacebookCircle = (_b.sent()).BiLogoFacebookCircle;
                    return [2 /*return*/, BiLogoFacebookCircle];
                case 1041: return [4 /*yield*/, import("react-icons/bi")];
                case 1042:
                    BiLogoFacebookSquare = (_b.sent()).BiLogoFacebookSquare;
                    return [2 /*return*/, BiLogoFacebookSquare];
                case 1043: return [4 /*yield*/, import("react-icons/bi")];
                case 1044:
                    BiLogoFacebook = (_b.sent()).BiLogoFacebook;
                    return [2 /*return*/, BiLogoFacebook];
                case 1045: return [4 /*yield*/, import("react-icons/bi")];
                case 1046:
                    BiLogoFigma = (_b.sent()).BiLogoFigma;
                    return [2 /*return*/, BiLogoFigma];
                case 1047: return [4 /*yield*/, import("react-icons/bi")];
                case 1048:
                    BiLogoFirebase = (_b.sent()).BiLogoFirebase;
                    return [2 /*return*/, BiLogoFirebase];
                case 1049: return [4 /*yield*/, import("react-icons/bi")];
                case 1050:
                    BiLogoFirefox = (_b.sent()).BiLogoFirefox;
                    return [2 /*return*/, BiLogoFirefox];
                case 1051: return [4 /*yield*/, import("react-icons/bi")];
                case 1052:
                    BiLogoFlask = (_b.sent()).BiLogoFlask;
                    return [2 /*return*/, BiLogoFlask];
                case 1053: return [4 /*yield*/, import("react-icons/bi")];
                case 1054:
                    BiLogoFlickrSquare = (_b.sent()).BiLogoFlickrSquare;
                    return [2 /*return*/, BiLogoFlickrSquare];
                case 1055: return [4 /*yield*/, import("react-icons/bi")];
                case 1056:
                    BiLogoFlickr = (_b.sent()).BiLogoFlickr;
                    return [2 /*return*/, BiLogoFlickr];
                case 1057: return [4 /*yield*/, import("react-icons/bi")];
                case 1058:
                    BiLogoFlutter = (_b.sent()).BiLogoFlutter;
                    return [2 /*return*/, BiLogoFlutter];
                case 1059: return [4 /*yield*/, import("react-icons/bi")];
                case 1060:
                    BiLogoFoursquare = (_b.sent()).BiLogoFoursquare;
                    return [2 /*return*/, BiLogoFoursquare];
                case 1061: return [4 /*yield*/, import("react-icons/bi")];
                case 1062:
                    BiLogoGit = (_b.sent()).BiLogoGit;
                    return [2 /*return*/, BiLogoGit];
                case 1063: return [4 /*yield*/, import("react-icons/bi")];
                case 1064:
                    BiLogoGithub = (_b.sent()).BiLogoGithub;
                    return [2 /*return*/, BiLogoGithub];
                case 1065: return [4 /*yield*/, import("react-icons/bi")];
                case 1066:
                    BiLogoGitlab = (_b.sent()).BiLogoGitlab;
                    return [2 /*return*/, BiLogoGitlab];
                case 1067: return [4 /*yield*/, import("react-icons/bi")];
                case 1068:
                    BiLogoGmail = (_b.sent()).BiLogoGmail;
                    return [2 /*return*/, BiLogoGmail];
                case 1069: return [4 /*yield*/, import("react-icons/bi")];
                case 1070:
                    BiLogoGoLang = (_b.sent()).BiLogoGoLang;
                    return [2 /*return*/, BiLogoGoLang];
                case 1071: return [4 /*yield*/, import("react-icons/bi")];
                case 1072:
                    BiLogoGoogleCloud = (_b.sent()).BiLogoGoogleCloud;
                    return [2 /*return*/, BiLogoGoogleCloud];
                case 1073: return [4 /*yield*/, import("react-icons/bi")];
                case 1074:
                    BiLogoGooglePlusCircle = (_b.sent()).BiLogoGooglePlusCircle;
                    return [2 /*return*/, BiLogoGooglePlusCircle];
                case 1075: return [4 /*yield*/, import("react-icons/bi")];
                case 1076:
                    BiLogoGooglePlus = (_b.sent()).BiLogoGooglePlus;
                    return [2 /*return*/, BiLogoGooglePlus];
                case 1077: return [4 /*yield*/, import("react-icons/bi")];
                case 1078:
                    BiLogoGoogle = (_b.sent()).BiLogoGoogle;
                    return [2 /*return*/, BiLogoGoogle];
                case 1079: return [4 /*yield*/, import("react-icons/bi")];
                case 1080:
                    BiLogoGraphql = (_b.sent()).BiLogoGraphql;
                    return [2 /*return*/, BiLogoGraphql];
                case 1081: return [4 /*yield*/, import("react-icons/bi")];
                case 1082:
                    BiLogoHeroku = (_b.sent()).BiLogoHeroku;
                    return [2 /*return*/, BiLogoHeroku];
                case 1083: return [4 /*yield*/, import("react-icons/bi")];
                case 1084:
                    BiLogoHtml5 = (_b.sent()).BiLogoHtml5;
                    return [2 /*return*/, BiLogoHtml5];
                case 1085: return [4 /*yield*/, import("react-icons/bi")];
                case 1086:
                    BiLogoImdb = (_b.sent()).BiLogoImdb;
                    return [2 /*return*/, BiLogoImdb];
                case 1087: return [4 /*yield*/, import("react-icons/bi")];
                case 1088:
                    BiLogoInstagramAlt = (_b.sent()).BiLogoInstagramAlt;
                    return [2 /*return*/, BiLogoInstagramAlt];
                case 1089: return [4 /*yield*/, import("react-icons/bi")];
                case 1090:
                    BiLogoInstagram = (_b.sent()).BiLogoInstagram;
                    return [2 /*return*/, BiLogoInstagram];
                case 1091: return [4 /*yield*/, import("react-icons/bi")];
                case 1092:
                    BiLogoInternetExplorer = (_b.sent()).BiLogoInternetExplorer;
                    return [2 /*return*/, BiLogoInternetExplorer];
                case 1093: return [4 /*yield*/, import("react-icons/bi")];
                case 1094:
                    BiLogoInvision = (_b.sent()).BiLogoInvision;
                    return [2 /*return*/, BiLogoInvision];
                case 1095: return [4 /*yield*/, import("react-icons/bi")];
                case 1096:
                    BiLogoJava = (_b.sent()).BiLogoJava;
                    return [2 /*return*/, BiLogoJava];
                case 1097: return [4 /*yield*/, import("react-icons/bi")];
                case 1098:
                    BiLogoJavascript = (_b.sent()).BiLogoJavascript;
                    return [2 /*return*/, BiLogoJavascript];
                case 1099: return [4 /*yield*/, import("react-icons/bi")];
                case 1100:
                    BiLogoJoomla = (_b.sent()).BiLogoJoomla;
                    return [2 /*return*/, BiLogoJoomla];
                case 1101: return [4 /*yield*/, import("react-icons/bi")];
                case 1102:
                    BiLogoJquery = (_b.sent()).BiLogoJquery;
                    return [2 /*return*/, BiLogoJquery];
                case 1103: return [4 /*yield*/, import("react-icons/bi")];
                case 1104:
                    BiLogoJsfiddle = (_b.sent()).BiLogoJsfiddle;
                    return [2 /*return*/, BiLogoJsfiddle];
                case 1105: return [4 /*yield*/, import("react-icons/bi")];
                case 1106:
                    BiLogoKickstarter = (_b.sent()).BiLogoKickstarter;
                    return [2 /*return*/, BiLogoKickstarter];
                case 1107: return [4 /*yield*/, import("react-icons/bi")];
                case 1108:
                    BiLogoKubernetes = (_b.sent()).BiLogoKubernetes;
                    return [2 /*return*/, BiLogoKubernetes];
                case 1109: return [4 /*yield*/, import("react-icons/bi")];
                case 1110:
                    BiLogoLess = (_b.sent()).BiLogoLess;
                    return [2 /*return*/, BiLogoLess];
                case 1111: return [4 /*yield*/, import("react-icons/bi")];
                case 1112:
                    BiLogoLinkedinSquare = (_b.sent()).BiLogoLinkedinSquare;
                    return [2 /*return*/, BiLogoLinkedinSquare];
                case 1113: return [4 /*yield*/, import("react-icons/bi")];
                case 1114:
                    BiLogoLinkedin = (_b.sent()).BiLogoLinkedin;
                    return [2 /*return*/, BiLogoLinkedin];
                case 1115: return [4 /*yield*/, import("react-icons/bi")];
                case 1116:
                    BiLogoMagento = (_b.sent()).BiLogoMagento;
                    return [2 /*return*/, BiLogoMagento];
                case 1117: return [4 /*yield*/, import("react-icons/bi")];
                case 1118:
                    BiLogoMailchimp = (_b.sent()).BiLogoMailchimp;
                    return [2 /*return*/, BiLogoMailchimp];
                case 1119: return [4 /*yield*/, import("react-icons/bi")];
                case 1120:
                    BiLogoMarkdown = (_b.sent()).BiLogoMarkdown;
                    return [2 /*return*/, BiLogoMarkdown];
                case 1121: return [4 /*yield*/, import("react-icons/bi")];
                case 1122:
                    BiLogoMastercard = (_b.sent()).BiLogoMastercard;
                    return [2 /*return*/, BiLogoMastercard];
                case 1123: return [4 /*yield*/, import("react-icons/bi")];
                case 1124:
                    BiLogoMastodon = (_b.sent()).BiLogoMastodon;
                    return [2 /*return*/, BiLogoMastodon];
                case 1125: return [4 /*yield*/, import("react-icons/bi")];
                case 1126:
                    BiLogoMediumOld = (_b.sent()).BiLogoMediumOld;
                    return [2 /*return*/, BiLogoMediumOld];
                case 1127: return [4 /*yield*/, import("react-icons/bi")];
                case 1128:
                    BiLogoMediumSquare = (_b.sent()).BiLogoMediumSquare;
                    return [2 /*return*/, BiLogoMediumSquare];
                case 1129: return [4 /*yield*/, import("react-icons/bi")];
                case 1130:
                    BiLogoMedium = (_b.sent()).BiLogoMedium;
                    return [2 /*return*/, BiLogoMedium];
                case 1131: return [4 /*yield*/, import("react-icons/bi")];
                case 1132:
                    BiLogoMessenger = (_b.sent()).BiLogoMessenger;
                    return [2 /*return*/, BiLogoMessenger];
                case 1133: return [4 /*yield*/, import("react-icons/bi")];
                case 1134:
                    BiLogoMeta = (_b.sent()).BiLogoMeta;
                    return [2 /*return*/, BiLogoMeta];
                case 1135: return [4 /*yield*/, import("react-icons/bi")];
                case 1136:
                    BiLogoMicrosoftTeams = (_b.sent()).BiLogoMicrosoftTeams;
                    return [2 /*return*/, BiLogoMicrosoftTeams];
                case 1137: return [4 /*yield*/, import("react-icons/bi")];
                case 1138:
                    BiLogoMicrosoft = (_b.sent()).BiLogoMicrosoft;
                    return [2 /*return*/, BiLogoMicrosoft];
                case 1139: return [4 /*yield*/, import("react-icons/bi")];
                case 1140:
                    BiLogoMongodb = (_b.sent()).BiLogoMongodb;
                    return [2 /*return*/, BiLogoMongodb];
                case 1141: return [4 /*yield*/, import("react-icons/bi")];
                case 1142:
                    BiLogoNetlify = (_b.sent()).BiLogoNetlify;
                    return [2 /*return*/, BiLogoNetlify];
                case 1143: return [4 /*yield*/, import("react-icons/bi")];
                case 1144:
                    BiLogoNodejs = (_b.sent()).BiLogoNodejs;
                    return [2 /*return*/, BiLogoNodejs];
                case 1145: return [4 /*yield*/, import("react-icons/bi")];
                case 1146:
                    BiLogoOkRu = (_b.sent()).BiLogoOkRu;
                    return [2 /*return*/, BiLogoOkRu];
                case 1147: return [4 /*yield*/, import("react-icons/bi")];
                case 1148:
                    BiLogoOpera = (_b.sent()).BiLogoOpera;
                    return [2 /*return*/, BiLogoOpera];
                case 1149: return [4 /*yield*/, import("react-icons/bi")];
                case 1150:
                    BiLogoPatreon = (_b.sent()).BiLogoPatreon;
                    return [2 /*return*/, BiLogoPatreon];
                case 1151: return [4 /*yield*/, import("react-icons/bi")];
                case 1152:
                    BiLogoPaypal = (_b.sent()).BiLogoPaypal;
                    return [2 /*return*/, BiLogoPaypal];
                case 1153: return [4 /*yield*/, import("react-icons/bi")];
                case 1154:
                    BiLogoPeriscope = (_b.sent()).BiLogoPeriscope;
                    return [2 /*return*/, BiLogoPeriscope];
                case 1155: return [4 /*yield*/, import("react-icons/bi")];
                case 1156:
                    BiLogoPhp = (_b.sent()).BiLogoPhp;
                    return [2 /*return*/, BiLogoPhp];
                case 1157: return [4 /*yield*/, import("react-icons/bi")];
                case 1158:
                    BiLogoPinterestAlt = (_b.sent()).BiLogoPinterestAlt;
                    return [2 /*return*/, BiLogoPinterestAlt];
                case 1159: return [4 /*yield*/, import("react-icons/bi")];
                case 1160:
                    BiLogoPinterest = (_b.sent()).BiLogoPinterest;
                    return [2 /*return*/, BiLogoPinterest];
                case 1161: return [4 /*yield*/, import("react-icons/bi")];
                case 1162:
                    BiLogoPlayStore = (_b.sent()).BiLogoPlayStore;
                    return [2 /*return*/, BiLogoPlayStore];
                case 1163: return [4 /*yield*/, import("react-icons/bi")];
                case 1164:
                    BiLogoPocket = (_b.sent()).BiLogoPocket;
                    return [2 /*return*/, BiLogoPocket];
                case 1165: return [4 /*yield*/, import("react-icons/bi")];
                case 1166:
                    BiLogoPostgresql = (_b.sent()).BiLogoPostgresql;
                    return [2 /*return*/, BiLogoPostgresql];
                case 1167: return [4 /*yield*/, import("react-icons/bi")];
                case 1168:
                    BiLogoProductHunt = (_b.sent()).BiLogoProductHunt;
                    return [2 /*return*/, BiLogoProductHunt];
                case 1169: return [4 /*yield*/, import("react-icons/bi")];
                case 1170:
                    BiLogoPython = (_b.sent()).BiLogoPython;
                    return [2 /*return*/, BiLogoPython];
                case 1171: return [4 /*yield*/, import("react-icons/bi")];
                case 1172:
                    BiLogoQuora = (_b.sent()).BiLogoQuora;
                    return [2 /*return*/, BiLogoQuora];
                case 1173: return [4 /*yield*/, import("react-icons/bi")];
                case 1174:
                    BiLogoReact = (_b.sent()).BiLogoReact;
                    return [2 /*return*/, BiLogoReact];
                case 1175: return [4 /*yield*/, import("react-icons/bi")];
                case 1176:
                    BiLogoRedbubble = (_b.sent()).BiLogoRedbubble;
                    return [2 /*return*/, BiLogoRedbubble];
                case 1177: return [4 /*yield*/, import("react-icons/bi")];
                case 1178:
                    BiLogoReddit = (_b.sent()).BiLogoReddit;
                    return [2 /*return*/, BiLogoReddit];
                case 1179: return [4 /*yield*/, import("react-icons/bi")];
                case 1180:
                    BiLogoRedux = (_b.sent()).BiLogoRedux;
                    return [2 /*return*/, BiLogoRedux];
                case 1181: return [4 /*yield*/, import("react-icons/bi")];
                case 1182:
                    BiLogoSass = (_b.sent()).BiLogoSass;
                    return [2 /*return*/, BiLogoSass];
                case 1183: return [4 /*yield*/, import("react-icons/bi")];
                case 1184:
                    BiLogoShopify = (_b.sent()).BiLogoShopify;
                    return [2 /*return*/, BiLogoShopify];
                case 1185: return [4 /*yield*/, import("react-icons/bi")];
                case 1186:
                    BiLogoSketch = (_b.sent()).BiLogoSketch;
                    return [2 /*return*/, BiLogoSketch];
                case 1187: return [4 /*yield*/, import("react-icons/bi")];
                case 1188:
                    BiLogoSkype = (_b.sent()).BiLogoSkype;
                    return [2 /*return*/, BiLogoSkype];
                case 1189: return [4 /*yield*/, import("react-icons/bi")];
                case 1190:
                    BiLogoSlackOld = (_b.sent()).BiLogoSlackOld;
                    return [2 /*return*/, BiLogoSlackOld];
                case 1191: return [4 /*yield*/, import("react-icons/bi")];
                case 1192:
                    BiLogoSlack = (_b.sent()).BiLogoSlack;
                    return [2 /*return*/, BiLogoSlack];
                case 1193: return [4 /*yield*/, import("react-icons/bi")];
                case 1194:
                    BiLogoSnapchat = (_b.sent()).BiLogoSnapchat;
                    return [2 /*return*/, BiLogoSnapchat];
                case 1195: return [4 /*yield*/, import("react-icons/bi")];
                case 1196:
                    BiLogoSoundcloud = (_b.sent()).BiLogoSoundcloud;
                    return [2 /*return*/, BiLogoSoundcloud];
                case 1197: return [4 /*yield*/, import("react-icons/bi")];
                case 1198:
                    BiLogoSpotify = (_b.sent()).BiLogoSpotify;
                    return [2 /*return*/, BiLogoSpotify];
                case 1199: return [4 /*yield*/, import("react-icons/bi")];
                case 1200:
                    BiLogoSpringBoot = (_b.sent()).BiLogoSpringBoot;
                    return [2 /*return*/, BiLogoSpringBoot];
                case 1201: return [4 /*yield*/, import("react-icons/bi")];
                case 1202:
                    BiLogoSquarespace = (_b.sent()).BiLogoSquarespace;
                    return [2 /*return*/, BiLogoSquarespace];
                case 1203: return [4 /*yield*/, import("react-icons/bi")];
                case 1204:
                    BiLogoStackOverflow = (_b.sent()).BiLogoStackOverflow;
                    return [2 /*return*/, BiLogoStackOverflow];
                case 1205: return [4 /*yield*/, import("react-icons/bi")];
                case 1206:
                    BiLogoSteam = (_b.sent()).BiLogoSteam;
                    return [2 /*return*/, BiLogoSteam];
                case 1207: return [4 /*yield*/, import("react-icons/bi")];
                case 1208:
                    BiLogoStripe = (_b.sent()).BiLogoStripe;
                    return [2 /*return*/, BiLogoStripe];
                case 1209: return [4 /*yield*/, import("react-icons/bi")];
                case 1210:
                    BiLogoTailwindCss = (_b.sent()).BiLogoTailwindCss;
                    return [2 /*return*/, BiLogoTailwindCss];
                case 1211: return [4 /*yield*/, import("react-icons/bi")];
                case 1212:
                    BiLogoTelegram = (_b.sent()).BiLogoTelegram;
                    return [2 /*return*/, BiLogoTelegram];
                case 1213: return [4 /*yield*/, import("react-icons/bi")];
                case 1214:
                    BiLogoTiktok = (_b.sent()).BiLogoTiktok;
                    return [2 /*return*/, BiLogoTiktok];
                case 1215: return [4 /*yield*/, import("react-icons/bi")];
                case 1216:
                    BiLogoTrello = (_b.sent()).BiLogoTrello;
                    return [2 /*return*/, BiLogoTrello];
                case 1217: return [4 /*yield*/, import("react-icons/bi")];
                case 1218:
                    BiLogoTripAdvisor = (_b.sent()).BiLogoTripAdvisor;
                    return [2 /*return*/, BiLogoTripAdvisor];
                case 1219: return [4 /*yield*/, import("react-icons/bi")];
                case 1220:
                    BiLogoTumblr = (_b.sent()).BiLogoTumblr;
                    return [2 /*return*/, BiLogoTumblr];
                case 1221: return [4 /*yield*/, import("react-icons/bi")];
                case 1222:
                    BiLogoTux = (_b.sent()).BiLogoTux;
                    return [2 /*return*/, BiLogoTux];
                case 1223: return [4 /*yield*/, import("react-icons/bi")];
                case 1224:
                    BiLogoTwitch = (_b.sent()).BiLogoTwitch;
                    return [2 /*return*/, BiLogoTwitch];
                case 1225: return [4 /*yield*/, import("react-icons/bi")];
                case 1226:
                    BiLogoTwitter = (_b.sent()).BiLogoTwitter;
                    return [2 /*return*/, BiLogoTwitter];
                case 1227: return [4 /*yield*/, import("react-icons/bi")];
                case 1228:
                    BiLogoTypescript = (_b.sent()).BiLogoTypescript;
                    return [2 /*return*/, BiLogoTypescript];
                case 1229: return [4 /*yield*/, import("react-icons/bi")];
                case 1230:
                    BiLogoUnity = (_b.sent()).BiLogoUnity;
                    return [2 /*return*/, BiLogoUnity];
                case 1231: return [4 /*yield*/, import("react-icons/bi")];
                case 1232:
                    BiLogoUnsplash = (_b.sent()).BiLogoUnsplash;
                    return [2 /*return*/, BiLogoUnsplash];
                case 1233: return [4 /*yield*/, import("react-icons/bi")];
                case 1234:
                    BiLogoUpwork = (_b.sent()).BiLogoUpwork;
                    return [2 /*return*/, BiLogoUpwork];
                case 1235: return [4 /*yield*/, import("react-icons/bi")];
                case 1236:
                    BiLogoVenmo = (_b.sent()).BiLogoVenmo;
                    return [2 /*return*/, BiLogoVenmo];
                case 1237: return [4 /*yield*/, import("react-icons/bi")];
                case 1238:
                    BiLogoVimeo = (_b.sent()).BiLogoVimeo;
                    return [2 /*return*/, BiLogoVimeo];
                case 1239: return [4 /*yield*/, import("react-icons/bi")];
                case 1240:
                    BiLogoVisa = (_b.sent()).BiLogoVisa;
                    return [2 /*return*/, BiLogoVisa];
                case 1241: return [4 /*yield*/, import("react-icons/bi")];
                case 1242:
                    BiLogoVisualStudio = (_b.sent()).BiLogoVisualStudio;
                    return [2 /*return*/, BiLogoVisualStudio];
                case 1243: return [4 /*yield*/, import("react-icons/bi")];
                case 1244:
                    BiLogoVk = (_b.sent()).BiLogoVk;
                    return [2 /*return*/, BiLogoVk];
                case 1245: return [4 /*yield*/, import("react-icons/bi")];
                case 1246:
                    BiLogoVuejs = (_b.sent()).BiLogoVuejs;
                    return [2 /*return*/, BiLogoVuejs];
                case 1247: return [4 /*yield*/, import("react-icons/bi")];
                case 1248:
                    BiLogoWhatsappSquare = (_b.sent()).BiLogoWhatsappSquare;
                    return [2 /*return*/, BiLogoWhatsappSquare];
                case 1249: return [4 /*yield*/, import("react-icons/bi")];
                case 1250:
                    BiLogoWhatsapp = (_b.sent()).BiLogoWhatsapp;
                    return [2 /*return*/, BiLogoWhatsapp];
                case 1251: return [4 /*yield*/, import("react-icons/bi")];
                case 1252:
                    BiLogoWikipedia = (_b.sent()).BiLogoWikipedia;
                    return [2 /*return*/, BiLogoWikipedia];
                case 1253: return [4 /*yield*/, import("react-icons/bi")];
                case 1254:
                    BiLogoWindows = (_b.sent()).BiLogoWindows;
                    return [2 /*return*/, BiLogoWindows];
                case 1255: return [4 /*yield*/, import("react-icons/bi")];
                case 1256:
                    BiLogoWix = (_b.sent()).BiLogoWix;
                    return [2 /*return*/, BiLogoWix];
                case 1257: return [4 /*yield*/, import("react-icons/bi")];
                case 1258:
                    BiLogoWordpress = (_b.sent()).BiLogoWordpress;
                    return [2 /*return*/, BiLogoWordpress];
                case 1259: return [4 /*yield*/, import("react-icons/bi")];
                case 1260:
                    BiLogoXing = (_b.sent()).BiLogoXing;
                    return [2 /*return*/, BiLogoXing];
                case 1261: return [4 /*yield*/, import("react-icons/bi")];
                case 1262:
                    BiLogoYahoo = (_b.sent()).BiLogoYahoo;
                    return [2 /*return*/, BiLogoYahoo];
                case 1263: return [4 /*yield*/, import("react-icons/bi")];
                case 1264:
                    BiLogoYelp = (_b.sent()).BiLogoYelp;
                    return [2 /*return*/, BiLogoYelp];
                case 1265: return [4 /*yield*/, import("react-icons/bi")];
                case 1266:
                    BiLogoYoutube = (_b.sent()).BiLogoYoutube;
                    return [2 /*return*/, BiLogoYoutube];
                case 1267: return [4 /*yield*/, import("react-icons/bi")];
                case 1268:
                    BiLogoZoom = (_b.sent()).BiLogoZoom;
                    return [2 /*return*/, BiLogoZoom];
                case 1269: return [2 /*return*/];
            }
        });
    });
}
